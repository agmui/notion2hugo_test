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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJNYRQTA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC4mPTEiUlOgzQKat%2BYiO%2F4Rcyhthp3PP4azM8HxgxPQQIhAO5U%2BzjdOZixCXuIpX58tDp3p82hMkJQvrIYPyt7drpmKv8DCF4QABoMNjM3NDIzMTgzODA1IgyvTbqrrGFJ8RXrSn4q3AP%2FvqB9jO3HEL2WOoq5GmPIQteAAXpaHsMndlGeqy7cgbkU9PE0hN3p%2BB78YSyhe3kw2RS1qB%2B92LyFdhkFRd8NmyOd8eMdw9QxPN9Di5HN1JBWebktc8%2BaZ%2BDhMgNetk%2B5DfOc4Xog1a7BpWCjCisIXlKNhIdXOSTyw53lR594W3RmVZv%2BWDDaTwgc6uFDVq85P16z2f0RVSg%2BbBcXtG6vv6w%2Ba75Vr53aI8zCbf1xUvKRyy474%2FnCjvoTZpYS6LL2MyGBvSM2EEfN1b6yIzP6xAcmxktYdfRnK7NYLjCf5CSPV9NKVCDEaonSvwvtNt9hXG5tdFi85zIQoAuF2kqhUIAmldCQC0oXc79tIQLIaAUfdv02ZDO8x%2FhE8okRKWXtR3wj8gEDIfYpmCuW4zN%2B8FmRatJDvR5DJ7OtF1%2BAEA3CpRczLr9dtxeivJgwusHOEncG%2BT8OsZsxwAXIPWiYB09bTyxCHjdTYbzJHKn6624V58Gz59Zq2xOD9oEQcS%2BezxkLm0B9O94W2%2BEuh1TKYeWDsc1%2FdLbqqH9%2ByN2dc6EWjS7XInBRSouAf3AGDJMJMxKuZK8KFrtMVnr383kvCd6B67TCFJSh7FcM5IGApH7jNdx18CkiEI45eTCHm8DCBjqkAbl%2BaYAJIrjf%2B6FaCycHXTXZ7bGxVVJhT8kcALYaujjs4nvFV0lIzBAVjyacWc6%2Fq0rVErLDYtRfuZeIEJTYm9LSDCAgw%2B9H5v0W0IM1FXCDrRXnbPbC12x5W7DFDhby0urM44WiZ0V6UxlE4rLCqYWjdp%2BgDPLg7zKqY5xU1nFsD6V86%2FxesFE5IYv6oHstQBLwCilKdGZYcGDNib1Dd%2FebDcUC&X-Amz-Signature=eae0f79fd59266f15800d7a0443e16077f59b5fc0648e6e99d305861889df377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJNYRQTA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC4mPTEiUlOgzQKat%2BYiO%2F4Rcyhthp3PP4azM8HxgxPQQIhAO5U%2BzjdOZixCXuIpX58tDp3p82hMkJQvrIYPyt7drpmKv8DCF4QABoMNjM3NDIzMTgzODA1IgyvTbqrrGFJ8RXrSn4q3AP%2FvqB9jO3HEL2WOoq5GmPIQteAAXpaHsMndlGeqy7cgbkU9PE0hN3p%2BB78YSyhe3kw2RS1qB%2B92LyFdhkFRd8NmyOd8eMdw9QxPN9Di5HN1JBWebktc8%2BaZ%2BDhMgNetk%2B5DfOc4Xog1a7BpWCjCisIXlKNhIdXOSTyw53lR594W3RmVZv%2BWDDaTwgc6uFDVq85P16z2f0RVSg%2BbBcXtG6vv6w%2Ba75Vr53aI8zCbf1xUvKRyy474%2FnCjvoTZpYS6LL2MyGBvSM2EEfN1b6yIzP6xAcmxktYdfRnK7NYLjCf5CSPV9NKVCDEaonSvwvtNt9hXG5tdFi85zIQoAuF2kqhUIAmldCQC0oXc79tIQLIaAUfdv02ZDO8x%2FhE8okRKWXtR3wj8gEDIfYpmCuW4zN%2B8FmRatJDvR5DJ7OtF1%2BAEA3CpRczLr9dtxeivJgwusHOEncG%2BT8OsZsxwAXIPWiYB09bTyxCHjdTYbzJHKn6624V58Gz59Zq2xOD9oEQcS%2BezxkLm0B9O94W2%2BEuh1TKYeWDsc1%2FdLbqqH9%2ByN2dc6EWjS7XInBRSouAf3AGDJMJMxKuZK8KFrtMVnr383kvCd6B67TCFJSh7FcM5IGApH7jNdx18CkiEI45eTCHm8DCBjqkAbl%2BaYAJIrjf%2B6FaCycHXTXZ7bGxVVJhT8kcALYaujjs4nvFV0lIzBAVjyacWc6%2Fq0rVErLDYtRfuZeIEJTYm9LSDCAgw%2B9H5v0W0IM1FXCDrRXnbPbC12x5W7DFDhby0urM44WiZ0V6UxlE4rLCqYWjdp%2BgDPLg7zKqY5xU1nFsD6V86%2FxesFE5IYv6oHstQBLwCilKdGZYcGDNib1Dd%2FebDcUC&X-Amz-Signature=ea6d9b2c42a0ae7a9a70bfe25d94c2bd2569c9692fec71c0b4f00b1b7d211775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJNYRQTA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC4mPTEiUlOgzQKat%2BYiO%2F4Rcyhthp3PP4azM8HxgxPQQIhAO5U%2BzjdOZixCXuIpX58tDp3p82hMkJQvrIYPyt7drpmKv8DCF4QABoMNjM3NDIzMTgzODA1IgyvTbqrrGFJ8RXrSn4q3AP%2FvqB9jO3HEL2WOoq5GmPIQteAAXpaHsMndlGeqy7cgbkU9PE0hN3p%2BB78YSyhe3kw2RS1qB%2B92LyFdhkFRd8NmyOd8eMdw9QxPN9Di5HN1JBWebktc8%2BaZ%2BDhMgNetk%2B5DfOc4Xog1a7BpWCjCisIXlKNhIdXOSTyw53lR594W3RmVZv%2BWDDaTwgc6uFDVq85P16z2f0RVSg%2BbBcXtG6vv6w%2Ba75Vr53aI8zCbf1xUvKRyy474%2FnCjvoTZpYS6LL2MyGBvSM2EEfN1b6yIzP6xAcmxktYdfRnK7NYLjCf5CSPV9NKVCDEaonSvwvtNt9hXG5tdFi85zIQoAuF2kqhUIAmldCQC0oXc79tIQLIaAUfdv02ZDO8x%2FhE8okRKWXtR3wj8gEDIfYpmCuW4zN%2B8FmRatJDvR5DJ7OtF1%2BAEA3CpRczLr9dtxeivJgwusHOEncG%2BT8OsZsxwAXIPWiYB09bTyxCHjdTYbzJHKn6624V58Gz59Zq2xOD9oEQcS%2BezxkLm0B9O94W2%2BEuh1TKYeWDsc1%2FdLbqqH9%2ByN2dc6EWjS7XInBRSouAf3AGDJMJMxKuZK8KFrtMVnr383kvCd6B67TCFJSh7FcM5IGApH7jNdx18CkiEI45eTCHm8DCBjqkAbl%2BaYAJIrjf%2B6FaCycHXTXZ7bGxVVJhT8kcALYaujjs4nvFV0lIzBAVjyacWc6%2Fq0rVErLDYtRfuZeIEJTYm9LSDCAgw%2B9H5v0W0IM1FXCDrRXnbPbC12x5W7DFDhby0urM44WiZ0V6UxlE4rLCqYWjdp%2BgDPLg7zKqY5xU1nFsD6V86%2FxesFE5IYv6oHstQBLwCilKdGZYcGDNib1Dd%2FebDcUC&X-Amz-Signature=8f74b65936f3e67efd84f95dae9f14c3acc01fe82ff444602d5fb93aa9aefba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJNYRQTA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC4mPTEiUlOgzQKat%2BYiO%2F4Rcyhthp3PP4azM8HxgxPQQIhAO5U%2BzjdOZixCXuIpX58tDp3p82hMkJQvrIYPyt7drpmKv8DCF4QABoMNjM3NDIzMTgzODA1IgyvTbqrrGFJ8RXrSn4q3AP%2FvqB9jO3HEL2WOoq5GmPIQteAAXpaHsMndlGeqy7cgbkU9PE0hN3p%2BB78YSyhe3kw2RS1qB%2B92LyFdhkFRd8NmyOd8eMdw9QxPN9Di5HN1JBWebktc8%2BaZ%2BDhMgNetk%2B5DfOc4Xog1a7BpWCjCisIXlKNhIdXOSTyw53lR594W3RmVZv%2BWDDaTwgc6uFDVq85P16z2f0RVSg%2BbBcXtG6vv6w%2Ba75Vr53aI8zCbf1xUvKRyy474%2FnCjvoTZpYS6LL2MyGBvSM2EEfN1b6yIzP6xAcmxktYdfRnK7NYLjCf5CSPV9NKVCDEaonSvwvtNt9hXG5tdFi85zIQoAuF2kqhUIAmldCQC0oXc79tIQLIaAUfdv02ZDO8x%2FhE8okRKWXtR3wj8gEDIfYpmCuW4zN%2B8FmRatJDvR5DJ7OtF1%2BAEA3CpRczLr9dtxeivJgwusHOEncG%2BT8OsZsxwAXIPWiYB09bTyxCHjdTYbzJHKn6624V58Gz59Zq2xOD9oEQcS%2BezxkLm0B9O94W2%2BEuh1TKYeWDsc1%2FdLbqqH9%2ByN2dc6EWjS7XInBRSouAf3AGDJMJMxKuZK8KFrtMVnr383kvCd6B67TCFJSh7FcM5IGApH7jNdx18CkiEI45eTCHm8DCBjqkAbl%2BaYAJIrjf%2B6FaCycHXTXZ7bGxVVJhT8kcALYaujjs4nvFV0lIzBAVjyacWc6%2Fq0rVErLDYtRfuZeIEJTYm9LSDCAgw%2B9H5v0W0IM1FXCDrRXnbPbC12x5W7DFDhby0urM44WiZ0V6UxlE4rLCqYWjdp%2BgDPLg7zKqY5xU1nFsD6V86%2FxesFE5IYv6oHstQBLwCilKdGZYcGDNib1Dd%2FebDcUC&X-Amz-Signature=1e1738a82e1edf49f1226100f7b54c576f010f7a3ebab47d501660c5b0cb867b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJNYRQTA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC4mPTEiUlOgzQKat%2BYiO%2F4Rcyhthp3PP4azM8HxgxPQQIhAO5U%2BzjdOZixCXuIpX58tDp3p82hMkJQvrIYPyt7drpmKv8DCF4QABoMNjM3NDIzMTgzODA1IgyvTbqrrGFJ8RXrSn4q3AP%2FvqB9jO3HEL2WOoq5GmPIQteAAXpaHsMndlGeqy7cgbkU9PE0hN3p%2BB78YSyhe3kw2RS1qB%2B92LyFdhkFRd8NmyOd8eMdw9QxPN9Di5HN1JBWebktc8%2BaZ%2BDhMgNetk%2B5DfOc4Xog1a7BpWCjCisIXlKNhIdXOSTyw53lR594W3RmVZv%2BWDDaTwgc6uFDVq85P16z2f0RVSg%2BbBcXtG6vv6w%2Ba75Vr53aI8zCbf1xUvKRyy474%2FnCjvoTZpYS6LL2MyGBvSM2EEfN1b6yIzP6xAcmxktYdfRnK7NYLjCf5CSPV9NKVCDEaonSvwvtNt9hXG5tdFi85zIQoAuF2kqhUIAmldCQC0oXc79tIQLIaAUfdv02ZDO8x%2FhE8okRKWXtR3wj8gEDIfYpmCuW4zN%2B8FmRatJDvR5DJ7OtF1%2BAEA3CpRczLr9dtxeivJgwusHOEncG%2BT8OsZsxwAXIPWiYB09bTyxCHjdTYbzJHKn6624V58Gz59Zq2xOD9oEQcS%2BezxkLm0B9O94W2%2BEuh1TKYeWDsc1%2FdLbqqH9%2ByN2dc6EWjS7XInBRSouAf3AGDJMJMxKuZK8KFrtMVnr383kvCd6B67TCFJSh7FcM5IGApH7jNdx18CkiEI45eTCHm8DCBjqkAbl%2BaYAJIrjf%2B6FaCycHXTXZ7bGxVVJhT8kcALYaujjs4nvFV0lIzBAVjyacWc6%2Fq0rVErLDYtRfuZeIEJTYm9LSDCAgw%2B9H5v0W0IM1FXCDrRXnbPbC12x5W7DFDhby0urM44WiZ0V6UxlE4rLCqYWjdp%2BgDPLg7zKqY5xU1nFsD6V86%2FxesFE5IYv6oHstQBLwCilKdGZYcGDNib1Dd%2FebDcUC&X-Amz-Signature=ce634152b26c88840bd24956df9ca57c4b517393d60ae37f8061ecaa3aff8304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJNYRQTA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC4mPTEiUlOgzQKat%2BYiO%2F4Rcyhthp3PP4azM8HxgxPQQIhAO5U%2BzjdOZixCXuIpX58tDp3p82hMkJQvrIYPyt7drpmKv8DCF4QABoMNjM3NDIzMTgzODA1IgyvTbqrrGFJ8RXrSn4q3AP%2FvqB9jO3HEL2WOoq5GmPIQteAAXpaHsMndlGeqy7cgbkU9PE0hN3p%2BB78YSyhe3kw2RS1qB%2B92LyFdhkFRd8NmyOd8eMdw9QxPN9Di5HN1JBWebktc8%2BaZ%2BDhMgNetk%2B5DfOc4Xog1a7BpWCjCisIXlKNhIdXOSTyw53lR594W3RmVZv%2BWDDaTwgc6uFDVq85P16z2f0RVSg%2BbBcXtG6vv6w%2Ba75Vr53aI8zCbf1xUvKRyy474%2FnCjvoTZpYS6LL2MyGBvSM2EEfN1b6yIzP6xAcmxktYdfRnK7NYLjCf5CSPV9NKVCDEaonSvwvtNt9hXG5tdFi85zIQoAuF2kqhUIAmldCQC0oXc79tIQLIaAUfdv02ZDO8x%2FhE8okRKWXtR3wj8gEDIfYpmCuW4zN%2B8FmRatJDvR5DJ7OtF1%2BAEA3CpRczLr9dtxeivJgwusHOEncG%2BT8OsZsxwAXIPWiYB09bTyxCHjdTYbzJHKn6624V58Gz59Zq2xOD9oEQcS%2BezxkLm0B9O94W2%2BEuh1TKYeWDsc1%2FdLbqqH9%2ByN2dc6EWjS7XInBRSouAf3AGDJMJMxKuZK8KFrtMVnr383kvCd6B67TCFJSh7FcM5IGApH7jNdx18CkiEI45eTCHm8DCBjqkAbl%2BaYAJIrjf%2B6FaCycHXTXZ7bGxVVJhT8kcALYaujjs4nvFV0lIzBAVjyacWc6%2Fq0rVErLDYtRfuZeIEJTYm9LSDCAgw%2B9H5v0W0IM1FXCDrRXnbPbC12x5W7DFDhby0urM44WiZ0V6UxlE4rLCqYWjdp%2BgDPLg7zKqY5xU1nFsD6V86%2FxesFE5IYv6oHstQBLwCilKdGZYcGDNib1Dd%2FebDcUC&X-Amz-Signature=b32cea9df17c1cc88ecba975b863b5d1bc491e092ea42611dffc0a3b3f6e3230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJNYRQTA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC4mPTEiUlOgzQKat%2BYiO%2F4Rcyhthp3PP4azM8HxgxPQQIhAO5U%2BzjdOZixCXuIpX58tDp3p82hMkJQvrIYPyt7drpmKv8DCF4QABoMNjM3NDIzMTgzODA1IgyvTbqrrGFJ8RXrSn4q3AP%2FvqB9jO3HEL2WOoq5GmPIQteAAXpaHsMndlGeqy7cgbkU9PE0hN3p%2BB78YSyhe3kw2RS1qB%2B92LyFdhkFRd8NmyOd8eMdw9QxPN9Di5HN1JBWebktc8%2BaZ%2BDhMgNetk%2B5DfOc4Xog1a7BpWCjCisIXlKNhIdXOSTyw53lR594W3RmVZv%2BWDDaTwgc6uFDVq85P16z2f0RVSg%2BbBcXtG6vv6w%2Ba75Vr53aI8zCbf1xUvKRyy474%2FnCjvoTZpYS6LL2MyGBvSM2EEfN1b6yIzP6xAcmxktYdfRnK7NYLjCf5CSPV9NKVCDEaonSvwvtNt9hXG5tdFi85zIQoAuF2kqhUIAmldCQC0oXc79tIQLIaAUfdv02ZDO8x%2FhE8okRKWXtR3wj8gEDIfYpmCuW4zN%2B8FmRatJDvR5DJ7OtF1%2BAEA3CpRczLr9dtxeivJgwusHOEncG%2BT8OsZsxwAXIPWiYB09bTyxCHjdTYbzJHKn6624V58Gz59Zq2xOD9oEQcS%2BezxkLm0B9O94W2%2BEuh1TKYeWDsc1%2FdLbqqH9%2ByN2dc6EWjS7XInBRSouAf3AGDJMJMxKuZK8KFrtMVnr383kvCd6B67TCFJSh7FcM5IGApH7jNdx18CkiEI45eTCHm8DCBjqkAbl%2BaYAJIrjf%2B6FaCycHXTXZ7bGxVVJhT8kcALYaujjs4nvFV0lIzBAVjyacWc6%2Fq0rVErLDYtRfuZeIEJTYm9LSDCAgw%2B9H5v0W0IM1FXCDrRXnbPbC12x5W7DFDhby0urM44WiZ0V6UxlE4rLCqYWjdp%2BgDPLg7zKqY5xU1nFsD6V86%2FxesFE5IYv6oHstQBLwCilKdGZYcGDNib1Dd%2FebDcUC&X-Amz-Signature=00a84a1add1e806a768154a85019c5ecfd83733771b8477bbf3c7675ad4ee74f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
