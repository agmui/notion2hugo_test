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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3SEWBEP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV69zHvdGigoIj6VhguSCRS5F2bAFDoGXPlKz8l8I8YAiB25DsHbsqvv3x8mdDpL7wet%2FNaIEuxX5UBPoXh5igMfCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMtkULoTw1ZMhVQMwZKtwDdFZLcW2b8%2BGwmPw63dnqy7%2BAtyE3YPrszWp8Svwq%2B3cYcRmSYTISg15KxtcgmSBNRmoSZ5lm0hsm7Kl1S1YUr0B%2FvZg6Qol5lqTYsc0MwG%2BJxMtUAanOja0g8UyH4DY20IHa%2BrPEdmpYd%2FNVOz6PZqVUIAu6UjkkMpj5Da9rkLwvGD5UKURFAwLVLa4fWEKwR43PSbWmYd5%2FNECACYl%2Fkq5pf3UOjeYDW8ZGAcVekJSYyexGvXvJIEwf3DPwm6KS6upxpibpcOAWCWnP7XVJSa5OyY1KSRrmDmQOU8XjfLJPghpeVg1AoUDMWLRed%2BWZtxcoLp2MJ1nLGBsHwbXwrdddxoTxu5872Fj0OmD%2Blk6GSB9Q35kIpWEEIusNjfNc1qPxDOvHf4oOByC8KF40cn3KBx8i9M5Kqy8CWcFvb91VdIuOpaJIAYWtkJjOrTd54u6NQFsHxsp8eEMGEuzRk1zJWWyu6gmr%2Bqr%2F3XgztfyvASXrPIoav%2F8WEt%2FAMbBl1fuwINaNG%2FFCOgNsaYkMODLtrIdquVPPf4C9UEQIdyYaIZWG%2BjlfAsjnfmjhtbwrJkwiQW7yIejNWQhOtOVwvkwBMo0y05KrHU3xcxqXpJl2kffmENRPtMzEA2Ewru%2FrwAY6pgHPY6wsJ5Dsq%2F8oIM6miKA6VW5f5a75LDrHBjSpk2%2FtHqoMTcJiuEYtImGGeTUxw0eIE2VhzBQZe2UoB515di8Btlvgjxwv0%2BTkMCthEYxgdIFRgqwUB83UcS3M9u%2FncH2BB00%2BMsZzpkpqLtuDPiYhi7hoFg367GM%2FNNErcjvt1DqdssxdgV5kXqPlKIvCPeTQqfsuwvfR06Bp2SWfdrkcBONjzBUG&X-Amz-Signature=788e841a67fb216d1004e4ee8c5dbe6682128f3f9548de8216fe636b83b6efce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3SEWBEP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV69zHvdGigoIj6VhguSCRS5F2bAFDoGXPlKz8l8I8YAiB25DsHbsqvv3x8mdDpL7wet%2FNaIEuxX5UBPoXh5igMfCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMtkULoTw1ZMhVQMwZKtwDdFZLcW2b8%2BGwmPw63dnqy7%2BAtyE3YPrszWp8Svwq%2B3cYcRmSYTISg15KxtcgmSBNRmoSZ5lm0hsm7Kl1S1YUr0B%2FvZg6Qol5lqTYsc0MwG%2BJxMtUAanOja0g8UyH4DY20IHa%2BrPEdmpYd%2FNVOz6PZqVUIAu6UjkkMpj5Da9rkLwvGD5UKURFAwLVLa4fWEKwR43PSbWmYd5%2FNECACYl%2Fkq5pf3UOjeYDW8ZGAcVekJSYyexGvXvJIEwf3DPwm6KS6upxpibpcOAWCWnP7XVJSa5OyY1KSRrmDmQOU8XjfLJPghpeVg1AoUDMWLRed%2BWZtxcoLp2MJ1nLGBsHwbXwrdddxoTxu5872Fj0OmD%2Blk6GSB9Q35kIpWEEIusNjfNc1qPxDOvHf4oOByC8KF40cn3KBx8i9M5Kqy8CWcFvb91VdIuOpaJIAYWtkJjOrTd54u6NQFsHxsp8eEMGEuzRk1zJWWyu6gmr%2Bqr%2F3XgztfyvASXrPIoav%2F8WEt%2FAMbBl1fuwINaNG%2FFCOgNsaYkMODLtrIdquVPPf4C9UEQIdyYaIZWG%2BjlfAsjnfmjhtbwrJkwiQW7yIejNWQhOtOVwvkwBMo0y05KrHU3xcxqXpJl2kffmENRPtMzEA2Ewru%2FrwAY6pgHPY6wsJ5Dsq%2F8oIM6miKA6VW5f5a75LDrHBjSpk2%2FtHqoMTcJiuEYtImGGeTUxw0eIE2VhzBQZe2UoB515di8Btlvgjxwv0%2BTkMCthEYxgdIFRgqwUB83UcS3M9u%2FncH2BB00%2BMsZzpkpqLtuDPiYhi7hoFg367GM%2FNNErcjvt1DqdssxdgV5kXqPlKIvCPeTQqfsuwvfR06Bp2SWfdrkcBONjzBUG&X-Amz-Signature=dc0e0111939f08aecd953aea3e546f65d7b1b7e029a157e1cdff1033e842f151&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3SEWBEP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV69zHvdGigoIj6VhguSCRS5F2bAFDoGXPlKz8l8I8YAiB25DsHbsqvv3x8mdDpL7wet%2FNaIEuxX5UBPoXh5igMfCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMtkULoTw1ZMhVQMwZKtwDdFZLcW2b8%2BGwmPw63dnqy7%2BAtyE3YPrszWp8Svwq%2B3cYcRmSYTISg15KxtcgmSBNRmoSZ5lm0hsm7Kl1S1YUr0B%2FvZg6Qol5lqTYsc0MwG%2BJxMtUAanOja0g8UyH4DY20IHa%2BrPEdmpYd%2FNVOz6PZqVUIAu6UjkkMpj5Da9rkLwvGD5UKURFAwLVLa4fWEKwR43PSbWmYd5%2FNECACYl%2Fkq5pf3UOjeYDW8ZGAcVekJSYyexGvXvJIEwf3DPwm6KS6upxpibpcOAWCWnP7XVJSa5OyY1KSRrmDmQOU8XjfLJPghpeVg1AoUDMWLRed%2BWZtxcoLp2MJ1nLGBsHwbXwrdddxoTxu5872Fj0OmD%2Blk6GSB9Q35kIpWEEIusNjfNc1qPxDOvHf4oOByC8KF40cn3KBx8i9M5Kqy8CWcFvb91VdIuOpaJIAYWtkJjOrTd54u6NQFsHxsp8eEMGEuzRk1zJWWyu6gmr%2Bqr%2F3XgztfyvASXrPIoav%2F8WEt%2FAMbBl1fuwINaNG%2FFCOgNsaYkMODLtrIdquVPPf4C9UEQIdyYaIZWG%2BjlfAsjnfmjhtbwrJkwiQW7yIejNWQhOtOVwvkwBMo0y05KrHU3xcxqXpJl2kffmENRPtMzEA2Ewru%2FrwAY6pgHPY6wsJ5Dsq%2F8oIM6miKA6VW5f5a75LDrHBjSpk2%2FtHqoMTcJiuEYtImGGeTUxw0eIE2VhzBQZe2UoB515di8Btlvgjxwv0%2BTkMCthEYxgdIFRgqwUB83UcS3M9u%2FncH2BB00%2BMsZzpkpqLtuDPiYhi7hoFg367GM%2FNNErcjvt1DqdssxdgV5kXqPlKIvCPeTQqfsuwvfR06Bp2SWfdrkcBONjzBUG&X-Amz-Signature=4ae1823f6d4f84abd27ccf687bd87586c38d59eb97a0294959e28a0e139e7dae&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3SEWBEP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV69zHvdGigoIj6VhguSCRS5F2bAFDoGXPlKz8l8I8YAiB25DsHbsqvv3x8mdDpL7wet%2FNaIEuxX5UBPoXh5igMfCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMtkULoTw1ZMhVQMwZKtwDdFZLcW2b8%2BGwmPw63dnqy7%2BAtyE3YPrszWp8Svwq%2B3cYcRmSYTISg15KxtcgmSBNRmoSZ5lm0hsm7Kl1S1YUr0B%2FvZg6Qol5lqTYsc0MwG%2BJxMtUAanOja0g8UyH4DY20IHa%2BrPEdmpYd%2FNVOz6PZqVUIAu6UjkkMpj5Da9rkLwvGD5UKURFAwLVLa4fWEKwR43PSbWmYd5%2FNECACYl%2Fkq5pf3UOjeYDW8ZGAcVekJSYyexGvXvJIEwf3DPwm6KS6upxpibpcOAWCWnP7XVJSa5OyY1KSRrmDmQOU8XjfLJPghpeVg1AoUDMWLRed%2BWZtxcoLp2MJ1nLGBsHwbXwrdddxoTxu5872Fj0OmD%2Blk6GSB9Q35kIpWEEIusNjfNc1qPxDOvHf4oOByC8KF40cn3KBx8i9M5Kqy8CWcFvb91VdIuOpaJIAYWtkJjOrTd54u6NQFsHxsp8eEMGEuzRk1zJWWyu6gmr%2Bqr%2F3XgztfyvASXrPIoav%2F8WEt%2FAMbBl1fuwINaNG%2FFCOgNsaYkMODLtrIdquVPPf4C9UEQIdyYaIZWG%2BjlfAsjnfmjhtbwrJkwiQW7yIejNWQhOtOVwvkwBMo0y05KrHU3xcxqXpJl2kffmENRPtMzEA2Ewru%2FrwAY6pgHPY6wsJ5Dsq%2F8oIM6miKA6VW5f5a75LDrHBjSpk2%2FtHqoMTcJiuEYtImGGeTUxw0eIE2VhzBQZe2UoB515di8Btlvgjxwv0%2BTkMCthEYxgdIFRgqwUB83UcS3M9u%2FncH2BB00%2BMsZzpkpqLtuDPiYhi7hoFg367GM%2FNNErcjvt1DqdssxdgV5kXqPlKIvCPeTQqfsuwvfR06Bp2SWfdrkcBONjzBUG&X-Amz-Signature=0fe5d4385b437ce7bdde79750c97284587983dea2aa9f55b1d767f9351f01a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3SEWBEP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV69zHvdGigoIj6VhguSCRS5F2bAFDoGXPlKz8l8I8YAiB25DsHbsqvv3x8mdDpL7wet%2FNaIEuxX5UBPoXh5igMfCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMtkULoTw1ZMhVQMwZKtwDdFZLcW2b8%2BGwmPw63dnqy7%2BAtyE3YPrszWp8Svwq%2B3cYcRmSYTISg15KxtcgmSBNRmoSZ5lm0hsm7Kl1S1YUr0B%2FvZg6Qol5lqTYsc0MwG%2BJxMtUAanOja0g8UyH4DY20IHa%2BrPEdmpYd%2FNVOz6PZqVUIAu6UjkkMpj5Da9rkLwvGD5UKURFAwLVLa4fWEKwR43PSbWmYd5%2FNECACYl%2Fkq5pf3UOjeYDW8ZGAcVekJSYyexGvXvJIEwf3DPwm6KS6upxpibpcOAWCWnP7XVJSa5OyY1KSRrmDmQOU8XjfLJPghpeVg1AoUDMWLRed%2BWZtxcoLp2MJ1nLGBsHwbXwrdddxoTxu5872Fj0OmD%2Blk6GSB9Q35kIpWEEIusNjfNc1qPxDOvHf4oOByC8KF40cn3KBx8i9M5Kqy8CWcFvb91VdIuOpaJIAYWtkJjOrTd54u6NQFsHxsp8eEMGEuzRk1zJWWyu6gmr%2Bqr%2F3XgztfyvASXrPIoav%2F8WEt%2FAMbBl1fuwINaNG%2FFCOgNsaYkMODLtrIdquVPPf4C9UEQIdyYaIZWG%2BjlfAsjnfmjhtbwrJkwiQW7yIejNWQhOtOVwvkwBMo0y05KrHU3xcxqXpJl2kffmENRPtMzEA2Ewru%2FrwAY6pgHPY6wsJ5Dsq%2F8oIM6miKA6VW5f5a75LDrHBjSpk2%2FtHqoMTcJiuEYtImGGeTUxw0eIE2VhzBQZe2UoB515di8Btlvgjxwv0%2BTkMCthEYxgdIFRgqwUB83UcS3M9u%2FncH2BB00%2BMsZzpkpqLtuDPiYhi7hoFg367GM%2FNNErcjvt1DqdssxdgV5kXqPlKIvCPeTQqfsuwvfR06Bp2SWfdrkcBONjzBUG&X-Amz-Signature=6e8092a51afbefe6b20f5a9e6bdf7ceac91b378caf359fbe8ce2c04bd5de2fce&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3SEWBEP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV69zHvdGigoIj6VhguSCRS5F2bAFDoGXPlKz8l8I8YAiB25DsHbsqvv3x8mdDpL7wet%2FNaIEuxX5UBPoXh5igMfCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMtkULoTw1ZMhVQMwZKtwDdFZLcW2b8%2BGwmPw63dnqy7%2BAtyE3YPrszWp8Svwq%2B3cYcRmSYTISg15KxtcgmSBNRmoSZ5lm0hsm7Kl1S1YUr0B%2FvZg6Qol5lqTYsc0MwG%2BJxMtUAanOja0g8UyH4DY20IHa%2BrPEdmpYd%2FNVOz6PZqVUIAu6UjkkMpj5Da9rkLwvGD5UKURFAwLVLa4fWEKwR43PSbWmYd5%2FNECACYl%2Fkq5pf3UOjeYDW8ZGAcVekJSYyexGvXvJIEwf3DPwm6KS6upxpibpcOAWCWnP7XVJSa5OyY1KSRrmDmQOU8XjfLJPghpeVg1AoUDMWLRed%2BWZtxcoLp2MJ1nLGBsHwbXwrdddxoTxu5872Fj0OmD%2Blk6GSB9Q35kIpWEEIusNjfNc1qPxDOvHf4oOByC8KF40cn3KBx8i9M5Kqy8CWcFvb91VdIuOpaJIAYWtkJjOrTd54u6NQFsHxsp8eEMGEuzRk1zJWWyu6gmr%2Bqr%2F3XgztfyvASXrPIoav%2F8WEt%2FAMbBl1fuwINaNG%2FFCOgNsaYkMODLtrIdquVPPf4C9UEQIdyYaIZWG%2BjlfAsjnfmjhtbwrJkwiQW7yIejNWQhOtOVwvkwBMo0y05KrHU3xcxqXpJl2kffmENRPtMzEA2Ewru%2FrwAY6pgHPY6wsJ5Dsq%2F8oIM6miKA6VW5f5a75LDrHBjSpk2%2FtHqoMTcJiuEYtImGGeTUxw0eIE2VhzBQZe2UoB515di8Btlvgjxwv0%2BTkMCthEYxgdIFRgqwUB83UcS3M9u%2FncH2BB00%2BMsZzpkpqLtuDPiYhi7hoFg367GM%2FNNErcjvt1DqdssxdgV5kXqPlKIvCPeTQqfsuwvfR06Bp2SWfdrkcBONjzBUG&X-Amz-Signature=63e12dcc8b2e75d2e8e43a8c3f817f89f34a976a53cfa428b3847b48656ed7f7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3SEWBEP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV69zHvdGigoIj6VhguSCRS5F2bAFDoGXPlKz8l8I8YAiB25DsHbsqvv3x8mdDpL7wet%2FNaIEuxX5UBPoXh5igMfCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMtkULoTw1ZMhVQMwZKtwDdFZLcW2b8%2BGwmPw63dnqy7%2BAtyE3YPrszWp8Svwq%2B3cYcRmSYTISg15KxtcgmSBNRmoSZ5lm0hsm7Kl1S1YUr0B%2FvZg6Qol5lqTYsc0MwG%2BJxMtUAanOja0g8UyH4DY20IHa%2BrPEdmpYd%2FNVOz6PZqVUIAu6UjkkMpj5Da9rkLwvGD5UKURFAwLVLa4fWEKwR43PSbWmYd5%2FNECACYl%2Fkq5pf3UOjeYDW8ZGAcVekJSYyexGvXvJIEwf3DPwm6KS6upxpibpcOAWCWnP7XVJSa5OyY1KSRrmDmQOU8XjfLJPghpeVg1AoUDMWLRed%2BWZtxcoLp2MJ1nLGBsHwbXwrdddxoTxu5872Fj0OmD%2Blk6GSB9Q35kIpWEEIusNjfNc1qPxDOvHf4oOByC8KF40cn3KBx8i9M5Kqy8CWcFvb91VdIuOpaJIAYWtkJjOrTd54u6NQFsHxsp8eEMGEuzRk1zJWWyu6gmr%2Bqr%2F3XgztfyvASXrPIoav%2F8WEt%2FAMbBl1fuwINaNG%2FFCOgNsaYkMODLtrIdquVPPf4C9UEQIdyYaIZWG%2BjlfAsjnfmjhtbwrJkwiQW7yIejNWQhOtOVwvkwBMo0y05KrHU3xcxqXpJl2kffmENRPtMzEA2Ewru%2FrwAY6pgHPY6wsJ5Dsq%2F8oIM6miKA6VW5f5a75LDrHBjSpk2%2FtHqoMTcJiuEYtImGGeTUxw0eIE2VhzBQZe2UoB515di8Btlvgjxwv0%2BTkMCthEYxgdIFRgqwUB83UcS3M9u%2FncH2BB00%2BMsZzpkpqLtuDPiYhi7hoFg367GM%2FNNErcjvt1DqdssxdgV5kXqPlKIvCPeTQqfsuwvfR06Bp2SWfdrkcBONjzBUG&X-Amz-Signature=e9a1b0eede3537e120c87354b07972e7d80c02e468c216dd331d6ac911735491&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
