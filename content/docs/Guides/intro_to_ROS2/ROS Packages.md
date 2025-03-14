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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GJDK2F5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQ93jk8AeGn1RHSCZB8PIWuouZT3YCBC2VmQgvU5fjgIhAIux%2BmrHostLMcH8qlmvdulV4slZsDJTbaGCgmYf7OO%2BKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPJRc3A1MDkV2FmLsq3AOxgnYGFdic8pQYMj9t0WO8GB53imOnysOQjwvUxQx9XO9lgXZiiYLy9aAgXufj2SqRDYZowUQbbYQGoFDn753jKSjctey9%2Bmfqhpg3W10h39%2B%2B6Eh300Spzm1quA2kCgt8%2BYx%2FvLGt1NMtTJL84shFsVo15NWxahMBnF%2B1fe7Q5bwXZOJIcnvUP1a0mV0mDjYMs2%2B6QzdrHt95WBxVBhwsEySHrNI6%2B6iJ9tRcVW9gybMSyQAXizNiqmSxzrY09FobyrQD9%2BFXQG8OIWmJ2vvixl7VX%2Bjz%2B8c8bqGVkR0DiWcmj8fx8ZdIb3%2Bsjt3%2BgbwdWl5Cx2l8G5Algz6FCybaMOqFIJqZ%2FvW8dDimVqiFKVWXyUOJz9vdx6s54vigrFJMK2YTrfCsFHu8iGxAX0M0rk%2FQiwo5JUDO6srRAJhQF7hf14PFyTInm7TAhNNWQthg3DJTxFyQs9aDufqEW9zPuvaS5sOTIWOeGmeuUdCbsGulz4gYy2fh0QKEfpWZIbqjsnNhtXTRbOaFGmeamso1J0%2Bp2SXMcKBchGG4t9oruZ1FRe80ymgatsf40vhjEoMeBamlzgBHGRiloReSd5w177DNRpJA8nOkuN0%2FL5P%2B7cCxZMW0qv%2FXcRUDzjCpk9K%2BBjqkAV%2FFX7gGqKrcELXi1VoU3lPY1plV%2FtxVYSlOOo45BGGTARHmAWrSUv0yMDWf59eI5kunnNlLv20EKQTcJRH5tlp88bo6kite%2F%2BxqrHJq0hj5x0bt0DzSo52o5X56f9lctDQi3kMcBmJynp7mO%2F4mSVMEfYxIaCVX9LH6zzMAKjkv%2FCaE%2Bg4EotlCZxDQ9YVQ8CpjthJ4oerLLLU8MNBA7HHZ%2FGPr&X-Amz-Signature=079f6985f5335efab885e9cc1ef5a4e57e1d85496255c1b73b8338864565a40d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GJDK2F5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQ93jk8AeGn1RHSCZB8PIWuouZT3YCBC2VmQgvU5fjgIhAIux%2BmrHostLMcH8qlmvdulV4slZsDJTbaGCgmYf7OO%2BKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPJRc3A1MDkV2FmLsq3AOxgnYGFdic8pQYMj9t0WO8GB53imOnysOQjwvUxQx9XO9lgXZiiYLy9aAgXufj2SqRDYZowUQbbYQGoFDn753jKSjctey9%2Bmfqhpg3W10h39%2B%2B6Eh300Spzm1quA2kCgt8%2BYx%2FvLGt1NMtTJL84shFsVo15NWxahMBnF%2B1fe7Q5bwXZOJIcnvUP1a0mV0mDjYMs2%2B6QzdrHt95WBxVBhwsEySHrNI6%2B6iJ9tRcVW9gybMSyQAXizNiqmSxzrY09FobyrQD9%2BFXQG8OIWmJ2vvixl7VX%2Bjz%2B8c8bqGVkR0DiWcmj8fx8ZdIb3%2Bsjt3%2BgbwdWl5Cx2l8G5Algz6FCybaMOqFIJqZ%2FvW8dDimVqiFKVWXyUOJz9vdx6s54vigrFJMK2YTrfCsFHu8iGxAX0M0rk%2FQiwo5JUDO6srRAJhQF7hf14PFyTInm7TAhNNWQthg3DJTxFyQs9aDufqEW9zPuvaS5sOTIWOeGmeuUdCbsGulz4gYy2fh0QKEfpWZIbqjsnNhtXTRbOaFGmeamso1J0%2Bp2SXMcKBchGG4t9oruZ1FRe80ymgatsf40vhjEoMeBamlzgBHGRiloReSd5w177DNRpJA8nOkuN0%2FL5P%2B7cCxZMW0qv%2FXcRUDzjCpk9K%2BBjqkAV%2FFX7gGqKrcELXi1VoU3lPY1plV%2FtxVYSlOOo45BGGTARHmAWrSUv0yMDWf59eI5kunnNlLv20EKQTcJRH5tlp88bo6kite%2F%2BxqrHJq0hj5x0bt0DzSo52o5X56f9lctDQi3kMcBmJynp7mO%2F4mSVMEfYxIaCVX9LH6zzMAKjkv%2FCaE%2Bg4EotlCZxDQ9YVQ8CpjthJ4oerLLLU8MNBA7HHZ%2FGPr&X-Amz-Signature=acfa817a2293c2013ecf9d1815220f7ba429c6f94087cd2ef50a78d0674c0ce6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GJDK2F5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQ93jk8AeGn1RHSCZB8PIWuouZT3YCBC2VmQgvU5fjgIhAIux%2BmrHostLMcH8qlmvdulV4slZsDJTbaGCgmYf7OO%2BKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPJRc3A1MDkV2FmLsq3AOxgnYGFdic8pQYMj9t0WO8GB53imOnysOQjwvUxQx9XO9lgXZiiYLy9aAgXufj2SqRDYZowUQbbYQGoFDn753jKSjctey9%2Bmfqhpg3W10h39%2B%2B6Eh300Spzm1quA2kCgt8%2BYx%2FvLGt1NMtTJL84shFsVo15NWxahMBnF%2B1fe7Q5bwXZOJIcnvUP1a0mV0mDjYMs2%2B6QzdrHt95WBxVBhwsEySHrNI6%2B6iJ9tRcVW9gybMSyQAXizNiqmSxzrY09FobyrQD9%2BFXQG8OIWmJ2vvixl7VX%2Bjz%2B8c8bqGVkR0DiWcmj8fx8ZdIb3%2Bsjt3%2BgbwdWl5Cx2l8G5Algz6FCybaMOqFIJqZ%2FvW8dDimVqiFKVWXyUOJz9vdx6s54vigrFJMK2YTrfCsFHu8iGxAX0M0rk%2FQiwo5JUDO6srRAJhQF7hf14PFyTInm7TAhNNWQthg3DJTxFyQs9aDufqEW9zPuvaS5sOTIWOeGmeuUdCbsGulz4gYy2fh0QKEfpWZIbqjsnNhtXTRbOaFGmeamso1J0%2Bp2SXMcKBchGG4t9oruZ1FRe80ymgatsf40vhjEoMeBamlzgBHGRiloReSd5w177DNRpJA8nOkuN0%2FL5P%2B7cCxZMW0qv%2FXcRUDzjCpk9K%2BBjqkAV%2FFX7gGqKrcELXi1VoU3lPY1plV%2FtxVYSlOOo45BGGTARHmAWrSUv0yMDWf59eI5kunnNlLv20EKQTcJRH5tlp88bo6kite%2F%2BxqrHJq0hj5x0bt0DzSo52o5X56f9lctDQi3kMcBmJynp7mO%2F4mSVMEfYxIaCVX9LH6zzMAKjkv%2FCaE%2Bg4EotlCZxDQ9YVQ8CpjthJ4oerLLLU8MNBA7HHZ%2FGPr&X-Amz-Signature=9b011616b402d2c902fa6d7cadf5c246048884869265b454c7aa387734fa3776&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GJDK2F5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQ93jk8AeGn1RHSCZB8PIWuouZT3YCBC2VmQgvU5fjgIhAIux%2BmrHostLMcH8qlmvdulV4slZsDJTbaGCgmYf7OO%2BKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPJRc3A1MDkV2FmLsq3AOxgnYGFdic8pQYMj9t0WO8GB53imOnysOQjwvUxQx9XO9lgXZiiYLy9aAgXufj2SqRDYZowUQbbYQGoFDn753jKSjctey9%2Bmfqhpg3W10h39%2B%2B6Eh300Spzm1quA2kCgt8%2BYx%2FvLGt1NMtTJL84shFsVo15NWxahMBnF%2B1fe7Q5bwXZOJIcnvUP1a0mV0mDjYMs2%2B6QzdrHt95WBxVBhwsEySHrNI6%2B6iJ9tRcVW9gybMSyQAXizNiqmSxzrY09FobyrQD9%2BFXQG8OIWmJ2vvixl7VX%2Bjz%2B8c8bqGVkR0DiWcmj8fx8ZdIb3%2Bsjt3%2BgbwdWl5Cx2l8G5Algz6FCybaMOqFIJqZ%2FvW8dDimVqiFKVWXyUOJz9vdx6s54vigrFJMK2YTrfCsFHu8iGxAX0M0rk%2FQiwo5JUDO6srRAJhQF7hf14PFyTInm7TAhNNWQthg3DJTxFyQs9aDufqEW9zPuvaS5sOTIWOeGmeuUdCbsGulz4gYy2fh0QKEfpWZIbqjsnNhtXTRbOaFGmeamso1J0%2Bp2SXMcKBchGG4t9oruZ1FRe80ymgatsf40vhjEoMeBamlzgBHGRiloReSd5w177DNRpJA8nOkuN0%2FL5P%2B7cCxZMW0qv%2FXcRUDzjCpk9K%2BBjqkAV%2FFX7gGqKrcELXi1VoU3lPY1plV%2FtxVYSlOOo45BGGTARHmAWrSUv0yMDWf59eI5kunnNlLv20EKQTcJRH5tlp88bo6kite%2F%2BxqrHJq0hj5x0bt0DzSo52o5X56f9lctDQi3kMcBmJynp7mO%2F4mSVMEfYxIaCVX9LH6zzMAKjkv%2FCaE%2Bg4EotlCZxDQ9YVQ8CpjthJ4oerLLLU8MNBA7HHZ%2FGPr&X-Amz-Signature=dfd3594f1e08dc0f7bb6599c353c110449d800461efb9619fd9e59a75ff54ddf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GJDK2F5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQ93jk8AeGn1RHSCZB8PIWuouZT3YCBC2VmQgvU5fjgIhAIux%2BmrHostLMcH8qlmvdulV4slZsDJTbaGCgmYf7OO%2BKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPJRc3A1MDkV2FmLsq3AOxgnYGFdic8pQYMj9t0WO8GB53imOnysOQjwvUxQx9XO9lgXZiiYLy9aAgXufj2SqRDYZowUQbbYQGoFDn753jKSjctey9%2Bmfqhpg3W10h39%2B%2B6Eh300Spzm1quA2kCgt8%2BYx%2FvLGt1NMtTJL84shFsVo15NWxahMBnF%2B1fe7Q5bwXZOJIcnvUP1a0mV0mDjYMs2%2B6QzdrHt95WBxVBhwsEySHrNI6%2B6iJ9tRcVW9gybMSyQAXizNiqmSxzrY09FobyrQD9%2BFXQG8OIWmJ2vvixl7VX%2Bjz%2B8c8bqGVkR0DiWcmj8fx8ZdIb3%2Bsjt3%2BgbwdWl5Cx2l8G5Algz6FCybaMOqFIJqZ%2FvW8dDimVqiFKVWXyUOJz9vdx6s54vigrFJMK2YTrfCsFHu8iGxAX0M0rk%2FQiwo5JUDO6srRAJhQF7hf14PFyTInm7TAhNNWQthg3DJTxFyQs9aDufqEW9zPuvaS5sOTIWOeGmeuUdCbsGulz4gYy2fh0QKEfpWZIbqjsnNhtXTRbOaFGmeamso1J0%2Bp2SXMcKBchGG4t9oruZ1FRe80ymgatsf40vhjEoMeBamlzgBHGRiloReSd5w177DNRpJA8nOkuN0%2FL5P%2B7cCxZMW0qv%2FXcRUDzjCpk9K%2BBjqkAV%2FFX7gGqKrcELXi1VoU3lPY1plV%2FtxVYSlOOo45BGGTARHmAWrSUv0yMDWf59eI5kunnNlLv20EKQTcJRH5tlp88bo6kite%2F%2BxqrHJq0hj5x0bt0DzSo52o5X56f9lctDQi3kMcBmJynp7mO%2F4mSVMEfYxIaCVX9LH6zzMAKjkv%2FCaE%2Bg4EotlCZxDQ9YVQ8CpjthJ4oerLLLU8MNBA7HHZ%2FGPr&X-Amz-Signature=16c95c8cdf9add96bfec47d0067d3b6e9a66fe37deca8150563f2c2c910e2c30&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GJDK2F5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQ93jk8AeGn1RHSCZB8PIWuouZT3YCBC2VmQgvU5fjgIhAIux%2BmrHostLMcH8qlmvdulV4slZsDJTbaGCgmYf7OO%2BKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPJRc3A1MDkV2FmLsq3AOxgnYGFdic8pQYMj9t0WO8GB53imOnysOQjwvUxQx9XO9lgXZiiYLy9aAgXufj2SqRDYZowUQbbYQGoFDn753jKSjctey9%2Bmfqhpg3W10h39%2B%2B6Eh300Spzm1quA2kCgt8%2BYx%2FvLGt1NMtTJL84shFsVo15NWxahMBnF%2B1fe7Q5bwXZOJIcnvUP1a0mV0mDjYMs2%2B6QzdrHt95WBxVBhwsEySHrNI6%2B6iJ9tRcVW9gybMSyQAXizNiqmSxzrY09FobyrQD9%2BFXQG8OIWmJ2vvixl7VX%2Bjz%2B8c8bqGVkR0DiWcmj8fx8ZdIb3%2Bsjt3%2BgbwdWl5Cx2l8G5Algz6FCybaMOqFIJqZ%2FvW8dDimVqiFKVWXyUOJz9vdx6s54vigrFJMK2YTrfCsFHu8iGxAX0M0rk%2FQiwo5JUDO6srRAJhQF7hf14PFyTInm7TAhNNWQthg3DJTxFyQs9aDufqEW9zPuvaS5sOTIWOeGmeuUdCbsGulz4gYy2fh0QKEfpWZIbqjsnNhtXTRbOaFGmeamso1J0%2Bp2SXMcKBchGG4t9oruZ1FRe80ymgatsf40vhjEoMeBamlzgBHGRiloReSd5w177DNRpJA8nOkuN0%2FL5P%2B7cCxZMW0qv%2FXcRUDzjCpk9K%2BBjqkAV%2FFX7gGqKrcELXi1VoU3lPY1plV%2FtxVYSlOOo45BGGTARHmAWrSUv0yMDWf59eI5kunnNlLv20EKQTcJRH5tlp88bo6kite%2F%2BxqrHJq0hj5x0bt0DzSo52o5X56f9lctDQi3kMcBmJynp7mO%2F4mSVMEfYxIaCVX9LH6zzMAKjkv%2FCaE%2Bg4EotlCZxDQ9YVQ8CpjthJ4oerLLLU8MNBA7HHZ%2FGPr&X-Amz-Signature=4b0d465380fb276beb0fa605ac0233605504b91761fac094dd13aa8b60aa321b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GJDK2F5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQ93jk8AeGn1RHSCZB8PIWuouZT3YCBC2VmQgvU5fjgIhAIux%2BmrHostLMcH8qlmvdulV4slZsDJTbaGCgmYf7OO%2BKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPJRc3A1MDkV2FmLsq3AOxgnYGFdic8pQYMj9t0WO8GB53imOnysOQjwvUxQx9XO9lgXZiiYLy9aAgXufj2SqRDYZowUQbbYQGoFDn753jKSjctey9%2Bmfqhpg3W10h39%2B%2B6Eh300Spzm1quA2kCgt8%2BYx%2FvLGt1NMtTJL84shFsVo15NWxahMBnF%2B1fe7Q5bwXZOJIcnvUP1a0mV0mDjYMs2%2B6QzdrHt95WBxVBhwsEySHrNI6%2B6iJ9tRcVW9gybMSyQAXizNiqmSxzrY09FobyrQD9%2BFXQG8OIWmJ2vvixl7VX%2Bjz%2B8c8bqGVkR0DiWcmj8fx8ZdIb3%2Bsjt3%2BgbwdWl5Cx2l8G5Algz6FCybaMOqFIJqZ%2FvW8dDimVqiFKVWXyUOJz9vdx6s54vigrFJMK2YTrfCsFHu8iGxAX0M0rk%2FQiwo5JUDO6srRAJhQF7hf14PFyTInm7TAhNNWQthg3DJTxFyQs9aDufqEW9zPuvaS5sOTIWOeGmeuUdCbsGulz4gYy2fh0QKEfpWZIbqjsnNhtXTRbOaFGmeamso1J0%2Bp2SXMcKBchGG4t9oruZ1FRe80ymgatsf40vhjEoMeBamlzgBHGRiloReSd5w177DNRpJA8nOkuN0%2FL5P%2B7cCxZMW0qv%2FXcRUDzjCpk9K%2BBjqkAV%2FFX7gGqKrcELXi1VoU3lPY1plV%2FtxVYSlOOo45BGGTARHmAWrSUv0yMDWf59eI5kunnNlLv20EKQTcJRH5tlp88bo6kite%2F%2BxqrHJq0hj5x0bt0DzSo52o5X56f9lctDQi3kMcBmJynp7mO%2F4mSVMEfYxIaCVX9LH6zzMAKjkv%2FCaE%2Bg4EotlCZxDQ9YVQ8CpjthJ4oerLLLU8MNBA7HHZ%2FGPr&X-Amz-Signature=da30b6da680d45560527f6d85f032ef987704483f62d2bfc46ac183f314c4877&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
