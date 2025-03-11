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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTW5AICB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCkW%2F%2F7afwQ5SkV9wSlXEcA%2BOVHdS56NsJxgL2%2FmZrQlwIgOlEN1KYV%2FDMXdjGZfFnwSGdrnuqlswLTtMQSAaFVXigqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuFhmpCXEXls1SFEyrcA3J65vV97bOLlVU9o7JQF4fDD2l6CR5W80hlugxpV9QZaIDrQbmF1B%2BtzV%2BXXX7HgNL6x6J%2FjZu9p4xNCy%2Fn1IyLckOUISkkvM7gOBcgaizAsWQly%2FLY%2BPw6qNGKwfiSyjEVXWJL%2F%2Ft7ZZtpH6asq3l1%2F1ZlB%2Fhp%2BvnLNQ%2Fp%2BlM1L6cqiKvDhtxehd5HmTvpPljWDRDDlTK7ixeHMxusVMUlwu52sUwTZ4KJz8%2F0z0%2FrKBqXC4ObAFWRgBdmrvV0e%2Bzx6KRyg%2BNYEV2FBeujvlncjdk%2BuJMCVY5R5MmBHrFYY3GgUgwxnuHw0JzwUEBRMBODErkO6nV82otAljJXjxfxvOQDHW%2BmS9Lou%2Bx0%2FVKDSG3hEDwmHbz4%2BVO38J9oV%2BbHGHYsL8ujEwmP%2Fh6%2Fb7lLb0%2BXeWKS%2BC93IqFBNFfPqiRCgrjlANHnF%2BZMW6xVC9oUStFXBfciB%2BjV4g4gQ3D2G7aEdVP55Aj8%2FXlyaNh5JiQYQEPWDIEiH8%2FmytsAByr0yvuXx9W3CLF8XQ6OWYT%2BLQSlgVVGj9ixNXb3rz%2Bqo%2FW1CsaWuYnAQ7sQHdvMCyIMXdGdlJiSki5ShOowhQ22M2IBwvOgLaBgLJ2qoFz5BZex41Ul0zBGqgrwMLSYwL4GOqUB%2BS9321Y4YDoWwlJm%2BNxndwWZc2fL6%2BpzPB1jYhTSb0Ssz6c9uUrm%2BEfGxZMq0uqH%2B0KZlHDVW0zUyWDZalCoyTdn%2BRT6z4TMoTJcI5JoHOpmNSNPHdOasB3mQewgkZaVWxrlydtBZqdg4gjfU2SwR%2BquiaQlZZmsmNDIUEIkeMVCRaBRa%2Fgxrs%2BT5ZiBbHgnQbaWjAxRvxv%2FYYwhTjr2eIfiw%2BQY&X-Amz-Signature=8e19c963cb27d762d2e016c2be36b6b747219e88da1ff3ba42c7d484ab9ba5e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTW5AICB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCkW%2F%2F7afwQ5SkV9wSlXEcA%2BOVHdS56NsJxgL2%2FmZrQlwIgOlEN1KYV%2FDMXdjGZfFnwSGdrnuqlswLTtMQSAaFVXigqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuFhmpCXEXls1SFEyrcA3J65vV97bOLlVU9o7JQF4fDD2l6CR5W80hlugxpV9QZaIDrQbmF1B%2BtzV%2BXXX7HgNL6x6J%2FjZu9p4xNCy%2Fn1IyLckOUISkkvM7gOBcgaizAsWQly%2FLY%2BPw6qNGKwfiSyjEVXWJL%2F%2Ft7ZZtpH6asq3l1%2F1ZlB%2Fhp%2BvnLNQ%2Fp%2BlM1L6cqiKvDhtxehd5HmTvpPljWDRDDlTK7ixeHMxusVMUlwu52sUwTZ4KJz8%2F0z0%2FrKBqXC4ObAFWRgBdmrvV0e%2Bzx6KRyg%2BNYEV2FBeujvlncjdk%2BuJMCVY5R5MmBHrFYY3GgUgwxnuHw0JzwUEBRMBODErkO6nV82otAljJXjxfxvOQDHW%2BmS9Lou%2Bx0%2FVKDSG3hEDwmHbz4%2BVO38J9oV%2BbHGHYsL8ujEwmP%2Fh6%2Fb7lLb0%2BXeWKS%2BC93IqFBNFfPqiRCgrjlANHnF%2BZMW6xVC9oUStFXBfciB%2BjV4g4gQ3D2G7aEdVP55Aj8%2FXlyaNh5JiQYQEPWDIEiH8%2FmytsAByr0yvuXx9W3CLF8XQ6OWYT%2BLQSlgVVGj9ixNXb3rz%2Bqo%2FW1CsaWuYnAQ7sQHdvMCyIMXdGdlJiSki5ShOowhQ22M2IBwvOgLaBgLJ2qoFz5BZex41Ul0zBGqgrwMLSYwL4GOqUB%2BS9321Y4YDoWwlJm%2BNxndwWZc2fL6%2BpzPB1jYhTSb0Ssz6c9uUrm%2BEfGxZMq0uqH%2B0KZlHDVW0zUyWDZalCoyTdn%2BRT6z4TMoTJcI5JoHOpmNSNPHdOasB3mQewgkZaVWxrlydtBZqdg4gjfU2SwR%2BquiaQlZZmsmNDIUEIkeMVCRaBRa%2Fgxrs%2BT5ZiBbHgnQbaWjAxRvxv%2FYYwhTjr2eIfiw%2BQY&X-Amz-Signature=5eb3fd9e996055d592f9e86cdec158987e47c70eb62d1b65cf51889f58ea8a13&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTW5AICB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCkW%2F%2F7afwQ5SkV9wSlXEcA%2BOVHdS56NsJxgL2%2FmZrQlwIgOlEN1KYV%2FDMXdjGZfFnwSGdrnuqlswLTtMQSAaFVXigqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuFhmpCXEXls1SFEyrcA3J65vV97bOLlVU9o7JQF4fDD2l6CR5W80hlugxpV9QZaIDrQbmF1B%2BtzV%2BXXX7HgNL6x6J%2FjZu9p4xNCy%2Fn1IyLckOUISkkvM7gOBcgaizAsWQly%2FLY%2BPw6qNGKwfiSyjEVXWJL%2F%2Ft7ZZtpH6asq3l1%2F1ZlB%2Fhp%2BvnLNQ%2Fp%2BlM1L6cqiKvDhtxehd5HmTvpPljWDRDDlTK7ixeHMxusVMUlwu52sUwTZ4KJz8%2F0z0%2FrKBqXC4ObAFWRgBdmrvV0e%2Bzx6KRyg%2BNYEV2FBeujvlncjdk%2BuJMCVY5R5MmBHrFYY3GgUgwxnuHw0JzwUEBRMBODErkO6nV82otAljJXjxfxvOQDHW%2BmS9Lou%2Bx0%2FVKDSG3hEDwmHbz4%2BVO38J9oV%2BbHGHYsL8ujEwmP%2Fh6%2Fb7lLb0%2BXeWKS%2BC93IqFBNFfPqiRCgrjlANHnF%2BZMW6xVC9oUStFXBfciB%2BjV4g4gQ3D2G7aEdVP55Aj8%2FXlyaNh5JiQYQEPWDIEiH8%2FmytsAByr0yvuXx9W3CLF8XQ6OWYT%2BLQSlgVVGj9ixNXb3rz%2Bqo%2FW1CsaWuYnAQ7sQHdvMCyIMXdGdlJiSki5ShOowhQ22M2IBwvOgLaBgLJ2qoFz5BZex41Ul0zBGqgrwMLSYwL4GOqUB%2BS9321Y4YDoWwlJm%2BNxndwWZc2fL6%2BpzPB1jYhTSb0Ssz6c9uUrm%2BEfGxZMq0uqH%2B0KZlHDVW0zUyWDZalCoyTdn%2BRT6z4TMoTJcI5JoHOpmNSNPHdOasB3mQewgkZaVWxrlydtBZqdg4gjfU2SwR%2BquiaQlZZmsmNDIUEIkeMVCRaBRa%2Fgxrs%2BT5ZiBbHgnQbaWjAxRvxv%2FYYwhTjr2eIfiw%2BQY&X-Amz-Signature=728aa13c83e3a2c75ec39984d5828ee57cf64747b5907c18e64ed9a8939f5e58&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTW5AICB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCkW%2F%2F7afwQ5SkV9wSlXEcA%2BOVHdS56NsJxgL2%2FmZrQlwIgOlEN1KYV%2FDMXdjGZfFnwSGdrnuqlswLTtMQSAaFVXigqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuFhmpCXEXls1SFEyrcA3J65vV97bOLlVU9o7JQF4fDD2l6CR5W80hlugxpV9QZaIDrQbmF1B%2BtzV%2BXXX7HgNL6x6J%2FjZu9p4xNCy%2Fn1IyLckOUISkkvM7gOBcgaizAsWQly%2FLY%2BPw6qNGKwfiSyjEVXWJL%2F%2Ft7ZZtpH6asq3l1%2F1ZlB%2Fhp%2BvnLNQ%2Fp%2BlM1L6cqiKvDhtxehd5HmTvpPljWDRDDlTK7ixeHMxusVMUlwu52sUwTZ4KJz8%2F0z0%2FrKBqXC4ObAFWRgBdmrvV0e%2Bzx6KRyg%2BNYEV2FBeujvlncjdk%2BuJMCVY5R5MmBHrFYY3GgUgwxnuHw0JzwUEBRMBODErkO6nV82otAljJXjxfxvOQDHW%2BmS9Lou%2Bx0%2FVKDSG3hEDwmHbz4%2BVO38J9oV%2BbHGHYsL8ujEwmP%2Fh6%2Fb7lLb0%2BXeWKS%2BC93IqFBNFfPqiRCgrjlANHnF%2BZMW6xVC9oUStFXBfciB%2BjV4g4gQ3D2G7aEdVP55Aj8%2FXlyaNh5JiQYQEPWDIEiH8%2FmytsAByr0yvuXx9W3CLF8XQ6OWYT%2BLQSlgVVGj9ixNXb3rz%2Bqo%2FW1CsaWuYnAQ7sQHdvMCyIMXdGdlJiSki5ShOowhQ22M2IBwvOgLaBgLJ2qoFz5BZex41Ul0zBGqgrwMLSYwL4GOqUB%2BS9321Y4YDoWwlJm%2BNxndwWZc2fL6%2BpzPB1jYhTSb0Ssz6c9uUrm%2BEfGxZMq0uqH%2B0KZlHDVW0zUyWDZalCoyTdn%2BRT6z4TMoTJcI5JoHOpmNSNPHdOasB3mQewgkZaVWxrlydtBZqdg4gjfU2SwR%2BquiaQlZZmsmNDIUEIkeMVCRaBRa%2Fgxrs%2BT5ZiBbHgnQbaWjAxRvxv%2FYYwhTjr2eIfiw%2BQY&X-Amz-Signature=22ab2bc648627216bebd2a1a9bd96efaecda9addac132f8701b289c22861a3b3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTW5AICB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCkW%2F%2F7afwQ5SkV9wSlXEcA%2BOVHdS56NsJxgL2%2FmZrQlwIgOlEN1KYV%2FDMXdjGZfFnwSGdrnuqlswLTtMQSAaFVXigqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuFhmpCXEXls1SFEyrcA3J65vV97bOLlVU9o7JQF4fDD2l6CR5W80hlugxpV9QZaIDrQbmF1B%2BtzV%2BXXX7HgNL6x6J%2FjZu9p4xNCy%2Fn1IyLckOUISkkvM7gOBcgaizAsWQly%2FLY%2BPw6qNGKwfiSyjEVXWJL%2F%2Ft7ZZtpH6asq3l1%2F1ZlB%2Fhp%2BvnLNQ%2Fp%2BlM1L6cqiKvDhtxehd5HmTvpPljWDRDDlTK7ixeHMxusVMUlwu52sUwTZ4KJz8%2F0z0%2FrKBqXC4ObAFWRgBdmrvV0e%2Bzx6KRyg%2BNYEV2FBeujvlncjdk%2BuJMCVY5R5MmBHrFYY3GgUgwxnuHw0JzwUEBRMBODErkO6nV82otAljJXjxfxvOQDHW%2BmS9Lou%2Bx0%2FVKDSG3hEDwmHbz4%2BVO38J9oV%2BbHGHYsL8ujEwmP%2Fh6%2Fb7lLb0%2BXeWKS%2BC93IqFBNFfPqiRCgrjlANHnF%2BZMW6xVC9oUStFXBfciB%2BjV4g4gQ3D2G7aEdVP55Aj8%2FXlyaNh5JiQYQEPWDIEiH8%2FmytsAByr0yvuXx9W3CLF8XQ6OWYT%2BLQSlgVVGj9ixNXb3rz%2Bqo%2FW1CsaWuYnAQ7sQHdvMCyIMXdGdlJiSki5ShOowhQ22M2IBwvOgLaBgLJ2qoFz5BZex41Ul0zBGqgrwMLSYwL4GOqUB%2BS9321Y4YDoWwlJm%2BNxndwWZc2fL6%2BpzPB1jYhTSb0Ssz6c9uUrm%2BEfGxZMq0uqH%2B0KZlHDVW0zUyWDZalCoyTdn%2BRT6z4TMoTJcI5JoHOpmNSNPHdOasB3mQewgkZaVWxrlydtBZqdg4gjfU2SwR%2BquiaQlZZmsmNDIUEIkeMVCRaBRa%2Fgxrs%2BT5ZiBbHgnQbaWjAxRvxv%2FYYwhTjr2eIfiw%2BQY&X-Amz-Signature=e06a598d0a1920b502bc40cbb6518261796e2b4221a35c0a79acc3179c72c878&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTW5AICB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCkW%2F%2F7afwQ5SkV9wSlXEcA%2BOVHdS56NsJxgL2%2FmZrQlwIgOlEN1KYV%2FDMXdjGZfFnwSGdrnuqlswLTtMQSAaFVXigqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuFhmpCXEXls1SFEyrcA3J65vV97bOLlVU9o7JQF4fDD2l6CR5W80hlugxpV9QZaIDrQbmF1B%2BtzV%2BXXX7HgNL6x6J%2FjZu9p4xNCy%2Fn1IyLckOUISkkvM7gOBcgaizAsWQly%2FLY%2BPw6qNGKwfiSyjEVXWJL%2F%2Ft7ZZtpH6asq3l1%2F1ZlB%2Fhp%2BvnLNQ%2Fp%2BlM1L6cqiKvDhtxehd5HmTvpPljWDRDDlTK7ixeHMxusVMUlwu52sUwTZ4KJz8%2F0z0%2FrKBqXC4ObAFWRgBdmrvV0e%2Bzx6KRyg%2BNYEV2FBeujvlncjdk%2BuJMCVY5R5MmBHrFYY3GgUgwxnuHw0JzwUEBRMBODErkO6nV82otAljJXjxfxvOQDHW%2BmS9Lou%2Bx0%2FVKDSG3hEDwmHbz4%2BVO38J9oV%2BbHGHYsL8ujEwmP%2Fh6%2Fb7lLb0%2BXeWKS%2BC93IqFBNFfPqiRCgrjlANHnF%2BZMW6xVC9oUStFXBfciB%2BjV4g4gQ3D2G7aEdVP55Aj8%2FXlyaNh5JiQYQEPWDIEiH8%2FmytsAByr0yvuXx9W3CLF8XQ6OWYT%2BLQSlgVVGj9ixNXb3rz%2Bqo%2FW1CsaWuYnAQ7sQHdvMCyIMXdGdlJiSki5ShOowhQ22M2IBwvOgLaBgLJ2qoFz5BZex41Ul0zBGqgrwMLSYwL4GOqUB%2BS9321Y4YDoWwlJm%2BNxndwWZc2fL6%2BpzPB1jYhTSb0Ssz6c9uUrm%2BEfGxZMq0uqH%2B0KZlHDVW0zUyWDZalCoyTdn%2BRT6z4TMoTJcI5JoHOpmNSNPHdOasB3mQewgkZaVWxrlydtBZqdg4gjfU2SwR%2BquiaQlZZmsmNDIUEIkeMVCRaBRa%2Fgxrs%2BT5ZiBbHgnQbaWjAxRvxv%2FYYwhTjr2eIfiw%2BQY&X-Amz-Signature=d5092bb07b248b33490d8808da2e957d13400db26f8a2a4f42c7b2e99dbd6203&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTW5AICB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCkW%2F%2F7afwQ5SkV9wSlXEcA%2BOVHdS56NsJxgL2%2FmZrQlwIgOlEN1KYV%2FDMXdjGZfFnwSGdrnuqlswLTtMQSAaFVXigqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuFhmpCXEXls1SFEyrcA3J65vV97bOLlVU9o7JQF4fDD2l6CR5W80hlugxpV9QZaIDrQbmF1B%2BtzV%2BXXX7HgNL6x6J%2FjZu9p4xNCy%2Fn1IyLckOUISkkvM7gOBcgaizAsWQly%2FLY%2BPw6qNGKwfiSyjEVXWJL%2F%2Ft7ZZtpH6asq3l1%2F1ZlB%2Fhp%2BvnLNQ%2Fp%2BlM1L6cqiKvDhtxehd5HmTvpPljWDRDDlTK7ixeHMxusVMUlwu52sUwTZ4KJz8%2F0z0%2FrKBqXC4ObAFWRgBdmrvV0e%2Bzx6KRyg%2BNYEV2FBeujvlncjdk%2BuJMCVY5R5MmBHrFYY3GgUgwxnuHw0JzwUEBRMBODErkO6nV82otAljJXjxfxvOQDHW%2BmS9Lou%2Bx0%2FVKDSG3hEDwmHbz4%2BVO38J9oV%2BbHGHYsL8ujEwmP%2Fh6%2Fb7lLb0%2BXeWKS%2BC93IqFBNFfPqiRCgrjlANHnF%2BZMW6xVC9oUStFXBfciB%2BjV4g4gQ3D2G7aEdVP55Aj8%2FXlyaNh5JiQYQEPWDIEiH8%2FmytsAByr0yvuXx9W3CLF8XQ6OWYT%2BLQSlgVVGj9ixNXb3rz%2Bqo%2FW1CsaWuYnAQ7sQHdvMCyIMXdGdlJiSki5ShOowhQ22M2IBwvOgLaBgLJ2qoFz5BZex41Ul0zBGqgrwMLSYwL4GOqUB%2BS9321Y4YDoWwlJm%2BNxndwWZc2fL6%2BpzPB1jYhTSb0Ssz6c9uUrm%2BEfGxZMq0uqH%2B0KZlHDVW0zUyWDZalCoyTdn%2BRT6z4TMoTJcI5JoHOpmNSNPHdOasB3mQewgkZaVWxrlydtBZqdg4gjfU2SwR%2BquiaQlZZmsmNDIUEIkeMVCRaBRa%2Fgxrs%2BT5ZiBbHgnQbaWjAxRvxv%2FYYwhTjr2eIfiw%2BQY&X-Amz-Signature=d1a4814ce7aa37677022fcfc78e0cedd4182bb7826a8830f1a48af33b2f85d2a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
