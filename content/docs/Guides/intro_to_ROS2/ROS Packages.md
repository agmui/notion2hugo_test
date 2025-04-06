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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI3IB2R%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHHmgxojhvTFFGPnkOkaAwOIptzVkgkN8KDaGo7xiM2gIhAOSRGiA9oDRv5cWjkANkO1gRd41B9xiZgwH%2BtsQZE3BWKv8DCEIQABoMNjM3NDIzMTgzODA1IgwxpLvSlOkXTRjMsN0q3AOmzpDrAchY2AwwRLbRoaHthN4jk%2F1tLYS0VT0SRiYTgwYCLE5majiwmZgWJsdJz7jKRZGD18qq4GGuXZ3l%2BqI2HPm5sdqStkiRR%2BeXXSPkP%2F1qqA8eCfvzKJeTDr4H63Zv5y%2BGleeZ6fgshBsvYGDi9TQR6lNZLY9syjocJXhjrRSmOqzppupJmSweuqsMbnqVX68GyjM0ZEMhzr6%2Bn04YirXhJv3vf4hHn6QAfsZDOTXLmFimkUg9q3fe00oqx%2BKJm49uqiwHRws4DCfQj%2Bx29iTCAuSL0fKpIorpl7vXp04DHmCR9bdPOQFzVdBHSvzcjAhzWBtpjCtA5RxOzT0cGoWcajteY9d2onFBA6Yzyf3G7C2u3n7eyl4F%2Bb6JH4RhqAs%2FOMCMNloI%2BVqdvW%2BigBrz1%2BZqjaCpYJK4LZVaroZiHPmAvalThiJTNaoV%2BJOzVeOwd1JpYGWJTYnKCaDAPZvzAp%2F%2FXSY0zFesDpdOwlCd5Wi1Q7MvvvwfNaVd6yWrVQDPvtInsrkCgwyturP4fq97aOBjlCT51jBPqOOnO2CcP%2B4NXqi65R4UVDTlBGKphXc%2Bd3Bskd0eVXWxrEOBx8PST8e5dIpy9BBBJyBd3nGfNtiF9HnmsRZdiDCh%2F8i%2FBjqkAQgarVMc7qEsQhePhZ5s0JoqKnl0VBx9edIaBpiFv3u2JXsbF4UAc4g%2Bt%2FKINAqTiuNaEpjD5814B%2FmzlMjyWCSFr%2B7g4H%2BbTg1HBm3A8bWyRMbhYazgyuVR2wnTiO4u94drichXlJ11ThV3nWCCyJFJOuZVu6HTSEEhLCC91mTii%2Fs3c1Nelh%2FsKPj9CO8GwZ8eYGYersK6NctGbchA%2Fra9cK7B&X-Amz-Signature=0a911b4906312772edef383c8827bb7b7f352276682a5cf4d4a3278c6262c713&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI3IB2R%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHHmgxojhvTFFGPnkOkaAwOIptzVkgkN8KDaGo7xiM2gIhAOSRGiA9oDRv5cWjkANkO1gRd41B9xiZgwH%2BtsQZE3BWKv8DCEIQABoMNjM3NDIzMTgzODA1IgwxpLvSlOkXTRjMsN0q3AOmzpDrAchY2AwwRLbRoaHthN4jk%2F1tLYS0VT0SRiYTgwYCLE5majiwmZgWJsdJz7jKRZGD18qq4GGuXZ3l%2BqI2HPm5sdqStkiRR%2BeXXSPkP%2F1qqA8eCfvzKJeTDr4H63Zv5y%2BGleeZ6fgshBsvYGDi9TQR6lNZLY9syjocJXhjrRSmOqzppupJmSweuqsMbnqVX68GyjM0ZEMhzr6%2Bn04YirXhJv3vf4hHn6QAfsZDOTXLmFimkUg9q3fe00oqx%2BKJm49uqiwHRws4DCfQj%2Bx29iTCAuSL0fKpIorpl7vXp04DHmCR9bdPOQFzVdBHSvzcjAhzWBtpjCtA5RxOzT0cGoWcajteY9d2onFBA6Yzyf3G7C2u3n7eyl4F%2Bb6JH4RhqAs%2FOMCMNloI%2BVqdvW%2BigBrz1%2BZqjaCpYJK4LZVaroZiHPmAvalThiJTNaoV%2BJOzVeOwd1JpYGWJTYnKCaDAPZvzAp%2F%2FXSY0zFesDpdOwlCd5Wi1Q7MvvvwfNaVd6yWrVQDPvtInsrkCgwyturP4fq97aOBjlCT51jBPqOOnO2CcP%2B4NXqi65R4UVDTlBGKphXc%2Bd3Bskd0eVXWxrEOBx8PST8e5dIpy9BBBJyBd3nGfNtiF9HnmsRZdiDCh%2F8i%2FBjqkAQgarVMc7qEsQhePhZ5s0JoqKnl0VBx9edIaBpiFv3u2JXsbF4UAc4g%2Bt%2FKINAqTiuNaEpjD5814B%2FmzlMjyWCSFr%2B7g4H%2BbTg1HBm3A8bWyRMbhYazgyuVR2wnTiO4u94drichXlJ11ThV3nWCCyJFJOuZVu6HTSEEhLCC91mTii%2Fs3c1Nelh%2FsKPj9CO8GwZ8eYGYersK6NctGbchA%2Fra9cK7B&X-Amz-Signature=e1d593fb57d8201c89755b784a5fccc70fbb2f2ef5bec06303abff263e8432cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI3IB2R%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHHmgxojhvTFFGPnkOkaAwOIptzVkgkN8KDaGo7xiM2gIhAOSRGiA9oDRv5cWjkANkO1gRd41B9xiZgwH%2BtsQZE3BWKv8DCEIQABoMNjM3NDIzMTgzODA1IgwxpLvSlOkXTRjMsN0q3AOmzpDrAchY2AwwRLbRoaHthN4jk%2F1tLYS0VT0SRiYTgwYCLE5majiwmZgWJsdJz7jKRZGD18qq4GGuXZ3l%2BqI2HPm5sdqStkiRR%2BeXXSPkP%2F1qqA8eCfvzKJeTDr4H63Zv5y%2BGleeZ6fgshBsvYGDi9TQR6lNZLY9syjocJXhjrRSmOqzppupJmSweuqsMbnqVX68GyjM0ZEMhzr6%2Bn04YirXhJv3vf4hHn6QAfsZDOTXLmFimkUg9q3fe00oqx%2BKJm49uqiwHRws4DCfQj%2Bx29iTCAuSL0fKpIorpl7vXp04DHmCR9bdPOQFzVdBHSvzcjAhzWBtpjCtA5RxOzT0cGoWcajteY9d2onFBA6Yzyf3G7C2u3n7eyl4F%2Bb6JH4RhqAs%2FOMCMNloI%2BVqdvW%2BigBrz1%2BZqjaCpYJK4LZVaroZiHPmAvalThiJTNaoV%2BJOzVeOwd1JpYGWJTYnKCaDAPZvzAp%2F%2FXSY0zFesDpdOwlCd5Wi1Q7MvvvwfNaVd6yWrVQDPvtInsrkCgwyturP4fq97aOBjlCT51jBPqOOnO2CcP%2B4NXqi65R4UVDTlBGKphXc%2Bd3Bskd0eVXWxrEOBx8PST8e5dIpy9BBBJyBd3nGfNtiF9HnmsRZdiDCh%2F8i%2FBjqkAQgarVMc7qEsQhePhZ5s0JoqKnl0VBx9edIaBpiFv3u2JXsbF4UAc4g%2Bt%2FKINAqTiuNaEpjD5814B%2FmzlMjyWCSFr%2B7g4H%2BbTg1HBm3A8bWyRMbhYazgyuVR2wnTiO4u94drichXlJ11ThV3nWCCyJFJOuZVu6HTSEEhLCC91mTii%2Fs3c1Nelh%2FsKPj9CO8GwZ8eYGYersK6NctGbchA%2Fra9cK7B&X-Amz-Signature=c6a1c85b1f541797e9c79f67776adcea7ba177ac4f1083442467377cf1c73076&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI3IB2R%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHHmgxojhvTFFGPnkOkaAwOIptzVkgkN8KDaGo7xiM2gIhAOSRGiA9oDRv5cWjkANkO1gRd41B9xiZgwH%2BtsQZE3BWKv8DCEIQABoMNjM3NDIzMTgzODA1IgwxpLvSlOkXTRjMsN0q3AOmzpDrAchY2AwwRLbRoaHthN4jk%2F1tLYS0VT0SRiYTgwYCLE5majiwmZgWJsdJz7jKRZGD18qq4GGuXZ3l%2BqI2HPm5sdqStkiRR%2BeXXSPkP%2F1qqA8eCfvzKJeTDr4H63Zv5y%2BGleeZ6fgshBsvYGDi9TQR6lNZLY9syjocJXhjrRSmOqzppupJmSweuqsMbnqVX68GyjM0ZEMhzr6%2Bn04YirXhJv3vf4hHn6QAfsZDOTXLmFimkUg9q3fe00oqx%2BKJm49uqiwHRws4DCfQj%2Bx29iTCAuSL0fKpIorpl7vXp04DHmCR9bdPOQFzVdBHSvzcjAhzWBtpjCtA5RxOzT0cGoWcajteY9d2onFBA6Yzyf3G7C2u3n7eyl4F%2Bb6JH4RhqAs%2FOMCMNloI%2BVqdvW%2BigBrz1%2BZqjaCpYJK4LZVaroZiHPmAvalThiJTNaoV%2BJOzVeOwd1JpYGWJTYnKCaDAPZvzAp%2F%2FXSY0zFesDpdOwlCd5Wi1Q7MvvvwfNaVd6yWrVQDPvtInsrkCgwyturP4fq97aOBjlCT51jBPqOOnO2CcP%2B4NXqi65R4UVDTlBGKphXc%2Bd3Bskd0eVXWxrEOBx8PST8e5dIpy9BBBJyBd3nGfNtiF9HnmsRZdiDCh%2F8i%2FBjqkAQgarVMc7qEsQhePhZ5s0JoqKnl0VBx9edIaBpiFv3u2JXsbF4UAc4g%2Bt%2FKINAqTiuNaEpjD5814B%2FmzlMjyWCSFr%2B7g4H%2BbTg1HBm3A8bWyRMbhYazgyuVR2wnTiO4u94drichXlJ11ThV3nWCCyJFJOuZVu6HTSEEhLCC91mTii%2Fs3c1Nelh%2FsKPj9CO8GwZ8eYGYersK6NctGbchA%2Fra9cK7B&X-Amz-Signature=0fc8f3ed0b72388dc58cebd324e41d96f2ad9e910f46169485749a69fe4597f3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI3IB2R%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHHmgxojhvTFFGPnkOkaAwOIptzVkgkN8KDaGo7xiM2gIhAOSRGiA9oDRv5cWjkANkO1gRd41B9xiZgwH%2BtsQZE3BWKv8DCEIQABoMNjM3NDIzMTgzODA1IgwxpLvSlOkXTRjMsN0q3AOmzpDrAchY2AwwRLbRoaHthN4jk%2F1tLYS0VT0SRiYTgwYCLE5majiwmZgWJsdJz7jKRZGD18qq4GGuXZ3l%2BqI2HPm5sdqStkiRR%2BeXXSPkP%2F1qqA8eCfvzKJeTDr4H63Zv5y%2BGleeZ6fgshBsvYGDi9TQR6lNZLY9syjocJXhjrRSmOqzppupJmSweuqsMbnqVX68GyjM0ZEMhzr6%2Bn04YirXhJv3vf4hHn6QAfsZDOTXLmFimkUg9q3fe00oqx%2BKJm49uqiwHRws4DCfQj%2Bx29iTCAuSL0fKpIorpl7vXp04DHmCR9bdPOQFzVdBHSvzcjAhzWBtpjCtA5RxOzT0cGoWcajteY9d2onFBA6Yzyf3G7C2u3n7eyl4F%2Bb6JH4RhqAs%2FOMCMNloI%2BVqdvW%2BigBrz1%2BZqjaCpYJK4LZVaroZiHPmAvalThiJTNaoV%2BJOzVeOwd1JpYGWJTYnKCaDAPZvzAp%2F%2FXSY0zFesDpdOwlCd5Wi1Q7MvvvwfNaVd6yWrVQDPvtInsrkCgwyturP4fq97aOBjlCT51jBPqOOnO2CcP%2B4NXqi65R4UVDTlBGKphXc%2Bd3Bskd0eVXWxrEOBx8PST8e5dIpy9BBBJyBd3nGfNtiF9HnmsRZdiDCh%2F8i%2FBjqkAQgarVMc7qEsQhePhZ5s0JoqKnl0VBx9edIaBpiFv3u2JXsbF4UAc4g%2Bt%2FKINAqTiuNaEpjD5814B%2FmzlMjyWCSFr%2B7g4H%2BbTg1HBm3A8bWyRMbhYazgyuVR2wnTiO4u94drichXlJ11ThV3nWCCyJFJOuZVu6HTSEEhLCC91mTii%2Fs3c1Nelh%2FsKPj9CO8GwZ8eYGYersK6NctGbchA%2Fra9cK7B&X-Amz-Signature=23d6597dd67af56155d85a7c28d3eeb57cc899626a03641f8c6c7c95b01406d9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI3IB2R%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHHmgxojhvTFFGPnkOkaAwOIptzVkgkN8KDaGo7xiM2gIhAOSRGiA9oDRv5cWjkANkO1gRd41B9xiZgwH%2BtsQZE3BWKv8DCEIQABoMNjM3NDIzMTgzODA1IgwxpLvSlOkXTRjMsN0q3AOmzpDrAchY2AwwRLbRoaHthN4jk%2F1tLYS0VT0SRiYTgwYCLE5majiwmZgWJsdJz7jKRZGD18qq4GGuXZ3l%2BqI2HPm5sdqStkiRR%2BeXXSPkP%2F1qqA8eCfvzKJeTDr4H63Zv5y%2BGleeZ6fgshBsvYGDi9TQR6lNZLY9syjocJXhjrRSmOqzppupJmSweuqsMbnqVX68GyjM0ZEMhzr6%2Bn04YirXhJv3vf4hHn6QAfsZDOTXLmFimkUg9q3fe00oqx%2BKJm49uqiwHRws4DCfQj%2Bx29iTCAuSL0fKpIorpl7vXp04DHmCR9bdPOQFzVdBHSvzcjAhzWBtpjCtA5RxOzT0cGoWcajteY9d2onFBA6Yzyf3G7C2u3n7eyl4F%2Bb6JH4RhqAs%2FOMCMNloI%2BVqdvW%2BigBrz1%2BZqjaCpYJK4LZVaroZiHPmAvalThiJTNaoV%2BJOzVeOwd1JpYGWJTYnKCaDAPZvzAp%2F%2FXSY0zFesDpdOwlCd5Wi1Q7MvvvwfNaVd6yWrVQDPvtInsrkCgwyturP4fq97aOBjlCT51jBPqOOnO2CcP%2B4NXqi65R4UVDTlBGKphXc%2Bd3Bskd0eVXWxrEOBx8PST8e5dIpy9BBBJyBd3nGfNtiF9HnmsRZdiDCh%2F8i%2FBjqkAQgarVMc7qEsQhePhZ5s0JoqKnl0VBx9edIaBpiFv3u2JXsbF4UAc4g%2Bt%2FKINAqTiuNaEpjD5814B%2FmzlMjyWCSFr%2B7g4H%2BbTg1HBm3A8bWyRMbhYazgyuVR2wnTiO4u94drichXlJ11ThV3nWCCyJFJOuZVu6HTSEEhLCC91mTii%2Fs3c1Nelh%2FsKPj9CO8GwZ8eYGYersK6NctGbchA%2Fra9cK7B&X-Amz-Signature=fe1040e1c0c603da5456a841ac3196fef87367b345c1414fd832ed1d5803263f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI3IB2R%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHHmgxojhvTFFGPnkOkaAwOIptzVkgkN8KDaGo7xiM2gIhAOSRGiA9oDRv5cWjkANkO1gRd41B9xiZgwH%2BtsQZE3BWKv8DCEIQABoMNjM3NDIzMTgzODA1IgwxpLvSlOkXTRjMsN0q3AOmzpDrAchY2AwwRLbRoaHthN4jk%2F1tLYS0VT0SRiYTgwYCLE5majiwmZgWJsdJz7jKRZGD18qq4GGuXZ3l%2BqI2HPm5sdqStkiRR%2BeXXSPkP%2F1qqA8eCfvzKJeTDr4H63Zv5y%2BGleeZ6fgshBsvYGDi9TQR6lNZLY9syjocJXhjrRSmOqzppupJmSweuqsMbnqVX68GyjM0ZEMhzr6%2Bn04YirXhJv3vf4hHn6QAfsZDOTXLmFimkUg9q3fe00oqx%2BKJm49uqiwHRws4DCfQj%2Bx29iTCAuSL0fKpIorpl7vXp04DHmCR9bdPOQFzVdBHSvzcjAhzWBtpjCtA5RxOzT0cGoWcajteY9d2onFBA6Yzyf3G7C2u3n7eyl4F%2Bb6JH4RhqAs%2FOMCMNloI%2BVqdvW%2BigBrz1%2BZqjaCpYJK4LZVaroZiHPmAvalThiJTNaoV%2BJOzVeOwd1JpYGWJTYnKCaDAPZvzAp%2F%2FXSY0zFesDpdOwlCd5Wi1Q7MvvvwfNaVd6yWrVQDPvtInsrkCgwyturP4fq97aOBjlCT51jBPqOOnO2CcP%2B4NXqi65R4UVDTlBGKphXc%2Bd3Bskd0eVXWxrEOBx8PST8e5dIpy9BBBJyBd3nGfNtiF9HnmsRZdiDCh%2F8i%2FBjqkAQgarVMc7qEsQhePhZ5s0JoqKnl0VBx9edIaBpiFv3u2JXsbF4UAc4g%2Bt%2FKINAqTiuNaEpjD5814B%2FmzlMjyWCSFr%2B7g4H%2BbTg1HBm3A8bWyRMbhYazgyuVR2wnTiO4u94drichXlJ11ThV3nWCCyJFJOuZVu6HTSEEhLCC91mTii%2Fs3c1Nelh%2FsKPj9CO8GwZ8eYGYersK6NctGbchA%2Fra9cK7B&X-Amz-Signature=4c1744266273aebc8f10af41a90f807aaddf6a657b02dcd372eba8c1b7240983&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
