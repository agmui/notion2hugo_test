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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGXIGSEK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDfPRGIDCbpNAEuzzZICvmcassaHODKybLuhEO2uC9pOgIhAIH03khRJrsEgNxMRcbi7ejNmwy6L9y3NLbfKqe3boCnKv8DCDUQABoMNjM3NDIzMTgzODA1Igx7oTO1bkVShBMHl%2BEq3APPD10HKdHZGgGEvNLZQ1e6Rh56UcHaqQDn9hsS5cF3UEqrhI%2FWRqdfXb4J5dcvXLe6S8XmEbqqIrxJjOKnryhYDZU7sTlf9nDRgrumA052zBpKwGaJo08WtjFqXwcsy5DCm4R9b4s%2BrBbcCop9n0e8TCx1GDzraaWmgz6ZJVp82cY7inRzXcnJuzZWba5fMlOyJKEIaonErUope1lBQ0XMQDBYWZxC%2Bd6UENKVJyLCBz5fDd4lt3cVIMGLFSWMVFDkj5lmcwU%2BGONKe34dadyxv%2BACzCtV%2Fww0UfkJvFnY%2FUJbc13DIFPEzsaNzP79ZUuuQxwq8v6W4QdZWgQaOyyhVvhGwp3cnI3n79k3zxFF6jC82%2FHZNQz4jypW5HuckxtU6PPwcWS6hP5y5PfF2tbMtXDwHtqBl59oTfoI0g5A5EakmXx47ATd%2Fw4NuCKx5GzmdSzTf7eTCZb1AwfyoWoQ93w%2FqDEpS5tcLUsIecQia57OT5UmcpxaJSiZXVqn%2BOgFYC9wF5zmTK6fj%2FmczXcvctCgzxwPusrxt9FihF3gqdt38M40kW%2FqLb5jvVvChV%2FRukTaQckfJP8hTjDHMELpOmEo1Iz4hpF1cckM%2B7W4%2B90Yvv%2FVgftDGz3NcjCY6KDDBjqkAWLhQ%2FDbW1SPUQoC3U2bz1EYzeiW7gIKfdNffy2kL9bSoO5EowJUS4jBOe4PSZL7MKaWBBEo2CMASMCRKivVUhxdJUUMlDbaj2aGl1eglCbpD24iwy8%2FeyQ8r0RbZMH5byd0AE%2FwlAnReMPEZlEynKA69J0OVQSTNX2KEe8MlhfnSwBRp7KqwO3Rpd6DhQtdgc%2FUF880cBiqQ9IcuJF7JeX5b645&X-Amz-Signature=bc6a50c3d2ebb35536253749d8dfbe5ce29d468563cbc298e2a5382dacce2798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGXIGSEK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDfPRGIDCbpNAEuzzZICvmcassaHODKybLuhEO2uC9pOgIhAIH03khRJrsEgNxMRcbi7ejNmwy6L9y3NLbfKqe3boCnKv8DCDUQABoMNjM3NDIzMTgzODA1Igx7oTO1bkVShBMHl%2BEq3APPD10HKdHZGgGEvNLZQ1e6Rh56UcHaqQDn9hsS5cF3UEqrhI%2FWRqdfXb4J5dcvXLe6S8XmEbqqIrxJjOKnryhYDZU7sTlf9nDRgrumA052zBpKwGaJo08WtjFqXwcsy5DCm4R9b4s%2BrBbcCop9n0e8TCx1GDzraaWmgz6ZJVp82cY7inRzXcnJuzZWba5fMlOyJKEIaonErUope1lBQ0XMQDBYWZxC%2Bd6UENKVJyLCBz5fDd4lt3cVIMGLFSWMVFDkj5lmcwU%2BGONKe34dadyxv%2BACzCtV%2Fww0UfkJvFnY%2FUJbc13DIFPEzsaNzP79ZUuuQxwq8v6W4QdZWgQaOyyhVvhGwp3cnI3n79k3zxFF6jC82%2FHZNQz4jypW5HuckxtU6PPwcWS6hP5y5PfF2tbMtXDwHtqBl59oTfoI0g5A5EakmXx47ATd%2Fw4NuCKx5GzmdSzTf7eTCZb1AwfyoWoQ93w%2FqDEpS5tcLUsIecQia57OT5UmcpxaJSiZXVqn%2BOgFYC9wF5zmTK6fj%2FmczXcvctCgzxwPusrxt9FihF3gqdt38M40kW%2FqLb5jvVvChV%2FRukTaQckfJP8hTjDHMELpOmEo1Iz4hpF1cckM%2B7W4%2B90Yvv%2FVgftDGz3NcjCY6KDDBjqkAWLhQ%2FDbW1SPUQoC3U2bz1EYzeiW7gIKfdNffy2kL9bSoO5EowJUS4jBOe4PSZL7MKaWBBEo2CMASMCRKivVUhxdJUUMlDbaj2aGl1eglCbpD24iwy8%2FeyQ8r0RbZMH5byd0AE%2FwlAnReMPEZlEynKA69J0OVQSTNX2KEe8MlhfnSwBRp7KqwO3Rpd6DhQtdgc%2FUF880cBiqQ9IcuJF7JeX5b645&X-Amz-Signature=ac812aefe75ba1120687000780282a96a423e5b923eec920e4c007201da735bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGXIGSEK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDfPRGIDCbpNAEuzzZICvmcassaHODKybLuhEO2uC9pOgIhAIH03khRJrsEgNxMRcbi7ejNmwy6L9y3NLbfKqe3boCnKv8DCDUQABoMNjM3NDIzMTgzODA1Igx7oTO1bkVShBMHl%2BEq3APPD10HKdHZGgGEvNLZQ1e6Rh56UcHaqQDn9hsS5cF3UEqrhI%2FWRqdfXb4J5dcvXLe6S8XmEbqqIrxJjOKnryhYDZU7sTlf9nDRgrumA052zBpKwGaJo08WtjFqXwcsy5DCm4R9b4s%2BrBbcCop9n0e8TCx1GDzraaWmgz6ZJVp82cY7inRzXcnJuzZWba5fMlOyJKEIaonErUope1lBQ0XMQDBYWZxC%2Bd6UENKVJyLCBz5fDd4lt3cVIMGLFSWMVFDkj5lmcwU%2BGONKe34dadyxv%2BACzCtV%2Fww0UfkJvFnY%2FUJbc13DIFPEzsaNzP79ZUuuQxwq8v6W4QdZWgQaOyyhVvhGwp3cnI3n79k3zxFF6jC82%2FHZNQz4jypW5HuckxtU6PPwcWS6hP5y5PfF2tbMtXDwHtqBl59oTfoI0g5A5EakmXx47ATd%2Fw4NuCKx5GzmdSzTf7eTCZb1AwfyoWoQ93w%2FqDEpS5tcLUsIecQia57OT5UmcpxaJSiZXVqn%2BOgFYC9wF5zmTK6fj%2FmczXcvctCgzxwPusrxt9FihF3gqdt38M40kW%2FqLb5jvVvChV%2FRukTaQckfJP8hTjDHMELpOmEo1Iz4hpF1cckM%2B7W4%2B90Yvv%2FVgftDGz3NcjCY6KDDBjqkAWLhQ%2FDbW1SPUQoC3U2bz1EYzeiW7gIKfdNffy2kL9bSoO5EowJUS4jBOe4PSZL7MKaWBBEo2CMASMCRKivVUhxdJUUMlDbaj2aGl1eglCbpD24iwy8%2FeyQ8r0RbZMH5byd0AE%2FwlAnReMPEZlEynKA69J0OVQSTNX2KEe8MlhfnSwBRp7KqwO3Rpd6DhQtdgc%2FUF880cBiqQ9IcuJF7JeX5b645&X-Amz-Signature=2d10fd97d6fb46a8a3ca2f978269978d4f5779e3ad107a2c4c3c05c804328d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGXIGSEK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDfPRGIDCbpNAEuzzZICvmcassaHODKybLuhEO2uC9pOgIhAIH03khRJrsEgNxMRcbi7ejNmwy6L9y3NLbfKqe3boCnKv8DCDUQABoMNjM3NDIzMTgzODA1Igx7oTO1bkVShBMHl%2BEq3APPD10HKdHZGgGEvNLZQ1e6Rh56UcHaqQDn9hsS5cF3UEqrhI%2FWRqdfXb4J5dcvXLe6S8XmEbqqIrxJjOKnryhYDZU7sTlf9nDRgrumA052zBpKwGaJo08WtjFqXwcsy5DCm4R9b4s%2BrBbcCop9n0e8TCx1GDzraaWmgz6ZJVp82cY7inRzXcnJuzZWba5fMlOyJKEIaonErUope1lBQ0XMQDBYWZxC%2Bd6UENKVJyLCBz5fDd4lt3cVIMGLFSWMVFDkj5lmcwU%2BGONKe34dadyxv%2BACzCtV%2Fww0UfkJvFnY%2FUJbc13DIFPEzsaNzP79ZUuuQxwq8v6W4QdZWgQaOyyhVvhGwp3cnI3n79k3zxFF6jC82%2FHZNQz4jypW5HuckxtU6PPwcWS6hP5y5PfF2tbMtXDwHtqBl59oTfoI0g5A5EakmXx47ATd%2Fw4NuCKx5GzmdSzTf7eTCZb1AwfyoWoQ93w%2FqDEpS5tcLUsIecQia57OT5UmcpxaJSiZXVqn%2BOgFYC9wF5zmTK6fj%2FmczXcvctCgzxwPusrxt9FihF3gqdt38M40kW%2FqLb5jvVvChV%2FRukTaQckfJP8hTjDHMELpOmEo1Iz4hpF1cckM%2B7W4%2B90Yvv%2FVgftDGz3NcjCY6KDDBjqkAWLhQ%2FDbW1SPUQoC3U2bz1EYzeiW7gIKfdNffy2kL9bSoO5EowJUS4jBOe4PSZL7MKaWBBEo2CMASMCRKivVUhxdJUUMlDbaj2aGl1eglCbpD24iwy8%2FeyQ8r0RbZMH5byd0AE%2FwlAnReMPEZlEynKA69J0OVQSTNX2KEe8MlhfnSwBRp7KqwO3Rpd6DhQtdgc%2FUF880cBiqQ9IcuJF7JeX5b645&X-Amz-Signature=2325d357d41a855f4deb6c1e8f03cefbe12aa8680444d0c62224ac58104c9aea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGXIGSEK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDfPRGIDCbpNAEuzzZICvmcassaHODKybLuhEO2uC9pOgIhAIH03khRJrsEgNxMRcbi7ejNmwy6L9y3NLbfKqe3boCnKv8DCDUQABoMNjM3NDIzMTgzODA1Igx7oTO1bkVShBMHl%2BEq3APPD10HKdHZGgGEvNLZQ1e6Rh56UcHaqQDn9hsS5cF3UEqrhI%2FWRqdfXb4J5dcvXLe6S8XmEbqqIrxJjOKnryhYDZU7sTlf9nDRgrumA052zBpKwGaJo08WtjFqXwcsy5DCm4R9b4s%2BrBbcCop9n0e8TCx1GDzraaWmgz6ZJVp82cY7inRzXcnJuzZWba5fMlOyJKEIaonErUope1lBQ0XMQDBYWZxC%2Bd6UENKVJyLCBz5fDd4lt3cVIMGLFSWMVFDkj5lmcwU%2BGONKe34dadyxv%2BACzCtV%2Fww0UfkJvFnY%2FUJbc13DIFPEzsaNzP79ZUuuQxwq8v6W4QdZWgQaOyyhVvhGwp3cnI3n79k3zxFF6jC82%2FHZNQz4jypW5HuckxtU6PPwcWS6hP5y5PfF2tbMtXDwHtqBl59oTfoI0g5A5EakmXx47ATd%2Fw4NuCKx5GzmdSzTf7eTCZb1AwfyoWoQ93w%2FqDEpS5tcLUsIecQia57OT5UmcpxaJSiZXVqn%2BOgFYC9wF5zmTK6fj%2FmczXcvctCgzxwPusrxt9FihF3gqdt38M40kW%2FqLb5jvVvChV%2FRukTaQckfJP8hTjDHMELpOmEo1Iz4hpF1cckM%2B7W4%2B90Yvv%2FVgftDGz3NcjCY6KDDBjqkAWLhQ%2FDbW1SPUQoC3U2bz1EYzeiW7gIKfdNffy2kL9bSoO5EowJUS4jBOe4PSZL7MKaWBBEo2CMASMCRKivVUhxdJUUMlDbaj2aGl1eglCbpD24iwy8%2FeyQ8r0RbZMH5byd0AE%2FwlAnReMPEZlEynKA69J0OVQSTNX2KEe8MlhfnSwBRp7KqwO3Rpd6DhQtdgc%2FUF880cBiqQ9IcuJF7JeX5b645&X-Amz-Signature=f92578498d3e330ff75dff55e92e6104d1aa03b14f4b1e1ea2a713189f943a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGXIGSEK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDfPRGIDCbpNAEuzzZICvmcassaHODKybLuhEO2uC9pOgIhAIH03khRJrsEgNxMRcbi7ejNmwy6L9y3NLbfKqe3boCnKv8DCDUQABoMNjM3NDIzMTgzODA1Igx7oTO1bkVShBMHl%2BEq3APPD10HKdHZGgGEvNLZQ1e6Rh56UcHaqQDn9hsS5cF3UEqrhI%2FWRqdfXb4J5dcvXLe6S8XmEbqqIrxJjOKnryhYDZU7sTlf9nDRgrumA052zBpKwGaJo08WtjFqXwcsy5DCm4R9b4s%2BrBbcCop9n0e8TCx1GDzraaWmgz6ZJVp82cY7inRzXcnJuzZWba5fMlOyJKEIaonErUope1lBQ0XMQDBYWZxC%2Bd6UENKVJyLCBz5fDd4lt3cVIMGLFSWMVFDkj5lmcwU%2BGONKe34dadyxv%2BACzCtV%2Fww0UfkJvFnY%2FUJbc13DIFPEzsaNzP79ZUuuQxwq8v6W4QdZWgQaOyyhVvhGwp3cnI3n79k3zxFF6jC82%2FHZNQz4jypW5HuckxtU6PPwcWS6hP5y5PfF2tbMtXDwHtqBl59oTfoI0g5A5EakmXx47ATd%2Fw4NuCKx5GzmdSzTf7eTCZb1AwfyoWoQ93w%2FqDEpS5tcLUsIecQia57OT5UmcpxaJSiZXVqn%2BOgFYC9wF5zmTK6fj%2FmczXcvctCgzxwPusrxt9FihF3gqdt38M40kW%2FqLb5jvVvChV%2FRukTaQckfJP8hTjDHMELpOmEo1Iz4hpF1cckM%2B7W4%2B90Yvv%2FVgftDGz3NcjCY6KDDBjqkAWLhQ%2FDbW1SPUQoC3U2bz1EYzeiW7gIKfdNffy2kL9bSoO5EowJUS4jBOe4PSZL7MKaWBBEo2CMASMCRKivVUhxdJUUMlDbaj2aGl1eglCbpD24iwy8%2FeyQ8r0RbZMH5byd0AE%2FwlAnReMPEZlEynKA69J0OVQSTNX2KEe8MlhfnSwBRp7KqwO3Rpd6DhQtdgc%2FUF880cBiqQ9IcuJF7JeX5b645&X-Amz-Signature=7e5fb5e346d52a60588d3ec799780bfec0393bdb3039095d2f838a1883b78da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGXIGSEK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDfPRGIDCbpNAEuzzZICvmcassaHODKybLuhEO2uC9pOgIhAIH03khRJrsEgNxMRcbi7ejNmwy6L9y3NLbfKqe3boCnKv8DCDUQABoMNjM3NDIzMTgzODA1Igx7oTO1bkVShBMHl%2BEq3APPD10HKdHZGgGEvNLZQ1e6Rh56UcHaqQDn9hsS5cF3UEqrhI%2FWRqdfXb4J5dcvXLe6S8XmEbqqIrxJjOKnryhYDZU7sTlf9nDRgrumA052zBpKwGaJo08WtjFqXwcsy5DCm4R9b4s%2BrBbcCop9n0e8TCx1GDzraaWmgz6ZJVp82cY7inRzXcnJuzZWba5fMlOyJKEIaonErUope1lBQ0XMQDBYWZxC%2Bd6UENKVJyLCBz5fDd4lt3cVIMGLFSWMVFDkj5lmcwU%2BGONKe34dadyxv%2BACzCtV%2Fww0UfkJvFnY%2FUJbc13DIFPEzsaNzP79ZUuuQxwq8v6W4QdZWgQaOyyhVvhGwp3cnI3n79k3zxFF6jC82%2FHZNQz4jypW5HuckxtU6PPwcWS6hP5y5PfF2tbMtXDwHtqBl59oTfoI0g5A5EakmXx47ATd%2Fw4NuCKx5GzmdSzTf7eTCZb1AwfyoWoQ93w%2FqDEpS5tcLUsIecQia57OT5UmcpxaJSiZXVqn%2BOgFYC9wF5zmTK6fj%2FmczXcvctCgzxwPusrxt9FihF3gqdt38M40kW%2FqLb5jvVvChV%2FRukTaQckfJP8hTjDHMELpOmEo1Iz4hpF1cckM%2B7W4%2B90Yvv%2FVgftDGz3NcjCY6KDDBjqkAWLhQ%2FDbW1SPUQoC3U2bz1EYzeiW7gIKfdNffy2kL9bSoO5EowJUS4jBOe4PSZL7MKaWBBEo2CMASMCRKivVUhxdJUUMlDbaj2aGl1eglCbpD24iwy8%2FeyQ8r0RbZMH5byd0AE%2FwlAnReMPEZlEynKA69J0OVQSTNX2KEe8MlhfnSwBRp7KqwO3Rpd6DhQtdgc%2FUF880cBiqQ9IcuJF7JeX5b645&X-Amz-Signature=959f61fd5f954ab24dd9074458de34a60707935f14fb06341e4f4839825b04fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
