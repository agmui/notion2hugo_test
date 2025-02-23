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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RRUZMEQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRl6At66h8I4h24EBqzsg2NVGQ%2B4nDY3UBALcGJmG%2FKwIhAIqjWbmGam2IAIH8WbG6C7guXDWH%2BGWdxBWdd4AfFrsVKv8DCBgQABoMNjM3NDIzMTgzODA1IgwXo7hkDksp%2BJKZJy4q3APoy%2BIaHazppkeEBZQUKzwSzNUnWTv1dbUsXIBtT0DrOWyO2caCP3XRvWmiss3Pq5w1G11nabtahrUu6tfG7z1zmWf%2BWr681DfTw5%2B0AFMZfoqWJ6SxBmcXVvWyVsOk%2FeF6toKGjHEZDszRQbwAxwzaZOdecPHI8%2FUIBbrBrjykMepB1II%2FjPwiDpgA7pCCHjeoFsMfQM4YxX2z4%2FOMxzoxwq8y2jl2jGVviQjVsKAZsZiqPfJesS0gT3s4XzWIciY4oQiG3uuWQcBCODt9Lmo8P8%2Bf2s%2FuzgBIp5Mq7%2FqxEIC%2FvzDVilFsuqN0EtV8MrkX709k2HQBeRcf11malasRhXb8FBTUAH%2F5C1d968cmJ2Q4qzAzVDn934weOMt7VYnKbMd6rUBYvfcxoQu%2Fi4Cs8uD5NglHGeVRnTF5QRWe%2FGJKmOCClnAazHM3NAbCqAMwyPFT9az7RoF7cMe%2B2Y%2BSdN6aYFV6PxrMHxgM%2BvN%2FD1PBDBmbLvNLAMrXrCbPQm%2B%2B4cSAXXAiRV%2BqzeD9J18hfY93Z7cfebTa1H%2BKTmGXY8M1W5cqHdgoxjW0yiOtvoZNGh1pw44%2FmVM6nKWgE1phiILzGl21YOvJrcZL0KwXf2sFCpJGQxcDNn0S7TCn3%2By9BjqkARlpDM6kiQaC6OJBoBUDs%2FpvCvF8OYxfklMnK0yxUJZdE6b5s39A7XDCbPJUCfMRy39m5IIA%2Bakc%2B%2BmD5%2B67%2FOz5WxAEk20D15GS8Z31n0uKO5YaxpvEVs8dVAhLtbc0aJSwp0lK8j%2FGAqVa7UNylc%2BWhQPiS6lqlCO5F4Y09n6V4n%2FxeUHihGsDnKCv59Jk50w0wG0IQUlvcAM9Ty14zdn8f%2B5H&X-Amz-Signature=d1ee291c4f41017b55998975089bcdc218411942f91031d52a69567b88feae62&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RRUZMEQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRl6At66h8I4h24EBqzsg2NVGQ%2B4nDY3UBALcGJmG%2FKwIhAIqjWbmGam2IAIH8WbG6C7guXDWH%2BGWdxBWdd4AfFrsVKv8DCBgQABoMNjM3NDIzMTgzODA1IgwXo7hkDksp%2BJKZJy4q3APoy%2BIaHazppkeEBZQUKzwSzNUnWTv1dbUsXIBtT0DrOWyO2caCP3XRvWmiss3Pq5w1G11nabtahrUu6tfG7z1zmWf%2BWr681DfTw5%2B0AFMZfoqWJ6SxBmcXVvWyVsOk%2FeF6toKGjHEZDszRQbwAxwzaZOdecPHI8%2FUIBbrBrjykMepB1II%2FjPwiDpgA7pCCHjeoFsMfQM4YxX2z4%2FOMxzoxwq8y2jl2jGVviQjVsKAZsZiqPfJesS0gT3s4XzWIciY4oQiG3uuWQcBCODt9Lmo8P8%2Bf2s%2FuzgBIp5Mq7%2FqxEIC%2FvzDVilFsuqN0EtV8MrkX709k2HQBeRcf11malasRhXb8FBTUAH%2F5C1d968cmJ2Q4qzAzVDn934weOMt7VYnKbMd6rUBYvfcxoQu%2Fi4Cs8uD5NglHGeVRnTF5QRWe%2FGJKmOCClnAazHM3NAbCqAMwyPFT9az7RoF7cMe%2B2Y%2BSdN6aYFV6PxrMHxgM%2BvN%2FD1PBDBmbLvNLAMrXrCbPQm%2B%2B4cSAXXAiRV%2BqzeD9J18hfY93Z7cfebTa1H%2BKTmGXY8M1W5cqHdgoxjW0yiOtvoZNGh1pw44%2FmVM6nKWgE1phiILzGl21YOvJrcZL0KwXf2sFCpJGQxcDNn0S7TCn3%2By9BjqkARlpDM6kiQaC6OJBoBUDs%2FpvCvF8OYxfklMnK0yxUJZdE6b5s39A7XDCbPJUCfMRy39m5IIA%2Bakc%2B%2BmD5%2B67%2FOz5WxAEk20D15GS8Z31n0uKO5YaxpvEVs8dVAhLtbc0aJSwp0lK8j%2FGAqVa7UNylc%2BWhQPiS6lqlCO5F4Y09n6V4n%2FxeUHihGsDnKCv59Jk50w0wG0IQUlvcAM9Ty14zdn8f%2B5H&X-Amz-Signature=f9aa64ce6783e69b31cac9152237282d41e66efb75d79da4e0e1a3f65fcb32df&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RRUZMEQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRl6At66h8I4h24EBqzsg2NVGQ%2B4nDY3UBALcGJmG%2FKwIhAIqjWbmGam2IAIH8WbG6C7guXDWH%2BGWdxBWdd4AfFrsVKv8DCBgQABoMNjM3NDIzMTgzODA1IgwXo7hkDksp%2BJKZJy4q3APoy%2BIaHazppkeEBZQUKzwSzNUnWTv1dbUsXIBtT0DrOWyO2caCP3XRvWmiss3Pq5w1G11nabtahrUu6tfG7z1zmWf%2BWr681DfTw5%2B0AFMZfoqWJ6SxBmcXVvWyVsOk%2FeF6toKGjHEZDszRQbwAxwzaZOdecPHI8%2FUIBbrBrjykMepB1II%2FjPwiDpgA7pCCHjeoFsMfQM4YxX2z4%2FOMxzoxwq8y2jl2jGVviQjVsKAZsZiqPfJesS0gT3s4XzWIciY4oQiG3uuWQcBCODt9Lmo8P8%2Bf2s%2FuzgBIp5Mq7%2FqxEIC%2FvzDVilFsuqN0EtV8MrkX709k2HQBeRcf11malasRhXb8FBTUAH%2F5C1d968cmJ2Q4qzAzVDn934weOMt7VYnKbMd6rUBYvfcxoQu%2Fi4Cs8uD5NglHGeVRnTF5QRWe%2FGJKmOCClnAazHM3NAbCqAMwyPFT9az7RoF7cMe%2B2Y%2BSdN6aYFV6PxrMHxgM%2BvN%2FD1PBDBmbLvNLAMrXrCbPQm%2B%2B4cSAXXAiRV%2BqzeD9J18hfY93Z7cfebTa1H%2BKTmGXY8M1W5cqHdgoxjW0yiOtvoZNGh1pw44%2FmVM6nKWgE1phiILzGl21YOvJrcZL0KwXf2sFCpJGQxcDNn0S7TCn3%2By9BjqkARlpDM6kiQaC6OJBoBUDs%2FpvCvF8OYxfklMnK0yxUJZdE6b5s39A7XDCbPJUCfMRy39m5IIA%2Bakc%2B%2BmD5%2B67%2FOz5WxAEk20D15GS8Z31n0uKO5YaxpvEVs8dVAhLtbc0aJSwp0lK8j%2FGAqVa7UNylc%2BWhQPiS6lqlCO5F4Y09n6V4n%2FxeUHihGsDnKCv59Jk50w0wG0IQUlvcAM9Ty14zdn8f%2B5H&X-Amz-Signature=9a143b1e5ddc7bda276ec2537e4fb148148cfab1ea41866dc15ba693b89a70b1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RRUZMEQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRl6At66h8I4h24EBqzsg2NVGQ%2B4nDY3UBALcGJmG%2FKwIhAIqjWbmGam2IAIH8WbG6C7guXDWH%2BGWdxBWdd4AfFrsVKv8DCBgQABoMNjM3NDIzMTgzODA1IgwXo7hkDksp%2BJKZJy4q3APoy%2BIaHazppkeEBZQUKzwSzNUnWTv1dbUsXIBtT0DrOWyO2caCP3XRvWmiss3Pq5w1G11nabtahrUu6tfG7z1zmWf%2BWr681DfTw5%2B0AFMZfoqWJ6SxBmcXVvWyVsOk%2FeF6toKGjHEZDszRQbwAxwzaZOdecPHI8%2FUIBbrBrjykMepB1II%2FjPwiDpgA7pCCHjeoFsMfQM4YxX2z4%2FOMxzoxwq8y2jl2jGVviQjVsKAZsZiqPfJesS0gT3s4XzWIciY4oQiG3uuWQcBCODt9Lmo8P8%2Bf2s%2FuzgBIp5Mq7%2FqxEIC%2FvzDVilFsuqN0EtV8MrkX709k2HQBeRcf11malasRhXb8FBTUAH%2F5C1d968cmJ2Q4qzAzVDn934weOMt7VYnKbMd6rUBYvfcxoQu%2Fi4Cs8uD5NglHGeVRnTF5QRWe%2FGJKmOCClnAazHM3NAbCqAMwyPFT9az7RoF7cMe%2B2Y%2BSdN6aYFV6PxrMHxgM%2BvN%2FD1PBDBmbLvNLAMrXrCbPQm%2B%2B4cSAXXAiRV%2BqzeD9J18hfY93Z7cfebTa1H%2BKTmGXY8M1W5cqHdgoxjW0yiOtvoZNGh1pw44%2FmVM6nKWgE1phiILzGl21YOvJrcZL0KwXf2sFCpJGQxcDNn0S7TCn3%2By9BjqkARlpDM6kiQaC6OJBoBUDs%2FpvCvF8OYxfklMnK0yxUJZdE6b5s39A7XDCbPJUCfMRy39m5IIA%2Bakc%2B%2BmD5%2B67%2FOz5WxAEk20D15GS8Z31n0uKO5YaxpvEVs8dVAhLtbc0aJSwp0lK8j%2FGAqVa7UNylc%2BWhQPiS6lqlCO5F4Y09n6V4n%2FxeUHihGsDnKCv59Jk50w0wG0IQUlvcAM9Ty14zdn8f%2B5H&X-Amz-Signature=680d8dd979e75982f4fea474e97e25b8012fb6b716b1fb816c93c06c3302a5c2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RRUZMEQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRl6At66h8I4h24EBqzsg2NVGQ%2B4nDY3UBALcGJmG%2FKwIhAIqjWbmGam2IAIH8WbG6C7guXDWH%2BGWdxBWdd4AfFrsVKv8DCBgQABoMNjM3NDIzMTgzODA1IgwXo7hkDksp%2BJKZJy4q3APoy%2BIaHazppkeEBZQUKzwSzNUnWTv1dbUsXIBtT0DrOWyO2caCP3XRvWmiss3Pq5w1G11nabtahrUu6tfG7z1zmWf%2BWr681DfTw5%2B0AFMZfoqWJ6SxBmcXVvWyVsOk%2FeF6toKGjHEZDszRQbwAxwzaZOdecPHI8%2FUIBbrBrjykMepB1II%2FjPwiDpgA7pCCHjeoFsMfQM4YxX2z4%2FOMxzoxwq8y2jl2jGVviQjVsKAZsZiqPfJesS0gT3s4XzWIciY4oQiG3uuWQcBCODt9Lmo8P8%2Bf2s%2FuzgBIp5Mq7%2FqxEIC%2FvzDVilFsuqN0EtV8MrkX709k2HQBeRcf11malasRhXb8FBTUAH%2F5C1d968cmJ2Q4qzAzVDn934weOMt7VYnKbMd6rUBYvfcxoQu%2Fi4Cs8uD5NglHGeVRnTF5QRWe%2FGJKmOCClnAazHM3NAbCqAMwyPFT9az7RoF7cMe%2B2Y%2BSdN6aYFV6PxrMHxgM%2BvN%2FD1PBDBmbLvNLAMrXrCbPQm%2B%2B4cSAXXAiRV%2BqzeD9J18hfY93Z7cfebTa1H%2BKTmGXY8M1W5cqHdgoxjW0yiOtvoZNGh1pw44%2FmVM6nKWgE1phiILzGl21YOvJrcZL0KwXf2sFCpJGQxcDNn0S7TCn3%2By9BjqkARlpDM6kiQaC6OJBoBUDs%2FpvCvF8OYxfklMnK0yxUJZdE6b5s39A7XDCbPJUCfMRy39m5IIA%2Bakc%2B%2BmD5%2B67%2FOz5WxAEk20D15GS8Z31n0uKO5YaxpvEVs8dVAhLtbc0aJSwp0lK8j%2FGAqVa7UNylc%2BWhQPiS6lqlCO5F4Y09n6V4n%2FxeUHihGsDnKCv59Jk50w0wG0IQUlvcAM9Ty14zdn8f%2B5H&X-Amz-Signature=ae6805bdbe3b5698b771dae30bc2214a48ef0305d04caf3a07f8c936b9a5aeff&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RRUZMEQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRl6At66h8I4h24EBqzsg2NVGQ%2B4nDY3UBALcGJmG%2FKwIhAIqjWbmGam2IAIH8WbG6C7guXDWH%2BGWdxBWdd4AfFrsVKv8DCBgQABoMNjM3NDIzMTgzODA1IgwXo7hkDksp%2BJKZJy4q3APoy%2BIaHazppkeEBZQUKzwSzNUnWTv1dbUsXIBtT0DrOWyO2caCP3XRvWmiss3Pq5w1G11nabtahrUu6tfG7z1zmWf%2BWr681DfTw5%2B0AFMZfoqWJ6SxBmcXVvWyVsOk%2FeF6toKGjHEZDszRQbwAxwzaZOdecPHI8%2FUIBbrBrjykMepB1II%2FjPwiDpgA7pCCHjeoFsMfQM4YxX2z4%2FOMxzoxwq8y2jl2jGVviQjVsKAZsZiqPfJesS0gT3s4XzWIciY4oQiG3uuWQcBCODt9Lmo8P8%2Bf2s%2FuzgBIp5Mq7%2FqxEIC%2FvzDVilFsuqN0EtV8MrkX709k2HQBeRcf11malasRhXb8FBTUAH%2F5C1d968cmJ2Q4qzAzVDn934weOMt7VYnKbMd6rUBYvfcxoQu%2Fi4Cs8uD5NglHGeVRnTF5QRWe%2FGJKmOCClnAazHM3NAbCqAMwyPFT9az7RoF7cMe%2B2Y%2BSdN6aYFV6PxrMHxgM%2BvN%2FD1PBDBmbLvNLAMrXrCbPQm%2B%2B4cSAXXAiRV%2BqzeD9J18hfY93Z7cfebTa1H%2BKTmGXY8M1W5cqHdgoxjW0yiOtvoZNGh1pw44%2FmVM6nKWgE1phiILzGl21YOvJrcZL0KwXf2sFCpJGQxcDNn0S7TCn3%2By9BjqkARlpDM6kiQaC6OJBoBUDs%2FpvCvF8OYxfklMnK0yxUJZdE6b5s39A7XDCbPJUCfMRy39m5IIA%2Bakc%2B%2BmD5%2B67%2FOz5WxAEk20D15GS8Z31n0uKO5YaxpvEVs8dVAhLtbc0aJSwp0lK8j%2FGAqVa7UNylc%2BWhQPiS6lqlCO5F4Y09n6V4n%2FxeUHihGsDnKCv59Jk50w0wG0IQUlvcAM9Ty14zdn8f%2B5H&X-Amz-Signature=a37194be3b650fc602c0eb0f68dcad9ebd20e476644a9b09f6b909a8d13d70cd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RRUZMEQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRl6At66h8I4h24EBqzsg2NVGQ%2B4nDY3UBALcGJmG%2FKwIhAIqjWbmGam2IAIH8WbG6C7guXDWH%2BGWdxBWdd4AfFrsVKv8DCBgQABoMNjM3NDIzMTgzODA1IgwXo7hkDksp%2BJKZJy4q3APoy%2BIaHazppkeEBZQUKzwSzNUnWTv1dbUsXIBtT0DrOWyO2caCP3XRvWmiss3Pq5w1G11nabtahrUu6tfG7z1zmWf%2BWr681DfTw5%2B0AFMZfoqWJ6SxBmcXVvWyVsOk%2FeF6toKGjHEZDszRQbwAxwzaZOdecPHI8%2FUIBbrBrjykMepB1II%2FjPwiDpgA7pCCHjeoFsMfQM4YxX2z4%2FOMxzoxwq8y2jl2jGVviQjVsKAZsZiqPfJesS0gT3s4XzWIciY4oQiG3uuWQcBCODt9Lmo8P8%2Bf2s%2FuzgBIp5Mq7%2FqxEIC%2FvzDVilFsuqN0EtV8MrkX709k2HQBeRcf11malasRhXb8FBTUAH%2F5C1d968cmJ2Q4qzAzVDn934weOMt7VYnKbMd6rUBYvfcxoQu%2Fi4Cs8uD5NglHGeVRnTF5QRWe%2FGJKmOCClnAazHM3NAbCqAMwyPFT9az7RoF7cMe%2B2Y%2BSdN6aYFV6PxrMHxgM%2BvN%2FD1PBDBmbLvNLAMrXrCbPQm%2B%2B4cSAXXAiRV%2BqzeD9J18hfY93Z7cfebTa1H%2BKTmGXY8M1W5cqHdgoxjW0yiOtvoZNGh1pw44%2FmVM6nKWgE1phiILzGl21YOvJrcZL0KwXf2sFCpJGQxcDNn0S7TCn3%2By9BjqkARlpDM6kiQaC6OJBoBUDs%2FpvCvF8OYxfklMnK0yxUJZdE6b5s39A7XDCbPJUCfMRy39m5IIA%2Bakc%2B%2BmD5%2B67%2FOz5WxAEk20D15GS8Z31n0uKO5YaxpvEVs8dVAhLtbc0aJSwp0lK8j%2FGAqVa7UNylc%2BWhQPiS6lqlCO5F4Y09n6V4n%2FxeUHihGsDnKCv59Jk50w0wG0IQUlvcAM9Ty14zdn8f%2B5H&X-Amz-Signature=b15786af9c749b5c80f8009201dc3770353f0922184d6c5319ca006e4bf83c1f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
