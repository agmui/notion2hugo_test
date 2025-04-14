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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTU5IHMX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIETfyHhpJwA3hjPQtfmUt%2B%2B40%2FhHWluuOS92LnZxVYzYAiADEsyl6MT1gndgp74IGsDre6bND%2BYl1kgh3R6Phw65FSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9HwDqmHbX%2B533kqyKtwDgSLvKsSUTvFEoIHeyDHxgnEd0WmFRTKKjFGIhF51Zw7dDmVjsmgN%2BwfKJ3NtulfrdS00eeKLGdDBePL3axVitppl9PcaYpJrYhZim1I4rTDXQDjpIqIn7dSAQWh%2FI63RSGfypgAEYlr2TH0l7etCj%2BKmSMzsxkFmnEW6Q4yv4pmjdCk3cckL14obhxJZ59yvb0cTPO2K6Px6xNH4qVmwV2SfQmRqtwm4Kyrxt9EyUW4HPUHYGpvkyqC11xue6osANC9wxNbI8yFI%2Fb9v4E%2B2MBOEN6n0CsMYKScjxQaE7SAZwiuz7b%2FUKp1s7%2BY76ynkr4zs%2BCP9D7Npy%2Fl8XUU%2FfGr4VVVOx5BWirqs%2Fst6We6%2Fmg25kpVuVtuvAMxr9mWerk%2FYXbdzfhc8t1gscG9Pz%2B7v5bYDHRYtpSCVpAefa39Gl%2BH4Gn9khDE207QWXWHrk9BwZQmmnnVdx10WPrUZvRk6YJre8cfTK%2B%2FVIRcXs2bmRXG%2FIYpwy0X0AIdjX4PTIrToZF15ShjLblyjOkHexsXW0TBt8BhjaN3yJUDdHzH9csKAbkWrNnWkfA7GabzuUCJRnRA1yjg7dQ7T0KoxGyLItNdgstCuRHsQje0DFwZyBOIxdtuD8wpmoKowiYLxvwY6pgGVMFvG7EBLZX5AaB0hPVNn3SDg4ibf5hh%2BK8lqjMTbwc%2Fkk9gVbt4J0LLaACk82hTphKFXO2cg0CF4GSc%2BGfBujTBkeVE%2B32R0A7HR5FF6E3zG3KtKaPlXVpm6VkAQFdajKqzZMJyoO6Xf1B5V%2B4cIKkMjjBQge7eEVPWLhMxkZXI93Tc2QHxRFy7M2Nrk0rnhjzPP4k6%2BEmW5A8YRhguzRRqE1ZR5&X-Amz-Signature=12e5680d8a9d2e5e8c934afb6c7ce717ffce891b9829751d170c66de5763f5b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTU5IHMX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIETfyHhpJwA3hjPQtfmUt%2B%2B40%2FhHWluuOS92LnZxVYzYAiADEsyl6MT1gndgp74IGsDre6bND%2BYl1kgh3R6Phw65FSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9HwDqmHbX%2B533kqyKtwDgSLvKsSUTvFEoIHeyDHxgnEd0WmFRTKKjFGIhF51Zw7dDmVjsmgN%2BwfKJ3NtulfrdS00eeKLGdDBePL3axVitppl9PcaYpJrYhZim1I4rTDXQDjpIqIn7dSAQWh%2FI63RSGfypgAEYlr2TH0l7etCj%2BKmSMzsxkFmnEW6Q4yv4pmjdCk3cckL14obhxJZ59yvb0cTPO2K6Px6xNH4qVmwV2SfQmRqtwm4Kyrxt9EyUW4HPUHYGpvkyqC11xue6osANC9wxNbI8yFI%2Fb9v4E%2B2MBOEN6n0CsMYKScjxQaE7SAZwiuz7b%2FUKp1s7%2BY76ynkr4zs%2BCP9D7Npy%2Fl8XUU%2FfGr4VVVOx5BWirqs%2Fst6We6%2Fmg25kpVuVtuvAMxr9mWerk%2FYXbdzfhc8t1gscG9Pz%2B7v5bYDHRYtpSCVpAefa39Gl%2BH4Gn9khDE207QWXWHrk9BwZQmmnnVdx10WPrUZvRk6YJre8cfTK%2B%2FVIRcXs2bmRXG%2FIYpwy0X0AIdjX4PTIrToZF15ShjLblyjOkHexsXW0TBt8BhjaN3yJUDdHzH9csKAbkWrNnWkfA7GabzuUCJRnRA1yjg7dQ7T0KoxGyLItNdgstCuRHsQje0DFwZyBOIxdtuD8wpmoKowiYLxvwY6pgGVMFvG7EBLZX5AaB0hPVNn3SDg4ibf5hh%2BK8lqjMTbwc%2Fkk9gVbt4J0LLaACk82hTphKFXO2cg0CF4GSc%2BGfBujTBkeVE%2B32R0A7HR5FF6E3zG3KtKaPlXVpm6VkAQFdajKqzZMJyoO6Xf1B5V%2B4cIKkMjjBQge7eEVPWLhMxkZXI93Tc2QHxRFy7M2Nrk0rnhjzPP4k6%2BEmW5A8YRhguzRRqE1ZR5&X-Amz-Signature=e2c93388beac9c0d5d6fb8f9e1e65a6c281a0aa8fb27e0be2b7810b2c4b52b12&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTU5IHMX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIETfyHhpJwA3hjPQtfmUt%2B%2B40%2FhHWluuOS92LnZxVYzYAiADEsyl6MT1gndgp74IGsDre6bND%2BYl1kgh3R6Phw65FSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9HwDqmHbX%2B533kqyKtwDgSLvKsSUTvFEoIHeyDHxgnEd0WmFRTKKjFGIhF51Zw7dDmVjsmgN%2BwfKJ3NtulfrdS00eeKLGdDBePL3axVitppl9PcaYpJrYhZim1I4rTDXQDjpIqIn7dSAQWh%2FI63RSGfypgAEYlr2TH0l7etCj%2BKmSMzsxkFmnEW6Q4yv4pmjdCk3cckL14obhxJZ59yvb0cTPO2K6Px6xNH4qVmwV2SfQmRqtwm4Kyrxt9EyUW4HPUHYGpvkyqC11xue6osANC9wxNbI8yFI%2Fb9v4E%2B2MBOEN6n0CsMYKScjxQaE7SAZwiuz7b%2FUKp1s7%2BY76ynkr4zs%2BCP9D7Npy%2Fl8XUU%2FfGr4VVVOx5BWirqs%2Fst6We6%2Fmg25kpVuVtuvAMxr9mWerk%2FYXbdzfhc8t1gscG9Pz%2B7v5bYDHRYtpSCVpAefa39Gl%2BH4Gn9khDE207QWXWHrk9BwZQmmnnVdx10WPrUZvRk6YJre8cfTK%2B%2FVIRcXs2bmRXG%2FIYpwy0X0AIdjX4PTIrToZF15ShjLblyjOkHexsXW0TBt8BhjaN3yJUDdHzH9csKAbkWrNnWkfA7GabzuUCJRnRA1yjg7dQ7T0KoxGyLItNdgstCuRHsQje0DFwZyBOIxdtuD8wpmoKowiYLxvwY6pgGVMFvG7EBLZX5AaB0hPVNn3SDg4ibf5hh%2BK8lqjMTbwc%2Fkk9gVbt4J0LLaACk82hTphKFXO2cg0CF4GSc%2BGfBujTBkeVE%2B32R0A7HR5FF6E3zG3KtKaPlXVpm6VkAQFdajKqzZMJyoO6Xf1B5V%2B4cIKkMjjBQge7eEVPWLhMxkZXI93Tc2QHxRFy7M2Nrk0rnhjzPP4k6%2BEmW5A8YRhguzRRqE1ZR5&X-Amz-Signature=c0d92fde270125ae79ad1fabf068ef1f7c9884cc6f7f0006ae7656deec5a8b20&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTU5IHMX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIETfyHhpJwA3hjPQtfmUt%2B%2B40%2FhHWluuOS92LnZxVYzYAiADEsyl6MT1gndgp74IGsDre6bND%2BYl1kgh3R6Phw65FSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9HwDqmHbX%2B533kqyKtwDgSLvKsSUTvFEoIHeyDHxgnEd0WmFRTKKjFGIhF51Zw7dDmVjsmgN%2BwfKJ3NtulfrdS00eeKLGdDBePL3axVitppl9PcaYpJrYhZim1I4rTDXQDjpIqIn7dSAQWh%2FI63RSGfypgAEYlr2TH0l7etCj%2BKmSMzsxkFmnEW6Q4yv4pmjdCk3cckL14obhxJZ59yvb0cTPO2K6Px6xNH4qVmwV2SfQmRqtwm4Kyrxt9EyUW4HPUHYGpvkyqC11xue6osANC9wxNbI8yFI%2Fb9v4E%2B2MBOEN6n0CsMYKScjxQaE7SAZwiuz7b%2FUKp1s7%2BY76ynkr4zs%2BCP9D7Npy%2Fl8XUU%2FfGr4VVVOx5BWirqs%2Fst6We6%2Fmg25kpVuVtuvAMxr9mWerk%2FYXbdzfhc8t1gscG9Pz%2B7v5bYDHRYtpSCVpAefa39Gl%2BH4Gn9khDE207QWXWHrk9BwZQmmnnVdx10WPrUZvRk6YJre8cfTK%2B%2FVIRcXs2bmRXG%2FIYpwy0X0AIdjX4PTIrToZF15ShjLblyjOkHexsXW0TBt8BhjaN3yJUDdHzH9csKAbkWrNnWkfA7GabzuUCJRnRA1yjg7dQ7T0KoxGyLItNdgstCuRHsQje0DFwZyBOIxdtuD8wpmoKowiYLxvwY6pgGVMFvG7EBLZX5AaB0hPVNn3SDg4ibf5hh%2BK8lqjMTbwc%2Fkk9gVbt4J0LLaACk82hTphKFXO2cg0CF4GSc%2BGfBujTBkeVE%2B32R0A7HR5FF6E3zG3KtKaPlXVpm6VkAQFdajKqzZMJyoO6Xf1B5V%2B4cIKkMjjBQge7eEVPWLhMxkZXI93Tc2QHxRFy7M2Nrk0rnhjzPP4k6%2BEmW5A8YRhguzRRqE1ZR5&X-Amz-Signature=024d3db808f5f4fe2d7cbde3edaa14ac7486926ada2c05b0a113c8e64cf05477&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTU5IHMX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIETfyHhpJwA3hjPQtfmUt%2B%2B40%2FhHWluuOS92LnZxVYzYAiADEsyl6MT1gndgp74IGsDre6bND%2BYl1kgh3R6Phw65FSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9HwDqmHbX%2B533kqyKtwDgSLvKsSUTvFEoIHeyDHxgnEd0WmFRTKKjFGIhF51Zw7dDmVjsmgN%2BwfKJ3NtulfrdS00eeKLGdDBePL3axVitppl9PcaYpJrYhZim1I4rTDXQDjpIqIn7dSAQWh%2FI63RSGfypgAEYlr2TH0l7etCj%2BKmSMzsxkFmnEW6Q4yv4pmjdCk3cckL14obhxJZ59yvb0cTPO2K6Px6xNH4qVmwV2SfQmRqtwm4Kyrxt9EyUW4HPUHYGpvkyqC11xue6osANC9wxNbI8yFI%2Fb9v4E%2B2MBOEN6n0CsMYKScjxQaE7SAZwiuz7b%2FUKp1s7%2BY76ynkr4zs%2BCP9D7Npy%2Fl8XUU%2FfGr4VVVOx5BWirqs%2Fst6We6%2Fmg25kpVuVtuvAMxr9mWerk%2FYXbdzfhc8t1gscG9Pz%2B7v5bYDHRYtpSCVpAefa39Gl%2BH4Gn9khDE207QWXWHrk9BwZQmmnnVdx10WPrUZvRk6YJre8cfTK%2B%2FVIRcXs2bmRXG%2FIYpwy0X0AIdjX4PTIrToZF15ShjLblyjOkHexsXW0TBt8BhjaN3yJUDdHzH9csKAbkWrNnWkfA7GabzuUCJRnRA1yjg7dQ7T0KoxGyLItNdgstCuRHsQje0DFwZyBOIxdtuD8wpmoKowiYLxvwY6pgGVMFvG7EBLZX5AaB0hPVNn3SDg4ibf5hh%2BK8lqjMTbwc%2Fkk9gVbt4J0LLaACk82hTphKFXO2cg0CF4GSc%2BGfBujTBkeVE%2B32R0A7HR5FF6E3zG3KtKaPlXVpm6VkAQFdajKqzZMJyoO6Xf1B5V%2B4cIKkMjjBQge7eEVPWLhMxkZXI93Tc2QHxRFy7M2Nrk0rnhjzPP4k6%2BEmW5A8YRhguzRRqE1ZR5&X-Amz-Signature=a961cef10e9f274a7101d6d990832b18f3035300f83e9ee5f3990bb2abb709ec&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTU5IHMX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIETfyHhpJwA3hjPQtfmUt%2B%2B40%2FhHWluuOS92LnZxVYzYAiADEsyl6MT1gndgp74IGsDre6bND%2BYl1kgh3R6Phw65FSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9HwDqmHbX%2B533kqyKtwDgSLvKsSUTvFEoIHeyDHxgnEd0WmFRTKKjFGIhF51Zw7dDmVjsmgN%2BwfKJ3NtulfrdS00eeKLGdDBePL3axVitppl9PcaYpJrYhZim1I4rTDXQDjpIqIn7dSAQWh%2FI63RSGfypgAEYlr2TH0l7etCj%2BKmSMzsxkFmnEW6Q4yv4pmjdCk3cckL14obhxJZ59yvb0cTPO2K6Px6xNH4qVmwV2SfQmRqtwm4Kyrxt9EyUW4HPUHYGpvkyqC11xue6osANC9wxNbI8yFI%2Fb9v4E%2B2MBOEN6n0CsMYKScjxQaE7SAZwiuz7b%2FUKp1s7%2BY76ynkr4zs%2BCP9D7Npy%2Fl8XUU%2FfGr4VVVOx5BWirqs%2Fst6We6%2Fmg25kpVuVtuvAMxr9mWerk%2FYXbdzfhc8t1gscG9Pz%2B7v5bYDHRYtpSCVpAefa39Gl%2BH4Gn9khDE207QWXWHrk9BwZQmmnnVdx10WPrUZvRk6YJre8cfTK%2B%2FVIRcXs2bmRXG%2FIYpwy0X0AIdjX4PTIrToZF15ShjLblyjOkHexsXW0TBt8BhjaN3yJUDdHzH9csKAbkWrNnWkfA7GabzuUCJRnRA1yjg7dQ7T0KoxGyLItNdgstCuRHsQje0DFwZyBOIxdtuD8wpmoKowiYLxvwY6pgGVMFvG7EBLZX5AaB0hPVNn3SDg4ibf5hh%2BK8lqjMTbwc%2Fkk9gVbt4J0LLaACk82hTphKFXO2cg0CF4GSc%2BGfBujTBkeVE%2B32R0A7HR5FF6E3zG3KtKaPlXVpm6VkAQFdajKqzZMJyoO6Xf1B5V%2B4cIKkMjjBQge7eEVPWLhMxkZXI93Tc2QHxRFy7M2Nrk0rnhjzPP4k6%2BEmW5A8YRhguzRRqE1ZR5&X-Amz-Signature=4a17332592e79a3b14696a55131f8242d2015c3f4cb03f55d2624aaf08ee686d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTU5IHMX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIETfyHhpJwA3hjPQtfmUt%2B%2B40%2FhHWluuOS92LnZxVYzYAiADEsyl6MT1gndgp74IGsDre6bND%2BYl1kgh3R6Phw65FSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9HwDqmHbX%2B533kqyKtwDgSLvKsSUTvFEoIHeyDHxgnEd0WmFRTKKjFGIhF51Zw7dDmVjsmgN%2BwfKJ3NtulfrdS00eeKLGdDBePL3axVitppl9PcaYpJrYhZim1I4rTDXQDjpIqIn7dSAQWh%2FI63RSGfypgAEYlr2TH0l7etCj%2BKmSMzsxkFmnEW6Q4yv4pmjdCk3cckL14obhxJZ59yvb0cTPO2K6Px6xNH4qVmwV2SfQmRqtwm4Kyrxt9EyUW4HPUHYGpvkyqC11xue6osANC9wxNbI8yFI%2Fb9v4E%2B2MBOEN6n0CsMYKScjxQaE7SAZwiuz7b%2FUKp1s7%2BY76ynkr4zs%2BCP9D7Npy%2Fl8XUU%2FfGr4VVVOx5BWirqs%2Fst6We6%2Fmg25kpVuVtuvAMxr9mWerk%2FYXbdzfhc8t1gscG9Pz%2B7v5bYDHRYtpSCVpAefa39Gl%2BH4Gn9khDE207QWXWHrk9BwZQmmnnVdx10WPrUZvRk6YJre8cfTK%2B%2FVIRcXs2bmRXG%2FIYpwy0X0AIdjX4PTIrToZF15ShjLblyjOkHexsXW0TBt8BhjaN3yJUDdHzH9csKAbkWrNnWkfA7GabzuUCJRnRA1yjg7dQ7T0KoxGyLItNdgstCuRHsQje0DFwZyBOIxdtuD8wpmoKowiYLxvwY6pgGVMFvG7EBLZX5AaB0hPVNn3SDg4ibf5hh%2BK8lqjMTbwc%2Fkk9gVbt4J0LLaACk82hTphKFXO2cg0CF4GSc%2BGfBujTBkeVE%2B32R0A7HR5FF6E3zG3KtKaPlXVpm6VkAQFdajKqzZMJyoO6Xf1B5V%2B4cIKkMjjBQge7eEVPWLhMxkZXI93Tc2QHxRFy7M2Nrk0rnhjzPP4k6%2BEmW5A8YRhguzRRqE1ZR5&X-Amz-Signature=0186093b4b63a0d558853fe3391f0c60bd87d34e40c3da68fbce274881f9036e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
