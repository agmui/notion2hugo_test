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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7V2KVN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIFlUu%2BjJcW%2F1PD3%2FkmXbgttobU0uF%2FHwXO0G8Zwu2lIeAiATfcHicgk7GG7IVyGlZByNOx20WRPyp57QFIIFd8btiSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZJurzdtVXZjTTFTFKtwD%2BcxTUWIJVr8AnhqNoZGeo27w9xdPgKLCCvmk0OApgZ7W%2FMVqwHsI7f7%2BNToiHtq%2BDMqoAcUtb2BlxK1TquEbnN37%2BVvdcWhUkWJyx9QxNiJ%2F2Nb05CQxWpY%2FLBNXb49sTnEqyTRU2knyDVn0BetSj1lOMGwjRntTpdzwGkcZJ%2BDblHayBgwJpPP02Un9URIiEJlKg0uzDYumUi5cH9RGUZXPRusUAXaTz7tyQN1O699%2BAw9f9rePRK7MS4U7ymiyA2Y2D%2F5IyC8nfW0JQctA%2BaYKeuvS8pBaoFYg3RWi4C9yxN7XdBheUUf33UVUONpQrNM2zQ%2FDW7NluSnMr9v3kLbKwUyTmUaCEIjeXORD5sIWeBLtYYDrWjgBqBaUhaTaBwokdKQUKjQVGTkLSRsVGtoSHx4D6LqU5fi8LLK%2FeiXLlMVFt8bZ07BjeR3SoC1zd%2FnTqin0jv4VlRPs7nGMMFIE%2F2LZdf0aJBug%2F6WMkfTjmSFPvIDg5ApyP1kTtwgiuqfhV1WXQqbzsmtmheWkjynMxgRpWY%2F9TMx8o0mSffBDUotWTBRvh%2BDqY34uzv38azOKOuyPZulKdOcRj6OnC9%2FT8JODaYvtRZGIRTWYDo3Tz3Wn%2FNTgnXoRv9MwkMjhwgY6pgEcREo8W%2FejcDpAKq4XQHcLawo27kq4z98eysUWcRSzJ8sH%2B3YkejHOWngKPpFHrdb%2FaPKmf7ylrYq73O3zeBCBZ9yb9A1%2Fa%2FkenPbXaEx09Su8GhVA03VsrAvDaN3UDTvEqS8itMaM6VB5pYXS7prN6fh38iLl%2FF1rxXAV0i0L9edUPpS9YBKKhvp0MJQB9SwCWHYmKUFcYaeb7ODG6Y3zWJcbw02p&X-Amz-Signature=028357f552136c5270343c9b2d0ee3a59b633f6537dd49a6dbc4b1d2746d3ef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7V2KVN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIFlUu%2BjJcW%2F1PD3%2FkmXbgttobU0uF%2FHwXO0G8Zwu2lIeAiATfcHicgk7GG7IVyGlZByNOx20WRPyp57QFIIFd8btiSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZJurzdtVXZjTTFTFKtwD%2BcxTUWIJVr8AnhqNoZGeo27w9xdPgKLCCvmk0OApgZ7W%2FMVqwHsI7f7%2BNToiHtq%2BDMqoAcUtb2BlxK1TquEbnN37%2BVvdcWhUkWJyx9QxNiJ%2F2Nb05CQxWpY%2FLBNXb49sTnEqyTRU2knyDVn0BetSj1lOMGwjRntTpdzwGkcZJ%2BDblHayBgwJpPP02Un9URIiEJlKg0uzDYumUi5cH9RGUZXPRusUAXaTz7tyQN1O699%2BAw9f9rePRK7MS4U7ymiyA2Y2D%2F5IyC8nfW0JQctA%2BaYKeuvS8pBaoFYg3RWi4C9yxN7XdBheUUf33UVUONpQrNM2zQ%2FDW7NluSnMr9v3kLbKwUyTmUaCEIjeXORD5sIWeBLtYYDrWjgBqBaUhaTaBwokdKQUKjQVGTkLSRsVGtoSHx4D6LqU5fi8LLK%2FeiXLlMVFt8bZ07BjeR3SoC1zd%2FnTqin0jv4VlRPs7nGMMFIE%2F2LZdf0aJBug%2F6WMkfTjmSFPvIDg5ApyP1kTtwgiuqfhV1WXQqbzsmtmheWkjynMxgRpWY%2F9TMx8o0mSffBDUotWTBRvh%2BDqY34uzv38azOKOuyPZulKdOcRj6OnC9%2FT8JODaYvtRZGIRTWYDo3Tz3Wn%2FNTgnXoRv9MwkMjhwgY6pgEcREo8W%2FejcDpAKq4XQHcLawo27kq4z98eysUWcRSzJ8sH%2B3YkejHOWngKPpFHrdb%2FaPKmf7ylrYq73O3zeBCBZ9yb9A1%2Fa%2FkenPbXaEx09Su8GhVA03VsrAvDaN3UDTvEqS8itMaM6VB5pYXS7prN6fh38iLl%2FF1rxXAV0i0L9edUPpS9YBKKhvp0MJQB9SwCWHYmKUFcYaeb7ODG6Y3zWJcbw02p&X-Amz-Signature=8d4cff36165615bc1045fd3628a7ee4963442d4a1273dec24c95d1f8cfab9c0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7V2KVN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIFlUu%2BjJcW%2F1PD3%2FkmXbgttobU0uF%2FHwXO0G8Zwu2lIeAiATfcHicgk7GG7IVyGlZByNOx20WRPyp57QFIIFd8btiSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZJurzdtVXZjTTFTFKtwD%2BcxTUWIJVr8AnhqNoZGeo27w9xdPgKLCCvmk0OApgZ7W%2FMVqwHsI7f7%2BNToiHtq%2BDMqoAcUtb2BlxK1TquEbnN37%2BVvdcWhUkWJyx9QxNiJ%2F2Nb05CQxWpY%2FLBNXb49sTnEqyTRU2knyDVn0BetSj1lOMGwjRntTpdzwGkcZJ%2BDblHayBgwJpPP02Un9URIiEJlKg0uzDYumUi5cH9RGUZXPRusUAXaTz7tyQN1O699%2BAw9f9rePRK7MS4U7ymiyA2Y2D%2F5IyC8nfW0JQctA%2BaYKeuvS8pBaoFYg3RWi4C9yxN7XdBheUUf33UVUONpQrNM2zQ%2FDW7NluSnMr9v3kLbKwUyTmUaCEIjeXORD5sIWeBLtYYDrWjgBqBaUhaTaBwokdKQUKjQVGTkLSRsVGtoSHx4D6LqU5fi8LLK%2FeiXLlMVFt8bZ07BjeR3SoC1zd%2FnTqin0jv4VlRPs7nGMMFIE%2F2LZdf0aJBug%2F6WMkfTjmSFPvIDg5ApyP1kTtwgiuqfhV1WXQqbzsmtmheWkjynMxgRpWY%2F9TMx8o0mSffBDUotWTBRvh%2BDqY34uzv38azOKOuyPZulKdOcRj6OnC9%2FT8JODaYvtRZGIRTWYDo3Tz3Wn%2FNTgnXoRv9MwkMjhwgY6pgEcREo8W%2FejcDpAKq4XQHcLawo27kq4z98eysUWcRSzJ8sH%2B3YkejHOWngKPpFHrdb%2FaPKmf7ylrYq73O3zeBCBZ9yb9A1%2Fa%2FkenPbXaEx09Su8GhVA03VsrAvDaN3UDTvEqS8itMaM6VB5pYXS7prN6fh38iLl%2FF1rxXAV0i0L9edUPpS9YBKKhvp0MJQB9SwCWHYmKUFcYaeb7ODG6Y3zWJcbw02p&X-Amz-Signature=2dcb18c9714d48e2db36774fc2431ce8ba0a9647d8af5cdebe3088f17bc259f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7V2KVN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIFlUu%2BjJcW%2F1PD3%2FkmXbgttobU0uF%2FHwXO0G8Zwu2lIeAiATfcHicgk7GG7IVyGlZByNOx20WRPyp57QFIIFd8btiSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZJurzdtVXZjTTFTFKtwD%2BcxTUWIJVr8AnhqNoZGeo27w9xdPgKLCCvmk0OApgZ7W%2FMVqwHsI7f7%2BNToiHtq%2BDMqoAcUtb2BlxK1TquEbnN37%2BVvdcWhUkWJyx9QxNiJ%2F2Nb05CQxWpY%2FLBNXb49sTnEqyTRU2knyDVn0BetSj1lOMGwjRntTpdzwGkcZJ%2BDblHayBgwJpPP02Un9URIiEJlKg0uzDYumUi5cH9RGUZXPRusUAXaTz7tyQN1O699%2BAw9f9rePRK7MS4U7ymiyA2Y2D%2F5IyC8nfW0JQctA%2BaYKeuvS8pBaoFYg3RWi4C9yxN7XdBheUUf33UVUONpQrNM2zQ%2FDW7NluSnMr9v3kLbKwUyTmUaCEIjeXORD5sIWeBLtYYDrWjgBqBaUhaTaBwokdKQUKjQVGTkLSRsVGtoSHx4D6LqU5fi8LLK%2FeiXLlMVFt8bZ07BjeR3SoC1zd%2FnTqin0jv4VlRPs7nGMMFIE%2F2LZdf0aJBug%2F6WMkfTjmSFPvIDg5ApyP1kTtwgiuqfhV1WXQqbzsmtmheWkjynMxgRpWY%2F9TMx8o0mSffBDUotWTBRvh%2BDqY34uzv38azOKOuyPZulKdOcRj6OnC9%2FT8JODaYvtRZGIRTWYDo3Tz3Wn%2FNTgnXoRv9MwkMjhwgY6pgEcREo8W%2FejcDpAKq4XQHcLawo27kq4z98eysUWcRSzJ8sH%2B3YkejHOWngKPpFHrdb%2FaPKmf7ylrYq73O3zeBCBZ9yb9A1%2Fa%2FkenPbXaEx09Su8GhVA03VsrAvDaN3UDTvEqS8itMaM6VB5pYXS7prN6fh38iLl%2FF1rxXAV0i0L9edUPpS9YBKKhvp0MJQB9SwCWHYmKUFcYaeb7ODG6Y3zWJcbw02p&X-Amz-Signature=d107fe9588e765ac34e0bfa9e8be2a8a3bd1784503a4a714efec30bb1bf7c918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7V2KVN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIFlUu%2BjJcW%2F1PD3%2FkmXbgttobU0uF%2FHwXO0G8Zwu2lIeAiATfcHicgk7GG7IVyGlZByNOx20WRPyp57QFIIFd8btiSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZJurzdtVXZjTTFTFKtwD%2BcxTUWIJVr8AnhqNoZGeo27w9xdPgKLCCvmk0OApgZ7W%2FMVqwHsI7f7%2BNToiHtq%2BDMqoAcUtb2BlxK1TquEbnN37%2BVvdcWhUkWJyx9QxNiJ%2F2Nb05CQxWpY%2FLBNXb49sTnEqyTRU2knyDVn0BetSj1lOMGwjRntTpdzwGkcZJ%2BDblHayBgwJpPP02Un9URIiEJlKg0uzDYumUi5cH9RGUZXPRusUAXaTz7tyQN1O699%2BAw9f9rePRK7MS4U7ymiyA2Y2D%2F5IyC8nfW0JQctA%2BaYKeuvS8pBaoFYg3RWi4C9yxN7XdBheUUf33UVUONpQrNM2zQ%2FDW7NluSnMr9v3kLbKwUyTmUaCEIjeXORD5sIWeBLtYYDrWjgBqBaUhaTaBwokdKQUKjQVGTkLSRsVGtoSHx4D6LqU5fi8LLK%2FeiXLlMVFt8bZ07BjeR3SoC1zd%2FnTqin0jv4VlRPs7nGMMFIE%2F2LZdf0aJBug%2F6WMkfTjmSFPvIDg5ApyP1kTtwgiuqfhV1WXQqbzsmtmheWkjynMxgRpWY%2F9TMx8o0mSffBDUotWTBRvh%2BDqY34uzv38azOKOuyPZulKdOcRj6OnC9%2FT8JODaYvtRZGIRTWYDo3Tz3Wn%2FNTgnXoRv9MwkMjhwgY6pgEcREo8W%2FejcDpAKq4XQHcLawo27kq4z98eysUWcRSzJ8sH%2B3YkejHOWngKPpFHrdb%2FaPKmf7ylrYq73O3zeBCBZ9yb9A1%2Fa%2FkenPbXaEx09Su8GhVA03VsrAvDaN3UDTvEqS8itMaM6VB5pYXS7prN6fh38iLl%2FF1rxXAV0i0L9edUPpS9YBKKhvp0MJQB9SwCWHYmKUFcYaeb7ODG6Y3zWJcbw02p&X-Amz-Signature=40ce5719185730e91a2d145d66d930bc7c819b470004b8efa40574a15b5c6983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7V2KVN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIFlUu%2BjJcW%2F1PD3%2FkmXbgttobU0uF%2FHwXO0G8Zwu2lIeAiATfcHicgk7GG7IVyGlZByNOx20WRPyp57QFIIFd8btiSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZJurzdtVXZjTTFTFKtwD%2BcxTUWIJVr8AnhqNoZGeo27w9xdPgKLCCvmk0OApgZ7W%2FMVqwHsI7f7%2BNToiHtq%2BDMqoAcUtb2BlxK1TquEbnN37%2BVvdcWhUkWJyx9QxNiJ%2F2Nb05CQxWpY%2FLBNXb49sTnEqyTRU2knyDVn0BetSj1lOMGwjRntTpdzwGkcZJ%2BDblHayBgwJpPP02Un9URIiEJlKg0uzDYumUi5cH9RGUZXPRusUAXaTz7tyQN1O699%2BAw9f9rePRK7MS4U7ymiyA2Y2D%2F5IyC8nfW0JQctA%2BaYKeuvS8pBaoFYg3RWi4C9yxN7XdBheUUf33UVUONpQrNM2zQ%2FDW7NluSnMr9v3kLbKwUyTmUaCEIjeXORD5sIWeBLtYYDrWjgBqBaUhaTaBwokdKQUKjQVGTkLSRsVGtoSHx4D6LqU5fi8LLK%2FeiXLlMVFt8bZ07BjeR3SoC1zd%2FnTqin0jv4VlRPs7nGMMFIE%2F2LZdf0aJBug%2F6WMkfTjmSFPvIDg5ApyP1kTtwgiuqfhV1WXQqbzsmtmheWkjynMxgRpWY%2F9TMx8o0mSffBDUotWTBRvh%2BDqY34uzv38azOKOuyPZulKdOcRj6OnC9%2FT8JODaYvtRZGIRTWYDo3Tz3Wn%2FNTgnXoRv9MwkMjhwgY6pgEcREo8W%2FejcDpAKq4XQHcLawo27kq4z98eysUWcRSzJ8sH%2B3YkejHOWngKPpFHrdb%2FaPKmf7ylrYq73O3zeBCBZ9yb9A1%2Fa%2FkenPbXaEx09Su8GhVA03VsrAvDaN3UDTvEqS8itMaM6VB5pYXS7prN6fh38iLl%2FF1rxXAV0i0L9edUPpS9YBKKhvp0MJQB9SwCWHYmKUFcYaeb7ODG6Y3zWJcbw02p&X-Amz-Signature=18c9cc360851c6d84d01b3bfe207ebf59bd3abad32fe9f2aed413f96825a5998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7V2KVN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIFlUu%2BjJcW%2F1PD3%2FkmXbgttobU0uF%2FHwXO0G8Zwu2lIeAiATfcHicgk7GG7IVyGlZByNOx20WRPyp57QFIIFd8btiSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZJurzdtVXZjTTFTFKtwD%2BcxTUWIJVr8AnhqNoZGeo27w9xdPgKLCCvmk0OApgZ7W%2FMVqwHsI7f7%2BNToiHtq%2BDMqoAcUtb2BlxK1TquEbnN37%2BVvdcWhUkWJyx9QxNiJ%2F2Nb05CQxWpY%2FLBNXb49sTnEqyTRU2knyDVn0BetSj1lOMGwjRntTpdzwGkcZJ%2BDblHayBgwJpPP02Un9URIiEJlKg0uzDYumUi5cH9RGUZXPRusUAXaTz7tyQN1O699%2BAw9f9rePRK7MS4U7ymiyA2Y2D%2F5IyC8nfW0JQctA%2BaYKeuvS8pBaoFYg3RWi4C9yxN7XdBheUUf33UVUONpQrNM2zQ%2FDW7NluSnMr9v3kLbKwUyTmUaCEIjeXORD5sIWeBLtYYDrWjgBqBaUhaTaBwokdKQUKjQVGTkLSRsVGtoSHx4D6LqU5fi8LLK%2FeiXLlMVFt8bZ07BjeR3SoC1zd%2FnTqin0jv4VlRPs7nGMMFIE%2F2LZdf0aJBug%2F6WMkfTjmSFPvIDg5ApyP1kTtwgiuqfhV1WXQqbzsmtmheWkjynMxgRpWY%2F9TMx8o0mSffBDUotWTBRvh%2BDqY34uzv38azOKOuyPZulKdOcRj6OnC9%2FT8JODaYvtRZGIRTWYDo3Tz3Wn%2FNTgnXoRv9MwkMjhwgY6pgEcREo8W%2FejcDpAKq4XQHcLawo27kq4z98eysUWcRSzJ8sH%2B3YkejHOWngKPpFHrdb%2FaPKmf7ylrYq73O3zeBCBZ9yb9A1%2Fa%2FkenPbXaEx09Su8GhVA03VsrAvDaN3UDTvEqS8itMaM6VB5pYXS7prN6fh38iLl%2FF1rxXAV0i0L9edUPpS9YBKKhvp0MJQB9SwCWHYmKUFcYaeb7ODG6Y3zWJcbw02p&X-Amz-Signature=3334761e7d6a552590c0bc8ccc81a5b5059d74de13e0b80c722610e29f435725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
