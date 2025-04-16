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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDIN4NHB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1hZgqrZgY1gJhNabs8VJsrHFi2GASBXUiDuj21cGa9AiACHJvokjj4ImscEUaDP3P4uKkp9Gu134YzU%2BwoNmmbMSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMMijoMNNDMHECauWvKtwDaADdiMobLM0WfABD7yXfSzqpM8j7%2BHym%2FdJwlkY8mrYlBdvEsz4FXNoceLCiigAawjTLRQR2gt7%2FRMOK8ePAKh%2FVcx1hhHJxgW8%2F%2FEvDCyeNZpZPacP7LNIwketaCavUy6xWKgsRFyWkIMHOweaAsyme0hhWn53Aa%2BrH1QkiydANBRMAUqB5UbBGWJoUOXPSowTe%2BrizX6tCx4B9KKnJCGpPfgO6%2BHk1BebcmURrwMIpNMzDXODW%2BUhBpWnpObEGiL8qFhamnOf%2BlO3n8akut0RJJfdyQvCqEK%2BRdOWCyciB3%2FWSlGVOzvtxImHQmrtz5iBGpGsLM6Eo5qfUkcw5DweW3NbpcYFHwMbcTKegss0pxRwhUzOGPTIASDYijOLh87JtqEV0o4kNBA7yLGHOWsZ4LJfkOiKMzXK7zaCt00%2FtGuo1J0hm69h70tBeO%2FK6sXE9hobkk86zV0s6YCrMnGxvDkCZFLpAJpC9Q6EwGUcG1BmcXCRc7xeZ1YJYvgafJ6q4EE754erFWggUv8qNCyEZADtEymrNRQjPYij7H6dtJ30Gki%2FPeKE0Ctp7mCmtBhi453MTjcJrJoWTEYQBs%2B9TB9pY1uTIS6FH0hRVKq7ZZzUeykxljs%2B6BnMw1Ir9vwY6pgF5fDiogiptgRsrRdUOl%2BONEOokkAjBX37Ash2lWbmo7okATRaeI4QF%2Fq5YjEd070YZAXHhqBrtScCKIe0oBJ77yTwK9%2FRsuQ7Tj%2F99e1TMU2S4syYKHTAnwILgl9w3Kw9fQ98BgKOmQAhOz3IxKyi7W399zHDGM28FCzDT8UWnhMrkQcFwk%2BqQi3IKIkDT791es1W4pP8cyHKCN1VHDohasW5lLd6J&X-Amz-Signature=39bab75496af0936aaf6a9a4c51fb990d05eeb91ad87288a576a2f736209bad9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDIN4NHB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1hZgqrZgY1gJhNabs8VJsrHFi2GASBXUiDuj21cGa9AiACHJvokjj4ImscEUaDP3P4uKkp9Gu134YzU%2BwoNmmbMSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMMijoMNNDMHECauWvKtwDaADdiMobLM0WfABD7yXfSzqpM8j7%2BHym%2FdJwlkY8mrYlBdvEsz4FXNoceLCiigAawjTLRQR2gt7%2FRMOK8ePAKh%2FVcx1hhHJxgW8%2F%2FEvDCyeNZpZPacP7LNIwketaCavUy6xWKgsRFyWkIMHOweaAsyme0hhWn53Aa%2BrH1QkiydANBRMAUqB5UbBGWJoUOXPSowTe%2BrizX6tCx4B9KKnJCGpPfgO6%2BHk1BebcmURrwMIpNMzDXODW%2BUhBpWnpObEGiL8qFhamnOf%2BlO3n8akut0RJJfdyQvCqEK%2BRdOWCyciB3%2FWSlGVOzvtxImHQmrtz5iBGpGsLM6Eo5qfUkcw5DweW3NbpcYFHwMbcTKegss0pxRwhUzOGPTIASDYijOLh87JtqEV0o4kNBA7yLGHOWsZ4LJfkOiKMzXK7zaCt00%2FtGuo1J0hm69h70tBeO%2FK6sXE9hobkk86zV0s6YCrMnGxvDkCZFLpAJpC9Q6EwGUcG1BmcXCRc7xeZ1YJYvgafJ6q4EE754erFWggUv8qNCyEZADtEymrNRQjPYij7H6dtJ30Gki%2FPeKE0Ctp7mCmtBhi453MTjcJrJoWTEYQBs%2B9TB9pY1uTIS6FH0hRVKq7ZZzUeykxljs%2B6BnMw1Ir9vwY6pgF5fDiogiptgRsrRdUOl%2BONEOokkAjBX37Ash2lWbmo7okATRaeI4QF%2Fq5YjEd070YZAXHhqBrtScCKIe0oBJ77yTwK9%2FRsuQ7Tj%2F99e1TMU2S4syYKHTAnwILgl9w3Kw9fQ98BgKOmQAhOz3IxKyi7W399zHDGM28FCzDT8UWnhMrkQcFwk%2BqQi3IKIkDT791es1W4pP8cyHKCN1VHDohasW5lLd6J&X-Amz-Signature=b33887f65c98e36fed644fe2a6ccf846a222c58eff85456d66f836212bdceb72&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDIN4NHB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1hZgqrZgY1gJhNabs8VJsrHFi2GASBXUiDuj21cGa9AiACHJvokjj4ImscEUaDP3P4uKkp9Gu134YzU%2BwoNmmbMSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMMijoMNNDMHECauWvKtwDaADdiMobLM0WfABD7yXfSzqpM8j7%2BHym%2FdJwlkY8mrYlBdvEsz4FXNoceLCiigAawjTLRQR2gt7%2FRMOK8ePAKh%2FVcx1hhHJxgW8%2F%2FEvDCyeNZpZPacP7LNIwketaCavUy6xWKgsRFyWkIMHOweaAsyme0hhWn53Aa%2BrH1QkiydANBRMAUqB5UbBGWJoUOXPSowTe%2BrizX6tCx4B9KKnJCGpPfgO6%2BHk1BebcmURrwMIpNMzDXODW%2BUhBpWnpObEGiL8qFhamnOf%2BlO3n8akut0RJJfdyQvCqEK%2BRdOWCyciB3%2FWSlGVOzvtxImHQmrtz5iBGpGsLM6Eo5qfUkcw5DweW3NbpcYFHwMbcTKegss0pxRwhUzOGPTIASDYijOLh87JtqEV0o4kNBA7yLGHOWsZ4LJfkOiKMzXK7zaCt00%2FtGuo1J0hm69h70tBeO%2FK6sXE9hobkk86zV0s6YCrMnGxvDkCZFLpAJpC9Q6EwGUcG1BmcXCRc7xeZ1YJYvgafJ6q4EE754erFWggUv8qNCyEZADtEymrNRQjPYij7H6dtJ30Gki%2FPeKE0Ctp7mCmtBhi453MTjcJrJoWTEYQBs%2B9TB9pY1uTIS6FH0hRVKq7ZZzUeykxljs%2B6BnMw1Ir9vwY6pgF5fDiogiptgRsrRdUOl%2BONEOokkAjBX37Ash2lWbmo7okATRaeI4QF%2Fq5YjEd070YZAXHhqBrtScCKIe0oBJ77yTwK9%2FRsuQ7Tj%2F99e1TMU2S4syYKHTAnwILgl9w3Kw9fQ98BgKOmQAhOz3IxKyi7W399zHDGM28FCzDT8UWnhMrkQcFwk%2BqQi3IKIkDT791es1W4pP8cyHKCN1VHDohasW5lLd6J&X-Amz-Signature=b2c44a0ad311be3969619608397423cb99b3e9471f0c23e75b2ebd96ada53616&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDIN4NHB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1hZgqrZgY1gJhNabs8VJsrHFi2GASBXUiDuj21cGa9AiACHJvokjj4ImscEUaDP3P4uKkp9Gu134YzU%2BwoNmmbMSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMMijoMNNDMHECauWvKtwDaADdiMobLM0WfABD7yXfSzqpM8j7%2BHym%2FdJwlkY8mrYlBdvEsz4FXNoceLCiigAawjTLRQR2gt7%2FRMOK8ePAKh%2FVcx1hhHJxgW8%2F%2FEvDCyeNZpZPacP7LNIwketaCavUy6xWKgsRFyWkIMHOweaAsyme0hhWn53Aa%2BrH1QkiydANBRMAUqB5UbBGWJoUOXPSowTe%2BrizX6tCx4B9KKnJCGpPfgO6%2BHk1BebcmURrwMIpNMzDXODW%2BUhBpWnpObEGiL8qFhamnOf%2BlO3n8akut0RJJfdyQvCqEK%2BRdOWCyciB3%2FWSlGVOzvtxImHQmrtz5iBGpGsLM6Eo5qfUkcw5DweW3NbpcYFHwMbcTKegss0pxRwhUzOGPTIASDYijOLh87JtqEV0o4kNBA7yLGHOWsZ4LJfkOiKMzXK7zaCt00%2FtGuo1J0hm69h70tBeO%2FK6sXE9hobkk86zV0s6YCrMnGxvDkCZFLpAJpC9Q6EwGUcG1BmcXCRc7xeZ1YJYvgafJ6q4EE754erFWggUv8qNCyEZADtEymrNRQjPYij7H6dtJ30Gki%2FPeKE0Ctp7mCmtBhi453MTjcJrJoWTEYQBs%2B9TB9pY1uTIS6FH0hRVKq7ZZzUeykxljs%2B6BnMw1Ir9vwY6pgF5fDiogiptgRsrRdUOl%2BONEOokkAjBX37Ash2lWbmo7okATRaeI4QF%2Fq5YjEd070YZAXHhqBrtScCKIe0oBJ77yTwK9%2FRsuQ7Tj%2F99e1TMU2S4syYKHTAnwILgl9w3Kw9fQ98BgKOmQAhOz3IxKyi7W399zHDGM28FCzDT8UWnhMrkQcFwk%2BqQi3IKIkDT791es1W4pP8cyHKCN1VHDohasW5lLd6J&X-Amz-Signature=341912eedad39af5aa78cef6ea57c490627ef3f17e02f6402e8bd25f74f95d19&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDIN4NHB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1hZgqrZgY1gJhNabs8VJsrHFi2GASBXUiDuj21cGa9AiACHJvokjj4ImscEUaDP3P4uKkp9Gu134YzU%2BwoNmmbMSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMMijoMNNDMHECauWvKtwDaADdiMobLM0WfABD7yXfSzqpM8j7%2BHym%2FdJwlkY8mrYlBdvEsz4FXNoceLCiigAawjTLRQR2gt7%2FRMOK8ePAKh%2FVcx1hhHJxgW8%2F%2FEvDCyeNZpZPacP7LNIwketaCavUy6xWKgsRFyWkIMHOweaAsyme0hhWn53Aa%2BrH1QkiydANBRMAUqB5UbBGWJoUOXPSowTe%2BrizX6tCx4B9KKnJCGpPfgO6%2BHk1BebcmURrwMIpNMzDXODW%2BUhBpWnpObEGiL8qFhamnOf%2BlO3n8akut0RJJfdyQvCqEK%2BRdOWCyciB3%2FWSlGVOzvtxImHQmrtz5iBGpGsLM6Eo5qfUkcw5DweW3NbpcYFHwMbcTKegss0pxRwhUzOGPTIASDYijOLh87JtqEV0o4kNBA7yLGHOWsZ4LJfkOiKMzXK7zaCt00%2FtGuo1J0hm69h70tBeO%2FK6sXE9hobkk86zV0s6YCrMnGxvDkCZFLpAJpC9Q6EwGUcG1BmcXCRc7xeZ1YJYvgafJ6q4EE754erFWggUv8qNCyEZADtEymrNRQjPYij7H6dtJ30Gki%2FPeKE0Ctp7mCmtBhi453MTjcJrJoWTEYQBs%2B9TB9pY1uTIS6FH0hRVKq7ZZzUeykxljs%2B6BnMw1Ir9vwY6pgF5fDiogiptgRsrRdUOl%2BONEOokkAjBX37Ash2lWbmo7okATRaeI4QF%2Fq5YjEd070YZAXHhqBrtScCKIe0oBJ77yTwK9%2FRsuQ7Tj%2F99e1TMU2S4syYKHTAnwILgl9w3Kw9fQ98BgKOmQAhOz3IxKyi7W399zHDGM28FCzDT8UWnhMrkQcFwk%2BqQi3IKIkDT791es1W4pP8cyHKCN1VHDohasW5lLd6J&X-Amz-Signature=7778cf81b05b001357fc7ad7ffa28ae4675ce23ae520618a93fd7a56ea12a469&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDIN4NHB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1hZgqrZgY1gJhNabs8VJsrHFi2GASBXUiDuj21cGa9AiACHJvokjj4ImscEUaDP3P4uKkp9Gu134YzU%2BwoNmmbMSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMMijoMNNDMHECauWvKtwDaADdiMobLM0WfABD7yXfSzqpM8j7%2BHym%2FdJwlkY8mrYlBdvEsz4FXNoceLCiigAawjTLRQR2gt7%2FRMOK8ePAKh%2FVcx1hhHJxgW8%2F%2FEvDCyeNZpZPacP7LNIwketaCavUy6xWKgsRFyWkIMHOweaAsyme0hhWn53Aa%2BrH1QkiydANBRMAUqB5UbBGWJoUOXPSowTe%2BrizX6tCx4B9KKnJCGpPfgO6%2BHk1BebcmURrwMIpNMzDXODW%2BUhBpWnpObEGiL8qFhamnOf%2BlO3n8akut0RJJfdyQvCqEK%2BRdOWCyciB3%2FWSlGVOzvtxImHQmrtz5iBGpGsLM6Eo5qfUkcw5DweW3NbpcYFHwMbcTKegss0pxRwhUzOGPTIASDYijOLh87JtqEV0o4kNBA7yLGHOWsZ4LJfkOiKMzXK7zaCt00%2FtGuo1J0hm69h70tBeO%2FK6sXE9hobkk86zV0s6YCrMnGxvDkCZFLpAJpC9Q6EwGUcG1BmcXCRc7xeZ1YJYvgafJ6q4EE754erFWggUv8qNCyEZADtEymrNRQjPYij7H6dtJ30Gki%2FPeKE0Ctp7mCmtBhi453MTjcJrJoWTEYQBs%2B9TB9pY1uTIS6FH0hRVKq7ZZzUeykxljs%2B6BnMw1Ir9vwY6pgF5fDiogiptgRsrRdUOl%2BONEOokkAjBX37Ash2lWbmo7okATRaeI4QF%2Fq5YjEd070YZAXHhqBrtScCKIe0oBJ77yTwK9%2FRsuQ7Tj%2F99e1TMU2S4syYKHTAnwILgl9w3Kw9fQ98BgKOmQAhOz3IxKyi7W399zHDGM28FCzDT8UWnhMrkQcFwk%2BqQi3IKIkDT791es1W4pP8cyHKCN1VHDohasW5lLd6J&X-Amz-Signature=907f097c57b792e6ad84f815f0a9ec83baa1ffdaeb6e578962e75e0a08556b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDIN4NHB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1hZgqrZgY1gJhNabs8VJsrHFi2GASBXUiDuj21cGa9AiACHJvokjj4ImscEUaDP3P4uKkp9Gu134YzU%2BwoNmmbMSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMMijoMNNDMHECauWvKtwDaADdiMobLM0WfABD7yXfSzqpM8j7%2BHym%2FdJwlkY8mrYlBdvEsz4FXNoceLCiigAawjTLRQR2gt7%2FRMOK8ePAKh%2FVcx1hhHJxgW8%2F%2FEvDCyeNZpZPacP7LNIwketaCavUy6xWKgsRFyWkIMHOweaAsyme0hhWn53Aa%2BrH1QkiydANBRMAUqB5UbBGWJoUOXPSowTe%2BrizX6tCx4B9KKnJCGpPfgO6%2BHk1BebcmURrwMIpNMzDXODW%2BUhBpWnpObEGiL8qFhamnOf%2BlO3n8akut0RJJfdyQvCqEK%2BRdOWCyciB3%2FWSlGVOzvtxImHQmrtz5iBGpGsLM6Eo5qfUkcw5DweW3NbpcYFHwMbcTKegss0pxRwhUzOGPTIASDYijOLh87JtqEV0o4kNBA7yLGHOWsZ4LJfkOiKMzXK7zaCt00%2FtGuo1J0hm69h70tBeO%2FK6sXE9hobkk86zV0s6YCrMnGxvDkCZFLpAJpC9Q6EwGUcG1BmcXCRc7xeZ1YJYvgafJ6q4EE754erFWggUv8qNCyEZADtEymrNRQjPYij7H6dtJ30Gki%2FPeKE0Ctp7mCmtBhi453MTjcJrJoWTEYQBs%2B9TB9pY1uTIS6FH0hRVKq7ZZzUeykxljs%2B6BnMw1Ir9vwY6pgF5fDiogiptgRsrRdUOl%2BONEOokkAjBX37Ash2lWbmo7okATRaeI4QF%2Fq5YjEd070YZAXHhqBrtScCKIe0oBJ77yTwK9%2FRsuQ7Tj%2F99e1TMU2S4syYKHTAnwILgl9w3Kw9fQ98BgKOmQAhOz3IxKyi7W399zHDGM28FCzDT8UWnhMrkQcFwk%2BqQi3IKIkDT791es1W4pP8cyHKCN1VHDohasW5lLd6J&X-Amz-Signature=f86e179758327d8a5b63dc2fe75ba3955c0d2780762bb15cd25f2adddbe5db09&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
