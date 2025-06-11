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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2WRMLHV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTFZ1bIfboC410xqldpP1lxysKb3ogdC0Y7a%2FH%2Bok1%2FAIhAI6XFRFC1l%2BA9BjoUsbMa7A8SFMOVews5%2Fob30vHWNlnKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkPYRQnZVWioOiKbQq3AOir0HpoA621BtBQyd8xzxiHYEEUaWJmeYKgeASpqwonZ2UO1d8pg59cQya%2FXG%2FZnhgIsVu3POrL34BMi4%2FgXgSIigdw6fAxAIwkjbssvgLf%2FhujCkx5YJtlsTosXiwGFAI9YbgzMDtLt511xBwxNKVomtiVkljceZ6OiE6%2FVutcVGddPhLLBKFSDBtq0JkoTMZSFYNnLP55xwcgqUjXJNUPmyemYRw8CpHxVewTqU5TwhpUZjciqaLxWdOyYnWhRMT20EK%2FeDGrWewmnTWRxE6C2T0PSRvFYPeW3iHKJ6Unu4YduH9aEHYP8Ju9ZLH383H5peksL6udujAVgRiCUBNhCAa8Vn1k3BuDq0UgP7tFpclHZiy0ACsH43p4g1HyjOn%2Fk6XzflCfuLiaYvcF9XYCXBD8HwzmhON249zEwW%2Bf4ozoHOb03bKpDQx9KX8%2BXG39gY9eh9TRSyD24IO9CatXwMvMk%2FXtdLd%2FL1ENs%2FICSk1jjFeQdyJcPMwxQ8faIdKgxQfD9BOr0Wk3oyQdhr65Tn0KPdrgE047ny09%2FJPUR%2BMv2lhDxNVkbPNL3%2FcuCKiVoQUUY%2Bzg7g4ouQ7hvETgsX4B%2B7y3T5fQfe6RH4OBGfcls9rWCFyeZikrzCZ5qXCBjqkASFnXBfIDeTRDUGtEEOIqzxsTy4FnwHK0agK51s4rpX0FAMP9zkG12pXaS42asUzDGqAnro7R3EuBcm%2FVzZHVW0Z%2BHE1%2FDTPW4uR5hMJXHb0nhV3BwmJm%2FhmC1Vf%2B28W37GRSy7%2BupvjUJ3hoV8sA8ISRmXhhp85c4pohlr686DnZUqxxPyGqEl0Ef3AXcn5A6oDm6MSmkzSg56iAt6kHEUlYPni&X-Amz-Signature=2f67c0de4eb6c9fdc1f0e70bd8d531b7de32c2aed82927ca4c639c83250bc7b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2WRMLHV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTFZ1bIfboC410xqldpP1lxysKb3ogdC0Y7a%2FH%2Bok1%2FAIhAI6XFRFC1l%2BA9BjoUsbMa7A8SFMOVews5%2Fob30vHWNlnKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkPYRQnZVWioOiKbQq3AOir0HpoA621BtBQyd8xzxiHYEEUaWJmeYKgeASpqwonZ2UO1d8pg59cQya%2FXG%2FZnhgIsVu3POrL34BMi4%2FgXgSIigdw6fAxAIwkjbssvgLf%2FhujCkx5YJtlsTosXiwGFAI9YbgzMDtLt511xBwxNKVomtiVkljceZ6OiE6%2FVutcVGddPhLLBKFSDBtq0JkoTMZSFYNnLP55xwcgqUjXJNUPmyemYRw8CpHxVewTqU5TwhpUZjciqaLxWdOyYnWhRMT20EK%2FeDGrWewmnTWRxE6C2T0PSRvFYPeW3iHKJ6Unu4YduH9aEHYP8Ju9ZLH383H5peksL6udujAVgRiCUBNhCAa8Vn1k3BuDq0UgP7tFpclHZiy0ACsH43p4g1HyjOn%2Fk6XzflCfuLiaYvcF9XYCXBD8HwzmhON249zEwW%2Bf4ozoHOb03bKpDQx9KX8%2BXG39gY9eh9TRSyD24IO9CatXwMvMk%2FXtdLd%2FL1ENs%2FICSk1jjFeQdyJcPMwxQ8faIdKgxQfD9BOr0Wk3oyQdhr65Tn0KPdrgE047ny09%2FJPUR%2BMv2lhDxNVkbPNL3%2FcuCKiVoQUUY%2Bzg7g4ouQ7hvETgsX4B%2B7y3T5fQfe6RH4OBGfcls9rWCFyeZikrzCZ5qXCBjqkASFnXBfIDeTRDUGtEEOIqzxsTy4FnwHK0agK51s4rpX0FAMP9zkG12pXaS42asUzDGqAnro7R3EuBcm%2FVzZHVW0Z%2BHE1%2FDTPW4uR5hMJXHb0nhV3BwmJm%2FhmC1Vf%2B28W37GRSy7%2BupvjUJ3hoV8sA8ISRmXhhp85c4pohlr686DnZUqxxPyGqEl0Ef3AXcn5A6oDm6MSmkzSg56iAt6kHEUlYPni&X-Amz-Signature=22dfac82a86fa8fee7825da92342cf8682d5e2b64b63c855f53498f12cd46685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2WRMLHV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTFZ1bIfboC410xqldpP1lxysKb3ogdC0Y7a%2FH%2Bok1%2FAIhAI6XFRFC1l%2BA9BjoUsbMa7A8SFMOVews5%2Fob30vHWNlnKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkPYRQnZVWioOiKbQq3AOir0HpoA621BtBQyd8xzxiHYEEUaWJmeYKgeASpqwonZ2UO1d8pg59cQya%2FXG%2FZnhgIsVu3POrL34BMi4%2FgXgSIigdw6fAxAIwkjbssvgLf%2FhujCkx5YJtlsTosXiwGFAI9YbgzMDtLt511xBwxNKVomtiVkljceZ6OiE6%2FVutcVGddPhLLBKFSDBtq0JkoTMZSFYNnLP55xwcgqUjXJNUPmyemYRw8CpHxVewTqU5TwhpUZjciqaLxWdOyYnWhRMT20EK%2FeDGrWewmnTWRxE6C2T0PSRvFYPeW3iHKJ6Unu4YduH9aEHYP8Ju9ZLH383H5peksL6udujAVgRiCUBNhCAa8Vn1k3BuDq0UgP7tFpclHZiy0ACsH43p4g1HyjOn%2Fk6XzflCfuLiaYvcF9XYCXBD8HwzmhON249zEwW%2Bf4ozoHOb03bKpDQx9KX8%2BXG39gY9eh9TRSyD24IO9CatXwMvMk%2FXtdLd%2FL1ENs%2FICSk1jjFeQdyJcPMwxQ8faIdKgxQfD9BOr0Wk3oyQdhr65Tn0KPdrgE047ny09%2FJPUR%2BMv2lhDxNVkbPNL3%2FcuCKiVoQUUY%2Bzg7g4ouQ7hvETgsX4B%2B7y3T5fQfe6RH4OBGfcls9rWCFyeZikrzCZ5qXCBjqkASFnXBfIDeTRDUGtEEOIqzxsTy4FnwHK0agK51s4rpX0FAMP9zkG12pXaS42asUzDGqAnro7R3EuBcm%2FVzZHVW0Z%2BHE1%2FDTPW4uR5hMJXHb0nhV3BwmJm%2FhmC1Vf%2B28W37GRSy7%2BupvjUJ3hoV8sA8ISRmXhhp85c4pohlr686DnZUqxxPyGqEl0Ef3AXcn5A6oDm6MSmkzSg56iAt6kHEUlYPni&X-Amz-Signature=3f3b19ad94304e4ec2828191b6342e1f2aba87d41dbfaaa21b39588a9fd4222d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2WRMLHV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTFZ1bIfboC410xqldpP1lxysKb3ogdC0Y7a%2FH%2Bok1%2FAIhAI6XFRFC1l%2BA9BjoUsbMa7A8SFMOVews5%2Fob30vHWNlnKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkPYRQnZVWioOiKbQq3AOir0HpoA621BtBQyd8xzxiHYEEUaWJmeYKgeASpqwonZ2UO1d8pg59cQya%2FXG%2FZnhgIsVu3POrL34BMi4%2FgXgSIigdw6fAxAIwkjbssvgLf%2FhujCkx5YJtlsTosXiwGFAI9YbgzMDtLt511xBwxNKVomtiVkljceZ6OiE6%2FVutcVGddPhLLBKFSDBtq0JkoTMZSFYNnLP55xwcgqUjXJNUPmyemYRw8CpHxVewTqU5TwhpUZjciqaLxWdOyYnWhRMT20EK%2FeDGrWewmnTWRxE6C2T0PSRvFYPeW3iHKJ6Unu4YduH9aEHYP8Ju9ZLH383H5peksL6udujAVgRiCUBNhCAa8Vn1k3BuDq0UgP7tFpclHZiy0ACsH43p4g1HyjOn%2Fk6XzflCfuLiaYvcF9XYCXBD8HwzmhON249zEwW%2Bf4ozoHOb03bKpDQx9KX8%2BXG39gY9eh9TRSyD24IO9CatXwMvMk%2FXtdLd%2FL1ENs%2FICSk1jjFeQdyJcPMwxQ8faIdKgxQfD9BOr0Wk3oyQdhr65Tn0KPdrgE047ny09%2FJPUR%2BMv2lhDxNVkbPNL3%2FcuCKiVoQUUY%2Bzg7g4ouQ7hvETgsX4B%2B7y3T5fQfe6RH4OBGfcls9rWCFyeZikrzCZ5qXCBjqkASFnXBfIDeTRDUGtEEOIqzxsTy4FnwHK0agK51s4rpX0FAMP9zkG12pXaS42asUzDGqAnro7R3EuBcm%2FVzZHVW0Z%2BHE1%2FDTPW4uR5hMJXHb0nhV3BwmJm%2FhmC1Vf%2B28W37GRSy7%2BupvjUJ3hoV8sA8ISRmXhhp85c4pohlr686DnZUqxxPyGqEl0Ef3AXcn5A6oDm6MSmkzSg56iAt6kHEUlYPni&X-Amz-Signature=be975abb8bcf73bd1b2d37e56c1aefeb210766abbe64028e3c4cabda08bf681a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2WRMLHV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTFZ1bIfboC410xqldpP1lxysKb3ogdC0Y7a%2FH%2Bok1%2FAIhAI6XFRFC1l%2BA9BjoUsbMa7A8SFMOVews5%2Fob30vHWNlnKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkPYRQnZVWioOiKbQq3AOir0HpoA621BtBQyd8xzxiHYEEUaWJmeYKgeASpqwonZ2UO1d8pg59cQya%2FXG%2FZnhgIsVu3POrL34BMi4%2FgXgSIigdw6fAxAIwkjbssvgLf%2FhujCkx5YJtlsTosXiwGFAI9YbgzMDtLt511xBwxNKVomtiVkljceZ6OiE6%2FVutcVGddPhLLBKFSDBtq0JkoTMZSFYNnLP55xwcgqUjXJNUPmyemYRw8CpHxVewTqU5TwhpUZjciqaLxWdOyYnWhRMT20EK%2FeDGrWewmnTWRxE6C2T0PSRvFYPeW3iHKJ6Unu4YduH9aEHYP8Ju9ZLH383H5peksL6udujAVgRiCUBNhCAa8Vn1k3BuDq0UgP7tFpclHZiy0ACsH43p4g1HyjOn%2Fk6XzflCfuLiaYvcF9XYCXBD8HwzmhON249zEwW%2Bf4ozoHOb03bKpDQx9KX8%2BXG39gY9eh9TRSyD24IO9CatXwMvMk%2FXtdLd%2FL1ENs%2FICSk1jjFeQdyJcPMwxQ8faIdKgxQfD9BOr0Wk3oyQdhr65Tn0KPdrgE047ny09%2FJPUR%2BMv2lhDxNVkbPNL3%2FcuCKiVoQUUY%2Bzg7g4ouQ7hvETgsX4B%2B7y3T5fQfe6RH4OBGfcls9rWCFyeZikrzCZ5qXCBjqkASFnXBfIDeTRDUGtEEOIqzxsTy4FnwHK0agK51s4rpX0FAMP9zkG12pXaS42asUzDGqAnro7R3EuBcm%2FVzZHVW0Z%2BHE1%2FDTPW4uR5hMJXHb0nhV3BwmJm%2FhmC1Vf%2B28W37GRSy7%2BupvjUJ3hoV8sA8ISRmXhhp85c4pohlr686DnZUqxxPyGqEl0Ef3AXcn5A6oDm6MSmkzSg56iAt6kHEUlYPni&X-Amz-Signature=5fbdd285e274018b2842f60df3dc2120efdd2294562178ce29246a0eea92ad9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2WRMLHV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTFZ1bIfboC410xqldpP1lxysKb3ogdC0Y7a%2FH%2Bok1%2FAIhAI6XFRFC1l%2BA9BjoUsbMa7A8SFMOVews5%2Fob30vHWNlnKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkPYRQnZVWioOiKbQq3AOir0HpoA621BtBQyd8xzxiHYEEUaWJmeYKgeASpqwonZ2UO1d8pg59cQya%2FXG%2FZnhgIsVu3POrL34BMi4%2FgXgSIigdw6fAxAIwkjbssvgLf%2FhujCkx5YJtlsTosXiwGFAI9YbgzMDtLt511xBwxNKVomtiVkljceZ6OiE6%2FVutcVGddPhLLBKFSDBtq0JkoTMZSFYNnLP55xwcgqUjXJNUPmyemYRw8CpHxVewTqU5TwhpUZjciqaLxWdOyYnWhRMT20EK%2FeDGrWewmnTWRxE6C2T0PSRvFYPeW3iHKJ6Unu4YduH9aEHYP8Ju9ZLH383H5peksL6udujAVgRiCUBNhCAa8Vn1k3BuDq0UgP7tFpclHZiy0ACsH43p4g1HyjOn%2Fk6XzflCfuLiaYvcF9XYCXBD8HwzmhON249zEwW%2Bf4ozoHOb03bKpDQx9KX8%2BXG39gY9eh9TRSyD24IO9CatXwMvMk%2FXtdLd%2FL1ENs%2FICSk1jjFeQdyJcPMwxQ8faIdKgxQfD9BOr0Wk3oyQdhr65Tn0KPdrgE047ny09%2FJPUR%2BMv2lhDxNVkbPNL3%2FcuCKiVoQUUY%2Bzg7g4ouQ7hvETgsX4B%2B7y3T5fQfe6RH4OBGfcls9rWCFyeZikrzCZ5qXCBjqkASFnXBfIDeTRDUGtEEOIqzxsTy4FnwHK0agK51s4rpX0FAMP9zkG12pXaS42asUzDGqAnro7R3EuBcm%2FVzZHVW0Z%2BHE1%2FDTPW4uR5hMJXHb0nhV3BwmJm%2FhmC1Vf%2B28W37GRSy7%2BupvjUJ3hoV8sA8ISRmXhhp85c4pohlr686DnZUqxxPyGqEl0Ef3AXcn5A6oDm6MSmkzSg56iAt6kHEUlYPni&X-Amz-Signature=04caf1a61b404e57b3065a5c2fa93859b6f921eb8205e460366c61b29830a913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2WRMLHV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTFZ1bIfboC410xqldpP1lxysKb3ogdC0Y7a%2FH%2Bok1%2FAIhAI6XFRFC1l%2BA9BjoUsbMa7A8SFMOVews5%2Fob30vHWNlnKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkPYRQnZVWioOiKbQq3AOir0HpoA621BtBQyd8xzxiHYEEUaWJmeYKgeASpqwonZ2UO1d8pg59cQya%2FXG%2FZnhgIsVu3POrL34BMi4%2FgXgSIigdw6fAxAIwkjbssvgLf%2FhujCkx5YJtlsTosXiwGFAI9YbgzMDtLt511xBwxNKVomtiVkljceZ6OiE6%2FVutcVGddPhLLBKFSDBtq0JkoTMZSFYNnLP55xwcgqUjXJNUPmyemYRw8CpHxVewTqU5TwhpUZjciqaLxWdOyYnWhRMT20EK%2FeDGrWewmnTWRxE6C2T0PSRvFYPeW3iHKJ6Unu4YduH9aEHYP8Ju9ZLH383H5peksL6udujAVgRiCUBNhCAa8Vn1k3BuDq0UgP7tFpclHZiy0ACsH43p4g1HyjOn%2Fk6XzflCfuLiaYvcF9XYCXBD8HwzmhON249zEwW%2Bf4ozoHOb03bKpDQx9KX8%2BXG39gY9eh9TRSyD24IO9CatXwMvMk%2FXtdLd%2FL1ENs%2FICSk1jjFeQdyJcPMwxQ8faIdKgxQfD9BOr0Wk3oyQdhr65Tn0KPdrgE047ny09%2FJPUR%2BMv2lhDxNVkbPNL3%2FcuCKiVoQUUY%2Bzg7g4ouQ7hvETgsX4B%2B7y3T5fQfe6RH4OBGfcls9rWCFyeZikrzCZ5qXCBjqkASFnXBfIDeTRDUGtEEOIqzxsTy4FnwHK0agK51s4rpX0FAMP9zkG12pXaS42asUzDGqAnro7R3EuBcm%2FVzZHVW0Z%2BHE1%2FDTPW4uR5hMJXHb0nhV3BwmJm%2FhmC1Vf%2B28W37GRSy7%2BupvjUJ3hoV8sA8ISRmXhhp85c4pohlr686DnZUqxxPyGqEl0Ef3AXcn5A6oDm6MSmkzSg56iAt6kHEUlYPni&X-Amz-Signature=a5bbe255357ee2faf585e72a61f17eea8bf90b4089ed169ae981099f15c3e0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
