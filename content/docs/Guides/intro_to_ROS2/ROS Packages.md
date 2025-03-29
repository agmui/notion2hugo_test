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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWM57JYD%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCRK5DNDqEGHBQMIJtnWMyE%2BzZIB9OEtvaL591VrehjHgIhAIHs1Mr0AL46h3LiTfjp0On1wRsEzJuQLd3lqJizU5hmKv8DCHUQABoMNjM3NDIzMTgzODA1Igxtmy34412rK0GjA40q3ANlCBMHCBsJ3okX2vAIAgnILVwRK7b6ip%2F8ZCjHi1uJDPfHjVnXv8PssGLK1c%2FXuXLXjVYGunznrpJtLim7QuDYgY4SoxCdKia2UqR2N035biP4KUu82H6YvZZxXDUALL8uACKpI8kF%2FFMNC4ZiD6Vo%2BlXr4rpYSzHyNNdNPCcDYsC7950idOz4WEF6IWAPz5GVGeMvJJA%2BddfUIHn3JSOKW0hnJrSuJsUC1s6ZnIKdpn%2Fl1qfXOgBY2%2FY1qXtxBXG4Mb%2BzLjDh6TZRU5l04udt8MK6mwhOh%2BdRoCj1w1ct3clIJeGqv0RoZ0dVmhm8QKrbxOMGOh5mZt6lgtW95GLnKjBjCPBgRRkVbObJS3Yit%2FN50wT6bW7LiVsT7d%2BUmW5QDwTGj5a5QB1SgnQROmGz%2FN6GUO5lnXefgL%2FYvpaj1bQKDBLz1qxTUMTnn93sq%2FDuPQiqpEOgRdRHEy1RKqFz%2BjGvRrLbzcNdi0jqrRwt8RkbNNlhgoL1ZQRd%2BCd%2BXbR1gSy90vQzkrUvCrV%2FxvP0JN3z7WUBjaeCRVvU2%2FSliBIx%2BPh3GFt%2F7sdd4DU5NKNGyhL941bt0pyusWQDDRf1YTHTr7UWTeHxiy7QfIlFfjUc4vVsPkTIrV78YDDYtZ%2B%2FBjqkARZTI%2FcyMa6V4vz6nIb%2BHX94s%2F7ONtbVv69VtRn1WfsGSL%2BaG9Nfvt%2BBtWuRlWjKPACG6Us%2BGnovTEgiOmnaxWHnDxsn1LxDBjvnBLQIxzU9kEQpk3ZoaCRtJDRbMah3kyo3s6gR3fbZHGhUV682Fa28g51y34mIBIsBLrkwYB4pAnzQfB%2FUe3pa6VLf9fkBulzSUlorn8tKkwvNoypBDSIzBvdA&X-Amz-Signature=645ed3a9d0a8e65ad2e79ea63462675f3be11a8d0651c464aec51b28137ed8f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWM57JYD%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCRK5DNDqEGHBQMIJtnWMyE%2BzZIB9OEtvaL591VrehjHgIhAIHs1Mr0AL46h3LiTfjp0On1wRsEzJuQLd3lqJizU5hmKv8DCHUQABoMNjM3NDIzMTgzODA1Igxtmy34412rK0GjA40q3ANlCBMHCBsJ3okX2vAIAgnILVwRK7b6ip%2F8ZCjHi1uJDPfHjVnXv8PssGLK1c%2FXuXLXjVYGunznrpJtLim7QuDYgY4SoxCdKia2UqR2N035biP4KUu82H6YvZZxXDUALL8uACKpI8kF%2FFMNC4ZiD6Vo%2BlXr4rpYSzHyNNdNPCcDYsC7950idOz4WEF6IWAPz5GVGeMvJJA%2BddfUIHn3JSOKW0hnJrSuJsUC1s6ZnIKdpn%2Fl1qfXOgBY2%2FY1qXtxBXG4Mb%2BzLjDh6TZRU5l04udt8MK6mwhOh%2BdRoCj1w1ct3clIJeGqv0RoZ0dVmhm8QKrbxOMGOh5mZt6lgtW95GLnKjBjCPBgRRkVbObJS3Yit%2FN50wT6bW7LiVsT7d%2BUmW5QDwTGj5a5QB1SgnQROmGz%2FN6GUO5lnXefgL%2FYvpaj1bQKDBLz1qxTUMTnn93sq%2FDuPQiqpEOgRdRHEy1RKqFz%2BjGvRrLbzcNdi0jqrRwt8RkbNNlhgoL1ZQRd%2BCd%2BXbR1gSy90vQzkrUvCrV%2FxvP0JN3z7WUBjaeCRVvU2%2FSliBIx%2BPh3GFt%2F7sdd4DU5NKNGyhL941bt0pyusWQDDRf1YTHTr7UWTeHxiy7QfIlFfjUc4vVsPkTIrV78YDDYtZ%2B%2FBjqkARZTI%2FcyMa6V4vz6nIb%2BHX94s%2F7ONtbVv69VtRn1WfsGSL%2BaG9Nfvt%2BBtWuRlWjKPACG6Us%2BGnovTEgiOmnaxWHnDxsn1LxDBjvnBLQIxzU9kEQpk3ZoaCRtJDRbMah3kyo3s6gR3fbZHGhUV682Fa28g51y34mIBIsBLrkwYB4pAnzQfB%2FUe3pa6VLf9fkBulzSUlorn8tKkwvNoypBDSIzBvdA&X-Amz-Signature=141ae3b3213d1fc005cfe28ad3fd9896b1b20a786b2cb78c4041ac65d187e30a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWM57JYD%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCRK5DNDqEGHBQMIJtnWMyE%2BzZIB9OEtvaL591VrehjHgIhAIHs1Mr0AL46h3LiTfjp0On1wRsEzJuQLd3lqJizU5hmKv8DCHUQABoMNjM3NDIzMTgzODA1Igxtmy34412rK0GjA40q3ANlCBMHCBsJ3okX2vAIAgnILVwRK7b6ip%2F8ZCjHi1uJDPfHjVnXv8PssGLK1c%2FXuXLXjVYGunznrpJtLim7QuDYgY4SoxCdKia2UqR2N035biP4KUu82H6YvZZxXDUALL8uACKpI8kF%2FFMNC4ZiD6Vo%2BlXr4rpYSzHyNNdNPCcDYsC7950idOz4WEF6IWAPz5GVGeMvJJA%2BddfUIHn3JSOKW0hnJrSuJsUC1s6ZnIKdpn%2Fl1qfXOgBY2%2FY1qXtxBXG4Mb%2BzLjDh6TZRU5l04udt8MK6mwhOh%2BdRoCj1w1ct3clIJeGqv0RoZ0dVmhm8QKrbxOMGOh5mZt6lgtW95GLnKjBjCPBgRRkVbObJS3Yit%2FN50wT6bW7LiVsT7d%2BUmW5QDwTGj5a5QB1SgnQROmGz%2FN6GUO5lnXefgL%2FYvpaj1bQKDBLz1qxTUMTnn93sq%2FDuPQiqpEOgRdRHEy1RKqFz%2BjGvRrLbzcNdi0jqrRwt8RkbNNlhgoL1ZQRd%2BCd%2BXbR1gSy90vQzkrUvCrV%2FxvP0JN3z7WUBjaeCRVvU2%2FSliBIx%2BPh3GFt%2F7sdd4DU5NKNGyhL941bt0pyusWQDDRf1YTHTr7UWTeHxiy7QfIlFfjUc4vVsPkTIrV78YDDYtZ%2B%2FBjqkARZTI%2FcyMa6V4vz6nIb%2BHX94s%2F7ONtbVv69VtRn1WfsGSL%2BaG9Nfvt%2BBtWuRlWjKPACG6Us%2BGnovTEgiOmnaxWHnDxsn1LxDBjvnBLQIxzU9kEQpk3ZoaCRtJDRbMah3kyo3s6gR3fbZHGhUV682Fa28g51y34mIBIsBLrkwYB4pAnzQfB%2FUe3pa6VLf9fkBulzSUlorn8tKkwvNoypBDSIzBvdA&X-Amz-Signature=460c08abf501ca222e69e9ca7866237f249aaa15d5b70a07e5d1510e5c1c7eb2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWM57JYD%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCRK5DNDqEGHBQMIJtnWMyE%2BzZIB9OEtvaL591VrehjHgIhAIHs1Mr0AL46h3LiTfjp0On1wRsEzJuQLd3lqJizU5hmKv8DCHUQABoMNjM3NDIzMTgzODA1Igxtmy34412rK0GjA40q3ANlCBMHCBsJ3okX2vAIAgnILVwRK7b6ip%2F8ZCjHi1uJDPfHjVnXv8PssGLK1c%2FXuXLXjVYGunznrpJtLim7QuDYgY4SoxCdKia2UqR2N035biP4KUu82H6YvZZxXDUALL8uACKpI8kF%2FFMNC4ZiD6Vo%2BlXr4rpYSzHyNNdNPCcDYsC7950idOz4WEF6IWAPz5GVGeMvJJA%2BddfUIHn3JSOKW0hnJrSuJsUC1s6ZnIKdpn%2Fl1qfXOgBY2%2FY1qXtxBXG4Mb%2BzLjDh6TZRU5l04udt8MK6mwhOh%2BdRoCj1w1ct3clIJeGqv0RoZ0dVmhm8QKrbxOMGOh5mZt6lgtW95GLnKjBjCPBgRRkVbObJS3Yit%2FN50wT6bW7LiVsT7d%2BUmW5QDwTGj5a5QB1SgnQROmGz%2FN6GUO5lnXefgL%2FYvpaj1bQKDBLz1qxTUMTnn93sq%2FDuPQiqpEOgRdRHEy1RKqFz%2BjGvRrLbzcNdi0jqrRwt8RkbNNlhgoL1ZQRd%2BCd%2BXbR1gSy90vQzkrUvCrV%2FxvP0JN3z7WUBjaeCRVvU2%2FSliBIx%2BPh3GFt%2F7sdd4DU5NKNGyhL941bt0pyusWQDDRf1YTHTr7UWTeHxiy7QfIlFfjUc4vVsPkTIrV78YDDYtZ%2B%2FBjqkARZTI%2FcyMa6V4vz6nIb%2BHX94s%2F7ONtbVv69VtRn1WfsGSL%2BaG9Nfvt%2BBtWuRlWjKPACG6Us%2BGnovTEgiOmnaxWHnDxsn1LxDBjvnBLQIxzU9kEQpk3ZoaCRtJDRbMah3kyo3s6gR3fbZHGhUV682Fa28g51y34mIBIsBLrkwYB4pAnzQfB%2FUe3pa6VLf9fkBulzSUlorn8tKkwvNoypBDSIzBvdA&X-Amz-Signature=9351d8d32d9dac4e629e135531555be2193d889f4bada361ed75b0e20cc0ce18&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWM57JYD%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCRK5DNDqEGHBQMIJtnWMyE%2BzZIB9OEtvaL591VrehjHgIhAIHs1Mr0AL46h3LiTfjp0On1wRsEzJuQLd3lqJizU5hmKv8DCHUQABoMNjM3NDIzMTgzODA1Igxtmy34412rK0GjA40q3ANlCBMHCBsJ3okX2vAIAgnILVwRK7b6ip%2F8ZCjHi1uJDPfHjVnXv8PssGLK1c%2FXuXLXjVYGunznrpJtLim7QuDYgY4SoxCdKia2UqR2N035biP4KUu82H6YvZZxXDUALL8uACKpI8kF%2FFMNC4ZiD6Vo%2BlXr4rpYSzHyNNdNPCcDYsC7950idOz4WEF6IWAPz5GVGeMvJJA%2BddfUIHn3JSOKW0hnJrSuJsUC1s6ZnIKdpn%2Fl1qfXOgBY2%2FY1qXtxBXG4Mb%2BzLjDh6TZRU5l04udt8MK6mwhOh%2BdRoCj1w1ct3clIJeGqv0RoZ0dVmhm8QKrbxOMGOh5mZt6lgtW95GLnKjBjCPBgRRkVbObJS3Yit%2FN50wT6bW7LiVsT7d%2BUmW5QDwTGj5a5QB1SgnQROmGz%2FN6GUO5lnXefgL%2FYvpaj1bQKDBLz1qxTUMTnn93sq%2FDuPQiqpEOgRdRHEy1RKqFz%2BjGvRrLbzcNdi0jqrRwt8RkbNNlhgoL1ZQRd%2BCd%2BXbR1gSy90vQzkrUvCrV%2FxvP0JN3z7WUBjaeCRVvU2%2FSliBIx%2BPh3GFt%2F7sdd4DU5NKNGyhL941bt0pyusWQDDRf1YTHTr7UWTeHxiy7QfIlFfjUc4vVsPkTIrV78YDDYtZ%2B%2FBjqkARZTI%2FcyMa6V4vz6nIb%2BHX94s%2F7ONtbVv69VtRn1WfsGSL%2BaG9Nfvt%2BBtWuRlWjKPACG6Us%2BGnovTEgiOmnaxWHnDxsn1LxDBjvnBLQIxzU9kEQpk3ZoaCRtJDRbMah3kyo3s6gR3fbZHGhUV682Fa28g51y34mIBIsBLrkwYB4pAnzQfB%2FUe3pa6VLf9fkBulzSUlorn8tKkwvNoypBDSIzBvdA&X-Amz-Signature=43af02d1bbe13abfbbd983b4afd10952ce318fd77a67ff7c2b83b60089723f73&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWM57JYD%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCRK5DNDqEGHBQMIJtnWMyE%2BzZIB9OEtvaL591VrehjHgIhAIHs1Mr0AL46h3LiTfjp0On1wRsEzJuQLd3lqJizU5hmKv8DCHUQABoMNjM3NDIzMTgzODA1Igxtmy34412rK0GjA40q3ANlCBMHCBsJ3okX2vAIAgnILVwRK7b6ip%2F8ZCjHi1uJDPfHjVnXv8PssGLK1c%2FXuXLXjVYGunznrpJtLim7QuDYgY4SoxCdKia2UqR2N035biP4KUu82H6YvZZxXDUALL8uACKpI8kF%2FFMNC4ZiD6Vo%2BlXr4rpYSzHyNNdNPCcDYsC7950idOz4WEF6IWAPz5GVGeMvJJA%2BddfUIHn3JSOKW0hnJrSuJsUC1s6ZnIKdpn%2Fl1qfXOgBY2%2FY1qXtxBXG4Mb%2BzLjDh6TZRU5l04udt8MK6mwhOh%2BdRoCj1w1ct3clIJeGqv0RoZ0dVmhm8QKrbxOMGOh5mZt6lgtW95GLnKjBjCPBgRRkVbObJS3Yit%2FN50wT6bW7LiVsT7d%2BUmW5QDwTGj5a5QB1SgnQROmGz%2FN6GUO5lnXefgL%2FYvpaj1bQKDBLz1qxTUMTnn93sq%2FDuPQiqpEOgRdRHEy1RKqFz%2BjGvRrLbzcNdi0jqrRwt8RkbNNlhgoL1ZQRd%2BCd%2BXbR1gSy90vQzkrUvCrV%2FxvP0JN3z7WUBjaeCRVvU2%2FSliBIx%2BPh3GFt%2F7sdd4DU5NKNGyhL941bt0pyusWQDDRf1YTHTr7UWTeHxiy7QfIlFfjUc4vVsPkTIrV78YDDYtZ%2B%2FBjqkARZTI%2FcyMa6V4vz6nIb%2BHX94s%2F7ONtbVv69VtRn1WfsGSL%2BaG9Nfvt%2BBtWuRlWjKPACG6Us%2BGnovTEgiOmnaxWHnDxsn1LxDBjvnBLQIxzU9kEQpk3ZoaCRtJDRbMah3kyo3s6gR3fbZHGhUV682Fa28g51y34mIBIsBLrkwYB4pAnzQfB%2FUe3pa6VLf9fkBulzSUlorn8tKkwvNoypBDSIzBvdA&X-Amz-Signature=dbfa66f9a061e337c262583a0e4806bbaaf8a555617b9fa6a4d7f531e7411f44&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWM57JYD%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCRK5DNDqEGHBQMIJtnWMyE%2BzZIB9OEtvaL591VrehjHgIhAIHs1Mr0AL46h3LiTfjp0On1wRsEzJuQLd3lqJizU5hmKv8DCHUQABoMNjM3NDIzMTgzODA1Igxtmy34412rK0GjA40q3ANlCBMHCBsJ3okX2vAIAgnILVwRK7b6ip%2F8ZCjHi1uJDPfHjVnXv8PssGLK1c%2FXuXLXjVYGunznrpJtLim7QuDYgY4SoxCdKia2UqR2N035biP4KUu82H6YvZZxXDUALL8uACKpI8kF%2FFMNC4ZiD6Vo%2BlXr4rpYSzHyNNdNPCcDYsC7950idOz4WEF6IWAPz5GVGeMvJJA%2BddfUIHn3JSOKW0hnJrSuJsUC1s6ZnIKdpn%2Fl1qfXOgBY2%2FY1qXtxBXG4Mb%2BzLjDh6TZRU5l04udt8MK6mwhOh%2BdRoCj1w1ct3clIJeGqv0RoZ0dVmhm8QKrbxOMGOh5mZt6lgtW95GLnKjBjCPBgRRkVbObJS3Yit%2FN50wT6bW7LiVsT7d%2BUmW5QDwTGj5a5QB1SgnQROmGz%2FN6GUO5lnXefgL%2FYvpaj1bQKDBLz1qxTUMTnn93sq%2FDuPQiqpEOgRdRHEy1RKqFz%2BjGvRrLbzcNdi0jqrRwt8RkbNNlhgoL1ZQRd%2BCd%2BXbR1gSy90vQzkrUvCrV%2FxvP0JN3z7WUBjaeCRVvU2%2FSliBIx%2BPh3GFt%2F7sdd4DU5NKNGyhL941bt0pyusWQDDRf1YTHTr7UWTeHxiy7QfIlFfjUc4vVsPkTIrV78YDDYtZ%2B%2FBjqkARZTI%2FcyMa6V4vz6nIb%2BHX94s%2F7ONtbVv69VtRn1WfsGSL%2BaG9Nfvt%2BBtWuRlWjKPACG6Us%2BGnovTEgiOmnaxWHnDxsn1LxDBjvnBLQIxzU9kEQpk3ZoaCRtJDRbMah3kyo3s6gR3fbZHGhUV682Fa28g51y34mIBIsBLrkwYB4pAnzQfB%2FUe3pa6VLf9fkBulzSUlorn8tKkwvNoypBDSIzBvdA&X-Amz-Signature=12f66296ab4ca3a829119957f4aeadef2a3760878073fcdf85578e86f1002989&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
