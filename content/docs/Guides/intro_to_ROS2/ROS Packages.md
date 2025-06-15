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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XUZJUL4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCID%2BtEwWqpxSFLcZGiC27iEphOfRsFxgtFMd8%2FWv%2F%2FVFlAiEAm5UvUS0A%2FCb8hKkpWhdiqxsC0LeNr5faN2d3CTYWK8Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGrQ4NHyNjTnfBdDfCrcA2rtjMxQDtd6i5imZfl6LIxyOKVMtjrEW6fPnYDrrg3FjMaTdIv8Y%2FgXX77gGnwczS6W1vKuW7l0500X3L6KFK27iB%2BvZfa0i%2F%2Fp%2FYqIcgyB0XKa7tPo909X0%2Bb%2FREzhTIHKI1S0zsoZvFIPcJ0%2Fqa8eQBlzrKueDKVECF7olZRxs6LBycBp5jU8GVgT6UwoDiUG%2BIL49SsZ%2BqHyO%2F2ptOzgOTQK2PhBH%2F%2BtjGvmuOR8Twvg12UThHQiIbyzr2%2FyYo3YZoc2XvE3vTfBYNxe4qPar%2FMCdAAg4FXV705L%2FdDM2AajjvLWxNq%2BAL8EXSYJ5vNSFkaa4r1cbNFUtNWOFhhP7F7nE3mbCWydrDyssRoNiEh3FBtofmAD6%2FRwzDQjjT8FY0y7wNyNzQ21wdrUi9mRAGlByjUvfBFLhIsdSqATNpeFCMb77r%2BUMdY%2FuPx1%2FBgmKi8G8E4huNC%2FaD5cXtlNEbSNOpqErcJArp2BMN4hXRwERP%2Fl0uOr%2FwnTPALrEWnzDPb9J0tWpodApqsLK1snI4iGWC8aWhg0DmDGNltHZfYgq2VLaNG4F3axvgkc37OQ%2BFS6KIVGeXpfIMpddLcripZnwN3%2Bcp8Vmq83bd9OYKGgL8d5MH442jhaMP%2BEusIGOqUBxy88vKcQ1%2BGJm%2B3daQka4KbtHvkfBpguJ5pHvq1dg32CI0%2BczG%2BQywGZVAdBzeKN1%2FGd8mKbNxtlOiqkhn1CQuP4XH8i9J4t2Ls47JWlbheM91Isqga%2BIVxIKU8AVLq1OZ9SAPBWO%2Bl6Ah1MJ0HIiJCfvoTBkVPYIzC6X%2FP6Wge9hRvXFG%2F5Y7UsjYqXNALMHag6ta5qrLuUEtfDOqVDpWaM%2BrST&X-Amz-Signature=d584f1d60e87b0d676ee1007c8011507ea6f9affbb0aa8769aa3f2614bfe4c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XUZJUL4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCID%2BtEwWqpxSFLcZGiC27iEphOfRsFxgtFMd8%2FWv%2F%2FVFlAiEAm5UvUS0A%2FCb8hKkpWhdiqxsC0LeNr5faN2d3CTYWK8Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGrQ4NHyNjTnfBdDfCrcA2rtjMxQDtd6i5imZfl6LIxyOKVMtjrEW6fPnYDrrg3FjMaTdIv8Y%2FgXX77gGnwczS6W1vKuW7l0500X3L6KFK27iB%2BvZfa0i%2F%2Fp%2FYqIcgyB0XKa7tPo909X0%2Bb%2FREzhTIHKI1S0zsoZvFIPcJ0%2Fqa8eQBlzrKueDKVECF7olZRxs6LBycBp5jU8GVgT6UwoDiUG%2BIL49SsZ%2BqHyO%2F2ptOzgOTQK2PhBH%2F%2BtjGvmuOR8Twvg12UThHQiIbyzr2%2FyYo3YZoc2XvE3vTfBYNxe4qPar%2FMCdAAg4FXV705L%2FdDM2AajjvLWxNq%2BAL8EXSYJ5vNSFkaa4r1cbNFUtNWOFhhP7F7nE3mbCWydrDyssRoNiEh3FBtofmAD6%2FRwzDQjjT8FY0y7wNyNzQ21wdrUi9mRAGlByjUvfBFLhIsdSqATNpeFCMb77r%2BUMdY%2FuPx1%2FBgmKi8G8E4huNC%2FaD5cXtlNEbSNOpqErcJArp2BMN4hXRwERP%2Fl0uOr%2FwnTPALrEWnzDPb9J0tWpodApqsLK1snI4iGWC8aWhg0DmDGNltHZfYgq2VLaNG4F3axvgkc37OQ%2BFS6KIVGeXpfIMpddLcripZnwN3%2Bcp8Vmq83bd9OYKGgL8d5MH442jhaMP%2BEusIGOqUBxy88vKcQ1%2BGJm%2B3daQka4KbtHvkfBpguJ5pHvq1dg32CI0%2BczG%2BQywGZVAdBzeKN1%2FGd8mKbNxtlOiqkhn1CQuP4XH8i9J4t2Ls47JWlbheM91Isqga%2BIVxIKU8AVLq1OZ9SAPBWO%2Bl6Ah1MJ0HIiJCfvoTBkVPYIzC6X%2FP6Wge9hRvXFG%2F5Y7UsjYqXNALMHag6ta5qrLuUEtfDOqVDpWaM%2BrST&X-Amz-Signature=86fc4b1ca21166b4f7623a2dfbaa6cadf8f7b599f54b3ad365ff7ca50d165fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XUZJUL4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCID%2BtEwWqpxSFLcZGiC27iEphOfRsFxgtFMd8%2FWv%2F%2FVFlAiEAm5UvUS0A%2FCb8hKkpWhdiqxsC0LeNr5faN2d3CTYWK8Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGrQ4NHyNjTnfBdDfCrcA2rtjMxQDtd6i5imZfl6LIxyOKVMtjrEW6fPnYDrrg3FjMaTdIv8Y%2FgXX77gGnwczS6W1vKuW7l0500X3L6KFK27iB%2BvZfa0i%2F%2Fp%2FYqIcgyB0XKa7tPo909X0%2Bb%2FREzhTIHKI1S0zsoZvFIPcJ0%2Fqa8eQBlzrKueDKVECF7olZRxs6LBycBp5jU8GVgT6UwoDiUG%2BIL49SsZ%2BqHyO%2F2ptOzgOTQK2PhBH%2F%2BtjGvmuOR8Twvg12UThHQiIbyzr2%2FyYo3YZoc2XvE3vTfBYNxe4qPar%2FMCdAAg4FXV705L%2FdDM2AajjvLWxNq%2BAL8EXSYJ5vNSFkaa4r1cbNFUtNWOFhhP7F7nE3mbCWydrDyssRoNiEh3FBtofmAD6%2FRwzDQjjT8FY0y7wNyNzQ21wdrUi9mRAGlByjUvfBFLhIsdSqATNpeFCMb77r%2BUMdY%2FuPx1%2FBgmKi8G8E4huNC%2FaD5cXtlNEbSNOpqErcJArp2BMN4hXRwERP%2Fl0uOr%2FwnTPALrEWnzDPb9J0tWpodApqsLK1snI4iGWC8aWhg0DmDGNltHZfYgq2VLaNG4F3axvgkc37OQ%2BFS6KIVGeXpfIMpddLcripZnwN3%2Bcp8Vmq83bd9OYKGgL8d5MH442jhaMP%2BEusIGOqUBxy88vKcQ1%2BGJm%2B3daQka4KbtHvkfBpguJ5pHvq1dg32CI0%2BczG%2BQywGZVAdBzeKN1%2FGd8mKbNxtlOiqkhn1CQuP4XH8i9J4t2Ls47JWlbheM91Isqga%2BIVxIKU8AVLq1OZ9SAPBWO%2Bl6Ah1MJ0HIiJCfvoTBkVPYIzC6X%2FP6Wge9hRvXFG%2F5Y7UsjYqXNALMHag6ta5qrLuUEtfDOqVDpWaM%2BrST&X-Amz-Signature=e907c09fe2ddf43b225d1117fb6fabc779475ff214d054d33ef9035f78775826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XUZJUL4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCID%2BtEwWqpxSFLcZGiC27iEphOfRsFxgtFMd8%2FWv%2F%2FVFlAiEAm5UvUS0A%2FCb8hKkpWhdiqxsC0LeNr5faN2d3CTYWK8Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGrQ4NHyNjTnfBdDfCrcA2rtjMxQDtd6i5imZfl6LIxyOKVMtjrEW6fPnYDrrg3FjMaTdIv8Y%2FgXX77gGnwczS6W1vKuW7l0500X3L6KFK27iB%2BvZfa0i%2F%2Fp%2FYqIcgyB0XKa7tPo909X0%2Bb%2FREzhTIHKI1S0zsoZvFIPcJ0%2Fqa8eQBlzrKueDKVECF7olZRxs6LBycBp5jU8GVgT6UwoDiUG%2BIL49SsZ%2BqHyO%2F2ptOzgOTQK2PhBH%2F%2BtjGvmuOR8Twvg12UThHQiIbyzr2%2FyYo3YZoc2XvE3vTfBYNxe4qPar%2FMCdAAg4FXV705L%2FdDM2AajjvLWxNq%2BAL8EXSYJ5vNSFkaa4r1cbNFUtNWOFhhP7F7nE3mbCWydrDyssRoNiEh3FBtofmAD6%2FRwzDQjjT8FY0y7wNyNzQ21wdrUi9mRAGlByjUvfBFLhIsdSqATNpeFCMb77r%2BUMdY%2FuPx1%2FBgmKi8G8E4huNC%2FaD5cXtlNEbSNOpqErcJArp2BMN4hXRwERP%2Fl0uOr%2FwnTPALrEWnzDPb9J0tWpodApqsLK1snI4iGWC8aWhg0DmDGNltHZfYgq2VLaNG4F3axvgkc37OQ%2BFS6KIVGeXpfIMpddLcripZnwN3%2Bcp8Vmq83bd9OYKGgL8d5MH442jhaMP%2BEusIGOqUBxy88vKcQ1%2BGJm%2B3daQka4KbtHvkfBpguJ5pHvq1dg32CI0%2BczG%2BQywGZVAdBzeKN1%2FGd8mKbNxtlOiqkhn1CQuP4XH8i9J4t2Ls47JWlbheM91Isqga%2BIVxIKU8AVLq1OZ9SAPBWO%2Bl6Ah1MJ0HIiJCfvoTBkVPYIzC6X%2FP6Wge9hRvXFG%2F5Y7UsjYqXNALMHag6ta5qrLuUEtfDOqVDpWaM%2BrST&X-Amz-Signature=975b4ea447171a5e1c822cb6d657c68192bd6f08ddef9614a3daf107f5f1cfcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XUZJUL4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCID%2BtEwWqpxSFLcZGiC27iEphOfRsFxgtFMd8%2FWv%2F%2FVFlAiEAm5UvUS0A%2FCb8hKkpWhdiqxsC0LeNr5faN2d3CTYWK8Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGrQ4NHyNjTnfBdDfCrcA2rtjMxQDtd6i5imZfl6LIxyOKVMtjrEW6fPnYDrrg3FjMaTdIv8Y%2FgXX77gGnwczS6W1vKuW7l0500X3L6KFK27iB%2BvZfa0i%2F%2Fp%2FYqIcgyB0XKa7tPo909X0%2Bb%2FREzhTIHKI1S0zsoZvFIPcJ0%2Fqa8eQBlzrKueDKVECF7olZRxs6LBycBp5jU8GVgT6UwoDiUG%2BIL49SsZ%2BqHyO%2F2ptOzgOTQK2PhBH%2F%2BtjGvmuOR8Twvg12UThHQiIbyzr2%2FyYo3YZoc2XvE3vTfBYNxe4qPar%2FMCdAAg4FXV705L%2FdDM2AajjvLWxNq%2BAL8EXSYJ5vNSFkaa4r1cbNFUtNWOFhhP7F7nE3mbCWydrDyssRoNiEh3FBtofmAD6%2FRwzDQjjT8FY0y7wNyNzQ21wdrUi9mRAGlByjUvfBFLhIsdSqATNpeFCMb77r%2BUMdY%2FuPx1%2FBgmKi8G8E4huNC%2FaD5cXtlNEbSNOpqErcJArp2BMN4hXRwERP%2Fl0uOr%2FwnTPALrEWnzDPb9J0tWpodApqsLK1snI4iGWC8aWhg0DmDGNltHZfYgq2VLaNG4F3axvgkc37OQ%2BFS6KIVGeXpfIMpddLcripZnwN3%2Bcp8Vmq83bd9OYKGgL8d5MH442jhaMP%2BEusIGOqUBxy88vKcQ1%2BGJm%2B3daQka4KbtHvkfBpguJ5pHvq1dg32CI0%2BczG%2BQywGZVAdBzeKN1%2FGd8mKbNxtlOiqkhn1CQuP4XH8i9J4t2Ls47JWlbheM91Isqga%2BIVxIKU8AVLq1OZ9SAPBWO%2Bl6Ah1MJ0HIiJCfvoTBkVPYIzC6X%2FP6Wge9hRvXFG%2F5Y7UsjYqXNALMHag6ta5qrLuUEtfDOqVDpWaM%2BrST&X-Amz-Signature=7db53f73c6610ca3897a0b9ec1a3baa9201288e4b55d08eb520eb29f0ca1459e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XUZJUL4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCID%2BtEwWqpxSFLcZGiC27iEphOfRsFxgtFMd8%2FWv%2F%2FVFlAiEAm5UvUS0A%2FCb8hKkpWhdiqxsC0LeNr5faN2d3CTYWK8Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGrQ4NHyNjTnfBdDfCrcA2rtjMxQDtd6i5imZfl6LIxyOKVMtjrEW6fPnYDrrg3FjMaTdIv8Y%2FgXX77gGnwczS6W1vKuW7l0500X3L6KFK27iB%2BvZfa0i%2F%2Fp%2FYqIcgyB0XKa7tPo909X0%2Bb%2FREzhTIHKI1S0zsoZvFIPcJ0%2Fqa8eQBlzrKueDKVECF7olZRxs6LBycBp5jU8GVgT6UwoDiUG%2BIL49SsZ%2BqHyO%2F2ptOzgOTQK2PhBH%2F%2BtjGvmuOR8Twvg12UThHQiIbyzr2%2FyYo3YZoc2XvE3vTfBYNxe4qPar%2FMCdAAg4FXV705L%2FdDM2AajjvLWxNq%2BAL8EXSYJ5vNSFkaa4r1cbNFUtNWOFhhP7F7nE3mbCWydrDyssRoNiEh3FBtofmAD6%2FRwzDQjjT8FY0y7wNyNzQ21wdrUi9mRAGlByjUvfBFLhIsdSqATNpeFCMb77r%2BUMdY%2FuPx1%2FBgmKi8G8E4huNC%2FaD5cXtlNEbSNOpqErcJArp2BMN4hXRwERP%2Fl0uOr%2FwnTPALrEWnzDPb9J0tWpodApqsLK1snI4iGWC8aWhg0DmDGNltHZfYgq2VLaNG4F3axvgkc37OQ%2BFS6KIVGeXpfIMpddLcripZnwN3%2Bcp8Vmq83bd9OYKGgL8d5MH442jhaMP%2BEusIGOqUBxy88vKcQ1%2BGJm%2B3daQka4KbtHvkfBpguJ5pHvq1dg32CI0%2BczG%2BQywGZVAdBzeKN1%2FGd8mKbNxtlOiqkhn1CQuP4XH8i9J4t2Ls47JWlbheM91Isqga%2BIVxIKU8AVLq1OZ9SAPBWO%2Bl6Ah1MJ0HIiJCfvoTBkVPYIzC6X%2FP6Wge9hRvXFG%2F5Y7UsjYqXNALMHag6ta5qrLuUEtfDOqVDpWaM%2BrST&X-Amz-Signature=d4bba3786ad1e766ab609bafe59e7da3c6bdcf560aa19b951be3cf045ec2b9d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XUZJUL4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCID%2BtEwWqpxSFLcZGiC27iEphOfRsFxgtFMd8%2FWv%2F%2FVFlAiEAm5UvUS0A%2FCb8hKkpWhdiqxsC0LeNr5faN2d3CTYWK8Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGrQ4NHyNjTnfBdDfCrcA2rtjMxQDtd6i5imZfl6LIxyOKVMtjrEW6fPnYDrrg3FjMaTdIv8Y%2FgXX77gGnwczS6W1vKuW7l0500X3L6KFK27iB%2BvZfa0i%2F%2Fp%2FYqIcgyB0XKa7tPo909X0%2Bb%2FREzhTIHKI1S0zsoZvFIPcJ0%2Fqa8eQBlzrKueDKVECF7olZRxs6LBycBp5jU8GVgT6UwoDiUG%2BIL49SsZ%2BqHyO%2F2ptOzgOTQK2PhBH%2F%2BtjGvmuOR8Twvg12UThHQiIbyzr2%2FyYo3YZoc2XvE3vTfBYNxe4qPar%2FMCdAAg4FXV705L%2FdDM2AajjvLWxNq%2BAL8EXSYJ5vNSFkaa4r1cbNFUtNWOFhhP7F7nE3mbCWydrDyssRoNiEh3FBtofmAD6%2FRwzDQjjT8FY0y7wNyNzQ21wdrUi9mRAGlByjUvfBFLhIsdSqATNpeFCMb77r%2BUMdY%2FuPx1%2FBgmKi8G8E4huNC%2FaD5cXtlNEbSNOpqErcJArp2BMN4hXRwERP%2Fl0uOr%2FwnTPALrEWnzDPb9J0tWpodApqsLK1snI4iGWC8aWhg0DmDGNltHZfYgq2VLaNG4F3axvgkc37OQ%2BFS6KIVGeXpfIMpddLcripZnwN3%2Bcp8Vmq83bd9OYKGgL8d5MH442jhaMP%2BEusIGOqUBxy88vKcQ1%2BGJm%2B3daQka4KbtHvkfBpguJ5pHvq1dg32CI0%2BczG%2BQywGZVAdBzeKN1%2FGd8mKbNxtlOiqkhn1CQuP4XH8i9J4t2Ls47JWlbheM91Isqga%2BIVxIKU8AVLq1OZ9SAPBWO%2Bl6Ah1MJ0HIiJCfvoTBkVPYIzC6X%2FP6Wge9hRvXFG%2F5Y7UsjYqXNALMHag6ta5qrLuUEtfDOqVDpWaM%2BrST&X-Amz-Signature=631192208b5281bcadcd57a4d4c250bf52aa940a05f16ab2251b52c914b698c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
