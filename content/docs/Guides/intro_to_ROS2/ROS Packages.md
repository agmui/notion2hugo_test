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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQL4576M%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVVGAxHjVUlhGDHk5INrxRBy8ia6zWa7cuA4KzlkUXGAIgEBk7UgyedUGgq%2B2LaiF3CBOUfdWmwZ4dbgGpSbT3GJcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGQCijm72nVjhASgsSrcA%2BE3bLpBpdjrK8vDCHvLigo33g56BZg0pq%2Bp2ou5lvpgl7rDIyORWvttx02ZXMdRGA9jjLGCvAiaVB60zNdkgFPxdXmwkzQ%2FPd%2BY3YnWq6bVgrO%2Fa%2Fvb2H46DoVwsSxFQCiMA3esRJ8I2Hjr0oyZcZaHo7dxLGXNe3LqZnnyFIVWDe8JGVbF4ogp%2BvOzIHfd7KuroLvDwsmaIsq1oVDNpBJfjhqfslb1U42H0fmti91UoZzVXSfyDr0hG5%2BETq3HWT8qgar3%2BF5ojIA2s%2BMAuNlXsZhE9yeGL5fxYaXvi9eS4jtdA4DIcjvQrgK12sqlA%2BAMfB8qFqLzfA9ZvX5k%2BLJrkGDqK3lH4Q%2FF2TLNJ9vTqTELxN26Ob9XtdOstmzp3NbS03Q5TDGZ0jPSC5nQT7L8tiW%2FgI0V1wvCC1VtM3iz%2B2wVvJVinxEv5yL0%2F6CCrCRQR5KM8eA1%2B4joiXdjwD9PFk2b46GW76HfhxoTTjXqQWfbT7L1MX2d5ys%2FvvE%2BWRT8M5jdBX4yLqi8MdMcjx2D6Rci%2FWJQl6v7ShYnzmvHSmm0Jxd%2FUompLx32rAa20%2BAOLplpCgQTk3C5ZZJz9cuVmgMmCcezcdEChvGTjgdTubcqYO1lYHvVIM3TMOb%2FyL8GOqUBxHgP9H00wecO%2FJwRnQWFi3X%2FlnWGr2dWcXNaJJM8AtRRpjcWEvhUeiuHxjq4WXYB7Zj7YO68j7dPXinZHclYbgQ%2BnLG5rYzJUk84M7hN%2B9Jd4%2FjpvZWicXJQBdOtMt5fmT9ec0ogLgpNht9CoM46RUCnRCx4GMdOxt%2Bc%2BiB5gSaGr7FJzbeWk9SgzBXruaLKygaCrL0vLd8Fgm27axRiLIvr7ABI&X-Amz-Signature=50f9210ebc56aa86b748dd748ec6e2a99d30db790a0dc7e077d19942d2e42cea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQL4576M%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVVGAxHjVUlhGDHk5INrxRBy8ia6zWa7cuA4KzlkUXGAIgEBk7UgyedUGgq%2B2LaiF3CBOUfdWmwZ4dbgGpSbT3GJcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGQCijm72nVjhASgsSrcA%2BE3bLpBpdjrK8vDCHvLigo33g56BZg0pq%2Bp2ou5lvpgl7rDIyORWvttx02ZXMdRGA9jjLGCvAiaVB60zNdkgFPxdXmwkzQ%2FPd%2BY3YnWq6bVgrO%2Fa%2Fvb2H46DoVwsSxFQCiMA3esRJ8I2Hjr0oyZcZaHo7dxLGXNe3LqZnnyFIVWDe8JGVbF4ogp%2BvOzIHfd7KuroLvDwsmaIsq1oVDNpBJfjhqfslb1U42H0fmti91UoZzVXSfyDr0hG5%2BETq3HWT8qgar3%2BF5ojIA2s%2BMAuNlXsZhE9yeGL5fxYaXvi9eS4jtdA4DIcjvQrgK12sqlA%2BAMfB8qFqLzfA9ZvX5k%2BLJrkGDqK3lH4Q%2FF2TLNJ9vTqTELxN26Ob9XtdOstmzp3NbS03Q5TDGZ0jPSC5nQT7L8tiW%2FgI0V1wvCC1VtM3iz%2B2wVvJVinxEv5yL0%2F6CCrCRQR5KM8eA1%2B4joiXdjwD9PFk2b46GW76HfhxoTTjXqQWfbT7L1MX2d5ys%2FvvE%2BWRT8M5jdBX4yLqi8MdMcjx2D6Rci%2FWJQl6v7ShYnzmvHSmm0Jxd%2FUompLx32rAa20%2BAOLplpCgQTk3C5ZZJz9cuVmgMmCcezcdEChvGTjgdTubcqYO1lYHvVIM3TMOb%2FyL8GOqUBxHgP9H00wecO%2FJwRnQWFi3X%2FlnWGr2dWcXNaJJM8AtRRpjcWEvhUeiuHxjq4WXYB7Zj7YO68j7dPXinZHclYbgQ%2BnLG5rYzJUk84M7hN%2B9Jd4%2FjpvZWicXJQBdOtMt5fmT9ec0ogLgpNht9CoM46RUCnRCx4GMdOxt%2Bc%2BiB5gSaGr7FJzbeWk9SgzBXruaLKygaCrL0vLd8Fgm27axRiLIvr7ABI&X-Amz-Signature=b26bd27fe842c86beec916e881abc6923646852fe34fb93b25ddcec7ad1f231c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQL4576M%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVVGAxHjVUlhGDHk5INrxRBy8ia6zWa7cuA4KzlkUXGAIgEBk7UgyedUGgq%2B2LaiF3CBOUfdWmwZ4dbgGpSbT3GJcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGQCijm72nVjhASgsSrcA%2BE3bLpBpdjrK8vDCHvLigo33g56BZg0pq%2Bp2ou5lvpgl7rDIyORWvttx02ZXMdRGA9jjLGCvAiaVB60zNdkgFPxdXmwkzQ%2FPd%2BY3YnWq6bVgrO%2Fa%2Fvb2H46DoVwsSxFQCiMA3esRJ8I2Hjr0oyZcZaHo7dxLGXNe3LqZnnyFIVWDe8JGVbF4ogp%2BvOzIHfd7KuroLvDwsmaIsq1oVDNpBJfjhqfslb1U42H0fmti91UoZzVXSfyDr0hG5%2BETq3HWT8qgar3%2BF5ojIA2s%2BMAuNlXsZhE9yeGL5fxYaXvi9eS4jtdA4DIcjvQrgK12sqlA%2BAMfB8qFqLzfA9ZvX5k%2BLJrkGDqK3lH4Q%2FF2TLNJ9vTqTELxN26Ob9XtdOstmzp3NbS03Q5TDGZ0jPSC5nQT7L8tiW%2FgI0V1wvCC1VtM3iz%2B2wVvJVinxEv5yL0%2F6CCrCRQR5KM8eA1%2B4joiXdjwD9PFk2b46GW76HfhxoTTjXqQWfbT7L1MX2d5ys%2FvvE%2BWRT8M5jdBX4yLqi8MdMcjx2D6Rci%2FWJQl6v7ShYnzmvHSmm0Jxd%2FUompLx32rAa20%2BAOLplpCgQTk3C5ZZJz9cuVmgMmCcezcdEChvGTjgdTubcqYO1lYHvVIM3TMOb%2FyL8GOqUBxHgP9H00wecO%2FJwRnQWFi3X%2FlnWGr2dWcXNaJJM8AtRRpjcWEvhUeiuHxjq4WXYB7Zj7YO68j7dPXinZHclYbgQ%2BnLG5rYzJUk84M7hN%2B9Jd4%2FjpvZWicXJQBdOtMt5fmT9ec0ogLgpNht9CoM46RUCnRCx4GMdOxt%2Bc%2BiB5gSaGr7FJzbeWk9SgzBXruaLKygaCrL0vLd8Fgm27axRiLIvr7ABI&X-Amz-Signature=917d192c6aff7433de035de9921203528d3d6682114f3239b540e08cb08f7fc1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQL4576M%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVVGAxHjVUlhGDHk5INrxRBy8ia6zWa7cuA4KzlkUXGAIgEBk7UgyedUGgq%2B2LaiF3CBOUfdWmwZ4dbgGpSbT3GJcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGQCijm72nVjhASgsSrcA%2BE3bLpBpdjrK8vDCHvLigo33g56BZg0pq%2Bp2ou5lvpgl7rDIyORWvttx02ZXMdRGA9jjLGCvAiaVB60zNdkgFPxdXmwkzQ%2FPd%2BY3YnWq6bVgrO%2Fa%2Fvb2H46DoVwsSxFQCiMA3esRJ8I2Hjr0oyZcZaHo7dxLGXNe3LqZnnyFIVWDe8JGVbF4ogp%2BvOzIHfd7KuroLvDwsmaIsq1oVDNpBJfjhqfslb1U42H0fmti91UoZzVXSfyDr0hG5%2BETq3HWT8qgar3%2BF5ojIA2s%2BMAuNlXsZhE9yeGL5fxYaXvi9eS4jtdA4DIcjvQrgK12sqlA%2BAMfB8qFqLzfA9ZvX5k%2BLJrkGDqK3lH4Q%2FF2TLNJ9vTqTELxN26Ob9XtdOstmzp3NbS03Q5TDGZ0jPSC5nQT7L8tiW%2FgI0V1wvCC1VtM3iz%2B2wVvJVinxEv5yL0%2F6CCrCRQR5KM8eA1%2B4joiXdjwD9PFk2b46GW76HfhxoTTjXqQWfbT7L1MX2d5ys%2FvvE%2BWRT8M5jdBX4yLqi8MdMcjx2D6Rci%2FWJQl6v7ShYnzmvHSmm0Jxd%2FUompLx32rAa20%2BAOLplpCgQTk3C5ZZJz9cuVmgMmCcezcdEChvGTjgdTubcqYO1lYHvVIM3TMOb%2FyL8GOqUBxHgP9H00wecO%2FJwRnQWFi3X%2FlnWGr2dWcXNaJJM8AtRRpjcWEvhUeiuHxjq4WXYB7Zj7YO68j7dPXinZHclYbgQ%2BnLG5rYzJUk84M7hN%2B9Jd4%2FjpvZWicXJQBdOtMt5fmT9ec0ogLgpNht9CoM46RUCnRCx4GMdOxt%2Bc%2BiB5gSaGr7FJzbeWk9SgzBXruaLKygaCrL0vLd8Fgm27axRiLIvr7ABI&X-Amz-Signature=4503463f4f2b2b21ff945e9ab5b3edb31a1036b1043f781197c8713f85ab054a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQL4576M%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVVGAxHjVUlhGDHk5INrxRBy8ia6zWa7cuA4KzlkUXGAIgEBk7UgyedUGgq%2B2LaiF3CBOUfdWmwZ4dbgGpSbT3GJcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGQCijm72nVjhASgsSrcA%2BE3bLpBpdjrK8vDCHvLigo33g56BZg0pq%2Bp2ou5lvpgl7rDIyORWvttx02ZXMdRGA9jjLGCvAiaVB60zNdkgFPxdXmwkzQ%2FPd%2BY3YnWq6bVgrO%2Fa%2Fvb2H46DoVwsSxFQCiMA3esRJ8I2Hjr0oyZcZaHo7dxLGXNe3LqZnnyFIVWDe8JGVbF4ogp%2BvOzIHfd7KuroLvDwsmaIsq1oVDNpBJfjhqfslb1U42H0fmti91UoZzVXSfyDr0hG5%2BETq3HWT8qgar3%2BF5ojIA2s%2BMAuNlXsZhE9yeGL5fxYaXvi9eS4jtdA4DIcjvQrgK12sqlA%2BAMfB8qFqLzfA9ZvX5k%2BLJrkGDqK3lH4Q%2FF2TLNJ9vTqTELxN26Ob9XtdOstmzp3NbS03Q5TDGZ0jPSC5nQT7L8tiW%2FgI0V1wvCC1VtM3iz%2B2wVvJVinxEv5yL0%2F6CCrCRQR5KM8eA1%2B4joiXdjwD9PFk2b46GW76HfhxoTTjXqQWfbT7L1MX2d5ys%2FvvE%2BWRT8M5jdBX4yLqi8MdMcjx2D6Rci%2FWJQl6v7ShYnzmvHSmm0Jxd%2FUompLx32rAa20%2BAOLplpCgQTk3C5ZZJz9cuVmgMmCcezcdEChvGTjgdTubcqYO1lYHvVIM3TMOb%2FyL8GOqUBxHgP9H00wecO%2FJwRnQWFi3X%2FlnWGr2dWcXNaJJM8AtRRpjcWEvhUeiuHxjq4WXYB7Zj7YO68j7dPXinZHclYbgQ%2BnLG5rYzJUk84M7hN%2B9Jd4%2FjpvZWicXJQBdOtMt5fmT9ec0ogLgpNht9CoM46RUCnRCx4GMdOxt%2Bc%2BiB5gSaGr7FJzbeWk9SgzBXruaLKygaCrL0vLd8Fgm27axRiLIvr7ABI&X-Amz-Signature=484976e4ef37b9fa6488aee898a7a0d370fce2da9a9215d84d365a32e09603a0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQL4576M%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVVGAxHjVUlhGDHk5INrxRBy8ia6zWa7cuA4KzlkUXGAIgEBk7UgyedUGgq%2B2LaiF3CBOUfdWmwZ4dbgGpSbT3GJcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGQCijm72nVjhASgsSrcA%2BE3bLpBpdjrK8vDCHvLigo33g56BZg0pq%2Bp2ou5lvpgl7rDIyORWvttx02ZXMdRGA9jjLGCvAiaVB60zNdkgFPxdXmwkzQ%2FPd%2BY3YnWq6bVgrO%2Fa%2Fvb2H46DoVwsSxFQCiMA3esRJ8I2Hjr0oyZcZaHo7dxLGXNe3LqZnnyFIVWDe8JGVbF4ogp%2BvOzIHfd7KuroLvDwsmaIsq1oVDNpBJfjhqfslb1U42H0fmti91UoZzVXSfyDr0hG5%2BETq3HWT8qgar3%2BF5ojIA2s%2BMAuNlXsZhE9yeGL5fxYaXvi9eS4jtdA4DIcjvQrgK12sqlA%2BAMfB8qFqLzfA9ZvX5k%2BLJrkGDqK3lH4Q%2FF2TLNJ9vTqTELxN26Ob9XtdOstmzp3NbS03Q5TDGZ0jPSC5nQT7L8tiW%2FgI0V1wvCC1VtM3iz%2B2wVvJVinxEv5yL0%2F6CCrCRQR5KM8eA1%2B4joiXdjwD9PFk2b46GW76HfhxoTTjXqQWfbT7L1MX2d5ys%2FvvE%2BWRT8M5jdBX4yLqi8MdMcjx2D6Rci%2FWJQl6v7ShYnzmvHSmm0Jxd%2FUompLx32rAa20%2BAOLplpCgQTk3C5ZZJz9cuVmgMmCcezcdEChvGTjgdTubcqYO1lYHvVIM3TMOb%2FyL8GOqUBxHgP9H00wecO%2FJwRnQWFi3X%2FlnWGr2dWcXNaJJM8AtRRpjcWEvhUeiuHxjq4WXYB7Zj7YO68j7dPXinZHclYbgQ%2BnLG5rYzJUk84M7hN%2B9Jd4%2FjpvZWicXJQBdOtMt5fmT9ec0ogLgpNht9CoM46RUCnRCx4GMdOxt%2Bc%2BiB5gSaGr7FJzbeWk9SgzBXruaLKygaCrL0vLd8Fgm27axRiLIvr7ABI&X-Amz-Signature=ebabd25ab8b0d3bf7847c392eb84870167387a1cb0362ed7a1314031c5d3318e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQL4576M%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVVGAxHjVUlhGDHk5INrxRBy8ia6zWa7cuA4KzlkUXGAIgEBk7UgyedUGgq%2B2LaiF3CBOUfdWmwZ4dbgGpSbT3GJcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGQCijm72nVjhASgsSrcA%2BE3bLpBpdjrK8vDCHvLigo33g56BZg0pq%2Bp2ou5lvpgl7rDIyORWvttx02ZXMdRGA9jjLGCvAiaVB60zNdkgFPxdXmwkzQ%2FPd%2BY3YnWq6bVgrO%2Fa%2Fvb2H46DoVwsSxFQCiMA3esRJ8I2Hjr0oyZcZaHo7dxLGXNe3LqZnnyFIVWDe8JGVbF4ogp%2BvOzIHfd7KuroLvDwsmaIsq1oVDNpBJfjhqfslb1U42H0fmti91UoZzVXSfyDr0hG5%2BETq3HWT8qgar3%2BF5ojIA2s%2BMAuNlXsZhE9yeGL5fxYaXvi9eS4jtdA4DIcjvQrgK12sqlA%2BAMfB8qFqLzfA9ZvX5k%2BLJrkGDqK3lH4Q%2FF2TLNJ9vTqTELxN26Ob9XtdOstmzp3NbS03Q5TDGZ0jPSC5nQT7L8tiW%2FgI0V1wvCC1VtM3iz%2B2wVvJVinxEv5yL0%2F6CCrCRQR5KM8eA1%2B4joiXdjwD9PFk2b46GW76HfhxoTTjXqQWfbT7L1MX2d5ys%2FvvE%2BWRT8M5jdBX4yLqi8MdMcjx2D6Rci%2FWJQl6v7ShYnzmvHSmm0Jxd%2FUompLx32rAa20%2BAOLplpCgQTk3C5ZZJz9cuVmgMmCcezcdEChvGTjgdTubcqYO1lYHvVIM3TMOb%2FyL8GOqUBxHgP9H00wecO%2FJwRnQWFi3X%2FlnWGr2dWcXNaJJM8AtRRpjcWEvhUeiuHxjq4WXYB7Zj7YO68j7dPXinZHclYbgQ%2BnLG5rYzJUk84M7hN%2B9Jd4%2FjpvZWicXJQBdOtMt5fmT9ec0ogLgpNht9CoM46RUCnRCx4GMdOxt%2Bc%2BiB5gSaGr7FJzbeWk9SgzBXruaLKygaCrL0vLd8Fgm27axRiLIvr7ABI&X-Amz-Signature=9bf7c9cbb65d473e8c6012194a28322a85600d27af6ad82d4f1a8a067903629f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
