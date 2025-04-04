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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPMY2PLX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCivTorunhVPUR6mDoB%2B3phCczsrGMeIM%2FxC0Jmhm%2BrAiEApFPW%2BMgcwZJH85NcJ5IjdeFAGGzzmVue8CRE%2B6efiqEq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGLl4v4%2FbIOipdBF3yrcA%2BEnqFjul0Eqx7237JQPhnSilVaoqxh1GEq63rgRC83Akt45%2Fsk5SzQ3LpSiPjRhdbC4vHpFahgNV2fnpXMsaudI16MyHlryhvePdA0GymGR8l4iVmrydfudIwsgnFxZaF6wCUoZVaEtqCKtljOXmGYogUpt4UzPVMvro67zN7T2mMF0NrvlmybRxIaHXwwXcArb9xXccaKXAJegCUjkSouNMxptiJ3xYUL5gAGUPo%2FIrjbPQ9qSGNeXmGhxwOWl1Nb4iyyp2pb2yUjh8P5UaVFL2YJnEqF%2F6yoaEc7i1QdrmkcBmciYp7CZnEzZfpQs%2FyHa%2Fl1fQX1Rh4RnVwFN9tDTrdgx5IIoa8%2Fnee74NFLuK1mPqMPIpqOk3DjOJ3LPbomd3WFzpsEiWmkGIeKx2hFfkGoEsXJdM83hOKXnL3Lyq7P%2BXXCZ%2BePN7Ye%2BYQP%2BEIuNXuVBZkw8FdCFcTi8Bro1Js6x29YAZBCJbd9d%2B04Ea8baTTw4JqDqfNSZxJaTv3YjOG7XNaQbtFcKSKHuTfggejEw3S2EBnq3wL5YkQ297jnjjF61so%2BlQx5%2FTFkTtYLNUv8IvYf7u7uDMGsI8UiJ4tmr9GPyI47e0ISkY55cYY%2Buk%2Bkb0pPiAHkkMP2Svr8GOqUB7UEWHuFAE6KdYc9ykcFLWvAlDlu4eGLms17Hka3xCy%2BPkxV0HEpZnYxSWfZmXQTBK7Yi3Q0TmW52aeV5D1h%2BPGkGMqPHQC5bHNzkrjw8lx2G3wyRN74owqVD8wg7swelPvJg23G5GYizsQp8qNUdBAzVsrqGxfID6x4qmf93oMvQHGq547MphIcEbSM%2F0MgjwWASVjGMaXCyx7juHUZMVPWU93wG&X-Amz-Signature=6ef61e88d1be319bb472bad258506169dc555b3f469b983a2e521dae81c454d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPMY2PLX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCivTorunhVPUR6mDoB%2B3phCczsrGMeIM%2FxC0Jmhm%2BrAiEApFPW%2BMgcwZJH85NcJ5IjdeFAGGzzmVue8CRE%2B6efiqEq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGLl4v4%2FbIOipdBF3yrcA%2BEnqFjul0Eqx7237JQPhnSilVaoqxh1GEq63rgRC83Akt45%2Fsk5SzQ3LpSiPjRhdbC4vHpFahgNV2fnpXMsaudI16MyHlryhvePdA0GymGR8l4iVmrydfudIwsgnFxZaF6wCUoZVaEtqCKtljOXmGYogUpt4UzPVMvro67zN7T2mMF0NrvlmybRxIaHXwwXcArb9xXccaKXAJegCUjkSouNMxptiJ3xYUL5gAGUPo%2FIrjbPQ9qSGNeXmGhxwOWl1Nb4iyyp2pb2yUjh8P5UaVFL2YJnEqF%2F6yoaEc7i1QdrmkcBmciYp7CZnEzZfpQs%2FyHa%2Fl1fQX1Rh4RnVwFN9tDTrdgx5IIoa8%2Fnee74NFLuK1mPqMPIpqOk3DjOJ3LPbomd3WFzpsEiWmkGIeKx2hFfkGoEsXJdM83hOKXnL3Lyq7P%2BXXCZ%2BePN7Ye%2BYQP%2BEIuNXuVBZkw8FdCFcTi8Bro1Js6x29YAZBCJbd9d%2B04Ea8baTTw4JqDqfNSZxJaTv3YjOG7XNaQbtFcKSKHuTfggejEw3S2EBnq3wL5YkQ297jnjjF61so%2BlQx5%2FTFkTtYLNUv8IvYf7u7uDMGsI8UiJ4tmr9GPyI47e0ISkY55cYY%2Buk%2Bkb0pPiAHkkMP2Svr8GOqUB7UEWHuFAE6KdYc9ykcFLWvAlDlu4eGLms17Hka3xCy%2BPkxV0HEpZnYxSWfZmXQTBK7Yi3Q0TmW52aeV5D1h%2BPGkGMqPHQC5bHNzkrjw8lx2G3wyRN74owqVD8wg7swelPvJg23G5GYizsQp8qNUdBAzVsrqGxfID6x4qmf93oMvQHGq547MphIcEbSM%2F0MgjwWASVjGMaXCyx7juHUZMVPWU93wG&X-Amz-Signature=8486005dd46d2bc7500a62bbc9dbfd40d35f46517454665579f3548e2e8f002f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPMY2PLX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCivTorunhVPUR6mDoB%2B3phCczsrGMeIM%2FxC0Jmhm%2BrAiEApFPW%2BMgcwZJH85NcJ5IjdeFAGGzzmVue8CRE%2B6efiqEq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGLl4v4%2FbIOipdBF3yrcA%2BEnqFjul0Eqx7237JQPhnSilVaoqxh1GEq63rgRC83Akt45%2Fsk5SzQ3LpSiPjRhdbC4vHpFahgNV2fnpXMsaudI16MyHlryhvePdA0GymGR8l4iVmrydfudIwsgnFxZaF6wCUoZVaEtqCKtljOXmGYogUpt4UzPVMvro67zN7T2mMF0NrvlmybRxIaHXwwXcArb9xXccaKXAJegCUjkSouNMxptiJ3xYUL5gAGUPo%2FIrjbPQ9qSGNeXmGhxwOWl1Nb4iyyp2pb2yUjh8P5UaVFL2YJnEqF%2F6yoaEc7i1QdrmkcBmciYp7CZnEzZfpQs%2FyHa%2Fl1fQX1Rh4RnVwFN9tDTrdgx5IIoa8%2Fnee74NFLuK1mPqMPIpqOk3DjOJ3LPbomd3WFzpsEiWmkGIeKx2hFfkGoEsXJdM83hOKXnL3Lyq7P%2BXXCZ%2BePN7Ye%2BYQP%2BEIuNXuVBZkw8FdCFcTi8Bro1Js6x29YAZBCJbd9d%2B04Ea8baTTw4JqDqfNSZxJaTv3YjOG7XNaQbtFcKSKHuTfggejEw3S2EBnq3wL5YkQ297jnjjF61so%2BlQx5%2FTFkTtYLNUv8IvYf7u7uDMGsI8UiJ4tmr9GPyI47e0ISkY55cYY%2Buk%2Bkb0pPiAHkkMP2Svr8GOqUB7UEWHuFAE6KdYc9ykcFLWvAlDlu4eGLms17Hka3xCy%2BPkxV0HEpZnYxSWfZmXQTBK7Yi3Q0TmW52aeV5D1h%2BPGkGMqPHQC5bHNzkrjw8lx2G3wyRN74owqVD8wg7swelPvJg23G5GYizsQp8qNUdBAzVsrqGxfID6x4qmf93oMvQHGq547MphIcEbSM%2F0MgjwWASVjGMaXCyx7juHUZMVPWU93wG&X-Amz-Signature=032ce1963947d9d0dbc1b6417fa1fa8e7594fb14758a59cc4717bc0d38789811&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPMY2PLX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCivTorunhVPUR6mDoB%2B3phCczsrGMeIM%2FxC0Jmhm%2BrAiEApFPW%2BMgcwZJH85NcJ5IjdeFAGGzzmVue8CRE%2B6efiqEq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGLl4v4%2FbIOipdBF3yrcA%2BEnqFjul0Eqx7237JQPhnSilVaoqxh1GEq63rgRC83Akt45%2Fsk5SzQ3LpSiPjRhdbC4vHpFahgNV2fnpXMsaudI16MyHlryhvePdA0GymGR8l4iVmrydfudIwsgnFxZaF6wCUoZVaEtqCKtljOXmGYogUpt4UzPVMvro67zN7T2mMF0NrvlmybRxIaHXwwXcArb9xXccaKXAJegCUjkSouNMxptiJ3xYUL5gAGUPo%2FIrjbPQ9qSGNeXmGhxwOWl1Nb4iyyp2pb2yUjh8P5UaVFL2YJnEqF%2F6yoaEc7i1QdrmkcBmciYp7CZnEzZfpQs%2FyHa%2Fl1fQX1Rh4RnVwFN9tDTrdgx5IIoa8%2Fnee74NFLuK1mPqMPIpqOk3DjOJ3LPbomd3WFzpsEiWmkGIeKx2hFfkGoEsXJdM83hOKXnL3Lyq7P%2BXXCZ%2BePN7Ye%2BYQP%2BEIuNXuVBZkw8FdCFcTi8Bro1Js6x29YAZBCJbd9d%2B04Ea8baTTw4JqDqfNSZxJaTv3YjOG7XNaQbtFcKSKHuTfggejEw3S2EBnq3wL5YkQ297jnjjF61so%2BlQx5%2FTFkTtYLNUv8IvYf7u7uDMGsI8UiJ4tmr9GPyI47e0ISkY55cYY%2Buk%2Bkb0pPiAHkkMP2Svr8GOqUB7UEWHuFAE6KdYc9ykcFLWvAlDlu4eGLms17Hka3xCy%2BPkxV0HEpZnYxSWfZmXQTBK7Yi3Q0TmW52aeV5D1h%2BPGkGMqPHQC5bHNzkrjw8lx2G3wyRN74owqVD8wg7swelPvJg23G5GYizsQp8qNUdBAzVsrqGxfID6x4qmf93oMvQHGq547MphIcEbSM%2F0MgjwWASVjGMaXCyx7juHUZMVPWU93wG&X-Amz-Signature=3bcfdc856c4babec9196ebcc2d1a1e12de77e031acc7681992cb50a9ae9fed06&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPMY2PLX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCivTorunhVPUR6mDoB%2B3phCczsrGMeIM%2FxC0Jmhm%2BrAiEApFPW%2BMgcwZJH85NcJ5IjdeFAGGzzmVue8CRE%2B6efiqEq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGLl4v4%2FbIOipdBF3yrcA%2BEnqFjul0Eqx7237JQPhnSilVaoqxh1GEq63rgRC83Akt45%2Fsk5SzQ3LpSiPjRhdbC4vHpFahgNV2fnpXMsaudI16MyHlryhvePdA0GymGR8l4iVmrydfudIwsgnFxZaF6wCUoZVaEtqCKtljOXmGYogUpt4UzPVMvro67zN7T2mMF0NrvlmybRxIaHXwwXcArb9xXccaKXAJegCUjkSouNMxptiJ3xYUL5gAGUPo%2FIrjbPQ9qSGNeXmGhxwOWl1Nb4iyyp2pb2yUjh8P5UaVFL2YJnEqF%2F6yoaEc7i1QdrmkcBmciYp7CZnEzZfpQs%2FyHa%2Fl1fQX1Rh4RnVwFN9tDTrdgx5IIoa8%2Fnee74NFLuK1mPqMPIpqOk3DjOJ3LPbomd3WFzpsEiWmkGIeKx2hFfkGoEsXJdM83hOKXnL3Lyq7P%2BXXCZ%2BePN7Ye%2BYQP%2BEIuNXuVBZkw8FdCFcTi8Bro1Js6x29YAZBCJbd9d%2B04Ea8baTTw4JqDqfNSZxJaTv3YjOG7XNaQbtFcKSKHuTfggejEw3S2EBnq3wL5YkQ297jnjjF61so%2BlQx5%2FTFkTtYLNUv8IvYf7u7uDMGsI8UiJ4tmr9GPyI47e0ISkY55cYY%2Buk%2Bkb0pPiAHkkMP2Svr8GOqUB7UEWHuFAE6KdYc9ykcFLWvAlDlu4eGLms17Hka3xCy%2BPkxV0HEpZnYxSWfZmXQTBK7Yi3Q0TmW52aeV5D1h%2BPGkGMqPHQC5bHNzkrjw8lx2G3wyRN74owqVD8wg7swelPvJg23G5GYizsQp8qNUdBAzVsrqGxfID6x4qmf93oMvQHGq547MphIcEbSM%2F0MgjwWASVjGMaXCyx7juHUZMVPWU93wG&X-Amz-Signature=57f41ef333b8dfcd6cc740ef6f75849cd81407b975923ab592e044bb4025e909&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPMY2PLX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCivTorunhVPUR6mDoB%2B3phCczsrGMeIM%2FxC0Jmhm%2BrAiEApFPW%2BMgcwZJH85NcJ5IjdeFAGGzzmVue8CRE%2B6efiqEq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGLl4v4%2FbIOipdBF3yrcA%2BEnqFjul0Eqx7237JQPhnSilVaoqxh1GEq63rgRC83Akt45%2Fsk5SzQ3LpSiPjRhdbC4vHpFahgNV2fnpXMsaudI16MyHlryhvePdA0GymGR8l4iVmrydfudIwsgnFxZaF6wCUoZVaEtqCKtljOXmGYogUpt4UzPVMvro67zN7T2mMF0NrvlmybRxIaHXwwXcArb9xXccaKXAJegCUjkSouNMxptiJ3xYUL5gAGUPo%2FIrjbPQ9qSGNeXmGhxwOWl1Nb4iyyp2pb2yUjh8P5UaVFL2YJnEqF%2F6yoaEc7i1QdrmkcBmciYp7CZnEzZfpQs%2FyHa%2Fl1fQX1Rh4RnVwFN9tDTrdgx5IIoa8%2Fnee74NFLuK1mPqMPIpqOk3DjOJ3LPbomd3WFzpsEiWmkGIeKx2hFfkGoEsXJdM83hOKXnL3Lyq7P%2BXXCZ%2BePN7Ye%2BYQP%2BEIuNXuVBZkw8FdCFcTi8Bro1Js6x29YAZBCJbd9d%2B04Ea8baTTw4JqDqfNSZxJaTv3YjOG7XNaQbtFcKSKHuTfggejEw3S2EBnq3wL5YkQ297jnjjF61so%2BlQx5%2FTFkTtYLNUv8IvYf7u7uDMGsI8UiJ4tmr9GPyI47e0ISkY55cYY%2Buk%2Bkb0pPiAHkkMP2Svr8GOqUB7UEWHuFAE6KdYc9ykcFLWvAlDlu4eGLms17Hka3xCy%2BPkxV0HEpZnYxSWfZmXQTBK7Yi3Q0TmW52aeV5D1h%2BPGkGMqPHQC5bHNzkrjw8lx2G3wyRN74owqVD8wg7swelPvJg23G5GYizsQp8qNUdBAzVsrqGxfID6x4qmf93oMvQHGq547MphIcEbSM%2F0MgjwWASVjGMaXCyx7juHUZMVPWU93wG&X-Amz-Signature=21a34f413af8ddb70d26fedff694cade58d0fe74a4e4236f70dfcc381866673b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPMY2PLX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCivTorunhVPUR6mDoB%2B3phCczsrGMeIM%2FxC0Jmhm%2BrAiEApFPW%2BMgcwZJH85NcJ5IjdeFAGGzzmVue8CRE%2B6efiqEq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGLl4v4%2FbIOipdBF3yrcA%2BEnqFjul0Eqx7237JQPhnSilVaoqxh1GEq63rgRC83Akt45%2Fsk5SzQ3LpSiPjRhdbC4vHpFahgNV2fnpXMsaudI16MyHlryhvePdA0GymGR8l4iVmrydfudIwsgnFxZaF6wCUoZVaEtqCKtljOXmGYogUpt4UzPVMvro67zN7T2mMF0NrvlmybRxIaHXwwXcArb9xXccaKXAJegCUjkSouNMxptiJ3xYUL5gAGUPo%2FIrjbPQ9qSGNeXmGhxwOWl1Nb4iyyp2pb2yUjh8P5UaVFL2YJnEqF%2F6yoaEc7i1QdrmkcBmciYp7CZnEzZfpQs%2FyHa%2Fl1fQX1Rh4RnVwFN9tDTrdgx5IIoa8%2Fnee74NFLuK1mPqMPIpqOk3DjOJ3LPbomd3WFzpsEiWmkGIeKx2hFfkGoEsXJdM83hOKXnL3Lyq7P%2BXXCZ%2BePN7Ye%2BYQP%2BEIuNXuVBZkw8FdCFcTi8Bro1Js6x29YAZBCJbd9d%2B04Ea8baTTw4JqDqfNSZxJaTv3YjOG7XNaQbtFcKSKHuTfggejEw3S2EBnq3wL5YkQ297jnjjF61so%2BlQx5%2FTFkTtYLNUv8IvYf7u7uDMGsI8UiJ4tmr9GPyI47e0ISkY55cYY%2Buk%2Bkb0pPiAHkkMP2Svr8GOqUB7UEWHuFAE6KdYc9ykcFLWvAlDlu4eGLms17Hka3xCy%2BPkxV0HEpZnYxSWfZmXQTBK7Yi3Q0TmW52aeV5D1h%2BPGkGMqPHQC5bHNzkrjw8lx2G3wyRN74owqVD8wg7swelPvJg23G5GYizsQp8qNUdBAzVsrqGxfID6x4qmf93oMvQHGq547MphIcEbSM%2F0MgjwWASVjGMaXCyx7juHUZMVPWU93wG&X-Amz-Signature=0d24528b2c1ab598021bf415738fef35d73ac2426c581c3f554d80bfb4db8c68&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
