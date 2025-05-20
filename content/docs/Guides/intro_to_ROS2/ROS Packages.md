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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNNSFYIZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrFkiWuTYSa4ghiGlaFrww2bJIG4LCY5YgotMPrf1AaAiA9wuMEgRhYYcJJuU0jSTKagjFOVrgtOh0kFyw8BnGmNiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIj2b%2F3t9Ikhd61bkKtwDs59EiuQk7neEXELVDy07X1ElFX4%2FHp4sEmw0if2eIonKwHrXrv%2BGGN4V6lkG7DkT7q33YutBxehbTgyOAZiRGwuBDIf3Fzh2JtKH4WiseX4TZPvNFx75AGfV4NhhDjcXoLmnmb%2FA4YBw9XAiIzb9%2FPCjMtyVLtJGM0Bm9LqFVP7jnAFQp7IN78lunV4w2%2FSeSrfzaDjBiG9pSPKKcAoCKbhe9uJWsCGQ%2BjYVEr16xO0RpKpU8NRugJL8SQGMjU8HkkF4sp6aa7aOoh7H%2FYSYzskOmml0wjEzKBXEjBOhscEqjl%2BCaILGfYl%2BB%2FABl9hFUm%2Fyd3zKFy9zb5hNAVKk8wAUvpENSUQ0d8ThIfVZD9pKAy%2FZKFS8HqzA0RO804DxHeCuvNjuDThe75ihoIhcVLJNkQ0JaKVB701fJ5vmgeAuVpBuCzakdqHk6yTaPWeicRx%2BaT9z3ckGq%2FcsNXx3wvVuU1nlDIRVmpYpKQHD%2FekpuXN20WaVQKi8U5fztWteZ%2FijXYyywuPaJ4s6DDVevdJG2BtI03bBSFdfE5XFUYZg9vnJHVDLJflzezcWJmgCFrFYVfWc%2BYZhp88v7sQJgG4%2BRTP9lgxt%2BxPdiYIZTT6pJTIifxNP0D4kp2Aw2MuzwQY6pgFUOh8QpbDsSjV99zw8WvSKyJiJBgdsIGe4uFnN5%2B3fbbGBaoq%2FYc3KAoRqY8tBTkSJlHqGJ9osXRIKpI8%2BQs4ig01Ep9N27UbjmicNWWeoEB5p%2FyUFzKkaOe4nPR1wFH1vnIXEX8tTK9igTHW%2FkpPE4GAkKMwIHeI%2BqfPWBIHjt7nbrmiAam2PMzYfmyT1eo36gZfEvAWRuB6J11tf57GWeL%2FHJNMd&X-Amz-Signature=fbc67b2fa5c4010f5886974fc18183511e29d0e050eec852fe772b2840052f91&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNNSFYIZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrFkiWuTYSa4ghiGlaFrww2bJIG4LCY5YgotMPrf1AaAiA9wuMEgRhYYcJJuU0jSTKagjFOVrgtOh0kFyw8BnGmNiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIj2b%2F3t9Ikhd61bkKtwDs59EiuQk7neEXELVDy07X1ElFX4%2FHp4sEmw0if2eIonKwHrXrv%2BGGN4V6lkG7DkT7q33YutBxehbTgyOAZiRGwuBDIf3Fzh2JtKH4WiseX4TZPvNFx75AGfV4NhhDjcXoLmnmb%2FA4YBw9XAiIzb9%2FPCjMtyVLtJGM0Bm9LqFVP7jnAFQp7IN78lunV4w2%2FSeSrfzaDjBiG9pSPKKcAoCKbhe9uJWsCGQ%2BjYVEr16xO0RpKpU8NRugJL8SQGMjU8HkkF4sp6aa7aOoh7H%2FYSYzskOmml0wjEzKBXEjBOhscEqjl%2BCaILGfYl%2BB%2FABl9hFUm%2Fyd3zKFy9zb5hNAVKk8wAUvpENSUQ0d8ThIfVZD9pKAy%2FZKFS8HqzA0RO804DxHeCuvNjuDThe75ihoIhcVLJNkQ0JaKVB701fJ5vmgeAuVpBuCzakdqHk6yTaPWeicRx%2BaT9z3ckGq%2FcsNXx3wvVuU1nlDIRVmpYpKQHD%2FekpuXN20WaVQKi8U5fztWteZ%2FijXYyywuPaJ4s6DDVevdJG2BtI03bBSFdfE5XFUYZg9vnJHVDLJflzezcWJmgCFrFYVfWc%2BYZhp88v7sQJgG4%2BRTP9lgxt%2BxPdiYIZTT6pJTIifxNP0D4kp2Aw2MuzwQY6pgFUOh8QpbDsSjV99zw8WvSKyJiJBgdsIGe4uFnN5%2B3fbbGBaoq%2FYc3KAoRqY8tBTkSJlHqGJ9osXRIKpI8%2BQs4ig01Ep9N27UbjmicNWWeoEB5p%2FyUFzKkaOe4nPR1wFH1vnIXEX8tTK9igTHW%2FkpPE4GAkKMwIHeI%2BqfPWBIHjt7nbrmiAam2PMzYfmyT1eo36gZfEvAWRuB6J11tf57GWeL%2FHJNMd&X-Amz-Signature=ebc87e0f7d0c49e00f3ac768d00e39e49100bc13417277dc7bb60879a8fba208&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNNSFYIZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrFkiWuTYSa4ghiGlaFrww2bJIG4LCY5YgotMPrf1AaAiA9wuMEgRhYYcJJuU0jSTKagjFOVrgtOh0kFyw8BnGmNiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIj2b%2F3t9Ikhd61bkKtwDs59EiuQk7neEXELVDy07X1ElFX4%2FHp4sEmw0if2eIonKwHrXrv%2BGGN4V6lkG7DkT7q33YutBxehbTgyOAZiRGwuBDIf3Fzh2JtKH4WiseX4TZPvNFx75AGfV4NhhDjcXoLmnmb%2FA4YBw9XAiIzb9%2FPCjMtyVLtJGM0Bm9LqFVP7jnAFQp7IN78lunV4w2%2FSeSrfzaDjBiG9pSPKKcAoCKbhe9uJWsCGQ%2BjYVEr16xO0RpKpU8NRugJL8SQGMjU8HkkF4sp6aa7aOoh7H%2FYSYzskOmml0wjEzKBXEjBOhscEqjl%2BCaILGfYl%2BB%2FABl9hFUm%2Fyd3zKFy9zb5hNAVKk8wAUvpENSUQ0d8ThIfVZD9pKAy%2FZKFS8HqzA0RO804DxHeCuvNjuDThe75ihoIhcVLJNkQ0JaKVB701fJ5vmgeAuVpBuCzakdqHk6yTaPWeicRx%2BaT9z3ckGq%2FcsNXx3wvVuU1nlDIRVmpYpKQHD%2FekpuXN20WaVQKi8U5fztWteZ%2FijXYyywuPaJ4s6DDVevdJG2BtI03bBSFdfE5XFUYZg9vnJHVDLJflzezcWJmgCFrFYVfWc%2BYZhp88v7sQJgG4%2BRTP9lgxt%2BxPdiYIZTT6pJTIifxNP0D4kp2Aw2MuzwQY6pgFUOh8QpbDsSjV99zw8WvSKyJiJBgdsIGe4uFnN5%2B3fbbGBaoq%2FYc3KAoRqY8tBTkSJlHqGJ9osXRIKpI8%2BQs4ig01Ep9N27UbjmicNWWeoEB5p%2FyUFzKkaOe4nPR1wFH1vnIXEX8tTK9igTHW%2FkpPE4GAkKMwIHeI%2BqfPWBIHjt7nbrmiAam2PMzYfmyT1eo36gZfEvAWRuB6J11tf57GWeL%2FHJNMd&X-Amz-Signature=ab04e71a0fd97b7772c23aa70fc1f34db1eee1c2de77d5d793d99f61f70dbdff&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNNSFYIZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrFkiWuTYSa4ghiGlaFrww2bJIG4LCY5YgotMPrf1AaAiA9wuMEgRhYYcJJuU0jSTKagjFOVrgtOh0kFyw8BnGmNiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIj2b%2F3t9Ikhd61bkKtwDs59EiuQk7neEXELVDy07X1ElFX4%2FHp4sEmw0if2eIonKwHrXrv%2BGGN4V6lkG7DkT7q33YutBxehbTgyOAZiRGwuBDIf3Fzh2JtKH4WiseX4TZPvNFx75AGfV4NhhDjcXoLmnmb%2FA4YBw9XAiIzb9%2FPCjMtyVLtJGM0Bm9LqFVP7jnAFQp7IN78lunV4w2%2FSeSrfzaDjBiG9pSPKKcAoCKbhe9uJWsCGQ%2BjYVEr16xO0RpKpU8NRugJL8SQGMjU8HkkF4sp6aa7aOoh7H%2FYSYzskOmml0wjEzKBXEjBOhscEqjl%2BCaILGfYl%2BB%2FABl9hFUm%2Fyd3zKFy9zb5hNAVKk8wAUvpENSUQ0d8ThIfVZD9pKAy%2FZKFS8HqzA0RO804DxHeCuvNjuDThe75ihoIhcVLJNkQ0JaKVB701fJ5vmgeAuVpBuCzakdqHk6yTaPWeicRx%2BaT9z3ckGq%2FcsNXx3wvVuU1nlDIRVmpYpKQHD%2FekpuXN20WaVQKi8U5fztWteZ%2FijXYyywuPaJ4s6DDVevdJG2BtI03bBSFdfE5XFUYZg9vnJHVDLJflzezcWJmgCFrFYVfWc%2BYZhp88v7sQJgG4%2BRTP9lgxt%2BxPdiYIZTT6pJTIifxNP0D4kp2Aw2MuzwQY6pgFUOh8QpbDsSjV99zw8WvSKyJiJBgdsIGe4uFnN5%2B3fbbGBaoq%2FYc3KAoRqY8tBTkSJlHqGJ9osXRIKpI8%2BQs4ig01Ep9N27UbjmicNWWeoEB5p%2FyUFzKkaOe4nPR1wFH1vnIXEX8tTK9igTHW%2FkpPE4GAkKMwIHeI%2BqfPWBIHjt7nbrmiAam2PMzYfmyT1eo36gZfEvAWRuB6J11tf57GWeL%2FHJNMd&X-Amz-Signature=1857f3fe5db4ab03321bdc02a9b1fb6c50057d81cf0963d021eb9736af1d528a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNNSFYIZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrFkiWuTYSa4ghiGlaFrww2bJIG4LCY5YgotMPrf1AaAiA9wuMEgRhYYcJJuU0jSTKagjFOVrgtOh0kFyw8BnGmNiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIj2b%2F3t9Ikhd61bkKtwDs59EiuQk7neEXELVDy07X1ElFX4%2FHp4sEmw0if2eIonKwHrXrv%2BGGN4V6lkG7DkT7q33YutBxehbTgyOAZiRGwuBDIf3Fzh2JtKH4WiseX4TZPvNFx75AGfV4NhhDjcXoLmnmb%2FA4YBw9XAiIzb9%2FPCjMtyVLtJGM0Bm9LqFVP7jnAFQp7IN78lunV4w2%2FSeSrfzaDjBiG9pSPKKcAoCKbhe9uJWsCGQ%2BjYVEr16xO0RpKpU8NRugJL8SQGMjU8HkkF4sp6aa7aOoh7H%2FYSYzskOmml0wjEzKBXEjBOhscEqjl%2BCaILGfYl%2BB%2FABl9hFUm%2Fyd3zKFy9zb5hNAVKk8wAUvpENSUQ0d8ThIfVZD9pKAy%2FZKFS8HqzA0RO804DxHeCuvNjuDThe75ihoIhcVLJNkQ0JaKVB701fJ5vmgeAuVpBuCzakdqHk6yTaPWeicRx%2BaT9z3ckGq%2FcsNXx3wvVuU1nlDIRVmpYpKQHD%2FekpuXN20WaVQKi8U5fztWteZ%2FijXYyywuPaJ4s6DDVevdJG2BtI03bBSFdfE5XFUYZg9vnJHVDLJflzezcWJmgCFrFYVfWc%2BYZhp88v7sQJgG4%2BRTP9lgxt%2BxPdiYIZTT6pJTIifxNP0D4kp2Aw2MuzwQY6pgFUOh8QpbDsSjV99zw8WvSKyJiJBgdsIGe4uFnN5%2B3fbbGBaoq%2FYc3KAoRqY8tBTkSJlHqGJ9osXRIKpI8%2BQs4ig01Ep9N27UbjmicNWWeoEB5p%2FyUFzKkaOe4nPR1wFH1vnIXEX8tTK9igTHW%2FkpPE4GAkKMwIHeI%2BqfPWBIHjt7nbrmiAam2PMzYfmyT1eo36gZfEvAWRuB6J11tf57GWeL%2FHJNMd&X-Amz-Signature=2f9f479360eab56683b1fc894f245d6571436afafd47b125b079c26227b0e594&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNNSFYIZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrFkiWuTYSa4ghiGlaFrww2bJIG4LCY5YgotMPrf1AaAiA9wuMEgRhYYcJJuU0jSTKagjFOVrgtOh0kFyw8BnGmNiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIj2b%2F3t9Ikhd61bkKtwDs59EiuQk7neEXELVDy07X1ElFX4%2FHp4sEmw0if2eIonKwHrXrv%2BGGN4V6lkG7DkT7q33YutBxehbTgyOAZiRGwuBDIf3Fzh2JtKH4WiseX4TZPvNFx75AGfV4NhhDjcXoLmnmb%2FA4YBw9XAiIzb9%2FPCjMtyVLtJGM0Bm9LqFVP7jnAFQp7IN78lunV4w2%2FSeSrfzaDjBiG9pSPKKcAoCKbhe9uJWsCGQ%2BjYVEr16xO0RpKpU8NRugJL8SQGMjU8HkkF4sp6aa7aOoh7H%2FYSYzskOmml0wjEzKBXEjBOhscEqjl%2BCaILGfYl%2BB%2FABl9hFUm%2Fyd3zKFy9zb5hNAVKk8wAUvpENSUQ0d8ThIfVZD9pKAy%2FZKFS8HqzA0RO804DxHeCuvNjuDThe75ihoIhcVLJNkQ0JaKVB701fJ5vmgeAuVpBuCzakdqHk6yTaPWeicRx%2BaT9z3ckGq%2FcsNXx3wvVuU1nlDIRVmpYpKQHD%2FekpuXN20WaVQKi8U5fztWteZ%2FijXYyywuPaJ4s6DDVevdJG2BtI03bBSFdfE5XFUYZg9vnJHVDLJflzezcWJmgCFrFYVfWc%2BYZhp88v7sQJgG4%2BRTP9lgxt%2BxPdiYIZTT6pJTIifxNP0D4kp2Aw2MuzwQY6pgFUOh8QpbDsSjV99zw8WvSKyJiJBgdsIGe4uFnN5%2B3fbbGBaoq%2FYc3KAoRqY8tBTkSJlHqGJ9osXRIKpI8%2BQs4ig01Ep9N27UbjmicNWWeoEB5p%2FyUFzKkaOe4nPR1wFH1vnIXEX8tTK9igTHW%2FkpPE4GAkKMwIHeI%2BqfPWBIHjt7nbrmiAam2PMzYfmyT1eo36gZfEvAWRuB6J11tf57GWeL%2FHJNMd&X-Amz-Signature=252a8888a3deb6e94a34000ae1e2a3e36c9fc177ae6b5c1a5f220e066d15a480&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNNSFYIZ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrFkiWuTYSa4ghiGlaFrww2bJIG4LCY5YgotMPrf1AaAiA9wuMEgRhYYcJJuU0jSTKagjFOVrgtOh0kFyw8BnGmNiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIj2b%2F3t9Ikhd61bkKtwDs59EiuQk7neEXELVDy07X1ElFX4%2FHp4sEmw0if2eIonKwHrXrv%2BGGN4V6lkG7DkT7q33YutBxehbTgyOAZiRGwuBDIf3Fzh2JtKH4WiseX4TZPvNFx75AGfV4NhhDjcXoLmnmb%2FA4YBw9XAiIzb9%2FPCjMtyVLtJGM0Bm9LqFVP7jnAFQp7IN78lunV4w2%2FSeSrfzaDjBiG9pSPKKcAoCKbhe9uJWsCGQ%2BjYVEr16xO0RpKpU8NRugJL8SQGMjU8HkkF4sp6aa7aOoh7H%2FYSYzskOmml0wjEzKBXEjBOhscEqjl%2BCaILGfYl%2BB%2FABl9hFUm%2Fyd3zKFy9zb5hNAVKk8wAUvpENSUQ0d8ThIfVZD9pKAy%2FZKFS8HqzA0RO804DxHeCuvNjuDThe75ihoIhcVLJNkQ0JaKVB701fJ5vmgeAuVpBuCzakdqHk6yTaPWeicRx%2BaT9z3ckGq%2FcsNXx3wvVuU1nlDIRVmpYpKQHD%2FekpuXN20WaVQKi8U5fztWteZ%2FijXYyywuPaJ4s6DDVevdJG2BtI03bBSFdfE5XFUYZg9vnJHVDLJflzezcWJmgCFrFYVfWc%2BYZhp88v7sQJgG4%2BRTP9lgxt%2BxPdiYIZTT6pJTIifxNP0D4kp2Aw2MuzwQY6pgFUOh8QpbDsSjV99zw8WvSKyJiJBgdsIGe4uFnN5%2B3fbbGBaoq%2FYc3KAoRqY8tBTkSJlHqGJ9osXRIKpI8%2BQs4ig01Ep9N27UbjmicNWWeoEB5p%2FyUFzKkaOe4nPR1wFH1vnIXEX8tTK9igTHW%2FkpPE4GAkKMwIHeI%2BqfPWBIHjt7nbrmiAam2PMzYfmyT1eo36gZfEvAWRuB6J11tf57GWeL%2FHJNMd&X-Amz-Signature=8e281fa72f4f7bffe31dfac783b033d4ba86602280c700248e91469ead9e15a6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
