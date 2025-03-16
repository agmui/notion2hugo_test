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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3GBC3IH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUHyRxFcwyrkCU5numOx9Q2DxojQR0Us8oKuG7lD96hAiEAi76prm9hRn3S2oQeS6axkgLZ0ZiXiZlvTDKu7gP5yvgq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGD4iXxsgL%2FgEWW2fSrcA0bu3DyULOz9c841SpKkdCgW72E43YKzeoU%2BQ6vuVugXCNlGNPLGFAwO%2F4bkc75diNDfxfALVAOH%2BnxpA9ys%2FXXHrucwUgkySjznj7si2IfgL3b2gBSSX%2FzFpgz9OkormIlUgJOgt13V4kTFzfo6IkQzKoUCg4d7MVts03JItv6u9gme5ND5aOtHQExsaP8NsvumXTeBB9M6Xep0JV1ej0D2DnzhYE4i4VsrHRK1TwoUkvbsWNopP8O8WEO8lYJtHnZW3SB%2BLTWXk7BwpcXpbib4IYNtZEuzTZin1AZIbErC9L0uR8x5I5qhfrOvUbNVjFEvhBgrkO1V%2FzP272jepctQofsRIManXhhZUF75A%2Bsxso80q8rZgXI5RGB%2BU6kNO3wlCDV1qtH72Tey2GH0Oldgme761xhsbjUhJ9k0JAWkcRZEZh5qvUyvpl7iKN3sfZ2RiegVAruzjPsGLTowSrxQ0pjkNfQZgwsnJLxfI%2FgslhewgRA%2Ft89vIUYOFRFUtyxBSUFp3LXBeZ3UAV7ZN87fUO7%2B4HBhxzTosBRKdcVSeerhyCw43jzZvSOwQC9PM%2BhQX58JK%2BHxUYQiqdzmP2lJquljJjKe1Ux66oGGNVRtBEE9vw34ggb0OKELMJDZ2r4GOqUBA2njHg5Q1aOJvuInLCQAk%2FQKtY1AtE62nxYRymgKnJaPdl91RXeqK0NynQ1qjRbiXk4vIhvu9FBo8bnWDUlMbmRqLjol4Xw7%2Bxce0PrBTguDAoXf2MRaAvCTFmgItoUaaE4dZwHQoYU6D9vOpcJtDMTKzs7GVWNUTx%2B90f4hprbtGKfyFvKgaGmOuykxRg0sDjRfwsRg5TYua0xp2kMiaL1aL9ZU&X-Amz-Signature=777b8e6d96d95555bbd299fbda5e29de2b398699b2032689b3eac1e2e0bb9e40&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3GBC3IH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUHyRxFcwyrkCU5numOx9Q2DxojQR0Us8oKuG7lD96hAiEAi76prm9hRn3S2oQeS6axkgLZ0ZiXiZlvTDKu7gP5yvgq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGD4iXxsgL%2FgEWW2fSrcA0bu3DyULOz9c841SpKkdCgW72E43YKzeoU%2BQ6vuVugXCNlGNPLGFAwO%2F4bkc75diNDfxfALVAOH%2BnxpA9ys%2FXXHrucwUgkySjznj7si2IfgL3b2gBSSX%2FzFpgz9OkormIlUgJOgt13V4kTFzfo6IkQzKoUCg4d7MVts03JItv6u9gme5ND5aOtHQExsaP8NsvumXTeBB9M6Xep0JV1ej0D2DnzhYE4i4VsrHRK1TwoUkvbsWNopP8O8WEO8lYJtHnZW3SB%2BLTWXk7BwpcXpbib4IYNtZEuzTZin1AZIbErC9L0uR8x5I5qhfrOvUbNVjFEvhBgrkO1V%2FzP272jepctQofsRIManXhhZUF75A%2Bsxso80q8rZgXI5RGB%2BU6kNO3wlCDV1qtH72Tey2GH0Oldgme761xhsbjUhJ9k0JAWkcRZEZh5qvUyvpl7iKN3sfZ2RiegVAruzjPsGLTowSrxQ0pjkNfQZgwsnJLxfI%2FgslhewgRA%2Ft89vIUYOFRFUtyxBSUFp3LXBeZ3UAV7ZN87fUO7%2B4HBhxzTosBRKdcVSeerhyCw43jzZvSOwQC9PM%2BhQX58JK%2BHxUYQiqdzmP2lJquljJjKe1Ux66oGGNVRtBEE9vw34ggb0OKELMJDZ2r4GOqUBA2njHg5Q1aOJvuInLCQAk%2FQKtY1AtE62nxYRymgKnJaPdl91RXeqK0NynQ1qjRbiXk4vIhvu9FBo8bnWDUlMbmRqLjol4Xw7%2Bxce0PrBTguDAoXf2MRaAvCTFmgItoUaaE4dZwHQoYU6D9vOpcJtDMTKzs7GVWNUTx%2B90f4hprbtGKfyFvKgaGmOuykxRg0sDjRfwsRg5TYua0xp2kMiaL1aL9ZU&X-Amz-Signature=4c4e353aae8285ca28414d5a90c1f956d38190ff30e8c489ae9ab05d2c1a9983&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3GBC3IH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUHyRxFcwyrkCU5numOx9Q2DxojQR0Us8oKuG7lD96hAiEAi76prm9hRn3S2oQeS6axkgLZ0ZiXiZlvTDKu7gP5yvgq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGD4iXxsgL%2FgEWW2fSrcA0bu3DyULOz9c841SpKkdCgW72E43YKzeoU%2BQ6vuVugXCNlGNPLGFAwO%2F4bkc75diNDfxfALVAOH%2BnxpA9ys%2FXXHrucwUgkySjznj7si2IfgL3b2gBSSX%2FzFpgz9OkormIlUgJOgt13V4kTFzfo6IkQzKoUCg4d7MVts03JItv6u9gme5ND5aOtHQExsaP8NsvumXTeBB9M6Xep0JV1ej0D2DnzhYE4i4VsrHRK1TwoUkvbsWNopP8O8WEO8lYJtHnZW3SB%2BLTWXk7BwpcXpbib4IYNtZEuzTZin1AZIbErC9L0uR8x5I5qhfrOvUbNVjFEvhBgrkO1V%2FzP272jepctQofsRIManXhhZUF75A%2Bsxso80q8rZgXI5RGB%2BU6kNO3wlCDV1qtH72Tey2GH0Oldgme761xhsbjUhJ9k0JAWkcRZEZh5qvUyvpl7iKN3sfZ2RiegVAruzjPsGLTowSrxQ0pjkNfQZgwsnJLxfI%2FgslhewgRA%2Ft89vIUYOFRFUtyxBSUFp3LXBeZ3UAV7ZN87fUO7%2B4HBhxzTosBRKdcVSeerhyCw43jzZvSOwQC9PM%2BhQX58JK%2BHxUYQiqdzmP2lJquljJjKe1Ux66oGGNVRtBEE9vw34ggb0OKELMJDZ2r4GOqUBA2njHg5Q1aOJvuInLCQAk%2FQKtY1AtE62nxYRymgKnJaPdl91RXeqK0NynQ1qjRbiXk4vIhvu9FBo8bnWDUlMbmRqLjol4Xw7%2Bxce0PrBTguDAoXf2MRaAvCTFmgItoUaaE4dZwHQoYU6D9vOpcJtDMTKzs7GVWNUTx%2B90f4hprbtGKfyFvKgaGmOuykxRg0sDjRfwsRg5TYua0xp2kMiaL1aL9ZU&X-Amz-Signature=97987b227ee9b21858f7c374bef16a1ec70cd3a44d7e62a2498c26d120f272d9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3GBC3IH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUHyRxFcwyrkCU5numOx9Q2DxojQR0Us8oKuG7lD96hAiEAi76prm9hRn3S2oQeS6axkgLZ0ZiXiZlvTDKu7gP5yvgq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGD4iXxsgL%2FgEWW2fSrcA0bu3DyULOz9c841SpKkdCgW72E43YKzeoU%2BQ6vuVugXCNlGNPLGFAwO%2F4bkc75diNDfxfALVAOH%2BnxpA9ys%2FXXHrucwUgkySjznj7si2IfgL3b2gBSSX%2FzFpgz9OkormIlUgJOgt13V4kTFzfo6IkQzKoUCg4d7MVts03JItv6u9gme5ND5aOtHQExsaP8NsvumXTeBB9M6Xep0JV1ej0D2DnzhYE4i4VsrHRK1TwoUkvbsWNopP8O8WEO8lYJtHnZW3SB%2BLTWXk7BwpcXpbib4IYNtZEuzTZin1AZIbErC9L0uR8x5I5qhfrOvUbNVjFEvhBgrkO1V%2FzP272jepctQofsRIManXhhZUF75A%2Bsxso80q8rZgXI5RGB%2BU6kNO3wlCDV1qtH72Tey2GH0Oldgme761xhsbjUhJ9k0JAWkcRZEZh5qvUyvpl7iKN3sfZ2RiegVAruzjPsGLTowSrxQ0pjkNfQZgwsnJLxfI%2FgslhewgRA%2Ft89vIUYOFRFUtyxBSUFp3LXBeZ3UAV7ZN87fUO7%2B4HBhxzTosBRKdcVSeerhyCw43jzZvSOwQC9PM%2BhQX58JK%2BHxUYQiqdzmP2lJquljJjKe1Ux66oGGNVRtBEE9vw34ggb0OKELMJDZ2r4GOqUBA2njHg5Q1aOJvuInLCQAk%2FQKtY1AtE62nxYRymgKnJaPdl91RXeqK0NynQ1qjRbiXk4vIhvu9FBo8bnWDUlMbmRqLjol4Xw7%2Bxce0PrBTguDAoXf2MRaAvCTFmgItoUaaE4dZwHQoYU6D9vOpcJtDMTKzs7GVWNUTx%2B90f4hprbtGKfyFvKgaGmOuykxRg0sDjRfwsRg5TYua0xp2kMiaL1aL9ZU&X-Amz-Signature=9c638982bc8a84d33106fd9db27d832d667642f0eceb83866f17174924f0d93a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3GBC3IH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUHyRxFcwyrkCU5numOx9Q2DxojQR0Us8oKuG7lD96hAiEAi76prm9hRn3S2oQeS6axkgLZ0ZiXiZlvTDKu7gP5yvgq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGD4iXxsgL%2FgEWW2fSrcA0bu3DyULOz9c841SpKkdCgW72E43YKzeoU%2BQ6vuVugXCNlGNPLGFAwO%2F4bkc75diNDfxfALVAOH%2BnxpA9ys%2FXXHrucwUgkySjznj7si2IfgL3b2gBSSX%2FzFpgz9OkormIlUgJOgt13V4kTFzfo6IkQzKoUCg4d7MVts03JItv6u9gme5ND5aOtHQExsaP8NsvumXTeBB9M6Xep0JV1ej0D2DnzhYE4i4VsrHRK1TwoUkvbsWNopP8O8WEO8lYJtHnZW3SB%2BLTWXk7BwpcXpbib4IYNtZEuzTZin1AZIbErC9L0uR8x5I5qhfrOvUbNVjFEvhBgrkO1V%2FzP272jepctQofsRIManXhhZUF75A%2Bsxso80q8rZgXI5RGB%2BU6kNO3wlCDV1qtH72Tey2GH0Oldgme761xhsbjUhJ9k0JAWkcRZEZh5qvUyvpl7iKN3sfZ2RiegVAruzjPsGLTowSrxQ0pjkNfQZgwsnJLxfI%2FgslhewgRA%2Ft89vIUYOFRFUtyxBSUFp3LXBeZ3UAV7ZN87fUO7%2B4HBhxzTosBRKdcVSeerhyCw43jzZvSOwQC9PM%2BhQX58JK%2BHxUYQiqdzmP2lJquljJjKe1Ux66oGGNVRtBEE9vw34ggb0OKELMJDZ2r4GOqUBA2njHg5Q1aOJvuInLCQAk%2FQKtY1AtE62nxYRymgKnJaPdl91RXeqK0NynQ1qjRbiXk4vIhvu9FBo8bnWDUlMbmRqLjol4Xw7%2Bxce0PrBTguDAoXf2MRaAvCTFmgItoUaaE4dZwHQoYU6D9vOpcJtDMTKzs7GVWNUTx%2B90f4hprbtGKfyFvKgaGmOuykxRg0sDjRfwsRg5TYua0xp2kMiaL1aL9ZU&X-Amz-Signature=bcc65dc48dd5f793b156182f2e0fa2b41487d86e5302bedb14d773c6e360fce2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3GBC3IH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUHyRxFcwyrkCU5numOx9Q2DxojQR0Us8oKuG7lD96hAiEAi76prm9hRn3S2oQeS6axkgLZ0ZiXiZlvTDKu7gP5yvgq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGD4iXxsgL%2FgEWW2fSrcA0bu3DyULOz9c841SpKkdCgW72E43YKzeoU%2BQ6vuVugXCNlGNPLGFAwO%2F4bkc75diNDfxfALVAOH%2BnxpA9ys%2FXXHrucwUgkySjznj7si2IfgL3b2gBSSX%2FzFpgz9OkormIlUgJOgt13V4kTFzfo6IkQzKoUCg4d7MVts03JItv6u9gme5ND5aOtHQExsaP8NsvumXTeBB9M6Xep0JV1ej0D2DnzhYE4i4VsrHRK1TwoUkvbsWNopP8O8WEO8lYJtHnZW3SB%2BLTWXk7BwpcXpbib4IYNtZEuzTZin1AZIbErC9L0uR8x5I5qhfrOvUbNVjFEvhBgrkO1V%2FzP272jepctQofsRIManXhhZUF75A%2Bsxso80q8rZgXI5RGB%2BU6kNO3wlCDV1qtH72Tey2GH0Oldgme761xhsbjUhJ9k0JAWkcRZEZh5qvUyvpl7iKN3sfZ2RiegVAruzjPsGLTowSrxQ0pjkNfQZgwsnJLxfI%2FgslhewgRA%2Ft89vIUYOFRFUtyxBSUFp3LXBeZ3UAV7ZN87fUO7%2B4HBhxzTosBRKdcVSeerhyCw43jzZvSOwQC9PM%2BhQX58JK%2BHxUYQiqdzmP2lJquljJjKe1Ux66oGGNVRtBEE9vw34ggb0OKELMJDZ2r4GOqUBA2njHg5Q1aOJvuInLCQAk%2FQKtY1AtE62nxYRymgKnJaPdl91RXeqK0NynQ1qjRbiXk4vIhvu9FBo8bnWDUlMbmRqLjol4Xw7%2Bxce0PrBTguDAoXf2MRaAvCTFmgItoUaaE4dZwHQoYU6D9vOpcJtDMTKzs7GVWNUTx%2B90f4hprbtGKfyFvKgaGmOuykxRg0sDjRfwsRg5TYua0xp2kMiaL1aL9ZU&X-Amz-Signature=07142b35a8c3cbf84d1accf625d28f3f5aa29acc0bae809a7383b422bab87376&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3GBC3IH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUHyRxFcwyrkCU5numOx9Q2DxojQR0Us8oKuG7lD96hAiEAi76prm9hRn3S2oQeS6axkgLZ0ZiXiZlvTDKu7gP5yvgq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGD4iXxsgL%2FgEWW2fSrcA0bu3DyULOz9c841SpKkdCgW72E43YKzeoU%2BQ6vuVugXCNlGNPLGFAwO%2F4bkc75diNDfxfALVAOH%2BnxpA9ys%2FXXHrucwUgkySjznj7si2IfgL3b2gBSSX%2FzFpgz9OkormIlUgJOgt13V4kTFzfo6IkQzKoUCg4d7MVts03JItv6u9gme5ND5aOtHQExsaP8NsvumXTeBB9M6Xep0JV1ej0D2DnzhYE4i4VsrHRK1TwoUkvbsWNopP8O8WEO8lYJtHnZW3SB%2BLTWXk7BwpcXpbib4IYNtZEuzTZin1AZIbErC9L0uR8x5I5qhfrOvUbNVjFEvhBgrkO1V%2FzP272jepctQofsRIManXhhZUF75A%2Bsxso80q8rZgXI5RGB%2BU6kNO3wlCDV1qtH72Tey2GH0Oldgme761xhsbjUhJ9k0JAWkcRZEZh5qvUyvpl7iKN3sfZ2RiegVAruzjPsGLTowSrxQ0pjkNfQZgwsnJLxfI%2FgslhewgRA%2Ft89vIUYOFRFUtyxBSUFp3LXBeZ3UAV7ZN87fUO7%2B4HBhxzTosBRKdcVSeerhyCw43jzZvSOwQC9PM%2BhQX58JK%2BHxUYQiqdzmP2lJquljJjKe1Ux66oGGNVRtBEE9vw34ggb0OKELMJDZ2r4GOqUBA2njHg5Q1aOJvuInLCQAk%2FQKtY1AtE62nxYRymgKnJaPdl91RXeqK0NynQ1qjRbiXk4vIhvu9FBo8bnWDUlMbmRqLjol4Xw7%2Bxce0PrBTguDAoXf2MRaAvCTFmgItoUaaE4dZwHQoYU6D9vOpcJtDMTKzs7GVWNUTx%2B90f4hprbtGKfyFvKgaGmOuykxRg0sDjRfwsRg5TYua0xp2kMiaL1aL9ZU&X-Amz-Signature=3614998765106c45a8f3b9e8768657ade33691756a82696a39543afbe511d72c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
