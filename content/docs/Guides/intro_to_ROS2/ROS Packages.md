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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQTNBF6O%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHu0ckPoMN00AlQdQ6dreG4u%2FGNyU51XZWLge%2FRy5ncAiEA%2B9R38yK5UhqeshgXv%2BmKYTn6rXdzIKNZ0K574DZ6oacq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNblwxlrSIIkF%2FnQHSrcA14Hgzv4UeQsBUyoJdQOK0J%2Bxcm8%2FVm6G4tixQISeAIca%2BTbQCm1VYNQzbKev0q6ZNw9rz2zbmiHEotJMJdjD8%2B3oAoNCSBGfrOKr8xvZcwsGtFaIQjAS1kSYUE1TiIUtREX52VAj0TXcet1HWDIcLkBDTPywItanonDUIuAOuPGXZKYbKeg7Kc%2BWmqzgIZk1Uc9M2Br%2Fa6YF2hke72U4mNrZB2N3k7ah3%2BMDiylvR3JnK48Ce1QCogaaThoHabx1ZcOzpv8CmvDM45QVycF9B3MrZcdIV9aIF1eHau93k6XJNvOPyjy0NXm4qbw%2FnW2bdpOkDxMnrZsRrlzI2mxZr%2FQVoyYNOQcYlX95AeIk%2FgYOmDYRK0qTal0eUf072tunXgC%2FCy9e3hcX0uNPi%2FDqen74JJyw6nYp%2BvDFbH47kAghxPk1k1cAkunwXF7vWRu%2B46XRWwAxDdyEbMVbF0OOj0J%2Fj3Lh7SFibAFA75VkhsVLRc69IbHJZjOOqVdNVHzQYsTSuEo2u9Oy26LFKmHBiv0cNyf1nYNBPXhDd12%2Fge1Mi44i7%2FwkYtf8vyqUQwRtAAzZzP81VwbPqvHTOV70djSN6DWJhNf%2FM1zPMo8sMuXqvFcY%2FsyxLWs3LejMKTw%2B78GOqUBYilVt7x5CHxUeGBLRgSNHzP%2FHhhZ8vFzG0JX3S4Zm1wy%2FTCv9zoo7bJSiM7Gk1L5Xiby8eXHe0N4Fx3kPNWzlOeJYwLC%2B6H8NDSw0MXP5D%2BSxLOfkTGgutb36Sa8J2k0QsEnWAP0XEYxJZls6ekRfIVFQY6vxBqtrGjMUc34gzKXqxivAnE%2B8jZBtqtZzxtmxV%2BEfzR%2FJraeZE2Hsmry2S2DzbzE&X-Amz-Signature=fdbf3398d140f508f54dc16133698343fd5f8b5fce726f1272f96536db08745d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQTNBF6O%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHu0ckPoMN00AlQdQ6dreG4u%2FGNyU51XZWLge%2FRy5ncAiEA%2B9R38yK5UhqeshgXv%2BmKYTn6rXdzIKNZ0K574DZ6oacq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNblwxlrSIIkF%2FnQHSrcA14Hgzv4UeQsBUyoJdQOK0J%2Bxcm8%2FVm6G4tixQISeAIca%2BTbQCm1VYNQzbKev0q6ZNw9rz2zbmiHEotJMJdjD8%2B3oAoNCSBGfrOKr8xvZcwsGtFaIQjAS1kSYUE1TiIUtREX52VAj0TXcet1HWDIcLkBDTPywItanonDUIuAOuPGXZKYbKeg7Kc%2BWmqzgIZk1Uc9M2Br%2Fa6YF2hke72U4mNrZB2N3k7ah3%2BMDiylvR3JnK48Ce1QCogaaThoHabx1ZcOzpv8CmvDM45QVycF9B3MrZcdIV9aIF1eHau93k6XJNvOPyjy0NXm4qbw%2FnW2bdpOkDxMnrZsRrlzI2mxZr%2FQVoyYNOQcYlX95AeIk%2FgYOmDYRK0qTal0eUf072tunXgC%2FCy9e3hcX0uNPi%2FDqen74JJyw6nYp%2BvDFbH47kAghxPk1k1cAkunwXF7vWRu%2B46XRWwAxDdyEbMVbF0OOj0J%2Fj3Lh7SFibAFA75VkhsVLRc69IbHJZjOOqVdNVHzQYsTSuEo2u9Oy26LFKmHBiv0cNyf1nYNBPXhDd12%2Fge1Mi44i7%2FwkYtf8vyqUQwRtAAzZzP81VwbPqvHTOV70djSN6DWJhNf%2FM1zPMo8sMuXqvFcY%2FsyxLWs3LejMKTw%2B78GOqUBYilVt7x5CHxUeGBLRgSNHzP%2FHhhZ8vFzG0JX3S4Zm1wy%2FTCv9zoo7bJSiM7Gk1L5Xiby8eXHe0N4Fx3kPNWzlOeJYwLC%2B6H8NDSw0MXP5D%2BSxLOfkTGgutb36Sa8J2k0QsEnWAP0XEYxJZls6ekRfIVFQY6vxBqtrGjMUc34gzKXqxivAnE%2B8jZBtqtZzxtmxV%2BEfzR%2FJraeZE2Hsmry2S2DzbzE&X-Amz-Signature=28af991dca8363597b550c7fccde93074850cfb320b40f5cd1a0e1863101fda2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQTNBF6O%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHu0ckPoMN00AlQdQ6dreG4u%2FGNyU51XZWLge%2FRy5ncAiEA%2B9R38yK5UhqeshgXv%2BmKYTn6rXdzIKNZ0K574DZ6oacq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNblwxlrSIIkF%2FnQHSrcA14Hgzv4UeQsBUyoJdQOK0J%2Bxcm8%2FVm6G4tixQISeAIca%2BTbQCm1VYNQzbKev0q6ZNw9rz2zbmiHEotJMJdjD8%2B3oAoNCSBGfrOKr8xvZcwsGtFaIQjAS1kSYUE1TiIUtREX52VAj0TXcet1HWDIcLkBDTPywItanonDUIuAOuPGXZKYbKeg7Kc%2BWmqzgIZk1Uc9M2Br%2Fa6YF2hke72U4mNrZB2N3k7ah3%2BMDiylvR3JnK48Ce1QCogaaThoHabx1ZcOzpv8CmvDM45QVycF9B3MrZcdIV9aIF1eHau93k6XJNvOPyjy0NXm4qbw%2FnW2bdpOkDxMnrZsRrlzI2mxZr%2FQVoyYNOQcYlX95AeIk%2FgYOmDYRK0qTal0eUf072tunXgC%2FCy9e3hcX0uNPi%2FDqen74JJyw6nYp%2BvDFbH47kAghxPk1k1cAkunwXF7vWRu%2B46XRWwAxDdyEbMVbF0OOj0J%2Fj3Lh7SFibAFA75VkhsVLRc69IbHJZjOOqVdNVHzQYsTSuEo2u9Oy26LFKmHBiv0cNyf1nYNBPXhDd12%2Fge1Mi44i7%2FwkYtf8vyqUQwRtAAzZzP81VwbPqvHTOV70djSN6DWJhNf%2FM1zPMo8sMuXqvFcY%2FsyxLWs3LejMKTw%2B78GOqUBYilVt7x5CHxUeGBLRgSNHzP%2FHhhZ8vFzG0JX3S4Zm1wy%2FTCv9zoo7bJSiM7Gk1L5Xiby8eXHe0N4Fx3kPNWzlOeJYwLC%2B6H8NDSw0MXP5D%2BSxLOfkTGgutb36Sa8J2k0QsEnWAP0XEYxJZls6ekRfIVFQY6vxBqtrGjMUc34gzKXqxivAnE%2B8jZBtqtZzxtmxV%2BEfzR%2FJraeZE2Hsmry2S2DzbzE&X-Amz-Signature=0fa6eecb1c27dc54edfa3dc59d01fd5414b0d601c3f2f6e6c36a3d939e13b77e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQTNBF6O%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHu0ckPoMN00AlQdQ6dreG4u%2FGNyU51XZWLge%2FRy5ncAiEA%2B9R38yK5UhqeshgXv%2BmKYTn6rXdzIKNZ0K574DZ6oacq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNblwxlrSIIkF%2FnQHSrcA14Hgzv4UeQsBUyoJdQOK0J%2Bxcm8%2FVm6G4tixQISeAIca%2BTbQCm1VYNQzbKev0q6ZNw9rz2zbmiHEotJMJdjD8%2B3oAoNCSBGfrOKr8xvZcwsGtFaIQjAS1kSYUE1TiIUtREX52VAj0TXcet1HWDIcLkBDTPywItanonDUIuAOuPGXZKYbKeg7Kc%2BWmqzgIZk1Uc9M2Br%2Fa6YF2hke72U4mNrZB2N3k7ah3%2BMDiylvR3JnK48Ce1QCogaaThoHabx1ZcOzpv8CmvDM45QVycF9B3MrZcdIV9aIF1eHau93k6XJNvOPyjy0NXm4qbw%2FnW2bdpOkDxMnrZsRrlzI2mxZr%2FQVoyYNOQcYlX95AeIk%2FgYOmDYRK0qTal0eUf072tunXgC%2FCy9e3hcX0uNPi%2FDqen74JJyw6nYp%2BvDFbH47kAghxPk1k1cAkunwXF7vWRu%2B46XRWwAxDdyEbMVbF0OOj0J%2Fj3Lh7SFibAFA75VkhsVLRc69IbHJZjOOqVdNVHzQYsTSuEo2u9Oy26LFKmHBiv0cNyf1nYNBPXhDd12%2Fge1Mi44i7%2FwkYtf8vyqUQwRtAAzZzP81VwbPqvHTOV70djSN6DWJhNf%2FM1zPMo8sMuXqvFcY%2FsyxLWs3LejMKTw%2B78GOqUBYilVt7x5CHxUeGBLRgSNHzP%2FHhhZ8vFzG0JX3S4Zm1wy%2FTCv9zoo7bJSiM7Gk1L5Xiby8eXHe0N4Fx3kPNWzlOeJYwLC%2B6H8NDSw0MXP5D%2BSxLOfkTGgutb36Sa8J2k0QsEnWAP0XEYxJZls6ekRfIVFQY6vxBqtrGjMUc34gzKXqxivAnE%2B8jZBtqtZzxtmxV%2BEfzR%2FJraeZE2Hsmry2S2DzbzE&X-Amz-Signature=84a51fcd9f04bb6a36d2166090cfd0a7284f24d7570e730292d99ddd57dc721e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQTNBF6O%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHu0ckPoMN00AlQdQ6dreG4u%2FGNyU51XZWLge%2FRy5ncAiEA%2B9R38yK5UhqeshgXv%2BmKYTn6rXdzIKNZ0K574DZ6oacq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNblwxlrSIIkF%2FnQHSrcA14Hgzv4UeQsBUyoJdQOK0J%2Bxcm8%2FVm6G4tixQISeAIca%2BTbQCm1VYNQzbKev0q6ZNw9rz2zbmiHEotJMJdjD8%2B3oAoNCSBGfrOKr8xvZcwsGtFaIQjAS1kSYUE1TiIUtREX52VAj0TXcet1HWDIcLkBDTPywItanonDUIuAOuPGXZKYbKeg7Kc%2BWmqzgIZk1Uc9M2Br%2Fa6YF2hke72U4mNrZB2N3k7ah3%2BMDiylvR3JnK48Ce1QCogaaThoHabx1ZcOzpv8CmvDM45QVycF9B3MrZcdIV9aIF1eHau93k6XJNvOPyjy0NXm4qbw%2FnW2bdpOkDxMnrZsRrlzI2mxZr%2FQVoyYNOQcYlX95AeIk%2FgYOmDYRK0qTal0eUf072tunXgC%2FCy9e3hcX0uNPi%2FDqen74JJyw6nYp%2BvDFbH47kAghxPk1k1cAkunwXF7vWRu%2B46XRWwAxDdyEbMVbF0OOj0J%2Fj3Lh7SFibAFA75VkhsVLRc69IbHJZjOOqVdNVHzQYsTSuEo2u9Oy26LFKmHBiv0cNyf1nYNBPXhDd12%2Fge1Mi44i7%2FwkYtf8vyqUQwRtAAzZzP81VwbPqvHTOV70djSN6DWJhNf%2FM1zPMo8sMuXqvFcY%2FsyxLWs3LejMKTw%2B78GOqUBYilVt7x5CHxUeGBLRgSNHzP%2FHhhZ8vFzG0JX3S4Zm1wy%2FTCv9zoo7bJSiM7Gk1L5Xiby8eXHe0N4Fx3kPNWzlOeJYwLC%2B6H8NDSw0MXP5D%2BSxLOfkTGgutb36Sa8J2k0QsEnWAP0XEYxJZls6ekRfIVFQY6vxBqtrGjMUc34gzKXqxivAnE%2B8jZBtqtZzxtmxV%2BEfzR%2FJraeZE2Hsmry2S2DzbzE&X-Amz-Signature=23fd8bdb29f7ebd6a098e91d9b4c7b472f53e893ae0ee2e7db7a7db7dfea0910&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQTNBF6O%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHu0ckPoMN00AlQdQ6dreG4u%2FGNyU51XZWLge%2FRy5ncAiEA%2B9R38yK5UhqeshgXv%2BmKYTn6rXdzIKNZ0K574DZ6oacq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNblwxlrSIIkF%2FnQHSrcA14Hgzv4UeQsBUyoJdQOK0J%2Bxcm8%2FVm6G4tixQISeAIca%2BTbQCm1VYNQzbKev0q6ZNw9rz2zbmiHEotJMJdjD8%2B3oAoNCSBGfrOKr8xvZcwsGtFaIQjAS1kSYUE1TiIUtREX52VAj0TXcet1HWDIcLkBDTPywItanonDUIuAOuPGXZKYbKeg7Kc%2BWmqzgIZk1Uc9M2Br%2Fa6YF2hke72U4mNrZB2N3k7ah3%2BMDiylvR3JnK48Ce1QCogaaThoHabx1ZcOzpv8CmvDM45QVycF9B3MrZcdIV9aIF1eHau93k6XJNvOPyjy0NXm4qbw%2FnW2bdpOkDxMnrZsRrlzI2mxZr%2FQVoyYNOQcYlX95AeIk%2FgYOmDYRK0qTal0eUf072tunXgC%2FCy9e3hcX0uNPi%2FDqen74JJyw6nYp%2BvDFbH47kAghxPk1k1cAkunwXF7vWRu%2B46XRWwAxDdyEbMVbF0OOj0J%2Fj3Lh7SFibAFA75VkhsVLRc69IbHJZjOOqVdNVHzQYsTSuEo2u9Oy26LFKmHBiv0cNyf1nYNBPXhDd12%2Fge1Mi44i7%2FwkYtf8vyqUQwRtAAzZzP81VwbPqvHTOV70djSN6DWJhNf%2FM1zPMo8sMuXqvFcY%2FsyxLWs3LejMKTw%2B78GOqUBYilVt7x5CHxUeGBLRgSNHzP%2FHhhZ8vFzG0JX3S4Zm1wy%2FTCv9zoo7bJSiM7Gk1L5Xiby8eXHe0N4Fx3kPNWzlOeJYwLC%2B6H8NDSw0MXP5D%2BSxLOfkTGgutb36Sa8J2k0QsEnWAP0XEYxJZls6ekRfIVFQY6vxBqtrGjMUc34gzKXqxivAnE%2B8jZBtqtZzxtmxV%2BEfzR%2FJraeZE2Hsmry2S2DzbzE&X-Amz-Signature=67365f6e148b60a465a4c74c3ab1666ec7e02dfa79cbcd199542eee45443e074&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQTNBF6O%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHu0ckPoMN00AlQdQ6dreG4u%2FGNyU51XZWLge%2FRy5ncAiEA%2B9R38yK5UhqeshgXv%2BmKYTn6rXdzIKNZ0K574DZ6oacq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNblwxlrSIIkF%2FnQHSrcA14Hgzv4UeQsBUyoJdQOK0J%2Bxcm8%2FVm6G4tixQISeAIca%2BTbQCm1VYNQzbKev0q6ZNw9rz2zbmiHEotJMJdjD8%2B3oAoNCSBGfrOKr8xvZcwsGtFaIQjAS1kSYUE1TiIUtREX52VAj0TXcet1HWDIcLkBDTPywItanonDUIuAOuPGXZKYbKeg7Kc%2BWmqzgIZk1Uc9M2Br%2Fa6YF2hke72U4mNrZB2N3k7ah3%2BMDiylvR3JnK48Ce1QCogaaThoHabx1ZcOzpv8CmvDM45QVycF9B3MrZcdIV9aIF1eHau93k6XJNvOPyjy0NXm4qbw%2FnW2bdpOkDxMnrZsRrlzI2mxZr%2FQVoyYNOQcYlX95AeIk%2FgYOmDYRK0qTal0eUf072tunXgC%2FCy9e3hcX0uNPi%2FDqen74JJyw6nYp%2BvDFbH47kAghxPk1k1cAkunwXF7vWRu%2B46XRWwAxDdyEbMVbF0OOj0J%2Fj3Lh7SFibAFA75VkhsVLRc69IbHJZjOOqVdNVHzQYsTSuEo2u9Oy26LFKmHBiv0cNyf1nYNBPXhDd12%2Fge1Mi44i7%2FwkYtf8vyqUQwRtAAzZzP81VwbPqvHTOV70djSN6DWJhNf%2FM1zPMo8sMuXqvFcY%2FsyxLWs3LejMKTw%2B78GOqUBYilVt7x5CHxUeGBLRgSNHzP%2FHhhZ8vFzG0JX3S4Zm1wy%2FTCv9zoo7bJSiM7Gk1L5Xiby8eXHe0N4Fx3kPNWzlOeJYwLC%2B6H8NDSw0MXP5D%2BSxLOfkTGgutb36Sa8J2k0QsEnWAP0XEYxJZls6ekRfIVFQY6vxBqtrGjMUc34gzKXqxivAnE%2B8jZBtqtZzxtmxV%2BEfzR%2FJraeZE2Hsmry2S2DzbzE&X-Amz-Signature=5766999d3c698a413bb38ad88ecda661ec7d3eeea9af06d54ee09c2c4d88af0c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
