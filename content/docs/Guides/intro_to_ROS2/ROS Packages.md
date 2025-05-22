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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3K6RRC2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDRH3bvqhKse%2FNipREetAMy%2Bqj8LyHJV%2BfmAvDO4maEJQIhAKvI9zgURwB48ViM4C4tHk2qqZtJ1YnPAgNRyXb%2FBTLzKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd7XVnw4BNSYy1Ygwq3AOrQL8g9T3M%2BCrYXAc%2Fs%2FjflmWwubajJtNwfYlQiNH2OMThhBLIMOHAGSmH0zJ4wPnS2qOtRoVIkJeXAQq%2FdDoPdGJqmBEptxzY6j32AnkcxSbFmT6pPsb1jOw4YaIK82h3t96y31Vg8D6hWl%2FntGZtbBvoShls6SCP9FNZRTCTaD54OAtsempmpbK39jcG0KpZAMngp2RS70%2BeY%2Fx2zqgOOdyPyqjBDob8KQRk8Y6bxCpgimBau6IC5cJLsbxtd3fuWcOfU0y0FYANxWfmzN1A5jnTa3JtJZzNhDK4m4YJ7gmVA%2FhIUBusGgPl9gwQ56dR5vTC1GNFFEApJvcoOa%2BCmWuZqx4iz5UtqZYIsFcV4Jd%2BWwlOQEcOgz8VerYaMVf3fkxdvGXt7m5c0qZmjp%2BYcUnOsXiVFbh%2FChYH%2BgITp9Itmqe%2BOfcoybvL26hu97I0%2BCr4QqgagiLId%2FFOuG4RnoKfi9wWMZTpAmqFVaPM1RpWaFttyKMtLQ4lFG1KqUMeh589Ox5EfHSVmQDbR0XHv7yr2I9%2F2OmGuYiQ23s3cUyV7NNh%2B4axdkURUFZtwurh%2BtNvCQmYTmvCzNqQcxZNBt11UlfVCTfjnzZgj%2B6xkG%2FirGU9kWP5cf4spDC9yb7BBjqkAa%2FjKYKN4%2F9JDfgUeJAIy2H7Ivlz0zbbKvIisNADT32WwCjbVHCpJgf5YrBXDYRM9z3LUFAXJM0xGU9u5z6rNZp6HCaL9o1ujbv5fxGFIXaoKe7YZeS8VIyr9XoW6XbbM%2FFbr%2BlN2MWYm5b8DeyZLUQ4aTpfbSfLSTHM%2BEBBIH17DpatNopZbpwA0tPlQQcclkI5kSCmEt3Xb84HCRJaoTeQztRD&X-Amz-Signature=e9c4a87eaa15990574d79e9c573edede22d5e4394775672ca1a7b86124346d61&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3K6RRC2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDRH3bvqhKse%2FNipREetAMy%2Bqj8LyHJV%2BfmAvDO4maEJQIhAKvI9zgURwB48ViM4C4tHk2qqZtJ1YnPAgNRyXb%2FBTLzKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd7XVnw4BNSYy1Ygwq3AOrQL8g9T3M%2BCrYXAc%2Fs%2FjflmWwubajJtNwfYlQiNH2OMThhBLIMOHAGSmH0zJ4wPnS2qOtRoVIkJeXAQq%2FdDoPdGJqmBEptxzY6j32AnkcxSbFmT6pPsb1jOw4YaIK82h3t96y31Vg8D6hWl%2FntGZtbBvoShls6SCP9FNZRTCTaD54OAtsempmpbK39jcG0KpZAMngp2RS70%2BeY%2Fx2zqgOOdyPyqjBDob8KQRk8Y6bxCpgimBau6IC5cJLsbxtd3fuWcOfU0y0FYANxWfmzN1A5jnTa3JtJZzNhDK4m4YJ7gmVA%2FhIUBusGgPl9gwQ56dR5vTC1GNFFEApJvcoOa%2BCmWuZqx4iz5UtqZYIsFcV4Jd%2BWwlOQEcOgz8VerYaMVf3fkxdvGXt7m5c0qZmjp%2BYcUnOsXiVFbh%2FChYH%2BgITp9Itmqe%2BOfcoybvL26hu97I0%2BCr4QqgagiLId%2FFOuG4RnoKfi9wWMZTpAmqFVaPM1RpWaFttyKMtLQ4lFG1KqUMeh589Ox5EfHSVmQDbR0XHv7yr2I9%2F2OmGuYiQ23s3cUyV7NNh%2B4axdkURUFZtwurh%2BtNvCQmYTmvCzNqQcxZNBt11UlfVCTfjnzZgj%2B6xkG%2FirGU9kWP5cf4spDC9yb7BBjqkAa%2FjKYKN4%2F9JDfgUeJAIy2H7Ivlz0zbbKvIisNADT32WwCjbVHCpJgf5YrBXDYRM9z3LUFAXJM0xGU9u5z6rNZp6HCaL9o1ujbv5fxGFIXaoKe7YZeS8VIyr9XoW6XbbM%2FFbr%2BlN2MWYm5b8DeyZLUQ4aTpfbSfLSTHM%2BEBBIH17DpatNopZbpwA0tPlQQcclkI5kSCmEt3Xb84HCRJaoTeQztRD&X-Amz-Signature=92b1ac12b712879f07830517258ce2a4867694ed4a26f907db9cc6f54f413678&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3K6RRC2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDRH3bvqhKse%2FNipREetAMy%2Bqj8LyHJV%2BfmAvDO4maEJQIhAKvI9zgURwB48ViM4C4tHk2qqZtJ1YnPAgNRyXb%2FBTLzKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd7XVnw4BNSYy1Ygwq3AOrQL8g9T3M%2BCrYXAc%2Fs%2FjflmWwubajJtNwfYlQiNH2OMThhBLIMOHAGSmH0zJ4wPnS2qOtRoVIkJeXAQq%2FdDoPdGJqmBEptxzY6j32AnkcxSbFmT6pPsb1jOw4YaIK82h3t96y31Vg8D6hWl%2FntGZtbBvoShls6SCP9FNZRTCTaD54OAtsempmpbK39jcG0KpZAMngp2RS70%2BeY%2Fx2zqgOOdyPyqjBDob8KQRk8Y6bxCpgimBau6IC5cJLsbxtd3fuWcOfU0y0FYANxWfmzN1A5jnTa3JtJZzNhDK4m4YJ7gmVA%2FhIUBusGgPl9gwQ56dR5vTC1GNFFEApJvcoOa%2BCmWuZqx4iz5UtqZYIsFcV4Jd%2BWwlOQEcOgz8VerYaMVf3fkxdvGXt7m5c0qZmjp%2BYcUnOsXiVFbh%2FChYH%2BgITp9Itmqe%2BOfcoybvL26hu97I0%2BCr4QqgagiLId%2FFOuG4RnoKfi9wWMZTpAmqFVaPM1RpWaFttyKMtLQ4lFG1KqUMeh589Ox5EfHSVmQDbR0XHv7yr2I9%2F2OmGuYiQ23s3cUyV7NNh%2B4axdkURUFZtwurh%2BtNvCQmYTmvCzNqQcxZNBt11UlfVCTfjnzZgj%2B6xkG%2FirGU9kWP5cf4spDC9yb7BBjqkAa%2FjKYKN4%2F9JDfgUeJAIy2H7Ivlz0zbbKvIisNADT32WwCjbVHCpJgf5YrBXDYRM9z3LUFAXJM0xGU9u5z6rNZp6HCaL9o1ujbv5fxGFIXaoKe7YZeS8VIyr9XoW6XbbM%2FFbr%2BlN2MWYm5b8DeyZLUQ4aTpfbSfLSTHM%2BEBBIH17DpatNopZbpwA0tPlQQcclkI5kSCmEt3Xb84HCRJaoTeQztRD&X-Amz-Signature=85d43df175bae859fb903867a145e40339c594f4518e29e14e1c9ba7c7956997&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3K6RRC2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDRH3bvqhKse%2FNipREetAMy%2Bqj8LyHJV%2BfmAvDO4maEJQIhAKvI9zgURwB48ViM4C4tHk2qqZtJ1YnPAgNRyXb%2FBTLzKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd7XVnw4BNSYy1Ygwq3AOrQL8g9T3M%2BCrYXAc%2Fs%2FjflmWwubajJtNwfYlQiNH2OMThhBLIMOHAGSmH0zJ4wPnS2qOtRoVIkJeXAQq%2FdDoPdGJqmBEptxzY6j32AnkcxSbFmT6pPsb1jOw4YaIK82h3t96y31Vg8D6hWl%2FntGZtbBvoShls6SCP9FNZRTCTaD54OAtsempmpbK39jcG0KpZAMngp2RS70%2BeY%2Fx2zqgOOdyPyqjBDob8KQRk8Y6bxCpgimBau6IC5cJLsbxtd3fuWcOfU0y0FYANxWfmzN1A5jnTa3JtJZzNhDK4m4YJ7gmVA%2FhIUBusGgPl9gwQ56dR5vTC1GNFFEApJvcoOa%2BCmWuZqx4iz5UtqZYIsFcV4Jd%2BWwlOQEcOgz8VerYaMVf3fkxdvGXt7m5c0qZmjp%2BYcUnOsXiVFbh%2FChYH%2BgITp9Itmqe%2BOfcoybvL26hu97I0%2BCr4QqgagiLId%2FFOuG4RnoKfi9wWMZTpAmqFVaPM1RpWaFttyKMtLQ4lFG1KqUMeh589Ox5EfHSVmQDbR0XHv7yr2I9%2F2OmGuYiQ23s3cUyV7NNh%2B4axdkURUFZtwurh%2BtNvCQmYTmvCzNqQcxZNBt11UlfVCTfjnzZgj%2B6xkG%2FirGU9kWP5cf4spDC9yb7BBjqkAa%2FjKYKN4%2F9JDfgUeJAIy2H7Ivlz0zbbKvIisNADT32WwCjbVHCpJgf5YrBXDYRM9z3LUFAXJM0xGU9u5z6rNZp6HCaL9o1ujbv5fxGFIXaoKe7YZeS8VIyr9XoW6XbbM%2FFbr%2BlN2MWYm5b8DeyZLUQ4aTpfbSfLSTHM%2BEBBIH17DpatNopZbpwA0tPlQQcclkI5kSCmEt3Xb84HCRJaoTeQztRD&X-Amz-Signature=9ed6799ffee4664d3f41881c17ce978a1aa1052c214910ef6f061e31aeba3116&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3K6RRC2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDRH3bvqhKse%2FNipREetAMy%2Bqj8LyHJV%2BfmAvDO4maEJQIhAKvI9zgURwB48ViM4C4tHk2qqZtJ1YnPAgNRyXb%2FBTLzKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd7XVnw4BNSYy1Ygwq3AOrQL8g9T3M%2BCrYXAc%2Fs%2FjflmWwubajJtNwfYlQiNH2OMThhBLIMOHAGSmH0zJ4wPnS2qOtRoVIkJeXAQq%2FdDoPdGJqmBEptxzY6j32AnkcxSbFmT6pPsb1jOw4YaIK82h3t96y31Vg8D6hWl%2FntGZtbBvoShls6SCP9FNZRTCTaD54OAtsempmpbK39jcG0KpZAMngp2RS70%2BeY%2Fx2zqgOOdyPyqjBDob8KQRk8Y6bxCpgimBau6IC5cJLsbxtd3fuWcOfU0y0FYANxWfmzN1A5jnTa3JtJZzNhDK4m4YJ7gmVA%2FhIUBusGgPl9gwQ56dR5vTC1GNFFEApJvcoOa%2BCmWuZqx4iz5UtqZYIsFcV4Jd%2BWwlOQEcOgz8VerYaMVf3fkxdvGXt7m5c0qZmjp%2BYcUnOsXiVFbh%2FChYH%2BgITp9Itmqe%2BOfcoybvL26hu97I0%2BCr4QqgagiLId%2FFOuG4RnoKfi9wWMZTpAmqFVaPM1RpWaFttyKMtLQ4lFG1KqUMeh589Ox5EfHSVmQDbR0XHv7yr2I9%2F2OmGuYiQ23s3cUyV7NNh%2B4axdkURUFZtwurh%2BtNvCQmYTmvCzNqQcxZNBt11UlfVCTfjnzZgj%2B6xkG%2FirGU9kWP5cf4spDC9yb7BBjqkAa%2FjKYKN4%2F9JDfgUeJAIy2H7Ivlz0zbbKvIisNADT32WwCjbVHCpJgf5YrBXDYRM9z3LUFAXJM0xGU9u5z6rNZp6HCaL9o1ujbv5fxGFIXaoKe7YZeS8VIyr9XoW6XbbM%2FFbr%2BlN2MWYm5b8DeyZLUQ4aTpfbSfLSTHM%2BEBBIH17DpatNopZbpwA0tPlQQcclkI5kSCmEt3Xb84HCRJaoTeQztRD&X-Amz-Signature=49e3280ecfe072c47e8c3dc6283fe257b8f2e9980aa659e69b9544bd337dcfc3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3K6RRC2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDRH3bvqhKse%2FNipREetAMy%2Bqj8LyHJV%2BfmAvDO4maEJQIhAKvI9zgURwB48ViM4C4tHk2qqZtJ1YnPAgNRyXb%2FBTLzKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd7XVnw4BNSYy1Ygwq3AOrQL8g9T3M%2BCrYXAc%2Fs%2FjflmWwubajJtNwfYlQiNH2OMThhBLIMOHAGSmH0zJ4wPnS2qOtRoVIkJeXAQq%2FdDoPdGJqmBEptxzY6j32AnkcxSbFmT6pPsb1jOw4YaIK82h3t96y31Vg8D6hWl%2FntGZtbBvoShls6SCP9FNZRTCTaD54OAtsempmpbK39jcG0KpZAMngp2RS70%2BeY%2Fx2zqgOOdyPyqjBDob8KQRk8Y6bxCpgimBau6IC5cJLsbxtd3fuWcOfU0y0FYANxWfmzN1A5jnTa3JtJZzNhDK4m4YJ7gmVA%2FhIUBusGgPl9gwQ56dR5vTC1GNFFEApJvcoOa%2BCmWuZqx4iz5UtqZYIsFcV4Jd%2BWwlOQEcOgz8VerYaMVf3fkxdvGXt7m5c0qZmjp%2BYcUnOsXiVFbh%2FChYH%2BgITp9Itmqe%2BOfcoybvL26hu97I0%2BCr4QqgagiLId%2FFOuG4RnoKfi9wWMZTpAmqFVaPM1RpWaFttyKMtLQ4lFG1KqUMeh589Ox5EfHSVmQDbR0XHv7yr2I9%2F2OmGuYiQ23s3cUyV7NNh%2B4axdkURUFZtwurh%2BtNvCQmYTmvCzNqQcxZNBt11UlfVCTfjnzZgj%2B6xkG%2FirGU9kWP5cf4spDC9yb7BBjqkAa%2FjKYKN4%2F9JDfgUeJAIy2H7Ivlz0zbbKvIisNADT32WwCjbVHCpJgf5YrBXDYRM9z3LUFAXJM0xGU9u5z6rNZp6HCaL9o1ujbv5fxGFIXaoKe7YZeS8VIyr9XoW6XbbM%2FFbr%2BlN2MWYm5b8DeyZLUQ4aTpfbSfLSTHM%2BEBBIH17DpatNopZbpwA0tPlQQcclkI5kSCmEt3Xb84HCRJaoTeQztRD&X-Amz-Signature=8b3f69ecb4c9debc98a148f2d0be3934dcbd466439ef5fac42c97707f000ac7e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3K6RRC2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDRH3bvqhKse%2FNipREetAMy%2Bqj8LyHJV%2BfmAvDO4maEJQIhAKvI9zgURwB48ViM4C4tHk2qqZtJ1YnPAgNRyXb%2FBTLzKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxd7XVnw4BNSYy1Ygwq3AOrQL8g9T3M%2BCrYXAc%2Fs%2FjflmWwubajJtNwfYlQiNH2OMThhBLIMOHAGSmH0zJ4wPnS2qOtRoVIkJeXAQq%2FdDoPdGJqmBEptxzY6j32AnkcxSbFmT6pPsb1jOw4YaIK82h3t96y31Vg8D6hWl%2FntGZtbBvoShls6SCP9FNZRTCTaD54OAtsempmpbK39jcG0KpZAMngp2RS70%2BeY%2Fx2zqgOOdyPyqjBDob8KQRk8Y6bxCpgimBau6IC5cJLsbxtd3fuWcOfU0y0FYANxWfmzN1A5jnTa3JtJZzNhDK4m4YJ7gmVA%2FhIUBusGgPl9gwQ56dR5vTC1GNFFEApJvcoOa%2BCmWuZqx4iz5UtqZYIsFcV4Jd%2BWwlOQEcOgz8VerYaMVf3fkxdvGXt7m5c0qZmjp%2BYcUnOsXiVFbh%2FChYH%2BgITp9Itmqe%2BOfcoybvL26hu97I0%2BCr4QqgagiLId%2FFOuG4RnoKfi9wWMZTpAmqFVaPM1RpWaFttyKMtLQ4lFG1KqUMeh589Ox5EfHSVmQDbR0XHv7yr2I9%2F2OmGuYiQ23s3cUyV7NNh%2B4axdkURUFZtwurh%2BtNvCQmYTmvCzNqQcxZNBt11UlfVCTfjnzZgj%2B6xkG%2FirGU9kWP5cf4spDC9yb7BBjqkAa%2FjKYKN4%2F9JDfgUeJAIy2H7Ivlz0zbbKvIisNADT32WwCjbVHCpJgf5YrBXDYRM9z3LUFAXJM0xGU9u5z6rNZp6HCaL9o1ujbv5fxGFIXaoKe7YZeS8VIyr9XoW6XbbM%2FFbr%2BlN2MWYm5b8DeyZLUQ4aTpfbSfLSTHM%2BEBBIH17DpatNopZbpwA0tPlQQcclkI5kSCmEt3Xb84HCRJaoTeQztRD&X-Amz-Signature=93dedd5535df339dc5d8270e3d1bb85895e5f3107a05169f91aa394992d9b994&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
