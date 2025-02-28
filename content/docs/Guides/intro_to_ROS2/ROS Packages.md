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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SU4QB5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGLyX71I%2BSeGoUvZo3L4S7c29X3iLBS3gTI3cEvP2neBAiAlvcqDhyZLdCa02BchB75tPKnYKwgibCY6iHxl3x1hfSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLD6hf9Pd4izWwKtaKtwDa2D8GaK2m2p3E1CDG%2FOyz6U2Ymmo1%2FLAl80AqcmJH1l%2FiTHg4DggqruweeOgor84KobQMDvKguYIkwMr14Q2gZ%2FFPdgls6cj7Ga4vzZQjvszLseXRa65jhEBzA0hxkBCl%2FshPiPhNSI1LJJsQ8rseWFlOaVEzt4jf7jOj7IZ%2FdKdmmqsHa09QyT%2F5qGIgUzSSnBRd7%2BdwbiPIT5LXydQEi8JAV9VwZ6yhJ1Mhj55fZzUIKomI3RnzTU6%2F9n2Uz4Gl0feM0SGrK82PoTPuOL6nR2JO6bFfF4YXF5%2FwbvQ4iyOMXJnfh%2Bhymdw%2BeouoE1ZiwxugwQvofSXRMnSZ1oGjwjCSuzAbdiSNgF0yYUbB4TuvcowvfOKt5jpNiiCVWI%2BYkQHjKBjOQ796OtV8acfkFA%2Bo0Z27IFhWk7onYNMRhmic5OpMdwdfGDI7DF7z1w31zrVurcTa8%2FMYdBjbvLA3EGgxot9hHCbsSCfu1X1QJZjBKDNS1tdFTH8c604H0vtfyJuByX23ALTQKS4jJxEGxXAYgR8lObK%2FEsxcS8gLsal2tnk%2F4rbz5F%2BIa5NRgjKBDkERLaJXgSyoR3bcSeWBWRurTh7Bci5gi%2BLISBXLtu2St37KuIkNYAZVnUwu4uIvgY6pgHRvnVxNKxdaQ5OLirtttPkvn%2B9r3twc0%2F7pZrQbOrzai1gISDPe7Yc3xH93HMC6IA%2BYIFY7TXCwqja4NDN6R%2Bw3dTb58G9SHbEQY79vgLIhkAnRPdCI6nnAa3dgc6gwjKMx%2FX%2BO2NpQUgZgbLNAiXJmSbFWPZ0L5RB6Sg8F9XxiLhB84hTUpIHMvC1IewQc2b2OCumz%2BQcUGzCqxDhBAhAhXSwSkAU&X-Amz-Signature=e56d4678a0347d24ee66f7925473c8973201842593492335d7f1bc32c6925bb4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SU4QB5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGLyX71I%2BSeGoUvZo3L4S7c29X3iLBS3gTI3cEvP2neBAiAlvcqDhyZLdCa02BchB75tPKnYKwgibCY6iHxl3x1hfSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLD6hf9Pd4izWwKtaKtwDa2D8GaK2m2p3E1CDG%2FOyz6U2Ymmo1%2FLAl80AqcmJH1l%2FiTHg4DggqruweeOgor84KobQMDvKguYIkwMr14Q2gZ%2FFPdgls6cj7Ga4vzZQjvszLseXRa65jhEBzA0hxkBCl%2FshPiPhNSI1LJJsQ8rseWFlOaVEzt4jf7jOj7IZ%2FdKdmmqsHa09QyT%2F5qGIgUzSSnBRd7%2BdwbiPIT5LXydQEi8JAV9VwZ6yhJ1Mhj55fZzUIKomI3RnzTU6%2F9n2Uz4Gl0feM0SGrK82PoTPuOL6nR2JO6bFfF4YXF5%2FwbvQ4iyOMXJnfh%2Bhymdw%2BeouoE1ZiwxugwQvofSXRMnSZ1oGjwjCSuzAbdiSNgF0yYUbB4TuvcowvfOKt5jpNiiCVWI%2BYkQHjKBjOQ796OtV8acfkFA%2Bo0Z27IFhWk7onYNMRhmic5OpMdwdfGDI7DF7z1w31zrVurcTa8%2FMYdBjbvLA3EGgxot9hHCbsSCfu1X1QJZjBKDNS1tdFTH8c604H0vtfyJuByX23ALTQKS4jJxEGxXAYgR8lObK%2FEsxcS8gLsal2tnk%2F4rbz5F%2BIa5NRgjKBDkERLaJXgSyoR3bcSeWBWRurTh7Bci5gi%2BLISBXLtu2St37KuIkNYAZVnUwu4uIvgY6pgHRvnVxNKxdaQ5OLirtttPkvn%2B9r3twc0%2F7pZrQbOrzai1gISDPe7Yc3xH93HMC6IA%2BYIFY7TXCwqja4NDN6R%2Bw3dTb58G9SHbEQY79vgLIhkAnRPdCI6nnAa3dgc6gwjKMx%2FX%2BO2NpQUgZgbLNAiXJmSbFWPZ0L5RB6Sg8F9XxiLhB84hTUpIHMvC1IewQc2b2OCumz%2BQcUGzCqxDhBAhAhXSwSkAU&X-Amz-Signature=292225e6ec8bc2a2cb7b4a7a351cf84b2560a865f0aa2eb3f4328a72e4823c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SU4QB5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGLyX71I%2BSeGoUvZo3L4S7c29X3iLBS3gTI3cEvP2neBAiAlvcqDhyZLdCa02BchB75tPKnYKwgibCY6iHxl3x1hfSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLD6hf9Pd4izWwKtaKtwDa2D8GaK2m2p3E1CDG%2FOyz6U2Ymmo1%2FLAl80AqcmJH1l%2FiTHg4DggqruweeOgor84KobQMDvKguYIkwMr14Q2gZ%2FFPdgls6cj7Ga4vzZQjvszLseXRa65jhEBzA0hxkBCl%2FshPiPhNSI1LJJsQ8rseWFlOaVEzt4jf7jOj7IZ%2FdKdmmqsHa09QyT%2F5qGIgUzSSnBRd7%2BdwbiPIT5LXydQEi8JAV9VwZ6yhJ1Mhj55fZzUIKomI3RnzTU6%2F9n2Uz4Gl0feM0SGrK82PoTPuOL6nR2JO6bFfF4YXF5%2FwbvQ4iyOMXJnfh%2Bhymdw%2BeouoE1ZiwxugwQvofSXRMnSZ1oGjwjCSuzAbdiSNgF0yYUbB4TuvcowvfOKt5jpNiiCVWI%2BYkQHjKBjOQ796OtV8acfkFA%2Bo0Z27IFhWk7onYNMRhmic5OpMdwdfGDI7DF7z1w31zrVurcTa8%2FMYdBjbvLA3EGgxot9hHCbsSCfu1X1QJZjBKDNS1tdFTH8c604H0vtfyJuByX23ALTQKS4jJxEGxXAYgR8lObK%2FEsxcS8gLsal2tnk%2F4rbz5F%2BIa5NRgjKBDkERLaJXgSyoR3bcSeWBWRurTh7Bci5gi%2BLISBXLtu2St37KuIkNYAZVnUwu4uIvgY6pgHRvnVxNKxdaQ5OLirtttPkvn%2B9r3twc0%2F7pZrQbOrzai1gISDPe7Yc3xH93HMC6IA%2BYIFY7TXCwqja4NDN6R%2Bw3dTb58G9SHbEQY79vgLIhkAnRPdCI6nnAa3dgc6gwjKMx%2FX%2BO2NpQUgZgbLNAiXJmSbFWPZ0L5RB6Sg8F9XxiLhB84hTUpIHMvC1IewQc2b2OCumz%2BQcUGzCqxDhBAhAhXSwSkAU&X-Amz-Signature=cccfa391a08093eb21fe7bbc08a33dc2b8c4b955be0a2a734dfdc33045983c40&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SU4QB5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGLyX71I%2BSeGoUvZo3L4S7c29X3iLBS3gTI3cEvP2neBAiAlvcqDhyZLdCa02BchB75tPKnYKwgibCY6iHxl3x1hfSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLD6hf9Pd4izWwKtaKtwDa2D8GaK2m2p3E1CDG%2FOyz6U2Ymmo1%2FLAl80AqcmJH1l%2FiTHg4DggqruweeOgor84KobQMDvKguYIkwMr14Q2gZ%2FFPdgls6cj7Ga4vzZQjvszLseXRa65jhEBzA0hxkBCl%2FshPiPhNSI1LJJsQ8rseWFlOaVEzt4jf7jOj7IZ%2FdKdmmqsHa09QyT%2F5qGIgUzSSnBRd7%2BdwbiPIT5LXydQEi8JAV9VwZ6yhJ1Mhj55fZzUIKomI3RnzTU6%2F9n2Uz4Gl0feM0SGrK82PoTPuOL6nR2JO6bFfF4YXF5%2FwbvQ4iyOMXJnfh%2Bhymdw%2BeouoE1ZiwxugwQvofSXRMnSZ1oGjwjCSuzAbdiSNgF0yYUbB4TuvcowvfOKt5jpNiiCVWI%2BYkQHjKBjOQ796OtV8acfkFA%2Bo0Z27IFhWk7onYNMRhmic5OpMdwdfGDI7DF7z1w31zrVurcTa8%2FMYdBjbvLA3EGgxot9hHCbsSCfu1X1QJZjBKDNS1tdFTH8c604H0vtfyJuByX23ALTQKS4jJxEGxXAYgR8lObK%2FEsxcS8gLsal2tnk%2F4rbz5F%2BIa5NRgjKBDkERLaJXgSyoR3bcSeWBWRurTh7Bci5gi%2BLISBXLtu2St37KuIkNYAZVnUwu4uIvgY6pgHRvnVxNKxdaQ5OLirtttPkvn%2B9r3twc0%2F7pZrQbOrzai1gISDPe7Yc3xH93HMC6IA%2BYIFY7TXCwqja4NDN6R%2Bw3dTb58G9SHbEQY79vgLIhkAnRPdCI6nnAa3dgc6gwjKMx%2FX%2BO2NpQUgZgbLNAiXJmSbFWPZ0L5RB6Sg8F9XxiLhB84hTUpIHMvC1IewQc2b2OCumz%2BQcUGzCqxDhBAhAhXSwSkAU&X-Amz-Signature=dca1379ce1ecc34e501da493c1d07104ef27008b35b5c106286419f75bd44099&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SU4QB5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGLyX71I%2BSeGoUvZo3L4S7c29X3iLBS3gTI3cEvP2neBAiAlvcqDhyZLdCa02BchB75tPKnYKwgibCY6iHxl3x1hfSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLD6hf9Pd4izWwKtaKtwDa2D8GaK2m2p3E1CDG%2FOyz6U2Ymmo1%2FLAl80AqcmJH1l%2FiTHg4DggqruweeOgor84KobQMDvKguYIkwMr14Q2gZ%2FFPdgls6cj7Ga4vzZQjvszLseXRa65jhEBzA0hxkBCl%2FshPiPhNSI1LJJsQ8rseWFlOaVEzt4jf7jOj7IZ%2FdKdmmqsHa09QyT%2F5qGIgUzSSnBRd7%2BdwbiPIT5LXydQEi8JAV9VwZ6yhJ1Mhj55fZzUIKomI3RnzTU6%2F9n2Uz4Gl0feM0SGrK82PoTPuOL6nR2JO6bFfF4YXF5%2FwbvQ4iyOMXJnfh%2Bhymdw%2BeouoE1ZiwxugwQvofSXRMnSZ1oGjwjCSuzAbdiSNgF0yYUbB4TuvcowvfOKt5jpNiiCVWI%2BYkQHjKBjOQ796OtV8acfkFA%2Bo0Z27IFhWk7onYNMRhmic5OpMdwdfGDI7DF7z1w31zrVurcTa8%2FMYdBjbvLA3EGgxot9hHCbsSCfu1X1QJZjBKDNS1tdFTH8c604H0vtfyJuByX23ALTQKS4jJxEGxXAYgR8lObK%2FEsxcS8gLsal2tnk%2F4rbz5F%2BIa5NRgjKBDkERLaJXgSyoR3bcSeWBWRurTh7Bci5gi%2BLISBXLtu2St37KuIkNYAZVnUwu4uIvgY6pgHRvnVxNKxdaQ5OLirtttPkvn%2B9r3twc0%2F7pZrQbOrzai1gISDPe7Yc3xH93HMC6IA%2BYIFY7TXCwqja4NDN6R%2Bw3dTb58G9SHbEQY79vgLIhkAnRPdCI6nnAa3dgc6gwjKMx%2FX%2BO2NpQUgZgbLNAiXJmSbFWPZ0L5RB6Sg8F9XxiLhB84hTUpIHMvC1IewQc2b2OCumz%2BQcUGzCqxDhBAhAhXSwSkAU&X-Amz-Signature=7a18e1be2c421a8c6e72dbe3d21e7940c35a4a6236923a8d2022c1d05ff1c6ce&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SU4QB5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGLyX71I%2BSeGoUvZo3L4S7c29X3iLBS3gTI3cEvP2neBAiAlvcqDhyZLdCa02BchB75tPKnYKwgibCY6iHxl3x1hfSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLD6hf9Pd4izWwKtaKtwDa2D8GaK2m2p3E1CDG%2FOyz6U2Ymmo1%2FLAl80AqcmJH1l%2FiTHg4DggqruweeOgor84KobQMDvKguYIkwMr14Q2gZ%2FFPdgls6cj7Ga4vzZQjvszLseXRa65jhEBzA0hxkBCl%2FshPiPhNSI1LJJsQ8rseWFlOaVEzt4jf7jOj7IZ%2FdKdmmqsHa09QyT%2F5qGIgUzSSnBRd7%2BdwbiPIT5LXydQEi8JAV9VwZ6yhJ1Mhj55fZzUIKomI3RnzTU6%2F9n2Uz4Gl0feM0SGrK82PoTPuOL6nR2JO6bFfF4YXF5%2FwbvQ4iyOMXJnfh%2Bhymdw%2BeouoE1ZiwxugwQvofSXRMnSZ1oGjwjCSuzAbdiSNgF0yYUbB4TuvcowvfOKt5jpNiiCVWI%2BYkQHjKBjOQ796OtV8acfkFA%2Bo0Z27IFhWk7onYNMRhmic5OpMdwdfGDI7DF7z1w31zrVurcTa8%2FMYdBjbvLA3EGgxot9hHCbsSCfu1X1QJZjBKDNS1tdFTH8c604H0vtfyJuByX23ALTQKS4jJxEGxXAYgR8lObK%2FEsxcS8gLsal2tnk%2F4rbz5F%2BIa5NRgjKBDkERLaJXgSyoR3bcSeWBWRurTh7Bci5gi%2BLISBXLtu2St37KuIkNYAZVnUwu4uIvgY6pgHRvnVxNKxdaQ5OLirtttPkvn%2B9r3twc0%2F7pZrQbOrzai1gISDPe7Yc3xH93HMC6IA%2BYIFY7TXCwqja4NDN6R%2Bw3dTb58G9SHbEQY79vgLIhkAnRPdCI6nnAa3dgc6gwjKMx%2FX%2BO2NpQUgZgbLNAiXJmSbFWPZ0L5RB6Sg8F9XxiLhB84hTUpIHMvC1IewQc2b2OCumz%2BQcUGzCqxDhBAhAhXSwSkAU&X-Amz-Signature=e096888c0e1b431911e85781ffa97ce8243da8f5059b20250983fac7771531b6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SU4QB5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGLyX71I%2BSeGoUvZo3L4S7c29X3iLBS3gTI3cEvP2neBAiAlvcqDhyZLdCa02BchB75tPKnYKwgibCY6iHxl3x1hfSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLD6hf9Pd4izWwKtaKtwDa2D8GaK2m2p3E1CDG%2FOyz6U2Ymmo1%2FLAl80AqcmJH1l%2FiTHg4DggqruweeOgor84KobQMDvKguYIkwMr14Q2gZ%2FFPdgls6cj7Ga4vzZQjvszLseXRa65jhEBzA0hxkBCl%2FshPiPhNSI1LJJsQ8rseWFlOaVEzt4jf7jOj7IZ%2FdKdmmqsHa09QyT%2F5qGIgUzSSnBRd7%2BdwbiPIT5LXydQEi8JAV9VwZ6yhJ1Mhj55fZzUIKomI3RnzTU6%2F9n2Uz4Gl0feM0SGrK82PoTPuOL6nR2JO6bFfF4YXF5%2FwbvQ4iyOMXJnfh%2Bhymdw%2BeouoE1ZiwxugwQvofSXRMnSZ1oGjwjCSuzAbdiSNgF0yYUbB4TuvcowvfOKt5jpNiiCVWI%2BYkQHjKBjOQ796OtV8acfkFA%2Bo0Z27IFhWk7onYNMRhmic5OpMdwdfGDI7DF7z1w31zrVurcTa8%2FMYdBjbvLA3EGgxot9hHCbsSCfu1X1QJZjBKDNS1tdFTH8c604H0vtfyJuByX23ALTQKS4jJxEGxXAYgR8lObK%2FEsxcS8gLsal2tnk%2F4rbz5F%2BIa5NRgjKBDkERLaJXgSyoR3bcSeWBWRurTh7Bci5gi%2BLISBXLtu2St37KuIkNYAZVnUwu4uIvgY6pgHRvnVxNKxdaQ5OLirtttPkvn%2B9r3twc0%2F7pZrQbOrzai1gISDPe7Yc3xH93HMC6IA%2BYIFY7TXCwqja4NDN6R%2Bw3dTb58G9SHbEQY79vgLIhkAnRPdCI6nnAa3dgc6gwjKMx%2FX%2BO2NpQUgZgbLNAiXJmSbFWPZ0L5RB6Sg8F9XxiLhB84hTUpIHMvC1IewQc2b2OCumz%2BQcUGzCqxDhBAhAhXSwSkAU&X-Amz-Signature=8eb4b5ba8722751478142effd07fe127f8203183a2e5c5d206dd56f8bbbb996c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
