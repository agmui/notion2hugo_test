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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHYKTSI2%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpppwjGvOX8nGlzY1rIigF9Yp9TsMeIKa5BCe83Zxn7AiEA4ucNSkEy3e98GEOhQ6waHFw77f%2Fds66srLogdzQ0o8Qq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOrCalmL3%2FqJPjgK5SrcA6Py9DjsQU%2FbZzCEOer8zXg722P1eCEMMhWSPVO7wzk8aFoqGYk1ptVw9uBVEQ0vzpqlqnkL69fmhYYUYXBWm4i9N3a2OY4WInHKiNJ2g25013WRr1Q%2BK9v96xs%2FLK%2F2AhtUIwfv3pX9hd0MRIW5jjCc1YjVUSYfymUUD%2F1cZ8VrpsPUegYMMIqs5g49Okjsh4DYNVhMy2JWxZvYU9Blhz6dNBl6%2Feanvc2uDlO4FsE5rFdpE7mO4sb0if8tD2Pq1AA10s8efkUM2xQ9fPCsLkRcALOF1K9NVYY4UIyXy5g6QCc7qYCOS4hn6OObOkR066ExO6eOhDF%2BaxEauonPKrv%2F6wWpOTkLxUrtp5hHD0xJkZdqbDVZfQkPkCKoyB9VwIe%2FfOM7RIqf36tz04mzYiUKCuJ1a2rdFxLvcYJ%2F9zI%2BPeCUs1RaRcmD53NbmdhNhw4YcxKRZdpVyYORHUFTI%2BbddawGDzhzx8eqxGQiIFEEXuTUFRbnIg1N7TGFVlza0dhSIVwMIWVRyZc87XiUWMXJzEPLEw4YgYGDGYSdafhASA7KeR8c30G1gpx5NUsu2AMag1hahn4aA7EIeVjN2%2BK%2Fl4o2B8Gtmi%2BgQn6RAxj7ux6Wjbl52fQw4F0gMIe5ob4GOqUBvjtW31DKPqXWopQpac6TrwNs4gT62LC9BotQyTiC8NwplfsyIZTc7ONdvAmxYBc9tzd9LiQiAvpj1WUspU4NDybnPLUKVUXemIUztkuDbijiGfdkj7QWRUBxmC9OPVrLspt0%2FvHmH9lDnsM4IcWKUKRji%2BxxnyY9RO1WxtsdwE8fV4Fwl7UMqWd4GCL8SpyX3i4PwtTqEDOGqH4Sogq1Ue%2FgRiYF&X-Amz-Signature=b9d9f4c032a5fc45fb2262010545e00cb5a37baeb56cfb1530d10565955bf9f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHYKTSI2%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpppwjGvOX8nGlzY1rIigF9Yp9TsMeIKa5BCe83Zxn7AiEA4ucNSkEy3e98GEOhQ6waHFw77f%2Fds66srLogdzQ0o8Qq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOrCalmL3%2FqJPjgK5SrcA6Py9DjsQU%2FbZzCEOer8zXg722P1eCEMMhWSPVO7wzk8aFoqGYk1ptVw9uBVEQ0vzpqlqnkL69fmhYYUYXBWm4i9N3a2OY4WInHKiNJ2g25013WRr1Q%2BK9v96xs%2FLK%2F2AhtUIwfv3pX9hd0MRIW5jjCc1YjVUSYfymUUD%2F1cZ8VrpsPUegYMMIqs5g49Okjsh4DYNVhMy2JWxZvYU9Blhz6dNBl6%2Feanvc2uDlO4FsE5rFdpE7mO4sb0if8tD2Pq1AA10s8efkUM2xQ9fPCsLkRcALOF1K9NVYY4UIyXy5g6QCc7qYCOS4hn6OObOkR066ExO6eOhDF%2BaxEauonPKrv%2F6wWpOTkLxUrtp5hHD0xJkZdqbDVZfQkPkCKoyB9VwIe%2FfOM7RIqf36tz04mzYiUKCuJ1a2rdFxLvcYJ%2F9zI%2BPeCUs1RaRcmD53NbmdhNhw4YcxKRZdpVyYORHUFTI%2BbddawGDzhzx8eqxGQiIFEEXuTUFRbnIg1N7TGFVlza0dhSIVwMIWVRyZc87XiUWMXJzEPLEw4YgYGDGYSdafhASA7KeR8c30G1gpx5NUsu2AMag1hahn4aA7EIeVjN2%2BK%2Fl4o2B8Gtmi%2BgQn6RAxj7ux6Wjbl52fQw4F0gMIe5ob4GOqUBvjtW31DKPqXWopQpac6TrwNs4gT62LC9BotQyTiC8NwplfsyIZTc7ONdvAmxYBc9tzd9LiQiAvpj1WUspU4NDybnPLUKVUXemIUztkuDbijiGfdkj7QWRUBxmC9OPVrLspt0%2FvHmH9lDnsM4IcWKUKRji%2BxxnyY9RO1WxtsdwE8fV4Fwl7UMqWd4GCL8SpyX3i4PwtTqEDOGqH4Sogq1Ue%2FgRiYF&X-Amz-Signature=0d15990142fbd1612f9276a3e724f48b5e1b3d4a451c502b28ae7baaa9bce472&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHYKTSI2%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpppwjGvOX8nGlzY1rIigF9Yp9TsMeIKa5BCe83Zxn7AiEA4ucNSkEy3e98GEOhQ6waHFw77f%2Fds66srLogdzQ0o8Qq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOrCalmL3%2FqJPjgK5SrcA6Py9DjsQU%2FbZzCEOer8zXg722P1eCEMMhWSPVO7wzk8aFoqGYk1ptVw9uBVEQ0vzpqlqnkL69fmhYYUYXBWm4i9N3a2OY4WInHKiNJ2g25013WRr1Q%2BK9v96xs%2FLK%2F2AhtUIwfv3pX9hd0MRIW5jjCc1YjVUSYfymUUD%2F1cZ8VrpsPUegYMMIqs5g49Okjsh4DYNVhMy2JWxZvYU9Blhz6dNBl6%2Feanvc2uDlO4FsE5rFdpE7mO4sb0if8tD2Pq1AA10s8efkUM2xQ9fPCsLkRcALOF1K9NVYY4UIyXy5g6QCc7qYCOS4hn6OObOkR066ExO6eOhDF%2BaxEauonPKrv%2F6wWpOTkLxUrtp5hHD0xJkZdqbDVZfQkPkCKoyB9VwIe%2FfOM7RIqf36tz04mzYiUKCuJ1a2rdFxLvcYJ%2F9zI%2BPeCUs1RaRcmD53NbmdhNhw4YcxKRZdpVyYORHUFTI%2BbddawGDzhzx8eqxGQiIFEEXuTUFRbnIg1N7TGFVlza0dhSIVwMIWVRyZc87XiUWMXJzEPLEw4YgYGDGYSdafhASA7KeR8c30G1gpx5NUsu2AMag1hahn4aA7EIeVjN2%2BK%2Fl4o2B8Gtmi%2BgQn6RAxj7ux6Wjbl52fQw4F0gMIe5ob4GOqUBvjtW31DKPqXWopQpac6TrwNs4gT62LC9BotQyTiC8NwplfsyIZTc7ONdvAmxYBc9tzd9LiQiAvpj1WUspU4NDybnPLUKVUXemIUztkuDbijiGfdkj7QWRUBxmC9OPVrLspt0%2FvHmH9lDnsM4IcWKUKRji%2BxxnyY9RO1WxtsdwE8fV4Fwl7UMqWd4GCL8SpyX3i4PwtTqEDOGqH4Sogq1Ue%2FgRiYF&X-Amz-Signature=49f56dba8a3f64c2134eb628234f0e2694cf484738abbc14847e2470f92dbce5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHYKTSI2%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpppwjGvOX8nGlzY1rIigF9Yp9TsMeIKa5BCe83Zxn7AiEA4ucNSkEy3e98GEOhQ6waHFw77f%2Fds66srLogdzQ0o8Qq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOrCalmL3%2FqJPjgK5SrcA6Py9DjsQU%2FbZzCEOer8zXg722P1eCEMMhWSPVO7wzk8aFoqGYk1ptVw9uBVEQ0vzpqlqnkL69fmhYYUYXBWm4i9N3a2OY4WInHKiNJ2g25013WRr1Q%2BK9v96xs%2FLK%2F2AhtUIwfv3pX9hd0MRIW5jjCc1YjVUSYfymUUD%2F1cZ8VrpsPUegYMMIqs5g49Okjsh4DYNVhMy2JWxZvYU9Blhz6dNBl6%2Feanvc2uDlO4FsE5rFdpE7mO4sb0if8tD2Pq1AA10s8efkUM2xQ9fPCsLkRcALOF1K9NVYY4UIyXy5g6QCc7qYCOS4hn6OObOkR066ExO6eOhDF%2BaxEauonPKrv%2F6wWpOTkLxUrtp5hHD0xJkZdqbDVZfQkPkCKoyB9VwIe%2FfOM7RIqf36tz04mzYiUKCuJ1a2rdFxLvcYJ%2F9zI%2BPeCUs1RaRcmD53NbmdhNhw4YcxKRZdpVyYORHUFTI%2BbddawGDzhzx8eqxGQiIFEEXuTUFRbnIg1N7TGFVlza0dhSIVwMIWVRyZc87XiUWMXJzEPLEw4YgYGDGYSdafhASA7KeR8c30G1gpx5NUsu2AMag1hahn4aA7EIeVjN2%2BK%2Fl4o2B8Gtmi%2BgQn6RAxj7ux6Wjbl52fQw4F0gMIe5ob4GOqUBvjtW31DKPqXWopQpac6TrwNs4gT62LC9BotQyTiC8NwplfsyIZTc7ONdvAmxYBc9tzd9LiQiAvpj1WUspU4NDybnPLUKVUXemIUztkuDbijiGfdkj7QWRUBxmC9OPVrLspt0%2FvHmH9lDnsM4IcWKUKRji%2BxxnyY9RO1WxtsdwE8fV4Fwl7UMqWd4GCL8SpyX3i4PwtTqEDOGqH4Sogq1Ue%2FgRiYF&X-Amz-Signature=6445e90eaae7540fb4645031a47d05995be13a14bf8defd0ed8d8f6dc2939f6e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHYKTSI2%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpppwjGvOX8nGlzY1rIigF9Yp9TsMeIKa5BCe83Zxn7AiEA4ucNSkEy3e98GEOhQ6waHFw77f%2Fds66srLogdzQ0o8Qq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOrCalmL3%2FqJPjgK5SrcA6Py9DjsQU%2FbZzCEOer8zXg722P1eCEMMhWSPVO7wzk8aFoqGYk1ptVw9uBVEQ0vzpqlqnkL69fmhYYUYXBWm4i9N3a2OY4WInHKiNJ2g25013WRr1Q%2BK9v96xs%2FLK%2F2AhtUIwfv3pX9hd0MRIW5jjCc1YjVUSYfymUUD%2F1cZ8VrpsPUegYMMIqs5g49Okjsh4DYNVhMy2JWxZvYU9Blhz6dNBl6%2Feanvc2uDlO4FsE5rFdpE7mO4sb0if8tD2Pq1AA10s8efkUM2xQ9fPCsLkRcALOF1K9NVYY4UIyXy5g6QCc7qYCOS4hn6OObOkR066ExO6eOhDF%2BaxEauonPKrv%2F6wWpOTkLxUrtp5hHD0xJkZdqbDVZfQkPkCKoyB9VwIe%2FfOM7RIqf36tz04mzYiUKCuJ1a2rdFxLvcYJ%2F9zI%2BPeCUs1RaRcmD53NbmdhNhw4YcxKRZdpVyYORHUFTI%2BbddawGDzhzx8eqxGQiIFEEXuTUFRbnIg1N7TGFVlza0dhSIVwMIWVRyZc87XiUWMXJzEPLEw4YgYGDGYSdafhASA7KeR8c30G1gpx5NUsu2AMag1hahn4aA7EIeVjN2%2BK%2Fl4o2B8Gtmi%2BgQn6RAxj7ux6Wjbl52fQw4F0gMIe5ob4GOqUBvjtW31DKPqXWopQpac6TrwNs4gT62LC9BotQyTiC8NwplfsyIZTc7ONdvAmxYBc9tzd9LiQiAvpj1WUspU4NDybnPLUKVUXemIUztkuDbijiGfdkj7QWRUBxmC9OPVrLspt0%2FvHmH9lDnsM4IcWKUKRji%2BxxnyY9RO1WxtsdwE8fV4Fwl7UMqWd4GCL8SpyX3i4PwtTqEDOGqH4Sogq1Ue%2FgRiYF&X-Amz-Signature=ef649aa725cb14d919ad1b158c06f53ea111fdf99214ffa62fd0035352e449dc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHYKTSI2%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpppwjGvOX8nGlzY1rIigF9Yp9TsMeIKa5BCe83Zxn7AiEA4ucNSkEy3e98GEOhQ6waHFw77f%2Fds66srLogdzQ0o8Qq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOrCalmL3%2FqJPjgK5SrcA6Py9DjsQU%2FbZzCEOer8zXg722P1eCEMMhWSPVO7wzk8aFoqGYk1ptVw9uBVEQ0vzpqlqnkL69fmhYYUYXBWm4i9N3a2OY4WInHKiNJ2g25013WRr1Q%2BK9v96xs%2FLK%2F2AhtUIwfv3pX9hd0MRIW5jjCc1YjVUSYfymUUD%2F1cZ8VrpsPUegYMMIqs5g49Okjsh4DYNVhMy2JWxZvYU9Blhz6dNBl6%2Feanvc2uDlO4FsE5rFdpE7mO4sb0if8tD2Pq1AA10s8efkUM2xQ9fPCsLkRcALOF1K9NVYY4UIyXy5g6QCc7qYCOS4hn6OObOkR066ExO6eOhDF%2BaxEauonPKrv%2F6wWpOTkLxUrtp5hHD0xJkZdqbDVZfQkPkCKoyB9VwIe%2FfOM7RIqf36tz04mzYiUKCuJ1a2rdFxLvcYJ%2F9zI%2BPeCUs1RaRcmD53NbmdhNhw4YcxKRZdpVyYORHUFTI%2BbddawGDzhzx8eqxGQiIFEEXuTUFRbnIg1N7TGFVlza0dhSIVwMIWVRyZc87XiUWMXJzEPLEw4YgYGDGYSdafhASA7KeR8c30G1gpx5NUsu2AMag1hahn4aA7EIeVjN2%2BK%2Fl4o2B8Gtmi%2BgQn6RAxj7ux6Wjbl52fQw4F0gMIe5ob4GOqUBvjtW31DKPqXWopQpac6TrwNs4gT62LC9BotQyTiC8NwplfsyIZTc7ONdvAmxYBc9tzd9LiQiAvpj1WUspU4NDybnPLUKVUXemIUztkuDbijiGfdkj7QWRUBxmC9OPVrLspt0%2FvHmH9lDnsM4IcWKUKRji%2BxxnyY9RO1WxtsdwE8fV4Fwl7UMqWd4GCL8SpyX3i4PwtTqEDOGqH4Sogq1Ue%2FgRiYF&X-Amz-Signature=fe900ec5b2df7ef303c04d2203635957183d5e0b00be0dc2ca726590ed5e280c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHYKTSI2%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpppwjGvOX8nGlzY1rIigF9Yp9TsMeIKa5BCe83Zxn7AiEA4ucNSkEy3e98GEOhQ6waHFw77f%2Fds66srLogdzQ0o8Qq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOrCalmL3%2FqJPjgK5SrcA6Py9DjsQU%2FbZzCEOer8zXg722P1eCEMMhWSPVO7wzk8aFoqGYk1ptVw9uBVEQ0vzpqlqnkL69fmhYYUYXBWm4i9N3a2OY4WInHKiNJ2g25013WRr1Q%2BK9v96xs%2FLK%2F2AhtUIwfv3pX9hd0MRIW5jjCc1YjVUSYfymUUD%2F1cZ8VrpsPUegYMMIqs5g49Okjsh4DYNVhMy2JWxZvYU9Blhz6dNBl6%2Feanvc2uDlO4FsE5rFdpE7mO4sb0if8tD2Pq1AA10s8efkUM2xQ9fPCsLkRcALOF1K9NVYY4UIyXy5g6QCc7qYCOS4hn6OObOkR066ExO6eOhDF%2BaxEauonPKrv%2F6wWpOTkLxUrtp5hHD0xJkZdqbDVZfQkPkCKoyB9VwIe%2FfOM7RIqf36tz04mzYiUKCuJ1a2rdFxLvcYJ%2F9zI%2BPeCUs1RaRcmD53NbmdhNhw4YcxKRZdpVyYORHUFTI%2BbddawGDzhzx8eqxGQiIFEEXuTUFRbnIg1N7TGFVlza0dhSIVwMIWVRyZc87XiUWMXJzEPLEw4YgYGDGYSdafhASA7KeR8c30G1gpx5NUsu2AMag1hahn4aA7EIeVjN2%2BK%2Fl4o2B8Gtmi%2BgQn6RAxj7ux6Wjbl52fQw4F0gMIe5ob4GOqUBvjtW31DKPqXWopQpac6TrwNs4gT62LC9BotQyTiC8NwplfsyIZTc7ONdvAmxYBc9tzd9LiQiAvpj1WUspU4NDybnPLUKVUXemIUztkuDbijiGfdkj7QWRUBxmC9OPVrLspt0%2FvHmH9lDnsM4IcWKUKRji%2BxxnyY9RO1WxtsdwE8fV4Fwl7UMqWd4GCL8SpyX3i4PwtTqEDOGqH4Sogq1Ue%2FgRiYF&X-Amz-Signature=24683846d797852718d60c82268f59f932e01b980ea2742275461f0ef800bee7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
