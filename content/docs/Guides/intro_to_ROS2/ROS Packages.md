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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGHPJYQ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCph7Rctej8zmPrPDdaGWXkoGNpZfXplGce87H7lgrKEAIgM8wo8dbsAyAr3Si5OIBs%2FXhXSedcIuNZpZrbt3XW78MqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9bBHjP8w4gma9evSrcA0SKL%2F4BU3shkRjPY7qu0AiNVePUaR1DFprmerYcw2fvsfJM2X%2B3ZVaSijhYf6c7oqf%2FtudZ2KPTWE9wHw0J1gCCKL3%2FvICcOJjyuGu%2Fsgke7hkV5Br48xHJym%2FCRx8pdMzc8hC1tC9303XlhSCqsAqC7ro7vj3Vs5pCPwiKsrBe4I3OnP7D5o%2FYyJXnw9ce7GM39xUTevHz1NAAsCywLeIW29kcfgNCuI%2BIDcB6AQeB61ZGojIO%2BIM%2B5dkJRv%2F7wAwc%2BWPs9nI%2Fh5QJmqAk7p%2FmeSL5WoN2g0cR3YzwB5g32zZIquOqoy55dO2nK%2FiQnxtCnPJBNUmX0tpHMSITCfiljODzhA1JxnXBqYKyY4EUzfW5xkxkt%2FqAui6P%2BYQlYNBiCtDsWnFQ%2B8ABIpmb0uWJ%2FrTDObRzaq0XJzqqqMJPOwwgoHcGojsVAfn04WQM64SldIq92io9VHfMJA1Vx8jNhGUFHpAVTcEUiG8nxX284ZxmALj3Z%2FyoHUtF3b7tAcV6UU9dfHf5bt2ahVDw%2FPF7bWBk%2BTveeWkGS0r%2FUc18HSI6unDd%2FoADzw74tT88nkPOirCPGt3%2BM3N6DyiN1rhpcaQiO83BdMWjdA9%2Ff2t%2BY3ffJS0Fbpvi6uySMO3c570GOqUBbgnr9yJ6KzZkvuYQPKdO54Xr8IWUfnRDFqyMK9zpBoNglj3EzrqpkFOlqksyzVh55IPHFHqOY0WVTifedE1enD2LAdQ6uTmFCmILumZXte340xwLkU8K0pwOx9IvpQSAHPclVNEChjtA%2BhwkZhfxZ0dytY8KQBZBwGUAdHG%2BFA3l2P9ILTUWuPs9rINDporgfySzDy2CERIG8ryK5d%2BgMjzCeKLB&X-Amz-Signature=9669efeeabb5c997bc55f4c01184b2c13320777c7df46d71d7771b9296e3ea87&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGHPJYQ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCph7Rctej8zmPrPDdaGWXkoGNpZfXplGce87H7lgrKEAIgM8wo8dbsAyAr3Si5OIBs%2FXhXSedcIuNZpZrbt3XW78MqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9bBHjP8w4gma9evSrcA0SKL%2F4BU3shkRjPY7qu0AiNVePUaR1DFprmerYcw2fvsfJM2X%2B3ZVaSijhYf6c7oqf%2FtudZ2KPTWE9wHw0J1gCCKL3%2FvICcOJjyuGu%2Fsgke7hkV5Br48xHJym%2FCRx8pdMzc8hC1tC9303XlhSCqsAqC7ro7vj3Vs5pCPwiKsrBe4I3OnP7D5o%2FYyJXnw9ce7GM39xUTevHz1NAAsCywLeIW29kcfgNCuI%2BIDcB6AQeB61ZGojIO%2BIM%2B5dkJRv%2F7wAwc%2BWPs9nI%2Fh5QJmqAk7p%2FmeSL5WoN2g0cR3YzwB5g32zZIquOqoy55dO2nK%2FiQnxtCnPJBNUmX0tpHMSITCfiljODzhA1JxnXBqYKyY4EUzfW5xkxkt%2FqAui6P%2BYQlYNBiCtDsWnFQ%2B8ABIpmb0uWJ%2FrTDObRzaq0XJzqqqMJPOwwgoHcGojsVAfn04WQM64SldIq92io9VHfMJA1Vx8jNhGUFHpAVTcEUiG8nxX284ZxmALj3Z%2FyoHUtF3b7tAcV6UU9dfHf5bt2ahVDw%2FPF7bWBk%2BTveeWkGS0r%2FUc18HSI6unDd%2FoADzw74tT88nkPOirCPGt3%2BM3N6DyiN1rhpcaQiO83BdMWjdA9%2Ff2t%2BY3ffJS0Fbpvi6uySMO3c570GOqUBbgnr9yJ6KzZkvuYQPKdO54Xr8IWUfnRDFqyMK9zpBoNglj3EzrqpkFOlqksyzVh55IPHFHqOY0WVTifedE1enD2LAdQ6uTmFCmILumZXte340xwLkU8K0pwOx9IvpQSAHPclVNEChjtA%2BhwkZhfxZ0dytY8KQBZBwGUAdHG%2BFA3l2P9ILTUWuPs9rINDporgfySzDy2CERIG8ryK5d%2BgMjzCeKLB&X-Amz-Signature=0bc53675892f2b48586bf15ded00ab6ab649255d241b9614e0ee223fad30c67e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGHPJYQ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCph7Rctej8zmPrPDdaGWXkoGNpZfXplGce87H7lgrKEAIgM8wo8dbsAyAr3Si5OIBs%2FXhXSedcIuNZpZrbt3XW78MqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9bBHjP8w4gma9evSrcA0SKL%2F4BU3shkRjPY7qu0AiNVePUaR1DFprmerYcw2fvsfJM2X%2B3ZVaSijhYf6c7oqf%2FtudZ2KPTWE9wHw0J1gCCKL3%2FvICcOJjyuGu%2Fsgke7hkV5Br48xHJym%2FCRx8pdMzc8hC1tC9303XlhSCqsAqC7ro7vj3Vs5pCPwiKsrBe4I3OnP7D5o%2FYyJXnw9ce7GM39xUTevHz1NAAsCywLeIW29kcfgNCuI%2BIDcB6AQeB61ZGojIO%2BIM%2B5dkJRv%2F7wAwc%2BWPs9nI%2Fh5QJmqAk7p%2FmeSL5WoN2g0cR3YzwB5g32zZIquOqoy55dO2nK%2FiQnxtCnPJBNUmX0tpHMSITCfiljODzhA1JxnXBqYKyY4EUzfW5xkxkt%2FqAui6P%2BYQlYNBiCtDsWnFQ%2B8ABIpmb0uWJ%2FrTDObRzaq0XJzqqqMJPOwwgoHcGojsVAfn04WQM64SldIq92io9VHfMJA1Vx8jNhGUFHpAVTcEUiG8nxX284ZxmALj3Z%2FyoHUtF3b7tAcV6UU9dfHf5bt2ahVDw%2FPF7bWBk%2BTveeWkGS0r%2FUc18HSI6unDd%2FoADzw74tT88nkPOirCPGt3%2BM3N6DyiN1rhpcaQiO83BdMWjdA9%2Ff2t%2BY3ffJS0Fbpvi6uySMO3c570GOqUBbgnr9yJ6KzZkvuYQPKdO54Xr8IWUfnRDFqyMK9zpBoNglj3EzrqpkFOlqksyzVh55IPHFHqOY0WVTifedE1enD2LAdQ6uTmFCmILumZXte340xwLkU8K0pwOx9IvpQSAHPclVNEChjtA%2BhwkZhfxZ0dytY8KQBZBwGUAdHG%2BFA3l2P9ILTUWuPs9rINDporgfySzDy2CERIG8ryK5d%2BgMjzCeKLB&X-Amz-Signature=8df09cecacfa8d86fa02a00c0800956e301953a54f72a6cd30952feb1ac5bbde&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGHPJYQ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCph7Rctej8zmPrPDdaGWXkoGNpZfXplGce87H7lgrKEAIgM8wo8dbsAyAr3Si5OIBs%2FXhXSedcIuNZpZrbt3XW78MqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9bBHjP8w4gma9evSrcA0SKL%2F4BU3shkRjPY7qu0AiNVePUaR1DFprmerYcw2fvsfJM2X%2B3ZVaSijhYf6c7oqf%2FtudZ2KPTWE9wHw0J1gCCKL3%2FvICcOJjyuGu%2Fsgke7hkV5Br48xHJym%2FCRx8pdMzc8hC1tC9303XlhSCqsAqC7ro7vj3Vs5pCPwiKsrBe4I3OnP7D5o%2FYyJXnw9ce7GM39xUTevHz1NAAsCywLeIW29kcfgNCuI%2BIDcB6AQeB61ZGojIO%2BIM%2B5dkJRv%2F7wAwc%2BWPs9nI%2Fh5QJmqAk7p%2FmeSL5WoN2g0cR3YzwB5g32zZIquOqoy55dO2nK%2FiQnxtCnPJBNUmX0tpHMSITCfiljODzhA1JxnXBqYKyY4EUzfW5xkxkt%2FqAui6P%2BYQlYNBiCtDsWnFQ%2B8ABIpmb0uWJ%2FrTDObRzaq0XJzqqqMJPOwwgoHcGojsVAfn04WQM64SldIq92io9VHfMJA1Vx8jNhGUFHpAVTcEUiG8nxX284ZxmALj3Z%2FyoHUtF3b7tAcV6UU9dfHf5bt2ahVDw%2FPF7bWBk%2BTveeWkGS0r%2FUc18HSI6unDd%2FoADzw74tT88nkPOirCPGt3%2BM3N6DyiN1rhpcaQiO83BdMWjdA9%2Ff2t%2BY3ffJS0Fbpvi6uySMO3c570GOqUBbgnr9yJ6KzZkvuYQPKdO54Xr8IWUfnRDFqyMK9zpBoNglj3EzrqpkFOlqksyzVh55IPHFHqOY0WVTifedE1enD2LAdQ6uTmFCmILumZXte340xwLkU8K0pwOx9IvpQSAHPclVNEChjtA%2BhwkZhfxZ0dytY8KQBZBwGUAdHG%2BFA3l2P9ILTUWuPs9rINDporgfySzDy2CERIG8ryK5d%2BgMjzCeKLB&X-Amz-Signature=7f39ddf4e7499f8037f497013987f4bf09c657533b2afbbc85efcba43d45aa69&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGHPJYQ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCph7Rctej8zmPrPDdaGWXkoGNpZfXplGce87H7lgrKEAIgM8wo8dbsAyAr3Si5OIBs%2FXhXSedcIuNZpZrbt3XW78MqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9bBHjP8w4gma9evSrcA0SKL%2F4BU3shkRjPY7qu0AiNVePUaR1DFprmerYcw2fvsfJM2X%2B3ZVaSijhYf6c7oqf%2FtudZ2KPTWE9wHw0J1gCCKL3%2FvICcOJjyuGu%2Fsgke7hkV5Br48xHJym%2FCRx8pdMzc8hC1tC9303XlhSCqsAqC7ro7vj3Vs5pCPwiKsrBe4I3OnP7D5o%2FYyJXnw9ce7GM39xUTevHz1NAAsCywLeIW29kcfgNCuI%2BIDcB6AQeB61ZGojIO%2BIM%2B5dkJRv%2F7wAwc%2BWPs9nI%2Fh5QJmqAk7p%2FmeSL5WoN2g0cR3YzwB5g32zZIquOqoy55dO2nK%2FiQnxtCnPJBNUmX0tpHMSITCfiljODzhA1JxnXBqYKyY4EUzfW5xkxkt%2FqAui6P%2BYQlYNBiCtDsWnFQ%2B8ABIpmb0uWJ%2FrTDObRzaq0XJzqqqMJPOwwgoHcGojsVAfn04WQM64SldIq92io9VHfMJA1Vx8jNhGUFHpAVTcEUiG8nxX284ZxmALj3Z%2FyoHUtF3b7tAcV6UU9dfHf5bt2ahVDw%2FPF7bWBk%2BTveeWkGS0r%2FUc18HSI6unDd%2FoADzw74tT88nkPOirCPGt3%2BM3N6DyiN1rhpcaQiO83BdMWjdA9%2Ff2t%2BY3ffJS0Fbpvi6uySMO3c570GOqUBbgnr9yJ6KzZkvuYQPKdO54Xr8IWUfnRDFqyMK9zpBoNglj3EzrqpkFOlqksyzVh55IPHFHqOY0WVTifedE1enD2LAdQ6uTmFCmILumZXte340xwLkU8K0pwOx9IvpQSAHPclVNEChjtA%2BhwkZhfxZ0dytY8KQBZBwGUAdHG%2BFA3l2P9ILTUWuPs9rINDporgfySzDy2CERIG8ryK5d%2BgMjzCeKLB&X-Amz-Signature=d39ae17aeec8f8f45213d50d1eb735eabb9b9eecf92f03d318ccfa9b18b6c7e4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGHPJYQ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCph7Rctej8zmPrPDdaGWXkoGNpZfXplGce87H7lgrKEAIgM8wo8dbsAyAr3Si5OIBs%2FXhXSedcIuNZpZrbt3XW78MqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9bBHjP8w4gma9evSrcA0SKL%2F4BU3shkRjPY7qu0AiNVePUaR1DFprmerYcw2fvsfJM2X%2B3ZVaSijhYf6c7oqf%2FtudZ2KPTWE9wHw0J1gCCKL3%2FvICcOJjyuGu%2Fsgke7hkV5Br48xHJym%2FCRx8pdMzc8hC1tC9303XlhSCqsAqC7ro7vj3Vs5pCPwiKsrBe4I3OnP7D5o%2FYyJXnw9ce7GM39xUTevHz1NAAsCywLeIW29kcfgNCuI%2BIDcB6AQeB61ZGojIO%2BIM%2B5dkJRv%2F7wAwc%2BWPs9nI%2Fh5QJmqAk7p%2FmeSL5WoN2g0cR3YzwB5g32zZIquOqoy55dO2nK%2FiQnxtCnPJBNUmX0tpHMSITCfiljODzhA1JxnXBqYKyY4EUzfW5xkxkt%2FqAui6P%2BYQlYNBiCtDsWnFQ%2B8ABIpmb0uWJ%2FrTDObRzaq0XJzqqqMJPOwwgoHcGojsVAfn04WQM64SldIq92io9VHfMJA1Vx8jNhGUFHpAVTcEUiG8nxX284ZxmALj3Z%2FyoHUtF3b7tAcV6UU9dfHf5bt2ahVDw%2FPF7bWBk%2BTveeWkGS0r%2FUc18HSI6unDd%2FoADzw74tT88nkPOirCPGt3%2BM3N6DyiN1rhpcaQiO83BdMWjdA9%2Ff2t%2BY3ffJS0Fbpvi6uySMO3c570GOqUBbgnr9yJ6KzZkvuYQPKdO54Xr8IWUfnRDFqyMK9zpBoNglj3EzrqpkFOlqksyzVh55IPHFHqOY0WVTifedE1enD2LAdQ6uTmFCmILumZXte340xwLkU8K0pwOx9IvpQSAHPclVNEChjtA%2BhwkZhfxZ0dytY8KQBZBwGUAdHG%2BFA3l2P9ILTUWuPs9rINDporgfySzDy2CERIG8ryK5d%2BgMjzCeKLB&X-Amz-Signature=e3933472e423257ce5d6c6703885fb3017835a2f5bdfc77abfe197f71225fe73&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGHPJYQ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCph7Rctej8zmPrPDdaGWXkoGNpZfXplGce87H7lgrKEAIgM8wo8dbsAyAr3Si5OIBs%2FXhXSedcIuNZpZrbt3XW78MqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9bBHjP8w4gma9evSrcA0SKL%2F4BU3shkRjPY7qu0AiNVePUaR1DFprmerYcw2fvsfJM2X%2B3ZVaSijhYf6c7oqf%2FtudZ2KPTWE9wHw0J1gCCKL3%2FvICcOJjyuGu%2Fsgke7hkV5Br48xHJym%2FCRx8pdMzc8hC1tC9303XlhSCqsAqC7ro7vj3Vs5pCPwiKsrBe4I3OnP7D5o%2FYyJXnw9ce7GM39xUTevHz1NAAsCywLeIW29kcfgNCuI%2BIDcB6AQeB61ZGojIO%2BIM%2B5dkJRv%2F7wAwc%2BWPs9nI%2Fh5QJmqAk7p%2FmeSL5WoN2g0cR3YzwB5g32zZIquOqoy55dO2nK%2FiQnxtCnPJBNUmX0tpHMSITCfiljODzhA1JxnXBqYKyY4EUzfW5xkxkt%2FqAui6P%2BYQlYNBiCtDsWnFQ%2B8ABIpmb0uWJ%2FrTDObRzaq0XJzqqqMJPOwwgoHcGojsVAfn04WQM64SldIq92io9VHfMJA1Vx8jNhGUFHpAVTcEUiG8nxX284ZxmALj3Z%2FyoHUtF3b7tAcV6UU9dfHf5bt2ahVDw%2FPF7bWBk%2BTveeWkGS0r%2FUc18HSI6unDd%2FoADzw74tT88nkPOirCPGt3%2BM3N6DyiN1rhpcaQiO83BdMWjdA9%2Ff2t%2BY3ffJS0Fbpvi6uySMO3c570GOqUBbgnr9yJ6KzZkvuYQPKdO54Xr8IWUfnRDFqyMK9zpBoNglj3EzrqpkFOlqksyzVh55IPHFHqOY0WVTifedE1enD2LAdQ6uTmFCmILumZXte340xwLkU8K0pwOx9IvpQSAHPclVNEChjtA%2BhwkZhfxZ0dytY8KQBZBwGUAdHG%2BFA3l2P9ILTUWuPs9rINDporgfySzDy2CERIG8ryK5d%2BgMjzCeKLB&X-Amz-Signature=c8795d767986421641eed285846cc1f1a63b23f44167c2f701ae021f8f446826&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
