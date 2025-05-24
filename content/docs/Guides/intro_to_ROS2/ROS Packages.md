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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNKUYKS%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCmLJH2q53px0XxsnKdkMA85PiwINQbDvTCBHT9llvAXwIhAMP%2B%2FT5FR7%2FXeaHmKw1%2FNHJnBl1nwlLgvwjpK6E%2B81lSKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPHAKnScbw9qT0cb0q3APxQk4Aay7M%2BvTIZ0veCh2igFjl7%2BvvO%2BYdqkM0ySXC0HNx%2FaD53JeRw%2BbrfXeSb9RyhUYSsrLhWh9Xg3xl8zrtQRXHC2SJq5Yl84VuPxcEUrmSFbSpkaOVfRJalL4AkKo9TVxa1db9KggW52s4ZR5UTJTDAnS6z%2F1FhpUkhzhMOXkeFyb2HVanu33IWzcmRpWrBqcfsGumFeM574TGOsRXG%2BJPeBxZFZKLsO5ZFPwRMxlRci2qBJB7pLCgDAX8vLefI7gKw57RR1Kr8Z%2FptH6iGqEjnvixacINzg%2FBge%2BTq4aVP97nidWMzh%2BbLegwPBqgCuwaF%2FqQdDMgE0MwahIkkLX3R5%2F8N%2BDN46jwV%2FR5k%2FCbztuIDyvXR4A9rnmKcwuCRZ8Ylu1HPR3v786ZL45rSdPJ09oy2BE1qhUJr%2FBg7NQG9lIg8pzhGp5xHoceYo4XXEWlkf8IgV34JARsclTQ8ivrDZ2FTTuPD7sLa88lhwxV6ws1sZVphhyMaaKRGOBw3Ys3Jx9%2F0SmBsOIl%2FXDAq0znHVV%2BkSxzYInMsYLOToeG0IlTZrTsdpeHbfAOAelpKJZvaBBmDr5qTMz%2Bm89ockEbYgNQKAx6MRbMV9JMlk4usWpg4ynZZatJbzDfncXBBjqkARnOcHrwHth6dOE%2FMxFdQ2UGpOVhXMDIWw9Tn%2BcFhM1NkKZfgaRMD1ak7FslzO5NUySS1WLMdz4Q1bWm54aWsz9X4qiwFRqUxmRlQw2XyAvZXSB5SruuX8doQw8l%2FXywxIm68jIKSO%2BnURSf%2Faq032GSDZONnVDKY3UebMORpEl8jeGPcine1d7udP6s21gv%2F9UgSixr6t11pTKzis%2B4pg09%2F9Di&X-Amz-Signature=26951b88fb964e06508a8852f19373b65ee67e8fcd5351329979199be2c3cc90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNKUYKS%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCmLJH2q53px0XxsnKdkMA85PiwINQbDvTCBHT9llvAXwIhAMP%2B%2FT5FR7%2FXeaHmKw1%2FNHJnBl1nwlLgvwjpK6E%2B81lSKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPHAKnScbw9qT0cb0q3APxQk4Aay7M%2BvTIZ0veCh2igFjl7%2BvvO%2BYdqkM0ySXC0HNx%2FaD53JeRw%2BbrfXeSb9RyhUYSsrLhWh9Xg3xl8zrtQRXHC2SJq5Yl84VuPxcEUrmSFbSpkaOVfRJalL4AkKo9TVxa1db9KggW52s4ZR5UTJTDAnS6z%2F1FhpUkhzhMOXkeFyb2HVanu33IWzcmRpWrBqcfsGumFeM574TGOsRXG%2BJPeBxZFZKLsO5ZFPwRMxlRci2qBJB7pLCgDAX8vLefI7gKw57RR1Kr8Z%2FptH6iGqEjnvixacINzg%2FBge%2BTq4aVP97nidWMzh%2BbLegwPBqgCuwaF%2FqQdDMgE0MwahIkkLX3R5%2F8N%2BDN46jwV%2FR5k%2FCbztuIDyvXR4A9rnmKcwuCRZ8Ylu1HPR3v786ZL45rSdPJ09oy2BE1qhUJr%2FBg7NQG9lIg8pzhGp5xHoceYo4XXEWlkf8IgV34JARsclTQ8ivrDZ2FTTuPD7sLa88lhwxV6ws1sZVphhyMaaKRGOBw3Ys3Jx9%2F0SmBsOIl%2FXDAq0znHVV%2BkSxzYInMsYLOToeG0IlTZrTsdpeHbfAOAelpKJZvaBBmDr5qTMz%2Bm89ockEbYgNQKAx6MRbMV9JMlk4usWpg4ynZZatJbzDfncXBBjqkARnOcHrwHth6dOE%2FMxFdQ2UGpOVhXMDIWw9Tn%2BcFhM1NkKZfgaRMD1ak7FslzO5NUySS1WLMdz4Q1bWm54aWsz9X4qiwFRqUxmRlQw2XyAvZXSB5SruuX8doQw8l%2FXywxIm68jIKSO%2BnURSf%2Faq032GSDZONnVDKY3UebMORpEl8jeGPcine1d7udP6s21gv%2F9UgSixr6t11pTKzis%2B4pg09%2F9Di&X-Amz-Signature=cd9876156d157c537d6a491fe97019773329bb7b30844b85f69571f2241ee095&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNKUYKS%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCmLJH2q53px0XxsnKdkMA85PiwINQbDvTCBHT9llvAXwIhAMP%2B%2FT5FR7%2FXeaHmKw1%2FNHJnBl1nwlLgvwjpK6E%2B81lSKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPHAKnScbw9qT0cb0q3APxQk4Aay7M%2BvTIZ0veCh2igFjl7%2BvvO%2BYdqkM0ySXC0HNx%2FaD53JeRw%2BbrfXeSb9RyhUYSsrLhWh9Xg3xl8zrtQRXHC2SJq5Yl84VuPxcEUrmSFbSpkaOVfRJalL4AkKo9TVxa1db9KggW52s4ZR5UTJTDAnS6z%2F1FhpUkhzhMOXkeFyb2HVanu33IWzcmRpWrBqcfsGumFeM574TGOsRXG%2BJPeBxZFZKLsO5ZFPwRMxlRci2qBJB7pLCgDAX8vLefI7gKw57RR1Kr8Z%2FptH6iGqEjnvixacINzg%2FBge%2BTq4aVP97nidWMzh%2BbLegwPBqgCuwaF%2FqQdDMgE0MwahIkkLX3R5%2F8N%2BDN46jwV%2FR5k%2FCbztuIDyvXR4A9rnmKcwuCRZ8Ylu1HPR3v786ZL45rSdPJ09oy2BE1qhUJr%2FBg7NQG9lIg8pzhGp5xHoceYo4XXEWlkf8IgV34JARsclTQ8ivrDZ2FTTuPD7sLa88lhwxV6ws1sZVphhyMaaKRGOBw3Ys3Jx9%2F0SmBsOIl%2FXDAq0znHVV%2BkSxzYInMsYLOToeG0IlTZrTsdpeHbfAOAelpKJZvaBBmDr5qTMz%2Bm89ockEbYgNQKAx6MRbMV9JMlk4usWpg4ynZZatJbzDfncXBBjqkARnOcHrwHth6dOE%2FMxFdQ2UGpOVhXMDIWw9Tn%2BcFhM1NkKZfgaRMD1ak7FslzO5NUySS1WLMdz4Q1bWm54aWsz9X4qiwFRqUxmRlQw2XyAvZXSB5SruuX8doQw8l%2FXywxIm68jIKSO%2BnURSf%2Faq032GSDZONnVDKY3UebMORpEl8jeGPcine1d7udP6s21gv%2F9UgSixr6t11pTKzis%2B4pg09%2F9Di&X-Amz-Signature=56a3d9db8d8f80935907f58af3e068b6d15bf4afedf0080dbcd8727483307d5a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNKUYKS%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCmLJH2q53px0XxsnKdkMA85PiwINQbDvTCBHT9llvAXwIhAMP%2B%2FT5FR7%2FXeaHmKw1%2FNHJnBl1nwlLgvwjpK6E%2B81lSKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPHAKnScbw9qT0cb0q3APxQk4Aay7M%2BvTIZ0veCh2igFjl7%2BvvO%2BYdqkM0ySXC0HNx%2FaD53JeRw%2BbrfXeSb9RyhUYSsrLhWh9Xg3xl8zrtQRXHC2SJq5Yl84VuPxcEUrmSFbSpkaOVfRJalL4AkKo9TVxa1db9KggW52s4ZR5UTJTDAnS6z%2F1FhpUkhzhMOXkeFyb2HVanu33IWzcmRpWrBqcfsGumFeM574TGOsRXG%2BJPeBxZFZKLsO5ZFPwRMxlRci2qBJB7pLCgDAX8vLefI7gKw57RR1Kr8Z%2FptH6iGqEjnvixacINzg%2FBge%2BTq4aVP97nidWMzh%2BbLegwPBqgCuwaF%2FqQdDMgE0MwahIkkLX3R5%2F8N%2BDN46jwV%2FR5k%2FCbztuIDyvXR4A9rnmKcwuCRZ8Ylu1HPR3v786ZL45rSdPJ09oy2BE1qhUJr%2FBg7NQG9lIg8pzhGp5xHoceYo4XXEWlkf8IgV34JARsclTQ8ivrDZ2FTTuPD7sLa88lhwxV6ws1sZVphhyMaaKRGOBw3Ys3Jx9%2F0SmBsOIl%2FXDAq0znHVV%2BkSxzYInMsYLOToeG0IlTZrTsdpeHbfAOAelpKJZvaBBmDr5qTMz%2Bm89ockEbYgNQKAx6MRbMV9JMlk4usWpg4ynZZatJbzDfncXBBjqkARnOcHrwHth6dOE%2FMxFdQ2UGpOVhXMDIWw9Tn%2BcFhM1NkKZfgaRMD1ak7FslzO5NUySS1WLMdz4Q1bWm54aWsz9X4qiwFRqUxmRlQw2XyAvZXSB5SruuX8doQw8l%2FXywxIm68jIKSO%2BnURSf%2Faq032GSDZONnVDKY3UebMORpEl8jeGPcine1d7udP6s21gv%2F9UgSixr6t11pTKzis%2B4pg09%2F9Di&X-Amz-Signature=af72cbe2c2690416768f814b2af69033b116caf3d3839ec7d8a03c7122787cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNKUYKS%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCmLJH2q53px0XxsnKdkMA85PiwINQbDvTCBHT9llvAXwIhAMP%2B%2FT5FR7%2FXeaHmKw1%2FNHJnBl1nwlLgvwjpK6E%2B81lSKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPHAKnScbw9qT0cb0q3APxQk4Aay7M%2BvTIZ0veCh2igFjl7%2BvvO%2BYdqkM0ySXC0HNx%2FaD53JeRw%2BbrfXeSb9RyhUYSsrLhWh9Xg3xl8zrtQRXHC2SJq5Yl84VuPxcEUrmSFbSpkaOVfRJalL4AkKo9TVxa1db9KggW52s4ZR5UTJTDAnS6z%2F1FhpUkhzhMOXkeFyb2HVanu33IWzcmRpWrBqcfsGumFeM574TGOsRXG%2BJPeBxZFZKLsO5ZFPwRMxlRci2qBJB7pLCgDAX8vLefI7gKw57RR1Kr8Z%2FptH6iGqEjnvixacINzg%2FBge%2BTq4aVP97nidWMzh%2BbLegwPBqgCuwaF%2FqQdDMgE0MwahIkkLX3R5%2F8N%2BDN46jwV%2FR5k%2FCbztuIDyvXR4A9rnmKcwuCRZ8Ylu1HPR3v786ZL45rSdPJ09oy2BE1qhUJr%2FBg7NQG9lIg8pzhGp5xHoceYo4XXEWlkf8IgV34JARsclTQ8ivrDZ2FTTuPD7sLa88lhwxV6ws1sZVphhyMaaKRGOBw3Ys3Jx9%2F0SmBsOIl%2FXDAq0znHVV%2BkSxzYInMsYLOToeG0IlTZrTsdpeHbfAOAelpKJZvaBBmDr5qTMz%2Bm89ockEbYgNQKAx6MRbMV9JMlk4usWpg4ynZZatJbzDfncXBBjqkARnOcHrwHth6dOE%2FMxFdQ2UGpOVhXMDIWw9Tn%2BcFhM1NkKZfgaRMD1ak7FslzO5NUySS1WLMdz4Q1bWm54aWsz9X4qiwFRqUxmRlQw2XyAvZXSB5SruuX8doQw8l%2FXywxIm68jIKSO%2BnURSf%2Faq032GSDZONnVDKY3UebMORpEl8jeGPcine1d7udP6s21gv%2F9UgSixr6t11pTKzis%2B4pg09%2F9Di&X-Amz-Signature=5bc6f0d331e411aaea11a180dac5132770512fe46793aad2bb1ba26fe6eb90c7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNKUYKS%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCmLJH2q53px0XxsnKdkMA85PiwINQbDvTCBHT9llvAXwIhAMP%2B%2FT5FR7%2FXeaHmKw1%2FNHJnBl1nwlLgvwjpK6E%2B81lSKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPHAKnScbw9qT0cb0q3APxQk4Aay7M%2BvTIZ0veCh2igFjl7%2BvvO%2BYdqkM0ySXC0HNx%2FaD53JeRw%2BbrfXeSb9RyhUYSsrLhWh9Xg3xl8zrtQRXHC2SJq5Yl84VuPxcEUrmSFbSpkaOVfRJalL4AkKo9TVxa1db9KggW52s4ZR5UTJTDAnS6z%2F1FhpUkhzhMOXkeFyb2HVanu33IWzcmRpWrBqcfsGumFeM574TGOsRXG%2BJPeBxZFZKLsO5ZFPwRMxlRci2qBJB7pLCgDAX8vLefI7gKw57RR1Kr8Z%2FptH6iGqEjnvixacINzg%2FBge%2BTq4aVP97nidWMzh%2BbLegwPBqgCuwaF%2FqQdDMgE0MwahIkkLX3R5%2F8N%2BDN46jwV%2FR5k%2FCbztuIDyvXR4A9rnmKcwuCRZ8Ylu1HPR3v786ZL45rSdPJ09oy2BE1qhUJr%2FBg7NQG9lIg8pzhGp5xHoceYo4XXEWlkf8IgV34JARsclTQ8ivrDZ2FTTuPD7sLa88lhwxV6ws1sZVphhyMaaKRGOBw3Ys3Jx9%2F0SmBsOIl%2FXDAq0znHVV%2BkSxzYInMsYLOToeG0IlTZrTsdpeHbfAOAelpKJZvaBBmDr5qTMz%2Bm89ockEbYgNQKAx6MRbMV9JMlk4usWpg4ynZZatJbzDfncXBBjqkARnOcHrwHth6dOE%2FMxFdQ2UGpOVhXMDIWw9Tn%2BcFhM1NkKZfgaRMD1ak7FslzO5NUySS1WLMdz4Q1bWm54aWsz9X4qiwFRqUxmRlQw2XyAvZXSB5SruuX8doQw8l%2FXywxIm68jIKSO%2BnURSf%2Faq032GSDZONnVDKY3UebMORpEl8jeGPcine1d7udP6s21gv%2F9UgSixr6t11pTKzis%2B4pg09%2F9Di&X-Amz-Signature=f89a9abd5cd84db3601958df2abfe95302e292843d1124c66af225dcc21ccd3e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLNKUYKS%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCmLJH2q53px0XxsnKdkMA85PiwINQbDvTCBHT9llvAXwIhAMP%2B%2FT5FR7%2FXeaHmKw1%2FNHJnBl1nwlLgvwjpK6E%2B81lSKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPHAKnScbw9qT0cb0q3APxQk4Aay7M%2BvTIZ0veCh2igFjl7%2BvvO%2BYdqkM0ySXC0HNx%2FaD53JeRw%2BbrfXeSb9RyhUYSsrLhWh9Xg3xl8zrtQRXHC2SJq5Yl84VuPxcEUrmSFbSpkaOVfRJalL4AkKo9TVxa1db9KggW52s4ZR5UTJTDAnS6z%2F1FhpUkhzhMOXkeFyb2HVanu33IWzcmRpWrBqcfsGumFeM574TGOsRXG%2BJPeBxZFZKLsO5ZFPwRMxlRci2qBJB7pLCgDAX8vLefI7gKw57RR1Kr8Z%2FptH6iGqEjnvixacINzg%2FBge%2BTq4aVP97nidWMzh%2BbLegwPBqgCuwaF%2FqQdDMgE0MwahIkkLX3R5%2F8N%2BDN46jwV%2FR5k%2FCbztuIDyvXR4A9rnmKcwuCRZ8Ylu1HPR3v786ZL45rSdPJ09oy2BE1qhUJr%2FBg7NQG9lIg8pzhGp5xHoceYo4XXEWlkf8IgV34JARsclTQ8ivrDZ2FTTuPD7sLa88lhwxV6ws1sZVphhyMaaKRGOBw3Ys3Jx9%2F0SmBsOIl%2FXDAq0znHVV%2BkSxzYInMsYLOToeG0IlTZrTsdpeHbfAOAelpKJZvaBBmDr5qTMz%2Bm89ockEbYgNQKAx6MRbMV9JMlk4usWpg4ynZZatJbzDfncXBBjqkARnOcHrwHth6dOE%2FMxFdQ2UGpOVhXMDIWw9Tn%2BcFhM1NkKZfgaRMD1ak7FslzO5NUySS1WLMdz4Q1bWm54aWsz9X4qiwFRqUxmRlQw2XyAvZXSB5SruuX8doQw8l%2FXywxIm68jIKSO%2BnURSf%2Faq032GSDZONnVDKY3UebMORpEl8jeGPcine1d7udP6s21gv%2F9UgSixr6t11pTKzis%2B4pg09%2F9Di&X-Amz-Signature=b506862eb068804d7864dfa8bbd4f8c9095e1c6c61722d8171af052d2ec3907f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
