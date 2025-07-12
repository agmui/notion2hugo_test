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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXTU67W%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvF2KOX8cjyQLSQD8b5xKOPfnCkvcJIosIwPIbk%2F%2FzHQIhAO6cmhRbRgclsNNmK%2F9gEehefizHq69u1aiNDjVgCX87KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeJbry41iLHjZy10Uq3APUSvOf8unpzsvAANuf%2BKJGWbN3rgpju9Sl%2B4RERssLGEELjm3c6PFh1MBsvoS3qH4ik9ARAVsaIQmOH8Kr93A8xY7VhTyl7HYgKTu8X%2BWhkdYX6TwE9z38uyQUFaihu6DdFbOHctUVXwDg1OugfYL5oWDV2YsU7rz6cJbUZnCLeUFtYbDvhAByPk1LeOjvd8RdV2NFJtRFRxd%2FLv8bpJrj%2Bi7Zk3wUA88k%2FmXsY4i%2BfwG2AYczJakPvH9MgiRY0gyaB5pTt5EPedPRn%2FAj7Ut%2FoWCec1aUevKPyw5UT1rlv7LvgkprOfjFdymKVtLMUIdTF1uSCFhfJdrUKNI1XQGlMd%2BTMuS%2FF1thTwhBx361bVSGH6wkreFdDGZ2%2BtPR%2BZwsKt7Q7%2F2rrUxHm%2BGryw7IMFMLP4ysz4%2BjIbkXlmaZOePqyUOdhX51RRl5eF2jd0FiIBpKNDWEq8Ujn0v0ddxC3At20HgbeNJZNJJCaqT9rW%2BwKCfdRlOPstn41LI4ZqNyzMKdcW2B4RJb4mIks%2BXvYyybdCoqLySRakxElZ8L8wpt7qm3nV6YZcrTfxLMtoXmKLK1ywnYinUVySw042UAg78NIHKU%2Bw%2BNb%2F5Ic%2Bm56mDzcZDvm4piOpRpHTC5z8fDBjqkAXWKt2rokMv6Dxmnkb7ZGvu0ryzvBGQwPn7yLV1PULMDBtXkkhklf9wfkaSNnUDvPlhaLal%2F596128sIgtyu27yALGGgrEi6DBWvLL4WI06YqtBMYRRfaASShYyRqHe9SQ0hXR0JIAtFlxF%2Fy6Ce4BPt%2B4Uu0OoeYmtJ2iWEgHSo%2FwW%2BuG%2FOb%2FDksgIZmrMZ4gr5bOWiRb5v6gtQ5wq%2BE9t4AqKk&X-Amz-Signature=1d2694e1b537839e3b43f714313aad12688cc0c21606de291cd06aba81c4f59b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXTU67W%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvF2KOX8cjyQLSQD8b5xKOPfnCkvcJIosIwPIbk%2F%2FzHQIhAO6cmhRbRgclsNNmK%2F9gEehefizHq69u1aiNDjVgCX87KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeJbry41iLHjZy10Uq3APUSvOf8unpzsvAANuf%2BKJGWbN3rgpju9Sl%2B4RERssLGEELjm3c6PFh1MBsvoS3qH4ik9ARAVsaIQmOH8Kr93A8xY7VhTyl7HYgKTu8X%2BWhkdYX6TwE9z38uyQUFaihu6DdFbOHctUVXwDg1OugfYL5oWDV2YsU7rz6cJbUZnCLeUFtYbDvhAByPk1LeOjvd8RdV2NFJtRFRxd%2FLv8bpJrj%2Bi7Zk3wUA88k%2FmXsY4i%2BfwG2AYczJakPvH9MgiRY0gyaB5pTt5EPedPRn%2FAj7Ut%2FoWCec1aUevKPyw5UT1rlv7LvgkprOfjFdymKVtLMUIdTF1uSCFhfJdrUKNI1XQGlMd%2BTMuS%2FF1thTwhBx361bVSGH6wkreFdDGZ2%2BtPR%2BZwsKt7Q7%2F2rrUxHm%2BGryw7IMFMLP4ysz4%2BjIbkXlmaZOePqyUOdhX51RRl5eF2jd0FiIBpKNDWEq8Ujn0v0ddxC3At20HgbeNJZNJJCaqT9rW%2BwKCfdRlOPstn41LI4ZqNyzMKdcW2B4RJb4mIks%2BXvYyybdCoqLySRakxElZ8L8wpt7qm3nV6YZcrTfxLMtoXmKLK1ywnYinUVySw042UAg78NIHKU%2Bw%2BNb%2F5Ic%2Bm56mDzcZDvm4piOpRpHTC5z8fDBjqkAXWKt2rokMv6Dxmnkb7ZGvu0ryzvBGQwPn7yLV1PULMDBtXkkhklf9wfkaSNnUDvPlhaLal%2F596128sIgtyu27yALGGgrEi6DBWvLL4WI06YqtBMYRRfaASShYyRqHe9SQ0hXR0JIAtFlxF%2Fy6Ce4BPt%2B4Uu0OoeYmtJ2iWEgHSo%2FwW%2BuG%2FOb%2FDksgIZmrMZ4gr5bOWiRb5v6gtQ5wq%2BE9t4AqKk&X-Amz-Signature=51d177a98dfbbd77bdc5e6b2ff3efcf582a0bbe9e6f7f4a2df2d05179e51f93a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXTU67W%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvF2KOX8cjyQLSQD8b5xKOPfnCkvcJIosIwPIbk%2F%2FzHQIhAO6cmhRbRgclsNNmK%2F9gEehefizHq69u1aiNDjVgCX87KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeJbry41iLHjZy10Uq3APUSvOf8unpzsvAANuf%2BKJGWbN3rgpju9Sl%2B4RERssLGEELjm3c6PFh1MBsvoS3qH4ik9ARAVsaIQmOH8Kr93A8xY7VhTyl7HYgKTu8X%2BWhkdYX6TwE9z38uyQUFaihu6DdFbOHctUVXwDg1OugfYL5oWDV2YsU7rz6cJbUZnCLeUFtYbDvhAByPk1LeOjvd8RdV2NFJtRFRxd%2FLv8bpJrj%2Bi7Zk3wUA88k%2FmXsY4i%2BfwG2AYczJakPvH9MgiRY0gyaB5pTt5EPedPRn%2FAj7Ut%2FoWCec1aUevKPyw5UT1rlv7LvgkprOfjFdymKVtLMUIdTF1uSCFhfJdrUKNI1XQGlMd%2BTMuS%2FF1thTwhBx361bVSGH6wkreFdDGZ2%2BtPR%2BZwsKt7Q7%2F2rrUxHm%2BGryw7IMFMLP4ysz4%2BjIbkXlmaZOePqyUOdhX51RRl5eF2jd0FiIBpKNDWEq8Ujn0v0ddxC3At20HgbeNJZNJJCaqT9rW%2BwKCfdRlOPstn41LI4ZqNyzMKdcW2B4RJb4mIks%2BXvYyybdCoqLySRakxElZ8L8wpt7qm3nV6YZcrTfxLMtoXmKLK1ywnYinUVySw042UAg78NIHKU%2Bw%2BNb%2F5Ic%2Bm56mDzcZDvm4piOpRpHTC5z8fDBjqkAXWKt2rokMv6Dxmnkb7ZGvu0ryzvBGQwPn7yLV1PULMDBtXkkhklf9wfkaSNnUDvPlhaLal%2F596128sIgtyu27yALGGgrEi6DBWvLL4WI06YqtBMYRRfaASShYyRqHe9SQ0hXR0JIAtFlxF%2Fy6Ce4BPt%2B4Uu0OoeYmtJ2iWEgHSo%2FwW%2BuG%2FOb%2FDksgIZmrMZ4gr5bOWiRb5v6gtQ5wq%2BE9t4AqKk&X-Amz-Signature=9725ae57512f9b11760440bb9f7152146f2f3f530f580b77c7b92c848ed2ed77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXTU67W%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvF2KOX8cjyQLSQD8b5xKOPfnCkvcJIosIwPIbk%2F%2FzHQIhAO6cmhRbRgclsNNmK%2F9gEehefizHq69u1aiNDjVgCX87KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeJbry41iLHjZy10Uq3APUSvOf8unpzsvAANuf%2BKJGWbN3rgpju9Sl%2B4RERssLGEELjm3c6PFh1MBsvoS3qH4ik9ARAVsaIQmOH8Kr93A8xY7VhTyl7HYgKTu8X%2BWhkdYX6TwE9z38uyQUFaihu6DdFbOHctUVXwDg1OugfYL5oWDV2YsU7rz6cJbUZnCLeUFtYbDvhAByPk1LeOjvd8RdV2NFJtRFRxd%2FLv8bpJrj%2Bi7Zk3wUA88k%2FmXsY4i%2BfwG2AYczJakPvH9MgiRY0gyaB5pTt5EPedPRn%2FAj7Ut%2FoWCec1aUevKPyw5UT1rlv7LvgkprOfjFdymKVtLMUIdTF1uSCFhfJdrUKNI1XQGlMd%2BTMuS%2FF1thTwhBx361bVSGH6wkreFdDGZ2%2BtPR%2BZwsKt7Q7%2F2rrUxHm%2BGryw7IMFMLP4ysz4%2BjIbkXlmaZOePqyUOdhX51RRl5eF2jd0FiIBpKNDWEq8Ujn0v0ddxC3At20HgbeNJZNJJCaqT9rW%2BwKCfdRlOPstn41LI4ZqNyzMKdcW2B4RJb4mIks%2BXvYyybdCoqLySRakxElZ8L8wpt7qm3nV6YZcrTfxLMtoXmKLK1ywnYinUVySw042UAg78NIHKU%2Bw%2BNb%2F5Ic%2Bm56mDzcZDvm4piOpRpHTC5z8fDBjqkAXWKt2rokMv6Dxmnkb7ZGvu0ryzvBGQwPn7yLV1PULMDBtXkkhklf9wfkaSNnUDvPlhaLal%2F596128sIgtyu27yALGGgrEi6DBWvLL4WI06YqtBMYRRfaASShYyRqHe9SQ0hXR0JIAtFlxF%2Fy6Ce4BPt%2B4Uu0OoeYmtJ2iWEgHSo%2FwW%2BuG%2FOb%2FDksgIZmrMZ4gr5bOWiRb5v6gtQ5wq%2BE9t4AqKk&X-Amz-Signature=0b814991bb92e03bf57660bc4f11f75c555eb7daaa6467d22d62ecd9c5429794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXTU67W%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvF2KOX8cjyQLSQD8b5xKOPfnCkvcJIosIwPIbk%2F%2FzHQIhAO6cmhRbRgclsNNmK%2F9gEehefizHq69u1aiNDjVgCX87KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeJbry41iLHjZy10Uq3APUSvOf8unpzsvAANuf%2BKJGWbN3rgpju9Sl%2B4RERssLGEELjm3c6PFh1MBsvoS3qH4ik9ARAVsaIQmOH8Kr93A8xY7VhTyl7HYgKTu8X%2BWhkdYX6TwE9z38uyQUFaihu6DdFbOHctUVXwDg1OugfYL5oWDV2YsU7rz6cJbUZnCLeUFtYbDvhAByPk1LeOjvd8RdV2NFJtRFRxd%2FLv8bpJrj%2Bi7Zk3wUA88k%2FmXsY4i%2BfwG2AYczJakPvH9MgiRY0gyaB5pTt5EPedPRn%2FAj7Ut%2FoWCec1aUevKPyw5UT1rlv7LvgkprOfjFdymKVtLMUIdTF1uSCFhfJdrUKNI1XQGlMd%2BTMuS%2FF1thTwhBx361bVSGH6wkreFdDGZ2%2BtPR%2BZwsKt7Q7%2F2rrUxHm%2BGryw7IMFMLP4ysz4%2BjIbkXlmaZOePqyUOdhX51RRl5eF2jd0FiIBpKNDWEq8Ujn0v0ddxC3At20HgbeNJZNJJCaqT9rW%2BwKCfdRlOPstn41LI4ZqNyzMKdcW2B4RJb4mIks%2BXvYyybdCoqLySRakxElZ8L8wpt7qm3nV6YZcrTfxLMtoXmKLK1ywnYinUVySw042UAg78NIHKU%2Bw%2BNb%2F5Ic%2Bm56mDzcZDvm4piOpRpHTC5z8fDBjqkAXWKt2rokMv6Dxmnkb7ZGvu0ryzvBGQwPn7yLV1PULMDBtXkkhklf9wfkaSNnUDvPlhaLal%2F596128sIgtyu27yALGGgrEi6DBWvLL4WI06YqtBMYRRfaASShYyRqHe9SQ0hXR0JIAtFlxF%2Fy6Ce4BPt%2B4Uu0OoeYmtJ2iWEgHSo%2FwW%2BuG%2FOb%2FDksgIZmrMZ4gr5bOWiRb5v6gtQ5wq%2BE9t4AqKk&X-Amz-Signature=d5f7c24260679edd8466b27ffafcc9706b8bdc971ef373c81759a6701ccf692b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXTU67W%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvF2KOX8cjyQLSQD8b5xKOPfnCkvcJIosIwPIbk%2F%2FzHQIhAO6cmhRbRgclsNNmK%2F9gEehefizHq69u1aiNDjVgCX87KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeJbry41iLHjZy10Uq3APUSvOf8unpzsvAANuf%2BKJGWbN3rgpju9Sl%2B4RERssLGEELjm3c6PFh1MBsvoS3qH4ik9ARAVsaIQmOH8Kr93A8xY7VhTyl7HYgKTu8X%2BWhkdYX6TwE9z38uyQUFaihu6DdFbOHctUVXwDg1OugfYL5oWDV2YsU7rz6cJbUZnCLeUFtYbDvhAByPk1LeOjvd8RdV2NFJtRFRxd%2FLv8bpJrj%2Bi7Zk3wUA88k%2FmXsY4i%2BfwG2AYczJakPvH9MgiRY0gyaB5pTt5EPedPRn%2FAj7Ut%2FoWCec1aUevKPyw5UT1rlv7LvgkprOfjFdymKVtLMUIdTF1uSCFhfJdrUKNI1XQGlMd%2BTMuS%2FF1thTwhBx361bVSGH6wkreFdDGZ2%2BtPR%2BZwsKt7Q7%2F2rrUxHm%2BGryw7IMFMLP4ysz4%2BjIbkXlmaZOePqyUOdhX51RRl5eF2jd0FiIBpKNDWEq8Ujn0v0ddxC3At20HgbeNJZNJJCaqT9rW%2BwKCfdRlOPstn41LI4ZqNyzMKdcW2B4RJb4mIks%2BXvYyybdCoqLySRakxElZ8L8wpt7qm3nV6YZcrTfxLMtoXmKLK1ywnYinUVySw042UAg78NIHKU%2Bw%2BNb%2F5Ic%2Bm56mDzcZDvm4piOpRpHTC5z8fDBjqkAXWKt2rokMv6Dxmnkb7ZGvu0ryzvBGQwPn7yLV1PULMDBtXkkhklf9wfkaSNnUDvPlhaLal%2F596128sIgtyu27yALGGgrEi6DBWvLL4WI06YqtBMYRRfaASShYyRqHe9SQ0hXR0JIAtFlxF%2Fy6Ce4BPt%2B4Uu0OoeYmtJ2iWEgHSo%2FwW%2BuG%2FOb%2FDksgIZmrMZ4gr5bOWiRb5v6gtQ5wq%2BE9t4AqKk&X-Amz-Signature=6b8f940a2558d96c06104b3e12fb059749b3c40ff3fcc07346cc2ec529c5a7e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXTU67W%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvF2KOX8cjyQLSQD8b5xKOPfnCkvcJIosIwPIbk%2F%2FzHQIhAO6cmhRbRgclsNNmK%2F9gEehefizHq69u1aiNDjVgCX87KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeJbry41iLHjZy10Uq3APUSvOf8unpzsvAANuf%2BKJGWbN3rgpju9Sl%2B4RERssLGEELjm3c6PFh1MBsvoS3qH4ik9ARAVsaIQmOH8Kr93A8xY7VhTyl7HYgKTu8X%2BWhkdYX6TwE9z38uyQUFaihu6DdFbOHctUVXwDg1OugfYL5oWDV2YsU7rz6cJbUZnCLeUFtYbDvhAByPk1LeOjvd8RdV2NFJtRFRxd%2FLv8bpJrj%2Bi7Zk3wUA88k%2FmXsY4i%2BfwG2AYczJakPvH9MgiRY0gyaB5pTt5EPedPRn%2FAj7Ut%2FoWCec1aUevKPyw5UT1rlv7LvgkprOfjFdymKVtLMUIdTF1uSCFhfJdrUKNI1XQGlMd%2BTMuS%2FF1thTwhBx361bVSGH6wkreFdDGZ2%2BtPR%2BZwsKt7Q7%2F2rrUxHm%2BGryw7IMFMLP4ysz4%2BjIbkXlmaZOePqyUOdhX51RRl5eF2jd0FiIBpKNDWEq8Ujn0v0ddxC3At20HgbeNJZNJJCaqT9rW%2BwKCfdRlOPstn41LI4ZqNyzMKdcW2B4RJb4mIks%2BXvYyybdCoqLySRakxElZ8L8wpt7qm3nV6YZcrTfxLMtoXmKLK1ywnYinUVySw042UAg78NIHKU%2Bw%2BNb%2F5Ic%2Bm56mDzcZDvm4piOpRpHTC5z8fDBjqkAXWKt2rokMv6Dxmnkb7ZGvu0ryzvBGQwPn7yLV1PULMDBtXkkhklf9wfkaSNnUDvPlhaLal%2F596128sIgtyu27yALGGgrEi6DBWvLL4WI06YqtBMYRRfaASShYyRqHe9SQ0hXR0JIAtFlxF%2Fy6Ce4BPt%2B4Uu0OoeYmtJ2iWEgHSo%2FwW%2BuG%2FOb%2FDksgIZmrMZ4gr5bOWiRb5v6gtQ5wq%2BE9t4AqKk&X-Amz-Signature=7430935fbf04504513739733c95d1a08906975d41fc0f57c2c7d3a4ab697c216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
