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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUEW6BM2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCVLqSzacceoqCd8O6ri9HGPOALdPEMYTs9813EkPTGjAIhAOYpowZ0ENDdM%2FD%2BydRBmzFcxrxsQuwJmABqVUmmh9RmKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx76VF2cnXfAcSNO8q3ANu4uKCQT38tyqe9z1sPZQVjrlY%2FP7Ffyzn0YeLm1ehpvjrK%2F81qIgo8Zx6jfkcvOjw7pIPUdAQYmDEVu8KPlU4coF55LrsB19hhP1BupAolRSJbjoR5Y4LGr4yzTJ5KkqyVvMe6nQexRmfIHONoOuPzLZTIb%2Fp1fweX1%2FbWOV9FqFoUCqeCXb9oGyOnKE38mzNYOti32NKwRxHYRhTQM4fd9L52De8PRb8hSBnr8QKmdLxIDQY5tsLIjVJOQU65z9slPYTLB2TpQuO1Q%2FCYsUXJHlSjScNHwi1tFn4Fw19nO0PH68tu2ap6u1HiCtb1UZAkbHEHZ4b5xBpGaB6sYMzHx58jl4SfMNF%2FnO0HPFk6bzDYbc6QtVVZMdvq%2B0IS8jHUGLr20R0bQpDGczLnQ56MKtZ%2BNU2iOisfqycAli1xGUZUadaiQoJInh7SMi0MJq39%2FW7PyGB4r6ySo703YgbA0x0yklW5ccTp51FE%2FGVhaCd8S77a3yjVUTLPTagz7trO0%2BLXUK%2FxiB1HIPgakDiS8t7u7okoJifpHNMaDqANQVIHrwmMATbD%2B9EYgARr8e%2Bp0j1S5BpsxuRBme7JVohgLTvPF6xCtVLqp7TbP9Z8PlYqT%2F5h0Q9zz8FVjCnuou%2BBjqkAafiUUZ3Url9JIBsHkNy26SL8S5Vp5sGTv3IXoGe%2Fy51mg%2FpsaIQprBJAvz9mLwZzUzP9E52TqZpmwoUlXLe8pSQth9nyidqhwP8u2nVUh22sHZ6xaolvt0FhObDMjRuQQCJ3Ht27v2RNUnqmEc6VqGBaOFJpPeOxprVH0DAE53BEhEmHvl%2Fq3xIcytjZy0t%2B4bgDr0Wl4LngHNGWCu%2B3823eANd&X-Amz-Signature=ec0841bcd80d91acc8b852970e3dead904bb6ac4f2f1544c7dadd42b041555fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUEW6BM2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCVLqSzacceoqCd8O6ri9HGPOALdPEMYTs9813EkPTGjAIhAOYpowZ0ENDdM%2FD%2BydRBmzFcxrxsQuwJmABqVUmmh9RmKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx76VF2cnXfAcSNO8q3ANu4uKCQT38tyqe9z1sPZQVjrlY%2FP7Ffyzn0YeLm1ehpvjrK%2F81qIgo8Zx6jfkcvOjw7pIPUdAQYmDEVu8KPlU4coF55LrsB19hhP1BupAolRSJbjoR5Y4LGr4yzTJ5KkqyVvMe6nQexRmfIHONoOuPzLZTIb%2Fp1fweX1%2FbWOV9FqFoUCqeCXb9oGyOnKE38mzNYOti32NKwRxHYRhTQM4fd9L52De8PRb8hSBnr8QKmdLxIDQY5tsLIjVJOQU65z9slPYTLB2TpQuO1Q%2FCYsUXJHlSjScNHwi1tFn4Fw19nO0PH68tu2ap6u1HiCtb1UZAkbHEHZ4b5xBpGaB6sYMzHx58jl4SfMNF%2FnO0HPFk6bzDYbc6QtVVZMdvq%2B0IS8jHUGLr20R0bQpDGczLnQ56MKtZ%2BNU2iOisfqycAli1xGUZUadaiQoJInh7SMi0MJq39%2FW7PyGB4r6ySo703YgbA0x0yklW5ccTp51FE%2FGVhaCd8S77a3yjVUTLPTagz7trO0%2BLXUK%2FxiB1HIPgakDiS8t7u7okoJifpHNMaDqANQVIHrwmMATbD%2B9EYgARr8e%2Bp0j1S5BpsxuRBme7JVohgLTvPF6xCtVLqp7TbP9Z8PlYqT%2F5h0Q9zz8FVjCnuou%2BBjqkAafiUUZ3Url9JIBsHkNy26SL8S5Vp5sGTv3IXoGe%2Fy51mg%2FpsaIQprBJAvz9mLwZzUzP9E52TqZpmwoUlXLe8pSQth9nyidqhwP8u2nVUh22sHZ6xaolvt0FhObDMjRuQQCJ3Ht27v2RNUnqmEc6VqGBaOFJpPeOxprVH0DAE53BEhEmHvl%2Fq3xIcytjZy0t%2B4bgDr0Wl4LngHNGWCu%2B3823eANd&X-Amz-Signature=371174ae325855ec3ee9f42def2eb0344c6f525bc9ff677b819adcf4dde56e07&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUEW6BM2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCVLqSzacceoqCd8O6ri9HGPOALdPEMYTs9813EkPTGjAIhAOYpowZ0ENDdM%2FD%2BydRBmzFcxrxsQuwJmABqVUmmh9RmKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx76VF2cnXfAcSNO8q3ANu4uKCQT38tyqe9z1sPZQVjrlY%2FP7Ffyzn0YeLm1ehpvjrK%2F81qIgo8Zx6jfkcvOjw7pIPUdAQYmDEVu8KPlU4coF55LrsB19hhP1BupAolRSJbjoR5Y4LGr4yzTJ5KkqyVvMe6nQexRmfIHONoOuPzLZTIb%2Fp1fweX1%2FbWOV9FqFoUCqeCXb9oGyOnKE38mzNYOti32NKwRxHYRhTQM4fd9L52De8PRb8hSBnr8QKmdLxIDQY5tsLIjVJOQU65z9slPYTLB2TpQuO1Q%2FCYsUXJHlSjScNHwi1tFn4Fw19nO0PH68tu2ap6u1HiCtb1UZAkbHEHZ4b5xBpGaB6sYMzHx58jl4SfMNF%2FnO0HPFk6bzDYbc6QtVVZMdvq%2B0IS8jHUGLr20R0bQpDGczLnQ56MKtZ%2BNU2iOisfqycAli1xGUZUadaiQoJInh7SMi0MJq39%2FW7PyGB4r6ySo703YgbA0x0yklW5ccTp51FE%2FGVhaCd8S77a3yjVUTLPTagz7trO0%2BLXUK%2FxiB1HIPgakDiS8t7u7okoJifpHNMaDqANQVIHrwmMATbD%2B9EYgARr8e%2Bp0j1S5BpsxuRBme7JVohgLTvPF6xCtVLqp7TbP9Z8PlYqT%2F5h0Q9zz8FVjCnuou%2BBjqkAafiUUZ3Url9JIBsHkNy26SL8S5Vp5sGTv3IXoGe%2Fy51mg%2FpsaIQprBJAvz9mLwZzUzP9E52TqZpmwoUlXLe8pSQth9nyidqhwP8u2nVUh22sHZ6xaolvt0FhObDMjRuQQCJ3Ht27v2RNUnqmEc6VqGBaOFJpPeOxprVH0DAE53BEhEmHvl%2Fq3xIcytjZy0t%2B4bgDr0Wl4LngHNGWCu%2B3823eANd&X-Amz-Signature=e855015f3eb79a969a918b888192ae333ac90afb8667f240ee452c8d800454b7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUEW6BM2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCVLqSzacceoqCd8O6ri9HGPOALdPEMYTs9813EkPTGjAIhAOYpowZ0ENDdM%2FD%2BydRBmzFcxrxsQuwJmABqVUmmh9RmKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx76VF2cnXfAcSNO8q3ANu4uKCQT38tyqe9z1sPZQVjrlY%2FP7Ffyzn0YeLm1ehpvjrK%2F81qIgo8Zx6jfkcvOjw7pIPUdAQYmDEVu8KPlU4coF55LrsB19hhP1BupAolRSJbjoR5Y4LGr4yzTJ5KkqyVvMe6nQexRmfIHONoOuPzLZTIb%2Fp1fweX1%2FbWOV9FqFoUCqeCXb9oGyOnKE38mzNYOti32NKwRxHYRhTQM4fd9L52De8PRb8hSBnr8QKmdLxIDQY5tsLIjVJOQU65z9slPYTLB2TpQuO1Q%2FCYsUXJHlSjScNHwi1tFn4Fw19nO0PH68tu2ap6u1HiCtb1UZAkbHEHZ4b5xBpGaB6sYMzHx58jl4SfMNF%2FnO0HPFk6bzDYbc6QtVVZMdvq%2B0IS8jHUGLr20R0bQpDGczLnQ56MKtZ%2BNU2iOisfqycAli1xGUZUadaiQoJInh7SMi0MJq39%2FW7PyGB4r6ySo703YgbA0x0yklW5ccTp51FE%2FGVhaCd8S77a3yjVUTLPTagz7trO0%2BLXUK%2FxiB1HIPgakDiS8t7u7okoJifpHNMaDqANQVIHrwmMATbD%2B9EYgARr8e%2Bp0j1S5BpsxuRBme7JVohgLTvPF6xCtVLqp7TbP9Z8PlYqT%2F5h0Q9zz8FVjCnuou%2BBjqkAafiUUZ3Url9JIBsHkNy26SL8S5Vp5sGTv3IXoGe%2Fy51mg%2FpsaIQprBJAvz9mLwZzUzP9E52TqZpmwoUlXLe8pSQth9nyidqhwP8u2nVUh22sHZ6xaolvt0FhObDMjRuQQCJ3Ht27v2RNUnqmEc6VqGBaOFJpPeOxprVH0DAE53BEhEmHvl%2Fq3xIcytjZy0t%2B4bgDr0Wl4LngHNGWCu%2B3823eANd&X-Amz-Signature=49610827974e540302c71653f98f4d2a457e0561ed6ab936ed87fc257bfe1615&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUEW6BM2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCVLqSzacceoqCd8O6ri9HGPOALdPEMYTs9813EkPTGjAIhAOYpowZ0ENDdM%2FD%2BydRBmzFcxrxsQuwJmABqVUmmh9RmKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx76VF2cnXfAcSNO8q3ANu4uKCQT38tyqe9z1sPZQVjrlY%2FP7Ffyzn0YeLm1ehpvjrK%2F81qIgo8Zx6jfkcvOjw7pIPUdAQYmDEVu8KPlU4coF55LrsB19hhP1BupAolRSJbjoR5Y4LGr4yzTJ5KkqyVvMe6nQexRmfIHONoOuPzLZTIb%2Fp1fweX1%2FbWOV9FqFoUCqeCXb9oGyOnKE38mzNYOti32NKwRxHYRhTQM4fd9L52De8PRb8hSBnr8QKmdLxIDQY5tsLIjVJOQU65z9slPYTLB2TpQuO1Q%2FCYsUXJHlSjScNHwi1tFn4Fw19nO0PH68tu2ap6u1HiCtb1UZAkbHEHZ4b5xBpGaB6sYMzHx58jl4SfMNF%2FnO0HPFk6bzDYbc6QtVVZMdvq%2B0IS8jHUGLr20R0bQpDGczLnQ56MKtZ%2BNU2iOisfqycAli1xGUZUadaiQoJInh7SMi0MJq39%2FW7PyGB4r6ySo703YgbA0x0yklW5ccTp51FE%2FGVhaCd8S77a3yjVUTLPTagz7trO0%2BLXUK%2FxiB1HIPgakDiS8t7u7okoJifpHNMaDqANQVIHrwmMATbD%2B9EYgARr8e%2Bp0j1S5BpsxuRBme7JVohgLTvPF6xCtVLqp7TbP9Z8PlYqT%2F5h0Q9zz8FVjCnuou%2BBjqkAafiUUZ3Url9JIBsHkNy26SL8S5Vp5sGTv3IXoGe%2Fy51mg%2FpsaIQprBJAvz9mLwZzUzP9E52TqZpmwoUlXLe8pSQth9nyidqhwP8u2nVUh22sHZ6xaolvt0FhObDMjRuQQCJ3Ht27v2RNUnqmEc6VqGBaOFJpPeOxprVH0DAE53BEhEmHvl%2Fq3xIcytjZy0t%2B4bgDr0Wl4LngHNGWCu%2B3823eANd&X-Amz-Signature=c9bfe5839ae10a03818c0f12a53ec5dadea9e6edb2e965dee2a32cefe17eb361&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUEW6BM2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCVLqSzacceoqCd8O6ri9HGPOALdPEMYTs9813EkPTGjAIhAOYpowZ0ENDdM%2FD%2BydRBmzFcxrxsQuwJmABqVUmmh9RmKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx76VF2cnXfAcSNO8q3ANu4uKCQT38tyqe9z1sPZQVjrlY%2FP7Ffyzn0YeLm1ehpvjrK%2F81qIgo8Zx6jfkcvOjw7pIPUdAQYmDEVu8KPlU4coF55LrsB19hhP1BupAolRSJbjoR5Y4LGr4yzTJ5KkqyVvMe6nQexRmfIHONoOuPzLZTIb%2Fp1fweX1%2FbWOV9FqFoUCqeCXb9oGyOnKE38mzNYOti32NKwRxHYRhTQM4fd9L52De8PRb8hSBnr8QKmdLxIDQY5tsLIjVJOQU65z9slPYTLB2TpQuO1Q%2FCYsUXJHlSjScNHwi1tFn4Fw19nO0PH68tu2ap6u1HiCtb1UZAkbHEHZ4b5xBpGaB6sYMzHx58jl4SfMNF%2FnO0HPFk6bzDYbc6QtVVZMdvq%2B0IS8jHUGLr20R0bQpDGczLnQ56MKtZ%2BNU2iOisfqycAli1xGUZUadaiQoJInh7SMi0MJq39%2FW7PyGB4r6ySo703YgbA0x0yklW5ccTp51FE%2FGVhaCd8S77a3yjVUTLPTagz7trO0%2BLXUK%2FxiB1HIPgakDiS8t7u7okoJifpHNMaDqANQVIHrwmMATbD%2B9EYgARr8e%2Bp0j1S5BpsxuRBme7JVohgLTvPF6xCtVLqp7TbP9Z8PlYqT%2F5h0Q9zz8FVjCnuou%2BBjqkAafiUUZ3Url9JIBsHkNy26SL8S5Vp5sGTv3IXoGe%2Fy51mg%2FpsaIQprBJAvz9mLwZzUzP9E52TqZpmwoUlXLe8pSQth9nyidqhwP8u2nVUh22sHZ6xaolvt0FhObDMjRuQQCJ3Ht27v2RNUnqmEc6VqGBaOFJpPeOxprVH0DAE53BEhEmHvl%2Fq3xIcytjZy0t%2B4bgDr0Wl4LngHNGWCu%2B3823eANd&X-Amz-Signature=bd3ddcc133d41a7a392709a0e119f706b0ee9fddcfd52b86a0a441458a0d287e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUEW6BM2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCVLqSzacceoqCd8O6ri9HGPOALdPEMYTs9813EkPTGjAIhAOYpowZ0ENDdM%2FD%2BydRBmzFcxrxsQuwJmABqVUmmh9RmKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx76VF2cnXfAcSNO8q3ANu4uKCQT38tyqe9z1sPZQVjrlY%2FP7Ffyzn0YeLm1ehpvjrK%2F81qIgo8Zx6jfkcvOjw7pIPUdAQYmDEVu8KPlU4coF55LrsB19hhP1BupAolRSJbjoR5Y4LGr4yzTJ5KkqyVvMe6nQexRmfIHONoOuPzLZTIb%2Fp1fweX1%2FbWOV9FqFoUCqeCXb9oGyOnKE38mzNYOti32NKwRxHYRhTQM4fd9L52De8PRb8hSBnr8QKmdLxIDQY5tsLIjVJOQU65z9slPYTLB2TpQuO1Q%2FCYsUXJHlSjScNHwi1tFn4Fw19nO0PH68tu2ap6u1HiCtb1UZAkbHEHZ4b5xBpGaB6sYMzHx58jl4SfMNF%2FnO0HPFk6bzDYbc6QtVVZMdvq%2B0IS8jHUGLr20R0bQpDGczLnQ56MKtZ%2BNU2iOisfqycAli1xGUZUadaiQoJInh7SMi0MJq39%2FW7PyGB4r6ySo703YgbA0x0yklW5ccTp51FE%2FGVhaCd8S77a3yjVUTLPTagz7trO0%2BLXUK%2FxiB1HIPgakDiS8t7u7okoJifpHNMaDqANQVIHrwmMATbD%2B9EYgARr8e%2Bp0j1S5BpsxuRBme7JVohgLTvPF6xCtVLqp7TbP9Z8PlYqT%2F5h0Q9zz8FVjCnuou%2BBjqkAafiUUZ3Url9JIBsHkNy26SL8S5Vp5sGTv3IXoGe%2Fy51mg%2FpsaIQprBJAvz9mLwZzUzP9E52TqZpmwoUlXLe8pSQth9nyidqhwP8u2nVUh22sHZ6xaolvt0FhObDMjRuQQCJ3Ht27v2RNUnqmEc6VqGBaOFJpPeOxprVH0DAE53BEhEmHvl%2Fq3xIcytjZy0t%2B4bgDr0Wl4LngHNGWCu%2B3823eANd&X-Amz-Signature=32cb9be2c8eff13a21fa5911b25d0c30dbab37dce56f736b5d2a19123a721855&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
