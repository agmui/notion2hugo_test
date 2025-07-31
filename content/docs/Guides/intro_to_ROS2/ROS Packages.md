---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCFDVEZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR2h60yOXTTqZjvmY9pewIEW%2FLJiiNNfyNDpg0LWn85gIhAOeQ1cvDNmOqpTvT0elcxeph2KIqz3lFzzOs92SJ1C82KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0fgUUGaCk7VT6Qvcq3AOb7pxDaRYr%2FTPydsn2Aqos%2FC5yVzv%2Bh6ZfYHxHUr0EZq%2B2kzg47UyovA6bRkE9Wi1vgqCj2X%2BfMUwVr5%2FIouu585tQq%2BHQjY5lacuu02LIF7RNqp6AUtoaq3nC7GoCSpHvSY6icuxMHslrn4MjtEdlX7GncwPHbaPHAE%2FwmyIQW%2FwsV8dvSfDA%2Fmym4GVYUXPNpmmeIy7xf4Wif0SO2%2BrJbv9PGnmDDe4M6mB3DKMGdF%2Ftx9T6Hv79Ym1zAtM5LI3uvW3wkkdDFxAcYnaxUhtSAG0HVeYQAS6lLN1%2BCG%2F70i6%2B5mbin5QOIgu%2FbiosJ7cdmpeZmisnyTHdr%2FuYGyCyPGWY8YX%2BrN8VrDAv2DyBQHw7zeobqnnj1u2tROclzmA7QHsPXZLMqUHoIskS4vUn%2BYVgCQDr9azwquYEp%2Fb%2Bm%2BnBjqMpqVvDRV2W4k%2B4ru9SxFXwRI9%2FXt4xFLiRfOAKbTJrDRSeCTqq8yMaXfadUq3RQgZvZn7y72wwbf490jXSZvEKY4%2BZpzVmrLyFXbCxe%2BqEc5%2FYUvmlYX7PAbddMtgj4bjxNJK%2FQKQeXyUD0KXfZiRSY0a%2FZdsMbeWK6w%2BUjC1eFbG3pqtpDAnHTxFSBIVYMsuFxBi8EVqAxTCrpq%2FEBjqkAdd%2B7llgwSQe%2FqlowWU7BvYCGoxR6wi1DrSBLr5h%2FKGwllqtk4EKcdJ6Kk4SqwAsDnwwPser%2FtJaISXx1adpREpJSYWxS%2BEg%2B21AqboScgodciwzIguBbrjp6QMkfw3bv1VzxZd2%2BOeBL91bkpobonKy4kFuF4WHG3Wx65DRNSH9vB0sId9adfh1hfNwySH8%2FimqYNQ0%2BvLzAXrEs7R3jvBTUaqh&X-Amz-Signature=8022f46401aec48f44b24ec9bb6888ab97b6e9c81279c740799a4a5b64d5a85a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCFDVEZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR2h60yOXTTqZjvmY9pewIEW%2FLJiiNNfyNDpg0LWn85gIhAOeQ1cvDNmOqpTvT0elcxeph2KIqz3lFzzOs92SJ1C82KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0fgUUGaCk7VT6Qvcq3AOb7pxDaRYr%2FTPydsn2Aqos%2FC5yVzv%2Bh6ZfYHxHUr0EZq%2B2kzg47UyovA6bRkE9Wi1vgqCj2X%2BfMUwVr5%2FIouu585tQq%2BHQjY5lacuu02LIF7RNqp6AUtoaq3nC7GoCSpHvSY6icuxMHslrn4MjtEdlX7GncwPHbaPHAE%2FwmyIQW%2FwsV8dvSfDA%2Fmym4GVYUXPNpmmeIy7xf4Wif0SO2%2BrJbv9PGnmDDe4M6mB3DKMGdF%2Ftx9T6Hv79Ym1zAtM5LI3uvW3wkkdDFxAcYnaxUhtSAG0HVeYQAS6lLN1%2BCG%2F70i6%2B5mbin5QOIgu%2FbiosJ7cdmpeZmisnyTHdr%2FuYGyCyPGWY8YX%2BrN8VrDAv2DyBQHw7zeobqnnj1u2tROclzmA7QHsPXZLMqUHoIskS4vUn%2BYVgCQDr9azwquYEp%2Fb%2Bm%2BnBjqMpqVvDRV2W4k%2B4ru9SxFXwRI9%2FXt4xFLiRfOAKbTJrDRSeCTqq8yMaXfadUq3RQgZvZn7y72wwbf490jXSZvEKY4%2BZpzVmrLyFXbCxe%2BqEc5%2FYUvmlYX7PAbddMtgj4bjxNJK%2FQKQeXyUD0KXfZiRSY0a%2FZdsMbeWK6w%2BUjC1eFbG3pqtpDAnHTxFSBIVYMsuFxBi8EVqAxTCrpq%2FEBjqkAdd%2B7llgwSQe%2FqlowWU7BvYCGoxR6wi1DrSBLr5h%2FKGwllqtk4EKcdJ6Kk4SqwAsDnwwPser%2FtJaISXx1adpREpJSYWxS%2BEg%2B21AqboScgodciwzIguBbrjp6QMkfw3bv1VzxZd2%2BOeBL91bkpobonKy4kFuF4WHG3Wx65DRNSH9vB0sId9adfh1hfNwySH8%2FimqYNQ0%2BvLzAXrEs7R3jvBTUaqh&X-Amz-Signature=faa59353f3d1e15dba74ee8b57ae16618821347d7020fdda9901eab3f726b067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCFDVEZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR2h60yOXTTqZjvmY9pewIEW%2FLJiiNNfyNDpg0LWn85gIhAOeQ1cvDNmOqpTvT0elcxeph2KIqz3lFzzOs92SJ1C82KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0fgUUGaCk7VT6Qvcq3AOb7pxDaRYr%2FTPydsn2Aqos%2FC5yVzv%2Bh6ZfYHxHUr0EZq%2B2kzg47UyovA6bRkE9Wi1vgqCj2X%2BfMUwVr5%2FIouu585tQq%2BHQjY5lacuu02LIF7RNqp6AUtoaq3nC7GoCSpHvSY6icuxMHslrn4MjtEdlX7GncwPHbaPHAE%2FwmyIQW%2FwsV8dvSfDA%2Fmym4GVYUXPNpmmeIy7xf4Wif0SO2%2BrJbv9PGnmDDe4M6mB3DKMGdF%2Ftx9T6Hv79Ym1zAtM5LI3uvW3wkkdDFxAcYnaxUhtSAG0HVeYQAS6lLN1%2BCG%2F70i6%2B5mbin5QOIgu%2FbiosJ7cdmpeZmisnyTHdr%2FuYGyCyPGWY8YX%2BrN8VrDAv2DyBQHw7zeobqnnj1u2tROclzmA7QHsPXZLMqUHoIskS4vUn%2BYVgCQDr9azwquYEp%2Fb%2Bm%2BnBjqMpqVvDRV2W4k%2B4ru9SxFXwRI9%2FXt4xFLiRfOAKbTJrDRSeCTqq8yMaXfadUq3RQgZvZn7y72wwbf490jXSZvEKY4%2BZpzVmrLyFXbCxe%2BqEc5%2FYUvmlYX7PAbddMtgj4bjxNJK%2FQKQeXyUD0KXfZiRSY0a%2FZdsMbeWK6w%2BUjC1eFbG3pqtpDAnHTxFSBIVYMsuFxBi8EVqAxTCrpq%2FEBjqkAdd%2B7llgwSQe%2FqlowWU7BvYCGoxR6wi1DrSBLr5h%2FKGwllqtk4EKcdJ6Kk4SqwAsDnwwPser%2FtJaISXx1adpREpJSYWxS%2BEg%2B21AqboScgodciwzIguBbrjp6QMkfw3bv1VzxZd2%2BOeBL91bkpobonKy4kFuF4WHG3Wx65DRNSH9vB0sId9adfh1hfNwySH8%2FimqYNQ0%2BvLzAXrEs7R3jvBTUaqh&X-Amz-Signature=d6563e2dff645b91e9444f6474ade46cdcd014e73305aa07968029f6a62f3755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCFDVEZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR2h60yOXTTqZjvmY9pewIEW%2FLJiiNNfyNDpg0LWn85gIhAOeQ1cvDNmOqpTvT0elcxeph2KIqz3lFzzOs92SJ1C82KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0fgUUGaCk7VT6Qvcq3AOb7pxDaRYr%2FTPydsn2Aqos%2FC5yVzv%2Bh6ZfYHxHUr0EZq%2B2kzg47UyovA6bRkE9Wi1vgqCj2X%2BfMUwVr5%2FIouu585tQq%2BHQjY5lacuu02LIF7RNqp6AUtoaq3nC7GoCSpHvSY6icuxMHslrn4MjtEdlX7GncwPHbaPHAE%2FwmyIQW%2FwsV8dvSfDA%2Fmym4GVYUXPNpmmeIy7xf4Wif0SO2%2BrJbv9PGnmDDe4M6mB3DKMGdF%2Ftx9T6Hv79Ym1zAtM5LI3uvW3wkkdDFxAcYnaxUhtSAG0HVeYQAS6lLN1%2BCG%2F70i6%2B5mbin5QOIgu%2FbiosJ7cdmpeZmisnyTHdr%2FuYGyCyPGWY8YX%2BrN8VrDAv2DyBQHw7zeobqnnj1u2tROclzmA7QHsPXZLMqUHoIskS4vUn%2BYVgCQDr9azwquYEp%2Fb%2Bm%2BnBjqMpqVvDRV2W4k%2B4ru9SxFXwRI9%2FXt4xFLiRfOAKbTJrDRSeCTqq8yMaXfadUq3RQgZvZn7y72wwbf490jXSZvEKY4%2BZpzVmrLyFXbCxe%2BqEc5%2FYUvmlYX7PAbddMtgj4bjxNJK%2FQKQeXyUD0KXfZiRSY0a%2FZdsMbeWK6w%2BUjC1eFbG3pqtpDAnHTxFSBIVYMsuFxBi8EVqAxTCrpq%2FEBjqkAdd%2B7llgwSQe%2FqlowWU7BvYCGoxR6wi1DrSBLr5h%2FKGwllqtk4EKcdJ6Kk4SqwAsDnwwPser%2FtJaISXx1adpREpJSYWxS%2BEg%2B21AqboScgodciwzIguBbrjp6QMkfw3bv1VzxZd2%2BOeBL91bkpobonKy4kFuF4WHG3Wx65DRNSH9vB0sId9adfh1hfNwySH8%2FimqYNQ0%2BvLzAXrEs7R3jvBTUaqh&X-Amz-Signature=97c6cc7e23664f84ff444de48c397bc36f69e5906f08be994e04283ff935b9f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCFDVEZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR2h60yOXTTqZjvmY9pewIEW%2FLJiiNNfyNDpg0LWn85gIhAOeQ1cvDNmOqpTvT0elcxeph2KIqz3lFzzOs92SJ1C82KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0fgUUGaCk7VT6Qvcq3AOb7pxDaRYr%2FTPydsn2Aqos%2FC5yVzv%2Bh6ZfYHxHUr0EZq%2B2kzg47UyovA6bRkE9Wi1vgqCj2X%2BfMUwVr5%2FIouu585tQq%2BHQjY5lacuu02LIF7RNqp6AUtoaq3nC7GoCSpHvSY6icuxMHslrn4MjtEdlX7GncwPHbaPHAE%2FwmyIQW%2FwsV8dvSfDA%2Fmym4GVYUXPNpmmeIy7xf4Wif0SO2%2BrJbv9PGnmDDe4M6mB3DKMGdF%2Ftx9T6Hv79Ym1zAtM5LI3uvW3wkkdDFxAcYnaxUhtSAG0HVeYQAS6lLN1%2BCG%2F70i6%2B5mbin5QOIgu%2FbiosJ7cdmpeZmisnyTHdr%2FuYGyCyPGWY8YX%2BrN8VrDAv2DyBQHw7zeobqnnj1u2tROclzmA7QHsPXZLMqUHoIskS4vUn%2BYVgCQDr9azwquYEp%2Fb%2Bm%2BnBjqMpqVvDRV2W4k%2B4ru9SxFXwRI9%2FXt4xFLiRfOAKbTJrDRSeCTqq8yMaXfadUq3RQgZvZn7y72wwbf490jXSZvEKY4%2BZpzVmrLyFXbCxe%2BqEc5%2FYUvmlYX7PAbddMtgj4bjxNJK%2FQKQeXyUD0KXfZiRSY0a%2FZdsMbeWK6w%2BUjC1eFbG3pqtpDAnHTxFSBIVYMsuFxBi8EVqAxTCrpq%2FEBjqkAdd%2B7llgwSQe%2FqlowWU7BvYCGoxR6wi1DrSBLr5h%2FKGwllqtk4EKcdJ6Kk4SqwAsDnwwPser%2FtJaISXx1adpREpJSYWxS%2BEg%2B21AqboScgodciwzIguBbrjp6QMkfw3bv1VzxZd2%2BOeBL91bkpobonKy4kFuF4WHG3Wx65DRNSH9vB0sId9adfh1hfNwySH8%2FimqYNQ0%2BvLzAXrEs7R3jvBTUaqh&X-Amz-Signature=f0482daf79ee42333a87aebbe95d20890b29b64bf2a8738ec6f62e951a901d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCFDVEZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR2h60yOXTTqZjvmY9pewIEW%2FLJiiNNfyNDpg0LWn85gIhAOeQ1cvDNmOqpTvT0elcxeph2KIqz3lFzzOs92SJ1C82KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0fgUUGaCk7VT6Qvcq3AOb7pxDaRYr%2FTPydsn2Aqos%2FC5yVzv%2Bh6ZfYHxHUr0EZq%2B2kzg47UyovA6bRkE9Wi1vgqCj2X%2BfMUwVr5%2FIouu585tQq%2BHQjY5lacuu02LIF7RNqp6AUtoaq3nC7GoCSpHvSY6icuxMHslrn4MjtEdlX7GncwPHbaPHAE%2FwmyIQW%2FwsV8dvSfDA%2Fmym4GVYUXPNpmmeIy7xf4Wif0SO2%2BrJbv9PGnmDDe4M6mB3DKMGdF%2Ftx9T6Hv79Ym1zAtM5LI3uvW3wkkdDFxAcYnaxUhtSAG0HVeYQAS6lLN1%2BCG%2F70i6%2B5mbin5QOIgu%2FbiosJ7cdmpeZmisnyTHdr%2FuYGyCyPGWY8YX%2BrN8VrDAv2DyBQHw7zeobqnnj1u2tROclzmA7QHsPXZLMqUHoIskS4vUn%2BYVgCQDr9azwquYEp%2Fb%2Bm%2BnBjqMpqVvDRV2W4k%2B4ru9SxFXwRI9%2FXt4xFLiRfOAKbTJrDRSeCTqq8yMaXfadUq3RQgZvZn7y72wwbf490jXSZvEKY4%2BZpzVmrLyFXbCxe%2BqEc5%2FYUvmlYX7PAbddMtgj4bjxNJK%2FQKQeXyUD0KXfZiRSY0a%2FZdsMbeWK6w%2BUjC1eFbG3pqtpDAnHTxFSBIVYMsuFxBi8EVqAxTCrpq%2FEBjqkAdd%2B7llgwSQe%2FqlowWU7BvYCGoxR6wi1DrSBLr5h%2FKGwllqtk4EKcdJ6Kk4SqwAsDnwwPser%2FtJaISXx1adpREpJSYWxS%2BEg%2B21AqboScgodciwzIguBbrjp6QMkfw3bv1VzxZd2%2BOeBL91bkpobonKy4kFuF4WHG3Wx65DRNSH9vB0sId9adfh1hfNwySH8%2FimqYNQ0%2BvLzAXrEs7R3jvBTUaqh&X-Amz-Signature=4780b4fa839ca46810f27316924fdd073037d9c86399d7bee84de783dc83be09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YCFDVEZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR2h60yOXTTqZjvmY9pewIEW%2FLJiiNNfyNDpg0LWn85gIhAOeQ1cvDNmOqpTvT0elcxeph2KIqz3lFzzOs92SJ1C82KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0fgUUGaCk7VT6Qvcq3AOb7pxDaRYr%2FTPydsn2Aqos%2FC5yVzv%2Bh6ZfYHxHUr0EZq%2B2kzg47UyovA6bRkE9Wi1vgqCj2X%2BfMUwVr5%2FIouu585tQq%2BHQjY5lacuu02LIF7RNqp6AUtoaq3nC7GoCSpHvSY6icuxMHslrn4MjtEdlX7GncwPHbaPHAE%2FwmyIQW%2FwsV8dvSfDA%2Fmym4GVYUXPNpmmeIy7xf4Wif0SO2%2BrJbv9PGnmDDe4M6mB3DKMGdF%2Ftx9T6Hv79Ym1zAtM5LI3uvW3wkkdDFxAcYnaxUhtSAG0HVeYQAS6lLN1%2BCG%2F70i6%2B5mbin5QOIgu%2FbiosJ7cdmpeZmisnyTHdr%2FuYGyCyPGWY8YX%2BrN8VrDAv2DyBQHw7zeobqnnj1u2tROclzmA7QHsPXZLMqUHoIskS4vUn%2BYVgCQDr9azwquYEp%2Fb%2Bm%2BnBjqMpqVvDRV2W4k%2B4ru9SxFXwRI9%2FXt4xFLiRfOAKbTJrDRSeCTqq8yMaXfadUq3RQgZvZn7y72wwbf490jXSZvEKY4%2BZpzVmrLyFXbCxe%2BqEc5%2FYUvmlYX7PAbddMtgj4bjxNJK%2FQKQeXyUD0KXfZiRSY0a%2FZdsMbeWK6w%2BUjC1eFbG3pqtpDAnHTxFSBIVYMsuFxBi8EVqAxTCrpq%2FEBjqkAdd%2B7llgwSQe%2FqlowWU7BvYCGoxR6wi1DrSBLr5h%2FKGwllqtk4EKcdJ6Kk4SqwAsDnwwPser%2FtJaISXx1adpREpJSYWxS%2BEg%2B21AqboScgodciwzIguBbrjp6QMkfw3bv1VzxZd2%2BOeBL91bkpobonKy4kFuF4WHG3Wx65DRNSH9vB0sId9adfh1hfNwySH8%2FimqYNQ0%2BvLzAXrEs7R3jvBTUaqh&X-Amz-Signature=f64c3e3f7735718069bc570b2e2de785f3a6d93050eb039bd42d5ffa91ea07df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
