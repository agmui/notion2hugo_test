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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKEVSJJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFovSizSf3u1wCPejpyaJ5I23TfN%2BMJoBrrV1s0JH2PqAiEAmGox9tdgSGilVONzTGJYzjnlCI%2F8idT4zW0UGuZ89WYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwSgwv08gTU78%2B4FyrcA5I00nYSG8HKp1OM7QoFJphpLnob7InL0REedzRjZ0CdFUYWidI0VcO1NOBKjXwWTsXvmMUXtnZ7DVKCTkFmj15ZtlmtAJIguIUvMjRntGbFLkzw4EUFw3yVohF%2BZuM%2FWc1iQh9rJZduVGM8Zo0Pbd%2F3T4h7TdR4sE3WYNwPOVOdxyJ3iaI4YPxVlTEOxjaK5%2FJWKWvxdLU50b4TObAhAS8YLj3XJvI34AKEGg%2BQ2ZGBV2KVmabKPifP8l%2BcMRgJLv2B1Lt6hZF6vOHWBSSfhqcS2FyawQ4S76Xcaxomtbt3xC2csRnWCffrVZ4fs%2FfoZZht2tFZWQCB2q9vk0kHOUZBRH09oHXflo0jbxjlpkEzwEJtcnqXnVBv8WjzUe9vYvAH%2B0GLt6cTRfry5onYNTcnwTYy5XcyBi8mq8pk5yoiV%2BLBCddCKlkgjXg50nsSKETUdscKR1jZN4y%2FIxinrQCytn%2BgDN7mDnoiFLxB2rkCen5xNoqEeptO2bbZhA0F4i4a7eH3%2FUiu3p3kwjcEPxgq%2Bo0VjwK2A1YKCRG2HyqUE6yimyc7S%2FvYOe6HthV42l7Snj8JmFBGY7LMHcEft9%2Fg0npxFwcY01MgK%2ByptY3VPlqV0Um9mpUyh99dMJiH%2FsAGOqUBSCVPF1Xt1PoFt1g0rhSu7wpGAL726FST8u3Cw%2BTtCOY7kjCH4Gv9%2FqSFcZR%2FG0nRTzHwKM%2BblYm2d2PWjhGawFD76b1CueVuQUvcuZjXuInYxcg7saI7r5WixKST5YlI3osK6fif2QCkePl1R14nDI8ISzrAbUDUyEs5meUENjakyNhB4un9KSZCFEa07nCXFz99d1BDJPjjCVwKB3L%2BccLJosEo&X-Amz-Signature=a459ced50bf5a5f6e1e2fcefe150a90e6eca8ad8b308e7f709d7004500556db1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKEVSJJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFovSizSf3u1wCPejpyaJ5I23TfN%2BMJoBrrV1s0JH2PqAiEAmGox9tdgSGilVONzTGJYzjnlCI%2F8idT4zW0UGuZ89WYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwSgwv08gTU78%2B4FyrcA5I00nYSG8HKp1OM7QoFJphpLnob7InL0REedzRjZ0CdFUYWidI0VcO1NOBKjXwWTsXvmMUXtnZ7DVKCTkFmj15ZtlmtAJIguIUvMjRntGbFLkzw4EUFw3yVohF%2BZuM%2FWc1iQh9rJZduVGM8Zo0Pbd%2F3T4h7TdR4sE3WYNwPOVOdxyJ3iaI4YPxVlTEOxjaK5%2FJWKWvxdLU50b4TObAhAS8YLj3XJvI34AKEGg%2BQ2ZGBV2KVmabKPifP8l%2BcMRgJLv2B1Lt6hZF6vOHWBSSfhqcS2FyawQ4S76Xcaxomtbt3xC2csRnWCffrVZ4fs%2FfoZZht2tFZWQCB2q9vk0kHOUZBRH09oHXflo0jbxjlpkEzwEJtcnqXnVBv8WjzUe9vYvAH%2B0GLt6cTRfry5onYNTcnwTYy5XcyBi8mq8pk5yoiV%2BLBCddCKlkgjXg50nsSKETUdscKR1jZN4y%2FIxinrQCytn%2BgDN7mDnoiFLxB2rkCen5xNoqEeptO2bbZhA0F4i4a7eH3%2FUiu3p3kwjcEPxgq%2Bo0VjwK2A1YKCRG2HyqUE6yimyc7S%2FvYOe6HthV42l7Snj8JmFBGY7LMHcEft9%2Fg0npxFwcY01MgK%2ByptY3VPlqV0Um9mpUyh99dMJiH%2FsAGOqUBSCVPF1Xt1PoFt1g0rhSu7wpGAL726FST8u3Cw%2BTtCOY7kjCH4Gv9%2FqSFcZR%2FG0nRTzHwKM%2BblYm2d2PWjhGawFD76b1CueVuQUvcuZjXuInYxcg7saI7r5WixKST5YlI3osK6fif2QCkePl1R14nDI8ISzrAbUDUyEs5meUENjakyNhB4un9KSZCFEa07nCXFz99d1BDJPjjCVwKB3L%2BccLJosEo&X-Amz-Signature=5dbc159e72491cef25ccaf4376890bccadb5dc650d33cc44858905fd72be8be1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKEVSJJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFovSizSf3u1wCPejpyaJ5I23TfN%2BMJoBrrV1s0JH2PqAiEAmGox9tdgSGilVONzTGJYzjnlCI%2F8idT4zW0UGuZ89WYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwSgwv08gTU78%2B4FyrcA5I00nYSG8HKp1OM7QoFJphpLnob7InL0REedzRjZ0CdFUYWidI0VcO1NOBKjXwWTsXvmMUXtnZ7DVKCTkFmj15ZtlmtAJIguIUvMjRntGbFLkzw4EUFw3yVohF%2BZuM%2FWc1iQh9rJZduVGM8Zo0Pbd%2F3T4h7TdR4sE3WYNwPOVOdxyJ3iaI4YPxVlTEOxjaK5%2FJWKWvxdLU50b4TObAhAS8YLj3XJvI34AKEGg%2BQ2ZGBV2KVmabKPifP8l%2BcMRgJLv2B1Lt6hZF6vOHWBSSfhqcS2FyawQ4S76Xcaxomtbt3xC2csRnWCffrVZ4fs%2FfoZZht2tFZWQCB2q9vk0kHOUZBRH09oHXflo0jbxjlpkEzwEJtcnqXnVBv8WjzUe9vYvAH%2B0GLt6cTRfry5onYNTcnwTYy5XcyBi8mq8pk5yoiV%2BLBCddCKlkgjXg50nsSKETUdscKR1jZN4y%2FIxinrQCytn%2BgDN7mDnoiFLxB2rkCen5xNoqEeptO2bbZhA0F4i4a7eH3%2FUiu3p3kwjcEPxgq%2Bo0VjwK2A1YKCRG2HyqUE6yimyc7S%2FvYOe6HthV42l7Snj8JmFBGY7LMHcEft9%2Fg0npxFwcY01MgK%2ByptY3VPlqV0Um9mpUyh99dMJiH%2FsAGOqUBSCVPF1Xt1PoFt1g0rhSu7wpGAL726FST8u3Cw%2BTtCOY7kjCH4Gv9%2FqSFcZR%2FG0nRTzHwKM%2BblYm2d2PWjhGawFD76b1CueVuQUvcuZjXuInYxcg7saI7r5WixKST5YlI3osK6fif2QCkePl1R14nDI8ISzrAbUDUyEs5meUENjakyNhB4un9KSZCFEa07nCXFz99d1BDJPjjCVwKB3L%2BccLJosEo&X-Amz-Signature=4ce1c03c798b28289c12f14ec8f65b52f5e069a4a0293f72799532265cdaa4fc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKEVSJJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFovSizSf3u1wCPejpyaJ5I23TfN%2BMJoBrrV1s0JH2PqAiEAmGox9tdgSGilVONzTGJYzjnlCI%2F8idT4zW0UGuZ89WYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwSgwv08gTU78%2B4FyrcA5I00nYSG8HKp1OM7QoFJphpLnob7InL0REedzRjZ0CdFUYWidI0VcO1NOBKjXwWTsXvmMUXtnZ7DVKCTkFmj15ZtlmtAJIguIUvMjRntGbFLkzw4EUFw3yVohF%2BZuM%2FWc1iQh9rJZduVGM8Zo0Pbd%2F3T4h7TdR4sE3WYNwPOVOdxyJ3iaI4YPxVlTEOxjaK5%2FJWKWvxdLU50b4TObAhAS8YLj3XJvI34AKEGg%2BQ2ZGBV2KVmabKPifP8l%2BcMRgJLv2B1Lt6hZF6vOHWBSSfhqcS2FyawQ4S76Xcaxomtbt3xC2csRnWCffrVZ4fs%2FfoZZht2tFZWQCB2q9vk0kHOUZBRH09oHXflo0jbxjlpkEzwEJtcnqXnVBv8WjzUe9vYvAH%2B0GLt6cTRfry5onYNTcnwTYy5XcyBi8mq8pk5yoiV%2BLBCddCKlkgjXg50nsSKETUdscKR1jZN4y%2FIxinrQCytn%2BgDN7mDnoiFLxB2rkCen5xNoqEeptO2bbZhA0F4i4a7eH3%2FUiu3p3kwjcEPxgq%2Bo0VjwK2A1YKCRG2HyqUE6yimyc7S%2FvYOe6HthV42l7Snj8JmFBGY7LMHcEft9%2Fg0npxFwcY01MgK%2ByptY3VPlqV0Um9mpUyh99dMJiH%2FsAGOqUBSCVPF1Xt1PoFt1g0rhSu7wpGAL726FST8u3Cw%2BTtCOY7kjCH4Gv9%2FqSFcZR%2FG0nRTzHwKM%2BblYm2d2PWjhGawFD76b1CueVuQUvcuZjXuInYxcg7saI7r5WixKST5YlI3osK6fif2QCkePl1R14nDI8ISzrAbUDUyEs5meUENjakyNhB4un9KSZCFEa07nCXFz99d1BDJPjjCVwKB3L%2BccLJosEo&X-Amz-Signature=1eee10ef9531136c7a50f3de89dc7cfa5d7c135cc5c7c678bc555ff7a1e3bdbc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKEVSJJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFovSizSf3u1wCPejpyaJ5I23TfN%2BMJoBrrV1s0JH2PqAiEAmGox9tdgSGilVONzTGJYzjnlCI%2F8idT4zW0UGuZ89WYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwSgwv08gTU78%2B4FyrcA5I00nYSG8HKp1OM7QoFJphpLnob7InL0REedzRjZ0CdFUYWidI0VcO1NOBKjXwWTsXvmMUXtnZ7DVKCTkFmj15ZtlmtAJIguIUvMjRntGbFLkzw4EUFw3yVohF%2BZuM%2FWc1iQh9rJZduVGM8Zo0Pbd%2F3T4h7TdR4sE3WYNwPOVOdxyJ3iaI4YPxVlTEOxjaK5%2FJWKWvxdLU50b4TObAhAS8YLj3XJvI34AKEGg%2BQ2ZGBV2KVmabKPifP8l%2BcMRgJLv2B1Lt6hZF6vOHWBSSfhqcS2FyawQ4S76Xcaxomtbt3xC2csRnWCffrVZ4fs%2FfoZZht2tFZWQCB2q9vk0kHOUZBRH09oHXflo0jbxjlpkEzwEJtcnqXnVBv8WjzUe9vYvAH%2B0GLt6cTRfry5onYNTcnwTYy5XcyBi8mq8pk5yoiV%2BLBCddCKlkgjXg50nsSKETUdscKR1jZN4y%2FIxinrQCytn%2BgDN7mDnoiFLxB2rkCen5xNoqEeptO2bbZhA0F4i4a7eH3%2FUiu3p3kwjcEPxgq%2Bo0VjwK2A1YKCRG2HyqUE6yimyc7S%2FvYOe6HthV42l7Snj8JmFBGY7LMHcEft9%2Fg0npxFwcY01MgK%2ByptY3VPlqV0Um9mpUyh99dMJiH%2FsAGOqUBSCVPF1Xt1PoFt1g0rhSu7wpGAL726FST8u3Cw%2BTtCOY7kjCH4Gv9%2FqSFcZR%2FG0nRTzHwKM%2BblYm2d2PWjhGawFD76b1CueVuQUvcuZjXuInYxcg7saI7r5WixKST5YlI3osK6fif2QCkePl1R14nDI8ISzrAbUDUyEs5meUENjakyNhB4un9KSZCFEa07nCXFz99d1BDJPjjCVwKB3L%2BccLJosEo&X-Amz-Signature=8ffe24bd76affde246c7421916931522c57c0dad503c3c130d7595f1a1af7a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKEVSJJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFovSizSf3u1wCPejpyaJ5I23TfN%2BMJoBrrV1s0JH2PqAiEAmGox9tdgSGilVONzTGJYzjnlCI%2F8idT4zW0UGuZ89WYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwSgwv08gTU78%2B4FyrcA5I00nYSG8HKp1OM7QoFJphpLnob7InL0REedzRjZ0CdFUYWidI0VcO1NOBKjXwWTsXvmMUXtnZ7DVKCTkFmj15ZtlmtAJIguIUvMjRntGbFLkzw4EUFw3yVohF%2BZuM%2FWc1iQh9rJZduVGM8Zo0Pbd%2F3T4h7TdR4sE3WYNwPOVOdxyJ3iaI4YPxVlTEOxjaK5%2FJWKWvxdLU50b4TObAhAS8YLj3XJvI34AKEGg%2BQ2ZGBV2KVmabKPifP8l%2BcMRgJLv2B1Lt6hZF6vOHWBSSfhqcS2FyawQ4S76Xcaxomtbt3xC2csRnWCffrVZ4fs%2FfoZZht2tFZWQCB2q9vk0kHOUZBRH09oHXflo0jbxjlpkEzwEJtcnqXnVBv8WjzUe9vYvAH%2B0GLt6cTRfry5onYNTcnwTYy5XcyBi8mq8pk5yoiV%2BLBCddCKlkgjXg50nsSKETUdscKR1jZN4y%2FIxinrQCytn%2BgDN7mDnoiFLxB2rkCen5xNoqEeptO2bbZhA0F4i4a7eH3%2FUiu3p3kwjcEPxgq%2Bo0VjwK2A1YKCRG2HyqUE6yimyc7S%2FvYOe6HthV42l7Snj8JmFBGY7LMHcEft9%2Fg0npxFwcY01MgK%2ByptY3VPlqV0Um9mpUyh99dMJiH%2FsAGOqUBSCVPF1Xt1PoFt1g0rhSu7wpGAL726FST8u3Cw%2BTtCOY7kjCH4Gv9%2FqSFcZR%2FG0nRTzHwKM%2BblYm2d2PWjhGawFD76b1CueVuQUvcuZjXuInYxcg7saI7r5WixKST5YlI3osK6fif2QCkePl1R14nDI8ISzrAbUDUyEs5meUENjakyNhB4un9KSZCFEa07nCXFz99d1BDJPjjCVwKB3L%2BccLJosEo&X-Amz-Signature=94406c0a965170853e656f8b676499eb04e5487babc6cb0a2f6f302a5cb06788&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKEVSJJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFovSizSf3u1wCPejpyaJ5I23TfN%2BMJoBrrV1s0JH2PqAiEAmGox9tdgSGilVONzTGJYzjnlCI%2F8idT4zW0UGuZ89WYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwSgwv08gTU78%2B4FyrcA5I00nYSG8HKp1OM7QoFJphpLnob7InL0REedzRjZ0CdFUYWidI0VcO1NOBKjXwWTsXvmMUXtnZ7DVKCTkFmj15ZtlmtAJIguIUvMjRntGbFLkzw4EUFw3yVohF%2BZuM%2FWc1iQh9rJZduVGM8Zo0Pbd%2F3T4h7TdR4sE3WYNwPOVOdxyJ3iaI4YPxVlTEOxjaK5%2FJWKWvxdLU50b4TObAhAS8YLj3XJvI34AKEGg%2BQ2ZGBV2KVmabKPifP8l%2BcMRgJLv2B1Lt6hZF6vOHWBSSfhqcS2FyawQ4S76Xcaxomtbt3xC2csRnWCffrVZ4fs%2FfoZZht2tFZWQCB2q9vk0kHOUZBRH09oHXflo0jbxjlpkEzwEJtcnqXnVBv8WjzUe9vYvAH%2B0GLt6cTRfry5onYNTcnwTYy5XcyBi8mq8pk5yoiV%2BLBCddCKlkgjXg50nsSKETUdscKR1jZN4y%2FIxinrQCytn%2BgDN7mDnoiFLxB2rkCen5xNoqEeptO2bbZhA0F4i4a7eH3%2FUiu3p3kwjcEPxgq%2Bo0VjwK2A1YKCRG2HyqUE6yimyc7S%2FvYOe6HthV42l7Snj8JmFBGY7LMHcEft9%2Fg0npxFwcY01MgK%2ByptY3VPlqV0Um9mpUyh99dMJiH%2FsAGOqUBSCVPF1Xt1PoFt1g0rhSu7wpGAL726FST8u3Cw%2BTtCOY7kjCH4Gv9%2FqSFcZR%2FG0nRTzHwKM%2BblYm2d2PWjhGawFD76b1CueVuQUvcuZjXuInYxcg7saI7r5WixKST5YlI3osK6fif2QCkePl1R14nDI8ISzrAbUDUyEs5meUENjakyNhB4un9KSZCFEa07nCXFz99d1BDJPjjCVwKB3L%2BccLJosEo&X-Amz-Signature=b543eb538816402b9b2bbef259038005277d1c02423cb2462430d64c2199d791&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
