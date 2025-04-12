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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3YKD3HM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCWecm1R6d5WRWekbFM2fefPxGf8wq5%2BBowQvbBj5H3sQIgYh%2BWpGfdjTR73hqPo0nCgwMEM1Al5H9DeORj6I69RckqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Fq28usE0QhcTxd8CrcA7xBc0e%2F98BGNngCCwBJizCtRI6fP3vZg%2Fe%2FCMuCJXyuvmJjbqaBmzwDKWb1lLgrY3AIG6Wp9jM8sxvVOlrnmB8NTEFN%2BivrIxKO4CixmFp0IuNTMPeerUZM7xDpWqx3X%2FvqqP%2BUZ8UxtXV%2BlV%2FCSSt9TnXqH%2BHgmkEyQFp8HRaEtoXl7p54g5FEknQ08p69pHK6%2F1P98ifwcC5q%2FbM%2FFWgefDfg9ZQp1QYYsowhgOba%2FDXPB3%2B6vIXJo1pGTjzapLbJnWneZlePbj035IOJgvoOD%2F7Ne0xkPoVWHscaozObbmM6ZiDpoxFdwnjf4rkdfDQqJz9i6I5mzjGpeRsMWtNMDtjYrCyJ2e0%2BIf2xzZORccrgqXnlVcIsUe%2FxXS16nbUfft1RV%2BcuEDd%2FhDT9qXRr9k26VDfQ6ergSwQ1FKhofQzXBCB%2BLyq1XCQW7F5QhUcm48OKYWKWe77I4jIc%2Bo1OyFekpbyv6tHcPCkSkxuI5ehwmdfWvhItNaHd3PzctorGbHK%2FShayHM2QOA8P7%2B2juYlStTq6QWZgbmUO7sy4d3lP%2BLtVbd2kHjmz5XIyv24rTbK%2FSgxpEKZoLAxXjuzcUWJ%2FBsUMdnK7emRk%2F3sHKyPM9FWmeZeVCxyWMJio6L8GOqUBNUPMuH6ATTmniYcZ9IgADd%2B2CyAFdY1vst90zUdEX%2Ba6Kd6TNKuiZL37J36NSBzh9CaWkscnUZ9MRVWO5uqbKw61ivS5QY%2B1PWgbd%2FL3qpocp0csZ7TiTy8AolP3CTXqybkLrR33t7TmbUoDz6ERbrX7l9Ke9Ri4RkElqs%2Br7r7UaZF%2FiI0OYWpcHaszfHQ1Nhih%2F66Xx5N1XMXSa3%2F0yVmKdgfJ&X-Amz-Signature=ec16a8d8b6f4658beea6988fa58fde8ff7d3d9284593730bbcf81a3637577079&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3YKD3HM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCWecm1R6d5WRWekbFM2fefPxGf8wq5%2BBowQvbBj5H3sQIgYh%2BWpGfdjTR73hqPo0nCgwMEM1Al5H9DeORj6I69RckqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Fq28usE0QhcTxd8CrcA7xBc0e%2F98BGNngCCwBJizCtRI6fP3vZg%2Fe%2FCMuCJXyuvmJjbqaBmzwDKWb1lLgrY3AIG6Wp9jM8sxvVOlrnmB8NTEFN%2BivrIxKO4CixmFp0IuNTMPeerUZM7xDpWqx3X%2FvqqP%2BUZ8UxtXV%2BlV%2FCSSt9TnXqH%2BHgmkEyQFp8HRaEtoXl7p54g5FEknQ08p69pHK6%2F1P98ifwcC5q%2FbM%2FFWgefDfg9ZQp1QYYsowhgOba%2FDXPB3%2B6vIXJo1pGTjzapLbJnWneZlePbj035IOJgvoOD%2F7Ne0xkPoVWHscaozObbmM6ZiDpoxFdwnjf4rkdfDQqJz9i6I5mzjGpeRsMWtNMDtjYrCyJ2e0%2BIf2xzZORccrgqXnlVcIsUe%2FxXS16nbUfft1RV%2BcuEDd%2FhDT9qXRr9k26VDfQ6ergSwQ1FKhofQzXBCB%2BLyq1XCQW7F5QhUcm48OKYWKWe77I4jIc%2Bo1OyFekpbyv6tHcPCkSkxuI5ehwmdfWvhItNaHd3PzctorGbHK%2FShayHM2QOA8P7%2B2juYlStTq6QWZgbmUO7sy4d3lP%2BLtVbd2kHjmz5XIyv24rTbK%2FSgxpEKZoLAxXjuzcUWJ%2FBsUMdnK7emRk%2F3sHKyPM9FWmeZeVCxyWMJio6L8GOqUBNUPMuH6ATTmniYcZ9IgADd%2B2CyAFdY1vst90zUdEX%2Ba6Kd6TNKuiZL37J36NSBzh9CaWkscnUZ9MRVWO5uqbKw61ivS5QY%2B1PWgbd%2FL3qpocp0csZ7TiTy8AolP3CTXqybkLrR33t7TmbUoDz6ERbrX7l9Ke9Ri4RkElqs%2Br7r7UaZF%2FiI0OYWpcHaszfHQ1Nhih%2F66Xx5N1XMXSa3%2F0yVmKdgfJ&X-Amz-Signature=fa44cb1eb25a012b98e7520d6f70f0ef8464ff083e9969c1d2787455120b49b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3YKD3HM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCWecm1R6d5WRWekbFM2fefPxGf8wq5%2BBowQvbBj5H3sQIgYh%2BWpGfdjTR73hqPo0nCgwMEM1Al5H9DeORj6I69RckqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Fq28usE0QhcTxd8CrcA7xBc0e%2F98BGNngCCwBJizCtRI6fP3vZg%2Fe%2FCMuCJXyuvmJjbqaBmzwDKWb1lLgrY3AIG6Wp9jM8sxvVOlrnmB8NTEFN%2BivrIxKO4CixmFp0IuNTMPeerUZM7xDpWqx3X%2FvqqP%2BUZ8UxtXV%2BlV%2FCSSt9TnXqH%2BHgmkEyQFp8HRaEtoXl7p54g5FEknQ08p69pHK6%2F1P98ifwcC5q%2FbM%2FFWgefDfg9ZQp1QYYsowhgOba%2FDXPB3%2B6vIXJo1pGTjzapLbJnWneZlePbj035IOJgvoOD%2F7Ne0xkPoVWHscaozObbmM6ZiDpoxFdwnjf4rkdfDQqJz9i6I5mzjGpeRsMWtNMDtjYrCyJ2e0%2BIf2xzZORccrgqXnlVcIsUe%2FxXS16nbUfft1RV%2BcuEDd%2FhDT9qXRr9k26VDfQ6ergSwQ1FKhofQzXBCB%2BLyq1XCQW7F5QhUcm48OKYWKWe77I4jIc%2Bo1OyFekpbyv6tHcPCkSkxuI5ehwmdfWvhItNaHd3PzctorGbHK%2FShayHM2QOA8P7%2B2juYlStTq6QWZgbmUO7sy4d3lP%2BLtVbd2kHjmz5XIyv24rTbK%2FSgxpEKZoLAxXjuzcUWJ%2FBsUMdnK7emRk%2F3sHKyPM9FWmeZeVCxyWMJio6L8GOqUBNUPMuH6ATTmniYcZ9IgADd%2B2CyAFdY1vst90zUdEX%2Ba6Kd6TNKuiZL37J36NSBzh9CaWkscnUZ9MRVWO5uqbKw61ivS5QY%2B1PWgbd%2FL3qpocp0csZ7TiTy8AolP3CTXqybkLrR33t7TmbUoDz6ERbrX7l9Ke9Ri4RkElqs%2Br7r7UaZF%2FiI0OYWpcHaszfHQ1Nhih%2F66Xx5N1XMXSa3%2F0yVmKdgfJ&X-Amz-Signature=020c3bcd64854df03c78a303b163abab1d178629e12cbe73f94b32152cccf481&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3YKD3HM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCWecm1R6d5WRWekbFM2fefPxGf8wq5%2BBowQvbBj5H3sQIgYh%2BWpGfdjTR73hqPo0nCgwMEM1Al5H9DeORj6I69RckqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Fq28usE0QhcTxd8CrcA7xBc0e%2F98BGNngCCwBJizCtRI6fP3vZg%2Fe%2FCMuCJXyuvmJjbqaBmzwDKWb1lLgrY3AIG6Wp9jM8sxvVOlrnmB8NTEFN%2BivrIxKO4CixmFp0IuNTMPeerUZM7xDpWqx3X%2FvqqP%2BUZ8UxtXV%2BlV%2FCSSt9TnXqH%2BHgmkEyQFp8HRaEtoXl7p54g5FEknQ08p69pHK6%2F1P98ifwcC5q%2FbM%2FFWgefDfg9ZQp1QYYsowhgOba%2FDXPB3%2B6vIXJo1pGTjzapLbJnWneZlePbj035IOJgvoOD%2F7Ne0xkPoVWHscaozObbmM6ZiDpoxFdwnjf4rkdfDQqJz9i6I5mzjGpeRsMWtNMDtjYrCyJ2e0%2BIf2xzZORccrgqXnlVcIsUe%2FxXS16nbUfft1RV%2BcuEDd%2FhDT9qXRr9k26VDfQ6ergSwQ1FKhofQzXBCB%2BLyq1XCQW7F5QhUcm48OKYWKWe77I4jIc%2Bo1OyFekpbyv6tHcPCkSkxuI5ehwmdfWvhItNaHd3PzctorGbHK%2FShayHM2QOA8P7%2B2juYlStTq6QWZgbmUO7sy4d3lP%2BLtVbd2kHjmz5XIyv24rTbK%2FSgxpEKZoLAxXjuzcUWJ%2FBsUMdnK7emRk%2F3sHKyPM9FWmeZeVCxyWMJio6L8GOqUBNUPMuH6ATTmniYcZ9IgADd%2B2CyAFdY1vst90zUdEX%2Ba6Kd6TNKuiZL37J36NSBzh9CaWkscnUZ9MRVWO5uqbKw61ivS5QY%2B1PWgbd%2FL3qpocp0csZ7TiTy8AolP3CTXqybkLrR33t7TmbUoDz6ERbrX7l9Ke9Ri4RkElqs%2Br7r7UaZF%2FiI0OYWpcHaszfHQ1Nhih%2F66Xx5N1XMXSa3%2F0yVmKdgfJ&X-Amz-Signature=2292692f9d8bbfb0115a231354ff1b643949652cbbe2c835055defff3d546cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3YKD3HM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCWecm1R6d5WRWekbFM2fefPxGf8wq5%2BBowQvbBj5H3sQIgYh%2BWpGfdjTR73hqPo0nCgwMEM1Al5H9DeORj6I69RckqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Fq28usE0QhcTxd8CrcA7xBc0e%2F98BGNngCCwBJizCtRI6fP3vZg%2Fe%2FCMuCJXyuvmJjbqaBmzwDKWb1lLgrY3AIG6Wp9jM8sxvVOlrnmB8NTEFN%2BivrIxKO4CixmFp0IuNTMPeerUZM7xDpWqx3X%2FvqqP%2BUZ8UxtXV%2BlV%2FCSSt9TnXqH%2BHgmkEyQFp8HRaEtoXl7p54g5FEknQ08p69pHK6%2F1P98ifwcC5q%2FbM%2FFWgefDfg9ZQp1QYYsowhgOba%2FDXPB3%2B6vIXJo1pGTjzapLbJnWneZlePbj035IOJgvoOD%2F7Ne0xkPoVWHscaozObbmM6ZiDpoxFdwnjf4rkdfDQqJz9i6I5mzjGpeRsMWtNMDtjYrCyJ2e0%2BIf2xzZORccrgqXnlVcIsUe%2FxXS16nbUfft1RV%2BcuEDd%2FhDT9qXRr9k26VDfQ6ergSwQ1FKhofQzXBCB%2BLyq1XCQW7F5QhUcm48OKYWKWe77I4jIc%2Bo1OyFekpbyv6tHcPCkSkxuI5ehwmdfWvhItNaHd3PzctorGbHK%2FShayHM2QOA8P7%2B2juYlStTq6QWZgbmUO7sy4d3lP%2BLtVbd2kHjmz5XIyv24rTbK%2FSgxpEKZoLAxXjuzcUWJ%2FBsUMdnK7emRk%2F3sHKyPM9FWmeZeVCxyWMJio6L8GOqUBNUPMuH6ATTmniYcZ9IgADd%2B2CyAFdY1vst90zUdEX%2Ba6Kd6TNKuiZL37J36NSBzh9CaWkscnUZ9MRVWO5uqbKw61ivS5QY%2B1PWgbd%2FL3qpocp0csZ7TiTy8AolP3CTXqybkLrR33t7TmbUoDz6ERbrX7l9Ke9Ri4RkElqs%2Br7r7UaZF%2FiI0OYWpcHaszfHQ1Nhih%2F66Xx5N1XMXSa3%2F0yVmKdgfJ&X-Amz-Signature=c32c0a869c749f93e95764e544c474e3a73ca0d6a31e8283904f9fe801715349&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3YKD3HM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCWecm1R6d5WRWekbFM2fefPxGf8wq5%2BBowQvbBj5H3sQIgYh%2BWpGfdjTR73hqPo0nCgwMEM1Al5H9DeORj6I69RckqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Fq28usE0QhcTxd8CrcA7xBc0e%2F98BGNngCCwBJizCtRI6fP3vZg%2Fe%2FCMuCJXyuvmJjbqaBmzwDKWb1lLgrY3AIG6Wp9jM8sxvVOlrnmB8NTEFN%2BivrIxKO4CixmFp0IuNTMPeerUZM7xDpWqx3X%2FvqqP%2BUZ8UxtXV%2BlV%2FCSSt9TnXqH%2BHgmkEyQFp8HRaEtoXl7p54g5FEknQ08p69pHK6%2F1P98ifwcC5q%2FbM%2FFWgefDfg9ZQp1QYYsowhgOba%2FDXPB3%2B6vIXJo1pGTjzapLbJnWneZlePbj035IOJgvoOD%2F7Ne0xkPoVWHscaozObbmM6ZiDpoxFdwnjf4rkdfDQqJz9i6I5mzjGpeRsMWtNMDtjYrCyJ2e0%2BIf2xzZORccrgqXnlVcIsUe%2FxXS16nbUfft1RV%2BcuEDd%2FhDT9qXRr9k26VDfQ6ergSwQ1FKhofQzXBCB%2BLyq1XCQW7F5QhUcm48OKYWKWe77I4jIc%2Bo1OyFekpbyv6tHcPCkSkxuI5ehwmdfWvhItNaHd3PzctorGbHK%2FShayHM2QOA8P7%2B2juYlStTq6QWZgbmUO7sy4d3lP%2BLtVbd2kHjmz5XIyv24rTbK%2FSgxpEKZoLAxXjuzcUWJ%2FBsUMdnK7emRk%2F3sHKyPM9FWmeZeVCxyWMJio6L8GOqUBNUPMuH6ATTmniYcZ9IgADd%2B2CyAFdY1vst90zUdEX%2Ba6Kd6TNKuiZL37J36NSBzh9CaWkscnUZ9MRVWO5uqbKw61ivS5QY%2B1PWgbd%2FL3qpocp0csZ7TiTy8AolP3CTXqybkLrR33t7TmbUoDz6ERbrX7l9Ke9Ri4RkElqs%2Br7r7UaZF%2FiI0OYWpcHaszfHQ1Nhih%2F66Xx5N1XMXSa3%2F0yVmKdgfJ&X-Amz-Signature=0da2946c6623bee56b494afb63cfe21c87160b068a503e6f35645a067a2a3be8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3YKD3HM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCWecm1R6d5WRWekbFM2fefPxGf8wq5%2BBowQvbBj5H3sQIgYh%2BWpGfdjTR73hqPo0nCgwMEM1Al5H9DeORj6I69RckqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Fq28usE0QhcTxd8CrcA7xBc0e%2F98BGNngCCwBJizCtRI6fP3vZg%2Fe%2FCMuCJXyuvmJjbqaBmzwDKWb1lLgrY3AIG6Wp9jM8sxvVOlrnmB8NTEFN%2BivrIxKO4CixmFp0IuNTMPeerUZM7xDpWqx3X%2FvqqP%2BUZ8UxtXV%2BlV%2FCSSt9TnXqH%2BHgmkEyQFp8HRaEtoXl7p54g5FEknQ08p69pHK6%2F1P98ifwcC5q%2FbM%2FFWgefDfg9ZQp1QYYsowhgOba%2FDXPB3%2B6vIXJo1pGTjzapLbJnWneZlePbj035IOJgvoOD%2F7Ne0xkPoVWHscaozObbmM6ZiDpoxFdwnjf4rkdfDQqJz9i6I5mzjGpeRsMWtNMDtjYrCyJ2e0%2BIf2xzZORccrgqXnlVcIsUe%2FxXS16nbUfft1RV%2BcuEDd%2FhDT9qXRr9k26VDfQ6ergSwQ1FKhofQzXBCB%2BLyq1XCQW7F5QhUcm48OKYWKWe77I4jIc%2Bo1OyFekpbyv6tHcPCkSkxuI5ehwmdfWvhItNaHd3PzctorGbHK%2FShayHM2QOA8P7%2B2juYlStTq6QWZgbmUO7sy4d3lP%2BLtVbd2kHjmz5XIyv24rTbK%2FSgxpEKZoLAxXjuzcUWJ%2FBsUMdnK7emRk%2F3sHKyPM9FWmeZeVCxyWMJio6L8GOqUBNUPMuH6ATTmniYcZ9IgADd%2B2CyAFdY1vst90zUdEX%2Ba6Kd6TNKuiZL37J36NSBzh9CaWkscnUZ9MRVWO5uqbKw61ivS5QY%2B1PWgbd%2FL3qpocp0csZ7TiTy8AolP3CTXqybkLrR33t7TmbUoDz6ERbrX7l9Ke9Ri4RkElqs%2Br7r7UaZF%2FiI0OYWpcHaszfHQ1Nhih%2F66Xx5N1XMXSa3%2F0yVmKdgfJ&X-Amz-Signature=a3988a32cc21bf7727e3194c287049eaf62c956818b9429e3e31543ee9819bec&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
