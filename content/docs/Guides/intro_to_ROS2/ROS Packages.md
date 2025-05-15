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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5B2DOLC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHTm2Jns5FAGo7IKd5h9g52Fns7jP0%2BI0TkVdaRkNafFAiAhg4cb0112H8smYAYpfjDgJdTBm4uRSrsyrSst6XggtSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMKkHDAansNjqpww8wKtwDZVAJdeBkcNqzayJddk724FxYAUFmt8OMA9MFF8DQXdIdO537jEEtntGrwpKaU9von%2FwXCWyhTJEVsBglbL59OR9HOZyPB6rjx%2FlbYOsZ71wrRWMCgtZycQJcPaP%2FURItjnYxQv11kXDsfhW18K1r1d3S%2BVMigurqIIf63IOQpFNcC2CcJ7M6SO57gM3IfwI8ZkKybBPSE77InxUR24mj3wHtMlXXSlB1j%2Bdtc9UHTSPd0f9i7zR1tO0rUaazUHjyylnefug7r3IrB83JycYkp9DqK4mZ%2F2z%2BE%2BLBNRSkarmzITDt9Zi8oqvx5HWp3gg6%2F%2B%2BW3q%2FRTw3bz%2BTqcQ0S%2FtzONdafDoBDCwUSb5%2FcUqCzmTrNR%2FDRmdKcFuTghWAQcUeTsCTv2gTb8VPhFGFmGB7uhcAhtASTvz9f%2FKMqZ%2FAK3pOfjbqW43%2BuN6uunD0mwX18L0QFJhhk0n0kKs7UnToQJzqzw4Lr87d%2FPVRqtBJ11NXaL7aGVr0lUsUtmfDmtZbVPvXgS6f4E6sVACye6k%2FlRORdzOHC%2F%2BuQFUYcyUWxn9iHmi5ekYbTn5Oukr3Ls7MR3kflJYEYLvu%2FwQ2EP5pEPBq0Z1%2F%2Fw2HYrE91YQFZSdA2Q4T7hC%2BqGi0w3euWwQY6pgFNVAS8b0nqF8GOWn32g2nJbRAs8kuxbSXVk9LGyqmLMBFmFvKjWcKWMJ20pnfqNDUx57wLFZ0B0j5oi0cFfuDu4vohQtlxyglJ%2Fdl%2BxdGRqhJlhLYlooE1xlvenqwZEFuhhOr1OXBxB41MLt1DtbdJ5vsmE6XBIJXaiQaqNMgr29Mn%2BiqimFrYnyFbKRhveWtRsIwOpqlfQdFgvskM1iJzjLIkmfsc&X-Amz-Signature=465c00822824ddc635708082eb5fc554ce540a61d0c815cd21312145543e6678&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5B2DOLC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHTm2Jns5FAGo7IKd5h9g52Fns7jP0%2BI0TkVdaRkNafFAiAhg4cb0112H8smYAYpfjDgJdTBm4uRSrsyrSst6XggtSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMKkHDAansNjqpww8wKtwDZVAJdeBkcNqzayJddk724FxYAUFmt8OMA9MFF8DQXdIdO537jEEtntGrwpKaU9von%2FwXCWyhTJEVsBglbL59OR9HOZyPB6rjx%2FlbYOsZ71wrRWMCgtZycQJcPaP%2FURItjnYxQv11kXDsfhW18K1r1d3S%2BVMigurqIIf63IOQpFNcC2CcJ7M6SO57gM3IfwI8ZkKybBPSE77InxUR24mj3wHtMlXXSlB1j%2Bdtc9UHTSPd0f9i7zR1tO0rUaazUHjyylnefug7r3IrB83JycYkp9DqK4mZ%2F2z%2BE%2BLBNRSkarmzITDt9Zi8oqvx5HWp3gg6%2F%2B%2BW3q%2FRTw3bz%2BTqcQ0S%2FtzONdafDoBDCwUSb5%2FcUqCzmTrNR%2FDRmdKcFuTghWAQcUeTsCTv2gTb8VPhFGFmGB7uhcAhtASTvz9f%2FKMqZ%2FAK3pOfjbqW43%2BuN6uunD0mwX18L0QFJhhk0n0kKs7UnToQJzqzw4Lr87d%2FPVRqtBJ11NXaL7aGVr0lUsUtmfDmtZbVPvXgS6f4E6sVACye6k%2FlRORdzOHC%2F%2BuQFUYcyUWxn9iHmi5ekYbTn5Oukr3Ls7MR3kflJYEYLvu%2FwQ2EP5pEPBq0Z1%2F%2Fw2HYrE91YQFZSdA2Q4T7hC%2BqGi0w3euWwQY6pgFNVAS8b0nqF8GOWn32g2nJbRAs8kuxbSXVk9LGyqmLMBFmFvKjWcKWMJ20pnfqNDUx57wLFZ0B0j5oi0cFfuDu4vohQtlxyglJ%2Fdl%2BxdGRqhJlhLYlooE1xlvenqwZEFuhhOr1OXBxB41MLt1DtbdJ5vsmE6XBIJXaiQaqNMgr29Mn%2BiqimFrYnyFbKRhveWtRsIwOpqlfQdFgvskM1iJzjLIkmfsc&X-Amz-Signature=f7dca5d0d7278ef666abb0e42b736df241feb51c2723033726b225810b5281e4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5B2DOLC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHTm2Jns5FAGo7IKd5h9g52Fns7jP0%2BI0TkVdaRkNafFAiAhg4cb0112H8smYAYpfjDgJdTBm4uRSrsyrSst6XggtSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMKkHDAansNjqpww8wKtwDZVAJdeBkcNqzayJddk724FxYAUFmt8OMA9MFF8DQXdIdO537jEEtntGrwpKaU9von%2FwXCWyhTJEVsBglbL59OR9HOZyPB6rjx%2FlbYOsZ71wrRWMCgtZycQJcPaP%2FURItjnYxQv11kXDsfhW18K1r1d3S%2BVMigurqIIf63IOQpFNcC2CcJ7M6SO57gM3IfwI8ZkKybBPSE77InxUR24mj3wHtMlXXSlB1j%2Bdtc9UHTSPd0f9i7zR1tO0rUaazUHjyylnefug7r3IrB83JycYkp9DqK4mZ%2F2z%2BE%2BLBNRSkarmzITDt9Zi8oqvx5HWp3gg6%2F%2B%2BW3q%2FRTw3bz%2BTqcQ0S%2FtzONdafDoBDCwUSb5%2FcUqCzmTrNR%2FDRmdKcFuTghWAQcUeTsCTv2gTb8VPhFGFmGB7uhcAhtASTvz9f%2FKMqZ%2FAK3pOfjbqW43%2BuN6uunD0mwX18L0QFJhhk0n0kKs7UnToQJzqzw4Lr87d%2FPVRqtBJ11NXaL7aGVr0lUsUtmfDmtZbVPvXgS6f4E6sVACye6k%2FlRORdzOHC%2F%2BuQFUYcyUWxn9iHmi5ekYbTn5Oukr3Ls7MR3kflJYEYLvu%2FwQ2EP5pEPBq0Z1%2F%2Fw2HYrE91YQFZSdA2Q4T7hC%2BqGi0w3euWwQY6pgFNVAS8b0nqF8GOWn32g2nJbRAs8kuxbSXVk9LGyqmLMBFmFvKjWcKWMJ20pnfqNDUx57wLFZ0B0j5oi0cFfuDu4vohQtlxyglJ%2Fdl%2BxdGRqhJlhLYlooE1xlvenqwZEFuhhOr1OXBxB41MLt1DtbdJ5vsmE6XBIJXaiQaqNMgr29Mn%2BiqimFrYnyFbKRhveWtRsIwOpqlfQdFgvskM1iJzjLIkmfsc&X-Amz-Signature=8e51ff732bc680dc73426270c1cde8abe2bdac04a07a8858aa850c2d21a7fe7e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5B2DOLC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHTm2Jns5FAGo7IKd5h9g52Fns7jP0%2BI0TkVdaRkNafFAiAhg4cb0112H8smYAYpfjDgJdTBm4uRSrsyrSst6XggtSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMKkHDAansNjqpww8wKtwDZVAJdeBkcNqzayJddk724FxYAUFmt8OMA9MFF8DQXdIdO537jEEtntGrwpKaU9von%2FwXCWyhTJEVsBglbL59OR9HOZyPB6rjx%2FlbYOsZ71wrRWMCgtZycQJcPaP%2FURItjnYxQv11kXDsfhW18K1r1d3S%2BVMigurqIIf63IOQpFNcC2CcJ7M6SO57gM3IfwI8ZkKybBPSE77InxUR24mj3wHtMlXXSlB1j%2Bdtc9UHTSPd0f9i7zR1tO0rUaazUHjyylnefug7r3IrB83JycYkp9DqK4mZ%2F2z%2BE%2BLBNRSkarmzITDt9Zi8oqvx5HWp3gg6%2F%2B%2BW3q%2FRTw3bz%2BTqcQ0S%2FtzONdafDoBDCwUSb5%2FcUqCzmTrNR%2FDRmdKcFuTghWAQcUeTsCTv2gTb8VPhFGFmGB7uhcAhtASTvz9f%2FKMqZ%2FAK3pOfjbqW43%2BuN6uunD0mwX18L0QFJhhk0n0kKs7UnToQJzqzw4Lr87d%2FPVRqtBJ11NXaL7aGVr0lUsUtmfDmtZbVPvXgS6f4E6sVACye6k%2FlRORdzOHC%2F%2BuQFUYcyUWxn9iHmi5ekYbTn5Oukr3Ls7MR3kflJYEYLvu%2FwQ2EP5pEPBq0Z1%2F%2Fw2HYrE91YQFZSdA2Q4T7hC%2BqGi0w3euWwQY6pgFNVAS8b0nqF8GOWn32g2nJbRAs8kuxbSXVk9LGyqmLMBFmFvKjWcKWMJ20pnfqNDUx57wLFZ0B0j5oi0cFfuDu4vohQtlxyglJ%2Fdl%2BxdGRqhJlhLYlooE1xlvenqwZEFuhhOr1OXBxB41MLt1DtbdJ5vsmE6XBIJXaiQaqNMgr29Mn%2BiqimFrYnyFbKRhveWtRsIwOpqlfQdFgvskM1iJzjLIkmfsc&X-Amz-Signature=cc775e3b087320d5963414a9e65676d8859ce498e20a9fd84621129767b73595&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5B2DOLC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHTm2Jns5FAGo7IKd5h9g52Fns7jP0%2BI0TkVdaRkNafFAiAhg4cb0112H8smYAYpfjDgJdTBm4uRSrsyrSst6XggtSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMKkHDAansNjqpww8wKtwDZVAJdeBkcNqzayJddk724FxYAUFmt8OMA9MFF8DQXdIdO537jEEtntGrwpKaU9von%2FwXCWyhTJEVsBglbL59OR9HOZyPB6rjx%2FlbYOsZ71wrRWMCgtZycQJcPaP%2FURItjnYxQv11kXDsfhW18K1r1d3S%2BVMigurqIIf63IOQpFNcC2CcJ7M6SO57gM3IfwI8ZkKybBPSE77InxUR24mj3wHtMlXXSlB1j%2Bdtc9UHTSPd0f9i7zR1tO0rUaazUHjyylnefug7r3IrB83JycYkp9DqK4mZ%2F2z%2BE%2BLBNRSkarmzITDt9Zi8oqvx5HWp3gg6%2F%2B%2BW3q%2FRTw3bz%2BTqcQ0S%2FtzONdafDoBDCwUSb5%2FcUqCzmTrNR%2FDRmdKcFuTghWAQcUeTsCTv2gTb8VPhFGFmGB7uhcAhtASTvz9f%2FKMqZ%2FAK3pOfjbqW43%2BuN6uunD0mwX18L0QFJhhk0n0kKs7UnToQJzqzw4Lr87d%2FPVRqtBJ11NXaL7aGVr0lUsUtmfDmtZbVPvXgS6f4E6sVACye6k%2FlRORdzOHC%2F%2BuQFUYcyUWxn9iHmi5ekYbTn5Oukr3Ls7MR3kflJYEYLvu%2FwQ2EP5pEPBq0Z1%2F%2Fw2HYrE91YQFZSdA2Q4T7hC%2BqGi0w3euWwQY6pgFNVAS8b0nqF8GOWn32g2nJbRAs8kuxbSXVk9LGyqmLMBFmFvKjWcKWMJ20pnfqNDUx57wLFZ0B0j5oi0cFfuDu4vohQtlxyglJ%2Fdl%2BxdGRqhJlhLYlooE1xlvenqwZEFuhhOr1OXBxB41MLt1DtbdJ5vsmE6XBIJXaiQaqNMgr29Mn%2BiqimFrYnyFbKRhveWtRsIwOpqlfQdFgvskM1iJzjLIkmfsc&X-Amz-Signature=5ef2e1828e006b84873f3a024364ee90951d61242170419e94237bd54d6e83ae&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5B2DOLC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHTm2Jns5FAGo7IKd5h9g52Fns7jP0%2BI0TkVdaRkNafFAiAhg4cb0112H8smYAYpfjDgJdTBm4uRSrsyrSst6XggtSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMKkHDAansNjqpww8wKtwDZVAJdeBkcNqzayJddk724FxYAUFmt8OMA9MFF8DQXdIdO537jEEtntGrwpKaU9von%2FwXCWyhTJEVsBglbL59OR9HOZyPB6rjx%2FlbYOsZ71wrRWMCgtZycQJcPaP%2FURItjnYxQv11kXDsfhW18K1r1d3S%2BVMigurqIIf63IOQpFNcC2CcJ7M6SO57gM3IfwI8ZkKybBPSE77InxUR24mj3wHtMlXXSlB1j%2Bdtc9UHTSPd0f9i7zR1tO0rUaazUHjyylnefug7r3IrB83JycYkp9DqK4mZ%2F2z%2BE%2BLBNRSkarmzITDt9Zi8oqvx5HWp3gg6%2F%2B%2BW3q%2FRTw3bz%2BTqcQ0S%2FtzONdafDoBDCwUSb5%2FcUqCzmTrNR%2FDRmdKcFuTghWAQcUeTsCTv2gTb8VPhFGFmGB7uhcAhtASTvz9f%2FKMqZ%2FAK3pOfjbqW43%2BuN6uunD0mwX18L0QFJhhk0n0kKs7UnToQJzqzw4Lr87d%2FPVRqtBJ11NXaL7aGVr0lUsUtmfDmtZbVPvXgS6f4E6sVACye6k%2FlRORdzOHC%2F%2BuQFUYcyUWxn9iHmi5ekYbTn5Oukr3Ls7MR3kflJYEYLvu%2FwQ2EP5pEPBq0Z1%2F%2Fw2HYrE91YQFZSdA2Q4T7hC%2BqGi0w3euWwQY6pgFNVAS8b0nqF8GOWn32g2nJbRAs8kuxbSXVk9LGyqmLMBFmFvKjWcKWMJ20pnfqNDUx57wLFZ0B0j5oi0cFfuDu4vohQtlxyglJ%2Fdl%2BxdGRqhJlhLYlooE1xlvenqwZEFuhhOr1OXBxB41MLt1DtbdJ5vsmE6XBIJXaiQaqNMgr29Mn%2BiqimFrYnyFbKRhveWtRsIwOpqlfQdFgvskM1iJzjLIkmfsc&X-Amz-Signature=de352d191939f7b0cf3cdaadeb057afa702601ddd7083319667ff629bdfa8cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5B2DOLC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHTm2Jns5FAGo7IKd5h9g52Fns7jP0%2BI0TkVdaRkNafFAiAhg4cb0112H8smYAYpfjDgJdTBm4uRSrsyrSst6XggtSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMKkHDAansNjqpww8wKtwDZVAJdeBkcNqzayJddk724FxYAUFmt8OMA9MFF8DQXdIdO537jEEtntGrwpKaU9von%2FwXCWyhTJEVsBglbL59OR9HOZyPB6rjx%2FlbYOsZ71wrRWMCgtZycQJcPaP%2FURItjnYxQv11kXDsfhW18K1r1d3S%2BVMigurqIIf63IOQpFNcC2CcJ7M6SO57gM3IfwI8ZkKybBPSE77InxUR24mj3wHtMlXXSlB1j%2Bdtc9UHTSPd0f9i7zR1tO0rUaazUHjyylnefug7r3IrB83JycYkp9DqK4mZ%2F2z%2BE%2BLBNRSkarmzITDt9Zi8oqvx5HWp3gg6%2F%2B%2BW3q%2FRTw3bz%2BTqcQ0S%2FtzONdafDoBDCwUSb5%2FcUqCzmTrNR%2FDRmdKcFuTghWAQcUeTsCTv2gTb8VPhFGFmGB7uhcAhtASTvz9f%2FKMqZ%2FAK3pOfjbqW43%2BuN6uunD0mwX18L0QFJhhk0n0kKs7UnToQJzqzw4Lr87d%2FPVRqtBJ11NXaL7aGVr0lUsUtmfDmtZbVPvXgS6f4E6sVACye6k%2FlRORdzOHC%2F%2BuQFUYcyUWxn9iHmi5ekYbTn5Oukr3Ls7MR3kflJYEYLvu%2FwQ2EP5pEPBq0Z1%2F%2Fw2HYrE91YQFZSdA2Q4T7hC%2BqGi0w3euWwQY6pgFNVAS8b0nqF8GOWn32g2nJbRAs8kuxbSXVk9LGyqmLMBFmFvKjWcKWMJ20pnfqNDUx57wLFZ0B0j5oi0cFfuDu4vohQtlxyglJ%2Fdl%2BxdGRqhJlhLYlooE1xlvenqwZEFuhhOr1OXBxB41MLt1DtbdJ5vsmE6XBIJXaiQaqNMgr29Mn%2BiqimFrYnyFbKRhveWtRsIwOpqlfQdFgvskM1iJzjLIkmfsc&X-Amz-Signature=627ab3d2a9cd497d0e46942dbc1ac8d6477eebfb230288668dcc718eca9cb03a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
