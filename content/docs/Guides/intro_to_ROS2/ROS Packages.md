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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXBNV4K5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLaIch4yuDopcYF5UYInyV1%2FvPRkXs%2Bcn3tiLivCBTmAiAu7UtNrT4QFddAcwiPltPJmLHpNcneO3SkCujpQaAkzyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMVfbD6OELrLg918Q6KtwDZj3N3I4D%2BR7vHJ7%2BzJmEUHrUqYDE8jdwvcgdz96Urk6fBL5SPM6wEmgSTp1dYX8ZJxq0omY5ANdvgGW5kcY3ZrXUEKUM5Lv4AVT3M5qbb2meErS1micXLqtOjJXwpscnHi02SVUVAnJDqwOf7YqJ0dABkYIzdVzrhJ8%2BEOzTa%2F3Uv%2BgE1D7XZhagVWXpt9jjndgN5RdXi2jHkw8HwfEt1HO%2BVC%2B%2FbFd6pPe%2BQZxtMaB3hftcim7extYEV2cg87TWWJ5PasbWjqwkcxEo%2BpUnzBP1V2Y5%2BVmOaRB%2BrFyXeBjlq47sb9glQ8aSmyfq1WXdWIcvaVy7RnV3tqesU39Fk284hmS230x7ZExD75B0iAC%2F9h6C1tnnxWjVh7ORprcLXPRjGHIWGnqWUgQyg9UEcK3yihF8%2FUwEispG7KKFlUCzi3Ujv3GvVz%2BrIv92TBpUclpkrGUVhiPhPewuzkJ%2BVDa7it4YQpHvVARfzJhoOgzb%2Bd0nS%2BkgX1NkD9gllDuyHx98dgONNxgl4o9ioGNIAt6gjYIkKVs2VN24CaP9p2dI6FAH456SFk64GXO03oMPjdjsMfHVNgeLFcTi42Vz6yMYc48zL8ntm9kSkaxbaJqNsxHtpZ8lDaI3IgIw%2BOy2wAY6pgEB2A2jyT7L9uzYcVvwCJXkz7avVIxUFcXjRX%2BjRrywWIfFayh4sxp9v6EInjO4AdRfPXgDXuonSQh7DmotUYGqDzzAP6XDpz8ZGVBaTW0Ct2Q9KiltDkLSYWlxURDQ3E5abzbUHcy%2B36cWX2qeYQOhpUJB39XHRQpEH0JIwFAeIG2cvJeK6XJtbrA9FdHDjXsNL0T673rA9XKY%2FbI7JW2XeH9JVeVS&X-Amz-Signature=9b108e92ac4fa9a477ebdc745160de6c48c9f9ba06f8e1eab74db9d0368c4d8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXBNV4K5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLaIch4yuDopcYF5UYInyV1%2FvPRkXs%2Bcn3tiLivCBTmAiAu7UtNrT4QFddAcwiPltPJmLHpNcneO3SkCujpQaAkzyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMVfbD6OELrLg918Q6KtwDZj3N3I4D%2BR7vHJ7%2BzJmEUHrUqYDE8jdwvcgdz96Urk6fBL5SPM6wEmgSTp1dYX8ZJxq0omY5ANdvgGW5kcY3ZrXUEKUM5Lv4AVT3M5qbb2meErS1micXLqtOjJXwpscnHi02SVUVAnJDqwOf7YqJ0dABkYIzdVzrhJ8%2BEOzTa%2F3Uv%2BgE1D7XZhagVWXpt9jjndgN5RdXi2jHkw8HwfEt1HO%2BVC%2B%2FbFd6pPe%2BQZxtMaB3hftcim7extYEV2cg87TWWJ5PasbWjqwkcxEo%2BpUnzBP1V2Y5%2BVmOaRB%2BrFyXeBjlq47sb9glQ8aSmyfq1WXdWIcvaVy7RnV3tqesU39Fk284hmS230x7ZExD75B0iAC%2F9h6C1tnnxWjVh7ORprcLXPRjGHIWGnqWUgQyg9UEcK3yihF8%2FUwEispG7KKFlUCzi3Ujv3GvVz%2BrIv92TBpUclpkrGUVhiPhPewuzkJ%2BVDa7it4YQpHvVARfzJhoOgzb%2Bd0nS%2BkgX1NkD9gllDuyHx98dgONNxgl4o9ioGNIAt6gjYIkKVs2VN24CaP9p2dI6FAH456SFk64GXO03oMPjdjsMfHVNgeLFcTi42Vz6yMYc48zL8ntm9kSkaxbaJqNsxHtpZ8lDaI3IgIw%2BOy2wAY6pgEB2A2jyT7L9uzYcVvwCJXkz7avVIxUFcXjRX%2BjRrywWIfFayh4sxp9v6EInjO4AdRfPXgDXuonSQh7DmotUYGqDzzAP6XDpz8ZGVBaTW0Ct2Q9KiltDkLSYWlxURDQ3E5abzbUHcy%2B36cWX2qeYQOhpUJB39XHRQpEH0JIwFAeIG2cvJeK6XJtbrA9FdHDjXsNL0T673rA9XKY%2FbI7JW2XeH9JVeVS&X-Amz-Signature=53c76f0f88e2704e985cdad82195dc5ff3c197ed389f811b1b97fbe2d308683c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXBNV4K5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLaIch4yuDopcYF5UYInyV1%2FvPRkXs%2Bcn3tiLivCBTmAiAu7UtNrT4QFddAcwiPltPJmLHpNcneO3SkCujpQaAkzyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMVfbD6OELrLg918Q6KtwDZj3N3I4D%2BR7vHJ7%2BzJmEUHrUqYDE8jdwvcgdz96Urk6fBL5SPM6wEmgSTp1dYX8ZJxq0omY5ANdvgGW5kcY3ZrXUEKUM5Lv4AVT3M5qbb2meErS1micXLqtOjJXwpscnHi02SVUVAnJDqwOf7YqJ0dABkYIzdVzrhJ8%2BEOzTa%2F3Uv%2BgE1D7XZhagVWXpt9jjndgN5RdXi2jHkw8HwfEt1HO%2BVC%2B%2FbFd6pPe%2BQZxtMaB3hftcim7extYEV2cg87TWWJ5PasbWjqwkcxEo%2BpUnzBP1V2Y5%2BVmOaRB%2BrFyXeBjlq47sb9glQ8aSmyfq1WXdWIcvaVy7RnV3tqesU39Fk284hmS230x7ZExD75B0iAC%2F9h6C1tnnxWjVh7ORprcLXPRjGHIWGnqWUgQyg9UEcK3yihF8%2FUwEispG7KKFlUCzi3Ujv3GvVz%2BrIv92TBpUclpkrGUVhiPhPewuzkJ%2BVDa7it4YQpHvVARfzJhoOgzb%2Bd0nS%2BkgX1NkD9gllDuyHx98dgONNxgl4o9ioGNIAt6gjYIkKVs2VN24CaP9p2dI6FAH456SFk64GXO03oMPjdjsMfHVNgeLFcTi42Vz6yMYc48zL8ntm9kSkaxbaJqNsxHtpZ8lDaI3IgIw%2BOy2wAY6pgEB2A2jyT7L9uzYcVvwCJXkz7avVIxUFcXjRX%2BjRrywWIfFayh4sxp9v6EInjO4AdRfPXgDXuonSQh7DmotUYGqDzzAP6XDpz8ZGVBaTW0Ct2Q9KiltDkLSYWlxURDQ3E5abzbUHcy%2B36cWX2qeYQOhpUJB39XHRQpEH0JIwFAeIG2cvJeK6XJtbrA9FdHDjXsNL0T673rA9XKY%2FbI7JW2XeH9JVeVS&X-Amz-Signature=48b24699c5937c5a6dbe141c15f2e9b2a8d3c1438b4a81deaf99fc37583b4b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXBNV4K5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLaIch4yuDopcYF5UYInyV1%2FvPRkXs%2Bcn3tiLivCBTmAiAu7UtNrT4QFddAcwiPltPJmLHpNcneO3SkCujpQaAkzyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMVfbD6OELrLg918Q6KtwDZj3N3I4D%2BR7vHJ7%2BzJmEUHrUqYDE8jdwvcgdz96Urk6fBL5SPM6wEmgSTp1dYX8ZJxq0omY5ANdvgGW5kcY3ZrXUEKUM5Lv4AVT3M5qbb2meErS1micXLqtOjJXwpscnHi02SVUVAnJDqwOf7YqJ0dABkYIzdVzrhJ8%2BEOzTa%2F3Uv%2BgE1D7XZhagVWXpt9jjndgN5RdXi2jHkw8HwfEt1HO%2BVC%2B%2FbFd6pPe%2BQZxtMaB3hftcim7extYEV2cg87TWWJ5PasbWjqwkcxEo%2BpUnzBP1V2Y5%2BVmOaRB%2BrFyXeBjlq47sb9glQ8aSmyfq1WXdWIcvaVy7RnV3tqesU39Fk284hmS230x7ZExD75B0iAC%2F9h6C1tnnxWjVh7ORprcLXPRjGHIWGnqWUgQyg9UEcK3yihF8%2FUwEispG7KKFlUCzi3Ujv3GvVz%2BrIv92TBpUclpkrGUVhiPhPewuzkJ%2BVDa7it4YQpHvVARfzJhoOgzb%2Bd0nS%2BkgX1NkD9gllDuyHx98dgONNxgl4o9ioGNIAt6gjYIkKVs2VN24CaP9p2dI6FAH456SFk64GXO03oMPjdjsMfHVNgeLFcTi42Vz6yMYc48zL8ntm9kSkaxbaJqNsxHtpZ8lDaI3IgIw%2BOy2wAY6pgEB2A2jyT7L9uzYcVvwCJXkz7avVIxUFcXjRX%2BjRrywWIfFayh4sxp9v6EInjO4AdRfPXgDXuonSQh7DmotUYGqDzzAP6XDpz8ZGVBaTW0Ct2Q9KiltDkLSYWlxURDQ3E5abzbUHcy%2B36cWX2qeYQOhpUJB39XHRQpEH0JIwFAeIG2cvJeK6XJtbrA9FdHDjXsNL0T673rA9XKY%2FbI7JW2XeH9JVeVS&X-Amz-Signature=873577a4eb533e4a239311ff955a4e54cd3be747f42f6119fef3313757d93f22&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXBNV4K5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLaIch4yuDopcYF5UYInyV1%2FvPRkXs%2Bcn3tiLivCBTmAiAu7UtNrT4QFddAcwiPltPJmLHpNcneO3SkCujpQaAkzyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMVfbD6OELrLg918Q6KtwDZj3N3I4D%2BR7vHJ7%2BzJmEUHrUqYDE8jdwvcgdz96Urk6fBL5SPM6wEmgSTp1dYX8ZJxq0omY5ANdvgGW5kcY3ZrXUEKUM5Lv4AVT3M5qbb2meErS1micXLqtOjJXwpscnHi02SVUVAnJDqwOf7YqJ0dABkYIzdVzrhJ8%2BEOzTa%2F3Uv%2BgE1D7XZhagVWXpt9jjndgN5RdXi2jHkw8HwfEt1HO%2BVC%2B%2FbFd6pPe%2BQZxtMaB3hftcim7extYEV2cg87TWWJ5PasbWjqwkcxEo%2BpUnzBP1V2Y5%2BVmOaRB%2BrFyXeBjlq47sb9glQ8aSmyfq1WXdWIcvaVy7RnV3tqesU39Fk284hmS230x7ZExD75B0iAC%2F9h6C1tnnxWjVh7ORprcLXPRjGHIWGnqWUgQyg9UEcK3yihF8%2FUwEispG7KKFlUCzi3Ujv3GvVz%2BrIv92TBpUclpkrGUVhiPhPewuzkJ%2BVDa7it4YQpHvVARfzJhoOgzb%2Bd0nS%2BkgX1NkD9gllDuyHx98dgONNxgl4o9ioGNIAt6gjYIkKVs2VN24CaP9p2dI6FAH456SFk64GXO03oMPjdjsMfHVNgeLFcTi42Vz6yMYc48zL8ntm9kSkaxbaJqNsxHtpZ8lDaI3IgIw%2BOy2wAY6pgEB2A2jyT7L9uzYcVvwCJXkz7avVIxUFcXjRX%2BjRrywWIfFayh4sxp9v6EInjO4AdRfPXgDXuonSQh7DmotUYGqDzzAP6XDpz8ZGVBaTW0Ct2Q9KiltDkLSYWlxURDQ3E5abzbUHcy%2B36cWX2qeYQOhpUJB39XHRQpEH0JIwFAeIG2cvJeK6XJtbrA9FdHDjXsNL0T673rA9XKY%2FbI7JW2XeH9JVeVS&X-Amz-Signature=122a16b83288f9842720e7a5e2c37ac74cf604574bf600ac3198a3ff2f37a453&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXBNV4K5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLaIch4yuDopcYF5UYInyV1%2FvPRkXs%2Bcn3tiLivCBTmAiAu7UtNrT4QFddAcwiPltPJmLHpNcneO3SkCujpQaAkzyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMVfbD6OELrLg918Q6KtwDZj3N3I4D%2BR7vHJ7%2BzJmEUHrUqYDE8jdwvcgdz96Urk6fBL5SPM6wEmgSTp1dYX8ZJxq0omY5ANdvgGW5kcY3ZrXUEKUM5Lv4AVT3M5qbb2meErS1micXLqtOjJXwpscnHi02SVUVAnJDqwOf7YqJ0dABkYIzdVzrhJ8%2BEOzTa%2F3Uv%2BgE1D7XZhagVWXpt9jjndgN5RdXi2jHkw8HwfEt1HO%2BVC%2B%2FbFd6pPe%2BQZxtMaB3hftcim7extYEV2cg87TWWJ5PasbWjqwkcxEo%2BpUnzBP1V2Y5%2BVmOaRB%2BrFyXeBjlq47sb9glQ8aSmyfq1WXdWIcvaVy7RnV3tqesU39Fk284hmS230x7ZExD75B0iAC%2F9h6C1tnnxWjVh7ORprcLXPRjGHIWGnqWUgQyg9UEcK3yihF8%2FUwEispG7KKFlUCzi3Ujv3GvVz%2BrIv92TBpUclpkrGUVhiPhPewuzkJ%2BVDa7it4YQpHvVARfzJhoOgzb%2Bd0nS%2BkgX1NkD9gllDuyHx98dgONNxgl4o9ioGNIAt6gjYIkKVs2VN24CaP9p2dI6FAH456SFk64GXO03oMPjdjsMfHVNgeLFcTi42Vz6yMYc48zL8ntm9kSkaxbaJqNsxHtpZ8lDaI3IgIw%2BOy2wAY6pgEB2A2jyT7L9uzYcVvwCJXkz7avVIxUFcXjRX%2BjRrywWIfFayh4sxp9v6EInjO4AdRfPXgDXuonSQh7DmotUYGqDzzAP6XDpz8ZGVBaTW0Ct2Q9KiltDkLSYWlxURDQ3E5abzbUHcy%2B36cWX2qeYQOhpUJB39XHRQpEH0JIwFAeIG2cvJeK6XJtbrA9FdHDjXsNL0T673rA9XKY%2FbI7JW2XeH9JVeVS&X-Amz-Signature=22fa16752f3f401280993a39260756aa4b8c785e0393eebee758950f45c66ab4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXBNV4K5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLaIch4yuDopcYF5UYInyV1%2FvPRkXs%2Bcn3tiLivCBTmAiAu7UtNrT4QFddAcwiPltPJmLHpNcneO3SkCujpQaAkzyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMVfbD6OELrLg918Q6KtwDZj3N3I4D%2BR7vHJ7%2BzJmEUHrUqYDE8jdwvcgdz96Urk6fBL5SPM6wEmgSTp1dYX8ZJxq0omY5ANdvgGW5kcY3ZrXUEKUM5Lv4AVT3M5qbb2meErS1micXLqtOjJXwpscnHi02SVUVAnJDqwOf7YqJ0dABkYIzdVzrhJ8%2BEOzTa%2F3Uv%2BgE1D7XZhagVWXpt9jjndgN5RdXi2jHkw8HwfEt1HO%2BVC%2B%2FbFd6pPe%2BQZxtMaB3hftcim7extYEV2cg87TWWJ5PasbWjqwkcxEo%2BpUnzBP1V2Y5%2BVmOaRB%2BrFyXeBjlq47sb9glQ8aSmyfq1WXdWIcvaVy7RnV3tqesU39Fk284hmS230x7ZExD75B0iAC%2F9h6C1tnnxWjVh7ORprcLXPRjGHIWGnqWUgQyg9UEcK3yihF8%2FUwEispG7KKFlUCzi3Ujv3GvVz%2BrIv92TBpUclpkrGUVhiPhPewuzkJ%2BVDa7it4YQpHvVARfzJhoOgzb%2Bd0nS%2BkgX1NkD9gllDuyHx98dgONNxgl4o9ioGNIAt6gjYIkKVs2VN24CaP9p2dI6FAH456SFk64GXO03oMPjdjsMfHVNgeLFcTi42Vz6yMYc48zL8ntm9kSkaxbaJqNsxHtpZ8lDaI3IgIw%2BOy2wAY6pgEB2A2jyT7L9uzYcVvwCJXkz7avVIxUFcXjRX%2BjRrywWIfFayh4sxp9v6EInjO4AdRfPXgDXuonSQh7DmotUYGqDzzAP6XDpz8ZGVBaTW0Ct2Q9KiltDkLSYWlxURDQ3E5abzbUHcy%2B36cWX2qeYQOhpUJB39XHRQpEH0JIwFAeIG2cvJeK6XJtbrA9FdHDjXsNL0T673rA9XKY%2FbI7JW2XeH9JVeVS&X-Amz-Signature=4cfe48031c3b7a8e42b2293d02d4f95c3df3e8314fc9203a9bbca1025238cfa4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
