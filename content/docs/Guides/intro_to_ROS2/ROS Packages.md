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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OWCOJZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIF7fzm9HIulFtd044AdmgmwDvwkAM4nollH1HWHivtg%2FAiEAyONWgV2aQxke6FZc5uxnZf6oIUH8HMKp35DPaTfpcwIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDDsrTvFvHDrawkySCrcA9fL%2BGiqeBJw%2BLIfclS2ObVO8ungCg9P8YIjh5dpPphZNiS6gPfshf3%2BGQdO%2Fw3mMQeIfoq%2BNxCJSRL4UqTAni6Xpx5j%2FWdfVgu8DC9oY5lrErHu%2BnR3ZlyHUTAhLyTS6i9VkagtluP0yKw2JZkWFkOc2M4LsOmEsj87G5ed5zdYEzokzPka4%2B6%2BZWN7Tn%2FL9KL0q6Rw4HbRRR1rhPGYKBWtxcGqeKrEPIiw7wy%2FP%2B7FFgYx9fgCgS2KW22zcTqKtrBS4L%2F3tReTD2hr4%2BebJDf740sPuxNRJUVJP3I00WCg5ae%2BEm6a9lyBSnQvuSgINmRe%2F8JYeIbPyaL8FkGrhqboYlCPzENugBVfAei75H%2B8slT8TyvASq0JTTc1IATuIKFBsD4kgaF5bDZplzLKX5esJe0L%2FrptsSnQdDy1fbhtmB9qn2p35BSqtWqNVvG8uSI6c4QMCgY%2FOOD4hWIRWVGNNoiDfYxmdIDqGXpY0WHz5hte6goXu72cbAzgA5T4NYap%2FBDtarNV0AAt%2BMm%2BpjIRGmgw59ha34ZFFxtjPBxP4EA%2BeunQkI589M%2FGHCW14htFuf%2BmicwzTf8fpIxwlrV4fNIzuTA4MyoPZWt%2BVdI6FNOAX2x%2B36AhODcaMOz4iMIGOqUBsZM9OU47i0z66WRyrCL24nTd%2BzfWLqXjd%2BquyQUaBTzW%2FJlI6AvlzyHJHcsZlNDqjfnA3o64pmXcOZ4BHq4tVnBq7fm7qHSVnrcEzTLhIydkaLiPwUl%2BXaOVHT2zDiH1J04Q4HqsgyXC8wk0jSai5G%2FIR8KFa9z5PLqRIJmjOx3yu0%2F8JwCTDWqpwER3DgPTihamCEw7LtbGsHzKWKh8sqzjjVMM&X-Amz-Signature=32f8318903a894b4e33b085e5c3eb549658a6f0ea3fa86303b3309664dc6dd79&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OWCOJZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIF7fzm9HIulFtd044AdmgmwDvwkAM4nollH1HWHivtg%2FAiEAyONWgV2aQxke6FZc5uxnZf6oIUH8HMKp35DPaTfpcwIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDDsrTvFvHDrawkySCrcA9fL%2BGiqeBJw%2BLIfclS2ObVO8ungCg9P8YIjh5dpPphZNiS6gPfshf3%2BGQdO%2Fw3mMQeIfoq%2BNxCJSRL4UqTAni6Xpx5j%2FWdfVgu8DC9oY5lrErHu%2BnR3ZlyHUTAhLyTS6i9VkagtluP0yKw2JZkWFkOc2M4LsOmEsj87G5ed5zdYEzokzPka4%2B6%2BZWN7Tn%2FL9KL0q6Rw4HbRRR1rhPGYKBWtxcGqeKrEPIiw7wy%2FP%2B7FFgYx9fgCgS2KW22zcTqKtrBS4L%2F3tReTD2hr4%2BebJDf740sPuxNRJUVJP3I00WCg5ae%2BEm6a9lyBSnQvuSgINmRe%2F8JYeIbPyaL8FkGrhqboYlCPzENugBVfAei75H%2B8slT8TyvASq0JTTc1IATuIKFBsD4kgaF5bDZplzLKX5esJe0L%2FrptsSnQdDy1fbhtmB9qn2p35BSqtWqNVvG8uSI6c4QMCgY%2FOOD4hWIRWVGNNoiDfYxmdIDqGXpY0WHz5hte6goXu72cbAzgA5T4NYap%2FBDtarNV0AAt%2BMm%2BpjIRGmgw59ha34ZFFxtjPBxP4EA%2BeunQkI589M%2FGHCW14htFuf%2BmicwzTf8fpIxwlrV4fNIzuTA4MyoPZWt%2BVdI6FNOAX2x%2B36AhODcaMOz4iMIGOqUBsZM9OU47i0z66WRyrCL24nTd%2BzfWLqXjd%2BquyQUaBTzW%2FJlI6AvlzyHJHcsZlNDqjfnA3o64pmXcOZ4BHq4tVnBq7fm7qHSVnrcEzTLhIydkaLiPwUl%2BXaOVHT2zDiH1J04Q4HqsgyXC8wk0jSai5G%2FIR8KFa9z5PLqRIJmjOx3yu0%2F8JwCTDWqpwER3DgPTihamCEw7LtbGsHzKWKh8sqzjjVMM&X-Amz-Signature=b533556ea1aa8afcb4dfaa22d24335f23e30bbb5b8bd2ffaa78746234a7256c6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OWCOJZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIF7fzm9HIulFtd044AdmgmwDvwkAM4nollH1HWHivtg%2FAiEAyONWgV2aQxke6FZc5uxnZf6oIUH8HMKp35DPaTfpcwIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDDsrTvFvHDrawkySCrcA9fL%2BGiqeBJw%2BLIfclS2ObVO8ungCg9P8YIjh5dpPphZNiS6gPfshf3%2BGQdO%2Fw3mMQeIfoq%2BNxCJSRL4UqTAni6Xpx5j%2FWdfVgu8DC9oY5lrErHu%2BnR3ZlyHUTAhLyTS6i9VkagtluP0yKw2JZkWFkOc2M4LsOmEsj87G5ed5zdYEzokzPka4%2B6%2BZWN7Tn%2FL9KL0q6Rw4HbRRR1rhPGYKBWtxcGqeKrEPIiw7wy%2FP%2B7FFgYx9fgCgS2KW22zcTqKtrBS4L%2F3tReTD2hr4%2BebJDf740sPuxNRJUVJP3I00WCg5ae%2BEm6a9lyBSnQvuSgINmRe%2F8JYeIbPyaL8FkGrhqboYlCPzENugBVfAei75H%2B8slT8TyvASq0JTTc1IATuIKFBsD4kgaF5bDZplzLKX5esJe0L%2FrptsSnQdDy1fbhtmB9qn2p35BSqtWqNVvG8uSI6c4QMCgY%2FOOD4hWIRWVGNNoiDfYxmdIDqGXpY0WHz5hte6goXu72cbAzgA5T4NYap%2FBDtarNV0AAt%2BMm%2BpjIRGmgw59ha34ZFFxtjPBxP4EA%2BeunQkI589M%2FGHCW14htFuf%2BmicwzTf8fpIxwlrV4fNIzuTA4MyoPZWt%2BVdI6FNOAX2x%2B36AhODcaMOz4iMIGOqUBsZM9OU47i0z66WRyrCL24nTd%2BzfWLqXjd%2BquyQUaBTzW%2FJlI6AvlzyHJHcsZlNDqjfnA3o64pmXcOZ4BHq4tVnBq7fm7qHSVnrcEzTLhIydkaLiPwUl%2BXaOVHT2zDiH1J04Q4HqsgyXC8wk0jSai5G%2FIR8KFa9z5PLqRIJmjOx3yu0%2F8JwCTDWqpwER3DgPTihamCEw7LtbGsHzKWKh8sqzjjVMM&X-Amz-Signature=a895d6aa311777b048e02e82042ab1163ad62720157a4f378f3d73417edf7408&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OWCOJZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIF7fzm9HIulFtd044AdmgmwDvwkAM4nollH1HWHivtg%2FAiEAyONWgV2aQxke6FZc5uxnZf6oIUH8HMKp35DPaTfpcwIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDDsrTvFvHDrawkySCrcA9fL%2BGiqeBJw%2BLIfclS2ObVO8ungCg9P8YIjh5dpPphZNiS6gPfshf3%2BGQdO%2Fw3mMQeIfoq%2BNxCJSRL4UqTAni6Xpx5j%2FWdfVgu8DC9oY5lrErHu%2BnR3ZlyHUTAhLyTS6i9VkagtluP0yKw2JZkWFkOc2M4LsOmEsj87G5ed5zdYEzokzPka4%2B6%2BZWN7Tn%2FL9KL0q6Rw4HbRRR1rhPGYKBWtxcGqeKrEPIiw7wy%2FP%2B7FFgYx9fgCgS2KW22zcTqKtrBS4L%2F3tReTD2hr4%2BebJDf740sPuxNRJUVJP3I00WCg5ae%2BEm6a9lyBSnQvuSgINmRe%2F8JYeIbPyaL8FkGrhqboYlCPzENugBVfAei75H%2B8slT8TyvASq0JTTc1IATuIKFBsD4kgaF5bDZplzLKX5esJe0L%2FrptsSnQdDy1fbhtmB9qn2p35BSqtWqNVvG8uSI6c4QMCgY%2FOOD4hWIRWVGNNoiDfYxmdIDqGXpY0WHz5hte6goXu72cbAzgA5T4NYap%2FBDtarNV0AAt%2BMm%2BpjIRGmgw59ha34ZFFxtjPBxP4EA%2BeunQkI589M%2FGHCW14htFuf%2BmicwzTf8fpIxwlrV4fNIzuTA4MyoPZWt%2BVdI6FNOAX2x%2B36AhODcaMOz4iMIGOqUBsZM9OU47i0z66WRyrCL24nTd%2BzfWLqXjd%2BquyQUaBTzW%2FJlI6AvlzyHJHcsZlNDqjfnA3o64pmXcOZ4BHq4tVnBq7fm7qHSVnrcEzTLhIydkaLiPwUl%2BXaOVHT2zDiH1J04Q4HqsgyXC8wk0jSai5G%2FIR8KFa9z5PLqRIJmjOx3yu0%2F8JwCTDWqpwER3DgPTihamCEw7LtbGsHzKWKh8sqzjjVMM&X-Amz-Signature=b16d4bba676a0b70cc7ee64cb964f0d83bcf446f36ada411371b253ee2e9eb45&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OWCOJZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIF7fzm9HIulFtd044AdmgmwDvwkAM4nollH1HWHivtg%2FAiEAyONWgV2aQxke6FZc5uxnZf6oIUH8HMKp35DPaTfpcwIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDDsrTvFvHDrawkySCrcA9fL%2BGiqeBJw%2BLIfclS2ObVO8ungCg9P8YIjh5dpPphZNiS6gPfshf3%2BGQdO%2Fw3mMQeIfoq%2BNxCJSRL4UqTAni6Xpx5j%2FWdfVgu8DC9oY5lrErHu%2BnR3ZlyHUTAhLyTS6i9VkagtluP0yKw2JZkWFkOc2M4LsOmEsj87G5ed5zdYEzokzPka4%2B6%2BZWN7Tn%2FL9KL0q6Rw4HbRRR1rhPGYKBWtxcGqeKrEPIiw7wy%2FP%2B7FFgYx9fgCgS2KW22zcTqKtrBS4L%2F3tReTD2hr4%2BebJDf740sPuxNRJUVJP3I00WCg5ae%2BEm6a9lyBSnQvuSgINmRe%2F8JYeIbPyaL8FkGrhqboYlCPzENugBVfAei75H%2B8slT8TyvASq0JTTc1IATuIKFBsD4kgaF5bDZplzLKX5esJe0L%2FrptsSnQdDy1fbhtmB9qn2p35BSqtWqNVvG8uSI6c4QMCgY%2FOOD4hWIRWVGNNoiDfYxmdIDqGXpY0WHz5hte6goXu72cbAzgA5T4NYap%2FBDtarNV0AAt%2BMm%2BpjIRGmgw59ha34ZFFxtjPBxP4EA%2BeunQkI589M%2FGHCW14htFuf%2BmicwzTf8fpIxwlrV4fNIzuTA4MyoPZWt%2BVdI6FNOAX2x%2B36AhODcaMOz4iMIGOqUBsZM9OU47i0z66WRyrCL24nTd%2BzfWLqXjd%2BquyQUaBTzW%2FJlI6AvlzyHJHcsZlNDqjfnA3o64pmXcOZ4BHq4tVnBq7fm7qHSVnrcEzTLhIydkaLiPwUl%2BXaOVHT2zDiH1J04Q4HqsgyXC8wk0jSai5G%2FIR8KFa9z5PLqRIJmjOx3yu0%2F8JwCTDWqpwER3DgPTihamCEw7LtbGsHzKWKh8sqzjjVMM&X-Amz-Signature=fcdb29092c0ee1788859c197aa4ee34db84dabbc928ac36cf61e8042afa52b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OWCOJZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIF7fzm9HIulFtd044AdmgmwDvwkAM4nollH1HWHivtg%2FAiEAyONWgV2aQxke6FZc5uxnZf6oIUH8HMKp35DPaTfpcwIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDDsrTvFvHDrawkySCrcA9fL%2BGiqeBJw%2BLIfclS2ObVO8ungCg9P8YIjh5dpPphZNiS6gPfshf3%2BGQdO%2Fw3mMQeIfoq%2BNxCJSRL4UqTAni6Xpx5j%2FWdfVgu8DC9oY5lrErHu%2BnR3ZlyHUTAhLyTS6i9VkagtluP0yKw2JZkWFkOc2M4LsOmEsj87G5ed5zdYEzokzPka4%2B6%2BZWN7Tn%2FL9KL0q6Rw4HbRRR1rhPGYKBWtxcGqeKrEPIiw7wy%2FP%2B7FFgYx9fgCgS2KW22zcTqKtrBS4L%2F3tReTD2hr4%2BebJDf740sPuxNRJUVJP3I00WCg5ae%2BEm6a9lyBSnQvuSgINmRe%2F8JYeIbPyaL8FkGrhqboYlCPzENugBVfAei75H%2B8slT8TyvASq0JTTc1IATuIKFBsD4kgaF5bDZplzLKX5esJe0L%2FrptsSnQdDy1fbhtmB9qn2p35BSqtWqNVvG8uSI6c4QMCgY%2FOOD4hWIRWVGNNoiDfYxmdIDqGXpY0WHz5hte6goXu72cbAzgA5T4NYap%2FBDtarNV0AAt%2BMm%2BpjIRGmgw59ha34ZFFxtjPBxP4EA%2BeunQkI589M%2FGHCW14htFuf%2BmicwzTf8fpIxwlrV4fNIzuTA4MyoPZWt%2BVdI6FNOAX2x%2B36AhODcaMOz4iMIGOqUBsZM9OU47i0z66WRyrCL24nTd%2BzfWLqXjd%2BquyQUaBTzW%2FJlI6AvlzyHJHcsZlNDqjfnA3o64pmXcOZ4BHq4tVnBq7fm7qHSVnrcEzTLhIydkaLiPwUl%2BXaOVHT2zDiH1J04Q4HqsgyXC8wk0jSai5G%2FIR8KFa9z5PLqRIJmjOx3yu0%2F8JwCTDWqpwER3DgPTihamCEw7LtbGsHzKWKh8sqzjjVMM&X-Amz-Signature=35e1636f77f95ad86c4f221e8192920870017ee8d39134f6fe5270e0da56acf8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3OWCOJZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIF7fzm9HIulFtd044AdmgmwDvwkAM4nollH1HWHivtg%2FAiEAyONWgV2aQxke6FZc5uxnZf6oIUH8HMKp35DPaTfpcwIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDDsrTvFvHDrawkySCrcA9fL%2BGiqeBJw%2BLIfclS2ObVO8ungCg9P8YIjh5dpPphZNiS6gPfshf3%2BGQdO%2Fw3mMQeIfoq%2BNxCJSRL4UqTAni6Xpx5j%2FWdfVgu8DC9oY5lrErHu%2BnR3ZlyHUTAhLyTS6i9VkagtluP0yKw2JZkWFkOc2M4LsOmEsj87G5ed5zdYEzokzPka4%2B6%2BZWN7Tn%2FL9KL0q6Rw4HbRRR1rhPGYKBWtxcGqeKrEPIiw7wy%2FP%2B7FFgYx9fgCgS2KW22zcTqKtrBS4L%2F3tReTD2hr4%2BebJDf740sPuxNRJUVJP3I00WCg5ae%2BEm6a9lyBSnQvuSgINmRe%2F8JYeIbPyaL8FkGrhqboYlCPzENugBVfAei75H%2B8slT8TyvASq0JTTc1IATuIKFBsD4kgaF5bDZplzLKX5esJe0L%2FrptsSnQdDy1fbhtmB9qn2p35BSqtWqNVvG8uSI6c4QMCgY%2FOOD4hWIRWVGNNoiDfYxmdIDqGXpY0WHz5hte6goXu72cbAzgA5T4NYap%2FBDtarNV0AAt%2BMm%2BpjIRGmgw59ha34ZFFxtjPBxP4EA%2BeunQkI589M%2FGHCW14htFuf%2BmicwzTf8fpIxwlrV4fNIzuTA4MyoPZWt%2BVdI6FNOAX2x%2B36AhODcaMOz4iMIGOqUBsZM9OU47i0z66WRyrCL24nTd%2BzfWLqXjd%2BquyQUaBTzW%2FJlI6AvlzyHJHcsZlNDqjfnA3o64pmXcOZ4BHq4tVnBq7fm7qHSVnrcEzTLhIydkaLiPwUl%2BXaOVHT2zDiH1J04Q4HqsgyXC8wk0jSai5G%2FIR8KFa9z5PLqRIJmjOx3yu0%2F8JwCTDWqpwER3DgPTihamCEw7LtbGsHzKWKh8sqzjjVMM&X-Amz-Signature=d74e3fd52e5e5e7f26078bc15b38faff25caaaf360b2fc399c1f00795998147f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
