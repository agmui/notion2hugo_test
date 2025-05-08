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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCYNURVP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDifhA7eMQRKYYf5Mu5cdDcCOmuo%2FJqrB4PTCCUHeFBpgIgc1XGWs0C%2Bx6Di8gONWFzI%2FeiCzLG%2FHmNDtXG6E0yJcMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN29G1tZzetuJcdjSSrcA1TPS2plJyxJXw4H%2FZ%2BaRTD1gbbKChNpZzSy1uZPg3vxfxlyO0%2BP%2FHsyyNieIcPOlnL%2FjJzvhVLwn1DrAIZb%2FrjxIrorJ2HloQfCDuBSj1T2bcojJp156Jc%2BOgjfIs75FFx4Je4ek0nm1%2BnDWiy9%2FPwvUMWydwCAQugSHg7MOPm4QqVUJgnvcHl%2BbcoSPRK%2BTy1qm%2FkHG4yXH1JgfBYeOKnzb2EKxPkLuXjqnVQqIessylqxCw1q4G%2BYx%2FzjQGe5LIR7SBh33vu49L6Ja3DCISR8XXskaAhF98awrn4M8u9emvKTckkNOnculqShxYLLIMjJPywoJlxeXpN8rvQ6lU%2BaxAxyunIyKvFOeZ6PyRcM2T6TgHhLUM4k%2FwMNM5Ed%2Fqa2qB%2FdNLF%2FIu9dhkvnijV1C0yEzRwx0DBsw7%2BNnfP2pEGMd%2BoDNz0fNFr2jJcRDYp7LwD%2FcFRBNEtHc0bGI8GdeVUKveXDQ65FSeWOo2P0hqTRi4CV7X9%2BgtOqWleMiU23cpjI3s97JJOwc21bDufHRfwDQFSUXEuZR9JdkIz7%2Flmnjm8JkVEnlG%2FHKK3VIRHS6CsMIyae7yEB7JBLwi483QkQADYCpFD1Ny%2Br5DE%2FohP9C60QwsiqfsbqMJCB88AGOqUBdq56M%2Fdegbk1BMf5NlKlKC6kiiQPHdSgXB3iWl48y47Hd7lMVi%2BmzKi6M0%2Fy334gmlyEjBFhiynKv5aDVoHH%2FIkmmf3wzbJcvBoZdAhgMPy8hBhTGv6iJb2pHwRFMolQByjnRHGyoqvB8rL%2BosTIyot1hdsAUVL4aIBFzDAc2kaMziIl6kIvKM7VGVDDvQn7xfLCK6nvp94H6hHFRKqYg2lBqX%2BT&X-Amz-Signature=5724ecf79a98188138207114c25d19ed7986ea46cfb0039296716bb8c3cbb039&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCYNURVP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDifhA7eMQRKYYf5Mu5cdDcCOmuo%2FJqrB4PTCCUHeFBpgIgc1XGWs0C%2Bx6Di8gONWFzI%2FeiCzLG%2FHmNDtXG6E0yJcMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN29G1tZzetuJcdjSSrcA1TPS2plJyxJXw4H%2FZ%2BaRTD1gbbKChNpZzSy1uZPg3vxfxlyO0%2BP%2FHsyyNieIcPOlnL%2FjJzvhVLwn1DrAIZb%2FrjxIrorJ2HloQfCDuBSj1T2bcojJp156Jc%2BOgjfIs75FFx4Je4ek0nm1%2BnDWiy9%2FPwvUMWydwCAQugSHg7MOPm4QqVUJgnvcHl%2BbcoSPRK%2BTy1qm%2FkHG4yXH1JgfBYeOKnzb2EKxPkLuXjqnVQqIessylqxCw1q4G%2BYx%2FzjQGe5LIR7SBh33vu49L6Ja3DCISR8XXskaAhF98awrn4M8u9emvKTckkNOnculqShxYLLIMjJPywoJlxeXpN8rvQ6lU%2BaxAxyunIyKvFOeZ6PyRcM2T6TgHhLUM4k%2FwMNM5Ed%2Fqa2qB%2FdNLF%2FIu9dhkvnijV1C0yEzRwx0DBsw7%2BNnfP2pEGMd%2BoDNz0fNFr2jJcRDYp7LwD%2FcFRBNEtHc0bGI8GdeVUKveXDQ65FSeWOo2P0hqTRi4CV7X9%2BgtOqWleMiU23cpjI3s97JJOwc21bDufHRfwDQFSUXEuZR9JdkIz7%2Flmnjm8JkVEnlG%2FHKK3VIRHS6CsMIyae7yEB7JBLwi483QkQADYCpFD1Ny%2Br5DE%2FohP9C60QwsiqfsbqMJCB88AGOqUBdq56M%2Fdegbk1BMf5NlKlKC6kiiQPHdSgXB3iWl48y47Hd7lMVi%2BmzKi6M0%2Fy334gmlyEjBFhiynKv5aDVoHH%2FIkmmf3wzbJcvBoZdAhgMPy8hBhTGv6iJb2pHwRFMolQByjnRHGyoqvB8rL%2BosTIyot1hdsAUVL4aIBFzDAc2kaMziIl6kIvKM7VGVDDvQn7xfLCK6nvp94H6hHFRKqYg2lBqX%2BT&X-Amz-Signature=106acfff01ec5e5bea5eca55009772c558bd2cf866ab0fd163daa806a3d94dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCYNURVP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDifhA7eMQRKYYf5Mu5cdDcCOmuo%2FJqrB4PTCCUHeFBpgIgc1XGWs0C%2Bx6Di8gONWFzI%2FeiCzLG%2FHmNDtXG6E0yJcMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN29G1tZzetuJcdjSSrcA1TPS2plJyxJXw4H%2FZ%2BaRTD1gbbKChNpZzSy1uZPg3vxfxlyO0%2BP%2FHsyyNieIcPOlnL%2FjJzvhVLwn1DrAIZb%2FrjxIrorJ2HloQfCDuBSj1T2bcojJp156Jc%2BOgjfIs75FFx4Je4ek0nm1%2BnDWiy9%2FPwvUMWydwCAQugSHg7MOPm4QqVUJgnvcHl%2BbcoSPRK%2BTy1qm%2FkHG4yXH1JgfBYeOKnzb2EKxPkLuXjqnVQqIessylqxCw1q4G%2BYx%2FzjQGe5LIR7SBh33vu49L6Ja3DCISR8XXskaAhF98awrn4M8u9emvKTckkNOnculqShxYLLIMjJPywoJlxeXpN8rvQ6lU%2BaxAxyunIyKvFOeZ6PyRcM2T6TgHhLUM4k%2FwMNM5Ed%2Fqa2qB%2FdNLF%2FIu9dhkvnijV1C0yEzRwx0DBsw7%2BNnfP2pEGMd%2BoDNz0fNFr2jJcRDYp7LwD%2FcFRBNEtHc0bGI8GdeVUKveXDQ65FSeWOo2P0hqTRi4CV7X9%2BgtOqWleMiU23cpjI3s97JJOwc21bDufHRfwDQFSUXEuZR9JdkIz7%2Flmnjm8JkVEnlG%2FHKK3VIRHS6CsMIyae7yEB7JBLwi483QkQADYCpFD1Ny%2Br5DE%2FohP9C60QwsiqfsbqMJCB88AGOqUBdq56M%2Fdegbk1BMf5NlKlKC6kiiQPHdSgXB3iWl48y47Hd7lMVi%2BmzKi6M0%2Fy334gmlyEjBFhiynKv5aDVoHH%2FIkmmf3wzbJcvBoZdAhgMPy8hBhTGv6iJb2pHwRFMolQByjnRHGyoqvB8rL%2BosTIyot1hdsAUVL4aIBFzDAc2kaMziIl6kIvKM7VGVDDvQn7xfLCK6nvp94H6hHFRKqYg2lBqX%2BT&X-Amz-Signature=4c109311f6738c2bc17dbd8c7524e50ab88640116507471f53a3c6cb09fed970&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCYNURVP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDifhA7eMQRKYYf5Mu5cdDcCOmuo%2FJqrB4PTCCUHeFBpgIgc1XGWs0C%2Bx6Di8gONWFzI%2FeiCzLG%2FHmNDtXG6E0yJcMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN29G1tZzetuJcdjSSrcA1TPS2plJyxJXw4H%2FZ%2BaRTD1gbbKChNpZzSy1uZPg3vxfxlyO0%2BP%2FHsyyNieIcPOlnL%2FjJzvhVLwn1DrAIZb%2FrjxIrorJ2HloQfCDuBSj1T2bcojJp156Jc%2BOgjfIs75FFx4Je4ek0nm1%2BnDWiy9%2FPwvUMWydwCAQugSHg7MOPm4QqVUJgnvcHl%2BbcoSPRK%2BTy1qm%2FkHG4yXH1JgfBYeOKnzb2EKxPkLuXjqnVQqIessylqxCw1q4G%2BYx%2FzjQGe5LIR7SBh33vu49L6Ja3DCISR8XXskaAhF98awrn4M8u9emvKTckkNOnculqShxYLLIMjJPywoJlxeXpN8rvQ6lU%2BaxAxyunIyKvFOeZ6PyRcM2T6TgHhLUM4k%2FwMNM5Ed%2Fqa2qB%2FdNLF%2FIu9dhkvnijV1C0yEzRwx0DBsw7%2BNnfP2pEGMd%2BoDNz0fNFr2jJcRDYp7LwD%2FcFRBNEtHc0bGI8GdeVUKveXDQ65FSeWOo2P0hqTRi4CV7X9%2BgtOqWleMiU23cpjI3s97JJOwc21bDufHRfwDQFSUXEuZR9JdkIz7%2Flmnjm8JkVEnlG%2FHKK3VIRHS6CsMIyae7yEB7JBLwi483QkQADYCpFD1Ny%2Br5DE%2FohP9C60QwsiqfsbqMJCB88AGOqUBdq56M%2Fdegbk1BMf5NlKlKC6kiiQPHdSgXB3iWl48y47Hd7lMVi%2BmzKi6M0%2Fy334gmlyEjBFhiynKv5aDVoHH%2FIkmmf3wzbJcvBoZdAhgMPy8hBhTGv6iJb2pHwRFMolQByjnRHGyoqvB8rL%2BosTIyot1hdsAUVL4aIBFzDAc2kaMziIl6kIvKM7VGVDDvQn7xfLCK6nvp94H6hHFRKqYg2lBqX%2BT&X-Amz-Signature=bd613f9514e565180619e47c4f58f97e14afa995774bfec8193ef8b9486770c8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCYNURVP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDifhA7eMQRKYYf5Mu5cdDcCOmuo%2FJqrB4PTCCUHeFBpgIgc1XGWs0C%2Bx6Di8gONWFzI%2FeiCzLG%2FHmNDtXG6E0yJcMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN29G1tZzetuJcdjSSrcA1TPS2plJyxJXw4H%2FZ%2BaRTD1gbbKChNpZzSy1uZPg3vxfxlyO0%2BP%2FHsyyNieIcPOlnL%2FjJzvhVLwn1DrAIZb%2FrjxIrorJ2HloQfCDuBSj1T2bcojJp156Jc%2BOgjfIs75FFx4Je4ek0nm1%2BnDWiy9%2FPwvUMWydwCAQugSHg7MOPm4QqVUJgnvcHl%2BbcoSPRK%2BTy1qm%2FkHG4yXH1JgfBYeOKnzb2EKxPkLuXjqnVQqIessylqxCw1q4G%2BYx%2FzjQGe5LIR7SBh33vu49L6Ja3DCISR8XXskaAhF98awrn4M8u9emvKTckkNOnculqShxYLLIMjJPywoJlxeXpN8rvQ6lU%2BaxAxyunIyKvFOeZ6PyRcM2T6TgHhLUM4k%2FwMNM5Ed%2Fqa2qB%2FdNLF%2FIu9dhkvnijV1C0yEzRwx0DBsw7%2BNnfP2pEGMd%2BoDNz0fNFr2jJcRDYp7LwD%2FcFRBNEtHc0bGI8GdeVUKveXDQ65FSeWOo2P0hqTRi4CV7X9%2BgtOqWleMiU23cpjI3s97JJOwc21bDufHRfwDQFSUXEuZR9JdkIz7%2Flmnjm8JkVEnlG%2FHKK3VIRHS6CsMIyae7yEB7JBLwi483QkQADYCpFD1Ny%2Br5DE%2FohP9C60QwsiqfsbqMJCB88AGOqUBdq56M%2Fdegbk1BMf5NlKlKC6kiiQPHdSgXB3iWl48y47Hd7lMVi%2BmzKi6M0%2Fy334gmlyEjBFhiynKv5aDVoHH%2FIkmmf3wzbJcvBoZdAhgMPy8hBhTGv6iJb2pHwRFMolQByjnRHGyoqvB8rL%2BosTIyot1hdsAUVL4aIBFzDAc2kaMziIl6kIvKM7VGVDDvQn7xfLCK6nvp94H6hHFRKqYg2lBqX%2BT&X-Amz-Signature=6a1abcbb26229e05670d52e114fcfe39b91c99bbae4fbe40a24f0a2ccb82f764&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCYNURVP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDifhA7eMQRKYYf5Mu5cdDcCOmuo%2FJqrB4PTCCUHeFBpgIgc1XGWs0C%2Bx6Di8gONWFzI%2FeiCzLG%2FHmNDtXG6E0yJcMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN29G1tZzetuJcdjSSrcA1TPS2plJyxJXw4H%2FZ%2BaRTD1gbbKChNpZzSy1uZPg3vxfxlyO0%2BP%2FHsyyNieIcPOlnL%2FjJzvhVLwn1DrAIZb%2FrjxIrorJ2HloQfCDuBSj1T2bcojJp156Jc%2BOgjfIs75FFx4Je4ek0nm1%2BnDWiy9%2FPwvUMWydwCAQugSHg7MOPm4QqVUJgnvcHl%2BbcoSPRK%2BTy1qm%2FkHG4yXH1JgfBYeOKnzb2EKxPkLuXjqnVQqIessylqxCw1q4G%2BYx%2FzjQGe5LIR7SBh33vu49L6Ja3DCISR8XXskaAhF98awrn4M8u9emvKTckkNOnculqShxYLLIMjJPywoJlxeXpN8rvQ6lU%2BaxAxyunIyKvFOeZ6PyRcM2T6TgHhLUM4k%2FwMNM5Ed%2Fqa2qB%2FdNLF%2FIu9dhkvnijV1C0yEzRwx0DBsw7%2BNnfP2pEGMd%2BoDNz0fNFr2jJcRDYp7LwD%2FcFRBNEtHc0bGI8GdeVUKveXDQ65FSeWOo2P0hqTRi4CV7X9%2BgtOqWleMiU23cpjI3s97JJOwc21bDufHRfwDQFSUXEuZR9JdkIz7%2Flmnjm8JkVEnlG%2FHKK3VIRHS6CsMIyae7yEB7JBLwi483QkQADYCpFD1Ny%2Br5DE%2FohP9C60QwsiqfsbqMJCB88AGOqUBdq56M%2Fdegbk1BMf5NlKlKC6kiiQPHdSgXB3iWl48y47Hd7lMVi%2BmzKi6M0%2Fy334gmlyEjBFhiynKv5aDVoHH%2FIkmmf3wzbJcvBoZdAhgMPy8hBhTGv6iJb2pHwRFMolQByjnRHGyoqvB8rL%2BosTIyot1hdsAUVL4aIBFzDAc2kaMziIl6kIvKM7VGVDDvQn7xfLCK6nvp94H6hHFRKqYg2lBqX%2BT&X-Amz-Signature=2bfeee24c804c07ef84a5e99133104b67c4cbd79578f8eb0b6f5ad2ee0da0e1a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCYNURVP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDifhA7eMQRKYYf5Mu5cdDcCOmuo%2FJqrB4PTCCUHeFBpgIgc1XGWs0C%2Bx6Di8gONWFzI%2FeiCzLG%2FHmNDtXG6E0yJcMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN29G1tZzetuJcdjSSrcA1TPS2plJyxJXw4H%2FZ%2BaRTD1gbbKChNpZzSy1uZPg3vxfxlyO0%2BP%2FHsyyNieIcPOlnL%2FjJzvhVLwn1DrAIZb%2FrjxIrorJ2HloQfCDuBSj1T2bcojJp156Jc%2BOgjfIs75FFx4Je4ek0nm1%2BnDWiy9%2FPwvUMWydwCAQugSHg7MOPm4QqVUJgnvcHl%2BbcoSPRK%2BTy1qm%2FkHG4yXH1JgfBYeOKnzb2EKxPkLuXjqnVQqIessylqxCw1q4G%2BYx%2FzjQGe5LIR7SBh33vu49L6Ja3DCISR8XXskaAhF98awrn4M8u9emvKTckkNOnculqShxYLLIMjJPywoJlxeXpN8rvQ6lU%2BaxAxyunIyKvFOeZ6PyRcM2T6TgHhLUM4k%2FwMNM5Ed%2Fqa2qB%2FdNLF%2FIu9dhkvnijV1C0yEzRwx0DBsw7%2BNnfP2pEGMd%2BoDNz0fNFr2jJcRDYp7LwD%2FcFRBNEtHc0bGI8GdeVUKveXDQ65FSeWOo2P0hqTRi4CV7X9%2BgtOqWleMiU23cpjI3s97JJOwc21bDufHRfwDQFSUXEuZR9JdkIz7%2Flmnjm8JkVEnlG%2FHKK3VIRHS6CsMIyae7yEB7JBLwi483QkQADYCpFD1Ny%2Br5DE%2FohP9C60QwsiqfsbqMJCB88AGOqUBdq56M%2Fdegbk1BMf5NlKlKC6kiiQPHdSgXB3iWl48y47Hd7lMVi%2BmzKi6M0%2Fy334gmlyEjBFhiynKv5aDVoHH%2FIkmmf3wzbJcvBoZdAhgMPy8hBhTGv6iJb2pHwRFMolQByjnRHGyoqvB8rL%2BosTIyot1hdsAUVL4aIBFzDAc2kaMziIl6kIvKM7VGVDDvQn7xfLCK6nvp94H6hHFRKqYg2lBqX%2BT&X-Amz-Signature=a698c177fdb4a75e0f8b9707b17799fb895d1764eb7c943cf421d1becd4e0c20&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
