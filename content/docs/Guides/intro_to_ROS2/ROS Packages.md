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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDOF6M5N%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7ZsWhLwKHr%2Bi6cdBUpCnTbRizubVlYrh0yAQa7T%2BGVAiEAmrziv%2BzwPSXVlVFUM5SZZ7dxRxV7OcxwmYbkjn%2BEGOwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDBhp2Ox4mKO9CkFCJSrcA%2FGQRdeD7YgwiweYhFQPy1QTmUAgVw%2FTxLNIv8hVC0ZZb5WsAxghZ5oebAyRHbQdnViDjM2tZ8kfLaA2GL3DKzZnSXr2uTJnMj%2BsfmSHvtMohO1N6apK6NvjCHuTDLTybd10vymLKw3DtDBg50l1q3Gw0E%2ByHTS5WPJRGZq73qLvW%2FAgibnVUpdxu4ea3ZsRVnL2h1xM4x%2BL28x0l%2Flkq53zWhNlYd02PkpjKVUtEG2yx9gJuqjYFxEmRWlO%2F%2BpzzQvVrEJCCs6AHeMNmbAl15CPbiEpi9eMiWi9HXNAtyqS%2BjXLBf1TKIC4gXJBXmEFdqJW4mVSaWZb8wRcpygpopHZ0bXCRAzywWUAe84rwWQbI5h661pgFN%2B5IhuGcwvVlOgKYytGAUZOVLc5LTQvgBT2XH6XOsSx7Yv4ZguFZNUpncGiIGTVbca%2FIO3jhJP14UVQKskSF%2BXtnQp7ouwv3XC0xH58wb1uE5e98Bx9MStt9b%2BHx%2BtobTAm3xtrcF2%2FaSuh6NkhDAr2mfLZR5u1ozUPuGTxNzZCXs7aXasVzRS4kOk%2BE3kF1PQ3A6LhRBkLAl27icw9POfDv667WwNstdyKoqSHunj9gICNyUol%2BcZ%2BtBe8hKndf%2BDuUpysMPvfgMAGOqUBSAT%2Bhog3BKQ8%2BALjqq2reW0bVGh5gHlcFgjzgR8f0B3SmQZNvooDrDrAU99S26m2vy8p13efDQ9KtSBYivMsv0F7UgLZE%2FyURV%2BxzYBQAE5XCX5cBIjolvDR35arXhAG2a7RVBYedjkdCzx77MdFrnFIT3UKMseTNSg3PgQidLJULnsQKsu%2F8UYiae6vXnhwjiYA8MrE%2Fmq4%2FbZRrCMkU7V16q4%2F&X-Amz-Signature=ace843a06391669af90a30db2611b75b714fe20b3fdae01bf5b7cd1804ae7c6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDOF6M5N%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7ZsWhLwKHr%2Bi6cdBUpCnTbRizubVlYrh0yAQa7T%2BGVAiEAmrziv%2BzwPSXVlVFUM5SZZ7dxRxV7OcxwmYbkjn%2BEGOwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDBhp2Ox4mKO9CkFCJSrcA%2FGQRdeD7YgwiweYhFQPy1QTmUAgVw%2FTxLNIv8hVC0ZZb5WsAxghZ5oebAyRHbQdnViDjM2tZ8kfLaA2GL3DKzZnSXr2uTJnMj%2BsfmSHvtMohO1N6apK6NvjCHuTDLTybd10vymLKw3DtDBg50l1q3Gw0E%2ByHTS5WPJRGZq73qLvW%2FAgibnVUpdxu4ea3ZsRVnL2h1xM4x%2BL28x0l%2Flkq53zWhNlYd02PkpjKVUtEG2yx9gJuqjYFxEmRWlO%2F%2BpzzQvVrEJCCs6AHeMNmbAl15CPbiEpi9eMiWi9HXNAtyqS%2BjXLBf1TKIC4gXJBXmEFdqJW4mVSaWZb8wRcpygpopHZ0bXCRAzywWUAe84rwWQbI5h661pgFN%2B5IhuGcwvVlOgKYytGAUZOVLc5LTQvgBT2XH6XOsSx7Yv4ZguFZNUpncGiIGTVbca%2FIO3jhJP14UVQKskSF%2BXtnQp7ouwv3XC0xH58wb1uE5e98Bx9MStt9b%2BHx%2BtobTAm3xtrcF2%2FaSuh6NkhDAr2mfLZR5u1ozUPuGTxNzZCXs7aXasVzRS4kOk%2BE3kF1PQ3A6LhRBkLAl27icw9POfDv667WwNstdyKoqSHunj9gICNyUol%2BcZ%2BtBe8hKndf%2BDuUpysMPvfgMAGOqUBSAT%2Bhog3BKQ8%2BALjqq2reW0bVGh5gHlcFgjzgR8f0B3SmQZNvooDrDrAU99S26m2vy8p13efDQ9KtSBYivMsv0F7UgLZE%2FyURV%2BxzYBQAE5XCX5cBIjolvDR35arXhAG2a7RVBYedjkdCzx77MdFrnFIT3UKMseTNSg3PgQidLJULnsQKsu%2F8UYiae6vXnhwjiYA8MrE%2Fmq4%2FbZRrCMkU7V16q4%2F&X-Amz-Signature=bdcdce359717a9a01bb339760a7dccf09fd03b6b91b3c2bd5dc9304722b33db7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDOF6M5N%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7ZsWhLwKHr%2Bi6cdBUpCnTbRizubVlYrh0yAQa7T%2BGVAiEAmrziv%2BzwPSXVlVFUM5SZZ7dxRxV7OcxwmYbkjn%2BEGOwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDBhp2Ox4mKO9CkFCJSrcA%2FGQRdeD7YgwiweYhFQPy1QTmUAgVw%2FTxLNIv8hVC0ZZb5WsAxghZ5oebAyRHbQdnViDjM2tZ8kfLaA2GL3DKzZnSXr2uTJnMj%2BsfmSHvtMohO1N6apK6NvjCHuTDLTybd10vymLKw3DtDBg50l1q3Gw0E%2ByHTS5WPJRGZq73qLvW%2FAgibnVUpdxu4ea3ZsRVnL2h1xM4x%2BL28x0l%2Flkq53zWhNlYd02PkpjKVUtEG2yx9gJuqjYFxEmRWlO%2F%2BpzzQvVrEJCCs6AHeMNmbAl15CPbiEpi9eMiWi9HXNAtyqS%2BjXLBf1TKIC4gXJBXmEFdqJW4mVSaWZb8wRcpygpopHZ0bXCRAzywWUAe84rwWQbI5h661pgFN%2B5IhuGcwvVlOgKYytGAUZOVLc5LTQvgBT2XH6XOsSx7Yv4ZguFZNUpncGiIGTVbca%2FIO3jhJP14UVQKskSF%2BXtnQp7ouwv3XC0xH58wb1uE5e98Bx9MStt9b%2BHx%2BtobTAm3xtrcF2%2FaSuh6NkhDAr2mfLZR5u1ozUPuGTxNzZCXs7aXasVzRS4kOk%2BE3kF1PQ3A6LhRBkLAl27icw9POfDv667WwNstdyKoqSHunj9gICNyUol%2BcZ%2BtBe8hKndf%2BDuUpysMPvfgMAGOqUBSAT%2Bhog3BKQ8%2BALjqq2reW0bVGh5gHlcFgjzgR8f0B3SmQZNvooDrDrAU99S26m2vy8p13efDQ9KtSBYivMsv0F7UgLZE%2FyURV%2BxzYBQAE5XCX5cBIjolvDR35arXhAG2a7RVBYedjkdCzx77MdFrnFIT3UKMseTNSg3PgQidLJULnsQKsu%2F8UYiae6vXnhwjiYA8MrE%2Fmq4%2FbZRrCMkU7V16q4%2F&X-Amz-Signature=40920da08a5ddd7f94e678b22c4305048c111748313532884710abeeba094c05&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDOF6M5N%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7ZsWhLwKHr%2Bi6cdBUpCnTbRizubVlYrh0yAQa7T%2BGVAiEAmrziv%2BzwPSXVlVFUM5SZZ7dxRxV7OcxwmYbkjn%2BEGOwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDBhp2Ox4mKO9CkFCJSrcA%2FGQRdeD7YgwiweYhFQPy1QTmUAgVw%2FTxLNIv8hVC0ZZb5WsAxghZ5oebAyRHbQdnViDjM2tZ8kfLaA2GL3DKzZnSXr2uTJnMj%2BsfmSHvtMohO1N6apK6NvjCHuTDLTybd10vymLKw3DtDBg50l1q3Gw0E%2ByHTS5WPJRGZq73qLvW%2FAgibnVUpdxu4ea3ZsRVnL2h1xM4x%2BL28x0l%2Flkq53zWhNlYd02PkpjKVUtEG2yx9gJuqjYFxEmRWlO%2F%2BpzzQvVrEJCCs6AHeMNmbAl15CPbiEpi9eMiWi9HXNAtyqS%2BjXLBf1TKIC4gXJBXmEFdqJW4mVSaWZb8wRcpygpopHZ0bXCRAzywWUAe84rwWQbI5h661pgFN%2B5IhuGcwvVlOgKYytGAUZOVLc5LTQvgBT2XH6XOsSx7Yv4ZguFZNUpncGiIGTVbca%2FIO3jhJP14UVQKskSF%2BXtnQp7ouwv3XC0xH58wb1uE5e98Bx9MStt9b%2BHx%2BtobTAm3xtrcF2%2FaSuh6NkhDAr2mfLZR5u1ozUPuGTxNzZCXs7aXasVzRS4kOk%2BE3kF1PQ3A6LhRBkLAl27icw9POfDv667WwNstdyKoqSHunj9gICNyUol%2BcZ%2BtBe8hKndf%2BDuUpysMPvfgMAGOqUBSAT%2Bhog3BKQ8%2BALjqq2reW0bVGh5gHlcFgjzgR8f0B3SmQZNvooDrDrAU99S26m2vy8p13efDQ9KtSBYivMsv0F7UgLZE%2FyURV%2BxzYBQAE5XCX5cBIjolvDR35arXhAG2a7RVBYedjkdCzx77MdFrnFIT3UKMseTNSg3PgQidLJULnsQKsu%2F8UYiae6vXnhwjiYA8MrE%2Fmq4%2FbZRrCMkU7V16q4%2F&X-Amz-Signature=f67625e725b0fd93e6f4d14b5ebcad381d17cd24c321014f6d4b9b29e9ea5d3e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDOF6M5N%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7ZsWhLwKHr%2Bi6cdBUpCnTbRizubVlYrh0yAQa7T%2BGVAiEAmrziv%2BzwPSXVlVFUM5SZZ7dxRxV7OcxwmYbkjn%2BEGOwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDBhp2Ox4mKO9CkFCJSrcA%2FGQRdeD7YgwiweYhFQPy1QTmUAgVw%2FTxLNIv8hVC0ZZb5WsAxghZ5oebAyRHbQdnViDjM2tZ8kfLaA2GL3DKzZnSXr2uTJnMj%2BsfmSHvtMohO1N6apK6NvjCHuTDLTybd10vymLKw3DtDBg50l1q3Gw0E%2ByHTS5WPJRGZq73qLvW%2FAgibnVUpdxu4ea3ZsRVnL2h1xM4x%2BL28x0l%2Flkq53zWhNlYd02PkpjKVUtEG2yx9gJuqjYFxEmRWlO%2F%2BpzzQvVrEJCCs6AHeMNmbAl15CPbiEpi9eMiWi9HXNAtyqS%2BjXLBf1TKIC4gXJBXmEFdqJW4mVSaWZb8wRcpygpopHZ0bXCRAzywWUAe84rwWQbI5h661pgFN%2B5IhuGcwvVlOgKYytGAUZOVLc5LTQvgBT2XH6XOsSx7Yv4ZguFZNUpncGiIGTVbca%2FIO3jhJP14UVQKskSF%2BXtnQp7ouwv3XC0xH58wb1uE5e98Bx9MStt9b%2BHx%2BtobTAm3xtrcF2%2FaSuh6NkhDAr2mfLZR5u1ozUPuGTxNzZCXs7aXasVzRS4kOk%2BE3kF1PQ3A6LhRBkLAl27icw9POfDv667WwNstdyKoqSHunj9gICNyUol%2BcZ%2BtBe8hKndf%2BDuUpysMPvfgMAGOqUBSAT%2Bhog3BKQ8%2BALjqq2reW0bVGh5gHlcFgjzgR8f0B3SmQZNvooDrDrAU99S26m2vy8p13efDQ9KtSBYivMsv0F7UgLZE%2FyURV%2BxzYBQAE5XCX5cBIjolvDR35arXhAG2a7RVBYedjkdCzx77MdFrnFIT3UKMseTNSg3PgQidLJULnsQKsu%2F8UYiae6vXnhwjiYA8MrE%2Fmq4%2FbZRrCMkU7V16q4%2F&X-Amz-Signature=77babcb456a3f39fdac1231b19300901172a7c0934eee2d6765937b31cf700b6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDOF6M5N%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7ZsWhLwKHr%2Bi6cdBUpCnTbRizubVlYrh0yAQa7T%2BGVAiEAmrziv%2BzwPSXVlVFUM5SZZ7dxRxV7OcxwmYbkjn%2BEGOwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDBhp2Ox4mKO9CkFCJSrcA%2FGQRdeD7YgwiweYhFQPy1QTmUAgVw%2FTxLNIv8hVC0ZZb5WsAxghZ5oebAyRHbQdnViDjM2tZ8kfLaA2GL3DKzZnSXr2uTJnMj%2BsfmSHvtMohO1N6apK6NvjCHuTDLTybd10vymLKw3DtDBg50l1q3Gw0E%2ByHTS5WPJRGZq73qLvW%2FAgibnVUpdxu4ea3ZsRVnL2h1xM4x%2BL28x0l%2Flkq53zWhNlYd02PkpjKVUtEG2yx9gJuqjYFxEmRWlO%2F%2BpzzQvVrEJCCs6AHeMNmbAl15CPbiEpi9eMiWi9HXNAtyqS%2BjXLBf1TKIC4gXJBXmEFdqJW4mVSaWZb8wRcpygpopHZ0bXCRAzywWUAe84rwWQbI5h661pgFN%2B5IhuGcwvVlOgKYytGAUZOVLc5LTQvgBT2XH6XOsSx7Yv4ZguFZNUpncGiIGTVbca%2FIO3jhJP14UVQKskSF%2BXtnQp7ouwv3XC0xH58wb1uE5e98Bx9MStt9b%2BHx%2BtobTAm3xtrcF2%2FaSuh6NkhDAr2mfLZR5u1ozUPuGTxNzZCXs7aXasVzRS4kOk%2BE3kF1PQ3A6LhRBkLAl27icw9POfDv667WwNstdyKoqSHunj9gICNyUol%2BcZ%2BtBe8hKndf%2BDuUpysMPvfgMAGOqUBSAT%2Bhog3BKQ8%2BALjqq2reW0bVGh5gHlcFgjzgR8f0B3SmQZNvooDrDrAU99S26m2vy8p13efDQ9KtSBYivMsv0F7UgLZE%2FyURV%2BxzYBQAE5XCX5cBIjolvDR35arXhAG2a7RVBYedjkdCzx77MdFrnFIT3UKMseTNSg3PgQidLJULnsQKsu%2F8UYiae6vXnhwjiYA8MrE%2Fmq4%2FbZRrCMkU7V16q4%2F&X-Amz-Signature=651095c96daef9bea15439bfe9c8694301eccae3c3dd164f8679a6cae2c2211c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDOF6M5N%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7ZsWhLwKHr%2Bi6cdBUpCnTbRizubVlYrh0yAQa7T%2BGVAiEAmrziv%2BzwPSXVlVFUM5SZZ7dxRxV7OcxwmYbkjn%2BEGOwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDBhp2Ox4mKO9CkFCJSrcA%2FGQRdeD7YgwiweYhFQPy1QTmUAgVw%2FTxLNIv8hVC0ZZb5WsAxghZ5oebAyRHbQdnViDjM2tZ8kfLaA2GL3DKzZnSXr2uTJnMj%2BsfmSHvtMohO1N6apK6NvjCHuTDLTybd10vymLKw3DtDBg50l1q3Gw0E%2ByHTS5WPJRGZq73qLvW%2FAgibnVUpdxu4ea3ZsRVnL2h1xM4x%2BL28x0l%2Flkq53zWhNlYd02PkpjKVUtEG2yx9gJuqjYFxEmRWlO%2F%2BpzzQvVrEJCCs6AHeMNmbAl15CPbiEpi9eMiWi9HXNAtyqS%2BjXLBf1TKIC4gXJBXmEFdqJW4mVSaWZb8wRcpygpopHZ0bXCRAzywWUAe84rwWQbI5h661pgFN%2B5IhuGcwvVlOgKYytGAUZOVLc5LTQvgBT2XH6XOsSx7Yv4ZguFZNUpncGiIGTVbca%2FIO3jhJP14UVQKskSF%2BXtnQp7ouwv3XC0xH58wb1uE5e98Bx9MStt9b%2BHx%2BtobTAm3xtrcF2%2FaSuh6NkhDAr2mfLZR5u1ozUPuGTxNzZCXs7aXasVzRS4kOk%2BE3kF1PQ3A6LhRBkLAl27icw9POfDv667WwNstdyKoqSHunj9gICNyUol%2BcZ%2BtBe8hKndf%2BDuUpysMPvfgMAGOqUBSAT%2Bhog3BKQ8%2BALjqq2reW0bVGh5gHlcFgjzgR8f0B3SmQZNvooDrDrAU99S26m2vy8p13efDQ9KtSBYivMsv0F7UgLZE%2FyURV%2BxzYBQAE5XCX5cBIjolvDR35arXhAG2a7RVBYedjkdCzx77MdFrnFIT3UKMseTNSg3PgQidLJULnsQKsu%2F8UYiae6vXnhwjiYA8MrE%2Fmq4%2FbZRrCMkU7V16q4%2F&X-Amz-Signature=2c0a7b5cab484a3fff39f8ed7bb7ab1a7d4e776e78cf85036de2697804e11028&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
