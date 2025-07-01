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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPECE5T%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDug5WI%2FK%2FTkAmA3gljidde59zod3LJnikT2I3w8ZbcsQIhALoR37LabFIamaXELmcSIbxze2awXLN5CdK7aZpcQobFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz%2Fa4lM6uBdnYN3GYq3APv1mnM3MVylG%2BSS7TV1r4R%2F8Hy9F%2BINFJuK8HxLQHdcv8QpG3mx%2B3vKcTCYdi594GenS%2FQgCwkNX7KFSKTdhXwYqZ%2FcsOOyF%2BYK8p0OrB2qqWYp3IUbfprHxu7dTDzKazN1RgVtCoxnXUYD1m5PgfqRKy22LWGt%2BYF1wDuvXTecGq8Jn0JBsVzY5YxTzfUZOAeaU5LN3hUYRlATudvJQOH6D8aBDT8VEML%2FR172IH4C4az2QddFkeLrRQXpN8YumC4rD4BNNvyAUJThV0LN%2FgZIZhdmjVk%2BpAarYgGGk1SOSh8J6dofr3%2Bqa7LQS6oqeoj569jqaiVNdOv8LkVrOwxuDyD0X8Hm%2FSJJ0ZVq%2F%2FpGERMFlNh1MVg7sAuNcTz4SWB8r2KHori8XSQFhuBs3P9mjekB9hc0LbVMhGkIW5viaWClyO1rUdzqZFEfRa%2BPneb7MTlRCBMwpdU0sjqeSbHNmY5p7dSBt0EnI4Kfwdwu2s8Gs4iPPJ0PLcikOdfrbzIfbUjagV3T%2FPBFAAvGXWF98fKl6YFv9oCL83YYQDrN8uWov7oi8OQjDClZnhmAsj%2BLf53rJGXKq62X7GjCxsaIJr%2BFfhuGJ7alsbohq6e%2F3DhwTEOq%2FX%2BtcwMRDD9w5DDBjqkAffMVSlSOCz8EqezqvAXtLne9qAx7APmqqRfE3zk4ElFzkKitcgkaSvuYsioiK7p%2Bouq98jfdgI%2Bka239%2FVeqIMfpHOjHh9j4wqYrA9YJF3etHtSNYt7c5AHMNxwcXWn%2F3X%2BwD6ztQcRJpuXXI84EQTwOtSKbypZTUz9dJHXEJ5FK8C5EH4NwgIPyPgzDEAz%2BWvyc4zzO8s80136UH%2B8Hg669OCK&X-Amz-Signature=1cc4a2a9591064a20767f22e9f5a82d2a26b9f3f204e3b4528708ff80674af43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPECE5T%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDug5WI%2FK%2FTkAmA3gljidde59zod3LJnikT2I3w8ZbcsQIhALoR37LabFIamaXELmcSIbxze2awXLN5CdK7aZpcQobFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz%2Fa4lM6uBdnYN3GYq3APv1mnM3MVylG%2BSS7TV1r4R%2F8Hy9F%2BINFJuK8HxLQHdcv8QpG3mx%2B3vKcTCYdi594GenS%2FQgCwkNX7KFSKTdhXwYqZ%2FcsOOyF%2BYK8p0OrB2qqWYp3IUbfprHxu7dTDzKazN1RgVtCoxnXUYD1m5PgfqRKy22LWGt%2BYF1wDuvXTecGq8Jn0JBsVzY5YxTzfUZOAeaU5LN3hUYRlATudvJQOH6D8aBDT8VEML%2FR172IH4C4az2QddFkeLrRQXpN8YumC4rD4BNNvyAUJThV0LN%2FgZIZhdmjVk%2BpAarYgGGk1SOSh8J6dofr3%2Bqa7LQS6oqeoj569jqaiVNdOv8LkVrOwxuDyD0X8Hm%2FSJJ0ZVq%2F%2FpGERMFlNh1MVg7sAuNcTz4SWB8r2KHori8XSQFhuBs3P9mjekB9hc0LbVMhGkIW5viaWClyO1rUdzqZFEfRa%2BPneb7MTlRCBMwpdU0sjqeSbHNmY5p7dSBt0EnI4Kfwdwu2s8Gs4iPPJ0PLcikOdfrbzIfbUjagV3T%2FPBFAAvGXWF98fKl6YFv9oCL83YYQDrN8uWov7oi8OQjDClZnhmAsj%2BLf53rJGXKq62X7GjCxsaIJr%2BFfhuGJ7alsbohq6e%2F3DhwTEOq%2FX%2BtcwMRDD9w5DDBjqkAffMVSlSOCz8EqezqvAXtLne9qAx7APmqqRfE3zk4ElFzkKitcgkaSvuYsioiK7p%2Bouq98jfdgI%2Bka239%2FVeqIMfpHOjHh9j4wqYrA9YJF3etHtSNYt7c5AHMNxwcXWn%2F3X%2BwD6ztQcRJpuXXI84EQTwOtSKbypZTUz9dJHXEJ5FK8C5EH4NwgIPyPgzDEAz%2BWvyc4zzO8s80136UH%2B8Hg669OCK&X-Amz-Signature=92c5b17c7fcb3ddcdf8c466ce5b8f33d6073ebc8554eaf594efdc7703e713914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPECE5T%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDug5WI%2FK%2FTkAmA3gljidde59zod3LJnikT2I3w8ZbcsQIhALoR37LabFIamaXELmcSIbxze2awXLN5CdK7aZpcQobFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz%2Fa4lM6uBdnYN3GYq3APv1mnM3MVylG%2BSS7TV1r4R%2F8Hy9F%2BINFJuK8HxLQHdcv8QpG3mx%2B3vKcTCYdi594GenS%2FQgCwkNX7KFSKTdhXwYqZ%2FcsOOyF%2BYK8p0OrB2qqWYp3IUbfprHxu7dTDzKazN1RgVtCoxnXUYD1m5PgfqRKy22LWGt%2BYF1wDuvXTecGq8Jn0JBsVzY5YxTzfUZOAeaU5LN3hUYRlATudvJQOH6D8aBDT8VEML%2FR172IH4C4az2QddFkeLrRQXpN8YumC4rD4BNNvyAUJThV0LN%2FgZIZhdmjVk%2BpAarYgGGk1SOSh8J6dofr3%2Bqa7LQS6oqeoj569jqaiVNdOv8LkVrOwxuDyD0X8Hm%2FSJJ0ZVq%2F%2FpGERMFlNh1MVg7sAuNcTz4SWB8r2KHori8XSQFhuBs3P9mjekB9hc0LbVMhGkIW5viaWClyO1rUdzqZFEfRa%2BPneb7MTlRCBMwpdU0sjqeSbHNmY5p7dSBt0EnI4Kfwdwu2s8Gs4iPPJ0PLcikOdfrbzIfbUjagV3T%2FPBFAAvGXWF98fKl6YFv9oCL83YYQDrN8uWov7oi8OQjDClZnhmAsj%2BLf53rJGXKq62X7GjCxsaIJr%2BFfhuGJ7alsbohq6e%2F3DhwTEOq%2FX%2BtcwMRDD9w5DDBjqkAffMVSlSOCz8EqezqvAXtLne9qAx7APmqqRfE3zk4ElFzkKitcgkaSvuYsioiK7p%2Bouq98jfdgI%2Bka239%2FVeqIMfpHOjHh9j4wqYrA9YJF3etHtSNYt7c5AHMNxwcXWn%2F3X%2BwD6ztQcRJpuXXI84EQTwOtSKbypZTUz9dJHXEJ5FK8C5EH4NwgIPyPgzDEAz%2BWvyc4zzO8s80136UH%2B8Hg669OCK&X-Amz-Signature=f193d0cd5c4af2fef40c62527f42c0f63686e0f619888728bb3198a6957b7086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPECE5T%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDug5WI%2FK%2FTkAmA3gljidde59zod3LJnikT2I3w8ZbcsQIhALoR37LabFIamaXELmcSIbxze2awXLN5CdK7aZpcQobFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz%2Fa4lM6uBdnYN3GYq3APv1mnM3MVylG%2BSS7TV1r4R%2F8Hy9F%2BINFJuK8HxLQHdcv8QpG3mx%2B3vKcTCYdi594GenS%2FQgCwkNX7KFSKTdhXwYqZ%2FcsOOyF%2BYK8p0OrB2qqWYp3IUbfprHxu7dTDzKazN1RgVtCoxnXUYD1m5PgfqRKy22LWGt%2BYF1wDuvXTecGq8Jn0JBsVzY5YxTzfUZOAeaU5LN3hUYRlATudvJQOH6D8aBDT8VEML%2FR172IH4C4az2QddFkeLrRQXpN8YumC4rD4BNNvyAUJThV0LN%2FgZIZhdmjVk%2BpAarYgGGk1SOSh8J6dofr3%2Bqa7LQS6oqeoj569jqaiVNdOv8LkVrOwxuDyD0X8Hm%2FSJJ0ZVq%2F%2FpGERMFlNh1MVg7sAuNcTz4SWB8r2KHori8XSQFhuBs3P9mjekB9hc0LbVMhGkIW5viaWClyO1rUdzqZFEfRa%2BPneb7MTlRCBMwpdU0sjqeSbHNmY5p7dSBt0EnI4Kfwdwu2s8Gs4iPPJ0PLcikOdfrbzIfbUjagV3T%2FPBFAAvGXWF98fKl6YFv9oCL83YYQDrN8uWov7oi8OQjDClZnhmAsj%2BLf53rJGXKq62X7GjCxsaIJr%2BFfhuGJ7alsbohq6e%2F3DhwTEOq%2FX%2BtcwMRDD9w5DDBjqkAffMVSlSOCz8EqezqvAXtLne9qAx7APmqqRfE3zk4ElFzkKitcgkaSvuYsioiK7p%2Bouq98jfdgI%2Bka239%2FVeqIMfpHOjHh9j4wqYrA9YJF3etHtSNYt7c5AHMNxwcXWn%2F3X%2BwD6ztQcRJpuXXI84EQTwOtSKbypZTUz9dJHXEJ5FK8C5EH4NwgIPyPgzDEAz%2BWvyc4zzO8s80136UH%2B8Hg669OCK&X-Amz-Signature=cd083724cf8910c0c1545b3a923922cd97a8bcd5ce4e52fe6a1bed41b6ffe376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPECE5T%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDug5WI%2FK%2FTkAmA3gljidde59zod3LJnikT2I3w8ZbcsQIhALoR37LabFIamaXELmcSIbxze2awXLN5CdK7aZpcQobFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz%2Fa4lM6uBdnYN3GYq3APv1mnM3MVylG%2BSS7TV1r4R%2F8Hy9F%2BINFJuK8HxLQHdcv8QpG3mx%2B3vKcTCYdi594GenS%2FQgCwkNX7KFSKTdhXwYqZ%2FcsOOyF%2BYK8p0OrB2qqWYp3IUbfprHxu7dTDzKazN1RgVtCoxnXUYD1m5PgfqRKy22LWGt%2BYF1wDuvXTecGq8Jn0JBsVzY5YxTzfUZOAeaU5LN3hUYRlATudvJQOH6D8aBDT8VEML%2FR172IH4C4az2QddFkeLrRQXpN8YumC4rD4BNNvyAUJThV0LN%2FgZIZhdmjVk%2BpAarYgGGk1SOSh8J6dofr3%2Bqa7LQS6oqeoj569jqaiVNdOv8LkVrOwxuDyD0X8Hm%2FSJJ0ZVq%2F%2FpGERMFlNh1MVg7sAuNcTz4SWB8r2KHori8XSQFhuBs3P9mjekB9hc0LbVMhGkIW5viaWClyO1rUdzqZFEfRa%2BPneb7MTlRCBMwpdU0sjqeSbHNmY5p7dSBt0EnI4Kfwdwu2s8Gs4iPPJ0PLcikOdfrbzIfbUjagV3T%2FPBFAAvGXWF98fKl6YFv9oCL83YYQDrN8uWov7oi8OQjDClZnhmAsj%2BLf53rJGXKq62X7GjCxsaIJr%2BFfhuGJ7alsbohq6e%2F3DhwTEOq%2FX%2BtcwMRDD9w5DDBjqkAffMVSlSOCz8EqezqvAXtLne9qAx7APmqqRfE3zk4ElFzkKitcgkaSvuYsioiK7p%2Bouq98jfdgI%2Bka239%2FVeqIMfpHOjHh9j4wqYrA9YJF3etHtSNYt7c5AHMNxwcXWn%2F3X%2BwD6ztQcRJpuXXI84EQTwOtSKbypZTUz9dJHXEJ5FK8C5EH4NwgIPyPgzDEAz%2BWvyc4zzO8s80136UH%2B8Hg669OCK&X-Amz-Signature=29171bd568ec313d5ce844a35a2cd6c817129c7b02be2a84ea2a4e82fdcb534a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPECE5T%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDug5WI%2FK%2FTkAmA3gljidde59zod3LJnikT2I3w8ZbcsQIhALoR37LabFIamaXELmcSIbxze2awXLN5CdK7aZpcQobFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz%2Fa4lM6uBdnYN3GYq3APv1mnM3MVylG%2BSS7TV1r4R%2F8Hy9F%2BINFJuK8HxLQHdcv8QpG3mx%2B3vKcTCYdi594GenS%2FQgCwkNX7KFSKTdhXwYqZ%2FcsOOyF%2BYK8p0OrB2qqWYp3IUbfprHxu7dTDzKazN1RgVtCoxnXUYD1m5PgfqRKy22LWGt%2BYF1wDuvXTecGq8Jn0JBsVzY5YxTzfUZOAeaU5LN3hUYRlATudvJQOH6D8aBDT8VEML%2FR172IH4C4az2QddFkeLrRQXpN8YumC4rD4BNNvyAUJThV0LN%2FgZIZhdmjVk%2BpAarYgGGk1SOSh8J6dofr3%2Bqa7LQS6oqeoj569jqaiVNdOv8LkVrOwxuDyD0X8Hm%2FSJJ0ZVq%2F%2FpGERMFlNh1MVg7sAuNcTz4SWB8r2KHori8XSQFhuBs3P9mjekB9hc0LbVMhGkIW5viaWClyO1rUdzqZFEfRa%2BPneb7MTlRCBMwpdU0sjqeSbHNmY5p7dSBt0EnI4Kfwdwu2s8Gs4iPPJ0PLcikOdfrbzIfbUjagV3T%2FPBFAAvGXWF98fKl6YFv9oCL83YYQDrN8uWov7oi8OQjDClZnhmAsj%2BLf53rJGXKq62X7GjCxsaIJr%2BFfhuGJ7alsbohq6e%2F3DhwTEOq%2FX%2BtcwMRDD9w5DDBjqkAffMVSlSOCz8EqezqvAXtLne9qAx7APmqqRfE3zk4ElFzkKitcgkaSvuYsioiK7p%2Bouq98jfdgI%2Bka239%2FVeqIMfpHOjHh9j4wqYrA9YJF3etHtSNYt7c5AHMNxwcXWn%2F3X%2BwD6ztQcRJpuXXI84EQTwOtSKbypZTUz9dJHXEJ5FK8C5EH4NwgIPyPgzDEAz%2BWvyc4zzO8s80136UH%2B8Hg669OCK&X-Amz-Signature=a133c868d1deebf0688034f91feb0f6fcca2912be05b4959644c50ad03d23504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPECE5T%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDug5WI%2FK%2FTkAmA3gljidde59zod3LJnikT2I3w8ZbcsQIhALoR37LabFIamaXELmcSIbxze2awXLN5CdK7aZpcQobFKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz%2Fa4lM6uBdnYN3GYq3APv1mnM3MVylG%2BSS7TV1r4R%2F8Hy9F%2BINFJuK8HxLQHdcv8QpG3mx%2B3vKcTCYdi594GenS%2FQgCwkNX7KFSKTdhXwYqZ%2FcsOOyF%2BYK8p0OrB2qqWYp3IUbfprHxu7dTDzKazN1RgVtCoxnXUYD1m5PgfqRKy22LWGt%2BYF1wDuvXTecGq8Jn0JBsVzY5YxTzfUZOAeaU5LN3hUYRlATudvJQOH6D8aBDT8VEML%2FR172IH4C4az2QddFkeLrRQXpN8YumC4rD4BNNvyAUJThV0LN%2FgZIZhdmjVk%2BpAarYgGGk1SOSh8J6dofr3%2Bqa7LQS6oqeoj569jqaiVNdOv8LkVrOwxuDyD0X8Hm%2FSJJ0ZVq%2F%2FpGERMFlNh1MVg7sAuNcTz4SWB8r2KHori8XSQFhuBs3P9mjekB9hc0LbVMhGkIW5viaWClyO1rUdzqZFEfRa%2BPneb7MTlRCBMwpdU0sjqeSbHNmY5p7dSBt0EnI4Kfwdwu2s8Gs4iPPJ0PLcikOdfrbzIfbUjagV3T%2FPBFAAvGXWF98fKl6YFv9oCL83YYQDrN8uWov7oi8OQjDClZnhmAsj%2BLf53rJGXKq62X7GjCxsaIJr%2BFfhuGJ7alsbohq6e%2F3DhwTEOq%2FX%2BtcwMRDD9w5DDBjqkAffMVSlSOCz8EqezqvAXtLne9qAx7APmqqRfE3zk4ElFzkKitcgkaSvuYsioiK7p%2Bouq98jfdgI%2Bka239%2FVeqIMfpHOjHh9j4wqYrA9YJF3etHtSNYt7c5AHMNxwcXWn%2F3X%2BwD6ztQcRJpuXXI84EQTwOtSKbypZTUz9dJHXEJ5FK8C5EH4NwgIPyPgzDEAz%2BWvyc4zzO8s80136UH%2B8Hg669OCK&X-Amz-Signature=c9b895697653dff1b4ffd8a36088ec369172bb03429d056814f4ec1e6e3b5943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
