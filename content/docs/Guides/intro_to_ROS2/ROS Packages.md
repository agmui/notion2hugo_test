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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WPP67FN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIDdOTNfmUl9is%2BfFF9Z3Xi0iW9Egr7rZj11IUtr%2FbwAiB2XPdUxXqZRnj3U9B8rwc3fJGy3PZ326kh%2FsNC5%2F2%2BkCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHnaaTZaL1DnxlkGKtwDK7xabdogMKYDkNqOp4gf1reqDq7%2FvaShW4hRbJ100LlrgfztHpf87fTnsVzTzZaiapjXetE1NjUcgHMZcnYDzcqKoHAtOI2vBjXEc9CZEjyb59ERfgJzxmGcH%2BMlQOq3RHxVc9%2F2ak4CfYcreB7m4BXc4ClXiugB%2FtOsbD4zAmxfgPvNuD61ltuPWrB7t0U6bn3yMrt2sWcw%2F6m%2F4ZMCmMgu3TFHs0lJ5w3ZqiU5mf3xVnpVUytanfuClkYlc2rHU6qitl72N4Xg%2F%2Ff9fmeQN3AGSb6p0LiHxqyVqGRwbzsk6dRM7JFFwXgnmLv3Viqet4xVeIJTk%2BcKoAzG%2BP1sx9w%2BpW3rvX%2FG%2BOm1VZZXFpSGZ41Q%2FQPbMNgCYjm5NB8LTkyEEdZ6RgG0fFmHDLIryLw7aLr8EaShaMdvFeUIS78UXlagSSfU3jAhZ%2BVXhl%2FgnxVcvT2MvPfc9q0RNNL9INE8V7F7BTR2teH5Z3DeTeZR%2FC4z%2BKwlEQy1NbW7SCx59J%2BhWGLuOS1YY8lkosAMY6T%2F7M50Sjn74VUXkuRtkS8ocfhHLlGBFSo03Dvggk3yk2qBcasAVUdMc6zJFxLfoFLiFFjE5WNSGGKoFoR1ykRC3%2F91OYhCb1YRc9swjt7vwwY6pgHx%2FKDNj55VbOS085rxpyCkm8FPvVX8JhbkfQm%2BDCKi1iLJNx2B8co4NPfAw8Bs63auObTeCFXQCg4Qz3ItRmJKf7UuOD5gW4lvLOJ7r9cQnnXhOAHWdsN56o07EN36zs%2BTpu767L5xFeAVJ0dRlFGaPs8ltaS%2FbTBygDtUEpK3FaNNhB9gdQxj2ws4YofTor2smIl8cwi87iWh%2FHedWC1YJbSJQ2jh&X-Amz-Signature=caa818506b729798ee257312e06c52115e1150fb013dd0d30477d05fd90dbcc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WPP67FN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIDdOTNfmUl9is%2BfFF9Z3Xi0iW9Egr7rZj11IUtr%2FbwAiB2XPdUxXqZRnj3U9B8rwc3fJGy3PZ326kh%2FsNC5%2F2%2BkCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHnaaTZaL1DnxlkGKtwDK7xabdogMKYDkNqOp4gf1reqDq7%2FvaShW4hRbJ100LlrgfztHpf87fTnsVzTzZaiapjXetE1NjUcgHMZcnYDzcqKoHAtOI2vBjXEc9CZEjyb59ERfgJzxmGcH%2BMlQOq3RHxVc9%2F2ak4CfYcreB7m4BXc4ClXiugB%2FtOsbD4zAmxfgPvNuD61ltuPWrB7t0U6bn3yMrt2sWcw%2F6m%2F4ZMCmMgu3TFHs0lJ5w3ZqiU5mf3xVnpVUytanfuClkYlc2rHU6qitl72N4Xg%2F%2Ff9fmeQN3AGSb6p0LiHxqyVqGRwbzsk6dRM7JFFwXgnmLv3Viqet4xVeIJTk%2BcKoAzG%2BP1sx9w%2BpW3rvX%2FG%2BOm1VZZXFpSGZ41Q%2FQPbMNgCYjm5NB8LTkyEEdZ6RgG0fFmHDLIryLw7aLr8EaShaMdvFeUIS78UXlagSSfU3jAhZ%2BVXhl%2FgnxVcvT2MvPfc9q0RNNL9INE8V7F7BTR2teH5Z3DeTeZR%2FC4z%2BKwlEQy1NbW7SCx59J%2BhWGLuOS1YY8lkosAMY6T%2F7M50Sjn74VUXkuRtkS8ocfhHLlGBFSo03Dvggk3yk2qBcasAVUdMc6zJFxLfoFLiFFjE5WNSGGKoFoR1ykRC3%2F91OYhCb1YRc9swjt7vwwY6pgHx%2FKDNj55VbOS085rxpyCkm8FPvVX8JhbkfQm%2BDCKi1iLJNx2B8co4NPfAw8Bs63auObTeCFXQCg4Qz3ItRmJKf7UuOD5gW4lvLOJ7r9cQnnXhOAHWdsN56o07EN36zs%2BTpu767L5xFeAVJ0dRlFGaPs8ltaS%2FbTBygDtUEpK3FaNNhB9gdQxj2ws4YofTor2smIl8cwi87iWh%2FHedWC1YJbSJQ2jh&X-Amz-Signature=b9f18c45fd661c4086a305315d816a1d0a55ce480a956cc76fb3ca57555f3ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WPP67FN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIDdOTNfmUl9is%2BfFF9Z3Xi0iW9Egr7rZj11IUtr%2FbwAiB2XPdUxXqZRnj3U9B8rwc3fJGy3PZ326kh%2FsNC5%2F2%2BkCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHnaaTZaL1DnxlkGKtwDK7xabdogMKYDkNqOp4gf1reqDq7%2FvaShW4hRbJ100LlrgfztHpf87fTnsVzTzZaiapjXetE1NjUcgHMZcnYDzcqKoHAtOI2vBjXEc9CZEjyb59ERfgJzxmGcH%2BMlQOq3RHxVc9%2F2ak4CfYcreB7m4BXc4ClXiugB%2FtOsbD4zAmxfgPvNuD61ltuPWrB7t0U6bn3yMrt2sWcw%2F6m%2F4ZMCmMgu3TFHs0lJ5w3ZqiU5mf3xVnpVUytanfuClkYlc2rHU6qitl72N4Xg%2F%2Ff9fmeQN3AGSb6p0LiHxqyVqGRwbzsk6dRM7JFFwXgnmLv3Viqet4xVeIJTk%2BcKoAzG%2BP1sx9w%2BpW3rvX%2FG%2BOm1VZZXFpSGZ41Q%2FQPbMNgCYjm5NB8LTkyEEdZ6RgG0fFmHDLIryLw7aLr8EaShaMdvFeUIS78UXlagSSfU3jAhZ%2BVXhl%2FgnxVcvT2MvPfc9q0RNNL9INE8V7F7BTR2teH5Z3DeTeZR%2FC4z%2BKwlEQy1NbW7SCx59J%2BhWGLuOS1YY8lkosAMY6T%2F7M50Sjn74VUXkuRtkS8ocfhHLlGBFSo03Dvggk3yk2qBcasAVUdMc6zJFxLfoFLiFFjE5WNSGGKoFoR1ykRC3%2F91OYhCb1YRc9swjt7vwwY6pgHx%2FKDNj55VbOS085rxpyCkm8FPvVX8JhbkfQm%2BDCKi1iLJNx2B8co4NPfAw8Bs63auObTeCFXQCg4Qz3ItRmJKf7UuOD5gW4lvLOJ7r9cQnnXhOAHWdsN56o07EN36zs%2BTpu767L5xFeAVJ0dRlFGaPs8ltaS%2FbTBygDtUEpK3FaNNhB9gdQxj2ws4YofTor2smIl8cwi87iWh%2FHedWC1YJbSJQ2jh&X-Amz-Signature=15442fc88a09371a6b9a72c7544e73ab23f15f4e403c977c98c7f3b921060ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WPP67FN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIDdOTNfmUl9is%2BfFF9Z3Xi0iW9Egr7rZj11IUtr%2FbwAiB2XPdUxXqZRnj3U9B8rwc3fJGy3PZ326kh%2FsNC5%2F2%2BkCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHnaaTZaL1DnxlkGKtwDK7xabdogMKYDkNqOp4gf1reqDq7%2FvaShW4hRbJ100LlrgfztHpf87fTnsVzTzZaiapjXetE1NjUcgHMZcnYDzcqKoHAtOI2vBjXEc9CZEjyb59ERfgJzxmGcH%2BMlQOq3RHxVc9%2F2ak4CfYcreB7m4BXc4ClXiugB%2FtOsbD4zAmxfgPvNuD61ltuPWrB7t0U6bn3yMrt2sWcw%2F6m%2F4ZMCmMgu3TFHs0lJ5w3ZqiU5mf3xVnpVUytanfuClkYlc2rHU6qitl72N4Xg%2F%2Ff9fmeQN3AGSb6p0LiHxqyVqGRwbzsk6dRM7JFFwXgnmLv3Viqet4xVeIJTk%2BcKoAzG%2BP1sx9w%2BpW3rvX%2FG%2BOm1VZZXFpSGZ41Q%2FQPbMNgCYjm5NB8LTkyEEdZ6RgG0fFmHDLIryLw7aLr8EaShaMdvFeUIS78UXlagSSfU3jAhZ%2BVXhl%2FgnxVcvT2MvPfc9q0RNNL9INE8V7F7BTR2teH5Z3DeTeZR%2FC4z%2BKwlEQy1NbW7SCx59J%2BhWGLuOS1YY8lkosAMY6T%2F7M50Sjn74VUXkuRtkS8ocfhHLlGBFSo03Dvggk3yk2qBcasAVUdMc6zJFxLfoFLiFFjE5WNSGGKoFoR1ykRC3%2F91OYhCb1YRc9swjt7vwwY6pgHx%2FKDNj55VbOS085rxpyCkm8FPvVX8JhbkfQm%2BDCKi1iLJNx2B8co4NPfAw8Bs63auObTeCFXQCg4Qz3ItRmJKf7UuOD5gW4lvLOJ7r9cQnnXhOAHWdsN56o07EN36zs%2BTpu767L5xFeAVJ0dRlFGaPs8ltaS%2FbTBygDtUEpK3FaNNhB9gdQxj2ws4YofTor2smIl8cwi87iWh%2FHedWC1YJbSJQ2jh&X-Amz-Signature=38b50ffaa4e99641344eb0857a09a6b1325b7fa67eeacb2651ebcdedf120c80f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WPP67FN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIDdOTNfmUl9is%2BfFF9Z3Xi0iW9Egr7rZj11IUtr%2FbwAiB2XPdUxXqZRnj3U9B8rwc3fJGy3PZ326kh%2FsNC5%2F2%2BkCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHnaaTZaL1DnxlkGKtwDK7xabdogMKYDkNqOp4gf1reqDq7%2FvaShW4hRbJ100LlrgfztHpf87fTnsVzTzZaiapjXetE1NjUcgHMZcnYDzcqKoHAtOI2vBjXEc9CZEjyb59ERfgJzxmGcH%2BMlQOq3RHxVc9%2F2ak4CfYcreB7m4BXc4ClXiugB%2FtOsbD4zAmxfgPvNuD61ltuPWrB7t0U6bn3yMrt2sWcw%2F6m%2F4ZMCmMgu3TFHs0lJ5w3ZqiU5mf3xVnpVUytanfuClkYlc2rHU6qitl72N4Xg%2F%2Ff9fmeQN3AGSb6p0LiHxqyVqGRwbzsk6dRM7JFFwXgnmLv3Viqet4xVeIJTk%2BcKoAzG%2BP1sx9w%2BpW3rvX%2FG%2BOm1VZZXFpSGZ41Q%2FQPbMNgCYjm5NB8LTkyEEdZ6RgG0fFmHDLIryLw7aLr8EaShaMdvFeUIS78UXlagSSfU3jAhZ%2BVXhl%2FgnxVcvT2MvPfc9q0RNNL9INE8V7F7BTR2teH5Z3DeTeZR%2FC4z%2BKwlEQy1NbW7SCx59J%2BhWGLuOS1YY8lkosAMY6T%2F7M50Sjn74VUXkuRtkS8ocfhHLlGBFSo03Dvggk3yk2qBcasAVUdMc6zJFxLfoFLiFFjE5WNSGGKoFoR1ykRC3%2F91OYhCb1YRc9swjt7vwwY6pgHx%2FKDNj55VbOS085rxpyCkm8FPvVX8JhbkfQm%2BDCKi1iLJNx2B8co4NPfAw8Bs63auObTeCFXQCg4Qz3ItRmJKf7UuOD5gW4lvLOJ7r9cQnnXhOAHWdsN56o07EN36zs%2BTpu767L5xFeAVJ0dRlFGaPs8ltaS%2FbTBygDtUEpK3FaNNhB9gdQxj2ws4YofTor2smIl8cwi87iWh%2FHedWC1YJbSJQ2jh&X-Amz-Signature=352b538347eaedf8f134f3945e05eb178ee0e3dcf5a294fee6eece517b9d536e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WPP67FN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIDdOTNfmUl9is%2BfFF9Z3Xi0iW9Egr7rZj11IUtr%2FbwAiB2XPdUxXqZRnj3U9B8rwc3fJGy3PZ326kh%2FsNC5%2F2%2BkCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHnaaTZaL1DnxlkGKtwDK7xabdogMKYDkNqOp4gf1reqDq7%2FvaShW4hRbJ100LlrgfztHpf87fTnsVzTzZaiapjXetE1NjUcgHMZcnYDzcqKoHAtOI2vBjXEc9CZEjyb59ERfgJzxmGcH%2BMlQOq3RHxVc9%2F2ak4CfYcreB7m4BXc4ClXiugB%2FtOsbD4zAmxfgPvNuD61ltuPWrB7t0U6bn3yMrt2sWcw%2F6m%2F4ZMCmMgu3TFHs0lJ5w3ZqiU5mf3xVnpVUytanfuClkYlc2rHU6qitl72N4Xg%2F%2Ff9fmeQN3AGSb6p0LiHxqyVqGRwbzsk6dRM7JFFwXgnmLv3Viqet4xVeIJTk%2BcKoAzG%2BP1sx9w%2BpW3rvX%2FG%2BOm1VZZXFpSGZ41Q%2FQPbMNgCYjm5NB8LTkyEEdZ6RgG0fFmHDLIryLw7aLr8EaShaMdvFeUIS78UXlagSSfU3jAhZ%2BVXhl%2FgnxVcvT2MvPfc9q0RNNL9INE8V7F7BTR2teH5Z3DeTeZR%2FC4z%2BKwlEQy1NbW7SCx59J%2BhWGLuOS1YY8lkosAMY6T%2F7M50Sjn74VUXkuRtkS8ocfhHLlGBFSo03Dvggk3yk2qBcasAVUdMc6zJFxLfoFLiFFjE5WNSGGKoFoR1ykRC3%2F91OYhCb1YRc9swjt7vwwY6pgHx%2FKDNj55VbOS085rxpyCkm8FPvVX8JhbkfQm%2BDCKi1iLJNx2B8co4NPfAw8Bs63auObTeCFXQCg4Qz3ItRmJKf7UuOD5gW4lvLOJ7r9cQnnXhOAHWdsN56o07EN36zs%2BTpu767L5xFeAVJ0dRlFGaPs8ltaS%2FbTBygDtUEpK3FaNNhB9gdQxj2ws4YofTor2smIl8cwi87iWh%2FHedWC1YJbSJQ2jh&X-Amz-Signature=7bba05881f5fb8610c116489cf3541777c7b1b2a621f4e94fada113190546a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WPP67FN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIDdOTNfmUl9is%2BfFF9Z3Xi0iW9Egr7rZj11IUtr%2FbwAiB2XPdUxXqZRnj3U9B8rwc3fJGy3PZ326kh%2FsNC5%2F2%2BkCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHnaaTZaL1DnxlkGKtwDK7xabdogMKYDkNqOp4gf1reqDq7%2FvaShW4hRbJ100LlrgfztHpf87fTnsVzTzZaiapjXetE1NjUcgHMZcnYDzcqKoHAtOI2vBjXEc9CZEjyb59ERfgJzxmGcH%2BMlQOq3RHxVc9%2F2ak4CfYcreB7m4BXc4ClXiugB%2FtOsbD4zAmxfgPvNuD61ltuPWrB7t0U6bn3yMrt2sWcw%2F6m%2F4ZMCmMgu3TFHs0lJ5w3ZqiU5mf3xVnpVUytanfuClkYlc2rHU6qitl72N4Xg%2F%2Ff9fmeQN3AGSb6p0LiHxqyVqGRwbzsk6dRM7JFFwXgnmLv3Viqet4xVeIJTk%2BcKoAzG%2BP1sx9w%2BpW3rvX%2FG%2BOm1VZZXFpSGZ41Q%2FQPbMNgCYjm5NB8LTkyEEdZ6RgG0fFmHDLIryLw7aLr8EaShaMdvFeUIS78UXlagSSfU3jAhZ%2BVXhl%2FgnxVcvT2MvPfc9q0RNNL9INE8V7F7BTR2teH5Z3DeTeZR%2FC4z%2BKwlEQy1NbW7SCx59J%2BhWGLuOS1YY8lkosAMY6T%2F7M50Sjn74VUXkuRtkS8ocfhHLlGBFSo03Dvggk3yk2qBcasAVUdMc6zJFxLfoFLiFFjE5WNSGGKoFoR1ykRC3%2F91OYhCb1YRc9swjt7vwwY6pgHx%2FKDNj55VbOS085rxpyCkm8FPvVX8JhbkfQm%2BDCKi1iLJNx2B8co4NPfAw8Bs63auObTeCFXQCg4Qz3ItRmJKf7UuOD5gW4lvLOJ7r9cQnnXhOAHWdsN56o07EN36zs%2BTpu767L5xFeAVJ0dRlFGaPs8ltaS%2FbTBygDtUEpK3FaNNhB9gdQxj2ws4YofTor2smIl8cwi87iWh%2FHedWC1YJbSJQ2jh&X-Amz-Signature=73b12ccd42a1b1d66641fbe937f0738cb1a514f18f9403bfb681146b6ffc2412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
