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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QYUTQL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4FBFWXAe%2B0oTVCGQf7S49ONCl4DZrIQyp5pIs97MwuwIhAJlbPGK%2F7fQ6Lnh1DbJfVla3kiKFfTH83yhJYcurXA%2FfKv8DCB0QABoMNjM3NDIzMTgzODA1IgwwfpjEAbFfvOEres4q3APTlloG1bnNNmx7ZeL4JJ%2FQNVHVrerhWRw2OCzEK2WBsyKgeGKP5OBqD6B9OX%2F976zzPKes%2BpHdPrxx6tGvQebg4kA8uOflB8Ika2Ib1VNSBR%2FdLX6di%2BgW8f6PVpLWdU516GCb%2FUMUDgjqjY1HrzVrRInSdnr1BCq9%2B7U5qlNM6mH%2FVus6XquERqGHn66q8ljUWxpvmkPv1GfXad%2Fc8dZzgPJ10e4kBR68v1jsy2cqUyg9Hp0%2FAZYFSl04aIvU3i7R%2FCeXw21R7CQ6Yqo1%2BeQ5LOg7rOQSApPqY2qXGA%2FNw7C6dqbhVSc%2BmIz%2F383MNhN7Pjp2XsA6F7gnGTx%2F4F9%2FpK5CoGa%2Fah%2BIuIYOMz5bdaZgyyag8khsNDM0y1h8m9l5RxAiKGJzzXX3a0Bty1wAJQxPWK8m%2BbhAS9W0WtoxjVQYW32MtX2IQfzQWljoNgH9hirwBq%2BHTkZtVVLyohTan4yCFFru4vaGm05MOkd1ycTdyItbxKvb4R708v3OMLItA6yRyiu%2BUPLOFa8YTwKx7%2FgUB12%2Bmq7Un1xQNS83UAStKsJgfYA6be8BaRmOnDmqDtIHrjAQ7XqODWRxjHNOpaLswyUXLaNjlWsyyoQ3LIIXEv%2F8h1MD2FK7MTCypKrABjqkAU7FH8%2FQNht%2FLJmRVVJKGGElg3SoygoH90tO7cGdFlMgMTdDHesW4HJJYG0%2F4%2FW3dj%2BAwY%2BKeIl9BKFV0064L1L6W0YFpc9XcURO9jZldDChkdt4UqNtAzHZyd1Esli9BfZphx7iSCtSiid2mUei5OwMqaLsCdg2ObZnJLVEJuf2GPLRfyOiXcjtM8YCLzOOBOjLh26Z7llkdJPGRbiCYYQhb%2BlW&X-Amz-Signature=5f01763d7924fe9fbc4515ba17e983ebc95702922d16e920132f442c790d1bac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QYUTQL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4FBFWXAe%2B0oTVCGQf7S49ONCl4DZrIQyp5pIs97MwuwIhAJlbPGK%2F7fQ6Lnh1DbJfVla3kiKFfTH83yhJYcurXA%2FfKv8DCB0QABoMNjM3NDIzMTgzODA1IgwwfpjEAbFfvOEres4q3APTlloG1bnNNmx7ZeL4JJ%2FQNVHVrerhWRw2OCzEK2WBsyKgeGKP5OBqD6B9OX%2F976zzPKes%2BpHdPrxx6tGvQebg4kA8uOflB8Ika2Ib1VNSBR%2FdLX6di%2BgW8f6PVpLWdU516GCb%2FUMUDgjqjY1HrzVrRInSdnr1BCq9%2B7U5qlNM6mH%2FVus6XquERqGHn66q8ljUWxpvmkPv1GfXad%2Fc8dZzgPJ10e4kBR68v1jsy2cqUyg9Hp0%2FAZYFSl04aIvU3i7R%2FCeXw21R7CQ6Yqo1%2BeQ5LOg7rOQSApPqY2qXGA%2FNw7C6dqbhVSc%2BmIz%2F383MNhN7Pjp2XsA6F7gnGTx%2F4F9%2FpK5CoGa%2Fah%2BIuIYOMz5bdaZgyyag8khsNDM0y1h8m9l5RxAiKGJzzXX3a0Bty1wAJQxPWK8m%2BbhAS9W0WtoxjVQYW32MtX2IQfzQWljoNgH9hirwBq%2BHTkZtVVLyohTan4yCFFru4vaGm05MOkd1ycTdyItbxKvb4R708v3OMLItA6yRyiu%2BUPLOFa8YTwKx7%2FgUB12%2Bmq7Un1xQNS83UAStKsJgfYA6be8BaRmOnDmqDtIHrjAQ7XqODWRxjHNOpaLswyUXLaNjlWsyyoQ3LIIXEv%2F8h1MD2FK7MTCypKrABjqkAU7FH8%2FQNht%2FLJmRVVJKGGElg3SoygoH90tO7cGdFlMgMTdDHesW4HJJYG0%2F4%2FW3dj%2BAwY%2BKeIl9BKFV0064L1L6W0YFpc9XcURO9jZldDChkdt4UqNtAzHZyd1Esli9BfZphx7iSCtSiid2mUei5OwMqaLsCdg2ObZnJLVEJuf2GPLRfyOiXcjtM8YCLzOOBOjLh26Z7llkdJPGRbiCYYQhb%2BlW&X-Amz-Signature=2539586a0a6616d37e94b0999f60270bc24fe871c03e9ba57e6ec24e33c06df3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QYUTQL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4FBFWXAe%2B0oTVCGQf7S49ONCl4DZrIQyp5pIs97MwuwIhAJlbPGK%2F7fQ6Lnh1DbJfVla3kiKFfTH83yhJYcurXA%2FfKv8DCB0QABoMNjM3NDIzMTgzODA1IgwwfpjEAbFfvOEres4q3APTlloG1bnNNmx7ZeL4JJ%2FQNVHVrerhWRw2OCzEK2WBsyKgeGKP5OBqD6B9OX%2F976zzPKes%2BpHdPrxx6tGvQebg4kA8uOflB8Ika2Ib1VNSBR%2FdLX6di%2BgW8f6PVpLWdU516GCb%2FUMUDgjqjY1HrzVrRInSdnr1BCq9%2B7U5qlNM6mH%2FVus6XquERqGHn66q8ljUWxpvmkPv1GfXad%2Fc8dZzgPJ10e4kBR68v1jsy2cqUyg9Hp0%2FAZYFSl04aIvU3i7R%2FCeXw21R7CQ6Yqo1%2BeQ5LOg7rOQSApPqY2qXGA%2FNw7C6dqbhVSc%2BmIz%2F383MNhN7Pjp2XsA6F7gnGTx%2F4F9%2FpK5CoGa%2Fah%2BIuIYOMz5bdaZgyyag8khsNDM0y1h8m9l5RxAiKGJzzXX3a0Bty1wAJQxPWK8m%2BbhAS9W0WtoxjVQYW32MtX2IQfzQWljoNgH9hirwBq%2BHTkZtVVLyohTan4yCFFru4vaGm05MOkd1ycTdyItbxKvb4R708v3OMLItA6yRyiu%2BUPLOFa8YTwKx7%2FgUB12%2Bmq7Un1xQNS83UAStKsJgfYA6be8BaRmOnDmqDtIHrjAQ7XqODWRxjHNOpaLswyUXLaNjlWsyyoQ3LIIXEv%2F8h1MD2FK7MTCypKrABjqkAU7FH8%2FQNht%2FLJmRVVJKGGElg3SoygoH90tO7cGdFlMgMTdDHesW4HJJYG0%2F4%2FW3dj%2BAwY%2BKeIl9BKFV0064L1L6W0YFpc9XcURO9jZldDChkdt4UqNtAzHZyd1Esli9BfZphx7iSCtSiid2mUei5OwMqaLsCdg2ObZnJLVEJuf2GPLRfyOiXcjtM8YCLzOOBOjLh26Z7llkdJPGRbiCYYQhb%2BlW&X-Amz-Signature=29baed74ca9cb62a20b33da3b8da0e47672924e99504f316f82df9888f01696f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QYUTQL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4FBFWXAe%2B0oTVCGQf7S49ONCl4DZrIQyp5pIs97MwuwIhAJlbPGK%2F7fQ6Lnh1DbJfVla3kiKFfTH83yhJYcurXA%2FfKv8DCB0QABoMNjM3NDIzMTgzODA1IgwwfpjEAbFfvOEres4q3APTlloG1bnNNmx7ZeL4JJ%2FQNVHVrerhWRw2OCzEK2WBsyKgeGKP5OBqD6B9OX%2F976zzPKes%2BpHdPrxx6tGvQebg4kA8uOflB8Ika2Ib1VNSBR%2FdLX6di%2BgW8f6PVpLWdU516GCb%2FUMUDgjqjY1HrzVrRInSdnr1BCq9%2B7U5qlNM6mH%2FVus6XquERqGHn66q8ljUWxpvmkPv1GfXad%2Fc8dZzgPJ10e4kBR68v1jsy2cqUyg9Hp0%2FAZYFSl04aIvU3i7R%2FCeXw21R7CQ6Yqo1%2BeQ5LOg7rOQSApPqY2qXGA%2FNw7C6dqbhVSc%2BmIz%2F383MNhN7Pjp2XsA6F7gnGTx%2F4F9%2FpK5CoGa%2Fah%2BIuIYOMz5bdaZgyyag8khsNDM0y1h8m9l5RxAiKGJzzXX3a0Bty1wAJQxPWK8m%2BbhAS9W0WtoxjVQYW32MtX2IQfzQWljoNgH9hirwBq%2BHTkZtVVLyohTan4yCFFru4vaGm05MOkd1ycTdyItbxKvb4R708v3OMLItA6yRyiu%2BUPLOFa8YTwKx7%2FgUB12%2Bmq7Un1xQNS83UAStKsJgfYA6be8BaRmOnDmqDtIHrjAQ7XqODWRxjHNOpaLswyUXLaNjlWsyyoQ3LIIXEv%2F8h1MD2FK7MTCypKrABjqkAU7FH8%2FQNht%2FLJmRVVJKGGElg3SoygoH90tO7cGdFlMgMTdDHesW4HJJYG0%2F4%2FW3dj%2BAwY%2BKeIl9BKFV0064L1L6W0YFpc9XcURO9jZldDChkdt4UqNtAzHZyd1Esli9BfZphx7iSCtSiid2mUei5OwMqaLsCdg2ObZnJLVEJuf2GPLRfyOiXcjtM8YCLzOOBOjLh26Z7llkdJPGRbiCYYQhb%2BlW&X-Amz-Signature=886cf959b4d936f340820153eeb9253381bbd7b2f69d62bd2f78dc690e86d300&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QYUTQL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4FBFWXAe%2B0oTVCGQf7S49ONCl4DZrIQyp5pIs97MwuwIhAJlbPGK%2F7fQ6Lnh1DbJfVla3kiKFfTH83yhJYcurXA%2FfKv8DCB0QABoMNjM3NDIzMTgzODA1IgwwfpjEAbFfvOEres4q3APTlloG1bnNNmx7ZeL4JJ%2FQNVHVrerhWRw2OCzEK2WBsyKgeGKP5OBqD6B9OX%2F976zzPKes%2BpHdPrxx6tGvQebg4kA8uOflB8Ika2Ib1VNSBR%2FdLX6di%2BgW8f6PVpLWdU516GCb%2FUMUDgjqjY1HrzVrRInSdnr1BCq9%2B7U5qlNM6mH%2FVus6XquERqGHn66q8ljUWxpvmkPv1GfXad%2Fc8dZzgPJ10e4kBR68v1jsy2cqUyg9Hp0%2FAZYFSl04aIvU3i7R%2FCeXw21R7CQ6Yqo1%2BeQ5LOg7rOQSApPqY2qXGA%2FNw7C6dqbhVSc%2BmIz%2F383MNhN7Pjp2XsA6F7gnGTx%2F4F9%2FpK5CoGa%2Fah%2BIuIYOMz5bdaZgyyag8khsNDM0y1h8m9l5RxAiKGJzzXX3a0Bty1wAJQxPWK8m%2BbhAS9W0WtoxjVQYW32MtX2IQfzQWljoNgH9hirwBq%2BHTkZtVVLyohTan4yCFFru4vaGm05MOkd1ycTdyItbxKvb4R708v3OMLItA6yRyiu%2BUPLOFa8YTwKx7%2FgUB12%2Bmq7Un1xQNS83UAStKsJgfYA6be8BaRmOnDmqDtIHrjAQ7XqODWRxjHNOpaLswyUXLaNjlWsyyoQ3LIIXEv%2F8h1MD2FK7MTCypKrABjqkAU7FH8%2FQNht%2FLJmRVVJKGGElg3SoygoH90tO7cGdFlMgMTdDHesW4HJJYG0%2F4%2FW3dj%2BAwY%2BKeIl9BKFV0064L1L6W0YFpc9XcURO9jZldDChkdt4UqNtAzHZyd1Esli9BfZphx7iSCtSiid2mUei5OwMqaLsCdg2ObZnJLVEJuf2GPLRfyOiXcjtM8YCLzOOBOjLh26Z7llkdJPGRbiCYYQhb%2BlW&X-Amz-Signature=3c44c46706ca58742edae872ccfdb048954820c69dd4c4321262f355f8504b21&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QYUTQL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4FBFWXAe%2B0oTVCGQf7S49ONCl4DZrIQyp5pIs97MwuwIhAJlbPGK%2F7fQ6Lnh1DbJfVla3kiKFfTH83yhJYcurXA%2FfKv8DCB0QABoMNjM3NDIzMTgzODA1IgwwfpjEAbFfvOEres4q3APTlloG1bnNNmx7ZeL4JJ%2FQNVHVrerhWRw2OCzEK2WBsyKgeGKP5OBqD6B9OX%2F976zzPKes%2BpHdPrxx6tGvQebg4kA8uOflB8Ika2Ib1VNSBR%2FdLX6di%2BgW8f6PVpLWdU516GCb%2FUMUDgjqjY1HrzVrRInSdnr1BCq9%2B7U5qlNM6mH%2FVus6XquERqGHn66q8ljUWxpvmkPv1GfXad%2Fc8dZzgPJ10e4kBR68v1jsy2cqUyg9Hp0%2FAZYFSl04aIvU3i7R%2FCeXw21R7CQ6Yqo1%2BeQ5LOg7rOQSApPqY2qXGA%2FNw7C6dqbhVSc%2BmIz%2F383MNhN7Pjp2XsA6F7gnGTx%2F4F9%2FpK5CoGa%2Fah%2BIuIYOMz5bdaZgyyag8khsNDM0y1h8m9l5RxAiKGJzzXX3a0Bty1wAJQxPWK8m%2BbhAS9W0WtoxjVQYW32MtX2IQfzQWljoNgH9hirwBq%2BHTkZtVVLyohTan4yCFFru4vaGm05MOkd1ycTdyItbxKvb4R708v3OMLItA6yRyiu%2BUPLOFa8YTwKx7%2FgUB12%2Bmq7Un1xQNS83UAStKsJgfYA6be8BaRmOnDmqDtIHrjAQ7XqODWRxjHNOpaLswyUXLaNjlWsyyoQ3LIIXEv%2F8h1MD2FK7MTCypKrABjqkAU7FH8%2FQNht%2FLJmRVVJKGGElg3SoygoH90tO7cGdFlMgMTdDHesW4HJJYG0%2F4%2FW3dj%2BAwY%2BKeIl9BKFV0064L1L6W0YFpc9XcURO9jZldDChkdt4UqNtAzHZyd1Esli9BfZphx7iSCtSiid2mUei5OwMqaLsCdg2ObZnJLVEJuf2GPLRfyOiXcjtM8YCLzOOBOjLh26Z7llkdJPGRbiCYYQhb%2BlW&X-Amz-Signature=b95d737f5d27a1e1112fcd9d6f377566784b7bdea8105e2a060a8247a851f591&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QYUTQL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4FBFWXAe%2B0oTVCGQf7S49ONCl4DZrIQyp5pIs97MwuwIhAJlbPGK%2F7fQ6Lnh1DbJfVla3kiKFfTH83yhJYcurXA%2FfKv8DCB0QABoMNjM3NDIzMTgzODA1IgwwfpjEAbFfvOEres4q3APTlloG1bnNNmx7ZeL4JJ%2FQNVHVrerhWRw2OCzEK2WBsyKgeGKP5OBqD6B9OX%2F976zzPKes%2BpHdPrxx6tGvQebg4kA8uOflB8Ika2Ib1VNSBR%2FdLX6di%2BgW8f6PVpLWdU516GCb%2FUMUDgjqjY1HrzVrRInSdnr1BCq9%2B7U5qlNM6mH%2FVus6XquERqGHn66q8ljUWxpvmkPv1GfXad%2Fc8dZzgPJ10e4kBR68v1jsy2cqUyg9Hp0%2FAZYFSl04aIvU3i7R%2FCeXw21R7CQ6Yqo1%2BeQ5LOg7rOQSApPqY2qXGA%2FNw7C6dqbhVSc%2BmIz%2F383MNhN7Pjp2XsA6F7gnGTx%2F4F9%2FpK5CoGa%2Fah%2BIuIYOMz5bdaZgyyag8khsNDM0y1h8m9l5RxAiKGJzzXX3a0Bty1wAJQxPWK8m%2BbhAS9W0WtoxjVQYW32MtX2IQfzQWljoNgH9hirwBq%2BHTkZtVVLyohTan4yCFFru4vaGm05MOkd1ycTdyItbxKvb4R708v3OMLItA6yRyiu%2BUPLOFa8YTwKx7%2FgUB12%2Bmq7Un1xQNS83UAStKsJgfYA6be8BaRmOnDmqDtIHrjAQ7XqODWRxjHNOpaLswyUXLaNjlWsyyoQ3LIIXEv%2F8h1MD2FK7MTCypKrABjqkAU7FH8%2FQNht%2FLJmRVVJKGGElg3SoygoH90tO7cGdFlMgMTdDHesW4HJJYG0%2F4%2FW3dj%2BAwY%2BKeIl9BKFV0064L1L6W0YFpc9XcURO9jZldDChkdt4UqNtAzHZyd1Esli9BfZphx7iSCtSiid2mUei5OwMqaLsCdg2ObZnJLVEJuf2GPLRfyOiXcjtM8YCLzOOBOjLh26Z7llkdJPGRbiCYYQhb%2BlW&X-Amz-Signature=6db4f35c99cd79c0c5c7bd8e30cffc97057c405bdaed24c4216d8e3d9de5fa1f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
