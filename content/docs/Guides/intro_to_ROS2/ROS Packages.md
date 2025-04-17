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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPA75GD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy4kJpTT9eR%2F04q8LlejanJCeYcn%2F2QJPnvlBVsTRYPAIgWYp6n0ZYFnHXiaoO%2Ft1pbnp13mBtobXr%2FZaLWF38P%2F8q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOjaSGXYTE72nDcuxyrcA%2BuKTvuG7Demx2vl1AKeb2LP1usgV%2FS5nysQnYYZhUpWkFvF2EdxfWIuSCDqW15Wz6nzzGmXBGiKNRDGvf7dzrFkzqIgqKXNB0RsjZq3md7ns7RWBUTp%2FLMk0hbiEUM0J4C9DXqTxs%2Fa%2FQjqakNKwHWYitlQf0UDDrfL3EpCgXjOBEsnttDY5WVDVcMzS%2FLG3gtchXWQMtPwSkIp73yheOiwyUx38ukZNOpiJ8mAR3jeVgM415esxUUUna5Wog%2FcITXif%2F74ulfb1RbfuZprcd2pIatzph4%2FpJxTKjcuOdClrlWYiQl%2FYhXUrU9bQEqjZoujC2R4GmiNVoToAlTSEUbRuU1dfLu0HbFn5L9qBPIVlkUeKuumtIIKS%2FNH7FJURxsEc0OP%2FYyJ3sb7eamSJ%2B3Qh6hp%2FkDIgf7ES6N%2BNJ54x%2FQJdeAb0M5Jo%2BHrAd1LYwbRcCRB%2BLDQr0cNTiBRAzkE%2BR3UxST1ASAvoPvxSCRpWuE1UHZFvguQxwUI7xxNQ129YuVb4fis%2BtvB6cHVmGNxdRHzEhwA50v02Gx%2FvZWeoEu9Ylryi2ccbDZ%2F76xFs0TKR9aW3EJet7U7%2B4zY435vct01yBF81FhcBOS8CIgz8geFI4Fzuv38XuKzMMz8g8AGOqUB8ygRh53PCZpIBgsS0nR7eVqr6CujGtHUFTeRBB7Ys%2Bjou%2FerEUQzjxW01KhI9sKsRby0qJ2xygUe3aN8VblgE%2FsqF6gLiTl8babnqYOtIViCbEvtNSxPZM66q8ASOtNB7xCt7AIXIYEsg9yGnRVVN%2BlrtDcIEC2HgiQh%2FAi8Pe%2F1k1ZqTOG2HlFTFDCNuYiKLB9Y8Orzjx0ZDg%2BSuCUrnGt%2BpQdc&X-Amz-Signature=e226fe06bf75ede6486b3223791258e097ac39e7953b2c58b5cc163d19118b5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPA75GD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy4kJpTT9eR%2F04q8LlejanJCeYcn%2F2QJPnvlBVsTRYPAIgWYp6n0ZYFnHXiaoO%2Ft1pbnp13mBtobXr%2FZaLWF38P%2F8q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOjaSGXYTE72nDcuxyrcA%2BuKTvuG7Demx2vl1AKeb2LP1usgV%2FS5nysQnYYZhUpWkFvF2EdxfWIuSCDqW15Wz6nzzGmXBGiKNRDGvf7dzrFkzqIgqKXNB0RsjZq3md7ns7RWBUTp%2FLMk0hbiEUM0J4C9DXqTxs%2Fa%2FQjqakNKwHWYitlQf0UDDrfL3EpCgXjOBEsnttDY5WVDVcMzS%2FLG3gtchXWQMtPwSkIp73yheOiwyUx38ukZNOpiJ8mAR3jeVgM415esxUUUna5Wog%2FcITXif%2F74ulfb1RbfuZprcd2pIatzph4%2FpJxTKjcuOdClrlWYiQl%2FYhXUrU9bQEqjZoujC2R4GmiNVoToAlTSEUbRuU1dfLu0HbFn5L9qBPIVlkUeKuumtIIKS%2FNH7FJURxsEc0OP%2FYyJ3sb7eamSJ%2B3Qh6hp%2FkDIgf7ES6N%2BNJ54x%2FQJdeAb0M5Jo%2BHrAd1LYwbRcCRB%2BLDQr0cNTiBRAzkE%2BR3UxST1ASAvoPvxSCRpWuE1UHZFvguQxwUI7xxNQ129YuVb4fis%2BtvB6cHVmGNxdRHzEhwA50v02Gx%2FvZWeoEu9Ylryi2ccbDZ%2F76xFs0TKR9aW3EJet7U7%2B4zY435vct01yBF81FhcBOS8CIgz8geFI4Fzuv38XuKzMMz8g8AGOqUB8ygRh53PCZpIBgsS0nR7eVqr6CujGtHUFTeRBB7Ys%2Bjou%2FerEUQzjxW01KhI9sKsRby0qJ2xygUe3aN8VblgE%2FsqF6gLiTl8babnqYOtIViCbEvtNSxPZM66q8ASOtNB7xCt7AIXIYEsg9yGnRVVN%2BlrtDcIEC2HgiQh%2FAi8Pe%2F1k1ZqTOG2HlFTFDCNuYiKLB9Y8Orzjx0ZDg%2BSuCUrnGt%2BpQdc&X-Amz-Signature=a5c5f53763dc35b5aaffd4b556d1e75a1d8597b35ad620784cbbe882acb0450a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPA75GD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy4kJpTT9eR%2F04q8LlejanJCeYcn%2F2QJPnvlBVsTRYPAIgWYp6n0ZYFnHXiaoO%2Ft1pbnp13mBtobXr%2FZaLWF38P%2F8q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOjaSGXYTE72nDcuxyrcA%2BuKTvuG7Demx2vl1AKeb2LP1usgV%2FS5nysQnYYZhUpWkFvF2EdxfWIuSCDqW15Wz6nzzGmXBGiKNRDGvf7dzrFkzqIgqKXNB0RsjZq3md7ns7RWBUTp%2FLMk0hbiEUM0J4C9DXqTxs%2Fa%2FQjqakNKwHWYitlQf0UDDrfL3EpCgXjOBEsnttDY5WVDVcMzS%2FLG3gtchXWQMtPwSkIp73yheOiwyUx38ukZNOpiJ8mAR3jeVgM415esxUUUna5Wog%2FcITXif%2F74ulfb1RbfuZprcd2pIatzph4%2FpJxTKjcuOdClrlWYiQl%2FYhXUrU9bQEqjZoujC2R4GmiNVoToAlTSEUbRuU1dfLu0HbFn5L9qBPIVlkUeKuumtIIKS%2FNH7FJURxsEc0OP%2FYyJ3sb7eamSJ%2B3Qh6hp%2FkDIgf7ES6N%2BNJ54x%2FQJdeAb0M5Jo%2BHrAd1LYwbRcCRB%2BLDQr0cNTiBRAzkE%2BR3UxST1ASAvoPvxSCRpWuE1UHZFvguQxwUI7xxNQ129YuVb4fis%2BtvB6cHVmGNxdRHzEhwA50v02Gx%2FvZWeoEu9Ylryi2ccbDZ%2F76xFs0TKR9aW3EJet7U7%2B4zY435vct01yBF81FhcBOS8CIgz8geFI4Fzuv38XuKzMMz8g8AGOqUB8ygRh53PCZpIBgsS0nR7eVqr6CujGtHUFTeRBB7Ys%2Bjou%2FerEUQzjxW01KhI9sKsRby0qJ2xygUe3aN8VblgE%2FsqF6gLiTl8babnqYOtIViCbEvtNSxPZM66q8ASOtNB7xCt7AIXIYEsg9yGnRVVN%2BlrtDcIEC2HgiQh%2FAi8Pe%2F1k1ZqTOG2HlFTFDCNuYiKLB9Y8Orzjx0ZDg%2BSuCUrnGt%2BpQdc&X-Amz-Signature=5c07551a2ed18144385485a3a24fa112eb51bd79d7032f1e319cd280cb4d9b15&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPA75GD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy4kJpTT9eR%2F04q8LlejanJCeYcn%2F2QJPnvlBVsTRYPAIgWYp6n0ZYFnHXiaoO%2Ft1pbnp13mBtobXr%2FZaLWF38P%2F8q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOjaSGXYTE72nDcuxyrcA%2BuKTvuG7Demx2vl1AKeb2LP1usgV%2FS5nysQnYYZhUpWkFvF2EdxfWIuSCDqW15Wz6nzzGmXBGiKNRDGvf7dzrFkzqIgqKXNB0RsjZq3md7ns7RWBUTp%2FLMk0hbiEUM0J4C9DXqTxs%2Fa%2FQjqakNKwHWYitlQf0UDDrfL3EpCgXjOBEsnttDY5WVDVcMzS%2FLG3gtchXWQMtPwSkIp73yheOiwyUx38ukZNOpiJ8mAR3jeVgM415esxUUUna5Wog%2FcITXif%2F74ulfb1RbfuZprcd2pIatzph4%2FpJxTKjcuOdClrlWYiQl%2FYhXUrU9bQEqjZoujC2R4GmiNVoToAlTSEUbRuU1dfLu0HbFn5L9qBPIVlkUeKuumtIIKS%2FNH7FJURxsEc0OP%2FYyJ3sb7eamSJ%2B3Qh6hp%2FkDIgf7ES6N%2BNJ54x%2FQJdeAb0M5Jo%2BHrAd1LYwbRcCRB%2BLDQr0cNTiBRAzkE%2BR3UxST1ASAvoPvxSCRpWuE1UHZFvguQxwUI7xxNQ129YuVb4fis%2BtvB6cHVmGNxdRHzEhwA50v02Gx%2FvZWeoEu9Ylryi2ccbDZ%2F76xFs0TKR9aW3EJet7U7%2B4zY435vct01yBF81FhcBOS8CIgz8geFI4Fzuv38XuKzMMz8g8AGOqUB8ygRh53PCZpIBgsS0nR7eVqr6CujGtHUFTeRBB7Ys%2Bjou%2FerEUQzjxW01KhI9sKsRby0qJ2xygUe3aN8VblgE%2FsqF6gLiTl8babnqYOtIViCbEvtNSxPZM66q8ASOtNB7xCt7AIXIYEsg9yGnRVVN%2BlrtDcIEC2HgiQh%2FAi8Pe%2F1k1ZqTOG2HlFTFDCNuYiKLB9Y8Orzjx0ZDg%2BSuCUrnGt%2BpQdc&X-Amz-Signature=5692ab5b58a1ceb02c9aa8ada0c5d5ed3953150a36285dda187929c2bd6e92ed&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPA75GD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy4kJpTT9eR%2F04q8LlejanJCeYcn%2F2QJPnvlBVsTRYPAIgWYp6n0ZYFnHXiaoO%2Ft1pbnp13mBtobXr%2FZaLWF38P%2F8q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOjaSGXYTE72nDcuxyrcA%2BuKTvuG7Demx2vl1AKeb2LP1usgV%2FS5nysQnYYZhUpWkFvF2EdxfWIuSCDqW15Wz6nzzGmXBGiKNRDGvf7dzrFkzqIgqKXNB0RsjZq3md7ns7RWBUTp%2FLMk0hbiEUM0J4C9DXqTxs%2Fa%2FQjqakNKwHWYitlQf0UDDrfL3EpCgXjOBEsnttDY5WVDVcMzS%2FLG3gtchXWQMtPwSkIp73yheOiwyUx38ukZNOpiJ8mAR3jeVgM415esxUUUna5Wog%2FcITXif%2F74ulfb1RbfuZprcd2pIatzph4%2FpJxTKjcuOdClrlWYiQl%2FYhXUrU9bQEqjZoujC2R4GmiNVoToAlTSEUbRuU1dfLu0HbFn5L9qBPIVlkUeKuumtIIKS%2FNH7FJURxsEc0OP%2FYyJ3sb7eamSJ%2B3Qh6hp%2FkDIgf7ES6N%2BNJ54x%2FQJdeAb0M5Jo%2BHrAd1LYwbRcCRB%2BLDQr0cNTiBRAzkE%2BR3UxST1ASAvoPvxSCRpWuE1UHZFvguQxwUI7xxNQ129YuVb4fis%2BtvB6cHVmGNxdRHzEhwA50v02Gx%2FvZWeoEu9Ylryi2ccbDZ%2F76xFs0TKR9aW3EJet7U7%2B4zY435vct01yBF81FhcBOS8CIgz8geFI4Fzuv38XuKzMMz8g8AGOqUB8ygRh53PCZpIBgsS0nR7eVqr6CujGtHUFTeRBB7Ys%2Bjou%2FerEUQzjxW01KhI9sKsRby0qJ2xygUe3aN8VblgE%2FsqF6gLiTl8babnqYOtIViCbEvtNSxPZM66q8ASOtNB7xCt7AIXIYEsg9yGnRVVN%2BlrtDcIEC2HgiQh%2FAi8Pe%2F1k1ZqTOG2HlFTFDCNuYiKLB9Y8Orzjx0ZDg%2BSuCUrnGt%2BpQdc&X-Amz-Signature=0a278a4bacd0ee4fdd9955881ed650ee62a9db19ccc57f6b281ad8e03333dc9a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPA75GD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy4kJpTT9eR%2F04q8LlejanJCeYcn%2F2QJPnvlBVsTRYPAIgWYp6n0ZYFnHXiaoO%2Ft1pbnp13mBtobXr%2FZaLWF38P%2F8q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOjaSGXYTE72nDcuxyrcA%2BuKTvuG7Demx2vl1AKeb2LP1usgV%2FS5nysQnYYZhUpWkFvF2EdxfWIuSCDqW15Wz6nzzGmXBGiKNRDGvf7dzrFkzqIgqKXNB0RsjZq3md7ns7RWBUTp%2FLMk0hbiEUM0J4C9DXqTxs%2Fa%2FQjqakNKwHWYitlQf0UDDrfL3EpCgXjOBEsnttDY5WVDVcMzS%2FLG3gtchXWQMtPwSkIp73yheOiwyUx38ukZNOpiJ8mAR3jeVgM415esxUUUna5Wog%2FcITXif%2F74ulfb1RbfuZprcd2pIatzph4%2FpJxTKjcuOdClrlWYiQl%2FYhXUrU9bQEqjZoujC2R4GmiNVoToAlTSEUbRuU1dfLu0HbFn5L9qBPIVlkUeKuumtIIKS%2FNH7FJURxsEc0OP%2FYyJ3sb7eamSJ%2B3Qh6hp%2FkDIgf7ES6N%2BNJ54x%2FQJdeAb0M5Jo%2BHrAd1LYwbRcCRB%2BLDQr0cNTiBRAzkE%2BR3UxST1ASAvoPvxSCRpWuE1UHZFvguQxwUI7xxNQ129YuVb4fis%2BtvB6cHVmGNxdRHzEhwA50v02Gx%2FvZWeoEu9Ylryi2ccbDZ%2F76xFs0TKR9aW3EJet7U7%2B4zY435vct01yBF81FhcBOS8CIgz8geFI4Fzuv38XuKzMMz8g8AGOqUB8ygRh53PCZpIBgsS0nR7eVqr6CujGtHUFTeRBB7Ys%2Bjou%2FerEUQzjxW01KhI9sKsRby0qJ2xygUe3aN8VblgE%2FsqF6gLiTl8babnqYOtIViCbEvtNSxPZM66q8ASOtNB7xCt7AIXIYEsg9yGnRVVN%2BlrtDcIEC2HgiQh%2FAi8Pe%2F1k1ZqTOG2HlFTFDCNuYiKLB9Y8Orzjx0ZDg%2BSuCUrnGt%2BpQdc&X-Amz-Signature=d34a70eebf73d665adfee78f09574b0ae4d4a2dd87ba7bbb31790dee47db5faa&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PPA75GD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy4kJpTT9eR%2F04q8LlejanJCeYcn%2F2QJPnvlBVsTRYPAIgWYp6n0ZYFnHXiaoO%2Ft1pbnp13mBtobXr%2FZaLWF38P%2F8q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOjaSGXYTE72nDcuxyrcA%2BuKTvuG7Demx2vl1AKeb2LP1usgV%2FS5nysQnYYZhUpWkFvF2EdxfWIuSCDqW15Wz6nzzGmXBGiKNRDGvf7dzrFkzqIgqKXNB0RsjZq3md7ns7RWBUTp%2FLMk0hbiEUM0J4C9DXqTxs%2Fa%2FQjqakNKwHWYitlQf0UDDrfL3EpCgXjOBEsnttDY5WVDVcMzS%2FLG3gtchXWQMtPwSkIp73yheOiwyUx38ukZNOpiJ8mAR3jeVgM415esxUUUna5Wog%2FcITXif%2F74ulfb1RbfuZprcd2pIatzph4%2FpJxTKjcuOdClrlWYiQl%2FYhXUrU9bQEqjZoujC2R4GmiNVoToAlTSEUbRuU1dfLu0HbFn5L9qBPIVlkUeKuumtIIKS%2FNH7FJURxsEc0OP%2FYyJ3sb7eamSJ%2B3Qh6hp%2FkDIgf7ES6N%2BNJ54x%2FQJdeAb0M5Jo%2BHrAd1LYwbRcCRB%2BLDQr0cNTiBRAzkE%2BR3UxST1ASAvoPvxSCRpWuE1UHZFvguQxwUI7xxNQ129YuVb4fis%2BtvB6cHVmGNxdRHzEhwA50v02Gx%2FvZWeoEu9Ylryi2ccbDZ%2F76xFs0TKR9aW3EJet7U7%2B4zY435vct01yBF81FhcBOS8CIgz8geFI4Fzuv38XuKzMMz8g8AGOqUB8ygRh53PCZpIBgsS0nR7eVqr6CujGtHUFTeRBB7Ys%2Bjou%2FerEUQzjxW01KhI9sKsRby0qJ2xygUe3aN8VblgE%2FsqF6gLiTl8babnqYOtIViCbEvtNSxPZM66q8ASOtNB7xCt7AIXIYEsg9yGnRVVN%2BlrtDcIEC2HgiQh%2FAi8Pe%2F1k1ZqTOG2HlFTFDCNuYiKLB9Y8Orzjx0ZDg%2BSuCUrnGt%2BpQdc&X-Amz-Signature=a18ec049b71933f4c572d2bdf0629b7d92ca44ca5f2e17ffafdf4d7474bb32c0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
