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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D2H73W%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCoyk4Nvb83k%2BdPB3EGKXrp2Ip2V2GnVM8EPhc53JIodQIgPlVm6icIk5IcbRgMrjDkycRPCeU5jNAmQ6J5lpuJUCoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMtTJpXL4%2BRezMRvircAyXH04OCnZbIMHppWP2I7otJdq4Q%2FbteSMnCcb2%2B%2BxC4E34jyekMrwqnRzURfwuBWA40VrbJgRluT5wRk8KzofTToNMXLMoPquTGOXPLmmp6Oa3dud%2Bad0Wca47uCgHECFnT4xFDdFOO8fgg7aZ9ayq%2B60KMbUMro1icmoJUxh98HT3QtusyrwyH1esmXjiDksRaT1I%2FJqCdEbWJbz%2BZw6p6ClP5eN6LqVwuCeoji1yE68lcsE4Yo9STFYIi%2BfxhsWyunzAbVhmmbCjwDLGkO%2FED%2FeVSzzfP983V38qIhPbj2AczbcEBHGA1%2FIe6RTZU5dmD9MvVUP%2FAnQT7ievRgX1lPhbIgZOe7DHZ9lYgzNM3wUfq%2Ff%2F3nycveKNUu4ERQZEWY4fRBHPtkt5ups4RRtmSKGZGIgi8S%2FVCSSJ4PIDMWXOhJUxWiil8z9ty9WN3wJiLharLU03R3LQnHT413Bi9LpHjC26GfhleK9fowNnU%2Bk7noYlqO0FU3S6tZQ99ogGpyCQUbSEkfWnqx%2BsYFgKeeU%2FdOC20gEG81V3U0PquXSfP8iisAskv6xx8NkpjHm1CWMFR2TuQ%2BCXbQ62pEqu6w6EEUgpNmoDyI5DTzh5lbrVQ50pewqUsjM%2BJMNTrwL4GOqUBtfrGdYwBXd1wSEBvknoZQvMBpaYCPv1YJshKg74hWJO3HeAPnvgqXvK8bwFtt9uOcSyy5vOPgjSrAXkX6SOh3CWgC7uTL%2FvL533wV1tb6TtlvL1AQdDEiv4FURHLaPLeiNzeSZNRO7RudnJcMoNUi7%2BAnGYSgjbt%2FOY%2B%2FbQOnXs01Ii5VEh3BeWLEgkwrRg6OsSApjQJNMREkcSSSOxqt3Z7PSdG&X-Amz-Signature=c90a6e7a9400e2ba26eaaa8c5924b2a4a1ba7ac31429a150d1db61983e26519f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D2H73W%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCoyk4Nvb83k%2BdPB3EGKXrp2Ip2V2GnVM8EPhc53JIodQIgPlVm6icIk5IcbRgMrjDkycRPCeU5jNAmQ6J5lpuJUCoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMtTJpXL4%2BRezMRvircAyXH04OCnZbIMHppWP2I7otJdq4Q%2FbteSMnCcb2%2B%2BxC4E34jyekMrwqnRzURfwuBWA40VrbJgRluT5wRk8KzofTToNMXLMoPquTGOXPLmmp6Oa3dud%2Bad0Wca47uCgHECFnT4xFDdFOO8fgg7aZ9ayq%2B60KMbUMro1icmoJUxh98HT3QtusyrwyH1esmXjiDksRaT1I%2FJqCdEbWJbz%2BZw6p6ClP5eN6LqVwuCeoji1yE68lcsE4Yo9STFYIi%2BfxhsWyunzAbVhmmbCjwDLGkO%2FED%2FeVSzzfP983V38qIhPbj2AczbcEBHGA1%2FIe6RTZU5dmD9MvVUP%2FAnQT7ievRgX1lPhbIgZOe7DHZ9lYgzNM3wUfq%2Ff%2F3nycveKNUu4ERQZEWY4fRBHPtkt5ups4RRtmSKGZGIgi8S%2FVCSSJ4PIDMWXOhJUxWiil8z9ty9WN3wJiLharLU03R3LQnHT413Bi9LpHjC26GfhleK9fowNnU%2Bk7noYlqO0FU3S6tZQ99ogGpyCQUbSEkfWnqx%2BsYFgKeeU%2FdOC20gEG81V3U0PquXSfP8iisAskv6xx8NkpjHm1CWMFR2TuQ%2BCXbQ62pEqu6w6EEUgpNmoDyI5DTzh5lbrVQ50pewqUsjM%2BJMNTrwL4GOqUBtfrGdYwBXd1wSEBvknoZQvMBpaYCPv1YJshKg74hWJO3HeAPnvgqXvK8bwFtt9uOcSyy5vOPgjSrAXkX6SOh3CWgC7uTL%2FvL533wV1tb6TtlvL1AQdDEiv4FURHLaPLeiNzeSZNRO7RudnJcMoNUi7%2BAnGYSgjbt%2FOY%2B%2FbQOnXs01Ii5VEh3BeWLEgkwrRg6OsSApjQJNMREkcSSSOxqt3Z7PSdG&X-Amz-Signature=b6c8e7a2e85dbc3b989e51e4a1e1734265ac61e33654654825dd219f946d197c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D2H73W%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCoyk4Nvb83k%2BdPB3EGKXrp2Ip2V2GnVM8EPhc53JIodQIgPlVm6icIk5IcbRgMrjDkycRPCeU5jNAmQ6J5lpuJUCoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMtTJpXL4%2BRezMRvircAyXH04OCnZbIMHppWP2I7otJdq4Q%2FbteSMnCcb2%2B%2BxC4E34jyekMrwqnRzURfwuBWA40VrbJgRluT5wRk8KzofTToNMXLMoPquTGOXPLmmp6Oa3dud%2Bad0Wca47uCgHECFnT4xFDdFOO8fgg7aZ9ayq%2B60KMbUMro1icmoJUxh98HT3QtusyrwyH1esmXjiDksRaT1I%2FJqCdEbWJbz%2BZw6p6ClP5eN6LqVwuCeoji1yE68lcsE4Yo9STFYIi%2BfxhsWyunzAbVhmmbCjwDLGkO%2FED%2FeVSzzfP983V38qIhPbj2AczbcEBHGA1%2FIe6RTZU5dmD9MvVUP%2FAnQT7ievRgX1lPhbIgZOe7DHZ9lYgzNM3wUfq%2Ff%2F3nycveKNUu4ERQZEWY4fRBHPtkt5ups4RRtmSKGZGIgi8S%2FVCSSJ4PIDMWXOhJUxWiil8z9ty9WN3wJiLharLU03R3LQnHT413Bi9LpHjC26GfhleK9fowNnU%2Bk7noYlqO0FU3S6tZQ99ogGpyCQUbSEkfWnqx%2BsYFgKeeU%2FdOC20gEG81V3U0PquXSfP8iisAskv6xx8NkpjHm1CWMFR2TuQ%2BCXbQ62pEqu6w6EEUgpNmoDyI5DTzh5lbrVQ50pewqUsjM%2BJMNTrwL4GOqUBtfrGdYwBXd1wSEBvknoZQvMBpaYCPv1YJshKg74hWJO3HeAPnvgqXvK8bwFtt9uOcSyy5vOPgjSrAXkX6SOh3CWgC7uTL%2FvL533wV1tb6TtlvL1AQdDEiv4FURHLaPLeiNzeSZNRO7RudnJcMoNUi7%2BAnGYSgjbt%2FOY%2B%2FbQOnXs01Ii5VEh3BeWLEgkwrRg6OsSApjQJNMREkcSSSOxqt3Z7PSdG&X-Amz-Signature=956c2489e0f8b42a2759fd96cfe2f6d56d732c8d7d2568b4ddeda214d0aa7b32&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D2H73W%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCoyk4Nvb83k%2BdPB3EGKXrp2Ip2V2GnVM8EPhc53JIodQIgPlVm6icIk5IcbRgMrjDkycRPCeU5jNAmQ6J5lpuJUCoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMtTJpXL4%2BRezMRvircAyXH04OCnZbIMHppWP2I7otJdq4Q%2FbteSMnCcb2%2B%2BxC4E34jyekMrwqnRzURfwuBWA40VrbJgRluT5wRk8KzofTToNMXLMoPquTGOXPLmmp6Oa3dud%2Bad0Wca47uCgHECFnT4xFDdFOO8fgg7aZ9ayq%2B60KMbUMro1icmoJUxh98HT3QtusyrwyH1esmXjiDksRaT1I%2FJqCdEbWJbz%2BZw6p6ClP5eN6LqVwuCeoji1yE68lcsE4Yo9STFYIi%2BfxhsWyunzAbVhmmbCjwDLGkO%2FED%2FeVSzzfP983V38qIhPbj2AczbcEBHGA1%2FIe6RTZU5dmD9MvVUP%2FAnQT7ievRgX1lPhbIgZOe7DHZ9lYgzNM3wUfq%2Ff%2F3nycveKNUu4ERQZEWY4fRBHPtkt5ups4RRtmSKGZGIgi8S%2FVCSSJ4PIDMWXOhJUxWiil8z9ty9WN3wJiLharLU03R3LQnHT413Bi9LpHjC26GfhleK9fowNnU%2Bk7noYlqO0FU3S6tZQ99ogGpyCQUbSEkfWnqx%2BsYFgKeeU%2FdOC20gEG81V3U0PquXSfP8iisAskv6xx8NkpjHm1CWMFR2TuQ%2BCXbQ62pEqu6w6EEUgpNmoDyI5DTzh5lbrVQ50pewqUsjM%2BJMNTrwL4GOqUBtfrGdYwBXd1wSEBvknoZQvMBpaYCPv1YJshKg74hWJO3HeAPnvgqXvK8bwFtt9uOcSyy5vOPgjSrAXkX6SOh3CWgC7uTL%2FvL533wV1tb6TtlvL1AQdDEiv4FURHLaPLeiNzeSZNRO7RudnJcMoNUi7%2BAnGYSgjbt%2FOY%2B%2FbQOnXs01Ii5VEh3BeWLEgkwrRg6OsSApjQJNMREkcSSSOxqt3Z7PSdG&X-Amz-Signature=712e84d558194ad1a581bc5de9d24aaabb20dfb3a56790ae5dab0b83c8600a40&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D2H73W%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCoyk4Nvb83k%2BdPB3EGKXrp2Ip2V2GnVM8EPhc53JIodQIgPlVm6icIk5IcbRgMrjDkycRPCeU5jNAmQ6J5lpuJUCoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMtTJpXL4%2BRezMRvircAyXH04OCnZbIMHppWP2I7otJdq4Q%2FbteSMnCcb2%2B%2BxC4E34jyekMrwqnRzURfwuBWA40VrbJgRluT5wRk8KzofTToNMXLMoPquTGOXPLmmp6Oa3dud%2Bad0Wca47uCgHECFnT4xFDdFOO8fgg7aZ9ayq%2B60KMbUMro1icmoJUxh98HT3QtusyrwyH1esmXjiDksRaT1I%2FJqCdEbWJbz%2BZw6p6ClP5eN6LqVwuCeoji1yE68lcsE4Yo9STFYIi%2BfxhsWyunzAbVhmmbCjwDLGkO%2FED%2FeVSzzfP983V38qIhPbj2AczbcEBHGA1%2FIe6RTZU5dmD9MvVUP%2FAnQT7ievRgX1lPhbIgZOe7DHZ9lYgzNM3wUfq%2Ff%2F3nycveKNUu4ERQZEWY4fRBHPtkt5ups4RRtmSKGZGIgi8S%2FVCSSJ4PIDMWXOhJUxWiil8z9ty9WN3wJiLharLU03R3LQnHT413Bi9LpHjC26GfhleK9fowNnU%2Bk7noYlqO0FU3S6tZQ99ogGpyCQUbSEkfWnqx%2BsYFgKeeU%2FdOC20gEG81V3U0PquXSfP8iisAskv6xx8NkpjHm1CWMFR2TuQ%2BCXbQ62pEqu6w6EEUgpNmoDyI5DTzh5lbrVQ50pewqUsjM%2BJMNTrwL4GOqUBtfrGdYwBXd1wSEBvknoZQvMBpaYCPv1YJshKg74hWJO3HeAPnvgqXvK8bwFtt9uOcSyy5vOPgjSrAXkX6SOh3CWgC7uTL%2FvL533wV1tb6TtlvL1AQdDEiv4FURHLaPLeiNzeSZNRO7RudnJcMoNUi7%2BAnGYSgjbt%2FOY%2B%2FbQOnXs01Ii5VEh3BeWLEgkwrRg6OsSApjQJNMREkcSSSOxqt3Z7PSdG&X-Amz-Signature=433451ad4282ea0005833a97b82d27ef1440e5c20b7e57c9e3cf789c8e2697b3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D2H73W%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCoyk4Nvb83k%2BdPB3EGKXrp2Ip2V2GnVM8EPhc53JIodQIgPlVm6icIk5IcbRgMrjDkycRPCeU5jNAmQ6J5lpuJUCoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMtTJpXL4%2BRezMRvircAyXH04OCnZbIMHppWP2I7otJdq4Q%2FbteSMnCcb2%2B%2BxC4E34jyekMrwqnRzURfwuBWA40VrbJgRluT5wRk8KzofTToNMXLMoPquTGOXPLmmp6Oa3dud%2Bad0Wca47uCgHECFnT4xFDdFOO8fgg7aZ9ayq%2B60KMbUMro1icmoJUxh98HT3QtusyrwyH1esmXjiDksRaT1I%2FJqCdEbWJbz%2BZw6p6ClP5eN6LqVwuCeoji1yE68lcsE4Yo9STFYIi%2BfxhsWyunzAbVhmmbCjwDLGkO%2FED%2FeVSzzfP983V38qIhPbj2AczbcEBHGA1%2FIe6RTZU5dmD9MvVUP%2FAnQT7ievRgX1lPhbIgZOe7DHZ9lYgzNM3wUfq%2Ff%2F3nycveKNUu4ERQZEWY4fRBHPtkt5ups4RRtmSKGZGIgi8S%2FVCSSJ4PIDMWXOhJUxWiil8z9ty9WN3wJiLharLU03R3LQnHT413Bi9LpHjC26GfhleK9fowNnU%2Bk7noYlqO0FU3S6tZQ99ogGpyCQUbSEkfWnqx%2BsYFgKeeU%2FdOC20gEG81V3U0PquXSfP8iisAskv6xx8NkpjHm1CWMFR2TuQ%2BCXbQ62pEqu6w6EEUgpNmoDyI5DTzh5lbrVQ50pewqUsjM%2BJMNTrwL4GOqUBtfrGdYwBXd1wSEBvknoZQvMBpaYCPv1YJshKg74hWJO3HeAPnvgqXvK8bwFtt9uOcSyy5vOPgjSrAXkX6SOh3CWgC7uTL%2FvL533wV1tb6TtlvL1AQdDEiv4FURHLaPLeiNzeSZNRO7RudnJcMoNUi7%2BAnGYSgjbt%2FOY%2B%2FbQOnXs01Ii5VEh3BeWLEgkwrRg6OsSApjQJNMREkcSSSOxqt3Z7PSdG&X-Amz-Signature=8c583b4fd06f8e457ba5cb06fc961de8845bc46a529b4b054b18152b14862c1f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6D2H73W%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCoyk4Nvb83k%2BdPB3EGKXrp2Ip2V2GnVM8EPhc53JIodQIgPlVm6icIk5IcbRgMrjDkycRPCeU5jNAmQ6J5lpuJUCoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMtTJpXL4%2BRezMRvircAyXH04OCnZbIMHppWP2I7otJdq4Q%2FbteSMnCcb2%2B%2BxC4E34jyekMrwqnRzURfwuBWA40VrbJgRluT5wRk8KzofTToNMXLMoPquTGOXPLmmp6Oa3dud%2Bad0Wca47uCgHECFnT4xFDdFOO8fgg7aZ9ayq%2B60KMbUMro1icmoJUxh98HT3QtusyrwyH1esmXjiDksRaT1I%2FJqCdEbWJbz%2BZw6p6ClP5eN6LqVwuCeoji1yE68lcsE4Yo9STFYIi%2BfxhsWyunzAbVhmmbCjwDLGkO%2FED%2FeVSzzfP983V38qIhPbj2AczbcEBHGA1%2FIe6RTZU5dmD9MvVUP%2FAnQT7ievRgX1lPhbIgZOe7DHZ9lYgzNM3wUfq%2Ff%2F3nycveKNUu4ERQZEWY4fRBHPtkt5ups4RRtmSKGZGIgi8S%2FVCSSJ4PIDMWXOhJUxWiil8z9ty9WN3wJiLharLU03R3LQnHT413Bi9LpHjC26GfhleK9fowNnU%2Bk7noYlqO0FU3S6tZQ99ogGpyCQUbSEkfWnqx%2BsYFgKeeU%2FdOC20gEG81V3U0PquXSfP8iisAskv6xx8NkpjHm1CWMFR2TuQ%2BCXbQ62pEqu6w6EEUgpNmoDyI5DTzh5lbrVQ50pewqUsjM%2BJMNTrwL4GOqUBtfrGdYwBXd1wSEBvknoZQvMBpaYCPv1YJshKg74hWJO3HeAPnvgqXvK8bwFtt9uOcSyy5vOPgjSrAXkX6SOh3CWgC7uTL%2FvL533wV1tb6TtlvL1AQdDEiv4FURHLaPLeiNzeSZNRO7RudnJcMoNUi7%2BAnGYSgjbt%2FOY%2B%2FbQOnXs01Ii5VEh3BeWLEgkwrRg6OsSApjQJNMREkcSSSOxqt3Z7PSdG&X-Amz-Signature=7ae1139682b41e13d21aa7ba887f59c80ccce44b9315414ee06b9a9d71875b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
