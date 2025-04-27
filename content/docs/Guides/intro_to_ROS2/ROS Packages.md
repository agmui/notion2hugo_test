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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUEIBQFF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzqM4gLyYbN8sVGKz%2FB3RxIb01VCb7mm3JgJKAmk6orAIhAOr5zA5XWMAqftFyhgNJ5QxJl9O722tJ1aeSpVo8iET0Kv8DCFUQABoMNjM3NDIzMTgzODA1Igyj%2FQA920pHxBJHuUcq3AOwROdcp1lE4MoVv7zwVhvfOf6BdehQ%2F64b%2Fhxr4l3AenVKwAno9hrkS2Pl7ILNptr4R31bQE3dISy0piFXXRTLVRAeep2UfgabRfzJ6YyRNwx56r1ulzS5NpTCpNvThdvaBzw7Nbw5OsfQzOoW5CFw9PcfUaYVcqjNXOEbFZhwBSAWTtWeE0oYSVycF8INjBgkW5ZpK4wA9E3D32PrvWPU%2FjB%2BtXIqHozPmD3%2BGCCLEvFhdGe11ZAfj4zoy6jHPeu7mrrpA5YGU%2BYRIuYvvwU2tbqWPNLhDLcMD5K8QB656br6%2BAE2UsrcRi%2BRETHVwuTbCUHFWkW5YMdS%2Fx3vsGNVj21gtt%2Bmugspc%2Fol%2BdpysMzen11BRRqcjacZT8MXzeFUvTAvDTDrj0W2lc0kmBk9f1UeppdVE0YeFTq6IvrsDIlO9hejB2jbYW4nJSrNjLbY6myyhZQ8ri7XwicQKMIaft%2BPnmdZlILlzn2hw8id%2BZv8qJtCR0qD4lm3b1aY%2FEjvUJrhmTVSYzkB0r9oH52He7g2qg8V4xwZ0mblH3jMp2up7ww%2BpnKRdyoI3Rp3aM9uHX3XTuXw6MA4q1vVNxBnmThoWF8%2BaJGiufxOFiN01oM0ljDZ%2FNdOSsHr0TDE07bABjqkAaQvOPNsho0m7aAGhgLmu2aIUSJ5fF9pLYuyhMSs0tyJnauJ7hl9oHFVgIZd0NmYWqDQvl1aeP3qlSrAvDF8LC4T4ug5TJKMDec2SZPeDDg1SeS%2FnX9HYMyMYi4FV31oLtQE3xEesFOZMZu8l8%2BE%2BHxZzMak%2Fz6n1eQsG2vg0Se3nGilvfHbiHOC66AgtTj3RrtIpTtZZ2QT2uGVo4g0BlHG6lZA&X-Amz-Signature=f20bfa136f5ef5b3b7137939f7847de25ae6f784090519ca7fca675b828dc59c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUEIBQFF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzqM4gLyYbN8sVGKz%2FB3RxIb01VCb7mm3JgJKAmk6orAIhAOr5zA5XWMAqftFyhgNJ5QxJl9O722tJ1aeSpVo8iET0Kv8DCFUQABoMNjM3NDIzMTgzODA1Igyj%2FQA920pHxBJHuUcq3AOwROdcp1lE4MoVv7zwVhvfOf6BdehQ%2F64b%2Fhxr4l3AenVKwAno9hrkS2Pl7ILNptr4R31bQE3dISy0piFXXRTLVRAeep2UfgabRfzJ6YyRNwx56r1ulzS5NpTCpNvThdvaBzw7Nbw5OsfQzOoW5CFw9PcfUaYVcqjNXOEbFZhwBSAWTtWeE0oYSVycF8INjBgkW5ZpK4wA9E3D32PrvWPU%2FjB%2BtXIqHozPmD3%2BGCCLEvFhdGe11ZAfj4zoy6jHPeu7mrrpA5YGU%2BYRIuYvvwU2tbqWPNLhDLcMD5K8QB656br6%2BAE2UsrcRi%2BRETHVwuTbCUHFWkW5YMdS%2Fx3vsGNVj21gtt%2Bmugspc%2Fol%2BdpysMzen11BRRqcjacZT8MXzeFUvTAvDTDrj0W2lc0kmBk9f1UeppdVE0YeFTq6IvrsDIlO9hejB2jbYW4nJSrNjLbY6myyhZQ8ri7XwicQKMIaft%2BPnmdZlILlzn2hw8id%2BZv8qJtCR0qD4lm3b1aY%2FEjvUJrhmTVSYzkB0r9oH52He7g2qg8V4xwZ0mblH3jMp2up7ww%2BpnKRdyoI3Rp3aM9uHX3XTuXw6MA4q1vVNxBnmThoWF8%2BaJGiufxOFiN01oM0ljDZ%2FNdOSsHr0TDE07bABjqkAaQvOPNsho0m7aAGhgLmu2aIUSJ5fF9pLYuyhMSs0tyJnauJ7hl9oHFVgIZd0NmYWqDQvl1aeP3qlSrAvDF8LC4T4ug5TJKMDec2SZPeDDg1SeS%2FnX9HYMyMYi4FV31oLtQE3xEesFOZMZu8l8%2BE%2BHxZzMak%2Fz6n1eQsG2vg0Se3nGilvfHbiHOC66AgtTj3RrtIpTtZZ2QT2uGVo4g0BlHG6lZA&X-Amz-Signature=316930ace7ea526a5aad42263b10c0aa15b89efa0f579a7c447408d5ff74beb3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUEIBQFF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzqM4gLyYbN8sVGKz%2FB3RxIb01VCb7mm3JgJKAmk6orAIhAOr5zA5XWMAqftFyhgNJ5QxJl9O722tJ1aeSpVo8iET0Kv8DCFUQABoMNjM3NDIzMTgzODA1Igyj%2FQA920pHxBJHuUcq3AOwROdcp1lE4MoVv7zwVhvfOf6BdehQ%2F64b%2Fhxr4l3AenVKwAno9hrkS2Pl7ILNptr4R31bQE3dISy0piFXXRTLVRAeep2UfgabRfzJ6YyRNwx56r1ulzS5NpTCpNvThdvaBzw7Nbw5OsfQzOoW5CFw9PcfUaYVcqjNXOEbFZhwBSAWTtWeE0oYSVycF8INjBgkW5ZpK4wA9E3D32PrvWPU%2FjB%2BtXIqHozPmD3%2BGCCLEvFhdGe11ZAfj4zoy6jHPeu7mrrpA5YGU%2BYRIuYvvwU2tbqWPNLhDLcMD5K8QB656br6%2BAE2UsrcRi%2BRETHVwuTbCUHFWkW5YMdS%2Fx3vsGNVj21gtt%2Bmugspc%2Fol%2BdpysMzen11BRRqcjacZT8MXzeFUvTAvDTDrj0W2lc0kmBk9f1UeppdVE0YeFTq6IvrsDIlO9hejB2jbYW4nJSrNjLbY6myyhZQ8ri7XwicQKMIaft%2BPnmdZlILlzn2hw8id%2BZv8qJtCR0qD4lm3b1aY%2FEjvUJrhmTVSYzkB0r9oH52He7g2qg8V4xwZ0mblH3jMp2up7ww%2BpnKRdyoI3Rp3aM9uHX3XTuXw6MA4q1vVNxBnmThoWF8%2BaJGiufxOFiN01oM0ljDZ%2FNdOSsHr0TDE07bABjqkAaQvOPNsho0m7aAGhgLmu2aIUSJ5fF9pLYuyhMSs0tyJnauJ7hl9oHFVgIZd0NmYWqDQvl1aeP3qlSrAvDF8LC4T4ug5TJKMDec2SZPeDDg1SeS%2FnX9HYMyMYi4FV31oLtQE3xEesFOZMZu8l8%2BE%2BHxZzMak%2Fz6n1eQsG2vg0Se3nGilvfHbiHOC66AgtTj3RrtIpTtZZ2QT2uGVo4g0BlHG6lZA&X-Amz-Signature=26d69b391eb5f7701416e5c674e073554c96a594736f0ed27211f99027d06a8f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUEIBQFF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzqM4gLyYbN8sVGKz%2FB3RxIb01VCb7mm3JgJKAmk6orAIhAOr5zA5XWMAqftFyhgNJ5QxJl9O722tJ1aeSpVo8iET0Kv8DCFUQABoMNjM3NDIzMTgzODA1Igyj%2FQA920pHxBJHuUcq3AOwROdcp1lE4MoVv7zwVhvfOf6BdehQ%2F64b%2Fhxr4l3AenVKwAno9hrkS2Pl7ILNptr4R31bQE3dISy0piFXXRTLVRAeep2UfgabRfzJ6YyRNwx56r1ulzS5NpTCpNvThdvaBzw7Nbw5OsfQzOoW5CFw9PcfUaYVcqjNXOEbFZhwBSAWTtWeE0oYSVycF8INjBgkW5ZpK4wA9E3D32PrvWPU%2FjB%2BtXIqHozPmD3%2BGCCLEvFhdGe11ZAfj4zoy6jHPeu7mrrpA5YGU%2BYRIuYvvwU2tbqWPNLhDLcMD5K8QB656br6%2BAE2UsrcRi%2BRETHVwuTbCUHFWkW5YMdS%2Fx3vsGNVj21gtt%2Bmugspc%2Fol%2BdpysMzen11BRRqcjacZT8MXzeFUvTAvDTDrj0W2lc0kmBk9f1UeppdVE0YeFTq6IvrsDIlO9hejB2jbYW4nJSrNjLbY6myyhZQ8ri7XwicQKMIaft%2BPnmdZlILlzn2hw8id%2BZv8qJtCR0qD4lm3b1aY%2FEjvUJrhmTVSYzkB0r9oH52He7g2qg8V4xwZ0mblH3jMp2up7ww%2BpnKRdyoI3Rp3aM9uHX3XTuXw6MA4q1vVNxBnmThoWF8%2BaJGiufxOFiN01oM0ljDZ%2FNdOSsHr0TDE07bABjqkAaQvOPNsho0m7aAGhgLmu2aIUSJ5fF9pLYuyhMSs0tyJnauJ7hl9oHFVgIZd0NmYWqDQvl1aeP3qlSrAvDF8LC4T4ug5TJKMDec2SZPeDDg1SeS%2FnX9HYMyMYi4FV31oLtQE3xEesFOZMZu8l8%2BE%2BHxZzMak%2Fz6n1eQsG2vg0Se3nGilvfHbiHOC66AgtTj3RrtIpTtZZ2QT2uGVo4g0BlHG6lZA&X-Amz-Signature=56e961812e38744cbe55442f576e76a92723381776b58825efa0de17e46f0e26&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUEIBQFF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzqM4gLyYbN8sVGKz%2FB3RxIb01VCb7mm3JgJKAmk6orAIhAOr5zA5XWMAqftFyhgNJ5QxJl9O722tJ1aeSpVo8iET0Kv8DCFUQABoMNjM3NDIzMTgzODA1Igyj%2FQA920pHxBJHuUcq3AOwROdcp1lE4MoVv7zwVhvfOf6BdehQ%2F64b%2Fhxr4l3AenVKwAno9hrkS2Pl7ILNptr4R31bQE3dISy0piFXXRTLVRAeep2UfgabRfzJ6YyRNwx56r1ulzS5NpTCpNvThdvaBzw7Nbw5OsfQzOoW5CFw9PcfUaYVcqjNXOEbFZhwBSAWTtWeE0oYSVycF8INjBgkW5ZpK4wA9E3D32PrvWPU%2FjB%2BtXIqHozPmD3%2BGCCLEvFhdGe11ZAfj4zoy6jHPeu7mrrpA5YGU%2BYRIuYvvwU2tbqWPNLhDLcMD5K8QB656br6%2BAE2UsrcRi%2BRETHVwuTbCUHFWkW5YMdS%2Fx3vsGNVj21gtt%2Bmugspc%2Fol%2BdpysMzen11BRRqcjacZT8MXzeFUvTAvDTDrj0W2lc0kmBk9f1UeppdVE0YeFTq6IvrsDIlO9hejB2jbYW4nJSrNjLbY6myyhZQ8ri7XwicQKMIaft%2BPnmdZlILlzn2hw8id%2BZv8qJtCR0qD4lm3b1aY%2FEjvUJrhmTVSYzkB0r9oH52He7g2qg8V4xwZ0mblH3jMp2up7ww%2BpnKRdyoI3Rp3aM9uHX3XTuXw6MA4q1vVNxBnmThoWF8%2BaJGiufxOFiN01oM0ljDZ%2FNdOSsHr0TDE07bABjqkAaQvOPNsho0m7aAGhgLmu2aIUSJ5fF9pLYuyhMSs0tyJnauJ7hl9oHFVgIZd0NmYWqDQvl1aeP3qlSrAvDF8LC4T4ug5TJKMDec2SZPeDDg1SeS%2FnX9HYMyMYi4FV31oLtQE3xEesFOZMZu8l8%2BE%2BHxZzMak%2Fz6n1eQsG2vg0Se3nGilvfHbiHOC66AgtTj3RrtIpTtZZ2QT2uGVo4g0BlHG6lZA&X-Amz-Signature=5c95d9c6cf58778ba1f560b7cf3120eecb6b2e45879d143c90cb7c16ae6e4469&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUEIBQFF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzqM4gLyYbN8sVGKz%2FB3RxIb01VCb7mm3JgJKAmk6orAIhAOr5zA5XWMAqftFyhgNJ5QxJl9O722tJ1aeSpVo8iET0Kv8DCFUQABoMNjM3NDIzMTgzODA1Igyj%2FQA920pHxBJHuUcq3AOwROdcp1lE4MoVv7zwVhvfOf6BdehQ%2F64b%2Fhxr4l3AenVKwAno9hrkS2Pl7ILNptr4R31bQE3dISy0piFXXRTLVRAeep2UfgabRfzJ6YyRNwx56r1ulzS5NpTCpNvThdvaBzw7Nbw5OsfQzOoW5CFw9PcfUaYVcqjNXOEbFZhwBSAWTtWeE0oYSVycF8INjBgkW5ZpK4wA9E3D32PrvWPU%2FjB%2BtXIqHozPmD3%2BGCCLEvFhdGe11ZAfj4zoy6jHPeu7mrrpA5YGU%2BYRIuYvvwU2tbqWPNLhDLcMD5K8QB656br6%2BAE2UsrcRi%2BRETHVwuTbCUHFWkW5YMdS%2Fx3vsGNVj21gtt%2Bmugspc%2Fol%2BdpysMzen11BRRqcjacZT8MXzeFUvTAvDTDrj0W2lc0kmBk9f1UeppdVE0YeFTq6IvrsDIlO9hejB2jbYW4nJSrNjLbY6myyhZQ8ri7XwicQKMIaft%2BPnmdZlILlzn2hw8id%2BZv8qJtCR0qD4lm3b1aY%2FEjvUJrhmTVSYzkB0r9oH52He7g2qg8V4xwZ0mblH3jMp2up7ww%2BpnKRdyoI3Rp3aM9uHX3XTuXw6MA4q1vVNxBnmThoWF8%2BaJGiufxOFiN01oM0ljDZ%2FNdOSsHr0TDE07bABjqkAaQvOPNsho0m7aAGhgLmu2aIUSJ5fF9pLYuyhMSs0tyJnauJ7hl9oHFVgIZd0NmYWqDQvl1aeP3qlSrAvDF8LC4T4ug5TJKMDec2SZPeDDg1SeS%2FnX9HYMyMYi4FV31oLtQE3xEesFOZMZu8l8%2BE%2BHxZzMak%2Fz6n1eQsG2vg0Se3nGilvfHbiHOC66AgtTj3RrtIpTtZZ2QT2uGVo4g0BlHG6lZA&X-Amz-Signature=843002110bccb559a92b288db25d691d76f811b2e608fd964b5e23eb1a1884e8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUEIBQFF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzqM4gLyYbN8sVGKz%2FB3RxIb01VCb7mm3JgJKAmk6orAIhAOr5zA5XWMAqftFyhgNJ5QxJl9O722tJ1aeSpVo8iET0Kv8DCFUQABoMNjM3NDIzMTgzODA1Igyj%2FQA920pHxBJHuUcq3AOwROdcp1lE4MoVv7zwVhvfOf6BdehQ%2F64b%2Fhxr4l3AenVKwAno9hrkS2Pl7ILNptr4R31bQE3dISy0piFXXRTLVRAeep2UfgabRfzJ6YyRNwx56r1ulzS5NpTCpNvThdvaBzw7Nbw5OsfQzOoW5CFw9PcfUaYVcqjNXOEbFZhwBSAWTtWeE0oYSVycF8INjBgkW5ZpK4wA9E3D32PrvWPU%2FjB%2BtXIqHozPmD3%2BGCCLEvFhdGe11ZAfj4zoy6jHPeu7mrrpA5YGU%2BYRIuYvvwU2tbqWPNLhDLcMD5K8QB656br6%2BAE2UsrcRi%2BRETHVwuTbCUHFWkW5YMdS%2Fx3vsGNVj21gtt%2Bmugspc%2Fol%2BdpysMzen11BRRqcjacZT8MXzeFUvTAvDTDrj0W2lc0kmBk9f1UeppdVE0YeFTq6IvrsDIlO9hejB2jbYW4nJSrNjLbY6myyhZQ8ri7XwicQKMIaft%2BPnmdZlILlzn2hw8id%2BZv8qJtCR0qD4lm3b1aY%2FEjvUJrhmTVSYzkB0r9oH52He7g2qg8V4xwZ0mblH3jMp2up7ww%2BpnKRdyoI3Rp3aM9uHX3XTuXw6MA4q1vVNxBnmThoWF8%2BaJGiufxOFiN01oM0ljDZ%2FNdOSsHr0TDE07bABjqkAaQvOPNsho0m7aAGhgLmu2aIUSJ5fF9pLYuyhMSs0tyJnauJ7hl9oHFVgIZd0NmYWqDQvl1aeP3qlSrAvDF8LC4T4ug5TJKMDec2SZPeDDg1SeS%2FnX9HYMyMYi4FV31oLtQE3xEesFOZMZu8l8%2BE%2BHxZzMak%2Fz6n1eQsG2vg0Se3nGilvfHbiHOC66AgtTj3RrtIpTtZZ2QT2uGVo4g0BlHG6lZA&X-Amz-Signature=73189b36271b31ea1aec53d690eb6407395676d7236642f7fc2c0ad29425ceca&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
