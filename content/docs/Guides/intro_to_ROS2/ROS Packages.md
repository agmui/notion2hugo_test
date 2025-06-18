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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LD2OM2E%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC72cPcfsGqhPnA8OD8y9l6SFwXrN%2BZ%2BR7dFvG0Vp7CvAIhAN6MnFl6bapTZxrnZPNICFxAIxiNkHohF0pO37b89q%2BSKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCP0kiQ3us3FqqNlEq3ANIlB5xlh0Ns7gWOuWCqlTdz6Cr7cV37VdPiTFUTT%2BH51WAcvBBXwWIT%2B7LfhrYrSsX5ZxMF5p7FSN%2BhG51CDqloa10EzmCRg8OIB%2FRN7YN11mUrh%2BsAht%2FTKnqZWwj8zCnobUsP10XPOR9s9usGco8ODugA8%2FWHwbAvhB0%2BRL6hyMra7QpA3puysd%2B8N%2BUfgjzpwCFUes5DLjjxzPhxcoTUbGMnbCgTcZxta3OJS8JFF5ra3vBPCDKEAHPeaF3f85oKyNbZAtwJW5oIv9d2rmM5MZWZVppFKPN1lCn8F3ayHhuVIuNzd9W28SuHQNg%2FPbyF%2FJVvfvEKkS%2BpwTn0oleuNU76wjYcDM4821oDpJVLAA0yz%2BUAgy3p4k9rwGdJPc4%2B%2FchsqayCpRXJF2JX6i1Xmfi1Jb22Il7qV9yOEe8m9Q%2F5EOBAchW0AZo%2BvlgFcYnZ%2BtTUs%2BlrOzggEgDABE7k5t6zk1Ktni4zJEQ47wwPjbmb6nIO33xKZcwJj8aY1x1j71kF6IKDafWPwhqTtpCJtE%2FP3Yxqs41karTEbcLSqdHkBw8qrBS3282NK7uUOrc8iHvgfFahzxn85yL8yebJwApxmJMjiSMy9boBeEyOvXS44QMLBClUGTo6zD7tsrCBjqkAfist0vEiShVRi3CPs6t7FRFMIqCtcamDnhSYr5l%2BT4YWxsWnysLzMwNKEFgcRRVSfvTLdCDiIJCqBUQfizmi7zG27D%2BvI9guYVvap%2FFCqf8JnVWZObI4oPDiz9uWshELbZYAh9akjxd2Ih0yHVu1S1vDqBu7%2BCjHo62ojzmJVP%2BIoHQEfphwvO4bZWY%2BpyeH%2Bt8YIPqFxDnGoOXLoQcyY8PlEiT&X-Amz-Signature=de7203d1f831d1cbe5f9deb957b83207b130a6bedc3707ba7e327c9a4bea2ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LD2OM2E%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC72cPcfsGqhPnA8OD8y9l6SFwXrN%2BZ%2BR7dFvG0Vp7CvAIhAN6MnFl6bapTZxrnZPNICFxAIxiNkHohF0pO37b89q%2BSKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCP0kiQ3us3FqqNlEq3ANIlB5xlh0Ns7gWOuWCqlTdz6Cr7cV37VdPiTFUTT%2BH51WAcvBBXwWIT%2B7LfhrYrSsX5ZxMF5p7FSN%2BhG51CDqloa10EzmCRg8OIB%2FRN7YN11mUrh%2BsAht%2FTKnqZWwj8zCnobUsP10XPOR9s9usGco8ODugA8%2FWHwbAvhB0%2BRL6hyMra7QpA3puysd%2B8N%2BUfgjzpwCFUes5DLjjxzPhxcoTUbGMnbCgTcZxta3OJS8JFF5ra3vBPCDKEAHPeaF3f85oKyNbZAtwJW5oIv9d2rmM5MZWZVppFKPN1lCn8F3ayHhuVIuNzd9W28SuHQNg%2FPbyF%2FJVvfvEKkS%2BpwTn0oleuNU76wjYcDM4821oDpJVLAA0yz%2BUAgy3p4k9rwGdJPc4%2B%2FchsqayCpRXJF2JX6i1Xmfi1Jb22Il7qV9yOEe8m9Q%2F5EOBAchW0AZo%2BvlgFcYnZ%2BtTUs%2BlrOzggEgDABE7k5t6zk1Ktni4zJEQ47wwPjbmb6nIO33xKZcwJj8aY1x1j71kF6IKDafWPwhqTtpCJtE%2FP3Yxqs41karTEbcLSqdHkBw8qrBS3282NK7uUOrc8iHvgfFahzxn85yL8yebJwApxmJMjiSMy9boBeEyOvXS44QMLBClUGTo6zD7tsrCBjqkAfist0vEiShVRi3CPs6t7FRFMIqCtcamDnhSYr5l%2BT4YWxsWnysLzMwNKEFgcRRVSfvTLdCDiIJCqBUQfizmi7zG27D%2BvI9guYVvap%2FFCqf8JnVWZObI4oPDiz9uWshELbZYAh9akjxd2Ih0yHVu1S1vDqBu7%2BCjHo62ojzmJVP%2BIoHQEfphwvO4bZWY%2BpyeH%2Bt8YIPqFxDnGoOXLoQcyY8PlEiT&X-Amz-Signature=04b3f051056f27e8bcea2f2b73b20c25ecf6402a275e7457ad6f246720db203f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LD2OM2E%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC72cPcfsGqhPnA8OD8y9l6SFwXrN%2BZ%2BR7dFvG0Vp7CvAIhAN6MnFl6bapTZxrnZPNICFxAIxiNkHohF0pO37b89q%2BSKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCP0kiQ3us3FqqNlEq3ANIlB5xlh0Ns7gWOuWCqlTdz6Cr7cV37VdPiTFUTT%2BH51WAcvBBXwWIT%2B7LfhrYrSsX5ZxMF5p7FSN%2BhG51CDqloa10EzmCRg8OIB%2FRN7YN11mUrh%2BsAht%2FTKnqZWwj8zCnobUsP10XPOR9s9usGco8ODugA8%2FWHwbAvhB0%2BRL6hyMra7QpA3puysd%2B8N%2BUfgjzpwCFUes5DLjjxzPhxcoTUbGMnbCgTcZxta3OJS8JFF5ra3vBPCDKEAHPeaF3f85oKyNbZAtwJW5oIv9d2rmM5MZWZVppFKPN1lCn8F3ayHhuVIuNzd9W28SuHQNg%2FPbyF%2FJVvfvEKkS%2BpwTn0oleuNU76wjYcDM4821oDpJVLAA0yz%2BUAgy3p4k9rwGdJPc4%2B%2FchsqayCpRXJF2JX6i1Xmfi1Jb22Il7qV9yOEe8m9Q%2F5EOBAchW0AZo%2BvlgFcYnZ%2BtTUs%2BlrOzggEgDABE7k5t6zk1Ktni4zJEQ47wwPjbmb6nIO33xKZcwJj8aY1x1j71kF6IKDafWPwhqTtpCJtE%2FP3Yxqs41karTEbcLSqdHkBw8qrBS3282NK7uUOrc8iHvgfFahzxn85yL8yebJwApxmJMjiSMy9boBeEyOvXS44QMLBClUGTo6zD7tsrCBjqkAfist0vEiShVRi3CPs6t7FRFMIqCtcamDnhSYr5l%2BT4YWxsWnysLzMwNKEFgcRRVSfvTLdCDiIJCqBUQfizmi7zG27D%2BvI9guYVvap%2FFCqf8JnVWZObI4oPDiz9uWshELbZYAh9akjxd2Ih0yHVu1S1vDqBu7%2BCjHo62ojzmJVP%2BIoHQEfphwvO4bZWY%2BpyeH%2Bt8YIPqFxDnGoOXLoQcyY8PlEiT&X-Amz-Signature=ef6d1d0f4746bf04dbe8e2cda9404e3d612c6a816132cc9fc4fc502550e48209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LD2OM2E%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC72cPcfsGqhPnA8OD8y9l6SFwXrN%2BZ%2BR7dFvG0Vp7CvAIhAN6MnFl6bapTZxrnZPNICFxAIxiNkHohF0pO37b89q%2BSKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCP0kiQ3us3FqqNlEq3ANIlB5xlh0Ns7gWOuWCqlTdz6Cr7cV37VdPiTFUTT%2BH51WAcvBBXwWIT%2B7LfhrYrSsX5ZxMF5p7FSN%2BhG51CDqloa10EzmCRg8OIB%2FRN7YN11mUrh%2BsAht%2FTKnqZWwj8zCnobUsP10XPOR9s9usGco8ODugA8%2FWHwbAvhB0%2BRL6hyMra7QpA3puysd%2B8N%2BUfgjzpwCFUes5DLjjxzPhxcoTUbGMnbCgTcZxta3OJS8JFF5ra3vBPCDKEAHPeaF3f85oKyNbZAtwJW5oIv9d2rmM5MZWZVppFKPN1lCn8F3ayHhuVIuNzd9W28SuHQNg%2FPbyF%2FJVvfvEKkS%2BpwTn0oleuNU76wjYcDM4821oDpJVLAA0yz%2BUAgy3p4k9rwGdJPc4%2B%2FchsqayCpRXJF2JX6i1Xmfi1Jb22Il7qV9yOEe8m9Q%2F5EOBAchW0AZo%2BvlgFcYnZ%2BtTUs%2BlrOzggEgDABE7k5t6zk1Ktni4zJEQ47wwPjbmb6nIO33xKZcwJj8aY1x1j71kF6IKDafWPwhqTtpCJtE%2FP3Yxqs41karTEbcLSqdHkBw8qrBS3282NK7uUOrc8iHvgfFahzxn85yL8yebJwApxmJMjiSMy9boBeEyOvXS44QMLBClUGTo6zD7tsrCBjqkAfist0vEiShVRi3CPs6t7FRFMIqCtcamDnhSYr5l%2BT4YWxsWnysLzMwNKEFgcRRVSfvTLdCDiIJCqBUQfizmi7zG27D%2BvI9guYVvap%2FFCqf8JnVWZObI4oPDiz9uWshELbZYAh9akjxd2Ih0yHVu1S1vDqBu7%2BCjHo62ojzmJVP%2BIoHQEfphwvO4bZWY%2BpyeH%2Bt8YIPqFxDnGoOXLoQcyY8PlEiT&X-Amz-Signature=3e84d6be9ff4fb749240c446196bd50d1cdbf5a11b068e1e84ceb61d79a0e00a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LD2OM2E%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC72cPcfsGqhPnA8OD8y9l6SFwXrN%2BZ%2BR7dFvG0Vp7CvAIhAN6MnFl6bapTZxrnZPNICFxAIxiNkHohF0pO37b89q%2BSKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCP0kiQ3us3FqqNlEq3ANIlB5xlh0Ns7gWOuWCqlTdz6Cr7cV37VdPiTFUTT%2BH51WAcvBBXwWIT%2B7LfhrYrSsX5ZxMF5p7FSN%2BhG51CDqloa10EzmCRg8OIB%2FRN7YN11mUrh%2BsAht%2FTKnqZWwj8zCnobUsP10XPOR9s9usGco8ODugA8%2FWHwbAvhB0%2BRL6hyMra7QpA3puysd%2B8N%2BUfgjzpwCFUes5DLjjxzPhxcoTUbGMnbCgTcZxta3OJS8JFF5ra3vBPCDKEAHPeaF3f85oKyNbZAtwJW5oIv9d2rmM5MZWZVppFKPN1lCn8F3ayHhuVIuNzd9W28SuHQNg%2FPbyF%2FJVvfvEKkS%2BpwTn0oleuNU76wjYcDM4821oDpJVLAA0yz%2BUAgy3p4k9rwGdJPc4%2B%2FchsqayCpRXJF2JX6i1Xmfi1Jb22Il7qV9yOEe8m9Q%2F5EOBAchW0AZo%2BvlgFcYnZ%2BtTUs%2BlrOzggEgDABE7k5t6zk1Ktni4zJEQ47wwPjbmb6nIO33xKZcwJj8aY1x1j71kF6IKDafWPwhqTtpCJtE%2FP3Yxqs41karTEbcLSqdHkBw8qrBS3282NK7uUOrc8iHvgfFahzxn85yL8yebJwApxmJMjiSMy9boBeEyOvXS44QMLBClUGTo6zD7tsrCBjqkAfist0vEiShVRi3CPs6t7FRFMIqCtcamDnhSYr5l%2BT4YWxsWnysLzMwNKEFgcRRVSfvTLdCDiIJCqBUQfizmi7zG27D%2BvI9guYVvap%2FFCqf8JnVWZObI4oPDiz9uWshELbZYAh9akjxd2Ih0yHVu1S1vDqBu7%2BCjHo62ojzmJVP%2BIoHQEfphwvO4bZWY%2BpyeH%2Bt8YIPqFxDnGoOXLoQcyY8PlEiT&X-Amz-Signature=4a520596d164e3638b7eb68c5d0dc2368f6448bc97e9d9351e20ae4ab9735239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LD2OM2E%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC72cPcfsGqhPnA8OD8y9l6SFwXrN%2BZ%2BR7dFvG0Vp7CvAIhAN6MnFl6bapTZxrnZPNICFxAIxiNkHohF0pO37b89q%2BSKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCP0kiQ3us3FqqNlEq3ANIlB5xlh0Ns7gWOuWCqlTdz6Cr7cV37VdPiTFUTT%2BH51WAcvBBXwWIT%2B7LfhrYrSsX5ZxMF5p7FSN%2BhG51CDqloa10EzmCRg8OIB%2FRN7YN11mUrh%2BsAht%2FTKnqZWwj8zCnobUsP10XPOR9s9usGco8ODugA8%2FWHwbAvhB0%2BRL6hyMra7QpA3puysd%2B8N%2BUfgjzpwCFUes5DLjjxzPhxcoTUbGMnbCgTcZxta3OJS8JFF5ra3vBPCDKEAHPeaF3f85oKyNbZAtwJW5oIv9d2rmM5MZWZVppFKPN1lCn8F3ayHhuVIuNzd9W28SuHQNg%2FPbyF%2FJVvfvEKkS%2BpwTn0oleuNU76wjYcDM4821oDpJVLAA0yz%2BUAgy3p4k9rwGdJPc4%2B%2FchsqayCpRXJF2JX6i1Xmfi1Jb22Il7qV9yOEe8m9Q%2F5EOBAchW0AZo%2BvlgFcYnZ%2BtTUs%2BlrOzggEgDABE7k5t6zk1Ktni4zJEQ47wwPjbmb6nIO33xKZcwJj8aY1x1j71kF6IKDafWPwhqTtpCJtE%2FP3Yxqs41karTEbcLSqdHkBw8qrBS3282NK7uUOrc8iHvgfFahzxn85yL8yebJwApxmJMjiSMy9boBeEyOvXS44QMLBClUGTo6zD7tsrCBjqkAfist0vEiShVRi3CPs6t7FRFMIqCtcamDnhSYr5l%2BT4YWxsWnysLzMwNKEFgcRRVSfvTLdCDiIJCqBUQfizmi7zG27D%2BvI9guYVvap%2FFCqf8JnVWZObI4oPDiz9uWshELbZYAh9akjxd2Ih0yHVu1S1vDqBu7%2BCjHo62ojzmJVP%2BIoHQEfphwvO4bZWY%2BpyeH%2Bt8YIPqFxDnGoOXLoQcyY8PlEiT&X-Amz-Signature=2de130d5dfb6bfb0125d73dd3fa2e1ef8f40da16c7ab9ce4dcb0ca57cac65297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LD2OM2E%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC72cPcfsGqhPnA8OD8y9l6SFwXrN%2BZ%2BR7dFvG0Vp7CvAIhAN6MnFl6bapTZxrnZPNICFxAIxiNkHohF0pO37b89q%2BSKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCP0kiQ3us3FqqNlEq3ANIlB5xlh0Ns7gWOuWCqlTdz6Cr7cV37VdPiTFUTT%2BH51WAcvBBXwWIT%2B7LfhrYrSsX5ZxMF5p7FSN%2BhG51CDqloa10EzmCRg8OIB%2FRN7YN11mUrh%2BsAht%2FTKnqZWwj8zCnobUsP10XPOR9s9usGco8ODugA8%2FWHwbAvhB0%2BRL6hyMra7QpA3puysd%2B8N%2BUfgjzpwCFUes5DLjjxzPhxcoTUbGMnbCgTcZxta3OJS8JFF5ra3vBPCDKEAHPeaF3f85oKyNbZAtwJW5oIv9d2rmM5MZWZVppFKPN1lCn8F3ayHhuVIuNzd9W28SuHQNg%2FPbyF%2FJVvfvEKkS%2BpwTn0oleuNU76wjYcDM4821oDpJVLAA0yz%2BUAgy3p4k9rwGdJPc4%2B%2FchsqayCpRXJF2JX6i1Xmfi1Jb22Il7qV9yOEe8m9Q%2F5EOBAchW0AZo%2BvlgFcYnZ%2BtTUs%2BlrOzggEgDABE7k5t6zk1Ktni4zJEQ47wwPjbmb6nIO33xKZcwJj8aY1x1j71kF6IKDafWPwhqTtpCJtE%2FP3Yxqs41karTEbcLSqdHkBw8qrBS3282NK7uUOrc8iHvgfFahzxn85yL8yebJwApxmJMjiSMy9boBeEyOvXS44QMLBClUGTo6zD7tsrCBjqkAfist0vEiShVRi3CPs6t7FRFMIqCtcamDnhSYr5l%2BT4YWxsWnysLzMwNKEFgcRRVSfvTLdCDiIJCqBUQfizmi7zG27D%2BvI9guYVvap%2FFCqf8JnVWZObI4oPDiz9uWshELbZYAh9akjxd2Ih0yHVu1S1vDqBu7%2BCjHo62ojzmJVP%2BIoHQEfphwvO4bZWY%2BpyeH%2Bt8YIPqFxDnGoOXLoQcyY8PlEiT&X-Amz-Signature=27a8c44d64031c776607f741da4a50ea4222ee1a4444b251ad83da3b98ecadf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
