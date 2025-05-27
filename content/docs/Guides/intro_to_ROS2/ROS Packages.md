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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C4YMVDA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd3IEunl70xjaYJtcIqhddtMeftXbiz8mUQySb11uuwQIgAVGn4zXPBssYVSbHPUr%2BfZ66UDG%2Fvx8%2B5rAo6BY6eVcq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDLqclECkzmRarbg6YircAykSos9VpsdKqMvfBo9VvDhCPVRZngAhEQ2P0SijpqC2PSFj%2FYXIb90IJKwQ8Gtp1TbCuvUu8kt1xE2po0VzRdTJZzi6Z%2Fkbaz4yr9qgAdjn9WgRh06jBKD8%2FM9Dpswy9ONK1CuRscf10ST%2BezI8IbpE6qBfXJNWyDM9P7pFYdhWlJLiVCTMl%2FqNEi8z5tJ4F3UV1EZYtuWRoN6nGaSf1PgR955vJkOKscq%2FVI6w8SS0UbSRswOQg8DLvw3qjY4RNugmnVy9q2cnBdRG%2FB%2BRPKaC5BqAKpykh5B2i7KH2UUtxkx9Dbcfqm6UeeHoK7bFfaPNKrLVUEWWaxtC0FjaNaGEkRgj5%2FHaZrzchP%2BoasqsmCvsv5FEif2Cc%2B7mXssANghUD4kQks2F7tpyeeTB7JYOjqTq0G97F1yrRevOs5PEC6kn9gUyElUE%2FyFbocA5jc2UHg4NpVU4FAGUGLPeKpYz6lcllT7XESZ%2FI99LZyBUn%2FxXpKKBi8b8LWpVRIvST3XBX9HmBSR%2FhX%2FJZFGxdilEo%2FdaFHFUu6p64guqCeajXc4XzMa6A%2BUdWfOpCJp6KXq7X8jML%2FoH4M6OZUPq1inOVYgQpJBk8Cd5UrHSOZCDxKuWTbc3l1nk3GZJMKmr1sEGOqUB2Fd%2B5YZyheUe26cTyKrWJVRtPnuLjDkSquZmAt1GbpQ9AQxsMiA3xPkIzyNqhLcpMsiYFbd%2Fbfv60ohT%2FK5Cl9NpMgijlzKnGKcq0949ZuTgpekGd9XUFL%2BOwe9MdYjESXfc3oIumK4m6PYxIGLN3TXVev4Xkg1VFb2pYsanrDaYyPRU8Lr8gVnbUpsDlSPkStNc3JNkE2McfaJq7OD%2FV4zaa9qX&X-Amz-Signature=4a2f205c17c14f68f1d41f85e9bfb75a6c03e165012c7c245876e919ba20200e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C4YMVDA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd3IEunl70xjaYJtcIqhddtMeftXbiz8mUQySb11uuwQIgAVGn4zXPBssYVSbHPUr%2BfZ66UDG%2Fvx8%2B5rAo6BY6eVcq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDLqclECkzmRarbg6YircAykSos9VpsdKqMvfBo9VvDhCPVRZngAhEQ2P0SijpqC2PSFj%2FYXIb90IJKwQ8Gtp1TbCuvUu8kt1xE2po0VzRdTJZzi6Z%2Fkbaz4yr9qgAdjn9WgRh06jBKD8%2FM9Dpswy9ONK1CuRscf10ST%2BezI8IbpE6qBfXJNWyDM9P7pFYdhWlJLiVCTMl%2FqNEi8z5tJ4F3UV1EZYtuWRoN6nGaSf1PgR955vJkOKscq%2FVI6w8SS0UbSRswOQg8DLvw3qjY4RNugmnVy9q2cnBdRG%2FB%2BRPKaC5BqAKpykh5B2i7KH2UUtxkx9Dbcfqm6UeeHoK7bFfaPNKrLVUEWWaxtC0FjaNaGEkRgj5%2FHaZrzchP%2BoasqsmCvsv5FEif2Cc%2B7mXssANghUD4kQks2F7tpyeeTB7JYOjqTq0G97F1yrRevOs5PEC6kn9gUyElUE%2FyFbocA5jc2UHg4NpVU4FAGUGLPeKpYz6lcllT7XESZ%2FI99LZyBUn%2FxXpKKBi8b8LWpVRIvST3XBX9HmBSR%2FhX%2FJZFGxdilEo%2FdaFHFUu6p64guqCeajXc4XzMa6A%2BUdWfOpCJp6KXq7X8jML%2FoH4M6OZUPq1inOVYgQpJBk8Cd5UrHSOZCDxKuWTbc3l1nk3GZJMKmr1sEGOqUB2Fd%2B5YZyheUe26cTyKrWJVRtPnuLjDkSquZmAt1GbpQ9AQxsMiA3xPkIzyNqhLcpMsiYFbd%2Fbfv60ohT%2FK5Cl9NpMgijlzKnGKcq0949ZuTgpekGd9XUFL%2BOwe9MdYjESXfc3oIumK4m6PYxIGLN3TXVev4Xkg1VFb2pYsanrDaYyPRU8Lr8gVnbUpsDlSPkStNc3JNkE2McfaJq7OD%2FV4zaa9qX&X-Amz-Signature=64179a80e6ec839d4f7db3c4c367ae74e8ece3c0976c853a6d5ac2204b26e4e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C4YMVDA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd3IEunl70xjaYJtcIqhddtMeftXbiz8mUQySb11uuwQIgAVGn4zXPBssYVSbHPUr%2BfZ66UDG%2Fvx8%2B5rAo6BY6eVcq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDLqclECkzmRarbg6YircAykSos9VpsdKqMvfBo9VvDhCPVRZngAhEQ2P0SijpqC2PSFj%2FYXIb90IJKwQ8Gtp1TbCuvUu8kt1xE2po0VzRdTJZzi6Z%2Fkbaz4yr9qgAdjn9WgRh06jBKD8%2FM9Dpswy9ONK1CuRscf10ST%2BezI8IbpE6qBfXJNWyDM9P7pFYdhWlJLiVCTMl%2FqNEi8z5tJ4F3UV1EZYtuWRoN6nGaSf1PgR955vJkOKscq%2FVI6w8SS0UbSRswOQg8DLvw3qjY4RNugmnVy9q2cnBdRG%2FB%2BRPKaC5BqAKpykh5B2i7KH2UUtxkx9Dbcfqm6UeeHoK7bFfaPNKrLVUEWWaxtC0FjaNaGEkRgj5%2FHaZrzchP%2BoasqsmCvsv5FEif2Cc%2B7mXssANghUD4kQks2F7tpyeeTB7JYOjqTq0G97F1yrRevOs5PEC6kn9gUyElUE%2FyFbocA5jc2UHg4NpVU4FAGUGLPeKpYz6lcllT7XESZ%2FI99LZyBUn%2FxXpKKBi8b8LWpVRIvST3XBX9HmBSR%2FhX%2FJZFGxdilEo%2FdaFHFUu6p64guqCeajXc4XzMa6A%2BUdWfOpCJp6KXq7X8jML%2FoH4M6OZUPq1inOVYgQpJBk8Cd5UrHSOZCDxKuWTbc3l1nk3GZJMKmr1sEGOqUB2Fd%2B5YZyheUe26cTyKrWJVRtPnuLjDkSquZmAt1GbpQ9AQxsMiA3xPkIzyNqhLcpMsiYFbd%2Fbfv60ohT%2FK5Cl9NpMgijlzKnGKcq0949ZuTgpekGd9XUFL%2BOwe9MdYjESXfc3oIumK4m6PYxIGLN3TXVev4Xkg1VFb2pYsanrDaYyPRU8Lr8gVnbUpsDlSPkStNc3JNkE2McfaJq7OD%2FV4zaa9qX&X-Amz-Signature=6dc0ea97f4567c6c086281284624a17bc276e1ea1ab6ef7b47f5db2d31a59ff9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C4YMVDA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd3IEunl70xjaYJtcIqhddtMeftXbiz8mUQySb11uuwQIgAVGn4zXPBssYVSbHPUr%2BfZ66UDG%2Fvx8%2B5rAo6BY6eVcq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDLqclECkzmRarbg6YircAykSos9VpsdKqMvfBo9VvDhCPVRZngAhEQ2P0SijpqC2PSFj%2FYXIb90IJKwQ8Gtp1TbCuvUu8kt1xE2po0VzRdTJZzi6Z%2Fkbaz4yr9qgAdjn9WgRh06jBKD8%2FM9Dpswy9ONK1CuRscf10ST%2BezI8IbpE6qBfXJNWyDM9P7pFYdhWlJLiVCTMl%2FqNEi8z5tJ4F3UV1EZYtuWRoN6nGaSf1PgR955vJkOKscq%2FVI6w8SS0UbSRswOQg8DLvw3qjY4RNugmnVy9q2cnBdRG%2FB%2BRPKaC5BqAKpykh5B2i7KH2UUtxkx9Dbcfqm6UeeHoK7bFfaPNKrLVUEWWaxtC0FjaNaGEkRgj5%2FHaZrzchP%2BoasqsmCvsv5FEif2Cc%2B7mXssANghUD4kQks2F7tpyeeTB7JYOjqTq0G97F1yrRevOs5PEC6kn9gUyElUE%2FyFbocA5jc2UHg4NpVU4FAGUGLPeKpYz6lcllT7XESZ%2FI99LZyBUn%2FxXpKKBi8b8LWpVRIvST3XBX9HmBSR%2FhX%2FJZFGxdilEo%2FdaFHFUu6p64guqCeajXc4XzMa6A%2BUdWfOpCJp6KXq7X8jML%2FoH4M6OZUPq1inOVYgQpJBk8Cd5UrHSOZCDxKuWTbc3l1nk3GZJMKmr1sEGOqUB2Fd%2B5YZyheUe26cTyKrWJVRtPnuLjDkSquZmAt1GbpQ9AQxsMiA3xPkIzyNqhLcpMsiYFbd%2Fbfv60ohT%2FK5Cl9NpMgijlzKnGKcq0949ZuTgpekGd9XUFL%2BOwe9MdYjESXfc3oIumK4m6PYxIGLN3TXVev4Xkg1VFb2pYsanrDaYyPRU8Lr8gVnbUpsDlSPkStNc3JNkE2McfaJq7OD%2FV4zaa9qX&X-Amz-Signature=6246af59babc7de539beb080d51982042cc5502af72bfe7a33c265912c2ac389&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C4YMVDA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd3IEunl70xjaYJtcIqhddtMeftXbiz8mUQySb11uuwQIgAVGn4zXPBssYVSbHPUr%2BfZ66UDG%2Fvx8%2B5rAo6BY6eVcq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDLqclECkzmRarbg6YircAykSos9VpsdKqMvfBo9VvDhCPVRZngAhEQ2P0SijpqC2PSFj%2FYXIb90IJKwQ8Gtp1TbCuvUu8kt1xE2po0VzRdTJZzi6Z%2Fkbaz4yr9qgAdjn9WgRh06jBKD8%2FM9Dpswy9ONK1CuRscf10ST%2BezI8IbpE6qBfXJNWyDM9P7pFYdhWlJLiVCTMl%2FqNEi8z5tJ4F3UV1EZYtuWRoN6nGaSf1PgR955vJkOKscq%2FVI6w8SS0UbSRswOQg8DLvw3qjY4RNugmnVy9q2cnBdRG%2FB%2BRPKaC5BqAKpykh5B2i7KH2UUtxkx9Dbcfqm6UeeHoK7bFfaPNKrLVUEWWaxtC0FjaNaGEkRgj5%2FHaZrzchP%2BoasqsmCvsv5FEif2Cc%2B7mXssANghUD4kQks2F7tpyeeTB7JYOjqTq0G97F1yrRevOs5PEC6kn9gUyElUE%2FyFbocA5jc2UHg4NpVU4FAGUGLPeKpYz6lcllT7XESZ%2FI99LZyBUn%2FxXpKKBi8b8LWpVRIvST3XBX9HmBSR%2FhX%2FJZFGxdilEo%2FdaFHFUu6p64guqCeajXc4XzMa6A%2BUdWfOpCJp6KXq7X8jML%2FoH4M6OZUPq1inOVYgQpJBk8Cd5UrHSOZCDxKuWTbc3l1nk3GZJMKmr1sEGOqUB2Fd%2B5YZyheUe26cTyKrWJVRtPnuLjDkSquZmAt1GbpQ9AQxsMiA3xPkIzyNqhLcpMsiYFbd%2Fbfv60ohT%2FK5Cl9NpMgijlzKnGKcq0949ZuTgpekGd9XUFL%2BOwe9MdYjESXfc3oIumK4m6PYxIGLN3TXVev4Xkg1VFb2pYsanrDaYyPRU8Lr8gVnbUpsDlSPkStNc3JNkE2McfaJq7OD%2FV4zaa9qX&X-Amz-Signature=c9ef394abb7349d3a5aa9b9d2400bd51bdefc50229168e78080b2735c2ce1ebd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C4YMVDA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd3IEunl70xjaYJtcIqhddtMeftXbiz8mUQySb11uuwQIgAVGn4zXPBssYVSbHPUr%2BfZ66UDG%2Fvx8%2B5rAo6BY6eVcq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDLqclECkzmRarbg6YircAykSos9VpsdKqMvfBo9VvDhCPVRZngAhEQ2P0SijpqC2PSFj%2FYXIb90IJKwQ8Gtp1TbCuvUu8kt1xE2po0VzRdTJZzi6Z%2Fkbaz4yr9qgAdjn9WgRh06jBKD8%2FM9Dpswy9ONK1CuRscf10ST%2BezI8IbpE6qBfXJNWyDM9P7pFYdhWlJLiVCTMl%2FqNEi8z5tJ4F3UV1EZYtuWRoN6nGaSf1PgR955vJkOKscq%2FVI6w8SS0UbSRswOQg8DLvw3qjY4RNugmnVy9q2cnBdRG%2FB%2BRPKaC5BqAKpykh5B2i7KH2UUtxkx9Dbcfqm6UeeHoK7bFfaPNKrLVUEWWaxtC0FjaNaGEkRgj5%2FHaZrzchP%2BoasqsmCvsv5FEif2Cc%2B7mXssANghUD4kQks2F7tpyeeTB7JYOjqTq0G97F1yrRevOs5PEC6kn9gUyElUE%2FyFbocA5jc2UHg4NpVU4FAGUGLPeKpYz6lcllT7XESZ%2FI99LZyBUn%2FxXpKKBi8b8LWpVRIvST3XBX9HmBSR%2FhX%2FJZFGxdilEo%2FdaFHFUu6p64guqCeajXc4XzMa6A%2BUdWfOpCJp6KXq7X8jML%2FoH4M6OZUPq1inOVYgQpJBk8Cd5UrHSOZCDxKuWTbc3l1nk3GZJMKmr1sEGOqUB2Fd%2B5YZyheUe26cTyKrWJVRtPnuLjDkSquZmAt1GbpQ9AQxsMiA3xPkIzyNqhLcpMsiYFbd%2Fbfv60ohT%2FK5Cl9NpMgijlzKnGKcq0949ZuTgpekGd9XUFL%2BOwe9MdYjESXfc3oIumK4m6PYxIGLN3TXVev4Xkg1VFb2pYsanrDaYyPRU8Lr8gVnbUpsDlSPkStNc3JNkE2McfaJq7OD%2FV4zaa9qX&X-Amz-Signature=44ea6eba89ffef7a4547bbc580fa82aae856cc3990f0feb2d217db9f98801c99&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C4YMVDA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd3IEunl70xjaYJtcIqhddtMeftXbiz8mUQySb11uuwQIgAVGn4zXPBssYVSbHPUr%2BfZ66UDG%2Fvx8%2B5rAo6BY6eVcq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDLqclECkzmRarbg6YircAykSos9VpsdKqMvfBo9VvDhCPVRZngAhEQ2P0SijpqC2PSFj%2FYXIb90IJKwQ8Gtp1TbCuvUu8kt1xE2po0VzRdTJZzi6Z%2Fkbaz4yr9qgAdjn9WgRh06jBKD8%2FM9Dpswy9ONK1CuRscf10ST%2BezI8IbpE6qBfXJNWyDM9P7pFYdhWlJLiVCTMl%2FqNEi8z5tJ4F3UV1EZYtuWRoN6nGaSf1PgR955vJkOKscq%2FVI6w8SS0UbSRswOQg8DLvw3qjY4RNugmnVy9q2cnBdRG%2FB%2BRPKaC5BqAKpykh5B2i7KH2UUtxkx9Dbcfqm6UeeHoK7bFfaPNKrLVUEWWaxtC0FjaNaGEkRgj5%2FHaZrzchP%2BoasqsmCvsv5FEif2Cc%2B7mXssANghUD4kQks2F7tpyeeTB7JYOjqTq0G97F1yrRevOs5PEC6kn9gUyElUE%2FyFbocA5jc2UHg4NpVU4FAGUGLPeKpYz6lcllT7XESZ%2FI99LZyBUn%2FxXpKKBi8b8LWpVRIvST3XBX9HmBSR%2FhX%2FJZFGxdilEo%2FdaFHFUu6p64guqCeajXc4XzMa6A%2BUdWfOpCJp6KXq7X8jML%2FoH4M6OZUPq1inOVYgQpJBk8Cd5UrHSOZCDxKuWTbc3l1nk3GZJMKmr1sEGOqUB2Fd%2B5YZyheUe26cTyKrWJVRtPnuLjDkSquZmAt1GbpQ9AQxsMiA3xPkIzyNqhLcpMsiYFbd%2Fbfv60ohT%2FK5Cl9NpMgijlzKnGKcq0949ZuTgpekGd9XUFL%2BOwe9MdYjESXfc3oIumK4m6PYxIGLN3TXVev4Xkg1VFb2pYsanrDaYyPRU8Lr8gVnbUpsDlSPkStNc3JNkE2McfaJq7OD%2FV4zaa9qX&X-Amz-Signature=05d177c00690c5fcccc939e103729799e64222d1f6c34c79d5364d091b06dbd3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
