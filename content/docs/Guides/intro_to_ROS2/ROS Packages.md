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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664364QMDK%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCTZad318PQaCsjuqQEQtAaX8F%2Bt%2BnyfLXqts8JTv9p9wIhAK%2BSrvtLugsTPr5KzALmn909Jao%2FVmJYs5zADdVNzqWyKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3lSe47bgYGhnq6nkq3APfUSxlW%2B87GH9aLvoiYL1oVpeSUE2zycZEjrjqXfAyjj5jpFSXLxW3WxCeDyE19lRXCt5GzNVgylcUV1TIjWQSaFIXaumQk5FLxJUFUIAp0617CoxprIHYVjgTuU0DtMuTDv35S7JN%2BvX4NWHUkV8N9DWqYcgIiRrBi4T0TJYBvkCPcrXfWh48cQ21nD2UPQz33szaGVJ6niwwQSDYxQaFj8VHgCph7yPqs6VJOSR8JlYPaDf6KQ%2BsDXDfY06ZTZ5YQEauzy%2Bnz7BuR5Tc98U3AbIB7bkeOGl94rdeSy0%2FFm8e8HCGsUz81sL6gzlGv4oGy1WuCvsQrPn3kn0puZVZDIJbfaNxa4KY496EGq18niwR5cTmbxIRe9bL78%2Bt3pWLOmU%2FC3ukNJJS9QLCpM2sm4YgBdUPUGldI7pIbhuL27R9tV1GeAtTwgzMPMHs5oBHU%2BoqqDyg2x1egDYvnbi%2FNwpuMGbzKjwzi8orkpTVGtylqu0fX0goSWzfstTSMrB82C2xUA%2BfurQ3QtjVssZmXSodej5WBJFX9bFn48kDv%2FAvgJ3GkVeWFtZLpPdPDmZfLsTxMN27a38UjT%2Bzv%2FbRjvtyKvNCi4sFZ3vv3ijKZY%2FV8%2FRJzgLH2SwjbDCXlILBBjqkAU%2BVg72Jq11%2BGaTa%2F6rJGfyTDeGHPMcAp82PWUWZhDbmQaOMEgKs3CtNbP1EBqp83dhYvIUNntBGy0Q%2Fl6bhC0upN1NBo1ZzH9sCUR0FoGSXH%2BWwPK3fCGZ7WxvAlHzhdDJPvDjg%2BvCF262ddfc%2FHYD%2BNhkpD%2F9X5TXZ2hRUGLqGCJJjRPS1SXEO0Tze9haTpE%2FhMhdgqNecRxGM%2BjulhyqMetjD&X-Amz-Signature=42fb05a13d6b8f83598ae993a0e0fb986b7ec3d977ede88857e0f1005f5c854f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664364QMDK%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCTZad318PQaCsjuqQEQtAaX8F%2Bt%2BnyfLXqts8JTv9p9wIhAK%2BSrvtLugsTPr5KzALmn909Jao%2FVmJYs5zADdVNzqWyKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3lSe47bgYGhnq6nkq3APfUSxlW%2B87GH9aLvoiYL1oVpeSUE2zycZEjrjqXfAyjj5jpFSXLxW3WxCeDyE19lRXCt5GzNVgylcUV1TIjWQSaFIXaumQk5FLxJUFUIAp0617CoxprIHYVjgTuU0DtMuTDv35S7JN%2BvX4NWHUkV8N9DWqYcgIiRrBi4T0TJYBvkCPcrXfWh48cQ21nD2UPQz33szaGVJ6niwwQSDYxQaFj8VHgCph7yPqs6VJOSR8JlYPaDf6KQ%2BsDXDfY06ZTZ5YQEauzy%2Bnz7BuR5Tc98U3AbIB7bkeOGl94rdeSy0%2FFm8e8HCGsUz81sL6gzlGv4oGy1WuCvsQrPn3kn0puZVZDIJbfaNxa4KY496EGq18niwR5cTmbxIRe9bL78%2Bt3pWLOmU%2FC3ukNJJS9QLCpM2sm4YgBdUPUGldI7pIbhuL27R9tV1GeAtTwgzMPMHs5oBHU%2BoqqDyg2x1egDYvnbi%2FNwpuMGbzKjwzi8orkpTVGtylqu0fX0goSWzfstTSMrB82C2xUA%2BfurQ3QtjVssZmXSodej5WBJFX9bFn48kDv%2FAvgJ3GkVeWFtZLpPdPDmZfLsTxMN27a38UjT%2Bzv%2FbRjvtyKvNCi4sFZ3vv3ijKZY%2FV8%2FRJzgLH2SwjbDCXlILBBjqkAU%2BVg72Jq11%2BGaTa%2F6rJGfyTDeGHPMcAp82PWUWZhDbmQaOMEgKs3CtNbP1EBqp83dhYvIUNntBGy0Q%2Fl6bhC0upN1NBo1ZzH9sCUR0FoGSXH%2BWwPK3fCGZ7WxvAlHzhdDJPvDjg%2BvCF262ddfc%2FHYD%2BNhkpD%2F9X5TXZ2hRUGLqGCJJjRPS1SXEO0Tze9haTpE%2FhMhdgqNecRxGM%2BjulhyqMetjD&X-Amz-Signature=b5e32a9b259c76ba1909c8e421a7f8a6718718972f471d373d32bc2413e5bfba&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664364QMDK%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCTZad318PQaCsjuqQEQtAaX8F%2Bt%2BnyfLXqts8JTv9p9wIhAK%2BSrvtLugsTPr5KzALmn909Jao%2FVmJYs5zADdVNzqWyKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3lSe47bgYGhnq6nkq3APfUSxlW%2B87GH9aLvoiYL1oVpeSUE2zycZEjrjqXfAyjj5jpFSXLxW3WxCeDyE19lRXCt5GzNVgylcUV1TIjWQSaFIXaumQk5FLxJUFUIAp0617CoxprIHYVjgTuU0DtMuTDv35S7JN%2BvX4NWHUkV8N9DWqYcgIiRrBi4T0TJYBvkCPcrXfWh48cQ21nD2UPQz33szaGVJ6niwwQSDYxQaFj8VHgCph7yPqs6VJOSR8JlYPaDf6KQ%2BsDXDfY06ZTZ5YQEauzy%2Bnz7BuR5Tc98U3AbIB7bkeOGl94rdeSy0%2FFm8e8HCGsUz81sL6gzlGv4oGy1WuCvsQrPn3kn0puZVZDIJbfaNxa4KY496EGq18niwR5cTmbxIRe9bL78%2Bt3pWLOmU%2FC3ukNJJS9QLCpM2sm4YgBdUPUGldI7pIbhuL27R9tV1GeAtTwgzMPMHs5oBHU%2BoqqDyg2x1egDYvnbi%2FNwpuMGbzKjwzi8orkpTVGtylqu0fX0goSWzfstTSMrB82C2xUA%2BfurQ3QtjVssZmXSodej5WBJFX9bFn48kDv%2FAvgJ3GkVeWFtZLpPdPDmZfLsTxMN27a38UjT%2Bzv%2FbRjvtyKvNCi4sFZ3vv3ijKZY%2FV8%2FRJzgLH2SwjbDCXlILBBjqkAU%2BVg72Jq11%2BGaTa%2F6rJGfyTDeGHPMcAp82PWUWZhDbmQaOMEgKs3CtNbP1EBqp83dhYvIUNntBGy0Q%2Fl6bhC0upN1NBo1ZzH9sCUR0FoGSXH%2BWwPK3fCGZ7WxvAlHzhdDJPvDjg%2BvCF262ddfc%2FHYD%2BNhkpD%2F9X5TXZ2hRUGLqGCJJjRPS1SXEO0Tze9haTpE%2FhMhdgqNecRxGM%2BjulhyqMetjD&X-Amz-Signature=abef8f4422e1ab5abcfb5acf6ebd568b2692ee757b5265ebbfa8c0828c584e63&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664364QMDK%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCTZad318PQaCsjuqQEQtAaX8F%2Bt%2BnyfLXqts8JTv9p9wIhAK%2BSrvtLugsTPr5KzALmn909Jao%2FVmJYs5zADdVNzqWyKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3lSe47bgYGhnq6nkq3APfUSxlW%2B87GH9aLvoiYL1oVpeSUE2zycZEjrjqXfAyjj5jpFSXLxW3WxCeDyE19lRXCt5GzNVgylcUV1TIjWQSaFIXaumQk5FLxJUFUIAp0617CoxprIHYVjgTuU0DtMuTDv35S7JN%2BvX4NWHUkV8N9DWqYcgIiRrBi4T0TJYBvkCPcrXfWh48cQ21nD2UPQz33szaGVJ6niwwQSDYxQaFj8VHgCph7yPqs6VJOSR8JlYPaDf6KQ%2BsDXDfY06ZTZ5YQEauzy%2Bnz7BuR5Tc98U3AbIB7bkeOGl94rdeSy0%2FFm8e8HCGsUz81sL6gzlGv4oGy1WuCvsQrPn3kn0puZVZDIJbfaNxa4KY496EGq18niwR5cTmbxIRe9bL78%2Bt3pWLOmU%2FC3ukNJJS9QLCpM2sm4YgBdUPUGldI7pIbhuL27R9tV1GeAtTwgzMPMHs5oBHU%2BoqqDyg2x1egDYvnbi%2FNwpuMGbzKjwzi8orkpTVGtylqu0fX0goSWzfstTSMrB82C2xUA%2BfurQ3QtjVssZmXSodej5WBJFX9bFn48kDv%2FAvgJ3GkVeWFtZLpPdPDmZfLsTxMN27a38UjT%2Bzv%2FbRjvtyKvNCi4sFZ3vv3ijKZY%2FV8%2FRJzgLH2SwjbDCXlILBBjqkAU%2BVg72Jq11%2BGaTa%2F6rJGfyTDeGHPMcAp82PWUWZhDbmQaOMEgKs3CtNbP1EBqp83dhYvIUNntBGy0Q%2Fl6bhC0upN1NBo1ZzH9sCUR0FoGSXH%2BWwPK3fCGZ7WxvAlHzhdDJPvDjg%2BvCF262ddfc%2FHYD%2BNhkpD%2F9X5TXZ2hRUGLqGCJJjRPS1SXEO0Tze9haTpE%2FhMhdgqNecRxGM%2BjulhyqMetjD&X-Amz-Signature=d5a39512d57a719cc226a74c1c5d0eeb9ea5b5cca17431106b4de4c8f5fb6ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664364QMDK%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCTZad318PQaCsjuqQEQtAaX8F%2Bt%2BnyfLXqts8JTv9p9wIhAK%2BSrvtLugsTPr5KzALmn909Jao%2FVmJYs5zADdVNzqWyKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3lSe47bgYGhnq6nkq3APfUSxlW%2B87GH9aLvoiYL1oVpeSUE2zycZEjrjqXfAyjj5jpFSXLxW3WxCeDyE19lRXCt5GzNVgylcUV1TIjWQSaFIXaumQk5FLxJUFUIAp0617CoxprIHYVjgTuU0DtMuTDv35S7JN%2BvX4NWHUkV8N9DWqYcgIiRrBi4T0TJYBvkCPcrXfWh48cQ21nD2UPQz33szaGVJ6niwwQSDYxQaFj8VHgCph7yPqs6VJOSR8JlYPaDf6KQ%2BsDXDfY06ZTZ5YQEauzy%2Bnz7BuR5Tc98U3AbIB7bkeOGl94rdeSy0%2FFm8e8HCGsUz81sL6gzlGv4oGy1WuCvsQrPn3kn0puZVZDIJbfaNxa4KY496EGq18niwR5cTmbxIRe9bL78%2Bt3pWLOmU%2FC3ukNJJS9QLCpM2sm4YgBdUPUGldI7pIbhuL27R9tV1GeAtTwgzMPMHs5oBHU%2BoqqDyg2x1egDYvnbi%2FNwpuMGbzKjwzi8orkpTVGtylqu0fX0goSWzfstTSMrB82C2xUA%2BfurQ3QtjVssZmXSodej5WBJFX9bFn48kDv%2FAvgJ3GkVeWFtZLpPdPDmZfLsTxMN27a38UjT%2Bzv%2FbRjvtyKvNCi4sFZ3vv3ijKZY%2FV8%2FRJzgLH2SwjbDCXlILBBjqkAU%2BVg72Jq11%2BGaTa%2F6rJGfyTDeGHPMcAp82PWUWZhDbmQaOMEgKs3CtNbP1EBqp83dhYvIUNntBGy0Q%2Fl6bhC0upN1NBo1ZzH9sCUR0FoGSXH%2BWwPK3fCGZ7WxvAlHzhdDJPvDjg%2BvCF262ddfc%2FHYD%2BNhkpD%2F9X5TXZ2hRUGLqGCJJjRPS1SXEO0Tze9haTpE%2FhMhdgqNecRxGM%2BjulhyqMetjD&X-Amz-Signature=18a13e7af772a936d63c49843c8459cf77a58de5d85c903a8941589f0a07050f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664364QMDK%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCTZad318PQaCsjuqQEQtAaX8F%2Bt%2BnyfLXqts8JTv9p9wIhAK%2BSrvtLugsTPr5KzALmn909Jao%2FVmJYs5zADdVNzqWyKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3lSe47bgYGhnq6nkq3APfUSxlW%2B87GH9aLvoiYL1oVpeSUE2zycZEjrjqXfAyjj5jpFSXLxW3WxCeDyE19lRXCt5GzNVgylcUV1TIjWQSaFIXaumQk5FLxJUFUIAp0617CoxprIHYVjgTuU0DtMuTDv35S7JN%2BvX4NWHUkV8N9DWqYcgIiRrBi4T0TJYBvkCPcrXfWh48cQ21nD2UPQz33szaGVJ6niwwQSDYxQaFj8VHgCph7yPqs6VJOSR8JlYPaDf6KQ%2BsDXDfY06ZTZ5YQEauzy%2Bnz7BuR5Tc98U3AbIB7bkeOGl94rdeSy0%2FFm8e8HCGsUz81sL6gzlGv4oGy1WuCvsQrPn3kn0puZVZDIJbfaNxa4KY496EGq18niwR5cTmbxIRe9bL78%2Bt3pWLOmU%2FC3ukNJJS9QLCpM2sm4YgBdUPUGldI7pIbhuL27R9tV1GeAtTwgzMPMHs5oBHU%2BoqqDyg2x1egDYvnbi%2FNwpuMGbzKjwzi8orkpTVGtylqu0fX0goSWzfstTSMrB82C2xUA%2BfurQ3QtjVssZmXSodej5WBJFX9bFn48kDv%2FAvgJ3GkVeWFtZLpPdPDmZfLsTxMN27a38UjT%2Bzv%2FbRjvtyKvNCi4sFZ3vv3ijKZY%2FV8%2FRJzgLH2SwjbDCXlILBBjqkAU%2BVg72Jq11%2BGaTa%2F6rJGfyTDeGHPMcAp82PWUWZhDbmQaOMEgKs3CtNbP1EBqp83dhYvIUNntBGy0Q%2Fl6bhC0upN1NBo1ZzH9sCUR0FoGSXH%2BWwPK3fCGZ7WxvAlHzhdDJPvDjg%2BvCF262ddfc%2FHYD%2BNhkpD%2F9X5TXZ2hRUGLqGCJJjRPS1SXEO0Tze9haTpE%2FhMhdgqNecRxGM%2BjulhyqMetjD&X-Amz-Signature=7a405ede1367d028c08f39a799ef180178ebd399d08afbddc97c53f41a14ef6a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664364QMDK%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCTZad318PQaCsjuqQEQtAaX8F%2Bt%2BnyfLXqts8JTv9p9wIhAK%2BSrvtLugsTPr5KzALmn909Jao%2FVmJYs5zADdVNzqWyKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3lSe47bgYGhnq6nkq3APfUSxlW%2B87GH9aLvoiYL1oVpeSUE2zycZEjrjqXfAyjj5jpFSXLxW3WxCeDyE19lRXCt5GzNVgylcUV1TIjWQSaFIXaumQk5FLxJUFUIAp0617CoxprIHYVjgTuU0DtMuTDv35S7JN%2BvX4NWHUkV8N9DWqYcgIiRrBi4T0TJYBvkCPcrXfWh48cQ21nD2UPQz33szaGVJ6niwwQSDYxQaFj8VHgCph7yPqs6VJOSR8JlYPaDf6KQ%2BsDXDfY06ZTZ5YQEauzy%2Bnz7BuR5Tc98U3AbIB7bkeOGl94rdeSy0%2FFm8e8HCGsUz81sL6gzlGv4oGy1WuCvsQrPn3kn0puZVZDIJbfaNxa4KY496EGq18niwR5cTmbxIRe9bL78%2Bt3pWLOmU%2FC3ukNJJS9QLCpM2sm4YgBdUPUGldI7pIbhuL27R9tV1GeAtTwgzMPMHs5oBHU%2BoqqDyg2x1egDYvnbi%2FNwpuMGbzKjwzi8orkpTVGtylqu0fX0goSWzfstTSMrB82C2xUA%2BfurQ3QtjVssZmXSodej5WBJFX9bFn48kDv%2FAvgJ3GkVeWFtZLpPdPDmZfLsTxMN27a38UjT%2Bzv%2FbRjvtyKvNCi4sFZ3vv3ijKZY%2FV8%2FRJzgLH2SwjbDCXlILBBjqkAU%2BVg72Jq11%2BGaTa%2F6rJGfyTDeGHPMcAp82PWUWZhDbmQaOMEgKs3CtNbP1EBqp83dhYvIUNntBGy0Q%2Fl6bhC0upN1NBo1ZzH9sCUR0FoGSXH%2BWwPK3fCGZ7WxvAlHzhdDJPvDjg%2BvCF262ddfc%2FHYD%2BNhkpD%2F9X5TXZ2hRUGLqGCJJjRPS1SXEO0Tze9haTpE%2FhMhdgqNecRxGM%2BjulhyqMetjD&X-Amz-Signature=8afcc92c44a094bb0513361a901b9deae10b5156b54295b6dc23d89083d5ea29&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
