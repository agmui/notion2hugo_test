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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULZIRWNI%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHILFHPj8oZ3TCsb9qiRKs6LTgExuxrFWuvtyYNnRgB5AiAqv%2BI%2Fnlr0s4xNHRU5rXo%2B5NIHZuV%2BvGCtRLBpDYFkRCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMpHtQ2EC5DHu1L31lKtwDHHcycHyQgSKyGW84%2Bf34d%2Fe4%2BOjb5d%2BANe6%2FQ7RukwgsQ4zhteRGqGYvURHBmI%2BpoqmdFaZv6VXZVWJxb3Zdfb1my8kZ%2BtDHdqlicq0lGN7ZR85XVEIrxRhZslVjEzKtsXBsC6ULFyfRWYETcXBGVSfuPQ8S7KL2fcDAwyiYEILUrO4bCDcNDo%2FgaGD2f9Y4jH4CbYaEdwV4CQpOCpKNKVBD9N5jq2LNBXoQnT428LfRAxZkAWW50B47mG9feVrhIXQAguS6lIYhgyhVYex2kR3aaQtSp7Y29I9JakZcva%2BT15XBYMOPM%2BUJdpwHN5TyfyzkGFVCKB%2FbmVLRyI6igsXdg%2FImXfwqPEWxDyfm9upO00nu9J1m0L2NPlytT8fH%2BnrNs0amJvpEwU6mMl5tyYZfZGGxQqurhPyUhsrlyQmoR36Q71hqnmz54Hh4SwKNS%2FwTZWc7Pmt07dyYqTVPgtRBWvUgrdgdx74ekQ8TD8hQAmU%2BHc4mkYVjUqdm9Hxrlp8HlYXm7GxKaEMb3zCxsrMmfNsNSbJ0hJto1NnWYHNQrUGbZeRHrSxYHP369t45wxIuUbwkKQON3KZbcQlZELmXgjGbW731ybvP5bfMWAbEcl0enFu0ok%2Bysbwwnq2%2BvwY6pgHJoW3Ov852WG4GEUztJaKcTQrYvfsVqehOwxpYyx4QTPkzFzcbn7Sx%2FGIGnMjGS6CKLw%2F29gFAOjOBln3%2ByCJxRmqaYTKEBtVyjY2aLb9j4V66G482vem%2BuNzDcFMNZloQO2Gljxp2FmTtGWxAEAFZnjSoXG9cTwVe7HuLE14V0ieKdlyDJB8oLnU3trMUEDGLr6j%2B1fpW0X3hUwdswK9guI7agOJv&X-Amz-Signature=ceb2fe7ed65b146714b70ead75e9890b4d8b395a3167deafc178dd97ac2b83c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULZIRWNI%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHILFHPj8oZ3TCsb9qiRKs6LTgExuxrFWuvtyYNnRgB5AiAqv%2BI%2Fnlr0s4xNHRU5rXo%2B5NIHZuV%2BvGCtRLBpDYFkRCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMpHtQ2EC5DHu1L31lKtwDHHcycHyQgSKyGW84%2Bf34d%2Fe4%2BOjb5d%2BANe6%2FQ7RukwgsQ4zhteRGqGYvURHBmI%2BpoqmdFaZv6VXZVWJxb3Zdfb1my8kZ%2BtDHdqlicq0lGN7ZR85XVEIrxRhZslVjEzKtsXBsC6ULFyfRWYETcXBGVSfuPQ8S7KL2fcDAwyiYEILUrO4bCDcNDo%2FgaGD2f9Y4jH4CbYaEdwV4CQpOCpKNKVBD9N5jq2LNBXoQnT428LfRAxZkAWW50B47mG9feVrhIXQAguS6lIYhgyhVYex2kR3aaQtSp7Y29I9JakZcva%2BT15XBYMOPM%2BUJdpwHN5TyfyzkGFVCKB%2FbmVLRyI6igsXdg%2FImXfwqPEWxDyfm9upO00nu9J1m0L2NPlytT8fH%2BnrNs0amJvpEwU6mMl5tyYZfZGGxQqurhPyUhsrlyQmoR36Q71hqnmz54Hh4SwKNS%2FwTZWc7Pmt07dyYqTVPgtRBWvUgrdgdx74ekQ8TD8hQAmU%2BHc4mkYVjUqdm9Hxrlp8HlYXm7GxKaEMb3zCxsrMmfNsNSbJ0hJto1NnWYHNQrUGbZeRHrSxYHP369t45wxIuUbwkKQON3KZbcQlZELmXgjGbW731ybvP5bfMWAbEcl0enFu0ok%2Bysbwwnq2%2BvwY6pgHJoW3Ov852WG4GEUztJaKcTQrYvfsVqehOwxpYyx4QTPkzFzcbn7Sx%2FGIGnMjGS6CKLw%2F29gFAOjOBln3%2ByCJxRmqaYTKEBtVyjY2aLb9j4V66G482vem%2BuNzDcFMNZloQO2Gljxp2FmTtGWxAEAFZnjSoXG9cTwVe7HuLE14V0ieKdlyDJB8oLnU3trMUEDGLr6j%2B1fpW0X3hUwdswK9guI7agOJv&X-Amz-Signature=9213c320cc8e151e5a682fbb448c6c27b5f137ce5f3712b9654b9f6d2cb968b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULZIRWNI%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHILFHPj8oZ3TCsb9qiRKs6LTgExuxrFWuvtyYNnRgB5AiAqv%2BI%2Fnlr0s4xNHRU5rXo%2B5NIHZuV%2BvGCtRLBpDYFkRCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMpHtQ2EC5DHu1L31lKtwDHHcycHyQgSKyGW84%2Bf34d%2Fe4%2BOjb5d%2BANe6%2FQ7RukwgsQ4zhteRGqGYvURHBmI%2BpoqmdFaZv6VXZVWJxb3Zdfb1my8kZ%2BtDHdqlicq0lGN7ZR85XVEIrxRhZslVjEzKtsXBsC6ULFyfRWYETcXBGVSfuPQ8S7KL2fcDAwyiYEILUrO4bCDcNDo%2FgaGD2f9Y4jH4CbYaEdwV4CQpOCpKNKVBD9N5jq2LNBXoQnT428LfRAxZkAWW50B47mG9feVrhIXQAguS6lIYhgyhVYex2kR3aaQtSp7Y29I9JakZcva%2BT15XBYMOPM%2BUJdpwHN5TyfyzkGFVCKB%2FbmVLRyI6igsXdg%2FImXfwqPEWxDyfm9upO00nu9J1m0L2NPlytT8fH%2BnrNs0amJvpEwU6mMl5tyYZfZGGxQqurhPyUhsrlyQmoR36Q71hqnmz54Hh4SwKNS%2FwTZWc7Pmt07dyYqTVPgtRBWvUgrdgdx74ekQ8TD8hQAmU%2BHc4mkYVjUqdm9Hxrlp8HlYXm7GxKaEMb3zCxsrMmfNsNSbJ0hJto1NnWYHNQrUGbZeRHrSxYHP369t45wxIuUbwkKQON3KZbcQlZELmXgjGbW731ybvP5bfMWAbEcl0enFu0ok%2Bysbwwnq2%2BvwY6pgHJoW3Ov852WG4GEUztJaKcTQrYvfsVqehOwxpYyx4QTPkzFzcbn7Sx%2FGIGnMjGS6CKLw%2F29gFAOjOBln3%2ByCJxRmqaYTKEBtVyjY2aLb9j4V66G482vem%2BuNzDcFMNZloQO2Gljxp2FmTtGWxAEAFZnjSoXG9cTwVe7HuLE14V0ieKdlyDJB8oLnU3trMUEDGLr6j%2B1fpW0X3hUwdswK9guI7agOJv&X-Amz-Signature=e78d8816d75715ec21347410d6e34572687514c36ec4b70765a2134a88e40322&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULZIRWNI%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHILFHPj8oZ3TCsb9qiRKs6LTgExuxrFWuvtyYNnRgB5AiAqv%2BI%2Fnlr0s4xNHRU5rXo%2B5NIHZuV%2BvGCtRLBpDYFkRCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMpHtQ2EC5DHu1L31lKtwDHHcycHyQgSKyGW84%2Bf34d%2Fe4%2BOjb5d%2BANe6%2FQ7RukwgsQ4zhteRGqGYvURHBmI%2BpoqmdFaZv6VXZVWJxb3Zdfb1my8kZ%2BtDHdqlicq0lGN7ZR85XVEIrxRhZslVjEzKtsXBsC6ULFyfRWYETcXBGVSfuPQ8S7KL2fcDAwyiYEILUrO4bCDcNDo%2FgaGD2f9Y4jH4CbYaEdwV4CQpOCpKNKVBD9N5jq2LNBXoQnT428LfRAxZkAWW50B47mG9feVrhIXQAguS6lIYhgyhVYex2kR3aaQtSp7Y29I9JakZcva%2BT15XBYMOPM%2BUJdpwHN5TyfyzkGFVCKB%2FbmVLRyI6igsXdg%2FImXfwqPEWxDyfm9upO00nu9J1m0L2NPlytT8fH%2BnrNs0amJvpEwU6mMl5tyYZfZGGxQqurhPyUhsrlyQmoR36Q71hqnmz54Hh4SwKNS%2FwTZWc7Pmt07dyYqTVPgtRBWvUgrdgdx74ekQ8TD8hQAmU%2BHc4mkYVjUqdm9Hxrlp8HlYXm7GxKaEMb3zCxsrMmfNsNSbJ0hJto1NnWYHNQrUGbZeRHrSxYHP369t45wxIuUbwkKQON3KZbcQlZELmXgjGbW731ybvP5bfMWAbEcl0enFu0ok%2Bysbwwnq2%2BvwY6pgHJoW3Ov852WG4GEUztJaKcTQrYvfsVqehOwxpYyx4QTPkzFzcbn7Sx%2FGIGnMjGS6CKLw%2F29gFAOjOBln3%2ByCJxRmqaYTKEBtVyjY2aLb9j4V66G482vem%2BuNzDcFMNZloQO2Gljxp2FmTtGWxAEAFZnjSoXG9cTwVe7HuLE14V0ieKdlyDJB8oLnU3trMUEDGLr6j%2B1fpW0X3hUwdswK9guI7agOJv&X-Amz-Signature=0056ae3f1aabd07f080fbe0044d27f5fad6fa6c9b8b78e2966097739787bf4fb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULZIRWNI%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHILFHPj8oZ3TCsb9qiRKs6LTgExuxrFWuvtyYNnRgB5AiAqv%2BI%2Fnlr0s4xNHRU5rXo%2B5NIHZuV%2BvGCtRLBpDYFkRCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMpHtQ2EC5DHu1L31lKtwDHHcycHyQgSKyGW84%2Bf34d%2Fe4%2BOjb5d%2BANe6%2FQ7RukwgsQ4zhteRGqGYvURHBmI%2BpoqmdFaZv6VXZVWJxb3Zdfb1my8kZ%2BtDHdqlicq0lGN7ZR85XVEIrxRhZslVjEzKtsXBsC6ULFyfRWYETcXBGVSfuPQ8S7KL2fcDAwyiYEILUrO4bCDcNDo%2FgaGD2f9Y4jH4CbYaEdwV4CQpOCpKNKVBD9N5jq2LNBXoQnT428LfRAxZkAWW50B47mG9feVrhIXQAguS6lIYhgyhVYex2kR3aaQtSp7Y29I9JakZcva%2BT15XBYMOPM%2BUJdpwHN5TyfyzkGFVCKB%2FbmVLRyI6igsXdg%2FImXfwqPEWxDyfm9upO00nu9J1m0L2NPlytT8fH%2BnrNs0amJvpEwU6mMl5tyYZfZGGxQqurhPyUhsrlyQmoR36Q71hqnmz54Hh4SwKNS%2FwTZWc7Pmt07dyYqTVPgtRBWvUgrdgdx74ekQ8TD8hQAmU%2BHc4mkYVjUqdm9Hxrlp8HlYXm7GxKaEMb3zCxsrMmfNsNSbJ0hJto1NnWYHNQrUGbZeRHrSxYHP369t45wxIuUbwkKQON3KZbcQlZELmXgjGbW731ybvP5bfMWAbEcl0enFu0ok%2Bysbwwnq2%2BvwY6pgHJoW3Ov852WG4GEUztJaKcTQrYvfsVqehOwxpYyx4QTPkzFzcbn7Sx%2FGIGnMjGS6CKLw%2F29gFAOjOBln3%2ByCJxRmqaYTKEBtVyjY2aLb9j4V66G482vem%2BuNzDcFMNZloQO2Gljxp2FmTtGWxAEAFZnjSoXG9cTwVe7HuLE14V0ieKdlyDJB8oLnU3trMUEDGLr6j%2B1fpW0X3hUwdswK9guI7agOJv&X-Amz-Signature=0d54b8f4d20ff89d8da28014b028e962f4556240564e3c73fcb2bbecfba098f4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULZIRWNI%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHILFHPj8oZ3TCsb9qiRKs6LTgExuxrFWuvtyYNnRgB5AiAqv%2BI%2Fnlr0s4xNHRU5rXo%2B5NIHZuV%2BvGCtRLBpDYFkRCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMpHtQ2EC5DHu1L31lKtwDHHcycHyQgSKyGW84%2Bf34d%2Fe4%2BOjb5d%2BANe6%2FQ7RukwgsQ4zhteRGqGYvURHBmI%2BpoqmdFaZv6VXZVWJxb3Zdfb1my8kZ%2BtDHdqlicq0lGN7ZR85XVEIrxRhZslVjEzKtsXBsC6ULFyfRWYETcXBGVSfuPQ8S7KL2fcDAwyiYEILUrO4bCDcNDo%2FgaGD2f9Y4jH4CbYaEdwV4CQpOCpKNKVBD9N5jq2LNBXoQnT428LfRAxZkAWW50B47mG9feVrhIXQAguS6lIYhgyhVYex2kR3aaQtSp7Y29I9JakZcva%2BT15XBYMOPM%2BUJdpwHN5TyfyzkGFVCKB%2FbmVLRyI6igsXdg%2FImXfwqPEWxDyfm9upO00nu9J1m0L2NPlytT8fH%2BnrNs0amJvpEwU6mMl5tyYZfZGGxQqurhPyUhsrlyQmoR36Q71hqnmz54Hh4SwKNS%2FwTZWc7Pmt07dyYqTVPgtRBWvUgrdgdx74ekQ8TD8hQAmU%2BHc4mkYVjUqdm9Hxrlp8HlYXm7GxKaEMb3zCxsrMmfNsNSbJ0hJto1NnWYHNQrUGbZeRHrSxYHP369t45wxIuUbwkKQON3KZbcQlZELmXgjGbW731ybvP5bfMWAbEcl0enFu0ok%2Bysbwwnq2%2BvwY6pgHJoW3Ov852WG4GEUztJaKcTQrYvfsVqehOwxpYyx4QTPkzFzcbn7Sx%2FGIGnMjGS6CKLw%2F29gFAOjOBln3%2ByCJxRmqaYTKEBtVyjY2aLb9j4V66G482vem%2BuNzDcFMNZloQO2Gljxp2FmTtGWxAEAFZnjSoXG9cTwVe7HuLE14V0ieKdlyDJB8oLnU3trMUEDGLr6j%2B1fpW0X3hUwdswK9guI7agOJv&X-Amz-Signature=a07517dc96aa8a8cf6c274e92fd9aeee06f34d8c266a09769bf34496176ceee4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULZIRWNI%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHILFHPj8oZ3TCsb9qiRKs6LTgExuxrFWuvtyYNnRgB5AiAqv%2BI%2Fnlr0s4xNHRU5rXo%2B5NIHZuV%2BvGCtRLBpDYFkRCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMpHtQ2EC5DHu1L31lKtwDHHcycHyQgSKyGW84%2Bf34d%2Fe4%2BOjb5d%2BANe6%2FQ7RukwgsQ4zhteRGqGYvURHBmI%2BpoqmdFaZv6VXZVWJxb3Zdfb1my8kZ%2BtDHdqlicq0lGN7ZR85XVEIrxRhZslVjEzKtsXBsC6ULFyfRWYETcXBGVSfuPQ8S7KL2fcDAwyiYEILUrO4bCDcNDo%2FgaGD2f9Y4jH4CbYaEdwV4CQpOCpKNKVBD9N5jq2LNBXoQnT428LfRAxZkAWW50B47mG9feVrhIXQAguS6lIYhgyhVYex2kR3aaQtSp7Y29I9JakZcva%2BT15XBYMOPM%2BUJdpwHN5TyfyzkGFVCKB%2FbmVLRyI6igsXdg%2FImXfwqPEWxDyfm9upO00nu9J1m0L2NPlytT8fH%2BnrNs0amJvpEwU6mMl5tyYZfZGGxQqurhPyUhsrlyQmoR36Q71hqnmz54Hh4SwKNS%2FwTZWc7Pmt07dyYqTVPgtRBWvUgrdgdx74ekQ8TD8hQAmU%2BHc4mkYVjUqdm9Hxrlp8HlYXm7GxKaEMb3zCxsrMmfNsNSbJ0hJto1NnWYHNQrUGbZeRHrSxYHP369t45wxIuUbwkKQON3KZbcQlZELmXgjGbW731ybvP5bfMWAbEcl0enFu0ok%2Bysbwwnq2%2BvwY6pgHJoW3Ov852WG4GEUztJaKcTQrYvfsVqehOwxpYyx4QTPkzFzcbn7Sx%2FGIGnMjGS6CKLw%2F29gFAOjOBln3%2ByCJxRmqaYTKEBtVyjY2aLb9j4V66G482vem%2BuNzDcFMNZloQO2Gljxp2FmTtGWxAEAFZnjSoXG9cTwVe7HuLE14V0ieKdlyDJB8oLnU3trMUEDGLr6j%2B1fpW0X3hUwdswK9guI7agOJv&X-Amz-Signature=e45c168c356acc4441ccf0e7b501306757de25be19064aa27f49d4902a9a2890&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
