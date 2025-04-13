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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JVIOMV%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDwgsL%2F%2BjFxHzuEx8l50gFVKTID%2FoKGYe5hT0oFmwDuYQIhAKVqkqNra0oBHz1UpE4LYPNLivc7WTcxl8N3V46dU8ZCKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9qF%2FnZAo4wJJubxsq3APVySTiybLPb8RmC7ANSkNypSUCO4sTrTEh8%2B9avZF2FWaD0Dbok%2FYDZC1kRN6DniYg1wKLd21hKdX5AD2clxvjGITO9laEL0ZEMJmJutJ5s09CTTP%2B%2FOXRgj9ZhLtu2mJPp%2BY5fP315%2FMvA1w%2F%2B2QmTMJm6qYzH7dZ5P7XDzgRt%2F4SXaIx8Thp%2FsuK11zLnb5wwnSAMN2H%2FaxP%2BPsIRnAKGiNVw%2Bi%2BbBKtLp1v7D8BuF4HDSf7WJ0DSPZqsZYp30nuIAFNIIVE2aGUiYE1Urcer2Tng%2FKZK1Wy0U3qfOvHVQTEOqQZJzhsEngcUv2HZYRfUoEh3fvEjR0KkfvmBUTALTjMz4WnTL3Wsd5r6Vq51PFNa%2BT7R1RXiHUSTnHPIT7K93QMe467WvR3uiBi2%2FTjnWhjRv5OmJfEqu4HVNoDcXbkCUrYORAjpBQiwWIjmiqQrfkY2vFRSO%2FwOc%2BVm8UbNYtjvWTZOZy6autl9IlDa09R7K5UcrXCMcTfGoqqhFVNSBVCTjR4WLCKB9Uj7BijHY5KYXfpp0Y9QjtSRTKPvx5%2FOVGSirM0i8zUi1BGJiLshzoWFxlKxjTQK%2FM4x58obeBoJveqyE9V8QgNhmh7FqqUFPKfL1pt2I4X%2FzCs2%2B%2B%2FBjqkAehGtGinBAOis3BGWvgb0%2FqzJ%2BIbKJeiIt51WlUg5u4aSxIwJYdmc7MknjyJ8zC7Yr8286NZa1%2BgQFkRPUFtSDYx0tfO0yIzcZXX8pfLtE1skvJOeqf4iR57MbV2vtwHyryxXcjOcQ8g0it%2BJRgNL2kw%2BY8q2LTuVX020y%2FndLFnrM412xaK5DSeYSCWBMx1fpeEBfURu4Dw0PBhCEWBBs2ZxFt5&X-Amz-Signature=552b597d15f3d13d4612d639d21200f5cbaecb0c861cf428d79bccbc52c5e6d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JVIOMV%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDwgsL%2F%2BjFxHzuEx8l50gFVKTID%2FoKGYe5hT0oFmwDuYQIhAKVqkqNra0oBHz1UpE4LYPNLivc7WTcxl8N3V46dU8ZCKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9qF%2FnZAo4wJJubxsq3APVySTiybLPb8RmC7ANSkNypSUCO4sTrTEh8%2B9avZF2FWaD0Dbok%2FYDZC1kRN6DniYg1wKLd21hKdX5AD2clxvjGITO9laEL0ZEMJmJutJ5s09CTTP%2B%2FOXRgj9ZhLtu2mJPp%2BY5fP315%2FMvA1w%2F%2B2QmTMJm6qYzH7dZ5P7XDzgRt%2F4SXaIx8Thp%2FsuK11zLnb5wwnSAMN2H%2FaxP%2BPsIRnAKGiNVw%2Bi%2BbBKtLp1v7D8BuF4HDSf7WJ0DSPZqsZYp30nuIAFNIIVE2aGUiYE1Urcer2Tng%2FKZK1Wy0U3qfOvHVQTEOqQZJzhsEngcUv2HZYRfUoEh3fvEjR0KkfvmBUTALTjMz4WnTL3Wsd5r6Vq51PFNa%2BT7R1RXiHUSTnHPIT7K93QMe467WvR3uiBi2%2FTjnWhjRv5OmJfEqu4HVNoDcXbkCUrYORAjpBQiwWIjmiqQrfkY2vFRSO%2FwOc%2BVm8UbNYtjvWTZOZy6autl9IlDa09R7K5UcrXCMcTfGoqqhFVNSBVCTjR4WLCKB9Uj7BijHY5KYXfpp0Y9QjtSRTKPvx5%2FOVGSirM0i8zUi1BGJiLshzoWFxlKxjTQK%2FM4x58obeBoJveqyE9V8QgNhmh7FqqUFPKfL1pt2I4X%2FzCs2%2B%2B%2FBjqkAehGtGinBAOis3BGWvgb0%2FqzJ%2BIbKJeiIt51WlUg5u4aSxIwJYdmc7MknjyJ8zC7Yr8286NZa1%2BgQFkRPUFtSDYx0tfO0yIzcZXX8pfLtE1skvJOeqf4iR57MbV2vtwHyryxXcjOcQ8g0it%2BJRgNL2kw%2BY8q2LTuVX020y%2FndLFnrM412xaK5DSeYSCWBMx1fpeEBfURu4Dw0PBhCEWBBs2ZxFt5&X-Amz-Signature=b38e8313aa2713d43e6fc868aa951ef56ba902db867f8a7d1ff2cdd19032ec02&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JVIOMV%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDwgsL%2F%2BjFxHzuEx8l50gFVKTID%2FoKGYe5hT0oFmwDuYQIhAKVqkqNra0oBHz1UpE4LYPNLivc7WTcxl8N3V46dU8ZCKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9qF%2FnZAo4wJJubxsq3APVySTiybLPb8RmC7ANSkNypSUCO4sTrTEh8%2B9avZF2FWaD0Dbok%2FYDZC1kRN6DniYg1wKLd21hKdX5AD2clxvjGITO9laEL0ZEMJmJutJ5s09CTTP%2B%2FOXRgj9ZhLtu2mJPp%2BY5fP315%2FMvA1w%2F%2B2QmTMJm6qYzH7dZ5P7XDzgRt%2F4SXaIx8Thp%2FsuK11zLnb5wwnSAMN2H%2FaxP%2BPsIRnAKGiNVw%2Bi%2BbBKtLp1v7D8BuF4HDSf7WJ0DSPZqsZYp30nuIAFNIIVE2aGUiYE1Urcer2Tng%2FKZK1Wy0U3qfOvHVQTEOqQZJzhsEngcUv2HZYRfUoEh3fvEjR0KkfvmBUTALTjMz4WnTL3Wsd5r6Vq51PFNa%2BT7R1RXiHUSTnHPIT7K93QMe467WvR3uiBi2%2FTjnWhjRv5OmJfEqu4HVNoDcXbkCUrYORAjpBQiwWIjmiqQrfkY2vFRSO%2FwOc%2BVm8UbNYtjvWTZOZy6autl9IlDa09R7K5UcrXCMcTfGoqqhFVNSBVCTjR4WLCKB9Uj7BijHY5KYXfpp0Y9QjtSRTKPvx5%2FOVGSirM0i8zUi1BGJiLshzoWFxlKxjTQK%2FM4x58obeBoJveqyE9V8QgNhmh7FqqUFPKfL1pt2I4X%2FzCs2%2B%2B%2FBjqkAehGtGinBAOis3BGWvgb0%2FqzJ%2BIbKJeiIt51WlUg5u4aSxIwJYdmc7MknjyJ8zC7Yr8286NZa1%2BgQFkRPUFtSDYx0tfO0yIzcZXX8pfLtE1skvJOeqf4iR57MbV2vtwHyryxXcjOcQ8g0it%2BJRgNL2kw%2BY8q2LTuVX020y%2FndLFnrM412xaK5DSeYSCWBMx1fpeEBfURu4Dw0PBhCEWBBs2ZxFt5&X-Amz-Signature=35bbeeb1da58e5b89355e31b32831e1d552249e347888becacc981e686cbefe9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JVIOMV%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDwgsL%2F%2BjFxHzuEx8l50gFVKTID%2FoKGYe5hT0oFmwDuYQIhAKVqkqNra0oBHz1UpE4LYPNLivc7WTcxl8N3V46dU8ZCKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9qF%2FnZAo4wJJubxsq3APVySTiybLPb8RmC7ANSkNypSUCO4sTrTEh8%2B9avZF2FWaD0Dbok%2FYDZC1kRN6DniYg1wKLd21hKdX5AD2clxvjGITO9laEL0ZEMJmJutJ5s09CTTP%2B%2FOXRgj9ZhLtu2mJPp%2BY5fP315%2FMvA1w%2F%2B2QmTMJm6qYzH7dZ5P7XDzgRt%2F4SXaIx8Thp%2FsuK11zLnb5wwnSAMN2H%2FaxP%2BPsIRnAKGiNVw%2Bi%2BbBKtLp1v7D8BuF4HDSf7WJ0DSPZqsZYp30nuIAFNIIVE2aGUiYE1Urcer2Tng%2FKZK1Wy0U3qfOvHVQTEOqQZJzhsEngcUv2HZYRfUoEh3fvEjR0KkfvmBUTALTjMz4WnTL3Wsd5r6Vq51PFNa%2BT7R1RXiHUSTnHPIT7K93QMe467WvR3uiBi2%2FTjnWhjRv5OmJfEqu4HVNoDcXbkCUrYORAjpBQiwWIjmiqQrfkY2vFRSO%2FwOc%2BVm8UbNYtjvWTZOZy6autl9IlDa09R7K5UcrXCMcTfGoqqhFVNSBVCTjR4WLCKB9Uj7BijHY5KYXfpp0Y9QjtSRTKPvx5%2FOVGSirM0i8zUi1BGJiLshzoWFxlKxjTQK%2FM4x58obeBoJveqyE9V8QgNhmh7FqqUFPKfL1pt2I4X%2FzCs2%2B%2B%2FBjqkAehGtGinBAOis3BGWvgb0%2FqzJ%2BIbKJeiIt51WlUg5u4aSxIwJYdmc7MknjyJ8zC7Yr8286NZa1%2BgQFkRPUFtSDYx0tfO0yIzcZXX8pfLtE1skvJOeqf4iR57MbV2vtwHyryxXcjOcQ8g0it%2BJRgNL2kw%2BY8q2LTuVX020y%2FndLFnrM412xaK5DSeYSCWBMx1fpeEBfURu4Dw0PBhCEWBBs2ZxFt5&X-Amz-Signature=029ebfe7f24de0183ceede2d684a2874172d047d1716a032c6cfa765e90ad188&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JVIOMV%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDwgsL%2F%2BjFxHzuEx8l50gFVKTID%2FoKGYe5hT0oFmwDuYQIhAKVqkqNra0oBHz1UpE4LYPNLivc7WTcxl8N3V46dU8ZCKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9qF%2FnZAo4wJJubxsq3APVySTiybLPb8RmC7ANSkNypSUCO4sTrTEh8%2B9avZF2FWaD0Dbok%2FYDZC1kRN6DniYg1wKLd21hKdX5AD2clxvjGITO9laEL0ZEMJmJutJ5s09CTTP%2B%2FOXRgj9ZhLtu2mJPp%2BY5fP315%2FMvA1w%2F%2B2QmTMJm6qYzH7dZ5P7XDzgRt%2F4SXaIx8Thp%2FsuK11zLnb5wwnSAMN2H%2FaxP%2BPsIRnAKGiNVw%2Bi%2BbBKtLp1v7D8BuF4HDSf7WJ0DSPZqsZYp30nuIAFNIIVE2aGUiYE1Urcer2Tng%2FKZK1Wy0U3qfOvHVQTEOqQZJzhsEngcUv2HZYRfUoEh3fvEjR0KkfvmBUTALTjMz4WnTL3Wsd5r6Vq51PFNa%2BT7R1RXiHUSTnHPIT7K93QMe467WvR3uiBi2%2FTjnWhjRv5OmJfEqu4HVNoDcXbkCUrYORAjpBQiwWIjmiqQrfkY2vFRSO%2FwOc%2BVm8UbNYtjvWTZOZy6autl9IlDa09R7K5UcrXCMcTfGoqqhFVNSBVCTjR4WLCKB9Uj7BijHY5KYXfpp0Y9QjtSRTKPvx5%2FOVGSirM0i8zUi1BGJiLshzoWFxlKxjTQK%2FM4x58obeBoJveqyE9V8QgNhmh7FqqUFPKfL1pt2I4X%2FzCs2%2B%2B%2FBjqkAehGtGinBAOis3BGWvgb0%2FqzJ%2BIbKJeiIt51WlUg5u4aSxIwJYdmc7MknjyJ8zC7Yr8286NZa1%2BgQFkRPUFtSDYx0tfO0yIzcZXX8pfLtE1skvJOeqf4iR57MbV2vtwHyryxXcjOcQ8g0it%2BJRgNL2kw%2BY8q2LTuVX020y%2FndLFnrM412xaK5DSeYSCWBMx1fpeEBfURu4Dw0PBhCEWBBs2ZxFt5&X-Amz-Signature=3faea9851f23966bf3d45c31e36638c3497a751ded0c20c8fbfe67a2eabe95b1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JVIOMV%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDwgsL%2F%2BjFxHzuEx8l50gFVKTID%2FoKGYe5hT0oFmwDuYQIhAKVqkqNra0oBHz1UpE4LYPNLivc7WTcxl8N3V46dU8ZCKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9qF%2FnZAo4wJJubxsq3APVySTiybLPb8RmC7ANSkNypSUCO4sTrTEh8%2B9avZF2FWaD0Dbok%2FYDZC1kRN6DniYg1wKLd21hKdX5AD2clxvjGITO9laEL0ZEMJmJutJ5s09CTTP%2B%2FOXRgj9ZhLtu2mJPp%2BY5fP315%2FMvA1w%2F%2B2QmTMJm6qYzH7dZ5P7XDzgRt%2F4SXaIx8Thp%2FsuK11zLnb5wwnSAMN2H%2FaxP%2BPsIRnAKGiNVw%2Bi%2BbBKtLp1v7D8BuF4HDSf7WJ0DSPZqsZYp30nuIAFNIIVE2aGUiYE1Urcer2Tng%2FKZK1Wy0U3qfOvHVQTEOqQZJzhsEngcUv2HZYRfUoEh3fvEjR0KkfvmBUTALTjMz4WnTL3Wsd5r6Vq51PFNa%2BT7R1RXiHUSTnHPIT7K93QMe467WvR3uiBi2%2FTjnWhjRv5OmJfEqu4HVNoDcXbkCUrYORAjpBQiwWIjmiqQrfkY2vFRSO%2FwOc%2BVm8UbNYtjvWTZOZy6autl9IlDa09R7K5UcrXCMcTfGoqqhFVNSBVCTjR4WLCKB9Uj7BijHY5KYXfpp0Y9QjtSRTKPvx5%2FOVGSirM0i8zUi1BGJiLshzoWFxlKxjTQK%2FM4x58obeBoJveqyE9V8QgNhmh7FqqUFPKfL1pt2I4X%2FzCs2%2B%2B%2FBjqkAehGtGinBAOis3BGWvgb0%2FqzJ%2BIbKJeiIt51WlUg5u4aSxIwJYdmc7MknjyJ8zC7Yr8286NZa1%2BgQFkRPUFtSDYx0tfO0yIzcZXX8pfLtE1skvJOeqf4iR57MbV2vtwHyryxXcjOcQ8g0it%2BJRgNL2kw%2BY8q2LTuVX020y%2FndLFnrM412xaK5DSeYSCWBMx1fpeEBfURu4Dw0PBhCEWBBs2ZxFt5&X-Amz-Signature=e6fdacfdf1d422eecc64197c8e43525ef71c40c195374cacb1526d846b706240&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JVIOMV%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDwgsL%2F%2BjFxHzuEx8l50gFVKTID%2FoKGYe5hT0oFmwDuYQIhAKVqkqNra0oBHz1UpE4LYPNLivc7WTcxl8N3V46dU8ZCKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9qF%2FnZAo4wJJubxsq3APVySTiybLPb8RmC7ANSkNypSUCO4sTrTEh8%2B9avZF2FWaD0Dbok%2FYDZC1kRN6DniYg1wKLd21hKdX5AD2clxvjGITO9laEL0ZEMJmJutJ5s09CTTP%2B%2FOXRgj9ZhLtu2mJPp%2BY5fP315%2FMvA1w%2F%2B2QmTMJm6qYzH7dZ5P7XDzgRt%2F4SXaIx8Thp%2FsuK11zLnb5wwnSAMN2H%2FaxP%2BPsIRnAKGiNVw%2Bi%2BbBKtLp1v7D8BuF4HDSf7WJ0DSPZqsZYp30nuIAFNIIVE2aGUiYE1Urcer2Tng%2FKZK1Wy0U3qfOvHVQTEOqQZJzhsEngcUv2HZYRfUoEh3fvEjR0KkfvmBUTALTjMz4WnTL3Wsd5r6Vq51PFNa%2BT7R1RXiHUSTnHPIT7K93QMe467WvR3uiBi2%2FTjnWhjRv5OmJfEqu4HVNoDcXbkCUrYORAjpBQiwWIjmiqQrfkY2vFRSO%2FwOc%2BVm8UbNYtjvWTZOZy6autl9IlDa09R7K5UcrXCMcTfGoqqhFVNSBVCTjR4WLCKB9Uj7BijHY5KYXfpp0Y9QjtSRTKPvx5%2FOVGSirM0i8zUi1BGJiLshzoWFxlKxjTQK%2FM4x58obeBoJveqyE9V8QgNhmh7FqqUFPKfL1pt2I4X%2FzCs2%2B%2B%2FBjqkAehGtGinBAOis3BGWvgb0%2FqzJ%2BIbKJeiIt51WlUg5u4aSxIwJYdmc7MknjyJ8zC7Yr8286NZa1%2BgQFkRPUFtSDYx0tfO0yIzcZXX8pfLtE1skvJOeqf4iR57MbV2vtwHyryxXcjOcQ8g0it%2BJRgNL2kw%2BY8q2LTuVX020y%2FndLFnrM412xaK5DSeYSCWBMx1fpeEBfURu4Dw0PBhCEWBBs2ZxFt5&X-Amz-Signature=67d027c007eb4b0cf84fa502b92811f0b062de03efd2e1c3804e7be9b929e5d6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
