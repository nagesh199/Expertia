import axios from 'axios';
import React from 'react';
import { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styles from "./main.module.css"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    useDisclosure,
    FormControl,
    FormLabel,
    Box,
    Image
  } from '@chakra-ui/react'

export const Jobs = ()=>{
    const {id} = useParams();
    const [single,setSingle] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    console.log(id,"id")

    useEffect(()=>{
       axios.get(`http://localhost:8080/jobs/get/${id}`).then(({data})=>{
              setSingle(data)
       })
    },[])

    const onSave = ()=>{
        onClose()
    }
    
    return <div>
                   <Box className={styles.single_main}>
                        <Image src={single.imgUrl}/>
                        <p>{single.companyName}</p>
                        <h2>{single.role}</h2>
                        <p>{single.postDate}</p>
                        <p>{single.position}</p>
                        <p>{single.location}</p>
                        <p>{single.type}</p>
                        <p>{single.salary}</p>
                    </Box>
                    <Box>
                        <Button  colorScheme='blue' onClick={onOpen}>Apply</Button>
                        
                            <Modal
                                initialFocusRef={initialRef}
                                finalFocusRef={finalRef}
                                isOpen={isOpen}
                                onClose={onClose}
                            >
                                <ModalOverlay />
                                <ModalContent>
                                <ModalHeader>Create your account</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={4}>
                                    <FormControl>
                                    <FormLabel>Name</FormLabel>
                                    <Input ref={initialRef} placeholder='Name' />
                                    </FormControl>

                                    <FormControl mt={4}>
                                    <FormLabel>Email</FormLabel>
                                    <Input type="email" placeholder='Email' />
                                    </FormControl>

                                    <FormControl mt={4}>
                                    <FormLabel>Mobile Number</FormLabel>
                                    <Input type="number" placeholder='Mobile Number' />
                                    </FormControl>

                                    <FormControl mt={4}>
                                    <FormLabel>Skills</FormLabel>
                                    <Input type="text" placeholder='Enter your skill' />
                                    </FormControl>

                                    <FormControl mt={4}>
                                    <FormLabel>Resume</FormLabel>
                                    <Input type="text" placeholder='Enter your Resume link' />
                                    </FormControl>

            
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onSave}>
                                    Save
                                    </Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                                </ModalContent>
                            </Modal>
                    </Box>
    </div>
}