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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM3GBZC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1OACP99XGeo0FL80pre13T9V7W6VSmmpQllLc7cnZXAiEApfvHLqMXaD5ZeW7X8RBDSHpdcy0i4Ek5VDxqceZfWkgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDD5y%2BYvEUhk5oxt%2FPCrcAyPS2iSzvE1IzArBhjEQacGKMul3DpS%2Bj%2BENKw05umE71mapNknHPchpigiCOVQ52sNwEM0ewoaoBX05F%2BBgPgY7mUEpz4DKCLbLRteePyZKZ01bldQrpuveeHAPOpd1epMRkm9i9hOozjgVaREm%2BFFCVkmHUOlOBbBuGuY5otL9fKjIgnYjGfxAh419nawFiIva4fz0gGGHjIEiFmXDEvVlXY07zTvU6dn%2B8jcphsg9a7nR8SJsanzjBWNvzbu03xBgnj5AADdLF%2FxSlCVlx4E8HVx3rbGKv9oIFtEtBQul8SyvRYofaH3VqaLk%2F3QfEnFltMp3%2Fg4iHW7KwlEcuAqjd5G6PVfJ6DCZ5sMAEIddVxLezVEV5HVZP%2FwoNq6x1whiyabfvfRZrsUrQYjT3AClNmhgqCIZr03VrLMRis7hm8HGHQDjbU4YnzsUoZaJ%2Bj%2FrZBV4newZx1Bcb7jcJr%2BQDIQasiNov2TjZnLI%2F%2Bme7e4mxCxStauTBL%2BQJ0bqW5eXk9kD%2FPvNyuZbm9EHVvHP8BUzMi%2FlSaLQ4Yt%2FjNiXBVdWI9sLFjOQFjtqn5Ym3OpNmmMZgRjWIzwhYPYMsuy7%2BvXIMRfVHQqke5W1qFDjcKLqcvIO%2BI3T03uEMPbp7MAGOqUBf%2Bw%2FSisMzoQmPgCIxR4WPtQSOZUDiGmp1MHxc0Pygi93TR6ZMztKHgTBsnqmUscNE%2B8D6rUWdL5TrCG1Egtc7HQBQlq3Vbxd06l8AK8NrwHYTaWhhbUqxdPIbZ39OJxhAt8jpvMl02fFnf%2BtMCX2lC7niFPvteH901tqXWOE3DJfYaiX0xbV8PN6FmnRCfryW6GXE5HcjexRkFepSRuuWr98wedC&X-Amz-Signature=fd241020945a97afd14914be0dbc4434e2cf28502b401ab61e7b31ceb27e5bca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM3GBZC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1OACP99XGeo0FL80pre13T9V7W6VSmmpQllLc7cnZXAiEApfvHLqMXaD5ZeW7X8RBDSHpdcy0i4Ek5VDxqceZfWkgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDD5y%2BYvEUhk5oxt%2FPCrcAyPS2iSzvE1IzArBhjEQacGKMul3DpS%2Bj%2BENKw05umE71mapNknHPchpigiCOVQ52sNwEM0ewoaoBX05F%2BBgPgY7mUEpz4DKCLbLRteePyZKZ01bldQrpuveeHAPOpd1epMRkm9i9hOozjgVaREm%2BFFCVkmHUOlOBbBuGuY5otL9fKjIgnYjGfxAh419nawFiIva4fz0gGGHjIEiFmXDEvVlXY07zTvU6dn%2B8jcphsg9a7nR8SJsanzjBWNvzbu03xBgnj5AADdLF%2FxSlCVlx4E8HVx3rbGKv9oIFtEtBQul8SyvRYofaH3VqaLk%2F3QfEnFltMp3%2Fg4iHW7KwlEcuAqjd5G6PVfJ6DCZ5sMAEIddVxLezVEV5HVZP%2FwoNq6x1whiyabfvfRZrsUrQYjT3AClNmhgqCIZr03VrLMRis7hm8HGHQDjbU4YnzsUoZaJ%2Bj%2FrZBV4newZx1Bcb7jcJr%2BQDIQasiNov2TjZnLI%2F%2Bme7e4mxCxStauTBL%2BQJ0bqW5eXk9kD%2FPvNyuZbm9EHVvHP8BUzMi%2FlSaLQ4Yt%2FjNiXBVdWI9sLFjOQFjtqn5Ym3OpNmmMZgRjWIzwhYPYMsuy7%2BvXIMRfVHQqke5W1qFDjcKLqcvIO%2BI3T03uEMPbp7MAGOqUBf%2Bw%2FSisMzoQmPgCIxR4WPtQSOZUDiGmp1MHxc0Pygi93TR6ZMztKHgTBsnqmUscNE%2B8D6rUWdL5TrCG1Egtc7HQBQlq3Vbxd06l8AK8NrwHYTaWhhbUqxdPIbZ39OJxhAt8jpvMl02fFnf%2BtMCX2lC7niFPvteH901tqXWOE3DJfYaiX0xbV8PN6FmnRCfryW6GXE5HcjexRkFepSRuuWr98wedC&X-Amz-Signature=13390d7b1562ba34e1f5ff38548fe2daaad2225760fbc478a4ca05795e08d6d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM3GBZC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1OACP99XGeo0FL80pre13T9V7W6VSmmpQllLc7cnZXAiEApfvHLqMXaD5ZeW7X8RBDSHpdcy0i4Ek5VDxqceZfWkgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDD5y%2BYvEUhk5oxt%2FPCrcAyPS2iSzvE1IzArBhjEQacGKMul3DpS%2Bj%2BENKw05umE71mapNknHPchpigiCOVQ52sNwEM0ewoaoBX05F%2BBgPgY7mUEpz4DKCLbLRteePyZKZ01bldQrpuveeHAPOpd1epMRkm9i9hOozjgVaREm%2BFFCVkmHUOlOBbBuGuY5otL9fKjIgnYjGfxAh419nawFiIva4fz0gGGHjIEiFmXDEvVlXY07zTvU6dn%2B8jcphsg9a7nR8SJsanzjBWNvzbu03xBgnj5AADdLF%2FxSlCVlx4E8HVx3rbGKv9oIFtEtBQul8SyvRYofaH3VqaLk%2F3QfEnFltMp3%2Fg4iHW7KwlEcuAqjd5G6PVfJ6DCZ5sMAEIddVxLezVEV5HVZP%2FwoNq6x1whiyabfvfRZrsUrQYjT3AClNmhgqCIZr03VrLMRis7hm8HGHQDjbU4YnzsUoZaJ%2Bj%2FrZBV4newZx1Bcb7jcJr%2BQDIQasiNov2TjZnLI%2F%2Bme7e4mxCxStauTBL%2BQJ0bqW5eXk9kD%2FPvNyuZbm9EHVvHP8BUzMi%2FlSaLQ4Yt%2FjNiXBVdWI9sLFjOQFjtqn5Ym3OpNmmMZgRjWIzwhYPYMsuy7%2BvXIMRfVHQqke5W1qFDjcKLqcvIO%2BI3T03uEMPbp7MAGOqUBf%2Bw%2FSisMzoQmPgCIxR4WPtQSOZUDiGmp1MHxc0Pygi93TR6ZMztKHgTBsnqmUscNE%2B8D6rUWdL5TrCG1Egtc7HQBQlq3Vbxd06l8AK8NrwHYTaWhhbUqxdPIbZ39OJxhAt8jpvMl02fFnf%2BtMCX2lC7niFPvteH901tqXWOE3DJfYaiX0xbV8PN6FmnRCfryW6GXE5HcjexRkFepSRuuWr98wedC&X-Amz-Signature=6e3bb8197d70975736f8a9d0e754cb6c6371c3b6ef7832e18053d617007dfa70&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM3GBZC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1OACP99XGeo0FL80pre13T9V7W6VSmmpQllLc7cnZXAiEApfvHLqMXaD5ZeW7X8RBDSHpdcy0i4Ek5VDxqceZfWkgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDD5y%2BYvEUhk5oxt%2FPCrcAyPS2iSzvE1IzArBhjEQacGKMul3DpS%2Bj%2BENKw05umE71mapNknHPchpigiCOVQ52sNwEM0ewoaoBX05F%2BBgPgY7mUEpz4DKCLbLRteePyZKZ01bldQrpuveeHAPOpd1epMRkm9i9hOozjgVaREm%2BFFCVkmHUOlOBbBuGuY5otL9fKjIgnYjGfxAh419nawFiIva4fz0gGGHjIEiFmXDEvVlXY07zTvU6dn%2B8jcphsg9a7nR8SJsanzjBWNvzbu03xBgnj5AADdLF%2FxSlCVlx4E8HVx3rbGKv9oIFtEtBQul8SyvRYofaH3VqaLk%2F3QfEnFltMp3%2Fg4iHW7KwlEcuAqjd5G6PVfJ6DCZ5sMAEIddVxLezVEV5HVZP%2FwoNq6x1whiyabfvfRZrsUrQYjT3AClNmhgqCIZr03VrLMRis7hm8HGHQDjbU4YnzsUoZaJ%2Bj%2FrZBV4newZx1Bcb7jcJr%2BQDIQasiNov2TjZnLI%2F%2Bme7e4mxCxStauTBL%2BQJ0bqW5eXk9kD%2FPvNyuZbm9EHVvHP8BUzMi%2FlSaLQ4Yt%2FjNiXBVdWI9sLFjOQFjtqn5Ym3OpNmmMZgRjWIzwhYPYMsuy7%2BvXIMRfVHQqke5W1qFDjcKLqcvIO%2BI3T03uEMPbp7MAGOqUBf%2Bw%2FSisMzoQmPgCIxR4WPtQSOZUDiGmp1MHxc0Pygi93TR6ZMztKHgTBsnqmUscNE%2B8D6rUWdL5TrCG1Egtc7HQBQlq3Vbxd06l8AK8NrwHYTaWhhbUqxdPIbZ39OJxhAt8jpvMl02fFnf%2BtMCX2lC7niFPvteH901tqXWOE3DJfYaiX0xbV8PN6FmnRCfryW6GXE5HcjexRkFepSRuuWr98wedC&X-Amz-Signature=7905952a908972a4c8fae16d0e83de96f89a0b68a3f3867c534e1b900cd33c54&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM3GBZC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1OACP99XGeo0FL80pre13T9V7W6VSmmpQllLc7cnZXAiEApfvHLqMXaD5ZeW7X8RBDSHpdcy0i4Ek5VDxqceZfWkgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDD5y%2BYvEUhk5oxt%2FPCrcAyPS2iSzvE1IzArBhjEQacGKMul3DpS%2Bj%2BENKw05umE71mapNknHPchpigiCOVQ52sNwEM0ewoaoBX05F%2BBgPgY7mUEpz4DKCLbLRteePyZKZ01bldQrpuveeHAPOpd1epMRkm9i9hOozjgVaREm%2BFFCVkmHUOlOBbBuGuY5otL9fKjIgnYjGfxAh419nawFiIva4fz0gGGHjIEiFmXDEvVlXY07zTvU6dn%2B8jcphsg9a7nR8SJsanzjBWNvzbu03xBgnj5AADdLF%2FxSlCVlx4E8HVx3rbGKv9oIFtEtBQul8SyvRYofaH3VqaLk%2F3QfEnFltMp3%2Fg4iHW7KwlEcuAqjd5G6PVfJ6DCZ5sMAEIddVxLezVEV5HVZP%2FwoNq6x1whiyabfvfRZrsUrQYjT3AClNmhgqCIZr03VrLMRis7hm8HGHQDjbU4YnzsUoZaJ%2Bj%2FrZBV4newZx1Bcb7jcJr%2BQDIQasiNov2TjZnLI%2F%2Bme7e4mxCxStauTBL%2BQJ0bqW5eXk9kD%2FPvNyuZbm9EHVvHP8BUzMi%2FlSaLQ4Yt%2FjNiXBVdWI9sLFjOQFjtqn5Ym3OpNmmMZgRjWIzwhYPYMsuy7%2BvXIMRfVHQqke5W1qFDjcKLqcvIO%2BI3T03uEMPbp7MAGOqUBf%2Bw%2FSisMzoQmPgCIxR4WPtQSOZUDiGmp1MHxc0Pygi93TR6ZMztKHgTBsnqmUscNE%2B8D6rUWdL5TrCG1Egtc7HQBQlq3Vbxd06l8AK8NrwHYTaWhhbUqxdPIbZ39OJxhAt8jpvMl02fFnf%2BtMCX2lC7niFPvteH901tqXWOE3DJfYaiX0xbV8PN6FmnRCfryW6GXE5HcjexRkFepSRuuWr98wedC&X-Amz-Signature=6a8757ba6a3369af4111b8492f2280f74e68240c0dff2fb5f09111d372857ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM3GBZC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1OACP99XGeo0FL80pre13T9V7W6VSmmpQllLc7cnZXAiEApfvHLqMXaD5ZeW7X8RBDSHpdcy0i4Ek5VDxqceZfWkgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDD5y%2BYvEUhk5oxt%2FPCrcAyPS2iSzvE1IzArBhjEQacGKMul3DpS%2Bj%2BENKw05umE71mapNknHPchpigiCOVQ52sNwEM0ewoaoBX05F%2BBgPgY7mUEpz4DKCLbLRteePyZKZ01bldQrpuveeHAPOpd1epMRkm9i9hOozjgVaREm%2BFFCVkmHUOlOBbBuGuY5otL9fKjIgnYjGfxAh419nawFiIva4fz0gGGHjIEiFmXDEvVlXY07zTvU6dn%2B8jcphsg9a7nR8SJsanzjBWNvzbu03xBgnj5AADdLF%2FxSlCVlx4E8HVx3rbGKv9oIFtEtBQul8SyvRYofaH3VqaLk%2F3QfEnFltMp3%2Fg4iHW7KwlEcuAqjd5G6PVfJ6DCZ5sMAEIddVxLezVEV5HVZP%2FwoNq6x1whiyabfvfRZrsUrQYjT3AClNmhgqCIZr03VrLMRis7hm8HGHQDjbU4YnzsUoZaJ%2Bj%2FrZBV4newZx1Bcb7jcJr%2BQDIQasiNov2TjZnLI%2F%2Bme7e4mxCxStauTBL%2BQJ0bqW5eXk9kD%2FPvNyuZbm9EHVvHP8BUzMi%2FlSaLQ4Yt%2FjNiXBVdWI9sLFjOQFjtqn5Ym3OpNmmMZgRjWIzwhYPYMsuy7%2BvXIMRfVHQqke5W1qFDjcKLqcvIO%2BI3T03uEMPbp7MAGOqUBf%2Bw%2FSisMzoQmPgCIxR4WPtQSOZUDiGmp1MHxc0Pygi93TR6ZMztKHgTBsnqmUscNE%2B8D6rUWdL5TrCG1Egtc7HQBQlq3Vbxd06l8AK8NrwHYTaWhhbUqxdPIbZ39OJxhAt8jpvMl02fFnf%2BtMCX2lC7niFPvteH901tqXWOE3DJfYaiX0xbV8PN6FmnRCfryW6GXE5HcjexRkFepSRuuWr98wedC&X-Amz-Signature=eeb0c0b579cfa054ae0c07925de882544a6aa721cb77e6cc84dd97dd2085521e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VM3GBZC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1OACP99XGeo0FL80pre13T9V7W6VSmmpQllLc7cnZXAiEApfvHLqMXaD5ZeW7X8RBDSHpdcy0i4Ek5VDxqceZfWkgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDD5y%2BYvEUhk5oxt%2FPCrcAyPS2iSzvE1IzArBhjEQacGKMul3DpS%2Bj%2BENKw05umE71mapNknHPchpigiCOVQ52sNwEM0ewoaoBX05F%2BBgPgY7mUEpz4DKCLbLRteePyZKZ01bldQrpuveeHAPOpd1epMRkm9i9hOozjgVaREm%2BFFCVkmHUOlOBbBuGuY5otL9fKjIgnYjGfxAh419nawFiIva4fz0gGGHjIEiFmXDEvVlXY07zTvU6dn%2B8jcphsg9a7nR8SJsanzjBWNvzbu03xBgnj5AADdLF%2FxSlCVlx4E8HVx3rbGKv9oIFtEtBQul8SyvRYofaH3VqaLk%2F3QfEnFltMp3%2Fg4iHW7KwlEcuAqjd5G6PVfJ6DCZ5sMAEIddVxLezVEV5HVZP%2FwoNq6x1whiyabfvfRZrsUrQYjT3AClNmhgqCIZr03VrLMRis7hm8HGHQDjbU4YnzsUoZaJ%2Bj%2FrZBV4newZx1Bcb7jcJr%2BQDIQasiNov2TjZnLI%2F%2Bme7e4mxCxStauTBL%2BQJ0bqW5eXk9kD%2FPvNyuZbm9EHVvHP8BUzMi%2FlSaLQ4Yt%2FjNiXBVdWI9sLFjOQFjtqn5Ym3OpNmmMZgRjWIzwhYPYMsuy7%2BvXIMRfVHQqke5W1qFDjcKLqcvIO%2BI3T03uEMPbp7MAGOqUBf%2Bw%2FSisMzoQmPgCIxR4WPtQSOZUDiGmp1MHxc0Pygi93TR6ZMztKHgTBsnqmUscNE%2B8D6rUWdL5TrCG1Egtc7HQBQlq3Vbxd06l8AK8NrwHYTaWhhbUqxdPIbZ39OJxhAt8jpvMl02fFnf%2BtMCX2lC7niFPvteH901tqXWOE3DJfYaiX0xbV8PN6FmnRCfryW6GXE5HcjexRkFepSRuuWr98wedC&X-Amz-Signature=4e65829a9f93c374f118824bd1a4b22cb903e41333e9c4db3d48b1a2ae673626&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
