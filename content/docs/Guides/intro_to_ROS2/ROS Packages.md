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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRARA4XH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BgffNDG5gvzA0vOIReI0ygzus56PAtT3HglFi0FcpQAIhANdRGmJaLzjjTyAE%2F1rQbOQko5akQ2UwoQoWc4qUrtjiKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFl%2BZVFFVy8g6BDIIq3AN8xDHh6AA6TxO34X0%2BhSKllyPlfwx0gGPTtzfq5IldBfp4m61Vi1%2B4q999fmmmnqVPjrG2PjTGEEmh94CpJiZEQcLzA591eczALUbQHAC2WFST%2BX64AWsuhj72Cn%2FW8Vbbl9oIL468misYp1soCXZ%2BYZRfc%2BfAbsUXXzG7sIz53WqzUbOfCer%2F4xfZzyRMBrb%2Bx5q6dfobFVhMEgfYmKVP%2FOR9ctpxyoVyiww38tIAXPlRu%2F6em4ecZj5A33nfr8LmiE7mzM2MtRjrFRzYfFvZaB8N7A1bDJ1vGIsp34QKRlI6k4dNElLtwJLruUzH5juJKdSMmuvSm4PtQSf2TThMnwdB1syFnQjcJGG1gU9Qri7aoXOsBekQ%2FTCGy9LPItGwsj%2BwbCvkjNRzJmz7mnQD2oBy9ynPM9LFIG7MILYkWddfgTZxY9I8kQCczW2usNTK6Xb1noENkpYy2Qg%2BsYTYjGS6%2BMuSvDyl0mJ1vdJ%2FmAWbuUsEaf%2BNPmQxjY9R9ho0vDWXSKA66rvUuqiGELYQkdXR6kXs%2BEspTuc2KPInsvnj3fIh07pfNLfzJa85VbvBlX2W9QKwdeVGtub8kQpcT%2FKR3qAY9mAJy2hTFU5NTgupFKBOYA%2BGI3Mc%2FjDV5aXCBjqkAdc5ZHg3AX2GErRgW6w3AzN60CgLVF%2BJFOIGMzcUxSwsyoChWLAWggv4HpobQcL%2BFtJDsXr7hzplI3OLOWbspuBv%2BTexro3866%2F7ZegOsdEbBcAW1EZMSuq9A84NwYtiD%2F6tbwBVW9zC9p1o9BLY5f4syxMWJy5sm5f8Z9WqXiTuNIruBZ0C3t28tBJe%2BhvGIXQmgE4mSguH%2FubzdnfhhcksEdKo&X-Amz-Signature=3d5c71b1911d425bbe3e32f8e024bac46cabc0df95b9d66627379165809bb617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRARA4XH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BgffNDG5gvzA0vOIReI0ygzus56PAtT3HglFi0FcpQAIhANdRGmJaLzjjTyAE%2F1rQbOQko5akQ2UwoQoWc4qUrtjiKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFl%2BZVFFVy8g6BDIIq3AN8xDHh6AA6TxO34X0%2BhSKllyPlfwx0gGPTtzfq5IldBfp4m61Vi1%2B4q999fmmmnqVPjrG2PjTGEEmh94CpJiZEQcLzA591eczALUbQHAC2WFST%2BX64AWsuhj72Cn%2FW8Vbbl9oIL468misYp1soCXZ%2BYZRfc%2BfAbsUXXzG7sIz53WqzUbOfCer%2F4xfZzyRMBrb%2Bx5q6dfobFVhMEgfYmKVP%2FOR9ctpxyoVyiww38tIAXPlRu%2F6em4ecZj5A33nfr8LmiE7mzM2MtRjrFRzYfFvZaB8N7A1bDJ1vGIsp34QKRlI6k4dNElLtwJLruUzH5juJKdSMmuvSm4PtQSf2TThMnwdB1syFnQjcJGG1gU9Qri7aoXOsBekQ%2FTCGy9LPItGwsj%2BwbCvkjNRzJmz7mnQD2oBy9ynPM9LFIG7MILYkWddfgTZxY9I8kQCczW2usNTK6Xb1noENkpYy2Qg%2BsYTYjGS6%2BMuSvDyl0mJ1vdJ%2FmAWbuUsEaf%2BNPmQxjY9R9ho0vDWXSKA66rvUuqiGELYQkdXR6kXs%2BEspTuc2KPInsvnj3fIh07pfNLfzJa85VbvBlX2W9QKwdeVGtub8kQpcT%2FKR3qAY9mAJy2hTFU5NTgupFKBOYA%2BGI3Mc%2FjDV5aXCBjqkAdc5ZHg3AX2GErRgW6w3AzN60CgLVF%2BJFOIGMzcUxSwsyoChWLAWggv4HpobQcL%2BFtJDsXr7hzplI3OLOWbspuBv%2BTexro3866%2F7ZegOsdEbBcAW1EZMSuq9A84NwYtiD%2F6tbwBVW9zC9p1o9BLY5f4syxMWJy5sm5f8Z9WqXiTuNIruBZ0C3t28tBJe%2BhvGIXQmgE4mSguH%2FubzdnfhhcksEdKo&X-Amz-Signature=ec5cca9cd68e661bc693ecb81e999b1ba7d3418fa7878c5c8ea7d93922969d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRARA4XH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BgffNDG5gvzA0vOIReI0ygzus56PAtT3HglFi0FcpQAIhANdRGmJaLzjjTyAE%2F1rQbOQko5akQ2UwoQoWc4qUrtjiKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFl%2BZVFFVy8g6BDIIq3AN8xDHh6AA6TxO34X0%2BhSKllyPlfwx0gGPTtzfq5IldBfp4m61Vi1%2B4q999fmmmnqVPjrG2PjTGEEmh94CpJiZEQcLzA591eczALUbQHAC2WFST%2BX64AWsuhj72Cn%2FW8Vbbl9oIL468misYp1soCXZ%2BYZRfc%2BfAbsUXXzG7sIz53WqzUbOfCer%2F4xfZzyRMBrb%2Bx5q6dfobFVhMEgfYmKVP%2FOR9ctpxyoVyiww38tIAXPlRu%2F6em4ecZj5A33nfr8LmiE7mzM2MtRjrFRzYfFvZaB8N7A1bDJ1vGIsp34QKRlI6k4dNElLtwJLruUzH5juJKdSMmuvSm4PtQSf2TThMnwdB1syFnQjcJGG1gU9Qri7aoXOsBekQ%2FTCGy9LPItGwsj%2BwbCvkjNRzJmz7mnQD2oBy9ynPM9LFIG7MILYkWddfgTZxY9I8kQCczW2usNTK6Xb1noENkpYy2Qg%2BsYTYjGS6%2BMuSvDyl0mJ1vdJ%2FmAWbuUsEaf%2BNPmQxjY9R9ho0vDWXSKA66rvUuqiGELYQkdXR6kXs%2BEspTuc2KPInsvnj3fIh07pfNLfzJa85VbvBlX2W9QKwdeVGtub8kQpcT%2FKR3qAY9mAJy2hTFU5NTgupFKBOYA%2BGI3Mc%2FjDV5aXCBjqkAdc5ZHg3AX2GErRgW6w3AzN60CgLVF%2BJFOIGMzcUxSwsyoChWLAWggv4HpobQcL%2BFtJDsXr7hzplI3OLOWbspuBv%2BTexro3866%2F7ZegOsdEbBcAW1EZMSuq9A84NwYtiD%2F6tbwBVW9zC9p1o9BLY5f4syxMWJy5sm5f8Z9WqXiTuNIruBZ0C3t28tBJe%2BhvGIXQmgE4mSguH%2FubzdnfhhcksEdKo&X-Amz-Signature=1f100f88891cc7eb08a5cbff05dae30d191f93cddc350a9896b513646b54d75b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRARA4XH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BgffNDG5gvzA0vOIReI0ygzus56PAtT3HglFi0FcpQAIhANdRGmJaLzjjTyAE%2F1rQbOQko5akQ2UwoQoWc4qUrtjiKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFl%2BZVFFVy8g6BDIIq3AN8xDHh6AA6TxO34X0%2BhSKllyPlfwx0gGPTtzfq5IldBfp4m61Vi1%2B4q999fmmmnqVPjrG2PjTGEEmh94CpJiZEQcLzA591eczALUbQHAC2WFST%2BX64AWsuhj72Cn%2FW8Vbbl9oIL468misYp1soCXZ%2BYZRfc%2BfAbsUXXzG7sIz53WqzUbOfCer%2F4xfZzyRMBrb%2Bx5q6dfobFVhMEgfYmKVP%2FOR9ctpxyoVyiww38tIAXPlRu%2F6em4ecZj5A33nfr8LmiE7mzM2MtRjrFRzYfFvZaB8N7A1bDJ1vGIsp34QKRlI6k4dNElLtwJLruUzH5juJKdSMmuvSm4PtQSf2TThMnwdB1syFnQjcJGG1gU9Qri7aoXOsBekQ%2FTCGy9LPItGwsj%2BwbCvkjNRzJmz7mnQD2oBy9ynPM9LFIG7MILYkWddfgTZxY9I8kQCczW2usNTK6Xb1noENkpYy2Qg%2BsYTYjGS6%2BMuSvDyl0mJ1vdJ%2FmAWbuUsEaf%2BNPmQxjY9R9ho0vDWXSKA66rvUuqiGELYQkdXR6kXs%2BEspTuc2KPInsvnj3fIh07pfNLfzJa85VbvBlX2W9QKwdeVGtub8kQpcT%2FKR3qAY9mAJy2hTFU5NTgupFKBOYA%2BGI3Mc%2FjDV5aXCBjqkAdc5ZHg3AX2GErRgW6w3AzN60CgLVF%2BJFOIGMzcUxSwsyoChWLAWggv4HpobQcL%2BFtJDsXr7hzplI3OLOWbspuBv%2BTexro3866%2F7ZegOsdEbBcAW1EZMSuq9A84NwYtiD%2F6tbwBVW9zC9p1o9BLY5f4syxMWJy5sm5f8Z9WqXiTuNIruBZ0C3t28tBJe%2BhvGIXQmgE4mSguH%2FubzdnfhhcksEdKo&X-Amz-Signature=0294c1ca4fce3fb445c9082affc2a3af4fbf3606c43a819c27a31d2d64d52867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRARA4XH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BgffNDG5gvzA0vOIReI0ygzus56PAtT3HglFi0FcpQAIhANdRGmJaLzjjTyAE%2F1rQbOQko5akQ2UwoQoWc4qUrtjiKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFl%2BZVFFVy8g6BDIIq3AN8xDHh6AA6TxO34X0%2BhSKllyPlfwx0gGPTtzfq5IldBfp4m61Vi1%2B4q999fmmmnqVPjrG2PjTGEEmh94CpJiZEQcLzA591eczALUbQHAC2WFST%2BX64AWsuhj72Cn%2FW8Vbbl9oIL468misYp1soCXZ%2BYZRfc%2BfAbsUXXzG7sIz53WqzUbOfCer%2F4xfZzyRMBrb%2Bx5q6dfobFVhMEgfYmKVP%2FOR9ctpxyoVyiww38tIAXPlRu%2F6em4ecZj5A33nfr8LmiE7mzM2MtRjrFRzYfFvZaB8N7A1bDJ1vGIsp34QKRlI6k4dNElLtwJLruUzH5juJKdSMmuvSm4PtQSf2TThMnwdB1syFnQjcJGG1gU9Qri7aoXOsBekQ%2FTCGy9LPItGwsj%2BwbCvkjNRzJmz7mnQD2oBy9ynPM9LFIG7MILYkWddfgTZxY9I8kQCczW2usNTK6Xb1noENkpYy2Qg%2BsYTYjGS6%2BMuSvDyl0mJ1vdJ%2FmAWbuUsEaf%2BNPmQxjY9R9ho0vDWXSKA66rvUuqiGELYQkdXR6kXs%2BEspTuc2KPInsvnj3fIh07pfNLfzJa85VbvBlX2W9QKwdeVGtub8kQpcT%2FKR3qAY9mAJy2hTFU5NTgupFKBOYA%2BGI3Mc%2FjDV5aXCBjqkAdc5ZHg3AX2GErRgW6w3AzN60CgLVF%2BJFOIGMzcUxSwsyoChWLAWggv4HpobQcL%2BFtJDsXr7hzplI3OLOWbspuBv%2BTexro3866%2F7ZegOsdEbBcAW1EZMSuq9A84NwYtiD%2F6tbwBVW9zC9p1o9BLY5f4syxMWJy5sm5f8Z9WqXiTuNIruBZ0C3t28tBJe%2BhvGIXQmgE4mSguH%2FubzdnfhhcksEdKo&X-Amz-Signature=eb7257d566212794d83390aa99746a8945d26a41ff675a2a57e8d3f037f8aa61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRARA4XH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BgffNDG5gvzA0vOIReI0ygzus56PAtT3HglFi0FcpQAIhANdRGmJaLzjjTyAE%2F1rQbOQko5akQ2UwoQoWc4qUrtjiKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFl%2BZVFFVy8g6BDIIq3AN8xDHh6AA6TxO34X0%2BhSKllyPlfwx0gGPTtzfq5IldBfp4m61Vi1%2B4q999fmmmnqVPjrG2PjTGEEmh94CpJiZEQcLzA591eczALUbQHAC2WFST%2BX64AWsuhj72Cn%2FW8Vbbl9oIL468misYp1soCXZ%2BYZRfc%2BfAbsUXXzG7sIz53WqzUbOfCer%2F4xfZzyRMBrb%2Bx5q6dfobFVhMEgfYmKVP%2FOR9ctpxyoVyiww38tIAXPlRu%2F6em4ecZj5A33nfr8LmiE7mzM2MtRjrFRzYfFvZaB8N7A1bDJ1vGIsp34QKRlI6k4dNElLtwJLruUzH5juJKdSMmuvSm4PtQSf2TThMnwdB1syFnQjcJGG1gU9Qri7aoXOsBekQ%2FTCGy9LPItGwsj%2BwbCvkjNRzJmz7mnQD2oBy9ynPM9LFIG7MILYkWddfgTZxY9I8kQCczW2usNTK6Xb1noENkpYy2Qg%2BsYTYjGS6%2BMuSvDyl0mJ1vdJ%2FmAWbuUsEaf%2BNPmQxjY9R9ho0vDWXSKA66rvUuqiGELYQkdXR6kXs%2BEspTuc2KPInsvnj3fIh07pfNLfzJa85VbvBlX2W9QKwdeVGtub8kQpcT%2FKR3qAY9mAJy2hTFU5NTgupFKBOYA%2BGI3Mc%2FjDV5aXCBjqkAdc5ZHg3AX2GErRgW6w3AzN60CgLVF%2BJFOIGMzcUxSwsyoChWLAWggv4HpobQcL%2BFtJDsXr7hzplI3OLOWbspuBv%2BTexro3866%2F7ZegOsdEbBcAW1EZMSuq9A84NwYtiD%2F6tbwBVW9zC9p1o9BLY5f4syxMWJy5sm5f8Z9WqXiTuNIruBZ0C3t28tBJe%2BhvGIXQmgE4mSguH%2FubzdnfhhcksEdKo&X-Amz-Signature=55fcefe33afcfb1cc72e039a59c8b2cf0f2e3f314e73b6c77e92727676ebc20f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRARA4XH%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BgffNDG5gvzA0vOIReI0ygzus56PAtT3HglFi0FcpQAIhANdRGmJaLzjjTyAE%2F1rQbOQko5akQ2UwoQoWc4qUrtjiKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFl%2BZVFFVy8g6BDIIq3AN8xDHh6AA6TxO34X0%2BhSKllyPlfwx0gGPTtzfq5IldBfp4m61Vi1%2B4q999fmmmnqVPjrG2PjTGEEmh94CpJiZEQcLzA591eczALUbQHAC2WFST%2BX64AWsuhj72Cn%2FW8Vbbl9oIL468misYp1soCXZ%2BYZRfc%2BfAbsUXXzG7sIz53WqzUbOfCer%2F4xfZzyRMBrb%2Bx5q6dfobFVhMEgfYmKVP%2FOR9ctpxyoVyiww38tIAXPlRu%2F6em4ecZj5A33nfr8LmiE7mzM2MtRjrFRzYfFvZaB8N7A1bDJ1vGIsp34QKRlI6k4dNElLtwJLruUzH5juJKdSMmuvSm4PtQSf2TThMnwdB1syFnQjcJGG1gU9Qri7aoXOsBekQ%2FTCGy9LPItGwsj%2BwbCvkjNRzJmz7mnQD2oBy9ynPM9LFIG7MILYkWddfgTZxY9I8kQCczW2usNTK6Xb1noENkpYy2Qg%2BsYTYjGS6%2BMuSvDyl0mJ1vdJ%2FmAWbuUsEaf%2BNPmQxjY9R9ho0vDWXSKA66rvUuqiGELYQkdXR6kXs%2BEspTuc2KPInsvnj3fIh07pfNLfzJa85VbvBlX2W9QKwdeVGtub8kQpcT%2FKR3qAY9mAJy2hTFU5NTgupFKBOYA%2BGI3Mc%2FjDV5aXCBjqkAdc5ZHg3AX2GErRgW6w3AzN60CgLVF%2BJFOIGMzcUxSwsyoChWLAWggv4HpobQcL%2BFtJDsXr7hzplI3OLOWbspuBv%2BTexro3866%2F7ZegOsdEbBcAW1EZMSuq9A84NwYtiD%2F6tbwBVW9zC9p1o9BLY5f4syxMWJy5sm5f8Z9WqXiTuNIruBZ0C3t28tBJe%2BhvGIXQmgE4mSguH%2FubzdnfhhcksEdKo&X-Amz-Signature=3e20264212ff30b8c820478622b462931b03c1da83f80f295d50901320ac41e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
