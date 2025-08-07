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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKIK7YZ2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCN1vxzWsLdHZPEXkG7pvptQM%2BjdIpyGRabLCQgrSWS8QIgDyLuS6s6yFb9OOGAd%2FW2PDxlu7x0kK2%2BVXXiRkstFsQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCg2G5TNKXz0NG%2Bp%2FircA42b9fctYKrABmpNVoxfc%2FXR4i%2F2ufnTiRE9XdfyD1sjNvNw0DQJloswdcH2aIu7%2FJ4i2au1GVL0aA%2FGpt5FYVhgwpPVcKtzteqA00q7Oyl1w2ADVzmLpH8QPl0GLS%2B2xjgjWdc5LfYT3Vqi1CPuTyDm7oYRrUJs3x7Abp8Zn6GOPpEQHBmFdwzgGsjjxe5WW963wglebO0O%2F3LNsvNAEKJ8iZtjMiyj9eeuorAgnkBK7U5lxJHqkcfc1uNGtY7QecbbbuOQjy08pb7RYcrrD9jZrB03rW%2FLzGONulcmMnoM%2F%2FLwnDqETLM2J3%2F8J5JLMvc6ry9a1gElwVBo39ULsqnWMMhHzgiZm4yX%2FYN1MnbLKmX63hX9RG6QIYSUucBZc76s%2BVsVROLtygqVDxQF5LodXBA3cMuUWHvpVUGu9WFznGd8BPLJilnfm72MEq0OnUOVslgNtrluGVSwlPokwlwuZVJRBqs85Kmy5%2B4sEtZlbQ60n94P%2FwMbSDrwfPfKH32qioZOBeECvnsRHGP42DoKEiBygGgORDMEviOkoQQOKdrq9LDL3QI%2F5xPEEtVSnWaTY7VDT7UhE8B6vpJDmgwh2PC9RJnMVsKL4RVjlJ6mRk0U4lPsi3O8oPvlMMTI0MQGOqUBstzfQKX42bZFpTpaTpdKdwC9DgnfHS6diV0%2Fw0SLcfjam7f8FJal0LxakLEOSXD2DTBdb7jz3L3LhwlCReyq8Y%2BxD4yixyIh8iDVqL1iqhMyTqxun8N4nFh2vWCPPDXirY%2F%2FjzCUiIpk02fK%2BMkpHUthyBpW1DCZlr0qzvbI%2FNULQQlFNDTfKGd1pJ8bDZL6KZoFeotpB2pXsXLHD%2Be3Bb6t1lwK&X-Amz-Signature=a8d1093f81d9ab4d0f48d9a06c0c3729187f463cbdb292a6a5900dd983330f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKIK7YZ2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCN1vxzWsLdHZPEXkG7pvptQM%2BjdIpyGRabLCQgrSWS8QIgDyLuS6s6yFb9OOGAd%2FW2PDxlu7x0kK2%2BVXXiRkstFsQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCg2G5TNKXz0NG%2Bp%2FircA42b9fctYKrABmpNVoxfc%2FXR4i%2F2ufnTiRE9XdfyD1sjNvNw0DQJloswdcH2aIu7%2FJ4i2au1GVL0aA%2FGpt5FYVhgwpPVcKtzteqA00q7Oyl1w2ADVzmLpH8QPl0GLS%2B2xjgjWdc5LfYT3Vqi1CPuTyDm7oYRrUJs3x7Abp8Zn6GOPpEQHBmFdwzgGsjjxe5WW963wglebO0O%2F3LNsvNAEKJ8iZtjMiyj9eeuorAgnkBK7U5lxJHqkcfc1uNGtY7QecbbbuOQjy08pb7RYcrrD9jZrB03rW%2FLzGONulcmMnoM%2F%2FLwnDqETLM2J3%2F8J5JLMvc6ry9a1gElwVBo39ULsqnWMMhHzgiZm4yX%2FYN1MnbLKmX63hX9RG6QIYSUucBZc76s%2BVsVROLtygqVDxQF5LodXBA3cMuUWHvpVUGu9WFznGd8BPLJilnfm72MEq0OnUOVslgNtrluGVSwlPokwlwuZVJRBqs85Kmy5%2B4sEtZlbQ60n94P%2FwMbSDrwfPfKH32qioZOBeECvnsRHGP42DoKEiBygGgORDMEviOkoQQOKdrq9LDL3QI%2F5xPEEtVSnWaTY7VDT7UhE8B6vpJDmgwh2PC9RJnMVsKL4RVjlJ6mRk0U4lPsi3O8oPvlMMTI0MQGOqUBstzfQKX42bZFpTpaTpdKdwC9DgnfHS6diV0%2Fw0SLcfjam7f8FJal0LxakLEOSXD2DTBdb7jz3L3LhwlCReyq8Y%2BxD4yixyIh8iDVqL1iqhMyTqxun8N4nFh2vWCPPDXirY%2F%2FjzCUiIpk02fK%2BMkpHUthyBpW1DCZlr0qzvbI%2FNULQQlFNDTfKGd1pJ8bDZL6KZoFeotpB2pXsXLHD%2Be3Bb6t1lwK&X-Amz-Signature=61b8ab715c661214a025dfb54cfa6b35195f11e1222c3daf461620b04e23c393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKIK7YZ2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCN1vxzWsLdHZPEXkG7pvptQM%2BjdIpyGRabLCQgrSWS8QIgDyLuS6s6yFb9OOGAd%2FW2PDxlu7x0kK2%2BVXXiRkstFsQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCg2G5TNKXz0NG%2Bp%2FircA42b9fctYKrABmpNVoxfc%2FXR4i%2F2ufnTiRE9XdfyD1sjNvNw0DQJloswdcH2aIu7%2FJ4i2au1GVL0aA%2FGpt5FYVhgwpPVcKtzteqA00q7Oyl1w2ADVzmLpH8QPl0GLS%2B2xjgjWdc5LfYT3Vqi1CPuTyDm7oYRrUJs3x7Abp8Zn6GOPpEQHBmFdwzgGsjjxe5WW963wglebO0O%2F3LNsvNAEKJ8iZtjMiyj9eeuorAgnkBK7U5lxJHqkcfc1uNGtY7QecbbbuOQjy08pb7RYcrrD9jZrB03rW%2FLzGONulcmMnoM%2F%2FLwnDqETLM2J3%2F8J5JLMvc6ry9a1gElwVBo39ULsqnWMMhHzgiZm4yX%2FYN1MnbLKmX63hX9RG6QIYSUucBZc76s%2BVsVROLtygqVDxQF5LodXBA3cMuUWHvpVUGu9WFznGd8BPLJilnfm72MEq0OnUOVslgNtrluGVSwlPokwlwuZVJRBqs85Kmy5%2B4sEtZlbQ60n94P%2FwMbSDrwfPfKH32qioZOBeECvnsRHGP42DoKEiBygGgORDMEviOkoQQOKdrq9LDL3QI%2F5xPEEtVSnWaTY7VDT7UhE8B6vpJDmgwh2PC9RJnMVsKL4RVjlJ6mRk0U4lPsi3O8oPvlMMTI0MQGOqUBstzfQKX42bZFpTpaTpdKdwC9DgnfHS6diV0%2Fw0SLcfjam7f8FJal0LxakLEOSXD2DTBdb7jz3L3LhwlCReyq8Y%2BxD4yixyIh8iDVqL1iqhMyTqxun8N4nFh2vWCPPDXirY%2F%2FjzCUiIpk02fK%2BMkpHUthyBpW1DCZlr0qzvbI%2FNULQQlFNDTfKGd1pJ8bDZL6KZoFeotpB2pXsXLHD%2Be3Bb6t1lwK&X-Amz-Signature=232df4b68663e1cb26710284023a2840056d3093c58b763c804806d1e6719d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKIK7YZ2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCN1vxzWsLdHZPEXkG7pvptQM%2BjdIpyGRabLCQgrSWS8QIgDyLuS6s6yFb9OOGAd%2FW2PDxlu7x0kK2%2BVXXiRkstFsQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCg2G5TNKXz0NG%2Bp%2FircA42b9fctYKrABmpNVoxfc%2FXR4i%2F2ufnTiRE9XdfyD1sjNvNw0DQJloswdcH2aIu7%2FJ4i2au1GVL0aA%2FGpt5FYVhgwpPVcKtzteqA00q7Oyl1w2ADVzmLpH8QPl0GLS%2B2xjgjWdc5LfYT3Vqi1CPuTyDm7oYRrUJs3x7Abp8Zn6GOPpEQHBmFdwzgGsjjxe5WW963wglebO0O%2F3LNsvNAEKJ8iZtjMiyj9eeuorAgnkBK7U5lxJHqkcfc1uNGtY7QecbbbuOQjy08pb7RYcrrD9jZrB03rW%2FLzGONulcmMnoM%2F%2FLwnDqETLM2J3%2F8J5JLMvc6ry9a1gElwVBo39ULsqnWMMhHzgiZm4yX%2FYN1MnbLKmX63hX9RG6QIYSUucBZc76s%2BVsVROLtygqVDxQF5LodXBA3cMuUWHvpVUGu9WFznGd8BPLJilnfm72MEq0OnUOVslgNtrluGVSwlPokwlwuZVJRBqs85Kmy5%2B4sEtZlbQ60n94P%2FwMbSDrwfPfKH32qioZOBeECvnsRHGP42DoKEiBygGgORDMEviOkoQQOKdrq9LDL3QI%2F5xPEEtVSnWaTY7VDT7UhE8B6vpJDmgwh2PC9RJnMVsKL4RVjlJ6mRk0U4lPsi3O8oPvlMMTI0MQGOqUBstzfQKX42bZFpTpaTpdKdwC9DgnfHS6diV0%2Fw0SLcfjam7f8FJal0LxakLEOSXD2DTBdb7jz3L3LhwlCReyq8Y%2BxD4yixyIh8iDVqL1iqhMyTqxun8N4nFh2vWCPPDXirY%2F%2FjzCUiIpk02fK%2BMkpHUthyBpW1DCZlr0qzvbI%2FNULQQlFNDTfKGd1pJ8bDZL6KZoFeotpB2pXsXLHD%2Be3Bb6t1lwK&X-Amz-Signature=d5b0059195ed0900a791f8b0d92c8c9da87ddfa22d94a91142209c061e32909e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKIK7YZ2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCN1vxzWsLdHZPEXkG7pvptQM%2BjdIpyGRabLCQgrSWS8QIgDyLuS6s6yFb9OOGAd%2FW2PDxlu7x0kK2%2BVXXiRkstFsQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCg2G5TNKXz0NG%2Bp%2FircA42b9fctYKrABmpNVoxfc%2FXR4i%2F2ufnTiRE9XdfyD1sjNvNw0DQJloswdcH2aIu7%2FJ4i2au1GVL0aA%2FGpt5FYVhgwpPVcKtzteqA00q7Oyl1w2ADVzmLpH8QPl0GLS%2B2xjgjWdc5LfYT3Vqi1CPuTyDm7oYRrUJs3x7Abp8Zn6GOPpEQHBmFdwzgGsjjxe5WW963wglebO0O%2F3LNsvNAEKJ8iZtjMiyj9eeuorAgnkBK7U5lxJHqkcfc1uNGtY7QecbbbuOQjy08pb7RYcrrD9jZrB03rW%2FLzGONulcmMnoM%2F%2FLwnDqETLM2J3%2F8J5JLMvc6ry9a1gElwVBo39ULsqnWMMhHzgiZm4yX%2FYN1MnbLKmX63hX9RG6QIYSUucBZc76s%2BVsVROLtygqVDxQF5LodXBA3cMuUWHvpVUGu9WFznGd8BPLJilnfm72MEq0OnUOVslgNtrluGVSwlPokwlwuZVJRBqs85Kmy5%2B4sEtZlbQ60n94P%2FwMbSDrwfPfKH32qioZOBeECvnsRHGP42DoKEiBygGgORDMEviOkoQQOKdrq9LDL3QI%2F5xPEEtVSnWaTY7VDT7UhE8B6vpJDmgwh2PC9RJnMVsKL4RVjlJ6mRk0U4lPsi3O8oPvlMMTI0MQGOqUBstzfQKX42bZFpTpaTpdKdwC9DgnfHS6diV0%2Fw0SLcfjam7f8FJal0LxakLEOSXD2DTBdb7jz3L3LhwlCReyq8Y%2BxD4yixyIh8iDVqL1iqhMyTqxun8N4nFh2vWCPPDXirY%2F%2FjzCUiIpk02fK%2BMkpHUthyBpW1DCZlr0qzvbI%2FNULQQlFNDTfKGd1pJ8bDZL6KZoFeotpB2pXsXLHD%2Be3Bb6t1lwK&X-Amz-Signature=5c0d327edc2511696deb22111b00f91067f099a38fa386ad0cf2ae03a8fdf2c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKIK7YZ2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCN1vxzWsLdHZPEXkG7pvptQM%2BjdIpyGRabLCQgrSWS8QIgDyLuS6s6yFb9OOGAd%2FW2PDxlu7x0kK2%2BVXXiRkstFsQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCg2G5TNKXz0NG%2Bp%2FircA42b9fctYKrABmpNVoxfc%2FXR4i%2F2ufnTiRE9XdfyD1sjNvNw0DQJloswdcH2aIu7%2FJ4i2au1GVL0aA%2FGpt5FYVhgwpPVcKtzteqA00q7Oyl1w2ADVzmLpH8QPl0GLS%2B2xjgjWdc5LfYT3Vqi1CPuTyDm7oYRrUJs3x7Abp8Zn6GOPpEQHBmFdwzgGsjjxe5WW963wglebO0O%2F3LNsvNAEKJ8iZtjMiyj9eeuorAgnkBK7U5lxJHqkcfc1uNGtY7QecbbbuOQjy08pb7RYcrrD9jZrB03rW%2FLzGONulcmMnoM%2F%2FLwnDqETLM2J3%2F8J5JLMvc6ry9a1gElwVBo39ULsqnWMMhHzgiZm4yX%2FYN1MnbLKmX63hX9RG6QIYSUucBZc76s%2BVsVROLtygqVDxQF5LodXBA3cMuUWHvpVUGu9WFznGd8BPLJilnfm72MEq0OnUOVslgNtrluGVSwlPokwlwuZVJRBqs85Kmy5%2B4sEtZlbQ60n94P%2FwMbSDrwfPfKH32qioZOBeECvnsRHGP42DoKEiBygGgORDMEviOkoQQOKdrq9LDL3QI%2F5xPEEtVSnWaTY7VDT7UhE8B6vpJDmgwh2PC9RJnMVsKL4RVjlJ6mRk0U4lPsi3O8oPvlMMTI0MQGOqUBstzfQKX42bZFpTpaTpdKdwC9DgnfHS6diV0%2Fw0SLcfjam7f8FJal0LxakLEOSXD2DTBdb7jz3L3LhwlCReyq8Y%2BxD4yixyIh8iDVqL1iqhMyTqxun8N4nFh2vWCPPDXirY%2F%2FjzCUiIpk02fK%2BMkpHUthyBpW1DCZlr0qzvbI%2FNULQQlFNDTfKGd1pJ8bDZL6KZoFeotpB2pXsXLHD%2Be3Bb6t1lwK&X-Amz-Signature=1ebcf4daf155edb5c1d704ee9701af247b5a0ff25ebdc560a29366beef3aa425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKIK7YZ2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCN1vxzWsLdHZPEXkG7pvptQM%2BjdIpyGRabLCQgrSWS8QIgDyLuS6s6yFb9OOGAd%2FW2PDxlu7x0kK2%2BVXXiRkstFsQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCg2G5TNKXz0NG%2Bp%2FircA42b9fctYKrABmpNVoxfc%2FXR4i%2F2ufnTiRE9XdfyD1sjNvNw0DQJloswdcH2aIu7%2FJ4i2au1GVL0aA%2FGpt5FYVhgwpPVcKtzteqA00q7Oyl1w2ADVzmLpH8QPl0GLS%2B2xjgjWdc5LfYT3Vqi1CPuTyDm7oYRrUJs3x7Abp8Zn6GOPpEQHBmFdwzgGsjjxe5WW963wglebO0O%2F3LNsvNAEKJ8iZtjMiyj9eeuorAgnkBK7U5lxJHqkcfc1uNGtY7QecbbbuOQjy08pb7RYcrrD9jZrB03rW%2FLzGONulcmMnoM%2F%2FLwnDqETLM2J3%2F8J5JLMvc6ry9a1gElwVBo39ULsqnWMMhHzgiZm4yX%2FYN1MnbLKmX63hX9RG6QIYSUucBZc76s%2BVsVROLtygqVDxQF5LodXBA3cMuUWHvpVUGu9WFznGd8BPLJilnfm72MEq0OnUOVslgNtrluGVSwlPokwlwuZVJRBqs85Kmy5%2B4sEtZlbQ60n94P%2FwMbSDrwfPfKH32qioZOBeECvnsRHGP42DoKEiBygGgORDMEviOkoQQOKdrq9LDL3QI%2F5xPEEtVSnWaTY7VDT7UhE8B6vpJDmgwh2PC9RJnMVsKL4RVjlJ6mRk0U4lPsi3O8oPvlMMTI0MQGOqUBstzfQKX42bZFpTpaTpdKdwC9DgnfHS6diV0%2Fw0SLcfjam7f8FJal0LxakLEOSXD2DTBdb7jz3L3LhwlCReyq8Y%2BxD4yixyIh8iDVqL1iqhMyTqxun8N4nFh2vWCPPDXirY%2F%2FjzCUiIpk02fK%2BMkpHUthyBpW1DCZlr0qzvbI%2FNULQQlFNDTfKGd1pJ8bDZL6KZoFeotpB2pXsXLHD%2Be3Bb6t1lwK&X-Amz-Signature=af6726154f900cd5d4006df2419f6c9200c19819ba5d71ed9480230db3954040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
