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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE276S2R%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhSmfCI6xdZd1CY%2BKfuMb142lRFHD4RRv9GhWPkJe18AiByatlvl4iX%2BMfjDx7tfQMbG%2FDJgUyM0BMNr%2BqqF1AwPyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXGjvUQONTBYBHs12KtwDZWeckcPIlrneb3NKGiaTyJ3AtRnI6B0kgJsIqxO2B4Cdzx%2BQ1SrVn26n1LSmZ%2Fgb%2B16h0SSKCfHkGGrwkZH46ZZGSiyiRElpxw%2Bc4qd6hRE3QK%2BolXKlULeUOK3sib3IzDua5WpoIZkUvbxLBNGtVo39MgV5tckGWmwq%2F7jnxhTpFPAshwwW8LmAirgAG4zyQyKuU1R0RjX7piecynZpcwXwRy4focw6peyhodhi3vQkv1F48vNcFLSaT3cbqZJr%2BBsNpyyiYH10Td96T8KAw165bCJn2oeBfYvrosiHyaqXaqtKclwZnXFZlQL1Ej7SiP7yPCSIQHDZu7YbiWr2vXxxMVVwdJPr98GkaY%2FTBoY49jjdYDIrdRaRojoNDeJA0oHM%2F8dtll01kYizoiUfuauFbk7A5zxjg6YUchvPmqNiTJxHfrnyUR9E2yt%2BtzxOAPP0AT6jSiSgIuDW%2FqFVyQqVaqCTbZ%2B6J8cR8bu2XTpgpsrsCU5wFBJkiNDEENPzsZXzPuPgl1u5EmWxX%2FbCAhyQEArzcvFtLG5bpa4hLAAzrZdPFIV5%2FLY6qzUiXp0zWfaAqo7Cgs4mQVZ6bcYjG2c4YzrIfuc7AHrcoPT89%2Fp76oLByEvGhlzY%2FacwsJOWwwY6pgHQwHCmCm8E5aaR66bt7cWj8TP54l7JXbL1EAwVfsG5WZt84g%2Bip1Nc9KttQFAkb136jZjAURko1al6crjWfes5lrMlsznjR2I%2Brrt1cYS2QltGvm0vAGAlAuVqvrBbR4TwKyMb7lkS6CYAm9LMCDnWxO35uxR0hofDK0qstiBl4tvgYbCl1WGx7fjhd33mZnxP%2BDNjI7fMXMXVSo6yx0WFiOE3SBqV&X-Amz-Signature=28c30d5ef0d88fc2d078e5d4a4a285a5d332a81bd85bcb126ebbf730f970247b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE276S2R%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhSmfCI6xdZd1CY%2BKfuMb142lRFHD4RRv9GhWPkJe18AiByatlvl4iX%2BMfjDx7tfQMbG%2FDJgUyM0BMNr%2BqqF1AwPyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXGjvUQONTBYBHs12KtwDZWeckcPIlrneb3NKGiaTyJ3AtRnI6B0kgJsIqxO2B4Cdzx%2BQ1SrVn26n1LSmZ%2Fgb%2B16h0SSKCfHkGGrwkZH46ZZGSiyiRElpxw%2Bc4qd6hRE3QK%2BolXKlULeUOK3sib3IzDua5WpoIZkUvbxLBNGtVo39MgV5tckGWmwq%2F7jnxhTpFPAshwwW8LmAirgAG4zyQyKuU1R0RjX7piecynZpcwXwRy4focw6peyhodhi3vQkv1F48vNcFLSaT3cbqZJr%2BBsNpyyiYH10Td96T8KAw165bCJn2oeBfYvrosiHyaqXaqtKclwZnXFZlQL1Ej7SiP7yPCSIQHDZu7YbiWr2vXxxMVVwdJPr98GkaY%2FTBoY49jjdYDIrdRaRojoNDeJA0oHM%2F8dtll01kYizoiUfuauFbk7A5zxjg6YUchvPmqNiTJxHfrnyUR9E2yt%2BtzxOAPP0AT6jSiSgIuDW%2FqFVyQqVaqCTbZ%2B6J8cR8bu2XTpgpsrsCU5wFBJkiNDEENPzsZXzPuPgl1u5EmWxX%2FbCAhyQEArzcvFtLG5bpa4hLAAzrZdPFIV5%2FLY6qzUiXp0zWfaAqo7Cgs4mQVZ6bcYjG2c4YzrIfuc7AHrcoPT89%2Fp76oLByEvGhlzY%2FacwsJOWwwY6pgHQwHCmCm8E5aaR66bt7cWj8TP54l7JXbL1EAwVfsG5WZt84g%2Bip1Nc9KttQFAkb136jZjAURko1al6crjWfes5lrMlsznjR2I%2Brrt1cYS2QltGvm0vAGAlAuVqvrBbR4TwKyMb7lkS6CYAm9LMCDnWxO35uxR0hofDK0qstiBl4tvgYbCl1WGx7fjhd33mZnxP%2BDNjI7fMXMXVSo6yx0WFiOE3SBqV&X-Amz-Signature=157800c54cd7b2d8fb4ea44048fdd852c56eb3586e75fa1e70b98cb4e99316d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE276S2R%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhSmfCI6xdZd1CY%2BKfuMb142lRFHD4RRv9GhWPkJe18AiByatlvl4iX%2BMfjDx7tfQMbG%2FDJgUyM0BMNr%2BqqF1AwPyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXGjvUQONTBYBHs12KtwDZWeckcPIlrneb3NKGiaTyJ3AtRnI6B0kgJsIqxO2B4Cdzx%2BQ1SrVn26n1LSmZ%2Fgb%2B16h0SSKCfHkGGrwkZH46ZZGSiyiRElpxw%2Bc4qd6hRE3QK%2BolXKlULeUOK3sib3IzDua5WpoIZkUvbxLBNGtVo39MgV5tckGWmwq%2F7jnxhTpFPAshwwW8LmAirgAG4zyQyKuU1R0RjX7piecynZpcwXwRy4focw6peyhodhi3vQkv1F48vNcFLSaT3cbqZJr%2BBsNpyyiYH10Td96T8KAw165bCJn2oeBfYvrosiHyaqXaqtKclwZnXFZlQL1Ej7SiP7yPCSIQHDZu7YbiWr2vXxxMVVwdJPr98GkaY%2FTBoY49jjdYDIrdRaRojoNDeJA0oHM%2F8dtll01kYizoiUfuauFbk7A5zxjg6YUchvPmqNiTJxHfrnyUR9E2yt%2BtzxOAPP0AT6jSiSgIuDW%2FqFVyQqVaqCTbZ%2B6J8cR8bu2XTpgpsrsCU5wFBJkiNDEENPzsZXzPuPgl1u5EmWxX%2FbCAhyQEArzcvFtLG5bpa4hLAAzrZdPFIV5%2FLY6qzUiXp0zWfaAqo7Cgs4mQVZ6bcYjG2c4YzrIfuc7AHrcoPT89%2Fp76oLByEvGhlzY%2FacwsJOWwwY6pgHQwHCmCm8E5aaR66bt7cWj8TP54l7JXbL1EAwVfsG5WZt84g%2Bip1Nc9KttQFAkb136jZjAURko1al6crjWfes5lrMlsznjR2I%2Brrt1cYS2QltGvm0vAGAlAuVqvrBbR4TwKyMb7lkS6CYAm9LMCDnWxO35uxR0hofDK0qstiBl4tvgYbCl1WGx7fjhd33mZnxP%2BDNjI7fMXMXVSo6yx0WFiOE3SBqV&X-Amz-Signature=46d84e5a9f354c9a805ac988a7bcbd2a9e1df5a3e464f5f81f25d182455a5225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE276S2R%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhSmfCI6xdZd1CY%2BKfuMb142lRFHD4RRv9GhWPkJe18AiByatlvl4iX%2BMfjDx7tfQMbG%2FDJgUyM0BMNr%2BqqF1AwPyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXGjvUQONTBYBHs12KtwDZWeckcPIlrneb3NKGiaTyJ3AtRnI6B0kgJsIqxO2B4Cdzx%2BQ1SrVn26n1LSmZ%2Fgb%2B16h0SSKCfHkGGrwkZH46ZZGSiyiRElpxw%2Bc4qd6hRE3QK%2BolXKlULeUOK3sib3IzDua5WpoIZkUvbxLBNGtVo39MgV5tckGWmwq%2F7jnxhTpFPAshwwW8LmAirgAG4zyQyKuU1R0RjX7piecynZpcwXwRy4focw6peyhodhi3vQkv1F48vNcFLSaT3cbqZJr%2BBsNpyyiYH10Td96T8KAw165bCJn2oeBfYvrosiHyaqXaqtKclwZnXFZlQL1Ej7SiP7yPCSIQHDZu7YbiWr2vXxxMVVwdJPr98GkaY%2FTBoY49jjdYDIrdRaRojoNDeJA0oHM%2F8dtll01kYizoiUfuauFbk7A5zxjg6YUchvPmqNiTJxHfrnyUR9E2yt%2BtzxOAPP0AT6jSiSgIuDW%2FqFVyQqVaqCTbZ%2B6J8cR8bu2XTpgpsrsCU5wFBJkiNDEENPzsZXzPuPgl1u5EmWxX%2FbCAhyQEArzcvFtLG5bpa4hLAAzrZdPFIV5%2FLY6qzUiXp0zWfaAqo7Cgs4mQVZ6bcYjG2c4YzrIfuc7AHrcoPT89%2Fp76oLByEvGhlzY%2FacwsJOWwwY6pgHQwHCmCm8E5aaR66bt7cWj8TP54l7JXbL1EAwVfsG5WZt84g%2Bip1Nc9KttQFAkb136jZjAURko1al6crjWfes5lrMlsznjR2I%2Brrt1cYS2QltGvm0vAGAlAuVqvrBbR4TwKyMb7lkS6CYAm9LMCDnWxO35uxR0hofDK0qstiBl4tvgYbCl1WGx7fjhd33mZnxP%2BDNjI7fMXMXVSo6yx0WFiOE3SBqV&X-Amz-Signature=2a982ddb4e249d5ca5ff1e3aa118e9068b0204a40c3f0894425ac8aae225dcbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE276S2R%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhSmfCI6xdZd1CY%2BKfuMb142lRFHD4RRv9GhWPkJe18AiByatlvl4iX%2BMfjDx7tfQMbG%2FDJgUyM0BMNr%2BqqF1AwPyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXGjvUQONTBYBHs12KtwDZWeckcPIlrneb3NKGiaTyJ3AtRnI6B0kgJsIqxO2B4Cdzx%2BQ1SrVn26n1LSmZ%2Fgb%2B16h0SSKCfHkGGrwkZH46ZZGSiyiRElpxw%2Bc4qd6hRE3QK%2BolXKlULeUOK3sib3IzDua5WpoIZkUvbxLBNGtVo39MgV5tckGWmwq%2F7jnxhTpFPAshwwW8LmAirgAG4zyQyKuU1R0RjX7piecynZpcwXwRy4focw6peyhodhi3vQkv1F48vNcFLSaT3cbqZJr%2BBsNpyyiYH10Td96T8KAw165bCJn2oeBfYvrosiHyaqXaqtKclwZnXFZlQL1Ej7SiP7yPCSIQHDZu7YbiWr2vXxxMVVwdJPr98GkaY%2FTBoY49jjdYDIrdRaRojoNDeJA0oHM%2F8dtll01kYizoiUfuauFbk7A5zxjg6YUchvPmqNiTJxHfrnyUR9E2yt%2BtzxOAPP0AT6jSiSgIuDW%2FqFVyQqVaqCTbZ%2B6J8cR8bu2XTpgpsrsCU5wFBJkiNDEENPzsZXzPuPgl1u5EmWxX%2FbCAhyQEArzcvFtLG5bpa4hLAAzrZdPFIV5%2FLY6qzUiXp0zWfaAqo7Cgs4mQVZ6bcYjG2c4YzrIfuc7AHrcoPT89%2Fp76oLByEvGhlzY%2FacwsJOWwwY6pgHQwHCmCm8E5aaR66bt7cWj8TP54l7JXbL1EAwVfsG5WZt84g%2Bip1Nc9KttQFAkb136jZjAURko1al6crjWfes5lrMlsznjR2I%2Brrt1cYS2QltGvm0vAGAlAuVqvrBbR4TwKyMb7lkS6CYAm9LMCDnWxO35uxR0hofDK0qstiBl4tvgYbCl1WGx7fjhd33mZnxP%2BDNjI7fMXMXVSo6yx0WFiOE3SBqV&X-Amz-Signature=bd852caaf84faf22fabeaef816187301c5cea8a1d43c760ab3a85a7f8ec68843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE276S2R%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhSmfCI6xdZd1CY%2BKfuMb142lRFHD4RRv9GhWPkJe18AiByatlvl4iX%2BMfjDx7tfQMbG%2FDJgUyM0BMNr%2BqqF1AwPyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXGjvUQONTBYBHs12KtwDZWeckcPIlrneb3NKGiaTyJ3AtRnI6B0kgJsIqxO2B4Cdzx%2BQ1SrVn26n1LSmZ%2Fgb%2B16h0SSKCfHkGGrwkZH46ZZGSiyiRElpxw%2Bc4qd6hRE3QK%2BolXKlULeUOK3sib3IzDua5WpoIZkUvbxLBNGtVo39MgV5tckGWmwq%2F7jnxhTpFPAshwwW8LmAirgAG4zyQyKuU1R0RjX7piecynZpcwXwRy4focw6peyhodhi3vQkv1F48vNcFLSaT3cbqZJr%2BBsNpyyiYH10Td96T8KAw165bCJn2oeBfYvrosiHyaqXaqtKclwZnXFZlQL1Ej7SiP7yPCSIQHDZu7YbiWr2vXxxMVVwdJPr98GkaY%2FTBoY49jjdYDIrdRaRojoNDeJA0oHM%2F8dtll01kYizoiUfuauFbk7A5zxjg6YUchvPmqNiTJxHfrnyUR9E2yt%2BtzxOAPP0AT6jSiSgIuDW%2FqFVyQqVaqCTbZ%2B6J8cR8bu2XTpgpsrsCU5wFBJkiNDEENPzsZXzPuPgl1u5EmWxX%2FbCAhyQEArzcvFtLG5bpa4hLAAzrZdPFIV5%2FLY6qzUiXp0zWfaAqo7Cgs4mQVZ6bcYjG2c4YzrIfuc7AHrcoPT89%2Fp76oLByEvGhlzY%2FacwsJOWwwY6pgHQwHCmCm8E5aaR66bt7cWj8TP54l7JXbL1EAwVfsG5WZt84g%2Bip1Nc9KttQFAkb136jZjAURko1al6crjWfes5lrMlsznjR2I%2Brrt1cYS2QltGvm0vAGAlAuVqvrBbR4TwKyMb7lkS6CYAm9LMCDnWxO35uxR0hofDK0qstiBl4tvgYbCl1WGx7fjhd33mZnxP%2BDNjI7fMXMXVSo6yx0WFiOE3SBqV&X-Amz-Signature=f974041fb28d150e36288c94d12fa80854d26cdc5f720acedb07b174ea842cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE276S2R%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhSmfCI6xdZd1CY%2BKfuMb142lRFHD4RRv9GhWPkJe18AiByatlvl4iX%2BMfjDx7tfQMbG%2FDJgUyM0BMNr%2BqqF1AwPyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXGjvUQONTBYBHs12KtwDZWeckcPIlrneb3NKGiaTyJ3AtRnI6B0kgJsIqxO2B4Cdzx%2BQ1SrVn26n1LSmZ%2Fgb%2B16h0SSKCfHkGGrwkZH46ZZGSiyiRElpxw%2Bc4qd6hRE3QK%2BolXKlULeUOK3sib3IzDua5WpoIZkUvbxLBNGtVo39MgV5tckGWmwq%2F7jnxhTpFPAshwwW8LmAirgAG4zyQyKuU1R0RjX7piecynZpcwXwRy4focw6peyhodhi3vQkv1F48vNcFLSaT3cbqZJr%2BBsNpyyiYH10Td96T8KAw165bCJn2oeBfYvrosiHyaqXaqtKclwZnXFZlQL1Ej7SiP7yPCSIQHDZu7YbiWr2vXxxMVVwdJPr98GkaY%2FTBoY49jjdYDIrdRaRojoNDeJA0oHM%2F8dtll01kYizoiUfuauFbk7A5zxjg6YUchvPmqNiTJxHfrnyUR9E2yt%2BtzxOAPP0AT6jSiSgIuDW%2FqFVyQqVaqCTbZ%2B6J8cR8bu2XTpgpsrsCU5wFBJkiNDEENPzsZXzPuPgl1u5EmWxX%2FbCAhyQEArzcvFtLG5bpa4hLAAzrZdPFIV5%2FLY6qzUiXp0zWfaAqo7Cgs4mQVZ6bcYjG2c4YzrIfuc7AHrcoPT89%2Fp76oLByEvGhlzY%2FacwsJOWwwY6pgHQwHCmCm8E5aaR66bt7cWj8TP54l7JXbL1EAwVfsG5WZt84g%2Bip1Nc9KttQFAkb136jZjAURko1al6crjWfes5lrMlsznjR2I%2Brrt1cYS2QltGvm0vAGAlAuVqvrBbR4TwKyMb7lkS6CYAm9LMCDnWxO35uxR0hofDK0qstiBl4tvgYbCl1WGx7fjhd33mZnxP%2BDNjI7fMXMXVSo6yx0WFiOE3SBqV&X-Amz-Signature=1c96a5724f4753943d5c8b032627a6a75cb566938a0e1a54b4d68a913d4e792e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
