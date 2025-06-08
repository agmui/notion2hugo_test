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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2IPCRSZ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCbFN5HbPqk0t1683ZexKaG2%2FjxCr6EN7CTXy%2FIDz09AiEAygpboY44gGfpWIkhyIXAlU3i7IEzom1LPg2M66b%2BQLIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBB2%2BWr5mDum9V2PxSrcA%2BRih9NEe7FFACG9DlGCMpY1%2BIvULyA4Bm8h73H6z3XXqH9oSu3paZrwZh8u%2FDUAYhy3LOLfKQJuMSla6Sa%2FvNYt%2FKvoAIiiOVFrqWfZHkwlq%2BVYIUqpWtlqny%2BspVjvvTtdPCawdh7SdBncxGtUetgf0oR0K7bVEJ2xGBU8%2BzwIX9wqfVAPyjSRzMi2mie%2FNNIzLO084DMVmb%2FRdqnBpMV0SAeyF3ObEuSYpVI%2Bqjp8rxBUogOTK3Kj%2F8aNHhBokjcC2mM3UF6iU2GDkX9eDZICb4GHqNox9gnHqGSouK%2BtQBzbEg9D576L%2BXmceay58Aio8wDfbJyvgaTY0FRg0xrjlFo1OdjcCU47dFpAvzZfItDbfIH0KYJr5G7aw3lX9qOEUUPSXny%2BpkB1b0uiKsQOAg97%2FrYkhEP5nw26rLnJH%2FeUKtnX%2FzfkV3Oxo%2F%2BlUTKbkhzFOyoliCMr8YVwOz9%2Fyw%2F6yf%2B3EvQ9vITPDPwn45%2Bfe%2FNM49iLZMwU8P5qCO5XNtepLboC4%2F4mu7V10ZxcJjsiQd%2BfYqTDOFQdz8PscUHDuXZfJPvkgQBHdAPXexgqUOhAREiu9vVNVzcH2GZlTOrhTxJkhuPKmvJOiMZk3EXm5jRwK%2FAElsSRMKyvl8IGOqUB7AY4qT3II7qwxHRlFQZktOtJEmxbwZYCr5yvbgTwW7LYCZbAMrp0cEnoapJzIf22jXAccvZdJ0b1VThBWc5bRauxomZSPcdDHoQJwBYjmoQv%2FrbnSpmMu3vI7pSSyud2xUj8bcGko0EvRNHQlMh8YH45KRQTnTz79yqEK3d3SFgeatbiIvbzUOizQsj%2BFgSZpRptj%2FIH5FWevlMMuTZ4gDJyQIeS&X-Amz-Signature=32f10b7fb82299dfed70a9715a872208a254a15ae307d053af4b6e0783f2733a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2IPCRSZ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCbFN5HbPqk0t1683ZexKaG2%2FjxCr6EN7CTXy%2FIDz09AiEAygpboY44gGfpWIkhyIXAlU3i7IEzom1LPg2M66b%2BQLIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBB2%2BWr5mDum9V2PxSrcA%2BRih9NEe7FFACG9DlGCMpY1%2BIvULyA4Bm8h73H6z3XXqH9oSu3paZrwZh8u%2FDUAYhy3LOLfKQJuMSla6Sa%2FvNYt%2FKvoAIiiOVFrqWfZHkwlq%2BVYIUqpWtlqny%2BspVjvvTtdPCawdh7SdBncxGtUetgf0oR0K7bVEJ2xGBU8%2BzwIX9wqfVAPyjSRzMi2mie%2FNNIzLO084DMVmb%2FRdqnBpMV0SAeyF3ObEuSYpVI%2Bqjp8rxBUogOTK3Kj%2F8aNHhBokjcC2mM3UF6iU2GDkX9eDZICb4GHqNox9gnHqGSouK%2BtQBzbEg9D576L%2BXmceay58Aio8wDfbJyvgaTY0FRg0xrjlFo1OdjcCU47dFpAvzZfItDbfIH0KYJr5G7aw3lX9qOEUUPSXny%2BpkB1b0uiKsQOAg97%2FrYkhEP5nw26rLnJH%2FeUKtnX%2FzfkV3Oxo%2F%2BlUTKbkhzFOyoliCMr8YVwOz9%2Fyw%2F6yf%2B3EvQ9vITPDPwn45%2Bfe%2FNM49iLZMwU8P5qCO5XNtepLboC4%2F4mu7V10ZxcJjsiQd%2BfYqTDOFQdz8PscUHDuXZfJPvkgQBHdAPXexgqUOhAREiu9vVNVzcH2GZlTOrhTxJkhuPKmvJOiMZk3EXm5jRwK%2FAElsSRMKyvl8IGOqUB7AY4qT3II7qwxHRlFQZktOtJEmxbwZYCr5yvbgTwW7LYCZbAMrp0cEnoapJzIf22jXAccvZdJ0b1VThBWc5bRauxomZSPcdDHoQJwBYjmoQv%2FrbnSpmMu3vI7pSSyud2xUj8bcGko0EvRNHQlMh8YH45KRQTnTz79yqEK3d3SFgeatbiIvbzUOizQsj%2BFgSZpRptj%2FIH5FWevlMMuTZ4gDJyQIeS&X-Amz-Signature=b8d58b1a1d15e97743cdd8a3379ffddd670e65b9b29d5e941f30e5a471ee7dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2IPCRSZ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCbFN5HbPqk0t1683ZexKaG2%2FjxCr6EN7CTXy%2FIDz09AiEAygpboY44gGfpWIkhyIXAlU3i7IEzom1LPg2M66b%2BQLIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBB2%2BWr5mDum9V2PxSrcA%2BRih9NEe7FFACG9DlGCMpY1%2BIvULyA4Bm8h73H6z3XXqH9oSu3paZrwZh8u%2FDUAYhy3LOLfKQJuMSla6Sa%2FvNYt%2FKvoAIiiOVFrqWfZHkwlq%2BVYIUqpWtlqny%2BspVjvvTtdPCawdh7SdBncxGtUetgf0oR0K7bVEJ2xGBU8%2BzwIX9wqfVAPyjSRzMi2mie%2FNNIzLO084DMVmb%2FRdqnBpMV0SAeyF3ObEuSYpVI%2Bqjp8rxBUogOTK3Kj%2F8aNHhBokjcC2mM3UF6iU2GDkX9eDZICb4GHqNox9gnHqGSouK%2BtQBzbEg9D576L%2BXmceay58Aio8wDfbJyvgaTY0FRg0xrjlFo1OdjcCU47dFpAvzZfItDbfIH0KYJr5G7aw3lX9qOEUUPSXny%2BpkB1b0uiKsQOAg97%2FrYkhEP5nw26rLnJH%2FeUKtnX%2FzfkV3Oxo%2F%2BlUTKbkhzFOyoliCMr8YVwOz9%2Fyw%2F6yf%2B3EvQ9vITPDPwn45%2Bfe%2FNM49iLZMwU8P5qCO5XNtepLboC4%2F4mu7V10ZxcJjsiQd%2BfYqTDOFQdz8PscUHDuXZfJPvkgQBHdAPXexgqUOhAREiu9vVNVzcH2GZlTOrhTxJkhuPKmvJOiMZk3EXm5jRwK%2FAElsSRMKyvl8IGOqUB7AY4qT3II7qwxHRlFQZktOtJEmxbwZYCr5yvbgTwW7LYCZbAMrp0cEnoapJzIf22jXAccvZdJ0b1VThBWc5bRauxomZSPcdDHoQJwBYjmoQv%2FrbnSpmMu3vI7pSSyud2xUj8bcGko0EvRNHQlMh8YH45KRQTnTz79yqEK3d3SFgeatbiIvbzUOizQsj%2BFgSZpRptj%2FIH5FWevlMMuTZ4gDJyQIeS&X-Amz-Signature=1f1bea5536e3a2276b705f1e54de5d55858fe6c1b7c9f7e33ef9a93dd42bcaef&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2IPCRSZ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCbFN5HbPqk0t1683ZexKaG2%2FjxCr6EN7CTXy%2FIDz09AiEAygpboY44gGfpWIkhyIXAlU3i7IEzom1LPg2M66b%2BQLIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBB2%2BWr5mDum9V2PxSrcA%2BRih9NEe7FFACG9DlGCMpY1%2BIvULyA4Bm8h73H6z3XXqH9oSu3paZrwZh8u%2FDUAYhy3LOLfKQJuMSla6Sa%2FvNYt%2FKvoAIiiOVFrqWfZHkwlq%2BVYIUqpWtlqny%2BspVjvvTtdPCawdh7SdBncxGtUetgf0oR0K7bVEJ2xGBU8%2BzwIX9wqfVAPyjSRzMi2mie%2FNNIzLO084DMVmb%2FRdqnBpMV0SAeyF3ObEuSYpVI%2Bqjp8rxBUogOTK3Kj%2F8aNHhBokjcC2mM3UF6iU2GDkX9eDZICb4GHqNox9gnHqGSouK%2BtQBzbEg9D576L%2BXmceay58Aio8wDfbJyvgaTY0FRg0xrjlFo1OdjcCU47dFpAvzZfItDbfIH0KYJr5G7aw3lX9qOEUUPSXny%2BpkB1b0uiKsQOAg97%2FrYkhEP5nw26rLnJH%2FeUKtnX%2FzfkV3Oxo%2F%2BlUTKbkhzFOyoliCMr8YVwOz9%2Fyw%2F6yf%2B3EvQ9vITPDPwn45%2Bfe%2FNM49iLZMwU8P5qCO5XNtepLboC4%2F4mu7V10ZxcJjsiQd%2BfYqTDOFQdz8PscUHDuXZfJPvkgQBHdAPXexgqUOhAREiu9vVNVzcH2GZlTOrhTxJkhuPKmvJOiMZk3EXm5jRwK%2FAElsSRMKyvl8IGOqUB7AY4qT3II7qwxHRlFQZktOtJEmxbwZYCr5yvbgTwW7LYCZbAMrp0cEnoapJzIf22jXAccvZdJ0b1VThBWc5bRauxomZSPcdDHoQJwBYjmoQv%2FrbnSpmMu3vI7pSSyud2xUj8bcGko0EvRNHQlMh8YH45KRQTnTz79yqEK3d3SFgeatbiIvbzUOizQsj%2BFgSZpRptj%2FIH5FWevlMMuTZ4gDJyQIeS&X-Amz-Signature=74226e936d7c9aca51ee15bded6876ac2ad0825cd97c4e58b4579e517a8b8f99&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2IPCRSZ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCbFN5HbPqk0t1683ZexKaG2%2FjxCr6EN7CTXy%2FIDz09AiEAygpboY44gGfpWIkhyIXAlU3i7IEzom1LPg2M66b%2BQLIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBB2%2BWr5mDum9V2PxSrcA%2BRih9NEe7FFACG9DlGCMpY1%2BIvULyA4Bm8h73H6z3XXqH9oSu3paZrwZh8u%2FDUAYhy3LOLfKQJuMSla6Sa%2FvNYt%2FKvoAIiiOVFrqWfZHkwlq%2BVYIUqpWtlqny%2BspVjvvTtdPCawdh7SdBncxGtUetgf0oR0K7bVEJ2xGBU8%2BzwIX9wqfVAPyjSRzMi2mie%2FNNIzLO084DMVmb%2FRdqnBpMV0SAeyF3ObEuSYpVI%2Bqjp8rxBUogOTK3Kj%2F8aNHhBokjcC2mM3UF6iU2GDkX9eDZICb4GHqNox9gnHqGSouK%2BtQBzbEg9D576L%2BXmceay58Aio8wDfbJyvgaTY0FRg0xrjlFo1OdjcCU47dFpAvzZfItDbfIH0KYJr5G7aw3lX9qOEUUPSXny%2BpkB1b0uiKsQOAg97%2FrYkhEP5nw26rLnJH%2FeUKtnX%2FzfkV3Oxo%2F%2BlUTKbkhzFOyoliCMr8YVwOz9%2Fyw%2F6yf%2B3EvQ9vITPDPwn45%2Bfe%2FNM49iLZMwU8P5qCO5XNtepLboC4%2F4mu7V10ZxcJjsiQd%2BfYqTDOFQdz8PscUHDuXZfJPvkgQBHdAPXexgqUOhAREiu9vVNVzcH2GZlTOrhTxJkhuPKmvJOiMZk3EXm5jRwK%2FAElsSRMKyvl8IGOqUB7AY4qT3II7qwxHRlFQZktOtJEmxbwZYCr5yvbgTwW7LYCZbAMrp0cEnoapJzIf22jXAccvZdJ0b1VThBWc5bRauxomZSPcdDHoQJwBYjmoQv%2FrbnSpmMu3vI7pSSyud2xUj8bcGko0EvRNHQlMh8YH45KRQTnTz79yqEK3d3SFgeatbiIvbzUOizQsj%2BFgSZpRptj%2FIH5FWevlMMuTZ4gDJyQIeS&X-Amz-Signature=b7e1718446bcef1235a919a5b7f5b96447cef4042a1f27bd6f8fcca7160d7dd9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2IPCRSZ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCbFN5HbPqk0t1683ZexKaG2%2FjxCr6EN7CTXy%2FIDz09AiEAygpboY44gGfpWIkhyIXAlU3i7IEzom1LPg2M66b%2BQLIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBB2%2BWr5mDum9V2PxSrcA%2BRih9NEe7FFACG9DlGCMpY1%2BIvULyA4Bm8h73H6z3XXqH9oSu3paZrwZh8u%2FDUAYhy3LOLfKQJuMSla6Sa%2FvNYt%2FKvoAIiiOVFrqWfZHkwlq%2BVYIUqpWtlqny%2BspVjvvTtdPCawdh7SdBncxGtUetgf0oR0K7bVEJ2xGBU8%2BzwIX9wqfVAPyjSRzMi2mie%2FNNIzLO084DMVmb%2FRdqnBpMV0SAeyF3ObEuSYpVI%2Bqjp8rxBUogOTK3Kj%2F8aNHhBokjcC2mM3UF6iU2GDkX9eDZICb4GHqNox9gnHqGSouK%2BtQBzbEg9D576L%2BXmceay58Aio8wDfbJyvgaTY0FRg0xrjlFo1OdjcCU47dFpAvzZfItDbfIH0KYJr5G7aw3lX9qOEUUPSXny%2BpkB1b0uiKsQOAg97%2FrYkhEP5nw26rLnJH%2FeUKtnX%2FzfkV3Oxo%2F%2BlUTKbkhzFOyoliCMr8YVwOz9%2Fyw%2F6yf%2B3EvQ9vITPDPwn45%2Bfe%2FNM49iLZMwU8P5qCO5XNtepLboC4%2F4mu7V10ZxcJjsiQd%2BfYqTDOFQdz8PscUHDuXZfJPvkgQBHdAPXexgqUOhAREiu9vVNVzcH2GZlTOrhTxJkhuPKmvJOiMZk3EXm5jRwK%2FAElsSRMKyvl8IGOqUB7AY4qT3II7qwxHRlFQZktOtJEmxbwZYCr5yvbgTwW7LYCZbAMrp0cEnoapJzIf22jXAccvZdJ0b1VThBWc5bRauxomZSPcdDHoQJwBYjmoQv%2FrbnSpmMu3vI7pSSyud2xUj8bcGko0EvRNHQlMh8YH45KRQTnTz79yqEK3d3SFgeatbiIvbzUOizQsj%2BFgSZpRptj%2FIH5FWevlMMuTZ4gDJyQIeS&X-Amz-Signature=6fb624d03731f0de7095799084cce1d752066351181c17edcbd25fefe3fc06ea&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2IPCRSZ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCbFN5HbPqk0t1683ZexKaG2%2FjxCr6EN7CTXy%2FIDz09AiEAygpboY44gGfpWIkhyIXAlU3i7IEzom1LPg2M66b%2BQLIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBB2%2BWr5mDum9V2PxSrcA%2BRih9NEe7FFACG9DlGCMpY1%2BIvULyA4Bm8h73H6z3XXqH9oSu3paZrwZh8u%2FDUAYhy3LOLfKQJuMSla6Sa%2FvNYt%2FKvoAIiiOVFrqWfZHkwlq%2BVYIUqpWtlqny%2BspVjvvTtdPCawdh7SdBncxGtUetgf0oR0K7bVEJ2xGBU8%2BzwIX9wqfVAPyjSRzMi2mie%2FNNIzLO084DMVmb%2FRdqnBpMV0SAeyF3ObEuSYpVI%2Bqjp8rxBUogOTK3Kj%2F8aNHhBokjcC2mM3UF6iU2GDkX9eDZICb4GHqNox9gnHqGSouK%2BtQBzbEg9D576L%2BXmceay58Aio8wDfbJyvgaTY0FRg0xrjlFo1OdjcCU47dFpAvzZfItDbfIH0KYJr5G7aw3lX9qOEUUPSXny%2BpkB1b0uiKsQOAg97%2FrYkhEP5nw26rLnJH%2FeUKtnX%2FzfkV3Oxo%2F%2BlUTKbkhzFOyoliCMr8YVwOz9%2Fyw%2F6yf%2B3EvQ9vITPDPwn45%2Bfe%2FNM49iLZMwU8P5qCO5XNtepLboC4%2F4mu7V10ZxcJjsiQd%2BfYqTDOFQdz8PscUHDuXZfJPvkgQBHdAPXexgqUOhAREiu9vVNVzcH2GZlTOrhTxJkhuPKmvJOiMZk3EXm5jRwK%2FAElsSRMKyvl8IGOqUB7AY4qT3II7qwxHRlFQZktOtJEmxbwZYCr5yvbgTwW7LYCZbAMrp0cEnoapJzIf22jXAccvZdJ0b1VThBWc5bRauxomZSPcdDHoQJwBYjmoQv%2FrbnSpmMu3vI7pSSyud2xUj8bcGko0EvRNHQlMh8YH45KRQTnTz79yqEK3d3SFgeatbiIvbzUOizQsj%2BFgSZpRptj%2FIH5FWevlMMuTZ4gDJyQIeS&X-Amz-Signature=850e6868b35cc805f536491c2845dbdd2e933cb0c6747a991a1e45c2f5fdd9c4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
