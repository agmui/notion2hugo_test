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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7PO2NKA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBJt7GdF5NXHmSpsfaTT3GKVluRCmIPYcZwzPu1g1c%2BLAiAaAqSO9p5wRKW8umIQK75EJLqUWm9b7RS75LiaA5dbTCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMdRkbojniHmRYPRwHKtwDRGS8j0EQd5gUExkdtMT9j5vWXM83kmog33%2B%2FV%2BEuEc50hsAWqiUGB%2FG0A%2FTTLqKboSLdEJhEatoNhXwjb4YJ4PaUV0R0WoIg615O5haeEqrxqPE%2Ficd6n1qnCxddnSED34z8OsptmJloAKPX6ovOY1%2FsLoUs2%2BKM9AeKSrxzF3wCzKMqAtdUz5j64%2FMgrsrwhpmYDAv%2BW%2B197CAC2P%2BQuI30UnA7BtUP2QNj56W0Hxfvj2uCsa%2BQh3szjHbfdYflfCNnWnk4nyopbLT5pW8BjD6%2FFoiDZfKdtKGydHYzoDVvXBobzOAKEFCulcs9omXVy1c2EeHQPOMwmSLG4rPRRanZrREzq%2F9O5SSYxSTPFWc3%2FGZL%2Bt5VKZ4eh6GFX8FK1XjYM9%2F%2FUuv3cY67LReDZc%2BittRoWdAL7p25M%2Bu7vdCJba9PtSPgPVvIzTvN2OblLK2YP8kPl%2Bof0B3L%2B4F0oDjOjimy5EkfZwI9WQBACLbdbTDl1z%2FN%2BHHswm%2Fp84ZuLBkQtSTMNMMxji50QJGb5klZ7qEyiHTSKm%2BwVNDGKSIxL9ZFSSwGPmcG%2BQNMPk%2FOH6Tb0gufpimyI7sbg5T2%2FX5vGAyh5i0TdPl4ttLFrSBUIgQNxTlCI0LWPgAwsunLvQY6pgEAdgzG5tPPd0%2B5BzPNc4etiCtjEYXLMP1rXP%2B7NuQyRlnDhWdKjQnYIjY4MWLOKUHwdtlcd7MhvIFrV1iVBq1HMzVPGk5EfQYUnhHo15wz%2FY1tNi9SE4SLKQd6cHFFwAc9sI7evWGvb8vkOkIlYRGEdMARGCdxJWy4yhAmpH7yyXcerCuraWumnOPfePBbIFQJ10BBCk9UMbBxvvrOhZvcNsQ3cbih&X-Amz-Signature=1ff0d36cfafc7d3f501eccb6c32b55c29d02a004a531fa7797985893371bb36f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7PO2NKA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBJt7GdF5NXHmSpsfaTT3GKVluRCmIPYcZwzPu1g1c%2BLAiAaAqSO9p5wRKW8umIQK75EJLqUWm9b7RS75LiaA5dbTCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMdRkbojniHmRYPRwHKtwDRGS8j0EQd5gUExkdtMT9j5vWXM83kmog33%2B%2FV%2BEuEc50hsAWqiUGB%2FG0A%2FTTLqKboSLdEJhEatoNhXwjb4YJ4PaUV0R0WoIg615O5haeEqrxqPE%2Ficd6n1qnCxddnSED34z8OsptmJloAKPX6ovOY1%2FsLoUs2%2BKM9AeKSrxzF3wCzKMqAtdUz5j64%2FMgrsrwhpmYDAv%2BW%2B197CAC2P%2BQuI30UnA7BtUP2QNj56W0Hxfvj2uCsa%2BQh3szjHbfdYflfCNnWnk4nyopbLT5pW8BjD6%2FFoiDZfKdtKGydHYzoDVvXBobzOAKEFCulcs9omXVy1c2EeHQPOMwmSLG4rPRRanZrREzq%2F9O5SSYxSTPFWc3%2FGZL%2Bt5VKZ4eh6GFX8FK1XjYM9%2F%2FUuv3cY67LReDZc%2BittRoWdAL7p25M%2Bu7vdCJba9PtSPgPVvIzTvN2OblLK2YP8kPl%2Bof0B3L%2B4F0oDjOjimy5EkfZwI9WQBACLbdbTDl1z%2FN%2BHHswm%2Fp84ZuLBkQtSTMNMMxji50QJGb5klZ7qEyiHTSKm%2BwVNDGKSIxL9ZFSSwGPmcG%2BQNMPk%2FOH6Tb0gufpimyI7sbg5T2%2FX5vGAyh5i0TdPl4ttLFrSBUIgQNxTlCI0LWPgAwsunLvQY6pgEAdgzG5tPPd0%2B5BzPNc4etiCtjEYXLMP1rXP%2B7NuQyRlnDhWdKjQnYIjY4MWLOKUHwdtlcd7MhvIFrV1iVBq1HMzVPGk5EfQYUnhHo15wz%2FY1tNi9SE4SLKQd6cHFFwAc9sI7evWGvb8vkOkIlYRGEdMARGCdxJWy4yhAmpH7yyXcerCuraWumnOPfePBbIFQJ10BBCk9UMbBxvvrOhZvcNsQ3cbih&X-Amz-Signature=0ed70c5286f0bd5f84ac288ce64f27e5ef0e8352e9bdce41724fe4df7a049fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7PO2NKA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBJt7GdF5NXHmSpsfaTT3GKVluRCmIPYcZwzPu1g1c%2BLAiAaAqSO9p5wRKW8umIQK75EJLqUWm9b7RS75LiaA5dbTCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMdRkbojniHmRYPRwHKtwDRGS8j0EQd5gUExkdtMT9j5vWXM83kmog33%2B%2FV%2BEuEc50hsAWqiUGB%2FG0A%2FTTLqKboSLdEJhEatoNhXwjb4YJ4PaUV0R0WoIg615O5haeEqrxqPE%2Ficd6n1qnCxddnSED34z8OsptmJloAKPX6ovOY1%2FsLoUs2%2BKM9AeKSrxzF3wCzKMqAtdUz5j64%2FMgrsrwhpmYDAv%2BW%2B197CAC2P%2BQuI30UnA7BtUP2QNj56W0Hxfvj2uCsa%2BQh3szjHbfdYflfCNnWnk4nyopbLT5pW8BjD6%2FFoiDZfKdtKGydHYzoDVvXBobzOAKEFCulcs9omXVy1c2EeHQPOMwmSLG4rPRRanZrREzq%2F9O5SSYxSTPFWc3%2FGZL%2Bt5VKZ4eh6GFX8FK1XjYM9%2F%2FUuv3cY67LReDZc%2BittRoWdAL7p25M%2Bu7vdCJba9PtSPgPVvIzTvN2OblLK2YP8kPl%2Bof0B3L%2B4F0oDjOjimy5EkfZwI9WQBACLbdbTDl1z%2FN%2BHHswm%2Fp84ZuLBkQtSTMNMMxji50QJGb5klZ7qEyiHTSKm%2BwVNDGKSIxL9ZFSSwGPmcG%2BQNMPk%2FOH6Tb0gufpimyI7sbg5T2%2FX5vGAyh5i0TdPl4ttLFrSBUIgQNxTlCI0LWPgAwsunLvQY6pgEAdgzG5tPPd0%2B5BzPNc4etiCtjEYXLMP1rXP%2B7NuQyRlnDhWdKjQnYIjY4MWLOKUHwdtlcd7MhvIFrV1iVBq1HMzVPGk5EfQYUnhHo15wz%2FY1tNi9SE4SLKQd6cHFFwAc9sI7evWGvb8vkOkIlYRGEdMARGCdxJWy4yhAmpH7yyXcerCuraWumnOPfePBbIFQJ10BBCk9UMbBxvvrOhZvcNsQ3cbih&X-Amz-Signature=800398e2f9e817fa89b44cf36b7cfd865f8fc372a3a765a650ac10c5d2511a0e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7PO2NKA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBJt7GdF5NXHmSpsfaTT3GKVluRCmIPYcZwzPu1g1c%2BLAiAaAqSO9p5wRKW8umIQK75EJLqUWm9b7RS75LiaA5dbTCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMdRkbojniHmRYPRwHKtwDRGS8j0EQd5gUExkdtMT9j5vWXM83kmog33%2B%2FV%2BEuEc50hsAWqiUGB%2FG0A%2FTTLqKboSLdEJhEatoNhXwjb4YJ4PaUV0R0WoIg615O5haeEqrxqPE%2Ficd6n1qnCxddnSED34z8OsptmJloAKPX6ovOY1%2FsLoUs2%2BKM9AeKSrxzF3wCzKMqAtdUz5j64%2FMgrsrwhpmYDAv%2BW%2B197CAC2P%2BQuI30UnA7BtUP2QNj56W0Hxfvj2uCsa%2BQh3szjHbfdYflfCNnWnk4nyopbLT5pW8BjD6%2FFoiDZfKdtKGydHYzoDVvXBobzOAKEFCulcs9omXVy1c2EeHQPOMwmSLG4rPRRanZrREzq%2F9O5SSYxSTPFWc3%2FGZL%2Bt5VKZ4eh6GFX8FK1XjYM9%2F%2FUuv3cY67LReDZc%2BittRoWdAL7p25M%2Bu7vdCJba9PtSPgPVvIzTvN2OblLK2YP8kPl%2Bof0B3L%2B4F0oDjOjimy5EkfZwI9WQBACLbdbTDl1z%2FN%2BHHswm%2Fp84ZuLBkQtSTMNMMxji50QJGb5klZ7qEyiHTSKm%2BwVNDGKSIxL9ZFSSwGPmcG%2BQNMPk%2FOH6Tb0gufpimyI7sbg5T2%2FX5vGAyh5i0TdPl4ttLFrSBUIgQNxTlCI0LWPgAwsunLvQY6pgEAdgzG5tPPd0%2B5BzPNc4etiCtjEYXLMP1rXP%2B7NuQyRlnDhWdKjQnYIjY4MWLOKUHwdtlcd7MhvIFrV1iVBq1HMzVPGk5EfQYUnhHo15wz%2FY1tNi9SE4SLKQd6cHFFwAc9sI7evWGvb8vkOkIlYRGEdMARGCdxJWy4yhAmpH7yyXcerCuraWumnOPfePBbIFQJ10BBCk9UMbBxvvrOhZvcNsQ3cbih&X-Amz-Signature=56766b8bf4a6a9a5353ce6938cb8cb3a7a83f201c72ba0cfc877b3c21d588d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7PO2NKA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBJt7GdF5NXHmSpsfaTT3GKVluRCmIPYcZwzPu1g1c%2BLAiAaAqSO9p5wRKW8umIQK75EJLqUWm9b7RS75LiaA5dbTCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMdRkbojniHmRYPRwHKtwDRGS8j0EQd5gUExkdtMT9j5vWXM83kmog33%2B%2FV%2BEuEc50hsAWqiUGB%2FG0A%2FTTLqKboSLdEJhEatoNhXwjb4YJ4PaUV0R0WoIg615O5haeEqrxqPE%2Ficd6n1qnCxddnSED34z8OsptmJloAKPX6ovOY1%2FsLoUs2%2BKM9AeKSrxzF3wCzKMqAtdUz5j64%2FMgrsrwhpmYDAv%2BW%2B197CAC2P%2BQuI30UnA7BtUP2QNj56W0Hxfvj2uCsa%2BQh3szjHbfdYflfCNnWnk4nyopbLT5pW8BjD6%2FFoiDZfKdtKGydHYzoDVvXBobzOAKEFCulcs9omXVy1c2EeHQPOMwmSLG4rPRRanZrREzq%2F9O5SSYxSTPFWc3%2FGZL%2Bt5VKZ4eh6GFX8FK1XjYM9%2F%2FUuv3cY67LReDZc%2BittRoWdAL7p25M%2Bu7vdCJba9PtSPgPVvIzTvN2OblLK2YP8kPl%2Bof0B3L%2B4F0oDjOjimy5EkfZwI9WQBACLbdbTDl1z%2FN%2BHHswm%2Fp84ZuLBkQtSTMNMMxji50QJGb5klZ7qEyiHTSKm%2BwVNDGKSIxL9ZFSSwGPmcG%2BQNMPk%2FOH6Tb0gufpimyI7sbg5T2%2FX5vGAyh5i0TdPl4ttLFrSBUIgQNxTlCI0LWPgAwsunLvQY6pgEAdgzG5tPPd0%2B5BzPNc4etiCtjEYXLMP1rXP%2B7NuQyRlnDhWdKjQnYIjY4MWLOKUHwdtlcd7MhvIFrV1iVBq1HMzVPGk5EfQYUnhHo15wz%2FY1tNi9SE4SLKQd6cHFFwAc9sI7evWGvb8vkOkIlYRGEdMARGCdxJWy4yhAmpH7yyXcerCuraWumnOPfePBbIFQJ10BBCk9UMbBxvvrOhZvcNsQ3cbih&X-Amz-Signature=5391f48573960a1cbd5f3cd2ffb5be466036461674020b3c84244e54b8c88f6a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7PO2NKA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBJt7GdF5NXHmSpsfaTT3GKVluRCmIPYcZwzPu1g1c%2BLAiAaAqSO9p5wRKW8umIQK75EJLqUWm9b7RS75LiaA5dbTCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMdRkbojniHmRYPRwHKtwDRGS8j0EQd5gUExkdtMT9j5vWXM83kmog33%2B%2FV%2BEuEc50hsAWqiUGB%2FG0A%2FTTLqKboSLdEJhEatoNhXwjb4YJ4PaUV0R0WoIg615O5haeEqrxqPE%2Ficd6n1qnCxddnSED34z8OsptmJloAKPX6ovOY1%2FsLoUs2%2BKM9AeKSrxzF3wCzKMqAtdUz5j64%2FMgrsrwhpmYDAv%2BW%2B197CAC2P%2BQuI30UnA7BtUP2QNj56W0Hxfvj2uCsa%2BQh3szjHbfdYflfCNnWnk4nyopbLT5pW8BjD6%2FFoiDZfKdtKGydHYzoDVvXBobzOAKEFCulcs9omXVy1c2EeHQPOMwmSLG4rPRRanZrREzq%2F9O5SSYxSTPFWc3%2FGZL%2Bt5VKZ4eh6GFX8FK1XjYM9%2F%2FUuv3cY67LReDZc%2BittRoWdAL7p25M%2Bu7vdCJba9PtSPgPVvIzTvN2OblLK2YP8kPl%2Bof0B3L%2B4F0oDjOjimy5EkfZwI9WQBACLbdbTDl1z%2FN%2BHHswm%2Fp84ZuLBkQtSTMNMMxji50QJGb5klZ7qEyiHTSKm%2BwVNDGKSIxL9ZFSSwGPmcG%2BQNMPk%2FOH6Tb0gufpimyI7sbg5T2%2FX5vGAyh5i0TdPl4ttLFrSBUIgQNxTlCI0LWPgAwsunLvQY6pgEAdgzG5tPPd0%2B5BzPNc4etiCtjEYXLMP1rXP%2B7NuQyRlnDhWdKjQnYIjY4MWLOKUHwdtlcd7MhvIFrV1iVBq1HMzVPGk5EfQYUnhHo15wz%2FY1tNi9SE4SLKQd6cHFFwAc9sI7evWGvb8vkOkIlYRGEdMARGCdxJWy4yhAmpH7yyXcerCuraWumnOPfePBbIFQJ10BBCk9UMbBxvvrOhZvcNsQ3cbih&X-Amz-Signature=421d059e20470e054ac903a50f85661013760fbf7b0748f2492bd869e683c20d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7PO2NKA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBJt7GdF5NXHmSpsfaTT3GKVluRCmIPYcZwzPu1g1c%2BLAiAaAqSO9p5wRKW8umIQK75EJLqUWm9b7RS75LiaA5dbTCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMdRkbojniHmRYPRwHKtwDRGS8j0EQd5gUExkdtMT9j5vWXM83kmog33%2B%2FV%2BEuEc50hsAWqiUGB%2FG0A%2FTTLqKboSLdEJhEatoNhXwjb4YJ4PaUV0R0WoIg615O5haeEqrxqPE%2Ficd6n1qnCxddnSED34z8OsptmJloAKPX6ovOY1%2FsLoUs2%2BKM9AeKSrxzF3wCzKMqAtdUz5j64%2FMgrsrwhpmYDAv%2BW%2B197CAC2P%2BQuI30UnA7BtUP2QNj56W0Hxfvj2uCsa%2BQh3szjHbfdYflfCNnWnk4nyopbLT5pW8BjD6%2FFoiDZfKdtKGydHYzoDVvXBobzOAKEFCulcs9omXVy1c2EeHQPOMwmSLG4rPRRanZrREzq%2F9O5SSYxSTPFWc3%2FGZL%2Bt5VKZ4eh6GFX8FK1XjYM9%2F%2FUuv3cY67LReDZc%2BittRoWdAL7p25M%2Bu7vdCJba9PtSPgPVvIzTvN2OblLK2YP8kPl%2Bof0B3L%2B4F0oDjOjimy5EkfZwI9WQBACLbdbTDl1z%2FN%2BHHswm%2Fp84ZuLBkQtSTMNMMxji50QJGb5klZ7qEyiHTSKm%2BwVNDGKSIxL9ZFSSwGPmcG%2BQNMPk%2FOH6Tb0gufpimyI7sbg5T2%2FX5vGAyh5i0TdPl4ttLFrSBUIgQNxTlCI0LWPgAwsunLvQY6pgEAdgzG5tPPd0%2B5BzPNc4etiCtjEYXLMP1rXP%2B7NuQyRlnDhWdKjQnYIjY4MWLOKUHwdtlcd7MhvIFrV1iVBq1HMzVPGk5EfQYUnhHo15wz%2FY1tNi9SE4SLKQd6cHFFwAc9sI7evWGvb8vkOkIlYRGEdMARGCdxJWy4yhAmpH7yyXcerCuraWumnOPfePBbIFQJ10BBCk9UMbBxvvrOhZvcNsQ3cbih&X-Amz-Signature=7ac418b4aa16f809caf193e0a5898c3382627f9b5df44a9b39481b99a0d34929&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
