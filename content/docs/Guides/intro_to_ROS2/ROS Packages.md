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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FCDQJCQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7VZm0UcvJjezKh%2FV4ARYDDzb9SiquQfVqpiiIM33vIgIgaA2LuaKOERmWKx%2BzMEUn8EXGHRXJ4MGRpc7Kgq83ZBkqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEalt%2BtFXNV8f0l61CrcA4jsZrHnJZ23bs8OXYEfIpf%2FzhTyAm0IBZfEnLA0ebzlwRifSh1PD6aiiNJagbuSNYgwwORclYbD5x01QXXg3gDNeo0u4rBr15Grva4XsxCysUUDkJ8xtBTM5vW2hL5UZHq%2B%2FjGMArlVcshmZr2HDumaiLrO1XGj3FWJkkU4%2F2rJfvdWVMfmz%2BY9vAWsCexQaj5x1G35iSNcAWoST6%2FqO47zag3VSxT%2BRCr%2BfSCZuw%2BQrOvRcIFLU%2FmAakJjeirCT6uwHkPulJjvVRQVEHx1ml%2BBU6olW5yWzVl%2FXnLiT7tNopd9O%2BQ1SUMMbYXp%2BfxWD2OLQBuVSnC2i0HDqBIGrffUqSEkIKJXLrmxcXuFOZO5HSJ9ZUNHf1khUpOZIQScbeRVxGEwCgHmsDE2UgV7F9guput0O1lZNkwl%2FgZ2KxKftCkc9cYthcnOQfW7IdPTUmGlh2Wv83CWwXPkTtzcmZmTjoNpvCqqmUVRpKMluVNnF%2B4PzyDZ%2BW2XkHFVBxDvrWI%2FfS2j2fszxQ9SPR1ZaBEHfEN9RmnumYTGBrcX27%2B9twSqJa0u2q%2FzgGvFUwIu1%2B2g5qywEpSMegTa08l8bi2FupAYwZE5KzLD74KSBbsf0LS7J0yzV%2F1R6iFrMI%2Bw2MIGOqUBpolE%2Fl322fJfrdyTCKqlmh%2FgDZvQgk5WeTYc9lgI1TlN264scm0fEJaKKgFTPZRuZHEWLXznLHz%2FlsMQpwAeb95rRIHyaMGZLSB6CWORbT6rX68PUavEd7tWep9FBEg2ZdzxQyfHzKH2%2BwywbTBEK%2FWwdhdajtVcHK%2BwXQSHKf4kjnLk0oRLStdOYLpltq3h%2B575zEHYAi85IPBB0QEi5HIoBeak&X-Amz-Signature=61f750ed989706c321766e91a0855236c8ed52dc6e6b022104b699e517f21887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FCDQJCQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7VZm0UcvJjezKh%2FV4ARYDDzb9SiquQfVqpiiIM33vIgIgaA2LuaKOERmWKx%2BzMEUn8EXGHRXJ4MGRpc7Kgq83ZBkqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEalt%2BtFXNV8f0l61CrcA4jsZrHnJZ23bs8OXYEfIpf%2FzhTyAm0IBZfEnLA0ebzlwRifSh1PD6aiiNJagbuSNYgwwORclYbD5x01QXXg3gDNeo0u4rBr15Grva4XsxCysUUDkJ8xtBTM5vW2hL5UZHq%2B%2FjGMArlVcshmZr2HDumaiLrO1XGj3FWJkkU4%2F2rJfvdWVMfmz%2BY9vAWsCexQaj5x1G35iSNcAWoST6%2FqO47zag3VSxT%2BRCr%2BfSCZuw%2BQrOvRcIFLU%2FmAakJjeirCT6uwHkPulJjvVRQVEHx1ml%2BBU6olW5yWzVl%2FXnLiT7tNopd9O%2BQ1SUMMbYXp%2BfxWD2OLQBuVSnC2i0HDqBIGrffUqSEkIKJXLrmxcXuFOZO5HSJ9ZUNHf1khUpOZIQScbeRVxGEwCgHmsDE2UgV7F9guput0O1lZNkwl%2FgZ2KxKftCkc9cYthcnOQfW7IdPTUmGlh2Wv83CWwXPkTtzcmZmTjoNpvCqqmUVRpKMluVNnF%2B4PzyDZ%2BW2XkHFVBxDvrWI%2FfS2j2fszxQ9SPR1ZaBEHfEN9RmnumYTGBrcX27%2B9twSqJa0u2q%2FzgGvFUwIu1%2B2g5qywEpSMegTa08l8bi2FupAYwZE5KzLD74KSBbsf0LS7J0yzV%2F1R6iFrMI%2Bw2MIGOqUBpolE%2Fl322fJfrdyTCKqlmh%2FgDZvQgk5WeTYc9lgI1TlN264scm0fEJaKKgFTPZRuZHEWLXznLHz%2FlsMQpwAeb95rRIHyaMGZLSB6CWORbT6rX68PUavEd7tWep9FBEg2ZdzxQyfHzKH2%2BwywbTBEK%2FWwdhdajtVcHK%2BwXQSHKf4kjnLk0oRLStdOYLpltq3h%2B575zEHYAi85IPBB0QEi5HIoBeak&X-Amz-Signature=51b8b135414d6ed73a56e61b8a1d96ded136cbd2c7c46f0d244f870f9b891685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FCDQJCQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7VZm0UcvJjezKh%2FV4ARYDDzb9SiquQfVqpiiIM33vIgIgaA2LuaKOERmWKx%2BzMEUn8EXGHRXJ4MGRpc7Kgq83ZBkqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEalt%2BtFXNV8f0l61CrcA4jsZrHnJZ23bs8OXYEfIpf%2FzhTyAm0IBZfEnLA0ebzlwRifSh1PD6aiiNJagbuSNYgwwORclYbD5x01QXXg3gDNeo0u4rBr15Grva4XsxCysUUDkJ8xtBTM5vW2hL5UZHq%2B%2FjGMArlVcshmZr2HDumaiLrO1XGj3FWJkkU4%2F2rJfvdWVMfmz%2BY9vAWsCexQaj5x1G35iSNcAWoST6%2FqO47zag3VSxT%2BRCr%2BfSCZuw%2BQrOvRcIFLU%2FmAakJjeirCT6uwHkPulJjvVRQVEHx1ml%2BBU6olW5yWzVl%2FXnLiT7tNopd9O%2BQ1SUMMbYXp%2BfxWD2OLQBuVSnC2i0HDqBIGrffUqSEkIKJXLrmxcXuFOZO5HSJ9ZUNHf1khUpOZIQScbeRVxGEwCgHmsDE2UgV7F9guput0O1lZNkwl%2FgZ2KxKftCkc9cYthcnOQfW7IdPTUmGlh2Wv83CWwXPkTtzcmZmTjoNpvCqqmUVRpKMluVNnF%2B4PzyDZ%2BW2XkHFVBxDvrWI%2FfS2j2fszxQ9SPR1ZaBEHfEN9RmnumYTGBrcX27%2B9twSqJa0u2q%2FzgGvFUwIu1%2B2g5qywEpSMegTa08l8bi2FupAYwZE5KzLD74KSBbsf0LS7J0yzV%2F1R6iFrMI%2Bw2MIGOqUBpolE%2Fl322fJfrdyTCKqlmh%2FgDZvQgk5WeTYc9lgI1TlN264scm0fEJaKKgFTPZRuZHEWLXznLHz%2FlsMQpwAeb95rRIHyaMGZLSB6CWORbT6rX68PUavEd7tWep9FBEg2ZdzxQyfHzKH2%2BwywbTBEK%2FWwdhdajtVcHK%2BwXQSHKf4kjnLk0oRLStdOYLpltq3h%2B575zEHYAi85IPBB0QEi5HIoBeak&X-Amz-Signature=cc415fcaf111da5ffe134cffc3cf3da68ad59e5132584c7dbec47fbf8d386a05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FCDQJCQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7VZm0UcvJjezKh%2FV4ARYDDzb9SiquQfVqpiiIM33vIgIgaA2LuaKOERmWKx%2BzMEUn8EXGHRXJ4MGRpc7Kgq83ZBkqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEalt%2BtFXNV8f0l61CrcA4jsZrHnJZ23bs8OXYEfIpf%2FzhTyAm0IBZfEnLA0ebzlwRifSh1PD6aiiNJagbuSNYgwwORclYbD5x01QXXg3gDNeo0u4rBr15Grva4XsxCysUUDkJ8xtBTM5vW2hL5UZHq%2B%2FjGMArlVcshmZr2HDumaiLrO1XGj3FWJkkU4%2F2rJfvdWVMfmz%2BY9vAWsCexQaj5x1G35iSNcAWoST6%2FqO47zag3VSxT%2BRCr%2BfSCZuw%2BQrOvRcIFLU%2FmAakJjeirCT6uwHkPulJjvVRQVEHx1ml%2BBU6olW5yWzVl%2FXnLiT7tNopd9O%2BQ1SUMMbYXp%2BfxWD2OLQBuVSnC2i0HDqBIGrffUqSEkIKJXLrmxcXuFOZO5HSJ9ZUNHf1khUpOZIQScbeRVxGEwCgHmsDE2UgV7F9guput0O1lZNkwl%2FgZ2KxKftCkc9cYthcnOQfW7IdPTUmGlh2Wv83CWwXPkTtzcmZmTjoNpvCqqmUVRpKMluVNnF%2B4PzyDZ%2BW2XkHFVBxDvrWI%2FfS2j2fszxQ9SPR1ZaBEHfEN9RmnumYTGBrcX27%2B9twSqJa0u2q%2FzgGvFUwIu1%2B2g5qywEpSMegTa08l8bi2FupAYwZE5KzLD74KSBbsf0LS7J0yzV%2F1R6iFrMI%2Bw2MIGOqUBpolE%2Fl322fJfrdyTCKqlmh%2FgDZvQgk5WeTYc9lgI1TlN264scm0fEJaKKgFTPZRuZHEWLXznLHz%2FlsMQpwAeb95rRIHyaMGZLSB6CWORbT6rX68PUavEd7tWep9FBEg2ZdzxQyfHzKH2%2BwywbTBEK%2FWwdhdajtVcHK%2BwXQSHKf4kjnLk0oRLStdOYLpltq3h%2B575zEHYAi85IPBB0QEi5HIoBeak&X-Amz-Signature=5e30013bd926bea8b4c7f28c5de5408cd1bd0858e53cba03447fe74f5073d0d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FCDQJCQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7VZm0UcvJjezKh%2FV4ARYDDzb9SiquQfVqpiiIM33vIgIgaA2LuaKOERmWKx%2BzMEUn8EXGHRXJ4MGRpc7Kgq83ZBkqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEalt%2BtFXNV8f0l61CrcA4jsZrHnJZ23bs8OXYEfIpf%2FzhTyAm0IBZfEnLA0ebzlwRifSh1PD6aiiNJagbuSNYgwwORclYbD5x01QXXg3gDNeo0u4rBr15Grva4XsxCysUUDkJ8xtBTM5vW2hL5UZHq%2B%2FjGMArlVcshmZr2HDumaiLrO1XGj3FWJkkU4%2F2rJfvdWVMfmz%2BY9vAWsCexQaj5x1G35iSNcAWoST6%2FqO47zag3VSxT%2BRCr%2BfSCZuw%2BQrOvRcIFLU%2FmAakJjeirCT6uwHkPulJjvVRQVEHx1ml%2BBU6olW5yWzVl%2FXnLiT7tNopd9O%2BQ1SUMMbYXp%2BfxWD2OLQBuVSnC2i0HDqBIGrffUqSEkIKJXLrmxcXuFOZO5HSJ9ZUNHf1khUpOZIQScbeRVxGEwCgHmsDE2UgV7F9guput0O1lZNkwl%2FgZ2KxKftCkc9cYthcnOQfW7IdPTUmGlh2Wv83CWwXPkTtzcmZmTjoNpvCqqmUVRpKMluVNnF%2B4PzyDZ%2BW2XkHFVBxDvrWI%2FfS2j2fszxQ9SPR1ZaBEHfEN9RmnumYTGBrcX27%2B9twSqJa0u2q%2FzgGvFUwIu1%2B2g5qywEpSMegTa08l8bi2FupAYwZE5KzLD74KSBbsf0LS7J0yzV%2F1R6iFrMI%2Bw2MIGOqUBpolE%2Fl322fJfrdyTCKqlmh%2FgDZvQgk5WeTYc9lgI1TlN264scm0fEJaKKgFTPZRuZHEWLXznLHz%2FlsMQpwAeb95rRIHyaMGZLSB6CWORbT6rX68PUavEd7tWep9FBEg2ZdzxQyfHzKH2%2BwywbTBEK%2FWwdhdajtVcHK%2BwXQSHKf4kjnLk0oRLStdOYLpltq3h%2B575zEHYAi85IPBB0QEi5HIoBeak&X-Amz-Signature=2ab7758955b8ecc8ab1ded2d1243d3bf437b03ad50b30f71eb395d7c221ead72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FCDQJCQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7VZm0UcvJjezKh%2FV4ARYDDzb9SiquQfVqpiiIM33vIgIgaA2LuaKOERmWKx%2BzMEUn8EXGHRXJ4MGRpc7Kgq83ZBkqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEalt%2BtFXNV8f0l61CrcA4jsZrHnJZ23bs8OXYEfIpf%2FzhTyAm0IBZfEnLA0ebzlwRifSh1PD6aiiNJagbuSNYgwwORclYbD5x01QXXg3gDNeo0u4rBr15Grva4XsxCysUUDkJ8xtBTM5vW2hL5UZHq%2B%2FjGMArlVcshmZr2HDumaiLrO1XGj3FWJkkU4%2F2rJfvdWVMfmz%2BY9vAWsCexQaj5x1G35iSNcAWoST6%2FqO47zag3VSxT%2BRCr%2BfSCZuw%2BQrOvRcIFLU%2FmAakJjeirCT6uwHkPulJjvVRQVEHx1ml%2BBU6olW5yWzVl%2FXnLiT7tNopd9O%2BQ1SUMMbYXp%2BfxWD2OLQBuVSnC2i0HDqBIGrffUqSEkIKJXLrmxcXuFOZO5HSJ9ZUNHf1khUpOZIQScbeRVxGEwCgHmsDE2UgV7F9guput0O1lZNkwl%2FgZ2KxKftCkc9cYthcnOQfW7IdPTUmGlh2Wv83CWwXPkTtzcmZmTjoNpvCqqmUVRpKMluVNnF%2B4PzyDZ%2BW2XkHFVBxDvrWI%2FfS2j2fszxQ9SPR1ZaBEHfEN9RmnumYTGBrcX27%2B9twSqJa0u2q%2FzgGvFUwIu1%2B2g5qywEpSMegTa08l8bi2FupAYwZE5KzLD74KSBbsf0LS7J0yzV%2F1R6iFrMI%2Bw2MIGOqUBpolE%2Fl322fJfrdyTCKqlmh%2FgDZvQgk5WeTYc9lgI1TlN264scm0fEJaKKgFTPZRuZHEWLXznLHz%2FlsMQpwAeb95rRIHyaMGZLSB6CWORbT6rX68PUavEd7tWep9FBEg2ZdzxQyfHzKH2%2BwywbTBEK%2FWwdhdajtVcHK%2BwXQSHKf4kjnLk0oRLStdOYLpltq3h%2B575zEHYAi85IPBB0QEi5HIoBeak&X-Amz-Signature=f9763a2ccc1177fad2f49f0db27d76941f3446c35dba6ba7eb56ae8473388cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FCDQJCQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7VZm0UcvJjezKh%2FV4ARYDDzb9SiquQfVqpiiIM33vIgIgaA2LuaKOERmWKx%2BzMEUn8EXGHRXJ4MGRpc7Kgq83ZBkqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEalt%2BtFXNV8f0l61CrcA4jsZrHnJZ23bs8OXYEfIpf%2FzhTyAm0IBZfEnLA0ebzlwRifSh1PD6aiiNJagbuSNYgwwORclYbD5x01QXXg3gDNeo0u4rBr15Grva4XsxCysUUDkJ8xtBTM5vW2hL5UZHq%2B%2FjGMArlVcshmZr2HDumaiLrO1XGj3FWJkkU4%2F2rJfvdWVMfmz%2BY9vAWsCexQaj5x1G35iSNcAWoST6%2FqO47zag3VSxT%2BRCr%2BfSCZuw%2BQrOvRcIFLU%2FmAakJjeirCT6uwHkPulJjvVRQVEHx1ml%2BBU6olW5yWzVl%2FXnLiT7tNopd9O%2BQ1SUMMbYXp%2BfxWD2OLQBuVSnC2i0HDqBIGrffUqSEkIKJXLrmxcXuFOZO5HSJ9ZUNHf1khUpOZIQScbeRVxGEwCgHmsDE2UgV7F9guput0O1lZNkwl%2FgZ2KxKftCkc9cYthcnOQfW7IdPTUmGlh2Wv83CWwXPkTtzcmZmTjoNpvCqqmUVRpKMluVNnF%2B4PzyDZ%2BW2XkHFVBxDvrWI%2FfS2j2fszxQ9SPR1ZaBEHfEN9RmnumYTGBrcX27%2B9twSqJa0u2q%2FzgGvFUwIu1%2B2g5qywEpSMegTa08l8bi2FupAYwZE5KzLD74KSBbsf0LS7J0yzV%2F1R6iFrMI%2Bw2MIGOqUBpolE%2Fl322fJfrdyTCKqlmh%2FgDZvQgk5WeTYc9lgI1TlN264scm0fEJaKKgFTPZRuZHEWLXznLHz%2FlsMQpwAeb95rRIHyaMGZLSB6CWORbT6rX68PUavEd7tWep9FBEg2ZdzxQyfHzKH2%2BwywbTBEK%2FWwdhdajtVcHK%2BwXQSHKf4kjnLk0oRLStdOYLpltq3h%2B575zEHYAi85IPBB0QEi5HIoBeak&X-Amz-Signature=709de8e7cdc236a4be6085fe6852967c0a83fcb6e6632687f94f5adc8efcb570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
