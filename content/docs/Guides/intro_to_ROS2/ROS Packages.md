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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ5WLO42%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCefG0B2jGT98CbL%2Br2zT3ZF5zkKEkb0%2BmZGMONzwcQ3QIhAL%2FWeBSwSqivE37%2FSGX8TeaXjg4WzwOvtnDTbICgsDVAKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD%2Bz340oODa3Hbf%2BYq3APIkYc%2BF4iJdp4bdfxzQPxkX9IM%2FwEyURwgf9pWx341sxZ6ZyrSK4ekR6lmorCyWHyXKYyUqaYv4zFS2XTVFtnifFXpc6jqxRqcjwomUYJ1i9QHgB7nh1lMQENHK60oH1ZhgdyOCNfOJRpqGxepMvBtIaXQVHqrceVwmSYapWW6C0rie%2F%2F6HCSMxeEOfx6Xo4bkALRfugbxmJPRtLbMpzzHHEMfOf9Z%2Fr%2FMEP2D3nCAXErgW9L26YPYGyJIimsxMI8kGvB9awzHp90lvLu0CIpOTTAfnj5U8KHNkvRkM5MW2M6CUUMe5HwTXGqUQR64rK0T4O3jGzyB7bHUz6lg%2BfeBY1M3kPcxhoR58tYeYbGArpgmTMlcG6CAyhb2YSq2W6jzYk5wcZGGKLfKAgxyTgeKe%2Btsclv9Mwjp7uJCREW2Xgm7KbEHiZv4iIpUwBBQZn1pR5IMNxuWaUfzxngDVYJmjPtkVy%2F26WH07fsT2vxJlIMppZAQZ36xUb9griLAme6NMl8R3gfVhHNWweTYX1zVAz2EVpsZuTiKIgyhJmRYVB9jaSSx8qMFiQZTbutbEJv2pyieGDgB0DhZO%2BbT3neW79IuRupH7nV6KogHxu9Q3mPwD2RrQVYXZr7CBjDHk%2FfDBjqkAZPqGVC%2FNBbqd5Sb%2FxoidhAYv3Grz6aVHk7msYDj4rerJQPklfsQEJ6%2BIwJwF9H4Ma0vDV%2F091H6ky6%2BK00iI7XtQZC0UN2v7d8RIF8JaiRKB99moPAPX%2BJ46IzsQ0GXco8jICL1PbBo7cLZZpvf5RftCxSw6AC7AzZVZpoEnltVZ1T59TUeTJSsBv0UuwjwftP9hYI8tatAeR9Jusq7iDkfmz2q&X-Amz-Signature=2eba1d7f9fb1b5d73c14d0f3bacf411f69a322aa89e6a5794b6323b34d6360fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ5WLO42%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCefG0B2jGT98CbL%2Br2zT3ZF5zkKEkb0%2BmZGMONzwcQ3QIhAL%2FWeBSwSqivE37%2FSGX8TeaXjg4WzwOvtnDTbICgsDVAKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD%2Bz340oODa3Hbf%2BYq3APIkYc%2BF4iJdp4bdfxzQPxkX9IM%2FwEyURwgf9pWx341sxZ6ZyrSK4ekR6lmorCyWHyXKYyUqaYv4zFS2XTVFtnifFXpc6jqxRqcjwomUYJ1i9QHgB7nh1lMQENHK60oH1ZhgdyOCNfOJRpqGxepMvBtIaXQVHqrceVwmSYapWW6C0rie%2F%2F6HCSMxeEOfx6Xo4bkALRfugbxmJPRtLbMpzzHHEMfOf9Z%2Fr%2FMEP2D3nCAXErgW9L26YPYGyJIimsxMI8kGvB9awzHp90lvLu0CIpOTTAfnj5U8KHNkvRkM5MW2M6CUUMe5HwTXGqUQR64rK0T4O3jGzyB7bHUz6lg%2BfeBY1M3kPcxhoR58tYeYbGArpgmTMlcG6CAyhb2YSq2W6jzYk5wcZGGKLfKAgxyTgeKe%2Btsclv9Mwjp7uJCREW2Xgm7KbEHiZv4iIpUwBBQZn1pR5IMNxuWaUfzxngDVYJmjPtkVy%2F26WH07fsT2vxJlIMppZAQZ36xUb9griLAme6NMl8R3gfVhHNWweTYX1zVAz2EVpsZuTiKIgyhJmRYVB9jaSSx8qMFiQZTbutbEJv2pyieGDgB0DhZO%2BbT3neW79IuRupH7nV6KogHxu9Q3mPwD2RrQVYXZr7CBjDHk%2FfDBjqkAZPqGVC%2FNBbqd5Sb%2FxoidhAYv3Grz6aVHk7msYDj4rerJQPklfsQEJ6%2BIwJwF9H4Ma0vDV%2F091H6ky6%2BK00iI7XtQZC0UN2v7d8RIF8JaiRKB99moPAPX%2BJ46IzsQ0GXco8jICL1PbBo7cLZZpvf5RftCxSw6AC7AzZVZpoEnltVZ1T59TUeTJSsBv0UuwjwftP9hYI8tatAeR9Jusq7iDkfmz2q&X-Amz-Signature=ab30a6056139664a6ba37cfe9136f5f910f4aecc1df325e24e9fe22688976ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ5WLO42%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCefG0B2jGT98CbL%2Br2zT3ZF5zkKEkb0%2BmZGMONzwcQ3QIhAL%2FWeBSwSqivE37%2FSGX8TeaXjg4WzwOvtnDTbICgsDVAKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD%2Bz340oODa3Hbf%2BYq3APIkYc%2BF4iJdp4bdfxzQPxkX9IM%2FwEyURwgf9pWx341sxZ6ZyrSK4ekR6lmorCyWHyXKYyUqaYv4zFS2XTVFtnifFXpc6jqxRqcjwomUYJ1i9QHgB7nh1lMQENHK60oH1ZhgdyOCNfOJRpqGxepMvBtIaXQVHqrceVwmSYapWW6C0rie%2F%2F6HCSMxeEOfx6Xo4bkALRfugbxmJPRtLbMpzzHHEMfOf9Z%2Fr%2FMEP2D3nCAXErgW9L26YPYGyJIimsxMI8kGvB9awzHp90lvLu0CIpOTTAfnj5U8KHNkvRkM5MW2M6CUUMe5HwTXGqUQR64rK0T4O3jGzyB7bHUz6lg%2BfeBY1M3kPcxhoR58tYeYbGArpgmTMlcG6CAyhb2YSq2W6jzYk5wcZGGKLfKAgxyTgeKe%2Btsclv9Mwjp7uJCREW2Xgm7KbEHiZv4iIpUwBBQZn1pR5IMNxuWaUfzxngDVYJmjPtkVy%2F26WH07fsT2vxJlIMppZAQZ36xUb9griLAme6NMl8R3gfVhHNWweTYX1zVAz2EVpsZuTiKIgyhJmRYVB9jaSSx8qMFiQZTbutbEJv2pyieGDgB0DhZO%2BbT3neW79IuRupH7nV6KogHxu9Q3mPwD2RrQVYXZr7CBjDHk%2FfDBjqkAZPqGVC%2FNBbqd5Sb%2FxoidhAYv3Grz6aVHk7msYDj4rerJQPklfsQEJ6%2BIwJwF9H4Ma0vDV%2F091H6ky6%2BK00iI7XtQZC0UN2v7d8RIF8JaiRKB99moPAPX%2BJ46IzsQ0GXco8jICL1PbBo7cLZZpvf5RftCxSw6AC7AzZVZpoEnltVZ1T59TUeTJSsBv0UuwjwftP9hYI8tatAeR9Jusq7iDkfmz2q&X-Amz-Signature=cd1534a25dc335cf01d4ecbb7fcf56ab234f5dc57eee9c8e2aa61f87b3155300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ5WLO42%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCefG0B2jGT98CbL%2Br2zT3ZF5zkKEkb0%2BmZGMONzwcQ3QIhAL%2FWeBSwSqivE37%2FSGX8TeaXjg4WzwOvtnDTbICgsDVAKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD%2Bz340oODa3Hbf%2BYq3APIkYc%2BF4iJdp4bdfxzQPxkX9IM%2FwEyURwgf9pWx341sxZ6ZyrSK4ekR6lmorCyWHyXKYyUqaYv4zFS2XTVFtnifFXpc6jqxRqcjwomUYJ1i9QHgB7nh1lMQENHK60oH1ZhgdyOCNfOJRpqGxepMvBtIaXQVHqrceVwmSYapWW6C0rie%2F%2F6HCSMxeEOfx6Xo4bkALRfugbxmJPRtLbMpzzHHEMfOf9Z%2Fr%2FMEP2D3nCAXErgW9L26YPYGyJIimsxMI8kGvB9awzHp90lvLu0CIpOTTAfnj5U8KHNkvRkM5MW2M6CUUMe5HwTXGqUQR64rK0T4O3jGzyB7bHUz6lg%2BfeBY1M3kPcxhoR58tYeYbGArpgmTMlcG6CAyhb2YSq2W6jzYk5wcZGGKLfKAgxyTgeKe%2Btsclv9Mwjp7uJCREW2Xgm7KbEHiZv4iIpUwBBQZn1pR5IMNxuWaUfzxngDVYJmjPtkVy%2F26WH07fsT2vxJlIMppZAQZ36xUb9griLAme6NMl8R3gfVhHNWweTYX1zVAz2EVpsZuTiKIgyhJmRYVB9jaSSx8qMFiQZTbutbEJv2pyieGDgB0DhZO%2BbT3neW79IuRupH7nV6KogHxu9Q3mPwD2RrQVYXZr7CBjDHk%2FfDBjqkAZPqGVC%2FNBbqd5Sb%2FxoidhAYv3Grz6aVHk7msYDj4rerJQPklfsQEJ6%2BIwJwF9H4Ma0vDV%2F091H6ky6%2BK00iI7XtQZC0UN2v7d8RIF8JaiRKB99moPAPX%2BJ46IzsQ0GXco8jICL1PbBo7cLZZpvf5RftCxSw6AC7AzZVZpoEnltVZ1T59TUeTJSsBv0UuwjwftP9hYI8tatAeR9Jusq7iDkfmz2q&X-Amz-Signature=b2efcf1e2fdc5eba196dd79a8dfa1ac163c3c3f44234ee921583fdf0f444de3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ5WLO42%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCefG0B2jGT98CbL%2Br2zT3ZF5zkKEkb0%2BmZGMONzwcQ3QIhAL%2FWeBSwSqivE37%2FSGX8TeaXjg4WzwOvtnDTbICgsDVAKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD%2Bz340oODa3Hbf%2BYq3APIkYc%2BF4iJdp4bdfxzQPxkX9IM%2FwEyURwgf9pWx341sxZ6ZyrSK4ekR6lmorCyWHyXKYyUqaYv4zFS2XTVFtnifFXpc6jqxRqcjwomUYJ1i9QHgB7nh1lMQENHK60oH1ZhgdyOCNfOJRpqGxepMvBtIaXQVHqrceVwmSYapWW6C0rie%2F%2F6HCSMxeEOfx6Xo4bkALRfugbxmJPRtLbMpzzHHEMfOf9Z%2Fr%2FMEP2D3nCAXErgW9L26YPYGyJIimsxMI8kGvB9awzHp90lvLu0CIpOTTAfnj5U8KHNkvRkM5MW2M6CUUMe5HwTXGqUQR64rK0T4O3jGzyB7bHUz6lg%2BfeBY1M3kPcxhoR58tYeYbGArpgmTMlcG6CAyhb2YSq2W6jzYk5wcZGGKLfKAgxyTgeKe%2Btsclv9Mwjp7uJCREW2Xgm7KbEHiZv4iIpUwBBQZn1pR5IMNxuWaUfzxngDVYJmjPtkVy%2F26WH07fsT2vxJlIMppZAQZ36xUb9griLAme6NMl8R3gfVhHNWweTYX1zVAz2EVpsZuTiKIgyhJmRYVB9jaSSx8qMFiQZTbutbEJv2pyieGDgB0DhZO%2BbT3neW79IuRupH7nV6KogHxu9Q3mPwD2RrQVYXZr7CBjDHk%2FfDBjqkAZPqGVC%2FNBbqd5Sb%2FxoidhAYv3Grz6aVHk7msYDj4rerJQPklfsQEJ6%2BIwJwF9H4Ma0vDV%2F091H6ky6%2BK00iI7XtQZC0UN2v7d8RIF8JaiRKB99moPAPX%2BJ46IzsQ0GXco8jICL1PbBo7cLZZpvf5RftCxSw6AC7AzZVZpoEnltVZ1T59TUeTJSsBv0UuwjwftP9hYI8tatAeR9Jusq7iDkfmz2q&X-Amz-Signature=8c17ca30dcbfca7408e28bf53b820f1e04e5f8568f02d760e9e4e7ff7a80aeb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ5WLO42%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCefG0B2jGT98CbL%2Br2zT3ZF5zkKEkb0%2BmZGMONzwcQ3QIhAL%2FWeBSwSqivE37%2FSGX8TeaXjg4WzwOvtnDTbICgsDVAKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD%2Bz340oODa3Hbf%2BYq3APIkYc%2BF4iJdp4bdfxzQPxkX9IM%2FwEyURwgf9pWx341sxZ6ZyrSK4ekR6lmorCyWHyXKYyUqaYv4zFS2XTVFtnifFXpc6jqxRqcjwomUYJ1i9QHgB7nh1lMQENHK60oH1ZhgdyOCNfOJRpqGxepMvBtIaXQVHqrceVwmSYapWW6C0rie%2F%2F6HCSMxeEOfx6Xo4bkALRfugbxmJPRtLbMpzzHHEMfOf9Z%2Fr%2FMEP2D3nCAXErgW9L26YPYGyJIimsxMI8kGvB9awzHp90lvLu0CIpOTTAfnj5U8KHNkvRkM5MW2M6CUUMe5HwTXGqUQR64rK0T4O3jGzyB7bHUz6lg%2BfeBY1M3kPcxhoR58tYeYbGArpgmTMlcG6CAyhb2YSq2W6jzYk5wcZGGKLfKAgxyTgeKe%2Btsclv9Mwjp7uJCREW2Xgm7KbEHiZv4iIpUwBBQZn1pR5IMNxuWaUfzxngDVYJmjPtkVy%2F26WH07fsT2vxJlIMppZAQZ36xUb9griLAme6NMl8R3gfVhHNWweTYX1zVAz2EVpsZuTiKIgyhJmRYVB9jaSSx8qMFiQZTbutbEJv2pyieGDgB0DhZO%2BbT3neW79IuRupH7nV6KogHxu9Q3mPwD2RrQVYXZr7CBjDHk%2FfDBjqkAZPqGVC%2FNBbqd5Sb%2FxoidhAYv3Grz6aVHk7msYDj4rerJQPklfsQEJ6%2BIwJwF9H4Ma0vDV%2F091H6ky6%2BK00iI7XtQZC0UN2v7d8RIF8JaiRKB99moPAPX%2BJ46IzsQ0GXco8jICL1PbBo7cLZZpvf5RftCxSw6AC7AzZVZpoEnltVZ1T59TUeTJSsBv0UuwjwftP9hYI8tatAeR9Jusq7iDkfmz2q&X-Amz-Signature=7fb06f56e67f93c6b38041751e25c6ede1c8560fcd5ace9ac3b45315a8f2cb67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ5WLO42%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCefG0B2jGT98CbL%2Br2zT3ZF5zkKEkb0%2BmZGMONzwcQ3QIhAL%2FWeBSwSqivE37%2FSGX8TeaXjg4WzwOvtnDTbICgsDVAKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD%2Bz340oODa3Hbf%2BYq3APIkYc%2BF4iJdp4bdfxzQPxkX9IM%2FwEyURwgf9pWx341sxZ6ZyrSK4ekR6lmorCyWHyXKYyUqaYv4zFS2XTVFtnifFXpc6jqxRqcjwomUYJ1i9QHgB7nh1lMQENHK60oH1ZhgdyOCNfOJRpqGxepMvBtIaXQVHqrceVwmSYapWW6C0rie%2F%2F6HCSMxeEOfx6Xo4bkALRfugbxmJPRtLbMpzzHHEMfOf9Z%2Fr%2FMEP2D3nCAXErgW9L26YPYGyJIimsxMI8kGvB9awzHp90lvLu0CIpOTTAfnj5U8KHNkvRkM5MW2M6CUUMe5HwTXGqUQR64rK0T4O3jGzyB7bHUz6lg%2BfeBY1M3kPcxhoR58tYeYbGArpgmTMlcG6CAyhb2YSq2W6jzYk5wcZGGKLfKAgxyTgeKe%2Btsclv9Mwjp7uJCREW2Xgm7KbEHiZv4iIpUwBBQZn1pR5IMNxuWaUfzxngDVYJmjPtkVy%2F26WH07fsT2vxJlIMppZAQZ36xUb9griLAme6NMl8R3gfVhHNWweTYX1zVAz2EVpsZuTiKIgyhJmRYVB9jaSSx8qMFiQZTbutbEJv2pyieGDgB0DhZO%2BbT3neW79IuRupH7nV6KogHxu9Q3mPwD2RrQVYXZr7CBjDHk%2FfDBjqkAZPqGVC%2FNBbqd5Sb%2FxoidhAYv3Grz6aVHk7msYDj4rerJQPklfsQEJ6%2BIwJwF9H4Ma0vDV%2F091H6ky6%2BK00iI7XtQZC0UN2v7d8RIF8JaiRKB99moPAPX%2BJ46IzsQ0GXco8jICL1PbBo7cLZZpvf5RftCxSw6AC7AzZVZpoEnltVZ1T59TUeTJSsBv0UuwjwftP9hYI8tatAeR9Jusq7iDkfmz2q&X-Amz-Signature=c074358a1b042946aa37eea8642bf720894f6ffb330a1370c253783abd4efe0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
