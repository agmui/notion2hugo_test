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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3DIRFH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU4r9uCK2Ie6kyICLfoL5OAKR2Q2GcAENbAjWgtTNn6AiEA7WDuzzTfTmBUIc9IPzYbd1UTgn%2FY4kw7erk%2Bkui1tPUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVJ9A2ETg5DAmKPwircA9WGl9wDuSk3OIsZx%2BXY%2BwFyrrbyulA7L1lrfzlYIM0K72wzBbQ7R1AkX2Dx1%2F3M7hQl7nMlslRRpGgdP61s3fv8EE3CvacA3ZSlFZ7vkIH%2FkL1ZS8sqfYXUxt08x68t5WWKLZv59S3t4%2FTc4L9MQo%2F1qfvL533K8WavavLX5qo9fJe96OFdYEh3Z7GZQkCUYu1jaOeHB5%2F7ceqtfsorGW39T9taW%2FgObQXkEsQbSr4k5phpkYdtckuzf4ffaY3hufRZNT6QA1YP7k4LxGMSQc2nLBUrK%2FkfEzEADofzt4ys6laSBx7Rz%2BuVpK%2FbPiLNBok6CMvI8pnTb4mjnCbhkj8nUsSHLlbiBa5%2BVgjqBVKY3VOrsHJt3xdWHKMNNQlfNKOAFvnJSLmJnM4%2FweHsTPcS37scriUVVPK9xyl5dpHaGk8%2B%2BhSXOsikj8PmCwIXHF1R%2BBe3bahi5ruaU4O4MEEUB56D20ZjI3tLgmDQ4cLG0gsIRScEd2wJwQ%2FszipUa8vVXcDjoeZcwlEJwPNKwJzjTnt9mpJCJw3h5tSUsq4iv5KTv2xTNEAwApWYO8fF%2FaEdUY9BBlSHSyJVE%2F6F8pDONnXl6HyEr2bQYP%2B1FE3vJP%2FGPPBK%2Fai11O4sMIPurL0GOqUBMiOgiFRYFEM9zqISuk67revvonb5Qk8yIVUa3BPfsu%2BC2LXRy7vrlTIg3FfL42%2FtI1FIKhITbDK%2Bc7izGCZ129fyxOxro4WT3c0l0H0avfJ5aJzOT30iwIaiFMUhx3xwhY%2BgBqWhGaQCmzxDe6DQ8GUdsmz4jLkIk7ug9MD34OYF%2BZL0HGqtxpUliSqS2rR5G6ZjC7xaWQ5k7mEJMS5k2625W2q0&X-Amz-Signature=fac145ebfb01cba409becdffe8482df451ce40dc7d2837ed33462a29761f6da4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3DIRFH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU4r9uCK2Ie6kyICLfoL5OAKR2Q2GcAENbAjWgtTNn6AiEA7WDuzzTfTmBUIc9IPzYbd1UTgn%2FY4kw7erk%2Bkui1tPUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVJ9A2ETg5DAmKPwircA9WGl9wDuSk3OIsZx%2BXY%2BwFyrrbyulA7L1lrfzlYIM0K72wzBbQ7R1AkX2Dx1%2F3M7hQl7nMlslRRpGgdP61s3fv8EE3CvacA3ZSlFZ7vkIH%2FkL1ZS8sqfYXUxt08x68t5WWKLZv59S3t4%2FTc4L9MQo%2F1qfvL533K8WavavLX5qo9fJe96OFdYEh3Z7GZQkCUYu1jaOeHB5%2F7ceqtfsorGW39T9taW%2FgObQXkEsQbSr4k5phpkYdtckuzf4ffaY3hufRZNT6QA1YP7k4LxGMSQc2nLBUrK%2FkfEzEADofzt4ys6laSBx7Rz%2BuVpK%2FbPiLNBok6CMvI8pnTb4mjnCbhkj8nUsSHLlbiBa5%2BVgjqBVKY3VOrsHJt3xdWHKMNNQlfNKOAFvnJSLmJnM4%2FweHsTPcS37scriUVVPK9xyl5dpHaGk8%2B%2BhSXOsikj8PmCwIXHF1R%2BBe3bahi5ruaU4O4MEEUB56D20ZjI3tLgmDQ4cLG0gsIRScEd2wJwQ%2FszipUa8vVXcDjoeZcwlEJwPNKwJzjTnt9mpJCJw3h5tSUsq4iv5KTv2xTNEAwApWYO8fF%2FaEdUY9BBlSHSyJVE%2F6F8pDONnXl6HyEr2bQYP%2B1FE3vJP%2FGPPBK%2Fai11O4sMIPurL0GOqUBMiOgiFRYFEM9zqISuk67revvonb5Qk8yIVUa3BPfsu%2BC2LXRy7vrlTIg3FfL42%2FtI1FIKhITbDK%2Bc7izGCZ129fyxOxro4WT3c0l0H0avfJ5aJzOT30iwIaiFMUhx3xwhY%2BgBqWhGaQCmzxDe6DQ8GUdsmz4jLkIk7ug9MD34OYF%2BZL0HGqtxpUliSqS2rR5G6ZjC7xaWQ5k7mEJMS5k2625W2q0&X-Amz-Signature=1f6977c86f65847e5d3f03135431cd569fcb82380efd0ff8c955255e71729d91&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3DIRFH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU4r9uCK2Ie6kyICLfoL5OAKR2Q2GcAENbAjWgtTNn6AiEA7WDuzzTfTmBUIc9IPzYbd1UTgn%2FY4kw7erk%2Bkui1tPUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVJ9A2ETg5DAmKPwircA9WGl9wDuSk3OIsZx%2BXY%2BwFyrrbyulA7L1lrfzlYIM0K72wzBbQ7R1AkX2Dx1%2F3M7hQl7nMlslRRpGgdP61s3fv8EE3CvacA3ZSlFZ7vkIH%2FkL1ZS8sqfYXUxt08x68t5WWKLZv59S3t4%2FTc4L9MQo%2F1qfvL533K8WavavLX5qo9fJe96OFdYEh3Z7GZQkCUYu1jaOeHB5%2F7ceqtfsorGW39T9taW%2FgObQXkEsQbSr4k5phpkYdtckuzf4ffaY3hufRZNT6QA1YP7k4LxGMSQc2nLBUrK%2FkfEzEADofzt4ys6laSBx7Rz%2BuVpK%2FbPiLNBok6CMvI8pnTb4mjnCbhkj8nUsSHLlbiBa5%2BVgjqBVKY3VOrsHJt3xdWHKMNNQlfNKOAFvnJSLmJnM4%2FweHsTPcS37scriUVVPK9xyl5dpHaGk8%2B%2BhSXOsikj8PmCwIXHF1R%2BBe3bahi5ruaU4O4MEEUB56D20ZjI3tLgmDQ4cLG0gsIRScEd2wJwQ%2FszipUa8vVXcDjoeZcwlEJwPNKwJzjTnt9mpJCJw3h5tSUsq4iv5KTv2xTNEAwApWYO8fF%2FaEdUY9BBlSHSyJVE%2F6F8pDONnXl6HyEr2bQYP%2B1FE3vJP%2FGPPBK%2Fai11O4sMIPurL0GOqUBMiOgiFRYFEM9zqISuk67revvonb5Qk8yIVUa3BPfsu%2BC2LXRy7vrlTIg3FfL42%2FtI1FIKhITbDK%2Bc7izGCZ129fyxOxro4WT3c0l0H0avfJ5aJzOT30iwIaiFMUhx3xwhY%2BgBqWhGaQCmzxDe6DQ8GUdsmz4jLkIk7ug9MD34OYF%2BZL0HGqtxpUliSqS2rR5G6ZjC7xaWQ5k7mEJMS5k2625W2q0&X-Amz-Signature=841b460ec03254b86e93504f3bfcf38edff20fde06f502de2b0d812baf6f1370&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3DIRFH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU4r9uCK2Ie6kyICLfoL5OAKR2Q2GcAENbAjWgtTNn6AiEA7WDuzzTfTmBUIc9IPzYbd1UTgn%2FY4kw7erk%2Bkui1tPUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVJ9A2ETg5DAmKPwircA9WGl9wDuSk3OIsZx%2BXY%2BwFyrrbyulA7L1lrfzlYIM0K72wzBbQ7R1AkX2Dx1%2F3M7hQl7nMlslRRpGgdP61s3fv8EE3CvacA3ZSlFZ7vkIH%2FkL1ZS8sqfYXUxt08x68t5WWKLZv59S3t4%2FTc4L9MQo%2F1qfvL533K8WavavLX5qo9fJe96OFdYEh3Z7GZQkCUYu1jaOeHB5%2F7ceqtfsorGW39T9taW%2FgObQXkEsQbSr4k5phpkYdtckuzf4ffaY3hufRZNT6QA1YP7k4LxGMSQc2nLBUrK%2FkfEzEADofzt4ys6laSBx7Rz%2BuVpK%2FbPiLNBok6CMvI8pnTb4mjnCbhkj8nUsSHLlbiBa5%2BVgjqBVKY3VOrsHJt3xdWHKMNNQlfNKOAFvnJSLmJnM4%2FweHsTPcS37scriUVVPK9xyl5dpHaGk8%2B%2BhSXOsikj8PmCwIXHF1R%2BBe3bahi5ruaU4O4MEEUB56D20ZjI3tLgmDQ4cLG0gsIRScEd2wJwQ%2FszipUa8vVXcDjoeZcwlEJwPNKwJzjTnt9mpJCJw3h5tSUsq4iv5KTv2xTNEAwApWYO8fF%2FaEdUY9BBlSHSyJVE%2F6F8pDONnXl6HyEr2bQYP%2B1FE3vJP%2FGPPBK%2Fai11O4sMIPurL0GOqUBMiOgiFRYFEM9zqISuk67revvonb5Qk8yIVUa3BPfsu%2BC2LXRy7vrlTIg3FfL42%2FtI1FIKhITbDK%2Bc7izGCZ129fyxOxro4WT3c0l0H0avfJ5aJzOT30iwIaiFMUhx3xwhY%2BgBqWhGaQCmzxDe6DQ8GUdsmz4jLkIk7ug9MD34OYF%2BZL0HGqtxpUliSqS2rR5G6ZjC7xaWQ5k7mEJMS5k2625W2q0&X-Amz-Signature=ef5c9f252d6c2df904eeed879e41f881dca0f337c930be6f831ed72fea7bba2a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3DIRFH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU4r9uCK2Ie6kyICLfoL5OAKR2Q2GcAENbAjWgtTNn6AiEA7WDuzzTfTmBUIc9IPzYbd1UTgn%2FY4kw7erk%2Bkui1tPUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVJ9A2ETg5DAmKPwircA9WGl9wDuSk3OIsZx%2BXY%2BwFyrrbyulA7L1lrfzlYIM0K72wzBbQ7R1AkX2Dx1%2F3M7hQl7nMlslRRpGgdP61s3fv8EE3CvacA3ZSlFZ7vkIH%2FkL1ZS8sqfYXUxt08x68t5WWKLZv59S3t4%2FTc4L9MQo%2F1qfvL533K8WavavLX5qo9fJe96OFdYEh3Z7GZQkCUYu1jaOeHB5%2F7ceqtfsorGW39T9taW%2FgObQXkEsQbSr4k5phpkYdtckuzf4ffaY3hufRZNT6QA1YP7k4LxGMSQc2nLBUrK%2FkfEzEADofzt4ys6laSBx7Rz%2BuVpK%2FbPiLNBok6CMvI8pnTb4mjnCbhkj8nUsSHLlbiBa5%2BVgjqBVKY3VOrsHJt3xdWHKMNNQlfNKOAFvnJSLmJnM4%2FweHsTPcS37scriUVVPK9xyl5dpHaGk8%2B%2BhSXOsikj8PmCwIXHF1R%2BBe3bahi5ruaU4O4MEEUB56D20ZjI3tLgmDQ4cLG0gsIRScEd2wJwQ%2FszipUa8vVXcDjoeZcwlEJwPNKwJzjTnt9mpJCJw3h5tSUsq4iv5KTv2xTNEAwApWYO8fF%2FaEdUY9BBlSHSyJVE%2F6F8pDONnXl6HyEr2bQYP%2B1FE3vJP%2FGPPBK%2Fai11O4sMIPurL0GOqUBMiOgiFRYFEM9zqISuk67revvonb5Qk8yIVUa3BPfsu%2BC2LXRy7vrlTIg3FfL42%2FtI1FIKhITbDK%2Bc7izGCZ129fyxOxro4WT3c0l0H0avfJ5aJzOT30iwIaiFMUhx3xwhY%2BgBqWhGaQCmzxDe6DQ8GUdsmz4jLkIk7ug9MD34OYF%2BZL0HGqtxpUliSqS2rR5G6ZjC7xaWQ5k7mEJMS5k2625W2q0&X-Amz-Signature=de8c3cb3596ab5bbb3a34c18c4e90b2f31f2cfe93488a82005121e0feed84cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3DIRFH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU4r9uCK2Ie6kyICLfoL5OAKR2Q2GcAENbAjWgtTNn6AiEA7WDuzzTfTmBUIc9IPzYbd1UTgn%2FY4kw7erk%2Bkui1tPUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVJ9A2ETg5DAmKPwircA9WGl9wDuSk3OIsZx%2BXY%2BwFyrrbyulA7L1lrfzlYIM0K72wzBbQ7R1AkX2Dx1%2F3M7hQl7nMlslRRpGgdP61s3fv8EE3CvacA3ZSlFZ7vkIH%2FkL1ZS8sqfYXUxt08x68t5WWKLZv59S3t4%2FTc4L9MQo%2F1qfvL533K8WavavLX5qo9fJe96OFdYEh3Z7GZQkCUYu1jaOeHB5%2F7ceqtfsorGW39T9taW%2FgObQXkEsQbSr4k5phpkYdtckuzf4ffaY3hufRZNT6QA1YP7k4LxGMSQc2nLBUrK%2FkfEzEADofzt4ys6laSBx7Rz%2BuVpK%2FbPiLNBok6CMvI8pnTb4mjnCbhkj8nUsSHLlbiBa5%2BVgjqBVKY3VOrsHJt3xdWHKMNNQlfNKOAFvnJSLmJnM4%2FweHsTPcS37scriUVVPK9xyl5dpHaGk8%2B%2BhSXOsikj8PmCwIXHF1R%2BBe3bahi5ruaU4O4MEEUB56D20ZjI3tLgmDQ4cLG0gsIRScEd2wJwQ%2FszipUa8vVXcDjoeZcwlEJwPNKwJzjTnt9mpJCJw3h5tSUsq4iv5KTv2xTNEAwApWYO8fF%2FaEdUY9BBlSHSyJVE%2F6F8pDONnXl6HyEr2bQYP%2B1FE3vJP%2FGPPBK%2Fai11O4sMIPurL0GOqUBMiOgiFRYFEM9zqISuk67revvonb5Qk8yIVUa3BPfsu%2BC2LXRy7vrlTIg3FfL42%2FtI1FIKhITbDK%2Bc7izGCZ129fyxOxro4WT3c0l0H0avfJ5aJzOT30iwIaiFMUhx3xwhY%2BgBqWhGaQCmzxDe6DQ8GUdsmz4jLkIk7ug9MD34OYF%2BZL0HGqtxpUliSqS2rR5G6ZjC7xaWQ5k7mEJMS5k2625W2q0&X-Amz-Signature=af6333e1080797a2ff5573302a0be652f38f998e467c58f6972a800789cabb54&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3DIRFH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU4r9uCK2Ie6kyICLfoL5OAKR2Q2GcAENbAjWgtTNn6AiEA7WDuzzTfTmBUIc9IPzYbd1UTgn%2FY4kw7erk%2Bkui1tPUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVJ9A2ETg5DAmKPwircA9WGl9wDuSk3OIsZx%2BXY%2BwFyrrbyulA7L1lrfzlYIM0K72wzBbQ7R1AkX2Dx1%2F3M7hQl7nMlslRRpGgdP61s3fv8EE3CvacA3ZSlFZ7vkIH%2FkL1ZS8sqfYXUxt08x68t5WWKLZv59S3t4%2FTc4L9MQo%2F1qfvL533K8WavavLX5qo9fJe96OFdYEh3Z7GZQkCUYu1jaOeHB5%2F7ceqtfsorGW39T9taW%2FgObQXkEsQbSr4k5phpkYdtckuzf4ffaY3hufRZNT6QA1YP7k4LxGMSQc2nLBUrK%2FkfEzEADofzt4ys6laSBx7Rz%2BuVpK%2FbPiLNBok6CMvI8pnTb4mjnCbhkj8nUsSHLlbiBa5%2BVgjqBVKY3VOrsHJt3xdWHKMNNQlfNKOAFvnJSLmJnM4%2FweHsTPcS37scriUVVPK9xyl5dpHaGk8%2B%2BhSXOsikj8PmCwIXHF1R%2BBe3bahi5ruaU4O4MEEUB56D20ZjI3tLgmDQ4cLG0gsIRScEd2wJwQ%2FszipUa8vVXcDjoeZcwlEJwPNKwJzjTnt9mpJCJw3h5tSUsq4iv5KTv2xTNEAwApWYO8fF%2FaEdUY9BBlSHSyJVE%2F6F8pDONnXl6HyEr2bQYP%2B1FE3vJP%2FGPPBK%2Fai11O4sMIPurL0GOqUBMiOgiFRYFEM9zqISuk67revvonb5Qk8yIVUa3BPfsu%2BC2LXRy7vrlTIg3FfL42%2FtI1FIKhITbDK%2Bc7izGCZ129fyxOxro4WT3c0l0H0avfJ5aJzOT30iwIaiFMUhx3xwhY%2BgBqWhGaQCmzxDe6DQ8GUdsmz4jLkIk7ug9MD34OYF%2BZL0HGqtxpUliSqS2rR5G6ZjC7xaWQ5k7mEJMS5k2625W2q0&X-Amz-Signature=a580142778a2ab78dc581f49e15af73312813b9cc0df5139b134a71f3ad0d419&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
