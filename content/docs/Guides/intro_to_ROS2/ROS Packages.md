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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3CYZYDZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZfxe1x5T5E7bov28atFLGwPn2Qeb5HZrRAhJSOka7nAiAx9CSrS20cqd6K%2B%2BUYjwkv0tweBENoeDJVfiIu5YDvfiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjayaexXUbRJICsWBKtwDMHZT4BV14a%2FMTHDC9BoBA4Zt%2FxP1d1NhU0%2Bu1SCx7bppjAZQZ323HfLB81%2BBqiX6%2BUFg7mE8yBlsqHzcqE1V4iJKkHxVOr2ZSzEobcb8P87o5QaFXhqN2lKbDJC4hogoSIcEdFnyiM9Zr%2BipJ%2F%2B8tBBbPDhu84jnv9vHo%2ByTVc1t7TqTpL5sovVG0ZsLKFwKM5th9pL758E39%2BSIVWXkwVeHIC1iUOhMaluxtkSp01SG8%2Bz%2B%2FTVsmpYBxRr5RJY9YRU8v8l%2BSAHCJhkmxb0Y0LJ%2FzuiV2LZht7S%2FYikTLWBpIzo%2F1Dwgq%2FITJ2ZouyRcXXEa80IfginiZtsDU%2Fcd9xESlXDuVSVZjSFFc%2BpkM%2B3o3Lh7aQkK4F2p0wkl8IiIQhMXd5h%2Bv0c09Qk0qTdGZVTwgJLzM7zcGOisnqPSIDZJmS5GG86dQrmqbVkl%2BOueXSImwJojAD3dX6qforQwiylarKya7P38gnHspuiE74HGfRqjinkpushHawbmbZirSCTKWKWp9h8JDThYsRP7eFHMHXCzr53PqLqZ9ndNVeALIaCNrMgpWMw6LzwMqAaxJZ2%2FRQV8wFJtZMm%2B4t6kfpMrgmuOhF02ziQqZSzHgU78MSjUrbPhZIlGFJAwgIvovQY6pgHYxG8qXiVoDfr%2FdDashcuXJNBBKeXuJ4Cxzkmv7kNSZ6hHqbnChMwWayv0N0a5lPigY9YAjFAqtyX2hbRtpnaomaVjPN0aUyJxO27mOH3Z1mPCQf8LYFKbiejourdl4QpxWZ%2BOMgcAOZXPEqCcZUkNHn7vNC7PA0OixjNXHZryisPJTvJIMpD7zcci5%2Bf4FbpaqlXrYQ9Xzyn%2F6sHV1vtCp55AvyW8&X-Amz-Signature=20a65e8ece6b4ae79b44dc8add41870f144f3a895bbab6db6bab1fd92cef9fa5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3CYZYDZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZfxe1x5T5E7bov28atFLGwPn2Qeb5HZrRAhJSOka7nAiAx9CSrS20cqd6K%2B%2BUYjwkv0tweBENoeDJVfiIu5YDvfiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjayaexXUbRJICsWBKtwDMHZT4BV14a%2FMTHDC9BoBA4Zt%2FxP1d1NhU0%2Bu1SCx7bppjAZQZ323HfLB81%2BBqiX6%2BUFg7mE8yBlsqHzcqE1V4iJKkHxVOr2ZSzEobcb8P87o5QaFXhqN2lKbDJC4hogoSIcEdFnyiM9Zr%2BipJ%2F%2B8tBBbPDhu84jnv9vHo%2ByTVc1t7TqTpL5sovVG0ZsLKFwKM5th9pL758E39%2BSIVWXkwVeHIC1iUOhMaluxtkSp01SG8%2Bz%2B%2FTVsmpYBxRr5RJY9YRU8v8l%2BSAHCJhkmxb0Y0LJ%2FzuiV2LZht7S%2FYikTLWBpIzo%2F1Dwgq%2FITJ2ZouyRcXXEa80IfginiZtsDU%2Fcd9xESlXDuVSVZjSFFc%2BpkM%2B3o3Lh7aQkK4F2p0wkl8IiIQhMXd5h%2Bv0c09Qk0qTdGZVTwgJLzM7zcGOisnqPSIDZJmS5GG86dQrmqbVkl%2BOueXSImwJojAD3dX6qforQwiylarKya7P38gnHspuiE74HGfRqjinkpushHawbmbZirSCTKWKWp9h8JDThYsRP7eFHMHXCzr53PqLqZ9ndNVeALIaCNrMgpWMw6LzwMqAaxJZ2%2FRQV8wFJtZMm%2B4t6kfpMrgmuOhF02ziQqZSzHgU78MSjUrbPhZIlGFJAwgIvovQY6pgHYxG8qXiVoDfr%2FdDashcuXJNBBKeXuJ4Cxzkmv7kNSZ6hHqbnChMwWayv0N0a5lPigY9YAjFAqtyX2hbRtpnaomaVjPN0aUyJxO27mOH3Z1mPCQf8LYFKbiejourdl4QpxWZ%2BOMgcAOZXPEqCcZUkNHn7vNC7PA0OixjNXHZryisPJTvJIMpD7zcci5%2Bf4FbpaqlXrYQ9Xzyn%2F6sHV1vtCp55AvyW8&X-Amz-Signature=74b9b25d44d694c0d2eb06a3fb005833c51da3335bf9f1e4cbca7728e6477a35&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3CYZYDZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZfxe1x5T5E7bov28atFLGwPn2Qeb5HZrRAhJSOka7nAiAx9CSrS20cqd6K%2B%2BUYjwkv0tweBENoeDJVfiIu5YDvfiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjayaexXUbRJICsWBKtwDMHZT4BV14a%2FMTHDC9BoBA4Zt%2FxP1d1NhU0%2Bu1SCx7bppjAZQZ323HfLB81%2BBqiX6%2BUFg7mE8yBlsqHzcqE1V4iJKkHxVOr2ZSzEobcb8P87o5QaFXhqN2lKbDJC4hogoSIcEdFnyiM9Zr%2BipJ%2F%2B8tBBbPDhu84jnv9vHo%2ByTVc1t7TqTpL5sovVG0ZsLKFwKM5th9pL758E39%2BSIVWXkwVeHIC1iUOhMaluxtkSp01SG8%2Bz%2B%2FTVsmpYBxRr5RJY9YRU8v8l%2BSAHCJhkmxb0Y0LJ%2FzuiV2LZht7S%2FYikTLWBpIzo%2F1Dwgq%2FITJ2ZouyRcXXEa80IfginiZtsDU%2Fcd9xESlXDuVSVZjSFFc%2BpkM%2B3o3Lh7aQkK4F2p0wkl8IiIQhMXd5h%2Bv0c09Qk0qTdGZVTwgJLzM7zcGOisnqPSIDZJmS5GG86dQrmqbVkl%2BOueXSImwJojAD3dX6qforQwiylarKya7P38gnHspuiE74HGfRqjinkpushHawbmbZirSCTKWKWp9h8JDThYsRP7eFHMHXCzr53PqLqZ9ndNVeALIaCNrMgpWMw6LzwMqAaxJZ2%2FRQV8wFJtZMm%2B4t6kfpMrgmuOhF02ziQqZSzHgU78MSjUrbPhZIlGFJAwgIvovQY6pgHYxG8qXiVoDfr%2FdDashcuXJNBBKeXuJ4Cxzkmv7kNSZ6hHqbnChMwWayv0N0a5lPigY9YAjFAqtyX2hbRtpnaomaVjPN0aUyJxO27mOH3Z1mPCQf8LYFKbiejourdl4QpxWZ%2BOMgcAOZXPEqCcZUkNHn7vNC7PA0OixjNXHZryisPJTvJIMpD7zcci5%2Bf4FbpaqlXrYQ9Xzyn%2F6sHV1vtCp55AvyW8&X-Amz-Signature=d1e5a9e08da9fbffa831b0ae585cb6ef1aa48cb31ce635ed9dce690cb2bfe6af&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3CYZYDZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZfxe1x5T5E7bov28atFLGwPn2Qeb5HZrRAhJSOka7nAiAx9CSrS20cqd6K%2B%2BUYjwkv0tweBENoeDJVfiIu5YDvfiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjayaexXUbRJICsWBKtwDMHZT4BV14a%2FMTHDC9BoBA4Zt%2FxP1d1NhU0%2Bu1SCx7bppjAZQZ323HfLB81%2BBqiX6%2BUFg7mE8yBlsqHzcqE1V4iJKkHxVOr2ZSzEobcb8P87o5QaFXhqN2lKbDJC4hogoSIcEdFnyiM9Zr%2BipJ%2F%2B8tBBbPDhu84jnv9vHo%2ByTVc1t7TqTpL5sovVG0ZsLKFwKM5th9pL758E39%2BSIVWXkwVeHIC1iUOhMaluxtkSp01SG8%2Bz%2B%2FTVsmpYBxRr5RJY9YRU8v8l%2BSAHCJhkmxb0Y0LJ%2FzuiV2LZht7S%2FYikTLWBpIzo%2F1Dwgq%2FITJ2ZouyRcXXEa80IfginiZtsDU%2Fcd9xESlXDuVSVZjSFFc%2BpkM%2B3o3Lh7aQkK4F2p0wkl8IiIQhMXd5h%2Bv0c09Qk0qTdGZVTwgJLzM7zcGOisnqPSIDZJmS5GG86dQrmqbVkl%2BOueXSImwJojAD3dX6qforQwiylarKya7P38gnHspuiE74HGfRqjinkpushHawbmbZirSCTKWKWp9h8JDThYsRP7eFHMHXCzr53PqLqZ9ndNVeALIaCNrMgpWMw6LzwMqAaxJZ2%2FRQV8wFJtZMm%2B4t6kfpMrgmuOhF02ziQqZSzHgU78MSjUrbPhZIlGFJAwgIvovQY6pgHYxG8qXiVoDfr%2FdDashcuXJNBBKeXuJ4Cxzkmv7kNSZ6hHqbnChMwWayv0N0a5lPigY9YAjFAqtyX2hbRtpnaomaVjPN0aUyJxO27mOH3Z1mPCQf8LYFKbiejourdl4QpxWZ%2BOMgcAOZXPEqCcZUkNHn7vNC7PA0OixjNXHZryisPJTvJIMpD7zcci5%2Bf4FbpaqlXrYQ9Xzyn%2F6sHV1vtCp55AvyW8&X-Amz-Signature=cefe46ae08fa4a74584f63fe3aa2ac79e6fbc6dd511e03eb3e0978398da94e78&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3CYZYDZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZfxe1x5T5E7bov28atFLGwPn2Qeb5HZrRAhJSOka7nAiAx9CSrS20cqd6K%2B%2BUYjwkv0tweBENoeDJVfiIu5YDvfiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjayaexXUbRJICsWBKtwDMHZT4BV14a%2FMTHDC9BoBA4Zt%2FxP1d1NhU0%2Bu1SCx7bppjAZQZ323HfLB81%2BBqiX6%2BUFg7mE8yBlsqHzcqE1V4iJKkHxVOr2ZSzEobcb8P87o5QaFXhqN2lKbDJC4hogoSIcEdFnyiM9Zr%2BipJ%2F%2B8tBBbPDhu84jnv9vHo%2ByTVc1t7TqTpL5sovVG0ZsLKFwKM5th9pL758E39%2BSIVWXkwVeHIC1iUOhMaluxtkSp01SG8%2Bz%2B%2FTVsmpYBxRr5RJY9YRU8v8l%2BSAHCJhkmxb0Y0LJ%2FzuiV2LZht7S%2FYikTLWBpIzo%2F1Dwgq%2FITJ2ZouyRcXXEa80IfginiZtsDU%2Fcd9xESlXDuVSVZjSFFc%2BpkM%2B3o3Lh7aQkK4F2p0wkl8IiIQhMXd5h%2Bv0c09Qk0qTdGZVTwgJLzM7zcGOisnqPSIDZJmS5GG86dQrmqbVkl%2BOueXSImwJojAD3dX6qforQwiylarKya7P38gnHspuiE74HGfRqjinkpushHawbmbZirSCTKWKWp9h8JDThYsRP7eFHMHXCzr53PqLqZ9ndNVeALIaCNrMgpWMw6LzwMqAaxJZ2%2FRQV8wFJtZMm%2B4t6kfpMrgmuOhF02ziQqZSzHgU78MSjUrbPhZIlGFJAwgIvovQY6pgHYxG8qXiVoDfr%2FdDashcuXJNBBKeXuJ4Cxzkmv7kNSZ6hHqbnChMwWayv0N0a5lPigY9YAjFAqtyX2hbRtpnaomaVjPN0aUyJxO27mOH3Z1mPCQf8LYFKbiejourdl4QpxWZ%2BOMgcAOZXPEqCcZUkNHn7vNC7PA0OixjNXHZryisPJTvJIMpD7zcci5%2Bf4FbpaqlXrYQ9Xzyn%2F6sHV1vtCp55AvyW8&X-Amz-Signature=667cd455ac2c47028e93f4082a396893fdcf68b28325cc3cf24fd5aef162faf8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3CYZYDZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZfxe1x5T5E7bov28atFLGwPn2Qeb5HZrRAhJSOka7nAiAx9CSrS20cqd6K%2B%2BUYjwkv0tweBENoeDJVfiIu5YDvfiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjayaexXUbRJICsWBKtwDMHZT4BV14a%2FMTHDC9BoBA4Zt%2FxP1d1NhU0%2Bu1SCx7bppjAZQZ323HfLB81%2BBqiX6%2BUFg7mE8yBlsqHzcqE1V4iJKkHxVOr2ZSzEobcb8P87o5QaFXhqN2lKbDJC4hogoSIcEdFnyiM9Zr%2BipJ%2F%2B8tBBbPDhu84jnv9vHo%2ByTVc1t7TqTpL5sovVG0ZsLKFwKM5th9pL758E39%2BSIVWXkwVeHIC1iUOhMaluxtkSp01SG8%2Bz%2B%2FTVsmpYBxRr5RJY9YRU8v8l%2BSAHCJhkmxb0Y0LJ%2FzuiV2LZht7S%2FYikTLWBpIzo%2F1Dwgq%2FITJ2ZouyRcXXEa80IfginiZtsDU%2Fcd9xESlXDuVSVZjSFFc%2BpkM%2B3o3Lh7aQkK4F2p0wkl8IiIQhMXd5h%2Bv0c09Qk0qTdGZVTwgJLzM7zcGOisnqPSIDZJmS5GG86dQrmqbVkl%2BOueXSImwJojAD3dX6qforQwiylarKya7P38gnHspuiE74HGfRqjinkpushHawbmbZirSCTKWKWp9h8JDThYsRP7eFHMHXCzr53PqLqZ9ndNVeALIaCNrMgpWMw6LzwMqAaxJZ2%2FRQV8wFJtZMm%2B4t6kfpMrgmuOhF02ziQqZSzHgU78MSjUrbPhZIlGFJAwgIvovQY6pgHYxG8qXiVoDfr%2FdDashcuXJNBBKeXuJ4Cxzkmv7kNSZ6hHqbnChMwWayv0N0a5lPigY9YAjFAqtyX2hbRtpnaomaVjPN0aUyJxO27mOH3Z1mPCQf8LYFKbiejourdl4QpxWZ%2BOMgcAOZXPEqCcZUkNHn7vNC7PA0OixjNXHZryisPJTvJIMpD7zcci5%2Bf4FbpaqlXrYQ9Xzyn%2F6sHV1vtCp55AvyW8&X-Amz-Signature=535b52bf9c181d3e986080f57ef81af3683aa0777bea1faeeea6118ae7eab4be&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3CYZYDZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZfxe1x5T5E7bov28atFLGwPn2Qeb5HZrRAhJSOka7nAiAx9CSrS20cqd6K%2B%2BUYjwkv0tweBENoeDJVfiIu5YDvfiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjayaexXUbRJICsWBKtwDMHZT4BV14a%2FMTHDC9BoBA4Zt%2FxP1d1NhU0%2Bu1SCx7bppjAZQZ323HfLB81%2BBqiX6%2BUFg7mE8yBlsqHzcqE1V4iJKkHxVOr2ZSzEobcb8P87o5QaFXhqN2lKbDJC4hogoSIcEdFnyiM9Zr%2BipJ%2F%2B8tBBbPDhu84jnv9vHo%2ByTVc1t7TqTpL5sovVG0ZsLKFwKM5th9pL758E39%2BSIVWXkwVeHIC1iUOhMaluxtkSp01SG8%2Bz%2B%2FTVsmpYBxRr5RJY9YRU8v8l%2BSAHCJhkmxb0Y0LJ%2FzuiV2LZht7S%2FYikTLWBpIzo%2F1Dwgq%2FITJ2ZouyRcXXEa80IfginiZtsDU%2Fcd9xESlXDuVSVZjSFFc%2BpkM%2B3o3Lh7aQkK4F2p0wkl8IiIQhMXd5h%2Bv0c09Qk0qTdGZVTwgJLzM7zcGOisnqPSIDZJmS5GG86dQrmqbVkl%2BOueXSImwJojAD3dX6qforQwiylarKya7P38gnHspuiE74HGfRqjinkpushHawbmbZirSCTKWKWp9h8JDThYsRP7eFHMHXCzr53PqLqZ9ndNVeALIaCNrMgpWMw6LzwMqAaxJZ2%2FRQV8wFJtZMm%2B4t6kfpMrgmuOhF02ziQqZSzHgU78MSjUrbPhZIlGFJAwgIvovQY6pgHYxG8qXiVoDfr%2FdDashcuXJNBBKeXuJ4Cxzkmv7kNSZ6hHqbnChMwWayv0N0a5lPigY9YAjFAqtyX2hbRtpnaomaVjPN0aUyJxO27mOH3Z1mPCQf8LYFKbiejourdl4QpxWZ%2BOMgcAOZXPEqCcZUkNHn7vNC7PA0OixjNXHZryisPJTvJIMpD7zcci5%2Bf4FbpaqlXrYQ9Xzyn%2F6sHV1vtCp55AvyW8&X-Amz-Signature=66045b05569a83d809353b48571b7e2e9f5277bf1e9a87619fa9e39cd96292cb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
