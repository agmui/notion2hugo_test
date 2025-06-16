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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5NPURQG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC0PY5Yg5LRv0moPE0Dl6yo3YTwnlh1z3xnPLpL8YL%2B0QIgP4j9bQohEBpmePvrViq58jQO3YjGkTwAah%2BxJ4oAVx8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMwfHK7L17Wd%2F247tyrcA7hcuw6s9lOsHOllR%2Fj%2FdYRUw07lld%2B1FWtk0PXfa40KSIDAv6GVCL3GO9EuWDxo%2Bl3%2BQmgks4dWCbl3hsUhuCABQQ6F13C1SUZiHeZsZ5QCwAq6CIDcrGl9Xrj%2FXdOBoZ5SeKhEyQhk9dnACHGl5lRWfwq%2BQ%2FOk%2BkWrTm5hPE041ySKfArJcRo6av48MyeiDi7Uq7RUPiaODlK8cDT9WOmmTkdkkzMPnAfDVrpFE5O4l4YyYVlUiCesn2xBvm3Hsu2zHQ3LxeXKclVL%2FetESvgfdk2W4ZSII2nJ%2FwT0WOIHe6usi%2FpNv%2F7Cc79EC1E2b7QpxF6AZX5Xg7bHPteSdmYEcFxQnnsj%2BzJgTetn2mRbszvAqMTcSv0Sk8WWiy5smYmqd3fi8FaNnGY%2FOfInetI7zOGRz5NMKZSTapI%2FGAXBR46jFHQ5c3rE%2Bil%2FKHIrDJWWGAR2J%2FY56T6CX18b3bVKtkUQ2K8Xoel2Rj7jQvoTGl2mEv%2Bni4xmhfoQ7iNOozf%2BGbRwoJ1l%2BmYv3%2FkX0tD8%2BSkGmAq9kRVfgg83hv%2FiHGcWs0d4dOiTzcdsVCdNAw%2BzYH3HVmFd7r6bh4aNq%2FNW1Dr%2FVI%2FDn1cFs6eqh3elCTZCEK1S6Cx1fhN0MLj%2BvcIGOqUB4vP5B7egXZOdSB3yju%2BnbbMaQVNm43Hy3bykRugcuWd6oe9hWbsiFkbEdilCkwpBNFZuS%2F25itrz1NxeudBbPwOZeahTZJA4wExISQpRiiTCKCNasgKiI8SuIRnCyZ27pwS98OeqnF4akJBFRP7tkbAGgZVALMn8HHbvZfj1Kq8aUT1ihefaU6zNXOlYFMw4q7am7dzC3yXAIwgbbew0rdCv6HLl&X-Amz-Signature=26583c0bc9fb41e3d3d59768405d2fde8f7c2a45385e5cbcbff97f569b85a712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5NPURQG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC0PY5Yg5LRv0moPE0Dl6yo3YTwnlh1z3xnPLpL8YL%2B0QIgP4j9bQohEBpmePvrViq58jQO3YjGkTwAah%2BxJ4oAVx8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMwfHK7L17Wd%2F247tyrcA7hcuw6s9lOsHOllR%2Fj%2FdYRUw07lld%2B1FWtk0PXfa40KSIDAv6GVCL3GO9EuWDxo%2Bl3%2BQmgks4dWCbl3hsUhuCABQQ6F13C1SUZiHeZsZ5QCwAq6CIDcrGl9Xrj%2FXdOBoZ5SeKhEyQhk9dnACHGl5lRWfwq%2BQ%2FOk%2BkWrTm5hPE041ySKfArJcRo6av48MyeiDi7Uq7RUPiaODlK8cDT9WOmmTkdkkzMPnAfDVrpFE5O4l4YyYVlUiCesn2xBvm3Hsu2zHQ3LxeXKclVL%2FetESvgfdk2W4ZSII2nJ%2FwT0WOIHe6usi%2FpNv%2F7Cc79EC1E2b7QpxF6AZX5Xg7bHPteSdmYEcFxQnnsj%2BzJgTetn2mRbszvAqMTcSv0Sk8WWiy5smYmqd3fi8FaNnGY%2FOfInetI7zOGRz5NMKZSTapI%2FGAXBR46jFHQ5c3rE%2Bil%2FKHIrDJWWGAR2J%2FY56T6CX18b3bVKtkUQ2K8Xoel2Rj7jQvoTGl2mEv%2Bni4xmhfoQ7iNOozf%2BGbRwoJ1l%2BmYv3%2FkX0tD8%2BSkGmAq9kRVfgg83hv%2FiHGcWs0d4dOiTzcdsVCdNAw%2BzYH3HVmFd7r6bh4aNq%2FNW1Dr%2FVI%2FDn1cFs6eqh3elCTZCEK1S6Cx1fhN0MLj%2BvcIGOqUB4vP5B7egXZOdSB3yju%2BnbbMaQVNm43Hy3bykRugcuWd6oe9hWbsiFkbEdilCkwpBNFZuS%2F25itrz1NxeudBbPwOZeahTZJA4wExISQpRiiTCKCNasgKiI8SuIRnCyZ27pwS98OeqnF4akJBFRP7tkbAGgZVALMn8HHbvZfj1Kq8aUT1ihefaU6zNXOlYFMw4q7am7dzC3yXAIwgbbew0rdCv6HLl&X-Amz-Signature=212ce054b5be97c19b5264c2d11525e9a169946b77c624da4cc62b01f8d09c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5NPURQG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC0PY5Yg5LRv0moPE0Dl6yo3YTwnlh1z3xnPLpL8YL%2B0QIgP4j9bQohEBpmePvrViq58jQO3YjGkTwAah%2BxJ4oAVx8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMwfHK7L17Wd%2F247tyrcA7hcuw6s9lOsHOllR%2Fj%2FdYRUw07lld%2B1FWtk0PXfa40KSIDAv6GVCL3GO9EuWDxo%2Bl3%2BQmgks4dWCbl3hsUhuCABQQ6F13C1SUZiHeZsZ5QCwAq6CIDcrGl9Xrj%2FXdOBoZ5SeKhEyQhk9dnACHGl5lRWfwq%2BQ%2FOk%2BkWrTm5hPE041ySKfArJcRo6av48MyeiDi7Uq7RUPiaODlK8cDT9WOmmTkdkkzMPnAfDVrpFE5O4l4YyYVlUiCesn2xBvm3Hsu2zHQ3LxeXKclVL%2FetESvgfdk2W4ZSII2nJ%2FwT0WOIHe6usi%2FpNv%2F7Cc79EC1E2b7QpxF6AZX5Xg7bHPteSdmYEcFxQnnsj%2BzJgTetn2mRbszvAqMTcSv0Sk8WWiy5smYmqd3fi8FaNnGY%2FOfInetI7zOGRz5NMKZSTapI%2FGAXBR46jFHQ5c3rE%2Bil%2FKHIrDJWWGAR2J%2FY56T6CX18b3bVKtkUQ2K8Xoel2Rj7jQvoTGl2mEv%2Bni4xmhfoQ7iNOozf%2BGbRwoJ1l%2BmYv3%2FkX0tD8%2BSkGmAq9kRVfgg83hv%2FiHGcWs0d4dOiTzcdsVCdNAw%2BzYH3HVmFd7r6bh4aNq%2FNW1Dr%2FVI%2FDn1cFs6eqh3elCTZCEK1S6Cx1fhN0MLj%2BvcIGOqUB4vP5B7egXZOdSB3yju%2BnbbMaQVNm43Hy3bykRugcuWd6oe9hWbsiFkbEdilCkwpBNFZuS%2F25itrz1NxeudBbPwOZeahTZJA4wExISQpRiiTCKCNasgKiI8SuIRnCyZ27pwS98OeqnF4akJBFRP7tkbAGgZVALMn8HHbvZfj1Kq8aUT1ihefaU6zNXOlYFMw4q7am7dzC3yXAIwgbbew0rdCv6HLl&X-Amz-Signature=e4a5a3f73869abfd4ff50c9436e3356668f90be46720e5468fe28036758c369e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5NPURQG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC0PY5Yg5LRv0moPE0Dl6yo3YTwnlh1z3xnPLpL8YL%2B0QIgP4j9bQohEBpmePvrViq58jQO3YjGkTwAah%2BxJ4oAVx8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMwfHK7L17Wd%2F247tyrcA7hcuw6s9lOsHOllR%2Fj%2FdYRUw07lld%2B1FWtk0PXfa40KSIDAv6GVCL3GO9EuWDxo%2Bl3%2BQmgks4dWCbl3hsUhuCABQQ6F13C1SUZiHeZsZ5QCwAq6CIDcrGl9Xrj%2FXdOBoZ5SeKhEyQhk9dnACHGl5lRWfwq%2BQ%2FOk%2BkWrTm5hPE041ySKfArJcRo6av48MyeiDi7Uq7RUPiaODlK8cDT9WOmmTkdkkzMPnAfDVrpFE5O4l4YyYVlUiCesn2xBvm3Hsu2zHQ3LxeXKclVL%2FetESvgfdk2W4ZSII2nJ%2FwT0WOIHe6usi%2FpNv%2F7Cc79EC1E2b7QpxF6AZX5Xg7bHPteSdmYEcFxQnnsj%2BzJgTetn2mRbszvAqMTcSv0Sk8WWiy5smYmqd3fi8FaNnGY%2FOfInetI7zOGRz5NMKZSTapI%2FGAXBR46jFHQ5c3rE%2Bil%2FKHIrDJWWGAR2J%2FY56T6CX18b3bVKtkUQ2K8Xoel2Rj7jQvoTGl2mEv%2Bni4xmhfoQ7iNOozf%2BGbRwoJ1l%2BmYv3%2FkX0tD8%2BSkGmAq9kRVfgg83hv%2FiHGcWs0d4dOiTzcdsVCdNAw%2BzYH3HVmFd7r6bh4aNq%2FNW1Dr%2FVI%2FDn1cFs6eqh3elCTZCEK1S6Cx1fhN0MLj%2BvcIGOqUB4vP5B7egXZOdSB3yju%2BnbbMaQVNm43Hy3bykRugcuWd6oe9hWbsiFkbEdilCkwpBNFZuS%2F25itrz1NxeudBbPwOZeahTZJA4wExISQpRiiTCKCNasgKiI8SuIRnCyZ27pwS98OeqnF4akJBFRP7tkbAGgZVALMn8HHbvZfj1Kq8aUT1ihefaU6zNXOlYFMw4q7am7dzC3yXAIwgbbew0rdCv6HLl&X-Amz-Signature=7ba13594267bdb28f8fa44ff561bfb2c41bc0a0d822f9fe7ac825c52dd8ea992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5NPURQG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC0PY5Yg5LRv0moPE0Dl6yo3YTwnlh1z3xnPLpL8YL%2B0QIgP4j9bQohEBpmePvrViq58jQO3YjGkTwAah%2BxJ4oAVx8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMwfHK7L17Wd%2F247tyrcA7hcuw6s9lOsHOllR%2Fj%2FdYRUw07lld%2B1FWtk0PXfa40KSIDAv6GVCL3GO9EuWDxo%2Bl3%2BQmgks4dWCbl3hsUhuCABQQ6F13C1SUZiHeZsZ5QCwAq6CIDcrGl9Xrj%2FXdOBoZ5SeKhEyQhk9dnACHGl5lRWfwq%2BQ%2FOk%2BkWrTm5hPE041ySKfArJcRo6av48MyeiDi7Uq7RUPiaODlK8cDT9WOmmTkdkkzMPnAfDVrpFE5O4l4YyYVlUiCesn2xBvm3Hsu2zHQ3LxeXKclVL%2FetESvgfdk2W4ZSII2nJ%2FwT0WOIHe6usi%2FpNv%2F7Cc79EC1E2b7QpxF6AZX5Xg7bHPteSdmYEcFxQnnsj%2BzJgTetn2mRbszvAqMTcSv0Sk8WWiy5smYmqd3fi8FaNnGY%2FOfInetI7zOGRz5NMKZSTapI%2FGAXBR46jFHQ5c3rE%2Bil%2FKHIrDJWWGAR2J%2FY56T6CX18b3bVKtkUQ2K8Xoel2Rj7jQvoTGl2mEv%2Bni4xmhfoQ7iNOozf%2BGbRwoJ1l%2BmYv3%2FkX0tD8%2BSkGmAq9kRVfgg83hv%2FiHGcWs0d4dOiTzcdsVCdNAw%2BzYH3HVmFd7r6bh4aNq%2FNW1Dr%2FVI%2FDn1cFs6eqh3elCTZCEK1S6Cx1fhN0MLj%2BvcIGOqUB4vP5B7egXZOdSB3yju%2BnbbMaQVNm43Hy3bykRugcuWd6oe9hWbsiFkbEdilCkwpBNFZuS%2F25itrz1NxeudBbPwOZeahTZJA4wExISQpRiiTCKCNasgKiI8SuIRnCyZ27pwS98OeqnF4akJBFRP7tkbAGgZVALMn8HHbvZfj1Kq8aUT1ihefaU6zNXOlYFMw4q7am7dzC3yXAIwgbbew0rdCv6HLl&X-Amz-Signature=954eb43cf32f6832a25b1ccfcf49be922ab18801e07c8fb2aca5cae274d65455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5NPURQG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC0PY5Yg5LRv0moPE0Dl6yo3YTwnlh1z3xnPLpL8YL%2B0QIgP4j9bQohEBpmePvrViq58jQO3YjGkTwAah%2BxJ4oAVx8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMwfHK7L17Wd%2F247tyrcA7hcuw6s9lOsHOllR%2Fj%2FdYRUw07lld%2B1FWtk0PXfa40KSIDAv6GVCL3GO9EuWDxo%2Bl3%2BQmgks4dWCbl3hsUhuCABQQ6F13C1SUZiHeZsZ5QCwAq6CIDcrGl9Xrj%2FXdOBoZ5SeKhEyQhk9dnACHGl5lRWfwq%2BQ%2FOk%2BkWrTm5hPE041ySKfArJcRo6av48MyeiDi7Uq7RUPiaODlK8cDT9WOmmTkdkkzMPnAfDVrpFE5O4l4YyYVlUiCesn2xBvm3Hsu2zHQ3LxeXKclVL%2FetESvgfdk2W4ZSII2nJ%2FwT0WOIHe6usi%2FpNv%2F7Cc79EC1E2b7QpxF6AZX5Xg7bHPteSdmYEcFxQnnsj%2BzJgTetn2mRbszvAqMTcSv0Sk8WWiy5smYmqd3fi8FaNnGY%2FOfInetI7zOGRz5NMKZSTapI%2FGAXBR46jFHQ5c3rE%2Bil%2FKHIrDJWWGAR2J%2FY56T6CX18b3bVKtkUQ2K8Xoel2Rj7jQvoTGl2mEv%2Bni4xmhfoQ7iNOozf%2BGbRwoJ1l%2BmYv3%2FkX0tD8%2BSkGmAq9kRVfgg83hv%2FiHGcWs0d4dOiTzcdsVCdNAw%2BzYH3HVmFd7r6bh4aNq%2FNW1Dr%2FVI%2FDn1cFs6eqh3elCTZCEK1S6Cx1fhN0MLj%2BvcIGOqUB4vP5B7egXZOdSB3yju%2BnbbMaQVNm43Hy3bykRugcuWd6oe9hWbsiFkbEdilCkwpBNFZuS%2F25itrz1NxeudBbPwOZeahTZJA4wExISQpRiiTCKCNasgKiI8SuIRnCyZ27pwS98OeqnF4akJBFRP7tkbAGgZVALMn8HHbvZfj1Kq8aUT1ihefaU6zNXOlYFMw4q7am7dzC3yXAIwgbbew0rdCv6HLl&X-Amz-Signature=90629ab7c0ede47610ba73dad629bca445e769aa4ee42f56279440c6fbc99e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5NPURQG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC0PY5Yg5LRv0moPE0Dl6yo3YTwnlh1z3xnPLpL8YL%2B0QIgP4j9bQohEBpmePvrViq58jQO3YjGkTwAah%2BxJ4oAVx8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMwfHK7L17Wd%2F247tyrcA7hcuw6s9lOsHOllR%2Fj%2FdYRUw07lld%2B1FWtk0PXfa40KSIDAv6GVCL3GO9EuWDxo%2Bl3%2BQmgks4dWCbl3hsUhuCABQQ6F13C1SUZiHeZsZ5QCwAq6CIDcrGl9Xrj%2FXdOBoZ5SeKhEyQhk9dnACHGl5lRWfwq%2BQ%2FOk%2BkWrTm5hPE041ySKfArJcRo6av48MyeiDi7Uq7RUPiaODlK8cDT9WOmmTkdkkzMPnAfDVrpFE5O4l4YyYVlUiCesn2xBvm3Hsu2zHQ3LxeXKclVL%2FetESvgfdk2W4ZSII2nJ%2FwT0WOIHe6usi%2FpNv%2F7Cc79EC1E2b7QpxF6AZX5Xg7bHPteSdmYEcFxQnnsj%2BzJgTetn2mRbszvAqMTcSv0Sk8WWiy5smYmqd3fi8FaNnGY%2FOfInetI7zOGRz5NMKZSTapI%2FGAXBR46jFHQ5c3rE%2Bil%2FKHIrDJWWGAR2J%2FY56T6CX18b3bVKtkUQ2K8Xoel2Rj7jQvoTGl2mEv%2Bni4xmhfoQ7iNOozf%2BGbRwoJ1l%2BmYv3%2FkX0tD8%2BSkGmAq9kRVfgg83hv%2FiHGcWs0d4dOiTzcdsVCdNAw%2BzYH3HVmFd7r6bh4aNq%2FNW1Dr%2FVI%2FDn1cFs6eqh3elCTZCEK1S6Cx1fhN0MLj%2BvcIGOqUB4vP5B7egXZOdSB3yju%2BnbbMaQVNm43Hy3bykRugcuWd6oe9hWbsiFkbEdilCkwpBNFZuS%2F25itrz1NxeudBbPwOZeahTZJA4wExISQpRiiTCKCNasgKiI8SuIRnCyZ27pwS98OeqnF4akJBFRP7tkbAGgZVALMn8HHbvZfj1Kq8aUT1ihefaU6zNXOlYFMw4q7am7dzC3yXAIwgbbew0rdCv6HLl&X-Amz-Signature=f8c2795c3bd78b70ab87f708c0cd4a854fa1b432aac918a8f19f82939d8f3066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
