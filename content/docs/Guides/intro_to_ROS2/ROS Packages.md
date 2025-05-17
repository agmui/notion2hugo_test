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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB2K42KQ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXeFTyl6YWbS27fvBtxWxrF0hXrEzwCe1zrxfuPLkSKgIhAI1tA1XhB32jUGGoIa8gnptRuojs9AoExvLsO0eDu%2BBeKv8DCF8QABoMNjM3NDIzMTgzODA1IgwTLBTtzN2n%2Fae0PXIq3AOG6X8ZSikX6WJM5WFFDOVS59dvqUzL7Up%2FR50NHfT5Eu39QQNwaP2%2BFbopJ39NQ5M2Hb8wlIg%2BYV%2FOg4urjDL0iUw8mKel9DTY%2BnRRw9wTrJca8R6Mhk4KbemrMofxF8Oqmf59LZrW8mVueT9Pv14J9eVJtGfosIWpIdXADm0fJH9b4vWWiG%2B%2B4fD9oWj687wadm4JpPCQNex8W%2FDR0H0TOXg3Ln4g%2BUVySs2huSb%2BSKYHe622dNoagFBuXWphNbpvvMzvgYrYGKxRoo9RyIx3keM3pNvGG5Fsuutrn6aXSM4OGN95sGWD4l30wuLIJPhL7bTRDyLwRbpRw60duPHzhFng%2Bym6t7yfG45HnwqbHWdYMNJJr7HZOrX%2Fan0mg1UTUHiN%2BQJdQ%2Fdn66ZUowb2m2TUM9zko57qh0ZTV3pfD99PvXLkGViMNkq7ECDLAY7p9Z1FwmxrDPvnw2oiTgI2JRrs%2BLtIxwvjzo3qwzxa6vdKygZiF5K%2BjLFE5jEfnmB0T7w5hXYUnm9n8%2FNgsYk7RHOHeZDW0oGkIz7DrymowN8Fu1bVv5N4q7671isZCPqk0FQf%2FV3f%2F1ELPQ6RPjmsYjlS8Xe1OAg0FAnSWMeVEySY1B6MM7J1ha2BUTDKtqLBBjqkAdGNdmREWHpxyv6jpvK%2FvMWg%2FA6X7RaLEh6FSr8PBDpIpXC%2Fz6rlAWq%2Fzh28n8VRPmjjFxiHWpQccysQWAbK42Bzlv%2FAUJB2ez77edW06U9Nj3J3wSbFMt6VvDTl4mVu%2F8MkSPOGni%2FR2q8%2F0D9CR7%2B1na%2FLJRkTzCEr7sPbK35dUG7zXTiILy5kTr%2BdxwV3tYQsSx5RFqXH%2FmYa1apKuOJwFpWV&X-Amz-Signature=4bc0b73c8f62cea3904fe26e249f1389b1b5bb63826d13af42affeb187c414e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB2K42KQ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXeFTyl6YWbS27fvBtxWxrF0hXrEzwCe1zrxfuPLkSKgIhAI1tA1XhB32jUGGoIa8gnptRuojs9AoExvLsO0eDu%2BBeKv8DCF8QABoMNjM3NDIzMTgzODA1IgwTLBTtzN2n%2Fae0PXIq3AOG6X8ZSikX6WJM5WFFDOVS59dvqUzL7Up%2FR50NHfT5Eu39QQNwaP2%2BFbopJ39NQ5M2Hb8wlIg%2BYV%2FOg4urjDL0iUw8mKel9DTY%2BnRRw9wTrJca8R6Mhk4KbemrMofxF8Oqmf59LZrW8mVueT9Pv14J9eVJtGfosIWpIdXADm0fJH9b4vWWiG%2B%2B4fD9oWj687wadm4JpPCQNex8W%2FDR0H0TOXg3Ln4g%2BUVySs2huSb%2BSKYHe622dNoagFBuXWphNbpvvMzvgYrYGKxRoo9RyIx3keM3pNvGG5Fsuutrn6aXSM4OGN95sGWD4l30wuLIJPhL7bTRDyLwRbpRw60duPHzhFng%2Bym6t7yfG45HnwqbHWdYMNJJr7HZOrX%2Fan0mg1UTUHiN%2BQJdQ%2Fdn66ZUowb2m2TUM9zko57qh0ZTV3pfD99PvXLkGViMNkq7ECDLAY7p9Z1FwmxrDPvnw2oiTgI2JRrs%2BLtIxwvjzo3qwzxa6vdKygZiF5K%2BjLFE5jEfnmB0T7w5hXYUnm9n8%2FNgsYk7RHOHeZDW0oGkIz7DrymowN8Fu1bVv5N4q7671isZCPqk0FQf%2FV3f%2F1ELPQ6RPjmsYjlS8Xe1OAg0FAnSWMeVEySY1B6MM7J1ha2BUTDKtqLBBjqkAdGNdmREWHpxyv6jpvK%2FvMWg%2FA6X7RaLEh6FSr8PBDpIpXC%2Fz6rlAWq%2Fzh28n8VRPmjjFxiHWpQccysQWAbK42Bzlv%2FAUJB2ez77edW06U9Nj3J3wSbFMt6VvDTl4mVu%2F8MkSPOGni%2FR2q8%2F0D9CR7%2B1na%2FLJRkTzCEr7sPbK35dUG7zXTiILy5kTr%2BdxwV3tYQsSx5RFqXH%2FmYa1apKuOJwFpWV&X-Amz-Signature=206d1aca98855b25c02ef8b52c940622dbdf404a4f6189237154a4b5008ed979&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB2K42KQ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXeFTyl6YWbS27fvBtxWxrF0hXrEzwCe1zrxfuPLkSKgIhAI1tA1XhB32jUGGoIa8gnptRuojs9AoExvLsO0eDu%2BBeKv8DCF8QABoMNjM3NDIzMTgzODA1IgwTLBTtzN2n%2Fae0PXIq3AOG6X8ZSikX6WJM5WFFDOVS59dvqUzL7Up%2FR50NHfT5Eu39QQNwaP2%2BFbopJ39NQ5M2Hb8wlIg%2BYV%2FOg4urjDL0iUw8mKel9DTY%2BnRRw9wTrJca8R6Mhk4KbemrMofxF8Oqmf59LZrW8mVueT9Pv14J9eVJtGfosIWpIdXADm0fJH9b4vWWiG%2B%2B4fD9oWj687wadm4JpPCQNex8W%2FDR0H0TOXg3Ln4g%2BUVySs2huSb%2BSKYHe622dNoagFBuXWphNbpvvMzvgYrYGKxRoo9RyIx3keM3pNvGG5Fsuutrn6aXSM4OGN95sGWD4l30wuLIJPhL7bTRDyLwRbpRw60duPHzhFng%2Bym6t7yfG45HnwqbHWdYMNJJr7HZOrX%2Fan0mg1UTUHiN%2BQJdQ%2Fdn66ZUowb2m2TUM9zko57qh0ZTV3pfD99PvXLkGViMNkq7ECDLAY7p9Z1FwmxrDPvnw2oiTgI2JRrs%2BLtIxwvjzo3qwzxa6vdKygZiF5K%2BjLFE5jEfnmB0T7w5hXYUnm9n8%2FNgsYk7RHOHeZDW0oGkIz7DrymowN8Fu1bVv5N4q7671isZCPqk0FQf%2FV3f%2F1ELPQ6RPjmsYjlS8Xe1OAg0FAnSWMeVEySY1B6MM7J1ha2BUTDKtqLBBjqkAdGNdmREWHpxyv6jpvK%2FvMWg%2FA6X7RaLEh6FSr8PBDpIpXC%2Fz6rlAWq%2Fzh28n8VRPmjjFxiHWpQccysQWAbK42Bzlv%2FAUJB2ez77edW06U9Nj3J3wSbFMt6VvDTl4mVu%2F8MkSPOGni%2FR2q8%2F0D9CR7%2B1na%2FLJRkTzCEr7sPbK35dUG7zXTiILy5kTr%2BdxwV3tYQsSx5RFqXH%2FmYa1apKuOJwFpWV&X-Amz-Signature=750b463f3f9accabd29ab17ab90440404aba11252778f0c2f8370c38f126423c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB2K42KQ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXeFTyl6YWbS27fvBtxWxrF0hXrEzwCe1zrxfuPLkSKgIhAI1tA1XhB32jUGGoIa8gnptRuojs9AoExvLsO0eDu%2BBeKv8DCF8QABoMNjM3NDIzMTgzODA1IgwTLBTtzN2n%2Fae0PXIq3AOG6X8ZSikX6WJM5WFFDOVS59dvqUzL7Up%2FR50NHfT5Eu39QQNwaP2%2BFbopJ39NQ5M2Hb8wlIg%2BYV%2FOg4urjDL0iUw8mKel9DTY%2BnRRw9wTrJca8R6Mhk4KbemrMofxF8Oqmf59LZrW8mVueT9Pv14J9eVJtGfosIWpIdXADm0fJH9b4vWWiG%2B%2B4fD9oWj687wadm4JpPCQNex8W%2FDR0H0TOXg3Ln4g%2BUVySs2huSb%2BSKYHe622dNoagFBuXWphNbpvvMzvgYrYGKxRoo9RyIx3keM3pNvGG5Fsuutrn6aXSM4OGN95sGWD4l30wuLIJPhL7bTRDyLwRbpRw60duPHzhFng%2Bym6t7yfG45HnwqbHWdYMNJJr7HZOrX%2Fan0mg1UTUHiN%2BQJdQ%2Fdn66ZUowb2m2TUM9zko57qh0ZTV3pfD99PvXLkGViMNkq7ECDLAY7p9Z1FwmxrDPvnw2oiTgI2JRrs%2BLtIxwvjzo3qwzxa6vdKygZiF5K%2BjLFE5jEfnmB0T7w5hXYUnm9n8%2FNgsYk7RHOHeZDW0oGkIz7DrymowN8Fu1bVv5N4q7671isZCPqk0FQf%2FV3f%2F1ELPQ6RPjmsYjlS8Xe1OAg0FAnSWMeVEySY1B6MM7J1ha2BUTDKtqLBBjqkAdGNdmREWHpxyv6jpvK%2FvMWg%2FA6X7RaLEh6FSr8PBDpIpXC%2Fz6rlAWq%2Fzh28n8VRPmjjFxiHWpQccysQWAbK42Bzlv%2FAUJB2ez77edW06U9Nj3J3wSbFMt6VvDTl4mVu%2F8MkSPOGni%2FR2q8%2F0D9CR7%2B1na%2FLJRkTzCEr7sPbK35dUG7zXTiILy5kTr%2BdxwV3tYQsSx5RFqXH%2FmYa1apKuOJwFpWV&X-Amz-Signature=0d4eeddd81a733ec2dc12c9afbcd9ac320fd974c043d2263d40c9de0f81e9998&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB2K42KQ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXeFTyl6YWbS27fvBtxWxrF0hXrEzwCe1zrxfuPLkSKgIhAI1tA1XhB32jUGGoIa8gnptRuojs9AoExvLsO0eDu%2BBeKv8DCF8QABoMNjM3NDIzMTgzODA1IgwTLBTtzN2n%2Fae0PXIq3AOG6X8ZSikX6WJM5WFFDOVS59dvqUzL7Up%2FR50NHfT5Eu39QQNwaP2%2BFbopJ39NQ5M2Hb8wlIg%2BYV%2FOg4urjDL0iUw8mKel9DTY%2BnRRw9wTrJca8R6Mhk4KbemrMofxF8Oqmf59LZrW8mVueT9Pv14J9eVJtGfosIWpIdXADm0fJH9b4vWWiG%2B%2B4fD9oWj687wadm4JpPCQNex8W%2FDR0H0TOXg3Ln4g%2BUVySs2huSb%2BSKYHe622dNoagFBuXWphNbpvvMzvgYrYGKxRoo9RyIx3keM3pNvGG5Fsuutrn6aXSM4OGN95sGWD4l30wuLIJPhL7bTRDyLwRbpRw60duPHzhFng%2Bym6t7yfG45HnwqbHWdYMNJJr7HZOrX%2Fan0mg1UTUHiN%2BQJdQ%2Fdn66ZUowb2m2TUM9zko57qh0ZTV3pfD99PvXLkGViMNkq7ECDLAY7p9Z1FwmxrDPvnw2oiTgI2JRrs%2BLtIxwvjzo3qwzxa6vdKygZiF5K%2BjLFE5jEfnmB0T7w5hXYUnm9n8%2FNgsYk7RHOHeZDW0oGkIz7DrymowN8Fu1bVv5N4q7671isZCPqk0FQf%2FV3f%2F1ELPQ6RPjmsYjlS8Xe1OAg0FAnSWMeVEySY1B6MM7J1ha2BUTDKtqLBBjqkAdGNdmREWHpxyv6jpvK%2FvMWg%2FA6X7RaLEh6FSr8PBDpIpXC%2Fz6rlAWq%2Fzh28n8VRPmjjFxiHWpQccysQWAbK42Bzlv%2FAUJB2ez77edW06U9Nj3J3wSbFMt6VvDTl4mVu%2F8MkSPOGni%2FR2q8%2F0D9CR7%2B1na%2FLJRkTzCEr7sPbK35dUG7zXTiILy5kTr%2BdxwV3tYQsSx5RFqXH%2FmYa1apKuOJwFpWV&X-Amz-Signature=33ab4729a1fca1b2f26c747988bb3ca0f921a46088383a5deb8c3301bb3e7a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB2K42KQ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXeFTyl6YWbS27fvBtxWxrF0hXrEzwCe1zrxfuPLkSKgIhAI1tA1XhB32jUGGoIa8gnptRuojs9AoExvLsO0eDu%2BBeKv8DCF8QABoMNjM3NDIzMTgzODA1IgwTLBTtzN2n%2Fae0PXIq3AOG6X8ZSikX6WJM5WFFDOVS59dvqUzL7Up%2FR50NHfT5Eu39QQNwaP2%2BFbopJ39NQ5M2Hb8wlIg%2BYV%2FOg4urjDL0iUw8mKel9DTY%2BnRRw9wTrJca8R6Mhk4KbemrMofxF8Oqmf59LZrW8mVueT9Pv14J9eVJtGfosIWpIdXADm0fJH9b4vWWiG%2B%2B4fD9oWj687wadm4JpPCQNex8W%2FDR0H0TOXg3Ln4g%2BUVySs2huSb%2BSKYHe622dNoagFBuXWphNbpvvMzvgYrYGKxRoo9RyIx3keM3pNvGG5Fsuutrn6aXSM4OGN95sGWD4l30wuLIJPhL7bTRDyLwRbpRw60duPHzhFng%2Bym6t7yfG45HnwqbHWdYMNJJr7HZOrX%2Fan0mg1UTUHiN%2BQJdQ%2Fdn66ZUowb2m2TUM9zko57qh0ZTV3pfD99PvXLkGViMNkq7ECDLAY7p9Z1FwmxrDPvnw2oiTgI2JRrs%2BLtIxwvjzo3qwzxa6vdKygZiF5K%2BjLFE5jEfnmB0T7w5hXYUnm9n8%2FNgsYk7RHOHeZDW0oGkIz7DrymowN8Fu1bVv5N4q7671isZCPqk0FQf%2FV3f%2F1ELPQ6RPjmsYjlS8Xe1OAg0FAnSWMeVEySY1B6MM7J1ha2BUTDKtqLBBjqkAdGNdmREWHpxyv6jpvK%2FvMWg%2FA6X7RaLEh6FSr8PBDpIpXC%2Fz6rlAWq%2Fzh28n8VRPmjjFxiHWpQccysQWAbK42Bzlv%2FAUJB2ez77edW06U9Nj3J3wSbFMt6VvDTl4mVu%2F8MkSPOGni%2FR2q8%2F0D9CR7%2B1na%2FLJRkTzCEr7sPbK35dUG7zXTiILy5kTr%2BdxwV3tYQsSx5RFqXH%2FmYa1apKuOJwFpWV&X-Amz-Signature=29df488825e4060d6fdc2cb4b82798a3f501a51dd5d68848642c3094cc8a72a0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB2K42KQ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXeFTyl6YWbS27fvBtxWxrF0hXrEzwCe1zrxfuPLkSKgIhAI1tA1XhB32jUGGoIa8gnptRuojs9AoExvLsO0eDu%2BBeKv8DCF8QABoMNjM3NDIzMTgzODA1IgwTLBTtzN2n%2Fae0PXIq3AOG6X8ZSikX6WJM5WFFDOVS59dvqUzL7Up%2FR50NHfT5Eu39QQNwaP2%2BFbopJ39NQ5M2Hb8wlIg%2BYV%2FOg4urjDL0iUw8mKel9DTY%2BnRRw9wTrJca8R6Mhk4KbemrMofxF8Oqmf59LZrW8mVueT9Pv14J9eVJtGfosIWpIdXADm0fJH9b4vWWiG%2B%2B4fD9oWj687wadm4JpPCQNex8W%2FDR0H0TOXg3Ln4g%2BUVySs2huSb%2BSKYHe622dNoagFBuXWphNbpvvMzvgYrYGKxRoo9RyIx3keM3pNvGG5Fsuutrn6aXSM4OGN95sGWD4l30wuLIJPhL7bTRDyLwRbpRw60duPHzhFng%2Bym6t7yfG45HnwqbHWdYMNJJr7HZOrX%2Fan0mg1UTUHiN%2BQJdQ%2Fdn66ZUowb2m2TUM9zko57qh0ZTV3pfD99PvXLkGViMNkq7ECDLAY7p9Z1FwmxrDPvnw2oiTgI2JRrs%2BLtIxwvjzo3qwzxa6vdKygZiF5K%2BjLFE5jEfnmB0T7w5hXYUnm9n8%2FNgsYk7RHOHeZDW0oGkIz7DrymowN8Fu1bVv5N4q7671isZCPqk0FQf%2FV3f%2F1ELPQ6RPjmsYjlS8Xe1OAg0FAnSWMeVEySY1B6MM7J1ha2BUTDKtqLBBjqkAdGNdmREWHpxyv6jpvK%2FvMWg%2FA6X7RaLEh6FSr8PBDpIpXC%2Fz6rlAWq%2Fzh28n8VRPmjjFxiHWpQccysQWAbK42Bzlv%2FAUJB2ez77edW06U9Nj3J3wSbFMt6VvDTl4mVu%2F8MkSPOGni%2FR2q8%2F0D9CR7%2B1na%2FLJRkTzCEr7sPbK35dUG7zXTiILy5kTr%2BdxwV3tYQsSx5RFqXH%2FmYa1apKuOJwFpWV&X-Amz-Signature=7e704c6d20c7ea9b35165003201835281afe38443bbe594d455541dccfc54bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
