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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ5RWYDD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC2O0tbZUfAs0MzCwXNBjhA2nJloYaASijk0EbhFlsuAiEAja8PH1Y8LODmoCuoLGGpSgjLnat9wCEfj7eUlfGLqe8q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHvw3zMMjmQN9Y0ilircA4fN3tKD0MH6z5PbMhBbLt%2BiAgRz9rCe5RRgUyjchhwHXtawt5O9x0E%2FjjJgWQ1YCQQO3fh6SWJxcISMi2QIkw1TcVmVnUlZQppdU2iYpXDKKrv6PM6UyVVirQr3ay7X3gsxzgKzqJRx9vhr6sdvuIwuFvNMU2dJcppH5xN6A7OAAs2%2FvwPSJyLPYotFT5scwMbnJteL3dGFvaQ5bCiiBt81jj6z%2BAeZgL%2FtxlarJ3e61GGNWKU5e%2Bfz5DliIp7gFhgs%2B01ufDgVDmYcXihivOeWxthDelYe5Ud%2BvqwbwXfmFPm%2BluCw8oRaH1LFVxQPUqE%2FVseSImsZVOAJN2WkYDSlko1eksMH0kL36ENPDWeFOwe2Oq2lZWJUZ%2F6PYR%2B5FxifOUFcIw7rk4emjRB2pcU8MT4cJbyckKH75JM8eti4UKl6zRzc%2FvPl%2FJfoiYpILaJOGqCRatMXpBfLhNo6j8FCLyFMXKDu%2BH%2F8CDRX6KicaCRxDIdoQiPim3IMyb0m%2Fvww6Wl5m8XfzXgVrDW9FD3JwIeXJXNE7fBrCDTmED83aUSiFWdSEZirTqD1TjVsYUOgdWVVqzh4dGNOyGEKLFQaJsmUGBz82tNEsXQBA%2BVJ%2B9r6TQhi7wHyBc0dMNnA878GOqUBadMbushhquwEdK3dk2YGOZXvAg67BUlDhwa%2BTLihs5kPFshWI846Lm5fROqEUwjRMRIo44gHcqBrHhT%2B92XYYKANnzUmic3MgR9LYLOw65maH9xziLRLHEelmZ%2FPSJQmflsRTdWXUqVtFw77xFs6w8AOT%2FAvSty5WC15IbwF25uASm1dnlcQ4zibHECUH7DpnPktmpNMwhyW70pacuQN7329fGKf&X-Amz-Signature=e497221817ef5c5e9229a981115823c6fcfd1997a0b19750eb6feaaf762efe58&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ5RWYDD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC2O0tbZUfAs0MzCwXNBjhA2nJloYaASijk0EbhFlsuAiEAja8PH1Y8LODmoCuoLGGpSgjLnat9wCEfj7eUlfGLqe8q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHvw3zMMjmQN9Y0ilircA4fN3tKD0MH6z5PbMhBbLt%2BiAgRz9rCe5RRgUyjchhwHXtawt5O9x0E%2FjjJgWQ1YCQQO3fh6SWJxcISMi2QIkw1TcVmVnUlZQppdU2iYpXDKKrv6PM6UyVVirQr3ay7X3gsxzgKzqJRx9vhr6sdvuIwuFvNMU2dJcppH5xN6A7OAAs2%2FvwPSJyLPYotFT5scwMbnJteL3dGFvaQ5bCiiBt81jj6z%2BAeZgL%2FtxlarJ3e61GGNWKU5e%2Bfz5DliIp7gFhgs%2B01ufDgVDmYcXihivOeWxthDelYe5Ud%2BvqwbwXfmFPm%2BluCw8oRaH1LFVxQPUqE%2FVseSImsZVOAJN2WkYDSlko1eksMH0kL36ENPDWeFOwe2Oq2lZWJUZ%2F6PYR%2B5FxifOUFcIw7rk4emjRB2pcU8MT4cJbyckKH75JM8eti4UKl6zRzc%2FvPl%2FJfoiYpILaJOGqCRatMXpBfLhNo6j8FCLyFMXKDu%2BH%2F8CDRX6KicaCRxDIdoQiPim3IMyb0m%2Fvww6Wl5m8XfzXgVrDW9FD3JwIeXJXNE7fBrCDTmED83aUSiFWdSEZirTqD1TjVsYUOgdWVVqzh4dGNOyGEKLFQaJsmUGBz82tNEsXQBA%2BVJ%2B9r6TQhi7wHyBc0dMNnA878GOqUBadMbushhquwEdK3dk2YGOZXvAg67BUlDhwa%2BTLihs5kPFshWI846Lm5fROqEUwjRMRIo44gHcqBrHhT%2B92XYYKANnzUmic3MgR9LYLOw65maH9xziLRLHEelmZ%2FPSJQmflsRTdWXUqVtFw77xFs6w8AOT%2FAvSty5WC15IbwF25uASm1dnlcQ4zibHECUH7DpnPktmpNMwhyW70pacuQN7329fGKf&X-Amz-Signature=b3d7daf9f04354a48eaedc3f3dd36f2e547b57e15483d115c28cde4e5d6b4366&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ5RWYDD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC2O0tbZUfAs0MzCwXNBjhA2nJloYaASijk0EbhFlsuAiEAja8PH1Y8LODmoCuoLGGpSgjLnat9wCEfj7eUlfGLqe8q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHvw3zMMjmQN9Y0ilircA4fN3tKD0MH6z5PbMhBbLt%2BiAgRz9rCe5RRgUyjchhwHXtawt5O9x0E%2FjjJgWQ1YCQQO3fh6SWJxcISMi2QIkw1TcVmVnUlZQppdU2iYpXDKKrv6PM6UyVVirQr3ay7X3gsxzgKzqJRx9vhr6sdvuIwuFvNMU2dJcppH5xN6A7OAAs2%2FvwPSJyLPYotFT5scwMbnJteL3dGFvaQ5bCiiBt81jj6z%2BAeZgL%2FtxlarJ3e61GGNWKU5e%2Bfz5DliIp7gFhgs%2B01ufDgVDmYcXihivOeWxthDelYe5Ud%2BvqwbwXfmFPm%2BluCw8oRaH1LFVxQPUqE%2FVseSImsZVOAJN2WkYDSlko1eksMH0kL36ENPDWeFOwe2Oq2lZWJUZ%2F6PYR%2B5FxifOUFcIw7rk4emjRB2pcU8MT4cJbyckKH75JM8eti4UKl6zRzc%2FvPl%2FJfoiYpILaJOGqCRatMXpBfLhNo6j8FCLyFMXKDu%2BH%2F8CDRX6KicaCRxDIdoQiPim3IMyb0m%2Fvww6Wl5m8XfzXgVrDW9FD3JwIeXJXNE7fBrCDTmED83aUSiFWdSEZirTqD1TjVsYUOgdWVVqzh4dGNOyGEKLFQaJsmUGBz82tNEsXQBA%2BVJ%2B9r6TQhi7wHyBc0dMNnA878GOqUBadMbushhquwEdK3dk2YGOZXvAg67BUlDhwa%2BTLihs5kPFshWI846Lm5fROqEUwjRMRIo44gHcqBrHhT%2B92XYYKANnzUmic3MgR9LYLOw65maH9xziLRLHEelmZ%2FPSJQmflsRTdWXUqVtFw77xFs6w8AOT%2FAvSty5WC15IbwF25uASm1dnlcQ4zibHECUH7DpnPktmpNMwhyW70pacuQN7329fGKf&X-Amz-Signature=72d03247f1a139f6748568fe696e0243c0d39145369b509af595c56db324e28a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ5RWYDD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC2O0tbZUfAs0MzCwXNBjhA2nJloYaASijk0EbhFlsuAiEAja8PH1Y8LODmoCuoLGGpSgjLnat9wCEfj7eUlfGLqe8q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHvw3zMMjmQN9Y0ilircA4fN3tKD0MH6z5PbMhBbLt%2BiAgRz9rCe5RRgUyjchhwHXtawt5O9x0E%2FjjJgWQ1YCQQO3fh6SWJxcISMi2QIkw1TcVmVnUlZQppdU2iYpXDKKrv6PM6UyVVirQr3ay7X3gsxzgKzqJRx9vhr6sdvuIwuFvNMU2dJcppH5xN6A7OAAs2%2FvwPSJyLPYotFT5scwMbnJteL3dGFvaQ5bCiiBt81jj6z%2BAeZgL%2FtxlarJ3e61GGNWKU5e%2Bfz5DliIp7gFhgs%2B01ufDgVDmYcXihivOeWxthDelYe5Ud%2BvqwbwXfmFPm%2BluCw8oRaH1LFVxQPUqE%2FVseSImsZVOAJN2WkYDSlko1eksMH0kL36ENPDWeFOwe2Oq2lZWJUZ%2F6PYR%2B5FxifOUFcIw7rk4emjRB2pcU8MT4cJbyckKH75JM8eti4UKl6zRzc%2FvPl%2FJfoiYpILaJOGqCRatMXpBfLhNo6j8FCLyFMXKDu%2BH%2F8CDRX6KicaCRxDIdoQiPim3IMyb0m%2Fvww6Wl5m8XfzXgVrDW9FD3JwIeXJXNE7fBrCDTmED83aUSiFWdSEZirTqD1TjVsYUOgdWVVqzh4dGNOyGEKLFQaJsmUGBz82tNEsXQBA%2BVJ%2B9r6TQhi7wHyBc0dMNnA878GOqUBadMbushhquwEdK3dk2YGOZXvAg67BUlDhwa%2BTLihs5kPFshWI846Lm5fROqEUwjRMRIo44gHcqBrHhT%2B92XYYKANnzUmic3MgR9LYLOw65maH9xziLRLHEelmZ%2FPSJQmflsRTdWXUqVtFw77xFs6w8AOT%2FAvSty5WC15IbwF25uASm1dnlcQ4zibHECUH7DpnPktmpNMwhyW70pacuQN7329fGKf&X-Amz-Signature=21b0c8c24fc31e88cdb6ba8975abfc0c2341f1ce3ee7205dbfa75cfb0181d8b6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ5RWYDD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC2O0tbZUfAs0MzCwXNBjhA2nJloYaASijk0EbhFlsuAiEAja8PH1Y8LODmoCuoLGGpSgjLnat9wCEfj7eUlfGLqe8q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHvw3zMMjmQN9Y0ilircA4fN3tKD0MH6z5PbMhBbLt%2BiAgRz9rCe5RRgUyjchhwHXtawt5O9x0E%2FjjJgWQ1YCQQO3fh6SWJxcISMi2QIkw1TcVmVnUlZQppdU2iYpXDKKrv6PM6UyVVirQr3ay7X3gsxzgKzqJRx9vhr6sdvuIwuFvNMU2dJcppH5xN6A7OAAs2%2FvwPSJyLPYotFT5scwMbnJteL3dGFvaQ5bCiiBt81jj6z%2BAeZgL%2FtxlarJ3e61GGNWKU5e%2Bfz5DliIp7gFhgs%2B01ufDgVDmYcXihivOeWxthDelYe5Ud%2BvqwbwXfmFPm%2BluCw8oRaH1LFVxQPUqE%2FVseSImsZVOAJN2WkYDSlko1eksMH0kL36ENPDWeFOwe2Oq2lZWJUZ%2F6PYR%2B5FxifOUFcIw7rk4emjRB2pcU8MT4cJbyckKH75JM8eti4UKl6zRzc%2FvPl%2FJfoiYpILaJOGqCRatMXpBfLhNo6j8FCLyFMXKDu%2BH%2F8CDRX6KicaCRxDIdoQiPim3IMyb0m%2Fvww6Wl5m8XfzXgVrDW9FD3JwIeXJXNE7fBrCDTmED83aUSiFWdSEZirTqD1TjVsYUOgdWVVqzh4dGNOyGEKLFQaJsmUGBz82tNEsXQBA%2BVJ%2B9r6TQhi7wHyBc0dMNnA878GOqUBadMbushhquwEdK3dk2YGOZXvAg67BUlDhwa%2BTLihs5kPFshWI846Lm5fROqEUwjRMRIo44gHcqBrHhT%2B92XYYKANnzUmic3MgR9LYLOw65maH9xziLRLHEelmZ%2FPSJQmflsRTdWXUqVtFw77xFs6w8AOT%2FAvSty5WC15IbwF25uASm1dnlcQ4zibHECUH7DpnPktmpNMwhyW70pacuQN7329fGKf&X-Amz-Signature=b8a9067488f372b750942c85719a17fbe405c21c36a0b82e148109139735a1fb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ5RWYDD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC2O0tbZUfAs0MzCwXNBjhA2nJloYaASijk0EbhFlsuAiEAja8PH1Y8LODmoCuoLGGpSgjLnat9wCEfj7eUlfGLqe8q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHvw3zMMjmQN9Y0ilircA4fN3tKD0MH6z5PbMhBbLt%2BiAgRz9rCe5RRgUyjchhwHXtawt5O9x0E%2FjjJgWQ1YCQQO3fh6SWJxcISMi2QIkw1TcVmVnUlZQppdU2iYpXDKKrv6PM6UyVVirQr3ay7X3gsxzgKzqJRx9vhr6sdvuIwuFvNMU2dJcppH5xN6A7OAAs2%2FvwPSJyLPYotFT5scwMbnJteL3dGFvaQ5bCiiBt81jj6z%2BAeZgL%2FtxlarJ3e61GGNWKU5e%2Bfz5DliIp7gFhgs%2B01ufDgVDmYcXihivOeWxthDelYe5Ud%2BvqwbwXfmFPm%2BluCw8oRaH1LFVxQPUqE%2FVseSImsZVOAJN2WkYDSlko1eksMH0kL36ENPDWeFOwe2Oq2lZWJUZ%2F6PYR%2B5FxifOUFcIw7rk4emjRB2pcU8MT4cJbyckKH75JM8eti4UKl6zRzc%2FvPl%2FJfoiYpILaJOGqCRatMXpBfLhNo6j8FCLyFMXKDu%2BH%2F8CDRX6KicaCRxDIdoQiPim3IMyb0m%2Fvww6Wl5m8XfzXgVrDW9FD3JwIeXJXNE7fBrCDTmED83aUSiFWdSEZirTqD1TjVsYUOgdWVVqzh4dGNOyGEKLFQaJsmUGBz82tNEsXQBA%2BVJ%2B9r6TQhi7wHyBc0dMNnA878GOqUBadMbushhquwEdK3dk2YGOZXvAg67BUlDhwa%2BTLihs5kPFshWI846Lm5fROqEUwjRMRIo44gHcqBrHhT%2B92XYYKANnzUmic3MgR9LYLOw65maH9xziLRLHEelmZ%2FPSJQmflsRTdWXUqVtFw77xFs6w8AOT%2FAvSty5WC15IbwF25uASm1dnlcQ4zibHECUH7DpnPktmpNMwhyW70pacuQN7329fGKf&X-Amz-Signature=9986baf2aa30168c6d3e5c54f19df8e0c6679241bbcc6ca81fd5e9a3d949470c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ5RWYDD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC2O0tbZUfAs0MzCwXNBjhA2nJloYaASijk0EbhFlsuAiEAja8PH1Y8LODmoCuoLGGpSgjLnat9wCEfj7eUlfGLqe8q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHvw3zMMjmQN9Y0ilircA4fN3tKD0MH6z5PbMhBbLt%2BiAgRz9rCe5RRgUyjchhwHXtawt5O9x0E%2FjjJgWQ1YCQQO3fh6SWJxcISMi2QIkw1TcVmVnUlZQppdU2iYpXDKKrv6PM6UyVVirQr3ay7X3gsxzgKzqJRx9vhr6sdvuIwuFvNMU2dJcppH5xN6A7OAAs2%2FvwPSJyLPYotFT5scwMbnJteL3dGFvaQ5bCiiBt81jj6z%2BAeZgL%2FtxlarJ3e61GGNWKU5e%2Bfz5DliIp7gFhgs%2B01ufDgVDmYcXihivOeWxthDelYe5Ud%2BvqwbwXfmFPm%2BluCw8oRaH1LFVxQPUqE%2FVseSImsZVOAJN2WkYDSlko1eksMH0kL36ENPDWeFOwe2Oq2lZWJUZ%2F6PYR%2B5FxifOUFcIw7rk4emjRB2pcU8MT4cJbyckKH75JM8eti4UKl6zRzc%2FvPl%2FJfoiYpILaJOGqCRatMXpBfLhNo6j8FCLyFMXKDu%2BH%2F8CDRX6KicaCRxDIdoQiPim3IMyb0m%2Fvww6Wl5m8XfzXgVrDW9FD3JwIeXJXNE7fBrCDTmED83aUSiFWdSEZirTqD1TjVsYUOgdWVVqzh4dGNOyGEKLFQaJsmUGBz82tNEsXQBA%2BVJ%2B9r6TQhi7wHyBc0dMNnA878GOqUBadMbushhquwEdK3dk2YGOZXvAg67BUlDhwa%2BTLihs5kPFshWI846Lm5fROqEUwjRMRIo44gHcqBrHhT%2B92XYYKANnzUmic3MgR9LYLOw65maH9xziLRLHEelmZ%2FPSJQmflsRTdWXUqVtFw77xFs6w8AOT%2FAvSty5WC15IbwF25uASm1dnlcQ4zibHECUH7DpnPktmpNMwhyW70pacuQN7329fGKf&X-Amz-Signature=b5811842ed1d8a256d2a5d3a64397a2e191721c43b17b6baccce6c3bf1450caf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
