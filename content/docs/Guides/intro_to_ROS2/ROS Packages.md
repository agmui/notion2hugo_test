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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTQJVMDO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCgRjM3QPRHhPJYlInAelHDPT2R0NdPHzXT6gVuE3uAiwIhANO190k1bEusoCB6obiQGnrA7hx7QvARvemeEG36DlIhKv8DCF8QABoMNjM3NDIzMTgzODA1IgytxWwaGgLKUk20ynMq3AO%2FOaGhVdxMe3hwef7AkVFqsAVfJz3lm%2F4xvK%2BA5mGdMzi2TdKO4HKCmBp%2F9GY1GirAWJsVMTRzlC2xuzHE%2F3%2F2XCDGSlrBSaK4elURf%2BquXX49N9k5KtcUPmKDVKI54Vx8rlruk9K5lYH92CBy7jgW%2BZqOk7ZoYXPQ2WCIi8XdP%2Fr9n3DMiqD5Yb8FnMxJJv2U3%2F%2FARSue8ZBktJcUkgZ8d0fNumciHYg2%2BXYRLtsdXQFgGlkWW3oPW3V5Ol2155gQtGdhu25M8W1SkW%2BeBMex4HxjRw9SYKs1NU3po%2FCp240yQCKBMy0wr0ZhbyE1on4M9oV7FggZHzMZrcatl6l9t%2BqgYPjX2nJvZ45sBPO%2F6a4NG2IjGeljbwQpZod3XtoodkNXntGJN6szOT91QDPTMgy4b6NrLJPJB8DM2cBJVJBDRk19%2FdQ22Tldelw%2BZC2kqruh3wliPgh5YRN3Re%2BIByAL6DuBTEZgPV1G9afgOH%2BhKXpywVFfN3VQeqKop6Y%2BXuIRFIbzGobnPwWxa5kPj6WeKS4iSy8LprvA6ZNdQKGdfSoWR%2FfQxIXS4p8qq8qEQrb0on20QdUzmyg%2FMTD83fIdJGkKL5NI4xIJgvO3G0xGK39AZUGCXEMMzDCb%2BpK9BjqkAeneyjBMGynZagaNx7gX1%2Fqu5t9BIzr0jy%2FjWT8v%2BA%2FR90s%2FnNMaeCf9kbaaElIlFXSkKcZJs0atMtD1T9ub2LznXxk6kXxvNaOxUUqPVcLLJNj2sfK4HK%2BJTcOfeZ%2Fs26f62ekVsGP%2F4GBSDvzxbvtz8yGA%2FxtAemDg%2BicSqgrX9W665bKZ9EUsh4cs4fk3X407iWnH1f6PkahdLwGE1fY0LnsK&X-Amz-Signature=8211669ef871cf45c4565b85abbc290481fa740b69b3f99b57f42879f33ea0ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTQJVMDO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCgRjM3QPRHhPJYlInAelHDPT2R0NdPHzXT6gVuE3uAiwIhANO190k1bEusoCB6obiQGnrA7hx7QvARvemeEG36DlIhKv8DCF8QABoMNjM3NDIzMTgzODA1IgytxWwaGgLKUk20ynMq3AO%2FOaGhVdxMe3hwef7AkVFqsAVfJz3lm%2F4xvK%2BA5mGdMzi2TdKO4HKCmBp%2F9GY1GirAWJsVMTRzlC2xuzHE%2F3%2F2XCDGSlrBSaK4elURf%2BquXX49N9k5KtcUPmKDVKI54Vx8rlruk9K5lYH92CBy7jgW%2BZqOk7ZoYXPQ2WCIi8XdP%2Fr9n3DMiqD5Yb8FnMxJJv2U3%2F%2FARSue8ZBktJcUkgZ8d0fNumciHYg2%2BXYRLtsdXQFgGlkWW3oPW3V5Ol2155gQtGdhu25M8W1SkW%2BeBMex4HxjRw9SYKs1NU3po%2FCp240yQCKBMy0wr0ZhbyE1on4M9oV7FggZHzMZrcatl6l9t%2BqgYPjX2nJvZ45sBPO%2F6a4NG2IjGeljbwQpZod3XtoodkNXntGJN6szOT91QDPTMgy4b6NrLJPJB8DM2cBJVJBDRk19%2FdQ22Tldelw%2BZC2kqruh3wliPgh5YRN3Re%2BIByAL6DuBTEZgPV1G9afgOH%2BhKXpywVFfN3VQeqKop6Y%2BXuIRFIbzGobnPwWxa5kPj6WeKS4iSy8LprvA6ZNdQKGdfSoWR%2FfQxIXS4p8qq8qEQrb0on20QdUzmyg%2FMTD83fIdJGkKL5NI4xIJgvO3G0xGK39AZUGCXEMMzDCb%2BpK9BjqkAeneyjBMGynZagaNx7gX1%2Fqu5t9BIzr0jy%2FjWT8v%2BA%2FR90s%2FnNMaeCf9kbaaElIlFXSkKcZJs0atMtD1T9ub2LznXxk6kXxvNaOxUUqPVcLLJNj2sfK4HK%2BJTcOfeZ%2Fs26f62ekVsGP%2F4GBSDvzxbvtz8yGA%2FxtAemDg%2BicSqgrX9W665bKZ9EUsh4cs4fk3X407iWnH1f6PkahdLwGE1fY0LnsK&X-Amz-Signature=fcac0edb80b9162f894384e150f1d492374480be924c27d3f87af72ad93d25a6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTQJVMDO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCgRjM3QPRHhPJYlInAelHDPT2R0NdPHzXT6gVuE3uAiwIhANO190k1bEusoCB6obiQGnrA7hx7QvARvemeEG36DlIhKv8DCF8QABoMNjM3NDIzMTgzODA1IgytxWwaGgLKUk20ynMq3AO%2FOaGhVdxMe3hwef7AkVFqsAVfJz3lm%2F4xvK%2BA5mGdMzi2TdKO4HKCmBp%2F9GY1GirAWJsVMTRzlC2xuzHE%2F3%2F2XCDGSlrBSaK4elURf%2BquXX49N9k5KtcUPmKDVKI54Vx8rlruk9K5lYH92CBy7jgW%2BZqOk7ZoYXPQ2WCIi8XdP%2Fr9n3DMiqD5Yb8FnMxJJv2U3%2F%2FARSue8ZBktJcUkgZ8d0fNumciHYg2%2BXYRLtsdXQFgGlkWW3oPW3V5Ol2155gQtGdhu25M8W1SkW%2BeBMex4HxjRw9SYKs1NU3po%2FCp240yQCKBMy0wr0ZhbyE1on4M9oV7FggZHzMZrcatl6l9t%2BqgYPjX2nJvZ45sBPO%2F6a4NG2IjGeljbwQpZod3XtoodkNXntGJN6szOT91QDPTMgy4b6NrLJPJB8DM2cBJVJBDRk19%2FdQ22Tldelw%2BZC2kqruh3wliPgh5YRN3Re%2BIByAL6DuBTEZgPV1G9afgOH%2BhKXpywVFfN3VQeqKop6Y%2BXuIRFIbzGobnPwWxa5kPj6WeKS4iSy8LprvA6ZNdQKGdfSoWR%2FfQxIXS4p8qq8qEQrb0on20QdUzmyg%2FMTD83fIdJGkKL5NI4xIJgvO3G0xGK39AZUGCXEMMzDCb%2BpK9BjqkAeneyjBMGynZagaNx7gX1%2Fqu5t9BIzr0jy%2FjWT8v%2BA%2FR90s%2FnNMaeCf9kbaaElIlFXSkKcZJs0atMtD1T9ub2LznXxk6kXxvNaOxUUqPVcLLJNj2sfK4HK%2BJTcOfeZ%2Fs26f62ekVsGP%2F4GBSDvzxbvtz8yGA%2FxtAemDg%2BicSqgrX9W665bKZ9EUsh4cs4fk3X407iWnH1f6PkahdLwGE1fY0LnsK&X-Amz-Signature=171bae9ca20fb9e2efae84c9e4480f9fe09c6217f85cdd40dc003a38a259b59b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTQJVMDO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCgRjM3QPRHhPJYlInAelHDPT2R0NdPHzXT6gVuE3uAiwIhANO190k1bEusoCB6obiQGnrA7hx7QvARvemeEG36DlIhKv8DCF8QABoMNjM3NDIzMTgzODA1IgytxWwaGgLKUk20ynMq3AO%2FOaGhVdxMe3hwef7AkVFqsAVfJz3lm%2F4xvK%2BA5mGdMzi2TdKO4HKCmBp%2F9GY1GirAWJsVMTRzlC2xuzHE%2F3%2F2XCDGSlrBSaK4elURf%2BquXX49N9k5KtcUPmKDVKI54Vx8rlruk9K5lYH92CBy7jgW%2BZqOk7ZoYXPQ2WCIi8XdP%2Fr9n3DMiqD5Yb8FnMxJJv2U3%2F%2FARSue8ZBktJcUkgZ8d0fNumciHYg2%2BXYRLtsdXQFgGlkWW3oPW3V5Ol2155gQtGdhu25M8W1SkW%2BeBMex4HxjRw9SYKs1NU3po%2FCp240yQCKBMy0wr0ZhbyE1on4M9oV7FggZHzMZrcatl6l9t%2BqgYPjX2nJvZ45sBPO%2F6a4NG2IjGeljbwQpZod3XtoodkNXntGJN6szOT91QDPTMgy4b6NrLJPJB8DM2cBJVJBDRk19%2FdQ22Tldelw%2BZC2kqruh3wliPgh5YRN3Re%2BIByAL6DuBTEZgPV1G9afgOH%2BhKXpywVFfN3VQeqKop6Y%2BXuIRFIbzGobnPwWxa5kPj6WeKS4iSy8LprvA6ZNdQKGdfSoWR%2FfQxIXS4p8qq8qEQrb0on20QdUzmyg%2FMTD83fIdJGkKL5NI4xIJgvO3G0xGK39AZUGCXEMMzDCb%2BpK9BjqkAeneyjBMGynZagaNx7gX1%2Fqu5t9BIzr0jy%2FjWT8v%2BA%2FR90s%2FnNMaeCf9kbaaElIlFXSkKcZJs0atMtD1T9ub2LznXxk6kXxvNaOxUUqPVcLLJNj2sfK4HK%2BJTcOfeZ%2Fs26f62ekVsGP%2F4GBSDvzxbvtz8yGA%2FxtAemDg%2BicSqgrX9W665bKZ9EUsh4cs4fk3X407iWnH1f6PkahdLwGE1fY0LnsK&X-Amz-Signature=d828a0a58320ec7f9d7cd1cc1a25d2bce0aac54b59dc1da39a901c3a11af0ca2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTQJVMDO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCgRjM3QPRHhPJYlInAelHDPT2R0NdPHzXT6gVuE3uAiwIhANO190k1bEusoCB6obiQGnrA7hx7QvARvemeEG36DlIhKv8DCF8QABoMNjM3NDIzMTgzODA1IgytxWwaGgLKUk20ynMq3AO%2FOaGhVdxMe3hwef7AkVFqsAVfJz3lm%2F4xvK%2BA5mGdMzi2TdKO4HKCmBp%2F9GY1GirAWJsVMTRzlC2xuzHE%2F3%2F2XCDGSlrBSaK4elURf%2BquXX49N9k5KtcUPmKDVKI54Vx8rlruk9K5lYH92CBy7jgW%2BZqOk7ZoYXPQ2WCIi8XdP%2Fr9n3DMiqD5Yb8FnMxJJv2U3%2F%2FARSue8ZBktJcUkgZ8d0fNumciHYg2%2BXYRLtsdXQFgGlkWW3oPW3V5Ol2155gQtGdhu25M8W1SkW%2BeBMex4HxjRw9SYKs1NU3po%2FCp240yQCKBMy0wr0ZhbyE1on4M9oV7FggZHzMZrcatl6l9t%2BqgYPjX2nJvZ45sBPO%2F6a4NG2IjGeljbwQpZod3XtoodkNXntGJN6szOT91QDPTMgy4b6NrLJPJB8DM2cBJVJBDRk19%2FdQ22Tldelw%2BZC2kqruh3wliPgh5YRN3Re%2BIByAL6DuBTEZgPV1G9afgOH%2BhKXpywVFfN3VQeqKop6Y%2BXuIRFIbzGobnPwWxa5kPj6WeKS4iSy8LprvA6ZNdQKGdfSoWR%2FfQxIXS4p8qq8qEQrb0on20QdUzmyg%2FMTD83fIdJGkKL5NI4xIJgvO3G0xGK39AZUGCXEMMzDCb%2BpK9BjqkAeneyjBMGynZagaNx7gX1%2Fqu5t9BIzr0jy%2FjWT8v%2BA%2FR90s%2FnNMaeCf9kbaaElIlFXSkKcZJs0atMtD1T9ub2LznXxk6kXxvNaOxUUqPVcLLJNj2sfK4HK%2BJTcOfeZ%2Fs26f62ekVsGP%2F4GBSDvzxbvtz8yGA%2FxtAemDg%2BicSqgrX9W665bKZ9EUsh4cs4fk3X407iWnH1f6PkahdLwGE1fY0LnsK&X-Amz-Signature=04fe2d7dd4322dccc19d522308482cb5852c94564cc5f3194f5076f8aa145dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTQJVMDO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCgRjM3QPRHhPJYlInAelHDPT2R0NdPHzXT6gVuE3uAiwIhANO190k1bEusoCB6obiQGnrA7hx7QvARvemeEG36DlIhKv8DCF8QABoMNjM3NDIzMTgzODA1IgytxWwaGgLKUk20ynMq3AO%2FOaGhVdxMe3hwef7AkVFqsAVfJz3lm%2F4xvK%2BA5mGdMzi2TdKO4HKCmBp%2F9GY1GirAWJsVMTRzlC2xuzHE%2F3%2F2XCDGSlrBSaK4elURf%2BquXX49N9k5KtcUPmKDVKI54Vx8rlruk9K5lYH92CBy7jgW%2BZqOk7ZoYXPQ2WCIi8XdP%2Fr9n3DMiqD5Yb8FnMxJJv2U3%2F%2FARSue8ZBktJcUkgZ8d0fNumciHYg2%2BXYRLtsdXQFgGlkWW3oPW3V5Ol2155gQtGdhu25M8W1SkW%2BeBMex4HxjRw9SYKs1NU3po%2FCp240yQCKBMy0wr0ZhbyE1on4M9oV7FggZHzMZrcatl6l9t%2BqgYPjX2nJvZ45sBPO%2F6a4NG2IjGeljbwQpZod3XtoodkNXntGJN6szOT91QDPTMgy4b6NrLJPJB8DM2cBJVJBDRk19%2FdQ22Tldelw%2BZC2kqruh3wliPgh5YRN3Re%2BIByAL6DuBTEZgPV1G9afgOH%2BhKXpywVFfN3VQeqKop6Y%2BXuIRFIbzGobnPwWxa5kPj6WeKS4iSy8LprvA6ZNdQKGdfSoWR%2FfQxIXS4p8qq8qEQrb0on20QdUzmyg%2FMTD83fIdJGkKL5NI4xIJgvO3G0xGK39AZUGCXEMMzDCb%2BpK9BjqkAeneyjBMGynZagaNx7gX1%2Fqu5t9BIzr0jy%2FjWT8v%2BA%2FR90s%2FnNMaeCf9kbaaElIlFXSkKcZJs0atMtD1T9ub2LznXxk6kXxvNaOxUUqPVcLLJNj2sfK4HK%2BJTcOfeZ%2Fs26f62ekVsGP%2F4GBSDvzxbvtz8yGA%2FxtAemDg%2BicSqgrX9W665bKZ9EUsh4cs4fk3X407iWnH1f6PkahdLwGE1fY0LnsK&X-Amz-Signature=a97536ee12bf45919f80468f33ea36258b777ac24a8008bad450462fb4693083&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTQJVMDO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCgRjM3QPRHhPJYlInAelHDPT2R0NdPHzXT6gVuE3uAiwIhANO190k1bEusoCB6obiQGnrA7hx7QvARvemeEG36DlIhKv8DCF8QABoMNjM3NDIzMTgzODA1IgytxWwaGgLKUk20ynMq3AO%2FOaGhVdxMe3hwef7AkVFqsAVfJz3lm%2F4xvK%2BA5mGdMzi2TdKO4HKCmBp%2F9GY1GirAWJsVMTRzlC2xuzHE%2F3%2F2XCDGSlrBSaK4elURf%2BquXX49N9k5KtcUPmKDVKI54Vx8rlruk9K5lYH92CBy7jgW%2BZqOk7ZoYXPQ2WCIi8XdP%2Fr9n3DMiqD5Yb8FnMxJJv2U3%2F%2FARSue8ZBktJcUkgZ8d0fNumciHYg2%2BXYRLtsdXQFgGlkWW3oPW3V5Ol2155gQtGdhu25M8W1SkW%2BeBMex4HxjRw9SYKs1NU3po%2FCp240yQCKBMy0wr0ZhbyE1on4M9oV7FggZHzMZrcatl6l9t%2BqgYPjX2nJvZ45sBPO%2F6a4NG2IjGeljbwQpZod3XtoodkNXntGJN6szOT91QDPTMgy4b6NrLJPJB8DM2cBJVJBDRk19%2FdQ22Tldelw%2BZC2kqruh3wliPgh5YRN3Re%2BIByAL6DuBTEZgPV1G9afgOH%2BhKXpywVFfN3VQeqKop6Y%2BXuIRFIbzGobnPwWxa5kPj6WeKS4iSy8LprvA6ZNdQKGdfSoWR%2FfQxIXS4p8qq8qEQrb0on20QdUzmyg%2FMTD83fIdJGkKL5NI4xIJgvO3G0xGK39AZUGCXEMMzDCb%2BpK9BjqkAeneyjBMGynZagaNx7gX1%2Fqu5t9BIzr0jy%2FjWT8v%2BA%2FR90s%2FnNMaeCf9kbaaElIlFXSkKcZJs0atMtD1T9ub2LznXxk6kXxvNaOxUUqPVcLLJNj2sfK4HK%2BJTcOfeZ%2Fs26f62ekVsGP%2F4GBSDvzxbvtz8yGA%2FxtAemDg%2BicSqgrX9W665bKZ9EUsh4cs4fk3X407iWnH1f6PkahdLwGE1fY0LnsK&X-Amz-Signature=8feed1a9e513730c5a30ed6c9e0e8fc4bba185d8e48771c704b5b5b8ac6523f5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
