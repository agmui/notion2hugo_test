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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PIXT6LU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxtnwYtyoarlwPytUXRpSNA5ft68BxGdXb7olk78sH5AIgMZQf4q9Rg68qEF54dknFWIcgsofnhi%2BGfjg4NNb0U%2BkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoWOkw319PeVRDUYCrcA40QZn8xNkpAqIi474fxnFbOKc83MVQtuRGQHmV77JfgBzhW9Z1%2Fg0BFHwYknA4BrDtjkKe1APU3sim%2FH47qMr6HMH0lAzPHye2dQOl%2B2LqMaoChoFMabh6KjVrEDRxRZfZ5MGj9gLqemQ00dKK%2B3%2FlaLVYld47dJ4dYuXGF%2BASEsVYPFGzTLRZiNZNU2sEMmVaKUrSKNVVLeFkD%2BqAaQ0XenbtxXKbIdVTMAlepGtRCCiiVnr2%2BzuK37Uflk4ptb6A%2FjEN1ANOlpLDh%2BN1JoUlhRek26nPkgRL5BabjbDriSvQpOTZhylupQtpCKDU4VP94FVKIP%2BjEOQUiUnmGEKdhA1cy9Rdo2Vp9OCGBv%2FkMQKH0%2BQqKhB38e%2FBfgjSI1WLSGxe5SrF7QLiYQCTw6S%2B9NHiMGy0vz4hzUzD5cEJ2xBySXBhaR9ZxG1QjJyvTuLGjGpoQ%2FZhLTLFaU1a4afov8XYF0po%2Bomw09bH29hFCFs6uzNj8phSaKr1Q%2BwDGLliarMNnj9F24YgoH1%2BWK%2FOam6FbIyWtc2z4pBAe7%2B7eHeIYCzKBRSG6et%2BUve2r1gDXm4hm%2Fu7WNNJ9AkgQnJ2d9Dceqsn7K%2Bq0ukXwMMa78lePgqluN7WA0cJ7MJz8jMAGOqUBXj1auikr7pnZ2wP2fqHmSOQuX4wfm%2BiQ5KaQWy2TiEwBNa3oBx6cOE0KVvzciB0ys0d0KEDh%2FyRluR28MncY6Qnlw915qxSSGkaxaqkrjXJWyhy6oj2sVVYsaGRw4SczeGyIWB3fe2pcwVmWteFFHIQOArdIm54HOQxNZaJkC7Z%2FZt6NORADcCAezI%2BKQvGoBIhgc7P0qPqMhFibm7Llk0cSi563&X-Amz-Signature=5451bd46aca4a2fee6df19e5cfde0b84e22a977115acfe3f5f15e5a11d46945f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PIXT6LU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxtnwYtyoarlwPytUXRpSNA5ft68BxGdXb7olk78sH5AIgMZQf4q9Rg68qEF54dknFWIcgsofnhi%2BGfjg4NNb0U%2BkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoWOkw319PeVRDUYCrcA40QZn8xNkpAqIi474fxnFbOKc83MVQtuRGQHmV77JfgBzhW9Z1%2Fg0BFHwYknA4BrDtjkKe1APU3sim%2FH47qMr6HMH0lAzPHye2dQOl%2B2LqMaoChoFMabh6KjVrEDRxRZfZ5MGj9gLqemQ00dKK%2B3%2FlaLVYld47dJ4dYuXGF%2BASEsVYPFGzTLRZiNZNU2sEMmVaKUrSKNVVLeFkD%2BqAaQ0XenbtxXKbIdVTMAlepGtRCCiiVnr2%2BzuK37Uflk4ptb6A%2FjEN1ANOlpLDh%2BN1JoUlhRek26nPkgRL5BabjbDriSvQpOTZhylupQtpCKDU4VP94FVKIP%2BjEOQUiUnmGEKdhA1cy9Rdo2Vp9OCGBv%2FkMQKH0%2BQqKhB38e%2FBfgjSI1WLSGxe5SrF7QLiYQCTw6S%2B9NHiMGy0vz4hzUzD5cEJ2xBySXBhaR9ZxG1QjJyvTuLGjGpoQ%2FZhLTLFaU1a4afov8XYF0po%2Bomw09bH29hFCFs6uzNj8phSaKr1Q%2BwDGLliarMNnj9F24YgoH1%2BWK%2FOam6FbIyWtc2z4pBAe7%2B7eHeIYCzKBRSG6et%2BUve2r1gDXm4hm%2Fu7WNNJ9AkgQnJ2d9Dceqsn7K%2Bq0ukXwMMa78lePgqluN7WA0cJ7MJz8jMAGOqUBXj1auikr7pnZ2wP2fqHmSOQuX4wfm%2BiQ5KaQWy2TiEwBNa3oBx6cOE0KVvzciB0ys0d0KEDh%2FyRluR28MncY6Qnlw915qxSSGkaxaqkrjXJWyhy6oj2sVVYsaGRw4SczeGyIWB3fe2pcwVmWteFFHIQOArdIm54HOQxNZaJkC7Z%2FZt6NORADcCAezI%2BKQvGoBIhgc7P0qPqMhFibm7Llk0cSi563&X-Amz-Signature=5cdfec5a2a31466ef9a6a353213d179be1219efd472ec2ed20aade8c336e82e6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PIXT6LU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxtnwYtyoarlwPytUXRpSNA5ft68BxGdXb7olk78sH5AIgMZQf4q9Rg68qEF54dknFWIcgsofnhi%2BGfjg4NNb0U%2BkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoWOkw319PeVRDUYCrcA40QZn8xNkpAqIi474fxnFbOKc83MVQtuRGQHmV77JfgBzhW9Z1%2Fg0BFHwYknA4BrDtjkKe1APU3sim%2FH47qMr6HMH0lAzPHye2dQOl%2B2LqMaoChoFMabh6KjVrEDRxRZfZ5MGj9gLqemQ00dKK%2B3%2FlaLVYld47dJ4dYuXGF%2BASEsVYPFGzTLRZiNZNU2sEMmVaKUrSKNVVLeFkD%2BqAaQ0XenbtxXKbIdVTMAlepGtRCCiiVnr2%2BzuK37Uflk4ptb6A%2FjEN1ANOlpLDh%2BN1JoUlhRek26nPkgRL5BabjbDriSvQpOTZhylupQtpCKDU4VP94FVKIP%2BjEOQUiUnmGEKdhA1cy9Rdo2Vp9OCGBv%2FkMQKH0%2BQqKhB38e%2FBfgjSI1WLSGxe5SrF7QLiYQCTw6S%2B9NHiMGy0vz4hzUzD5cEJ2xBySXBhaR9ZxG1QjJyvTuLGjGpoQ%2FZhLTLFaU1a4afov8XYF0po%2Bomw09bH29hFCFs6uzNj8phSaKr1Q%2BwDGLliarMNnj9F24YgoH1%2BWK%2FOam6FbIyWtc2z4pBAe7%2B7eHeIYCzKBRSG6et%2BUve2r1gDXm4hm%2Fu7WNNJ9AkgQnJ2d9Dceqsn7K%2Bq0ukXwMMa78lePgqluN7WA0cJ7MJz8jMAGOqUBXj1auikr7pnZ2wP2fqHmSOQuX4wfm%2BiQ5KaQWy2TiEwBNa3oBx6cOE0KVvzciB0ys0d0KEDh%2FyRluR28MncY6Qnlw915qxSSGkaxaqkrjXJWyhy6oj2sVVYsaGRw4SczeGyIWB3fe2pcwVmWteFFHIQOArdIm54HOQxNZaJkC7Z%2FZt6NORADcCAezI%2BKQvGoBIhgc7P0qPqMhFibm7Llk0cSi563&X-Amz-Signature=25885c467082ceff30d9de3cc44045018ea2c7ea5b406cc9353a3e1977610f67&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PIXT6LU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxtnwYtyoarlwPytUXRpSNA5ft68BxGdXb7olk78sH5AIgMZQf4q9Rg68qEF54dknFWIcgsofnhi%2BGfjg4NNb0U%2BkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoWOkw319PeVRDUYCrcA40QZn8xNkpAqIi474fxnFbOKc83MVQtuRGQHmV77JfgBzhW9Z1%2Fg0BFHwYknA4BrDtjkKe1APU3sim%2FH47qMr6HMH0lAzPHye2dQOl%2B2LqMaoChoFMabh6KjVrEDRxRZfZ5MGj9gLqemQ00dKK%2B3%2FlaLVYld47dJ4dYuXGF%2BASEsVYPFGzTLRZiNZNU2sEMmVaKUrSKNVVLeFkD%2BqAaQ0XenbtxXKbIdVTMAlepGtRCCiiVnr2%2BzuK37Uflk4ptb6A%2FjEN1ANOlpLDh%2BN1JoUlhRek26nPkgRL5BabjbDriSvQpOTZhylupQtpCKDU4VP94FVKIP%2BjEOQUiUnmGEKdhA1cy9Rdo2Vp9OCGBv%2FkMQKH0%2BQqKhB38e%2FBfgjSI1WLSGxe5SrF7QLiYQCTw6S%2B9NHiMGy0vz4hzUzD5cEJ2xBySXBhaR9ZxG1QjJyvTuLGjGpoQ%2FZhLTLFaU1a4afov8XYF0po%2Bomw09bH29hFCFs6uzNj8phSaKr1Q%2BwDGLliarMNnj9F24YgoH1%2BWK%2FOam6FbIyWtc2z4pBAe7%2B7eHeIYCzKBRSG6et%2BUve2r1gDXm4hm%2Fu7WNNJ9AkgQnJ2d9Dceqsn7K%2Bq0ukXwMMa78lePgqluN7WA0cJ7MJz8jMAGOqUBXj1auikr7pnZ2wP2fqHmSOQuX4wfm%2BiQ5KaQWy2TiEwBNa3oBx6cOE0KVvzciB0ys0d0KEDh%2FyRluR28MncY6Qnlw915qxSSGkaxaqkrjXJWyhy6oj2sVVYsaGRw4SczeGyIWB3fe2pcwVmWteFFHIQOArdIm54HOQxNZaJkC7Z%2FZt6NORADcCAezI%2BKQvGoBIhgc7P0qPqMhFibm7Llk0cSi563&X-Amz-Signature=86f0d94936818ae692fe82c77619ac396776ca9c3115cc20c4e8313018519836&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PIXT6LU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxtnwYtyoarlwPytUXRpSNA5ft68BxGdXb7olk78sH5AIgMZQf4q9Rg68qEF54dknFWIcgsofnhi%2BGfjg4NNb0U%2BkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoWOkw319PeVRDUYCrcA40QZn8xNkpAqIi474fxnFbOKc83MVQtuRGQHmV77JfgBzhW9Z1%2Fg0BFHwYknA4BrDtjkKe1APU3sim%2FH47qMr6HMH0lAzPHye2dQOl%2B2LqMaoChoFMabh6KjVrEDRxRZfZ5MGj9gLqemQ00dKK%2B3%2FlaLVYld47dJ4dYuXGF%2BASEsVYPFGzTLRZiNZNU2sEMmVaKUrSKNVVLeFkD%2BqAaQ0XenbtxXKbIdVTMAlepGtRCCiiVnr2%2BzuK37Uflk4ptb6A%2FjEN1ANOlpLDh%2BN1JoUlhRek26nPkgRL5BabjbDriSvQpOTZhylupQtpCKDU4VP94FVKIP%2BjEOQUiUnmGEKdhA1cy9Rdo2Vp9OCGBv%2FkMQKH0%2BQqKhB38e%2FBfgjSI1WLSGxe5SrF7QLiYQCTw6S%2B9NHiMGy0vz4hzUzD5cEJ2xBySXBhaR9ZxG1QjJyvTuLGjGpoQ%2FZhLTLFaU1a4afov8XYF0po%2Bomw09bH29hFCFs6uzNj8phSaKr1Q%2BwDGLliarMNnj9F24YgoH1%2BWK%2FOam6FbIyWtc2z4pBAe7%2B7eHeIYCzKBRSG6et%2BUve2r1gDXm4hm%2Fu7WNNJ9AkgQnJ2d9Dceqsn7K%2Bq0ukXwMMa78lePgqluN7WA0cJ7MJz8jMAGOqUBXj1auikr7pnZ2wP2fqHmSOQuX4wfm%2BiQ5KaQWy2TiEwBNa3oBx6cOE0KVvzciB0ys0d0KEDh%2FyRluR28MncY6Qnlw915qxSSGkaxaqkrjXJWyhy6oj2sVVYsaGRw4SczeGyIWB3fe2pcwVmWteFFHIQOArdIm54HOQxNZaJkC7Z%2FZt6NORADcCAezI%2BKQvGoBIhgc7P0qPqMhFibm7Llk0cSi563&X-Amz-Signature=07f1d18d32692329432b6d19d82d2bc7f181f4e83b06f76ed7aa88466aba0dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PIXT6LU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxtnwYtyoarlwPytUXRpSNA5ft68BxGdXb7olk78sH5AIgMZQf4q9Rg68qEF54dknFWIcgsofnhi%2BGfjg4NNb0U%2BkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoWOkw319PeVRDUYCrcA40QZn8xNkpAqIi474fxnFbOKc83MVQtuRGQHmV77JfgBzhW9Z1%2Fg0BFHwYknA4BrDtjkKe1APU3sim%2FH47qMr6HMH0lAzPHye2dQOl%2B2LqMaoChoFMabh6KjVrEDRxRZfZ5MGj9gLqemQ00dKK%2B3%2FlaLVYld47dJ4dYuXGF%2BASEsVYPFGzTLRZiNZNU2sEMmVaKUrSKNVVLeFkD%2BqAaQ0XenbtxXKbIdVTMAlepGtRCCiiVnr2%2BzuK37Uflk4ptb6A%2FjEN1ANOlpLDh%2BN1JoUlhRek26nPkgRL5BabjbDriSvQpOTZhylupQtpCKDU4VP94FVKIP%2BjEOQUiUnmGEKdhA1cy9Rdo2Vp9OCGBv%2FkMQKH0%2BQqKhB38e%2FBfgjSI1WLSGxe5SrF7QLiYQCTw6S%2B9NHiMGy0vz4hzUzD5cEJ2xBySXBhaR9ZxG1QjJyvTuLGjGpoQ%2FZhLTLFaU1a4afov8XYF0po%2Bomw09bH29hFCFs6uzNj8phSaKr1Q%2BwDGLliarMNnj9F24YgoH1%2BWK%2FOam6FbIyWtc2z4pBAe7%2B7eHeIYCzKBRSG6et%2BUve2r1gDXm4hm%2Fu7WNNJ9AkgQnJ2d9Dceqsn7K%2Bq0ukXwMMa78lePgqluN7WA0cJ7MJz8jMAGOqUBXj1auikr7pnZ2wP2fqHmSOQuX4wfm%2BiQ5KaQWy2TiEwBNa3oBx6cOE0KVvzciB0ys0d0KEDh%2FyRluR28MncY6Qnlw915qxSSGkaxaqkrjXJWyhy6oj2sVVYsaGRw4SczeGyIWB3fe2pcwVmWteFFHIQOArdIm54HOQxNZaJkC7Z%2FZt6NORADcCAezI%2BKQvGoBIhgc7P0qPqMhFibm7Llk0cSi563&X-Amz-Signature=b95666495e4998d3c69943f6fc3d9e8edcd45f9d421614edb90058c8c92234ab&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PIXT6LU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxtnwYtyoarlwPytUXRpSNA5ft68BxGdXb7olk78sH5AIgMZQf4q9Rg68qEF54dknFWIcgsofnhi%2BGfjg4NNb0U%2BkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoWOkw319PeVRDUYCrcA40QZn8xNkpAqIi474fxnFbOKc83MVQtuRGQHmV77JfgBzhW9Z1%2Fg0BFHwYknA4BrDtjkKe1APU3sim%2FH47qMr6HMH0lAzPHye2dQOl%2B2LqMaoChoFMabh6KjVrEDRxRZfZ5MGj9gLqemQ00dKK%2B3%2FlaLVYld47dJ4dYuXGF%2BASEsVYPFGzTLRZiNZNU2sEMmVaKUrSKNVVLeFkD%2BqAaQ0XenbtxXKbIdVTMAlepGtRCCiiVnr2%2BzuK37Uflk4ptb6A%2FjEN1ANOlpLDh%2BN1JoUlhRek26nPkgRL5BabjbDriSvQpOTZhylupQtpCKDU4VP94FVKIP%2BjEOQUiUnmGEKdhA1cy9Rdo2Vp9OCGBv%2FkMQKH0%2BQqKhB38e%2FBfgjSI1WLSGxe5SrF7QLiYQCTw6S%2B9NHiMGy0vz4hzUzD5cEJ2xBySXBhaR9ZxG1QjJyvTuLGjGpoQ%2FZhLTLFaU1a4afov8XYF0po%2Bomw09bH29hFCFs6uzNj8phSaKr1Q%2BwDGLliarMNnj9F24YgoH1%2BWK%2FOam6FbIyWtc2z4pBAe7%2B7eHeIYCzKBRSG6et%2BUve2r1gDXm4hm%2Fu7WNNJ9AkgQnJ2d9Dceqsn7K%2Bq0ukXwMMa78lePgqluN7WA0cJ7MJz8jMAGOqUBXj1auikr7pnZ2wP2fqHmSOQuX4wfm%2BiQ5KaQWy2TiEwBNa3oBx6cOE0KVvzciB0ys0d0KEDh%2FyRluR28MncY6Qnlw915qxSSGkaxaqkrjXJWyhy6oj2sVVYsaGRw4SczeGyIWB3fe2pcwVmWteFFHIQOArdIm54HOQxNZaJkC7Z%2FZt6NORADcCAezI%2BKQvGoBIhgc7P0qPqMhFibm7Llk0cSi563&X-Amz-Signature=650024c5fdf59735d07f51095f06dfbc786dd4f4f2b26351a2f8ef3436b68ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
