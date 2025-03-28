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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC2DM6MY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXEh5dOHRN6NjVy9JazT7MXnRge7w6Ng8ho0KqjsnBoAiEAu%2FcSfmYNXRyjwC4C%2B0wh85FtsHjlMLcEqtjfcYIu%2FWUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBBmLLyyAFq7zU1acyrcA4FbaPBdlBhKLwtZDh8%2BZWf6eZeqjwKCk7n4NzDjQ%2Fv5yP80mLJVbh%2FzYP1o80wYSO8NC8IA2C%2BsTCqelFOadTLf82n5WJTPvneBPu29xuaT9PMPI3C%2FQ6vqE9zDSbuHWI%2FNyVKqE9DUCHe0xKNsAWC26siFratp7He03TS%2FtPUFPO40ouW8Gpw4wWRPFOrGXYEUivhp2eh2mZvvSlVe1ADjo%2B%2FbE33%2FWpQdnK%2FpBwtnOdbZb%2FxDjXschkOqYe7BpZAXxJgMUFTeTnGqm1Vkf6Rt1eZVAycIbJ%2F4yVyvHImULQBmR9lX3vFOeE2jyaBQW1j26JBmRIBHjdeEHmvnzSauN3X0BggEdgTBdwU3mYXC5ceKyEQZUTAZXYR5mHEBUmclJOLDof01lh4efg9LOryslOYjEaW%2FnhiKLkIb%2FzD8lGicMGG%2BDaGhbNYa267gKz80Dufuhhkk7z7CV1uUzAykSqSkkogeARkY1VNP8rNWokuYVHHTC5XQyIc1rls7IgU%2FEeQ8XOBObODDgnGOvCxvqU4VRW%2ByVQFDcHCmxN9zT5hU8MuGavCqvMaqQG%2FE0QDzqYXvM0Ljw%2Ftlzl01Y2Zz5ztkcdgm2BsWXiOdtTD0rscdCR22AwQqMO88MNSOnL8GOqUBdh0N1w6IpdpQ0siXKylMmViDd95vFyP4%2Fbmu25Wig1Fk%2BVKdpLU4pB0QoGIq8YEl5a%2FefmrDfU5xVzqw7DWHDLrAMDVRuKnxtUPsaso8sKPg7Q0W6QJB8%2FkMBKIi5nmZi85Lx76A8eHBD5jkENq3SYrKyBTwc9puO8Il%2BUI%2FvSnHR%2FqEu6mcgk6anYH%2BROIo9GhvvQeKOCFfAyb8wJ1J3Asaq5z%2F&X-Amz-Signature=349312da3314a2665038df5c3979e36aea8cc9d682d68fd87665d22a4d09f8fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC2DM6MY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXEh5dOHRN6NjVy9JazT7MXnRge7w6Ng8ho0KqjsnBoAiEAu%2FcSfmYNXRyjwC4C%2B0wh85FtsHjlMLcEqtjfcYIu%2FWUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBBmLLyyAFq7zU1acyrcA4FbaPBdlBhKLwtZDh8%2BZWf6eZeqjwKCk7n4NzDjQ%2Fv5yP80mLJVbh%2FzYP1o80wYSO8NC8IA2C%2BsTCqelFOadTLf82n5WJTPvneBPu29xuaT9PMPI3C%2FQ6vqE9zDSbuHWI%2FNyVKqE9DUCHe0xKNsAWC26siFratp7He03TS%2FtPUFPO40ouW8Gpw4wWRPFOrGXYEUivhp2eh2mZvvSlVe1ADjo%2B%2FbE33%2FWpQdnK%2FpBwtnOdbZb%2FxDjXschkOqYe7BpZAXxJgMUFTeTnGqm1Vkf6Rt1eZVAycIbJ%2F4yVyvHImULQBmR9lX3vFOeE2jyaBQW1j26JBmRIBHjdeEHmvnzSauN3X0BggEdgTBdwU3mYXC5ceKyEQZUTAZXYR5mHEBUmclJOLDof01lh4efg9LOryslOYjEaW%2FnhiKLkIb%2FzD8lGicMGG%2BDaGhbNYa267gKz80Dufuhhkk7z7CV1uUzAykSqSkkogeARkY1VNP8rNWokuYVHHTC5XQyIc1rls7IgU%2FEeQ8XOBObODDgnGOvCxvqU4VRW%2ByVQFDcHCmxN9zT5hU8MuGavCqvMaqQG%2FE0QDzqYXvM0Ljw%2Ftlzl01Y2Zz5ztkcdgm2BsWXiOdtTD0rscdCR22AwQqMO88MNSOnL8GOqUBdh0N1w6IpdpQ0siXKylMmViDd95vFyP4%2Fbmu25Wig1Fk%2BVKdpLU4pB0QoGIq8YEl5a%2FefmrDfU5xVzqw7DWHDLrAMDVRuKnxtUPsaso8sKPg7Q0W6QJB8%2FkMBKIi5nmZi85Lx76A8eHBD5jkENq3SYrKyBTwc9puO8Il%2BUI%2FvSnHR%2FqEu6mcgk6anYH%2BROIo9GhvvQeKOCFfAyb8wJ1J3Asaq5z%2F&X-Amz-Signature=018372cee6201a3b44556f382ebf5d0f40085a623b661e84ae8017fa49c099bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC2DM6MY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXEh5dOHRN6NjVy9JazT7MXnRge7w6Ng8ho0KqjsnBoAiEAu%2FcSfmYNXRyjwC4C%2B0wh85FtsHjlMLcEqtjfcYIu%2FWUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBBmLLyyAFq7zU1acyrcA4FbaPBdlBhKLwtZDh8%2BZWf6eZeqjwKCk7n4NzDjQ%2Fv5yP80mLJVbh%2FzYP1o80wYSO8NC8IA2C%2BsTCqelFOadTLf82n5WJTPvneBPu29xuaT9PMPI3C%2FQ6vqE9zDSbuHWI%2FNyVKqE9DUCHe0xKNsAWC26siFratp7He03TS%2FtPUFPO40ouW8Gpw4wWRPFOrGXYEUivhp2eh2mZvvSlVe1ADjo%2B%2FbE33%2FWpQdnK%2FpBwtnOdbZb%2FxDjXschkOqYe7BpZAXxJgMUFTeTnGqm1Vkf6Rt1eZVAycIbJ%2F4yVyvHImULQBmR9lX3vFOeE2jyaBQW1j26JBmRIBHjdeEHmvnzSauN3X0BggEdgTBdwU3mYXC5ceKyEQZUTAZXYR5mHEBUmclJOLDof01lh4efg9LOryslOYjEaW%2FnhiKLkIb%2FzD8lGicMGG%2BDaGhbNYa267gKz80Dufuhhkk7z7CV1uUzAykSqSkkogeARkY1VNP8rNWokuYVHHTC5XQyIc1rls7IgU%2FEeQ8XOBObODDgnGOvCxvqU4VRW%2ByVQFDcHCmxN9zT5hU8MuGavCqvMaqQG%2FE0QDzqYXvM0Ljw%2Ftlzl01Y2Zz5ztkcdgm2BsWXiOdtTD0rscdCR22AwQqMO88MNSOnL8GOqUBdh0N1w6IpdpQ0siXKylMmViDd95vFyP4%2Fbmu25Wig1Fk%2BVKdpLU4pB0QoGIq8YEl5a%2FefmrDfU5xVzqw7DWHDLrAMDVRuKnxtUPsaso8sKPg7Q0W6QJB8%2FkMBKIi5nmZi85Lx76A8eHBD5jkENq3SYrKyBTwc9puO8Il%2BUI%2FvSnHR%2FqEu6mcgk6anYH%2BROIo9GhvvQeKOCFfAyb8wJ1J3Asaq5z%2F&X-Amz-Signature=b2137f29fe136bfa5448d97b7ccaacf9617dbf270e860528b5f50852f3eea845&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC2DM6MY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXEh5dOHRN6NjVy9JazT7MXnRge7w6Ng8ho0KqjsnBoAiEAu%2FcSfmYNXRyjwC4C%2B0wh85FtsHjlMLcEqtjfcYIu%2FWUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBBmLLyyAFq7zU1acyrcA4FbaPBdlBhKLwtZDh8%2BZWf6eZeqjwKCk7n4NzDjQ%2Fv5yP80mLJVbh%2FzYP1o80wYSO8NC8IA2C%2BsTCqelFOadTLf82n5WJTPvneBPu29xuaT9PMPI3C%2FQ6vqE9zDSbuHWI%2FNyVKqE9DUCHe0xKNsAWC26siFratp7He03TS%2FtPUFPO40ouW8Gpw4wWRPFOrGXYEUivhp2eh2mZvvSlVe1ADjo%2B%2FbE33%2FWpQdnK%2FpBwtnOdbZb%2FxDjXschkOqYe7BpZAXxJgMUFTeTnGqm1Vkf6Rt1eZVAycIbJ%2F4yVyvHImULQBmR9lX3vFOeE2jyaBQW1j26JBmRIBHjdeEHmvnzSauN3X0BggEdgTBdwU3mYXC5ceKyEQZUTAZXYR5mHEBUmclJOLDof01lh4efg9LOryslOYjEaW%2FnhiKLkIb%2FzD8lGicMGG%2BDaGhbNYa267gKz80Dufuhhkk7z7CV1uUzAykSqSkkogeARkY1VNP8rNWokuYVHHTC5XQyIc1rls7IgU%2FEeQ8XOBObODDgnGOvCxvqU4VRW%2ByVQFDcHCmxN9zT5hU8MuGavCqvMaqQG%2FE0QDzqYXvM0Ljw%2Ftlzl01Y2Zz5ztkcdgm2BsWXiOdtTD0rscdCR22AwQqMO88MNSOnL8GOqUBdh0N1w6IpdpQ0siXKylMmViDd95vFyP4%2Fbmu25Wig1Fk%2BVKdpLU4pB0QoGIq8YEl5a%2FefmrDfU5xVzqw7DWHDLrAMDVRuKnxtUPsaso8sKPg7Q0W6QJB8%2FkMBKIi5nmZi85Lx76A8eHBD5jkENq3SYrKyBTwc9puO8Il%2BUI%2FvSnHR%2FqEu6mcgk6anYH%2BROIo9GhvvQeKOCFfAyb8wJ1J3Asaq5z%2F&X-Amz-Signature=9fe222c8685e7b32047af46236a1ca48852c2ea0d2ee9747e7de5e4bc853f5df&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC2DM6MY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXEh5dOHRN6NjVy9JazT7MXnRge7w6Ng8ho0KqjsnBoAiEAu%2FcSfmYNXRyjwC4C%2B0wh85FtsHjlMLcEqtjfcYIu%2FWUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBBmLLyyAFq7zU1acyrcA4FbaPBdlBhKLwtZDh8%2BZWf6eZeqjwKCk7n4NzDjQ%2Fv5yP80mLJVbh%2FzYP1o80wYSO8NC8IA2C%2BsTCqelFOadTLf82n5WJTPvneBPu29xuaT9PMPI3C%2FQ6vqE9zDSbuHWI%2FNyVKqE9DUCHe0xKNsAWC26siFratp7He03TS%2FtPUFPO40ouW8Gpw4wWRPFOrGXYEUivhp2eh2mZvvSlVe1ADjo%2B%2FbE33%2FWpQdnK%2FpBwtnOdbZb%2FxDjXschkOqYe7BpZAXxJgMUFTeTnGqm1Vkf6Rt1eZVAycIbJ%2F4yVyvHImULQBmR9lX3vFOeE2jyaBQW1j26JBmRIBHjdeEHmvnzSauN3X0BggEdgTBdwU3mYXC5ceKyEQZUTAZXYR5mHEBUmclJOLDof01lh4efg9LOryslOYjEaW%2FnhiKLkIb%2FzD8lGicMGG%2BDaGhbNYa267gKz80Dufuhhkk7z7CV1uUzAykSqSkkogeARkY1VNP8rNWokuYVHHTC5XQyIc1rls7IgU%2FEeQ8XOBObODDgnGOvCxvqU4VRW%2ByVQFDcHCmxN9zT5hU8MuGavCqvMaqQG%2FE0QDzqYXvM0Ljw%2Ftlzl01Y2Zz5ztkcdgm2BsWXiOdtTD0rscdCR22AwQqMO88MNSOnL8GOqUBdh0N1w6IpdpQ0siXKylMmViDd95vFyP4%2Fbmu25Wig1Fk%2BVKdpLU4pB0QoGIq8YEl5a%2FefmrDfU5xVzqw7DWHDLrAMDVRuKnxtUPsaso8sKPg7Q0W6QJB8%2FkMBKIi5nmZi85Lx76A8eHBD5jkENq3SYrKyBTwc9puO8Il%2BUI%2FvSnHR%2FqEu6mcgk6anYH%2BROIo9GhvvQeKOCFfAyb8wJ1J3Asaq5z%2F&X-Amz-Signature=49dda1043c583837f8c92cc641875db345a6a35dfdcfab537800d859b52d1aee&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC2DM6MY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXEh5dOHRN6NjVy9JazT7MXnRge7w6Ng8ho0KqjsnBoAiEAu%2FcSfmYNXRyjwC4C%2B0wh85FtsHjlMLcEqtjfcYIu%2FWUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBBmLLyyAFq7zU1acyrcA4FbaPBdlBhKLwtZDh8%2BZWf6eZeqjwKCk7n4NzDjQ%2Fv5yP80mLJVbh%2FzYP1o80wYSO8NC8IA2C%2BsTCqelFOadTLf82n5WJTPvneBPu29xuaT9PMPI3C%2FQ6vqE9zDSbuHWI%2FNyVKqE9DUCHe0xKNsAWC26siFratp7He03TS%2FtPUFPO40ouW8Gpw4wWRPFOrGXYEUivhp2eh2mZvvSlVe1ADjo%2B%2FbE33%2FWpQdnK%2FpBwtnOdbZb%2FxDjXschkOqYe7BpZAXxJgMUFTeTnGqm1Vkf6Rt1eZVAycIbJ%2F4yVyvHImULQBmR9lX3vFOeE2jyaBQW1j26JBmRIBHjdeEHmvnzSauN3X0BggEdgTBdwU3mYXC5ceKyEQZUTAZXYR5mHEBUmclJOLDof01lh4efg9LOryslOYjEaW%2FnhiKLkIb%2FzD8lGicMGG%2BDaGhbNYa267gKz80Dufuhhkk7z7CV1uUzAykSqSkkogeARkY1VNP8rNWokuYVHHTC5XQyIc1rls7IgU%2FEeQ8XOBObODDgnGOvCxvqU4VRW%2ByVQFDcHCmxN9zT5hU8MuGavCqvMaqQG%2FE0QDzqYXvM0Ljw%2Ftlzl01Y2Zz5ztkcdgm2BsWXiOdtTD0rscdCR22AwQqMO88MNSOnL8GOqUBdh0N1w6IpdpQ0siXKylMmViDd95vFyP4%2Fbmu25Wig1Fk%2BVKdpLU4pB0QoGIq8YEl5a%2FefmrDfU5xVzqw7DWHDLrAMDVRuKnxtUPsaso8sKPg7Q0W6QJB8%2FkMBKIi5nmZi85Lx76A8eHBD5jkENq3SYrKyBTwc9puO8Il%2BUI%2FvSnHR%2FqEu6mcgk6anYH%2BROIo9GhvvQeKOCFfAyb8wJ1J3Asaq5z%2F&X-Amz-Signature=1ad024b93decdda5d1811abb9c7056f0e8bbd79be04292c1da8ccbd9c6c88fa6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC2DM6MY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXEh5dOHRN6NjVy9JazT7MXnRge7w6Ng8ho0KqjsnBoAiEAu%2FcSfmYNXRyjwC4C%2B0wh85FtsHjlMLcEqtjfcYIu%2FWUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBBmLLyyAFq7zU1acyrcA4FbaPBdlBhKLwtZDh8%2BZWf6eZeqjwKCk7n4NzDjQ%2Fv5yP80mLJVbh%2FzYP1o80wYSO8NC8IA2C%2BsTCqelFOadTLf82n5WJTPvneBPu29xuaT9PMPI3C%2FQ6vqE9zDSbuHWI%2FNyVKqE9DUCHe0xKNsAWC26siFratp7He03TS%2FtPUFPO40ouW8Gpw4wWRPFOrGXYEUivhp2eh2mZvvSlVe1ADjo%2B%2FbE33%2FWpQdnK%2FpBwtnOdbZb%2FxDjXschkOqYe7BpZAXxJgMUFTeTnGqm1Vkf6Rt1eZVAycIbJ%2F4yVyvHImULQBmR9lX3vFOeE2jyaBQW1j26JBmRIBHjdeEHmvnzSauN3X0BggEdgTBdwU3mYXC5ceKyEQZUTAZXYR5mHEBUmclJOLDof01lh4efg9LOryslOYjEaW%2FnhiKLkIb%2FzD8lGicMGG%2BDaGhbNYa267gKz80Dufuhhkk7z7CV1uUzAykSqSkkogeARkY1VNP8rNWokuYVHHTC5XQyIc1rls7IgU%2FEeQ8XOBObODDgnGOvCxvqU4VRW%2ByVQFDcHCmxN9zT5hU8MuGavCqvMaqQG%2FE0QDzqYXvM0Ljw%2Ftlzl01Y2Zz5ztkcdgm2BsWXiOdtTD0rscdCR22AwQqMO88MNSOnL8GOqUBdh0N1w6IpdpQ0siXKylMmViDd95vFyP4%2Fbmu25Wig1Fk%2BVKdpLU4pB0QoGIq8YEl5a%2FefmrDfU5xVzqw7DWHDLrAMDVRuKnxtUPsaso8sKPg7Q0W6QJB8%2FkMBKIi5nmZi85Lx76A8eHBD5jkENq3SYrKyBTwc9puO8Il%2BUI%2FvSnHR%2FqEu6mcgk6anYH%2BROIo9GhvvQeKOCFfAyb8wJ1J3Asaq5z%2F&X-Amz-Signature=cf0df529de36c4e9d58c25cf0ba3ff330447668b4a99c6038a096049b51292e8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
