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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TETGSQS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Y88gdzAisrRKnWpmp7xOPPtF2TtF8HDdgfyj%2BZzT6QIgNc3CD0kgGtS5z4eFNmg8zLkH5aUORngcqNUtlY%2F%2FtvQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFiN0wI0843J3yGfCrcA3Rti6P5n73nNsn6r%2F%2FcseWrVmrkXTWxCozf6r1lEednA%2FkP32VGFxH0Ps%2Fp3EgWjpBMby5jfsJfSWZ5NWLfMP4N1jxLK9yMlaVuK07xWWF1gA4A4N9ZyucQ6Zg3w5beOsklWkPzj6ta7NiyKZUUYrbdVBCPO0nWHLYSBibttxjMS4yoVrywAr9tRTcEcinTwUb7VUYtVThhGeHsKT8rJLOBUXrncYOHjG5k7Y9SjnfZwZfUGWuJMGGCPhGHpvJnrH4fRwn8U7%2FpybWgULsM1fw%2FCKG9bxYk3a13F%2BCjfzhQWG67b%2FmeFY1wjgqVJ8HMCB6H6XeoLBBKo0wvRyXuuvwXraE6rqjN8tlH0iPjfd9Svvqn%2BnVXBxCQ5zcbucxS75SS%2FLzNIF5p9MDHL0ZLXlKHjR6I4%2F253MrmXT2FLUVw304De5DuBAjIYViPWCjlHTpaGKq5B2cDfTcyZM6A7TB6jJAMeViW5ZsawBD%2F%2FBGji9f61xODNsBdBCp8LywgcG6ujKDHbAIYuoaROHfXe3H%2FH3nJMPludH%2Byw8ABgu894BG6%2FKlZlwSEXqjF6ESDYcIUr%2FTXjmREGQaSUB%2FLkQtsCSwFUuvzlK%2Bj%2B5XwFjK%2Br9vQSeuMkI7Kt7uOMO7VycIGOqUBjWSvj6Jv4G2I6YiGihldNh5bkHOQ0WBkBzprYIf0PIddo4P4JoGO9zkbiAS8WEtB7RM8AgTtCKo07u%2Fj1MU9dqnSIz05NFJr8TjeoU4bk8TtkO0TAmAtz980TAPjbqzKsE5HamYv%2BONrjgTWGYPeqKuathVOMi9v%2B5BD0yyO5HSNDKFIy1jS%2Foe8a43t5XzmN8Ax7v8Hly%2B1c0es5fjarjCn%2BEye&X-Amz-Signature=fd52e331e27a75b51a2eb42cf21527a6100e91c6c0976475d38fbffd9cbc3386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TETGSQS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Y88gdzAisrRKnWpmp7xOPPtF2TtF8HDdgfyj%2BZzT6QIgNc3CD0kgGtS5z4eFNmg8zLkH5aUORngcqNUtlY%2F%2FtvQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFiN0wI0843J3yGfCrcA3Rti6P5n73nNsn6r%2F%2FcseWrVmrkXTWxCozf6r1lEednA%2FkP32VGFxH0Ps%2Fp3EgWjpBMby5jfsJfSWZ5NWLfMP4N1jxLK9yMlaVuK07xWWF1gA4A4N9ZyucQ6Zg3w5beOsklWkPzj6ta7NiyKZUUYrbdVBCPO0nWHLYSBibttxjMS4yoVrywAr9tRTcEcinTwUb7VUYtVThhGeHsKT8rJLOBUXrncYOHjG5k7Y9SjnfZwZfUGWuJMGGCPhGHpvJnrH4fRwn8U7%2FpybWgULsM1fw%2FCKG9bxYk3a13F%2BCjfzhQWG67b%2FmeFY1wjgqVJ8HMCB6H6XeoLBBKo0wvRyXuuvwXraE6rqjN8tlH0iPjfd9Svvqn%2BnVXBxCQ5zcbucxS75SS%2FLzNIF5p9MDHL0ZLXlKHjR6I4%2F253MrmXT2FLUVw304De5DuBAjIYViPWCjlHTpaGKq5B2cDfTcyZM6A7TB6jJAMeViW5ZsawBD%2F%2FBGji9f61xODNsBdBCp8LywgcG6ujKDHbAIYuoaROHfXe3H%2FH3nJMPludH%2Byw8ABgu894BG6%2FKlZlwSEXqjF6ESDYcIUr%2FTXjmREGQaSUB%2FLkQtsCSwFUuvzlK%2Bj%2B5XwFjK%2Br9vQSeuMkI7Kt7uOMO7VycIGOqUBjWSvj6Jv4G2I6YiGihldNh5bkHOQ0WBkBzprYIf0PIddo4P4JoGO9zkbiAS8WEtB7RM8AgTtCKo07u%2Fj1MU9dqnSIz05NFJr8TjeoU4bk8TtkO0TAmAtz980TAPjbqzKsE5HamYv%2BONrjgTWGYPeqKuathVOMi9v%2B5BD0yyO5HSNDKFIy1jS%2Foe8a43t5XzmN8Ax7v8Hly%2B1c0es5fjarjCn%2BEye&X-Amz-Signature=adec678fdbb0c1188da42d4ca51875fb2618ade8eb4e67d6b7fe5774a988beaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TETGSQS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Y88gdzAisrRKnWpmp7xOPPtF2TtF8HDdgfyj%2BZzT6QIgNc3CD0kgGtS5z4eFNmg8zLkH5aUORngcqNUtlY%2F%2FtvQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFiN0wI0843J3yGfCrcA3Rti6P5n73nNsn6r%2F%2FcseWrVmrkXTWxCozf6r1lEednA%2FkP32VGFxH0Ps%2Fp3EgWjpBMby5jfsJfSWZ5NWLfMP4N1jxLK9yMlaVuK07xWWF1gA4A4N9ZyucQ6Zg3w5beOsklWkPzj6ta7NiyKZUUYrbdVBCPO0nWHLYSBibttxjMS4yoVrywAr9tRTcEcinTwUb7VUYtVThhGeHsKT8rJLOBUXrncYOHjG5k7Y9SjnfZwZfUGWuJMGGCPhGHpvJnrH4fRwn8U7%2FpybWgULsM1fw%2FCKG9bxYk3a13F%2BCjfzhQWG67b%2FmeFY1wjgqVJ8HMCB6H6XeoLBBKo0wvRyXuuvwXraE6rqjN8tlH0iPjfd9Svvqn%2BnVXBxCQ5zcbucxS75SS%2FLzNIF5p9MDHL0ZLXlKHjR6I4%2F253MrmXT2FLUVw304De5DuBAjIYViPWCjlHTpaGKq5B2cDfTcyZM6A7TB6jJAMeViW5ZsawBD%2F%2FBGji9f61xODNsBdBCp8LywgcG6ujKDHbAIYuoaROHfXe3H%2FH3nJMPludH%2Byw8ABgu894BG6%2FKlZlwSEXqjF6ESDYcIUr%2FTXjmREGQaSUB%2FLkQtsCSwFUuvzlK%2Bj%2B5XwFjK%2Br9vQSeuMkI7Kt7uOMO7VycIGOqUBjWSvj6Jv4G2I6YiGihldNh5bkHOQ0WBkBzprYIf0PIddo4P4JoGO9zkbiAS8WEtB7RM8AgTtCKo07u%2Fj1MU9dqnSIz05NFJr8TjeoU4bk8TtkO0TAmAtz980TAPjbqzKsE5HamYv%2BONrjgTWGYPeqKuathVOMi9v%2B5BD0yyO5HSNDKFIy1jS%2Foe8a43t5XzmN8Ax7v8Hly%2B1c0es5fjarjCn%2BEye&X-Amz-Signature=f7f4d61cede6daecd1885a84342f4cb746e6f7b31c3a78985965f2f519274070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TETGSQS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Y88gdzAisrRKnWpmp7xOPPtF2TtF8HDdgfyj%2BZzT6QIgNc3CD0kgGtS5z4eFNmg8zLkH5aUORngcqNUtlY%2F%2FtvQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFiN0wI0843J3yGfCrcA3Rti6P5n73nNsn6r%2F%2FcseWrVmrkXTWxCozf6r1lEednA%2FkP32VGFxH0Ps%2Fp3EgWjpBMby5jfsJfSWZ5NWLfMP4N1jxLK9yMlaVuK07xWWF1gA4A4N9ZyucQ6Zg3w5beOsklWkPzj6ta7NiyKZUUYrbdVBCPO0nWHLYSBibttxjMS4yoVrywAr9tRTcEcinTwUb7VUYtVThhGeHsKT8rJLOBUXrncYOHjG5k7Y9SjnfZwZfUGWuJMGGCPhGHpvJnrH4fRwn8U7%2FpybWgULsM1fw%2FCKG9bxYk3a13F%2BCjfzhQWG67b%2FmeFY1wjgqVJ8HMCB6H6XeoLBBKo0wvRyXuuvwXraE6rqjN8tlH0iPjfd9Svvqn%2BnVXBxCQ5zcbucxS75SS%2FLzNIF5p9MDHL0ZLXlKHjR6I4%2F253MrmXT2FLUVw304De5DuBAjIYViPWCjlHTpaGKq5B2cDfTcyZM6A7TB6jJAMeViW5ZsawBD%2F%2FBGji9f61xODNsBdBCp8LywgcG6ujKDHbAIYuoaROHfXe3H%2FH3nJMPludH%2Byw8ABgu894BG6%2FKlZlwSEXqjF6ESDYcIUr%2FTXjmREGQaSUB%2FLkQtsCSwFUuvzlK%2Bj%2B5XwFjK%2Br9vQSeuMkI7Kt7uOMO7VycIGOqUBjWSvj6Jv4G2I6YiGihldNh5bkHOQ0WBkBzprYIf0PIddo4P4JoGO9zkbiAS8WEtB7RM8AgTtCKo07u%2Fj1MU9dqnSIz05NFJr8TjeoU4bk8TtkO0TAmAtz980TAPjbqzKsE5HamYv%2BONrjgTWGYPeqKuathVOMi9v%2B5BD0yyO5HSNDKFIy1jS%2Foe8a43t5XzmN8Ax7v8Hly%2B1c0es5fjarjCn%2BEye&X-Amz-Signature=5faba62b2b6021c18b6a19fc13761984790bb52b9e2d219afd7853f2524a1976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TETGSQS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Y88gdzAisrRKnWpmp7xOPPtF2TtF8HDdgfyj%2BZzT6QIgNc3CD0kgGtS5z4eFNmg8zLkH5aUORngcqNUtlY%2F%2FtvQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFiN0wI0843J3yGfCrcA3Rti6P5n73nNsn6r%2F%2FcseWrVmrkXTWxCozf6r1lEednA%2FkP32VGFxH0Ps%2Fp3EgWjpBMby5jfsJfSWZ5NWLfMP4N1jxLK9yMlaVuK07xWWF1gA4A4N9ZyucQ6Zg3w5beOsklWkPzj6ta7NiyKZUUYrbdVBCPO0nWHLYSBibttxjMS4yoVrywAr9tRTcEcinTwUb7VUYtVThhGeHsKT8rJLOBUXrncYOHjG5k7Y9SjnfZwZfUGWuJMGGCPhGHpvJnrH4fRwn8U7%2FpybWgULsM1fw%2FCKG9bxYk3a13F%2BCjfzhQWG67b%2FmeFY1wjgqVJ8HMCB6H6XeoLBBKo0wvRyXuuvwXraE6rqjN8tlH0iPjfd9Svvqn%2BnVXBxCQ5zcbucxS75SS%2FLzNIF5p9MDHL0ZLXlKHjR6I4%2F253MrmXT2FLUVw304De5DuBAjIYViPWCjlHTpaGKq5B2cDfTcyZM6A7TB6jJAMeViW5ZsawBD%2F%2FBGji9f61xODNsBdBCp8LywgcG6ujKDHbAIYuoaROHfXe3H%2FH3nJMPludH%2Byw8ABgu894BG6%2FKlZlwSEXqjF6ESDYcIUr%2FTXjmREGQaSUB%2FLkQtsCSwFUuvzlK%2Bj%2B5XwFjK%2Br9vQSeuMkI7Kt7uOMO7VycIGOqUBjWSvj6Jv4G2I6YiGihldNh5bkHOQ0WBkBzprYIf0PIddo4P4JoGO9zkbiAS8WEtB7RM8AgTtCKo07u%2Fj1MU9dqnSIz05NFJr8TjeoU4bk8TtkO0TAmAtz980TAPjbqzKsE5HamYv%2BONrjgTWGYPeqKuathVOMi9v%2B5BD0yyO5HSNDKFIy1jS%2Foe8a43t5XzmN8Ax7v8Hly%2B1c0es5fjarjCn%2BEye&X-Amz-Signature=ae56f7f39cf4eecbb5bac450ec8c700f1b53307f4a227f0b19059f70d54a37c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TETGSQS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Y88gdzAisrRKnWpmp7xOPPtF2TtF8HDdgfyj%2BZzT6QIgNc3CD0kgGtS5z4eFNmg8zLkH5aUORngcqNUtlY%2F%2FtvQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFiN0wI0843J3yGfCrcA3Rti6P5n73nNsn6r%2F%2FcseWrVmrkXTWxCozf6r1lEednA%2FkP32VGFxH0Ps%2Fp3EgWjpBMby5jfsJfSWZ5NWLfMP4N1jxLK9yMlaVuK07xWWF1gA4A4N9ZyucQ6Zg3w5beOsklWkPzj6ta7NiyKZUUYrbdVBCPO0nWHLYSBibttxjMS4yoVrywAr9tRTcEcinTwUb7VUYtVThhGeHsKT8rJLOBUXrncYOHjG5k7Y9SjnfZwZfUGWuJMGGCPhGHpvJnrH4fRwn8U7%2FpybWgULsM1fw%2FCKG9bxYk3a13F%2BCjfzhQWG67b%2FmeFY1wjgqVJ8HMCB6H6XeoLBBKo0wvRyXuuvwXraE6rqjN8tlH0iPjfd9Svvqn%2BnVXBxCQ5zcbucxS75SS%2FLzNIF5p9MDHL0ZLXlKHjR6I4%2F253MrmXT2FLUVw304De5DuBAjIYViPWCjlHTpaGKq5B2cDfTcyZM6A7TB6jJAMeViW5ZsawBD%2F%2FBGji9f61xODNsBdBCp8LywgcG6ujKDHbAIYuoaROHfXe3H%2FH3nJMPludH%2Byw8ABgu894BG6%2FKlZlwSEXqjF6ESDYcIUr%2FTXjmREGQaSUB%2FLkQtsCSwFUuvzlK%2Bj%2B5XwFjK%2Br9vQSeuMkI7Kt7uOMO7VycIGOqUBjWSvj6Jv4G2I6YiGihldNh5bkHOQ0WBkBzprYIf0PIddo4P4JoGO9zkbiAS8WEtB7RM8AgTtCKo07u%2Fj1MU9dqnSIz05NFJr8TjeoU4bk8TtkO0TAmAtz980TAPjbqzKsE5HamYv%2BONrjgTWGYPeqKuathVOMi9v%2B5BD0yyO5HSNDKFIy1jS%2Foe8a43t5XzmN8Ax7v8Hly%2B1c0es5fjarjCn%2BEye&X-Amz-Signature=798b6b001544d53fa4bee0065f2f86e0f4fdc5898f66bedb708ffd686a3b030e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TETGSQS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Y88gdzAisrRKnWpmp7xOPPtF2TtF8HDdgfyj%2BZzT6QIgNc3CD0kgGtS5z4eFNmg8zLkH5aUORngcqNUtlY%2F%2FtvQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFiN0wI0843J3yGfCrcA3Rti6P5n73nNsn6r%2F%2FcseWrVmrkXTWxCozf6r1lEednA%2FkP32VGFxH0Ps%2Fp3EgWjpBMby5jfsJfSWZ5NWLfMP4N1jxLK9yMlaVuK07xWWF1gA4A4N9ZyucQ6Zg3w5beOsklWkPzj6ta7NiyKZUUYrbdVBCPO0nWHLYSBibttxjMS4yoVrywAr9tRTcEcinTwUb7VUYtVThhGeHsKT8rJLOBUXrncYOHjG5k7Y9SjnfZwZfUGWuJMGGCPhGHpvJnrH4fRwn8U7%2FpybWgULsM1fw%2FCKG9bxYk3a13F%2BCjfzhQWG67b%2FmeFY1wjgqVJ8HMCB6H6XeoLBBKo0wvRyXuuvwXraE6rqjN8tlH0iPjfd9Svvqn%2BnVXBxCQ5zcbucxS75SS%2FLzNIF5p9MDHL0ZLXlKHjR6I4%2F253MrmXT2FLUVw304De5DuBAjIYViPWCjlHTpaGKq5B2cDfTcyZM6A7TB6jJAMeViW5ZsawBD%2F%2FBGji9f61xODNsBdBCp8LywgcG6ujKDHbAIYuoaROHfXe3H%2FH3nJMPludH%2Byw8ABgu894BG6%2FKlZlwSEXqjF6ESDYcIUr%2FTXjmREGQaSUB%2FLkQtsCSwFUuvzlK%2Bj%2B5XwFjK%2Br9vQSeuMkI7Kt7uOMO7VycIGOqUBjWSvj6Jv4G2I6YiGihldNh5bkHOQ0WBkBzprYIf0PIddo4P4JoGO9zkbiAS8WEtB7RM8AgTtCKo07u%2Fj1MU9dqnSIz05NFJr8TjeoU4bk8TtkO0TAmAtz980TAPjbqzKsE5HamYv%2BONrjgTWGYPeqKuathVOMi9v%2B5BD0yyO5HSNDKFIy1jS%2Foe8a43t5XzmN8Ax7v8Hly%2B1c0es5fjarjCn%2BEye&X-Amz-Signature=a728961cdc77dfbd790b400d7d481ba17d1df76abf53d64d6aa73d8e2de4d7b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
