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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVJW2K75%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU4FXsgwQo4f2mH1IWPKfZSJwt4p3WTpcQh6vSSXyhYgIhAMAZieUxZ1VJpqRTB%2F53gleM34goYB5nTA926kbVyA%2FCKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAUGoC7cB6fj%2FI07Iq3AMerJEqpxYQmgMU62S%2BR3YKCPApVSoN4IyoXUoKonJTcPiUaYBS8csRrJm9HPgUOvq%2B261U6LysKwMRkYtsXqrNVe%2BjXt%2BFhaUaoR5o5Lw99BA4yALbCp%2FbCJE5U58nvrSp%2Bmkc46pQR5D6tjDPntT%2B%2BwQkvu961I74IrTGzFePKu8CqJ6X716iSYxLLymG2URKGh%2F4z3DmlN452MvjnJ2WD%2BAdH%2F%2Bqyp2QEEFgs4hx0ohi3cGgSed0WiyXLPdc0OwWYQHGldR4klNtYv0C7%2BZsYR3rPrLAnpbmaa3dA370UWxzkyQaQMScCoilXn8lnnl0xs17Vzl1d1qjVMSe%2Bk68QHMvB8BrM%2FOv%2FFA1hfzLu3ffFdj95mTIPXZ0OgRN6ACHDLni21T8lWVJ5qpfp%2FzWduMGLnRQe6%2BXINqmoQAlmBNf%2BbgUiHeN%2FOYyNEccqGgeUiIalQnw3Wllshwi9X6ak8h3YYaOwEhjTrDsrIOyhvGielBMYlpxQlrUwEXhBMfGI1kfrNHebCXAo8lhRUFZr902pA4l6Upwk73Jgu05odmIEdE8tEayzglPDmNrTFW3UKuGRF9o31lHNZKj4UrF4bkYHLABjvMZXA2f0gT67rDETDLEVzpBwyoaLzC%2Bsp%2FCBjqkAQ2rgGAlfFiCA9jvLeYIjKRifLZURVbLEqboX2ySLo6ID4plaX%2BMfo8gAaT%2Bh64jSGAvIw%2FPoOGVTZhrppAIdg2RYKO0tP32GbGt8s4YwLE5wrhDnq4pKfDk9QIt8qdNkYmMco1LrPqOYhRlr30PqRKnmjQqfsb3RinTKp9jWKwc62FSpaAigGkpOR%2ByUZ3NqyakwvcKtzSobvC0PvwSZwgtC%2BbS&X-Amz-Signature=bb2eb1ee04a80e724b2e77f6ca478022dad869715d13f246d31e9cb9ed6590e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVJW2K75%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU4FXsgwQo4f2mH1IWPKfZSJwt4p3WTpcQh6vSSXyhYgIhAMAZieUxZ1VJpqRTB%2F53gleM34goYB5nTA926kbVyA%2FCKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAUGoC7cB6fj%2FI07Iq3AMerJEqpxYQmgMU62S%2BR3YKCPApVSoN4IyoXUoKonJTcPiUaYBS8csRrJm9HPgUOvq%2B261U6LysKwMRkYtsXqrNVe%2BjXt%2BFhaUaoR5o5Lw99BA4yALbCp%2FbCJE5U58nvrSp%2Bmkc46pQR5D6tjDPntT%2B%2BwQkvu961I74IrTGzFePKu8CqJ6X716iSYxLLymG2URKGh%2F4z3DmlN452MvjnJ2WD%2BAdH%2F%2Bqyp2QEEFgs4hx0ohi3cGgSed0WiyXLPdc0OwWYQHGldR4klNtYv0C7%2BZsYR3rPrLAnpbmaa3dA370UWxzkyQaQMScCoilXn8lnnl0xs17Vzl1d1qjVMSe%2Bk68QHMvB8BrM%2FOv%2FFA1hfzLu3ffFdj95mTIPXZ0OgRN6ACHDLni21T8lWVJ5qpfp%2FzWduMGLnRQe6%2BXINqmoQAlmBNf%2BbgUiHeN%2FOYyNEccqGgeUiIalQnw3Wllshwi9X6ak8h3YYaOwEhjTrDsrIOyhvGielBMYlpxQlrUwEXhBMfGI1kfrNHebCXAo8lhRUFZr902pA4l6Upwk73Jgu05odmIEdE8tEayzglPDmNrTFW3UKuGRF9o31lHNZKj4UrF4bkYHLABjvMZXA2f0gT67rDETDLEVzpBwyoaLzC%2Bsp%2FCBjqkAQ2rgGAlfFiCA9jvLeYIjKRifLZURVbLEqboX2ySLo6ID4plaX%2BMfo8gAaT%2Bh64jSGAvIw%2FPoOGVTZhrppAIdg2RYKO0tP32GbGt8s4YwLE5wrhDnq4pKfDk9QIt8qdNkYmMco1LrPqOYhRlr30PqRKnmjQqfsb3RinTKp9jWKwc62FSpaAigGkpOR%2ByUZ3NqyakwvcKtzSobvC0PvwSZwgtC%2BbS&X-Amz-Signature=7abbeefdcb6ec8eb86edf78acd44a13b69d128ca892658fe9d909c5dfed70dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVJW2K75%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU4FXsgwQo4f2mH1IWPKfZSJwt4p3WTpcQh6vSSXyhYgIhAMAZieUxZ1VJpqRTB%2F53gleM34goYB5nTA926kbVyA%2FCKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAUGoC7cB6fj%2FI07Iq3AMerJEqpxYQmgMU62S%2BR3YKCPApVSoN4IyoXUoKonJTcPiUaYBS8csRrJm9HPgUOvq%2B261U6LysKwMRkYtsXqrNVe%2BjXt%2BFhaUaoR5o5Lw99BA4yALbCp%2FbCJE5U58nvrSp%2Bmkc46pQR5D6tjDPntT%2B%2BwQkvu961I74IrTGzFePKu8CqJ6X716iSYxLLymG2URKGh%2F4z3DmlN452MvjnJ2WD%2BAdH%2F%2Bqyp2QEEFgs4hx0ohi3cGgSed0WiyXLPdc0OwWYQHGldR4klNtYv0C7%2BZsYR3rPrLAnpbmaa3dA370UWxzkyQaQMScCoilXn8lnnl0xs17Vzl1d1qjVMSe%2Bk68QHMvB8BrM%2FOv%2FFA1hfzLu3ffFdj95mTIPXZ0OgRN6ACHDLni21T8lWVJ5qpfp%2FzWduMGLnRQe6%2BXINqmoQAlmBNf%2BbgUiHeN%2FOYyNEccqGgeUiIalQnw3Wllshwi9X6ak8h3YYaOwEhjTrDsrIOyhvGielBMYlpxQlrUwEXhBMfGI1kfrNHebCXAo8lhRUFZr902pA4l6Upwk73Jgu05odmIEdE8tEayzglPDmNrTFW3UKuGRF9o31lHNZKj4UrF4bkYHLABjvMZXA2f0gT67rDETDLEVzpBwyoaLzC%2Bsp%2FCBjqkAQ2rgGAlfFiCA9jvLeYIjKRifLZURVbLEqboX2ySLo6ID4plaX%2BMfo8gAaT%2Bh64jSGAvIw%2FPoOGVTZhrppAIdg2RYKO0tP32GbGt8s4YwLE5wrhDnq4pKfDk9QIt8qdNkYmMco1LrPqOYhRlr30PqRKnmjQqfsb3RinTKp9jWKwc62FSpaAigGkpOR%2ByUZ3NqyakwvcKtzSobvC0PvwSZwgtC%2BbS&X-Amz-Signature=7e85b70fa2fdc26d344e5474e3691f953d38a9157f648110c6239b727fd67481&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVJW2K75%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU4FXsgwQo4f2mH1IWPKfZSJwt4p3WTpcQh6vSSXyhYgIhAMAZieUxZ1VJpqRTB%2F53gleM34goYB5nTA926kbVyA%2FCKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAUGoC7cB6fj%2FI07Iq3AMerJEqpxYQmgMU62S%2BR3YKCPApVSoN4IyoXUoKonJTcPiUaYBS8csRrJm9HPgUOvq%2B261U6LysKwMRkYtsXqrNVe%2BjXt%2BFhaUaoR5o5Lw99BA4yALbCp%2FbCJE5U58nvrSp%2Bmkc46pQR5D6tjDPntT%2B%2BwQkvu961I74IrTGzFePKu8CqJ6X716iSYxLLymG2URKGh%2F4z3DmlN452MvjnJ2WD%2BAdH%2F%2Bqyp2QEEFgs4hx0ohi3cGgSed0WiyXLPdc0OwWYQHGldR4klNtYv0C7%2BZsYR3rPrLAnpbmaa3dA370UWxzkyQaQMScCoilXn8lnnl0xs17Vzl1d1qjVMSe%2Bk68QHMvB8BrM%2FOv%2FFA1hfzLu3ffFdj95mTIPXZ0OgRN6ACHDLni21T8lWVJ5qpfp%2FzWduMGLnRQe6%2BXINqmoQAlmBNf%2BbgUiHeN%2FOYyNEccqGgeUiIalQnw3Wllshwi9X6ak8h3YYaOwEhjTrDsrIOyhvGielBMYlpxQlrUwEXhBMfGI1kfrNHebCXAo8lhRUFZr902pA4l6Upwk73Jgu05odmIEdE8tEayzglPDmNrTFW3UKuGRF9o31lHNZKj4UrF4bkYHLABjvMZXA2f0gT67rDETDLEVzpBwyoaLzC%2Bsp%2FCBjqkAQ2rgGAlfFiCA9jvLeYIjKRifLZURVbLEqboX2ySLo6ID4plaX%2BMfo8gAaT%2Bh64jSGAvIw%2FPoOGVTZhrppAIdg2RYKO0tP32GbGt8s4YwLE5wrhDnq4pKfDk9QIt8qdNkYmMco1LrPqOYhRlr30PqRKnmjQqfsb3RinTKp9jWKwc62FSpaAigGkpOR%2ByUZ3NqyakwvcKtzSobvC0PvwSZwgtC%2BbS&X-Amz-Signature=9f40fd99a0874fc204668a855449aeb1ae7817f3a9bb040b99d4372331116bf2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVJW2K75%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU4FXsgwQo4f2mH1IWPKfZSJwt4p3WTpcQh6vSSXyhYgIhAMAZieUxZ1VJpqRTB%2F53gleM34goYB5nTA926kbVyA%2FCKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAUGoC7cB6fj%2FI07Iq3AMerJEqpxYQmgMU62S%2BR3YKCPApVSoN4IyoXUoKonJTcPiUaYBS8csRrJm9HPgUOvq%2B261U6LysKwMRkYtsXqrNVe%2BjXt%2BFhaUaoR5o5Lw99BA4yALbCp%2FbCJE5U58nvrSp%2Bmkc46pQR5D6tjDPntT%2B%2BwQkvu961I74IrTGzFePKu8CqJ6X716iSYxLLymG2URKGh%2F4z3DmlN452MvjnJ2WD%2BAdH%2F%2Bqyp2QEEFgs4hx0ohi3cGgSed0WiyXLPdc0OwWYQHGldR4klNtYv0C7%2BZsYR3rPrLAnpbmaa3dA370UWxzkyQaQMScCoilXn8lnnl0xs17Vzl1d1qjVMSe%2Bk68QHMvB8BrM%2FOv%2FFA1hfzLu3ffFdj95mTIPXZ0OgRN6ACHDLni21T8lWVJ5qpfp%2FzWduMGLnRQe6%2BXINqmoQAlmBNf%2BbgUiHeN%2FOYyNEccqGgeUiIalQnw3Wllshwi9X6ak8h3YYaOwEhjTrDsrIOyhvGielBMYlpxQlrUwEXhBMfGI1kfrNHebCXAo8lhRUFZr902pA4l6Upwk73Jgu05odmIEdE8tEayzglPDmNrTFW3UKuGRF9o31lHNZKj4UrF4bkYHLABjvMZXA2f0gT67rDETDLEVzpBwyoaLzC%2Bsp%2FCBjqkAQ2rgGAlfFiCA9jvLeYIjKRifLZURVbLEqboX2ySLo6ID4plaX%2BMfo8gAaT%2Bh64jSGAvIw%2FPoOGVTZhrppAIdg2RYKO0tP32GbGt8s4YwLE5wrhDnq4pKfDk9QIt8qdNkYmMco1LrPqOYhRlr30PqRKnmjQqfsb3RinTKp9jWKwc62FSpaAigGkpOR%2ByUZ3NqyakwvcKtzSobvC0PvwSZwgtC%2BbS&X-Amz-Signature=4794fab181fd8e0bd46b880036948b3fd0d67347e69d5c357c8b3c396ef63852&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVJW2K75%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU4FXsgwQo4f2mH1IWPKfZSJwt4p3WTpcQh6vSSXyhYgIhAMAZieUxZ1VJpqRTB%2F53gleM34goYB5nTA926kbVyA%2FCKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAUGoC7cB6fj%2FI07Iq3AMerJEqpxYQmgMU62S%2BR3YKCPApVSoN4IyoXUoKonJTcPiUaYBS8csRrJm9HPgUOvq%2B261U6LysKwMRkYtsXqrNVe%2BjXt%2BFhaUaoR5o5Lw99BA4yALbCp%2FbCJE5U58nvrSp%2Bmkc46pQR5D6tjDPntT%2B%2BwQkvu961I74IrTGzFePKu8CqJ6X716iSYxLLymG2URKGh%2F4z3DmlN452MvjnJ2WD%2BAdH%2F%2Bqyp2QEEFgs4hx0ohi3cGgSed0WiyXLPdc0OwWYQHGldR4klNtYv0C7%2BZsYR3rPrLAnpbmaa3dA370UWxzkyQaQMScCoilXn8lnnl0xs17Vzl1d1qjVMSe%2Bk68QHMvB8BrM%2FOv%2FFA1hfzLu3ffFdj95mTIPXZ0OgRN6ACHDLni21T8lWVJ5qpfp%2FzWduMGLnRQe6%2BXINqmoQAlmBNf%2BbgUiHeN%2FOYyNEccqGgeUiIalQnw3Wllshwi9X6ak8h3YYaOwEhjTrDsrIOyhvGielBMYlpxQlrUwEXhBMfGI1kfrNHebCXAo8lhRUFZr902pA4l6Upwk73Jgu05odmIEdE8tEayzglPDmNrTFW3UKuGRF9o31lHNZKj4UrF4bkYHLABjvMZXA2f0gT67rDETDLEVzpBwyoaLzC%2Bsp%2FCBjqkAQ2rgGAlfFiCA9jvLeYIjKRifLZURVbLEqboX2ySLo6ID4plaX%2BMfo8gAaT%2Bh64jSGAvIw%2FPoOGVTZhrppAIdg2RYKO0tP32GbGt8s4YwLE5wrhDnq4pKfDk9QIt8qdNkYmMco1LrPqOYhRlr30PqRKnmjQqfsb3RinTKp9jWKwc62FSpaAigGkpOR%2ByUZ3NqyakwvcKtzSobvC0PvwSZwgtC%2BbS&X-Amz-Signature=39d2117ce09c3e66f7cb7b0c2368685ba7bc3b34b2ef70ae7beb853cd054b9af&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVJW2K75%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU4FXsgwQo4f2mH1IWPKfZSJwt4p3WTpcQh6vSSXyhYgIhAMAZieUxZ1VJpqRTB%2F53gleM34goYB5nTA926kbVyA%2FCKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAUGoC7cB6fj%2FI07Iq3AMerJEqpxYQmgMU62S%2BR3YKCPApVSoN4IyoXUoKonJTcPiUaYBS8csRrJm9HPgUOvq%2B261U6LysKwMRkYtsXqrNVe%2BjXt%2BFhaUaoR5o5Lw99BA4yALbCp%2FbCJE5U58nvrSp%2Bmkc46pQR5D6tjDPntT%2B%2BwQkvu961I74IrTGzFePKu8CqJ6X716iSYxLLymG2URKGh%2F4z3DmlN452MvjnJ2WD%2BAdH%2F%2Bqyp2QEEFgs4hx0ohi3cGgSed0WiyXLPdc0OwWYQHGldR4klNtYv0C7%2BZsYR3rPrLAnpbmaa3dA370UWxzkyQaQMScCoilXn8lnnl0xs17Vzl1d1qjVMSe%2Bk68QHMvB8BrM%2FOv%2FFA1hfzLu3ffFdj95mTIPXZ0OgRN6ACHDLni21T8lWVJ5qpfp%2FzWduMGLnRQe6%2BXINqmoQAlmBNf%2BbgUiHeN%2FOYyNEccqGgeUiIalQnw3Wllshwi9X6ak8h3YYaOwEhjTrDsrIOyhvGielBMYlpxQlrUwEXhBMfGI1kfrNHebCXAo8lhRUFZr902pA4l6Upwk73Jgu05odmIEdE8tEayzglPDmNrTFW3UKuGRF9o31lHNZKj4UrF4bkYHLABjvMZXA2f0gT67rDETDLEVzpBwyoaLzC%2Bsp%2FCBjqkAQ2rgGAlfFiCA9jvLeYIjKRifLZURVbLEqboX2ySLo6ID4plaX%2BMfo8gAaT%2Bh64jSGAvIw%2FPoOGVTZhrppAIdg2RYKO0tP32GbGt8s4YwLE5wrhDnq4pKfDk9QIt8qdNkYmMco1LrPqOYhRlr30PqRKnmjQqfsb3RinTKp9jWKwc62FSpaAigGkpOR%2ByUZ3NqyakwvcKtzSobvC0PvwSZwgtC%2BbS&X-Amz-Signature=0b9ca0e03142c3e231a2e62734efd7d4291edcfb6d9502f930b114c7a550a1f6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
