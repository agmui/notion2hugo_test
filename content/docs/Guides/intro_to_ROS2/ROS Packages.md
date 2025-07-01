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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5R4EBN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyu165nBRTHpoWXzkPEsLRQotxJRAiPQMqQ2NJ76M2RQIged%2FJ5TyNlJx9GZAZ71ZJLuWccVLtUjWz62Cbs9r6egAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGa4O2sV8itUdFyJ6yrcA%2BOUWvxxMpVDNTA5SrgUfrGwFlCEB%2BUDOmGspbG1%2FB9UTyVXrDfmN7L7zLD49b5veMmkxzBbp%2Bo1YSgskHJ6KegJY4%2FXmYiekHYlcuTkbcpQe4l8l%2BMc1Fpzx2y%2FOO0xifUkGBrtQBS2wsdUGa6N%2BBxgu85vMYNV9WqAyfYTqdMO3t2%2B72Z2U3XOfH9pahZkmMNF55k4WKmhKIAs7mzFgcUfq0Ztc9Jc455zsqEdz8Np%2BlEk6EFBqi3JEDtmUW73ZWtXnQw8VtNCBJmpEeW5TEAwbrOIWdAUE%2F2%2BpFsR7q2%2FLhfjiznTab1QpKUll6EP6lVLCTFWgg28w91TFsR0D31xFR7gixfAHAc%2F%2BpTCIZ%2BBufapSx6VcHo79wOwYD%2BGGVfiZ4nTgX70mKKh9cQWAz7WX3tP2FcsR2VMTsnh%2FKSvdWVEsYXPVdg%2Biw0CmYaUUtqL3Pjyvpv1VqZq%2BzauBb%2BzIgifPh3TKZP21FWq34oLJUpVs9muS4QDWzeNPnP5oNTgPimQk4L7I4v1kZkcwEDyQT%2FDgStsxIi3F5ZVdCKY19f4neZVh9ooSEPh0nBhE3TWUsvZg0ZI1WmknkGIkTvtPUQ8IybyexC37Ws4Un1i5rTeQTC5QQp10DsBMM%2FMjMMGOqUBbOqLGjFeQNnrYSnmusVHvdlH%2FDWfMuZ0v7A85NvlhlOZRW6QiMWBTXttNWtyqkiLh13tG3H79HQIzAlsYnjyOqLeriHtA4wfd7%2FDTOw0PYdjFyEHUQyUAvoFbV%2FD47LPMyZKto%2FBqPq3lLG0UKpUAhfyjEBLsWNVMs7rw2e4WWWfdg%2F%2BgUFByt5sjk3%2Fp7LlG6VpbOdL2RgBTzC9Jd3OZAgs8SsB&X-Amz-Signature=2d2f3fa46c4af1521f98a881a75b77d24c649ebf327fb8e97e4bbe958a7182a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5R4EBN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyu165nBRTHpoWXzkPEsLRQotxJRAiPQMqQ2NJ76M2RQIged%2FJ5TyNlJx9GZAZ71ZJLuWccVLtUjWz62Cbs9r6egAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGa4O2sV8itUdFyJ6yrcA%2BOUWvxxMpVDNTA5SrgUfrGwFlCEB%2BUDOmGspbG1%2FB9UTyVXrDfmN7L7zLD49b5veMmkxzBbp%2Bo1YSgskHJ6KegJY4%2FXmYiekHYlcuTkbcpQe4l8l%2BMc1Fpzx2y%2FOO0xifUkGBrtQBS2wsdUGa6N%2BBxgu85vMYNV9WqAyfYTqdMO3t2%2B72Z2U3XOfH9pahZkmMNF55k4WKmhKIAs7mzFgcUfq0Ztc9Jc455zsqEdz8Np%2BlEk6EFBqi3JEDtmUW73ZWtXnQw8VtNCBJmpEeW5TEAwbrOIWdAUE%2F2%2BpFsR7q2%2FLhfjiznTab1QpKUll6EP6lVLCTFWgg28w91TFsR0D31xFR7gixfAHAc%2F%2BpTCIZ%2BBufapSx6VcHo79wOwYD%2BGGVfiZ4nTgX70mKKh9cQWAz7WX3tP2FcsR2VMTsnh%2FKSvdWVEsYXPVdg%2Biw0CmYaUUtqL3Pjyvpv1VqZq%2BzauBb%2BzIgifPh3TKZP21FWq34oLJUpVs9muS4QDWzeNPnP5oNTgPimQk4L7I4v1kZkcwEDyQT%2FDgStsxIi3F5ZVdCKY19f4neZVh9ooSEPh0nBhE3TWUsvZg0ZI1WmknkGIkTvtPUQ8IybyexC37Ws4Un1i5rTeQTC5QQp10DsBMM%2FMjMMGOqUBbOqLGjFeQNnrYSnmusVHvdlH%2FDWfMuZ0v7A85NvlhlOZRW6QiMWBTXttNWtyqkiLh13tG3H79HQIzAlsYnjyOqLeriHtA4wfd7%2FDTOw0PYdjFyEHUQyUAvoFbV%2FD47LPMyZKto%2FBqPq3lLG0UKpUAhfyjEBLsWNVMs7rw2e4WWWfdg%2F%2BgUFByt5sjk3%2Fp7LlG6VpbOdL2RgBTzC9Jd3OZAgs8SsB&X-Amz-Signature=568484a2b7689da0c5947dd94656a4a18359c534accaee32b8355f5c88605532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5R4EBN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyu165nBRTHpoWXzkPEsLRQotxJRAiPQMqQ2NJ76M2RQIged%2FJ5TyNlJx9GZAZ71ZJLuWccVLtUjWz62Cbs9r6egAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGa4O2sV8itUdFyJ6yrcA%2BOUWvxxMpVDNTA5SrgUfrGwFlCEB%2BUDOmGspbG1%2FB9UTyVXrDfmN7L7zLD49b5veMmkxzBbp%2Bo1YSgskHJ6KegJY4%2FXmYiekHYlcuTkbcpQe4l8l%2BMc1Fpzx2y%2FOO0xifUkGBrtQBS2wsdUGa6N%2BBxgu85vMYNV9WqAyfYTqdMO3t2%2B72Z2U3XOfH9pahZkmMNF55k4WKmhKIAs7mzFgcUfq0Ztc9Jc455zsqEdz8Np%2BlEk6EFBqi3JEDtmUW73ZWtXnQw8VtNCBJmpEeW5TEAwbrOIWdAUE%2F2%2BpFsR7q2%2FLhfjiznTab1QpKUll6EP6lVLCTFWgg28w91TFsR0D31xFR7gixfAHAc%2F%2BpTCIZ%2BBufapSx6VcHo79wOwYD%2BGGVfiZ4nTgX70mKKh9cQWAz7WX3tP2FcsR2VMTsnh%2FKSvdWVEsYXPVdg%2Biw0CmYaUUtqL3Pjyvpv1VqZq%2BzauBb%2BzIgifPh3TKZP21FWq34oLJUpVs9muS4QDWzeNPnP5oNTgPimQk4L7I4v1kZkcwEDyQT%2FDgStsxIi3F5ZVdCKY19f4neZVh9ooSEPh0nBhE3TWUsvZg0ZI1WmknkGIkTvtPUQ8IybyexC37Ws4Un1i5rTeQTC5QQp10DsBMM%2FMjMMGOqUBbOqLGjFeQNnrYSnmusVHvdlH%2FDWfMuZ0v7A85NvlhlOZRW6QiMWBTXttNWtyqkiLh13tG3H79HQIzAlsYnjyOqLeriHtA4wfd7%2FDTOw0PYdjFyEHUQyUAvoFbV%2FD47LPMyZKto%2FBqPq3lLG0UKpUAhfyjEBLsWNVMs7rw2e4WWWfdg%2F%2BgUFByt5sjk3%2Fp7LlG6VpbOdL2RgBTzC9Jd3OZAgs8SsB&X-Amz-Signature=5a3fd607e43b480ba0e5a61a8e2c6f2da01f99b50823fe2928046108c4ee110b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5R4EBN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyu165nBRTHpoWXzkPEsLRQotxJRAiPQMqQ2NJ76M2RQIged%2FJ5TyNlJx9GZAZ71ZJLuWccVLtUjWz62Cbs9r6egAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGa4O2sV8itUdFyJ6yrcA%2BOUWvxxMpVDNTA5SrgUfrGwFlCEB%2BUDOmGspbG1%2FB9UTyVXrDfmN7L7zLD49b5veMmkxzBbp%2Bo1YSgskHJ6KegJY4%2FXmYiekHYlcuTkbcpQe4l8l%2BMc1Fpzx2y%2FOO0xifUkGBrtQBS2wsdUGa6N%2BBxgu85vMYNV9WqAyfYTqdMO3t2%2B72Z2U3XOfH9pahZkmMNF55k4WKmhKIAs7mzFgcUfq0Ztc9Jc455zsqEdz8Np%2BlEk6EFBqi3JEDtmUW73ZWtXnQw8VtNCBJmpEeW5TEAwbrOIWdAUE%2F2%2BpFsR7q2%2FLhfjiznTab1QpKUll6EP6lVLCTFWgg28w91TFsR0D31xFR7gixfAHAc%2F%2BpTCIZ%2BBufapSx6VcHo79wOwYD%2BGGVfiZ4nTgX70mKKh9cQWAz7WX3tP2FcsR2VMTsnh%2FKSvdWVEsYXPVdg%2Biw0CmYaUUtqL3Pjyvpv1VqZq%2BzauBb%2BzIgifPh3TKZP21FWq34oLJUpVs9muS4QDWzeNPnP5oNTgPimQk4L7I4v1kZkcwEDyQT%2FDgStsxIi3F5ZVdCKY19f4neZVh9ooSEPh0nBhE3TWUsvZg0ZI1WmknkGIkTvtPUQ8IybyexC37Ws4Un1i5rTeQTC5QQp10DsBMM%2FMjMMGOqUBbOqLGjFeQNnrYSnmusVHvdlH%2FDWfMuZ0v7A85NvlhlOZRW6QiMWBTXttNWtyqkiLh13tG3H79HQIzAlsYnjyOqLeriHtA4wfd7%2FDTOw0PYdjFyEHUQyUAvoFbV%2FD47LPMyZKto%2FBqPq3lLG0UKpUAhfyjEBLsWNVMs7rw2e4WWWfdg%2F%2BgUFByt5sjk3%2Fp7LlG6VpbOdL2RgBTzC9Jd3OZAgs8SsB&X-Amz-Signature=0ea8f637736932523e0408ba5f6ad8a452daa1eef101512bd15a9ff7e651e3b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5R4EBN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyu165nBRTHpoWXzkPEsLRQotxJRAiPQMqQ2NJ76M2RQIged%2FJ5TyNlJx9GZAZ71ZJLuWccVLtUjWz62Cbs9r6egAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGa4O2sV8itUdFyJ6yrcA%2BOUWvxxMpVDNTA5SrgUfrGwFlCEB%2BUDOmGspbG1%2FB9UTyVXrDfmN7L7zLD49b5veMmkxzBbp%2Bo1YSgskHJ6KegJY4%2FXmYiekHYlcuTkbcpQe4l8l%2BMc1Fpzx2y%2FOO0xifUkGBrtQBS2wsdUGa6N%2BBxgu85vMYNV9WqAyfYTqdMO3t2%2B72Z2U3XOfH9pahZkmMNF55k4WKmhKIAs7mzFgcUfq0Ztc9Jc455zsqEdz8Np%2BlEk6EFBqi3JEDtmUW73ZWtXnQw8VtNCBJmpEeW5TEAwbrOIWdAUE%2F2%2BpFsR7q2%2FLhfjiznTab1QpKUll6EP6lVLCTFWgg28w91TFsR0D31xFR7gixfAHAc%2F%2BpTCIZ%2BBufapSx6VcHo79wOwYD%2BGGVfiZ4nTgX70mKKh9cQWAz7WX3tP2FcsR2VMTsnh%2FKSvdWVEsYXPVdg%2Biw0CmYaUUtqL3Pjyvpv1VqZq%2BzauBb%2BzIgifPh3TKZP21FWq34oLJUpVs9muS4QDWzeNPnP5oNTgPimQk4L7I4v1kZkcwEDyQT%2FDgStsxIi3F5ZVdCKY19f4neZVh9ooSEPh0nBhE3TWUsvZg0ZI1WmknkGIkTvtPUQ8IybyexC37Ws4Un1i5rTeQTC5QQp10DsBMM%2FMjMMGOqUBbOqLGjFeQNnrYSnmusVHvdlH%2FDWfMuZ0v7A85NvlhlOZRW6QiMWBTXttNWtyqkiLh13tG3H79HQIzAlsYnjyOqLeriHtA4wfd7%2FDTOw0PYdjFyEHUQyUAvoFbV%2FD47LPMyZKto%2FBqPq3lLG0UKpUAhfyjEBLsWNVMs7rw2e4WWWfdg%2F%2BgUFByt5sjk3%2Fp7LlG6VpbOdL2RgBTzC9Jd3OZAgs8SsB&X-Amz-Signature=2f2e62ee687f09e5083d028f82afc27a9f212754de0953c72f61ca9ef3d52220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5R4EBN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyu165nBRTHpoWXzkPEsLRQotxJRAiPQMqQ2NJ76M2RQIged%2FJ5TyNlJx9GZAZ71ZJLuWccVLtUjWz62Cbs9r6egAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGa4O2sV8itUdFyJ6yrcA%2BOUWvxxMpVDNTA5SrgUfrGwFlCEB%2BUDOmGspbG1%2FB9UTyVXrDfmN7L7zLD49b5veMmkxzBbp%2Bo1YSgskHJ6KegJY4%2FXmYiekHYlcuTkbcpQe4l8l%2BMc1Fpzx2y%2FOO0xifUkGBrtQBS2wsdUGa6N%2BBxgu85vMYNV9WqAyfYTqdMO3t2%2B72Z2U3XOfH9pahZkmMNF55k4WKmhKIAs7mzFgcUfq0Ztc9Jc455zsqEdz8Np%2BlEk6EFBqi3JEDtmUW73ZWtXnQw8VtNCBJmpEeW5TEAwbrOIWdAUE%2F2%2BpFsR7q2%2FLhfjiznTab1QpKUll6EP6lVLCTFWgg28w91TFsR0D31xFR7gixfAHAc%2F%2BpTCIZ%2BBufapSx6VcHo79wOwYD%2BGGVfiZ4nTgX70mKKh9cQWAz7WX3tP2FcsR2VMTsnh%2FKSvdWVEsYXPVdg%2Biw0CmYaUUtqL3Pjyvpv1VqZq%2BzauBb%2BzIgifPh3TKZP21FWq34oLJUpVs9muS4QDWzeNPnP5oNTgPimQk4L7I4v1kZkcwEDyQT%2FDgStsxIi3F5ZVdCKY19f4neZVh9ooSEPh0nBhE3TWUsvZg0ZI1WmknkGIkTvtPUQ8IybyexC37Ws4Un1i5rTeQTC5QQp10DsBMM%2FMjMMGOqUBbOqLGjFeQNnrYSnmusVHvdlH%2FDWfMuZ0v7A85NvlhlOZRW6QiMWBTXttNWtyqkiLh13tG3H79HQIzAlsYnjyOqLeriHtA4wfd7%2FDTOw0PYdjFyEHUQyUAvoFbV%2FD47LPMyZKto%2FBqPq3lLG0UKpUAhfyjEBLsWNVMs7rw2e4WWWfdg%2F%2BgUFByt5sjk3%2Fp7LlG6VpbOdL2RgBTzC9Jd3OZAgs8SsB&X-Amz-Signature=b574a628204b496eea4b1559b026a278387ce025756b23f7f1ea03b058c0ce6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5R4EBN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyu165nBRTHpoWXzkPEsLRQotxJRAiPQMqQ2NJ76M2RQIged%2FJ5TyNlJx9GZAZ71ZJLuWccVLtUjWz62Cbs9r6egAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGa4O2sV8itUdFyJ6yrcA%2BOUWvxxMpVDNTA5SrgUfrGwFlCEB%2BUDOmGspbG1%2FB9UTyVXrDfmN7L7zLD49b5veMmkxzBbp%2Bo1YSgskHJ6KegJY4%2FXmYiekHYlcuTkbcpQe4l8l%2BMc1Fpzx2y%2FOO0xifUkGBrtQBS2wsdUGa6N%2BBxgu85vMYNV9WqAyfYTqdMO3t2%2B72Z2U3XOfH9pahZkmMNF55k4WKmhKIAs7mzFgcUfq0Ztc9Jc455zsqEdz8Np%2BlEk6EFBqi3JEDtmUW73ZWtXnQw8VtNCBJmpEeW5TEAwbrOIWdAUE%2F2%2BpFsR7q2%2FLhfjiznTab1QpKUll6EP6lVLCTFWgg28w91TFsR0D31xFR7gixfAHAc%2F%2BpTCIZ%2BBufapSx6VcHo79wOwYD%2BGGVfiZ4nTgX70mKKh9cQWAz7WX3tP2FcsR2VMTsnh%2FKSvdWVEsYXPVdg%2Biw0CmYaUUtqL3Pjyvpv1VqZq%2BzauBb%2BzIgifPh3TKZP21FWq34oLJUpVs9muS4QDWzeNPnP5oNTgPimQk4L7I4v1kZkcwEDyQT%2FDgStsxIi3F5ZVdCKY19f4neZVh9ooSEPh0nBhE3TWUsvZg0ZI1WmknkGIkTvtPUQ8IybyexC37Ws4Un1i5rTeQTC5QQp10DsBMM%2FMjMMGOqUBbOqLGjFeQNnrYSnmusVHvdlH%2FDWfMuZ0v7A85NvlhlOZRW6QiMWBTXttNWtyqkiLh13tG3H79HQIzAlsYnjyOqLeriHtA4wfd7%2FDTOw0PYdjFyEHUQyUAvoFbV%2FD47LPMyZKto%2FBqPq3lLG0UKpUAhfyjEBLsWNVMs7rw2e4WWWfdg%2F%2BgUFByt5sjk3%2Fp7LlG6VpbOdL2RgBTzC9Jd3OZAgs8SsB&X-Amz-Signature=317fada2452044ea4c4101328c96cf3cde2f7d13cf9ed754ab22bedb101b74a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
