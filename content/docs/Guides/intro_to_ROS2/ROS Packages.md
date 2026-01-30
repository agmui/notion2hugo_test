---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKGCEPC%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChAzGstJ9t5HCpBeAZSk%2B8lCLlsxfeO2P6bT8Jis6s4QIgANkVXMwGHEz4pmnVnUZl2WWQK5V7u4RgcD2Up9j7a8sqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSfFgcQ2MSJOOSFASrcA6tY2FyX1tFPcpteJcAwkqcAKwcSj9v9m4jXAol%2FunHPFLKRacHeWs8Hf%2FNvIVWqjd0SF7Xdq70Y49TGlqXW20GDiWq%2Bpi2gvkS9MioF6rBX3jmTw4QbRnh%2Fph9o%2BMBt710bhj1kumw7O074j4bJZf68piSs%2FHbqIIKOmmPQWbM29h%2FJo7iFsLozjnkXzDr5DQQbAy8LY4hy7oV8cbObfsvLWyC36XnsLHGsCqmTxPZ56zc7sTqbfKPi5edlkH4S7ZJyFmNvn%2FmKGAWJH20zHhaC3qOzP7vKQiN78c9EBUZCxL9z0QfKALnWBHZQhXyZ53nNLDNnemlUyUeoI4xaht4I7adc%2FxSKATah7rxTVCJHGeb5z4N7eksEK2hm5rQC8LUIJnwNoiYYnZVkZ%2B4KTCXh%2BNkWtWIRYvNnNjWVwgXGUCAQjqRFgOfoR079ZuASk7UgyTRrYEKfUEzcnX7EWdVUWnfnCoE4LeRUGF22hFQMWn5MyEi3E7H%2BYIAmxseaxYp%2FGw55sOla7dSO9wO%2F61wrelROdA0TCDV5x7vgjzFwbyrQ8H279myoDe9CxbDyIh1P%2BtpEwasTKGYxb10Oj%2BaMTeaqEJtgVscxQpXP5g5%2FQwLScxpW54zJMlynMI%2BC8MsGOqUBeq0G0ieEztGIe%2FpK%2FwguF3lTcDWDMdIT8fQdTKPfwM4itEMdJ5uF7enEVaTMquYmULCd%2Bx6jRZrPawRY02e9CJ6TBYPc%2F0z0JGSYs0tLYPmj9gkJU6DmWHj8AwcP%2BTPUGABOfvR6MltDMNErEZIOtIj6C9WeikIFzJkXv77xLZnBYxMO9HFSEt8d7Oq6VnyzruMLxVd3ubRxWM409xDv4QeE6ofI&X-Amz-Signature=3848e3ad6bb10b6f9226a205d6c8c8af8fee7d13c93e1b470694f54906d60b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKGCEPC%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChAzGstJ9t5HCpBeAZSk%2B8lCLlsxfeO2P6bT8Jis6s4QIgANkVXMwGHEz4pmnVnUZl2WWQK5V7u4RgcD2Up9j7a8sqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSfFgcQ2MSJOOSFASrcA6tY2FyX1tFPcpteJcAwkqcAKwcSj9v9m4jXAol%2FunHPFLKRacHeWs8Hf%2FNvIVWqjd0SF7Xdq70Y49TGlqXW20GDiWq%2Bpi2gvkS9MioF6rBX3jmTw4QbRnh%2Fph9o%2BMBt710bhj1kumw7O074j4bJZf68piSs%2FHbqIIKOmmPQWbM29h%2FJo7iFsLozjnkXzDr5DQQbAy8LY4hy7oV8cbObfsvLWyC36XnsLHGsCqmTxPZ56zc7sTqbfKPi5edlkH4S7ZJyFmNvn%2FmKGAWJH20zHhaC3qOzP7vKQiN78c9EBUZCxL9z0QfKALnWBHZQhXyZ53nNLDNnemlUyUeoI4xaht4I7adc%2FxSKATah7rxTVCJHGeb5z4N7eksEK2hm5rQC8LUIJnwNoiYYnZVkZ%2B4KTCXh%2BNkWtWIRYvNnNjWVwgXGUCAQjqRFgOfoR079ZuASk7UgyTRrYEKfUEzcnX7EWdVUWnfnCoE4LeRUGF22hFQMWn5MyEi3E7H%2BYIAmxseaxYp%2FGw55sOla7dSO9wO%2F61wrelROdA0TCDV5x7vgjzFwbyrQ8H279myoDe9CxbDyIh1P%2BtpEwasTKGYxb10Oj%2BaMTeaqEJtgVscxQpXP5g5%2FQwLScxpW54zJMlynMI%2BC8MsGOqUBeq0G0ieEztGIe%2FpK%2FwguF3lTcDWDMdIT8fQdTKPfwM4itEMdJ5uF7enEVaTMquYmULCd%2Bx6jRZrPawRY02e9CJ6TBYPc%2F0z0JGSYs0tLYPmj9gkJU6DmWHj8AwcP%2BTPUGABOfvR6MltDMNErEZIOtIj6C9WeikIFzJkXv77xLZnBYxMO9HFSEt8d7Oq6VnyzruMLxVd3ubRxWM409xDv4QeE6ofI&X-Amz-Signature=69d618975f9ac35c8019e1626db376fb4aaf82e3aa4629ddc17cccad25ee6779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKGCEPC%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChAzGstJ9t5HCpBeAZSk%2B8lCLlsxfeO2P6bT8Jis6s4QIgANkVXMwGHEz4pmnVnUZl2WWQK5V7u4RgcD2Up9j7a8sqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSfFgcQ2MSJOOSFASrcA6tY2FyX1tFPcpteJcAwkqcAKwcSj9v9m4jXAol%2FunHPFLKRacHeWs8Hf%2FNvIVWqjd0SF7Xdq70Y49TGlqXW20GDiWq%2Bpi2gvkS9MioF6rBX3jmTw4QbRnh%2Fph9o%2BMBt710bhj1kumw7O074j4bJZf68piSs%2FHbqIIKOmmPQWbM29h%2FJo7iFsLozjnkXzDr5DQQbAy8LY4hy7oV8cbObfsvLWyC36XnsLHGsCqmTxPZ56zc7sTqbfKPi5edlkH4S7ZJyFmNvn%2FmKGAWJH20zHhaC3qOzP7vKQiN78c9EBUZCxL9z0QfKALnWBHZQhXyZ53nNLDNnemlUyUeoI4xaht4I7adc%2FxSKATah7rxTVCJHGeb5z4N7eksEK2hm5rQC8LUIJnwNoiYYnZVkZ%2B4KTCXh%2BNkWtWIRYvNnNjWVwgXGUCAQjqRFgOfoR079ZuASk7UgyTRrYEKfUEzcnX7EWdVUWnfnCoE4LeRUGF22hFQMWn5MyEi3E7H%2BYIAmxseaxYp%2FGw55sOla7dSO9wO%2F61wrelROdA0TCDV5x7vgjzFwbyrQ8H279myoDe9CxbDyIh1P%2BtpEwasTKGYxb10Oj%2BaMTeaqEJtgVscxQpXP5g5%2FQwLScxpW54zJMlynMI%2BC8MsGOqUBeq0G0ieEztGIe%2FpK%2FwguF3lTcDWDMdIT8fQdTKPfwM4itEMdJ5uF7enEVaTMquYmULCd%2Bx6jRZrPawRY02e9CJ6TBYPc%2F0z0JGSYs0tLYPmj9gkJU6DmWHj8AwcP%2BTPUGABOfvR6MltDMNErEZIOtIj6C9WeikIFzJkXv77xLZnBYxMO9HFSEt8d7Oq6VnyzruMLxVd3ubRxWM409xDv4QeE6ofI&X-Amz-Signature=a82fd6df960757ff2fd5e63f8b1a7485bbec256d72e4ff817af389a3a1f5a2da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKGCEPC%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChAzGstJ9t5HCpBeAZSk%2B8lCLlsxfeO2P6bT8Jis6s4QIgANkVXMwGHEz4pmnVnUZl2WWQK5V7u4RgcD2Up9j7a8sqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSfFgcQ2MSJOOSFASrcA6tY2FyX1tFPcpteJcAwkqcAKwcSj9v9m4jXAol%2FunHPFLKRacHeWs8Hf%2FNvIVWqjd0SF7Xdq70Y49TGlqXW20GDiWq%2Bpi2gvkS9MioF6rBX3jmTw4QbRnh%2Fph9o%2BMBt710bhj1kumw7O074j4bJZf68piSs%2FHbqIIKOmmPQWbM29h%2FJo7iFsLozjnkXzDr5DQQbAy8LY4hy7oV8cbObfsvLWyC36XnsLHGsCqmTxPZ56zc7sTqbfKPi5edlkH4S7ZJyFmNvn%2FmKGAWJH20zHhaC3qOzP7vKQiN78c9EBUZCxL9z0QfKALnWBHZQhXyZ53nNLDNnemlUyUeoI4xaht4I7adc%2FxSKATah7rxTVCJHGeb5z4N7eksEK2hm5rQC8LUIJnwNoiYYnZVkZ%2B4KTCXh%2BNkWtWIRYvNnNjWVwgXGUCAQjqRFgOfoR079ZuASk7UgyTRrYEKfUEzcnX7EWdVUWnfnCoE4LeRUGF22hFQMWn5MyEi3E7H%2BYIAmxseaxYp%2FGw55sOla7dSO9wO%2F61wrelROdA0TCDV5x7vgjzFwbyrQ8H279myoDe9CxbDyIh1P%2BtpEwasTKGYxb10Oj%2BaMTeaqEJtgVscxQpXP5g5%2FQwLScxpW54zJMlynMI%2BC8MsGOqUBeq0G0ieEztGIe%2FpK%2FwguF3lTcDWDMdIT8fQdTKPfwM4itEMdJ5uF7enEVaTMquYmULCd%2Bx6jRZrPawRY02e9CJ6TBYPc%2F0z0JGSYs0tLYPmj9gkJU6DmWHj8AwcP%2BTPUGABOfvR6MltDMNErEZIOtIj6C9WeikIFzJkXv77xLZnBYxMO9HFSEt8d7Oq6VnyzruMLxVd3ubRxWM409xDv4QeE6ofI&X-Amz-Signature=29f0ad8a8845ed462acb0196e87086f57571d9a3be1aeb0481eed6dd9d20213a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKGCEPC%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChAzGstJ9t5HCpBeAZSk%2B8lCLlsxfeO2P6bT8Jis6s4QIgANkVXMwGHEz4pmnVnUZl2WWQK5V7u4RgcD2Up9j7a8sqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSfFgcQ2MSJOOSFASrcA6tY2FyX1tFPcpteJcAwkqcAKwcSj9v9m4jXAol%2FunHPFLKRacHeWs8Hf%2FNvIVWqjd0SF7Xdq70Y49TGlqXW20GDiWq%2Bpi2gvkS9MioF6rBX3jmTw4QbRnh%2Fph9o%2BMBt710bhj1kumw7O074j4bJZf68piSs%2FHbqIIKOmmPQWbM29h%2FJo7iFsLozjnkXzDr5DQQbAy8LY4hy7oV8cbObfsvLWyC36XnsLHGsCqmTxPZ56zc7sTqbfKPi5edlkH4S7ZJyFmNvn%2FmKGAWJH20zHhaC3qOzP7vKQiN78c9EBUZCxL9z0QfKALnWBHZQhXyZ53nNLDNnemlUyUeoI4xaht4I7adc%2FxSKATah7rxTVCJHGeb5z4N7eksEK2hm5rQC8LUIJnwNoiYYnZVkZ%2B4KTCXh%2BNkWtWIRYvNnNjWVwgXGUCAQjqRFgOfoR079ZuASk7UgyTRrYEKfUEzcnX7EWdVUWnfnCoE4LeRUGF22hFQMWn5MyEi3E7H%2BYIAmxseaxYp%2FGw55sOla7dSO9wO%2F61wrelROdA0TCDV5x7vgjzFwbyrQ8H279myoDe9CxbDyIh1P%2BtpEwasTKGYxb10Oj%2BaMTeaqEJtgVscxQpXP5g5%2FQwLScxpW54zJMlynMI%2BC8MsGOqUBeq0G0ieEztGIe%2FpK%2FwguF3lTcDWDMdIT8fQdTKPfwM4itEMdJ5uF7enEVaTMquYmULCd%2Bx6jRZrPawRY02e9CJ6TBYPc%2F0z0JGSYs0tLYPmj9gkJU6DmWHj8AwcP%2BTPUGABOfvR6MltDMNErEZIOtIj6C9WeikIFzJkXv77xLZnBYxMO9HFSEt8d7Oq6VnyzruMLxVd3ubRxWM409xDv4QeE6ofI&X-Amz-Signature=aba7319bd2675021ae627f50a000c62d982d28fe67a644924f1168ddcd8160c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKGCEPC%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChAzGstJ9t5HCpBeAZSk%2B8lCLlsxfeO2P6bT8Jis6s4QIgANkVXMwGHEz4pmnVnUZl2WWQK5V7u4RgcD2Up9j7a8sqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSfFgcQ2MSJOOSFASrcA6tY2FyX1tFPcpteJcAwkqcAKwcSj9v9m4jXAol%2FunHPFLKRacHeWs8Hf%2FNvIVWqjd0SF7Xdq70Y49TGlqXW20GDiWq%2Bpi2gvkS9MioF6rBX3jmTw4QbRnh%2Fph9o%2BMBt710bhj1kumw7O074j4bJZf68piSs%2FHbqIIKOmmPQWbM29h%2FJo7iFsLozjnkXzDr5DQQbAy8LY4hy7oV8cbObfsvLWyC36XnsLHGsCqmTxPZ56zc7sTqbfKPi5edlkH4S7ZJyFmNvn%2FmKGAWJH20zHhaC3qOzP7vKQiN78c9EBUZCxL9z0QfKALnWBHZQhXyZ53nNLDNnemlUyUeoI4xaht4I7adc%2FxSKATah7rxTVCJHGeb5z4N7eksEK2hm5rQC8LUIJnwNoiYYnZVkZ%2B4KTCXh%2BNkWtWIRYvNnNjWVwgXGUCAQjqRFgOfoR079ZuASk7UgyTRrYEKfUEzcnX7EWdVUWnfnCoE4LeRUGF22hFQMWn5MyEi3E7H%2BYIAmxseaxYp%2FGw55sOla7dSO9wO%2F61wrelROdA0TCDV5x7vgjzFwbyrQ8H279myoDe9CxbDyIh1P%2BtpEwasTKGYxb10Oj%2BaMTeaqEJtgVscxQpXP5g5%2FQwLScxpW54zJMlynMI%2BC8MsGOqUBeq0G0ieEztGIe%2FpK%2FwguF3lTcDWDMdIT8fQdTKPfwM4itEMdJ5uF7enEVaTMquYmULCd%2Bx6jRZrPawRY02e9CJ6TBYPc%2F0z0JGSYs0tLYPmj9gkJU6DmWHj8AwcP%2BTPUGABOfvR6MltDMNErEZIOtIj6C9WeikIFzJkXv77xLZnBYxMO9HFSEt8d7Oq6VnyzruMLxVd3ubRxWM409xDv4QeE6ofI&X-Amz-Signature=071eda5fff741c00a2c495c2a5f89aa0daf1dad1625b39e2677ce074cb343bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKGCEPC%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChAzGstJ9t5HCpBeAZSk%2B8lCLlsxfeO2P6bT8Jis6s4QIgANkVXMwGHEz4pmnVnUZl2WWQK5V7u4RgcD2Up9j7a8sqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSfFgcQ2MSJOOSFASrcA6tY2FyX1tFPcpteJcAwkqcAKwcSj9v9m4jXAol%2FunHPFLKRacHeWs8Hf%2FNvIVWqjd0SF7Xdq70Y49TGlqXW20GDiWq%2Bpi2gvkS9MioF6rBX3jmTw4QbRnh%2Fph9o%2BMBt710bhj1kumw7O074j4bJZf68piSs%2FHbqIIKOmmPQWbM29h%2FJo7iFsLozjnkXzDr5DQQbAy8LY4hy7oV8cbObfsvLWyC36XnsLHGsCqmTxPZ56zc7sTqbfKPi5edlkH4S7ZJyFmNvn%2FmKGAWJH20zHhaC3qOzP7vKQiN78c9EBUZCxL9z0QfKALnWBHZQhXyZ53nNLDNnemlUyUeoI4xaht4I7adc%2FxSKATah7rxTVCJHGeb5z4N7eksEK2hm5rQC8LUIJnwNoiYYnZVkZ%2B4KTCXh%2BNkWtWIRYvNnNjWVwgXGUCAQjqRFgOfoR079ZuASk7UgyTRrYEKfUEzcnX7EWdVUWnfnCoE4LeRUGF22hFQMWn5MyEi3E7H%2BYIAmxseaxYp%2FGw55sOla7dSO9wO%2F61wrelROdA0TCDV5x7vgjzFwbyrQ8H279myoDe9CxbDyIh1P%2BtpEwasTKGYxb10Oj%2BaMTeaqEJtgVscxQpXP5g5%2FQwLScxpW54zJMlynMI%2BC8MsGOqUBeq0G0ieEztGIe%2FpK%2FwguF3lTcDWDMdIT8fQdTKPfwM4itEMdJ5uF7enEVaTMquYmULCd%2Bx6jRZrPawRY02e9CJ6TBYPc%2F0z0JGSYs0tLYPmj9gkJU6DmWHj8AwcP%2BTPUGABOfvR6MltDMNErEZIOtIj6C9WeikIFzJkXv77xLZnBYxMO9HFSEt8d7Oq6VnyzruMLxVd3ubRxWM409xDv4QeE6ofI&X-Amz-Signature=a96e7380cb548e6e409d37d96c523d6ef032a0ac3849fefe3cb71ca8cb863002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
