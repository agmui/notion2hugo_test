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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCZ6BD7C%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIF2Fb1%2BnEOHiaExOMHl28415fo3zcgrq0F0oGLIcA%2B1VAiEA48ZCZ%2FKAm6wi2JvoQVsHlKUByBowYrmjhAEgNbcP79sqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA61wVwDGsWePAXU4CrcA62nE%2BjtpaBkSihLI153wSc725ypdbED89TPtbuVHX%2BT4AVY%2FJk7Oz0B329MYtTXjI6WH0kUZTcm5ZCM28tlOyu0imlZjaGygTMQG4o%2BWL8rGzZDFiVHI5pGOP0EgGwhbSf21n4zxpEoYwDU6UlHVdnFpvbGOlt9lgxHnp1XLJOxQerdWwlU8%2BYIlWpyKVAmKfjDW%2BYp8%2FtOA9XsvhEqLF%2BOt3h8udMVbp%2F6JEvN8XWXUvzptuRA9prZrrxOBsP83u2tsFah2W4NCGTBjL0RlZLUvjnEfK1g8wbYSHu9ZFBaqkUe6FBaB2ZTzTjCR%2F70SLYPblsVzw2yi8Xvwx5%2FtE0GvVNZVVUA2uKy38YcxPuh7wfFin7ITAvPFgvnkzRh40TjF%2Bkpt8g3DagR2TsWSHyqj3xP51q9UdkpN964zde5ABlg1yTyHYCuyMehdLzYqsvqSQ6wOPBV0cLsvYOy%2BN8GvlGeumpb7NGJZ4zqR82PhJszW%2FpeVBHWMRCLYrHLLY6Bssx2vhGo4sU8ns%2BKQZQriLawJdMcPU%2BVd0ULxdROLHN%2BgRwdybupTzBcGDAxUvJW6gpv0%2B6yWMstMO2vuYohgzePQfaNGGFuxTSNqR8PXtuZXYMWheYhDB9jMKS5gcEGOqUBx1fP3GQyBo3cHgL1Co0fP6wN5r1ryCFukxpJdTWAnOh1fZpdL4qXVlDosq3ZiZByevpp7FDS0OIH7O%2BW0Wet%2BswBQNnvSQ8KpumLJvBmwEYrhfvocIDzsC4rX7%2BaOA29Ld4uPebvuAUnAlgxOT2Cz1ma33VYwsjshhCxZljPluXGSsxGCQFb7TAreHw5g6j50B2P35W8tPAxCaF9uzgcvUob5ILV&X-Amz-Signature=b640efc78606d2682cd7e9b908e1311dd2a6aa8d769e860447dff0ebd05f4967&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCZ6BD7C%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIF2Fb1%2BnEOHiaExOMHl28415fo3zcgrq0F0oGLIcA%2B1VAiEA48ZCZ%2FKAm6wi2JvoQVsHlKUByBowYrmjhAEgNbcP79sqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA61wVwDGsWePAXU4CrcA62nE%2BjtpaBkSihLI153wSc725ypdbED89TPtbuVHX%2BT4AVY%2FJk7Oz0B329MYtTXjI6WH0kUZTcm5ZCM28tlOyu0imlZjaGygTMQG4o%2BWL8rGzZDFiVHI5pGOP0EgGwhbSf21n4zxpEoYwDU6UlHVdnFpvbGOlt9lgxHnp1XLJOxQerdWwlU8%2BYIlWpyKVAmKfjDW%2BYp8%2FtOA9XsvhEqLF%2BOt3h8udMVbp%2F6JEvN8XWXUvzptuRA9prZrrxOBsP83u2tsFah2W4NCGTBjL0RlZLUvjnEfK1g8wbYSHu9ZFBaqkUe6FBaB2ZTzTjCR%2F70SLYPblsVzw2yi8Xvwx5%2FtE0GvVNZVVUA2uKy38YcxPuh7wfFin7ITAvPFgvnkzRh40TjF%2Bkpt8g3DagR2TsWSHyqj3xP51q9UdkpN964zde5ABlg1yTyHYCuyMehdLzYqsvqSQ6wOPBV0cLsvYOy%2BN8GvlGeumpb7NGJZ4zqR82PhJszW%2FpeVBHWMRCLYrHLLY6Bssx2vhGo4sU8ns%2BKQZQriLawJdMcPU%2BVd0ULxdROLHN%2BgRwdybupTzBcGDAxUvJW6gpv0%2B6yWMstMO2vuYohgzePQfaNGGFuxTSNqR8PXtuZXYMWheYhDB9jMKS5gcEGOqUBx1fP3GQyBo3cHgL1Co0fP6wN5r1ryCFukxpJdTWAnOh1fZpdL4qXVlDosq3ZiZByevpp7FDS0OIH7O%2BW0Wet%2BswBQNnvSQ8KpumLJvBmwEYrhfvocIDzsC4rX7%2BaOA29Ld4uPebvuAUnAlgxOT2Cz1ma33VYwsjshhCxZljPluXGSsxGCQFb7TAreHw5g6j50B2P35W8tPAxCaF9uzgcvUob5ILV&X-Amz-Signature=eff66a3c4b4b4c9ec2df0675a59868627e577d52f40b621bcc3640c3c849e2fc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCZ6BD7C%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIF2Fb1%2BnEOHiaExOMHl28415fo3zcgrq0F0oGLIcA%2B1VAiEA48ZCZ%2FKAm6wi2JvoQVsHlKUByBowYrmjhAEgNbcP79sqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA61wVwDGsWePAXU4CrcA62nE%2BjtpaBkSihLI153wSc725ypdbED89TPtbuVHX%2BT4AVY%2FJk7Oz0B329MYtTXjI6WH0kUZTcm5ZCM28tlOyu0imlZjaGygTMQG4o%2BWL8rGzZDFiVHI5pGOP0EgGwhbSf21n4zxpEoYwDU6UlHVdnFpvbGOlt9lgxHnp1XLJOxQerdWwlU8%2BYIlWpyKVAmKfjDW%2BYp8%2FtOA9XsvhEqLF%2BOt3h8udMVbp%2F6JEvN8XWXUvzptuRA9prZrrxOBsP83u2tsFah2W4NCGTBjL0RlZLUvjnEfK1g8wbYSHu9ZFBaqkUe6FBaB2ZTzTjCR%2F70SLYPblsVzw2yi8Xvwx5%2FtE0GvVNZVVUA2uKy38YcxPuh7wfFin7ITAvPFgvnkzRh40TjF%2Bkpt8g3DagR2TsWSHyqj3xP51q9UdkpN964zde5ABlg1yTyHYCuyMehdLzYqsvqSQ6wOPBV0cLsvYOy%2BN8GvlGeumpb7NGJZ4zqR82PhJszW%2FpeVBHWMRCLYrHLLY6Bssx2vhGo4sU8ns%2BKQZQriLawJdMcPU%2BVd0ULxdROLHN%2BgRwdybupTzBcGDAxUvJW6gpv0%2B6yWMstMO2vuYohgzePQfaNGGFuxTSNqR8PXtuZXYMWheYhDB9jMKS5gcEGOqUBx1fP3GQyBo3cHgL1Co0fP6wN5r1ryCFukxpJdTWAnOh1fZpdL4qXVlDosq3ZiZByevpp7FDS0OIH7O%2BW0Wet%2BswBQNnvSQ8KpumLJvBmwEYrhfvocIDzsC4rX7%2BaOA29Ld4uPebvuAUnAlgxOT2Cz1ma33VYwsjshhCxZljPluXGSsxGCQFb7TAreHw5g6j50B2P35W8tPAxCaF9uzgcvUob5ILV&X-Amz-Signature=5732fa7e9b3b3f283feb57d235128b4aebf84d9915deda6420ca9296cb574cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCZ6BD7C%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIF2Fb1%2BnEOHiaExOMHl28415fo3zcgrq0F0oGLIcA%2B1VAiEA48ZCZ%2FKAm6wi2JvoQVsHlKUByBowYrmjhAEgNbcP79sqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA61wVwDGsWePAXU4CrcA62nE%2BjtpaBkSihLI153wSc725ypdbED89TPtbuVHX%2BT4AVY%2FJk7Oz0B329MYtTXjI6WH0kUZTcm5ZCM28tlOyu0imlZjaGygTMQG4o%2BWL8rGzZDFiVHI5pGOP0EgGwhbSf21n4zxpEoYwDU6UlHVdnFpvbGOlt9lgxHnp1XLJOxQerdWwlU8%2BYIlWpyKVAmKfjDW%2BYp8%2FtOA9XsvhEqLF%2BOt3h8udMVbp%2F6JEvN8XWXUvzptuRA9prZrrxOBsP83u2tsFah2W4NCGTBjL0RlZLUvjnEfK1g8wbYSHu9ZFBaqkUe6FBaB2ZTzTjCR%2F70SLYPblsVzw2yi8Xvwx5%2FtE0GvVNZVVUA2uKy38YcxPuh7wfFin7ITAvPFgvnkzRh40TjF%2Bkpt8g3DagR2TsWSHyqj3xP51q9UdkpN964zde5ABlg1yTyHYCuyMehdLzYqsvqSQ6wOPBV0cLsvYOy%2BN8GvlGeumpb7NGJZ4zqR82PhJszW%2FpeVBHWMRCLYrHLLY6Bssx2vhGo4sU8ns%2BKQZQriLawJdMcPU%2BVd0ULxdROLHN%2BgRwdybupTzBcGDAxUvJW6gpv0%2B6yWMstMO2vuYohgzePQfaNGGFuxTSNqR8PXtuZXYMWheYhDB9jMKS5gcEGOqUBx1fP3GQyBo3cHgL1Co0fP6wN5r1ryCFukxpJdTWAnOh1fZpdL4qXVlDosq3ZiZByevpp7FDS0OIH7O%2BW0Wet%2BswBQNnvSQ8KpumLJvBmwEYrhfvocIDzsC4rX7%2BaOA29Ld4uPebvuAUnAlgxOT2Cz1ma33VYwsjshhCxZljPluXGSsxGCQFb7TAreHw5g6j50B2P35W8tPAxCaF9uzgcvUob5ILV&X-Amz-Signature=2d624a32596f3264c54a2860642a1029484a4bf0bf754cb02ea83e523d5bbe69&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCZ6BD7C%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIF2Fb1%2BnEOHiaExOMHl28415fo3zcgrq0F0oGLIcA%2B1VAiEA48ZCZ%2FKAm6wi2JvoQVsHlKUByBowYrmjhAEgNbcP79sqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA61wVwDGsWePAXU4CrcA62nE%2BjtpaBkSihLI153wSc725ypdbED89TPtbuVHX%2BT4AVY%2FJk7Oz0B329MYtTXjI6WH0kUZTcm5ZCM28tlOyu0imlZjaGygTMQG4o%2BWL8rGzZDFiVHI5pGOP0EgGwhbSf21n4zxpEoYwDU6UlHVdnFpvbGOlt9lgxHnp1XLJOxQerdWwlU8%2BYIlWpyKVAmKfjDW%2BYp8%2FtOA9XsvhEqLF%2BOt3h8udMVbp%2F6JEvN8XWXUvzptuRA9prZrrxOBsP83u2tsFah2W4NCGTBjL0RlZLUvjnEfK1g8wbYSHu9ZFBaqkUe6FBaB2ZTzTjCR%2F70SLYPblsVzw2yi8Xvwx5%2FtE0GvVNZVVUA2uKy38YcxPuh7wfFin7ITAvPFgvnkzRh40TjF%2Bkpt8g3DagR2TsWSHyqj3xP51q9UdkpN964zde5ABlg1yTyHYCuyMehdLzYqsvqSQ6wOPBV0cLsvYOy%2BN8GvlGeumpb7NGJZ4zqR82PhJszW%2FpeVBHWMRCLYrHLLY6Bssx2vhGo4sU8ns%2BKQZQriLawJdMcPU%2BVd0ULxdROLHN%2BgRwdybupTzBcGDAxUvJW6gpv0%2B6yWMstMO2vuYohgzePQfaNGGFuxTSNqR8PXtuZXYMWheYhDB9jMKS5gcEGOqUBx1fP3GQyBo3cHgL1Co0fP6wN5r1ryCFukxpJdTWAnOh1fZpdL4qXVlDosq3ZiZByevpp7FDS0OIH7O%2BW0Wet%2BswBQNnvSQ8KpumLJvBmwEYrhfvocIDzsC4rX7%2BaOA29Ld4uPebvuAUnAlgxOT2Cz1ma33VYwsjshhCxZljPluXGSsxGCQFb7TAreHw5g6j50B2P35W8tPAxCaF9uzgcvUob5ILV&X-Amz-Signature=84ac1a4c9f36024fca975cabeace3e56599b06b47653c77a504ca4b382bf1e95&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCZ6BD7C%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIF2Fb1%2BnEOHiaExOMHl28415fo3zcgrq0F0oGLIcA%2B1VAiEA48ZCZ%2FKAm6wi2JvoQVsHlKUByBowYrmjhAEgNbcP79sqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA61wVwDGsWePAXU4CrcA62nE%2BjtpaBkSihLI153wSc725ypdbED89TPtbuVHX%2BT4AVY%2FJk7Oz0B329MYtTXjI6WH0kUZTcm5ZCM28tlOyu0imlZjaGygTMQG4o%2BWL8rGzZDFiVHI5pGOP0EgGwhbSf21n4zxpEoYwDU6UlHVdnFpvbGOlt9lgxHnp1XLJOxQerdWwlU8%2BYIlWpyKVAmKfjDW%2BYp8%2FtOA9XsvhEqLF%2BOt3h8udMVbp%2F6JEvN8XWXUvzptuRA9prZrrxOBsP83u2tsFah2W4NCGTBjL0RlZLUvjnEfK1g8wbYSHu9ZFBaqkUe6FBaB2ZTzTjCR%2F70SLYPblsVzw2yi8Xvwx5%2FtE0GvVNZVVUA2uKy38YcxPuh7wfFin7ITAvPFgvnkzRh40TjF%2Bkpt8g3DagR2TsWSHyqj3xP51q9UdkpN964zde5ABlg1yTyHYCuyMehdLzYqsvqSQ6wOPBV0cLsvYOy%2BN8GvlGeumpb7NGJZ4zqR82PhJszW%2FpeVBHWMRCLYrHLLY6Bssx2vhGo4sU8ns%2BKQZQriLawJdMcPU%2BVd0ULxdROLHN%2BgRwdybupTzBcGDAxUvJW6gpv0%2B6yWMstMO2vuYohgzePQfaNGGFuxTSNqR8PXtuZXYMWheYhDB9jMKS5gcEGOqUBx1fP3GQyBo3cHgL1Co0fP6wN5r1ryCFukxpJdTWAnOh1fZpdL4qXVlDosq3ZiZByevpp7FDS0OIH7O%2BW0Wet%2BswBQNnvSQ8KpumLJvBmwEYrhfvocIDzsC4rX7%2BaOA29Ld4uPebvuAUnAlgxOT2Cz1ma33VYwsjshhCxZljPluXGSsxGCQFb7TAreHw5g6j50B2P35W8tPAxCaF9uzgcvUob5ILV&X-Amz-Signature=ed429307755a8b18ec82d69e0fc15eea4ceaf75cf9e6d3f3be1d203ab3472b98&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCZ6BD7C%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIF2Fb1%2BnEOHiaExOMHl28415fo3zcgrq0F0oGLIcA%2B1VAiEA48ZCZ%2FKAm6wi2JvoQVsHlKUByBowYrmjhAEgNbcP79sqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA61wVwDGsWePAXU4CrcA62nE%2BjtpaBkSihLI153wSc725ypdbED89TPtbuVHX%2BT4AVY%2FJk7Oz0B329MYtTXjI6WH0kUZTcm5ZCM28tlOyu0imlZjaGygTMQG4o%2BWL8rGzZDFiVHI5pGOP0EgGwhbSf21n4zxpEoYwDU6UlHVdnFpvbGOlt9lgxHnp1XLJOxQerdWwlU8%2BYIlWpyKVAmKfjDW%2BYp8%2FtOA9XsvhEqLF%2BOt3h8udMVbp%2F6JEvN8XWXUvzptuRA9prZrrxOBsP83u2tsFah2W4NCGTBjL0RlZLUvjnEfK1g8wbYSHu9ZFBaqkUe6FBaB2ZTzTjCR%2F70SLYPblsVzw2yi8Xvwx5%2FtE0GvVNZVVUA2uKy38YcxPuh7wfFin7ITAvPFgvnkzRh40TjF%2Bkpt8g3DagR2TsWSHyqj3xP51q9UdkpN964zde5ABlg1yTyHYCuyMehdLzYqsvqSQ6wOPBV0cLsvYOy%2BN8GvlGeumpb7NGJZ4zqR82PhJszW%2FpeVBHWMRCLYrHLLY6Bssx2vhGo4sU8ns%2BKQZQriLawJdMcPU%2BVd0ULxdROLHN%2BgRwdybupTzBcGDAxUvJW6gpv0%2B6yWMstMO2vuYohgzePQfaNGGFuxTSNqR8PXtuZXYMWheYhDB9jMKS5gcEGOqUBx1fP3GQyBo3cHgL1Co0fP6wN5r1ryCFukxpJdTWAnOh1fZpdL4qXVlDosq3ZiZByevpp7FDS0OIH7O%2BW0Wet%2BswBQNnvSQ8KpumLJvBmwEYrhfvocIDzsC4rX7%2BaOA29Ld4uPebvuAUnAlgxOT2Cz1ma33VYwsjshhCxZljPluXGSsxGCQFb7TAreHw5g6j50B2P35W8tPAxCaF9uzgcvUob5ILV&X-Amz-Signature=2312bcc2e863b9371cb3fc26dab3ff498f91bd73f8cc9b3ae1e8eb24f9baa7d9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
