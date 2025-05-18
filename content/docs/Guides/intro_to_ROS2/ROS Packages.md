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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WL2UDII%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHy%2FIcWyxjWQwMKkW5kgNMlKZOSYqreMXBan3QDUV1HnAiEAlJlG%2FORatPG23%2FUEJjWmB8daonQbkFRHvFm9v7pmyTkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJnnWA17%2Bzdp57WP8CrcAxggXHUBTi1udtLWygzTAqtQxEPkaRFSWubqDIsWu6EGS%2BPqBo%2F94UdaGH1XpDQZnwQoAhmDkv3BTZWrAX5G0hFbb9tBQFXYWWc5LG4CtxRnET4PKeCvZ9xI39zvJQ7VTVYvheELD5jaU%2B%2Bu4Q5srTVo2pfdxMk4fxqSaZqvGYkg%2FhkfpnAfr5MyMJ%2B8aqlE0Yk6L%2FFgEuX6kr62%2FVOLWI6gOJQsehMEGgWE7LgfMcqcKVyUdOQHJ6yccxiJYKoZQfWogXJ7XOWRhxjzIrQVXFDEUGhsrllg5oqd%2Bk6xZOYznnH%2BPYDWCrrIwe7Hg8JFSq4fV6lQpfRsFTSbrgVP7mCGovaeG75kDRaq767NS5eQMZ6s9%2BlfBETawwmdCdRw3LZWvMFnji46Oj%2F6cBwbS%2BH6TMbqRKqIghQOg8ZJgZa5eKG60U86gaT5GefHx6kJkrng0BChJvHvlGUpl5%2Fmq8YoK0gKcskMyu%2F0m8rzBanPHapHwWmI%2FIfd%2BpOvXG4s2tG5ww0tWy9VYLv0otFOBV6P%2Br0evD6TLxPHEbKCJuoZGbbEKmzgwR2mpmZgzubd5o1%2BBNbNn6XFMWo%2FxAkhjagEeFQJUCWyRVA4Mgh%2FX80PSeTJLeOONAhrR7BRMP%2F2pcEGOqUBcPt7gVIHkubRKq1%2FRmlvGpfoujsfH2tUnapSpKWT8%2Fqk2WMiw3HLsGd9Fh5lPb%2FKaX8NL1z7FHhkXo6CDPFahySAcYhlK7ocCDxgpIA2PwTwztaKgJGGGZy30xq0Uorj0KP30fu%2F%2FNIEVABUPp1iwFZbRn5nURS9bjE11Mosuq2kv7ufeYEKB2hJHOVCOMwaoxiUSGILzPLB76fk8TzkFM2i1cuH&X-Amz-Signature=511457541b062a4266ae098d7e1c4d10cbbc79d39d299a110ed19f23daf732fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WL2UDII%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHy%2FIcWyxjWQwMKkW5kgNMlKZOSYqreMXBan3QDUV1HnAiEAlJlG%2FORatPG23%2FUEJjWmB8daonQbkFRHvFm9v7pmyTkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJnnWA17%2Bzdp57WP8CrcAxggXHUBTi1udtLWygzTAqtQxEPkaRFSWubqDIsWu6EGS%2BPqBo%2F94UdaGH1XpDQZnwQoAhmDkv3BTZWrAX5G0hFbb9tBQFXYWWc5LG4CtxRnET4PKeCvZ9xI39zvJQ7VTVYvheELD5jaU%2B%2Bu4Q5srTVo2pfdxMk4fxqSaZqvGYkg%2FhkfpnAfr5MyMJ%2B8aqlE0Yk6L%2FFgEuX6kr62%2FVOLWI6gOJQsehMEGgWE7LgfMcqcKVyUdOQHJ6yccxiJYKoZQfWogXJ7XOWRhxjzIrQVXFDEUGhsrllg5oqd%2Bk6xZOYznnH%2BPYDWCrrIwe7Hg8JFSq4fV6lQpfRsFTSbrgVP7mCGovaeG75kDRaq767NS5eQMZ6s9%2BlfBETawwmdCdRw3LZWvMFnji46Oj%2F6cBwbS%2BH6TMbqRKqIghQOg8ZJgZa5eKG60U86gaT5GefHx6kJkrng0BChJvHvlGUpl5%2Fmq8YoK0gKcskMyu%2F0m8rzBanPHapHwWmI%2FIfd%2BpOvXG4s2tG5ww0tWy9VYLv0otFOBV6P%2Br0evD6TLxPHEbKCJuoZGbbEKmzgwR2mpmZgzubd5o1%2BBNbNn6XFMWo%2FxAkhjagEeFQJUCWyRVA4Mgh%2FX80PSeTJLeOONAhrR7BRMP%2F2pcEGOqUBcPt7gVIHkubRKq1%2FRmlvGpfoujsfH2tUnapSpKWT8%2Fqk2WMiw3HLsGd9Fh5lPb%2FKaX8NL1z7FHhkXo6CDPFahySAcYhlK7ocCDxgpIA2PwTwztaKgJGGGZy30xq0Uorj0KP30fu%2F%2FNIEVABUPp1iwFZbRn5nURS9bjE11Mosuq2kv7ufeYEKB2hJHOVCOMwaoxiUSGILzPLB76fk8TzkFM2i1cuH&X-Amz-Signature=8175ceab33094c888ee288ddc75b2dba22f334c378519a8a4df8c29184166a78&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WL2UDII%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHy%2FIcWyxjWQwMKkW5kgNMlKZOSYqreMXBan3QDUV1HnAiEAlJlG%2FORatPG23%2FUEJjWmB8daonQbkFRHvFm9v7pmyTkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJnnWA17%2Bzdp57WP8CrcAxggXHUBTi1udtLWygzTAqtQxEPkaRFSWubqDIsWu6EGS%2BPqBo%2F94UdaGH1XpDQZnwQoAhmDkv3BTZWrAX5G0hFbb9tBQFXYWWc5LG4CtxRnET4PKeCvZ9xI39zvJQ7VTVYvheELD5jaU%2B%2Bu4Q5srTVo2pfdxMk4fxqSaZqvGYkg%2FhkfpnAfr5MyMJ%2B8aqlE0Yk6L%2FFgEuX6kr62%2FVOLWI6gOJQsehMEGgWE7LgfMcqcKVyUdOQHJ6yccxiJYKoZQfWogXJ7XOWRhxjzIrQVXFDEUGhsrllg5oqd%2Bk6xZOYznnH%2BPYDWCrrIwe7Hg8JFSq4fV6lQpfRsFTSbrgVP7mCGovaeG75kDRaq767NS5eQMZ6s9%2BlfBETawwmdCdRw3LZWvMFnji46Oj%2F6cBwbS%2BH6TMbqRKqIghQOg8ZJgZa5eKG60U86gaT5GefHx6kJkrng0BChJvHvlGUpl5%2Fmq8YoK0gKcskMyu%2F0m8rzBanPHapHwWmI%2FIfd%2BpOvXG4s2tG5ww0tWy9VYLv0otFOBV6P%2Br0evD6TLxPHEbKCJuoZGbbEKmzgwR2mpmZgzubd5o1%2BBNbNn6XFMWo%2FxAkhjagEeFQJUCWyRVA4Mgh%2FX80PSeTJLeOONAhrR7BRMP%2F2pcEGOqUBcPt7gVIHkubRKq1%2FRmlvGpfoujsfH2tUnapSpKWT8%2Fqk2WMiw3HLsGd9Fh5lPb%2FKaX8NL1z7FHhkXo6CDPFahySAcYhlK7ocCDxgpIA2PwTwztaKgJGGGZy30xq0Uorj0KP30fu%2F%2FNIEVABUPp1iwFZbRn5nURS9bjE11Mosuq2kv7ufeYEKB2hJHOVCOMwaoxiUSGILzPLB76fk8TzkFM2i1cuH&X-Amz-Signature=e9e7e97962ac418a9817bc406930f22b9884fb98497be00b17a75d04b6b1111b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WL2UDII%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHy%2FIcWyxjWQwMKkW5kgNMlKZOSYqreMXBan3QDUV1HnAiEAlJlG%2FORatPG23%2FUEJjWmB8daonQbkFRHvFm9v7pmyTkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJnnWA17%2Bzdp57WP8CrcAxggXHUBTi1udtLWygzTAqtQxEPkaRFSWubqDIsWu6EGS%2BPqBo%2F94UdaGH1XpDQZnwQoAhmDkv3BTZWrAX5G0hFbb9tBQFXYWWc5LG4CtxRnET4PKeCvZ9xI39zvJQ7VTVYvheELD5jaU%2B%2Bu4Q5srTVo2pfdxMk4fxqSaZqvGYkg%2FhkfpnAfr5MyMJ%2B8aqlE0Yk6L%2FFgEuX6kr62%2FVOLWI6gOJQsehMEGgWE7LgfMcqcKVyUdOQHJ6yccxiJYKoZQfWogXJ7XOWRhxjzIrQVXFDEUGhsrllg5oqd%2Bk6xZOYznnH%2BPYDWCrrIwe7Hg8JFSq4fV6lQpfRsFTSbrgVP7mCGovaeG75kDRaq767NS5eQMZ6s9%2BlfBETawwmdCdRw3LZWvMFnji46Oj%2F6cBwbS%2BH6TMbqRKqIghQOg8ZJgZa5eKG60U86gaT5GefHx6kJkrng0BChJvHvlGUpl5%2Fmq8YoK0gKcskMyu%2F0m8rzBanPHapHwWmI%2FIfd%2BpOvXG4s2tG5ww0tWy9VYLv0otFOBV6P%2Br0evD6TLxPHEbKCJuoZGbbEKmzgwR2mpmZgzubd5o1%2BBNbNn6XFMWo%2FxAkhjagEeFQJUCWyRVA4Mgh%2FX80PSeTJLeOONAhrR7BRMP%2F2pcEGOqUBcPt7gVIHkubRKq1%2FRmlvGpfoujsfH2tUnapSpKWT8%2Fqk2WMiw3HLsGd9Fh5lPb%2FKaX8NL1z7FHhkXo6CDPFahySAcYhlK7ocCDxgpIA2PwTwztaKgJGGGZy30xq0Uorj0KP30fu%2F%2FNIEVABUPp1iwFZbRn5nURS9bjE11Mosuq2kv7ufeYEKB2hJHOVCOMwaoxiUSGILzPLB76fk8TzkFM2i1cuH&X-Amz-Signature=69b5d0ecad6da77cc56ac4eb516a55b67bebc9267befb6f6f395ba4b02fcea6d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WL2UDII%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHy%2FIcWyxjWQwMKkW5kgNMlKZOSYqreMXBan3QDUV1HnAiEAlJlG%2FORatPG23%2FUEJjWmB8daonQbkFRHvFm9v7pmyTkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJnnWA17%2Bzdp57WP8CrcAxggXHUBTi1udtLWygzTAqtQxEPkaRFSWubqDIsWu6EGS%2BPqBo%2F94UdaGH1XpDQZnwQoAhmDkv3BTZWrAX5G0hFbb9tBQFXYWWc5LG4CtxRnET4PKeCvZ9xI39zvJQ7VTVYvheELD5jaU%2B%2Bu4Q5srTVo2pfdxMk4fxqSaZqvGYkg%2FhkfpnAfr5MyMJ%2B8aqlE0Yk6L%2FFgEuX6kr62%2FVOLWI6gOJQsehMEGgWE7LgfMcqcKVyUdOQHJ6yccxiJYKoZQfWogXJ7XOWRhxjzIrQVXFDEUGhsrllg5oqd%2Bk6xZOYznnH%2BPYDWCrrIwe7Hg8JFSq4fV6lQpfRsFTSbrgVP7mCGovaeG75kDRaq767NS5eQMZ6s9%2BlfBETawwmdCdRw3LZWvMFnji46Oj%2F6cBwbS%2BH6TMbqRKqIghQOg8ZJgZa5eKG60U86gaT5GefHx6kJkrng0BChJvHvlGUpl5%2Fmq8YoK0gKcskMyu%2F0m8rzBanPHapHwWmI%2FIfd%2BpOvXG4s2tG5ww0tWy9VYLv0otFOBV6P%2Br0evD6TLxPHEbKCJuoZGbbEKmzgwR2mpmZgzubd5o1%2BBNbNn6XFMWo%2FxAkhjagEeFQJUCWyRVA4Mgh%2FX80PSeTJLeOONAhrR7BRMP%2F2pcEGOqUBcPt7gVIHkubRKq1%2FRmlvGpfoujsfH2tUnapSpKWT8%2Fqk2WMiw3HLsGd9Fh5lPb%2FKaX8NL1z7FHhkXo6CDPFahySAcYhlK7ocCDxgpIA2PwTwztaKgJGGGZy30xq0Uorj0KP30fu%2F%2FNIEVABUPp1iwFZbRn5nURS9bjE11Mosuq2kv7ufeYEKB2hJHOVCOMwaoxiUSGILzPLB76fk8TzkFM2i1cuH&X-Amz-Signature=9ba7c85edd1a90eb61915ac542bc3de2ea869801aa466aae43065044d2f4543f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WL2UDII%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHy%2FIcWyxjWQwMKkW5kgNMlKZOSYqreMXBan3QDUV1HnAiEAlJlG%2FORatPG23%2FUEJjWmB8daonQbkFRHvFm9v7pmyTkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJnnWA17%2Bzdp57WP8CrcAxggXHUBTi1udtLWygzTAqtQxEPkaRFSWubqDIsWu6EGS%2BPqBo%2F94UdaGH1XpDQZnwQoAhmDkv3BTZWrAX5G0hFbb9tBQFXYWWc5LG4CtxRnET4PKeCvZ9xI39zvJQ7VTVYvheELD5jaU%2B%2Bu4Q5srTVo2pfdxMk4fxqSaZqvGYkg%2FhkfpnAfr5MyMJ%2B8aqlE0Yk6L%2FFgEuX6kr62%2FVOLWI6gOJQsehMEGgWE7LgfMcqcKVyUdOQHJ6yccxiJYKoZQfWogXJ7XOWRhxjzIrQVXFDEUGhsrllg5oqd%2Bk6xZOYznnH%2BPYDWCrrIwe7Hg8JFSq4fV6lQpfRsFTSbrgVP7mCGovaeG75kDRaq767NS5eQMZ6s9%2BlfBETawwmdCdRw3LZWvMFnji46Oj%2F6cBwbS%2BH6TMbqRKqIghQOg8ZJgZa5eKG60U86gaT5GefHx6kJkrng0BChJvHvlGUpl5%2Fmq8YoK0gKcskMyu%2F0m8rzBanPHapHwWmI%2FIfd%2BpOvXG4s2tG5ww0tWy9VYLv0otFOBV6P%2Br0evD6TLxPHEbKCJuoZGbbEKmzgwR2mpmZgzubd5o1%2BBNbNn6XFMWo%2FxAkhjagEeFQJUCWyRVA4Mgh%2FX80PSeTJLeOONAhrR7BRMP%2F2pcEGOqUBcPt7gVIHkubRKq1%2FRmlvGpfoujsfH2tUnapSpKWT8%2Fqk2WMiw3HLsGd9Fh5lPb%2FKaX8NL1z7FHhkXo6CDPFahySAcYhlK7ocCDxgpIA2PwTwztaKgJGGGZy30xq0Uorj0KP30fu%2F%2FNIEVABUPp1iwFZbRn5nURS9bjE11Mosuq2kv7ufeYEKB2hJHOVCOMwaoxiUSGILzPLB76fk8TzkFM2i1cuH&X-Amz-Signature=549fa08f2d61fd7776487292db6bd89251b234fd910bf006a43d5a603fdc62c4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WL2UDII%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHy%2FIcWyxjWQwMKkW5kgNMlKZOSYqreMXBan3QDUV1HnAiEAlJlG%2FORatPG23%2FUEJjWmB8daonQbkFRHvFm9v7pmyTkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJnnWA17%2Bzdp57WP8CrcAxggXHUBTi1udtLWygzTAqtQxEPkaRFSWubqDIsWu6EGS%2BPqBo%2F94UdaGH1XpDQZnwQoAhmDkv3BTZWrAX5G0hFbb9tBQFXYWWc5LG4CtxRnET4PKeCvZ9xI39zvJQ7VTVYvheELD5jaU%2B%2Bu4Q5srTVo2pfdxMk4fxqSaZqvGYkg%2FhkfpnAfr5MyMJ%2B8aqlE0Yk6L%2FFgEuX6kr62%2FVOLWI6gOJQsehMEGgWE7LgfMcqcKVyUdOQHJ6yccxiJYKoZQfWogXJ7XOWRhxjzIrQVXFDEUGhsrllg5oqd%2Bk6xZOYznnH%2BPYDWCrrIwe7Hg8JFSq4fV6lQpfRsFTSbrgVP7mCGovaeG75kDRaq767NS5eQMZ6s9%2BlfBETawwmdCdRw3LZWvMFnji46Oj%2F6cBwbS%2BH6TMbqRKqIghQOg8ZJgZa5eKG60U86gaT5GefHx6kJkrng0BChJvHvlGUpl5%2Fmq8YoK0gKcskMyu%2F0m8rzBanPHapHwWmI%2FIfd%2BpOvXG4s2tG5ww0tWy9VYLv0otFOBV6P%2Br0evD6TLxPHEbKCJuoZGbbEKmzgwR2mpmZgzubd5o1%2BBNbNn6XFMWo%2FxAkhjagEeFQJUCWyRVA4Mgh%2FX80PSeTJLeOONAhrR7BRMP%2F2pcEGOqUBcPt7gVIHkubRKq1%2FRmlvGpfoujsfH2tUnapSpKWT8%2Fqk2WMiw3HLsGd9Fh5lPb%2FKaX8NL1z7FHhkXo6CDPFahySAcYhlK7ocCDxgpIA2PwTwztaKgJGGGZy30xq0Uorj0KP30fu%2F%2FNIEVABUPp1iwFZbRn5nURS9bjE11Mosuq2kv7ufeYEKB2hJHOVCOMwaoxiUSGILzPLB76fk8TzkFM2i1cuH&X-Amz-Signature=7a38817b7a0bbf26312cfb1d1263a9416f83a34a3453481b64dd4bdbd82aec63&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
