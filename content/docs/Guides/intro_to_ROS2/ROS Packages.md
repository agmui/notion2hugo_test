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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KI7FBZL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD%2BlEUclK%2BRepdpI9DvbW6kzAGqSmX0siY%2F%2BiGkGgQS4wIgKKpJaR0A61rQmy2DjSo5vSCzf0FmPJSTeNS%2BalnOVG4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRwmD3bFLLDW7ou1ircAwDx%2F6E8wCFd9l79Hy6mVMvE6ie77AcB1pbfgu2Amm5s4LhiJMrO5wWKL2ww50%2Btlb%2FSbchaFiwTFZkw9KNxTSqaMrx1Kda5Kvm8okgTD17Gv4Xyuw%2FG2Q2N%2Fn8G4Q5s4p3Wr%2FYDoRl1oxpuMh%2BmMYnpDhIH59FrktCk5yuqRvOZeTFtSh3SpvkfxuL7%2FL5bIHEzA0GD0i3KTk5gdhtcygH3iHhW3KOuKDSQ6Q2l5VZltedLI0I2DI5itcac8Wr15rxNdzm%2BmCbQM0JgMqdEa9b8NCTbSSA5Cxamf%2FFlMugPJHKnVJ29ypPGBzwXLyHM9WnKw0HThtOw3hXkHXP%2Bn36HwFp8GA1gc43xgGxG1mz7EYKbMPPCyrsKgB7djiKbhXeBPgNOY9k%2BF%2BkIrElv8OkeX26YPlU1l2HG43lQ7aqPQi0%2BatX76QSIreqQr%2F3RV49Mu%2Bf1y3F8HBqBOCV9jUDjKcJOacpViQe%2BWCuFzLvXjlGe9HmNGqGbLIKc6QhguRAMcznvqx1ymhvwpoWcyL6nVK4RiJA0%2BBaxgg3HXMRqt%2FrmkmYGwatqU%2FsFNTbDkPtTPSKsEWU4bJPNgGds8CiWeeXBp%2BWxdwHYxoQ0nKUXFpKCgpjOkI2hgKuBMMjOosAGOqUBWXFnrY3rHHNdHZPfA9VIQapKfUnSBAiZ1I1T%2FPS7NkEGi2bYvlMA4S%2B2uUH%2BRH6cgxrDd18sil6QYktYGKyCeNxp2JedROoKVpcITx7WFfqtwD4IFXHVmYn7p8i%2FchbUStLic6RKelvGBvND5xmxpMu6sTmT0k7Qa4cfqtlp3e4LRPw9V38m9jtGzFMRMtwE%2FWgAI8zfYX9JMuG4hRRweyPvcxnf&X-Amz-Signature=df22a4e51f508fd491698efdfe9e904f3f4822eff8f7410b88eb3c7fd5ede697&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KI7FBZL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD%2BlEUclK%2BRepdpI9DvbW6kzAGqSmX0siY%2F%2BiGkGgQS4wIgKKpJaR0A61rQmy2DjSo5vSCzf0FmPJSTeNS%2BalnOVG4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRwmD3bFLLDW7ou1ircAwDx%2F6E8wCFd9l79Hy6mVMvE6ie77AcB1pbfgu2Amm5s4LhiJMrO5wWKL2ww50%2Btlb%2FSbchaFiwTFZkw9KNxTSqaMrx1Kda5Kvm8okgTD17Gv4Xyuw%2FG2Q2N%2Fn8G4Q5s4p3Wr%2FYDoRl1oxpuMh%2BmMYnpDhIH59FrktCk5yuqRvOZeTFtSh3SpvkfxuL7%2FL5bIHEzA0GD0i3KTk5gdhtcygH3iHhW3KOuKDSQ6Q2l5VZltedLI0I2DI5itcac8Wr15rxNdzm%2BmCbQM0JgMqdEa9b8NCTbSSA5Cxamf%2FFlMugPJHKnVJ29ypPGBzwXLyHM9WnKw0HThtOw3hXkHXP%2Bn36HwFp8GA1gc43xgGxG1mz7EYKbMPPCyrsKgB7djiKbhXeBPgNOY9k%2BF%2BkIrElv8OkeX26YPlU1l2HG43lQ7aqPQi0%2BatX76QSIreqQr%2F3RV49Mu%2Bf1y3F8HBqBOCV9jUDjKcJOacpViQe%2BWCuFzLvXjlGe9HmNGqGbLIKc6QhguRAMcznvqx1ymhvwpoWcyL6nVK4RiJA0%2BBaxgg3HXMRqt%2FrmkmYGwatqU%2FsFNTbDkPtTPSKsEWU4bJPNgGds8CiWeeXBp%2BWxdwHYxoQ0nKUXFpKCgpjOkI2hgKuBMMjOosAGOqUBWXFnrY3rHHNdHZPfA9VIQapKfUnSBAiZ1I1T%2FPS7NkEGi2bYvlMA4S%2B2uUH%2BRH6cgxrDd18sil6QYktYGKyCeNxp2JedROoKVpcITx7WFfqtwD4IFXHVmYn7p8i%2FchbUStLic6RKelvGBvND5xmxpMu6sTmT0k7Qa4cfqtlp3e4LRPw9V38m9jtGzFMRMtwE%2FWgAI8zfYX9JMuG4hRRweyPvcxnf&X-Amz-Signature=183a254b50394f05c0f611b3096aeef1b241e5254076aceaa5fafe870fdbf382&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KI7FBZL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD%2BlEUclK%2BRepdpI9DvbW6kzAGqSmX0siY%2F%2BiGkGgQS4wIgKKpJaR0A61rQmy2DjSo5vSCzf0FmPJSTeNS%2BalnOVG4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRwmD3bFLLDW7ou1ircAwDx%2F6E8wCFd9l79Hy6mVMvE6ie77AcB1pbfgu2Amm5s4LhiJMrO5wWKL2ww50%2Btlb%2FSbchaFiwTFZkw9KNxTSqaMrx1Kda5Kvm8okgTD17Gv4Xyuw%2FG2Q2N%2Fn8G4Q5s4p3Wr%2FYDoRl1oxpuMh%2BmMYnpDhIH59FrktCk5yuqRvOZeTFtSh3SpvkfxuL7%2FL5bIHEzA0GD0i3KTk5gdhtcygH3iHhW3KOuKDSQ6Q2l5VZltedLI0I2DI5itcac8Wr15rxNdzm%2BmCbQM0JgMqdEa9b8NCTbSSA5Cxamf%2FFlMugPJHKnVJ29ypPGBzwXLyHM9WnKw0HThtOw3hXkHXP%2Bn36HwFp8GA1gc43xgGxG1mz7EYKbMPPCyrsKgB7djiKbhXeBPgNOY9k%2BF%2BkIrElv8OkeX26YPlU1l2HG43lQ7aqPQi0%2BatX76QSIreqQr%2F3RV49Mu%2Bf1y3F8HBqBOCV9jUDjKcJOacpViQe%2BWCuFzLvXjlGe9HmNGqGbLIKc6QhguRAMcznvqx1ymhvwpoWcyL6nVK4RiJA0%2BBaxgg3HXMRqt%2FrmkmYGwatqU%2FsFNTbDkPtTPSKsEWU4bJPNgGds8CiWeeXBp%2BWxdwHYxoQ0nKUXFpKCgpjOkI2hgKuBMMjOosAGOqUBWXFnrY3rHHNdHZPfA9VIQapKfUnSBAiZ1I1T%2FPS7NkEGi2bYvlMA4S%2B2uUH%2BRH6cgxrDd18sil6QYktYGKyCeNxp2JedROoKVpcITx7WFfqtwD4IFXHVmYn7p8i%2FchbUStLic6RKelvGBvND5xmxpMu6sTmT0k7Qa4cfqtlp3e4LRPw9V38m9jtGzFMRMtwE%2FWgAI8zfYX9JMuG4hRRweyPvcxnf&X-Amz-Signature=8097edb6fc720ed39cdab731ad5692c441850102706e7f31fcd872330e02c8ae&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KI7FBZL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD%2BlEUclK%2BRepdpI9DvbW6kzAGqSmX0siY%2F%2BiGkGgQS4wIgKKpJaR0A61rQmy2DjSo5vSCzf0FmPJSTeNS%2BalnOVG4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRwmD3bFLLDW7ou1ircAwDx%2F6E8wCFd9l79Hy6mVMvE6ie77AcB1pbfgu2Amm5s4LhiJMrO5wWKL2ww50%2Btlb%2FSbchaFiwTFZkw9KNxTSqaMrx1Kda5Kvm8okgTD17Gv4Xyuw%2FG2Q2N%2Fn8G4Q5s4p3Wr%2FYDoRl1oxpuMh%2BmMYnpDhIH59FrktCk5yuqRvOZeTFtSh3SpvkfxuL7%2FL5bIHEzA0GD0i3KTk5gdhtcygH3iHhW3KOuKDSQ6Q2l5VZltedLI0I2DI5itcac8Wr15rxNdzm%2BmCbQM0JgMqdEa9b8NCTbSSA5Cxamf%2FFlMugPJHKnVJ29ypPGBzwXLyHM9WnKw0HThtOw3hXkHXP%2Bn36HwFp8GA1gc43xgGxG1mz7EYKbMPPCyrsKgB7djiKbhXeBPgNOY9k%2BF%2BkIrElv8OkeX26YPlU1l2HG43lQ7aqPQi0%2BatX76QSIreqQr%2F3RV49Mu%2Bf1y3F8HBqBOCV9jUDjKcJOacpViQe%2BWCuFzLvXjlGe9HmNGqGbLIKc6QhguRAMcznvqx1ymhvwpoWcyL6nVK4RiJA0%2BBaxgg3HXMRqt%2FrmkmYGwatqU%2FsFNTbDkPtTPSKsEWU4bJPNgGds8CiWeeXBp%2BWxdwHYxoQ0nKUXFpKCgpjOkI2hgKuBMMjOosAGOqUBWXFnrY3rHHNdHZPfA9VIQapKfUnSBAiZ1I1T%2FPS7NkEGi2bYvlMA4S%2B2uUH%2BRH6cgxrDd18sil6QYktYGKyCeNxp2JedROoKVpcITx7WFfqtwD4IFXHVmYn7p8i%2FchbUStLic6RKelvGBvND5xmxpMu6sTmT0k7Qa4cfqtlp3e4LRPw9V38m9jtGzFMRMtwE%2FWgAI8zfYX9JMuG4hRRweyPvcxnf&X-Amz-Signature=d6b50dc78bfd81e9a8f36810ca48c23ac66e062d16b2b7f9ce76fc35ec337130&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KI7FBZL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD%2BlEUclK%2BRepdpI9DvbW6kzAGqSmX0siY%2F%2BiGkGgQS4wIgKKpJaR0A61rQmy2DjSo5vSCzf0FmPJSTeNS%2BalnOVG4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRwmD3bFLLDW7ou1ircAwDx%2F6E8wCFd9l79Hy6mVMvE6ie77AcB1pbfgu2Amm5s4LhiJMrO5wWKL2ww50%2Btlb%2FSbchaFiwTFZkw9KNxTSqaMrx1Kda5Kvm8okgTD17Gv4Xyuw%2FG2Q2N%2Fn8G4Q5s4p3Wr%2FYDoRl1oxpuMh%2BmMYnpDhIH59FrktCk5yuqRvOZeTFtSh3SpvkfxuL7%2FL5bIHEzA0GD0i3KTk5gdhtcygH3iHhW3KOuKDSQ6Q2l5VZltedLI0I2DI5itcac8Wr15rxNdzm%2BmCbQM0JgMqdEa9b8NCTbSSA5Cxamf%2FFlMugPJHKnVJ29ypPGBzwXLyHM9WnKw0HThtOw3hXkHXP%2Bn36HwFp8GA1gc43xgGxG1mz7EYKbMPPCyrsKgB7djiKbhXeBPgNOY9k%2BF%2BkIrElv8OkeX26YPlU1l2HG43lQ7aqPQi0%2BatX76QSIreqQr%2F3RV49Mu%2Bf1y3F8HBqBOCV9jUDjKcJOacpViQe%2BWCuFzLvXjlGe9HmNGqGbLIKc6QhguRAMcznvqx1ymhvwpoWcyL6nVK4RiJA0%2BBaxgg3HXMRqt%2FrmkmYGwatqU%2FsFNTbDkPtTPSKsEWU4bJPNgGds8CiWeeXBp%2BWxdwHYxoQ0nKUXFpKCgpjOkI2hgKuBMMjOosAGOqUBWXFnrY3rHHNdHZPfA9VIQapKfUnSBAiZ1I1T%2FPS7NkEGi2bYvlMA4S%2B2uUH%2BRH6cgxrDd18sil6QYktYGKyCeNxp2JedROoKVpcITx7WFfqtwD4IFXHVmYn7p8i%2FchbUStLic6RKelvGBvND5xmxpMu6sTmT0k7Qa4cfqtlp3e4LRPw9V38m9jtGzFMRMtwE%2FWgAI8zfYX9JMuG4hRRweyPvcxnf&X-Amz-Signature=c18a63ada059adb7fd143aa8a40418144dff97727612abe1db94e3d8d26efd17&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KI7FBZL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD%2BlEUclK%2BRepdpI9DvbW6kzAGqSmX0siY%2F%2BiGkGgQS4wIgKKpJaR0A61rQmy2DjSo5vSCzf0FmPJSTeNS%2BalnOVG4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRwmD3bFLLDW7ou1ircAwDx%2F6E8wCFd9l79Hy6mVMvE6ie77AcB1pbfgu2Amm5s4LhiJMrO5wWKL2ww50%2Btlb%2FSbchaFiwTFZkw9KNxTSqaMrx1Kda5Kvm8okgTD17Gv4Xyuw%2FG2Q2N%2Fn8G4Q5s4p3Wr%2FYDoRl1oxpuMh%2BmMYnpDhIH59FrktCk5yuqRvOZeTFtSh3SpvkfxuL7%2FL5bIHEzA0GD0i3KTk5gdhtcygH3iHhW3KOuKDSQ6Q2l5VZltedLI0I2DI5itcac8Wr15rxNdzm%2BmCbQM0JgMqdEa9b8NCTbSSA5Cxamf%2FFlMugPJHKnVJ29ypPGBzwXLyHM9WnKw0HThtOw3hXkHXP%2Bn36HwFp8GA1gc43xgGxG1mz7EYKbMPPCyrsKgB7djiKbhXeBPgNOY9k%2BF%2BkIrElv8OkeX26YPlU1l2HG43lQ7aqPQi0%2BatX76QSIreqQr%2F3RV49Mu%2Bf1y3F8HBqBOCV9jUDjKcJOacpViQe%2BWCuFzLvXjlGe9HmNGqGbLIKc6QhguRAMcznvqx1ymhvwpoWcyL6nVK4RiJA0%2BBaxgg3HXMRqt%2FrmkmYGwatqU%2FsFNTbDkPtTPSKsEWU4bJPNgGds8CiWeeXBp%2BWxdwHYxoQ0nKUXFpKCgpjOkI2hgKuBMMjOosAGOqUBWXFnrY3rHHNdHZPfA9VIQapKfUnSBAiZ1I1T%2FPS7NkEGi2bYvlMA4S%2B2uUH%2BRH6cgxrDd18sil6QYktYGKyCeNxp2JedROoKVpcITx7WFfqtwD4IFXHVmYn7p8i%2FchbUStLic6RKelvGBvND5xmxpMu6sTmT0k7Qa4cfqtlp3e4LRPw9V38m9jtGzFMRMtwE%2FWgAI8zfYX9JMuG4hRRweyPvcxnf&X-Amz-Signature=cc7a70973c99d56d9551731927e6e8c20fd78fa4a8dcf9daa0a639d49c923755&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KI7FBZL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD%2BlEUclK%2BRepdpI9DvbW6kzAGqSmX0siY%2F%2BiGkGgQS4wIgKKpJaR0A61rQmy2DjSo5vSCzf0FmPJSTeNS%2BalnOVG4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRwmD3bFLLDW7ou1ircAwDx%2F6E8wCFd9l79Hy6mVMvE6ie77AcB1pbfgu2Amm5s4LhiJMrO5wWKL2ww50%2Btlb%2FSbchaFiwTFZkw9KNxTSqaMrx1Kda5Kvm8okgTD17Gv4Xyuw%2FG2Q2N%2Fn8G4Q5s4p3Wr%2FYDoRl1oxpuMh%2BmMYnpDhIH59FrktCk5yuqRvOZeTFtSh3SpvkfxuL7%2FL5bIHEzA0GD0i3KTk5gdhtcygH3iHhW3KOuKDSQ6Q2l5VZltedLI0I2DI5itcac8Wr15rxNdzm%2BmCbQM0JgMqdEa9b8NCTbSSA5Cxamf%2FFlMugPJHKnVJ29ypPGBzwXLyHM9WnKw0HThtOw3hXkHXP%2Bn36HwFp8GA1gc43xgGxG1mz7EYKbMPPCyrsKgB7djiKbhXeBPgNOY9k%2BF%2BkIrElv8OkeX26YPlU1l2HG43lQ7aqPQi0%2BatX76QSIreqQr%2F3RV49Mu%2Bf1y3F8HBqBOCV9jUDjKcJOacpViQe%2BWCuFzLvXjlGe9HmNGqGbLIKc6QhguRAMcznvqx1ymhvwpoWcyL6nVK4RiJA0%2BBaxgg3HXMRqt%2FrmkmYGwatqU%2FsFNTbDkPtTPSKsEWU4bJPNgGds8CiWeeXBp%2BWxdwHYxoQ0nKUXFpKCgpjOkI2hgKuBMMjOosAGOqUBWXFnrY3rHHNdHZPfA9VIQapKfUnSBAiZ1I1T%2FPS7NkEGi2bYvlMA4S%2B2uUH%2BRH6cgxrDd18sil6QYktYGKyCeNxp2JedROoKVpcITx7WFfqtwD4IFXHVmYn7p8i%2FchbUStLic6RKelvGBvND5xmxpMu6sTmT0k7Qa4cfqtlp3e4LRPw9V38m9jtGzFMRMtwE%2FWgAI8zfYX9JMuG4hRRweyPvcxnf&X-Amz-Signature=b397ed56f95a007d93da9269888c6d452491d3cb967fbbd5ef20fc458f3003c8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
