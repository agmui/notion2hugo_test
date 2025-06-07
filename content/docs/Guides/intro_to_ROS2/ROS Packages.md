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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIKEUBUI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQfU9fV2Tyc7C5ajvs8FbbARCYdSWQ9Nzgd4YqK31QYQIhAKreYE4XiIANdckCGKHcjiJ0kQlD92HtdH%2BjOOM4n6Z8Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwB59vI%2Bn5bU7a4L4kq3AO4XQUYa02hZtpZ0vai32fCJ7oXvdZoagGBhjciiLaHWPo2iLZwdEakI2TBr8%2BQGelB91UDAUTjuXvQZPn7PaKyBqtqmvf2HfIfAkEMH8H%2FrnXPOK44hwHPNz662xUSgD74OHynGZEfT8LoZ%2FZgDBu%2BEDBw1msbCEYyW0ZeS5EVCkxlfoP8VeUTjLI17qIe%2F9aWwi7v%2FubnKcj14jJk1UbK1Wla9nRr72P6FGO0BSXLf3aOM2w5u%2FofjfmWH2Jz8A4faWBjhGBjCMg0WEbSafuRXnMLyh2iAdaQ9SsTE02m6O0V5%2FMFqjB2sAIyGUPzeLtb7UGbVGQjuI3chtvzR75QmWOhtdi9wiFkgzc3eHhPk%2BfmRyZy0z%2Fqh%2Fok1y%2Bc5oueyMptHHaSZy8SRrKozXPIwTgcBp50cn5eoNrh8IF54e0XhXMpxBMjV5Uy6cd3nA%2FuG%2FI5W8beMTDkTr%2Bfurzrt3dzh%2FPswcRLqvJ64THjxTMyqwXp361cOJBhiJptq7pa6yrt7%2BsN2su64K92o5g0SH%2FfTmLFoNlbOe%2BzpWdfeGMVIv1QQFo5s4yqPuiywd438vhfO3oXGCtKxgdK%2FYe%2FmBieAFTsZ7sTS3le7Y9lWAJTEsiqhHPQcmIz9zD1gJHCBjqkATiobK5kmWvHgRKMcjWUGv%2BdE1YlCWvxCAQ4g%2F%2FmRLfyDyzVQ%2BA2jCP7RBtJ%2FBegh29nY%2BkHIiJcoRZ%2BGPLoaahRehuc7JX%2FTSLQL0CWbPrJ6MzcB1G%2FZyefssCN48YBQoq2lDkv83zezcHwZZ5J3HK0mbBfcP4c7XGnkqdn3yiek1oVZ4zUSveQTRL3aJTgeT%2BS1jB6vKd8ve%2BTdeYGYfocd44W&X-Amz-Signature=5acd7f02dce462c298e87b74d9b1caa4f40e88a5db712ccd9e53c0e90aaa0725&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIKEUBUI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQfU9fV2Tyc7C5ajvs8FbbARCYdSWQ9Nzgd4YqK31QYQIhAKreYE4XiIANdckCGKHcjiJ0kQlD92HtdH%2BjOOM4n6Z8Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwB59vI%2Bn5bU7a4L4kq3AO4XQUYa02hZtpZ0vai32fCJ7oXvdZoagGBhjciiLaHWPo2iLZwdEakI2TBr8%2BQGelB91UDAUTjuXvQZPn7PaKyBqtqmvf2HfIfAkEMH8H%2FrnXPOK44hwHPNz662xUSgD74OHynGZEfT8LoZ%2FZgDBu%2BEDBw1msbCEYyW0ZeS5EVCkxlfoP8VeUTjLI17qIe%2F9aWwi7v%2FubnKcj14jJk1UbK1Wla9nRr72P6FGO0BSXLf3aOM2w5u%2FofjfmWH2Jz8A4faWBjhGBjCMg0WEbSafuRXnMLyh2iAdaQ9SsTE02m6O0V5%2FMFqjB2sAIyGUPzeLtb7UGbVGQjuI3chtvzR75QmWOhtdi9wiFkgzc3eHhPk%2BfmRyZy0z%2Fqh%2Fok1y%2Bc5oueyMptHHaSZy8SRrKozXPIwTgcBp50cn5eoNrh8IF54e0XhXMpxBMjV5Uy6cd3nA%2FuG%2FI5W8beMTDkTr%2Bfurzrt3dzh%2FPswcRLqvJ64THjxTMyqwXp361cOJBhiJptq7pa6yrt7%2BsN2su64K92o5g0SH%2FfTmLFoNlbOe%2BzpWdfeGMVIv1QQFo5s4yqPuiywd438vhfO3oXGCtKxgdK%2FYe%2FmBieAFTsZ7sTS3le7Y9lWAJTEsiqhHPQcmIz9zD1gJHCBjqkATiobK5kmWvHgRKMcjWUGv%2BdE1YlCWvxCAQ4g%2F%2FmRLfyDyzVQ%2BA2jCP7RBtJ%2FBegh29nY%2BkHIiJcoRZ%2BGPLoaahRehuc7JX%2FTSLQL0CWbPrJ6MzcB1G%2FZyefssCN48YBQoq2lDkv83zezcHwZZ5J3HK0mbBfcP4c7XGnkqdn3yiek1oVZ4zUSveQTRL3aJTgeT%2BS1jB6vKd8ve%2BTdeYGYfocd44W&X-Amz-Signature=0c5258df2547287367ac401afe41195dd14639f2f2055f6e78bf86aa8d808a0a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIKEUBUI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQfU9fV2Tyc7C5ajvs8FbbARCYdSWQ9Nzgd4YqK31QYQIhAKreYE4XiIANdckCGKHcjiJ0kQlD92HtdH%2BjOOM4n6Z8Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwB59vI%2Bn5bU7a4L4kq3AO4XQUYa02hZtpZ0vai32fCJ7oXvdZoagGBhjciiLaHWPo2iLZwdEakI2TBr8%2BQGelB91UDAUTjuXvQZPn7PaKyBqtqmvf2HfIfAkEMH8H%2FrnXPOK44hwHPNz662xUSgD74OHynGZEfT8LoZ%2FZgDBu%2BEDBw1msbCEYyW0ZeS5EVCkxlfoP8VeUTjLI17qIe%2F9aWwi7v%2FubnKcj14jJk1UbK1Wla9nRr72P6FGO0BSXLf3aOM2w5u%2FofjfmWH2Jz8A4faWBjhGBjCMg0WEbSafuRXnMLyh2iAdaQ9SsTE02m6O0V5%2FMFqjB2sAIyGUPzeLtb7UGbVGQjuI3chtvzR75QmWOhtdi9wiFkgzc3eHhPk%2BfmRyZy0z%2Fqh%2Fok1y%2Bc5oueyMptHHaSZy8SRrKozXPIwTgcBp50cn5eoNrh8IF54e0XhXMpxBMjV5Uy6cd3nA%2FuG%2FI5W8beMTDkTr%2Bfurzrt3dzh%2FPswcRLqvJ64THjxTMyqwXp361cOJBhiJptq7pa6yrt7%2BsN2su64K92o5g0SH%2FfTmLFoNlbOe%2BzpWdfeGMVIv1QQFo5s4yqPuiywd438vhfO3oXGCtKxgdK%2FYe%2FmBieAFTsZ7sTS3le7Y9lWAJTEsiqhHPQcmIz9zD1gJHCBjqkATiobK5kmWvHgRKMcjWUGv%2BdE1YlCWvxCAQ4g%2F%2FmRLfyDyzVQ%2BA2jCP7RBtJ%2FBegh29nY%2BkHIiJcoRZ%2BGPLoaahRehuc7JX%2FTSLQL0CWbPrJ6MzcB1G%2FZyefssCN48YBQoq2lDkv83zezcHwZZ5J3HK0mbBfcP4c7XGnkqdn3yiek1oVZ4zUSveQTRL3aJTgeT%2BS1jB6vKd8ve%2BTdeYGYfocd44W&X-Amz-Signature=8226ea5256f2a63fd39e26b28dc5e62e75b12739a742f9d6ffcd29576c271a36&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIKEUBUI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQfU9fV2Tyc7C5ajvs8FbbARCYdSWQ9Nzgd4YqK31QYQIhAKreYE4XiIANdckCGKHcjiJ0kQlD92HtdH%2BjOOM4n6Z8Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwB59vI%2Bn5bU7a4L4kq3AO4XQUYa02hZtpZ0vai32fCJ7oXvdZoagGBhjciiLaHWPo2iLZwdEakI2TBr8%2BQGelB91UDAUTjuXvQZPn7PaKyBqtqmvf2HfIfAkEMH8H%2FrnXPOK44hwHPNz662xUSgD74OHynGZEfT8LoZ%2FZgDBu%2BEDBw1msbCEYyW0ZeS5EVCkxlfoP8VeUTjLI17qIe%2F9aWwi7v%2FubnKcj14jJk1UbK1Wla9nRr72P6FGO0BSXLf3aOM2w5u%2FofjfmWH2Jz8A4faWBjhGBjCMg0WEbSafuRXnMLyh2iAdaQ9SsTE02m6O0V5%2FMFqjB2sAIyGUPzeLtb7UGbVGQjuI3chtvzR75QmWOhtdi9wiFkgzc3eHhPk%2BfmRyZy0z%2Fqh%2Fok1y%2Bc5oueyMptHHaSZy8SRrKozXPIwTgcBp50cn5eoNrh8IF54e0XhXMpxBMjV5Uy6cd3nA%2FuG%2FI5W8beMTDkTr%2Bfurzrt3dzh%2FPswcRLqvJ64THjxTMyqwXp361cOJBhiJptq7pa6yrt7%2BsN2su64K92o5g0SH%2FfTmLFoNlbOe%2BzpWdfeGMVIv1QQFo5s4yqPuiywd438vhfO3oXGCtKxgdK%2FYe%2FmBieAFTsZ7sTS3le7Y9lWAJTEsiqhHPQcmIz9zD1gJHCBjqkATiobK5kmWvHgRKMcjWUGv%2BdE1YlCWvxCAQ4g%2F%2FmRLfyDyzVQ%2BA2jCP7RBtJ%2FBegh29nY%2BkHIiJcoRZ%2BGPLoaahRehuc7JX%2FTSLQL0CWbPrJ6MzcB1G%2FZyefssCN48YBQoq2lDkv83zezcHwZZ5J3HK0mbBfcP4c7XGnkqdn3yiek1oVZ4zUSveQTRL3aJTgeT%2BS1jB6vKd8ve%2BTdeYGYfocd44W&X-Amz-Signature=43fd2ea7f12201ffda39147ee1b211d840dbfae4ef26210db8bca60c4e16a615&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIKEUBUI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQfU9fV2Tyc7C5ajvs8FbbARCYdSWQ9Nzgd4YqK31QYQIhAKreYE4XiIANdckCGKHcjiJ0kQlD92HtdH%2BjOOM4n6Z8Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwB59vI%2Bn5bU7a4L4kq3AO4XQUYa02hZtpZ0vai32fCJ7oXvdZoagGBhjciiLaHWPo2iLZwdEakI2TBr8%2BQGelB91UDAUTjuXvQZPn7PaKyBqtqmvf2HfIfAkEMH8H%2FrnXPOK44hwHPNz662xUSgD74OHynGZEfT8LoZ%2FZgDBu%2BEDBw1msbCEYyW0ZeS5EVCkxlfoP8VeUTjLI17qIe%2F9aWwi7v%2FubnKcj14jJk1UbK1Wla9nRr72P6FGO0BSXLf3aOM2w5u%2FofjfmWH2Jz8A4faWBjhGBjCMg0WEbSafuRXnMLyh2iAdaQ9SsTE02m6O0V5%2FMFqjB2sAIyGUPzeLtb7UGbVGQjuI3chtvzR75QmWOhtdi9wiFkgzc3eHhPk%2BfmRyZy0z%2Fqh%2Fok1y%2Bc5oueyMptHHaSZy8SRrKozXPIwTgcBp50cn5eoNrh8IF54e0XhXMpxBMjV5Uy6cd3nA%2FuG%2FI5W8beMTDkTr%2Bfurzrt3dzh%2FPswcRLqvJ64THjxTMyqwXp361cOJBhiJptq7pa6yrt7%2BsN2su64K92o5g0SH%2FfTmLFoNlbOe%2BzpWdfeGMVIv1QQFo5s4yqPuiywd438vhfO3oXGCtKxgdK%2FYe%2FmBieAFTsZ7sTS3le7Y9lWAJTEsiqhHPQcmIz9zD1gJHCBjqkATiobK5kmWvHgRKMcjWUGv%2BdE1YlCWvxCAQ4g%2F%2FmRLfyDyzVQ%2BA2jCP7RBtJ%2FBegh29nY%2BkHIiJcoRZ%2BGPLoaahRehuc7JX%2FTSLQL0CWbPrJ6MzcB1G%2FZyefssCN48YBQoq2lDkv83zezcHwZZ5J3HK0mbBfcP4c7XGnkqdn3yiek1oVZ4zUSveQTRL3aJTgeT%2BS1jB6vKd8ve%2BTdeYGYfocd44W&X-Amz-Signature=91b7187bddf72a180ec22f008671b8720c7627ed1700ddf874ee704415c979fe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIKEUBUI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQfU9fV2Tyc7C5ajvs8FbbARCYdSWQ9Nzgd4YqK31QYQIhAKreYE4XiIANdckCGKHcjiJ0kQlD92HtdH%2BjOOM4n6Z8Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwB59vI%2Bn5bU7a4L4kq3AO4XQUYa02hZtpZ0vai32fCJ7oXvdZoagGBhjciiLaHWPo2iLZwdEakI2TBr8%2BQGelB91UDAUTjuXvQZPn7PaKyBqtqmvf2HfIfAkEMH8H%2FrnXPOK44hwHPNz662xUSgD74OHynGZEfT8LoZ%2FZgDBu%2BEDBw1msbCEYyW0ZeS5EVCkxlfoP8VeUTjLI17qIe%2F9aWwi7v%2FubnKcj14jJk1UbK1Wla9nRr72P6FGO0BSXLf3aOM2w5u%2FofjfmWH2Jz8A4faWBjhGBjCMg0WEbSafuRXnMLyh2iAdaQ9SsTE02m6O0V5%2FMFqjB2sAIyGUPzeLtb7UGbVGQjuI3chtvzR75QmWOhtdi9wiFkgzc3eHhPk%2BfmRyZy0z%2Fqh%2Fok1y%2Bc5oueyMptHHaSZy8SRrKozXPIwTgcBp50cn5eoNrh8IF54e0XhXMpxBMjV5Uy6cd3nA%2FuG%2FI5W8beMTDkTr%2Bfurzrt3dzh%2FPswcRLqvJ64THjxTMyqwXp361cOJBhiJptq7pa6yrt7%2BsN2su64K92o5g0SH%2FfTmLFoNlbOe%2BzpWdfeGMVIv1QQFo5s4yqPuiywd438vhfO3oXGCtKxgdK%2FYe%2FmBieAFTsZ7sTS3le7Y9lWAJTEsiqhHPQcmIz9zD1gJHCBjqkATiobK5kmWvHgRKMcjWUGv%2BdE1YlCWvxCAQ4g%2F%2FmRLfyDyzVQ%2BA2jCP7RBtJ%2FBegh29nY%2BkHIiJcoRZ%2BGPLoaahRehuc7JX%2FTSLQL0CWbPrJ6MzcB1G%2FZyefssCN48YBQoq2lDkv83zezcHwZZ5J3HK0mbBfcP4c7XGnkqdn3yiek1oVZ4zUSveQTRL3aJTgeT%2BS1jB6vKd8ve%2BTdeYGYfocd44W&X-Amz-Signature=2c1bc7f1355a33e5d356bda93645b080f79a226d77dd7ad6aa68963df77d17a9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIKEUBUI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQfU9fV2Tyc7C5ajvs8FbbARCYdSWQ9Nzgd4YqK31QYQIhAKreYE4XiIANdckCGKHcjiJ0kQlD92HtdH%2BjOOM4n6Z8Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwB59vI%2Bn5bU7a4L4kq3AO4XQUYa02hZtpZ0vai32fCJ7oXvdZoagGBhjciiLaHWPo2iLZwdEakI2TBr8%2BQGelB91UDAUTjuXvQZPn7PaKyBqtqmvf2HfIfAkEMH8H%2FrnXPOK44hwHPNz662xUSgD74OHynGZEfT8LoZ%2FZgDBu%2BEDBw1msbCEYyW0ZeS5EVCkxlfoP8VeUTjLI17qIe%2F9aWwi7v%2FubnKcj14jJk1UbK1Wla9nRr72P6FGO0BSXLf3aOM2w5u%2FofjfmWH2Jz8A4faWBjhGBjCMg0WEbSafuRXnMLyh2iAdaQ9SsTE02m6O0V5%2FMFqjB2sAIyGUPzeLtb7UGbVGQjuI3chtvzR75QmWOhtdi9wiFkgzc3eHhPk%2BfmRyZy0z%2Fqh%2Fok1y%2Bc5oueyMptHHaSZy8SRrKozXPIwTgcBp50cn5eoNrh8IF54e0XhXMpxBMjV5Uy6cd3nA%2FuG%2FI5W8beMTDkTr%2Bfurzrt3dzh%2FPswcRLqvJ64THjxTMyqwXp361cOJBhiJptq7pa6yrt7%2BsN2su64K92o5g0SH%2FfTmLFoNlbOe%2BzpWdfeGMVIv1QQFo5s4yqPuiywd438vhfO3oXGCtKxgdK%2FYe%2FmBieAFTsZ7sTS3le7Y9lWAJTEsiqhHPQcmIz9zD1gJHCBjqkATiobK5kmWvHgRKMcjWUGv%2BdE1YlCWvxCAQ4g%2F%2FmRLfyDyzVQ%2BA2jCP7RBtJ%2FBegh29nY%2BkHIiJcoRZ%2BGPLoaahRehuc7JX%2FTSLQL0CWbPrJ6MzcB1G%2FZyefssCN48YBQoq2lDkv83zezcHwZZ5J3HK0mbBfcP4c7XGnkqdn3yiek1oVZ4zUSveQTRL3aJTgeT%2BS1jB6vKd8ve%2BTdeYGYfocd44W&X-Amz-Signature=265da9fadbf647b22528e5dc2e977927c8b319677a1dc959ca24fff11b4e8b52&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
