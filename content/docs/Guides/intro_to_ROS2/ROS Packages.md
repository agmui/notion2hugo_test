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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXGM4WS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDJIRgUpm2qIL3A2mJTciHraqIeCOywVhBw0Y%2BZKgBAnAiEAibNIuLcbHqn5vjNesnK1J8g7TgQu3cuYKP92Fd985IQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FzHog7m%2FRUAy2osircA02aCQDR0NxFftOxak%2BqcAMw1oT41uCNG775oYrsNMkH3%2BGCsPo9SStn%2B0ik5V3TEbif0E2bISoTReaGf%2Bt8tS7TeMAknnrwk00E0PMXaaBC09gPvvvbyIOixiSh9eMNOUY1%2FvAVQuGTPbE5y%2Brwe9xdmOxP%2BGeXiDQAMnh4%2BHv2I72OdoWzrgCJrTR5eW6xS8ItvpodamkhBpIGAW%2Ba%2FYJOZD8ElFjD16mLOyZBo4XcQQeRLl7Kl7WrMGi9RRGPqXqMHtk22GV3VC%2FPdYjE5qw72%2F70CI1WdG7zoq93SskJAyDrYmWri4tBWEC0eEZozzmDDsGSI8Ud6ymP7nKJT32ausnwfoNmsaA5rkrR5UiPXikL1r3AxSKHKVg5bclafpl1%2Byu906kOTAk4rz%2F2jw1peHekKSBFLgRtkhfJVzC52wl0iQSuOEbr4n1kVsgHOrOG74xSmvIFNhv5K1wgr1l8G0LAkXI0pV8zXSq1A7%2FUw4VkblGyPWjqhfNa981OOo6yIvd2n3AYLe2QYDfHXe23sNJQcR2C%2Bk0DzDmRtXQ8we5uIT1ygPdcKRhVLLh1czAyJrvbxrz1BXa2fUgK6d4yaA0cJ6uLT5amB9zx4xHeantFAeSYrea0klx%2BMM%2F588EGOqUB43HhwvczGhcMaZ59bLiUpE6FRj8qa81Fmj7EBALgB6VfjYRtNlZxKsfT0rZWCk5ydsCyT%2Bw5UHRgC1bhbZ6QSmKJSCWfNccZuGEfHatpXAAwN4JuzggBRCwrI17kOMa%2B1Eu%2BuS9pYeB3RcOvbTAOh6ajIVsgOu31ZnjBN%2FH3nLY0K%2F5pcyZ%2BfJ6uVTj9%2Fpww1cRbZM6QYJvxQB82PvX%2FtBvhdbeo&X-Amz-Signature=40b2d193413c5505d1f4b3bef76f88d0ab1c10d6bb45be470cd75a239d9cc964&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXGM4WS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDJIRgUpm2qIL3A2mJTciHraqIeCOywVhBw0Y%2BZKgBAnAiEAibNIuLcbHqn5vjNesnK1J8g7TgQu3cuYKP92Fd985IQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FzHog7m%2FRUAy2osircA02aCQDR0NxFftOxak%2BqcAMw1oT41uCNG775oYrsNMkH3%2BGCsPo9SStn%2B0ik5V3TEbif0E2bISoTReaGf%2Bt8tS7TeMAknnrwk00E0PMXaaBC09gPvvvbyIOixiSh9eMNOUY1%2FvAVQuGTPbE5y%2Brwe9xdmOxP%2BGeXiDQAMnh4%2BHv2I72OdoWzrgCJrTR5eW6xS8ItvpodamkhBpIGAW%2Ba%2FYJOZD8ElFjD16mLOyZBo4XcQQeRLl7Kl7WrMGi9RRGPqXqMHtk22GV3VC%2FPdYjE5qw72%2F70CI1WdG7zoq93SskJAyDrYmWri4tBWEC0eEZozzmDDsGSI8Ud6ymP7nKJT32ausnwfoNmsaA5rkrR5UiPXikL1r3AxSKHKVg5bclafpl1%2Byu906kOTAk4rz%2F2jw1peHekKSBFLgRtkhfJVzC52wl0iQSuOEbr4n1kVsgHOrOG74xSmvIFNhv5K1wgr1l8G0LAkXI0pV8zXSq1A7%2FUw4VkblGyPWjqhfNa981OOo6yIvd2n3AYLe2QYDfHXe23sNJQcR2C%2Bk0DzDmRtXQ8we5uIT1ygPdcKRhVLLh1czAyJrvbxrz1BXa2fUgK6d4yaA0cJ6uLT5amB9zx4xHeantFAeSYrea0klx%2BMM%2F588EGOqUB43HhwvczGhcMaZ59bLiUpE6FRj8qa81Fmj7EBALgB6VfjYRtNlZxKsfT0rZWCk5ydsCyT%2Bw5UHRgC1bhbZ6QSmKJSCWfNccZuGEfHatpXAAwN4JuzggBRCwrI17kOMa%2B1Eu%2BuS9pYeB3RcOvbTAOh6ajIVsgOu31ZnjBN%2FH3nLY0K%2F5pcyZ%2BfJ6uVTj9%2Fpww1cRbZM6QYJvxQB82PvX%2FtBvhdbeo&X-Amz-Signature=8085c6cd097fc8e437d4890d3fe3ebebb9f27cd8fbc1087e2f22962d9a731db1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXGM4WS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDJIRgUpm2qIL3A2mJTciHraqIeCOywVhBw0Y%2BZKgBAnAiEAibNIuLcbHqn5vjNesnK1J8g7TgQu3cuYKP92Fd985IQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FzHog7m%2FRUAy2osircA02aCQDR0NxFftOxak%2BqcAMw1oT41uCNG775oYrsNMkH3%2BGCsPo9SStn%2B0ik5V3TEbif0E2bISoTReaGf%2Bt8tS7TeMAknnrwk00E0PMXaaBC09gPvvvbyIOixiSh9eMNOUY1%2FvAVQuGTPbE5y%2Brwe9xdmOxP%2BGeXiDQAMnh4%2BHv2I72OdoWzrgCJrTR5eW6xS8ItvpodamkhBpIGAW%2Ba%2FYJOZD8ElFjD16mLOyZBo4XcQQeRLl7Kl7WrMGi9RRGPqXqMHtk22GV3VC%2FPdYjE5qw72%2F70CI1WdG7zoq93SskJAyDrYmWri4tBWEC0eEZozzmDDsGSI8Ud6ymP7nKJT32ausnwfoNmsaA5rkrR5UiPXikL1r3AxSKHKVg5bclafpl1%2Byu906kOTAk4rz%2F2jw1peHekKSBFLgRtkhfJVzC52wl0iQSuOEbr4n1kVsgHOrOG74xSmvIFNhv5K1wgr1l8G0LAkXI0pV8zXSq1A7%2FUw4VkblGyPWjqhfNa981OOo6yIvd2n3AYLe2QYDfHXe23sNJQcR2C%2Bk0DzDmRtXQ8we5uIT1ygPdcKRhVLLh1czAyJrvbxrz1BXa2fUgK6d4yaA0cJ6uLT5amB9zx4xHeantFAeSYrea0klx%2BMM%2F588EGOqUB43HhwvczGhcMaZ59bLiUpE6FRj8qa81Fmj7EBALgB6VfjYRtNlZxKsfT0rZWCk5ydsCyT%2Bw5UHRgC1bhbZ6QSmKJSCWfNccZuGEfHatpXAAwN4JuzggBRCwrI17kOMa%2B1Eu%2BuS9pYeB3RcOvbTAOh6ajIVsgOu31ZnjBN%2FH3nLY0K%2F5pcyZ%2BfJ6uVTj9%2Fpww1cRbZM6QYJvxQB82PvX%2FtBvhdbeo&X-Amz-Signature=bcba243aa505a9b4fc9074f1bc1a5a37f86a1867306212f800e88bf479dcaae0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXGM4WS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDJIRgUpm2qIL3A2mJTciHraqIeCOywVhBw0Y%2BZKgBAnAiEAibNIuLcbHqn5vjNesnK1J8g7TgQu3cuYKP92Fd985IQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FzHog7m%2FRUAy2osircA02aCQDR0NxFftOxak%2BqcAMw1oT41uCNG775oYrsNMkH3%2BGCsPo9SStn%2B0ik5V3TEbif0E2bISoTReaGf%2Bt8tS7TeMAknnrwk00E0PMXaaBC09gPvvvbyIOixiSh9eMNOUY1%2FvAVQuGTPbE5y%2Brwe9xdmOxP%2BGeXiDQAMnh4%2BHv2I72OdoWzrgCJrTR5eW6xS8ItvpodamkhBpIGAW%2Ba%2FYJOZD8ElFjD16mLOyZBo4XcQQeRLl7Kl7WrMGi9RRGPqXqMHtk22GV3VC%2FPdYjE5qw72%2F70CI1WdG7zoq93SskJAyDrYmWri4tBWEC0eEZozzmDDsGSI8Ud6ymP7nKJT32ausnwfoNmsaA5rkrR5UiPXikL1r3AxSKHKVg5bclafpl1%2Byu906kOTAk4rz%2F2jw1peHekKSBFLgRtkhfJVzC52wl0iQSuOEbr4n1kVsgHOrOG74xSmvIFNhv5K1wgr1l8G0LAkXI0pV8zXSq1A7%2FUw4VkblGyPWjqhfNa981OOo6yIvd2n3AYLe2QYDfHXe23sNJQcR2C%2Bk0DzDmRtXQ8we5uIT1ygPdcKRhVLLh1czAyJrvbxrz1BXa2fUgK6d4yaA0cJ6uLT5amB9zx4xHeantFAeSYrea0klx%2BMM%2F588EGOqUB43HhwvczGhcMaZ59bLiUpE6FRj8qa81Fmj7EBALgB6VfjYRtNlZxKsfT0rZWCk5ydsCyT%2Bw5UHRgC1bhbZ6QSmKJSCWfNccZuGEfHatpXAAwN4JuzggBRCwrI17kOMa%2B1Eu%2BuS9pYeB3RcOvbTAOh6ajIVsgOu31ZnjBN%2FH3nLY0K%2F5pcyZ%2BfJ6uVTj9%2Fpww1cRbZM6QYJvxQB82PvX%2FtBvhdbeo&X-Amz-Signature=369baee33394a5036f96b79172ff371244aebe41d2790ea53f92029833889105&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXGM4WS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDJIRgUpm2qIL3A2mJTciHraqIeCOywVhBw0Y%2BZKgBAnAiEAibNIuLcbHqn5vjNesnK1J8g7TgQu3cuYKP92Fd985IQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FzHog7m%2FRUAy2osircA02aCQDR0NxFftOxak%2BqcAMw1oT41uCNG775oYrsNMkH3%2BGCsPo9SStn%2B0ik5V3TEbif0E2bISoTReaGf%2Bt8tS7TeMAknnrwk00E0PMXaaBC09gPvvvbyIOixiSh9eMNOUY1%2FvAVQuGTPbE5y%2Brwe9xdmOxP%2BGeXiDQAMnh4%2BHv2I72OdoWzrgCJrTR5eW6xS8ItvpodamkhBpIGAW%2Ba%2FYJOZD8ElFjD16mLOyZBo4XcQQeRLl7Kl7WrMGi9RRGPqXqMHtk22GV3VC%2FPdYjE5qw72%2F70CI1WdG7zoq93SskJAyDrYmWri4tBWEC0eEZozzmDDsGSI8Ud6ymP7nKJT32ausnwfoNmsaA5rkrR5UiPXikL1r3AxSKHKVg5bclafpl1%2Byu906kOTAk4rz%2F2jw1peHekKSBFLgRtkhfJVzC52wl0iQSuOEbr4n1kVsgHOrOG74xSmvIFNhv5K1wgr1l8G0LAkXI0pV8zXSq1A7%2FUw4VkblGyPWjqhfNa981OOo6yIvd2n3AYLe2QYDfHXe23sNJQcR2C%2Bk0DzDmRtXQ8we5uIT1ygPdcKRhVLLh1czAyJrvbxrz1BXa2fUgK6d4yaA0cJ6uLT5amB9zx4xHeantFAeSYrea0klx%2BMM%2F588EGOqUB43HhwvczGhcMaZ59bLiUpE6FRj8qa81Fmj7EBALgB6VfjYRtNlZxKsfT0rZWCk5ydsCyT%2Bw5UHRgC1bhbZ6QSmKJSCWfNccZuGEfHatpXAAwN4JuzggBRCwrI17kOMa%2B1Eu%2BuS9pYeB3RcOvbTAOh6ajIVsgOu31ZnjBN%2FH3nLY0K%2F5pcyZ%2BfJ6uVTj9%2Fpww1cRbZM6QYJvxQB82PvX%2FtBvhdbeo&X-Amz-Signature=88889d8b9f16552613fdae60204f560ad35df02bfb390a7248083fef80da50cf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXGM4WS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDJIRgUpm2qIL3A2mJTciHraqIeCOywVhBw0Y%2BZKgBAnAiEAibNIuLcbHqn5vjNesnK1J8g7TgQu3cuYKP92Fd985IQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FzHog7m%2FRUAy2osircA02aCQDR0NxFftOxak%2BqcAMw1oT41uCNG775oYrsNMkH3%2BGCsPo9SStn%2B0ik5V3TEbif0E2bISoTReaGf%2Bt8tS7TeMAknnrwk00E0PMXaaBC09gPvvvbyIOixiSh9eMNOUY1%2FvAVQuGTPbE5y%2Brwe9xdmOxP%2BGeXiDQAMnh4%2BHv2I72OdoWzrgCJrTR5eW6xS8ItvpodamkhBpIGAW%2Ba%2FYJOZD8ElFjD16mLOyZBo4XcQQeRLl7Kl7WrMGi9RRGPqXqMHtk22GV3VC%2FPdYjE5qw72%2F70CI1WdG7zoq93SskJAyDrYmWri4tBWEC0eEZozzmDDsGSI8Ud6ymP7nKJT32ausnwfoNmsaA5rkrR5UiPXikL1r3AxSKHKVg5bclafpl1%2Byu906kOTAk4rz%2F2jw1peHekKSBFLgRtkhfJVzC52wl0iQSuOEbr4n1kVsgHOrOG74xSmvIFNhv5K1wgr1l8G0LAkXI0pV8zXSq1A7%2FUw4VkblGyPWjqhfNa981OOo6yIvd2n3AYLe2QYDfHXe23sNJQcR2C%2Bk0DzDmRtXQ8we5uIT1ygPdcKRhVLLh1czAyJrvbxrz1BXa2fUgK6d4yaA0cJ6uLT5amB9zx4xHeantFAeSYrea0klx%2BMM%2F588EGOqUB43HhwvczGhcMaZ59bLiUpE6FRj8qa81Fmj7EBALgB6VfjYRtNlZxKsfT0rZWCk5ydsCyT%2Bw5UHRgC1bhbZ6QSmKJSCWfNccZuGEfHatpXAAwN4JuzggBRCwrI17kOMa%2B1Eu%2BuS9pYeB3RcOvbTAOh6ajIVsgOu31ZnjBN%2FH3nLY0K%2F5pcyZ%2BfJ6uVTj9%2Fpww1cRbZM6QYJvxQB82PvX%2FtBvhdbeo&X-Amz-Signature=4480f44b088da169c04f6bf2e48c4dee11613ead46185b566e70c73105446761&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXGM4WS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDJIRgUpm2qIL3A2mJTciHraqIeCOywVhBw0Y%2BZKgBAnAiEAibNIuLcbHqn5vjNesnK1J8g7TgQu3cuYKP92Fd985IQqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FzHog7m%2FRUAy2osircA02aCQDR0NxFftOxak%2BqcAMw1oT41uCNG775oYrsNMkH3%2BGCsPo9SStn%2B0ik5V3TEbif0E2bISoTReaGf%2Bt8tS7TeMAknnrwk00E0PMXaaBC09gPvvvbyIOixiSh9eMNOUY1%2FvAVQuGTPbE5y%2Brwe9xdmOxP%2BGeXiDQAMnh4%2BHv2I72OdoWzrgCJrTR5eW6xS8ItvpodamkhBpIGAW%2Ba%2FYJOZD8ElFjD16mLOyZBo4XcQQeRLl7Kl7WrMGi9RRGPqXqMHtk22GV3VC%2FPdYjE5qw72%2F70CI1WdG7zoq93SskJAyDrYmWri4tBWEC0eEZozzmDDsGSI8Ud6ymP7nKJT32ausnwfoNmsaA5rkrR5UiPXikL1r3AxSKHKVg5bclafpl1%2Byu906kOTAk4rz%2F2jw1peHekKSBFLgRtkhfJVzC52wl0iQSuOEbr4n1kVsgHOrOG74xSmvIFNhv5K1wgr1l8G0LAkXI0pV8zXSq1A7%2FUw4VkblGyPWjqhfNa981OOo6yIvd2n3AYLe2QYDfHXe23sNJQcR2C%2Bk0DzDmRtXQ8we5uIT1ygPdcKRhVLLh1czAyJrvbxrz1BXa2fUgK6d4yaA0cJ6uLT5amB9zx4xHeantFAeSYrea0klx%2BMM%2F588EGOqUB43HhwvczGhcMaZ59bLiUpE6FRj8qa81Fmj7EBALgB6VfjYRtNlZxKsfT0rZWCk5ydsCyT%2Bw5UHRgC1bhbZ6QSmKJSCWfNccZuGEfHatpXAAwN4JuzggBRCwrI17kOMa%2B1Eu%2BuS9pYeB3RcOvbTAOh6ajIVsgOu31ZnjBN%2FH3nLY0K%2F5pcyZ%2BfJ6uVTj9%2Fpww1cRbZM6QYJvxQB82PvX%2FtBvhdbeo&X-Amz-Signature=36e630d9c968a534d2f062979b775c71331d371a7e68fe11bbd190b567bd08ef&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
