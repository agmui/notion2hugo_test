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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L6KL5WA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1cvTYKCS%2FjkVxehMgB3YAnrTyWGuIjlZLkchSZ30DxAiEAmKyscDtJf2oFcq49fR3uiOrcrSVqxO0zwgkN%2FJLxZvsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDAYm88%2FTND%2F9rmDdiCrcA%2F%2F22YOs%2BYp2HTboWqapd03yGRDAohd9o0DVepedPAAVV8xL1om7rngsLt8FVgW%2BWB2DZdiYSDKH45k7M6QBM1nnKIKdjZfGMoT1TtDFZV8hi%2B4AucxViHWIhwpp9RBcG7gwxyuLalMaHtSCEQtuV0HCXITfzsPctvxkPYulZLo677QRFkwj9CRtOO%2FNWp2P49ueXIe%2BWLUCaOQMVKqeqDQe3tPLPVTBgwdxYccODMVodd61tTNln6ovbEnHDfC%2BrAKqCztd8BeEfSIVdqC1OV14Pz8OC%2B%2B%2B0js%2FA5YIXa0GP7FR0e6w1DhuUHO2QVXkR43yFxXtHkBVsKRsVM20wV7yxRIfxNrv0V9ksQycKgBj%2FZJ3ylHv2oxqHOUwn7X1CpjIOawwdkdERsIY4SLHDQkvO9XO%2FJOLUqoWex3KKPKWHNz3YkbHhRcMf%2F3ZZU6MY84o4mhK5BPFJK5r%2F%2BwQAmDuPb0p8fv3gIY%2BEptaYYUdDEoo90d1rYv2MKq8o%2B8z6x%2BzXH1ZNyiUUZRvUkljVKjcWvsSyG%2ByL0Pftnya97ivlmF2wM0adKCN%2BOGan3N5OBg3CsO9QXJ0bZFkdRpztKdRxeOeBEsG7YoKvoWD%2BloGaQDu1Mowydom6pcqMLq5670GOqUBF%2FIj5xSvZkEUcr105lAf6MZEpJCbNHCdv935mxv7DhLCTn2Jc0kfA83rW8js0u0A8ZfrlIJBNmTNSyazZZE0XRESlmp04kz6AscJ5Xu19eOkkd%2BXNeoPW6W%2B%2FcAfTjSKhRQzhfToP26nGpVWLUiajwiKjGRb1Ya3BNjm41PWKvx4KgB8J8VAn7YoIwQVlloPl5cKqXC9LJq1IJk%2BmRwNl%2B3gE8Im&X-Amz-Signature=28e7a2d553d55cbf18e40df0ef7e8edf304390c89ce70a8e09f0fa535f78fe99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L6KL5WA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1cvTYKCS%2FjkVxehMgB3YAnrTyWGuIjlZLkchSZ30DxAiEAmKyscDtJf2oFcq49fR3uiOrcrSVqxO0zwgkN%2FJLxZvsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDAYm88%2FTND%2F9rmDdiCrcA%2F%2F22YOs%2BYp2HTboWqapd03yGRDAohd9o0DVepedPAAVV8xL1om7rngsLt8FVgW%2BWB2DZdiYSDKH45k7M6QBM1nnKIKdjZfGMoT1TtDFZV8hi%2B4AucxViHWIhwpp9RBcG7gwxyuLalMaHtSCEQtuV0HCXITfzsPctvxkPYulZLo677QRFkwj9CRtOO%2FNWp2P49ueXIe%2BWLUCaOQMVKqeqDQe3tPLPVTBgwdxYccODMVodd61tTNln6ovbEnHDfC%2BrAKqCztd8BeEfSIVdqC1OV14Pz8OC%2B%2B%2B0js%2FA5YIXa0GP7FR0e6w1DhuUHO2QVXkR43yFxXtHkBVsKRsVM20wV7yxRIfxNrv0V9ksQycKgBj%2FZJ3ylHv2oxqHOUwn7X1CpjIOawwdkdERsIY4SLHDQkvO9XO%2FJOLUqoWex3KKPKWHNz3YkbHhRcMf%2F3ZZU6MY84o4mhK5BPFJK5r%2F%2BwQAmDuPb0p8fv3gIY%2BEptaYYUdDEoo90d1rYv2MKq8o%2B8z6x%2BzXH1ZNyiUUZRvUkljVKjcWvsSyG%2ByL0Pftnya97ivlmF2wM0adKCN%2BOGan3N5OBg3CsO9QXJ0bZFkdRpztKdRxeOeBEsG7YoKvoWD%2BloGaQDu1Mowydom6pcqMLq5670GOqUBF%2FIj5xSvZkEUcr105lAf6MZEpJCbNHCdv935mxv7DhLCTn2Jc0kfA83rW8js0u0A8ZfrlIJBNmTNSyazZZE0XRESlmp04kz6AscJ5Xu19eOkkd%2BXNeoPW6W%2B%2FcAfTjSKhRQzhfToP26nGpVWLUiajwiKjGRb1Ya3BNjm41PWKvx4KgB8J8VAn7YoIwQVlloPl5cKqXC9LJq1IJk%2BmRwNl%2B3gE8Im&X-Amz-Signature=8f47e5d2a56becf40c04294a2266a9c63900038757e193edccb4e06a8413ee52&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L6KL5WA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1cvTYKCS%2FjkVxehMgB3YAnrTyWGuIjlZLkchSZ30DxAiEAmKyscDtJf2oFcq49fR3uiOrcrSVqxO0zwgkN%2FJLxZvsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDAYm88%2FTND%2F9rmDdiCrcA%2F%2F22YOs%2BYp2HTboWqapd03yGRDAohd9o0DVepedPAAVV8xL1om7rngsLt8FVgW%2BWB2DZdiYSDKH45k7M6QBM1nnKIKdjZfGMoT1TtDFZV8hi%2B4AucxViHWIhwpp9RBcG7gwxyuLalMaHtSCEQtuV0HCXITfzsPctvxkPYulZLo677QRFkwj9CRtOO%2FNWp2P49ueXIe%2BWLUCaOQMVKqeqDQe3tPLPVTBgwdxYccODMVodd61tTNln6ovbEnHDfC%2BrAKqCztd8BeEfSIVdqC1OV14Pz8OC%2B%2B%2B0js%2FA5YIXa0GP7FR0e6w1DhuUHO2QVXkR43yFxXtHkBVsKRsVM20wV7yxRIfxNrv0V9ksQycKgBj%2FZJ3ylHv2oxqHOUwn7X1CpjIOawwdkdERsIY4SLHDQkvO9XO%2FJOLUqoWex3KKPKWHNz3YkbHhRcMf%2F3ZZU6MY84o4mhK5BPFJK5r%2F%2BwQAmDuPb0p8fv3gIY%2BEptaYYUdDEoo90d1rYv2MKq8o%2B8z6x%2BzXH1ZNyiUUZRvUkljVKjcWvsSyG%2ByL0Pftnya97ivlmF2wM0adKCN%2BOGan3N5OBg3CsO9QXJ0bZFkdRpztKdRxeOeBEsG7YoKvoWD%2BloGaQDu1Mowydom6pcqMLq5670GOqUBF%2FIj5xSvZkEUcr105lAf6MZEpJCbNHCdv935mxv7DhLCTn2Jc0kfA83rW8js0u0A8ZfrlIJBNmTNSyazZZE0XRESlmp04kz6AscJ5Xu19eOkkd%2BXNeoPW6W%2B%2FcAfTjSKhRQzhfToP26nGpVWLUiajwiKjGRb1Ya3BNjm41PWKvx4KgB8J8VAn7YoIwQVlloPl5cKqXC9LJq1IJk%2BmRwNl%2B3gE8Im&X-Amz-Signature=f61ba23c6698c834277b43cb4f04ba9eef74a76906be78855e6ae5a8db466d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L6KL5WA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1cvTYKCS%2FjkVxehMgB3YAnrTyWGuIjlZLkchSZ30DxAiEAmKyscDtJf2oFcq49fR3uiOrcrSVqxO0zwgkN%2FJLxZvsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDAYm88%2FTND%2F9rmDdiCrcA%2F%2F22YOs%2BYp2HTboWqapd03yGRDAohd9o0DVepedPAAVV8xL1om7rngsLt8FVgW%2BWB2DZdiYSDKH45k7M6QBM1nnKIKdjZfGMoT1TtDFZV8hi%2B4AucxViHWIhwpp9RBcG7gwxyuLalMaHtSCEQtuV0HCXITfzsPctvxkPYulZLo677QRFkwj9CRtOO%2FNWp2P49ueXIe%2BWLUCaOQMVKqeqDQe3tPLPVTBgwdxYccODMVodd61tTNln6ovbEnHDfC%2BrAKqCztd8BeEfSIVdqC1OV14Pz8OC%2B%2B%2B0js%2FA5YIXa0GP7FR0e6w1DhuUHO2QVXkR43yFxXtHkBVsKRsVM20wV7yxRIfxNrv0V9ksQycKgBj%2FZJ3ylHv2oxqHOUwn7X1CpjIOawwdkdERsIY4SLHDQkvO9XO%2FJOLUqoWex3KKPKWHNz3YkbHhRcMf%2F3ZZU6MY84o4mhK5BPFJK5r%2F%2BwQAmDuPb0p8fv3gIY%2BEptaYYUdDEoo90d1rYv2MKq8o%2B8z6x%2BzXH1ZNyiUUZRvUkljVKjcWvsSyG%2ByL0Pftnya97ivlmF2wM0adKCN%2BOGan3N5OBg3CsO9QXJ0bZFkdRpztKdRxeOeBEsG7YoKvoWD%2BloGaQDu1Mowydom6pcqMLq5670GOqUBF%2FIj5xSvZkEUcr105lAf6MZEpJCbNHCdv935mxv7DhLCTn2Jc0kfA83rW8js0u0A8ZfrlIJBNmTNSyazZZE0XRESlmp04kz6AscJ5Xu19eOkkd%2BXNeoPW6W%2B%2FcAfTjSKhRQzhfToP26nGpVWLUiajwiKjGRb1Ya3BNjm41PWKvx4KgB8J8VAn7YoIwQVlloPl5cKqXC9LJq1IJk%2BmRwNl%2B3gE8Im&X-Amz-Signature=ad33929914f3d6c28cfbd38fa72a63a23588a101c5a6872372fe039f8c4d5f42&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L6KL5WA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1cvTYKCS%2FjkVxehMgB3YAnrTyWGuIjlZLkchSZ30DxAiEAmKyscDtJf2oFcq49fR3uiOrcrSVqxO0zwgkN%2FJLxZvsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDAYm88%2FTND%2F9rmDdiCrcA%2F%2F22YOs%2BYp2HTboWqapd03yGRDAohd9o0DVepedPAAVV8xL1om7rngsLt8FVgW%2BWB2DZdiYSDKH45k7M6QBM1nnKIKdjZfGMoT1TtDFZV8hi%2B4AucxViHWIhwpp9RBcG7gwxyuLalMaHtSCEQtuV0HCXITfzsPctvxkPYulZLo677QRFkwj9CRtOO%2FNWp2P49ueXIe%2BWLUCaOQMVKqeqDQe3tPLPVTBgwdxYccODMVodd61tTNln6ovbEnHDfC%2BrAKqCztd8BeEfSIVdqC1OV14Pz8OC%2B%2B%2B0js%2FA5YIXa0GP7FR0e6w1DhuUHO2QVXkR43yFxXtHkBVsKRsVM20wV7yxRIfxNrv0V9ksQycKgBj%2FZJ3ylHv2oxqHOUwn7X1CpjIOawwdkdERsIY4SLHDQkvO9XO%2FJOLUqoWex3KKPKWHNz3YkbHhRcMf%2F3ZZU6MY84o4mhK5BPFJK5r%2F%2BwQAmDuPb0p8fv3gIY%2BEptaYYUdDEoo90d1rYv2MKq8o%2B8z6x%2BzXH1ZNyiUUZRvUkljVKjcWvsSyG%2ByL0Pftnya97ivlmF2wM0adKCN%2BOGan3N5OBg3CsO9QXJ0bZFkdRpztKdRxeOeBEsG7YoKvoWD%2BloGaQDu1Mowydom6pcqMLq5670GOqUBF%2FIj5xSvZkEUcr105lAf6MZEpJCbNHCdv935mxv7DhLCTn2Jc0kfA83rW8js0u0A8ZfrlIJBNmTNSyazZZE0XRESlmp04kz6AscJ5Xu19eOkkd%2BXNeoPW6W%2B%2FcAfTjSKhRQzhfToP26nGpVWLUiajwiKjGRb1Ya3BNjm41PWKvx4KgB8J8VAn7YoIwQVlloPl5cKqXC9LJq1IJk%2BmRwNl%2B3gE8Im&X-Amz-Signature=1d187d881a70907c099eaba8376f4b944e96fbaf6ff9657bc41254609086d704&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L6KL5WA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1cvTYKCS%2FjkVxehMgB3YAnrTyWGuIjlZLkchSZ30DxAiEAmKyscDtJf2oFcq49fR3uiOrcrSVqxO0zwgkN%2FJLxZvsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDAYm88%2FTND%2F9rmDdiCrcA%2F%2F22YOs%2BYp2HTboWqapd03yGRDAohd9o0DVepedPAAVV8xL1om7rngsLt8FVgW%2BWB2DZdiYSDKH45k7M6QBM1nnKIKdjZfGMoT1TtDFZV8hi%2B4AucxViHWIhwpp9RBcG7gwxyuLalMaHtSCEQtuV0HCXITfzsPctvxkPYulZLo677QRFkwj9CRtOO%2FNWp2P49ueXIe%2BWLUCaOQMVKqeqDQe3tPLPVTBgwdxYccODMVodd61tTNln6ovbEnHDfC%2BrAKqCztd8BeEfSIVdqC1OV14Pz8OC%2B%2B%2B0js%2FA5YIXa0GP7FR0e6w1DhuUHO2QVXkR43yFxXtHkBVsKRsVM20wV7yxRIfxNrv0V9ksQycKgBj%2FZJ3ylHv2oxqHOUwn7X1CpjIOawwdkdERsIY4SLHDQkvO9XO%2FJOLUqoWex3KKPKWHNz3YkbHhRcMf%2F3ZZU6MY84o4mhK5BPFJK5r%2F%2BwQAmDuPb0p8fv3gIY%2BEptaYYUdDEoo90d1rYv2MKq8o%2B8z6x%2BzXH1ZNyiUUZRvUkljVKjcWvsSyG%2ByL0Pftnya97ivlmF2wM0adKCN%2BOGan3N5OBg3CsO9QXJ0bZFkdRpztKdRxeOeBEsG7YoKvoWD%2BloGaQDu1Mowydom6pcqMLq5670GOqUBF%2FIj5xSvZkEUcr105lAf6MZEpJCbNHCdv935mxv7DhLCTn2Jc0kfA83rW8js0u0A8ZfrlIJBNmTNSyazZZE0XRESlmp04kz6AscJ5Xu19eOkkd%2BXNeoPW6W%2B%2FcAfTjSKhRQzhfToP26nGpVWLUiajwiKjGRb1Ya3BNjm41PWKvx4KgB8J8VAn7YoIwQVlloPl5cKqXC9LJq1IJk%2BmRwNl%2B3gE8Im&X-Amz-Signature=6a6dbcd6877ca11329d8786c24d2da6194f33178e36bcbddc2c93fb05a974b76&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L6KL5WA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1cvTYKCS%2FjkVxehMgB3YAnrTyWGuIjlZLkchSZ30DxAiEAmKyscDtJf2oFcq49fR3uiOrcrSVqxO0zwgkN%2FJLxZvsq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDAYm88%2FTND%2F9rmDdiCrcA%2F%2F22YOs%2BYp2HTboWqapd03yGRDAohd9o0DVepedPAAVV8xL1om7rngsLt8FVgW%2BWB2DZdiYSDKH45k7M6QBM1nnKIKdjZfGMoT1TtDFZV8hi%2B4AucxViHWIhwpp9RBcG7gwxyuLalMaHtSCEQtuV0HCXITfzsPctvxkPYulZLo677QRFkwj9CRtOO%2FNWp2P49ueXIe%2BWLUCaOQMVKqeqDQe3tPLPVTBgwdxYccODMVodd61tTNln6ovbEnHDfC%2BrAKqCztd8BeEfSIVdqC1OV14Pz8OC%2B%2B%2B0js%2FA5YIXa0GP7FR0e6w1DhuUHO2QVXkR43yFxXtHkBVsKRsVM20wV7yxRIfxNrv0V9ksQycKgBj%2FZJ3ylHv2oxqHOUwn7X1CpjIOawwdkdERsIY4SLHDQkvO9XO%2FJOLUqoWex3KKPKWHNz3YkbHhRcMf%2F3ZZU6MY84o4mhK5BPFJK5r%2F%2BwQAmDuPb0p8fv3gIY%2BEptaYYUdDEoo90d1rYv2MKq8o%2B8z6x%2BzXH1ZNyiUUZRvUkljVKjcWvsSyG%2ByL0Pftnya97ivlmF2wM0adKCN%2BOGan3N5OBg3CsO9QXJ0bZFkdRpztKdRxeOeBEsG7YoKvoWD%2BloGaQDu1Mowydom6pcqMLq5670GOqUBF%2FIj5xSvZkEUcr105lAf6MZEpJCbNHCdv935mxv7DhLCTn2Jc0kfA83rW8js0u0A8ZfrlIJBNmTNSyazZZE0XRESlmp04kz6AscJ5Xu19eOkkd%2BXNeoPW6W%2B%2FcAfTjSKhRQzhfToP26nGpVWLUiajwiKjGRb1Ya3BNjm41PWKvx4KgB8J8VAn7YoIwQVlloPl5cKqXC9LJq1IJk%2BmRwNl%2B3gE8Im&X-Amz-Signature=d1363fc59a0adbcb0378b6e89638432ff4d52c553c51dec1fb185fb960f35468&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
