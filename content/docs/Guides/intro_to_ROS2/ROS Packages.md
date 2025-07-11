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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622NNXWLF%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDye16vOn6spSucBpr49ALmqlzhAxLGM%2FCzR1HSxZp%2BZwIgFGTRQ3zioxDsCPmYQjoUX6r6dRVg26B4hhpGuOQ7hlIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCwHRuKCtxZVMkY0SrcA45i596IE8zcMGsw8AdfmBbXZfn8ElQbUSFrI%2FjAb38n%2BRhpxH93q2U%2F72YEatRwCeXFvqyV0GwTfjPPI7FhVCiNiAsMqI7OMM13ow3TtmW74Hrsv4Fapzo9Kj6EqoCbvCvKuMM3vA3p2lX6TbaBXiLWWGDdHr4Mxdth%2FhvruuPsUpVXXigsOeSz%2FF1wnhqoTpD2CvD7Q8q4%2Ft3CJCy0NA9hDDpo4zhB5EdYbVTfUpEmqAPycHEqDiV%2Fc6bca5q%2BuiK99File28%2F3BX4aVqHjwgoPxdhEgY9D4Yc757iApgKxINjUVLSUMjAhWEC8kWni8w0kn7hcPfxaQm36UD24v0ZIlyt6JZXiVr9dAbMViIisxSW2CTXPCe%2FqnHDryRe59ybLPjCwBFHblmVVy95YwOcDtcagc3I28KUFTomizp%2BQrF45nFPiRTsRzRJ7vEYARX6n37QD3byb7ho7b4vqcKVCktN9wW1dM5GBzTc2bHdAnOTC5HyW1Fm8sPayiDsi%2FaLoM%2FVnxrU7Ro8fLepdhlLUKabAstqJkoxIgA6ML0%2FhArAbnCPlJTFm45hHKfhRA6Sp%2Bi49ANg1JPCcZkdqPUt72OXDnSQOrWCFXzWf%2Bi%2BiPpRCJgQtl5qy3kCML2pxcMGOqUBzDniQyWJBDK4Mw0bLL99ScfCezxRGu7ma8UL3LQU5dPzgmSNO6oWpJ37aUjEHZKC6O5ObSQcfKDCyIm1%2Ff6SQrPZBBaOeorfJY7ibsv3%2BE04ISkYvwPfR9Hjo3pHLHoAUYcvI8C%2FFIXCTpgCxSV1Yu%2FwjaHvBVFDTb%2BSzODfwtlNNcDtJ98O56I7xv1YpQmuUYGiZo0A2ll1LTuOO9pPGtq5ygmf&X-Amz-Signature=e30b497904e27d6af5ee9471500586320c48a848f0ffe5dd77682565afa8df9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622NNXWLF%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDye16vOn6spSucBpr49ALmqlzhAxLGM%2FCzR1HSxZp%2BZwIgFGTRQ3zioxDsCPmYQjoUX6r6dRVg26B4hhpGuOQ7hlIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCwHRuKCtxZVMkY0SrcA45i596IE8zcMGsw8AdfmBbXZfn8ElQbUSFrI%2FjAb38n%2BRhpxH93q2U%2F72YEatRwCeXFvqyV0GwTfjPPI7FhVCiNiAsMqI7OMM13ow3TtmW74Hrsv4Fapzo9Kj6EqoCbvCvKuMM3vA3p2lX6TbaBXiLWWGDdHr4Mxdth%2FhvruuPsUpVXXigsOeSz%2FF1wnhqoTpD2CvD7Q8q4%2Ft3CJCy0NA9hDDpo4zhB5EdYbVTfUpEmqAPycHEqDiV%2Fc6bca5q%2BuiK99File28%2F3BX4aVqHjwgoPxdhEgY9D4Yc757iApgKxINjUVLSUMjAhWEC8kWni8w0kn7hcPfxaQm36UD24v0ZIlyt6JZXiVr9dAbMViIisxSW2CTXPCe%2FqnHDryRe59ybLPjCwBFHblmVVy95YwOcDtcagc3I28KUFTomizp%2BQrF45nFPiRTsRzRJ7vEYARX6n37QD3byb7ho7b4vqcKVCktN9wW1dM5GBzTc2bHdAnOTC5HyW1Fm8sPayiDsi%2FaLoM%2FVnxrU7Ro8fLepdhlLUKabAstqJkoxIgA6ML0%2FhArAbnCPlJTFm45hHKfhRA6Sp%2Bi49ANg1JPCcZkdqPUt72OXDnSQOrWCFXzWf%2Bi%2BiPpRCJgQtl5qy3kCML2pxcMGOqUBzDniQyWJBDK4Mw0bLL99ScfCezxRGu7ma8UL3LQU5dPzgmSNO6oWpJ37aUjEHZKC6O5ObSQcfKDCyIm1%2Ff6SQrPZBBaOeorfJY7ibsv3%2BE04ISkYvwPfR9Hjo3pHLHoAUYcvI8C%2FFIXCTpgCxSV1Yu%2FwjaHvBVFDTb%2BSzODfwtlNNcDtJ98O56I7xv1YpQmuUYGiZo0A2ll1LTuOO9pPGtq5ygmf&X-Amz-Signature=263929bc2d87eaeca1cf969c2ab5f59e96d1275a6c61fa740b7f526e670984c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622NNXWLF%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDye16vOn6spSucBpr49ALmqlzhAxLGM%2FCzR1HSxZp%2BZwIgFGTRQ3zioxDsCPmYQjoUX6r6dRVg26B4hhpGuOQ7hlIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCwHRuKCtxZVMkY0SrcA45i596IE8zcMGsw8AdfmBbXZfn8ElQbUSFrI%2FjAb38n%2BRhpxH93q2U%2F72YEatRwCeXFvqyV0GwTfjPPI7FhVCiNiAsMqI7OMM13ow3TtmW74Hrsv4Fapzo9Kj6EqoCbvCvKuMM3vA3p2lX6TbaBXiLWWGDdHr4Mxdth%2FhvruuPsUpVXXigsOeSz%2FF1wnhqoTpD2CvD7Q8q4%2Ft3CJCy0NA9hDDpo4zhB5EdYbVTfUpEmqAPycHEqDiV%2Fc6bca5q%2BuiK99File28%2F3BX4aVqHjwgoPxdhEgY9D4Yc757iApgKxINjUVLSUMjAhWEC8kWni8w0kn7hcPfxaQm36UD24v0ZIlyt6JZXiVr9dAbMViIisxSW2CTXPCe%2FqnHDryRe59ybLPjCwBFHblmVVy95YwOcDtcagc3I28KUFTomizp%2BQrF45nFPiRTsRzRJ7vEYARX6n37QD3byb7ho7b4vqcKVCktN9wW1dM5GBzTc2bHdAnOTC5HyW1Fm8sPayiDsi%2FaLoM%2FVnxrU7Ro8fLepdhlLUKabAstqJkoxIgA6ML0%2FhArAbnCPlJTFm45hHKfhRA6Sp%2Bi49ANg1JPCcZkdqPUt72OXDnSQOrWCFXzWf%2Bi%2BiPpRCJgQtl5qy3kCML2pxcMGOqUBzDniQyWJBDK4Mw0bLL99ScfCezxRGu7ma8UL3LQU5dPzgmSNO6oWpJ37aUjEHZKC6O5ObSQcfKDCyIm1%2Ff6SQrPZBBaOeorfJY7ibsv3%2BE04ISkYvwPfR9Hjo3pHLHoAUYcvI8C%2FFIXCTpgCxSV1Yu%2FwjaHvBVFDTb%2BSzODfwtlNNcDtJ98O56I7xv1YpQmuUYGiZo0A2ll1LTuOO9pPGtq5ygmf&X-Amz-Signature=2c28d1de5a878ff42d83cf64049b1e21469cd8cd0ec73cff784b6cb795560e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622NNXWLF%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDye16vOn6spSucBpr49ALmqlzhAxLGM%2FCzR1HSxZp%2BZwIgFGTRQ3zioxDsCPmYQjoUX6r6dRVg26B4hhpGuOQ7hlIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCwHRuKCtxZVMkY0SrcA45i596IE8zcMGsw8AdfmBbXZfn8ElQbUSFrI%2FjAb38n%2BRhpxH93q2U%2F72YEatRwCeXFvqyV0GwTfjPPI7FhVCiNiAsMqI7OMM13ow3TtmW74Hrsv4Fapzo9Kj6EqoCbvCvKuMM3vA3p2lX6TbaBXiLWWGDdHr4Mxdth%2FhvruuPsUpVXXigsOeSz%2FF1wnhqoTpD2CvD7Q8q4%2Ft3CJCy0NA9hDDpo4zhB5EdYbVTfUpEmqAPycHEqDiV%2Fc6bca5q%2BuiK99File28%2F3BX4aVqHjwgoPxdhEgY9D4Yc757iApgKxINjUVLSUMjAhWEC8kWni8w0kn7hcPfxaQm36UD24v0ZIlyt6JZXiVr9dAbMViIisxSW2CTXPCe%2FqnHDryRe59ybLPjCwBFHblmVVy95YwOcDtcagc3I28KUFTomizp%2BQrF45nFPiRTsRzRJ7vEYARX6n37QD3byb7ho7b4vqcKVCktN9wW1dM5GBzTc2bHdAnOTC5HyW1Fm8sPayiDsi%2FaLoM%2FVnxrU7Ro8fLepdhlLUKabAstqJkoxIgA6ML0%2FhArAbnCPlJTFm45hHKfhRA6Sp%2Bi49ANg1JPCcZkdqPUt72OXDnSQOrWCFXzWf%2Bi%2BiPpRCJgQtl5qy3kCML2pxcMGOqUBzDniQyWJBDK4Mw0bLL99ScfCezxRGu7ma8UL3LQU5dPzgmSNO6oWpJ37aUjEHZKC6O5ObSQcfKDCyIm1%2Ff6SQrPZBBaOeorfJY7ibsv3%2BE04ISkYvwPfR9Hjo3pHLHoAUYcvI8C%2FFIXCTpgCxSV1Yu%2FwjaHvBVFDTb%2BSzODfwtlNNcDtJ98O56I7xv1YpQmuUYGiZo0A2ll1LTuOO9pPGtq5ygmf&X-Amz-Signature=7d2ebb212a7eda5a2732d8568d3ca76d5f54fcbf5a240a6ece79f903abad3097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622NNXWLF%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDye16vOn6spSucBpr49ALmqlzhAxLGM%2FCzR1HSxZp%2BZwIgFGTRQ3zioxDsCPmYQjoUX6r6dRVg26B4hhpGuOQ7hlIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCwHRuKCtxZVMkY0SrcA45i596IE8zcMGsw8AdfmBbXZfn8ElQbUSFrI%2FjAb38n%2BRhpxH93q2U%2F72YEatRwCeXFvqyV0GwTfjPPI7FhVCiNiAsMqI7OMM13ow3TtmW74Hrsv4Fapzo9Kj6EqoCbvCvKuMM3vA3p2lX6TbaBXiLWWGDdHr4Mxdth%2FhvruuPsUpVXXigsOeSz%2FF1wnhqoTpD2CvD7Q8q4%2Ft3CJCy0NA9hDDpo4zhB5EdYbVTfUpEmqAPycHEqDiV%2Fc6bca5q%2BuiK99File28%2F3BX4aVqHjwgoPxdhEgY9D4Yc757iApgKxINjUVLSUMjAhWEC8kWni8w0kn7hcPfxaQm36UD24v0ZIlyt6JZXiVr9dAbMViIisxSW2CTXPCe%2FqnHDryRe59ybLPjCwBFHblmVVy95YwOcDtcagc3I28KUFTomizp%2BQrF45nFPiRTsRzRJ7vEYARX6n37QD3byb7ho7b4vqcKVCktN9wW1dM5GBzTc2bHdAnOTC5HyW1Fm8sPayiDsi%2FaLoM%2FVnxrU7Ro8fLepdhlLUKabAstqJkoxIgA6ML0%2FhArAbnCPlJTFm45hHKfhRA6Sp%2Bi49ANg1JPCcZkdqPUt72OXDnSQOrWCFXzWf%2Bi%2BiPpRCJgQtl5qy3kCML2pxcMGOqUBzDniQyWJBDK4Mw0bLL99ScfCezxRGu7ma8UL3LQU5dPzgmSNO6oWpJ37aUjEHZKC6O5ObSQcfKDCyIm1%2Ff6SQrPZBBaOeorfJY7ibsv3%2BE04ISkYvwPfR9Hjo3pHLHoAUYcvI8C%2FFIXCTpgCxSV1Yu%2FwjaHvBVFDTb%2BSzODfwtlNNcDtJ98O56I7xv1YpQmuUYGiZo0A2ll1LTuOO9pPGtq5ygmf&X-Amz-Signature=bb024a1bedfaa342d49fbd1f3f2a2599a19d4d54da31e18cc895a1a5a3081796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622NNXWLF%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDye16vOn6spSucBpr49ALmqlzhAxLGM%2FCzR1HSxZp%2BZwIgFGTRQ3zioxDsCPmYQjoUX6r6dRVg26B4hhpGuOQ7hlIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCwHRuKCtxZVMkY0SrcA45i596IE8zcMGsw8AdfmBbXZfn8ElQbUSFrI%2FjAb38n%2BRhpxH93q2U%2F72YEatRwCeXFvqyV0GwTfjPPI7FhVCiNiAsMqI7OMM13ow3TtmW74Hrsv4Fapzo9Kj6EqoCbvCvKuMM3vA3p2lX6TbaBXiLWWGDdHr4Mxdth%2FhvruuPsUpVXXigsOeSz%2FF1wnhqoTpD2CvD7Q8q4%2Ft3CJCy0NA9hDDpo4zhB5EdYbVTfUpEmqAPycHEqDiV%2Fc6bca5q%2BuiK99File28%2F3BX4aVqHjwgoPxdhEgY9D4Yc757iApgKxINjUVLSUMjAhWEC8kWni8w0kn7hcPfxaQm36UD24v0ZIlyt6JZXiVr9dAbMViIisxSW2CTXPCe%2FqnHDryRe59ybLPjCwBFHblmVVy95YwOcDtcagc3I28KUFTomizp%2BQrF45nFPiRTsRzRJ7vEYARX6n37QD3byb7ho7b4vqcKVCktN9wW1dM5GBzTc2bHdAnOTC5HyW1Fm8sPayiDsi%2FaLoM%2FVnxrU7Ro8fLepdhlLUKabAstqJkoxIgA6ML0%2FhArAbnCPlJTFm45hHKfhRA6Sp%2Bi49ANg1JPCcZkdqPUt72OXDnSQOrWCFXzWf%2Bi%2BiPpRCJgQtl5qy3kCML2pxcMGOqUBzDniQyWJBDK4Mw0bLL99ScfCezxRGu7ma8UL3LQU5dPzgmSNO6oWpJ37aUjEHZKC6O5ObSQcfKDCyIm1%2Ff6SQrPZBBaOeorfJY7ibsv3%2BE04ISkYvwPfR9Hjo3pHLHoAUYcvI8C%2FFIXCTpgCxSV1Yu%2FwjaHvBVFDTb%2BSzODfwtlNNcDtJ98O56I7xv1YpQmuUYGiZo0A2ll1LTuOO9pPGtq5ygmf&X-Amz-Signature=3ac0e4e8c7ed61409145ebaa589636ea53faf38eb678e52c565924f7577852de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622NNXWLF%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDye16vOn6spSucBpr49ALmqlzhAxLGM%2FCzR1HSxZp%2BZwIgFGTRQ3zioxDsCPmYQjoUX6r6dRVg26B4hhpGuOQ7hlIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCwHRuKCtxZVMkY0SrcA45i596IE8zcMGsw8AdfmBbXZfn8ElQbUSFrI%2FjAb38n%2BRhpxH93q2U%2F72YEatRwCeXFvqyV0GwTfjPPI7FhVCiNiAsMqI7OMM13ow3TtmW74Hrsv4Fapzo9Kj6EqoCbvCvKuMM3vA3p2lX6TbaBXiLWWGDdHr4Mxdth%2FhvruuPsUpVXXigsOeSz%2FF1wnhqoTpD2CvD7Q8q4%2Ft3CJCy0NA9hDDpo4zhB5EdYbVTfUpEmqAPycHEqDiV%2Fc6bca5q%2BuiK99File28%2F3BX4aVqHjwgoPxdhEgY9D4Yc757iApgKxINjUVLSUMjAhWEC8kWni8w0kn7hcPfxaQm36UD24v0ZIlyt6JZXiVr9dAbMViIisxSW2CTXPCe%2FqnHDryRe59ybLPjCwBFHblmVVy95YwOcDtcagc3I28KUFTomizp%2BQrF45nFPiRTsRzRJ7vEYARX6n37QD3byb7ho7b4vqcKVCktN9wW1dM5GBzTc2bHdAnOTC5HyW1Fm8sPayiDsi%2FaLoM%2FVnxrU7Ro8fLepdhlLUKabAstqJkoxIgA6ML0%2FhArAbnCPlJTFm45hHKfhRA6Sp%2Bi49ANg1JPCcZkdqPUt72OXDnSQOrWCFXzWf%2Bi%2BiPpRCJgQtl5qy3kCML2pxcMGOqUBzDniQyWJBDK4Mw0bLL99ScfCezxRGu7ma8UL3LQU5dPzgmSNO6oWpJ37aUjEHZKC6O5ObSQcfKDCyIm1%2Ff6SQrPZBBaOeorfJY7ibsv3%2BE04ISkYvwPfR9Hjo3pHLHoAUYcvI8C%2FFIXCTpgCxSV1Yu%2FwjaHvBVFDTb%2BSzODfwtlNNcDtJ98O56I7xv1YpQmuUYGiZo0A2ll1LTuOO9pPGtq5ygmf&X-Amz-Signature=34e46b0f9146fb214f396bc14378d9787167bf240d904562ef1b2d2165660e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
