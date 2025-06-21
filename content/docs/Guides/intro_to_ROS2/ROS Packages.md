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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHZPXR4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWAEv%2BwRuWGdDBq78chNGZ0y614bvzy9WbcCF%2BycSfoAiAxPcvRXwjQaX6MHsIqZpDIMJeqwDzfQ8jmFcW044zZJCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUHXR8qJ2C7uczwh0KtwDAyXSSYrpfO4AXjdgQy0Ah5BpyOd%2Fz4B9p7SLxG%2BTwC%2Fq290KFICe3PxOAfy8kF1c819UtOkMWoV687O8lrbPy9ONwTvQ6z6hCWkdT0zVIchi0dPtSWk3rZLOzB0Q2aNpCDMtl3RbEXjrWByj%2FK%2F7K4Yu2fThSHvjwj0aP53AsW9oX%2BtyWnPqqR6%2FP3evrakDqmkbkksF0GNscEBkSI9UGIP8XJpE97BrucPL1FfWXPdcQvT2U0NzXHoHKOiC84afc11CJbxg556J7EVMHp3hMmuGyc8eKv26H0QQQIBQYcL6qm1mqGGmwK6CZjh8aCZHhjl7wWwoXzz%2F713ZWOL77DnGxDIFQPVh8Ep7SD2H01Z1hMND7SIi6JqdOwB4RcTtE3bYLd%2FG448Zr5urrNHxDc%2BCdF%2B143e3ptBYq1PjvEdKxA677kz%2FzlwADUOw7lUY3BggSqQlZhfhSW0PoGP0t4ZqAVgDvJxU793MROXTc7mFLz%2F%2BalgrDOSMwmp0BVYpzLkEq7N%2FBWdUA%2Fr36SbPGOvfMzTyMnqC68P%2Fgd%2BGbYsJUp17RQv%2B2lENSF%2Fc3W1MVAXiJv2LlIGVFCe8s7vKi8FvhrsztuN%2Bd52%2BynbMS2qL5ssHkLZkfDrgwK8wy4%2FbwgY6pgFB8UnWoXqu7mL6h7nZna8vG5NrLv6ogz1aInjtewR%2FkvrCcz1Jwz310pF0NaO86syVCqJwn2Exkq1QczzpxGTBh4c9qXc%2Fqdj4Asw8CkAi3w7WD0OE5%2BYlooC94zqNfML5XgaIjMzsojApkOQikfowoUAqTDW25UbfS1IGVryNi3bRa3JEKRcraZLaX2osk6%2Ffe4qn5QjX6OP860vkZn0voEdFf58X&X-Amz-Signature=79f524482bf34e3ad6926a4dbbfa185442e58af18a7fc374a75927bfed3bf1a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHZPXR4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWAEv%2BwRuWGdDBq78chNGZ0y614bvzy9WbcCF%2BycSfoAiAxPcvRXwjQaX6MHsIqZpDIMJeqwDzfQ8jmFcW044zZJCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUHXR8qJ2C7uczwh0KtwDAyXSSYrpfO4AXjdgQy0Ah5BpyOd%2Fz4B9p7SLxG%2BTwC%2Fq290KFICe3PxOAfy8kF1c819UtOkMWoV687O8lrbPy9ONwTvQ6z6hCWkdT0zVIchi0dPtSWk3rZLOzB0Q2aNpCDMtl3RbEXjrWByj%2FK%2F7K4Yu2fThSHvjwj0aP53AsW9oX%2BtyWnPqqR6%2FP3evrakDqmkbkksF0GNscEBkSI9UGIP8XJpE97BrucPL1FfWXPdcQvT2U0NzXHoHKOiC84afc11CJbxg556J7EVMHp3hMmuGyc8eKv26H0QQQIBQYcL6qm1mqGGmwK6CZjh8aCZHhjl7wWwoXzz%2F713ZWOL77DnGxDIFQPVh8Ep7SD2H01Z1hMND7SIi6JqdOwB4RcTtE3bYLd%2FG448Zr5urrNHxDc%2BCdF%2B143e3ptBYq1PjvEdKxA677kz%2FzlwADUOw7lUY3BggSqQlZhfhSW0PoGP0t4ZqAVgDvJxU793MROXTc7mFLz%2F%2BalgrDOSMwmp0BVYpzLkEq7N%2FBWdUA%2Fr36SbPGOvfMzTyMnqC68P%2Fgd%2BGbYsJUp17RQv%2B2lENSF%2Fc3W1MVAXiJv2LlIGVFCe8s7vKi8FvhrsztuN%2Bd52%2BynbMS2qL5ssHkLZkfDrgwK8wy4%2FbwgY6pgFB8UnWoXqu7mL6h7nZna8vG5NrLv6ogz1aInjtewR%2FkvrCcz1Jwz310pF0NaO86syVCqJwn2Exkq1QczzpxGTBh4c9qXc%2Fqdj4Asw8CkAi3w7WD0OE5%2BYlooC94zqNfML5XgaIjMzsojApkOQikfowoUAqTDW25UbfS1IGVryNi3bRa3JEKRcraZLaX2osk6%2Ffe4qn5QjX6OP860vkZn0voEdFf58X&X-Amz-Signature=9c0194b3921718ab61482a73e79042749d4c75e960ccbd546aaab6615c24143a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHZPXR4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWAEv%2BwRuWGdDBq78chNGZ0y614bvzy9WbcCF%2BycSfoAiAxPcvRXwjQaX6MHsIqZpDIMJeqwDzfQ8jmFcW044zZJCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUHXR8qJ2C7uczwh0KtwDAyXSSYrpfO4AXjdgQy0Ah5BpyOd%2Fz4B9p7SLxG%2BTwC%2Fq290KFICe3PxOAfy8kF1c819UtOkMWoV687O8lrbPy9ONwTvQ6z6hCWkdT0zVIchi0dPtSWk3rZLOzB0Q2aNpCDMtl3RbEXjrWByj%2FK%2F7K4Yu2fThSHvjwj0aP53AsW9oX%2BtyWnPqqR6%2FP3evrakDqmkbkksF0GNscEBkSI9UGIP8XJpE97BrucPL1FfWXPdcQvT2U0NzXHoHKOiC84afc11CJbxg556J7EVMHp3hMmuGyc8eKv26H0QQQIBQYcL6qm1mqGGmwK6CZjh8aCZHhjl7wWwoXzz%2F713ZWOL77DnGxDIFQPVh8Ep7SD2H01Z1hMND7SIi6JqdOwB4RcTtE3bYLd%2FG448Zr5urrNHxDc%2BCdF%2B143e3ptBYq1PjvEdKxA677kz%2FzlwADUOw7lUY3BggSqQlZhfhSW0PoGP0t4ZqAVgDvJxU793MROXTc7mFLz%2F%2BalgrDOSMwmp0BVYpzLkEq7N%2FBWdUA%2Fr36SbPGOvfMzTyMnqC68P%2Fgd%2BGbYsJUp17RQv%2B2lENSF%2Fc3W1MVAXiJv2LlIGVFCe8s7vKi8FvhrsztuN%2Bd52%2BynbMS2qL5ssHkLZkfDrgwK8wy4%2FbwgY6pgFB8UnWoXqu7mL6h7nZna8vG5NrLv6ogz1aInjtewR%2FkvrCcz1Jwz310pF0NaO86syVCqJwn2Exkq1QczzpxGTBh4c9qXc%2Fqdj4Asw8CkAi3w7WD0OE5%2BYlooC94zqNfML5XgaIjMzsojApkOQikfowoUAqTDW25UbfS1IGVryNi3bRa3JEKRcraZLaX2osk6%2Ffe4qn5QjX6OP860vkZn0voEdFf58X&X-Amz-Signature=fd1b9df4f586375dbf8aa76db0c1bd54a740a0a03027a24533d3f5dd5fe87026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHZPXR4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWAEv%2BwRuWGdDBq78chNGZ0y614bvzy9WbcCF%2BycSfoAiAxPcvRXwjQaX6MHsIqZpDIMJeqwDzfQ8jmFcW044zZJCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUHXR8qJ2C7uczwh0KtwDAyXSSYrpfO4AXjdgQy0Ah5BpyOd%2Fz4B9p7SLxG%2BTwC%2Fq290KFICe3PxOAfy8kF1c819UtOkMWoV687O8lrbPy9ONwTvQ6z6hCWkdT0zVIchi0dPtSWk3rZLOzB0Q2aNpCDMtl3RbEXjrWByj%2FK%2F7K4Yu2fThSHvjwj0aP53AsW9oX%2BtyWnPqqR6%2FP3evrakDqmkbkksF0GNscEBkSI9UGIP8XJpE97BrucPL1FfWXPdcQvT2U0NzXHoHKOiC84afc11CJbxg556J7EVMHp3hMmuGyc8eKv26H0QQQIBQYcL6qm1mqGGmwK6CZjh8aCZHhjl7wWwoXzz%2F713ZWOL77DnGxDIFQPVh8Ep7SD2H01Z1hMND7SIi6JqdOwB4RcTtE3bYLd%2FG448Zr5urrNHxDc%2BCdF%2B143e3ptBYq1PjvEdKxA677kz%2FzlwADUOw7lUY3BggSqQlZhfhSW0PoGP0t4ZqAVgDvJxU793MROXTc7mFLz%2F%2BalgrDOSMwmp0BVYpzLkEq7N%2FBWdUA%2Fr36SbPGOvfMzTyMnqC68P%2Fgd%2BGbYsJUp17RQv%2B2lENSF%2Fc3W1MVAXiJv2LlIGVFCe8s7vKi8FvhrsztuN%2Bd52%2BynbMS2qL5ssHkLZkfDrgwK8wy4%2FbwgY6pgFB8UnWoXqu7mL6h7nZna8vG5NrLv6ogz1aInjtewR%2FkvrCcz1Jwz310pF0NaO86syVCqJwn2Exkq1QczzpxGTBh4c9qXc%2Fqdj4Asw8CkAi3w7WD0OE5%2BYlooC94zqNfML5XgaIjMzsojApkOQikfowoUAqTDW25UbfS1IGVryNi3bRa3JEKRcraZLaX2osk6%2Ffe4qn5QjX6OP860vkZn0voEdFf58X&X-Amz-Signature=54372d6d48f0fbdf0d4979aa9de2b2eb82b5c81eb9c24ad406b4c5bebd56ab16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHZPXR4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWAEv%2BwRuWGdDBq78chNGZ0y614bvzy9WbcCF%2BycSfoAiAxPcvRXwjQaX6MHsIqZpDIMJeqwDzfQ8jmFcW044zZJCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUHXR8qJ2C7uczwh0KtwDAyXSSYrpfO4AXjdgQy0Ah5BpyOd%2Fz4B9p7SLxG%2BTwC%2Fq290KFICe3PxOAfy8kF1c819UtOkMWoV687O8lrbPy9ONwTvQ6z6hCWkdT0zVIchi0dPtSWk3rZLOzB0Q2aNpCDMtl3RbEXjrWByj%2FK%2F7K4Yu2fThSHvjwj0aP53AsW9oX%2BtyWnPqqR6%2FP3evrakDqmkbkksF0GNscEBkSI9UGIP8XJpE97BrucPL1FfWXPdcQvT2U0NzXHoHKOiC84afc11CJbxg556J7EVMHp3hMmuGyc8eKv26H0QQQIBQYcL6qm1mqGGmwK6CZjh8aCZHhjl7wWwoXzz%2F713ZWOL77DnGxDIFQPVh8Ep7SD2H01Z1hMND7SIi6JqdOwB4RcTtE3bYLd%2FG448Zr5urrNHxDc%2BCdF%2B143e3ptBYq1PjvEdKxA677kz%2FzlwADUOw7lUY3BggSqQlZhfhSW0PoGP0t4ZqAVgDvJxU793MROXTc7mFLz%2F%2BalgrDOSMwmp0BVYpzLkEq7N%2FBWdUA%2Fr36SbPGOvfMzTyMnqC68P%2Fgd%2BGbYsJUp17RQv%2B2lENSF%2Fc3W1MVAXiJv2LlIGVFCe8s7vKi8FvhrsztuN%2Bd52%2BynbMS2qL5ssHkLZkfDrgwK8wy4%2FbwgY6pgFB8UnWoXqu7mL6h7nZna8vG5NrLv6ogz1aInjtewR%2FkvrCcz1Jwz310pF0NaO86syVCqJwn2Exkq1QczzpxGTBh4c9qXc%2Fqdj4Asw8CkAi3w7WD0OE5%2BYlooC94zqNfML5XgaIjMzsojApkOQikfowoUAqTDW25UbfS1IGVryNi3bRa3JEKRcraZLaX2osk6%2Ffe4qn5QjX6OP860vkZn0voEdFf58X&X-Amz-Signature=8cc5b45da987f8c259a428105665cc20dc0ea3b1576d27eae45d9275eb52d64b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHZPXR4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWAEv%2BwRuWGdDBq78chNGZ0y614bvzy9WbcCF%2BycSfoAiAxPcvRXwjQaX6MHsIqZpDIMJeqwDzfQ8jmFcW044zZJCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUHXR8qJ2C7uczwh0KtwDAyXSSYrpfO4AXjdgQy0Ah5BpyOd%2Fz4B9p7SLxG%2BTwC%2Fq290KFICe3PxOAfy8kF1c819UtOkMWoV687O8lrbPy9ONwTvQ6z6hCWkdT0zVIchi0dPtSWk3rZLOzB0Q2aNpCDMtl3RbEXjrWByj%2FK%2F7K4Yu2fThSHvjwj0aP53AsW9oX%2BtyWnPqqR6%2FP3evrakDqmkbkksF0GNscEBkSI9UGIP8XJpE97BrucPL1FfWXPdcQvT2U0NzXHoHKOiC84afc11CJbxg556J7EVMHp3hMmuGyc8eKv26H0QQQIBQYcL6qm1mqGGmwK6CZjh8aCZHhjl7wWwoXzz%2F713ZWOL77DnGxDIFQPVh8Ep7SD2H01Z1hMND7SIi6JqdOwB4RcTtE3bYLd%2FG448Zr5urrNHxDc%2BCdF%2B143e3ptBYq1PjvEdKxA677kz%2FzlwADUOw7lUY3BggSqQlZhfhSW0PoGP0t4ZqAVgDvJxU793MROXTc7mFLz%2F%2BalgrDOSMwmp0BVYpzLkEq7N%2FBWdUA%2Fr36SbPGOvfMzTyMnqC68P%2Fgd%2BGbYsJUp17RQv%2B2lENSF%2Fc3W1MVAXiJv2LlIGVFCe8s7vKi8FvhrsztuN%2Bd52%2BynbMS2qL5ssHkLZkfDrgwK8wy4%2FbwgY6pgFB8UnWoXqu7mL6h7nZna8vG5NrLv6ogz1aInjtewR%2FkvrCcz1Jwz310pF0NaO86syVCqJwn2Exkq1QczzpxGTBh4c9qXc%2Fqdj4Asw8CkAi3w7WD0OE5%2BYlooC94zqNfML5XgaIjMzsojApkOQikfowoUAqTDW25UbfS1IGVryNi3bRa3JEKRcraZLaX2osk6%2Ffe4qn5QjX6OP860vkZn0voEdFf58X&X-Amz-Signature=69a5cbe41c8c543663c2d5fe9ab91eabb0e21e3b0f79503ee843b07166fe7952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHZPXR4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWAEv%2BwRuWGdDBq78chNGZ0y614bvzy9WbcCF%2BycSfoAiAxPcvRXwjQaX6MHsIqZpDIMJeqwDzfQ8jmFcW044zZJCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUHXR8qJ2C7uczwh0KtwDAyXSSYrpfO4AXjdgQy0Ah5BpyOd%2Fz4B9p7SLxG%2BTwC%2Fq290KFICe3PxOAfy8kF1c819UtOkMWoV687O8lrbPy9ONwTvQ6z6hCWkdT0zVIchi0dPtSWk3rZLOzB0Q2aNpCDMtl3RbEXjrWByj%2FK%2F7K4Yu2fThSHvjwj0aP53AsW9oX%2BtyWnPqqR6%2FP3evrakDqmkbkksF0GNscEBkSI9UGIP8XJpE97BrucPL1FfWXPdcQvT2U0NzXHoHKOiC84afc11CJbxg556J7EVMHp3hMmuGyc8eKv26H0QQQIBQYcL6qm1mqGGmwK6CZjh8aCZHhjl7wWwoXzz%2F713ZWOL77DnGxDIFQPVh8Ep7SD2H01Z1hMND7SIi6JqdOwB4RcTtE3bYLd%2FG448Zr5urrNHxDc%2BCdF%2B143e3ptBYq1PjvEdKxA677kz%2FzlwADUOw7lUY3BggSqQlZhfhSW0PoGP0t4ZqAVgDvJxU793MROXTc7mFLz%2F%2BalgrDOSMwmp0BVYpzLkEq7N%2FBWdUA%2Fr36SbPGOvfMzTyMnqC68P%2Fgd%2BGbYsJUp17RQv%2B2lENSF%2Fc3W1MVAXiJv2LlIGVFCe8s7vKi8FvhrsztuN%2Bd52%2BynbMS2qL5ssHkLZkfDrgwK8wy4%2FbwgY6pgFB8UnWoXqu7mL6h7nZna8vG5NrLv6ogz1aInjtewR%2FkvrCcz1Jwz310pF0NaO86syVCqJwn2Exkq1QczzpxGTBh4c9qXc%2Fqdj4Asw8CkAi3w7WD0OE5%2BYlooC94zqNfML5XgaIjMzsojApkOQikfowoUAqTDW25UbfS1IGVryNi3bRa3JEKRcraZLaX2osk6%2Ffe4qn5QjX6OP860vkZn0voEdFf58X&X-Amz-Signature=06d89308a35a9f6b3227307d31123e4876d0bd0aa958badc99378644441e15d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
