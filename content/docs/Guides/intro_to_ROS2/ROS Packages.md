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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT3X42E%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6ROX%2BPQlKR4cZeKtOPecennBz3cmrUZ5lhfnvp1BhIAiA%2B9aKmiuDeIa2y3vqE2NseXpdE8cFRo9ae8HpGVG89DSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmlDSxTK%2BygiUa6GdKtwDL7YeDR7NG%2BOuE0UP83ZfWRmqCjwtsJskosNncnaFHl3qzlC%2F1uulMl%2FF16T4CRT32LiKbr%2F%2FsvbZlT2CT63qXLACOQv3axpS5V%2BHeBbvG2tUK%2BD%2FMu63gXLEPYP8q%2F2fRht%2Fyo51guhsrpKcuIrP7DHq4J%2Fn9rFAC%2BxiDFxuKzX7tk4w%2F%2FDqLJul2N4L%2BZFPfO9Q1KqC8BnUQK2xa0HcDUSF2RB6a%2FxrGxzBaRmQLeVCI%2F5Lq%2BJUM4YO%2B%2B30nSe4ImpJv0JD7JXUPbi7w4%2FeQ8NfKh271N3%2F3dOWreOfTBGKbzflgDqDaZVfXQIaP2MMPKtcSvqz%2FxnG0c6bSEB6LYnjs18YVfCFfNlP%2FYjg0iUDT%2BSubcqxA8CGVV1SaHMQWDQeDdkjtSPcRbSaGh2dsrWt%2F87WhKu8u%2BnAjN7p8aFYrFG7j3lQx6nkfFaHiUVc6jDsq8eXD0o5uRaX1H1gSdq1JkhkS8m2%2F1ujsQs90%2F2yh64IMtZfeym%2FfAnnnDOwjf56eUq8PNtmWRZau86iWSPyhN2yBgYJPISPR1wp%2FF4z5%2FmPxP5hI5tAtbnJxUm6X%2FmPSoPGsVsz%2Bk1R61ZZ%2FZWMtteG6pIo2rqVkpw8vF5HMnEHukLq%2FYUrU5UwgcCgvQY6pgHQ1VNOq9t9M8%2BiLjx5n%2BlaQ2DSkHFvMziqzO86Df9DvRRyY1RQFYMm4%2FAa7NMpluhLrmETfbOp77pFDzwoUrdDRTNubghj0yxm9TjCb7%2FeGQPrwbCnIb83XKINjdtAj%2FJHQqb%2FqAv4YWqXMjckk%2BzFC%2BrjKE3XRrbEA6Hqzp4T3ZWXOf9%2Bn95Zybk2QT4rv5F0bJp3juxf1UexWnMzktQQvvRHr6JT&X-Amz-Signature=135c15fdab93327477225aa8f2b4648cb80c82230fc8a5dc1878221f09c2ea9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT3X42E%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6ROX%2BPQlKR4cZeKtOPecennBz3cmrUZ5lhfnvp1BhIAiA%2B9aKmiuDeIa2y3vqE2NseXpdE8cFRo9ae8HpGVG89DSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmlDSxTK%2BygiUa6GdKtwDL7YeDR7NG%2BOuE0UP83ZfWRmqCjwtsJskosNncnaFHl3qzlC%2F1uulMl%2FF16T4CRT32LiKbr%2F%2FsvbZlT2CT63qXLACOQv3axpS5V%2BHeBbvG2tUK%2BD%2FMu63gXLEPYP8q%2F2fRht%2Fyo51guhsrpKcuIrP7DHq4J%2Fn9rFAC%2BxiDFxuKzX7tk4w%2F%2FDqLJul2N4L%2BZFPfO9Q1KqC8BnUQK2xa0HcDUSF2RB6a%2FxrGxzBaRmQLeVCI%2F5Lq%2BJUM4YO%2B%2B30nSe4ImpJv0JD7JXUPbi7w4%2FeQ8NfKh271N3%2F3dOWreOfTBGKbzflgDqDaZVfXQIaP2MMPKtcSvqz%2FxnG0c6bSEB6LYnjs18YVfCFfNlP%2FYjg0iUDT%2BSubcqxA8CGVV1SaHMQWDQeDdkjtSPcRbSaGh2dsrWt%2F87WhKu8u%2BnAjN7p8aFYrFG7j3lQx6nkfFaHiUVc6jDsq8eXD0o5uRaX1H1gSdq1JkhkS8m2%2F1ujsQs90%2F2yh64IMtZfeym%2FfAnnnDOwjf56eUq8PNtmWRZau86iWSPyhN2yBgYJPISPR1wp%2FF4z5%2FmPxP5hI5tAtbnJxUm6X%2FmPSoPGsVsz%2Bk1R61ZZ%2FZWMtteG6pIo2rqVkpw8vF5HMnEHukLq%2FYUrU5UwgcCgvQY6pgHQ1VNOq9t9M8%2BiLjx5n%2BlaQ2DSkHFvMziqzO86Df9DvRRyY1RQFYMm4%2FAa7NMpluhLrmETfbOp77pFDzwoUrdDRTNubghj0yxm9TjCb7%2FeGQPrwbCnIb83XKINjdtAj%2FJHQqb%2FqAv4YWqXMjckk%2BzFC%2BrjKE3XRrbEA6Hqzp4T3ZWXOf9%2Bn95Zybk2QT4rv5F0bJp3juxf1UexWnMzktQQvvRHr6JT&X-Amz-Signature=f0019cfb0322ab6e7bacada81cfbea841a2ea495e264c8440260164a5a1fe700&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT3X42E%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6ROX%2BPQlKR4cZeKtOPecennBz3cmrUZ5lhfnvp1BhIAiA%2B9aKmiuDeIa2y3vqE2NseXpdE8cFRo9ae8HpGVG89DSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmlDSxTK%2BygiUa6GdKtwDL7YeDR7NG%2BOuE0UP83ZfWRmqCjwtsJskosNncnaFHl3qzlC%2F1uulMl%2FF16T4CRT32LiKbr%2F%2FsvbZlT2CT63qXLACOQv3axpS5V%2BHeBbvG2tUK%2BD%2FMu63gXLEPYP8q%2F2fRht%2Fyo51guhsrpKcuIrP7DHq4J%2Fn9rFAC%2BxiDFxuKzX7tk4w%2F%2FDqLJul2N4L%2BZFPfO9Q1KqC8BnUQK2xa0HcDUSF2RB6a%2FxrGxzBaRmQLeVCI%2F5Lq%2BJUM4YO%2B%2B30nSe4ImpJv0JD7JXUPbi7w4%2FeQ8NfKh271N3%2F3dOWreOfTBGKbzflgDqDaZVfXQIaP2MMPKtcSvqz%2FxnG0c6bSEB6LYnjs18YVfCFfNlP%2FYjg0iUDT%2BSubcqxA8CGVV1SaHMQWDQeDdkjtSPcRbSaGh2dsrWt%2F87WhKu8u%2BnAjN7p8aFYrFG7j3lQx6nkfFaHiUVc6jDsq8eXD0o5uRaX1H1gSdq1JkhkS8m2%2F1ujsQs90%2F2yh64IMtZfeym%2FfAnnnDOwjf56eUq8PNtmWRZau86iWSPyhN2yBgYJPISPR1wp%2FF4z5%2FmPxP5hI5tAtbnJxUm6X%2FmPSoPGsVsz%2Bk1R61ZZ%2FZWMtteG6pIo2rqVkpw8vF5HMnEHukLq%2FYUrU5UwgcCgvQY6pgHQ1VNOq9t9M8%2BiLjx5n%2BlaQ2DSkHFvMziqzO86Df9DvRRyY1RQFYMm4%2FAa7NMpluhLrmETfbOp77pFDzwoUrdDRTNubghj0yxm9TjCb7%2FeGQPrwbCnIb83XKINjdtAj%2FJHQqb%2FqAv4YWqXMjckk%2BzFC%2BrjKE3XRrbEA6Hqzp4T3ZWXOf9%2Bn95Zybk2QT4rv5F0bJp3juxf1UexWnMzktQQvvRHr6JT&X-Amz-Signature=fad26119ea0996bd9eb10cb56995982499705c1852d15783ae2c85d161f1165b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT3X42E%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6ROX%2BPQlKR4cZeKtOPecennBz3cmrUZ5lhfnvp1BhIAiA%2B9aKmiuDeIa2y3vqE2NseXpdE8cFRo9ae8HpGVG89DSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmlDSxTK%2BygiUa6GdKtwDL7YeDR7NG%2BOuE0UP83ZfWRmqCjwtsJskosNncnaFHl3qzlC%2F1uulMl%2FF16T4CRT32LiKbr%2F%2FsvbZlT2CT63qXLACOQv3axpS5V%2BHeBbvG2tUK%2BD%2FMu63gXLEPYP8q%2F2fRht%2Fyo51guhsrpKcuIrP7DHq4J%2Fn9rFAC%2BxiDFxuKzX7tk4w%2F%2FDqLJul2N4L%2BZFPfO9Q1KqC8BnUQK2xa0HcDUSF2RB6a%2FxrGxzBaRmQLeVCI%2F5Lq%2BJUM4YO%2B%2B30nSe4ImpJv0JD7JXUPbi7w4%2FeQ8NfKh271N3%2F3dOWreOfTBGKbzflgDqDaZVfXQIaP2MMPKtcSvqz%2FxnG0c6bSEB6LYnjs18YVfCFfNlP%2FYjg0iUDT%2BSubcqxA8CGVV1SaHMQWDQeDdkjtSPcRbSaGh2dsrWt%2F87WhKu8u%2BnAjN7p8aFYrFG7j3lQx6nkfFaHiUVc6jDsq8eXD0o5uRaX1H1gSdq1JkhkS8m2%2F1ujsQs90%2F2yh64IMtZfeym%2FfAnnnDOwjf56eUq8PNtmWRZau86iWSPyhN2yBgYJPISPR1wp%2FF4z5%2FmPxP5hI5tAtbnJxUm6X%2FmPSoPGsVsz%2Bk1R61ZZ%2FZWMtteG6pIo2rqVkpw8vF5HMnEHukLq%2FYUrU5UwgcCgvQY6pgHQ1VNOq9t9M8%2BiLjx5n%2BlaQ2DSkHFvMziqzO86Df9DvRRyY1RQFYMm4%2FAa7NMpluhLrmETfbOp77pFDzwoUrdDRTNubghj0yxm9TjCb7%2FeGQPrwbCnIb83XKINjdtAj%2FJHQqb%2FqAv4YWqXMjckk%2BzFC%2BrjKE3XRrbEA6Hqzp4T3ZWXOf9%2Bn95Zybk2QT4rv5F0bJp3juxf1UexWnMzktQQvvRHr6JT&X-Amz-Signature=004f8a97215da7e5f6a08c5ebb88f7f8dcc216b79dc1db969b7fc5dbde46a33e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT3X42E%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6ROX%2BPQlKR4cZeKtOPecennBz3cmrUZ5lhfnvp1BhIAiA%2B9aKmiuDeIa2y3vqE2NseXpdE8cFRo9ae8HpGVG89DSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmlDSxTK%2BygiUa6GdKtwDL7YeDR7NG%2BOuE0UP83ZfWRmqCjwtsJskosNncnaFHl3qzlC%2F1uulMl%2FF16T4CRT32LiKbr%2F%2FsvbZlT2CT63qXLACOQv3axpS5V%2BHeBbvG2tUK%2BD%2FMu63gXLEPYP8q%2F2fRht%2Fyo51guhsrpKcuIrP7DHq4J%2Fn9rFAC%2BxiDFxuKzX7tk4w%2F%2FDqLJul2N4L%2BZFPfO9Q1KqC8BnUQK2xa0HcDUSF2RB6a%2FxrGxzBaRmQLeVCI%2F5Lq%2BJUM4YO%2B%2B30nSe4ImpJv0JD7JXUPbi7w4%2FeQ8NfKh271N3%2F3dOWreOfTBGKbzflgDqDaZVfXQIaP2MMPKtcSvqz%2FxnG0c6bSEB6LYnjs18YVfCFfNlP%2FYjg0iUDT%2BSubcqxA8CGVV1SaHMQWDQeDdkjtSPcRbSaGh2dsrWt%2F87WhKu8u%2BnAjN7p8aFYrFG7j3lQx6nkfFaHiUVc6jDsq8eXD0o5uRaX1H1gSdq1JkhkS8m2%2F1ujsQs90%2F2yh64IMtZfeym%2FfAnnnDOwjf56eUq8PNtmWRZau86iWSPyhN2yBgYJPISPR1wp%2FF4z5%2FmPxP5hI5tAtbnJxUm6X%2FmPSoPGsVsz%2Bk1R61ZZ%2FZWMtteG6pIo2rqVkpw8vF5HMnEHukLq%2FYUrU5UwgcCgvQY6pgHQ1VNOq9t9M8%2BiLjx5n%2BlaQ2DSkHFvMziqzO86Df9DvRRyY1RQFYMm4%2FAa7NMpluhLrmETfbOp77pFDzwoUrdDRTNubghj0yxm9TjCb7%2FeGQPrwbCnIb83XKINjdtAj%2FJHQqb%2FqAv4YWqXMjckk%2BzFC%2BrjKE3XRrbEA6Hqzp4T3ZWXOf9%2Bn95Zybk2QT4rv5F0bJp3juxf1UexWnMzktQQvvRHr6JT&X-Amz-Signature=3798151a03262ddd5e9de5b8dc7d113a9894def93f7859255db0f06f34b3f79e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT3X42E%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6ROX%2BPQlKR4cZeKtOPecennBz3cmrUZ5lhfnvp1BhIAiA%2B9aKmiuDeIa2y3vqE2NseXpdE8cFRo9ae8HpGVG89DSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmlDSxTK%2BygiUa6GdKtwDL7YeDR7NG%2BOuE0UP83ZfWRmqCjwtsJskosNncnaFHl3qzlC%2F1uulMl%2FF16T4CRT32LiKbr%2F%2FsvbZlT2CT63qXLACOQv3axpS5V%2BHeBbvG2tUK%2BD%2FMu63gXLEPYP8q%2F2fRht%2Fyo51guhsrpKcuIrP7DHq4J%2Fn9rFAC%2BxiDFxuKzX7tk4w%2F%2FDqLJul2N4L%2BZFPfO9Q1KqC8BnUQK2xa0HcDUSF2RB6a%2FxrGxzBaRmQLeVCI%2F5Lq%2BJUM4YO%2B%2B30nSe4ImpJv0JD7JXUPbi7w4%2FeQ8NfKh271N3%2F3dOWreOfTBGKbzflgDqDaZVfXQIaP2MMPKtcSvqz%2FxnG0c6bSEB6LYnjs18YVfCFfNlP%2FYjg0iUDT%2BSubcqxA8CGVV1SaHMQWDQeDdkjtSPcRbSaGh2dsrWt%2F87WhKu8u%2BnAjN7p8aFYrFG7j3lQx6nkfFaHiUVc6jDsq8eXD0o5uRaX1H1gSdq1JkhkS8m2%2F1ujsQs90%2F2yh64IMtZfeym%2FfAnnnDOwjf56eUq8PNtmWRZau86iWSPyhN2yBgYJPISPR1wp%2FF4z5%2FmPxP5hI5tAtbnJxUm6X%2FmPSoPGsVsz%2Bk1R61ZZ%2FZWMtteG6pIo2rqVkpw8vF5HMnEHukLq%2FYUrU5UwgcCgvQY6pgHQ1VNOq9t9M8%2BiLjx5n%2BlaQ2DSkHFvMziqzO86Df9DvRRyY1RQFYMm4%2FAa7NMpluhLrmETfbOp77pFDzwoUrdDRTNubghj0yxm9TjCb7%2FeGQPrwbCnIb83XKINjdtAj%2FJHQqb%2FqAv4YWqXMjckk%2BzFC%2BrjKE3XRrbEA6Hqzp4T3ZWXOf9%2Bn95Zybk2QT4rv5F0bJp3juxf1UexWnMzktQQvvRHr6JT&X-Amz-Signature=3ced907965b2acc801c211066ef6d58af1619888101b00bd477f4fb804af2169&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBT3X42E%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6ROX%2BPQlKR4cZeKtOPecennBz3cmrUZ5lhfnvp1BhIAiA%2B9aKmiuDeIa2y3vqE2NseXpdE8cFRo9ae8HpGVG89DSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmlDSxTK%2BygiUa6GdKtwDL7YeDR7NG%2BOuE0UP83ZfWRmqCjwtsJskosNncnaFHl3qzlC%2F1uulMl%2FF16T4CRT32LiKbr%2F%2FsvbZlT2CT63qXLACOQv3axpS5V%2BHeBbvG2tUK%2BD%2FMu63gXLEPYP8q%2F2fRht%2Fyo51guhsrpKcuIrP7DHq4J%2Fn9rFAC%2BxiDFxuKzX7tk4w%2F%2FDqLJul2N4L%2BZFPfO9Q1KqC8BnUQK2xa0HcDUSF2RB6a%2FxrGxzBaRmQLeVCI%2F5Lq%2BJUM4YO%2B%2B30nSe4ImpJv0JD7JXUPbi7w4%2FeQ8NfKh271N3%2F3dOWreOfTBGKbzflgDqDaZVfXQIaP2MMPKtcSvqz%2FxnG0c6bSEB6LYnjs18YVfCFfNlP%2FYjg0iUDT%2BSubcqxA8CGVV1SaHMQWDQeDdkjtSPcRbSaGh2dsrWt%2F87WhKu8u%2BnAjN7p8aFYrFG7j3lQx6nkfFaHiUVc6jDsq8eXD0o5uRaX1H1gSdq1JkhkS8m2%2F1ujsQs90%2F2yh64IMtZfeym%2FfAnnnDOwjf56eUq8PNtmWRZau86iWSPyhN2yBgYJPISPR1wp%2FF4z5%2FmPxP5hI5tAtbnJxUm6X%2FmPSoPGsVsz%2Bk1R61ZZ%2FZWMtteG6pIo2rqVkpw8vF5HMnEHukLq%2FYUrU5UwgcCgvQY6pgHQ1VNOq9t9M8%2BiLjx5n%2BlaQ2DSkHFvMziqzO86Df9DvRRyY1RQFYMm4%2FAa7NMpluhLrmETfbOp77pFDzwoUrdDRTNubghj0yxm9TjCb7%2FeGQPrwbCnIb83XKINjdtAj%2FJHQqb%2FqAv4YWqXMjckk%2BzFC%2BrjKE3XRrbEA6Hqzp4T3ZWXOf9%2Bn95Zybk2QT4rv5F0bJp3juxf1UexWnMzktQQvvRHr6JT&X-Amz-Signature=612294a9bc2be9f13e77066024b888e24e6be35607cd00c9b43f50245bbe9ef0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
