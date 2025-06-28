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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46Y6BPW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFG9Gb5p1R6pJjeuPrKI%2BBsS%2F2ANgmk3f5cvzKj4MxuAiBAUZ3%2BqfhmD7p3XhffJdACPf0YrPB%2B0Fxg6nx1PcYdAyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrZ6%2FOQ%2BO0lx48EqjKtwDwsZ%2BxItvYVUS41O9LhhTA%2BEUSi3LQMSDOb2jHIjiHzgQHNH5KlH7Ohz6WNchxNnwdUZtbvpfQAl2sz7Ot8mHz2X5c1d6U029qc7xE%2B476WW3%2BLsjTgJR19JfbXpC7hteeZm8XhwXKW4bGCEjJo%2BRKWqEGWu2WZ2dBi%2BQ0t2lGDpZ%2Bt1ESQDYzvc29CbU3wOMJ0CM9ZLM7Zmfz5PnKw8VDk1YQkUxndeSg9sgYjYPO4liPHL%2BTC24rJaukUaqlCiSjLnMsIGJyR3sNV0ARgcntFtGGXktQ86ozntDbDHzInF1BV9EvGjn0xy5ZNYWv9wnuWxk%2FW7YJkkNAnH2QBlcCuMs3jfNH5m0tmP7tYLx4VzYK0Q3Kq%2BYqM8CwozQRGtqYjSWiAVT6HCeYHfJICGGFg%2F6QSyX0AWLd5%2BJkHPuNMZL4ZULDUdXD607LNr0eeJR8o1ZpzG9enfTR9WlhEKiWf3Ikk8k%2Bs21OcgwVOU88PKlIkkQ26%2F4N6pz9%2Fi2AUAn8JcCf9mexYQAI3CENAWoihWWXHwJcjKkF5U8TQQBy6HQW3jvlLdjjhTHiSurr%2FMbk2Iew1XEdZSqDGv6KCPf%2BN7ddaTYiHp1mdAWRHVxNcCZzh%2Ft5PjJ4r66DWAwr5D%2FwgY6pgFKtEayxeul7RBBWbzhZ0h38FawS1BS6voUlB%2B5H%2Bqu%2BIMaXYigip8tALoUV40UwlWv8PjfrU4i34kHGcCXuDIHHSL7%2BOB%2BKF16VO2Ytlg2%2FIWWPobOzznMaeYwpe%2Fs9zVy4uCjE1KO2bqDdrJMHIftuFZhekRs2JkZtW8uYAcRVnO2PRgfHyLcCLN127zJKdqcMTFlaLZfA6KMxrUO08gYaU5bkJ1m&X-Amz-Signature=9f4fd6e20f76151b49026f44c75cede32b07c9a4664f210ac52e26cd1bc54284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46Y6BPW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFG9Gb5p1R6pJjeuPrKI%2BBsS%2F2ANgmk3f5cvzKj4MxuAiBAUZ3%2BqfhmD7p3XhffJdACPf0YrPB%2B0Fxg6nx1PcYdAyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrZ6%2FOQ%2BO0lx48EqjKtwDwsZ%2BxItvYVUS41O9LhhTA%2BEUSi3LQMSDOb2jHIjiHzgQHNH5KlH7Ohz6WNchxNnwdUZtbvpfQAl2sz7Ot8mHz2X5c1d6U029qc7xE%2B476WW3%2BLsjTgJR19JfbXpC7hteeZm8XhwXKW4bGCEjJo%2BRKWqEGWu2WZ2dBi%2BQ0t2lGDpZ%2Bt1ESQDYzvc29CbU3wOMJ0CM9ZLM7Zmfz5PnKw8VDk1YQkUxndeSg9sgYjYPO4liPHL%2BTC24rJaukUaqlCiSjLnMsIGJyR3sNV0ARgcntFtGGXktQ86ozntDbDHzInF1BV9EvGjn0xy5ZNYWv9wnuWxk%2FW7YJkkNAnH2QBlcCuMs3jfNH5m0tmP7tYLx4VzYK0Q3Kq%2BYqM8CwozQRGtqYjSWiAVT6HCeYHfJICGGFg%2F6QSyX0AWLd5%2BJkHPuNMZL4ZULDUdXD607LNr0eeJR8o1ZpzG9enfTR9WlhEKiWf3Ikk8k%2Bs21OcgwVOU88PKlIkkQ26%2F4N6pz9%2Fi2AUAn8JcCf9mexYQAI3CENAWoihWWXHwJcjKkF5U8TQQBy6HQW3jvlLdjjhTHiSurr%2FMbk2Iew1XEdZSqDGv6KCPf%2BN7ddaTYiHp1mdAWRHVxNcCZzh%2Ft5PjJ4r66DWAwr5D%2FwgY6pgFKtEayxeul7RBBWbzhZ0h38FawS1BS6voUlB%2B5H%2Bqu%2BIMaXYigip8tALoUV40UwlWv8PjfrU4i34kHGcCXuDIHHSL7%2BOB%2BKF16VO2Ytlg2%2FIWWPobOzznMaeYwpe%2Fs9zVy4uCjE1KO2bqDdrJMHIftuFZhekRs2JkZtW8uYAcRVnO2PRgfHyLcCLN127zJKdqcMTFlaLZfA6KMxrUO08gYaU5bkJ1m&X-Amz-Signature=d829dea3ad8c26f607dfe7126e29f2eac82ae7708a052a5e0a6ffb34a9328408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46Y6BPW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFG9Gb5p1R6pJjeuPrKI%2BBsS%2F2ANgmk3f5cvzKj4MxuAiBAUZ3%2BqfhmD7p3XhffJdACPf0YrPB%2B0Fxg6nx1PcYdAyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrZ6%2FOQ%2BO0lx48EqjKtwDwsZ%2BxItvYVUS41O9LhhTA%2BEUSi3LQMSDOb2jHIjiHzgQHNH5KlH7Ohz6WNchxNnwdUZtbvpfQAl2sz7Ot8mHz2X5c1d6U029qc7xE%2B476WW3%2BLsjTgJR19JfbXpC7hteeZm8XhwXKW4bGCEjJo%2BRKWqEGWu2WZ2dBi%2BQ0t2lGDpZ%2Bt1ESQDYzvc29CbU3wOMJ0CM9ZLM7Zmfz5PnKw8VDk1YQkUxndeSg9sgYjYPO4liPHL%2BTC24rJaukUaqlCiSjLnMsIGJyR3sNV0ARgcntFtGGXktQ86ozntDbDHzInF1BV9EvGjn0xy5ZNYWv9wnuWxk%2FW7YJkkNAnH2QBlcCuMs3jfNH5m0tmP7tYLx4VzYK0Q3Kq%2BYqM8CwozQRGtqYjSWiAVT6HCeYHfJICGGFg%2F6QSyX0AWLd5%2BJkHPuNMZL4ZULDUdXD607LNr0eeJR8o1ZpzG9enfTR9WlhEKiWf3Ikk8k%2Bs21OcgwVOU88PKlIkkQ26%2F4N6pz9%2Fi2AUAn8JcCf9mexYQAI3CENAWoihWWXHwJcjKkF5U8TQQBy6HQW3jvlLdjjhTHiSurr%2FMbk2Iew1XEdZSqDGv6KCPf%2BN7ddaTYiHp1mdAWRHVxNcCZzh%2Ft5PjJ4r66DWAwr5D%2FwgY6pgFKtEayxeul7RBBWbzhZ0h38FawS1BS6voUlB%2B5H%2Bqu%2BIMaXYigip8tALoUV40UwlWv8PjfrU4i34kHGcCXuDIHHSL7%2BOB%2BKF16VO2Ytlg2%2FIWWPobOzznMaeYwpe%2Fs9zVy4uCjE1KO2bqDdrJMHIftuFZhekRs2JkZtW8uYAcRVnO2PRgfHyLcCLN127zJKdqcMTFlaLZfA6KMxrUO08gYaU5bkJ1m&X-Amz-Signature=fcab861788f177e6d76a338297e85350216e9ddad461e32ee35d0a8b70cfe667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46Y6BPW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFG9Gb5p1R6pJjeuPrKI%2BBsS%2F2ANgmk3f5cvzKj4MxuAiBAUZ3%2BqfhmD7p3XhffJdACPf0YrPB%2B0Fxg6nx1PcYdAyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrZ6%2FOQ%2BO0lx48EqjKtwDwsZ%2BxItvYVUS41O9LhhTA%2BEUSi3LQMSDOb2jHIjiHzgQHNH5KlH7Ohz6WNchxNnwdUZtbvpfQAl2sz7Ot8mHz2X5c1d6U029qc7xE%2B476WW3%2BLsjTgJR19JfbXpC7hteeZm8XhwXKW4bGCEjJo%2BRKWqEGWu2WZ2dBi%2BQ0t2lGDpZ%2Bt1ESQDYzvc29CbU3wOMJ0CM9ZLM7Zmfz5PnKw8VDk1YQkUxndeSg9sgYjYPO4liPHL%2BTC24rJaukUaqlCiSjLnMsIGJyR3sNV0ARgcntFtGGXktQ86ozntDbDHzInF1BV9EvGjn0xy5ZNYWv9wnuWxk%2FW7YJkkNAnH2QBlcCuMs3jfNH5m0tmP7tYLx4VzYK0Q3Kq%2BYqM8CwozQRGtqYjSWiAVT6HCeYHfJICGGFg%2F6QSyX0AWLd5%2BJkHPuNMZL4ZULDUdXD607LNr0eeJR8o1ZpzG9enfTR9WlhEKiWf3Ikk8k%2Bs21OcgwVOU88PKlIkkQ26%2F4N6pz9%2Fi2AUAn8JcCf9mexYQAI3CENAWoihWWXHwJcjKkF5U8TQQBy6HQW3jvlLdjjhTHiSurr%2FMbk2Iew1XEdZSqDGv6KCPf%2BN7ddaTYiHp1mdAWRHVxNcCZzh%2Ft5PjJ4r66DWAwr5D%2FwgY6pgFKtEayxeul7RBBWbzhZ0h38FawS1BS6voUlB%2B5H%2Bqu%2BIMaXYigip8tALoUV40UwlWv8PjfrU4i34kHGcCXuDIHHSL7%2BOB%2BKF16VO2Ytlg2%2FIWWPobOzznMaeYwpe%2Fs9zVy4uCjE1KO2bqDdrJMHIftuFZhekRs2JkZtW8uYAcRVnO2PRgfHyLcCLN127zJKdqcMTFlaLZfA6KMxrUO08gYaU5bkJ1m&X-Amz-Signature=270d4e6fc1589f203dba3b22359fb711b3e1f8bad3d7e8235cbeff5c23af4614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46Y6BPW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFG9Gb5p1R6pJjeuPrKI%2BBsS%2F2ANgmk3f5cvzKj4MxuAiBAUZ3%2BqfhmD7p3XhffJdACPf0YrPB%2B0Fxg6nx1PcYdAyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrZ6%2FOQ%2BO0lx48EqjKtwDwsZ%2BxItvYVUS41O9LhhTA%2BEUSi3LQMSDOb2jHIjiHzgQHNH5KlH7Ohz6WNchxNnwdUZtbvpfQAl2sz7Ot8mHz2X5c1d6U029qc7xE%2B476WW3%2BLsjTgJR19JfbXpC7hteeZm8XhwXKW4bGCEjJo%2BRKWqEGWu2WZ2dBi%2BQ0t2lGDpZ%2Bt1ESQDYzvc29CbU3wOMJ0CM9ZLM7Zmfz5PnKw8VDk1YQkUxndeSg9sgYjYPO4liPHL%2BTC24rJaukUaqlCiSjLnMsIGJyR3sNV0ARgcntFtGGXktQ86ozntDbDHzInF1BV9EvGjn0xy5ZNYWv9wnuWxk%2FW7YJkkNAnH2QBlcCuMs3jfNH5m0tmP7tYLx4VzYK0Q3Kq%2BYqM8CwozQRGtqYjSWiAVT6HCeYHfJICGGFg%2F6QSyX0AWLd5%2BJkHPuNMZL4ZULDUdXD607LNr0eeJR8o1ZpzG9enfTR9WlhEKiWf3Ikk8k%2Bs21OcgwVOU88PKlIkkQ26%2F4N6pz9%2Fi2AUAn8JcCf9mexYQAI3CENAWoihWWXHwJcjKkF5U8TQQBy6HQW3jvlLdjjhTHiSurr%2FMbk2Iew1XEdZSqDGv6KCPf%2BN7ddaTYiHp1mdAWRHVxNcCZzh%2Ft5PjJ4r66DWAwr5D%2FwgY6pgFKtEayxeul7RBBWbzhZ0h38FawS1BS6voUlB%2B5H%2Bqu%2BIMaXYigip8tALoUV40UwlWv8PjfrU4i34kHGcCXuDIHHSL7%2BOB%2BKF16VO2Ytlg2%2FIWWPobOzznMaeYwpe%2Fs9zVy4uCjE1KO2bqDdrJMHIftuFZhekRs2JkZtW8uYAcRVnO2PRgfHyLcCLN127zJKdqcMTFlaLZfA6KMxrUO08gYaU5bkJ1m&X-Amz-Signature=ddfbe8d6b25cc10f7c27f8a95b1752da6a75a0fbc8f6039e8071e714c7a9b17b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46Y6BPW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFG9Gb5p1R6pJjeuPrKI%2BBsS%2F2ANgmk3f5cvzKj4MxuAiBAUZ3%2BqfhmD7p3XhffJdACPf0YrPB%2B0Fxg6nx1PcYdAyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrZ6%2FOQ%2BO0lx48EqjKtwDwsZ%2BxItvYVUS41O9LhhTA%2BEUSi3LQMSDOb2jHIjiHzgQHNH5KlH7Ohz6WNchxNnwdUZtbvpfQAl2sz7Ot8mHz2X5c1d6U029qc7xE%2B476WW3%2BLsjTgJR19JfbXpC7hteeZm8XhwXKW4bGCEjJo%2BRKWqEGWu2WZ2dBi%2BQ0t2lGDpZ%2Bt1ESQDYzvc29CbU3wOMJ0CM9ZLM7Zmfz5PnKw8VDk1YQkUxndeSg9sgYjYPO4liPHL%2BTC24rJaukUaqlCiSjLnMsIGJyR3sNV0ARgcntFtGGXktQ86ozntDbDHzInF1BV9EvGjn0xy5ZNYWv9wnuWxk%2FW7YJkkNAnH2QBlcCuMs3jfNH5m0tmP7tYLx4VzYK0Q3Kq%2BYqM8CwozQRGtqYjSWiAVT6HCeYHfJICGGFg%2F6QSyX0AWLd5%2BJkHPuNMZL4ZULDUdXD607LNr0eeJR8o1ZpzG9enfTR9WlhEKiWf3Ikk8k%2Bs21OcgwVOU88PKlIkkQ26%2F4N6pz9%2Fi2AUAn8JcCf9mexYQAI3CENAWoihWWXHwJcjKkF5U8TQQBy6HQW3jvlLdjjhTHiSurr%2FMbk2Iew1XEdZSqDGv6KCPf%2BN7ddaTYiHp1mdAWRHVxNcCZzh%2Ft5PjJ4r66DWAwr5D%2FwgY6pgFKtEayxeul7RBBWbzhZ0h38FawS1BS6voUlB%2B5H%2Bqu%2BIMaXYigip8tALoUV40UwlWv8PjfrU4i34kHGcCXuDIHHSL7%2BOB%2BKF16VO2Ytlg2%2FIWWPobOzznMaeYwpe%2Fs9zVy4uCjE1KO2bqDdrJMHIftuFZhekRs2JkZtW8uYAcRVnO2PRgfHyLcCLN127zJKdqcMTFlaLZfA6KMxrUO08gYaU5bkJ1m&X-Amz-Signature=712eaafdc164f9ab4a3e1b0542c5d5cc69788939f4806d02620bd9ff9a190859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46Y6BPW%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFG9Gb5p1R6pJjeuPrKI%2BBsS%2F2ANgmk3f5cvzKj4MxuAiBAUZ3%2BqfhmD7p3XhffJdACPf0YrPB%2B0Fxg6nx1PcYdAyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrZ6%2FOQ%2BO0lx48EqjKtwDwsZ%2BxItvYVUS41O9LhhTA%2BEUSi3LQMSDOb2jHIjiHzgQHNH5KlH7Ohz6WNchxNnwdUZtbvpfQAl2sz7Ot8mHz2X5c1d6U029qc7xE%2B476WW3%2BLsjTgJR19JfbXpC7hteeZm8XhwXKW4bGCEjJo%2BRKWqEGWu2WZ2dBi%2BQ0t2lGDpZ%2Bt1ESQDYzvc29CbU3wOMJ0CM9ZLM7Zmfz5PnKw8VDk1YQkUxndeSg9sgYjYPO4liPHL%2BTC24rJaukUaqlCiSjLnMsIGJyR3sNV0ARgcntFtGGXktQ86ozntDbDHzInF1BV9EvGjn0xy5ZNYWv9wnuWxk%2FW7YJkkNAnH2QBlcCuMs3jfNH5m0tmP7tYLx4VzYK0Q3Kq%2BYqM8CwozQRGtqYjSWiAVT6HCeYHfJICGGFg%2F6QSyX0AWLd5%2BJkHPuNMZL4ZULDUdXD607LNr0eeJR8o1ZpzG9enfTR9WlhEKiWf3Ikk8k%2Bs21OcgwVOU88PKlIkkQ26%2F4N6pz9%2Fi2AUAn8JcCf9mexYQAI3CENAWoihWWXHwJcjKkF5U8TQQBy6HQW3jvlLdjjhTHiSurr%2FMbk2Iew1XEdZSqDGv6KCPf%2BN7ddaTYiHp1mdAWRHVxNcCZzh%2Ft5PjJ4r66DWAwr5D%2FwgY6pgFKtEayxeul7RBBWbzhZ0h38FawS1BS6voUlB%2B5H%2Bqu%2BIMaXYigip8tALoUV40UwlWv8PjfrU4i34kHGcCXuDIHHSL7%2BOB%2BKF16VO2Ytlg2%2FIWWPobOzznMaeYwpe%2Fs9zVy4uCjE1KO2bqDdrJMHIftuFZhekRs2JkZtW8uYAcRVnO2PRgfHyLcCLN127zJKdqcMTFlaLZfA6KMxrUO08gYaU5bkJ1m&X-Amz-Signature=7cb2a843d0dfc351bb4080dc21c8bb479ef88adc5fee931fe79839c9994d98b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
