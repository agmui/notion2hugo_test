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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCB4ZOEO%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjfsOCVyx9rUpmsrH39qT9p87zxZt7RXUcJFCwgmbM%2FAiACu2DI12IF6LQ88pxXgJuF4r8AWUjWL4OZylilpzRplyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUcG44A%2BFsyJ12%2FmCKtwDDHoqCORndqZ2SujuNaWukgnfrVUN4T8ZG21wy25%2FW0zisKo3hL6lZWbeV36giwhrO3AY87lCe6KKwFrjy0GbT20PHur25yhU3ssh%2B69tFQ6AorcaOWRn35J3OkSi%2FnjhEt%2F%2BYCktulpFIo7EuuL%2B73SpN7z%2Frn1aJeXYhFNvrjc1FbRKNh6k1XCfnHo8tWahaQUNfFcRco%2Fa6WQbSNOD8E7Jf65DZvVM3BlYz59zoUr24SfTF59oLFdFSBNh%2FpBK9bUUnX49oPWZrVoZ7R3jHxS8KS%2FJJVO16FksqSSDLMRldXx29kvP3fbZvChLQJ7m9ibkJU1DmXgXHpfbjvcWjQiJUwzq1EXB5mBJdmbPhePRow1ZAj8Vxdrh4lw7Od%2BU2%2B7oU8ZjQpIZu2%2FQvY7TgtuWvkwPPm6pKrQOHhwrIPHSfMe1O4m%2FvggP6PNbFwG3atSgrDfo%2BGjnIqVd6%2B9HZmF%2F9dsGMPvw3b0thEesw5Enbdig2fuftQBeUM7dFCAkTsT7FtzJjx8CKdTN%2FqWDXu9bPU436oxMAP0CFyJrAPs7Mo7Afvp89i7jb90v3ND2i8f407O1K7d2WjAg2JcZounHd0TkMWt1RPdq5upsRNDPBenepFYVy3XCHBIws%2F%2FEwwY6pgFG5jP3YTJUZPDQn4MUOa6tKSzKqS4Kg29kbTBtIRQ6ht2OuAk0vJ1WntHClXxlyhc2UnC0zATZPoJkQmlF2MRc7zL2X9qGqNAckbeJJXD8QEfF%2BdjSkrA%2FwLBeHv%2BAjtfyHEqjnPpkl2thLmEsbAm5cHkXG6C%2FYT987M31dXlzgNogfCsLJBFSLLbrg5gpJnyQp02Ls2KBZSOttI3xRdX1sKIhnb4s&X-Amz-Signature=b8f1be73db32a8d68ff3e418b655ee50ea7a3737cb1ea424c701cbf3f3a0045d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCB4ZOEO%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjfsOCVyx9rUpmsrH39qT9p87zxZt7RXUcJFCwgmbM%2FAiACu2DI12IF6LQ88pxXgJuF4r8AWUjWL4OZylilpzRplyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUcG44A%2BFsyJ12%2FmCKtwDDHoqCORndqZ2SujuNaWukgnfrVUN4T8ZG21wy25%2FW0zisKo3hL6lZWbeV36giwhrO3AY87lCe6KKwFrjy0GbT20PHur25yhU3ssh%2B69tFQ6AorcaOWRn35J3OkSi%2FnjhEt%2F%2BYCktulpFIo7EuuL%2B73SpN7z%2Frn1aJeXYhFNvrjc1FbRKNh6k1XCfnHo8tWahaQUNfFcRco%2Fa6WQbSNOD8E7Jf65DZvVM3BlYz59zoUr24SfTF59oLFdFSBNh%2FpBK9bUUnX49oPWZrVoZ7R3jHxS8KS%2FJJVO16FksqSSDLMRldXx29kvP3fbZvChLQJ7m9ibkJU1DmXgXHpfbjvcWjQiJUwzq1EXB5mBJdmbPhePRow1ZAj8Vxdrh4lw7Od%2BU2%2B7oU8ZjQpIZu2%2FQvY7TgtuWvkwPPm6pKrQOHhwrIPHSfMe1O4m%2FvggP6PNbFwG3atSgrDfo%2BGjnIqVd6%2B9HZmF%2F9dsGMPvw3b0thEesw5Enbdig2fuftQBeUM7dFCAkTsT7FtzJjx8CKdTN%2FqWDXu9bPU436oxMAP0CFyJrAPs7Mo7Afvp89i7jb90v3ND2i8f407O1K7d2WjAg2JcZounHd0TkMWt1RPdq5upsRNDPBenepFYVy3XCHBIws%2F%2FEwwY6pgFG5jP3YTJUZPDQn4MUOa6tKSzKqS4Kg29kbTBtIRQ6ht2OuAk0vJ1WntHClXxlyhc2UnC0zATZPoJkQmlF2MRc7zL2X9qGqNAckbeJJXD8QEfF%2BdjSkrA%2FwLBeHv%2BAjtfyHEqjnPpkl2thLmEsbAm5cHkXG6C%2FYT987M31dXlzgNogfCsLJBFSLLbrg5gpJnyQp02Ls2KBZSOttI3xRdX1sKIhnb4s&X-Amz-Signature=8beb55d1e366bb3480a1fbea60640482999d3dac7ae1040e16a7f1e3addd1d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCB4ZOEO%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjfsOCVyx9rUpmsrH39qT9p87zxZt7RXUcJFCwgmbM%2FAiACu2DI12IF6LQ88pxXgJuF4r8AWUjWL4OZylilpzRplyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUcG44A%2BFsyJ12%2FmCKtwDDHoqCORndqZ2SujuNaWukgnfrVUN4T8ZG21wy25%2FW0zisKo3hL6lZWbeV36giwhrO3AY87lCe6KKwFrjy0GbT20PHur25yhU3ssh%2B69tFQ6AorcaOWRn35J3OkSi%2FnjhEt%2F%2BYCktulpFIo7EuuL%2B73SpN7z%2Frn1aJeXYhFNvrjc1FbRKNh6k1XCfnHo8tWahaQUNfFcRco%2Fa6WQbSNOD8E7Jf65DZvVM3BlYz59zoUr24SfTF59oLFdFSBNh%2FpBK9bUUnX49oPWZrVoZ7R3jHxS8KS%2FJJVO16FksqSSDLMRldXx29kvP3fbZvChLQJ7m9ibkJU1DmXgXHpfbjvcWjQiJUwzq1EXB5mBJdmbPhePRow1ZAj8Vxdrh4lw7Od%2BU2%2B7oU8ZjQpIZu2%2FQvY7TgtuWvkwPPm6pKrQOHhwrIPHSfMe1O4m%2FvggP6PNbFwG3atSgrDfo%2BGjnIqVd6%2B9HZmF%2F9dsGMPvw3b0thEesw5Enbdig2fuftQBeUM7dFCAkTsT7FtzJjx8CKdTN%2FqWDXu9bPU436oxMAP0CFyJrAPs7Mo7Afvp89i7jb90v3ND2i8f407O1K7d2WjAg2JcZounHd0TkMWt1RPdq5upsRNDPBenepFYVy3XCHBIws%2F%2FEwwY6pgFG5jP3YTJUZPDQn4MUOa6tKSzKqS4Kg29kbTBtIRQ6ht2OuAk0vJ1WntHClXxlyhc2UnC0zATZPoJkQmlF2MRc7zL2X9qGqNAckbeJJXD8QEfF%2BdjSkrA%2FwLBeHv%2BAjtfyHEqjnPpkl2thLmEsbAm5cHkXG6C%2FYT987M31dXlzgNogfCsLJBFSLLbrg5gpJnyQp02Ls2KBZSOttI3xRdX1sKIhnb4s&X-Amz-Signature=9ae25c6f7c459dcd4b0dcd6fd6fd772527366cac791e32a28fd5e06ce332f5e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCB4ZOEO%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjfsOCVyx9rUpmsrH39qT9p87zxZt7RXUcJFCwgmbM%2FAiACu2DI12IF6LQ88pxXgJuF4r8AWUjWL4OZylilpzRplyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUcG44A%2BFsyJ12%2FmCKtwDDHoqCORndqZ2SujuNaWukgnfrVUN4T8ZG21wy25%2FW0zisKo3hL6lZWbeV36giwhrO3AY87lCe6KKwFrjy0GbT20PHur25yhU3ssh%2B69tFQ6AorcaOWRn35J3OkSi%2FnjhEt%2F%2BYCktulpFIo7EuuL%2B73SpN7z%2Frn1aJeXYhFNvrjc1FbRKNh6k1XCfnHo8tWahaQUNfFcRco%2Fa6WQbSNOD8E7Jf65DZvVM3BlYz59zoUr24SfTF59oLFdFSBNh%2FpBK9bUUnX49oPWZrVoZ7R3jHxS8KS%2FJJVO16FksqSSDLMRldXx29kvP3fbZvChLQJ7m9ibkJU1DmXgXHpfbjvcWjQiJUwzq1EXB5mBJdmbPhePRow1ZAj8Vxdrh4lw7Od%2BU2%2B7oU8ZjQpIZu2%2FQvY7TgtuWvkwPPm6pKrQOHhwrIPHSfMe1O4m%2FvggP6PNbFwG3atSgrDfo%2BGjnIqVd6%2B9HZmF%2F9dsGMPvw3b0thEesw5Enbdig2fuftQBeUM7dFCAkTsT7FtzJjx8CKdTN%2FqWDXu9bPU436oxMAP0CFyJrAPs7Mo7Afvp89i7jb90v3ND2i8f407O1K7d2WjAg2JcZounHd0TkMWt1RPdq5upsRNDPBenepFYVy3XCHBIws%2F%2FEwwY6pgFG5jP3YTJUZPDQn4MUOa6tKSzKqS4Kg29kbTBtIRQ6ht2OuAk0vJ1WntHClXxlyhc2UnC0zATZPoJkQmlF2MRc7zL2X9qGqNAckbeJJXD8QEfF%2BdjSkrA%2FwLBeHv%2BAjtfyHEqjnPpkl2thLmEsbAm5cHkXG6C%2FYT987M31dXlzgNogfCsLJBFSLLbrg5gpJnyQp02Ls2KBZSOttI3xRdX1sKIhnb4s&X-Amz-Signature=1c297cc8a87381a0c2062fa99bc62249c86abe6083375587d50650954794a6e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCB4ZOEO%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjfsOCVyx9rUpmsrH39qT9p87zxZt7RXUcJFCwgmbM%2FAiACu2DI12IF6LQ88pxXgJuF4r8AWUjWL4OZylilpzRplyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUcG44A%2BFsyJ12%2FmCKtwDDHoqCORndqZ2SujuNaWukgnfrVUN4T8ZG21wy25%2FW0zisKo3hL6lZWbeV36giwhrO3AY87lCe6KKwFrjy0GbT20PHur25yhU3ssh%2B69tFQ6AorcaOWRn35J3OkSi%2FnjhEt%2F%2BYCktulpFIo7EuuL%2B73SpN7z%2Frn1aJeXYhFNvrjc1FbRKNh6k1XCfnHo8tWahaQUNfFcRco%2Fa6WQbSNOD8E7Jf65DZvVM3BlYz59zoUr24SfTF59oLFdFSBNh%2FpBK9bUUnX49oPWZrVoZ7R3jHxS8KS%2FJJVO16FksqSSDLMRldXx29kvP3fbZvChLQJ7m9ibkJU1DmXgXHpfbjvcWjQiJUwzq1EXB5mBJdmbPhePRow1ZAj8Vxdrh4lw7Od%2BU2%2B7oU8ZjQpIZu2%2FQvY7TgtuWvkwPPm6pKrQOHhwrIPHSfMe1O4m%2FvggP6PNbFwG3atSgrDfo%2BGjnIqVd6%2B9HZmF%2F9dsGMPvw3b0thEesw5Enbdig2fuftQBeUM7dFCAkTsT7FtzJjx8CKdTN%2FqWDXu9bPU436oxMAP0CFyJrAPs7Mo7Afvp89i7jb90v3ND2i8f407O1K7d2WjAg2JcZounHd0TkMWt1RPdq5upsRNDPBenepFYVy3XCHBIws%2F%2FEwwY6pgFG5jP3YTJUZPDQn4MUOa6tKSzKqS4Kg29kbTBtIRQ6ht2OuAk0vJ1WntHClXxlyhc2UnC0zATZPoJkQmlF2MRc7zL2X9qGqNAckbeJJXD8QEfF%2BdjSkrA%2FwLBeHv%2BAjtfyHEqjnPpkl2thLmEsbAm5cHkXG6C%2FYT987M31dXlzgNogfCsLJBFSLLbrg5gpJnyQp02Ls2KBZSOttI3xRdX1sKIhnb4s&X-Amz-Signature=17fbd5e0dab85ef6f03726fa8d7869d13bce5722913433f0e32d0eec0a135c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCB4ZOEO%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjfsOCVyx9rUpmsrH39qT9p87zxZt7RXUcJFCwgmbM%2FAiACu2DI12IF6LQ88pxXgJuF4r8AWUjWL4OZylilpzRplyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUcG44A%2BFsyJ12%2FmCKtwDDHoqCORndqZ2SujuNaWukgnfrVUN4T8ZG21wy25%2FW0zisKo3hL6lZWbeV36giwhrO3AY87lCe6KKwFrjy0GbT20PHur25yhU3ssh%2B69tFQ6AorcaOWRn35J3OkSi%2FnjhEt%2F%2BYCktulpFIo7EuuL%2B73SpN7z%2Frn1aJeXYhFNvrjc1FbRKNh6k1XCfnHo8tWahaQUNfFcRco%2Fa6WQbSNOD8E7Jf65DZvVM3BlYz59zoUr24SfTF59oLFdFSBNh%2FpBK9bUUnX49oPWZrVoZ7R3jHxS8KS%2FJJVO16FksqSSDLMRldXx29kvP3fbZvChLQJ7m9ibkJU1DmXgXHpfbjvcWjQiJUwzq1EXB5mBJdmbPhePRow1ZAj8Vxdrh4lw7Od%2BU2%2B7oU8ZjQpIZu2%2FQvY7TgtuWvkwPPm6pKrQOHhwrIPHSfMe1O4m%2FvggP6PNbFwG3atSgrDfo%2BGjnIqVd6%2B9HZmF%2F9dsGMPvw3b0thEesw5Enbdig2fuftQBeUM7dFCAkTsT7FtzJjx8CKdTN%2FqWDXu9bPU436oxMAP0CFyJrAPs7Mo7Afvp89i7jb90v3ND2i8f407O1K7d2WjAg2JcZounHd0TkMWt1RPdq5upsRNDPBenepFYVy3XCHBIws%2F%2FEwwY6pgFG5jP3YTJUZPDQn4MUOa6tKSzKqS4Kg29kbTBtIRQ6ht2OuAk0vJ1WntHClXxlyhc2UnC0zATZPoJkQmlF2MRc7zL2X9qGqNAckbeJJXD8QEfF%2BdjSkrA%2FwLBeHv%2BAjtfyHEqjnPpkl2thLmEsbAm5cHkXG6C%2FYT987M31dXlzgNogfCsLJBFSLLbrg5gpJnyQp02Ls2KBZSOttI3xRdX1sKIhnb4s&X-Amz-Signature=c09f35cb13f3a7b4c48d977d9eeea16afe10af4aa6c54b3300d4149d3afea406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCB4ZOEO%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjfsOCVyx9rUpmsrH39qT9p87zxZt7RXUcJFCwgmbM%2FAiACu2DI12IF6LQ88pxXgJuF4r8AWUjWL4OZylilpzRplyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUcG44A%2BFsyJ12%2FmCKtwDDHoqCORndqZ2SujuNaWukgnfrVUN4T8ZG21wy25%2FW0zisKo3hL6lZWbeV36giwhrO3AY87lCe6KKwFrjy0GbT20PHur25yhU3ssh%2B69tFQ6AorcaOWRn35J3OkSi%2FnjhEt%2F%2BYCktulpFIo7EuuL%2B73SpN7z%2Frn1aJeXYhFNvrjc1FbRKNh6k1XCfnHo8tWahaQUNfFcRco%2Fa6WQbSNOD8E7Jf65DZvVM3BlYz59zoUr24SfTF59oLFdFSBNh%2FpBK9bUUnX49oPWZrVoZ7R3jHxS8KS%2FJJVO16FksqSSDLMRldXx29kvP3fbZvChLQJ7m9ibkJU1DmXgXHpfbjvcWjQiJUwzq1EXB5mBJdmbPhePRow1ZAj8Vxdrh4lw7Od%2BU2%2B7oU8ZjQpIZu2%2FQvY7TgtuWvkwPPm6pKrQOHhwrIPHSfMe1O4m%2FvggP6PNbFwG3atSgrDfo%2BGjnIqVd6%2B9HZmF%2F9dsGMPvw3b0thEesw5Enbdig2fuftQBeUM7dFCAkTsT7FtzJjx8CKdTN%2FqWDXu9bPU436oxMAP0CFyJrAPs7Mo7Afvp89i7jb90v3ND2i8f407O1K7d2WjAg2JcZounHd0TkMWt1RPdq5upsRNDPBenepFYVy3XCHBIws%2F%2FEwwY6pgFG5jP3YTJUZPDQn4MUOa6tKSzKqS4Kg29kbTBtIRQ6ht2OuAk0vJ1WntHClXxlyhc2UnC0zATZPoJkQmlF2MRc7zL2X9qGqNAckbeJJXD8QEfF%2BdjSkrA%2FwLBeHv%2BAjtfyHEqjnPpkl2thLmEsbAm5cHkXG6C%2FYT987M31dXlzgNogfCsLJBFSLLbrg5gpJnyQp02Ls2KBZSOttI3xRdX1sKIhnb4s&X-Amz-Signature=85becefc80e03df6275cd66421cfc2a05afcd99eba088f12f3ec5b62f19d6de0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
