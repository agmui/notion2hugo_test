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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XLJXQ52%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDGqvWVGDu4DzQ8L%2BvJlhEbUG73WIGQ3EmtxlL%2BMJgCjAiAE345Y2go7SM8alNwgbJWXYAk2r4l7lO9K2aihqPVEwiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaqhlQJTQ4UEQ61Z7KtwDz1GoDRdrAc0kP66AVKoE%2F2NEkrHWKb3HGIc2HF9vXU%2F%2F2to5Kq1YcEGmdeLBjxmsPRuRjDSoxOkiKvCsrhqm5KFFpkRS41LttWvWbDP%2FSS7UFAqQdjt%2BKHHYdQGjRtESMyt0uW2QsqlZFZZ%2BV%2BwzjcDDWeaXMk7Hfip%2FrvcIZlFzstEL9eNO0E59GFyQLf6o15uB8uDpUH9zU7DGEfYf%2BcgWbjrnlYbS2yV3DNUgbavSgnzs5gARHYU2whT1RCcZmPbQbPBeg5jav9JSaNyXibDIVl1KDNF3Pb69bfu17POOzt6BlkYw4Q69uBgoUyx0A5u%2Fzsbj5cR9veXSRoOKd7Korz425%2BjGWzpn1vJgMgCbsYSyBcRxJoAoIHv9KdMt38bZozfYKCgKROXMnyt1EIX8VIDaW9PMuC954wE2Zd7gFU%2BJQ1GE9z8TdJLlXfFx%2BV1g1xhrQR0OQ02ifpRROQrJHtfNkY0NcNDldaR3ZCT9HA%2FHBivNPt1O9wz10vApinTKZAmCL8VEol5FkGj0iaGi6UWYbc7u9hHAZBHsN%2BU%2BmIHoReLdRZ%2Bwc6ljpmAXxCw7BhQ3I6TeuypEwWxKRBVvObXNP0%2FLsUbkaDuQNHgjRvYds8wj7hCL4LQwrd%2FfwgY6pgFCsPDwPuag8%2Ft8fWcogUQ5QV234aPKwNvrAf1FCV7RmCNJk4yB67I2TvrFyDRm2aTdMvSO%2F0inL3MxECvCmYbKB2qr1tvW08QXJS5kzTFDjln%2F8aGy08E8PoMGFozX%2BpAxAs%2BpWAA45DXnMl2vi4WLdQnUkhSSzd51kagtbBHU19Tpd0Ru0IYoaxoKsb8TFvBWwnz5p8xfLeTdpPqEtFGBgAEw8Ub8&X-Amz-Signature=0c510a3922731e168a1ef787efc61163101571771fb3b47046c06dda2289e0d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XLJXQ52%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDGqvWVGDu4DzQ8L%2BvJlhEbUG73WIGQ3EmtxlL%2BMJgCjAiAE345Y2go7SM8alNwgbJWXYAk2r4l7lO9K2aihqPVEwiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaqhlQJTQ4UEQ61Z7KtwDz1GoDRdrAc0kP66AVKoE%2F2NEkrHWKb3HGIc2HF9vXU%2F%2F2to5Kq1YcEGmdeLBjxmsPRuRjDSoxOkiKvCsrhqm5KFFpkRS41LttWvWbDP%2FSS7UFAqQdjt%2BKHHYdQGjRtESMyt0uW2QsqlZFZZ%2BV%2BwzjcDDWeaXMk7Hfip%2FrvcIZlFzstEL9eNO0E59GFyQLf6o15uB8uDpUH9zU7DGEfYf%2BcgWbjrnlYbS2yV3DNUgbavSgnzs5gARHYU2whT1RCcZmPbQbPBeg5jav9JSaNyXibDIVl1KDNF3Pb69bfu17POOzt6BlkYw4Q69uBgoUyx0A5u%2Fzsbj5cR9veXSRoOKd7Korz425%2BjGWzpn1vJgMgCbsYSyBcRxJoAoIHv9KdMt38bZozfYKCgKROXMnyt1EIX8VIDaW9PMuC954wE2Zd7gFU%2BJQ1GE9z8TdJLlXfFx%2BV1g1xhrQR0OQ02ifpRROQrJHtfNkY0NcNDldaR3ZCT9HA%2FHBivNPt1O9wz10vApinTKZAmCL8VEol5FkGj0iaGi6UWYbc7u9hHAZBHsN%2BU%2BmIHoReLdRZ%2Bwc6ljpmAXxCw7BhQ3I6TeuypEwWxKRBVvObXNP0%2FLsUbkaDuQNHgjRvYds8wj7hCL4LQwrd%2FfwgY6pgFCsPDwPuag8%2Ft8fWcogUQ5QV234aPKwNvrAf1FCV7RmCNJk4yB67I2TvrFyDRm2aTdMvSO%2F0inL3MxECvCmYbKB2qr1tvW08QXJS5kzTFDjln%2F8aGy08E8PoMGFozX%2BpAxAs%2BpWAA45DXnMl2vi4WLdQnUkhSSzd51kagtbBHU19Tpd0Ru0IYoaxoKsb8TFvBWwnz5p8xfLeTdpPqEtFGBgAEw8Ub8&X-Amz-Signature=5081c7270c07093a3b7bf449f5fe6915d02aad4ded5226344733e52b336e2fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XLJXQ52%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDGqvWVGDu4DzQ8L%2BvJlhEbUG73WIGQ3EmtxlL%2BMJgCjAiAE345Y2go7SM8alNwgbJWXYAk2r4l7lO9K2aihqPVEwiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaqhlQJTQ4UEQ61Z7KtwDz1GoDRdrAc0kP66AVKoE%2F2NEkrHWKb3HGIc2HF9vXU%2F%2F2to5Kq1YcEGmdeLBjxmsPRuRjDSoxOkiKvCsrhqm5KFFpkRS41LttWvWbDP%2FSS7UFAqQdjt%2BKHHYdQGjRtESMyt0uW2QsqlZFZZ%2BV%2BwzjcDDWeaXMk7Hfip%2FrvcIZlFzstEL9eNO0E59GFyQLf6o15uB8uDpUH9zU7DGEfYf%2BcgWbjrnlYbS2yV3DNUgbavSgnzs5gARHYU2whT1RCcZmPbQbPBeg5jav9JSaNyXibDIVl1KDNF3Pb69bfu17POOzt6BlkYw4Q69uBgoUyx0A5u%2Fzsbj5cR9veXSRoOKd7Korz425%2BjGWzpn1vJgMgCbsYSyBcRxJoAoIHv9KdMt38bZozfYKCgKROXMnyt1EIX8VIDaW9PMuC954wE2Zd7gFU%2BJQ1GE9z8TdJLlXfFx%2BV1g1xhrQR0OQ02ifpRROQrJHtfNkY0NcNDldaR3ZCT9HA%2FHBivNPt1O9wz10vApinTKZAmCL8VEol5FkGj0iaGi6UWYbc7u9hHAZBHsN%2BU%2BmIHoReLdRZ%2Bwc6ljpmAXxCw7BhQ3I6TeuypEwWxKRBVvObXNP0%2FLsUbkaDuQNHgjRvYds8wj7hCL4LQwrd%2FfwgY6pgFCsPDwPuag8%2Ft8fWcogUQ5QV234aPKwNvrAf1FCV7RmCNJk4yB67I2TvrFyDRm2aTdMvSO%2F0inL3MxECvCmYbKB2qr1tvW08QXJS5kzTFDjln%2F8aGy08E8PoMGFozX%2BpAxAs%2BpWAA45DXnMl2vi4WLdQnUkhSSzd51kagtbBHU19Tpd0Ru0IYoaxoKsb8TFvBWwnz5p8xfLeTdpPqEtFGBgAEw8Ub8&X-Amz-Signature=ed1702e39ab75a5242c51b9005f18a2dff9fd4f1f608a404a27f4ac78429acf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XLJXQ52%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDGqvWVGDu4DzQ8L%2BvJlhEbUG73WIGQ3EmtxlL%2BMJgCjAiAE345Y2go7SM8alNwgbJWXYAk2r4l7lO9K2aihqPVEwiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaqhlQJTQ4UEQ61Z7KtwDz1GoDRdrAc0kP66AVKoE%2F2NEkrHWKb3HGIc2HF9vXU%2F%2F2to5Kq1YcEGmdeLBjxmsPRuRjDSoxOkiKvCsrhqm5KFFpkRS41LttWvWbDP%2FSS7UFAqQdjt%2BKHHYdQGjRtESMyt0uW2QsqlZFZZ%2BV%2BwzjcDDWeaXMk7Hfip%2FrvcIZlFzstEL9eNO0E59GFyQLf6o15uB8uDpUH9zU7DGEfYf%2BcgWbjrnlYbS2yV3DNUgbavSgnzs5gARHYU2whT1RCcZmPbQbPBeg5jav9JSaNyXibDIVl1KDNF3Pb69bfu17POOzt6BlkYw4Q69uBgoUyx0A5u%2Fzsbj5cR9veXSRoOKd7Korz425%2BjGWzpn1vJgMgCbsYSyBcRxJoAoIHv9KdMt38bZozfYKCgKROXMnyt1EIX8VIDaW9PMuC954wE2Zd7gFU%2BJQ1GE9z8TdJLlXfFx%2BV1g1xhrQR0OQ02ifpRROQrJHtfNkY0NcNDldaR3ZCT9HA%2FHBivNPt1O9wz10vApinTKZAmCL8VEol5FkGj0iaGi6UWYbc7u9hHAZBHsN%2BU%2BmIHoReLdRZ%2Bwc6ljpmAXxCw7BhQ3I6TeuypEwWxKRBVvObXNP0%2FLsUbkaDuQNHgjRvYds8wj7hCL4LQwrd%2FfwgY6pgFCsPDwPuag8%2Ft8fWcogUQ5QV234aPKwNvrAf1FCV7RmCNJk4yB67I2TvrFyDRm2aTdMvSO%2F0inL3MxECvCmYbKB2qr1tvW08QXJS5kzTFDjln%2F8aGy08E8PoMGFozX%2BpAxAs%2BpWAA45DXnMl2vi4WLdQnUkhSSzd51kagtbBHU19Tpd0Ru0IYoaxoKsb8TFvBWwnz5p8xfLeTdpPqEtFGBgAEw8Ub8&X-Amz-Signature=23c3a9de62501c6d5e48c54a96374db2db931b34b7c44fe69d19ee26e1894eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XLJXQ52%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDGqvWVGDu4DzQ8L%2BvJlhEbUG73WIGQ3EmtxlL%2BMJgCjAiAE345Y2go7SM8alNwgbJWXYAk2r4l7lO9K2aihqPVEwiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaqhlQJTQ4UEQ61Z7KtwDz1GoDRdrAc0kP66AVKoE%2F2NEkrHWKb3HGIc2HF9vXU%2F%2F2to5Kq1YcEGmdeLBjxmsPRuRjDSoxOkiKvCsrhqm5KFFpkRS41LttWvWbDP%2FSS7UFAqQdjt%2BKHHYdQGjRtESMyt0uW2QsqlZFZZ%2BV%2BwzjcDDWeaXMk7Hfip%2FrvcIZlFzstEL9eNO0E59GFyQLf6o15uB8uDpUH9zU7DGEfYf%2BcgWbjrnlYbS2yV3DNUgbavSgnzs5gARHYU2whT1RCcZmPbQbPBeg5jav9JSaNyXibDIVl1KDNF3Pb69bfu17POOzt6BlkYw4Q69uBgoUyx0A5u%2Fzsbj5cR9veXSRoOKd7Korz425%2BjGWzpn1vJgMgCbsYSyBcRxJoAoIHv9KdMt38bZozfYKCgKROXMnyt1EIX8VIDaW9PMuC954wE2Zd7gFU%2BJQ1GE9z8TdJLlXfFx%2BV1g1xhrQR0OQ02ifpRROQrJHtfNkY0NcNDldaR3ZCT9HA%2FHBivNPt1O9wz10vApinTKZAmCL8VEol5FkGj0iaGi6UWYbc7u9hHAZBHsN%2BU%2BmIHoReLdRZ%2Bwc6ljpmAXxCw7BhQ3I6TeuypEwWxKRBVvObXNP0%2FLsUbkaDuQNHgjRvYds8wj7hCL4LQwrd%2FfwgY6pgFCsPDwPuag8%2Ft8fWcogUQ5QV234aPKwNvrAf1FCV7RmCNJk4yB67I2TvrFyDRm2aTdMvSO%2F0inL3MxECvCmYbKB2qr1tvW08QXJS5kzTFDjln%2F8aGy08E8PoMGFozX%2BpAxAs%2BpWAA45DXnMl2vi4WLdQnUkhSSzd51kagtbBHU19Tpd0Ru0IYoaxoKsb8TFvBWwnz5p8xfLeTdpPqEtFGBgAEw8Ub8&X-Amz-Signature=b534798cdee8d8d759e23e4b94df579ee541850469c3a9c8e473721c3a2804ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XLJXQ52%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDGqvWVGDu4DzQ8L%2BvJlhEbUG73WIGQ3EmtxlL%2BMJgCjAiAE345Y2go7SM8alNwgbJWXYAk2r4l7lO9K2aihqPVEwiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaqhlQJTQ4UEQ61Z7KtwDz1GoDRdrAc0kP66AVKoE%2F2NEkrHWKb3HGIc2HF9vXU%2F%2F2to5Kq1YcEGmdeLBjxmsPRuRjDSoxOkiKvCsrhqm5KFFpkRS41LttWvWbDP%2FSS7UFAqQdjt%2BKHHYdQGjRtESMyt0uW2QsqlZFZZ%2BV%2BwzjcDDWeaXMk7Hfip%2FrvcIZlFzstEL9eNO0E59GFyQLf6o15uB8uDpUH9zU7DGEfYf%2BcgWbjrnlYbS2yV3DNUgbavSgnzs5gARHYU2whT1RCcZmPbQbPBeg5jav9JSaNyXibDIVl1KDNF3Pb69bfu17POOzt6BlkYw4Q69uBgoUyx0A5u%2Fzsbj5cR9veXSRoOKd7Korz425%2BjGWzpn1vJgMgCbsYSyBcRxJoAoIHv9KdMt38bZozfYKCgKROXMnyt1EIX8VIDaW9PMuC954wE2Zd7gFU%2BJQ1GE9z8TdJLlXfFx%2BV1g1xhrQR0OQ02ifpRROQrJHtfNkY0NcNDldaR3ZCT9HA%2FHBivNPt1O9wz10vApinTKZAmCL8VEol5FkGj0iaGi6UWYbc7u9hHAZBHsN%2BU%2BmIHoReLdRZ%2Bwc6ljpmAXxCw7BhQ3I6TeuypEwWxKRBVvObXNP0%2FLsUbkaDuQNHgjRvYds8wj7hCL4LQwrd%2FfwgY6pgFCsPDwPuag8%2Ft8fWcogUQ5QV234aPKwNvrAf1FCV7RmCNJk4yB67I2TvrFyDRm2aTdMvSO%2F0inL3MxECvCmYbKB2qr1tvW08QXJS5kzTFDjln%2F8aGy08E8PoMGFozX%2BpAxAs%2BpWAA45DXnMl2vi4WLdQnUkhSSzd51kagtbBHU19Tpd0Ru0IYoaxoKsb8TFvBWwnz5p8xfLeTdpPqEtFGBgAEw8Ub8&X-Amz-Signature=6b6c14e15ad29bc69e2617ecb1ecb69ddeec12f96425f3ad590c06234b102140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XLJXQ52%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDGqvWVGDu4DzQ8L%2BvJlhEbUG73WIGQ3EmtxlL%2BMJgCjAiAE345Y2go7SM8alNwgbJWXYAk2r4l7lO9K2aihqPVEwiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaqhlQJTQ4UEQ61Z7KtwDz1GoDRdrAc0kP66AVKoE%2F2NEkrHWKb3HGIc2HF9vXU%2F%2F2to5Kq1YcEGmdeLBjxmsPRuRjDSoxOkiKvCsrhqm5KFFpkRS41LttWvWbDP%2FSS7UFAqQdjt%2BKHHYdQGjRtESMyt0uW2QsqlZFZZ%2BV%2BwzjcDDWeaXMk7Hfip%2FrvcIZlFzstEL9eNO0E59GFyQLf6o15uB8uDpUH9zU7DGEfYf%2BcgWbjrnlYbS2yV3DNUgbavSgnzs5gARHYU2whT1RCcZmPbQbPBeg5jav9JSaNyXibDIVl1KDNF3Pb69bfu17POOzt6BlkYw4Q69uBgoUyx0A5u%2Fzsbj5cR9veXSRoOKd7Korz425%2BjGWzpn1vJgMgCbsYSyBcRxJoAoIHv9KdMt38bZozfYKCgKROXMnyt1EIX8VIDaW9PMuC954wE2Zd7gFU%2BJQ1GE9z8TdJLlXfFx%2BV1g1xhrQR0OQ02ifpRROQrJHtfNkY0NcNDldaR3ZCT9HA%2FHBivNPt1O9wz10vApinTKZAmCL8VEol5FkGj0iaGi6UWYbc7u9hHAZBHsN%2BU%2BmIHoReLdRZ%2Bwc6ljpmAXxCw7BhQ3I6TeuypEwWxKRBVvObXNP0%2FLsUbkaDuQNHgjRvYds8wj7hCL4LQwrd%2FfwgY6pgFCsPDwPuag8%2Ft8fWcogUQ5QV234aPKwNvrAf1FCV7RmCNJk4yB67I2TvrFyDRm2aTdMvSO%2F0inL3MxECvCmYbKB2qr1tvW08QXJS5kzTFDjln%2F8aGy08E8PoMGFozX%2BpAxAs%2BpWAA45DXnMl2vi4WLdQnUkhSSzd51kagtbBHU19Tpd0Ru0IYoaxoKsb8TFvBWwnz5p8xfLeTdpPqEtFGBgAEw8Ub8&X-Amz-Signature=94240f7aad02ed6410bbafc68293b6f3dd432ea6dba1897421e926052e920f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
