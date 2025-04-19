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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IGQGBN2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDf5br4TrETPvZ5q5mwowneyxu5awvSOHPmQ5dBEn6U6AiEAlyETQpfo2G%2FokLZknv34OXbN3SR3IqubhA%2Bq2dZmj0MqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQGXsP6jE80gMrMPSrcA5Ab3IfT9hZoYREQWKiy%2BBxQubMUvDq7A2EXc6%2FUbnr2GkhTFBPqW%2FBsvRAPY8oJaygqJIiur8Ik70L0T70WPBY8z%2FCNPH9vcVJpms%2BX3QJMHjvas9QrwA1EORWNyWcA5vud4bA0JuZvxboLizsMKNb3wMLQwYZym4zZzfv8C5XCL8NWXPI7ADnbsMmcJSq8HyHNXvsWnavV56Ef6TtvI%2FHCpskK8Hk9w7U9AZ7d9b8ZTq0b2d6ni7cH%2B1rUQvdz%2FP249lTOOgA6rQzhBoM1s45flxc0ME6M77F92psAXlGMDexaduDMR%2B2oiBg%2F9qaYoc1je7MWNCBwVvNj0Yw7gzzVPlUxepVhMpiXxZyjI1cye7I06n2SX3DvdZa2GkCuL3usYi0jFBrwWGhHkmtQx5SaRMMYrZyoshACaYnwpVL5vMOuPfvSS%2FnGh982ylYJ9Yg%2BjEl36uDjxbA7fDYJmjLTeLXmgc6%2B3z4SI%2FvC4Eg9qhQ9InJSif9q5P3yILsfDb3lWNfx1OGPO7h2Qyhy65OyNK4X16Bj%2BZU720seee1Sys41c%2FFW9nWFHHit0yohXwEZUbOhrw40C8wxdskd%2Bi5W1z4OdJ0ZZd5NW%2F%2FjmeDY0VWw61TT8EZpCfSPMM%2Bgj8AGOqUBbsnJFGNJ6O3L6lO9t9o3pJekI2lyQNkY6Owd1aT%2FTYb6RZQSkbqgCi8axPVLYjqrAJY29%2FGxsswbIcEntb%2FHrrp9i%2Fm4iWZfgoOGnDe0lAQUbXqRRfllq2J72ffTaaV5qmo76tv3VqV3kegMmmZR8uVAaMJL8HqKSK3WaTpx5WoV7M5CLqgm40q4b9sTOnvE4lGWjsTpulB51w0ylVFSIadsZ8bY&X-Amz-Signature=8d87f69cfd853468d833a33afcaceda42395542b369fde76ae5442938f8316ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IGQGBN2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDf5br4TrETPvZ5q5mwowneyxu5awvSOHPmQ5dBEn6U6AiEAlyETQpfo2G%2FokLZknv34OXbN3SR3IqubhA%2Bq2dZmj0MqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQGXsP6jE80gMrMPSrcA5Ab3IfT9hZoYREQWKiy%2BBxQubMUvDq7A2EXc6%2FUbnr2GkhTFBPqW%2FBsvRAPY8oJaygqJIiur8Ik70L0T70WPBY8z%2FCNPH9vcVJpms%2BX3QJMHjvas9QrwA1EORWNyWcA5vud4bA0JuZvxboLizsMKNb3wMLQwYZym4zZzfv8C5XCL8NWXPI7ADnbsMmcJSq8HyHNXvsWnavV56Ef6TtvI%2FHCpskK8Hk9w7U9AZ7d9b8ZTq0b2d6ni7cH%2B1rUQvdz%2FP249lTOOgA6rQzhBoM1s45flxc0ME6M77F92psAXlGMDexaduDMR%2B2oiBg%2F9qaYoc1je7MWNCBwVvNj0Yw7gzzVPlUxepVhMpiXxZyjI1cye7I06n2SX3DvdZa2GkCuL3usYi0jFBrwWGhHkmtQx5SaRMMYrZyoshACaYnwpVL5vMOuPfvSS%2FnGh982ylYJ9Yg%2BjEl36uDjxbA7fDYJmjLTeLXmgc6%2B3z4SI%2FvC4Eg9qhQ9InJSif9q5P3yILsfDb3lWNfx1OGPO7h2Qyhy65OyNK4X16Bj%2BZU720seee1Sys41c%2FFW9nWFHHit0yohXwEZUbOhrw40C8wxdskd%2Bi5W1z4OdJ0ZZd5NW%2F%2FjmeDY0VWw61TT8EZpCfSPMM%2Bgj8AGOqUBbsnJFGNJ6O3L6lO9t9o3pJekI2lyQNkY6Owd1aT%2FTYb6RZQSkbqgCi8axPVLYjqrAJY29%2FGxsswbIcEntb%2FHrrp9i%2Fm4iWZfgoOGnDe0lAQUbXqRRfllq2J72ffTaaV5qmo76tv3VqV3kegMmmZR8uVAaMJL8HqKSK3WaTpx5WoV7M5CLqgm40q4b9sTOnvE4lGWjsTpulB51w0ylVFSIadsZ8bY&X-Amz-Signature=140bcadc77cf389fb6caad0bd044a865a0f035ceb50b2abd3ef52d25cd042e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IGQGBN2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDf5br4TrETPvZ5q5mwowneyxu5awvSOHPmQ5dBEn6U6AiEAlyETQpfo2G%2FokLZknv34OXbN3SR3IqubhA%2Bq2dZmj0MqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQGXsP6jE80gMrMPSrcA5Ab3IfT9hZoYREQWKiy%2BBxQubMUvDq7A2EXc6%2FUbnr2GkhTFBPqW%2FBsvRAPY8oJaygqJIiur8Ik70L0T70WPBY8z%2FCNPH9vcVJpms%2BX3QJMHjvas9QrwA1EORWNyWcA5vud4bA0JuZvxboLizsMKNb3wMLQwYZym4zZzfv8C5XCL8NWXPI7ADnbsMmcJSq8HyHNXvsWnavV56Ef6TtvI%2FHCpskK8Hk9w7U9AZ7d9b8ZTq0b2d6ni7cH%2B1rUQvdz%2FP249lTOOgA6rQzhBoM1s45flxc0ME6M77F92psAXlGMDexaduDMR%2B2oiBg%2F9qaYoc1je7MWNCBwVvNj0Yw7gzzVPlUxepVhMpiXxZyjI1cye7I06n2SX3DvdZa2GkCuL3usYi0jFBrwWGhHkmtQx5SaRMMYrZyoshACaYnwpVL5vMOuPfvSS%2FnGh982ylYJ9Yg%2BjEl36uDjxbA7fDYJmjLTeLXmgc6%2B3z4SI%2FvC4Eg9qhQ9InJSif9q5P3yILsfDb3lWNfx1OGPO7h2Qyhy65OyNK4X16Bj%2BZU720seee1Sys41c%2FFW9nWFHHit0yohXwEZUbOhrw40C8wxdskd%2Bi5W1z4OdJ0ZZd5NW%2F%2FjmeDY0VWw61TT8EZpCfSPMM%2Bgj8AGOqUBbsnJFGNJ6O3L6lO9t9o3pJekI2lyQNkY6Owd1aT%2FTYb6RZQSkbqgCi8axPVLYjqrAJY29%2FGxsswbIcEntb%2FHrrp9i%2Fm4iWZfgoOGnDe0lAQUbXqRRfllq2J72ffTaaV5qmo76tv3VqV3kegMmmZR8uVAaMJL8HqKSK3WaTpx5WoV7M5CLqgm40q4b9sTOnvE4lGWjsTpulB51w0ylVFSIadsZ8bY&X-Amz-Signature=f8b0845ea818a435ecec112dcd6b80efb8ed74e5164199e9556937e608d672d2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IGQGBN2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDf5br4TrETPvZ5q5mwowneyxu5awvSOHPmQ5dBEn6U6AiEAlyETQpfo2G%2FokLZknv34OXbN3SR3IqubhA%2Bq2dZmj0MqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQGXsP6jE80gMrMPSrcA5Ab3IfT9hZoYREQWKiy%2BBxQubMUvDq7A2EXc6%2FUbnr2GkhTFBPqW%2FBsvRAPY8oJaygqJIiur8Ik70L0T70WPBY8z%2FCNPH9vcVJpms%2BX3QJMHjvas9QrwA1EORWNyWcA5vud4bA0JuZvxboLizsMKNb3wMLQwYZym4zZzfv8C5XCL8NWXPI7ADnbsMmcJSq8HyHNXvsWnavV56Ef6TtvI%2FHCpskK8Hk9w7U9AZ7d9b8ZTq0b2d6ni7cH%2B1rUQvdz%2FP249lTOOgA6rQzhBoM1s45flxc0ME6M77F92psAXlGMDexaduDMR%2B2oiBg%2F9qaYoc1je7MWNCBwVvNj0Yw7gzzVPlUxepVhMpiXxZyjI1cye7I06n2SX3DvdZa2GkCuL3usYi0jFBrwWGhHkmtQx5SaRMMYrZyoshACaYnwpVL5vMOuPfvSS%2FnGh982ylYJ9Yg%2BjEl36uDjxbA7fDYJmjLTeLXmgc6%2B3z4SI%2FvC4Eg9qhQ9InJSif9q5P3yILsfDb3lWNfx1OGPO7h2Qyhy65OyNK4X16Bj%2BZU720seee1Sys41c%2FFW9nWFHHit0yohXwEZUbOhrw40C8wxdskd%2Bi5W1z4OdJ0ZZd5NW%2F%2FjmeDY0VWw61TT8EZpCfSPMM%2Bgj8AGOqUBbsnJFGNJ6O3L6lO9t9o3pJekI2lyQNkY6Owd1aT%2FTYb6RZQSkbqgCi8axPVLYjqrAJY29%2FGxsswbIcEntb%2FHrrp9i%2Fm4iWZfgoOGnDe0lAQUbXqRRfllq2J72ffTaaV5qmo76tv3VqV3kegMmmZR8uVAaMJL8HqKSK3WaTpx5WoV7M5CLqgm40q4b9sTOnvE4lGWjsTpulB51w0ylVFSIadsZ8bY&X-Amz-Signature=d53d0c808d23ae46930db77d401dc3ac4fda1897ac1b0fbd28c548f53fe5fde5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IGQGBN2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDf5br4TrETPvZ5q5mwowneyxu5awvSOHPmQ5dBEn6U6AiEAlyETQpfo2G%2FokLZknv34OXbN3SR3IqubhA%2Bq2dZmj0MqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQGXsP6jE80gMrMPSrcA5Ab3IfT9hZoYREQWKiy%2BBxQubMUvDq7A2EXc6%2FUbnr2GkhTFBPqW%2FBsvRAPY8oJaygqJIiur8Ik70L0T70WPBY8z%2FCNPH9vcVJpms%2BX3QJMHjvas9QrwA1EORWNyWcA5vud4bA0JuZvxboLizsMKNb3wMLQwYZym4zZzfv8C5XCL8NWXPI7ADnbsMmcJSq8HyHNXvsWnavV56Ef6TtvI%2FHCpskK8Hk9w7U9AZ7d9b8ZTq0b2d6ni7cH%2B1rUQvdz%2FP249lTOOgA6rQzhBoM1s45flxc0ME6M77F92psAXlGMDexaduDMR%2B2oiBg%2F9qaYoc1je7MWNCBwVvNj0Yw7gzzVPlUxepVhMpiXxZyjI1cye7I06n2SX3DvdZa2GkCuL3usYi0jFBrwWGhHkmtQx5SaRMMYrZyoshACaYnwpVL5vMOuPfvSS%2FnGh982ylYJ9Yg%2BjEl36uDjxbA7fDYJmjLTeLXmgc6%2B3z4SI%2FvC4Eg9qhQ9InJSif9q5P3yILsfDb3lWNfx1OGPO7h2Qyhy65OyNK4X16Bj%2BZU720seee1Sys41c%2FFW9nWFHHit0yohXwEZUbOhrw40C8wxdskd%2Bi5W1z4OdJ0ZZd5NW%2F%2FjmeDY0VWw61TT8EZpCfSPMM%2Bgj8AGOqUBbsnJFGNJ6O3L6lO9t9o3pJekI2lyQNkY6Owd1aT%2FTYb6RZQSkbqgCi8axPVLYjqrAJY29%2FGxsswbIcEntb%2FHrrp9i%2Fm4iWZfgoOGnDe0lAQUbXqRRfllq2J72ffTaaV5qmo76tv3VqV3kegMmmZR8uVAaMJL8HqKSK3WaTpx5WoV7M5CLqgm40q4b9sTOnvE4lGWjsTpulB51w0ylVFSIadsZ8bY&X-Amz-Signature=b99523b82bb1ae46c9fb7d9dd174ad21c42d0c4baa84488ce057bdc295c65842&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IGQGBN2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDf5br4TrETPvZ5q5mwowneyxu5awvSOHPmQ5dBEn6U6AiEAlyETQpfo2G%2FokLZknv34OXbN3SR3IqubhA%2Bq2dZmj0MqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQGXsP6jE80gMrMPSrcA5Ab3IfT9hZoYREQWKiy%2BBxQubMUvDq7A2EXc6%2FUbnr2GkhTFBPqW%2FBsvRAPY8oJaygqJIiur8Ik70L0T70WPBY8z%2FCNPH9vcVJpms%2BX3QJMHjvas9QrwA1EORWNyWcA5vud4bA0JuZvxboLizsMKNb3wMLQwYZym4zZzfv8C5XCL8NWXPI7ADnbsMmcJSq8HyHNXvsWnavV56Ef6TtvI%2FHCpskK8Hk9w7U9AZ7d9b8ZTq0b2d6ni7cH%2B1rUQvdz%2FP249lTOOgA6rQzhBoM1s45flxc0ME6M77F92psAXlGMDexaduDMR%2B2oiBg%2F9qaYoc1je7MWNCBwVvNj0Yw7gzzVPlUxepVhMpiXxZyjI1cye7I06n2SX3DvdZa2GkCuL3usYi0jFBrwWGhHkmtQx5SaRMMYrZyoshACaYnwpVL5vMOuPfvSS%2FnGh982ylYJ9Yg%2BjEl36uDjxbA7fDYJmjLTeLXmgc6%2B3z4SI%2FvC4Eg9qhQ9InJSif9q5P3yILsfDb3lWNfx1OGPO7h2Qyhy65OyNK4X16Bj%2BZU720seee1Sys41c%2FFW9nWFHHit0yohXwEZUbOhrw40C8wxdskd%2Bi5W1z4OdJ0ZZd5NW%2F%2FjmeDY0VWw61TT8EZpCfSPMM%2Bgj8AGOqUBbsnJFGNJ6O3L6lO9t9o3pJekI2lyQNkY6Owd1aT%2FTYb6RZQSkbqgCi8axPVLYjqrAJY29%2FGxsswbIcEntb%2FHrrp9i%2Fm4iWZfgoOGnDe0lAQUbXqRRfllq2J72ffTaaV5qmo76tv3VqV3kegMmmZR8uVAaMJL8HqKSK3WaTpx5WoV7M5CLqgm40q4b9sTOnvE4lGWjsTpulB51w0ylVFSIadsZ8bY&X-Amz-Signature=9e7f5b3c4c074cf4c76ceee19452e1b0f110f4ad2f21f5980177e6a0bd8b0ee5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IGQGBN2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDf5br4TrETPvZ5q5mwowneyxu5awvSOHPmQ5dBEn6U6AiEAlyETQpfo2G%2FokLZknv34OXbN3SR3IqubhA%2Bq2dZmj0MqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQGXsP6jE80gMrMPSrcA5Ab3IfT9hZoYREQWKiy%2BBxQubMUvDq7A2EXc6%2FUbnr2GkhTFBPqW%2FBsvRAPY8oJaygqJIiur8Ik70L0T70WPBY8z%2FCNPH9vcVJpms%2BX3QJMHjvas9QrwA1EORWNyWcA5vud4bA0JuZvxboLizsMKNb3wMLQwYZym4zZzfv8C5XCL8NWXPI7ADnbsMmcJSq8HyHNXvsWnavV56Ef6TtvI%2FHCpskK8Hk9w7U9AZ7d9b8ZTq0b2d6ni7cH%2B1rUQvdz%2FP249lTOOgA6rQzhBoM1s45flxc0ME6M77F92psAXlGMDexaduDMR%2B2oiBg%2F9qaYoc1je7MWNCBwVvNj0Yw7gzzVPlUxepVhMpiXxZyjI1cye7I06n2SX3DvdZa2GkCuL3usYi0jFBrwWGhHkmtQx5SaRMMYrZyoshACaYnwpVL5vMOuPfvSS%2FnGh982ylYJ9Yg%2BjEl36uDjxbA7fDYJmjLTeLXmgc6%2B3z4SI%2FvC4Eg9qhQ9InJSif9q5P3yILsfDb3lWNfx1OGPO7h2Qyhy65OyNK4X16Bj%2BZU720seee1Sys41c%2FFW9nWFHHit0yohXwEZUbOhrw40C8wxdskd%2Bi5W1z4OdJ0ZZd5NW%2F%2FjmeDY0VWw61TT8EZpCfSPMM%2Bgj8AGOqUBbsnJFGNJ6O3L6lO9t9o3pJekI2lyQNkY6Owd1aT%2FTYb6RZQSkbqgCi8axPVLYjqrAJY29%2FGxsswbIcEntb%2FHrrp9i%2Fm4iWZfgoOGnDe0lAQUbXqRRfllq2J72ffTaaV5qmo76tv3VqV3kegMmmZR8uVAaMJL8HqKSK3WaTpx5WoV7M5CLqgm40q4b9sTOnvE4lGWjsTpulB51w0ylVFSIadsZ8bY&X-Amz-Signature=b39210a485545ea1d63fb9414b1d1c4c357cc5d9efaff6485d29b14410442eeb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
