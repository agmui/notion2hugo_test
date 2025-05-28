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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M4QX2CF%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP1iwWNxD85klIZ4teVQubm3dQPDpSyQeQ806GA3b%2FNAIhAKC0lwOnQ5KUb2eahp3GWRtDitk14soyzhvudLOOOrgMKv8DCHAQABoMNjM3NDIzMTgzODA1IgyvBzRhdpP5bw8BHlEq3AML6NSDxTajiqy%2BH48qyMZlP9KKPQRfP4cLmjTx8Gx3AEa0CfyCgMiXp7ATcncg9cTOqdBPlaSOJ8bGh%2BaLDNowhIKWT3mzX3s9GtmvODbYd8gegUOMMCAoOoUDttsugKUU308WPgaO7i3jJrycWbD%2BDcVI8Cjz1yCof%2FjxxeY69q96IJfKooWovu2XFGgdjbmr2Tf11fV0ZUGHqPvxlETW2PpRElzRQfkScqZhXCCecqCS213yDEOR0GO8iTOqmThxnayHJu39EsOq%2BJEfBEWAUJj15IrmVynhrBh1y4tVZeU6ZW0u9fw7JUE9jDj5pvdfY5NzpcfgzRjYb1QOYA4g2xHvCzK1cb0%2BNGJuvWUNcA5pmlv3xyKXdylHXNt3r4q15CaOrPvd5dVG0bis8YvNaXdeDQZmNlHu0k6%2BSvZzwIFDWr9CnChX76b%2FdMv2BwzcLQ%2Bpd0u%2FWku2o%2FvUigzMm9iTcLg3pR7YoPPHS5XpftZhpXQfWWi8pXNuaEyT%2Bl0q1CU1TLr3IaoDV3duTR3bOJvzAfMJrpHdeUlYpNQB8OBHYWlLNWGaUt1Sq%2FsWxjo%2Fsr6Ctp2WHB1OYgaMHiAz%2F%2FcX3BudA2gJ0gWWq7FjuVMoaopEYr6MeS3EJTDq9drBBjqkAdx%2FQF5cfb7KEswm2CuDYKheZ5jwnCigHCloxCcvwdL%2BTY4eFn8blg73DgewGQMn7nErvj9msP36MFxhhIpbfQupqBYi44Nl5xqeaL0eyD%2Bs7%2BsS6omTQqE%2BJSNQlKhm9%2F18XdmYA3xDBG0irtdFicmSMMsfnTlBjHHA481p3lfTsoDuQ1jl6J9tC%2FvvOxlHeaEaV%2BvpI8qFUHTui0e7rMssbvyh&X-Amz-Signature=f874c5a2018ba3382f00968320bf8eeafe8af26258658a839359583152cf9558&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M4QX2CF%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP1iwWNxD85klIZ4teVQubm3dQPDpSyQeQ806GA3b%2FNAIhAKC0lwOnQ5KUb2eahp3GWRtDitk14soyzhvudLOOOrgMKv8DCHAQABoMNjM3NDIzMTgzODA1IgyvBzRhdpP5bw8BHlEq3AML6NSDxTajiqy%2BH48qyMZlP9KKPQRfP4cLmjTx8Gx3AEa0CfyCgMiXp7ATcncg9cTOqdBPlaSOJ8bGh%2BaLDNowhIKWT3mzX3s9GtmvODbYd8gegUOMMCAoOoUDttsugKUU308WPgaO7i3jJrycWbD%2BDcVI8Cjz1yCof%2FjxxeY69q96IJfKooWovu2XFGgdjbmr2Tf11fV0ZUGHqPvxlETW2PpRElzRQfkScqZhXCCecqCS213yDEOR0GO8iTOqmThxnayHJu39EsOq%2BJEfBEWAUJj15IrmVynhrBh1y4tVZeU6ZW0u9fw7JUE9jDj5pvdfY5NzpcfgzRjYb1QOYA4g2xHvCzK1cb0%2BNGJuvWUNcA5pmlv3xyKXdylHXNt3r4q15CaOrPvd5dVG0bis8YvNaXdeDQZmNlHu0k6%2BSvZzwIFDWr9CnChX76b%2FdMv2BwzcLQ%2Bpd0u%2FWku2o%2FvUigzMm9iTcLg3pR7YoPPHS5XpftZhpXQfWWi8pXNuaEyT%2Bl0q1CU1TLr3IaoDV3duTR3bOJvzAfMJrpHdeUlYpNQB8OBHYWlLNWGaUt1Sq%2FsWxjo%2Fsr6Ctp2WHB1OYgaMHiAz%2F%2FcX3BudA2gJ0gWWq7FjuVMoaopEYr6MeS3EJTDq9drBBjqkAdx%2FQF5cfb7KEswm2CuDYKheZ5jwnCigHCloxCcvwdL%2BTY4eFn8blg73DgewGQMn7nErvj9msP36MFxhhIpbfQupqBYi44Nl5xqeaL0eyD%2Bs7%2BsS6omTQqE%2BJSNQlKhm9%2F18XdmYA3xDBG0irtdFicmSMMsfnTlBjHHA481p3lfTsoDuQ1jl6J9tC%2FvvOxlHeaEaV%2BvpI8qFUHTui0e7rMssbvyh&X-Amz-Signature=545c59dff724008f68ccb896ba42253838f9e284d2d92fb9fab475606507ed81&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M4QX2CF%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP1iwWNxD85klIZ4teVQubm3dQPDpSyQeQ806GA3b%2FNAIhAKC0lwOnQ5KUb2eahp3GWRtDitk14soyzhvudLOOOrgMKv8DCHAQABoMNjM3NDIzMTgzODA1IgyvBzRhdpP5bw8BHlEq3AML6NSDxTajiqy%2BH48qyMZlP9KKPQRfP4cLmjTx8Gx3AEa0CfyCgMiXp7ATcncg9cTOqdBPlaSOJ8bGh%2BaLDNowhIKWT3mzX3s9GtmvODbYd8gegUOMMCAoOoUDttsugKUU308WPgaO7i3jJrycWbD%2BDcVI8Cjz1yCof%2FjxxeY69q96IJfKooWovu2XFGgdjbmr2Tf11fV0ZUGHqPvxlETW2PpRElzRQfkScqZhXCCecqCS213yDEOR0GO8iTOqmThxnayHJu39EsOq%2BJEfBEWAUJj15IrmVynhrBh1y4tVZeU6ZW0u9fw7JUE9jDj5pvdfY5NzpcfgzRjYb1QOYA4g2xHvCzK1cb0%2BNGJuvWUNcA5pmlv3xyKXdylHXNt3r4q15CaOrPvd5dVG0bis8YvNaXdeDQZmNlHu0k6%2BSvZzwIFDWr9CnChX76b%2FdMv2BwzcLQ%2Bpd0u%2FWku2o%2FvUigzMm9iTcLg3pR7YoPPHS5XpftZhpXQfWWi8pXNuaEyT%2Bl0q1CU1TLr3IaoDV3duTR3bOJvzAfMJrpHdeUlYpNQB8OBHYWlLNWGaUt1Sq%2FsWxjo%2Fsr6Ctp2WHB1OYgaMHiAz%2F%2FcX3BudA2gJ0gWWq7FjuVMoaopEYr6MeS3EJTDq9drBBjqkAdx%2FQF5cfb7KEswm2CuDYKheZ5jwnCigHCloxCcvwdL%2BTY4eFn8blg73DgewGQMn7nErvj9msP36MFxhhIpbfQupqBYi44Nl5xqeaL0eyD%2Bs7%2BsS6omTQqE%2BJSNQlKhm9%2F18XdmYA3xDBG0irtdFicmSMMsfnTlBjHHA481p3lfTsoDuQ1jl6J9tC%2FvvOxlHeaEaV%2BvpI8qFUHTui0e7rMssbvyh&X-Amz-Signature=23a044eaea98167c6f28857ed787f31a96a270d03ef99838663502d6df9cfa4e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M4QX2CF%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP1iwWNxD85klIZ4teVQubm3dQPDpSyQeQ806GA3b%2FNAIhAKC0lwOnQ5KUb2eahp3GWRtDitk14soyzhvudLOOOrgMKv8DCHAQABoMNjM3NDIzMTgzODA1IgyvBzRhdpP5bw8BHlEq3AML6NSDxTajiqy%2BH48qyMZlP9KKPQRfP4cLmjTx8Gx3AEa0CfyCgMiXp7ATcncg9cTOqdBPlaSOJ8bGh%2BaLDNowhIKWT3mzX3s9GtmvODbYd8gegUOMMCAoOoUDttsugKUU308WPgaO7i3jJrycWbD%2BDcVI8Cjz1yCof%2FjxxeY69q96IJfKooWovu2XFGgdjbmr2Tf11fV0ZUGHqPvxlETW2PpRElzRQfkScqZhXCCecqCS213yDEOR0GO8iTOqmThxnayHJu39EsOq%2BJEfBEWAUJj15IrmVynhrBh1y4tVZeU6ZW0u9fw7JUE9jDj5pvdfY5NzpcfgzRjYb1QOYA4g2xHvCzK1cb0%2BNGJuvWUNcA5pmlv3xyKXdylHXNt3r4q15CaOrPvd5dVG0bis8YvNaXdeDQZmNlHu0k6%2BSvZzwIFDWr9CnChX76b%2FdMv2BwzcLQ%2Bpd0u%2FWku2o%2FvUigzMm9iTcLg3pR7YoPPHS5XpftZhpXQfWWi8pXNuaEyT%2Bl0q1CU1TLr3IaoDV3duTR3bOJvzAfMJrpHdeUlYpNQB8OBHYWlLNWGaUt1Sq%2FsWxjo%2Fsr6Ctp2WHB1OYgaMHiAz%2F%2FcX3BudA2gJ0gWWq7FjuVMoaopEYr6MeS3EJTDq9drBBjqkAdx%2FQF5cfb7KEswm2CuDYKheZ5jwnCigHCloxCcvwdL%2BTY4eFn8blg73DgewGQMn7nErvj9msP36MFxhhIpbfQupqBYi44Nl5xqeaL0eyD%2Bs7%2BsS6omTQqE%2BJSNQlKhm9%2F18XdmYA3xDBG0irtdFicmSMMsfnTlBjHHA481p3lfTsoDuQ1jl6J9tC%2FvvOxlHeaEaV%2BvpI8qFUHTui0e7rMssbvyh&X-Amz-Signature=6446fb71154796bf7d0bf74d9f03638fa8d882334388d977446b064c87402fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M4QX2CF%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP1iwWNxD85klIZ4teVQubm3dQPDpSyQeQ806GA3b%2FNAIhAKC0lwOnQ5KUb2eahp3GWRtDitk14soyzhvudLOOOrgMKv8DCHAQABoMNjM3NDIzMTgzODA1IgyvBzRhdpP5bw8BHlEq3AML6NSDxTajiqy%2BH48qyMZlP9KKPQRfP4cLmjTx8Gx3AEa0CfyCgMiXp7ATcncg9cTOqdBPlaSOJ8bGh%2BaLDNowhIKWT3mzX3s9GtmvODbYd8gegUOMMCAoOoUDttsugKUU308WPgaO7i3jJrycWbD%2BDcVI8Cjz1yCof%2FjxxeY69q96IJfKooWovu2XFGgdjbmr2Tf11fV0ZUGHqPvxlETW2PpRElzRQfkScqZhXCCecqCS213yDEOR0GO8iTOqmThxnayHJu39EsOq%2BJEfBEWAUJj15IrmVynhrBh1y4tVZeU6ZW0u9fw7JUE9jDj5pvdfY5NzpcfgzRjYb1QOYA4g2xHvCzK1cb0%2BNGJuvWUNcA5pmlv3xyKXdylHXNt3r4q15CaOrPvd5dVG0bis8YvNaXdeDQZmNlHu0k6%2BSvZzwIFDWr9CnChX76b%2FdMv2BwzcLQ%2Bpd0u%2FWku2o%2FvUigzMm9iTcLg3pR7YoPPHS5XpftZhpXQfWWi8pXNuaEyT%2Bl0q1CU1TLr3IaoDV3duTR3bOJvzAfMJrpHdeUlYpNQB8OBHYWlLNWGaUt1Sq%2FsWxjo%2Fsr6Ctp2WHB1OYgaMHiAz%2F%2FcX3BudA2gJ0gWWq7FjuVMoaopEYr6MeS3EJTDq9drBBjqkAdx%2FQF5cfb7KEswm2CuDYKheZ5jwnCigHCloxCcvwdL%2BTY4eFn8blg73DgewGQMn7nErvj9msP36MFxhhIpbfQupqBYi44Nl5xqeaL0eyD%2Bs7%2BsS6omTQqE%2BJSNQlKhm9%2F18XdmYA3xDBG0irtdFicmSMMsfnTlBjHHA481p3lfTsoDuQ1jl6J9tC%2FvvOxlHeaEaV%2BvpI8qFUHTui0e7rMssbvyh&X-Amz-Signature=07071bc241dbf1769028bc33bb9bed74195e215e2202c00259dc8c5d87b5a7d4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M4QX2CF%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP1iwWNxD85klIZ4teVQubm3dQPDpSyQeQ806GA3b%2FNAIhAKC0lwOnQ5KUb2eahp3GWRtDitk14soyzhvudLOOOrgMKv8DCHAQABoMNjM3NDIzMTgzODA1IgyvBzRhdpP5bw8BHlEq3AML6NSDxTajiqy%2BH48qyMZlP9KKPQRfP4cLmjTx8Gx3AEa0CfyCgMiXp7ATcncg9cTOqdBPlaSOJ8bGh%2BaLDNowhIKWT3mzX3s9GtmvODbYd8gegUOMMCAoOoUDttsugKUU308WPgaO7i3jJrycWbD%2BDcVI8Cjz1yCof%2FjxxeY69q96IJfKooWovu2XFGgdjbmr2Tf11fV0ZUGHqPvxlETW2PpRElzRQfkScqZhXCCecqCS213yDEOR0GO8iTOqmThxnayHJu39EsOq%2BJEfBEWAUJj15IrmVynhrBh1y4tVZeU6ZW0u9fw7JUE9jDj5pvdfY5NzpcfgzRjYb1QOYA4g2xHvCzK1cb0%2BNGJuvWUNcA5pmlv3xyKXdylHXNt3r4q15CaOrPvd5dVG0bis8YvNaXdeDQZmNlHu0k6%2BSvZzwIFDWr9CnChX76b%2FdMv2BwzcLQ%2Bpd0u%2FWku2o%2FvUigzMm9iTcLg3pR7YoPPHS5XpftZhpXQfWWi8pXNuaEyT%2Bl0q1CU1TLr3IaoDV3duTR3bOJvzAfMJrpHdeUlYpNQB8OBHYWlLNWGaUt1Sq%2FsWxjo%2Fsr6Ctp2WHB1OYgaMHiAz%2F%2FcX3BudA2gJ0gWWq7FjuVMoaopEYr6MeS3EJTDq9drBBjqkAdx%2FQF5cfb7KEswm2CuDYKheZ5jwnCigHCloxCcvwdL%2BTY4eFn8blg73DgewGQMn7nErvj9msP36MFxhhIpbfQupqBYi44Nl5xqeaL0eyD%2Bs7%2BsS6omTQqE%2BJSNQlKhm9%2F18XdmYA3xDBG0irtdFicmSMMsfnTlBjHHA481p3lfTsoDuQ1jl6J9tC%2FvvOxlHeaEaV%2BvpI8qFUHTui0e7rMssbvyh&X-Amz-Signature=081df407cbdd8405f130637fdaf877fdbf3dbe3de9dba84b414dc69c9f941457&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M4QX2CF%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP1iwWNxD85klIZ4teVQubm3dQPDpSyQeQ806GA3b%2FNAIhAKC0lwOnQ5KUb2eahp3GWRtDitk14soyzhvudLOOOrgMKv8DCHAQABoMNjM3NDIzMTgzODA1IgyvBzRhdpP5bw8BHlEq3AML6NSDxTajiqy%2BH48qyMZlP9KKPQRfP4cLmjTx8Gx3AEa0CfyCgMiXp7ATcncg9cTOqdBPlaSOJ8bGh%2BaLDNowhIKWT3mzX3s9GtmvODbYd8gegUOMMCAoOoUDttsugKUU308WPgaO7i3jJrycWbD%2BDcVI8Cjz1yCof%2FjxxeY69q96IJfKooWovu2XFGgdjbmr2Tf11fV0ZUGHqPvxlETW2PpRElzRQfkScqZhXCCecqCS213yDEOR0GO8iTOqmThxnayHJu39EsOq%2BJEfBEWAUJj15IrmVynhrBh1y4tVZeU6ZW0u9fw7JUE9jDj5pvdfY5NzpcfgzRjYb1QOYA4g2xHvCzK1cb0%2BNGJuvWUNcA5pmlv3xyKXdylHXNt3r4q15CaOrPvd5dVG0bis8YvNaXdeDQZmNlHu0k6%2BSvZzwIFDWr9CnChX76b%2FdMv2BwzcLQ%2Bpd0u%2FWku2o%2FvUigzMm9iTcLg3pR7YoPPHS5XpftZhpXQfWWi8pXNuaEyT%2Bl0q1CU1TLr3IaoDV3duTR3bOJvzAfMJrpHdeUlYpNQB8OBHYWlLNWGaUt1Sq%2FsWxjo%2Fsr6Ctp2WHB1OYgaMHiAz%2F%2FcX3BudA2gJ0gWWq7FjuVMoaopEYr6MeS3EJTDq9drBBjqkAdx%2FQF5cfb7KEswm2CuDYKheZ5jwnCigHCloxCcvwdL%2BTY4eFn8blg73DgewGQMn7nErvj9msP36MFxhhIpbfQupqBYi44Nl5xqeaL0eyD%2Bs7%2BsS6omTQqE%2BJSNQlKhm9%2F18XdmYA3xDBG0irtdFicmSMMsfnTlBjHHA481p3lfTsoDuQ1jl6J9tC%2FvvOxlHeaEaV%2BvpI8qFUHTui0e7rMssbvyh&X-Amz-Signature=0abb4c0730e877bc8db1d83850cb637865062439e6f91e893db0d85d95a01fc7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
