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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFI3BGAJ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIE4Su50%2BBEAHtbUGmV8lCHsYe7LAEhyfVtrVkWVF7jq3AiEAlpBccRmfnkRiidio7aolq%2FvjWPioufqFV7BqYJ7OUkAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsuBa2gjNCTpLOheSrcA0TkQAtV3hQczBB5Cvv3Eb5jEVrCaCuuedXK%2BgEeaxVOim%2FDb%2FtBbhnnOEcj1t1SPDd1MA%2FmiSCKtfrPYWUntxL1hYHMhY327ruWCI2y3oykV%2BwXeqkAawL%2BNC4j93XTvG1B%2BfnEDBrHCLQ3sDXk8nqyntt8G2LJsbZhze7Sqpja1OILQ5Fb4WVG%2B95PQ%2Bm%2FrAsouO0pNroUw0NqSRsmBiy%2BySe%2Bqy2LJzPwZADhSKLzFbjzBVmpRS3X8%2FhtUrzapq0%2BS7b%2BbTKZ39sM7PMv3rtv80eU3SJ02K5APvRT859BUpIbJyRaxZaVcHe0%2BjbhtMzHxBbKGVSrdVGbf0c38PiqKZ1B341djjbEpkjM4v4WqHX1y%2F2uRzzVgBggjLLaznCRQ66MYbQa1o9GjkvAZX9HfCAkoIhG2iREv2WTHXKffbWaX%2BiqIo%2FUsGebjxr1bgQy0s1wBvCJ%2BsewuHr%2BvaHBSlBT7cQRP8qT6qAH6OUlOpeowBSQmRyvN8hn02xt42GUJH882xcqihAUXPd85tNzOQo%2FO5gvUogR%2FdmuBD1MXU%2BznXfZnQSDFBi4G%2BIkgg4sj3DXTJEomZrlJLOYoy7GmDi%2FtQz8YXX1U6XanXpuMxBzbEO%2Fq0dLgxoBMKvKwL4GOqUBgN8Mi7aYHKVJ0GVPoyNt%2Fwoic%2Bd6Psk7bFqDuSMDpxFunT775wFGv0rL35w68sXl4f4dNu9Bzo8mKC5837L9ONQP7ii6pGkGL3XMJo%2BRMZa1SvmtSXo%2BD3j3d2TEp%2Fh%2B9pkl%2FIqS%2FnZ%2F%2B6pYRB%2B2JftM5K3fyff9Hekku%2FXiEH1Aol4hj%2BgTAXgnnOSBtfXkcnHfJJSYNvu8YWTJf8FNjTez2cf4&X-Amz-Signature=8fa3424321ed2d2c7bf8b36389fe8f07a95e761f3dd6471a9fce74c271839f93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFI3BGAJ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIE4Su50%2BBEAHtbUGmV8lCHsYe7LAEhyfVtrVkWVF7jq3AiEAlpBccRmfnkRiidio7aolq%2FvjWPioufqFV7BqYJ7OUkAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsuBa2gjNCTpLOheSrcA0TkQAtV3hQczBB5Cvv3Eb5jEVrCaCuuedXK%2BgEeaxVOim%2FDb%2FtBbhnnOEcj1t1SPDd1MA%2FmiSCKtfrPYWUntxL1hYHMhY327ruWCI2y3oykV%2BwXeqkAawL%2BNC4j93XTvG1B%2BfnEDBrHCLQ3sDXk8nqyntt8G2LJsbZhze7Sqpja1OILQ5Fb4WVG%2B95PQ%2Bm%2FrAsouO0pNroUw0NqSRsmBiy%2BySe%2Bqy2LJzPwZADhSKLzFbjzBVmpRS3X8%2FhtUrzapq0%2BS7b%2BbTKZ39sM7PMv3rtv80eU3SJ02K5APvRT859BUpIbJyRaxZaVcHe0%2BjbhtMzHxBbKGVSrdVGbf0c38PiqKZ1B341djjbEpkjM4v4WqHX1y%2F2uRzzVgBggjLLaznCRQ66MYbQa1o9GjkvAZX9HfCAkoIhG2iREv2WTHXKffbWaX%2BiqIo%2FUsGebjxr1bgQy0s1wBvCJ%2BsewuHr%2BvaHBSlBT7cQRP8qT6qAH6OUlOpeowBSQmRyvN8hn02xt42GUJH882xcqihAUXPd85tNzOQo%2FO5gvUogR%2FdmuBD1MXU%2BznXfZnQSDFBi4G%2BIkgg4sj3DXTJEomZrlJLOYoy7GmDi%2FtQz8YXX1U6XanXpuMxBzbEO%2Fq0dLgxoBMKvKwL4GOqUBgN8Mi7aYHKVJ0GVPoyNt%2Fwoic%2Bd6Psk7bFqDuSMDpxFunT775wFGv0rL35w68sXl4f4dNu9Bzo8mKC5837L9ONQP7ii6pGkGL3XMJo%2BRMZa1SvmtSXo%2BD3j3d2TEp%2Fh%2B9pkl%2FIqS%2FnZ%2F%2B6pYRB%2B2JftM5K3fyff9Hekku%2FXiEH1Aol4hj%2BgTAXgnnOSBtfXkcnHfJJSYNvu8YWTJf8FNjTez2cf4&X-Amz-Signature=d33bdc1e1ae3b0d08cde52007282084913d0e3ca54f5d5c80a10c3a39845c26e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFI3BGAJ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIE4Su50%2BBEAHtbUGmV8lCHsYe7LAEhyfVtrVkWVF7jq3AiEAlpBccRmfnkRiidio7aolq%2FvjWPioufqFV7BqYJ7OUkAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsuBa2gjNCTpLOheSrcA0TkQAtV3hQczBB5Cvv3Eb5jEVrCaCuuedXK%2BgEeaxVOim%2FDb%2FtBbhnnOEcj1t1SPDd1MA%2FmiSCKtfrPYWUntxL1hYHMhY327ruWCI2y3oykV%2BwXeqkAawL%2BNC4j93XTvG1B%2BfnEDBrHCLQ3sDXk8nqyntt8G2LJsbZhze7Sqpja1OILQ5Fb4WVG%2B95PQ%2Bm%2FrAsouO0pNroUw0NqSRsmBiy%2BySe%2Bqy2LJzPwZADhSKLzFbjzBVmpRS3X8%2FhtUrzapq0%2BS7b%2BbTKZ39sM7PMv3rtv80eU3SJ02K5APvRT859BUpIbJyRaxZaVcHe0%2BjbhtMzHxBbKGVSrdVGbf0c38PiqKZ1B341djjbEpkjM4v4WqHX1y%2F2uRzzVgBggjLLaznCRQ66MYbQa1o9GjkvAZX9HfCAkoIhG2iREv2WTHXKffbWaX%2BiqIo%2FUsGebjxr1bgQy0s1wBvCJ%2BsewuHr%2BvaHBSlBT7cQRP8qT6qAH6OUlOpeowBSQmRyvN8hn02xt42GUJH882xcqihAUXPd85tNzOQo%2FO5gvUogR%2FdmuBD1MXU%2BznXfZnQSDFBi4G%2BIkgg4sj3DXTJEomZrlJLOYoy7GmDi%2FtQz8YXX1U6XanXpuMxBzbEO%2Fq0dLgxoBMKvKwL4GOqUBgN8Mi7aYHKVJ0GVPoyNt%2Fwoic%2Bd6Psk7bFqDuSMDpxFunT775wFGv0rL35w68sXl4f4dNu9Bzo8mKC5837L9ONQP7ii6pGkGL3XMJo%2BRMZa1SvmtSXo%2BD3j3d2TEp%2Fh%2B9pkl%2FIqS%2FnZ%2F%2B6pYRB%2B2JftM5K3fyff9Hekku%2FXiEH1Aol4hj%2BgTAXgnnOSBtfXkcnHfJJSYNvu8YWTJf8FNjTez2cf4&X-Amz-Signature=66a03e6f8f85a4c0aff7c6d42d3e2af3bdb999c7186b53a5f8a7ef390fc18f0b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFI3BGAJ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIE4Su50%2BBEAHtbUGmV8lCHsYe7LAEhyfVtrVkWVF7jq3AiEAlpBccRmfnkRiidio7aolq%2FvjWPioufqFV7BqYJ7OUkAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsuBa2gjNCTpLOheSrcA0TkQAtV3hQczBB5Cvv3Eb5jEVrCaCuuedXK%2BgEeaxVOim%2FDb%2FtBbhnnOEcj1t1SPDd1MA%2FmiSCKtfrPYWUntxL1hYHMhY327ruWCI2y3oykV%2BwXeqkAawL%2BNC4j93XTvG1B%2BfnEDBrHCLQ3sDXk8nqyntt8G2LJsbZhze7Sqpja1OILQ5Fb4WVG%2B95PQ%2Bm%2FrAsouO0pNroUw0NqSRsmBiy%2BySe%2Bqy2LJzPwZADhSKLzFbjzBVmpRS3X8%2FhtUrzapq0%2BS7b%2BbTKZ39sM7PMv3rtv80eU3SJ02K5APvRT859BUpIbJyRaxZaVcHe0%2BjbhtMzHxBbKGVSrdVGbf0c38PiqKZ1B341djjbEpkjM4v4WqHX1y%2F2uRzzVgBggjLLaznCRQ66MYbQa1o9GjkvAZX9HfCAkoIhG2iREv2WTHXKffbWaX%2BiqIo%2FUsGebjxr1bgQy0s1wBvCJ%2BsewuHr%2BvaHBSlBT7cQRP8qT6qAH6OUlOpeowBSQmRyvN8hn02xt42GUJH882xcqihAUXPd85tNzOQo%2FO5gvUogR%2FdmuBD1MXU%2BznXfZnQSDFBi4G%2BIkgg4sj3DXTJEomZrlJLOYoy7GmDi%2FtQz8YXX1U6XanXpuMxBzbEO%2Fq0dLgxoBMKvKwL4GOqUBgN8Mi7aYHKVJ0GVPoyNt%2Fwoic%2Bd6Psk7bFqDuSMDpxFunT775wFGv0rL35w68sXl4f4dNu9Bzo8mKC5837L9ONQP7ii6pGkGL3XMJo%2BRMZa1SvmtSXo%2BD3j3d2TEp%2Fh%2B9pkl%2FIqS%2FnZ%2F%2B6pYRB%2B2JftM5K3fyff9Hekku%2FXiEH1Aol4hj%2BgTAXgnnOSBtfXkcnHfJJSYNvu8YWTJf8FNjTez2cf4&X-Amz-Signature=ec527fa75a496190257adad9215d6d07c48e011de6a8b2452075252213e88383&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFI3BGAJ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIE4Su50%2BBEAHtbUGmV8lCHsYe7LAEhyfVtrVkWVF7jq3AiEAlpBccRmfnkRiidio7aolq%2FvjWPioufqFV7BqYJ7OUkAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsuBa2gjNCTpLOheSrcA0TkQAtV3hQczBB5Cvv3Eb5jEVrCaCuuedXK%2BgEeaxVOim%2FDb%2FtBbhnnOEcj1t1SPDd1MA%2FmiSCKtfrPYWUntxL1hYHMhY327ruWCI2y3oykV%2BwXeqkAawL%2BNC4j93XTvG1B%2BfnEDBrHCLQ3sDXk8nqyntt8G2LJsbZhze7Sqpja1OILQ5Fb4WVG%2B95PQ%2Bm%2FrAsouO0pNroUw0NqSRsmBiy%2BySe%2Bqy2LJzPwZADhSKLzFbjzBVmpRS3X8%2FhtUrzapq0%2BS7b%2BbTKZ39sM7PMv3rtv80eU3SJ02K5APvRT859BUpIbJyRaxZaVcHe0%2BjbhtMzHxBbKGVSrdVGbf0c38PiqKZ1B341djjbEpkjM4v4WqHX1y%2F2uRzzVgBggjLLaznCRQ66MYbQa1o9GjkvAZX9HfCAkoIhG2iREv2WTHXKffbWaX%2BiqIo%2FUsGebjxr1bgQy0s1wBvCJ%2BsewuHr%2BvaHBSlBT7cQRP8qT6qAH6OUlOpeowBSQmRyvN8hn02xt42GUJH882xcqihAUXPd85tNzOQo%2FO5gvUogR%2FdmuBD1MXU%2BznXfZnQSDFBi4G%2BIkgg4sj3DXTJEomZrlJLOYoy7GmDi%2FtQz8YXX1U6XanXpuMxBzbEO%2Fq0dLgxoBMKvKwL4GOqUBgN8Mi7aYHKVJ0GVPoyNt%2Fwoic%2Bd6Psk7bFqDuSMDpxFunT775wFGv0rL35w68sXl4f4dNu9Bzo8mKC5837L9ONQP7ii6pGkGL3XMJo%2BRMZa1SvmtSXo%2BD3j3d2TEp%2Fh%2B9pkl%2FIqS%2FnZ%2F%2B6pYRB%2B2JftM5K3fyff9Hekku%2FXiEH1Aol4hj%2BgTAXgnnOSBtfXkcnHfJJSYNvu8YWTJf8FNjTez2cf4&X-Amz-Signature=0f6d0b2734929dfbc49ee37fe93f1001dad0f8299c6841d2f0be9d998608b87c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFI3BGAJ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIE4Su50%2BBEAHtbUGmV8lCHsYe7LAEhyfVtrVkWVF7jq3AiEAlpBccRmfnkRiidio7aolq%2FvjWPioufqFV7BqYJ7OUkAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsuBa2gjNCTpLOheSrcA0TkQAtV3hQczBB5Cvv3Eb5jEVrCaCuuedXK%2BgEeaxVOim%2FDb%2FtBbhnnOEcj1t1SPDd1MA%2FmiSCKtfrPYWUntxL1hYHMhY327ruWCI2y3oykV%2BwXeqkAawL%2BNC4j93XTvG1B%2BfnEDBrHCLQ3sDXk8nqyntt8G2LJsbZhze7Sqpja1OILQ5Fb4WVG%2B95PQ%2Bm%2FrAsouO0pNroUw0NqSRsmBiy%2BySe%2Bqy2LJzPwZADhSKLzFbjzBVmpRS3X8%2FhtUrzapq0%2BS7b%2BbTKZ39sM7PMv3rtv80eU3SJ02K5APvRT859BUpIbJyRaxZaVcHe0%2BjbhtMzHxBbKGVSrdVGbf0c38PiqKZ1B341djjbEpkjM4v4WqHX1y%2F2uRzzVgBggjLLaznCRQ66MYbQa1o9GjkvAZX9HfCAkoIhG2iREv2WTHXKffbWaX%2BiqIo%2FUsGebjxr1bgQy0s1wBvCJ%2BsewuHr%2BvaHBSlBT7cQRP8qT6qAH6OUlOpeowBSQmRyvN8hn02xt42GUJH882xcqihAUXPd85tNzOQo%2FO5gvUogR%2FdmuBD1MXU%2BznXfZnQSDFBi4G%2BIkgg4sj3DXTJEomZrlJLOYoy7GmDi%2FtQz8YXX1U6XanXpuMxBzbEO%2Fq0dLgxoBMKvKwL4GOqUBgN8Mi7aYHKVJ0GVPoyNt%2Fwoic%2Bd6Psk7bFqDuSMDpxFunT775wFGv0rL35w68sXl4f4dNu9Bzo8mKC5837L9ONQP7ii6pGkGL3XMJo%2BRMZa1SvmtSXo%2BD3j3d2TEp%2Fh%2B9pkl%2FIqS%2FnZ%2F%2B6pYRB%2B2JftM5K3fyff9Hekku%2FXiEH1Aol4hj%2BgTAXgnnOSBtfXkcnHfJJSYNvu8YWTJf8FNjTez2cf4&X-Amz-Signature=cefe624b126bafa5c345ed3097c51d434e50964c80cdfed47e8891fe814b0243&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFI3BGAJ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIE4Su50%2BBEAHtbUGmV8lCHsYe7LAEhyfVtrVkWVF7jq3AiEAlpBccRmfnkRiidio7aolq%2FvjWPioufqFV7BqYJ7OUkAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsuBa2gjNCTpLOheSrcA0TkQAtV3hQczBB5Cvv3Eb5jEVrCaCuuedXK%2BgEeaxVOim%2FDb%2FtBbhnnOEcj1t1SPDd1MA%2FmiSCKtfrPYWUntxL1hYHMhY327ruWCI2y3oykV%2BwXeqkAawL%2BNC4j93XTvG1B%2BfnEDBrHCLQ3sDXk8nqyntt8G2LJsbZhze7Sqpja1OILQ5Fb4WVG%2B95PQ%2Bm%2FrAsouO0pNroUw0NqSRsmBiy%2BySe%2Bqy2LJzPwZADhSKLzFbjzBVmpRS3X8%2FhtUrzapq0%2BS7b%2BbTKZ39sM7PMv3rtv80eU3SJ02K5APvRT859BUpIbJyRaxZaVcHe0%2BjbhtMzHxBbKGVSrdVGbf0c38PiqKZ1B341djjbEpkjM4v4WqHX1y%2F2uRzzVgBggjLLaznCRQ66MYbQa1o9GjkvAZX9HfCAkoIhG2iREv2WTHXKffbWaX%2BiqIo%2FUsGebjxr1bgQy0s1wBvCJ%2BsewuHr%2BvaHBSlBT7cQRP8qT6qAH6OUlOpeowBSQmRyvN8hn02xt42GUJH882xcqihAUXPd85tNzOQo%2FO5gvUogR%2FdmuBD1MXU%2BznXfZnQSDFBi4G%2BIkgg4sj3DXTJEomZrlJLOYoy7GmDi%2FtQz8YXX1U6XanXpuMxBzbEO%2Fq0dLgxoBMKvKwL4GOqUBgN8Mi7aYHKVJ0GVPoyNt%2Fwoic%2Bd6Psk7bFqDuSMDpxFunT775wFGv0rL35w68sXl4f4dNu9Bzo8mKC5837L9ONQP7ii6pGkGL3XMJo%2BRMZa1SvmtSXo%2BD3j3d2TEp%2Fh%2B9pkl%2FIqS%2FnZ%2F%2B6pYRB%2B2JftM5K3fyff9Hekku%2FXiEH1Aol4hj%2BgTAXgnnOSBtfXkcnHfJJSYNvu8YWTJf8FNjTez2cf4&X-Amz-Signature=da8b8e8a368c479334a7c411b781784a0dca8724f454b27cf1488d27fee922cd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
