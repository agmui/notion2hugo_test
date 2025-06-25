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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSE3XBT%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEIIdoceXTlm39EIUdSHckDzHxa3R1DeFqvOgH3Wx%2Br6AiAmktnBR0PpS8cUnf47aFT1nzLWYidQ3S9nKvLwroGO6Sr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM7R2DDbADT4qVnuqEKtwDZCoBzEcYf6qJ8zw4LPEKkGITMGyo16QHScUiuVQ1AjRQG4f0dzA6Ncym0%2FiGuPdrbfUS5cmuYdAN8GLiLWLBouIHDS3dc6P3DKPGJgeyg0GMDZOIe0Z7BfM%2FR6%2B4ShaHHDFTZkmYMy82X06iIKGmJj4S9Nig6WTsUI9DON8d%2Bt22o%2FwDQb7BOUodIPkq3BbVFUe2cHwrMPI9tQDc4zSXzLUkPuuscyHPaMVI5Q8n7wFCNMYMFt13Zh3bk44iM7k5sF2a%2FIDdjI10%2Bm7K6ZP50zMcwgXTJOP5Oq1os3sQzG%2FLxFSYBIolswywikCIXNZ6%2BOTRwLywnXGYHgBeKWIUA2h%2FwQNkIxGAg%2BP89%2Fk8uNWMy7bLo1j7Ks1kN72q41UUBDI8RaXIag5f7qonKKVEadJ%2B3L1mr55i%2F0yM6wdNk5kZmv8rrK3ynMSs6oeWgPAD%2FEWJLoNUHjFfDAoQbKrwwuKt%2FNwGqaMeZTNU3BZect4Ju2yU0X5Xft3hU92cOSsEZyoYSd6%2FketiPmow1261wIwEHuRSYpUKpVWqAM3dCDmmpOTGAZdkiUIrO9rbj9AkuxjHKZ7Blq49WPo3SJYq3RB%2BNSzRidambpmBDDI8o%2BPXioAwbRIsnhVCL3cw0%2B7vwgY6pgFY0o3ftVdOPfacOzjJOQIor8UmO%2FKt0ZsE1t%2FxxEEQK4kK9t6xDAAu12QoJgLkKS3%2B4pyOJvf4EATR3zaWjktvI1K607ZYtuG2EJbYId5XH%2Fv%2Bj4780LSWhkc1Ke1Yaamnu1oNiurZ4JfNw9DggsmqN4XkomZfBHQPdC7wbcU6lpGTHOBfVZRM8JbN4vaovf2uQlYjWbDs1LFcN2fH3yCYPUCnnqNQ&X-Amz-Signature=9c0dd408724ff9341b7da4dd2de8244141d43e5c53fc68a89541c974122f7382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSE3XBT%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEIIdoceXTlm39EIUdSHckDzHxa3R1DeFqvOgH3Wx%2Br6AiAmktnBR0PpS8cUnf47aFT1nzLWYidQ3S9nKvLwroGO6Sr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM7R2DDbADT4qVnuqEKtwDZCoBzEcYf6qJ8zw4LPEKkGITMGyo16QHScUiuVQ1AjRQG4f0dzA6Ncym0%2FiGuPdrbfUS5cmuYdAN8GLiLWLBouIHDS3dc6P3DKPGJgeyg0GMDZOIe0Z7BfM%2FR6%2B4ShaHHDFTZkmYMy82X06iIKGmJj4S9Nig6WTsUI9DON8d%2Bt22o%2FwDQb7BOUodIPkq3BbVFUe2cHwrMPI9tQDc4zSXzLUkPuuscyHPaMVI5Q8n7wFCNMYMFt13Zh3bk44iM7k5sF2a%2FIDdjI10%2Bm7K6ZP50zMcwgXTJOP5Oq1os3sQzG%2FLxFSYBIolswywikCIXNZ6%2BOTRwLywnXGYHgBeKWIUA2h%2FwQNkIxGAg%2BP89%2Fk8uNWMy7bLo1j7Ks1kN72q41UUBDI8RaXIag5f7qonKKVEadJ%2B3L1mr55i%2F0yM6wdNk5kZmv8rrK3ynMSs6oeWgPAD%2FEWJLoNUHjFfDAoQbKrwwuKt%2FNwGqaMeZTNU3BZect4Ju2yU0X5Xft3hU92cOSsEZyoYSd6%2FketiPmow1261wIwEHuRSYpUKpVWqAM3dCDmmpOTGAZdkiUIrO9rbj9AkuxjHKZ7Blq49WPo3SJYq3RB%2BNSzRidambpmBDDI8o%2BPXioAwbRIsnhVCL3cw0%2B7vwgY6pgFY0o3ftVdOPfacOzjJOQIor8UmO%2FKt0ZsE1t%2FxxEEQK4kK9t6xDAAu12QoJgLkKS3%2B4pyOJvf4EATR3zaWjktvI1K607ZYtuG2EJbYId5XH%2Fv%2Bj4780LSWhkc1Ke1Yaamnu1oNiurZ4JfNw9DggsmqN4XkomZfBHQPdC7wbcU6lpGTHOBfVZRM8JbN4vaovf2uQlYjWbDs1LFcN2fH3yCYPUCnnqNQ&X-Amz-Signature=a4292b8807294d102b25f7a53961c48b1c95bfb46fb04b206fb3f433c1de5120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSE3XBT%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEIIdoceXTlm39EIUdSHckDzHxa3R1DeFqvOgH3Wx%2Br6AiAmktnBR0PpS8cUnf47aFT1nzLWYidQ3S9nKvLwroGO6Sr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM7R2DDbADT4qVnuqEKtwDZCoBzEcYf6qJ8zw4LPEKkGITMGyo16QHScUiuVQ1AjRQG4f0dzA6Ncym0%2FiGuPdrbfUS5cmuYdAN8GLiLWLBouIHDS3dc6P3DKPGJgeyg0GMDZOIe0Z7BfM%2FR6%2B4ShaHHDFTZkmYMy82X06iIKGmJj4S9Nig6WTsUI9DON8d%2Bt22o%2FwDQb7BOUodIPkq3BbVFUe2cHwrMPI9tQDc4zSXzLUkPuuscyHPaMVI5Q8n7wFCNMYMFt13Zh3bk44iM7k5sF2a%2FIDdjI10%2Bm7K6ZP50zMcwgXTJOP5Oq1os3sQzG%2FLxFSYBIolswywikCIXNZ6%2BOTRwLywnXGYHgBeKWIUA2h%2FwQNkIxGAg%2BP89%2Fk8uNWMy7bLo1j7Ks1kN72q41UUBDI8RaXIag5f7qonKKVEadJ%2B3L1mr55i%2F0yM6wdNk5kZmv8rrK3ynMSs6oeWgPAD%2FEWJLoNUHjFfDAoQbKrwwuKt%2FNwGqaMeZTNU3BZect4Ju2yU0X5Xft3hU92cOSsEZyoYSd6%2FketiPmow1261wIwEHuRSYpUKpVWqAM3dCDmmpOTGAZdkiUIrO9rbj9AkuxjHKZ7Blq49WPo3SJYq3RB%2BNSzRidambpmBDDI8o%2BPXioAwbRIsnhVCL3cw0%2B7vwgY6pgFY0o3ftVdOPfacOzjJOQIor8UmO%2FKt0ZsE1t%2FxxEEQK4kK9t6xDAAu12QoJgLkKS3%2B4pyOJvf4EATR3zaWjktvI1K607ZYtuG2EJbYId5XH%2Fv%2Bj4780LSWhkc1Ke1Yaamnu1oNiurZ4JfNw9DggsmqN4XkomZfBHQPdC7wbcU6lpGTHOBfVZRM8JbN4vaovf2uQlYjWbDs1LFcN2fH3yCYPUCnnqNQ&X-Amz-Signature=972eb783a77fc1c3a1261b0605e705cb971138e22846254615b33bbd06d96a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSE3XBT%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEIIdoceXTlm39EIUdSHckDzHxa3R1DeFqvOgH3Wx%2Br6AiAmktnBR0PpS8cUnf47aFT1nzLWYidQ3S9nKvLwroGO6Sr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM7R2DDbADT4qVnuqEKtwDZCoBzEcYf6qJ8zw4LPEKkGITMGyo16QHScUiuVQ1AjRQG4f0dzA6Ncym0%2FiGuPdrbfUS5cmuYdAN8GLiLWLBouIHDS3dc6P3DKPGJgeyg0GMDZOIe0Z7BfM%2FR6%2B4ShaHHDFTZkmYMy82X06iIKGmJj4S9Nig6WTsUI9DON8d%2Bt22o%2FwDQb7BOUodIPkq3BbVFUe2cHwrMPI9tQDc4zSXzLUkPuuscyHPaMVI5Q8n7wFCNMYMFt13Zh3bk44iM7k5sF2a%2FIDdjI10%2Bm7K6ZP50zMcwgXTJOP5Oq1os3sQzG%2FLxFSYBIolswywikCIXNZ6%2BOTRwLywnXGYHgBeKWIUA2h%2FwQNkIxGAg%2BP89%2Fk8uNWMy7bLo1j7Ks1kN72q41UUBDI8RaXIag5f7qonKKVEadJ%2B3L1mr55i%2F0yM6wdNk5kZmv8rrK3ynMSs6oeWgPAD%2FEWJLoNUHjFfDAoQbKrwwuKt%2FNwGqaMeZTNU3BZect4Ju2yU0X5Xft3hU92cOSsEZyoYSd6%2FketiPmow1261wIwEHuRSYpUKpVWqAM3dCDmmpOTGAZdkiUIrO9rbj9AkuxjHKZ7Blq49WPo3SJYq3RB%2BNSzRidambpmBDDI8o%2BPXioAwbRIsnhVCL3cw0%2B7vwgY6pgFY0o3ftVdOPfacOzjJOQIor8UmO%2FKt0ZsE1t%2FxxEEQK4kK9t6xDAAu12QoJgLkKS3%2B4pyOJvf4EATR3zaWjktvI1K607ZYtuG2EJbYId5XH%2Fv%2Bj4780LSWhkc1Ke1Yaamnu1oNiurZ4JfNw9DggsmqN4XkomZfBHQPdC7wbcU6lpGTHOBfVZRM8JbN4vaovf2uQlYjWbDs1LFcN2fH3yCYPUCnnqNQ&X-Amz-Signature=4c57628de5f9d6e7b72384a7540e06134313607a3d23c2685ea836752e05d3d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSE3XBT%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEIIdoceXTlm39EIUdSHckDzHxa3R1DeFqvOgH3Wx%2Br6AiAmktnBR0PpS8cUnf47aFT1nzLWYidQ3S9nKvLwroGO6Sr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM7R2DDbADT4qVnuqEKtwDZCoBzEcYf6qJ8zw4LPEKkGITMGyo16QHScUiuVQ1AjRQG4f0dzA6Ncym0%2FiGuPdrbfUS5cmuYdAN8GLiLWLBouIHDS3dc6P3DKPGJgeyg0GMDZOIe0Z7BfM%2FR6%2B4ShaHHDFTZkmYMy82X06iIKGmJj4S9Nig6WTsUI9DON8d%2Bt22o%2FwDQb7BOUodIPkq3BbVFUe2cHwrMPI9tQDc4zSXzLUkPuuscyHPaMVI5Q8n7wFCNMYMFt13Zh3bk44iM7k5sF2a%2FIDdjI10%2Bm7K6ZP50zMcwgXTJOP5Oq1os3sQzG%2FLxFSYBIolswywikCIXNZ6%2BOTRwLywnXGYHgBeKWIUA2h%2FwQNkIxGAg%2BP89%2Fk8uNWMy7bLo1j7Ks1kN72q41UUBDI8RaXIag5f7qonKKVEadJ%2B3L1mr55i%2F0yM6wdNk5kZmv8rrK3ynMSs6oeWgPAD%2FEWJLoNUHjFfDAoQbKrwwuKt%2FNwGqaMeZTNU3BZect4Ju2yU0X5Xft3hU92cOSsEZyoYSd6%2FketiPmow1261wIwEHuRSYpUKpVWqAM3dCDmmpOTGAZdkiUIrO9rbj9AkuxjHKZ7Blq49WPo3SJYq3RB%2BNSzRidambpmBDDI8o%2BPXioAwbRIsnhVCL3cw0%2B7vwgY6pgFY0o3ftVdOPfacOzjJOQIor8UmO%2FKt0ZsE1t%2FxxEEQK4kK9t6xDAAu12QoJgLkKS3%2B4pyOJvf4EATR3zaWjktvI1K607ZYtuG2EJbYId5XH%2Fv%2Bj4780LSWhkc1Ke1Yaamnu1oNiurZ4JfNw9DggsmqN4XkomZfBHQPdC7wbcU6lpGTHOBfVZRM8JbN4vaovf2uQlYjWbDs1LFcN2fH3yCYPUCnnqNQ&X-Amz-Signature=26f4dc6d8e05a53f51ae60e51bebcc9ec655451d61a6b54c9a53e6a3d42ac13a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSE3XBT%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEIIdoceXTlm39EIUdSHckDzHxa3R1DeFqvOgH3Wx%2Br6AiAmktnBR0PpS8cUnf47aFT1nzLWYidQ3S9nKvLwroGO6Sr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM7R2DDbADT4qVnuqEKtwDZCoBzEcYf6qJ8zw4LPEKkGITMGyo16QHScUiuVQ1AjRQG4f0dzA6Ncym0%2FiGuPdrbfUS5cmuYdAN8GLiLWLBouIHDS3dc6P3DKPGJgeyg0GMDZOIe0Z7BfM%2FR6%2B4ShaHHDFTZkmYMy82X06iIKGmJj4S9Nig6WTsUI9DON8d%2Bt22o%2FwDQb7BOUodIPkq3BbVFUe2cHwrMPI9tQDc4zSXzLUkPuuscyHPaMVI5Q8n7wFCNMYMFt13Zh3bk44iM7k5sF2a%2FIDdjI10%2Bm7K6ZP50zMcwgXTJOP5Oq1os3sQzG%2FLxFSYBIolswywikCIXNZ6%2BOTRwLywnXGYHgBeKWIUA2h%2FwQNkIxGAg%2BP89%2Fk8uNWMy7bLo1j7Ks1kN72q41UUBDI8RaXIag5f7qonKKVEadJ%2B3L1mr55i%2F0yM6wdNk5kZmv8rrK3ynMSs6oeWgPAD%2FEWJLoNUHjFfDAoQbKrwwuKt%2FNwGqaMeZTNU3BZect4Ju2yU0X5Xft3hU92cOSsEZyoYSd6%2FketiPmow1261wIwEHuRSYpUKpVWqAM3dCDmmpOTGAZdkiUIrO9rbj9AkuxjHKZ7Blq49WPo3SJYq3RB%2BNSzRidambpmBDDI8o%2BPXioAwbRIsnhVCL3cw0%2B7vwgY6pgFY0o3ftVdOPfacOzjJOQIor8UmO%2FKt0ZsE1t%2FxxEEQK4kK9t6xDAAu12QoJgLkKS3%2B4pyOJvf4EATR3zaWjktvI1K607ZYtuG2EJbYId5XH%2Fv%2Bj4780LSWhkc1Ke1Yaamnu1oNiurZ4JfNw9DggsmqN4XkomZfBHQPdC7wbcU6lpGTHOBfVZRM8JbN4vaovf2uQlYjWbDs1LFcN2fH3yCYPUCnnqNQ&X-Amz-Signature=88ab9337b7e799bc3ca29ce6a7d0faeb03123fdfa6318fab51146139e1664b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSE3XBT%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEIIdoceXTlm39EIUdSHckDzHxa3R1DeFqvOgH3Wx%2Br6AiAmktnBR0PpS8cUnf47aFT1nzLWYidQ3S9nKvLwroGO6Sr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM7R2DDbADT4qVnuqEKtwDZCoBzEcYf6qJ8zw4LPEKkGITMGyo16QHScUiuVQ1AjRQG4f0dzA6Ncym0%2FiGuPdrbfUS5cmuYdAN8GLiLWLBouIHDS3dc6P3DKPGJgeyg0GMDZOIe0Z7BfM%2FR6%2B4ShaHHDFTZkmYMy82X06iIKGmJj4S9Nig6WTsUI9DON8d%2Bt22o%2FwDQb7BOUodIPkq3BbVFUe2cHwrMPI9tQDc4zSXzLUkPuuscyHPaMVI5Q8n7wFCNMYMFt13Zh3bk44iM7k5sF2a%2FIDdjI10%2Bm7K6ZP50zMcwgXTJOP5Oq1os3sQzG%2FLxFSYBIolswywikCIXNZ6%2BOTRwLywnXGYHgBeKWIUA2h%2FwQNkIxGAg%2BP89%2Fk8uNWMy7bLo1j7Ks1kN72q41UUBDI8RaXIag5f7qonKKVEadJ%2B3L1mr55i%2F0yM6wdNk5kZmv8rrK3ynMSs6oeWgPAD%2FEWJLoNUHjFfDAoQbKrwwuKt%2FNwGqaMeZTNU3BZect4Ju2yU0X5Xft3hU92cOSsEZyoYSd6%2FketiPmow1261wIwEHuRSYpUKpVWqAM3dCDmmpOTGAZdkiUIrO9rbj9AkuxjHKZ7Blq49WPo3SJYq3RB%2BNSzRidambpmBDDI8o%2BPXioAwbRIsnhVCL3cw0%2B7vwgY6pgFY0o3ftVdOPfacOzjJOQIor8UmO%2FKt0ZsE1t%2FxxEEQK4kK9t6xDAAu12QoJgLkKS3%2B4pyOJvf4EATR3zaWjktvI1K607ZYtuG2EJbYId5XH%2Fv%2Bj4780LSWhkc1Ke1Yaamnu1oNiurZ4JfNw9DggsmqN4XkomZfBHQPdC7wbcU6lpGTHOBfVZRM8JbN4vaovf2uQlYjWbDs1LFcN2fH3yCYPUCnnqNQ&X-Amz-Signature=c8c628c49dc35c252aa446bff1f805d54b0d3dcbabab0d1f2ade6aff004aa908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
