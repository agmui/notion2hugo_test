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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HW434JS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDddYGXtHV4nrI%2B2J%2Bkt0fFvaaXRxEhcuokcgD7D7e7yAIhAMG8GvBLYQ6%2F8xXsIBXh2A6VrlKi40y2%2Faw3J5YS4RMXKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOjPN%2BJBW%2FE2SXuuMq3AO7iopE3Xf84XkbZld%2BOWmaH5YuhSNj3ctOV3%2FhD6yBg8nuyJl7lA1uPISTgym0gJX7kAEJkFDHcMPEh9KpHTerpH6nZS%2F61zzjo9dnrsWKWB4q582DSQHwMWdhpefD5aZmURoNZGxYmKrumzDc6atDFcLSB67%2FIk1H6bmNU2NuqmPKknOJ%2BSxlwKdkpuDdiI9GcpXxjYnxTsjM%2FnadcojcfiPmOznWypqetEljKhrMGBSRa7nLC2FzN0srWz2k7yDptJDHyxd%2FbQ48EPNal8mveJiRJxl2s%2BE5cLI%2Fztelo4dJY2fiCiiY43QZnesx20mG2CuKakurRAK2Fw1qpzBGXYmUYDGcxEDA03JyUGK%2BDmq2PEEq1shWjJNf7WYA%2F1zWyG1i4BWZ5JZFxlsOlCvCQnRIT%2BKaZj%2F0PvtzEmWqlq5P8NGSfMuBhbLnytnArvMkaLpK94Sdt7yFk295%2F6J6fK5G8o7X2bcoY6nYDnVxXrKjkzVTyJtrK1HZUM53AGhqm3FIM%2BeKzAVt8JRg6%2FCjhbO7y5TGcUImLVULj5meW9D1hHqjL9CIKns4xq6yc4JG4uM73s7qAQ%2Bug9hgYO3%2BVrTCbiIefrxWo%2Fgrv6mvlbkuP1o3YRBVjAVxNjC7zbm%2BBjqkAUaEZEQM0L66I0j3%2FD0vsvOZ21puYs7aAODrMHwuip3SG%2B%2BJsxKczEYMBwAja7ipDbsHBz5hX734tGDf5v86PNgpALksspF7apTzl1Rr3XxIMMOW6%2Bmsc7K143%2FKVmL0X%2B6vrnDETHbCrLMHH%2BHpVt7NPdUGYIY%2FKEQcNM1xFiVzxFKyr9gjbtOWOC6ZdDLc49KDqCa4c9vsMTvSKzapGFt8xVKX&X-Amz-Signature=88371164bfa21156dbbf4e1c7f667e58681bf9846f7c192b51070e2a50e1520a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HW434JS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDddYGXtHV4nrI%2B2J%2Bkt0fFvaaXRxEhcuokcgD7D7e7yAIhAMG8GvBLYQ6%2F8xXsIBXh2A6VrlKi40y2%2Faw3J5YS4RMXKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOjPN%2BJBW%2FE2SXuuMq3AO7iopE3Xf84XkbZld%2BOWmaH5YuhSNj3ctOV3%2FhD6yBg8nuyJl7lA1uPISTgym0gJX7kAEJkFDHcMPEh9KpHTerpH6nZS%2F61zzjo9dnrsWKWB4q582DSQHwMWdhpefD5aZmURoNZGxYmKrumzDc6atDFcLSB67%2FIk1H6bmNU2NuqmPKknOJ%2BSxlwKdkpuDdiI9GcpXxjYnxTsjM%2FnadcojcfiPmOznWypqetEljKhrMGBSRa7nLC2FzN0srWz2k7yDptJDHyxd%2FbQ48EPNal8mveJiRJxl2s%2BE5cLI%2Fztelo4dJY2fiCiiY43QZnesx20mG2CuKakurRAK2Fw1qpzBGXYmUYDGcxEDA03JyUGK%2BDmq2PEEq1shWjJNf7WYA%2F1zWyG1i4BWZ5JZFxlsOlCvCQnRIT%2BKaZj%2F0PvtzEmWqlq5P8NGSfMuBhbLnytnArvMkaLpK94Sdt7yFk295%2F6J6fK5G8o7X2bcoY6nYDnVxXrKjkzVTyJtrK1HZUM53AGhqm3FIM%2BeKzAVt8JRg6%2FCjhbO7y5TGcUImLVULj5meW9D1hHqjL9CIKns4xq6yc4JG4uM73s7qAQ%2Bug9hgYO3%2BVrTCbiIefrxWo%2Fgrv6mvlbkuP1o3YRBVjAVxNjC7zbm%2BBjqkAUaEZEQM0L66I0j3%2FD0vsvOZ21puYs7aAODrMHwuip3SG%2B%2BJsxKczEYMBwAja7ipDbsHBz5hX734tGDf5v86PNgpALksspF7apTzl1Rr3XxIMMOW6%2Bmsc7K143%2FKVmL0X%2B6vrnDETHbCrLMHH%2BHpVt7NPdUGYIY%2FKEQcNM1xFiVzxFKyr9gjbtOWOC6ZdDLc49KDqCa4c9vsMTvSKzapGFt8xVKX&X-Amz-Signature=7b3342987bf1046db37df873bf79e205d00c30a46598f85616814e766f85a13e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HW434JS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDddYGXtHV4nrI%2B2J%2Bkt0fFvaaXRxEhcuokcgD7D7e7yAIhAMG8GvBLYQ6%2F8xXsIBXh2A6VrlKi40y2%2Faw3J5YS4RMXKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOjPN%2BJBW%2FE2SXuuMq3AO7iopE3Xf84XkbZld%2BOWmaH5YuhSNj3ctOV3%2FhD6yBg8nuyJl7lA1uPISTgym0gJX7kAEJkFDHcMPEh9KpHTerpH6nZS%2F61zzjo9dnrsWKWB4q582DSQHwMWdhpefD5aZmURoNZGxYmKrumzDc6atDFcLSB67%2FIk1H6bmNU2NuqmPKknOJ%2BSxlwKdkpuDdiI9GcpXxjYnxTsjM%2FnadcojcfiPmOznWypqetEljKhrMGBSRa7nLC2FzN0srWz2k7yDptJDHyxd%2FbQ48EPNal8mveJiRJxl2s%2BE5cLI%2Fztelo4dJY2fiCiiY43QZnesx20mG2CuKakurRAK2Fw1qpzBGXYmUYDGcxEDA03JyUGK%2BDmq2PEEq1shWjJNf7WYA%2F1zWyG1i4BWZ5JZFxlsOlCvCQnRIT%2BKaZj%2F0PvtzEmWqlq5P8NGSfMuBhbLnytnArvMkaLpK94Sdt7yFk295%2F6J6fK5G8o7X2bcoY6nYDnVxXrKjkzVTyJtrK1HZUM53AGhqm3FIM%2BeKzAVt8JRg6%2FCjhbO7y5TGcUImLVULj5meW9D1hHqjL9CIKns4xq6yc4JG4uM73s7qAQ%2Bug9hgYO3%2BVrTCbiIefrxWo%2Fgrv6mvlbkuP1o3YRBVjAVxNjC7zbm%2BBjqkAUaEZEQM0L66I0j3%2FD0vsvOZ21puYs7aAODrMHwuip3SG%2B%2BJsxKczEYMBwAja7ipDbsHBz5hX734tGDf5v86PNgpALksspF7apTzl1Rr3XxIMMOW6%2Bmsc7K143%2FKVmL0X%2B6vrnDETHbCrLMHH%2BHpVt7NPdUGYIY%2FKEQcNM1xFiVzxFKyr9gjbtOWOC6ZdDLc49KDqCa4c9vsMTvSKzapGFt8xVKX&X-Amz-Signature=85680c208b294fc3a8f3340d5a3110a89458daddd29fedf71c020a706813957d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HW434JS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDddYGXtHV4nrI%2B2J%2Bkt0fFvaaXRxEhcuokcgD7D7e7yAIhAMG8GvBLYQ6%2F8xXsIBXh2A6VrlKi40y2%2Faw3J5YS4RMXKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOjPN%2BJBW%2FE2SXuuMq3AO7iopE3Xf84XkbZld%2BOWmaH5YuhSNj3ctOV3%2FhD6yBg8nuyJl7lA1uPISTgym0gJX7kAEJkFDHcMPEh9KpHTerpH6nZS%2F61zzjo9dnrsWKWB4q582DSQHwMWdhpefD5aZmURoNZGxYmKrumzDc6atDFcLSB67%2FIk1H6bmNU2NuqmPKknOJ%2BSxlwKdkpuDdiI9GcpXxjYnxTsjM%2FnadcojcfiPmOznWypqetEljKhrMGBSRa7nLC2FzN0srWz2k7yDptJDHyxd%2FbQ48EPNal8mveJiRJxl2s%2BE5cLI%2Fztelo4dJY2fiCiiY43QZnesx20mG2CuKakurRAK2Fw1qpzBGXYmUYDGcxEDA03JyUGK%2BDmq2PEEq1shWjJNf7WYA%2F1zWyG1i4BWZ5JZFxlsOlCvCQnRIT%2BKaZj%2F0PvtzEmWqlq5P8NGSfMuBhbLnytnArvMkaLpK94Sdt7yFk295%2F6J6fK5G8o7X2bcoY6nYDnVxXrKjkzVTyJtrK1HZUM53AGhqm3FIM%2BeKzAVt8JRg6%2FCjhbO7y5TGcUImLVULj5meW9D1hHqjL9CIKns4xq6yc4JG4uM73s7qAQ%2Bug9hgYO3%2BVrTCbiIefrxWo%2Fgrv6mvlbkuP1o3YRBVjAVxNjC7zbm%2BBjqkAUaEZEQM0L66I0j3%2FD0vsvOZ21puYs7aAODrMHwuip3SG%2B%2BJsxKczEYMBwAja7ipDbsHBz5hX734tGDf5v86PNgpALksspF7apTzl1Rr3XxIMMOW6%2Bmsc7K143%2FKVmL0X%2B6vrnDETHbCrLMHH%2BHpVt7NPdUGYIY%2FKEQcNM1xFiVzxFKyr9gjbtOWOC6ZdDLc49KDqCa4c9vsMTvSKzapGFt8xVKX&X-Amz-Signature=11aaf33782c34b84230bdaeadfb27f66e94179b7aaef62f43b44b178535720b1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HW434JS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDddYGXtHV4nrI%2B2J%2Bkt0fFvaaXRxEhcuokcgD7D7e7yAIhAMG8GvBLYQ6%2F8xXsIBXh2A6VrlKi40y2%2Faw3J5YS4RMXKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOjPN%2BJBW%2FE2SXuuMq3AO7iopE3Xf84XkbZld%2BOWmaH5YuhSNj3ctOV3%2FhD6yBg8nuyJl7lA1uPISTgym0gJX7kAEJkFDHcMPEh9KpHTerpH6nZS%2F61zzjo9dnrsWKWB4q582DSQHwMWdhpefD5aZmURoNZGxYmKrumzDc6atDFcLSB67%2FIk1H6bmNU2NuqmPKknOJ%2BSxlwKdkpuDdiI9GcpXxjYnxTsjM%2FnadcojcfiPmOznWypqetEljKhrMGBSRa7nLC2FzN0srWz2k7yDptJDHyxd%2FbQ48EPNal8mveJiRJxl2s%2BE5cLI%2Fztelo4dJY2fiCiiY43QZnesx20mG2CuKakurRAK2Fw1qpzBGXYmUYDGcxEDA03JyUGK%2BDmq2PEEq1shWjJNf7WYA%2F1zWyG1i4BWZ5JZFxlsOlCvCQnRIT%2BKaZj%2F0PvtzEmWqlq5P8NGSfMuBhbLnytnArvMkaLpK94Sdt7yFk295%2F6J6fK5G8o7X2bcoY6nYDnVxXrKjkzVTyJtrK1HZUM53AGhqm3FIM%2BeKzAVt8JRg6%2FCjhbO7y5TGcUImLVULj5meW9D1hHqjL9CIKns4xq6yc4JG4uM73s7qAQ%2Bug9hgYO3%2BVrTCbiIefrxWo%2Fgrv6mvlbkuP1o3YRBVjAVxNjC7zbm%2BBjqkAUaEZEQM0L66I0j3%2FD0vsvOZ21puYs7aAODrMHwuip3SG%2B%2BJsxKczEYMBwAja7ipDbsHBz5hX734tGDf5v86PNgpALksspF7apTzl1Rr3XxIMMOW6%2Bmsc7K143%2FKVmL0X%2B6vrnDETHbCrLMHH%2BHpVt7NPdUGYIY%2FKEQcNM1xFiVzxFKyr9gjbtOWOC6ZdDLc49KDqCa4c9vsMTvSKzapGFt8xVKX&X-Amz-Signature=d9a73f0703b34c3f5cdc6d06b81228a9f364aa728967e8bc90d56a8483f8b61b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HW434JS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDddYGXtHV4nrI%2B2J%2Bkt0fFvaaXRxEhcuokcgD7D7e7yAIhAMG8GvBLYQ6%2F8xXsIBXh2A6VrlKi40y2%2Faw3J5YS4RMXKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOjPN%2BJBW%2FE2SXuuMq3AO7iopE3Xf84XkbZld%2BOWmaH5YuhSNj3ctOV3%2FhD6yBg8nuyJl7lA1uPISTgym0gJX7kAEJkFDHcMPEh9KpHTerpH6nZS%2F61zzjo9dnrsWKWB4q582DSQHwMWdhpefD5aZmURoNZGxYmKrumzDc6atDFcLSB67%2FIk1H6bmNU2NuqmPKknOJ%2BSxlwKdkpuDdiI9GcpXxjYnxTsjM%2FnadcojcfiPmOznWypqetEljKhrMGBSRa7nLC2FzN0srWz2k7yDptJDHyxd%2FbQ48EPNal8mveJiRJxl2s%2BE5cLI%2Fztelo4dJY2fiCiiY43QZnesx20mG2CuKakurRAK2Fw1qpzBGXYmUYDGcxEDA03JyUGK%2BDmq2PEEq1shWjJNf7WYA%2F1zWyG1i4BWZ5JZFxlsOlCvCQnRIT%2BKaZj%2F0PvtzEmWqlq5P8NGSfMuBhbLnytnArvMkaLpK94Sdt7yFk295%2F6J6fK5G8o7X2bcoY6nYDnVxXrKjkzVTyJtrK1HZUM53AGhqm3FIM%2BeKzAVt8JRg6%2FCjhbO7y5TGcUImLVULj5meW9D1hHqjL9CIKns4xq6yc4JG4uM73s7qAQ%2Bug9hgYO3%2BVrTCbiIefrxWo%2Fgrv6mvlbkuP1o3YRBVjAVxNjC7zbm%2BBjqkAUaEZEQM0L66I0j3%2FD0vsvOZ21puYs7aAODrMHwuip3SG%2B%2BJsxKczEYMBwAja7ipDbsHBz5hX734tGDf5v86PNgpALksspF7apTzl1Rr3XxIMMOW6%2Bmsc7K143%2FKVmL0X%2B6vrnDETHbCrLMHH%2BHpVt7NPdUGYIY%2FKEQcNM1xFiVzxFKyr9gjbtOWOC6ZdDLc49KDqCa4c9vsMTvSKzapGFt8xVKX&X-Amz-Signature=c0ef3f115f1b4df021272da3c78cc318dbb6964fee273975309395cadd31f2d5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HW434JS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDddYGXtHV4nrI%2B2J%2Bkt0fFvaaXRxEhcuokcgD7D7e7yAIhAMG8GvBLYQ6%2F8xXsIBXh2A6VrlKi40y2%2Faw3J5YS4RMXKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOjPN%2BJBW%2FE2SXuuMq3AO7iopE3Xf84XkbZld%2BOWmaH5YuhSNj3ctOV3%2FhD6yBg8nuyJl7lA1uPISTgym0gJX7kAEJkFDHcMPEh9KpHTerpH6nZS%2F61zzjo9dnrsWKWB4q582DSQHwMWdhpefD5aZmURoNZGxYmKrumzDc6atDFcLSB67%2FIk1H6bmNU2NuqmPKknOJ%2BSxlwKdkpuDdiI9GcpXxjYnxTsjM%2FnadcojcfiPmOznWypqetEljKhrMGBSRa7nLC2FzN0srWz2k7yDptJDHyxd%2FbQ48EPNal8mveJiRJxl2s%2BE5cLI%2Fztelo4dJY2fiCiiY43QZnesx20mG2CuKakurRAK2Fw1qpzBGXYmUYDGcxEDA03JyUGK%2BDmq2PEEq1shWjJNf7WYA%2F1zWyG1i4BWZ5JZFxlsOlCvCQnRIT%2BKaZj%2F0PvtzEmWqlq5P8NGSfMuBhbLnytnArvMkaLpK94Sdt7yFk295%2F6J6fK5G8o7X2bcoY6nYDnVxXrKjkzVTyJtrK1HZUM53AGhqm3FIM%2BeKzAVt8JRg6%2FCjhbO7y5TGcUImLVULj5meW9D1hHqjL9CIKns4xq6yc4JG4uM73s7qAQ%2Bug9hgYO3%2BVrTCbiIefrxWo%2Fgrv6mvlbkuP1o3YRBVjAVxNjC7zbm%2BBjqkAUaEZEQM0L66I0j3%2FD0vsvOZ21puYs7aAODrMHwuip3SG%2B%2BJsxKczEYMBwAja7ipDbsHBz5hX734tGDf5v86PNgpALksspF7apTzl1Rr3XxIMMOW6%2Bmsc7K143%2FKVmL0X%2B6vrnDETHbCrLMHH%2BHpVt7NPdUGYIY%2FKEQcNM1xFiVzxFKyr9gjbtOWOC6ZdDLc49KDqCa4c9vsMTvSKzapGFt8xVKX&X-Amz-Signature=2df634e025c0169db47068e4226893a51c46c69c2e803c2f37cf105b2de106f5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
