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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7P6VAIY%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9W5nyqSjLW%2FroFpZoP8oMQSh5Vz0dQ0yE6KNEperl0AIhAI%2FE0PAoenaw2KMjNeaOfd8LQzO4KMpPUygVgQv01ID%2BKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNsneBTmjzzXPpiiwq3AN6nTNqh9HzD9Vsg6UfyFVyU03iqllg1zFv47Gx9YGkSwYMccKArh%2F7aUrf5zbhUjrixVCLTaMIe5jdBWxlaqdbWGpNCQxjTuKAThX5r%2FKYIl7B1guJBE9EjV%2Ftr7uHzc2MQ4twFH345%2F75zDCggeHcmBs%2BLZnbz2ghLDweNagI232FDO3MDze65yV0Cpm5xyqc4ORB3jTJPDi1dIpYZVdVXbZUWh3Q8XnOoJ%2BGk1%2FoSaJGMHw5AsW2%2BEXmCcKY4tRKmNuCObX3u7geS59ur6Ui%2BLYXFu3YhoWUPHQsxajO5Q2PAc2btpZI%2BL8dQ5U0K508zkAmkmhSTftrNPdrkGAvvXkLU2Ct5w0W%2BsHAge3tGgjE92IXKs%2B%2Fvwd7NS%2Bjx%2BGv8oBFXAICvdAA7xV0d2QWmOVz7mWblI40i2J89baJD2pPfu0HgkgcFhuw4gRLt38jqWHrwmEaxwcXMZDC9qFfQ8R9%2FFo3njYH6pl%2BxW3fQvyUIKft2OKBUO8eMGtQOddYWrzsdpL2lpcBd8I7l48zgNPGl4IVIvEWAcQOX8DipGNBPaD7uv7I45bjiyNYgMBfQIItO39TcNkzjDpNmg99sm%2BmyIw7BDcc%2BZU3Nwgk5SjMwUsJ2n3sWZTCWzChr%2BvBBjqkAVmsZMgEcF1%2FMxWs8B4322uo5Sg7tKBxKz1CWNjiPIG9fN%2BrHFO8r3Z%2BrlZdU4e7pnzGnhFh1BE8XpAklO4mOvoiFgiZWdLvFwDEEGd764qJwEmnzwizpIZoVsg27eE%2BzRgBq67z0%2Ft4gjWfvXqgrUtFfcC8Gd2Hk4QMdRkP6a%2BATMxc%2FvYRkpaX%2FDfsljniJBPFrtHe9MW3VPzJIMKOZ78JjYuN&X-Amz-Signature=59f03e2a1d3fabef1d7a2061dab85cb1825dcfa6070c33701de727e6d1bc31e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7P6VAIY%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9W5nyqSjLW%2FroFpZoP8oMQSh5Vz0dQ0yE6KNEperl0AIhAI%2FE0PAoenaw2KMjNeaOfd8LQzO4KMpPUygVgQv01ID%2BKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNsneBTmjzzXPpiiwq3AN6nTNqh9HzD9Vsg6UfyFVyU03iqllg1zFv47Gx9YGkSwYMccKArh%2F7aUrf5zbhUjrixVCLTaMIe5jdBWxlaqdbWGpNCQxjTuKAThX5r%2FKYIl7B1guJBE9EjV%2Ftr7uHzc2MQ4twFH345%2F75zDCggeHcmBs%2BLZnbz2ghLDweNagI232FDO3MDze65yV0Cpm5xyqc4ORB3jTJPDi1dIpYZVdVXbZUWh3Q8XnOoJ%2BGk1%2FoSaJGMHw5AsW2%2BEXmCcKY4tRKmNuCObX3u7geS59ur6Ui%2BLYXFu3YhoWUPHQsxajO5Q2PAc2btpZI%2BL8dQ5U0K508zkAmkmhSTftrNPdrkGAvvXkLU2Ct5w0W%2BsHAge3tGgjE92IXKs%2B%2Fvwd7NS%2Bjx%2BGv8oBFXAICvdAA7xV0d2QWmOVz7mWblI40i2J89baJD2pPfu0HgkgcFhuw4gRLt38jqWHrwmEaxwcXMZDC9qFfQ8R9%2FFo3njYH6pl%2BxW3fQvyUIKft2OKBUO8eMGtQOddYWrzsdpL2lpcBd8I7l48zgNPGl4IVIvEWAcQOX8DipGNBPaD7uv7I45bjiyNYgMBfQIItO39TcNkzjDpNmg99sm%2BmyIw7BDcc%2BZU3Nwgk5SjMwUsJ2n3sWZTCWzChr%2BvBBjqkAVmsZMgEcF1%2FMxWs8B4322uo5Sg7tKBxKz1CWNjiPIG9fN%2BrHFO8r3Z%2BrlZdU4e7pnzGnhFh1BE8XpAklO4mOvoiFgiZWdLvFwDEEGd764qJwEmnzwizpIZoVsg27eE%2BzRgBq67z0%2Ft4gjWfvXqgrUtFfcC8Gd2Hk4QMdRkP6a%2BATMxc%2FvYRkpaX%2FDfsljniJBPFrtHe9MW3VPzJIMKOZ78JjYuN&X-Amz-Signature=eb5b19957f5810db6b2ec1345066e774156731d00f89c9acceed278cdfa58a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7P6VAIY%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9W5nyqSjLW%2FroFpZoP8oMQSh5Vz0dQ0yE6KNEperl0AIhAI%2FE0PAoenaw2KMjNeaOfd8LQzO4KMpPUygVgQv01ID%2BKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNsneBTmjzzXPpiiwq3AN6nTNqh9HzD9Vsg6UfyFVyU03iqllg1zFv47Gx9YGkSwYMccKArh%2F7aUrf5zbhUjrixVCLTaMIe5jdBWxlaqdbWGpNCQxjTuKAThX5r%2FKYIl7B1guJBE9EjV%2Ftr7uHzc2MQ4twFH345%2F75zDCggeHcmBs%2BLZnbz2ghLDweNagI232FDO3MDze65yV0Cpm5xyqc4ORB3jTJPDi1dIpYZVdVXbZUWh3Q8XnOoJ%2BGk1%2FoSaJGMHw5AsW2%2BEXmCcKY4tRKmNuCObX3u7geS59ur6Ui%2BLYXFu3YhoWUPHQsxajO5Q2PAc2btpZI%2BL8dQ5U0K508zkAmkmhSTftrNPdrkGAvvXkLU2Ct5w0W%2BsHAge3tGgjE92IXKs%2B%2Fvwd7NS%2Bjx%2BGv8oBFXAICvdAA7xV0d2QWmOVz7mWblI40i2J89baJD2pPfu0HgkgcFhuw4gRLt38jqWHrwmEaxwcXMZDC9qFfQ8R9%2FFo3njYH6pl%2BxW3fQvyUIKft2OKBUO8eMGtQOddYWrzsdpL2lpcBd8I7l48zgNPGl4IVIvEWAcQOX8DipGNBPaD7uv7I45bjiyNYgMBfQIItO39TcNkzjDpNmg99sm%2BmyIw7BDcc%2BZU3Nwgk5SjMwUsJ2n3sWZTCWzChr%2BvBBjqkAVmsZMgEcF1%2FMxWs8B4322uo5Sg7tKBxKz1CWNjiPIG9fN%2BrHFO8r3Z%2BrlZdU4e7pnzGnhFh1BE8XpAklO4mOvoiFgiZWdLvFwDEEGd764qJwEmnzwizpIZoVsg27eE%2BzRgBq67z0%2Ft4gjWfvXqgrUtFfcC8Gd2Hk4QMdRkP6a%2BATMxc%2FvYRkpaX%2FDfsljniJBPFrtHe9MW3VPzJIMKOZ78JjYuN&X-Amz-Signature=6fe670a7d7fdb4a40581f44df425191676c8a68c4dc555664281334255f9be75&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7P6VAIY%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9W5nyqSjLW%2FroFpZoP8oMQSh5Vz0dQ0yE6KNEperl0AIhAI%2FE0PAoenaw2KMjNeaOfd8LQzO4KMpPUygVgQv01ID%2BKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNsneBTmjzzXPpiiwq3AN6nTNqh9HzD9Vsg6UfyFVyU03iqllg1zFv47Gx9YGkSwYMccKArh%2F7aUrf5zbhUjrixVCLTaMIe5jdBWxlaqdbWGpNCQxjTuKAThX5r%2FKYIl7B1guJBE9EjV%2Ftr7uHzc2MQ4twFH345%2F75zDCggeHcmBs%2BLZnbz2ghLDweNagI232FDO3MDze65yV0Cpm5xyqc4ORB3jTJPDi1dIpYZVdVXbZUWh3Q8XnOoJ%2BGk1%2FoSaJGMHw5AsW2%2BEXmCcKY4tRKmNuCObX3u7geS59ur6Ui%2BLYXFu3YhoWUPHQsxajO5Q2PAc2btpZI%2BL8dQ5U0K508zkAmkmhSTftrNPdrkGAvvXkLU2Ct5w0W%2BsHAge3tGgjE92IXKs%2B%2Fvwd7NS%2Bjx%2BGv8oBFXAICvdAA7xV0d2QWmOVz7mWblI40i2J89baJD2pPfu0HgkgcFhuw4gRLt38jqWHrwmEaxwcXMZDC9qFfQ8R9%2FFo3njYH6pl%2BxW3fQvyUIKft2OKBUO8eMGtQOddYWrzsdpL2lpcBd8I7l48zgNPGl4IVIvEWAcQOX8DipGNBPaD7uv7I45bjiyNYgMBfQIItO39TcNkzjDpNmg99sm%2BmyIw7BDcc%2BZU3Nwgk5SjMwUsJ2n3sWZTCWzChr%2BvBBjqkAVmsZMgEcF1%2FMxWs8B4322uo5Sg7tKBxKz1CWNjiPIG9fN%2BrHFO8r3Z%2BrlZdU4e7pnzGnhFh1BE8XpAklO4mOvoiFgiZWdLvFwDEEGd764qJwEmnzwizpIZoVsg27eE%2BzRgBq67z0%2Ft4gjWfvXqgrUtFfcC8Gd2Hk4QMdRkP6a%2BATMxc%2FvYRkpaX%2FDfsljniJBPFrtHe9MW3VPzJIMKOZ78JjYuN&X-Amz-Signature=40c7958fdf9e1f6b3170eb4075fbe08d30b0e6bc5dc56b4b3789483dc5ae699f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7P6VAIY%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9W5nyqSjLW%2FroFpZoP8oMQSh5Vz0dQ0yE6KNEperl0AIhAI%2FE0PAoenaw2KMjNeaOfd8LQzO4KMpPUygVgQv01ID%2BKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNsneBTmjzzXPpiiwq3AN6nTNqh9HzD9Vsg6UfyFVyU03iqllg1zFv47Gx9YGkSwYMccKArh%2F7aUrf5zbhUjrixVCLTaMIe5jdBWxlaqdbWGpNCQxjTuKAThX5r%2FKYIl7B1guJBE9EjV%2Ftr7uHzc2MQ4twFH345%2F75zDCggeHcmBs%2BLZnbz2ghLDweNagI232FDO3MDze65yV0Cpm5xyqc4ORB3jTJPDi1dIpYZVdVXbZUWh3Q8XnOoJ%2BGk1%2FoSaJGMHw5AsW2%2BEXmCcKY4tRKmNuCObX3u7geS59ur6Ui%2BLYXFu3YhoWUPHQsxajO5Q2PAc2btpZI%2BL8dQ5U0K508zkAmkmhSTftrNPdrkGAvvXkLU2Ct5w0W%2BsHAge3tGgjE92IXKs%2B%2Fvwd7NS%2Bjx%2BGv8oBFXAICvdAA7xV0d2QWmOVz7mWblI40i2J89baJD2pPfu0HgkgcFhuw4gRLt38jqWHrwmEaxwcXMZDC9qFfQ8R9%2FFo3njYH6pl%2BxW3fQvyUIKft2OKBUO8eMGtQOddYWrzsdpL2lpcBd8I7l48zgNPGl4IVIvEWAcQOX8DipGNBPaD7uv7I45bjiyNYgMBfQIItO39TcNkzjDpNmg99sm%2BmyIw7BDcc%2BZU3Nwgk5SjMwUsJ2n3sWZTCWzChr%2BvBBjqkAVmsZMgEcF1%2FMxWs8B4322uo5Sg7tKBxKz1CWNjiPIG9fN%2BrHFO8r3Z%2BrlZdU4e7pnzGnhFh1BE8XpAklO4mOvoiFgiZWdLvFwDEEGd764qJwEmnzwizpIZoVsg27eE%2BzRgBq67z0%2Ft4gjWfvXqgrUtFfcC8Gd2Hk4QMdRkP6a%2BATMxc%2FvYRkpaX%2FDfsljniJBPFrtHe9MW3VPzJIMKOZ78JjYuN&X-Amz-Signature=f85401f45f52916511e3b2520481388036309e7a9f763933d56d1dacc8a2f4f9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7P6VAIY%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9W5nyqSjLW%2FroFpZoP8oMQSh5Vz0dQ0yE6KNEperl0AIhAI%2FE0PAoenaw2KMjNeaOfd8LQzO4KMpPUygVgQv01ID%2BKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNsneBTmjzzXPpiiwq3AN6nTNqh9HzD9Vsg6UfyFVyU03iqllg1zFv47Gx9YGkSwYMccKArh%2F7aUrf5zbhUjrixVCLTaMIe5jdBWxlaqdbWGpNCQxjTuKAThX5r%2FKYIl7B1guJBE9EjV%2Ftr7uHzc2MQ4twFH345%2F75zDCggeHcmBs%2BLZnbz2ghLDweNagI232FDO3MDze65yV0Cpm5xyqc4ORB3jTJPDi1dIpYZVdVXbZUWh3Q8XnOoJ%2BGk1%2FoSaJGMHw5AsW2%2BEXmCcKY4tRKmNuCObX3u7geS59ur6Ui%2BLYXFu3YhoWUPHQsxajO5Q2PAc2btpZI%2BL8dQ5U0K508zkAmkmhSTftrNPdrkGAvvXkLU2Ct5w0W%2BsHAge3tGgjE92IXKs%2B%2Fvwd7NS%2Bjx%2BGv8oBFXAICvdAA7xV0d2QWmOVz7mWblI40i2J89baJD2pPfu0HgkgcFhuw4gRLt38jqWHrwmEaxwcXMZDC9qFfQ8R9%2FFo3njYH6pl%2BxW3fQvyUIKft2OKBUO8eMGtQOddYWrzsdpL2lpcBd8I7l48zgNPGl4IVIvEWAcQOX8DipGNBPaD7uv7I45bjiyNYgMBfQIItO39TcNkzjDpNmg99sm%2BmyIw7BDcc%2BZU3Nwgk5SjMwUsJ2n3sWZTCWzChr%2BvBBjqkAVmsZMgEcF1%2FMxWs8B4322uo5Sg7tKBxKz1CWNjiPIG9fN%2BrHFO8r3Z%2BrlZdU4e7pnzGnhFh1BE8XpAklO4mOvoiFgiZWdLvFwDEEGd764qJwEmnzwizpIZoVsg27eE%2BzRgBq67z0%2Ft4gjWfvXqgrUtFfcC8Gd2Hk4QMdRkP6a%2BATMxc%2FvYRkpaX%2FDfsljniJBPFrtHe9MW3VPzJIMKOZ78JjYuN&X-Amz-Signature=4e9649204b330cb0bc70aac689337ddf863e6c892449ad1290091da8a6e5fc10&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7P6VAIY%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9W5nyqSjLW%2FroFpZoP8oMQSh5Vz0dQ0yE6KNEperl0AIhAI%2FE0PAoenaw2KMjNeaOfd8LQzO4KMpPUygVgQv01ID%2BKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNsneBTmjzzXPpiiwq3AN6nTNqh9HzD9Vsg6UfyFVyU03iqllg1zFv47Gx9YGkSwYMccKArh%2F7aUrf5zbhUjrixVCLTaMIe5jdBWxlaqdbWGpNCQxjTuKAThX5r%2FKYIl7B1guJBE9EjV%2Ftr7uHzc2MQ4twFH345%2F75zDCggeHcmBs%2BLZnbz2ghLDweNagI232FDO3MDze65yV0Cpm5xyqc4ORB3jTJPDi1dIpYZVdVXbZUWh3Q8XnOoJ%2BGk1%2FoSaJGMHw5AsW2%2BEXmCcKY4tRKmNuCObX3u7geS59ur6Ui%2BLYXFu3YhoWUPHQsxajO5Q2PAc2btpZI%2BL8dQ5U0K508zkAmkmhSTftrNPdrkGAvvXkLU2Ct5w0W%2BsHAge3tGgjE92IXKs%2B%2Fvwd7NS%2Bjx%2BGv8oBFXAICvdAA7xV0d2QWmOVz7mWblI40i2J89baJD2pPfu0HgkgcFhuw4gRLt38jqWHrwmEaxwcXMZDC9qFfQ8R9%2FFo3njYH6pl%2BxW3fQvyUIKft2OKBUO8eMGtQOddYWrzsdpL2lpcBd8I7l48zgNPGl4IVIvEWAcQOX8DipGNBPaD7uv7I45bjiyNYgMBfQIItO39TcNkzjDpNmg99sm%2BmyIw7BDcc%2BZU3Nwgk5SjMwUsJ2n3sWZTCWzChr%2BvBBjqkAVmsZMgEcF1%2FMxWs8B4322uo5Sg7tKBxKz1CWNjiPIG9fN%2BrHFO8r3Z%2BrlZdU4e7pnzGnhFh1BE8XpAklO4mOvoiFgiZWdLvFwDEEGd764qJwEmnzwizpIZoVsg27eE%2BzRgBq67z0%2Ft4gjWfvXqgrUtFfcC8Gd2Hk4QMdRkP6a%2BATMxc%2FvYRkpaX%2FDfsljniJBPFrtHe9MW3VPzJIMKOZ78JjYuN&X-Amz-Signature=c1d51bf53da44c09f1e9b31e8e418b70d98ce53543b1b21e86a42fd28fdb2998&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
