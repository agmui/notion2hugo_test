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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUNLWJAJ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCID9HBTzbhFO4z3gB4Ax%2Fjg1IOUWjkYTAKtCx48B8Dme%2BAiAKeKMnvTzPewGvhbkJ61OFFbx9yiMDSzLZT5XVtiHrPSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMun7VwbFZwWhCfB2gKtwD9XceHejXe3%2FZRAm3Ov1ykxtEud99slpna8zn19ZTZA5dCY0JYMGjSOmxmj7vRkr2C5hFjcx23PtZF8j%2FHwZgllzgaQLAcXyzXH66epbbJpiezXIbgRHn%2Bmb%2FOL4Z4ovapoNmYMe6C2Jpmg1FZFqmK8eygbNhOXZUFoieMlPmUZupLro0q7RldtmR11KbZ9Li2HfgbWDj2TMrynICR4JE1c22K7GR94s76aDy4UuvmewF5RLj8xGn0twA0x%2BBbdQSxhx6Ge%2B1qqeBDJBcwzv5QF3auinnMBXvgCthdfAeIESWmQO5ZRL03%2BjZ3YumSMpO%2F7hDOD5U2bhePn%2BQdWkdbv12NuIq6Kqd6o5WXO3NJFUFY7UME4ZYgKS8mwd76IWb6pWQaqhFKl8D298Uy8Wz2SQLFngUcn7lGt1nwIswfqM9xe6W2FebwZGiizi4nmWpGUZEvbNAlz%2BFJGkFHu9wMpJnTm5iRqEbSdh2hjwkbiEUjOAT5OY%2FtQvrfYYVCl3QUMPloE0RMgNgDnfyXOUP%2FJJyPBcnmb7derWJHMUUZr2MQFB%2BpM1vODAe16kb%2BFA9973uPGxglF7WWgOOYEZAcvpehN%2BxBBMYEU78kifazz0cJx5RzkSFcfMnjLEwuKGDwQY6pgGeXd2l7IkpWVk7TSLtN4ysOBxGuqmmJlBTP%2FXkR%2FAJ8iFBaUxH9ruuh9bVjQytUqF3QE7k1z%2FN5SPkELbjysEBfrhMIpRp2uEIsAEuGLHMF%2FzfslVWUrC03mANbHsHhpkzyAerPXXx3bXGWx%2FEYsENQMjU7bpMl8Af1qjVyMbdd5G3kMKJ1A9Jh7ZzmOQXLULvt6iU6h8bc2UpDZLx0mf6BQluaH7W&X-Amz-Signature=000edba52908f4ccaffc08fb361f0529473e8d23286e13b42a3f48de5dc6c4dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUNLWJAJ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCID9HBTzbhFO4z3gB4Ax%2Fjg1IOUWjkYTAKtCx48B8Dme%2BAiAKeKMnvTzPewGvhbkJ61OFFbx9yiMDSzLZT5XVtiHrPSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMun7VwbFZwWhCfB2gKtwD9XceHejXe3%2FZRAm3Ov1ykxtEud99slpna8zn19ZTZA5dCY0JYMGjSOmxmj7vRkr2C5hFjcx23PtZF8j%2FHwZgllzgaQLAcXyzXH66epbbJpiezXIbgRHn%2Bmb%2FOL4Z4ovapoNmYMe6C2Jpmg1FZFqmK8eygbNhOXZUFoieMlPmUZupLro0q7RldtmR11KbZ9Li2HfgbWDj2TMrynICR4JE1c22K7GR94s76aDy4UuvmewF5RLj8xGn0twA0x%2BBbdQSxhx6Ge%2B1qqeBDJBcwzv5QF3auinnMBXvgCthdfAeIESWmQO5ZRL03%2BjZ3YumSMpO%2F7hDOD5U2bhePn%2BQdWkdbv12NuIq6Kqd6o5WXO3NJFUFY7UME4ZYgKS8mwd76IWb6pWQaqhFKl8D298Uy8Wz2SQLFngUcn7lGt1nwIswfqM9xe6W2FebwZGiizi4nmWpGUZEvbNAlz%2BFJGkFHu9wMpJnTm5iRqEbSdh2hjwkbiEUjOAT5OY%2FtQvrfYYVCl3QUMPloE0RMgNgDnfyXOUP%2FJJyPBcnmb7derWJHMUUZr2MQFB%2BpM1vODAe16kb%2BFA9973uPGxglF7WWgOOYEZAcvpehN%2BxBBMYEU78kifazz0cJx5RzkSFcfMnjLEwuKGDwQY6pgGeXd2l7IkpWVk7TSLtN4ysOBxGuqmmJlBTP%2FXkR%2FAJ8iFBaUxH9ruuh9bVjQytUqF3QE7k1z%2FN5SPkELbjysEBfrhMIpRp2uEIsAEuGLHMF%2FzfslVWUrC03mANbHsHhpkzyAerPXXx3bXGWx%2FEYsENQMjU7bpMl8Af1qjVyMbdd5G3kMKJ1A9Jh7ZzmOQXLULvt6iU6h8bc2UpDZLx0mf6BQluaH7W&X-Amz-Signature=0a062dded02e50207452a9f7fd4be7a77caaddfaa8b173c6e140ea2d4cc042a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUNLWJAJ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCID9HBTzbhFO4z3gB4Ax%2Fjg1IOUWjkYTAKtCx48B8Dme%2BAiAKeKMnvTzPewGvhbkJ61OFFbx9yiMDSzLZT5XVtiHrPSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMun7VwbFZwWhCfB2gKtwD9XceHejXe3%2FZRAm3Ov1ykxtEud99slpna8zn19ZTZA5dCY0JYMGjSOmxmj7vRkr2C5hFjcx23PtZF8j%2FHwZgllzgaQLAcXyzXH66epbbJpiezXIbgRHn%2Bmb%2FOL4Z4ovapoNmYMe6C2Jpmg1FZFqmK8eygbNhOXZUFoieMlPmUZupLro0q7RldtmR11KbZ9Li2HfgbWDj2TMrynICR4JE1c22K7GR94s76aDy4UuvmewF5RLj8xGn0twA0x%2BBbdQSxhx6Ge%2B1qqeBDJBcwzv5QF3auinnMBXvgCthdfAeIESWmQO5ZRL03%2BjZ3YumSMpO%2F7hDOD5U2bhePn%2BQdWkdbv12NuIq6Kqd6o5WXO3NJFUFY7UME4ZYgKS8mwd76IWb6pWQaqhFKl8D298Uy8Wz2SQLFngUcn7lGt1nwIswfqM9xe6W2FebwZGiizi4nmWpGUZEvbNAlz%2BFJGkFHu9wMpJnTm5iRqEbSdh2hjwkbiEUjOAT5OY%2FtQvrfYYVCl3QUMPloE0RMgNgDnfyXOUP%2FJJyPBcnmb7derWJHMUUZr2MQFB%2BpM1vODAe16kb%2BFA9973uPGxglF7WWgOOYEZAcvpehN%2BxBBMYEU78kifazz0cJx5RzkSFcfMnjLEwuKGDwQY6pgGeXd2l7IkpWVk7TSLtN4ysOBxGuqmmJlBTP%2FXkR%2FAJ8iFBaUxH9ruuh9bVjQytUqF3QE7k1z%2FN5SPkELbjysEBfrhMIpRp2uEIsAEuGLHMF%2FzfslVWUrC03mANbHsHhpkzyAerPXXx3bXGWx%2FEYsENQMjU7bpMl8Af1qjVyMbdd5G3kMKJ1A9Jh7ZzmOQXLULvt6iU6h8bc2UpDZLx0mf6BQluaH7W&X-Amz-Signature=5c510d93c76d2712b80d4e2bf835185c9215f873e363a8972909ed174fe8407c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUNLWJAJ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCID9HBTzbhFO4z3gB4Ax%2Fjg1IOUWjkYTAKtCx48B8Dme%2BAiAKeKMnvTzPewGvhbkJ61OFFbx9yiMDSzLZT5XVtiHrPSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMun7VwbFZwWhCfB2gKtwD9XceHejXe3%2FZRAm3Ov1ykxtEud99slpna8zn19ZTZA5dCY0JYMGjSOmxmj7vRkr2C5hFjcx23PtZF8j%2FHwZgllzgaQLAcXyzXH66epbbJpiezXIbgRHn%2Bmb%2FOL4Z4ovapoNmYMe6C2Jpmg1FZFqmK8eygbNhOXZUFoieMlPmUZupLro0q7RldtmR11KbZ9Li2HfgbWDj2TMrynICR4JE1c22K7GR94s76aDy4UuvmewF5RLj8xGn0twA0x%2BBbdQSxhx6Ge%2B1qqeBDJBcwzv5QF3auinnMBXvgCthdfAeIESWmQO5ZRL03%2BjZ3YumSMpO%2F7hDOD5U2bhePn%2BQdWkdbv12NuIq6Kqd6o5WXO3NJFUFY7UME4ZYgKS8mwd76IWb6pWQaqhFKl8D298Uy8Wz2SQLFngUcn7lGt1nwIswfqM9xe6W2FebwZGiizi4nmWpGUZEvbNAlz%2BFJGkFHu9wMpJnTm5iRqEbSdh2hjwkbiEUjOAT5OY%2FtQvrfYYVCl3QUMPloE0RMgNgDnfyXOUP%2FJJyPBcnmb7derWJHMUUZr2MQFB%2BpM1vODAe16kb%2BFA9973uPGxglF7WWgOOYEZAcvpehN%2BxBBMYEU78kifazz0cJx5RzkSFcfMnjLEwuKGDwQY6pgGeXd2l7IkpWVk7TSLtN4ysOBxGuqmmJlBTP%2FXkR%2FAJ8iFBaUxH9ruuh9bVjQytUqF3QE7k1z%2FN5SPkELbjysEBfrhMIpRp2uEIsAEuGLHMF%2FzfslVWUrC03mANbHsHhpkzyAerPXXx3bXGWx%2FEYsENQMjU7bpMl8Af1qjVyMbdd5G3kMKJ1A9Jh7ZzmOQXLULvt6iU6h8bc2UpDZLx0mf6BQluaH7W&X-Amz-Signature=314203521eb1f5374424c3692c24f398306160858bd1141d278cf1a8753bf2a6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUNLWJAJ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCID9HBTzbhFO4z3gB4Ax%2Fjg1IOUWjkYTAKtCx48B8Dme%2BAiAKeKMnvTzPewGvhbkJ61OFFbx9yiMDSzLZT5XVtiHrPSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMun7VwbFZwWhCfB2gKtwD9XceHejXe3%2FZRAm3Ov1ykxtEud99slpna8zn19ZTZA5dCY0JYMGjSOmxmj7vRkr2C5hFjcx23PtZF8j%2FHwZgllzgaQLAcXyzXH66epbbJpiezXIbgRHn%2Bmb%2FOL4Z4ovapoNmYMe6C2Jpmg1FZFqmK8eygbNhOXZUFoieMlPmUZupLro0q7RldtmR11KbZ9Li2HfgbWDj2TMrynICR4JE1c22K7GR94s76aDy4UuvmewF5RLj8xGn0twA0x%2BBbdQSxhx6Ge%2B1qqeBDJBcwzv5QF3auinnMBXvgCthdfAeIESWmQO5ZRL03%2BjZ3YumSMpO%2F7hDOD5U2bhePn%2BQdWkdbv12NuIq6Kqd6o5WXO3NJFUFY7UME4ZYgKS8mwd76IWb6pWQaqhFKl8D298Uy8Wz2SQLFngUcn7lGt1nwIswfqM9xe6W2FebwZGiizi4nmWpGUZEvbNAlz%2BFJGkFHu9wMpJnTm5iRqEbSdh2hjwkbiEUjOAT5OY%2FtQvrfYYVCl3QUMPloE0RMgNgDnfyXOUP%2FJJyPBcnmb7derWJHMUUZr2MQFB%2BpM1vODAe16kb%2BFA9973uPGxglF7WWgOOYEZAcvpehN%2BxBBMYEU78kifazz0cJx5RzkSFcfMnjLEwuKGDwQY6pgGeXd2l7IkpWVk7TSLtN4ysOBxGuqmmJlBTP%2FXkR%2FAJ8iFBaUxH9ruuh9bVjQytUqF3QE7k1z%2FN5SPkELbjysEBfrhMIpRp2uEIsAEuGLHMF%2FzfslVWUrC03mANbHsHhpkzyAerPXXx3bXGWx%2FEYsENQMjU7bpMl8Af1qjVyMbdd5G3kMKJ1A9Jh7ZzmOQXLULvt6iU6h8bc2UpDZLx0mf6BQluaH7W&X-Amz-Signature=3df14acb36f22812ff4af911269b7c31e4295303b9597e423e03efa6002a22e5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUNLWJAJ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCID9HBTzbhFO4z3gB4Ax%2Fjg1IOUWjkYTAKtCx48B8Dme%2BAiAKeKMnvTzPewGvhbkJ61OFFbx9yiMDSzLZT5XVtiHrPSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMun7VwbFZwWhCfB2gKtwD9XceHejXe3%2FZRAm3Ov1ykxtEud99slpna8zn19ZTZA5dCY0JYMGjSOmxmj7vRkr2C5hFjcx23PtZF8j%2FHwZgllzgaQLAcXyzXH66epbbJpiezXIbgRHn%2Bmb%2FOL4Z4ovapoNmYMe6C2Jpmg1FZFqmK8eygbNhOXZUFoieMlPmUZupLro0q7RldtmR11KbZ9Li2HfgbWDj2TMrynICR4JE1c22K7GR94s76aDy4UuvmewF5RLj8xGn0twA0x%2BBbdQSxhx6Ge%2B1qqeBDJBcwzv5QF3auinnMBXvgCthdfAeIESWmQO5ZRL03%2BjZ3YumSMpO%2F7hDOD5U2bhePn%2BQdWkdbv12NuIq6Kqd6o5WXO3NJFUFY7UME4ZYgKS8mwd76IWb6pWQaqhFKl8D298Uy8Wz2SQLFngUcn7lGt1nwIswfqM9xe6W2FebwZGiizi4nmWpGUZEvbNAlz%2BFJGkFHu9wMpJnTm5iRqEbSdh2hjwkbiEUjOAT5OY%2FtQvrfYYVCl3QUMPloE0RMgNgDnfyXOUP%2FJJyPBcnmb7derWJHMUUZr2MQFB%2BpM1vODAe16kb%2BFA9973uPGxglF7WWgOOYEZAcvpehN%2BxBBMYEU78kifazz0cJx5RzkSFcfMnjLEwuKGDwQY6pgGeXd2l7IkpWVk7TSLtN4ysOBxGuqmmJlBTP%2FXkR%2FAJ8iFBaUxH9ruuh9bVjQytUqF3QE7k1z%2FN5SPkELbjysEBfrhMIpRp2uEIsAEuGLHMF%2FzfslVWUrC03mANbHsHhpkzyAerPXXx3bXGWx%2FEYsENQMjU7bpMl8Af1qjVyMbdd5G3kMKJ1A9Jh7ZzmOQXLULvt6iU6h8bc2UpDZLx0mf6BQluaH7W&X-Amz-Signature=81bc6346b70a51a5765ce707cb59df6443b3af0dc58e9aa7f48028c2b1986112&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUNLWJAJ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCID9HBTzbhFO4z3gB4Ax%2Fjg1IOUWjkYTAKtCx48B8Dme%2BAiAKeKMnvTzPewGvhbkJ61OFFbx9yiMDSzLZT5XVtiHrPSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMun7VwbFZwWhCfB2gKtwD9XceHejXe3%2FZRAm3Ov1ykxtEud99slpna8zn19ZTZA5dCY0JYMGjSOmxmj7vRkr2C5hFjcx23PtZF8j%2FHwZgllzgaQLAcXyzXH66epbbJpiezXIbgRHn%2Bmb%2FOL4Z4ovapoNmYMe6C2Jpmg1FZFqmK8eygbNhOXZUFoieMlPmUZupLro0q7RldtmR11KbZ9Li2HfgbWDj2TMrynICR4JE1c22K7GR94s76aDy4UuvmewF5RLj8xGn0twA0x%2BBbdQSxhx6Ge%2B1qqeBDJBcwzv5QF3auinnMBXvgCthdfAeIESWmQO5ZRL03%2BjZ3YumSMpO%2F7hDOD5U2bhePn%2BQdWkdbv12NuIq6Kqd6o5WXO3NJFUFY7UME4ZYgKS8mwd76IWb6pWQaqhFKl8D298Uy8Wz2SQLFngUcn7lGt1nwIswfqM9xe6W2FebwZGiizi4nmWpGUZEvbNAlz%2BFJGkFHu9wMpJnTm5iRqEbSdh2hjwkbiEUjOAT5OY%2FtQvrfYYVCl3QUMPloE0RMgNgDnfyXOUP%2FJJyPBcnmb7derWJHMUUZr2MQFB%2BpM1vODAe16kb%2BFA9973uPGxglF7WWgOOYEZAcvpehN%2BxBBMYEU78kifazz0cJx5RzkSFcfMnjLEwuKGDwQY6pgGeXd2l7IkpWVk7TSLtN4ysOBxGuqmmJlBTP%2FXkR%2FAJ8iFBaUxH9ruuh9bVjQytUqF3QE7k1z%2FN5SPkELbjysEBfrhMIpRp2uEIsAEuGLHMF%2FzfslVWUrC03mANbHsHhpkzyAerPXXx3bXGWx%2FEYsENQMjU7bpMl8Af1qjVyMbdd5G3kMKJ1A9Jh7ZzmOQXLULvt6iU6h8bc2UpDZLx0mf6BQluaH7W&X-Amz-Signature=8e744e14d3fe79156c2ee40451fba64d44f439865b20c9150c63c711a43819be&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
