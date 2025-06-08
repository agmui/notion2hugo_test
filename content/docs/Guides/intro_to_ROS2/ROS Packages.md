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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZ2W4JG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFNZTMYbZAj1wvdKfEQAbL6Z28vmou8QKTUtctx4zD3AIgBGVxj80wssFL%2FG5RAf%2FEDS9c5nARWWGBLLxF2PPFyDIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD%2FPUCZXzXOGdTJcSrcA6zTcpK3u9tCQnEatyBWHQdIkMVf3gpxFBl5KP47PM1L%2BTVx1HuNIdTwZzbeworYnjDfMuWV6dh4wBoGv3jVm0DTgsvlci6py2exoOndecj%2BQ1j6u2kW5mKDcd8%2FlZrt%2BmdXxzHcWWrtvVVkoQKySmauc7cmSbWu%2F1j2IrQ1hcazGL3I3coGvYehOmsCwI8pWBlkJoS3Z5sVa4k3uM1d%2BQzBwLcTgpyb%2FId1zGFwEe7GpRUKgAQtn42K%2FstOONhq3oF5beRyQLFZZ2JhKcSy1QYZChFeGl7sEHubkavULRHlOpmundgBahpI41FtKLZPb8hHXnrzOVENgZ%2Bh7WisbL069NQEMGTxDXEDYZmXby9DRKYceEIUCt658zSzAEPyno3uynL08XJGDsGT4Zhk6ILqUoeH9I0Y2VKEMNgBtTxYQ6NqiHtXCBloARgE2hmvoWlDMYE%2F%2BSns36LBIqAhD1SsLwewnrG%2BQMeehS%2BF4JcKctUo4uR8IKsKNV6xs%2B4SSWyTLrrFoj55amvUCgwvxDMduWwwlVhuxxvBiUuYTn1sPXpMoTiAhpKjT7PGfmYzjvhX75zmTfceBaPvfcicwAlgS32Zi5dvx6KLwv%2BFEdQaCFdwjH5RwhS3pl%2BTMO7BlsIGOqUB0FlYGYHWfLtInMmDnIrLuaViWlatGyzY%2BBkWvE768t03UX6ChHueJvqZxj%2F2Y73veEOoMvaJAq5oQIJYmbLypa9mRGsjhIvRz1OA9jKkLIvsuF7AqBU33lYqbOKB1EcUTTpw6EntKOiBL2L6Rozzp6uuvSqYYjZCrtP4Rd675ab0of9MK%2B1WJhZTHj6ZUWzv64AoEVzgFY%2FS6v%2FZG4cjzR9Nh1xC&X-Amz-Signature=df4dcf410e7d76ec0f1d9dc4c7575adb0f3456953e859df9bd93249508902f10&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZ2W4JG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFNZTMYbZAj1wvdKfEQAbL6Z28vmou8QKTUtctx4zD3AIgBGVxj80wssFL%2FG5RAf%2FEDS9c5nARWWGBLLxF2PPFyDIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD%2FPUCZXzXOGdTJcSrcA6zTcpK3u9tCQnEatyBWHQdIkMVf3gpxFBl5KP47PM1L%2BTVx1HuNIdTwZzbeworYnjDfMuWV6dh4wBoGv3jVm0DTgsvlci6py2exoOndecj%2BQ1j6u2kW5mKDcd8%2FlZrt%2BmdXxzHcWWrtvVVkoQKySmauc7cmSbWu%2F1j2IrQ1hcazGL3I3coGvYehOmsCwI8pWBlkJoS3Z5sVa4k3uM1d%2BQzBwLcTgpyb%2FId1zGFwEe7GpRUKgAQtn42K%2FstOONhq3oF5beRyQLFZZ2JhKcSy1QYZChFeGl7sEHubkavULRHlOpmundgBahpI41FtKLZPb8hHXnrzOVENgZ%2Bh7WisbL069NQEMGTxDXEDYZmXby9DRKYceEIUCt658zSzAEPyno3uynL08XJGDsGT4Zhk6ILqUoeH9I0Y2VKEMNgBtTxYQ6NqiHtXCBloARgE2hmvoWlDMYE%2F%2BSns36LBIqAhD1SsLwewnrG%2BQMeehS%2BF4JcKctUo4uR8IKsKNV6xs%2B4SSWyTLrrFoj55amvUCgwvxDMduWwwlVhuxxvBiUuYTn1sPXpMoTiAhpKjT7PGfmYzjvhX75zmTfceBaPvfcicwAlgS32Zi5dvx6KLwv%2BFEdQaCFdwjH5RwhS3pl%2BTMO7BlsIGOqUB0FlYGYHWfLtInMmDnIrLuaViWlatGyzY%2BBkWvE768t03UX6ChHueJvqZxj%2F2Y73veEOoMvaJAq5oQIJYmbLypa9mRGsjhIvRz1OA9jKkLIvsuF7AqBU33lYqbOKB1EcUTTpw6EntKOiBL2L6Rozzp6uuvSqYYjZCrtP4Rd675ab0of9MK%2B1WJhZTHj6ZUWzv64AoEVzgFY%2FS6v%2FZG4cjzR9Nh1xC&X-Amz-Signature=69c585efd40b834bd375f3c09af5ccfc690b2104ecd6f97fd62feba388d301e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZ2W4JG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFNZTMYbZAj1wvdKfEQAbL6Z28vmou8QKTUtctx4zD3AIgBGVxj80wssFL%2FG5RAf%2FEDS9c5nARWWGBLLxF2PPFyDIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD%2FPUCZXzXOGdTJcSrcA6zTcpK3u9tCQnEatyBWHQdIkMVf3gpxFBl5KP47PM1L%2BTVx1HuNIdTwZzbeworYnjDfMuWV6dh4wBoGv3jVm0DTgsvlci6py2exoOndecj%2BQ1j6u2kW5mKDcd8%2FlZrt%2BmdXxzHcWWrtvVVkoQKySmauc7cmSbWu%2F1j2IrQ1hcazGL3I3coGvYehOmsCwI8pWBlkJoS3Z5sVa4k3uM1d%2BQzBwLcTgpyb%2FId1zGFwEe7GpRUKgAQtn42K%2FstOONhq3oF5beRyQLFZZ2JhKcSy1QYZChFeGl7sEHubkavULRHlOpmundgBahpI41FtKLZPb8hHXnrzOVENgZ%2Bh7WisbL069NQEMGTxDXEDYZmXby9DRKYceEIUCt658zSzAEPyno3uynL08XJGDsGT4Zhk6ILqUoeH9I0Y2VKEMNgBtTxYQ6NqiHtXCBloARgE2hmvoWlDMYE%2F%2BSns36LBIqAhD1SsLwewnrG%2BQMeehS%2BF4JcKctUo4uR8IKsKNV6xs%2B4SSWyTLrrFoj55amvUCgwvxDMduWwwlVhuxxvBiUuYTn1sPXpMoTiAhpKjT7PGfmYzjvhX75zmTfceBaPvfcicwAlgS32Zi5dvx6KLwv%2BFEdQaCFdwjH5RwhS3pl%2BTMO7BlsIGOqUB0FlYGYHWfLtInMmDnIrLuaViWlatGyzY%2BBkWvE768t03UX6ChHueJvqZxj%2F2Y73veEOoMvaJAq5oQIJYmbLypa9mRGsjhIvRz1OA9jKkLIvsuF7AqBU33lYqbOKB1EcUTTpw6EntKOiBL2L6Rozzp6uuvSqYYjZCrtP4Rd675ab0of9MK%2B1WJhZTHj6ZUWzv64AoEVzgFY%2FS6v%2FZG4cjzR9Nh1xC&X-Amz-Signature=98a4e43c06c11ddd48a65a7de1f64adb7fc9321167db0cdc069e5c0658cd6c84&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZ2W4JG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFNZTMYbZAj1wvdKfEQAbL6Z28vmou8QKTUtctx4zD3AIgBGVxj80wssFL%2FG5RAf%2FEDS9c5nARWWGBLLxF2PPFyDIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD%2FPUCZXzXOGdTJcSrcA6zTcpK3u9tCQnEatyBWHQdIkMVf3gpxFBl5KP47PM1L%2BTVx1HuNIdTwZzbeworYnjDfMuWV6dh4wBoGv3jVm0DTgsvlci6py2exoOndecj%2BQ1j6u2kW5mKDcd8%2FlZrt%2BmdXxzHcWWrtvVVkoQKySmauc7cmSbWu%2F1j2IrQ1hcazGL3I3coGvYehOmsCwI8pWBlkJoS3Z5sVa4k3uM1d%2BQzBwLcTgpyb%2FId1zGFwEe7GpRUKgAQtn42K%2FstOONhq3oF5beRyQLFZZ2JhKcSy1QYZChFeGl7sEHubkavULRHlOpmundgBahpI41FtKLZPb8hHXnrzOVENgZ%2Bh7WisbL069NQEMGTxDXEDYZmXby9DRKYceEIUCt658zSzAEPyno3uynL08XJGDsGT4Zhk6ILqUoeH9I0Y2VKEMNgBtTxYQ6NqiHtXCBloARgE2hmvoWlDMYE%2F%2BSns36LBIqAhD1SsLwewnrG%2BQMeehS%2BF4JcKctUo4uR8IKsKNV6xs%2B4SSWyTLrrFoj55amvUCgwvxDMduWwwlVhuxxvBiUuYTn1sPXpMoTiAhpKjT7PGfmYzjvhX75zmTfceBaPvfcicwAlgS32Zi5dvx6KLwv%2BFEdQaCFdwjH5RwhS3pl%2BTMO7BlsIGOqUB0FlYGYHWfLtInMmDnIrLuaViWlatGyzY%2BBkWvE768t03UX6ChHueJvqZxj%2F2Y73veEOoMvaJAq5oQIJYmbLypa9mRGsjhIvRz1OA9jKkLIvsuF7AqBU33lYqbOKB1EcUTTpw6EntKOiBL2L6Rozzp6uuvSqYYjZCrtP4Rd675ab0of9MK%2B1WJhZTHj6ZUWzv64AoEVzgFY%2FS6v%2FZG4cjzR9Nh1xC&X-Amz-Signature=c314378fe60907260e2c4c8165d4c5025ac13a0db789f7d543186a7ebd30b403&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZ2W4JG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFNZTMYbZAj1wvdKfEQAbL6Z28vmou8QKTUtctx4zD3AIgBGVxj80wssFL%2FG5RAf%2FEDS9c5nARWWGBLLxF2PPFyDIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD%2FPUCZXzXOGdTJcSrcA6zTcpK3u9tCQnEatyBWHQdIkMVf3gpxFBl5KP47PM1L%2BTVx1HuNIdTwZzbeworYnjDfMuWV6dh4wBoGv3jVm0DTgsvlci6py2exoOndecj%2BQ1j6u2kW5mKDcd8%2FlZrt%2BmdXxzHcWWrtvVVkoQKySmauc7cmSbWu%2F1j2IrQ1hcazGL3I3coGvYehOmsCwI8pWBlkJoS3Z5sVa4k3uM1d%2BQzBwLcTgpyb%2FId1zGFwEe7GpRUKgAQtn42K%2FstOONhq3oF5beRyQLFZZ2JhKcSy1QYZChFeGl7sEHubkavULRHlOpmundgBahpI41FtKLZPb8hHXnrzOVENgZ%2Bh7WisbL069NQEMGTxDXEDYZmXby9DRKYceEIUCt658zSzAEPyno3uynL08XJGDsGT4Zhk6ILqUoeH9I0Y2VKEMNgBtTxYQ6NqiHtXCBloARgE2hmvoWlDMYE%2F%2BSns36LBIqAhD1SsLwewnrG%2BQMeehS%2BF4JcKctUo4uR8IKsKNV6xs%2B4SSWyTLrrFoj55amvUCgwvxDMduWwwlVhuxxvBiUuYTn1sPXpMoTiAhpKjT7PGfmYzjvhX75zmTfceBaPvfcicwAlgS32Zi5dvx6KLwv%2BFEdQaCFdwjH5RwhS3pl%2BTMO7BlsIGOqUB0FlYGYHWfLtInMmDnIrLuaViWlatGyzY%2BBkWvE768t03UX6ChHueJvqZxj%2F2Y73veEOoMvaJAq5oQIJYmbLypa9mRGsjhIvRz1OA9jKkLIvsuF7AqBU33lYqbOKB1EcUTTpw6EntKOiBL2L6Rozzp6uuvSqYYjZCrtP4Rd675ab0of9MK%2B1WJhZTHj6ZUWzv64AoEVzgFY%2FS6v%2FZG4cjzR9Nh1xC&X-Amz-Signature=6e21b6b3b850eec65ce630f61ec7670159502e029f78f13b36d989a239100200&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZ2W4JG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFNZTMYbZAj1wvdKfEQAbL6Z28vmou8QKTUtctx4zD3AIgBGVxj80wssFL%2FG5RAf%2FEDS9c5nARWWGBLLxF2PPFyDIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD%2FPUCZXzXOGdTJcSrcA6zTcpK3u9tCQnEatyBWHQdIkMVf3gpxFBl5KP47PM1L%2BTVx1HuNIdTwZzbeworYnjDfMuWV6dh4wBoGv3jVm0DTgsvlci6py2exoOndecj%2BQ1j6u2kW5mKDcd8%2FlZrt%2BmdXxzHcWWrtvVVkoQKySmauc7cmSbWu%2F1j2IrQ1hcazGL3I3coGvYehOmsCwI8pWBlkJoS3Z5sVa4k3uM1d%2BQzBwLcTgpyb%2FId1zGFwEe7GpRUKgAQtn42K%2FstOONhq3oF5beRyQLFZZ2JhKcSy1QYZChFeGl7sEHubkavULRHlOpmundgBahpI41FtKLZPb8hHXnrzOVENgZ%2Bh7WisbL069NQEMGTxDXEDYZmXby9DRKYceEIUCt658zSzAEPyno3uynL08XJGDsGT4Zhk6ILqUoeH9I0Y2VKEMNgBtTxYQ6NqiHtXCBloARgE2hmvoWlDMYE%2F%2BSns36LBIqAhD1SsLwewnrG%2BQMeehS%2BF4JcKctUo4uR8IKsKNV6xs%2B4SSWyTLrrFoj55amvUCgwvxDMduWwwlVhuxxvBiUuYTn1sPXpMoTiAhpKjT7PGfmYzjvhX75zmTfceBaPvfcicwAlgS32Zi5dvx6KLwv%2BFEdQaCFdwjH5RwhS3pl%2BTMO7BlsIGOqUB0FlYGYHWfLtInMmDnIrLuaViWlatGyzY%2BBkWvE768t03UX6ChHueJvqZxj%2F2Y73veEOoMvaJAq5oQIJYmbLypa9mRGsjhIvRz1OA9jKkLIvsuF7AqBU33lYqbOKB1EcUTTpw6EntKOiBL2L6Rozzp6uuvSqYYjZCrtP4Rd675ab0of9MK%2B1WJhZTHj6ZUWzv64AoEVzgFY%2FS6v%2FZG4cjzR9Nh1xC&X-Amz-Signature=c013eb797c9d6d9ca8c9749555de6a4eb305fda925d95643acea98894ece29b7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZ2W4JG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFNZTMYbZAj1wvdKfEQAbL6Z28vmou8QKTUtctx4zD3AIgBGVxj80wssFL%2FG5RAf%2FEDS9c5nARWWGBLLxF2PPFyDIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD%2FPUCZXzXOGdTJcSrcA6zTcpK3u9tCQnEatyBWHQdIkMVf3gpxFBl5KP47PM1L%2BTVx1HuNIdTwZzbeworYnjDfMuWV6dh4wBoGv3jVm0DTgsvlci6py2exoOndecj%2BQ1j6u2kW5mKDcd8%2FlZrt%2BmdXxzHcWWrtvVVkoQKySmauc7cmSbWu%2F1j2IrQ1hcazGL3I3coGvYehOmsCwI8pWBlkJoS3Z5sVa4k3uM1d%2BQzBwLcTgpyb%2FId1zGFwEe7GpRUKgAQtn42K%2FstOONhq3oF5beRyQLFZZ2JhKcSy1QYZChFeGl7sEHubkavULRHlOpmundgBahpI41FtKLZPb8hHXnrzOVENgZ%2Bh7WisbL069NQEMGTxDXEDYZmXby9DRKYceEIUCt658zSzAEPyno3uynL08XJGDsGT4Zhk6ILqUoeH9I0Y2VKEMNgBtTxYQ6NqiHtXCBloARgE2hmvoWlDMYE%2F%2BSns36LBIqAhD1SsLwewnrG%2BQMeehS%2BF4JcKctUo4uR8IKsKNV6xs%2B4SSWyTLrrFoj55amvUCgwvxDMduWwwlVhuxxvBiUuYTn1sPXpMoTiAhpKjT7PGfmYzjvhX75zmTfceBaPvfcicwAlgS32Zi5dvx6KLwv%2BFEdQaCFdwjH5RwhS3pl%2BTMO7BlsIGOqUB0FlYGYHWfLtInMmDnIrLuaViWlatGyzY%2BBkWvE768t03UX6ChHueJvqZxj%2F2Y73veEOoMvaJAq5oQIJYmbLypa9mRGsjhIvRz1OA9jKkLIvsuF7AqBU33lYqbOKB1EcUTTpw6EntKOiBL2L6Rozzp6uuvSqYYjZCrtP4Rd675ab0of9MK%2B1WJhZTHj6ZUWzv64AoEVzgFY%2FS6v%2FZG4cjzR9Nh1xC&X-Amz-Signature=c9160b45d03e6d820a96430c03ec5f7bff8df64a3b7423a29c6817774134f0d5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
