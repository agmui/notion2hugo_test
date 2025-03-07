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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSGHWGKP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaJ3yr%2B8pGkeWM0LcJvAcVMxGaZqUnkdpKzo73%2BFSrzAiAEqaH0CUZICvpn14ngtbE2tvqsnrqtqwjWWGt68VIqCir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMluFNsjG%2FA60LZPxcKtwDtD62x7C0wXERnsxssk0sbdzXDPHDSxh%2B3nVhFDXP9RnHvXT2NttZr6sjbTETUcYiucQKBl5KPrLzBXIA17MbvozVuAJvgAek7j1nPKcdktdgwlfPapcIoLdLDUTg1EOlO0GQhadJAtdtHRvwjkIKqkORmtOz8ye5BbR3GEnjG4RWIk3n3ptCu3amnNxafpLFiSDLt2hK9zNme2aA3SUMyYvnltbT4gVFLSNSnx3mDxXLY8pyGMxxycjQKKQMFkp1PvQwvlT9%2BpXbWcKvc2WNOy24D70%2FOmTCHpudHv1tVz4ng7I0mTmUSg1b%2B7GlwHNpDZQ2F9rC2Pkt%2BmtYkzWafY%2B2kKo0Xb4nU2v5%2Ft5ZQuw2256VVsdu1Z3JrA67QBIMWfvtCFnUtvFuLPl%2BS92GaIj1i2T0k8t4szl07WV%2FUALJHIEWIu7tAP6ny%2F%2BLhXf9IvgVXjdi6BeBHHNd%2FqZQ1inAP%2F245fuTXf1f%2FnoZA0eYDdaJUhv3IEkB1WPpdqXFRPuRuQ3FI9PUvR%2BmJAEEYYFQk5X4uAK9SZe9X22OjA2%2BzZf1G%2B%2Be7ChLC%2FW%2F0Gev1Rz3xLPuo8eQBus5OA%2BhQcLELxBX1gbFxuM4MsVG0%2FK8lXSiCLKg12HnQtgwusmovgY6pgG9ftPaxRHSRH%2FiewtavSVh82Avo5tZhB3slibGkqHO%2BGC5mzzB6IZqk89YVxgXffRQ0vFBKBJOVsIIHnMRK6tO42ro6gJP7pbe2eNIHac59fFYXMVJVG%2B9TQhSJUp56qrtX%2FAS6oEonh3o05aMJVmHuT5pJ8UpPwiJ4xlOBruSCRVl2Gmh22ldFMxblRLVi6ZCGc9Wn2iAuEY8d6bhYLNmfysfby1P&X-Amz-Signature=f2916352f3620969eed5f142f1fcc18e46dc219e1755f0993418847c1fe7e5c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSGHWGKP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaJ3yr%2B8pGkeWM0LcJvAcVMxGaZqUnkdpKzo73%2BFSrzAiAEqaH0CUZICvpn14ngtbE2tvqsnrqtqwjWWGt68VIqCir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMluFNsjG%2FA60LZPxcKtwDtD62x7C0wXERnsxssk0sbdzXDPHDSxh%2B3nVhFDXP9RnHvXT2NttZr6sjbTETUcYiucQKBl5KPrLzBXIA17MbvozVuAJvgAek7j1nPKcdktdgwlfPapcIoLdLDUTg1EOlO0GQhadJAtdtHRvwjkIKqkORmtOz8ye5BbR3GEnjG4RWIk3n3ptCu3amnNxafpLFiSDLt2hK9zNme2aA3SUMyYvnltbT4gVFLSNSnx3mDxXLY8pyGMxxycjQKKQMFkp1PvQwvlT9%2BpXbWcKvc2WNOy24D70%2FOmTCHpudHv1tVz4ng7I0mTmUSg1b%2B7GlwHNpDZQ2F9rC2Pkt%2BmtYkzWafY%2B2kKo0Xb4nU2v5%2Ft5ZQuw2256VVsdu1Z3JrA67QBIMWfvtCFnUtvFuLPl%2BS92GaIj1i2T0k8t4szl07WV%2FUALJHIEWIu7tAP6ny%2F%2BLhXf9IvgVXjdi6BeBHHNd%2FqZQ1inAP%2F245fuTXf1f%2FnoZA0eYDdaJUhv3IEkB1WPpdqXFRPuRuQ3FI9PUvR%2BmJAEEYYFQk5X4uAK9SZe9X22OjA2%2BzZf1G%2B%2Be7ChLC%2FW%2F0Gev1Rz3xLPuo8eQBus5OA%2BhQcLELxBX1gbFxuM4MsVG0%2FK8lXSiCLKg12HnQtgwusmovgY6pgG9ftPaxRHSRH%2FiewtavSVh82Avo5tZhB3slibGkqHO%2BGC5mzzB6IZqk89YVxgXffRQ0vFBKBJOVsIIHnMRK6tO42ro6gJP7pbe2eNIHac59fFYXMVJVG%2B9TQhSJUp56qrtX%2FAS6oEonh3o05aMJVmHuT5pJ8UpPwiJ4xlOBruSCRVl2Gmh22ldFMxblRLVi6ZCGc9Wn2iAuEY8d6bhYLNmfysfby1P&X-Amz-Signature=c0a613734e7ced60296aed850153d09ab0f86605de9f8095f08db6090d5dde19&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSGHWGKP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaJ3yr%2B8pGkeWM0LcJvAcVMxGaZqUnkdpKzo73%2BFSrzAiAEqaH0CUZICvpn14ngtbE2tvqsnrqtqwjWWGt68VIqCir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMluFNsjG%2FA60LZPxcKtwDtD62x7C0wXERnsxssk0sbdzXDPHDSxh%2B3nVhFDXP9RnHvXT2NttZr6sjbTETUcYiucQKBl5KPrLzBXIA17MbvozVuAJvgAek7j1nPKcdktdgwlfPapcIoLdLDUTg1EOlO0GQhadJAtdtHRvwjkIKqkORmtOz8ye5BbR3GEnjG4RWIk3n3ptCu3amnNxafpLFiSDLt2hK9zNme2aA3SUMyYvnltbT4gVFLSNSnx3mDxXLY8pyGMxxycjQKKQMFkp1PvQwvlT9%2BpXbWcKvc2WNOy24D70%2FOmTCHpudHv1tVz4ng7I0mTmUSg1b%2B7GlwHNpDZQ2F9rC2Pkt%2BmtYkzWafY%2B2kKo0Xb4nU2v5%2Ft5ZQuw2256VVsdu1Z3JrA67QBIMWfvtCFnUtvFuLPl%2BS92GaIj1i2T0k8t4szl07WV%2FUALJHIEWIu7tAP6ny%2F%2BLhXf9IvgVXjdi6BeBHHNd%2FqZQ1inAP%2F245fuTXf1f%2FnoZA0eYDdaJUhv3IEkB1WPpdqXFRPuRuQ3FI9PUvR%2BmJAEEYYFQk5X4uAK9SZe9X22OjA2%2BzZf1G%2B%2Be7ChLC%2FW%2F0Gev1Rz3xLPuo8eQBus5OA%2BhQcLELxBX1gbFxuM4MsVG0%2FK8lXSiCLKg12HnQtgwusmovgY6pgG9ftPaxRHSRH%2FiewtavSVh82Avo5tZhB3slibGkqHO%2BGC5mzzB6IZqk89YVxgXffRQ0vFBKBJOVsIIHnMRK6tO42ro6gJP7pbe2eNIHac59fFYXMVJVG%2B9TQhSJUp56qrtX%2FAS6oEonh3o05aMJVmHuT5pJ8UpPwiJ4xlOBruSCRVl2Gmh22ldFMxblRLVi6ZCGc9Wn2iAuEY8d6bhYLNmfysfby1P&X-Amz-Signature=9ec22f1860251c76b8e2e0adfe9700eeb22059b3fff2f935d7888446d8a6e06c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSGHWGKP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaJ3yr%2B8pGkeWM0LcJvAcVMxGaZqUnkdpKzo73%2BFSrzAiAEqaH0CUZICvpn14ngtbE2tvqsnrqtqwjWWGt68VIqCir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMluFNsjG%2FA60LZPxcKtwDtD62x7C0wXERnsxssk0sbdzXDPHDSxh%2B3nVhFDXP9RnHvXT2NttZr6sjbTETUcYiucQKBl5KPrLzBXIA17MbvozVuAJvgAek7j1nPKcdktdgwlfPapcIoLdLDUTg1EOlO0GQhadJAtdtHRvwjkIKqkORmtOz8ye5BbR3GEnjG4RWIk3n3ptCu3amnNxafpLFiSDLt2hK9zNme2aA3SUMyYvnltbT4gVFLSNSnx3mDxXLY8pyGMxxycjQKKQMFkp1PvQwvlT9%2BpXbWcKvc2WNOy24D70%2FOmTCHpudHv1tVz4ng7I0mTmUSg1b%2B7GlwHNpDZQ2F9rC2Pkt%2BmtYkzWafY%2B2kKo0Xb4nU2v5%2Ft5ZQuw2256VVsdu1Z3JrA67QBIMWfvtCFnUtvFuLPl%2BS92GaIj1i2T0k8t4szl07WV%2FUALJHIEWIu7tAP6ny%2F%2BLhXf9IvgVXjdi6BeBHHNd%2FqZQ1inAP%2F245fuTXf1f%2FnoZA0eYDdaJUhv3IEkB1WPpdqXFRPuRuQ3FI9PUvR%2BmJAEEYYFQk5X4uAK9SZe9X22OjA2%2BzZf1G%2B%2Be7ChLC%2FW%2F0Gev1Rz3xLPuo8eQBus5OA%2BhQcLELxBX1gbFxuM4MsVG0%2FK8lXSiCLKg12HnQtgwusmovgY6pgG9ftPaxRHSRH%2FiewtavSVh82Avo5tZhB3slibGkqHO%2BGC5mzzB6IZqk89YVxgXffRQ0vFBKBJOVsIIHnMRK6tO42ro6gJP7pbe2eNIHac59fFYXMVJVG%2B9TQhSJUp56qrtX%2FAS6oEonh3o05aMJVmHuT5pJ8UpPwiJ4xlOBruSCRVl2Gmh22ldFMxblRLVi6ZCGc9Wn2iAuEY8d6bhYLNmfysfby1P&X-Amz-Signature=83c3fc812893025d6cf2e5ab11fd309360b01ef8b1417918cf65b74a9669027a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSGHWGKP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaJ3yr%2B8pGkeWM0LcJvAcVMxGaZqUnkdpKzo73%2BFSrzAiAEqaH0CUZICvpn14ngtbE2tvqsnrqtqwjWWGt68VIqCir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMluFNsjG%2FA60LZPxcKtwDtD62x7C0wXERnsxssk0sbdzXDPHDSxh%2B3nVhFDXP9RnHvXT2NttZr6sjbTETUcYiucQKBl5KPrLzBXIA17MbvozVuAJvgAek7j1nPKcdktdgwlfPapcIoLdLDUTg1EOlO0GQhadJAtdtHRvwjkIKqkORmtOz8ye5BbR3GEnjG4RWIk3n3ptCu3amnNxafpLFiSDLt2hK9zNme2aA3SUMyYvnltbT4gVFLSNSnx3mDxXLY8pyGMxxycjQKKQMFkp1PvQwvlT9%2BpXbWcKvc2WNOy24D70%2FOmTCHpudHv1tVz4ng7I0mTmUSg1b%2B7GlwHNpDZQ2F9rC2Pkt%2BmtYkzWafY%2B2kKo0Xb4nU2v5%2Ft5ZQuw2256VVsdu1Z3JrA67QBIMWfvtCFnUtvFuLPl%2BS92GaIj1i2T0k8t4szl07WV%2FUALJHIEWIu7tAP6ny%2F%2BLhXf9IvgVXjdi6BeBHHNd%2FqZQ1inAP%2F245fuTXf1f%2FnoZA0eYDdaJUhv3IEkB1WPpdqXFRPuRuQ3FI9PUvR%2BmJAEEYYFQk5X4uAK9SZe9X22OjA2%2BzZf1G%2B%2Be7ChLC%2FW%2F0Gev1Rz3xLPuo8eQBus5OA%2BhQcLELxBX1gbFxuM4MsVG0%2FK8lXSiCLKg12HnQtgwusmovgY6pgG9ftPaxRHSRH%2FiewtavSVh82Avo5tZhB3slibGkqHO%2BGC5mzzB6IZqk89YVxgXffRQ0vFBKBJOVsIIHnMRK6tO42ro6gJP7pbe2eNIHac59fFYXMVJVG%2B9TQhSJUp56qrtX%2FAS6oEonh3o05aMJVmHuT5pJ8UpPwiJ4xlOBruSCRVl2Gmh22ldFMxblRLVi6ZCGc9Wn2iAuEY8d6bhYLNmfysfby1P&X-Amz-Signature=f6a11c206ff5e506d9da5dbae44ee8febf19262e59449de53aa553af340138e7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSGHWGKP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaJ3yr%2B8pGkeWM0LcJvAcVMxGaZqUnkdpKzo73%2BFSrzAiAEqaH0CUZICvpn14ngtbE2tvqsnrqtqwjWWGt68VIqCir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMluFNsjG%2FA60LZPxcKtwDtD62x7C0wXERnsxssk0sbdzXDPHDSxh%2B3nVhFDXP9RnHvXT2NttZr6sjbTETUcYiucQKBl5KPrLzBXIA17MbvozVuAJvgAek7j1nPKcdktdgwlfPapcIoLdLDUTg1EOlO0GQhadJAtdtHRvwjkIKqkORmtOz8ye5BbR3GEnjG4RWIk3n3ptCu3amnNxafpLFiSDLt2hK9zNme2aA3SUMyYvnltbT4gVFLSNSnx3mDxXLY8pyGMxxycjQKKQMFkp1PvQwvlT9%2BpXbWcKvc2WNOy24D70%2FOmTCHpudHv1tVz4ng7I0mTmUSg1b%2B7GlwHNpDZQ2F9rC2Pkt%2BmtYkzWafY%2B2kKo0Xb4nU2v5%2Ft5ZQuw2256VVsdu1Z3JrA67QBIMWfvtCFnUtvFuLPl%2BS92GaIj1i2T0k8t4szl07WV%2FUALJHIEWIu7tAP6ny%2F%2BLhXf9IvgVXjdi6BeBHHNd%2FqZQ1inAP%2F245fuTXf1f%2FnoZA0eYDdaJUhv3IEkB1WPpdqXFRPuRuQ3FI9PUvR%2BmJAEEYYFQk5X4uAK9SZe9X22OjA2%2BzZf1G%2B%2Be7ChLC%2FW%2F0Gev1Rz3xLPuo8eQBus5OA%2BhQcLELxBX1gbFxuM4MsVG0%2FK8lXSiCLKg12HnQtgwusmovgY6pgG9ftPaxRHSRH%2FiewtavSVh82Avo5tZhB3slibGkqHO%2BGC5mzzB6IZqk89YVxgXffRQ0vFBKBJOVsIIHnMRK6tO42ro6gJP7pbe2eNIHac59fFYXMVJVG%2B9TQhSJUp56qrtX%2FAS6oEonh3o05aMJVmHuT5pJ8UpPwiJ4xlOBruSCRVl2Gmh22ldFMxblRLVi6ZCGc9Wn2iAuEY8d6bhYLNmfysfby1P&X-Amz-Signature=99b4cfb5b975f0a643d8433993cc37dbad4a5c12dab904688f545500cae6ac28&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSGHWGKP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaJ3yr%2B8pGkeWM0LcJvAcVMxGaZqUnkdpKzo73%2BFSrzAiAEqaH0CUZICvpn14ngtbE2tvqsnrqtqwjWWGt68VIqCir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMluFNsjG%2FA60LZPxcKtwDtD62x7C0wXERnsxssk0sbdzXDPHDSxh%2B3nVhFDXP9RnHvXT2NttZr6sjbTETUcYiucQKBl5KPrLzBXIA17MbvozVuAJvgAek7j1nPKcdktdgwlfPapcIoLdLDUTg1EOlO0GQhadJAtdtHRvwjkIKqkORmtOz8ye5BbR3GEnjG4RWIk3n3ptCu3amnNxafpLFiSDLt2hK9zNme2aA3SUMyYvnltbT4gVFLSNSnx3mDxXLY8pyGMxxycjQKKQMFkp1PvQwvlT9%2BpXbWcKvc2WNOy24D70%2FOmTCHpudHv1tVz4ng7I0mTmUSg1b%2B7GlwHNpDZQ2F9rC2Pkt%2BmtYkzWafY%2B2kKo0Xb4nU2v5%2Ft5ZQuw2256VVsdu1Z3JrA67QBIMWfvtCFnUtvFuLPl%2BS92GaIj1i2T0k8t4szl07WV%2FUALJHIEWIu7tAP6ny%2F%2BLhXf9IvgVXjdi6BeBHHNd%2FqZQ1inAP%2F245fuTXf1f%2FnoZA0eYDdaJUhv3IEkB1WPpdqXFRPuRuQ3FI9PUvR%2BmJAEEYYFQk5X4uAK9SZe9X22OjA2%2BzZf1G%2B%2Be7ChLC%2FW%2F0Gev1Rz3xLPuo8eQBus5OA%2BhQcLELxBX1gbFxuM4MsVG0%2FK8lXSiCLKg12HnQtgwusmovgY6pgG9ftPaxRHSRH%2FiewtavSVh82Avo5tZhB3slibGkqHO%2BGC5mzzB6IZqk89YVxgXffRQ0vFBKBJOVsIIHnMRK6tO42ro6gJP7pbe2eNIHac59fFYXMVJVG%2B9TQhSJUp56qrtX%2FAS6oEonh3o05aMJVmHuT5pJ8UpPwiJ4xlOBruSCRVl2Gmh22ldFMxblRLVi6ZCGc9Wn2iAuEY8d6bhYLNmfysfby1P&X-Amz-Signature=b3052820c466d5d2d0dd3b9a26bdccfe942f24d6d93b7f95dcc89c5c6e1d4e76&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
