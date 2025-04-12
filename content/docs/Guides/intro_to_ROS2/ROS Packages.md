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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YN43XVP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDpw9%2BIp2TgEatJHg0RGRAGDJ0JVczTGIBmunYConDfZAiAMbd51KKo8xzdhET55%2BXoF8zBgj%2BUuKoNIXhXT4ErH9CqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6FUK3LGqyiqHvh0%2BKtwD%2FoPIHDsWE4g0t8zY6%2BUy9gKLH%2BZ42YH3DBgJRTJqk5v2EsGpmBKL5D2vhm%2BxwtyyuoiiPwRj1iBWaCMI5SpT6FPUXYgSLaxLyheJw8HB3HvtZB3Na6VLKFSbFyq%2FHVt6becawe42LMQy0%2BIrN3jUmGWsu0s2uV2v52tTwZVpNitr5HigCb73YxAABcUdnOlyBslMrCYk36qmTjOd%2BYRCxjHM%2B2mvpIUm01HTbpXU0GH%2FvbZtUMe8gsHAAzoJNyKXXh5Bp82veQNyOF%2FG4Us97uVfYZ1RQDBC%2Fjer%2Fx8o7md6HSbYxMMsvL6dIe%2ByCEcnVmEaUhLUTn76DkevfSevdVLIlLcH6AgbYlpQbiQH6uv7y68zo2XACytyASwoX3y6N9T8RwvICFvq7rdtSI2gkZThEMkl4TTIvjY%2Bbs%2BVhaTEcaOghq1IS8Cm%2BrytYy9zEQDyaO8rkigTGERem%2FLkikROFYXZ6eQLNvfOcwKEk7Ab8mqKEDQWJ2gRhououJpUEHvsrj884qxb7Z0jkjwsjsaS0t5SXyWf5GzdQBrD%2BOeAI4Obq13PxmdHLulefbPRNaMTHe%2FNQsZJd0fC61A6unVlAEupABEefOQdxwAUNalYN2bLVW9eODC0P6UwrqfovwY6pgFPqZtT5A6PgeJUV%2FZ2%2FuKvk2KfgUL6SmWYx1%2F2YHRpqJQ5cLczV%2FFSwc%2B0DZUDl5LJN%2FkQDvV0DGFw4a9uAWGmjN2nTqiWx4kLU3%2FhuKati57cv3eGpCo1oqk82rjxdPN7ROawycl0Pk5a2sazwz73%2FgZX01DMGkiy8dAmsBAgGbCwhTcrS4TS8d0Oqiz4Cdwi6qx8JxLW8S0sZ7NlYExZJffoZdr%2B&X-Amz-Signature=33e12cb623e88928e97a9666c1f88aae9dfe712bfbaafe185e87d0bda0f0d29a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YN43XVP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDpw9%2BIp2TgEatJHg0RGRAGDJ0JVczTGIBmunYConDfZAiAMbd51KKo8xzdhET55%2BXoF8zBgj%2BUuKoNIXhXT4ErH9CqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6FUK3LGqyiqHvh0%2BKtwD%2FoPIHDsWE4g0t8zY6%2BUy9gKLH%2BZ42YH3DBgJRTJqk5v2EsGpmBKL5D2vhm%2BxwtyyuoiiPwRj1iBWaCMI5SpT6FPUXYgSLaxLyheJw8HB3HvtZB3Na6VLKFSbFyq%2FHVt6becawe42LMQy0%2BIrN3jUmGWsu0s2uV2v52tTwZVpNitr5HigCb73YxAABcUdnOlyBslMrCYk36qmTjOd%2BYRCxjHM%2B2mvpIUm01HTbpXU0GH%2FvbZtUMe8gsHAAzoJNyKXXh5Bp82veQNyOF%2FG4Us97uVfYZ1RQDBC%2Fjer%2Fx8o7md6HSbYxMMsvL6dIe%2ByCEcnVmEaUhLUTn76DkevfSevdVLIlLcH6AgbYlpQbiQH6uv7y68zo2XACytyASwoX3y6N9T8RwvICFvq7rdtSI2gkZThEMkl4TTIvjY%2Bbs%2BVhaTEcaOghq1IS8Cm%2BrytYy9zEQDyaO8rkigTGERem%2FLkikROFYXZ6eQLNvfOcwKEk7Ab8mqKEDQWJ2gRhououJpUEHvsrj884qxb7Z0jkjwsjsaS0t5SXyWf5GzdQBrD%2BOeAI4Obq13PxmdHLulefbPRNaMTHe%2FNQsZJd0fC61A6unVlAEupABEefOQdxwAUNalYN2bLVW9eODC0P6UwrqfovwY6pgFPqZtT5A6PgeJUV%2FZ2%2FuKvk2KfgUL6SmWYx1%2F2YHRpqJQ5cLczV%2FFSwc%2B0DZUDl5LJN%2FkQDvV0DGFw4a9uAWGmjN2nTqiWx4kLU3%2FhuKati57cv3eGpCo1oqk82rjxdPN7ROawycl0Pk5a2sazwz73%2FgZX01DMGkiy8dAmsBAgGbCwhTcrS4TS8d0Oqiz4Cdwi6qx8JxLW8S0sZ7NlYExZJffoZdr%2B&X-Amz-Signature=f5aa5baa2340e5ed0ac9f57373a1fe70b0e098b6e8dc23de6d04f3022c4de75b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YN43XVP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDpw9%2BIp2TgEatJHg0RGRAGDJ0JVczTGIBmunYConDfZAiAMbd51KKo8xzdhET55%2BXoF8zBgj%2BUuKoNIXhXT4ErH9CqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6FUK3LGqyiqHvh0%2BKtwD%2FoPIHDsWE4g0t8zY6%2BUy9gKLH%2BZ42YH3DBgJRTJqk5v2EsGpmBKL5D2vhm%2BxwtyyuoiiPwRj1iBWaCMI5SpT6FPUXYgSLaxLyheJw8HB3HvtZB3Na6VLKFSbFyq%2FHVt6becawe42LMQy0%2BIrN3jUmGWsu0s2uV2v52tTwZVpNitr5HigCb73YxAABcUdnOlyBslMrCYk36qmTjOd%2BYRCxjHM%2B2mvpIUm01HTbpXU0GH%2FvbZtUMe8gsHAAzoJNyKXXh5Bp82veQNyOF%2FG4Us97uVfYZ1RQDBC%2Fjer%2Fx8o7md6HSbYxMMsvL6dIe%2ByCEcnVmEaUhLUTn76DkevfSevdVLIlLcH6AgbYlpQbiQH6uv7y68zo2XACytyASwoX3y6N9T8RwvICFvq7rdtSI2gkZThEMkl4TTIvjY%2Bbs%2BVhaTEcaOghq1IS8Cm%2BrytYy9zEQDyaO8rkigTGERem%2FLkikROFYXZ6eQLNvfOcwKEk7Ab8mqKEDQWJ2gRhououJpUEHvsrj884qxb7Z0jkjwsjsaS0t5SXyWf5GzdQBrD%2BOeAI4Obq13PxmdHLulefbPRNaMTHe%2FNQsZJd0fC61A6unVlAEupABEefOQdxwAUNalYN2bLVW9eODC0P6UwrqfovwY6pgFPqZtT5A6PgeJUV%2FZ2%2FuKvk2KfgUL6SmWYx1%2F2YHRpqJQ5cLczV%2FFSwc%2B0DZUDl5LJN%2FkQDvV0DGFw4a9uAWGmjN2nTqiWx4kLU3%2FhuKati57cv3eGpCo1oqk82rjxdPN7ROawycl0Pk5a2sazwz73%2FgZX01DMGkiy8dAmsBAgGbCwhTcrS4TS8d0Oqiz4Cdwi6qx8JxLW8S0sZ7NlYExZJffoZdr%2B&X-Amz-Signature=4df4a3667b4f588d4a072683db4b271de2df9463943c9256b60330166a317857&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YN43XVP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDpw9%2BIp2TgEatJHg0RGRAGDJ0JVczTGIBmunYConDfZAiAMbd51KKo8xzdhET55%2BXoF8zBgj%2BUuKoNIXhXT4ErH9CqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6FUK3LGqyiqHvh0%2BKtwD%2FoPIHDsWE4g0t8zY6%2BUy9gKLH%2BZ42YH3DBgJRTJqk5v2EsGpmBKL5D2vhm%2BxwtyyuoiiPwRj1iBWaCMI5SpT6FPUXYgSLaxLyheJw8HB3HvtZB3Na6VLKFSbFyq%2FHVt6becawe42LMQy0%2BIrN3jUmGWsu0s2uV2v52tTwZVpNitr5HigCb73YxAABcUdnOlyBslMrCYk36qmTjOd%2BYRCxjHM%2B2mvpIUm01HTbpXU0GH%2FvbZtUMe8gsHAAzoJNyKXXh5Bp82veQNyOF%2FG4Us97uVfYZ1RQDBC%2Fjer%2Fx8o7md6HSbYxMMsvL6dIe%2ByCEcnVmEaUhLUTn76DkevfSevdVLIlLcH6AgbYlpQbiQH6uv7y68zo2XACytyASwoX3y6N9T8RwvICFvq7rdtSI2gkZThEMkl4TTIvjY%2Bbs%2BVhaTEcaOghq1IS8Cm%2BrytYy9zEQDyaO8rkigTGERem%2FLkikROFYXZ6eQLNvfOcwKEk7Ab8mqKEDQWJ2gRhououJpUEHvsrj884qxb7Z0jkjwsjsaS0t5SXyWf5GzdQBrD%2BOeAI4Obq13PxmdHLulefbPRNaMTHe%2FNQsZJd0fC61A6unVlAEupABEefOQdxwAUNalYN2bLVW9eODC0P6UwrqfovwY6pgFPqZtT5A6PgeJUV%2FZ2%2FuKvk2KfgUL6SmWYx1%2F2YHRpqJQ5cLczV%2FFSwc%2B0DZUDl5LJN%2FkQDvV0DGFw4a9uAWGmjN2nTqiWx4kLU3%2FhuKati57cv3eGpCo1oqk82rjxdPN7ROawycl0Pk5a2sazwz73%2FgZX01DMGkiy8dAmsBAgGbCwhTcrS4TS8d0Oqiz4Cdwi6qx8JxLW8S0sZ7NlYExZJffoZdr%2B&X-Amz-Signature=f056a69dba665c40f8d779bd13b68a7d73e84e6004a27c4ee2027fa42186df00&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YN43XVP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDpw9%2BIp2TgEatJHg0RGRAGDJ0JVczTGIBmunYConDfZAiAMbd51KKo8xzdhET55%2BXoF8zBgj%2BUuKoNIXhXT4ErH9CqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6FUK3LGqyiqHvh0%2BKtwD%2FoPIHDsWE4g0t8zY6%2BUy9gKLH%2BZ42YH3DBgJRTJqk5v2EsGpmBKL5D2vhm%2BxwtyyuoiiPwRj1iBWaCMI5SpT6FPUXYgSLaxLyheJw8HB3HvtZB3Na6VLKFSbFyq%2FHVt6becawe42LMQy0%2BIrN3jUmGWsu0s2uV2v52tTwZVpNitr5HigCb73YxAABcUdnOlyBslMrCYk36qmTjOd%2BYRCxjHM%2B2mvpIUm01HTbpXU0GH%2FvbZtUMe8gsHAAzoJNyKXXh5Bp82veQNyOF%2FG4Us97uVfYZ1RQDBC%2Fjer%2Fx8o7md6HSbYxMMsvL6dIe%2ByCEcnVmEaUhLUTn76DkevfSevdVLIlLcH6AgbYlpQbiQH6uv7y68zo2XACytyASwoX3y6N9T8RwvICFvq7rdtSI2gkZThEMkl4TTIvjY%2Bbs%2BVhaTEcaOghq1IS8Cm%2BrytYy9zEQDyaO8rkigTGERem%2FLkikROFYXZ6eQLNvfOcwKEk7Ab8mqKEDQWJ2gRhououJpUEHvsrj884qxb7Z0jkjwsjsaS0t5SXyWf5GzdQBrD%2BOeAI4Obq13PxmdHLulefbPRNaMTHe%2FNQsZJd0fC61A6unVlAEupABEefOQdxwAUNalYN2bLVW9eODC0P6UwrqfovwY6pgFPqZtT5A6PgeJUV%2FZ2%2FuKvk2KfgUL6SmWYx1%2F2YHRpqJQ5cLczV%2FFSwc%2B0DZUDl5LJN%2FkQDvV0DGFw4a9uAWGmjN2nTqiWx4kLU3%2FhuKati57cv3eGpCo1oqk82rjxdPN7ROawycl0Pk5a2sazwz73%2FgZX01DMGkiy8dAmsBAgGbCwhTcrS4TS8d0Oqiz4Cdwi6qx8JxLW8S0sZ7NlYExZJffoZdr%2B&X-Amz-Signature=ebfb12e3e3ac5345d1f1cb4371836524acaf7eed236b05a36ab70c0573c2fab7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YN43XVP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDpw9%2BIp2TgEatJHg0RGRAGDJ0JVczTGIBmunYConDfZAiAMbd51KKo8xzdhET55%2BXoF8zBgj%2BUuKoNIXhXT4ErH9CqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6FUK3LGqyiqHvh0%2BKtwD%2FoPIHDsWE4g0t8zY6%2BUy9gKLH%2BZ42YH3DBgJRTJqk5v2EsGpmBKL5D2vhm%2BxwtyyuoiiPwRj1iBWaCMI5SpT6FPUXYgSLaxLyheJw8HB3HvtZB3Na6VLKFSbFyq%2FHVt6becawe42LMQy0%2BIrN3jUmGWsu0s2uV2v52tTwZVpNitr5HigCb73YxAABcUdnOlyBslMrCYk36qmTjOd%2BYRCxjHM%2B2mvpIUm01HTbpXU0GH%2FvbZtUMe8gsHAAzoJNyKXXh5Bp82veQNyOF%2FG4Us97uVfYZ1RQDBC%2Fjer%2Fx8o7md6HSbYxMMsvL6dIe%2ByCEcnVmEaUhLUTn76DkevfSevdVLIlLcH6AgbYlpQbiQH6uv7y68zo2XACytyASwoX3y6N9T8RwvICFvq7rdtSI2gkZThEMkl4TTIvjY%2Bbs%2BVhaTEcaOghq1IS8Cm%2BrytYy9zEQDyaO8rkigTGERem%2FLkikROFYXZ6eQLNvfOcwKEk7Ab8mqKEDQWJ2gRhououJpUEHvsrj884qxb7Z0jkjwsjsaS0t5SXyWf5GzdQBrD%2BOeAI4Obq13PxmdHLulefbPRNaMTHe%2FNQsZJd0fC61A6unVlAEupABEefOQdxwAUNalYN2bLVW9eODC0P6UwrqfovwY6pgFPqZtT5A6PgeJUV%2FZ2%2FuKvk2KfgUL6SmWYx1%2F2YHRpqJQ5cLczV%2FFSwc%2B0DZUDl5LJN%2FkQDvV0DGFw4a9uAWGmjN2nTqiWx4kLU3%2FhuKati57cv3eGpCo1oqk82rjxdPN7ROawycl0Pk5a2sazwz73%2FgZX01DMGkiy8dAmsBAgGbCwhTcrS4TS8d0Oqiz4Cdwi6qx8JxLW8S0sZ7NlYExZJffoZdr%2B&X-Amz-Signature=2e06825d28dcab81fb82a7c82aaa5bc2c87ee8b97ed2ac3035e251582ec58126&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YN43XVP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDpw9%2BIp2TgEatJHg0RGRAGDJ0JVczTGIBmunYConDfZAiAMbd51KKo8xzdhET55%2BXoF8zBgj%2BUuKoNIXhXT4ErH9CqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6FUK3LGqyiqHvh0%2BKtwD%2FoPIHDsWE4g0t8zY6%2BUy9gKLH%2BZ42YH3DBgJRTJqk5v2EsGpmBKL5D2vhm%2BxwtyyuoiiPwRj1iBWaCMI5SpT6FPUXYgSLaxLyheJw8HB3HvtZB3Na6VLKFSbFyq%2FHVt6becawe42LMQy0%2BIrN3jUmGWsu0s2uV2v52tTwZVpNitr5HigCb73YxAABcUdnOlyBslMrCYk36qmTjOd%2BYRCxjHM%2B2mvpIUm01HTbpXU0GH%2FvbZtUMe8gsHAAzoJNyKXXh5Bp82veQNyOF%2FG4Us97uVfYZ1RQDBC%2Fjer%2Fx8o7md6HSbYxMMsvL6dIe%2ByCEcnVmEaUhLUTn76DkevfSevdVLIlLcH6AgbYlpQbiQH6uv7y68zo2XACytyASwoX3y6N9T8RwvICFvq7rdtSI2gkZThEMkl4TTIvjY%2Bbs%2BVhaTEcaOghq1IS8Cm%2BrytYy9zEQDyaO8rkigTGERem%2FLkikROFYXZ6eQLNvfOcwKEk7Ab8mqKEDQWJ2gRhououJpUEHvsrj884qxb7Z0jkjwsjsaS0t5SXyWf5GzdQBrD%2BOeAI4Obq13PxmdHLulefbPRNaMTHe%2FNQsZJd0fC61A6unVlAEupABEefOQdxwAUNalYN2bLVW9eODC0P6UwrqfovwY6pgFPqZtT5A6PgeJUV%2FZ2%2FuKvk2KfgUL6SmWYx1%2F2YHRpqJQ5cLczV%2FFSwc%2B0DZUDl5LJN%2FkQDvV0DGFw4a9uAWGmjN2nTqiWx4kLU3%2FhuKati57cv3eGpCo1oqk82rjxdPN7ROawycl0Pk5a2sazwz73%2FgZX01DMGkiy8dAmsBAgGbCwhTcrS4TS8d0Oqiz4Cdwi6qx8JxLW8S0sZ7NlYExZJffoZdr%2B&X-Amz-Signature=b0c69b0cfac59ad138c7fbf030b4275b651bd20e7caa22502b6763d39ab1a54f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
