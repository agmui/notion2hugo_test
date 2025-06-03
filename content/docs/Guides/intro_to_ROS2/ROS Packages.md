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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFYKZ3V%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJFMEMCHyeW%2B8Zy2zF9rPp5hyT05jmGsiVgKzctPuViU8XNevYCIBjHQE3hqEPi93eDHMA703KolSUhxI9EfxokT%2F8kic9xKv8DCBgQABoMNjM3NDIzMTgzODA1Igz32dyAu%2FTWLAkGBxEq3ANhjIJHhxA6xW4o1YRKNuRqWX3RhyMVvaEEB%2FW5F0olIvQ6B%2FO0RilFT0kRxQ6DYO8N9YcuEzIU0JsW%2FWoB81PVyxxJcqtRbdxpmDO5F4KH6HYz4J0%2F0SB6I3QN2KxbsJxclnDGTL4tecAoedX3g8oWt4XMbq3CSzsCdHALKWnLufbkIYw5Bqn1bmBPsRM7LUkvgdI2eTreiRLhyJrS4RLi1540n1qTscyMI%2FIUNle9ttbwEgKlpmb9rT1ZFHAD6iwuhar9QOomjZyeF2zlbLGYS9JQ1yrdHdAZ3USYlmSEWY673hbvAnxedBawrkCAPYpMiWoUF7SDetplDQmXSqKdt4JCAOpLBasPeJkJ93FQT%2FfMfgVPpjf%2FMbYavqyepuR5RRjW2I8VP278xu%2BO3rp7R30g0XkdJowKK%2FYvZM6xov7ZGIzv78pqjHmIVe08uMwYd19nuSpjxDKvRpzlh0XdualKSYAo8%2BMD%2B07yU48QhW01KHNgKeKFmvBTVYEXqe9YrgVjQOsS9DT8FeVS8XGfkumeKbckzkHFXzviFHURrxGW0UIqQPomydB01O7hP2RkmsyuJkKAIXrPRXvb2NEvHzszbVh6DsyniHkrPZIY3O%2FK5z1PpKCtXwREzTCvoPzBBjqnAd7Hql4FRImuCxhZQpDAEZnwwLKigzQ%2FczGpo7ANrJEa9JZNiI63QdATkPPLh7SfAnhdXYfwkHDH12nKYNf%2F8iVJkY55kJ8w5gQUdDcidPfFpWZDCOXeyw507J3%2F360s8OsTLYh5%2B8dQNKBPXFzp4fN4khmPfZflocJXLoZTxFA5yhSi6zC7gF8UZU%2BEHXSxdYJv4JOF%2BtJD4dxWAqEDBbgXWhdT%2F0yD&X-Amz-Signature=7c71d09c1c465c5d4be7a31f4b17f0adbb470ddac0ba1bb1f8a58d162361d75e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFYKZ3V%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJFMEMCHyeW%2B8Zy2zF9rPp5hyT05jmGsiVgKzctPuViU8XNevYCIBjHQE3hqEPi93eDHMA703KolSUhxI9EfxokT%2F8kic9xKv8DCBgQABoMNjM3NDIzMTgzODA1Igz32dyAu%2FTWLAkGBxEq3ANhjIJHhxA6xW4o1YRKNuRqWX3RhyMVvaEEB%2FW5F0olIvQ6B%2FO0RilFT0kRxQ6DYO8N9YcuEzIU0JsW%2FWoB81PVyxxJcqtRbdxpmDO5F4KH6HYz4J0%2F0SB6I3QN2KxbsJxclnDGTL4tecAoedX3g8oWt4XMbq3CSzsCdHALKWnLufbkIYw5Bqn1bmBPsRM7LUkvgdI2eTreiRLhyJrS4RLi1540n1qTscyMI%2FIUNle9ttbwEgKlpmb9rT1ZFHAD6iwuhar9QOomjZyeF2zlbLGYS9JQ1yrdHdAZ3USYlmSEWY673hbvAnxedBawrkCAPYpMiWoUF7SDetplDQmXSqKdt4JCAOpLBasPeJkJ93FQT%2FfMfgVPpjf%2FMbYavqyepuR5RRjW2I8VP278xu%2BO3rp7R30g0XkdJowKK%2FYvZM6xov7ZGIzv78pqjHmIVe08uMwYd19nuSpjxDKvRpzlh0XdualKSYAo8%2BMD%2B07yU48QhW01KHNgKeKFmvBTVYEXqe9YrgVjQOsS9DT8FeVS8XGfkumeKbckzkHFXzviFHURrxGW0UIqQPomydB01O7hP2RkmsyuJkKAIXrPRXvb2NEvHzszbVh6DsyniHkrPZIY3O%2FK5z1PpKCtXwREzTCvoPzBBjqnAd7Hql4FRImuCxhZQpDAEZnwwLKigzQ%2FczGpo7ANrJEa9JZNiI63QdATkPPLh7SfAnhdXYfwkHDH12nKYNf%2F8iVJkY55kJ8w5gQUdDcidPfFpWZDCOXeyw507J3%2F360s8OsTLYh5%2B8dQNKBPXFzp4fN4khmPfZflocJXLoZTxFA5yhSi6zC7gF8UZU%2BEHXSxdYJv4JOF%2BtJD4dxWAqEDBbgXWhdT%2F0yD&X-Amz-Signature=6d2708f1efd07c11fed98dc436c88ccd0e378736a5f2b03341c63762442b1573&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFYKZ3V%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJFMEMCHyeW%2B8Zy2zF9rPp5hyT05jmGsiVgKzctPuViU8XNevYCIBjHQE3hqEPi93eDHMA703KolSUhxI9EfxokT%2F8kic9xKv8DCBgQABoMNjM3NDIzMTgzODA1Igz32dyAu%2FTWLAkGBxEq3ANhjIJHhxA6xW4o1YRKNuRqWX3RhyMVvaEEB%2FW5F0olIvQ6B%2FO0RilFT0kRxQ6DYO8N9YcuEzIU0JsW%2FWoB81PVyxxJcqtRbdxpmDO5F4KH6HYz4J0%2F0SB6I3QN2KxbsJxclnDGTL4tecAoedX3g8oWt4XMbq3CSzsCdHALKWnLufbkIYw5Bqn1bmBPsRM7LUkvgdI2eTreiRLhyJrS4RLi1540n1qTscyMI%2FIUNle9ttbwEgKlpmb9rT1ZFHAD6iwuhar9QOomjZyeF2zlbLGYS9JQ1yrdHdAZ3USYlmSEWY673hbvAnxedBawrkCAPYpMiWoUF7SDetplDQmXSqKdt4JCAOpLBasPeJkJ93FQT%2FfMfgVPpjf%2FMbYavqyepuR5RRjW2I8VP278xu%2BO3rp7R30g0XkdJowKK%2FYvZM6xov7ZGIzv78pqjHmIVe08uMwYd19nuSpjxDKvRpzlh0XdualKSYAo8%2BMD%2B07yU48QhW01KHNgKeKFmvBTVYEXqe9YrgVjQOsS9DT8FeVS8XGfkumeKbckzkHFXzviFHURrxGW0UIqQPomydB01O7hP2RkmsyuJkKAIXrPRXvb2NEvHzszbVh6DsyniHkrPZIY3O%2FK5z1PpKCtXwREzTCvoPzBBjqnAd7Hql4FRImuCxhZQpDAEZnwwLKigzQ%2FczGpo7ANrJEa9JZNiI63QdATkPPLh7SfAnhdXYfwkHDH12nKYNf%2F8iVJkY55kJ8w5gQUdDcidPfFpWZDCOXeyw507J3%2F360s8OsTLYh5%2B8dQNKBPXFzp4fN4khmPfZflocJXLoZTxFA5yhSi6zC7gF8UZU%2BEHXSxdYJv4JOF%2BtJD4dxWAqEDBbgXWhdT%2F0yD&X-Amz-Signature=c1bc6f3f704af8e652a72bf9255766e6423cc9cee803ac833b4c9d45216bd28c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFYKZ3V%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJFMEMCHyeW%2B8Zy2zF9rPp5hyT05jmGsiVgKzctPuViU8XNevYCIBjHQE3hqEPi93eDHMA703KolSUhxI9EfxokT%2F8kic9xKv8DCBgQABoMNjM3NDIzMTgzODA1Igz32dyAu%2FTWLAkGBxEq3ANhjIJHhxA6xW4o1YRKNuRqWX3RhyMVvaEEB%2FW5F0olIvQ6B%2FO0RilFT0kRxQ6DYO8N9YcuEzIU0JsW%2FWoB81PVyxxJcqtRbdxpmDO5F4KH6HYz4J0%2F0SB6I3QN2KxbsJxclnDGTL4tecAoedX3g8oWt4XMbq3CSzsCdHALKWnLufbkIYw5Bqn1bmBPsRM7LUkvgdI2eTreiRLhyJrS4RLi1540n1qTscyMI%2FIUNle9ttbwEgKlpmb9rT1ZFHAD6iwuhar9QOomjZyeF2zlbLGYS9JQ1yrdHdAZ3USYlmSEWY673hbvAnxedBawrkCAPYpMiWoUF7SDetplDQmXSqKdt4JCAOpLBasPeJkJ93FQT%2FfMfgVPpjf%2FMbYavqyepuR5RRjW2I8VP278xu%2BO3rp7R30g0XkdJowKK%2FYvZM6xov7ZGIzv78pqjHmIVe08uMwYd19nuSpjxDKvRpzlh0XdualKSYAo8%2BMD%2B07yU48QhW01KHNgKeKFmvBTVYEXqe9YrgVjQOsS9DT8FeVS8XGfkumeKbckzkHFXzviFHURrxGW0UIqQPomydB01O7hP2RkmsyuJkKAIXrPRXvb2NEvHzszbVh6DsyniHkrPZIY3O%2FK5z1PpKCtXwREzTCvoPzBBjqnAd7Hql4FRImuCxhZQpDAEZnwwLKigzQ%2FczGpo7ANrJEa9JZNiI63QdATkPPLh7SfAnhdXYfwkHDH12nKYNf%2F8iVJkY55kJ8w5gQUdDcidPfFpWZDCOXeyw507J3%2F360s8OsTLYh5%2B8dQNKBPXFzp4fN4khmPfZflocJXLoZTxFA5yhSi6zC7gF8UZU%2BEHXSxdYJv4JOF%2BtJD4dxWAqEDBbgXWhdT%2F0yD&X-Amz-Signature=ec6feeb006139f8e8bb724553c4d633969637442790112261293096ef2f9d0a7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFYKZ3V%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJFMEMCHyeW%2B8Zy2zF9rPp5hyT05jmGsiVgKzctPuViU8XNevYCIBjHQE3hqEPi93eDHMA703KolSUhxI9EfxokT%2F8kic9xKv8DCBgQABoMNjM3NDIzMTgzODA1Igz32dyAu%2FTWLAkGBxEq3ANhjIJHhxA6xW4o1YRKNuRqWX3RhyMVvaEEB%2FW5F0olIvQ6B%2FO0RilFT0kRxQ6DYO8N9YcuEzIU0JsW%2FWoB81PVyxxJcqtRbdxpmDO5F4KH6HYz4J0%2F0SB6I3QN2KxbsJxclnDGTL4tecAoedX3g8oWt4XMbq3CSzsCdHALKWnLufbkIYw5Bqn1bmBPsRM7LUkvgdI2eTreiRLhyJrS4RLi1540n1qTscyMI%2FIUNle9ttbwEgKlpmb9rT1ZFHAD6iwuhar9QOomjZyeF2zlbLGYS9JQ1yrdHdAZ3USYlmSEWY673hbvAnxedBawrkCAPYpMiWoUF7SDetplDQmXSqKdt4JCAOpLBasPeJkJ93FQT%2FfMfgVPpjf%2FMbYavqyepuR5RRjW2I8VP278xu%2BO3rp7R30g0XkdJowKK%2FYvZM6xov7ZGIzv78pqjHmIVe08uMwYd19nuSpjxDKvRpzlh0XdualKSYAo8%2BMD%2B07yU48QhW01KHNgKeKFmvBTVYEXqe9YrgVjQOsS9DT8FeVS8XGfkumeKbckzkHFXzviFHURrxGW0UIqQPomydB01O7hP2RkmsyuJkKAIXrPRXvb2NEvHzszbVh6DsyniHkrPZIY3O%2FK5z1PpKCtXwREzTCvoPzBBjqnAd7Hql4FRImuCxhZQpDAEZnwwLKigzQ%2FczGpo7ANrJEa9JZNiI63QdATkPPLh7SfAnhdXYfwkHDH12nKYNf%2F8iVJkY55kJ8w5gQUdDcidPfFpWZDCOXeyw507J3%2F360s8OsTLYh5%2B8dQNKBPXFzp4fN4khmPfZflocJXLoZTxFA5yhSi6zC7gF8UZU%2BEHXSxdYJv4JOF%2BtJD4dxWAqEDBbgXWhdT%2F0yD&X-Amz-Signature=77256845653f5f5df004943c157e6168d706817c0222f9476ce454f55c07d23a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFYKZ3V%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJFMEMCHyeW%2B8Zy2zF9rPp5hyT05jmGsiVgKzctPuViU8XNevYCIBjHQE3hqEPi93eDHMA703KolSUhxI9EfxokT%2F8kic9xKv8DCBgQABoMNjM3NDIzMTgzODA1Igz32dyAu%2FTWLAkGBxEq3ANhjIJHhxA6xW4o1YRKNuRqWX3RhyMVvaEEB%2FW5F0olIvQ6B%2FO0RilFT0kRxQ6DYO8N9YcuEzIU0JsW%2FWoB81PVyxxJcqtRbdxpmDO5F4KH6HYz4J0%2F0SB6I3QN2KxbsJxclnDGTL4tecAoedX3g8oWt4XMbq3CSzsCdHALKWnLufbkIYw5Bqn1bmBPsRM7LUkvgdI2eTreiRLhyJrS4RLi1540n1qTscyMI%2FIUNle9ttbwEgKlpmb9rT1ZFHAD6iwuhar9QOomjZyeF2zlbLGYS9JQ1yrdHdAZ3USYlmSEWY673hbvAnxedBawrkCAPYpMiWoUF7SDetplDQmXSqKdt4JCAOpLBasPeJkJ93FQT%2FfMfgVPpjf%2FMbYavqyepuR5RRjW2I8VP278xu%2BO3rp7R30g0XkdJowKK%2FYvZM6xov7ZGIzv78pqjHmIVe08uMwYd19nuSpjxDKvRpzlh0XdualKSYAo8%2BMD%2B07yU48QhW01KHNgKeKFmvBTVYEXqe9YrgVjQOsS9DT8FeVS8XGfkumeKbckzkHFXzviFHURrxGW0UIqQPomydB01O7hP2RkmsyuJkKAIXrPRXvb2NEvHzszbVh6DsyniHkrPZIY3O%2FK5z1PpKCtXwREzTCvoPzBBjqnAd7Hql4FRImuCxhZQpDAEZnwwLKigzQ%2FczGpo7ANrJEa9JZNiI63QdATkPPLh7SfAnhdXYfwkHDH12nKYNf%2F8iVJkY55kJ8w5gQUdDcidPfFpWZDCOXeyw507J3%2F360s8OsTLYh5%2B8dQNKBPXFzp4fN4khmPfZflocJXLoZTxFA5yhSi6zC7gF8UZU%2BEHXSxdYJv4JOF%2BtJD4dxWAqEDBbgXWhdT%2F0yD&X-Amz-Signature=4a29be62d39d68348d8a7df543498df39b6136a36a276b1352de8b151e157fe6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGFYKZ3V%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJFMEMCHyeW%2B8Zy2zF9rPp5hyT05jmGsiVgKzctPuViU8XNevYCIBjHQE3hqEPi93eDHMA703KolSUhxI9EfxokT%2F8kic9xKv8DCBgQABoMNjM3NDIzMTgzODA1Igz32dyAu%2FTWLAkGBxEq3ANhjIJHhxA6xW4o1YRKNuRqWX3RhyMVvaEEB%2FW5F0olIvQ6B%2FO0RilFT0kRxQ6DYO8N9YcuEzIU0JsW%2FWoB81PVyxxJcqtRbdxpmDO5F4KH6HYz4J0%2F0SB6I3QN2KxbsJxclnDGTL4tecAoedX3g8oWt4XMbq3CSzsCdHALKWnLufbkIYw5Bqn1bmBPsRM7LUkvgdI2eTreiRLhyJrS4RLi1540n1qTscyMI%2FIUNle9ttbwEgKlpmb9rT1ZFHAD6iwuhar9QOomjZyeF2zlbLGYS9JQ1yrdHdAZ3USYlmSEWY673hbvAnxedBawrkCAPYpMiWoUF7SDetplDQmXSqKdt4JCAOpLBasPeJkJ93FQT%2FfMfgVPpjf%2FMbYavqyepuR5RRjW2I8VP278xu%2BO3rp7R30g0XkdJowKK%2FYvZM6xov7ZGIzv78pqjHmIVe08uMwYd19nuSpjxDKvRpzlh0XdualKSYAo8%2BMD%2B07yU48QhW01KHNgKeKFmvBTVYEXqe9YrgVjQOsS9DT8FeVS8XGfkumeKbckzkHFXzviFHURrxGW0UIqQPomydB01O7hP2RkmsyuJkKAIXrPRXvb2NEvHzszbVh6DsyniHkrPZIY3O%2FK5z1PpKCtXwREzTCvoPzBBjqnAd7Hql4FRImuCxhZQpDAEZnwwLKigzQ%2FczGpo7ANrJEa9JZNiI63QdATkPPLh7SfAnhdXYfwkHDH12nKYNf%2F8iVJkY55kJ8w5gQUdDcidPfFpWZDCOXeyw507J3%2F360s8OsTLYh5%2B8dQNKBPXFzp4fN4khmPfZflocJXLoZTxFA5yhSi6zC7gF8UZU%2BEHXSxdYJv4JOF%2BtJD4dxWAqEDBbgXWhdT%2F0yD&X-Amz-Signature=5063c58a313d50ae9fbcb5b8a0e3314d6ff364a097e6a5ab5172b8b2259e4d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
