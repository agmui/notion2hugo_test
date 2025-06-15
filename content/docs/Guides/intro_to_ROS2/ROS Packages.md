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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPYZ5UHE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCnXi9yksy5KsGLQPiKVyBzosd1H4W9OoGrn8hz3BzIhAIgMo9CAUt9CouBJ3lui8Gv7Pzu%2F5ntg4q3HyoOzMs11rYq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJGevrECye3xS6H1zyrcA7DFnRQ%2FbAG0Vf7chpHzucNPMfpBUKUDr38qfH1wo53WFc7cK9lXos8bbYP3IdKzU1pTC8coXDieUX3l41XpfouEq3TnI5LCBCwDFmKDiJ0qshk41uDnQxb81YqFkZ5EeTpI76LOI8s9rnhKQO%2B%2BBBJzJS%2FTWxpp7QODyb1s59y%2BI0jo6o8vZp80DpuxgcAGZY7ZWm%2FZIGfFNTU8mXGNyIxWq9ds5quEAIaz8GCAajn6L6TllGpuL50E1cXi4hxnSXihpLj4wGO2Kc6hQoYqCIUu8ZWzADTeqHsVCCrduXdGJEu2i0MxFpy30ZZsJNcwxkl5a0ybUukGV7BjmzG7YZ456y%2BITWskJRbdIyslFSHbFMHcNfcnB%2B5Avnw%2Fdu%2BkZxMSH7PF16k9gSyk%2F8WvLIXzWccW8GfxWdOeLdj2neJUBZ4JDL63Q4sFCYAN4Tbpy1YfdcvofSXkPCUQqJqxkIOd%2FVFPSpvKy5ZHQkF4eacCd5a8%2B%2B%2BqDMnWcAZrSCHQ8i7fKq8v1XYWuU2ho3IfOCdE7owIXjCIHUdSb42WGCFPlbRrguPHPBm%2BJTgGCnQmivKYKkUlJH0iZ1a9jZFkz3iqsq%2BOKkOFqG0bYHyZIP6T1kUbujmJ3L4RDPhhMLrku8IGOqUBk38oMiMbYraPHYVIkVaCF6EuU3LXt96T6vMHzJ94EZHa3tJHYEhw02OkyHelMhrgdNqZKRKCpG9M8MPrDnJKRBrii%2BLaPjAGSgw5BLNX2msHHU%2BoC2lU8yVg9toKLPlDPsdh60ivfQCFHJI0qqKzLySz%2BLnbmVgFUOGVsTaKJxr0y947%2FGm0b%2F6DIaO18jsEvAq758j4%2BWHcCFMKG5Z3e0hrCUhU&X-Amz-Signature=4c1e6583aa5dd8952f9874b65c07099db73871556a9dd9f00fe8dd5946429313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPYZ5UHE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCnXi9yksy5KsGLQPiKVyBzosd1H4W9OoGrn8hz3BzIhAIgMo9CAUt9CouBJ3lui8Gv7Pzu%2F5ntg4q3HyoOzMs11rYq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJGevrECye3xS6H1zyrcA7DFnRQ%2FbAG0Vf7chpHzucNPMfpBUKUDr38qfH1wo53WFc7cK9lXos8bbYP3IdKzU1pTC8coXDieUX3l41XpfouEq3TnI5LCBCwDFmKDiJ0qshk41uDnQxb81YqFkZ5EeTpI76LOI8s9rnhKQO%2B%2BBBJzJS%2FTWxpp7QODyb1s59y%2BI0jo6o8vZp80DpuxgcAGZY7ZWm%2FZIGfFNTU8mXGNyIxWq9ds5quEAIaz8GCAajn6L6TllGpuL50E1cXi4hxnSXihpLj4wGO2Kc6hQoYqCIUu8ZWzADTeqHsVCCrduXdGJEu2i0MxFpy30ZZsJNcwxkl5a0ybUukGV7BjmzG7YZ456y%2BITWskJRbdIyslFSHbFMHcNfcnB%2B5Avnw%2Fdu%2BkZxMSH7PF16k9gSyk%2F8WvLIXzWccW8GfxWdOeLdj2neJUBZ4JDL63Q4sFCYAN4Tbpy1YfdcvofSXkPCUQqJqxkIOd%2FVFPSpvKy5ZHQkF4eacCd5a8%2B%2B%2BqDMnWcAZrSCHQ8i7fKq8v1XYWuU2ho3IfOCdE7owIXjCIHUdSb42WGCFPlbRrguPHPBm%2BJTgGCnQmivKYKkUlJH0iZ1a9jZFkz3iqsq%2BOKkOFqG0bYHyZIP6T1kUbujmJ3L4RDPhhMLrku8IGOqUBk38oMiMbYraPHYVIkVaCF6EuU3LXt96T6vMHzJ94EZHa3tJHYEhw02OkyHelMhrgdNqZKRKCpG9M8MPrDnJKRBrii%2BLaPjAGSgw5BLNX2msHHU%2BoC2lU8yVg9toKLPlDPsdh60ivfQCFHJI0qqKzLySz%2BLnbmVgFUOGVsTaKJxr0y947%2FGm0b%2F6DIaO18jsEvAq758j4%2BWHcCFMKG5Z3e0hrCUhU&X-Amz-Signature=2b68ccb8ad8fc182d618bf2d2c59612dcf45d1ef1b95332bf2ac1fe119abab04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPYZ5UHE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCnXi9yksy5KsGLQPiKVyBzosd1H4W9OoGrn8hz3BzIhAIgMo9CAUt9CouBJ3lui8Gv7Pzu%2F5ntg4q3HyoOzMs11rYq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJGevrECye3xS6H1zyrcA7DFnRQ%2FbAG0Vf7chpHzucNPMfpBUKUDr38qfH1wo53WFc7cK9lXos8bbYP3IdKzU1pTC8coXDieUX3l41XpfouEq3TnI5LCBCwDFmKDiJ0qshk41uDnQxb81YqFkZ5EeTpI76LOI8s9rnhKQO%2B%2BBBJzJS%2FTWxpp7QODyb1s59y%2BI0jo6o8vZp80DpuxgcAGZY7ZWm%2FZIGfFNTU8mXGNyIxWq9ds5quEAIaz8GCAajn6L6TllGpuL50E1cXi4hxnSXihpLj4wGO2Kc6hQoYqCIUu8ZWzADTeqHsVCCrduXdGJEu2i0MxFpy30ZZsJNcwxkl5a0ybUukGV7BjmzG7YZ456y%2BITWskJRbdIyslFSHbFMHcNfcnB%2B5Avnw%2Fdu%2BkZxMSH7PF16k9gSyk%2F8WvLIXzWccW8GfxWdOeLdj2neJUBZ4JDL63Q4sFCYAN4Tbpy1YfdcvofSXkPCUQqJqxkIOd%2FVFPSpvKy5ZHQkF4eacCd5a8%2B%2B%2BqDMnWcAZrSCHQ8i7fKq8v1XYWuU2ho3IfOCdE7owIXjCIHUdSb42WGCFPlbRrguPHPBm%2BJTgGCnQmivKYKkUlJH0iZ1a9jZFkz3iqsq%2BOKkOFqG0bYHyZIP6T1kUbujmJ3L4RDPhhMLrku8IGOqUBk38oMiMbYraPHYVIkVaCF6EuU3LXt96T6vMHzJ94EZHa3tJHYEhw02OkyHelMhrgdNqZKRKCpG9M8MPrDnJKRBrii%2BLaPjAGSgw5BLNX2msHHU%2BoC2lU8yVg9toKLPlDPsdh60ivfQCFHJI0qqKzLySz%2BLnbmVgFUOGVsTaKJxr0y947%2FGm0b%2F6DIaO18jsEvAq758j4%2BWHcCFMKG5Z3e0hrCUhU&X-Amz-Signature=0e5d3eb35c9525986b1d350218e96a68fc8019ee4d716fef77976d15d73a06a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPYZ5UHE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCnXi9yksy5KsGLQPiKVyBzosd1H4W9OoGrn8hz3BzIhAIgMo9CAUt9CouBJ3lui8Gv7Pzu%2F5ntg4q3HyoOzMs11rYq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJGevrECye3xS6H1zyrcA7DFnRQ%2FbAG0Vf7chpHzucNPMfpBUKUDr38qfH1wo53WFc7cK9lXos8bbYP3IdKzU1pTC8coXDieUX3l41XpfouEq3TnI5LCBCwDFmKDiJ0qshk41uDnQxb81YqFkZ5EeTpI76LOI8s9rnhKQO%2B%2BBBJzJS%2FTWxpp7QODyb1s59y%2BI0jo6o8vZp80DpuxgcAGZY7ZWm%2FZIGfFNTU8mXGNyIxWq9ds5quEAIaz8GCAajn6L6TllGpuL50E1cXi4hxnSXihpLj4wGO2Kc6hQoYqCIUu8ZWzADTeqHsVCCrduXdGJEu2i0MxFpy30ZZsJNcwxkl5a0ybUukGV7BjmzG7YZ456y%2BITWskJRbdIyslFSHbFMHcNfcnB%2B5Avnw%2Fdu%2BkZxMSH7PF16k9gSyk%2F8WvLIXzWccW8GfxWdOeLdj2neJUBZ4JDL63Q4sFCYAN4Tbpy1YfdcvofSXkPCUQqJqxkIOd%2FVFPSpvKy5ZHQkF4eacCd5a8%2B%2B%2BqDMnWcAZrSCHQ8i7fKq8v1XYWuU2ho3IfOCdE7owIXjCIHUdSb42WGCFPlbRrguPHPBm%2BJTgGCnQmivKYKkUlJH0iZ1a9jZFkz3iqsq%2BOKkOFqG0bYHyZIP6T1kUbujmJ3L4RDPhhMLrku8IGOqUBk38oMiMbYraPHYVIkVaCF6EuU3LXt96T6vMHzJ94EZHa3tJHYEhw02OkyHelMhrgdNqZKRKCpG9M8MPrDnJKRBrii%2BLaPjAGSgw5BLNX2msHHU%2BoC2lU8yVg9toKLPlDPsdh60ivfQCFHJI0qqKzLySz%2BLnbmVgFUOGVsTaKJxr0y947%2FGm0b%2F6DIaO18jsEvAq758j4%2BWHcCFMKG5Z3e0hrCUhU&X-Amz-Signature=9ad8eab803ecf291ee679fe673461c51804219f51abfe93744ff9689e3df0e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPYZ5UHE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCnXi9yksy5KsGLQPiKVyBzosd1H4W9OoGrn8hz3BzIhAIgMo9CAUt9CouBJ3lui8Gv7Pzu%2F5ntg4q3HyoOzMs11rYq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJGevrECye3xS6H1zyrcA7DFnRQ%2FbAG0Vf7chpHzucNPMfpBUKUDr38qfH1wo53WFc7cK9lXos8bbYP3IdKzU1pTC8coXDieUX3l41XpfouEq3TnI5LCBCwDFmKDiJ0qshk41uDnQxb81YqFkZ5EeTpI76LOI8s9rnhKQO%2B%2BBBJzJS%2FTWxpp7QODyb1s59y%2BI0jo6o8vZp80DpuxgcAGZY7ZWm%2FZIGfFNTU8mXGNyIxWq9ds5quEAIaz8GCAajn6L6TllGpuL50E1cXi4hxnSXihpLj4wGO2Kc6hQoYqCIUu8ZWzADTeqHsVCCrduXdGJEu2i0MxFpy30ZZsJNcwxkl5a0ybUukGV7BjmzG7YZ456y%2BITWskJRbdIyslFSHbFMHcNfcnB%2B5Avnw%2Fdu%2BkZxMSH7PF16k9gSyk%2F8WvLIXzWccW8GfxWdOeLdj2neJUBZ4JDL63Q4sFCYAN4Tbpy1YfdcvofSXkPCUQqJqxkIOd%2FVFPSpvKy5ZHQkF4eacCd5a8%2B%2B%2BqDMnWcAZrSCHQ8i7fKq8v1XYWuU2ho3IfOCdE7owIXjCIHUdSb42WGCFPlbRrguPHPBm%2BJTgGCnQmivKYKkUlJH0iZ1a9jZFkz3iqsq%2BOKkOFqG0bYHyZIP6T1kUbujmJ3L4RDPhhMLrku8IGOqUBk38oMiMbYraPHYVIkVaCF6EuU3LXt96T6vMHzJ94EZHa3tJHYEhw02OkyHelMhrgdNqZKRKCpG9M8MPrDnJKRBrii%2BLaPjAGSgw5BLNX2msHHU%2BoC2lU8yVg9toKLPlDPsdh60ivfQCFHJI0qqKzLySz%2BLnbmVgFUOGVsTaKJxr0y947%2FGm0b%2F6DIaO18jsEvAq758j4%2BWHcCFMKG5Z3e0hrCUhU&X-Amz-Signature=21a36de1fba9b78278bea08c036d9b22e5e89a10290aae244f9741c34ab870d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPYZ5UHE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCnXi9yksy5KsGLQPiKVyBzosd1H4W9OoGrn8hz3BzIhAIgMo9CAUt9CouBJ3lui8Gv7Pzu%2F5ntg4q3HyoOzMs11rYq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJGevrECye3xS6H1zyrcA7DFnRQ%2FbAG0Vf7chpHzucNPMfpBUKUDr38qfH1wo53WFc7cK9lXos8bbYP3IdKzU1pTC8coXDieUX3l41XpfouEq3TnI5LCBCwDFmKDiJ0qshk41uDnQxb81YqFkZ5EeTpI76LOI8s9rnhKQO%2B%2BBBJzJS%2FTWxpp7QODyb1s59y%2BI0jo6o8vZp80DpuxgcAGZY7ZWm%2FZIGfFNTU8mXGNyIxWq9ds5quEAIaz8GCAajn6L6TllGpuL50E1cXi4hxnSXihpLj4wGO2Kc6hQoYqCIUu8ZWzADTeqHsVCCrduXdGJEu2i0MxFpy30ZZsJNcwxkl5a0ybUukGV7BjmzG7YZ456y%2BITWskJRbdIyslFSHbFMHcNfcnB%2B5Avnw%2Fdu%2BkZxMSH7PF16k9gSyk%2F8WvLIXzWccW8GfxWdOeLdj2neJUBZ4JDL63Q4sFCYAN4Tbpy1YfdcvofSXkPCUQqJqxkIOd%2FVFPSpvKy5ZHQkF4eacCd5a8%2B%2B%2BqDMnWcAZrSCHQ8i7fKq8v1XYWuU2ho3IfOCdE7owIXjCIHUdSb42WGCFPlbRrguPHPBm%2BJTgGCnQmivKYKkUlJH0iZ1a9jZFkz3iqsq%2BOKkOFqG0bYHyZIP6T1kUbujmJ3L4RDPhhMLrku8IGOqUBk38oMiMbYraPHYVIkVaCF6EuU3LXt96T6vMHzJ94EZHa3tJHYEhw02OkyHelMhrgdNqZKRKCpG9M8MPrDnJKRBrii%2BLaPjAGSgw5BLNX2msHHU%2BoC2lU8yVg9toKLPlDPsdh60ivfQCFHJI0qqKzLySz%2BLnbmVgFUOGVsTaKJxr0y947%2FGm0b%2F6DIaO18jsEvAq758j4%2BWHcCFMKG5Z3e0hrCUhU&X-Amz-Signature=a7c475f3c580dbb9afc3a8947cb7abdedc22b910f93a27efc22b98c90b97804a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPYZ5UHE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCnXi9yksy5KsGLQPiKVyBzosd1H4W9OoGrn8hz3BzIhAIgMo9CAUt9CouBJ3lui8Gv7Pzu%2F5ntg4q3HyoOzMs11rYq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJGevrECye3xS6H1zyrcA7DFnRQ%2FbAG0Vf7chpHzucNPMfpBUKUDr38qfH1wo53WFc7cK9lXos8bbYP3IdKzU1pTC8coXDieUX3l41XpfouEq3TnI5LCBCwDFmKDiJ0qshk41uDnQxb81YqFkZ5EeTpI76LOI8s9rnhKQO%2B%2BBBJzJS%2FTWxpp7QODyb1s59y%2BI0jo6o8vZp80DpuxgcAGZY7ZWm%2FZIGfFNTU8mXGNyIxWq9ds5quEAIaz8GCAajn6L6TllGpuL50E1cXi4hxnSXihpLj4wGO2Kc6hQoYqCIUu8ZWzADTeqHsVCCrduXdGJEu2i0MxFpy30ZZsJNcwxkl5a0ybUukGV7BjmzG7YZ456y%2BITWskJRbdIyslFSHbFMHcNfcnB%2B5Avnw%2Fdu%2BkZxMSH7PF16k9gSyk%2F8WvLIXzWccW8GfxWdOeLdj2neJUBZ4JDL63Q4sFCYAN4Tbpy1YfdcvofSXkPCUQqJqxkIOd%2FVFPSpvKy5ZHQkF4eacCd5a8%2B%2B%2BqDMnWcAZrSCHQ8i7fKq8v1XYWuU2ho3IfOCdE7owIXjCIHUdSb42WGCFPlbRrguPHPBm%2BJTgGCnQmivKYKkUlJH0iZ1a9jZFkz3iqsq%2BOKkOFqG0bYHyZIP6T1kUbujmJ3L4RDPhhMLrku8IGOqUBk38oMiMbYraPHYVIkVaCF6EuU3LXt96T6vMHzJ94EZHa3tJHYEhw02OkyHelMhrgdNqZKRKCpG9M8MPrDnJKRBrii%2BLaPjAGSgw5BLNX2msHHU%2BoC2lU8yVg9toKLPlDPsdh60ivfQCFHJI0qqKzLySz%2BLnbmVgFUOGVsTaKJxr0y947%2FGm0b%2F6DIaO18jsEvAq758j4%2BWHcCFMKG5Z3e0hrCUhU&X-Amz-Signature=9fd937707b14e474dcdbaa453c8d973cf38b2f65654a55cdc9d3c0025389e8e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
