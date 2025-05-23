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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XI3VAX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCqIk6cFmKt5SAD5Y4uJun5Ir1OMA8GWLyRMzpT6G1NLAIhAOw6XqoD3lqTftGztP1V2HF3HlcmhHkVn08rULYD3rXRKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrMjS5Ap8kEXudRIQq3APhKXTOCfXBViv9E8hEJ1gdUH8Y%2FG%2FtTVFgQpXSCmXSzL77%2FDsfNEgtCxykDRzXqYOOtwMa1SxBozxlOimjCJ07Y2iKxKMFOFPQS7rTdiF3oq1UH83%2FIFdkndrBmb1DtKfWjbBPfsiwoHFhVdBf2zd3EdJozGmtkVlNYKZROKx2x3v%2FbLpRZcPp5Ggz0CkkhuzcVDhTWrxSn87OJIKJI09NDtekaxMlda2CF8ETP7nMCyD%2BlLuWMY2zj3nAU0fYLhK6SWFh3PBQvJIXv5ZeIXJgt%2BTMpMSfnCnroBkppazc2wcK6gv3fbbaTz1iLUvpDvuIRRrS6nPrn5G05EA6zr7ZTmaEnGdPVZLqQmfggUWJYKNZuVlvA%2FCdxlLoGhlHEG1cbVwj0OWbUkzE8mYmQ3%2FlRVLToNBTcalJBL3QqZGkvwEYuka%2FdUeHIVZ4MGX2V6CGB0jv6XGQJ8cpco6E6ZnSLaDjLbJaQWOtpKsXg6sKVNdV4DzgIAjxnyf3EKawMI05A03jdFZ6wkdbjRd8Y1IAXHgaZeUDXGPr0E%2BZ5opuVD0g1qpdkUYW3fAqwMg58neees%2FVMQRjrYjh5gEWm2%2FXp2GplVIsbVUcZTx9fLCUvSHKgLThZKUmRaFLyDDXjsLBBjqkAZSSWdSa5OGICj7zdg34d%2BsadmkC8CveD%2BkAY1VFOFxemjbMjQOHsNTiYJUS%2FScvtNNFkXAyS64%2Be9uc7iwdCu8B%2B%2BEfsJahOkzoidw%2FcBCIyIDLQmhylSEd4qt9JSL%2FsDp1zx9Af60A16kalL%2F%2BwByl%2BxbGtjnrgVZk1TeWNKmXDXfUFlDeSww3whiEXaA59Dgse%2B5En29m8mJ%2FUG6CRGeaoHUL&X-Amz-Signature=5f92420ff717c37d951a932ca37f02b77235b8aa3666e7f0bfc96f297a675fed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XI3VAX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCqIk6cFmKt5SAD5Y4uJun5Ir1OMA8GWLyRMzpT6G1NLAIhAOw6XqoD3lqTftGztP1V2HF3HlcmhHkVn08rULYD3rXRKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrMjS5Ap8kEXudRIQq3APhKXTOCfXBViv9E8hEJ1gdUH8Y%2FG%2FtTVFgQpXSCmXSzL77%2FDsfNEgtCxykDRzXqYOOtwMa1SxBozxlOimjCJ07Y2iKxKMFOFPQS7rTdiF3oq1UH83%2FIFdkndrBmb1DtKfWjbBPfsiwoHFhVdBf2zd3EdJozGmtkVlNYKZROKx2x3v%2FbLpRZcPp5Ggz0CkkhuzcVDhTWrxSn87OJIKJI09NDtekaxMlda2CF8ETP7nMCyD%2BlLuWMY2zj3nAU0fYLhK6SWFh3PBQvJIXv5ZeIXJgt%2BTMpMSfnCnroBkppazc2wcK6gv3fbbaTz1iLUvpDvuIRRrS6nPrn5G05EA6zr7ZTmaEnGdPVZLqQmfggUWJYKNZuVlvA%2FCdxlLoGhlHEG1cbVwj0OWbUkzE8mYmQ3%2FlRVLToNBTcalJBL3QqZGkvwEYuka%2FdUeHIVZ4MGX2V6CGB0jv6XGQJ8cpco6E6ZnSLaDjLbJaQWOtpKsXg6sKVNdV4DzgIAjxnyf3EKawMI05A03jdFZ6wkdbjRd8Y1IAXHgaZeUDXGPr0E%2BZ5opuVD0g1qpdkUYW3fAqwMg58neees%2FVMQRjrYjh5gEWm2%2FXp2GplVIsbVUcZTx9fLCUvSHKgLThZKUmRaFLyDDXjsLBBjqkAZSSWdSa5OGICj7zdg34d%2BsadmkC8CveD%2BkAY1VFOFxemjbMjQOHsNTiYJUS%2FScvtNNFkXAyS64%2Be9uc7iwdCu8B%2B%2BEfsJahOkzoidw%2FcBCIyIDLQmhylSEd4qt9JSL%2FsDp1zx9Af60A16kalL%2F%2BwByl%2BxbGtjnrgVZk1TeWNKmXDXfUFlDeSww3whiEXaA59Dgse%2B5En29m8mJ%2FUG6CRGeaoHUL&X-Amz-Signature=6f4255d71659074d645ab13f19158c53edd5a13bda2605b12b787c330b196595&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XI3VAX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCqIk6cFmKt5SAD5Y4uJun5Ir1OMA8GWLyRMzpT6G1NLAIhAOw6XqoD3lqTftGztP1V2HF3HlcmhHkVn08rULYD3rXRKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrMjS5Ap8kEXudRIQq3APhKXTOCfXBViv9E8hEJ1gdUH8Y%2FG%2FtTVFgQpXSCmXSzL77%2FDsfNEgtCxykDRzXqYOOtwMa1SxBozxlOimjCJ07Y2iKxKMFOFPQS7rTdiF3oq1UH83%2FIFdkndrBmb1DtKfWjbBPfsiwoHFhVdBf2zd3EdJozGmtkVlNYKZROKx2x3v%2FbLpRZcPp5Ggz0CkkhuzcVDhTWrxSn87OJIKJI09NDtekaxMlda2CF8ETP7nMCyD%2BlLuWMY2zj3nAU0fYLhK6SWFh3PBQvJIXv5ZeIXJgt%2BTMpMSfnCnroBkppazc2wcK6gv3fbbaTz1iLUvpDvuIRRrS6nPrn5G05EA6zr7ZTmaEnGdPVZLqQmfggUWJYKNZuVlvA%2FCdxlLoGhlHEG1cbVwj0OWbUkzE8mYmQ3%2FlRVLToNBTcalJBL3QqZGkvwEYuka%2FdUeHIVZ4MGX2V6CGB0jv6XGQJ8cpco6E6ZnSLaDjLbJaQWOtpKsXg6sKVNdV4DzgIAjxnyf3EKawMI05A03jdFZ6wkdbjRd8Y1IAXHgaZeUDXGPr0E%2BZ5opuVD0g1qpdkUYW3fAqwMg58neees%2FVMQRjrYjh5gEWm2%2FXp2GplVIsbVUcZTx9fLCUvSHKgLThZKUmRaFLyDDXjsLBBjqkAZSSWdSa5OGICj7zdg34d%2BsadmkC8CveD%2BkAY1VFOFxemjbMjQOHsNTiYJUS%2FScvtNNFkXAyS64%2Be9uc7iwdCu8B%2B%2BEfsJahOkzoidw%2FcBCIyIDLQmhylSEd4qt9JSL%2FsDp1zx9Af60A16kalL%2F%2BwByl%2BxbGtjnrgVZk1TeWNKmXDXfUFlDeSww3whiEXaA59Dgse%2B5En29m8mJ%2FUG6CRGeaoHUL&X-Amz-Signature=2959ae7b522b00c12c679c1749bf8c06c03571d30a84067081126732756a3e2f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XI3VAX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCqIk6cFmKt5SAD5Y4uJun5Ir1OMA8GWLyRMzpT6G1NLAIhAOw6XqoD3lqTftGztP1V2HF3HlcmhHkVn08rULYD3rXRKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrMjS5Ap8kEXudRIQq3APhKXTOCfXBViv9E8hEJ1gdUH8Y%2FG%2FtTVFgQpXSCmXSzL77%2FDsfNEgtCxykDRzXqYOOtwMa1SxBozxlOimjCJ07Y2iKxKMFOFPQS7rTdiF3oq1UH83%2FIFdkndrBmb1DtKfWjbBPfsiwoHFhVdBf2zd3EdJozGmtkVlNYKZROKx2x3v%2FbLpRZcPp5Ggz0CkkhuzcVDhTWrxSn87OJIKJI09NDtekaxMlda2CF8ETP7nMCyD%2BlLuWMY2zj3nAU0fYLhK6SWFh3PBQvJIXv5ZeIXJgt%2BTMpMSfnCnroBkppazc2wcK6gv3fbbaTz1iLUvpDvuIRRrS6nPrn5G05EA6zr7ZTmaEnGdPVZLqQmfggUWJYKNZuVlvA%2FCdxlLoGhlHEG1cbVwj0OWbUkzE8mYmQ3%2FlRVLToNBTcalJBL3QqZGkvwEYuka%2FdUeHIVZ4MGX2V6CGB0jv6XGQJ8cpco6E6ZnSLaDjLbJaQWOtpKsXg6sKVNdV4DzgIAjxnyf3EKawMI05A03jdFZ6wkdbjRd8Y1IAXHgaZeUDXGPr0E%2BZ5opuVD0g1qpdkUYW3fAqwMg58neees%2FVMQRjrYjh5gEWm2%2FXp2GplVIsbVUcZTx9fLCUvSHKgLThZKUmRaFLyDDXjsLBBjqkAZSSWdSa5OGICj7zdg34d%2BsadmkC8CveD%2BkAY1VFOFxemjbMjQOHsNTiYJUS%2FScvtNNFkXAyS64%2Be9uc7iwdCu8B%2B%2BEfsJahOkzoidw%2FcBCIyIDLQmhylSEd4qt9JSL%2FsDp1zx9Af60A16kalL%2F%2BwByl%2BxbGtjnrgVZk1TeWNKmXDXfUFlDeSww3whiEXaA59Dgse%2B5En29m8mJ%2FUG6CRGeaoHUL&X-Amz-Signature=9e741b62c7b696b32b0e399fc622705d86aaf9ac5c232d5453cfa869c23d23da&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XI3VAX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCqIk6cFmKt5SAD5Y4uJun5Ir1OMA8GWLyRMzpT6G1NLAIhAOw6XqoD3lqTftGztP1V2HF3HlcmhHkVn08rULYD3rXRKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrMjS5Ap8kEXudRIQq3APhKXTOCfXBViv9E8hEJ1gdUH8Y%2FG%2FtTVFgQpXSCmXSzL77%2FDsfNEgtCxykDRzXqYOOtwMa1SxBozxlOimjCJ07Y2iKxKMFOFPQS7rTdiF3oq1UH83%2FIFdkndrBmb1DtKfWjbBPfsiwoHFhVdBf2zd3EdJozGmtkVlNYKZROKx2x3v%2FbLpRZcPp5Ggz0CkkhuzcVDhTWrxSn87OJIKJI09NDtekaxMlda2CF8ETP7nMCyD%2BlLuWMY2zj3nAU0fYLhK6SWFh3PBQvJIXv5ZeIXJgt%2BTMpMSfnCnroBkppazc2wcK6gv3fbbaTz1iLUvpDvuIRRrS6nPrn5G05EA6zr7ZTmaEnGdPVZLqQmfggUWJYKNZuVlvA%2FCdxlLoGhlHEG1cbVwj0OWbUkzE8mYmQ3%2FlRVLToNBTcalJBL3QqZGkvwEYuka%2FdUeHIVZ4MGX2V6CGB0jv6XGQJ8cpco6E6ZnSLaDjLbJaQWOtpKsXg6sKVNdV4DzgIAjxnyf3EKawMI05A03jdFZ6wkdbjRd8Y1IAXHgaZeUDXGPr0E%2BZ5opuVD0g1qpdkUYW3fAqwMg58neees%2FVMQRjrYjh5gEWm2%2FXp2GplVIsbVUcZTx9fLCUvSHKgLThZKUmRaFLyDDXjsLBBjqkAZSSWdSa5OGICj7zdg34d%2BsadmkC8CveD%2BkAY1VFOFxemjbMjQOHsNTiYJUS%2FScvtNNFkXAyS64%2Be9uc7iwdCu8B%2B%2BEfsJahOkzoidw%2FcBCIyIDLQmhylSEd4qt9JSL%2FsDp1zx9Af60A16kalL%2F%2BwByl%2BxbGtjnrgVZk1TeWNKmXDXfUFlDeSww3whiEXaA59Dgse%2B5En29m8mJ%2FUG6CRGeaoHUL&X-Amz-Signature=22cc6acae5e83afcfd57b1e3570570b5d99821edff353b016f539e1f6c927c6b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XI3VAX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCqIk6cFmKt5SAD5Y4uJun5Ir1OMA8GWLyRMzpT6G1NLAIhAOw6XqoD3lqTftGztP1V2HF3HlcmhHkVn08rULYD3rXRKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrMjS5Ap8kEXudRIQq3APhKXTOCfXBViv9E8hEJ1gdUH8Y%2FG%2FtTVFgQpXSCmXSzL77%2FDsfNEgtCxykDRzXqYOOtwMa1SxBozxlOimjCJ07Y2iKxKMFOFPQS7rTdiF3oq1UH83%2FIFdkndrBmb1DtKfWjbBPfsiwoHFhVdBf2zd3EdJozGmtkVlNYKZROKx2x3v%2FbLpRZcPp5Ggz0CkkhuzcVDhTWrxSn87OJIKJI09NDtekaxMlda2CF8ETP7nMCyD%2BlLuWMY2zj3nAU0fYLhK6SWFh3PBQvJIXv5ZeIXJgt%2BTMpMSfnCnroBkppazc2wcK6gv3fbbaTz1iLUvpDvuIRRrS6nPrn5G05EA6zr7ZTmaEnGdPVZLqQmfggUWJYKNZuVlvA%2FCdxlLoGhlHEG1cbVwj0OWbUkzE8mYmQ3%2FlRVLToNBTcalJBL3QqZGkvwEYuka%2FdUeHIVZ4MGX2V6CGB0jv6XGQJ8cpco6E6ZnSLaDjLbJaQWOtpKsXg6sKVNdV4DzgIAjxnyf3EKawMI05A03jdFZ6wkdbjRd8Y1IAXHgaZeUDXGPr0E%2BZ5opuVD0g1qpdkUYW3fAqwMg58neees%2FVMQRjrYjh5gEWm2%2FXp2GplVIsbVUcZTx9fLCUvSHKgLThZKUmRaFLyDDXjsLBBjqkAZSSWdSa5OGICj7zdg34d%2BsadmkC8CveD%2BkAY1VFOFxemjbMjQOHsNTiYJUS%2FScvtNNFkXAyS64%2Be9uc7iwdCu8B%2B%2BEfsJahOkzoidw%2FcBCIyIDLQmhylSEd4qt9JSL%2FsDp1zx9Af60A16kalL%2F%2BwByl%2BxbGtjnrgVZk1TeWNKmXDXfUFlDeSww3whiEXaA59Dgse%2B5En29m8mJ%2FUG6CRGeaoHUL&X-Amz-Signature=407da28d22231231b6e40bc01af9b4caa6719247f942e0b4faf99eca706d9cf4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XI3VAX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCqIk6cFmKt5SAD5Y4uJun5Ir1OMA8GWLyRMzpT6G1NLAIhAOw6XqoD3lqTftGztP1V2HF3HlcmhHkVn08rULYD3rXRKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrMjS5Ap8kEXudRIQq3APhKXTOCfXBViv9E8hEJ1gdUH8Y%2FG%2FtTVFgQpXSCmXSzL77%2FDsfNEgtCxykDRzXqYOOtwMa1SxBozxlOimjCJ07Y2iKxKMFOFPQS7rTdiF3oq1UH83%2FIFdkndrBmb1DtKfWjbBPfsiwoHFhVdBf2zd3EdJozGmtkVlNYKZROKx2x3v%2FbLpRZcPp5Ggz0CkkhuzcVDhTWrxSn87OJIKJI09NDtekaxMlda2CF8ETP7nMCyD%2BlLuWMY2zj3nAU0fYLhK6SWFh3PBQvJIXv5ZeIXJgt%2BTMpMSfnCnroBkppazc2wcK6gv3fbbaTz1iLUvpDvuIRRrS6nPrn5G05EA6zr7ZTmaEnGdPVZLqQmfggUWJYKNZuVlvA%2FCdxlLoGhlHEG1cbVwj0OWbUkzE8mYmQ3%2FlRVLToNBTcalJBL3QqZGkvwEYuka%2FdUeHIVZ4MGX2V6CGB0jv6XGQJ8cpco6E6ZnSLaDjLbJaQWOtpKsXg6sKVNdV4DzgIAjxnyf3EKawMI05A03jdFZ6wkdbjRd8Y1IAXHgaZeUDXGPr0E%2BZ5opuVD0g1qpdkUYW3fAqwMg58neees%2FVMQRjrYjh5gEWm2%2FXp2GplVIsbVUcZTx9fLCUvSHKgLThZKUmRaFLyDDXjsLBBjqkAZSSWdSa5OGICj7zdg34d%2BsadmkC8CveD%2BkAY1VFOFxemjbMjQOHsNTiYJUS%2FScvtNNFkXAyS64%2Be9uc7iwdCu8B%2B%2BEfsJahOkzoidw%2FcBCIyIDLQmhylSEd4qt9JSL%2FsDp1zx9Af60A16kalL%2F%2BwByl%2BxbGtjnrgVZk1TeWNKmXDXfUFlDeSww3whiEXaA59Dgse%2B5En29m8mJ%2FUG6CRGeaoHUL&X-Amz-Signature=d42487bc8f22bbcec3129bc599534f949706ff49b13b4cc50bcb32abea97be5c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
