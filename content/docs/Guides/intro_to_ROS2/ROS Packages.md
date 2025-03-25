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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CMLIF5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1oxaHKOrdILWS1O03bPOe9YRe6sCs%2FhYdelBZy85iHAiEAldXCx5oMu5foZrzgOcue%2FX4Tb7pqILfcevYSVgi%2BmFkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDd6yBAbZt3XXgqJLCrcA8aVJvpDnTb45zq62ZqpxWTxsSHJIuhdKmcsWvFU8uWbESaZcfCuB0GkrQInvUNS1Ck0%2BUv%2FcZEUjM1c6GSgHqtVqmZdrZTVcBJJn%2FmDFdcw1OFubtGx17JUHPy8idWAzJhpey4Zeyf%2FZ9d5BPbWAZQxC%2BHWXoAaxcXycvkHP8xGNtTwG%2B4DyeZfiJlKzRjpry%2Fex09CN2mgtV%2B4Z3dumThwK3AA%2F322K93VovmP84dBD7TSKrN0b7bTV6ayyKiNuzl%2FLJw6BzUZX9tsTkdeDccMyol%2BMkFEj29J7SlN3Sqaf7fx6U0nvoDwJQf5C6qC2f88RnJwDOqSBFxFsaGj8DEL94AoBVMjvsgKE6GInhUUwxK2pgK3bWWEpvXHXNm2S7lWg2nTIv9Z3V9W1u2uyf89nE6DYvCXsEPxfWqfSO9JPryB6N5Tw0TgPJmr5d2D53unQSejR0I45faS4TQnFGctOdgMawS8TojXjOaahU1PG%2FO9Qp0%2FHih8yQwyYT0gUJWdJFmgtcmWesNcEng06tlA7Lb9uANekKzXs%2BW39xigdo8fwwCDxiN8gkC%2Bh6mzDWqA6ilT7wwzKfPegHxzdcAJ1NvE%2FYclXCSr8Zcfs1M4ep%2FoGxmqckJC%2Fi8dMJzEi78GOqUBLUKm852MDFdbG6SwJumxv6DYdUpU26%2FwJZ4J4rTbfnAk%2FhYtqkhgEiscGUyz33GBVF0mIsIpgMoFTPAzod1sB%2BagKjOvBiyr0peP405YeBXqq6HO9moO6GPuJPYlo6AwlR9zO1NPef03c9kMXBCdsyc3G6NJx0YIc6LP3Hq7aXHJV52qaQaUElZKtMNRvFwZSw%2BNRyfSYKV5MYx972cd%2BfBt00hQ&X-Amz-Signature=67efd203c1dd71c08f84a6cb7b2f3b9da8cb5527050a9a70673f2477b57635c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CMLIF5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1oxaHKOrdILWS1O03bPOe9YRe6sCs%2FhYdelBZy85iHAiEAldXCx5oMu5foZrzgOcue%2FX4Tb7pqILfcevYSVgi%2BmFkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDd6yBAbZt3XXgqJLCrcA8aVJvpDnTb45zq62ZqpxWTxsSHJIuhdKmcsWvFU8uWbESaZcfCuB0GkrQInvUNS1Ck0%2BUv%2FcZEUjM1c6GSgHqtVqmZdrZTVcBJJn%2FmDFdcw1OFubtGx17JUHPy8idWAzJhpey4Zeyf%2FZ9d5BPbWAZQxC%2BHWXoAaxcXycvkHP8xGNtTwG%2B4DyeZfiJlKzRjpry%2Fex09CN2mgtV%2B4Z3dumThwK3AA%2F322K93VovmP84dBD7TSKrN0b7bTV6ayyKiNuzl%2FLJw6BzUZX9tsTkdeDccMyol%2BMkFEj29J7SlN3Sqaf7fx6U0nvoDwJQf5C6qC2f88RnJwDOqSBFxFsaGj8DEL94AoBVMjvsgKE6GInhUUwxK2pgK3bWWEpvXHXNm2S7lWg2nTIv9Z3V9W1u2uyf89nE6DYvCXsEPxfWqfSO9JPryB6N5Tw0TgPJmr5d2D53unQSejR0I45faS4TQnFGctOdgMawS8TojXjOaahU1PG%2FO9Qp0%2FHih8yQwyYT0gUJWdJFmgtcmWesNcEng06tlA7Lb9uANekKzXs%2BW39xigdo8fwwCDxiN8gkC%2Bh6mzDWqA6ilT7wwzKfPegHxzdcAJ1NvE%2FYclXCSr8Zcfs1M4ep%2FoGxmqckJC%2Fi8dMJzEi78GOqUBLUKm852MDFdbG6SwJumxv6DYdUpU26%2FwJZ4J4rTbfnAk%2FhYtqkhgEiscGUyz33GBVF0mIsIpgMoFTPAzod1sB%2BagKjOvBiyr0peP405YeBXqq6HO9moO6GPuJPYlo6AwlR9zO1NPef03c9kMXBCdsyc3G6NJx0YIc6LP3Hq7aXHJV52qaQaUElZKtMNRvFwZSw%2BNRyfSYKV5MYx972cd%2BfBt00hQ&X-Amz-Signature=843e61b0503df7039d119469883081c9fc89b3ff91a4831f68b93784df5f0313&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CMLIF5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1oxaHKOrdILWS1O03bPOe9YRe6sCs%2FhYdelBZy85iHAiEAldXCx5oMu5foZrzgOcue%2FX4Tb7pqILfcevYSVgi%2BmFkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDd6yBAbZt3XXgqJLCrcA8aVJvpDnTb45zq62ZqpxWTxsSHJIuhdKmcsWvFU8uWbESaZcfCuB0GkrQInvUNS1Ck0%2BUv%2FcZEUjM1c6GSgHqtVqmZdrZTVcBJJn%2FmDFdcw1OFubtGx17JUHPy8idWAzJhpey4Zeyf%2FZ9d5BPbWAZQxC%2BHWXoAaxcXycvkHP8xGNtTwG%2B4DyeZfiJlKzRjpry%2Fex09CN2mgtV%2B4Z3dumThwK3AA%2F322K93VovmP84dBD7TSKrN0b7bTV6ayyKiNuzl%2FLJw6BzUZX9tsTkdeDccMyol%2BMkFEj29J7SlN3Sqaf7fx6U0nvoDwJQf5C6qC2f88RnJwDOqSBFxFsaGj8DEL94AoBVMjvsgKE6GInhUUwxK2pgK3bWWEpvXHXNm2S7lWg2nTIv9Z3V9W1u2uyf89nE6DYvCXsEPxfWqfSO9JPryB6N5Tw0TgPJmr5d2D53unQSejR0I45faS4TQnFGctOdgMawS8TojXjOaahU1PG%2FO9Qp0%2FHih8yQwyYT0gUJWdJFmgtcmWesNcEng06tlA7Lb9uANekKzXs%2BW39xigdo8fwwCDxiN8gkC%2Bh6mzDWqA6ilT7wwzKfPegHxzdcAJ1NvE%2FYclXCSr8Zcfs1M4ep%2FoGxmqckJC%2Fi8dMJzEi78GOqUBLUKm852MDFdbG6SwJumxv6DYdUpU26%2FwJZ4J4rTbfnAk%2FhYtqkhgEiscGUyz33GBVF0mIsIpgMoFTPAzod1sB%2BagKjOvBiyr0peP405YeBXqq6HO9moO6GPuJPYlo6AwlR9zO1NPef03c9kMXBCdsyc3G6NJx0YIc6LP3Hq7aXHJV52qaQaUElZKtMNRvFwZSw%2BNRyfSYKV5MYx972cd%2BfBt00hQ&X-Amz-Signature=a5cb5f7444def1a277c158d2d1275e70137677dbb90673f5da357985a8284e90&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CMLIF5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1oxaHKOrdILWS1O03bPOe9YRe6sCs%2FhYdelBZy85iHAiEAldXCx5oMu5foZrzgOcue%2FX4Tb7pqILfcevYSVgi%2BmFkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDd6yBAbZt3XXgqJLCrcA8aVJvpDnTb45zq62ZqpxWTxsSHJIuhdKmcsWvFU8uWbESaZcfCuB0GkrQInvUNS1Ck0%2BUv%2FcZEUjM1c6GSgHqtVqmZdrZTVcBJJn%2FmDFdcw1OFubtGx17JUHPy8idWAzJhpey4Zeyf%2FZ9d5BPbWAZQxC%2BHWXoAaxcXycvkHP8xGNtTwG%2B4DyeZfiJlKzRjpry%2Fex09CN2mgtV%2B4Z3dumThwK3AA%2F322K93VovmP84dBD7TSKrN0b7bTV6ayyKiNuzl%2FLJw6BzUZX9tsTkdeDccMyol%2BMkFEj29J7SlN3Sqaf7fx6U0nvoDwJQf5C6qC2f88RnJwDOqSBFxFsaGj8DEL94AoBVMjvsgKE6GInhUUwxK2pgK3bWWEpvXHXNm2S7lWg2nTIv9Z3V9W1u2uyf89nE6DYvCXsEPxfWqfSO9JPryB6N5Tw0TgPJmr5d2D53unQSejR0I45faS4TQnFGctOdgMawS8TojXjOaahU1PG%2FO9Qp0%2FHih8yQwyYT0gUJWdJFmgtcmWesNcEng06tlA7Lb9uANekKzXs%2BW39xigdo8fwwCDxiN8gkC%2Bh6mzDWqA6ilT7wwzKfPegHxzdcAJ1NvE%2FYclXCSr8Zcfs1M4ep%2FoGxmqckJC%2Fi8dMJzEi78GOqUBLUKm852MDFdbG6SwJumxv6DYdUpU26%2FwJZ4J4rTbfnAk%2FhYtqkhgEiscGUyz33GBVF0mIsIpgMoFTPAzod1sB%2BagKjOvBiyr0peP405YeBXqq6HO9moO6GPuJPYlo6AwlR9zO1NPef03c9kMXBCdsyc3G6NJx0YIc6LP3Hq7aXHJV52qaQaUElZKtMNRvFwZSw%2BNRyfSYKV5MYx972cd%2BfBt00hQ&X-Amz-Signature=903bfcf47ce8702ba03ebe0854e723e5b4f6140328604157113c1461d1e4bfc3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CMLIF5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1oxaHKOrdILWS1O03bPOe9YRe6sCs%2FhYdelBZy85iHAiEAldXCx5oMu5foZrzgOcue%2FX4Tb7pqILfcevYSVgi%2BmFkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDd6yBAbZt3XXgqJLCrcA8aVJvpDnTb45zq62ZqpxWTxsSHJIuhdKmcsWvFU8uWbESaZcfCuB0GkrQInvUNS1Ck0%2BUv%2FcZEUjM1c6GSgHqtVqmZdrZTVcBJJn%2FmDFdcw1OFubtGx17JUHPy8idWAzJhpey4Zeyf%2FZ9d5BPbWAZQxC%2BHWXoAaxcXycvkHP8xGNtTwG%2B4DyeZfiJlKzRjpry%2Fex09CN2mgtV%2B4Z3dumThwK3AA%2F322K93VovmP84dBD7TSKrN0b7bTV6ayyKiNuzl%2FLJw6BzUZX9tsTkdeDccMyol%2BMkFEj29J7SlN3Sqaf7fx6U0nvoDwJQf5C6qC2f88RnJwDOqSBFxFsaGj8DEL94AoBVMjvsgKE6GInhUUwxK2pgK3bWWEpvXHXNm2S7lWg2nTIv9Z3V9W1u2uyf89nE6DYvCXsEPxfWqfSO9JPryB6N5Tw0TgPJmr5d2D53unQSejR0I45faS4TQnFGctOdgMawS8TojXjOaahU1PG%2FO9Qp0%2FHih8yQwyYT0gUJWdJFmgtcmWesNcEng06tlA7Lb9uANekKzXs%2BW39xigdo8fwwCDxiN8gkC%2Bh6mzDWqA6ilT7wwzKfPegHxzdcAJ1NvE%2FYclXCSr8Zcfs1M4ep%2FoGxmqckJC%2Fi8dMJzEi78GOqUBLUKm852MDFdbG6SwJumxv6DYdUpU26%2FwJZ4J4rTbfnAk%2FhYtqkhgEiscGUyz33GBVF0mIsIpgMoFTPAzod1sB%2BagKjOvBiyr0peP405YeBXqq6HO9moO6GPuJPYlo6AwlR9zO1NPef03c9kMXBCdsyc3G6NJx0YIc6LP3Hq7aXHJV52qaQaUElZKtMNRvFwZSw%2BNRyfSYKV5MYx972cd%2BfBt00hQ&X-Amz-Signature=3ae72656253c3b997379434946174ac4c8b1c35bf3fe7edfb025c8e963d65eb7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CMLIF5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1oxaHKOrdILWS1O03bPOe9YRe6sCs%2FhYdelBZy85iHAiEAldXCx5oMu5foZrzgOcue%2FX4Tb7pqILfcevYSVgi%2BmFkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDd6yBAbZt3XXgqJLCrcA8aVJvpDnTb45zq62ZqpxWTxsSHJIuhdKmcsWvFU8uWbESaZcfCuB0GkrQInvUNS1Ck0%2BUv%2FcZEUjM1c6GSgHqtVqmZdrZTVcBJJn%2FmDFdcw1OFubtGx17JUHPy8idWAzJhpey4Zeyf%2FZ9d5BPbWAZQxC%2BHWXoAaxcXycvkHP8xGNtTwG%2B4DyeZfiJlKzRjpry%2Fex09CN2mgtV%2B4Z3dumThwK3AA%2F322K93VovmP84dBD7TSKrN0b7bTV6ayyKiNuzl%2FLJw6BzUZX9tsTkdeDccMyol%2BMkFEj29J7SlN3Sqaf7fx6U0nvoDwJQf5C6qC2f88RnJwDOqSBFxFsaGj8DEL94AoBVMjvsgKE6GInhUUwxK2pgK3bWWEpvXHXNm2S7lWg2nTIv9Z3V9W1u2uyf89nE6DYvCXsEPxfWqfSO9JPryB6N5Tw0TgPJmr5d2D53unQSejR0I45faS4TQnFGctOdgMawS8TojXjOaahU1PG%2FO9Qp0%2FHih8yQwyYT0gUJWdJFmgtcmWesNcEng06tlA7Lb9uANekKzXs%2BW39xigdo8fwwCDxiN8gkC%2Bh6mzDWqA6ilT7wwzKfPegHxzdcAJ1NvE%2FYclXCSr8Zcfs1M4ep%2FoGxmqckJC%2Fi8dMJzEi78GOqUBLUKm852MDFdbG6SwJumxv6DYdUpU26%2FwJZ4J4rTbfnAk%2FhYtqkhgEiscGUyz33GBVF0mIsIpgMoFTPAzod1sB%2BagKjOvBiyr0peP405YeBXqq6HO9moO6GPuJPYlo6AwlR9zO1NPef03c9kMXBCdsyc3G6NJx0YIc6LP3Hq7aXHJV52qaQaUElZKtMNRvFwZSw%2BNRyfSYKV5MYx972cd%2BfBt00hQ&X-Amz-Signature=ee47ecf1afe37e6a6385939fc0fd9c064944cc406b1edf700229d39f43b92467&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CMLIF5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1oxaHKOrdILWS1O03bPOe9YRe6sCs%2FhYdelBZy85iHAiEAldXCx5oMu5foZrzgOcue%2FX4Tb7pqILfcevYSVgi%2BmFkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDd6yBAbZt3XXgqJLCrcA8aVJvpDnTb45zq62ZqpxWTxsSHJIuhdKmcsWvFU8uWbESaZcfCuB0GkrQInvUNS1Ck0%2BUv%2FcZEUjM1c6GSgHqtVqmZdrZTVcBJJn%2FmDFdcw1OFubtGx17JUHPy8idWAzJhpey4Zeyf%2FZ9d5BPbWAZQxC%2BHWXoAaxcXycvkHP8xGNtTwG%2B4DyeZfiJlKzRjpry%2Fex09CN2mgtV%2B4Z3dumThwK3AA%2F322K93VovmP84dBD7TSKrN0b7bTV6ayyKiNuzl%2FLJw6BzUZX9tsTkdeDccMyol%2BMkFEj29J7SlN3Sqaf7fx6U0nvoDwJQf5C6qC2f88RnJwDOqSBFxFsaGj8DEL94AoBVMjvsgKE6GInhUUwxK2pgK3bWWEpvXHXNm2S7lWg2nTIv9Z3V9W1u2uyf89nE6DYvCXsEPxfWqfSO9JPryB6N5Tw0TgPJmr5d2D53unQSejR0I45faS4TQnFGctOdgMawS8TojXjOaahU1PG%2FO9Qp0%2FHih8yQwyYT0gUJWdJFmgtcmWesNcEng06tlA7Lb9uANekKzXs%2BW39xigdo8fwwCDxiN8gkC%2Bh6mzDWqA6ilT7wwzKfPegHxzdcAJ1NvE%2FYclXCSr8Zcfs1M4ep%2FoGxmqckJC%2Fi8dMJzEi78GOqUBLUKm852MDFdbG6SwJumxv6DYdUpU26%2FwJZ4J4rTbfnAk%2FhYtqkhgEiscGUyz33GBVF0mIsIpgMoFTPAzod1sB%2BagKjOvBiyr0peP405YeBXqq6HO9moO6GPuJPYlo6AwlR9zO1NPef03c9kMXBCdsyc3G6NJx0YIc6LP3Hq7aXHJV52qaQaUElZKtMNRvFwZSw%2BNRyfSYKV5MYx972cd%2BfBt00hQ&X-Amz-Signature=5d85f4ad8a9dbd4fa32c0560b5661dc190077784610b580fd89b8bf455454b46&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
