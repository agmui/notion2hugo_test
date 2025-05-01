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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDBVWDEG%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIF%2FJmD1%2BLsDCnLE5im9FGd2YYmINLh3U%2BVpP0EfOmowJAiEA43Lzchg%2BVjX4anfYHR04pPB7wuk%2BhsCLIqzBoVKYshwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBIm8qnx7a1DrwVkSrcA5bIKKdeuLdil5Xoqz62h%2Fd3atN9EuTwf%2F4ashKSTg5OmJR34rL0iOYiZyItYmig3iLrESDfTnr%2BVAMKvSI2yeoW%2BNeurvh0YjmSqDL3mANVwcm3iXfVx8dVUGyBr6S3UXzjPnMVXtErBs7XxUNZhWEZreq3vmsypsr9xvL%2FsFU3547pQI1oA%2F%2FNbJT5%2BCygS%2BacDmxw%2F3%2B3WIgeqVGhaXgHjqsC5RU2FjV6vh%2B2FiDY6kTSgekSwheyEfr6EXVapoimlw2Fyp6X1sER2X%2BFd%2FsE6M8tLBNRNIkPGwlEPAtdQMZdduc5S9hBypgmGDIFy64GVjSI6WRdO8quus9SsEjd4Z%2Fc22XfGrSOy%2B0xx9rUvtpe1iZCAZkrBLbyw07xccey7egHRwNqJSdPy5HrnApz9Rgl4rTppaj9nYOyQx6pF8JOhVje%2F3rzyOITXJpjVzEGqWv1Stra5aFKARQRg0WBsa4dMKt5BJfqJlntQsRlvGc2%2FHaJ4F8O57r6TjCMvAAon%2FL%2F3om8%2FHMPAlCUluWmotNH2jrIYHitUhtNFUeybpFlggWWmvYXmY4uU61NttjVo2calLRfLy39ZPskmoboslk%2FEx5WRqOPZgLvpkQRvgtAzZUxDIJPWP%2F4MMq9y8AGOqUB0WG8WLJ81b3D1PjqaHu7ObaGbSqpztbb%2BjtcNUJCKGkVLuz1jcbJKoBQtqqSGA0aIIJKLXBb3kH8h3r4sVFccndGdT8YJQVMJRJF%2Bn9XUhG4fKGRQ4%2BekC1%2FO7N5F5nKjVALlJXPyx2CkNZ1gZaHp1%2B5a46fWN0KulFaH17W%2FpVDI6qAFAGqMMEPSeUQrwd0iddLeOrOhqAfCZif2tifI1OUTNSa&X-Amz-Signature=85718ef987c521b5d67f42511ab2506b2e4d17045552cce6e8dd076aea9bb0a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDBVWDEG%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIF%2FJmD1%2BLsDCnLE5im9FGd2YYmINLh3U%2BVpP0EfOmowJAiEA43Lzchg%2BVjX4anfYHR04pPB7wuk%2BhsCLIqzBoVKYshwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBIm8qnx7a1DrwVkSrcA5bIKKdeuLdil5Xoqz62h%2Fd3atN9EuTwf%2F4ashKSTg5OmJR34rL0iOYiZyItYmig3iLrESDfTnr%2BVAMKvSI2yeoW%2BNeurvh0YjmSqDL3mANVwcm3iXfVx8dVUGyBr6S3UXzjPnMVXtErBs7XxUNZhWEZreq3vmsypsr9xvL%2FsFU3547pQI1oA%2F%2FNbJT5%2BCygS%2BacDmxw%2F3%2B3WIgeqVGhaXgHjqsC5RU2FjV6vh%2B2FiDY6kTSgekSwheyEfr6EXVapoimlw2Fyp6X1sER2X%2BFd%2FsE6M8tLBNRNIkPGwlEPAtdQMZdduc5S9hBypgmGDIFy64GVjSI6WRdO8quus9SsEjd4Z%2Fc22XfGrSOy%2B0xx9rUvtpe1iZCAZkrBLbyw07xccey7egHRwNqJSdPy5HrnApz9Rgl4rTppaj9nYOyQx6pF8JOhVje%2F3rzyOITXJpjVzEGqWv1Stra5aFKARQRg0WBsa4dMKt5BJfqJlntQsRlvGc2%2FHaJ4F8O57r6TjCMvAAon%2FL%2F3om8%2FHMPAlCUluWmotNH2jrIYHitUhtNFUeybpFlggWWmvYXmY4uU61NttjVo2calLRfLy39ZPskmoboslk%2FEx5WRqOPZgLvpkQRvgtAzZUxDIJPWP%2F4MMq9y8AGOqUB0WG8WLJ81b3D1PjqaHu7ObaGbSqpztbb%2BjtcNUJCKGkVLuz1jcbJKoBQtqqSGA0aIIJKLXBb3kH8h3r4sVFccndGdT8YJQVMJRJF%2Bn9XUhG4fKGRQ4%2BekC1%2FO7N5F5nKjVALlJXPyx2CkNZ1gZaHp1%2B5a46fWN0KulFaH17W%2FpVDI6qAFAGqMMEPSeUQrwd0iddLeOrOhqAfCZif2tifI1OUTNSa&X-Amz-Signature=34950f793bec175e3188d9edd3162a5617886256660fb7805f2a39b447f7d069&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDBVWDEG%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIF%2FJmD1%2BLsDCnLE5im9FGd2YYmINLh3U%2BVpP0EfOmowJAiEA43Lzchg%2BVjX4anfYHR04pPB7wuk%2BhsCLIqzBoVKYshwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBIm8qnx7a1DrwVkSrcA5bIKKdeuLdil5Xoqz62h%2Fd3atN9EuTwf%2F4ashKSTg5OmJR34rL0iOYiZyItYmig3iLrESDfTnr%2BVAMKvSI2yeoW%2BNeurvh0YjmSqDL3mANVwcm3iXfVx8dVUGyBr6S3UXzjPnMVXtErBs7XxUNZhWEZreq3vmsypsr9xvL%2FsFU3547pQI1oA%2F%2FNbJT5%2BCygS%2BacDmxw%2F3%2B3WIgeqVGhaXgHjqsC5RU2FjV6vh%2B2FiDY6kTSgekSwheyEfr6EXVapoimlw2Fyp6X1sER2X%2BFd%2FsE6M8tLBNRNIkPGwlEPAtdQMZdduc5S9hBypgmGDIFy64GVjSI6WRdO8quus9SsEjd4Z%2Fc22XfGrSOy%2B0xx9rUvtpe1iZCAZkrBLbyw07xccey7egHRwNqJSdPy5HrnApz9Rgl4rTppaj9nYOyQx6pF8JOhVje%2F3rzyOITXJpjVzEGqWv1Stra5aFKARQRg0WBsa4dMKt5BJfqJlntQsRlvGc2%2FHaJ4F8O57r6TjCMvAAon%2FL%2F3om8%2FHMPAlCUluWmotNH2jrIYHitUhtNFUeybpFlggWWmvYXmY4uU61NttjVo2calLRfLy39ZPskmoboslk%2FEx5WRqOPZgLvpkQRvgtAzZUxDIJPWP%2F4MMq9y8AGOqUB0WG8WLJ81b3D1PjqaHu7ObaGbSqpztbb%2BjtcNUJCKGkVLuz1jcbJKoBQtqqSGA0aIIJKLXBb3kH8h3r4sVFccndGdT8YJQVMJRJF%2Bn9XUhG4fKGRQ4%2BekC1%2FO7N5F5nKjVALlJXPyx2CkNZ1gZaHp1%2B5a46fWN0KulFaH17W%2FpVDI6qAFAGqMMEPSeUQrwd0iddLeOrOhqAfCZif2tifI1OUTNSa&X-Amz-Signature=ea6ac3ca530990d53156a8af2a3f9511bd657ca11e036e75388c8eb34425c6dc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDBVWDEG%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIF%2FJmD1%2BLsDCnLE5im9FGd2YYmINLh3U%2BVpP0EfOmowJAiEA43Lzchg%2BVjX4anfYHR04pPB7wuk%2BhsCLIqzBoVKYshwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBIm8qnx7a1DrwVkSrcA5bIKKdeuLdil5Xoqz62h%2Fd3atN9EuTwf%2F4ashKSTg5OmJR34rL0iOYiZyItYmig3iLrESDfTnr%2BVAMKvSI2yeoW%2BNeurvh0YjmSqDL3mANVwcm3iXfVx8dVUGyBr6S3UXzjPnMVXtErBs7XxUNZhWEZreq3vmsypsr9xvL%2FsFU3547pQI1oA%2F%2FNbJT5%2BCygS%2BacDmxw%2F3%2B3WIgeqVGhaXgHjqsC5RU2FjV6vh%2B2FiDY6kTSgekSwheyEfr6EXVapoimlw2Fyp6X1sER2X%2BFd%2FsE6M8tLBNRNIkPGwlEPAtdQMZdduc5S9hBypgmGDIFy64GVjSI6WRdO8quus9SsEjd4Z%2Fc22XfGrSOy%2B0xx9rUvtpe1iZCAZkrBLbyw07xccey7egHRwNqJSdPy5HrnApz9Rgl4rTppaj9nYOyQx6pF8JOhVje%2F3rzyOITXJpjVzEGqWv1Stra5aFKARQRg0WBsa4dMKt5BJfqJlntQsRlvGc2%2FHaJ4F8O57r6TjCMvAAon%2FL%2F3om8%2FHMPAlCUluWmotNH2jrIYHitUhtNFUeybpFlggWWmvYXmY4uU61NttjVo2calLRfLy39ZPskmoboslk%2FEx5WRqOPZgLvpkQRvgtAzZUxDIJPWP%2F4MMq9y8AGOqUB0WG8WLJ81b3D1PjqaHu7ObaGbSqpztbb%2BjtcNUJCKGkVLuz1jcbJKoBQtqqSGA0aIIJKLXBb3kH8h3r4sVFccndGdT8YJQVMJRJF%2Bn9XUhG4fKGRQ4%2BekC1%2FO7N5F5nKjVALlJXPyx2CkNZ1gZaHp1%2B5a46fWN0KulFaH17W%2FpVDI6qAFAGqMMEPSeUQrwd0iddLeOrOhqAfCZif2tifI1OUTNSa&X-Amz-Signature=2e5ef8df17d99643d43474690231f61c3a6769e8e3f0436330a89613ff0f740a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDBVWDEG%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIF%2FJmD1%2BLsDCnLE5im9FGd2YYmINLh3U%2BVpP0EfOmowJAiEA43Lzchg%2BVjX4anfYHR04pPB7wuk%2BhsCLIqzBoVKYshwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBIm8qnx7a1DrwVkSrcA5bIKKdeuLdil5Xoqz62h%2Fd3atN9EuTwf%2F4ashKSTg5OmJR34rL0iOYiZyItYmig3iLrESDfTnr%2BVAMKvSI2yeoW%2BNeurvh0YjmSqDL3mANVwcm3iXfVx8dVUGyBr6S3UXzjPnMVXtErBs7XxUNZhWEZreq3vmsypsr9xvL%2FsFU3547pQI1oA%2F%2FNbJT5%2BCygS%2BacDmxw%2F3%2B3WIgeqVGhaXgHjqsC5RU2FjV6vh%2B2FiDY6kTSgekSwheyEfr6EXVapoimlw2Fyp6X1sER2X%2BFd%2FsE6M8tLBNRNIkPGwlEPAtdQMZdduc5S9hBypgmGDIFy64GVjSI6WRdO8quus9SsEjd4Z%2Fc22XfGrSOy%2B0xx9rUvtpe1iZCAZkrBLbyw07xccey7egHRwNqJSdPy5HrnApz9Rgl4rTppaj9nYOyQx6pF8JOhVje%2F3rzyOITXJpjVzEGqWv1Stra5aFKARQRg0WBsa4dMKt5BJfqJlntQsRlvGc2%2FHaJ4F8O57r6TjCMvAAon%2FL%2F3om8%2FHMPAlCUluWmotNH2jrIYHitUhtNFUeybpFlggWWmvYXmY4uU61NttjVo2calLRfLy39ZPskmoboslk%2FEx5WRqOPZgLvpkQRvgtAzZUxDIJPWP%2F4MMq9y8AGOqUB0WG8WLJ81b3D1PjqaHu7ObaGbSqpztbb%2BjtcNUJCKGkVLuz1jcbJKoBQtqqSGA0aIIJKLXBb3kH8h3r4sVFccndGdT8YJQVMJRJF%2Bn9XUhG4fKGRQ4%2BekC1%2FO7N5F5nKjVALlJXPyx2CkNZ1gZaHp1%2B5a46fWN0KulFaH17W%2FpVDI6qAFAGqMMEPSeUQrwd0iddLeOrOhqAfCZif2tifI1OUTNSa&X-Amz-Signature=63dc6e2a855877441ca5ccdc22ba3504f91fc925820daa2d55a12038157315a9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDBVWDEG%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIF%2FJmD1%2BLsDCnLE5im9FGd2YYmINLh3U%2BVpP0EfOmowJAiEA43Lzchg%2BVjX4anfYHR04pPB7wuk%2BhsCLIqzBoVKYshwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBIm8qnx7a1DrwVkSrcA5bIKKdeuLdil5Xoqz62h%2Fd3atN9EuTwf%2F4ashKSTg5OmJR34rL0iOYiZyItYmig3iLrESDfTnr%2BVAMKvSI2yeoW%2BNeurvh0YjmSqDL3mANVwcm3iXfVx8dVUGyBr6S3UXzjPnMVXtErBs7XxUNZhWEZreq3vmsypsr9xvL%2FsFU3547pQI1oA%2F%2FNbJT5%2BCygS%2BacDmxw%2F3%2B3WIgeqVGhaXgHjqsC5RU2FjV6vh%2B2FiDY6kTSgekSwheyEfr6EXVapoimlw2Fyp6X1sER2X%2BFd%2FsE6M8tLBNRNIkPGwlEPAtdQMZdduc5S9hBypgmGDIFy64GVjSI6WRdO8quus9SsEjd4Z%2Fc22XfGrSOy%2B0xx9rUvtpe1iZCAZkrBLbyw07xccey7egHRwNqJSdPy5HrnApz9Rgl4rTppaj9nYOyQx6pF8JOhVje%2F3rzyOITXJpjVzEGqWv1Stra5aFKARQRg0WBsa4dMKt5BJfqJlntQsRlvGc2%2FHaJ4F8O57r6TjCMvAAon%2FL%2F3om8%2FHMPAlCUluWmotNH2jrIYHitUhtNFUeybpFlggWWmvYXmY4uU61NttjVo2calLRfLy39ZPskmoboslk%2FEx5WRqOPZgLvpkQRvgtAzZUxDIJPWP%2F4MMq9y8AGOqUB0WG8WLJ81b3D1PjqaHu7ObaGbSqpztbb%2BjtcNUJCKGkVLuz1jcbJKoBQtqqSGA0aIIJKLXBb3kH8h3r4sVFccndGdT8YJQVMJRJF%2Bn9XUhG4fKGRQ4%2BekC1%2FO7N5F5nKjVALlJXPyx2CkNZ1gZaHp1%2B5a46fWN0KulFaH17W%2FpVDI6qAFAGqMMEPSeUQrwd0iddLeOrOhqAfCZif2tifI1OUTNSa&X-Amz-Signature=3a8e27755f920fb4d4a8b4ea28d127160b583f96135ce5eadef09f0401f38878&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDBVWDEG%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIF%2FJmD1%2BLsDCnLE5im9FGd2YYmINLh3U%2BVpP0EfOmowJAiEA43Lzchg%2BVjX4anfYHR04pPB7wuk%2BhsCLIqzBoVKYshwqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBIm8qnx7a1DrwVkSrcA5bIKKdeuLdil5Xoqz62h%2Fd3atN9EuTwf%2F4ashKSTg5OmJR34rL0iOYiZyItYmig3iLrESDfTnr%2BVAMKvSI2yeoW%2BNeurvh0YjmSqDL3mANVwcm3iXfVx8dVUGyBr6S3UXzjPnMVXtErBs7XxUNZhWEZreq3vmsypsr9xvL%2FsFU3547pQI1oA%2F%2FNbJT5%2BCygS%2BacDmxw%2F3%2B3WIgeqVGhaXgHjqsC5RU2FjV6vh%2B2FiDY6kTSgekSwheyEfr6EXVapoimlw2Fyp6X1sER2X%2BFd%2FsE6M8tLBNRNIkPGwlEPAtdQMZdduc5S9hBypgmGDIFy64GVjSI6WRdO8quus9SsEjd4Z%2Fc22XfGrSOy%2B0xx9rUvtpe1iZCAZkrBLbyw07xccey7egHRwNqJSdPy5HrnApz9Rgl4rTppaj9nYOyQx6pF8JOhVje%2F3rzyOITXJpjVzEGqWv1Stra5aFKARQRg0WBsa4dMKt5BJfqJlntQsRlvGc2%2FHaJ4F8O57r6TjCMvAAon%2FL%2F3om8%2FHMPAlCUluWmotNH2jrIYHitUhtNFUeybpFlggWWmvYXmY4uU61NttjVo2calLRfLy39ZPskmoboslk%2FEx5WRqOPZgLvpkQRvgtAzZUxDIJPWP%2F4MMq9y8AGOqUB0WG8WLJ81b3D1PjqaHu7ObaGbSqpztbb%2BjtcNUJCKGkVLuz1jcbJKoBQtqqSGA0aIIJKLXBb3kH8h3r4sVFccndGdT8YJQVMJRJF%2Bn9XUhG4fKGRQ4%2BekC1%2FO7N5F5nKjVALlJXPyx2CkNZ1gZaHp1%2B5a46fWN0KulFaH17W%2FpVDI6qAFAGqMMEPSeUQrwd0iddLeOrOhqAfCZif2tifI1OUTNSa&X-Amz-Signature=8ad0dcf830e3f1cb9e6279e6ec9ea7b9ef014ab471ce48a07d5c2f250fd78bb2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
