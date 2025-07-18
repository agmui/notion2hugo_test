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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFX7OZ2N%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCkbEejYE8ZOWkrT%2FD%2BG4IzH%2BOh6riv%2FAYn9br9BA%2BXTgIgb2ab0X6nFVb6DuHh9JqkYlcIWgRkMyXvo8S7NnGIBb0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNA4NdOGyaLsBKACjyrcA8VCWJRVEXCOWxWh9matN9aj3Cq6Hr2U2YnrxGtZonZsqiaN%2FsHQRRI68ANxYHwSqba9lu3KfZAPYIq%2F%2BNdAcTiguo98BOb1FBYypGALvkRwIvU%2BG6SGxhWME7xzVXVsiOU1BfzjsEO5iKXLVhqDy0sNjmZ1GqMbTxLFZpuwQ%2BKhTFa2Lf7oTTXmPdUMrG5uYQAeYgoIULdeoOWPKHxIagsXbsfWkffOjHWAuh02edFFb5xVUPIdmO1PuuS2yjwAnGxsgN5UGJRLbD6df3YpbUjh%2BSpl147WaEV1GUS7AASR6%2BCgbbaH9J4bg36asQUHzSbfZzE10Bsg9JqoLVruZw0oj%2Bx%2BGLB87%2FeVwEHusz6ga43rh0qaTzkukuvW2WUXf2mZak2E%2Fu7%2FY%2BEXHKHdd7i%2FWcojwndhWpgencJ%2FVo1y1QF5i2WZlxIxFPCbkzHxYP%2FBSY1nWaY58YrTTzW7S9trPpmo38OHxDADbwWozbh35vWqbkmj6a6eJXXuMEuzanb%2FOOFPshg%2FJFgSzI17ekcm4PSR6QlAF3I2m2zOaY%2BCYiGgvoUk7QdtVQJ5fG53hYTzXb7W6L1aoXpZRhDwHM8cfR585LEJGB4VffW6KwSbXSiRDM5Pen2OvFJfMMfV58MGOqUBQHUJw32xeF%2FgUS2gCDN3E44TPVqVaO5d2tfXsoVTQGzhEEn1KnQ%2F8xqSx8WF2sWMj8KEeDlW%2BFvpV2lQXRhl2SCP2SaHd6MujjjXXdH9RS%2F1FQdAKjLNgKSak8xz9SBT2%2BC7CBT9M8zSoBrL6VFiIKbhwPDwnuEGDAMzFFO5E0IJFXxbyEF8JpSdmaN6OJZUGM6MLC0SbLfy3Rcs0eeMLfl%2B9TNP&X-Amz-Signature=fdb7fc61ae74d5ff8a292660ef368b2ca189b05c0b8eba4629b12e6b77e3cab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFX7OZ2N%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCkbEejYE8ZOWkrT%2FD%2BG4IzH%2BOh6riv%2FAYn9br9BA%2BXTgIgb2ab0X6nFVb6DuHh9JqkYlcIWgRkMyXvo8S7NnGIBb0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNA4NdOGyaLsBKACjyrcA8VCWJRVEXCOWxWh9matN9aj3Cq6Hr2U2YnrxGtZonZsqiaN%2FsHQRRI68ANxYHwSqba9lu3KfZAPYIq%2F%2BNdAcTiguo98BOb1FBYypGALvkRwIvU%2BG6SGxhWME7xzVXVsiOU1BfzjsEO5iKXLVhqDy0sNjmZ1GqMbTxLFZpuwQ%2BKhTFa2Lf7oTTXmPdUMrG5uYQAeYgoIULdeoOWPKHxIagsXbsfWkffOjHWAuh02edFFb5xVUPIdmO1PuuS2yjwAnGxsgN5UGJRLbD6df3YpbUjh%2BSpl147WaEV1GUS7AASR6%2BCgbbaH9J4bg36asQUHzSbfZzE10Bsg9JqoLVruZw0oj%2Bx%2BGLB87%2FeVwEHusz6ga43rh0qaTzkukuvW2WUXf2mZak2E%2Fu7%2FY%2BEXHKHdd7i%2FWcojwndhWpgencJ%2FVo1y1QF5i2WZlxIxFPCbkzHxYP%2FBSY1nWaY58YrTTzW7S9trPpmo38OHxDADbwWozbh35vWqbkmj6a6eJXXuMEuzanb%2FOOFPshg%2FJFgSzI17ekcm4PSR6QlAF3I2m2zOaY%2BCYiGgvoUk7QdtVQJ5fG53hYTzXb7W6L1aoXpZRhDwHM8cfR585LEJGB4VffW6KwSbXSiRDM5Pen2OvFJfMMfV58MGOqUBQHUJw32xeF%2FgUS2gCDN3E44TPVqVaO5d2tfXsoVTQGzhEEn1KnQ%2F8xqSx8WF2sWMj8KEeDlW%2BFvpV2lQXRhl2SCP2SaHd6MujjjXXdH9RS%2F1FQdAKjLNgKSak8xz9SBT2%2BC7CBT9M8zSoBrL6VFiIKbhwPDwnuEGDAMzFFO5E0IJFXxbyEF8JpSdmaN6OJZUGM6MLC0SbLfy3Rcs0eeMLfl%2B9TNP&X-Amz-Signature=db28702561f5edbf3577807961f74d7720657ec663a66bdce7748dfdf0843af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFX7OZ2N%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCkbEejYE8ZOWkrT%2FD%2BG4IzH%2BOh6riv%2FAYn9br9BA%2BXTgIgb2ab0X6nFVb6DuHh9JqkYlcIWgRkMyXvo8S7NnGIBb0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNA4NdOGyaLsBKACjyrcA8VCWJRVEXCOWxWh9matN9aj3Cq6Hr2U2YnrxGtZonZsqiaN%2FsHQRRI68ANxYHwSqba9lu3KfZAPYIq%2F%2BNdAcTiguo98BOb1FBYypGALvkRwIvU%2BG6SGxhWME7xzVXVsiOU1BfzjsEO5iKXLVhqDy0sNjmZ1GqMbTxLFZpuwQ%2BKhTFa2Lf7oTTXmPdUMrG5uYQAeYgoIULdeoOWPKHxIagsXbsfWkffOjHWAuh02edFFb5xVUPIdmO1PuuS2yjwAnGxsgN5UGJRLbD6df3YpbUjh%2BSpl147WaEV1GUS7AASR6%2BCgbbaH9J4bg36asQUHzSbfZzE10Bsg9JqoLVruZw0oj%2Bx%2BGLB87%2FeVwEHusz6ga43rh0qaTzkukuvW2WUXf2mZak2E%2Fu7%2FY%2BEXHKHdd7i%2FWcojwndhWpgencJ%2FVo1y1QF5i2WZlxIxFPCbkzHxYP%2FBSY1nWaY58YrTTzW7S9trPpmo38OHxDADbwWozbh35vWqbkmj6a6eJXXuMEuzanb%2FOOFPshg%2FJFgSzI17ekcm4PSR6QlAF3I2m2zOaY%2BCYiGgvoUk7QdtVQJ5fG53hYTzXb7W6L1aoXpZRhDwHM8cfR585LEJGB4VffW6KwSbXSiRDM5Pen2OvFJfMMfV58MGOqUBQHUJw32xeF%2FgUS2gCDN3E44TPVqVaO5d2tfXsoVTQGzhEEn1KnQ%2F8xqSx8WF2sWMj8KEeDlW%2BFvpV2lQXRhl2SCP2SaHd6MujjjXXdH9RS%2F1FQdAKjLNgKSak8xz9SBT2%2BC7CBT9M8zSoBrL6VFiIKbhwPDwnuEGDAMzFFO5E0IJFXxbyEF8JpSdmaN6OJZUGM6MLC0SbLfy3Rcs0eeMLfl%2B9TNP&X-Amz-Signature=2e7bb78d16ec56b920f1fb275a26aced1fbc04d95ac0476f115fe03a71cae006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFX7OZ2N%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCkbEejYE8ZOWkrT%2FD%2BG4IzH%2BOh6riv%2FAYn9br9BA%2BXTgIgb2ab0X6nFVb6DuHh9JqkYlcIWgRkMyXvo8S7NnGIBb0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNA4NdOGyaLsBKACjyrcA8VCWJRVEXCOWxWh9matN9aj3Cq6Hr2U2YnrxGtZonZsqiaN%2FsHQRRI68ANxYHwSqba9lu3KfZAPYIq%2F%2BNdAcTiguo98BOb1FBYypGALvkRwIvU%2BG6SGxhWME7xzVXVsiOU1BfzjsEO5iKXLVhqDy0sNjmZ1GqMbTxLFZpuwQ%2BKhTFa2Lf7oTTXmPdUMrG5uYQAeYgoIULdeoOWPKHxIagsXbsfWkffOjHWAuh02edFFb5xVUPIdmO1PuuS2yjwAnGxsgN5UGJRLbD6df3YpbUjh%2BSpl147WaEV1GUS7AASR6%2BCgbbaH9J4bg36asQUHzSbfZzE10Bsg9JqoLVruZw0oj%2Bx%2BGLB87%2FeVwEHusz6ga43rh0qaTzkukuvW2WUXf2mZak2E%2Fu7%2FY%2BEXHKHdd7i%2FWcojwndhWpgencJ%2FVo1y1QF5i2WZlxIxFPCbkzHxYP%2FBSY1nWaY58YrTTzW7S9trPpmo38OHxDADbwWozbh35vWqbkmj6a6eJXXuMEuzanb%2FOOFPshg%2FJFgSzI17ekcm4PSR6QlAF3I2m2zOaY%2BCYiGgvoUk7QdtVQJ5fG53hYTzXb7W6L1aoXpZRhDwHM8cfR585LEJGB4VffW6KwSbXSiRDM5Pen2OvFJfMMfV58MGOqUBQHUJw32xeF%2FgUS2gCDN3E44TPVqVaO5d2tfXsoVTQGzhEEn1KnQ%2F8xqSx8WF2sWMj8KEeDlW%2BFvpV2lQXRhl2SCP2SaHd6MujjjXXdH9RS%2F1FQdAKjLNgKSak8xz9SBT2%2BC7CBT9M8zSoBrL6VFiIKbhwPDwnuEGDAMzFFO5E0IJFXxbyEF8JpSdmaN6OJZUGM6MLC0SbLfy3Rcs0eeMLfl%2B9TNP&X-Amz-Signature=892f49fdca1dd030bfb18fbd4f974a4d122bc40a77bd8518a3c05f382cc6b427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFX7OZ2N%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCkbEejYE8ZOWkrT%2FD%2BG4IzH%2BOh6riv%2FAYn9br9BA%2BXTgIgb2ab0X6nFVb6DuHh9JqkYlcIWgRkMyXvo8S7NnGIBb0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNA4NdOGyaLsBKACjyrcA8VCWJRVEXCOWxWh9matN9aj3Cq6Hr2U2YnrxGtZonZsqiaN%2FsHQRRI68ANxYHwSqba9lu3KfZAPYIq%2F%2BNdAcTiguo98BOb1FBYypGALvkRwIvU%2BG6SGxhWME7xzVXVsiOU1BfzjsEO5iKXLVhqDy0sNjmZ1GqMbTxLFZpuwQ%2BKhTFa2Lf7oTTXmPdUMrG5uYQAeYgoIULdeoOWPKHxIagsXbsfWkffOjHWAuh02edFFb5xVUPIdmO1PuuS2yjwAnGxsgN5UGJRLbD6df3YpbUjh%2BSpl147WaEV1GUS7AASR6%2BCgbbaH9J4bg36asQUHzSbfZzE10Bsg9JqoLVruZw0oj%2Bx%2BGLB87%2FeVwEHusz6ga43rh0qaTzkukuvW2WUXf2mZak2E%2Fu7%2FY%2BEXHKHdd7i%2FWcojwndhWpgencJ%2FVo1y1QF5i2WZlxIxFPCbkzHxYP%2FBSY1nWaY58YrTTzW7S9trPpmo38OHxDADbwWozbh35vWqbkmj6a6eJXXuMEuzanb%2FOOFPshg%2FJFgSzI17ekcm4PSR6QlAF3I2m2zOaY%2BCYiGgvoUk7QdtVQJ5fG53hYTzXb7W6L1aoXpZRhDwHM8cfR585LEJGB4VffW6KwSbXSiRDM5Pen2OvFJfMMfV58MGOqUBQHUJw32xeF%2FgUS2gCDN3E44TPVqVaO5d2tfXsoVTQGzhEEn1KnQ%2F8xqSx8WF2sWMj8KEeDlW%2BFvpV2lQXRhl2SCP2SaHd6MujjjXXdH9RS%2F1FQdAKjLNgKSak8xz9SBT2%2BC7CBT9M8zSoBrL6VFiIKbhwPDwnuEGDAMzFFO5E0IJFXxbyEF8JpSdmaN6OJZUGM6MLC0SbLfy3Rcs0eeMLfl%2B9TNP&X-Amz-Signature=90a16e859b0bcbfe56de662d218c3e798738ae42318d96fc2806a8427bf5361c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFX7OZ2N%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCkbEejYE8ZOWkrT%2FD%2BG4IzH%2BOh6riv%2FAYn9br9BA%2BXTgIgb2ab0X6nFVb6DuHh9JqkYlcIWgRkMyXvo8S7NnGIBb0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNA4NdOGyaLsBKACjyrcA8VCWJRVEXCOWxWh9matN9aj3Cq6Hr2U2YnrxGtZonZsqiaN%2FsHQRRI68ANxYHwSqba9lu3KfZAPYIq%2F%2BNdAcTiguo98BOb1FBYypGALvkRwIvU%2BG6SGxhWME7xzVXVsiOU1BfzjsEO5iKXLVhqDy0sNjmZ1GqMbTxLFZpuwQ%2BKhTFa2Lf7oTTXmPdUMrG5uYQAeYgoIULdeoOWPKHxIagsXbsfWkffOjHWAuh02edFFb5xVUPIdmO1PuuS2yjwAnGxsgN5UGJRLbD6df3YpbUjh%2BSpl147WaEV1GUS7AASR6%2BCgbbaH9J4bg36asQUHzSbfZzE10Bsg9JqoLVruZw0oj%2Bx%2BGLB87%2FeVwEHusz6ga43rh0qaTzkukuvW2WUXf2mZak2E%2Fu7%2FY%2BEXHKHdd7i%2FWcojwndhWpgencJ%2FVo1y1QF5i2WZlxIxFPCbkzHxYP%2FBSY1nWaY58YrTTzW7S9trPpmo38OHxDADbwWozbh35vWqbkmj6a6eJXXuMEuzanb%2FOOFPshg%2FJFgSzI17ekcm4PSR6QlAF3I2m2zOaY%2BCYiGgvoUk7QdtVQJ5fG53hYTzXb7W6L1aoXpZRhDwHM8cfR585LEJGB4VffW6KwSbXSiRDM5Pen2OvFJfMMfV58MGOqUBQHUJw32xeF%2FgUS2gCDN3E44TPVqVaO5d2tfXsoVTQGzhEEn1KnQ%2F8xqSx8WF2sWMj8KEeDlW%2BFvpV2lQXRhl2SCP2SaHd6MujjjXXdH9RS%2F1FQdAKjLNgKSak8xz9SBT2%2BC7CBT9M8zSoBrL6VFiIKbhwPDwnuEGDAMzFFO5E0IJFXxbyEF8JpSdmaN6OJZUGM6MLC0SbLfy3Rcs0eeMLfl%2B9TNP&X-Amz-Signature=dbeeb8ff573c10d4f0568fd3d13da814e594a6884e1b7842a7482aec76110036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFX7OZ2N%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCkbEejYE8ZOWkrT%2FD%2BG4IzH%2BOh6riv%2FAYn9br9BA%2BXTgIgb2ab0X6nFVb6DuHh9JqkYlcIWgRkMyXvo8S7NnGIBb0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNA4NdOGyaLsBKACjyrcA8VCWJRVEXCOWxWh9matN9aj3Cq6Hr2U2YnrxGtZonZsqiaN%2FsHQRRI68ANxYHwSqba9lu3KfZAPYIq%2F%2BNdAcTiguo98BOb1FBYypGALvkRwIvU%2BG6SGxhWME7xzVXVsiOU1BfzjsEO5iKXLVhqDy0sNjmZ1GqMbTxLFZpuwQ%2BKhTFa2Lf7oTTXmPdUMrG5uYQAeYgoIULdeoOWPKHxIagsXbsfWkffOjHWAuh02edFFb5xVUPIdmO1PuuS2yjwAnGxsgN5UGJRLbD6df3YpbUjh%2BSpl147WaEV1GUS7AASR6%2BCgbbaH9J4bg36asQUHzSbfZzE10Bsg9JqoLVruZw0oj%2Bx%2BGLB87%2FeVwEHusz6ga43rh0qaTzkukuvW2WUXf2mZak2E%2Fu7%2FY%2BEXHKHdd7i%2FWcojwndhWpgencJ%2FVo1y1QF5i2WZlxIxFPCbkzHxYP%2FBSY1nWaY58YrTTzW7S9trPpmo38OHxDADbwWozbh35vWqbkmj6a6eJXXuMEuzanb%2FOOFPshg%2FJFgSzI17ekcm4PSR6QlAF3I2m2zOaY%2BCYiGgvoUk7QdtVQJ5fG53hYTzXb7W6L1aoXpZRhDwHM8cfR585LEJGB4VffW6KwSbXSiRDM5Pen2OvFJfMMfV58MGOqUBQHUJw32xeF%2FgUS2gCDN3E44TPVqVaO5d2tfXsoVTQGzhEEn1KnQ%2F8xqSx8WF2sWMj8KEeDlW%2BFvpV2lQXRhl2SCP2SaHd6MujjjXXdH9RS%2F1FQdAKjLNgKSak8xz9SBT2%2BC7CBT9M8zSoBrL6VFiIKbhwPDwnuEGDAMzFFO5E0IJFXxbyEF8JpSdmaN6OJZUGM6MLC0SbLfy3Rcs0eeMLfl%2B9TNP&X-Amz-Signature=35fc547bede876e5cc795707ddc523ca471df8559a5406ce0a56744111219d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
