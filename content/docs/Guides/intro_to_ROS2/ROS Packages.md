---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYEFRZU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFL4gqGVsXwJ9wuEb0YU79zdTdjunD99RW2U6JNQnJShAiApyXqqT%2BvJF1uqZRoJD0n0RcmkMae%2BLW2wgzSysrMxOCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMIyMpf9tcfeE65RgEKtwDLXJE3ewv0YK6NreMQLamlwj7TWFe3C8q6mNuHyHoeHCizGKJm%2BKKE4TTEpXi40eykL1JwRhjFLwTc3Y3MBLjZwFNqmW9P43a5Uu%2F2LDzqE3LVBOpkSwbGVgU%2F%2FgUcwVeKcbRWDBTAAvIXQuhlZYKvBvpEEPPe3LJdkp3Q9%2BCbJbF57mKmof8NL8zJH8IOvq%2FqQnJB0Q%2BuC8Yhn8xJP1yopvBgRLIt24HDPeRu9%2BgfEpt%2BcLmea2L3JoLPUhcADxOXJ%2FpY92qqaKb8re8ijCZnqN9mGCy%2Fdnhj%2FOSjmPL76CG1%2Bebbay2%2FBwL5KXidzvBXWk%2BTIFCFPiSYJJJySA%2FntD5M9xXhtnvdFJf0xH%2BtyCFIg5seSyv3IxB2tx%2BZnKovcce%2Fx8qKJ%2F7v8T0DOM9LJfDPU1zkvAzDHIWH%2F%2FeAWduSnz5OKihfE5Kl8%2FBCsf7vWpQQqlxJNWW4bz0QjR8hfH4%2F5L4dbxsE%2Ffjk4cq1dc12iTM2NS1nY%2ByTBfiwWeY%2BfmwazoCjrIYk8onLYeN8obB%2BBMFSYxbLMUJ4K0h8rjmGF5CjusQmZywH7Ved0p9knyYi007EgAzHuHJqVyGsuowNztqjSzk1%2BMJLuBTGMX%2BK694IKQkJsHM3iMw6IqAxQY6pgHdYZ4WLV7iAUUajxX8PgtFNHzKLf%2BcQvB2o2Z4CIYOoCs9PlMYXnwOV%2Fg9WL8pAh%2FmFkw0fjXWCLp2DX%2BY8m1LfWI6lcXOmlyRw2iuoJXFrF%2FNuWHrSU4M%2FLOcdenwwKjHZ6yW0id4qSGi9WMLAATtEMd4k58PbpB6PANy05ksQvPcitq2ntilZ%2BVtYmnEB85BuUhqXyd0e5Lkybv74%2Bg14gnD5xbd&X-Amz-Signature=cd66078b72993e6f5fde481da28aa9f32e851c39f129456a84a815350aee0119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYEFRZU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFL4gqGVsXwJ9wuEb0YU79zdTdjunD99RW2U6JNQnJShAiApyXqqT%2BvJF1uqZRoJD0n0RcmkMae%2BLW2wgzSysrMxOCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMIyMpf9tcfeE65RgEKtwDLXJE3ewv0YK6NreMQLamlwj7TWFe3C8q6mNuHyHoeHCizGKJm%2BKKE4TTEpXi40eykL1JwRhjFLwTc3Y3MBLjZwFNqmW9P43a5Uu%2F2LDzqE3LVBOpkSwbGVgU%2F%2FgUcwVeKcbRWDBTAAvIXQuhlZYKvBvpEEPPe3LJdkp3Q9%2BCbJbF57mKmof8NL8zJH8IOvq%2FqQnJB0Q%2BuC8Yhn8xJP1yopvBgRLIt24HDPeRu9%2BgfEpt%2BcLmea2L3JoLPUhcADxOXJ%2FpY92qqaKb8re8ijCZnqN9mGCy%2Fdnhj%2FOSjmPL76CG1%2Bebbay2%2FBwL5KXidzvBXWk%2BTIFCFPiSYJJJySA%2FntD5M9xXhtnvdFJf0xH%2BtyCFIg5seSyv3IxB2tx%2BZnKovcce%2Fx8qKJ%2F7v8T0DOM9LJfDPU1zkvAzDHIWH%2F%2FeAWduSnz5OKihfE5Kl8%2FBCsf7vWpQQqlxJNWW4bz0QjR8hfH4%2F5L4dbxsE%2Ffjk4cq1dc12iTM2NS1nY%2ByTBfiwWeY%2BfmwazoCjrIYk8onLYeN8obB%2BBMFSYxbLMUJ4K0h8rjmGF5CjusQmZywH7Ved0p9knyYi007EgAzHuHJqVyGsuowNztqjSzk1%2BMJLuBTGMX%2BK694IKQkJsHM3iMw6IqAxQY6pgHdYZ4WLV7iAUUajxX8PgtFNHzKLf%2BcQvB2o2Z4CIYOoCs9PlMYXnwOV%2Fg9WL8pAh%2FmFkw0fjXWCLp2DX%2BY8m1LfWI6lcXOmlyRw2iuoJXFrF%2FNuWHrSU4M%2FLOcdenwwKjHZ6yW0id4qSGi9WMLAATtEMd4k58PbpB6PANy05ksQvPcitq2ntilZ%2BVtYmnEB85BuUhqXyd0e5Lkybv74%2Bg14gnD5xbd&X-Amz-Signature=3025d7b57eadc892a078230ace0c2fcb68c9e2579d8f0e22b994d99abce09967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYEFRZU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFL4gqGVsXwJ9wuEb0YU79zdTdjunD99RW2U6JNQnJShAiApyXqqT%2BvJF1uqZRoJD0n0RcmkMae%2BLW2wgzSysrMxOCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMIyMpf9tcfeE65RgEKtwDLXJE3ewv0YK6NreMQLamlwj7TWFe3C8q6mNuHyHoeHCizGKJm%2BKKE4TTEpXi40eykL1JwRhjFLwTc3Y3MBLjZwFNqmW9P43a5Uu%2F2LDzqE3LVBOpkSwbGVgU%2F%2FgUcwVeKcbRWDBTAAvIXQuhlZYKvBvpEEPPe3LJdkp3Q9%2BCbJbF57mKmof8NL8zJH8IOvq%2FqQnJB0Q%2BuC8Yhn8xJP1yopvBgRLIt24HDPeRu9%2BgfEpt%2BcLmea2L3JoLPUhcADxOXJ%2FpY92qqaKb8re8ijCZnqN9mGCy%2Fdnhj%2FOSjmPL76CG1%2Bebbay2%2FBwL5KXidzvBXWk%2BTIFCFPiSYJJJySA%2FntD5M9xXhtnvdFJf0xH%2BtyCFIg5seSyv3IxB2tx%2BZnKovcce%2Fx8qKJ%2F7v8T0DOM9LJfDPU1zkvAzDHIWH%2F%2FeAWduSnz5OKihfE5Kl8%2FBCsf7vWpQQqlxJNWW4bz0QjR8hfH4%2F5L4dbxsE%2Ffjk4cq1dc12iTM2NS1nY%2ByTBfiwWeY%2BfmwazoCjrIYk8onLYeN8obB%2BBMFSYxbLMUJ4K0h8rjmGF5CjusQmZywH7Ved0p9knyYi007EgAzHuHJqVyGsuowNztqjSzk1%2BMJLuBTGMX%2BK694IKQkJsHM3iMw6IqAxQY6pgHdYZ4WLV7iAUUajxX8PgtFNHzKLf%2BcQvB2o2Z4CIYOoCs9PlMYXnwOV%2Fg9WL8pAh%2FmFkw0fjXWCLp2DX%2BY8m1LfWI6lcXOmlyRw2iuoJXFrF%2FNuWHrSU4M%2FLOcdenwwKjHZ6yW0id4qSGi9WMLAATtEMd4k58PbpB6PANy05ksQvPcitq2ntilZ%2BVtYmnEB85BuUhqXyd0e5Lkybv74%2Bg14gnD5xbd&X-Amz-Signature=935a9add458e01dff4454271f091cc9754b4ead6472ff38ba009c6ae7e63c9d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYEFRZU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFL4gqGVsXwJ9wuEb0YU79zdTdjunD99RW2U6JNQnJShAiApyXqqT%2BvJF1uqZRoJD0n0RcmkMae%2BLW2wgzSysrMxOCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMIyMpf9tcfeE65RgEKtwDLXJE3ewv0YK6NreMQLamlwj7TWFe3C8q6mNuHyHoeHCizGKJm%2BKKE4TTEpXi40eykL1JwRhjFLwTc3Y3MBLjZwFNqmW9P43a5Uu%2F2LDzqE3LVBOpkSwbGVgU%2F%2FgUcwVeKcbRWDBTAAvIXQuhlZYKvBvpEEPPe3LJdkp3Q9%2BCbJbF57mKmof8NL8zJH8IOvq%2FqQnJB0Q%2BuC8Yhn8xJP1yopvBgRLIt24HDPeRu9%2BgfEpt%2BcLmea2L3JoLPUhcADxOXJ%2FpY92qqaKb8re8ijCZnqN9mGCy%2Fdnhj%2FOSjmPL76CG1%2Bebbay2%2FBwL5KXidzvBXWk%2BTIFCFPiSYJJJySA%2FntD5M9xXhtnvdFJf0xH%2BtyCFIg5seSyv3IxB2tx%2BZnKovcce%2Fx8qKJ%2F7v8T0DOM9LJfDPU1zkvAzDHIWH%2F%2FeAWduSnz5OKihfE5Kl8%2FBCsf7vWpQQqlxJNWW4bz0QjR8hfH4%2F5L4dbxsE%2Ffjk4cq1dc12iTM2NS1nY%2ByTBfiwWeY%2BfmwazoCjrIYk8onLYeN8obB%2BBMFSYxbLMUJ4K0h8rjmGF5CjusQmZywH7Ved0p9knyYi007EgAzHuHJqVyGsuowNztqjSzk1%2BMJLuBTGMX%2BK694IKQkJsHM3iMw6IqAxQY6pgHdYZ4WLV7iAUUajxX8PgtFNHzKLf%2BcQvB2o2Z4CIYOoCs9PlMYXnwOV%2Fg9WL8pAh%2FmFkw0fjXWCLp2DX%2BY8m1LfWI6lcXOmlyRw2iuoJXFrF%2FNuWHrSU4M%2FLOcdenwwKjHZ6yW0id4qSGi9WMLAATtEMd4k58PbpB6PANy05ksQvPcitq2ntilZ%2BVtYmnEB85BuUhqXyd0e5Lkybv74%2Bg14gnD5xbd&X-Amz-Signature=86cd50a77b6d557c56fd0346028fad8c2e7604317401e34df13846cc6f21fdd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYEFRZU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFL4gqGVsXwJ9wuEb0YU79zdTdjunD99RW2U6JNQnJShAiApyXqqT%2BvJF1uqZRoJD0n0RcmkMae%2BLW2wgzSysrMxOCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMIyMpf9tcfeE65RgEKtwDLXJE3ewv0YK6NreMQLamlwj7TWFe3C8q6mNuHyHoeHCizGKJm%2BKKE4TTEpXi40eykL1JwRhjFLwTc3Y3MBLjZwFNqmW9P43a5Uu%2F2LDzqE3LVBOpkSwbGVgU%2F%2FgUcwVeKcbRWDBTAAvIXQuhlZYKvBvpEEPPe3LJdkp3Q9%2BCbJbF57mKmof8NL8zJH8IOvq%2FqQnJB0Q%2BuC8Yhn8xJP1yopvBgRLIt24HDPeRu9%2BgfEpt%2BcLmea2L3JoLPUhcADxOXJ%2FpY92qqaKb8re8ijCZnqN9mGCy%2Fdnhj%2FOSjmPL76CG1%2Bebbay2%2FBwL5KXidzvBXWk%2BTIFCFPiSYJJJySA%2FntD5M9xXhtnvdFJf0xH%2BtyCFIg5seSyv3IxB2tx%2BZnKovcce%2Fx8qKJ%2F7v8T0DOM9LJfDPU1zkvAzDHIWH%2F%2FeAWduSnz5OKihfE5Kl8%2FBCsf7vWpQQqlxJNWW4bz0QjR8hfH4%2F5L4dbxsE%2Ffjk4cq1dc12iTM2NS1nY%2ByTBfiwWeY%2BfmwazoCjrIYk8onLYeN8obB%2BBMFSYxbLMUJ4K0h8rjmGF5CjusQmZywH7Ved0p9knyYi007EgAzHuHJqVyGsuowNztqjSzk1%2BMJLuBTGMX%2BK694IKQkJsHM3iMw6IqAxQY6pgHdYZ4WLV7iAUUajxX8PgtFNHzKLf%2BcQvB2o2Z4CIYOoCs9PlMYXnwOV%2Fg9WL8pAh%2FmFkw0fjXWCLp2DX%2BY8m1LfWI6lcXOmlyRw2iuoJXFrF%2FNuWHrSU4M%2FLOcdenwwKjHZ6yW0id4qSGi9WMLAATtEMd4k58PbpB6PANy05ksQvPcitq2ntilZ%2BVtYmnEB85BuUhqXyd0e5Lkybv74%2Bg14gnD5xbd&X-Amz-Signature=883efca85e4fb62a16d56a408c0d44154e786d0f1c7d92a22edee1dc05802e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYEFRZU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFL4gqGVsXwJ9wuEb0YU79zdTdjunD99RW2U6JNQnJShAiApyXqqT%2BvJF1uqZRoJD0n0RcmkMae%2BLW2wgzSysrMxOCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMIyMpf9tcfeE65RgEKtwDLXJE3ewv0YK6NreMQLamlwj7TWFe3C8q6mNuHyHoeHCizGKJm%2BKKE4TTEpXi40eykL1JwRhjFLwTc3Y3MBLjZwFNqmW9P43a5Uu%2F2LDzqE3LVBOpkSwbGVgU%2F%2FgUcwVeKcbRWDBTAAvIXQuhlZYKvBvpEEPPe3LJdkp3Q9%2BCbJbF57mKmof8NL8zJH8IOvq%2FqQnJB0Q%2BuC8Yhn8xJP1yopvBgRLIt24HDPeRu9%2BgfEpt%2BcLmea2L3JoLPUhcADxOXJ%2FpY92qqaKb8re8ijCZnqN9mGCy%2Fdnhj%2FOSjmPL76CG1%2Bebbay2%2FBwL5KXidzvBXWk%2BTIFCFPiSYJJJySA%2FntD5M9xXhtnvdFJf0xH%2BtyCFIg5seSyv3IxB2tx%2BZnKovcce%2Fx8qKJ%2F7v8T0DOM9LJfDPU1zkvAzDHIWH%2F%2FeAWduSnz5OKihfE5Kl8%2FBCsf7vWpQQqlxJNWW4bz0QjR8hfH4%2F5L4dbxsE%2Ffjk4cq1dc12iTM2NS1nY%2ByTBfiwWeY%2BfmwazoCjrIYk8onLYeN8obB%2BBMFSYxbLMUJ4K0h8rjmGF5CjusQmZywH7Ved0p9knyYi007EgAzHuHJqVyGsuowNztqjSzk1%2BMJLuBTGMX%2BK694IKQkJsHM3iMw6IqAxQY6pgHdYZ4WLV7iAUUajxX8PgtFNHzKLf%2BcQvB2o2Z4CIYOoCs9PlMYXnwOV%2Fg9WL8pAh%2FmFkw0fjXWCLp2DX%2BY8m1LfWI6lcXOmlyRw2iuoJXFrF%2FNuWHrSU4M%2FLOcdenwwKjHZ6yW0id4qSGi9WMLAATtEMd4k58PbpB6PANy05ksQvPcitq2ntilZ%2BVtYmnEB85BuUhqXyd0e5Lkybv74%2Bg14gnD5xbd&X-Amz-Signature=2e32ebcca83d1cf310a73f6427be08090ed81c56271e8e457b02bbbd9500c5bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYEFRZU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFL4gqGVsXwJ9wuEb0YU79zdTdjunD99RW2U6JNQnJShAiApyXqqT%2BvJF1uqZRoJD0n0RcmkMae%2BLW2wgzSysrMxOCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMIyMpf9tcfeE65RgEKtwDLXJE3ewv0YK6NreMQLamlwj7TWFe3C8q6mNuHyHoeHCizGKJm%2BKKE4TTEpXi40eykL1JwRhjFLwTc3Y3MBLjZwFNqmW9P43a5Uu%2F2LDzqE3LVBOpkSwbGVgU%2F%2FgUcwVeKcbRWDBTAAvIXQuhlZYKvBvpEEPPe3LJdkp3Q9%2BCbJbF57mKmof8NL8zJH8IOvq%2FqQnJB0Q%2BuC8Yhn8xJP1yopvBgRLIt24HDPeRu9%2BgfEpt%2BcLmea2L3JoLPUhcADxOXJ%2FpY92qqaKb8re8ijCZnqN9mGCy%2Fdnhj%2FOSjmPL76CG1%2Bebbay2%2FBwL5KXidzvBXWk%2BTIFCFPiSYJJJySA%2FntD5M9xXhtnvdFJf0xH%2BtyCFIg5seSyv3IxB2tx%2BZnKovcce%2Fx8qKJ%2F7v8T0DOM9LJfDPU1zkvAzDHIWH%2F%2FeAWduSnz5OKihfE5Kl8%2FBCsf7vWpQQqlxJNWW4bz0QjR8hfH4%2F5L4dbxsE%2Ffjk4cq1dc12iTM2NS1nY%2ByTBfiwWeY%2BfmwazoCjrIYk8onLYeN8obB%2BBMFSYxbLMUJ4K0h8rjmGF5CjusQmZywH7Ved0p9knyYi007EgAzHuHJqVyGsuowNztqjSzk1%2BMJLuBTGMX%2BK694IKQkJsHM3iMw6IqAxQY6pgHdYZ4WLV7iAUUajxX8PgtFNHzKLf%2BcQvB2o2Z4CIYOoCs9PlMYXnwOV%2Fg9WL8pAh%2FmFkw0fjXWCLp2DX%2BY8m1LfWI6lcXOmlyRw2iuoJXFrF%2FNuWHrSU4M%2FLOcdenwwKjHZ6yW0id4qSGi9WMLAATtEMd4k58PbpB6PANy05ksQvPcitq2ntilZ%2BVtYmnEB85BuUhqXyd0e5Lkybv74%2Bg14gnD5xbd&X-Amz-Signature=014e600eff0a408507c12a6c30d9aff3a1ff484f37981979dd162cbdb0d4c3d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
