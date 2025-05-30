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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXLKBAGO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq3vpQPASd%2BQT48mwnnc45Z6IIUNuDbVrouD3Jy7ZJNAiEApMXmHS45VRI7U31sJNs2edkbRC%2BCs2AbsOFaBEXgLlQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL1E%2FZui9bhH84P%2BCrcAwQ05yqKfpwVzV4bk5F%2BczfuBpBrkWBgoCxs6%2B4KZ42nVQ0cUGQF5U%2Bmv0RRVCSBtIachPtlObcbPRUpz3gRm%2FS19MyFOJhmOUf%2F%2BMxgYGH5jBp0ilz1moXlYNSAcIIkOyAIyOsSAHWTgeXQDDoaYQvGwBpKIrPkexJwX7Z2%2B21elqTted4AGVvt5XQW%2F5A9m4fCYaoA7SYLJiTZ7z9uUkBkXSQUDi9ZAWA%2BCxpJbMIVfszi909y7ibBkCIIJZdAO9sIzJKfTuVey%2BITno9GNDRHSnk%2Byo6iVeVylK81UEeOWOY%2BsH%2FVNHPI8sY7RpCVcuTq8AFppVMp30RLRWB1VzcgsDtEu%2B8WTVBt8dlIc5B4KgmuATzJNur1N1xxzXT38NGAvpKGRByvq8ZUqVqwCqPKHKXZGhk2CNHiEMOVvFvEOvUzMndfCPyL1yspU9%2FFYO2vO8PBkqhwlYARcCqJCDoGxuXl0LKCJioSWBRCxloJYE5NTxJrnoqsw5RyUoH1gdX6EOsfN2GMiGDH0EgzhD4K%2FJoiD2FbwCgAQSG9N2u8EfRNBsWT7Uz2EwUVOWrUozZtCkRUbtW23ogft1ub7Jk3znv3piCGGi4PO83yDprUNisMvmwS6uQRvQmfMIr%2F5MEGOqUBN4X62MWFNVv5I7zIXnUPsxGT%2Fl1faUhud7qUPmp5G9SgBrupM0pZr3YGECZysLA5Z6Q%2BH%2Fml1QdpOCpa2KhIPAfsMVWNagVUCC%2BQhzapiKnL3ZY3aRJpUsdOCJgn2S0PdPi3enkKz4%2BejGnHBQpZJJSaywQbC3f5nBgHUwdqt9WH8NcTOqVki6lfPYvo5VrfITN7lnT7%2BzQSHr%2BlVWCFrmivwCKP&X-Amz-Signature=9bf8a567a3dc758ec4015b0e315bc25b12fb106c66828f577ef30d1941b8bffe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXLKBAGO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq3vpQPASd%2BQT48mwnnc45Z6IIUNuDbVrouD3Jy7ZJNAiEApMXmHS45VRI7U31sJNs2edkbRC%2BCs2AbsOFaBEXgLlQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL1E%2FZui9bhH84P%2BCrcAwQ05yqKfpwVzV4bk5F%2BczfuBpBrkWBgoCxs6%2B4KZ42nVQ0cUGQF5U%2Bmv0RRVCSBtIachPtlObcbPRUpz3gRm%2FS19MyFOJhmOUf%2F%2BMxgYGH5jBp0ilz1moXlYNSAcIIkOyAIyOsSAHWTgeXQDDoaYQvGwBpKIrPkexJwX7Z2%2B21elqTted4AGVvt5XQW%2F5A9m4fCYaoA7SYLJiTZ7z9uUkBkXSQUDi9ZAWA%2BCxpJbMIVfszi909y7ibBkCIIJZdAO9sIzJKfTuVey%2BITno9GNDRHSnk%2Byo6iVeVylK81UEeOWOY%2BsH%2FVNHPI8sY7RpCVcuTq8AFppVMp30RLRWB1VzcgsDtEu%2B8WTVBt8dlIc5B4KgmuATzJNur1N1xxzXT38NGAvpKGRByvq8ZUqVqwCqPKHKXZGhk2CNHiEMOVvFvEOvUzMndfCPyL1yspU9%2FFYO2vO8PBkqhwlYARcCqJCDoGxuXl0LKCJioSWBRCxloJYE5NTxJrnoqsw5RyUoH1gdX6EOsfN2GMiGDH0EgzhD4K%2FJoiD2FbwCgAQSG9N2u8EfRNBsWT7Uz2EwUVOWrUozZtCkRUbtW23ogft1ub7Jk3znv3piCGGi4PO83yDprUNisMvmwS6uQRvQmfMIr%2F5MEGOqUBN4X62MWFNVv5I7zIXnUPsxGT%2Fl1faUhud7qUPmp5G9SgBrupM0pZr3YGECZysLA5Z6Q%2BH%2Fml1QdpOCpa2KhIPAfsMVWNagVUCC%2BQhzapiKnL3ZY3aRJpUsdOCJgn2S0PdPi3enkKz4%2BejGnHBQpZJJSaywQbC3f5nBgHUwdqt9WH8NcTOqVki6lfPYvo5VrfITN7lnT7%2BzQSHr%2BlVWCFrmivwCKP&X-Amz-Signature=07ced966816c93cb05198028131f75b4a4b93bc1bbb92f5796a1ae6b099d9311&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXLKBAGO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq3vpQPASd%2BQT48mwnnc45Z6IIUNuDbVrouD3Jy7ZJNAiEApMXmHS45VRI7U31sJNs2edkbRC%2BCs2AbsOFaBEXgLlQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL1E%2FZui9bhH84P%2BCrcAwQ05yqKfpwVzV4bk5F%2BczfuBpBrkWBgoCxs6%2B4KZ42nVQ0cUGQF5U%2Bmv0RRVCSBtIachPtlObcbPRUpz3gRm%2FS19MyFOJhmOUf%2F%2BMxgYGH5jBp0ilz1moXlYNSAcIIkOyAIyOsSAHWTgeXQDDoaYQvGwBpKIrPkexJwX7Z2%2B21elqTted4AGVvt5XQW%2F5A9m4fCYaoA7SYLJiTZ7z9uUkBkXSQUDi9ZAWA%2BCxpJbMIVfszi909y7ibBkCIIJZdAO9sIzJKfTuVey%2BITno9GNDRHSnk%2Byo6iVeVylK81UEeOWOY%2BsH%2FVNHPI8sY7RpCVcuTq8AFppVMp30RLRWB1VzcgsDtEu%2B8WTVBt8dlIc5B4KgmuATzJNur1N1xxzXT38NGAvpKGRByvq8ZUqVqwCqPKHKXZGhk2CNHiEMOVvFvEOvUzMndfCPyL1yspU9%2FFYO2vO8PBkqhwlYARcCqJCDoGxuXl0LKCJioSWBRCxloJYE5NTxJrnoqsw5RyUoH1gdX6EOsfN2GMiGDH0EgzhD4K%2FJoiD2FbwCgAQSG9N2u8EfRNBsWT7Uz2EwUVOWrUozZtCkRUbtW23ogft1ub7Jk3znv3piCGGi4PO83yDprUNisMvmwS6uQRvQmfMIr%2F5MEGOqUBN4X62MWFNVv5I7zIXnUPsxGT%2Fl1faUhud7qUPmp5G9SgBrupM0pZr3YGECZysLA5Z6Q%2BH%2Fml1QdpOCpa2KhIPAfsMVWNagVUCC%2BQhzapiKnL3ZY3aRJpUsdOCJgn2S0PdPi3enkKz4%2BejGnHBQpZJJSaywQbC3f5nBgHUwdqt9WH8NcTOqVki6lfPYvo5VrfITN7lnT7%2BzQSHr%2BlVWCFrmivwCKP&X-Amz-Signature=85161022afdf3096e737b07fe71901a110bbfa8407882582e21ee74302c8f749&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXLKBAGO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq3vpQPASd%2BQT48mwnnc45Z6IIUNuDbVrouD3Jy7ZJNAiEApMXmHS45VRI7U31sJNs2edkbRC%2BCs2AbsOFaBEXgLlQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL1E%2FZui9bhH84P%2BCrcAwQ05yqKfpwVzV4bk5F%2BczfuBpBrkWBgoCxs6%2B4KZ42nVQ0cUGQF5U%2Bmv0RRVCSBtIachPtlObcbPRUpz3gRm%2FS19MyFOJhmOUf%2F%2BMxgYGH5jBp0ilz1moXlYNSAcIIkOyAIyOsSAHWTgeXQDDoaYQvGwBpKIrPkexJwX7Z2%2B21elqTted4AGVvt5XQW%2F5A9m4fCYaoA7SYLJiTZ7z9uUkBkXSQUDi9ZAWA%2BCxpJbMIVfszi909y7ibBkCIIJZdAO9sIzJKfTuVey%2BITno9GNDRHSnk%2Byo6iVeVylK81UEeOWOY%2BsH%2FVNHPI8sY7RpCVcuTq8AFppVMp30RLRWB1VzcgsDtEu%2B8WTVBt8dlIc5B4KgmuATzJNur1N1xxzXT38NGAvpKGRByvq8ZUqVqwCqPKHKXZGhk2CNHiEMOVvFvEOvUzMndfCPyL1yspU9%2FFYO2vO8PBkqhwlYARcCqJCDoGxuXl0LKCJioSWBRCxloJYE5NTxJrnoqsw5RyUoH1gdX6EOsfN2GMiGDH0EgzhD4K%2FJoiD2FbwCgAQSG9N2u8EfRNBsWT7Uz2EwUVOWrUozZtCkRUbtW23ogft1ub7Jk3znv3piCGGi4PO83yDprUNisMvmwS6uQRvQmfMIr%2F5MEGOqUBN4X62MWFNVv5I7zIXnUPsxGT%2Fl1faUhud7qUPmp5G9SgBrupM0pZr3YGECZysLA5Z6Q%2BH%2Fml1QdpOCpa2KhIPAfsMVWNagVUCC%2BQhzapiKnL3ZY3aRJpUsdOCJgn2S0PdPi3enkKz4%2BejGnHBQpZJJSaywQbC3f5nBgHUwdqt9WH8NcTOqVki6lfPYvo5VrfITN7lnT7%2BzQSHr%2BlVWCFrmivwCKP&X-Amz-Signature=de963d210aeb411f53f2e425418cd49c364196cc729bab53e5144c7b4858135a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXLKBAGO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq3vpQPASd%2BQT48mwnnc45Z6IIUNuDbVrouD3Jy7ZJNAiEApMXmHS45VRI7U31sJNs2edkbRC%2BCs2AbsOFaBEXgLlQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL1E%2FZui9bhH84P%2BCrcAwQ05yqKfpwVzV4bk5F%2BczfuBpBrkWBgoCxs6%2B4KZ42nVQ0cUGQF5U%2Bmv0RRVCSBtIachPtlObcbPRUpz3gRm%2FS19MyFOJhmOUf%2F%2BMxgYGH5jBp0ilz1moXlYNSAcIIkOyAIyOsSAHWTgeXQDDoaYQvGwBpKIrPkexJwX7Z2%2B21elqTted4AGVvt5XQW%2F5A9m4fCYaoA7SYLJiTZ7z9uUkBkXSQUDi9ZAWA%2BCxpJbMIVfszi909y7ibBkCIIJZdAO9sIzJKfTuVey%2BITno9GNDRHSnk%2Byo6iVeVylK81UEeOWOY%2BsH%2FVNHPI8sY7RpCVcuTq8AFppVMp30RLRWB1VzcgsDtEu%2B8WTVBt8dlIc5B4KgmuATzJNur1N1xxzXT38NGAvpKGRByvq8ZUqVqwCqPKHKXZGhk2CNHiEMOVvFvEOvUzMndfCPyL1yspU9%2FFYO2vO8PBkqhwlYARcCqJCDoGxuXl0LKCJioSWBRCxloJYE5NTxJrnoqsw5RyUoH1gdX6EOsfN2GMiGDH0EgzhD4K%2FJoiD2FbwCgAQSG9N2u8EfRNBsWT7Uz2EwUVOWrUozZtCkRUbtW23ogft1ub7Jk3znv3piCGGi4PO83yDprUNisMvmwS6uQRvQmfMIr%2F5MEGOqUBN4X62MWFNVv5I7zIXnUPsxGT%2Fl1faUhud7qUPmp5G9SgBrupM0pZr3YGECZysLA5Z6Q%2BH%2Fml1QdpOCpa2KhIPAfsMVWNagVUCC%2BQhzapiKnL3ZY3aRJpUsdOCJgn2S0PdPi3enkKz4%2BejGnHBQpZJJSaywQbC3f5nBgHUwdqt9WH8NcTOqVki6lfPYvo5VrfITN7lnT7%2BzQSHr%2BlVWCFrmivwCKP&X-Amz-Signature=48b79e3a5a2ca7efde79c0f7d1b25a72e686a085e513523c773b77d3aab42e39&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXLKBAGO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq3vpQPASd%2BQT48mwnnc45Z6IIUNuDbVrouD3Jy7ZJNAiEApMXmHS45VRI7U31sJNs2edkbRC%2BCs2AbsOFaBEXgLlQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL1E%2FZui9bhH84P%2BCrcAwQ05yqKfpwVzV4bk5F%2BczfuBpBrkWBgoCxs6%2B4KZ42nVQ0cUGQF5U%2Bmv0RRVCSBtIachPtlObcbPRUpz3gRm%2FS19MyFOJhmOUf%2F%2BMxgYGH5jBp0ilz1moXlYNSAcIIkOyAIyOsSAHWTgeXQDDoaYQvGwBpKIrPkexJwX7Z2%2B21elqTted4AGVvt5XQW%2F5A9m4fCYaoA7SYLJiTZ7z9uUkBkXSQUDi9ZAWA%2BCxpJbMIVfszi909y7ibBkCIIJZdAO9sIzJKfTuVey%2BITno9GNDRHSnk%2Byo6iVeVylK81UEeOWOY%2BsH%2FVNHPI8sY7RpCVcuTq8AFppVMp30RLRWB1VzcgsDtEu%2B8WTVBt8dlIc5B4KgmuATzJNur1N1xxzXT38NGAvpKGRByvq8ZUqVqwCqPKHKXZGhk2CNHiEMOVvFvEOvUzMndfCPyL1yspU9%2FFYO2vO8PBkqhwlYARcCqJCDoGxuXl0LKCJioSWBRCxloJYE5NTxJrnoqsw5RyUoH1gdX6EOsfN2GMiGDH0EgzhD4K%2FJoiD2FbwCgAQSG9N2u8EfRNBsWT7Uz2EwUVOWrUozZtCkRUbtW23ogft1ub7Jk3znv3piCGGi4PO83yDprUNisMvmwS6uQRvQmfMIr%2F5MEGOqUBN4X62MWFNVv5I7zIXnUPsxGT%2Fl1faUhud7qUPmp5G9SgBrupM0pZr3YGECZysLA5Z6Q%2BH%2Fml1QdpOCpa2KhIPAfsMVWNagVUCC%2BQhzapiKnL3ZY3aRJpUsdOCJgn2S0PdPi3enkKz4%2BejGnHBQpZJJSaywQbC3f5nBgHUwdqt9WH8NcTOqVki6lfPYvo5VrfITN7lnT7%2BzQSHr%2BlVWCFrmivwCKP&X-Amz-Signature=1c5a7e2234b033e473f7390f0fa64b84da50476ffb6b37a4371aa6ffeedad9dd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXLKBAGO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq3vpQPASd%2BQT48mwnnc45Z6IIUNuDbVrouD3Jy7ZJNAiEApMXmHS45VRI7U31sJNs2edkbRC%2BCs2AbsOFaBEXgLlQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL1E%2FZui9bhH84P%2BCrcAwQ05yqKfpwVzV4bk5F%2BczfuBpBrkWBgoCxs6%2B4KZ42nVQ0cUGQF5U%2Bmv0RRVCSBtIachPtlObcbPRUpz3gRm%2FS19MyFOJhmOUf%2F%2BMxgYGH5jBp0ilz1moXlYNSAcIIkOyAIyOsSAHWTgeXQDDoaYQvGwBpKIrPkexJwX7Z2%2B21elqTted4AGVvt5XQW%2F5A9m4fCYaoA7SYLJiTZ7z9uUkBkXSQUDi9ZAWA%2BCxpJbMIVfszi909y7ibBkCIIJZdAO9sIzJKfTuVey%2BITno9GNDRHSnk%2Byo6iVeVylK81UEeOWOY%2BsH%2FVNHPI8sY7RpCVcuTq8AFppVMp30RLRWB1VzcgsDtEu%2B8WTVBt8dlIc5B4KgmuATzJNur1N1xxzXT38NGAvpKGRByvq8ZUqVqwCqPKHKXZGhk2CNHiEMOVvFvEOvUzMndfCPyL1yspU9%2FFYO2vO8PBkqhwlYARcCqJCDoGxuXl0LKCJioSWBRCxloJYE5NTxJrnoqsw5RyUoH1gdX6EOsfN2GMiGDH0EgzhD4K%2FJoiD2FbwCgAQSG9N2u8EfRNBsWT7Uz2EwUVOWrUozZtCkRUbtW23ogft1ub7Jk3znv3piCGGi4PO83yDprUNisMvmwS6uQRvQmfMIr%2F5MEGOqUBN4X62MWFNVv5I7zIXnUPsxGT%2Fl1faUhud7qUPmp5G9SgBrupM0pZr3YGECZysLA5Z6Q%2BH%2Fml1QdpOCpa2KhIPAfsMVWNagVUCC%2BQhzapiKnL3ZY3aRJpUsdOCJgn2S0PdPi3enkKz4%2BejGnHBQpZJJSaywQbC3f5nBgHUwdqt9WH8NcTOqVki6lfPYvo5VrfITN7lnT7%2BzQSHr%2BlVWCFrmivwCKP&X-Amz-Signature=5f003901251fdd8c7341fcc4dfd7758e71425021d41efeee209fe1affd59ce25&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
