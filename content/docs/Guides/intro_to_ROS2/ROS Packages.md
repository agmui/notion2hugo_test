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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AQ342SE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFmEOJv%2F6PD6Bx%2Bk0KwPCv7pcUaLMjJUFBN3m%2Bx0%2BXyFAiBQrOQBZSttxdwYLuDo4zaGbeqCRr4yX51viPQtmiAi8Sr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM7e6ot%2FnwWi%2FoEohRKtwDpg9wmrYFfzfA0nt9g0VvFrxovPrGzNDgYmxdoS4Ews0K5RjeKeVJsEng%2FoOofXzZUI2THX4bfvQo9dq97ylrCZsKxVlkzD7mYAGQi8Q7xU3KzvfE%2BcMVl5gkrZxJFMosVkZlBTH4nCq4bhaa3pXXuBn7sHx6PtbYfpmhpKEsgSJZozMX4sqSuaW8pU5sJMUnYf0x0Jp4511LqpQuYgosNoB%2F2c%2Fq9%2B8xXE8j0MiDIPTaXLYIk8H44HJFZvf1ARvMC5tw1TFT6tM13njpopccj1TJvnUNPS8QxhTBpPWqg%2Bt90IZJoZ4ub%2F1dtQcYKKYW%2BYeCJp5jZbDqbenp5anStQsiqxHs4R7hMSMsrYiSvHLlQMYdg1IKt1d6cboMCOf2vruZfwdAXzvyVFkVYf0cjZdyv3GbBIuCAN0X%2FlPJBgstl0pPlGg0TaKeio1skAdhMaWQlYqp296FCKtfwrb8vB%2Fmsh1SWianZ9szypcxkRk%2FGsAEceIrHdRDDSGU1Lk8%2BF0jbPw2OhFGbsX5Uq47m6SZkMWOpCLMpo5QfiMA%2B8T5FWexLfwo4kXLSWcvhUbAN2IMiWqVswV3yWkpvzDR4YSvR%2FG8LNhMP%2FFZTZSC0JO2DKzeHqaI2%2FHaOE8wxerLvQY6pgFOeZI6332pfyf%2F3084Z56LuqqgO1w23Hv2aKzSFNA%2BCQDhp9q09h7mIVgZT497M%2BfqWmmuDI3aPjbe6A1OEFcbCtt6BacShR4FWn6%2FMjfPQz%2BDZ6HhqUlp7jFeReOlMhGPbhdeZY1Zqd2ld6mlH4R9HeVhVatNWJWROi%2BJvehvtN8jnVP3pxYvGN31LxVDhbQ6edykibxokn%2FpwT%2Bu6VqfZWkvgfx9&X-Amz-Signature=d38eca581e060f6cfe88b5a7143459a039e58fbf49e15b6e96d4914cf418bac8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AQ342SE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFmEOJv%2F6PD6Bx%2Bk0KwPCv7pcUaLMjJUFBN3m%2Bx0%2BXyFAiBQrOQBZSttxdwYLuDo4zaGbeqCRr4yX51viPQtmiAi8Sr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM7e6ot%2FnwWi%2FoEohRKtwDpg9wmrYFfzfA0nt9g0VvFrxovPrGzNDgYmxdoS4Ews0K5RjeKeVJsEng%2FoOofXzZUI2THX4bfvQo9dq97ylrCZsKxVlkzD7mYAGQi8Q7xU3KzvfE%2BcMVl5gkrZxJFMosVkZlBTH4nCq4bhaa3pXXuBn7sHx6PtbYfpmhpKEsgSJZozMX4sqSuaW8pU5sJMUnYf0x0Jp4511LqpQuYgosNoB%2F2c%2Fq9%2B8xXE8j0MiDIPTaXLYIk8H44HJFZvf1ARvMC5tw1TFT6tM13njpopccj1TJvnUNPS8QxhTBpPWqg%2Bt90IZJoZ4ub%2F1dtQcYKKYW%2BYeCJp5jZbDqbenp5anStQsiqxHs4R7hMSMsrYiSvHLlQMYdg1IKt1d6cboMCOf2vruZfwdAXzvyVFkVYf0cjZdyv3GbBIuCAN0X%2FlPJBgstl0pPlGg0TaKeio1skAdhMaWQlYqp296FCKtfwrb8vB%2Fmsh1SWianZ9szypcxkRk%2FGsAEceIrHdRDDSGU1Lk8%2BF0jbPw2OhFGbsX5Uq47m6SZkMWOpCLMpo5QfiMA%2B8T5FWexLfwo4kXLSWcvhUbAN2IMiWqVswV3yWkpvzDR4YSvR%2FG8LNhMP%2FFZTZSC0JO2DKzeHqaI2%2FHaOE8wxerLvQY6pgFOeZI6332pfyf%2F3084Z56LuqqgO1w23Hv2aKzSFNA%2BCQDhp9q09h7mIVgZT497M%2BfqWmmuDI3aPjbe6A1OEFcbCtt6BacShR4FWn6%2FMjfPQz%2BDZ6HhqUlp7jFeReOlMhGPbhdeZY1Zqd2ld6mlH4R9HeVhVatNWJWROi%2BJvehvtN8jnVP3pxYvGN31LxVDhbQ6edykibxokn%2FpwT%2Bu6VqfZWkvgfx9&X-Amz-Signature=ddf6f5ce9c37f3abff303c67aadfd7e59f8d4b24ce6624367eac4321d0c90d55&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AQ342SE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFmEOJv%2F6PD6Bx%2Bk0KwPCv7pcUaLMjJUFBN3m%2Bx0%2BXyFAiBQrOQBZSttxdwYLuDo4zaGbeqCRr4yX51viPQtmiAi8Sr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM7e6ot%2FnwWi%2FoEohRKtwDpg9wmrYFfzfA0nt9g0VvFrxovPrGzNDgYmxdoS4Ews0K5RjeKeVJsEng%2FoOofXzZUI2THX4bfvQo9dq97ylrCZsKxVlkzD7mYAGQi8Q7xU3KzvfE%2BcMVl5gkrZxJFMosVkZlBTH4nCq4bhaa3pXXuBn7sHx6PtbYfpmhpKEsgSJZozMX4sqSuaW8pU5sJMUnYf0x0Jp4511LqpQuYgosNoB%2F2c%2Fq9%2B8xXE8j0MiDIPTaXLYIk8H44HJFZvf1ARvMC5tw1TFT6tM13njpopccj1TJvnUNPS8QxhTBpPWqg%2Bt90IZJoZ4ub%2F1dtQcYKKYW%2BYeCJp5jZbDqbenp5anStQsiqxHs4R7hMSMsrYiSvHLlQMYdg1IKt1d6cboMCOf2vruZfwdAXzvyVFkVYf0cjZdyv3GbBIuCAN0X%2FlPJBgstl0pPlGg0TaKeio1skAdhMaWQlYqp296FCKtfwrb8vB%2Fmsh1SWianZ9szypcxkRk%2FGsAEceIrHdRDDSGU1Lk8%2BF0jbPw2OhFGbsX5Uq47m6SZkMWOpCLMpo5QfiMA%2B8T5FWexLfwo4kXLSWcvhUbAN2IMiWqVswV3yWkpvzDR4YSvR%2FG8LNhMP%2FFZTZSC0JO2DKzeHqaI2%2FHaOE8wxerLvQY6pgFOeZI6332pfyf%2F3084Z56LuqqgO1w23Hv2aKzSFNA%2BCQDhp9q09h7mIVgZT497M%2BfqWmmuDI3aPjbe6A1OEFcbCtt6BacShR4FWn6%2FMjfPQz%2BDZ6HhqUlp7jFeReOlMhGPbhdeZY1Zqd2ld6mlH4R9HeVhVatNWJWROi%2BJvehvtN8jnVP3pxYvGN31LxVDhbQ6edykibxokn%2FpwT%2Bu6VqfZWkvgfx9&X-Amz-Signature=2672607e596394bc5af185dbdb613bbc2fcec0b34f00cbf2a053c4369091e2c4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AQ342SE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFmEOJv%2F6PD6Bx%2Bk0KwPCv7pcUaLMjJUFBN3m%2Bx0%2BXyFAiBQrOQBZSttxdwYLuDo4zaGbeqCRr4yX51viPQtmiAi8Sr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM7e6ot%2FnwWi%2FoEohRKtwDpg9wmrYFfzfA0nt9g0VvFrxovPrGzNDgYmxdoS4Ews0K5RjeKeVJsEng%2FoOofXzZUI2THX4bfvQo9dq97ylrCZsKxVlkzD7mYAGQi8Q7xU3KzvfE%2BcMVl5gkrZxJFMosVkZlBTH4nCq4bhaa3pXXuBn7sHx6PtbYfpmhpKEsgSJZozMX4sqSuaW8pU5sJMUnYf0x0Jp4511LqpQuYgosNoB%2F2c%2Fq9%2B8xXE8j0MiDIPTaXLYIk8H44HJFZvf1ARvMC5tw1TFT6tM13njpopccj1TJvnUNPS8QxhTBpPWqg%2Bt90IZJoZ4ub%2F1dtQcYKKYW%2BYeCJp5jZbDqbenp5anStQsiqxHs4R7hMSMsrYiSvHLlQMYdg1IKt1d6cboMCOf2vruZfwdAXzvyVFkVYf0cjZdyv3GbBIuCAN0X%2FlPJBgstl0pPlGg0TaKeio1skAdhMaWQlYqp296FCKtfwrb8vB%2Fmsh1SWianZ9szypcxkRk%2FGsAEceIrHdRDDSGU1Lk8%2BF0jbPw2OhFGbsX5Uq47m6SZkMWOpCLMpo5QfiMA%2B8T5FWexLfwo4kXLSWcvhUbAN2IMiWqVswV3yWkpvzDR4YSvR%2FG8LNhMP%2FFZTZSC0JO2DKzeHqaI2%2FHaOE8wxerLvQY6pgFOeZI6332pfyf%2F3084Z56LuqqgO1w23Hv2aKzSFNA%2BCQDhp9q09h7mIVgZT497M%2BfqWmmuDI3aPjbe6A1OEFcbCtt6BacShR4FWn6%2FMjfPQz%2BDZ6HhqUlp7jFeReOlMhGPbhdeZY1Zqd2ld6mlH4R9HeVhVatNWJWROi%2BJvehvtN8jnVP3pxYvGN31LxVDhbQ6edykibxokn%2FpwT%2Bu6VqfZWkvgfx9&X-Amz-Signature=f3145c0199f5f02fc0c25e68c57670678bc557511cee08cd6a3e252d89c434d3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AQ342SE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFmEOJv%2F6PD6Bx%2Bk0KwPCv7pcUaLMjJUFBN3m%2Bx0%2BXyFAiBQrOQBZSttxdwYLuDo4zaGbeqCRr4yX51viPQtmiAi8Sr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM7e6ot%2FnwWi%2FoEohRKtwDpg9wmrYFfzfA0nt9g0VvFrxovPrGzNDgYmxdoS4Ews0K5RjeKeVJsEng%2FoOofXzZUI2THX4bfvQo9dq97ylrCZsKxVlkzD7mYAGQi8Q7xU3KzvfE%2BcMVl5gkrZxJFMosVkZlBTH4nCq4bhaa3pXXuBn7sHx6PtbYfpmhpKEsgSJZozMX4sqSuaW8pU5sJMUnYf0x0Jp4511LqpQuYgosNoB%2F2c%2Fq9%2B8xXE8j0MiDIPTaXLYIk8H44HJFZvf1ARvMC5tw1TFT6tM13njpopccj1TJvnUNPS8QxhTBpPWqg%2Bt90IZJoZ4ub%2F1dtQcYKKYW%2BYeCJp5jZbDqbenp5anStQsiqxHs4R7hMSMsrYiSvHLlQMYdg1IKt1d6cboMCOf2vruZfwdAXzvyVFkVYf0cjZdyv3GbBIuCAN0X%2FlPJBgstl0pPlGg0TaKeio1skAdhMaWQlYqp296FCKtfwrb8vB%2Fmsh1SWianZ9szypcxkRk%2FGsAEceIrHdRDDSGU1Lk8%2BF0jbPw2OhFGbsX5Uq47m6SZkMWOpCLMpo5QfiMA%2B8T5FWexLfwo4kXLSWcvhUbAN2IMiWqVswV3yWkpvzDR4YSvR%2FG8LNhMP%2FFZTZSC0JO2DKzeHqaI2%2FHaOE8wxerLvQY6pgFOeZI6332pfyf%2F3084Z56LuqqgO1w23Hv2aKzSFNA%2BCQDhp9q09h7mIVgZT497M%2BfqWmmuDI3aPjbe6A1OEFcbCtt6BacShR4FWn6%2FMjfPQz%2BDZ6HhqUlp7jFeReOlMhGPbhdeZY1Zqd2ld6mlH4R9HeVhVatNWJWROi%2BJvehvtN8jnVP3pxYvGN31LxVDhbQ6edykibxokn%2FpwT%2Bu6VqfZWkvgfx9&X-Amz-Signature=1e60649beb867c550630f09ebc37f247343776f01d790b0a61e1035cc3688d49&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AQ342SE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFmEOJv%2F6PD6Bx%2Bk0KwPCv7pcUaLMjJUFBN3m%2Bx0%2BXyFAiBQrOQBZSttxdwYLuDo4zaGbeqCRr4yX51viPQtmiAi8Sr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM7e6ot%2FnwWi%2FoEohRKtwDpg9wmrYFfzfA0nt9g0VvFrxovPrGzNDgYmxdoS4Ews0K5RjeKeVJsEng%2FoOofXzZUI2THX4bfvQo9dq97ylrCZsKxVlkzD7mYAGQi8Q7xU3KzvfE%2BcMVl5gkrZxJFMosVkZlBTH4nCq4bhaa3pXXuBn7sHx6PtbYfpmhpKEsgSJZozMX4sqSuaW8pU5sJMUnYf0x0Jp4511LqpQuYgosNoB%2F2c%2Fq9%2B8xXE8j0MiDIPTaXLYIk8H44HJFZvf1ARvMC5tw1TFT6tM13njpopccj1TJvnUNPS8QxhTBpPWqg%2Bt90IZJoZ4ub%2F1dtQcYKKYW%2BYeCJp5jZbDqbenp5anStQsiqxHs4R7hMSMsrYiSvHLlQMYdg1IKt1d6cboMCOf2vruZfwdAXzvyVFkVYf0cjZdyv3GbBIuCAN0X%2FlPJBgstl0pPlGg0TaKeio1skAdhMaWQlYqp296FCKtfwrb8vB%2Fmsh1SWianZ9szypcxkRk%2FGsAEceIrHdRDDSGU1Lk8%2BF0jbPw2OhFGbsX5Uq47m6SZkMWOpCLMpo5QfiMA%2B8T5FWexLfwo4kXLSWcvhUbAN2IMiWqVswV3yWkpvzDR4YSvR%2FG8LNhMP%2FFZTZSC0JO2DKzeHqaI2%2FHaOE8wxerLvQY6pgFOeZI6332pfyf%2F3084Z56LuqqgO1w23Hv2aKzSFNA%2BCQDhp9q09h7mIVgZT497M%2BfqWmmuDI3aPjbe6A1OEFcbCtt6BacShR4FWn6%2FMjfPQz%2BDZ6HhqUlp7jFeReOlMhGPbhdeZY1Zqd2ld6mlH4R9HeVhVatNWJWROi%2BJvehvtN8jnVP3pxYvGN31LxVDhbQ6edykibxokn%2FpwT%2Bu6VqfZWkvgfx9&X-Amz-Signature=7d33891a66e14918d411107e1583c493b6ffc419a2e36631f8ff3e8283622a81&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AQ342SE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFmEOJv%2F6PD6Bx%2Bk0KwPCv7pcUaLMjJUFBN3m%2Bx0%2BXyFAiBQrOQBZSttxdwYLuDo4zaGbeqCRr4yX51viPQtmiAi8Sr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM7e6ot%2FnwWi%2FoEohRKtwDpg9wmrYFfzfA0nt9g0VvFrxovPrGzNDgYmxdoS4Ews0K5RjeKeVJsEng%2FoOofXzZUI2THX4bfvQo9dq97ylrCZsKxVlkzD7mYAGQi8Q7xU3KzvfE%2BcMVl5gkrZxJFMosVkZlBTH4nCq4bhaa3pXXuBn7sHx6PtbYfpmhpKEsgSJZozMX4sqSuaW8pU5sJMUnYf0x0Jp4511LqpQuYgosNoB%2F2c%2Fq9%2B8xXE8j0MiDIPTaXLYIk8H44HJFZvf1ARvMC5tw1TFT6tM13njpopccj1TJvnUNPS8QxhTBpPWqg%2Bt90IZJoZ4ub%2F1dtQcYKKYW%2BYeCJp5jZbDqbenp5anStQsiqxHs4R7hMSMsrYiSvHLlQMYdg1IKt1d6cboMCOf2vruZfwdAXzvyVFkVYf0cjZdyv3GbBIuCAN0X%2FlPJBgstl0pPlGg0TaKeio1skAdhMaWQlYqp296FCKtfwrb8vB%2Fmsh1SWianZ9szypcxkRk%2FGsAEceIrHdRDDSGU1Lk8%2BF0jbPw2OhFGbsX5Uq47m6SZkMWOpCLMpo5QfiMA%2B8T5FWexLfwo4kXLSWcvhUbAN2IMiWqVswV3yWkpvzDR4YSvR%2FG8LNhMP%2FFZTZSC0JO2DKzeHqaI2%2FHaOE8wxerLvQY6pgFOeZI6332pfyf%2F3084Z56LuqqgO1w23Hv2aKzSFNA%2BCQDhp9q09h7mIVgZT497M%2BfqWmmuDI3aPjbe6A1OEFcbCtt6BacShR4FWn6%2FMjfPQz%2BDZ6HhqUlp7jFeReOlMhGPbhdeZY1Zqd2ld6mlH4R9HeVhVatNWJWROi%2BJvehvtN8jnVP3pxYvGN31LxVDhbQ6edykibxokn%2FpwT%2Bu6VqfZWkvgfx9&X-Amz-Signature=fcdcfdfeea60b0439f59bbb55f9f81bd3f20dc68e2b3ba83ce4e89f184962336&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
