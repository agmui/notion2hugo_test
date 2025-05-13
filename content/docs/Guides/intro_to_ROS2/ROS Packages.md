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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QFHVHEW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB3sxa6GCeZTrzHTmINs6sKctCp%2FXaOD5TRJujbIouo%2BAiEA5XY0ZERF%2F2ZbW%2FXRTzgkwySFKFinVNtzjcnkGNsTATMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEc5SmisR2V5spGC9yrcAyX%2BikGjmgcmQHC2NGMr4mxyKDW49DBeBfoYfKmwTKal%2BkD6wsNE%2FDnDxEoS8MY%2FqaedAjrsBrOjGk84TPHleD%2B%2FdXjrd9y2DqrCrMajKT4sldtSr2E1boZGqPY%2BX67JpIrFhWErD%2FDc8%2F8aNynw4sLbSylB6YhKp4z4n%2B0z0CfYKf0VIP8a2CaP221Q%2FqVK4O%2FJ3okO7xlHel2EJTu5WMbQxiHIL3%2BAFhEbOK%2BcEhHT%2FE%2F3Po%2BCahgUDNzPT4MhFkvZDpCIHlgRBZ1y65dW5o9wMlv9%2FRbhq9g2PLWNcCwfvEAlNDNHagZQtOKGHs4QjIkyTCj6jxTn0e7mp8Ft5jw5yu%2BsHGmLOE1klPkJXJmzynOF9vZe9PkrNmK8gsW5pe4psa1SRH6b8vugaQGrZcoD4wvTNEMQgLLNC6HCLJrdRjfn4k6MR8WCda7W8p2XluXXcHtN1F2O5y25fE%2FsI7f7Q%2FabYyGEsP5Rc62O0ZMbH4T%2FZi9kuSJHVBwO0ry2XKpjq6bU5zOCyvIHHNYHqQXXeQnRFkFefmiCIuzOE65atCDfgkaR%2Fm15SYBhGasd%2Fep5J%2F%2FBYv8kqrwD0bATkdc5AIz3KTaAflN0oEQEu6YmUjbKCwh%2FdmkKBtA1MIHai8EGOqUBSG%2BKmjIkaWAUW9LeHuKDYMWPa1djl9DeX60%2Fb04k8tbaT6vOBqDqqxGYiW1NvYSkToxnXI1uVqsuVFVRdsEr7w66N5t3LpJ2gyZnsktBTR%2BlBjMGNC18TVP2zdvJQPNcBgMTMFk9wf0xu4DljMwtIDZrYBgHpDycuQzi340zbXbwINIdY%2FdtkB85OtpUcuYf2O8dnbe%2BtcUnoqheZXAfm%2FdOhO%2Fr&X-Amz-Signature=fa8b307199279ab51547067736c592d3990dbfdee622e6cef4bb6850d1c55960&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QFHVHEW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB3sxa6GCeZTrzHTmINs6sKctCp%2FXaOD5TRJujbIouo%2BAiEA5XY0ZERF%2F2ZbW%2FXRTzgkwySFKFinVNtzjcnkGNsTATMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEc5SmisR2V5spGC9yrcAyX%2BikGjmgcmQHC2NGMr4mxyKDW49DBeBfoYfKmwTKal%2BkD6wsNE%2FDnDxEoS8MY%2FqaedAjrsBrOjGk84TPHleD%2B%2FdXjrd9y2DqrCrMajKT4sldtSr2E1boZGqPY%2BX67JpIrFhWErD%2FDc8%2F8aNynw4sLbSylB6YhKp4z4n%2B0z0CfYKf0VIP8a2CaP221Q%2FqVK4O%2FJ3okO7xlHel2EJTu5WMbQxiHIL3%2BAFhEbOK%2BcEhHT%2FE%2F3Po%2BCahgUDNzPT4MhFkvZDpCIHlgRBZ1y65dW5o9wMlv9%2FRbhq9g2PLWNcCwfvEAlNDNHagZQtOKGHs4QjIkyTCj6jxTn0e7mp8Ft5jw5yu%2BsHGmLOE1klPkJXJmzynOF9vZe9PkrNmK8gsW5pe4psa1SRH6b8vugaQGrZcoD4wvTNEMQgLLNC6HCLJrdRjfn4k6MR8WCda7W8p2XluXXcHtN1F2O5y25fE%2FsI7f7Q%2FabYyGEsP5Rc62O0ZMbH4T%2FZi9kuSJHVBwO0ry2XKpjq6bU5zOCyvIHHNYHqQXXeQnRFkFefmiCIuzOE65atCDfgkaR%2Fm15SYBhGasd%2Fep5J%2F%2FBYv8kqrwD0bATkdc5AIz3KTaAflN0oEQEu6YmUjbKCwh%2FdmkKBtA1MIHai8EGOqUBSG%2BKmjIkaWAUW9LeHuKDYMWPa1djl9DeX60%2Fb04k8tbaT6vOBqDqqxGYiW1NvYSkToxnXI1uVqsuVFVRdsEr7w66N5t3LpJ2gyZnsktBTR%2BlBjMGNC18TVP2zdvJQPNcBgMTMFk9wf0xu4DljMwtIDZrYBgHpDycuQzi340zbXbwINIdY%2FdtkB85OtpUcuYf2O8dnbe%2BtcUnoqheZXAfm%2FdOhO%2Fr&X-Amz-Signature=aa70692419e1c22447c424b25eb626c56e78d45c15a1c4099ad82957ab2d3155&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QFHVHEW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB3sxa6GCeZTrzHTmINs6sKctCp%2FXaOD5TRJujbIouo%2BAiEA5XY0ZERF%2F2ZbW%2FXRTzgkwySFKFinVNtzjcnkGNsTATMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEc5SmisR2V5spGC9yrcAyX%2BikGjmgcmQHC2NGMr4mxyKDW49DBeBfoYfKmwTKal%2BkD6wsNE%2FDnDxEoS8MY%2FqaedAjrsBrOjGk84TPHleD%2B%2FdXjrd9y2DqrCrMajKT4sldtSr2E1boZGqPY%2BX67JpIrFhWErD%2FDc8%2F8aNynw4sLbSylB6YhKp4z4n%2B0z0CfYKf0VIP8a2CaP221Q%2FqVK4O%2FJ3okO7xlHel2EJTu5WMbQxiHIL3%2BAFhEbOK%2BcEhHT%2FE%2F3Po%2BCahgUDNzPT4MhFkvZDpCIHlgRBZ1y65dW5o9wMlv9%2FRbhq9g2PLWNcCwfvEAlNDNHagZQtOKGHs4QjIkyTCj6jxTn0e7mp8Ft5jw5yu%2BsHGmLOE1klPkJXJmzynOF9vZe9PkrNmK8gsW5pe4psa1SRH6b8vugaQGrZcoD4wvTNEMQgLLNC6HCLJrdRjfn4k6MR8WCda7W8p2XluXXcHtN1F2O5y25fE%2FsI7f7Q%2FabYyGEsP5Rc62O0ZMbH4T%2FZi9kuSJHVBwO0ry2XKpjq6bU5zOCyvIHHNYHqQXXeQnRFkFefmiCIuzOE65atCDfgkaR%2Fm15SYBhGasd%2Fep5J%2F%2FBYv8kqrwD0bATkdc5AIz3KTaAflN0oEQEu6YmUjbKCwh%2FdmkKBtA1MIHai8EGOqUBSG%2BKmjIkaWAUW9LeHuKDYMWPa1djl9DeX60%2Fb04k8tbaT6vOBqDqqxGYiW1NvYSkToxnXI1uVqsuVFVRdsEr7w66N5t3LpJ2gyZnsktBTR%2BlBjMGNC18TVP2zdvJQPNcBgMTMFk9wf0xu4DljMwtIDZrYBgHpDycuQzi340zbXbwINIdY%2FdtkB85OtpUcuYf2O8dnbe%2BtcUnoqheZXAfm%2FdOhO%2Fr&X-Amz-Signature=e74975a254504623ae09ecb08c29f52c3925af7559773400ba02e27f7407e611&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QFHVHEW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB3sxa6GCeZTrzHTmINs6sKctCp%2FXaOD5TRJujbIouo%2BAiEA5XY0ZERF%2F2ZbW%2FXRTzgkwySFKFinVNtzjcnkGNsTATMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEc5SmisR2V5spGC9yrcAyX%2BikGjmgcmQHC2NGMr4mxyKDW49DBeBfoYfKmwTKal%2BkD6wsNE%2FDnDxEoS8MY%2FqaedAjrsBrOjGk84TPHleD%2B%2FdXjrd9y2DqrCrMajKT4sldtSr2E1boZGqPY%2BX67JpIrFhWErD%2FDc8%2F8aNynw4sLbSylB6YhKp4z4n%2B0z0CfYKf0VIP8a2CaP221Q%2FqVK4O%2FJ3okO7xlHel2EJTu5WMbQxiHIL3%2BAFhEbOK%2BcEhHT%2FE%2F3Po%2BCahgUDNzPT4MhFkvZDpCIHlgRBZ1y65dW5o9wMlv9%2FRbhq9g2PLWNcCwfvEAlNDNHagZQtOKGHs4QjIkyTCj6jxTn0e7mp8Ft5jw5yu%2BsHGmLOE1klPkJXJmzynOF9vZe9PkrNmK8gsW5pe4psa1SRH6b8vugaQGrZcoD4wvTNEMQgLLNC6HCLJrdRjfn4k6MR8WCda7W8p2XluXXcHtN1F2O5y25fE%2FsI7f7Q%2FabYyGEsP5Rc62O0ZMbH4T%2FZi9kuSJHVBwO0ry2XKpjq6bU5zOCyvIHHNYHqQXXeQnRFkFefmiCIuzOE65atCDfgkaR%2Fm15SYBhGasd%2Fep5J%2F%2FBYv8kqrwD0bATkdc5AIz3KTaAflN0oEQEu6YmUjbKCwh%2FdmkKBtA1MIHai8EGOqUBSG%2BKmjIkaWAUW9LeHuKDYMWPa1djl9DeX60%2Fb04k8tbaT6vOBqDqqxGYiW1NvYSkToxnXI1uVqsuVFVRdsEr7w66N5t3LpJ2gyZnsktBTR%2BlBjMGNC18TVP2zdvJQPNcBgMTMFk9wf0xu4DljMwtIDZrYBgHpDycuQzi340zbXbwINIdY%2FdtkB85OtpUcuYf2O8dnbe%2BtcUnoqheZXAfm%2FdOhO%2Fr&X-Amz-Signature=b02af8e4c46c9187f8610df1b1e4138684177b0e8a80c841bd266d3093dc5572&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QFHVHEW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB3sxa6GCeZTrzHTmINs6sKctCp%2FXaOD5TRJujbIouo%2BAiEA5XY0ZERF%2F2ZbW%2FXRTzgkwySFKFinVNtzjcnkGNsTATMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEc5SmisR2V5spGC9yrcAyX%2BikGjmgcmQHC2NGMr4mxyKDW49DBeBfoYfKmwTKal%2BkD6wsNE%2FDnDxEoS8MY%2FqaedAjrsBrOjGk84TPHleD%2B%2FdXjrd9y2DqrCrMajKT4sldtSr2E1boZGqPY%2BX67JpIrFhWErD%2FDc8%2F8aNynw4sLbSylB6YhKp4z4n%2B0z0CfYKf0VIP8a2CaP221Q%2FqVK4O%2FJ3okO7xlHel2EJTu5WMbQxiHIL3%2BAFhEbOK%2BcEhHT%2FE%2F3Po%2BCahgUDNzPT4MhFkvZDpCIHlgRBZ1y65dW5o9wMlv9%2FRbhq9g2PLWNcCwfvEAlNDNHagZQtOKGHs4QjIkyTCj6jxTn0e7mp8Ft5jw5yu%2BsHGmLOE1klPkJXJmzynOF9vZe9PkrNmK8gsW5pe4psa1SRH6b8vugaQGrZcoD4wvTNEMQgLLNC6HCLJrdRjfn4k6MR8WCda7W8p2XluXXcHtN1F2O5y25fE%2FsI7f7Q%2FabYyGEsP5Rc62O0ZMbH4T%2FZi9kuSJHVBwO0ry2XKpjq6bU5zOCyvIHHNYHqQXXeQnRFkFefmiCIuzOE65atCDfgkaR%2Fm15SYBhGasd%2Fep5J%2F%2FBYv8kqrwD0bATkdc5AIz3KTaAflN0oEQEu6YmUjbKCwh%2FdmkKBtA1MIHai8EGOqUBSG%2BKmjIkaWAUW9LeHuKDYMWPa1djl9DeX60%2Fb04k8tbaT6vOBqDqqxGYiW1NvYSkToxnXI1uVqsuVFVRdsEr7w66N5t3LpJ2gyZnsktBTR%2BlBjMGNC18TVP2zdvJQPNcBgMTMFk9wf0xu4DljMwtIDZrYBgHpDycuQzi340zbXbwINIdY%2FdtkB85OtpUcuYf2O8dnbe%2BtcUnoqheZXAfm%2FdOhO%2Fr&X-Amz-Signature=bc697b140d77d096239db4eb6d9274fdfdc3e675864cb9d820aa4220c4679270&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QFHVHEW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB3sxa6GCeZTrzHTmINs6sKctCp%2FXaOD5TRJujbIouo%2BAiEA5XY0ZERF%2F2ZbW%2FXRTzgkwySFKFinVNtzjcnkGNsTATMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEc5SmisR2V5spGC9yrcAyX%2BikGjmgcmQHC2NGMr4mxyKDW49DBeBfoYfKmwTKal%2BkD6wsNE%2FDnDxEoS8MY%2FqaedAjrsBrOjGk84TPHleD%2B%2FdXjrd9y2DqrCrMajKT4sldtSr2E1boZGqPY%2BX67JpIrFhWErD%2FDc8%2F8aNynw4sLbSylB6YhKp4z4n%2B0z0CfYKf0VIP8a2CaP221Q%2FqVK4O%2FJ3okO7xlHel2EJTu5WMbQxiHIL3%2BAFhEbOK%2BcEhHT%2FE%2F3Po%2BCahgUDNzPT4MhFkvZDpCIHlgRBZ1y65dW5o9wMlv9%2FRbhq9g2PLWNcCwfvEAlNDNHagZQtOKGHs4QjIkyTCj6jxTn0e7mp8Ft5jw5yu%2BsHGmLOE1klPkJXJmzynOF9vZe9PkrNmK8gsW5pe4psa1SRH6b8vugaQGrZcoD4wvTNEMQgLLNC6HCLJrdRjfn4k6MR8WCda7W8p2XluXXcHtN1F2O5y25fE%2FsI7f7Q%2FabYyGEsP5Rc62O0ZMbH4T%2FZi9kuSJHVBwO0ry2XKpjq6bU5zOCyvIHHNYHqQXXeQnRFkFefmiCIuzOE65atCDfgkaR%2Fm15SYBhGasd%2Fep5J%2F%2FBYv8kqrwD0bATkdc5AIz3KTaAflN0oEQEu6YmUjbKCwh%2FdmkKBtA1MIHai8EGOqUBSG%2BKmjIkaWAUW9LeHuKDYMWPa1djl9DeX60%2Fb04k8tbaT6vOBqDqqxGYiW1NvYSkToxnXI1uVqsuVFVRdsEr7w66N5t3LpJ2gyZnsktBTR%2BlBjMGNC18TVP2zdvJQPNcBgMTMFk9wf0xu4DljMwtIDZrYBgHpDycuQzi340zbXbwINIdY%2FdtkB85OtpUcuYf2O8dnbe%2BtcUnoqheZXAfm%2FdOhO%2Fr&X-Amz-Signature=4b30ac4cb4823de2d3cb823aeea19b1ced053b38d8a1c83692fc1933dbb80e84&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QFHVHEW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB3sxa6GCeZTrzHTmINs6sKctCp%2FXaOD5TRJujbIouo%2BAiEA5XY0ZERF%2F2ZbW%2FXRTzgkwySFKFinVNtzjcnkGNsTATMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEc5SmisR2V5spGC9yrcAyX%2BikGjmgcmQHC2NGMr4mxyKDW49DBeBfoYfKmwTKal%2BkD6wsNE%2FDnDxEoS8MY%2FqaedAjrsBrOjGk84TPHleD%2B%2FdXjrd9y2DqrCrMajKT4sldtSr2E1boZGqPY%2BX67JpIrFhWErD%2FDc8%2F8aNynw4sLbSylB6YhKp4z4n%2B0z0CfYKf0VIP8a2CaP221Q%2FqVK4O%2FJ3okO7xlHel2EJTu5WMbQxiHIL3%2BAFhEbOK%2BcEhHT%2FE%2F3Po%2BCahgUDNzPT4MhFkvZDpCIHlgRBZ1y65dW5o9wMlv9%2FRbhq9g2PLWNcCwfvEAlNDNHagZQtOKGHs4QjIkyTCj6jxTn0e7mp8Ft5jw5yu%2BsHGmLOE1klPkJXJmzynOF9vZe9PkrNmK8gsW5pe4psa1SRH6b8vugaQGrZcoD4wvTNEMQgLLNC6HCLJrdRjfn4k6MR8WCda7W8p2XluXXcHtN1F2O5y25fE%2FsI7f7Q%2FabYyGEsP5Rc62O0ZMbH4T%2FZi9kuSJHVBwO0ry2XKpjq6bU5zOCyvIHHNYHqQXXeQnRFkFefmiCIuzOE65atCDfgkaR%2Fm15SYBhGasd%2Fep5J%2F%2FBYv8kqrwD0bATkdc5AIz3KTaAflN0oEQEu6YmUjbKCwh%2FdmkKBtA1MIHai8EGOqUBSG%2BKmjIkaWAUW9LeHuKDYMWPa1djl9DeX60%2Fb04k8tbaT6vOBqDqqxGYiW1NvYSkToxnXI1uVqsuVFVRdsEr7w66N5t3LpJ2gyZnsktBTR%2BlBjMGNC18TVP2zdvJQPNcBgMTMFk9wf0xu4DljMwtIDZrYBgHpDycuQzi340zbXbwINIdY%2FdtkB85OtpUcuYf2O8dnbe%2BtcUnoqheZXAfm%2FdOhO%2Fr&X-Amz-Signature=717c153a9776e0d12a5b8168124ac5f3c5aae2aee69d32ddbd548e64b05dfe22&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
