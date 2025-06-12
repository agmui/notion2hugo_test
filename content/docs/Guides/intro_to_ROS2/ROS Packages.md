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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGR6UZJ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDglCbIwpVyPbws5O7dyFI8WYLd2vtq1Sf5hOUXSLfLIAIhAOqrdna7Rkc4bQDxk65u57o7LnDQhbszvmbCLy1Ovh0rKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMmd06OqTi5wac5X0q3AMaVSrDdOSyZrQG8nsE2ZrP%2FWXKkF9oPnChU6m2oZBZEpPfIuy5DsAxWWfhV7VH5In9SA7CmdNQEjE3glWLPrJpGQ30Ub5ZfmobdScALtTWYNoEqZQT6z5HmpXe0kuQ8%2BwzpqPcngoqVzl%2F6yGliZogTTLc7KtnI7v6WZvphPFH4Q4WvmTfJhLehanANEOjhdI3Ya6u2vhu0aByz%2BAVzsDrauUQD%2F1xkKqWZoOQL7txKO8l1LieaihD%2FP4GTb1DgS96eDvkztnc3hnZh4LxbktYjsaFfZ12s7S3nWjkqTEZ%2BRmR6CdiIewIK9utfWdB3%2FWNMb1iEqwydRFSYNsQKbMfdFj9I7xFIVlA3s%2BfAkgmyJLunlCLTp1P4b2hf5mATfubJU2pJPvhRGYXGxjSKgoJk1rFSl54QwFNDihFT0RKSGw2bBpscBG30dLr0zeFmDkfk3M0tbUb9rBLm44O4sOHlyIcBN%2BC7T16T91DgfVsCpqrW0YyDZZgSyAVHzLzgZzKuViB3WczchydHF9VliIehqM8he5RTMdaRFxZQC%2BIiBV4re4wAtZqwgNlY%2Fi7Xm8kpiWU%2BIK9rE2flUeb98KLtTZ47VJt4KK%2B6Yuf8kJNOAFs%2F6No1VUm28rGTTCC%2FqrCBjqkAc4u8migz3yHR6yH5IOlG16mnwE6zXoszSZ4O4PV65dZtuKjHg6n%2Bzf0eMqObaDRpqtuKRHFHu5ocszR4xt1YDtz9nRgau1w2WnE83LbVmLHunsPpvwIRY0%2Brl3%2BtddZfqep4X6yMHG5wjBLkI2YNnsLIoVuAEPRvUs0A5PVk5UVGNZ9QEOVQsdjtRJPLuFKkVjjH%2BphUpiJCz3LBK86jxBA7o1v&X-Amz-Signature=081b905c835ea07d49127021a999356bd9a0c485147c1bb7e3e693c34aefdc54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGR6UZJ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDglCbIwpVyPbws5O7dyFI8WYLd2vtq1Sf5hOUXSLfLIAIhAOqrdna7Rkc4bQDxk65u57o7LnDQhbszvmbCLy1Ovh0rKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMmd06OqTi5wac5X0q3AMaVSrDdOSyZrQG8nsE2ZrP%2FWXKkF9oPnChU6m2oZBZEpPfIuy5DsAxWWfhV7VH5In9SA7CmdNQEjE3glWLPrJpGQ30Ub5ZfmobdScALtTWYNoEqZQT6z5HmpXe0kuQ8%2BwzpqPcngoqVzl%2F6yGliZogTTLc7KtnI7v6WZvphPFH4Q4WvmTfJhLehanANEOjhdI3Ya6u2vhu0aByz%2BAVzsDrauUQD%2F1xkKqWZoOQL7txKO8l1LieaihD%2FP4GTb1DgS96eDvkztnc3hnZh4LxbktYjsaFfZ12s7S3nWjkqTEZ%2BRmR6CdiIewIK9utfWdB3%2FWNMb1iEqwydRFSYNsQKbMfdFj9I7xFIVlA3s%2BfAkgmyJLunlCLTp1P4b2hf5mATfubJU2pJPvhRGYXGxjSKgoJk1rFSl54QwFNDihFT0RKSGw2bBpscBG30dLr0zeFmDkfk3M0tbUb9rBLm44O4sOHlyIcBN%2BC7T16T91DgfVsCpqrW0YyDZZgSyAVHzLzgZzKuViB3WczchydHF9VliIehqM8he5RTMdaRFxZQC%2BIiBV4re4wAtZqwgNlY%2Fi7Xm8kpiWU%2BIK9rE2flUeb98KLtTZ47VJt4KK%2B6Yuf8kJNOAFs%2F6No1VUm28rGTTCC%2FqrCBjqkAc4u8migz3yHR6yH5IOlG16mnwE6zXoszSZ4O4PV65dZtuKjHg6n%2Bzf0eMqObaDRpqtuKRHFHu5ocszR4xt1YDtz9nRgau1w2WnE83LbVmLHunsPpvwIRY0%2Brl3%2BtddZfqep4X6yMHG5wjBLkI2YNnsLIoVuAEPRvUs0A5PVk5UVGNZ9QEOVQsdjtRJPLuFKkVjjH%2BphUpiJCz3LBK86jxBA7o1v&X-Amz-Signature=1c3b3e99455800135058c444b17f689f12d99d6435e50ee8c7d59c1adf94df8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGR6UZJ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDglCbIwpVyPbws5O7dyFI8WYLd2vtq1Sf5hOUXSLfLIAIhAOqrdna7Rkc4bQDxk65u57o7LnDQhbszvmbCLy1Ovh0rKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMmd06OqTi5wac5X0q3AMaVSrDdOSyZrQG8nsE2ZrP%2FWXKkF9oPnChU6m2oZBZEpPfIuy5DsAxWWfhV7VH5In9SA7CmdNQEjE3glWLPrJpGQ30Ub5ZfmobdScALtTWYNoEqZQT6z5HmpXe0kuQ8%2BwzpqPcngoqVzl%2F6yGliZogTTLc7KtnI7v6WZvphPFH4Q4WvmTfJhLehanANEOjhdI3Ya6u2vhu0aByz%2BAVzsDrauUQD%2F1xkKqWZoOQL7txKO8l1LieaihD%2FP4GTb1DgS96eDvkztnc3hnZh4LxbktYjsaFfZ12s7S3nWjkqTEZ%2BRmR6CdiIewIK9utfWdB3%2FWNMb1iEqwydRFSYNsQKbMfdFj9I7xFIVlA3s%2BfAkgmyJLunlCLTp1P4b2hf5mATfubJU2pJPvhRGYXGxjSKgoJk1rFSl54QwFNDihFT0RKSGw2bBpscBG30dLr0zeFmDkfk3M0tbUb9rBLm44O4sOHlyIcBN%2BC7T16T91DgfVsCpqrW0YyDZZgSyAVHzLzgZzKuViB3WczchydHF9VliIehqM8he5RTMdaRFxZQC%2BIiBV4re4wAtZqwgNlY%2Fi7Xm8kpiWU%2BIK9rE2flUeb98KLtTZ47VJt4KK%2B6Yuf8kJNOAFs%2F6No1VUm28rGTTCC%2FqrCBjqkAc4u8migz3yHR6yH5IOlG16mnwE6zXoszSZ4O4PV65dZtuKjHg6n%2Bzf0eMqObaDRpqtuKRHFHu5ocszR4xt1YDtz9nRgau1w2WnE83LbVmLHunsPpvwIRY0%2Brl3%2BtddZfqep4X6yMHG5wjBLkI2YNnsLIoVuAEPRvUs0A5PVk5UVGNZ9QEOVQsdjtRJPLuFKkVjjH%2BphUpiJCz3LBK86jxBA7o1v&X-Amz-Signature=2c23e9bb8d313bc05fb24458d5ec8634e45fb0ca5a5ddf71c5b6a74a2300b1da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGR6UZJ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDglCbIwpVyPbws5O7dyFI8WYLd2vtq1Sf5hOUXSLfLIAIhAOqrdna7Rkc4bQDxk65u57o7LnDQhbszvmbCLy1Ovh0rKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMmd06OqTi5wac5X0q3AMaVSrDdOSyZrQG8nsE2ZrP%2FWXKkF9oPnChU6m2oZBZEpPfIuy5DsAxWWfhV7VH5In9SA7CmdNQEjE3glWLPrJpGQ30Ub5ZfmobdScALtTWYNoEqZQT6z5HmpXe0kuQ8%2BwzpqPcngoqVzl%2F6yGliZogTTLc7KtnI7v6WZvphPFH4Q4WvmTfJhLehanANEOjhdI3Ya6u2vhu0aByz%2BAVzsDrauUQD%2F1xkKqWZoOQL7txKO8l1LieaihD%2FP4GTb1DgS96eDvkztnc3hnZh4LxbktYjsaFfZ12s7S3nWjkqTEZ%2BRmR6CdiIewIK9utfWdB3%2FWNMb1iEqwydRFSYNsQKbMfdFj9I7xFIVlA3s%2BfAkgmyJLunlCLTp1P4b2hf5mATfubJU2pJPvhRGYXGxjSKgoJk1rFSl54QwFNDihFT0RKSGw2bBpscBG30dLr0zeFmDkfk3M0tbUb9rBLm44O4sOHlyIcBN%2BC7T16T91DgfVsCpqrW0YyDZZgSyAVHzLzgZzKuViB3WczchydHF9VliIehqM8he5RTMdaRFxZQC%2BIiBV4re4wAtZqwgNlY%2Fi7Xm8kpiWU%2BIK9rE2flUeb98KLtTZ47VJt4KK%2B6Yuf8kJNOAFs%2F6No1VUm28rGTTCC%2FqrCBjqkAc4u8migz3yHR6yH5IOlG16mnwE6zXoszSZ4O4PV65dZtuKjHg6n%2Bzf0eMqObaDRpqtuKRHFHu5ocszR4xt1YDtz9nRgau1w2WnE83LbVmLHunsPpvwIRY0%2Brl3%2BtddZfqep4X6yMHG5wjBLkI2YNnsLIoVuAEPRvUs0A5PVk5UVGNZ9QEOVQsdjtRJPLuFKkVjjH%2BphUpiJCz3LBK86jxBA7o1v&X-Amz-Signature=37ed4e6d8092a23594dd23f7b0453d4ac0d4254dddc65ed2d2de7666b07ccb0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGR6UZJ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDglCbIwpVyPbws5O7dyFI8WYLd2vtq1Sf5hOUXSLfLIAIhAOqrdna7Rkc4bQDxk65u57o7LnDQhbszvmbCLy1Ovh0rKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMmd06OqTi5wac5X0q3AMaVSrDdOSyZrQG8nsE2ZrP%2FWXKkF9oPnChU6m2oZBZEpPfIuy5DsAxWWfhV7VH5In9SA7CmdNQEjE3glWLPrJpGQ30Ub5ZfmobdScALtTWYNoEqZQT6z5HmpXe0kuQ8%2BwzpqPcngoqVzl%2F6yGliZogTTLc7KtnI7v6WZvphPFH4Q4WvmTfJhLehanANEOjhdI3Ya6u2vhu0aByz%2BAVzsDrauUQD%2F1xkKqWZoOQL7txKO8l1LieaihD%2FP4GTb1DgS96eDvkztnc3hnZh4LxbktYjsaFfZ12s7S3nWjkqTEZ%2BRmR6CdiIewIK9utfWdB3%2FWNMb1iEqwydRFSYNsQKbMfdFj9I7xFIVlA3s%2BfAkgmyJLunlCLTp1P4b2hf5mATfubJU2pJPvhRGYXGxjSKgoJk1rFSl54QwFNDihFT0RKSGw2bBpscBG30dLr0zeFmDkfk3M0tbUb9rBLm44O4sOHlyIcBN%2BC7T16T91DgfVsCpqrW0YyDZZgSyAVHzLzgZzKuViB3WczchydHF9VliIehqM8he5RTMdaRFxZQC%2BIiBV4re4wAtZqwgNlY%2Fi7Xm8kpiWU%2BIK9rE2flUeb98KLtTZ47VJt4KK%2B6Yuf8kJNOAFs%2F6No1VUm28rGTTCC%2FqrCBjqkAc4u8migz3yHR6yH5IOlG16mnwE6zXoszSZ4O4PV65dZtuKjHg6n%2Bzf0eMqObaDRpqtuKRHFHu5ocszR4xt1YDtz9nRgau1w2WnE83LbVmLHunsPpvwIRY0%2Brl3%2BtddZfqep4X6yMHG5wjBLkI2YNnsLIoVuAEPRvUs0A5PVk5UVGNZ9QEOVQsdjtRJPLuFKkVjjH%2BphUpiJCz3LBK86jxBA7o1v&X-Amz-Signature=158778cafa92be840133abcfa47f6b63c1aa58481671e6917e135f53b1c80867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGR6UZJ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDglCbIwpVyPbws5O7dyFI8WYLd2vtq1Sf5hOUXSLfLIAIhAOqrdna7Rkc4bQDxk65u57o7LnDQhbszvmbCLy1Ovh0rKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMmd06OqTi5wac5X0q3AMaVSrDdOSyZrQG8nsE2ZrP%2FWXKkF9oPnChU6m2oZBZEpPfIuy5DsAxWWfhV7VH5In9SA7CmdNQEjE3glWLPrJpGQ30Ub5ZfmobdScALtTWYNoEqZQT6z5HmpXe0kuQ8%2BwzpqPcngoqVzl%2F6yGliZogTTLc7KtnI7v6WZvphPFH4Q4WvmTfJhLehanANEOjhdI3Ya6u2vhu0aByz%2BAVzsDrauUQD%2F1xkKqWZoOQL7txKO8l1LieaihD%2FP4GTb1DgS96eDvkztnc3hnZh4LxbktYjsaFfZ12s7S3nWjkqTEZ%2BRmR6CdiIewIK9utfWdB3%2FWNMb1iEqwydRFSYNsQKbMfdFj9I7xFIVlA3s%2BfAkgmyJLunlCLTp1P4b2hf5mATfubJU2pJPvhRGYXGxjSKgoJk1rFSl54QwFNDihFT0RKSGw2bBpscBG30dLr0zeFmDkfk3M0tbUb9rBLm44O4sOHlyIcBN%2BC7T16T91DgfVsCpqrW0YyDZZgSyAVHzLzgZzKuViB3WczchydHF9VliIehqM8he5RTMdaRFxZQC%2BIiBV4re4wAtZqwgNlY%2Fi7Xm8kpiWU%2BIK9rE2flUeb98KLtTZ47VJt4KK%2B6Yuf8kJNOAFs%2F6No1VUm28rGTTCC%2FqrCBjqkAc4u8migz3yHR6yH5IOlG16mnwE6zXoszSZ4O4PV65dZtuKjHg6n%2Bzf0eMqObaDRpqtuKRHFHu5ocszR4xt1YDtz9nRgau1w2WnE83LbVmLHunsPpvwIRY0%2Brl3%2BtddZfqep4X6yMHG5wjBLkI2YNnsLIoVuAEPRvUs0A5PVk5UVGNZ9QEOVQsdjtRJPLuFKkVjjH%2BphUpiJCz3LBK86jxBA7o1v&X-Amz-Signature=74dca5c974d1173e179fc37198227d61712bcba9042d1e2db02c52bfce881328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGR6UZJ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDglCbIwpVyPbws5O7dyFI8WYLd2vtq1Sf5hOUXSLfLIAIhAOqrdna7Rkc4bQDxk65u57o7LnDQhbszvmbCLy1Ovh0rKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMmd06OqTi5wac5X0q3AMaVSrDdOSyZrQG8nsE2ZrP%2FWXKkF9oPnChU6m2oZBZEpPfIuy5DsAxWWfhV7VH5In9SA7CmdNQEjE3glWLPrJpGQ30Ub5ZfmobdScALtTWYNoEqZQT6z5HmpXe0kuQ8%2BwzpqPcngoqVzl%2F6yGliZogTTLc7KtnI7v6WZvphPFH4Q4WvmTfJhLehanANEOjhdI3Ya6u2vhu0aByz%2BAVzsDrauUQD%2F1xkKqWZoOQL7txKO8l1LieaihD%2FP4GTb1DgS96eDvkztnc3hnZh4LxbktYjsaFfZ12s7S3nWjkqTEZ%2BRmR6CdiIewIK9utfWdB3%2FWNMb1iEqwydRFSYNsQKbMfdFj9I7xFIVlA3s%2BfAkgmyJLunlCLTp1P4b2hf5mATfubJU2pJPvhRGYXGxjSKgoJk1rFSl54QwFNDihFT0RKSGw2bBpscBG30dLr0zeFmDkfk3M0tbUb9rBLm44O4sOHlyIcBN%2BC7T16T91DgfVsCpqrW0YyDZZgSyAVHzLzgZzKuViB3WczchydHF9VliIehqM8he5RTMdaRFxZQC%2BIiBV4re4wAtZqwgNlY%2Fi7Xm8kpiWU%2BIK9rE2flUeb98KLtTZ47VJt4KK%2B6Yuf8kJNOAFs%2F6No1VUm28rGTTCC%2FqrCBjqkAc4u8migz3yHR6yH5IOlG16mnwE6zXoszSZ4O4PV65dZtuKjHg6n%2Bzf0eMqObaDRpqtuKRHFHu5ocszR4xt1YDtz9nRgau1w2WnE83LbVmLHunsPpvwIRY0%2Brl3%2BtddZfqep4X6yMHG5wjBLkI2YNnsLIoVuAEPRvUs0A5PVk5UVGNZ9QEOVQsdjtRJPLuFKkVjjH%2BphUpiJCz3LBK86jxBA7o1v&X-Amz-Signature=80a0720f4ce0247edd808060e0961e57ca0f50b886b399bc709663790b6080d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
