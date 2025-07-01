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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUAAZD4A%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUDj3xjk0EupVoOxhH%2BHV0bmHHjCf3wsecXk3uEtb81gIhAKRFwLf9Aa3%2BBv4QTNOqnQQGPH4l%2FEG8AfzZEbKTBSitKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ki2SFxClql4F2Vsq3AMNLLNJMngw%2FqhxVYqdLau6kqPH6WeLe92G3p%2BT2ZPxgyo5HCe3Yosan%2BRrGXB3x3qf4%2FnHzHXmyth0hzdKCGlWSbPuFav3DeDu0JZDPtI%2B18gbcqpaacBzGJOuaaOHMBp4xO1ovwK3gIkKb%2ByKQKlbGTl2%2B2ieEHN2N%2FOlV%2Feo%2BDJMixcZ8V93YLmMDgP0UVcHVhJs8EQyAhAeNAzFPPt%2FMRrFYlSpcMmHhzndLaIkrAII%2F4w3966We2%2F52xffNai3eW6UMpvWQBBEvw1h8W1tH80ANaoas%2B397VIz%2FQPUfEArWAvPZ%2BarNmmsiZ%2Bx6WE2BiomkK6X0QMfuICGfnoHD08bZOROWAlDwAwlZrfww306EfAMiW%2Fz4hrWY8tqkXD1W3AVwo%2BzylcngwoJCbILUMl244gRA6IFa%2Fxr63Js6dDIiBuy%2BzwziAGO2R2xXBBmpDBE8NNodYodwVyqMIYHN4V2GAYimsp8mrkU3eBLUX%2BhiREgAOoykLqpjeJfAxSiRCZONt12DzT0KCJXFQqdnsCim2NLcdxgbumgq%2FDH%2FZ1j4DmJObMvjIfgEW3%2FdHLDCCzsL%2BfFUAHFWQVx1ZwA2PFjGzVM2wHmL%2BgMPYZQArCVxgB59vr3ZgDrGzDEpY%2FDBjqkAf%2BXLW0GGjxovDAz0i8GMlq9dRFY%2Ffq2msgF0YA8nI5%2FNx9sxJxpnzM%2F6ujoHz%2FCOGvfHMVOkFCDjBCIv0kkXvLbyuYeGxpznEC%2BlHVF9jnJvzpx2ZpWJ6hjH4HYGWC0DBrn8JDBjbvztmPFqcOh3pBy8tUOtob7QBwTWSc91isU%2FPb8dSpmD31PeYBud4Eq3%2FmVDAo4PqoUXGqlQmBD5qR1EWbY&X-Amz-Signature=fd9af2d0ff0ddc01d0349592eababee601f925b5890762e1069b161c84648d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUAAZD4A%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUDj3xjk0EupVoOxhH%2BHV0bmHHjCf3wsecXk3uEtb81gIhAKRFwLf9Aa3%2BBv4QTNOqnQQGPH4l%2FEG8AfzZEbKTBSitKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ki2SFxClql4F2Vsq3AMNLLNJMngw%2FqhxVYqdLau6kqPH6WeLe92G3p%2BT2ZPxgyo5HCe3Yosan%2BRrGXB3x3qf4%2FnHzHXmyth0hzdKCGlWSbPuFav3DeDu0JZDPtI%2B18gbcqpaacBzGJOuaaOHMBp4xO1ovwK3gIkKb%2ByKQKlbGTl2%2B2ieEHN2N%2FOlV%2Feo%2BDJMixcZ8V93YLmMDgP0UVcHVhJs8EQyAhAeNAzFPPt%2FMRrFYlSpcMmHhzndLaIkrAII%2F4w3966We2%2F52xffNai3eW6UMpvWQBBEvw1h8W1tH80ANaoas%2B397VIz%2FQPUfEArWAvPZ%2BarNmmsiZ%2Bx6WE2BiomkK6X0QMfuICGfnoHD08bZOROWAlDwAwlZrfww306EfAMiW%2Fz4hrWY8tqkXD1W3AVwo%2BzylcngwoJCbILUMl244gRA6IFa%2Fxr63Js6dDIiBuy%2BzwziAGO2R2xXBBmpDBE8NNodYodwVyqMIYHN4V2GAYimsp8mrkU3eBLUX%2BhiREgAOoykLqpjeJfAxSiRCZONt12DzT0KCJXFQqdnsCim2NLcdxgbumgq%2FDH%2FZ1j4DmJObMvjIfgEW3%2FdHLDCCzsL%2BfFUAHFWQVx1ZwA2PFjGzVM2wHmL%2BgMPYZQArCVxgB59vr3ZgDrGzDEpY%2FDBjqkAf%2BXLW0GGjxovDAz0i8GMlq9dRFY%2Ffq2msgF0YA8nI5%2FNx9sxJxpnzM%2F6ujoHz%2FCOGvfHMVOkFCDjBCIv0kkXvLbyuYeGxpznEC%2BlHVF9jnJvzpx2ZpWJ6hjH4HYGWC0DBrn8JDBjbvztmPFqcOh3pBy8tUOtob7QBwTWSc91isU%2FPb8dSpmD31PeYBud4Eq3%2FmVDAo4PqoUXGqlQmBD5qR1EWbY&X-Amz-Signature=2e682292d9b1ec0387c542a17356842532d66284ab82cb49b0d20ae754bf8816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUAAZD4A%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUDj3xjk0EupVoOxhH%2BHV0bmHHjCf3wsecXk3uEtb81gIhAKRFwLf9Aa3%2BBv4QTNOqnQQGPH4l%2FEG8AfzZEbKTBSitKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ki2SFxClql4F2Vsq3AMNLLNJMngw%2FqhxVYqdLau6kqPH6WeLe92G3p%2BT2ZPxgyo5HCe3Yosan%2BRrGXB3x3qf4%2FnHzHXmyth0hzdKCGlWSbPuFav3DeDu0JZDPtI%2B18gbcqpaacBzGJOuaaOHMBp4xO1ovwK3gIkKb%2ByKQKlbGTl2%2B2ieEHN2N%2FOlV%2Feo%2BDJMixcZ8V93YLmMDgP0UVcHVhJs8EQyAhAeNAzFPPt%2FMRrFYlSpcMmHhzndLaIkrAII%2F4w3966We2%2F52xffNai3eW6UMpvWQBBEvw1h8W1tH80ANaoas%2B397VIz%2FQPUfEArWAvPZ%2BarNmmsiZ%2Bx6WE2BiomkK6X0QMfuICGfnoHD08bZOROWAlDwAwlZrfww306EfAMiW%2Fz4hrWY8tqkXD1W3AVwo%2BzylcngwoJCbILUMl244gRA6IFa%2Fxr63Js6dDIiBuy%2BzwziAGO2R2xXBBmpDBE8NNodYodwVyqMIYHN4V2GAYimsp8mrkU3eBLUX%2BhiREgAOoykLqpjeJfAxSiRCZONt12DzT0KCJXFQqdnsCim2NLcdxgbumgq%2FDH%2FZ1j4DmJObMvjIfgEW3%2FdHLDCCzsL%2BfFUAHFWQVx1ZwA2PFjGzVM2wHmL%2BgMPYZQArCVxgB59vr3ZgDrGzDEpY%2FDBjqkAf%2BXLW0GGjxovDAz0i8GMlq9dRFY%2Ffq2msgF0YA8nI5%2FNx9sxJxpnzM%2F6ujoHz%2FCOGvfHMVOkFCDjBCIv0kkXvLbyuYeGxpznEC%2BlHVF9jnJvzpx2ZpWJ6hjH4HYGWC0DBrn8JDBjbvztmPFqcOh3pBy8tUOtob7QBwTWSc91isU%2FPb8dSpmD31PeYBud4Eq3%2FmVDAo4PqoUXGqlQmBD5qR1EWbY&X-Amz-Signature=5f7baf8ab04d7d14247b1e69de02cad4526ba3a25add6273828ebb85ccb84839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUAAZD4A%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUDj3xjk0EupVoOxhH%2BHV0bmHHjCf3wsecXk3uEtb81gIhAKRFwLf9Aa3%2BBv4QTNOqnQQGPH4l%2FEG8AfzZEbKTBSitKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ki2SFxClql4F2Vsq3AMNLLNJMngw%2FqhxVYqdLau6kqPH6WeLe92G3p%2BT2ZPxgyo5HCe3Yosan%2BRrGXB3x3qf4%2FnHzHXmyth0hzdKCGlWSbPuFav3DeDu0JZDPtI%2B18gbcqpaacBzGJOuaaOHMBp4xO1ovwK3gIkKb%2ByKQKlbGTl2%2B2ieEHN2N%2FOlV%2Feo%2BDJMixcZ8V93YLmMDgP0UVcHVhJs8EQyAhAeNAzFPPt%2FMRrFYlSpcMmHhzndLaIkrAII%2F4w3966We2%2F52xffNai3eW6UMpvWQBBEvw1h8W1tH80ANaoas%2B397VIz%2FQPUfEArWAvPZ%2BarNmmsiZ%2Bx6WE2BiomkK6X0QMfuICGfnoHD08bZOROWAlDwAwlZrfww306EfAMiW%2Fz4hrWY8tqkXD1W3AVwo%2BzylcngwoJCbILUMl244gRA6IFa%2Fxr63Js6dDIiBuy%2BzwziAGO2R2xXBBmpDBE8NNodYodwVyqMIYHN4V2GAYimsp8mrkU3eBLUX%2BhiREgAOoykLqpjeJfAxSiRCZONt12DzT0KCJXFQqdnsCim2NLcdxgbumgq%2FDH%2FZ1j4DmJObMvjIfgEW3%2FdHLDCCzsL%2BfFUAHFWQVx1ZwA2PFjGzVM2wHmL%2BgMPYZQArCVxgB59vr3ZgDrGzDEpY%2FDBjqkAf%2BXLW0GGjxovDAz0i8GMlq9dRFY%2Ffq2msgF0YA8nI5%2FNx9sxJxpnzM%2F6ujoHz%2FCOGvfHMVOkFCDjBCIv0kkXvLbyuYeGxpznEC%2BlHVF9jnJvzpx2ZpWJ6hjH4HYGWC0DBrn8JDBjbvztmPFqcOh3pBy8tUOtob7QBwTWSc91isU%2FPb8dSpmD31PeYBud4Eq3%2FmVDAo4PqoUXGqlQmBD5qR1EWbY&X-Amz-Signature=c6d1c0ea7ef65e9e8fe2fe60f61523a037b9b0096ff17c403d225b2acf06a3e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUAAZD4A%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUDj3xjk0EupVoOxhH%2BHV0bmHHjCf3wsecXk3uEtb81gIhAKRFwLf9Aa3%2BBv4QTNOqnQQGPH4l%2FEG8AfzZEbKTBSitKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ki2SFxClql4F2Vsq3AMNLLNJMngw%2FqhxVYqdLau6kqPH6WeLe92G3p%2BT2ZPxgyo5HCe3Yosan%2BRrGXB3x3qf4%2FnHzHXmyth0hzdKCGlWSbPuFav3DeDu0JZDPtI%2B18gbcqpaacBzGJOuaaOHMBp4xO1ovwK3gIkKb%2ByKQKlbGTl2%2B2ieEHN2N%2FOlV%2Feo%2BDJMixcZ8V93YLmMDgP0UVcHVhJs8EQyAhAeNAzFPPt%2FMRrFYlSpcMmHhzndLaIkrAII%2F4w3966We2%2F52xffNai3eW6UMpvWQBBEvw1h8W1tH80ANaoas%2B397VIz%2FQPUfEArWAvPZ%2BarNmmsiZ%2Bx6WE2BiomkK6X0QMfuICGfnoHD08bZOROWAlDwAwlZrfww306EfAMiW%2Fz4hrWY8tqkXD1W3AVwo%2BzylcngwoJCbILUMl244gRA6IFa%2Fxr63Js6dDIiBuy%2BzwziAGO2R2xXBBmpDBE8NNodYodwVyqMIYHN4V2GAYimsp8mrkU3eBLUX%2BhiREgAOoykLqpjeJfAxSiRCZONt12DzT0KCJXFQqdnsCim2NLcdxgbumgq%2FDH%2FZ1j4DmJObMvjIfgEW3%2FdHLDCCzsL%2BfFUAHFWQVx1ZwA2PFjGzVM2wHmL%2BgMPYZQArCVxgB59vr3ZgDrGzDEpY%2FDBjqkAf%2BXLW0GGjxovDAz0i8GMlq9dRFY%2Ffq2msgF0YA8nI5%2FNx9sxJxpnzM%2F6ujoHz%2FCOGvfHMVOkFCDjBCIv0kkXvLbyuYeGxpznEC%2BlHVF9jnJvzpx2ZpWJ6hjH4HYGWC0DBrn8JDBjbvztmPFqcOh3pBy8tUOtob7QBwTWSc91isU%2FPb8dSpmD31PeYBud4Eq3%2FmVDAo4PqoUXGqlQmBD5qR1EWbY&X-Amz-Signature=fe99c06962f69254b21ea5bcb7ff452317e9b72ee79a3da9d54949001e2b88dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUAAZD4A%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUDj3xjk0EupVoOxhH%2BHV0bmHHjCf3wsecXk3uEtb81gIhAKRFwLf9Aa3%2BBv4QTNOqnQQGPH4l%2FEG8AfzZEbKTBSitKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ki2SFxClql4F2Vsq3AMNLLNJMngw%2FqhxVYqdLau6kqPH6WeLe92G3p%2BT2ZPxgyo5HCe3Yosan%2BRrGXB3x3qf4%2FnHzHXmyth0hzdKCGlWSbPuFav3DeDu0JZDPtI%2B18gbcqpaacBzGJOuaaOHMBp4xO1ovwK3gIkKb%2ByKQKlbGTl2%2B2ieEHN2N%2FOlV%2Feo%2BDJMixcZ8V93YLmMDgP0UVcHVhJs8EQyAhAeNAzFPPt%2FMRrFYlSpcMmHhzndLaIkrAII%2F4w3966We2%2F52xffNai3eW6UMpvWQBBEvw1h8W1tH80ANaoas%2B397VIz%2FQPUfEArWAvPZ%2BarNmmsiZ%2Bx6WE2BiomkK6X0QMfuICGfnoHD08bZOROWAlDwAwlZrfww306EfAMiW%2Fz4hrWY8tqkXD1W3AVwo%2BzylcngwoJCbILUMl244gRA6IFa%2Fxr63Js6dDIiBuy%2BzwziAGO2R2xXBBmpDBE8NNodYodwVyqMIYHN4V2GAYimsp8mrkU3eBLUX%2BhiREgAOoykLqpjeJfAxSiRCZONt12DzT0KCJXFQqdnsCim2NLcdxgbumgq%2FDH%2FZ1j4DmJObMvjIfgEW3%2FdHLDCCzsL%2BfFUAHFWQVx1ZwA2PFjGzVM2wHmL%2BgMPYZQArCVxgB59vr3ZgDrGzDEpY%2FDBjqkAf%2BXLW0GGjxovDAz0i8GMlq9dRFY%2Ffq2msgF0YA8nI5%2FNx9sxJxpnzM%2F6ujoHz%2FCOGvfHMVOkFCDjBCIv0kkXvLbyuYeGxpznEC%2BlHVF9jnJvzpx2ZpWJ6hjH4HYGWC0DBrn8JDBjbvztmPFqcOh3pBy8tUOtob7QBwTWSc91isU%2FPb8dSpmD31PeYBud4Eq3%2FmVDAo4PqoUXGqlQmBD5qR1EWbY&X-Amz-Signature=4473e534a78d8d3a546ef9aa1d282ff7722449e88c55d82006cdf66487587f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUAAZD4A%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUDj3xjk0EupVoOxhH%2BHV0bmHHjCf3wsecXk3uEtb81gIhAKRFwLf9Aa3%2BBv4QTNOqnQQGPH4l%2FEG8AfzZEbKTBSitKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ki2SFxClql4F2Vsq3AMNLLNJMngw%2FqhxVYqdLau6kqPH6WeLe92G3p%2BT2ZPxgyo5HCe3Yosan%2BRrGXB3x3qf4%2FnHzHXmyth0hzdKCGlWSbPuFav3DeDu0JZDPtI%2B18gbcqpaacBzGJOuaaOHMBp4xO1ovwK3gIkKb%2ByKQKlbGTl2%2B2ieEHN2N%2FOlV%2Feo%2BDJMixcZ8V93YLmMDgP0UVcHVhJs8EQyAhAeNAzFPPt%2FMRrFYlSpcMmHhzndLaIkrAII%2F4w3966We2%2F52xffNai3eW6UMpvWQBBEvw1h8W1tH80ANaoas%2B397VIz%2FQPUfEArWAvPZ%2BarNmmsiZ%2Bx6WE2BiomkK6X0QMfuICGfnoHD08bZOROWAlDwAwlZrfww306EfAMiW%2Fz4hrWY8tqkXD1W3AVwo%2BzylcngwoJCbILUMl244gRA6IFa%2Fxr63Js6dDIiBuy%2BzwziAGO2R2xXBBmpDBE8NNodYodwVyqMIYHN4V2GAYimsp8mrkU3eBLUX%2BhiREgAOoykLqpjeJfAxSiRCZONt12DzT0KCJXFQqdnsCim2NLcdxgbumgq%2FDH%2FZ1j4DmJObMvjIfgEW3%2FdHLDCCzsL%2BfFUAHFWQVx1ZwA2PFjGzVM2wHmL%2BgMPYZQArCVxgB59vr3ZgDrGzDEpY%2FDBjqkAf%2BXLW0GGjxovDAz0i8GMlq9dRFY%2Ffq2msgF0YA8nI5%2FNx9sxJxpnzM%2F6ujoHz%2FCOGvfHMVOkFCDjBCIv0kkXvLbyuYeGxpznEC%2BlHVF9jnJvzpx2ZpWJ6hjH4HYGWC0DBrn8JDBjbvztmPFqcOh3pBy8tUOtob7QBwTWSc91isU%2FPb8dSpmD31PeYBud4Eq3%2FmVDAo4PqoUXGqlQmBD5qR1EWbY&X-Amz-Signature=7632d8f5de67bcdbabfb8590aef6da93a587d327a280a6bcdc0418d0d661fa58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
