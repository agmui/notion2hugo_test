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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR4VQUGT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD06ZquH%2B%2FkZc7hoRA3OGiXXdU1LM3gmbmS0i4uKA%2F3KwIgFMIQE5%2FxiZMh79mRvFgHrqkG0z%2FDjsRbHyadfsq6G2sqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXJ020iNhdCDcwAzyrcA7d%2FB2Z6hEbuq5DonFlPhBPQstyu30MdW8%2BwOBsNiRwfUMPrfgYWsFcbAWTXluGk7vwMvsgAUIeRG1a5sGdl4vVQYibezAT758MbmWqONCRWM6NWKg2EhtO0Es27N5O4rcNnPMLRLhFFjjG7HlE0MpzhZmjvJrsDTDmvJWJ0Q5jwWwBJ7E1VvqpYqE6GWwv5u51Q%2FsoLxVngVmftRWamITIxcb3933u%2FraNIWKlHd%2Fa1o24zmkwMrx2Ounw%2BSL2w94ktYL%2FRJFQelXTiFzcaMHnsn7qRQzBmaPe0QPUjo3RINsm8md%2BuFTDpdt7ttxQmUdLZNE47JrJ4tr9o%2BWEGBfzj1vyDLUTXiRf51lrkl%2Fs8C2aizvwSwiPczERA%2BKtRA%2FO9uB4IYqTMnyfYZxpomqa5yp%2BSSPhWmgesOMuBIbBTwzNANvxSfxflxs4xwZmVMKhxb%2B8hmKGVowZcxfcgzbyUlEN188vAgYYUAHuvz%2BtNVZgINMykyURrOZlo73HAS9Xfdb9H1w6IOeZEyGZAYelHQC014cdv4hv2F5o%2F27fUXR%2BPj4FZHspv98CdJ3QkkZryzGfNsEvPJpCxFqn7%2BDZCsHO8OO%2BICYPV7khuHFVfud162kkzVu%2FXVkb3MKavqL8GOqUB1mhDc9CKrpeOrXg2akx4kCij6UCG%2F%2FsEuo%2Btjrwpn8yWdjZoOng3NxiptMzs9rDSyY9yvyi7tDEaoeE73ZKJoBJmWtWrRjI64IXSpQZSCGfp%2F0Pj7q0zEgWVLU7sQSgEnRTjn3E1yGUNZDIhyfxEAxBsdY5FN7IwZRGz81mUgUGYl4ewnM%2B5ZnwyLykQjimSJUIn0DVN%2F5d%2FrzTKLa6lGHTcu2He&X-Amz-Signature=b827f23bc80caf5dd69b6c3ad1ccee9fafd1b63cf684a411e887b14edf8abee8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR4VQUGT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD06ZquH%2B%2FkZc7hoRA3OGiXXdU1LM3gmbmS0i4uKA%2F3KwIgFMIQE5%2FxiZMh79mRvFgHrqkG0z%2FDjsRbHyadfsq6G2sqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXJ020iNhdCDcwAzyrcA7d%2FB2Z6hEbuq5DonFlPhBPQstyu30MdW8%2BwOBsNiRwfUMPrfgYWsFcbAWTXluGk7vwMvsgAUIeRG1a5sGdl4vVQYibezAT758MbmWqONCRWM6NWKg2EhtO0Es27N5O4rcNnPMLRLhFFjjG7HlE0MpzhZmjvJrsDTDmvJWJ0Q5jwWwBJ7E1VvqpYqE6GWwv5u51Q%2FsoLxVngVmftRWamITIxcb3933u%2FraNIWKlHd%2Fa1o24zmkwMrx2Ounw%2BSL2w94ktYL%2FRJFQelXTiFzcaMHnsn7qRQzBmaPe0QPUjo3RINsm8md%2BuFTDpdt7ttxQmUdLZNE47JrJ4tr9o%2BWEGBfzj1vyDLUTXiRf51lrkl%2Fs8C2aizvwSwiPczERA%2BKtRA%2FO9uB4IYqTMnyfYZxpomqa5yp%2BSSPhWmgesOMuBIbBTwzNANvxSfxflxs4xwZmVMKhxb%2B8hmKGVowZcxfcgzbyUlEN188vAgYYUAHuvz%2BtNVZgINMykyURrOZlo73HAS9Xfdb9H1w6IOeZEyGZAYelHQC014cdv4hv2F5o%2F27fUXR%2BPj4FZHspv98CdJ3QkkZryzGfNsEvPJpCxFqn7%2BDZCsHO8OO%2BICYPV7khuHFVfud162kkzVu%2FXVkb3MKavqL8GOqUB1mhDc9CKrpeOrXg2akx4kCij6UCG%2F%2FsEuo%2Btjrwpn8yWdjZoOng3NxiptMzs9rDSyY9yvyi7tDEaoeE73ZKJoBJmWtWrRjI64IXSpQZSCGfp%2F0Pj7q0zEgWVLU7sQSgEnRTjn3E1yGUNZDIhyfxEAxBsdY5FN7IwZRGz81mUgUGYl4ewnM%2B5ZnwyLykQjimSJUIn0DVN%2F5d%2FrzTKLa6lGHTcu2He&X-Amz-Signature=6a5acd1a82180d565526a401a0a5e5ce3855c84f96ecf48ee74c318934c9a0a7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR4VQUGT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD06ZquH%2B%2FkZc7hoRA3OGiXXdU1LM3gmbmS0i4uKA%2F3KwIgFMIQE5%2FxiZMh79mRvFgHrqkG0z%2FDjsRbHyadfsq6G2sqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXJ020iNhdCDcwAzyrcA7d%2FB2Z6hEbuq5DonFlPhBPQstyu30MdW8%2BwOBsNiRwfUMPrfgYWsFcbAWTXluGk7vwMvsgAUIeRG1a5sGdl4vVQYibezAT758MbmWqONCRWM6NWKg2EhtO0Es27N5O4rcNnPMLRLhFFjjG7HlE0MpzhZmjvJrsDTDmvJWJ0Q5jwWwBJ7E1VvqpYqE6GWwv5u51Q%2FsoLxVngVmftRWamITIxcb3933u%2FraNIWKlHd%2Fa1o24zmkwMrx2Ounw%2BSL2w94ktYL%2FRJFQelXTiFzcaMHnsn7qRQzBmaPe0QPUjo3RINsm8md%2BuFTDpdt7ttxQmUdLZNE47JrJ4tr9o%2BWEGBfzj1vyDLUTXiRf51lrkl%2Fs8C2aizvwSwiPczERA%2BKtRA%2FO9uB4IYqTMnyfYZxpomqa5yp%2BSSPhWmgesOMuBIbBTwzNANvxSfxflxs4xwZmVMKhxb%2B8hmKGVowZcxfcgzbyUlEN188vAgYYUAHuvz%2BtNVZgINMykyURrOZlo73HAS9Xfdb9H1w6IOeZEyGZAYelHQC014cdv4hv2F5o%2F27fUXR%2BPj4FZHspv98CdJ3QkkZryzGfNsEvPJpCxFqn7%2BDZCsHO8OO%2BICYPV7khuHFVfud162kkzVu%2FXVkb3MKavqL8GOqUB1mhDc9CKrpeOrXg2akx4kCij6UCG%2F%2FsEuo%2Btjrwpn8yWdjZoOng3NxiptMzs9rDSyY9yvyi7tDEaoeE73ZKJoBJmWtWrRjI64IXSpQZSCGfp%2F0Pj7q0zEgWVLU7sQSgEnRTjn3E1yGUNZDIhyfxEAxBsdY5FN7IwZRGz81mUgUGYl4ewnM%2B5ZnwyLykQjimSJUIn0DVN%2F5d%2FrzTKLa6lGHTcu2He&X-Amz-Signature=4a28905740c482a64126d2344f45d26c7924bcd589f0f941c12f63326cde6510&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR4VQUGT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD06ZquH%2B%2FkZc7hoRA3OGiXXdU1LM3gmbmS0i4uKA%2F3KwIgFMIQE5%2FxiZMh79mRvFgHrqkG0z%2FDjsRbHyadfsq6G2sqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXJ020iNhdCDcwAzyrcA7d%2FB2Z6hEbuq5DonFlPhBPQstyu30MdW8%2BwOBsNiRwfUMPrfgYWsFcbAWTXluGk7vwMvsgAUIeRG1a5sGdl4vVQYibezAT758MbmWqONCRWM6NWKg2EhtO0Es27N5O4rcNnPMLRLhFFjjG7HlE0MpzhZmjvJrsDTDmvJWJ0Q5jwWwBJ7E1VvqpYqE6GWwv5u51Q%2FsoLxVngVmftRWamITIxcb3933u%2FraNIWKlHd%2Fa1o24zmkwMrx2Ounw%2BSL2w94ktYL%2FRJFQelXTiFzcaMHnsn7qRQzBmaPe0QPUjo3RINsm8md%2BuFTDpdt7ttxQmUdLZNE47JrJ4tr9o%2BWEGBfzj1vyDLUTXiRf51lrkl%2Fs8C2aizvwSwiPczERA%2BKtRA%2FO9uB4IYqTMnyfYZxpomqa5yp%2BSSPhWmgesOMuBIbBTwzNANvxSfxflxs4xwZmVMKhxb%2B8hmKGVowZcxfcgzbyUlEN188vAgYYUAHuvz%2BtNVZgINMykyURrOZlo73HAS9Xfdb9H1w6IOeZEyGZAYelHQC014cdv4hv2F5o%2F27fUXR%2BPj4FZHspv98CdJ3QkkZryzGfNsEvPJpCxFqn7%2BDZCsHO8OO%2BICYPV7khuHFVfud162kkzVu%2FXVkb3MKavqL8GOqUB1mhDc9CKrpeOrXg2akx4kCij6UCG%2F%2FsEuo%2Btjrwpn8yWdjZoOng3NxiptMzs9rDSyY9yvyi7tDEaoeE73ZKJoBJmWtWrRjI64IXSpQZSCGfp%2F0Pj7q0zEgWVLU7sQSgEnRTjn3E1yGUNZDIhyfxEAxBsdY5FN7IwZRGz81mUgUGYl4ewnM%2B5ZnwyLykQjimSJUIn0DVN%2F5d%2FrzTKLa6lGHTcu2He&X-Amz-Signature=5a30ce72d48c049cbade3cdda2365ecab5430cc06a84e2818b14036531efb7c7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR4VQUGT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD06ZquH%2B%2FkZc7hoRA3OGiXXdU1LM3gmbmS0i4uKA%2F3KwIgFMIQE5%2FxiZMh79mRvFgHrqkG0z%2FDjsRbHyadfsq6G2sqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXJ020iNhdCDcwAzyrcA7d%2FB2Z6hEbuq5DonFlPhBPQstyu30MdW8%2BwOBsNiRwfUMPrfgYWsFcbAWTXluGk7vwMvsgAUIeRG1a5sGdl4vVQYibezAT758MbmWqONCRWM6NWKg2EhtO0Es27N5O4rcNnPMLRLhFFjjG7HlE0MpzhZmjvJrsDTDmvJWJ0Q5jwWwBJ7E1VvqpYqE6GWwv5u51Q%2FsoLxVngVmftRWamITIxcb3933u%2FraNIWKlHd%2Fa1o24zmkwMrx2Ounw%2BSL2w94ktYL%2FRJFQelXTiFzcaMHnsn7qRQzBmaPe0QPUjo3RINsm8md%2BuFTDpdt7ttxQmUdLZNE47JrJ4tr9o%2BWEGBfzj1vyDLUTXiRf51lrkl%2Fs8C2aizvwSwiPczERA%2BKtRA%2FO9uB4IYqTMnyfYZxpomqa5yp%2BSSPhWmgesOMuBIbBTwzNANvxSfxflxs4xwZmVMKhxb%2B8hmKGVowZcxfcgzbyUlEN188vAgYYUAHuvz%2BtNVZgINMykyURrOZlo73HAS9Xfdb9H1w6IOeZEyGZAYelHQC014cdv4hv2F5o%2F27fUXR%2BPj4FZHspv98CdJ3QkkZryzGfNsEvPJpCxFqn7%2BDZCsHO8OO%2BICYPV7khuHFVfud162kkzVu%2FXVkb3MKavqL8GOqUB1mhDc9CKrpeOrXg2akx4kCij6UCG%2F%2FsEuo%2Btjrwpn8yWdjZoOng3NxiptMzs9rDSyY9yvyi7tDEaoeE73ZKJoBJmWtWrRjI64IXSpQZSCGfp%2F0Pj7q0zEgWVLU7sQSgEnRTjn3E1yGUNZDIhyfxEAxBsdY5FN7IwZRGz81mUgUGYl4ewnM%2B5ZnwyLykQjimSJUIn0DVN%2F5d%2FrzTKLa6lGHTcu2He&X-Amz-Signature=fd1c2c7a20f281083897be2eb88befa0df388b4faffe9c7ca3692b1ed99d049d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR4VQUGT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD06ZquH%2B%2FkZc7hoRA3OGiXXdU1LM3gmbmS0i4uKA%2F3KwIgFMIQE5%2FxiZMh79mRvFgHrqkG0z%2FDjsRbHyadfsq6G2sqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXJ020iNhdCDcwAzyrcA7d%2FB2Z6hEbuq5DonFlPhBPQstyu30MdW8%2BwOBsNiRwfUMPrfgYWsFcbAWTXluGk7vwMvsgAUIeRG1a5sGdl4vVQYibezAT758MbmWqONCRWM6NWKg2EhtO0Es27N5O4rcNnPMLRLhFFjjG7HlE0MpzhZmjvJrsDTDmvJWJ0Q5jwWwBJ7E1VvqpYqE6GWwv5u51Q%2FsoLxVngVmftRWamITIxcb3933u%2FraNIWKlHd%2Fa1o24zmkwMrx2Ounw%2BSL2w94ktYL%2FRJFQelXTiFzcaMHnsn7qRQzBmaPe0QPUjo3RINsm8md%2BuFTDpdt7ttxQmUdLZNE47JrJ4tr9o%2BWEGBfzj1vyDLUTXiRf51lrkl%2Fs8C2aizvwSwiPczERA%2BKtRA%2FO9uB4IYqTMnyfYZxpomqa5yp%2BSSPhWmgesOMuBIbBTwzNANvxSfxflxs4xwZmVMKhxb%2B8hmKGVowZcxfcgzbyUlEN188vAgYYUAHuvz%2BtNVZgINMykyURrOZlo73HAS9Xfdb9H1w6IOeZEyGZAYelHQC014cdv4hv2F5o%2F27fUXR%2BPj4FZHspv98CdJ3QkkZryzGfNsEvPJpCxFqn7%2BDZCsHO8OO%2BICYPV7khuHFVfud162kkzVu%2FXVkb3MKavqL8GOqUB1mhDc9CKrpeOrXg2akx4kCij6UCG%2F%2FsEuo%2Btjrwpn8yWdjZoOng3NxiptMzs9rDSyY9yvyi7tDEaoeE73ZKJoBJmWtWrRjI64IXSpQZSCGfp%2F0Pj7q0zEgWVLU7sQSgEnRTjn3E1yGUNZDIhyfxEAxBsdY5FN7IwZRGz81mUgUGYl4ewnM%2B5ZnwyLykQjimSJUIn0DVN%2F5d%2FrzTKLa6lGHTcu2He&X-Amz-Signature=71366fe1e6fef102f13e716219f49af30af24b74e8348a5746e37d2d6920a979&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR4VQUGT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD06ZquH%2B%2FkZc7hoRA3OGiXXdU1LM3gmbmS0i4uKA%2F3KwIgFMIQE5%2FxiZMh79mRvFgHrqkG0z%2FDjsRbHyadfsq6G2sqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXJ020iNhdCDcwAzyrcA7d%2FB2Z6hEbuq5DonFlPhBPQstyu30MdW8%2BwOBsNiRwfUMPrfgYWsFcbAWTXluGk7vwMvsgAUIeRG1a5sGdl4vVQYibezAT758MbmWqONCRWM6NWKg2EhtO0Es27N5O4rcNnPMLRLhFFjjG7HlE0MpzhZmjvJrsDTDmvJWJ0Q5jwWwBJ7E1VvqpYqE6GWwv5u51Q%2FsoLxVngVmftRWamITIxcb3933u%2FraNIWKlHd%2Fa1o24zmkwMrx2Ounw%2BSL2w94ktYL%2FRJFQelXTiFzcaMHnsn7qRQzBmaPe0QPUjo3RINsm8md%2BuFTDpdt7ttxQmUdLZNE47JrJ4tr9o%2BWEGBfzj1vyDLUTXiRf51lrkl%2Fs8C2aizvwSwiPczERA%2BKtRA%2FO9uB4IYqTMnyfYZxpomqa5yp%2BSSPhWmgesOMuBIbBTwzNANvxSfxflxs4xwZmVMKhxb%2B8hmKGVowZcxfcgzbyUlEN188vAgYYUAHuvz%2BtNVZgINMykyURrOZlo73HAS9Xfdb9H1w6IOeZEyGZAYelHQC014cdv4hv2F5o%2F27fUXR%2BPj4FZHspv98CdJ3QkkZryzGfNsEvPJpCxFqn7%2BDZCsHO8OO%2BICYPV7khuHFVfud162kkzVu%2FXVkb3MKavqL8GOqUB1mhDc9CKrpeOrXg2akx4kCij6UCG%2F%2FsEuo%2Btjrwpn8yWdjZoOng3NxiptMzs9rDSyY9yvyi7tDEaoeE73ZKJoBJmWtWrRjI64IXSpQZSCGfp%2F0Pj7q0zEgWVLU7sQSgEnRTjn3E1yGUNZDIhyfxEAxBsdY5FN7IwZRGz81mUgUGYl4ewnM%2B5ZnwyLykQjimSJUIn0DVN%2F5d%2FrzTKLa6lGHTcu2He&X-Amz-Signature=8a0527d3e221542fc07825951eb0bbe7d7035edad7becddd24036b856a7a1214&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
