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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YK6NIH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzD7XA%2F7ceY1sjm8JNSGJ1hN2BlusWePfJsI2hHg25NAiB3orknsCdM%2FZo58QXntOSk%2BjDnSKxIC3JVVl6wgeqnkSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BhlnRXRa62dctKVlKtwDy%2F2WcUQ2axyAiuAIgWUQ2m917Ui6ylYlXUlHAa10MO%2BvtA3rx3NdlRMPTlfn5wfHW8vzFx83slnHLBK1nt%2FUowHeS9c2pt2d41tWPpj6qfV5EHX136SmoBFtUt4p%2BbK3528FayE6OI7DS%2Fz5fVq1XEPbh3Uo5%2F1pUhqkFXirhL020n3pYYL1k51pVGSH2Wrsi6hZrQ4NVVNatOQcvrinxs%2BfUJkuuyrGalqGRz%2F8vfFlII7QyJlwFQl%2FAbNAiLO%2FnFwwEN6FGSRlazb71Hnvnj93vxO4xW0ItEy4s7dxB9fO3HkBNOR2MKjWV5l7va4r7xUdVL76XzM1j7uIhTfG69KinFFg%2FnAZh1C8oCD84aqvXWNCJQQE1fOsjt8oF349wxaxxVjfTynL%2B%2ForKph2ZO72TdEHhn9tFB7TAXdOyaLuSCAhh8gTu5UrqelqQjZrGSRKtFK8mJ0LFpIz5xFKe7PK9sbNUn0s7V7T8zhiyMJJteVeritkhXRP%2BBRdb%2FL0siqdKMEIT%2BmlWwCtaJpwDxCYPgBQH9c4iCutRqwGvfSnD%2FAKbK%2F5CG%2FNa%2FTk8Pme7Jl7toYaBzq2aMl0kAPR%2FGz%2F5JuDCuI6%2FUkN74uHhQ5f5kXB1GgZMyufxDIw0pOuwQY6pgFqlhae2XHlTbvzDlnapfsk8QMjtH%2F3b7zWABpfwj6%2BjhDrixTg6%2BI1Vpe6vc8%2BJLPw3vP2Cx1kzZpy67%2BgMZC6%2Fxu2zSrvCdNs1UOLs%2FTBM0%2BiA6ntKTfXTSJuq3msGGvqGqyB7hYClE5RYF%2FmZe9xXAGZpKXLEzvKkrXSMP8LMNEvu6z3eBD9T%2BW60IdIXcKPpXFb1DACmG7%2Fx%2B2cx%2FjB1RM81B3j&X-Amz-Signature=2edfcef14250fb0c04e47a3ee01d2fcb815d2536cfce372e2f75e114fd43ac21&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YK6NIH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzD7XA%2F7ceY1sjm8JNSGJ1hN2BlusWePfJsI2hHg25NAiB3orknsCdM%2FZo58QXntOSk%2BjDnSKxIC3JVVl6wgeqnkSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BhlnRXRa62dctKVlKtwDy%2F2WcUQ2axyAiuAIgWUQ2m917Ui6ylYlXUlHAa10MO%2BvtA3rx3NdlRMPTlfn5wfHW8vzFx83slnHLBK1nt%2FUowHeS9c2pt2d41tWPpj6qfV5EHX136SmoBFtUt4p%2BbK3528FayE6OI7DS%2Fz5fVq1XEPbh3Uo5%2F1pUhqkFXirhL020n3pYYL1k51pVGSH2Wrsi6hZrQ4NVVNatOQcvrinxs%2BfUJkuuyrGalqGRz%2F8vfFlII7QyJlwFQl%2FAbNAiLO%2FnFwwEN6FGSRlazb71Hnvnj93vxO4xW0ItEy4s7dxB9fO3HkBNOR2MKjWV5l7va4r7xUdVL76XzM1j7uIhTfG69KinFFg%2FnAZh1C8oCD84aqvXWNCJQQE1fOsjt8oF349wxaxxVjfTynL%2B%2ForKph2ZO72TdEHhn9tFB7TAXdOyaLuSCAhh8gTu5UrqelqQjZrGSRKtFK8mJ0LFpIz5xFKe7PK9sbNUn0s7V7T8zhiyMJJteVeritkhXRP%2BBRdb%2FL0siqdKMEIT%2BmlWwCtaJpwDxCYPgBQH9c4iCutRqwGvfSnD%2FAKbK%2F5CG%2FNa%2FTk8Pme7Jl7toYaBzq2aMl0kAPR%2FGz%2F5JuDCuI6%2FUkN74uHhQ5f5kXB1GgZMyufxDIw0pOuwQY6pgFqlhae2XHlTbvzDlnapfsk8QMjtH%2F3b7zWABpfwj6%2BjhDrixTg6%2BI1Vpe6vc8%2BJLPw3vP2Cx1kzZpy67%2BgMZC6%2Fxu2zSrvCdNs1UOLs%2FTBM0%2BiA6ntKTfXTSJuq3msGGvqGqyB7hYClE5RYF%2FmZe9xXAGZpKXLEzvKkrXSMP8LMNEvu6z3eBD9T%2BW60IdIXcKPpXFb1DACmG7%2Fx%2B2cx%2FjB1RM81B3j&X-Amz-Signature=50ac86a10607c41353d66910d26289ac5f2421e7e23794b6164354a6c7ade7a7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YK6NIH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzD7XA%2F7ceY1sjm8JNSGJ1hN2BlusWePfJsI2hHg25NAiB3orknsCdM%2FZo58QXntOSk%2BjDnSKxIC3JVVl6wgeqnkSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BhlnRXRa62dctKVlKtwDy%2F2WcUQ2axyAiuAIgWUQ2m917Ui6ylYlXUlHAa10MO%2BvtA3rx3NdlRMPTlfn5wfHW8vzFx83slnHLBK1nt%2FUowHeS9c2pt2d41tWPpj6qfV5EHX136SmoBFtUt4p%2BbK3528FayE6OI7DS%2Fz5fVq1XEPbh3Uo5%2F1pUhqkFXirhL020n3pYYL1k51pVGSH2Wrsi6hZrQ4NVVNatOQcvrinxs%2BfUJkuuyrGalqGRz%2F8vfFlII7QyJlwFQl%2FAbNAiLO%2FnFwwEN6FGSRlazb71Hnvnj93vxO4xW0ItEy4s7dxB9fO3HkBNOR2MKjWV5l7va4r7xUdVL76XzM1j7uIhTfG69KinFFg%2FnAZh1C8oCD84aqvXWNCJQQE1fOsjt8oF349wxaxxVjfTynL%2B%2ForKph2ZO72TdEHhn9tFB7TAXdOyaLuSCAhh8gTu5UrqelqQjZrGSRKtFK8mJ0LFpIz5xFKe7PK9sbNUn0s7V7T8zhiyMJJteVeritkhXRP%2BBRdb%2FL0siqdKMEIT%2BmlWwCtaJpwDxCYPgBQH9c4iCutRqwGvfSnD%2FAKbK%2F5CG%2FNa%2FTk8Pme7Jl7toYaBzq2aMl0kAPR%2FGz%2F5JuDCuI6%2FUkN74uHhQ5f5kXB1GgZMyufxDIw0pOuwQY6pgFqlhae2XHlTbvzDlnapfsk8QMjtH%2F3b7zWABpfwj6%2BjhDrixTg6%2BI1Vpe6vc8%2BJLPw3vP2Cx1kzZpy67%2BgMZC6%2Fxu2zSrvCdNs1UOLs%2FTBM0%2BiA6ntKTfXTSJuq3msGGvqGqyB7hYClE5RYF%2FmZe9xXAGZpKXLEzvKkrXSMP8LMNEvu6z3eBD9T%2BW60IdIXcKPpXFb1DACmG7%2Fx%2B2cx%2FjB1RM81B3j&X-Amz-Signature=d6299b88a064dd7d55426feeb6c87d3c56c59c08b7a3195f18ab3043def15872&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YK6NIH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzD7XA%2F7ceY1sjm8JNSGJ1hN2BlusWePfJsI2hHg25NAiB3orknsCdM%2FZo58QXntOSk%2BjDnSKxIC3JVVl6wgeqnkSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BhlnRXRa62dctKVlKtwDy%2F2WcUQ2axyAiuAIgWUQ2m917Ui6ylYlXUlHAa10MO%2BvtA3rx3NdlRMPTlfn5wfHW8vzFx83slnHLBK1nt%2FUowHeS9c2pt2d41tWPpj6qfV5EHX136SmoBFtUt4p%2BbK3528FayE6OI7DS%2Fz5fVq1XEPbh3Uo5%2F1pUhqkFXirhL020n3pYYL1k51pVGSH2Wrsi6hZrQ4NVVNatOQcvrinxs%2BfUJkuuyrGalqGRz%2F8vfFlII7QyJlwFQl%2FAbNAiLO%2FnFwwEN6FGSRlazb71Hnvnj93vxO4xW0ItEy4s7dxB9fO3HkBNOR2MKjWV5l7va4r7xUdVL76XzM1j7uIhTfG69KinFFg%2FnAZh1C8oCD84aqvXWNCJQQE1fOsjt8oF349wxaxxVjfTynL%2B%2ForKph2ZO72TdEHhn9tFB7TAXdOyaLuSCAhh8gTu5UrqelqQjZrGSRKtFK8mJ0LFpIz5xFKe7PK9sbNUn0s7V7T8zhiyMJJteVeritkhXRP%2BBRdb%2FL0siqdKMEIT%2BmlWwCtaJpwDxCYPgBQH9c4iCutRqwGvfSnD%2FAKbK%2F5CG%2FNa%2FTk8Pme7Jl7toYaBzq2aMl0kAPR%2FGz%2F5JuDCuI6%2FUkN74uHhQ5f5kXB1GgZMyufxDIw0pOuwQY6pgFqlhae2XHlTbvzDlnapfsk8QMjtH%2F3b7zWABpfwj6%2BjhDrixTg6%2BI1Vpe6vc8%2BJLPw3vP2Cx1kzZpy67%2BgMZC6%2Fxu2zSrvCdNs1UOLs%2FTBM0%2BiA6ntKTfXTSJuq3msGGvqGqyB7hYClE5RYF%2FmZe9xXAGZpKXLEzvKkrXSMP8LMNEvu6z3eBD9T%2BW60IdIXcKPpXFb1DACmG7%2Fx%2B2cx%2FjB1RM81B3j&X-Amz-Signature=e22578aa680a16f6d6d65683589efc4589245e8adf2282321ce700084e1db550&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YK6NIH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzD7XA%2F7ceY1sjm8JNSGJ1hN2BlusWePfJsI2hHg25NAiB3orknsCdM%2FZo58QXntOSk%2BjDnSKxIC3JVVl6wgeqnkSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BhlnRXRa62dctKVlKtwDy%2F2WcUQ2axyAiuAIgWUQ2m917Ui6ylYlXUlHAa10MO%2BvtA3rx3NdlRMPTlfn5wfHW8vzFx83slnHLBK1nt%2FUowHeS9c2pt2d41tWPpj6qfV5EHX136SmoBFtUt4p%2BbK3528FayE6OI7DS%2Fz5fVq1XEPbh3Uo5%2F1pUhqkFXirhL020n3pYYL1k51pVGSH2Wrsi6hZrQ4NVVNatOQcvrinxs%2BfUJkuuyrGalqGRz%2F8vfFlII7QyJlwFQl%2FAbNAiLO%2FnFwwEN6FGSRlazb71Hnvnj93vxO4xW0ItEy4s7dxB9fO3HkBNOR2MKjWV5l7va4r7xUdVL76XzM1j7uIhTfG69KinFFg%2FnAZh1C8oCD84aqvXWNCJQQE1fOsjt8oF349wxaxxVjfTynL%2B%2ForKph2ZO72TdEHhn9tFB7TAXdOyaLuSCAhh8gTu5UrqelqQjZrGSRKtFK8mJ0LFpIz5xFKe7PK9sbNUn0s7V7T8zhiyMJJteVeritkhXRP%2BBRdb%2FL0siqdKMEIT%2BmlWwCtaJpwDxCYPgBQH9c4iCutRqwGvfSnD%2FAKbK%2F5CG%2FNa%2FTk8Pme7Jl7toYaBzq2aMl0kAPR%2FGz%2F5JuDCuI6%2FUkN74uHhQ5f5kXB1GgZMyufxDIw0pOuwQY6pgFqlhae2XHlTbvzDlnapfsk8QMjtH%2F3b7zWABpfwj6%2BjhDrixTg6%2BI1Vpe6vc8%2BJLPw3vP2Cx1kzZpy67%2BgMZC6%2Fxu2zSrvCdNs1UOLs%2FTBM0%2BiA6ntKTfXTSJuq3msGGvqGqyB7hYClE5RYF%2FmZe9xXAGZpKXLEzvKkrXSMP8LMNEvu6z3eBD9T%2BW60IdIXcKPpXFb1DACmG7%2Fx%2B2cx%2FjB1RM81B3j&X-Amz-Signature=8f6bf1f11e412badbc19c04a0a0218c8e134e80a64a3d131252a97abe73baf02&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YK6NIH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzD7XA%2F7ceY1sjm8JNSGJ1hN2BlusWePfJsI2hHg25NAiB3orknsCdM%2FZo58QXntOSk%2BjDnSKxIC3JVVl6wgeqnkSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BhlnRXRa62dctKVlKtwDy%2F2WcUQ2axyAiuAIgWUQ2m917Ui6ylYlXUlHAa10MO%2BvtA3rx3NdlRMPTlfn5wfHW8vzFx83slnHLBK1nt%2FUowHeS9c2pt2d41tWPpj6qfV5EHX136SmoBFtUt4p%2BbK3528FayE6OI7DS%2Fz5fVq1XEPbh3Uo5%2F1pUhqkFXirhL020n3pYYL1k51pVGSH2Wrsi6hZrQ4NVVNatOQcvrinxs%2BfUJkuuyrGalqGRz%2F8vfFlII7QyJlwFQl%2FAbNAiLO%2FnFwwEN6FGSRlazb71Hnvnj93vxO4xW0ItEy4s7dxB9fO3HkBNOR2MKjWV5l7va4r7xUdVL76XzM1j7uIhTfG69KinFFg%2FnAZh1C8oCD84aqvXWNCJQQE1fOsjt8oF349wxaxxVjfTynL%2B%2ForKph2ZO72TdEHhn9tFB7TAXdOyaLuSCAhh8gTu5UrqelqQjZrGSRKtFK8mJ0LFpIz5xFKe7PK9sbNUn0s7V7T8zhiyMJJteVeritkhXRP%2BBRdb%2FL0siqdKMEIT%2BmlWwCtaJpwDxCYPgBQH9c4iCutRqwGvfSnD%2FAKbK%2F5CG%2FNa%2FTk8Pme7Jl7toYaBzq2aMl0kAPR%2FGz%2F5JuDCuI6%2FUkN74uHhQ5f5kXB1GgZMyufxDIw0pOuwQY6pgFqlhae2XHlTbvzDlnapfsk8QMjtH%2F3b7zWABpfwj6%2BjhDrixTg6%2BI1Vpe6vc8%2BJLPw3vP2Cx1kzZpy67%2BgMZC6%2Fxu2zSrvCdNs1UOLs%2FTBM0%2BiA6ntKTfXTSJuq3msGGvqGqyB7hYClE5RYF%2FmZe9xXAGZpKXLEzvKkrXSMP8LMNEvu6z3eBD9T%2BW60IdIXcKPpXFb1DACmG7%2Fx%2B2cx%2FjB1RM81B3j&X-Amz-Signature=98a0ac23702c3da7bca48aed9f463c9d56856881e4e6ffa45d3a8844b67c989c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YK6NIH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzD7XA%2F7ceY1sjm8JNSGJ1hN2BlusWePfJsI2hHg25NAiB3orknsCdM%2FZo58QXntOSk%2BjDnSKxIC3JVVl6wgeqnkSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BhlnRXRa62dctKVlKtwDy%2F2WcUQ2axyAiuAIgWUQ2m917Ui6ylYlXUlHAa10MO%2BvtA3rx3NdlRMPTlfn5wfHW8vzFx83slnHLBK1nt%2FUowHeS9c2pt2d41tWPpj6qfV5EHX136SmoBFtUt4p%2BbK3528FayE6OI7DS%2Fz5fVq1XEPbh3Uo5%2F1pUhqkFXirhL020n3pYYL1k51pVGSH2Wrsi6hZrQ4NVVNatOQcvrinxs%2BfUJkuuyrGalqGRz%2F8vfFlII7QyJlwFQl%2FAbNAiLO%2FnFwwEN6FGSRlazb71Hnvnj93vxO4xW0ItEy4s7dxB9fO3HkBNOR2MKjWV5l7va4r7xUdVL76XzM1j7uIhTfG69KinFFg%2FnAZh1C8oCD84aqvXWNCJQQE1fOsjt8oF349wxaxxVjfTynL%2B%2ForKph2ZO72TdEHhn9tFB7TAXdOyaLuSCAhh8gTu5UrqelqQjZrGSRKtFK8mJ0LFpIz5xFKe7PK9sbNUn0s7V7T8zhiyMJJteVeritkhXRP%2BBRdb%2FL0siqdKMEIT%2BmlWwCtaJpwDxCYPgBQH9c4iCutRqwGvfSnD%2FAKbK%2F5CG%2FNa%2FTk8Pme7Jl7toYaBzq2aMl0kAPR%2FGz%2F5JuDCuI6%2FUkN74uHhQ5f5kXB1GgZMyufxDIw0pOuwQY6pgFqlhae2XHlTbvzDlnapfsk8QMjtH%2F3b7zWABpfwj6%2BjhDrixTg6%2BI1Vpe6vc8%2BJLPw3vP2Cx1kzZpy67%2BgMZC6%2Fxu2zSrvCdNs1UOLs%2FTBM0%2BiA6ntKTfXTSJuq3msGGvqGqyB7hYClE5RYF%2FmZe9xXAGZpKXLEzvKkrXSMP8LMNEvu6z3eBD9T%2BW60IdIXcKPpXFb1DACmG7%2Fx%2B2cx%2FjB1RM81B3j&X-Amz-Signature=635ae9c87f2265ad20aacc2e6936295be3a916edd9e29304dd906b3da2b82cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
