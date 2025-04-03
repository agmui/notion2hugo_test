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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWYUTCBH%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTvR4XDGTP846eTcgn%2B9du%2F%2Br0XvncUfTroDIO1nepSgIgP5CM0Ng3MZw5uZHdTzYl%2BvgSYjFqYJrxxcwO92cts3AqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM37h7AEIPU3bQV3SyrcA%2BTCY9HYeK6RpgJYLyZa9mFN5E56c%2F%2BP5J7b3hnhPONNaqbMYdTpyLsQvAJN1JwGijs95dX9PqZScKz0e29WybrqnKu0yTCi68d587XKmM6Bp5NCUDIEWGWyzHgORcFfp45bIBWHSAPhjtiW1kVffvgt5WwlISEEznZEkyU8FXn%2BU48lE5OlX5e5vOyzXkygw4AKAMXuCZcDI02iK0jCGsVuX1a8SPWPQcMbI1u1IsdKvLHA7ra7Q1cGGQiboo7dXBFtPMcN9E6MhTrGryRdbN7Xt3jDdr0kB8Bus1ukXn7zpcBMCptDYi5mP9Hkmt%2FR7yxKnoqG%2FWlcRWpYNHuJZskeYc0yLoopkUhBTuiceL8LEA47DOcTWFPL%2FDERSiT6p3m5hAue0HnuDwSMoaOogGIdhhkN2OTSwOlfjMjDBk1PEKicm0U%2BQHJ3%2F%2FgrY%2B4zoVoOUgZjg9TRWOQPHlp6j1bxlniV8vVkuvfOALDZgRxOWWjZWkUi1Ngi4VLnKoVSiLlnw9PDp2hJJKVxhq85hBk4UnWuiHFbZcVRkrgMwcF9QCke45A8jRmoPw9J5QtzS6abOrFLm%2B4VIUTn1condMWaP09nmCFO4Rp%2FGm6scmDptxbw8TTy056%2FrtyhMMawub8GOqUBulafsh%2B%2BeDa3FSdSr4MmgwUlZ82xxZlkHq6k5HjoL5PBiqWpDdr2%2Fbks2eO0lTmkVFwBR1takrs8xddPcHGSjyv6a05jUYkfl6lAhW0F7q9Dazh8oS2TdITk7ES3HQBN0HhD5RahGuT5yJu7P36ZWed5R2BN2hBnoi4O2LKNHuBfi2ZEQGEvX8R1QjjoO6VZ9UYvkT4Nwsg8aEJWP44iuzvXE7nx&X-Amz-Signature=24680ffc16042027061473b1c23badb59aa78152c5114e518d5f8a7e077a0ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWYUTCBH%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTvR4XDGTP846eTcgn%2B9du%2F%2Br0XvncUfTroDIO1nepSgIgP5CM0Ng3MZw5uZHdTzYl%2BvgSYjFqYJrxxcwO92cts3AqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM37h7AEIPU3bQV3SyrcA%2BTCY9HYeK6RpgJYLyZa9mFN5E56c%2F%2BP5J7b3hnhPONNaqbMYdTpyLsQvAJN1JwGijs95dX9PqZScKz0e29WybrqnKu0yTCi68d587XKmM6Bp5NCUDIEWGWyzHgORcFfp45bIBWHSAPhjtiW1kVffvgt5WwlISEEznZEkyU8FXn%2BU48lE5OlX5e5vOyzXkygw4AKAMXuCZcDI02iK0jCGsVuX1a8SPWPQcMbI1u1IsdKvLHA7ra7Q1cGGQiboo7dXBFtPMcN9E6MhTrGryRdbN7Xt3jDdr0kB8Bus1ukXn7zpcBMCptDYi5mP9Hkmt%2FR7yxKnoqG%2FWlcRWpYNHuJZskeYc0yLoopkUhBTuiceL8LEA47DOcTWFPL%2FDERSiT6p3m5hAue0HnuDwSMoaOogGIdhhkN2OTSwOlfjMjDBk1PEKicm0U%2BQHJ3%2F%2FgrY%2B4zoVoOUgZjg9TRWOQPHlp6j1bxlniV8vVkuvfOALDZgRxOWWjZWkUi1Ngi4VLnKoVSiLlnw9PDp2hJJKVxhq85hBk4UnWuiHFbZcVRkrgMwcF9QCke45A8jRmoPw9J5QtzS6abOrFLm%2B4VIUTn1condMWaP09nmCFO4Rp%2FGm6scmDptxbw8TTy056%2FrtyhMMawub8GOqUBulafsh%2B%2BeDa3FSdSr4MmgwUlZ82xxZlkHq6k5HjoL5PBiqWpDdr2%2Fbks2eO0lTmkVFwBR1takrs8xddPcHGSjyv6a05jUYkfl6lAhW0F7q9Dazh8oS2TdITk7ES3HQBN0HhD5RahGuT5yJu7P36ZWed5R2BN2hBnoi4O2LKNHuBfi2ZEQGEvX8R1QjjoO6VZ9UYvkT4Nwsg8aEJWP44iuzvXE7nx&X-Amz-Signature=7eaf668214ce40f41a643e6e91fc42f6e7a5adc2fd42f570a75c792346854ba3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWYUTCBH%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTvR4XDGTP846eTcgn%2B9du%2F%2Br0XvncUfTroDIO1nepSgIgP5CM0Ng3MZw5uZHdTzYl%2BvgSYjFqYJrxxcwO92cts3AqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM37h7AEIPU3bQV3SyrcA%2BTCY9HYeK6RpgJYLyZa9mFN5E56c%2F%2BP5J7b3hnhPONNaqbMYdTpyLsQvAJN1JwGijs95dX9PqZScKz0e29WybrqnKu0yTCi68d587XKmM6Bp5NCUDIEWGWyzHgORcFfp45bIBWHSAPhjtiW1kVffvgt5WwlISEEznZEkyU8FXn%2BU48lE5OlX5e5vOyzXkygw4AKAMXuCZcDI02iK0jCGsVuX1a8SPWPQcMbI1u1IsdKvLHA7ra7Q1cGGQiboo7dXBFtPMcN9E6MhTrGryRdbN7Xt3jDdr0kB8Bus1ukXn7zpcBMCptDYi5mP9Hkmt%2FR7yxKnoqG%2FWlcRWpYNHuJZskeYc0yLoopkUhBTuiceL8LEA47DOcTWFPL%2FDERSiT6p3m5hAue0HnuDwSMoaOogGIdhhkN2OTSwOlfjMjDBk1PEKicm0U%2BQHJ3%2F%2FgrY%2B4zoVoOUgZjg9TRWOQPHlp6j1bxlniV8vVkuvfOALDZgRxOWWjZWkUi1Ngi4VLnKoVSiLlnw9PDp2hJJKVxhq85hBk4UnWuiHFbZcVRkrgMwcF9QCke45A8jRmoPw9J5QtzS6abOrFLm%2B4VIUTn1condMWaP09nmCFO4Rp%2FGm6scmDptxbw8TTy056%2FrtyhMMawub8GOqUBulafsh%2B%2BeDa3FSdSr4MmgwUlZ82xxZlkHq6k5HjoL5PBiqWpDdr2%2Fbks2eO0lTmkVFwBR1takrs8xddPcHGSjyv6a05jUYkfl6lAhW0F7q9Dazh8oS2TdITk7ES3HQBN0HhD5RahGuT5yJu7P36ZWed5R2BN2hBnoi4O2LKNHuBfi2ZEQGEvX8R1QjjoO6VZ9UYvkT4Nwsg8aEJWP44iuzvXE7nx&X-Amz-Signature=4f3d7e598c2902d5cf4165f540288dd690f9c37eb2301a66a18a3c57f8ba7787&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWYUTCBH%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTvR4XDGTP846eTcgn%2B9du%2F%2Br0XvncUfTroDIO1nepSgIgP5CM0Ng3MZw5uZHdTzYl%2BvgSYjFqYJrxxcwO92cts3AqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM37h7AEIPU3bQV3SyrcA%2BTCY9HYeK6RpgJYLyZa9mFN5E56c%2F%2BP5J7b3hnhPONNaqbMYdTpyLsQvAJN1JwGijs95dX9PqZScKz0e29WybrqnKu0yTCi68d587XKmM6Bp5NCUDIEWGWyzHgORcFfp45bIBWHSAPhjtiW1kVffvgt5WwlISEEznZEkyU8FXn%2BU48lE5OlX5e5vOyzXkygw4AKAMXuCZcDI02iK0jCGsVuX1a8SPWPQcMbI1u1IsdKvLHA7ra7Q1cGGQiboo7dXBFtPMcN9E6MhTrGryRdbN7Xt3jDdr0kB8Bus1ukXn7zpcBMCptDYi5mP9Hkmt%2FR7yxKnoqG%2FWlcRWpYNHuJZskeYc0yLoopkUhBTuiceL8LEA47DOcTWFPL%2FDERSiT6p3m5hAue0HnuDwSMoaOogGIdhhkN2OTSwOlfjMjDBk1PEKicm0U%2BQHJ3%2F%2FgrY%2B4zoVoOUgZjg9TRWOQPHlp6j1bxlniV8vVkuvfOALDZgRxOWWjZWkUi1Ngi4VLnKoVSiLlnw9PDp2hJJKVxhq85hBk4UnWuiHFbZcVRkrgMwcF9QCke45A8jRmoPw9J5QtzS6abOrFLm%2B4VIUTn1condMWaP09nmCFO4Rp%2FGm6scmDptxbw8TTy056%2FrtyhMMawub8GOqUBulafsh%2B%2BeDa3FSdSr4MmgwUlZ82xxZlkHq6k5HjoL5PBiqWpDdr2%2Fbks2eO0lTmkVFwBR1takrs8xddPcHGSjyv6a05jUYkfl6lAhW0F7q9Dazh8oS2TdITk7ES3HQBN0HhD5RahGuT5yJu7P36ZWed5R2BN2hBnoi4O2LKNHuBfi2ZEQGEvX8R1QjjoO6VZ9UYvkT4Nwsg8aEJWP44iuzvXE7nx&X-Amz-Signature=d0c4fcbe4ffc3467eb22546da3f675972643151300426b021d5d080408516ec1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWYUTCBH%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTvR4XDGTP846eTcgn%2B9du%2F%2Br0XvncUfTroDIO1nepSgIgP5CM0Ng3MZw5uZHdTzYl%2BvgSYjFqYJrxxcwO92cts3AqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM37h7AEIPU3bQV3SyrcA%2BTCY9HYeK6RpgJYLyZa9mFN5E56c%2F%2BP5J7b3hnhPONNaqbMYdTpyLsQvAJN1JwGijs95dX9PqZScKz0e29WybrqnKu0yTCi68d587XKmM6Bp5NCUDIEWGWyzHgORcFfp45bIBWHSAPhjtiW1kVffvgt5WwlISEEznZEkyU8FXn%2BU48lE5OlX5e5vOyzXkygw4AKAMXuCZcDI02iK0jCGsVuX1a8SPWPQcMbI1u1IsdKvLHA7ra7Q1cGGQiboo7dXBFtPMcN9E6MhTrGryRdbN7Xt3jDdr0kB8Bus1ukXn7zpcBMCptDYi5mP9Hkmt%2FR7yxKnoqG%2FWlcRWpYNHuJZskeYc0yLoopkUhBTuiceL8LEA47DOcTWFPL%2FDERSiT6p3m5hAue0HnuDwSMoaOogGIdhhkN2OTSwOlfjMjDBk1PEKicm0U%2BQHJ3%2F%2FgrY%2B4zoVoOUgZjg9TRWOQPHlp6j1bxlniV8vVkuvfOALDZgRxOWWjZWkUi1Ngi4VLnKoVSiLlnw9PDp2hJJKVxhq85hBk4UnWuiHFbZcVRkrgMwcF9QCke45A8jRmoPw9J5QtzS6abOrFLm%2B4VIUTn1condMWaP09nmCFO4Rp%2FGm6scmDptxbw8TTy056%2FrtyhMMawub8GOqUBulafsh%2B%2BeDa3FSdSr4MmgwUlZ82xxZlkHq6k5HjoL5PBiqWpDdr2%2Fbks2eO0lTmkVFwBR1takrs8xddPcHGSjyv6a05jUYkfl6lAhW0F7q9Dazh8oS2TdITk7ES3HQBN0HhD5RahGuT5yJu7P36ZWed5R2BN2hBnoi4O2LKNHuBfi2ZEQGEvX8R1QjjoO6VZ9UYvkT4Nwsg8aEJWP44iuzvXE7nx&X-Amz-Signature=ee5a8d617ed67c65a489d01e1bbe727b9fe0541afee4866a8252ae23675ac3b8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWYUTCBH%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTvR4XDGTP846eTcgn%2B9du%2F%2Br0XvncUfTroDIO1nepSgIgP5CM0Ng3MZw5uZHdTzYl%2BvgSYjFqYJrxxcwO92cts3AqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM37h7AEIPU3bQV3SyrcA%2BTCY9HYeK6RpgJYLyZa9mFN5E56c%2F%2BP5J7b3hnhPONNaqbMYdTpyLsQvAJN1JwGijs95dX9PqZScKz0e29WybrqnKu0yTCi68d587XKmM6Bp5NCUDIEWGWyzHgORcFfp45bIBWHSAPhjtiW1kVffvgt5WwlISEEznZEkyU8FXn%2BU48lE5OlX5e5vOyzXkygw4AKAMXuCZcDI02iK0jCGsVuX1a8SPWPQcMbI1u1IsdKvLHA7ra7Q1cGGQiboo7dXBFtPMcN9E6MhTrGryRdbN7Xt3jDdr0kB8Bus1ukXn7zpcBMCptDYi5mP9Hkmt%2FR7yxKnoqG%2FWlcRWpYNHuJZskeYc0yLoopkUhBTuiceL8LEA47DOcTWFPL%2FDERSiT6p3m5hAue0HnuDwSMoaOogGIdhhkN2OTSwOlfjMjDBk1PEKicm0U%2BQHJ3%2F%2FgrY%2B4zoVoOUgZjg9TRWOQPHlp6j1bxlniV8vVkuvfOALDZgRxOWWjZWkUi1Ngi4VLnKoVSiLlnw9PDp2hJJKVxhq85hBk4UnWuiHFbZcVRkrgMwcF9QCke45A8jRmoPw9J5QtzS6abOrFLm%2B4VIUTn1condMWaP09nmCFO4Rp%2FGm6scmDptxbw8TTy056%2FrtyhMMawub8GOqUBulafsh%2B%2BeDa3FSdSr4MmgwUlZ82xxZlkHq6k5HjoL5PBiqWpDdr2%2Fbks2eO0lTmkVFwBR1takrs8xddPcHGSjyv6a05jUYkfl6lAhW0F7q9Dazh8oS2TdITk7ES3HQBN0HhD5RahGuT5yJu7P36ZWed5R2BN2hBnoi4O2LKNHuBfi2ZEQGEvX8R1QjjoO6VZ9UYvkT4Nwsg8aEJWP44iuzvXE7nx&X-Amz-Signature=f5011045cc0573881d0386162c7f73135051400d592997a348b6d9d2d7a1d859&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWYUTCBH%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTvR4XDGTP846eTcgn%2B9du%2F%2Br0XvncUfTroDIO1nepSgIgP5CM0Ng3MZw5uZHdTzYl%2BvgSYjFqYJrxxcwO92cts3AqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM37h7AEIPU3bQV3SyrcA%2BTCY9HYeK6RpgJYLyZa9mFN5E56c%2F%2BP5J7b3hnhPONNaqbMYdTpyLsQvAJN1JwGijs95dX9PqZScKz0e29WybrqnKu0yTCi68d587XKmM6Bp5NCUDIEWGWyzHgORcFfp45bIBWHSAPhjtiW1kVffvgt5WwlISEEznZEkyU8FXn%2BU48lE5OlX5e5vOyzXkygw4AKAMXuCZcDI02iK0jCGsVuX1a8SPWPQcMbI1u1IsdKvLHA7ra7Q1cGGQiboo7dXBFtPMcN9E6MhTrGryRdbN7Xt3jDdr0kB8Bus1ukXn7zpcBMCptDYi5mP9Hkmt%2FR7yxKnoqG%2FWlcRWpYNHuJZskeYc0yLoopkUhBTuiceL8LEA47DOcTWFPL%2FDERSiT6p3m5hAue0HnuDwSMoaOogGIdhhkN2OTSwOlfjMjDBk1PEKicm0U%2BQHJ3%2F%2FgrY%2B4zoVoOUgZjg9TRWOQPHlp6j1bxlniV8vVkuvfOALDZgRxOWWjZWkUi1Ngi4VLnKoVSiLlnw9PDp2hJJKVxhq85hBk4UnWuiHFbZcVRkrgMwcF9QCke45A8jRmoPw9J5QtzS6abOrFLm%2B4VIUTn1condMWaP09nmCFO4Rp%2FGm6scmDptxbw8TTy056%2FrtyhMMawub8GOqUBulafsh%2B%2BeDa3FSdSr4MmgwUlZ82xxZlkHq6k5HjoL5PBiqWpDdr2%2Fbks2eO0lTmkVFwBR1takrs8xddPcHGSjyv6a05jUYkfl6lAhW0F7q9Dazh8oS2TdITk7ES3HQBN0HhD5RahGuT5yJu7P36ZWed5R2BN2hBnoi4O2LKNHuBfi2ZEQGEvX8R1QjjoO6VZ9UYvkT4Nwsg8aEJWP44iuzvXE7nx&X-Amz-Signature=4703f8ea537a35230a76f0d4002ac0dbd08cea5e7da52fa5a895a72760ffbfcd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
