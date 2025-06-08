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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SWKKLBH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe0f%2BKykJ5HivlanjjGR8ZPU0ttIg8bGsI6dSHEtsOzAiAcMsLeYiRGlIba09v8oViVd%2FU%2FyHpbIgaytR9J2liquSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTLWCYkDXIzcBsA98KtwD%2FmJ%2FlZQ22DefMogB2nu6VI6Io%2BDZcW88uGHtSZ6CgWNXhA0KU6bX%2F%2BavI5jHM4sp0jy354SdOA4C96S28NIwt9FbG70lpBRLKr46DjyE6Yw65nzNbLHys2Q34169j6hHvtPyNV7pB9DYF0f2JG0jxv%2B2w61htEAMJaaoDO4L4d7c0QhsuPlmwyA6afmmszamjuwAoJQR57N8DIouowzlWfvpqpxrdHXwbZ6mrWFKRlF%2FmoxFsylIH7P3kPc4kcu74LYFm0exYlneI2egB52ebhFvjJc2hlYbv5NgmqD4cT6LZV8w%2BT%2FoqqK4AENAP%2FMlEtiEKUxDUAam62orSReWLYdGcUgVz3j8X%2BdMIoz%2BAsM5nKIWlZFO2sSSag2im4MwhUOT%2BBSxNe8VNdB9cuU4mrvCEZuJOf108uGPshtatYCHxwt6VcltzMUea2BdBm7TjvDwuULkGkj%2BAZhokIqKuV48Ak7k1N9tUlY9gD4u4rlLSKtVxaNszO0sqWouQ0h%2BRvDLcWQfskN75D871XxReK8um2yh0XjCOENc%2B59bD%2Bbc%2FnBMQGANL7zlonDHAG1HIxGd2oQQst0EXrxGdb8LvbRN8Laan9gIVTkvroqit2QF9vHx%2Fo7Wt1Qfh2kw2uaTwgY6pgFhPulFUUDNIMdxZTpJtY%2BqkYOr1r5M8TCWLicvTWSSEX%2FqqpQcSfeDXB2U6cO6N%2B8FyoEDgb1ZhFkoxUBTUNVYmtIYhLNEkPqkEftj5SCylAmVMpYHqorVMblwyPVty89zcBjU9YvoUExUKXnGu6zfaCs4CNDg2GDYQUiLh0N9n8CCIdssogyedGnbro9GGOIQA7gIZhsETbdnhwv4Llf08LpatXGb&X-Amz-Signature=14e2854542ebb9f314fe977829031c19ddf956d66dc13fdfeb951eac154c85d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SWKKLBH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe0f%2BKykJ5HivlanjjGR8ZPU0ttIg8bGsI6dSHEtsOzAiAcMsLeYiRGlIba09v8oViVd%2FU%2FyHpbIgaytR9J2liquSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTLWCYkDXIzcBsA98KtwD%2FmJ%2FlZQ22DefMogB2nu6VI6Io%2BDZcW88uGHtSZ6CgWNXhA0KU6bX%2F%2BavI5jHM4sp0jy354SdOA4C96S28NIwt9FbG70lpBRLKr46DjyE6Yw65nzNbLHys2Q34169j6hHvtPyNV7pB9DYF0f2JG0jxv%2B2w61htEAMJaaoDO4L4d7c0QhsuPlmwyA6afmmszamjuwAoJQR57N8DIouowzlWfvpqpxrdHXwbZ6mrWFKRlF%2FmoxFsylIH7P3kPc4kcu74LYFm0exYlneI2egB52ebhFvjJc2hlYbv5NgmqD4cT6LZV8w%2BT%2FoqqK4AENAP%2FMlEtiEKUxDUAam62orSReWLYdGcUgVz3j8X%2BdMIoz%2BAsM5nKIWlZFO2sSSag2im4MwhUOT%2BBSxNe8VNdB9cuU4mrvCEZuJOf108uGPshtatYCHxwt6VcltzMUea2BdBm7TjvDwuULkGkj%2BAZhokIqKuV48Ak7k1N9tUlY9gD4u4rlLSKtVxaNszO0sqWouQ0h%2BRvDLcWQfskN75D871XxReK8um2yh0XjCOENc%2B59bD%2Bbc%2FnBMQGANL7zlonDHAG1HIxGd2oQQst0EXrxGdb8LvbRN8Laan9gIVTkvroqit2QF9vHx%2Fo7Wt1Qfh2kw2uaTwgY6pgFhPulFUUDNIMdxZTpJtY%2BqkYOr1r5M8TCWLicvTWSSEX%2FqqpQcSfeDXB2U6cO6N%2B8FyoEDgb1ZhFkoxUBTUNVYmtIYhLNEkPqkEftj5SCylAmVMpYHqorVMblwyPVty89zcBjU9YvoUExUKXnGu6zfaCs4CNDg2GDYQUiLh0N9n8CCIdssogyedGnbro9GGOIQA7gIZhsETbdnhwv4Llf08LpatXGb&X-Amz-Signature=334948670a0dc69263fa82b4fa9497ca98bc569f1c104618fdf9d3e7e557fb35&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SWKKLBH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe0f%2BKykJ5HivlanjjGR8ZPU0ttIg8bGsI6dSHEtsOzAiAcMsLeYiRGlIba09v8oViVd%2FU%2FyHpbIgaytR9J2liquSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTLWCYkDXIzcBsA98KtwD%2FmJ%2FlZQ22DefMogB2nu6VI6Io%2BDZcW88uGHtSZ6CgWNXhA0KU6bX%2F%2BavI5jHM4sp0jy354SdOA4C96S28NIwt9FbG70lpBRLKr46DjyE6Yw65nzNbLHys2Q34169j6hHvtPyNV7pB9DYF0f2JG0jxv%2B2w61htEAMJaaoDO4L4d7c0QhsuPlmwyA6afmmszamjuwAoJQR57N8DIouowzlWfvpqpxrdHXwbZ6mrWFKRlF%2FmoxFsylIH7P3kPc4kcu74LYFm0exYlneI2egB52ebhFvjJc2hlYbv5NgmqD4cT6LZV8w%2BT%2FoqqK4AENAP%2FMlEtiEKUxDUAam62orSReWLYdGcUgVz3j8X%2BdMIoz%2BAsM5nKIWlZFO2sSSag2im4MwhUOT%2BBSxNe8VNdB9cuU4mrvCEZuJOf108uGPshtatYCHxwt6VcltzMUea2BdBm7TjvDwuULkGkj%2BAZhokIqKuV48Ak7k1N9tUlY9gD4u4rlLSKtVxaNszO0sqWouQ0h%2BRvDLcWQfskN75D871XxReK8um2yh0XjCOENc%2B59bD%2Bbc%2FnBMQGANL7zlonDHAG1HIxGd2oQQst0EXrxGdb8LvbRN8Laan9gIVTkvroqit2QF9vHx%2Fo7Wt1Qfh2kw2uaTwgY6pgFhPulFUUDNIMdxZTpJtY%2BqkYOr1r5M8TCWLicvTWSSEX%2FqqpQcSfeDXB2U6cO6N%2B8FyoEDgb1ZhFkoxUBTUNVYmtIYhLNEkPqkEftj5SCylAmVMpYHqorVMblwyPVty89zcBjU9YvoUExUKXnGu6zfaCs4CNDg2GDYQUiLh0N9n8CCIdssogyedGnbro9GGOIQA7gIZhsETbdnhwv4Llf08LpatXGb&X-Amz-Signature=515f5de72d545573a86699d2df2be113d6b419cef4122216eaf3e307cce3e21b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SWKKLBH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe0f%2BKykJ5HivlanjjGR8ZPU0ttIg8bGsI6dSHEtsOzAiAcMsLeYiRGlIba09v8oViVd%2FU%2FyHpbIgaytR9J2liquSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTLWCYkDXIzcBsA98KtwD%2FmJ%2FlZQ22DefMogB2nu6VI6Io%2BDZcW88uGHtSZ6CgWNXhA0KU6bX%2F%2BavI5jHM4sp0jy354SdOA4C96S28NIwt9FbG70lpBRLKr46DjyE6Yw65nzNbLHys2Q34169j6hHvtPyNV7pB9DYF0f2JG0jxv%2B2w61htEAMJaaoDO4L4d7c0QhsuPlmwyA6afmmszamjuwAoJQR57N8DIouowzlWfvpqpxrdHXwbZ6mrWFKRlF%2FmoxFsylIH7P3kPc4kcu74LYFm0exYlneI2egB52ebhFvjJc2hlYbv5NgmqD4cT6LZV8w%2BT%2FoqqK4AENAP%2FMlEtiEKUxDUAam62orSReWLYdGcUgVz3j8X%2BdMIoz%2BAsM5nKIWlZFO2sSSag2im4MwhUOT%2BBSxNe8VNdB9cuU4mrvCEZuJOf108uGPshtatYCHxwt6VcltzMUea2BdBm7TjvDwuULkGkj%2BAZhokIqKuV48Ak7k1N9tUlY9gD4u4rlLSKtVxaNszO0sqWouQ0h%2BRvDLcWQfskN75D871XxReK8um2yh0XjCOENc%2B59bD%2Bbc%2FnBMQGANL7zlonDHAG1HIxGd2oQQst0EXrxGdb8LvbRN8Laan9gIVTkvroqit2QF9vHx%2Fo7Wt1Qfh2kw2uaTwgY6pgFhPulFUUDNIMdxZTpJtY%2BqkYOr1r5M8TCWLicvTWSSEX%2FqqpQcSfeDXB2U6cO6N%2B8FyoEDgb1ZhFkoxUBTUNVYmtIYhLNEkPqkEftj5SCylAmVMpYHqorVMblwyPVty89zcBjU9YvoUExUKXnGu6zfaCs4CNDg2GDYQUiLh0N9n8CCIdssogyedGnbro9GGOIQA7gIZhsETbdnhwv4Llf08LpatXGb&X-Amz-Signature=4efb26b30acd90a5633644c792f1d1f35b70c71934fac571f2a349593270f5b9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SWKKLBH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe0f%2BKykJ5HivlanjjGR8ZPU0ttIg8bGsI6dSHEtsOzAiAcMsLeYiRGlIba09v8oViVd%2FU%2FyHpbIgaytR9J2liquSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTLWCYkDXIzcBsA98KtwD%2FmJ%2FlZQ22DefMogB2nu6VI6Io%2BDZcW88uGHtSZ6CgWNXhA0KU6bX%2F%2BavI5jHM4sp0jy354SdOA4C96S28NIwt9FbG70lpBRLKr46DjyE6Yw65nzNbLHys2Q34169j6hHvtPyNV7pB9DYF0f2JG0jxv%2B2w61htEAMJaaoDO4L4d7c0QhsuPlmwyA6afmmszamjuwAoJQR57N8DIouowzlWfvpqpxrdHXwbZ6mrWFKRlF%2FmoxFsylIH7P3kPc4kcu74LYFm0exYlneI2egB52ebhFvjJc2hlYbv5NgmqD4cT6LZV8w%2BT%2FoqqK4AENAP%2FMlEtiEKUxDUAam62orSReWLYdGcUgVz3j8X%2BdMIoz%2BAsM5nKIWlZFO2sSSag2im4MwhUOT%2BBSxNe8VNdB9cuU4mrvCEZuJOf108uGPshtatYCHxwt6VcltzMUea2BdBm7TjvDwuULkGkj%2BAZhokIqKuV48Ak7k1N9tUlY9gD4u4rlLSKtVxaNszO0sqWouQ0h%2BRvDLcWQfskN75D871XxReK8um2yh0XjCOENc%2B59bD%2Bbc%2FnBMQGANL7zlonDHAG1HIxGd2oQQst0EXrxGdb8LvbRN8Laan9gIVTkvroqit2QF9vHx%2Fo7Wt1Qfh2kw2uaTwgY6pgFhPulFUUDNIMdxZTpJtY%2BqkYOr1r5M8TCWLicvTWSSEX%2FqqpQcSfeDXB2U6cO6N%2B8FyoEDgb1ZhFkoxUBTUNVYmtIYhLNEkPqkEftj5SCylAmVMpYHqorVMblwyPVty89zcBjU9YvoUExUKXnGu6zfaCs4CNDg2GDYQUiLh0N9n8CCIdssogyedGnbro9GGOIQA7gIZhsETbdnhwv4Llf08LpatXGb&X-Amz-Signature=7cc9afeb99c19f89cd6cc83f0d4c6d34eb73cd32d6a6379cffdbcd03044aaab1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SWKKLBH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe0f%2BKykJ5HivlanjjGR8ZPU0ttIg8bGsI6dSHEtsOzAiAcMsLeYiRGlIba09v8oViVd%2FU%2FyHpbIgaytR9J2liquSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTLWCYkDXIzcBsA98KtwD%2FmJ%2FlZQ22DefMogB2nu6VI6Io%2BDZcW88uGHtSZ6CgWNXhA0KU6bX%2F%2BavI5jHM4sp0jy354SdOA4C96S28NIwt9FbG70lpBRLKr46DjyE6Yw65nzNbLHys2Q34169j6hHvtPyNV7pB9DYF0f2JG0jxv%2B2w61htEAMJaaoDO4L4d7c0QhsuPlmwyA6afmmszamjuwAoJQR57N8DIouowzlWfvpqpxrdHXwbZ6mrWFKRlF%2FmoxFsylIH7P3kPc4kcu74LYFm0exYlneI2egB52ebhFvjJc2hlYbv5NgmqD4cT6LZV8w%2BT%2FoqqK4AENAP%2FMlEtiEKUxDUAam62orSReWLYdGcUgVz3j8X%2BdMIoz%2BAsM5nKIWlZFO2sSSag2im4MwhUOT%2BBSxNe8VNdB9cuU4mrvCEZuJOf108uGPshtatYCHxwt6VcltzMUea2BdBm7TjvDwuULkGkj%2BAZhokIqKuV48Ak7k1N9tUlY9gD4u4rlLSKtVxaNszO0sqWouQ0h%2BRvDLcWQfskN75D871XxReK8um2yh0XjCOENc%2B59bD%2Bbc%2FnBMQGANL7zlonDHAG1HIxGd2oQQst0EXrxGdb8LvbRN8Laan9gIVTkvroqit2QF9vHx%2Fo7Wt1Qfh2kw2uaTwgY6pgFhPulFUUDNIMdxZTpJtY%2BqkYOr1r5M8TCWLicvTWSSEX%2FqqpQcSfeDXB2U6cO6N%2B8FyoEDgb1ZhFkoxUBTUNVYmtIYhLNEkPqkEftj5SCylAmVMpYHqorVMblwyPVty89zcBjU9YvoUExUKXnGu6zfaCs4CNDg2GDYQUiLh0N9n8CCIdssogyedGnbro9GGOIQA7gIZhsETbdnhwv4Llf08LpatXGb&X-Amz-Signature=9f6e5cb6ffdc47a08d0c4ecddb9811aabfb544e3a1bbf407afdf52b96081f992&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SWKKLBH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe0f%2BKykJ5HivlanjjGR8ZPU0ttIg8bGsI6dSHEtsOzAiAcMsLeYiRGlIba09v8oViVd%2FU%2FyHpbIgaytR9J2liquSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTLWCYkDXIzcBsA98KtwD%2FmJ%2FlZQ22DefMogB2nu6VI6Io%2BDZcW88uGHtSZ6CgWNXhA0KU6bX%2F%2BavI5jHM4sp0jy354SdOA4C96S28NIwt9FbG70lpBRLKr46DjyE6Yw65nzNbLHys2Q34169j6hHvtPyNV7pB9DYF0f2JG0jxv%2B2w61htEAMJaaoDO4L4d7c0QhsuPlmwyA6afmmszamjuwAoJQR57N8DIouowzlWfvpqpxrdHXwbZ6mrWFKRlF%2FmoxFsylIH7P3kPc4kcu74LYFm0exYlneI2egB52ebhFvjJc2hlYbv5NgmqD4cT6LZV8w%2BT%2FoqqK4AENAP%2FMlEtiEKUxDUAam62orSReWLYdGcUgVz3j8X%2BdMIoz%2BAsM5nKIWlZFO2sSSag2im4MwhUOT%2BBSxNe8VNdB9cuU4mrvCEZuJOf108uGPshtatYCHxwt6VcltzMUea2BdBm7TjvDwuULkGkj%2BAZhokIqKuV48Ak7k1N9tUlY9gD4u4rlLSKtVxaNszO0sqWouQ0h%2BRvDLcWQfskN75D871XxReK8um2yh0XjCOENc%2B59bD%2Bbc%2FnBMQGANL7zlonDHAG1HIxGd2oQQst0EXrxGdb8LvbRN8Laan9gIVTkvroqit2QF9vHx%2Fo7Wt1Qfh2kw2uaTwgY6pgFhPulFUUDNIMdxZTpJtY%2BqkYOr1r5M8TCWLicvTWSSEX%2FqqpQcSfeDXB2U6cO6N%2B8FyoEDgb1ZhFkoxUBTUNVYmtIYhLNEkPqkEftj5SCylAmVMpYHqorVMblwyPVty89zcBjU9YvoUExUKXnGu6zfaCs4CNDg2GDYQUiLh0N9n8CCIdssogyedGnbro9GGOIQA7gIZhsETbdnhwv4Llf08LpatXGb&X-Amz-Signature=6dfe0751eba8ad56e20d496a817d4c5294c3369c1c401de2e2fe4bb4f47de87c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
