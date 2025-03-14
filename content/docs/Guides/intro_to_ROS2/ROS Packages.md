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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSECKIYT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUP5j09OI7o4MZFVhgifQ6dAnoy%2FG540OtH6ZjHkB7aQIgYIx9bpU0YlEqPp5DzD2SW%2BA4wB9Xgvw2necGQo1IJWYqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDstFV980x7zruT96SrcAwt7at6hM5hBm6epPuSoH8%2B8YUtwj1iahjiz2pe7hB8hYo274zEkWH9Ec978eLqWoTx6Ar6uwBLVmERCXrZ0NT1ctRm3%2FG5DYenowPaAafmUbQnZJyqJmQOkYvgTxxBmPOMrPX%2BsL7m7JhrvKWVDOMYi1LAQ5r9KFk4LfYJeppbuixhUxsCxsj69xnsff7rrwPEukuICpwLpvAswwVcM%2FSPVM4PWgj9L0KIR5XINWu91wfGb9CD11Itvi3rkEwAJgP7cmeBe2MA2Zzji8cnlPU5cUE5SqQtFWDH1AE8iBi4bZMnMNPlosuz5z8OIxp9eyybKTg%2B1MnmSwyFhDJMVz04ZfCBmFRFdYRDkM8DF06GiNhPMrLdWaRLI2cq9clvuV1fgnQ9hq%2BiexLYEq%2FUBRh2PR1sNAAOAHlpgqJxQZd0CMdewcepudj%2B0%2FRIerdSdGEz63PpKAI94F8B7jhIW4Cc17IgZXxWptO%2FGptTdLf27B%2B16PdHXjBoZDHBGXSSZX%2BLVFvcz6fAqV6TZJ6%2Bcv1UHo4G02zJWdcm3E9Tsj9dz4GOPrzxn9y3knnL8xSBMeNXV9W8fi94qXb4Skst3xybWXzAu1XTtKgLxgXhndob54Dn25zk0dXaYl31IMMnQ0r4GOqUBd1V7pYKh3XVF7OSLS3wBvT0562DgOHADP7hJTnUML3xg40xQVZCnd0%2FhYJBogvWvxQTVURmF03w4yW1w%2FkBKxZ5M9hbHu4ry7hAXbXxs%2BlxIOyUeWNDNCmyjRELuxv%2BQZ4UF9ZUKt1nExFDf9w4DdeMMtmS%2FGyFcFQNkLyQDDYObivvFujuQrBwz%2BHqY%2FjwduCDLlz1Wuh2X1XwL3ho8eS0NwnAB&X-Amz-Signature=272b98248431022778e4aa7bc1f1b144b983d835be3359606fb032cb105216f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSECKIYT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUP5j09OI7o4MZFVhgifQ6dAnoy%2FG540OtH6ZjHkB7aQIgYIx9bpU0YlEqPp5DzD2SW%2BA4wB9Xgvw2necGQo1IJWYqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDstFV980x7zruT96SrcAwt7at6hM5hBm6epPuSoH8%2B8YUtwj1iahjiz2pe7hB8hYo274zEkWH9Ec978eLqWoTx6Ar6uwBLVmERCXrZ0NT1ctRm3%2FG5DYenowPaAafmUbQnZJyqJmQOkYvgTxxBmPOMrPX%2BsL7m7JhrvKWVDOMYi1LAQ5r9KFk4LfYJeppbuixhUxsCxsj69xnsff7rrwPEukuICpwLpvAswwVcM%2FSPVM4PWgj9L0KIR5XINWu91wfGb9CD11Itvi3rkEwAJgP7cmeBe2MA2Zzji8cnlPU5cUE5SqQtFWDH1AE8iBi4bZMnMNPlosuz5z8OIxp9eyybKTg%2B1MnmSwyFhDJMVz04ZfCBmFRFdYRDkM8DF06GiNhPMrLdWaRLI2cq9clvuV1fgnQ9hq%2BiexLYEq%2FUBRh2PR1sNAAOAHlpgqJxQZd0CMdewcepudj%2B0%2FRIerdSdGEz63PpKAI94F8B7jhIW4Cc17IgZXxWptO%2FGptTdLf27B%2B16PdHXjBoZDHBGXSSZX%2BLVFvcz6fAqV6TZJ6%2Bcv1UHo4G02zJWdcm3E9Tsj9dz4GOPrzxn9y3knnL8xSBMeNXV9W8fi94qXb4Skst3xybWXzAu1XTtKgLxgXhndob54Dn25zk0dXaYl31IMMnQ0r4GOqUBd1V7pYKh3XVF7OSLS3wBvT0562DgOHADP7hJTnUML3xg40xQVZCnd0%2FhYJBogvWvxQTVURmF03w4yW1w%2FkBKxZ5M9hbHu4ry7hAXbXxs%2BlxIOyUeWNDNCmyjRELuxv%2BQZ4UF9ZUKt1nExFDf9w4DdeMMtmS%2FGyFcFQNkLyQDDYObivvFujuQrBwz%2BHqY%2FjwduCDLlz1Wuh2X1XwL3ho8eS0NwnAB&X-Amz-Signature=63c609f412b11a9c4ba182d69f2aed2cfd87f30340d3d76d5632d14bc95fb6f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSECKIYT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUP5j09OI7o4MZFVhgifQ6dAnoy%2FG540OtH6ZjHkB7aQIgYIx9bpU0YlEqPp5DzD2SW%2BA4wB9Xgvw2necGQo1IJWYqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDstFV980x7zruT96SrcAwt7at6hM5hBm6epPuSoH8%2B8YUtwj1iahjiz2pe7hB8hYo274zEkWH9Ec978eLqWoTx6Ar6uwBLVmERCXrZ0NT1ctRm3%2FG5DYenowPaAafmUbQnZJyqJmQOkYvgTxxBmPOMrPX%2BsL7m7JhrvKWVDOMYi1LAQ5r9KFk4LfYJeppbuixhUxsCxsj69xnsff7rrwPEukuICpwLpvAswwVcM%2FSPVM4PWgj9L0KIR5XINWu91wfGb9CD11Itvi3rkEwAJgP7cmeBe2MA2Zzji8cnlPU5cUE5SqQtFWDH1AE8iBi4bZMnMNPlosuz5z8OIxp9eyybKTg%2B1MnmSwyFhDJMVz04ZfCBmFRFdYRDkM8DF06GiNhPMrLdWaRLI2cq9clvuV1fgnQ9hq%2BiexLYEq%2FUBRh2PR1sNAAOAHlpgqJxQZd0CMdewcepudj%2B0%2FRIerdSdGEz63PpKAI94F8B7jhIW4Cc17IgZXxWptO%2FGptTdLf27B%2B16PdHXjBoZDHBGXSSZX%2BLVFvcz6fAqV6TZJ6%2Bcv1UHo4G02zJWdcm3E9Tsj9dz4GOPrzxn9y3knnL8xSBMeNXV9W8fi94qXb4Skst3xybWXzAu1XTtKgLxgXhndob54Dn25zk0dXaYl31IMMnQ0r4GOqUBd1V7pYKh3XVF7OSLS3wBvT0562DgOHADP7hJTnUML3xg40xQVZCnd0%2FhYJBogvWvxQTVURmF03w4yW1w%2FkBKxZ5M9hbHu4ry7hAXbXxs%2BlxIOyUeWNDNCmyjRELuxv%2BQZ4UF9ZUKt1nExFDf9w4DdeMMtmS%2FGyFcFQNkLyQDDYObivvFujuQrBwz%2BHqY%2FjwduCDLlz1Wuh2X1XwL3ho8eS0NwnAB&X-Amz-Signature=3f53aa2390f552f7393815dcab7810d7e95455d9a2e7d0bf96be9e341dd72724&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSECKIYT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUP5j09OI7o4MZFVhgifQ6dAnoy%2FG540OtH6ZjHkB7aQIgYIx9bpU0YlEqPp5DzD2SW%2BA4wB9Xgvw2necGQo1IJWYqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDstFV980x7zruT96SrcAwt7at6hM5hBm6epPuSoH8%2B8YUtwj1iahjiz2pe7hB8hYo274zEkWH9Ec978eLqWoTx6Ar6uwBLVmERCXrZ0NT1ctRm3%2FG5DYenowPaAafmUbQnZJyqJmQOkYvgTxxBmPOMrPX%2BsL7m7JhrvKWVDOMYi1LAQ5r9KFk4LfYJeppbuixhUxsCxsj69xnsff7rrwPEukuICpwLpvAswwVcM%2FSPVM4PWgj9L0KIR5XINWu91wfGb9CD11Itvi3rkEwAJgP7cmeBe2MA2Zzji8cnlPU5cUE5SqQtFWDH1AE8iBi4bZMnMNPlosuz5z8OIxp9eyybKTg%2B1MnmSwyFhDJMVz04ZfCBmFRFdYRDkM8DF06GiNhPMrLdWaRLI2cq9clvuV1fgnQ9hq%2BiexLYEq%2FUBRh2PR1sNAAOAHlpgqJxQZd0CMdewcepudj%2B0%2FRIerdSdGEz63PpKAI94F8B7jhIW4Cc17IgZXxWptO%2FGptTdLf27B%2B16PdHXjBoZDHBGXSSZX%2BLVFvcz6fAqV6TZJ6%2Bcv1UHo4G02zJWdcm3E9Tsj9dz4GOPrzxn9y3knnL8xSBMeNXV9W8fi94qXb4Skst3xybWXzAu1XTtKgLxgXhndob54Dn25zk0dXaYl31IMMnQ0r4GOqUBd1V7pYKh3XVF7OSLS3wBvT0562DgOHADP7hJTnUML3xg40xQVZCnd0%2FhYJBogvWvxQTVURmF03w4yW1w%2FkBKxZ5M9hbHu4ry7hAXbXxs%2BlxIOyUeWNDNCmyjRELuxv%2BQZ4UF9ZUKt1nExFDf9w4DdeMMtmS%2FGyFcFQNkLyQDDYObivvFujuQrBwz%2BHqY%2FjwduCDLlz1Wuh2X1XwL3ho8eS0NwnAB&X-Amz-Signature=e94c8a46e70e96ce7c154535910a9451d8890adc1ed43ac949cfc17e0b4632b8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSECKIYT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUP5j09OI7o4MZFVhgifQ6dAnoy%2FG540OtH6ZjHkB7aQIgYIx9bpU0YlEqPp5DzD2SW%2BA4wB9Xgvw2necGQo1IJWYqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDstFV980x7zruT96SrcAwt7at6hM5hBm6epPuSoH8%2B8YUtwj1iahjiz2pe7hB8hYo274zEkWH9Ec978eLqWoTx6Ar6uwBLVmERCXrZ0NT1ctRm3%2FG5DYenowPaAafmUbQnZJyqJmQOkYvgTxxBmPOMrPX%2BsL7m7JhrvKWVDOMYi1LAQ5r9KFk4LfYJeppbuixhUxsCxsj69xnsff7rrwPEukuICpwLpvAswwVcM%2FSPVM4PWgj9L0KIR5XINWu91wfGb9CD11Itvi3rkEwAJgP7cmeBe2MA2Zzji8cnlPU5cUE5SqQtFWDH1AE8iBi4bZMnMNPlosuz5z8OIxp9eyybKTg%2B1MnmSwyFhDJMVz04ZfCBmFRFdYRDkM8DF06GiNhPMrLdWaRLI2cq9clvuV1fgnQ9hq%2BiexLYEq%2FUBRh2PR1sNAAOAHlpgqJxQZd0CMdewcepudj%2B0%2FRIerdSdGEz63PpKAI94F8B7jhIW4Cc17IgZXxWptO%2FGptTdLf27B%2B16PdHXjBoZDHBGXSSZX%2BLVFvcz6fAqV6TZJ6%2Bcv1UHo4G02zJWdcm3E9Tsj9dz4GOPrzxn9y3knnL8xSBMeNXV9W8fi94qXb4Skst3xybWXzAu1XTtKgLxgXhndob54Dn25zk0dXaYl31IMMnQ0r4GOqUBd1V7pYKh3XVF7OSLS3wBvT0562DgOHADP7hJTnUML3xg40xQVZCnd0%2FhYJBogvWvxQTVURmF03w4yW1w%2FkBKxZ5M9hbHu4ry7hAXbXxs%2BlxIOyUeWNDNCmyjRELuxv%2BQZ4UF9ZUKt1nExFDf9w4DdeMMtmS%2FGyFcFQNkLyQDDYObivvFujuQrBwz%2BHqY%2FjwduCDLlz1Wuh2X1XwL3ho8eS0NwnAB&X-Amz-Signature=74e2536d8ab0dfda83ec38d807b40ed37db4a46de7142e679b8050b97201113e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSECKIYT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUP5j09OI7o4MZFVhgifQ6dAnoy%2FG540OtH6ZjHkB7aQIgYIx9bpU0YlEqPp5DzD2SW%2BA4wB9Xgvw2necGQo1IJWYqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDstFV980x7zruT96SrcAwt7at6hM5hBm6epPuSoH8%2B8YUtwj1iahjiz2pe7hB8hYo274zEkWH9Ec978eLqWoTx6Ar6uwBLVmERCXrZ0NT1ctRm3%2FG5DYenowPaAafmUbQnZJyqJmQOkYvgTxxBmPOMrPX%2BsL7m7JhrvKWVDOMYi1LAQ5r9KFk4LfYJeppbuixhUxsCxsj69xnsff7rrwPEukuICpwLpvAswwVcM%2FSPVM4PWgj9L0KIR5XINWu91wfGb9CD11Itvi3rkEwAJgP7cmeBe2MA2Zzji8cnlPU5cUE5SqQtFWDH1AE8iBi4bZMnMNPlosuz5z8OIxp9eyybKTg%2B1MnmSwyFhDJMVz04ZfCBmFRFdYRDkM8DF06GiNhPMrLdWaRLI2cq9clvuV1fgnQ9hq%2BiexLYEq%2FUBRh2PR1sNAAOAHlpgqJxQZd0CMdewcepudj%2B0%2FRIerdSdGEz63PpKAI94F8B7jhIW4Cc17IgZXxWptO%2FGptTdLf27B%2B16PdHXjBoZDHBGXSSZX%2BLVFvcz6fAqV6TZJ6%2Bcv1UHo4G02zJWdcm3E9Tsj9dz4GOPrzxn9y3knnL8xSBMeNXV9W8fi94qXb4Skst3xybWXzAu1XTtKgLxgXhndob54Dn25zk0dXaYl31IMMnQ0r4GOqUBd1V7pYKh3XVF7OSLS3wBvT0562DgOHADP7hJTnUML3xg40xQVZCnd0%2FhYJBogvWvxQTVURmF03w4yW1w%2FkBKxZ5M9hbHu4ry7hAXbXxs%2BlxIOyUeWNDNCmyjRELuxv%2BQZ4UF9ZUKt1nExFDf9w4DdeMMtmS%2FGyFcFQNkLyQDDYObivvFujuQrBwz%2BHqY%2FjwduCDLlz1Wuh2X1XwL3ho8eS0NwnAB&X-Amz-Signature=7505340998e0b982e5aec2c83021365a8b242b0a6c0afdfb53029ff60cf13c58&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSECKIYT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUP5j09OI7o4MZFVhgifQ6dAnoy%2FG540OtH6ZjHkB7aQIgYIx9bpU0YlEqPp5DzD2SW%2BA4wB9Xgvw2necGQo1IJWYqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDstFV980x7zruT96SrcAwt7at6hM5hBm6epPuSoH8%2B8YUtwj1iahjiz2pe7hB8hYo274zEkWH9Ec978eLqWoTx6Ar6uwBLVmERCXrZ0NT1ctRm3%2FG5DYenowPaAafmUbQnZJyqJmQOkYvgTxxBmPOMrPX%2BsL7m7JhrvKWVDOMYi1LAQ5r9KFk4LfYJeppbuixhUxsCxsj69xnsff7rrwPEukuICpwLpvAswwVcM%2FSPVM4PWgj9L0KIR5XINWu91wfGb9CD11Itvi3rkEwAJgP7cmeBe2MA2Zzji8cnlPU5cUE5SqQtFWDH1AE8iBi4bZMnMNPlosuz5z8OIxp9eyybKTg%2B1MnmSwyFhDJMVz04ZfCBmFRFdYRDkM8DF06GiNhPMrLdWaRLI2cq9clvuV1fgnQ9hq%2BiexLYEq%2FUBRh2PR1sNAAOAHlpgqJxQZd0CMdewcepudj%2B0%2FRIerdSdGEz63PpKAI94F8B7jhIW4Cc17IgZXxWptO%2FGptTdLf27B%2B16PdHXjBoZDHBGXSSZX%2BLVFvcz6fAqV6TZJ6%2Bcv1UHo4G02zJWdcm3E9Tsj9dz4GOPrzxn9y3knnL8xSBMeNXV9W8fi94qXb4Skst3xybWXzAu1XTtKgLxgXhndob54Dn25zk0dXaYl31IMMnQ0r4GOqUBd1V7pYKh3XVF7OSLS3wBvT0562DgOHADP7hJTnUML3xg40xQVZCnd0%2FhYJBogvWvxQTVURmF03w4yW1w%2FkBKxZ5M9hbHu4ry7hAXbXxs%2BlxIOyUeWNDNCmyjRELuxv%2BQZ4UF9ZUKt1nExFDf9w4DdeMMtmS%2FGyFcFQNkLyQDDYObivvFujuQrBwz%2BHqY%2FjwduCDLlz1Wuh2X1XwL3ho8eS0NwnAB&X-Amz-Signature=b0ad52b775cbbaafa96b27f535ca58d6d5036462d612d91f59d20c29c9b87f90&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
