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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJUJPOTT%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICiOeXs6foH54cGUDIfiI7%2BwEnGssN8WE8EyHya7YmJgAiEAyomeM9DsBukEV7750x3X2yjK5%2BrxnX7YRziuZomcT0wqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIu6anrIawzZPK0sAircA6JHZgfmoJqgDfSlfx%2FDUnfvi%2FYbP%2B%2BRixJQo6Hot4rAUtuGOIUry3841qeu6g6JoI%2BW2CmJpw04EdAKA8N5noMQasp6qjlKIorb3KlEAcEt3pVcn9TEsa2DMO8sl%2FDNODSE1lQWuFBo34l5gtS6%2B3jCMmLiYMh9WAUBg%2FvthIduYvBIWtzQebMB5VrzrCM8kZva7NLZUJt5bZRE1Cyg2PmHaHiRDWBVhHwD333TZKsh6rd6Yv0RZyzce1EpHRoxPX2VWlzY%2B%2F0ApNxuL%2F8CqNSd59QiclKC%2FwIUw%2FnHqpvgvXBIKjCiRoGDffsmHUNB9UGyJJjX96tRnqOpokDDV74C4UPrpB5eS4%2FI%2FV45ScT1xFN04mh%2Bo6QO22lbD4SkTF9SIFjv5lngjbj58gflXiH5VZ9RfpCd4%2FSJpT5g%2B6CSEs%2FjS1Hfhx8pLXLQSDo7xuCOYewks%2FgJzQpmFoObJsPpBc%2Fy4LjeCsgGMPHf9hMgM2LVrm66KPjfPtbsNLrlzMgbCdoVT%2FQpSYpMCkyzcKxVM4vJ9p84S3VSHfwT1I0MclAsAjjuWboKwzZ2DQmjW7wtX%2FHHpp48IcMMxXOKHWslQ44NlQRE%2FhlN4KiyqrobVYcDH9lucSxJldvYMJn0ysIGOqUBeBNUXdtJddW%2FmEW6R6BKJry%2BXt61l72qIfqqTdm2TPwn2lb0RsLqktzUnKe3Pn8oay1%2FIssXu5F0t4UgdqVvhZRt3yF0j3HxNSBdfLrOtIDejvGlaUCQTp2VXPHv2KQp0zpBkp%2BRjen5tw0nXq2cDbiGTc6l4HCO9BPYMZBcCk4mGpsft4%2B3Vy%2FgpYP3ZOErxZV50VbUSFGXI6Vr%2BXKaS1miUlCE&X-Amz-Signature=77115fd7c5086d5ebe3d8f224da5d8549afbc28879ffa841a2923027f8cff688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJUJPOTT%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICiOeXs6foH54cGUDIfiI7%2BwEnGssN8WE8EyHya7YmJgAiEAyomeM9DsBukEV7750x3X2yjK5%2BrxnX7YRziuZomcT0wqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIu6anrIawzZPK0sAircA6JHZgfmoJqgDfSlfx%2FDUnfvi%2FYbP%2B%2BRixJQo6Hot4rAUtuGOIUry3841qeu6g6JoI%2BW2CmJpw04EdAKA8N5noMQasp6qjlKIorb3KlEAcEt3pVcn9TEsa2DMO8sl%2FDNODSE1lQWuFBo34l5gtS6%2B3jCMmLiYMh9WAUBg%2FvthIduYvBIWtzQebMB5VrzrCM8kZva7NLZUJt5bZRE1Cyg2PmHaHiRDWBVhHwD333TZKsh6rd6Yv0RZyzce1EpHRoxPX2VWlzY%2B%2F0ApNxuL%2F8CqNSd59QiclKC%2FwIUw%2FnHqpvgvXBIKjCiRoGDffsmHUNB9UGyJJjX96tRnqOpokDDV74C4UPrpB5eS4%2FI%2FV45ScT1xFN04mh%2Bo6QO22lbD4SkTF9SIFjv5lngjbj58gflXiH5VZ9RfpCd4%2FSJpT5g%2B6CSEs%2FjS1Hfhx8pLXLQSDo7xuCOYewks%2FgJzQpmFoObJsPpBc%2Fy4LjeCsgGMPHf9hMgM2LVrm66KPjfPtbsNLrlzMgbCdoVT%2FQpSYpMCkyzcKxVM4vJ9p84S3VSHfwT1I0MclAsAjjuWboKwzZ2DQmjW7wtX%2FHHpp48IcMMxXOKHWslQ44NlQRE%2FhlN4KiyqrobVYcDH9lucSxJldvYMJn0ysIGOqUBeBNUXdtJddW%2FmEW6R6BKJry%2BXt61l72qIfqqTdm2TPwn2lb0RsLqktzUnKe3Pn8oay1%2FIssXu5F0t4UgdqVvhZRt3yF0j3HxNSBdfLrOtIDejvGlaUCQTp2VXPHv2KQp0zpBkp%2BRjen5tw0nXq2cDbiGTc6l4HCO9BPYMZBcCk4mGpsft4%2B3Vy%2FgpYP3ZOErxZV50VbUSFGXI6Vr%2BXKaS1miUlCE&X-Amz-Signature=d35d28f58a6aa6ab3142c8258b855228e0aeb7e5b4ece747ca08160bf48b243a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJUJPOTT%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICiOeXs6foH54cGUDIfiI7%2BwEnGssN8WE8EyHya7YmJgAiEAyomeM9DsBukEV7750x3X2yjK5%2BrxnX7YRziuZomcT0wqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIu6anrIawzZPK0sAircA6JHZgfmoJqgDfSlfx%2FDUnfvi%2FYbP%2B%2BRixJQo6Hot4rAUtuGOIUry3841qeu6g6JoI%2BW2CmJpw04EdAKA8N5noMQasp6qjlKIorb3KlEAcEt3pVcn9TEsa2DMO8sl%2FDNODSE1lQWuFBo34l5gtS6%2B3jCMmLiYMh9WAUBg%2FvthIduYvBIWtzQebMB5VrzrCM8kZva7NLZUJt5bZRE1Cyg2PmHaHiRDWBVhHwD333TZKsh6rd6Yv0RZyzce1EpHRoxPX2VWlzY%2B%2F0ApNxuL%2F8CqNSd59QiclKC%2FwIUw%2FnHqpvgvXBIKjCiRoGDffsmHUNB9UGyJJjX96tRnqOpokDDV74C4UPrpB5eS4%2FI%2FV45ScT1xFN04mh%2Bo6QO22lbD4SkTF9SIFjv5lngjbj58gflXiH5VZ9RfpCd4%2FSJpT5g%2B6CSEs%2FjS1Hfhx8pLXLQSDo7xuCOYewks%2FgJzQpmFoObJsPpBc%2Fy4LjeCsgGMPHf9hMgM2LVrm66KPjfPtbsNLrlzMgbCdoVT%2FQpSYpMCkyzcKxVM4vJ9p84S3VSHfwT1I0MclAsAjjuWboKwzZ2DQmjW7wtX%2FHHpp48IcMMxXOKHWslQ44NlQRE%2FhlN4KiyqrobVYcDH9lucSxJldvYMJn0ysIGOqUBeBNUXdtJddW%2FmEW6R6BKJry%2BXt61l72qIfqqTdm2TPwn2lb0RsLqktzUnKe3Pn8oay1%2FIssXu5F0t4UgdqVvhZRt3yF0j3HxNSBdfLrOtIDejvGlaUCQTp2VXPHv2KQp0zpBkp%2BRjen5tw0nXq2cDbiGTc6l4HCO9BPYMZBcCk4mGpsft4%2B3Vy%2FgpYP3ZOErxZV50VbUSFGXI6Vr%2BXKaS1miUlCE&X-Amz-Signature=6ebbc2148e3c00d9d5604fbd6cac8027f94f434be59ad94ab13e7c2d9be23320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJUJPOTT%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICiOeXs6foH54cGUDIfiI7%2BwEnGssN8WE8EyHya7YmJgAiEAyomeM9DsBukEV7750x3X2yjK5%2BrxnX7YRziuZomcT0wqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIu6anrIawzZPK0sAircA6JHZgfmoJqgDfSlfx%2FDUnfvi%2FYbP%2B%2BRixJQo6Hot4rAUtuGOIUry3841qeu6g6JoI%2BW2CmJpw04EdAKA8N5noMQasp6qjlKIorb3KlEAcEt3pVcn9TEsa2DMO8sl%2FDNODSE1lQWuFBo34l5gtS6%2B3jCMmLiYMh9WAUBg%2FvthIduYvBIWtzQebMB5VrzrCM8kZva7NLZUJt5bZRE1Cyg2PmHaHiRDWBVhHwD333TZKsh6rd6Yv0RZyzce1EpHRoxPX2VWlzY%2B%2F0ApNxuL%2F8CqNSd59QiclKC%2FwIUw%2FnHqpvgvXBIKjCiRoGDffsmHUNB9UGyJJjX96tRnqOpokDDV74C4UPrpB5eS4%2FI%2FV45ScT1xFN04mh%2Bo6QO22lbD4SkTF9SIFjv5lngjbj58gflXiH5VZ9RfpCd4%2FSJpT5g%2B6CSEs%2FjS1Hfhx8pLXLQSDo7xuCOYewks%2FgJzQpmFoObJsPpBc%2Fy4LjeCsgGMPHf9hMgM2LVrm66KPjfPtbsNLrlzMgbCdoVT%2FQpSYpMCkyzcKxVM4vJ9p84S3VSHfwT1I0MclAsAjjuWboKwzZ2DQmjW7wtX%2FHHpp48IcMMxXOKHWslQ44NlQRE%2FhlN4KiyqrobVYcDH9lucSxJldvYMJn0ysIGOqUBeBNUXdtJddW%2FmEW6R6BKJry%2BXt61l72qIfqqTdm2TPwn2lb0RsLqktzUnKe3Pn8oay1%2FIssXu5F0t4UgdqVvhZRt3yF0j3HxNSBdfLrOtIDejvGlaUCQTp2VXPHv2KQp0zpBkp%2BRjen5tw0nXq2cDbiGTc6l4HCO9BPYMZBcCk4mGpsft4%2B3Vy%2FgpYP3ZOErxZV50VbUSFGXI6Vr%2BXKaS1miUlCE&X-Amz-Signature=2c09b261a34eb27aee5c2b358a41b70b093826d7deb2ca07b1b92c058bb05d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJUJPOTT%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICiOeXs6foH54cGUDIfiI7%2BwEnGssN8WE8EyHya7YmJgAiEAyomeM9DsBukEV7750x3X2yjK5%2BrxnX7YRziuZomcT0wqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIu6anrIawzZPK0sAircA6JHZgfmoJqgDfSlfx%2FDUnfvi%2FYbP%2B%2BRixJQo6Hot4rAUtuGOIUry3841qeu6g6JoI%2BW2CmJpw04EdAKA8N5noMQasp6qjlKIorb3KlEAcEt3pVcn9TEsa2DMO8sl%2FDNODSE1lQWuFBo34l5gtS6%2B3jCMmLiYMh9WAUBg%2FvthIduYvBIWtzQebMB5VrzrCM8kZva7NLZUJt5bZRE1Cyg2PmHaHiRDWBVhHwD333TZKsh6rd6Yv0RZyzce1EpHRoxPX2VWlzY%2B%2F0ApNxuL%2F8CqNSd59QiclKC%2FwIUw%2FnHqpvgvXBIKjCiRoGDffsmHUNB9UGyJJjX96tRnqOpokDDV74C4UPrpB5eS4%2FI%2FV45ScT1xFN04mh%2Bo6QO22lbD4SkTF9SIFjv5lngjbj58gflXiH5VZ9RfpCd4%2FSJpT5g%2B6CSEs%2FjS1Hfhx8pLXLQSDo7xuCOYewks%2FgJzQpmFoObJsPpBc%2Fy4LjeCsgGMPHf9hMgM2LVrm66KPjfPtbsNLrlzMgbCdoVT%2FQpSYpMCkyzcKxVM4vJ9p84S3VSHfwT1I0MclAsAjjuWboKwzZ2DQmjW7wtX%2FHHpp48IcMMxXOKHWslQ44NlQRE%2FhlN4KiyqrobVYcDH9lucSxJldvYMJn0ysIGOqUBeBNUXdtJddW%2FmEW6R6BKJry%2BXt61l72qIfqqTdm2TPwn2lb0RsLqktzUnKe3Pn8oay1%2FIssXu5F0t4UgdqVvhZRt3yF0j3HxNSBdfLrOtIDejvGlaUCQTp2VXPHv2KQp0zpBkp%2BRjen5tw0nXq2cDbiGTc6l4HCO9BPYMZBcCk4mGpsft4%2B3Vy%2FgpYP3ZOErxZV50VbUSFGXI6Vr%2BXKaS1miUlCE&X-Amz-Signature=7d3940ca060baad67fe267fe71979584d4640d06847ddf4d669f23499a5d7a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJUJPOTT%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICiOeXs6foH54cGUDIfiI7%2BwEnGssN8WE8EyHya7YmJgAiEAyomeM9DsBukEV7750x3X2yjK5%2BrxnX7YRziuZomcT0wqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIu6anrIawzZPK0sAircA6JHZgfmoJqgDfSlfx%2FDUnfvi%2FYbP%2B%2BRixJQo6Hot4rAUtuGOIUry3841qeu6g6JoI%2BW2CmJpw04EdAKA8N5noMQasp6qjlKIorb3KlEAcEt3pVcn9TEsa2DMO8sl%2FDNODSE1lQWuFBo34l5gtS6%2B3jCMmLiYMh9WAUBg%2FvthIduYvBIWtzQebMB5VrzrCM8kZva7NLZUJt5bZRE1Cyg2PmHaHiRDWBVhHwD333TZKsh6rd6Yv0RZyzce1EpHRoxPX2VWlzY%2B%2F0ApNxuL%2F8CqNSd59QiclKC%2FwIUw%2FnHqpvgvXBIKjCiRoGDffsmHUNB9UGyJJjX96tRnqOpokDDV74C4UPrpB5eS4%2FI%2FV45ScT1xFN04mh%2Bo6QO22lbD4SkTF9SIFjv5lngjbj58gflXiH5VZ9RfpCd4%2FSJpT5g%2B6CSEs%2FjS1Hfhx8pLXLQSDo7xuCOYewks%2FgJzQpmFoObJsPpBc%2Fy4LjeCsgGMPHf9hMgM2LVrm66KPjfPtbsNLrlzMgbCdoVT%2FQpSYpMCkyzcKxVM4vJ9p84S3VSHfwT1I0MclAsAjjuWboKwzZ2DQmjW7wtX%2FHHpp48IcMMxXOKHWslQ44NlQRE%2FhlN4KiyqrobVYcDH9lucSxJldvYMJn0ysIGOqUBeBNUXdtJddW%2FmEW6R6BKJry%2BXt61l72qIfqqTdm2TPwn2lb0RsLqktzUnKe3Pn8oay1%2FIssXu5F0t4UgdqVvhZRt3yF0j3HxNSBdfLrOtIDejvGlaUCQTp2VXPHv2KQp0zpBkp%2BRjen5tw0nXq2cDbiGTc6l4HCO9BPYMZBcCk4mGpsft4%2B3Vy%2FgpYP3ZOErxZV50VbUSFGXI6Vr%2BXKaS1miUlCE&X-Amz-Signature=9c509b3fad7d1aee18d69a8ff91611790f0baba42a2b492928cfd9e7c886b087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJUJPOTT%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICiOeXs6foH54cGUDIfiI7%2BwEnGssN8WE8EyHya7YmJgAiEAyomeM9DsBukEV7750x3X2yjK5%2BrxnX7YRziuZomcT0wqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIu6anrIawzZPK0sAircA6JHZgfmoJqgDfSlfx%2FDUnfvi%2FYbP%2B%2BRixJQo6Hot4rAUtuGOIUry3841qeu6g6JoI%2BW2CmJpw04EdAKA8N5noMQasp6qjlKIorb3KlEAcEt3pVcn9TEsa2DMO8sl%2FDNODSE1lQWuFBo34l5gtS6%2B3jCMmLiYMh9WAUBg%2FvthIduYvBIWtzQebMB5VrzrCM8kZva7NLZUJt5bZRE1Cyg2PmHaHiRDWBVhHwD333TZKsh6rd6Yv0RZyzce1EpHRoxPX2VWlzY%2B%2F0ApNxuL%2F8CqNSd59QiclKC%2FwIUw%2FnHqpvgvXBIKjCiRoGDffsmHUNB9UGyJJjX96tRnqOpokDDV74C4UPrpB5eS4%2FI%2FV45ScT1xFN04mh%2Bo6QO22lbD4SkTF9SIFjv5lngjbj58gflXiH5VZ9RfpCd4%2FSJpT5g%2B6CSEs%2FjS1Hfhx8pLXLQSDo7xuCOYewks%2FgJzQpmFoObJsPpBc%2Fy4LjeCsgGMPHf9hMgM2LVrm66KPjfPtbsNLrlzMgbCdoVT%2FQpSYpMCkyzcKxVM4vJ9p84S3VSHfwT1I0MclAsAjjuWboKwzZ2DQmjW7wtX%2FHHpp48IcMMxXOKHWslQ44NlQRE%2FhlN4KiyqrobVYcDH9lucSxJldvYMJn0ysIGOqUBeBNUXdtJddW%2FmEW6R6BKJry%2BXt61l72qIfqqTdm2TPwn2lb0RsLqktzUnKe3Pn8oay1%2FIssXu5F0t4UgdqVvhZRt3yF0j3HxNSBdfLrOtIDejvGlaUCQTp2VXPHv2KQp0zpBkp%2BRjen5tw0nXq2cDbiGTc6l4HCO9BPYMZBcCk4mGpsft4%2B3Vy%2FgpYP3ZOErxZV50VbUSFGXI6Vr%2BXKaS1miUlCE&X-Amz-Signature=e71f3f56eb5d9650cc5c058e8a3c146d56952be16e2ea923b8497355b164f1cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
