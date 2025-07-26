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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUO4ONP5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIA7dNjyyOIvhN5tBZ8PdVM%2FvasTWO%2BQ7LvFr8GPa7VWQAiEA69EubUrflvEG0Kt1ohD%2FsW6hTHTFr03LC7LyQq7nn%2F4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGZ%2BzOMcCE0mF0FP9ircA5Bm9b08ZRsJVeTLJGfuiomxjsjoBXNzZkM7QnBkrwW9sAFFtvbLp8zFjQ5cOCEma9NPv%2FamkR%2BPp%2F2pdh%2BMFWHYAPTkiwIsNMlyiPfmqF8j3A4d6jw3%2FL7z33X8LQm3bQR2caGFmwwx3lc%2BLshtVx2Rc5qMNq7SpJi4WI3yrzzOLp3%2BGnUbe%2Bg7F5htYtIn6tbwpYofyh9wBi4bPKcHyiXd4f8tAcubNbqb3FhZKoRjtzU5Goy2snSqQkUcRxcOv9QutSU3OpGB28H0Mfk%2FjMOVmlTPHHxo%2BXuH9xyRGxMkSv%2FQ9udkwe8mh1oW5JC5Z3NLB0ArpPYK4UW3Wm3HPeo7GO6d6mK9wUOM7bT%2BV1Q316FCwiv30eg7aFINNcgpWvl3MPnK9XgTzaoTLtm%2FexdxbK9MOmMorP%2B9r%2BK0wTt53pUm2UgsT86Eq3OIBPsoMGr5COnShVpfc1nLLCozCS9bJsA6SpvpKScudwsEDohKix9zm5Vr3I%2FK8AjblEvAYvu1lNl5Ak2MkCIncLJ6XT0TwrW664svzwJmYPS%2FEkFf4I2wVXfI9x03Ey93I9o%2FAbjU9%2FiXOKXJK%2BX2P2ygjiZz7sEnAiYBmjwp1mhWFWqcrcqSQ62iIbbVAuqUMJXBk8QGOqUBmbhVYqRm857Gq2bpNBI9N%2FC01EfYSb5luCqAi8IuCJ2XeeIflZ9No%2BdxA2s8eU0WplLEcnJUcJkgI9YPksDXOvkSJbBcHlsc7RRus0FMXDV0tLmYYCu2zNnuXoCwB3ieS7nIj5rFHYqit87jQ%2BfnxUMQLLGEu%2Bb63o0HKnuVXiR7gRnzmm6Z%2BuFlMr4a9oxQTaWT5U0HPih5msCFsh43%2FwlAVNnR&X-Amz-Signature=8c7f8c5df5752e578cade063465bcef580ee0c248286d48eb64d476e006fe1b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUO4ONP5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIA7dNjyyOIvhN5tBZ8PdVM%2FvasTWO%2BQ7LvFr8GPa7VWQAiEA69EubUrflvEG0Kt1ohD%2FsW6hTHTFr03LC7LyQq7nn%2F4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGZ%2BzOMcCE0mF0FP9ircA5Bm9b08ZRsJVeTLJGfuiomxjsjoBXNzZkM7QnBkrwW9sAFFtvbLp8zFjQ5cOCEma9NPv%2FamkR%2BPp%2F2pdh%2BMFWHYAPTkiwIsNMlyiPfmqF8j3A4d6jw3%2FL7z33X8LQm3bQR2caGFmwwx3lc%2BLshtVx2Rc5qMNq7SpJi4WI3yrzzOLp3%2BGnUbe%2Bg7F5htYtIn6tbwpYofyh9wBi4bPKcHyiXd4f8tAcubNbqb3FhZKoRjtzU5Goy2snSqQkUcRxcOv9QutSU3OpGB28H0Mfk%2FjMOVmlTPHHxo%2BXuH9xyRGxMkSv%2FQ9udkwe8mh1oW5JC5Z3NLB0ArpPYK4UW3Wm3HPeo7GO6d6mK9wUOM7bT%2BV1Q316FCwiv30eg7aFINNcgpWvl3MPnK9XgTzaoTLtm%2FexdxbK9MOmMorP%2B9r%2BK0wTt53pUm2UgsT86Eq3OIBPsoMGr5COnShVpfc1nLLCozCS9bJsA6SpvpKScudwsEDohKix9zm5Vr3I%2FK8AjblEvAYvu1lNl5Ak2MkCIncLJ6XT0TwrW664svzwJmYPS%2FEkFf4I2wVXfI9x03Ey93I9o%2FAbjU9%2FiXOKXJK%2BX2P2ygjiZz7sEnAiYBmjwp1mhWFWqcrcqSQ62iIbbVAuqUMJXBk8QGOqUBmbhVYqRm857Gq2bpNBI9N%2FC01EfYSb5luCqAi8IuCJ2XeeIflZ9No%2BdxA2s8eU0WplLEcnJUcJkgI9YPksDXOvkSJbBcHlsc7RRus0FMXDV0tLmYYCu2zNnuXoCwB3ieS7nIj5rFHYqit87jQ%2BfnxUMQLLGEu%2Bb63o0HKnuVXiR7gRnzmm6Z%2BuFlMr4a9oxQTaWT5U0HPih5msCFsh43%2FwlAVNnR&X-Amz-Signature=d0005e8d146d483dc8772a05e53bdd443c7aa8affeb131e98946f0d5face3999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUO4ONP5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIA7dNjyyOIvhN5tBZ8PdVM%2FvasTWO%2BQ7LvFr8GPa7VWQAiEA69EubUrflvEG0Kt1ohD%2FsW6hTHTFr03LC7LyQq7nn%2F4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGZ%2BzOMcCE0mF0FP9ircA5Bm9b08ZRsJVeTLJGfuiomxjsjoBXNzZkM7QnBkrwW9sAFFtvbLp8zFjQ5cOCEma9NPv%2FamkR%2BPp%2F2pdh%2BMFWHYAPTkiwIsNMlyiPfmqF8j3A4d6jw3%2FL7z33X8LQm3bQR2caGFmwwx3lc%2BLshtVx2Rc5qMNq7SpJi4WI3yrzzOLp3%2BGnUbe%2Bg7F5htYtIn6tbwpYofyh9wBi4bPKcHyiXd4f8tAcubNbqb3FhZKoRjtzU5Goy2snSqQkUcRxcOv9QutSU3OpGB28H0Mfk%2FjMOVmlTPHHxo%2BXuH9xyRGxMkSv%2FQ9udkwe8mh1oW5JC5Z3NLB0ArpPYK4UW3Wm3HPeo7GO6d6mK9wUOM7bT%2BV1Q316FCwiv30eg7aFINNcgpWvl3MPnK9XgTzaoTLtm%2FexdxbK9MOmMorP%2B9r%2BK0wTt53pUm2UgsT86Eq3OIBPsoMGr5COnShVpfc1nLLCozCS9bJsA6SpvpKScudwsEDohKix9zm5Vr3I%2FK8AjblEvAYvu1lNl5Ak2MkCIncLJ6XT0TwrW664svzwJmYPS%2FEkFf4I2wVXfI9x03Ey93I9o%2FAbjU9%2FiXOKXJK%2BX2P2ygjiZz7sEnAiYBmjwp1mhWFWqcrcqSQ62iIbbVAuqUMJXBk8QGOqUBmbhVYqRm857Gq2bpNBI9N%2FC01EfYSb5luCqAi8IuCJ2XeeIflZ9No%2BdxA2s8eU0WplLEcnJUcJkgI9YPksDXOvkSJbBcHlsc7RRus0FMXDV0tLmYYCu2zNnuXoCwB3ieS7nIj5rFHYqit87jQ%2BfnxUMQLLGEu%2Bb63o0HKnuVXiR7gRnzmm6Z%2BuFlMr4a9oxQTaWT5U0HPih5msCFsh43%2FwlAVNnR&X-Amz-Signature=d86b5f18a67f344c424fe88429c78a1eda401b3b641254e992f99f261905f16b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUO4ONP5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIA7dNjyyOIvhN5tBZ8PdVM%2FvasTWO%2BQ7LvFr8GPa7VWQAiEA69EubUrflvEG0Kt1ohD%2FsW6hTHTFr03LC7LyQq7nn%2F4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGZ%2BzOMcCE0mF0FP9ircA5Bm9b08ZRsJVeTLJGfuiomxjsjoBXNzZkM7QnBkrwW9sAFFtvbLp8zFjQ5cOCEma9NPv%2FamkR%2BPp%2F2pdh%2BMFWHYAPTkiwIsNMlyiPfmqF8j3A4d6jw3%2FL7z33X8LQm3bQR2caGFmwwx3lc%2BLshtVx2Rc5qMNq7SpJi4WI3yrzzOLp3%2BGnUbe%2Bg7F5htYtIn6tbwpYofyh9wBi4bPKcHyiXd4f8tAcubNbqb3FhZKoRjtzU5Goy2snSqQkUcRxcOv9QutSU3OpGB28H0Mfk%2FjMOVmlTPHHxo%2BXuH9xyRGxMkSv%2FQ9udkwe8mh1oW5JC5Z3NLB0ArpPYK4UW3Wm3HPeo7GO6d6mK9wUOM7bT%2BV1Q316FCwiv30eg7aFINNcgpWvl3MPnK9XgTzaoTLtm%2FexdxbK9MOmMorP%2B9r%2BK0wTt53pUm2UgsT86Eq3OIBPsoMGr5COnShVpfc1nLLCozCS9bJsA6SpvpKScudwsEDohKix9zm5Vr3I%2FK8AjblEvAYvu1lNl5Ak2MkCIncLJ6XT0TwrW664svzwJmYPS%2FEkFf4I2wVXfI9x03Ey93I9o%2FAbjU9%2FiXOKXJK%2BX2P2ygjiZz7sEnAiYBmjwp1mhWFWqcrcqSQ62iIbbVAuqUMJXBk8QGOqUBmbhVYqRm857Gq2bpNBI9N%2FC01EfYSb5luCqAi8IuCJ2XeeIflZ9No%2BdxA2s8eU0WplLEcnJUcJkgI9YPksDXOvkSJbBcHlsc7RRus0FMXDV0tLmYYCu2zNnuXoCwB3ieS7nIj5rFHYqit87jQ%2BfnxUMQLLGEu%2Bb63o0HKnuVXiR7gRnzmm6Z%2BuFlMr4a9oxQTaWT5U0HPih5msCFsh43%2FwlAVNnR&X-Amz-Signature=5d98323d4423cbe603814650c5f33f4bdd58581c59e98aad2d83f1148badd3bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUO4ONP5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIA7dNjyyOIvhN5tBZ8PdVM%2FvasTWO%2BQ7LvFr8GPa7VWQAiEA69EubUrflvEG0Kt1ohD%2FsW6hTHTFr03LC7LyQq7nn%2F4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGZ%2BzOMcCE0mF0FP9ircA5Bm9b08ZRsJVeTLJGfuiomxjsjoBXNzZkM7QnBkrwW9sAFFtvbLp8zFjQ5cOCEma9NPv%2FamkR%2BPp%2F2pdh%2BMFWHYAPTkiwIsNMlyiPfmqF8j3A4d6jw3%2FL7z33X8LQm3bQR2caGFmwwx3lc%2BLshtVx2Rc5qMNq7SpJi4WI3yrzzOLp3%2BGnUbe%2Bg7F5htYtIn6tbwpYofyh9wBi4bPKcHyiXd4f8tAcubNbqb3FhZKoRjtzU5Goy2snSqQkUcRxcOv9QutSU3OpGB28H0Mfk%2FjMOVmlTPHHxo%2BXuH9xyRGxMkSv%2FQ9udkwe8mh1oW5JC5Z3NLB0ArpPYK4UW3Wm3HPeo7GO6d6mK9wUOM7bT%2BV1Q316FCwiv30eg7aFINNcgpWvl3MPnK9XgTzaoTLtm%2FexdxbK9MOmMorP%2B9r%2BK0wTt53pUm2UgsT86Eq3OIBPsoMGr5COnShVpfc1nLLCozCS9bJsA6SpvpKScudwsEDohKix9zm5Vr3I%2FK8AjblEvAYvu1lNl5Ak2MkCIncLJ6XT0TwrW664svzwJmYPS%2FEkFf4I2wVXfI9x03Ey93I9o%2FAbjU9%2FiXOKXJK%2BX2P2ygjiZz7sEnAiYBmjwp1mhWFWqcrcqSQ62iIbbVAuqUMJXBk8QGOqUBmbhVYqRm857Gq2bpNBI9N%2FC01EfYSb5luCqAi8IuCJ2XeeIflZ9No%2BdxA2s8eU0WplLEcnJUcJkgI9YPksDXOvkSJbBcHlsc7RRus0FMXDV0tLmYYCu2zNnuXoCwB3ieS7nIj5rFHYqit87jQ%2BfnxUMQLLGEu%2Bb63o0HKnuVXiR7gRnzmm6Z%2BuFlMr4a9oxQTaWT5U0HPih5msCFsh43%2FwlAVNnR&X-Amz-Signature=c745e892ce2b612569c6ec5893b1b28ba17b8ea1bdc8d4dc3712ce7fd189f970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUO4ONP5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIA7dNjyyOIvhN5tBZ8PdVM%2FvasTWO%2BQ7LvFr8GPa7VWQAiEA69EubUrflvEG0Kt1ohD%2FsW6hTHTFr03LC7LyQq7nn%2F4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGZ%2BzOMcCE0mF0FP9ircA5Bm9b08ZRsJVeTLJGfuiomxjsjoBXNzZkM7QnBkrwW9sAFFtvbLp8zFjQ5cOCEma9NPv%2FamkR%2BPp%2F2pdh%2BMFWHYAPTkiwIsNMlyiPfmqF8j3A4d6jw3%2FL7z33X8LQm3bQR2caGFmwwx3lc%2BLshtVx2Rc5qMNq7SpJi4WI3yrzzOLp3%2BGnUbe%2Bg7F5htYtIn6tbwpYofyh9wBi4bPKcHyiXd4f8tAcubNbqb3FhZKoRjtzU5Goy2snSqQkUcRxcOv9QutSU3OpGB28H0Mfk%2FjMOVmlTPHHxo%2BXuH9xyRGxMkSv%2FQ9udkwe8mh1oW5JC5Z3NLB0ArpPYK4UW3Wm3HPeo7GO6d6mK9wUOM7bT%2BV1Q316FCwiv30eg7aFINNcgpWvl3MPnK9XgTzaoTLtm%2FexdxbK9MOmMorP%2B9r%2BK0wTt53pUm2UgsT86Eq3OIBPsoMGr5COnShVpfc1nLLCozCS9bJsA6SpvpKScudwsEDohKix9zm5Vr3I%2FK8AjblEvAYvu1lNl5Ak2MkCIncLJ6XT0TwrW664svzwJmYPS%2FEkFf4I2wVXfI9x03Ey93I9o%2FAbjU9%2FiXOKXJK%2BX2P2ygjiZz7sEnAiYBmjwp1mhWFWqcrcqSQ62iIbbVAuqUMJXBk8QGOqUBmbhVYqRm857Gq2bpNBI9N%2FC01EfYSb5luCqAi8IuCJ2XeeIflZ9No%2BdxA2s8eU0WplLEcnJUcJkgI9YPksDXOvkSJbBcHlsc7RRus0FMXDV0tLmYYCu2zNnuXoCwB3ieS7nIj5rFHYqit87jQ%2BfnxUMQLLGEu%2Bb63o0HKnuVXiR7gRnzmm6Z%2BuFlMr4a9oxQTaWT5U0HPih5msCFsh43%2FwlAVNnR&X-Amz-Signature=70e6dd8520d00cd8ac07014616d71eba58fdce4d4f88d01bddcd9820c6d13871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUO4ONP5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIA7dNjyyOIvhN5tBZ8PdVM%2FvasTWO%2BQ7LvFr8GPa7VWQAiEA69EubUrflvEG0Kt1ohD%2FsW6hTHTFr03LC7LyQq7nn%2F4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGZ%2BzOMcCE0mF0FP9ircA5Bm9b08ZRsJVeTLJGfuiomxjsjoBXNzZkM7QnBkrwW9sAFFtvbLp8zFjQ5cOCEma9NPv%2FamkR%2BPp%2F2pdh%2BMFWHYAPTkiwIsNMlyiPfmqF8j3A4d6jw3%2FL7z33X8LQm3bQR2caGFmwwx3lc%2BLshtVx2Rc5qMNq7SpJi4WI3yrzzOLp3%2BGnUbe%2Bg7F5htYtIn6tbwpYofyh9wBi4bPKcHyiXd4f8tAcubNbqb3FhZKoRjtzU5Goy2snSqQkUcRxcOv9QutSU3OpGB28H0Mfk%2FjMOVmlTPHHxo%2BXuH9xyRGxMkSv%2FQ9udkwe8mh1oW5JC5Z3NLB0ArpPYK4UW3Wm3HPeo7GO6d6mK9wUOM7bT%2BV1Q316FCwiv30eg7aFINNcgpWvl3MPnK9XgTzaoTLtm%2FexdxbK9MOmMorP%2B9r%2BK0wTt53pUm2UgsT86Eq3OIBPsoMGr5COnShVpfc1nLLCozCS9bJsA6SpvpKScudwsEDohKix9zm5Vr3I%2FK8AjblEvAYvu1lNl5Ak2MkCIncLJ6XT0TwrW664svzwJmYPS%2FEkFf4I2wVXfI9x03Ey93I9o%2FAbjU9%2FiXOKXJK%2BX2P2ygjiZz7sEnAiYBmjwp1mhWFWqcrcqSQ62iIbbVAuqUMJXBk8QGOqUBmbhVYqRm857Gq2bpNBI9N%2FC01EfYSb5luCqAi8IuCJ2XeeIflZ9No%2BdxA2s8eU0WplLEcnJUcJkgI9YPksDXOvkSJbBcHlsc7RRus0FMXDV0tLmYYCu2zNnuXoCwB3ieS7nIj5rFHYqit87jQ%2BfnxUMQLLGEu%2Bb63o0HKnuVXiR7gRnzmm6Z%2BuFlMr4a9oxQTaWT5U0HPih5msCFsh43%2FwlAVNnR&X-Amz-Signature=5df45bb83fc7c9a57d3e0084012314a8d44fcca4d682aafe17bec0dd60d2146f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
