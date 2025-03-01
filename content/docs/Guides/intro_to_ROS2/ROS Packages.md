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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGYKELHE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHZiNve5VuEuMtBvDeoaXUtgpNQ7l0YeLyplGDFIBtHnAiEA%2FA5Zn%2FJSDmahy%2FO6ZkzrmX2HtI8ALgOEsmJ8WFB4eUYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6QaXZUU%2F2Yg4CCVyrcA3kma2Ene0nXhgXy%2FiLKniuZdgeMPjHCLJVWEOYutoKpcfampqPd1CQzqxTb2TWLkNjVnjeQHKZ5MbDBSAGqfYfqn95AuqIaQeXdZuUyNwK6jquVAo26myQK1OepaCfw9lulDIh0ppOZ6YPIAmfPipM%2BVYhNSvVyw%2FbBXyA4%2Fp9lqZSd%2Fe0wq%2BO%2FmGt5AzGNhzrDdlUabkCKX5TGs5cltwpzm51yy4x%2F5WqN%2Bx6vy5mPHJbLcv3zKuNI0skURMrkByPTi77yRpetoSC9AhWpUgG8FWR%2FAXj43pCZfB%2FRSbMUSUzmNxQeU1Dr%2BjkZABZfnECzl3f68HA3QozsqFInm47qfu56HRxU4Dng7Eb7dLDvrXXQ78nPbD2P1gptXkS5qg6Bkg9DvkEKi3B5JZ7mOBJvHBtxSwft%2F6ySAL4W%2F9BS8SVuY4eEOXS%2Bfl0Fak3xuHG1KuOWna1H%2B0r0o1Twy%2FE1OnNgXG2lDdSQtE%2BaKPVPvQaoYhi8xTygOkpSFc2QwjTUhx0671T0tje9VSgiXpstKshZ0xy8xXuFFOk4NmzAmxCm9UUjNk65kGYxnSBcjqxRoJ9czVXwHbT7FH1M2OqTyp1i75duQ4tyWiVa4wKxW4xVgOBIe5hXd2WbML2Qir4GOqUBafXCqzijP1sFTfCxn1xa7x4IoWmj4VwFT9zjWfW12R6w%2FozhBQtNXvYXx3sVy%2FOXrNPDJ5ZSe%2Fod%2Bgvf1Bdn1ytg7RHqN9sAc9BdnkoiwHHdBLs60Grwr1EaPv4%2B4Hyc%2BuVZZxSYPYatOIvmhnhm3TcdufrOpyOiT0wvRwvH%2FkzblFirA5fdCcqMI1jln7iwsFeL4Z171eFDmzP9ORIVvB6vVzAW&X-Amz-Signature=7876f281f319dd25961aca76f8ed859736dca7d75cac5ebf0603fcf13e5361ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGYKELHE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHZiNve5VuEuMtBvDeoaXUtgpNQ7l0YeLyplGDFIBtHnAiEA%2FA5Zn%2FJSDmahy%2FO6ZkzrmX2HtI8ALgOEsmJ8WFB4eUYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6QaXZUU%2F2Yg4CCVyrcA3kma2Ene0nXhgXy%2FiLKniuZdgeMPjHCLJVWEOYutoKpcfampqPd1CQzqxTb2TWLkNjVnjeQHKZ5MbDBSAGqfYfqn95AuqIaQeXdZuUyNwK6jquVAo26myQK1OepaCfw9lulDIh0ppOZ6YPIAmfPipM%2BVYhNSvVyw%2FbBXyA4%2Fp9lqZSd%2Fe0wq%2BO%2FmGt5AzGNhzrDdlUabkCKX5TGs5cltwpzm51yy4x%2F5WqN%2Bx6vy5mPHJbLcv3zKuNI0skURMrkByPTi77yRpetoSC9AhWpUgG8FWR%2FAXj43pCZfB%2FRSbMUSUzmNxQeU1Dr%2BjkZABZfnECzl3f68HA3QozsqFInm47qfu56HRxU4Dng7Eb7dLDvrXXQ78nPbD2P1gptXkS5qg6Bkg9DvkEKi3B5JZ7mOBJvHBtxSwft%2F6ySAL4W%2F9BS8SVuY4eEOXS%2Bfl0Fak3xuHG1KuOWna1H%2B0r0o1Twy%2FE1OnNgXG2lDdSQtE%2BaKPVPvQaoYhi8xTygOkpSFc2QwjTUhx0671T0tje9VSgiXpstKshZ0xy8xXuFFOk4NmzAmxCm9UUjNk65kGYxnSBcjqxRoJ9czVXwHbT7FH1M2OqTyp1i75duQ4tyWiVa4wKxW4xVgOBIe5hXd2WbML2Qir4GOqUBafXCqzijP1sFTfCxn1xa7x4IoWmj4VwFT9zjWfW12R6w%2FozhBQtNXvYXx3sVy%2FOXrNPDJ5ZSe%2Fod%2Bgvf1Bdn1ytg7RHqN9sAc9BdnkoiwHHdBLs60Grwr1EaPv4%2B4Hyc%2BuVZZxSYPYatOIvmhnhm3TcdufrOpyOiT0wvRwvH%2FkzblFirA5fdCcqMI1jln7iwsFeL4Z171eFDmzP9ORIVvB6vVzAW&X-Amz-Signature=0001fa46dc0acc7e07aa69e6761c91a9e595fd6accf870e99ab9e0488772be21&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGYKELHE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHZiNve5VuEuMtBvDeoaXUtgpNQ7l0YeLyplGDFIBtHnAiEA%2FA5Zn%2FJSDmahy%2FO6ZkzrmX2HtI8ALgOEsmJ8WFB4eUYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6QaXZUU%2F2Yg4CCVyrcA3kma2Ene0nXhgXy%2FiLKniuZdgeMPjHCLJVWEOYutoKpcfampqPd1CQzqxTb2TWLkNjVnjeQHKZ5MbDBSAGqfYfqn95AuqIaQeXdZuUyNwK6jquVAo26myQK1OepaCfw9lulDIh0ppOZ6YPIAmfPipM%2BVYhNSvVyw%2FbBXyA4%2Fp9lqZSd%2Fe0wq%2BO%2FmGt5AzGNhzrDdlUabkCKX5TGs5cltwpzm51yy4x%2F5WqN%2Bx6vy5mPHJbLcv3zKuNI0skURMrkByPTi77yRpetoSC9AhWpUgG8FWR%2FAXj43pCZfB%2FRSbMUSUzmNxQeU1Dr%2BjkZABZfnECzl3f68HA3QozsqFInm47qfu56HRxU4Dng7Eb7dLDvrXXQ78nPbD2P1gptXkS5qg6Bkg9DvkEKi3B5JZ7mOBJvHBtxSwft%2F6ySAL4W%2F9BS8SVuY4eEOXS%2Bfl0Fak3xuHG1KuOWna1H%2B0r0o1Twy%2FE1OnNgXG2lDdSQtE%2BaKPVPvQaoYhi8xTygOkpSFc2QwjTUhx0671T0tje9VSgiXpstKshZ0xy8xXuFFOk4NmzAmxCm9UUjNk65kGYxnSBcjqxRoJ9czVXwHbT7FH1M2OqTyp1i75duQ4tyWiVa4wKxW4xVgOBIe5hXd2WbML2Qir4GOqUBafXCqzijP1sFTfCxn1xa7x4IoWmj4VwFT9zjWfW12R6w%2FozhBQtNXvYXx3sVy%2FOXrNPDJ5ZSe%2Fod%2Bgvf1Bdn1ytg7RHqN9sAc9BdnkoiwHHdBLs60Grwr1EaPv4%2B4Hyc%2BuVZZxSYPYatOIvmhnhm3TcdufrOpyOiT0wvRwvH%2FkzblFirA5fdCcqMI1jln7iwsFeL4Z171eFDmzP9ORIVvB6vVzAW&X-Amz-Signature=98381b4cd6fe5182e2d3724f110f44b2917404b92a8d0983e01a0142ce44cb0b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGYKELHE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHZiNve5VuEuMtBvDeoaXUtgpNQ7l0YeLyplGDFIBtHnAiEA%2FA5Zn%2FJSDmahy%2FO6ZkzrmX2HtI8ALgOEsmJ8WFB4eUYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6QaXZUU%2F2Yg4CCVyrcA3kma2Ene0nXhgXy%2FiLKniuZdgeMPjHCLJVWEOYutoKpcfampqPd1CQzqxTb2TWLkNjVnjeQHKZ5MbDBSAGqfYfqn95AuqIaQeXdZuUyNwK6jquVAo26myQK1OepaCfw9lulDIh0ppOZ6YPIAmfPipM%2BVYhNSvVyw%2FbBXyA4%2Fp9lqZSd%2Fe0wq%2BO%2FmGt5AzGNhzrDdlUabkCKX5TGs5cltwpzm51yy4x%2F5WqN%2Bx6vy5mPHJbLcv3zKuNI0skURMrkByPTi77yRpetoSC9AhWpUgG8FWR%2FAXj43pCZfB%2FRSbMUSUzmNxQeU1Dr%2BjkZABZfnECzl3f68HA3QozsqFInm47qfu56HRxU4Dng7Eb7dLDvrXXQ78nPbD2P1gptXkS5qg6Bkg9DvkEKi3B5JZ7mOBJvHBtxSwft%2F6ySAL4W%2F9BS8SVuY4eEOXS%2Bfl0Fak3xuHG1KuOWna1H%2B0r0o1Twy%2FE1OnNgXG2lDdSQtE%2BaKPVPvQaoYhi8xTygOkpSFc2QwjTUhx0671T0tje9VSgiXpstKshZ0xy8xXuFFOk4NmzAmxCm9UUjNk65kGYxnSBcjqxRoJ9czVXwHbT7FH1M2OqTyp1i75duQ4tyWiVa4wKxW4xVgOBIe5hXd2WbML2Qir4GOqUBafXCqzijP1sFTfCxn1xa7x4IoWmj4VwFT9zjWfW12R6w%2FozhBQtNXvYXx3sVy%2FOXrNPDJ5ZSe%2Fod%2Bgvf1Bdn1ytg7RHqN9sAc9BdnkoiwHHdBLs60Grwr1EaPv4%2B4Hyc%2BuVZZxSYPYatOIvmhnhm3TcdufrOpyOiT0wvRwvH%2FkzblFirA5fdCcqMI1jln7iwsFeL4Z171eFDmzP9ORIVvB6vVzAW&X-Amz-Signature=73d0197be47ff4d056eab121f5ea59805865e676db97de998acad9fac86f9076&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGYKELHE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHZiNve5VuEuMtBvDeoaXUtgpNQ7l0YeLyplGDFIBtHnAiEA%2FA5Zn%2FJSDmahy%2FO6ZkzrmX2HtI8ALgOEsmJ8WFB4eUYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6QaXZUU%2F2Yg4CCVyrcA3kma2Ene0nXhgXy%2FiLKniuZdgeMPjHCLJVWEOYutoKpcfampqPd1CQzqxTb2TWLkNjVnjeQHKZ5MbDBSAGqfYfqn95AuqIaQeXdZuUyNwK6jquVAo26myQK1OepaCfw9lulDIh0ppOZ6YPIAmfPipM%2BVYhNSvVyw%2FbBXyA4%2Fp9lqZSd%2Fe0wq%2BO%2FmGt5AzGNhzrDdlUabkCKX5TGs5cltwpzm51yy4x%2F5WqN%2Bx6vy5mPHJbLcv3zKuNI0skURMrkByPTi77yRpetoSC9AhWpUgG8FWR%2FAXj43pCZfB%2FRSbMUSUzmNxQeU1Dr%2BjkZABZfnECzl3f68HA3QozsqFInm47qfu56HRxU4Dng7Eb7dLDvrXXQ78nPbD2P1gptXkS5qg6Bkg9DvkEKi3B5JZ7mOBJvHBtxSwft%2F6ySAL4W%2F9BS8SVuY4eEOXS%2Bfl0Fak3xuHG1KuOWna1H%2B0r0o1Twy%2FE1OnNgXG2lDdSQtE%2BaKPVPvQaoYhi8xTygOkpSFc2QwjTUhx0671T0tje9VSgiXpstKshZ0xy8xXuFFOk4NmzAmxCm9UUjNk65kGYxnSBcjqxRoJ9czVXwHbT7FH1M2OqTyp1i75duQ4tyWiVa4wKxW4xVgOBIe5hXd2WbML2Qir4GOqUBafXCqzijP1sFTfCxn1xa7x4IoWmj4VwFT9zjWfW12R6w%2FozhBQtNXvYXx3sVy%2FOXrNPDJ5ZSe%2Fod%2Bgvf1Bdn1ytg7RHqN9sAc9BdnkoiwHHdBLs60Grwr1EaPv4%2B4Hyc%2BuVZZxSYPYatOIvmhnhm3TcdufrOpyOiT0wvRwvH%2FkzblFirA5fdCcqMI1jln7iwsFeL4Z171eFDmzP9ORIVvB6vVzAW&X-Amz-Signature=0099c99fd13670f41feb5ff4eeebd2860d26b1a1760df6a0ecdc2ade8d224b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGYKELHE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHZiNve5VuEuMtBvDeoaXUtgpNQ7l0YeLyplGDFIBtHnAiEA%2FA5Zn%2FJSDmahy%2FO6ZkzrmX2HtI8ALgOEsmJ8WFB4eUYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6QaXZUU%2F2Yg4CCVyrcA3kma2Ene0nXhgXy%2FiLKniuZdgeMPjHCLJVWEOYutoKpcfampqPd1CQzqxTb2TWLkNjVnjeQHKZ5MbDBSAGqfYfqn95AuqIaQeXdZuUyNwK6jquVAo26myQK1OepaCfw9lulDIh0ppOZ6YPIAmfPipM%2BVYhNSvVyw%2FbBXyA4%2Fp9lqZSd%2Fe0wq%2BO%2FmGt5AzGNhzrDdlUabkCKX5TGs5cltwpzm51yy4x%2F5WqN%2Bx6vy5mPHJbLcv3zKuNI0skURMrkByPTi77yRpetoSC9AhWpUgG8FWR%2FAXj43pCZfB%2FRSbMUSUzmNxQeU1Dr%2BjkZABZfnECzl3f68HA3QozsqFInm47qfu56HRxU4Dng7Eb7dLDvrXXQ78nPbD2P1gptXkS5qg6Bkg9DvkEKi3B5JZ7mOBJvHBtxSwft%2F6ySAL4W%2F9BS8SVuY4eEOXS%2Bfl0Fak3xuHG1KuOWna1H%2B0r0o1Twy%2FE1OnNgXG2lDdSQtE%2BaKPVPvQaoYhi8xTygOkpSFc2QwjTUhx0671T0tje9VSgiXpstKshZ0xy8xXuFFOk4NmzAmxCm9UUjNk65kGYxnSBcjqxRoJ9czVXwHbT7FH1M2OqTyp1i75duQ4tyWiVa4wKxW4xVgOBIe5hXd2WbML2Qir4GOqUBafXCqzijP1sFTfCxn1xa7x4IoWmj4VwFT9zjWfW12R6w%2FozhBQtNXvYXx3sVy%2FOXrNPDJ5ZSe%2Fod%2Bgvf1Bdn1ytg7RHqN9sAc9BdnkoiwHHdBLs60Grwr1EaPv4%2B4Hyc%2BuVZZxSYPYatOIvmhnhm3TcdufrOpyOiT0wvRwvH%2FkzblFirA5fdCcqMI1jln7iwsFeL4Z171eFDmzP9ORIVvB6vVzAW&X-Amz-Signature=4278687605c49d34b88bc6136b392da087cc2bbdfd2f04ba87ce99749a337f11&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGYKELHE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIHZiNve5VuEuMtBvDeoaXUtgpNQ7l0YeLyplGDFIBtHnAiEA%2FA5Zn%2FJSDmahy%2FO6ZkzrmX2HtI8ALgOEsmJ8WFB4eUYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6QaXZUU%2F2Yg4CCVyrcA3kma2Ene0nXhgXy%2FiLKniuZdgeMPjHCLJVWEOYutoKpcfampqPd1CQzqxTb2TWLkNjVnjeQHKZ5MbDBSAGqfYfqn95AuqIaQeXdZuUyNwK6jquVAo26myQK1OepaCfw9lulDIh0ppOZ6YPIAmfPipM%2BVYhNSvVyw%2FbBXyA4%2Fp9lqZSd%2Fe0wq%2BO%2FmGt5AzGNhzrDdlUabkCKX5TGs5cltwpzm51yy4x%2F5WqN%2Bx6vy5mPHJbLcv3zKuNI0skURMrkByPTi77yRpetoSC9AhWpUgG8FWR%2FAXj43pCZfB%2FRSbMUSUzmNxQeU1Dr%2BjkZABZfnECzl3f68HA3QozsqFInm47qfu56HRxU4Dng7Eb7dLDvrXXQ78nPbD2P1gptXkS5qg6Bkg9DvkEKi3B5JZ7mOBJvHBtxSwft%2F6ySAL4W%2F9BS8SVuY4eEOXS%2Bfl0Fak3xuHG1KuOWna1H%2B0r0o1Twy%2FE1OnNgXG2lDdSQtE%2BaKPVPvQaoYhi8xTygOkpSFc2QwjTUhx0671T0tje9VSgiXpstKshZ0xy8xXuFFOk4NmzAmxCm9UUjNk65kGYxnSBcjqxRoJ9czVXwHbT7FH1M2OqTyp1i75duQ4tyWiVa4wKxW4xVgOBIe5hXd2WbML2Qir4GOqUBafXCqzijP1sFTfCxn1xa7x4IoWmj4VwFT9zjWfW12R6w%2FozhBQtNXvYXx3sVy%2FOXrNPDJ5ZSe%2Fod%2Bgvf1Bdn1ytg7RHqN9sAc9BdnkoiwHHdBLs60Grwr1EaPv4%2B4Hyc%2BuVZZxSYPYatOIvmhnhm3TcdufrOpyOiT0wvRwvH%2FkzblFirA5fdCcqMI1jln7iwsFeL4Z171eFDmzP9ORIVvB6vVzAW&X-Amz-Signature=dfb6b063447a5ed25ed7c851437fa2755c04c09e4fc3d6c388d6dc93be69bd0a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
