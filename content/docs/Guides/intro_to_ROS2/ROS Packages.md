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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP6ALP6A%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIBi2gNkbhNwhAawP4DGvbibxedIEBNf9Y6c7n6weIvh3AiEAjonTE5E%2Bz%2FjVKTZFenO1SAAdB3eKpnF%2FjgQEIyT0AGIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDOgiEUq2pufESZSPZircA63uB7XOqFaitkkmpfR4n7eRxpaltF9G3B1w%2BHpUbWfDQmROXw6SuCQO7gK%2BebNNPe4qS%2FZwBa0%2BWguMjpwCHiEut2sNd7y2vIEE8Ujp77e3qedJ34QyB64OyXbFCvscGFL8AoNIQDF4Mb3zuiKgQJJdX%2B7HhmuTzD0v88AbO1n69uIcDrVJ6CQAUsm2Ch4firAwJYFOmxELI%2FL04T1hs9lJL9JWKVcHZ%2FVaA1XhvxTTG9yEjeb1OE93w9rAgk4%2F%2FtQrYw7bw2SA2jMXR0HqQXZNAOUn97Td1Yfar7iKeAQEwArKwKH7nF9OrOS8bw9%2BzqlAacI8BqgUTsq0LTJHodBQXdNR8jn3TgSBHOUZqY3b1qa12YyKoIBwEoS0p9k0c8hHI3lWRkEDcKW4pPR6GDPvNk46nub03nMTBD1DQaXE3SKRQUpUEhRUD8uioq0jYNBrqGLt82cTI7VyL%2FefwoDEZLemEM5x4Ap2NLFU4g4FbPpwEuuNVOrOJfmNKPObYotSEoaVpf9p%2F3oO%2B4zJhOx6etsVw6opxSzsqtnVt%2FrtaUGnjmg7ke3qOrK454UI52s3dH45Nr79VM9JTkAT6IXxy7%2Bpox4kepOAMmIKljF2iZpHMcPI94LAHxWCMJS68cIGOqUBnIXV60fU2jc4Ovqunz5Qg12Yyeb04MePG%2FqhmcEGMYMBKxJNCuePCfUrb%2B7MUt9hv0eX%2BNzMSfbnuOru4sInUcKKHKiOlhyE%2FNfmnIhwbNag%2FnuuTNS2SKqhN1JdoaNVvo5b4i8ZQps8nEmxeJOclTCkLKMJ3iStLBr8uQMY7i9IkGXcJ37H1M2FBg5z%2BBvnB1CSY9Vo03MQRH1fHvHmXDOBC2Em&X-Amz-Signature=a8ec987977d24884800bd6430a32ea93fa208f655466b5e5156d58d82d7e5c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP6ALP6A%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIBi2gNkbhNwhAawP4DGvbibxedIEBNf9Y6c7n6weIvh3AiEAjonTE5E%2Bz%2FjVKTZFenO1SAAdB3eKpnF%2FjgQEIyT0AGIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDOgiEUq2pufESZSPZircA63uB7XOqFaitkkmpfR4n7eRxpaltF9G3B1w%2BHpUbWfDQmROXw6SuCQO7gK%2BebNNPe4qS%2FZwBa0%2BWguMjpwCHiEut2sNd7y2vIEE8Ujp77e3qedJ34QyB64OyXbFCvscGFL8AoNIQDF4Mb3zuiKgQJJdX%2B7HhmuTzD0v88AbO1n69uIcDrVJ6CQAUsm2Ch4firAwJYFOmxELI%2FL04T1hs9lJL9JWKVcHZ%2FVaA1XhvxTTG9yEjeb1OE93w9rAgk4%2F%2FtQrYw7bw2SA2jMXR0HqQXZNAOUn97Td1Yfar7iKeAQEwArKwKH7nF9OrOS8bw9%2BzqlAacI8BqgUTsq0LTJHodBQXdNR8jn3TgSBHOUZqY3b1qa12YyKoIBwEoS0p9k0c8hHI3lWRkEDcKW4pPR6GDPvNk46nub03nMTBD1DQaXE3SKRQUpUEhRUD8uioq0jYNBrqGLt82cTI7VyL%2FefwoDEZLemEM5x4Ap2NLFU4g4FbPpwEuuNVOrOJfmNKPObYotSEoaVpf9p%2F3oO%2B4zJhOx6etsVw6opxSzsqtnVt%2FrtaUGnjmg7ke3qOrK454UI52s3dH45Nr79VM9JTkAT6IXxy7%2Bpox4kepOAMmIKljF2iZpHMcPI94LAHxWCMJS68cIGOqUBnIXV60fU2jc4Ovqunz5Qg12Yyeb04MePG%2FqhmcEGMYMBKxJNCuePCfUrb%2B7MUt9hv0eX%2BNzMSfbnuOru4sInUcKKHKiOlhyE%2FNfmnIhwbNag%2FnuuTNS2SKqhN1JdoaNVvo5b4i8ZQps8nEmxeJOclTCkLKMJ3iStLBr8uQMY7i9IkGXcJ37H1M2FBg5z%2BBvnB1CSY9Vo03MQRH1fHvHmXDOBC2Em&X-Amz-Signature=d48022468582755f0937f1b47e4ed0c78543f1c8ce93812ce3cfa6b3ea68d682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP6ALP6A%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIBi2gNkbhNwhAawP4DGvbibxedIEBNf9Y6c7n6weIvh3AiEAjonTE5E%2Bz%2FjVKTZFenO1SAAdB3eKpnF%2FjgQEIyT0AGIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDOgiEUq2pufESZSPZircA63uB7XOqFaitkkmpfR4n7eRxpaltF9G3B1w%2BHpUbWfDQmROXw6SuCQO7gK%2BebNNPe4qS%2FZwBa0%2BWguMjpwCHiEut2sNd7y2vIEE8Ujp77e3qedJ34QyB64OyXbFCvscGFL8AoNIQDF4Mb3zuiKgQJJdX%2B7HhmuTzD0v88AbO1n69uIcDrVJ6CQAUsm2Ch4firAwJYFOmxELI%2FL04T1hs9lJL9JWKVcHZ%2FVaA1XhvxTTG9yEjeb1OE93w9rAgk4%2F%2FtQrYw7bw2SA2jMXR0HqQXZNAOUn97Td1Yfar7iKeAQEwArKwKH7nF9OrOS8bw9%2BzqlAacI8BqgUTsq0LTJHodBQXdNR8jn3TgSBHOUZqY3b1qa12YyKoIBwEoS0p9k0c8hHI3lWRkEDcKW4pPR6GDPvNk46nub03nMTBD1DQaXE3SKRQUpUEhRUD8uioq0jYNBrqGLt82cTI7VyL%2FefwoDEZLemEM5x4Ap2NLFU4g4FbPpwEuuNVOrOJfmNKPObYotSEoaVpf9p%2F3oO%2B4zJhOx6etsVw6opxSzsqtnVt%2FrtaUGnjmg7ke3qOrK454UI52s3dH45Nr79VM9JTkAT6IXxy7%2Bpox4kepOAMmIKljF2iZpHMcPI94LAHxWCMJS68cIGOqUBnIXV60fU2jc4Ovqunz5Qg12Yyeb04MePG%2FqhmcEGMYMBKxJNCuePCfUrb%2B7MUt9hv0eX%2BNzMSfbnuOru4sInUcKKHKiOlhyE%2FNfmnIhwbNag%2FnuuTNS2SKqhN1JdoaNVvo5b4i8ZQps8nEmxeJOclTCkLKMJ3iStLBr8uQMY7i9IkGXcJ37H1M2FBg5z%2BBvnB1CSY9Vo03MQRH1fHvHmXDOBC2Em&X-Amz-Signature=7880a44cff3e1b563130cf0e841fdae6251d2715ca0afebb3019fc1a73f53eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP6ALP6A%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIBi2gNkbhNwhAawP4DGvbibxedIEBNf9Y6c7n6weIvh3AiEAjonTE5E%2Bz%2FjVKTZFenO1SAAdB3eKpnF%2FjgQEIyT0AGIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDOgiEUq2pufESZSPZircA63uB7XOqFaitkkmpfR4n7eRxpaltF9G3B1w%2BHpUbWfDQmROXw6SuCQO7gK%2BebNNPe4qS%2FZwBa0%2BWguMjpwCHiEut2sNd7y2vIEE8Ujp77e3qedJ34QyB64OyXbFCvscGFL8AoNIQDF4Mb3zuiKgQJJdX%2B7HhmuTzD0v88AbO1n69uIcDrVJ6CQAUsm2Ch4firAwJYFOmxELI%2FL04T1hs9lJL9JWKVcHZ%2FVaA1XhvxTTG9yEjeb1OE93w9rAgk4%2F%2FtQrYw7bw2SA2jMXR0HqQXZNAOUn97Td1Yfar7iKeAQEwArKwKH7nF9OrOS8bw9%2BzqlAacI8BqgUTsq0LTJHodBQXdNR8jn3TgSBHOUZqY3b1qa12YyKoIBwEoS0p9k0c8hHI3lWRkEDcKW4pPR6GDPvNk46nub03nMTBD1DQaXE3SKRQUpUEhRUD8uioq0jYNBrqGLt82cTI7VyL%2FefwoDEZLemEM5x4Ap2NLFU4g4FbPpwEuuNVOrOJfmNKPObYotSEoaVpf9p%2F3oO%2B4zJhOx6etsVw6opxSzsqtnVt%2FrtaUGnjmg7ke3qOrK454UI52s3dH45Nr79VM9JTkAT6IXxy7%2Bpox4kepOAMmIKljF2iZpHMcPI94LAHxWCMJS68cIGOqUBnIXV60fU2jc4Ovqunz5Qg12Yyeb04MePG%2FqhmcEGMYMBKxJNCuePCfUrb%2B7MUt9hv0eX%2BNzMSfbnuOru4sInUcKKHKiOlhyE%2FNfmnIhwbNag%2FnuuTNS2SKqhN1JdoaNVvo5b4i8ZQps8nEmxeJOclTCkLKMJ3iStLBr8uQMY7i9IkGXcJ37H1M2FBg5z%2BBvnB1CSY9Vo03MQRH1fHvHmXDOBC2Em&X-Amz-Signature=7c8b87d99f23b63d7edc70a5b0f58c595778d571b0bf9a98c024b216ef2ecb9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP6ALP6A%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIBi2gNkbhNwhAawP4DGvbibxedIEBNf9Y6c7n6weIvh3AiEAjonTE5E%2Bz%2FjVKTZFenO1SAAdB3eKpnF%2FjgQEIyT0AGIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDOgiEUq2pufESZSPZircA63uB7XOqFaitkkmpfR4n7eRxpaltF9G3B1w%2BHpUbWfDQmROXw6SuCQO7gK%2BebNNPe4qS%2FZwBa0%2BWguMjpwCHiEut2sNd7y2vIEE8Ujp77e3qedJ34QyB64OyXbFCvscGFL8AoNIQDF4Mb3zuiKgQJJdX%2B7HhmuTzD0v88AbO1n69uIcDrVJ6CQAUsm2Ch4firAwJYFOmxELI%2FL04T1hs9lJL9JWKVcHZ%2FVaA1XhvxTTG9yEjeb1OE93w9rAgk4%2F%2FtQrYw7bw2SA2jMXR0HqQXZNAOUn97Td1Yfar7iKeAQEwArKwKH7nF9OrOS8bw9%2BzqlAacI8BqgUTsq0LTJHodBQXdNR8jn3TgSBHOUZqY3b1qa12YyKoIBwEoS0p9k0c8hHI3lWRkEDcKW4pPR6GDPvNk46nub03nMTBD1DQaXE3SKRQUpUEhRUD8uioq0jYNBrqGLt82cTI7VyL%2FefwoDEZLemEM5x4Ap2NLFU4g4FbPpwEuuNVOrOJfmNKPObYotSEoaVpf9p%2F3oO%2B4zJhOx6etsVw6opxSzsqtnVt%2FrtaUGnjmg7ke3qOrK454UI52s3dH45Nr79VM9JTkAT6IXxy7%2Bpox4kepOAMmIKljF2iZpHMcPI94LAHxWCMJS68cIGOqUBnIXV60fU2jc4Ovqunz5Qg12Yyeb04MePG%2FqhmcEGMYMBKxJNCuePCfUrb%2B7MUt9hv0eX%2BNzMSfbnuOru4sInUcKKHKiOlhyE%2FNfmnIhwbNag%2FnuuTNS2SKqhN1JdoaNVvo5b4i8ZQps8nEmxeJOclTCkLKMJ3iStLBr8uQMY7i9IkGXcJ37H1M2FBg5z%2BBvnB1CSY9Vo03MQRH1fHvHmXDOBC2Em&X-Amz-Signature=1de098adb157c401ef7402ab68055436e70e77d3a79de50717ef401534f636b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP6ALP6A%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIBi2gNkbhNwhAawP4DGvbibxedIEBNf9Y6c7n6weIvh3AiEAjonTE5E%2Bz%2FjVKTZFenO1SAAdB3eKpnF%2FjgQEIyT0AGIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDOgiEUq2pufESZSPZircA63uB7XOqFaitkkmpfR4n7eRxpaltF9G3B1w%2BHpUbWfDQmROXw6SuCQO7gK%2BebNNPe4qS%2FZwBa0%2BWguMjpwCHiEut2sNd7y2vIEE8Ujp77e3qedJ34QyB64OyXbFCvscGFL8AoNIQDF4Mb3zuiKgQJJdX%2B7HhmuTzD0v88AbO1n69uIcDrVJ6CQAUsm2Ch4firAwJYFOmxELI%2FL04T1hs9lJL9JWKVcHZ%2FVaA1XhvxTTG9yEjeb1OE93w9rAgk4%2F%2FtQrYw7bw2SA2jMXR0HqQXZNAOUn97Td1Yfar7iKeAQEwArKwKH7nF9OrOS8bw9%2BzqlAacI8BqgUTsq0LTJHodBQXdNR8jn3TgSBHOUZqY3b1qa12YyKoIBwEoS0p9k0c8hHI3lWRkEDcKW4pPR6GDPvNk46nub03nMTBD1DQaXE3SKRQUpUEhRUD8uioq0jYNBrqGLt82cTI7VyL%2FefwoDEZLemEM5x4Ap2NLFU4g4FbPpwEuuNVOrOJfmNKPObYotSEoaVpf9p%2F3oO%2B4zJhOx6etsVw6opxSzsqtnVt%2FrtaUGnjmg7ke3qOrK454UI52s3dH45Nr79VM9JTkAT6IXxy7%2Bpox4kepOAMmIKljF2iZpHMcPI94LAHxWCMJS68cIGOqUBnIXV60fU2jc4Ovqunz5Qg12Yyeb04MePG%2FqhmcEGMYMBKxJNCuePCfUrb%2B7MUt9hv0eX%2BNzMSfbnuOru4sInUcKKHKiOlhyE%2FNfmnIhwbNag%2FnuuTNS2SKqhN1JdoaNVvo5b4i8ZQps8nEmxeJOclTCkLKMJ3iStLBr8uQMY7i9IkGXcJ37H1M2FBg5z%2BBvnB1CSY9Vo03MQRH1fHvHmXDOBC2Em&X-Amz-Signature=1ac878c094d66864c6b2d50667ed167fb2992cd4aa730ed29005755ac1936deb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP6ALP6A%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIBi2gNkbhNwhAawP4DGvbibxedIEBNf9Y6c7n6weIvh3AiEAjonTE5E%2Bz%2FjVKTZFenO1SAAdB3eKpnF%2FjgQEIyT0AGIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDOgiEUq2pufESZSPZircA63uB7XOqFaitkkmpfR4n7eRxpaltF9G3B1w%2BHpUbWfDQmROXw6SuCQO7gK%2BebNNPe4qS%2FZwBa0%2BWguMjpwCHiEut2sNd7y2vIEE8Ujp77e3qedJ34QyB64OyXbFCvscGFL8AoNIQDF4Mb3zuiKgQJJdX%2B7HhmuTzD0v88AbO1n69uIcDrVJ6CQAUsm2Ch4firAwJYFOmxELI%2FL04T1hs9lJL9JWKVcHZ%2FVaA1XhvxTTG9yEjeb1OE93w9rAgk4%2F%2FtQrYw7bw2SA2jMXR0HqQXZNAOUn97Td1Yfar7iKeAQEwArKwKH7nF9OrOS8bw9%2BzqlAacI8BqgUTsq0LTJHodBQXdNR8jn3TgSBHOUZqY3b1qa12YyKoIBwEoS0p9k0c8hHI3lWRkEDcKW4pPR6GDPvNk46nub03nMTBD1DQaXE3SKRQUpUEhRUD8uioq0jYNBrqGLt82cTI7VyL%2FefwoDEZLemEM5x4Ap2NLFU4g4FbPpwEuuNVOrOJfmNKPObYotSEoaVpf9p%2F3oO%2B4zJhOx6etsVw6opxSzsqtnVt%2FrtaUGnjmg7ke3qOrK454UI52s3dH45Nr79VM9JTkAT6IXxy7%2Bpox4kepOAMmIKljF2iZpHMcPI94LAHxWCMJS68cIGOqUBnIXV60fU2jc4Ovqunz5Qg12Yyeb04MePG%2FqhmcEGMYMBKxJNCuePCfUrb%2B7MUt9hv0eX%2BNzMSfbnuOru4sInUcKKHKiOlhyE%2FNfmnIhwbNag%2FnuuTNS2SKqhN1JdoaNVvo5b4i8ZQps8nEmxeJOclTCkLKMJ3iStLBr8uQMY7i9IkGXcJ37H1M2FBg5z%2BBvnB1CSY9Vo03MQRH1fHvHmXDOBC2Em&X-Amz-Signature=5ae9f5224a017db744a80cba507437d37be1404b6fd0576a18192a17ce3624c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
