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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHTSFJNF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAlzfF6AMudOh6VG4i2pIHqTab5JVf7vAtdg6%2FyGV8kAiEA4cTzpUiabfUIpB57tvsWCmjdim7MDf6M9mKzzDSEiBoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuWHlLaoc2bJ4prjircA7RGrDkd6lsmt3gYRdZ9mfODBhxJQIbnV4oPEXqJ%2BnUxjCaimylWl1HIMSrY9QOQyrUfuWdCxfOGLczoi4bkrCTVOXwtfFkI%2BqWvSeiWQ2cU4lCyZS5dqotdtJuUpsk8tlP16n0aBtknkMucqZ5gGhJVZC%2Fcz9R6ace5dLOPZayfjW1bAwQNO2jdf37Is18hiAY5mJY0ntUwqBbpr74XXmWz8GjBTl05Uw14i5G1REDJKyIKSn9KKRgsH93fdf%2BagNzv4fulWZSHxZ%2BSGIEMMyGVmnNHTpQpghx%2FBqMemVaA%2FzfKOixlyaGf7yyk1Bh2g3w3NhaO2oPsCeBTA5HwGqtD8lmR8lx3vfl4yqY1oUhQDJFVWehbkES8SFmzDF60lTWQ07Vv6b7QcfGuF7R5zausoDr9pbyltS9eA0q1leoRwaLaiEcogqggk70irSix%2Bf1QzOYj7wgFY4s93OKSZh0AV7by5JyNGzX9wG0r4%2BiBS1mJBhAYrwxzTbQfU7er6RwCqlRQxfrONuwhXBN3NiMyCXiVMkOW8SIjUIgGMTZutOnwd2ZVBVtfbmqNsQuZKN8eMQMRZs9cc9g80x%2F86n76GId9ab5bI9e7Wr6OJgxATreDxm79wP2nj0htMKju170GOqUBI5MYz834fyrBmk4Jfdj07zy%2Fu9AvVpTI2sWvQdn5et5dhpMZ8XXlFec2%2FnWHcNHgakmihXbK3lGGuC6xIL5O51woR3ajBbXx1SPxUi81PTzn%2BeFsG309x4rsFbUufSyB02yXBx2k5VvZ9UtzeyChKkSOdthOHrRis5OD9Sycf3ZxEmfEl9U4dOrk2jVJWNiiMt%2B95usHX0V0WzlzlgZ%2BZiRAGcsh&X-Amz-Signature=3c62708594581c55aec39e0b1da33489b72e305d98924f83340d0ed3145b345a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHTSFJNF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAlzfF6AMudOh6VG4i2pIHqTab5JVf7vAtdg6%2FyGV8kAiEA4cTzpUiabfUIpB57tvsWCmjdim7MDf6M9mKzzDSEiBoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuWHlLaoc2bJ4prjircA7RGrDkd6lsmt3gYRdZ9mfODBhxJQIbnV4oPEXqJ%2BnUxjCaimylWl1HIMSrY9QOQyrUfuWdCxfOGLczoi4bkrCTVOXwtfFkI%2BqWvSeiWQ2cU4lCyZS5dqotdtJuUpsk8tlP16n0aBtknkMucqZ5gGhJVZC%2Fcz9R6ace5dLOPZayfjW1bAwQNO2jdf37Is18hiAY5mJY0ntUwqBbpr74XXmWz8GjBTl05Uw14i5G1REDJKyIKSn9KKRgsH93fdf%2BagNzv4fulWZSHxZ%2BSGIEMMyGVmnNHTpQpghx%2FBqMemVaA%2FzfKOixlyaGf7yyk1Bh2g3w3NhaO2oPsCeBTA5HwGqtD8lmR8lx3vfl4yqY1oUhQDJFVWehbkES8SFmzDF60lTWQ07Vv6b7QcfGuF7R5zausoDr9pbyltS9eA0q1leoRwaLaiEcogqggk70irSix%2Bf1QzOYj7wgFY4s93OKSZh0AV7by5JyNGzX9wG0r4%2BiBS1mJBhAYrwxzTbQfU7er6RwCqlRQxfrONuwhXBN3NiMyCXiVMkOW8SIjUIgGMTZutOnwd2ZVBVtfbmqNsQuZKN8eMQMRZs9cc9g80x%2F86n76GId9ab5bI9e7Wr6OJgxATreDxm79wP2nj0htMKju170GOqUBI5MYz834fyrBmk4Jfdj07zy%2Fu9AvVpTI2sWvQdn5et5dhpMZ8XXlFec2%2FnWHcNHgakmihXbK3lGGuC6xIL5O51woR3ajBbXx1SPxUi81PTzn%2BeFsG309x4rsFbUufSyB02yXBx2k5VvZ9UtzeyChKkSOdthOHrRis5OD9Sycf3ZxEmfEl9U4dOrk2jVJWNiiMt%2B95usHX0V0WzlzlgZ%2BZiRAGcsh&X-Amz-Signature=76e6b639efce4dd83ced56ba2fc49af479e4f4063156e45a033065537525bbca&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHTSFJNF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAlzfF6AMudOh6VG4i2pIHqTab5JVf7vAtdg6%2FyGV8kAiEA4cTzpUiabfUIpB57tvsWCmjdim7MDf6M9mKzzDSEiBoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuWHlLaoc2bJ4prjircA7RGrDkd6lsmt3gYRdZ9mfODBhxJQIbnV4oPEXqJ%2BnUxjCaimylWl1HIMSrY9QOQyrUfuWdCxfOGLczoi4bkrCTVOXwtfFkI%2BqWvSeiWQ2cU4lCyZS5dqotdtJuUpsk8tlP16n0aBtknkMucqZ5gGhJVZC%2Fcz9R6ace5dLOPZayfjW1bAwQNO2jdf37Is18hiAY5mJY0ntUwqBbpr74XXmWz8GjBTl05Uw14i5G1REDJKyIKSn9KKRgsH93fdf%2BagNzv4fulWZSHxZ%2BSGIEMMyGVmnNHTpQpghx%2FBqMemVaA%2FzfKOixlyaGf7yyk1Bh2g3w3NhaO2oPsCeBTA5HwGqtD8lmR8lx3vfl4yqY1oUhQDJFVWehbkES8SFmzDF60lTWQ07Vv6b7QcfGuF7R5zausoDr9pbyltS9eA0q1leoRwaLaiEcogqggk70irSix%2Bf1QzOYj7wgFY4s93OKSZh0AV7by5JyNGzX9wG0r4%2BiBS1mJBhAYrwxzTbQfU7er6RwCqlRQxfrONuwhXBN3NiMyCXiVMkOW8SIjUIgGMTZutOnwd2ZVBVtfbmqNsQuZKN8eMQMRZs9cc9g80x%2F86n76GId9ab5bI9e7Wr6OJgxATreDxm79wP2nj0htMKju170GOqUBI5MYz834fyrBmk4Jfdj07zy%2Fu9AvVpTI2sWvQdn5et5dhpMZ8XXlFec2%2FnWHcNHgakmihXbK3lGGuC6xIL5O51woR3ajBbXx1SPxUi81PTzn%2BeFsG309x4rsFbUufSyB02yXBx2k5VvZ9UtzeyChKkSOdthOHrRis5OD9Sycf3ZxEmfEl9U4dOrk2jVJWNiiMt%2B95usHX0V0WzlzlgZ%2BZiRAGcsh&X-Amz-Signature=0e5c4da821ecf9cb543844b00ec49f93acb020d58caa2a3091929936d2cadb39&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHTSFJNF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAlzfF6AMudOh6VG4i2pIHqTab5JVf7vAtdg6%2FyGV8kAiEA4cTzpUiabfUIpB57tvsWCmjdim7MDf6M9mKzzDSEiBoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuWHlLaoc2bJ4prjircA7RGrDkd6lsmt3gYRdZ9mfODBhxJQIbnV4oPEXqJ%2BnUxjCaimylWl1HIMSrY9QOQyrUfuWdCxfOGLczoi4bkrCTVOXwtfFkI%2BqWvSeiWQ2cU4lCyZS5dqotdtJuUpsk8tlP16n0aBtknkMucqZ5gGhJVZC%2Fcz9R6ace5dLOPZayfjW1bAwQNO2jdf37Is18hiAY5mJY0ntUwqBbpr74XXmWz8GjBTl05Uw14i5G1REDJKyIKSn9KKRgsH93fdf%2BagNzv4fulWZSHxZ%2BSGIEMMyGVmnNHTpQpghx%2FBqMemVaA%2FzfKOixlyaGf7yyk1Bh2g3w3NhaO2oPsCeBTA5HwGqtD8lmR8lx3vfl4yqY1oUhQDJFVWehbkES8SFmzDF60lTWQ07Vv6b7QcfGuF7R5zausoDr9pbyltS9eA0q1leoRwaLaiEcogqggk70irSix%2Bf1QzOYj7wgFY4s93OKSZh0AV7by5JyNGzX9wG0r4%2BiBS1mJBhAYrwxzTbQfU7er6RwCqlRQxfrONuwhXBN3NiMyCXiVMkOW8SIjUIgGMTZutOnwd2ZVBVtfbmqNsQuZKN8eMQMRZs9cc9g80x%2F86n76GId9ab5bI9e7Wr6OJgxATreDxm79wP2nj0htMKju170GOqUBI5MYz834fyrBmk4Jfdj07zy%2Fu9AvVpTI2sWvQdn5et5dhpMZ8XXlFec2%2FnWHcNHgakmihXbK3lGGuC6xIL5O51woR3ajBbXx1SPxUi81PTzn%2BeFsG309x4rsFbUufSyB02yXBx2k5VvZ9UtzeyChKkSOdthOHrRis5OD9Sycf3ZxEmfEl9U4dOrk2jVJWNiiMt%2B95usHX0V0WzlzlgZ%2BZiRAGcsh&X-Amz-Signature=90eaae6249fb955c964f357ca5f7df950b45d7420ff8958f2b6cb3f3a0751c58&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHTSFJNF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAlzfF6AMudOh6VG4i2pIHqTab5JVf7vAtdg6%2FyGV8kAiEA4cTzpUiabfUIpB57tvsWCmjdim7MDf6M9mKzzDSEiBoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuWHlLaoc2bJ4prjircA7RGrDkd6lsmt3gYRdZ9mfODBhxJQIbnV4oPEXqJ%2BnUxjCaimylWl1HIMSrY9QOQyrUfuWdCxfOGLczoi4bkrCTVOXwtfFkI%2BqWvSeiWQ2cU4lCyZS5dqotdtJuUpsk8tlP16n0aBtknkMucqZ5gGhJVZC%2Fcz9R6ace5dLOPZayfjW1bAwQNO2jdf37Is18hiAY5mJY0ntUwqBbpr74XXmWz8GjBTl05Uw14i5G1REDJKyIKSn9KKRgsH93fdf%2BagNzv4fulWZSHxZ%2BSGIEMMyGVmnNHTpQpghx%2FBqMemVaA%2FzfKOixlyaGf7yyk1Bh2g3w3NhaO2oPsCeBTA5HwGqtD8lmR8lx3vfl4yqY1oUhQDJFVWehbkES8SFmzDF60lTWQ07Vv6b7QcfGuF7R5zausoDr9pbyltS9eA0q1leoRwaLaiEcogqggk70irSix%2Bf1QzOYj7wgFY4s93OKSZh0AV7by5JyNGzX9wG0r4%2BiBS1mJBhAYrwxzTbQfU7er6RwCqlRQxfrONuwhXBN3NiMyCXiVMkOW8SIjUIgGMTZutOnwd2ZVBVtfbmqNsQuZKN8eMQMRZs9cc9g80x%2F86n76GId9ab5bI9e7Wr6OJgxATreDxm79wP2nj0htMKju170GOqUBI5MYz834fyrBmk4Jfdj07zy%2Fu9AvVpTI2sWvQdn5et5dhpMZ8XXlFec2%2FnWHcNHgakmihXbK3lGGuC6xIL5O51woR3ajBbXx1SPxUi81PTzn%2BeFsG309x4rsFbUufSyB02yXBx2k5VvZ9UtzeyChKkSOdthOHrRis5OD9Sycf3ZxEmfEl9U4dOrk2jVJWNiiMt%2B95usHX0V0WzlzlgZ%2BZiRAGcsh&X-Amz-Signature=99c75f4ef3409f268bf65bedc8af8eeb9675746c7090d59446d1c632fb7a8b00&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHTSFJNF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAlzfF6AMudOh6VG4i2pIHqTab5JVf7vAtdg6%2FyGV8kAiEA4cTzpUiabfUIpB57tvsWCmjdim7MDf6M9mKzzDSEiBoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuWHlLaoc2bJ4prjircA7RGrDkd6lsmt3gYRdZ9mfODBhxJQIbnV4oPEXqJ%2BnUxjCaimylWl1HIMSrY9QOQyrUfuWdCxfOGLczoi4bkrCTVOXwtfFkI%2BqWvSeiWQ2cU4lCyZS5dqotdtJuUpsk8tlP16n0aBtknkMucqZ5gGhJVZC%2Fcz9R6ace5dLOPZayfjW1bAwQNO2jdf37Is18hiAY5mJY0ntUwqBbpr74XXmWz8GjBTl05Uw14i5G1REDJKyIKSn9KKRgsH93fdf%2BagNzv4fulWZSHxZ%2BSGIEMMyGVmnNHTpQpghx%2FBqMemVaA%2FzfKOixlyaGf7yyk1Bh2g3w3NhaO2oPsCeBTA5HwGqtD8lmR8lx3vfl4yqY1oUhQDJFVWehbkES8SFmzDF60lTWQ07Vv6b7QcfGuF7R5zausoDr9pbyltS9eA0q1leoRwaLaiEcogqggk70irSix%2Bf1QzOYj7wgFY4s93OKSZh0AV7by5JyNGzX9wG0r4%2BiBS1mJBhAYrwxzTbQfU7er6RwCqlRQxfrONuwhXBN3NiMyCXiVMkOW8SIjUIgGMTZutOnwd2ZVBVtfbmqNsQuZKN8eMQMRZs9cc9g80x%2F86n76GId9ab5bI9e7Wr6OJgxATreDxm79wP2nj0htMKju170GOqUBI5MYz834fyrBmk4Jfdj07zy%2Fu9AvVpTI2sWvQdn5et5dhpMZ8XXlFec2%2FnWHcNHgakmihXbK3lGGuC6xIL5O51woR3ajBbXx1SPxUi81PTzn%2BeFsG309x4rsFbUufSyB02yXBx2k5VvZ9UtzeyChKkSOdthOHrRis5OD9Sycf3ZxEmfEl9U4dOrk2jVJWNiiMt%2B95usHX0V0WzlzlgZ%2BZiRAGcsh&X-Amz-Signature=fbd3cfa6e905f7be557d92e66514b8808c829d1aef8af1991e29b1777d2e33bd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHTSFJNF%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAlzfF6AMudOh6VG4i2pIHqTab5JVf7vAtdg6%2FyGV8kAiEA4cTzpUiabfUIpB57tvsWCmjdim7MDf6M9mKzzDSEiBoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuWHlLaoc2bJ4prjircA7RGrDkd6lsmt3gYRdZ9mfODBhxJQIbnV4oPEXqJ%2BnUxjCaimylWl1HIMSrY9QOQyrUfuWdCxfOGLczoi4bkrCTVOXwtfFkI%2BqWvSeiWQ2cU4lCyZS5dqotdtJuUpsk8tlP16n0aBtknkMucqZ5gGhJVZC%2Fcz9R6ace5dLOPZayfjW1bAwQNO2jdf37Is18hiAY5mJY0ntUwqBbpr74XXmWz8GjBTl05Uw14i5G1REDJKyIKSn9KKRgsH93fdf%2BagNzv4fulWZSHxZ%2BSGIEMMyGVmnNHTpQpghx%2FBqMemVaA%2FzfKOixlyaGf7yyk1Bh2g3w3NhaO2oPsCeBTA5HwGqtD8lmR8lx3vfl4yqY1oUhQDJFVWehbkES8SFmzDF60lTWQ07Vv6b7QcfGuF7R5zausoDr9pbyltS9eA0q1leoRwaLaiEcogqggk70irSix%2Bf1QzOYj7wgFY4s93OKSZh0AV7by5JyNGzX9wG0r4%2BiBS1mJBhAYrwxzTbQfU7er6RwCqlRQxfrONuwhXBN3NiMyCXiVMkOW8SIjUIgGMTZutOnwd2ZVBVtfbmqNsQuZKN8eMQMRZs9cc9g80x%2F86n76GId9ab5bI9e7Wr6OJgxATreDxm79wP2nj0htMKju170GOqUBI5MYz834fyrBmk4Jfdj07zy%2Fu9AvVpTI2sWvQdn5et5dhpMZ8XXlFec2%2FnWHcNHgakmihXbK3lGGuC6xIL5O51woR3ajBbXx1SPxUi81PTzn%2BeFsG309x4rsFbUufSyB02yXBx2k5VvZ9UtzeyChKkSOdthOHrRis5OD9Sycf3ZxEmfEl9U4dOrk2jVJWNiiMt%2B95usHX0V0WzlzlgZ%2BZiRAGcsh&X-Amz-Signature=fe1c9e8e707674d1c99fb0241b4ec7cebf27cdbac7b649f77506b7c69707041f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
