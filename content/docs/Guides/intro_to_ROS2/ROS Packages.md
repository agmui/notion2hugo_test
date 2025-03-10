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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ67JVAO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDkQRvJJg1PzqUcxSOqyBg8WuArGq3%2FsKxQ3ycu9MxHHgIhAOlsIfDLcUtBO7Xhe097AlWC2HOYCFzAE7swu%2BLidjOqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznpBc%2BrpwXuCF0ol8q3APJeWH%2FuEyxIaywpRJkDS2Hx5wifFJ1Lt4Nzlr9XH5sXRbnJ%2BR2jqusLOEOs1NECAaxBAGOlnTig%2BtdhfWQGEV3Mg3jh%2BXt8KMk54XHTxRBEqVeXzzQw4I3rfJ89mvqC6cvkaH4%2BScDzxHUNKP7TW3ziciToIidif1nicOsaN6vX5lQzwhHuBpd%2F66su%2BN5%2B7JZDoWpu2S4iSkGdF5CMBgu27QkdTRhNvrwm6olr%2Bhl0Cmpl2QbdboUe9daSQuPqYRKTbmwI9PM%2Fz1%2BFMQLiz8YpGw3exGDX%2F9%2By3dfSWiZ2Sh%2FK%2BQjg3PvV6WFUI7%2Bf5mnzkXS4fedKtl%2BYygiVX3mkAA94ujvi6Gh9K1jyPiDz46SsKm10%2Bo%2FhMm9yYSHDWiGyjwTr%2BfaFweF68Q02dz7sdoYC3oaDWR1XVOA6Svj3mH%2FUXsL2sJd6MGAVeil2NS9rvRm2bHdTW5fP%2F9JoKRHTgpvUwosFcSu6C%2BNQGCkDmKe3KetIT%2BNhyQ2Oj243sNJqclkv7r5FAOkcgpFopNhrBrYup%2FIRrD2OKQ%2FZJgVHEKaSxtGI6ceNVLY%2FIqqDzrP60DZF80oYb%2Fw06BV0oxCvffjMB%2FJ5epJy59AOBJKETdk9yrigDX8TUL7FzCcqrq%2BBjqkAaxHDXxg%2F1yod78gCn6kLYkpvrMFTQbePCWlJrhEwgx64IFv%2BKcjYTZrh38IWgH4fdools4c3%2B171qJk5g%2F24FMXxODIGpzEuTn5Qj%2ByiTBAgO%2Be3R6tgTbz%2F94vHpPBzkdshN%2FpYXGF5UOcaBoOy%2FPT1rHvKTGBEskf2Uk3pswwzmAqVIFemBycdG93w1WnyY2h561JVryO1Wz2FKEIpJ16ARqX&X-Amz-Signature=e04ee24550331f23bb0b9db225033d327e9b0f2fe7cc60a0878f05af71dae865&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ67JVAO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDkQRvJJg1PzqUcxSOqyBg8WuArGq3%2FsKxQ3ycu9MxHHgIhAOlsIfDLcUtBO7Xhe097AlWC2HOYCFzAE7swu%2BLidjOqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznpBc%2BrpwXuCF0ol8q3APJeWH%2FuEyxIaywpRJkDS2Hx5wifFJ1Lt4Nzlr9XH5sXRbnJ%2BR2jqusLOEOs1NECAaxBAGOlnTig%2BtdhfWQGEV3Mg3jh%2BXt8KMk54XHTxRBEqVeXzzQw4I3rfJ89mvqC6cvkaH4%2BScDzxHUNKP7TW3ziciToIidif1nicOsaN6vX5lQzwhHuBpd%2F66su%2BN5%2B7JZDoWpu2S4iSkGdF5CMBgu27QkdTRhNvrwm6olr%2Bhl0Cmpl2QbdboUe9daSQuPqYRKTbmwI9PM%2Fz1%2BFMQLiz8YpGw3exGDX%2F9%2By3dfSWiZ2Sh%2FK%2BQjg3PvV6WFUI7%2Bf5mnzkXS4fedKtl%2BYygiVX3mkAA94ujvi6Gh9K1jyPiDz46SsKm10%2Bo%2FhMm9yYSHDWiGyjwTr%2BfaFweF68Q02dz7sdoYC3oaDWR1XVOA6Svj3mH%2FUXsL2sJd6MGAVeil2NS9rvRm2bHdTW5fP%2F9JoKRHTgpvUwosFcSu6C%2BNQGCkDmKe3KetIT%2BNhyQ2Oj243sNJqclkv7r5FAOkcgpFopNhrBrYup%2FIRrD2OKQ%2FZJgVHEKaSxtGI6ceNVLY%2FIqqDzrP60DZF80oYb%2Fw06BV0oxCvffjMB%2FJ5epJy59AOBJKETdk9yrigDX8TUL7FzCcqrq%2BBjqkAaxHDXxg%2F1yod78gCn6kLYkpvrMFTQbePCWlJrhEwgx64IFv%2BKcjYTZrh38IWgH4fdools4c3%2B171qJk5g%2F24FMXxODIGpzEuTn5Qj%2ByiTBAgO%2Be3R6tgTbz%2F94vHpPBzkdshN%2FpYXGF5UOcaBoOy%2FPT1rHvKTGBEskf2Uk3pswwzmAqVIFemBycdG93w1WnyY2h561JVryO1Wz2FKEIpJ16ARqX&X-Amz-Signature=c3f995e1c67297f25cecbd7f7d87b7ab602ea99af6f2dcaaabe7d0b536d9e1cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ67JVAO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDkQRvJJg1PzqUcxSOqyBg8WuArGq3%2FsKxQ3ycu9MxHHgIhAOlsIfDLcUtBO7Xhe097AlWC2HOYCFzAE7swu%2BLidjOqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznpBc%2BrpwXuCF0ol8q3APJeWH%2FuEyxIaywpRJkDS2Hx5wifFJ1Lt4Nzlr9XH5sXRbnJ%2BR2jqusLOEOs1NECAaxBAGOlnTig%2BtdhfWQGEV3Mg3jh%2BXt8KMk54XHTxRBEqVeXzzQw4I3rfJ89mvqC6cvkaH4%2BScDzxHUNKP7TW3ziciToIidif1nicOsaN6vX5lQzwhHuBpd%2F66su%2BN5%2B7JZDoWpu2S4iSkGdF5CMBgu27QkdTRhNvrwm6olr%2Bhl0Cmpl2QbdboUe9daSQuPqYRKTbmwI9PM%2Fz1%2BFMQLiz8YpGw3exGDX%2F9%2By3dfSWiZ2Sh%2FK%2BQjg3PvV6WFUI7%2Bf5mnzkXS4fedKtl%2BYygiVX3mkAA94ujvi6Gh9K1jyPiDz46SsKm10%2Bo%2FhMm9yYSHDWiGyjwTr%2BfaFweF68Q02dz7sdoYC3oaDWR1XVOA6Svj3mH%2FUXsL2sJd6MGAVeil2NS9rvRm2bHdTW5fP%2F9JoKRHTgpvUwosFcSu6C%2BNQGCkDmKe3KetIT%2BNhyQ2Oj243sNJqclkv7r5FAOkcgpFopNhrBrYup%2FIRrD2OKQ%2FZJgVHEKaSxtGI6ceNVLY%2FIqqDzrP60DZF80oYb%2Fw06BV0oxCvffjMB%2FJ5epJy59AOBJKETdk9yrigDX8TUL7FzCcqrq%2BBjqkAaxHDXxg%2F1yod78gCn6kLYkpvrMFTQbePCWlJrhEwgx64IFv%2BKcjYTZrh38IWgH4fdools4c3%2B171qJk5g%2F24FMXxODIGpzEuTn5Qj%2ByiTBAgO%2Be3R6tgTbz%2F94vHpPBzkdshN%2FpYXGF5UOcaBoOy%2FPT1rHvKTGBEskf2Uk3pswwzmAqVIFemBycdG93w1WnyY2h561JVryO1Wz2FKEIpJ16ARqX&X-Amz-Signature=5c8638c633c550a4f92f12a4e815a94b78bb213399c5424acb5e61ac50fd3573&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ67JVAO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDkQRvJJg1PzqUcxSOqyBg8WuArGq3%2FsKxQ3ycu9MxHHgIhAOlsIfDLcUtBO7Xhe097AlWC2HOYCFzAE7swu%2BLidjOqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznpBc%2BrpwXuCF0ol8q3APJeWH%2FuEyxIaywpRJkDS2Hx5wifFJ1Lt4Nzlr9XH5sXRbnJ%2BR2jqusLOEOs1NECAaxBAGOlnTig%2BtdhfWQGEV3Mg3jh%2BXt8KMk54XHTxRBEqVeXzzQw4I3rfJ89mvqC6cvkaH4%2BScDzxHUNKP7TW3ziciToIidif1nicOsaN6vX5lQzwhHuBpd%2F66su%2BN5%2B7JZDoWpu2S4iSkGdF5CMBgu27QkdTRhNvrwm6olr%2Bhl0Cmpl2QbdboUe9daSQuPqYRKTbmwI9PM%2Fz1%2BFMQLiz8YpGw3exGDX%2F9%2By3dfSWiZ2Sh%2FK%2BQjg3PvV6WFUI7%2Bf5mnzkXS4fedKtl%2BYygiVX3mkAA94ujvi6Gh9K1jyPiDz46SsKm10%2Bo%2FhMm9yYSHDWiGyjwTr%2BfaFweF68Q02dz7sdoYC3oaDWR1XVOA6Svj3mH%2FUXsL2sJd6MGAVeil2NS9rvRm2bHdTW5fP%2F9JoKRHTgpvUwosFcSu6C%2BNQGCkDmKe3KetIT%2BNhyQ2Oj243sNJqclkv7r5FAOkcgpFopNhrBrYup%2FIRrD2OKQ%2FZJgVHEKaSxtGI6ceNVLY%2FIqqDzrP60DZF80oYb%2Fw06BV0oxCvffjMB%2FJ5epJy59AOBJKETdk9yrigDX8TUL7FzCcqrq%2BBjqkAaxHDXxg%2F1yod78gCn6kLYkpvrMFTQbePCWlJrhEwgx64IFv%2BKcjYTZrh38IWgH4fdools4c3%2B171qJk5g%2F24FMXxODIGpzEuTn5Qj%2ByiTBAgO%2Be3R6tgTbz%2F94vHpPBzkdshN%2FpYXGF5UOcaBoOy%2FPT1rHvKTGBEskf2Uk3pswwzmAqVIFemBycdG93w1WnyY2h561JVryO1Wz2FKEIpJ16ARqX&X-Amz-Signature=7bc7fea83a5ea2c172f4d7ed3296de5ac4048082ee84eb7f8b89d66c0c086790&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ67JVAO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDkQRvJJg1PzqUcxSOqyBg8WuArGq3%2FsKxQ3ycu9MxHHgIhAOlsIfDLcUtBO7Xhe097AlWC2HOYCFzAE7swu%2BLidjOqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznpBc%2BrpwXuCF0ol8q3APJeWH%2FuEyxIaywpRJkDS2Hx5wifFJ1Lt4Nzlr9XH5sXRbnJ%2BR2jqusLOEOs1NECAaxBAGOlnTig%2BtdhfWQGEV3Mg3jh%2BXt8KMk54XHTxRBEqVeXzzQw4I3rfJ89mvqC6cvkaH4%2BScDzxHUNKP7TW3ziciToIidif1nicOsaN6vX5lQzwhHuBpd%2F66su%2BN5%2B7JZDoWpu2S4iSkGdF5CMBgu27QkdTRhNvrwm6olr%2Bhl0Cmpl2QbdboUe9daSQuPqYRKTbmwI9PM%2Fz1%2BFMQLiz8YpGw3exGDX%2F9%2By3dfSWiZ2Sh%2FK%2BQjg3PvV6WFUI7%2Bf5mnzkXS4fedKtl%2BYygiVX3mkAA94ujvi6Gh9K1jyPiDz46SsKm10%2Bo%2FhMm9yYSHDWiGyjwTr%2BfaFweF68Q02dz7sdoYC3oaDWR1XVOA6Svj3mH%2FUXsL2sJd6MGAVeil2NS9rvRm2bHdTW5fP%2F9JoKRHTgpvUwosFcSu6C%2BNQGCkDmKe3KetIT%2BNhyQ2Oj243sNJqclkv7r5FAOkcgpFopNhrBrYup%2FIRrD2OKQ%2FZJgVHEKaSxtGI6ceNVLY%2FIqqDzrP60DZF80oYb%2Fw06BV0oxCvffjMB%2FJ5epJy59AOBJKETdk9yrigDX8TUL7FzCcqrq%2BBjqkAaxHDXxg%2F1yod78gCn6kLYkpvrMFTQbePCWlJrhEwgx64IFv%2BKcjYTZrh38IWgH4fdools4c3%2B171qJk5g%2F24FMXxODIGpzEuTn5Qj%2ByiTBAgO%2Be3R6tgTbz%2F94vHpPBzkdshN%2FpYXGF5UOcaBoOy%2FPT1rHvKTGBEskf2Uk3pswwzmAqVIFemBycdG93w1WnyY2h561JVryO1Wz2FKEIpJ16ARqX&X-Amz-Signature=40a78c8f4773dd834503a6998aca39afd6acf42e53077795ff90db79ce2e0dd7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ67JVAO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDkQRvJJg1PzqUcxSOqyBg8WuArGq3%2FsKxQ3ycu9MxHHgIhAOlsIfDLcUtBO7Xhe097AlWC2HOYCFzAE7swu%2BLidjOqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznpBc%2BrpwXuCF0ol8q3APJeWH%2FuEyxIaywpRJkDS2Hx5wifFJ1Lt4Nzlr9XH5sXRbnJ%2BR2jqusLOEOs1NECAaxBAGOlnTig%2BtdhfWQGEV3Mg3jh%2BXt8KMk54XHTxRBEqVeXzzQw4I3rfJ89mvqC6cvkaH4%2BScDzxHUNKP7TW3ziciToIidif1nicOsaN6vX5lQzwhHuBpd%2F66su%2BN5%2B7JZDoWpu2S4iSkGdF5CMBgu27QkdTRhNvrwm6olr%2Bhl0Cmpl2QbdboUe9daSQuPqYRKTbmwI9PM%2Fz1%2BFMQLiz8YpGw3exGDX%2F9%2By3dfSWiZ2Sh%2FK%2BQjg3PvV6WFUI7%2Bf5mnzkXS4fedKtl%2BYygiVX3mkAA94ujvi6Gh9K1jyPiDz46SsKm10%2Bo%2FhMm9yYSHDWiGyjwTr%2BfaFweF68Q02dz7sdoYC3oaDWR1XVOA6Svj3mH%2FUXsL2sJd6MGAVeil2NS9rvRm2bHdTW5fP%2F9JoKRHTgpvUwosFcSu6C%2BNQGCkDmKe3KetIT%2BNhyQ2Oj243sNJqclkv7r5FAOkcgpFopNhrBrYup%2FIRrD2OKQ%2FZJgVHEKaSxtGI6ceNVLY%2FIqqDzrP60DZF80oYb%2Fw06BV0oxCvffjMB%2FJ5epJy59AOBJKETdk9yrigDX8TUL7FzCcqrq%2BBjqkAaxHDXxg%2F1yod78gCn6kLYkpvrMFTQbePCWlJrhEwgx64IFv%2BKcjYTZrh38IWgH4fdools4c3%2B171qJk5g%2F24FMXxODIGpzEuTn5Qj%2ByiTBAgO%2Be3R6tgTbz%2F94vHpPBzkdshN%2FpYXGF5UOcaBoOy%2FPT1rHvKTGBEskf2Uk3pswwzmAqVIFemBycdG93w1WnyY2h561JVryO1Wz2FKEIpJ16ARqX&X-Amz-Signature=0b38d9dbf78e7512bfd57e96da0e8f5ed759bd48e952790e7467148b4b699694&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ67JVAO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDkQRvJJg1PzqUcxSOqyBg8WuArGq3%2FsKxQ3ycu9MxHHgIhAOlsIfDLcUtBO7Xhe097AlWC2HOYCFzAE7swu%2BLidjOqKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznpBc%2BrpwXuCF0ol8q3APJeWH%2FuEyxIaywpRJkDS2Hx5wifFJ1Lt4Nzlr9XH5sXRbnJ%2BR2jqusLOEOs1NECAaxBAGOlnTig%2BtdhfWQGEV3Mg3jh%2BXt8KMk54XHTxRBEqVeXzzQw4I3rfJ89mvqC6cvkaH4%2BScDzxHUNKP7TW3ziciToIidif1nicOsaN6vX5lQzwhHuBpd%2F66su%2BN5%2B7JZDoWpu2S4iSkGdF5CMBgu27QkdTRhNvrwm6olr%2Bhl0Cmpl2QbdboUe9daSQuPqYRKTbmwI9PM%2Fz1%2BFMQLiz8YpGw3exGDX%2F9%2By3dfSWiZ2Sh%2FK%2BQjg3PvV6WFUI7%2Bf5mnzkXS4fedKtl%2BYygiVX3mkAA94ujvi6Gh9K1jyPiDz46SsKm10%2Bo%2FhMm9yYSHDWiGyjwTr%2BfaFweF68Q02dz7sdoYC3oaDWR1XVOA6Svj3mH%2FUXsL2sJd6MGAVeil2NS9rvRm2bHdTW5fP%2F9JoKRHTgpvUwosFcSu6C%2BNQGCkDmKe3KetIT%2BNhyQ2Oj243sNJqclkv7r5FAOkcgpFopNhrBrYup%2FIRrD2OKQ%2FZJgVHEKaSxtGI6ceNVLY%2FIqqDzrP60DZF80oYb%2Fw06BV0oxCvffjMB%2FJ5epJy59AOBJKETdk9yrigDX8TUL7FzCcqrq%2BBjqkAaxHDXxg%2F1yod78gCn6kLYkpvrMFTQbePCWlJrhEwgx64IFv%2BKcjYTZrh38IWgH4fdools4c3%2B171qJk5g%2F24FMXxODIGpzEuTn5Qj%2ByiTBAgO%2Be3R6tgTbz%2F94vHpPBzkdshN%2FpYXGF5UOcaBoOy%2FPT1rHvKTGBEskf2Uk3pswwzmAqVIFemBycdG93w1WnyY2h561JVryO1Wz2FKEIpJ16ARqX&X-Amz-Signature=bb5581c9b5105f0d751c74e488b186f2a4e71856ce5f5cedf2bd90feb681aa87&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
