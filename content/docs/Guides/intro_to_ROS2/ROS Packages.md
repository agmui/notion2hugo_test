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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSG2LYGU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQtWSov8wiiS3f4FSCwCN2iVj4tH1WT%2FX%2FMimM1fFk1QIgXdAaXgDeyPYMcgbRA4DTP%2FGfSxgeFnol%2F1eM3CySdg0q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJJy7gxRN%2BCtWTJF7SrcA1Hwr4xLU2hUdLbXQQ4K35nl2EpTIMWB2mFwdB6o7s5DkbgAR8LNHwRHEulJvdeMpCofTo8wFQ9hB6pPNtuoJE2ZJdFK%2BYpHElptoLQHL%2BLpjmVhYms1Z6VgYIYRq951vsmVLwmlXTcJ%2FgKJQ6YZjqrhi5ItrP2g7OeGXbf4RAig2Z6Q4Z1v%2BfEBzdR5lBjchndx7JiTrBE3RvRe8xvOL8gokokDp%2B5p8rk2DKp%2BgdZKSTm2BKmQByyvz3RxXETaY24ejsDwYy%2F%2BiWSK2jcC8m2NawuCJzOZZWn%2FBjeNcCBI5FnDM5qqygYbISKziEoFgo7A4lG2zDFc7zZeOrYLhGmDzNYFcddJ3lZVs1YJ%2F9A7PMAFZVjEm05Aoex66P1akII5f%2BgVngXC1FkTzxpHjkLjYZEiDb%2Bf9d93OY%2FDvskIOTKWyIy0nOaYpw%2BHDYmJIu%2B%2F3x6EY83CWz%2BEvZZx2lKzUm4MVeNLknQ5QRtarh9KEEODUoD7wam%2Fg1w1bkV7o71b33rP2IpCMZXUJX%2BhdGpXbM7jOrUqe7UvKbyiWu6IX9nNcHvzL%2Bz3UP29dFw43JFn6oeui3dxCrvEAZ5sww%2F3dVZtYJczleguvLZYxpSRQyWFLpTv2%2FbeE1YjMNX0qsAGOqUBFSOIDZfblDPo3y8fxDvY4vb8HZVGYk9zAEEZ4ptWRcEeOjDV0nKCOXHsBdEr%2BV%2BWAxQ%2FiqmeaIetDu58YciExnXRwh6XT5HmxUzxtQ0oNlJ0yUQfOEgRCZ8%2BZeh3EZ2KlVERySuQ14lU1hnNm9365g1%2BJkfyG1W356NGlglvikkpuvPte7290XeeIUI4Blx1z3qX3HNpe5TmSvH63SoHWovAeXcI&X-Amz-Signature=7b88ea6905e2147f7426004716d03aca39ceef5e5026e16c8da2c2fed0385b08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSG2LYGU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQtWSov8wiiS3f4FSCwCN2iVj4tH1WT%2FX%2FMimM1fFk1QIgXdAaXgDeyPYMcgbRA4DTP%2FGfSxgeFnol%2F1eM3CySdg0q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJJy7gxRN%2BCtWTJF7SrcA1Hwr4xLU2hUdLbXQQ4K35nl2EpTIMWB2mFwdB6o7s5DkbgAR8LNHwRHEulJvdeMpCofTo8wFQ9hB6pPNtuoJE2ZJdFK%2BYpHElptoLQHL%2BLpjmVhYms1Z6VgYIYRq951vsmVLwmlXTcJ%2FgKJQ6YZjqrhi5ItrP2g7OeGXbf4RAig2Z6Q4Z1v%2BfEBzdR5lBjchndx7JiTrBE3RvRe8xvOL8gokokDp%2B5p8rk2DKp%2BgdZKSTm2BKmQByyvz3RxXETaY24ejsDwYy%2F%2BiWSK2jcC8m2NawuCJzOZZWn%2FBjeNcCBI5FnDM5qqygYbISKziEoFgo7A4lG2zDFc7zZeOrYLhGmDzNYFcddJ3lZVs1YJ%2F9A7PMAFZVjEm05Aoex66P1akII5f%2BgVngXC1FkTzxpHjkLjYZEiDb%2Bf9d93OY%2FDvskIOTKWyIy0nOaYpw%2BHDYmJIu%2B%2F3x6EY83CWz%2BEvZZx2lKzUm4MVeNLknQ5QRtarh9KEEODUoD7wam%2Fg1w1bkV7o71b33rP2IpCMZXUJX%2BhdGpXbM7jOrUqe7UvKbyiWu6IX9nNcHvzL%2Bz3UP29dFw43JFn6oeui3dxCrvEAZ5sww%2F3dVZtYJczleguvLZYxpSRQyWFLpTv2%2FbeE1YjMNX0qsAGOqUBFSOIDZfblDPo3y8fxDvY4vb8HZVGYk9zAEEZ4ptWRcEeOjDV0nKCOXHsBdEr%2BV%2BWAxQ%2FiqmeaIetDu58YciExnXRwh6XT5HmxUzxtQ0oNlJ0yUQfOEgRCZ8%2BZeh3EZ2KlVERySuQ14lU1hnNm9365g1%2BJkfyG1W356NGlglvikkpuvPte7290XeeIUI4Blx1z3qX3HNpe5TmSvH63SoHWovAeXcI&X-Amz-Signature=53582daff2a4bb9ce63ad8630f97609439e9d04179764048d6e5dd9656b9e69e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSG2LYGU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQtWSov8wiiS3f4FSCwCN2iVj4tH1WT%2FX%2FMimM1fFk1QIgXdAaXgDeyPYMcgbRA4DTP%2FGfSxgeFnol%2F1eM3CySdg0q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJJy7gxRN%2BCtWTJF7SrcA1Hwr4xLU2hUdLbXQQ4K35nl2EpTIMWB2mFwdB6o7s5DkbgAR8LNHwRHEulJvdeMpCofTo8wFQ9hB6pPNtuoJE2ZJdFK%2BYpHElptoLQHL%2BLpjmVhYms1Z6VgYIYRq951vsmVLwmlXTcJ%2FgKJQ6YZjqrhi5ItrP2g7OeGXbf4RAig2Z6Q4Z1v%2BfEBzdR5lBjchndx7JiTrBE3RvRe8xvOL8gokokDp%2B5p8rk2DKp%2BgdZKSTm2BKmQByyvz3RxXETaY24ejsDwYy%2F%2BiWSK2jcC8m2NawuCJzOZZWn%2FBjeNcCBI5FnDM5qqygYbISKziEoFgo7A4lG2zDFc7zZeOrYLhGmDzNYFcddJ3lZVs1YJ%2F9A7PMAFZVjEm05Aoex66P1akII5f%2BgVngXC1FkTzxpHjkLjYZEiDb%2Bf9d93OY%2FDvskIOTKWyIy0nOaYpw%2BHDYmJIu%2B%2F3x6EY83CWz%2BEvZZx2lKzUm4MVeNLknQ5QRtarh9KEEODUoD7wam%2Fg1w1bkV7o71b33rP2IpCMZXUJX%2BhdGpXbM7jOrUqe7UvKbyiWu6IX9nNcHvzL%2Bz3UP29dFw43JFn6oeui3dxCrvEAZ5sww%2F3dVZtYJczleguvLZYxpSRQyWFLpTv2%2FbeE1YjMNX0qsAGOqUBFSOIDZfblDPo3y8fxDvY4vb8HZVGYk9zAEEZ4ptWRcEeOjDV0nKCOXHsBdEr%2BV%2BWAxQ%2FiqmeaIetDu58YciExnXRwh6XT5HmxUzxtQ0oNlJ0yUQfOEgRCZ8%2BZeh3EZ2KlVERySuQ14lU1hnNm9365g1%2BJkfyG1W356NGlglvikkpuvPte7290XeeIUI4Blx1z3qX3HNpe5TmSvH63SoHWovAeXcI&X-Amz-Signature=5297f9db7a900864884cf6864688b292fb9532a7b3b8df814000f6928394a4ff&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSG2LYGU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQtWSov8wiiS3f4FSCwCN2iVj4tH1WT%2FX%2FMimM1fFk1QIgXdAaXgDeyPYMcgbRA4DTP%2FGfSxgeFnol%2F1eM3CySdg0q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJJy7gxRN%2BCtWTJF7SrcA1Hwr4xLU2hUdLbXQQ4K35nl2EpTIMWB2mFwdB6o7s5DkbgAR8LNHwRHEulJvdeMpCofTo8wFQ9hB6pPNtuoJE2ZJdFK%2BYpHElptoLQHL%2BLpjmVhYms1Z6VgYIYRq951vsmVLwmlXTcJ%2FgKJQ6YZjqrhi5ItrP2g7OeGXbf4RAig2Z6Q4Z1v%2BfEBzdR5lBjchndx7JiTrBE3RvRe8xvOL8gokokDp%2B5p8rk2DKp%2BgdZKSTm2BKmQByyvz3RxXETaY24ejsDwYy%2F%2BiWSK2jcC8m2NawuCJzOZZWn%2FBjeNcCBI5FnDM5qqygYbISKziEoFgo7A4lG2zDFc7zZeOrYLhGmDzNYFcddJ3lZVs1YJ%2F9A7PMAFZVjEm05Aoex66P1akII5f%2BgVngXC1FkTzxpHjkLjYZEiDb%2Bf9d93OY%2FDvskIOTKWyIy0nOaYpw%2BHDYmJIu%2B%2F3x6EY83CWz%2BEvZZx2lKzUm4MVeNLknQ5QRtarh9KEEODUoD7wam%2Fg1w1bkV7o71b33rP2IpCMZXUJX%2BhdGpXbM7jOrUqe7UvKbyiWu6IX9nNcHvzL%2Bz3UP29dFw43JFn6oeui3dxCrvEAZ5sww%2F3dVZtYJczleguvLZYxpSRQyWFLpTv2%2FbeE1YjMNX0qsAGOqUBFSOIDZfblDPo3y8fxDvY4vb8HZVGYk9zAEEZ4ptWRcEeOjDV0nKCOXHsBdEr%2BV%2BWAxQ%2FiqmeaIetDu58YciExnXRwh6XT5HmxUzxtQ0oNlJ0yUQfOEgRCZ8%2BZeh3EZ2KlVERySuQ14lU1hnNm9365g1%2BJkfyG1W356NGlglvikkpuvPte7290XeeIUI4Blx1z3qX3HNpe5TmSvH63SoHWovAeXcI&X-Amz-Signature=2ced004aa168ca9bd833a68d2ffdc9596b39728364fba30752c021dcad55fb13&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSG2LYGU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQtWSov8wiiS3f4FSCwCN2iVj4tH1WT%2FX%2FMimM1fFk1QIgXdAaXgDeyPYMcgbRA4DTP%2FGfSxgeFnol%2F1eM3CySdg0q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJJy7gxRN%2BCtWTJF7SrcA1Hwr4xLU2hUdLbXQQ4K35nl2EpTIMWB2mFwdB6o7s5DkbgAR8LNHwRHEulJvdeMpCofTo8wFQ9hB6pPNtuoJE2ZJdFK%2BYpHElptoLQHL%2BLpjmVhYms1Z6VgYIYRq951vsmVLwmlXTcJ%2FgKJQ6YZjqrhi5ItrP2g7OeGXbf4RAig2Z6Q4Z1v%2BfEBzdR5lBjchndx7JiTrBE3RvRe8xvOL8gokokDp%2B5p8rk2DKp%2BgdZKSTm2BKmQByyvz3RxXETaY24ejsDwYy%2F%2BiWSK2jcC8m2NawuCJzOZZWn%2FBjeNcCBI5FnDM5qqygYbISKziEoFgo7A4lG2zDFc7zZeOrYLhGmDzNYFcddJ3lZVs1YJ%2F9A7PMAFZVjEm05Aoex66P1akII5f%2BgVngXC1FkTzxpHjkLjYZEiDb%2Bf9d93OY%2FDvskIOTKWyIy0nOaYpw%2BHDYmJIu%2B%2F3x6EY83CWz%2BEvZZx2lKzUm4MVeNLknQ5QRtarh9KEEODUoD7wam%2Fg1w1bkV7o71b33rP2IpCMZXUJX%2BhdGpXbM7jOrUqe7UvKbyiWu6IX9nNcHvzL%2Bz3UP29dFw43JFn6oeui3dxCrvEAZ5sww%2F3dVZtYJczleguvLZYxpSRQyWFLpTv2%2FbeE1YjMNX0qsAGOqUBFSOIDZfblDPo3y8fxDvY4vb8HZVGYk9zAEEZ4ptWRcEeOjDV0nKCOXHsBdEr%2BV%2BWAxQ%2FiqmeaIetDu58YciExnXRwh6XT5HmxUzxtQ0oNlJ0yUQfOEgRCZ8%2BZeh3EZ2KlVERySuQ14lU1hnNm9365g1%2BJkfyG1W356NGlglvikkpuvPte7290XeeIUI4Blx1z3qX3HNpe5TmSvH63SoHWovAeXcI&X-Amz-Signature=9b2e44715e9f10bbaf14db196a9b423d8636adb23a7bddcbad5e1c8f129637ec&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSG2LYGU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQtWSov8wiiS3f4FSCwCN2iVj4tH1WT%2FX%2FMimM1fFk1QIgXdAaXgDeyPYMcgbRA4DTP%2FGfSxgeFnol%2F1eM3CySdg0q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJJy7gxRN%2BCtWTJF7SrcA1Hwr4xLU2hUdLbXQQ4K35nl2EpTIMWB2mFwdB6o7s5DkbgAR8LNHwRHEulJvdeMpCofTo8wFQ9hB6pPNtuoJE2ZJdFK%2BYpHElptoLQHL%2BLpjmVhYms1Z6VgYIYRq951vsmVLwmlXTcJ%2FgKJQ6YZjqrhi5ItrP2g7OeGXbf4RAig2Z6Q4Z1v%2BfEBzdR5lBjchndx7JiTrBE3RvRe8xvOL8gokokDp%2B5p8rk2DKp%2BgdZKSTm2BKmQByyvz3RxXETaY24ejsDwYy%2F%2BiWSK2jcC8m2NawuCJzOZZWn%2FBjeNcCBI5FnDM5qqygYbISKziEoFgo7A4lG2zDFc7zZeOrYLhGmDzNYFcddJ3lZVs1YJ%2F9A7PMAFZVjEm05Aoex66P1akII5f%2BgVngXC1FkTzxpHjkLjYZEiDb%2Bf9d93OY%2FDvskIOTKWyIy0nOaYpw%2BHDYmJIu%2B%2F3x6EY83CWz%2BEvZZx2lKzUm4MVeNLknQ5QRtarh9KEEODUoD7wam%2Fg1w1bkV7o71b33rP2IpCMZXUJX%2BhdGpXbM7jOrUqe7UvKbyiWu6IX9nNcHvzL%2Bz3UP29dFw43JFn6oeui3dxCrvEAZ5sww%2F3dVZtYJczleguvLZYxpSRQyWFLpTv2%2FbeE1YjMNX0qsAGOqUBFSOIDZfblDPo3y8fxDvY4vb8HZVGYk9zAEEZ4ptWRcEeOjDV0nKCOXHsBdEr%2BV%2BWAxQ%2FiqmeaIetDu58YciExnXRwh6XT5HmxUzxtQ0oNlJ0yUQfOEgRCZ8%2BZeh3EZ2KlVERySuQ14lU1hnNm9365g1%2BJkfyG1W356NGlglvikkpuvPte7290XeeIUI4Blx1z3qX3HNpe5TmSvH63SoHWovAeXcI&X-Amz-Signature=76173b5b678bdef5ebf33534aeec25264b669cbdcd8b326575921ad4b0f6f931&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSG2LYGU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQtWSov8wiiS3f4FSCwCN2iVj4tH1WT%2FX%2FMimM1fFk1QIgXdAaXgDeyPYMcgbRA4DTP%2FGfSxgeFnol%2F1eM3CySdg0q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJJy7gxRN%2BCtWTJF7SrcA1Hwr4xLU2hUdLbXQQ4K35nl2EpTIMWB2mFwdB6o7s5DkbgAR8LNHwRHEulJvdeMpCofTo8wFQ9hB6pPNtuoJE2ZJdFK%2BYpHElptoLQHL%2BLpjmVhYms1Z6VgYIYRq951vsmVLwmlXTcJ%2FgKJQ6YZjqrhi5ItrP2g7OeGXbf4RAig2Z6Q4Z1v%2BfEBzdR5lBjchndx7JiTrBE3RvRe8xvOL8gokokDp%2B5p8rk2DKp%2BgdZKSTm2BKmQByyvz3RxXETaY24ejsDwYy%2F%2BiWSK2jcC8m2NawuCJzOZZWn%2FBjeNcCBI5FnDM5qqygYbISKziEoFgo7A4lG2zDFc7zZeOrYLhGmDzNYFcddJ3lZVs1YJ%2F9A7PMAFZVjEm05Aoex66P1akII5f%2BgVngXC1FkTzxpHjkLjYZEiDb%2Bf9d93OY%2FDvskIOTKWyIy0nOaYpw%2BHDYmJIu%2B%2F3x6EY83CWz%2BEvZZx2lKzUm4MVeNLknQ5QRtarh9KEEODUoD7wam%2Fg1w1bkV7o71b33rP2IpCMZXUJX%2BhdGpXbM7jOrUqe7UvKbyiWu6IX9nNcHvzL%2Bz3UP29dFw43JFn6oeui3dxCrvEAZ5sww%2F3dVZtYJczleguvLZYxpSRQyWFLpTv2%2FbeE1YjMNX0qsAGOqUBFSOIDZfblDPo3y8fxDvY4vb8HZVGYk9zAEEZ4ptWRcEeOjDV0nKCOXHsBdEr%2BV%2BWAxQ%2FiqmeaIetDu58YciExnXRwh6XT5HmxUzxtQ0oNlJ0yUQfOEgRCZ8%2BZeh3EZ2KlVERySuQ14lU1hnNm9365g1%2BJkfyG1W356NGlglvikkpuvPte7290XeeIUI4Blx1z3qX3HNpe5TmSvH63SoHWovAeXcI&X-Amz-Signature=344c12ea02838bb30fddbbd88d5fe9bd4a301c1c5534ad3280d804db4419aac2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
