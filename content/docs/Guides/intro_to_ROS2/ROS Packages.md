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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZA3XO2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcw%2FG3z%2FX4zAEr98rcLT2SgXeIQ%2FsrorQZsc67PxxslAIhAM1roIrY5owkuRq8K7%2B4nyCoh0tkgtCaV9QT4RBb3lgVKv8DCG8QABoMNjM3NDIzMTgzODA1Igy8R6RZyPmEdw9W5Icq3AOlnkf4KUtfUHU2H8TneejPQ%2BrZGmFvMcn%2FatktBy9S4GLVEIRyzmJ6DPuJIO6f786CvBrhvACsqw6VujGvpz2huB2eUyKVAJrIMKxQ5S3oThJkJIrg7jI%2B3B2qgxwaVEadCSL4Afax%2BIoRyJXbajz%2BQ%2BQyIp1nIwOIb3midddctJRSntqpgdoF023gAaY862mfObOiUebLRPcsFk31nolxfGoQk9L4FhUvKxIC82TylkMOrWPoMphcMi%2F3WnJ8jcbf7m3tW7ocW8NpRlJrZ%2BrFJLjHdEW0jULDgs2hY%2FJP2as8VqmIelHgekihfKDB4xICt6MihqyK1yDq5OrB22ae%2FlS7VUxKvla38C2hg3%2Fjj14%2B%2FD3FMVwD1QRDq9BK9dOVe2E2aoVOFFzcQI8MY98mzdihOkO0KSsXP%2Fuidbsz5SQk2xIrppVvsWGeL5DMMaqi2IcrZjclxQHMRJw7xtZDVjw6CkM9ssAonbPKs7SEpWEwgeFvcnqxTjAmegO9rEY6HvXEEb94Y0dYDMVjE5Yc3e24yOZYr2YbbYR3MmF8Xj98FOS0UyQ5CdulPcqFkkA5nIpwHqiywcC%2B2NQuqbxSwa8TvsuOqWQPjFZFFZ5erss%2FXK5pGj0WLIZteDDl%2BKXBBjqkAVSwAbZrbUjARduC5ydrKawU2MhvyO7h3fJ5HJts72dITXo%2BXc%2FEZVDMsvhFkSF9Ewo9wxqRdZ57HIuXDFxgfEiZkLHs2gtC9Cv9rQYiBZtpBEsUEvSNhoFofk9mWPaSE3AepSkaSfUU8bPhAIqM%2BxPLqE3nIF5swWzZ2ytuIz2%2BWiPcgdEeAVvX2tkn7efOO%2BuNC7EcNAwZSHMlDK%2Fr2BdJc1u5&X-Amz-Signature=84d69b492a3fe4658739d85e15f79fd75cf8899fc6b03d906adbd439a6feb05b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZA3XO2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcw%2FG3z%2FX4zAEr98rcLT2SgXeIQ%2FsrorQZsc67PxxslAIhAM1roIrY5owkuRq8K7%2B4nyCoh0tkgtCaV9QT4RBb3lgVKv8DCG8QABoMNjM3NDIzMTgzODA1Igy8R6RZyPmEdw9W5Icq3AOlnkf4KUtfUHU2H8TneejPQ%2BrZGmFvMcn%2FatktBy9S4GLVEIRyzmJ6DPuJIO6f786CvBrhvACsqw6VujGvpz2huB2eUyKVAJrIMKxQ5S3oThJkJIrg7jI%2B3B2qgxwaVEadCSL4Afax%2BIoRyJXbajz%2BQ%2BQyIp1nIwOIb3midddctJRSntqpgdoF023gAaY862mfObOiUebLRPcsFk31nolxfGoQk9L4FhUvKxIC82TylkMOrWPoMphcMi%2F3WnJ8jcbf7m3tW7ocW8NpRlJrZ%2BrFJLjHdEW0jULDgs2hY%2FJP2as8VqmIelHgekihfKDB4xICt6MihqyK1yDq5OrB22ae%2FlS7VUxKvla38C2hg3%2Fjj14%2B%2FD3FMVwD1QRDq9BK9dOVe2E2aoVOFFzcQI8MY98mzdihOkO0KSsXP%2Fuidbsz5SQk2xIrppVvsWGeL5DMMaqi2IcrZjclxQHMRJw7xtZDVjw6CkM9ssAonbPKs7SEpWEwgeFvcnqxTjAmegO9rEY6HvXEEb94Y0dYDMVjE5Yc3e24yOZYr2YbbYR3MmF8Xj98FOS0UyQ5CdulPcqFkkA5nIpwHqiywcC%2B2NQuqbxSwa8TvsuOqWQPjFZFFZ5erss%2FXK5pGj0WLIZteDDl%2BKXBBjqkAVSwAbZrbUjARduC5ydrKawU2MhvyO7h3fJ5HJts72dITXo%2BXc%2FEZVDMsvhFkSF9Ewo9wxqRdZ57HIuXDFxgfEiZkLHs2gtC9Cv9rQYiBZtpBEsUEvSNhoFofk9mWPaSE3AepSkaSfUU8bPhAIqM%2BxPLqE3nIF5swWzZ2ytuIz2%2BWiPcgdEeAVvX2tkn7efOO%2BuNC7EcNAwZSHMlDK%2Fr2BdJc1u5&X-Amz-Signature=9f72d28959ab0a41fccdd905e1d5c16f3d5b51e99c6872fcb6cbd6c30574aec1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZA3XO2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcw%2FG3z%2FX4zAEr98rcLT2SgXeIQ%2FsrorQZsc67PxxslAIhAM1roIrY5owkuRq8K7%2B4nyCoh0tkgtCaV9QT4RBb3lgVKv8DCG8QABoMNjM3NDIzMTgzODA1Igy8R6RZyPmEdw9W5Icq3AOlnkf4KUtfUHU2H8TneejPQ%2BrZGmFvMcn%2FatktBy9S4GLVEIRyzmJ6DPuJIO6f786CvBrhvACsqw6VujGvpz2huB2eUyKVAJrIMKxQ5S3oThJkJIrg7jI%2B3B2qgxwaVEadCSL4Afax%2BIoRyJXbajz%2BQ%2BQyIp1nIwOIb3midddctJRSntqpgdoF023gAaY862mfObOiUebLRPcsFk31nolxfGoQk9L4FhUvKxIC82TylkMOrWPoMphcMi%2F3WnJ8jcbf7m3tW7ocW8NpRlJrZ%2BrFJLjHdEW0jULDgs2hY%2FJP2as8VqmIelHgekihfKDB4xICt6MihqyK1yDq5OrB22ae%2FlS7VUxKvla38C2hg3%2Fjj14%2B%2FD3FMVwD1QRDq9BK9dOVe2E2aoVOFFzcQI8MY98mzdihOkO0KSsXP%2Fuidbsz5SQk2xIrppVvsWGeL5DMMaqi2IcrZjclxQHMRJw7xtZDVjw6CkM9ssAonbPKs7SEpWEwgeFvcnqxTjAmegO9rEY6HvXEEb94Y0dYDMVjE5Yc3e24yOZYr2YbbYR3MmF8Xj98FOS0UyQ5CdulPcqFkkA5nIpwHqiywcC%2B2NQuqbxSwa8TvsuOqWQPjFZFFZ5erss%2FXK5pGj0WLIZteDDl%2BKXBBjqkAVSwAbZrbUjARduC5ydrKawU2MhvyO7h3fJ5HJts72dITXo%2BXc%2FEZVDMsvhFkSF9Ewo9wxqRdZ57HIuXDFxgfEiZkLHs2gtC9Cv9rQYiBZtpBEsUEvSNhoFofk9mWPaSE3AepSkaSfUU8bPhAIqM%2BxPLqE3nIF5swWzZ2ytuIz2%2BWiPcgdEeAVvX2tkn7efOO%2BuNC7EcNAwZSHMlDK%2Fr2BdJc1u5&X-Amz-Signature=0af01fe0068e0ece6cc4e511bd3f1c2ebd0ea0e1548e9725e80e9b7a06632202&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZA3XO2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcw%2FG3z%2FX4zAEr98rcLT2SgXeIQ%2FsrorQZsc67PxxslAIhAM1roIrY5owkuRq8K7%2B4nyCoh0tkgtCaV9QT4RBb3lgVKv8DCG8QABoMNjM3NDIzMTgzODA1Igy8R6RZyPmEdw9W5Icq3AOlnkf4KUtfUHU2H8TneejPQ%2BrZGmFvMcn%2FatktBy9S4GLVEIRyzmJ6DPuJIO6f786CvBrhvACsqw6VujGvpz2huB2eUyKVAJrIMKxQ5S3oThJkJIrg7jI%2B3B2qgxwaVEadCSL4Afax%2BIoRyJXbajz%2BQ%2BQyIp1nIwOIb3midddctJRSntqpgdoF023gAaY862mfObOiUebLRPcsFk31nolxfGoQk9L4FhUvKxIC82TylkMOrWPoMphcMi%2F3WnJ8jcbf7m3tW7ocW8NpRlJrZ%2BrFJLjHdEW0jULDgs2hY%2FJP2as8VqmIelHgekihfKDB4xICt6MihqyK1yDq5OrB22ae%2FlS7VUxKvla38C2hg3%2Fjj14%2B%2FD3FMVwD1QRDq9BK9dOVe2E2aoVOFFzcQI8MY98mzdihOkO0KSsXP%2Fuidbsz5SQk2xIrppVvsWGeL5DMMaqi2IcrZjclxQHMRJw7xtZDVjw6CkM9ssAonbPKs7SEpWEwgeFvcnqxTjAmegO9rEY6HvXEEb94Y0dYDMVjE5Yc3e24yOZYr2YbbYR3MmF8Xj98FOS0UyQ5CdulPcqFkkA5nIpwHqiywcC%2B2NQuqbxSwa8TvsuOqWQPjFZFFZ5erss%2FXK5pGj0WLIZteDDl%2BKXBBjqkAVSwAbZrbUjARduC5ydrKawU2MhvyO7h3fJ5HJts72dITXo%2BXc%2FEZVDMsvhFkSF9Ewo9wxqRdZ57HIuXDFxgfEiZkLHs2gtC9Cv9rQYiBZtpBEsUEvSNhoFofk9mWPaSE3AepSkaSfUU8bPhAIqM%2BxPLqE3nIF5swWzZ2ytuIz2%2BWiPcgdEeAVvX2tkn7efOO%2BuNC7EcNAwZSHMlDK%2Fr2BdJc1u5&X-Amz-Signature=6b5921e07aaa62637530629a933634584710dcaef762c7b6f6c51ca2419f9d32&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZA3XO2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcw%2FG3z%2FX4zAEr98rcLT2SgXeIQ%2FsrorQZsc67PxxslAIhAM1roIrY5owkuRq8K7%2B4nyCoh0tkgtCaV9QT4RBb3lgVKv8DCG8QABoMNjM3NDIzMTgzODA1Igy8R6RZyPmEdw9W5Icq3AOlnkf4KUtfUHU2H8TneejPQ%2BrZGmFvMcn%2FatktBy9S4GLVEIRyzmJ6DPuJIO6f786CvBrhvACsqw6VujGvpz2huB2eUyKVAJrIMKxQ5S3oThJkJIrg7jI%2B3B2qgxwaVEadCSL4Afax%2BIoRyJXbajz%2BQ%2BQyIp1nIwOIb3midddctJRSntqpgdoF023gAaY862mfObOiUebLRPcsFk31nolxfGoQk9L4FhUvKxIC82TylkMOrWPoMphcMi%2F3WnJ8jcbf7m3tW7ocW8NpRlJrZ%2BrFJLjHdEW0jULDgs2hY%2FJP2as8VqmIelHgekihfKDB4xICt6MihqyK1yDq5OrB22ae%2FlS7VUxKvla38C2hg3%2Fjj14%2B%2FD3FMVwD1QRDq9BK9dOVe2E2aoVOFFzcQI8MY98mzdihOkO0KSsXP%2Fuidbsz5SQk2xIrppVvsWGeL5DMMaqi2IcrZjclxQHMRJw7xtZDVjw6CkM9ssAonbPKs7SEpWEwgeFvcnqxTjAmegO9rEY6HvXEEb94Y0dYDMVjE5Yc3e24yOZYr2YbbYR3MmF8Xj98FOS0UyQ5CdulPcqFkkA5nIpwHqiywcC%2B2NQuqbxSwa8TvsuOqWQPjFZFFZ5erss%2FXK5pGj0WLIZteDDl%2BKXBBjqkAVSwAbZrbUjARduC5ydrKawU2MhvyO7h3fJ5HJts72dITXo%2BXc%2FEZVDMsvhFkSF9Ewo9wxqRdZ57HIuXDFxgfEiZkLHs2gtC9Cv9rQYiBZtpBEsUEvSNhoFofk9mWPaSE3AepSkaSfUU8bPhAIqM%2BxPLqE3nIF5swWzZ2ytuIz2%2BWiPcgdEeAVvX2tkn7efOO%2BuNC7EcNAwZSHMlDK%2Fr2BdJc1u5&X-Amz-Signature=3180b36a43b006c1983f716b1165c517ef4279d2f662dee2cf47152ec38ec972&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZA3XO2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcw%2FG3z%2FX4zAEr98rcLT2SgXeIQ%2FsrorQZsc67PxxslAIhAM1roIrY5owkuRq8K7%2B4nyCoh0tkgtCaV9QT4RBb3lgVKv8DCG8QABoMNjM3NDIzMTgzODA1Igy8R6RZyPmEdw9W5Icq3AOlnkf4KUtfUHU2H8TneejPQ%2BrZGmFvMcn%2FatktBy9S4GLVEIRyzmJ6DPuJIO6f786CvBrhvACsqw6VujGvpz2huB2eUyKVAJrIMKxQ5S3oThJkJIrg7jI%2B3B2qgxwaVEadCSL4Afax%2BIoRyJXbajz%2BQ%2BQyIp1nIwOIb3midddctJRSntqpgdoF023gAaY862mfObOiUebLRPcsFk31nolxfGoQk9L4FhUvKxIC82TylkMOrWPoMphcMi%2F3WnJ8jcbf7m3tW7ocW8NpRlJrZ%2BrFJLjHdEW0jULDgs2hY%2FJP2as8VqmIelHgekihfKDB4xICt6MihqyK1yDq5OrB22ae%2FlS7VUxKvla38C2hg3%2Fjj14%2B%2FD3FMVwD1QRDq9BK9dOVe2E2aoVOFFzcQI8MY98mzdihOkO0KSsXP%2Fuidbsz5SQk2xIrppVvsWGeL5DMMaqi2IcrZjclxQHMRJw7xtZDVjw6CkM9ssAonbPKs7SEpWEwgeFvcnqxTjAmegO9rEY6HvXEEb94Y0dYDMVjE5Yc3e24yOZYr2YbbYR3MmF8Xj98FOS0UyQ5CdulPcqFkkA5nIpwHqiywcC%2B2NQuqbxSwa8TvsuOqWQPjFZFFZ5erss%2FXK5pGj0WLIZteDDl%2BKXBBjqkAVSwAbZrbUjARduC5ydrKawU2MhvyO7h3fJ5HJts72dITXo%2BXc%2FEZVDMsvhFkSF9Ewo9wxqRdZ57HIuXDFxgfEiZkLHs2gtC9Cv9rQYiBZtpBEsUEvSNhoFofk9mWPaSE3AepSkaSfUU8bPhAIqM%2BxPLqE3nIF5swWzZ2ytuIz2%2BWiPcgdEeAVvX2tkn7efOO%2BuNC7EcNAwZSHMlDK%2Fr2BdJc1u5&X-Amz-Signature=e6441a9b572d3cc831a100b5cca45df750d2ee31d83cd20d95f36450aadf6dfb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZA3XO2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcw%2FG3z%2FX4zAEr98rcLT2SgXeIQ%2FsrorQZsc67PxxslAIhAM1roIrY5owkuRq8K7%2B4nyCoh0tkgtCaV9QT4RBb3lgVKv8DCG8QABoMNjM3NDIzMTgzODA1Igy8R6RZyPmEdw9W5Icq3AOlnkf4KUtfUHU2H8TneejPQ%2BrZGmFvMcn%2FatktBy9S4GLVEIRyzmJ6DPuJIO6f786CvBrhvACsqw6VujGvpz2huB2eUyKVAJrIMKxQ5S3oThJkJIrg7jI%2B3B2qgxwaVEadCSL4Afax%2BIoRyJXbajz%2BQ%2BQyIp1nIwOIb3midddctJRSntqpgdoF023gAaY862mfObOiUebLRPcsFk31nolxfGoQk9L4FhUvKxIC82TylkMOrWPoMphcMi%2F3WnJ8jcbf7m3tW7ocW8NpRlJrZ%2BrFJLjHdEW0jULDgs2hY%2FJP2as8VqmIelHgekihfKDB4xICt6MihqyK1yDq5OrB22ae%2FlS7VUxKvla38C2hg3%2Fjj14%2B%2FD3FMVwD1QRDq9BK9dOVe2E2aoVOFFzcQI8MY98mzdihOkO0KSsXP%2Fuidbsz5SQk2xIrppVvsWGeL5DMMaqi2IcrZjclxQHMRJw7xtZDVjw6CkM9ssAonbPKs7SEpWEwgeFvcnqxTjAmegO9rEY6HvXEEb94Y0dYDMVjE5Yc3e24yOZYr2YbbYR3MmF8Xj98FOS0UyQ5CdulPcqFkkA5nIpwHqiywcC%2B2NQuqbxSwa8TvsuOqWQPjFZFFZ5erss%2FXK5pGj0WLIZteDDl%2BKXBBjqkAVSwAbZrbUjARduC5ydrKawU2MhvyO7h3fJ5HJts72dITXo%2BXc%2FEZVDMsvhFkSF9Ewo9wxqRdZ57HIuXDFxgfEiZkLHs2gtC9Cv9rQYiBZtpBEsUEvSNhoFofk9mWPaSE3AepSkaSfUU8bPhAIqM%2BxPLqE3nIF5swWzZ2ytuIz2%2BWiPcgdEeAVvX2tkn7efOO%2BuNC7EcNAwZSHMlDK%2Fr2BdJc1u5&X-Amz-Signature=0890b3ac6efd19038b064c6532fa3ce1dde2c930868ee4f37c8c4d5b002ccff4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
