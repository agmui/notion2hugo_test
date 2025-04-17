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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C2CHZ7C%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSAvuk8etjfzmT4XcVmranI%2F44gge0%2B0nbO9%2BIEwxegAiEAl%2F%2FkuYeA2oOgF5fpAt2%2FaGyyC0dnnHFqcJj2dszvC9Mq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKQjBo3KcsQemytPRCrcAzNo89RUJw6PVdha5GRVcIvAAsTpf78xYt6bP5VVEgKNd6jhqELOsjnqkzHBTRNHafOLANLfVabpSGu8%2B%2F%2FJkjIieg%2FrmZqMgeEAgBGm%2FwWihZ2CpsSC34YRIaz0aExx9HreE4R55mKXP1tE%2ByPbn3XXimesUHyDyeHrQxccdRGxsRNgv7BBXass4F%2FU8o5hx6YbsLGfVNN8tdg1jXKuv027Hi5WSaROF1XAWFqL6J00D5bm3RjAUSTRQE46B2pcR0XgZesl6Lqfb%2BSy2htxHRi8vpgKn%2Ff%2BOq7OgGBgnGcqW8mrnDD60r9cVk6ALJaHE4Tp1MX6DFjP3eAB3WIjbMjJI0o%2BKPBKUkD3CN%2BRToPIgZZLwduNrQ%2BsboOvKh%2B3nEG9MszsJmXSoALZjLd0zaiV4Zmr%2FA41w%2BkxMTNvUZV%2F6mpbt%2BNKlWy7%2BnYc2ZfjCMfj4r13akDXlRndHV6fyZSAhlspF8umiwT2222VzZYDwwPGkkWJk2qlafWityx4TeazNppOd4%2Fdl5nvKysKQXfz1gy6iNfojJJyK%2F7AqfP%2Bx1GsZJI6HNDSvvE51uz1PbegQ4r2DqmKOm8JTp7L%2BxIshsFixcERpzveLJG8oT2NPgcg0ONQvINoR3XiMKfRhcAGOqUBG66JKo12NVpqSorSsZecGNsOT%2B5Sj9%2F3uF%2BZVA4QVl6iWTArS689cnsANVv%2Fbjh8GYlSrOg5IOXy3YqyRzl1d%2Fo8%2FSrmUc0n4a0VpP3%2FaWffnKEsEQQrvJrFzkd7EN0hPtPRj5V9HeTJzfJBXNNAbKdOicLTO4LaQOcBKqnv9QMJdsS%2Fb8U%2BOdCgWYw2%2BaTwBbEXkkoT6gtdLjvZp6SKXbcuNpQF&X-Amz-Signature=7a30bf1cb6b2ecf7b1beb05facf9e8fb4b3addfde6fd9e47d0126a16c0464244&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C2CHZ7C%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSAvuk8etjfzmT4XcVmranI%2F44gge0%2B0nbO9%2BIEwxegAiEAl%2F%2FkuYeA2oOgF5fpAt2%2FaGyyC0dnnHFqcJj2dszvC9Mq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKQjBo3KcsQemytPRCrcAzNo89RUJw6PVdha5GRVcIvAAsTpf78xYt6bP5VVEgKNd6jhqELOsjnqkzHBTRNHafOLANLfVabpSGu8%2B%2F%2FJkjIieg%2FrmZqMgeEAgBGm%2FwWihZ2CpsSC34YRIaz0aExx9HreE4R55mKXP1tE%2ByPbn3XXimesUHyDyeHrQxccdRGxsRNgv7BBXass4F%2FU8o5hx6YbsLGfVNN8tdg1jXKuv027Hi5WSaROF1XAWFqL6J00D5bm3RjAUSTRQE46B2pcR0XgZesl6Lqfb%2BSy2htxHRi8vpgKn%2Ff%2BOq7OgGBgnGcqW8mrnDD60r9cVk6ALJaHE4Tp1MX6DFjP3eAB3WIjbMjJI0o%2BKPBKUkD3CN%2BRToPIgZZLwduNrQ%2BsboOvKh%2B3nEG9MszsJmXSoALZjLd0zaiV4Zmr%2FA41w%2BkxMTNvUZV%2F6mpbt%2BNKlWy7%2BnYc2ZfjCMfj4r13akDXlRndHV6fyZSAhlspF8umiwT2222VzZYDwwPGkkWJk2qlafWityx4TeazNppOd4%2Fdl5nvKysKQXfz1gy6iNfojJJyK%2F7AqfP%2Bx1GsZJI6HNDSvvE51uz1PbegQ4r2DqmKOm8JTp7L%2BxIshsFixcERpzveLJG8oT2NPgcg0ONQvINoR3XiMKfRhcAGOqUBG66JKo12NVpqSorSsZecGNsOT%2B5Sj9%2F3uF%2BZVA4QVl6iWTArS689cnsANVv%2Fbjh8GYlSrOg5IOXy3YqyRzl1d%2Fo8%2FSrmUc0n4a0VpP3%2FaWffnKEsEQQrvJrFzkd7EN0hPtPRj5V9HeTJzfJBXNNAbKdOicLTO4LaQOcBKqnv9QMJdsS%2Fb8U%2BOdCgWYw2%2BaTwBbEXkkoT6gtdLjvZp6SKXbcuNpQF&X-Amz-Signature=27eb6ca51e5aab7692627692feae84c53030bc694dedf8acde6a6ed4b596b21a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C2CHZ7C%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSAvuk8etjfzmT4XcVmranI%2F44gge0%2B0nbO9%2BIEwxegAiEAl%2F%2FkuYeA2oOgF5fpAt2%2FaGyyC0dnnHFqcJj2dszvC9Mq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKQjBo3KcsQemytPRCrcAzNo89RUJw6PVdha5GRVcIvAAsTpf78xYt6bP5VVEgKNd6jhqELOsjnqkzHBTRNHafOLANLfVabpSGu8%2B%2F%2FJkjIieg%2FrmZqMgeEAgBGm%2FwWihZ2CpsSC34YRIaz0aExx9HreE4R55mKXP1tE%2ByPbn3XXimesUHyDyeHrQxccdRGxsRNgv7BBXass4F%2FU8o5hx6YbsLGfVNN8tdg1jXKuv027Hi5WSaROF1XAWFqL6J00D5bm3RjAUSTRQE46B2pcR0XgZesl6Lqfb%2BSy2htxHRi8vpgKn%2Ff%2BOq7OgGBgnGcqW8mrnDD60r9cVk6ALJaHE4Tp1MX6DFjP3eAB3WIjbMjJI0o%2BKPBKUkD3CN%2BRToPIgZZLwduNrQ%2BsboOvKh%2B3nEG9MszsJmXSoALZjLd0zaiV4Zmr%2FA41w%2BkxMTNvUZV%2F6mpbt%2BNKlWy7%2BnYc2ZfjCMfj4r13akDXlRndHV6fyZSAhlspF8umiwT2222VzZYDwwPGkkWJk2qlafWityx4TeazNppOd4%2Fdl5nvKysKQXfz1gy6iNfojJJyK%2F7AqfP%2Bx1GsZJI6HNDSvvE51uz1PbegQ4r2DqmKOm8JTp7L%2BxIshsFixcERpzveLJG8oT2NPgcg0ONQvINoR3XiMKfRhcAGOqUBG66JKo12NVpqSorSsZecGNsOT%2B5Sj9%2F3uF%2BZVA4QVl6iWTArS689cnsANVv%2Fbjh8GYlSrOg5IOXy3YqyRzl1d%2Fo8%2FSrmUc0n4a0VpP3%2FaWffnKEsEQQrvJrFzkd7EN0hPtPRj5V9HeTJzfJBXNNAbKdOicLTO4LaQOcBKqnv9QMJdsS%2Fb8U%2BOdCgWYw2%2BaTwBbEXkkoT6gtdLjvZp6SKXbcuNpQF&X-Amz-Signature=24c7fa5703acb9b3716d2ce5c01a6aacb4b4e7d46cef3ece3fa008cd48f97851&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C2CHZ7C%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSAvuk8etjfzmT4XcVmranI%2F44gge0%2B0nbO9%2BIEwxegAiEAl%2F%2FkuYeA2oOgF5fpAt2%2FaGyyC0dnnHFqcJj2dszvC9Mq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKQjBo3KcsQemytPRCrcAzNo89RUJw6PVdha5GRVcIvAAsTpf78xYt6bP5VVEgKNd6jhqELOsjnqkzHBTRNHafOLANLfVabpSGu8%2B%2F%2FJkjIieg%2FrmZqMgeEAgBGm%2FwWihZ2CpsSC34YRIaz0aExx9HreE4R55mKXP1tE%2ByPbn3XXimesUHyDyeHrQxccdRGxsRNgv7BBXass4F%2FU8o5hx6YbsLGfVNN8tdg1jXKuv027Hi5WSaROF1XAWFqL6J00D5bm3RjAUSTRQE46B2pcR0XgZesl6Lqfb%2BSy2htxHRi8vpgKn%2Ff%2BOq7OgGBgnGcqW8mrnDD60r9cVk6ALJaHE4Tp1MX6DFjP3eAB3WIjbMjJI0o%2BKPBKUkD3CN%2BRToPIgZZLwduNrQ%2BsboOvKh%2B3nEG9MszsJmXSoALZjLd0zaiV4Zmr%2FA41w%2BkxMTNvUZV%2F6mpbt%2BNKlWy7%2BnYc2ZfjCMfj4r13akDXlRndHV6fyZSAhlspF8umiwT2222VzZYDwwPGkkWJk2qlafWityx4TeazNppOd4%2Fdl5nvKysKQXfz1gy6iNfojJJyK%2F7AqfP%2Bx1GsZJI6HNDSvvE51uz1PbegQ4r2DqmKOm8JTp7L%2BxIshsFixcERpzveLJG8oT2NPgcg0ONQvINoR3XiMKfRhcAGOqUBG66JKo12NVpqSorSsZecGNsOT%2B5Sj9%2F3uF%2BZVA4QVl6iWTArS689cnsANVv%2Fbjh8GYlSrOg5IOXy3YqyRzl1d%2Fo8%2FSrmUc0n4a0VpP3%2FaWffnKEsEQQrvJrFzkd7EN0hPtPRj5V9HeTJzfJBXNNAbKdOicLTO4LaQOcBKqnv9QMJdsS%2Fb8U%2BOdCgWYw2%2BaTwBbEXkkoT6gtdLjvZp6SKXbcuNpQF&X-Amz-Signature=bafc1b11c7037aed4830efde67739e8e17c7361bf8762294f375a53bd0b2211a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C2CHZ7C%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSAvuk8etjfzmT4XcVmranI%2F44gge0%2B0nbO9%2BIEwxegAiEAl%2F%2FkuYeA2oOgF5fpAt2%2FaGyyC0dnnHFqcJj2dszvC9Mq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKQjBo3KcsQemytPRCrcAzNo89RUJw6PVdha5GRVcIvAAsTpf78xYt6bP5VVEgKNd6jhqELOsjnqkzHBTRNHafOLANLfVabpSGu8%2B%2F%2FJkjIieg%2FrmZqMgeEAgBGm%2FwWihZ2CpsSC34YRIaz0aExx9HreE4R55mKXP1tE%2ByPbn3XXimesUHyDyeHrQxccdRGxsRNgv7BBXass4F%2FU8o5hx6YbsLGfVNN8tdg1jXKuv027Hi5WSaROF1XAWFqL6J00D5bm3RjAUSTRQE46B2pcR0XgZesl6Lqfb%2BSy2htxHRi8vpgKn%2Ff%2BOq7OgGBgnGcqW8mrnDD60r9cVk6ALJaHE4Tp1MX6DFjP3eAB3WIjbMjJI0o%2BKPBKUkD3CN%2BRToPIgZZLwduNrQ%2BsboOvKh%2B3nEG9MszsJmXSoALZjLd0zaiV4Zmr%2FA41w%2BkxMTNvUZV%2F6mpbt%2BNKlWy7%2BnYc2ZfjCMfj4r13akDXlRndHV6fyZSAhlspF8umiwT2222VzZYDwwPGkkWJk2qlafWityx4TeazNppOd4%2Fdl5nvKysKQXfz1gy6iNfojJJyK%2F7AqfP%2Bx1GsZJI6HNDSvvE51uz1PbegQ4r2DqmKOm8JTp7L%2BxIshsFixcERpzveLJG8oT2NPgcg0ONQvINoR3XiMKfRhcAGOqUBG66JKo12NVpqSorSsZecGNsOT%2B5Sj9%2F3uF%2BZVA4QVl6iWTArS689cnsANVv%2Fbjh8GYlSrOg5IOXy3YqyRzl1d%2Fo8%2FSrmUc0n4a0VpP3%2FaWffnKEsEQQrvJrFzkd7EN0hPtPRj5V9HeTJzfJBXNNAbKdOicLTO4LaQOcBKqnv9QMJdsS%2Fb8U%2BOdCgWYw2%2BaTwBbEXkkoT6gtdLjvZp6SKXbcuNpQF&X-Amz-Signature=4c8cca3bba21c69c49a177b1d3adda238529502ce0e78d25746fac690ff04481&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C2CHZ7C%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSAvuk8etjfzmT4XcVmranI%2F44gge0%2B0nbO9%2BIEwxegAiEAl%2F%2FkuYeA2oOgF5fpAt2%2FaGyyC0dnnHFqcJj2dszvC9Mq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKQjBo3KcsQemytPRCrcAzNo89RUJw6PVdha5GRVcIvAAsTpf78xYt6bP5VVEgKNd6jhqELOsjnqkzHBTRNHafOLANLfVabpSGu8%2B%2F%2FJkjIieg%2FrmZqMgeEAgBGm%2FwWihZ2CpsSC34YRIaz0aExx9HreE4R55mKXP1tE%2ByPbn3XXimesUHyDyeHrQxccdRGxsRNgv7BBXass4F%2FU8o5hx6YbsLGfVNN8tdg1jXKuv027Hi5WSaROF1XAWFqL6J00D5bm3RjAUSTRQE46B2pcR0XgZesl6Lqfb%2BSy2htxHRi8vpgKn%2Ff%2BOq7OgGBgnGcqW8mrnDD60r9cVk6ALJaHE4Tp1MX6DFjP3eAB3WIjbMjJI0o%2BKPBKUkD3CN%2BRToPIgZZLwduNrQ%2BsboOvKh%2B3nEG9MszsJmXSoALZjLd0zaiV4Zmr%2FA41w%2BkxMTNvUZV%2F6mpbt%2BNKlWy7%2BnYc2ZfjCMfj4r13akDXlRndHV6fyZSAhlspF8umiwT2222VzZYDwwPGkkWJk2qlafWityx4TeazNppOd4%2Fdl5nvKysKQXfz1gy6iNfojJJyK%2F7AqfP%2Bx1GsZJI6HNDSvvE51uz1PbegQ4r2DqmKOm8JTp7L%2BxIshsFixcERpzveLJG8oT2NPgcg0ONQvINoR3XiMKfRhcAGOqUBG66JKo12NVpqSorSsZecGNsOT%2B5Sj9%2F3uF%2BZVA4QVl6iWTArS689cnsANVv%2Fbjh8GYlSrOg5IOXy3YqyRzl1d%2Fo8%2FSrmUc0n4a0VpP3%2FaWffnKEsEQQrvJrFzkd7EN0hPtPRj5V9HeTJzfJBXNNAbKdOicLTO4LaQOcBKqnv9QMJdsS%2Fb8U%2BOdCgWYw2%2BaTwBbEXkkoT6gtdLjvZp6SKXbcuNpQF&X-Amz-Signature=3935936421cfde7dc0513da700bced9d38b93f0b3c406f0d41213346f326073e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C2CHZ7C%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSAvuk8etjfzmT4XcVmranI%2F44gge0%2B0nbO9%2BIEwxegAiEAl%2F%2FkuYeA2oOgF5fpAt2%2FaGyyC0dnnHFqcJj2dszvC9Mq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKQjBo3KcsQemytPRCrcAzNo89RUJw6PVdha5GRVcIvAAsTpf78xYt6bP5VVEgKNd6jhqELOsjnqkzHBTRNHafOLANLfVabpSGu8%2B%2F%2FJkjIieg%2FrmZqMgeEAgBGm%2FwWihZ2CpsSC34YRIaz0aExx9HreE4R55mKXP1tE%2ByPbn3XXimesUHyDyeHrQxccdRGxsRNgv7BBXass4F%2FU8o5hx6YbsLGfVNN8tdg1jXKuv027Hi5WSaROF1XAWFqL6J00D5bm3RjAUSTRQE46B2pcR0XgZesl6Lqfb%2BSy2htxHRi8vpgKn%2Ff%2BOq7OgGBgnGcqW8mrnDD60r9cVk6ALJaHE4Tp1MX6DFjP3eAB3WIjbMjJI0o%2BKPBKUkD3CN%2BRToPIgZZLwduNrQ%2BsboOvKh%2B3nEG9MszsJmXSoALZjLd0zaiV4Zmr%2FA41w%2BkxMTNvUZV%2F6mpbt%2BNKlWy7%2BnYc2ZfjCMfj4r13akDXlRndHV6fyZSAhlspF8umiwT2222VzZYDwwPGkkWJk2qlafWityx4TeazNppOd4%2Fdl5nvKysKQXfz1gy6iNfojJJyK%2F7AqfP%2Bx1GsZJI6HNDSvvE51uz1PbegQ4r2DqmKOm8JTp7L%2BxIshsFixcERpzveLJG8oT2NPgcg0ONQvINoR3XiMKfRhcAGOqUBG66JKo12NVpqSorSsZecGNsOT%2B5Sj9%2F3uF%2BZVA4QVl6iWTArS689cnsANVv%2Fbjh8GYlSrOg5IOXy3YqyRzl1d%2Fo8%2FSrmUc0n4a0VpP3%2FaWffnKEsEQQrvJrFzkd7EN0hPtPRj5V9HeTJzfJBXNNAbKdOicLTO4LaQOcBKqnv9QMJdsS%2Fb8U%2BOdCgWYw2%2BaTwBbEXkkoT6gtdLjvZp6SKXbcuNpQF&X-Amz-Signature=e22269983912aa7da594c284e4e3b61cb94d2fec5ef491b151272f397007583e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
