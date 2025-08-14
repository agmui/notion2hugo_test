---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2I7MMTI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDNVGaoltTB9LZwFPJ5h4TIKzMJY6c6d8zyYrHiUZlWCQIhAIBtKngL1fBbsFD5v%2BfBR4aCCT%2Bl5mH0pcLN2xJ7ieh2Kv8DCE4QABoMNjM3NDIzMTgzODA1IgybNjxKtMfgFxX14osq3AMVL8m7nsQtvLN0kxNAVq3QMlAXM1pAjTNYWI8bReYHm9%2BMX2P%2FnN%2B0szggWn25TxWFKOR35SirE3CNXR6CLex6feCLxQdoFFdLSKodO7d763NtkqTejcYvEFIdf0po5AkaBpQbb6hsBW6l8JLVxPsbA5d3t%2BrCc0d6fBlb1SvFeIGywustry7HssYveSFvdBDuNs4PGa0ohb9OoaRvtCtzKdzYL9QabG%2Bk5KHcuuxR%2FBx1C12Ta3xmMe0DvXwJl6sqKgcYeNGKOjfK5jwV62ihs%2Bny5VOOj21ogwfFyjNbE01U3xDHc7DiRHVDbFqMwoFSLjCRy%2B%2F6EHnNU%2Fifvr1FT6dJPRIOcGrYTNJap11KgD4owDs7ztJRYnZ%2BzYVnF%2Fl%2Fv6%2FSasfrIsGmY7okCvkTCCKOXUyg3WWoVAKgw575PeIXRmEtYUUK1BUl%2FoxzjdlpLfeWj2pKK8Xs8XEHc0wxW93yOTk6SQJrW8cTAsiyEDJJXTfNqJ5pFRMcv5DlTVMxnEsUmyYU%2FeYtzMlO1OJosSpTkNEYyYNpNJY9G27K4oWU%2BI15LEC4RzsPlmlf%2FhIvJGjXArQLPLMRS4G1wde%2FL0HJygAQyJnNvi7vCohpvEca%2FV3NVXEh6suwsjCmjfnEBjqkActc918TWONekPpXxKT6U4NW%2BbLkJM%2FBaTLKW4Puh%2B0698F5FjYrzAWnFzEZSGB2C3MiA5olCZcJDOXpZvmzZ2oN5GTBwqlt11rZvqI63HpR3TaaZ%2Fq1MeiLeeJed5biOLBx3JOtJ8F8gYv4Sgc0eipfpKFwyvO%2FoLowYGIfU8PcgIFwZuPziV%2BpdjtEMgiG5KlXoWH7nLryyxXb0xyrzigZT2Fd&X-Amz-Signature=0066fded7f58c482358c2304edf63a1c267eea046dd426af9ec1b667392c270b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2I7MMTI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDNVGaoltTB9LZwFPJ5h4TIKzMJY6c6d8zyYrHiUZlWCQIhAIBtKngL1fBbsFD5v%2BfBR4aCCT%2Bl5mH0pcLN2xJ7ieh2Kv8DCE4QABoMNjM3NDIzMTgzODA1IgybNjxKtMfgFxX14osq3AMVL8m7nsQtvLN0kxNAVq3QMlAXM1pAjTNYWI8bReYHm9%2BMX2P%2FnN%2B0szggWn25TxWFKOR35SirE3CNXR6CLex6feCLxQdoFFdLSKodO7d763NtkqTejcYvEFIdf0po5AkaBpQbb6hsBW6l8JLVxPsbA5d3t%2BrCc0d6fBlb1SvFeIGywustry7HssYveSFvdBDuNs4PGa0ohb9OoaRvtCtzKdzYL9QabG%2Bk5KHcuuxR%2FBx1C12Ta3xmMe0DvXwJl6sqKgcYeNGKOjfK5jwV62ihs%2Bny5VOOj21ogwfFyjNbE01U3xDHc7DiRHVDbFqMwoFSLjCRy%2B%2F6EHnNU%2Fifvr1FT6dJPRIOcGrYTNJap11KgD4owDs7ztJRYnZ%2BzYVnF%2Fl%2Fv6%2FSasfrIsGmY7okCvkTCCKOXUyg3WWoVAKgw575PeIXRmEtYUUK1BUl%2FoxzjdlpLfeWj2pKK8Xs8XEHc0wxW93yOTk6SQJrW8cTAsiyEDJJXTfNqJ5pFRMcv5DlTVMxnEsUmyYU%2FeYtzMlO1OJosSpTkNEYyYNpNJY9G27K4oWU%2BI15LEC4RzsPlmlf%2FhIvJGjXArQLPLMRS4G1wde%2FL0HJygAQyJnNvi7vCohpvEca%2FV3NVXEh6suwsjCmjfnEBjqkActc918TWONekPpXxKT6U4NW%2BbLkJM%2FBaTLKW4Puh%2B0698F5FjYrzAWnFzEZSGB2C3MiA5olCZcJDOXpZvmzZ2oN5GTBwqlt11rZvqI63HpR3TaaZ%2Fq1MeiLeeJed5biOLBx3JOtJ8F8gYv4Sgc0eipfpKFwyvO%2FoLowYGIfU8PcgIFwZuPziV%2BpdjtEMgiG5KlXoWH7nLryyxXb0xyrzigZT2Fd&X-Amz-Signature=8e0fd179b5bbc25e7d93a5df87b9f53290084a86875621e97e09e9106a4e2f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2I7MMTI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDNVGaoltTB9LZwFPJ5h4TIKzMJY6c6d8zyYrHiUZlWCQIhAIBtKngL1fBbsFD5v%2BfBR4aCCT%2Bl5mH0pcLN2xJ7ieh2Kv8DCE4QABoMNjM3NDIzMTgzODA1IgybNjxKtMfgFxX14osq3AMVL8m7nsQtvLN0kxNAVq3QMlAXM1pAjTNYWI8bReYHm9%2BMX2P%2FnN%2B0szggWn25TxWFKOR35SirE3CNXR6CLex6feCLxQdoFFdLSKodO7d763NtkqTejcYvEFIdf0po5AkaBpQbb6hsBW6l8JLVxPsbA5d3t%2BrCc0d6fBlb1SvFeIGywustry7HssYveSFvdBDuNs4PGa0ohb9OoaRvtCtzKdzYL9QabG%2Bk5KHcuuxR%2FBx1C12Ta3xmMe0DvXwJl6sqKgcYeNGKOjfK5jwV62ihs%2Bny5VOOj21ogwfFyjNbE01U3xDHc7DiRHVDbFqMwoFSLjCRy%2B%2F6EHnNU%2Fifvr1FT6dJPRIOcGrYTNJap11KgD4owDs7ztJRYnZ%2BzYVnF%2Fl%2Fv6%2FSasfrIsGmY7okCvkTCCKOXUyg3WWoVAKgw575PeIXRmEtYUUK1BUl%2FoxzjdlpLfeWj2pKK8Xs8XEHc0wxW93yOTk6SQJrW8cTAsiyEDJJXTfNqJ5pFRMcv5DlTVMxnEsUmyYU%2FeYtzMlO1OJosSpTkNEYyYNpNJY9G27K4oWU%2BI15LEC4RzsPlmlf%2FhIvJGjXArQLPLMRS4G1wde%2FL0HJygAQyJnNvi7vCohpvEca%2FV3NVXEh6suwsjCmjfnEBjqkActc918TWONekPpXxKT6U4NW%2BbLkJM%2FBaTLKW4Puh%2B0698F5FjYrzAWnFzEZSGB2C3MiA5olCZcJDOXpZvmzZ2oN5GTBwqlt11rZvqI63HpR3TaaZ%2Fq1MeiLeeJed5biOLBx3JOtJ8F8gYv4Sgc0eipfpKFwyvO%2FoLowYGIfU8PcgIFwZuPziV%2BpdjtEMgiG5KlXoWH7nLryyxXb0xyrzigZT2Fd&X-Amz-Signature=5e31c6e7bb22f8932605afb96ce9dedcf736e64e618a445041960b2d1f66f9f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2I7MMTI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDNVGaoltTB9LZwFPJ5h4TIKzMJY6c6d8zyYrHiUZlWCQIhAIBtKngL1fBbsFD5v%2BfBR4aCCT%2Bl5mH0pcLN2xJ7ieh2Kv8DCE4QABoMNjM3NDIzMTgzODA1IgybNjxKtMfgFxX14osq3AMVL8m7nsQtvLN0kxNAVq3QMlAXM1pAjTNYWI8bReYHm9%2BMX2P%2FnN%2B0szggWn25TxWFKOR35SirE3CNXR6CLex6feCLxQdoFFdLSKodO7d763NtkqTejcYvEFIdf0po5AkaBpQbb6hsBW6l8JLVxPsbA5d3t%2BrCc0d6fBlb1SvFeIGywustry7HssYveSFvdBDuNs4PGa0ohb9OoaRvtCtzKdzYL9QabG%2Bk5KHcuuxR%2FBx1C12Ta3xmMe0DvXwJl6sqKgcYeNGKOjfK5jwV62ihs%2Bny5VOOj21ogwfFyjNbE01U3xDHc7DiRHVDbFqMwoFSLjCRy%2B%2F6EHnNU%2Fifvr1FT6dJPRIOcGrYTNJap11KgD4owDs7ztJRYnZ%2BzYVnF%2Fl%2Fv6%2FSasfrIsGmY7okCvkTCCKOXUyg3WWoVAKgw575PeIXRmEtYUUK1BUl%2FoxzjdlpLfeWj2pKK8Xs8XEHc0wxW93yOTk6SQJrW8cTAsiyEDJJXTfNqJ5pFRMcv5DlTVMxnEsUmyYU%2FeYtzMlO1OJosSpTkNEYyYNpNJY9G27K4oWU%2BI15LEC4RzsPlmlf%2FhIvJGjXArQLPLMRS4G1wde%2FL0HJygAQyJnNvi7vCohpvEca%2FV3NVXEh6suwsjCmjfnEBjqkActc918TWONekPpXxKT6U4NW%2BbLkJM%2FBaTLKW4Puh%2B0698F5FjYrzAWnFzEZSGB2C3MiA5olCZcJDOXpZvmzZ2oN5GTBwqlt11rZvqI63HpR3TaaZ%2Fq1MeiLeeJed5biOLBx3JOtJ8F8gYv4Sgc0eipfpKFwyvO%2FoLowYGIfU8PcgIFwZuPziV%2BpdjtEMgiG5KlXoWH7nLryyxXb0xyrzigZT2Fd&X-Amz-Signature=66928c76a287d2b1ff0707afc01be82b0a9fec374d10a76714fa138f5272c1ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2I7MMTI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDNVGaoltTB9LZwFPJ5h4TIKzMJY6c6d8zyYrHiUZlWCQIhAIBtKngL1fBbsFD5v%2BfBR4aCCT%2Bl5mH0pcLN2xJ7ieh2Kv8DCE4QABoMNjM3NDIzMTgzODA1IgybNjxKtMfgFxX14osq3AMVL8m7nsQtvLN0kxNAVq3QMlAXM1pAjTNYWI8bReYHm9%2BMX2P%2FnN%2B0szggWn25TxWFKOR35SirE3CNXR6CLex6feCLxQdoFFdLSKodO7d763NtkqTejcYvEFIdf0po5AkaBpQbb6hsBW6l8JLVxPsbA5d3t%2BrCc0d6fBlb1SvFeIGywustry7HssYveSFvdBDuNs4PGa0ohb9OoaRvtCtzKdzYL9QabG%2Bk5KHcuuxR%2FBx1C12Ta3xmMe0DvXwJl6sqKgcYeNGKOjfK5jwV62ihs%2Bny5VOOj21ogwfFyjNbE01U3xDHc7DiRHVDbFqMwoFSLjCRy%2B%2F6EHnNU%2Fifvr1FT6dJPRIOcGrYTNJap11KgD4owDs7ztJRYnZ%2BzYVnF%2Fl%2Fv6%2FSasfrIsGmY7okCvkTCCKOXUyg3WWoVAKgw575PeIXRmEtYUUK1BUl%2FoxzjdlpLfeWj2pKK8Xs8XEHc0wxW93yOTk6SQJrW8cTAsiyEDJJXTfNqJ5pFRMcv5DlTVMxnEsUmyYU%2FeYtzMlO1OJosSpTkNEYyYNpNJY9G27K4oWU%2BI15LEC4RzsPlmlf%2FhIvJGjXArQLPLMRS4G1wde%2FL0HJygAQyJnNvi7vCohpvEca%2FV3NVXEh6suwsjCmjfnEBjqkActc918TWONekPpXxKT6U4NW%2BbLkJM%2FBaTLKW4Puh%2B0698F5FjYrzAWnFzEZSGB2C3MiA5olCZcJDOXpZvmzZ2oN5GTBwqlt11rZvqI63HpR3TaaZ%2Fq1MeiLeeJed5biOLBx3JOtJ8F8gYv4Sgc0eipfpKFwyvO%2FoLowYGIfU8PcgIFwZuPziV%2BpdjtEMgiG5KlXoWH7nLryyxXb0xyrzigZT2Fd&X-Amz-Signature=b8083db1167d3b49126e4a9c4789a237e3c831be614e6b0153109cb22a132449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2I7MMTI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDNVGaoltTB9LZwFPJ5h4TIKzMJY6c6d8zyYrHiUZlWCQIhAIBtKngL1fBbsFD5v%2BfBR4aCCT%2Bl5mH0pcLN2xJ7ieh2Kv8DCE4QABoMNjM3NDIzMTgzODA1IgybNjxKtMfgFxX14osq3AMVL8m7nsQtvLN0kxNAVq3QMlAXM1pAjTNYWI8bReYHm9%2BMX2P%2FnN%2B0szggWn25TxWFKOR35SirE3CNXR6CLex6feCLxQdoFFdLSKodO7d763NtkqTejcYvEFIdf0po5AkaBpQbb6hsBW6l8JLVxPsbA5d3t%2BrCc0d6fBlb1SvFeIGywustry7HssYveSFvdBDuNs4PGa0ohb9OoaRvtCtzKdzYL9QabG%2Bk5KHcuuxR%2FBx1C12Ta3xmMe0DvXwJl6sqKgcYeNGKOjfK5jwV62ihs%2Bny5VOOj21ogwfFyjNbE01U3xDHc7DiRHVDbFqMwoFSLjCRy%2B%2F6EHnNU%2Fifvr1FT6dJPRIOcGrYTNJap11KgD4owDs7ztJRYnZ%2BzYVnF%2Fl%2Fv6%2FSasfrIsGmY7okCvkTCCKOXUyg3WWoVAKgw575PeIXRmEtYUUK1BUl%2FoxzjdlpLfeWj2pKK8Xs8XEHc0wxW93yOTk6SQJrW8cTAsiyEDJJXTfNqJ5pFRMcv5DlTVMxnEsUmyYU%2FeYtzMlO1OJosSpTkNEYyYNpNJY9G27K4oWU%2BI15LEC4RzsPlmlf%2FhIvJGjXArQLPLMRS4G1wde%2FL0HJygAQyJnNvi7vCohpvEca%2FV3NVXEh6suwsjCmjfnEBjqkActc918TWONekPpXxKT6U4NW%2BbLkJM%2FBaTLKW4Puh%2B0698F5FjYrzAWnFzEZSGB2C3MiA5olCZcJDOXpZvmzZ2oN5GTBwqlt11rZvqI63HpR3TaaZ%2Fq1MeiLeeJed5biOLBx3JOtJ8F8gYv4Sgc0eipfpKFwyvO%2FoLowYGIfU8PcgIFwZuPziV%2BpdjtEMgiG5KlXoWH7nLryyxXb0xyrzigZT2Fd&X-Amz-Signature=369518466878ba77a3247d54b4f7dfa6ac1ba9a6a73f84b0c3a8ae343292c080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2I7MMTI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDNVGaoltTB9LZwFPJ5h4TIKzMJY6c6d8zyYrHiUZlWCQIhAIBtKngL1fBbsFD5v%2BfBR4aCCT%2Bl5mH0pcLN2xJ7ieh2Kv8DCE4QABoMNjM3NDIzMTgzODA1IgybNjxKtMfgFxX14osq3AMVL8m7nsQtvLN0kxNAVq3QMlAXM1pAjTNYWI8bReYHm9%2BMX2P%2FnN%2B0szggWn25TxWFKOR35SirE3CNXR6CLex6feCLxQdoFFdLSKodO7d763NtkqTejcYvEFIdf0po5AkaBpQbb6hsBW6l8JLVxPsbA5d3t%2BrCc0d6fBlb1SvFeIGywustry7HssYveSFvdBDuNs4PGa0ohb9OoaRvtCtzKdzYL9QabG%2Bk5KHcuuxR%2FBx1C12Ta3xmMe0DvXwJl6sqKgcYeNGKOjfK5jwV62ihs%2Bny5VOOj21ogwfFyjNbE01U3xDHc7DiRHVDbFqMwoFSLjCRy%2B%2F6EHnNU%2Fifvr1FT6dJPRIOcGrYTNJap11KgD4owDs7ztJRYnZ%2BzYVnF%2Fl%2Fv6%2FSasfrIsGmY7okCvkTCCKOXUyg3WWoVAKgw575PeIXRmEtYUUK1BUl%2FoxzjdlpLfeWj2pKK8Xs8XEHc0wxW93yOTk6SQJrW8cTAsiyEDJJXTfNqJ5pFRMcv5DlTVMxnEsUmyYU%2FeYtzMlO1OJosSpTkNEYyYNpNJY9G27K4oWU%2BI15LEC4RzsPlmlf%2FhIvJGjXArQLPLMRS4G1wde%2FL0HJygAQyJnNvi7vCohpvEca%2FV3NVXEh6suwsjCmjfnEBjqkActc918TWONekPpXxKT6U4NW%2BbLkJM%2FBaTLKW4Puh%2B0698F5FjYrzAWnFzEZSGB2C3MiA5olCZcJDOXpZvmzZ2oN5GTBwqlt11rZvqI63HpR3TaaZ%2Fq1MeiLeeJed5biOLBx3JOtJ8F8gYv4Sgc0eipfpKFwyvO%2FoLowYGIfU8PcgIFwZuPziV%2BpdjtEMgiG5KlXoWH7nLryyxXb0xyrzigZT2Fd&X-Amz-Signature=fec4fff9ccac188e6ad03bc898bc2b99067060f61e7feb26da8e9f5ca1631e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
