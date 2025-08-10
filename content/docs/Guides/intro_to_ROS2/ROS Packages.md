---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZV2H6P%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8TEojxtrkIRJkv7y2D5e3U1RyvCfSqDeyUnyekXE6EAiAV%2BgJP7Mq5T7Pai7L%2FR3w%2BMPqumz8viGa4n3UDBjSyOiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt3Ln0Ri2V%2BZcyv3xKtwDwIlqLL8iKK5Lml2qHSmKgaOTDXL%2BlqmYGOhX4c0mPGcYY9LIxDX2tydSzdZIDTbCWwVR4uDz5a6LPsK3FklwHU7pDBCaKiWw6dB8m8Pl3G7BPL%2FVBqz%2BOvAHqy6pbFMNenteWWpozVRo4N9lsIfIcdh9IKXMFtifCtmYr8XrdNPvXzUM2O%2FNhHnQiO8CbyCJpkAEW0J5F8HLE%2BO22WXydpI3OzpEU0zU6h7nJ9QS9ItxdDljvvwWZ5ZRzb%2B6gl7VdUtSVSyWzMFUEU9Nzkmx7fCPwQwxdGNES9vmV8lFmS6lg7FAZQUog8B2jeqByD3g8QqqDQVH4wnbxg4L2%2BI4Kcfm5euPMraNqXf%2FfORnd3ts9R%2B5Av9nOIUSJyHzTLT2%2BKAOLrY9eXmI2Eqigl0SjT7i6uDWtUbDf%2FHgCEsntXutq4dmhvn%2F%2Be1rOJmSpIcSd5%2FHf1dH5wSnR7Kp4YUvKQ4M5KfmvhiG8GiRcfbVsydC%2BTjEgievM5qEx%2FKoskBcql2pbAtPTl4YMc01r%2F2KF6v9Ggd%2FBMOzq1qKnrdEwl0Cp6owKr%2BrR%2BFWzQ%2BzTeKZg0aFXwN7cBipkbsSEDB7a9IgtFQnOat2oE792GoYQqXptQBPjN%2BJD%2BAoxcMwk%2FXgxAY6pgEx0SBb7w721K8GjFNMdotVDfRCnkFeszDpVbicFZ9tk7QjgPyaJQIvymAp%2FfXLtJUW7et5B7CP1IMWx%2F9ixAwS6z%2BAKvtHQkZiGEAMnXaaG2iXLM%2FQbrDZ8j6ejShkZvDSfBBM9ynTgMuAfVQQ4Y8CiufLreGVVosd5FtW8jA16EkMoKJBw2By5jyAgzPVv1Hsmaj1jetnCtBF8FsPEjwI8uEJEhJ6&X-Amz-Signature=c883b4bf4b3bf835767f6084d575b06d9fb6ffd2535fdafdc86e1d6bc91918ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZV2H6P%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8TEojxtrkIRJkv7y2D5e3U1RyvCfSqDeyUnyekXE6EAiAV%2BgJP7Mq5T7Pai7L%2FR3w%2BMPqumz8viGa4n3UDBjSyOiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt3Ln0Ri2V%2BZcyv3xKtwDwIlqLL8iKK5Lml2qHSmKgaOTDXL%2BlqmYGOhX4c0mPGcYY9LIxDX2tydSzdZIDTbCWwVR4uDz5a6LPsK3FklwHU7pDBCaKiWw6dB8m8Pl3G7BPL%2FVBqz%2BOvAHqy6pbFMNenteWWpozVRo4N9lsIfIcdh9IKXMFtifCtmYr8XrdNPvXzUM2O%2FNhHnQiO8CbyCJpkAEW0J5F8HLE%2BO22WXydpI3OzpEU0zU6h7nJ9QS9ItxdDljvvwWZ5ZRzb%2B6gl7VdUtSVSyWzMFUEU9Nzkmx7fCPwQwxdGNES9vmV8lFmS6lg7FAZQUog8B2jeqByD3g8QqqDQVH4wnbxg4L2%2BI4Kcfm5euPMraNqXf%2FfORnd3ts9R%2B5Av9nOIUSJyHzTLT2%2BKAOLrY9eXmI2Eqigl0SjT7i6uDWtUbDf%2FHgCEsntXutq4dmhvn%2F%2Be1rOJmSpIcSd5%2FHf1dH5wSnR7Kp4YUvKQ4M5KfmvhiG8GiRcfbVsydC%2BTjEgievM5qEx%2FKoskBcql2pbAtPTl4YMc01r%2F2KF6v9Ggd%2FBMOzq1qKnrdEwl0Cp6owKr%2BrR%2BFWzQ%2BzTeKZg0aFXwN7cBipkbsSEDB7a9IgtFQnOat2oE792GoYQqXptQBPjN%2BJD%2BAoxcMwk%2FXgxAY6pgEx0SBb7w721K8GjFNMdotVDfRCnkFeszDpVbicFZ9tk7QjgPyaJQIvymAp%2FfXLtJUW7et5B7CP1IMWx%2F9ixAwS6z%2BAKvtHQkZiGEAMnXaaG2iXLM%2FQbrDZ8j6ejShkZvDSfBBM9ynTgMuAfVQQ4Y8CiufLreGVVosd5FtW8jA16EkMoKJBw2By5jyAgzPVv1Hsmaj1jetnCtBF8FsPEjwI8uEJEhJ6&X-Amz-Signature=9504028eedcaca06684601fb8d9af736ce7a97373c456c02b6d0267cc95e1d98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZV2H6P%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8TEojxtrkIRJkv7y2D5e3U1RyvCfSqDeyUnyekXE6EAiAV%2BgJP7Mq5T7Pai7L%2FR3w%2BMPqumz8viGa4n3UDBjSyOiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt3Ln0Ri2V%2BZcyv3xKtwDwIlqLL8iKK5Lml2qHSmKgaOTDXL%2BlqmYGOhX4c0mPGcYY9LIxDX2tydSzdZIDTbCWwVR4uDz5a6LPsK3FklwHU7pDBCaKiWw6dB8m8Pl3G7BPL%2FVBqz%2BOvAHqy6pbFMNenteWWpozVRo4N9lsIfIcdh9IKXMFtifCtmYr8XrdNPvXzUM2O%2FNhHnQiO8CbyCJpkAEW0J5F8HLE%2BO22WXydpI3OzpEU0zU6h7nJ9QS9ItxdDljvvwWZ5ZRzb%2B6gl7VdUtSVSyWzMFUEU9Nzkmx7fCPwQwxdGNES9vmV8lFmS6lg7FAZQUog8B2jeqByD3g8QqqDQVH4wnbxg4L2%2BI4Kcfm5euPMraNqXf%2FfORnd3ts9R%2B5Av9nOIUSJyHzTLT2%2BKAOLrY9eXmI2Eqigl0SjT7i6uDWtUbDf%2FHgCEsntXutq4dmhvn%2F%2Be1rOJmSpIcSd5%2FHf1dH5wSnR7Kp4YUvKQ4M5KfmvhiG8GiRcfbVsydC%2BTjEgievM5qEx%2FKoskBcql2pbAtPTl4YMc01r%2F2KF6v9Ggd%2FBMOzq1qKnrdEwl0Cp6owKr%2BrR%2BFWzQ%2BzTeKZg0aFXwN7cBipkbsSEDB7a9IgtFQnOat2oE792GoYQqXptQBPjN%2BJD%2BAoxcMwk%2FXgxAY6pgEx0SBb7w721K8GjFNMdotVDfRCnkFeszDpVbicFZ9tk7QjgPyaJQIvymAp%2FfXLtJUW7et5B7CP1IMWx%2F9ixAwS6z%2BAKvtHQkZiGEAMnXaaG2iXLM%2FQbrDZ8j6ejShkZvDSfBBM9ynTgMuAfVQQ4Y8CiufLreGVVosd5FtW8jA16EkMoKJBw2By5jyAgzPVv1Hsmaj1jetnCtBF8FsPEjwI8uEJEhJ6&X-Amz-Signature=8a99b8b3b7ba77d1703f32927da87437b44fdf5c0c8790719671518408609b0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZV2H6P%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8TEojxtrkIRJkv7y2D5e3U1RyvCfSqDeyUnyekXE6EAiAV%2BgJP7Mq5T7Pai7L%2FR3w%2BMPqumz8viGa4n3UDBjSyOiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt3Ln0Ri2V%2BZcyv3xKtwDwIlqLL8iKK5Lml2qHSmKgaOTDXL%2BlqmYGOhX4c0mPGcYY9LIxDX2tydSzdZIDTbCWwVR4uDz5a6LPsK3FklwHU7pDBCaKiWw6dB8m8Pl3G7BPL%2FVBqz%2BOvAHqy6pbFMNenteWWpozVRo4N9lsIfIcdh9IKXMFtifCtmYr8XrdNPvXzUM2O%2FNhHnQiO8CbyCJpkAEW0J5F8HLE%2BO22WXydpI3OzpEU0zU6h7nJ9QS9ItxdDljvvwWZ5ZRzb%2B6gl7VdUtSVSyWzMFUEU9Nzkmx7fCPwQwxdGNES9vmV8lFmS6lg7FAZQUog8B2jeqByD3g8QqqDQVH4wnbxg4L2%2BI4Kcfm5euPMraNqXf%2FfORnd3ts9R%2B5Av9nOIUSJyHzTLT2%2BKAOLrY9eXmI2Eqigl0SjT7i6uDWtUbDf%2FHgCEsntXutq4dmhvn%2F%2Be1rOJmSpIcSd5%2FHf1dH5wSnR7Kp4YUvKQ4M5KfmvhiG8GiRcfbVsydC%2BTjEgievM5qEx%2FKoskBcql2pbAtPTl4YMc01r%2F2KF6v9Ggd%2FBMOzq1qKnrdEwl0Cp6owKr%2BrR%2BFWzQ%2BzTeKZg0aFXwN7cBipkbsSEDB7a9IgtFQnOat2oE792GoYQqXptQBPjN%2BJD%2BAoxcMwk%2FXgxAY6pgEx0SBb7w721K8GjFNMdotVDfRCnkFeszDpVbicFZ9tk7QjgPyaJQIvymAp%2FfXLtJUW7et5B7CP1IMWx%2F9ixAwS6z%2BAKvtHQkZiGEAMnXaaG2iXLM%2FQbrDZ8j6ejShkZvDSfBBM9ynTgMuAfVQQ4Y8CiufLreGVVosd5FtW8jA16EkMoKJBw2By5jyAgzPVv1Hsmaj1jetnCtBF8FsPEjwI8uEJEhJ6&X-Amz-Signature=4270d40bc15e2b2423da74c9fe942016c7c46ae4f7a9e19cafa11cd4b04b9d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZV2H6P%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8TEojxtrkIRJkv7y2D5e3U1RyvCfSqDeyUnyekXE6EAiAV%2BgJP7Mq5T7Pai7L%2FR3w%2BMPqumz8viGa4n3UDBjSyOiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt3Ln0Ri2V%2BZcyv3xKtwDwIlqLL8iKK5Lml2qHSmKgaOTDXL%2BlqmYGOhX4c0mPGcYY9LIxDX2tydSzdZIDTbCWwVR4uDz5a6LPsK3FklwHU7pDBCaKiWw6dB8m8Pl3G7BPL%2FVBqz%2BOvAHqy6pbFMNenteWWpozVRo4N9lsIfIcdh9IKXMFtifCtmYr8XrdNPvXzUM2O%2FNhHnQiO8CbyCJpkAEW0J5F8HLE%2BO22WXydpI3OzpEU0zU6h7nJ9QS9ItxdDljvvwWZ5ZRzb%2B6gl7VdUtSVSyWzMFUEU9Nzkmx7fCPwQwxdGNES9vmV8lFmS6lg7FAZQUog8B2jeqByD3g8QqqDQVH4wnbxg4L2%2BI4Kcfm5euPMraNqXf%2FfORnd3ts9R%2B5Av9nOIUSJyHzTLT2%2BKAOLrY9eXmI2Eqigl0SjT7i6uDWtUbDf%2FHgCEsntXutq4dmhvn%2F%2Be1rOJmSpIcSd5%2FHf1dH5wSnR7Kp4YUvKQ4M5KfmvhiG8GiRcfbVsydC%2BTjEgievM5qEx%2FKoskBcql2pbAtPTl4YMc01r%2F2KF6v9Ggd%2FBMOzq1qKnrdEwl0Cp6owKr%2BrR%2BFWzQ%2BzTeKZg0aFXwN7cBipkbsSEDB7a9IgtFQnOat2oE792GoYQqXptQBPjN%2BJD%2BAoxcMwk%2FXgxAY6pgEx0SBb7w721K8GjFNMdotVDfRCnkFeszDpVbicFZ9tk7QjgPyaJQIvymAp%2FfXLtJUW7et5B7CP1IMWx%2F9ixAwS6z%2BAKvtHQkZiGEAMnXaaG2iXLM%2FQbrDZ8j6ejShkZvDSfBBM9ynTgMuAfVQQ4Y8CiufLreGVVosd5FtW8jA16EkMoKJBw2By5jyAgzPVv1Hsmaj1jetnCtBF8FsPEjwI8uEJEhJ6&X-Amz-Signature=999a291b95945cc69d44149bb9f0a61497d145d35024db06a8cff7ad475871f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZV2H6P%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8TEojxtrkIRJkv7y2D5e3U1RyvCfSqDeyUnyekXE6EAiAV%2BgJP7Mq5T7Pai7L%2FR3w%2BMPqumz8viGa4n3UDBjSyOiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt3Ln0Ri2V%2BZcyv3xKtwDwIlqLL8iKK5Lml2qHSmKgaOTDXL%2BlqmYGOhX4c0mPGcYY9LIxDX2tydSzdZIDTbCWwVR4uDz5a6LPsK3FklwHU7pDBCaKiWw6dB8m8Pl3G7BPL%2FVBqz%2BOvAHqy6pbFMNenteWWpozVRo4N9lsIfIcdh9IKXMFtifCtmYr8XrdNPvXzUM2O%2FNhHnQiO8CbyCJpkAEW0J5F8HLE%2BO22WXydpI3OzpEU0zU6h7nJ9QS9ItxdDljvvwWZ5ZRzb%2B6gl7VdUtSVSyWzMFUEU9Nzkmx7fCPwQwxdGNES9vmV8lFmS6lg7FAZQUog8B2jeqByD3g8QqqDQVH4wnbxg4L2%2BI4Kcfm5euPMraNqXf%2FfORnd3ts9R%2B5Av9nOIUSJyHzTLT2%2BKAOLrY9eXmI2Eqigl0SjT7i6uDWtUbDf%2FHgCEsntXutq4dmhvn%2F%2Be1rOJmSpIcSd5%2FHf1dH5wSnR7Kp4YUvKQ4M5KfmvhiG8GiRcfbVsydC%2BTjEgievM5qEx%2FKoskBcql2pbAtPTl4YMc01r%2F2KF6v9Ggd%2FBMOzq1qKnrdEwl0Cp6owKr%2BrR%2BFWzQ%2BzTeKZg0aFXwN7cBipkbsSEDB7a9IgtFQnOat2oE792GoYQqXptQBPjN%2BJD%2BAoxcMwk%2FXgxAY6pgEx0SBb7w721K8GjFNMdotVDfRCnkFeszDpVbicFZ9tk7QjgPyaJQIvymAp%2FfXLtJUW7et5B7CP1IMWx%2F9ixAwS6z%2BAKvtHQkZiGEAMnXaaG2iXLM%2FQbrDZ8j6ejShkZvDSfBBM9ynTgMuAfVQQ4Y8CiufLreGVVosd5FtW8jA16EkMoKJBw2By5jyAgzPVv1Hsmaj1jetnCtBF8FsPEjwI8uEJEhJ6&X-Amz-Signature=00057d558f3b3bdac92f2779e0070020e01f28185910f5f07b10f9fe4fabb1f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZV2H6P%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8TEojxtrkIRJkv7y2D5e3U1RyvCfSqDeyUnyekXE6EAiAV%2BgJP7Mq5T7Pai7L%2FR3w%2BMPqumz8viGa4n3UDBjSyOiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt3Ln0Ri2V%2BZcyv3xKtwDwIlqLL8iKK5Lml2qHSmKgaOTDXL%2BlqmYGOhX4c0mPGcYY9LIxDX2tydSzdZIDTbCWwVR4uDz5a6LPsK3FklwHU7pDBCaKiWw6dB8m8Pl3G7BPL%2FVBqz%2BOvAHqy6pbFMNenteWWpozVRo4N9lsIfIcdh9IKXMFtifCtmYr8XrdNPvXzUM2O%2FNhHnQiO8CbyCJpkAEW0J5F8HLE%2BO22WXydpI3OzpEU0zU6h7nJ9QS9ItxdDljvvwWZ5ZRzb%2B6gl7VdUtSVSyWzMFUEU9Nzkmx7fCPwQwxdGNES9vmV8lFmS6lg7FAZQUog8B2jeqByD3g8QqqDQVH4wnbxg4L2%2BI4Kcfm5euPMraNqXf%2FfORnd3ts9R%2B5Av9nOIUSJyHzTLT2%2BKAOLrY9eXmI2Eqigl0SjT7i6uDWtUbDf%2FHgCEsntXutq4dmhvn%2F%2Be1rOJmSpIcSd5%2FHf1dH5wSnR7Kp4YUvKQ4M5KfmvhiG8GiRcfbVsydC%2BTjEgievM5qEx%2FKoskBcql2pbAtPTl4YMc01r%2F2KF6v9Ggd%2FBMOzq1qKnrdEwl0Cp6owKr%2BrR%2BFWzQ%2BzTeKZg0aFXwN7cBipkbsSEDB7a9IgtFQnOat2oE792GoYQqXptQBPjN%2BJD%2BAoxcMwk%2FXgxAY6pgEx0SBb7w721K8GjFNMdotVDfRCnkFeszDpVbicFZ9tk7QjgPyaJQIvymAp%2FfXLtJUW7et5B7CP1IMWx%2F9ixAwS6z%2BAKvtHQkZiGEAMnXaaG2iXLM%2FQbrDZ8j6ejShkZvDSfBBM9ynTgMuAfVQQ4Y8CiufLreGVVosd5FtW8jA16EkMoKJBw2By5jyAgzPVv1Hsmaj1jetnCtBF8FsPEjwI8uEJEhJ6&X-Amz-Signature=27e7f77b4678f1fe0781389ee0e0c5f2fc7219c8c07b830011b55331229814ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
