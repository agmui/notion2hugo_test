---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFPCJJIE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYfS%2BEKRd0D8YcnrNFG5TBHfi7R7PbZXr%2BSgGLzR1XWwIgYnsqGgJLg6R%2FcYzsfSwp6WquTc9XyRL1VnACgGYamEMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFPSLkPbYlOCrshuCrcAzq2c%2FD3X2fSN4lW2OD0oHBuKWAvW1PXxSvnEQHn7X2714C3G9jvb0eY%2BxqrHE9RyVST1rM%2B7xAV4z2tPxky4Jf1%2FL1fFq6IWvADUSy7x%2B%2BV4RsWTJipb%2BA%2FaFYBH88Xux%2Fp45hY11yNVYKjEFNex9ywWe%2Bd%2FUevR0u4m5IbFhdr0z0gD4%2BQcvQzstPERnlqwGpE%2BYgQ1Qz462Co%2FSB1xTp1zxztFe55NIvur%2B57Z1J1GUBuefibrtYheSE%2FSMaQANBdNNJZuUlYWwh%2FwgxS0eCyTd9DfIc79bzjvCYEQbnm640jAt%2BVE8%2BbnIne0b7v5Q9sE3%2BpEmnrxkwC4HEqVlavsozXOGCWRZmboIIwmDy%2BLfMRkZtxS0zGv2XMleeOooYh%2B5f8h79faKFgKXAEVM18sic93b2CTqjyCmQajeldu9KAMJ20iZrcKOk%2FVwzj4jZwRzDdkCmuxU%2Bm4%2FiIz%2B%2BKQr8FznsrqkMW%2Bx2pUYuksRUndqR0uCbR3nhtIlmbIP9VktjSLlkl9XnfUBu%2FxbkSUKHHmc4uwokoTVhWRqTkQQpL9FGNYitYBCGoVmW7VizEws%2Bb1Js%2FQq2V3Dj%2BET75nwGsFMAe2u4dCxUzorVU%2BuemQTgZLLGoVe2QMI3h7cMGOqUBOqQGqM8Onu%2B6LZEOJqxQTI9h3JrDe%2FlDPUvZbbR4D4AmJq8e5TnHhCtcrD708wQWzaSoGKOlhMCZJybauRaz%2FDgzwd%2Bfm8yIIpNbuaKFCoxvSlv%2FRSoWUm9awKIGrHw717MGmcxl%2FfTAcV8SOBkAvd5FpLAglxZJJl2n32jz8u8qIc202nTXB0sZQagnxh2HNW6ewz%2FnO8mRz86QN%2FzUBR6Bs4%2Bu&X-Amz-Signature=1fb9404d7609f42fe2490d95e4569e8c8777fa186c8013cd0bdc71d86bd6b957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFPCJJIE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYfS%2BEKRd0D8YcnrNFG5TBHfi7R7PbZXr%2BSgGLzR1XWwIgYnsqGgJLg6R%2FcYzsfSwp6WquTc9XyRL1VnACgGYamEMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFPSLkPbYlOCrshuCrcAzq2c%2FD3X2fSN4lW2OD0oHBuKWAvW1PXxSvnEQHn7X2714C3G9jvb0eY%2BxqrHE9RyVST1rM%2B7xAV4z2tPxky4Jf1%2FL1fFq6IWvADUSy7x%2B%2BV4RsWTJipb%2BA%2FaFYBH88Xux%2Fp45hY11yNVYKjEFNex9ywWe%2Bd%2FUevR0u4m5IbFhdr0z0gD4%2BQcvQzstPERnlqwGpE%2BYgQ1Qz462Co%2FSB1xTp1zxztFe55NIvur%2B57Z1J1GUBuefibrtYheSE%2FSMaQANBdNNJZuUlYWwh%2FwgxS0eCyTd9DfIc79bzjvCYEQbnm640jAt%2BVE8%2BbnIne0b7v5Q9sE3%2BpEmnrxkwC4HEqVlavsozXOGCWRZmboIIwmDy%2BLfMRkZtxS0zGv2XMleeOooYh%2B5f8h79faKFgKXAEVM18sic93b2CTqjyCmQajeldu9KAMJ20iZrcKOk%2FVwzj4jZwRzDdkCmuxU%2Bm4%2FiIz%2B%2BKQr8FznsrqkMW%2Bx2pUYuksRUndqR0uCbR3nhtIlmbIP9VktjSLlkl9XnfUBu%2FxbkSUKHHmc4uwokoTVhWRqTkQQpL9FGNYitYBCGoVmW7VizEws%2Bb1Js%2FQq2V3Dj%2BET75nwGsFMAe2u4dCxUzorVU%2BuemQTgZLLGoVe2QMI3h7cMGOqUBOqQGqM8Onu%2B6LZEOJqxQTI9h3JrDe%2FlDPUvZbbR4D4AmJq8e5TnHhCtcrD708wQWzaSoGKOlhMCZJybauRaz%2FDgzwd%2Bfm8yIIpNbuaKFCoxvSlv%2FRSoWUm9awKIGrHw717MGmcxl%2FfTAcV8SOBkAvd5FpLAglxZJJl2n32jz8u8qIc202nTXB0sZQagnxh2HNW6ewz%2FnO8mRz86QN%2FzUBR6Bs4%2Bu&X-Amz-Signature=ec0c1bed4624a23dedf632036d1b22768a2d87167412ad4c93f6dc092861d779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFPCJJIE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYfS%2BEKRd0D8YcnrNFG5TBHfi7R7PbZXr%2BSgGLzR1XWwIgYnsqGgJLg6R%2FcYzsfSwp6WquTc9XyRL1VnACgGYamEMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFPSLkPbYlOCrshuCrcAzq2c%2FD3X2fSN4lW2OD0oHBuKWAvW1PXxSvnEQHn7X2714C3G9jvb0eY%2BxqrHE9RyVST1rM%2B7xAV4z2tPxky4Jf1%2FL1fFq6IWvADUSy7x%2B%2BV4RsWTJipb%2BA%2FaFYBH88Xux%2Fp45hY11yNVYKjEFNex9ywWe%2Bd%2FUevR0u4m5IbFhdr0z0gD4%2BQcvQzstPERnlqwGpE%2BYgQ1Qz462Co%2FSB1xTp1zxztFe55NIvur%2B57Z1J1GUBuefibrtYheSE%2FSMaQANBdNNJZuUlYWwh%2FwgxS0eCyTd9DfIc79bzjvCYEQbnm640jAt%2BVE8%2BbnIne0b7v5Q9sE3%2BpEmnrxkwC4HEqVlavsozXOGCWRZmboIIwmDy%2BLfMRkZtxS0zGv2XMleeOooYh%2B5f8h79faKFgKXAEVM18sic93b2CTqjyCmQajeldu9KAMJ20iZrcKOk%2FVwzj4jZwRzDdkCmuxU%2Bm4%2FiIz%2B%2BKQr8FznsrqkMW%2Bx2pUYuksRUndqR0uCbR3nhtIlmbIP9VktjSLlkl9XnfUBu%2FxbkSUKHHmc4uwokoTVhWRqTkQQpL9FGNYitYBCGoVmW7VizEws%2Bb1Js%2FQq2V3Dj%2BET75nwGsFMAe2u4dCxUzorVU%2BuemQTgZLLGoVe2QMI3h7cMGOqUBOqQGqM8Onu%2B6LZEOJqxQTI9h3JrDe%2FlDPUvZbbR4D4AmJq8e5TnHhCtcrD708wQWzaSoGKOlhMCZJybauRaz%2FDgzwd%2Bfm8yIIpNbuaKFCoxvSlv%2FRSoWUm9awKIGrHw717MGmcxl%2FfTAcV8SOBkAvd5FpLAglxZJJl2n32jz8u8qIc202nTXB0sZQagnxh2HNW6ewz%2FnO8mRz86QN%2FzUBR6Bs4%2Bu&X-Amz-Signature=cb5bc3c97c9678f2f31312b370c5c1d68339731ab6617a183da2d4ee422b8e3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFPCJJIE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYfS%2BEKRd0D8YcnrNFG5TBHfi7R7PbZXr%2BSgGLzR1XWwIgYnsqGgJLg6R%2FcYzsfSwp6WquTc9XyRL1VnACgGYamEMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFPSLkPbYlOCrshuCrcAzq2c%2FD3X2fSN4lW2OD0oHBuKWAvW1PXxSvnEQHn7X2714C3G9jvb0eY%2BxqrHE9RyVST1rM%2B7xAV4z2tPxky4Jf1%2FL1fFq6IWvADUSy7x%2B%2BV4RsWTJipb%2BA%2FaFYBH88Xux%2Fp45hY11yNVYKjEFNex9ywWe%2Bd%2FUevR0u4m5IbFhdr0z0gD4%2BQcvQzstPERnlqwGpE%2BYgQ1Qz462Co%2FSB1xTp1zxztFe55NIvur%2B57Z1J1GUBuefibrtYheSE%2FSMaQANBdNNJZuUlYWwh%2FwgxS0eCyTd9DfIc79bzjvCYEQbnm640jAt%2BVE8%2BbnIne0b7v5Q9sE3%2BpEmnrxkwC4HEqVlavsozXOGCWRZmboIIwmDy%2BLfMRkZtxS0zGv2XMleeOooYh%2B5f8h79faKFgKXAEVM18sic93b2CTqjyCmQajeldu9KAMJ20iZrcKOk%2FVwzj4jZwRzDdkCmuxU%2Bm4%2FiIz%2B%2BKQr8FznsrqkMW%2Bx2pUYuksRUndqR0uCbR3nhtIlmbIP9VktjSLlkl9XnfUBu%2FxbkSUKHHmc4uwokoTVhWRqTkQQpL9FGNYitYBCGoVmW7VizEws%2Bb1Js%2FQq2V3Dj%2BET75nwGsFMAe2u4dCxUzorVU%2BuemQTgZLLGoVe2QMI3h7cMGOqUBOqQGqM8Onu%2B6LZEOJqxQTI9h3JrDe%2FlDPUvZbbR4D4AmJq8e5TnHhCtcrD708wQWzaSoGKOlhMCZJybauRaz%2FDgzwd%2Bfm8yIIpNbuaKFCoxvSlv%2FRSoWUm9awKIGrHw717MGmcxl%2FfTAcV8SOBkAvd5FpLAglxZJJl2n32jz8u8qIc202nTXB0sZQagnxh2HNW6ewz%2FnO8mRz86QN%2FzUBR6Bs4%2Bu&X-Amz-Signature=8ea6c8d022b1021f9db0fcf632be18d9fe81d8e6c2badca3aac5a01b96afdec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFPCJJIE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYfS%2BEKRd0D8YcnrNFG5TBHfi7R7PbZXr%2BSgGLzR1XWwIgYnsqGgJLg6R%2FcYzsfSwp6WquTc9XyRL1VnACgGYamEMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFPSLkPbYlOCrshuCrcAzq2c%2FD3X2fSN4lW2OD0oHBuKWAvW1PXxSvnEQHn7X2714C3G9jvb0eY%2BxqrHE9RyVST1rM%2B7xAV4z2tPxky4Jf1%2FL1fFq6IWvADUSy7x%2B%2BV4RsWTJipb%2BA%2FaFYBH88Xux%2Fp45hY11yNVYKjEFNex9ywWe%2Bd%2FUevR0u4m5IbFhdr0z0gD4%2BQcvQzstPERnlqwGpE%2BYgQ1Qz462Co%2FSB1xTp1zxztFe55NIvur%2B57Z1J1GUBuefibrtYheSE%2FSMaQANBdNNJZuUlYWwh%2FwgxS0eCyTd9DfIc79bzjvCYEQbnm640jAt%2BVE8%2BbnIne0b7v5Q9sE3%2BpEmnrxkwC4HEqVlavsozXOGCWRZmboIIwmDy%2BLfMRkZtxS0zGv2XMleeOooYh%2B5f8h79faKFgKXAEVM18sic93b2CTqjyCmQajeldu9KAMJ20iZrcKOk%2FVwzj4jZwRzDdkCmuxU%2Bm4%2FiIz%2B%2BKQr8FznsrqkMW%2Bx2pUYuksRUndqR0uCbR3nhtIlmbIP9VktjSLlkl9XnfUBu%2FxbkSUKHHmc4uwokoTVhWRqTkQQpL9FGNYitYBCGoVmW7VizEws%2Bb1Js%2FQq2V3Dj%2BET75nwGsFMAe2u4dCxUzorVU%2BuemQTgZLLGoVe2QMI3h7cMGOqUBOqQGqM8Onu%2B6LZEOJqxQTI9h3JrDe%2FlDPUvZbbR4D4AmJq8e5TnHhCtcrD708wQWzaSoGKOlhMCZJybauRaz%2FDgzwd%2Bfm8yIIpNbuaKFCoxvSlv%2FRSoWUm9awKIGrHw717MGmcxl%2FfTAcV8SOBkAvd5FpLAglxZJJl2n32jz8u8qIc202nTXB0sZQagnxh2HNW6ewz%2FnO8mRz86QN%2FzUBR6Bs4%2Bu&X-Amz-Signature=52e5e9b6a46643a8d682b99468021c8a8e72b57f9c560da0e93d2675a9d1a986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFPCJJIE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYfS%2BEKRd0D8YcnrNFG5TBHfi7R7PbZXr%2BSgGLzR1XWwIgYnsqGgJLg6R%2FcYzsfSwp6WquTc9XyRL1VnACgGYamEMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFPSLkPbYlOCrshuCrcAzq2c%2FD3X2fSN4lW2OD0oHBuKWAvW1PXxSvnEQHn7X2714C3G9jvb0eY%2BxqrHE9RyVST1rM%2B7xAV4z2tPxky4Jf1%2FL1fFq6IWvADUSy7x%2B%2BV4RsWTJipb%2BA%2FaFYBH88Xux%2Fp45hY11yNVYKjEFNex9ywWe%2Bd%2FUevR0u4m5IbFhdr0z0gD4%2BQcvQzstPERnlqwGpE%2BYgQ1Qz462Co%2FSB1xTp1zxztFe55NIvur%2B57Z1J1GUBuefibrtYheSE%2FSMaQANBdNNJZuUlYWwh%2FwgxS0eCyTd9DfIc79bzjvCYEQbnm640jAt%2BVE8%2BbnIne0b7v5Q9sE3%2BpEmnrxkwC4HEqVlavsozXOGCWRZmboIIwmDy%2BLfMRkZtxS0zGv2XMleeOooYh%2B5f8h79faKFgKXAEVM18sic93b2CTqjyCmQajeldu9KAMJ20iZrcKOk%2FVwzj4jZwRzDdkCmuxU%2Bm4%2FiIz%2B%2BKQr8FznsrqkMW%2Bx2pUYuksRUndqR0uCbR3nhtIlmbIP9VktjSLlkl9XnfUBu%2FxbkSUKHHmc4uwokoTVhWRqTkQQpL9FGNYitYBCGoVmW7VizEws%2Bb1Js%2FQq2V3Dj%2BET75nwGsFMAe2u4dCxUzorVU%2BuemQTgZLLGoVe2QMI3h7cMGOqUBOqQGqM8Onu%2B6LZEOJqxQTI9h3JrDe%2FlDPUvZbbR4D4AmJq8e5TnHhCtcrD708wQWzaSoGKOlhMCZJybauRaz%2FDgzwd%2Bfm8yIIpNbuaKFCoxvSlv%2FRSoWUm9awKIGrHw717MGmcxl%2FfTAcV8SOBkAvd5FpLAglxZJJl2n32jz8u8qIc202nTXB0sZQagnxh2HNW6ewz%2FnO8mRz86QN%2FzUBR6Bs4%2Bu&X-Amz-Signature=acd9ff93ed60d75c7c480e5767c915dd3f099dc052ee8b45ce386619c9754e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFPCJJIE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYfS%2BEKRd0D8YcnrNFG5TBHfi7R7PbZXr%2BSgGLzR1XWwIgYnsqGgJLg6R%2FcYzsfSwp6WquTc9XyRL1VnACgGYamEMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFPSLkPbYlOCrshuCrcAzq2c%2FD3X2fSN4lW2OD0oHBuKWAvW1PXxSvnEQHn7X2714C3G9jvb0eY%2BxqrHE9RyVST1rM%2B7xAV4z2tPxky4Jf1%2FL1fFq6IWvADUSy7x%2B%2BV4RsWTJipb%2BA%2FaFYBH88Xux%2Fp45hY11yNVYKjEFNex9ywWe%2Bd%2FUevR0u4m5IbFhdr0z0gD4%2BQcvQzstPERnlqwGpE%2BYgQ1Qz462Co%2FSB1xTp1zxztFe55NIvur%2B57Z1J1GUBuefibrtYheSE%2FSMaQANBdNNJZuUlYWwh%2FwgxS0eCyTd9DfIc79bzjvCYEQbnm640jAt%2BVE8%2BbnIne0b7v5Q9sE3%2BpEmnrxkwC4HEqVlavsozXOGCWRZmboIIwmDy%2BLfMRkZtxS0zGv2XMleeOooYh%2B5f8h79faKFgKXAEVM18sic93b2CTqjyCmQajeldu9KAMJ20iZrcKOk%2FVwzj4jZwRzDdkCmuxU%2Bm4%2FiIz%2B%2BKQr8FznsrqkMW%2Bx2pUYuksRUndqR0uCbR3nhtIlmbIP9VktjSLlkl9XnfUBu%2FxbkSUKHHmc4uwokoTVhWRqTkQQpL9FGNYitYBCGoVmW7VizEws%2Bb1Js%2FQq2V3Dj%2BET75nwGsFMAe2u4dCxUzorVU%2BuemQTgZLLGoVe2QMI3h7cMGOqUBOqQGqM8Onu%2B6LZEOJqxQTI9h3JrDe%2FlDPUvZbbR4D4AmJq8e5TnHhCtcrD708wQWzaSoGKOlhMCZJybauRaz%2FDgzwd%2Bfm8yIIpNbuaKFCoxvSlv%2FRSoWUm9awKIGrHw717MGmcxl%2FfTAcV8SOBkAvd5FpLAglxZJJl2n32jz8u8qIc202nTXB0sZQagnxh2HNW6ewz%2FnO8mRz86QN%2FzUBR6Bs4%2Bu&X-Amz-Signature=87d56cfa45ad3829819c4cd10ad04ac0782cdb8c2925e6a3e6a82156b9fc3355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
