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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UKHYKL4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChAvyTF2Xjj8b%2Ff4v1onGpNEszrulL2AUX%2Ff6iS%2FRF7wIhAKh3nTXvZqMlvwHoObJ32mp%2FX3UULIIXuD8%2FEoeKYEGNKv8DCBoQABoMNjM3NDIzMTgzODA1IgwCVM6nwhOL8GY4cRsq3AO47kRoM21gZ0LLQjs8e4MSF8DoyXbLfaXnOd0JsR2G7iYNcuAiXR8SV6NXJ3OVUg906fF1hqtVydVCUGLYo3r4li5ofcc8FUY5yekzMCRJ4SIOJkF02JlQRJpV4ihnILE0b%2B7xUUtN2Db9j7SSoUQFsRDGdJardmiT%2BGvmtF1IyEshlBUuDQbx%2FGAlAD0J3VIbP%2FpTAVrtbVBqFNnVSfXK%2BN2NSxVxnMktrpfpM2ZPhcmqG7RtTVRLRsLhqPfRupoWzKfsWL4mJ2lXwrhcn%2F5mIfuNAwHo48FUhz3jcC1aPIRDXXqjGkLlkYkhOuPVqK8DT3wdt9EMPBANGffQWPSFsKcOYEVmA6lpp9jWujmdWuDIZa0698Tf%2Bua8PL6C8sk9EmzaGnUWXmJk2D4nfues3yzoxAS9ZUaaHsWtukynBeF3x1qZmOZh%2BSncXeALCXhLNGxASv7FRrri6TnuF7OFslbedpYGVI%2BP9GWCOjy48IZPi6rGv55hhbXqPCnt0euxO%2F27HSNVyG6%2FWyvLBLvlfOo4Qayy8LJXRs1gqwoqFfv8SZ2x5Owet91Jtl9yeUdjfQdI7r7ZgT38LInDvy8K7s0awwJM6ecvBvZ3Y2xEcdaMz0A8dkAFKkLuPzCr69a%2BBjqkATD8lCAKAtDub7IteDLXhJ0ZJqkl1%2BPJ6UVP2JRI2rUHdrkovBru73mjB4VLYXNOLg32U6vuc%2FESK5DzmCJmkz03IUIyqtNvhdn0ND88703qGNaVyd6tMLrgaExfrQaRQq%2BF%2FEHHwZ17YLE7pDs%2BIPXKranP5WkBEqd9Qkcxs6Sk89WvPSRbFPO3dhiuAHpZxLqK7PxGi%2B31bIu3JrXrN9TDzuZc&X-Amz-Signature=f441c151568324c56f58c3cceb5036f2e6f9d0bf3f1b5d7c82b47f0130764149&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UKHYKL4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChAvyTF2Xjj8b%2Ff4v1onGpNEszrulL2AUX%2Ff6iS%2FRF7wIhAKh3nTXvZqMlvwHoObJ32mp%2FX3UULIIXuD8%2FEoeKYEGNKv8DCBoQABoMNjM3NDIzMTgzODA1IgwCVM6nwhOL8GY4cRsq3AO47kRoM21gZ0LLQjs8e4MSF8DoyXbLfaXnOd0JsR2G7iYNcuAiXR8SV6NXJ3OVUg906fF1hqtVydVCUGLYo3r4li5ofcc8FUY5yekzMCRJ4SIOJkF02JlQRJpV4ihnILE0b%2B7xUUtN2Db9j7SSoUQFsRDGdJardmiT%2BGvmtF1IyEshlBUuDQbx%2FGAlAD0J3VIbP%2FpTAVrtbVBqFNnVSfXK%2BN2NSxVxnMktrpfpM2ZPhcmqG7RtTVRLRsLhqPfRupoWzKfsWL4mJ2lXwrhcn%2F5mIfuNAwHo48FUhz3jcC1aPIRDXXqjGkLlkYkhOuPVqK8DT3wdt9EMPBANGffQWPSFsKcOYEVmA6lpp9jWujmdWuDIZa0698Tf%2Bua8PL6C8sk9EmzaGnUWXmJk2D4nfues3yzoxAS9ZUaaHsWtukynBeF3x1qZmOZh%2BSncXeALCXhLNGxASv7FRrri6TnuF7OFslbedpYGVI%2BP9GWCOjy48IZPi6rGv55hhbXqPCnt0euxO%2F27HSNVyG6%2FWyvLBLvlfOo4Qayy8LJXRs1gqwoqFfv8SZ2x5Owet91Jtl9yeUdjfQdI7r7ZgT38LInDvy8K7s0awwJM6ecvBvZ3Y2xEcdaMz0A8dkAFKkLuPzCr69a%2BBjqkATD8lCAKAtDub7IteDLXhJ0ZJqkl1%2BPJ6UVP2JRI2rUHdrkovBru73mjB4VLYXNOLg32U6vuc%2FESK5DzmCJmkz03IUIyqtNvhdn0ND88703qGNaVyd6tMLrgaExfrQaRQq%2BF%2FEHHwZ17YLE7pDs%2BIPXKranP5WkBEqd9Qkcxs6Sk89WvPSRbFPO3dhiuAHpZxLqK7PxGi%2B31bIu3JrXrN9TDzuZc&X-Amz-Signature=d0a2ee68452fb223716a99a228b2a524e0ad375c63e3a77630f1cd44d9c00d28&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UKHYKL4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChAvyTF2Xjj8b%2Ff4v1onGpNEszrulL2AUX%2Ff6iS%2FRF7wIhAKh3nTXvZqMlvwHoObJ32mp%2FX3UULIIXuD8%2FEoeKYEGNKv8DCBoQABoMNjM3NDIzMTgzODA1IgwCVM6nwhOL8GY4cRsq3AO47kRoM21gZ0LLQjs8e4MSF8DoyXbLfaXnOd0JsR2G7iYNcuAiXR8SV6NXJ3OVUg906fF1hqtVydVCUGLYo3r4li5ofcc8FUY5yekzMCRJ4SIOJkF02JlQRJpV4ihnILE0b%2B7xUUtN2Db9j7SSoUQFsRDGdJardmiT%2BGvmtF1IyEshlBUuDQbx%2FGAlAD0J3VIbP%2FpTAVrtbVBqFNnVSfXK%2BN2NSxVxnMktrpfpM2ZPhcmqG7RtTVRLRsLhqPfRupoWzKfsWL4mJ2lXwrhcn%2F5mIfuNAwHo48FUhz3jcC1aPIRDXXqjGkLlkYkhOuPVqK8DT3wdt9EMPBANGffQWPSFsKcOYEVmA6lpp9jWujmdWuDIZa0698Tf%2Bua8PL6C8sk9EmzaGnUWXmJk2D4nfues3yzoxAS9ZUaaHsWtukynBeF3x1qZmOZh%2BSncXeALCXhLNGxASv7FRrri6TnuF7OFslbedpYGVI%2BP9GWCOjy48IZPi6rGv55hhbXqPCnt0euxO%2F27HSNVyG6%2FWyvLBLvlfOo4Qayy8LJXRs1gqwoqFfv8SZ2x5Owet91Jtl9yeUdjfQdI7r7ZgT38LInDvy8K7s0awwJM6ecvBvZ3Y2xEcdaMz0A8dkAFKkLuPzCr69a%2BBjqkATD8lCAKAtDub7IteDLXhJ0ZJqkl1%2BPJ6UVP2JRI2rUHdrkovBru73mjB4VLYXNOLg32U6vuc%2FESK5DzmCJmkz03IUIyqtNvhdn0ND88703qGNaVyd6tMLrgaExfrQaRQq%2BF%2FEHHwZ17YLE7pDs%2BIPXKranP5WkBEqd9Qkcxs6Sk89WvPSRbFPO3dhiuAHpZxLqK7PxGi%2B31bIu3JrXrN9TDzuZc&X-Amz-Signature=76b8d3d2cd19efcd1dd3343e8c19b1f89a23192a8d0efd0303d2ea1ae170a20a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UKHYKL4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChAvyTF2Xjj8b%2Ff4v1onGpNEszrulL2AUX%2Ff6iS%2FRF7wIhAKh3nTXvZqMlvwHoObJ32mp%2FX3UULIIXuD8%2FEoeKYEGNKv8DCBoQABoMNjM3NDIzMTgzODA1IgwCVM6nwhOL8GY4cRsq3AO47kRoM21gZ0LLQjs8e4MSF8DoyXbLfaXnOd0JsR2G7iYNcuAiXR8SV6NXJ3OVUg906fF1hqtVydVCUGLYo3r4li5ofcc8FUY5yekzMCRJ4SIOJkF02JlQRJpV4ihnILE0b%2B7xUUtN2Db9j7SSoUQFsRDGdJardmiT%2BGvmtF1IyEshlBUuDQbx%2FGAlAD0J3VIbP%2FpTAVrtbVBqFNnVSfXK%2BN2NSxVxnMktrpfpM2ZPhcmqG7RtTVRLRsLhqPfRupoWzKfsWL4mJ2lXwrhcn%2F5mIfuNAwHo48FUhz3jcC1aPIRDXXqjGkLlkYkhOuPVqK8DT3wdt9EMPBANGffQWPSFsKcOYEVmA6lpp9jWujmdWuDIZa0698Tf%2Bua8PL6C8sk9EmzaGnUWXmJk2D4nfues3yzoxAS9ZUaaHsWtukynBeF3x1qZmOZh%2BSncXeALCXhLNGxASv7FRrri6TnuF7OFslbedpYGVI%2BP9GWCOjy48IZPi6rGv55hhbXqPCnt0euxO%2F27HSNVyG6%2FWyvLBLvlfOo4Qayy8LJXRs1gqwoqFfv8SZ2x5Owet91Jtl9yeUdjfQdI7r7ZgT38LInDvy8K7s0awwJM6ecvBvZ3Y2xEcdaMz0A8dkAFKkLuPzCr69a%2BBjqkATD8lCAKAtDub7IteDLXhJ0ZJqkl1%2BPJ6UVP2JRI2rUHdrkovBru73mjB4VLYXNOLg32U6vuc%2FESK5DzmCJmkz03IUIyqtNvhdn0ND88703qGNaVyd6tMLrgaExfrQaRQq%2BF%2FEHHwZ17YLE7pDs%2BIPXKranP5WkBEqd9Qkcxs6Sk89WvPSRbFPO3dhiuAHpZxLqK7PxGi%2B31bIu3JrXrN9TDzuZc&X-Amz-Signature=42abc11e0ab8de98ffc916a9d6a24cf53a6de04fc2ead9b606e6d68e7dec07e2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UKHYKL4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChAvyTF2Xjj8b%2Ff4v1onGpNEszrulL2AUX%2Ff6iS%2FRF7wIhAKh3nTXvZqMlvwHoObJ32mp%2FX3UULIIXuD8%2FEoeKYEGNKv8DCBoQABoMNjM3NDIzMTgzODA1IgwCVM6nwhOL8GY4cRsq3AO47kRoM21gZ0LLQjs8e4MSF8DoyXbLfaXnOd0JsR2G7iYNcuAiXR8SV6NXJ3OVUg906fF1hqtVydVCUGLYo3r4li5ofcc8FUY5yekzMCRJ4SIOJkF02JlQRJpV4ihnILE0b%2B7xUUtN2Db9j7SSoUQFsRDGdJardmiT%2BGvmtF1IyEshlBUuDQbx%2FGAlAD0J3VIbP%2FpTAVrtbVBqFNnVSfXK%2BN2NSxVxnMktrpfpM2ZPhcmqG7RtTVRLRsLhqPfRupoWzKfsWL4mJ2lXwrhcn%2F5mIfuNAwHo48FUhz3jcC1aPIRDXXqjGkLlkYkhOuPVqK8DT3wdt9EMPBANGffQWPSFsKcOYEVmA6lpp9jWujmdWuDIZa0698Tf%2Bua8PL6C8sk9EmzaGnUWXmJk2D4nfues3yzoxAS9ZUaaHsWtukynBeF3x1qZmOZh%2BSncXeALCXhLNGxASv7FRrri6TnuF7OFslbedpYGVI%2BP9GWCOjy48IZPi6rGv55hhbXqPCnt0euxO%2F27HSNVyG6%2FWyvLBLvlfOo4Qayy8LJXRs1gqwoqFfv8SZ2x5Owet91Jtl9yeUdjfQdI7r7ZgT38LInDvy8K7s0awwJM6ecvBvZ3Y2xEcdaMz0A8dkAFKkLuPzCr69a%2BBjqkATD8lCAKAtDub7IteDLXhJ0ZJqkl1%2BPJ6UVP2JRI2rUHdrkovBru73mjB4VLYXNOLg32U6vuc%2FESK5DzmCJmkz03IUIyqtNvhdn0ND88703qGNaVyd6tMLrgaExfrQaRQq%2BF%2FEHHwZ17YLE7pDs%2BIPXKranP5WkBEqd9Qkcxs6Sk89WvPSRbFPO3dhiuAHpZxLqK7PxGi%2B31bIu3JrXrN9TDzuZc&X-Amz-Signature=a49a4d318e9f2de5ca0a22691f883be59a5f1794dac23785c6f796fc86b71e26&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UKHYKL4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChAvyTF2Xjj8b%2Ff4v1onGpNEszrulL2AUX%2Ff6iS%2FRF7wIhAKh3nTXvZqMlvwHoObJ32mp%2FX3UULIIXuD8%2FEoeKYEGNKv8DCBoQABoMNjM3NDIzMTgzODA1IgwCVM6nwhOL8GY4cRsq3AO47kRoM21gZ0LLQjs8e4MSF8DoyXbLfaXnOd0JsR2G7iYNcuAiXR8SV6NXJ3OVUg906fF1hqtVydVCUGLYo3r4li5ofcc8FUY5yekzMCRJ4SIOJkF02JlQRJpV4ihnILE0b%2B7xUUtN2Db9j7SSoUQFsRDGdJardmiT%2BGvmtF1IyEshlBUuDQbx%2FGAlAD0J3VIbP%2FpTAVrtbVBqFNnVSfXK%2BN2NSxVxnMktrpfpM2ZPhcmqG7RtTVRLRsLhqPfRupoWzKfsWL4mJ2lXwrhcn%2F5mIfuNAwHo48FUhz3jcC1aPIRDXXqjGkLlkYkhOuPVqK8DT3wdt9EMPBANGffQWPSFsKcOYEVmA6lpp9jWujmdWuDIZa0698Tf%2Bua8PL6C8sk9EmzaGnUWXmJk2D4nfues3yzoxAS9ZUaaHsWtukynBeF3x1qZmOZh%2BSncXeALCXhLNGxASv7FRrri6TnuF7OFslbedpYGVI%2BP9GWCOjy48IZPi6rGv55hhbXqPCnt0euxO%2F27HSNVyG6%2FWyvLBLvlfOo4Qayy8LJXRs1gqwoqFfv8SZ2x5Owet91Jtl9yeUdjfQdI7r7ZgT38LInDvy8K7s0awwJM6ecvBvZ3Y2xEcdaMz0A8dkAFKkLuPzCr69a%2BBjqkATD8lCAKAtDub7IteDLXhJ0ZJqkl1%2BPJ6UVP2JRI2rUHdrkovBru73mjB4VLYXNOLg32U6vuc%2FESK5DzmCJmkz03IUIyqtNvhdn0ND88703qGNaVyd6tMLrgaExfrQaRQq%2BF%2FEHHwZ17YLE7pDs%2BIPXKranP5WkBEqd9Qkcxs6Sk89WvPSRbFPO3dhiuAHpZxLqK7PxGi%2B31bIu3JrXrN9TDzuZc&X-Amz-Signature=b78c6809b45c1d669450999ce2a9d22bedfbac6bb9f17ee17552dbca711b3f68&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UKHYKL4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChAvyTF2Xjj8b%2Ff4v1onGpNEszrulL2AUX%2Ff6iS%2FRF7wIhAKh3nTXvZqMlvwHoObJ32mp%2FX3UULIIXuD8%2FEoeKYEGNKv8DCBoQABoMNjM3NDIzMTgzODA1IgwCVM6nwhOL8GY4cRsq3AO47kRoM21gZ0LLQjs8e4MSF8DoyXbLfaXnOd0JsR2G7iYNcuAiXR8SV6NXJ3OVUg906fF1hqtVydVCUGLYo3r4li5ofcc8FUY5yekzMCRJ4SIOJkF02JlQRJpV4ihnILE0b%2B7xUUtN2Db9j7SSoUQFsRDGdJardmiT%2BGvmtF1IyEshlBUuDQbx%2FGAlAD0J3VIbP%2FpTAVrtbVBqFNnVSfXK%2BN2NSxVxnMktrpfpM2ZPhcmqG7RtTVRLRsLhqPfRupoWzKfsWL4mJ2lXwrhcn%2F5mIfuNAwHo48FUhz3jcC1aPIRDXXqjGkLlkYkhOuPVqK8DT3wdt9EMPBANGffQWPSFsKcOYEVmA6lpp9jWujmdWuDIZa0698Tf%2Bua8PL6C8sk9EmzaGnUWXmJk2D4nfues3yzoxAS9ZUaaHsWtukynBeF3x1qZmOZh%2BSncXeALCXhLNGxASv7FRrri6TnuF7OFslbedpYGVI%2BP9GWCOjy48IZPi6rGv55hhbXqPCnt0euxO%2F27HSNVyG6%2FWyvLBLvlfOo4Qayy8LJXRs1gqwoqFfv8SZ2x5Owet91Jtl9yeUdjfQdI7r7ZgT38LInDvy8K7s0awwJM6ecvBvZ3Y2xEcdaMz0A8dkAFKkLuPzCr69a%2BBjqkATD8lCAKAtDub7IteDLXhJ0ZJqkl1%2BPJ6UVP2JRI2rUHdrkovBru73mjB4VLYXNOLg32U6vuc%2FESK5DzmCJmkz03IUIyqtNvhdn0ND88703qGNaVyd6tMLrgaExfrQaRQq%2BF%2FEHHwZ17YLE7pDs%2BIPXKranP5WkBEqd9Qkcxs6Sk89WvPSRbFPO3dhiuAHpZxLqK7PxGi%2B31bIu3JrXrN9TDzuZc&X-Amz-Signature=4ce33acaffe88ca4f79a0ca4e7c4dd990fae8eca9eac98e0b0a3bdc2c32fcb99&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
