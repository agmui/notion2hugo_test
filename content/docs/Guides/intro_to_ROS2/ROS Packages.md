---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAI34NHI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD7zYsg84wzPrd3zF%2Fu5NriAIO1xtQZqsSojeoFrNp%2BYQIgSuebCnP7pKt4mxtqxnZYPM4TG7Da0Cuhf23hLDmfbGoqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzT93GFvQIuWZvL0SrcAzRwtBaDy4DiiwB2YZWxkjaryGo6GFYpBKmHhzQAeiziPh4El0zxEi6KrN6si7sdE4OhzM2p2KOqqiFsNOQBXDEcf8glHtRFHN1XNNZutBRDA6VSZ2Ui4QuJImYTe8GFWSRZv8mA%2B3T6OfVGp%2B6%2BWBfpM0AFQaARRpMMUj6s%2BEDSzWcIe9rRqsgx4emrfYcYd0Bwo2o89gbHlMCoLcIKrwc0v%2BKKz5SNwdM5nkKqD%2Bfts%2F8Iack4XIN6AX1Ll1hebt%2FVtpzJOBhpQ4BCa6amfAR6b7cWFw3WmyXNKQ8HHGyEEc96Tb%2B4lE5AD8SxUTYyBrZSDCNLGHt5X1wKtzmQumUjshwDwTrvss48Rh6xsyHBzMsWbfrTGjVuWkVspYzfMwqJ8aZpbgDg997G2drjGVCsTRnQ4MRtbD81RKGaH8ZsKkcdWmn6e9XhHW%2FF2GooXUU1zgfurgm7%2BKHni0kyTlM%2BA9EaVHNn4WDLRV9fJf2wYKGZXAZoRoDx%2B3Npp1iyAx10rhCDLwFRlA9ZkadK%2BPhfuYncshY%2FRBsnZ620yGbYV9CHwPE2KtrYdFKApmzN5Qwc3XGzuI%2BliTXILyI47vHnyL%2FkTRMVVfqz8MpzrTCi9Zleff853WRLFv4IMM%2BKn8QGOqUBfK0h5YUUmcEJx7qAxXnDaRgH5j0ZKfvgfyJV3GTyCT1AFF8tZp%2FZOtO%2F6ug8pzkGB9rSvmrPKOyQqXRjTeeR5h%2BIC7rAgsoPJB9WXOOtRTAshL24kit8Jd4S%2Bb7kBjOcCCUTsf51m%2BEV2Rh%2BmO1enB0MnQv07x3qav3SJP%2BtufTvV%2BHJjoyVUob7l1vm7%2FS0q7%2F025%2BKTyCTebspauN86011OFhg&X-Amz-Signature=a0236309c7733524557c6b870d8cc1d93b63a741253bbd2cffd5b3585a628db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAI34NHI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD7zYsg84wzPrd3zF%2Fu5NriAIO1xtQZqsSojeoFrNp%2BYQIgSuebCnP7pKt4mxtqxnZYPM4TG7Da0Cuhf23hLDmfbGoqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzT93GFvQIuWZvL0SrcAzRwtBaDy4DiiwB2YZWxkjaryGo6GFYpBKmHhzQAeiziPh4El0zxEi6KrN6si7sdE4OhzM2p2KOqqiFsNOQBXDEcf8glHtRFHN1XNNZutBRDA6VSZ2Ui4QuJImYTe8GFWSRZv8mA%2B3T6OfVGp%2B6%2BWBfpM0AFQaARRpMMUj6s%2BEDSzWcIe9rRqsgx4emrfYcYd0Bwo2o89gbHlMCoLcIKrwc0v%2BKKz5SNwdM5nkKqD%2Bfts%2F8Iack4XIN6AX1Ll1hebt%2FVtpzJOBhpQ4BCa6amfAR6b7cWFw3WmyXNKQ8HHGyEEc96Tb%2B4lE5AD8SxUTYyBrZSDCNLGHt5X1wKtzmQumUjshwDwTrvss48Rh6xsyHBzMsWbfrTGjVuWkVspYzfMwqJ8aZpbgDg997G2drjGVCsTRnQ4MRtbD81RKGaH8ZsKkcdWmn6e9XhHW%2FF2GooXUU1zgfurgm7%2BKHni0kyTlM%2BA9EaVHNn4WDLRV9fJf2wYKGZXAZoRoDx%2B3Npp1iyAx10rhCDLwFRlA9ZkadK%2BPhfuYncshY%2FRBsnZ620yGbYV9CHwPE2KtrYdFKApmzN5Qwc3XGzuI%2BliTXILyI47vHnyL%2FkTRMVVfqz8MpzrTCi9Zleff853WRLFv4IMM%2BKn8QGOqUBfK0h5YUUmcEJx7qAxXnDaRgH5j0ZKfvgfyJV3GTyCT1AFF8tZp%2FZOtO%2F6ug8pzkGB9rSvmrPKOyQqXRjTeeR5h%2BIC7rAgsoPJB9WXOOtRTAshL24kit8Jd4S%2Bb7kBjOcCCUTsf51m%2BEV2Rh%2BmO1enB0MnQv07x3qav3SJP%2BtufTvV%2BHJjoyVUob7l1vm7%2FS0q7%2F025%2BKTyCTebspauN86011OFhg&X-Amz-Signature=ba6a168d71117819394fcc1a184c5b739ad99e7170aac7494096d7dd96019bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAI34NHI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD7zYsg84wzPrd3zF%2Fu5NriAIO1xtQZqsSojeoFrNp%2BYQIgSuebCnP7pKt4mxtqxnZYPM4TG7Da0Cuhf23hLDmfbGoqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzT93GFvQIuWZvL0SrcAzRwtBaDy4DiiwB2YZWxkjaryGo6GFYpBKmHhzQAeiziPh4El0zxEi6KrN6si7sdE4OhzM2p2KOqqiFsNOQBXDEcf8glHtRFHN1XNNZutBRDA6VSZ2Ui4QuJImYTe8GFWSRZv8mA%2B3T6OfVGp%2B6%2BWBfpM0AFQaARRpMMUj6s%2BEDSzWcIe9rRqsgx4emrfYcYd0Bwo2o89gbHlMCoLcIKrwc0v%2BKKz5SNwdM5nkKqD%2Bfts%2F8Iack4XIN6AX1Ll1hebt%2FVtpzJOBhpQ4BCa6amfAR6b7cWFw3WmyXNKQ8HHGyEEc96Tb%2B4lE5AD8SxUTYyBrZSDCNLGHt5X1wKtzmQumUjshwDwTrvss48Rh6xsyHBzMsWbfrTGjVuWkVspYzfMwqJ8aZpbgDg997G2drjGVCsTRnQ4MRtbD81RKGaH8ZsKkcdWmn6e9XhHW%2FF2GooXUU1zgfurgm7%2BKHni0kyTlM%2BA9EaVHNn4WDLRV9fJf2wYKGZXAZoRoDx%2B3Npp1iyAx10rhCDLwFRlA9ZkadK%2BPhfuYncshY%2FRBsnZ620yGbYV9CHwPE2KtrYdFKApmzN5Qwc3XGzuI%2BliTXILyI47vHnyL%2FkTRMVVfqz8MpzrTCi9Zleff853WRLFv4IMM%2BKn8QGOqUBfK0h5YUUmcEJx7qAxXnDaRgH5j0ZKfvgfyJV3GTyCT1AFF8tZp%2FZOtO%2F6ug8pzkGB9rSvmrPKOyQqXRjTeeR5h%2BIC7rAgsoPJB9WXOOtRTAshL24kit8Jd4S%2Bb7kBjOcCCUTsf51m%2BEV2Rh%2BmO1enB0MnQv07x3qav3SJP%2BtufTvV%2BHJjoyVUob7l1vm7%2FS0q7%2F025%2BKTyCTebspauN86011OFhg&X-Amz-Signature=3f70ca0b84f35c7f19aa277a7ae6dd82b2721a6d15bd54e1fb510b3260ca4a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAI34NHI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD7zYsg84wzPrd3zF%2Fu5NriAIO1xtQZqsSojeoFrNp%2BYQIgSuebCnP7pKt4mxtqxnZYPM4TG7Da0Cuhf23hLDmfbGoqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzT93GFvQIuWZvL0SrcAzRwtBaDy4DiiwB2YZWxkjaryGo6GFYpBKmHhzQAeiziPh4El0zxEi6KrN6si7sdE4OhzM2p2KOqqiFsNOQBXDEcf8glHtRFHN1XNNZutBRDA6VSZ2Ui4QuJImYTe8GFWSRZv8mA%2B3T6OfVGp%2B6%2BWBfpM0AFQaARRpMMUj6s%2BEDSzWcIe9rRqsgx4emrfYcYd0Bwo2o89gbHlMCoLcIKrwc0v%2BKKz5SNwdM5nkKqD%2Bfts%2F8Iack4XIN6AX1Ll1hebt%2FVtpzJOBhpQ4BCa6amfAR6b7cWFw3WmyXNKQ8HHGyEEc96Tb%2B4lE5AD8SxUTYyBrZSDCNLGHt5X1wKtzmQumUjshwDwTrvss48Rh6xsyHBzMsWbfrTGjVuWkVspYzfMwqJ8aZpbgDg997G2drjGVCsTRnQ4MRtbD81RKGaH8ZsKkcdWmn6e9XhHW%2FF2GooXUU1zgfurgm7%2BKHni0kyTlM%2BA9EaVHNn4WDLRV9fJf2wYKGZXAZoRoDx%2B3Npp1iyAx10rhCDLwFRlA9ZkadK%2BPhfuYncshY%2FRBsnZ620yGbYV9CHwPE2KtrYdFKApmzN5Qwc3XGzuI%2BliTXILyI47vHnyL%2FkTRMVVfqz8MpzrTCi9Zleff853WRLFv4IMM%2BKn8QGOqUBfK0h5YUUmcEJx7qAxXnDaRgH5j0ZKfvgfyJV3GTyCT1AFF8tZp%2FZOtO%2F6ug8pzkGB9rSvmrPKOyQqXRjTeeR5h%2BIC7rAgsoPJB9WXOOtRTAshL24kit8Jd4S%2Bb7kBjOcCCUTsf51m%2BEV2Rh%2BmO1enB0MnQv07x3qav3SJP%2BtufTvV%2BHJjoyVUob7l1vm7%2FS0q7%2F025%2BKTyCTebspauN86011OFhg&X-Amz-Signature=84a1351784dd1b33081712e02bfc84a778e0eee0a656995b70b0176d10b47b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAI34NHI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD7zYsg84wzPrd3zF%2Fu5NriAIO1xtQZqsSojeoFrNp%2BYQIgSuebCnP7pKt4mxtqxnZYPM4TG7Da0Cuhf23hLDmfbGoqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzT93GFvQIuWZvL0SrcAzRwtBaDy4DiiwB2YZWxkjaryGo6GFYpBKmHhzQAeiziPh4El0zxEi6KrN6si7sdE4OhzM2p2KOqqiFsNOQBXDEcf8glHtRFHN1XNNZutBRDA6VSZ2Ui4QuJImYTe8GFWSRZv8mA%2B3T6OfVGp%2B6%2BWBfpM0AFQaARRpMMUj6s%2BEDSzWcIe9rRqsgx4emrfYcYd0Bwo2o89gbHlMCoLcIKrwc0v%2BKKz5SNwdM5nkKqD%2Bfts%2F8Iack4XIN6AX1Ll1hebt%2FVtpzJOBhpQ4BCa6amfAR6b7cWFw3WmyXNKQ8HHGyEEc96Tb%2B4lE5AD8SxUTYyBrZSDCNLGHt5X1wKtzmQumUjshwDwTrvss48Rh6xsyHBzMsWbfrTGjVuWkVspYzfMwqJ8aZpbgDg997G2drjGVCsTRnQ4MRtbD81RKGaH8ZsKkcdWmn6e9XhHW%2FF2GooXUU1zgfurgm7%2BKHni0kyTlM%2BA9EaVHNn4WDLRV9fJf2wYKGZXAZoRoDx%2B3Npp1iyAx10rhCDLwFRlA9ZkadK%2BPhfuYncshY%2FRBsnZ620yGbYV9CHwPE2KtrYdFKApmzN5Qwc3XGzuI%2BliTXILyI47vHnyL%2FkTRMVVfqz8MpzrTCi9Zleff853WRLFv4IMM%2BKn8QGOqUBfK0h5YUUmcEJx7qAxXnDaRgH5j0ZKfvgfyJV3GTyCT1AFF8tZp%2FZOtO%2F6ug8pzkGB9rSvmrPKOyQqXRjTeeR5h%2BIC7rAgsoPJB9WXOOtRTAshL24kit8Jd4S%2Bb7kBjOcCCUTsf51m%2BEV2Rh%2BmO1enB0MnQv07x3qav3SJP%2BtufTvV%2BHJjoyVUob7l1vm7%2FS0q7%2F025%2BKTyCTebspauN86011OFhg&X-Amz-Signature=e39ea071355c88e21244d979d6075bd7e5621f83a3eb603b25ae9f81c75d3b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAI34NHI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD7zYsg84wzPrd3zF%2Fu5NriAIO1xtQZqsSojeoFrNp%2BYQIgSuebCnP7pKt4mxtqxnZYPM4TG7Da0Cuhf23hLDmfbGoqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzT93GFvQIuWZvL0SrcAzRwtBaDy4DiiwB2YZWxkjaryGo6GFYpBKmHhzQAeiziPh4El0zxEi6KrN6si7sdE4OhzM2p2KOqqiFsNOQBXDEcf8glHtRFHN1XNNZutBRDA6VSZ2Ui4QuJImYTe8GFWSRZv8mA%2B3T6OfVGp%2B6%2BWBfpM0AFQaARRpMMUj6s%2BEDSzWcIe9rRqsgx4emrfYcYd0Bwo2o89gbHlMCoLcIKrwc0v%2BKKz5SNwdM5nkKqD%2Bfts%2F8Iack4XIN6AX1Ll1hebt%2FVtpzJOBhpQ4BCa6amfAR6b7cWFw3WmyXNKQ8HHGyEEc96Tb%2B4lE5AD8SxUTYyBrZSDCNLGHt5X1wKtzmQumUjshwDwTrvss48Rh6xsyHBzMsWbfrTGjVuWkVspYzfMwqJ8aZpbgDg997G2drjGVCsTRnQ4MRtbD81RKGaH8ZsKkcdWmn6e9XhHW%2FF2GooXUU1zgfurgm7%2BKHni0kyTlM%2BA9EaVHNn4WDLRV9fJf2wYKGZXAZoRoDx%2B3Npp1iyAx10rhCDLwFRlA9ZkadK%2BPhfuYncshY%2FRBsnZ620yGbYV9CHwPE2KtrYdFKApmzN5Qwc3XGzuI%2BliTXILyI47vHnyL%2FkTRMVVfqz8MpzrTCi9Zleff853WRLFv4IMM%2BKn8QGOqUBfK0h5YUUmcEJx7qAxXnDaRgH5j0ZKfvgfyJV3GTyCT1AFF8tZp%2FZOtO%2F6ug8pzkGB9rSvmrPKOyQqXRjTeeR5h%2BIC7rAgsoPJB9WXOOtRTAshL24kit8Jd4S%2Bb7kBjOcCCUTsf51m%2BEV2Rh%2BmO1enB0MnQv07x3qav3SJP%2BtufTvV%2BHJjoyVUob7l1vm7%2FS0q7%2F025%2BKTyCTebspauN86011OFhg&X-Amz-Signature=4cf7e3e546a517979761bb1c856be2789ad772714235a55f196e8f2ebef69c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAI34NHI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD7zYsg84wzPrd3zF%2Fu5NriAIO1xtQZqsSojeoFrNp%2BYQIgSuebCnP7pKt4mxtqxnZYPM4TG7Da0Cuhf23hLDmfbGoqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzT93GFvQIuWZvL0SrcAzRwtBaDy4DiiwB2YZWxkjaryGo6GFYpBKmHhzQAeiziPh4El0zxEi6KrN6si7sdE4OhzM2p2KOqqiFsNOQBXDEcf8glHtRFHN1XNNZutBRDA6VSZ2Ui4QuJImYTe8GFWSRZv8mA%2B3T6OfVGp%2B6%2BWBfpM0AFQaARRpMMUj6s%2BEDSzWcIe9rRqsgx4emrfYcYd0Bwo2o89gbHlMCoLcIKrwc0v%2BKKz5SNwdM5nkKqD%2Bfts%2F8Iack4XIN6AX1Ll1hebt%2FVtpzJOBhpQ4BCa6amfAR6b7cWFw3WmyXNKQ8HHGyEEc96Tb%2B4lE5AD8SxUTYyBrZSDCNLGHt5X1wKtzmQumUjshwDwTrvss48Rh6xsyHBzMsWbfrTGjVuWkVspYzfMwqJ8aZpbgDg997G2drjGVCsTRnQ4MRtbD81RKGaH8ZsKkcdWmn6e9XhHW%2FF2GooXUU1zgfurgm7%2BKHni0kyTlM%2BA9EaVHNn4WDLRV9fJf2wYKGZXAZoRoDx%2B3Npp1iyAx10rhCDLwFRlA9ZkadK%2BPhfuYncshY%2FRBsnZ620yGbYV9CHwPE2KtrYdFKApmzN5Qwc3XGzuI%2BliTXILyI47vHnyL%2FkTRMVVfqz8MpzrTCi9Zleff853WRLFv4IMM%2BKn8QGOqUBfK0h5YUUmcEJx7qAxXnDaRgH5j0ZKfvgfyJV3GTyCT1AFF8tZp%2FZOtO%2F6ug8pzkGB9rSvmrPKOyQqXRjTeeR5h%2BIC7rAgsoPJB9WXOOtRTAshL24kit8Jd4S%2Bb7kBjOcCCUTsf51m%2BEV2Rh%2BmO1enB0MnQv07x3qav3SJP%2BtufTvV%2BHJjoyVUob7l1vm7%2FS0q7%2F025%2BKTyCTebspauN86011OFhg&X-Amz-Signature=01329d7d5616fa64f3f2187949c4bb8017e971fcb53833b3de5129615d6180d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
