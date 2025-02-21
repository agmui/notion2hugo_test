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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2SMTPG2%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BxCI3kv39WdK%2Bn5tLPszur3kf74uNEKEoyen5LNruNQIhAMX7pNS7SggLe%2F1%2F3SqGyM1GIiAVase0U15T9NVsmmseKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywgtzzl6%2FQj27NYSgq3AOuZ6JE%2Fa86vVPb1bXDf0RoYlGNUasj9RPsv7P%2BlY0dF5NZ8%2FgRt3XGpuwucSx8HwPBQicEOqEroBU8nyQinY24zAt9kDiyAaTZH%2BSkOdrWRrn5jWLUN%2Bxqh7oPWDgpGbMROKjWAfl0yiSdPAgnU5aNAZVulLgHy9a8caF0UMtYMpJhLsFIj3KLp4OOA16Ppq0ARRdQzzuHIpcEJgq0%2F6BgyyJo2PP33uWMzmSocv%2B4WJL9X%2BOfCK3mEWWeur3g889574N8dQNTBd4u%2BplEQCfXxPeKddQ9QAmY8r0jFT%2FnOyzlt6ZHlmAg80837PNWFxzmjrgix%2BqAmXeArmxEA%2FvXaRhyzaGLEYhtGVv3ezzhK7SJF7k9tfto%2B98%2BODSZrb3pIFCvyMiZA1LwIyQQaLJq7GiSjGELQ5OAsxFry9u4LmqEMr38R7CoJ1rN3WSLLSrIp%2BRUfiRiUxjV99Y7gVyYBDIs44%2Beo%2BiHqRFaxH3BSjcHgctbVrencEGu9e6VoBaPHF43ewKR06bR5Zc1T0qGMQDqe5sJMw9QXXQ2ccoQLtBBlG%2BehwGLwIezuyz7umfugrSVsfpI%2BJbW43FdNXwqlEhkFL4BqaK9ywX%2BB7eah81RWGJqdn8zurC%2F6DDkyt%2B9BjqkAb47rRonSNl999d%2F8xt6RDn3QO5H%2Bv3TDD4M3LmXpLNyRBkau8b1XdadFJY5FADDG0dWiM%2B3JuZ9ZELKqKn2j9uGa3n%2Fr4OBsE9jPfz0WLO8FffwEzOcnNEFnxuSGYKnclwQ19pHpT0E%2Bg5AKJjdmJJz7sFkSGu9Hq343RfddhbTPuoAGaR9hfBG7wnma9MzEColH%2BnXt608873r0%2BBVX1CSeGV6&X-Amz-Signature=aba2728d248f19f8488451a8101aab9c59b78e334f7cad1e41a0fe4b982136f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2SMTPG2%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BxCI3kv39WdK%2Bn5tLPszur3kf74uNEKEoyen5LNruNQIhAMX7pNS7SggLe%2F1%2F3SqGyM1GIiAVase0U15T9NVsmmseKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywgtzzl6%2FQj27NYSgq3AOuZ6JE%2Fa86vVPb1bXDf0RoYlGNUasj9RPsv7P%2BlY0dF5NZ8%2FgRt3XGpuwucSx8HwPBQicEOqEroBU8nyQinY24zAt9kDiyAaTZH%2BSkOdrWRrn5jWLUN%2Bxqh7oPWDgpGbMROKjWAfl0yiSdPAgnU5aNAZVulLgHy9a8caF0UMtYMpJhLsFIj3KLp4OOA16Ppq0ARRdQzzuHIpcEJgq0%2F6BgyyJo2PP33uWMzmSocv%2B4WJL9X%2BOfCK3mEWWeur3g889574N8dQNTBd4u%2BplEQCfXxPeKddQ9QAmY8r0jFT%2FnOyzlt6ZHlmAg80837PNWFxzmjrgix%2BqAmXeArmxEA%2FvXaRhyzaGLEYhtGVv3ezzhK7SJF7k9tfto%2B98%2BODSZrb3pIFCvyMiZA1LwIyQQaLJq7GiSjGELQ5OAsxFry9u4LmqEMr38R7CoJ1rN3WSLLSrIp%2BRUfiRiUxjV99Y7gVyYBDIs44%2Beo%2BiHqRFaxH3BSjcHgctbVrencEGu9e6VoBaPHF43ewKR06bR5Zc1T0qGMQDqe5sJMw9QXXQ2ccoQLtBBlG%2BehwGLwIezuyz7umfugrSVsfpI%2BJbW43FdNXwqlEhkFL4BqaK9ywX%2BB7eah81RWGJqdn8zurC%2F6DDkyt%2B9BjqkAb47rRonSNl999d%2F8xt6RDn3QO5H%2Bv3TDD4M3LmXpLNyRBkau8b1XdadFJY5FADDG0dWiM%2B3JuZ9ZELKqKn2j9uGa3n%2Fr4OBsE9jPfz0WLO8FffwEzOcnNEFnxuSGYKnclwQ19pHpT0E%2Bg5AKJjdmJJz7sFkSGu9Hq343RfddhbTPuoAGaR9hfBG7wnma9MzEColH%2BnXt608873r0%2BBVX1CSeGV6&X-Amz-Signature=a4e06f5a392cdadfd75ea00641c2003d79656f125b5d374be7dcd79f24fe5eae&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2SMTPG2%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BxCI3kv39WdK%2Bn5tLPszur3kf74uNEKEoyen5LNruNQIhAMX7pNS7SggLe%2F1%2F3SqGyM1GIiAVase0U15T9NVsmmseKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywgtzzl6%2FQj27NYSgq3AOuZ6JE%2Fa86vVPb1bXDf0RoYlGNUasj9RPsv7P%2BlY0dF5NZ8%2FgRt3XGpuwucSx8HwPBQicEOqEroBU8nyQinY24zAt9kDiyAaTZH%2BSkOdrWRrn5jWLUN%2Bxqh7oPWDgpGbMROKjWAfl0yiSdPAgnU5aNAZVulLgHy9a8caF0UMtYMpJhLsFIj3KLp4OOA16Ppq0ARRdQzzuHIpcEJgq0%2F6BgyyJo2PP33uWMzmSocv%2B4WJL9X%2BOfCK3mEWWeur3g889574N8dQNTBd4u%2BplEQCfXxPeKddQ9QAmY8r0jFT%2FnOyzlt6ZHlmAg80837PNWFxzmjrgix%2BqAmXeArmxEA%2FvXaRhyzaGLEYhtGVv3ezzhK7SJF7k9tfto%2B98%2BODSZrb3pIFCvyMiZA1LwIyQQaLJq7GiSjGELQ5OAsxFry9u4LmqEMr38R7CoJ1rN3WSLLSrIp%2BRUfiRiUxjV99Y7gVyYBDIs44%2Beo%2BiHqRFaxH3BSjcHgctbVrencEGu9e6VoBaPHF43ewKR06bR5Zc1T0qGMQDqe5sJMw9QXXQ2ccoQLtBBlG%2BehwGLwIezuyz7umfugrSVsfpI%2BJbW43FdNXwqlEhkFL4BqaK9ywX%2BB7eah81RWGJqdn8zurC%2F6DDkyt%2B9BjqkAb47rRonSNl999d%2F8xt6RDn3QO5H%2Bv3TDD4M3LmXpLNyRBkau8b1XdadFJY5FADDG0dWiM%2B3JuZ9ZELKqKn2j9uGa3n%2Fr4OBsE9jPfz0WLO8FffwEzOcnNEFnxuSGYKnclwQ19pHpT0E%2Bg5AKJjdmJJz7sFkSGu9Hq343RfddhbTPuoAGaR9hfBG7wnma9MzEColH%2BnXt608873r0%2BBVX1CSeGV6&X-Amz-Signature=a243c1e95d41a7b30c221108a279554ec2e2f5d0cd4d20d88ad858365855fcf9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2SMTPG2%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BxCI3kv39WdK%2Bn5tLPszur3kf74uNEKEoyen5LNruNQIhAMX7pNS7SggLe%2F1%2F3SqGyM1GIiAVase0U15T9NVsmmseKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywgtzzl6%2FQj27NYSgq3AOuZ6JE%2Fa86vVPb1bXDf0RoYlGNUasj9RPsv7P%2BlY0dF5NZ8%2FgRt3XGpuwucSx8HwPBQicEOqEroBU8nyQinY24zAt9kDiyAaTZH%2BSkOdrWRrn5jWLUN%2Bxqh7oPWDgpGbMROKjWAfl0yiSdPAgnU5aNAZVulLgHy9a8caF0UMtYMpJhLsFIj3KLp4OOA16Ppq0ARRdQzzuHIpcEJgq0%2F6BgyyJo2PP33uWMzmSocv%2B4WJL9X%2BOfCK3mEWWeur3g889574N8dQNTBd4u%2BplEQCfXxPeKddQ9QAmY8r0jFT%2FnOyzlt6ZHlmAg80837PNWFxzmjrgix%2BqAmXeArmxEA%2FvXaRhyzaGLEYhtGVv3ezzhK7SJF7k9tfto%2B98%2BODSZrb3pIFCvyMiZA1LwIyQQaLJq7GiSjGELQ5OAsxFry9u4LmqEMr38R7CoJ1rN3WSLLSrIp%2BRUfiRiUxjV99Y7gVyYBDIs44%2Beo%2BiHqRFaxH3BSjcHgctbVrencEGu9e6VoBaPHF43ewKR06bR5Zc1T0qGMQDqe5sJMw9QXXQ2ccoQLtBBlG%2BehwGLwIezuyz7umfugrSVsfpI%2BJbW43FdNXwqlEhkFL4BqaK9ywX%2BB7eah81RWGJqdn8zurC%2F6DDkyt%2B9BjqkAb47rRonSNl999d%2F8xt6RDn3QO5H%2Bv3TDD4M3LmXpLNyRBkau8b1XdadFJY5FADDG0dWiM%2B3JuZ9ZELKqKn2j9uGa3n%2Fr4OBsE9jPfz0WLO8FffwEzOcnNEFnxuSGYKnclwQ19pHpT0E%2Bg5AKJjdmJJz7sFkSGu9Hq343RfddhbTPuoAGaR9hfBG7wnma9MzEColH%2BnXt608873r0%2BBVX1CSeGV6&X-Amz-Signature=e9c1da2349472c7a56245f8327a64458ae702b7b01b2417bdbb57dddb86db4e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2SMTPG2%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BxCI3kv39WdK%2Bn5tLPszur3kf74uNEKEoyen5LNruNQIhAMX7pNS7SggLe%2F1%2F3SqGyM1GIiAVase0U15T9NVsmmseKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywgtzzl6%2FQj27NYSgq3AOuZ6JE%2Fa86vVPb1bXDf0RoYlGNUasj9RPsv7P%2BlY0dF5NZ8%2FgRt3XGpuwucSx8HwPBQicEOqEroBU8nyQinY24zAt9kDiyAaTZH%2BSkOdrWRrn5jWLUN%2Bxqh7oPWDgpGbMROKjWAfl0yiSdPAgnU5aNAZVulLgHy9a8caF0UMtYMpJhLsFIj3KLp4OOA16Ppq0ARRdQzzuHIpcEJgq0%2F6BgyyJo2PP33uWMzmSocv%2B4WJL9X%2BOfCK3mEWWeur3g889574N8dQNTBd4u%2BplEQCfXxPeKddQ9QAmY8r0jFT%2FnOyzlt6ZHlmAg80837PNWFxzmjrgix%2BqAmXeArmxEA%2FvXaRhyzaGLEYhtGVv3ezzhK7SJF7k9tfto%2B98%2BODSZrb3pIFCvyMiZA1LwIyQQaLJq7GiSjGELQ5OAsxFry9u4LmqEMr38R7CoJ1rN3WSLLSrIp%2BRUfiRiUxjV99Y7gVyYBDIs44%2Beo%2BiHqRFaxH3BSjcHgctbVrencEGu9e6VoBaPHF43ewKR06bR5Zc1T0qGMQDqe5sJMw9QXXQ2ccoQLtBBlG%2BehwGLwIezuyz7umfugrSVsfpI%2BJbW43FdNXwqlEhkFL4BqaK9ywX%2BB7eah81RWGJqdn8zurC%2F6DDkyt%2B9BjqkAb47rRonSNl999d%2F8xt6RDn3QO5H%2Bv3TDD4M3LmXpLNyRBkau8b1XdadFJY5FADDG0dWiM%2B3JuZ9ZELKqKn2j9uGa3n%2Fr4OBsE9jPfz0WLO8FffwEzOcnNEFnxuSGYKnclwQ19pHpT0E%2Bg5AKJjdmJJz7sFkSGu9Hq343RfddhbTPuoAGaR9hfBG7wnma9MzEColH%2BnXt608873r0%2BBVX1CSeGV6&X-Amz-Signature=e13511a9d2708e5e6c6822f826b24990558589b27165d0b2652b97dcf180be85&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2SMTPG2%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BxCI3kv39WdK%2Bn5tLPszur3kf74uNEKEoyen5LNruNQIhAMX7pNS7SggLe%2F1%2F3SqGyM1GIiAVase0U15T9NVsmmseKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywgtzzl6%2FQj27NYSgq3AOuZ6JE%2Fa86vVPb1bXDf0RoYlGNUasj9RPsv7P%2BlY0dF5NZ8%2FgRt3XGpuwucSx8HwPBQicEOqEroBU8nyQinY24zAt9kDiyAaTZH%2BSkOdrWRrn5jWLUN%2Bxqh7oPWDgpGbMROKjWAfl0yiSdPAgnU5aNAZVulLgHy9a8caF0UMtYMpJhLsFIj3KLp4OOA16Ppq0ARRdQzzuHIpcEJgq0%2F6BgyyJo2PP33uWMzmSocv%2B4WJL9X%2BOfCK3mEWWeur3g889574N8dQNTBd4u%2BplEQCfXxPeKddQ9QAmY8r0jFT%2FnOyzlt6ZHlmAg80837PNWFxzmjrgix%2BqAmXeArmxEA%2FvXaRhyzaGLEYhtGVv3ezzhK7SJF7k9tfto%2B98%2BODSZrb3pIFCvyMiZA1LwIyQQaLJq7GiSjGELQ5OAsxFry9u4LmqEMr38R7CoJ1rN3WSLLSrIp%2BRUfiRiUxjV99Y7gVyYBDIs44%2Beo%2BiHqRFaxH3BSjcHgctbVrencEGu9e6VoBaPHF43ewKR06bR5Zc1T0qGMQDqe5sJMw9QXXQ2ccoQLtBBlG%2BehwGLwIezuyz7umfugrSVsfpI%2BJbW43FdNXwqlEhkFL4BqaK9ywX%2BB7eah81RWGJqdn8zurC%2F6DDkyt%2B9BjqkAb47rRonSNl999d%2F8xt6RDn3QO5H%2Bv3TDD4M3LmXpLNyRBkau8b1XdadFJY5FADDG0dWiM%2B3JuZ9ZELKqKn2j9uGa3n%2Fr4OBsE9jPfz0WLO8FffwEzOcnNEFnxuSGYKnclwQ19pHpT0E%2Bg5AKJjdmJJz7sFkSGu9Hq343RfddhbTPuoAGaR9hfBG7wnma9MzEColH%2BnXt608873r0%2BBVX1CSeGV6&X-Amz-Signature=3a190870aa0248616f1659d7bfe5a63c261d972e2eae02c7f0234683579cdbbc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2SMTPG2%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BxCI3kv39WdK%2Bn5tLPszur3kf74uNEKEoyen5LNruNQIhAMX7pNS7SggLe%2F1%2F3SqGyM1GIiAVase0U15T9NVsmmseKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywgtzzl6%2FQj27NYSgq3AOuZ6JE%2Fa86vVPb1bXDf0RoYlGNUasj9RPsv7P%2BlY0dF5NZ8%2FgRt3XGpuwucSx8HwPBQicEOqEroBU8nyQinY24zAt9kDiyAaTZH%2BSkOdrWRrn5jWLUN%2Bxqh7oPWDgpGbMROKjWAfl0yiSdPAgnU5aNAZVulLgHy9a8caF0UMtYMpJhLsFIj3KLp4OOA16Ppq0ARRdQzzuHIpcEJgq0%2F6BgyyJo2PP33uWMzmSocv%2B4WJL9X%2BOfCK3mEWWeur3g889574N8dQNTBd4u%2BplEQCfXxPeKddQ9QAmY8r0jFT%2FnOyzlt6ZHlmAg80837PNWFxzmjrgix%2BqAmXeArmxEA%2FvXaRhyzaGLEYhtGVv3ezzhK7SJF7k9tfto%2B98%2BODSZrb3pIFCvyMiZA1LwIyQQaLJq7GiSjGELQ5OAsxFry9u4LmqEMr38R7CoJ1rN3WSLLSrIp%2BRUfiRiUxjV99Y7gVyYBDIs44%2Beo%2BiHqRFaxH3BSjcHgctbVrencEGu9e6VoBaPHF43ewKR06bR5Zc1T0qGMQDqe5sJMw9QXXQ2ccoQLtBBlG%2BehwGLwIezuyz7umfugrSVsfpI%2BJbW43FdNXwqlEhkFL4BqaK9ywX%2BB7eah81RWGJqdn8zurC%2F6DDkyt%2B9BjqkAb47rRonSNl999d%2F8xt6RDn3QO5H%2Bv3TDD4M3LmXpLNyRBkau8b1XdadFJY5FADDG0dWiM%2B3JuZ9ZELKqKn2j9uGa3n%2Fr4OBsE9jPfz0WLO8FffwEzOcnNEFnxuSGYKnclwQ19pHpT0E%2Bg5AKJjdmJJz7sFkSGu9Hq343RfddhbTPuoAGaR9hfBG7wnma9MzEColH%2BnXt608873r0%2BBVX1CSeGV6&X-Amz-Signature=73f84528656ec391f4f742cdb8a97667e92a1e8509820a9d8a32d1d419c7c1df&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
