import React, { useState } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Heading, Button } from "@chakra-ui/react";

const Index = () => {
  const [students, setStudents] = useState([
    { rollNumber: 1, name: "John Doe", pass: true },
    { rollNumber: 2, name: "Jane Smith", pass: true },
    { rollNumber: 3, name: "Mike Johnson", pass: true },
    { rollNumber: 4, name: "Emily Brown", pass: true },
  ]);

  const handlePassChange = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index].pass = !updatedStudents[index].pass;
    setStudents(updatedStudents);
  };

  const handlePromote = () => {
    // Logic to handle promotion based on pass/fail status
    console.log("Promoting students:", students);
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Student Promotion
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Roll Number</Th>
            <Th>Name</Th>
            <Th>Pass/Fail</Th>
          </Tr>
        </Thead>
        <Tbody>
          {students.map((student, index) => (
            <Tr key={student.rollNumber}>
              <Td>{student.rollNumber}</Td>
              <Td>{student.name}</Td>
              <Td>
                <Checkbox isChecked={student.pass} onChange={() => handlePassChange(index)}>
                  Pass
                </Checkbox>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Button mt={4} colorScheme="blue" onClick={handlePromote}>
        Promote
      </Button>
    </Box>
  );
};

export default Index;
