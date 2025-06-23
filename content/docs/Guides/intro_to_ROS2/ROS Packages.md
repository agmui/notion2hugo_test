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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDVGKIX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIAQiK4aRe%2FlVxpgN2HYp5BTc8Xk6dzajbgbRVXorjPIiAiBJOZO5h%2BeahQowLFF7nXbkHROpqWAbg4DEaeYtNzzoQyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMVJiPU9cc0QS0TFOxKtwDnS47wa0C3ejUqjRkZS%2FjGiEqLo7z6iEXCuiN6%2BS5m%2BDKV%2B6axB71lA4ju7iUB2W8mjzc547qSBwbHpcY02fD%2FtISW1v%2FjZwz2Zx%2Fn7l5nsA5mvxXfCR3G23z1f76Ag%2B%2BI4JrQKHyEEPCa3EXG1Z%2Bw10v4vuOhMqavmdgJHZrONQ0sp3%2Brk90%2FSvA6Tc26N4E8YabNBi8aFRmKvzDF9Ia3dCFYOrCLu09ywyquf07V8mK0aQCAvg7%2FeQ%2Fy9GJpa22JDjym%2BaT4xX0ybmf99G19G8PO%2Bw9ImvRaSHEml5Fg%2BVeoNW%2FxLGWlMTJlhhznnoQKzEBTJhafZAe%2FZU%2FvxVkpNWSX4pxG3zlKfNYAVTeqam5XFCyaf5YImr4VjeMB7EhPHY1IvAfmtXdyeMDzFhvvKfEs4GpSaS9yLzTXpoXqcNGb2h62VvxHrYvshsnnk%2B%2Bgm8rs32Xzf6UgWgs1SO4%2BVX5eQ14tgJqfp3uWTMdsaiOevBo0M%2FQCV77QPEM9mCDyE9pvXtV6h2PWpwd7BrJ7aEzX%2Fbui1MXNFOrryMDgAwRzooal%2FOndGjMSgiPoEcFIiyL6Q7BXK3vxkGNAb0e8YFyinlrsd1T8yyzElvCr4iaPnFOCJsQKkGdqjEww7PnwgY6pgERIlDW1QPeliQXDnLQK5Omj%2B6Pn5RCqMP%2FR5o3Kgg5XbNRkwV9MoZDHQbaMV38asiTNQEOMk1LCqmcW4w1vnr1qpiANS0mv7fV840OIQM%2BzaZDeX5F8QeFcDrA5p%2BuT4EfvxR7bw8l1KIU5t3EepbDOLMN2gZ8oWj9Y1wG2A5aUIK4I9Lw3dzOjZNgDlbUjenHVTMTvh%2Bo6pip0SXuiJArV06pkTa4&X-Amz-Signature=09b3ada1340fc604f8281023d6ee7345e5be114f159d2a14adea76ae8ef2d4b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDVGKIX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIAQiK4aRe%2FlVxpgN2HYp5BTc8Xk6dzajbgbRVXorjPIiAiBJOZO5h%2BeahQowLFF7nXbkHROpqWAbg4DEaeYtNzzoQyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMVJiPU9cc0QS0TFOxKtwDnS47wa0C3ejUqjRkZS%2FjGiEqLo7z6iEXCuiN6%2BS5m%2BDKV%2B6axB71lA4ju7iUB2W8mjzc547qSBwbHpcY02fD%2FtISW1v%2FjZwz2Zx%2Fn7l5nsA5mvxXfCR3G23z1f76Ag%2B%2BI4JrQKHyEEPCa3EXG1Z%2Bw10v4vuOhMqavmdgJHZrONQ0sp3%2Brk90%2FSvA6Tc26N4E8YabNBi8aFRmKvzDF9Ia3dCFYOrCLu09ywyquf07V8mK0aQCAvg7%2FeQ%2Fy9GJpa22JDjym%2BaT4xX0ybmf99G19G8PO%2Bw9ImvRaSHEml5Fg%2BVeoNW%2FxLGWlMTJlhhznnoQKzEBTJhafZAe%2FZU%2FvxVkpNWSX4pxG3zlKfNYAVTeqam5XFCyaf5YImr4VjeMB7EhPHY1IvAfmtXdyeMDzFhvvKfEs4GpSaS9yLzTXpoXqcNGb2h62VvxHrYvshsnnk%2B%2Bgm8rs32Xzf6UgWgs1SO4%2BVX5eQ14tgJqfp3uWTMdsaiOevBo0M%2FQCV77QPEM9mCDyE9pvXtV6h2PWpwd7BrJ7aEzX%2Fbui1MXNFOrryMDgAwRzooal%2FOndGjMSgiPoEcFIiyL6Q7BXK3vxkGNAb0e8YFyinlrsd1T8yyzElvCr4iaPnFOCJsQKkGdqjEww7PnwgY6pgERIlDW1QPeliQXDnLQK5Omj%2B6Pn5RCqMP%2FR5o3Kgg5XbNRkwV9MoZDHQbaMV38asiTNQEOMk1LCqmcW4w1vnr1qpiANS0mv7fV840OIQM%2BzaZDeX5F8QeFcDrA5p%2BuT4EfvxR7bw8l1KIU5t3EepbDOLMN2gZ8oWj9Y1wG2A5aUIK4I9Lw3dzOjZNgDlbUjenHVTMTvh%2Bo6pip0SXuiJArV06pkTa4&X-Amz-Signature=ace8a2e4eb1197db4196d394f3970adfaee7a3e6d05db8c6d0e2e94ebeab7953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDVGKIX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIAQiK4aRe%2FlVxpgN2HYp5BTc8Xk6dzajbgbRVXorjPIiAiBJOZO5h%2BeahQowLFF7nXbkHROpqWAbg4DEaeYtNzzoQyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMVJiPU9cc0QS0TFOxKtwDnS47wa0C3ejUqjRkZS%2FjGiEqLo7z6iEXCuiN6%2BS5m%2BDKV%2B6axB71lA4ju7iUB2W8mjzc547qSBwbHpcY02fD%2FtISW1v%2FjZwz2Zx%2Fn7l5nsA5mvxXfCR3G23z1f76Ag%2B%2BI4JrQKHyEEPCa3EXG1Z%2Bw10v4vuOhMqavmdgJHZrONQ0sp3%2Brk90%2FSvA6Tc26N4E8YabNBi8aFRmKvzDF9Ia3dCFYOrCLu09ywyquf07V8mK0aQCAvg7%2FeQ%2Fy9GJpa22JDjym%2BaT4xX0ybmf99G19G8PO%2Bw9ImvRaSHEml5Fg%2BVeoNW%2FxLGWlMTJlhhznnoQKzEBTJhafZAe%2FZU%2FvxVkpNWSX4pxG3zlKfNYAVTeqam5XFCyaf5YImr4VjeMB7EhPHY1IvAfmtXdyeMDzFhvvKfEs4GpSaS9yLzTXpoXqcNGb2h62VvxHrYvshsnnk%2B%2Bgm8rs32Xzf6UgWgs1SO4%2BVX5eQ14tgJqfp3uWTMdsaiOevBo0M%2FQCV77QPEM9mCDyE9pvXtV6h2PWpwd7BrJ7aEzX%2Fbui1MXNFOrryMDgAwRzooal%2FOndGjMSgiPoEcFIiyL6Q7BXK3vxkGNAb0e8YFyinlrsd1T8yyzElvCr4iaPnFOCJsQKkGdqjEww7PnwgY6pgERIlDW1QPeliQXDnLQK5Omj%2B6Pn5RCqMP%2FR5o3Kgg5XbNRkwV9MoZDHQbaMV38asiTNQEOMk1LCqmcW4w1vnr1qpiANS0mv7fV840OIQM%2BzaZDeX5F8QeFcDrA5p%2BuT4EfvxR7bw8l1KIU5t3EepbDOLMN2gZ8oWj9Y1wG2A5aUIK4I9Lw3dzOjZNgDlbUjenHVTMTvh%2Bo6pip0SXuiJArV06pkTa4&X-Amz-Signature=c6d13b0fff2336951473ee0df67bf84ddaa19488a92543ffd86bb6c61212b8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDVGKIX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIAQiK4aRe%2FlVxpgN2HYp5BTc8Xk6dzajbgbRVXorjPIiAiBJOZO5h%2BeahQowLFF7nXbkHROpqWAbg4DEaeYtNzzoQyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMVJiPU9cc0QS0TFOxKtwDnS47wa0C3ejUqjRkZS%2FjGiEqLo7z6iEXCuiN6%2BS5m%2BDKV%2B6axB71lA4ju7iUB2W8mjzc547qSBwbHpcY02fD%2FtISW1v%2FjZwz2Zx%2Fn7l5nsA5mvxXfCR3G23z1f76Ag%2B%2BI4JrQKHyEEPCa3EXG1Z%2Bw10v4vuOhMqavmdgJHZrONQ0sp3%2Brk90%2FSvA6Tc26N4E8YabNBi8aFRmKvzDF9Ia3dCFYOrCLu09ywyquf07V8mK0aQCAvg7%2FeQ%2Fy9GJpa22JDjym%2BaT4xX0ybmf99G19G8PO%2Bw9ImvRaSHEml5Fg%2BVeoNW%2FxLGWlMTJlhhznnoQKzEBTJhafZAe%2FZU%2FvxVkpNWSX4pxG3zlKfNYAVTeqam5XFCyaf5YImr4VjeMB7EhPHY1IvAfmtXdyeMDzFhvvKfEs4GpSaS9yLzTXpoXqcNGb2h62VvxHrYvshsnnk%2B%2Bgm8rs32Xzf6UgWgs1SO4%2BVX5eQ14tgJqfp3uWTMdsaiOevBo0M%2FQCV77QPEM9mCDyE9pvXtV6h2PWpwd7BrJ7aEzX%2Fbui1MXNFOrryMDgAwRzooal%2FOndGjMSgiPoEcFIiyL6Q7BXK3vxkGNAb0e8YFyinlrsd1T8yyzElvCr4iaPnFOCJsQKkGdqjEww7PnwgY6pgERIlDW1QPeliQXDnLQK5Omj%2B6Pn5RCqMP%2FR5o3Kgg5XbNRkwV9MoZDHQbaMV38asiTNQEOMk1LCqmcW4w1vnr1qpiANS0mv7fV840OIQM%2BzaZDeX5F8QeFcDrA5p%2BuT4EfvxR7bw8l1KIU5t3EepbDOLMN2gZ8oWj9Y1wG2A5aUIK4I9Lw3dzOjZNgDlbUjenHVTMTvh%2Bo6pip0SXuiJArV06pkTa4&X-Amz-Signature=d6aeef36847e9e4a0bc41b05087b0480ebb79981598035b16a3f6d4f74b6e1aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDVGKIX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIAQiK4aRe%2FlVxpgN2HYp5BTc8Xk6dzajbgbRVXorjPIiAiBJOZO5h%2BeahQowLFF7nXbkHROpqWAbg4DEaeYtNzzoQyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMVJiPU9cc0QS0TFOxKtwDnS47wa0C3ejUqjRkZS%2FjGiEqLo7z6iEXCuiN6%2BS5m%2BDKV%2B6axB71lA4ju7iUB2W8mjzc547qSBwbHpcY02fD%2FtISW1v%2FjZwz2Zx%2Fn7l5nsA5mvxXfCR3G23z1f76Ag%2B%2BI4JrQKHyEEPCa3EXG1Z%2Bw10v4vuOhMqavmdgJHZrONQ0sp3%2Brk90%2FSvA6Tc26N4E8YabNBi8aFRmKvzDF9Ia3dCFYOrCLu09ywyquf07V8mK0aQCAvg7%2FeQ%2Fy9GJpa22JDjym%2BaT4xX0ybmf99G19G8PO%2Bw9ImvRaSHEml5Fg%2BVeoNW%2FxLGWlMTJlhhznnoQKzEBTJhafZAe%2FZU%2FvxVkpNWSX4pxG3zlKfNYAVTeqam5XFCyaf5YImr4VjeMB7EhPHY1IvAfmtXdyeMDzFhvvKfEs4GpSaS9yLzTXpoXqcNGb2h62VvxHrYvshsnnk%2B%2Bgm8rs32Xzf6UgWgs1SO4%2BVX5eQ14tgJqfp3uWTMdsaiOevBo0M%2FQCV77QPEM9mCDyE9pvXtV6h2PWpwd7BrJ7aEzX%2Fbui1MXNFOrryMDgAwRzooal%2FOndGjMSgiPoEcFIiyL6Q7BXK3vxkGNAb0e8YFyinlrsd1T8yyzElvCr4iaPnFOCJsQKkGdqjEww7PnwgY6pgERIlDW1QPeliQXDnLQK5Omj%2B6Pn5RCqMP%2FR5o3Kgg5XbNRkwV9MoZDHQbaMV38asiTNQEOMk1LCqmcW4w1vnr1qpiANS0mv7fV840OIQM%2BzaZDeX5F8QeFcDrA5p%2BuT4EfvxR7bw8l1KIU5t3EepbDOLMN2gZ8oWj9Y1wG2A5aUIK4I9Lw3dzOjZNgDlbUjenHVTMTvh%2Bo6pip0SXuiJArV06pkTa4&X-Amz-Signature=97f748474233a9f8cea87ce3125e3f99d9b5e106910187edfe780639d01ce6f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDVGKIX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIAQiK4aRe%2FlVxpgN2HYp5BTc8Xk6dzajbgbRVXorjPIiAiBJOZO5h%2BeahQowLFF7nXbkHROpqWAbg4DEaeYtNzzoQyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMVJiPU9cc0QS0TFOxKtwDnS47wa0C3ejUqjRkZS%2FjGiEqLo7z6iEXCuiN6%2BS5m%2BDKV%2B6axB71lA4ju7iUB2W8mjzc547qSBwbHpcY02fD%2FtISW1v%2FjZwz2Zx%2Fn7l5nsA5mvxXfCR3G23z1f76Ag%2B%2BI4JrQKHyEEPCa3EXG1Z%2Bw10v4vuOhMqavmdgJHZrONQ0sp3%2Brk90%2FSvA6Tc26N4E8YabNBi8aFRmKvzDF9Ia3dCFYOrCLu09ywyquf07V8mK0aQCAvg7%2FeQ%2Fy9GJpa22JDjym%2BaT4xX0ybmf99G19G8PO%2Bw9ImvRaSHEml5Fg%2BVeoNW%2FxLGWlMTJlhhznnoQKzEBTJhafZAe%2FZU%2FvxVkpNWSX4pxG3zlKfNYAVTeqam5XFCyaf5YImr4VjeMB7EhPHY1IvAfmtXdyeMDzFhvvKfEs4GpSaS9yLzTXpoXqcNGb2h62VvxHrYvshsnnk%2B%2Bgm8rs32Xzf6UgWgs1SO4%2BVX5eQ14tgJqfp3uWTMdsaiOevBo0M%2FQCV77QPEM9mCDyE9pvXtV6h2PWpwd7BrJ7aEzX%2Fbui1MXNFOrryMDgAwRzooal%2FOndGjMSgiPoEcFIiyL6Q7BXK3vxkGNAb0e8YFyinlrsd1T8yyzElvCr4iaPnFOCJsQKkGdqjEww7PnwgY6pgERIlDW1QPeliQXDnLQK5Omj%2B6Pn5RCqMP%2FR5o3Kgg5XbNRkwV9MoZDHQbaMV38asiTNQEOMk1LCqmcW4w1vnr1qpiANS0mv7fV840OIQM%2BzaZDeX5F8QeFcDrA5p%2BuT4EfvxR7bw8l1KIU5t3EepbDOLMN2gZ8oWj9Y1wG2A5aUIK4I9Lw3dzOjZNgDlbUjenHVTMTvh%2Bo6pip0SXuiJArV06pkTa4&X-Amz-Signature=485bc736a615f85a623876fb6511a52cb36d331f8d4279f7eb70b6a8dc2e4733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDVGKIX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIAQiK4aRe%2FlVxpgN2HYp5BTc8Xk6dzajbgbRVXorjPIiAiBJOZO5h%2BeahQowLFF7nXbkHROpqWAbg4DEaeYtNzzoQyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMVJiPU9cc0QS0TFOxKtwDnS47wa0C3ejUqjRkZS%2FjGiEqLo7z6iEXCuiN6%2BS5m%2BDKV%2B6axB71lA4ju7iUB2W8mjzc547qSBwbHpcY02fD%2FtISW1v%2FjZwz2Zx%2Fn7l5nsA5mvxXfCR3G23z1f76Ag%2B%2BI4JrQKHyEEPCa3EXG1Z%2Bw10v4vuOhMqavmdgJHZrONQ0sp3%2Brk90%2FSvA6Tc26N4E8YabNBi8aFRmKvzDF9Ia3dCFYOrCLu09ywyquf07V8mK0aQCAvg7%2FeQ%2Fy9GJpa22JDjym%2BaT4xX0ybmf99G19G8PO%2Bw9ImvRaSHEml5Fg%2BVeoNW%2FxLGWlMTJlhhznnoQKzEBTJhafZAe%2FZU%2FvxVkpNWSX4pxG3zlKfNYAVTeqam5XFCyaf5YImr4VjeMB7EhPHY1IvAfmtXdyeMDzFhvvKfEs4GpSaS9yLzTXpoXqcNGb2h62VvxHrYvshsnnk%2B%2Bgm8rs32Xzf6UgWgs1SO4%2BVX5eQ14tgJqfp3uWTMdsaiOevBo0M%2FQCV77QPEM9mCDyE9pvXtV6h2PWpwd7BrJ7aEzX%2Fbui1MXNFOrryMDgAwRzooal%2FOndGjMSgiPoEcFIiyL6Q7BXK3vxkGNAb0e8YFyinlrsd1T8yyzElvCr4iaPnFOCJsQKkGdqjEww7PnwgY6pgERIlDW1QPeliQXDnLQK5Omj%2B6Pn5RCqMP%2FR5o3Kgg5XbNRkwV9MoZDHQbaMV38asiTNQEOMk1LCqmcW4w1vnr1qpiANS0mv7fV840OIQM%2BzaZDeX5F8QeFcDrA5p%2BuT4EfvxR7bw8l1KIU5t3EepbDOLMN2gZ8oWj9Y1wG2A5aUIK4I9Lw3dzOjZNgDlbUjenHVTMTvh%2Bo6pip0SXuiJArV06pkTa4&X-Amz-Signature=14398a55bc3238a14a659d2b85d75cb600379190bbfef6d1d63af69d81f61b37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
