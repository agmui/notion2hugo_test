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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637MD55XE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDTzKEJLNP34j6ggLd6PRS2Awo4bCj4av%2BvtTKAldpRfAIhANXvS1XWWZkvkqn9t4EEhQdFvQoh60%2FNESWGxNwTgVr1KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9ScgVSc7RQPC9nAYq3AMmsU3g4JqDPS94Omv239DgmGX8V6eAOotDk%2FWMrUJL0WDya1Dt1lSgHRpeFAGZ0v1E1AN8DAxkDeocZDhFV2seguBmQX%2FDi7xhkTSOhlcp4PDoUqQexhi16IapdINc79UpimXPhLVlqEbW1Soh%2FW37KKfhqrHpuccqZ8Zd1hSk1xVgW8KthXD0tNEmDyNfYlfhDWfaMLKRVAZgfFmKMC0BkEAeSHO9waQbwgIe7qDWUn5%2Fu7IBW7d%2BIRB2uABXIKVYiSYaQIrAqJYDiP0EFK2EwwLLVMh5Qm92ViboNx28oeMYnwmBEo5cl%2BmeBcjMLGCxXabYiybWkGL8UGxqipvFFOKsECG2BBRtKJpZs9tyZayp9sJFc6ukeVy8%2FNYdM%2BB5jp1pHRYet83fBPZEa7KnQxe%2FK5l7gQjc3yTqDueTmmP55EUJZ4TgnASt726Bt3dObchdboQohf6VzkwBbwC90eRF8iDETPD1zJPv%2BfSlSbSWrfBpfjk7PN6iWtsY6WDxtrzrjLxZ4Iz3xXaBz6ctrq8s01jfK85gBZzoHvjDgcL7dFlva92ZpFlaGB5M6L60TTmz34nUMe3Tk3HUUTGAYAIJp%2FdHW6kCpO7ZZwggl5NXcCnK38Is%2F4rnhTDe3tfABjqkAQkOPAZO0HJE263c2latFWfRSCZiijHtcfJ43uCJzgVPI62ngfyO40qrQrmDR8hyCpYlip58CDg5maNHi6CLOvvyqpNBv4fhSUdZkkalQasuqS17MMMrC5aPH0SiBSOWqV8JOjfic65CcrpE9n26%2FVQh93qvrHTxcLIgs0XrOIkc1b%2FOWtJCwcAzN8HWPY4VKXZc3G%2FRjULTvVf4uYlcX%2F8%2BEqsH&X-Amz-Signature=cf767faa764c4e4ceb1dec0ea57be43cdd442330f7ff7a53026f4ea609cc7087&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637MD55XE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDTzKEJLNP34j6ggLd6PRS2Awo4bCj4av%2BvtTKAldpRfAIhANXvS1XWWZkvkqn9t4EEhQdFvQoh60%2FNESWGxNwTgVr1KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9ScgVSc7RQPC9nAYq3AMmsU3g4JqDPS94Omv239DgmGX8V6eAOotDk%2FWMrUJL0WDya1Dt1lSgHRpeFAGZ0v1E1AN8DAxkDeocZDhFV2seguBmQX%2FDi7xhkTSOhlcp4PDoUqQexhi16IapdINc79UpimXPhLVlqEbW1Soh%2FW37KKfhqrHpuccqZ8Zd1hSk1xVgW8KthXD0tNEmDyNfYlfhDWfaMLKRVAZgfFmKMC0BkEAeSHO9waQbwgIe7qDWUn5%2Fu7IBW7d%2BIRB2uABXIKVYiSYaQIrAqJYDiP0EFK2EwwLLVMh5Qm92ViboNx28oeMYnwmBEo5cl%2BmeBcjMLGCxXabYiybWkGL8UGxqipvFFOKsECG2BBRtKJpZs9tyZayp9sJFc6ukeVy8%2FNYdM%2BB5jp1pHRYet83fBPZEa7KnQxe%2FK5l7gQjc3yTqDueTmmP55EUJZ4TgnASt726Bt3dObchdboQohf6VzkwBbwC90eRF8iDETPD1zJPv%2BfSlSbSWrfBpfjk7PN6iWtsY6WDxtrzrjLxZ4Iz3xXaBz6ctrq8s01jfK85gBZzoHvjDgcL7dFlva92ZpFlaGB5M6L60TTmz34nUMe3Tk3HUUTGAYAIJp%2FdHW6kCpO7ZZwggl5NXcCnK38Is%2F4rnhTDe3tfABjqkAQkOPAZO0HJE263c2latFWfRSCZiijHtcfJ43uCJzgVPI62ngfyO40qrQrmDR8hyCpYlip58CDg5maNHi6CLOvvyqpNBv4fhSUdZkkalQasuqS17MMMrC5aPH0SiBSOWqV8JOjfic65CcrpE9n26%2FVQh93qvrHTxcLIgs0XrOIkc1b%2FOWtJCwcAzN8HWPY4VKXZc3G%2FRjULTvVf4uYlcX%2F8%2BEqsH&X-Amz-Signature=f27d18b597aa2cf093467c9b3ab7e95e7a3533891c4f3d77872dc62282b2a238&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637MD55XE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDTzKEJLNP34j6ggLd6PRS2Awo4bCj4av%2BvtTKAldpRfAIhANXvS1XWWZkvkqn9t4EEhQdFvQoh60%2FNESWGxNwTgVr1KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9ScgVSc7RQPC9nAYq3AMmsU3g4JqDPS94Omv239DgmGX8V6eAOotDk%2FWMrUJL0WDya1Dt1lSgHRpeFAGZ0v1E1AN8DAxkDeocZDhFV2seguBmQX%2FDi7xhkTSOhlcp4PDoUqQexhi16IapdINc79UpimXPhLVlqEbW1Soh%2FW37KKfhqrHpuccqZ8Zd1hSk1xVgW8KthXD0tNEmDyNfYlfhDWfaMLKRVAZgfFmKMC0BkEAeSHO9waQbwgIe7qDWUn5%2Fu7IBW7d%2BIRB2uABXIKVYiSYaQIrAqJYDiP0EFK2EwwLLVMh5Qm92ViboNx28oeMYnwmBEo5cl%2BmeBcjMLGCxXabYiybWkGL8UGxqipvFFOKsECG2BBRtKJpZs9tyZayp9sJFc6ukeVy8%2FNYdM%2BB5jp1pHRYet83fBPZEa7KnQxe%2FK5l7gQjc3yTqDueTmmP55EUJZ4TgnASt726Bt3dObchdboQohf6VzkwBbwC90eRF8iDETPD1zJPv%2BfSlSbSWrfBpfjk7PN6iWtsY6WDxtrzrjLxZ4Iz3xXaBz6ctrq8s01jfK85gBZzoHvjDgcL7dFlva92ZpFlaGB5M6L60TTmz34nUMe3Tk3HUUTGAYAIJp%2FdHW6kCpO7ZZwggl5NXcCnK38Is%2F4rnhTDe3tfABjqkAQkOPAZO0HJE263c2latFWfRSCZiijHtcfJ43uCJzgVPI62ngfyO40qrQrmDR8hyCpYlip58CDg5maNHi6CLOvvyqpNBv4fhSUdZkkalQasuqS17MMMrC5aPH0SiBSOWqV8JOjfic65CcrpE9n26%2FVQh93qvrHTxcLIgs0XrOIkc1b%2FOWtJCwcAzN8HWPY4VKXZc3G%2FRjULTvVf4uYlcX%2F8%2BEqsH&X-Amz-Signature=9d6b9add3cd96d2f5641874021dcd605a636915cadb8e147060ec967cc2fa10b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637MD55XE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDTzKEJLNP34j6ggLd6PRS2Awo4bCj4av%2BvtTKAldpRfAIhANXvS1XWWZkvkqn9t4EEhQdFvQoh60%2FNESWGxNwTgVr1KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9ScgVSc7RQPC9nAYq3AMmsU3g4JqDPS94Omv239DgmGX8V6eAOotDk%2FWMrUJL0WDya1Dt1lSgHRpeFAGZ0v1E1AN8DAxkDeocZDhFV2seguBmQX%2FDi7xhkTSOhlcp4PDoUqQexhi16IapdINc79UpimXPhLVlqEbW1Soh%2FW37KKfhqrHpuccqZ8Zd1hSk1xVgW8KthXD0tNEmDyNfYlfhDWfaMLKRVAZgfFmKMC0BkEAeSHO9waQbwgIe7qDWUn5%2Fu7IBW7d%2BIRB2uABXIKVYiSYaQIrAqJYDiP0EFK2EwwLLVMh5Qm92ViboNx28oeMYnwmBEo5cl%2BmeBcjMLGCxXabYiybWkGL8UGxqipvFFOKsECG2BBRtKJpZs9tyZayp9sJFc6ukeVy8%2FNYdM%2BB5jp1pHRYet83fBPZEa7KnQxe%2FK5l7gQjc3yTqDueTmmP55EUJZ4TgnASt726Bt3dObchdboQohf6VzkwBbwC90eRF8iDETPD1zJPv%2BfSlSbSWrfBpfjk7PN6iWtsY6WDxtrzrjLxZ4Iz3xXaBz6ctrq8s01jfK85gBZzoHvjDgcL7dFlva92ZpFlaGB5M6L60TTmz34nUMe3Tk3HUUTGAYAIJp%2FdHW6kCpO7ZZwggl5NXcCnK38Is%2F4rnhTDe3tfABjqkAQkOPAZO0HJE263c2latFWfRSCZiijHtcfJ43uCJzgVPI62ngfyO40qrQrmDR8hyCpYlip58CDg5maNHi6CLOvvyqpNBv4fhSUdZkkalQasuqS17MMMrC5aPH0SiBSOWqV8JOjfic65CcrpE9n26%2FVQh93qvrHTxcLIgs0XrOIkc1b%2FOWtJCwcAzN8HWPY4VKXZc3G%2FRjULTvVf4uYlcX%2F8%2BEqsH&X-Amz-Signature=27cc992cd912cad15c7ec0eb2954cceec64f5cc35e3925abd523e290760935ae&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637MD55XE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDTzKEJLNP34j6ggLd6PRS2Awo4bCj4av%2BvtTKAldpRfAIhANXvS1XWWZkvkqn9t4EEhQdFvQoh60%2FNESWGxNwTgVr1KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9ScgVSc7RQPC9nAYq3AMmsU3g4JqDPS94Omv239DgmGX8V6eAOotDk%2FWMrUJL0WDya1Dt1lSgHRpeFAGZ0v1E1AN8DAxkDeocZDhFV2seguBmQX%2FDi7xhkTSOhlcp4PDoUqQexhi16IapdINc79UpimXPhLVlqEbW1Soh%2FW37KKfhqrHpuccqZ8Zd1hSk1xVgW8KthXD0tNEmDyNfYlfhDWfaMLKRVAZgfFmKMC0BkEAeSHO9waQbwgIe7qDWUn5%2Fu7IBW7d%2BIRB2uABXIKVYiSYaQIrAqJYDiP0EFK2EwwLLVMh5Qm92ViboNx28oeMYnwmBEo5cl%2BmeBcjMLGCxXabYiybWkGL8UGxqipvFFOKsECG2BBRtKJpZs9tyZayp9sJFc6ukeVy8%2FNYdM%2BB5jp1pHRYet83fBPZEa7KnQxe%2FK5l7gQjc3yTqDueTmmP55EUJZ4TgnASt726Bt3dObchdboQohf6VzkwBbwC90eRF8iDETPD1zJPv%2BfSlSbSWrfBpfjk7PN6iWtsY6WDxtrzrjLxZ4Iz3xXaBz6ctrq8s01jfK85gBZzoHvjDgcL7dFlva92ZpFlaGB5M6L60TTmz34nUMe3Tk3HUUTGAYAIJp%2FdHW6kCpO7ZZwggl5NXcCnK38Is%2F4rnhTDe3tfABjqkAQkOPAZO0HJE263c2latFWfRSCZiijHtcfJ43uCJzgVPI62ngfyO40qrQrmDR8hyCpYlip58CDg5maNHi6CLOvvyqpNBv4fhSUdZkkalQasuqS17MMMrC5aPH0SiBSOWqV8JOjfic65CcrpE9n26%2FVQh93qvrHTxcLIgs0XrOIkc1b%2FOWtJCwcAzN8HWPY4VKXZc3G%2FRjULTvVf4uYlcX%2F8%2BEqsH&X-Amz-Signature=99f0d1a80b0009444acd400cd30f6d35090f8c18b081f428f8c5ac4e3282e6e2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637MD55XE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDTzKEJLNP34j6ggLd6PRS2Awo4bCj4av%2BvtTKAldpRfAIhANXvS1XWWZkvkqn9t4EEhQdFvQoh60%2FNESWGxNwTgVr1KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9ScgVSc7RQPC9nAYq3AMmsU3g4JqDPS94Omv239DgmGX8V6eAOotDk%2FWMrUJL0WDya1Dt1lSgHRpeFAGZ0v1E1AN8DAxkDeocZDhFV2seguBmQX%2FDi7xhkTSOhlcp4PDoUqQexhi16IapdINc79UpimXPhLVlqEbW1Soh%2FW37KKfhqrHpuccqZ8Zd1hSk1xVgW8KthXD0tNEmDyNfYlfhDWfaMLKRVAZgfFmKMC0BkEAeSHO9waQbwgIe7qDWUn5%2Fu7IBW7d%2BIRB2uABXIKVYiSYaQIrAqJYDiP0EFK2EwwLLVMh5Qm92ViboNx28oeMYnwmBEo5cl%2BmeBcjMLGCxXabYiybWkGL8UGxqipvFFOKsECG2BBRtKJpZs9tyZayp9sJFc6ukeVy8%2FNYdM%2BB5jp1pHRYet83fBPZEa7KnQxe%2FK5l7gQjc3yTqDueTmmP55EUJZ4TgnASt726Bt3dObchdboQohf6VzkwBbwC90eRF8iDETPD1zJPv%2BfSlSbSWrfBpfjk7PN6iWtsY6WDxtrzrjLxZ4Iz3xXaBz6ctrq8s01jfK85gBZzoHvjDgcL7dFlva92ZpFlaGB5M6L60TTmz34nUMe3Tk3HUUTGAYAIJp%2FdHW6kCpO7ZZwggl5NXcCnK38Is%2F4rnhTDe3tfABjqkAQkOPAZO0HJE263c2latFWfRSCZiijHtcfJ43uCJzgVPI62ngfyO40qrQrmDR8hyCpYlip58CDg5maNHi6CLOvvyqpNBv4fhSUdZkkalQasuqS17MMMrC5aPH0SiBSOWqV8JOjfic65CcrpE9n26%2FVQh93qvrHTxcLIgs0XrOIkc1b%2FOWtJCwcAzN8HWPY4VKXZc3G%2FRjULTvVf4uYlcX%2F8%2BEqsH&X-Amz-Signature=ccf4a0ca47db6f8c9ae4deed771c0473e2b2cf21a0ff584b331d93af98019afe&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637MD55XE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDTzKEJLNP34j6ggLd6PRS2Awo4bCj4av%2BvtTKAldpRfAIhANXvS1XWWZkvkqn9t4EEhQdFvQoh60%2FNESWGxNwTgVr1KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9ScgVSc7RQPC9nAYq3AMmsU3g4JqDPS94Omv239DgmGX8V6eAOotDk%2FWMrUJL0WDya1Dt1lSgHRpeFAGZ0v1E1AN8DAxkDeocZDhFV2seguBmQX%2FDi7xhkTSOhlcp4PDoUqQexhi16IapdINc79UpimXPhLVlqEbW1Soh%2FW37KKfhqrHpuccqZ8Zd1hSk1xVgW8KthXD0tNEmDyNfYlfhDWfaMLKRVAZgfFmKMC0BkEAeSHO9waQbwgIe7qDWUn5%2Fu7IBW7d%2BIRB2uABXIKVYiSYaQIrAqJYDiP0EFK2EwwLLVMh5Qm92ViboNx28oeMYnwmBEo5cl%2BmeBcjMLGCxXabYiybWkGL8UGxqipvFFOKsECG2BBRtKJpZs9tyZayp9sJFc6ukeVy8%2FNYdM%2BB5jp1pHRYet83fBPZEa7KnQxe%2FK5l7gQjc3yTqDueTmmP55EUJZ4TgnASt726Bt3dObchdboQohf6VzkwBbwC90eRF8iDETPD1zJPv%2BfSlSbSWrfBpfjk7PN6iWtsY6WDxtrzrjLxZ4Iz3xXaBz6ctrq8s01jfK85gBZzoHvjDgcL7dFlva92ZpFlaGB5M6L60TTmz34nUMe3Tk3HUUTGAYAIJp%2FdHW6kCpO7ZZwggl5NXcCnK38Is%2F4rnhTDe3tfABjqkAQkOPAZO0HJE263c2latFWfRSCZiijHtcfJ43uCJzgVPI62ngfyO40qrQrmDR8hyCpYlip58CDg5maNHi6CLOvvyqpNBv4fhSUdZkkalQasuqS17MMMrC5aPH0SiBSOWqV8JOjfic65CcrpE9n26%2FVQh93qvrHTxcLIgs0XrOIkc1b%2FOWtJCwcAzN8HWPY4VKXZc3G%2FRjULTvVf4uYlcX%2F8%2BEqsH&X-Amz-Signature=00430323fc38b0d220822d6985e419c84215308500d36a654005fb3d0e0432a4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
