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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYNGZDL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrU1mcYP%2BQfheB4pmAdgNBj%2FOEG22vmufc4KLwQ5zOewIgew%2FSjy0pdTUbr9hG3FYc2WMvWf9mhq4%2Bwt%2FcJdkZywEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDVS%2FKIm1T9RCgh5GSrcA%2FN6tJNL8q9XFQwXGxgO061Qdu4CKHGHVl1NVf1YoAPPe7%2BZv8p%2FfRDi7kyNExxy8ykx7Az0zDoONrcxtngXBMwgXXP07%2FyiEAPTphSa1em2YvJo%2B9Uj2cv%2FvIhfeATYDIyPRQAEs0OTfEM84teCCw7s5es5odr9Erf9FaaKJLyPFyiY2IhLpEqXN1Myu1%2BfIfw9oKUXG50%2FnIuaJDeo19ss1eWKI5w21u3FHLs6oOKCJgmfdT1a8b9AwsMDuiENzxvx2oGgH7zBcqEqjvdnLkcbCs9Kv2oxm%2BN4mL9TetWBmRBbaHZEq96xjQ%2BzKsL4vGFKY2ZTbjM4t7cab0Ad6i2CEH46nfxXLdbptIgJg%2B4ylihJU05JvYV2%2Fg%2F9JFaMa8aYZtMKZOwNuhggKSgIIcgAUQXfyLXbmGIFuex46ni%2BjJ1pzeEyzJuqHYvdqIgb5066CQaeg2vspbde57cTYpzVjM6WeJJ6DBqbW%2FQ9oo2zD1p5vKW%2FnpAbrQ4dm%2FsuOlxkgR5re2OMT9OCTOMJOOwdeXom%2BxhPWMzFSVsYRIevtZRKEzpn915E5ttwRBdNwpQT%2FuQDQ2kfG%2F3TjtfnCeCs2JwUsnWGoARaPzygrnkCWzrdgTOZouhdOna2MMS%2B1L8GOqUBvIsroCuOS%2BEgcwyUDi%2B7Qnt2MWt2Cmca%2BW%2BUEhe74pHl%2FSvqNCzzYijGyUAKy7yhvZKoC6ON3i7JvwZNW%2BpUEd3rqGN5t3vCmqIhBtaDSCrbjsaAgnJsAdTBreDMqRSFU2StXLceRQh%2B7sRA9WqD6VGod7HOcbyyZMqMWieuzOu2nwbHukBv5uhLtnN0flwV2ErqklodgCIo8mGPSNooRsgJlhYS&X-Amz-Signature=0408d15039f11fd8ececa8f28a5f7fa37a6059be15d4f2073900bc136ab8ab78&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYNGZDL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrU1mcYP%2BQfheB4pmAdgNBj%2FOEG22vmufc4KLwQ5zOewIgew%2FSjy0pdTUbr9hG3FYc2WMvWf9mhq4%2Bwt%2FcJdkZywEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDVS%2FKIm1T9RCgh5GSrcA%2FN6tJNL8q9XFQwXGxgO061Qdu4CKHGHVl1NVf1YoAPPe7%2BZv8p%2FfRDi7kyNExxy8ykx7Az0zDoONrcxtngXBMwgXXP07%2FyiEAPTphSa1em2YvJo%2B9Uj2cv%2FvIhfeATYDIyPRQAEs0OTfEM84teCCw7s5es5odr9Erf9FaaKJLyPFyiY2IhLpEqXN1Myu1%2BfIfw9oKUXG50%2FnIuaJDeo19ss1eWKI5w21u3FHLs6oOKCJgmfdT1a8b9AwsMDuiENzxvx2oGgH7zBcqEqjvdnLkcbCs9Kv2oxm%2BN4mL9TetWBmRBbaHZEq96xjQ%2BzKsL4vGFKY2ZTbjM4t7cab0Ad6i2CEH46nfxXLdbptIgJg%2B4ylihJU05JvYV2%2Fg%2F9JFaMa8aYZtMKZOwNuhggKSgIIcgAUQXfyLXbmGIFuex46ni%2BjJ1pzeEyzJuqHYvdqIgb5066CQaeg2vspbde57cTYpzVjM6WeJJ6DBqbW%2FQ9oo2zD1p5vKW%2FnpAbrQ4dm%2FsuOlxkgR5re2OMT9OCTOMJOOwdeXom%2BxhPWMzFSVsYRIevtZRKEzpn915E5ttwRBdNwpQT%2FuQDQ2kfG%2F3TjtfnCeCs2JwUsnWGoARaPzygrnkCWzrdgTOZouhdOna2MMS%2B1L8GOqUBvIsroCuOS%2BEgcwyUDi%2B7Qnt2MWt2Cmca%2BW%2BUEhe74pHl%2FSvqNCzzYijGyUAKy7yhvZKoC6ON3i7JvwZNW%2BpUEd3rqGN5t3vCmqIhBtaDSCrbjsaAgnJsAdTBreDMqRSFU2StXLceRQh%2B7sRA9WqD6VGod7HOcbyyZMqMWieuzOu2nwbHukBv5uhLtnN0flwV2ErqklodgCIo8mGPSNooRsgJlhYS&X-Amz-Signature=957ade26a0539dd084a063fd16198eb5c1523e44ca01b6a51c5373ae369ee3f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYNGZDL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrU1mcYP%2BQfheB4pmAdgNBj%2FOEG22vmufc4KLwQ5zOewIgew%2FSjy0pdTUbr9hG3FYc2WMvWf9mhq4%2Bwt%2FcJdkZywEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDVS%2FKIm1T9RCgh5GSrcA%2FN6tJNL8q9XFQwXGxgO061Qdu4CKHGHVl1NVf1YoAPPe7%2BZv8p%2FfRDi7kyNExxy8ykx7Az0zDoONrcxtngXBMwgXXP07%2FyiEAPTphSa1em2YvJo%2B9Uj2cv%2FvIhfeATYDIyPRQAEs0OTfEM84teCCw7s5es5odr9Erf9FaaKJLyPFyiY2IhLpEqXN1Myu1%2BfIfw9oKUXG50%2FnIuaJDeo19ss1eWKI5w21u3FHLs6oOKCJgmfdT1a8b9AwsMDuiENzxvx2oGgH7zBcqEqjvdnLkcbCs9Kv2oxm%2BN4mL9TetWBmRBbaHZEq96xjQ%2BzKsL4vGFKY2ZTbjM4t7cab0Ad6i2CEH46nfxXLdbptIgJg%2B4ylihJU05JvYV2%2Fg%2F9JFaMa8aYZtMKZOwNuhggKSgIIcgAUQXfyLXbmGIFuex46ni%2BjJ1pzeEyzJuqHYvdqIgb5066CQaeg2vspbde57cTYpzVjM6WeJJ6DBqbW%2FQ9oo2zD1p5vKW%2FnpAbrQ4dm%2FsuOlxkgR5re2OMT9OCTOMJOOwdeXom%2BxhPWMzFSVsYRIevtZRKEzpn915E5ttwRBdNwpQT%2FuQDQ2kfG%2F3TjtfnCeCs2JwUsnWGoARaPzygrnkCWzrdgTOZouhdOna2MMS%2B1L8GOqUBvIsroCuOS%2BEgcwyUDi%2B7Qnt2MWt2Cmca%2BW%2BUEhe74pHl%2FSvqNCzzYijGyUAKy7yhvZKoC6ON3i7JvwZNW%2BpUEd3rqGN5t3vCmqIhBtaDSCrbjsaAgnJsAdTBreDMqRSFU2StXLceRQh%2B7sRA9WqD6VGod7HOcbyyZMqMWieuzOu2nwbHukBv5uhLtnN0flwV2ErqklodgCIo8mGPSNooRsgJlhYS&X-Amz-Signature=ec2d640a19ad93de0119b250203a6aff526db63e5b0d96ded2efdfca4d4a5484&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYNGZDL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrU1mcYP%2BQfheB4pmAdgNBj%2FOEG22vmufc4KLwQ5zOewIgew%2FSjy0pdTUbr9hG3FYc2WMvWf9mhq4%2Bwt%2FcJdkZywEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDVS%2FKIm1T9RCgh5GSrcA%2FN6tJNL8q9XFQwXGxgO061Qdu4CKHGHVl1NVf1YoAPPe7%2BZv8p%2FfRDi7kyNExxy8ykx7Az0zDoONrcxtngXBMwgXXP07%2FyiEAPTphSa1em2YvJo%2B9Uj2cv%2FvIhfeATYDIyPRQAEs0OTfEM84teCCw7s5es5odr9Erf9FaaKJLyPFyiY2IhLpEqXN1Myu1%2BfIfw9oKUXG50%2FnIuaJDeo19ss1eWKI5w21u3FHLs6oOKCJgmfdT1a8b9AwsMDuiENzxvx2oGgH7zBcqEqjvdnLkcbCs9Kv2oxm%2BN4mL9TetWBmRBbaHZEq96xjQ%2BzKsL4vGFKY2ZTbjM4t7cab0Ad6i2CEH46nfxXLdbptIgJg%2B4ylihJU05JvYV2%2Fg%2F9JFaMa8aYZtMKZOwNuhggKSgIIcgAUQXfyLXbmGIFuex46ni%2BjJ1pzeEyzJuqHYvdqIgb5066CQaeg2vspbde57cTYpzVjM6WeJJ6DBqbW%2FQ9oo2zD1p5vKW%2FnpAbrQ4dm%2FsuOlxkgR5re2OMT9OCTOMJOOwdeXom%2BxhPWMzFSVsYRIevtZRKEzpn915E5ttwRBdNwpQT%2FuQDQ2kfG%2F3TjtfnCeCs2JwUsnWGoARaPzygrnkCWzrdgTOZouhdOna2MMS%2B1L8GOqUBvIsroCuOS%2BEgcwyUDi%2B7Qnt2MWt2Cmca%2BW%2BUEhe74pHl%2FSvqNCzzYijGyUAKy7yhvZKoC6ON3i7JvwZNW%2BpUEd3rqGN5t3vCmqIhBtaDSCrbjsaAgnJsAdTBreDMqRSFU2StXLceRQh%2B7sRA9WqD6VGod7HOcbyyZMqMWieuzOu2nwbHukBv5uhLtnN0flwV2ErqklodgCIo8mGPSNooRsgJlhYS&X-Amz-Signature=fb9068641a9866769cb083748668d37789e881c19a976f45971e06836e5d057b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYNGZDL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrU1mcYP%2BQfheB4pmAdgNBj%2FOEG22vmufc4KLwQ5zOewIgew%2FSjy0pdTUbr9hG3FYc2WMvWf9mhq4%2Bwt%2FcJdkZywEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDVS%2FKIm1T9RCgh5GSrcA%2FN6tJNL8q9XFQwXGxgO061Qdu4CKHGHVl1NVf1YoAPPe7%2BZv8p%2FfRDi7kyNExxy8ykx7Az0zDoONrcxtngXBMwgXXP07%2FyiEAPTphSa1em2YvJo%2B9Uj2cv%2FvIhfeATYDIyPRQAEs0OTfEM84teCCw7s5es5odr9Erf9FaaKJLyPFyiY2IhLpEqXN1Myu1%2BfIfw9oKUXG50%2FnIuaJDeo19ss1eWKI5w21u3FHLs6oOKCJgmfdT1a8b9AwsMDuiENzxvx2oGgH7zBcqEqjvdnLkcbCs9Kv2oxm%2BN4mL9TetWBmRBbaHZEq96xjQ%2BzKsL4vGFKY2ZTbjM4t7cab0Ad6i2CEH46nfxXLdbptIgJg%2B4ylihJU05JvYV2%2Fg%2F9JFaMa8aYZtMKZOwNuhggKSgIIcgAUQXfyLXbmGIFuex46ni%2BjJ1pzeEyzJuqHYvdqIgb5066CQaeg2vspbde57cTYpzVjM6WeJJ6DBqbW%2FQ9oo2zD1p5vKW%2FnpAbrQ4dm%2FsuOlxkgR5re2OMT9OCTOMJOOwdeXom%2BxhPWMzFSVsYRIevtZRKEzpn915E5ttwRBdNwpQT%2FuQDQ2kfG%2F3TjtfnCeCs2JwUsnWGoARaPzygrnkCWzrdgTOZouhdOna2MMS%2B1L8GOqUBvIsroCuOS%2BEgcwyUDi%2B7Qnt2MWt2Cmca%2BW%2BUEhe74pHl%2FSvqNCzzYijGyUAKy7yhvZKoC6ON3i7JvwZNW%2BpUEd3rqGN5t3vCmqIhBtaDSCrbjsaAgnJsAdTBreDMqRSFU2StXLceRQh%2B7sRA9WqD6VGod7HOcbyyZMqMWieuzOu2nwbHukBv5uhLtnN0flwV2ErqklodgCIo8mGPSNooRsgJlhYS&X-Amz-Signature=9151a4439e48876d4dcfe4af7a2bc801d61ace0f05535f43e0735bc1978ce2b4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYNGZDL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrU1mcYP%2BQfheB4pmAdgNBj%2FOEG22vmufc4KLwQ5zOewIgew%2FSjy0pdTUbr9hG3FYc2WMvWf9mhq4%2Bwt%2FcJdkZywEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDVS%2FKIm1T9RCgh5GSrcA%2FN6tJNL8q9XFQwXGxgO061Qdu4CKHGHVl1NVf1YoAPPe7%2BZv8p%2FfRDi7kyNExxy8ykx7Az0zDoONrcxtngXBMwgXXP07%2FyiEAPTphSa1em2YvJo%2B9Uj2cv%2FvIhfeATYDIyPRQAEs0OTfEM84teCCw7s5es5odr9Erf9FaaKJLyPFyiY2IhLpEqXN1Myu1%2BfIfw9oKUXG50%2FnIuaJDeo19ss1eWKI5w21u3FHLs6oOKCJgmfdT1a8b9AwsMDuiENzxvx2oGgH7zBcqEqjvdnLkcbCs9Kv2oxm%2BN4mL9TetWBmRBbaHZEq96xjQ%2BzKsL4vGFKY2ZTbjM4t7cab0Ad6i2CEH46nfxXLdbptIgJg%2B4ylihJU05JvYV2%2Fg%2F9JFaMa8aYZtMKZOwNuhggKSgIIcgAUQXfyLXbmGIFuex46ni%2BjJ1pzeEyzJuqHYvdqIgb5066CQaeg2vspbde57cTYpzVjM6WeJJ6DBqbW%2FQ9oo2zD1p5vKW%2FnpAbrQ4dm%2FsuOlxkgR5re2OMT9OCTOMJOOwdeXom%2BxhPWMzFSVsYRIevtZRKEzpn915E5ttwRBdNwpQT%2FuQDQ2kfG%2F3TjtfnCeCs2JwUsnWGoARaPzygrnkCWzrdgTOZouhdOna2MMS%2B1L8GOqUBvIsroCuOS%2BEgcwyUDi%2B7Qnt2MWt2Cmca%2BW%2BUEhe74pHl%2FSvqNCzzYijGyUAKy7yhvZKoC6ON3i7JvwZNW%2BpUEd3rqGN5t3vCmqIhBtaDSCrbjsaAgnJsAdTBreDMqRSFU2StXLceRQh%2B7sRA9WqD6VGod7HOcbyyZMqMWieuzOu2nwbHukBv5uhLtnN0flwV2ErqklodgCIo8mGPSNooRsgJlhYS&X-Amz-Signature=0573faab2bf9f0a31a563332f2db73608ce5bad7a342889ede893b5018515864&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYNGZDL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrU1mcYP%2BQfheB4pmAdgNBj%2FOEG22vmufc4KLwQ5zOewIgew%2FSjy0pdTUbr9hG3FYc2WMvWf9mhq4%2Bwt%2FcJdkZywEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDVS%2FKIm1T9RCgh5GSrcA%2FN6tJNL8q9XFQwXGxgO061Qdu4CKHGHVl1NVf1YoAPPe7%2BZv8p%2FfRDi7kyNExxy8ykx7Az0zDoONrcxtngXBMwgXXP07%2FyiEAPTphSa1em2YvJo%2B9Uj2cv%2FvIhfeATYDIyPRQAEs0OTfEM84teCCw7s5es5odr9Erf9FaaKJLyPFyiY2IhLpEqXN1Myu1%2BfIfw9oKUXG50%2FnIuaJDeo19ss1eWKI5w21u3FHLs6oOKCJgmfdT1a8b9AwsMDuiENzxvx2oGgH7zBcqEqjvdnLkcbCs9Kv2oxm%2BN4mL9TetWBmRBbaHZEq96xjQ%2BzKsL4vGFKY2ZTbjM4t7cab0Ad6i2CEH46nfxXLdbptIgJg%2B4ylihJU05JvYV2%2Fg%2F9JFaMa8aYZtMKZOwNuhggKSgIIcgAUQXfyLXbmGIFuex46ni%2BjJ1pzeEyzJuqHYvdqIgb5066CQaeg2vspbde57cTYpzVjM6WeJJ6DBqbW%2FQ9oo2zD1p5vKW%2FnpAbrQ4dm%2FsuOlxkgR5re2OMT9OCTOMJOOwdeXom%2BxhPWMzFSVsYRIevtZRKEzpn915E5ttwRBdNwpQT%2FuQDQ2kfG%2F3TjtfnCeCs2JwUsnWGoARaPzygrnkCWzrdgTOZouhdOna2MMS%2B1L8GOqUBvIsroCuOS%2BEgcwyUDi%2B7Qnt2MWt2Cmca%2BW%2BUEhe74pHl%2FSvqNCzzYijGyUAKy7yhvZKoC6ON3i7JvwZNW%2BpUEd3rqGN5t3vCmqIhBtaDSCrbjsaAgnJsAdTBreDMqRSFU2StXLceRQh%2B7sRA9WqD6VGod7HOcbyyZMqMWieuzOu2nwbHukBv5uhLtnN0flwV2ErqklodgCIo8mGPSNooRsgJlhYS&X-Amz-Signature=6f61c22f482114e03ffe12f2990f0fc26fbb1e6370c0d490b683c396f4099cd8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
