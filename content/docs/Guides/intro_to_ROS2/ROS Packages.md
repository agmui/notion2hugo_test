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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJINGDJ4%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCysQWh%2FuQlgDdmGXRLvk0%2BrFCQg8w7VXnX8C5%2BjeVe4gIgaV2K1g%2FlBPtriLHse%2Bzc6HWsojteRonbD%2BIUve5eRZMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhvm%2BqvfsFbck%2Fr%2BircA1cFDGcIzP%2BiHOXAoXgMFd%2FfqcNnS65eTrOJxiQOBIPqRBYQb2SV1VWBhB7KawRYJc10L4pG2Mj3WyO6LBc5fM8MmXq48pJMMvR7x1prt%2FbEYK8p5LVcI5zDyuVRzaF5L7b2UXuCL%2FkPSUzraAuzZsWAXNUapqDl%2BJYju%2FyhzlSEtilfHA%2FC%2BMrcVQzg%2FAGLyY7cS8kn4vkFUuy2pzT%2FK7mbz23an%2BXTsChybKNSQxg1qc9pNrpq8Lm0pd1%2FHtuJdiDWYnK%2FUWMMqm9GZjAk%2FIQxrkIJUjJnD%2FlFQaxrqJMx5wK4UVT%2BPKAjIWW23v6A692ZOgmGQeooF3RPUBizkpxnIWysJMvk3Cpz5TAsyS9Q5j5JBMNkmAXTMh9q0i2rlYBqKSSChhuJSCXuInB9%2B9JrWyaULdxeYsWb7FPa9TXqolJz2HDsM4R4y4VGyhO7cMY7U%2BYAnEq7Ru7zRbvzPiTyBQQK7kbO6cBXXJXt5ontGAZBDh4A17wvAOQBMqxFcFqvJ53mQMEzDlOrLQ5V0McyhsboqbT6hJ6zKEbOipBv9hz6VFlFCvrVxeK%2FLUWRtacqIuO8OJ1ilVgxzNhNM8Hjd4sccEBWedt51Q4Jq%2FUCn8IQQxeFJtXMQeMcMMbs0MAGOqUBlRZmvQztyaL2yQnY18uUyYLz%2BdQvgLBCS%2B%2Bq8rbjw%2BZZqtbGtM%2FkVjs3caepUuzYIZcq0jyDXv6NjbG6bwTfM%2FD1oOeHetGzeT34gGa%2FzrnE%2FjY2qSsCVdKUBPeDnF%2F1789ILZKUs9p0%2Fd0ugxMzrw%2FDEz3iZUkgKFDpGQGEQ3gvGTqPAJrWEd1lUeW1fZEunkCi0FvhLIfKDCGSMAFfvnewV5hV&X-Amz-Signature=6dfd962691dbd50f7e2eb8de49fdc431c035de8603907ca34c1d759050060323&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJINGDJ4%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCysQWh%2FuQlgDdmGXRLvk0%2BrFCQg8w7VXnX8C5%2BjeVe4gIgaV2K1g%2FlBPtriLHse%2Bzc6HWsojteRonbD%2BIUve5eRZMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhvm%2BqvfsFbck%2Fr%2BircA1cFDGcIzP%2BiHOXAoXgMFd%2FfqcNnS65eTrOJxiQOBIPqRBYQb2SV1VWBhB7KawRYJc10L4pG2Mj3WyO6LBc5fM8MmXq48pJMMvR7x1prt%2FbEYK8p5LVcI5zDyuVRzaF5L7b2UXuCL%2FkPSUzraAuzZsWAXNUapqDl%2BJYju%2FyhzlSEtilfHA%2FC%2BMrcVQzg%2FAGLyY7cS8kn4vkFUuy2pzT%2FK7mbz23an%2BXTsChybKNSQxg1qc9pNrpq8Lm0pd1%2FHtuJdiDWYnK%2FUWMMqm9GZjAk%2FIQxrkIJUjJnD%2FlFQaxrqJMx5wK4UVT%2BPKAjIWW23v6A692ZOgmGQeooF3RPUBizkpxnIWysJMvk3Cpz5TAsyS9Q5j5JBMNkmAXTMh9q0i2rlYBqKSSChhuJSCXuInB9%2B9JrWyaULdxeYsWb7FPa9TXqolJz2HDsM4R4y4VGyhO7cMY7U%2BYAnEq7Ru7zRbvzPiTyBQQK7kbO6cBXXJXt5ontGAZBDh4A17wvAOQBMqxFcFqvJ53mQMEzDlOrLQ5V0McyhsboqbT6hJ6zKEbOipBv9hz6VFlFCvrVxeK%2FLUWRtacqIuO8OJ1ilVgxzNhNM8Hjd4sccEBWedt51Q4Jq%2FUCn8IQQxeFJtXMQeMcMMbs0MAGOqUBlRZmvQztyaL2yQnY18uUyYLz%2BdQvgLBCS%2B%2Bq8rbjw%2BZZqtbGtM%2FkVjs3caepUuzYIZcq0jyDXv6NjbG6bwTfM%2FD1oOeHetGzeT34gGa%2FzrnE%2FjY2qSsCVdKUBPeDnF%2F1789ILZKUs9p0%2Fd0ugxMzrw%2FDEz3iZUkgKFDpGQGEQ3gvGTqPAJrWEd1lUeW1fZEunkCi0FvhLIfKDCGSMAFfvnewV5hV&X-Amz-Signature=e7de09ec0e14d41877e448501782cd063c9c26c830e0a2350486eb8b6494980c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJINGDJ4%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCysQWh%2FuQlgDdmGXRLvk0%2BrFCQg8w7VXnX8C5%2BjeVe4gIgaV2K1g%2FlBPtriLHse%2Bzc6HWsojteRonbD%2BIUve5eRZMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhvm%2BqvfsFbck%2Fr%2BircA1cFDGcIzP%2BiHOXAoXgMFd%2FfqcNnS65eTrOJxiQOBIPqRBYQb2SV1VWBhB7KawRYJc10L4pG2Mj3WyO6LBc5fM8MmXq48pJMMvR7x1prt%2FbEYK8p5LVcI5zDyuVRzaF5L7b2UXuCL%2FkPSUzraAuzZsWAXNUapqDl%2BJYju%2FyhzlSEtilfHA%2FC%2BMrcVQzg%2FAGLyY7cS8kn4vkFUuy2pzT%2FK7mbz23an%2BXTsChybKNSQxg1qc9pNrpq8Lm0pd1%2FHtuJdiDWYnK%2FUWMMqm9GZjAk%2FIQxrkIJUjJnD%2FlFQaxrqJMx5wK4UVT%2BPKAjIWW23v6A692ZOgmGQeooF3RPUBizkpxnIWysJMvk3Cpz5TAsyS9Q5j5JBMNkmAXTMh9q0i2rlYBqKSSChhuJSCXuInB9%2B9JrWyaULdxeYsWb7FPa9TXqolJz2HDsM4R4y4VGyhO7cMY7U%2BYAnEq7Ru7zRbvzPiTyBQQK7kbO6cBXXJXt5ontGAZBDh4A17wvAOQBMqxFcFqvJ53mQMEzDlOrLQ5V0McyhsboqbT6hJ6zKEbOipBv9hz6VFlFCvrVxeK%2FLUWRtacqIuO8OJ1ilVgxzNhNM8Hjd4sccEBWedt51Q4Jq%2FUCn8IQQxeFJtXMQeMcMMbs0MAGOqUBlRZmvQztyaL2yQnY18uUyYLz%2BdQvgLBCS%2B%2Bq8rbjw%2BZZqtbGtM%2FkVjs3caepUuzYIZcq0jyDXv6NjbG6bwTfM%2FD1oOeHetGzeT34gGa%2FzrnE%2FjY2qSsCVdKUBPeDnF%2F1789ILZKUs9p0%2Fd0ugxMzrw%2FDEz3iZUkgKFDpGQGEQ3gvGTqPAJrWEd1lUeW1fZEunkCi0FvhLIfKDCGSMAFfvnewV5hV&X-Amz-Signature=df912beb03191f84cbf34cdf82549ffc27a437e96f9e89d5c009ce67bbee9b49&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJINGDJ4%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCysQWh%2FuQlgDdmGXRLvk0%2BrFCQg8w7VXnX8C5%2BjeVe4gIgaV2K1g%2FlBPtriLHse%2Bzc6HWsojteRonbD%2BIUve5eRZMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhvm%2BqvfsFbck%2Fr%2BircA1cFDGcIzP%2BiHOXAoXgMFd%2FfqcNnS65eTrOJxiQOBIPqRBYQb2SV1VWBhB7KawRYJc10L4pG2Mj3WyO6LBc5fM8MmXq48pJMMvR7x1prt%2FbEYK8p5LVcI5zDyuVRzaF5L7b2UXuCL%2FkPSUzraAuzZsWAXNUapqDl%2BJYju%2FyhzlSEtilfHA%2FC%2BMrcVQzg%2FAGLyY7cS8kn4vkFUuy2pzT%2FK7mbz23an%2BXTsChybKNSQxg1qc9pNrpq8Lm0pd1%2FHtuJdiDWYnK%2FUWMMqm9GZjAk%2FIQxrkIJUjJnD%2FlFQaxrqJMx5wK4UVT%2BPKAjIWW23v6A692ZOgmGQeooF3RPUBizkpxnIWysJMvk3Cpz5TAsyS9Q5j5JBMNkmAXTMh9q0i2rlYBqKSSChhuJSCXuInB9%2B9JrWyaULdxeYsWb7FPa9TXqolJz2HDsM4R4y4VGyhO7cMY7U%2BYAnEq7Ru7zRbvzPiTyBQQK7kbO6cBXXJXt5ontGAZBDh4A17wvAOQBMqxFcFqvJ53mQMEzDlOrLQ5V0McyhsboqbT6hJ6zKEbOipBv9hz6VFlFCvrVxeK%2FLUWRtacqIuO8OJ1ilVgxzNhNM8Hjd4sccEBWedt51Q4Jq%2FUCn8IQQxeFJtXMQeMcMMbs0MAGOqUBlRZmvQztyaL2yQnY18uUyYLz%2BdQvgLBCS%2B%2Bq8rbjw%2BZZqtbGtM%2FkVjs3caepUuzYIZcq0jyDXv6NjbG6bwTfM%2FD1oOeHetGzeT34gGa%2FzrnE%2FjY2qSsCVdKUBPeDnF%2F1789ILZKUs9p0%2Fd0ugxMzrw%2FDEz3iZUkgKFDpGQGEQ3gvGTqPAJrWEd1lUeW1fZEunkCi0FvhLIfKDCGSMAFfvnewV5hV&X-Amz-Signature=80e0cf9ffa4b90063d1990ed31fba01a0d572578d0aeadd9d77609e342381b31&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJINGDJ4%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCysQWh%2FuQlgDdmGXRLvk0%2BrFCQg8w7VXnX8C5%2BjeVe4gIgaV2K1g%2FlBPtriLHse%2Bzc6HWsojteRonbD%2BIUve5eRZMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhvm%2BqvfsFbck%2Fr%2BircA1cFDGcIzP%2BiHOXAoXgMFd%2FfqcNnS65eTrOJxiQOBIPqRBYQb2SV1VWBhB7KawRYJc10L4pG2Mj3WyO6LBc5fM8MmXq48pJMMvR7x1prt%2FbEYK8p5LVcI5zDyuVRzaF5L7b2UXuCL%2FkPSUzraAuzZsWAXNUapqDl%2BJYju%2FyhzlSEtilfHA%2FC%2BMrcVQzg%2FAGLyY7cS8kn4vkFUuy2pzT%2FK7mbz23an%2BXTsChybKNSQxg1qc9pNrpq8Lm0pd1%2FHtuJdiDWYnK%2FUWMMqm9GZjAk%2FIQxrkIJUjJnD%2FlFQaxrqJMx5wK4UVT%2BPKAjIWW23v6A692ZOgmGQeooF3RPUBizkpxnIWysJMvk3Cpz5TAsyS9Q5j5JBMNkmAXTMh9q0i2rlYBqKSSChhuJSCXuInB9%2B9JrWyaULdxeYsWb7FPa9TXqolJz2HDsM4R4y4VGyhO7cMY7U%2BYAnEq7Ru7zRbvzPiTyBQQK7kbO6cBXXJXt5ontGAZBDh4A17wvAOQBMqxFcFqvJ53mQMEzDlOrLQ5V0McyhsboqbT6hJ6zKEbOipBv9hz6VFlFCvrVxeK%2FLUWRtacqIuO8OJ1ilVgxzNhNM8Hjd4sccEBWedt51Q4Jq%2FUCn8IQQxeFJtXMQeMcMMbs0MAGOqUBlRZmvQztyaL2yQnY18uUyYLz%2BdQvgLBCS%2B%2Bq8rbjw%2BZZqtbGtM%2FkVjs3caepUuzYIZcq0jyDXv6NjbG6bwTfM%2FD1oOeHetGzeT34gGa%2FzrnE%2FjY2qSsCVdKUBPeDnF%2F1789ILZKUs9p0%2Fd0ugxMzrw%2FDEz3iZUkgKFDpGQGEQ3gvGTqPAJrWEd1lUeW1fZEunkCi0FvhLIfKDCGSMAFfvnewV5hV&X-Amz-Signature=fc84b69835072826494eac1019b16b10755fc1f471c698ed8c43f8fc3529b25a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJINGDJ4%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCysQWh%2FuQlgDdmGXRLvk0%2BrFCQg8w7VXnX8C5%2BjeVe4gIgaV2K1g%2FlBPtriLHse%2Bzc6HWsojteRonbD%2BIUve5eRZMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhvm%2BqvfsFbck%2Fr%2BircA1cFDGcIzP%2BiHOXAoXgMFd%2FfqcNnS65eTrOJxiQOBIPqRBYQb2SV1VWBhB7KawRYJc10L4pG2Mj3WyO6LBc5fM8MmXq48pJMMvR7x1prt%2FbEYK8p5LVcI5zDyuVRzaF5L7b2UXuCL%2FkPSUzraAuzZsWAXNUapqDl%2BJYju%2FyhzlSEtilfHA%2FC%2BMrcVQzg%2FAGLyY7cS8kn4vkFUuy2pzT%2FK7mbz23an%2BXTsChybKNSQxg1qc9pNrpq8Lm0pd1%2FHtuJdiDWYnK%2FUWMMqm9GZjAk%2FIQxrkIJUjJnD%2FlFQaxrqJMx5wK4UVT%2BPKAjIWW23v6A692ZOgmGQeooF3RPUBizkpxnIWysJMvk3Cpz5TAsyS9Q5j5JBMNkmAXTMh9q0i2rlYBqKSSChhuJSCXuInB9%2B9JrWyaULdxeYsWb7FPa9TXqolJz2HDsM4R4y4VGyhO7cMY7U%2BYAnEq7Ru7zRbvzPiTyBQQK7kbO6cBXXJXt5ontGAZBDh4A17wvAOQBMqxFcFqvJ53mQMEzDlOrLQ5V0McyhsboqbT6hJ6zKEbOipBv9hz6VFlFCvrVxeK%2FLUWRtacqIuO8OJ1ilVgxzNhNM8Hjd4sccEBWedt51Q4Jq%2FUCn8IQQxeFJtXMQeMcMMbs0MAGOqUBlRZmvQztyaL2yQnY18uUyYLz%2BdQvgLBCS%2B%2Bq8rbjw%2BZZqtbGtM%2FkVjs3caepUuzYIZcq0jyDXv6NjbG6bwTfM%2FD1oOeHetGzeT34gGa%2FzrnE%2FjY2qSsCVdKUBPeDnF%2F1789ILZKUs9p0%2Fd0ugxMzrw%2FDEz3iZUkgKFDpGQGEQ3gvGTqPAJrWEd1lUeW1fZEunkCi0FvhLIfKDCGSMAFfvnewV5hV&X-Amz-Signature=a8b4e640e89715794b4e88285069b29e150a3d5d87896b607043b5da28a21e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJINGDJ4%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCysQWh%2FuQlgDdmGXRLvk0%2BrFCQg8w7VXnX8C5%2BjeVe4gIgaV2K1g%2FlBPtriLHse%2Bzc6HWsojteRonbD%2BIUve5eRZMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhvm%2BqvfsFbck%2Fr%2BircA1cFDGcIzP%2BiHOXAoXgMFd%2FfqcNnS65eTrOJxiQOBIPqRBYQb2SV1VWBhB7KawRYJc10L4pG2Mj3WyO6LBc5fM8MmXq48pJMMvR7x1prt%2FbEYK8p5LVcI5zDyuVRzaF5L7b2UXuCL%2FkPSUzraAuzZsWAXNUapqDl%2BJYju%2FyhzlSEtilfHA%2FC%2BMrcVQzg%2FAGLyY7cS8kn4vkFUuy2pzT%2FK7mbz23an%2BXTsChybKNSQxg1qc9pNrpq8Lm0pd1%2FHtuJdiDWYnK%2FUWMMqm9GZjAk%2FIQxrkIJUjJnD%2FlFQaxrqJMx5wK4UVT%2BPKAjIWW23v6A692ZOgmGQeooF3RPUBizkpxnIWysJMvk3Cpz5TAsyS9Q5j5JBMNkmAXTMh9q0i2rlYBqKSSChhuJSCXuInB9%2B9JrWyaULdxeYsWb7FPa9TXqolJz2HDsM4R4y4VGyhO7cMY7U%2BYAnEq7Ru7zRbvzPiTyBQQK7kbO6cBXXJXt5ontGAZBDh4A17wvAOQBMqxFcFqvJ53mQMEzDlOrLQ5V0McyhsboqbT6hJ6zKEbOipBv9hz6VFlFCvrVxeK%2FLUWRtacqIuO8OJ1ilVgxzNhNM8Hjd4sccEBWedt51Q4Jq%2FUCn8IQQxeFJtXMQeMcMMbs0MAGOqUBlRZmvQztyaL2yQnY18uUyYLz%2BdQvgLBCS%2B%2Bq8rbjw%2BZZqtbGtM%2FkVjs3caepUuzYIZcq0jyDXv6NjbG6bwTfM%2FD1oOeHetGzeT34gGa%2FzrnE%2FjY2qSsCVdKUBPeDnF%2F1789ILZKUs9p0%2Fd0ugxMzrw%2FDEz3iZUkgKFDpGQGEQ3gvGTqPAJrWEd1lUeW1fZEunkCi0FvhLIfKDCGSMAFfvnewV5hV&X-Amz-Signature=6e7cee4b734a124f0d7339b83cf01419323d3d3b184fb5448c69524644c951c8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
