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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URVUV2OV%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDy2124ISVBtJJAsEi4y0i4NzI7O40K%2FrNhqveDg3BcOAiAGz%2FoPSpadurmvLRCmofrhJRzG7wJ3aK%2F4BWsAj2isgyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMe9QojbV3geFMtu5XKtwDXz3xmqiqxDNs4kHl%2B%2F3I2ETC11biMWHkOKusAvro4qE6DsyHxy66FQynEjJPp9jIkijpyMtrP70e0DSLq31pp93lG98FWVVGUaPLtL5lohBujwVeq1daEWuSlTjk3Dt%2BWhzl%2FgViBXymu4HoIlXGEX34ITdTlxV9hzWRpJBqFd1NGk%2B6lQXv8bPDPHcINJSCs4pcN7L7OUPWomNUcp9pnaT9JUt1oDPDFJ0ZebqNiObqaC12yYpncUOD5VQis837K9qjV0tMkOFkggSUzxJ0DLHXbYrfUi5kcvHxOWWHVT3xNnz0wrXDcPyotNQTgP4Y9EgNSyvZFMz3o%2F30DSQ5vJ5289QrUoeSaqcpei32%2Ba73Q7HQDYkGRLt%2BOhXhNEfAcWod90qRffY5T4uZWda7qYiNHWvaKvOli6Z2mvGGAN%2BP8FWMW4XA%2F2g2lp1ygl9OSg1osHFcGaSG2CiZPxnIrOAg%2FwQnxvyWqhjv3FjIasGuK%2F%2B%2BiUV%2FzC56G9wxRA1NWz4a3Jt33HppsJFfQPBdSVCHW2gCt4ywJt79LLlU1NMpxNFtFf2ljk9BRJMTCg22jyF1NSQ2ro85H%2Fom5o%2B4IcXxJPosN0%2BByptBZqeg9xfD6%2FuGL%2BAohyMJFFEwrYy4wAY6pgHHp%2FY3mZCsHJlz5aqFTUG2GAwKuhRSeUNLoUSdFXDSroNZVju3s%2FQxvEO4x5l788Y4EtxKxgbYHRdyySix32SN0bOv5DzOyyvGaC%2BR9tv2HeJJ9CRTg2w9rix0GejMYJ7J29nSyBExAKVa9TbcKADuCYgfmVIDFEQ%2Fwt%2F%2Bke29RxexO9ECjzZkzd2%2Feawnjf%2BEhiC0sqX1QAtyllUfDUYvh80becP7&X-Amz-Signature=75e19f5dbf6de24efbe3082a55039459466a22ccec855720eea8f67748be911f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URVUV2OV%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDy2124ISVBtJJAsEi4y0i4NzI7O40K%2FrNhqveDg3BcOAiAGz%2FoPSpadurmvLRCmofrhJRzG7wJ3aK%2F4BWsAj2isgyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMe9QojbV3geFMtu5XKtwDXz3xmqiqxDNs4kHl%2B%2F3I2ETC11biMWHkOKusAvro4qE6DsyHxy66FQynEjJPp9jIkijpyMtrP70e0DSLq31pp93lG98FWVVGUaPLtL5lohBujwVeq1daEWuSlTjk3Dt%2BWhzl%2FgViBXymu4HoIlXGEX34ITdTlxV9hzWRpJBqFd1NGk%2B6lQXv8bPDPHcINJSCs4pcN7L7OUPWomNUcp9pnaT9JUt1oDPDFJ0ZebqNiObqaC12yYpncUOD5VQis837K9qjV0tMkOFkggSUzxJ0DLHXbYrfUi5kcvHxOWWHVT3xNnz0wrXDcPyotNQTgP4Y9EgNSyvZFMz3o%2F30DSQ5vJ5289QrUoeSaqcpei32%2Ba73Q7HQDYkGRLt%2BOhXhNEfAcWod90qRffY5T4uZWda7qYiNHWvaKvOli6Z2mvGGAN%2BP8FWMW4XA%2F2g2lp1ygl9OSg1osHFcGaSG2CiZPxnIrOAg%2FwQnxvyWqhjv3FjIasGuK%2F%2B%2BiUV%2FzC56G9wxRA1NWz4a3Jt33HppsJFfQPBdSVCHW2gCt4ywJt79LLlU1NMpxNFtFf2ljk9BRJMTCg22jyF1NSQ2ro85H%2Fom5o%2B4IcXxJPosN0%2BByptBZqeg9xfD6%2FuGL%2BAohyMJFFEwrYy4wAY6pgHHp%2FY3mZCsHJlz5aqFTUG2GAwKuhRSeUNLoUSdFXDSroNZVju3s%2FQxvEO4x5l788Y4EtxKxgbYHRdyySix32SN0bOv5DzOyyvGaC%2BR9tv2HeJJ9CRTg2w9rix0GejMYJ7J29nSyBExAKVa9TbcKADuCYgfmVIDFEQ%2Fwt%2F%2Bke29RxexO9ECjzZkzd2%2Feawnjf%2BEhiC0sqX1QAtyllUfDUYvh80becP7&X-Amz-Signature=6f11df2590b1ffb614dfe11522d569e26c1c959a70b8d6577e4c4fb698044194&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URVUV2OV%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDy2124ISVBtJJAsEi4y0i4NzI7O40K%2FrNhqveDg3BcOAiAGz%2FoPSpadurmvLRCmofrhJRzG7wJ3aK%2F4BWsAj2isgyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMe9QojbV3geFMtu5XKtwDXz3xmqiqxDNs4kHl%2B%2F3I2ETC11biMWHkOKusAvro4qE6DsyHxy66FQynEjJPp9jIkijpyMtrP70e0DSLq31pp93lG98FWVVGUaPLtL5lohBujwVeq1daEWuSlTjk3Dt%2BWhzl%2FgViBXymu4HoIlXGEX34ITdTlxV9hzWRpJBqFd1NGk%2B6lQXv8bPDPHcINJSCs4pcN7L7OUPWomNUcp9pnaT9JUt1oDPDFJ0ZebqNiObqaC12yYpncUOD5VQis837K9qjV0tMkOFkggSUzxJ0DLHXbYrfUi5kcvHxOWWHVT3xNnz0wrXDcPyotNQTgP4Y9EgNSyvZFMz3o%2F30DSQ5vJ5289QrUoeSaqcpei32%2Ba73Q7HQDYkGRLt%2BOhXhNEfAcWod90qRffY5T4uZWda7qYiNHWvaKvOli6Z2mvGGAN%2BP8FWMW4XA%2F2g2lp1ygl9OSg1osHFcGaSG2CiZPxnIrOAg%2FwQnxvyWqhjv3FjIasGuK%2F%2B%2BiUV%2FzC56G9wxRA1NWz4a3Jt33HppsJFfQPBdSVCHW2gCt4ywJt79LLlU1NMpxNFtFf2ljk9BRJMTCg22jyF1NSQ2ro85H%2Fom5o%2B4IcXxJPosN0%2BByptBZqeg9xfD6%2FuGL%2BAohyMJFFEwrYy4wAY6pgHHp%2FY3mZCsHJlz5aqFTUG2GAwKuhRSeUNLoUSdFXDSroNZVju3s%2FQxvEO4x5l788Y4EtxKxgbYHRdyySix32SN0bOv5DzOyyvGaC%2BR9tv2HeJJ9CRTg2w9rix0GejMYJ7J29nSyBExAKVa9TbcKADuCYgfmVIDFEQ%2Fwt%2F%2Bke29RxexO9ECjzZkzd2%2Feawnjf%2BEhiC0sqX1QAtyllUfDUYvh80becP7&X-Amz-Signature=b7155a43c9a11f6598cc5d1815802feb39d723b43010c71f038b92b5ccd2158b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URVUV2OV%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDy2124ISVBtJJAsEi4y0i4NzI7O40K%2FrNhqveDg3BcOAiAGz%2FoPSpadurmvLRCmofrhJRzG7wJ3aK%2F4BWsAj2isgyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMe9QojbV3geFMtu5XKtwDXz3xmqiqxDNs4kHl%2B%2F3I2ETC11biMWHkOKusAvro4qE6DsyHxy66FQynEjJPp9jIkijpyMtrP70e0DSLq31pp93lG98FWVVGUaPLtL5lohBujwVeq1daEWuSlTjk3Dt%2BWhzl%2FgViBXymu4HoIlXGEX34ITdTlxV9hzWRpJBqFd1NGk%2B6lQXv8bPDPHcINJSCs4pcN7L7OUPWomNUcp9pnaT9JUt1oDPDFJ0ZebqNiObqaC12yYpncUOD5VQis837K9qjV0tMkOFkggSUzxJ0DLHXbYrfUi5kcvHxOWWHVT3xNnz0wrXDcPyotNQTgP4Y9EgNSyvZFMz3o%2F30DSQ5vJ5289QrUoeSaqcpei32%2Ba73Q7HQDYkGRLt%2BOhXhNEfAcWod90qRffY5T4uZWda7qYiNHWvaKvOli6Z2mvGGAN%2BP8FWMW4XA%2F2g2lp1ygl9OSg1osHFcGaSG2CiZPxnIrOAg%2FwQnxvyWqhjv3FjIasGuK%2F%2B%2BiUV%2FzC56G9wxRA1NWz4a3Jt33HppsJFfQPBdSVCHW2gCt4ywJt79LLlU1NMpxNFtFf2ljk9BRJMTCg22jyF1NSQ2ro85H%2Fom5o%2B4IcXxJPosN0%2BByptBZqeg9xfD6%2FuGL%2BAohyMJFFEwrYy4wAY6pgHHp%2FY3mZCsHJlz5aqFTUG2GAwKuhRSeUNLoUSdFXDSroNZVju3s%2FQxvEO4x5l788Y4EtxKxgbYHRdyySix32SN0bOv5DzOyyvGaC%2BR9tv2HeJJ9CRTg2w9rix0GejMYJ7J29nSyBExAKVa9TbcKADuCYgfmVIDFEQ%2Fwt%2F%2Bke29RxexO9ECjzZkzd2%2Feawnjf%2BEhiC0sqX1QAtyllUfDUYvh80becP7&X-Amz-Signature=43905a1014a81c775f42fd3292f06e8ee32e384ee86d74fdfe21826a48c3370d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URVUV2OV%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDy2124ISVBtJJAsEi4y0i4NzI7O40K%2FrNhqveDg3BcOAiAGz%2FoPSpadurmvLRCmofrhJRzG7wJ3aK%2F4BWsAj2isgyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMe9QojbV3geFMtu5XKtwDXz3xmqiqxDNs4kHl%2B%2F3I2ETC11biMWHkOKusAvro4qE6DsyHxy66FQynEjJPp9jIkijpyMtrP70e0DSLq31pp93lG98FWVVGUaPLtL5lohBujwVeq1daEWuSlTjk3Dt%2BWhzl%2FgViBXymu4HoIlXGEX34ITdTlxV9hzWRpJBqFd1NGk%2B6lQXv8bPDPHcINJSCs4pcN7L7OUPWomNUcp9pnaT9JUt1oDPDFJ0ZebqNiObqaC12yYpncUOD5VQis837K9qjV0tMkOFkggSUzxJ0DLHXbYrfUi5kcvHxOWWHVT3xNnz0wrXDcPyotNQTgP4Y9EgNSyvZFMz3o%2F30DSQ5vJ5289QrUoeSaqcpei32%2Ba73Q7HQDYkGRLt%2BOhXhNEfAcWod90qRffY5T4uZWda7qYiNHWvaKvOli6Z2mvGGAN%2BP8FWMW4XA%2F2g2lp1ygl9OSg1osHFcGaSG2CiZPxnIrOAg%2FwQnxvyWqhjv3FjIasGuK%2F%2B%2BiUV%2FzC56G9wxRA1NWz4a3Jt33HppsJFfQPBdSVCHW2gCt4ywJt79LLlU1NMpxNFtFf2ljk9BRJMTCg22jyF1NSQ2ro85H%2Fom5o%2B4IcXxJPosN0%2BByptBZqeg9xfD6%2FuGL%2BAohyMJFFEwrYy4wAY6pgHHp%2FY3mZCsHJlz5aqFTUG2GAwKuhRSeUNLoUSdFXDSroNZVju3s%2FQxvEO4x5l788Y4EtxKxgbYHRdyySix32SN0bOv5DzOyyvGaC%2BR9tv2HeJJ9CRTg2w9rix0GejMYJ7J29nSyBExAKVa9TbcKADuCYgfmVIDFEQ%2Fwt%2F%2Bke29RxexO9ECjzZkzd2%2Feawnjf%2BEhiC0sqX1QAtyllUfDUYvh80becP7&X-Amz-Signature=81347b4e0f3b3bfdb47f90dfe5c36a4748a72889d358d14c0158dc698a3446ac&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URVUV2OV%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDy2124ISVBtJJAsEi4y0i4NzI7O40K%2FrNhqveDg3BcOAiAGz%2FoPSpadurmvLRCmofrhJRzG7wJ3aK%2F4BWsAj2isgyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMe9QojbV3geFMtu5XKtwDXz3xmqiqxDNs4kHl%2B%2F3I2ETC11biMWHkOKusAvro4qE6DsyHxy66FQynEjJPp9jIkijpyMtrP70e0DSLq31pp93lG98FWVVGUaPLtL5lohBujwVeq1daEWuSlTjk3Dt%2BWhzl%2FgViBXymu4HoIlXGEX34ITdTlxV9hzWRpJBqFd1NGk%2B6lQXv8bPDPHcINJSCs4pcN7L7OUPWomNUcp9pnaT9JUt1oDPDFJ0ZebqNiObqaC12yYpncUOD5VQis837K9qjV0tMkOFkggSUzxJ0DLHXbYrfUi5kcvHxOWWHVT3xNnz0wrXDcPyotNQTgP4Y9EgNSyvZFMz3o%2F30DSQ5vJ5289QrUoeSaqcpei32%2Ba73Q7HQDYkGRLt%2BOhXhNEfAcWod90qRffY5T4uZWda7qYiNHWvaKvOli6Z2mvGGAN%2BP8FWMW4XA%2F2g2lp1ygl9OSg1osHFcGaSG2CiZPxnIrOAg%2FwQnxvyWqhjv3FjIasGuK%2F%2B%2BiUV%2FzC56G9wxRA1NWz4a3Jt33HppsJFfQPBdSVCHW2gCt4ywJt79LLlU1NMpxNFtFf2ljk9BRJMTCg22jyF1NSQ2ro85H%2Fom5o%2B4IcXxJPosN0%2BByptBZqeg9xfD6%2FuGL%2BAohyMJFFEwrYy4wAY6pgHHp%2FY3mZCsHJlz5aqFTUG2GAwKuhRSeUNLoUSdFXDSroNZVju3s%2FQxvEO4x5l788Y4EtxKxgbYHRdyySix32SN0bOv5DzOyyvGaC%2BR9tv2HeJJ9CRTg2w9rix0GejMYJ7J29nSyBExAKVa9TbcKADuCYgfmVIDFEQ%2Fwt%2F%2Bke29RxexO9ECjzZkzd2%2Feawnjf%2BEhiC0sqX1QAtyllUfDUYvh80becP7&X-Amz-Signature=b53fff1ae3eea9928ab327c6676cffe8edd08ef9ec8b0b4405651b9dd5285198&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URVUV2OV%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDy2124ISVBtJJAsEi4y0i4NzI7O40K%2FrNhqveDg3BcOAiAGz%2FoPSpadurmvLRCmofrhJRzG7wJ3aK%2F4BWsAj2isgyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMe9QojbV3geFMtu5XKtwDXz3xmqiqxDNs4kHl%2B%2F3I2ETC11biMWHkOKusAvro4qE6DsyHxy66FQynEjJPp9jIkijpyMtrP70e0DSLq31pp93lG98FWVVGUaPLtL5lohBujwVeq1daEWuSlTjk3Dt%2BWhzl%2FgViBXymu4HoIlXGEX34ITdTlxV9hzWRpJBqFd1NGk%2B6lQXv8bPDPHcINJSCs4pcN7L7OUPWomNUcp9pnaT9JUt1oDPDFJ0ZebqNiObqaC12yYpncUOD5VQis837K9qjV0tMkOFkggSUzxJ0DLHXbYrfUi5kcvHxOWWHVT3xNnz0wrXDcPyotNQTgP4Y9EgNSyvZFMz3o%2F30DSQ5vJ5289QrUoeSaqcpei32%2Ba73Q7HQDYkGRLt%2BOhXhNEfAcWod90qRffY5T4uZWda7qYiNHWvaKvOli6Z2mvGGAN%2BP8FWMW4XA%2F2g2lp1ygl9OSg1osHFcGaSG2CiZPxnIrOAg%2FwQnxvyWqhjv3FjIasGuK%2F%2B%2BiUV%2FzC56G9wxRA1NWz4a3Jt33HppsJFfQPBdSVCHW2gCt4ywJt79LLlU1NMpxNFtFf2ljk9BRJMTCg22jyF1NSQ2ro85H%2Fom5o%2B4IcXxJPosN0%2BByptBZqeg9xfD6%2FuGL%2BAohyMJFFEwrYy4wAY6pgHHp%2FY3mZCsHJlz5aqFTUG2GAwKuhRSeUNLoUSdFXDSroNZVju3s%2FQxvEO4x5l788Y4EtxKxgbYHRdyySix32SN0bOv5DzOyyvGaC%2BR9tv2HeJJ9CRTg2w9rix0GejMYJ7J29nSyBExAKVa9TbcKADuCYgfmVIDFEQ%2Fwt%2F%2Bke29RxexO9ECjzZkzd2%2Feawnjf%2BEhiC0sqX1QAtyllUfDUYvh80becP7&X-Amz-Signature=ea8a439bb89c666983ca4e81b944e5fb19dfebc4b8fc505a871fbede41d584b2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
