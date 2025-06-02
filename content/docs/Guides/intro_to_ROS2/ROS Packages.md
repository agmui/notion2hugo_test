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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDHXEJCP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIE5MzhxuSZ%2FclG%2Bo1zRtRsjGMO2gUimQcNRqV%2FgsNoh7AiEA%2BJO%2BUo43DRMiqIC53TCsFmXY5reUpLBO9KMlykSb1LgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLP9oIazXZFFqcV4ircA%2BK0ZRTvTXJ3IqswlAOPEM9PKRmdhpCt8MhYPjAGv7ZNQaGPjoDDk6ipJ65lXhyrQ62NYCzFotLqzd5Vc0k2jfWbakAqRNikLHIu5kFf1zs%2FuyPFpYP8nnt6khvv0ktiRBhf31n7aIAnsvuYs2f6Saj1mT%2Fe9UUCDG6MrOKlokshL8mWrD7XwGEGQ2b7JVEY41Xk0LywZtrxdHIRqObeQYVYljaCb9sVTNjkllqKr%2BG7NX7581mBQzL%2B%2FsQhdPO3%2FoQiyQxy7JJty2DXxK2npaexR2V%2B%2FuZBawZwUxn7THFLpv0LPTBgiQ7Q211J8LT2o4fLqHOEmEo1MEdfciuH1JhuATYP%2Bi8TwSGHQLGbM%2FMXlnzDOdsQzhpUWc6S5rtRPMtaHfgtSZh%2BmL9p34oVy5Wp6j9vKLUjQdEBUru44x3vGLzE8I8vSZGs71O9SlrZrYV%2FSlqd%2FdnquxNrD66HU%2BLufHYLKw79LodIamgonNfpkyVAt9BopFhjXeaswoRiwiNfJ%2FD72fwJ%2FFGOupYtE2p%2FMepkTV8VOVWMlj5qxsDSnPqE9Ga%2BFjyqrJ17NKV94iUBVRYi7SUUULvK8U6bRtquguOsJSn81wOotTUa%2FC1jV%2F4SOMStKI2vKHasMLLi98EGOqUBhl6547%2BqZykXLLleH7oYbO8jEz46qAuZxy0a8GnBg%2BTHEPpEK3R8nuc6mzgKAQzuonHPzT2n1PfBUZ2xG7gFQtpALxG75lIgjhCaAeQWt4KagNMjEMro3zKjrxjK3l1oBwphQPXvtqZ7VdFK2mNDGYejgbwbkOmYTSNQJBHfxPvpBajEgYFm7gz97j%2FXuor2yxeRxJDy%2FiaOrTjhMIDlEluPdzPB&X-Amz-Signature=8e76c8fa13a7de853b342374ef9a1f6d9f1973832b86ae7b198c677d846af28c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDHXEJCP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIE5MzhxuSZ%2FclG%2Bo1zRtRsjGMO2gUimQcNRqV%2FgsNoh7AiEA%2BJO%2BUo43DRMiqIC53TCsFmXY5reUpLBO9KMlykSb1LgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLP9oIazXZFFqcV4ircA%2BK0ZRTvTXJ3IqswlAOPEM9PKRmdhpCt8MhYPjAGv7ZNQaGPjoDDk6ipJ65lXhyrQ62NYCzFotLqzd5Vc0k2jfWbakAqRNikLHIu5kFf1zs%2FuyPFpYP8nnt6khvv0ktiRBhf31n7aIAnsvuYs2f6Saj1mT%2Fe9UUCDG6MrOKlokshL8mWrD7XwGEGQ2b7JVEY41Xk0LywZtrxdHIRqObeQYVYljaCb9sVTNjkllqKr%2BG7NX7581mBQzL%2B%2FsQhdPO3%2FoQiyQxy7JJty2DXxK2npaexR2V%2B%2FuZBawZwUxn7THFLpv0LPTBgiQ7Q211J8LT2o4fLqHOEmEo1MEdfciuH1JhuATYP%2Bi8TwSGHQLGbM%2FMXlnzDOdsQzhpUWc6S5rtRPMtaHfgtSZh%2BmL9p34oVy5Wp6j9vKLUjQdEBUru44x3vGLzE8I8vSZGs71O9SlrZrYV%2FSlqd%2FdnquxNrD66HU%2BLufHYLKw79LodIamgonNfpkyVAt9BopFhjXeaswoRiwiNfJ%2FD72fwJ%2FFGOupYtE2p%2FMepkTV8VOVWMlj5qxsDSnPqE9Ga%2BFjyqrJ17NKV94iUBVRYi7SUUULvK8U6bRtquguOsJSn81wOotTUa%2FC1jV%2F4SOMStKI2vKHasMLLi98EGOqUBhl6547%2BqZykXLLleH7oYbO8jEz46qAuZxy0a8GnBg%2BTHEPpEK3R8nuc6mzgKAQzuonHPzT2n1PfBUZ2xG7gFQtpALxG75lIgjhCaAeQWt4KagNMjEMro3zKjrxjK3l1oBwphQPXvtqZ7VdFK2mNDGYejgbwbkOmYTSNQJBHfxPvpBajEgYFm7gz97j%2FXuor2yxeRxJDy%2FiaOrTjhMIDlEluPdzPB&X-Amz-Signature=9e2639e6c0f469781d28f819fc238ca8796f636607662001b09dbccd704b18a3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDHXEJCP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIE5MzhxuSZ%2FclG%2Bo1zRtRsjGMO2gUimQcNRqV%2FgsNoh7AiEA%2BJO%2BUo43DRMiqIC53TCsFmXY5reUpLBO9KMlykSb1LgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLP9oIazXZFFqcV4ircA%2BK0ZRTvTXJ3IqswlAOPEM9PKRmdhpCt8MhYPjAGv7ZNQaGPjoDDk6ipJ65lXhyrQ62NYCzFotLqzd5Vc0k2jfWbakAqRNikLHIu5kFf1zs%2FuyPFpYP8nnt6khvv0ktiRBhf31n7aIAnsvuYs2f6Saj1mT%2Fe9UUCDG6MrOKlokshL8mWrD7XwGEGQ2b7JVEY41Xk0LywZtrxdHIRqObeQYVYljaCb9sVTNjkllqKr%2BG7NX7581mBQzL%2B%2FsQhdPO3%2FoQiyQxy7JJty2DXxK2npaexR2V%2B%2FuZBawZwUxn7THFLpv0LPTBgiQ7Q211J8LT2o4fLqHOEmEo1MEdfciuH1JhuATYP%2Bi8TwSGHQLGbM%2FMXlnzDOdsQzhpUWc6S5rtRPMtaHfgtSZh%2BmL9p34oVy5Wp6j9vKLUjQdEBUru44x3vGLzE8I8vSZGs71O9SlrZrYV%2FSlqd%2FdnquxNrD66HU%2BLufHYLKw79LodIamgonNfpkyVAt9BopFhjXeaswoRiwiNfJ%2FD72fwJ%2FFGOupYtE2p%2FMepkTV8VOVWMlj5qxsDSnPqE9Ga%2BFjyqrJ17NKV94iUBVRYi7SUUULvK8U6bRtquguOsJSn81wOotTUa%2FC1jV%2F4SOMStKI2vKHasMLLi98EGOqUBhl6547%2BqZykXLLleH7oYbO8jEz46qAuZxy0a8GnBg%2BTHEPpEK3R8nuc6mzgKAQzuonHPzT2n1PfBUZ2xG7gFQtpALxG75lIgjhCaAeQWt4KagNMjEMro3zKjrxjK3l1oBwphQPXvtqZ7VdFK2mNDGYejgbwbkOmYTSNQJBHfxPvpBajEgYFm7gz97j%2FXuor2yxeRxJDy%2FiaOrTjhMIDlEluPdzPB&X-Amz-Signature=87a21d3fb51fbbfd527844f1ad3faaff23c3e9466fdeaa818d433df852375066&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDHXEJCP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIE5MzhxuSZ%2FclG%2Bo1zRtRsjGMO2gUimQcNRqV%2FgsNoh7AiEA%2BJO%2BUo43DRMiqIC53TCsFmXY5reUpLBO9KMlykSb1LgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLP9oIazXZFFqcV4ircA%2BK0ZRTvTXJ3IqswlAOPEM9PKRmdhpCt8MhYPjAGv7ZNQaGPjoDDk6ipJ65lXhyrQ62NYCzFotLqzd5Vc0k2jfWbakAqRNikLHIu5kFf1zs%2FuyPFpYP8nnt6khvv0ktiRBhf31n7aIAnsvuYs2f6Saj1mT%2Fe9UUCDG6MrOKlokshL8mWrD7XwGEGQ2b7JVEY41Xk0LywZtrxdHIRqObeQYVYljaCb9sVTNjkllqKr%2BG7NX7581mBQzL%2B%2FsQhdPO3%2FoQiyQxy7JJty2DXxK2npaexR2V%2B%2FuZBawZwUxn7THFLpv0LPTBgiQ7Q211J8LT2o4fLqHOEmEo1MEdfciuH1JhuATYP%2Bi8TwSGHQLGbM%2FMXlnzDOdsQzhpUWc6S5rtRPMtaHfgtSZh%2BmL9p34oVy5Wp6j9vKLUjQdEBUru44x3vGLzE8I8vSZGs71O9SlrZrYV%2FSlqd%2FdnquxNrD66HU%2BLufHYLKw79LodIamgonNfpkyVAt9BopFhjXeaswoRiwiNfJ%2FD72fwJ%2FFGOupYtE2p%2FMepkTV8VOVWMlj5qxsDSnPqE9Ga%2BFjyqrJ17NKV94iUBVRYi7SUUULvK8U6bRtquguOsJSn81wOotTUa%2FC1jV%2F4SOMStKI2vKHasMLLi98EGOqUBhl6547%2BqZykXLLleH7oYbO8jEz46qAuZxy0a8GnBg%2BTHEPpEK3R8nuc6mzgKAQzuonHPzT2n1PfBUZ2xG7gFQtpALxG75lIgjhCaAeQWt4KagNMjEMro3zKjrxjK3l1oBwphQPXvtqZ7VdFK2mNDGYejgbwbkOmYTSNQJBHfxPvpBajEgYFm7gz97j%2FXuor2yxeRxJDy%2FiaOrTjhMIDlEluPdzPB&X-Amz-Signature=39073fd2fea4cdda9b6cf9e479e525648c3b10669b34c7f808efdba7275a2811&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDHXEJCP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIE5MzhxuSZ%2FclG%2Bo1zRtRsjGMO2gUimQcNRqV%2FgsNoh7AiEA%2BJO%2BUo43DRMiqIC53TCsFmXY5reUpLBO9KMlykSb1LgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLP9oIazXZFFqcV4ircA%2BK0ZRTvTXJ3IqswlAOPEM9PKRmdhpCt8MhYPjAGv7ZNQaGPjoDDk6ipJ65lXhyrQ62NYCzFotLqzd5Vc0k2jfWbakAqRNikLHIu5kFf1zs%2FuyPFpYP8nnt6khvv0ktiRBhf31n7aIAnsvuYs2f6Saj1mT%2Fe9UUCDG6MrOKlokshL8mWrD7XwGEGQ2b7JVEY41Xk0LywZtrxdHIRqObeQYVYljaCb9sVTNjkllqKr%2BG7NX7581mBQzL%2B%2FsQhdPO3%2FoQiyQxy7JJty2DXxK2npaexR2V%2B%2FuZBawZwUxn7THFLpv0LPTBgiQ7Q211J8LT2o4fLqHOEmEo1MEdfciuH1JhuATYP%2Bi8TwSGHQLGbM%2FMXlnzDOdsQzhpUWc6S5rtRPMtaHfgtSZh%2BmL9p34oVy5Wp6j9vKLUjQdEBUru44x3vGLzE8I8vSZGs71O9SlrZrYV%2FSlqd%2FdnquxNrD66HU%2BLufHYLKw79LodIamgonNfpkyVAt9BopFhjXeaswoRiwiNfJ%2FD72fwJ%2FFGOupYtE2p%2FMepkTV8VOVWMlj5qxsDSnPqE9Ga%2BFjyqrJ17NKV94iUBVRYi7SUUULvK8U6bRtquguOsJSn81wOotTUa%2FC1jV%2F4SOMStKI2vKHasMLLi98EGOqUBhl6547%2BqZykXLLleH7oYbO8jEz46qAuZxy0a8GnBg%2BTHEPpEK3R8nuc6mzgKAQzuonHPzT2n1PfBUZ2xG7gFQtpALxG75lIgjhCaAeQWt4KagNMjEMro3zKjrxjK3l1oBwphQPXvtqZ7VdFK2mNDGYejgbwbkOmYTSNQJBHfxPvpBajEgYFm7gz97j%2FXuor2yxeRxJDy%2FiaOrTjhMIDlEluPdzPB&X-Amz-Signature=3eb0952b0da3dc723fe56e4a7851459d952094aa57615c77ac401096bb793b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDHXEJCP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIE5MzhxuSZ%2FclG%2Bo1zRtRsjGMO2gUimQcNRqV%2FgsNoh7AiEA%2BJO%2BUo43DRMiqIC53TCsFmXY5reUpLBO9KMlykSb1LgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLP9oIazXZFFqcV4ircA%2BK0ZRTvTXJ3IqswlAOPEM9PKRmdhpCt8MhYPjAGv7ZNQaGPjoDDk6ipJ65lXhyrQ62NYCzFotLqzd5Vc0k2jfWbakAqRNikLHIu5kFf1zs%2FuyPFpYP8nnt6khvv0ktiRBhf31n7aIAnsvuYs2f6Saj1mT%2Fe9UUCDG6MrOKlokshL8mWrD7XwGEGQ2b7JVEY41Xk0LywZtrxdHIRqObeQYVYljaCb9sVTNjkllqKr%2BG7NX7581mBQzL%2B%2FsQhdPO3%2FoQiyQxy7JJty2DXxK2npaexR2V%2B%2FuZBawZwUxn7THFLpv0LPTBgiQ7Q211J8LT2o4fLqHOEmEo1MEdfciuH1JhuATYP%2Bi8TwSGHQLGbM%2FMXlnzDOdsQzhpUWc6S5rtRPMtaHfgtSZh%2BmL9p34oVy5Wp6j9vKLUjQdEBUru44x3vGLzE8I8vSZGs71O9SlrZrYV%2FSlqd%2FdnquxNrD66HU%2BLufHYLKw79LodIamgonNfpkyVAt9BopFhjXeaswoRiwiNfJ%2FD72fwJ%2FFGOupYtE2p%2FMepkTV8VOVWMlj5qxsDSnPqE9Ga%2BFjyqrJ17NKV94iUBVRYi7SUUULvK8U6bRtquguOsJSn81wOotTUa%2FC1jV%2F4SOMStKI2vKHasMLLi98EGOqUBhl6547%2BqZykXLLleH7oYbO8jEz46qAuZxy0a8GnBg%2BTHEPpEK3R8nuc6mzgKAQzuonHPzT2n1PfBUZ2xG7gFQtpALxG75lIgjhCaAeQWt4KagNMjEMro3zKjrxjK3l1oBwphQPXvtqZ7VdFK2mNDGYejgbwbkOmYTSNQJBHfxPvpBajEgYFm7gz97j%2FXuor2yxeRxJDy%2FiaOrTjhMIDlEluPdzPB&X-Amz-Signature=5c2c59743f9b84b66f6567ae148de533c03257c0689b797f02c46bd0ad695ff7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDHXEJCP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIE5MzhxuSZ%2FclG%2Bo1zRtRsjGMO2gUimQcNRqV%2FgsNoh7AiEA%2BJO%2BUo43DRMiqIC53TCsFmXY5reUpLBO9KMlykSb1LgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLP9oIazXZFFqcV4ircA%2BK0ZRTvTXJ3IqswlAOPEM9PKRmdhpCt8MhYPjAGv7ZNQaGPjoDDk6ipJ65lXhyrQ62NYCzFotLqzd5Vc0k2jfWbakAqRNikLHIu5kFf1zs%2FuyPFpYP8nnt6khvv0ktiRBhf31n7aIAnsvuYs2f6Saj1mT%2Fe9UUCDG6MrOKlokshL8mWrD7XwGEGQ2b7JVEY41Xk0LywZtrxdHIRqObeQYVYljaCb9sVTNjkllqKr%2BG7NX7581mBQzL%2B%2FsQhdPO3%2FoQiyQxy7JJty2DXxK2npaexR2V%2B%2FuZBawZwUxn7THFLpv0LPTBgiQ7Q211J8LT2o4fLqHOEmEo1MEdfciuH1JhuATYP%2Bi8TwSGHQLGbM%2FMXlnzDOdsQzhpUWc6S5rtRPMtaHfgtSZh%2BmL9p34oVy5Wp6j9vKLUjQdEBUru44x3vGLzE8I8vSZGs71O9SlrZrYV%2FSlqd%2FdnquxNrD66HU%2BLufHYLKw79LodIamgonNfpkyVAt9BopFhjXeaswoRiwiNfJ%2FD72fwJ%2FFGOupYtE2p%2FMepkTV8VOVWMlj5qxsDSnPqE9Ga%2BFjyqrJ17NKV94iUBVRYi7SUUULvK8U6bRtquguOsJSn81wOotTUa%2FC1jV%2F4SOMStKI2vKHasMLLi98EGOqUBhl6547%2BqZykXLLleH7oYbO8jEz46qAuZxy0a8GnBg%2BTHEPpEK3R8nuc6mzgKAQzuonHPzT2n1PfBUZ2xG7gFQtpALxG75lIgjhCaAeQWt4KagNMjEMro3zKjrxjK3l1oBwphQPXvtqZ7VdFK2mNDGYejgbwbkOmYTSNQJBHfxPvpBajEgYFm7gz97j%2FXuor2yxeRxJDy%2FiaOrTjhMIDlEluPdzPB&X-Amz-Signature=e4e4ae3c74b8f7f3bff4780c67044a2409553414ef390ad2a425279513c278b4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
