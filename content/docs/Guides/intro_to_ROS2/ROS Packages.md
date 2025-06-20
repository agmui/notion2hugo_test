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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25LUAK4%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICF7KiQtcYjigF3fOJZuGQ5bD7N0KMtXM1Ivn6Wr2apnAiEAghjNz4V5CZppZTolIG%2Bv6CLAgQFOdqX24PM2DUj9rNQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcxP7fcTVipL3bxMyrcA3yRi4%2FuMaTnzqXsJddLSmUISae57D9V4FNvjm%2FO908YkkGLc1fMLYXLiXzqMKuO3JJA7mDkqFd8YxQvOe9LblryzUiEwlxcHCZJAPUn8pdt8WYeat7diH99EQk%2BwwAO1GggPI0y3dZDTO587b%2BHra3AbIaP1pAL5KnnhX7UCv7jJsq0OTOEE7RLqHNP%2BpzDWj7Ug5i9mS8OKxQ%2BT3ssuZ1KvZjQQLSs%2FmX0N69zZeyrschIJvWaHtKhGRR0TuJLFwBh1ZGToWTK50Q%2BPuQXvbCfNSoDeAV9fp9htx07dWX4Lx7Ywagl9Yor4TpfGgn5sdswl9jtxCmENSsARPcHhj8SX6V4DgELsZsLMLdDXdbku1msMqPXM1r42q8ePuC17iMBb%2BaoJRrPjVNqofIHKqLwNTbAUzGdOOODoXYpZRhNJv5GtQXxRqfDJQtV1uTG%2FJnIaP%2BMhJkBgCzFKEJA4FU7oocZkKDA1roNaLyHo9S9duSe1NT0Gw%2Bf1tHs7VRkzvkk71SYcSauylnqLEi2I4IPRH5xS3Y1TOC85zH6b7aBolX4T9wIe%2BkzjHbROTG896MUT%2F2cOk%2FbScOXJzARic2upIwrrmHawSm7Nq5LR7iiNH3A5cwKRu2XYy%2FZMKj008IGOqUBIBlQijSc6SnlglbAwx%2FlVPR%2FHl%2BbMPcSo0B6P7y3iJBRbjno6xxOCdcjphkHrQBe7acb3MDLb1KFrOZv24PTZUvEYCRn%2BhyqQq0CNRJR8JgfEUSuF9ozAuS%2FIoQUzjew%2BN%2Bt9F247NVCoFhjIwXPOQ413hA%2FFhW849RC5oizsRvnT1CLRMRDGV2wAvsCayiFqBW2g97e%2Fyf%2FzeNo5tmTAUS463uX&X-Amz-Signature=2329ecb2dda153a9b7d26f94db72aea743b2298eb3b64d0c2dc1f4bbd731d648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25LUAK4%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICF7KiQtcYjigF3fOJZuGQ5bD7N0KMtXM1Ivn6Wr2apnAiEAghjNz4V5CZppZTolIG%2Bv6CLAgQFOdqX24PM2DUj9rNQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcxP7fcTVipL3bxMyrcA3yRi4%2FuMaTnzqXsJddLSmUISae57D9V4FNvjm%2FO908YkkGLc1fMLYXLiXzqMKuO3JJA7mDkqFd8YxQvOe9LblryzUiEwlxcHCZJAPUn8pdt8WYeat7diH99EQk%2BwwAO1GggPI0y3dZDTO587b%2BHra3AbIaP1pAL5KnnhX7UCv7jJsq0OTOEE7RLqHNP%2BpzDWj7Ug5i9mS8OKxQ%2BT3ssuZ1KvZjQQLSs%2FmX0N69zZeyrschIJvWaHtKhGRR0TuJLFwBh1ZGToWTK50Q%2BPuQXvbCfNSoDeAV9fp9htx07dWX4Lx7Ywagl9Yor4TpfGgn5sdswl9jtxCmENSsARPcHhj8SX6V4DgELsZsLMLdDXdbku1msMqPXM1r42q8ePuC17iMBb%2BaoJRrPjVNqofIHKqLwNTbAUzGdOOODoXYpZRhNJv5GtQXxRqfDJQtV1uTG%2FJnIaP%2BMhJkBgCzFKEJA4FU7oocZkKDA1roNaLyHo9S9duSe1NT0Gw%2Bf1tHs7VRkzvkk71SYcSauylnqLEi2I4IPRH5xS3Y1TOC85zH6b7aBolX4T9wIe%2BkzjHbROTG896MUT%2F2cOk%2FbScOXJzARic2upIwrrmHawSm7Nq5LR7iiNH3A5cwKRu2XYy%2FZMKj008IGOqUBIBlQijSc6SnlglbAwx%2FlVPR%2FHl%2BbMPcSo0B6P7y3iJBRbjno6xxOCdcjphkHrQBe7acb3MDLb1KFrOZv24PTZUvEYCRn%2BhyqQq0CNRJR8JgfEUSuF9ozAuS%2FIoQUzjew%2BN%2Bt9F247NVCoFhjIwXPOQ413hA%2FFhW849RC5oizsRvnT1CLRMRDGV2wAvsCayiFqBW2g97e%2Fyf%2FzeNo5tmTAUS463uX&X-Amz-Signature=c331968d07f14495ab9e51e2012b41efe10518523e574a5cb0df21b0202c32eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25LUAK4%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICF7KiQtcYjigF3fOJZuGQ5bD7N0KMtXM1Ivn6Wr2apnAiEAghjNz4V5CZppZTolIG%2Bv6CLAgQFOdqX24PM2DUj9rNQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcxP7fcTVipL3bxMyrcA3yRi4%2FuMaTnzqXsJddLSmUISae57D9V4FNvjm%2FO908YkkGLc1fMLYXLiXzqMKuO3JJA7mDkqFd8YxQvOe9LblryzUiEwlxcHCZJAPUn8pdt8WYeat7diH99EQk%2BwwAO1GggPI0y3dZDTO587b%2BHra3AbIaP1pAL5KnnhX7UCv7jJsq0OTOEE7RLqHNP%2BpzDWj7Ug5i9mS8OKxQ%2BT3ssuZ1KvZjQQLSs%2FmX0N69zZeyrschIJvWaHtKhGRR0TuJLFwBh1ZGToWTK50Q%2BPuQXvbCfNSoDeAV9fp9htx07dWX4Lx7Ywagl9Yor4TpfGgn5sdswl9jtxCmENSsARPcHhj8SX6V4DgELsZsLMLdDXdbku1msMqPXM1r42q8ePuC17iMBb%2BaoJRrPjVNqofIHKqLwNTbAUzGdOOODoXYpZRhNJv5GtQXxRqfDJQtV1uTG%2FJnIaP%2BMhJkBgCzFKEJA4FU7oocZkKDA1roNaLyHo9S9duSe1NT0Gw%2Bf1tHs7VRkzvkk71SYcSauylnqLEi2I4IPRH5xS3Y1TOC85zH6b7aBolX4T9wIe%2BkzjHbROTG896MUT%2F2cOk%2FbScOXJzARic2upIwrrmHawSm7Nq5LR7iiNH3A5cwKRu2XYy%2FZMKj008IGOqUBIBlQijSc6SnlglbAwx%2FlVPR%2FHl%2BbMPcSo0B6P7y3iJBRbjno6xxOCdcjphkHrQBe7acb3MDLb1KFrOZv24PTZUvEYCRn%2BhyqQq0CNRJR8JgfEUSuF9ozAuS%2FIoQUzjew%2BN%2Bt9F247NVCoFhjIwXPOQ413hA%2FFhW849RC5oizsRvnT1CLRMRDGV2wAvsCayiFqBW2g97e%2Fyf%2FzeNo5tmTAUS463uX&X-Amz-Signature=3e98dbaeeb962f95f8d44418361107039f2c077ce6892fcbfd1c5433d444a476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25LUAK4%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICF7KiQtcYjigF3fOJZuGQ5bD7N0KMtXM1Ivn6Wr2apnAiEAghjNz4V5CZppZTolIG%2Bv6CLAgQFOdqX24PM2DUj9rNQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcxP7fcTVipL3bxMyrcA3yRi4%2FuMaTnzqXsJddLSmUISae57D9V4FNvjm%2FO908YkkGLc1fMLYXLiXzqMKuO3JJA7mDkqFd8YxQvOe9LblryzUiEwlxcHCZJAPUn8pdt8WYeat7diH99EQk%2BwwAO1GggPI0y3dZDTO587b%2BHra3AbIaP1pAL5KnnhX7UCv7jJsq0OTOEE7RLqHNP%2BpzDWj7Ug5i9mS8OKxQ%2BT3ssuZ1KvZjQQLSs%2FmX0N69zZeyrschIJvWaHtKhGRR0TuJLFwBh1ZGToWTK50Q%2BPuQXvbCfNSoDeAV9fp9htx07dWX4Lx7Ywagl9Yor4TpfGgn5sdswl9jtxCmENSsARPcHhj8SX6V4DgELsZsLMLdDXdbku1msMqPXM1r42q8ePuC17iMBb%2BaoJRrPjVNqofIHKqLwNTbAUzGdOOODoXYpZRhNJv5GtQXxRqfDJQtV1uTG%2FJnIaP%2BMhJkBgCzFKEJA4FU7oocZkKDA1roNaLyHo9S9duSe1NT0Gw%2Bf1tHs7VRkzvkk71SYcSauylnqLEi2I4IPRH5xS3Y1TOC85zH6b7aBolX4T9wIe%2BkzjHbROTG896MUT%2F2cOk%2FbScOXJzARic2upIwrrmHawSm7Nq5LR7iiNH3A5cwKRu2XYy%2FZMKj008IGOqUBIBlQijSc6SnlglbAwx%2FlVPR%2FHl%2BbMPcSo0B6P7y3iJBRbjno6xxOCdcjphkHrQBe7acb3MDLb1KFrOZv24PTZUvEYCRn%2BhyqQq0CNRJR8JgfEUSuF9ozAuS%2FIoQUzjew%2BN%2Bt9F247NVCoFhjIwXPOQ413hA%2FFhW849RC5oizsRvnT1CLRMRDGV2wAvsCayiFqBW2g97e%2Fyf%2FzeNo5tmTAUS463uX&X-Amz-Signature=1faf7af90714e4c9ab7e4675a3648d7fdb1acb1b9b4fc29a3bdc5cef470aee74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25LUAK4%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICF7KiQtcYjigF3fOJZuGQ5bD7N0KMtXM1Ivn6Wr2apnAiEAghjNz4V5CZppZTolIG%2Bv6CLAgQFOdqX24PM2DUj9rNQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcxP7fcTVipL3bxMyrcA3yRi4%2FuMaTnzqXsJddLSmUISae57D9V4FNvjm%2FO908YkkGLc1fMLYXLiXzqMKuO3JJA7mDkqFd8YxQvOe9LblryzUiEwlxcHCZJAPUn8pdt8WYeat7diH99EQk%2BwwAO1GggPI0y3dZDTO587b%2BHra3AbIaP1pAL5KnnhX7UCv7jJsq0OTOEE7RLqHNP%2BpzDWj7Ug5i9mS8OKxQ%2BT3ssuZ1KvZjQQLSs%2FmX0N69zZeyrschIJvWaHtKhGRR0TuJLFwBh1ZGToWTK50Q%2BPuQXvbCfNSoDeAV9fp9htx07dWX4Lx7Ywagl9Yor4TpfGgn5sdswl9jtxCmENSsARPcHhj8SX6V4DgELsZsLMLdDXdbku1msMqPXM1r42q8ePuC17iMBb%2BaoJRrPjVNqofIHKqLwNTbAUzGdOOODoXYpZRhNJv5GtQXxRqfDJQtV1uTG%2FJnIaP%2BMhJkBgCzFKEJA4FU7oocZkKDA1roNaLyHo9S9duSe1NT0Gw%2Bf1tHs7VRkzvkk71SYcSauylnqLEi2I4IPRH5xS3Y1TOC85zH6b7aBolX4T9wIe%2BkzjHbROTG896MUT%2F2cOk%2FbScOXJzARic2upIwrrmHawSm7Nq5LR7iiNH3A5cwKRu2XYy%2FZMKj008IGOqUBIBlQijSc6SnlglbAwx%2FlVPR%2FHl%2BbMPcSo0B6P7y3iJBRbjno6xxOCdcjphkHrQBe7acb3MDLb1KFrOZv24PTZUvEYCRn%2BhyqQq0CNRJR8JgfEUSuF9ozAuS%2FIoQUzjew%2BN%2Bt9F247NVCoFhjIwXPOQ413hA%2FFhW849RC5oizsRvnT1CLRMRDGV2wAvsCayiFqBW2g97e%2Fyf%2FzeNo5tmTAUS463uX&X-Amz-Signature=e68d5da103d4531825d6647584d1c24c5eb180b2b61b4b586f6657678797fa6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25LUAK4%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICF7KiQtcYjigF3fOJZuGQ5bD7N0KMtXM1Ivn6Wr2apnAiEAghjNz4V5CZppZTolIG%2Bv6CLAgQFOdqX24PM2DUj9rNQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcxP7fcTVipL3bxMyrcA3yRi4%2FuMaTnzqXsJddLSmUISae57D9V4FNvjm%2FO908YkkGLc1fMLYXLiXzqMKuO3JJA7mDkqFd8YxQvOe9LblryzUiEwlxcHCZJAPUn8pdt8WYeat7diH99EQk%2BwwAO1GggPI0y3dZDTO587b%2BHra3AbIaP1pAL5KnnhX7UCv7jJsq0OTOEE7RLqHNP%2BpzDWj7Ug5i9mS8OKxQ%2BT3ssuZ1KvZjQQLSs%2FmX0N69zZeyrschIJvWaHtKhGRR0TuJLFwBh1ZGToWTK50Q%2BPuQXvbCfNSoDeAV9fp9htx07dWX4Lx7Ywagl9Yor4TpfGgn5sdswl9jtxCmENSsARPcHhj8SX6V4DgELsZsLMLdDXdbku1msMqPXM1r42q8ePuC17iMBb%2BaoJRrPjVNqofIHKqLwNTbAUzGdOOODoXYpZRhNJv5GtQXxRqfDJQtV1uTG%2FJnIaP%2BMhJkBgCzFKEJA4FU7oocZkKDA1roNaLyHo9S9duSe1NT0Gw%2Bf1tHs7VRkzvkk71SYcSauylnqLEi2I4IPRH5xS3Y1TOC85zH6b7aBolX4T9wIe%2BkzjHbROTG896MUT%2F2cOk%2FbScOXJzARic2upIwrrmHawSm7Nq5LR7iiNH3A5cwKRu2XYy%2FZMKj008IGOqUBIBlQijSc6SnlglbAwx%2FlVPR%2FHl%2BbMPcSo0B6P7y3iJBRbjno6xxOCdcjphkHrQBe7acb3MDLb1KFrOZv24PTZUvEYCRn%2BhyqQq0CNRJR8JgfEUSuF9ozAuS%2FIoQUzjew%2BN%2Bt9F247NVCoFhjIwXPOQ413hA%2FFhW849RC5oizsRvnT1CLRMRDGV2wAvsCayiFqBW2g97e%2Fyf%2FzeNo5tmTAUS463uX&X-Amz-Signature=1e2cc5fb370f6ebb166a88e1453266061635a9b71ee1b387ab6d7dccb81cb027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25LUAK4%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICF7KiQtcYjigF3fOJZuGQ5bD7N0KMtXM1Ivn6Wr2apnAiEAghjNz4V5CZppZTolIG%2Bv6CLAgQFOdqX24PM2DUj9rNQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcxP7fcTVipL3bxMyrcA3yRi4%2FuMaTnzqXsJddLSmUISae57D9V4FNvjm%2FO908YkkGLc1fMLYXLiXzqMKuO3JJA7mDkqFd8YxQvOe9LblryzUiEwlxcHCZJAPUn8pdt8WYeat7diH99EQk%2BwwAO1GggPI0y3dZDTO587b%2BHra3AbIaP1pAL5KnnhX7UCv7jJsq0OTOEE7RLqHNP%2BpzDWj7Ug5i9mS8OKxQ%2BT3ssuZ1KvZjQQLSs%2FmX0N69zZeyrschIJvWaHtKhGRR0TuJLFwBh1ZGToWTK50Q%2BPuQXvbCfNSoDeAV9fp9htx07dWX4Lx7Ywagl9Yor4TpfGgn5sdswl9jtxCmENSsARPcHhj8SX6V4DgELsZsLMLdDXdbku1msMqPXM1r42q8ePuC17iMBb%2BaoJRrPjVNqofIHKqLwNTbAUzGdOOODoXYpZRhNJv5GtQXxRqfDJQtV1uTG%2FJnIaP%2BMhJkBgCzFKEJA4FU7oocZkKDA1roNaLyHo9S9duSe1NT0Gw%2Bf1tHs7VRkzvkk71SYcSauylnqLEi2I4IPRH5xS3Y1TOC85zH6b7aBolX4T9wIe%2BkzjHbROTG896MUT%2F2cOk%2FbScOXJzARic2upIwrrmHawSm7Nq5LR7iiNH3A5cwKRu2XYy%2FZMKj008IGOqUBIBlQijSc6SnlglbAwx%2FlVPR%2FHl%2BbMPcSo0B6P7y3iJBRbjno6xxOCdcjphkHrQBe7acb3MDLb1KFrOZv24PTZUvEYCRn%2BhyqQq0CNRJR8JgfEUSuF9ozAuS%2FIoQUzjew%2BN%2Bt9F247NVCoFhjIwXPOQ413hA%2FFhW849RC5oizsRvnT1CLRMRDGV2wAvsCayiFqBW2g97e%2Fyf%2FzeNo5tmTAUS463uX&X-Amz-Signature=7382c5a47e91a6cb2cc8dd18b1d45b89006a5c220530881ad5ca375e2ddf2fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
