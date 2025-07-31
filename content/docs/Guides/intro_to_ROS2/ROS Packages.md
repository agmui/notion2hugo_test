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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5NCDCB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzIICyF3ssM39Y0Y9vBlFSin5NW93M6OqiJPIUCTdFkAiEA0TpuXMg%2Fh770epmVFJDDWKCSDfJpOAPQf2Su0uJCttQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC7a57tBdrUZWi2kyrcA2WEIHa%2Fne%2BV%2FF2QkalY0IzHgcOzVNcxZf2vOMJVddFGKF7NOjtWoRQ8kxljyauPDFckUu1gCMqvq20oGQVGGvsx4WEKcjMzAx%2FqAl%2FsNX9lBRx1KMo1XtMfn0x7eH015CFuGmbsp3cXoa%2F5W5e6zlq%2BQcLhX0tOfNVJ%2BPJs%2BB7kazyqrvp%2BbD3AYada3AfP738GuNhY3WU8LcmkFaGnn76FXgs5Qtf%2BVKTB4O0bPg0mzvManmrEZY%2F1q73Ovf9NSu3snYO2mC3x7WK%2BXHrpVZypPy9%2BfpNYj4sqoKM2Y5FGPWhAcKvWbvdBrcX9t0%2FRooot0Jv8bktEgzVg4OFcJizzyomeMeXVdxTUQYqcdosyIiawEXcJ%2FDjQNyIOJ%2FcrD1saHdKW8844jCJDZqZCttR6VFhT0Julqtxkfn9lCaWKbIGQ5WGh17J3mFPm7IC2SilmVQBZM41%2BziFSgXErZiNGKhHGgBSa%2FcgqfHqA%2BNwVa7ys9HFDDwGBEkHaKHHb3JZ6BvXZZS%2FE0iKjttDU3vIHT%2BGKW0OVW1wmcN9w94YFvz6B41oDKoToxBUy6HtNYf1aGzON6y5vjbX7ULBt0r9FTZKMHVzHxap3LkYzGvXMVnzDGn0EDYnxjTV%2FMOPKq8QGOqUBl1y1RdvZxmj%2FW06GAnbOu1zwuOy%2Fauxfr%2BDrUd3PF%2BDfiQ5qvoMdjwIzLR3IdOjfJw6t3FtmUQDs820wfMkAmSL8b3H16lEU%2BJf0ntJgqgRUnNWJhcQFvTNbw%2B4GUYmFcjs8fhvn9Cbl0ErmngpZ8V3vRVX0qHcZuMMdlTHu4hqMgzdKRUbfiRs5WEt%2FEQD%2BG7dDh6uec3eGLtgC0kvTJ%2FezCpLM&X-Amz-Signature=72558c33917ddcd32fea99931ba5a18c6fd184e4f1d2036acffcc3b4614ceef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5NCDCB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzIICyF3ssM39Y0Y9vBlFSin5NW93M6OqiJPIUCTdFkAiEA0TpuXMg%2Fh770epmVFJDDWKCSDfJpOAPQf2Su0uJCttQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC7a57tBdrUZWi2kyrcA2WEIHa%2Fne%2BV%2FF2QkalY0IzHgcOzVNcxZf2vOMJVddFGKF7NOjtWoRQ8kxljyauPDFckUu1gCMqvq20oGQVGGvsx4WEKcjMzAx%2FqAl%2FsNX9lBRx1KMo1XtMfn0x7eH015CFuGmbsp3cXoa%2F5W5e6zlq%2BQcLhX0tOfNVJ%2BPJs%2BB7kazyqrvp%2BbD3AYada3AfP738GuNhY3WU8LcmkFaGnn76FXgs5Qtf%2BVKTB4O0bPg0mzvManmrEZY%2F1q73Ovf9NSu3snYO2mC3x7WK%2BXHrpVZypPy9%2BfpNYj4sqoKM2Y5FGPWhAcKvWbvdBrcX9t0%2FRooot0Jv8bktEgzVg4OFcJizzyomeMeXVdxTUQYqcdosyIiawEXcJ%2FDjQNyIOJ%2FcrD1saHdKW8844jCJDZqZCttR6VFhT0Julqtxkfn9lCaWKbIGQ5WGh17J3mFPm7IC2SilmVQBZM41%2BziFSgXErZiNGKhHGgBSa%2FcgqfHqA%2BNwVa7ys9HFDDwGBEkHaKHHb3JZ6BvXZZS%2FE0iKjttDU3vIHT%2BGKW0OVW1wmcN9w94YFvz6B41oDKoToxBUy6HtNYf1aGzON6y5vjbX7ULBt0r9FTZKMHVzHxap3LkYzGvXMVnzDGn0EDYnxjTV%2FMOPKq8QGOqUBl1y1RdvZxmj%2FW06GAnbOu1zwuOy%2Fauxfr%2BDrUd3PF%2BDfiQ5qvoMdjwIzLR3IdOjfJw6t3FtmUQDs820wfMkAmSL8b3H16lEU%2BJf0ntJgqgRUnNWJhcQFvTNbw%2B4GUYmFcjs8fhvn9Cbl0ErmngpZ8V3vRVX0qHcZuMMdlTHu4hqMgzdKRUbfiRs5WEt%2FEQD%2BG7dDh6uec3eGLtgC0kvTJ%2FezCpLM&X-Amz-Signature=9da055daa612c788e77ae794a8d2a51f6bf2dc2eda40b806b25b42b2a13ca59f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5NCDCB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzIICyF3ssM39Y0Y9vBlFSin5NW93M6OqiJPIUCTdFkAiEA0TpuXMg%2Fh770epmVFJDDWKCSDfJpOAPQf2Su0uJCttQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC7a57tBdrUZWi2kyrcA2WEIHa%2Fne%2BV%2FF2QkalY0IzHgcOzVNcxZf2vOMJVddFGKF7NOjtWoRQ8kxljyauPDFckUu1gCMqvq20oGQVGGvsx4WEKcjMzAx%2FqAl%2FsNX9lBRx1KMo1XtMfn0x7eH015CFuGmbsp3cXoa%2F5W5e6zlq%2BQcLhX0tOfNVJ%2BPJs%2BB7kazyqrvp%2BbD3AYada3AfP738GuNhY3WU8LcmkFaGnn76FXgs5Qtf%2BVKTB4O0bPg0mzvManmrEZY%2F1q73Ovf9NSu3snYO2mC3x7WK%2BXHrpVZypPy9%2BfpNYj4sqoKM2Y5FGPWhAcKvWbvdBrcX9t0%2FRooot0Jv8bktEgzVg4OFcJizzyomeMeXVdxTUQYqcdosyIiawEXcJ%2FDjQNyIOJ%2FcrD1saHdKW8844jCJDZqZCttR6VFhT0Julqtxkfn9lCaWKbIGQ5WGh17J3mFPm7IC2SilmVQBZM41%2BziFSgXErZiNGKhHGgBSa%2FcgqfHqA%2BNwVa7ys9HFDDwGBEkHaKHHb3JZ6BvXZZS%2FE0iKjttDU3vIHT%2BGKW0OVW1wmcN9w94YFvz6B41oDKoToxBUy6HtNYf1aGzON6y5vjbX7ULBt0r9FTZKMHVzHxap3LkYzGvXMVnzDGn0EDYnxjTV%2FMOPKq8QGOqUBl1y1RdvZxmj%2FW06GAnbOu1zwuOy%2Fauxfr%2BDrUd3PF%2BDfiQ5qvoMdjwIzLR3IdOjfJw6t3FtmUQDs820wfMkAmSL8b3H16lEU%2BJf0ntJgqgRUnNWJhcQFvTNbw%2B4GUYmFcjs8fhvn9Cbl0ErmngpZ8V3vRVX0qHcZuMMdlTHu4hqMgzdKRUbfiRs5WEt%2FEQD%2BG7dDh6uec3eGLtgC0kvTJ%2FezCpLM&X-Amz-Signature=a35c3ad87aeba4905bba413f56c688d10f722a25a6718d7fad6b425057cc46e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5NCDCB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzIICyF3ssM39Y0Y9vBlFSin5NW93M6OqiJPIUCTdFkAiEA0TpuXMg%2Fh770epmVFJDDWKCSDfJpOAPQf2Su0uJCttQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC7a57tBdrUZWi2kyrcA2WEIHa%2Fne%2BV%2FF2QkalY0IzHgcOzVNcxZf2vOMJVddFGKF7NOjtWoRQ8kxljyauPDFckUu1gCMqvq20oGQVGGvsx4WEKcjMzAx%2FqAl%2FsNX9lBRx1KMo1XtMfn0x7eH015CFuGmbsp3cXoa%2F5W5e6zlq%2BQcLhX0tOfNVJ%2BPJs%2BB7kazyqrvp%2BbD3AYada3AfP738GuNhY3WU8LcmkFaGnn76FXgs5Qtf%2BVKTB4O0bPg0mzvManmrEZY%2F1q73Ovf9NSu3snYO2mC3x7WK%2BXHrpVZypPy9%2BfpNYj4sqoKM2Y5FGPWhAcKvWbvdBrcX9t0%2FRooot0Jv8bktEgzVg4OFcJizzyomeMeXVdxTUQYqcdosyIiawEXcJ%2FDjQNyIOJ%2FcrD1saHdKW8844jCJDZqZCttR6VFhT0Julqtxkfn9lCaWKbIGQ5WGh17J3mFPm7IC2SilmVQBZM41%2BziFSgXErZiNGKhHGgBSa%2FcgqfHqA%2BNwVa7ys9HFDDwGBEkHaKHHb3JZ6BvXZZS%2FE0iKjttDU3vIHT%2BGKW0OVW1wmcN9w94YFvz6B41oDKoToxBUy6HtNYf1aGzON6y5vjbX7ULBt0r9FTZKMHVzHxap3LkYzGvXMVnzDGn0EDYnxjTV%2FMOPKq8QGOqUBl1y1RdvZxmj%2FW06GAnbOu1zwuOy%2Fauxfr%2BDrUd3PF%2BDfiQ5qvoMdjwIzLR3IdOjfJw6t3FtmUQDs820wfMkAmSL8b3H16lEU%2BJf0ntJgqgRUnNWJhcQFvTNbw%2B4GUYmFcjs8fhvn9Cbl0ErmngpZ8V3vRVX0qHcZuMMdlTHu4hqMgzdKRUbfiRs5WEt%2FEQD%2BG7dDh6uec3eGLtgC0kvTJ%2FezCpLM&X-Amz-Signature=e75c4c825b77a6c25ac6a5408002ed9868e8774d1d24df145aab6f0a3d946e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5NCDCB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzIICyF3ssM39Y0Y9vBlFSin5NW93M6OqiJPIUCTdFkAiEA0TpuXMg%2Fh770epmVFJDDWKCSDfJpOAPQf2Su0uJCttQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC7a57tBdrUZWi2kyrcA2WEIHa%2Fne%2BV%2FF2QkalY0IzHgcOzVNcxZf2vOMJVddFGKF7NOjtWoRQ8kxljyauPDFckUu1gCMqvq20oGQVGGvsx4WEKcjMzAx%2FqAl%2FsNX9lBRx1KMo1XtMfn0x7eH015CFuGmbsp3cXoa%2F5W5e6zlq%2BQcLhX0tOfNVJ%2BPJs%2BB7kazyqrvp%2BbD3AYada3AfP738GuNhY3WU8LcmkFaGnn76FXgs5Qtf%2BVKTB4O0bPg0mzvManmrEZY%2F1q73Ovf9NSu3snYO2mC3x7WK%2BXHrpVZypPy9%2BfpNYj4sqoKM2Y5FGPWhAcKvWbvdBrcX9t0%2FRooot0Jv8bktEgzVg4OFcJizzyomeMeXVdxTUQYqcdosyIiawEXcJ%2FDjQNyIOJ%2FcrD1saHdKW8844jCJDZqZCttR6VFhT0Julqtxkfn9lCaWKbIGQ5WGh17J3mFPm7IC2SilmVQBZM41%2BziFSgXErZiNGKhHGgBSa%2FcgqfHqA%2BNwVa7ys9HFDDwGBEkHaKHHb3JZ6BvXZZS%2FE0iKjttDU3vIHT%2BGKW0OVW1wmcN9w94YFvz6B41oDKoToxBUy6HtNYf1aGzON6y5vjbX7ULBt0r9FTZKMHVzHxap3LkYzGvXMVnzDGn0EDYnxjTV%2FMOPKq8QGOqUBl1y1RdvZxmj%2FW06GAnbOu1zwuOy%2Fauxfr%2BDrUd3PF%2BDfiQ5qvoMdjwIzLR3IdOjfJw6t3FtmUQDs820wfMkAmSL8b3H16lEU%2BJf0ntJgqgRUnNWJhcQFvTNbw%2B4GUYmFcjs8fhvn9Cbl0ErmngpZ8V3vRVX0qHcZuMMdlTHu4hqMgzdKRUbfiRs5WEt%2FEQD%2BG7dDh6uec3eGLtgC0kvTJ%2FezCpLM&X-Amz-Signature=658684d51117aa6f7d3bda819ef96223eeaaf3dc41de3233c34e484c2db0b6aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5NCDCB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzIICyF3ssM39Y0Y9vBlFSin5NW93M6OqiJPIUCTdFkAiEA0TpuXMg%2Fh770epmVFJDDWKCSDfJpOAPQf2Su0uJCttQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC7a57tBdrUZWi2kyrcA2WEIHa%2Fne%2BV%2FF2QkalY0IzHgcOzVNcxZf2vOMJVddFGKF7NOjtWoRQ8kxljyauPDFckUu1gCMqvq20oGQVGGvsx4WEKcjMzAx%2FqAl%2FsNX9lBRx1KMo1XtMfn0x7eH015CFuGmbsp3cXoa%2F5W5e6zlq%2BQcLhX0tOfNVJ%2BPJs%2BB7kazyqrvp%2BbD3AYada3AfP738GuNhY3WU8LcmkFaGnn76FXgs5Qtf%2BVKTB4O0bPg0mzvManmrEZY%2F1q73Ovf9NSu3snYO2mC3x7WK%2BXHrpVZypPy9%2BfpNYj4sqoKM2Y5FGPWhAcKvWbvdBrcX9t0%2FRooot0Jv8bktEgzVg4OFcJizzyomeMeXVdxTUQYqcdosyIiawEXcJ%2FDjQNyIOJ%2FcrD1saHdKW8844jCJDZqZCttR6VFhT0Julqtxkfn9lCaWKbIGQ5WGh17J3mFPm7IC2SilmVQBZM41%2BziFSgXErZiNGKhHGgBSa%2FcgqfHqA%2BNwVa7ys9HFDDwGBEkHaKHHb3JZ6BvXZZS%2FE0iKjttDU3vIHT%2BGKW0OVW1wmcN9w94YFvz6B41oDKoToxBUy6HtNYf1aGzON6y5vjbX7ULBt0r9FTZKMHVzHxap3LkYzGvXMVnzDGn0EDYnxjTV%2FMOPKq8QGOqUBl1y1RdvZxmj%2FW06GAnbOu1zwuOy%2Fauxfr%2BDrUd3PF%2BDfiQ5qvoMdjwIzLR3IdOjfJw6t3FtmUQDs820wfMkAmSL8b3H16lEU%2BJf0ntJgqgRUnNWJhcQFvTNbw%2B4GUYmFcjs8fhvn9Cbl0ErmngpZ8V3vRVX0qHcZuMMdlTHu4hqMgzdKRUbfiRs5WEt%2FEQD%2BG7dDh6uec3eGLtgC0kvTJ%2FezCpLM&X-Amz-Signature=62c32593d25e414c70a7957a8b942e6e48373356c4bdcca551407083f9e6ff47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5NCDCB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzIICyF3ssM39Y0Y9vBlFSin5NW93M6OqiJPIUCTdFkAiEA0TpuXMg%2Fh770epmVFJDDWKCSDfJpOAPQf2Su0uJCttQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC7a57tBdrUZWi2kyrcA2WEIHa%2Fne%2BV%2FF2QkalY0IzHgcOzVNcxZf2vOMJVddFGKF7NOjtWoRQ8kxljyauPDFckUu1gCMqvq20oGQVGGvsx4WEKcjMzAx%2FqAl%2FsNX9lBRx1KMo1XtMfn0x7eH015CFuGmbsp3cXoa%2F5W5e6zlq%2BQcLhX0tOfNVJ%2BPJs%2BB7kazyqrvp%2BbD3AYada3AfP738GuNhY3WU8LcmkFaGnn76FXgs5Qtf%2BVKTB4O0bPg0mzvManmrEZY%2F1q73Ovf9NSu3snYO2mC3x7WK%2BXHrpVZypPy9%2BfpNYj4sqoKM2Y5FGPWhAcKvWbvdBrcX9t0%2FRooot0Jv8bktEgzVg4OFcJizzyomeMeXVdxTUQYqcdosyIiawEXcJ%2FDjQNyIOJ%2FcrD1saHdKW8844jCJDZqZCttR6VFhT0Julqtxkfn9lCaWKbIGQ5WGh17J3mFPm7IC2SilmVQBZM41%2BziFSgXErZiNGKhHGgBSa%2FcgqfHqA%2BNwVa7ys9HFDDwGBEkHaKHHb3JZ6BvXZZS%2FE0iKjttDU3vIHT%2BGKW0OVW1wmcN9w94YFvz6B41oDKoToxBUy6HtNYf1aGzON6y5vjbX7ULBt0r9FTZKMHVzHxap3LkYzGvXMVnzDGn0EDYnxjTV%2FMOPKq8QGOqUBl1y1RdvZxmj%2FW06GAnbOu1zwuOy%2Fauxfr%2BDrUd3PF%2BDfiQ5qvoMdjwIzLR3IdOjfJw6t3FtmUQDs820wfMkAmSL8b3H16lEU%2BJf0ntJgqgRUnNWJhcQFvTNbw%2B4GUYmFcjs8fhvn9Cbl0ErmngpZ8V3vRVX0qHcZuMMdlTHu4hqMgzdKRUbfiRs5WEt%2FEQD%2BG7dDh6uec3eGLtgC0kvTJ%2FezCpLM&X-Amz-Signature=3b502859e027e402244fa0c3a651374d1b5ad666b7a268dac8e3e4db70596c0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
