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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOBLE5S%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7x1YoHCQdUihhI0UM2XGDz1%2BdOZBtl%2BoV6EdZBPPHQAIgGYxTx0vcckieKNg94akEICFBycdeYRKVRb2BpHPCHUkq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDE%2FaY7Run8l7s7d1BSrcA8k2JpW3lkJFgAgZYM9h9JyymtPGYSUpWquT5Q%2FjCEVyTOdApEud%2FvfmTWsMwJSOB09LMBfKInSFhKa3%2F%2BjzA7ycNgwvh076wjCIZ2mWJGrNot8j%2FoZOHpGlGUVehi6fNdbxftI7MMsKr99l%2Br3ggmZmex9uoF1zB2b46i4S7bpr6%2Bze9KxIInZQaxeEJHLCW75aKDzQbkO6WlXuBy3uHNOJhBVaQxBdAzoAsL4Ch2E%2FfdMjf%2F30DkSBfIMDo7PXV4eprUlP6iYavVu8bIgujN5rq28gtBaB9cM6CpOHMEHqpW2E0sPcr4zWRdruy1k%2FQ195gN%2FtmTb3SMK7w96RFNDrfBL%2FlKJqqcF%2BdVBYY%2FzMDd3xnr1QBdTXarZPylRwktjlEyXmT8T%2FGziboFj7k3gn8T%2Btu4I%2F3y9ejuY2SXWmTUDDPmBMVNrXMdJffOtwYJxiMzDlony%2FyHJWUrvieuKh4McWwdw9cbSNRL7kExYFGhjaQv2kI3idLmu0yOkpQ2b5RChULgPA49OwFGD30fPRnKgdJY83bbhfvrwv%2BDdyOdz1M1DD5Pv93hP2P7OeRoncxAiiiH3Ro5fVNe92dT%2FRpgbC2HE%2B2jjPM3KE%2FS7pm1iNt6CyiA0xRk21MLi8wb8GOqUBpQVBJ9FmW5vpGDQtgInfbYqI8jzVS1Mr8fWX9EqIjlwTNNh2ulVfyXZKIgDFLMz60dgqKJYxZPX%2F3u4hU%2BZlBYLD%2FBnTyEWs8v5EyGpVEJttOwEgy1fKBhE112Oynv47a%2B99zWo4z%2FvxeotaJWFr9mJ1lXia99H94ivVF0enzZ0dtOohF6AhbV24hoatLl41N%2FyA7CPmpN%2BOXA46vJxcW661fbyo&X-Amz-Signature=a33c9d58ada035c82f3c8bd5d4715a67b5d805ae400308a110eab16696e6db39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOBLE5S%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7x1YoHCQdUihhI0UM2XGDz1%2BdOZBtl%2BoV6EdZBPPHQAIgGYxTx0vcckieKNg94akEICFBycdeYRKVRb2BpHPCHUkq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDE%2FaY7Run8l7s7d1BSrcA8k2JpW3lkJFgAgZYM9h9JyymtPGYSUpWquT5Q%2FjCEVyTOdApEud%2FvfmTWsMwJSOB09LMBfKInSFhKa3%2F%2BjzA7ycNgwvh076wjCIZ2mWJGrNot8j%2FoZOHpGlGUVehi6fNdbxftI7MMsKr99l%2Br3ggmZmex9uoF1zB2b46i4S7bpr6%2Bze9KxIInZQaxeEJHLCW75aKDzQbkO6WlXuBy3uHNOJhBVaQxBdAzoAsL4Ch2E%2FfdMjf%2F30DkSBfIMDo7PXV4eprUlP6iYavVu8bIgujN5rq28gtBaB9cM6CpOHMEHqpW2E0sPcr4zWRdruy1k%2FQ195gN%2FtmTb3SMK7w96RFNDrfBL%2FlKJqqcF%2BdVBYY%2FzMDd3xnr1QBdTXarZPylRwktjlEyXmT8T%2FGziboFj7k3gn8T%2Btu4I%2F3y9ejuY2SXWmTUDDPmBMVNrXMdJffOtwYJxiMzDlony%2FyHJWUrvieuKh4McWwdw9cbSNRL7kExYFGhjaQv2kI3idLmu0yOkpQ2b5RChULgPA49OwFGD30fPRnKgdJY83bbhfvrwv%2BDdyOdz1M1DD5Pv93hP2P7OeRoncxAiiiH3Ro5fVNe92dT%2FRpgbC2HE%2B2jjPM3KE%2FS7pm1iNt6CyiA0xRk21MLi8wb8GOqUBpQVBJ9FmW5vpGDQtgInfbYqI8jzVS1Mr8fWX9EqIjlwTNNh2ulVfyXZKIgDFLMz60dgqKJYxZPX%2F3u4hU%2BZlBYLD%2FBnTyEWs8v5EyGpVEJttOwEgy1fKBhE112Oynv47a%2B99zWo4z%2FvxeotaJWFr9mJ1lXia99H94ivVF0enzZ0dtOohF6AhbV24hoatLl41N%2FyA7CPmpN%2BOXA46vJxcW661fbyo&X-Amz-Signature=b3d3037a3eec7c7c3c26b365bf2208d879168e52148f21f35d3eead92746b0ec&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOBLE5S%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7x1YoHCQdUihhI0UM2XGDz1%2BdOZBtl%2BoV6EdZBPPHQAIgGYxTx0vcckieKNg94akEICFBycdeYRKVRb2BpHPCHUkq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDE%2FaY7Run8l7s7d1BSrcA8k2JpW3lkJFgAgZYM9h9JyymtPGYSUpWquT5Q%2FjCEVyTOdApEud%2FvfmTWsMwJSOB09LMBfKInSFhKa3%2F%2BjzA7ycNgwvh076wjCIZ2mWJGrNot8j%2FoZOHpGlGUVehi6fNdbxftI7MMsKr99l%2Br3ggmZmex9uoF1zB2b46i4S7bpr6%2Bze9KxIInZQaxeEJHLCW75aKDzQbkO6WlXuBy3uHNOJhBVaQxBdAzoAsL4Ch2E%2FfdMjf%2F30DkSBfIMDo7PXV4eprUlP6iYavVu8bIgujN5rq28gtBaB9cM6CpOHMEHqpW2E0sPcr4zWRdruy1k%2FQ195gN%2FtmTb3SMK7w96RFNDrfBL%2FlKJqqcF%2BdVBYY%2FzMDd3xnr1QBdTXarZPylRwktjlEyXmT8T%2FGziboFj7k3gn8T%2Btu4I%2F3y9ejuY2SXWmTUDDPmBMVNrXMdJffOtwYJxiMzDlony%2FyHJWUrvieuKh4McWwdw9cbSNRL7kExYFGhjaQv2kI3idLmu0yOkpQ2b5RChULgPA49OwFGD30fPRnKgdJY83bbhfvrwv%2BDdyOdz1M1DD5Pv93hP2P7OeRoncxAiiiH3Ro5fVNe92dT%2FRpgbC2HE%2B2jjPM3KE%2FS7pm1iNt6CyiA0xRk21MLi8wb8GOqUBpQVBJ9FmW5vpGDQtgInfbYqI8jzVS1Mr8fWX9EqIjlwTNNh2ulVfyXZKIgDFLMz60dgqKJYxZPX%2F3u4hU%2BZlBYLD%2FBnTyEWs8v5EyGpVEJttOwEgy1fKBhE112Oynv47a%2B99zWo4z%2FvxeotaJWFr9mJ1lXia99H94ivVF0enzZ0dtOohF6AhbV24hoatLl41N%2FyA7CPmpN%2BOXA46vJxcW661fbyo&X-Amz-Signature=4a7935ad0f8ca97d800a1263a03a46eb890f58c84e21933641a3b2e0a9465cc8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOBLE5S%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7x1YoHCQdUihhI0UM2XGDz1%2BdOZBtl%2BoV6EdZBPPHQAIgGYxTx0vcckieKNg94akEICFBycdeYRKVRb2BpHPCHUkq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDE%2FaY7Run8l7s7d1BSrcA8k2JpW3lkJFgAgZYM9h9JyymtPGYSUpWquT5Q%2FjCEVyTOdApEud%2FvfmTWsMwJSOB09LMBfKInSFhKa3%2F%2BjzA7ycNgwvh076wjCIZ2mWJGrNot8j%2FoZOHpGlGUVehi6fNdbxftI7MMsKr99l%2Br3ggmZmex9uoF1zB2b46i4S7bpr6%2Bze9KxIInZQaxeEJHLCW75aKDzQbkO6WlXuBy3uHNOJhBVaQxBdAzoAsL4Ch2E%2FfdMjf%2F30DkSBfIMDo7PXV4eprUlP6iYavVu8bIgujN5rq28gtBaB9cM6CpOHMEHqpW2E0sPcr4zWRdruy1k%2FQ195gN%2FtmTb3SMK7w96RFNDrfBL%2FlKJqqcF%2BdVBYY%2FzMDd3xnr1QBdTXarZPylRwktjlEyXmT8T%2FGziboFj7k3gn8T%2Btu4I%2F3y9ejuY2SXWmTUDDPmBMVNrXMdJffOtwYJxiMzDlony%2FyHJWUrvieuKh4McWwdw9cbSNRL7kExYFGhjaQv2kI3idLmu0yOkpQ2b5RChULgPA49OwFGD30fPRnKgdJY83bbhfvrwv%2BDdyOdz1M1DD5Pv93hP2P7OeRoncxAiiiH3Ro5fVNe92dT%2FRpgbC2HE%2B2jjPM3KE%2FS7pm1iNt6CyiA0xRk21MLi8wb8GOqUBpQVBJ9FmW5vpGDQtgInfbYqI8jzVS1Mr8fWX9EqIjlwTNNh2ulVfyXZKIgDFLMz60dgqKJYxZPX%2F3u4hU%2BZlBYLD%2FBnTyEWs8v5EyGpVEJttOwEgy1fKBhE112Oynv47a%2B99zWo4z%2FvxeotaJWFr9mJ1lXia99H94ivVF0enzZ0dtOohF6AhbV24hoatLl41N%2FyA7CPmpN%2BOXA46vJxcW661fbyo&X-Amz-Signature=c771978e3169cf0a9a59dc12d2d7a888af9ad54e53cb818d8f6482537d1f4ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOBLE5S%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7x1YoHCQdUihhI0UM2XGDz1%2BdOZBtl%2BoV6EdZBPPHQAIgGYxTx0vcckieKNg94akEICFBycdeYRKVRb2BpHPCHUkq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDE%2FaY7Run8l7s7d1BSrcA8k2JpW3lkJFgAgZYM9h9JyymtPGYSUpWquT5Q%2FjCEVyTOdApEud%2FvfmTWsMwJSOB09LMBfKInSFhKa3%2F%2BjzA7ycNgwvh076wjCIZ2mWJGrNot8j%2FoZOHpGlGUVehi6fNdbxftI7MMsKr99l%2Br3ggmZmex9uoF1zB2b46i4S7bpr6%2Bze9KxIInZQaxeEJHLCW75aKDzQbkO6WlXuBy3uHNOJhBVaQxBdAzoAsL4Ch2E%2FfdMjf%2F30DkSBfIMDo7PXV4eprUlP6iYavVu8bIgujN5rq28gtBaB9cM6CpOHMEHqpW2E0sPcr4zWRdruy1k%2FQ195gN%2FtmTb3SMK7w96RFNDrfBL%2FlKJqqcF%2BdVBYY%2FzMDd3xnr1QBdTXarZPylRwktjlEyXmT8T%2FGziboFj7k3gn8T%2Btu4I%2F3y9ejuY2SXWmTUDDPmBMVNrXMdJffOtwYJxiMzDlony%2FyHJWUrvieuKh4McWwdw9cbSNRL7kExYFGhjaQv2kI3idLmu0yOkpQ2b5RChULgPA49OwFGD30fPRnKgdJY83bbhfvrwv%2BDdyOdz1M1DD5Pv93hP2P7OeRoncxAiiiH3Ro5fVNe92dT%2FRpgbC2HE%2B2jjPM3KE%2FS7pm1iNt6CyiA0xRk21MLi8wb8GOqUBpQVBJ9FmW5vpGDQtgInfbYqI8jzVS1Mr8fWX9EqIjlwTNNh2ulVfyXZKIgDFLMz60dgqKJYxZPX%2F3u4hU%2BZlBYLD%2FBnTyEWs8v5EyGpVEJttOwEgy1fKBhE112Oynv47a%2B99zWo4z%2FvxeotaJWFr9mJ1lXia99H94ivVF0enzZ0dtOohF6AhbV24hoatLl41N%2FyA7CPmpN%2BOXA46vJxcW661fbyo&X-Amz-Signature=2e7469d788e6f2f6648c071800ab4dbc8fe64e85aa67cbaf8924d40fb1d6db63&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOBLE5S%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7x1YoHCQdUihhI0UM2XGDz1%2BdOZBtl%2BoV6EdZBPPHQAIgGYxTx0vcckieKNg94akEICFBycdeYRKVRb2BpHPCHUkq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDE%2FaY7Run8l7s7d1BSrcA8k2JpW3lkJFgAgZYM9h9JyymtPGYSUpWquT5Q%2FjCEVyTOdApEud%2FvfmTWsMwJSOB09LMBfKInSFhKa3%2F%2BjzA7ycNgwvh076wjCIZ2mWJGrNot8j%2FoZOHpGlGUVehi6fNdbxftI7MMsKr99l%2Br3ggmZmex9uoF1zB2b46i4S7bpr6%2Bze9KxIInZQaxeEJHLCW75aKDzQbkO6WlXuBy3uHNOJhBVaQxBdAzoAsL4Ch2E%2FfdMjf%2F30DkSBfIMDo7PXV4eprUlP6iYavVu8bIgujN5rq28gtBaB9cM6CpOHMEHqpW2E0sPcr4zWRdruy1k%2FQ195gN%2FtmTb3SMK7w96RFNDrfBL%2FlKJqqcF%2BdVBYY%2FzMDd3xnr1QBdTXarZPylRwktjlEyXmT8T%2FGziboFj7k3gn8T%2Btu4I%2F3y9ejuY2SXWmTUDDPmBMVNrXMdJffOtwYJxiMzDlony%2FyHJWUrvieuKh4McWwdw9cbSNRL7kExYFGhjaQv2kI3idLmu0yOkpQ2b5RChULgPA49OwFGD30fPRnKgdJY83bbhfvrwv%2BDdyOdz1M1DD5Pv93hP2P7OeRoncxAiiiH3Ro5fVNe92dT%2FRpgbC2HE%2B2jjPM3KE%2FS7pm1iNt6CyiA0xRk21MLi8wb8GOqUBpQVBJ9FmW5vpGDQtgInfbYqI8jzVS1Mr8fWX9EqIjlwTNNh2ulVfyXZKIgDFLMz60dgqKJYxZPX%2F3u4hU%2BZlBYLD%2FBnTyEWs8v5EyGpVEJttOwEgy1fKBhE112Oynv47a%2B99zWo4z%2FvxeotaJWFr9mJ1lXia99H94ivVF0enzZ0dtOohF6AhbV24hoatLl41N%2FyA7CPmpN%2BOXA46vJxcW661fbyo&X-Amz-Signature=8c9d5f3ab1d5e202632b832cb89da13993b4d57cfa852355326bde664033e07a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIOBLE5S%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7x1YoHCQdUihhI0UM2XGDz1%2BdOZBtl%2BoV6EdZBPPHQAIgGYxTx0vcckieKNg94akEICFBycdeYRKVRb2BpHPCHUkq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDE%2FaY7Run8l7s7d1BSrcA8k2JpW3lkJFgAgZYM9h9JyymtPGYSUpWquT5Q%2FjCEVyTOdApEud%2FvfmTWsMwJSOB09LMBfKInSFhKa3%2F%2BjzA7ycNgwvh076wjCIZ2mWJGrNot8j%2FoZOHpGlGUVehi6fNdbxftI7MMsKr99l%2Br3ggmZmex9uoF1zB2b46i4S7bpr6%2Bze9KxIInZQaxeEJHLCW75aKDzQbkO6WlXuBy3uHNOJhBVaQxBdAzoAsL4Ch2E%2FfdMjf%2F30DkSBfIMDo7PXV4eprUlP6iYavVu8bIgujN5rq28gtBaB9cM6CpOHMEHqpW2E0sPcr4zWRdruy1k%2FQ195gN%2FtmTb3SMK7w96RFNDrfBL%2FlKJqqcF%2BdVBYY%2FzMDd3xnr1QBdTXarZPylRwktjlEyXmT8T%2FGziboFj7k3gn8T%2Btu4I%2F3y9ejuY2SXWmTUDDPmBMVNrXMdJffOtwYJxiMzDlony%2FyHJWUrvieuKh4McWwdw9cbSNRL7kExYFGhjaQv2kI3idLmu0yOkpQ2b5RChULgPA49OwFGD30fPRnKgdJY83bbhfvrwv%2BDdyOdz1M1DD5Pv93hP2P7OeRoncxAiiiH3Ro5fVNe92dT%2FRpgbC2HE%2B2jjPM3KE%2FS7pm1iNt6CyiA0xRk21MLi8wb8GOqUBpQVBJ9FmW5vpGDQtgInfbYqI8jzVS1Mr8fWX9EqIjlwTNNh2ulVfyXZKIgDFLMz60dgqKJYxZPX%2F3u4hU%2BZlBYLD%2FBnTyEWs8v5EyGpVEJttOwEgy1fKBhE112Oynv47a%2B99zWo4z%2FvxeotaJWFr9mJ1lXia99H94ivVF0enzZ0dtOohF6AhbV24hoatLl41N%2FyA7CPmpN%2BOXA46vJxcW661fbyo&X-Amz-Signature=cee8340bae59a512063a6b091cae4efb0a1652b23c9e583fc9e1cdefe86e1174&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
