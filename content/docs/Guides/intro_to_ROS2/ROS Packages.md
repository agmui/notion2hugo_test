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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZQUW53%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuspQkowjkBYl%2F5XxDcvUVrNqO8D6kRacgFEY%2BVFRHYAIhAOSLE%2BVW9897WXP2vMfnVQ2pcLpPFFWPphyHFVeSJ3yZKv8DCDgQABoMNjM3NDIzMTgzODA1Igxv8Kp%2BdKfR6f%2BbIY4q3AP2RJAw7ZlTj62ikVLoMTT6nxJMq2QyPhNs9O0AJOdx0B212d0AIBxGJRS9JbEVxdPFgolebMvO0NZpOXThJJKAUwjjJZHgb3yHBLIL1a6sJLVUHQl15caiwV5grH3CZEiolelcWSqRaXFKGG2c3d8wDkCf6C1Pj4UFY7IOjxCiWURbJVjAKJ14kmYPVT%2FKb9pqYwz8b8SSqrCUcWEHurCd0wwYaadc6GPhDrkXKnCWb4s76fPFPTph0lxhXPDVOm9c8shjMRq9DvDwRxLNHwUXUTLUbpDzAbNne6kUmIQOPynh9jem66OIpVn3cPuWQjU0jhXqhrMUfCSzZOGxy2ghPu%2Fz%2FgUH6ML2MXIAzYaSk0RBPoMyGPhK6nz0ZEClpbw5fhOZEMAJ4kU7d1TLO7NlBgN0BNAOtSmvi435Li0maLPkxidVT9Zi2VSqmp9iCDDlMLJXPkXZBvNInIFMM2Gbz4K7fEAQk%2BA6HKuR5mSGFLyv6N13I1Eu3YBgVbeHt4oypoiJb%2BMPMcJo%2FrFz43Tj3fuQZY4EkgXfUwtyYYjzVKMXBx5hk05EQzklKI454vwX84YarumUQtMPCZKcZdTkaKKyacln66gOLhywfCGQIHRPGcsarwYXbSYJ6DC%2BjZK%2FBjqkAaWO3h7GaCKup95rWuH4S1DYjX36tEqNVJQY5wFoPSJuPf1kRIoSnBEv3L4%2FqrRqXWvRBP8vQrvdxnttYWcNPL9F17PCCHS47ctR1x8O0dpB7%2BW2YpEF9F0UPJbdyB6hvhbIw4DKoj7VcDEB5X8AQoy38lzl%2FdqriVF%2B9bq25SnKLL5JC45%2B4tUP76pDTukPZDfQ3MOObzOhLIF8QXejwTHwegri&X-Amz-Signature=83b1f36f8c5afbca22b716d1246aa0fd2a749948f43965b522ad25e0470fffe4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZQUW53%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuspQkowjkBYl%2F5XxDcvUVrNqO8D6kRacgFEY%2BVFRHYAIhAOSLE%2BVW9897WXP2vMfnVQ2pcLpPFFWPphyHFVeSJ3yZKv8DCDgQABoMNjM3NDIzMTgzODA1Igxv8Kp%2BdKfR6f%2BbIY4q3AP2RJAw7ZlTj62ikVLoMTT6nxJMq2QyPhNs9O0AJOdx0B212d0AIBxGJRS9JbEVxdPFgolebMvO0NZpOXThJJKAUwjjJZHgb3yHBLIL1a6sJLVUHQl15caiwV5grH3CZEiolelcWSqRaXFKGG2c3d8wDkCf6C1Pj4UFY7IOjxCiWURbJVjAKJ14kmYPVT%2FKb9pqYwz8b8SSqrCUcWEHurCd0wwYaadc6GPhDrkXKnCWb4s76fPFPTph0lxhXPDVOm9c8shjMRq9DvDwRxLNHwUXUTLUbpDzAbNne6kUmIQOPynh9jem66OIpVn3cPuWQjU0jhXqhrMUfCSzZOGxy2ghPu%2Fz%2FgUH6ML2MXIAzYaSk0RBPoMyGPhK6nz0ZEClpbw5fhOZEMAJ4kU7d1TLO7NlBgN0BNAOtSmvi435Li0maLPkxidVT9Zi2VSqmp9iCDDlMLJXPkXZBvNInIFMM2Gbz4K7fEAQk%2BA6HKuR5mSGFLyv6N13I1Eu3YBgVbeHt4oypoiJb%2BMPMcJo%2FrFz43Tj3fuQZY4EkgXfUwtyYYjzVKMXBx5hk05EQzklKI454vwX84YarumUQtMPCZKcZdTkaKKyacln66gOLhywfCGQIHRPGcsarwYXbSYJ6DC%2BjZK%2FBjqkAaWO3h7GaCKup95rWuH4S1DYjX36tEqNVJQY5wFoPSJuPf1kRIoSnBEv3L4%2FqrRqXWvRBP8vQrvdxnttYWcNPL9F17PCCHS47ctR1x8O0dpB7%2BW2YpEF9F0UPJbdyB6hvhbIw4DKoj7VcDEB5X8AQoy38lzl%2FdqriVF%2B9bq25SnKLL5JC45%2B4tUP76pDTukPZDfQ3MOObzOhLIF8QXejwTHwegri&X-Amz-Signature=dc5af20fb46e42259086553f448333f654ec59d43e6c2c36227ddb0df827f7fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZQUW53%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuspQkowjkBYl%2F5XxDcvUVrNqO8D6kRacgFEY%2BVFRHYAIhAOSLE%2BVW9897WXP2vMfnVQ2pcLpPFFWPphyHFVeSJ3yZKv8DCDgQABoMNjM3NDIzMTgzODA1Igxv8Kp%2BdKfR6f%2BbIY4q3AP2RJAw7ZlTj62ikVLoMTT6nxJMq2QyPhNs9O0AJOdx0B212d0AIBxGJRS9JbEVxdPFgolebMvO0NZpOXThJJKAUwjjJZHgb3yHBLIL1a6sJLVUHQl15caiwV5grH3CZEiolelcWSqRaXFKGG2c3d8wDkCf6C1Pj4UFY7IOjxCiWURbJVjAKJ14kmYPVT%2FKb9pqYwz8b8SSqrCUcWEHurCd0wwYaadc6GPhDrkXKnCWb4s76fPFPTph0lxhXPDVOm9c8shjMRq9DvDwRxLNHwUXUTLUbpDzAbNne6kUmIQOPynh9jem66OIpVn3cPuWQjU0jhXqhrMUfCSzZOGxy2ghPu%2Fz%2FgUH6ML2MXIAzYaSk0RBPoMyGPhK6nz0ZEClpbw5fhOZEMAJ4kU7d1TLO7NlBgN0BNAOtSmvi435Li0maLPkxidVT9Zi2VSqmp9iCDDlMLJXPkXZBvNInIFMM2Gbz4K7fEAQk%2BA6HKuR5mSGFLyv6N13I1Eu3YBgVbeHt4oypoiJb%2BMPMcJo%2FrFz43Tj3fuQZY4EkgXfUwtyYYjzVKMXBx5hk05EQzklKI454vwX84YarumUQtMPCZKcZdTkaKKyacln66gOLhywfCGQIHRPGcsarwYXbSYJ6DC%2BjZK%2FBjqkAaWO3h7GaCKup95rWuH4S1DYjX36tEqNVJQY5wFoPSJuPf1kRIoSnBEv3L4%2FqrRqXWvRBP8vQrvdxnttYWcNPL9F17PCCHS47ctR1x8O0dpB7%2BW2YpEF9F0UPJbdyB6hvhbIw4DKoj7VcDEB5X8AQoy38lzl%2FdqriVF%2B9bq25SnKLL5JC45%2B4tUP76pDTukPZDfQ3MOObzOhLIF8QXejwTHwegri&X-Amz-Signature=e0ed1aa27e13793506d3e38e1b6b3ad7424950c81ac670547af079f6daa09f75&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZQUW53%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuspQkowjkBYl%2F5XxDcvUVrNqO8D6kRacgFEY%2BVFRHYAIhAOSLE%2BVW9897WXP2vMfnVQ2pcLpPFFWPphyHFVeSJ3yZKv8DCDgQABoMNjM3NDIzMTgzODA1Igxv8Kp%2BdKfR6f%2BbIY4q3AP2RJAw7ZlTj62ikVLoMTT6nxJMq2QyPhNs9O0AJOdx0B212d0AIBxGJRS9JbEVxdPFgolebMvO0NZpOXThJJKAUwjjJZHgb3yHBLIL1a6sJLVUHQl15caiwV5grH3CZEiolelcWSqRaXFKGG2c3d8wDkCf6C1Pj4UFY7IOjxCiWURbJVjAKJ14kmYPVT%2FKb9pqYwz8b8SSqrCUcWEHurCd0wwYaadc6GPhDrkXKnCWb4s76fPFPTph0lxhXPDVOm9c8shjMRq9DvDwRxLNHwUXUTLUbpDzAbNne6kUmIQOPynh9jem66OIpVn3cPuWQjU0jhXqhrMUfCSzZOGxy2ghPu%2Fz%2FgUH6ML2MXIAzYaSk0RBPoMyGPhK6nz0ZEClpbw5fhOZEMAJ4kU7d1TLO7NlBgN0BNAOtSmvi435Li0maLPkxidVT9Zi2VSqmp9iCDDlMLJXPkXZBvNInIFMM2Gbz4K7fEAQk%2BA6HKuR5mSGFLyv6N13I1Eu3YBgVbeHt4oypoiJb%2BMPMcJo%2FrFz43Tj3fuQZY4EkgXfUwtyYYjzVKMXBx5hk05EQzklKI454vwX84YarumUQtMPCZKcZdTkaKKyacln66gOLhywfCGQIHRPGcsarwYXbSYJ6DC%2BjZK%2FBjqkAaWO3h7GaCKup95rWuH4S1DYjX36tEqNVJQY5wFoPSJuPf1kRIoSnBEv3L4%2FqrRqXWvRBP8vQrvdxnttYWcNPL9F17PCCHS47ctR1x8O0dpB7%2BW2YpEF9F0UPJbdyB6hvhbIw4DKoj7VcDEB5X8AQoy38lzl%2FdqriVF%2B9bq25SnKLL5JC45%2B4tUP76pDTukPZDfQ3MOObzOhLIF8QXejwTHwegri&X-Amz-Signature=10a72b105cb7f09600c5c35fc02dd265ea55dcd7c042aba2463165eb5ae5aed1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZQUW53%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuspQkowjkBYl%2F5XxDcvUVrNqO8D6kRacgFEY%2BVFRHYAIhAOSLE%2BVW9897WXP2vMfnVQ2pcLpPFFWPphyHFVeSJ3yZKv8DCDgQABoMNjM3NDIzMTgzODA1Igxv8Kp%2BdKfR6f%2BbIY4q3AP2RJAw7ZlTj62ikVLoMTT6nxJMq2QyPhNs9O0AJOdx0B212d0AIBxGJRS9JbEVxdPFgolebMvO0NZpOXThJJKAUwjjJZHgb3yHBLIL1a6sJLVUHQl15caiwV5grH3CZEiolelcWSqRaXFKGG2c3d8wDkCf6C1Pj4UFY7IOjxCiWURbJVjAKJ14kmYPVT%2FKb9pqYwz8b8SSqrCUcWEHurCd0wwYaadc6GPhDrkXKnCWb4s76fPFPTph0lxhXPDVOm9c8shjMRq9DvDwRxLNHwUXUTLUbpDzAbNne6kUmIQOPynh9jem66OIpVn3cPuWQjU0jhXqhrMUfCSzZOGxy2ghPu%2Fz%2FgUH6ML2MXIAzYaSk0RBPoMyGPhK6nz0ZEClpbw5fhOZEMAJ4kU7d1TLO7NlBgN0BNAOtSmvi435Li0maLPkxidVT9Zi2VSqmp9iCDDlMLJXPkXZBvNInIFMM2Gbz4K7fEAQk%2BA6HKuR5mSGFLyv6N13I1Eu3YBgVbeHt4oypoiJb%2BMPMcJo%2FrFz43Tj3fuQZY4EkgXfUwtyYYjzVKMXBx5hk05EQzklKI454vwX84YarumUQtMPCZKcZdTkaKKyacln66gOLhywfCGQIHRPGcsarwYXbSYJ6DC%2BjZK%2FBjqkAaWO3h7GaCKup95rWuH4S1DYjX36tEqNVJQY5wFoPSJuPf1kRIoSnBEv3L4%2FqrRqXWvRBP8vQrvdxnttYWcNPL9F17PCCHS47ctR1x8O0dpB7%2BW2YpEF9F0UPJbdyB6hvhbIw4DKoj7VcDEB5X8AQoy38lzl%2FdqriVF%2B9bq25SnKLL5JC45%2B4tUP76pDTukPZDfQ3MOObzOhLIF8QXejwTHwegri&X-Amz-Signature=9b5cffa25bbd6791101704cf3e700e4ad5176c257df6fcc2745115643a872537&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZQUW53%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuspQkowjkBYl%2F5XxDcvUVrNqO8D6kRacgFEY%2BVFRHYAIhAOSLE%2BVW9897WXP2vMfnVQ2pcLpPFFWPphyHFVeSJ3yZKv8DCDgQABoMNjM3NDIzMTgzODA1Igxv8Kp%2BdKfR6f%2BbIY4q3AP2RJAw7ZlTj62ikVLoMTT6nxJMq2QyPhNs9O0AJOdx0B212d0AIBxGJRS9JbEVxdPFgolebMvO0NZpOXThJJKAUwjjJZHgb3yHBLIL1a6sJLVUHQl15caiwV5grH3CZEiolelcWSqRaXFKGG2c3d8wDkCf6C1Pj4UFY7IOjxCiWURbJVjAKJ14kmYPVT%2FKb9pqYwz8b8SSqrCUcWEHurCd0wwYaadc6GPhDrkXKnCWb4s76fPFPTph0lxhXPDVOm9c8shjMRq9DvDwRxLNHwUXUTLUbpDzAbNne6kUmIQOPynh9jem66OIpVn3cPuWQjU0jhXqhrMUfCSzZOGxy2ghPu%2Fz%2FgUH6ML2MXIAzYaSk0RBPoMyGPhK6nz0ZEClpbw5fhOZEMAJ4kU7d1TLO7NlBgN0BNAOtSmvi435Li0maLPkxidVT9Zi2VSqmp9iCDDlMLJXPkXZBvNInIFMM2Gbz4K7fEAQk%2BA6HKuR5mSGFLyv6N13I1Eu3YBgVbeHt4oypoiJb%2BMPMcJo%2FrFz43Tj3fuQZY4EkgXfUwtyYYjzVKMXBx5hk05EQzklKI454vwX84YarumUQtMPCZKcZdTkaKKyacln66gOLhywfCGQIHRPGcsarwYXbSYJ6DC%2BjZK%2FBjqkAaWO3h7GaCKup95rWuH4S1DYjX36tEqNVJQY5wFoPSJuPf1kRIoSnBEv3L4%2FqrRqXWvRBP8vQrvdxnttYWcNPL9F17PCCHS47ctR1x8O0dpB7%2BW2YpEF9F0UPJbdyB6hvhbIw4DKoj7VcDEB5X8AQoy38lzl%2FdqriVF%2B9bq25SnKLL5JC45%2B4tUP76pDTukPZDfQ3MOObzOhLIF8QXejwTHwegri&X-Amz-Signature=b0ccadff17dbcfbfa9a95d4f685d8ce097845f485dbed436797a42e8806dc4ed&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZQUW53%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuspQkowjkBYl%2F5XxDcvUVrNqO8D6kRacgFEY%2BVFRHYAIhAOSLE%2BVW9897WXP2vMfnVQ2pcLpPFFWPphyHFVeSJ3yZKv8DCDgQABoMNjM3NDIzMTgzODA1Igxv8Kp%2BdKfR6f%2BbIY4q3AP2RJAw7ZlTj62ikVLoMTT6nxJMq2QyPhNs9O0AJOdx0B212d0AIBxGJRS9JbEVxdPFgolebMvO0NZpOXThJJKAUwjjJZHgb3yHBLIL1a6sJLVUHQl15caiwV5grH3CZEiolelcWSqRaXFKGG2c3d8wDkCf6C1Pj4UFY7IOjxCiWURbJVjAKJ14kmYPVT%2FKb9pqYwz8b8SSqrCUcWEHurCd0wwYaadc6GPhDrkXKnCWb4s76fPFPTph0lxhXPDVOm9c8shjMRq9DvDwRxLNHwUXUTLUbpDzAbNne6kUmIQOPynh9jem66OIpVn3cPuWQjU0jhXqhrMUfCSzZOGxy2ghPu%2Fz%2FgUH6ML2MXIAzYaSk0RBPoMyGPhK6nz0ZEClpbw5fhOZEMAJ4kU7d1TLO7NlBgN0BNAOtSmvi435Li0maLPkxidVT9Zi2VSqmp9iCDDlMLJXPkXZBvNInIFMM2Gbz4K7fEAQk%2BA6HKuR5mSGFLyv6N13I1Eu3YBgVbeHt4oypoiJb%2BMPMcJo%2FrFz43Tj3fuQZY4EkgXfUwtyYYjzVKMXBx5hk05EQzklKI454vwX84YarumUQtMPCZKcZdTkaKKyacln66gOLhywfCGQIHRPGcsarwYXbSYJ6DC%2BjZK%2FBjqkAaWO3h7GaCKup95rWuH4S1DYjX36tEqNVJQY5wFoPSJuPf1kRIoSnBEv3L4%2FqrRqXWvRBP8vQrvdxnttYWcNPL9F17PCCHS47ctR1x8O0dpB7%2BW2YpEF9F0UPJbdyB6hvhbIw4DKoj7VcDEB5X8AQoy38lzl%2FdqriVF%2B9bq25SnKLL5JC45%2B4tUP76pDTukPZDfQ3MOObzOhLIF8QXejwTHwegri&X-Amz-Signature=f4ebc6d672cd5475dca1b72ab96283bc3d7ba1cfc332c8eaf2b4f64933cb2f21&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
