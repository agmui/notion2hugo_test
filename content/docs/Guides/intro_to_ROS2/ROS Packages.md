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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KHEFASM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx8awRAG2bx8azNMpq96MUGSmEQT%2FiAj%2BMfO1iN%2BDcmAiAgkQ9ltWiHHd1rOPzVYTllwrUcjcBJ0rbJyVf0SG1j%2BCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMbevuMSTLKqdbGBx6KtwDrdm%2FC%2Fv14Gyn15ZGXfaP4VjcmvwN5diECZhiCgZxU0S9rBU6WJExNT6ZcKwm8B%2BjFzeHSLjRpFiMHiLFor2xSeZrE%2FtRnAbXwbJgDdtjHW2FrI0epjJWskTI3%2FdWNivLHgOu5PKqCzf2aVTUVT7CUkrtcGZWd2T1Ypf73IqzMm%2FJiYszDV5d5AG4LRsthMwRdhZ66%2F1nGLGwukHHeeRbFGkbEUlriKWWg9jDqAHb31GpVDAeEcTAu5fuhGGifpbI2wAhzdQOrd6dw8YiaOhRiMPFxuf6SFYVtyxgydQ%2FP%2BEii39lwIpNd48FJEDWfTYM8uYS59I4i0cV1pf2wNctkzF5ZRgmufnMNAy%2FpQ1um%2Fjfs%2FZMbQ2YwgyXwl3wcHy9dglbz78plwKyQRE6oaJQPDGey3hOatjhwMZUehAXdmfi1GG%2B8HwfDouIheJxdceUKJ4TTwUcaMRkFdcoOynoVjKPZvnpMRHrtCFLUBrXn4r0vXQn3fvXFxgYG0YIoQ3Gt9A5mVSwsrL8hZ%2B3SSxphcwIYsQbVCwze8ZX01Rl2bVixV5QAcIA7i%2FIIyCRQSpQmM%2BIaCCk6tnYkGIani51s5QaLihSLgTxW3iqPDxglzGlf7zmqsUmYAn%2FBkAwz7SuwAY6pgHUFTgHZwn7kATwa7uQkRn9gg1PbCPWcbBoAqgPzKRIw1SG6W9Hwvuq0cSjf7gBk9gx9RDZ60B%2BLva2btyRqLPAwGPAgugVjO97BX%2FDpfGfQJiaLdPCibIsvSjkz%2B4Omlrbtxisa9b1Sb46biDAdwrTMQ2424KfDooCH5P2og%2F4sSwFInBmK2shLnWSsKaLH1A%2B50kRJCyNLXljOu%2BZmRdDs6SjkG38&X-Amz-Signature=089350a0e1f902f759b161fd28cc11313a64a5f4b95ccf6a2903121d943dd1b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KHEFASM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx8awRAG2bx8azNMpq96MUGSmEQT%2FiAj%2BMfO1iN%2BDcmAiAgkQ9ltWiHHd1rOPzVYTllwrUcjcBJ0rbJyVf0SG1j%2BCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMbevuMSTLKqdbGBx6KtwDrdm%2FC%2Fv14Gyn15ZGXfaP4VjcmvwN5diECZhiCgZxU0S9rBU6WJExNT6ZcKwm8B%2BjFzeHSLjRpFiMHiLFor2xSeZrE%2FtRnAbXwbJgDdtjHW2FrI0epjJWskTI3%2FdWNivLHgOu5PKqCzf2aVTUVT7CUkrtcGZWd2T1Ypf73IqzMm%2FJiYszDV5d5AG4LRsthMwRdhZ66%2F1nGLGwukHHeeRbFGkbEUlriKWWg9jDqAHb31GpVDAeEcTAu5fuhGGifpbI2wAhzdQOrd6dw8YiaOhRiMPFxuf6SFYVtyxgydQ%2FP%2BEii39lwIpNd48FJEDWfTYM8uYS59I4i0cV1pf2wNctkzF5ZRgmufnMNAy%2FpQ1um%2Fjfs%2FZMbQ2YwgyXwl3wcHy9dglbz78plwKyQRE6oaJQPDGey3hOatjhwMZUehAXdmfi1GG%2B8HwfDouIheJxdceUKJ4TTwUcaMRkFdcoOynoVjKPZvnpMRHrtCFLUBrXn4r0vXQn3fvXFxgYG0YIoQ3Gt9A5mVSwsrL8hZ%2B3SSxphcwIYsQbVCwze8ZX01Rl2bVixV5QAcIA7i%2FIIyCRQSpQmM%2BIaCCk6tnYkGIani51s5QaLihSLgTxW3iqPDxglzGlf7zmqsUmYAn%2FBkAwz7SuwAY6pgHUFTgHZwn7kATwa7uQkRn9gg1PbCPWcbBoAqgPzKRIw1SG6W9Hwvuq0cSjf7gBk9gx9RDZ60B%2BLva2btyRqLPAwGPAgugVjO97BX%2FDpfGfQJiaLdPCibIsvSjkz%2B4Omlrbtxisa9b1Sb46biDAdwrTMQ2424KfDooCH5P2og%2F4sSwFInBmK2shLnWSsKaLH1A%2B50kRJCyNLXljOu%2BZmRdDs6SjkG38&X-Amz-Signature=4f8993b80eac6a10d57cba7ca3d96dea418c6b268753fd0faefd0c7733ebeb6e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KHEFASM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx8awRAG2bx8azNMpq96MUGSmEQT%2FiAj%2BMfO1iN%2BDcmAiAgkQ9ltWiHHd1rOPzVYTllwrUcjcBJ0rbJyVf0SG1j%2BCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMbevuMSTLKqdbGBx6KtwDrdm%2FC%2Fv14Gyn15ZGXfaP4VjcmvwN5diECZhiCgZxU0S9rBU6WJExNT6ZcKwm8B%2BjFzeHSLjRpFiMHiLFor2xSeZrE%2FtRnAbXwbJgDdtjHW2FrI0epjJWskTI3%2FdWNivLHgOu5PKqCzf2aVTUVT7CUkrtcGZWd2T1Ypf73IqzMm%2FJiYszDV5d5AG4LRsthMwRdhZ66%2F1nGLGwukHHeeRbFGkbEUlriKWWg9jDqAHb31GpVDAeEcTAu5fuhGGifpbI2wAhzdQOrd6dw8YiaOhRiMPFxuf6SFYVtyxgydQ%2FP%2BEii39lwIpNd48FJEDWfTYM8uYS59I4i0cV1pf2wNctkzF5ZRgmufnMNAy%2FpQ1um%2Fjfs%2FZMbQ2YwgyXwl3wcHy9dglbz78plwKyQRE6oaJQPDGey3hOatjhwMZUehAXdmfi1GG%2B8HwfDouIheJxdceUKJ4TTwUcaMRkFdcoOynoVjKPZvnpMRHrtCFLUBrXn4r0vXQn3fvXFxgYG0YIoQ3Gt9A5mVSwsrL8hZ%2B3SSxphcwIYsQbVCwze8ZX01Rl2bVixV5QAcIA7i%2FIIyCRQSpQmM%2BIaCCk6tnYkGIani51s5QaLihSLgTxW3iqPDxglzGlf7zmqsUmYAn%2FBkAwz7SuwAY6pgHUFTgHZwn7kATwa7uQkRn9gg1PbCPWcbBoAqgPzKRIw1SG6W9Hwvuq0cSjf7gBk9gx9RDZ60B%2BLva2btyRqLPAwGPAgugVjO97BX%2FDpfGfQJiaLdPCibIsvSjkz%2B4Omlrbtxisa9b1Sb46biDAdwrTMQ2424KfDooCH5P2og%2F4sSwFInBmK2shLnWSsKaLH1A%2B50kRJCyNLXljOu%2BZmRdDs6SjkG38&X-Amz-Signature=a6c31bb9e52047d4f541d40159408856077cd50f360b01494dddf98fff0e4037&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KHEFASM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx8awRAG2bx8azNMpq96MUGSmEQT%2FiAj%2BMfO1iN%2BDcmAiAgkQ9ltWiHHd1rOPzVYTllwrUcjcBJ0rbJyVf0SG1j%2BCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMbevuMSTLKqdbGBx6KtwDrdm%2FC%2Fv14Gyn15ZGXfaP4VjcmvwN5diECZhiCgZxU0S9rBU6WJExNT6ZcKwm8B%2BjFzeHSLjRpFiMHiLFor2xSeZrE%2FtRnAbXwbJgDdtjHW2FrI0epjJWskTI3%2FdWNivLHgOu5PKqCzf2aVTUVT7CUkrtcGZWd2T1Ypf73IqzMm%2FJiYszDV5d5AG4LRsthMwRdhZ66%2F1nGLGwukHHeeRbFGkbEUlriKWWg9jDqAHb31GpVDAeEcTAu5fuhGGifpbI2wAhzdQOrd6dw8YiaOhRiMPFxuf6SFYVtyxgydQ%2FP%2BEii39lwIpNd48FJEDWfTYM8uYS59I4i0cV1pf2wNctkzF5ZRgmufnMNAy%2FpQ1um%2Fjfs%2FZMbQ2YwgyXwl3wcHy9dglbz78plwKyQRE6oaJQPDGey3hOatjhwMZUehAXdmfi1GG%2B8HwfDouIheJxdceUKJ4TTwUcaMRkFdcoOynoVjKPZvnpMRHrtCFLUBrXn4r0vXQn3fvXFxgYG0YIoQ3Gt9A5mVSwsrL8hZ%2B3SSxphcwIYsQbVCwze8ZX01Rl2bVixV5QAcIA7i%2FIIyCRQSpQmM%2BIaCCk6tnYkGIani51s5QaLihSLgTxW3iqPDxglzGlf7zmqsUmYAn%2FBkAwz7SuwAY6pgHUFTgHZwn7kATwa7uQkRn9gg1PbCPWcbBoAqgPzKRIw1SG6W9Hwvuq0cSjf7gBk9gx9RDZ60B%2BLva2btyRqLPAwGPAgugVjO97BX%2FDpfGfQJiaLdPCibIsvSjkz%2B4Omlrbtxisa9b1Sb46biDAdwrTMQ2424KfDooCH5P2og%2F4sSwFInBmK2shLnWSsKaLH1A%2B50kRJCyNLXljOu%2BZmRdDs6SjkG38&X-Amz-Signature=68cc17f1aaf27d135c44d5ae8e72a9cf2c0607a03d96d91c62c9cef7fde30489&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KHEFASM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx8awRAG2bx8azNMpq96MUGSmEQT%2FiAj%2BMfO1iN%2BDcmAiAgkQ9ltWiHHd1rOPzVYTllwrUcjcBJ0rbJyVf0SG1j%2BCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMbevuMSTLKqdbGBx6KtwDrdm%2FC%2Fv14Gyn15ZGXfaP4VjcmvwN5diECZhiCgZxU0S9rBU6WJExNT6ZcKwm8B%2BjFzeHSLjRpFiMHiLFor2xSeZrE%2FtRnAbXwbJgDdtjHW2FrI0epjJWskTI3%2FdWNivLHgOu5PKqCzf2aVTUVT7CUkrtcGZWd2T1Ypf73IqzMm%2FJiYszDV5d5AG4LRsthMwRdhZ66%2F1nGLGwukHHeeRbFGkbEUlriKWWg9jDqAHb31GpVDAeEcTAu5fuhGGifpbI2wAhzdQOrd6dw8YiaOhRiMPFxuf6SFYVtyxgydQ%2FP%2BEii39lwIpNd48FJEDWfTYM8uYS59I4i0cV1pf2wNctkzF5ZRgmufnMNAy%2FpQ1um%2Fjfs%2FZMbQ2YwgyXwl3wcHy9dglbz78plwKyQRE6oaJQPDGey3hOatjhwMZUehAXdmfi1GG%2B8HwfDouIheJxdceUKJ4TTwUcaMRkFdcoOynoVjKPZvnpMRHrtCFLUBrXn4r0vXQn3fvXFxgYG0YIoQ3Gt9A5mVSwsrL8hZ%2B3SSxphcwIYsQbVCwze8ZX01Rl2bVixV5QAcIA7i%2FIIyCRQSpQmM%2BIaCCk6tnYkGIani51s5QaLihSLgTxW3iqPDxglzGlf7zmqsUmYAn%2FBkAwz7SuwAY6pgHUFTgHZwn7kATwa7uQkRn9gg1PbCPWcbBoAqgPzKRIw1SG6W9Hwvuq0cSjf7gBk9gx9RDZ60B%2BLva2btyRqLPAwGPAgugVjO97BX%2FDpfGfQJiaLdPCibIsvSjkz%2B4Omlrbtxisa9b1Sb46biDAdwrTMQ2424KfDooCH5P2og%2F4sSwFInBmK2shLnWSsKaLH1A%2B50kRJCyNLXljOu%2BZmRdDs6SjkG38&X-Amz-Signature=4cf2045873119d0725af9c223b956fe038054233444cc9549bc0bf3e53f84cbc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KHEFASM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx8awRAG2bx8azNMpq96MUGSmEQT%2FiAj%2BMfO1iN%2BDcmAiAgkQ9ltWiHHd1rOPzVYTllwrUcjcBJ0rbJyVf0SG1j%2BCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMbevuMSTLKqdbGBx6KtwDrdm%2FC%2Fv14Gyn15ZGXfaP4VjcmvwN5diECZhiCgZxU0S9rBU6WJExNT6ZcKwm8B%2BjFzeHSLjRpFiMHiLFor2xSeZrE%2FtRnAbXwbJgDdtjHW2FrI0epjJWskTI3%2FdWNivLHgOu5PKqCzf2aVTUVT7CUkrtcGZWd2T1Ypf73IqzMm%2FJiYszDV5d5AG4LRsthMwRdhZ66%2F1nGLGwukHHeeRbFGkbEUlriKWWg9jDqAHb31GpVDAeEcTAu5fuhGGifpbI2wAhzdQOrd6dw8YiaOhRiMPFxuf6SFYVtyxgydQ%2FP%2BEii39lwIpNd48FJEDWfTYM8uYS59I4i0cV1pf2wNctkzF5ZRgmufnMNAy%2FpQ1um%2Fjfs%2FZMbQ2YwgyXwl3wcHy9dglbz78plwKyQRE6oaJQPDGey3hOatjhwMZUehAXdmfi1GG%2B8HwfDouIheJxdceUKJ4TTwUcaMRkFdcoOynoVjKPZvnpMRHrtCFLUBrXn4r0vXQn3fvXFxgYG0YIoQ3Gt9A5mVSwsrL8hZ%2B3SSxphcwIYsQbVCwze8ZX01Rl2bVixV5QAcIA7i%2FIIyCRQSpQmM%2BIaCCk6tnYkGIani51s5QaLihSLgTxW3iqPDxglzGlf7zmqsUmYAn%2FBkAwz7SuwAY6pgHUFTgHZwn7kATwa7uQkRn9gg1PbCPWcbBoAqgPzKRIw1SG6W9Hwvuq0cSjf7gBk9gx9RDZ60B%2BLva2btyRqLPAwGPAgugVjO97BX%2FDpfGfQJiaLdPCibIsvSjkz%2B4Omlrbtxisa9b1Sb46biDAdwrTMQ2424KfDooCH5P2og%2F4sSwFInBmK2shLnWSsKaLH1A%2B50kRJCyNLXljOu%2BZmRdDs6SjkG38&X-Amz-Signature=f6f6ae8ee70df5f5bf4e639ef82b00509a2eaf49d07e0be010ed089e686f1db1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KHEFASM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx8awRAG2bx8azNMpq96MUGSmEQT%2FiAj%2BMfO1iN%2BDcmAiAgkQ9ltWiHHd1rOPzVYTllwrUcjcBJ0rbJyVf0SG1j%2BCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMbevuMSTLKqdbGBx6KtwDrdm%2FC%2Fv14Gyn15ZGXfaP4VjcmvwN5diECZhiCgZxU0S9rBU6WJExNT6ZcKwm8B%2BjFzeHSLjRpFiMHiLFor2xSeZrE%2FtRnAbXwbJgDdtjHW2FrI0epjJWskTI3%2FdWNivLHgOu5PKqCzf2aVTUVT7CUkrtcGZWd2T1Ypf73IqzMm%2FJiYszDV5d5AG4LRsthMwRdhZ66%2F1nGLGwukHHeeRbFGkbEUlriKWWg9jDqAHb31GpVDAeEcTAu5fuhGGifpbI2wAhzdQOrd6dw8YiaOhRiMPFxuf6SFYVtyxgydQ%2FP%2BEii39lwIpNd48FJEDWfTYM8uYS59I4i0cV1pf2wNctkzF5ZRgmufnMNAy%2FpQ1um%2Fjfs%2FZMbQ2YwgyXwl3wcHy9dglbz78plwKyQRE6oaJQPDGey3hOatjhwMZUehAXdmfi1GG%2B8HwfDouIheJxdceUKJ4TTwUcaMRkFdcoOynoVjKPZvnpMRHrtCFLUBrXn4r0vXQn3fvXFxgYG0YIoQ3Gt9A5mVSwsrL8hZ%2B3SSxphcwIYsQbVCwze8ZX01Rl2bVixV5QAcIA7i%2FIIyCRQSpQmM%2BIaCCk6tnYkGIani51s5QaLihSLgTxW3iqPDxglzGlf7zmqsUmYAn%2FBkAwz7SuwAY6pgHUFTgHZwn7kATwa7uQkRn9gg1PbCPWcbBoAqgPzKRIw1SG6W9Hwvuq0cSjf7gBk9gx9RDZ60B%2BLva2btyRqLPAwGPAgugVjO97BX%2FDpfGfQJiaLdPCibIsvSjkz%2B4Omlrbtxisa9b1Sb46biDAdwrTMQ2424KfDooCH5P2og%2F4sSwFInBmK2shLnWSsKaLH1A%2B50kRJCyNLXljOu%2BZmRdDs6SjkG38&X-Amz-Signature=6e991b13b0c81577d1a2dd2a5642d8345b4373f189fb3fc6ff6b4229050b4aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
