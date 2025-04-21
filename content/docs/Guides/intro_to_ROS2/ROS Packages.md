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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM7QJEOA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD3Tu4LuBnlvmUWe8L83TbJnNMepdLrqQJwYWLBByENYwIhAO8qRaXNTdfaJZOOtHy7sEeT22hk0zqaSjLqSjeG7wl%2BKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxjgf6vLsYNDqGffIgq3APf1twUJnMkv3ax1Dddy6cNrCfQ7L%2FyNjPASb2D%2BwbWXTGUoAV%2FwvQCmMy%2Bug4oUfLK%2FBt9bsGSQ%2Ff6y2cRdOVpYvjzNNRXJ8VfyxX3GbBROVfViPTl5sg7P744catcKrK6ALSvJNFY1CdoLqMAv4iiwN5Yy1DtH4YKDECw8bE%2FpJb6%2F5I17L2F0Z2TcQ4NC5rgFUWWuI65GiGXn%2Fy9U%2B8VpD37c9ElDF%2BM3HXR3rr1I4zSiBdStg6O%2BF3iBIEhddZ4FpyoRe990yGLgfub%2FUZ9pIiNSejZNzcCeMEHdFURvyt3VeUwB8TbcDaexBPwj9Dxe1viSVc1CQLy3%2FiZ3Or5SeQXQxEzrdDXf4LN%2FsoRbtKK7%2FTs0t9jzOJNteFRDshYR6aY8C9%2BjNvmtZJAMFM86I8aBUS9bu1xl4zZrB0cV9vih1PY4W53s%2FUupFakTygpCBolk1ccyGtfbc7F4tPInnQB7IuTNBOcYN6rhhkbSTt1W0jxNQnE74wRR%2BECybd4OQHGZfWLs1nJQIuuoHm%2BVmblcmreJ1ByfiMqmmK%2BuJKKQQCYNrgL1NoPEalUhHm4%2FVmOMX0tbpjzYe9A12R66IlmCHfbEUjCQcMUB8oJ2NVqaTKg1ubs3ZSQqDD6oJjABjqkAbgUIbQGHu4Yul02uNG8EH6D4EyyidbcrCXHzK%2BCjF790fqcYAhH3KyMVM2er9kQLuUa4X1bJAWl4wUm5KSeuhuI66kXAfwS07uWKsciSikxzBPFgJSfqaMKdkq0BWLTB81wzALofrU7KmL2aAPOwA52SQARgoIpj2xJNvvmjcZWa%2BzYu4jrnXfzJATYY6%2FCfpA9krP5K1sqSmgOzOR7kqrwXD96&X-Amz-Signature=473bacdce56b4d001ad8af6c0c7868b72ee181eca8fc18a1bd6f5903d7d97939&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM7QJEOA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD3Tu4LuBnlvmUWe8L83TbJnNMepdLrqQJwYWLBByENYwIhAO8qRaXNTdfaJZOOtHy7sEeT22hk0zqaSjLqSjeG7wl%2BKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxjgf6vLsYNDqGffIgq3APf1twUJnMkv3ax1Dddy6cNrCfQ7L%2FyNjPASb2D%2BwbWXTGUoAV%2FwvQCmMy%2Bug4oUfLK%2FBt9bsGSQ%2Ff6y2cRdOVpYvjzNNRXJ8VfyxX3GbBROVfViPTl5sg7P744catcKrK6ALSvJNFY1CdoLqMAv4iiwN5Yy1DtH4YKDECw8bE%2FpJb6%2F5I17L2F0Z2TcQ4NC5rgFUWWuI65GiGXn%2Fy9U%2B8VpD37c9ElDF%2BM3HXR3rr1I4zSiBdStg6O%2BF3iBIEhddZ4FpyoRe990yGLgfub%2FUZ9pIiNSejZNzcCeMEHdFURvyt3VeUwB8TbcDaexBPwj9Dxe1viSVc1CQLy3%2FiZ3Or5SeQXQxEzrdDXf4LN%2FsoRbtKK7%2FTs0t9jzOJNteFRDshYR6aY8C9%2BjNvmtZJAMFM86I8aBUS9bu1xl4zZrB0cV9vih1PY4W53s%2FUupFakTygpCBolk1ccyGtfbc7F4tPInnQB7IuTNBOcYN6rhhkbSTt1W0jxNQnE74wRR%2BECybd4OQHGZfWLs1nJQIuuoHm%2BVmblcmreJ1ByfiMqmmK%2BuJKKQQCYNrgL1NoPEalUhHm4%2FVmOMX0tbpjzYe9A12R66IlmCHfbEUjCQcMUB8oJ2NVqaTKg1ubs3ZSQqDD6oJjABjqkAbgUIbQGHu4Yul02uNG8EH6D4EyyidbcrCXHzK%2BCjF790fqcYAhH3KyMVM2er9kQLuUa4X1bJAWl4wUm5KSeuhuI66kXAfwS07uWKsciSikxzBPFgJSfqaMKdkq0BWLTB81wzALofrU7KmL2aAPOwA52SQARgoIpj2xJNvvmjcZWa%2BzYu4jrnXfzJATYY6%2FCfpA9krP5K1sqSmgOzOR7kqrwXD96&X-Amz-Signature=8148fac580be49e6f51220babe552ccd97cb606d5a9fedc7dbf468aa52dbdb43&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM7QJEOA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD3Tu4LuBnlvmUWe8L83TbJnNMepdLrqQJwYWLBByENYwIhAO8qRaXNTdfaJZOOtHy7sEeT22hk0zqaSjLqSjeG7wl%2BKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxjgf6vLsYNDqGffIgq3APf1twUJnMkv3ax1Dddy6cNrCfQ7L%2FyNjPASb2D%2BwbWXTGUoAV%2FwvQCmMy%2Bug4oUfLK%2FBt9bsGSQ%2Ff6y2cRdOVpYvjzNNRXJ8VfyxX3GbBROVfViPTl5sg7P744catcKrK6ALSvJNFY1CdoLqMAv4iiwN5Yy1DtH4YKDECw8bE%2FpJb6%2F5I17L2F0Z2TcQ4NC5rgFUWWuI65GiGXn%2Fy9U%2B8VpD37c9ElDF%2BM3HXR3rr1I4zSiBdStg6O%2BF3iBIEhddZ4FpyoRe990yGLgfub%2FUZ9pIiNSejZNzcCeMEHdFURvyt3VeUwB8TbcDaexBPwj9Dxe1viSVc1CQLy3%2FiZ3Or5SeQXQxEzrdDXf4LN%2FsoRbtKK7%2FTs0t9jzOJNteFRDshYR6aY8C9%2BjNvmtZJAMFM86I8aBUS9bu1xl4zZrB0cV9vih1PY4W53s%2FUupFakTygpCBolk1ccyGtfbc7F4tPInnQB7IuTNBOcYN6rhhkbSTt1W0jxNQnE74wRR%2BECybd4OQHGZfWLs1nJQIuuoHm%2BVmblcmreJ1ByfiMqmmK%2BuJKKQQCYNrgL1NoPEalUhHm4%2FVmOMX0tbpjzYe9A12R66IlmCHfbEUjCQcMUB8oJ2NVqaTKg1ubs3ZSQqDD6oJjABjqkAbgUIbQGHu4Yul02uNG8EH6D4EyyidbcrCXHzK%2BCjF790fqcYAhH3KyMVM2er9kQLuUa4X1bJAWl4wUm5KSeuhuI66kXAfwS07uWKsciSikxzBPFgJSfqaMKdkq0BWLTB81wzALofrU7KmL2aAPOwA52SQARgoIpj2xJNvvmjcZWa%2BzYu4jrnXfzJATYY6%2FCfpA9krP5K1sqSmgOzOR7kqrwXD96&X-Amz-Signature=f9522eafb1305dd0504f144e0887cdb2c9fc3fe0d3234c039e927349d3e700b4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM7QJEOA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD3Tu4LuBnlvmUWe8L83TbJnNMepdLrqQJwYWLBByENYwIhAO8qRaXNTdfaJZOOtHy7sEeT22hk0zqaSjLqSjeG7wl%2BKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxjgf6vLsYNDqGffIgq3APf1twUJnMkv3ax1Dddy6cNrCfQ7L%2FyNjPASb2D%2BwbWXTGUoAV%2FwvQCmMy%2Bug4oUfLK%2FBt9bsGSQ%2Ff6y2cRdOVpYvjzNNRXJ8VfyxX3GbBROVfViPTl5sg7P744catcKrK6ALSvJNFY1CdoLqMAv4iiwN5Yy1DtH4YKDECw8bE%2FpJb6%2F5I17L2F0Z2TcQ4NC5rgFUWWuI65GiGXn%2Fy9U%2B8VpD37c9ElDF%2BM3HXR3rr1I4zSiBdStg6O%2BF3iBIEhddZ4FpyoRe990yGLgfub%2FUZ9pIiNSejZNzcCeMEHdFURvyt3VeUwB8TbcDaexBPwj9Dxe1viSVc1CQLy3%2FiZ3Or5SeQXQxEzrdDXf4LN%2FsoRbtKK7%2FTs0t9jzOJNteFRDshYR6aY8C9%2BjNvmtZJAMFM86I8aBUS9bu1xl4zZrB0cV9vih1PY4W53s%2FUupFakTygpCBolk1ccyGtfbc7F4tPInnQB7IuTNBOcYN6rhhkbSTt1W0jxNQnE74wRR%2BECybd4OQHGZfWLs1nJQIuuoHm%2BVmblcmreJ1ByfiMqmmK%2BuJKKQQCYNrgL1NoPEalUhHm4%2FVmOMX0tbpjzYe9A12R66IlmCHfbEUjCQcMUB8oJ2NVqaTKg1ubs3ZSQqDD6oJjABjqkAbgUIbQGHu4Yul02uNG8EH6D4EyyidbcrCXHzK%2BCjF790fqcYAhH3KyMVM2er9kQLuUa4X1bJAWl4wUm5KSeuhuI66kXAfwS07uWKsciSikxzBPFgJSfqaMKdkq0BWLTB81wzALofrU7KmL2aAPOwA52SQARgoIpj2xJNvvmjcZWa%2BzYu4jrnXfzJATYY6%2FCfpA9krP5K1sqSmgOzOR7kqrwXD96&X-Amz-Signature=22b9f27d6d8813d730ad2a48e68ceaa01bf6cc6afa861e50dc7cabdf27c1d197&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM7QJEOA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD3Tu4LuBnlvmUWe8L83TbJnNMepdLrqQJwYWLBByENYwIhAO8qRaXNTdfaJZOOtHy7sEeT22hk0zqaSjLqSjeG7wl%2BKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxjgf6vLsYNDqGffIgq3APf1twUJnMkv3ax1Dddy6cNrCfQ7L%2FyNjPASb2D%2BwbWXTGUoAV%2FwvQCmMy%2Bug4oUfLK%2FBt9bsGSQ%2Ff6y2cRdOVpYvjzNNRXJ8VfyxX3GbBROVfViPTl5sg7P744catcKrK6ALSvJNFY1CdoLqMAv4iiwN5Yy1DtH4YKDECw8bE%2FpJb6%2F5I17L2F0Z2TcQ4NC5rgFUWWuI65GiGXn%2Fy9U%2B8VpD37c9ElDF%2BM3HXR3rr1I4zSiBdStg6O%2BF3iBIEhddZ4FpyoRe990yGLgfub%2FUZ9pIiNSejZNzcCeMEHdFURvyt3VeUwB8TbcDaexBPwj9Dxe1viSVc1CQLy3%2FiZ3Or5SeQXQxEzrdDXf4LN%2FsoRbtKK7%2FTs0t9jzOJNteFRDshYR6aY8C9%2BjNvmtZJAMFM86I8aBUS9bu1xl4zZrB0cV9vih1PY4W53s%2FUupFakTygpCBolk1ccyGtfbc7F4tPInnQB7IuTNBOcYN6rhhkbSTt1W0jxNQnE74wRR%2BECybd4OQHGZfWLs1nJQIuuoHm%2BVmblcmreJ1ByfiMqmmK%2BuJKKQQCYNrgL1NoPEalUhHm4%2FVmOMX0tbpjzYe9A12R66IlmCHfbEUjCQcMUB8oJ2NVqaTKg1ubs3ZSQqDD6oJjABjqkAbgUIbQGHu4Yul02uNG8EH6D4EyyidbcrCXHzK%2BCjF790fqcYAhH3KyMVM2er9kQLuUa4X1bJAWl4wUm5KSeuhuI66kXAfwS07uWKsciSikxzBPFgJSfqaMKdkq0BWLTB81wzALofrU7KmL2aAPOwA52SQARgoIpj2xJNvvmjcZWa%2BzYu4jrnXfzJATYY6%2FCfpA9krP5K1sqSmgOzOR7kqrwXD96&X-Amz-Signature=444a9abed47a7bd1e299a28e7981767b7b6c58303cea794401dc4fe79a280c7a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM7QJEOA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD3Tu4LuBnlvmUWe8L83TbJnNMepdLrqQJwYWLBByENYwIhAO8qRaXNTdfaJZOOtHy7sEeT22hk0zqaSjLqSjeG7wl%2BKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxjgf6vLsYNDqGffIgq3APf1twUJnMkv3ax1Dddy6cNrCfQ7L%2FyNjPASb2D%2BwbWXTGUoAV%2FwvQCmMy%2Bug4oUfLK%2FBt9bsGSQ%2Ff6y2cRdOVpYvjzNNRXJ8VfyxX3GbBROVfViPTl5sg7P744catcKrK6ALSvJNFY1CdoLqMAv4iiwN5Yy1DtH4YKDECw8bE%2FpJb6%2F5I17L2F0Z2TcQ4NC5rgFUWWuI65GiGXn%2Fy9U%2B8VpD37c9ElDF%2BM3HXR3rr1I4zSiBdStg6O%2BF3iBIEhddZ4FpyoRe990yGLgfub%2FUZ9pIiNSejZNzcCeMEHdFURvyt3VeUwB8TbcDaexBPwj9Dxe1viSVc1CQLy3%2FiZ3Or5SeQXQxEzrdDXf4LN%2FsoRbtKK7%2FTs0t9jzOJNteFRDshYR6aY8C9%2BjNvmtZJAMFM86I8aBUS9bu1xl4zZrB0cV9vih1PY4W53s%2FUupFakTygpCBolk1ccyGtfbc7F4tPInnQB7IuTNBOcYN6rhhkbSTt1W0jxNQnE74wRR%2BECybd4OQHGZfWLs1nJQIuuoHm%2BVmblcmreJ1ByfiMqmmK%2BuJKKQQCYNrgL1NoPEalUhHm4%2FVmOMX0tbpjzYe9A12R66IlmCHfbEUjCQcMUB8oJ2NVqaTKg1ubs3ZSQqDD6oJjABjqkAbgUIbQGHu4Yul02uNG8EH6D4EyyidbcrCXHzK%2BCjF790fqcYAhH3KyMVM2er9kQLuUa4X1bJAWl4wUm5KSeuhuI66kXAfwS07uWKsciSikxzBPFgJSfqaMKdkq0BWLTB81wzALofrU7KmL2aAPOwA52SQARgoIpj2xJNvvmjcZWa%2BzYu4jrnXfzJATYY6%2FCfpA9krP5K1sqSmgOzOR7kqrwXD96&X-Amz-Signature=e587765674c93fd1ed11dc91e40e0efe8a209a61185c7f9e7e6c68d12a817023&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM7QJEOA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD3Tu4LuBnlvmUWe8L83TbJnNMepdLrqQJwYWLBByENYwIhAO8qRaXNTdfaJZOOtHy7sEeT22hk0zqaSjLqSjeG7wl%2BKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxjgf6vLsYNDqGffIgq3APf1twUJnMkv3ax1Dddy6cNrCfQ7L%2FyNjPASb2D%2BwbWXTGUoAV%2FwvQCmMy%2Bug4oUfLK%2FBt9bsGSQ%2Ff6y2cRdOVpYvjzNNRXJ8VfyxX3GbBROVfViPTl5sg7P744catcKrK6ALSvJNFY1CdoLqMAv4iiwN5Yy1DtH4YKDECw8bE%2FpJb6%2F5I17L2F0Z2TcQ4NC5rgFUWWuI65GiGXn%2Fy9U%2B8VpD37c9ElDF%2BM3HXR3rr1I4zSiBdStg6O%2BF3iBIEhddZ4FpyoRe990yGLgfub%2FUZ9pIiNSejZNzcCeMEHdFURvyt3VeUwB8TbcDaexBPwj9Dxe1viSVc1CQLy3%2FiZ3Or5SeQXQxEzrdDXf4LN%2FsoRbtKK7%2FTs0t9jzOJNteFRDshYR6aY8C9%2BjNvmtZJAMFM86I8aBUS9bu1xl4zZrB0cV9vih1PY4W53s%2FUupFakTygpCBolk1ccyGtfbc7F4tPInnQB7IuTNBOcYN6rhhkbSTt1W0jxNQnE74wRR%2BECybd4OQHGZfWLs1nJQIuuoHm%2BVmblcmreJ1ByfiMqmmK%2BuJKKQQCYNrgL1NoPEalUhHm4%2FVmOMX0tbpjzYe9A12R66IlmCHfbEUjCQcMUB8oJ2NVqaTKg1ubs3ZSQqDD6oJjABjqkAbgUIbQGHu4Yul02uNG8EH6D4EyyidbcrCXHzK%2BCjF790fqcYAhH3KyMVM2er9kQLuUa4X1bJAWl4wUm5KSeuhuI66kXAfwS07uWKsciSikxzBPFgJSfqaMKdkq0BWLTB81wzALofrU7KmL2aAPOwA52SQARgoIpj2xJNvvmjcZWa%2BzYu4jrnXfzJATYY6%2FCfpA9krP5K1sqSmgOzOR7kqrwXD96&X-Amz-Signature=7c5310b90c6b0d1937dde567135d2fb28829435007f523f125dc87cffe324ef2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
