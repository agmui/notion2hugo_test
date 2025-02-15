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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5UE2SR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC5lBzFT2h0QyfPqts0PNZLtKBS6NfHCRmYslE2W7NG0QIhAIZ8LE3sDjTWgcpAmnV7LyhzOZoQBeTybHGFiiz6EXPGKv8DCEsQABoMNjM3NDIzMTgzODA1Igz919bhx6Eo3N2jcxMq3ANDs%2BrEDdDnZ6VzTjQmV0QeGNT5bNdBrTzGtPftCWVs26%2Fq%2FcOFYJINb65tJJgfmgAywAjAFAX9qmRuQhA3XtKbULodszCQnS8LQKpW1rXTwxTI7c9t4YEkX4Z4kixCG%2BZWMIVlCZ4a3Ow98iHTiPCh%2FjBicTwlAS2YOb9VsSnyXWXR%2BrMY3rKPEF6BMHBiRA3w8UPdxyaqccEiCVlwNdmKhYc1djWW3y%2FgLn3GBa8jybX26RVH4gceRhYheTr7QOLpxGDEC89BGVHuI8XSPqpIqiv8%2FxuFGmUkISANTTZjzZtioKZlWgBAMXtADhR0H%2FQL6zkL7EvQd%2BC7TaCB88Dr1bnvDEjbOjzbSKu4DHa5qSrHtYcO%2BvHPk590Cn41%2FHAe9dqFd7252Kqdc%2Bc5GZeS%2BG%2BiWG5ypcEkP01fvijPx2a2%2B7%2BdBmlD%2FYhEvz2hAMJ0Gwiniti4%2BKDcaSir%2Bd2qhlboWH2MKGKS%2BvuevgSHG%2BxlvSwxvmpwBFCBXbSFXFtC0Iz3gfnIIHS1pqApY3KEUr0bBTvBcDzm8qTBrt38DWuggSQoVI786RCQTBX92QccMga7ePkNZMLHtG4o7%2FC1XrzZHm7TDOJOxosuWRyD6QkWbJ9FM2%2Bt9k6W%2BTCGnMO9BjqkAYgwA8qp6IDvgrjPJ006mMlbguhKktq%2F%2BUEk4x%2BGCyJ3tZqJ9oajzTTRVYSGGweuEiI0J0p8i%2BDCqUrt3WuXfslWBdLt2rTRjIiErLpQ%2FXMnc2I2sgAv%2BsvwOeklY8dGhgAWFaxrGyYzN11Pfn5QFvRDyte3lMp0OQBw8aHaUoopN6gYgqsl1i3B44khxjKUexgBBvS3rkhSNyAVWlnwf%2F6x68GP&X-Amz-Signature=41b96d4de40fc01147aefdee2be26e7dabbe7d41751ee1ea437e088721c62305&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5UE2SR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC5lBzFT2h0QyfPqts0PNZLtKBS6NfHCRmYslE2W7NG0QIhAIZ8LE3sDjTWgcpAmnV7LyhzOZoQBeTybHGFiiz6EXPGKv8DCEsQABoMNjM3NDIzMTgzODA1Igz919bhx6Eo3N2jcxMq3ANDs%2BrEDdDnZ6VzTjQmV0QeGNT5bNdBrTzGtPftCWVs26%2Fq%2FcOFYJINb65tJJgfmgAywAjAFAX9qmRuQhA3XtKbULodszCQnS8LQKpW1rXTwxTI7c9t4YEkX4Z4kixCG%2BZWMIVlCZ4a3Ow98iHTiPCh%2FjBicTwlAS2YOb9VsSnyXWXR%2BrMY3rKPEF6BMHBiRA3w8UPdxyaqccEiCVlwNdmKhYc1djWW3y%2FgLn3GBa8jybX26RVH4gceRhYheTr7QOLpxGDEC89BGVHuI8XSPqpIqiv8%2FxuFGmUkISANTTZjzZtioKZlWgBAMXtADhR0H%2FQL6zkL7EvQd%2BC7TaCB88Dr1bnvDEjbOjzbSKu4DHa5qSrHtYcO%2BvHPk590Cn41%2FHAe9dqFd7252Kqdc%2Bc5GZeS%2BG%2BiWG5ypcEkP01fvijPx2a2%2B7%2BdBmlD%2FYhEvz2hAMJ0Gwiniti4%2BKDcaSir%2Bd2qhlboWH2MKGKS%2BvuevgSHG%2BxlvSwxvmpwBFCBXbSFXFtC0Iz3gfnIIHS1pqApY3KEUr0bBTvBcDzm8qTBrt38DWuggSQoVI786RCQTBX92QccMga7ePkNZMLHtG4o7%2FC1XrzZHm7TDOJOxosuWRyD6QkWbJ9FM2%2Bt9k6W%2BTCGnMO9BjqkAYgwA8qp6IDvgrjPJ006mMlbguhKktq%2F%2BUEk4x%2BGCyJ3tZqJ9oajzTTRVYSGGweuEiI0J0p8i%2BDCqUrt3WuXfslWBdLt2rTRjIiErLpQ%2FXMnc2I2sgAv%2BsvwOeklY8dGhgAWFaxrGyYzN11Pfn5QFvRDyte3lMp0OQBw8aHaUoopN6gYgqsl1i3B44khxjKUexgBBvS3rkhSNyAVWlnwf%2F6x68GP&X-Amz-Signature=c29fcda5da82206e9683578d1bb859f73c0c071c1046b5c5e3f6d1907127542a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5UE2SR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC5lBzFT2h0QyfPqts0PNZLtKBS6NfHCRmYslE2W7NG0QIhAIZ8LE3sDjTWgcpAmnV7LyhzOZoQBeTybHGFiiz6EXPGKv8DCEsQABoMNjM3NDIzMTgzODA1Igz919bhx6Eo3N2jcxMq3ANDs%2BrEDdDnZ6VzTjQmV0QeGNT5bNdBrTzGtPftCWVs26%2Fq%2FcOFYJINb65tJJgfmgAywAjAFAX9qmRuQhA3XtKbULodszCQnS8LQKpW1rXTwxTI7c9t4YEkX4Z4kixCG%2BZWMIVlCZ4a3Ow98iHTiPCh%2FjBicTwlAS2YOb9VsSnyXWXR%2BrMY3rKPEF6BMHBiRA3w8UPdxyaqccEiCVlwNdmKhYc1djWW3y%2FgLn3GBa8jybX26RVH4gceRhYheTr7QOLpxGDEC89BGVHuI8XSPqpIqiv8%2FxuFGmUkISANTTZjzZtioKZlWgBAMXtADhR0H%2FQL6zkL7EvQd%2BC7TaCB88Dr1bnvDEjbOjzbSKu4DHa5qSrHtYcO%2BvHPk590Cn41%2FHAe9dqFd7252Kqdc%2Bc5GZeS%2BG%2BiWG5ypcEkP01fvijPx2a2%2B7%2BdBmlD%2FYhEvz2hAMJ0Gwiniti4%2BKDcaSir%2Bd2qhlboWH2MKGKS%2BvuevgSHG%2BxlvSwxvmpwBFCBXbSFXFtC0Iz3gfnIIHS1pqApY3KEUr0bBTvBcDzm8qTBrt38DWuggSQoVI786RCQTBX92QccMga7ePkNZMLHtG4o7%2FC1XrzZHm7TDOJOxosuWRyD6QkWbJ9FM2%2Bt9k6W%2BTCGnMO9BjqkAYgwA8qp6IDvgrjPJ006mMlbguhKktq%2F%2BUEk4x%2BGCyJ3tZqJ9oajzTTRVYSGGweuEiI0J0p8i%2BDCqUrt3WuXfslWBdLt2rTRjIiErLpQ%2FXMnc2I2sgAv%2BsvwOeklY8dGhgAWFaxrGyYzN11Pfn5QFvRDyte3lMp0OQBw8aHaUoopN6gYgqsl1i3B44khxjKUexgBBvS3rkhSNyAVWlnwf%2F6x68GP&X-Amz-Signature=70d20d14b14e9f81cf90f2a4aaa4ecef5a85833105149e45ebba74842fec6b00&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5UE2SR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC5lBzFT2h0QyfPqts0PNZLtKBS6NfHCRmYslE2W7NG0QIhAIZ8LE3sDjTWgcpAmnV7LyhzOZoQBeTybHGFiiz6EXPGKv8DCEsQABoMNjM3NDIzMTgzODA1Igz919bhx6Eo3N2jcxMq3ANDs%2BrEDdDnZ6VzTjQmV0QeGNT5bNdBrTzGtPftCWVs26%2Fq%2FcOFYJINb65tJJgfmgAywAjAFAX9qmRuQhA3XtKbULodszCQnS8LQKpW1rXTwxTI7c9t4YEkX4Z4kixCG%2BZWMIVlCZ4a3Ow98iHTiPCh%2FjBicTwlAS2YOb9VsSnyXWXR%2BrMY3rKPEF6BMHBiRA3w8UPdxyaqccEiCVlwNdmKhYc1djWW3y%2FgLn3GBa8jybX26RVH4gceRhYheTr7QOLpxGDEC89BGVHuI8XSPqpIqiv8%2FxuFGmUkISANTTZjzZtioKZlWgBAMXtADhR0H%2FQL6zkL7EvQd%2BC7TaCB88Dr1bnvDEjbOjzbSKu4DHa5qSrHtYcO%2BvHPk590Cn41%2FHAe9dqFd7252Kqdc%2Bc5GZeS%2BG%2BiWG5ypcEkP01fvijPx2a2%2B7%2BdBmlD%2FYhEvz2hAMJ0Gwiniti4%2BKDcaSir%2Bd2qhlboWH2MKGKS%2BvuevgSHG%2BxlvSwxvmpwBFCBXbSFXFtC0Iz3gfnIIHS1pqApY3KEUr0bBTvBcDzm8qTBrt38DWuggSQoVI786RCQTBX92QccMga7ePkNZMLHtG4o7%2FC1XrzZHm7TDOJOxosuWRyD6QkWbJ9FM2%2Bt9k6W%2BTCGnMO9BjqkAYgwA8qp6IDvgrjPJ006mMlbguhKktq%2F%2BUEk4x%2BGCyJ3tZqJ9oajzTTRVYSGGweuEiI0J0p8i%2BDCqUrt3WuXfslWBdLt2rTRjIiErLpQ%2FXMnc2I2sgAv%2BsvwOeklY8dGhgAWFaxrGyYzN11Pfn5QFvRDyte3lMp0OQBw8aHaUoopN6gYgqsl1i3B44khxjKUexgBBvS3rkhSNyAVWlnwf%2F6x68GP&X-Amz-Signature=a0efbbfa3622ef64bb1660030d305023cefd6063b7bf99e0145028e79e228e05&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5UE2SR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC5lBzFT2h0QyfPqts0PNZLtKBS6NfHCRmYslE2W7NG0QIhAIZ8LE3sDjTWgcpAmnV7LyhzOZoQBeTybHGFiiz6EXPGKv8DCEsQABoMNjM3NDIzMTgzODA1Igz919bhx6Eo3N2jcxMq3ANDs%2BrEDdDnZ6VzTjQmV0QeGNT5bNdBrTzGtPftCWVs26%2Fq%2FcOFYJINb65tJJgfmgAywAjAFAX9qmRuQhA3XtKbULodszCQnS8LQKpW1rXTwxTI7c9t4YEkX4Z4kixCG%2BZWMIVlCZ4a3Ow98iHTiPCh%2FjBicTwlAS2YOb9VsSnyXWXR%2BrMY3rKPEF6BMHBiRA3w8UPdxyaqccEiCVlwNdmKhYc1djWW3y%2FgLn3GBa8jybX26RVH4gceRhYheTr7QOLpxGDEC89BGVHuI8XSPqpIqiv8%2FxuFGmUkISANTTZjzZtioKZlWgBAMXtADhR0H%2FQL6zkL7EvQd%2BC7TaCB88Dr1bnvDEjbOjzbSKu4DHa5qSrHtYcO%2BvHPk590Cn41%2FHAe9dqFd7252Kqdc%2Bc5GZeS%2BG%2BiWG5ypcEkP01fvijPx2a2%2B7%2BdBmlD%2FYhEvz2hAMJ0Gwiniti4%2BKDcaSir%2Bd2qhlboWH2MKGKS%2BvuevgSHG%2BxlvSwxvmpwBFCBXbSFXFtC0Iz3gfnIIHS1pqApY3KEUr0bBTvBcDzm8qTBrt38DWuggSQoVI786RCQTBX92QccMga7ePkNZMLHtG4o7%2FC1XrzZHm7TDOJOxosuWRyD6QkWbJ9FM2%2Bt9k6W%2BTCGnMO9BjqkAYgwA8qp6IDvgrjPJ006mMlbguhKktq%2F%2BUEk4x%2BGCyJ3tZqJ9oajzTTRVYSGGweuEiI0J0p8i%2BDCqUrt3WuXfslWBdLt2rTRjIiErLpQ%2FXMnc2I2sgAv%2BsvwOeklY8dGhgAWFaxrGyYzN11Pfn5QFvRDyte3lMp0OQBw8aHaUoopN6gYgqsl1i3B44khxjKUexgBBvS3rkhSNyAVWlnwf%2F6x68GP&X-Amz-Signature=f2a9f6a7a5e5726aeb7b8f79ddd339189519fd7cf9806c05535831284b8912f7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5UE2SR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC5lBzFT2h0QyfPqts0PNZLtKBS6NfHCRmYslE2W7NG0QIhAIZ8LE3sDjTWgcpAmnV7LyhzOZoQBeTybHGFiiz6EXPGKv8DCEsQABoMNjM3NDIzMTgzODA1Igz919bhx6Eo3N2jcxMq3ANDs%2BrEDdDnZ6VzTjQmV0QeGNT5bNdBrTzGtPftCWVs26%2Fq%2FcOFYJINb65tJJgfmgAywAjAFAX9qmRuQhA3XtKbULodszCQnS8LQKpW1rXTwxTI7c9t4YEkX4Z4kixCG%2BZWMIVlCZ4a3Ow98iHTiPCh%2FjBicTwlAS2YOb9VsSnyXWXR%2BrMY3rKPEF6BMHBiRA3w8UPdxyaqccEiCVlwNdmKhYc1djWW3y%2FgLn3GBa8jybX26RVH4gceRhYheTr7QOLpxGDEC89BGVHuI8XSPqpIqiv8%2FxuFGmUkISANTTZjzZtioKZlWgBAMXtADhR0H%2FQL6zkL7EvQd%2BC7TaCB88Dr1bnvDEjbOjzbSKu4DHa5qSrHtYcO%2BvHPk590Cn41%2FHAe9dqFd7252Kqdc%2Bc5GZeS%2BG%2BiWG5ypcEkP01fvijPx2a2%2B7%2BdBmlD%2FYhEvz2hAMJ0Gwiniti4%2BKDcaSir%2Bd2qhlboWH2MKGKS%2BvuevgSHG%2BxlvSwxvmpwBFCBXbSFXFtC0Iz3gfnIIHS1pqApY3KEUr0bBTvBcDzm8qTBrt38DWuggSQoVI786RCQTBX92QccMga7ePkNZMLHtG4o7%2FC1XrzZHm7TDOJOxosuWRyD6QkWbJ9FM2%2Bt9k6W%2BTCGnMO9BjqkAYgwA8qp6IDvgrjPJ006mMlbguhKktq%2F%2BUEk4x%2BGCyJ3tZqJ9oajzTTRVYSGGweuEiI0J0p8i%2BDCqUrt3WuXfslWBdLt2rTRjIiErLpQ%2FXMnc2I2sgAv%2BsvwOeklY8dGhgAWFaxrGyYzN11Pfn5QFvRDyte3lMp0OQBw8aHaUoopN6gYgqsl1i3B44khxjKUexgBBvS3rkhSNyAVWlnwf%2F6x68GP&X-Amz-Signature=e2c8b2279974b6ff79bb572f6a6430a5a43cfc43133ab96dfb7892f939db97a9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y5UE2SR%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC5lBzFT2h0QyfPqts0PNZLtKBS6NfHCRmYslE2W7NG0QIhAIZ8LE3sDjTWgcpAmnV7LyhzOZoQBeTybHGFiiz6EXPGKv8DCEsQABoMNjM3NDIzMTgzODA1Igz919bhx6Eo3N2jcxMq3ANDs%2BrEDdDnZ6VzTjQmV0QeGNT5bNdBrTzGtPftCWVs26%2Fq%2FcOFYJINb65tJJgfmgAywAjAFAX9qmRuQhA3XtKbULodszCQnS8LQKpW1rXTwxTI7c9t4YEkX4Z4kixCG%2BZWMIVlCZ4a3Ow98iHTiPCh%2FjBicTwlAS2YOb9VsSnyXWXR%2BrMY3rKPEF6BMHBiRA3w8UPdxyaqccEiCVlwNdmKhYc1djWW3y%2FgLn3GBa8jybX26RVH4gceRhYheTr7QOLpxGDEC89BGVHuI8XSPqpIqiv8%2FxuFGmUkISANTTZjzZtioKZlWgBAMXtADhR0H%2FQL6zkL7EvQd%2BC7TaCB88Dr1bnvDEjbOjzbSKu4DHa5qSrHtYcO%2BvHPk590Cn41%2FHAe9dqFd7252Kqdc%2Bc5GZeS%2BG%2BiWG5ypcEkP01fvijPx2a2%2B7%2BdBmlD%2FYhEvz2hAMJ0Gwiniti4%2BKDcaSir%2Bd2qhlboWH2MKGKS%2BvuevgSHG%2BxlvSwxvmpwBFCBXbSFXFtC0Iz3gfnIIHS1pqApY3KEUr0bBTvBcDzm8qTBrt38DWuggSQoVI786RCQTBX92QccMga7ePkNZMLHtG4o7%2FC1XrzZHm7TDOJOxosuWRyD6QkWbJ9FM2%2Bt9k6W%2BTCGnMO9BjqkAYgwA8qp6IDvgrjPJ006mMlbguhKktq%2F%2BUEk4x%2BGCyJ3tZqJ9oajzTTRVYSGGweuEiI0J0p8i%2BDCqUrt3WuXfslWBdLt2rTRjIiErLpQ%2FXMnc2I2sgAv%2BsvwOeklY8dGhgAWFaxrGyYzN11Pfn5QFvRDyte3lMp0OQBw8aHaUoopN6gYgqsl1i3B44khxjKUexgBBvS3rkhSNyAVWlnwf%2F6x68GP&X-Amz-Signature=8c4278cd007d289b8c986467f380abd5fc8ed2eae3311b2c288fc22a48fadd68&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
