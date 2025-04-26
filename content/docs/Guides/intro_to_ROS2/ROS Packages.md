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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC7PZEQM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPDYExR6kHsQJiIhzbvlq9fZYlGSI%2FRu5t8BcYddrzzQIgeE7%2Fms3BPYaHzX7AAy8owKAHwpQlys2jiM355LXjsJUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMRqUvta8Z32K%2Fez%2FCrcA2kgmo5Pz9%2BbJJyEHMFJEHAl5T%2FVJjd97u4org0vKFW4bFCj73FD6LUF1MaBacdrfU9P3HiRz9zsmBjiYk0AiYBfvK9wWSVSjOlBH%2BpvIRcR8%2F1g8zNjVhawoKntmvn2kSYEuAS3NPb%2BzsUeOGxM4euWy571l0UR4jIsQbyIuLsFnLRV1kRztPrmZMe8i7cZeqiZBA2cT6EvQOyuB27hX28Eqecpn2hpDpvUkyBalaB%2BnRmpalhiyWbX97O6ARZKZTtL4u5%2FDMHG69gEx0oO0Th2Qg9iEGAqxYo%2FplW9bL4NJ%2FJTOoxPv4bSUzHPHZC4doSdtG5kziQ0TzcZQnnbTYXqe0J%2B5RRnwbFaXhPSWBadBUUjNpOZOQQJwxdmddH1Z%2FQ%2FIYL7l27KnKJyk27%2Fy2aMIfArCa5LjO4gkMIli4BUXLJ6qmRivNypNnKfBVCXY2iFuGZRyqWFQ2A4BXxd2N%2F15Pf8aosLGTPyU9XA%2BpV0AD0z0ziOZZc1TKSc3zHLk7yuxue6bfETyUL0nkR6c95NW7ZlKEZQ6BbkSqutpHA7KtCE9A4T0%2FKRZQGGyHlb2La1gn6WbYDlGbYj%2FIYSQC05Mn2HUaHEHtX7z%2BM1Bi2FsDRD7gRRyVob3A%2BxMPHms8AGOqUBM3xBSinNydd11LAcHRVhyp4sOc3gr020mGNdCaQEbI4m%2FW5xi6qAW68Swt7%2FCd5def4yDaJSGevBclh6EckyqIvrhtz2kS6PtwOA6woNTW1uzOlvJt7FyiV56G0XY3lPkdVePSf7EUcLLjA8VgG%2FDWte3Zk%2F3iGI4M8T6s1pi93gBiub%2BMpGb6VgsyZNrsOOgJZT7MzNdqtmBea%2FAqQU46cw4bin&X-Amz-Signature=996c94712b3fbcc044398cd18118e2e0210be6331c4d9e2bb3a934c92fa88241&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC7PZEQM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPDYExR6kHsQJiIhzbvlq9fZYlGSI%2FRu5t8BcYddrzzQIgeE7%2Fms3BPYaHzX7AAy8owKAHwpQlys2jiM355LXjsJUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMRqUvta8Z32K%2Fez%2FCrcA2kgmo5Pz9%2BbJJyEHMFJEHAl5T%2FVJjd97u4org0vKFW4bFCj73FD6LUF1MaBacdrfU9P3HiRz9zsmBjiYk0AiYBfvK9wWSVSjOlBH%2BpvIRcR8%2F1g8zNjVhawoKntmvn2kSYEuAS3NPb%2BzsUeOGxM4euWy571l0UR4jIsQbyIuLsFnLRV1kRztPrmZMe8i7cZeqiZBA2cT6EvQOyuB27hX28Eqecpn2hpDpvUkyBalaB%2BnRmpalhiyWbX97O6ARZKZTtL4u5%2FDMHG69gEx0oO0Th2Qg9iEGAqxYo%2FplW9bL4NJ%2FJTOoxPv4bSUzHPHZC4doSdtG5kziQ0TzcZQnnbTYXqe0J%2B5RRnwbFaXhPSWBadBUUjNpOZOQQJwxdmddH1Z%2FQ%2FIYL7l27KnKJyk27%2Fy2aMIfArCa5LjO4gkMIli4BUXLJ6qmRivNypNnKfBVCXY2iFuGZRyqWFQ2A4BXxd2N%2F15Pf8aosLGTPyU9XA%2BpV0AD0z0ziOZZc1TKSc3zHLk7yuxue6bfETyUL0nkR6c95NW7ZlKEZQ6BbkSqutpHA7KtCE9A4T0%2FKRZQGGyHlb2La1gn6WbYDlGbYj%2FIYSQC05Mn2HUaHEHtX7z%2BM1Bi2FsDRD7gRRyVob3A%2BxMPHms8AGOqUBM3xBSinNydd11LAcHRVhyp4sOc3gr020mGNdCaQEbI4m%2FW5xi6qAW68Swt7%2FCd5def4yDaJSGevBclh6EckyqIvrhtz2kS6PtwOA6woNTW1uzOlvJt7FyiV56G0XY3lPkdVePSf7EUcLLjA8VgG%2FDWte3Zk%2F3iGI4M8T6s1pi93gBiub%2BMpGb6VgsyZNrsOOgJZT7MzNdqtmBea%2FAqQU46cw4bin&X-Amz-Signature=7cefc8bbf9d0e88a0a2ad1ef3b9aa2854c14dc9d167552be780b16286b79c325&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC7PZEQM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPDYExR6kHsQJiIhzbvlq9fZYlGSI%2FRu5t8BcYddrzzQIgeE7%2Fms3BPYaHzX7AAy8owKAHwpQlys2jiM355LXjsJUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMRqUvta8Z32K%2Fez%2FCrcA2kgmo5Pz9%2BbJJyEHMFJEHAl5T%2FVJjd97u4org0vKFW4bFCj73FD6LUF1MaBacdrfU9P3HiRz9zsmBjiYk0AiYBfvK9wWSVSjOlBH%2BpvIRcR8%2F1g8zNjVhawoKntmvn2kSYEuAS3NPb%2BzsUeOGxM4euWy571l0UR4jIsQbyIuLsFnLRV1kRztPrmZMe8i7cZeqiZBA2cT6EvQOyuB27hX28Eqecpn2hpDpvUkyBalaB%2BnRmpalhiyWbX97O6ARZKZTtL4u5%2FDMHG69gEx0oO0Th2Qg9iEGAqxYo%2FplW9bL4NJ%2FJTOoxPv4bSUzHPHZC4doSdtG5kziQ0TzcZQnnbTYXqe0J%2B5RRnwbFaXhPSWBadBUUjNpOZOQQJwxdmddH1Z%2FQ%2FIYL7l27KnKJyk27%2Fy2aMIfArCa5LjO4gkMIli4BUXLJ6qmRivNypNnKfBVCXY2iFuGZRyqWFQ2A4BXxd2N%2F15Pf8aosLGTPyU9XA%2BpV0AD0z0ziOZZc1TKSc3zHLk7yuxue6bfETyUL0nkR6c95NW7ZlKEZQ6BbkSqutpHA7KtCE9A4T0%2FKRZQGGyHlb2La1gn6WbYDlGbYj%2FIYSQC05Mn2HUaHEHtX7z%2BM1Bi2FsDRD7gRRyVob3A%2BxMPHms8AGOqUBM3xBSinNydd11LAcHRVhyp4sOc3gr020mGNdCaQEbI4m%2FW5xi6qAW68Swt7%2FCd5def4yDaJSGevBclh6EckyqIvrhtz2kS6PtwOA6woNTW1uzOlvJt7FyiV56G0XY3lPkdVePSf7EUcLLjA8VgG%2FDWte3Zk%2F3iGI4M8T6s1pi93gBiub%2BMpGb6VgsyZNrsOOgJZT7MzNdqtmBea%2FAqQU46cw4bin&X-Amz-Signature=622ee9fb7dac418aec32803a8de2742ef08c756c8d849c51a0e8d1cf2fd47d2f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC7PZEQM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPDYExR6kHsQJiIhzbvlq9fZYlGSI%2FRu5t8BcYddrzzQIgeE7%2Fms3BPYaHzX7AAy8owKAHwpQlys2jiM355LXjsJUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMRqUvta8Z32K%2Fez%2FCrcA2kgmo5Pz9%2BbJJyEHMFJEHAl5T%2FVJjd97u4org0vKFW4bFCj73FD6LUF1MaBacdrfU9P3HiRz9zsmBjiYk0AiYBfvK9wWSVSjOlBH%2BpvIRcR8%2F1g8zNjVhawoKntmvn2kSYEuAS3NPb%2BzsUeOGxM4euWy571l0UR4jIsQbyIuLsFnLRV1kRztPrmZMe8i7cZeqiZBA2cT6EvQOyuB27hX28Eqecpn2hpDpvUkyBalaB%2BnRmpalhiyWbX97O6ARZKZTtL4u5%2FDMHG69gEx0oO0Th2Qg9iEGAqxYo%2FplW9bL4NJ%2FJTOoxPv4bSUzHPHZC4doSdtG5kziQ0TzcZQnnbTYXqe0J%2B5RRnwbFaXhPSWBadBUUjNpOZOQQJwxdmddH1Z%2FQ%2FIYL7l27KnKJyk27%2Fy2aMIfArCa5LjO4gkMIli4BUXLJ6qmRivNypNnKfBVCXY2iFuGZRyqWFQ2A4BXxd2N%2F15Pf8aosLGTPyU9XA%2BpV0AD0z0ziOZZc1TKSc3zHLk7yuxue6bfETyUL0nkR6c95NW7ZlKEZQ6BbkSqutpHA7KtCE9A4T0%2FKRZQGGyHlb2La1gn6WbYDlGbYj%2FIYSQC05Mn2HUaHEHtX7z%2BM1Bi2FsDRD7gRRyVob3A%2BxMPHms8AGOqUBM3xBSinNydd11LAcHRVhyp4sOc3gr020mGNdCaQEbI4m%2FW5xi6qAW68Swt7%2FCd5def4yDaJSGevBclh6EckyqIvrhtz2kS6PtwOA6woNTW1uzOlvJt7FyiV56G0XY3lPkdVePSf7EUcLLjA8VgG%2FDWte3Zk%2F3iGI4M8T6s1pi93gBiub%2BMpGb6VgsyZNrsOOgJZT7MzNdqtmBea%2FAqQU46cw4bin&X-Amz-Signature=3d31e234c169519c7f8b5abc5b5943dd58868911a60100bcc812c1bed10e274e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC7PZEQM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPDYExR6kHsQJiIhzbvlq9fZYlGSI%2FRu5t8BcYddrzzQIgeE7%2Fms3BPYaHzX7AAy8owKAHwpQlys2jiM355LXjsJUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMRqUvta8Z32K%2Fez%2FCrcA2kgmo5Pz9%2BbJJyEHMFJEHAl5T%2FVJjd97u4org0vKFW4bFCj73FD6LUF1MaBacdrfU9P3HiRz9zsmBjiYk0AiYBfvK9wWSVSjOlBH%2BpvIRcR8%2F1g8zNjVhawoKntmvn2kSYEuAS3NPb%2BzsUeOGxM4euWy571l0UR4jIsQbyIuLsFnLRV1kRztPrmZMe8i7cZeqiZBA2cT6EvQOyuB27hX28Eqecpn2hpDpvUkyBalaB%2BnRmpalhiyWbX97O6ARZKZTtL4u5%2FDMHG69gEx0oO0Th2Qg9iEGAqxYo%2FplW9bL4NJ%2FJTOoxPv4bSUzHPHZC4doSdtG5kziQ0TzcZQnnbTYXqe0J%2B5RRnwbFaXhPSWBadBUUjNpOZOQQJwxdmddH1Z%2FQ%2FIYL7l27KnKJyk27%2Fy2aMIfArCa5LjO4gkMIli4BUXLJ6qmRivNypNnKfBVCXY2iFuGZRyqWFQ2A4BXxd2N%2F15Pf8aosLGTPyU9XA%2BpV0AD0z0ziOZZc1TKSc3zHLk7yuxue6bfETyUL0nkR6c95NW7ZlKEZQ6BbkSqutpHA7KtCE9A4T0%2FKRZQGGyHlb2La1gn6WbYDlGbYj%2FIYSQC05Mn2HUaHEHtX7z%2BM1Bi2FsDRD7gRRyVob3A%2BxMPHms8AGOqUBM3xBSinNydd11LAcHRVhyp4sOc3gr020mGNdCaQEbI4m%2FW5xi6qAW68Swt7%2FCd5def4yDaJSGevBclh6EckyqIvrhtz2kS6PtwOA6woNTW1uzOlvJt7FyiV56G0XY3lPkdVePSf7EUcLLjA8VgG%2FDWte3Zk%2F3iGI4M8T6s1pi93gBiub%2BMpGb6VgsyZNrsOOgJZT7MzNdqtmBea%2FAqQU46cw4bin&X-Amz-Signature=18ff31c6f6e9c41550b711f85310caa9fa9315cbae400ac12ee150391e7366af&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC7PZEQM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPDYExR6kHsQJiIhzbvlq9fZYlGSI%2FRu5t8BcYddrzzQIgeE7%2Fms3BPYaHzX7AAy8owKAHwpQlys2jiM355LXjsJUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMRqUvta8Z32K%2Fez%2FCrcA2kgmo5Pz9%2BbJJyEHMFJEHAl5T%2FVJjd97u4org0vKFW4bFCj73FD6LUF1MaBacdrfU9P3HiRz9zsmBjiYk0AiYBfvK9wWSVSjOlBH%2BpvIRcR8%2F1g8zNjVhawoKntmvn2kSYEuAS3NPb%2BzsUeOGxM4euWy571l0UR4jIsQbyIuLsFnLRV1kRztPrmZMe8i7cZeqiZBA2cT6EvQOyuB27hX28Eqecpn2hpDpvUkyBalaB%2BnRmpalhiyWbX97O6ARZKZTtL4u5%2FDMHG69gEx0oO0Th2Qg9iEGAqxYo%2FplW9bL4NJ%2FJTOoxPv4bSUzHPHZC4doSdtG5kziQ0TzcZQnnbTYXqe0J%2B5RRnwbFaXhPSWBadBUUjNpOZOQQJwxdmddH1Z%2FQ%2FIYL7l27KnKJyk27%2Fy2aMIfArCa5LjO4gkMIli4BUXLJ6qmRivNypNnKfBVCXY2iFuGZRyqWFQ2A4BXxd2N%2F15Pf8aosLGTPyU9XA%2BpV0AD0z0ziOZZc1TKSc3zHLk7yuxue6bfETyUL0nkR6c95NW7ZlKEZQ6BbkSqutpHA7KtCE9A4T0%2FKRZQGGyHlb2La1gn6WbYDlGbYj%2FIYSQC05Mn2HUaHEHtX7z%2BM1Bi2FsDRD7gRRyVob3A%2BxMPHms8AGOqUBM3xBSinNydd11LAcHRVhyp4sOc3gr020mGNdCaQEbI4m%2FW5xi6qAW68Swt7%2FCd5def4yDaJSGevBclh6EckyqIvrhtz2kS6PtwOA6woNTW1uzOlvJt7FyiV56G0XY3lPkdVePSf7EUcLLjA8VgG%2FDWte3Zk%2F3iGI4M8T6s1pi93gBiub%2BMpGb6VgsyZNrsOOgJZT7MzNdqtmBea%2FAqQU46cw4bin&X-Amz-Signature=33178ceb6099449c712c5414e684cd78f89d6fa12857c836b8c67fc09f0a813d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC7PZEQM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPDYExR6kHsQJiIhzbvlq9fZYlGSI%2FRu5t8BcYddrzzQIgeE7%2Fms3BPYaHzX7AAy8owKAHwpQlys2jiM355LXjsJUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMRqUvta8Z32K%2Fez%2FCrcA2kgmo5Pz9%2BbJJyEHMFJEHAl5T%2FVJjd97u4org0vKFW4bFCj73FD6LUF1MaBacdrfU9P3HiRz9zsmBjiYk0AiYBfvK9wWSVSjOlBH%2BpvIRcR8%2F1g8zNjVhawoKntmvn2kSYEuAS3NPb%2BzsUeOGxM4euWy571l0UR4jIsQbyIuLsFnLRV1kRztPrmZMe8i7cZeqiZBA2cT6EvQOyuB27hX28Eqecpn2hpDpvUkyBalaB%2BnRmpalhiyWbX97O6ARZKZTtL4u5%2FDMHG69gEx0oO0Th2Qg9iEGAqxYo%2FplW9bL4NJ%2FJTOoxPv4bSUzHPHZC4doSdtG5kziQ0TzcZQnnbTYXqe0J%2B5RRnwbFaXhPSWBadBUUjNpOZOQQJwxdmddH1Z%2FQ%2FIYL7l27KnKJyk27%2Fy2aMIfArCa5LjO4gkMIli4BUXLJ6qmRivNypNnKfBVCXY2iFuGZRyqWFQ2A4BXxd2N%2F15Pf8aosLGTPyU9XA%2BpV0AD0z0ziOZZc1TKSc3zHLk7yuxue6bfETyUL0nkR6c95NW7ZlKEZQ6BbkSqutpHA7KtCE9A4T0%2FKRZQGGyHlb2La1gn6WbYDlGbYj%2FIYSQC05Mn2HUaHEHtX7z%2BM1Bi2FsDRD7gRRyVob3A%2BxMPHms8AGOqUBM3xBSinNydd11LAcHRVhyp4sOc3gr020mGNdCaQEbI4m%2FW5xi6qAW68Swt7%2FCd5def4yDaJSGevBclh6EckyqIvrhtz2kS6PtwOA6woNTW1uzOlvJt7FyiV56G0XY3lPkdVePSf7EUcLLjA8VgG%2FDWte3Zk%2F3iGI4M8T6s1pi93gBiub%2BMpGb6VgsyZNrsOOgJZT7MzNdqtmBea%2FAqQU46cw4bin&X-Amz-Signature=05cf94b9a23dbc032258951f74c9dbd9dcc007f80eb40c75d268b3cc5259587c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
