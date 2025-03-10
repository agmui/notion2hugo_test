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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTS6SPLI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGNB%2BRSVZiYCZAcLP6O8dXpA8aGAHJ3kHGVXKUCRQ7n7AiEAkhn9GkyMyVKtBm9Hr6QKHBgXx4LNWDoL91sx9Aiw%2B00qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCmp%2Btjha3Lb5j43ircA418TAYI5%2FPWHQoOj9e5NY%2FXwxfk%2Be%2B6nLsU4xW8ZEg0mamdV7dqgy2nElLtyt0xN7I6EycJ%2F3sG3ZTe%2FdDaJ%2F%2BsNo8YuiJCnH6%2BsFpx5lX0scnaZqzH0s73NH%2FUUT8WtcVXWahtGAGv7j8XxGjrAp2SmcffbN9tkECs0mjhJM3cVAZBmqOJxL5azLw7sxywq2qHZkMVCGR4bi9s8%2BmzgRBp13yHj7p%2BvcbbWxi2kHkXsW3kESuf9TY0CrqSEGJvFHWaKe2vWo1OjrgWqLUq31%2Fh%2FRDZIgyinJWbs67D3F8hk08qC%2F0STw3GSXF%2BHfhBbdGoKTRHRykoJnVpkAqPmW8hX5bVp6%2F9iZ%2BrnKbOZPTnfFlmTZi1B7tuTk9FoQE82Jvq0XhMw8gmGrLIo9pIiXdnLW4GyOm97%2BBwU%2BF9tEOzuIyDLxDKAj66fp%2BJ9Ssa2M6QzGtgPguB0udXpsOHFgaCSegLUceN56R5Uf48OZ9NLHPxevHyQttWmZAOjrAOhVtjISrCcW2TfH0n%2F1QPIRg7ph45fXkGupbUDhSqx00lBAzfMXNj9lMY34gMzCxzgOt4svjHtIrNP5BLavyi%2BM7O3wZwE10KiR6uy8B3yLhIUBKymVlvD%2FFJJDZrMNr6uL4GOqUBoMd6ArUbIayq16XrD52dydB7aWBb65bwUWPlL4UJKrB7Fp3UAHURc8rBgy9DE3rDArMqdzBr8uxfCigBluNSJkOdcDbL7Rp6rlLtlCMtKPN%2FweM0e6M8h8I1O6McU8767FnzGTBjBmCa3bRxgMcddhUVNhdRkvZVmgxKSkQJyjU4Llgj7cug%2B3FmIaMg1K80qqr3YvJt55cq%2BZJrYAWmQ3YzFgZo&X-Amz-Signature=a53d8bf96cf0fe7a485ff6e77f2e7dea4d2f3b3ddcce922af863e891a0bde807&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTS6SPLI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGNB%2BRSVZiYCZAcLP6O8dXpA8aGAHJ3kHGVXKUCRQ7n7AiEAkhn9GkyMyVKtBm9Hr6QKHBgXx4LNWDoL91sx9Aiw%2B00qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCmp%2Btjha3Lb5j43ircA418TAYI5%2FPWHQoOj9e5NY%2FXwxfk%2Be%2B6nLsU4xW8ZEg0mamdV7dqgy2nElLtyt0xN7I6EycJ%2F3sG3ZTe%2FdDaJ%2F%2BsNo8YuiJCnH6%2BsFpx5lX0scnaZqzH0s73NH%2FUUT8WtcVXWahtGAGv7j8XxGjrAp2SmcffbN9tkECs0mjhJM3cVAZBmqOJxL5azLw7sxywq2qHZkMVCGR4bi9s8%2BmzgRBp13yHj7p%2BvcbbWxi2kHkXsW3kESuf9TY0CrqSEGJvFHWaKe2vWo1OjrgWqLUq31%2Fh%2FRDZIgyinJWbs67D3F8hk08qC%2F0STw3GSXF%2BHfhBbdGoKTRHRykoJnVpkAqPmW8hX5bVp6%2F9iZ%2BrnKbOZPTnfFlmTZi1B7tuTk9FoQE82Jvq0XhMw8gmGrLIo9pIiXdnLW4GyOm97%2BBwU%2BF9tEOzuIyDLxDKAj66fp%2BJ9Ssa2M6QzGtgPguB0udXpsOHFgaCSegLUceN56R5Uf48OZ9NLHPxevHyQttWmZAOjrAOhVtjISrCcW2TfH0n%2F1QPIRg7ph45fXkGupbUDhSqx00lBAzfMXNj9lMY34gMzCxzgOt4svjHtIrNP5BLavyi%2BM7O3wZwE10KiR6uy8B3yLhIUBKymVlvD%2FFJJDZrMNr6uL4GOqUBoMd6ArUbIayq16XrD52dydB7aWBb65bwUWPlL4UJKrB7Fp3UAHURc8rBgy9DE3rDArMqdzBr8uxfCigBluNSJkOdcDbL7Rp6rlLtlCMtKPN%2FweM0e6M8h8I1O6McU8767FnzGTBjBmCa3bRxgMcddhUVNhdRkvZVmgxKSkQJyjU4Llgj7cug%2B3FmIaMg1K80qqr3YvJt55cq%2BZJrYAWmQ3YzFgZo&X-Amz-Signature=ea1a55faa4c1b7a9a629a3cdb2e97140d5931e5cdb0d10bb838ae10431736436&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTS6SPLI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGNB%2BRSVZiYCZAcLP6O8dXpA8aGAHJ3kHGVXKUCRQ7n7AiEAkhn9GkyMyVKtBm9Hr6QKHBgXx4LNWDoL91sx9Aiw%2B00qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCmp%2Btjha3Lb5j43ircA418TAYI5%2FPWHQoOj9e5NY%2FXwxfk%2Be%2B6nLsU4xW8ZEg0mamdV7dqgy2nElLtyt0xN7I6EycJ%2F3sG3ZTe%2FdDaJ%2F%2BsNo8YuiJCnH6%2BsFpx5lX0scnaZqzH0s73NH%2FUUT8WtcVXWahtGAGv7j8XxGjrAp2SmcffbN9tkECs0mjhJM3cVAZBmqOJxL5azLw7sxywq2qHZkMVCGR4bi9s8%2BmzgRBp13yHj7p%2BvcbbWxi2kHkXsW3kESuf9TY0CrqSEGJvFHWaKe2vWo1OjrgWqLUq31%2Fh%2FRDZIgyinJWbs67D3F8hk08qC%2F0STw3GSXF%2BHfhBbdGoKTRHRykoJnVpkAqPmW8hX5bVp6%2F9iZ%2BrnKbOZPTnfFlmTZi1B7tuTk9FoQE82Jvq0XhMw8gmGrLIo9pIiXdnLW4GyOm97%2BBwU%2BF9tEOzuIyDLxDKAj66fp%2BJ9Ssa2M6QzGtgPguB0udXpsOHFgaCSegLUceN56R5Uf48OZ9NLHPxevHyQttWmZAOjrAOhVtjISrCcW2TfH0n%2F1QPIRg7ph45fXkGupbUDhSqx00lBAzfMXNj9lMY34gMzCxzgOt4svjHtIrNP5BLavyi%2BM7O3wZwE10KiR6uy8B3yLhIUBKymVlvD%2FFJJDZrMNr6uL4GOqUBoMd6ArUbIayq16XrD52dydB7aWBb65bwUWPlL4UJKrB7Fp3UAHURc8rBgy9DE3rDArMqdzBr8uxfCigBluNSJkOdcDbL7Rp6rlLtlCMtKPN%2FweM0e6M8h8I1O6McU8767FnzGTBjBmCa3bRxgMcddhUVNhdRkvZVmgxKSkQJyjU4Llgj7cug%2B3FmIaMg1K80qqr3YvJt55cq%2BZJrYAWmQ3YzFgZo&X-Amz-Signature=d9aa394b2a7f76b20dedaa0d8e5ec88a6f7614d71c7eefda48d868fa03207735&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTS6SPLI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGNB%2BRSVZiYCZAcLP6O8dXpA8aGAHJ3kHGVXKUCRQ7n7AiEAkhn9GkyMyVKtBm9Hr6QKHBgXx4LNWDoL91sx9Aiw%2B00qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCmp%2Btjha3Lb5j43ircA418TAYI5%2FPWHQoOj9e5NY%2FXwxfk%2Be%2B6nLsU4xW8ZEg0mamdV7dqgy2nElLtyt0xN7I6EycJ%2F3sG3ZTe%2FdDaJ%2F%2BsNo8YuiJCnH6%2BsFpx5lX0scnaZqzH0s73NH%2FUUT8WtcVXWahtGAGv7j8XxGjrAp2SmcffbN9tkECs0mjhJM3cVAZBmqOJxL5azLw7sxywq2qHZkMVCGR4bi9s8%2BmzgRBp13yHj7p%2BvcbbWxi2kHkXsW3kESuf9TY0CrqSEGJvFHWaKe2vWo1OjrgWqLUq31%2Fh%2FRDZIgyinJWbs67D3F8hk08qC%2F0STw3GSXF%2BHfhBbdGoKTRHRykoJnVpkAqPmW8hX5bVp6%2F9iZ%2BrnKbOZPTnfFlmTZi1B7tuTk9FoQE82Jvq0XhMw8gmGrLIo9pIiXdnLW4GyOm97%2BBwU%2BF9tEOzuIyDLxDKAj66fp%2BJ9Ssa2M6QzGtgPguB0udXpsOHFgaCSegLUceN56R5Uf48OZ9NLHPxevHyQttWmZAOjrAOhVtjISrCcW2TfH0n%2F1QPIRg7ph45fXkGupbUDhSqx00lBAzfMXNj9lMY34gMzCxzgOt4svjHtIrNP5BLavyi%2BM7O3wZwE10KiR6uy8B3yLhIUBKymVlvD%2FFJJDZrMNr6uL4GOqUBoMd6ArUbIayq16XrD52dydB7aWBb65bwUWPlL4UJKrB7Fp3UAHURc8rBgy9DE3rDArMqdzBr8uxfCigBluNSJkOdcDbL7Rp6rlLtlCMtKPN%2FweM0e6M8h8I1O6McU8767FnzGTBjBmCa3bRxgMcddhUVNhdRkvZVmgxKSkQJyjU4Llgj7cug%2B3FmIaMg1K80qqr3YvJt55cq%2BZJrYAWmQ3YzFgZo&X-Amz-Signature=d5454c3d71e1b46d515200a964f14a81f27c2eedb5e5d2e30f4a0fe398751f45&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTS6SPLI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGNB%2BRSVZiYCZAcLP6O8dXpA8aGAHJ3kHGVXKUCRQ7n7AiEAkhn9GkyMyVKtBm9Hr6QKHBgXx4LNWDoL91sx9Aiw%2B00qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCmp%2Btjha3Lb5j43ircA418TAYI5%2FPWHQoOj9e5NY%2FXwxfk%2Be%2B6nLsU4xW8ZEg0mamdV7dqgy2nElLtyt0xN7I6EycJ%2F3sG3ZTe%2FdDaJ%2F%2BsNo8YuiJCnH6%2BsFpx5lX0scnaZqzH0s73NH%2FUUT8WtcVXWahtGAGv7j8XxGjrAp2SmcffbN9tkECs0mjhJM3cVAZBmqOJxL5azLw7sxywq2qHZkMVCGR4bi9s8%2BmzgRBp13yHj7p%2BvcbbWxi2kHkXsW3kESuf9TY0CrqSEGJvFHWaKe2vWo1OjrgWqLUq31%2Fh%2FRDZIgyinJWbs67D3F8hk08qC%2F0STw3GSXF%2BHfhBbdGoKTRHRykoJnVpkAqPmW8hX5bVp6%2F9iZ%2BrnKbOZPTnfFlmTZi1B7tuTk9FoQE82Jvq0XhMw8gmGrLIo9pIiXdnLW4GyOm97%2BBwU%2BF9tEOzuIyDLxDKAj66fp%2BJ9Ssa2M6QzGtgPguB0udXpsOHFgaCSegLUceN56R5Uf48OZ9NLHPxevHyQttWmZAOjrAOhVtjISrCcW2TfH0n%2F1QPIRg7ph45fXkGupbUDhSqx00lBAzfMXNj9lMY34gMzCxzgOt4svjHtIrNP5BLavyi%2BM7O3wZwE10KiR6uy8B3yLhIUBKymVlvD%2FFJJDZrMNr6uL4GOqUBoMd6ArUbIayq16XrD52dydB7aWBb65bwUWPlL4UJKrB7Fp3UAHURc8rBgy9DE3rDArMqdzBr8uxfCigBluNSJkOdcDbL7Rp6rlLtlCMtKPN%2FweM0e6M8h8I1O6McU8767FnzGTBjBmCa3bRxgMcddhUVNhdRkvZVmgxKSkQJyjU4Llgj7cug%2B3FmIaMg1K80qqr3YvJt55cq%2BZJrYAWmQ3YzFgZo&X-Amz-Signature=d5dd1225f75b757d21f25f7635d32e04d0a7677e27001f9724932ac3402d4a24&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTS6SPLI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGNB%2BRSVZiYCZAcLP6O8dXpA8aGAHJ3kHGVXKUCRQ7n7AiEAkhn9GkyMyVKtBm9Hr6QKHBgXx4LNWDoL91sx9Aiw%2B00qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCmp%2Btjha3Lb5j43ircA418TAYI5%2FPWHQoOj9e5NY%2FXwxfk%2Be%2B6nLsU4xW8ZEg0mamdV7dqgy2nElLtyt0xN7I6EycJ%2F3sG3ZTe%2FdDaJ%2F%2BsNo8YuiJCnH6%2BsFpx5lX0scnaZqzH0s73NH%2FUUT8WtcVXWahtGAGv7j8XxGjrAp2SmcffbN9tkECs0mjhJM3cVAZBmqOJxL5azLw7sxywq2qHZkMVCGR4bi9s8%2BmzgRBp13yHj7p%2BvcbbWxi2kHkXsW3kESuf9TY0CrqSEGJvFHWaKe2vWo1OjrgWqLUq31%2Fh%2FRDZIgyinJWbs67D3F8hk08qC%2F0STw3GSXF%2BHfhBbdGoKTRHRykoJnVpkAqPmW8hX5bVp6%2F9iZ%2BrnKbOZPTnfFlmTZi1B7tuTk9FoQE82Jvq0XhMw8gmGrLIo9pIiXdnLW4GyOm97%2BBwU%2BF9tEOzuIyDLxDKAj66fp%2BJ9Ssa2M6QzGtgPguB0udXpsOHFgaCSegLUceN56R5Uf48OZ9NLHPxevHyQttWmZAOjrAOhVtjISrCcW2TfH0n%2F1QPIRg7ph45fXkGupbUDhSqx00lBAzfMXNj9lMY34gMzCxzgOt4svjHtIrNP5BLavyi%2BM7O3wZwE10KiR6uy8B3yLhIUBKymVlvD%2FFJJDZrMNr6uL4GOqUBoMd6ArUbIayq16XrD52dydB7aWBb65bwUWPlL4UJKrB7Fp3UAHURc8rBgy9DE3rDArMqdzBr8uxfCigBluNSJkOdcDbL7Rp6rlLtlCMtKPN%2FweM0e6M8h8I1O6McU8767FnzGTBjBmCa3bRxgMcddhUVNhdRkvZVmgxKSkQJyjU4Llgj7cug%2B3FmIaMg1K80qqr3YvJt55cq%2BZJrYAWmQ3YzFgZo&X-Amz-Signature=e6bc77b672b3b6a22b53ac62c4ea4007028f6dc3e9c7c7dd592d18841fccb82c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTS6SPLI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGNB%2BRSVZiYCZAcLP6O8dXpA8aGAHJ3kHGVXKUCRQ7n7AiEAkhn9GkyMyVKtBm9Hr6QKHBgXx4LNWDoL91sx9Aiw%2B00qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCmp%2Btjha3Lb5j43ircA418TAYI5%2FPWHQoOj9e5NY%2FXwxfk%2Be%2B6nLsU4xW8ZEg0mamdV7dqgy2nElLtyt0xN7I6EycJ%2F3sG3ZTe%2FdDaJ%2F%2BsNo8YuiJCnH6%2BsFpx5lX0scnaZqzH0s73NH%2FUUT8WtcVXWahtGAGv7j8XxGjrAp2SmcffbN9tkECs0mjhJM3cVAZBmqOJxL5azLw7sxywq2qHZkMVCGR4bi9s8%2BmzgRBp13yHj7p%2BvcbbWxi2kHkXsW3kESuf9TY0CrqSEGJvFHWaKe2vWo1OjrgWqLUq31%2Fh%2FRDZIgyinJWbs67D3F8hk08qC%2F0STw3GSXF%2BHfhBbdGoKTRHRykoJnVpkAqPmW8hX5bVp6%2F9iZ%2BrnKbOZPTnfFlmTZi1B7tuTk9FoQE82Jvq0XhMw8gmGrLIo9pIiXdnLW4GyOm97%2BBwU%2BF9tEOzuIyDLxDKAj66fp%2BJ9Ssa2M6QzGtgPguB0udXpsOHFgaCSegLUceN56R5Uf48OZ9NLHPxevHyQttWmZAOjrAOhVtjISrCcW2TfH0n%2F1QPIRg7ph45fXkGupbUDhSqx00lBAzfMXNj9lMY34gMzCxzgOt4svjHtIrNP5BLavyi%2BM7O3wZwE10KiR6uy8B3yLhIUBKymVlvD%2FFJJDZrMNr6uL4GOqUBoMd6ArUbIayq16XrD52dydB7aWBb65bwUWPlL4UJKrB7Fp3UAHURc8rBgy9DE3rDArMqdzBr8uxfCigBluNSJkOdcDbL7Rp6rlLtlCMtKPN%2FweM0e6M8h8I1O6McU8767FnzGTBjBmCa3bRxgMcddhUVNhdRkvZVmgxKSkQJyjU4Llgj7cug%2B3FmIaMg1K80qqr3YvJt55cq%2BZJrYAWmQ3YzFgZo&X-Amz-Signature=8e381681561c984923a79f81d586d1cef4a34858fd4451a0c642b95edc98bead&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
