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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRAFRHP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDvIAEYuUtAO0vU9juM2CmP7mrCN3T0cjEJHDD7KKyBigIhAKe7HMzOpg39ciEaCnQ5SnAV72o1XcX0N2x0ou4M%2FGt6Kv8DCBUQABoMNjM3NDIzMTgzODA1IgxJbSrOvQJQzDYLA0cq3ANB%2BnyljAvOqChciBQn0tBdREtzEReG4arpsniQhMTA8ccA%2B%2BgZZu6lUfTMx2V5AecNjJNvtLL1o53PKUyWA6gYU0iFtZ2SmX0UJHDDPA9zfiokS9ehOXYm%2BBckLtPHZrCN1wsytplrW1B11pXQcLWhLhtX3JezKmMm%2BBV5xn4ErLlcVj%2F3%2BQfbZs0UknUtGyW%2FXwTqgOu7J3jWzJrG4IlWBu4i2r853cc0t9f%2BVpWqWC7Umoq6pDehDOM8MBW%2Fuwwhv%2BKPowihr0qWzXVtJ6gow2bJalMlhsIJs1zBZfALHqzf4mO5xgjXTWupwrB6rCNvBMyIB6wCs2GSOSrCR0Nan1DNUV1epnD7pyXhgOmb01EOdwgZxpNdDD%2FLzZvLBg%2Fp8CHGIwnG%2BkdSR%2BR8px3TOX3A8ME44Qj1s5JU8slkS55DPJaqupXZw7rrp13Cow%2BpZ6%2F4ZIsCO3Ob9AwWrfII0uKNQ6TEKphGT6GftfahGfGKDd3TJr8epzbjNO%2Bh4VrY4CT5iiquMfM4peN9dTJqqeQn0H7xwbdmPDX1xKOWmfGNbrQlZcvMWz0ne2USPF4fXKgA1WsEKd%2Bp6bL%2Bsd4ByLim4o3bDukpR96rrZB9%2BN5luOANIPL8s4JELzDA4ZnDBjqkAb4WUlVnHrDThrDcLgaRAOzfa3%2BVTubN8bC5fjSqJfKate0q8ovu6YA9jpAv%2BU17gbALkNztsmcEhBK15m3skDcYQkxAOR4T622ZbHHs33PgwjT2c0JQzWqTcS5WzTbEX8fl3HmS89tK%2BZCR9DLqZdc5Q0umptN3EIx4FNwqR4Wa0qYIhZ%2FTR0Fro9hMaOdOIhTgPGOyvuE%2BidgHo4hSE2VO9V8a&X-Amz-Signature=06dab99d1cb89bbb501ff459fff5a3566f4e6b8cd9215d2f6d7d4b27a2004285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRAFRHP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDvIAEYuUtAO0vU9juM2CmP7mrCN3T0cjEJHDD7KKyBigIhAKe7HMzOpg39ciEaCnQ5SnAV72o1XcX0N2x0ou4M%2FGt6Kv8DCBUQABoMNjM3NDIzMTgzODA1IgxJbSrOvQJQzDYLA0cq3ANB%2BnyljAvOqChciBQn0tBdREtzEReG4arpsniQhMTA8ccA%2B%2BgZZu6lUfTMx2V5AecNjJNvtLL1o53PKUyWA6gYU0iFtZ2SmX0UJHDDPA9zfiokS9ehOXYm%2BBckLtPHZrCN1wsytplrW1B11pXQcLWhLhtX3JezKmMm%2BBV5xn4ErLlcVj%2F3%2BQfbZs0UknUtGyW%2FXwTqgOu7J3jWzJrG4IlWBu4i2r853cc0t9f%2BVpWqWC7Umoq6pDehDOM8MBW%2Fuwwhv%2BKPowihr0qWzXVtJ6gow2bJalMlhsIJs1zBZfALHqzf4mO5xgjXTWupwrB6rCNvBMyIB6wCs2GSOSrCR0Nan1DNUV1epnD7pyXhgOmb01EOdwgZxpNdDD%2FLzZvLBg%2Fp8CHGIwnG%2BkdSR%2BR8px3TOX3A8ME44Qj1s5JU8slkS55DPJaqupXZw7rrp13Cow%2BpZ6%2F4ZIsCO3Ob9AwWrfII0uKNQ6TEKphGT6GftfahGfGKDd3TJr8epzbjNO%2Bh4VrY4CT5iiquMfM4peN9dTJqqeQn0H7xwbdmPDX1xKOWmfGNbrQlZcvMWz0ne2USPF4fXKgA1WsEKd%2Bp6bL%2Bsd4ByLim4o3bDukpR96rrZB9%2BN5luOANIPL8s4JELzDA4ZnDBjqkAb4WUlVnHrDThrDcLgaRAOzfa3%2BVTubN8bC5fjSqJfKate0q8ovu6YA9jpAv%2BU17gbALkNztsmcEhBK15m3skDcYQkxAOR4T622ZbHHs33PgwjT2c0JQzWqTcS5WzTbEX8fl3HmS89tK%2BZCR9DLqZdc5Q0umptN3EIx4FNwqR4Wa0qYIhZ%2FTR0Fro9hMaOdOIhTgPGOyvuE%2BidgHo4hSE2VO9V8a&X-Amz-Signature=9316276b9f0fcfad69434bbe872e7677302381b06b07e4e535b189a666947de2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRAFRHP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDvIAEYuUtAO0vU9juM2CmP7mrCN3T0cjEJHDD7KKyBigIhAKe7HMzOpg39ciEaCnQ5SnAV72o1XcX0N2x0ou4M%2FGt6Kv8DCBUQABoMNjM3NDIzMTgzODA1IgxJbSrOvQJQzDYLA0cq3ANB%2BnyljAvOqChciBQn0tBdREtzEReG4arpsniQhMTA8ccA%2B%2BgZZu6lUfTMx2V5AecNjJNvtLL1o53PKUyWA6gYU0iFtZ2SmX0UJHDDPA9zfiokS9ehOXYm%2BBckLtPHZrCN1wsytplrW1B11pXQcLWhLhtX3JezKmMm%2BBV5xn4ErLlcVj%2F3%2BQfbZs0UknUtGyW%2FXwTqgOu7J3jWzJrG4IlWBu4i2r853cc0t9f%2BVpWqWC7Umoq6pDehDOM8MBW%2Fuwwhv%2BKPowihr0qWzXVtJ6gow2bJalMlhsIJs1zBZfALHqzf4mO5xgjXTWupwrB6rCNvBMyIB6wCs2GSOSrCR0Nan1DNUV1epnD7pyXhgOmb01EOdwgZxpNdDD%2FLzZvLBg%2Fp8CHGIwnG%2BkdSR%2BR8px3TOX3A8ME44Qj1s5JU8slkS55DPJaqupXZw7rrp13Cow%2BpZ6%2F4ZIsCO3Ob9AwWrfII0uKNQ6TEKphGT6GftfahGfGKDd3TJr8epzbjNO%2Bh4VrY4CT5iiquMfM4peN9dTJqqeQn0H7xwbdmPDX1xKOWmfGNbrQlZcvMWz0ne2USPF4fXKgA1WsEKd%2Bp6bL%2Bsd4ByLim4o3bDukpR96rrZB9%2BN5luOANIPL8s4JELzDA4ZnDBjqkAb4WUlVnHrDThrDcLgaRAOzfa3%2BVTubN8bC5fjSqJfKate0q8ovu6YA9jpAv%2BU17gbALkNztsmcEhBK15m3skDcYQkxAOR4T622ZbHHs33PgwjT2c0JQzWqTcS5WzTbEX8fl3HmS89tK%2BZCR9DLqZdc5Q0umptN3EIx4FNwqR4Wa0qYIhZ%2FTR0Fro9hMaOdOIhTgPGOyvuE%2BidgHo4hSE2VO9V8a&X-Amz-Signature=7781665e569ae43363c91090608f6231ddbdabab2ff689e3c87b5d31fb06f8b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRAFRHP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDvIAEYuUtAO0vU9juM2CmP7mrCN3T0cjEJHDD7KKyBigIhAKe7HMzOpg39ciEaCnQ5SnAV72o1XcX0N2x0ou4M%2FGt6Kv8DCBUQABoMNjM3NDIzMTgzODA1IgxJbSrOvQJQzDYLA0cq3ANB%2BnyljAvOqChciBQn0tBdREtzEReG4arpsniQhMTA8ccA%2B%2BgZZu6lUfTMx2V5AecNjJNvtLL1o53PKUyWA6gYU0iFtZ2SmX0UJHDDPA9zfiokS9ehOXYm%2BBckLtPHZrCN1wsytplrW1B11pXQcLWhLhtX3JezKmMm%2BBV5xn4ErLlcVj%2F3%2BQfbZs0UknUtGyW%2FXwTqgOu7J3jWzJrG4IlWBu4i2r853cc0t9f%2BVpWqWC7Umoq6pDehDOM8MBW%2Fuwwhv%2BKPowihr0qWzXVtJ6gow2bJalMlhsIJs1zBZfALHqzf4mO5xgjXTWupwrB6rCNvBMyIB6wCs2GSOSrCR0Nan1DNUV1epnD7pyXhgOmb01EOdwgZxpNdDD%2FLzZvLBg%2Fp8CHGIwnG%2BkdSR%2BR8px3TOX3A8ME44Qj1s5JU8slkS55DPJaqupXZw7rrp13Cow%2BpZ6%2F4ZIsCO3Ob9AwWrfII0uKNQ6TEKphGT6GftfahGfGKDd3TJr8epzbjNO%2Bh4VrY4CT5iiquMfM4peN9dTJqqeQn0H7xwbdmPDX1xKOWmfGNbrQlZcvMWz0ne2USPF4fXKgA1WsEKd%2Bp6bL%2Bsd4ByLim4o3bDukpR96rrZB9%2BN5luOANIPL8s4JELzDA4ZnDBjqkAb4WUlVnHrDThrDcLgaRAOzfa3%2BVTubN8bC5fjSqJfKate0q8ovu6YA9jpAv%2BU17gbALkNztsmcEhBK15m3skDcYQkxAOR4T622ZbHHs33PgwjT2c0JQzWqTcS5WzTbEX8fl3HmS89tK%2BZCR9DLqZdc5Q0umptN3EIx4FNwqR4Wa0qYIhZ%2FTR0Fro9hMaOdOIhTgPGOyvuE%2BidgHo4hSE2VO9V8a&X-Amz-Signature=5a4c55aebbb00805d661642852bfa07843da3c4eaf0e6545c6f2a6282773bac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRAFRHP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDvIAEYuUtAO0vU9juM2CmP7mrCN3T0cjEJHDD7KKyBigIhAKe7HMzOpg39ciEaCnQ5SnAV72o1XcX0N2x0ou4M%2FGt6Kv8DCBUQABoMNjM3NDIzMTgzODA1IgxJbSrOvQJQzDYLA0cq3ANB%2BnyljAvOqChciBQn0tBdREtzEReG4arpsniQhMTA8ccA%2B%2BgZZu6lUfTMx2V5AecNjJNvtLL1o53PKUyWA6gYU0iFtZ2SmX0UJHDDPA9zfiokS9ehOXYm%2BBckLtPHZrCN1wsytplrW1B11pXQcLWhLhtX3JezKmMm%2BBV5xn4ErLlcVj%2F3%2BQfbZs0UknUtGyW%2FXwTqgOu7J3jWzJrG4IlWBu4i2r853cc0t9f%2BVpWqWC7Umoq6pDehDOM8MBW%2Fuwwhv%2BKPowihr0qWzXVtJ6gow2bJalMlhsIJs1zBZfALHqzf4mO5xgjXTWupwrB6rCNvBMyIB6wCs2GSOSrCR0Nan1DNUV1epnD7pyXhgOmb01EOdwgZxpNdDD%2FLzZvLBg%2Fp8CHGIwnG%2BkdSR%2BR8px3TOX3A8ME44Qj1s5JU8slkS55DPJaqupXZw7rrp13Cow%2BpZ6%2F4ZIsCO3Ob9AwWrfII0uKNQ6TEKphGT6GftfahGfGKDd3TJr8epzbjNO%2Bh4VrY4CT5iiquMfM4peN9dTJqqeQn0H7xwbdmPDX1xKOWmfGNbrQlZcvMWz0ne2USPF4fXKgA1WsEKd%2Bp6bL%2Bsd4ByLim4o3bDukpR96rrZB9%2BN5luOANIPL8s4JELzDA4ZnDBjqkAb4WUlVnHrDThrDcLgaRAOzfa3%2BVTubN8bC5fjSqJfKate0q8ovu6YA9jpAv%2BU17gbALkNztsmcEhBK15m3skDcYQkxAOR4T622ZbHHs33PgwjT2c0JQzWqTcS5WzTbEX8fl3HmS89tK%2BZCR9DLqZdc5Q0umptN3EIx4FNwqR4Wa0qYIhZ%2FTR0Fro9hMaOdOIhTgPGOyvuE%2BidgHo4hSE2VO9V8a&X-Amz-Signature=0a1ed41ab071cd6b1f5de490318580c964ef0bae7f33c26dc3f3a7438eb88a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRAFRHP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDvIAEYuUtAO0vU9juM2CmP7mrCN3T0cjEJHDD7KKyBigIhAKe7HMzOpg39ciEaCnQ5SnAV72o1XcX0N2x0ou4M%2FGt6Kv8DCBUQABoMNjM3NDIzMTgzODA1IgxJbSrOvQJQzDYLA0cq3ANB%2BnyljAvOqChciBQn0tBdREtzEReG4arpsniQhMTA8ccA%2B%2BgZZu6lUfTMx2V5AecNjJNvtLL1o53PKUyWA6gYU0iFtZ2SmX0UJHDDPA9zfiokS9ehOXYm%2BBckLtPHZrCN1wsytplrW1B11pXQcLWhLhtX3JezKmMm%2BBV5xn4ErLlcVj%2F3%2BQfbZs0UknUtGyW%2FXwTqgOu7J3jWzJrG4IlWBu4i2r853cc0t9f%2BVpWqWC7Umoq6pDehDOM8MBW%2Fuwwhv%2BKPowihr0qWzXVtJ6gow2bJalMlhsIJs1zBZfALHqzf4mO5xgjXTWupwrB6rCNvBMyIB6wCs2GSOSrCR0Nan1DNUV1epnD7pyXhgOmb01EOdwgZxpNdDD%2FLzZvLBg%2Fp8CHGIwnG%2BkdSR%2BR8px3TOX3A8ME44Qj1s5JU8slkS55DPJaqupXZw7rrp13Cow%2BpZ6%2F4ZIsCO3Ob9AwWrfII0uKNQ6TEKphGT6GftfahGfGKDd3TJr8epzbjNO%2Bh4VrY4CT5iiquMfM4peN9dTJqqeQn0H7xwbdmPDX1xKOWmfGNbrQlZcvMWz0ne2USPF4fXKgA1WsEKd%2Bp6bL%2Bsd4ByLim4o3bDukpR96rrZB9%2BN5luOANIPL8s4JELzDA4ZnDBjqkAb4WUlVnHrDThrDcLgaRAOzfa3%2BVTubN8bC5fjSqJfKate0q8ovu6YA9jpAv%2BU17gbALkNztsmcEhBK15m3skDcYQkxAOR4T622ZbHHs33PgwjT2c0JQzWqTcS5WzTbEX8fl3HmS89tK%2BZCR9DLqZdc5Q0umptN3EIx4FNwqR4Wa0qYIhZ%2FTR0Fro9hMaOdOIhTgPGOyvuE%2BidgHo4hSE2VO9V8a&X-Amz-Signature=ebffd1b8459f1d5282c3ae01b345f309c80377def0e7c5c7a39903b19c194152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TRAFRHP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDvIAEYuUtAO0vU9juM2CmP7mrCN3T0cjEJHDD7KKyBigIhAKe7HMzOpg39ciEaCnQ5SnAV72o1XcX0N2x0ou4M%2FGt6Kv8DCBUQABoMNjM3NDIzMTgzODA1IgxJbSrOvQJQzDYLA0cq3ANB%2BnyljAvOqChciBQn0tBdREtzEReG4arpsniQhMTA8ccA%2B%2BgZZu6lUfTMx2V5AecNjJNvtLL1o53PKUyWA6gYU0iFtZ2SmX0UJHDDPA9zfiokS9ehOXYm%2BBckLtPHZrCN1wsytplrW1B11pXQcLWhLhtX3JezKmMm%2BBV5xn4ErLlcVj%2F3%2BQfbZs0UknUtGyW%2FXwTqgOu7J3jWzJrG4IlWBu4i2r853cc0t9f%2BVpWqWC7Umoq6pDehDOM8MBW%2Fuwwhv%2BKPowihr0qWzXVtJ6gow2bJalMlhsIJs1zBZfALHqzf4mO5xgjXTWupwrB6rCNvBMyIB6wCs2GSOSrCR0Nan1DNUV1epnD7pyXhgOmb01EOdwgZxpNdDD%2FLzZvLBg%2Fp8CHGIwnG%2BkdSR%2BR8px3TOX3A8ME44Qj1s5JU8slkS55DPJaqupXZw7rrp13Cow%2BpZ6%2F4ZIsCO3Ob9AwWrfII0uKNQ6TEKphGT6GftfahGfGKDd3TJr8epzbjNO%2Bh4VrY4CT5iiquMfM4peN9dTJqqeQn0H7xwbdmPDX1xKOWmfGNbrQlZcvMWz0ne2USPF4fXKgA1WsEKd%2Bp6bL%2Bsd4ByLim4o3bDukpR96rrZB9%2BN5luOANIPL8s4JELzDA4ZnDBjqkAb4WUlVnHrDThrDcLgaRAOzfa3%2BVTubN8bC5fjSqJfKate0q8ovu6YA9jpAv%2BU17gbALkNztsmcEhBK15m3skDcYQkxAOR4T622ZbHHs33PgwjT2c0JQzWqTcS5WzTbEX8fl3HmS89tK%2BZCR9DLqZdc5Q0umptN3EIx4FNwqR4Wa0qYIhZ%2FTR0Fro9hMaOdOIhTgPGOyvuE%2BidgHo4hSE2VO9V8a&X-Amz-Signature=a8d4b54c7db5122ff8e6a06fc03ab222096a11905a8f120e7b6f736482a7273e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
