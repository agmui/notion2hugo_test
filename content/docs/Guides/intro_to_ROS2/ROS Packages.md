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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5NUZQ2J%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkprPbF%2FpHdsvcMzTf7dR7Cl6bW91xvyoOPO5JL6Ys1gIhAIUesRcWJklatBy1OG3mHc4kk%2BZK%2BXEnBKvB46GLIg65Kv8DCHoQABoMNjM3NDIzMTgzODA1IgyPOWowVZWQqLpYkacq3ANS7WK5bYOsDws995xo4gINAdJfMbrtpwttkUcpl6eTT1bGkQT5EwC2RlWIi%2FhqGqJXNcZziz80UY%2BXo3okkEYLKrN4EQM4s%2BRzniB8gOVZzkvLnmAzX6pxGA%2Bo%2FniTX9W421%2BuSbTLqbP2fVXNuVR8eTKvmuSvaiJiaxmy3YbQTTqThZZgq3Jqm0wEopFN6%2FcQF7EyZwErH1Cl8JHAwFH1FR%2FO%2Fo8rwygdgcU1Bcvm0EWDjzI0ZERCpPbpUAX4pl8wfo%2BqaXo8mMBIL5cCnPZ2ZvfE8ZVVOq7QGeB%2FXmfeBqC6Ry21%2FfqbBx1ioaGBOj9PaU9%2FfixjDJ4nxzWnjktsYSXvjKDmVOTHgXnrNucxJe%2FvX4pBSzWW9cjGfZuQ0eYhnMpdT4LBrSB9AHDRGWTomCnsS99vIPsUYyvMvI0uHXBvxdjj39MIzHrXyQCy0w9PAgHTB5BMPh%2BINIKyq3T33rnA4g7t1F200g10FrPAY8Yi71oJY0uS0eE3xtYU13zESuWQvqdloh13aUjLc78f6hXsc7LOEVzGQ09%2F2lZrxnmTfWOGBWQPLDpcOu3%2FuFpi2DCmtIrrQHxUElxcPguJLfcG8FALf61dNIaF6Vbl7QZaxRetocUq87pc7jD699zBBjqkAVCxJ3%2FswQ05fF8MRUKUvWvF0JXF2uaf%2BkxbqdSdEHFM%2FDVecG4Mnau1wrpOABbTm8DUldbAqQglxwIJTjKRtqjsqk358Ub4BRMLYFrB7U5N6y%2BPJ0GxUUAPfgMs4wcWMk3cqQZhxFbd1FS13diHWzGNwByNhqc6EVKbh5GPm9uJj91Gcr9kGDDzUEVzhlbF1jlmZDih66uxV41IersBpDlZzBxi&X-Amz-Signature=c493aa745f919e28ca8327de3b45f0bf3e793b0f0847d99ff87c40effe77032a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5NUZQ2J%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkprPbF%2FpHdsvcMzTf7dR7Cl6bW91xvyoOPO5JL6Ys1gIhAIUesRcWJklatBy1OG3mHc4kk%2BZK%2BXEnBKvB46GLIg65Kv8DCHoQABoMNjM3NDIzMTgzODA1IgyPOWowVZWQqLpYkacq3ANS7WK5bYOsDws995xo4gINAdJfMbrtpwttkUcpl6eTT1bGkQT5EwC2RlWIi%2FhqGqJXNcZziz80UY%2BXo3okkEYLKrN4EQM4s%2BRzniB8gOVZzkvLnmAzX6pxGA%2Bo%2FniTX9W421%2BuSbTLqbP2fVXNuVR8eTKvmuSvaiJiaxmy3YbQTTqThZZgq3Jqm0wEopFN6%2FcQF7EyZwErH1Cl8JHAwFH1FR%2FO%2Fo8rwygdgcU1Bcvm0EWDjzI0ZERCpPbpUAX4pl8wfo%2BqaXo8mMBIL5cCnPZ2ZvfE8ZVVOq7QGeB%2FXmfeBqC6Ry21%2FfqbBx1ioaGBOj9PaU9%2FfixjDJ4nxzWnjktsYSXvjKDmVOTHgXnrNucxJe%2FvX4pBSzWW9cjGfZuQ0eYhnMpdT4LBrSB9AHDRGWTomCnsS99vIPsUYyvMvI0uHXBvxdjj39MIzHrXyQCy0w9PAgHTB5BMPh%2BINIKyq3T33rnA4g7t1F200g10FrPAY8Yi71oJY0uS0eE3xtYU13zESuWQvqdloh13aUjLc78f6hXsc7LOEVzGQ09%2F2lZrxnmTfWOGBWQPLDpcOu3%2FuFpi2DCmtIrrQHxUElxcPguJLfcG8FALf61dNIaF6Vbl7QZaxRetocUq87pc7jD699zBBjqkAVCxJ3%2FswQ05fF8MRUKUvWvF0JXF2uaf%2BkxbqdSdEHFM%2FDVecG4Mnau1wrpOABbTm8DUldbAqQglxwIJTjKRtqjsqk358Ub4BRMLYFrB7U5N6y%2BPJ0GxUUAPfgMs4wcWMk3cqQZhxFbd1FS13diHWzGNwByNhqc6EVKbh5GPm9uJj91Gcr9kGDDzUEVzhlbF1jlmZDih66uxV41IersBpDlZzBxi&X-Amz-Signature=6389c93ee1cb2737b38cfcd8449d81710a797b9d970db10623ce5124c5a28914&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5NUZQ2J%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkprPbF%2FpHdsvcMzTf7dR7Cl6bW91xvyoOPO5JL6Ys1gIhAIUesRcWJklatBy1OG3mHc4kk%2BZK%2BXEnBKvB46GLIg65Kv8DCHoQABoMNjM3NDIzMTgzODA1IgyPOWowVZWQqLpYkacq3ANS7WK5bYOsDws995xo4gINAdJfMbrtpwttkUcpl6eTT1bGkQT5EwC2RlWIi%2FhqGqJXNcZziz80UY%2BXo3okkEYLKrN4EQM4s%2BRzniB8gOVZzkvLnmAzX6pxGA%2Bo%2FniTX9W421%2BuSbTLqbP2fVXNuVR8eTKvmuSvaiJiaxmy3YbQTTqThZZgq3Jqm0wEopFN6%2FcQF7EyZwErH1Cl8JHAwFH1FR%2FO%2Fo8rwygdgcU1Bcvm0EWDjzI0ZERCpPbpUAX4pl8wfo%2BqaXo8mMBIL5cCnPZ2ZvfE8ZVVOq7QGeB%2FXmfeBqC6Ry21%2FfqbBx1ioaGBOj9PaU9%2FfixjDJ4nxzWnjktsYSXvjKDmVOTHgXnrNucxJe%2FvX4pBSzWW9cjGfZuQ0eYhnMpdT4LBrSB9AHDRGWTomCnsS99vIPsUYyvMvI0uHXBvxdjj39MIzHrXyQCy0w9PAgHTB5BMPh%2BINIKyq3T33rnA4g7t1F200g10FrPAY8Yi71oJY0uS0eE3xtYU13zESuWQvqdloh13aUjLc78f6hXsc7LOEVzGQ09%2F2lZrxnmTfWOGBWQPLDpcOu3%2FuFpi2DCmtIrrQHxUElxcPguJLfcG8FALf61dNIaF6Vbl7QZaxRetocUq87pc7jD699zBBjqkAVCxJ3%2FswQ05fF8MRUKUvWvF0JXF2uaf%2BkxbqdSdEHFM%2FDVecG4Mnau1wrpOABbTm8DUldbAqQglxwIJTjKRtqjsqk358Ub4BRMLYFrB7U5N6y%2BPJ0GxUUAPfgMs4wcWMk3cqQZhxFbd1FS13diHWzGNwByNhqc6EVKbh5GPm9uJj91Gcr9kGDDzUEVzhlbF1jlmZDih66uxV41IersBpDlZzBxi&X-Amz-Signature=eacfff1057fc676e695ae173c7c2f7de07ecc2025a0906aa725e2fa5e74201e8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5NUZQ2J%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkprPbF%2FpHdsvcMzTf7dR7Cl6bW91xvyoOPO5JL6Ys1gIhAIUesRcWJklatBy1OG3mHc4kk%2BZK%2BXEnBKvB46GLIg65Kv8DCHoQABoMNjM3NDIzMTgzODA1IgyPOWowVZWQqLpYkacq3ANS7WK5bYOsDws995xo4gINAdJfMbrtpwttkUcpl6eTT1bGkQT5EwC2RlWIi%2FhqGqJXNcZziz80UY%2BXo3okkEYLKrN4EQM4s%2BRzniB8gOVZzkvLnmAzX6pxGA%2Bo%2FniTX9W421%2BuSbTLqbP2fVXNuVR8eTKvmuSvaiJiaxmy3YbQTTqThZZgq3Jqm0wEopFN6%2FcQF7EyZwErH1Cl8JHAwFH1FR%2FO%2Fo8rwygdgcU1Bcvm0EWDjzI0ZERCpPbpUAX4pl8wfo%2BqaXo8mMBIL5cCnPZ2ZvfE8ZVVOq7QGeB%2FXmfeBqC6Ry21%2FfqbBx1ioaGBOj9PaU9%2FfixjDJ4nxzWnjktsYSXvjKDmVOTHgXnrNucxJe%2FvX4pBSzWW9cjGfZuQ0eYhnMpdT4LBrSB9AHDRGWTomCnsS99vIPsUYyvMvI0uHXBvxdjj39MIzHrXyQCy0w9PAgHTB5BMPh%2BINIKyq3T33rnA4g7t1F200g10FrPAY8Yi71oJY0uS0eE3xtYU13zESuWQvqdloh13aUjLc78f6hXsc7LOEVzGQ09%2F2lZrxnmTfWOGBWQPLDpcOu3%2FuFpi2DCmtIrrQHxUElxcPguJLfcG8FALf61dNIaF6Vbl7QZaxRetocUq87pc7jD699zBBjqkAVCxJ3%2FswQ05fF8MRUKUvWvF0JXF2uaf%2BkxbqdSdEHFM%2FDVecG4Mnau1wrpOABbTm8DUldbAqQglxwIJTjKRtqjsqk358Ub4BRMLYFrB7U5N6y%2BPJ0GxUUAPfgMs4wcWMk3cqQZhxFbd1FS13diHWzGNwByNhqc6EVKbh5GPm9uJj91Gcr9kGDDzUEVzhlbF1jlmZDih66uxV41IersBpDlZzBxi&X-Amz-Signature=84530f4326a6d4ab9ce80554ab89b7a8eacd1649c0497c08970cb8dee77c64f3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5NUZQ2J%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkprPbF%2FpHdsvcMzTf7dR7Cl6bW91xvyoOPO5JL6Ys1gIhAIUesRcWJklatBy1OG3mHc4kk%2BZK%2BXEnBKvB46GLIg65Kv8DCHoQABoMNjM3NDIzMTgzODA1IgyPOWowVZWQqLpYkacq3ANS7WK5bYOsDws995xo4gINAdJfMbrtpwttkUcpl6eTT1bGkQT5EwC2RlWIi%2FhqGqJXNcZziz80UY%2BXo3okkEYLKrN4EQM4s%2BRzniB8gOVZzkvLnmAzX6pxGA%2Bo%2FniTX9W421%2BuSbTLqbP2fVXNuVR8eTKvmuSvaiJiaxmy3YbQTTqThZZgq3Jqm0wEopFN6%2FcQF7EyZwErH1Cl8JHAwFH1FR%2FO%2Fo8rwygdgcU1Bcvm0EWDjzI0ZERCpPbpUAX4pl8wfo%2BqaXo8mMBIL5cCnPZ2ZvfE8ZVVOq7QGeB%2FXmfeBqC6Ry21%2FfqbBx1ioaGBOj9PaU9%2FfixjDJ4nxzWnjktsYSXvjKDmVOTHgXnrNucxJe%2FvX4pBSzWW9cjGfZuQ0eYhnMpdT4LBrSB9AHDRGWTomCnsS99vIPsUYyvMvI0uHXBvxdjj39MIzHrXyQCy0w9PAgHTB5BMPh%2BINIKyq3T33rnA4g7t1F200g10FrPAY8Yi71oJY0uS0eE3xtYU13zESuWQvqdloh13aUjLc78f6hXsc7LOEVzGQ09%2F2lZrxnmTfWOGBWQPLDpcOu3%2FuFpi2DCmtIrrQHxUElxcPguJLfcG8FALf61dNIaF6Vbl7QZaxRetocUq87pc7jD699zBBjqkAVCxJ3%2FswQ05fF8MRUKUvWvF0JXF2uaf%2BkxbqdSdEHFM%2FDVecG4Mnau1wrpOABbTm8DUldbAqQglxwIJTjKRtqjsqk358Ub4BRMLYFrB7U5N6y%2BPJ0GxUUAPfgMs4wcWMk3cqQZhxFbd1FS13diHWzGNwByNhqc6EVKbh5GPm9uJj91Gcr9kGDDzUEVzhlbF1jlmZDih66uxV41IersBpDlZzBxi&X-Amz-Signature=1881aa33fd2d6ea5873ba6ad57f7ee0b1e02d4459151618f5e9bc5c956b29108&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5NUZQ2J%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkprPbF%2FpHdsvcMzTf7dR7Cl6bW91xvyoOPO5JL6Ys1gIhAIUesRcWJklatBy1OG3mHc4kk%2BZK%2BXEnBKvB46GLIg65Kv8DCHoQABoMNjM3NDIzMTgzODA1IgyPOWowVZWQqLpYkacq3ANS7WK5bYOsDws995xo4gINAdJfMbrtpwttkUcpl6eTT1bGkQT5EwC2RlWIi%2FhqGqJXNcZziz80UY%2BXo3okkEYLKrN4EQM4s%2BRzniB8gOVZzkvLnmAzX6pxGA%2Bo%2FniTX9W421%2BuSbTLqbP2fVXNuVR8eTKvmuSvaiJiaxmy3YbQTTqThZZgq3Jqm0wEopFN6%2FcQF7EyZwErH1Cl8JHAwFH1FR%2FO%2Fo8rwygdgcU1Bcvm0EWDjzI0ZERCpPbpUAX4pl8wfo%2BqaXo8mMBIL5cCnPZ2ZvfE8ZVVOq7QGeB%2FXmfeBqC6Ry21%2FfqbBx1ioaGBOj9PaU9%2FfixjDJ4nxzWnjktsYSXvjKDmVOTHgXnrNucxJe%2FvX4pBSzWW9cjGfZuQ0eYhnMpdT4LBrSB9AHDRGWTomCnsS99vIPsUYyvMvI0uHXBvxdjj39MIzHrXyQCy0w9PAgHTB5BMPh%2BINIKyq3T33rnA4g7t1F200g10FrPAY8Yi71oJY0uS0eE3xtYU13zESuWQvqdloh13aUjLc78f6hXsc7LOEVzGQ09%2F2lZrxnmTfWOGBWQPLDpcOu3%2FuFpi2DCmtIrrQHxUElxcPguJLfcG8FALf61dNIaF6Vbl7QZaxRetocUq87pc7jD699zBBjqkAVCxJ3%2FswQ05fF8MRUKUvWvF0JXF2uaf%2BkxbqdSdEHFM%2FDVecG4Mnau1wrpOABbTm8DUldbAqQglxwIJTjKRtqjsqk358Ub4BRMLYFrB7U5N6y%2BPJ0GxUUAPfgMs4wcWMk3cqQZhxFbd1FS13diHWzGNwByNhqc6EVKbh5GPm9uJj91Gcr9kGDDzUEVzhlbF1jlmZDih66uxV41IersBpDlZzBxi&X-Amz-Signature=c6c8380881cf79b46dd0611104fe81d9d5f520ac5b0bb526053b90a4a1c8a930&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5NUZQ2J%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkprPbF%2FpHdsvcMzTf7dR7Cl6bW91xvyoOPO5JL6Ys1gIhAIUesRcWJklatBy1OG3mHc4kk%2BZK%2BXEnBKvB46GLIg65Kv8DCHoQABoMNjM3NDIzMTgzODA1IgyPOWowVZWQqLpYkacq3ANS7WK5bYOsDws995xo4gINAdJfMbrtpwttkUcpl6eTT1bGkQT5EwC2RlWIi%2FhqGqJXNcZziz80UY%2BXo3okkEYLKrN4EQM4s%2BRzniB8gOVZzkvLnmAzX6pxGA%2Bo%2FniTX9W421%2BuSbTLqbP2fVXNuVR8eTKvmuSvaiJiaxmy3YbQTTqThZZgq3Jqm0wEopFN6%2FcQF7EyZwErH1Cl8JHAwFH1FR%2FO%2Fo8rwygdgcU1Bcvm0EWDjzI0ZERCpPbpUAX4pl8wfo%2BqaXo8mMBIL5cCnPZ2ZvfE8ZVVOq7QGeB%2FXmfeBqC6Ry21%2FfqbBx1ioaGBOj9PaU9%2FfixjDJ4nxzWnjktsYSXvjKDmVOTHgXnrNucxJe%2FvX4pBSzWW9cjGfZuQ0eYhnMpdT4LBrSB9AHDRGWTomCnsS99vIPsUYyvMvI0uHXBvxdjj39MIzHrXyQCy0w9PAgHTB5BMPh%2BINIKyq3T33rnA4g7t1F200g10FrPAY8Yi71oJY0uS0eE3xtYU13zESuWQvqdloh13aUjLc78f6hXsc7LOEVzGQ09%2F2lZrxnmTfWOGBWQPLDpcOu3%2FuFpi2DCmtIrrQHxUElxcPguJLfcG8FALf61dNIaF6Vbl7QZaxRetocUq87pc7jD699zBBjqkAVCxJ3%2FswQ05fF8MRUKUvWvF0JXF2uaf%2BkxbqdSdEHFM%2FDVecG4Mnau1wrpOABbTm8DUldbAqQglxwIJTjKRtqjsqk358Ub4BRMLYFrB7U5N6y%2BPJ0GxUUAPfgMs4wcWMk3cqQZhxFbd1FS13diHWzGNwByNhqc6EVKbh5GPm9uJj91Gcr9kGDDzUEVzhlbF1jlmZDih66uxV41IersBpDlZzBxi&X-Amz-Signature=0448561e88ad0ff94fe98cc5e658ee5bde73b890130b79b22329085df7cc6da4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
