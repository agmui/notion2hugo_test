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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5BV2O6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICU%2Fejw%2F3JOhR%2FN5Nbwdt2aAAWZ3Fnjy9vBVhK62HwS%2FAiBAJiwcqRaZbTt5h4mO94TgKwZ6Q%2BcsTANxLjTxp7%2F%2B9SqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiNKQPFUs3bmj6JoOKtwDr5%2BVGfeH5UKiI31r3ueYbIxu68ElwsewwN0VZ6U%2BNRJQ5qPlmJDi8b5M9bxLpDQJroen6h29JqPoOUAsK7%2BamTmROdbeUswt6D7v8%2BJ7qisLFoXD2oRt4slCJJDv00qxyVDceLq0YdjFjSSxV5Tar1id%2F7mY7OOLSF9Ih2wsOeS0BsFzOvWZCQ4A5DvmMNh2UF5O1dEsGr3uBjvN%2BQdKNVobkKFdzE1L6J4mNIQHBx8MjLCwWODv0aPlvSl4rUpf0Imb1ZDP6DqRhUETG%2Bkl9dx2aNyCDvGtfyyRMwbzVcAtBA0s3xCvmvRTOsdmdto5E2DWDOyuEBfLrKwuhWasa1qoxTIS2%2Bx2gwMTPxXvdsCZSL2Ig60EOLbQTndthovgXRLzQNcvlVwzhga1VSvScKee1t5Xvv7ZkdwS2EHmeviGAeIxxfOjVHiyPwJ6RGkX2q2T75nwV%2Fs47t34U1lYFO9MYqSbB1jUV8%2BgN0VAp77hhwlVylaAbR5FCYYl396DXEcQSGm2ifd%2BcngBmFVZHeOD2DtQnjUcdA6H0KARdMzExSzHRod7AKrOfFkHuGFcysHFxZeDKcLn8afu%2FnsvaXhiWGS7HkhhVgw3u5tloU42gFJZhmp1Ypj5xOww5bGuvwY6pgFINOPS%2F2ipW6AdWcTxZb%2BFD9wE69vuzM53dJWqJcZ1dDokMjEmkyxnn6ZulnSym6XnwdaJ6wf0JTzv6nRN17SRe%2BsP4HrxtqEthGWEChA8r0PkhO5iNo%2FUtfKrB8tPHUBjnyD5bfUwDh9iOt82NmE6XkxUWk1u1C5UbrT9SBFCyZBes314Vyzv0Ni%2BNoXjCCaSJgfco1NXWOWid3cEJ1iXX6vV8WjF&X-Amz-Signature=c573c17f007b85665f59d113910b829dd9e6f3173f97244df33d0d6cdd92161f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5BV2O6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICU%2Fejw%2F3JOhR%2FN5Nbwdt2aAAWZ3Fnjy9vBVhK62HwS%2FAiBAJiwcqRaZbTt5h4mO94TgKwZ6Q%2BcsTANxLjTxp7%2F%2B9SqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiNKQPFUs3bmj6JoOKtwDr5%2BVGfeH5UKiI31r3ueYbIxu68ElwsewwN0VZ6U%2BNRJQ5qPlmJDi8b5M9bxLpDQJroen6h29JqPoOUAsK7%2BamTmROdbeUswt6D7v8%2BJ7qisLFoXD2oRt4slCJJDv00qxyVDceLq0YdjFjSSxV5Tar1id%2F7mY7OOLSF9Ih2wsOeS0BsFzOvWZCQ4A5DvmMNh2UF5O1dEsGr3uBjvN%2BQdKNVobkKFdzE1L6J4mNIQHBx8MjLCwWODv0aPlvSl4rUpf0Imb1ZDP6DqRhUETG%2Bkl9dx2aNyCDvGtfyyRMwbzVcAtBA0s3xCvmvRTOsdmdto5E2DWDOyuEBfLrKwuhWasa1qoxTIS2%2Bx2gwMTPxXvdsCZSL2Ig60EOLbQTndthovgXRLzQNcvlVwzhga1VSvScKee1t5Xvv7ZkdwS2EHmeviGAeIxxfOjVHiyPwJ6RGkX2q2T75nwV%2Fs47t34U1lYFO9MYqSbB1jUV8%2BgN0VAp77hhwlVylaAbR5FCYYl396DXEcQSGm2ifd%2BcngBmFVZHeOD2DtQnjUcdA6H0KARdMzExSzHRod7AKrOfFkHuGFcysHFxZeDKcLn8afu%2FnsvaXhiWGS7HkhhVgw3u5tloU42gFJZhmp1Ypj5xOww5bGuvwY6pgFINOPS%2F2ipW6AdWcTxZb%2BFD9wE69vuzM53dJWqJcZ1dDokMjEmkyxnn6ZulnSym6XnwdaJ6wf0JTzv6nRN17SRe%2BsP4HrxtqEthGWEChA8r0PkhO5iNo%2FUtfKrB8tPHUBjnyD5bfUwDh9iOt82NmE6XkxUWk1u1C5UbrT9SBFCyZBes314Vyzv0Ni%2BNoXjCCaSJgfco1NXWOWid3cEJ1iXX6vV8WjF&X-Amz-Signature=584e9fcd28ebc191413154d34311f7e6588f4b9a3b5877425c9da6e7b9cf166c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5BV2O6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICU%2Fejw%2F3JOhR%2FN5Nbwdt2aAAWZ3Fnjy9vBVhK62HwS%2FAiBAJiwcqRaZbTt5h4mO94TgKwZ6Q%2BcsTANxLjTxp7%2F%2B9SqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiNKQPFUs3bmj6JoOKtwDr5%2BVGfeH5UKiI31r3ueYbIxu68ElwsewwN0VZ6U%2BNRJQ5qPlmJDi8b5M9bxLpDQJroen6h29JqPoOUAsK7%2BamTmROdbeUswt6D7v8%2BJ7qisLFoXD2oRt4slCJJDv00qxyVDceLq0YdjFjSSxV5Tar1id%2F7mY7OOLSF9Ih2wsOeS0BsFzOvWZCQ4A5DvmMNh2UF5O1dEsGr3uBjvN%2BQdKNVobkKFdzE1L6J4mNIQHBx8MjLCwWODv0aPlvSl4rUpf0Imb1ZDP6DqRhUETG%2Bkl9dx2aNyCDvGtfyyRMwbzVcAtBA0s3xCvmvRTOsdmdto5E2DWDOyuEBfLrKwuhWasa1qoxTIS2%2Bx2gwMTPxXvdsCZSL2Ig60EOLbQTndthovgXRLzQNcvlVwzhga1VSvScKee1t5Xvv7ZkdwS2EHmeviGAeIxxfOjVHiyPwJ6RGkX2q2T75nwV%2Fs47t34U1lYFO9MYqSbB1jUV8%2BgN0VAp77hhwlVylaAbR5FCYYl396DXEcQSGm2ifd%2BcngBmFVZHeOD2DtQnjUcdA6H0KARdMzExSzHRod7AKrOfFkHuGFcysHFxZeDKcLn8afu%2FnsvaXhiWGS7HkhhVgw3u5tloU42gFJZhmp1Ypj5xOww5bGuvwY6pgFINOPS%2F2ipW6AdWcTxZb%2BFD9wE69vuzM53dJWqJcZ1dDokMjEmkyxnn6ZulnSym6XnwdaJ6wf0JTzv6nRN17SRe%2BsP4HrxtqEthGWEChA8r0PkhO5iNo%2FUtfKrB8tPHUBjnyD5bfUwDh9iOt82NmE6XkxUWk1u1C5UbrT9SBFCyZBes314Vyzv0Ni%2BNoXjCCaSJgfco1NXWOWid3cEJ1iXX6vV8WjF&X-Amz-Signature=d63ff68ee3b106ba5617b528b8e9384c92ca56e059bb3d6a4004fb3c461694a7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5BV2O6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICU%2Fejw%2F3JOhR%2FN5Nbwdt2aAAWZ3Fnjy9vBVhK62HwS%2FAiBAJiwcqRaZbTt5h4mO94TgKwZ6Q%2BcsTANxLjTxp7%2F%2B9SqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiNKQPFUs3bmj6JoOKtwDr5%2BVGfeH5UKiI31r3ueYbIxu68ElwsewwN0VZ6U%2BNRJQ5qPlmJDi8b5M9bxLpDQJroen6h29JqPoOUAsK7%2BamTmROdbeUswt6D7v8%2BJ7qisLFoXD2oRt4slCJJDv00qxyVDceLq0YdjFjSSxV5Tar1id%2F7mY7OOLSF9Ih2wsOeS0BsFzOvWZCQ4A5DvmMNh2UF5O1dEsGr3uBjvN%2BQdKNVobkKFdzE1L6J4mNIQHBx8MjLCwWODv0aPlvSl4rUpf0Imb1ZDP6DqRhUETG%2Bkl9dx2aNyCDvGtfyyRMwbzVcAtBA0s3xCvmvRTOsdmdto5E2DWDOyuEBfLrKwuhWasa1qoxTIS2%2Bx2gwMTPxXvdsCZSL2Ig60EOLbQTndthovgXRLzQNcvlVwzhga1VSvScKee1t5Xvv7ZkdwS2EHmeviGAeIxxfOjVHiyPwJ6RGkX2q2T75nwV%2Fs47t34U1lYFO9MYqSbB1jUV8%2BgN0VAp77hhwlVylaAbR5FCYYl396DXEcQSGm2ifd%2BcngBmFVZHeOD2DtQnjUcdA6H0KARdMzExSzHRod7AKrOfFkHuGFcysHFxZeDKcLn8afu%2FnsvaXhiWGS7HkhhVgw3u5tloU42gFJZhmp1Ypj5xOww5bGuvwY6pgFINOPS%2F2ipW6AdWcTxZb%2BFD9wE69vuzM53dJWqJcZ1dDokMjEmkyxnn6ZulnSym6XnwdaJ6wf0JTzv6nRN17SRe%2BsP4HrxtqEthGWEChA8r0PkhO5iNo%2FUtfKrB8tPHUBjnyD5bfUwDh9iOt82NmE6XkxUWk1u1C5UbrT9SBFCyZBes314Vyzv0Ni%2BNoXjCCaSJgfco1NXWOWid3cEJ1iXX6vV8WjF&X-Amz-Signature=ccd73d9189003cc4b1382a2afbcb317f8bae8e3c4c4c78b4af877b79f4f01f27&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5BV2O6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICU%2Fejw%2F3JOhR%2FN5Nbwdt2aAAWZ3Fnjy9vBVhK62HwS%2FAiBAJiwcqRaZbTt5h4mO94TgKwZ6Q%2BcsTANxLjTxp7%2F%2B9SqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiNKQPFUs3bmj6JoOKtwDr5%2BVGfeH5UKiI31r3ueYbIxu68ElwsewwN0VZ6U%2BNRJQ5qPlmJDi8b5M9bxLpDQJroen6h29JqPoOUAsK7%2BamTmROdbeUswt6D7v8%2BJ7qisLFoXD2oRt4slCJJDv00qxyVDceLq0YdjFjSSxV5Tar1id%2F7mY7OOLSF9Ih2wsOeS0BsFzOvWZCQ4A5DvmMNh2UF5O1dEsGr3uBjvN%2BQdKNVobkKFdzE1L6J4mNIQHBx8MjLCwWODv0aPlvSl4rUpf0Imb1ZDP6DqRhUETG%2Bkl9dx2aNyCDvGtfyyRMwbzVcAtBA0s3xCvmvRTOsdmdto5E2DWDOyuEBfLrKwuhWasa1qoxTIS2%2Bx2gwMTPxXvdsCZSL2Ig60EOLbQTndthovgXRLzQNcvlVwzhga1VSvScKee1t5Xvv7ZkdwS2EHmeviGAeIxxfOjVHiyPwJ6RGkX2q2T75nwV%2Fs47t34U1lYFO9MYqSbB1jUV8%2BgN0VAp77hhwlVylaAbR5FCYYl396DXEcQSGm2ifd%2BcngBmFVZHeOD2DtQnjUcdA6H0KARdMzExSzHRod7AKrOfFkHuGFcysHFxZeDKcLn8afu%2FnsvaXhiWGS7HkhhVgw3u5tloU42gFJZhmp1Ypj5xOww5bGuvwY6pgFINOPS%2F2ipW6AdWcTxZb%2BFD9wE69vuzM53dJWqJcZ1dDokMjEmkyxnn6ZulnSym6XnwdaJ6wf0JTzv6nRN17SRe%2BsP4HrxtqEthGWEChA8r0PkhO5iNo%2FUtfKrB8tPHUBjnyD5bfUwDh9iOt82NmE6XkxUWk1u1C5UbrT9SBFCyZBes314Vyzv0Ni%2BNoXjCCaSJgfco1NXWOWid3cEJ1iXX6vV8WjF&X-Amz-Signature=24da416245d7ff00f220be04b37afb665522cbd049ce6899b3e3b17548ec2d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5BV2O6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICU%2Fejw%2F3JOhR%2FN5Nbwdt2aAAWZ3Fnjy9vBVhK62HwS%2FAiBAJiwcqRaZbTt5h4mO94TgKwZ6Q%2BcsTANxLjTxp7%2F%2B9SqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiNKQPFUs3bmj6JoOKtwDr5%2BVGfeH5UKiI31r3ueYbIxu68ElwsewwN0VZ6U%2BNRJQ5qPlmJDi8b5M9bxLpDQJroen6h29JqPoOUAsK7%2BamTmROdbeUswt6D7v8%2BJ7qisLFoXD2oRt4slCJJDv00qxyVDceLq0YdjFjSSxV5Tar1id%2F7mY7OOLSF9Ih2wsOeS0BsFzOvWZCQ4A5DvmMNh2UF5O1dEsGr3uBjvN%2BQdKNVobkKFdzE1L6J4mNIQHBx8MjLCwWODv0aPlvSl4rUpf0Imb1ZDP6DqRhUETG%2Bkl9dx2aNyCDvGtfyyRMwbzVcAtBA0s3xCvmvRTOsdmdto5E2DWDOyuEBfLrKwuhWasa1qoxTIS2%2Bx2gwMTPxXvdsCZSL2Ig60EOLbQTndthovgXRLzQNcvlVwzhga1VSvScKee1t5Xvv7ZkdwS2EHmeviGAeIxxfOjVHiyPwJ6RGkX2q2T75nwV%2Fs47t34U1lYFO9MYqSbB1jUV8%2BgN0VAp77hhwlVylaAbR5FCYYl396DXEcQSGm2ifd%2BcngBmFVZHeOD2DtQnjUcdA6H0KARdMzExSzHRod7AKrOfFkHuGFcysHFxZeDKcLn8afu%2FnsvaXhiWGS7HkhhVgw3u5tloU42gFJZhmp1Ypj5xOww5bGuvwY6pgFINOPS%2F2ipW6AdWcTxZb%2BFD9wE69vuzM53dJWqJcZ1dDokMjEmkyxnn6ZulnSym6XnwdaJ6wf0JTzv6nRN17SRe%2BsP4HrxtqEthGWEChA8r0PkhO5iNo%2FUtfKrB8tPHUBjnyD5bfUwDh9iOt82NmE6XkxUWk1u1C5UbrT9SBFCyZBes314Vyzv0Ni%2BNoXjCCaSJgfco1NXWOWid3cEJ1iXX6vV8WjF&X-Amz-Signature=f44ee531cecc883026fc975cc01f76b1dab58fdc02f2aff6b081380e3d1d9841&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5BV2O6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICU%2Fejw%2F3JOhR%2FN5Nbwdt2aAAWZ3Fnjy9vBVhK62HwS%2FAiBAJiwcqRaZbTt5h4mO94TgKwZ6Q%2BcsTANxLjTxp7%2F%2B9SqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiNKQPFUs3bmj6JoOKtwDr5%2BVGfeH5UKiI31r3ueYbIxu68ElwsewwN0VZ6U%2BNRJQ5qPlmJDi8b5M9bxLpDQJroen6h29JqPoOUAsK7%2BamTmROdbeUswt6D7v8%2BJ7qisLFoXD2oRt4slCJJDv00qxyVDceLq0YdjFjSSxV5Tar1id%2F7mY7OOLSF9Ih2wsOeS0BsFzOvWZCQ4A5DvmMNh2UF5O1dEsGr3uBjvN%2BQdKNVobkKFdzE1L6J4mNIQHBx8MjLCwWODv0aPlvSl4rUpf0Imb1ZDP6DqRhUETG%2Bkl9dx2aNyCDvGtfyyRMwbzVcAtBA0s3xCvmvRTOsdmdto5E2DWDOyuEBfLrKwuhWasa1qoxTIS2%2Bx2gwMTPxXvdsCZSL2Ig60EOLbQTndthovgXRLzQNcvlVwzhga1VSvScKee1t5Xvv7ZkdwS2EHmeviGAeIxxfOjVHiyPwJ6RGkX2q2T75nwV%2Fs47t34U1lYFO9MYqSbB1jUV8%2BgN0VAp77hhwlVylaAbR5FCYYl396DXEcQSGm2ifd%2BcngBmFVZHeOD2DtQnjUcdA6H0KARdMzExSzHRod7AKrOfFkHuGFcysHFxZeDKcLn8afu%2FnsvaXhiWGS7HkhhVgw3u5tloU42gFJZhmp1Ypj5xOww5bGuvwY6pgFINOPS%2F2ipW6AdWcTxZb%2BFD9wE69vuzM53dJWqJcZ1dDokMjEmkyxnn6ZulnSym6XnwdaJ6wf0JTzv6nRN17SRe%2BsP4HrxtqEthGWEChA8r0PkhO5iNo%2FUtfKrB8tPHUBjnyD5bfUwDh9iOt82NmE6XkxUWk1u1C5UbrT9SBFCyZBes314Vyzv0Ni%2BNoXjCCaSJgfco1NXWOWid3cEJ1iXX6vV8WjF&X-Amz-Signature=a24c1abfea8c55de1ce2d9843af78122e32a55f6fddd3fdfd4c5b4fa7346843c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
