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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYGYAJLT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoJjck5ateNBoNfXUHqAWNirLySpXHLhXL7970DJXKQQIgTOv%2FAbXvVSvwLP2O9YkMu8YgOmbG2OOWYCO1sdY0XjIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIdY5cBjXQQTP3bOxircA7gMsT0rPjuYWMuGVTm%2B7p%2BCv5qtNO7lKnNSxz%2FEOhUsY9Ot%2F2WFlhkw1%2F2moiORN1%2BtvjZY4KpQF8xiGhXLawmN2LhPZQhx9DtM%2BbQGJfL%2B1XCWzp694P15%2BWFM5szVzmL1EnithjMLKliRzBa%2Fw2zIDXD%2Bj%2B5xUBJh4yYxiyOSwb3N3wwnGevuITOHb4PUWfkazZwUJPHAt8ww0ZmTJ8vIpAfpbcC4cjKwFYS7zL4c7SUB5oIBfvsZEd2UOpGuty9y4VTmeGRGci9LRuGwLXHIZToamo67nlLYLcEo%2Fp15sEw6HI0jgyYu2XB5nve4wg1wZlflU3zqXlWt9CGHYxBIOwsSxdbsqGcAAfMMhXtfAGj%2FM9jTkpPUOXUOLaC5%2FQzy3xW94Uu4JIxsQj4H47eZY3VIYlR%2BjrmDAHUw1gXVYf4CizQXQmZHCQZ%2BFaJWA%2Fz35lotQyW016vV2iqf66470DIt03ubJ4LVkd8TJJevQRiB6RxpqLKAYYkKbo0Vbewa0D7gXRJtPduv6O8BTWreynm6vRYRsSreRtkVlfH0P5%2BUXTyUTOYj%2Fuhs8UZ7RUSeDATp8nlsR4e0O5DUL5QgYIrpdXI8fD8wgoaMWYh4sDxfXd8DUIQmzhzHMPKIx8IGOqUBnvFQF6smeMNFKp1K3rN%2BzfBWmHtlvhny8Z3F9mXH1WNR0a3AnyCFEp24YdtC3ArRTVDUhSC%2BDDWmZo5ahDGxXcgzgXduBRQKBqVdDUTgcMugNqeRZ29j2GuMg0iqMxbyBgHaWHtxu1N0KMjxhZgggvwu2e7owSOR7YVJSZj1mlUImJ5m2tl3kyz0Hj73hmbxspSj7EE5ou1%2BGCp3%2B6QNxiiJeuvU&X-Amz-Signature=08d8ccf9f4ed57fa3dcc83a3607151330f3af84b2296c4509e296c9cbbd44c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYGYAJLT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoJjck5ateNBoNfXUHqAWNirLySpXHLhXL7970DJXKQQIgTOv%2FAbXvVSvwLP2O9YkMu8YgOmbG2OOWYCO1sdY0XjIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIdY5cBjXQQTP3bOxircA7gMsT0rPjuYWMuGVTm%2B7p%2BCv5qtNO7lKnNSxz%2FEOhUsY9Ot%2F2WFlhkw1%2F2moiORN1%2BtvjZY4KpQF8xiGhXLawmN2LhPZQhx9DtM%2BbQGJfL%2B1XCWzp694P15%2BWFM5szVzmL1EnithjMLKliRzBa%2Fw2zIDXD%2Bj%2B5xUBJh4yYxiyOSwb3N3wwnGevuITOHb4PUWfkazZwUJPHAt8ww0ZmTJ8vIpAfpbcC4cjKwFYS7zL4c7SUB5oIBfvsZEd2UOpGuty9y4VTmeGRGci9LRuGwLXHIZToamo67nlLYLcEo%2Fp15sEw6HI0jgyYu2XB5nve4wg1wZlflU3zqXlWt9CGHYxBIOwsSxdbsqGcAAfMMhXtfAGj%2FM9jTkpPUOXUOLaC5%2FQzy3xW94Uu4JIxsQj4H47eZY3VIYlR%2BjrmDAHUw1gXVYf4CizQXQmZHCQZ%2BFaJWA%2Fz35lotQyW016vV2iqf66470DIt03ubJ4LVkd8TJJevQRiB6RxpqLKAYYkKbo0Vbewa0D7gXRJtPduv6O8BTWreynm6vRYRsSreRtkVlfH0P5%2BUXTyUTOYj%2Fuhs8UZ7RUSeDATp8nlsR4e0O5DUL5QgYIrpdXI8fD8wgoaMWYh4sDxfXd8DUIQmzhzHMPKIx8IGOqUBnvFQF6smeMNFKp1K3rN%2BzfBWmHtlvhny8Z3F9mXH1WNR0a3AnyCFEp24YdtC3ArRTVDUhSC%2BDDWmZo5ahDGxXcgzgXduBRQKBqVdDUTgcMugNqeRZ29j2GuMg0iqMxbyBgHaWHtxu1N0KMjxhZgggvwu2e7owSOR7YVJSZj1mlUImJ5m2tl3kyz0Hj73hmbxspSj7EE5ou1%2BGCp3%2B6QNxiiJeuvU&X-Amz-Signature=aaa86baf313958769e9ffc7ad13ad6e3d79deb12b8d2c67411af60532071db4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYGYAJLT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoJjck5ateNBoNfXUHqAWNirLySpXHLhXL7970DJXKQQIgTOv%2FAbXvVSvwLP2O9YkMu8YgOmbG2OOWYCO1sdY0XjIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIdY5cBjXQQTP3bOxircA7gMsT0rPjuYWMuGVTm%2B7p%2BCv5qtNO7lKnNSxz%2FEOhUsY9Ot%2F2WFlhkw1%2F2moiORN1%2BtvjZY4KpQF8xiGhXLawmN2LhPZQhx9DtM%2BbQGJfL%2B1XCWzp694P15%2BWFM5szVzmL1EnithjMLKliRzBa%2Fw2zIDXD%2Bj%2B5xUBJh4yYxiyOSwb3N3wwnGevuITOHb4PUWfkazZwUJPHAt8ww0ZmTJ8vIpAfpbcC4cjKwFYS7zL4c7SUB5oIBfvsZEd2UOpGuty9y4VTmeGRGci9LRuGwLXHIZToamo67nlLYLcEo%2Fp15sEw6HI0jgyYu2XB5nve4wg1wZlflU3zqXlWt9CGHYxBIOwsSxdbsqGcAAfMMhXtfAGj%2FM9jTkpPUOXUOLaC5%2FQzy3xW94Uu4JIxsQj4H47eZY3VIYlR%2BjrmDAHUw1gXVYf4CizQXQmZHCQZ%2BFaJWA%2Fz35lotQyW016vV2iqf66470DIt03ubJ4LVkd8TJJevQRiB6RxpqLKAYYkKbo0Vbewa0D7gXRJtPduv6O8BTWreynm6vRYRsSreRtkVlfH0P5%2BUXTyUTOYj%2Fuhs8UZ7RUSeDATp8nlsR4e0O5DUL5QgYIrpdXI8fD8wgoaMWYh4sDxfXd8DUIQmzhzHMPKIx8IGOqUBnvFQF6smeMNFKp1K3rN%2BzfBWmHtlvhny8Z3F9mXH1WNR0a3AnyCFEp24YdtC3ArRTVDUhSC%2BDDWmZo5ahDGxXcgzgXduBRQKBqVdDUTgcMugNqeRZ29j2GuMg0iqMxbyBgHaWHtxu1N0KMjxhZgggvwu2e7owSOR7YVJSZj1mlUImJ5m2tl3kyz0Hj73hmbxspSj7EE5ou1%2BGCp3%2B6QNxiiJeuvU&X-Amz-Signature=400a8cfc8c2560a060a20f549c96633105f6c739301416a63d10fa5562a88796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYGYAJLT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoJjck5ateNBoNfXUHqAWNirLySpXHLhXL7970DJXKQQIgTOv%2FAbXvVSvwLP2O9YkMu8YgOmbG2OOWYCO1sdY0XjIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIdY5cBjXQQTP3bOxircA7gMsT0rPjuYWMuGVTm%2B7p%2BCv5qtNO7lKnNSxz%2FEOhUsY9Ot%2F2WFlhkw1%2F2moiORN1%2BtvjZY4KpQF8xiGhXLawmN2LhPZQhx9DtM%2BbQGJfL%2B1XCWzp694P15%2BWFM5szVzmL1EnithjMLKliRzBa%2Fw2zIDXD%2Bj%2B5xUBJh4yYxiyOSwb3N3wwnGevuITOHb4PUWfkazZwUJPHAt8ww0ZmTJ8vIpAfpbcC4cjKwFYS7zL4c7SUB5oIBfvsZEd2UOpGuty9y4VTmeGRGci9LRuGwLXHIZToamo67nlLYLcEo%2Fp15sEw6HI0jgyYu2XB5nve4wg1wZlflU3zqXlWt9CGHYxBIOwsSxdbsqGcAAfMMhXtfAGj%2FM9jTkpPUOXUOLaC5%2FQzy3xW94Uu4JIxsQj4H47eZY3VIYlR%2BjrmDAHUw1gXVYf4CizQXQmZHCQZ%2BFaJWA%2Fz35lotQyW016vV2iqf66470DIt03ubJ4LVkd8TJJevQRiB6RxpqLKAYYkKbo0Vbewa0D7gXRJtPduv6O8BTWreynm6vRYRsSreRtkVlfH0P5%2BUXTyUTOYj%2Fuhs8UZ7RUSeDATp8nlsR4e0O5DUL5QgYIrpdXI8fD8wgoaMWYh4sDxfXd8DUIQmzhzHMPKIx8IGOqUBnvFQF6smeMNFKp1K3rN%2BzfBWmHtlvhny8Z3F9mXH1WNR0a3AnyCFEp24YdtC3ArRTVDUhSC%2BDDWmZo5ahDGxXcgzgXduBRQKBqVdDUTgcMugNqeRZ29j2GuMg0iqMxbyBgHaWHtxu1N0KMjxhZgggvwu2e7owSOR7YVJSZj1mlUImJ5m2tl3kyz0Hj73hmbxspSj7EE5ou1%2BGCp3%2B6QNxiiJeuvU&X-Amz-Signature=21312f93c47c107a138dd4bc43ce2ece8b4fe41c812d48f1706a713ba7db2e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYGYAJLT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoJjck5ateNBoNfXUHqAWNirLySpXHLhXL7970DJXKQQIgTOv%2FAbXvVSvwLP2O9YkMu8YgOmbG2OOWYCO1sdY0XjIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIdY5cBjXQQTP3bOxircA7gMsT0rPjuYWMuGVTm%2B7p%2BCv5qtNO7lKnNSxz%2FEOhUsY9Ot%2F2WFlhkw1%2F2moiORN1%2BtvjZY4KpQF8xiGhXLawmN2LhPZQhx9DtM%2BbQGJfL%2B1XCWzp694P15%2BWFM5szVzmL1EnithjMLKliRzBa%2Fw2zIDXD%2Bj%2B5xUBJh4yYxiyOSwb3N3wwnGevuITOHb4PUWfkazZwUJPHAt8ww0ZmTJ8vIpAfpbcC4cjKwFYS7zL4c7SUB5oIBfvsZEd2UOpGuty9y4VTmeGRGci9LRuGwLXHIZToamo67nlLYLcEo%2Fp15sEw6HI0jgyYu2XB5nve4wg1wZlflU3zqXlWt9CGHYxBIOwsSxdbsqGcAAfMMhXtfAGj%2FM9jTkpPUOXUOLaC5%2FQzy3xW94Uu4JIxsQj4H47eZY3VIYlR%2BjrmDAHUw1gXVYf4CizQXQmZHCQZ%2BFaJWA%2Fz35lotQyW016vV2iqf66470DIt03ubJ4LVkd8TJJevQRiB6RxpqLKAYYkKbo0Vbewa0D7gXRJtPduv6O8BTWreynm6vRYRsSreRtkVlfH0P5%2BUXTyUTOYj%2Fuhs8UZ7RUSeDATp8nlsR4e0O5DUL5QgYIrpdXI8fD8wgoaMWYh4sDxfXd8DUIQmzhzHMPKIx8IGOqUBnvFQF6smeMNFKp1K3rN%2BzfBWmHtlvhny8Z3F9mXH1WNR0a3AnyCFEp24YdtC3ArRTVDUhSC%2BDDWmZo5ahDGxXcgzgXduBRQKBqVdDUTgcMugNqeRZ29j2GuMg0iqMxbyBgHaWHtxu1N0KMjxhZgggvwu2e7owSOR7YVJSZj1mlUImJ5m2tl3kyz0Hj73hmbxspSj7EE5ou1%2BGCp3%2B6QNxiiJeuvU&X-Amz-Signature=c09f0b8443afecdc37ff83e743d909a7cffb412104dc75237df6b29f1d9bd795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYGYAJLT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoJjck5ateNBoNfXUHqAWNirLySpXHLhXL7970DJXKQQIgTOv%2FAbXvVSvwLP2O9YkMu8YgOmbG2OOWYCO1sdY0XjIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIdY5cBjXQQTP3bOxircA7gMsT0rPjuYWMuGVTm%2B7p%2BCv5qtNO7lKnNSxz%2FEOhUsY9Ot%2F2WFlhkw1%2F2moiORN1%2BtvjZY4KpQF8xiGhXLawmN2LhPZQhx9DtM%2BbQGJfL%2B1XCWzp694P15%2BWFM5szVzmL1EnithjMLKliRzBa%2Fw2zIDXD%2Bj%2B5xUBJh4yYxiyOSwb3N3wwnGevuITOHb4PUWfkazZwUJPHAt8ww0ZmTJ8vIpAfpbcC4cjKwFYS7zL4c7SUB5oIBfvsZEd2UOpGuty9y4VTmeGRGci9LRuGwLXHIZToamo67nlLYLcEo%2Fp15sEw6HI0jgyYu2XB5nve4wg1wZlflU3zqXlWt9CGHYxBIOwsSxdbsqGcAAfMMhXtfAGj%2FM9jTkpPUOXUOLaC5%2FQzy3xW94Uu4JIxsQj4H47eZY3VIYlR%2BjrmDAHUw1gXVYf4CizQXQmZHCQZ%2BFaJWA%2Fz35lotQyW016vV2iqf66470DIt03ubJ4LVkd8TJJevQRiB6RxpqLKAYYkKbo0Vbewa0D7gXRJtPduv6O8BTWreynm6vRYRsSreRtkVlfH0P5%2BUXTyUTOYj%2Fuhs8UZ7RUSeDATp8nlsR4e0O5DUL5QgYIrpdXI8fD8wgoaMWYh4sDxfXd8DUIQmzhzHMPKIx8IGOqUBnvFQF6smeMNFKp1K3rN%2BzfBWmHtlvhny8Z3F9mXH1WNR0a3AnyCFEp24YdtC3ArRTVDUhSC%2BDDWmZo5ahDGxXcgzgXduBRQKBqVdDUTgcMugNqeRZ29j2GuMg0iqMxbyBgHaWHtxu1N0KMjxhZgggvwu2e7owSOR7YVJSZj1mlUImJ5m2tl3kyz0Hj73hmbxspSj7EE5ou1%2BGCp3%2B6QNxiiJeuvU&X-Amz-Signature=f813a805416423b6f650e3a7bce7af094dc807270457c3080de97d0eb1fa2b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYGYAJLT%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoJjck5ateNBoNfXUHqAWNirLySpXHLhXL7970DJXKQQIgTOv%2FAbXvVSvwLP2O9YkMu8YgOmbG2OOWYCO1sdY0XjIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIdY5cBjXQQTP3bOxircA7gMsT0rPjuYWMuGVTm%2B7p%2BCv5qtNO7lKnNSxz%2FEOhUsY9Ot%2F2WFlhkw1%2F2moiORN1%2BtvjZY4KpQF8xiGhXLawmN2LhPZQhx9DtM%2BbQGJfL%2B1XCWzp694P15%2BWFM5szVzmL1EnithjMLKliRzBa%2Fw2zIDXD%2Bj%2B5xUBJh4yYxiyOSwb3N3wwnGevuITOHb4PUWfkazZwUJPHAt8ww0ZmTJ8vIpAfpbcC4cjKwFYS7zL4c7SUB5oIBfvsZEd2UOpGuty9y4VTmeGRGci9LRuGwLXHIZToamo67nlLYLcEo%2Fp15sEw6HI0jgyYu2XB5nve4wg1wZlflU3zqXlWt9CGHYxBIOwsSxdbsqGcAAfMMhXtfAGj%2FM9jTkpPUOXUOLaC5%2FQzy3xW94Uu4JIxsQj4H47eZY3VIYlR%2BjrmDAHUw1gXVYf4CizQXQmZHCQZ%2BFaJWA%2Fz35lotQyW016vV2iqf66470DIt03ubJ4LVkd8TJJevQRiB6RxpqLKAYYkKbo0Vbewa0D7gXRJtPduv6O8BTWreynm6vRYRsSreRtkVlfH0P5%2BUXTyUTOYj%2Fuhs8UZ7RUSeDATp8nlsR4e0O5DUL5QgYIrpdXI8fD8wgoaMWYh4sDxfXd8DUIQmzhzHMPKIx8IGOqUBnvFQF6smeMNFKp1K3rN%2BzfBWmHtlvhny8Z3F9mXH1WNR0a3AnyCFEp24YdtC3ArRTVDUhSC%2BDDWmZo5ahDGxXcgzgXduBRQKBqVdDUTgcMugNqeRZ29j2GuMg0iqMxbyBgHaWHtxu1N0KMjxhZgggvwu2e7owSOR7YVJSZj1mlUImJ5m2tl3kyz0Hj73hmbxspSj7EE5ou1%2BGCp3%2B6QNxiiJeuvU&X-Amz-Signature=0872d5dabcf614ceacba5a2dc267ca9f1dd6c93b240f26e9774e23928caf0f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
