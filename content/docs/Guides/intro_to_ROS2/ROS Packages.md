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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOW6NWTE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCH1A1w9exIwYQqMGJJV1eZSS5UozuKCfXHSwGb4BjNyAIhAPyOYYgju8DwFm7f8EXwyNdJa2lQtYxSSZJD%2Bd%2FVAbmSKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXZxnx%2FqDz33MRWpcq3AMaQrEEWzRFR719hi1Esk5AsYUT%2FUQQ73zfjRHHVRuEd4hrD6%2B4AmRTVTJq3QTLUs4XUCcCOILvChh7neev49YcH7i87iDSavqDmSnqPXljtSObB3aaQVTmKgXcqgwy5RX6s8GbZ0hdXKGB0wip%2FjD2gG%2FE7%2FvvX2Hy%2FtStezs9UIMRNrM7Tph2BfhVaUnrlRYhq%2BYdWTvyAs%2BSemv4bXyuKznjo%2FcPVXrsSV47Pu86pa%2Fx6Srip%2FQr%2Bo9bcwllV7pNYFKtBGLxYdyL%2FG5F4pZO3jONpQG7GlP5lY2qBNVVB9Bl0QKRGm95DaicChPXhm63OZ46Ac4KvV1vm8vXP4%2B1w1gG3NohGJMgr9Qx9sq8YLRtl0FwBDi%2BvqWxecVGDvIYwejnaJl%2B583xve0WfSkQRg3ao0%2F5k%2FL48qwe5Kf4SAb6wwrLXBq%2BXvgM7R7EKVlBOahandP35G8LWWLswqHkxQuRfKCMe1e%2FK%2FvHoaZB%2B%2B6%2FBmQl7DX%2BQmmLbS8vtDEVRvOvPcRs%2BZYPhYuUT%2BK9KQWf2pje74uRO9PiBo%2BgZxcUMPRaQYcZ6UhHX4gdqQqf3%2FJ9xTvZrJTq7YpkUOHFYfEXGmIO8BBn0ZZJspkmZJJ9R2rz5g6Ejjy24jDgje2%2FBjqkAfoEypibwFe%2BtVHpt%2BCvKgGK1i2pL9zWfFmTq0JYVtjPsjCkaXpNs5e8mIfa%2BTmxwFkvZwdtJEXaXjZ%2BFHqCXBjQohljcNp6IEMwC4W16Dii4LAg96jfmr65%2Bhy77PewklZqrKMnChk9t3TRKtcZ%2BawUxfDI4wn7kivI4yLVGkosymf2TIEvtHj5Q6VKZNju8CA29ICsReXBjeKQ4fEEaSDEuCiG&X-Amz-Signature=faa44ad4c5aab3c61f95620d4b0062fbb4eb63c8c520474c7d1e1cfc6d4737b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOW6NWTE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCH1A1w9exIwYQqMGJJV1eZSS5UozuKCfXHSwGb4BjNyAIhAPyOYYgju8DwFm7f8EXwyNdJa2lQtYxSSZJD%2Bd%2FVAbmSKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXZxnx%2FqDz33MRWpcq3AMaQrEEWzRFR719hi1Esk5AsYUT%2FUQQ73zfjRHHVRuEd4hrD6%2B4AmRTVTJq3QTLUs4XUCcCOILvChh7neev49YcH7i87iDSavqDmSnqPXljtSObB3aaQVTmKgXcqgwy5RX6s8GbZ0hdXKGB0wip%2FjD2gG%2FE7%2FvvX2Hy%2FtStezs9UIMRNrM7Tph2BfhVaUnrlRYhq%2BYdWTvyAs%2BSemv4bXyuKznjo%2FcPVXrsSV47Pu86pa%2Fx6Srip%2FQr%2Bo9bcwllV7pNYFKtBGLxYdyL%2FG5F4pZO3jONpQG7GlP5lY2qBNVVB9Bl0QKRGm95DaicChPXhm63OZ46Ac4KvV1vm8vXP4%2B1w1gG3NohGJMgr9Qx9sq8YLRtl0FwBDi%2BvqWxecVGDvIYwejnaJl%2B583xve0WfSkQRg3ao0%2F5k%2FL48qwe5Kf4SAb6wwrLXBq%2BXvgM7R7EKVlBOahandP35G8LWWLswqHkxQuRfKCMe1e%2FK%2FvHoaZB%2B%2B6%2FBmQl7DX%2BQmmLbS8vtDEVRvOvPcRs%2BZYPhYuUT%2BK9KQWf2pje74uRO9PiBo%2BgZxcUMPRaQYcZ6UhHX4gdqQqf3%2FJ9xTvZrJTq7YpkUOHFYfEXGmIO8BBn0ZZJspkmZJJ9R2rz5g6Ejjy24jDgje2%2FBjqkAfoEypibwFe%2BtVHpt%2BCvKgGK1i2pL9zWfFmTq0JYVtjPsjCkaXpNs5e8mIfa%2BTmxwFkvZwdtJEXaXjZ%2BFHqCXBjQohljcNp6IEMwC4W16Dii4LAg96jfmr65%2Bhy77PewklZqrKMnChk9t3TRKtcZ%2BawUxfDI4wn7kivI4yLVGkosymf2TIEvtHj5Q6VKZNju8CA29ICsReXBjeKQ4fEEaSDEuCiG&X-Amz-Signature=70a264cca7dc2fe522ca7c48f066081627702085c87e2452f75c9b347d5be078&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOW6NWTE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCH1A1w9exIwYQqMGJJV1eZSS5UozuKCfXHSwGb4BjNyAIhAPyOYYgju8DwFm7f8EXwyNdJa2lQtYxSSZJD%2Bd%2FVAbmSKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXZxnx%2FqDz33MRWpcq3AMaQrEEWzRFR719hi1Esk5AsYUT%2FUQQ73zfjRHHVRuEd4hrD6%2B4AmRTVTJq3QTLUs4XUCcCOILvChh7neev49YcH7i87iDSavqDmSnqPXljtSObB3aaQVTmKgXcqgwy5RX6s8GbZ0hdXKGB0wip%2FjD2gG%2FE7%2FvvX2Hy%2FtStezs9UIMRNrM7Tph2BfhVaUnrlRYhq%2BYdWTvyAs%2BSemv4bXyuKznjo%2FcPVXrsSV47Pu86pa%2Fx6Srip%2FQr%2Bo9bcwllV7pNYFKtBGLxYdyL%2FG5F4pZO3jONpQG7GlP5lY2qBNVVB9Bl0QKRGm95DaicChPXhm63OZ46Ac4KvV1vm8vXP4%2B1w1gG3NohGJMgr9Qx9sq8YLRtl0FwBDi%2BvqWxecVGDvIYwejnaJl%2B583xve0WfSkQRg3ao0%2F5k%2FL48qwe5Kf4SAb6wwrLXBq%2BXvgM7R7EKVlBOahandP35G8LWWLswqHkxQuRfKCMe1e%2FK%2FvHoaZB%2B%2B6%2FBmQl7DX%2BQmmLbS8vtDEVRvOvPcRs%2BZYPhYuUT%2BK9KQWf2pje74uRO9PiBo%2BgZxcUMPRaQYcZ6UhHX4gdqQqf3%2FJ9xTvZrJTq7YpkUOHFYfEXGmIO8BBn0ZZJspkmZJJ9R2rz5g6Ejjy24jDgje2%2FBjqkAfoEypibwFe%2BtVHpt%2BCvKgGK1i2pL9zWfFmTq0JYVtjPsjCkaXpNs5e8mIfa%2BTmxwFkvZwdtJEXaXjZ%2BFHqCXBjQohljcNp6IEMwC4W16Dii4LAg96jfmr65%2Bhy77PewklZqrKMnChk9t3TRKtcZ%2BawUxfDI4wn7kivI4yLVGkosymf2TIEvtHj5Q6VKZNju8CA29ICsReXBjeKQ4fEEaSDEuCiG&X-Amz-Signature=150e8feb2a1e63ec1297305eddf073e46b059d1631fc6ce0d56df411db8a77d0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOW6NWTE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCH1A1w9exIwYQqMGJJV1eZSS5UozuKCfXHSwGb4BjNyAIhAPyOYYgju8DwFm7f8EXwyNdJa2lQtYxSSZJD%2Bd%2FVAbmSKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXZxnx%2FqDz33MRWpcq3AMaQrEEWzRFR719hi1Esk5AsYUT%2FUQQ73zfjRHHVRuEd4hrD6%2B4AmRTVTJq3QTLUs4XUCcCOILvChh7neev49YcH7i87iDSavqDmSnqPXljtSObB3aaQVTmKgXcqgwy5RX6s8GbZ0hdXKGB0wip%2FjD2gG%2FE7%2FvvX2Hy%2FtStezs9UIMRNrM7Tph2BfhVaUnrlRYhq%2BYdWTvyAs%2BSemv4bXyuKznjo%2FcPVXrsSV47Pu86pa%2Fx6Srip%2FQr%2Bo9bcwllV7pNYFKtBGLxYdyL%2FG5F4pZO3jONpQG7GlP5lY2qBNVVB9Bl0QKRGm95DaicChPXhm63OZ46Ac4KvV1vm8vXP4%2B1w1gG3NohGJMgr9Qx9sq8YLRtl0FwBDi%2BvqWxecVGDvIYwejnaJl%2B583xve0WfSkQRg3ao0%2F5k%2FL48qwe5Kf4SAb6wwrLXBq%2BXvgM7R7EKVlBOahandP35G8LWWLswqHkxQuRfKCMe1e%2FK%2FvHoaZB%2B%2B6%2FBmQl7DX%2BQmmLbS8vtDEVRvOvPcRs%2BZYPhYuUT%2BK9KQWf2pje74uRO9PiBo%2BgZxcUMPRaQYcZ6UhHX4gdqQqf3%2FJ9xTvZrJTq7YpkUOHFYfEXGmIO8BBn0ZZJspkmZJJ9R2rz5g6Ejjy24jDgje2%2FBjqkAfoEypibwFe%2BtVHpt%2BCvKgGK1i2pL9zWfFmTq0JYVtjPsjCkaXpNs5e8mIfa%2BTmxwFkvZwdtJEXaXjZ%2BFHqCXBjQohljcNp6IEMwC4W16Dii4LAg96jfmr65%2Bhy77PewklZqrKMnChk9t3TRKtcZ%2BawUxfDI4wn7kivI4yLVGkosymf2TIEvtHj5Q6VKZNju8CA29ICsReXBjeKQ4fEEaSDEuCiG&X-Amz-Signature=810d4c9bcfb47dcbb5d2d9c2ac7287d3666da6d0ad0d358af611cc0877f1d927&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOW6NWTE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCH1A1w9exIwYQqMGJJV1eZSS5UozuKCfXHSwGb4BjNyAIhAPyOYYgju8DwFm7f8EXwyNdJa2lQtYxSSZJD%2Bd%2FVAbmSKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXZxnx%2FqDz33MRWpcq3AMaQrEEWzRFR719hi1Esk5AsYUT%2FUQQ73zfjRHHVRuEd4hrD6%2B4AmRTVTJq3QTLUs4XUCcCOILvChh7neev49YcH7i87iDSavqDmSnqPXljtSObB3aaQVTmKgXcqgwy5RX6s8GbZ0hdXKGB0wip%2FjD2gG%2FE7%2FvvX2Hy%2FtStezs9UIMRNrM7Tph2BfhVaUnrlRYhq%2BYdWTvyAs%2BSemv4bXyuKznjo%2FcPVXrsSV47Pu86pa%2Fx6Srip%2FQr%2Bo9bcwllV7pNYFKtBGLxYdyL%2FG5F4pZO3jONpQG7GlP5lY2qBNVVB9Bl0QKRGm95DaicChPXhm63OZ46Ac4KvV1vm8vXP4%2B1w1gG3NohGJMgr9Qx9sq8YLRtl0FwBDi%2BvqWxecVGDvIYwejnaJl%2B583xve0WfSkQRg3ao0%2F5k%2FL48qwe5Kf4SAb6wwrLXBq%2BXvgM7R7EKVlBOahandP35G8LWWLswqHkxQuRfKCMe1e%2FK%2FvHoaZB%2B%2B6%2FBmQl7DX%2BQmmLbS8vtDEVRvOvPcRs%2BZYPhYuUT%2BK9KQWf2pje74uRO9PiBo%2BgZxcUMPRaQYcZ6UhHX4gdqQqf3%2FJ9xTvZrJTq7YpkUOHFYfEXGmIO8BBn0ZZJspkmZJJ9R2rz5g6Ejjy24jDgje2%2FBjqkAfoEypibwFe%2BtVHpt%2BCvKgGK1i2pL9zWfFmTq0JYVtjPsjCkaXpNs5e8mIfa%2BTmxwFkvZwdtJEXaXjZ%2BFHqCXBjQohljcNp6IEMwC4W16Dii4LAg96jfmr65%2Bhy77PewklZqrKMnChk9t3TRKtcZ%2BawUxfDI4wn7kivI4yLVGkosymf2TIEvtHj5Q6VKZNju8CA29ICsReXBjeKQ4fEEaSDEuCiG&X-Amz-Signature=b2b8d1f2da30bba4069288983d07a9a0dee4244312b150a5026b2525df427ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOW6NWTE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCH1A1w9exIwYQqMGJJV1eZSS5UozuKCfXHSwGb4BjNyAIhAPyOYYgju8DwFm7f8EXwyNdJa2lQtYxSSZJD%2Bd%2FVAbmSKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXZxnx%2FqDz33MRWpcq3AMaQrEEWzRFR719hi1Esk5AsYUT%2FUQQ73zfjRHHVRuEd4hrD6%2B4AmRTVTJq3QTLUs4XUCcCOILvChh7neev49YcH7i87iDSavqDmSnqPXljtSObB3aaQVTmKgXcqgwy5RX6s8GbZ0hdXKGB0wip%2FjD2gG%2FE7%2FvvX2Hy%2FtStezs9UIMRNrM7Tph2BfhVaUnrlRYhq%2BYdWTvyAs%2BSemv4bXyuKznjo%2FcPVXrsSV47Pu86pa%2Fx6Srip%2FQr%2Bo9bcwllV7pNYFKtBGLxYdyL%2FG5F4pZO3jONpQG7GlP5lY2qBNVVB9Bl0QKRGm95DaicChPXhm63OZ46Ac4KvV1vm8vXP4%2B1w1gG3NohGJMgr9Qx9sq8YLRtl0FwBDi%2BvqWxecVGDvIYwejnaJl%2B583xve0WfSkQRg3ao0%2F5k%2FL48qwe5Kf4SAb6wwrLXBq%2BXvgM7R7EKVlBOahandP35G8LWWLswqHkxQuRfKCMe1e%2FK%2FvHoaZB%2B%2B6%2FBmQl7DX%2BQmmLbS8vtDEVRvOvPcRs%2BZYPhYuUT%2BK9KQWf2pje74uRO9PiBo%2BgZxcUMPRaQYcZ6UhHX4gdqQqf3%2FJ9xTvZrJTq7YpkUOHFYfEXGmIO8BBn0ZZJspkmZJJ9R2rz5g6Ejjy24jDgje2%2FBjqkAfoEypibwFe%2BtVHpt%2BCvKgGK1i2pL9zWfFmTq0JYVtjPsjCkaXpNs5e8mIfa%2BTmxwFkvZwdtJEXaXjZ%2BFHqCXBjQohljcNp6IEMwC4W16Dii4LAg96jfmr65%2Bhy77PewklZqrKMnChk9t3TRKtcZ%2BawUxfDI4wn7kivI4yLVGkosymf2TIEvtHj5Q6VKZNju8CA29ICsReXBjeKQ4fEEaSDEuCiG&X-Amz-Signature=1ee649b1bce585b50e1aec4618a33b3d56b3a44981343cb1ac0e91fc9f95f532&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOW6NWTE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCH1A1w9exIwYQqMGJJV1eZSS5UozuKCfXHSwGb4BjNyAIhAPyOYYgju8DwFm7f8EXwyNdJa2lQtYxSSZJD%2Bd%2FVAbmSKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXZxnx%2FqDz33MRWpcq3AMaQrEEWzRFR719hi1Esk5AsYUT%2FUQQ73zfjRHHVRuEd4hrD6%2B4AmRTVTJq3QTLUs4XUCcCOILvChh7neev49YcH7i87iDSavqDmSnqPXljtSObB3aaQVTmKgXcqgwy5RX6s8GbZ0hdXKGB0wip%2FjD2gG%2FE7%2FvvX2Hy%2FtStezs9UIMRNrM7Tph2BfhVaUnrlRYhq%2BYdWTvyAs%2BSemv4bXyuKznjo%2FcPVXrsSV47Pu86pa%2Fx6Srip%2FQr%2Bo9bcwllV7pNYFKtBGLxYdyL%2FG5F4pZO3jONpQG7GlP5lY2qBNVVB9Bl0QKRGm95DaicChPXhm63OZ46Ac4KvV1vm8vXP4%2B1w1gG3NohGJMgr9Qx9sq8YLRtl0FwBDi%2BvqWxecVGDvIYwejnaJl%2B583xve0WfSkQRg3ao0%2F5k%2FL48qwe5Kf4SAb6wwrLXBq%2BXvgM7R7EKVlBOahandP35G8LWWLswqHkxQuRfKCMe1e%2FK%2FvHoaZB%2B%2B6%2FBmQl7DX%2BQmmLbS8vtDEVRvOvPcRs%2BZYPhYuUT%2BK9KQWf2pje74uRO9PiBo%2BgZxcUMPRaQYcZ6UhHX4gdqQqf3%2FJ9xTvZrJTq7YpkUOHFYfEXGmIO8BBn0ZZJspkmZJJ9R2rz5g6Ejjy24jDgje2%2FBjqkAfoEypibwFe%2BtVHpt%2BCvKgGK1i2pL9zWfFmTq0JYVtjPsjCkaXpNs5e8mIfa%2BTmxwFkvZwdtJEXaXjZ%2BFHqCXBjQohljcNp6IEMwC4W16Dii4LAg96jfmr65%2Bhy77PewklZqrKMnChk9t3TRKtcZ%2BawUxfDI4wn7kivI4yLVGkosymf2TIEvtHj5Q6VKZNju8CA29ICsReXBjeKQ4fEEaSDEuCiG&X-Amz-Signature=823505161f0e9dbb2decd1aef958543bdabe687bf62e430fce8b56c7e1a9ee37&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
