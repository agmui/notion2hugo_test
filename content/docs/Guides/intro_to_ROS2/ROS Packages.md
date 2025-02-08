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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSMRLOVF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDNNGO8pcvjEav0Ee2lgf80PUjUizNj1yks9e1MY1iulQIgCzEy44Kuwnv50C5byBjyoBSk3k9fKksW87EFwXq%2F3eIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNZcMno0W1kvEib3ircA0Pmq3IsyqFr0p0M%2BPSUr%2BjSQNW31TX%2BUvlHJPovUilraktfNIJkkKv86T2zS7QgrPEZdQ5VITn8Q9vW5x9cUht2CoiL3NEtjlGF%2Bl%2BrydLI9v18Yu%2FdZ%2FsO4VesjxJzK0HnYC4rYhvN3Ai7Y85JsbzYXSoPgcrKOAT8AMTQQ%2FBETfLzdlcWhmWtVgUPIiAyOLlZk3Xeb9%2BVfUpgxbiWjRL37xpUZ1xSe31aMXOErV6Ukj4HrpGArZrJF2wuHEfC7EDIMCm93dqpo2DCh8V%2FXf0Pmi1BOtW3KlgP2NFvzKgjrIQ2Sv9D98Bn%2BFBgdmO3%2FMDc5PRXSL0bEs2l%2Ffi3cegiGD13hVib1mGqZ%2BVw2evzJ3X%2F8FXfDm8ejqm4KZfahptMH1AMeot7Z6bg6Xn53UnrK1TNrpxLtxroe4WAd2dVbN3AGHWzpy0LvryiAF%2FCm83sNyuC%2BOGO%2FFOlKicYRmc0fb8sNUUeFGG0z%2FJmUho3oHGwqRLB45yb3ig9Qd3BDLh5vv8aUa6nXrob0nSnJ8kg0I1241enO0CaJOZD4voLh4Ko%2BGfe7a4CcasPuRnTLcivLIbvaf5efMaMMQQ1AO9BrqTX71fP%2FH0PXJaXQKO0H%2FveajbYwfBMYZrjMKaQnL0GOqUBaichj%2FIn5jPOk4X4gqGBdza0xpeZRDZP3l784SwZdbsARG79g11aMCNo1aJv9ehSp7DxLtlF88dbgOnZCQyqVnuHA1ocu77sY3Oi%2FBouZFhY2EK0rYnvafchy9bhz4rzKRbxFaC%2BPYA51Huy9yPeNZecaP%2BSBIF00kmKxsHJxwPY9%2BfRPkYsBIBKETLl2yetc0dL8N%2FIZTSem8Qpn4XRvfk3qXq9&X-Amz-Signature=46f7df3d9ccb8bf234930fda50c4d9032a0057453c849adea87c751c581e4927&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSMRLOVF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDNNGO8pcvjEav0Ee2lgf80PUjUizNj1yks9e1MY1iulQIgCzEy44Kuwnv50C5byBjyoBSk3k9fKksW87EFwXq%2F3eIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNZcMno0W1kvEib3ircA0Pmq3IsyqFr0p0M%2BPSUr%2BjSQNW31TX%2BUvlHJPovUilraktfNIJkkKv86T2zS7QgrPEZdQ5VITn8Q9vW5x9cUht2CoiL3NEtjlGF%2Bl%2BrydLI9v18Yu%2FdZ%2FsO4VesjxJzK0HnYC4rYhvN3Ai7Y85JsbzYXSoPgcrKOAT8AMTQQ%2FBETfLzdlcWhmWtVgUPIiAyOLlZk3Xeb9%2BVfUpgxbiWjRL37xpUZ1xSe31aMXOErV6Ukj4HrpGArZrJF2wuHEfC7EDIMCm93dqpo2DCh8V%2FXf0Pmi1BOtW3KlgP2NFvzKgjrIQ2Sv9D98Bn%2BFBgdmO3%2FMDc5PRXSL0bEs2l%2Ffi3cegiGD13hVib1mGqZ%2BVw2evzJ3X%2F8FXfDm8ejqm4KZfahptMH1AMeot7Z6bg6Xn53UnrK1TNrpxLtxroe4WAd2dVbN3AGHWzpy0LvryiAF%2FCm83sNyuC%2BOGO%2FFOlKicYRmc0fb8sNUUeFGG0z%2FJmUho3oHGwqRLB45yb3ig9Qd3BDLh5vv8aUa6nXrob0nSnJ8kg0I1241enO0CaJOZD4voLh4Ko%2BGfe7a4CcasPuRnTLcivLIbvaf5efMaMMQQ1AO9BrqTX71fP%2FH0PXJaXQKO0H%2FveajbYwfBMYZrjMKaQnL0GOqUBaichj%2FIn5jPOk4X4gqGBdza0xpeZRDZP3l784SwZdbsARG79g11aMCNo1aJv9ehSp7DxLtlF88dbgOnZCQyqVnuHA1ocu77sY3Oi%2FBouZFhY2EK0rYnvafchy9bhz4rzKRbxFaC%2BPYA51Huy9yPeNZecaP%2BSBIF00kmKxsHJxwPY9%2BfRPkYsBIBKETLl2yetc0dL8N%2FIZTSem8Qpn4XRvfk3qXq9&X-Amz-Signature=6f5e3aa3567745dcacdcc456bf0de370fc71d6de0e2daed92396cdfd1d24a353&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSMRLOVF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDNNGO8pcvjEav0Ee2lgf80PUjUizNj1yks9e1MY1iulQIgCzEy44Kuwnv50C5byBjyoBSk3k9fKksW87EFwXq%2F3eIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNZcMno0W1kvEib3ircA0Pmq3IsyqFr0p0M%2BPSUr%2BjSQNW31TX%2BUvlHJPovUilraktfNIJkkKv86T2zS7QgrPEZdQ5VITn8Q9vW5x9cUht2CoiL3NEtjlGF%2Bl%2BrydLI9v18Yu%2FdZ%2FsO4VesjxJzK0HnYC4rYhvN3Ai7Y85JsbzYXSoPgcrKOAT8AMTQQ%2FBETfLzdlcWhmWtVgUPIiAyOLlZk3Xeb9%2BVfUpgxbiWjRL37xpUZ1xSe31aMXOErV6Ukj4HrpGArZrJF2wuHEfC7EDIMCm93dqpo2DCh8V%2FXf0Pmi1BOtW3KlgP2NFvzKgjrIQ2Sv9D98Bn%2BFBgdmO3%2FMDc5PRXSL0bEs2l%2Ffi3cegiGD13hVib1mGqZ%2BVw2evzJ3X%2F8FXfDm8ejqm4KZfahptMH1AMeot7Z6bg6Xn53UnrK1TNrpxLtxroe4WAd2dVbN3AGHWzpy0LvryiAF%2FCm83sNyuC%2BOGO%2FFOlKicYRmc0fb8sNUUeFGG0z%2FJmUho3oHGwqRLB45yb3ig9Qd3BDLh5vv8aUa6nXrob0nSnJ8kg0I1241enO0CaJOZD4voLh4Ko%2BGfe7a4CcasPuRnTLcivLIbvaf5efMaMMQQ1AO9BrqTX71fP%2FH0PXJaXQKO0H%2FveajbYwfBMYZrjMKaQnL0GOqUBaichj%2FIn5jPOk4X4gqGBdza0xpeZRDZP3l784SwZdbsARG79g11aMCNo1aJv9ehSp7DxLtlF88dbgOnZCQyqVnuHA1ocu77sY3Oi%2FBouZFhY2EK0rYnvafchy9bhz4rzKRbxFaC%2BPYA51Huy9yPeNZecaP%2BSBIF00kmKxsHJxwPY9%2BfRPkYsBIBKETLl2yetc0dL8N%2FIZTSem8Qpn4XRvfk3qXq9&X-Amz-Signature=d39f66626ee77e21c53546aae4b32bcc92e5c74883e6c092805778cea3c79a26&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSMRLOVF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDNNGO8pcvjEav0Ee2lgf80PUjUizNj1yks9e1MY1iulQIgCzEy44Kuwnv50C5byBjyoBSk3k9fKksW87EFwXq%2F3eIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNZcMno0W1kvEib3ircA0Pmq3IsyqFr0p0M%2BPSUr%2BjSQNW31TX%2BUvlHJPovUilraktfNIJkkKv86T2zS7QgrPEZdQ5VITn8Q9vW5x9cUht2CoiL3NEtjlGF%2Bl%2BrydLI9v18Yu%2FdZ%2FsO4VesjxJzK0HnYC4rYhvN3Ai7Y85JsbzYXSoPgcrKOAT8AMTQQ%2FBETfLzdlcWhmWtVgUPIiAyOLlZk3Xeb9%2BVfUpgxbiWjRL37xpUZ1xSe31aMXOErV6Ukj4HrpGArZrJF2wuHEfC7EDIMCm93dqpo2DCh8V%2FXf0Pmi1BOtW3KlgP2NFvzKgjrIQ2Sv9D98Bn%2BFBgdmO3%2FMDc5PRXSL0bEs2l%2Ffi3cegiGD13hVib1mGqZ%2BVw2evzJ3X%2F8FXfDm8ejqm4KZfahptMH1AMeot7Z6bg6Xn53UnrK1TNrpxLtxroe4WAd2dVbN3AGHWzpy0LvryiAF%2FCm83sNyuC%2BOGO%2FFOlKicYRmc0fb8sNUUeFGG0z%2FJmUho3oHGwqRLB45yb3ig9Qd3BDLh5vv8aUa6nXrob0nSnJ8kg0I1241enO0CaJOZD4voLh4Ko%2BGfe7a4CcasPuRnTLcivLIbvaf5efMaMMQQ1AO9BrqTX71fP%2FH0PXJaXQKO0H%2FveajbYwfBMYZrjMKaQnL0GOqUBaichj%2FIn5jPOk4X4gqGBdza0xpeZRDZP3l784SwZdbsARG79g11aMCNo1aJv9ehSp7DxLtlF88dbgOnZCQyqVnuHA1ocu77sY3Oi%2FBouZFhY2EK0rYnvafchy9bhz4rzKRbxFaC%2BPYA51Huy9yPeNZecaP%2BSBIF00kmKxsHJxwPY9%2BfRPkYsBIBKETLl2yetc0dL8N%2FIZTSem8Qpn4XRvfk3qXq9&X-Amz-Signature=5903435dbff16dd601bd6bec31d6173db85e4849df80a9232d5044e9afeb4450&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSMRLOVF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDNNGO8pcvjEav0Ee2lgf80PUjUizNj1yks9e1MY1iulQIgCzEy44Kuwnv50C5byBjyoBSk3k9fKksW87EFwXq%2F3eIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNZcMno0W1kvEib3ircA0Pmq3IsyqFr0p0M%2BPSUr%2BjSQNW31TX%2BUvlHJPovUilraktfNIJkkKv86T2zS7QgrPEZdQ5VITn8Q9vW5x9cUht2CoiL3NEtjlGF%2Bl%2BrydLI9v18Yu%2FdZ%2FsO4VesjxJzK0HnYC4rYhvN3Ai7Y85JsbzYXSoPgcrKOAT8AMTQQ%2FBETfLzdlcWhmWtVgUPIiAyOLlZk3Xeb9%2BVfUpgxbiWjRL37xpUZ1xSe31aMXOErV6Ukj4HrpGArZrJF2wuHEfC7EDIMCm93dqpo2DCh8V%2FXf0Pmi1BOtW3KlgP2NFvzKgjrIQ2Sv9D98Bn%2BFBgdmO3%2FMDc5PRXSL0bEs2l%2Ffi3cegiGD13hVib1mGqZ%2BVw2evzJ3X%2F8FXfDm8ejqm4KZfahptMH1AMeot7Z6bg6Xn53UnrK1TNrpxLtxroe4WAd2dVbN3AGHWzpy0LvryiAF%2FCm83sNyuC%2BOGO%2FFOlKicYRmc0fb8sNUUeFGG0z%2FJmUho3oHGwqRLB45yb3ig9Qd3BDLh5vv8aUa6nXrob0nSnJ8kg0I1241enO0CaJOZD4voLh4Ko%2BGfe7a4CcasPuRnTLcivLIbvaf5efMaMMQQ1AO9BrqTX71fP%2FH0PXJaXQKO0H%2FveajbYwfBMYZrjMKaQnL0GOqUBaichj%2FIn5jPOk4X4gqGBdza0xpeZRDZP3l784SwZdbsARG79g11aMCNo1aJv9ehSp7DxLtlF88dbgOnZCQyqVnuHA1ocu77sY3Oi%2FBouZFhY2EK0rYnvafchy9bhz4rzKRbxFaC%2BPYA51Huy9yPeNZecaP%2BSBIF00kmKxsHJxwPY9%2BfRPkYsBIBKETLl2yetc0dL8N%2FIZTSem8Qpn4XRvfk3qXq9&X-Amz-Signature=6f357b8a70ed9660ef795d91e222010178b005495e060be4dc31a4f3f47f38ba&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSMRLOVF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDNNGO8pcvjEav0Ee2lgf80PUjUizNj1yks9e1MY1iulQIgCzEy44Kuwnv50C5byBjyoBSk3k9fKksW87EFwXq%2F3eIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNZcMno0W1kvEib3ircA0Pmq3IsyqFr0p0M%2BPSUr%2BjSQNW31TX%2BUvlHJPovUilraktfNIJkkKv86T2zS7QgrPEZdQ5VITn8Q9vW5x9cUht2CoiL3NEtjlGF%2Bl%2BrydLI9v18Yu%2FdZ%2FsO4VesjxJzK0HnYC4rYhvN3Ai7Y85JsbzYXSoPgcrKOAT8AMTQQ%2FBETfLzdlcWhmWtVgUPIiAyOLlZk3Xeb9%2BVfUpgxbiWjRL37xpUZ1xSe31aMXOErV6Ukj4HrpGArZrJF2wuHEfC7EDIMCm93dqpo2DCh8V%2FXf0Pmi1BOtW3KlgP2NFvzKgjrIQ2Sv9D98Bn%2BFBgdmO3%2FMDc5PRXSL0bEs2l%2Ffi3cegiGD13hVib1mGqZ%2BVw2evzJ3X%2F8FXfDm8ejqm4KZfahptMH1AMeot7Z6bg6Xn53UnrK1TNrpxLtxroe4WAd2dVbN3AGHWzpy0LvryiAF%2FCm83sNyuC%2BOGO%2FFOlKicYRmc0fb8sNUUeFGG0z%2FJmUho3oHGwqRLB45yb3ig9Qd3BDLh5vv8aUa6nXrob0nSnJ8kg0I1241enO0CaJOZD4voLh4Ko%2BGfe7a4CcasPuRnTLcivLIbvaf5efMaMMQQ1AO9BrqTX71fP%2FH0PXJaXQKO0H%2FveajbYwfBMYZrjMKaQnL0GOqUBaichj%2FIn5jPOk4X4gqGBdza0xpeZRDZP3l784SwZdbsARG79g11aMCNo1aJv9ehSp7DxLtlF88dbgOnZCQyqVnuHA1ocu77sY3Oi%2FBouZFhY2EK0rYnvafchy9bhz4rzKRbxFaC%2BPYA51Huy9yPeNZecaP%2BSBIF00kmKxsHJxwPY9%2BfRPkYsBIBKETLl2yetc0dL8N%2FIZTSem8Qpn4XRvfk3qXq9&X-Amz-Signature=5dd4a03bf4579511447fd5521a50bf26483e9841094221b9b72176fa1fed916b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSMRLOVF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDNNGO8pcvjEav0Ee2lgf80PUjUizNj1yks9e1MY1iulQIgCzEy44Kuwnv50C5byBjyoBSk3k9fKksW87EFwXq%2F3eIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNZcMno0W1kvEib3ircA0Pmq3IsyqFr0p0M%2BPSUr%2BjSQNW31TX%2BUvlHJPovUilraktfNIJkkKv86T2zS7QgrPEZdQ5VITn8Q9vW5x9cUht2CoiL3NEtjlGF%2Bl%2BrydLI9v18Yu%2FdZ%2FsO4VesjxJzK0HnYC4rYhvN3Ai7Y85JsbzYXSoPgcrKOAT8AMTQQ%2FBETfLzdlcWhmWtVgUPIiAyOLlZk3Xeb9%2BVfUpgxbiWjRL37xpUZ1xSe31aMXOErV6Ukj4HrpGArZrJF2wuHEfC7EDIMCm93dqpo2DCh8V%2FXf0Pmi1BOtW3KlgP2NFvzKgjrIQ2Sv9D98Bn%2BFBgdmO3%2FMDc5PRXSL0bEs2l%2Ffi3cegiGD13hVib1mGqZ%2BVw2evzJ3X%2F8FXfDm8ejqm4KZfahptMH1AMeot7Z6bg6Xn53UnrK1TNrpxLtxroe4WAd2dVbN3AGHWzpy0LvryiAF%2FCm83sNyuC%2BOGO%2FFOlKicYRmc0fb8sNUUeFGG0z%2FJmUho3oHGwqRLB45yb3ig9Qd3BDLh5vv8aUa6nXrob0nSnJ8kg0I1241enO0CaJOZD4voLh4Ko%2BGfe7a4CcasPuRnTLcivLIbvaf5efMaMMQQ1AO9BrqTX71fP%2FH0PXJaXQKO0H%2FveajbYwfBMYZrjMKaQnL0GOqUBaichj%2FIn5jPOk4X4gqGBdza0xpeZRDZP3l784SwZdbsARG79g11aMCNo1aJv9ehSp7DxLtlF88dbgOnZCQyqVnuHA1ocu77sY3Oi%2FBouZFhY2EK0rYnvafchy9bhz4rzKRbxFaC%2BPYA51Huy9yPeNZecaP%2BSBIF00kmKxsHJxwPY9%2BfRPkYsBIBKETLl2yetc0dL8N%2FIZTSem8Qpn4XRvfk3qXq9&X-Amz-Signature=c4c765ba0b285295c90ac1c36347384665fca9c8a6c6445da0540ff1244598e0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
