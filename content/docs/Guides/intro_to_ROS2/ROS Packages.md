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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK62MLP4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIG8KwLPya0gIQ9mG7nZMyeR8d847v301G4m2rrEqxlFLAiAevTFyk%2BJ8%2BT7BCP8kD%2FMcAsDen4BliymwgxGHDiBvEyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMXpAeO2y9mAIIWo3KtwDE50FqgUMW%2FYFUpobqT4nBu8knfnQECy7WSCdDU1ypxolchULxsyydt6m7%2F%2BN0FIZ0b5imQzWw%2B4sJ53LGXeDPoCI0%2F5Iuz3pNxq0oXx5YFkhtGWMI11CM94gEz0yoqz9QbRc6SiJRjUDtal35mFJ0aFGng66uXSUyDVjg%2FNSVz0xrb8PIblzBWaLffcJc42GdZs5Cj0RWsj0uPVxu8pbQbKjCcV%2BoI%2BtkUdTxL3xuAAJQeFOUv5Ct2o5h0cixtzWwa0olMlfsbRt0pogj%2B7l%2BWKnCL11YnZAA0LNEiKHYtNQDzpgsWGF%2BDGLxZMGUBA%2FzPnr54pqDq89dd8XTHX3U%2BjvDlD9MmNjKukyJMszk87XqE8%2BCMm3yNSDytUSrYVvIfJaKU6XeQuuit47Uk%2FahEw0PSQmo5D%2BxCWpp02PJkCsP90xwJDmMTNvPVHPQUvAUH1oxvzjM8bs5W%2BP5%2FYw%2FxgtX0pIZfFZx%2BdpAIuE5%2B05Rn6avA8ijkwrOSLR729xlQZYRT973SS%2BjvgD%2BakSSk5mooRFDrXYPb4f%2Bn6jmr20TpA884TSaGlHunZifdyknqJpmSCsHXxv60C1k6YyRmnoZ8Gkn4bOAei28lpk1Qlx2hrqfk8fPijzPXww5rmfxAY6pgF3%2FM%2F%2FaHnoS3wu8SL%2FUGaJsBFF5tQJsVPNBBmUKx8Jl4qCMxUgzONL7s4HMn3R8fgE2%2FracmmvUdVeyURXRxLt8YN53YA9Oh%2BKpt2BWi20XlTvJN8h0wZvsz9czpXpcv8hI2rw%2BUyd84OGD1lyAST85HnACAKM%2Bl44m7GwRmlArf%2F%2BfSZlSadoVEctfdCYpV9ebHNz7ZKlZtGNXRt5%2BkT6%2B7YCOHxt&X-Amz-Signature=1a8c7226842c4ad282407a1e3eab079f86299f738612cbd0b5224122c851e3ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK62MLP4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIG8KwLPya0gIQ9mG7nZMyeR8d847v301G4m2rrEqxlFLAiAevTFyk%2BJ8%2BT7BCP8kD%2FMcAsDen4BliymwgxGHDiBvEyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMXpAeO2y9mAIIWo3KtwDE50FqgUMW%2FYFUpobqT4nBu8knfnQECy7WSCdDU1ypxolchULxsyydt6m7%2F%2BN0FIZ0b5imQzWw%2B4sJ53LGXeDPoCI0%2F5Iuz3pNxq0oXx5YFkhtGWMI11CM94gEz0yoqz9QbRc6SiJRjUDtal35mFJ0aFGng66uXSUyDVjg%2FNSVz0xrb8PIblzBWaLffcJc42GdZs5Cj0RWsj0uPVxu8pbQbKjCcV%2BoI%2BtkUdTxL3xuAAJQeFOUv5Ct2o5h0cixtzWwa0olMlfsbRt0pogj%2B7l%2BWKnCL11YnZAA0LNEiKHYtNQDzpgsWGF%2BDGLxZMGUBA%2FzPnr54pqDq89dd8XTHX3U%2BjvDlD9MmNjKukyJMszk87XqE8%2BCMm3yNSDytUSrYVvIfJaKU6XeQuuit47Uk%2FahEw0PSQmo5D%2BxCWpp02PJkCsP90xwJDmMTNvPVHPQUvAUH1oxvzjM8bs5W%2BP5%2FYw%2FxgtX0pIZfFZx%2BdpAIuE5%2B05Rn6avA8ijkwrOSLR729xlQZYRT973SS%2BjvgD%2BakSSk5mooRFDrXYPb4f%2Bn6jmr20TpA884TSaGlHunZifdyknqJpmSCsHXxv60C1k6YyRmnoZ8Gkn4bOAei28lpk1Qlx2hrqfk8fPijzPXww5rmfxAY6pgF3%2FM%2F%2FaHnoS3wu8SL%2FUGaJsBFF5tQJsVPNBBmUKx8Jl4qCMxUgzONL7s4HMn3R8fgE2%2FracmmvUdVeyURXRxLt8YN53YA9Oh%2BKpt2BWi20XlTvJN8h0wZvsz9czpXpcv8hI2rw%2BUyd84OGD1lyAST85HnACAKM%2Bl44m7GwRmlArf%2F%2BfSZlSadoVEctfdCYpV9ebHNz7ZKlZtGNXRt5%2BkT6%2B7YCOHxt&X-Amz-Signature=773f3d2003daaab2caf0427eced1a8539bdbfe656d96f6b1911a000690653824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK62MLP4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIG8KwLPya0gIQ9mG7nZMyeR8d847v301G4m2rrEqxlFLAiAevTFyk%2BJ8%2BT7BCP8kD%2FMcAsDen4BliymwgxGHDiBvEyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMXpAeO2y9mAIIWo3KtwDE50FqgUMW%2FYFUpobqT4nBu8knfnQECy7WSCdDU1ypxolchULxsyydt6m7%2F%2BN0FIZ0b5imQzWw%2B4sJ53LGXeDPoCI0%2F5Iuz3pNxq0oXx5YFkhtGWMI11CM94gEz0yoqz9QbRc6SiJRjUDtal35mFJ0aFGng66uXSUyDVjg%2FNSVz0xrb8PIblzBWaLffcJc42GdZs5Cj0RWsj0uPVxu8pbQbKjCcV%2BoI%2BtkUdTxL3xuAAJQeFOUv5Ct2o5h0cixtzWwa0olMlfsbRt0pogj%2B7l%2BWKnCL11YnZAA0LNEiKHYtNQDzpgsWGF%2BDGLxZMGUBA%2FzPnr54pqDq89dd8XTHX3U%2BjvDlD9MmNjKukyJMszk87XqE8%2BCMm3yNSDytUSrYVvIfJaKU6XeQuuit47Uk%2FahEw0PSQmo5D%2BxCWpp02PJkCsP90xwJDmMTNvPVHPQUvAUH1oxvzjM8bs5W%2BP5%2FYw%2FxgtX0pIZfFZx%2BdpAIuE5%2B05Rn6avA8ijkwrOSLR729xlQZYRT973SS%2BjvgD%2BakSSk5mooRFDrXYPb4f%2Bn6jmr20TpA884TSaGlHunZifdyknqJpmSCsHXxv60C1k6YyRmnoZ8Gkn4bOAei28lpk1Qlx2hrqfk8fPijzPXww5rmfxAY6pgF3%2FM%2F%2FaHnoS3wu8SL%2FUGaJsBFF5tQJsVPNBBmUKx8Jl4qCMxUgzONL7s4HMn3R8fgE2%2FracmmvUdVeyURXRxLt8YN53YA9Oh%2BKpt2BWi20XlTvJN8h0wZvsz9czpXpcv8hI2rw%2BUyd84OGD1lyAST85HnACAKM%2Bl44m7GwRmlArf%2F%2BfSZlSadoVEctfdCYpV9ebHNz7ZKlZtGNXRt5%2BkT6%2B7YCOHxt&X-Amz-Signature=79b2bdafdc0dc9b79c1c45dc8ba37185c70a50cd4c8f977508fe612208bd8c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK62MLP4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIG8KwLPya0gIQ9mG7nZMyeR8d847v301G4m2rrEqxlFLAiAevTFyk%2BJ8%2BT7BCP8kD%2FMcAsDen4BliymwgxGHDiBvEyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMXpAeO2y9mAIIWo3KtwDE50FqgUMW%2FYFUpobqT4nBu8knfnQECy7WSCdDU1ypxolchULxsyydt6m7%2F%2BN0FIZ0b5imQzWw%2B4sJ53LGXeDPoCI0%2F5Iuz3pNxq0oXx5YFkhtGWMI11CM94gEz0yoqz9QbRc6SiJRjUDtal35mFJ0aFGng66uXSUyDVjg%2FNSVz0xrb8PIblzBWaLffcJc42GdZs5Cj0RWsj0uPVxu8pbQbKjCcV%2BoI%2BtkUdTxL3xuAAJQeFOUv5Ct2o5h0cixtzWwa0olMlfsbRt0pogj%2B7l%2BWKnCL11YnZAA0LNEiKHYtNQDzpgsWGF%2BDGLxZMGUBA%2FzPnr54pqDq89dd8XTHX3U%2BjvDlD9MmNjKukyJMszk87XqE8%2BCMm3yNSDytUSrYVvIfJaKU6XeQuuit47Uk%2FahEw0PSQmo5D%2BxCWpp02PJkCsP90xwJDmMTNvPVHPQUvAUH1oxvzjM8bs5W%2BP5%2FYw%2FxgtX0pIZfFZx%2BdpAIuE5%2B05Rn6avA8ijkwrOSLR729xlQZYRT973SS%2BjvgD%2BakSSk5mooRFDrXYPb4f%2Bn6jmr20TpA884TSaGlHunZifdyknqJpmSCsHXxv60C1k6YyRmnoZ8Gkn4bOAei28lpk1Qlx2hrqfk8fPijzPXww5rmfxAY6pgF3%2FM%2F%2FaHnoS3wu8SL%2FUGaJsBFF5tQJsVPNBBmUKx8Jl4qCMxUgzONL7s4HMn3R8fgE2%2FracmmvUdVeyURXRxLt8YN53YA9Oh%2BKpt2BWi20XlTvJN8h0wZvsz9czpXpcv8hI2rw%2BUyd84OGD1lyAST85HnACAKM%2Bl44m7GwRmlArf%2F%2BfSZlSadoVEctfdCYpV9ebHNz7ZKlZtGNXRt5%2BkT6%2B7YCOHxt&X-Amz-Signature=fb243ddc2912690e1067b714c1438e114912b8b1ab69aa13cf419ac170c41d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK62MLP4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIG8KwLPya0gIQ9mG7nZMyeR8d847v301G4m2rrEqxlFLAiAevTFyk%2BJ8%2BT7BCP8kD%2FMcAsDen4BliymwgxGHDiBvEyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMXpAeO2y9mAIIWo3KtwDE50FqgUMW%2FYFUpobqT4nBu8knfnQECy7WSCdDU1ypxolchULxsyydt6m7%2F%2BN0FIZ0b5imQzWw%2B4sJ53LGXeDPoCI0%2F5Iuz3pNxq0oXx5YFkhtGWMI11CM94gEz0yoqz9QbRc6SiJRjUDtal35mFJ0aFGng66uXSUyDVjg%2FNSVz0xrb8PIblzBWaLffcJc42GdZs5Cj0RWsj0uPVxu8pbQbKjCcV%2BoI%2BtkUdTxL3xuAAJQeFOUv5Ct2o5h0cixtzWwa0olMlfsbRt0pogj%2B7l%2BWKnCL11YnZAA0LNEiKHYtNQDzpgsWGF%2BDGLxZMGUBA%2FzPnr54pqDq89dd8XTHX3U%2BjvDlD9MmNjKukyJMszk87XqE8%2BCMm3yNSDytUSrYVvIfJaKU6XeQuuit47Uk%2FahEw0PSQmo5D%2BxCWpp02PJkCsP90xwJDmMTNvPVHPQUvAUH1oxvzjM8bs5W%2BP5%2FYw%2FxgtX0pIZfFZx%2BdpAIuE5%2B05Rn6avA8ijkwrOSLR729xlQZYRT973SS%2BjvgD%2BakSSk5mooRFDrXYPb4f%2Bn6jmr20TpA884TSaGlHunZifdyknqJpmSCsHXxv60C1k6YyRmnoZ8Gkn4bOAei28lpk1Qlx2hrqfk8fPijzPXww5rmfxAY6pgF3%2FM%2F%2FaHnoS3wu8SL%2FUGaJsBFF5tQJsVPNBBmUKx8Jl4qCMxUgzONL7s4HMn3R8fgE2%2FracmmvUdVeyURXRxLt8YN53YA9Oh%2BKpt2BWi20XlTvJN8h0wZvsz9czpXpcv8hI2rw%2BUyd84OGD1lyAST85HnACAKM%2Bl44m7GwRmlArf%2F%2BfSZlSadoVEctfdCYpV9ebHNz7ZKlZtGNXRt5%2BkT6%2B7YCOHxt&X-Amz-Signature=4572e3cc058a1edf138594b67e0d0ccbc1d8fc25607b6fda060c1f3401420c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK62MLP4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIG8KwLPya0gIQ9mG7nZMyeR8d847v301G4m2rrEqxlFLAiAevTFyk%2BJ8%2BT7BCP8kD%2FMcAsDen4BliymwgxGHDiBvEyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMXpAeO2y9mAIIWo3KtwDE50FqgUMW%2FYFUpobqT4nBu8knfnQECy7WSCdDU1ypxolchULxsyydt6m7%2F%2BN0FIZ0b5imQzWw%2B4sJ53LGXeDPoCI0%2F5Iuz3pNxq0oXx5YFkhtGWMI11CM94gEz0yoqz9QbRc6SiJRjUDtal35mFJ0aFGng66uXSUyDVjg%2FNSVz0xrb8PIblzBWaLffcJc42GdZs5Cj0RWsj0uPVxu8pbQbKjCcV%2BoI%2BtkUdTxL3xuAAJQeFOUv5Ct2o5h0cixtzWwa0olMlfsbRt0pogj%2B7l%2BWKnCL11YnZAA0LNEiKHYtNQDzpgsWGF%2BDGLxZMGUBA%2FzPnr54pqDq89dd8XTHX3U%2BjvDlD9MmNjKukyJMszk87XqE8%2BCMm3yNSDytUSrYVvIfJaKU6XeQuuit47Uk%2FahEw0PSQmo5D%2BxCWpp02PJkCsP90xwJDmMTNvPVHPQUvAUH1oxvzjM8bs5W%2BP5%2FYw%2FxgtX0pIZfFZx%2BdpAIuE5%2B05Rn6avA8ijkwrOSLR729xlQZYRT973SS%2BjvgD%2BakSSk5mooRFDrXYPb4f%2Bn6jmr20TpA884TSaGlHunZifdyknqJpmSCsHXxv60C1k6YyRmnoZ8Gkn4bOAei28lpk1Qlx2hrqfk8fPijzPXww5rmfxAY6pgF3%2FM%2F%2FaHnoS3wu8SL%2FUGaJsBFF5tQJsVPNBBmUKx8Jl4qCMxUgzONL7s4HMn3R8fgE2%2FracmmvUdVeyURXRxLt8YN53YA9Oh%2BKpt2BWi20XlTvJN8h0wZvsz9czpXpcv8hI2rw%2BUyd84OGD1lyAST85HnACAKM%2Bl44m7GwRmlArf%2F%2BfSZlSadoVEctfdCYpV9ebHNz7ZKlZtGNXRt5%2BkT6%2B7YCOHxt&X-Amz-Signature=977594cb47240190d06f92501edc0a3a68eb5943ac5c36177d741a8c05964705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK62MLP4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIG8KwLPya0gIQ9mG7nZMyeR8d847v301G4m2rrEqxlFLAiAevTFyk%2BJ8%2BT7BCP8kD%2FMcAsDen4BliymwgxGHDiBvEyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMXpAeO2y9mAIIWo3KtwDE50FqgUMW%2FYFUpobqT4nBu8knfnQECy7WSCdDU1ypxolchULxsyydt6m7%2F%2BN0FIZ0b5imQzWw%2B4sJ53LGXeDPoCI0%2F5Iuz3pNxq0oXx5YFkhtGWMI11CM94gEz0yoqz9QbRc6SiJRjUDtal35mFJ0aFGng66uXSUyDVjg%2FNSVz0xrb8PIblzBWaLffcJc42GdZs5Cj0RWsj0uPVxu8pbQbKjCcV%2BoI%2BtkUdTxL3xuAAJQeFOUv5Ct2o5h0cixtzWwa0olMlfsbRt0pogj%2B7l%2BWKnCL11YnZAA0LNEiKHYtNQDzpgsWGF%2BDGLxZMGUBA%2FzPnr54pqDq89dd8XTHX3U%2BjvDlD9MmNjKukyJMszk87XqE8%2BCMm3yNSDytUSrYVvIfJaKU6XeQuuit47Uk%2FahEw0PSQmo5D%2BxCWpp02PJkCsP90xwJDmMTNvPVHPQUvAUH1oxvzjM8bs5W%2BP5%2FYw%2FxgtX0pIZfFZx%2BdpAIuE5%2B05Rn6avA8ijkwrOSLR729xlQZYRT973SS%2BjvgD%2BakSSk5mooRFDrXYPb4f%2Bn6jmr20TpA884TSaGlHunZifdyknqJpmSCsHXxv60C1k6YyRmnoZ8Gkn4bOAei28lpk1Qlx2hrqfk8fPijzPXww5rmfxAY6pgF3%2FM%2F%2FaHnoS3wu8SL%2FUGaJsBFF5tQJsVPNBBmUKx8Jl4qCMxUgzONL7s4HMn3R8fgE2%2FracmmvUdVeyURXRxLt8YN53YA9Oh%2BKpt2BWi20XlTvJN8h0wZvsz9czpXpcv8hI2rw%2BUyd84OGD1lyAST85HnACAKM%2Bl44m7GwRmlArf%2F%2BfSZlSadoVEctfdCYpV9ebHNz7ZKlZtGNXRt5%2BkT6%2B7YCOHxt&X-Amz-Signature=df361d067487f8183329258ada24929dc6a1019dd470912911b3aae7a529b870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
