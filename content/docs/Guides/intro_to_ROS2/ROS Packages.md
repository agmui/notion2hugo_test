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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECR5K55%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCXJVCTG%2BL7oSYrLrbGn4aBdJk81CEEqTCwy0aB0qNtmgIhAJH50KmjdiASAXcqWaP7uIwPkPslbIiErkXBNcuGkDb8Kv8DCD8QABoMNjM3NDIzMTgzODA1Igylv07L7ac7Q%2B86CUcq3AMDUagY9IOc1V1Jqqgm2gBfU9GYPUT2hFnAxU812FKJNqt3tLm4plyzBAVE8CUgVO%2BmgPZaqY2M8yscNtCkfSOuXPNKFKu5lNO7iMYLIfeKzlN2MPunJ9ekZoGNjc9P07kRi6gKWTY86l41CIfHCtQ6DS1g%2BpC5tCqZl9M2QzN3%2FTSF6xNxCWDpTdr94%2FtbowQ13bmR6Mh4zZB8P2COcMk6vjt5VXeK4n3q729fe7RyHpKWEopE4%2BjMZuj8KvJeZqOlSnwQhiIpyFki1%2BWd6RSvPmOgKWR8qlPOkBGuxClmru4suytG2LSeIzcgn0BM5%2Bnzl19aNWOmlPAUhv6FjTzh6SVX%2FEN8hifNDFSRph2NRzvkN%2BNHNEVBO6cA%2FXjUUU%2ByQ6YXCH6%2F6Zp0BP59mXxLna5V%2BnG9FRTGfXdAeRglOgvcoCuooXl%2BXlLgcAVtBFzmcAewHB%2Bx825NpGCqEulEh4pYoA4jpr2TNLG%2FUEqpd%2FzSmgMq%2FLuaVKCPGP0Z8d9mYLHLCgfp4tbLs%2BU49Kt7EX2S78%2FEBG1QQ6TnoQk4rPjLhgd8taXlBHPZB%2B1Tlcj1j%2FwFhKMBBaMQf1AvOkVj3BhMJIZsnZTHDv6T5vivR7STFViYMC2pZcst8zCBzcC9BjqkAQMl%2FlcPLne3SAw1dlUKtk3oiMN319TvTqUAVbqxpr%2B%2FGh4euRxgDammADxCOJaQjS5B7rxebhv2bmf6AMWq41PAnpi3Am1nyaXbSQIlW%2F85JukmVZaEsHFCmnsOxKgF7tY3G4pCA3ZwmYrxf0RggU4Kg7awRC8VlbgSiyJXu13K9dpHLeHPbbjeI8%2BUdYAMat7qfyCQvhImiHYodydOBhlswaFq&X-Amz-Signature=c2fd34c4c7d665a1fc8477c7e9a63942fd941009c74052b9b44dcafeba2eca4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECR5K55%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCXJVCTG%2BL7oSYrLrbGn4aBdJk81CEEqTCwy0aB0qNtmgIhAJH50KmjdiASAXcqWaP7uIwPkPslbIiErkXBNcuGkDb8Kv8DCD8QABoMNjM3NDIzMTgzODA1Igylv07L7ac7Q%2B86CUcq3AMDUagY9IOc1V1Jqqgm2gBfU9GYPUT2hFnAxU812FKJNqt3tLm4plyzBAVE8CUgVO%2BmgPZaqY2M8yscNtCkfSOuXPNKFKu5lNO7iMYLIfeKzlN2MPunJ9ekZoGNjc9P07kRi6gKWTY86l41CIfHCtQ6DS1g%2BpC5tCqZl9M2QzN3%2FTSF6xNxCWDpTdr94%2FtbowQ13bmR6Mh4zZB8P2COcMk6vjt5VXeK4n3q729fe7RyHpKWEopE4%2BjMZuj8KvJeZqOlSnwQhiIpyFki1%2BWd6RSvPmOgKWR8qlPOkBGuxClmru4suytG2LSeIzcgn0BM5%2Bnzl19aNWOmlPAUhv6FjTzh6SVX%2FEN8hifNDFSRph2NRzvkN%2BNHNEVBO6cA%2FXjUUU%2ByQ6YXCH6%2F6Zp0BP59mXxLna5V%2BnG9FRTGfXdAeRglOgvcoCuooXl%2BXlLgcAVtBFzmcAewHB%2Bx825NpGCqEulEh4pYoA4jpr2TNLG%2FUEqpd%2FzSmgMq%2FLuaVKCPGP0Z8d9mYLHLCgfp4tbLs%2BU49Kt7EX2S78%2FEBG1QQ6TnoQk4rPjLhgd8taXlBHPZB%2B1Tlcj1j%2FwFhKMBBaMQf1AvOkVj3BhMJIZsnZTHDv6T5vivR7STFViYMC2pZcst8zCBzcC9BjqkAQMl%2FlcPLne3SAw1dlUKtk3oiMN319TvTqUAVbqxpr%2B%2FGh4euRxgDammADxCOJaQjS5B7rxebhv2bmf6AMWq41PAnpi3Am1nyaXbSQIlW%2F85JukmVZaEsHFCmnsOxKgF7tY3G4pCA3ZwmYrxf0RggU4Kg7awRC8VlbgSiyJXu13K9dpHLeHPbbjeI8%2BUdYAMat7qfyCQvhImiHYodydOBhlswaFq&X-Amz-Signature=e9cb3bc2b0ad0519420cba4dca58df59f822fc6f431d8aafd47d223cab4611aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECR5K55%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCXJVCTG%2BL7oSYrLrbGn4aBdJk81CEEqTCwy0aB0qNtmgIhAJH50KmjdiASAXcqWaP7uIwPkPslbIiErkXBNcuGkDb8Kv8DCD8QABoMNjM3NDIzMTgzODA1Igylv07L7ac7Q%2B86CUcq3AMDUagY9IOc1V1Jqqgm2gBfU9GYPUT2hFnAxU812FKJNqt3tLm4plyzBAVE8CUgVO%2BmgPZaqY2M8yscNtCkfSOuXPNKFKu5lNO7iMYLIfeKzlN2MPunJ9ekZoGNjc9P07kRi6gKWTY86l41CIfHCtQ6DS1g%2BpC5tCqZl9M2QzN3%2FTSF6xNxCWDpTdr94%2FtbowQ13bmR6Mh4zZB8P2COcMk6vjt5VXeK4n3q729fe7RyHpKWEopE4%2BjMZuj8KvJeZqOlSnwQhiIpyFki1%2BWd6RSvPmOgKWR8qlPOkBGuxClmru4suytG2LSeIzcgn0BM5%2Bnzl19aNWOmlPAUhv6FjTzh6SVX%2FEN8hifNDFSRph2NRzvkN%2BNHNEVBO6cA%2FXjUUU%2ByQ6YXCH6%2F6Zp0BP59mXxLna5V%2BnG9FRTGfXdAeRglOgvcoCuooXl%2BXlLgcAVtBFzmcAewHB%2Bx825NpGCqEulEh4pYoA4jpr2TNLG%2FUEqpd%2FzSmgMq%2FLuaVKCPGP0Z8d9mYLHLCgfp4tbLs%2BU49Kt7EX2S78%2FEBG1QQ6TnoQk4rPjLhgd8taXlBHPZB%2B1Tlcj1j%2FwFhKMBBaMQf1AvOkVj3BhMJIZsnZTHDv6T5vivR7STFViYMC2pZcst8zCBzcC9BjqkAQMl%2FlcPLne3SAw1dlUKtk3oiMN319TvTqUAVbqxpr%2B%2FGh4euRxgDammADxCOJaQjS5B7rxebhv2bmf6AMWq41PAnpi3Am1nyaXbSQIlW%2F85JukmVZaEsHFCmnsOxKgF7tY3G4pCA3ZwmYrxf0RggU4Kg7awRC8VlbgSiyJXu13K9dpHLeHPbbjeI8%2BUdYAMat7qfyCQvhImiHYodydOBhlswaFq&X-Amz-Signature=5958094206bb85df00c4daf05826b141222ad1c0292a76a71887bc692532b5b8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECR5K55%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCXJVCTG%2BL7oSYrLrbGn4aBdJk81CEEqTCwy0aB0qNtmgIhAJH50KmjdiASAXcqWaP7uIwPkPslbIiErkXBNcuGkDb8Kv8DCD8QABoMNjM3NDIzMTgzODA1Igylv07L7ac7Q%2B86CUcq3AMDUagY9IOc1V1Jqqgm2gBfU9GYPUT2hFnAxU812FKJNqt3tLm4plyzBAVE8CUgVO%2BmgPZaqY2M8yscNtCkfSOuXPNKFKu5lNO7iMYLIfeKzlN2MPunJ9ekZoGNjc9P07kRi6gKWTY86l41CIfHCtQ6DS1g%2BpC5tCqZl9M2QzN3%2FTSF6xNxCWDpTdr94%2FtbowQ13bmR6Mh4zZB8P2COcMk6vjt5VXeK4n3q729fe7RyHpKWEopE4%2BjMZuj8KvJeZqOlSnwQhiIpyFki1%2BWd6RSvPmOgKWR8qlPOkBGuxClmru4suytG2LSeIzcgn0BM5%2Bnzl19aNWOmlPAUhv6FjTzh6SVX%2FEN8hifNDFSRph2NRzvkN%2BNHNEVBO6cA%2FXjUUU%2ByQ6YXCH6%2F6Zp0BP59mXxLna5V%2BnG9FRTGfXdAeRglOgvcoCuooXl%2BXlLgcAVtBFzmcAewHB%2Bx825NpGCqEulEh4pYoA4jpr2TNLG%2FUEqpd%2FzSmgMq%2FLuaVKCPGP0Z8d9mYLHLCgfp4tbLs%2BU49Kt7EX2S78%2FEBG1QQ6TnoQk4rPjLhgd8taXlBHPZB%2B1Tlcj1j%2FwFhKMBBaMQf1AvOkVj3BhMJIZsnZTHDv6T5vivR7STFViYMC2pZcst8zCBzcC9BjqkAQMl%2FlcPLne3SAw1dlUKtk3oiMN319TvTqUAVbqxpr%2B%2FGh4euRxgDammADxCOJaQjS5B7rxebhv2bmf6AMWq41PAnpi3Am1nyaXbSQIlW%2F85JukmVZaEsHFCmnsOxKgF7tY3G4pCA3ZwmYrxf0RggU4Kg7awRC8VlbgSiyJXu13K9dpHLeHPbbjeI8%2BUdYAMat7qfyCQvhImiHYodydOBhlswaFq&X-Amz-Signature=0e63ff46e4bdf65a192112818bd34cffe9d0a3c7788347c8c3895cc84c867bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECR5K55%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCXJVCTG%2BL7oSYrLrbGn4aBdJk81CEEqTCwy0aB0qNtmgIhAJH50KmjdiASAXcqWaP7uIwPkPslbIiErkXBNcuGkDb8Kv8DCD8QABoMNjM3NDIzMTgzODA1Igylv07L7ac7Q%2B86CUcq3AMDUagY9IOc1V1Jqqgm2gBfU9GYPUT2hFnAxU812FKJNqt3tLm4plyzBAVE8CUgVO%2BmgPZaqY2M8yscNtCkfSOuXPNKFKu5lNO7iMYLIfeKzlN2MPunJ9ekZoGNjc9P07kRi6gKWTY86l41CIfHCtQ6DS1g%2BpC5tCqZl9M2QzN3%2FTSF6xNxCWDpTdr94%2FtbowQ13bmR6Mh4zZB8P2COcMk6vjt5VXeK4n3q729fe7RyHpKWEopE4%2BjMZuj8KvJeZqOlSnwQhiIpyFki1%2BWd6RSvPmOgKWR8qlPOkBGuxClmru4suytG2LSeIzcgn0BM5%2Bnzl19aNWOmlPAUhv6FjTzh6SVX%2FEN8hifNDFSRph2NRzvkN%2BNHNEVBO6cA%2FXjUUU%2ByQ6YXCH6%2F6Zp0BP59mXxLna5V%2BnG9FRTGfXdAeRglOgvcoCuooXl%2BXlLgcAVtBFzmcAewHB%2Bx825NpGCqEulEh4pYoA4jpr2TNLG%2FUEqpd%2FzSmgMq%2FLuaVKCPGP0Z8d9mYLHLCgfp4tbLs%2BU49Kt7EX2S78%2FEBG1QQ6TnoQk4rPjLhgd8taXlBHPZB%2B1Tlcj1j%2FwFhKMBBaMQf1AvOkVj3BhMJIZsnZTHDv6T5vivR7STFViYMC2pZcst8zCBzcC9BjqkAQMl%2FlcPLne3SAw1dlUKtk3oiMN319TvTqUAVbqxpr%2B%2FGh4euRxgDammADxCOJaQjS5B7rxebhv2bmf6AMWq41PAnpi3Am1nyaXbSQIlW%2F85JukmVZaEsHFCmnsOxKgF7tY3G4pCA3ZwmYrxf0RggU4Kg7awRC8VlbgSiyJXu13K9dpHLeHPbbjeI8%2BUdYAMat7qfyCQvhImiHYodydOBhlswaFq&X-Amz-Signature=87c650ad6d7a0ddf6a6061d2ef03a9940340ad2f9772e1831d90dc881bcbfab4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECR5K55%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCXJVCTG%2BL7oSYrLrbGn4aBdJk81CEEqTCwy0aB0qNtmgIhAJH50KmjdiASAXcqWaP7uIwPkPslbIiErkXBNcuGkDb8Kv8DCD8QABoMNjM3NDIzMTgzODA1Igylv07L7ac7Q%2B86CUcq3AMDUagY9IOc1V1Jqqgm2gBfU9GYPUT2hFnAxU812FKJNqt3tLm4plyzBAVE8CUgVO%2BmgPZaqY2M8yscNtCkfSOuXPNKFKu5lNO7iMYLIfeKzlN2MPunJ9ekZoGNjc9P07kRi6gKWTY86l41CIfHCtQ6DS1g%2BpC5tCqZl9M2QzN3%2FTSF6xNxCWDpTdr94%2FtbowQ13bmR6Mh4zZB8P2COcMk6vjt5VXeK4n3q729fe7RyHpKWEopE4%2BjMZuj8KvJeZqOlSnwQhiIpyFki1%2BWd6RSvPmOgKWR8qlPOkBGuxClmru4suytG2LSeIzcgn0BM5%2Bnzl19aNWOmlPAUhv6FjTzh6SVX%2FEN8hifNDFSRph2NRzvkN%2BNHNEVBO6cA%2FXjUUU%2ByQ6YXCH6%2F6Zp0BP59mXxLna5V%2BnG9FRTGfXdAeRglOgvcoCuooXl%2BXlLgcAVtBFzmcAewHB%2Bx825NpGCqEulEh4pYoA4jpr2TNLG%2FUEqpd%2FzSmgMq%2FLuaVKCPGP0Z8d9mYLHLCgfp4tbLs%2BU49Kt7EX2S78%2FEBG1QQ6TnoQk4rPjLhgd8taXlBHPZB%2B1Tlcj1j%2FwFhKMBBaMQf1AvOkVj3BhMJIZsnZTHDv6T5vivR7STFViYMC2pZcst8zCBzcC9BjqkAQMl%2FlcPLne3SAw1dlUKtk3oiMN319TvTqUAVbqxpr%2B%2FGh4euRxgDammADxCOJaQjS5B7rxebhv2bmf6AMWq41PAnpi3Am1nyaXbSQIlW%2F85JukmVZaEsHFCmnsOxKgF7tY3G4pCA3ZwmYrxf0RggU4Kg7awRC8VlbgSiyJXu13K9dpHLeHPbbjeI8%2BUdYAMat7qfyCQvhImiHYodydOBhlswaFq&X-Amz-Signature=25146bfd3660614684502b38e746342c49bf41ef62c0c68a5dd0c2700e2e7a77&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECR5K55%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCXJVCTG%2BL7oSYrLrbGn4aBdJk81CEEqTCwy0aB0qNtmgIhAJH50KmjdiASAXcqWaP7uIwPkPslbIiErkXBNcuGkDb8Kv8DCD8QABoMNjM3NDIzMTgzODA1Igylv07L7ac7Q%2B86CUcq3AMDUagY9IOc1V1Jqqgm2gBfU9GYPUT2hFnAxU812FKJNqt3tLm4plyzBAVE8CUgVO%2BmgPZaqY2M8yscNtCkfSOuXPNKFKu5lNO7iMYLIfeKzlN2MPunJ9ekZoGNjc9P07kRi6gKWTY86l41CIfHCtQ6DS1g%2BpC5tCqZl9M2QzN3%2FTSF6xNxCWDpTdr94%2FtbowQ13bmR6Mh4zZB8P2COcMk6vjt5VXeK4n3q729fe7RyHpKWEopE4%2BjMZuj8KvJeZqOlSnwQhiIpyFki1%2BWd6RSvPmOgKWR8qlPOkBGuxClmru4suytG2LSeIzcgn0BM5%2Bnzl19aNWOmlPAUhv6FjTzh6SVX%2FEN8hifNDFSRph2NRzvkN%2BNHNEVBO6cA%2FXjUUU%2ByQ6YXCH6%2F6Zp0BP59mXxLna5V%2BnG9FRTGfXdAeRglOgvcoCuooXl%2BXlLgcAVtBFzmcAewHB%2Bx825NpGCqEulEh4pYoA4jpr2TNLG%2FUEqpd%2FzSmgMq%2FLuaVKCPGP0Z8d9mYLHLCgfp4tbLs%2BU49Kt7EX2S78%2FEBG1QQ6TnoQk4rPjLhgd8taXlBHPZB%2B1Tlcj1j%2FwFhKMBBaMQf1AvOkVj3BhMJIZsnZTHDv6T5vivR7STFViYMC2pZcst8zCBzcC9BjqkAQMl%2FlcPLne3SAw1dlUKtk3oiMN319TvTqUAVbqxpr%2B%2FGh4euRxgDammADxCOJaQjS5B7rxebhv2bmf6AMWq41PAnpi3Am1nyaXbSQIlW%2F85JukmVZaEsHFCmnsOxKgF7tY3G4pCA3ZwmYrxf0RggU4Kg7awRC8VlbgSiyJXu13K9dpHLeHPbbjeI8%2BUdYAMat7qfyCQvhImiHYodydOBhlswaFq&X-Amz-Signature=600bc90fb6789a4f9dc01314a8931ad331ade79f1ecf664cf48b112eddd5174e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
