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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQO4LTI%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIC517MTtkWFKYE91tfb7dxBlXtFiCM2pmgJq0oFuou3uAiEAw4iO%2BIOOXWdPYaT8B1l%2BqrN%2BnzPF%2B0lXe%2B14LHDWgJ8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOgGKMRBouVACJ4%2BNircA5FPo6oGdW3ExX4Cj5vhebax5qANE5s2xt%2BCnnmhjLGWEjsEEBa0T9LKPD0hQq272lvEPjE9LJAYCOu06fuN6TdKKeFJehzWgD51F42%2FN1WQpb%2FFe7XBdY5052YUHXhbxkrHLXfzZ0Mqc7TabnRENEpECZci1MDsyNrs1rM%2BVbb%2BnLQoA3w%2Fd6c1tS3eRyFx9d056Ky3RELeVQmzp7v65SHGTKTJ81awyPdGWMob9owFczyIFvIX7HucldBOh5A69sFWI11HQYieb40r%2BHcuCn%2B%2BYYlB2PzNaUY7dVe0yO902QiqWSUlrhye%2FPnzrRL0RlFqTuyGJUi48N0mWFw4ooJ6vP43%2BGILz7jLD27AjPvg8FnJKkpFLUS0GTlyIBozKxzUNu%2FNqvy6vU7AgWoSEtCRIPfeuSjYOc9t87GOE2odBxFcLw60RJcrp1c15dIZTCkaKDn5DM9rwxKhKio2qyF1DuRho3i9dv%2BkMfRVJXgTp8rLSvRrlXveiv6E2OAc5if7XUjMGI%2BGUatryAoEqtbwMWUqiSWkAf1x0%2B1YjznRUZ9jemTxE1bObQfN6fYwu7ftuhP4bdb46KJtyyqY3Tb96FZ40IMq3CyB8zLcBR5OK%2FNhZUztpu5Kw1MuMLuOnMMGOqUB%2BM1Kt75av4gNh8nUm7U15EPZIPPg9MHws8uZTDRtj4%2FIqC8yxnsuB0lm4Xe4NNT90Su2T5ekxIZFWBRNO94CMb1CkjsiUM2UxhcDaD8A77fVpl4BRKrqrvweYl0nhbnYhdqFbULNNMKgjwA2TR5mvBM%2B2Rn6GFgggWu89Gid50yEz0PKeoPyjSKjgnqW8ud7WMeVCWYkDO1P1Z7CqFCAW41HK7fH&X-Amz-Signature=e1fa52946e4d69c83568e886e384d660750cab958631a6ce77584cf00cbffe8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQO4LTI%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIC517MTtkWFKYE91tfb7dxBlXtFiCM2pmgJq0oFuou3uAiEAw4iO%2BIOOXWdPYaT8B1l%2BqrN%2BnzPF%2B0lXe%2B14LHDWgJ8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOgGKMRBouVACJ4%2BNircA5FPo6oGdW3ExX4Cj5vhebax5qANE5s2xt%2BCnnmhjLGWEjsEEBa0T9LKPD0hQq272lvEPjE9LJAYCOu06fuN6TdKKeFJehzWgD51F42%2FN1WQpb%2FFe7XBdY5052YUHXhbxkrHLXfzZ0Mqc7TabnRENEpECZci1MDsyNrs1rM%2BVbb%2BnLQoA3w%2Fd6c1tS3eRyFx9d056Ky3RELeVQmzp7v65SHGTKTJ81awyPdGWMob9owFczyIFvIX7HucldBOh5A69sFWI11HQYieb40r%2BHcuCn%2B%2BYYlB2PzNaUY7dVe0yO902QiqWSUlrhye%2FPnzrRL0RlFqTuyGJUi48N0mWFw4ooJ6vP43%2BGILz7jLD27AjPvg8FnJKkpFLUS0GTlyIBozKxzUNu%2FNqvy6vU7AgWoSEtCRIPfeuSjYOc9t87GOE2odBxFcLw60RJcrp1c15dIZTCkaKDn5DM9rwxKhKio2qyF1DuRho3i9dv%2BkMfRVJXgTp8rLSvRrlXveiv6E2OAc5if7XUjMGI%2BGUatryAoEqtbwMWUqiSWkAf1x0%2B1YjznRUZ9jemTxE1bObQfN6fYwu7ftuhP4bdb46KJtyyqY3Tb96FZ40IMq3CyB8zLcBR5OK%2FNhZUztpu5Kw1MuMLuOnMMGOqUB%2BM1Kt75av4gNh8nUm7U15EPZIPPg9MHws8uZTDRtj4%2FIqC8yxnsuB0lm4Xe4NNT90Su2T5ekxIZFWBRNO94CMb1CkjsiUM2UxhcDaD8A77fVpl4BRKrqrvweYl0nhbnYhdqFbULNNMKgjwA2TR5mvBM%2B2Rn6GFgggWu89Gid50yEz0PKeoPyjSKjgnqW8ud7WMeVCWYkDO1P1Z7CqFCAW41HK7fH&X-Amz-Signature=6f06c38d9588bc84e805bdb53d80bf784cb35562edfc138cc523b8e0e2ef21f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQO4LTI%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIC517MTtkWFKYE91tfb7dxBlXtFiCM2pmgJq0oFuou3uAiEAw4iO%2BIOOXWdPYaT8B1l%2BqrN%2BnzPF%2B0lXe%2B14LHDWgJ8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOgGKMRBouVACJ4%2BNircA5FPo6oGdW3ExX4Cj5vhebax5qANE5s2xt%2BCnnmhjLGWEjsEEBa0T9LKPD0hQq272lvEPjE9LJAYCOu06fuN6TdKKeFJehzWgD51F42%2FN1WQpb%2FFe7XBdY5052YUHXhbxkrHLXfzZ0Mqc7TabnRENEpECZci1MDsyNrs1rM%2BVbb%2BnLQoA3w%2Fd6c1tS3eRyFx9d056Ky3RELeVQmzp7v65SHGTKTJ81awyPdGWMob9owFczyIFvIX7HucldBOh5A69sFWI11HQYieb40r%2BHcuCn%2B%2BYYlB2PzNaUY7dVe0yO902QiqWSUlrhye%2FPnzrRL0RlFqTuyGJUi48N0mWFw4ooJ6vP43%2BGILz7jLD27AjPvg8FnJKkpFLUS0GTlyIBozKxzUNu%2FNqvy6vU7AgWoSEtCRIPfeuSjYOc9t87GOE2odBxFcLw60RJcrp1c15dIZTCkaKDn5DM9rwxKhKio2qyF1DuRho3i9dv%2BkMfRVJXgTp8rLSvRrlXveiv6E2OAc5if7XUjMGI%2BGUatryAoEqtbwMWUqiSWkAf1x0%2B1YjznRUZ9jemTxE1bObQfN6fYwu7ftuhP4bdb46KJtyyqY3Tb96FZ40IMq3CyB8zLcBR5OK%2FNhZUztpu5Kw1MuMLuOnMMGOqUB%2BM1Kt75av4gNh8nUm7U15EPZIPPg9MHws8uZTDRtj4%2FIqC8yxnsuB0lm4Xe4NNT90Su2T5ekxIZFWBRNO94CMb1CkjsiUM2UxhcDaD8A77fVpl4BRKrqrvweYl0nhbnYhdqFbULNNMKgjwA2TR5mvBM%2B2Rn6GFgggWu89Gid50yEz0PKeoPyjSKjgnqW8ud7WMeVCWYkDO1P1Z7CqFCAW41HK7fH&X-Amz-Signature=df7d61a8ec5c3f4e794ff272fa755fd14e2505cdb7a447ff4be7c45ef5fc8453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQO4LTI%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIC517MTtkWFKYE91tfb7dxBlXtFiCM2pmgJq0oFuou3uAiEAw4iO%2BIOOXWdPYaT8B1l%2BqrN%2BnzPF%2B0lXe%2B14LHDWgJ8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOgGKMRBouVACJ4%2BNircA5FPo6oGdW3ExX4Cj5vhebax5qANE5s2xt%2BCnnmhjLGWEjsEEBa0T9LKPD0hQq272lvEPjE9LJAYCOu06fuN6TdKKeFJehzWgD51F42%2FN1WQpb%2FFe7XBdY5052YUHXhbxkrHLXfzZ0Mqc7TabnRENEpECZci1MDsyNrs1rM%2BVbb%2BnLQoA3w%2Fd6c1tS3eRyFx9d056Ky3RELeVQmzp7v65SHGTKTJ81awyPdGWMob9owFczyIFvIX7HucldBOh5A69sFWI11HQYieb40r%2BHcuCn%2B%2BYYlB2PzNaUY7dVe0yO902QiqWSUlrhye%2FPnzrRL0RlFqTuyGJUi48N0mWFw4ooJ6vP43%2BGILz7jLD27AjPvg8FnJKkpFLUS0GTlyIBozKxzUNu%2FNqvy6vU7AgWoSEtCRIPfeuSjYOc9t87GOE2odBxFcLw60RJcrp1c15dIZTCkaKDn5DM9rwxKhKio2qyF1DuRho3i9dv%2BkMfRVJXgTp8rLSvRrlXveiv6E2OAc5if7XUjMGI%2BGUatryAoEqtbwMWUqiSWkAf1x0%2B1YjznRUZ9jemTxE1bObQfN6fYwu7ftuhP4bdb46KJtyyqY3Tb96FZ40IMq3CyB8zLcBR5OK%2FNhZUztpu5Kw1MuMLuOnMMGOqUB%2BM1Kt75av4gNh8nUm7U15EPZIPPg9MHws8uZTDRtj4%2FIqC8yxnsuB0lm4Xe4NNT90Su2T5ekxIZFWBRNO94CMb1CkjsiUM2UxhcDaD8A77fVpl4BRKrqrvweYl0nhbnYhdqFbULNNMKgjwA2TR5mvBM%2B2Rn6GFgggWu89Gid50yEz0PKeoPyjSKjgnqW8ud7WMeVCWYkDO1P1Z7CqFCAW41HK7fH&X-Amz-Signature=71ccbef5124adea64869c2a55c1265731e0aaef335d36652d91de0dcb66e3af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQO4LTI%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIC517MTtkWFKYE91tfb7dxBlXtFiCM2pmgJq0oFuou3uAiEAw4iO%2BIOOXWdPYaT8B1l%2BqrN%2BnzPF%2B0lXe%2B14LHDWgJ8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOgGKMRBouVACJ4%2BNircA5FPo6oGdW3ExX4Cj5vhebax5qANE5s2xt%2BCnnmhjLGWEjsEEBa0T9LKPD0hQq272lvEPjE9LJAYCOu06fuN6TdKKeFJehzWgD51F42%2FN1WQpb%2FFe7XBdY5052YUHXhbxkrHLXfzZ0Mqc7TabnRENEpECZci1MDsyNrs1rM%2BVbb%2BnLQoA3w%2Fd6c1tS3eRyFx9d056Ky3RELeVQmzp7v65SHGTKTJ81awyPdGWMob9owFczyIFvIX7HucldBOh5A69sFWI11HQYieb40r%2BHcuCn%2B%2BYYlB2PzNaUY7dVe0yO902QiqWSUlrhye%2FPnzrRL0RlFqTuyGJUi48N0mWFw4ooJ6vP43%2BGILz7jLD27AjPvg8FnJKkpFLUS0GTlyIBozKxzUNu%2FNqvy6vU7AgWoSEtCRIPfeuSjYOc9t87GOE2odBxFcLw60RJcrp1c15dIZTCkaKDn5DM9rwxKhKio2qyF1DuRho3i9dv%2BkMfRVJXgTp8rLSvRrlXveiv6E2OAc5if7XUjMGI%2BGUatryAoEqtbwMWUqiSWkAf1x0%2B1YjznRUZ9jemTxE1bObQfN6fYwu7ftuhP4bdb46KJtyyqY3Tb96FZ40IMq3CyB8zLcBR5OK%2FNhZUztpu5Kw1MuMLuOnMMGOqUB%2BM1Kt75av4gNh8nUm7U15EPZIPPg9MHws8uZTDRtj4%2FIqC8yxnsuB0lm4Xe4NNT90Su2T5ekxIZFWBRNO94CMb1CkjsiUM2UxhcDaD8A77fVpl4BRKrqrvweYl0nhbnYhdqFbULNNMKgjwA2TR5mvBM%2B2Rn6GFgggWu89Gid50yEz0PKeoPyjSKjgnqW8ud7WMeVCWYkDO1P1Z7CqFCAW41HK7fH&X-Amz-Signature=0c1a321748ecabab731c7af323d9b25ff3b0ca7f50e8c9afbf16a1908d83a089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQO4LTI%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIC517MTtkWFKYE91tfb7dxBlXtFiCM2pmgJq0oFuou3uAiEAw4iO%2BIOOXWdPYaT8B1l%2BqrN%2BnzPF%2B0lXe%2B14LHDWgJ8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOgGKMRBouVACJ4%2BNircA5FPo6oGdW3ExX4Cj5vhebax5qANE5s2xt%2BCnnmhjLGWEjsEEBa0T9LKPD0hQq272lvEPjE9LJAYCOu06fuN6TdKKeFJehzWgD51F42%2FN1WQpb%2FFe7XBdY5052YUHXhbxkrHLXfzZ0Mqc7TabnRENEpECZci1MDsyNrs1rM%2BVbb%2BnLQoA3w%2Fd6c1tS3eRyFx9d056Ky3RELeVQmzp7v65SHGTKTJ81awyPdGWMob9owFczyIFvIX7HucldBOh5A69sFWI11HQYieb40r%2BHcuCn%2B%2BYYlB2PzNaUY7dVe0yO902QiqWSUlrhye%2FPnzrRL0RlFqTuyGJUi48N0mWFw4ooJ6vP43%2BGILz7jLD27AjPvg8FnJKkpFLUS0GTlyIBozKxzUNu%2FNqvy6vU7AgWoSEtCRIPfeuSjYOc9t87GOE2odBxFcLw60RJcrp1c15dIZTCkaKDn5DM9rwxKhKio2qyF1DuRho3i9dv%2BkMfRVJXgTp8rLSvRrlXveiv6E2OAc5if7XUjMGI%2BGUatryAoEqtbwMWUqiSWkAf1x0%2B1YjznRUZ9jemTxE1bObQfN6fYwu7ftuhP4bdb46KJtyyqY3Tb96FZ40IMq3CyB8zLcBR5OK%2FNhZUztpu5Kw1MuMLuOnMMGOqUB%2BM1Kt75av4gNh8nUm7U15EPZIPPg9MHws8uZTDRtj4%2FIqC8yxnsuB0lm4Xe4NNT90Su2T5ekxIZFWBRNO94CMb1CkjsiUM2UxhcDaD8A77fVpl4BRKrqrvweYl0nhbnYhdqFbULNNMKgjwA2TR5mvBM%2B2Rn6GFgggWu89Gid50yEz0PKeoPyjSKjgnqW8ud7WMeVCWYkDO1P1Z7CqFCAW41HK7fH&X-Amz-Signature=985c2122187dfcb3b10cf68e17a41104d9264d0eef7ead84c21f2acb598c75eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQO4LTI%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIC517MTtkWFKYE91tfb7dxBlXtFiCM2pmgJq0oFuou3uAiEAw4iO%2BIOOXWdPYaT8B1l%2BqrN%2BnzPF%2B0lXe%2B14LHDWgJ8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOgGKMRBouVACJ4%2BNircA5FPo6oGdW3ExX4Cj5vhebax5qANE5s2xt%2BCnnmhjLGWEjsEEBa0T9LKPD0hQq272lvEPjE9LJAYCOu06fuN6TdKKeFJehzWgD51F42%2FN1WQpb%2FFe7XBdY5052YUHXhbxkrHLXfzZ0Mqc7TabnRENEpECZci1MDsyNrs1rM%2BVbb%2BnLQoA3w%2Fd6c1tS3eRyFx9d056Ky3RELeVQmzp7v65SHGTKTJ81awyPdGWMob9owFczyIFvIX7HucldBOh5A69sFWI11HQYieb40r%2BHcuCn%2B%2BYYlB2PzNaUY7dVe0yO902QiqWSUlrhye%2FPnzrRL0RlFqTuyGJUi48N0mWFw4ooJ6vP43%2BGILz7jLD27AjPvg8FnJKkpFLUS0GTlyIBozKxzUNu%2FNqvy6vU7AgWoSEtCRIPfeuSjYOc9t87GOE2odBxFcLw60RJcrp1c15dIZTCkaKDn5DM9rwxKhKio2qyF1DuRho3i9dv%2BkMfRVJXgTp8rLSvRrlXveiv6E2OAc5if7XUjMGI%2BGUatryAoEqtbwMWUqiSWkAf1x0%2B1YjznRUZ9jemTxE1bObQfN6fYwu7ftuhP4bdb46KJtyyqY3Tb96FZ40IMq3CyB8zLcBR5OK%2FNhZUztpu5Kw1MuMLuOnMMGOqUB%2BM1Kt75av4gNh8nUm7U15EPZIPPg9MHws8uZTDRtj4%2FIqC8yxnsuB0lm4Xe4NNT90Su2T5ekxIZFWBRNO94CMb1CkjsiUM2UxhcDaD8A77fVpl4BRKrqrvweYl0nhbnYhdqFbULNNMKgjwA2TR5mvBM%2B2Rn6GFgggWu89Gid50yEz0PKeoPyjSKjgnqW8ud7WMeVCWYkDO1P1Z7CqFCAW41HK7fH&X-Amz-Signature=f3387451274c35d370a73e6325111e4e7a5e2d9aab993d5562425cc8da4ac218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
