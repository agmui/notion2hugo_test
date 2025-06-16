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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGKOCCEH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBf3X1lkdpzqL0YS9ERobttrmPP%2BhYQ0hE1BCRwGOyEOAiBjmLVwK1Ht4qFglnqnol4LrnatHhuhYhue9w5v2j2BYyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMfYQLfY2x8wgI3SFJKtwD3EaK4gm0kwC2XKsqmua%2BE%2BPy5iyQEbue78t94SVbdEbnI2xjbUBdKsjWqKtqr0gU5lpMiNqZnsgyj3wcn0PMpwRdpCJoAlZhDyBM2sOOVVJrh7vqghC9W2DO8ObAAOF6Hm%2BMoIXTvFUZ0o7O0oUXyQo2bQiJHly7xzIr8cuEPfOgRlHLKDFXh%2BwSXtb5r%2Bw5W93850PiIBsnz30B3YS2fXJm%2FS%2F7bOalhV4eX%2BgSRz1zQccqaryGObsXehD%2Fs%2Bbu8Z2ulZ8b6Eitq1yIiTBPi7d7KBM8YFrS%2FLlBZ6lauWlL7ik%2F%2BkKdoVC1Uah%2FvWA1SKaKiNKdZyEnMlBVgQ6B0m2EqfV%2BI7wLwKdHd6Enmx%2Bl897JSuaJIq82Tb7mK%2FoBMvKDdC9Kq7LHablLw7loETK7TBl%2FbMQBpJuYzw2zMOC5r906O8YTWgLbadSSpz6jL6n5BnzgNgLHT%2Foi7UwboDgZapIoAOMnxGN%2Bz4RG95D%2F3llc8m3W09rPw9lwhUX8n0I4nY3F2%2F%2BVQ6AKUYoXDQ6Ax8kGLGLF7EuMoONrxD%2FQJ3xGxlv4IBl1wwbHZZ0y4c0Do7P6ju25NS51GLVh%2BmBdZXFZE5Brr9IHpbB3377nurumMPFJQzBULNkwr%2BO%2FwgY6pgFB%2FelkPGb9R0cLqrOJoC7Le8724fdXq2xdrUkTo3dGf6UwJ6DXmvnabqgR2D3vjJZB%2Bmchk%2B14THrlQY3aTBPx6byAy%2FzBtaxE5Y%2Fs0VOKzAqoUrdYNiID9EV50jjhTnRx7bS5P%2BLComUahln8ekl14neJSjGfirMU7eMzulBp1cgN7ZvxXT4bibZSQGrcE0cXF7oLEVNuWXShnQTul0deBpVJgjLv&X-Amz-Signature=789b78d37f2ebe503036b19462af7a84c384436ed98a82e11d098cbab29fe294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGKOCCEH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBf3X1lkdpzqL0YS9ERobttrmPP%2BhYQ0hE1BCRwGOyEOAiBjmLVwK1Ht4qFglnqnol4LrnatHhuhYhue9w5v2j2BYyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMfYQLfY2x8wgI3SFJKtwD3EaK4gm0kwC2XKsqmua%2BE%2BPy5iyQEbue78t94SVbdEbnI2xjbUBdKsjWqKtqr0gU5lpMiNqZnsgyj3wcn0PMpwRdpCJoAlZhDyBM2sOOVVJrh7vqghC9W2DO8ObAAOF6Hm%2BMoIXTvFUZ0o7O0oUXyQo2bQiJHly7xzIr8cuEPfOgRlHLKDFXh%2BwSXtb5r%2Bw5W93850PiIBsnz30B3YS2fXJm%2FS%2F7bOalhV4eX%2BgSRz1zQccqaryGObsXehD%2Fs%2Bbu8Z2ulZ8b6Eitq1yIiTBPi7d7KBM8YFrS%2FLlBZ6lauWlL7ik%2F%2BkKdoVC1Uah%2FvWA1SKaKiNKdZyEnMlBVgQ6B0m2EqfV%2BI7wLwKdHd6Enmx%2Bl897JSuaJIq82Tb7mK%2FoBMvKDdC9Kq7LHablLw7loETK7TBl%2FbMQBpJuYzw2zMOC5r906O8YTWgLbadSSpz6jL6n5BnzgNgLHT%2Foi7UwboDgZapIoAOMnxGN%2Bz4RG95D%2F3llc8m3W09rPw9lwhUX8n0I4nY3F2%2F%2BVQ6AKUYoXDQ6Ax8kGLGLF7EuMoONrxD%2FQJ3xGxlv4IBl1wwbHZZ0y4c0Do7P6ju25NS51GLVh%2BmBdZXFZE5Brr9IHpbB3377nurumMPFJQzBULNkwr%2BO%2FwgY6pgFB%2FelkPGb9R0cLqrOJoC7Le8724fdXq2xdrUkTo3dGf6UwJ6DXmvnabqgR2D3vjJZB%2Bmchk%2B14THrlQY3aTBPx6byAy%2FzBtaxE5Y%2Fs0VOKzAqoUrdYNiID9EV50jjhTnRx7bS5P%2BLComUahln8ekl14neJSjGfirMU7eMzulBp1cgN7ZvxXT4bibZSQGrcE0cXF7oLEVNuWXShnQTul0deBpVJgjLv&X-Amz-Signature=9268b60ce8e899d46bf933fefcfb9d853d65122718ccfce99ddc55dc907a67fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGKOCCEH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBf3X1lkdpzqL0YS9ERobttrmPP%2BhYQ0hE1BCRwGOyEOAiBjmLVwK1Ht4qFglnqnol4LrnatHhuhYhue9w5v2j2BYyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMfYQLfY2x8wgI3SFJKtwD3EaK4gm0kwC2XKsqmua%2BE%2BPy5iyQEbue78t94SVbdEbnI2xjbUBdKsjWqKtqr0gU5lpMiNqZnsgyj3wcn0PMpwRdpCJoAlZhDyBM2sOOVVJrh7vqghC9W2DO8ObAAOF6Hm%2BMoIXTvFUZ0o7O0oUXyQo2bQiJHly7xzIr8cuEPfOgRlHLKDFXh%2BwSXtb5r%2Bw5W93850PiIBsnz30B3YS2fXJm%2FS%2F7bOalhV4eX%2BgSRz1zQccqaryGObsXehD%2Fs%2Bbu8Z2ulZ8b6Eitq1yIiTBPi7d7KBM8YFrS%2FLlBZ6lauWlL7ik%2F%2BkKdoVC1Uah%2FvWA1SKaKiNKdZyEnMlBVgQ6B0m2EqfV%2BI7wLwKdHd6Enmx%2Bl897JSuaJIq82Tb7mK%2FoBMvKDdC9Kq7LHablLw7loETK7TBl%2FbMQBpJuYzw2zMOC5r906O8YTWgLbadSSpz6jL6n5BnzgNgLHT%2Foi7UwboDgZapIoAOMnxGN%2Bz4RG95D%2F3llc8m3W09rPw9lwhUX8n0I4nY3F2%2F%2BVQ6AKUYoXDQ6Ax8kGLGLF7EuMoONrxD%2FQJ3xGxlv4IBl1wwbHZZ0y4c0Do7P6ju25NS51GLVh%2BmBdZXFZE5Brr9IHpbB3377nurumMPFJQzBULNkwr%2BO%2FwgY6pgFB%2FelkPGb9R0cLqrOJoC7Le8724fdXq2xdrUkTo3dGf6UwJ6DXmvnabqgR2D3vjJZB%2Bmchk%2B14THrlQY3aTBPx6byAy%2FzBtaxE5Y%2Fs0VOKzAqoUrdYNiID9EV50jjhTnRx7bS5P%2BLComUahln8ekl14neJSjGfirMU7eMzulBp1cgN7ZvxXT4bibZSQGrcE0cXF7oLEVNuWXShnQTul0deBpVJgjLv&X-Amz-Signature=d883a3661f429c2db73d0f0881aa2cb3a2b10219532e2b11a22434c13fb6f243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGKOCCEH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBf3X1lkdpzqL0YS9ERobttrmPP%2BhYQ0hE1BCRwGOyEOAiBjmLVwK1Ht4qFglnqnol4LrnatHhuhYhue9w5v2j2BYyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMfYQLfY2x8wgI3SFJKtwD3EaK4gm0kwC2XKsqmua%2BE%2BPy5iyQEbue78t94SVbdEbnI2xjbUBdKsjWqKtqr0gU5lpMiNqZnsgyj3wcn0PMpwRdpCJoAlZhDyBM2sOOVVJrh7vqghC9W2DO8ObAAOF6Hm%2BMoIXTvFUZ0o7O0oUXyQo2bQiJHly7xzIr8cuEPfOgRlHLKDFXh%2BwSXtb5r%2Bw5W93850PiIBsnz30B3YS2fXJm%2FS%2F7bOalhV4eX%2BgSRz1zQccqaryGObsXehD%2Fs%2Bbu8Z2ulZ8b6Eitq1yIiTBPi7d7KBM8YFrS%2FLlBZ6lauWlL7ik%2F%2BkKdoVC1Uah%2FvWA1SKaKiNKdZyEnMlBVgQ6B0m2EqfV%2BI7wLwKdHd6Enmx%2Bl897JSuaJIq82Tb7mK%2FoBMvKDdC9Kq7LHablLw7loETK7TBl%2FbMQBpJuYzw2zMOC5r906O8YTWgLbadSSpz6jL6n5BnzgNgLHT%2Foi7UwboDgZapIoAOMnxGN%2Bz4RG95D%2F3llc8m3W09rPw9lwhUX8n0I4nY3F2%2F%2BVQ6AKUYoXDQ6Ax8kGLGLF7EuMoONrxD%2FQJ3xGxlv4IBl1wwbHZZ0y4c0Do7P6ju25NS51GLVh%2BmBdZXFZE5Brr9IHpbB3377nurumMPFJQzBULNkwr%2BO%2FwgY6pgFB%2FelkPGb9R0cLqrOJoC7Le8724fdXq2xdrUkTo3dGf6UwJ6DXmvnabqgR2D3vjJZB%2Bmchk%2B14THrlQY3aTBPx6byAy%2FzBtaxE5Y%2Fs0VOKzAqoUrdYNiID9EV50jjhTnRx7bS5P%2BLComUahln8ekl14neJSjGfirMU7eMzulBp1cgN7ZvxXT4bibZSQGrcE0cXF7oLEVNuWXShnQTul0deBpVJgjLv&X-Amz-Signature=b1f3d4cbb3cec90b80e6284c84ca5b9c4d4411f2df46ac701f4d5536eb81d862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGKOCCEH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBf3X1lkdpzqL0YS9ERobttrmPP%2BhYQ0hE1BCRwGOyEOAiBjmLVwK1Ht4qFglnqnol4LrnatHhuhYhue9w5v2j2BYyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMfYQLfY2x8wgI3SFJKtwD3EaK4gm0kwC2XKsqmua%2BE%2BPy5iyQEbue78t94SVbdEbnI2xjbUBdKsjWqKtqr0gU5lpMiNqZnsgyj3wcn0PMpwRdpCJoAlZhDyBM2sOOVVJrh7vqghC9W2DO8ObAAOF6Hm%2BMoIXTvFUZ0o7O0oUXyQo2bQiJHly7xzIr8cuEPfOgRlHLKDFXh%2BwSXtb5r%2Bw5W93850PiIBsnz30B3YS2fXJm%2FS%2F7bOalhV4eX%2BgSRz1zQccqaryGObsXehD%2Fs%2Bbu8Z2ulZ8b6Eitq1yIiTBPi7d7KBM8YFrS%2FLlBZ6lauWlL7ik%2F%2BkKdoVC1Uah%2FvWA1SKaKiNKdZyEnMlBVgQ6B0m2EqfV%2BI7wLwKdHd6Enmx%2Bl897JSuaJIq82Tb7mK%2FoBMvKDdC9Kq7LHablLw7loETK7TBl%2FbMQBpJuYzw2zMOC5r906O8YTWgLbadSSpz6jL6n5BnzgNgLHT%2Foi7UwboDgZapIoAOMnxGN%2Bz4RG95D%2F3llc8m3W09rPw9lwhUX8n0I4nY3F2%2F%2BVQ6AKUYoXDQ6Ax8kGLGLF7EuMoONrxD%2FQJ3xGxlv4IBl1wwbHZZ0y4c0Do7P6ju25NS51GLVh%2BmBdZXFZE5Brr9IHpbB3377nurumMPFJQzBULNkwr%2BO%2FwgY6pgFB%2FelkPGb9R0cLqrOJoC7Le8724fdXq2xdrUkTo3dGf6UwJ6DXmvnabqgR2D3vjJZB%2Bmchk%2B14THrlQY3aTBPx6byAy%2FzBtaxE5Y%2Fs0VOKzAqoUrdYNiID9EV50jjhTnRx7bS5P%2BLComUahln8ekl14neJSjGfirMU7eMzulBp1cgN7ZvxXT4bibZSQGrcE0cXF7oLEVNuWXShnQTul0deBpVJgjLv&X-Amz-Signature=ec4312e4025f7ce38cb69237193cd3ec5b3bc3ed73b957b235947e5eeb64af76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGKOCCEH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBf3X1lkdpzqL0YS9ERobttrmPP%2BhYQ0hE1BCRwGOyEOAiBjmLVwK1Ht4qFglnqnol4LrnatHhuhYhue9w5v2j2BYyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMfYQLfY2x8wgI3SFJKtwD3EaK4gm0kwC2XKsqmua%2BE%2BPy5iyQEbue78t94SVbdEbnI2xjbUBdKsjWqKtqr0gU5lpMiNqZnsgyj3wcn0PMpwRdpCJoAlZhDyBM2sOOVVJrh7vqghC9W2DO8ObAAOF6Hm%2BMoIXTvFUZ0o7O0oUXyQo2bQiJHly7xzIr8cuEPfOgRlHLKDFXh%2BwSXtb5r%2Bw5W93850PiIBsnz30B3YS2fXJm%2FS%2F7bOalhV4eX%2BgSRz1zQccqaryGObsXehD%2Fs%2Bbu8Z2ulZ8b6Eitq1yIiTBPi7d7KBM8YFrS%2FLlBZ6lauWlL7ik%2F%2BkKdoVC1Uah%2FvWA1SKaKiNKdZyEnMlBVgQ6B0m2EqfV%2BI7wLwKdHd6Enmx%2Bl897JSuaJIq82Tb7mK%2FoBMvKDdC9Kq7LHablLw7loETK7TBl%2FbMQBpJuYzw2zMOC5r906O8YTWgLbadSSpz6jL6n5BnzgNgLHT%2Foi7UwboDgZapIoAOMnxGN%2Bz4RG95D%2F3llc8m3W09rPw9lwhUX8n0I4nY3F2%2F%2BVQ6AKUYoXDQ6Ax8kGLGLF7EuMoONrxD%2FQJ3xGxlv4IBl1wwbHZZ0y4c0Do7P6ju25NS51GLVh%2BmBdZXFZE5Brr9IHpbB3377nurumMPFJQzBULNkwr%2BO%2FwgY6pgFB%2FelkPGb9R0cLqrOJoC7Le8724fdXq2xdrUkTo3dGf6UwJ6DXmvnabqgR2D3vjJZB%2Bmchk%2B14THrlQY3aTBPx6byAy%2FzBtaxE5Y%2Fs0VOKzAqoUrdYNiID9EV50jjhTnRx7bS5P%2BLComUahln8ekl14neJSjGfirMU7eMzulBp1cgN7ZvxXT4bibZSQGrcE0cXF7oLEVNuWXShnQTul0deBpVJgjLv&X-Amz-Signature=fdb3b8d5999756424c6095383d454be9af4f1cbb85952639bb5a7c7c92889be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGKOCCEH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBf3X1lkdpzqL0YS9ERobttrmPP%2BhYQ0hE1BCRwGOyEOAiBjmLVwK1Ht4qFglnqnol4LrnatHhuhYhue9w5v2j2BYyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMfYQLfY2x8wgI3SFJKtwD3EaK4gm0kwC2XKsqmua%2BE%2BPy5iyQEbue78t94SVbdEbnI2xjbUBdKsjWqKtqr0gU5lpMiNqZnsgyj3wcn0PMpwRdpCJoAlZhDyBM2sOOVVJrh7vqghC9W2DO8ObAAOF6Hm%2BMoIXTvFUZ0o7O0oUXyQo2bQiJHly7xzIr8cuEPfOgRlHLKDFXh%2BwSXtb5r%2Bw5W93850PiIBsnz30B3YS2fXJm%2FS%2F7bOalhV4eX%2BgSRz1zQccqaryGObsXehD%2Fs%2Bbu8Z2ulZ8b6Eitq1yIiTBPi7d7KBM8YFrS%2FLlBZ6lauWlL7ik%2F%2BkKdoVC1Uah%2FvWA1SKaKiNKdZyEnMlBVgQ6B0m2EqfV%2BI7wLwKdHd6Enmx%2Bl897JSuaJIq82Tb7mK%2FoBMvKDdC9Kq7LHablLw7loETK7TBl%2FbMQBpJuYzw2zMOC5r906O8YTWgLbadSSpz6jL6n5BnzgNgLHT%2Foi7UwboDgZapIoAOMnxGN%2Bz4RG95D%2F3llc8m3W09rPw9lwhUX8n0I4nY3F2%2F%2BVQ6AKUYoXDQ6Ax8kGLGLF7EuMoONrxD%2FQJ3xGxlv4IBl1wwbHZZ0y4c0Do7P6ju25NS51GLVh%2BmBdZXFZE5Brr9IHpbB3377nurumMPFJQzBULNkwr%2BO%2FwgY6pgFB%2FelkPGb9R0cLqrOJoC7Le8724fdXq2xdrUkTo3dGf6UwJ6DXmvnabqgR2D3vjJZB%2Bmchk%2B14THrlQY3aTBPx6byAy%2FzBtaxE5Y%2Fs0VOKzAqoUrdYNiID9EV50jjhTnRx7bS5P%2BLComUahln8ekl14neJSjGfirMU7eMzulBp1cgN7ZvxXT4bibZSQGrcE0cXF7oLEVNuWXShnQTul0deBpVJgjLv&X-Amz-Signature=cb297dc2696c89188ec26b560e1f48c0c1642e2176c655858ba66f27cf9967b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
