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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTPJH5DM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHYVFc0PdKcXM5mLfHDcJFg3HYU2amNxfmlXRq5JJW%2FAIgJMU5IkjpK76BVef46dG8v7reD1G7fsTGHJ9ZD9Hfgo8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEwDI4uZh3Y7N%2Fz7CrcAzjAzwMGu5ZPfxFLPYRqkRJDsafONZt%2FwoR8zynpgPk8imloXCxLRAmvb%2FezO9QFSZjK%2FDPhvPGM8flOgQWVz1CE0vGSdc%2FvtVPWkjgKAUi%2FLLcTeOFkIRVZWKtCMD4MjjPHAvj2w9CWd6R%2F%2Fuv9GK8DewVTh9uXdUea%2F7D6w44u%2B84ucaeX%2FVGKM6Tc2lkvGYmqMgIhlootpuyU%2FOECH9O0KEw7e%2FOIt19iGqjoNazqFuMY1s0qPE5dWHDnsn7TPrfGZLmChJPs%2F3xzDTnXaOWZdDpOFrbvw1MXJF1me88LsaHDN5U6I0c55APcaBSaBbXAREVoHt2Y7L%2BUr9iCfjD2bRku7L0WOXfDcteVwrhG1nBemnNXw4bBLUUxQJZtXW2Z4vUCQFNYwV2wSpWkHiTWLe7mbEUxPgK8oAX0Vy4fLadgXhN1SN4xoQpQaX4Ei5TUlj4EEZ4RwGl3ccQRZqXVqjL0coHq0DopeM2k0ylz%2BdytbIiyLi0Urr8RiePbs%2F0WVWSh%2FuvfW5x%2BotU7XOvG17WMeKqPjrDby8h%2BVMNA1fFQF0l5BlYK1ehVp4c1WVLlAbV6NeS8%2Baj86%2FV4JZhtF8Wabyy0R4P1Ny1cFSANDJYfg8FevmEzF6XRMM%2FP5sEGOqUBJ4si%2BGNePwt0amjH%2FY65qjNNFvZaEX1QKymZNkG4%2FUqeQjyblIgfysM7wQORRdwAHsI%2BTEgPLTUWUcAPLteA%2F6P7LJdsR0ubHUcgJqazugGyjzBoZJMoljHE8xpeA13ws%2B6EmqYFcXFKc7w34wSOAcWPrlyOCKsA7owxyNOMLqev9SJ8%2BkMuaAiNzqF%2Fl%2FIPr6RZmY0APUACsJKzsgVhhDnxM%2Fj1&X-Amz-Signature=f0c35edea445b216245b122744a5be0714a251b9ce26c54d09973e64fb579f57&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTPJH5DM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHYVFc0PdKcXM5mLfHDcJFg3HYU2amNxfmlXRq5JJW%2FAIgJMU5IkjpK76BVef46dG8v7reD1G7fsTGHJ9ZD9Hfgo8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEwDI4uZh3Y7N%2Fz7CrcAzjAzwMGu5ZPfxFLPYRqkRJDsafONZt%2FwoR8zynpgPk8imloXCxLRAmvb%2FezO9QFSZjK%2FDPhvPGM8flOgQWVz1CE0vGSdc%2FvtVPWkjgKAUi%2FLLcTeOFkIRVZWKtCMD4MjjPHAvj2w9CWd6R%2F%2Fuv9GK8DewVTh9uXdUea%2F7D6w44u%2B84ucaeX%2FVGKM6Tc2lkvGYmqMgIhlootpuyU%2FOECH9O0KEw7e%2FOIt19iGqjoNazqFuMY1s0qPE5dWHDnsn7TPrfGZLmChJPs%2F3xzDTnXaOWZdDpOFrbvw1MXJF1me88LsaHDN5U6I0c55APcaBSaBbXAREVoHt2Y7L%2BUr9iCfjD2bRku7L0WOXfDcteVwrhG1nBemnNXw4bBLUUxQJZtXW2Z4vUCQFNYwV2wSpWkHiTWLe7mbEUxPgK8oAX0Vy4fLadgXhN1SN4xoQpQaX4Ei5TUlj4EEZ4RwGl3ccQRZqXVqjL0coHq0DopeM2k0ylz%2BdytbIiyLi0Urr8RiePbs%2F0WVWSh%2FuvfW5x%2BotU7XOvG17WMeKqPjrDby8h%2BVMNA1fFQF0l5BlYK1ehVp4c1WVLlAbV6NeS8%2Baj86%2FV4JZhtF8Wabyy0R4P1Ny1cFSANDJYfg8FevmEzF6XRMM%2FP5sEGOqUBJ4si%2BGNePwt0amjH%2FY65qjNNFvZaEX1QKymZNkG4%2FUqeQjyblIgfysM7wQORRdwAHsI%2BTEgPLTUWUcAPLteA%2F6P7LJdsR0ubHUcgJqazugGyjzBoZJMoljHE8xpeA13ws%2B6EmqYFcXFKc7w34wSOAcWPrlyOCKsA7owxyNOMLqev9SJ8%2BkMuaAiNzqF%2Fl%2FIPr6RZmY0APUACsJKzsgVhhDnxM%2Fj1&X-Amz-Signature=37b95988ad76e7120621391953bfde721e2da1fd2fc107ff73408aebca8e9bd8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTPJH5DM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHYVFc0PdKcXM5mLfHDcJFg3HYU2amNxfmlXRq5JJW%2FAIgJMU5IkjpK76BVef46dG8v7reD1G7fsTGHJ9ZD9Hfgo8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEwDI4uZh3Y7N%2Fz7CrcAzjAzwMGu5ZPfxFLPYRqkRJDsafONZt%2FwoR8zynpgPk8imloXCxLRAmvb%2FezO9QFSZjK%2FDPhvPGM8flOgQWVz1CE0vGSdc%2FvtVPWkjgKAUi%2FLLcTeOFkIRVZWKtCMD4MjjPHAvj2w9CWd6R%2F%2Fuv9GK8DewVTh9uXdUea%2F7D6w44u%2B84ucaeX%2FVGKM6Tc2lkvGYmqMgIhlootpuyU%2FOECH9O0KEw7e%2FOIt19iGqjoNazqFuMY1s0qPE5dWHDnsn7TPrfGZLmChJPs%2F3xzDTnXaOWZdDpOFrbvw1MXJF1me88LsaHDN5U6I0c55APcaBSaBbXAREVoHt2Y7L%2BUr9iCfjD2bRku7L0WOXfDcteVwrhG1nBemnNXw4bBLUUxQJZtXW2Z4vUCQFNYwV2wSpWkHiTWLe7mbEUxPgK8oAX0Vy4fLadgXhN1SN4xoQpQaX4Ei5TUlj4EEZ4RwGl3ccQRZqXVqjL0coHq0DopeM2k0ylz%2BdytbIiyLi0Urr8RiePbs%2F0WVWSh%2FuvfW5x%2BotU7XOvG17WMeKqPjrDby8h%2BVMNA1fFQF0l5BlYK1ehVp4c1WVLlAbV6NeS8%2Baj86%2FV4JZhtF8Wabyy0R4P1Ny1cFSANDJYfg8FevmEzF6XRMM%2FP5sEGOqUBJ4si%2BGNePwt0amjH%2FY65qjNNFvZaEX1QKymZNkG4%2FUqeQjyblIgfysM7wQORRdwAHsI%2BTEgPLTUWUcAPLteA%2F6P7LJdsR0ubHUcgJqazugGyjzBoZJMoljHE8xpeA13ws%2B6EmqYFcXFKc7w34wSOAcWPrlyOCKsA7owxyNOMLqev9SJ8%2BkMuaAiNzqF%2Fl%2FIPr6RZmY0APUACsJKzsgVhhDnxM%2Fj1&X-Amz-Signature=ca5ab24f76849109e610354ae9deeb4521e237d1838db9497824a8b1d216d3e3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTPJH5DM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHYVFc0PdKcXM5mLfHDcJFg3HYU2amNxfmlXRq5JJW%2FAIgJMU5IkjpK76BVef46dG8v7reD1G7fsTGHJ9ZD9Hfgo8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEwDI4uZh3Y7N%2Fz7CrcAzjAzwMGu5ZPfxFLPYRqkRJDsafONZt%2FwoR8zynpgPk8imloXCxLRAmvb%2FezO9QFSZjK%2FDPhvPGM8flOgQWVz1CE0vGSdc%2FvtVPWkjgKAUi%2FLLcTeOFkIRVZWKtCMD4MjjPHAvj2w9CWd6R%2F%2Fuv9GK8DewVTh9uXdUea%2F7D6w44u%2B84ucaeX%2FVGKM6Tc2lkvGYmqMgIhlootpuyU%2FOECH9O0KEw7e%2FOIt19iGqjoNazqFuMY1s0qPE5dWHDnsn7TPrfGZLmChJPs%2F3xzDTnXaOWZdDpOFrbvw1MXJF1me88LsaHDN5U6I0c55APcaBSaBbXAREVoHt2Y7L%2BUr9iCfjD2bRku7L0WOXfDcteVwrhG1nBemnNXw4bBLUUxQJZtXW2Z4vUCQFNYwV2wSpWkHiTWLe7mbEUxPgK8oAX0Vy4fLadgXhN1SN4xoQpQaX4Ei5TUlj4EEZ4RwGl3ccQRZqXVqjL0coHq0DopeM2k0ylz%2BdytbIiyLi0Urr8RiePbs%2F0WVWSh%2FuvfW5x%2BotU7XOvG17WMeKqPjrDby8h%2BVMNA1fFQF0l5BlYK1ehVp4c1WVLlAbV6NeS8%2Baj86%2FV4JZhtF8Wabyy0R4P1Ny1cFSANDJYfg8FevmEzF6XRMM%2FP5sEGOqUBJ4si%2BGNePwt0amjH%2FY65qjNNFvZaEX1QKymZNkG4%2FUqeQjyblIgfysM7wQORRdwAHsI%2BTEgPLTUWUcAPLteA%2F6P7LJdsR0ubHUcgJqazugGyjzBoZJMoljHE8xpeA13ws%2B6EmqYFcXFKc7w34wSOAcWPrlyOCKsA7owxyNOMLqev9SJ8%2BkMuaAiNzqF%2Fl%2FIPr6RZmY0APUACsJKzsgVhhDnxM%2Fj1&X-Amz-Signature=f67001147a1c46354b6c66f86af7e577ecef49117c03f09a262c4ce38fcfb0fd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTPJH5DM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHYVFc0PdKcXM5mLfHDcJFg3HYU2amNxfmlXRq5JJW%2FAIgJMU5IkjpK76BVef46dG8v7reD1G7fsTGHJ9ZD9Hfgo8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEwDI4uZh3Y7N%2Fz7CrcAzjAzwMGu5ZPfxFLPYRqkRJDsafONZt%2FwoR8zynpgPk8imloXCxLRAmvb%2FezO9QFSZjK%2FDPhvPGM8flOgQWVz1CE0vGSdc%2FvtVPWkjgKAUi%2FLLcTeOFkIRVZWKtCMD4MjjPHAvj2w9CWd6R%2F%2Fuv9GK8DewVTh9uXdUea%2F7D6w44u%2B84ucaeX%2FVGKM6Tc2lkvGYmqMgIhlootpuyU%2FOECH9O0KEw7e%2FOIt19iGqjoNazqFuMY1s0qPE5dWHDnsn7TPrfGZLmChJPs%2F3xzDTnXaOWZdDpOFrbvw1MXJF1me88LsaHDN5U6I0c55APcaBSaBbXAREVoHt2Y7L%2BUr9iCfjD2bRku7L0WOXfDcteVwrhG1nBemnNXw4bBLUUxQJZtXW2Z4vUCQFNYwV2wSpWkHiTWLe7mbEUxPgK8oAX0Vy4fLadgXhN1SN4xoQpQaX4Ei5TUlj4EEZ4RwGl3ccQRZqXVqjL0coHq0DopeM2k0ylz%2BdytbIiyLi0Urr8RiePbs%2F0WVWSh%2FuvfW5x%2BotU7XOvG17WMeKqPjrDby8h%2BVMNA1fFQF0l5BlYK1ehVp4c1WVLlAbV6NeS8%2Baj86%2FV4JZhtF8Wabyy0R4P1Ny1cFSANDJYfg8FevmEzF6XRMM%2FP5sEGOqUBJ4si%2BGNePwt0amjH%2FY65qjNNFvZaEX1QKymZNkG4%2FUqeQjyblIgfysM7wQORRdwAHsI%2BTEgPLTUWUcAPLteA%2F6P7LJdsR0ubHUcgJqazugGyjzBoZJMoljHE8xpeA13ws%2B6EmqYFcXFKc7w34wSOAcWPrlyOCKsA7owxyNOMLqev9SJ8%2BkMuaAiNzqF%2Fl%2FIPr6RZmY0APUACsJKzsgVhhDnxM%2Fj1&X-Amz-Signature=40ea642794d697edc1c03b0c10e58deb299819bc2f00e14aa82d8b5b193728d8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTPJH5DM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHYVFc0PdKcXM5mLfHDcJFg3HYU2amNxfmlXRq5JJW%2FAIgJMU5IkjpK76BVef46dG8v7reD1G7fsTGHJ9ZD9Hfgo8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEwDI4uZh3Y7N%2Fz7CrcAzjAzwMGu5ZPfxFLPYRqkRJDsafONZt%2FwoR8zynpgPk8imloXCxLRAmvb%2FezO9QFSZjK%2FDPhvPGM8flOgQWVz1CE0vGSdc%2FvtVPWkjgKAUi%2FLLcTeOFkIRVZWKtCMD4MjjPHAvj2w9CWd6R%2F%2Fuv9GK8DewVTh9uXdUea%2F7D6w44u%2B84ucaeX%2FVGKM6Tc2lkvGYmqMgIhlootpuyU%2FOECH9O0KEw7e%2FOIt19iGqjoNazqFuMY1s0qPE5dWHDnsn7TPrfGZLmChJPs%2F3xzDTnXaOWZdDpOFrbvw1MXJF1me88LsaHDN5U6I0c55APcaBSaBbXAREVoHt2Y7L%2BUr9iCfjD2bRku7L0WOXfDcteVwrhG1nBemnNXw4bBLUUxQJZtXW2Z4vUCQFNYwV2wSpWkHiTWLe7mbEUxPgK8oAX0Vy4fLadgXhN1SN4xoQpQaX4Ei5TUlj4EEZ4RwGl3ccQRZqXVqjL0coHq0DopeM2k0ylz%2BdytbIiyLi0Urr8RiePbs%2F0WVWSh%2FuvfW5x%2BotU7XOvG17WMeKqPjrDby8h%2BVMNA1fFQF0l5BlYK1ehVp4c1WVLlAbV6NeS8%2Baj86%2FV4JZhtF8Wabyy0R4P1Ny1cFSANDJYfg8FevmEzF6XRMM%2FP5sEGOqUBJ4si%2BGNePwt0amjH%2FY65qjNNFvZaEX1QKymZNkG4%2FUqeQjyblIgfysM7wQORRdwAHsI%2BTEgPLTUWUcAPLteA%2F6P7LJdsR0ubHUcgJqazugGyjzBoZJMoljHE8xpeA13ws%2B6EmqYFcXFKc7w34wSOAcWPrlyOCKsA7owxyNOMLqev9SJ8%2BkMuaAiNzqF%2Fl%2FIPr6RZmY0APUACsJKzsgVhhDnxM%2Fj1&X-Amz-Signature=c44c2a255d573185f7554b2c4b6d96c9c52ade2f25fcaf382f43bb0ea5757f90&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTPJH5DM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHYVFc0PdKcXM5mLfHDcJFg3HYU2amNxfmlXRq5JJW%2FAIgJMU5IkjpK76BVef46dG8v7reD1G7fsTGHJ9ZD9Hfgo8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEwDI4uZh3Y7N%2Fz7CrcAzjAzwMGu5ZPfxFLPYRqkRJDsafONZt%2FwoR8zynpgPk8imloXCxLRAmvb%2FezO9QFSZjK%2FDPhvPGM8flOgQWVz1CE0vGSdc%2FvtVPWkjgKAUi%2FLLcTeOFkIRVZWKtCMD4MjjPHAvj2w9CWd6R%2F%2Fuv9GK8DewVTh9uXdUea%2F7D6w44u%2B84ucaeX%2FVGKM6Tc2lkvGYmqMgIhlootpuyU%2FOECH9O0KEw7e%2FOIt19iGqjoNazqFuMY1s0qPE5dWHDnsn7TPrfGZLmChJPs%2F3xzDTnXaOWZdDpOFrbvw1MXJF1me88LsaHDN5U6I0c55APcaBSaBbXAREVoHt2Y7L%2BUr9iCfjD2bRku7L0WOXfDcteVwrhG1nBemnNXw4bBLUUxQJZtXW2Z4vUCQFNYwV2wSpWkHiTWLe7mbEUxPgK8oAX0Vy4fLadgXhN1SN4xoQpQaX4Ei5TUlj4EEZ4RwGl3ccQRZqXVqjL0coHq0DopeM2k0ylz%2BdytbIiyLi0Urr8RiePbs%2F0WVWSh%2FuvfW5x%2BotU7XOvG17WMeKqPjrDby8h%2BVMNA1fFQF0l5BlYK1ehVp4c1WVLlAbV6NeS8%2Baj86%2FV4JZhtF8Wabyy0R4P1Ny1cFSANDJYfg8FevmEzF6XRMM%2FP5sEGOqUBJ4si%2BGNePwt0amjH%2FY65qjNNFvZaEX1QKymZNkG4%2FUqeQjyblIgfysM7wQORRdwAHsI%2BTEgPLTUWUcAPLteA%2F6P7LJdsR0ubHUcgJqazugGyjzBoZJMoljHE8xpeA13ws%2B6EmqYFcXFKc7w34wSOAcWPrlyOCKsA7owxyNOMLqev9SJ8%2BkMuaAiNzqF%2Fl%2FIPr6RZmY0APUACsJKzsgVhhDnxM%2Fj1&X-Amz-Signature=d2433f79e440d4a96be058e306ef376107710f5ef0845f0d12675777904c5cc8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
