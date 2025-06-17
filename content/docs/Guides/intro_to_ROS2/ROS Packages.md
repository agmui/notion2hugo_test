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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSC55HY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHfxI7ZWyQKJ4BE2x4QH%2FgKYL9pJvbpxAeoZyg7lS1DwIhAMTG2rLaYytYevEad85jie7Y3LWJVuhLpdBVcn%2BhYwn3Kv8DCHUQABoMNjM3NDIzMTgzODA1IgwhtPa%2FK2cKQ5Iu7jMq3AN7k9R3VM8wBaahHGd%2Fk9Afbn%2BZGuQUc4DDbZ6BVoX8Xb0YaVZsEtQxRw0wL7W4DHm3ljosE7Ekf9pmCbVfzaNYB%2B460Mq3DwapClt8G%2F0zXk%2BwNDBU3OlItyQ1mu2EfmpXi%2FOZOvv4jE3zijKSDwL5Ve33pBNmb3vvYW9gVTVxLQt69P1Cb0LxsioAeAWtD%2FOTjgrNt38Nh1N84ZsruPn0c2xx40Rf2bFFGkD9PfjuxBrXIRU4YTdmJh7Itn1yp5r%2Bvc3x0McbRpLYkChTsZH4mC%2Fvzvd5%2BGfFjlToAtJT20XYsBPQdbX9lSLGaZJ4Qz%2F5hqS9lYB7chEVNP0w6ODJcP1ldIFQP1qH4C4DiYGbdpLvHYIHLfylhsk%2Fy4cImZ0KMrAX3UT0XYX6HMP6PBt0L9vZJ%2BQd0OYwExq6OmmjB7j4398lcgXEDVLyVJNBFdxhxpOIrx1p%2B1oehPKMCDbG5kceG93wf6pXxgdSrwgP%2FsynAj6TkZfB%2Bt0HkOzhk5blixLY4SlRHrXr1ktP5zXSvUo3IOrpxtZCUkb7HQBahF7HvWp1OYEk8R7%2FPAcMVwN6kM%2BqYdkFg5gpS3FmLuRVMy%2FRFssUZFYofZqqbIt45hlzVN0%2FFi7NsvrEWTCPp8XCBjqkAdEhX0c1paCYel0Q81eCMllglTpsqVynDWpotdQOQb6gAX7pnVzp0SATRAmPPKGriBI%2FpzEpAsj%2FSk7TuDLXEuI3vpPcXbm4qnXtsjS%2FzVOwGWZ9iTpEYDWC8qVkLMNqPqFzRDicvJVYL%2BrcdQF2QQdDDaixLhuQym4eF1sIalWXjwG%2F5jmhpiHmPG19t8BeVmAjkdsl%2BZkV%2FRUp5IFQGUT7V4Pi&X-Amz-Signature=667fe5e29083497393a3a6e003f8fbbe2268c22334c7b1d0ba4764b4b3ede7b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSC55HY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHfxI7ZWyQKJ4BE2x4QH%2FgKYL9pJvbpxAeoZyg7lS1DwIhAMTG2rLaYytYevEad85jie7Y3LWJVuhLpdBVcn%2BhYwn3Kv8DCHUQABoMNjM3NDIzMTgzODA1IgwhtPa%2FK2cKQ5Iu7jMq3AN7k9R3VM8wBaahHGd%2Fk9Afbn%2BZGuQUc4DDbZ6BVoX8Xb0YaVZsEtQxRw0wL7W4DHm3ljosE7Ekf9pmCbVfzaNYB%2B460Mq3DwapClt8G%2F0zXk%2BwNDBU3OlItyQ1mu2EfmpXi%2FOZOvv4jE3zijKSDwL5Ve33pBNmb3vvYW9gVTVxLQt69P1Cb0LxsioAeAWtD%2FOTjgrNt38Nh1N84ZsruPn0c2xx40Rf2bFFGkD9PfjuxBrXIRU4YTdmJh7Itn1yp5r%2Bvc3x0McbRpLYkChTsZH4mC%2Fvzvd5%2BGfFjlToAtJT20XYsBPQdbX9lSLGaZJ4Qz%2F5hqS9lYB7chEVNP0w6ODJcP1ldIFQP1qH4C4DiYGbdpLvHYIHLfylhsk%2Fy4cImZ0KMrAX3UT0XYX6HMP6PBt0L9vZJ%2BQd0OYwExq6OmmjB7j4398lcgXEDVLyVJNBFdxhxpOIrx1p%2B1oehPKMCDbG5kceG93wf6pXxgdSrwgP%2FsynAj6TkZfB%2Bt0HkOzhk5blixLY4SlRHrXr1ktP5zXSvUo3IOrpxtZCUkb7HQBahF7HvWp1OYEk8R7%2FPAcMVwN6kM%2BqYdkFg5gpS3FmLuRVMy%2FRFssUZFYofZqqbIt45hlzVN0%2FFi7NsvrEWTCPp8XCBjqkAdEhX0c1paCYel0Q81eCMllglTpsqVynDWpotdQOQb6gAX7pnVzp0SATRAmPPKGriBI%2FpzEpAsj%2FSk7TuDLXEuI3vpPcXbm4qnXtsjS%2FzVOwGWZ9iTpEYDWC8qVkLMNqPqFzRDicvJVYL%2BrcdQF2QQdDDaixLhuQym4eF1sIalWXjwG%2F5jmhpiHmPG19t8BeVmAjkdsl%2BZkV%2FRUp5IFQGUT7V4Pi&X-Amz-Signature=371b1941b42322ef2cb480de967b8856c6d99dda61f2921609e4526b5ea517bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSC55HY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHfxI7ZWyQKJ4BE2x4QH%2FgKYL9pJvbpxAeoZyg7lS1DwIhAMTG2rLaYytYevEad85jie7Y3LWJVuhLpdBVcn%2BhYwn3Kv8DCHUQABoMNjM3NDIzMTgzODA1IgwhtPa%2FK2cKQ5Iu7jMq3AN7k9R3VM8wBaahHGd%2Fk9Afbn%2BZGuQUc4DDbZ6BVoX8Xb0YaVZsEtQxRw0wL7W4DHm3ljosE7Ekf9pmCbVfzaNYB%2B460Mq3DwapClt8G%2F0zXk%2BwNDBU3OlItyQ1mu2EfmpXi%2FOZOvv4jE3zijKSDwL5Ve33pBNmb3vvYW9gVTVxLQt69P1Cb0LxsioAeAWtD%2FOTjgrNt38Nh1N84ZsruPn0c2xx40Rf2bFFGkD9PfjuxBrXIRU4YTdmJh7Itn1yp5r%2Bvc3x0McbRpLYkChTsZH4mC%2Fvzvd5%2BGfFjlToAtJT20XYsBPQdbX9lSLGaZJ4Qz%2F5hqS9lYB7chEVNP0w6ODJcP1ldIFQP1qH4C4DiYGbdpLvHYIHLfylhsk%2Fy4cImZ0KMrAX3UT0XYX6HMP6PBt0L9vZJ%2BQd0OYwExq6OmmjB7j4398lcgXEDVLyVJNBFdxhxpOIrx1p%2B1oehPKMCDbG5kceG93wf6pXxgdSrwgP%2FsynAj6TkZfB%2Bt0HkOzhk5blixLY4SlRHrXr1ktP5zXSvUo3IOrpxtZCUkb7HQBahF7HvWp1OYEk8R7%2FPAcMVwN6kM%2BqYdkFg5gpS3FmLuRVMy%2FRFssUZFYofZqqbIt45hlzVN0%2FFi7NsvrEWTCPp8XCBjqkAdEhX0c1paCYel0Q81eCMllglTpsqVynDWpotdQOQb6gAX7pnVzp0SATRAmPPKGriBI%2FpzEpAsj%2FSk7TuDLXEuI3vpPcXbm4qnXtsjS%2FzVOwGWZ9iTpEYDWC8qVkLMNqPqFzRDicvJVYL%2BrcdQF2QQdDDaixLhuQym4eF1sIalWXjwG%2F5jmhpiHmPG19t8BeVmAjkdsl%2BZkV%2FRUp5IFQGUT7V4Pi&X-Amz-Signature=ce10d1caa651d34675c0c11a71043f6a5b8f2b6c361121030c65862b32bbed88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSC55HY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHfxI7ZWyQKJ4BE2x4QH%2FgKYL9pJvbpxAeoZyg7lS1DwIhAMTG2rLaYytYevEad85jie7Y3LWJVuhLpdBVcn%2BhYwn3Kv8DCHUQABoMNjM3NDIzMTgzODA1IgwhtPa%2FK2cKQ5Iu7jMq3AN7k9R3VM8wBaahHGd%2Fk9Afbn%2BZGuQUc4DDbZ6BVoX8Xb0YaVZsEtQxRw0wL7W4DHm3ljosE7Ekf9pmCbVfzaNYB%2B460Mq3DwapClt8G%2F0zXk%2BwNDBU3OlItyQ1mu2EfmpXi%2FOZOvv4jE3zijKSDwL5Ve33pBNmb3vvYW9gVTVxLQt69P1Cb0LxsioAeAWtD%2FOTjgrNt38Nh1N84ZsruPn0c2xx40Rf2bFFGkD9PfjuxBrXIRU4YTdmJh7Itn1yp5r%2Bvc3x0McbRpLYkChTsZH4mC%2Fvzvd5%2BGfFjlToAtJT20XYsBPQdbX9lSLGaZJ4Qz%2F5hqS9lYB7chEVNP0w6ODJcP1ldIFQP1qH4C4DiYGbdpLvHYIHLfylhsk%2Fy4cImZ0KMrAX3UT0XYX6HMP6PBt0L9vZJ%2BQd0OYwExq6OmmjB7j4398lcgXEDVLyVJNBFdxhxpOIrx1p%2B1oehPKMCDbG5kceG93wf6pXxgdSrwgP%2FsynAj6TkZfB%2Bt0HkOzhk5blixLY4SlRHrXr1ktP5zXSvUo3IOrpxtZCUkb7HQBahF7HvWp1OYEk8R7%2FPAcMVwN6kM%2BqYdkFg5gpS3FmLuRVMy%2FRFssUZFYofZqqbIt45hlzVN0%2FFi7NsvrEWTCPp8XCBjqkAdEhX0c1paCYel0Q81eCMllglTpsqVynDWpotdQOQb6gAX7pnVzp0SATRAmPPKGriBI%2FpzEpAsj%2FSk7TuDLXEuI3vpPcXbm4qnXtsjS%2FzVOwGWZ9iTpEYDWC8qVkLMNqPqFzRDicvJVYL%2BrcdQF2QQdDDaixLhuQym4eF1sIalWXjwG%2F5jmhpiHmPG19t8BeVmAjkdsl%2BZkV%2FRUp5IFQGUT7V4Pi&X-Amz-Signature=818ce6e64c4f2d742504c7f1568d961a3231e5e287a74d6ed9d4afe8e5a6e9ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSC55HY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHfxI7ZWyQKJ4BE2x4QH%2FgKYL9pJvbpxAeoZyg7lS1DwIhAMTG2rLaYytYevEad85jie7Y3LWJVuhLpdBVcn%2BhYwn3Kv8DCHUQABoMNjM3NDIzMTgzODA1IgwhtPa%2FK2cKQ5Iu7jMq3AN7k9R3VM8wBaahHGd%2Fk9Afbn%2BZGuQUc4DDbZ6BVoX8Xb0YaVZsEtQxRw0wL7W4DHm3ljosE7Ekf9pmCbVfzaNYB%2B460Mq3DwapClt8G%2F0zXk%2BwNDBU3OlItyQ1mu2EfmpXi%2FOZOvv4jE3zijKSDwL5Ve33pBNmb3vvYW9gVTVxLQt69P1Cb0LxsioAeAWtD%2FOTjgrNt38Nh1N84ZsruPn0c2xx40Rf2bFFGkD9PfjuxBrXIRU4YTdmJh7Itn1yp5r%2Bvc3x0McbRpLYkChTsZH4mC%2Fvzvd5%2BGfFjlToAtJT20XYsBPQdbX9lSLGaZJ4Qz%2F5hqS9lYB7chEVNP0w6ODJcP1ldIFQP1qH4C4DiYGbdpLvHYIHLfylhsk%2Fy4cImZ0KMrAX3UT0XYX6HMP6PBt0L9vZJ%2BQd0OYwExq6OmmjB7j4398lcgXEDVLyVJNBFdxhxpOIrx1p%2B1oehPKMCDbG5kceG93wf6pXxgdSrwgP%2FsynAj6TkZfB%2Bt0HkOzhk5blixLY4SlRHrXr1ktP5zXSvUo3IOrpxtZCUkb7HQBahF7HvWp1OYEk8R7%2FPAcMVwN6kM%2BqYdkFg5gpS3FmLuRVMy%2FRFssUZFYofZqqbIt45hlzVN0%2FFi7NsvrEWTCPp8XCBjqkAdEhX0c1paCYel0Q81eCMllglTpsqVynDWpotdQOQb6gAX7pnVzp0SATRAmPPKGriBI%2FpzEpAsj%2FSk7TuDLXEuI3vpPcXbm4qnXtsjS%2FzVOwGWZ9iTpEYDWC8qVkLMNqPqFzRDicvJVYL%2BrcdQF2QQdDDaixLhuQym4eF1sIalWXjwG%2F5jmhpiHmPG19t8BeVmAjkdsl%2BZkV%2FRUp5IFQGUT7V4Pi&X-Amz-Signature=dfd6794a765eafb9c5896ab7c05c855b12d5d83e0e5ec38a6f539ebd48a3c397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSC55HY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHfxI7ZWyQKJ4BE2x4QH%2FgKYL9pJvbpxAeoZyg7lS1DwIhAMTG2rLaYytYevEad85jie7Y3LWJVuhLpdBVcn%2BhYwn3Kv8DCHUQABoMNjM3NDIzMTgzODA1IgwhtPa%2FK2cKQ5Iu7jMq3AN7k9R3VM8wBaahHGd%2Fk9Afbn%2BZGuQUc4DDbZ6BVoX8Xb0YaVZsEtQxRw0wL7W4DHm3ljosE7Ekf9pmCbVfzaNYB%2B460Mq3DwapClt8G%2F0zXk%2BwNDBU3OlItyQ1mu2EfmpXi%2FOZOvv4jE3zijKSDwL5Ve33pBNmb3vvYW9gVTVxLQt69P1Cb0LxsioAeAWtD%2FOTjgrNt38Nh1N84ZsruPn0c2xx40Rf2bFFGkD9PfjuxBrXIRU4YTdmJh7Itn1yp5r%2Bvc3x0McbRpLYkChTsZH4mC%2Fvzvd5%2BGfFjlToAtJT20XYsBPQdbX9lSLGaZJ4Qz%2F5hqS9lYB7chEVNP0w6ODJcP1ldIFQP1qH4C4DiYGbdpLvHYIHLfylhsk%2Fy4cImZ0KMrAX3UT0XYX6HMP6PBt0L9vZJ%2BQd0OYwExq6OmmjB7j4398lcgXEDVLyVJNBFdxhxpOIrx1p%2B1oehPKMCDbG5kceG93wf6pXxgdSrwgP%2FsynAj6TkZfB%2Bt0HkOzhk5blixLY4SlRHrXr1ktP5zXSvUo3IOrpxtZCUkb7HQBahF7HvWp1OYEk8R7%2FPAcMVwN6kM%2BqYdkFg5gpS3FmLuRVMy%2FRFssUZFYofZqqbIt45hlzVN0%2FFi7NsvrEWTCPp8XCBjqkAdEhX0c1paCYel0Q81eCMllglTpsqVynDWpotdQOQb6gAX7pnVzp0SATRAmPPKGriBI%2FpzEpAsj%2FSk7TuDLXEuI3vpPcXbm4qnXtsjS%2FzVOwGWZ9iTpEYDWC8qVkLMNqPqFzRDicvJVYL%2BrcdQF2QQdDDaixLhuQym4eF1sIalWXjwG%2F5jmhpiHmPG19t8BeVmAjkdsl%2BZkV%2FRUp5IFQGUT7V4Pi&X-Amz-Signature=e0844ce9b7e4107d160140eab998cb50421fd3095dbb7b7892874712bcfe202c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSC55HY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHfxI7ZWyQKJ4BE2x4QH%2FgKYL9pJvbpxAeoZyg7lS1DwIhAMTG2rLaYytYevEad85jie7Y3LWJVuhLpdBVcn%2BhYwn3Kv8DCHUQABoMNjM3NDIzMTgzODA1IgwhtPa%2FK2cKQ5Iu7jMq3AN7k9R3VM8wBaahHGd%2Fk9Afbn%2BZGuQUc4DDbZ6BVoX8Xb0YaVZsEtQxRw0wL7W4DHm3ljosE7Ekf9pmCbVfzaNYB%2B460Mq3DwapClt8G%2F0zXk%2BwNDBU3OlItyQ1mu2EfmpXi%2FOZOvv4jE3zijKSDwL5Ve33pBNmb3vvYW9gVTVxLQt69P1Cb0LxsioAeAWtD%2FOTjgrNt38Nh1N84ZsruPn0c2xx40Rf2bFFGkD9PfjuxBrXIRU4YTdmJh7Itn1yp5r%2Bvc3x0McbRpLYkChTsZH4mC%2Fvzvd5%2BGfFjlToAtJT20XYsBPQdbX9lSLGaZJ4Qz%2F5hqS9lYB7chEVNP0w6ODJcP1ldIFQP1qH4C4DiYGbdpLvHYIHLfylhsk%2Fy4cImZ0KMrAX3UT0XYX6HMP6PBt0L9vZJ%2BQd0OYwExq6OmmjB7j4398lcgXEDVLyVJNBFdxhxpOIrx1p%2B1oehPKMCDbG5kceG93wf6pXxgdSrwgP%2FsynAj6TkZfB%2Bt0HkOzhk5blixLY4SlRHrXr1ktP5zXSvUo3IOrpxtZCUkb7HQBahF7HvWp1OYEk8R7%2FPAcMVwN6kM%2BqYdkFg5gpS3FmLuRVMy%2FRFssUZFYofZqqbIt45hlzVN0%2FFi7NsvrEWTCPp8XCBjqkAdEhX0c1paCYel0Q81eCMllglTpsqVynDWpotdQOQb6gAX7pnVzp0SATRAmPPKGriBI%2FpzEpAsj%2FSk7TuDLXEuI3vpPcXbm4qnXtsjS%2FzVOwGWZ9iTpEYDWC8qVkLMNqPqFzRDicvJVYL%2BrcdQF2QQdDDaixLhuQym4eF1sIalWXjwG%2F5jmhpiHmPG19t8BeVmAjkdsl%2BZkV%2FRUp5IFQGUT7V4Pi&X-Amz-Signature=352caaa09aa250588680c92b426533bdd06e4144ad7c63f7ce5bc6cce1e8c258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
