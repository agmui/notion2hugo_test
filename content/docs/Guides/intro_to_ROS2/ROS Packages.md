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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KXUM2DZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5arHMm68ZNH19OecQOyyDXuSCBwvYGc38J9u8eMYmhAiBweg0hO%2BkvbrPJxhlZ%2Fn1zazVEyfQVPX0HU%2Bl8zQesEir%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM6L5FbdEyjCtKlMv0KtwDtcnA0Ji9K5eXV%2FiaV3hniBRpztPD7iQwS%2FqZnMHvKIGIqfK2xu8yz0eqaOezndVG7EA1WoUACSc7eQQ7NOnc18qBizW6lURJT95%2FgLm3DVLkD2uLmy9VJn6js1DsiMbhy0HHpqTjh6YKntj16uAWcHayHk4%2BNO3DCn4YHcxuVVINzkliv2PPpG%2BZXSUxbYE6oEjlUmyW%2BadZCPuy57RPzFuQBu5lPyA6IqEpejBCnyuXH%2FChRmjwke2vvD%2BfZJJUN%2BOuEDJCzEtPg5afhNLpPPzsiaFWrUeiNrbreho%2FIVDJZavs9S%2BSYutJ2YhqcU4xp1sXw%2Bor0Kp7%2B32cP2bKHEJ%2FCO23vJ1O7bNq%2FLJam08H8FyALNkMwZG%2FxsgpQ%2FsmCpDUnnCKOAQgPUbjyvKINNFkTTFIQ%2FbCtDR536%2Bd2A1XIdsOz24h10B6vWXfybLr3QBbANLfY4BTZx0NbZIwuclcF7FeUHxAo56s%2F%2BQ3tmzlvFd3I%2B3ckTltIV2Q6F%2FPr20zd1I0nN5mKbJCNasqXepRjB7Yrj0OnevgucdGJ%2Fpqm0XQeLdQ9trVbVns6WhgBw%2FntS2suOj6Whx595F5%2FTqRoqjfqnDgfV9kgxOhT%2BwHtGLiZ%2BChCYqi2eMwxPLsvQY6pgEafXcAaPF2Jyze%2BgcgJZ3VWY9wzolNCYURCmRkJFZZywzr9Yl8QJ6oMDi2SM2DELPaTapP8%2FLVuzBYvtqX50ASiGHXl%2BM9u6BKnGESBumN1GGA1A24HdK4tFlwABrgnY%2Ftb95q02Lx0gkIk41kU2RbzuKwgbfT1hGAFonYCJ0CgI5q3jCHFOXeGnDpqHvxlGkuBom3rf51TBgOsQ%2Bd03SrFdr%2BqnWO&X-Amz-Signature=846b68b5522d2267fde8a5853ccf0df3c7e5cfbd9160c2b091d077bdb9870668&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KXUM2DZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5arHMm68ZNH19OecQOyyDXuSCBwvYGc38J9u8eMYmhAiBweg0hO%2BkvbrPJxhlZ%2Fn1zazVEyfQVPX0HU%2Bl8zQesEir%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM6L5FbdEyjCtKlMv0KtwDtcnA0Ji9K5eXV%2FiaV3hniBRpztPD7iQwS%2FqZnMHvKIGIqfK2xu8yz0eqaOezndVG7EA1WoUACSc7eQQ7NOnc18qBizW6lURJT95%2FgLm3DVLkD2uLmy9VJn6js1DsiMbhy0HHpqTjh6YKntj16uAWcHayHk4%2BNO3DCn4YHcxuVVINzkliv2PPpG%2BZXSUxbYE6oEjlUmyW%2BadZCPuy57RPzFuQBu5lPyA6IqEpejBCnyuXH%2FChRmjwke2vvD%2BfZJJUN%2BOuEDJCzEtPg5afhNLpPPzsiaFWrUeiNrbreho%2FIVDJZavs9S%2BSYutJ2YhqcU4xp1sXw%2Bor0Kp7%2B32cP2bKHEJ%2FCO23vJ1O7bNq%2FLJam08H8FyALNkMwZG%2FxsgpQ%2FsmCpDUnnCKOAQgPUbjyvKINNFkTTFIQ%2FbCtDR536%2Bd2A1XIdsOz24h10B6vWXfybLr3QBbANLfY4BTZx0NbZIwuclcF7FeUHxAo56s%2F%2BQ3tmzlvFd3I%2B3ckTltIV2Q6F%2FPr20zd1I0nN5mKbJCNasqXepRjB7Yrj0OnevgucdGJ%2Fpqm0XQeLdQ9trVbVns6WhgBw%2FntS2suOj6Whx595F5%2FTqRoqjfqnDgfV9kgxOhT%2BwHtGLiZ%2BChCYqi2eMwxPLsvQY6pgEafXcAaPF2Jyze%2BgcgJZ3VWY9wzolNCYURCmRkJFZZywzr9Yl8QJ6oMDi2SM2DELPaTapP8%2FLVuzBYvtqX50ASiGHXl%2BM9u6BKnGESBumN1GGA1A24HdK4tFlwABrgnY%2Ftb95q02Lx0gkIk41kU2RbzuKwgbfT1hGAFonYCJ0CgI5q3jCHFOXeGnDpqHvxlGkuBom3rf51TBgOsQ%2Bd03SrFdr%2BqnWO&X-Amz-Signature=cf7c3570525960f45fcf94cc2b9dfd468b0c6771c49b3c4c582097344e2d06e6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KXUM2DZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5arHMm68ZNH19OecQOyyDXuSCBwvYGc38J9u8eMYmhAiBweg0hO%2BkvbrPJxhlZ%2Fn1zazVEyfQVPX0HU%2Bl8zQesEir%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM6L5FbdEyjCtKlMv0KtwDtcnA0Ji9K5eXV%2FiaV3hniBRpztPD7iQwS%2FqZnMHvKIGIqfK2xu8yz0eqaOezndVG7EA1WoUACSc7eQQ7NOnc18qBizW6lURJT95%2FgLm3DVLkD2uLmy9VJn6js1DsiMbhy0HHpqTjh6YKntj16uAWcHayHk4%2BNO3DCn4YHcxuVVINzkliv2PPpG%2BZXSUxbYE6oEjlUmyW%2BadZCPuy57RPzFuQBu5lPyA6IqEpejBCnyuXH%2FChRmjwke2vvD%2BfZJJUN%2BOuEDJCzEtPg5afhNLpPPzsiaFWrUeiNrbreho%2FIVDJZavs9S%2BSYutJ2YhqcU4xp1sXw%2Bor0Kp7%2B32cP2bKHEJ%2FCO23vJ1O7bNq%2FLJam08H8FyALNkMwZG%2FxsgpQ%2FsmCpDUnnCKOAQgPUbjyvKINNFkTTFIQ%2FbCtDR536%2Bd2A1XIdsOz24h10B6vWXfybLr3QBbANLfY4BTZx0NbZIwuclcF7FeUHxAo56s%2F%2BQ3tmzlvFd3I%2B3ckTltIV2Q6F%2FPr20zd1I0nN5mKbJCNasqXepRjB7Yrj0OnevgucdGJ%2Fpqm0XQeLdQ9trVbVns6WhgBw%2FntS2suOj6Whx595F5%2FTqRoqjfqnDgfV9kgxOhT%2BwHtGLiZ%2BChCYqi2eMwxPLsvQY6pgEafXcAaPF2Jyze%2BgcgJZ3VWY9wzolNCYURCmRkJFZZywzr9Yl8QJ6oMDi2SM2DELPaTapP8%2FLVuzBYvtqX50ASiGHXl%2BM9u6BKnGESBumN1GGA1A24HdK4tFlwABrgnY%2Ftb95q02Lx0gkIk41kU2RbzuKwgbfT1hGAFonYCJ0CgI5q3jCHFOXeGnDpqHvxlGkuBom3rf51TBgOsQ%2Bd03SrFdr%2BqnWO&X-Amz-Signature=65cb739d24d789d0fcee188da8c885857fbfec2e40d68d7f91fba2ef004aae7c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KXUM2DZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5arHMm68ZNH19OecQOyyDXuSCBwvYGc38J9u8eMYmhAiBweg0hO%2BkvbrPJxhlZ%2Fn1zazVEyfQVPX0HU%2Bl8zQesEir%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM6L5FbdEyjCtKlMv0KtwDtcnA0Ji9K5eXV%2FiaV3hniBRpztPD7iQwS%2FqZnMHvKIGIqfK2xu8yz0eqaOezndVG7EA1WoUACSc7eQQ7NOnc18qBizW6lURJT95%2FgLm3DVLkD2uLmy9VJn6js1DsiMbhy0HHpqTjh6YKntj16uAWcHayHk4%2BNO3DCn4YHcxuVVINzkliv2PPpG%2BZXSUxbYE6oEjlUmyW%2BadZCPuy57RPzFuQBu5lPyA6IqEpejBCnyuXH%2FChRmjwke2vvD%2BfZJJUN%2BOuEDJCzEtPg5afhNLpPPzsiaFWrUeiNrbreho%2FIVDJZavs9S%2BSYutJ2YhqcU4xp1sXw%2Bor0Kp7%2B32cP2bKHEJ%2FCO23vJ1O7bNq%2FLJam08H8FyALNkMwZG%2FxsgpQ%2FsmCpDUnnCKOAQgPUbjyvKINNFkTTFIQ%2FbCtDR536%2Bd2A1XIdsOz24h10B6vWXfybLr3QBbANLfY4BTZx0NbZIwuclcF7FeUHxAo56s%2F%2BQ3tmzlvFd3I%2B3ckTltIV2Q6F%2FPr20zd1I0nN5mKbJCNasqXepRjB7Yrj0OnevgucdGJ%2Fpqm0XQeLdQ9trVbVns6WhgBw%2FntS2suOj6Whx595F5%2FTqRoqjfqnDgfV9kgxOhT%2BwHtGLiZ%2BChCYqi2eMwxPLsvQY6pgEafXcAaPF2Jyze%2BgcgJZ3VWY9wzolNCYURCmRkJFZZywzr9Yl8QJ6oMDi2SM2DELPaTapP8%2FLVuzBYvtqX50ASiGHXl%2BM9u6BKnGESBumN1GGA1A24HdK4tFlwABrgnY%2Ftb95q02Lx0gkIk41kU2RbzuKwgbfT1hGAFonYCJ0CgI5q3jCHFOXeGnDpqHvxlGkuBom3rf51TBgOsQ%2Bd03SrFdr%2BqnWO&X-Amz-Signature=87c9512e4760311c6d936c240a5dcd464a65d84e5b5d5aa2a829713461244991&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KXUM2DZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5arHMm68ZNH19OecQOyyDXuSCBwvYGc38J9u8eMYmhAiBweg0hO%2BkvbrPJxhlZ%2Fn1zazVEyfQVPX0HU%2Bl8zQesEir%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM6L5FbdEyjCtKlMv0KtwDtcnA0Ji9K5eXV%2FiaV3hniBRpztPD7iQwS%2FqZnMHvKIGIqfK2xu8yz0eqaOezndVG7EA1WoUACSc7eQQ7NOnc18qBizW6lURJT95%2FgLm3DVLkD2uLmy9VJn6js1DsiMbhy0HHpqTjh6YKntj16uAWcHayHk4%2BNO3DCn4YHcxuVVINzkliv2PPpG%2BZXSUxbYE6oEjlUmyW%2BadZCPuy57RPzFuQBu5lPyA6IqEpejBCnyuXH%2FChRmjwke2vvD%2BfZJJUN%2BOuEDJCzEtPg5afhNLpPPzsiaFWrUeiNrbreho%2FIVDJZavs9S%2BSYutJ2YhqcU4xp1sXw%2Bor0Kp7%2B32cP2bKHEJ%2FCO23vJ1O7bNq%2FLJam08H8FyALNkMwZG%2FxsgpQ%2FsmCpDUnnCKOAQgPUbjyvKINNFkTTFIQ%2FbCtDR536%2Bd2A1XIdsOz24h10B6vWXfybLr3QBbANLfY4BTZx0NbZIwuclcF7FeUHxAo56s%2F%2BQ3tmzlvFd3I%2B3ckTltIV2Q6F%2FPr20zd1I0nN5mKbJCNasqXepRjB7Yrj0OnevgucdGJ%2Fpqm0XQeLdQ9trVbVns6WhgBw%2FntS2suOj6Whx595F5%2FTqRoqjfqnDgfV9kgxOhT%2BwHtGLiZ%2BChCYqi2eMwxPLsvQY6pgEafXcAaPF2Jyze%2BgcgJZ3VWY9wzolNCYURCmRkJFZZywzr9Yl8QJ6oMDi2SM2DELPaTapP8%2FLVuzBYvtqX50ASiGHXl%2BM9u6BKnGESBumN1GGA1A24HdK4tFlwABrgnY%2Ftb95q02Lx0gkIk41kU2RbzuKwgbfT1hGAFonYCJ0CgI5q3jCHFOXeGnDpqHvxlGkuBom3rf51TBgOsQ%2Bd03SrFdr%2BqnWO&X-Amz-Signature=942a30b9044048afed37e080004913d5a2d726cae20825caf291bebc5425a39e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KXUM2DZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5arHMm68ZNH19OecQOyyDXuSCBwvYGc38J9u8eMYmhAiBweg0hO%2BkvbrPJxhlZ%2Fn1zazVEyfQVPX0HU%2Bl8zQesEir%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM6L5FbdEyjCtKlMv0KtwDtcnA0Ji9K5eXV%2FiaV3hniBRpztPD7iQwS%2FqZnMHvKIGIqfK2xu8yz0eqaOezndVG7EA1WoUACSc7eQQ7NOnc18qBizW6lURJT95%2FgLm3DVLkD2uLmy9VJn6js1DsiMbhy0HHpqTjh6YKntj16uAWcHayHk4%2BNO3DCn4YHcxuVVINzkliv2PPpG%2BZXSUxbYE6oEjlUmyW%2BadZCPuy57RPzFuQBu5lPyA6IqEpejBCnyuXH%2FChRmjwke2vvD%2BfZJJUN%2BOuEDJCzEtPg5afhNLpPPzsiaFWrUeiNrbreho%2FIVDJZavs9S%2BSYutJ2YhqcU4xp1sXw%2Bor0Kp7%2B32cP2bKHEJ%2FCO23vJ1O7bNq%2FLJam08H8FyALNkMwZG%2FxsgpQ%2FsmCpDUnnCKOAQgPUbjyvKINNFkTTFIQ%2FbCtDR536%2Bd2A1XIdsOz24h10B6vWXfybLr3QBbANLfY4BTZx0NbZIwuclcF7FeUHxAo56s%2F%2BQ3tmzlvFd3I%2B3ckTltIV2Q6F%2FPr20zd1I0nN5mKbJCNasqXepRjB7Yrj0OnevgucdGJ%2Fpqm0XQeLdQ9trVbVns6WhgBw%2FntS2suOj6Whx595F5%2FTqRoqjfqnDgfV9kgxOhT%2BwHtGLiZ%2BChCYqi2eMwxPLsvQY6pgEafXcAaPF2Jyze%2BgcgJZ3VWY9wzolNCYURCmRkJFZZywzr9Yl8QJ6oMDi2SM2DELPaTapP8%2FLVuzBYvtqX50ASiGHXl%2BM9u6BKnGESBumN1GGA1A24HdK4tFlwABrgnY%2Ftb95q02Lx0gkIk41kU2RbzuKwgbfT1hGAFonYCJ0CgI5q3jCHFOXeGnDpqHvxlGkuBom3rf51TBgOsQ%2Bd03SrFdr%2BqnWO&X-Amz-Signature=58ac9b0c1b9379d1af132f6eebc7fec20b494d9093d8b39415edd72167613021&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KXUM2DZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5arHMm68ZNH19OecQOyyDXuSCBwvYGc38J9u8eMYmhAiBweg0hO%2BkvbrPJxhlZ%2Fn1zazVEyfQVPX0HU%2Bl8zQesEir%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM6L5FbdEyjCtKlMv0KtwDtcnA0Ji9K5eXV%2FiaV3hniBRpztPD7iQwS%2FqZnMHvKIGIqfK2xu8yz0eqaOezndVG7EA1WoUACSc7eQQ7NOnc18qBizW6lURJT95%2FgLm3DVLkD2uLmy9VJn6js1DsiMbhy0HHpqTjh6YKntj16uAWcHayHk4%2BNO3DCn4YHcxuVVINzkliv2PPpG%2BZXSUxbYE6oEjlUmyW%2BadZCPuy57RPzFuQBu5lPyA6IqEpejBCnyuXH%2FChRmjwke2vvD%2BfZJJUN%2BOuEDJCzEtPg5afhNLpPPzsiaFWrUeiNrbreho%2FIVDJZavs9S%2BSYutJ2YhqcU4xp1sXw%2Bor0Kp7%2B32cP2bKHEJ%2FCO23vJ1O7bNq%2FLJam08H8FyALNkMwZG%2FxsgpQ%2FsmCpDUnnCKOAQgPUbjyvKINNFkTTFIQ%2FbCtDR536%2Bd2A1XIdsOz24h10B6vWXfybLr3QBbANLfY4BTZx0NbZIwuclcF7FeUHxAo56s%2F%2BQ3tmzlvFd3I%2B3ckTltIV2Q6F%2FPr20zd1I0nN5mKbJCNasqXepRjB7Yrj0OnevgucdGJ%2Fpqm0XQeLdQ9trVbVns6WhgBw%2FntS2suOj6Whx595F5%2FTqRoqjfqnDgfV9kgxOhT%2BwHtGLiZ%2BChCYqi2eMwxPLsvQY6pgEafXcAaPF2Jyze%2BgcgJZ3VWY9wzolNCYURCmRkJFZZywzr9Yl8QJ6oMDi2SM2DELPaTapP8%2FLVuzBYvtqX50ASiGHXl%2BM9u6BKnGESBumN1GGA1A24HdK4tFlwABrgnY%2Ftb95q02Lx0gkIk41kU2RbzuKwgbfT1hGAFonYCJ0CgI5q3jCHFOXeGnDpqHvxlGkuBom3rf51TBgOsQ%2Bd03SrFdr%2BqnWO&X-Amz-Signature=1bbc8afdf62ca86b8fd9e0d86a01ac8c8a2b869ec95c25f3f6cf129113a443eb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
