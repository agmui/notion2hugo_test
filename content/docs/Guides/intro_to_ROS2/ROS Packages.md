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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYIQIRK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhHSKGZAlrHE8%2FvQMQy4CBTwYtfO02sTIDfWikrqNoaAiEAsDpV6ePZg82xOGm7yNj2Omr9gbmJ4kXpQGX1rbAGrYcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2B7Ahk49EDyag4hZCrcAy7dJtmkeMp%2FGlgQC7mqO3c488Js2q0tBAP7%2FiVGK0tF9mKQAISp3mrApSdrfStBeM%2F%2F0YcbIvDj%2Fcz1yOrEk7bJ6MYjkJDa5FQXDv96OARcn1P7FknzzDQfudb%2F28m39%2BbYgny8CZ1f54uYThiicLfYf2mLXdzjeR8u07w9wZIZT9ilEyQIn94g7QpUhfdmQsx3qTDIQjysRJvSVP4qg662BnPcjQhg%2BdWkdfaW97L5P%2FtwzD%2BlCa3UvqvFDK%2FeZeBXp2K0EKUl0Bh%2BaKhLlDPnJlpK53fOekFDxT2RPG96sC6o4bNfFuoI4q31Y7yk2o2eqV3yY6mtrK19o5nrUSVGOEI2gcy9oiWGxVSGvYdlVMlwHV8xrp5RGf8HaDiAKnM6PvqvPRn3%2FMZQDJqecXHwuph%2BZImhn4jE2ZhxPxxp9WOMpVq6AzHRIlCEpbmD1zfiyqCYk%2FtxUDZ4T%2FIXyYPOG9XUPt4A5eMhDMKAb74UM3NWUQanb2rONpdOOjaGMSomN7TOBpXsjHtySWBwnc7pV30lFLWmecClf7L%2BxgVKk4lLOD3pBXdwtQ6Z0wmpFCQ2ngODUji6VagjqK8UQh0mjF29UjKbN6uPRyzeVsTHH92AaY5Gyoq6DpGrMM6Ho70GOqUBSZvUXOAcjRPGsyVhcdpxGUJYSL37z%2FhxyZQSWT767EWMB8ogAneQ8FF7jTxmAAbGgAVN4g5D43ypFZXJ2jODiYud1FhA1H8ay5ya4NVSU1PcARTff16M35NX7SeAiRAeSKjEgP12mVsEXt4Qy1d4vrUEml04ByLvw%2Fg1WK6eJvQR98aAMqbn5pequoj7XttacC0Xi0717pao11P45ZoUIZqYMk4K&X-Amz-Signature=1f5f1fa87d4e84eb7d5fc0ac67c59aa0b420e56c2efe890003ba061f4675d45c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYIQIRK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhHSKGZAlrHE8%2FvQMQy4CBTwYtfO02sTIDfWikrqNoaAiEAsDpV6ePZg82xOGm7yNj2Omr9gbmJ4kXpQGX1rbAGrYcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2B7Ahk49EDyag4hZCrcAy7dJtmkeMp%2FGlgQC7mqO3c488Js2q0tBAP7%2FiVGK0tF9mKQAISp3mrApSdrfStBeM%2F%2F0YcbIvDj%2Fcz1yOrEk7bJ6MYjkJDa5FQXDv96OARcn1P7FknzzDQfudb%2F28m39%2BbYgny8CZ1f54uYThiicLfYf2mLXdzjeR8u07w9wZIZT9ilEyQIn94g7QpUhfdmQsx3qTDIQjysRJvSVP4qg662BnPcjQhg%2BdWkdfaW97L5P%2FtwzD%2BlCa3UvqvFDK%2FeZeBXp2K0EKUl0Bh%2BaKhLlDPnJlpK53fOekFDxT2RPG96sC6o4bNfFuoI4q31Y7yk2o2eqV3yY6mtrK19o5nrUSVGOEI2gcy9oiWGxVSGvYdlVMlwHV8xrp5RGf8HaDiAKnM6PvqvPRn3%2FMZQDJqecXHwuph%2BZImhn4jE2ZhxPxxp9WOMpVq6AzHRIlCEpbmD1zfiyqCYk%2FtxUDZ4T%2FIXyYPOG9XUPt4A5eMhDMKAb74UM3NWUQanb2rONpdOOjaGMSomN7TOBpXsjHtySWBwnc7pV30lFLWmecClf7L%2BxgVKk4lLOD3pBXdwtQ6Z0wmpFCQ2ngODUji6VagjqK8UQh0mjF29UjKbN6uPRyzeVsTHH92AaY5Gyoq6DpGrMM6Ho70GOqUBSZvUXOAcjRPGsyVhcdpxGUJYSL37z%2FhxyZQSWT767EWMB8ogAneQ8FF7jTxmAAbGgAVN4g5D43ypFZXJ2jODiYud1FhA1H8ay5ya4NVSU1PcARTff16M35NX7SeAiRAeSKjEgP12mVsEXt4Qy1d4vrUEml04ByLvw%2Fg1WK6eJvQR98aAMqbn5pequoj7XttacC0Xi0717pao11P45ZoUIZqYMk4K&X-Amz-Signature=04b9c4f9d530a1f3d1b11346227dfb4e73f94726571da741324802235018854c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYIQIRK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhHSKGZAlrHE8%2FvQMQy4CBTwYtfO02sTIDfWikrqNoaAiEAsDpV6ePZg82xOGm7yNj2Omr9gbmJ4kXpQGX1rbAGrYcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2B7Ahk49EDyag4hZCrcAy7dJtmkeMp%2FGlgQC7mqO3c488Js2q0tBAP7%2FiVGK0tF9mKQAISp3mrApSdrfStBeM%2F%2F0YcbIvDj%2Fcz1yOrEk7bJ6MYjkJDa5FQXDv96OARcn1P7FknzzDQfudb%2F28m39%2BbYgny8CZ1f54uYThiicLfYf2mLXdzjeR8u07w9wZIZT9ilEyQIn94g7QpUhfdmQsx3qTDIQjysRJvSVP4qg662BnPcjQhg%2BdWkdfaW97L5P%2FtwzD%2BlCa3UvqvFDK%2FeZeBXp2K0EKUl0Bh%2BaKhLlDPnJlpK53fOekFDxT2RPG96sC6o4bNfFuoI4q31Y7yk2o2eqV3yY6mtrK19o5nrUSVGOEI2gcy9oiWGxVSGvYdlVMlwHV8xrp5RGf8HaDiAKnM6PvqvPRn3%2FMZQDJqecXHwuph%2BZImhn4jE2ZhxPxxp9WOMpVq6AzHRIlCEpbmD1zfiyqCYk%2FtxUDZ4T%2FIXyYPOG9XUPt4A5eMhDMKAb74UM3NWUQanb2rONpdOOjaGMSomN7TOBpXsjHtySWBwnc7pV30lFLWmecClf7L%2BxgVKk4lLOD3pBXdwtQ6Z0wmpFCQ2ngODUji6VagjqK8UQh0mjF29UjKbN6uPRyzeVsTHH92AaY5Gyoq6DpGrMM6Ho70GOqUBSZvUXOAcjRPGsyVhcdpxGUJYSL37z%2FhxyZQSWT767EWMB8ogAneQ8FF7jTxmAAbGgAVN4g5D43ypFZXJ2jODiYud1FhA1H8ay5ya4NVSU1PcARTff16M35NX7SeAiRAeSKjEgP12mVsEXt4Qy1d4vrUEml04ByLvw%2Fg1WK6eJvQR98aAMqbn5pequoj7XttacC0Xi0717pao11P45ZoUIZqYMk4K&X-Amz-Signature=bd133b95fab818d5a1488495cf757668017920e202714ddad7e40972b58d82cb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYIQIRK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhHSKGZAlrHE8%2FvQMQy4CBTwYtfO02sTIDfWikrqNoaAiEAsDpV6ePZg82xOGm7yNj2Omr9gbmJ4kXpQGX1rbAGrYcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2B7Ahk49EDyag4hZCrcAy7dJtmkeMp%2FGlgQC7mqO3c488Js2q0tBAP7%2FiVGK0tF9mKQAISp3mrApSdrfStBeM%2F%2F0YcbIvDj%2Fcz1yOrEk7bJ6MYjkJDa5FQXDv96OARcn1P7FknzzDQfudb%2F28m39%2BbYgny8CZ1f54uYThiicLfYf2mLXdzjeR8u07w9wZIZT9ilEyQIn94g7QpUhfdmQsx3qTDIQjysRJvSVP4qg662BnPcjQhg%2BdWkdfaW97L5P%2FtwzD%2BlCa3UvqvFDK%2FeZeBXp2K0EKUl0Bh%2BaKhLlDPnJlpK53fOekFDxT2RPG96sC6o4bNfFuoI4q31Y7yk2o2eqV3yY6mtrK19o5nrUSVGOEI2gcy9oiWGxVSGvYdlVMlwHV8xrp5RGf8HaDiAKnM6PvqvPRn3%2FMZQDJqecXHwuph%2BZImhn4jE2ZhxPxxp9WOMpVq6AzHRIlCEpbmD1zfiyqCYk%2FtxUDZ4T%2FIXyYPOG9XUPt4A5eMhDMKAb74UM3NWUQanb2rONpdOOjaGMSomN7TOBpXsjHtySWBwnc7pV30lFLWmecClf7L%2BxgVKk4lLOD3pBXdwtQ6Z0wmpFCQ2ngODUji6VagjqK8UQh0mjF29UjKbN6uPRyzeVsTHH92AaY5Gyoq6DpGrMM6Ho70GOqUBSZvUXOAcjRPGsyVhcdpxGUJYSL37z%2FhxyZQSWT767EWMB8ogAneQ8FF7jTxmAAbGgAVN4g5D43ypFZXJ2jODiYud1FhA1H8ay5ya4NVSU1PcARTff16M35NX7SeAiRAeSKjEgP12mVsEXt4Qy1d4vrUEml04ByLvw%2Fg1WK6eJvQR98aAMqbn5pequoj7XttacC0Xi0717pao11P45ZoUIZqYMk4K&X-Amz-Signature=649c6b906c95d4507d2b93a21277599034dcd2ffbd59725442201c9ab4265e52&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYIQIRK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhHSKGZAlrHE8%2FvQMQy4CBTwYtfO02sTIDfWikrqNoaAiEAsDpV6ePZg82xOGm7yNj2Omr9gbmJ4kXpQGX1rbAGrYcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2B7Ahk49EDyag4hZCrcAy7dJtmkeMp%2FGlgQC7mqO3c488Js2q0tBAP7%2FiVGK0tF9mKQAISp3mrApSdrfStBeM%2F%2F0YcbIvDj%2Fcz1yOrEk7bJ6MYjkJDa5FQXDv96OARcn1P7FknzzDQfudb%2F28m39%2BbYgny8CZ1f54uYThiicLfYf2mLXdzjeR8u07w9wZIZT9ilEyQIn94g7QpUhfdmQsx3qTDIQjysRJvSVP4qg662BnPcjQhg%2BdWkdfaW97L5P%2FtwzD%2BlCa3UvqvFDK%2FeZeBXp2K0EKUl0Bh%2BaKhLlDPnJlpK53fOekFDxT2RPG96sC6o4bNfFuoI4q31Y7yk2o2eqV3yY6mtrK19o5nrUSVGOEI2gcy9oiWGxVSGvYdlVMlwHV8xrp5RGf8HaDiAKnM6PvqvPRn3%2FMZQDJqecXHwuph%2BZImhn4jE2ZhxPxxp9WOMpVq6AzHRIlCEpbmD1zfiyqCYk%2FtxUDZ4T%2FIXyYPOG9XUPt4A5eMhDMKAb74UM3NWUQanb2rONpdOOjaGMSomN7TOBpXsjHtySWBwnc7pV30lFLWmecClf7L%2BxgVKk4lLOD3pBXdwtQ6Z0wmpFCQ2ngODUji6VagjqK8UQh0mjF29UjKbN6uPRyzeVsTHH92AaY5Gyoq6DpGrMM6Ho70GOqUBSZvUXOAcjRPGsyVhcdpxGUJYSL37z%2FhxyZQSWT767EWMB8ogAneQ8FF7jTxmAAbGgAVN4g5D43ypFZXJ2jODiYud1FhA1H8ay5ya4NVSU1PcARTff16M35NX7SeAiRAeSKjEgP12mVsEXt4Qy1d4vrUEml04ByLvw%2Fg1WK6eJvQR98aAMqbn5pequoj7XttacC0Xi0717pao11P45ZoUIZqYMk4K&X-Amz-Signature=783b5019a87a0e9a9f135a73f3451e534f2d49f6332e52148714ac224419509e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYIQIRK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhHSKGZAlrHE8%2FvQMQy4CBTwYtfO02sTIDfWikrqNoaAiEAsDpV6ePZg82xOGm7yNj2Omr9gbmJ4kXpQGX1rbAGrYcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2B7Ahk49EDyag4hZCrcAy7dJtmkeMp%2FGlgQC7mqO3c488Js2q0tBAP7%2FiVGK0tF9mKQAISp3mrApSdrfStBeM%2F%2F0YcbIvDj%2Fcz1yOrEk7bJ6MYjkJDa5FQXDv96OARcn1P7FknzzDQfudb%2F28m39%2BbYgny8CZ1f54uYThiicLfYf2mLXdzjeR8u07w9wZIZT9ilEyQIn94g7QpUhfdmQsx3qTDIQjysRJvSVP4qg662BnPcjQhg%2BdWkdfaW97L5P%2FtwzD%2BlCa3UvqvFDK%2FeZeBXp2K0EKUl0Bh%2BaKhLlDPnJlpK53fOekFDxT2RPG96sC6o4bNfFuoI4q31Y7yk2o2eqV3yY6mtrK19o5nrUSVGOEI2gcy9oiWGxVSGvYdlVMlwHV8xrp5RGf8HaDiAKnM6PvqvPRn3%2FMZQDJqecXHwuph%2BZImhn4jE2ZhxPxxp9WOMpVq6AzHRIlCEpbmD1zfiyqCYk%2FtxUDZ4T%2FIXyYPOG9XUPt4A5eMhDMKAb74UM3NWUQanb2rONpdOOjaGMSomN7TOBpXsjHtySWBwnc7pV30lFLWmecClf7L%2BxgVKk4lLOD3pBXdwtQ6Z0wmpFCQ2ngODUji6VagjqK8UQh0mjF29UjKbN6uPRyzeVsTHH92AaY5Gyoq6DpGrMM6Ho70GOqUBSZvUXOAcjRPGsyVhcdpxGUJYSL37z%2FhxyZQSWT767EWMB8ogAneQ8FF7jTxmAAbGgAVN4g5D43ypFZXJ2jODiYud1FhA1H8ay5ya4NVSU1PcARTff16M35NX7SeAiRAeSKjEgP12mVsEXt4Qy1d4vrUEml04ByLvw%2Fg1WK6eJvQR98aAMqbn5pequoj7XttacC0Xi0717pao11P45ZoUIZqYMk4K&X-Amz-Signature=26fedb1b6bd6358a7531e3d17dd0938ebc2aec0947c3b788180041a61a540fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEYIQIRK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhHSKGZAlrHE8%2FvQMQy4CBTwYtfO02sTIDfWikrqNoaAiEAsDpV6ePZg82xOGm7yNj2Omr9gbmJ4kXpQGX1rbAGrYcqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2B7Ahk49EDyag4hZCrcAy7dJtmkeMp%2FGlgQC7mqO3c488Js2q0tBAP7%2FiVGK0tF9mKQAISp3mrApSdrfStBeM%2F%2F0YcbIvDj%2Fcz1yOrEk7bJ6MYjkJDa5FQXDv96OARcn1P7FknzzDQfudb%2F28m39%2BbYgny8CZ1f54uYThiicLfYf2mLXdzjeR8u07w9wZIZT9ilEyQIn94g7QpUhfdmQsx3qTDIQjysRJvSVP4qg662BnPcjQhg%2BdWkdfaW97L5P%2FtwzD%2BlCa3UvqvFDK%2FeZeBXp2K0EKUl0Bh%2BaKhLlDPnJlpK53fOekFDxT2RPG96sC6o4bNfFuoI4q31Y7yk2o2eqV3yY6mtrK19o5nrUSVGOEI2gcy9oiWGxVSGvYdlVMlwHV8xrp5RGf8HaDiAKnM6PvqvPRn3%2FMZQDJqecXHwuph%2BZImhn4jE2ZhxPxxp9WOMpVq6AzHRIlCEpbmD1zfiyqCYk%2FtxUDZ4T%2FIXyYPOG9XUPt4A5eMhDMKAb74UM3NWUQanb2rONpdOOjaGMSomN7TOBpXsjHtySWBwnc7pV30lFLWmecClf7L%2BxgVKk4lLOD3pBXdwtQ6Z0wmpFCQ2ngODUji6VagjqK8UQh0mjF29UjKbN6uPRyzeVsTHH92AaY5Gyoq6DpGrMM6Ho70GOqUBSZvUXOAcjRPGsyVhcdpxGUJYSL37z%2FhxyZQSWT767EWMB8ogAneQ8FF7jTxmAAbGgAVN4g5D43ypFZXJ2jODiYud1FhA1H8ay5ya4NVSU1PcARTff16M35NX7SeAiRAeSKjEgP12mVsEXt4Qy1d4vrUEml04ByLvw%2Fg1WK6eJvQR98aAMqbn5pequoj7XttacC0Xi0717pao11P45ZoUIZqYMk4K&X-Amz-Signature=8af7a0b6d2a51a62c3db7dccaa8209115d1ce0a2f542c0c378b11f788a1d1027&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
