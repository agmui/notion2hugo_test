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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU522TOD%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbC36UcE75hLgZnNCnxgggJWykgyry%2B1UabO%2FZLjnmeAIhAOPSjU00LFkZeBPP50FZ6Esvqy63tiEMOPlH2WsB%2BvxcKv8DCDUQABoMNjM3NDIzMTgzODA1IgxS93xAFxwDQp%2Fdx4Mq3APEYk1AEuGImxye9uuSet%2FufQ9xEDf1deCvHmstaYG06tABP4TM4%2BF5MZ0jnbmLdqXxyINwhrXdMbsg5NUSVq2b2KGqTeF9ebnqhu5EGXDcHwHayuZx%2FknMPdV5B6VmspIZsbwJIdZkcAebA6zOePIHlRV4ymAKotQeEhiWThvRUsKZPlkU5xrSbGpvyyeYRbCv9cEdr8lkkeJrFnOJWKo7QQ17DxDEJAhvSYzykM13Xb01ziDfULTm3XebCCCnmMs5ywzrXhJAarWOx6%2Br58N1rV3SuzC3JDIVvAoLYO2aj93R9zq%2FVxkMpv%2FvUhmoRFDOVtaN%2Fl936%2FJ7W1pJ8C7GsR43f8ziquSMis7gxs1f4EwGuXjxy4hsiMIXUuXTLOgK4fdX7z%2FC5UM6BZojA%2BY2VIHmnEAvf%2F885CTVACTWhPH%2FXhhRctWGWqR2k3NmLec3i4ibCAB%2FkTSZ5WBCzTdJlXgnRY1ITtc%2FuJKEQReRvkr%2Fl9cEkGGaW0hqrIF3c6w%2FstIW9WE48vBWZNrNaCLgcUQrviJhvao%2FB66DCRdlIZKL2c2FknAUySFha%2F4s6pCzRyqnNO%2B1CPzNf728EhDB5giFyH47gFDi20U%2FpoFVjnQO1kEqkbBX3c0KqTCZ3Ny%2BBjqkAb%2FbMq2SI73thBXmUXqRy9JPwFXGRNEdSHf67piu5znBG8ciKXbGLCknucejLiN9uCXyADkq4WEcxLBjIScZGdoerSYlKdN4M13Gzq%2F5OlnDPJJ41FV3wef75Oy278XHeSUyo3XQWmdwO%2FVZWb4vIsN16kU4wAAExQsTT2aFNJqDcB4ARgw3NOmjxWfQ7KBamizLcA3tkUJfiyOoVTYhuxZNp8xu&X-Amz-Signature=3716bee1737efde1e79254e00e3c4642911884ec37fbf01bbc02f825f18d9972&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU522TOD%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbC36UcE75hLgZnNCnxgggJWykgyry%2B1UabO%2FZLjnmeAIhAOPSjU00LFkZeBPP50FZ6Esvqy63tiEMOPlH2WsB%2BvxcKv8DCDUQABoMNjM3NDIzMTgzODA1IgxS93xAFxwDQp%2Fdx4Mq3APEYk1AEuGImxye9uuSet%2FufQ9xEDf1deCvHmstaYG06tABP4TM4%2BF5MZ0jnbmLdqXxyINwhrXdMbsg5NUSVq2b2KGqTeF9ebnqhu5EGXDcHwHayuZx%2FknMPdV5B6VmspIZsbwJIdZkcAebA6zOePIHlRV4ymAKotQeEhiWThvRUsKZPlkU5xrSbGpvyyeYRbCv9cEdr8lkkeJrFnOJWKo7QQ17DxDEJAhvSYzykM13Xb01ziDfULTm3XebCCCnmMs5ywzrXhJAarWOx6%2Br58N1rV3SuzC3JDIVvAoLYO2aj93R9zq%2FVxkMpv%2FvUhmoRFDOVtaN%2Fl936%2FJ7W1pJ8C7GsR43f8ziquSMis7gxs1f4EwGuXjxy4hsiMIXUuXTLOgK4fdX7z%2FC5UM6BZojA%2BY2VIHmnEAvf%2F885CTVACTWhPH%2FXhhRctWGWqR2k3NmLec3i4ibCAB%2FkTSZ5WBCzTdJlXgnRY1ITtc%2FuJKEQReRvkr%2Fl9cEkGGaW0hqrIF3c6w%2FstIW9WE48vBWZNrNaCLgcUQrviJhvao%2FB66DCRdlIZKL2c2FknAUySFha%2F4s6pCzRyqnNO%2B1CPzNf728EhDB5giFyH47gFDi20U%2FpoFVjnQO1kEqkbBX3c0KqTCZ3Ny%2BBjqkAb%2FbMq2SI73thBXmUXqRy9JPwFXGRNEdSHf67piu5znBG8ciKXbGLCknucejLiN9uCXyADkq4WEcxLBjIScZGdoerSYlKdN4M13Gzq%2F5OlnDPJJ41FV3wef75Oy278XHeSUyo3XQWmdwO%2FVZWb4vIsN16kU4wAAExQsTT2aFNJqDcB4ARgw3NOmjxWfQ7KBamizLcA3tkUJfiyOoVTYhuxZNp8xu&X-Amz-Signature=1f4114c4f2bfe56aaa4e81ccacef70a7ccb4acf0bc48660becbc1d40b827b98b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU522TOD%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbC36UcE75hLgZnNCnxgggJWykgyry%2B1UabO%2FZLjnmeAIhAOPSjU00LFkZeBPP50FZ6Esvqy63tiEMOPlH2WsB%2BvxcKv8DCDUQABoMNjM3NDIzMTgzODA1IgxS93xAFxwDQp%2Fdx4Mq3APEYk1AEuGImxye9uuSet%2FufQ9xEDf1deCvHmstaYG06tABP4TM4%2BF5MZ0jnbmLdqXxyINwhrXdMbsg5NUSVq2b2KGqTeF9ebnqhu5EGXDcHwHayuZx%2FknMPdV5B6VmspIZsbwJIdZkcAebA6zOePIHlRV4ymAKotQeEhiWThvRUsKZPlkU5xrSbGpvyyeYRbCv9cEdr8lkkeJrFnOJWKo7QQ17DxDEJAhvSYzykM13Xb01ziDfULTm3XebCCCnmMs5ywzrXhJAarWOx6%2Br58N1rV3SuzC3JDIVvAoLYO2aj93R9zq%2FVxkMpv%2FvUhmoRFDOVtaN%2Fl936%2FJ7W1pJ8C7GsR43f8ziquSMis7gxs1f4EwGuXjxy4hsiMIXUuXTLOgK4fdX7z%2FC5UM6BZojA%2BY2VIHmnEAvf%2F885CTVACTWhPH%2FXhhRctWGWqR2k3NmLec3i4ibCAB%2FkTSZ5WBCzTdJlXgnRY1ITtc%2FuJKEQReRvkr%2Fl9cEkGGaW0hqrIF3c6w%2FstIW9WE48vBWZNrNaCLgcUQrviJhvao%2FB66DCRdlIZKL2c2FknAUySFha%2F4s6pCzRyqnNO%2B1CPzNf728EhDB5giFyH47gFDi20U%2FpoFVjnQO1kEqkbBX3c0KqTCZ3Ny%2BBjqkAb%2FbMq2SI73thBXmUXqRy9JPwFXGRNEdSHf67piu5znBG8ciKXbGLCknucejLiN9uCXyADkq4WEcxLBjIScZGdoerSYlKdN4M13Gzq%2F5OlnDPJJ41FV3wef75Oy278XHeSUyo3XQWmdwO%2FVZWb4vIsN16kU4wAAExQsTT2aFNJqDcB4ARgw3NOmjxWfQ7KBamizLcA3tkUJfiyOoVTYhuxZNp8xu&X-Amz-Signature=14ef6ecb999cdcf91ad5803a1037123bf7b2bd81760c9846229ab1a1ba5adffb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU522TOD%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbC36UcE75hLgZnNCnxgggJWykgyry%2B1UabO%2FZLjnmeAIhAOPSjU00LFkZeBPP50FZ6Esvqy63tiEMOPlH2WsB%2BvxcKv8DCDUQABoMNjM3NDIzMTgzODA1IgxS93xAFxwDQp%2Fdx4Mq3APEYk1AEuGImxye9uuSet%2FufQ9xEDf1deCvHmstaYG06tABP4TM4%2BF5MZ0jnbmLdqXxyINwhrXdMbsg5NUSVq2b2KGqTeF9ebnqhu5EGXDcHwHayuZx%2FknMPdV5B6VmspIZsbwJIdZkcAebA6zOePIHlRV4ymAKotQeEhiWThvRUsKZPlkU5xrSbGpvyyeYRbCv9cEdr8lkkeJrFnOJWKo7QQ17DxDEJAhvSYzykM13Xb01ziDfULTm3XebCCCnmMs5ywzrXhJAarWOx6%2Br58N1rV3SuzC3JDIVvAoLYO2aj93R9zq%2FVxkMpv%2FvUhmoRFDOVtaN%2Fl936%2FJ7W1pJ8C7GsR43f8ziquSMis7gxs1f4EwGuXjxy4hsiMIXUuXTLOgK4fdX7z%2FC5UM6BZojA%2BY2VIHmnEAvf%2F885CTVACTWhPH%2FXhhRctWGWqR2k3NmLec3i4ibCAB%2FkTSZ5WBCzTdJlXgnRY1ITtc%2FuJKEQReRvkr%2Fl9cEkGGaW0hqrIF3c6w%2FstIW9WE48vBWZNrNaCLgcUQrviJhvao%2FB66DCRdlIZKL2c2FknAUySFha%2F4s6pCzRyqnNO%2B1CPzNf728EhDB5giFyH47gFDi20U%2FpoFVjnQO1kEqkbBX3c0KqTCZ3Ny%2BBjqkAb%2FbMq2SI73thBXmUXqRy9JPwFXGRNEdSHf67piu5znBG8ciKXbGLCknucejLiN9uCXyADkq4WEcxLBjIScZGdoerSYlKdN4M13Gzq%2F5OlnDPJJ41FV3wef75Oy278XHeSUyo3XQWmdwO%2FVZWb4vIsN16kU4wAAExQsTT2aFNJqDcB4ARgw3NOmjxWfQ7KBamizLcA3tkUJfiyOoVTYhuxZNp8xu&X-Amz-Signature=73e7b1db5de676de3960a9f57b7d8e9f35668d460ce3f069276b819113a303b1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU522TOD%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbC36UcE75hLgZnNCnxgggJWykgyry%2B1UabO%2FZLjnmeAIhAOPSjU00LFkZeBPP50FZ6Esvqy63tiEMOPlH2WsB%2BvxcKv8DCDUQABoMNjM3NDIzMTgzODA1IgxS93xAFxwDQp%2Fdx4Mq3APEYk1AEuGImxye9uuSet%2FufQ9xEDf1deCvHmstaYG06tABP4TM4%2BF5MZ0jnbmLdqXxyINwhrXdMbsg5NUSVq2b2KGqTeF9ebnqhu5EGXDcHwHayuZx%2FknMPdV5B6VmspIZsbwJIdZkcAebA6zOePIHlRV4ymAKotQeEhiWThvRUsKZPlkU5xrSbGpvyyeYRbCv9cEdr8lkkeJrFnOJWKo7QQ17DxDEJAhvSYzykM13Xb01ziDfULTm3XebCCCnmMs5ywzrXhJAarWOx6%2Br58N1rV3SuzC3JDIVvAoLYO2aj93R9zq%2FVxkMpv%2FvUhmoRFDOVtaN%2Fl936%2FJ7W1pJ8C7GsR43f8ziquSMis7gxs1f4EwGuXjxy4hsiMIXUuXTLOgK4fdX7z%2FC5UM6BZojA%2BY2VIHmnEAvf%2F885CTVACTWhPH%2FXhhRctWGWqR2k3NmLec3i4ibCAB%2FkTSZ5WBCzTdJlXgnRY1ITtc%2FuJKEQReRvkr%2Fl9cEkGGaW0hqrIF3c6w%2FstIW9WE48vBWZNrNaCLgcUQrviJhvao%2FB66DCRdlIZKL2c2FknAUySFha%2F4s6pCzRyqnNO%2B1CPzNf728EhDB5giFyH47gFDi20U%2FpoFVjnQO1kEqkbBX3c0KqTCZ3Ny%2BBjqkAb%2FbMq2SI73thBXmUXqRy9JPwFXGRNEdSHf67piu5znBG8ciKXbGLCknucejLiN9uCXyADkq4WEcxLBjIScZGdoerSYlKdN4M13Gzq%2F5OlnDPJJ41FV3wef75Oy278XHeSUyo3XQWmdwO%2FVZWb4vIsN16kU4wAAExQsTT2aFNJqDcB4ARgw3NOmjxWfQ7KBamizLcA3tkUJfiyOoVTYhuxZNp8xu&X-Amz-Signature=aa884c52277ae590541082916fa22d6644634454846109a26ec52e61fe1d8859&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU522TOD%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbC36UcE75hLgZnNCnxgggJWykgyry%2B1UabO%2FZLjnmeAIhAOPSjU00LFkZeBPP50FZ6Esvqy63tiEMOPlH2WsB%2BvxcKv8DCDUQABoMNjM3NDIzMTgzODA1IgxS93xAFxwDQp%2Fdx4Mq3APEYk1AEuGImxye9uuSet%2FufQ9xEDf1deCvHmstaYG06tABP4TM4%2BF5MZ0jnbmLdqXxyINwhrXdMbsg5NUSVq2b2KGqTeF9ebnqhu5EGXDcHwHayuZx%2FknMPdV5B6VmspIZsbwJIdZkcAebA6zOePIHlRV4ymAKotQeEhiWThvRUsKZPlkU5xrSbGpvyyeYRbCv9cEdr8lkkeJrFnOJWKo7QQ17DxDEJAhvSYzykM13Xb01ziDfULTm3XebCCCnmMs5ywzrXhJAarWOx6%2Br58N1rV3SuzC3JDIVvAoLYO2aj93R9zq%2FVxkMpv%2FvUhmoRFDOVtaN%2Fl936%2FJ7W1pJ8C7GsR43f8ziquSMis7gxs1f4EwGuXjxy4hsiMIXUuXTLOgK4fdX7z%2FC5UM6BZojA%2BY2VIHmnEAvf%2F885CTVACTWhPH%2FXhhRctWGWqR2k3NmLec3i4ibCAB%2FkTSZ5WBCzTdJlXgnRY1ITtc%2FuJKEQReRvkr%2Fl9cEkGGaW0hqrIF3c6w%2FstIW9WE48vBWZNrNaCLgcUQrviJhvao%2FB66DCRdlIZKL2c2FknAUySFha%2F4s6pCzRyqnNO%2B1CPzNf728EhDB5giFyH47gFDi20U%2FpoFVjnQO1kEqkbBX3c0KqTCZ3Ny%2BBjqkAb%2FbMq2SI73thBXmUXqRy9JPwFXGRNEdSHf67piu5znBG8ciKXbGLCknucejLiN9uCXyADkq4WEcxLBjIScZGdoerSYlKdN4M13Gzq%2F5OlnDPJJ41FV3wef75Oy278XHeSUyo3XQWmdwO%2FVZWb4vIsN16kU4wAAExQsTT2aFNJqDcB4ARgw3NOmjxWfQ7KBamizLcA3tkUJfiyOoVTYhuxZNp8xu&X-Amz-Signature=3bc7cd4dd92d577103b0cd6e42fc95aa4eb819d702c3d2128fd88cb9423aacec&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU522TOD%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbC36UcE75hLgZnNCnxgggJWykgyry%2B1UabO%2FZLjnmeAIhAOPSjU00LFkZeBPP50FZ6Esvqy63tiEMOPlH2WsB%2BvxcKv8DCDUQABoMNjM3NDIzMTgzODA1IgxS93xAFxwDQp%2Fdx4Mq3APEYk1AEuGImxye9uuSet%2FufQ9xEDf1deCvHmstaYG06tABP4TM4%2BF5MZ0jnbmLdqXxyINwhrXdMbsg5NUSVq2b2KGqTeF9ebnqhu5EGXDcHwHayuZx%2FknMPdV5B6VmspIZsbwJIdZkcAebA6zOePIHlRV4ymAKotQeEhiWThvRUsKZPlkU5xrSbGpvyyeYRbCv9cEdr8lkkeJrFnOJWKo7QQ17DxDEJAhvSYzykM13Xb01ziDfULTm3XebCCCnmMs5ywzrXhJAarWOx6%2Br58N1rV3SuzC3JDIVvAoLYO2aj93R9zq%2FVxkMpv%2FvUhmoRFDOVtaN%2Fl936%2FJ7W1pJ8C7GsR43f8ziquSMis7gxs1f4EwGuXjxy4hsiMIXUuXTLOgK4fdX7z%2FC5UM6BZojA%2BY2VIHmnEAvf%2F885CTVACTWhPH%2FXhhRctWGWqR2k3NmLec3i4ibCAB%2FkTSZ5WBCzTdJlXgnRY1ITtc%2FuJKEQReRvkr%2Fl9cEkGGaW0hqrIF3c6w%2FstIW9WE48vBWZNrNaCLgcUQrviJhvao%2FB66DCRdlIZKL2c2FknAUySFha%2F4s6pCzRyqnNO%2B1CPzNf728EhDB5giFyH47gFDi20U%2FpoFVjnQO1kEqkbBX3c0KqTCZ3Ny%2BBjqkAb%2FbMq2SI73thBXmUXqRy9JPwFXGRNEdSHf67piu5znBG8ciKXbGLCknucejLiN9uCXyADkq4WEcxLBjIScZGdoerSYlKdN4M13Gzq%2F5OlnDPJJ41FV3wef75Oy278XHeSUyo3XQWmdwO%2FVZWb4vIsN16kU4wAAExQsTT2aFNJqDcB4ARgw3NOmjxWfQ7KBamizLcA3tkUJfiyOoVTYhuxZNp8xu&X-Amz-Signature=6cf2981370517a99bfa236a27e541a20a5159b18146c60ebcb1a8b2cfa6e4007&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
