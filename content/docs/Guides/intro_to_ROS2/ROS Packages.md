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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZVDI53%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbhpzkPB3nOtAUgcgFCo4v6%2B6puwRCCXARZ7ggWqKsvAiBBZWR2TWXnuR4O%2Biy3SgPeSFMH3OI7I3K%2BqK0FmQxqXyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHdPdhFan%2B2TfXHGRKtwD%2F4A1cZw3ba%2BP8HZ8y3XJx4hxpxsF1YwFC%2FMdW6%2F8Hbtet4qvcrd3r3hPtmQYBHrVM8%2FYrD6u%2BI121uF8W1NNz8axuoQ4yGMb3CWZ2WY%2B5dKeGmzo9fXb0cGo81Rrr83lszzdBa9XmOtkXWkLkztn%2Bv3RcdvuO1CtdwyS%2FdpQhyZxOWfvmtF6FIYuZuHZPE2ewTnHdTrmIhzj8IuJyfln0C%2BiOv9jN0fCUOQpl%2BC0iybNFH2R%2BuhHshJ5cUcKo4vv5N3M%2F1mFY1FBNtrQUCOeJ1Y1JqIzUmAdNsZrOlZ6GlBYkNyvKti4CqQzneWFVNa55%2B3Vs8ApmPB0HfxOHXxw6Lfc6XrLcHEieCvZqzc9L1HqcWy7P8t%2FoMn0rUG3%2Fmu%2F%2BCR3TO8MirzQxGZvBSNAdhlMoRYE3bnOyN%2BB9BPQVJtuodB6sUigGkT1lcYeGNeKA2P0JSJvUqZA9WdPTIY3IZDoThuLmN6JhD5DPuRL56kEh9LW%2F8ohBqlUwATbLptuVcDN0DWwvvZJ7Mmu00jpjwun0PKydX6ax0UDOgiFeDLdRFLVxqIKzw6X2SvM5QrP4ZFCiO7NQiTPV7o8EG9UB2tuWuom3yaMMpCMWsrtZwZGKaxaBc6ZWn4bn2Awsr2XvgY6pgH9UiOzqG6JAvwkVX47%2BZyHljnpoUIM4cUODYtla6bmtOnXLJmPVUjQmMrtKpA4xSW2YUn%2B8rMNot%2BjzdLiBPpRyeHWQiV3AEUc%2Fgimwosl493Vm2u37GLXM39jtOACAArLVaQvz8DV0xsnBnRn0Unxpgohse3kxV2LM2E4mdNUjg385MSnSv3HKdOZpPLsGodxLLYGL%2FqaND6K6J6DDhOphU3oZIv9&X-Amz-Signature=da6c324df98b378bdf2cb593d519e66ce5f2f1f69d0c9c8ce35f4e33760f8eb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZVDI53%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbhpzkPB3nOtAUgcgFCo4v6%2B6puwRCCXARZ7ggWqKsvAiBBZWR2TWXnuR4O%2Biy3SgPeSFMH3OI7I3K%2BqK0FmQxqXyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHdPdhFan%2B2TfXHGRKtwD%2F4A1cZw3ba%2BP8HZ8y3XJx4hxpxsF1YwFC%2FMdW6%2F8Hbtet4qvcrd3r3hPtmQYBHrVM8%2FYrD6u%2BI121uF8W1NNz8axuoQ4yGMb3CWZ2WY%2B5dKeGmzo9fXb0cGo81Rrr83lszzdBa9XmOtkXWkLkztn%2Bv3RcdvuO1CtdwyS%2FdpQhyZxOWfvmtF6FIYuZuHZPE2ewTnHdTrmIhzj8IuJyfln0C%2BiOv9jN0fCUOQpl%2BC0iybNFH2R%2BuhHshJ5cUcKo4vv5N3M%2F1mFY1FBNtrQUCOeJ1Y1JqIzUmAdNsZrOlZ6GlBYkNyvKti4CqQzneWFVNa55%2B3Vs8ApmPB0HfxOHXxw6Lfc6XrLcHEieCvZqzc9L1HqcWy7P8t%2FoMn0rUG3%2Fmu%2F%2BCR3TO8MirzQxGZvBSNAdhlMoRYE3bnOyN%2BB9BPQVJtuodB6sUigGkT1lcYeGNeKA2P0JSJvUqZA9WdPTIY3IZDoThuLmN6JhD5DPuRL56kEh9LW%2F8ohBqlUwATbLptuVcDN0DWwvvZJ7Mmu00jpjwun0PKydX6ax0UDOgiFeDLdRFLVxqIKzw6X2SvM5QrP4ZFCiO7NQiTPV7o8EG9UB2tuWuom3yaMMpCMWsrtZwZGKaxaBc6ZWn4bn2Awsr2XvgY6pgH9UiOzqG6JAvwkVX47%2BZyHljnpoUIM4cUODYtla6bmtOnXLJmPVUjQmMrtKpA4xSW2YUn%2B8rMNot%2BjzdLiBPpRyeHWQiV3AEUc%2Fgimwosl493Vm2u37GLXM39jtOACAArLVaQvz8DV0xsnBnRn0Unxpgohse3kxV2LM2E4mdNUjg385MSnSv3HKdOZpPLsGodxLLYGL%2FqaND6K6J6DDhOphU3oZIv9&X-Amz-Signature=5217e776253562de52bdefee3723d0f77e42cf89e10dce8e8f3d1da49115acee&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZVDI53%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbhpzkPB3nOtAUgcgFCo4v6%2B6puwRCCXARZ7ggWqKsvAiBBZWR2TWXnuR4O%2Biy3SgPeSFMH3OI7I3K%2BqK0FmQxqXyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHdPdhFan%2B2TfXHGRKtwD%2F4A1cZw3ba%2BP8HZ8y3XJx4hxpxsF1YwFC%2FMdW6%2F8Hbtet4qvcrd3r3hPtmQYBHrVM8%2FYrD6u%2BI121uF8W1NNz8axuoQ4yGMb3CWZ2WY%2B5dKeGmzo9fXb0cGo81Rrr83lszzdBa9XmOtkXWkLkztn%2Bv3RcdvuO1CtdwyS%2FdpQhyZxOWfvmtF6FIYuZuHZPE2ewTnHdTrmIhzj8IuJyfln0C%2BiOv9jN0fCUOQpl%2BC0iybNFH2R%2BuhHshJ5cUcKo4vv5N3M%2F1mFY1FBNtrQUCOeJ1Y1JqIzUmAdNsZrOlZ6GlBYkNyvKti4CqQzneWFVNa55%2B3Vs8ApmPB0HfxOHXxw6Lfc6XrLcHEieCvZqzc9L1HqcWy7P8t%2FoMn0rUG3%2Fmu%2F%2BCR3TO8MirzQxGZvBSNAdhlMoRYE3bnOyN%2BB9BPQVJtuodB6sUigGkT1lcYeGNeKA2P0JSJvUqZA9WdPTIY3IZDoThuLmN6JhD5DPuRL56kEh9LW%2F8ohBqlUwATbLptuVcDN0DWwvvZJ7Mmu00jpjwun0PKydX6ax0UDOgiFeDLdRFLVxqIKzw6X2SvM5QrP4ZFCiO7NQiTPV7o8EG9UB2tuWuom3yaMMpCMWsrtZwZGKaxaBc6ZWn4bn2Awsr2XvgY6pgH9UiOzqG6JAvwkVX47%2BZyHljnpoUIM4cUODYtla6bmtOnXLJmPVUjQmMrtKpA4xSW2YUn%2B8rMNot%2BjzdLiBPpRyeHWQiV3AEUc%2Fgimwosl493Vm2u37GLXM39jtOACAArLVaQvz8DV0xsnBnRn0Unxpgohse3kxV2LM2E4mdNUjg385MSnSv3HKdOZpPLsGodxLLYGL%2FqaND6K6J6DDhOphU3oZIv9&X-Amz-Signature=fa48002714bcf9908c3c8612a1314fec62641ab6ecaedbecd84b94177aacb0f5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZVDI53%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbhpzkPB3nOtAUgcgFCo4v6%2B6puwRCCXARZ7ggWqKsvAiBBZWR2TWXnuR4O%2Biy3SgPeSFMH3OI7I3K%2BqK0FmQxqXyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHdPdhFan%2B2TfXHGRKtwD%2F4A1cZw3ba%2BP8HZ8y3XJx4hxpxsF1YwFC%2FMdW6%2F8Hbtet4qvcrd3r3hPtmQYBHrVM8%2FYrD6u%2BI121uF8W1NNz8axuoQ4yGMb3CWZ2WY%2B5dKeGmzo9fXb0cGo81Rrr83lszzdBa9XmOtkXWkLkztn%2Bv3RcdvuO1CtdwyS%2FdpQhyZxOWfvmtF6FIYuZuHZPE2ewTnHdTrmIhzj8IuJyfln0C%2BiOv9jN0fCUOQpl%2BC0iybNFH2R%2BuhHshJ5cUcKo4vv5N3M%2F1mFY1FBNtrQUCOeJ1Y1JqIzUmAdNsZrOlZ6GlBYkNyvKti4CqQzneWFVNa55%2B3Vs8ApmPB0HfxOHXxw6Lfc6XrLcHEieCvZqzc9L1HqcWy7P8t%2FoMn0rUG3%2Fmu%2F%2BCR3TO8MirzQxGZvBSNAdhlMoRYE3bnOyN%2BB9BPQVJtuodB6sUigGkT1lcYeGNeKA2P0JSJvUqZA9WdPTIY3IZDoThuLmN6JhD5DPuRL56kEh9LW%2F8ohBqlUwATbLptuVcDN0DWwvvZJ7Mmu00jpjwun0PKydX6ax0UDOgiFeDLdRFLVxqIKzw6X2SvM5QrP4ZFCiO7NQiTPV7o8EG9UB2tuWuom3yaMMpCMWsrtZwZGKaxaBc6ZWn4bn2Awsr2XvgY6pgH9UiOzqG6JAvwkVX47%2BZyHljnpoUIM4cUODYtla6bmtOnXLJmPVUjQmMrtKpA4xSW2YUn%2B8rMNot%2BjzdLiBPpRyeHWQiV3AEUc%2Fgimwosl493Vm2u37GLXM39jtOACAArLVaQvz8DV0xsnBnRn0Unxpgohse3kxV2LM2E4mdNUjg385MSnSv3HKdOZpPLsGodxLLYGL%2FqaND6K6J6DDhOphU3oZIv9&X-Amz-Signature=7cba3f927262149f47473527ca9686a5b8b12817d5dc1c8bf67b81376d028e58&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZVDI53%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbhpzkPB3nOtAUgcgFCo4v6%2B6puwRCCXARZ7ggWqKsvAiBBZWR2TWXnuR4O%2Biy3SgPeSFMH3OI7I3K%2BqK0FmQxqXyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHdPdhFan%2B2TfXHGRKtwD%2F4A1cZw3ba%2BP8HZ8y3XJx4hxpxsF1YwFC%2FMdW6%2F8Hbtet4qvcrd3r3hPtmQYBHrVM8%2FYrD6u%2BI121uF8W1NNz8axuoQ4yGMb3CWZ2WY%2B5dKeGmzo9fXb0cGo81Rrr83lszzdBa9XmOtkXWkLkztn%2Bv3RcdvuO1CtdwyS%2FdpQhyZxOWfvmtF6FIYuZuHZPE2ewTnHdTrmIhzj8IuJyfln0C%2BiOv9jN0fCUOQpl%2BC0iybNFH2R%2BuhHshJ5cUcKo4vv5N3M%2F1mFY1FBNtrQUCOeJ1Y1JqIzUmAdNsZrOlZ6GlBYkNyvKti4CqQzneWFVNa55%2B3Vs8ApmPB0HfxOHXxw6Lfc6XrLcHEieCvZqzc9L1HqcWy7P8t%2FoMn0rUG3%2Fmu%2F%2BCR3TO8MirzQxGZvBSNAdhlMoRYE3bnOyN%2BB9BPQVJtuodB6sUigGkT1lcYeGNeKA2P0JSJvUqZA9WdPTIY3IZDoThuLmN6JhD5DPuRL56kEh9LW%2F8ohBqlUwATbLptuVcDN0DWwvvZJ7Mmu00jpjwun0PKydX6ax0UDOgiFeDLdRFLVxqIKzw6X2SvM5QrP4ZFCiO7NQiTPV7o8EG9UB2tuWuom3yaMMpCMWsrtZwZGKaxaBc6ZWn4bn2Awsr2XvgY6pgH9UiOzqG6JAvwkVX47%2BZyHljnpoUIM4cUODYtla6bmtOnXLJmPVUjQmMrtKpA4xSW2YUn%2B8rMNot%2BjzdLiBPpRyeHWQiV3AEUc%2Fgimwosl493Vm2u37GLXM39jtOACAArLVaQvz8DV0xsnBnRn0Unxpgohse3kxV2LM2E4mdNUjg385MSnSv3HKdOZpPLsGodxLLYGL%2FqaND6K6J6DDhOphU3oZIv9&X-Amz-Signature=0f23661b35e2905a8e1df8ebc2d2655f3116527606637524f3c6cf11400d6f34&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZVDI53%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbhpzkPB3nOtAUgcgFCo4v6%2B6puwRCCXARZ7ggWqKsvAiBBZWR2TWXnuR4O%2Biy3SgPeSFMH3OI7I3K%2BqK0FmQxqXyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHdPdhFan%2B2TfXHGRKtwD%2F4A1cZw3ba%2BP8HZ8y3XJx4hxpxsF1YwFC%2FMdW6%2F8Hbtet4qvcrd3r3hPtmQYBHrVM8%2FYrD6u%2BI121uF8W1NNz8axuoQ4yGMb3CWZ2WY%2B5dKeGmzo9fXb0cGo81Rrr83lszzdBa9XmOtkXWkLkztn%2Bv3RcdvuO1CtdwyS%2FdpQhyZxOWfvmtF6FIYuZuHZPE2ewTnHdTrmIhzj8IuJyfln0C%2BiOv9jN0fCUOQpl%2BC0iybNFH2R%2BuhHshJ5cUcKo4vv5N3M%2F1mFY1FBNtrQUCOeJ1Y1JqIzUmAdNsZrOlZ6GlBYkNyvKti4CqQzneWFVNa55%2B3Vs8ApmPB0HfxOHXxw6Lfc6XrLcHEieCvZqzc9L1HqcWy7P8t%2FoMn0rUG3%2Fmu%2F%2BCR3TO8MirzQxGZvBSNAdhlMoRYE3bnOyN%2BB9BPQVJtuodB6sUigGkT1lcYeGNeKA2P0JSJvUqZA9WdPTIY3IZDoThuLmN6JhD5DPuRL56kEh9LW%2F8ohBqlUwATbLptuVcDN0DWwvvZJ7Mmu00jpjwun0PKydX6ax0UDOgiFeDLdRFLVxqIKzw6X2SvM5QrP4ZFCiO7NQiTPV7o8EG9UB2tuWuom3yaMMpCMWsrtZwZGKaxaBc6ZWn4bn2Awsr2XvgY6pgH9UiOzqG6JAvwkVX47%2BZyHljnpoUIM4cUODYtla6bmtOnXLJmPVUjQmMrtKpA4xSW2YUn%2B8rMNot%2BjzdLiBPpRyeHWQiV3AEUc%2Fgimwosl493Vm2u37GLXM39jtOACAArLVaQvz8DV0xsnBnRn0Unxpgohse3kxV2LM2E4mdNUjg385MSnSv3HKdOZpPLsGodxLLYGL%2FqaND6K6J6DDhOphU3oZIv9&X-Amz-Signature=4b0d2553e11e585b570a220e0a6d31b430bc72a11ee9f73cbba2ef8f72c4b2b9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZVDI53%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbhpzkPB3nOtAUgcgFCo4v6%2B6puwRCCXARZ7ggWqKsvAiBBZWR2TWXnuR4O%2Biy3SgPeSFMH3OI7I3K%2BqK0FmQxqXyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHdPdhFan%2B2TfXHGRKtwD%2F4A1cZw3ba%2BP8HZ8y3XJx4hxpxsF1YwFC%2FMdW6%2F8Hbtet4qvcrd3r3hPtmQYBHrVM8%2FYrD6u%2BI121uF8W1NNz8axuoQ4yGMb3CWZ2WY%2B5dKeGmzo9fXb0cGo81Rrr83lszzdBa9XmOtkXWkLkztn%2Bv3RcdvuO1CtdwyS%2FdpQhyZxOWfvmtF6FIYuZuHZPE2ewTnHdTrmIhzj8IuJyfln0C%2BiOv9jN0fCUOQpl%2BC0iybNFH2R%2BuhHshJ5cUcKo4vv5N3M%2F1mFY1FBNtrQUCOeJ1Y1JqIzUmAdNsZrOlZ6GlBYkNyvKti4CqQzneWFVNa55%2B3Vs8ApmPB0HfxOHXxw6Lfc6XrLcHEieCvZqzc9L1HqcWy7P8t%2FoMn0rUG3%2Fmu%2F%2BCR3TO8MirzQxGZvBSNAdhlMoRYE3bnOyN%2BB9BPQVJtuodB6sUigGkT1lcYeGNeKA2P0JSJvUqZA9WdPTIY3IZDoThuLmN6JhD5DPuRL56kEh9LW%2F8ohBqlUwATbLptuVcDN0DWwvvZJ7Mmu00jpjwun0PKydX6ax0UDOgiFeDLdRFLVxqIKzw6X2SvM5QrP4ZFCiO7NQiTPV7o8EG9UB2tuWuom3yaMMpCMWsrtZwZGKaxaBc6ZWn4bn2Awsr2XvgY6pgH9UiOzqG6JAvwkVX47%2BZyHljnpoUIM4cUODYtla6bmtOnXLJmPVUjQmMrtKpA4xSW2YUn%2B8rMNot%2BjzdLiBPpRyeHWQiV3AEUc%2Fgimwosl493Vm2u37GLXM39jtOACAArLVaQvz8DV0xsnBnRn0Unxpgohse3kxV2LM2E4mdNUjg385MSnSv3HKdOZpPLsGodxLLYGL%2FqaND6K6J6DDhOphU3oZIv9&X-Amz-Signature=d0fe09d9440322145d4cf6bf8f8ee7ca4644767c775c744900cbf9e14e57d208&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
