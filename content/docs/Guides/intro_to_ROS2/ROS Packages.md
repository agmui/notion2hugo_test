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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTTHU6R%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCEWdFuF8vEelkLCG%2F3BoTOkCIa10sh7vLuGtWEZAWjLAIgGEUZPDbcx%2BvgydjVi3OEd697BIa3zkcTqMUbT8w2%2By0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu1ZYKI8LWVL7ncrircAyv4TN14znM8DJmzNNVpxK0ZmRQoMaJXaC9Zkq4ZgOEjWHuucNgSSzeWdw8aHGzLL1yQW8UqPyPeGXUdrvBNPXaG7XKOUCMhCVv5kxNK8CayvfFy6SJWdojBaCRXdRDMze4Lk0HwHplN%2FtOwoQz9dOymWo5Jst3ZzPoBoaLv95xACkThycY%2FcImkjIMSAj2zLdvaafhMdcenpu3bUlqwgE2Yr6fqqbQqmmvA%2B67W555EHM7pZbBt3qRXWXC8ll5dX8IdtDTBT32E49S1mjJE57B3EwHStk2izUgWTjMgAMl4VkKe5%2F1R1ANBFFDxJlRwUgBOqoMmLbFREcyZpvejI5F20hErJ3M0bijqV%2BbbqQrYrMwDnYIoLzHe2NbhFbOD0SfltLxhgyZsn4N6cQ6xCI6lIx0G%2FYh4cpIneda9DV6ig%2BpSucQ%2F3qGeQ5ktu64OzN4opOzdqKA022TxhOBihj7YKJEiVS6VkI7BohP6iR%2FjS6Tzz5O0M3Yre%2B3vz07diHdy9YnktJOt68zM2dGGyE1TRwel7PE0YzaBn0J5X6f1LsFWJ9JwJ46CvY6blLLR4yLHDXBU8To%2F2%2FHzVzHUrosdgFwA0jgV0Chqe4EaReatuhDVTdLtiZ1rMsrSMMf3usEGOqUB2jzIVCQ8zvFVmsdyuPptzeNydbmtjTOetCS1VmFlDzXxq%2BH9oC8edC3yN88%2FR4mBzO9O0WwSOqU1Y8xtEgPaZvTqZ2gsFH1hHJEc6tCiAhAhlz4Cm4PYW0a9OhV6w%2BqO0iKkLcpDwsuAwE4KiRTiN7hG36QPBdLxVUoaATtvZ0r5npTfq1U02gYI0uIDj7gxpzZ9BDaa%2FBrITjQ2eT6JS8%2FiJbHi&X-Amz-Signature=f0a37f822f2d9bf78ba26101c321463075e85fe1bc2c6883426867e28afc94a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTTHU6R%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCEWdFuF8vEelkLCG%2F3BoTOkCIa10sh7vLuGtWEZAWjLAIgGEUZPDbcx%2BvgydjVi3OEd697BIa3zkcTqMUbT8w2%2By0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu1ZYKI8LWVL7ncrircAyv4TN14znM8DJmzNNVpxK0ZmRQoMaJXaC9Zkq4ZgOEjWHuucNgSSzeWdw8aHGzLL1yQW8UqPyPeGXUdrvBNPXaG7XKOUCMhCVv5kxNK8CayvfFy6SJWdojBaCRXdRDMze4Lk0HwHplN%2FtOwoQz9dOymWo5Jst3ZzPoBoaLv95xACkThycY%2FcImkjIMSAj2zLdvaafhMdcenpu3bUlqwgE2Yr6fqqbQqmmvA%2B67W555EHM7pZbBt3qRXWXC8ll5dX8IdtDTBT32E49S1mjJE57B3EwHStk2izUgWTjMgAMl4VkKe5%2F1R1ANBFFDxJlRwUgBOqoMmLbFREcyZpvejI5F20hErJ3M0bijqV%2BbbqQrYrMwDnYIoLzHe2NbhFbOD0SfltLxhgyZsn4N6cQ6xCI6lIx0G%2FYh4cpIneda9DV6ig%2BpSucQ%2F3qGeQ5ktu64OzN4opOzdqKA022TxhOBihj7YKJEiVS6VkI7BohP6iR%2FjS6Tzz5O0M3Yre%2B3vz07diHdy9YnktJOt68zM2dGGyE1TRwel7PE0YzaBn0J5X6f1LsFWJ9JwJ46CvY6blLLR4yLHDXBU8To%2F2%2FHzVzHUrosdgFwA0jgV0Chqe4EaReatuhDVTdLtiZ1rMsrSMMf3usEGOqUB2jzIVCQ8zvFVmsdyuPptzeNydbmtjTOetCS1VmFlDzXxq%2BH9oC8edC3yN88%2FR4mBzO9O0WwSOqU1Y8xtEgPaZvTqZ2gsFH1hHJEc6tCiAhAhlz4Cm4PYW0a9OhV6w%2BqO0iKkLcpDwsuAwE4KiRTiN7hG36QPBdLxVUoaATtvZ0r5npTfq1U02gYI0uIDj7gxpzZ9BDaa%2FBrITjQ2eT6JS8%2FiJbHi&X-Amz-Signature=667a1b59424d97613b3e4c2a3c818b41fb06c03e877fe43c969bee85791e4014&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTTHU6R%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCEWdFuF8vEelkLCG%2F3BoTOkCIa10sh7vLuGtWEZAWjLAIgGEUZPDbcx%2BvgydjVi3OEd697BIa3zkcTqMUbT8w2%2By0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu1ZYKI8LWVL7ncrircAyv4TN14znM8DJmzNNVpxK0ZmRQoMaJXaC9Zkq4ZgOEjWHuucNgSSzeWdw8aHGzLL1yQW8UqPyPeGXUdrvBNPXaG7XKOUCMhCVv5kxNK8CayvfFy6SJWdojBaCRXdRDMze4Lk0HwHplN%2FtOwoQz9dOymWo5Jst3ZzPoBoaLv95xACkThycY%2FcImkjIMSAj2zLdvaafhMdcenpu3bUlqwgE2Yr6fqqbQqmmvA%2B67W555EHM7pZbBt3qRXWXC8ll5dX8IdtDTBT32E49S1mjJE57B3EwHStk2izUgWTjMgAMl4VkKe5%2F1R1ANBFFDxJlRwUgBOqoMmLbFREcyZpvejI5F20hErJ3M0bijqV%2BbbqQrYrMwDnYIoLzHe2NbhFbOD0SfltLxhgyZsn4N6cQ6xCI6lIx0G%2FYh4cpIneda9DV6ig%2BpSucQ%2F3qGeQ5ktu64OzN4opOzdqKA022TxhOBihj7YKJEiVS6VkI7BohP6iR%2FjS6Tzz5O0M3Yre%2B3vz07diHdy9YnktJOt68zM2dGGyE1TRwel7PE0YzaBn0J5X6f1LsFWJ9JwJ46CvY6blLLR4yLHDXBU8To%2F2%2FHzVzHUrosdgFwA0jgV0Chqe4EaReatuhDVTdLtiZ1rMsrSMMf3usEGOqUB2jzIVCQ8zvFVmsdyuPptzeNydbmtjTOetCS1VmFlDzXxq%2BH9oC8edC3yN88%2FR4mBzO9O0WwSOqU1Y8xtEgPaZvTqZ2gsFH1hHJEc6tCiAhAhlz4Cm4PYW0a9OhV6w%2BqO0iKkLcpDwsuAwE4KiRTiN7hG36QPBdLxVUoaATtvZ0r5npTfq1U02gYI0uIDj7gxpzZ9BDaa%2FBrITjQ2eT6JS8%2FiJbHi&X-Amz-Signature=ff77ba899fe9e9dca62e0b076e42b650cc998665335b78ee502142d0dfc4b3e5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTTHU6R%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCEWdFuF8vEelkLCG%2F3BoTOkCIa10sh7vLuGtWEZAWjLAIgGEUZPDbcx%2BvgydjVi3OEd697BIa3zkcTqMUbT8w2%2By0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu1ZYKI8LWVL7ncrircAyv4TN14znM8DJmzNNVpxK0ZmRQoMaJXaC9Zkq4ZgOEjWHuucNgSSzeWdw8aHGzLL1yQW8UqPyPeGXUdrvBNPXaG7XKOUCMhCVv5kxNK8CayvfFy6SJWdojBaCRXdRDMze4Lk0HwHplN%2FtOwoQz9dOymWo5Jst3ZzPoBoaLv95xACkThycY%2FcImkjIMSAj2zLdvaafhMdcenpu3bUlqwgE2Yr6fqqbQqmmvA%2B67W555EHM7pZbBt3qRXWXC8ll5dX8IdtDTBT32E49S1mjJE57B3EwHStk2izUgWTjMgAMl4VkKe5%2F1R1ANBFFDxJlRwUgBOqoMmLbFREcyZpvejI5F20hErJ3M0bijqV%2BbbqQrYrMwDnYIoLzHe2NbhFbOD0SfltLxhgyZsn4N6cQ6xCI6lIx0G%2FYh4cpIneda9DV6ig%2BpSucQ%2F3qGeQ5ktu64OzN4opOzdqKA022TxhOBihj7YKJEiVS6VkI7BohP6iR%2FjS6Tzz5O0M3Yre%2B3vz07diHdy9YnktJOt68zM2dGGyE1TRwel7PE0YzaBn0J5X6f1LsFWJ9JwJ46CvY6blLLR4yLHDXBU8To%2F2%2FHzVzHUrosdgFwA0jgV0Chqe4EaReatuhDVTdLtiZ1rMsrSMMf3usEGOqUB2jzIVCQ8zvFVmsdyuPptzeNydbmtjTOetCS1VmFlDzXxq%2BH9oC8edC3yN88%2FR4mBzO9O0WwSOqU1Y8xtEgPaZvTqZ2gsFH1hHJEc6tCiAhAhlz4Cm4PYW0a9OhV6w%2BqO0iKkLcpDwsuAwE4KiRTiN7hG36QPBdLxVUoaATtvZ0r5npTfq1U02gYI0uIDj7gxpzZ9BDaa%2FBrITjQ2eT6JS8%2FiJbHi&X-Amz-Signature=661775fb01359abc83cfbba4cf735bed0b35be420857484850ef9e6db7d5b341&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTTHU6R%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCEWdFuF8vEelkLCG%2F3BoTOkCIa10sh7vLuGtWEZAWjLAIgGEUZPDbcx%2BvgydjVi3OEd697BIa3zkcTqMUbT8w2%2By0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu1ZYKI8LWVL7ncrircAyv4TN14znM8DJmzNNVpxK0ZmRQoMaJXaC9Zkq4ZgOEjWHuucNgSSzeWdw8aHGzLL1yQW8UqPyPeGXUdrvBNPXaG7XKOUCMhCVv5kxNK8CayvfFy6SJWdojBaCRXdRDMze4Lk0HwHplN%2FtOwoQz9dOymWo5Jst3ZzPoBoaLv95xACkThycY%2FcImkjIMSAj2zLdvaafhMdcenpu3bUlqwgE2Yr6fqqbQqmmvA%2B67W555EHM7pZbBt3qRXWXC8ll5dX8IdtDTBT32E49S1mjJE57B3EwHStk2izUgWTjMgAMl4VkKe5%2F1R1ANBFFDxJlRwUgBOqoMmLbFREcyZpvejI5F20hErJ3M0bijqV%2BbbqQrYrMwDnYIoLzHe2NbhFbOD0SfltLxhgyZsn4N6cQ6xCI6lIx0G%2FYh4cpIneda9DV6ig%2BpSucQ%2F3qGeQ5ktu64OzN4opOzdqKA022TxhOBihj7YKJEiVS6VkI7BohP6iR%2FjS6Tzz5O0M3Yre%2B3vz07diHdy9YnktJOt68zM2dGGyE1TRwel7PE0YzaBn0J5X6f1LsFWJ9JwJ46CvY6blLLR4yLHDXBU8To%2F2%2FHzVzHUrosdgFwA0jgV0Chqe4EaReatuhDVTdLtiZ1rMsrSMMf3usEGOqUB2jzIVCQ8zvFVmsdyuPptzeNydbmtjTOetCS1VmFlDzXxq%2BH9oC8edC3yN88%2FR4mBzO9O0WwSOqU1Y8xtEgPaZvTqZ2gsFH1hHJEc6tCiAhAhlz4Cm4PYW0a9OhV6w%2BqO0iKkLcpDwsuAwE4KiRTiN7hG36QPBdLxVUoaATtvZ0r5npTfq1U02gYI0uIDj7gxpzZ9BDaa%2FBrITjQ2eT6JS8%2FiJbHi&X-Amz-Signature=70e48356674e5ac88523ff1b1bf86d1b1dbbf747b06be2b02f8f9c725ff12edc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTTHU6R%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCEWdFuF8vEelkLCG%2F3BoTOkCIa10sh7vLuGtWEZAWjLAIgGEUZPDbcx%2BvgydjVi3OEd697BIa3zkcTqMUbT8w2%2By0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu1ZYKI8LWVL7ncrircAyv4TN14znM8DJmzNNVpxK0ZmRQoMaJXaC9Zkq4ZgOEjWHuucNgSSzeWdw8aHGzLL1yQW8UqPyPeGXUdrvBNPXaG7XKOUCMhCVv5kxNK8CayvfFy6SJWdojBaCRXdRDMze4Lk0HwHplN%2FtOwoQz9dOymWo5Jst3ZzPoBoaLv95xACkThycY%2FcImkjIMSAj2zLdvaafhMdcenpu3bUlqwgE2Yr6fqqbQqmmvA%2B67W555EHM7pZbBt3qRXWXC8ll5dX8IdtDTBT32E49S1mjJE57B3EwHStk2izUgWTjMgAMl4VkKe5%2F1R1ANBFFDxJlRwUgBOqoMmLbFREcyZpvejI5F20hErJ3M0bijqV%2BbbqQrYrMwDnYIoLzHe2NbhFbOD0SfltLxhgyZsn4N6cQ6xCI6lIx0G%2FYh4cpIneda9DV6ig%2BpSucQ%2F3qGeQ5ktu64OzN4opOzdqKA022TxhOBihj7YKJEiVS6VkI7BohP6iR%2FjS6Tzz5O0M3Yre%2B3vz07diHdy9YnktJOt68zM2dGGyE1TRwel7PE0YzaBn0J5X6f1LsFWJ9JwJ46CvY6blLLR4yLHDXBU8To%2F2%2FHzVzHUrosdgFwA0jgV0Chqe4EaReatuhDVTdLtiZ1rMsrSMMf3usEGOqUB2jzIVCQ8zvFVmsdyuPptzeNydbmtjTOetCS1VmFlDzXxq%2BH9oC8edC3yN88%2FR4mBzO9O0WwSOqU1Y8xtEgPaZvTqZ2gsFH1hHJEc6tCiAhAhlz4Cm4PYW0a9OhV6w%2BqO0iKkLcpDwsuAwE4KiRTiN7hG36QPBdLxVUoaATtvZ0r5npTfq1U02gYI0uIDj7gxpzZ9BDaa%2FBrITjQ2eT6JS8%2FiJbHi&X-Amz-Signature=64996648d994d4524dd9baca25d226e30a33a6c095f2c13ab5e11a216b0cc3b4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTTHU6R%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCEWdFuF8vEelkLCG%2F3BoTOkCIa10sh7vLuGtWEZAWjLAIgGEUZPDbcx%2BvgydjVi3OEd697BIa3zkcTqMUbT8w2%2By0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCu1ZYKI8LWVL7ncrircAyv4TN14znM8DJmzNNVpxK0ZmRQoMaJXaC9Zkq4ZgOEjWHuucNgSSzeWdw8aHGzLL1yQW8UqPyPeGXUdrvBNPXaG7XKOUCMhCVv5kxNK8CayvfFy6SJWdojBaCRXdRDMze4Lk0HwHplN%2FtOwoQz9dOymWo5Jst3ZzPoBoaLv95xACkThycY%2FcImkjIMSAj2zLdvaafhMdcenpu3bUlqwgE2Yr6fqqbQqmmvA%2B67W555EHM7pZbBt3qRXWXC8ll5dX8IdtDTBT32E49S1mjJE57B3EwHStk2izUgWTjMgAMl4VkKe5%2F1R1ANBFFDxJlRwUgBOqoMmLbFREcyZpvejI5F20hErJ3M0bijqV%2BbbqQrYrMwDnYIoLzHe2NbhFbOD0SfltLxhgyZsn4N6cQ6xCI6lIx0G%2FYh4cpIneda9DV6ig%2BpSucQ%2F3qGeQ5ktu64OzN4opOzdqKA022TxhOBihj7YKJEiVS6VkI7BohP6iR%2FjS6Tzz5O0M3Yre%2B3vz07diHdy9YnktJOt68zM2dGGyE1TRwel7PE0YzaBn0J5X6f1LsFWJ9JwJ46CvY6blLLR4yLHDXBU8To%2F2%2FHzVzHUrosdgFwA0jgV0Chqe4EaReatuhDVTdLtiZ1rMsrSMMf3usEGOqUB2jzIVCQ8zvFVmsdyuPptzeNydbmtjTOetCS1VmFlDzXxq%2BH9oC8edC3yN88%2FR4mBzO9O0WwSOqU1Y8xtEgPaZvTqZ2gsFH1hHJEc6tCiAhAhlz4Cm4PYW0a9OhV6w%2BqO0iKkLcpDwsuAwE4KiRTiN7hG36QPBdLxVUoaATtvZ0r5npTfq1U02gYI0uIDj7gxpzZ9BDaa%2FBrITjQ2eT6JS8%2FiJbHi&X-Amz-Signature=f14ab9845636d962494180dcfa8e40c4ddafee2f33abd08bcf64e8333a061df6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
