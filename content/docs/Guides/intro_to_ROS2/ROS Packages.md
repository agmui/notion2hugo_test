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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUHIKC7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF7gBmb6s2%2FY3PSoj6qgbC6jQSLY2OIrIE%2FaEJpXTmaAIhAIaT060uFW9suwIzBdmoICaYZuUphK2%2B%2Bt8VKdubkb9jKv8DCBoQABoMNjM3NDIzMTgzODA1IgyNXLCQE7c74VtLylIq3ANrmjQu5gMFjAFizNTV7Pao5WWZYuV9sCJ0oti02TGZcG1xoN3W1yWLtz7ET8NbCL1HMfmiH7tu6RlqOvJHzfA38%2BrIs8yPW7T9GgmP%2B8tWes40IeJ2XHfzFoOWO2JtThgYwIpZ5X73HFlMH9s5Pdo4HQwOsjqUMcslkvjdH5LRNVzAsgOw7XXw%2FWsJmQ3VvW2lB3RdWGOn0puxgc0k%2B46SSymNQ40s6f2l%2BmuDjOAxUuA291viMvkMVmTXaeJF%2BvA8SzOqE8BRCGNbogWH503Rl%2FX5PTzOkkCITbXw4YU7UPZjUsAdc40%2FcCERSMv4%2FrOHhxxII30uVSiyeq8uMMiXcbCbiU18HdqVvZO9vXU0iLOD3isqEHptCudeShWuAalKZYvmKNa9PFQGOf%2FqJAri3HTtaP%2B%2Bw8hygE2vYN5aCHNoK8RY4T9%2FCZKrNAQ9zEzBnpJoFYM7%2FwhijaxdfvI6krimix1QkwQ%2FYvIUBCuEvcR%2Bc8itz2jL456eN1BtwGDQusyjK%2FnheUyeOD%2FgF0Nh3%2BogCdLYGePdHowa6PK2GKjGw4plY614gidhfZnIGGyr5STTYQV95cHw%2FSRpL8Fjq0N%2BcmiBqKiwTNUFOgYoXIbPoCOsSFB6L10aADCZmO29BjqkATbFp0dewMfyCboBI9pXKD5Mb0tbXLp4sn2B5FvPFY7YsXJNWFlCH3QT5lokNPGMryV1RFquMx301WB%2FhhqfvLZqPlOtqBs%2FIZdgxz8aHirsJ5ZzPIuok1VNt6d7djFaWj6Kt5hGtqabNWfyp0fa%2FqKp0YuG%2Bj2%2B9Hj%2FPF1rDK0uGBHA2KlRIvWkas5QaFtx%2Bkl%2BQblK0EKLisHTmDQF4pbaBfi3&X-Amz-Signature=452a7b42238c9bf92a125755f2215d4b4749fd1b91a9235386ef505033582ef2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUHIKC7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF7gBmb6s2%2FY3PSoj6qgbC6jQSLY2OIrIE%2FaEJpXTmaAIhAIaT060uFW9suwIzBdmoICaYZuUphK2%2B%2Bt8VKdubkb9jKv8DCBoQABoMNjM3NDIzMTgzODA1IgyNXLCQE7c74VtLylIq3ANrmjQu5gMFjAFizNTV7Pao5WWZYuV9sCJ0oti02TGZcG1xoN3W1yWLtz7ET8NbCL1HMfmiH7tu6RlqOvJHzfA38%2BrIs8yPW7T9GgmP%2B8tWes40IeJ2XHfzFoOWO2JtThgYwIpZ5X73HFlMH9s5Pdo4HQwOsjqUMcslkvjdH5LRNVzAsgOw7XXw%2FWsJmQ3VvW2lB3RdWGOn0puxgc0k%2B46SSymNQ40s6f2l%2BmuDjOAxUuA291viMvkMVmTXaeJF%2BvA8SzOqE8BRCGNbogWH503Rl%2FX5PTzOkkCITbXw4YU7UPZjUsAdc40%2FcCERSMv4%2FrOHhxxII30uVSiyeq8uMMiXcbCbiU18HdqVvZO9vXU0iLOD3isqEHptCudeShWuAalKZYvmKNa9PFQGOf%2FqJAri3HTtaP%2B%2Bw8hygE2vYN5aCHNoK8RY4T9%2FCZKrNAQ9zEzBnpJoFYM7%2FwhijaxdfvI6krimix1QkwQ%2FYvIUBCuEvcR%2Bc8itz2jL456eN1BtwGDQusyjK%2FnheUyeOD%2FgF0Nh3%2BogCdLYGePdHowa6PK2GKjGw4plY614gidhfZnIGGyr5STTYQV95cHw%2FSRpL8Fjq0N%2BcmiBqKiwTNUFOgYoXIbPoCOsSFB6L10aADCZmO29BjqkATbFp0dewMfyCboBI9pXKD5Mb0tbXLp4sn2B5FvPFY7YsXJNWFlCH3QT5lokNPGMryV1RFquMx301WB%2FhhqfvLZqPlOtqBs%2FIZdgxz8aHirsJ5ZzPIuok1VNt6d7djFaWj6Kt5hGtqabNWfyp0fa%2FqKp0YuG%2Bj2%2B9Hj%2FPF1rDK0uGBHA2KlRIvWkas5QaFtx%2Bkl%2BQblK0EKLisHTmDQF4pbaBfi3&X-Amz-Signature=05724b8ed63e7e4ff19e50b5a58a3f4cd1df3d0df6b932beaf9f30b88d9fc90f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUHIKC7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF7gBmb6s2%2FY3PSoj6qgbC6jQSLY2OIrIE%2FaEJpXTmaAIhAIaT060uFW9suwIzBdmoICaYZuUphK2%2B%2Bt8VKdubkb9jKv8DCBoQABoMNjM3NDIzMTgzODA1IgyNXLCQE7c74VtLylIq3ANrmjQu5gMFjAFizNTV7Pao5WWZYuV9sCJ0oti02TGZcG1xoN3W1yWLtz7ET8NbCL1HMfmiH7tu6RlqOvJHzfA38%2BrIs8yPW7T9GgmP%2B8tWes40IeJ2XHfzFoOWO2JtThgYwIpZ5X73HFlMH9s5Pdo4HQwOsjqUMcslkvjdH5LRNVzAsgOw7XXw%2FWsJmQ3VvW2lB3RdWGOn0puxgc0k%2B46SSymNQ40s6f2l%2BmuDjOAxUuA291viMvkMVmTXaeJF%2BvA8SzOqE8BRCGNbogWH503Rl%2FX5PTzOkkCITbXw4YU7UPZjUsAdc40%2FcCERSMv4%2FrOHhxxII30uVSiyeq8uMMiXcbCbiU18HdqVvZO9vXU0iLOD3isqEHptCudeShWuAalKZYvmKNa9PFQGOf%2FqJAri3HTtaP%2B%2Bw8hygE2vYN5aCHNoK8RY4T9%2FCZKrNAQ9zEzBnpJoFYM7%2FwhijaxdfvI6krimix1QkwQ%2FYvIUBCuEvcR%2Bc8itz2jL456eN1BtwGDQusyjK%2FnheUyeOD%2FgF0Nh3%2BogCdLYGePdHowa6PK2GKjGw4plY614gidhfZnIGGyr5STTYQV95cHw%2FSRpL8Fjq0N%2BcmiBqKiwTNUFOgYoXIbPoCOsSFB6L10aADCZmO29BjqkATbFp0dewMfyCboBI9pXKD5Mb0tbXLp4sn2B5FvPFY7YsXJNWFlCH3QT5lokNPGMryV1RFquMx301WB%2FhhqfvLZqPlOtqBs%2FIZdgxz8aHirsJ5ZzPIuok1VNt6d7djFaWj6Kt5hGtqabNWfyp0fa%2FqKp0YuG%2Bj2%2B9Hj%2FPF1rDK0uGBHA2KlRIvWkas5QaFtx%2Bkl%2BQblK0EKLisHTmDQF4pbaBfi3&X-Amz-Signature=42a9096d01fca617e7902107022117f232ae2cd789391c1e050afda4436748ec&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUHIKC7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF7gBmb6s2%2FY3PSoj6qgbC6jQSLY2OIrIE%2FaEJpXTmaAIhAIaT060uFW9suwIzBdmoICaYZuUphK2%2B%2Bt8VKdubkb9jKv8DCBoQABoMNjM3NDIzMTgzODA1IgyNXLCQE7c74VtLylIq3ANrmjQu5gMFjAFizNTV7Pao5WWZYuV9sCJ0oti02TGZcG1xoN3W1yWLtz7ET8NbCL1HMfmiH7tu6RlqOvJHzfA38%2BrIs8yPW7T9GgmP%2B8tWes40IeJ2XHfzFoOWO2JtThgYwIpZ5X73HFlMH9s5Pdo4HQwOsjqUMcslkvjdH5LRNVzAsgOw7XXw%2FWsJmQ3VvW2lB3RdWGOn0puxgc0k%2B46SSymNQ40s6f2l%2BmuDjOAxUuA291viMvkMVmTXaeJF%2BvA8SzOqE8BRCGNbogWH503Rl%2FX5PTzOkkCITbXw4YU7UPZjUsAdc40%2FcCERSMv4%2FrOHhxxII30uVSiyeq8uMMiXcbCbiU18HdqVvZO9vXU0iLOD3isqEHptCudeShWuAalKZYvmKNa9PFQGOf%2FqJAri3HTtaP%2B%2Bw8hygE2vYN5aCHNoK8RY4T9%2FCZKrNAQ9zEzBnpJoFYM7%2FwhijaxdfvI6krimix1QkwQ%2FYvIUBCuEvcR%2Bc8itz2jL456eN1BtwGDQusyjK%2FnheUyeOD%2FgF0Nh3%2BogCdLYGePdHowa6PK2GKjGw4plY614gidhfZnIGGyr5STTYQV95cHw%2FSRpL8Fjq0N%2BcmiBqKiwTNUFOgYoXIbPoCOsSFB6L10aADCZmO29BjqkATbFp0dewMfyCboBI9pXKD5Mb0tbXLp4sn2B5FvPFY7YsXJNWFlCH3QT5lokNPGMryV1RFquMx301WB%2FhhqfvLZqPlOtqBs%2FIZdgxz8aHirsJ5ZzPIuok1VNt6d7djFaWj6Kt5hGtqabNWfyp0fa%2FqKp0YuG%2Bj2%2B9Hj%2FPF1rDK0uGBHA2KlRIvWkas5QaFtx%2Bkl%2BQblK0EKLisHTmDQF4pbaBfi3&X-Amz-Signature=acc280b71b0e1e1d6e833e7901f96be61e6eb1047e585aef2b6b3213cc689b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUHIKC7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF7gBmb6s2%2FY3PSoj6qgbC6jQSLY2OIrIE%2FaEJpXTmaAIhAIaT060uFW9suwIzBdmoICaYZuUphK2%2B%2Bt8VKdubkb9jKv8DCBoQABoMNjM3NDIzMTgzODA1IgyNXLCQE7c74VtLylIq3ANrmjQu5gMFjAFizNTV7Pao5WWZYuV9sCJ0oti02TGZcG1xoN3W1yWLtz7ET8NbCL1HMfmiH7tu6RlqOvJHzfA38%2BrIs8yPW7T9GgmP%2B8tWes40IeJ2XHfzFoOWO2JtThgYwIpZ5X73HFlMH9s5Pdo4HQwOsjqUMcslkvjdH5LRNVzAsgOw7XXw%2FWsJmQ3VvW2lB3RdWGOn0puxgc0k%2B46SSymNQ40s6f2l%2BmuDjOAxUuA291viMvkMVmTXaeJF%2BvA8SzOqE8BRCGNbogWH503Rl%2FX5PTzOkkCITbXw4YU7UPZjUsAdc40%2FcCERSMv4%2FrOHhxxII30uVSiyeq8uMMiXcbCbiU18HdqVvZO9vXU0iLOD3isqEHptCudeShWuAalKZYvmKNa9PFQGOf%2FqJAri3HTtaP%2B%2Bw8hygE2vYN5aCHNoK8RY4T9%2FCZKrNAQ9zEzBnpJoFYM7%2FwhijaxdfvI6krimix1QkwQ%2FYvIUBCuEvcR%2Bc8itz2jL456eN1BtwGDQusyjK%2FnheUyeOD%2FgF0Nh3%2BogCdLYGePdHowa6PK2GKjGw4plY614gidhfZnIGGyr5STTYQV95cHw%2FSRpL8Fjq0N%2BcmiBqKiwTNUFOgYoXIbPoCOsSFB6L10aADCZmO29BjqkATbFp0dewMfyCboBI9pXKD5Mb0tbXLp4sn2B5FvPFY7YsXJNWFlCH3QT5lokNPGMryV1RFquMx301WB%2FhhqfvLZqPlOtqBs%2FIZdgxz8aHirsJ5ZzPIuok1VNt6d7djFaWj6Kt5hGtqabNWfyp0fa%2FqKp0YuG%2Bj2%2B9Hj%2FPF1rDK0uGBHA2KlRIvWkas5QaFtx%2Bkl%2BQblK0EKLisHTmDQF4pbaBfi3&X-Amz-Signature=9e4c658255c7e3e338081b6256142aeff132ed030cc5c1ccd3299443d017a0b3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUHIKC7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF7gBmb6s2%2FY3PSoj6qgbC6jQSLY2OIrIE%2FaEJpXTmaAIhAIaT060uFW9suwIzBdmoICaYZuUphK2%2B%2Bt8VKdubkb9jKv8DCBoQABoMNjM3NDIzMTgzODA1IgyNXLCQE7c74VtLylIq3ANrmjQu5gMFjAFizNTV7Pao5WWZYuV9sCJ0oti02TGZcG1xoN3W1yWLtz7ET8NbCL1HMfmiH7tu6RlqOvJHzfA38%2BrIs8yPW7T9GgmP%2B8tWes40IeJ2XHfzFoOWO2JtThgYwIpZ5X73HFlMH9s5Pdo4HQwOsjqUMcslkvjdH5LRNVzAsgOw7XXw%2FWsJmQ3VvW2lB3RdWGOn0puxgc0k%2B46SSymNQ40s6f2l%2BmuDjOAxUuA291viMvkMVmTXaeJF%2BvA8SzOqE8BRCGNbogWH503Rl%2FX5PTzOkkCITbXw4YU7UPZjUsAdc40%2FcCERSMv4%2FrOHhxxII30uVSiyeq8uMMiXcbCbiU18HdqVvZO9vXU0iLOD3isqEHptCudeShWuAalKZYvmKNa9PFQGOf%2FqJAri3HTtaP%2B%2Bw8hygE2vYN5aCHNoK8RY4T9%2FCZKrNAQ9zEzBnpJoFYM7%2FwhijaxdfvI6krimix1QkwQ%2FYvIUBCuEvcR%2Bc8itz2jL456eN1BtwGDQusyjK%2FnheUyeOD%2FgF0Nh3%2BogCdLYGePdHowa6PK2GKjGw4plY614gidhfZnIGGyr5STTYQV95cHw%2FSRpL8Fjq0N%2BcmiBqKiwTNUFOgYoXIbPoCOsSFB6L10aADCZmO29BjqkATbFp0dewMfyCboBI9pXKD5Mb0tbXLp4sn2B5FvPFY7YsXJNWFlCH3QT5lokNPGMryV1RFquMx301WB%2FhhqfvLZqPlOtqBs%2FIZdgxz8aHirsJ5ZzPIuok1VNt6d7djFaWj6Kt5hGtqabNWfyp0fa%2FqKp0YuG%2Bj2%2B9Hj%2FPF1rDK0uGBHA2KlRIvWkas5QaFtx%2Bkl%2BQblK0EKLisHTmDQF4pbaBfi3&X-Amz-Signature=076219ea14934ab80ae0473ec4d623cbf766b32e18b7601d13d1755eca356782&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUHIKC7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF7gBmb6s2%2FY3PSoj6qgbC6jQSLY2OIrIE%2FaEJpXTmaAIhAIaT060uFW9suwIzBdmoICaYZuUphK2%2B%2Bt8VKdubkb9jKv8DCBoQABoMNjM3NDIzMTgzODA1IgyNXLCQE7c74VtLylIq3ANrmjQu5gMFjAFizNTV7Pao5WWZYuV9sCJ0oti02TGZcG1xoN3W1yWLtz7ET8NbCL1HMfmiH7tu6RlqOvJHzfA38%2BrIs8yPW7T9GgmP%2B8tWes40IeJ2XHfzFoOWO2JtThgYwIpZ5X73HFlMH9s5Pdo4HQwOsjqUMcslkvjdH5LRNVzAsgOw7XXw%2FWsJmQ3VvW2lB3RdWGOn0puxgc0k%2B46SSymNQ40s6f2l%2BmuDjOAxUuA291viMvkMVmTXaeJF%2BvA8SzOqE8BRCGNbogWH503Rl%2FX5PTzOkkCITbXw4YU7UPZjUsAdc40%2FcCERSMv4%2FrOHhxxII30uVSiyeq8uMMiXcbCbiU18HdqVvZO9vXU0iLOD3isqEHptCudeShWuAalKZYvmKNa9PFQGOf%2FqJAri3HTtaP%2B%2Bw8hygE2vYN5aCHNoK8RY4T9%2FCZKrNAQ9zEzBnpJoFYM7%2FwhijaxdfvI6krimix1QkwQ%2FYvIUBCuEvcR%2Bc8itz2jL456eN1BtwGDQusyjK%2FnheUyeOD%2FgF0Nh3%2BogCdLYGePdHowa6PK2GKjGw4plY614gidhfZnIGGyr5STTYQV95cHw%2FSRpL8Fjq0N%2BcmiBqKiwTNUFOgYoXIbPoCOsSFB6L10aADCZmO29BjqkATbFp0dewMfyCboBI9pXKD5Mb0tbXLp4sn2B5FvPFY7YsXJNWFlCH3QT5lokNPGMryV1RFquMx301WB%2FhhqfvLZqPlOtqBs%2FIZdgxz8aHirsJ5ZzPIuok1VNt6d7djFaWj6Kt5hGtqabNWfyp0fa%2FqKp0YuG%2Bj2%2B9Hj%2FPF1rDK0uGBHA2KlRIvWkas5QaFtx%2Bkl%2BQblK0EKLisHTmDQF4pbaBfi3&X-Amz-Signature=ce2c76a3c1e1b3186b24b0013299c05f4ab8f9df400fd1ba6d636d49ef93e22b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
