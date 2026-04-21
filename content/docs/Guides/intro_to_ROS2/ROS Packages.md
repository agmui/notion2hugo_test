---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6TQCKG%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIC%2BjrANBsxpJm1Qcp5Ul9LueX3BzWq1aWu2wwLaAuQXeAiEAxyf9S195Yclt1dxyaLbCD7D9fHPZn0BPhBBtF4TFIGYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDBUUSm9Nd0n%2ByKUGWyrcA6WHX4jTxpWH77Ozy7cQNekU6UYPHYzI6SB8axVYx%2FHA%2B9OyZzp%2BwvzYJhD8vdLmQJQcCiM7BwXssJN3nP2NDho3BpA53pIMVNsbeu%2BbzKFjaJmrCZ9A%2BU4mooZCwcpivvn2KdVSGP6OyGNNfpSQAlbSB3WM996Q3AybCK3YmFFyYfkU%2FeIzg1bYcwGLFj%2B5PBWqUw8iq01%2FjDGqAwIRBTZQ49UnDimkEVzCkFfE21vZ0aJoYzl2JK5HL2nLVqeOgQqTcWxQ6m6pdI%2FA40vUhrB%2FshSlhoBiuLjiwJLZUvu7%2Fhi9RoD08LGp%2Fy3c8OEohX%2BW5cDLTgmmI5HlEcGHXRa4ivX6rrMuP8OwmXEa1X7LrEU61dn%2BIoSXAYQTYauDqMwhynNS6ezWhZN01Sm8Yr8eiQNU5h5F9FrAmfeiB4DzQfHbySQwrt33ut5b3xk7%2FSzO5%2By6tL4WmKMiZFEjSgAKeUPvM7D%2BGKYBKqI7lYWouakqHoNN9g0df4LD7N2itA%2BRkS%2FZ0DJfkR8qittnexyoCD2bo5rfxKoJryOBHtXxdyEgTTd6kRUerr588fBR%2FI%2FSO5Qqgmu%2FswIsSLGDIcob5mbYo7D%2FS0rbK0btdJlS2Kw9Q9qo3I5QWA5YMOCrm88GOqUBAwXRugtxHPrgcIB6XRmJ2ONBdh5Ru5MrVk5ld7UdQDmb%2Bf8WMIP200NWiWgI0R7VS65lTzDQHwReUAB50KopFjeCsjZQYOyOaXm0BV4pve82geBVHVGfvrXKut9%2B4mUByVbleOPouGZ9Mm5zBMoGXsYupItXrDMuhYtIc%2Fde8Ks2MJ%2B7jnaPiyCAc1JbQYJyLgQFv7KdeBMWgWqpUzf03nG5dNtI&X-Amz-Signature=53c0f0488bbc89b9fa6180bf35f92c93d9a980ecf823937abd2a10f693aa3e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6TQCKG%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIC%2BjrANBsxpJm1Qcp5Ul9LueX3BzWq1aWu2wwLaAuQXeAiEAxyf9S195Yclt1dxyaLbCD7D9fHPZn0BPhBBtF4TFIGYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDBUUSm9Nd0n%2ByKUGWyrcA6WHX4jTxpWH77Ozy7cQNekU6UYPHYzI6SB8axVYx%2FHA%2B9OyZzp%2BwvzYJhD8vdLmQJQcCiM7BwXssJN3nP2NDho3BpA53pIMVNsbeu%2BbzKFjaJmrCZ9A%2BU4mooZCwcpivvn2KdVSGP6OyGNNfpSQAlbSB3WM996Q3AybCK3YmFFyYfkU%2FeIzg1bYcwGLFj%2B5PBWqUw8iq01%2FjDGqAwIRBTZQ49UnDimkEVzCkFfE21vZ0aJoYzl2JK5HL2nLVqeOgQqTcWxQ6m6pdI%2FA40vUhrB%2FshSlhoBiuLjiwJLZUvu7%2Fhi9RoD08LGp%2Fy3c8OEohX%2BW5cDLTgmmI5HlEcGHXRa4ivX6rrMuP8OwmXEa1X7LrEU61dn%2BIoSXAYQTYauDqMwhynNS6ezWhZN01Sm8Yr8eiQNU5h5F9FrAmfeiB4DzQfHbySQwrt33ut5b3xk7%2FSzO5%2By6tL4WmKMiZFEjSgAKeUPvM7D%2BGKYBKqI7lYWouakqHoNN9g0df4LD7N2itA%2BRkS%2FZ0DJfkR8qittnexyoCD2bo5rfxKoJryOBHtXxdyEgTTd6kRUerr588fBR%2FI%2FSO5Qqgmu%2FswIsSLGDIcob5mbYo7D%2FS0rbK0btdJlS2Kw9Q9qo3I5QWA5YMOCrm88GOqUBAwXRugtxHPrgcIB6XRmJ2ONBdh5Ru5MrVk5ld7UdQDmb%2Bf8WMIP200NWiWgI0R7VS65lTzDQHwReUAB50KopFjeCsjZQYOyOaXm0BV4pve82geBVHVGfvrXKut9%2B4mUByVbleOPouGZ9Mm5zBMoGXsYupItXrDMuhYtIc%2Fde8Ks2MJ%2B7jnaPiyCAc1JbQYJyLgQFv7KdeBMWgWqpUzf03nG5dNtI&X-Amz-Signature=76d0ea92bb4eba759f88df98034d222ea4e62926894fbfc214c9ddec3285f587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6TQCKG%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIC%2BjrANBsxpJm1Qcp5Ul9LueX3BzWq1aWu2wwLaAuQXeAiEAxyf9S195Yclt1dxyaLbCD7D9fHPZn0BPhBBtF4TFIGYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDBUUSm9Nd0n%2ByKUGWyrcA6WHX4jTxpWH77Ozy7cQNekU6UYPHYzI6SB8axVYx%2FHA%2B9OyZzp%2BwvzYJhD8vdLmQJQcCiM7BwXssJN3nP2NDho3BpA53pIMVNsbeu%2BbzKFjaJmrCZ9A%2BU4mooZCwcpivvn2KdVSGP6OyGNNfpSQAlbSB3WM996Q3AybCK3YmFFyYfkU%2FeIzg1bYcwGLFj%2B5PBWqUw8iq01%2FjDGqAwIRBTZQ49UnDimkEVzCkFfE21vZ0aJoYzl2JK5HL2nLVqeOgQqTcWxQ6m6pdI%2FA40vUhrB%2FshSlhoBiuLjiwJLZUvu7%2Fhi9RoD08LGp%2Fy3c8OEohX%2BW5cDLTgmmI5HlEcGHXRa4ivX6rrMuP8OwmXEa1X7LrEU61dn%2BIoSXAYQTYauDqMwhynNS6ezWhZN01Sm8Yr8eiQNU5h5F9FrAmfeiB4DzQfHbySQwrt33ut5b3xk7%2FSzO5%2By6tL4WmKMiZFEjSgAKeUPvM7D%2BGKYBKqI7lYWouakqHoNN9g0df4LD7N2itA%2BRkS%2FZ0DJfkR8qittnexyoCD2bo5rfxKoJryOBHtXxdyEgTTd6kRUerr588fBR%2FI%2FSO5Qqgmu%2FswIsSLGDIcob5mbYo7D%2FS0rbK0btdJlS2Kw9Q9qo3I5QWA5YMOCrm88GOqUBAwXRugtxHPrgcIB6XRmJ2ONBdh5Ru5MrVk5ld7UdQDmb%2Bf8WMIP200NWiWgI0R7VS65lTzDQHwReUAB50KopFjeCsjZQYOyOaXm0BV4pve82geBVHVGfvrXKut9%2B4mUByVbleOPouGZ9Mm5zBMoGXsYupItXrDMuhYtIc%2Fde8Ks2MJ%2B7jnaPiyCAc1JbQYJyLgQFv7KdeBMWgWqpUzf03nG5dNtI&X-Amz-Signature=a982bdd0ef36371b0b257fddcca43c3e0465c2a14776259048ad9f1b4cf460db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6TQCKG%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIC%2BjrANBsxpJm1Qcp5Ul9LueX3BzWq1aWu2wwLaAuQXeAiEAxyf9S195Yclt1dxyaLbCD7D9fHPZn0BPhBBtF4TFIGYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDBUUSm9Nd0n%2ByKUGWyrcA6WHX4jTxpWH77Ozy7cQNekU6UYPHYzI6SB8axVYx%2FHA%2B9OyZzp%2BwvzYJhD8vdLmQJQcCiM7BwXssJN3nP2NDho3BpA53pIMVNsbeu%2BbzKFjaJmrCZ9A%2BU4mooZCwcpivvn2KdVSGP6OyGNNfpSQAlbSB3WM996Q3AybCK3YmFFyYfkU%2FeIzg1bYcwGLFj%2B5PBWqUw8iq01%2FjDGqAwIRBTZQ49UnDimkEVzCkFfE21vZ0aJoYzl2JK5HL2nLVqeOgQqTcWxQ6m6pdI%2FA40vUhrB%2FshSlhoBiuLjiwJLZUvu7%2Fhi9RoD08LGp%2Fy3c8OEohX%2BW5cDLTgmmI5HlEcGHXRa4ivX6rrMuP8OwmXEa1X7LrEU61dn%2BIoSXAYQTYauDqMwhynNS6ezWhZN01Sm8Yr8eiQNU5h5F9FrAmfeiB4DzQfHbySQwrt33ut5b3xk7%2FSzO5%2By6tL4WmKMiZFEjSgAKeUPvM7D%2BGKYBKqI7lYWouakqHoNN9g0df4LD7N2itA%2BRkS%2FZ0DJfkR8qittnexyoCD2bo5rfxKoJryOBHtXxdyEgTTd6kRUerr588fBR%2FI%2FSO5Qqgmu%2FswIsSLGDIcob5mbYo7D%2FS0rbK0btdJlS2Kw9Q9qo3I5QWA5YMOCrm88GOqUBAwXRugtxHPrgcIB6XRmJ2ONBdh5Ru5MrVk5ld7UdQDmb%2Bf8WMIP200NWiWgI0R7VS65lTzDQHwReUAB50KopFjeCsjZQYOyOaXm0BV4pve82geBVHVGfvrXKut9%2B4mUByVbleOPouGZ9Mm5zBMoGXsYupItXrDMuhYtIc%2Fde8Ks2MJ%2B7jnaPiyCAc1JbQYJyLgQFv7KdeBMWgWqpUzf03nG5dNtI&X-Amz-Signature=d89f9d75b5317c6d1683a2b84be26ec978fe219cbe62ca50f6510cb669faf27f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6TQCKG%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIC%2BjrANBsxpJm1Qcp5Ul9LueX3BzWq1aWu2wwLaAuQXeAiEAxyf9S195Yclt1dxyaLbCD7D9fHPZn0BPhBBtF4TFIGYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDBUUSm9Nd0n%2ByKUGWyrcA6WHX4jTxpWH77Ozy7cQNekU6UYPHYzI6SB8axVYx%2FHA%2B9OyZzp%2BwvzYJhD8vdLmQJQcCiM7BwXssJN3nP2NDho3BpA53pIMVNsbeu%2BbzKFjaJmrCZ9A%2BU4mooZCwcpivvn2KdVSGP6OyGNNfpSQAlbSB3WM996Q3AybCK3YmFFyYfkU%2FeIzg1bYcwGLFj%2B5PBWqUw8iq01%2FjDGqAwIRBTZQ49UnDimkEVzCkFfE21vZ0aJoYzl2JK5HL2nLVqeOgQqTcWxQ6m6pdI%2FA40vUhrB%2FshSlhoBiuLjiwJLZUvu7%2Fhi9RoD08LGp%2Fy3c8OEohX%2BW5cDLTgmmI5HlEcGHXRa4ivX6rrMuP8OwmXEa1X7LrEU61dn%2BIoSXAYQTYauDqMwhynNS6ezWhZN01Sm8Yr8eiQNU5h5F9FrAmfeiB4DzQfHbySQwrt33ut5b3xk7%2FSzO5%2By6tL4WmKMiZFEjSgAKeUPvM7D%2BGKYBKqI7lYWouakqHoNN9g0df4LD7N2itA%2BRkS%2FZ0DJfkR8qittnexyoCD2bo5rfxKoJryOBHtXxdyEgTTd6kRUerr588fBR%2FI%2FSO5Qqgmu%2FswIsSLGDIcob5mbYo7D%2FS0rbK0btdJlS2Kw9Q9qo3I5QWA5YMOCrm88GOqUBAwXRugtxHPrgcIB6XRmJ2ONBdh5Ru5MrVk5ld7UdQDmb%2Bf8WMIP200NWiWgI0R7VS65lTzDQHwReUAB50KopFjeCsjZQYOyOaXm0BV4pve82geBVHVGfvrXKut9%2B4mUByVbleOPouGZ9Mm5zBMoGXsYupItXrDMuhYtIc%2Fde8Ks2MJ%2B7jnaPiyCAc1JbQYJyLgQFv7KdeBMWgWqpUzf03nG5dNtI&X-Amz-Signature=2364f622def708cce263804eaf8639d1916a068975707fba187a6bda63d5c129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6TQCKG%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIC%2BjrANBsxpJm1Qcp5Ul9LueX3BzWq1aWu2wwLaAuQXeAiEAxyf9S195Yclt1dxyaLbCD7D9fHPZn0BPhBBtF4TFIGYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDBUUSm9Nd0n%2ByKUGWyrcA6WHX4jTxpWH77Ozy7cQNekU6UYPHYzI6SB8axVYx%2FHA%2B9OyZzp%2BwvzYJhD8vdLmQJQcCiM7BwXssJN3nP2NDho3BpA53pIMVNsbeu%2BbzKFjaJmrCZ9A%2BU4mooZCwcpivvn2KdVSGP6OyGNNfpSQAlbSB3WM996Q3AybCK3YmFFyYfkU%2FeIzg1bYcwGLFj%2B5PBWqUw8iq01%2FjDGqAwIRBTZQ49UnDimkEVzCkFfE21vZ0aJoYzl2JK5HL2nLVqeOgQqTcWxQ6m6pdI%2FA40vUhrB%2FshSlhoBiuLjiwJLZUvu7%2Fhi9RoD08LGp%2Fy3c8OEohX%2BW5cDLTgmmI5HlEcGHXRa4ivX6rrMuP8OwmXEa1X7LrEU61dn%2BIoSXAYQTYauDqMwhynNS6ezWhZN01Sm8Yr8eiQNU5h5F9FrAmfeiB4DzQfHbySQwrt33ut5b3xk7%2FSzO5%2By6tL4WmKMiZFEjSgAKeUPvM7D%2BGKYBKqI7lYWouakqHoNN9g0df4LD7N2itA%2BRkS%2FZ0DJfkR8qittnexyoCD2bo5rfxKoJryOBHtXxdyEgTTd6kRUerr588fBR%2FI%2FSO5Qqgmu%2FswIsSLGDIcob5mbYo7D%2FS0rbK0btdJlS2Kw9Q9qo3I5QWA5YMOCrm88GOqUBAwXRugtxHPrgcIB6XRmJ2ONBdh5Ru5MrVk5ld7UdQDmb%2Bf8WMIP200NWiWgI0R7VS65lTzDQHwReUAB50KopFjeCsjZQYOyOaXm0BV4pve82geBVHVGfvrXKut9%2B4mUByVbleOPouGZ9Mm5zBMoGXsYupItXrDMuhYtIc%2Fde8Ks2MJ%2B7jnaPiyCAc1JbQYJyLgQFv7KdeBMWgWqpUzf03nG5dNtI&X-Amz-Signature=974ee705f457a2d97bdd0ff534088b9c0b7545d156f908f58b437afcb4065994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6TQCKG%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIC%2BjrANBsxpJm1Qcp5Ul9LueX3BzWq1aWu2wwLaAuQXeAiEAxyf9S195Yclt1dxyaLbCD7D9fHPZn0BPhBBtF4TFIGYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDBUUSm9Nd0n%2ByKUGWyrcA6WHX4jTxpWH77Ozy7cQNekU6UYPHYzI6SB8axVYx%2FHA%2B9OyZzp%2BwvzYJhD8vdLmQJQcCiM7BwXssJN3nP2NDho3BpA53pIMVNsbeu%2BbzKFjaJmrCZ9A%2BU4mooZCwcpivvn2KdVSGP6OyGNNfpSQAlbSB3WM996Q3AybCK3YmFFyYfkU%2FeIzg1bYcwGLFj%2B5PBWqUw8iq01%2FjDGqAwIRBTZQ49UnDimkEVzCkFfE21vZ0aJoYzl2JK5HL2nLVqeOgQqTcWxQ6m6pdI%2FA40vUhrB%2FshSlhoBiuLjiwJLZUvu7%2Fhi9RoD08LGp%2Fy3c8OEohX%2BW5cDLTgmmI5HlEcGHXRa4ivX6rrMuP8OwmXEa1X7LrEU61dn%2BIoSXAYQTYauDqMwhynNS6ezWhZN01Sm8Yr8eiQNU5h5F9FrAmfeiB4DzQfHbySQwrt33ut5b3xk7%2FSzO5%2By6tL4WmKMiZFEjSgAKeUPvM7D%2BGKYBKqI7lYWouakqHoNN9g0df4LD7N2itA%2BRkS%2FZ0DJfkR8qittnexyoCD2bo5rfxKoJryOBHtXxdyEgTTd6kRUerr588fBR%2FI%2FSO5Qqgmu%2FswIsSLGDIcob5mbYo7D%2FS0rbK0btdJlS2Kw9Q9qo3I5QWA5YMOCrm88GOqUBAwXRugtxHPrgcIB6XRmJ2ONBdh5Ru5MrVk5ld7UdQDmb%2Bf8WMIP200NWiWgI0R7VS65lTzDQHwReUAB50KopFjeCsjZQYOyOaXm0BV4pve82geBVHVGfvrXKut9%2B4mUByVbleOPouGZ9Mm5zBMoGXsYupItXrDMuhYtIc%2Fde8Ks2MJ%2B7jnaPiyCAc1JbQYJyLgQFv7KdeBMWgWqpUzf03nG5dNtI&X-Amz-Signature=7d7bd0c0bf2bbe0e05b0ea91e326b12b46e59c06b19eb5c1bec6e3048b58c64c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
