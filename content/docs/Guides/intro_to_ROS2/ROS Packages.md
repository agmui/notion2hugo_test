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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEUXDHYO%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg%2FwXN1d49yRTy%2Bx945zhYktkJuzbvmfMMFjly8fDLVAiEAkRXlf5ys1EhUy58ylij3gP03iYdy3f430xE%2B4VV6YEQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKCXOiVOB7Djw0zOEyrcA4Tcst888euIkhDpzsoMOX35bUfT%2BOYmqnNjpTgeO6%2FBkIr2YiqDIgPsGzUFjPoRM%2BAsYOg67mcc9oARjuOLYdS0RoxQnhNwkLyYWQZSoi8%2FP3xH8qi5lhDOHxHbBWDHseG9jGZb5q8cUGreEq9JYXyGmeE2C%2Bn0eiMahlu2KuAwiHDxwvB05rs5kNKLv1ZgO41k5I7jctUlGPCfAt7jgNsc6DBUI3nX%2BdVICz1TMC8lOzMj55WItNufUubBOjCQQwa6l%2Ft0e%2F0sL3C9yOwjYdFfUwfkF5i1yo61sXWfx3UUrGHlnbvfXVxzpqxdRtv3KLAFo9eMHivS6tQxyX36bEqKfrzbPCW1gFz%2FlDut6ietpHhPGqkedHqjEnHWWoulp71SAkjXHYyAfZJEmo5rT5tP67G%2FU28tFF9kqfeWC9iftTxh22MiY2kT7swFXeXa8d8fNUCcqNXe3bhLzLt7D9COpDkcwEBBaDvdIghuHmkFU%2FH3ssoTmp1bXvLvobJ59%2Ff568gxsDEaj372%2BDhpc%2BfvMMFAxYlnejim1nUn5hYglYvHmw8YXMLXJwc0XUeBbCuHQn3qY7Yg9OV0cvtqa%2BT1Nj1t5uUrfD%2BEpqmMBu3VpNg5HUyTL2YxdBAoMMb6gcAGOqUB1IhWCt55MxddNMFQzR%2FMeUfeHJRLXPZ9o9GI%2FmbCf79hn4RINQKPKB34Djjtf5B119Ti%2Bqs5VCoPQ872DGbvv7Us7d2tkvRmihFwvoQgXhDG8dkt%2FI1YKH3OYDb0e0QZw7%2Bsg9HYGNx2HO2FsvTN3R4umEcirbtOvmzIDmFMCpaylZMP5zjK1hXRLz6CSbY6%2FKO2FOf2siPD0%2FlC6Nq5%2FdE6hWOf&X-Amz-Signature=70b5e56b614d9f1f143ceaf10428de6203628b624223fabe54dc1d9dc4aefd50&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEUXDHYO%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg%2FwXN1d49yRTy%2Bx945zhYktkJuzbvmfMMFjly8fDLVAiEAkRXlf5ys1EhUy58ylij3gP03iYdy3f430xE%2B4VV6YEQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKCXOiVOB7Djw0zOEyrcA4Tcst888euIkhDpzsoMOX35bUfT%2BOYmqnNjpTgeO6%2FBkIr2YiqDIgPsGzUFjPoRM%2BAsYOg67mcc9oARjuOLYdS0RoxQnhNwkLyYWQZSoi8%2FP3xH8qi5lhDOHxHbBWDHseG9jGZb5q8cUGreEq9JYXyGmeE2C%2Bn0eiMahlu2KuAwiHDxwvB05rs5kNKLv1ZgO41k5I7jctUlGPCfAt7jgNsc6DBUI3nX%2BdVICz1TMC8lOzMj55WItNufUubBOjCQQwa6l%2Ft0e%2F0sL3C9yOwjYdFfUwfkF5i1yo61sXWfx3UUrGHlnbvfXVxzpqxdRtv3KLAFo9eMHivS6tQxyX36bEqKfrzbPCW1gFz%2FlDut6ietpHhPGqkedHqjEnHWWoulp71SAkjXHYyAfZJEmo5rT5tP67G%2FU28tFF9kqfeWC9iftTxh22MiY2kT7swFXeXa8d8fNUCcqNXe3bhLzLt7D9COpDkcwEBBaDvdIghuHmkFU%2FH3ssoTmp1bXvLvobJ59%2Ff568gxsDEaj372%2BDhpc%2BfvMMFAxYlnejim1nUn5hYglYvHmw8YXMLXJwc0XUeBbCuHQn3qY7Yg9OV0cvtqa%2BT1Nj1t5uUrfD%2BEpqmMBu3VpNg5HUyTL2YxdBAoMMb6gcAGOqUB1IhWCt55MxddNMFQzR%2FMeUfeHJRLXPZ9o9GI%2FmbCf79hn4RINQKPKB34Djjtf5B119Ti%2Bqs5VCoPQ872DGbvv7Us7d2tkvRmihFwvoQgXhDG8dkt%2FI1YKH3OYDb0e0QZw7%2Bsg9HYGNx2HO2FsvTN3R4umEcirbtOvmzIDmFMCpaylZMP5zjK1hXRLz6CSbY6%2FKO2FOf2siPD0%2FlC6Nq5%2FdE6hWOf&X-Amz-Signature=47c0f51cd7a9f1a64de83e1e89a0556e425bd0196c8d4386d1b877ddb3f7ec89&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEUXDHYO%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg%2FwXN1d49yRTy%2Bx945zhYktkJuzbvmfMMFjly8fDLVAiEAkRXlf5ys1EhUy58ylij3gP03iYdy3f430xE%2B4VV6YEQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKCXOiVOB7Djw0zOEyrcA4Tcst888euIkhDpzsoMOX35bUfT%2BOYmqnNjpTgeO6%2FBkIr2YiqDIgPsGzUFjPoRM%2BAsYOg67mcc9oARjuOLYdS0RoxQnhNwkLyYWQZSoi8%2FP3xH8qi5lhDOHxHbBWDHseG9jGZb5q8cUGreEq9JYXyGmeE2C%2Bn0eiMahlu2KuAwiHDxwvB05rs5kNKLv1ZgO41k5I7jctUlGPCfAt7jgNsc6DBUI3nX%2BdVICz1TMC8lOzMj55WItNufUubBOjCQQwa6l%2Ft0e%2F0sL3C9yOwjYdFfUwfkF5i1yo61sXWfx3UUrGHlnbvfXVxzpqxdRtv3KLAFo9eMHivS6tQxyX36bEqKfrzbPCW1gFz%2FlDut6ietpHhPGqkedHqjEnHWWoulp71SAkjXHYyAfZJEmo5rT5tP67G%2FU28tFF9kqfeWC9iftTxh22MiY2kT7swFXeXa8d8fNUCcqNXe3bhLzLt7D9COpDkcwEBBaDvdIghuHmkFU%2FH3ssoTmp1bXvLvobJ59%2Ff568gxsDEaj372%2BDhpc%2BfvMMFAxYlnejim1nUn5hYglYvHmw8YXMLXJwc0XUeBbCuHQn3qY7Yg9OV0cvtqa%2BT1Nj1t5uUrfD%2BEpqmMBu3VpNg5HUyTL2YxdBAoMMb6gcAGOqUB1IhWCt55MxddNMFQzR%2FMeUfeHJRLXPZ9o9GI%2FmbCf79hn4RINQKPKB34Djjtf5B119Ti%2Bqs5VCoPQ872DGbvv7Us7d2tkvRmihFwvoQgXhDG8dkt%2FI1YKH3OYDb0e0QZw7%2Bsg9HYGNx2HO2FsvTN3R4umEcirbtOvmzIDmFMCpaylZMP5zjK1hXRLz6CSbY6%2FKO2FOf2siPD0%2FlC6Nq5%2FdE6hWOf&X-Amz-Signature=fa1af48bd0de48592e967f5ed2c2dfc4028c472d21015ee306ad1b491e19e5e5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEUXDHYO%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg%2FwXN1d49yRTy%2Bx945zhYktkJuzbvmfMMFjly8fDLVAiEAkRXlf5ys1EhUy58ylij3gP03iYdy3f430xE%2B4VV6YEQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKCXOiVOB7Djw0zOEyrcA4Tcst888euIkhDpzsoMOX35bUfT%2BOYmqnNjpTgeO6%2FBkIr2YiqDIgPsGzUFjPoRM%2BAsYOg67mcc9oARjuOLYdS0RoxQnhNwkLyYWQZSoi8%2FP3xH8qi5lhDOHxHbBWDHseG9jGZb5q8cUGreEq9JYXyGmeE2C%2Bn0eiMahlu2KuAwiHDxwvB05rs5kNKLv1ZgO41k5I7jctUlGPCfAt7jgNsc6DBUI3nX%2BdVICz1TMC8lOzMj55WItNufUubBOjCQQwa6l%2Ft0e%2F0sL3C9yOwjYdFfUwfkF5i1yo61sXWfx3UUrGHlnbvfXVxzpqxdRtv3KLAFo9eMHivS6tQxyX36bEqKfrzbPCW1gFz%2FlDut6ietpHhPGqkedHqjEnHWWoulp71SAkjXHYyAfZJEmo5rT5tP67G%2FU28tFF9kqfeWC9iftTxh22MiY2kT7swFXeXa8d8fNUCcqNXe3bhLzLt7D9COpDkcwEBBaDvdIghuHmkFU%2FH3ssoTmp1bXvLvobJ59%2Ff568gxsDEaj372%2BDhpc%2BfvMMFAxYlnejim1nUn5hYglYvHmw8YXMLXJwc0XUeBbCuHQn3qY7Yg9OV0cvtqa%2BT1Nj1t5uUrfD%2BEpqmMBu3VpNg5HUyTL2YxdBAoMMb6gcAGOqUB1IhWCt55MxddNMFQzR%2FMeUfeHJRLXPZ9o9GI%2FmbCf79hn4RINQKPKB34Djjtf5B119Ti%2Bqs5VCoPQ872DGbvv7Us7d2tkvRmihFwvoQgXhDG8dkt%2FI1YKH3OYDb0e0QZw7%2Bsg9HYGNx2HO2FsvTN3R4umEcirbtOvmzIDmFMCpaylZMP5zjK1hXRLz6CSbY6%2FKO2FOf2siPD0%2FlC6Nq5%2FdE6hWOf&X-Amz-Signature=27e06dede95b9bdda6726a14e10a009325228556f6ba0fae745d744c731eb68c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEUXDHYO%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg%2FwXN1d49yRTy%2Bx945zhYktkJuzbvmfMMFjly8fDLVAiEAkRXlf5ys1EhUy58ylij3gP03iYdy3f430xE%2B4VV6YEQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKCXOiVOB7Djw0zOEyrcA4Tcst888euIkhDpzsoMOX35bUfT%2BOYmqnNjpTgeO6%2FBkIr2YiqDIgPsGzUFjPoRM%2BAsYOg67mcc9oARjuOLYdS0RoxQnhNwkLyYWQZSoi8%2FP3xH8qi5lhDOHxHbBWDHseG9jGZb5q8cUGreEq9JYXyGmeE2C%2Bn0eiMahlu2KuAwiHDxwvB05rs5kNKLv1ZgO41k5I7jctUlGPCfAt7jgNsc6DBUI3nX%2BdVICz1TMC8lOzMj55WItNufUubBOjCQQwa6l%2Ft0e%2F0sL3C9yOwjYdFfUwfkF5i1yo61sXWfx3UUrGHlnbvfXVxzpqxdRtv3KLAFo9eMHivS6tQxyX36bEqKfrzbPCW1gFz%2FlDut6ietpHhPGqkedHqjEnHWWoulp71SAkjXHYyAfZJEmo5rT5tP67G%2FU28tFF9kqfeWC9iftTxh22MiY2kT7swFXeXa8d8fNUCcqNXe3bhLzLt7D9COpDkcwEBBaDvdIghuHmkFU%2FH3ssoTmp1bXvLvobJ59%2Ff568gxsDEaj372%2BDhpc%2BfvMMFAxYlnejim1nUn5hYglYvHmw8YXMLXJwc0XUeBbCuHQn3qY7Yg9OV0cvtqa%2BT1Nj1t5uUrfD%2BEpqmMBu3VpNg5HUyTL2YxdBAoMMb6gcAGOqUB1IhWCt55MxddNMFQzR%2FMeUfeHJRLXPZ9o9GI%2FmbCf79hn4RINQKPKB34Djjtf5B119Ti%2Bqs5VCoPQ872DGbvv7Us7d2tkvRmihFwvoQgXhDG8dkt%2FI1YKH3OYDb0e0QZw7%2Bsg9HYGNx2HO2FsvTN3R4umEcirbtOvmzIDmFMCpaylZMP5zjK1hXRLz6CSbY6%2FKO2FOf2siPD0%2FlC6Nq5%2FdE6hWOf&X-Amz-Signature=2b915d0464c1078a4c0bd88af6e0294b4dc4d5e10914d2810600961a17d3b44e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEUXDHYO%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg%2FwXN1d49yRTy%2Bx945zhYktkJuzbvmfMMFjly8fDLVAiEAkRXlf5ys1EhUy58ylij3gP03iYdy3f430xE%2B4VV6YEQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKCXOiVOB7Djw0zOEyrcA4Tcst888euIkhDpzsoMOX35bUfT%2BOYmqnNjpTgeO6%2FBkIr2YiqDIgPsGzUFjPoRM%2BAsYOg67mcc9oARjuOLYdS0RoxQnhNwkLyYWQZSoi8%2FP3xH8qi5lhDOHxHbBWDHseG9jGZb5q8cUGreEq9JYXyGmeE2C%2Bn0eiMahlu2KuAwiHDxwvB05rs5kNKLv1ZgO41k5I7jctUlGPCfAt7jgNsc6DBUI3nX%2BdVICz1TMC8lOzMj55WItNufUubBOjCQQwa6l%2Ft0e%2F0sL3C9yOwjYdFfUwfkF5i1yo61sXWfx3UUrGHlnbvfXVxzpqxdRtv3KLAFo9eMHivS6tQxyX36bEqKfrzbPCW1gFz%2FlDut6ietpHhPGqkedHqjEnHWWoulp71SAkjXHYyAfZJEmo5rT5tP67G%2FU28tFF9kqfeWC9iftTxh22MiY2kT7swFXeXa8d8fNUCcqNXe3bhLzLt7D9COpDkcwEBBaDvdIghuHmkFU%2FH3ssoTmp1bXvLvobJ59%2Ff568gxsDEaj372%2BDhpc%2BfvMMFAxYlnejim1nUn5hYglYvHmw8YXMLXJwc0XUeBbCuHQn3qY7Yg9OV0cvtqa%2BT1Nj1t5uUrfD%2BEpqmMBu3VpNg5HUyTL2YxdBAoMMb6gcAGOqUB1IhWCt55MxddNMFQzR%2FMeUfeHJRLXPZ9o9GI%2FmbCf79hn4RINQKPKB34Djjtf5B119Ti%2Bqs5VCoPQ872DGbvv7Us7d2tkvRmihFwvoQgXhDG8dkt%2FI1YKH3OYDb0e0QZw7%2Bsg9HYGNx2HO2FsvTN3R4umEcirbtOvmzIDmFMCpaylZMP5zjK1hXRLz6CSbY6%2FKO2FOf2siPD0%2FlC6Nq5%2FdE6hWOf&X-Amz-Signature=65c9eb7baa6f2353ccfda0487799c514aa202442517805d702c6c31a6254a87a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEUXDHYO%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg%2FwXN1d49yRTy%2Bx945zhYktkJuzbvmfMMFjly8fDLVAiEAkRXlf5ys1EhUy58ylij3gP03iYdy3f430xE%2B4VV6YEQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKCXOiVOB7Djw0zOEyrcA4Tcst888euIkhDpzsoMOX35bUfT%2BOYmqnNjpTgeO6%2FBkIr2YiqDIgPsGzUFjPoRM%2BAsYOg67mcc9oARjuOLYdS0RoxQnhNwkLyYWQZSoi8%2FP3xH8qi5lhDOHxHbBWDHseG9jGZb5q8cUGreEq9JYXyGmeE2C%2Bn0eiMahlu2KuAwiHDxwvB05rs5kNKLv1ZgO41k5I7jctUlGPCfAt7jgNsc6DBUI3nX%2BdVICz1TMC8lOzMj55WItNufUubBOjCQQwa6l%2Ft0e%2F0sL3C9yOwjYdFfUwfkF5i1yo61sXWfx3UUrGHlnbvfXVxzpqxdRtv3KLAFo9eMHivS6tQxyX36bEqKfrzbPCW1gFz%2FlDut6ietpHhPGqkedHqjEnHWWoulp71SAkjXHYyAfZJEmo5rT5tP67G%2FU28tFF9kqfeWC9iftTxh22MiY2kT7swFXeXa8d8fNUCcqNXe3bhLzLt7D9COpDkcwEBBaDvdIghuHmkFU%2FH3ssoTmp1bXvLvobJ59%2Ff568gxsDEaj372%2BDhpc%2BfvMMFAxYlnejim1nUn5hYglYvHmw8YXMLXJwc0XUeBbCuHQn3qY7Yg9OV0cvtqa%2BT1Nj1t5uUrfD%2BEpqmMBu3VpNg5HUyTL2YxdBAoMMb6gcAGOqUB1IhWCt55MxddNMFQzR%2FMeUfeHJRLXPZ9o9GI%2FmbCf79hn4RINQKPKB34Djjtf5B119Ti%2Bqs5VCoPQ872DGbvv7Us7d2tkvRmihFwvoQgXhDG8dkt%2FI1YKH3OYDb0e0QZw7%2Bsg9HYGNx2HO2FsvTN3R4umEcirbtOvmzIDmFMCpaylZMP5zjK1hXRLz6CSbY6%2FKO2FOf2siPD0%2FlC6Nq5%2FdE6hWOf&X-Amz-Signature=ee9b0a6a1d0fd52833eb0916ed057606efba508b6343c06f83e6151f1567a6fe&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
