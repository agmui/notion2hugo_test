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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRDKVRS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDi3MUCqQ74PbmXgf5GQfShuxDc15AEMFy4yWxozRoGqAiBP09WJfqjB%2BQKgckuQiaTfxFRqgVdEyeSmu4e1R7lILyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCGip%2F3U82zyKheHUKtwDeQLVnantCnrH477bEqGMRHLfFB3SqVg5VTRymH9RGKSZxFREW5K6i1LeLxhAHsbq8SxebzPbY4LzwPA73g1cjqTlYbJzTgok%2B%2FF%2FtkgojDAK9VJdFv0IcUziiFQTPuFTWdsHDcD76Tly6OP8bozerDmeIfVG%2FhrrsNzV6I7a6nuRQGh6cHclrmj86qbYEDK67LMJ59rzholpS7dsR0oEmiyaOu62fkHiuOXYlSsAAF4Au5N%2F%2BT41d0tbnPEtFjNVDWvmo8AOoY9HFDG0N1ITPAMgi703WHmsfUpsAhEEJ9YIJi%2F4%2BYOKqpZnwCuW3RUdOiGNunW0WaYbDx5DlvQNDwoExBnSMeywDyUZHFpzCFzf9o5AGBX8DVSga4vbyFs5i0SPR4kWPBqXmfZyMvxLuhxGBu1H%2BZ4p%2BIWbF3IK99oGGsF5PiM7kXKbFjl6Ob07zG55P3u4q%2Bs%2FF10m3JsaPEIgJaTZi%2BFkYrGCwbRekv0mWSAfsmuusBXEdFKeHwbpA3VTcvkyeNkSBB%2B53ScSqk1mrJr74hJySPvotqRjOOu9wf3Stw1O4Px9as0dflGDg2m4rt37HO1UHTWgcGYMANys3GUb7R527nmC3cCi9kO9Bxpo9N9BgEn%2Bqs0wkevbwAY6pgHfQ0D3JKHA2kTsntxHANQvFSaEs1k2CjZ4tIBvn0zsumnNVZ%2BFNpmakrFf9xts%2BuQJ646ZNlCJXA7APTRUaKHGf%2FZGvUlLKT0aCYye6OP3fT0Ywv%2BEURAnGpUfVO1rZsxQF1GHWMKHr6QGoEwXRODHHUy%2FEmJl1NX3umAIcxLqen%2Bqttpo3VTP4GW6IZrzBlLyo2iLK1ch52VY2kbLcxyhBmyRoPeD&X-Amz-Signature=7cc7a87bab649be05a6eab0b324af6fa4c2d97b289b703815550eafb78703317&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRDKVRS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDi3MUCqQ74PbmXgf5GQfShuxDc15AEMFy4yWxozRoGqAiBP09WJfqjB%2BQKgckuQiaTfxFRqgVdEyeSmu4e1R7lILyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCGip%2F3U82zyKheHUKtwDeQLVnantCnrH477bEqGMRHLfFB3SqVg5VTRymH9RGKSZxFREW5K6i1LeLxhAHsbq8SxebzPbY4LzwPA73g1cjqTlYbJzTgok%2B%2FF%2FtkgojDAK9VJdFv0IcUziiFQTPuFTWdsHDcD76Tly6OP8bozerDmeIfVG%2FhrrsNzV6I7a6nuRQGh6cHclrmj86qbYEDK67LMJ59rzholpS7dsR0oEmiyaOu62fkHiuOXYlSsAAF4Au5N%2F%2BT41d0tbnPEtFjNVDWvmo8AOoY9HFDG0N1ITPAMgi703WHmsfUpsAhEEJ9YIJi%2F4%2BYOKqpZnwCuW3RUdOiGNunW0WaYbDx5DlvQNDwoExBnSMeywDyUZHFpzCFzf9o5AGBX8DVSga4vbyFs5i0SPR4kWPBqXmfZyMvxLuhxGBu1H%2BZ4p%2BIWbF3IK99oGGsF5PiM7kXKbFjl6Ob07zG55P3u4q%2Bs%2FF10m3JsaPEIgJaTZi%2BFkYrGCwbRekv0mWSAfsmuusBXEdFKeHwbpA3VTcvkyeNkSBB%2B53ScSqk1mrJr74hJySPvotqRjOOu9wf3Stw1O4Px9as0dflGDg2m4rt37HO1UHTWgcGYMANys3GUb7R527nmC3cCi9kO9Bxpo9N9BgEn%2Bqs0wkevbwAY6pgHfQ0D3JKHA2kTsntxHANQvFSaEs1k2CjZ4tIBvn0zsumnNVZ%2BFNpmakrFf9xts%2BuQJ646ZNlCJXA7APTRUaKHGf%2FZGvUlLKT0aCYye6OP3fT0Ywv%2BEURAnGpUfVO1rZsxQF1GHWMKHr6QGoEwXRODHHUy%2FEmJl1NX3umAIcxLqen%2Bqttpo3VTP4GW6IZrzBlLyo2iLK1ch52VY2kbLcxyhBmyRoPeD&X-Amz-Signature=c88587be0c67495d0d0b051abeb9f8f4db1cc49d6f46c6c426e0dc12bbffc220&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRDKVRS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDi3MUCqQ74PbmXgf5GQfShuxDc15AEMFy4yWxozRoGqAiBP09WJfqjB%2BQKgckuQiaTfxFRqgVdEyeSmu4e1R7lILyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCGip%2F3U82zyKheHUKtwDeQLVnantCnrH477bEqGMRHLfFB3SqVg5VTRymH9RGKSZxFREW5K6i1LeLxhAHsbq8SxebzPbY4LzwPA73g1cjqTlYbJzTgok%2B%2FF%2FtkgojDAK9VJdFv0IcUziiFQTPuFTWdsHDcD76Tly6OP8bozerDmeIfVG%2FhrrsNzV6I7a6nuRQGh6cHclrmj86qbYEDK67LMJ59rzholpS7dsR0oEmiyaOu62fkHiuOXYlSsAAF4Au5N%2F%2BT41d0tbnPEtFjNVDWvmo8AOoY9HFDG0N1ITPAMgi703WHmsfUpsAhEEJ9YIJi%2F4%2BYOKqpZnwCuW3RUdOiGNunW0WaYbDx5DlvQNDwoExBnSMeywDyUZHFpzCFzf9o5AGBX8DVSga4vbyFs5i0SPR4kWPBqXmfZyMvxLuhxGBu1H%2BZ4p%2BIWbF3IK99oGGsF5PiM7kXKbFjl6Ob07zG55P3u4q%2Bs%2FF10m3JsaPEIgJaTZi%2BFkYrGCwbRekv0mWSAfsmuusBXEdFKeHwbpA3VTcvkyeNkSBB%2B53ScSqk1mrJr74hJySPvotqRjOOu9wf3Stw1O4Px9as0dflGDg2m4rt37HO1UHTWgcGYMANys3GUb7R527nmC3cCi9kO9Bxpo9N9BgEn%2Bqs0wkevbwAY6pgHfQ0D3JKHA2kTsntxHANQvFSaEs1k2CjZ4tIBvn0zsumnNVZ%2BFNpmakrFf9xts%2BuQJ646ZNlCJXA7APTRUaKHGf%2FZGvUlLKT0aCYye6OP3fT0Ywv%2BEURAnGpUfVO1rZsxQF1GHWMKHr6QGoEwXRODHHUy%2FEmJl1NX3umAIcxLqen%2Bqttpo3VTP4GW6IZrzBlLyo2iLK1ch52VY2kbLcxyhBmyRoPeD&X-Amz-Signature=3ac762101e860685959a213db60c9c91b628e0ffe173258d8ece15584b08c43c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRDKVRS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDi3MUCqQ74PbmXgf5GQfShuxDc15AEMFy4yWxozRoGqAiBP09WJfqjB%2BQKgckuQiaTfxFRqgVdEyeSmu4e1R7lILyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCGip%2F3U82zyKheHUKtwDeQLVnantCnrH477bEqGMRHLfFB3SqVg5VTRymH9RGKSZxFREW5K6i1LeLxhAHsbq8SxebzPbY4LzwPA73g1cjqTlYbJzTgok%2B%2FF%2FtkgojDAK9VJdFv0IcUziiFQTPuFTWdsHDcD76Tly6OP8bozerDmeIfVG%2FhrrsNzV6I7a6nuRQGh6cHclrmj86qbYEDK67LMJ59rzholpS7dsR0oEmiyaOu62fkHiuOXYlSsAAF4Au5N%2F%2BT41d0tbnPEtFjNVDWvmo8AOoY9HFDG0N1ITPAMgi703WHmsfUpsAhEEJ9YIJi%2F4%2BYOKqpZnwCuW3RUdOiGNunW0WaYbDx5DlvQNDwoExBnSMeywDyUZHFpzCFzf9o5AGBX8DVSga4vbyFs5i0SPR4kWPBqXmfZyMvxLuhxGBu1H%2BZ4p%2BIWbF3IK99oGGsF5PiM7kXKbFjl6Ob07zG55P3u4q%2Bs%2FF10m3JsaPEIgJaTZi%2BFkYrGCwbRekv0mWSAfsmuusBXEdFKeHwbpA3VTcvkyeNkSBB%2B53ScSqk1mrJr74hJySPvotqRjOOu9wf3Stw1O4Px9as0dflGDg2m4rt37HO1UHTWgcGYMANys3GUb7R527nmC3cCi9kO9Bxpo9N9BgEn%2Bqs0wkevbwAY6pgHfQ0D3JKHA2kTsntxHANQvFSaEs1k2CjZ4tIBvn0zsumnNVZ%2BFNpmakrFf9xts%2BuQJ646ZNlCJXA7APTRUaKHGf%2FZGvUlLKT0aCYye6OP3fT0Ywv%2BEURAnGpUfVO1rZsxQF1GHWMKHr6QGoEwXRODHHUy%2FEmJl1NX3umAIcxLqen%2Bqttpo3VTP4GW6IZrzBlLyo2iLK1ch52VY2kbLcxyhBmyRoPeD&X-Amz-Signature=4ad5dbb55b57ba6bb0b1e85eba0e6f924f639c57b165f73b74f6ebe3949f171a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRDKVRS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDi3MUCqQ74PbmXgf5GQfShuxDc15AEMFy4yWxozRoGqAiBP09WJfqjB%2BQKgckuQiaTfxFRqgVdEyeSmu4e1R7lILyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCGip%2F3U82zyKheHUKtwDeQLVnantCnrH477bEqGMRHLfFB3SqVg5VTRymH9RGKSZxFREW5K6i1LeLxhAHsbq8SxebzPbY4LzwPA73g1cjqTlYbJzTgok%2B%2FF%2FtkgojDAK9VJdFv0IcUziiFQTPuFTWdsHDcD76Tly6OP8bozerDmeIfVG%2FhrrsNzV6I7a6nuRQGh6cHclrmj86qbYEDK67LMJ59rzholpS7dsR0oEmiyaOu62fkHiuOXYlSsAAF4Au5N%2F%2BT41d0tbnPEtFjNVDWvmo8AOoY9HFDG0N1ITPAMgi703WHmsfUpsAhEEJ9YIJi%2F4%2BYOKqpZnwCuW3RUdOiGNunW0WaYbDx5DlvQNDwoExBnSMeywDyUZHFpzCFzf9o5AGBX8DVSga4vbyFs5i0SPR4kWPBqXmfZyMvxLuhxGBu1H%2BZ4p%2BIWbF3IK99oGGsF5PiM7kXKbFjl6Ob07zG55P3u4q%2Bs%2FF10m3JsaPEIgJaTZi%2BFkYrGCwbRekv0mWSAfsmuusBXEdFKeHwbpA3VTcvkyeNkSBB%2B53ScSqk1mrJr74hJySPvotqRjOOu9wf3Stw1O4Px9as0dflGDg2m4rt37HO1UHTWgcGYMANys3GUb7R527nmC3cCi9kO9Bxpo9N9BgEn%2Bqs0wkevbwAY6pgHfQ0D3JKHA2kTsntxHANQvFSaEs1k2CjZ4tIBvn0zsumnNVZ%2BFNpmakrFf9xts%2BuQJ646ZNlCJXA7APTRUaKHGf%2FZGvUlLKT0aCYye6OP3fT0Ywv%2BEURAnGpUfVO1rZsxQF1GHWMKHr6QGoEwXRODHHUy%2FEmJl1NX3umAIcxLqen%2Bqttpo3VTP4GW6IZrzBlLyo2iLK1ch52VY2kbLcxyhBmyRoPeD&X-Amz-Signature=adbb68afa5decc74269ab5b6fe383bdb2264df8182629cc82fb0c4e2838983a5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRDKVRS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDi3MUCqQ74PbmXgf5GQfShuxDc15AEMFy4yWxozRoGqAiBP09WJfqjB%2BQKgckuQiaTfxFRqgVdEyeSmu4e1R7lILyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCGip%2F3U82zyKheHUKtwDeQLVnantCnrH477bEqGMRHLfFB3SqVg5VTRymH9RGKSZxFREW5K6i1LeLxhAHsbq8SxebzPbY4LzwPA73g1cjqTlYbJzTgok%2B%2FF%2FtkgojDAK9VJdFv0IcUziiFQTPuFTWdsHDcD76Tly6OP8bozerDmeIfVG%2FhrrsNzV6I7a6nuRQGh6cHclrmj86qbYEDK67LMJ59rzholpS7dsR0oEmiyaOu62fkHiuOXYlSsAAF4Au5N%2F%2BT41d0tbnPEtFjNVDWvmo8AOoY9HFDG0N1ITPAMgi703WHmsfUpsAhEEJ9YIJi%2F4%2BYOKqpZnwCuW3RUdOiGNunW0WaYbDx5DlvQNDwoExBnSMeywDyUZHFpzCFzf9o5AGBX8DVSga4vbyFs5i0SPR4kWPBqXmfZyMvxLuhxGBu1H%2BZ4p%2BIWbF3IK99oGGsF5PiM7kXKbFjl6Ob07zG55P3u4q%2Bs%2FF10m3JsaPEIgJaTZi%2BFkYrGCwbRekv0mWSAfsmuusBXEdFKeHwbpA3VTcvkyeNkSBB%2B53ScSqk1mrJr74hJySPvotqRjOOu9wf3Stw1O4Px9as0dflGDg2m4rt37HO1UHTWgcGYMANys3GUb7R527nmC3cCi9kO9Bxpo9N9BgEn%2Bqs0wkevbwAY6pgHfQ0D3JKHA2kTsntxHANQvFSaEs1k2CjZ4tIBvn0zsumnNVZ%2BFNpmakrFf9xts%2BuQJ646ZNlCJXA7APTRUaKHGf%2FZGvUlLKT0aCYye6OP3fT0Ywv%2BEURAnGpUfVO1rZsxQF1GHWMKHr6QGoEwXRODHHUy%2FEmJl1NX3umAIcxLqen%2Bqttpo3VTP4GW6IZrzBlLyo2iLK1ch52VY2kbLcxyhBmyRoPeD&X-Amz-Signature=97986903b9a18ec907683f4f5014e8dce50e17a33b885289fcf81928ced083f7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRDKVRS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDi3MUCqQ74PbmXgf5GQfShuxDc15AEMFy4yWxozRoGqAiBP09WJfqjB%2BQKgckuQiaTfxFRqgVdEyeSmu4e1R7lILyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCGip%2F3U82zyKheHUKtwDeQLVnantCnrH477bEqGMRHLfFB3SqVg5VTRymH9RGKSZxFREW5K6i1LeLxhAHsbq8SxebzPbY4LzwPA73g1cjqTlYbJzTgok%2B%2FF%2FtkgojDAK9VJdFv0IcUziiFQTPuFTWdsHDcD76Tly6OP8bozerDmeIfVG%2FhrrsNzV6I7a6nuRQGh6cHclrmj86qbYEDK67LMJ59rzholpS7dsR0oEmiyaOu62fkHiuOXYlSsAAF4Au5N%2F%2BT41d0tbnPEtFjNVDWvmo8AOoY9HFDG0N1ITPAMgi703WHmsfUpsAhEEJ9YIJi%2F4%2BYOKqpZnwCuW3RUdOiGNunW0WaYbDx5DlvQNDwoExBnSMeywDyUZHFpzCFzf9o5AGBX8DVSga4vbyFs5i0SPR4kWPBqXmfZyMvxLuhxGBu1H%2BZ4p%2BIWbF3IK99oGGsF5PiM7kXKbFjl6Ob07zG55P3u4q%2Bs%2FF10m3JsaPEIgJaTZi%2BFkYrGCwbRekv0mWSAfsmuusBXEdFKeHwbpA3VTcvkyeNkSBB%2B53ScSqk1mrJr74hJySPvotqRjOOu9wf3Stw1O4Px9as0dflGDg2m4rt37HO1UHTWgcGYMANys3GUb7R527nmC3cCi9kO9Bxpo9N9BgEn%2Bqs0wkevbwAY6pgHfQ0D3JKHA2kTsntxHANQvFSaEs1k2CjZ4tIBvn0zsumnNVZ%2BFNpmakrFf9xts%2BuQJ646ZNlCJXA7APTRUaKHGf%2FZGvUlLKT0aCYye6OP3fT0Ywv%2BEURAnGpUfVO1rZsxQF1GHWMKHr6QGoEwXRODHHUy%2FEmJl1NX3umAIcxLqen%2Bqttpo3VTP4GW6IZrzBlLyo2iLK1ch52VY2kbLcxyhBmyRoPeD&X-Amz-Signature=936628ae26836737cafb7f0dff802bc10621fadcf01a3504d30cf0b4dab9b0d1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
