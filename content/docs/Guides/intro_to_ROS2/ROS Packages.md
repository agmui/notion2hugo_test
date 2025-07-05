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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDB3Y4V%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIG9eIN%2F2RecW33LlIvmBkg%2BuU7fabq247FCscL8k2rbAAiEArmyW2ZOgPfgBqoEOOMmiWU%2Bp7gI2z9vdb4v6%2F5SLMgAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDoIB4%2B88h65ndw9HyrcA5Cu4ihgnQCgPXidbOjSMORq3py0JALXvhGqDW7MOAJvH5%2F1MoEaog0Sg1vEDe02z3ct10T5OSxmETXi7C87uA45KHLXgfs9y3GQ7xMoZJgjTTn7rO8AojipIrVffszmYSww%2FLoAujSJxSCAu6ioO9k8WZTDSbB9Z8pjl88kazqszu36r5Iyi6WTbIjcbudJVgdu6HKykdkMKV9GcNXMc22YKIBSMewSG2Fj0p2X6Hz6Kp2wr0nQjcLlcEdHLQJTSACz4%2B5iT5jHcfZiZjjqNoP80qhPbgr0eVOUMZd3MZd3oFEr56YkbmWWRlLCnzIxR%2FSbyWt2zHAsO54OuwyKyg0fGGGx6qPeXKQvRfAJmSxY%2BRzhauLAnZ922cjqaUj8MV7JRA5K74o1x5T%2FGYMXS7ADAF20Rk5cCBjuL96aBP2eqlO8pduwh8LxXeaH%2FSt3SjDOJ0FNlKTDionGImyyk%2FPe0u%2F5SF6lyyDU8KE%2Bpzmgj6OP0J5%2FvpSKuEIlHBxukHd%2FlOshUsN7Mx4kU1R8yjvDQWjRvlJTJ%2FboHgBUUznoq2gPHzzxjgXHUP7L1lXtMICkEYZVybLBbZPMs4dMWKr2hJDnVO6jftgfHsCGGYqTO6nkppsHMrI7yZHLMPn1pcMGOqUBykHwQy2%2BFZ8iFD4LaN2XhTa6PfMbmIh6oeLGAbvpDrP5k73ZgaOu2MM3qLJOpRSP2J4tTKmcb1AUo%2B9URsAqBPyvYajeTGo%2FCHY3pXmZvSZv9YuR8FeMuaM%2F8c7YlsvtP1SAwLoLSLbh4DV0UptooTNUWnE0UNvW4Poi73dTeIxh5%2FpDLayOKEl03qaw4qendk%2BAAEEPv74CIubcv11DdWx7BB7y&X-Amz-Signature=5ee0a51a1ffdccfd754a79d988d2f6b01ea68ed2793afb5617b20691f9bbaf28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDB3Y4V%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIG9eIN%2F2RecW33LlIvmBkg%2BuU7fabq247FCscL8k2rbAAiEArmyW2ZOgPfgBqoEOOMmiWU%2Bp7gI2z9vdb4v6%2F5SLMgAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDoIB4%2B88h65ndw9HyrcA5Cu4ihgnQCgPXidbOjSMORq3py0JALXvhGqDW7MOAJvH5%2F1MoEaog0Sg1vEDe02z3ct10T5OSxmETXi7C87uA45KHLXgfs9y3GQ7xMoZJgjTTn7rO8AojipIrVffszmYSww%2FLoAujSJxSCAu6ioO9k8WZTDSbB9Z8pjl88kazqszu36r5Iyi6WTbIjcbudJVgdu6HKykdkMKV9GcNXMc22YKIBSMewSG2Fj0p2X6Hz6Kp2wr0nQjcLlcEdHLQJTSACz4%2B5iT5jHcfZiZjjqNoP80qhPbgr0eVOUMZd3MZd3oFEr56YkbmWWRlLCnzIxR%2FSbyWt2zHAsO54OuwyKyg0fGGGx6qPeXKQvRfAJmSxY%2BRzhauLAnZ922cjqaUj8MV7JRA5K74o1x5T%2FGYMXS7ADAF20Rk5cCBjuL96aBP2eqlO8pduwh8LxXeaH%2FSt3SjDOJ0FNlKTDionGImyyk%2FPe0u%2F5SF6lyyDU8KE%2Bpzmgj6OP0J5%2FvpSKuEIlHBxukHd%2FlOshUsN7Mx4kU1R8yjvDQWjRvlJTJ%2FboHgBUUznoq2gPHzzxjgXHUP7L1lXtMICkEYZVybLBbZPMs4dMWKr2hJDnVO6jftgfHsCGGYqTO6nkppsHMrI7yZHLMPn1pcMGOqUBykHwQy2%2BFZ8iFD4LaN2XhTa6PfMbmIh6oeLGAbvpDrP5k73ZgaOu2MM3qLJOpRSP2J4tTKmcb1AUo%2B9URsAqBPyvYajeTGo%2FCHY3pXmZvSZv9YuR8FeMuaM%2F8c7YlsvtP1SAwLoLSLbh4DV0UptooTNUWnE0UNvW4Poi73dTeIxh5%2FpDLayOKEl03qaw4qendk%2BAAEEPv74CIubcv11DdWx7BB7y&X-Amz-Signature=0a9122d7ae166c0372289d0ccdc3731a40673205331663312c82cde81b6079db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDB3Y4V%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIG9eIN%2F2RecW33LlIvmBkg%2BuU7fabq247FCscL8k2rbAAiEArmyW2ZOgPfgBqoEOOMmiWU%2Bp7gI2z9vdb4v6%2F5SLMgAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDoIB4%2B88h65ndw9HyrcA5Cu4ihgnQCgPXidbOjSMORq3py0JALXvhGqDW7MOAJvH5%2F1MoEaog0Sg1vEDe02z3ct10T5OSxmETXi7C87uA45KHLXgfs9y3GQ7xMoZJgjTTn7rO8AojipIrVffszmYSww%2FLoAujSJxSCAu6ioO9k8WZTDSbB9Z8pjl88kazqszu36r5Iyi6WTbIjcbudJVgdu6HKykdkMKV9GcNXMc22YKIBSMewSG2Fj0p2X6Hz6Kp2wr0nQjcLlcEdHLQJTSACz4%2B5iT5jHcfZiZjjqNoP80qhPbgr0eVOUMZd3MZd3oFEr56YkbmWWRlLCnzIxR%2FSbyWt2zHAsO54OuwyKyg0fGGGx6qPeXKQvRfAJmSxY%2BRzhauLAnZ922cjqaUj8MV7JRA5K74o1x5T%2FGYMXS7ADAF20Rk5cCBjuL96aBP2eqlO8pduwh8LxXeaH%2FSt3SjDOJ0FNlKTDionGImyyk%2FPe0u%2F5SF6lyyDU8KE%2Bpzmgj6OP0J5%2FvpSKuEIlHBxukHd%2FlOshUsN7Mx4kU1R8yjvDQWjRvlJTJ%2FboHgBUUznoq2gPHzzxjgXHUP7L1lXtMICkEYZVybLBbZPMs4dMWKr2hJDnVO6jftgfHsCGGYqTO6nkppsHMrI7yZHLMPn1pcMGOqUBykHwQy2%2BFZ8iFD4LaN2XhTa6PfMbmIh6oeLGAbvpDrP5k73ZgaOu2MM3qLJOpRSP2J4tTKmcb1AUo%2B9URsAqBPyvYajeTGo%2FCHY3pXmZvSZv9YuR8FeMuaM%2F8c7YlsvtP1SAwLoLSLbh4DV0UptooTNUWnE0UNvW4Poi73dTeIxh5%2FpDLayOKEl03qaw4qendk%2BAAEEPv74CIubcv11DdWx7BB7y&X-Amz-Signature=0014b9be17bfeddb775b0fb5e196bd7cc01e25911ec020e2f19f280fbcd45a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDB3Y4V%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIG9eIN%2F2RecW33LlIvmBkg%2BuU7fabq247FCscL8k2rbAAiEArmyW2ZOgPfgBqoEOOMmiWU%2Bp7gI2z9vdb4v6%2F5SLMgAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDoIB4%2B88h65ndw9HyrcA5Cu4ihgnQCgPXidbOjSMORq3py0JALXvhGqDW7MOAJvH5%2F1MoEaog0Sg1vEDe02z3ct10T5OSxmETXi7C87uA45KHLXgfs9y3GQ7xMoZJgjTTn7rO8AojipIrVffszmYSww%2FLoAujSJxSCAu6ioO9k8WZTDSbB9Z8pjl88kazqszu36r5Iyi6WTbIjcbudJVgdu6HKykdkMKV9GcNXMc22YKIBSMewSG2Fj0p2X6Hz6Kp2wr0nQjcLlcEdHLQJTSACz4%2B5iT5jHcfZiZjjqNoP80qhPbgr0eVOUMZd3MZd3oFEr56YkbmWWRlLCnzIxR%2FSbyWt2zHAsO54OuwyKyg0fGGGx6qPeXKQvRfAJmSxY%2BRzhauLAnZ922cjqaUj8MV7JRA5K74o1x5T%2FGYMXS7ADAF20Rk5cCBjuL96aBP2eqlO8pduwh8LxXeaH%2FSt3SjDOJ0FNlKTDionGImyyk%2FPe0u%2F5SF6lyyDU8KE%2Bpzmgj6OP0J5%2FvpSKuEIlHBxukHd%2FlOshUsN7Mx4kU1R8yjvDQWjRvlJTJ%2FboHgBUUznoq2gPHzzxjgXHUP7L1lXtMICkEYZVybLBbZPMs4dMWKr2hJDnVO6jftgfHsCGGYqTO6nkppsHMrI7yZHLMPn1pcMGOqUBykHwQy2%2BFZ8iFD4LaN2XhTa6PfMbmIh6oeLGAbvpDrP5k73ZgaOu2MM3qLJOpRSP2J4tTKmcb1AUo%2B9URsAqBPyvYajeTGo%2FCHY3pXmZvSZv9YuR8FeMuaM%2F8c7YlsvtP1SAwLoLSLbh4DV0UptooTNUWnE0UNvW4Poi73dTeIxh5%2FpDLayOKEl03qaw4qendk%2BAAEEPv74CIubcv11DdWx7BB7y&X-Amz-Signature=7fbf67d815c6fdbcb69aed18e9a7be1d17babc49da46d155c6d35617f31b4dd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDB3Y4V%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIG9eIN%2F2RecW33LlIvmBkg%2BuU7fabq247FCscL8k2rbAAiEArmyW2ZOgPfgBqoEOOMmiWU%2Bp7gI2z9vdb4v6%2F5SLMgAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDoIB4%2B88h65ndw9HyrcA5Cu4ihgnQCgPXidbOjSMORq3py0JALXvhGqDW7MOAJvH5%2F1MoEaog0Sg1vEDe02z3ct10T5OSxmETXi7C87uA45KHLXgfs9y3GQ7xMoZJgjTTn7rO8AojipIrVffszmYSww%2FLoAujSJxSCAu6ioO9k8WZTDSbB9Z8pjl88kazqszu36r5Iyi6WTbIjcbudJVgdu6HKykdkMKV9GcNXMc22YKIBSMewSG2Fj0p2X6Hz6Kp2wr0nQjcLlcEdHLQJTSACz4%2B5iT5jHcfZiZjjqNoP80qhPbgr0eVOUMZd3MZd3oFEr56YkbmWWRlLCnzIxR%2FSbyWt2zHAsO54OuwyKyg0fGGGx6qPeXKQvRfAJmSxY%2BRzhauLAnZ922cjqaUj8MV7JRA5K74o1x5T%2FGYMXS7ADAF20Rk5cCBjuL96aBP2eqlO8pduwh8LxXeaH%2FSt3SjDOJ0FNlKTDionGImyyk%2FPe0u%2F5SF6lyyDU8KE%2Bpzmgj6OP0J5%2FvpSKuEIlHBxukHd%2FlOshUsN7Mx4kU1R8yjvDQWjRvlJTJ%2FboHgBUUznoq2gPHzzxjgXHUP7L1lXtMICkEYZVybLBbZPMs4dMWKr2hJDnVO6jftgfHsCGGYqTO6nkppsHMrI7yZHLMPn1pcMGOqUBykHwQy2%2BFZ8iFD4LaN2XhTa6PfMbmIh6oeLGAbvpDrP5k73ZgaOu2MM3qLJOpRSP2J4tTKmcb1AUo%2B9URsAqBPyvYajeTGo%2FCHY3pXmZvSZv9YuR8FeMuaM%2F8c7YlsvtP1SAwLoLSLbh4DV0UptooTNUWnE0UNvW4Poi73dTeIxh5%2FpDLayOKEl03qaw4qendk%2BAAEEPv74CIubcv11DdWx7BB7y&X-Amz-Signature=b8d0d372efc56f81c44f984dbb9226a4f90b9f9064671977bf8a9099229da2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDB3Y4V%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIG9eIN%2F2RecW33LlIvmBkg%2BuU7fabq247FCscL8k2rbAAiEArmyW2ZOgPfgBqoEOOMmiWU%2Bp7gI2z9vdb4v6%2F5SLMgAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDoIB4%2B88h65ndw9HyrcA5Cu4ihgnQCgPXidbOjSMORq3py0JALXvhGqDW7MOAJvH5%2F1MoEaog0Sg1vEDe02z3ct10T5OSxmETXi7C87uA45KHLXgfs9y3GQ7xMoZJgjTTn7rO8AojipIrVffszmYSww%2FLoAujSJxSCAu6ioO9k8WZTDSbB9Z8pjl88kazqszu36r5Iyi6WTbIjcbudJVgdu6HKykdkMKV9GcNXMc22YKIBSMewSG2Fj0p2X6Hz6Kp2wr0nQjcLlcEdHLQJTSACz4%2B5iT5jHcfZiZjjqNoP80qhPbgr0eVOUMZd3MZd3oFEr56YkbmWWRlLCnzIxR%2FSbyWt2zHAsO54OuwyKyg0fGGGx6qPeXKQvRfAJmSxY%2BRzhauLAnZ922cjqaUj8MV7JRA5K74o1x5T%2FGYMXS7ADAF20Rk5cCBjuL96aBP2eqlO8pduwh8LxXeaH%2FSt3SjDOJ0FNlKTDionGImyyk%2FPe0u%2F5SF6lyyDU8KE%2Bpzmgj6OP0J5%2FvpSKuEIlHBxukHd%2FlOshUsN7Mx4kU1R8yjvDQWjRvlJTJ%2FboHgBUUznoq2gPHzzxjgXHUP7L1lXtMICkEYZVybLBbZPMs4dMWKr2hJDnVO6jftgfHsCGGYqTO6nkppsHMrI7yZHLMPn1pcMGOqUBykHwQy2%2BFZ8iFD4LaN2XhTa6PfMbmIh6oeLGAbvpDrP5k73ZgaOu2MM3qLJOpRSP2J4tTKmcb1AUo%2B9URsAqBPyvYajeTGo%2FCHY3pXmZvSZv9YuR8FeMuaM%2F8c7YlsvtP1SAwLoLSLbh4DV0UptooTNUWnE0UNvW4Poi73dTeIxh5%2FpDLayOKEl03qaw4qendk%2BAAEEPv74CIubcv11DdWx7BB7y&X-Amz-Signature=55ed0d582beaa540264223d0423579d30beaf29c7704a124e5b13753d302a35a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDB3Y4V%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIG9eIN%2F2RecW33LlIvmBkg%2BuU7fabq247FCscL8k2rbAAiEArmyW2ZOgPfgBqoEOOMmiWU%2Bp7gI2z9vdb4v6%2F5SLMgAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDoIB4%2B88h65ndw9HyrcA5Cu4ihgnQCgPXidbOjSMORq3py0JALXvhGqDW7MOAJvH5%2F1MoEaog0Sg1vEDe02z3ct10T5OSxmETXi7C87uA45KHLXgfs9y3GQ7xMoZJgjTTn7rO8AojipIrVffszmYSww%2FLoAujSJxSCAu6ioO9k8WZTDSbB9Z8pjl88kazqszu36r5Iyi6WTbIjcbudJVgdu6HKykdkMKV9GcNXMc22YKIBSMewSG2Fj0p2X6Hz6Kp2wr0nQjcLlcEdHLQJTSACz4%2B5iT5jHcfZiZjjqNoP80qhPbgr0eVOUMZd3MZd3oFEr56YkbmWWRlLCnzIxR%2FSbyWt2zHAsO54OuwyKyg0fGGGx6qPeXKQvRfAJmSxY%2BRzhauLAnZ922cjqaUj8MV7JRA5K74o1x5T%2FGYMXS7ADAF20Rk5cCBjuL96aBP2eqlO8pduwh8LxXeaH%2FSt3SjDOJ0FNlKTDionGImyyk%2FPe0u%2F5SF6lyyDU8KE%2Bpzmgj6OP0J5%2FvpSKuEIlHBxukHd%2FlOshUsN7Mx4kU1R8yjvDQWjRvlJTJ%2FboHgBUUznoq2gPHzzxjgXHUP7L1lXtMICkEYZVybLBbZPMs4dMWKr2hJDnVO6jftgfHsCGGYqTO6nkppsHMrI7yZHLMPn1pcMGOqUBykHwQy2%2BFZ8iFD4LaN2XhTa6PfMbmIh6oeLGAbvpDrP5k73ZgaOu2MM3qLJOpRSP2J4tTKmcb1AUo%2B9URsAqBPyvYajeTGo%2FCHY3pXmZvSZv9YuR8FeMuaM%2F8c7YlsvtP1SAwLoLSLbh4DV0UptooTNUWnE0UNvW4Poi73dTeIxh5%2FpDLayOKEl03qaw4qendk%2BAAEEPv74CIubcv11DdWx7BB7y&X-Amz-Signature=3d3970ee6e04285eb4bb6729805337f7a78a1592ba7e21e3fc541258f4f77598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
