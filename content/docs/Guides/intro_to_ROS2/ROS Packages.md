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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL4IEE2Z%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDDnMQq7NsQXrAJl7bDEMKc335TnKTjey4wwg5V%2B9ZV6AIhAOl21rlORtboqhfBaWE0WciwaxdAZBMihNBbWrIa8i3hKv8DCBwQABoMNjM3NDIzMTgzODA1IgwvKwzKGF3SPL5nlw4q3APc8x%2BzslkhHa%2B12Vqns6H38xSnDs3bu0Rh%2F1bkfHookEHdXh4X5gOqlgLQckxOr5sPqMaBIHdLV71kHAvNpYXubBoOX0fdN9mFP0427Vb2TbBd0cEUF%2BB%2BsS%2FuimeZcESrCTdXn%2Bim9RXiPPppfdtnI7J4Pw%2FnKsSp2qv2vHYv%2Fx5tBAcjWRxFxYx3Of%2B27SQfSAP5x6kfr0Axh8IJCn9LP6UX9QLthTDuYRpmDefNZ2PvirTv80zOFTznch%2BdtxzrHRzW3RS1A6a%2BGp%2FsHeyfiyK6AfNnGO9mft6WkSlbRzzaPDQFZ9PJc6DDxItlGHa6sn9uNOljfM%2Bnh0NqEl%2FVKEsidxlwOF5QYAEAcZ7VbDzChCefTFRBEQk%2B6fCSGJevBmIqmpVWDwh6hlff2N1DUNRzpkvSAaPL%2BC7cdHR5huT7MJGDNiuM7Rz02FZoRwb1pJTvFtZCg%2Bjf2KEvR3ymiFpkIC1M%2BVrLrBAQYfyUDncQV2WM9hEJ9rOIHiSo9kvDtgRTCnHCDmlYGxXiU6Tl8sWHsz%2BjnOU5Z2xNlCkF9qrggTxNf7i5AA7Bxzo1lJu4g%2Fs5tZluLKxKnjFJpQspbeimqMRHBW0K0npOFN%2Fz9k%2F00Sb4rBGZohqFSDDfooS9BjqkAbjr3neDhYbrN4q1nyZ3mGWVMPiSSgEn1GV0%2BY7iyK%2BbKVconB8pbpWyZYI%2Bbv%2FpWSYxE8Avm6Vk%2BHq7p1kxWkxdkE9boYYB%2FXN5Y%2Bn2g%2FjO41Jn4vzgNh5uZ9K4lAxKzU42ZflpqhWhwg%2FPGJI9uIQ6lwf0LNLM%2BoHU8MPdpDN0Mp4VOnG66bsPVf3SC86S8QZ0iD7SB0tY1Z%2BDRq4ZvNNHXzBC&X-Amz-Signature=f35a5fa50a2fd73818345ddbfe4306d05282c07c9f8827297696b16dc638c0b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL4IEE2Z%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDDnMQq7NsQXrAJl7bDEMKc335TnKTjey4wwg5V%2B9ZV6AIhAOl21rlORtboqhfBaWE0WciwaxdAZBMihNBbWrIa8i3hKv8DCBwQABoMNjM3NDIzMTgzODA1IgwvKwzKGF3SPL5nlw4q3APc8x%2BzslkhHa%2B12Vqns6H38xSnDs3bu0Rh%2F1bkfHookEHdXh4X5gOqlgLQckxOr5sPqMaBIHdLV71kHAvNpYXubBoOX0fdN9mFP0427Vb2TbBd0cEUF%2BB%2BsS%2FuimeZcESrCTdXn%2Bim9RXiPPppfdtnI7J4Pw%2FnKsSp2qv2vHYv%2Fx5tBAcjWRxFxYx3Of%2B27SQfSAP5x6kfr0Axh8IJCn9LP6UX9QLthTDuYRpmDefNZ2PvirTv80zOFTznch%2BdtxzrHRzW3RS1A6a%2BGp%2FsHeyfiyK6AfNnGO9mft6WkSlbRzzaPDQFZ9PJc6DDxItlGHa6sn9uNOljfM%2Bnh0NqEl%2FVKEsidxlwOF5QYAEAcZ7VbDzChCefTFRBEQk%2B6fCSGJevBmIqmpVWDwh6hlff2N1DUNRzpkvSAaPL%2BC7cdHR5huT7MJGDNiuM7Rz02FZoRwb1pJTvFtZCg%2Bjf2KEvR3ymiFpkIC1M%2BVrLrBAQYfyUDncQV2WM9hEJ9rOIHiSo9kvDtgRTCnHCDmlYGxXiU6Tl8sWHsz%2BjnOU5Z2xNlCkF9qrggTxNf7i5AA7Bxzo1lJu4g%2Fs5tZluLKxKnjFJpQspbeimqMRHBW0K0npOFN%2Fz9k%2F00Sb4rBGZohqFSDDfooS9BjqkAbjr3neDhYbrN4q1nyZ3mGWVMPiSSgEn1GV0%2BY7iyK%2BbKVconB8pbpWyZYI%2Bbv%2FpWSYxE8Avm6Vk%2BHq7p1kxWkxdkE9boYYB%2FXN5Y%2Bn2g%2FjO41Jn4vzgNh5uZ9K4lAxKzU42ZflpqhWhwg%2FPGJI9uIQ6lwf0LNLM%2BoHU8MPdpDN0Mp4VOnG66bsPVf3SC86S8QZ0iD7SB0tY1Z%2BDRq4ZvNNHXzBC&X-Amz-Signature=1a8f097cd6fab3525607eeadd345e3a91537a92175a542b9faf9a152d760c5b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL4IEE2Z%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDDnMQq7NsQXrAJl7bDEMKc335TnKTjey4wwg5V%2B9ZV6AIhAOl21rlORtboqhfBaWE0WciwaxdAZBMihNBbWrIa8i3hKv8DCBwQABoMNjM3NDIzMTgzODA1IgwvKwzKGF3SPL5nlw4q3APc8x%2BzslkhHa%2B12Vqns6H38xSnDs3bu0Rh%2F1bkfHookEHdXh4X5gOqlgLQckxOr5sPqMaBIHdLV71kHAvNpYXubBoOX0fdN9mFP0427Vb2TbBd0cEUF%2BB%2BsS%2FuimeZcESrCTdXn%2Bim9RXiPPppfdtnI7J4Pw%2FnKsSp2qv2vHYv%2Fx5tBAcjWRxFxYx3Of%2B27SQfSAP5x6kfr0Axh8IJCn9LP6UX9QLthTDuYRpmDefNZ2PvirTv80zOFTznch%2BdtxzrHRzW3RS1A6a%2BGp%2FsHeyfiyK6AfNnGO9mft6WkSlbRzzaPDQFZ9PJc6DDxItlGHa6sn9uNOljfM%2Bnh0NqEl%2FVKEsidxlwOF5QYAEAcZ7VbDzChCefTFRBEQk%2B6fCSGJevBmIqmpVWDwh6hlff2N1DUNRzpkvSAaPL%2BC7cdHR5huT7MJGDNiuM7Rz02FZoRwb1pJTvFtZCg%2Bjf2KEvR3ymiFpkIC1M%2BVrLrBAQYfyUDncQV2WM9hEJ9rOIHiSo9kvDtgRTCnHCDmlYGxXiU6Tl8sWHsz%2BjnOU5Z2xNlCkF9qrggTxNf7i5AA7Bxzo1lJu4g%2Fs5tZluLKxKnjFJpQspbeimqMRHBW0K0npOFN%2Fz9k%2F00Sb4rBGZohqFSDDfooS9BjqkAbjr3neDhYbrN4q1nyZ3mGWVMPiSSgEn1GV0%2BY7iyK%2BbKVconB8pbpWyZYI%2Bbv%2FpWSYxE8Avm6Vk%2BHq7p1kxWkxdkE9boYYB%2FXN5Y%2Bn2g%2FjO41Jn4vzgNh5uZ9K4lAxKzU42ZflpqhWhwg%2FPGJI9uIQ6lwf0LNLM%2BoHU8MPdpDN0Mp4VOnG66bsPVf3SC86S8QZ0iD7SB0tY1Z%2BDRq4ZvNNHXzBC&X-Amz-Signature=e99d3a5ce7c62975d2ea3c9e65c2e12c9f793d096e7976ee0dc8640c80407394&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL4IEE2Z%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDDnMQq7NsQXrAJl7bDEMKc335TnKTjey4wwg5V%2B9ZV6AIhAOl21rlORtboqhfBaWE0WciwaxdAZBMihNBbWrIa8i3hKv8DCBwQABoMNjM3NDIzMTgzODA1IgwvKwzKGF3SPL5nlw4q3APc8x%2BzslkhHa%2B12Vqns6H38xSnDs3bu0Rh%2F1bkfHookEHdXh4X5gOqlgLQckxOr5sPqMaBIHdLV71kHAvNpYXubBoOX0fdN9mFP0427Vb2TbBd0cEUF%2BB%2BsS%2FuimeZcESrCTdXn%2Bim9RXiPPppfdtnI7J4Pw%2FnKsSp2qv2vHYv%2Fx5tBAcjWRxFxYx3Of%2B27SQfSAP5x6kfr0Axh8IJCn9LP6UX9QLthTDuYRpmDefNZ2PvirTv80zOFTznch%2BdtxzrHRzW3RS1A6a%2BGp%2FsHeyfiyK6AfNnGO9mft6WkSlbRzzaPDQFZ9PJc6DDxItlGHa6sn9uNOljfM%2Bnh0NqEl%2FVKEsidxlwOF5QYAEAcZ7VbDzChCefTFRBEQk%2B6fCSGJevBmIqmpVWDwh6hlff2N1DUNRzpkvSAaPL%2BC7cdHR5huT7MJGDNiuM7Rz02FZoRwb1pJTvFtZCg%2Bjf2KEvR3ymiFpkIC1M%2BVrLrBAQYfyUDncQV2WM9hEJ9rOIHiSo9kvDtgRTCnHCDmlYGxXiU6Tl8sWHsz%2BjnOU5Z2xNlCkF9qrggTxNf7i5AA7Bxzo1lJu4g%2Fs5tZluLKxKnjFJpQspbeimqMRHBW0K0npOFN%2Fz9k%2F00Sb4rBGZohqFSDDfooS9BjqkAbjr3neDhYbrN4q1nyZ3mGWVMPiSSgEn1GV0%2BY7iyK%2BbKVconB8pbpWyZYI%2Bbv%2FpWSYxE8Avm6Vk%2BHq7p1kxWkxdkE9boYYB%2FXN5Y%2Bn2g%2FjO41Jn4vzgNh5uZ9K4lAxKzU42ZflpqhWhwg%2FPGJI9uIQ6lwf0LNLM%2BoHU8MPdpDN0Mp4VOnG66bsPVf3SC86S8QZ0iD7SB0tY1Z%2BDRq4ZvNNHXzBC&X-Amz-Signature=af5c805e8a20e0d65550db1fa3aba430f7549275c76d15edb72a63021110f419&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL4IEE2Z%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDDnMQq7NsQXrAJl7bDEMKc335TnKTjey4wwg5V%2B9ZV6AIhAOl21rlORtboqhfBaWE0WciwaxdAZBMihNBbWrIa8i3hKv8DCBwQABoMNjM3NDIzMTgzODA1IgwvKwzKGF3SPL5nlw4q3APc8x%2BzslkhHa%2B12Vqns6H38xSnDs3bu0Rh%2F1bkfHookEHdXh4X5gOqlgLQckxOr5sPqMaBIHdLV71kHAvNpYXubBoOX0fdN9mFP0427Vb2TbBd0cEUF%2BB%2BsS%2FuimeZcESrCTdXn%2Bim9RXiPPppfdtnI7J4Pw%2FnKsSp2qv2vHYv%2Fx5tBAcjWRxFxYx3Of%2B27SQfSAP5x6kfr0Axh8IJCn9LP6UX9QLthTDuYRpmDefNZ2PvirTv80zOFTznch%2BdtxzrHRzW3RS1A6a%2BGp%2FsHeyfiyK6AfNnGO9mft6WkSlbRzzaPDQFZ9PJc6DDxItlGHa6sn9uNOljfM%2Bnh0NqEl%2FVKEsidxlwOF5QYAEAcZ7VbDzChCefTFRBEQk%2B6fCSGJevBmIqmpVWDwh6hlff2N1DUNRzpkvSAaPL%2BC7cdHR5huT7MJGDNiuM7Rz02FZoRwb1pJTvFtZCg%2Bjf2KEvR3ymiFpkIC1M%2BVrLrBAQYfyUDncQV2WM9hEJ9rOIHiSo9kvDtgRTCnHCDmlYGxXiU6Tl8sWHsz%2BjnOU5Z2xNlCkF9qrggTxNf7i5AA7Bxzo1lJu4g%2Fs5tZluLKxKnjFJpQspbeimqMRHBW0K0npOFN%2Fz9k%2F00Sb4rBGZohqFSDDfooS9BjqkAbjr3neDhYbrN4q1nyZ3mGWVMPiSSgEn1GV0%2BY7iyK%2BbKVconB8pbpWyZYI%2Bbv%2FpWSYxE8Avm6Vk%2BHq7p1kxWkxdkE9boYYB%2FXN5Y%2Bn2g%2FjO41Jn4vzgNh5uZ9K4lAxKzU42ZflpqhWhwg%2FPGJI9uIQ6lwf0LNLM%2BoHU8MPdpDN0Mp4VOnG66bsPVf3SC86S8QZ0iD7SB0tY1Z%2BDRq4ZvNNHXzBC&X-Amz-Signature=c395dc7948469c8413ca4727d9c0356aa5e4929514adfe9541fa8c9fbdd44fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL4IEE2Z%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDDnMQq7NsQXrAJl7bDEMKc335TnKTjey4wwg5V%2B9ZV6AIhAOl21rlORtboqhfBaWE0WciwaxdAZBMihNBbWrIa8i3hKv8DCBwQABoMNjM3NDIzMTgzODA1IgwvKwzKGF3SPL5nlw4q3APc8x%2BzslkhHa%2B12Vqns6H38xSnDs3bu0Rh%2F1bkfHookEHdXh4X5gOqlgLQckxOr5sPqMaBIHdLV71kHAvNpYXubBoOX0fdN9mFP0427Vb2TbBd0cEUF%2BB%2BsS%2FuimeZcESrCTdXn%2Bim9RXiPPppfdtnI7J4Pw%2FnKsSp2qv2vHYv%2Fx5tBAcjWRxFxYx3Of%2B27SQfSAP5x6kfr0Axh8IJCn9LP6UX9QLthTDuYRpmDefNZ2PvirTv80zOFTznch%2BdtxzrHRzW3RS1A6a%2BGp%2FsHeyfiyK6AfNnGO9mft6WkSlbRzzaPDQFZ9PJc6DDxItlGHa6sn9uNOljfM%2Bnh0NqEl%2FVKEsidxlwOF5QYAEAcZ7VbDzChCefTFRBEQk%2B6fCSGJevBmIqmpVWDwh6hlff2N1DUNRzpkvSAaPL%2BC7cdHR5huT7MJGDNiuM7Rz02FZoRwb1pJTvFtZCg%2Bjf2KEvR3ymiFpkIC1M%2BVrLrBAQYfyUDncQV2WM9hEJ9rOIHiSo9kvDtgRTCnHCDmlYGxXiU6Tl8sWHsz%2BjnOU5Z2xNlCkF9qrggTxNf7i5AA7Bxzo1lJu4g%2Fs5tZluLKxKnjFJpQspbeimqMRHBW0K0npOFN%2Fz9k%2F00Sb4rBGZohqFSDDfooS9BjqkAbjr3neDhYbrN4q1nyZ3mGWVMPiSSgEn1GV0%2BY7iyK%2BbKVconB8pbpWyZYI%2Bbv%2FpWSYxE8Avm6Vk%2BHq7p1kxWkxdkE9boYYB%2FXN5Y%2Bn2g%2FjO41Jn4vzgNh5uZ9K4lAxKzU42ZflpqhWhwg%2FPGJI9uIQ6lwf0LNLM%2BoHU8MPdpDN0Mp4VOnG66bsPVf3SC86S8QZ0iD7SB0tY1Z%2BDRq4ZvNNHXzBC&X-Amz-Signature=d3680efea508d2e29ae03abc9191fda16b6651d2036dcba7bf21d4f3bf8a9f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL4IEE2Z%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDDnMQq7NsQXrAJl7bDEMKc335TnKTjey4wwg5V%2B9ZV6AIhAOl21rlORtboqhfBaWE0WciwaxdAZBMihNBbWrIa8i3hKv8DCBwQABoMNjM3NDIzMTgzODA1IgwvKwzKGF3SPL5nlw4q3APc8x%2BzslkhHa%2B12Vqns6H38xSnDs3bu0Rh%2F1bkfHookEHdXh4X5gOqlgLQckxOr5sPqMaBIHdLV71kHAvNpYXubBoOX0fdN9mFP0427Vb2TbBd0cEUF%2BB%2BsS%2FuimeZcESrCTdXn%2Bim9RXiPPppfdtnI7J4Pw%2FnKsSp2qv2vHYv%2Fx5tBAcjWRxFxYx3Of%2B27SQfSAP5x6kfr0Axh8IJCn9LP6UX9QLthTDuYRpmDefNZ2PvirTv80zOFTznch%2BdtxzrHRzW3RS1A6a%2BGp%2FsHeyfiyK6AfNnGO9mft6WkSlbRzzaPDQFZ9PJc6DDxItlGHa6sn9uNOljfM%2Bnh0NqEl%2FVKEsidxlwOF5QYAEAcZ7VbDzChCefTFRBEQk%2B6fCSGJevBmIqmpVWDwh6hlff2N1DUNRzpkvSAaPL%2BC7cdHR5huT7MJGDNiuM7Rz02FZoRwb1pJTvFtZCg%2Bjf2KEvR3ymiFpkIC1M%2BVrLrBAQYfyUDncQV2WM9hEJ9rOIHiSo9kvDtgRTCnHCDmlYGxXiU6Tl8sWHsz%2BjnOU5Z2xNlCkF9qrggTxNf7i5AA7Bxzo1lJu4g%2Fs5tZluLKxKnjFJpQspbeimqMRHBW0K0npOFN%2Fz9k%2F00Sb4rBGZohqFSDDfooS9BjqkAbjr3neDhYbrN4q1nyZ3mGWVMPiSSgEn1GV0%2BY7iyK%2BbKVconB8pbpWyZYI%2Bbv%2FpWSYxE8Avm6Vk%2BHq7p1kxWkxdkE9boYYB%2FXN5Y%2Bn2g%2FjO41Jn4vzgNh5uZ9K4lAxKzU42ZflpqhWhwg%2FPGJI9uIQ6lwf0LNLM%2BoHU8MPdpDN0Mp4VOnG66bsPVf3SC86S8QZ0iD7SB0tY1Z%2BDRq4ZvNNHXzBC&X-Amz-Signature=54c674636ba8fe5510358e28b3e5d1a5143919575758d6033f07dae4a649c2d2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
