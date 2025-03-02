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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K7VO4GP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCWpdDhPUlyRlmEF%2FuNNDDre%2FCYy7O1uvclF7AYNaKtTAIgSlxOLJVR74WooJzfK0j2gAD58Nst3PXCq7EDS6KKY1IqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7fIEgIHGWWNtoUXCrcA6pxSdrO3wxnsLp7FMxVxZiMcEBKtDrOi%2BSTqjUWASNr6t2jDAyMtdgByDcPq5cGZNvzc1GSq%2BZmY%2FmTNAuodA1P7rdpvkTkY3JHZXJZB%2B9iz78JUp8CUHtHGpAf5RPCp0xNRhmAX0WxeqULUhoNUn3nq2%2FEd147%2FLTYTPSePBE5Kz8Ut00h4kRTIPBkRkuwiuULLGsdWLxzN%2BE1zEowv0k4RBAdDpuUbAPjYQ5bK6cQAhKK7recbBw%2FND4SJ0DEcgZbyVeprhbdWHgximEC6QoatB9sLLx2Iosfyc7Pgi4H1hGV1emCShr4amXY1pE1gbpGo%2FG3A0INKT3VPxURvVZxMpgpfVNV4A2dLiHZ1T15XqaXxyRNvx2Oz6910FvI4lNy47jWUg2nA3dZZlqp4rrnyXLrZ14QrhmZUAj5EHn7XZqbIxkL5oBoGlesQcMzOAyECET%2Bd3SKdRihFFG0o6voGSaU9j7TewKuEhS5mUBmYVz8b8KgB%2BrV%2FCuAzWrVVA9WnejMQGI1b0G3h%2FGoQ3xVwEXu2e6O%2Bcg1Y8d2%2FNgc3Kvcxe7g34zzcREaMHQIiLiD8pEj5iUswEH5Xd1vNn%2BkNpAiq2JLFrool1b8gzR4f850jaD9qQebVeU%2BMNTXj74GOqUBccn8ImTXPtCZBB%2BCNXmZ5YAC6Bo9pvtBPWKeGqnEjKBJexxHkN%2BdPgDqvUBfqd3P8RYx%2Fx%2FRHK1iCbVOEdFdNxDuFFBlnzVhP5jzQ%2BX47blpSp%2B6QLUpJfShiZWQCkHmDlcOODd%2FsssUN9wSXXvcBStw6B%2BUPFqLqiDGd7fIjQfCzTl32%2BPfZQ%2BAi1C7ZNqrpoOktn6zb3JQLv1hXwu%2FhMzpfjaX&X-Amz-Signature=9861ea6223f92e5ba0a99a4c29a227628e0caecf3ad63ec9e4c293fa701457e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K7VO4GP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCWpdDhPUlyRlmEF%2FuNNDDre%2FCYy7O1uvclF7AYNaKtTAIgSlxOLJVR74WooJzfK0j2gAD58Nst3PXCq7EDS6KKY1IqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7fIEgIHGWWNtoUXCrcA6pxSdrO3wxnsLp7FMxVxZiMcEBKtDrOi%2BSTqjUWASNr6t2jDAyMtdgByDcPq5cGZNvzc1GSq%2BZmY%2FmTNAuodA1P7rdpvkTkY3JHZXJZB%2B9iz78JUp8CUHtHGpAf5RPCp0xNRhmAX0WxeqULUhoNUn3nq2%2FEd147%2FLTYTPSePBE5Kz8Ut00h4kRTIPBkRkuwiuULLGsdWLxzN%2BE1zEowv0k4RBAdDpuUbAPjYQ5bK6cQAhKK7recbBw%2FND4SJ0DEcgZbyVeprhbdWHgximEC6QoatB9sLLx2Iosfyc7Pgi4H1hGV1emCShr4amXY1pE1gbpGo%2FG3A0INKT3VPxURvVZxMpgpfVNV4A2dLiHZ1T15XqaXxyRNvx2Oz6910FvI4lNy47jWUg2nA3dZZlqp4rrnyXLrZ14QrhmZUAj5EHn7XZqbIxkL5oBoGlesQcMzOAyECET%2Bd3SKdRihFFG0o6voGSaU9j7TewKuEhS5mUBmYVz8b8KgB%2BrV%2FCuAzWrVVA9WnejMQGI1b0G3h%2FGoQ3xVwEXu2e6O%2Bcg1Y8d2%2FNgc3Kvcxe7g34zzcREaMHQIiLiD8pEj5iUswEH5Xd1vNn%2BkNpAiq2JLFrool1b8gzR4f850jaD9qQebVeU%2BMNTXj74GOqUBccn8ImTXPtCZBB%2BCNXmZ5YAC6Bo9pvtBPWKeGqnEjKBJexxHkN%2BdPgDqvUBfqd3P8RYx%2Fx%2FRHK1iCbVOEdFdNxDuFFBlnzVhP5jzQ%2BX47blpSp%2B6QLUpJfShiZWQCkHmDlcOODd%2FsssUN9wSXXvcBStw6B%2BUPFqLqiDGd7fIjQfCzTl32%2BPfZQ%2BAi1C7ZNqrpoOktn6zb3JQLv1hXwu%2FhMzpfjaX&X-Amz-Signature=1858921998d0821729b2a5537274368854a7c3f31824a75946d6f1f18b78a57b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K7VO4GP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCWpdDhPUlyRlmEF%2FuNNDDre%2FCYy7O1uvclF7AYNaKtTAIgSlxOLJVR74WooJzfK0j2gAD58Nst3PXCq7EDS6KKY1IqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7fIEgIHGWWNtoUXCrcA6pxSdrO3wxnsLp7FMxVxZiMcEBKtDrOi%2BSTqjUWASNr6t2jDAyMtdgByDcPq5cGZNvzc1GSq%2BZmY%2FmTNAuodA1P7rdpvkTkY3JHZXJZB%2B9iz78JUp8CUHtHGpAf5RPCp0xNRhmAX0WxeqULUhoNUn3nq2%2FEd147%2FLTYTPSePBE5Kz8Ut00h4kRTIPBkRkuwiuULLGsdWLxzN%2BE1zEowv0k4RBAdDpuUbAPjYQ5bK6cQAhKK7recbBw%2FND4SJ0DEcgZbyVeprhbdWHgximEC6QoatB9sLLx2Iosfyc7Pgi4H1hGV1emCShr4amXY1pE1gbpGo%2FG3A0INKT3VPxURvVZxMpgpfVNV4A2dLiHZ1T15XqaXxyRNvx2Oz6910FvI4lNy47jWUg2nA3dZZlqp4rrnyXLrZ14QrhmZUAj5EHn7XZqbIxkL5oBoGlesQcMzOAyECET%2Bd3SKdRihFFG0o6voGSaU9j7TewKuEhS5mUBmYVz8b8KgB%2BrV%2FCuAzWrVVA9WnejMQGI1b0G3h%2FGoQ3xVwEXu2e6O%2Bcg1Y8d2%2FNgc3Kvcxe7g34zzcREaMHQIiLiD8pEj5iUswEH5Xd1vNn%2BkNpAiq2JLFrool1b8gzR4f850jaD9qQebVeU%2BMNTXj74GOqUBccn8ImTXPtCZBB%2BCNXmZ5YAC6Bo9pvtBPWKeGqnEjKBJexxHkN%2BdPgDqvUBfqd3P8RYx%2Fx%2FRHK1iCbVOEdFdNxDuFFBlnzVhP5jzQ%2BX47blpSp%2B6QLUpJfShiZWQCkHmDlcOODd%2FsssUN9wSXXvcBStw6B%2BUPFqLqiDGd7fIjQfCzTl32%2BPfZQ%2BAi1C7ZNqrpoOktn6zb3JQLv1hXwu%2FhMzpfjaX&X-Amz-Signature=89c8c87a3ad1d6fac5dea9118e79daf82bea4ee94bcda4a9e6712075aab616f3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K7VO4GP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCWpdDhPUlyRlmEF%2FuNNDDre%2FCYy7O1uvclF7AYNaKtTAIgSlxOLJVR74WooJzfK0j2gAD58Nst3PXCq7EDS6KKY1IqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7fIEgIHGWWNtoUXCrcA6pxSdrO3wxnsLp7FMxVxZiMcEBKtDrOi%2BSTqjUWASNr6t2jDAyMtdgByDcPq5cGZNvzc1GSq%2BZmY%2FmTNAuodA1P7rdpvkTkY3JHZXJZB%2B9iz78JUp8CUHtHGpAf5RPCp0xNRhmAX0WxeqULUhoNUn3nq2%2FEd147%2FLTYTPSePBE5Kz8Ut00h4kRTIPBkRkuwiuULLGsdWLxzN%2BE1zEowv0k4RBAdDpuUbAPjYQ5bK6cQAhKK7recbBw%2FND4SJ0DEcgZbyVeprhbdWHgximEC6QoatB9sLLx2Iosfyc7Pgi4H1hGV1emCShr4amXY1pE1gbpGo%2FG3A0INKT3VPxURvVZxMpgpfVNV4A2dLiHZ1T15XqaXxyRNvx2Oz6910FvI4lNy47jWUg2nA3dZZlqp4rrnyXLrZ14QrhmZUAj5EHn7XZqbIxkL5oBoGlesQcMzOAyECET%2Bd3SKdRihFFG0o6voGSaU9j7TewKuEhS5mUBmYVz8b8KgB%2BrV%2FCuAzWrVVA9WnejMQGI1b0G3h%2FGoQ3xVwEXu2e6O%2Bcg1Y8d2%2FNgc3Kvcxe7g34zzcREaMHQIiLiD8pEj5iUswEH5Xd1vNn%2BkNpAiq2JLFrool1b8gzR4f850jaD9qQebVeU%2BMNTXj74GOqUBccn8ImTXPtCZBB%2BCNXmZ5YAC6Bo9pvtBPWKeGqnEjKBJexxHkN%2BdPgDqvUBfqd3P8RYx%2Fx%2FRHK1iCbVOEdFdNxDuFFBlnzVhP5jzQ%2BX47blpSp%2B6QLUpJfShiZWQCkHmDlcOODd%2FsssUN9wSXXvcBStw6B%2BUPFqLqiDGd7fIjQfCzTl32%2BPfZQ%2BAi1C7ZNqrpoOktn6zb3JQLv1hXwu%2FhMzpfjaX&X-Amz-Signature=ad2805c53cdf0ccae39940ccbbc2e24fb7d11efcdc49b18b86c0a0dade6cdfbb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K7VO4GP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCWpdDhPUlyRlmEF%2FuNNDDre%2FCYy7O1uvclF7AYNaKtTAIgSlxOLJVR74WooJzfK0j2gAD58Nst3PXCq7EDS6KKY1IqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7fIEgIHGWWNtoUXCrcA6pxSdrO3wxnsLp7FMxVxZiMcEBKtDrOi%2BSTqjUWASNr6t2jDAyMtdgByDcPq5cGZNvzc1GSq%2BZmY%2FmTNAuodA1P7rdpvkTkY3JHZXJZB%2B9iz78JUp8CUHtHGpAf5RPCp0xNRhmAX0WxeqULUhoNUn3nq2%2FEd147%2FLTYTPSePBE5Kz8Ut00h4kRTIPBkRkuwiuULLGsdWLxzN%2BE1zEowv0k4RBAdDpuUbAPjYQ5bK6cQAhKK7recbBw%2FND4SJ0DEcgZbyVeprhbdWHgximEC6QoatB9sLLx2Iosfyc7Pgi4H1hGV1emCShr4amXY1pE1gbpGo%2FG3A0INKT3VPxURvVZxMpgpfVNV4A2dLiHZ1T15XqaXxyRNvx2Oz6910FvI4lNy47jWUg2nA3dZZlqp4rrnyXLrZ14QrhmZUAj5EHn7XZqbIxkL5oBoGlesQcMzOAyECET%2Bd3SKdRihFFG0o6voGSaU9j7TewKuEhS5mUBmYVz8b8KgB%2BrV%2FCuAzWrVVA9WnejMQGI1b0G3h%2FGoQ3xVwEXu2e6O%2Bcg1Y8d2%2FNgc3Kvcxe7g34zzcREaMHQIiLiD8pEj5iUswEH5Xd1vNn%2BkNpAiq2JLFrool1b8gzR4f850jaD9qQebVeU%2BMNTXj74GOqUBccn8ImTXPtCZBB%2BCNXmZ5YAC6Bo9pvtBPWKeGqnEjKBJexxHkN%2BdPgDqvUBfqd3P8RYx%2Fx%2FRHK1iCbVOEdFdNxDuFFBlnzVhP5jzQ%2BX47blpSp%2B6QLUpJfShiZWQCkHmDlcOODd%2FsssUN9wSXXvcBStw6B%2BUPFqLqiDGd7fIjQfCzTl32%2BPfZQ%2BAi1C7ZNqrpoOktn6zb3JQLv1hXwu%2FhMzpfjaX&X-Amz-Signature=2c450d1a167e23d68c614218f37462fc44d92c246c144b31539d58e0565c4d84&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K7VO4GP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCWpdDhPUlyRlmEF%2FuNNDDre%2FCYy7O1uvclF7AYNaKtTAIgSlxOLJVR74WooJzfK0j2gAD58Nst3PXCq7EDS6KKY1IqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7fIEgIHGWWNtoUXCrcA6pxSdrO3wxnsLp7FMxVxZiMcEBKtDrOi%2BSTqjUWASNr6t2jDAyMtdgByDcPq5cGZNvzc1GSq%2BZmY%2FmTNAuodA1P7rdpvkTkY3JHZXJZB%2B9iz78JUp8CUHtHGpAf5RPCp0xNRhmAX0WxeqULUhoNUn3nq2%2FEd147%2FLTYTPSePBE5Kz8Ut00h4kRTIPBkRkuwiuULLGsdWLxzN%2BE1zEowv0k4RBAdDpuUbAPjYQ5bK6cQAhKK7recbBw%2FND4SJ0DEcgZbyVeprhbdWHgximEC6QoatB9sLLx2Iosfyc7Pgi4H1hGV1emCShr4amXY1pE1gbpGo%2FG3A0INKT3VPxURvVZxMpgpfVNV4A2dLiHZ1T15XqaXxyRNvx2Oz6910FvI4lNy47jWUg2nA3dZZlqp4rrnyXLrZ14QrhmZUAj5EHn7XZqbIxkL5oBoGlesQcMzOAyECET%2Bd3SKdRihFFG0o6voGSaU9j7TewKuEhS5mUBmYVz8b8KgB%2BrV%2FCuAzWrVVA9WnejMQGI1b0G3h%2FGoQ3xVwEXu2e6O%2Bcg1Y8d2%2FNgc3Kvcxe7g34zzcREaMHQIiLiD8pEj5iUswEH5Xd1vNn%2BkNpAiq2JLFrool1b8gzR4f850jaD9qQebVeU%2BMNTXj74GOqUBccn8ImTXPtCZBB%2BCNXmZ5YAC6Bo9pvtBPWKeGqnEjKBJexxHkN%2BdPgDqvUBfqd3P8RYx%2Fx%2FRHK1iCbVOEdFdNxDuFFBlnzVhP5jzQ%2BX47blpSp%2B6QLUpJfShiZWQCkHmDlcOODd%2FsssUN9wSXXvcBStw6B%2BUPFqLqiDGd7fIjQfCzTl32%2BPfZQ%2BAi1C7ZNqrpoOktn6zb3JQLv1hXwu%2FhMzpfjaX&X-Amz-Signature=114c35d697643edef66e2cfc3c6db6deec2b62af665f8f4d97fcb989a84c5b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K7VO4GP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCWpdDhPUlyRlmEF%2FuNNDDre%2FCYy7O1uvclF7AYNaKtTAIgSlxOLJVR74WooJzfK0j2gAD58Nst3PXCq7EDS6KKY1IqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7fIEgIHGWWNtoUXCrcA6pxSdrO3wxnsLp7FMxVxZiMcEBKtDrOi%2BSTqjUWASNr6t2jDAyMtdgByDcPq5cGZNvzc1GSq%2BZmY%2FmTNAuodA1P7rdpvkTkY3JHZXJZB%2B9iz78JUp8CUHtHGpAf5RPCp0xNRhmAX0WxeqULUhoNUn3nq2%2FEd147%2FLTYTPSePBE5Kz8Ut00h4kRTIPBkRkuwiuULLGsdWLxzN%2BE1zEowv0k4RBAdDpuUbAPjYQ5bK6cQAhKK7recbBw%2FND4SJ0DEcgZbyVeprhbdWHgximEC6QoatB9sLLx2Iosfyc7Pgi4H1hGV1emCShr4amXY1pE1gbpGo%2FG3A0INKT3VPxURvVZxMpgpfVNV4A2dLiHZ1T15XqaXxyRNvx2Oz6910FvI4lNy47jWUg2nA3dZZlqp4rrnyXLrZ14QrhmZUAj5EHn7XZqbIxkL5oBoGlesQcMzOAyECET%2Bd3SKdRihFFG0o6voGSaU9j7TewKuEhS5mUBmYVz8b8KgB%2BrV%2FCuAzWrVVA9WnejMQGI1b0G3h%2FGoQ3xVwEXu2e6O%2Bcg1Y8d2%2FNgc3Kvcxe7g34zzcREaMHQIiLiD8pEj5iUswEH5Xd1vNn%2BkNpAiq2JLFrool1b8gzR4f850jaD9qQebVeU%2BMNTXj74GOqUBccn8ImTXPtCZBB%2BCNXmZ5YAC6Bo9pvtBPWKeGqnEjKBJexxHkN%2BdPgDqvUBfqd3P8RYx%2Fx%2FRHK1iCbVOEdFdNxDuFFBlnzVhP5jzQ%2BX47blpSp%2B6QLUpJfShiZWQCkHmDlcOODd%2FsssUN9wSXXvcBStw6B%2BUPFqLqiDGd7fIjQfCzTl32%2BPfZQ%2BAi1C7ZNqrpoOktn6zb3JQLv1hXwu%2FhMzpfjaX&X-Amz-Signature=05515630d967cd60270d3d8daf8d8dc8d97798829d9cd22cda57e1a225c33453&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
