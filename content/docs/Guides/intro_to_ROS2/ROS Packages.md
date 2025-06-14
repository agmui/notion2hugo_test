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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAGZ3FQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDrqmDH%2FOPkmY%2B5NWlQk3VP18ArUwtakLXytCYnC%2FLjnAiAw4wISNNKsSzgqFWyb87iU3mPwE0DET%2FSAM2hL8xY3XCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMigu%2BaMgbIwDE5Z71KtwDhRb%2Bi0LPIGVyLp6hnOO0Yci1A2o1zS8PJ6mz2z8oRroJjvcS5qktCgRugh6tEhs5aqeMqIpMNaE2rsICq9poezteIcooRnfv1MondqAywz2YpHx%2FLVVtIkd3e5qxBsr6rAZ8KxvsbZ7HQf2rvD%2FxkXdWf7Cdl2LWaSOZucbjndewD%2FkeRboeL86GDRwqN%2BhqWBqcBatFKHIOhui3TPDw6F%2BcUog0QuEdMFD%2BOJb9tHRT8nXoj%2BemLJYMu5gkSL0U8FXg1AWXPcpZ0T8UL2u6QG0raijZL%2FrCWC0sj4zpSNm1DDeS35xa9dv0Y6j51R0zoeX%2BQaVSt%2F%2BxvVk3mwwadii8cGUksMbFilkp4IwCWjFfGVf8WVmJk1Phr2gLKgF5qCXNNYFq7y5gTX4s0qaJToyLikZTN8bpBoRRjZ%2FBJ7Bi7%2FhH8Lm%2FB2BsL5HliA9RuuQBWwsaF9xIn37yxtufSGsHlMnxajtsjBlEYjbdOn8mxWB3c4iaJVBj3kTbFc2gnsDayEQdGfTVZ%2BF92%2FlR8PAXrgnIeWHzpPQgFH9M3jzaL4ZDFJUXlTmLnVG7MJkgfM6tNYVbfczwhNAzb2GmUMhkD%2FNZepWsITJCcRCF7aTjhXs8XKI9tZ2tiV0wpqS3wgY6pgHyY4xusijvTA4iIeBT2Y%2FLkbA78lzn0edAzwAmMYLrY6eCuKFV%2BhnjyXjQDUd0n0hvPtcVH1nPkkiY8%2F4%2Fxh7BhKi1ZzzM11wy2k3q7v3E9PWtAySo1qqK%2F9JtcYOtdV1sYmUBR%2BDKxjjjGzl2opIZ69rfJ4pMBO%2Bx4LMPWlh3ITYBwb0q17FOsw4lcHFwtGDCrygEzAg8LWtNZZd2iI49zIuAsLAZ&X-Amz-Signature=d491582e441581944dfa84b8e7bd89ea50f779dddd7186ca8fdb7203d727886e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAGZ3FQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDrqmDH%2FOPkmY%2B5NWlQk3VP18ArUwtakLXytCYnC%2FLjnAiAw4wISNNKsSzgqFWyb87iU3mPwE0DET%2FSAM2hL8xY3XCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMigu%2BaMgbIwDE5Z71KtwDhRb%2Bi0LPIGVyLp6hnOO0Yci1A2o1zS8PJ6mz2z8oRroJjvcS5qktCgRugh6tEhs5aqeMqIpMNaE2rsICq9poezteIcooRnfv1MondqAywz2YpHx%2FLVVtIkd3e5qxBsr6rAZ8KxvsbZ7HQf2rvD%2FxkXdWf7Cdl2LWaSOZucbjndewD%2FkeRboeL86GDRwqN%2BhqWBqcBatFKHIOhui3TPDw6F%2BcUog0QuEdMFD%2BOJb9tHRT8nXoj%2BemLJYMu5gkSL0U8FXg1AWXPcpZ0T8UL2u6QG0raijZL%2FrCWC0sj4zpSNm1DDeS35xa9dv0Y6j51R0zoeX%2BQaVSt%2F%2BxvVk3mwwadii8cGUksMbFilkp4IwCWjFfGVf8WVmJk1Phr2gLKgF5qCXNNYFq7y5gTX4s0qaJToyLikZTN8bpBoRRjZ%2FBJ7Bi7%2FhH8Lm%2FB2BsL5HliA9RuuQBWwsaF9xIn37yxtufSGsHlMnxajtsjBlEYjbdOn8mxWB3c4iaJVBj3kTbFc2gnsDayEQdGfTVZ%2BF92%2FlR8PAXrgnIeWHzpPQgFH9M3jzaL4ZDFJUXlTmLnVG7MJkgfM6tNYVbfczwhNAzb2GmUMhkD%2FNZepWsITJCcRCF7aTjhXs8XKI9tZ2tiV0wpqS3wgY6pgHyY4xusijvTA4iIeBT2Y%2FLkbA78lzn0edAzwAmMYLrY6eCuKFV%2BhnjyXjQDUd0n0hvPtcVH1nPkkiY8%2F4%2Fxh7BhKi1ZzzM11wy2k3q7v3E9PWtAySo1qqK%2F9JtcYOtdV1sYmUBR%2BDKxjjjGzl2opIZ69rfJ4pMBO%2Bx4LMPWlh3ITYBwb0q17FOsw4lcHFwtGDCrygEzAg8LWtNZZd2iI49zIuAsLAZ&X-Amz-Signature=ae26ebc4ea2ccb85c0f4d8b370cb6e5ce7f192f95927601bed6bb155ac346d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAGZ3FQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDrqmDH%2FOPkmY%2B5NWlQk3VP18ArUwtakLXytCYnC%2FLjnAiAw4wISNNKsSzgqFWyb87iU3mPwE0DET%2FSAM2hL8xY3XCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMigu%2BaMgbIwDE5Z71KtwDhRb%2Bi0LPIGVyLp6hnOO0Yci1A2o1zS8PJ6mz2z8oRroJjvcS5qktCgRugh6tEhs5aqeMqIpMNaE2rsICq9poezteIcooRnfv1MondqAywz2YpHx%2FLVVtIkd3e5qxBsr6rAZ8KxvsbZ7HQf2rvD%2FxkXdWf7Cdl2LWaSOZucbjndewD%2FkeRboeL86GDRwqN%2BhqWBqcBatFKHIOhui3TPDw6F%2BcUog0QuEdMFD%2BOJb9tHRT8nXoj%2BemLJYMu5gkSL0U8FXg1AWXPcpZ0T8UL2u6QG0raijZL%2FrCWC0sj4zpSNm1DDeS35xa9dv0Y6j51R0zoeX%2BQaVSt%2F%2BxvVk3mwwadii8cGUksMbFilkp4IwCWjFfGVf8WVmJk1Phr2gLKgF5qCXNNYFq7y5gTX4s0qaJToyLikZTN8bpBoRRjZ%2FBJ7Bi7%2FhH8Lm%2FB2BsL5HliA9RuuQBWwsaF9xIn37yxtufSGsHlMnxajtsjBlEYjbdOn8mxWB3c4iaJVBj3kTbFc2gnsDayEQdGfTVZ%2BF92%2FlR8PAXrgnIeWHzpPQgFH9M3jzaL4ZDFJUXlTmLnVG7MJkgfM6tNYVbfczwhNAzb2GmUMhkD%2FNZepWsITJCcRCF7aTjhXs8XKI9tZ2tiV0wpqS3wgY6pgHyY4xusijvTA4iIeBT2Y%2FLkbA78lzn0edAzwAmMYLrY6eCuKFV%2BhnjyXjQDUd0n0hvPtcVH1nPkkiY8%2F4%2Fxh7BhKi1ZzzM11wy2k3q7v3E9PWtAySo1qqK%2F9JtcYOtdV1sYmUBR%2BDKxjjjGzl2opIZ69rfJ4pMBO%2Bx4LMPWlh3ITYBwb0q17FOsw4lcHFwtGDCrygEzAg8LWtNZZd2iI49zIuAsLAZ&X-Amz-Signature=02382f832f21a079c19140cd82579e2093aa27ea37a5ef856655f50a88f8ddfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAGZ3FQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDrqmDH%2FOPkmY%2B5NWlQk3VP18ArUwtakLXytCYnC%2FLjnAiAw4wISNNKsSzgqFWyb87iU3mPwE0DET%2FSAM2hL8xY3XCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMigu%2BaMgbIwDE5Z71KtwDhRb%2Bi0LPIGVyLp6hnOO0Yci1A2o1zS8PJ6mz2z8oRroJjvcS5qktCgRugh6tEhs5aqeMqIpMNaE2rsICq9poezteIcooRnfv1MondqAywz2YpHx%2FLVVtIkd3e5qxBsr6rAZ8KxvsbZ7HQf2rvD%2FxkXdWf7Cdl2LWaSOZucbjndewD%2FkeRboeL86GDRwqN%2BhqWBqcBatFKHIOhui3TPDw6F%2BcUog0QuEdMFD%2BOJb9tHRT8nXoj%2BemLJYMu5gkSL0U8FXg1AWXPcpZ0T8UL2u6QG0raijZL%2FrCWC0sj4zpSNm1DDeS35xa9dv0Y6j51R0zoeX%2BQaVSt%2F%2BxvVk3mwwadii8cGUksMbFilkp4IwCWjFfGVf8WVmJk1Phr2gLKgF5qCXNNYFq7y5gTX4s0qaJToyLikZTN8bpBoRRjZ%2FBJ7Bi7%2FhH8Lm%2FB2BsL5HliA9RuuQBWwsaF9xIn37yxtufSGsHlMnxajtsjBlEYjbdOn8mxWB3c4iaJVBj3kTbFc2gnsDayEQdGfTVZ%2BF92%2FlR8PAXrgnIeWHzpPQgFH9M3jzaL4ZDFJUXlTmLnVG7MJkgfM6tNYVbfczwhNAzb2GmUMhkD%2FNZepWsITJCcRCF7aTjhXs8XKI9tZ2tiV0wpqS3wgY6pgHyY4xusijvTA4iIeBT2Y%2FLkbA78lzn0edAzwAmMYLrY6eCuKFV%2BhnjyXjQDUd0n0hvPtcVH1nPkkiY8%2F4%2Fxh7BhKi1ZzzM11wy2k3q7v3E9PWtAySo1qqK%2F9JtcYOtdV1sYmUBR%2BDKxjjjGzl2opIZ69rfJ4pMBO%2Bx4LMPWlh3ITYBwb0q17FOsw4lcHFwtGDCrygEzAg8LWtNZZd2iI49zIuAsLAZ&X-Amz-Signature=d8bb642d3c3b3bf6ecb01d238d906a83d45a7f2242ff154a673b7ffb04db3c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAGZ3FQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDrqmDH%2FOPkmY%2B5NWlQk3VP18ArUwtakLXytCYnC%2FLjnAiAw4wISNNKsSzgqFWyb87iU3mPwE0DET%2FSAM2hL8xY3XCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMigu%2BaMgbIwDE5Z71KtwDhRb%2Bi0LPIGVyLp6hnOO0Yci1A2o1zS8PJ6mz2z8oRroJjvcS5qktCgRugh6tEhs5aqeMqIpMNaE2rsICq9poezteIcooRnfv1MondqAywz2YpHx%2FLVVtIkd3e5qxBsr6rAZ8KxvsbZ7HQf2rvD%2FxkXdWf7Cdl2LWaSOZucbjndewD%2FkeRboeL86GDRwqN%2BhqWBqcBatFKHIOhui3TPDw6F%2BcUog0QuEdMFD%2BOJb9tHRT8nXoj%2BemLJYMu5gkSL0U8FXg1AWXPcpZ0T8UL2u6QG0raijZL%2FrCWC0sj4zpSNm1DDeS35xa9dv0Y6j51R0zoeX%2BQaVSt%2F%2BxvVk3mwwadii8cGUksMbFilkp4IwCWjFfGVf8WVmJk1Phr2gLKgF5qCXNNYFq7y5gTX4s0qaJToyLikZTN8bpBoRRjZ%2FBJ7Bi7%2FhH8Lm%2FB2BsL5HliA9RuuQBWwsaF9xIn37yxtufSGsHlMnxajtsjBlEYjbdOn8mxWB3c4iaJVBj3kTbFc2gnsDayEQdGfTVZ%2BF92%2FlR8PAXrgnIeWHzpPQgFH9M3jzaL4ZDFJUXlTmLnVG7MJkgfM6tNYVbfczwhNAzb2GmUMhkD%2FNZepWsITJCcRCF7aTjhXs8XKI9tZ2tiV0wpqS3wgY6pgHyY4xusijvTA4iIeBT2Y%2FLkbA78lzn0edAzwAmMYLrY6eCuKFV%2BhnjyXjQDUd0n0hvPtcVH1nPkkiY8%2F4%2Fxh7BhKi1ZzzM11wy2k3q7v3E9PWtAySo1qqK%2F9JtcYOtdV1sYmUBR%2BDKxjjjGzl2opIZ69rfJ4pMBO%2Bx4LMPWlh3ITYBwb0q17FOsw4lcHFwtGDCrygEzAg8LWtNZZd2iI49zIuAsLAZ&X-Amz-Signature=3192fb7ffe3b37fb46dc6e4cf7d86b918c1f8185f4e0d68ac0ca10f25789315f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAGZ3FQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDrqmDH%2FOPkmY%2B5NWlQk3VP18ArUwtakLXytCYnC%2FLjnAiAw4wISNNKsSzgqFWyb87iU3mPwE0DET%2FSAM2hL8xY3XCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMigu%2BaMgbIwDE5Z71KtwDhRb%2Bi0LPIGVyLp6hnOO0Yci1A2o1zS8PJ6mz2z8oRroJjvcS5qktCgRugh6tEhs5aqeMqIpMNaE2rsICq9poezteIcooRnfv1MondqAywz2YpHx%2FLVVtIkd3e5qxBsr6rAZ8KxvsbZ7HQf2rvD%2FxkXdWf7Cdl2LWaSOZucbjndewD%2FkeRboeL86GDRwqN%2BhqWBqcBatFKHIOhui3TPDw6F%2BcUog0QuEdMFD%2BOJb9tHRT8nXoj%2BemLJYMu5gkSL0U8FXg1AWXPcpZ0T8UL2u6QG0raijZL%2FrCWC0sj4zpSNm1DDeS35xa9dv0Y6j51R0zoeX%2BQaVSt%2F%2BxvVk3mwwadii8cGUksMbFilkp4IwCWjFfGVf8WVmJk1Phr2gLKgF5qCXNNYFq7y5gTX4s0qaJToyLikZTN8bpBoRRjZ%2FBJ7Bi7%2FhH8Lm%2FB2BsL5HliA9RuuQBWwsaF9xIn37yxtufSGsHlMnxajtsjBlEYjbdOn8mxWB3c4iaJVBj3kTbFc2gnsDayEQdGfTVZ%2BF92%2FlR8PAXrgnIeWHzpPQgFH9M3jzaL4ZDFJUXlTmLnVG7MJkgfM6tNYVbfczwhNAzb2GmUMhkD%2FNZepWsITJCcRCF7aTjhXs8XKI9tZ2tiV0wpqS3wgY6pgHyY4xusijvTA4iIeBT2Y%2FLkbA78lzn0edAzwAmMYLrY6eCuKFV%2BhnjyXjQDUd0n0hvPtcVH1nPkkiY8%2F4%2Fxh7BhKi1ZzzM11wy2k3q7v3E9PWtAySo1qqK%2F9JtcYOtdV1sYmUBR%2BDKxjjjGzl2opIZ69rfJ4pMBO%2Bx4LMPWlh3ITYBwb0q17FOsw4lcHFwtGDCrygEzAg8LWtNZZd2iI49zIuAsLAZ&X-Amz-Signature=08c4eef396a3932a8b070246061de4acafe80697a2853c160b88464c3c2c22a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAGZ3FQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDrqmDH%2FOPkmY%2B5NWlQk3VP18ArUwtakLXytCYnC%2FLjnAiAw4wISNNKsSzgqFWyb87iU3mPwE0DET%2FSAM2hL8xY3XCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMigu%2BaMgbIwDE5Z71KtwDhRb%2Bi0LPIGVyLp6hnOO0Yci1A2o1zS8PJ6mz2z8oRroJjvcS5qktCgRugh6tEhs5aqeMqIpMNaE2rsICq9poezteIcooRnfv1MondqAywz2YpHx%2FLVVtIkd3e5qxBsr6rAZ8KxvsbZ7HQf2rvD%2FxkXdWf7Cdl2LWaSOZucbjndewD%2FkeRboeL86GDRwqN%2BhqWBqcBatFKHIOhui3TPDw6F%2BcUog0QuEdMFD%2BOJb9tHRT8nXoj%2BemLJYMu5gkSL0U8FXg1AWXPcpZ0T8UL2u6QG0raijZL%2FrCWC0sj4zpSNm1DDeS35xa9dv0Y6j51R0zoeX%2BQaVSt%2F%2BxvVk3mwwadii8cGUksMbFilkp4IwCWjFfGVf8WVmJk1Phr2gLKgF5qCXNNYFq7y5gTX4s0qaJToyLikZTN8bpBoRRjZ%2FBJ7Bi7%2FhH8Lm%2FB2BsL5HliA9RuuQBWwsaF9xIn37yxtufSGsHlMnxajtsjBlEYjbdOn8mxWB3c4iaJVBj3kTbFc2gnsDayEQdGfTVZ%2BF92%2FlR8PAXrgnIeWHzpPQgFH9M3jzaL4ZDFJUXlTmLnVG7MJkgfM6tNYVbfczwhNAzb2GmUMhkD%2FNZepWsITJCcRCF7aTjhXs8XKI9tZ2tiV0wpqS3wgY6pgHyY4xusijvTA4iIeBT2Y%2FLkbA78lzn0edAzwAmMYLrY6eCuKFV%2BhnjyXjQDUd0n0hvPtcVH1nPkkiY8%2F4%2Fxh7BhKi1ZzzM11wy2k3q7v3E9PWtAySo1qqK%2F9JtcYOtdV1sYmUBR%2BDKxjjjGzl2opIZ69rfJ4pMBO%2Bx4LMPWlh3ITYBwb0q17FOsw4lcHFwtGDCrygEzAg8LWtNZZd2iI49zIuAsLAZ&X-Amz-Signature=af6d4c690ae3a24b8228d5d13c1a732e3b6cca834bb27483c74006e68bd7be25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
