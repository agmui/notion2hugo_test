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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMI2AGU2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIBx%2Bl%2B9Rk01w2pluN24wxUmCTGgZQ5QHBcmmpQWt9w%2BHAiEAu06fiQRyQSfXegvhOUqN3ODJOe0MpC%2BSIhjvkFNQKjIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBG6pG6vHHxv4IBoXSrcA1PJgsYJRNvrBLIgees8Z%2B0vpj0kppwYYEF5F3AvnINSrOIkh%2B4Ghdn6HePxfkdi9xtZ94qEwxMAjpetwHCipaYxnTSxl13j6vQ52SNpRXv4VgbqPceswycT7znMF37dJkAwWRo5ETHaSUEDJDWvqKFvOOISn0RFADMpM58XrexDG%2F%2FBKaIAWUfbYj7BuSRNSwAJJMmMm%2BWpcpScrU8K64jKoouysX2GILW1oyilKkYgAQxNLE7cl7qxja4UU5W2xluN6M%2Bvp4yn2YHzODxhLNzRec06QaNTlkvJgWNWSYonZVxeEisSBjjhkzH6UV%2BUOyAtdG8JL0PZNij%2FXbQOg%2F8b4A%2F%2BB6yDZtciuxkiXouFTd9md7%2Fxmk7J%2BUSEIjMU7c0ZK6%2FkHcbfi4at9Y801El9XzVkAg2%2BXz0x%2B%2BamUEEqQe2Oas4cuAIFxjBvercPEnQoh8NdC8qmOXkH2BIvm9QDxUTjQPd%2BAX9r%2FVt3U4%2BQ2DT0YjL%2B0sLhj%2BX%2FD6XNZ23X1Bn5Y3BvqJ43RVOrJRpiHexyKnnnj4mmjwFI6m1Fmy2pKwSucG4RADpFL%2Bv7zrBviIxgUw697OPxcwRUOxEsqUFesCs%2BTN5bfVFx71xAwvlTJaGZp5qWtExUMLK6i74GOqUBpAIydlrasB%2FhcTF4GLH7%2BXjFta4SYQ0H6wUqbUxCJcNu%2Bcx%2FRHOx%2FB4xzQHSaxaFcxZQjjZeyxdmfMd%2FZULcktNN93VprZKZLxBs05i0GyQ0g1snUNUIvtoPhWWt6gGD6mZXcR42Bp1wpqi%2FPiLbdH8mL%2BYVKf5aAU%2FHQetIpHebW5Xiz8z1LLADk%2BDcq61hQuX82lSxzwdht0f%2BzpymozKmVtw%2F&X-Amz-Signature=88395b383b5218f3a1fb98f8da4a670e62f5f6fa8e819ab3db85aedabe85c479&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMI2AGU2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIBx%2Bl%2B9Rk01w2pluN24wxUmCTGgZQ5QHBcmmpQWt9w%2BHAiEAu06fiQRyQSfXegvhOUqN3ODJOe0MpC%2BSIhjvkFNQKjIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBG6pG6vHHxv4IBoXSrcA1PJgsYJRNvrBLIgees8Z%2B0vpj0kppwYYEF5F3AvnINSrOIkh%2B4Ghdn6HePxfkdi9xtZ94qEwxMAjpetwHCipaYxnTSxl13j6vQ52SNpRXv4VgbqPceswycT7znMF37dJkAwWRo5ETHaSUEDJDWvqKFvOOISn0RFADMpM58XrexDG%2F%2FBKaIAWUfbYj7BuSRNSwAJJMmMm%2BWpcpScrU8K64jKoouysX2GILW1oyilKkYgAQxNLE7cl7qxja4UU5W2xluN6M%2Bvp4yn2YHzODxhLNzRec06QaNTlkvJgWNWSYonZVxeEisSBjjhkzH6UV%2BUOyAtdG8JL0PZNij%2FXbQOg%2F8b4A%2F%2BB6yDZtciuxkiXouFTd9md7%2Fxmk7J%2BUSEIjMU7c0ZK6%2FkHcbfi4at9Y801El9XzVkAg2%2BXz0x%2B%2BamUEEqQe2Oas4cuAIFxjBvercPEnQoh8NdC8qmOXkH2BIvm9QDxUTjQPd%2BAX9r%2FVt3U4%2BQ2DT0YjL%2B0sLhj%2BX%2FD6XNZ23X1Bn5Y3BvqJ43RVOrJRpiHexyKnnnj4mmjwFI6m1Fmy2pKwSucG4RADpFL%2Bv7zrBviIxgUw697OPxcwRUOxEsqUFesCs%2BTN5bfVFx71xAwvlTJaGZp5qWtExUMLK6i74GOqUBpAIydlrasB%2FhcTF4GLH7%2BXjFta4SYQ0H6wUqbUxCJcNu%2Bcx%2FRHOx%2FB4xzQHSaxaFcxZQjjZeyxdmfMd%2FZULcktNN93VprZKZLxBs05i0GyQ0g1snUNUIvtoPhWWt6gGD6mZXcR42Bp1wpqi%2FPiLbdH8mL%2BYVKf5aAU%2FHQetIpHebW5Xiz8z1LLADk%2BDcq61hQuX82lSxzwdht0f%2BzpymozKmVtw%2F&X-Amz-Signature=5aff8659ae45cc92300b9e45cfb9d5e2f89cfbf354505c5b2901d22baba0e833&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMI2AGU2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIBx%2Bl%2B9Rk01w2pluN24wxUmCTGgZQ5QHBcmmpQWt9w%2BHAiEAu06fiQRyQSfXegvhOUqN3ODJOe0MpC%2BSIhjvkFNQKjIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBG6pG6vHHxv4IBoXSrcA1PJgsYJRNvrBLIgees8Z%2B0vpj0kppwYYEF5F3AvnINSrOIkh%2B4Ghdn6HePxfkdi9xtZ94qEwxMAjpetwHCipaYxnTSxl13j6vQ52SNpRXv4VgbqPceswycT7znMF37dJkAwWRo5ETHaSUEDJDWvqKFvOOISn0RFADMpM58XrexDG%2F%2FBKaIAWUfbYj7BuSRNSwAJJMmMm%2BWpcpScrU8K64jKoouysX2GILW1oyilKkYgAQxNLE7cl7qxja4UU5W2xluN6M%2Bvp4yn2YHzODxhLNzRec06QaNTlkvJgWNWSYonZVxeEisSBjjhkzH6UV%2BUOyAtdG8JL0PZNij%2FXbQOg%2F8b4A%2F%2BB6yDZtciuxkiXouFTd9md7%2Fxmk7J%2BUSEIjMU7c0ZK6%2FkHcbfi4at9Y801El9XzVkAg2%2BXz0x%2B%2BamUEEqQe2Oas4cuAIFxjBvercPEnQoh8NdC8qmOXkH2BIvm9QDxUTjQPd%2BAX9r%2FVt3U4%2BQ2DT0YjL%2B0sLhj%2BX%2FD6XNZ23X1Bn5Y3BvqJ43RVOrJRpiHexyKnnnj4mmjwFI6m1Fmy2pKwSucG4RADpFL%2Bv7zrBviIxgUw697OPxcwRUOxEsqUFesCs%2BTN5bfVFx71xAwvlTJaGZp5qWtExUMLK6i74GOqUBpAIydlrasB%2FhcTF4GLH7%2BXjFta4SYQ0H6wUqbUxCJcNu%2Bcx%2FRHOx%2FB4xzQHSaxaFcxZQjjZeyxdmfMd%2FZULcktNN93VprZKZLxBs05i0GyQ0g1snUNUIvtoPhWWt6gGD6mZXcR42Bp1wpqi%2FPiLbdH8mL%2BYVKf5aAU%2FHQetIpHebW5Xiz8z1LLADk%2BDcq61hQuX82lSxzwdht0f%2BzpymozKmVtw%2F&X-Amz-Signature=7df5bd0f2ca8b273b78bfd3b041833310d1b7fafc14d6ce0d5185e7e4cffba7d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMI2AGU2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIBx%2Bl%2B9Rk01w2pluN24wxUmCTGgZQ5QHBcmmpQWt9w%2BHAiEAu06fiQRyQSfXegvhOUqN3ODJOe0MpC%2BSIhjvkFNQKjIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBG6pG6vHHxv4IBoXSrcA1PJgsYJRNvrBLIgees8Z%2B0vpj0kppwYYEF5F3AvnINSrOIkh%2B4Ghdn6HePxfkdi9xtZ94qEwxMAjpetwHCipaYxnTSxl13j6vQ52SNpRXv4VgbqPceswycT7znMF37dJkAwWRo5ETHaSUEDJDWvqKFvOOISn0RFADMpM58XrexDG%2F%2FBKaIAWUfbYj7BuSRNSwAJJMmMm%2BWpcpScrU8K64jKoouysX2GILW1oyilKkYgAQxNLE7cl7qxja4UU5W2xluN6M%2Bvp4yn2YHzODxhLNzRec06QaNTlkvJgWNWSYonZVxeEisSBjjhkzH6UV%2BUOyAtdG8JL0PZNij%2FXbQOg%2F8b4A%2F%2BB6yDZtciuxkiXouFTd9md7%2Fxmk7J%2BUSEIjMU7c0ZK6%2FkHcbfi4at9Y801El9XzVkAg2%2BXz0x%2B%2BamUEEqQe2Oas4cuAIFxjBvercPEnQoh8NdC8qmOXkH2BIvm9QDxUTjQPd%2BAX9r%2FVt3U4%2BQ2DT0YjL%2B0sLhj%2BX%2FD6XNZ23X1Bn5Y3BvqJ43RVOrJRpiHexyKnnnj4mmjwFI6m1Fmy2pKwSucG4RADpFL%2Bv7zrBviIxgUw697OPxcwRUOxEsqUFesCs%2BTN5bfVFx71xAwvlTJaGZp5qWtExUMLK6i74GOqUBpAIydlrasB%2FhcTF4GLH7%2BXjFta4SYQ0H6wUqbUxCJcNu%2Bcx%2FRHOx%2FB4xzQHSaxaFcxZQjjZeyxdmfMd%2FZULcktNN93VprZKZLxBs05i0GyQ0g1snUNUIvtoPhWWt6gGD6mZXcR42Bp1wpqi%2FPiLbdH8mL%2BYVKf5aAU%2FHQetIpHebW5Xiz8z1LLADk%2BDcq61hQuX82lSxzwdht0f%2BzpymozKmVtw%2F&X-Amz-Signature=498c27ee0dec06cab5641113ef6daa7c939f116cbd9a735cba05e5b206da17a7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMI2AGU2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIBx%2Bl%2B9Rk01w2pluN24wxUmCTGgZQ5QHBcmmpQWt9w%2BHAiEAu06fiQRyQSfXegvhOUqN3ODJOe0MpC%2BSIhjvkFNQKjIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBG6pG6vHHxv4IBoXSrcA1PJgsYJRNvrBLIgees8Z%2B0vpj0kppwYYEF5F3AvnINSrOIkh%2B4Ghdn6HePxfkdi9xtZ94qEwxMAjpetwHCipaYxnTSxl13j6vQ52SNpRXv4VgbqPceswycT7znMF37dJkAwWRo5ETHaSUEDJDWvqKFvOOISn0RFADMpM58XrexDG%2F%2FBKaIAWUfbYj7BuSRNSwAJJMmMm%2BWpcpScrU8K64jKoouysX2GILW1oyilKkYgAQxNLE7cl7qxja4UU5W2xluN6M%2Bvp4yn2YHzODxhLNzRec06QaNTlkvJgWNWSYonZVxeEisSBjjhkzH6UV%2BUOyAtdG8JL0PZNij%2FXbQOg%2F8b4A%2F%2BB6yDZtciuxkiXouFTd9md7%2Fxmk7J%2BUSEIjMU7c0ZK6%2FkHcbfi4at9Y801El9XzVkAg2%2BXz0x%2B%2BamUEEqQe2Oas4cuAIFxjBvercPEnQoh8NdC8qmOXkH2BIvm9QDxUTjQPd%2BAX9r%2FVt3U4%2BQ2DT0YjL%2B0sLhj%2BX%2FD6XNZ23X1Bn5Y3BvqJ43RVOrJRpiHexyKnnnj4mmjwFI6m1Fmy2pKwSucG4RADpFL%2Bv7zrBviIxgUw697OPxcwRUOxEsqUFesCs%2BTN5bfVFx71xAwvlTJaGZp5qWtExUMLK6i74GOqUBpAIydlrasB%2FhcTF4GLH7%2BXjFta4SYQ0H6wUqbUxCJcNu%2Bcx%2FRHOx%2FB4xzQHSaxaFcxZQjjZeyxdmfMd%2FZULcktNN93VprZKZLxBs05i0GyQ0g1snUNUIvtoPhWWt6gGD6mZXcR42Bp1wpqi%2FPiLbdH8mL%2BYVKf5aAU%2FHQetIpHebW5Xiz8z1LLADk%2BDcq61hQuX82lSxzwdht0f%2BzpymozKmVtw%2F&X-Amz-Signature=5a5389d2dc1165dd6f08bbbca3061d171b66bb7e1ca37aaab5eb5d07e0ef6fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMI2AGU2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIBx%2Bl%2B9Rk01w2pluN24wxUmCTGgZQ5QHBcmmpQWt9w%2BHAiEAu06fiQRyQSfXegvhOUqN3ODJOe0MpC%2BSIhjvkFNQKjIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBG6pG6vHHxv4IBoXSrcA1PJgsYJRNvrBLIgees8Z%2B0vpj0kppwYYEF5F3AvnINSrOIkh%2B4Ghdn6HePxfkdi9xtZ94qEwxMAjpetwHCipaYxnTSxl13j6vQ52SNpRXv4VgbqPceswycT7znMF37dJkAwWRo5ETHaSUEDJDWvqKFvOOISn0RFADMpM58XrexDG%2F%2FBKaIAWUfbYj7BuSRNSwAJJMmMm%2BWpcpScrU8K64jKoouysX2GILW1oyilKkYgAQxNLE7cl7qxja4UU5W2xluN6M%2Bvp4yn2YHzODxhLNzRec06QaNTlkvJgWNWSYonZVxeEisSBjjhkzH6UV%2BUOyAtdG8JL0PZNij%2FXbQOg%2F8b4A%2F%2BB6yDZtciuxkiXouFTd9md7%2Fxmk7J%2BUSEIjMU7c0ZK6%2FkHcbfi4at9Y801El9XzVkAg2%2BXz0x%2B%2BamUEEqQe2Oas4cuAIFxjBvercPEnQoh8NdC8qmOXkH2BIvm9QDxUTjQPd%2BAX9r%2FVt3U4%2BQ2DT0YjL%2B0sLhj%2BX%2FD6XNZ23X1Bn5Y3BvqJ43RVOrJRpiHexyKnnnj4mmjwFI6m1Fmy2pKwSucG4RADpFL%2Bv7zrBviIxgUw697OPxcwRUOxEsqUFesCs%2BTN5bfVFx71xAwvlTJaGZp5qWtExUMLK6i74GOqUBpAIydlrasB%2FhcTF4GLH7%2BXjFta4SYQ0H6wUqbUxCJcNu%2Bcx%2FRHOx%2FB4xzQHSaxaFcxZQjjZeyxdmfMd%2FZULcktNN93VprZKZLxBs05i0GyQ0g1snUNUIvtoPhWWt6gGD6mZXcR42Bp1wpqi%2FPiLbdH8mL%2BYVKf5aAU%2FHQetIpHebW5Xiz8z1LLADk%2BDcq61hQuX82lSxzwdht0f%2BzpymozKmVtw%2F&X-Amz-Signature=b6f134e17715cfd7d91d817399189e7a8179cd580e457814175252aebec331b7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMI2AGU2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIBx%2Bl%2B9Rk01w2pluN24wxUmCTGgZQ5QHBcmmpQWt9w%2BHAiEAu06fiQRyQSfXegvhOUqN3ODJOe0MpC%2BSIhjvkFNQKjIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBG6pG6vHHxv4IBoXSrcA1PJgsYJRNvrBLIgees8Z%2B0vpj0kppwYYEF5F3AvnINSrOIkh%2B4Ghdn6HePxfkdi9xtZ94qEwxMAjpetwHCipaYxnTSxl13j6vQ52SNpRXv4VgbqPceswycT7znMF37dJkAwWRo5ETHaSUEDJDWvqKFvOOISn0RFADMpM58XrexDG%2F%2FBKaIAWUfbYj7BuSRNSwAJJMmMm%2BWpcpScrU8K64jKoouysX2GILW1oyilKkYgAQxNLE7cl7qxja4UU5W2xluN6M%2Bvp4yn2YHzODxhLNzRec06QaNTlkvJgWNWSYonZVxeEisSBjjhkzH6UV%2BUOyAtdG8JL0PZNij%2FXbQOg%2F8b4A%2F%2BB6yDZtciuxkiXouFTd9md7%2Fxmk7J%2BUSEIjMU7c0ZK6%2FkHcbfi4at9Y801El9XzVkAg2%2BXz0x%2B%2BamUEEqQe2Oas4cuAIFxjBvercPEnQoh8NdC8qmOXkH2BIvm9QDxUTjQPd%2BAX9r%2FVt3U4%2BQ2DT0YjL%2B0sLhj%2BX%2FD6XNZ23X1Bn5Y3BvqJ43RVOrJRpiHexyKnnnj4mmjwFI6m1Fmy2pKwSucG4RADpFL%2Bv7zrBviIxgUw697OPxcwRUOxEsqUFesCs%2BTN5bfVFx71xAwvlTJaGZp5qWtExUMLK6i74GOqUBpAIydlrasB%2FhcTF4GLH7%2BXjFta4SYQ0H6wUqbUxCJcNu%2Bcx%2FRHOx%2FB4xzQHSaxaFcxZQjjZeyxdmfMd%2FZULcktNN93VprZKZLxBs05i0GyQ0g1snUNUIvtoPhWWt6gGD6mZXcR42Bp1wpqi%2FPiLbdH8mL%2BYVKf5aAU%2FHQetIpHebW5Xiz8z1LLADk%2BDcq61hQuX82lSxzwdht0f%2BzpymozKmVtw%2F&X-Amz-Signature=0347fd231d4784f808260f839d26fd8e6c2735c968662517408cd8fe21767260&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
