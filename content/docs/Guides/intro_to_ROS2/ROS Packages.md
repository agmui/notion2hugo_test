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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S45UOULB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIE04UXdS%2BYKDqLIcI0q79cP%2BXO3%2BKVI0AdY4B%2FGg1HQrAiEAziqh%2FjXye9cyT6129KJiGS7MnGzFErmT3G8gZmHMkH0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRhwO90UrDnZveo7SrcA2xI%2FoqMe%2BzMKqMAU%2FWwBygTKRHmxdiMU5xZtMBnstkU1GGBWk1OM2XK6lfQPrDJCGxQhhgP%2FC1CFYB4Nh69YCaAdC2BbjZG3ZtKuQ1E8H9VBNX4aD%2FgGi%2FiZrqR6a8OibYPoL0f86w67go3CIR%2Fq9RfLKM8qgXgVcp%2FkkF2R6p7Vi7NTxC2K6HnciK3JTCzA24psNOE6M%2F8xQxl1cDuSO7yBtOZdRo9DNarcrBiZZzRAGWjqF6rd0fwEk6FGI5flU4fROvv1d%2FXtXwdy2FeGYDzXamw8Ux%2Fb3LDwbpLI8%2FI17fSqVRolWDt%2FL3QRoHaejRGwLLM8EbkFWhSWX0Uzcgi26QCl6X9RRd2OL%2FPkWBfv9oLN5XZyeUyPxHi%2FiL6Mpc%2FV6NQJ2LuWeLJEijV7qw2fVekZTTou4dUzZJyMNkLjk2K8fqNxDcMXJw33eUIadrakBj8fDHrzwt2igMH%2B3xRW0UPMUJCCQPuisCWIJpUEtSZQYkoHnMoYB2UjWD%2BWaCEYdmFyu6BjqWYfAJXz1Nz7ONhI6M41H6i5eYw4sX%2BCo%2FTFH2ITiYp5Jskgzr26A1pMLxyG3Y72MJFHzt8WwHP%2BJLynAfNihV5TUmhV%2BuEpBqb9WmJOly1QN40MK2V678GOqUB%2BpnSJQ9NAU%2F1W63Khn33MRCBe5byCbWai64qs46edf9h8CgwF7SyVtRtJqy5p%2FkNsSUnFqkY3ZEkJmMJUEqg6nCyaKRdq7ue7dJ2xQs4JKY5hF0d11l9mEMlTFKuOJ6Tvnfe9n54gJ7NInbZhrHUokdNDnrvFPiwJ4p96fgBeNFD7W6UZvw8AAy4ETCMdJ4elkfSYVlab9oBNWy1ocOnM8GQ0O6h&X-Amz-Signature=f8b027a4fde71633026ae562215016866bdb81814a9adffb99d995867de09bcf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S45UOULB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIE04UXdS%2BYKDqLIcI0q79cP%2BXO3%2BKVI0AdY4B%2FGg1HQrAiEAziqh%2FjXye9cyT6129KJiGS7MnGzFErmT3G8gZmHMkH0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRhwO90UrDnZveo7SrcA2xI%2FoqMe%2BzMKqMAU%2FWwBygTKRHmxdiMU5xZtMBnstkU1GGBWk1OM2XK6lfQPrDJCGxQhhgP%2FC1CFYB4Nh69YCaAdC2BbjZG3ZtKuQ1E8H9VBNX4aD%2FgGi%2FiZrqR6a8OibYPoL0f86w67go3CIR%2Fq9RfLKM8qgXgVcp%2FkkF2R6p7Vi7NTxC2K6HnciK3JTCzA24psNOE6M%2F8xQxl1cDuSO7yBtOZdRo9DNarcrBiZZzRAGWjqF6rd0fwEk6FGI5flU4fROvv1d%2FXtXwdy2FeGYDzXamw8Ux%2Fb3LDwbpLI8%2FI17fSqVRolWDt%2FL3QRoHaejRGwLLM8EbkFWhSWX0Uzcgi26QCl6X9RRd2OL%2FPkWBfv9oLN5XZyeUyPxHi%2FiL6Mpc%2FV6NQJ2LuWeLJEijV7qw2fVekZTTou4dUzZJyMNkLjk2K8fqNxDcMXJw33eUIadrakBj8fDHrzwt2igMH%2B3xRW0UPMUJCCQPuisCWIJpUEtSZQYkoHnMoYB2UjWD%2BWaCEYdmFyu6BjqWYfAJXz1Nz7ONhI6M41H6i5eYw4sX%2BCo%2FTFH2ITiYp5Jskgzr26A1pMLxyG3Y72MJFHzt8WwHP%2BJLynAfNihV5TUmhV%2BuEpBqb9WmJOly1QN40MK2V678GOqUB%2BpnSJQ9NAU%2F1W63Khn33MRCBe5byCbWai64qs46edf9h8CgwF7SyVtRtJqy5p%2FkNsSUnFqkY3ZEkJmMJUEqg6nCyaKRdq7ue7dJ2xQs4JKY5hF0d11l9mEMlTFKuOJ6Tvnfe9n54gJ7NInbZhrHUokdNDnrvFPiwJ4p96fgBeNFD7W6UZvw8AAy4ETCMdJ4elkfSYVlab9oBNWy1ocOnM8GQ0O6h&X-Amz-Signature=eab550e63e3103645bca49b60bf30455c07c0af352f1b57f3c1d0bafc0737a12&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S45UOULB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIE04UXdS%2BYKDqLIcI0q79cP%2BXO3%2BKVI0AdY4B%2FGg1HQrAiEAziqh%2FjXye9cyT6129KJiGS7MnGzFErmT3G8gZmHMkH0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRhwO90UrDnZveo7SrcA2xI%2FoqMe%2BzMKqMAU%2FWwBygTKRHmxdiMU5xZtMBnstkU1GGBWk1OM2XK6lfQPrDJCGxQhhgP%2FC1CFYB4Nh69YCaAdC2BbjZG3ZtKuQ1E8H9VBNX4aD%2FgGi%2FiZrqR6a8OibYPoL0f86w67go3CIR%2Fq9RfLKM8qgXgVcp%2FkkF2R6p7Vi7NTxC2K6HnciK3JTCzA24psNOE6M%2F8xQxl1cDuSO7yBtOZdRo9DNarcrBiZZzRAGWjqF6rd0fwEk6FGI5flU4fROvv1d%2FXtXwdy2FeGYDzXamw8Ux%2Fb3LDwbpLI8%2FI17fSqVRolWDt%2FL3QRoHaejRGwLLM8EbkFWhSWX0Uzcgi26QCl6X9RRd2OL%2FPkWBfv9oLN5XZyeUyPxHi%2FiL6Mpc%2FV6NQJ2LuWeLJEijV7qw2fVekZTTou4dUzZJyMNkLjk2K8fqNxDcMXJw33eUIadrakBj8fDHrzwt2igMH%2B3xRW0UPMUJCCQPuisCWIJpUEtSZQYkoHnMoYB2UjWD%2BWaCEYdmFyu6BjqWYfAJXz1Nz7ONhI6M41H6i5eYw4sX%2BCo%2FTFH2ITiYp5Jskgzr26A1pMLxyG3Y72MJFHzt8WwHP%2BJLynAfNihV5TUmhV%2BuEpBqb9WmJOly1QN40MK2V678GOqUB%2BpnSJQ9NAU%2F1W63Khn33MRCBe5byCbWai64qs46edf9h8CgwF7SyVtRtJqy5p%2FkNsSUnFqkY3ZEkJmMJUEqg6nCyaKRdq7ue7dJ2xQs4JKY5hF0d11l9mEMlTFKuOJ6Tvnfe9n54gJ7NInbZhrHUokdNDnrvFPiwJ4p96fgBeNFD7W6UZvw8AAy4ETCMdJ4elkfSYVlab9oBNWy1ocOnM8GQ0O6h&X-Amz-Signature=19f24a91edd6611a4978bc54f0fdaf9c12d02a57eec53979af0ffb56e9920379&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S45UOULB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIE04UXdS%2BYKDqLIcI0q79cP%2BXO3%2BKVI0AdY4B%2FGg1HQrAiEAziqh%2FjXye9cyT6129KJiGS7MnGzFErmT3G8gZmHMkH0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRhwO90UrDnZveo7SrcA2xI%2FoqMe%2BzMKqMAU%2FWwBygTKRHmxdiMU5xZtMBnstkU1GGBWk1OM2XK6lfQPrDJCGxQhhgP%2FC1CFYB4Nh69YCaAdC2BbjZG3ZtKuQ1E8H9VBNX4aD%2FgGi%2FiZrqR6a8OibYPoL0f86w67go3CIR%2Fq9RfLKM8qgXgVcp%2FkkF2R6p7Vi7NTxC2K6HnciK3JTCzA24psNOE6M%2F8xQxl1cDuSO7yBtOZdRo9DNarcrBiZZzRAGWjqF6rd0fwEk6FGI5flU4fROvv1d%2FXtXwdy2FeGYDzXamw8Ux%2Fb3LDwbpLI8%2FI17fSqVRolWDt%2FL3QRoHaejRGwLLM8EbkFWhSWX0Uzcgi26QCl6X9RRd2OL%2FPkWBfv9oLN5XZyeUyPxHi%2FiL6Mpc%2FV6NQJ2LuWeLJEijV7qw2fVekZTTou4dUzZJyMNkLjk2K8fqNxDcMXJw33eUIadrakBj8fDHrzwt2igMH%2B3xRW0UPMUJCCQPuisCWIJpUEtSZQYkoHnMoYB2UjWD%2BWaCEYdmFyu6BjqWYfAJXz1Nz7ONhI6M41H6i5eYw4sX%2BCo%2FTFH2ITiYp5Jskgzr26A1pMLxyG3Y72MJFHzt8WwHP%2BJLynAfNihV5TUmhV%2BuEpBqb9WmJOly1QN40MK2V678GOqUB%2BpnSJQ9NAU%2F1W63Khn33MRCBe5byCbWai64qs46edf9h8CgwF7SyVtRtJqy5p%2FkNsSUnFqkY3ZEkJmMJUEqg6nCyaKRdq7ue7dJ2xQs4JKY5hF0d11l9mEMlTFKuOJ6Tvnfe9n54gJ7NInbZhrHUokdNDnrvFPiwJ4p96fgBeNFD7W6UZvw8AAy4ETCMdJ4elkfSYVlab9oBNWy1ocOnM8GQ0O6h&X-Amz-Signature=e39c6f13e42a903da636ccb936e17b884523bf347d1528657ccbc3b247a1c152&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S45UOULB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIE04UXdS%2BYKDqLIcI0q79cP%2BXO3%2BKVI0AdY4B%2FGg1HQrAiEAziqh%2FjXye9cyT6129KJiGS7MnGzFErmT3G8gZmHMkH0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRhwO90UrDnZveo7SrcA2xI%2FoqMe%2BzMKqMAU%2FWwBygTKRHmxdiMU5xZtMBnstkU1GGBWk1OM2XK6lfQPrDJCGxQhhgP%2FC1CFYB4Nh69YCaAdC2BbjZG3ZtKuQ1E8H9VBNX4aD%2FgGi%2FiZrqR6a8OibYPoL0f86w67go3CIR%2Fq9RfLKM8qgXgVcp%2FkkF2R6p7Vi7NTxC2K6HnciK3JTCzA24psNOE6M%2F8xQxl1cDuSO7yBtOZdRo9DNarcrBiZZzRAGWjqF6rd0fwEk6FGI5flU4fROvv1d%2FXtXwdy2FeGYDzXamw8Ux%2Fb3LDwbpLI8%2FI17fSqVRolWDt%2FL3QRoHaejRGwLLM8EbkFWhSWX0Uzcgi26QCl6X9RRd2OL%2FPkWBfv9oLN5XZyeUyPxHi%2FiL6Mpc%2FV6NQJ2LuWeLJEijV7qw2fVekZTTou4dUzZJyMNkLjk2K8fqNxDcMXJw33eUIadrakBj8fDHrzwt2igMH%2B3xRW0UPMUJCCQPuisCWIJpUEtSZQYkoHnMoYB2UjWD%2BWaCEYdmFyu6BjqWYfAJXz1Nz7ONhI6M41H6i5eYw4sX%2BCo%2FTFH2ITiYp5Jskgzr26A1pMLxyG3Y72MJFHzt8WwHP%2BJLynAfNihV5TUmhV%2BuEpBqb9WmJOly1QN40MK2V678GOqUB%2BpnSJQ9NAU%2F1W63Khn33MRCBe5byCbWai64qs46edf9h8CgwF7SyVtRtJqy5p%2FkNsSUnFqkY3ZEkJmMJUEqg6nCyaKRdq7ue7dJ2xQs4JKY5hF0d11l9mEMlTFKuOJ6Tvnfe9n54gJ7NInbZhrHUokdNDnrvFPiwJ4p96fgBeNFD7W6UZvw8AAy4ETCMdJ4elkfSYVlab9oBNWy1ocOnM8GQ0O6h&X-Amz-Signature=5e677d76f6d8676f2b9314472f29c9267e0f1c8648850ade54e1450868df21a9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S45UOULB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIE04UXdS%2BYKDqLIcI0q79cP%2BXO3%2BKVI0AdY4B%2FGg1HQrAiEAziqh%2FjXye9cyT6129KJiGS7MnGzFErmT3G8gZmHMkH0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRhwO90UrDnZveo7SrcA2xI%2FoqMe%2BzMKqMAU%2FWwBygTKRHmxdiMU5xZtMBnstkU1GGBWk1OM2XK6lfQPrDJCGxQhhgP%2FC1CFYB4Nh69YCaAdC2BbjZG3ZtKuQ1E8H9VBNX4aD%2FgGi%2FiZrqR6a8OibYPoL0f86w67go3CIR%2Fq9RfLKM8qgXgVcp%2FkkF2R6p7Vi7NTxC2K6HnciK3JTCzA24psNOE6M%2F8xQxl1cDuSO7yBtOZdRo9DNarcrBiZZzRAGWjqF6rd0fwEk6FGI5flU4fROvv1d%2FXtXwdy2FeGYDzXamw8Ux%2Fb3LDwbpLI8%2FI17fSqVRolWDt%2FL3QRoHaejRGwLLM8EbkFWhSWX0Uzcgi26QCl6X9RRd2OL%2FPkWBfv9oLN5XZyeUyPxHi%2FiL6Mpc%2FV6NQJ2LuWeLJEijV7qw2fVekZTTou4dUzZJyMNkLjk2K8fqNxDcMXJw33eUIadrakBj8fDHrzwt2igMH%2B3xRW0UPMUJCCQPuisCWIJpUEtSZQYkoHnMoYB2UjWD%2BWaCEYdmFyu6BjqWYfAJXz1Nz7ONhI6M41H6i5eYw4sX%2BCo%2FTFH2ITiYp5Jskgzr26A1pMLxyG3Y72MJFHzt8WwHP%2BJLynAfNihV5TUmhV%2BuEpBqb9WmJOly1QN40MK2V678GOqUB%2BpnSJQ9NAU%2F1W63Khn33MRCBe5byCbWai64qs46edf9h8CgwF7SyVtRtJqy5p%2FkNsSUnFqkY3ZEkJmMJUEqg6nCyaKRdq7ue7dJ2xQs4JKY5hF0d11l9mEMlTFKuOJ6Tvnfe9n54gJ7NInbZhrHUokdNDnrvFPiwJ4p96fgBeNFD7W6UZvw8AAy4ETCMdJ4elkfSYVlab9oBNWy1ocOnM8GQ0O6h&X-Amz-Signature=cc05a06288732e320a70d2e699007d9862cd8c6926aab332c11a77d7b2df8d63&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S45UOULB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIE04UXdS%2BYKDqLIcI0q79cP%2BXO3%2BKVI0AdY4B%2FGg1HQrAiEAziqh%2FjXye9cyT6129KJiGS7MnGzFErmT3G8gZmHMkH0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRhwO90UrDnZveo7SrcA2xI%2FoqMe%2BzMKqMAU%2FWwBygTKRHmxdiMU5xZtMBnstkU1GGBWk1OM2XK6lfQPrDJCGxQhhgP%2FC1CFYB4Nh69YCaAdC2BbjZG3ZtKuQ1E8H9VBNX4aD%2FgGi%2FiZrqR6a8OibYPoL0f86w67go3CIR%2Fq9RfLKM8qgXgVcp%2FkkF2R6p7Vi7NTxC2K6HnciK3JTCzA24psNOE6M%2F8xQxl1cDuSO7yBtOZdRo9DNarcrBiZZzRAGWjqF6rd0fwEk6FGI5flU4fROvv1d%2FXtXwdy2FeGYDzXamw8Ux%2Fb3LDwbpLI8%2FI17fSqVRolWDt%2FL3QRoHaejRGwLLM8EbkFWhSWX0Uzcgi26QCl6X9RRd2OL%2FPkWBfv9oLN5XZyeUyPxHi%2FiL6Mpc%2FV6NQJ2LuWeLJEijV7qw2fVekZTTou4dUzZJyMNkLjk2K8fqNxDcMXJw33eUIadrakBj8fDHrzwt2igMH%2B3xRW0UPMUJCCQPuisCWIJpUEtSZQYkoHnMoYB2UjWD%2BWaCEYdmFyu6BjqWYfAJXz1Nz7ONhI6M41H6i5eYw4sX%2BCo%2FTFH2ITiYp5Jskgzr26A1pMLxyG3Y72MJFHzt8WwHP%2BJLynAfNihV5TUmhV%2BuEpBqb9WmJOly1QN40MK2V678GOqUB%2BpnSJQ9NAU%2F1W63Khn33MRCBe5byCbWai64qs46edf9h8CgwF7SyVtRtJqy5p%2FkNsSUnFqkY3ZEkJmMJUEqg6nCyaKRdq7ue7dJ2xQs4JKY5hF0d11l9mEMlTFKuOJ6Tvnfe9n54gJ7NInbZhrHUokdNDnrvFPiwJ4p96fgBeNFD7W6UZvw8AAy4ETCMdJ4elkfSYVlab9oBNWy1ocOnM8GQ0O6h&X-Amz-Signature=d30fc34a6394dce4c3c541b9b4c94cf3615984f4a91036750476b69741b82531&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
