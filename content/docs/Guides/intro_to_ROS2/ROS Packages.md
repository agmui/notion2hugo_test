---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>

<summary>What are ROS Packages?</summary>

ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y2FTIMV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGFz4OGF%2FIMHAboDxPc90O64hgXtjoAST8LMcOB%2BAvhAiEAn33ot3%2F0eTnav1yHAlgmNZqAQTAVidhUTS6NFPjSplQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPaDsfgAXWdKzHlkCCrcA2ha%2B2h5R%2F8Ae4Ykab9YuFmn%2F7QR%2B5BY9iQ7xA1Ub%2F%2FaESnhHEf7YFfZprC5XsoHaUjU7jvtrenKrYc3TH%2F%2F1cuxYlpjAw2Z%2B7s%2BpLe%2Fmc69EZcBvF7vRP6jAr7ABODCWxqR7oeOsk1vEdr2WJ1R%2BVt7wpVpdGaQLBE0grPjJuexYwedapLooqFtFjOVh8OPokZVuBkFRcuRmE1d6vnLfdOF8Y8YQ8nuEh3yuCRJuEL7kdFZKc5l3aCYIUzadqntceKh1IbiIeokhcvl7steCrVxfPk7EegEcjBUu6dTBSs5Ny0L6EJl7JxDsXB98xcIt5mLHVKNNi74zxWb0FVLVqMNFshKQnDzGqsCCz2Cuu5%2FippPD6ibjdFJen7csrdsEP3L5X1y3Hlx679XbDYypCspPBI5qC8bGMfiqR33wl7dlVGzDXILHTiqJkq4hjM7JUUw%2BNMl0U9HIQWS8nYIk%2FSBKxcWZo8pVv18Vbnfa9%2BXAeB6%2B9MnmZ%2FYaqSx4x4Y1BbB4DHmsR39ifZI8HuibpOVErTDkFsCHX%2B5K%2Bo8o4hakH95%2Bvbbu%2Fve2rHoTbUGeAwbjewfuJHw9pr%2BUSdXfYl0JtLcrT%2FPJz4loEFh2bemu9fZNiHt%2BlC2kdKIMN7x%2BL8GOqUBfvYUuSWeftDQ9Gq9eUZKuPWQ20YtYr988HvffgATMAbgkqwtSqMa7J5vIq461AEJGWkUWUKrMlirxHzx%2FDbh0I0c1aAMCjsplf14Sb643c3qLDQg%2FIPxq38raubaVfCysSNvjaCvWM08U4kiZk2L03znTuB%2BiUAJSzps5wu%2BpOAKo6zOCWH%2FzFlE2%2FTJXxdaGmwt%2FnSjCkD6VCWnYPYY09Uv4dmJ&X-Amz-Signature=aa37b63f28860e65153f19deb5cf1983c595e81613e035215b85d7e38f626aec&X-Amz-SignedHeaders=host&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y2FTIMV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGFz4OGF%2FIMHAboDxPc90O64hgXtjoAST8LMcOB%2BAvhAiEAn33ot3%2F0eTnav1yHAlgmNZqAQTAVidhUTS6NFPjSplQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPaDsfgAXWdKzHlkCCrcA2ha%2B2h5R%2F8Ae4Ykab9YuFmn%2F7QR%2B5BY9iQ7xA1Ub%2F%2FaESnhHEf7YFfZprC5XsoHaUjU7jvtrenKrYc3TH%2F%2F1cuxYlpjAw2Z%2B7s%2BpLe%2Fmc69EZcBvF7vRP6jAr7ABODCWxqR7oeOsk1vEdr2WJ1R%2BVt7wpVpdGaQLBE0grPjJuexYwedapLooqFtFjOVh8OPokZVuBkFRcuRmE1d6vnLfdOF8Y8YQ8nuEh3yuCRJuEL7kdFZKc5l3aCYIUzadqntceKh1IbiIeokhcvl7steCrVxfPk7EegEcjBUu6dTBSs5Ny0L6EJl7JxDsXB98xcIt5mLHVKNNi74zxWb0FVLVqMNFshKQnDzGqsCCz2Cuu5%2FippPD6ibjdFJen7csrdsEP3L5X1y3Hlx679XbDYypCspPBI5qC8bGMfiqR33wl7dlVGzDXILHTiqJkq4hjM7JUUw%2BNMl0U9HIQWS8nYIk%2FSBKxcWZo8pVv18Vbnfa9%2BXAeB6%2B9MnmZ%2FYaqSx4x4Y1BbB4DHmsR39ifZI8HuibpOVErTDkFsCHX%2B5K%2Bo8o4hakH95%2Bvbbu%2Fve2rHoTbUGeAwbjewfuJHw9pr%2BUSdXfYl0JtLcrT%2FPJz4loEFh2bemu9fZNiHt%2BlC2kdKIMN7x%2BL8GOqUBfvYUuSWeftDQ9Gq9eUZKuPWQ20YtYr988HvffgATMAbgkqwtSqMa7J5vIq461AEJGWkUWUKrMlirxHzx%2FDbh0I0c1aAMCjsplf14Sb643c3qLDQg%2FIPxq38raubaVfCysSNvjaCvWM08U4kiZk2L03znTuB%2BiUAJSzps5wu%2BpOAKo6zOCWH%2FzFlE2%2FTJXxdaGmwt%2FnSjCkD6VCWnYPYY09Uv4dmJ&X-Amz-Signature=773cfe8ddf8655b4855583c84917803c357313eea042c69bcd3ca5a486ef6239&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y2FTIMV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGFz4OGF%2FIMHAboDxPc90O64hgXtjoAST8LMcOB%2BAvhAiEAn33ot3%2F0eTnav1yHAlgmNZqAQTAVidhUTS6NFPjSplQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPaDsfgAXWdKzHlkCCrcA2ha%2B2h5R%2F8Ae4Ykab9YuFmn%2F7QR%2B5BY9iQ7xA1Ub%2F%2FaESnhHEf7YFfZprC5XsoHaUjU7jvtrenKrYc3TH%2F%2F1cuxYlpjAw2Z%2B7s%2BpLe%2Fmc69EZcBvF7vRP6jAr7ABODCWxqR7oeOsk1vEdr2WJ1R%2BVt7wpVpdGaQLBE0grPjJuexYwedapLooqFtFjOVh8OPokZVuBkFRcuRmE1d6vnLfdOF8Y8YQ8nuEh3yuCRJuEL7kdFZKc5l3aCYIUzadqntceKh1IbiIeokhcvl7steCrVxfPk7EegEcjBUu6dTBSs5Ny0L6EJl7JxDsXB98xcIt5mLHVKNNi74zxWb0FVLVqMNFshKQnDzGqsCCz2Cuu5%2FippPD6ibjdFJen7csrdsEP3L5X1y3Hlx679XbDYypCspPBI5qC8bGMfiqR33wl7dlVGzDXILHTiqJkq4hjM7JUUw%2BNMl0U9HIQWS8nYIk%2FSBKxcWZo8pVv18Vbnfa9%2BXAeB6%2B9MnmZ%2FYaqSx4x4Y1BbB4DHmsR39ifZI8HuibpOVErTDkFsCHX%2B5K%2Bo8o4hakH95%2Bvbbu%2Fve2rHoTbUGeAwbjewfuJHw9pr%2BUSdXfYl0JtLcrT%2FPJz4loEFh2bemu9fZNiHt%2BlC2kdKIMN7x%2BL8GOqUBfvYUuSWeftDQ9Gq9eUZKuPWQ20YtYr988HvffgATMAbgkqwtSqMa7J5vIq461AEJGWkUWUKrMlirxHzx%2FDbh0I0c1aAMCjsplf14Sb643c3qLDQg%2FIPxq38raubaVfCysSNvjaCvWM08U4kiZk2L03znTuB%2BiUAJSzps5wu%2BpOAKo6zOCWH%2FzFlE2%2FTJXxdaGmwt%2FnSjCkD6VCWnYPYY09Uv4dmJ&X-Amz-Signature=b3c51225c5da12d2c40411702a497edc8e83c89f106987215c0dc67d29254ad0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y2FTIMV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGFz4OGF%2FIMHAboDxPc90O64hgXtjoAST8LMcOB%2BAvhAiEAn33ot3%2F0eTnav1yHAlgmNZqAQTAVidhUTS6NFPjSplQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPaDsfgAXWdKzHlkCCrcA2ha%2B2h5R%2F8Ae4Ykab9YuFmn%2F7QR%2B5BY9iQ7xA1Ub%2F%2FaESnhHEf7YFfZprC5XsoHaUjU7jvtrenKrYc3TH%2F%2F1cuxYlpjAw2Z%2B7s%2BpLe%2Fmc69EZcBvF7vRP6jAr7ABODCWxqR7oeOsk1vEdr2WJ1R%2BVt7wpVpdGaQLBE0grPjJuexYwedapLooqFtFjOVh8OPokZVuBkFRcuRmE1d6vnLfdOF8Y8YQ8nuEh3yuCRJuEL7kdFZKc5l3aCYIUzadqntceKh1IbiIeokhcvl7steCrVxfPk7EegEcjBUu6dTBSs5Ny0L6EJl7JxDsXB98xcIt5mLHVKNNi74zxWb0FVLVqMNFshKQnDzGqsCCz2Cuu5%2FippPD6ibjdFJen7csrdsEP3L5X1y3Hlx679XbDYypCspPBI5qC8bGMfiqR33wl7dlVGzDXILHTiqJkq4hjM7JUUw%2BNMl0U9HIQWS8nYIk%2FSBKxcWZo8pVv18Vbnfa9%2BXAeB6%2B9MnmZ%2FYaqSx4x4Y1BbB4DHmsR39ifZI8HuibpOVErTDkFsCHX%2B5K%2Bo8o4hakH95%2Bvbbu%2Fve2rHoTbUGeAwbjewfuJHw9pr%2BUSdXfYl0JtLcrT%2FPJz4loEFh2bemu9fZNiHt%2BlC2kdKIMN7x%2BL8GOqUBfvYUuSWeftDQ9Gq9eUZKuPWQ20YtYr988HvffgATMAbgkqwtSqMa7J5vIq461AEJGWkUWUKrMlirxHzx%2FDbh0I0c1aAMCjsplf14Sb643c3qLDQg%2FIPxq38raubaVfCysSNvjaCvWM08U4kiZk2L03znTuB%2BiUAJSzps5wu%2BpOAKo6zOCWH%2FzFlE2%2FTJXxdaGmwt%2FnSjCkD6VCWnYPYY09Uv4dmJ&X-Amz-Signature=b443598ca80b006a40f8184cf6f9b069568748e2eaeb4049ae12273c14233ffb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y2FTIMV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGFz4OGF%2FIMHAboDxPc90O64hgXtjoAST8LMcOB%2BAvhAiEAn33ot3%2F0eTnav1yHAlgmNZqAQTAVidhUTS6NFPjSplQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPaDsfgAXWdKzHlkCCrcA2ha%2B2h5R%2F8Ae4Ykab9YuFmn%2F7QR%2B5BY9iQ7xA1Ub%2F%2FaESnhHEf7YFfZprC5XsoHaUjU7jvtrenKrYc3TH%2F%2F1cuxYlpjAw2Z%2B7s%2BpLe%2Fmc69EZcBvF7vRP6jAr7ABODCWxqR7oeOsk1vEdr2WJ1R%2BVt7wpVpdGaQLBE0grPjJuexYwedapLooqFtFjOVh8OPokZVuBkFRcuRmE1d6vnLfdOF8Y8YQ8nuEh3yuCRJuEL7kdFZKc5l3aCYIUzadqntceKh1IbiIeokhcvl7steCrVxfPk7EegEcjBUu6dTBSs5Ny0L6EJl7JxDsXB98xcIt5mLHVKNNi74zxWb0FVLVqMNFshKQnDzGqsCCz2Cuu5%2FippPD6ibjdFJen7csrdsEP3L5X1y3Hlx679XbDYypCspPBI5qC8bGMfiqR33wl7dlVGzDXILHTiqJkq4hjM7JUUw%2BNMl0U9HIQWS8nYIk%2FSBKxcWZo8pVv18Vbnfa9%2BXAeB6%2B9MnmZ%2FYaqSx4x4Y1BbB4DHmsR39ifZI8HuibpOVErTDkFsCHX%2B5K%2Bo8o4hakH95%2Bvbbu%2Fve2rHoTbUGeAwbjewfuJHw9pr%2BUSdXfYl0JtLcrT%2FPJz4loEFh2bemu9fZNiHt%2BlC2kdKIMN7x%2BL8GOqUBfvYUuSWeftDQ9Gq9eUZKuPWQ20YtYr988HvffgATMAbgkqwtSqMa7J5vIq461AEJGWkUWUKrMlirxHzx%2FDbh0I0c1aAMCjsplf14Sb643c3qLDQg%2FIPxq38raubaVfCysSNvjaCvWM08U4kiZk2L03znTuB%2BiUAJSzps5wu%2BpOAKo6zOCWH%2FzFlE2%2FTJXxdaGmwt%2FnSjCkD6VCWnYPYY09Uv4dmJ&X-Amz-Signature=7fc96a82bf6f794ae55e769d5b93917cbf52799bf694abd05a419f691639daba&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y2FTIMV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGFz4OGF%2FIMHAboDxPc90O64hgXtjoAST8LMcOB%2BAvhAiEAn33ot3%2F0eTnav1yHAlgmNZqAQTAVidhUTS6NFPjSplQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPaDsfgAXWdKzHlkCCrcA2ha%2B2h5R%2F8Ae4Ykab9YuFmn%2F7QR%2B5BY9iQ7xA1Ub%2F%2FaESnhHEf7YFfZprC5XsoHaUjU7jvtrenKrYc3TH%2F%2F1cuxYlpjAw2Z%2B7s%2BpLe%2Fmc69EZcBvF7vRP6jAr7ABODCWxqR7oeOsk1vEdr2WJ1R%2BVt7wpVpdGaQLBE0grPjJuexYwedapLooqFtFjOVh8OPokZVuBkFRcuRmE1d6vnLfdOF8Y8YQ8nuEh3yuCRJuEL7kdFZKc5l3aCYIUzadqntceKh1IbiIeokhcvl7steCrVxfPk7EegEcjBUu6dTBSs5Ny0L6EJl7JxDsXB98xcIt5mLHVKNNi74zxWb0FVLVqMNFshKQnDzGqsCCz2Cuu5%2FippPD6ibjdFJen7csrdsEP3L5X1y3Hlx679XbDYypCspPBI5qC8bGMfiqR33wl7dlVGzDXILHTiqJkq4hjM7JUUw%2BNMl0U9HIQWS8nYIk%2FSBKxcWZo8pVv18Vbnfa9%2BXAeB6%2B9MnmZ%2FYaqSx4x4Y1BbB4DHmsR39ifZI8HuibpOVErTDkFsCHX%2B5K%2Bo8o4hakH95%2Bvbbu%2Fve2rHoTbUGeAwbjewfuJHw9pr%2BUSdXfYl0JtLcrT%2FPJz4loEFh2bemu9fZNiHt%2BlC2kdKIMN7x%2BL8GOqUBfvYUuSWeftDQ9Gq9eUZKuPWQ20YtYr988HvffgATMAbgkqwtSqMa7J5vIq461AEJGWkUWUKrMlirxHzx%2FDbh0I0c1aAMCjsplf14Sb643c3qLDQg%2FIPxq38raubaVfCysSNvjaCvWM08U4kiZk2L03znTuB%2BiUAJSzps5wu%2BpOAKo6zOCWH%2FzFlE2%2FTJXxdaGmwt%2FnSjCkD6VCWnYPYY09Uv4dmJ&X-Amz-Signature=c36e78f5de866f3d8f2fe228894d498d5f62a9a5a755c9d383e19e4b767c83c4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y2FTIMV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGFz4OGF%2FIMHAboDxPc90O64hgXtjoAST8LMcOB%2BAvhAiEAn33ot3%2F0eTnav1yHAlgmNZqAQTAVidhUTS6NFPjSplQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPaDsfgAXWdKzHlkCCrcA2ha%2B2h5R%2F8Ae4Ykab9YuFmn%2F7QR%2B5BY9iQ7xA1Ub%2F%2FaESnhHEf7YFfZprC5XsoHaUjU7jvtrenKrYc3TH%2F%2F1cuxYlpjAw2Z%2B7s%2BpLe%2Fmc69EZcBvF7vRP6jAr7ABODCWxqR7oeOsk1vEdr2WJ1R%2BVt7wpVpdGaQLBE0grPjJuexYwedapLooqFtFjOVh8OPokZVuBkFRcuRmE1d6vnLfdOF8Y8YQ8nuEh3yuCRJuEL7kdFZKc5l3aCYIUzadqntceKh1IbiIeokhcvl7steCrVxfPk7EegEcjBUu6dTBSs5Ny0L6EJl7JxDsXB98xcIt5mLHVKNNi74zxWb0FVLVqMNFshKQnDzGqsCCz2Cuu5%2FippPD6ibjdFJen7csrdsEP3L5X1y3Hlx679XbDYypCspPBI5qC8bGMfiqR33wl7dlVGzDXILHTiqJkq4hjM7JUUw%2BNMl0U9HIQWS8nYIk%2FSBKxcWZo8pVv18Vbnfa9%2BXAeB6%2B9MnmZ%2FYaqSx4x4Y1BbB4DHmsR39ifZI8HuibpOVErTDkFsCHX%2B5K%2Bo8o4hakH95%2Bvbbu%2Fve2rHoTbUGeAwbjewfuJHw9pr%2BUSdXfYl0JtLcrT%2FPJz4loEFh2bemu9fZNiHt%2BlC2kdKIMN7x%2BL8GOqUBfvYUuSWeftDQ9Gq9eUZKuPWQ20YtYr988HvffgATMAbgkqwtSqMa7J5vIq461AEJGWkUWUKrMlirxHzx%2FDbh0I0c1aAMCjsplf14Sb643c3qLDQg%2FIPxq38raubaVfCysSNvjaCvWM08U4kiZk2L03znTuB%2BiUAJSzps5wu%2BpOAKo6zOCWH%2FzFlE2%2FTJXxdaGmwt%2FnSjCkD6VCWnYPYY09Uv4dmJ&X-Amz-Signature=0d396b98fd2a7f10740eecee0e510e5e7a7cb6a3058f90f61a393c7177b6eecf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
