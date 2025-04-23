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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVJWONA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDmR7GetL0KfswJKDFPDC9xQLOI%2FpZoM3zdXsQrKfAasQIhAPdiR0AeIdOv8yrPZ1Pz4ePN2ykx1DfA2f1aw36juDhYKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcsmxknZkLFf4wBp0q3AMBKpp3FimkaxldYEqfsK%2BIXhN%2BzaetNh22d8mNekg9h3ixphAFZ7k%2BtMUJcg7dvGkOYAG0LtSOuo9IVyeCK57e9D43ktgzOpi2CiNdK%2FZoWQ1LqgvQytqn3c4gps1Fy0oRs2Jy2Wen4FAvzcGYTN%2BRSjRHNvQ0ghVvquGS8Z70LLZs0K2Q6RpKXP%2BtheP4LSxL2OX4vTEc9Phc98y2K4MjmkL17FQgRIcpl%2Bxm%2FtXYyrIRz7MlcoOjgfnykXkXZ1STZGMnc%2F0Ru%2BgtTpaDaS1I0uPCFhjBhjIFz7nhVySepiq6whLDiONeCCcYA%2FO73m4%2B4ytZ0s3ac%2BzktSBIllNleqjwsOL1iWUIMuJV38TjX%2FMsjY%2BGscCaCoTvuw2g%2FuU0W%2Ba41dqouzI1DLFVSdyZHKZjJw8m%2FgCbx58Rwq5jahO0cb8vzh8CqbpdNQ9XV8cA5cYJMBv47z%2BrMGfL9lnzLcu1Qedqvocdq6hLEA0Xx58VVOVXjfyKNn5L2ueAAOUr3capuSevZ0Kb6yy8DzEWa0D08a7sEtcDzz4euMutFvfwQM6hOUbOcr3LESQ8Mvv2wl%2BAiSrnEUrRSLCYFxYmdGYiakBsCILN63HyXEh06fbFvDMQV90gAlw72DCQ9KTABjqkAWcZzpWb%2FNImcdzx3rLpsLWSD0W%2BFJwpCssGWXw%2Bx1dm9N9iBgmTUaoiJP%2FA9aoZ%2BDFpoltCUvCZVhHa47UaPLoi0W3ibLlTh9CJoLztK1fvC%2FF1xzK9q9ViIpIrZU%2BBG2VMcYYLxz8T62TuvzeklCJAAvfGf7x4v%2B%2FdOGPgegBN6mse8OAmI1H%2FZXf18%2BubAV6KkJaMtKNdCcfZ2gBcQPSrS9lB&X-Amz-Signature=3601228cdf126c394aaee6e0178d66223ee224a6ffac49583c3df5c49a64495e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVJWONA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDmR7GetL0KfswJKDFPDC9xQLOI%2FpZoM3zdXsQrKfAasQIhAPdiR0AeIdOv8yrPZ1Pz4ePN2ykx1DfA2f1aw36juDhYKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcsmxknZkLFf4wBp0q3AMBKpp3FimkaxldYEqfsK%2BIXhN%2BzaetNh22d8mNekg9h3ixphAFZ7k%2BtMUJcg7dvGkOYAG0LtSOuo9IVyeCK57e9D43ktgzOpi2CiNdK%2FZoWQ1LqgvQytqn3c4gps1Fy0oRs2Jy2Wen4FAvzcGYTN%2BRSjRHNvQ0ghVvquGS8Z70LLZs0K2Q6RpKXP%2BtheP4LSxL2OX4vTEc9Phc98y2K4MjmkL17FQgRIcpl%2Bxm%2FtXYyrIRz7MlcoOjgfnykXkXZ1STZGMnc%2F0Ru%2BgtTpaDaS1I0uPCFhjBhjIFz7nhVySepiq6whLDiONeCCcYA%2FO73m4%2B4ytZ0s3ac%2BzktSBIllNleqjwsOL1iWUIMuJV38TjX%2FMsjY%2BGscCaCoTvuw2g%2FuU0W%2Ba41dqouzI1DLFVSdyZHKZjJw8m%2FgCbx58Rwq5jahO0cb8vzh8CqbpdNQ9XV8cA5cYJMBv47z%2BrMGfL9lnzLcu1Qedqvocdq6hLEA0Xx58VVOVXjfyKNn5L2ueAAOUr3capuSevZ0Kb6yy8DzEWa0D08a7sEtcDzz4euMutFvfwQM6hOUbOcr3LESQ8Mvv2wl%2BAiSrnEUrRSLCYFxYmdGYiakBsCILN63HyXEh06fbFvDMQV90gAlw72DCQ9KTABjqkAWcZzpWb%2FNImcdzx3rLpsLWSD0W%2BFJwpCssGWXw%2Bx1dm9N9iBgmTUaoiJP%2FA9aoZ%2BDFpoltCUvCZVhHa47UaPLoi0W3ibLlTh9CJoLztK1fvC%2FF1xzK9q9ViIpIrZU%2BBG2VMcYYLxz8T62TuvzeklCJAAvfGf7x4v%2B%2FdOGPgegBN6mse8OAmI1H%2FZXf18%2BubAV6KkJaMtKNdCcfZ2gBcQPSrS9lB&X-Amz-Signature=9fa15abd11edec546acfecb28e6ae54f519d618e14eef7e1a35b6052bcb1d7ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVJWONA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDmR7GetL0KfswJKDFPDC9xQLOI%2FpZoM3zdXsQrKfAasQIhAPdiR0AeIdOv8yrPZ1Pz4ePN2ykx1DfA2f1aw36juDhYKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcsmxknZkLFf4wBp0q3AMBKpp3FimkaxldYEqfsK%2BIXhN%2BzaetNh22d8mNekg9h3ixphAFZ7k%2BtMUJcg7dvGkOYAG0LtSOuo9IVyeCK57e9D43ktgzOpi2CiNdK%2FZoWQ1LqgvQytqn3c4gps1Fy0oRs2Jy2Wen4FAvzcGYTN%2BRSjRHNvQ0ghVvquGS8Z70LLZs0K2Q6RpKXP%2BtheP4LSxL2OX4vTEc9Phc98y2K4MjmkL17FQgRIcpl%2Bxm%2FtXYyrIRz7MlcoOjgfnykXkXZ1STZGMnc%2F0Ru%2BgtTpaDaS1I0uPCFhjBhjIFz7nhVySepiq6whLDiONeCCcYA%2FO73m4%2B4ytZ0s3ac%2BzktSBIllNleqjwsOL1iWUIMuJV38TjX%2FMsjY%2BGscCaCoTvuw2g%2FuU0W%2Ba41dqouzI1DLFVSdyZHKZjJw8m%2FgCbx58Rwq5jahO0cb8vzh8CqbpdNQ9XV8cA5cYJMBv47z%2BrMGfL9lnzLcu1Qedqvocdq6hLEA0Xx58VVOVXjfyKNn5L2ueAAOUr3capuSevZ0Kb6yy8DzEWa0D08a7sEtcDzz4euMutFvfwQM6hOUbOcr3LESQ8Mvv2wl%2BAiSrnEUrRSLCYFxYmdGYiakBsCILN63HyXEh06fbFvDMQV90gAlw72DCQ9KTABjqkAWcZzpWb%2FNImcdzx3rLpsLWSD0W%2BFJwpCssGWXw%2Bx1dm9N9iBgmTUaoiJP%2FA9aoZ%2BDFpoltCUvCZVhHa47UaPLoi0W3ibLlTh9CJoLztK1fvC%2FF1xzK9q9ViIpIrZU%2BBG2VMcYYLxz8T62TuvzeklCJAAvfGf7x4v%2B%2FdOGPgegBN6mse8OAmI1H%2FZXf18%2BubAV6KkJaMtKNdCcfZ2gBcQPSrS9lB&X-Amz-Signature=42f450a46e760bbfe244c0f0060fc0e949e05e4da2ce58b4f8fcb47974c27f94&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVJWONA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDmR7GetL0KfswJKDFPDC9xQLOI%2FpZoM3zdXsQrKfAasQIhAPdiR0AeIdOv8yrPZ1Pz4ePN2ykx1DfA2f1aw36juDhYKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcsmxknZkLFf4wBp0q3AMBKpp3FimkaxldYEqfsK%2BIXhN%2BzaetNh22d8mNekg9h3ixphAFZ7k%2BtMUJcg7dvGkOYAG0LtSOuo9IVyeCK57e9D43ktgzOpi2CiNdK%2FZoWQ1LqgvQytqn3c4gps1Fy0oRs2Jy2Wen4FAvzcGYTN%2BRSjRHNvQ0ghVvquGS8Z70LLZs0K2Q6RpKXP%2BtheP4LSxL2OX4vTEc9Phc98y2K4MjmkL17FQgRIcpl%2Bxm%2FtXYyrIRz7MlcoOjgfnykXkXZ1STZGMnc%2F0Ru%2BgtTpaDaS1I0uPCFhjBhjIFz7nhVySepiq6whLDiONeCCcYA%2FO73m4%2B4ytZ0s3ac%2BzktSBIllNleqjwsOL1iWUIMuJV38TjX%2FMsjY%2BGscCaCoTvuw2g%2FuU0W%2Ba41dqouzI1DLFVSdyZHKZjJw8m%2FgCbx58Rwq5jahO0cb8vzh8CqbpdNQ9XV8cA5cYJMBv47z%2BrMGfL9lnzLcu1Qedqvocdq6hLEA0Xx58VVOVXjfyKNn5L2ueAAOUr3capuSevZ0Kb6yy8DzEWa0D08a7sEtcDzz4euMutFvfwQM6hOUbOcr3LESQ8Mvv2wl%2BAiSrnEUrRSLCYFxYmdGYiakBsCILN63HyXEh06fbFvDMQV90gAlw72DCQ9KTABjqkAWcZzpWb%2FNImcdzx3rLpsLWSD0W%2BFJwpCssGWXw%2Bx1dm9N9iBgmTUaoiJP%2FA9aoZ%2BDFpoltCUvCZVhHa47UaPLoi0W3ibLlTh9CJoLztK1fvC%2FF1xzK9q9ViIpIrZU%2BBG2VMcYYLxz8T62TuvzeklCJAAvfGf7x4v%2B%2FdOGPgegBN6mse8OAmI1H%2FZXf18%2BubAV6KkJaMtKNdCcfZ2gBcQPSrS9lB&X-Amz-Signature=bd977c62cbae664708a4d8da9c1ef1feb4ec79361143ea7b82f477644a60da80&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVJWONA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDmR7GetL0KfswJKDFPDC9xQLOI%2FpZoM3zdXsQrKfAasQIhAPdiR0AeIdOv8yrPZ1Pz4ePN2ykx1DfA2f1aw36juDhYKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcsmxknZkLFf4wBp0q3AMBKpp3FimkaxldYEqfsK%2BIXhN%2BzaetNh22d8mNekg9h3ixphAFZ7k%2BtMUJcg7dvGkOYAG0LtSOuo9IVyeCK57e9D43ktgzOpi2CiNdK%2FZoWQ1LqgvQytqn3c4gps1Fy0oRs2Jy2Wen4FAvzcGYTN%2BRSjRHNvQ0ghVvquGS8Z70LLZs0K2Q6RpKXP%2BtheP4LSxL2OX4vTEc9Phc98y2K4MjmkL17FQgRIcpl%2Bxm%2FtXYyrIRz7MlcoOjgfnykXkXZ1STZGMnc%2F0Ru%2BgtTpaDaS1I0uPCFhjBhjIFz7nhVySepiq6whLDiONeCCcYA%2FO73m4%2B4ytZ0s3ac%2BzktSBIllNleqjwsOL1iWUIMuJV38TjX%2FMsjY%2BGscCaCoTvuw2g%2FuU0W%2Ba41dqouzI1DLFVSdyZHKZjJw8m%2FgCbx58Rwq5jahO0cb8vzh8CqbpdNQ9XV8cA5cYJMBv47z%2BrMGfL9lnzLcu1Qedqvocdq6hLEA0Xx58VVOVXjfyKNn5L2ueAAOUr3capuSevZ0Kb6yy8DzEWa0D08a7sEtcDzz4euMutFvfwQM6hOUbOcr3LESQ8Mvv2wl%2BAiSrnEUrRSLCYFxYmdGYiakBsCILN63HyXEh06fbFvDMQV90gAlw72DCQ9KTABjqkAWcZzpWb%2FNImcdzx3rLpsLWSD0W%2BFJwpCssGWXw%2Bx1dm9N9iBgmTUaoiJP%2FA9aoZ%2BDFpoltCUvCZVhHa47UaPLoi0W3ibLlTh9CJoLztK1fvC%2FF1xzK9q9ViIpIrZU%2BBG2VMcYYLxz8T62TuvzeklCJAAvfGf7x4v%2B%2FdOGPgegBN6mse8OAmI1H%2FZXf18%2BubAV6KkJaMtKNdCcfZ2gBcQPSrS9lB&X-Amz-Signature=b501bd2faa438edb3c10d277a9597354aa6a8b8d9081f7607ef79f5afe75549c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVJWONA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDmR7GetL0KfswJKDFPDC9xQLOI%2FpZoM3zdXsQrKfAasQIhAPdiR0AeIdOv8yrPZ1Pz4ePN2ykx1DfA2f1aw36juDhYKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcsmxknZkLFf4wBp0q3AMBKpp3FimkaxldYEqfsK%2BIXhN%2BzaetNh22d8mNekg9h3ixphAFZ7k%2BtMUJcg7dvGkOYAG0LtSOuo9IVyeCK57e9D43ktgzOpi2CiNdK%2FZoWQ1LqgvQytqn3c4gps1Fy0oRs2Jy2Wen4FAvzcGYTN%2BRSjRHNvQ0ghVvquGS8Z70LLZs0K2Q6RpKXP%2BtheP4LSxL2OX4vTEc9Phc98y2K4MjmkL17FQgRIcpl%2Bxm%2FtXYyrIRz7MlcoOjgfnykXkXZ1STZGMnc%2F0Ru%2BgtTpaDaS1I0uPCFhjBhjIFz7nhVySepiq6whLDiONeCCcYA%2FO73m4%2B4ytZ0s3ac%2BzktSBIllNleqjwsOL1iWUIMuJV38TjX%2FMsjY%2BGscCaCoTvuw2g%2FuU0W%2Ba41dqouzI1DLFVSdyZHKZjJw8m%2FgCbx58Rwq5jahO0cb8vzh8CqbpdNQ9XV8cA5cYJMBv47z%2BrMGfL9lnzLcu1Qedqvocdq6hLEA0Xx58VVOVXjfyKNn5L2ueAAOUr3capuSevZ0Kb6yy8DzEWa0D08a7sEtcDzz4euMutFvfwQM6hOUbOcr3LESQ8Mvv2wl%2BAiSrnEUrRSLCYFxYmdGYiakBsCILN63HyXEh06fbFvDMQV90gAlw72DCQ9KTABjqkAWcZzpWb%2FNImcdzx3rLpsLWSD0W%2BFJwpCssGWXw%2Bx1dm9N9iBgmTUaoiJP%2FA9aoZ%2BDFpoltCUvCZVhHa47UaPLoi0W3ibLlTh9CJoLztK1fvC%2FF1xzK9q9ViIpIrZU%2BBG2VMcYYLxz8T62TuvzeklCJAAvfGf7x4v%2B%2FdOGPgegBN6mse8OAmI1H%2FZXf18%2BubAV6KkJaMtKNdCcfZ2gBcQPSrS9lB&X-Amz-Signature=422ba6838b57c603861d03c24735bcb8b3b450b17fcd2223ac21ef200ddfc115&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVJWONA%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDmR7GetL0KfswJKDFPDC9xQLOI%2FpZoM3zdXsQrKfAasQIhAPdiR0AeIdOv8yrPZ1Pz4ePN2ykx1DfA2f1aw36juDhYKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcsmxknZkLFf4wBp0q3AMBKpp3FimkaxldYEqfsK%2BIXhN%2BzaetNh22d8mNekg9h3ixphAFZ7k%2BtMUJcg7dvGkOYAG0LtSOuo9IVyeCK57e9D43ktgzOpi2CiNdK%2FZoWQ1LqgvQytqn3c4gps1Fy0oRs2Jy2Wen4FAvzcGYTN%2BRSjRHNvQ0ghVvquGS8Z70LLZs0K2Q6RpKXP%2BtheP4LSxL2OX4vTEc9Phc98y2K4MjmkL17FQgRIcpl%2Bxm%2FtXYyrIRz7MlcoOjgfnykXkXZ1STZGMnc%2F0Ru%2BgtTpaDaS1I0uPCFhjBhjIFz7nhVySepiq6whLDiONeCCcYA%2FO73m4%2B4ytZ0s3ac%2BzktSBIllNleqjwsOL1iWUIMuJV38TjX%2FMsjY%2BGscCaCoTvuw2g%2FuU0W%2Ba41dqouzI1DLFVSdyZHKZjJw8m%2FgCbx58Rwq5jahO0cb8vzh8CqbpdNQ9XV8cA5cYJMBv47z%2BrMGfL9lnzLcu1Qedqvocdq6hLEA0Xx58VVOVXjfyKNn5L2ueAAOUr3capuSevZ0Kb6yy8DzEWa0D08a7sEtcDzz4euMutFvfwQM6hOUbOcr3LESQ8Mvv2wl%2BAiSrnEUrRSLCYFxYmdGYiakBsCILN63HyXEh06fbFvDMQV90gAlw72DCQ9KTABjqkAWcZzpWb%2FNImcdzx3rLpsLWSD0W%2BFJwpCssGWXw%2Bx1dm9N9iBgmTUaoiJP%2FA9aoZ%2BDFpoltCUvCZVhHa47UaPLoi0W3ibLlTh9CJoLztK1fvC%2FF1xzK9q9ViIpIrZU%2BBG2VMcYYLxz8T62TuvzeklCJAAvfGf7x4v%2B%2FdOGPgegBN6mse8OAmI1H%2FZXf18%2BubAV6KkJaMtKNdCcfZ2gBcQPSrS9lB&X-Amz-Signature=30526525463760ad86628ea3bdf62919c9d3f287923c53dc375ce3ca1ea444cc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
