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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QELJN2QN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIH8R%2FsJKK8YKNbkAiMlpX2lc4DGQlve1PsS0rhNXVhWEAiEA07wJanntsVn0k%2B6XOQ8CZQ0NBz02b16zZJx4jBNjpnUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkq1wWWr5LQqjyoSSrcA0U80Y6fm0J2t5hJEvpAMDeaSR6joOpzlflyhB4dZt%2BUfZ6uqe2ncw2MltCfbtdIrs00vMk30tYz%2BgD8CfpYucVQYMjqzJL%2FC%2Bqez1k2inGKEoBeWAGFEeizusZOq%2FXcoCBjtvmR%2FAEmTWlP3CTa1acAsoizhDvXujqptD0ObDcyFBwOjO58vUpS%2B5OP615Al54L%2B0NIZ3rPUdgG4pcghKL8sPlL8AXKailViJQAPalD9OusMXyRawGnwGxXuossZV9wU%2FgsvS08fagVO8lZsU7iVqzkwcV3Bwx46q8F593wryS7ZVQwWbhU6ebo%2B9J%2FZy5Wf8FZapscNqSVt%2FseMMur49oSuOeTs105H9esmhhpuFQQxfSCjsNAx8zB%2BAtlUWT1Sfe8OzTgY9%2BWpKDcC8aUPWG5m76EAyGP79N6UJtYY68L3PRgUDjAMMvV293O6%2F5H8ukmHHpPdZegMCCuB2RhiVa1gOPAryiMPn22cHLaqvrDR1SMRTYyviouzLQjUPDkCIy%2Bt07VY%2FhhUakpAwtH2BjtwfpbECfzfwj4lBD8S9ySBWIWlF0R3210RbXVWAt2vGA5CKnyHoQrUV8nIUDTfLMjuPFPINju6IZjsgC7xALGwXsd7WmiAFNaMNb9gMEGOqUB94uvj9eBC%2FopSbSjqM22SRou%2B%2B5pwJuzFa%2Fw523C8%2F3vvgbwLKR81Bsw0nb2LYKpH%2FbMX%2FLLnQsRxNDCVZRmuSy%2Fjw4XVUVmIJ4cr8%2B5USDlJ0iAkPRRAIsxVFZ45VoS3VSW8xwbMDmWC6J1Jx8ab0QxOmw%2FCBC7F8xTpQAVyIATXGdb2F8innKulvZkCAmsqqGX2VAG2fCKDy6w5ua48b%2BvIyAQ&X-Amz-Signature=969e00a1941ee163dfd0df7e434bffdb0d1cb8359f2395c4946aa7e48add368e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QELJN2QN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIH8R%2FsJKK8YKNbkAiMlpX2lc4DGQlve1PsS0rhNXVhWEAiEA07wJanntsVn0k%2B6XOQ8CZQ0NBz02b16zZJx4jBNjpnUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkq1wWWr5LQqjyoSSrcA0U80Y6fm0J2t5hJEvpAMDeaSR6joOpzlflyhB4dZt%2BUfZ6uqe2ncw2MltCfbtdIrs00vMk30tYz%2BgD8CfpYucVQYMjqzJL%2FC%2Bqez1k2inGKEoBeWAGFEeizusZOq%2FXcoCBjtvmR%2FAEmTWlP3CTa1acAsoizhDvXujqptD0ObDcyFBwOjO58vUpS%2B5OP615Al54L%2B0NIZ3rPUdgG4pcghKL8sPlL8AXKailViJQAPalD9OusMXyRawGnwGxXuossZV9wU%2FgsvS08fagVO8lZsU7iVqzkwcV3Bwx46q8F593wryS7ZVQwWbhU6ebo%2B9J%2FZy5Wf8FZapscNqSVt%2FseMMur49oSuOeTs105H9esmhhpuFQQxfSCjsNAx8zB%2BAtlUWT1Sfe8OzTgY9%2BWpKDcC8aUPWG5m76EAyGP79N6UJtYY68L3PRgUDjAMMvV293O6%2F5H8ukmHHpPdZegMCCuB2RhiVa1gOPAryiMPn22cHLaqvrDR1SMRTYyviouzLQjUPDkCIy%2Bt07VY%2FhhUakpAwtH2BjtwfpbECfzfwj4lBD8S9ySBWIWlF0R3210RbXVWAt2vGA5CKnyHoQrUV8nIUDTfLMjuPFPINju6IZjsgC7xALGwXsd7WmiAFNaMNb9gMEGOqUB94uvj9eBC%2FopSbSjqM22SRou%2B%2B5pwJuzFa%2Fw523C8%2F3vvgbwLKR81Bsw0nb2LYKpH%2FbMX%2FLLnQsRxNDCVZRmuSy%2Fjw4XVUVmIJ4cr8%2B5USDlJ0iAkPRRAIsxVFZ45VoS3VSW8xwbMDmWC6J1Jx8ab0QxOmw%2FCBC7F8xTpQAVyIATXGdb2F8innKulvZkCAmsqqGX2VAG2fCKDy6w5ua48b%2BvIyAQ&X-Amz-Signature=c385ed1eb6d4c1ca7d06f9fe09ab026ae4e499eac8648ebef9b327f5ba9eccc9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QELJN2QN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIH8R%2FsJKK8YKNbkAiMlpX2lc4DGQlve1PsS0rhNXVhWEAiEA07wJanntsVn0k%2B6XOQ8CZQ0NBz02b16zZJx4jBNjpnUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkq1wWWr5LQqjyoSSrcA0U80Y6fm0J2t5hJEvpAMDeaSR6joOpzlflyhB4dZt%2BUfZ6uqe2ncw2MltCfbtdIrs00vMk30tYz%2BgD8CfpYucVQYMjqzJL%2FC%2Bqez1k2inGKEoBeWAGFEeizusZOq%2FXcoCBjtvmR%2FAEmTWlP3CTa1acAsoizhDvXujqptD0ObDcyFBwOjO58vUpS%2B5OP615Al54L%2B0NIZ3rPUdgG4pcghKL8sPlL8AXKailViJQAPalD9OusMXyRawGnwGxXuossZV9wU%2FgsvS08fagVO8lZsU7iVqzkwcV3Bwx46q8F593wryS7ZVQwWbhU6ebo%2B9J%2FZy5Wf8FZapscNqSVt%2FseMMur49oSuOeTs105H9esmhhpuFQQxfSCjsNAx8zB%2BAtlUWT1Sfe8OzTgY9%2BWpKDcC8aUPWG5m76EAyGP79N6UJtYY68L3PRgUDjAMMvV293O6%2F5H8ukmHHpPdZegMCCuB2RhiVa1gOPAryiMPn22cHLaqvrDR1SMRTYyviouzLQjUPDkCIy%2Bt07VY%2FhhUakpAwtH2BjtwfpbECfzfwj4lBD8S9ySBWIWlF0R3210RbXVWAt2vGA5CKnyHoQrUV8nIUDTfLMjuPFPINju6IZjsgC7xALGwXsd7WmiAFNaMNb9gMEGOqUB94uvj9eBC%2FopSbSjqM22SRou%2B%2B5pwJuzFa%2Fw523C8%2F3vvgbwLKR81Bsw0nb2LYKpH%2FbMX%2FLLnQsRxNDCVZRmuSy%2Fjw4XVUVmIJ4cr8%2B5USDlJ0iAkPRRAIsxVFZ45VoS3VSW8xwbMDmWC6J1Jx8ab0QxOmw%2FCBC7F8xTpQAVyIATXGdb2F8innKulvZkCAmsqqGX2VAG2fCKDy6w5ua48b%2BvIyAQ&X-Amz-Signature=59d859020faf3359e179ab4a3de030509e06638fc33a3b063bf8790f000e7149&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QELJN2QN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIH8R%2FsJKK8YKNbkAiMlpX2lc4DGQlve1PsS0rhNXVhWEAiEA07wJanntsVn0k%2B6XOQ8CZQ0NBz02b16zZJx4jBNjpnUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkq1wWWr5LQqjyoSSrcA0U80Y6fm0J2t5hJEvpAMDeaSR6joOpzlflyhB4dZt%2BUfZ6uqe2ncw2MltCfbtdIrs00vMk30tYz%2BgD8CfpYucVQYMjqzJL%2FC%2Bqez1k2inGKEoBeWAGFEeizusZOq%2FXcoCBjtvmR%2FAEmTWlP3CTa1acAsoizhDvXujqptD0ObDcyFBwOjO58vUpS%2B5OP615Al54L%2B0NIZ3rPUdgG4pcghKL8sPlL8AXKailViJQAPalD9OusMXyRawGnwGxXuossZV9wU%2FgsvS08fagVO8lZsU7iVqzkwcV3Bwx46q8F593wryS7ZVQwWbhU6ebo%2B9J%2FZy5Wf8FZapscNqSVt%2FseMMur49oSuOeTs105H9esmhhpuFQQxfSCjsNAx8zB%2BAtlUWT1Sfe8OzTgY9%2BWpKDcC8aUPWG5m76EAyGP79N6UJtYY68L3PRgUDjAMMvV293O6%2F5H8ukmHHpPdZegMCCuB2RhiVa1gOPAryiMPn22cHLaqvrDR1SMRTYyviouzLQjUPDkCIy%2Bt07VY%2FhhUakpAwtH2BjtwfpbECfzfwj4lBD8S9ySBWIWlF0R3210RbXVWAt2vGA5CKnyHoQrUV8nIUDTfLMjuPFPINju6IZjsgC7xALGwXsd7WmiAFNaMNb9gMEGOqUB94uvj9eBC%2FopSbSjqM22SRou%2B%2B5pwJuzFa%2Fw523C8%2F3vvgbwLKR81Bsw0nb2LYKpH%2FbMX%2FLLnQsRxNDCVZRmuSy%2Fjw4XVUVmIJ4cr8%2B5USDlJ0iAkPRRAIsxVFZ45VoS3VSW8xwbMDmWC6J1Jx8ab0QxOmw%2FCBC7F8xTpQAVyIATXGdb2F8innKulvZkCAmsqqGX2VAG2fCKDy6w5ua48b%2BvIyAQ&X-Amz-Signature=504abb381e4ba972d006fa6bd8efdbaa73e6daaba607bd824129c6984faaf4d1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QELJN2QN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIH8R%2FsJKK8YKNbkAiMlpX2lc4DGQlve1PsS0rhNXVhWEAiEA07wJanntsVn0k%2B6XOQ8CZQ0NBz02b16zZJx4jBNjpnUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkq1wWWr5LQqjyoSSrcA0U80Y6fm0J2t5hJEvpAMDeaSR6joOpzlflyhB4dZt%2BUfZ6uqe2ncw2MltCfbtdIrs00vMk30tYz%2BgD8CfpYucVQYMjqzJL%2FC%2Bqez1k2inGKEoBeWAGFEeizusZOq%2FXcoCBjtvmR%2FAEmTWlP3CTa1acAsoizhDvXujqptD0ObDcyFBwOjO58vUpS%2B5OP615Al54L%2B0NIZ3rPUdgG4pcghKL8sPlL8AXKailViJQAPalD9OusMXyRawGnwGxXuossZV9wU%2FgsvS08fagVO8lZsU7iVqzkwcV3Bwx46q8F593wryS7ZVQwWbhU6ebo%2B9J%2FZy5Wf8FZapscNqSVt%2FseMMur49oSuOeTs105H9esmhhpuFQQxfSCjsNAx8zB%2BAtlUWT1Sfe8OzTgY9%2BWpKDcC8aUPWG5m76EAyGP79N6UJtYY68L3PRgUDjAMMvV293O6%2F5H8ukmHHpPdZegMCCuB2RhiVa1gOPAryiMPn22cHLaqvrDR1SMRTYyviouzLQjUPDkCIy%2Bt07VY%2FhhUakpAwtH2BjtwfpbECfzfwj4lBD8S9ySBWIWlF0R3210RbXVWAt2vGA5CKnyHoQrUV8nIUDTfLMjuPFPINju6IZjsgC7xALGwXsd7WmiAFNaMNb9gMEGOqUB94uvj9eBC%2FopSbSjqM22SRou%2B%2B5pwJuzFa%2Fw523C8%2F3vvgbwLKR81Bsw0nb2LYKpH%2FbMX%2FLLnQsRxNDCVZRmuSy%2Fjw4XVUVmIJ4cr8%2B5USDlJ0iAkPRRAIsxVFZ45VoS3VSW8xwbMDmWC6J1Jx8ab0QxOmw%2FCBC7F8xTpQAVyIATXGdb2F8innKulvZkCAmsqqGX2VAG2fCKDy6w5ua48b%2BvIyAQ&X-Amz-Signature=b657c314ba567d435be91e5cbd64157c91fb0a0a64cebef03e810fcaf0100e55&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QELJN2QN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIH8R%2FsJKK8YKNbkAiMlpX2lc4DGQlve1PsS0rhNXVhWEAiEA07wJanntsVn0k%2B6XOQ8CZQ0NBz02b16zZJx4jBNjpnUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkq1wWWr5LQqjyoSSrcA0U80Y6fm0J2t5hJEvpAMDeaSR6joOpzlflyhB4dZt%2BUfZ6uqe2ncw2MltCfbtdIrs00vMk30tYz%2BgD8CfpYucVQYMjqzJL%2FC%2Bqez1k2inGKEoBeWAGFEeizusZOq%2FXcoCBjtvmR%2FAEmTWlP3CTa1acAsoizhDvXujqptD0ObDcyFBwOjO58vUpS%2B5OP615Al54L%2B0NIZ3rPUdgG4pcghKL8sPlL8AXKailViJQAPalD9OusMXyRawGnwGxXuossZV9wU%2FgsvS08fagVO8lZsU7iVqzkwcV3Bwx46q8F593wryS7ZVQwWbhU6ebo%2B9J%2FZy5Wf8FZapscNqSVt%2FseMMur49oSuOeTs105H9esmhhpuFQQxfSCjsNAx8zB%2BAtlUWT1Sfe8OzTgY9%2BWpKDcC8aUPWG5m76EAyGP79N6UJtYY68L3PRgUDjAMMvV293O6%2F5H8ukmHHpPdZegMCCuB2RhiVa1gOPAryiMPn22cHLaqvrDR1SMRTYyviouzLQjUPDkCIy%2Bt07VY%2FhhUakpAwtH2BjtwfpbECfzfwj4lBD8S9ySBWIWlF0R3210RbXVWAt2vGA5CKnyHoQrUV8nIUDTfLMjuPFPINju6IZjsgC7xALGwXsd7WmiAFNaMNb9gMEGOqUB94uvj9eBC%2FopSbSjqM22SRou%2B%2B5pwJuzFa%2Fw523C8%2F3vvgbwLKR81Bsw0nb2LYKpH%2FbMX%2FLLnQsRxNDCVZRmuSy%2Fjw4XVUVmIJ4cr8%2B5USDlJ0iAkPRRAIsxVFZ45VoS3VSW8xwbMDmWC6J1Jx8ab0QxOmw%2FCBC7F8xTpQAVyIATXGdb2F8innKulvZkCAmsqqGX2VAG2fCKDy6w5ua48b%2BvIyAQ&X-Amz-Signature=534187646aef3f5b10d98e678ab46d923538465104a93217abfb547d6126dac6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QELJN2QN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIH8R%2FsJKK8YKNbkAiMlpX2lc4DGQlve1PsS0rhNXVhWEAiEA07wJanntsVn0k%2B6XOQ8CZQ0NBz02b16zZJx4jBNjpnUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkq1wWWr5LQqjyoSSrcA0U80Y6fm0J2t5hJEvpAMDeaSR6joOpzlflyhB4dZt%2BUfZ6uqe2ncw2MltCfbtdIrs00vMk30tYz%2BgD8CfpYucVQYMjqzJL%2FC%2Bqez1k2inGKEoBeWAGFEeizusZOq%2FXcoCBjtvmR%2FAEmTWlP3CTa1acAsoizhDvXujqptD0ObDcyFBwOjO58vUpS%2B5OP615Al54L%2B0NIZ3rPUdgG4pcghKL8sPlL8AXKailViJQAPalD9OusMXyRawGnwGxXuossZV9wU%2FgsvS08fagVO8lZsU7iVqzkwcV3Bwx46q8F593wryS7ZVQwWbhU6ebo%2B9J%2FZy5Wf8FZapscNqSVt%2FseMMur49oSuOeTs105H9esmhhpuFQQxfSCjsNAx8zB%2BAtlUWT1Sfe8OzTgY9%2BWpKDcC8aUPWG5m76EAyGP79N6UJtYY68L3PRgUDjAMMvV293O6%2F5H8ukmHHpPdZegMCCuB2RhiVa1gOPAryiMPn22cHLaqvrDR1SMRTYyviouzLQjUPDkCIy%2Bt07VY%2FhhUakpAwtH2BjtwfpbECfzfwj4lBD8S9ySBWIWlF0R3210RbXVWAt2vGA5CKnyHoQrUV8nIUDTfLMjuPFPINju6IZjsgC7xALGwXsd7WmiAFNaMNb9gMEGOqUB94uvj9eBC%2FopSbSjqM22SRou%2B%2B5pwJuzFa%2Fw523C8%2F3vvgbwLKR81Bsw0nb2LYKpH%2FbMX%2FLLnQsRxNDCVZRmuSy%2Fjw4XVUVmIJ4cr8%2B5USDlJ0iAkPRRAIsxVFZ45VoS3VSW8xwbMDmWC6J1Jx8ab0QxOmw%2FCBC7F8xTpQAVyIATXGdb2F8innKulvZkCAmsqqGX2VAG2fCKDy6w5ua48b%2BvIyAQ&X-Amz-Signature=207827660d7596a735d443084cae7c771effda14205cd9c9727f2fe1aa7b6fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
