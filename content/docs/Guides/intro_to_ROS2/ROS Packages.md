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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673GSJ4QM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDF9JavgpN8lDnPI4weYsIVsbmAsa%2BsNdH0BiB31BP%2BzAIhAOAUxu%2FWpwQOMWknoi3jPK7%2BjQqIprkwDiLeCcBDUXE8Kv8DCEQQABoMNjM3NDIzMTgzODA1IgymBpms4L4ly7NKMEUq3ANUida%2FldP9fqm1e7JbP6qw%2BZRe8e9AOeUN82kDmIlzTgDD2EkSu7H45rQe869kk2Gilz%2FE9lUNoZY9CzyKVCx8Sh%2BpGsTT8hRRxCCbp0jt4s5pWaJ5i9meYRdem%2F6ZwAZrkaYU6VYYI2e4%2Fy99ELRnMk6wtfhAWrO1Q8R5aetaJHdc5ft6nusysm%2Bj4AKq7HLk3B4%2BKU%2FuiSZaA9JFVdb%2BEaD17DJEdvw0xF4jvBHjL3lw1uX7zPm5osvmulxGfa1H%2BDQZkok58vKCzA83MNgv4kRuejSEprYTnxeIk8Yv9ydrj%2FCsJypUdkjJcOoaD93o4%2B18GhMTeYBWC0PfgXn8CJd8isSM9TI%2BlGAm1e0F8PFFqESxz6FUsHFTy4cpiZGUCPjGnZtKUWxJzrkRbXt2WLTwk7qkrzJGOyqpJqbFoxy6tCN%2FUoYFenUHaORyL4XGA0j%2BEfjc%2FDQqXrVcJh3KVFes1Std4%2FELGgIMTd%2FbZV74Yfd59tU8KG1NYYe1CtVjxRUUYfKAODmvG%2Fy78ubuJHfp2a9Kz2BX2jWeCozR3R2y37IPXLEPTZxrkB22k1T7lA2TDx5bbZG7RYbcVvlSGsvaz4%2B0nEYh8OLZhkuwEiPxo1cUvaM77dz8zDDSjI29BjqkAc2gLNm7IAhNFQ9Fcc0xSlpTF4LvHO%2BsFLgl84Fkrq0SpPOlsJPC7%2BRirLwrqohkHZScvTNnsZz%2FlIbEaeIagtgIaxmbeTMCxkUo8831cJ9bjxZTBjJoXOpa1s4bhaTAywoBnjzUX4ajThgaqvW39ZviQpCtLOwAFgkgXjG61%2B0oFvMo1bQhIiRdAdun%2B4jeVLdbT%2FiyTT0m8gT6WTi91S%2BTJxgC&X-Amz-Signature=9524ef943428f8a46c97791fc09705120cfc113185cf4734a35b2a416a3c2416&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673GSJ4QM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDF9JavgpN8lDnPI4weYsIVsbmAsa%2BsNdH0BiB31BP%2BzAIhAOAUxu%2FWpwQOMWknoi3jPK7%2BjQqIprkwDiLeCcBDUXE8Kv8DCEQQABoMNjM3NDIzMTgzODA1IgymBpms4L4ly7NKMEUq3ANUida%2FldP9fqm1e7JbP6qw%2BZRe8e9AOeUN82kDmIlzTgDD2EkSu7H45rQe869kk2Gilz%2FE9lUNoZY9CzyKVCx8Sh%2BpGsTT8hRRxCCbp0jt4s5pWaJ5i9meYRdem%2F6ZwAZrkaYU6VYYI2e4%2Fy99ELRnMk6wtfhAWrO1Q8R5aetaJHdc5ft6nusysm%2Bj4AKq7HLk3B4%2BKU%2FuiSZaA9JFVdb%2BEaD17DJEdvw0xF4jvBHjL3lw1uX7zPm5osvmulxGfa1H%2BDQZkok58vKCzA83MNgv4kRuejSEprYTnxeIk8Yv9ydrj%2FCsJypUdkjJcOoaD93o4%2B18GhMTeYBWC0PfgXn8CJd8isSM9TI%2BlGAm1e0F8PFFqESxz6FUsHFTy4cpiZGUCPjGnZtKUWxJzrkRbXt2WLTwk7qkrzJGOyqpJqbFoxy6tCN%2FUoYFenUHaORyL4XGA0j%2BEfjc%2FDQqXrVcJh3KVFes1Std4%2FELGgIMTd%2FbZV74Yfd59tU8KG1NYYe1CtVjxRUUYfKAODmvG%2Fy78ubuJHfp2a9Kz2BX2jWeCozR3R2y37IPXLEPTZxrkB22k1T7lA2TDx5bbZG7RYbcVvlSGsvaz4%2B0nEYh8OLZhkuwEiPxo1cUvaM77dz8zDDSjI29BjqkAc2gLNm7IAhNFQ9Fcc0xSlpTF4LvHO%2BsFLgl84Fkrq0SpPOlsJPC7%2BRirLwrqohkHZScvTNnsZz%2FlIbEaeIagtgIaxmbeTMCxkUo8831cJ9bjxZTBjJoXOpa1s4bhaTAywoBnjzUX4ajThgaqvW39ZviQpCtLOwAFgkgXjG61%2B0oFvMo1bQhIiRdAdun%2B4jeVLdbT%2FiyTT0m8gT6WTi91S%2BTJxgC&X-Amz-Signature=e0b74dea0c0a63e93e93c1b98eb4c4d5f5d676fe3c990add1e87c44aac6d33fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673GSJ4QM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDF9JavgpN8lDnPI4weYsIVsbmAsa%2BsNdH0BiB31BP%2BzAIhAOAUxu%2FWpwQOMWknoi3jPK7%2BjQqIprkwDiLeCcBDUXE8Kv8DCEQQABoMNjM3NDIzMTgzODA1IgymBpms4L4ly7NKMEUq3ANUida%2FldP9fqm1e7JbP6qw%2BZRe8e9AOeUN82kDmIlzTgDD2EkSu7H45rQe869kk2Gilz%2FE9lUNoZY9CzyKVCx8Sh%2BpGsTT8hRRxCCbp0jt4s5pWaJ5i9meYRdem%2F6ZwAZrkaYU6VYYI2e4%2Fy99ELRnMk6wtfhAWrO1Q8R5aetaJHdc5ft6nusysm%2Bj4AKq7HLk3B4%2BKU%2FuiSZaA9JFVdb%2BEaD17DJEdvw0xF4jvBHjL3lw1uX7zPm5osvmulxGfa1H%2BDQZkok58vKCzA83MNgv4kRuejSEprYTnxeIk8Yv9ydrj%2FCsJypUdkjJcOoaD93o4%2B18GhMTeYBWC0PfgXn8CJd8isSM9TI%2BlGAm1e0F8PFFqESxz6FUsHFTy4cpiZGUCPjGnZtKUWxJzrkRbXt2WLTwk7qkrzJGOyqpJqbFoxy6tCN%2FUoYFenUHaORyL4XGA0j%2BEfjc%2FDQqXrVcJh3KVFes1Std4%2FELGgIMTd%2FbZV74Yfd59tU8KG1NYYe1CtVjxRUUYfKAODmvG%2Fy78ubuJHfp2a9Kz2BX2jWeCozR3R2y37IPXLEPTZxrkB22k1T7lA2TDx5bbZG7RYbcVvlSGsvaz4%2B0nEYh8OLZhkuwEiPxo1cUvaM77dz8zDDSjI29BjqkAc2gLNm7IAhNFQ9Fcc0xSlpTF4LvHO%2BsFLgl84Fkrq0SpPOlsJPC7%2BRirLwrqohkHZScvTNnsZz%2FlIbEaeIagtgIaxmbeTMCxkUo8831cJ9bjxZTBjJoXOpa1s4bhaTAywoBnjzUX4ajThgaqvW39ZviQpCtLOwAFgkgXjG61%2B0oFvMo1bQhIiRdAdun%2B4jeVLdbT%2FiyTT0m8gT6WTi91S%2BTJxgC&X-Amz-Signature=7d0da588ffc6aebf239d025983648934b3f23cf5e0e3ba5ce2d308657794d9f4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673GSJ4QM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDF9JavgpN8lDnPI4weYsIVsbmAsa%2BsNdH0BiB31BP%2BzAIhAOAUxu%2FWpwQOMWknoi3jPK7%2BjQqIprkwDiLeCcBDUXE8Kv8DCEQQABoMNjM3NDIzMTgzODA1IgymBpms4L4ly7NKMEUq3ANUida%2FldP9fqm1e7JbP6qw%2BZRe8e9AOeUN82kDmIlzTgDD2EkSu7H45rQe869kk2Gilz%2FE9lUNoZY9CzyKVCx8Sh%2BpGsTT8hRRxCCbp0jt4s5pWaJ5i9meYRdem%2F6ZwAZrkaYU6VYYI2e4%2Fy99ELRnMk6wtfhAWrO1Q8R5aetaJHdc5ft6nusysm%2Bj4AKq7HLk3B4%2BKU%2FuiSZaA9JFVdb%2BEaD17DJEdvw0xF4jvBHjL3lw1uX7zPm5osvmulxGfa1H%2BDQZkok58vKCzA83MNgv4kRuejSEprYTnxeIk8Yv9ydrj%2FCsJypUdkjJcOoaD93o4%2B18GhMTeYBWC0PfgXn8CJd8isSM9TI%2BlGAm1e0F8PFFqESxz6FUsHFTy4cpiZGUCPjGnZtKUWxJzrkRbXt2WLTwk7qkrzJGOyqpJqbFoxy6tCN%2FUoYFenUHaORyL4XGA0j%2BEfjc%2FDQqXrVcJh3KVFes1Std4%2FELGgIMTd%2FbZV74Yfd59tU8KG1NYYe1CtVjxRUUYfKAODmvG%2Fy78ubuJHfp2a9Kz2BX2jWeCozR3R2y37IPXLEPTZxrkB22k1T7lA2TDx5bbZG7RYbcVvlSGsvaz4%2B0nEYh8OLZhkuwEiPxo1cUvaM77dz8zDDSjI29BjqkAc2gLNm7IAhNFQ9Fcc0xSlpTF4LvHO%2BsFLgl84Fkrq0SpPOlsJPC7%2BRirLwrqohkHZScvTNnsZz%2FlIbEaeIagtgIaxmbeTMCxkUo8831cJ9bjxZTBjJoXOpa1s4bhaTAywoBnjzUX4ajThgaqvW39ZviQpCtLOwAFgkgXjG61%2B0oFvMo1bQhIiRdAdun%2B4jeVLdbT%2FiyTT0m8gT6WTi91S%2BTJxgC&X-Amz-Signature=1a5836665e61b6a88d862c4ea8c506d5e05c60ca42a6f848775349c56e693cd5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673GSJ4QM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDF9JavgpN8lDnPI4weYsIVsbmAsa%2BsNdH0BiB31BP%2BzAIhAOAUxu%2FWpwQOMWknoi3jPK7%2BjQqIprkwDiLeCcBDUXE8Kv8DCEQQABoMNjM3NDIzMTgzODA1IgymBpms4L4ly7NKMEUq3ANUida%2FldP9fqm1e7JbP6qw%2BZRe8e9AOeUN82kDmIlzTgDD2EkSu7H45rQe869kk2Gilz%2FE9lUNoZY9CzyKVCx8Sh%2BpGsTT8hRRxCCbp0jt4s5pWaJ5i9meYRdem%2F6ZwAZrkaYU6VYYI2e4%2Fy99ELRnMk6wtfhAWrO1Q8R5aetaJHdc5ft6nusysm%2Bj4AKq7HLk3B4%2BKU%2FuiSZaA9JFVdb%2BEaD17DJEdvw0xF4jvBHjL3lw1uX7zPm5osvmulxGfa1H%2BDQZkok58vKCzA83MNgv4kRuejSEprYTnxeIk8Yv9ydrj%2FCsJypUdkjJcOoaD93o4%2B18GhMTeYBWC0PfgXn8CJd8isSM9TI%2BlGAm1e0F8PFFqESxz6FUsHFTy4cpiZGUCPjGnZtKUWxJzrkRbXt2WLTwk7qkrzJGOyqpJqbFoxy6tCN%2FUoYFenUHaORyL4XGA0j%2BEfjc%2FDQqXrVcJh3KVFes1Std4%2FELGgIMTd%2FbZV74Yfd59tU8KG1NYYe1CtVjxRUUYfKAODmvG%2Fy78ubuJHfp2a9Kz2BX2jWeCozR3R2y37IPXLEPTZxrkB22k1T7lA2TDx5bbZG7RYbcVvlSGsvaz4%2B0nEYh8OLZhkuwEiPxo1cUvaM77dz8zDDSjI29BjqkAc2gLNm7IAhNFQ9Fcc0xSlpTF4LvHO%2BsFLgl84Fkrq0SpPOlsJPC7%2BRirLwrqohkHZScvTNnsZz%2FlIbEaeIagtgIaxmbeTMCxkUo8831cJ9bjxZTBjJoXOpa1s4bhaTAywoBnjzUX4ajThgaqvW39ZviQpCtLOwAFgkgXjG61%2B0oFvMo1bQhIiRdAdun%2B4jeVLdbT%2FiyTT0m8gT6WTi91S%2BTJxgC&X-Amz-Signature=d401dff55eab3b2c8da63f5d164e2bd5911ed3fe78c230c48757b3c518a075f7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673GSJ4QM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDF9JavgpN8lDnPI4weYsIVsbmAsa%2BsNdH0BiB31BP%2BzAIhAOAUxu%2FWpwQOMWknoi3jPK7%2BjQqIprkwDiLeCcBDUXE8Kv8DCEQQABoMNjM3NDIzMTgzODA1IgymBpms4L4ly7NKMEUq3ANUida%2FldP9fqm1e7JbP6qw%2BZRe8e9AOeUN82kDmIlzTgDD2EkSu7H45rQe869kk2Gilz%2FE9lUNoZY9CzyKVCx8Sh%2BpGsTT8hRRxCCbp0jt4s5pWaJ5i9meYRdem%2F6ZwAZrkaYU6VYYI2e4%2Fy99ELRnMk6wtfhAWrO1Q8R5aetaJHdc5ft6nusysm%2Bj4AKq7HLk3B4%2BKU%2FuiSZaA9JFVdb%2BEaD17DJEdvw0xF4jvBHjL3lw1uX7zPm5osvmulxGfa1H%2BDQZkok58vKCzA83MNgv4kRuejSEprYTnxeIk8Yv9ydrj%2FCsJypUdkjJcOoaD93o4%2B18GhMTeYBWC0PfgXn8CJd8isSM9TI%2BlGAm1e0F8PFFqESxz6FUsHFTy4cpiZGUCPjGnZtKUWxJzrkRbXt2WLTwk7qkrzJGOyqpJqbFoxy6tCN%2FUoYFenUHaORyL4XGA0j%2BEfjc%2FDQqXrVcJh3KVFes1Std4%2FELGgIMTd%2FbZV74Yfd59tU8KG1NYYe1CtVjxRUUYfKAODmvG%2Fy78ubuJHfp2a9Kz2BX2jWeCozR3R2y37IPXLEPTZxrkB22k1T7lA2TDx5bbZG7RYbcVvlSGsvaz4%2B0nEYh8OLZhkuwEiPxo1cUvaM77dz8zDDSjI29BjqkAc2gLNm7IAhNFQ9Fcc0xSlpTF4LvHO%2BsFLgl84Fkrq0SpPOlsJPC7%2BRirLwrqohkHZScvTNnsZz%2FlIbEaeIagtgIaxmbeTMCxkUo8831cJ9bjxZTBjJoXOpa1s4bhaTAywoBnjzUX4ajThgaqvW39ZviQpCtLOwAFgkgXjG61%2B0oFvMo1bQhIiRdAdun%2B4jeVLdbT%2FiyTT0m8gT6WTi91S%2BTJxgC&X-Amz-Signature=84fb7e10a75666a02893c7326289c3c86cd892e01b111e7c2ce81cd88e04f62a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673GSJ4QM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDF9JavgpN8lDnPI4weYsIVsbmAsa%2BsNdH0BiB31BP%2BzAIhAOAUxu%2FWpwQOMWknoi3jPK7%2BjQqIprkwDiLeCcBDUXE8Kv8DCEQQABoMNjM3NDIzMTgzODA1IgymBpms4L4ly7NKMEUq3ANUida%2FldP9fqm1e7JbP6qw%2BZRe8e9AOeUN82kDmIlzTgDD2EkSu7H45rQe869kk2Gilz%2FE9lUNoZY9CzyKVCx8Sh%2BpGsTT8hRRxCCbp0jt4s5pWaJ5i9meYRdem%2F6ZwAZrkaYU6VYYI2e4%2Fy99ELRnMk6wtfhAWrO1Q8R5aetaJHdc5ft6nusysm%2Bj4AKq7HLk3B4%2BKU%2FuiSZaA9JFVdb%2BEaD17DJEdvw0xF4jvBHjL3lw1uX7zPm5osvmulxGfa1H%2BDQZkok58vKCzA83MNgv4kRuejSEprYTnxeIk8Yv9ydrj%2FCsJypUdkjJcOoaD93o4%2B18GhMTeYBWC0PfgXn8CJd8isSM9TI%2BlGAm1e0F8PFFqESxz6FUsHFTy4cpiZGUCPjGnZtKUWxJzrkRbXt2WLTwk7qkrzJGOyqpJqbFoxy6tCN%2FUoYFenUHaORyL4XGA0j%2BEfjc%2FDQqXrVcJh3KVFes1Std4%2FELGgIMTd%2FbZV74Yfd59tU8KG1NYYe1CtVjxRUUYfKAODmvG%2Fy78ubuJHfp2a9Kz2BX2jWeCozR3R2y37IPXLEPTZxrkB22k1T7lA2TDx5bbZG7RYbcVvlSGsvaz4%2B0nEYh8OLZhkuwEiPxo1cUvaM77dz8zDDSjI29BjqkAc2gLNm7IAhNFQ9Fcc0xSlpTF4LvHO%2BsFLgl84Fkrq0SpPOlsJPC7%2BRirLwrqohkHZScvTNnsZz%2FlIbEaeIagtgIaxmbeTMCxkUo8831cJ9bjxZTBjJoXOpa1s4bhaTAywoBnjzUX4ajThgaqvW39ZviQpCtLOwAFgkgXjG61%2B0oFvMo1bQhIiRdAdun%2B4jeVLdbT%2FiyTT0m8gT6WTi91S%2BTJxgC&X-Amz-Signature=90dac21256c3b01e0012869b82037910a48968470ee4c7be4e9abce0495de05e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
