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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYS3ITZX%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQC1U4wXFjUW1lKUawfPJ22qOJF%2FI3U7OXQyeWR1%2BuTwxQIgMQC4vOhwbA9Vs3dh1%2F%2FauBeCiQKyX%2BqXhkbtIl2YL0Aq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDGO6BgeQwKlbHZrlpSrcA0OXgIlwLYFpbvYuGSWlLD08OkdVIHsrGQCwUGyYLhDPnI0QiNZ6r1S3zQSs1I4KdGEELLxA%2Fhfk5ahVWzxUvCAVQ%2FDWSVeB7lp7QdUSDjxKp55THpZorzd%2BMCWr9e%2BC%2BucSGqAhCs4oKkQA8UMcUY0xrZX9Tv5rY5r%2FkBVg%2BUmD%2B4yEV0ZGklVAYD8mHhgvqNK3b2cGWvd11Z%2FdjNZu%2BBkpJyX4zuUhmDQWLCzqg7%2F988jSabI8KFt1p1oofUabDuF%2FJRBpjEvJ8REcFEhon9setEzJS34m9eZ6ASYL5f6%2FpNSYWNBp%2Fm2WnsgQ3aX5kSjA%2BWtEWbjBJe4i1jSDIEcC8OruGthf0%2FkeuCVavQgFkY0pTzbYp5mLMxtZo1NbikrsSy7gZm3XVtZbMXHLABrbSFmUqsqVtdYpX1HZ0GwvB%2BI7wyH9mHTiUZrRhxu3LHSMhUrqF3qUkrDKkEFbXdiMECyDM05wlwadFa4B7ZocPcARba5lGeyJTSJbF8UjU4EV%2FtwxcJG3fTY0JN2DL2GXy4O9NGS53SobT%2BV8AN2l8WbJ0JekYgsnbqczA9YAyydd0pFy95kJgPFxrucRTUI1TPr8MVvN9RehzHYid6%2FdQVqufJgC7I3nGnUpMOycosMGOqUBLXF62pvYT7oLKHex3vCxEWqprooZmfrgP%2BYOtoDzvUw%2FMbf5G0d5sBXHv0toqTZ1ZR%2Bf8MT8QxqnUvuaYOzdkxqd7Ozhsjt4W2cduRq%2FPDmqMj%2BRTakEthFy7Y6HggX9SMatAgws%2BUPzIa4dwMYu7mUsdD9CoK%2BTmlKA6QaGr8cP%2FfBijFtSV1beoCW%2FPFyl9TCvG901gRUeDji%2B9l3lgubOitwE&X-Amz-Signature=054ab950915548028cf96c29037ede1716ab81b4a22cd2e72955162424163497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYS3ITZX%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQC1U4wXFjUW1lKUawfPJ22qOJF%2FI3U7OXQyeWR1%2BuTwxQIgMQC4vOhwbA9Vs3dh1%2F%2FauBeCiQKyX%2BqXhkbtIl2YL0Aq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDGO6BgeQwKlbHZrlpSrcA0OXgIlwLYFpbvYuGSWlLD08OkdVIHsrGQCwUGyYLhDPnI0QiNZ6r1S3zQSs1I4KdGEELLxA%2Fhfk5ahVWzxUvCAVQ%2FDWSVeB7lp7QdUSDjxKp55THpZorzd%2BMCWr9e%2BC%2BucSGqAhCs4oKkQA8UMcUY0xrZX9Tv5rY5r%2FkBVg%2BUmD%2B4yEV0ZGklVAYD8mHhgvqNK3b2cGWvd11Z%2FdjNZu%2BBkpJyX4zuUhmDQWLCzqg7%2F988jSabI8KFt1p1oofUabDuF%2FJRBpjEvJ8REcFEhon9setEzJS34m9eZ6ASYL5f6%2FpNSYWNBp%2Fm2WnsgQ3aX5kSjA%2BWtEWbjBJe4i1jSDIEcC8OruGthf0%2FkeuCVavQgFkY0pTzbYp5mLMxtZo1NbikrsSy7gZm3XVtZbMXHLABrbSFmUqsqVtdYpX1HZ0GwvB%2BI7wyH9mHTiUZrRhxu3LHSMhUrqF3qUkrDKkEFbXdiMECyDM05wlwadFa4B7ZocPcARba5lGeyJTSJbF8UjU4EV%2FtwxcJG3fTY0JN2DL2GXy4O9NGS53SobT%2BV8AN2l8WbJ0JekYgsnbqczA9YAyydd0pFy95kJgPFxrucRTUI1TPr8MVvN9RehzHYid6%2FdQVqufJgC7I3nGnUpMOycosMGOqUBLXF62pvYT7oLKHex3vCxEWqprooZmfrgP%2BYOtoDzvUw%2FMbf5G0d5sBXHv0toqTZ1ZR%2Bf8MT8QxqnUvuaYOzdkxqd7Ozhsjt4W2cduRq%2FPDmqMj%2BRTakEthFy7Y6HggX9SMatAgws%2BUPzIa4dwMYu7mUsdD9CoK%2BTmlKA6QaGr8cP%2FfBijFtSV1beoCW%2FPFyl9TCvG901gRUeDji%2B9l3lgubOitwE&X-Amz-Signature=6ed25dae4aaff5eac27d2cba8c7c3650b9e3192164bbb1d06b501f938dda4fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYS3ITZX%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQC1U4wXFjUW1lKUawfPJ22qOJF%2FI3U7OXQyeWR1%2BuTwxQIgMQC4vOhwbA9Vs3dh1%2F%2FauBeCiQKyX%2BqXhkbtIl2YL0Aq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDGO6BgeQwKlbHZrlpSrcA0OXgIlwLYFpbvYuGSWlLD08OkdVIHsrGQCwUGyYLhDPnI0QiNZ6r1S3zQSs1I4KdGEELLxA%2Fhfk5ahVWzxUvCAVQ%2FDWSVeB7lp7QdUSDjxKp55THpZorzd%2BMCWr9e%2BC%2BucSGqAhCs4oKkQA8UMcUY0xrZX9Tv5rY5r%2FkBVg%2BUmD%2B4yEV0ZGklVAYD8mHhgvqNK3b2cGWvd11Z%2FdjNZu%2BBkpJyX4zuUhmDQWLCzqg7%2F988jSabI8KFt1p1oofUabDuF%2FJRBpjEvJ8REcFEhon9setEzJS34m9eZ6ASYL5f6%2FpNSYWNBp%2Fm2WnsgQ3aX5kSjA%2BWtEWbjBJe4i1jSDIEcC8OruGthf0%2FkeuCVavQgFkY0pTzbYp5mLMxtZo1NbikrsSy7gZm3XVtZbMXHLABrbSFmUqsqVtdYpX1HZ0GwvB%2BI7wyH9mHTiUZrRhxu3LHSMhUrqF3qUkrDKkEFbXdiMECyDM05wlwadFa4B7ZocPcARba5lGeyJTSJbF8UjU4EV%2FtwxcJG3fTY0JN2DL2GXy4O9NGS53SobT%2BV8AN2l8WbJ0JekYgsnbqczA9YAyydd0pFy95kJgPFxrucRTUI1TPr8MVvN9RehzHYid6%2FdQVqufJgC7I3nGnUpMOycosMGOqUBLXF62pvYT7oLKHex3vCxEWqprooZmfrgP%2BYOtoDzvUw%2FMbf5G0d5sBXHv0toqTZ1ZR%2Bf8MT8QxqnUvuaYOzdkxqd7Ozhsjt4W2cduRq%2FPDmqMj%2BRTakEthFy7Y6HggX9SMatAgws%2BUPzIa4dwMYu7mUsdD9CoK%2BTmlKA6QaGr8cP%2FfBijFtSV1beoCW%2FPFyl9TCvG901gRUeDji%2B9l3lgubOitwE&X-Amz-Signature=9b5ec5ae8fd303744b2b7b3eb2d47b20ee6d9a57c2be7854eaffc075f28dc49b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYS3ITZX%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQC1U4wXFjUW1lKUawfPJ22qOJF%2FI3U7OXQyeWR1%2BuTwxQIgMQC4vOhwbA9Vs3dh1%2F%2FauBeCiQKyX%2BqXhkbtIl2YL0Aq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDGO6BgeQwKlbHZrlpSrcA0OXgIlwLYFpbvYuGSWlLD08OkdVIHsrGQCwUGyYLhDPnI0QiNZ6r1S3zQSs1I4KdGEELLxA%2Fhfk5ahVWzxUvCAVQ%2FDWSVeB7lp7QdUSDjxKp55THpZorzd%2BMCWr9e%2BC%2BucSGqAhCs4oKkQA8UMcUY0xrZX9Tv5rY5r%2FkBVg%2BUmD%2B4yEV0ZGklVAYD8mHhgvqNK3b2cGWvd11Z%2FdjNZu%2BBkpJyX4zuUhmDQWLCzqg7%2F988jSabI8KFt1p1oofUabDuF%2FJRBpjEvJ8REcFEhon9setEzJS34m9eZ6ASYL5f6%2FpNSYWNBp%2Fm2WnsgQ3aX5kSjA%2BWtEWbjBJe4i1jSDIEcC8OruGthf0%2FkeuCVavQgFkY0pTzbYp5mLMxtZo1NbikrsSy7gZm3XVtZbMXHLABrbSFmUqsqVtdYpX1HZ0GwvB%2BI7wyH9mHTiUZrRhxu3LHSMhUrqF3qUkrDKkEFbXdiMECyDM05wlwadFa4B7ZocPcARba5lGeyJTSJbF8UjU4EV%2FtwxcJG3fTY0JN2DL2GXy4O9NGS53SobT%2BV8AN2l8WbJ0JekYgsnbqczA9YAyydd0pFy95kJgPFxrucRTUI1TPr8MVvN9RehzHYid6%2FdQVqufJgC7I3nGnUpMOycosMGOqUBLXF62pvYT7oLKHex3vCxEWqprooZmfrgP%2BYOtoDzvUw%2FMbf5G0d5sBXHv0toqTZ1ZR%2Bf8MT8QxqnUvuaYOzdkxqd7Ozhsjt4W2cduRq%2FPDmqMj%2BRTakEthFy7Y6HggX9SMatAgws%2BUPzIa4dwMYu7mUsdD9CoK%2BTmlKA6QaGr8cP%2FfBijFtSV1beoCW%2FPFyl9TCvG901gRUeDji%2B9l3lgubOitwE&X-Amz-Signature=4079d0083f509d4268f0db25149fc4920a70debe8d8d27ead7b1a3c5da7188b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYS3ITZX%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQC1U4wXFjUW1lKUawfPJ22qOJF%2FI3U7OXQyeWR1%2BuTwxQIgMQC4vOhwbA9Vs3dh1%2F%2FauBeCiQKyX%2BqXhkbtIl2YL0Aq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDGO6BgeQwKlbHZrlpSrcA0OXgIlwLYFpbvYuGSWlLD08OkdVIHsrGQCwUGyYLhDPnI0QiNZ6r1S3zQSs1I4KdGEELLxA%2Fhfk5ahVWzxUvCAVQ%2FDWSVeB7lp7QdUSDjxKp55THpZorzd%2BMCWr9e%2BC%2BucSGqAhCs4oKkQA8UMcUY0xrZX9Tv5rY5r%2FkBVg%2BUmD%2B4yEV0ZGklVAYD8mHhgvqNK3b2cGWvd11Z%2FdjNZu%2BBkpJyX4zuUhmDQWLCzqg7%2F988jSabI8KFt1p1oofUabDuF%2FJRBpjEvJ8REcFEhon9setEzJS34m9eZ6ASYL5f6%2FpNSYWNBp%2Fm2WnsgQ3aX5kSjA%2BWtEWbjBJe4i1jSDIEcC8OruGthf0%2FkeuCVavQgFkY0pTzbYp5mLMxtZo1NbikrsSy7gZm3XVtZbMXHLABrbSFmUqsqVtdYpX1HZ0GwvB%2BI7wyH9mHTiUZrRhxu3LHSMhUrqF3qUkrDKkEFbXdiMECyDM05wlwadFa4B7ZocPcARba5lGeyJTSJbF8UjU4EV%2FtwxcJG3fTY0JN2DL2GXy4O9NGS53SobT%2BV8AN2l8WbJ0JekYgsnbqczA9YAyydd0pFy95kJgPFxrucRTUI1TPr8MVvN9RehzHYid6%2FdQVqufJgC7I3nGnUpMOycosMGOqUBLXF62pvYT7oLKHex3vCxEWqprooZmfrgP%2BYOtoDzvUw%2FMbf5G0d5sBXHv0toqTZ1ZR%2Bf8MT8QxqnUvuaYOzdkxqd7Ozhsjt4W2cduRq%2FPDmqMj%2BRTakEthFy7Y6HggX9SMatAgws%2BUPzIa4dwMYu7mUsdD9CoK%2BTmlKA6QaGr8cP%2FfBijFtSV1beoCW%2FPFyl9TCvG901gRUeDji%2B9l3lgubOitwE&X-Amz-Signature=a4d16aee79c13457a0735f35bbb823526c652a0f8566fabe38069ddac601ed96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYS3ITZX%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQC1U4wXFjUW1lKUawfPJ22qOJF%2FI3U7OXQyeWR1%2BuTwxQIgMQC4vOhwbA9Vs3dh1%2F%2FauBeCiQKyX%2BqXhkbtIl2YL0Aq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDGO6BgeQwKlbHZrlpSrcA0OXgIlwLYFpbvYuGSWlLD08OkdVIHsrGQCwUGyYLhDPnI0QiNZ6r1S3zQSs1I4KdGEELLxA%2Fhfk5ahVWzxUvCAVQ%2FDWSVeB7lp7QdUSDjxKp55THpZorzd%2BMCWr9e%2BC%2BucSGqAhCs4oKkQA8UMcUY0xrZX9Tv5rY5r%2FkBVg%2BUmD%2B4yEV0ZGklVAYD8mHhgvqNK3b2cGWvd11Z%2FdjNZu%2BBkpJyX4zuUhmDQWLCzqg7%2F988jSabI8KFt1p1oofUabDuF%2FJRBpjEvJ8REcFEhon9setEzJS34m9eZ6ASYL5f6%2FpNSYWNBp%2Fm2WnsgQ3aX5kSjA%2BWtEWbjBJe4i1jSDIEcC8OruGthf0%2FkeuCVavQgFkY0pTzbYp5mLMxtZo1NbikrsSy7gZm3XVtZbMXHLABrbSFmUqsqVtdYpX1HZ0GwvB%2BI7wyH9mHTiUZrRhxu3LHSMhUrqF3qUkrDKkEFbXdiMECyDM05wlwadFa4B7ZocPcARba5lGeyJTSJbF8UjU4EV%2FtwxcJG3fTY0JN2DL2GXy4O9NGS53SobT%2BV8AN2l8WbJ0JekYgsnbqczA9YAyydd0pFy95kJgPFxrucRTUI1TPr8MVvN9RehzHYid6%2FdQVqufJgC7I3nGnUpMOycosMGOqUBLXF62pvYT7oLKHex3vCxEWqprooZmfrgP%2BYOtoDzvUw%2FMbf5G0d5sBXHv0toqTZ1ZR%2Bf8MT8QxqnUvuaYOzdkxqd7Ozhsjt4W2cduRq%2FPDmqMj%2BRTakEthFy7Y6HggX9SMatAgws%2BUPzIa4dwMYu7mUsdD9CoK%2BTmlKA6QaGr8cP%2FfBijFtSV1beoCW%2FPFyl9TCvG901gRUeDji%2B9l3lgubOitwE&X-Amz-Signature=c61eb08e1542a897b06d85742117ffbd2853e7a3865e11e9a232e711c7853bd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYS3ITZX%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQC1U4wXFjUW1lKUawfPJ22qOJF%2FI3U7OXQyeWR1%2BuTwxQIgMQC4vOhwbA9Vs3dh1%2F%2FauBeCiQKyX%2BqXhkbtIl2YL0Aq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDGO6BgeQwKlbHZrlpSrcA0OXgIlwLYFpbvYuGSWlLD08OkdVIHsrGQCwUGyYLhDPnI0QiNZ6r1S3zQSs1I4KdGEELLxA%2Fhfk5ahVWzxUvCAVQ%2FDWSVeB7lp7QdUSDjxKp55THpZorzd%2BMCWr9e%2BC%2BucSGqAhCs4oKkQA8UMcUY0xrZX9Tv5rY5r%2FkBVg%2BUmD%2B4yEV0ZGklVAYD8mHhgvqNK3b2cGWvd11Z%2FdjNZu%2BBkpJyX4zuUhmDQWLCzqg7%2F988jSabI8KFt1p1oofUabDuF%2FJRBpjEvJ8REcFEhon9setEzJS34m9eZ6ASYL5f6%2FpNSYWNBp%2Fm2WnsgQ3aX5kSjA%2BWtEWbjBJe4i1jSDIEcC8OruGthf0%2FkeuCVavQgFkY0pTzbYp5mLMxtZo1NbikrsSy7gZm3XVtZbMXHLABrbSFmUqsqVtdYpX1HZ0GwvB%2BI7wyH9mHTiUZrRhxu3LHSMhUrqF3qUkrDKkEFbXdiMECyDM05wlwadFa4B7ZocPcARba5lGeyJTSJbF8UjU4EV%2FtwxcJG3fTY0JN2DL2GXy4O9NGS53SobT%2BV8AN2l8WbJ0JekYgsnbqczA9YAyydd0pFy95kJgPFxrucRTUI1TPr8MVvN9RehzHYid6%2FdQVqufJgC7I3nGnUpMOycosMGOqUBLXF62pvYT7oLKHex3vCxEWqprooZmfrgP%2BYOtoDzvUw%2FMbf5G0d5sBXHv0toqTZ1ZR%2Bf8MT8QxqnUvuaYOzdkxqd7Ozhsjt4W2cduRq%2FPDmqMj%2BRTakEthFy7Y6HggX9SMatAgws%2BUPzIa4dwMYu7mUsdD9CoK%2BTmlKA6QaGr8cP%2FfBijFtSV1beoCW%2FPFyl9TCvG901gRUeDji%2B9l3lgubOitwE&X-Amz-Signature=38fb20e5f8f7c32be25397695e6c4d85bbf4212460c1181729b8aa75818a7dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
