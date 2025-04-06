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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XK45QD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwiirN%2Fq4Of4qTz970QVdvBOaMTzkmYak0d2Wv04KCfAiAjXHqJMupCxjvPECYidtbOJUef99bqHO8poBfr6rQrQCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMIu%2BZRcwZ%2Fo61pCCdKtwDHI8QcZh%2FhHHzrld8vKNZRsFFfxWhndQdXwfXhj%2BUogXcda1HIt6hsFy1oPleF14P104WwQTCefUAICJIFPaH64L3n%2BUI%2F17BeiSlXKp8kyZNl7wkawhhvi8MgwsrV021DPHFvYbiAMq1RHSjV%2F8MH4xCvQ8BUXSgq3FatxaLzStTXzVJHeF%2BwxI8wMwsidaUtNqI9b3FWtug%2FSCaIZeAQGxZT0rz491ccMo%2BqXp5IBZa7B7VcS343UNP88ULiynU%2B7O7n3E4Tu6xm5QOWzdxMd2UWa3eL2xWGjFsjQaZjNygo1RXAlBEZenJLy%2F3vs1gatBE3cJcDDX5BYl6taCtnFEZLSYY13Jv6yb5SJar%2FOLpEglpe4AdhdlvsHJnW9R4cYQ%2Ff9Q9iuUSSLjDro0VHVtd5dBPUzXfADy6yL9x7k0Z1fZdgn3jj5LL6LnZHyaPe4OfIOP81lST%2BK5YHvwcmPRQ1gKalPD%2FzIDsr5GERz894j2aPp9SIRN%2BEzdF4lkT2qNn5iGGt4yHKF5lSwi5UQ8PYnXFALOlETwLlR2kXp7V3%2BLcriB%2ByCwX1dbs7XrCoM2qLMaWTL3Gc6Bu%2BAlncXTM0ganhoYKWO3zMjWzMzL7OhWGLIO54qwwPxYwpIDIvwY6pgEtGLFOUkOOwVhPuJiiTU3OtO3WGdePnIKRBp56Xgqv8pQ9A3Rq1MZ0%2B2VzgzsSG8zzCtxE5tcjG7Xi57qMtVZ%2BR1QXubpcFC9R8qaNV2t7l5HU5Afy2qI0zPW1GfspgerInDfu1YpCIvRZxEGyykT%2FriM2NdnkQVPyNj07XROU%2BhaeESa4HWh0qudc9FsDW5zy%2F3IeUalJeRp5o3DALMpWErAVHlo%2B&X-Amz-Signature=a44a1142da9bdc3ea20c7230837cba84b83307448dc64bf9f0ca04bae23de665&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XK45QD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwiirN%2Fq4Of4qTz970QVdvBOaMTzkmYak0d2Wv04KCfAiAjXHqJMupCxjvPECYidtbOJUef99bqHO8poBfr6rQrQCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMIu%2BZRcwZ%2Fo61pCCdKtwDHI8QcZh%2FhHHzrld8vKNZRsFFfxWhndQdXwfXhj%2BUogXcda1HIt6hsFy1oPleF14P104WwQTCefUAICJIFPaH64L3n%2BUI%2F17BeiSlXKp8kyZNl7wkawhhvi8MgwsrV021DPHFvYbiAMq1RHSjV%2F8MH4xCvQ8BUXSgq3FatxaLzStTXzVJHeF%2BwxI8wMwsidaUtNqI9b3FWtug%2FSCaIZeAQGxZT0rz491ccMo%2BqXp5IBZa7B7VcS343UNP88ULiynU%2B7O7n3E4Tu6xm5QOWzdxMd2UWa3eL2xWGjFsjQaZjNygo1RXAlBEZenJLy%2F3vs1gatBE3cJcDDX5BYl6taCtnFEZLSYY13Jv6yb5SJar%2FOLpEglpe4AdhdlvsHJnW9R4cYQ%2Ff9Q9iuUSSLjDro0VHVtd5dBPUzXfADy6yL9x7k0Z1fZdgn3jj5LL6LnZHyaPe4OfIOP81lST%2BK5YHvwcmPRQ1gKalPD%2FzIDsr5GERz894j2aPp9SIRN%2BEzdF4lkT2qNn5iGGt4yHKF5lSwi5UQ8PYnXFALOlETwLlR2kXp7V3%2BLcriB%2ByCwX1dbs7XrCoM2qLMaWTL3Gc6Bu%2BAlncXTM0ganhoYKWO3zMjWzMzL7OhWGLIO54qwwPxYwpIDIvwY6pgEtGLFOUkOOwVhPuJiiTU3OtO3WGdePnIKRBp56Xgqv8pQ9A3Rq1MZ0%2B2VzgzsSG8zzCtxE5tcjG7Xi57qMtVZ%2BR1QXubpcFC9R8qaNV2t7l5HU5Afy2qI0zPW1GfspgerInDfu1YpCIvRZxEGyykT%2FriM2NdnkQVPyNj07XROU%2BhaeESa4HWh0qudc9FsDW5zy%2F3IeUalJeRp5o3DALMpWErAVHlo%2B&X-Amz-Signature=9e787e4cc2f6611ba27963237fce3bd99a61b4ae838d628464327e7db593019c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XK45QD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwiirN%2Fq4Of4qTz970QVdvBOaMTzkmYak0d2Wv04KCfAiAjXHqJMupCxjvPECYidtbOJUef99bqHO8poBfr6rQrQCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMIu%2BZRcwZ%2Fo61pCCdKtwDHI8QcZh%2FhHHzrld8vKNZRsFFfxWhndQdXwfXhj%2BUogXcda1HIt6hsFy1oPleF14P104WwQTCefUAICJIFPaH64L3n%2BUI%2F17BeiSlXKp8kyZNl7wkawhhvi8MgwsrV021DPHFvYbiAMq1RHSjV%2F8MH4xCvQ8BUXSgq3FatxaLzStTXzVJHeF%2BwxI8wMwsidaUtNqI9b3FWtug%2FSCaIZeAQGxZT0rz491ccMo%2BqXp5IBZa7B7VcS343UNP88ULiynU%2B7O7n3E4Tu6xm5QOWzdxMd2UWa3eL2xWGjFsjQaZjNygo1RXAlBEZenJLy%2F3vs1gatBE3cJcDDX5BYl6taCtnFEZLSYY13Jv6yb5SJar%2FOLpEglpe4AdhdlvsHJnW9R4cYQ%2Ff9Q9iuUSSLjDro0VHVtd5dBPUzXfADy6yL9x7k0Z1fZdgn3jj5LL6LnZHyaPe4OfIOP81lST%2BK5YHvwcmPRQ1gKalPD%2FzIDsr5GERz894j2aPp9SIRN%2BEzdF4lkT2qNn5iGGt4yHKF5lSwi5UQ8PYnXFALOlETwLlR2kXp7V3%2BLcriB%2ByCwX1dbs7XrCoM2qLMaWTL3Gc6Bu%2BAlncXTM0ganhoYKWO3zMjWzMzL7OhWGLIO54qwwPxYwpIDIvwY6pgEtGLFOUkOOwVhPuJiiTU3OtO3WGdePnIKRBp56Xgqv8pQ9A3Rq1MZ0%2B2VzgzsSG8zzCtxE5tcjG7Xi57qMtVZ%2BR1QXubpcFC9R8qaNV2t7l5HU5Afy2qI0zPW1GfspgerInDfu1YpCIvRZxEGyykT%2FriM2NdnkQVPyNj07XROU%2BhaeESa4HWh0qudc9FsDW5zy%2F3IeUalJeRp5o3DALMpWErAVHlo%2B&X-Amz-Signature=941771c134d884ba105da899a737c1eb83d88c5405df71465ac77f4a64833dff&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XK45QD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwiirN%2Fq4Of4qTz970QVdvBOaMTzkmYak0d2Wv04KCfAiAjXHqJMupCxjvPECYidtbOJUef99bqHO8poBfr6rQrQCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMIu%2BZRcwZ%2Fo61pCCdKtwDHI8QcZh%2FhHHzrld8vKNZRsFFfxWhndQdXwfXhj%2BUogXcda1HIt6hsFy1oPleF14P104WwQTCefUAICJIFPaH64L3n%2BUI%2F17BeiSlXKp8kyZNl7wkawhhvi8MgwsrV021DPHFvYbiAMq1RHSjV%2F8MH4xCvQ8BUXSgq3FatxaLzStTXzVJHeF%2BwxI8wMwsidaUtNqI9b3FWtug%2FSCaIZeAQGxZT0rz491ccMo%2BqXp5IBZa7B7VcS343UNP88ULiynU%2B7O7n3E4Tu6xm5QOWzdxMd2UWa3eL2xWGjFsjQaZjNygo1RXAlBEZenJLy%2F3vs1gatBE3cJcDDX5BYl6taCtnFEZLSYY13Jv6yb5SJar%2FOLpEglpe4AdhdlvsHJnW9R4cYQ%2Ff9Q9iuUSSLjDro0VHVtd5dBPUzXfADy6yL9x7k0Z1fZdgn3jj5LL6LnZHyaPe4OfIOP81lST%2BK5YHvwcmPRQ1gKalPD%2FzIDsr5GERz894j2aPp9SIRN%2BEzdF4lkT2qNn5iGGt4yHKF5lSwi5UQ8PYnXFALOlETwLlR2kXp7V3%2BLcriB%2ByCwX1dbs7XrCoM2qLMaWTL3Gc6Bu%2BAlncXTM0ganhoYKWO3zMjWzMzL7OhWGLIO54qwwPxYwpIDIvwY6pgEtGLFOUkOOwVhPuJiiTU3OtO3WGdePnIKRBp56Xgqv8pQ9A3Rq1MZ0%2B2VzgzsSG8zzCtxE5tcjG7Xi57qMtVZ%2BR1QXubpcFC9R8qaNV2t7l5HU5Afy2qI0zPW1GfspgerInDfu1YpCIvRZxEGyykT%2FriM2NdnkQVPyNj07XROU%2BhaeESa4HWh0qudc9FsDW5zy%2F3IeUalJeRp5o3DALMpWErAVHlo%2B&X-Amz-Signature=b684efea5826a53de688446936a06faf40eff2911cf665ac55529967059b13a3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XK45QD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwiirN%2Fq4Of4qTz970QVdvBOaMTzkmYak0d2Wv04KCfAiAjXHqJMupCxjvPECYidtbOJUef99bqHO8poBfr6rQrQCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMIu%2BZRcwZ%2Fo61pCCdKtwDHI8QcZh%2FhHHzrld8vKNZRsFFfxWhndQdXwfXhj%2BUogXcda1HIt6hsFy1oPleF14P104WwQTCefUAICJIFPaH64L3n%2BUI%2F17BeiSlXKp8kyZNl7wkawhhvi8MgwsrV021DPHFvYbiAMq1RHSjV%2F8MH4xCvQ8BUXSgq3FatxaLzStTXzVJHeF%2BwxI8wMwsidaUtNqI9b3FWtug%2FSCaIZeAQGxZT0rz491ccMo%2BqXp5IBZa7B7VcS343UNP88ULiynU%2B7O7n3E4Tu6xm5QOWzdxMd2UWa3eL2xWGjFsjQaZjNygo1RXAlBEZenJLy%2F3vs1gatBE3cJcDDX5BYl6taCtnFEZLSYY13Jv6yb5SJar%2FOLpEglpe4AdhdlvsHJnW9R4cYQ%2Ff9Q9iuUSSLjDro0VHVtd5dBPUzXfADy6yL9x7k0Z1fZdgn3jj5LL6LnZHyaPe4OfIOP81lST%2BK5YHvwcmPRQ1gKalPD%2FzIDsr5GERz894j2aPp9SIRN%2BEzdF4lkT2qNn5iGGt4yHKF5lSwi5UQ8PYnXFALOlETwLlR2kXp7V3%2BLcriB%2ByCwX1dbs7XrCoM2qLMaWTL3Gc6Bu%2BAlncXTM0ganhoYKWO3zMjWzMzL7OhWGLIO54qwwPxYwpIDIvwY6pgEtGLFOUkOOwVhPuJiiTU3OtO3WGdePnIKRBp56Xgqv8pQ9A3Rq1MZ0%2B2VzgzsSG8zzCtxE5tcjG7Xi57qMtVZ%2BR1QXubpcFC9R8qaNV2t7l5HU5Afy2qI0zPW1GfspgerInDfu1YpCIvRZxEGyykT%2FriM2NdnkQVPyNj07XROU%2BhaeESa4HWh0qudc9FsDW5zy%2F3IeUalJeRp5o3DALMpWErAVHlo%2B&X-Amz-Signature=9bb7253e9c1d71fd4543c5696ed7f7d69fbc0db46cea3dcb94f1258573e92607&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XK45QD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwiirN%2Fq4Of4qTz970QVdvBOaMTzkmYak0d2Wv04KCfAiAjXHqJMupCxjvPECYidtbOJUef99bqHO8poBfr6rQrQCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMIu%2BZRcwZ%2Fo61pCCdKtwDHI8QcZh%2FhHHzrld8vKNZRsFFfxWhndQdXwfXhj%2BUogXcda1HIt6hsFy1oPleF14P104WwQTCefUAICJIFPaH64L3n%2BUI%2F17BeiSlXKp8kyZNl7wkawhhvi8MgwsrV021DPHFvYbiAMq1RHSjV%2F8MH4xCvQ8BUXSgq3FatxaLzStTXzVJHeF%2BwxI8wMwsidaUtNqI9b3FWtug%2FSCaIZeAQGxZT0rz491ccMo%2BqXp5IBZa7B7VcS343UNP88ULiynU%2B7O7n3E4Tu6xm5QOWzdxMd2UWa3eL2xWGjFsjQaZjNygo1RXAlBEZenJLy%2F3vs1gatBE3cJcDDX5BYl6taCtnFEZLSYY13Jv6yb5SJar%2FOLpEglpe4AdhdlvsHJnW9R4cYQ%2Ff9Q9iuUSSLjDro0VHVtd5dBPUzXfADy6yL9x7k0Z1fZdgn3jj5LL6LnZHyaPe4OfIOP81lST%2BK5YHvwcmPRQ1gKalPD%2FzIDsr5GERz894j2aPp9SIRN%2BEzdF4lkT2qNn5iGGt4yHKF5lSwi5UQ8PYnXFALOlETwLlR2kXp7V3%2BLcriB%2ByCwX1dbs7XrCoM2qLMaWTL3Gc6Bu%2BAlncXTM0ganhoYKWO3zMjWzMzL7OhWGLIO54qwwPxYwpIDIvwY6pgEtGLFOUkOOwVhPuJiiTU3OtO3WGdePnIKRBp56Xgqv8pQ9A3Rq1MZ0%2B2VzgzsSG8zzCtxE5tcjG7Xi57qMtVZ%2BR1QXubpcFC9R8qaNV2t7l5HU5Afy2qI0zPW1GfspgerInDfu1YpCIvRZxEGyykT%2FriM2NdnkQVPyNj07XROU%2BhaeESa4HWh0qudc9FsDW5zy%2F3IeUalJeRp5o3DALMpWErAVHlo%2B&X-Amz-Signature=106e469673fef22f55fd0f1bb9b18004f6e68df6e6300ad7a5776cb4a36dbaf2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XK45QD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwiirN%2Fq4Of4qTz970QVdvBOaMTzkmYak0d2Wv04KCfAiAjXHqJMupCxjvPECYidtbOJUef99bqHO8poBfr6rQrQCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMIu%2BZRcwZ%2Fo61pCCdKtwDHI8QcZh%2FhHHzrld8vKNZRsFFfxWhndQdXwfXhj%2BUogXcda1HIt6hsFy1oPleF14P104WwQTCefUAICJIFPaH64L3n%2BUI%2F17BeiSlXKp8kyZNl7wkawhhvi8MgwsrV021DPHFvYbiAMq1RHSjV%2F8MH4xCvQ8BUXSgq3FatxaLzStTXzVJHeF%2BwxI8wMwsidaUtNqI9b3FWtug%2FSCaIZeAQGxZT0rz491ccMo%2BqXp5IBZa7B7VcS343UNP88ULiynU%2B7O7n3E4Tu6xm5QOWzdxMd2UWa3eL2xWGjFsjQaZjNygo1RXAlBEZenJLy%2F3vs1gatBE3cJcDDX5BYl6taCtnFEZLSYY13Jv6yb5SJar%2FOLpEglpe4AdhdlvsHJnW9R4cYQ%2Ff9Q9iuUSSLjDro0VHVtd5dBPUzXfADy6yL9x7k0Z1fZdgn3jj5LL6LnZHyaPe4OfIOP81lST%2BK5YHvwcmPRQ1gKalPD%2FzIDsr5GERz894j2aPp9SIRN%2BEzdF4lkT2qNn5iGGt4yHKF5lSwi5UQ8PYnXFALOlETwLlR2kXp7V3%2BLcriB%2ByCwX1dbs7XrCoM2qLMaWTL3Gc6Bu%2BAlncXTM0ganhoYKWO3zMjWzMzL7OhWGLIO54qwwPxYwpIDIvwY6pgEtGLFOUkOOwVhPuJiiTU3OtO3WGdePnIKRBp56Xgqv8pQ9A3Rq1MZ0%2B2VzgzsSG8zzCtxE5tcjG7Xi57qMtVZ%2BR1QXubpcFC9R8qaNV2t7l5HU5Afy2qI0zPW1GfspgerInDfu1YpCIvRZxEGyykT%2FriM2NdnkQVPyNj07XROU%2BhaeESa4HWh0qudc9FsDW5zy%2F3IeUalJeRp5o3DALMpWErAVHlo%2B&X-Amz-Signature=3cf85cd58e550f4af18c264276b32eac50122a22d2aabddd1dc3baf690711b03&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
