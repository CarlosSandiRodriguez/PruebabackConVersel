const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await prisma.teacher.findMany();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getTeacherById = async (req, res) => {
  try {
    const teachers = await prisma.teacher.findUnique({
      where: {

        id: parseInt(req.params.id),

      },
    });
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve teachers' });
  }
};





exports.createTeacher = async (req, res) => {
  try {
    const newTeacher = await prisma.teacher.create({ data: req.body });
    res.json(newTeacher);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create teacher' });
  }
};

exports.updateTeacher = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const updatedTeacher = await prisma.teacher.update({
      where: { id },
      data: req.body
    });
    res.json(updatedTeacher);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update teacher' });
  }
};

exports.deleteTeacher = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.teacher.delete({ where: { id } });
    res.json({ message: 'Teacher deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete teacher' });
  }
};


//WOOOOOOOOOOOOOOOOOOOOOOOOOOW
exports.LoginTeacher = async (req, res) => {


const id = parseInt(req.params.id);
  try {
    await prisma.teacher.findUnique({ where: { id } });
    res.json({ message: 'Teacher deleted' });
    
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete teacher' });
  }
};

