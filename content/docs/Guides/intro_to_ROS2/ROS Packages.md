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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ6D5LQU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADKllQ3z%2FBYaDHzC%2F97InRQDGgyyE%2FsN46N224oIQS4AiBL%2B3elH%2FbMwXslJcFOGEVbOaPYYBKKnkWGcRhAnQZfLiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg8aXHOb%2BhuLA3VYqKtwDe%2BioK%2FF2pUCb89TUqmFoIt5wt9VnHnshWinMcu%2F6XIYtiP3TFWDDn64XPyM4i%2BrNM85urN92Aupv4oZmo5Tn7GZhIBsFmt3Tw%2BzOcdacxZuCVtkZYqX8Ge7JszaSI0y7CwmQG%2Fu%2BkH9tkEkQNcH63g4jgonaC4jF8KmJF%2F3QqYKNXpEfR3U8M5kikZKgxtw%2FjuDc0ed5QhHVot7GlP7V4kEB5XIoT8dTBCt9BXvF%2FAuaU4ENaDAeq0GQqyIMhGpmoL11Um3m2lyy9ZQaIpOjnxKAV8bku%2FMKcD68vQYIgYZigzeU7jbAvb9XzJhmJErIxAx9Fl3yq%2B1JhnODZPdDPMu8MuNHCjdjrMSydjmS8gJFdkW2y34NLrdk4V0lVm1mDo3UXzw%2BXCNWmq17vqIl6tsFWNxatdsxg%2BdEYf4hEwqI4gErsUp2S%2BE%2BBCeXFNqo9DtqqCrE8FtAgEtNV5itgvz4lxeLQgwO4De%2BfHz7tSIQUlujY20%2Bysj6Be4OI2dUY984rF9m%2BQD9YAeKgYMk8YE6ILiMvIM%2B3RspgFMUnDU3eZGxtW5Hi%2FiQiKXLxjx1QR9fFpTHYW3rK%2BtLgoeCFS9YjkeJVa%2BppesL8iTvxljNnDlQvnYPWon%2Fp0cw9cqhwgY6pgE5PwgyeHV0WWaL%2FhOpvg8z%2BW%2FG5Eksev8hMeqYYDKoFaMx%2FmAS1mmLUiq6RWkrVCMSNhphuZL3mGi4OJvVtpS4tgiaYZiHfoG%2BfqU6C65tR%2Fcz2EOyb5V4CfZVOzL95iwhtD7o5GGL3aGjYSOLmIXD%2BEyBiS%2BEEA7PlavHoqmZnCa1zUT46lpcuf8u8Pcqr0yuM3FKECKw3lMFf%2FErKmy8TVyA5qwR&X-Amz-Signature=0b6b4ac504c2a7e698e6fae9c00ac1c549fde11a34ed55d22b9182385e947492&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ6D5LQU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADKllQ3z%2FBYaDHzC%2F97InRQDGgyyE%2FsN46N224oIQS4AiBL%2B3elH%2FbMwXslJcFOGEVbOaPYYBKKnkWGcRhAnQZfLiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg8aXHOb%2BhuLA3VYqKtwDe%2BioK%2FF2pUCb89TUqmFoIt5wt9VnHnshWinMcu%2F6XIYtiP3TFWDDn64XPyM4i%2BrNM85urN92Aupv4oZmo5Tn7GZhIBsFmt3Tw%2BzOcdacxZuCVtkZYqX8Ge7JszaSI0y7CwmQG%2Fu%2BkH9tkEkQNcH63g4jgonaC4jF8KmJF%2F3QqYKNXpEfR3U8M5kikZKgxtw%2FjuDc0ed5QhHVot7GlP7V4kEB5XIoT8dTBCt9BXvF%2FAuaU4ENaDAeq0GQqyIMhGpmoL11Um3m2lyy9ZQaIpOjnxKAV8bku%2FMKcD68vQYIgYZigzeU7jbAvb9XzJhmJErIxAx9Fl3yq%2B1JhnODZPdDPMu8MuNHCjdjrMSydjmS8gJFdkW2y34NLrdk4V0lVm1mDo3UXzw%2BXCNWmq17vqIl6tsFWNxatdsxg%2BdEYf4hEwqI4gErsUp2S%2BE%2BBCeXFNqo9DtqqCrE8FtAgEtNV5itgvz4lxeLQgwO4De%2BfHz7tSIQUlujY20%2Bysj6Be4OI2dUY984rF9m%2BQD9YAeKgYMk8YE6ILiMvIM%2B3RspgFMUnDU3eZGxtW5Hi%2FiQiKXLxjx1QR9fFpTHYW3rK%2BtLgoeCFS9YjkeJVa%2BppesL8iTvxljNnDlQvnYPWon%2Fp0cw9cqhwgY6pgE5PwgyeHV0WWaL%2FhOpvg8z%2BW%2FG5Eksev8hMeqYYDKoFaMx%2FmAS1mmLUiq6RWkrVCMSNhphuZL3mGi4OJvVtpS4tgiaYZiHfoG%2BfqU6C65tR%2Fcz2EOyb5V4CfZVOzL95iwhtD7o5GGL3aGjYSOLmIXD%2BEyBiS%2BEEA7PlavHoqmZnCa1zUT46lpcuf8u8Pcqr0yuM3FKECKw3lMFf%2FErKmy8TVyA5qwR&X-Amz-Signature=27f18657e00fe6e7e8e4e5820084e73dce64f2921fe3c3e29b3dfba2c844611d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ6D5LQU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADKllQ3z%2FBYaDHzC%2F97InRQDGgyyE%2FsN46N224oIQS4AiBL%2B3elH%2FbMwXslJcFOGEVbOaPYYBKKnkWGcRhAnQZfLiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg8aXHOb%2BhuLA3VYqKtwDe%2BioK%2FF2pUCb89TUqmFoIt5wt9VnHnshWinMcu%2F6XIYtiP3TFWDDn64XPyM4i%2BrNM85urN92Aupv4oZmo5Tn7GZhIBsFmt3Tw%2BzOcdacxZuCVtkZYqX8Ge7JszaSI0y7CwmQG%2Fu%2BkH9tkEkQNcH63g4jgonaC4jF8KmJF%2F3QqYKNXpEfR3U8M5kikZKgxtw%2FjuDc0ed5QhHVot7GlP7V4kEB5XIoT8dTBCt9BXvF%2FAuaU4ENaDAeq0GQqyIMhGpmoL11Um3m2lyy9ZQaIpOjnxKAV8bku%2FMKcD68vQYIgYZigzeU7jbAvb9XzJhmJErIxAx9Fl3yq%2B1JhnODZPdDPMu8MuNHCjdjrMSydjmS8gJFdkW2y34NLrdk4V0lVm1mDo3UXzw%2BXCNWmq17vqIl6tsFWNxatdsxg%2BdEYf4hEwqI4gErsUp2S%2BE%2BBCeXFNqo9DtqqCrE8FtAgEtNV5itgvz4lxeLQgwO4De%2BfHz7tSIQUlujY20%2Bysj6Be4OI2dUY984rF9m%2BQD9YAeKgYMk8YE6ILiMvIM%2B3RspgFMUnDU3eZGxtW5Hi%2FiQiKXLxjx1QR9fFpTHYW3rK%2BtLgoeCFS9YjkeJVa%2BppesL8iTvxljNnDlQvnYPWon%2Fp0cw9cqhwgY6pgE5PwgyeHV0WWaL%2FhOpvg8z%2BW%2FG5Eksev8hMeqYYDKoFaMx%2FmAS1mmLUiq6RWkrVCMSNhphuZL3mGi4OJvVtpS4tgiaYZiHfoG%2BfqU6C65tR%2Fcz2EOyb5V4CfZVOzL95iwhtD7o5GGL3aGjYSOLmIXD%2BEyBiS%2BEEA7PlavHoqmZnCa1zUT46lpcuf8u8Pcqr0yuM3FKECKw3lMFf%2FErKmy8TVyA5qwR&X-Amz-Signature=d17176838e4bb1a8f543e7985883a501ece3616efd7ee8e8a50f9756ca75f034&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ6D5LQU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADKllQ3z%2FBYaDHzC%2F97InRQDGgyyE%2FsN46N224oIQS4AiBL%2B3elH%2FbMwXslJcFOGEVbOaPYYBKKnkWGcRhAnQZfLiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg8aXHOb%2BhuLA3VYqKtwDe%2BioK%2FF2pUCb89TUqmFoIt5wt9VnHnshWinMcu%2F6XIYtiP3TFWDDn64XPyM4i%2BrNM85urN92Aupv4oZmo5Tn7GZhIBsFmt3Tw%2BzOcdacxZuCVtkZYqX8Ge7JszaSI0y7CwmQG%2Fu%2BkH9tkEkQNcH63g4jgonaC4jF8KmJF%2F3QqYKNXpEfR3U8M5kikZKgxtw%2FjuDc0ed5QhHVot7GlP7V4kEB5XIoT8dTBCt9BXvF%2FAuaU4ENaDAeq0GQqyIMhGpmoL11Um3m2lyy9ZQaIpOjnxKAV8bku%2FMKcD68vQYIgYZigzeU7jbAvb9XzJhmJErIxAx9Fl3yq%2B1JhnODZPdDPMu8MuNHCjdjrMSydjmS8gJFdkW2y34NLrdk4V0lVm1mDo3UXzw%2BXCNWmq17vqIl6tsFWNxatdsxg%2BdEYf4hEwqI4gErsUp2S%2BE%2BBCeXFNqo9DtqqCrE8FtAgEtNV5itgvz4lxeLQgwO4De%2BfHz7tSIQUlujY20%2Bysj6Be4OI2dUY984rF9m%2BQD9YAeKgYMk8YE6ILiMvIM%2B3RspgFMUnDU3eZGxtW5Hi%2FiQiKXLxjx1QR9fFpTHYW3rK%2BtLgoeCFS9YjkeJVa%2BppesL8iTvxljNnDlQvnYPWon%2Fp0cw9cqhwgY6pgE5PwgyeHV0WWaL%2FhOpvg8z%2BW%2FG5Eksev8hMeqYYDKoFaMx%2FmAS1mmLUiq6RWkrVCMSNhphuZL3mGi4OJvVtpS4tgiaYZiHfoG%2BfqU6C65tR%2Fcz2EOyb5V4CfZVOzL95iwhtD7o5GGL3aGjYSOLmIXD%2BEyBiS%2BEEA7PlavHoqmZnCa1zUT46lpcuf8u8Pcqr0yuM3FKECKw3lMFf%2FErKmy8TVyA5qwR&X-Amz-Signature=7d102aba1902307489a8201c4a79cf5525c6c232e2c127170e79d1d5dacd1f02&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ6D5LQU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADKllQ3z%2FBYaDHzC%2F97InRQDGgyyE%2FsN46N224oIQS4AiBL%2B3elH%2FbMwXslJcFOGEVbOaPYYBKKnkWGcRhAnQZfLiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg8aXHOb%2BhuLA3VYqKtwDe%2BioK%2FF2pUCb89TUqmFoIt5wt9VnHnshWinMcu%2F6XIYtiP3TFWDDn64XPyM4i%2BrNM85urN92Aupv4oZmo5Tn7GZhIBsFmt3Tw%2BzOcdacxZuCVtkZYqX8Ge7JszaSI0y7CwmQG%2Fu%2BkH9tkEkQNcH63g4jgonaC4jF8KmJF%2F3QqYKNXpEfR3U8M5kikZKgxtw%2FjuDc0ed5QhHVot7GlP7V4kEB5XIoT8dTBCt9BXvF%2FAuaU4ENaDAeq0GQqyIMhGpmoL11Um3m2lyy9ZQaIpOjnxKAV8bku%2FMKcD68vQYIgYZigzeU7jbAvb9XzJhmJErIxAx9Fl3yq%2B1JhnODZPdDPMu8MuNHCjdjrMSydjmS8gJFdkW2y34NLrdk4V0lVm1mDo3UXzw%2BXCNWmq17vqIl6tsFWNxatdsxg%2BdEYf4hEwqI4gErsUp2S%2BE%2BBCeXFNqo9DtqqCrE8FtAgEtNV5itgvz4lxeLQgwO4De%2BfHz7tSIQUlujY20%2Bysj6Be4OI2dUY984rF9m%2BQD9YAeKgYMk8YE6ILiMvIM%2B3RspgFMUnDU3eZGxtW5Hi%2FiQiKXLxjx1QR9fFpTHYW3rK%2BtLgoeCFS9YjkeJVa%2BppesL8iTvxljNnDlQvnYPWon%2Fp0cw9cqhwgY6pgE5PwgyeHV0WWaL%2FhOpvg8z%2BW%2FG5Eksev8hMeqYYDKoFaMx%2FmAS1mmLUiq6RWkrVCMSNhphuZL3mGi4OJvVtpS4tgiaYZiHfoG%2BfqU6C65tR%2Fcz2EOyb5V4CfZVOzL95iwhtD7o5GGL3aGjYSOLmIXD%2BEyBiS%2BEEA7PlavHoqmZnCa1zUT46lpcuf8u8Pcqr0yuM3FKECKw3lMFf%2FErKmy8TVyA5qwR&X-Amz-Signature=775f96ccbee96d0bc29b97549d81a7f2af1a1d1ebdbede2b97132aed1f12ca06&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ6D5LQU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADKllQ3z%2FBYaDHzC%2F97InRQDGgyyE%2FsN46N224oIQS4AiBL%2B3elH%2FbMwXslJcFOGEVbOaPYYBKKnkWGcRhAnQZfLiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg8aXHOb%2BhuLA3VYqKtwDe%2BioK%2FF2pUCb89TUqmFoIt5wt9VnHnshWinMcu%2F6XIYtiP3TFWDDn64XPyM4i%2BrNM85urN92Aupv4oZmo5Tn7GZhIBsFmt3Tw%2BzOcdacxZuCVtkZYqX8Ge7JszaSI0y7CwmQG%2Fu%2BkH9tkEkQNcH63g4jgonaC4jF8KmJF%2F3QqYKNXpEfR3U8M5kikZKgxtw%2FjuDc0ed5QhHVot7GlP7V4kEB5XIoT8dTBCt9BXvF%2FAuaU4ENaDAeq0GQqyIMhGpmoL11Um3m2lyy9ZQaIpOjnxKAV8bku%2FMKcD68vQYIgYZigzeU7jbAvb9XzJhmJErIxAx9Fl3yq%2B1JhnODZPdDPMu8MuNHCjdjrMSydjmS8gJFdkW2y34NLrdk4V0lVm1mDo3UXzw%2BXCNWmq17vqIl6tsFWNxatdsxg%2BdEYf4hEwqI4gErsUp2S%2BE%2BBCeXFNqo9DtqqCrE8FtAgEtNV5itgvz4lxeLQgwO4De%2BfHz7tSIQUlujY20%2Bysj6Be4OI2dUY984rF9m%2BQD9YAeKgYMk8YE6ILiMvIM%2B3RspgFMUnDU3eZGxtW5Hi%2FiQiKXLxjx1QR9fFpTHYW3rK%2BtLgoeCFS9YjkeJVa%2BppesL8iTvxljNnDlQvnYPWon%2Fp0cw9cqhwgY6pgE5PwgyeHV0WWaL%2FhOpvg8z%2BW%2FG5Eksev8hMeqYYDKoFaMx%2FmAS1mmLUiq6RWkrVCMSNhphuZL3mGi4OJvVtpS4tgiaYZiHfoG%2BfqU6C65tR%2Fcz2EOyb5V4CfZVOzL95iwhtD7o5GGL3aGjYSOLmIXD%2BEyBiS%2BEEA7PlavHoqmZnCa1zUT46lpcuf8u8Pcqr0yuM3FKECKw3lMFf%2FErKmy8TVyA5qwR&X-Amz-Signature=42272ad1cace18a19f82369c59c727441fa41bdabab340214470924db272be18&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ6D5LQU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADKllQ3z%2FBYaDHzC%2F97InRQDGgyyE%2FsN46N224oIQS4AiBL%2B3elH%2FbMwXslJcFOGEVbOaPYYBKKnkWGcRhAnQZfLiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg8aXHOb%2BhuLA3VYqKtwDe%2BioK%2FF2pUCb89TUqmFoIt5wt9VnHnshWinMcu%2F6XIYtiP3TFWDDn64XPyM4i%2BrNM85urN92Aupv4oZmo5Tn7GZhIBsFmt3Tw%2BzOcdacxZuCVtkZYqX8Ge7JszaSI0y7CwmQG%2Fu%2BkH9tkEkQNcH63g4jgonaC4jF8KmJF%2F3QqYKNXpEfR3U8M5kikZKgxtw%2FjuDc0ed5QhHVot7GlP7V4kEB5XIoT8dTBCt9BXvF%2FAuaU4ENaDAeq0GQqyIMhGpmoL11Um3m2lyy9ZQaIpOjnxKAV8bku%2FMKcD68vQYIgYZigzeU7jbAvb9XzJhmJErIxAx9Fl3yq%2B1JhnODZPdDPMu8MuNHCjdjrMSydjmS8gJFdkW2y34NLrdk4V0lVm1mDo3UXzw%2BXCNWmq17vqIl6tsFWNxatdsxg%2BdEYf4hEwqI4gErsUp2S%2BE%2BBCeXFNqo9DtqqCrE8FtAgEtNV5itgvz4lxeLQgwO4De%2BfHz7tSIQUlujY20%2Bysj6Be4OI2dUY984rF9m%2BQD9YAeKgYMk8YE6ILiMvIM%2B3RspgFMUnDU3eZGxtW5Hi%2FiQiKXLxjx1QR9fFpTHYW3rK%2BtLgoeCFS9YjkeJVa%2BppesL8iTvxljNnDlQvnYPWon%2Fp0cw9cqhwgY6pgE5PwgyeHV0WWaL%2FhOpvg8z%2BW%2FG5Eksev8hMeqYYDKoFaMx%2FmAS1mmLUiq6RWkrVCMSNhphuZL3mGi4OJvVtpS4tgiaYZiHfoG%2BfqU6C65tR%2Fcz2EOyb5V4CfZVOzL95iwhtD7o5GGL3aGjYSOLmIXD%2BEyBiS%2BEEA7PlavHoqmZnCa1zUT46lpcuf8u8Pcqr0yuM3FKECKw3lMFf%2FErKmy8TVyA5qwR&X-Amz-Signature=b23d0100ca1555a51200538c6090fdf2ae23179b29f492fb21d9e566c35d641a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
