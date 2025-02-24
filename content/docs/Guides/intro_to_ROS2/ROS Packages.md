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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEJHRZS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOZ3C2Xpz97Gifop6f2rCiDKCagBh9XbDiy1pqViCOHQIgDMffAoMu2droasG%2BOQMpiB%2BbddJ8pFpXAjZ7X%2BXci9Uq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMme%2FjA%2FVfapmFTnqCrcA5%2FIvBMdGBGWS%2F%2FMufbwLbwzRGJJ%2BKKggwpz8sM2wvXeWhiGtVabCY0GVpa6%2FSZJevQfc0EMJmT8pDG41mwXe7w90wFRNoACl8QREZXM95HmSMQzie4IABA3XjMWxGqo4y61IfcQnMonym6uNp5254OaQoPsk%2FxHq0qfHY%2FOW0KvNVlB%2Fqc3KoTJ1Y2kjTb6IyWvdtzYFI%2BtbSPdX9JP6XVxbECEo52lVoiY4LIG3gIDhkx%2FAuiXPPPS47KbfaIfiHnZBLMT5EIBdHqR6yIjiaxB3XCVBC99mAAGQfCe52ZFcbxd9Zvrmyngl3reH3rbqDi1sKcjuUYKVZrKuGQEp64mgbyTF6fZ1UZ0dv5ZogChsSRwKDc3LBG%2FOV4XHb34O7PKEFzIVu9%2FRuag3xPAzdte4qWBVjZhjF5D655z6aCQ0rmeNPLVKoCdG3EXS5kCA1d24AplC41bXCje1%2FSq07bFGwlQHAvtjQM9BRJQpM6IxiM%2FCMgXR4WbWs8EYNYuY%2FYgRddOXMVZ6FCM8ZOuFn5NkrlevH0agOuKdVcMFAsdKMvLRtrQLeQN%2BV%2BnbfUxi7f7DqnxSlYeepTNYtxOSD7OLpLULdeT2C7p6pcV9IXtf6YbjVZa2pGgIOC2MN3O8L0GOqUBvkISjCZbjM0sKdBtAhzyPWQ6QfaZLEEM8e%2BC4AgP5zvHLEotlYnr8Da17Fgw7UinJlDVItyPb7ZP7P6TYlrRC4ix0GsK%2FucsPkgTr6VTXJ4qT4pO4ao6%2FNitU2n37crESxUTqayhWGFZ2rRDiSNeXPI9TjgrIToL3%2FHmiDn3%2BiRkk0EGbdClNKR82pHfIbhBoU45R8doSWkvXWC1B7spcNS1FzzH&X-Amz-Signature=880932f1f33f704986e4b6642192ddd6e5bc4e8bdc7b164a5babf436889ab8d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEJHRZS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOZ3C2Xpz97Gifop6f2rCiDKCagBh9XbDiy1pqViCOHQIgDMffAoMu2droasG%2BOQMpiB%2BbddJ8pFpXAjZ7X%2BXci9Uq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMme%2FjA%2FVfapmFTnqCrcA5%2FIvBMdGBGWS%2F%2FMufbwLbwzRGJJ%2BKKggwpz8sM2wvXeWhiGtVabCY0GVpa6%2FSZJevQfc0EMJmT8pDG41mwXe7w90wFRNoACl8QREZXM95HmSMQzie4IABA3XjMWxGqo4y61IfcQnMonym6uNp5254OaQoPsk%2FxHq0qfHY%2FOW0KvNVlB%2Fqc3KoTJ1Y2kjTb6IyWvdtzYFI%2BtbSPdX9JP6XVxbECEo52lVoiY4LIG3gIDhkx%2FAuiXPPPS47KbfaIfiHnZBLMT5EIBdHqR6yIjiaxB3XCVBC99mAAGQfCe52ZFcbxd9Zvrmyngl3reH3rbqDi1sKcjuUYKVZrKuGQEp64mgbyTF6fZ1UZ0dv5ZogChsSRwKDc3LBG%2FOV4XHb34O7PKEFzIVu9%2FRuag3xPAzdte4qWBVjZhjF5D655z6aCQ0rmeNPLVKoCdG3EXS5kCA1d24AplC41bXCje1%2FSq07bFGwlQHAvtjQM9BRJQpM6IxiM%2FCMgXR4WbWs8EYNYuY%2FYgRddOXMVZ6FCM8ZOuFn5NkrlevH0agOuKdVcMFAsdKMvLRtrQLeQN%2BV%2BnbfUxi7f7DqnxSlYeepTNYtxOSD7OLpLULdeT2C7p6pcV9IXtf6YbjVZa2pGgIOC2MN3O8L0GOqUBvkISjCZbjM0sKdBtAhzyPWQ6QfaZLEEM8e%2BC4AgP5zvHLEotlYnr8Da17Fgw7UinJlDVItyPb7ZP7P6TYlrRC4ix0GsK%2FucsPkgTr6VTXJ4qT4pO4ao6%2FNitU2n37crESxUTqayhWGFZ2rRDiSNeXPI9TjgrIToL3%2FHmiDn3%2BiRkk0EGbdClNKR82pHfIbhBoU45R8doSWkvXWC1B7spcNS1FzzH&X-Amz-Signature=576e3bd5ff7d0d1beb01f0e45dcc2c25b7e63d842e6f045ffc0a49d1b7ed79e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEJHRZS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOZ3C2Xpz97Gifop6f2rCiDKCagBh9XbDiy1pqViCOHQIgDMffAoMu2droasG%2BOQMpiB%2BbddJ8pFpXAjZ7X%2BXci9Uq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMme%2FjA%2FVfapmFTnqCrcA5%2FIvBMdGBGWS%2F%2FMufbwLbwzRGJJ%2BKKggwpz8sM2wvXeWhiGtVabCY0GVpa6%2FSZJevQfc0EMJmT8pDG41mwXe7w90wFRNoACl8QREZXM95HmSMQzie4IABA3XjMWxGqo4y61IfcQnMonym6uNp5254OaQoPsk%2FxHq0qfHY%2FOW0KvNVlB%2Fqc3KoTJ1Y2kjTb6IyWvdtzYFI%2BtbSPdX9JP6XVxbECEo52lVoiY4LIG3gIDhkx%2FAuiXPPPS47KbfaIfiHnZBLMT5EIBdHqR6yIjiaxB3XCVBC99mAAGQfCe52ZFcbxd9Zvrmyngl3reH3rbqDi1sKcjuUYKVZrKuGQEp64mgbyTF6fZ1UZ0dv5ZogChsSRwKDc3LBG%2FOV4XHb34O7PKEFzIVu9%2FRuag3xPAzdte4qWBVjZhjF5D655z6aCQ0rmeNPLVKoCdG3EXS5kCA1d24AplC41bXCje1%2FSq07bFGwlQHAvtjQM9BRJQpM6IxiM%2FCMgXR4WbWs8EYNYuY%2FYgRddOXMVZ6FCM8ZOuFn5NkrlevH0agOuKdVcMFAsdKMvLRtrQLeQN%2BV%2BnbfUxi7f7DqnxSlYeepTNYtxOSD7OLpLULdeT2C7p6pcV9IXtf6YbjVZa2pGgIOC2MN3O8L0GOqUBvkISjCZbjM0sKdBtAhzyPWQ6QfaZLEEM8e%2BC4AgP5zvHLEotlYnr8Da17Fgw7UinJlDVItyPb7ZP7P6TYlrRC4ix0GsK%2FucsPkgTr6VTXJ4qT4pO4ao6%2FNitU2n37crESxUTqayhWGFZ2rRDiSNeXPI9TjgrIToL3%2FHmiDn3%2BiRkk0EGbdClNKR82pHfIbhBoU45R8doSWkvXWC1B7spcNS1FzzH&X-Amz-Signature=9350c26d25ca1259931782023ac795d724fb92eee725ddeb4be37e1ccd0c9814&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEJHRZS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOZ3C2Xpz97Gifop6f2rCiDKCagBh9XbDiy1pqViCOHQIgDMffAoMu2droasG%2BOQMpiB%2BbddJ8pFpXAjZ7X%2BXci9Uq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMme%2FjA%2FVfapmFTnqCrcA5%2FIvBMdGBGWS%2F%2FMufbwLbwzRGJJ%2BKKggwpz8sM2wvXeWhiGtVabCY0GVpa6%2FSZJevQfc0EMJmT8pDG41mwXe7w90wFRNoACl8QREZXM95HmSMQzie4IABA3XjMWxGqo4y61IfcQnMonym6uNp5254OaQoPsk%2FxHq0qfHY%2FOW0KvNVlB%2Fqc3KoTJ1Y2kjTb6IyWvdtzYFI%2BtbSPdX9JP6XVxbECEo52lVoiY4LIG3gIDhkx%2FAuiXPPPS47KbfaIfiHnZBLMT5EIBdHqR6yIjiaxB3XCVBC99mAAGQfCe52ZFcbxd9Zvrmyngl3reH3rbqDi1sKcjuUYKVZrKuGQEp64mgbyTF6fZ1UZ0dv5ZogChsSRwKDc3LBG%2FOV4XHb34O7PKEFzIVu9%2FRuag3xPAzdte4qWBVjZhjF5D655z6aCQ0rmeNPLVKoCdG3EXS5kCA1d24AplC41bXCje1%2FSq07bFGwlQHAvtjQM9BRJQpM6IxiM%2FCMgXR4WbWs8EYNYuY%2FYgRddOXMVZ6FCM8ZOuFn5NkrlevH0agOuKdVcMFAsdKMvLRtrQLeQN%2BV%2BnbfUxi7f7DqnxSlYeepTNYtxOSD7OLpLULdeT2C7p6pcV9IXtf6YbjVZa2pGgIOC2MN3O8L0GOqUBvkISjCZbjM0sKdBtAhzyPWQ6QfaZLEEM8e%2BC4AgP5zvHLEotlYnr8Da17Fgw7UinJlDVItyPb7ZP7P6TYlrRC4ix0GsK%2FucsPkgTr6VTXJ4qT4pO4ao6%2FNitU2n37crESxUTqayhWGFZ2rRDiSNeXPI9TjgrIToL3%2FHmiDn3%2BiRkk0EGbdClNKR82pHfIbhBoU45R8doSWkvXWC1B7spcNS1FzzH&X-Amz-Signature=c378a38a10f95901a642397e407773dad20ef8706c215a9a27c2341041c6ffbc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEJHRZS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOZ3C2Xpz97Gifop6f2rCiDKCagBh9XbDiy1pqViCOHQIgDMffAoMu2droasG%2BOQMpiB%2BbddJ8pFpXAjZ7X%2BXci9Uq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMme%2FjA%2FVfapmFTnqCrcA5%2FIvBMdGBGWS%2F%2FMufbwLbwzRGJJ%2BKKggwpz8sM2wvXeWhiGtVabCY0GVpa6%2FSZJevQfc0EMJmT8pDG41mwXe7w90wFRNoACl8QREZXM95HmSMQzie4IABA3XjMWxGqo4y61IfcQnMonym6uNp5254OaQoPsk%2FxHq0qfHY%2FOW0KvNVlB%2Fqc3KoTJ1Y2kjTb6IyWvdtzYFI%2BtbSPdX9JP6XVxbECEo52lVoiY4LIG3gIDhkx%2FAuiXPPPS47KbfaIfiHnZBLMT5EIBdHqR6yIjiaxB3XCVBC99mAAGQfCe52ZFcbxd9Zvrmyngl3reH3rbqDi1sKcjuUYKVZrKuGQEp64mgbyTF6fZ1UZ0dv5ZogChsSRwKDc3LBG%2FOV4XHb34O7PKEFzIVu9%2FRuag3xPAzdte4qWBVjZhjF5D655z6aCQ0rmeNPLVKoCdG3EXS5kCA1d24AplC41bXCje1%2FSq07bFGwlQHAvtjQM9BRJQpM6IxiM%2FCMgXR4WbWs8EYNYuY%2FYgRddOXMVZ6FCM8ZOuFn5NkrlevH0agOuKdVcMFAsdKMvLRtrQLeQN%2BV%2BnbfUxi7f7DqnxSlYeepTNYtxOSD7OLpLULdeT2C7p6pcV9IXtf6YbjVZa2pGgIOC2MN3O8L0GOqUBvkISjCZbjM0sKdBtAhzyPWQ6QfaZLEEM8e%2BC4AgP5zvHLEotlYnr8Da17Fgw7UinJlDVItyPb7ZP7P6TYlrRC4ix0GsK%2FucsPkgTr6VTXJ4qT4pO4ao6%2FNitU2n37crESxUTqayhWGFZ2rRDiSNeXPI9TjgrIToL3%2FHmiDn3%2BiRkk0EGbdClNKR82pHfIbhBoU45R8doSWkvXWC1B7spcNS1FzzH&X-Amz-Signature=af23debf0750d2821fcd82ae9616f9953b9b0c2e2e71a45cb48e5b96319b6e57&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEJHRZS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOZ3C2Xpz97Gifop6f2rCiDKCagBh9XbDiy1pqViCOHQIgDMffAoMu2droasG%2BOQMpiB%2BbddJ8pFpXAjZ7X%2BXci9Uq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMme%2FjA%2FVfapmFTnqCrcA5%2FIvBMdGBGWS%2F%2FMufbwLbwzRGJJ%2BKKggwpz8sM2wvXeWhiGtVabCY0GVpa6%2FSZJevQfc0EMJmT8pDG41mwXe7w90wFRNoACl8QREZXM95HmSMQzie4IABA3XjMWxGqo4y61IfcQnMonym6uNp5254OaQoPsk%2FxHq0qfHY%2FOW0KvNVlB%2Fqc3KoTJ1Y2kjTb6IyWvdtzYFI%2BtbSPdX9JP6XVxbECEo52lVoiY4LIG3gIDhkx%2FAuiXPPPS47KbfaIfiHnZBLMT5EIBdHqR6yIjiaxB3XCVBC99mAAGQfCe52ZFcbxd9Zvrmyngl3reH3rbqDi1sKcjuUYKVZrKuGQEp64mgbyTF6fZ1UZ0dv5ZogChsSRwKDc3LBG%2FOV4XHb34O7PKEFzIVu9%2FRuag3xPAzdte4qWBVjZhjF5D655z6aCQ0rmeNPLVKoCdG3EXS5kCA1d24AplC41bXCje1%2FSq07bFGwlQHAvtjQM9BRJQpM6IxiM%2FCMgXR4WbWs8EYNYuY%2FYgRddOXMVZ6FCM8ZOuFn5NkrlevH0agOuKdVcMFAsdKMvLRtrQLeQN%2BV%2BnbfUxi7f7DqnxSlYeepTNYtxOSD7OLpLULdeT2C7p6pcV9IXtf6YbjVZa2pGgIOC2MN3O8L0GOqUBvkISjCZbjM0sKdBtAhzyPWQ6QfaZLEEM8e%2BC4AgP5zvHLEotlYnr8Da17Fgw7UinJlDVItyPb7ZP7P6TYlrRC4ix0GsK%2FucsPkgTr6VTXJ4qT4pO4ao6%2FNitU2n37crESxUTqayhWGFZ2rRDiSNeXPI9TjgrIToL3%2FHmiDn3%2BiRkk0EGbdClNKR82pHfIbhBoU45R8doSWkvXWC1B7spcNS1FzzH&X-Amz-Signature=2dc998fb7e23a27f686f4da80505da3105c0fd2d94b876f5685bb6f9b88205ba&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEJHRZS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOZ3C2Xpz97Gifop6f2rCiDKCagBh9XbDiy1pqViCOHQIgDMffAoMu2droasG%2BOQMpiB%2BbddJ8pFpXAjZ7X%2BXci9Uq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMme%2FjA%2FVfapmFTnqCrcA5%2FIvBMdGBGWS%2F%2FMufbwLbwzRGJJ%2BKKggwpz8sM2wvXeWhiGtVabCY0GVpa6%2FSZJevQfc0EMJmT8pDG41mwXe7w90wFRNoACl8QREZXM95HmSMQzie4IABA3XjMWxGqo4y61IfcQnMonym6uNp5254OaQoPsk%2FxHq0qfHY%2FOW0KvNVlB%2Fqc3KoTJ1Y2kjTb6IyWvdtzYFI%2BtbSPdX9JP6XVxbECEo52lVoiY4LIG3gIDhkx%2FAuiXPPPS47KbfaIfiHnZBLMT5EIBdHqR6yIjiaxB3XCVBC99mAAGQfCe52ZFcbxd9Zvrmyngl3reH3rbqDi1sKcjuUYKVZrKuGQEp64mgbyTF6fZ1UZ0dv5ZogChsSRwKDc3LBG%2FOV4XHb34O7PKEFzIVu9%2FRuag3xPAzdte4qWBVjZhjF5D655z6aCQ0rmeNPLVKoCdG3EXS5kCA1d24AplC41bXCje1%2FSq07bFGwlQHAvtjQM9BRJQpM6IxiM%2FCMgXR4WbWs8EYNYuY%2FYgRddOXMVZ6FCM8ZOuFn5NkrlevH0agOuKdVcMFAsdKMvLRtrQLeQN%2BV%2BnbfUxi7f7DqnxSlYeepTNYtxOSD7OLpLULdeT2C7p6pcV9IXtf6YbjVZa2pGgIOC2MN3O8L0GOqUBvkISjCZbjM0sKdBtAhzyPWQ6QfaZLEEM8e%2BC4AgP5zvHLEotlYnr8Da17Fgw7UinJlDVItyPb7ZP7P6TYlrRC4ix0GsK%2FucsPkgTr6VTXJ4qT4pO4ao6%2FNitU2n37crESxUTqayhWGFZ2rRDiSNeXPI9TjgrIToL3%2FHmiDn3%2BiRkk0EGbdClNKR82pHfIbhBoU45R8doSWkvXWC1B7spcNS1FzzH&X-Amz-Signature=901b633d3617171cc7480c46e556fdfb7ad9f8a17a201771a6c34cd1fbfc34c0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
