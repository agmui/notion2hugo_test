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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WGBSGI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvAxXcKKhFUgh%2BDOqxCSihJyfdDdnsXo2fL%2FlcsZx%2FPAiB5NxTO0UXWkzCRdrYk1iBeNjyEPP6oOjbAaSNT2Vp6tyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLDCFG%2BWjIV8pFoxCKtwDSyjM4ynKiy7hswBvNxkNrKZ%2F1acyO8accgTl9OgqBdwD8%2F%2FAVOd82kUnMNHcuZoyOuOYf5dntb1iu6zxh3xrDdLAjGwaCiBvyEFrkt%2F%2FcMjdiYGalWb4hmC%2BIhgRe26nJ8o0qLgVouMpuHNBXiXvQA1EGLaIGkf5n%2FxFxbAkdzIZomNEH3fo%2BPWFoSlJsVCjeosEeY4Ou4yMewnzPfxBnNBCtIG6hDLyLbPpJLcpw2eqG9ho5jhqr3VoFv0EkBcuVIyM1SXhLb0jX0Gpo%2Fh4mGGOqyk5TqKD2NPLzxAHk4%2BN1ApjeeBB05AM2pBzNSA%2F7t5j31FPg7hyU0w9UldDtFPzqz6q2AZbp3CqK%2B%2B17OOS%2B1ZUl4fRh5yl55IPELqDtReQIZ6jWw%2FsX4il0hAp5HjDlT7jwbq8cOVJ8h0oEBfJCOsmacUCtU4FtRLenKgUOBa9LYKlP%2BqxL9U3qKs4uxOJfU1%2BqpUgJzqV6E8%2FPmbD31X%2Bzm6o39vW6pqDatvMn9O2G0kwZQ4noNLSFU3IlHqeH9ac8%2B0lAd36G97Z4%2BENBLZ9sMmHxhfxKzARnt810cS7Db2Zr0eHaLJmla6e56D52f6AePYEwIpKYPug53wq6ZX%2BUrnfodnaK48w2a%2FYwgY6pgFzJRMVeXumZDxOHtvx3i8WHuSDfiP3fVpAkQYF%2FlvAAPN1oS5N08UPMO%2BXr4gV2uObkdd%2F5suyLDyWQu4FhuSaB%2FAERwQkBgsPetKo0Z%2FtOjA3%2BariBBsC2OvDJ9d6fyfiMjVwWDpboqSJMN8wWUCXqy45%2FeZVfRZ9EnMmzaIKdIkmj%2FXq%2FRIf49Tb%2FTtmDA5sTf1HiEvcwBFu%2FtNqLVNxtHY%2BiDNF&X-Amz-Signature=560402707f5a468d3f6e0faf1a96da8a99fef1cae739b9ec8713bffa0ec26aac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WGBSGI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvAxXcKKhFUgh%2BDOqxCSihJyfdDdnsXo2fL%2FlcsZx%2FPAiB5NxTO0UXWkzCRdrYk1iBeNjyEPP6oOjbAaSNT2Vp6tyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLDCFG%2BWjIV8pFoxCKtwDSyjM4ynKiy7hswBvNxkNrKZ%2F1acyO8accgTl9OgqBdwD8%2F%2FAVOd82kUnMNHcuZoyOuOYf5dntb1iu6zxh3xrDdLAjGwaCiBvyEFrkt%2F%2FcMjdiYGalWb4hmC%2BIhgRe26nJ8o0qLgVouMpuHNBXiXvQA1EGLaIGkf5n%2FxFxbAkdzIZomNEH3fo%2BPWFoSlJsVCjeosEeY4Ou4yMewnzPfxBnNBCtIG6hDLyLbPpJLcpw2eqG9ho5jhqr3VoFv0EkBcuVIyM1SXhLb0jX0Gpo%2Fh4mGGOqyk5TqKD2NPLzxAHk4%2BN1ApjeeBB05AM2pBzNSA%2F7t5j31FPg7hyU0w9UldDtFPzqz6q2AZbp3CqK%2B%2B17OOS%2B1ZUl4fRh5yl55IPELqDtReQIZ6jWw%2FsX4il0hAp5HjDlT7jwbq8cOVJ8h0oEBfJCOsmacUCtU4FtRLenKgUOBa9LYKlP%2BqxL9U3qKs4uxOJfU1%2BqpUgJzqV6E8%2FPmbD31X%2Bzm6o39vW6pqDatvMn9O2G0kwZQ4noNLSFU3IlHqeH9ac8%2B0lAd36G97Z4%2BENBLZ9sMmHxhfxKzARnt810cS7Db2Zr0eHaLJmla6e56D52f6AePYEwIpKYPug53wq6ZX%2BUrnfodnaK48w2a%2FYwgY6pgFzJRMVeXumZDxOHtvx3i8WHuSDfiP3fVpAkQYF%2FlvAAPN1oS5N08UPMO%2BXr4gV2uObkdd%2F5suyLDyWQu4FhuSaB%2FAERwQkBgsPetKo0Z%2FtOjA3%2BariBBsC2OvDJ9d6fyfiMjVwWDpboqSJMN8wWUCXqy45%2FeZVfRZ9EnMmzaIKdIkmj%2FXq%2FRIf49Tb%2FTtmDA5sTf1HiEvcwBFu%2FtNqLVNxtHY%2BiDNF&X-Amz-Signature=997ad88246dfecebe041d22acf66e252f28140c3e7275534e83ca482a2d74bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WGBSGI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvAxXcKKhFUgh%2BDOqxCSihJyfdDdnsXo2fL%2FlcsZx%2FPAiB5NxTO0UXWkzCRdrYk1iBeNjyEPP6oOjbAaSNT2Vp6tyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLDCFG%2BWjIV8pFoxCKtwDSyjM4ynKiy7hswBvNxkNrKZ%2F1acyO8accgTl9OgqBdwD8%2F%2FAVOd82kUnMNHcuZoyOuOYf5dntb1iu6zxh3xrDdLAjGwaCiBvyEFrkt%2F%2FcMjdiYGalWb4hmC%2BIhgRe26nJ8o0qLgVouMpuHNBXiXvQA1EGLaIGkf5n%2FxFxbAkdzIZomNEH3fo%2BPWFoSlJsVCjeosEeY4Ou4yMewnzPfxBnNBCtIG6hDLyLbPpJLcpw2eqG9ho5jhqr3VoFv0EkBcuVIyM1SXhLb0jX0Gpo%2Fh4mGGOqyk5TqKD2NPLzxAHk4%2BN1ApjeeBB05AM2pBzNSA%2F7t5j31FPg7hyU0w9UldDtFPzqz6q2AZbp3CqK%2B%2B17OOS%2B1ZUl4fRh5yl55IPELqDtReQIZ6jWw%2FsX4il0hAp5HjDlT7jwbq8cOVJ8h0oEBfJCOsmacUCtU4FtRLenKgUOBa9LYKlP%2BqxL9U3qKs4uxOJfU1%2BqpUgJzqV6E8%2FPmbD31X%2Bzm6o39vW6pqDatvMn9O2G0kwZQ4noNLSFU3IlHqeH9ac8%2B0lAd36G97Z4%2BENBLZ9sMmHxhfxKzARnt810cS7Db2Zr0eHaLJmla6e56D52f6AePYEwIpKYPug53wq6ZX%2BUrnfodnaK48w2a%2FYwgY6pgFzJRMVeXumZDxOHtvx3i8WHuSDfiP3fVpAkQYF%2FlvAAPN1oS5N08UPMO%2BXr4gV2uObkdd%2F5suyLDyWQu4FhuSaB%2FAERwQkBgsPetKo0Z%2FtOjA3%2BariBBsC2OvDJ9d6fyfiMjVwWDpboqSJMN8wWUCXqy45%2FeZVfRZ9EnMmzaIKdIkmj%2FXq%2FRIf49Tb%2FTtmDA5sTf1HiEvcwBFu%2FtNqLVNxtHY%2BiDNF&X-Amz-Signature=0b9dbd6a48040d86aba95ef4e4b68e3467e4db28b2b09a5d0eb4bca8d833a653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WGBSGI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvAxXcKKhFUgh%2BDOqxCSihJyfdDdnsXo2fL%2FlcsZx%2FPAiB5NxTO0UXWkzCRdrYk1iBeNjyEPP6oOjbAaSNT2Vp6tyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLDCFG%2BWjIV8pFoxCKtwDSyjM4ynKiy7hswBvNxkNrKZ%2F1acyO8accgTl9OgqBdwD8%2F%2FAVOd82kUnMNHcuZoyOuOYf5dntb1iu6zxh3xrDdLAjGwaCiBvyEFrkt%2F%2FcMjdiYGalWb4hmC%2BIhgRe26nJ8o0qLgVouMpuHNBXiXvQA1EGLaIGkf5n%2FxFxbAkdzIZomNEH3fo%2BPWFoSlJsVCjeosEeY4Ou4yMewnzPfxBnNBCtIG6hDLyLbPpJLcpw2eqG9ho5jhqr3VoFv0EkBcuVIyM1SXhLb0jX0Gpo%2Fh4mGGOqyk5TqKD2NPLzxAHk4%2BN1ApjeeBB05AM2pBzNSA%2F7t5j31FPg7hyU0w9UldDtFPzqz6q2AZbp3CqK%2B%2B17OOS%2B1ZUl4fRh5yl55IPELqDtReQIZ6jWw%2FsX4il0hAp5HjDlT7jwbq8cOVJ8h0oEBfJCOsmacUCtU4FtRLenKgUOBa9LYKlP%2BqxL9U3qKs4uxOJfU1%2BqpUgJzqV6E8%2FPmbD31X%2Bzm6o39vW6pqDatvMn9O2G0kwZQ4noNLSFU3IlHqeH9ac8%2B0lAd36G97Z4%2BENBLZ9sMmHxhfxKzARnt810cS7Db2Zr0eHaLJmla6e56D52f6AePYEwIpKYPug53wq6ZX%2BUrnfodnaK48w2a%2FYwgY6pgFzJRMVeXumZDxOHtvx3i8WHuSDfiP3fVpAkQYF%2FlvAAPN1oS5N08UPMO%2BXr4gV2uObkdd%2F5suyLDyWQu4FhuSaB%2FAERwQkBgsPetKo0Z%2FtOjA3%2BariBBsC2OvDJ9d6fyfiMjVwWDpboqSJMN8wWUCXqy45%2FeZVfRZ9EnMmzaIKdIkmj%2FXq%2FRIf49Tb%2FTtmDA5sTf1HiEvcwBFu%2FtNqLVNxtHY%2BiDNF&X-Amz-Signature=aeb258d4cf6173e2c5ab005cb36389f8e9fc11d0f5d51f7393807fd1c40ccdc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WGBSGI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvAxXcKKhFUgh%2BDOqxCSihJyfdDdnsXo2fL%2FlcsZx%2FPAiB5NxTO0UXWkzCRdrYk1iBeNjyEPP6oOjbAaSNT2Vp6tyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLDCFG%2BWjIV8pFoxCKtwDSyjM4ynKiy7hswBvNxkNrKZ%2F1acyO8accgTl9OgqBdwD8%2F%2FAVOd82kUnMNHcuZoyOuOYf5dntb1iu6zxh3xrDdLAjGwaCiBvyEFrkt%2F%2FcMjdiYGalWb4hmC%2BIhgRe26nJ8o0qLgVouMpuHNBXiXvQA1EGLaIGkf5n%2FxFxbAkdzIZomNEH3fo%2BPWFoSlJsVCjeosEeY4Ou4yMewnzPfxBnNBCtIG6hDLyLbPpJLcpw2eqG9ho5jhqr3VoFv0EkBcuVIyM1SXhLb0jX0Gpo%2Fh4mGGOqyk5TqKD2NPLzxAHk4%2BN1ApjeeBB05AM2pBzNSA%2F7t5j31FPg7hyU0w9UldDtFPzqz6q2AZbp3CqK%2B%2B17OOS%2B1ZUl4fRh5yl55IPELqDtReQIZ6jWw%2FsX4il0hAp5HjDlT7jwbq8cOVJ8h0oEBfJCOsmacUCtU4FtRLenKgUOBa9LYKlP%2BqxL9U3qKs4uxOJfU1%2BqpUgJzqV6E8%2FPmbD31X%2Bzm6o39vW6pqDatvMn9O2G0kwZQ4noNLSFU3IlHqeH9ac8%2B0lAd36G97Z4%2BENBLZ9sMmHxhfxKzARnt810cS7Db2Zr0eHaLJmla6e56D52f6AePYEwIpKYPug53wq6ZX%2BUrnfodnaK48w2a%2FYwgY6pgFzJRMVeXumZDxOHtvx3i8WHuSDfiP3fVpAkQYF%2FlvAAPN1oS5N08UPMO%2BXr4gV2uObkdd%2F5suyLDyWQu4FhuSaB%2FAERwQkBgsPetKo0Z%2FtOjA3%2BariBBsC2OvDJ9d6fyfiMjVwWDpboqSJMN8wWUCXqy45%2FeZVfRZ9EnMmzaIKdIkmj%2FXq%2FRIf49Tb%2FTtmDA5sTf1HiEvcwBFu%2FtNqLVNxtHY%2BiDNF&X-Amz-Signature=9338fe310058b136b7b2eb97f2d790d2b4d23dbccf185310c825ae39a5b7cf09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WGBSGI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvAxXcKKhFUgh%2BDOqxCSihJyfdDdnsXo2fL%2FlcsZx%2FPAiB5NxTO0UXWkzCRdrYk1iBeNjyEPP6oOjbAaSNT2Vp6tyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLDCFG%2BWjIV8pFoxCKtwDSyjM4ynKiy7hswBvNxkNrKZ%2F1acyO8accgTl9OgqBdwD8%2F%2FAVOd82kUnMNHcuZoyOuOYf5dntb1iu6zxh3xrDdLAjGwaCiBvyEFrkt%2F%2FcMjdiYGalWb4hmC%2BIhgRe26nJ8o0qLgVouMpuHNBXiXvQA1EGLaIGkf5n%2FxFxbAkdzIZomNEH3fo%2BPWFoSlJsVCjeosEeY4Ou4yMewnzPfxBnNBCtIG6hDLyLbPpJLcpw2eqG9ho5jhqr3VoFv0EkBcuVIyM1SXhLb0jX0Gpo%2Fh4mGGOqyk5TqKD2NPLzxAHk4%2BN1ApjeeBB05AM2pBzNSA%2F7t5j31FPg7hyU0w9UldDtFPzqz6q2AZbp3CqK%2B%2B17OOS%2B1ZUl4fRh5yl55IPELqDtReQIZ6jWw%2FsX4il0hAp5HjDlT7jwbq8cOVJ8h0oEBfJCOsmacUCtU4FtRLenKgUOBa9LYKlP%2BqxL9U3qKs4uxOJfU1%2BqpUgJzqV6E8%2FPmbD31X%2Bzm6o39vW6pqDatvMn9O2G0kwZQ4noNLSFU3IlHqeH9ac8%2B0lAd36G97Z4%2BENBLZ9sMmHxhfxKzARnt810cS7Db2Zr0eHaLJmla6e56D52f6AePYEwIpKYPug53wq6ZX%2BUrnfodnaK48w2a%2FYwgY6pgFzJRMVeXumZDxOHtvx3i8WHuSDfiP3fVpAkQYF%2FlvAAPN1oS5N08UPMO%2BXr4gV2uObkdd%2F5suyLDyWQu4FhuSaB%2FAERwQkBgsPetKo0Z%2FtOjA3%2BariBBsC2OvDJ9d6fyfiMjVwWDpboqSJMN8wWUCXqy45%2FeZVfRZ9EnMmzaIKdIkmj%2FXq%2FRIf49Tb%2FTtmDA5sTf1HiEvcwBFu%2FtNqLVNxtHY%2BiDNF&X-Amz-Signature=b08d11e46d4260e23deb808161012bff726b5ed0e859e81c431ced37083590ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WGBSGI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvAxXcKKhFUgh%2BDOqxCSihJyfdDdnsXo2fL%2FlcsZx%2FPAiB5NxTO0UXWkzCRdrYk1iBeNjyEPP6oOjbAaSNT2Vp6tyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLDCFG%2BWjIV8pFoxCKtwDSyjM4ynKiy7hswBvNxkNrKZ%2F1acyO8accgTl9OgqBdwD8%2F%2FAVOd82kUnMNHcuZoyOuOYf5dntb1iu6zxh3xrDdLAjGwaCiBvyEFrkt%2F%2FcMjdiYGalWb4hmC%2BIhgRe26nJ8o0qLgVouMpuHNBXiXvQA1EGLaIGkf5n%2FxFxbAkdzIZomNEH3fo%2BPWFoSlJsVCjeosEeY4Ou4yMewnzPfxBnNBCtIG6hDLyLbPpJLcpw2eqG9ho5jhqr3VoFv0EkBcuVIyM1SXhLb0jX0Gpo%2Fh4mGGOqyk5TqKD2NPLzxAHk4%2BN1ApjeeBB05AM2pBzNSA%2F7t5j31FPg7hyU0w9UldDtFPzqz6q2AZbp3CqK%2B%2B17OOS%2B1ZUl4fRh5yl55IPELqDtReQIZ6jWw%2FsX4il0hAp5HjDlT7jwbq8cOVJ8h0oEBfJCOsmacUCtU4FtRLenKgUOBa9LYKlP%2BqxL9U3qKs4uxOJfU1%2BqpUgJzqV6E8%2FPmbD31X%2Bzm6o39vW6pqDatvMn9O2G0kwZQ4noNLSFU3IlHqeH9ac8%2B0lAd36G97Z4%2BENBLZ9sMmHxhfxKzARnt810cS7Db2Zr0eHaLJmla6e56D52f6AePYEwIpKYPug53wq6ZX%2BUrnfodnaK48w2a%2FYwgY6pgFzJRMVeXumZDxOHtvx3i8WHuSDfiP3fVpAkQYF%2FlvAAPN1oS5N08UPMO%2BXr4gV2uObkdd%2F5suyLDyWQu4FhuSaB%2FAERwQkBgsPetKo0Z%2FtOjA3%2BariBBsC2OvDJ9d6fyfiMjVwWDpboqSJMN8wWUCXqy45%2FeZVfRZ9EnMmzaIKdIkmj%2FXq%2FRIf49Tb%2FTtmDA5sTf1HiEvcwBFu%2FtNqLVNxtHY%2BiDNF&X-Amz-Signature=0697bc146e42382b42c54eb164c695f22d31642584a51eaa1c3c5c8444fb8b55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
