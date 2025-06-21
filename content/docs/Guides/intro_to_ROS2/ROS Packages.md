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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXKTWFR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0kfPjNm6iojMrV3pQwW8cO2g6V0TY8rQfPNBgq6%2BhGQIhAI5I2W%2BleQFF1R7gVsgs2vkfVACn9Ugix40TPEl51R9%2BKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqFgMzoyvsIUaAz1Yq3AOdcLpdeKugCdrih0meyVZhrVCPR1dixk2cSwKz1ydEycFrcBVWL1GeWTPWElu1LeplFX18dOPD2IuFLc%2FYpHdphlkhrdrDqUqRDEwOpBRd7wWU3W8GGpcLXeA2Bw8fSYQCwCJCjyDZoqU8Q17mNaepsN0B2YS9RG%2FGWhZLZjbhLxLMPUA2sUhYQsvdxFAhOOHevpRm9RnjnQKzY52G6hW3q%2B7eH5gTtV99Ix58qJztztS7E8AZsyEsKNFefZ9ShygOJJHK9EomG%2Bed%2BCba5%2Bnye7jHJQZACtZ19Szyd8v8Eg19JUKpolCVXj9TFLjULpz0%2F0MiKo63ZVnFTRX14J9uETTxdyyC6GoF0gZ2Ck9jcZ8T%2BYt5QIg9B2cgQHQTzFGncWTDulBTeK3Y0NFQo4wrfv4eCJ1uH8Y8%2FqGch5hSI3nvBtpQY2paVT88JLjkGqB9nHHvQ%2FIaoUAxg2j4j8yZ3lUuZ13061iPqbk9saUE0xQb%2BF5aDZtOYD1ZcJsY12eS3TXbIBibAEiKKUt%2BeoW6AbqwLC8nAIQ0bUFPI9yjuQQEZqgZ5anbXVQaxwCKgKbogLj33ScipOZlQAvbi0VcQ94%2Fzjgcly6CB18quj5WUEnVJUyziPu2Li1QYTCqj9vCBjqkAVWZmtSovppPUhuS%2F2Xo4Wt9esnqsdPi5rmH19L1%2FGFwrV4R4uXJTjA1JLW0MauJIskY5%2BkVdegHJG1mIbnu6ZkLPuaehHX7sGL5uGFO8dVHSzDApCMrOHsfJYpNJut8y0pvHYA5VVX7X%2FR3SM2dzJFZOVNmrTCb13MZaUuOHkNPgs1rx4zF13o9gZFNX4vapfAnpUfxeT%2BE4EZcenJ3tQmaahAv&X-Amz-Signature=61910af1516645cfddb2c12a9c25f7be6217cee46d0bd148976ba0cebd1b99e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXKTWFR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0kfPjNm6iojMrV3pQwW8cO2g6V0TY8rQfPNBgq6%2BhGQIhAI5I2W%2BleQFF1R7gVsgs2vkfVACn9Ugix40TPEl51R9%2BKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqFgMzoyvsIUaAz1Yq3AOdcLpdeKugCdrih0meyVZhrVCPR1dixk2cSwKz1ydEycFrcBVWL1GeWTPWElu1LeplFX18dOPD2IuFLc%2FYpHdphlkhrdrDqUqRDEwOpBRd7wWU3W8GGpcLXeA2Bw8fSYQCwCJCjyDZoqU8Q17mNaepsN0B2YS9RG%2FGWhZLZjbhLxLMPUA2sUhYQsvdxFAhOOHevpRm9RnjnQKzY52G6hW3q%2B7eH5gTtV99Ix58qJztztS7E8AZsyEsKNFefZ9ShygOJJHK9EomG%2Bed%2BCba5%2Bnye7jHJQZACtZ19Szyd8v8Eg19JUKpolCVXj9TFLjULpz0%2F0MiKo63ZVnFTRX14J9uETTxdyyC6GoF0gZ2Ck9jcZ8T%2BYt5QIg9B2cgQHQTzFGncWTDulBTeK3Y0NFQo4wrfv4eCJ1uH8Y8%2FqGch5hSI3nvBtpQY2paVT88JLjkGqB9nHHvQ%2FIaoUAxg2j4j8yZ3lUuZ13061iPqbk9saUE0xQb%2BF5aDZtOYD1ZcJsY12eS3TXbIBibAEiKKUt%2BeoW6AbqwLC8nAIQ0bUFPI9yjuQQEZqgZ5anbXVQaxwCKgKbogLj33ScipOZlQAvbi0VcQ94%2Fzjgcly6CB18quj5WUEnVJUyziPu2Li1QYTCqj9vCBjqkAVWZmtSovppPUhuS%2F2Xo4Wt9esnqsdPi5rmH19L1%2FGFwrV4R4uXJTjA1JLW0MauJIskY5%2BkVdegHJG1mIbnu6ZkLPuaehHX7sGL5uGFO8dVHSzDApCMrOHsfJYpNJut8y0pvHYA5VVX7X%2FR3SM2dzJFZOVNmrTCb13MZaUuOHkNPgs1rx4zF13o9gZFNX4vapfAnpUfxeT%2BE4EZcenJ3tQmaahAv&X-Amz-Signature=74aea466651dc8358ada2076bc4ee7f7592d90ca54d3170048a604d4efa9e8ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXKTWFR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0kfPjNm6iojMrV3pQwW8cO2g6V0TY8rQfPNBgq6%2BhGQIhAI5I2W%2BleQFF1R7gVsgs2vkfVACn9Ugix40TPEl51R9%2BKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqFgMzoyvsIUaAz1Yq3AOdcLpdeKugCdrih0meyVZhrVCPR1dixk2cSwKz1ydEycFrcBVWL1GeWTPWElu1LeplFX18dOPD2IuFLc%2FYpHdphlkhrdrDqUqRDEwOpBRd7wWU3W8GGpcLXeA2Bw8fSYQCwCJCjyDZoqU8Q17mNaepsN0B2YS9RG%2FGWhZLZjbhLxLMPUA2sUhYQsvdxFAhOOHevpRm9RnjnQKzY52G6hW3q%2B7eH5gTtV99Ix58qJztztS7E8AZsyEsKNFefZ9ShygOJJHK9EomG%2Bed%2BCba5%2Bnye7jHJQZACtZ19Szyd8v8Eg19JUKpolCVXj9TFLjULpz0%2F0MiKo63ZVnFTRX14J9uETTxdyyC6GoF0gZ2Ck9jcZ8T%2BYt5QIg9B2cgQHQTzFGncWTDulBTeK3Y0NFQo4wrfv4eCJ1uH8Y8%2FqGch5hSI3nvBtpQY2paVT88JLjkGqB9nHHvQ%2FIaoUAxg2j4j8yZ3lUuZ13061iPqbk9saUE0xQb%2BF5aDZtOYD1ZcJsY12eS3TXbIBibAEiKKUt%2BeoW6AbqwLC8nAIQ0bUFPI9yjuQQEZqgZ5anbXVQaxwCKgKbogLj33ScipOZlQAvbi0VcQ94%2Fzjgcly6CB18quj5WUEnVJUyziPu2Li1QYTCqj9vCBjqkAVWZmtSovppPUhuS%2F2Xo4Wt9esnqsdPi5rmH19L1%2FGFwrV4R4uXJTjA1JLW0MauJIskY5%2BkVdegHJG1mIbnu6ZkLPuaehHX7sGL5uGFO8dVHSzDApCMrOHsfJYpNJut8y0pvHYA5VVX7X%2FR3SM2dzJFZOVNmrTCb13MZaUuOHkNPgs1rx4zF13o9gZFNX4vapfAnpUfxeT%2BE4EZcenJ3tQmaahAv&X-Amz-Signature=4c4419d60de6196fdcbb64fc841ef14ef31d99ce42109ca08641377b32c46880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXKTWFR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0kfPjNm6iojMrV3pQwW8cO2g6V0TY8rQfPNBgq6%2BhGQIhAI5I2W%2BleQFF1R7gVsgs2vkfVACn9Ugix40TPEl51R9%2BKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqFgMzoyvsIUaAz1Yq3AOdcLpdeKugCdrih0meyVZhrVCPR1dixk2cSwKz1ydEycFrcBVWL1GeWTPWElu1LeplFX18dOPD2IuFLc%2FYpHdphlkhrdrDqUqRDEwOpBRd7wWU3W8GGpcLXeA2Bw8fSYQCwCJCjyDZoqU8Q17mNaepsN0B2YS9RG%2FGWhZLZjbhLxLMPUA2sUhYQsvdxFAhOOHevpRm9RnjnQKzY52G6hW3q%2B7eH5gTtV99Ix58qJztztS7E8AZsyEsKNFefZ9ShygOJJHK9EomG%2Bed%2BCba5%2Bnye7jHJQZACtZ19Szyd8v8Eg19JUKpolCVXj9TFLjULpz0%2F0MiKo63ZVnFTRX14J9uETTxdyyC6GoF0gZ2Ck9jcZ8T%2BYt5QIg9B2cgQHQTzFGncWTDulBTeK3Y0NFQo4wrfv4eCJ1uH8Y8%2FqGch5hSI3nvBtpQY2paVT88JLjkGqB9nHHvQ%2FIaoUAxg2j4j8yZ3lUuZ13061iPqbk9saUE0xQb%2BF5aDZtOYD1ZcJsY12eS3TXbIBibAEiKKUt%2BeoW6AbqwLC8nAIQ0bUFPI9yjuQQEZqgZ5anbXVQaxwCKgKbogLj33ScipOZlQAvbi0VcQ94%2Fzjgcly6CB18quj5WUEnVJUyziPu2Li1QYTCqj9vCBjqkAVWZmtSovppPUhuS%2F2Xo4Wt9esnqsdPi5rmH19L1%2FGFwrV4R4uXJTjA1JLW0MauJIskY5%2BkVdegHJG1mIbnu6ZkLPuaehHX7sGL5uGFO8dVHSzDApCMrOHsfJYpNJut8y0pvHYA5VVX7X%2FR3SM2dzJFZOVNmrTCb13MZaUuOHkNPgs1rx4zF13o9gZFNX4vapfAnpUfxeT%2BE4EZcenJ3tQmaahAv&X-Amz-Signature=0394c237915e9e6c55477ad0ae905109ea71fa6107d88f2f1794dca36a920381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXKTWFR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0kfPjNm6iojMrV3pQwW8cO2g6V0TY8rQfPNBgq6%2BhGQIhAI5I2W%2BleQFF1R7gVsgs2vkfVACn9Ugix40TPEl51R9%2BKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqFgMzoyvsIUaAz1Yq3AOdcLpdeKugCdrih0meyVZhrVCPR1dixk2cSwKz1ydEycFrcBVWL1GeWTPWElu1LeplFX18dOPD2IuFLc%2FYpHdphlkhrdrDqUqRDEwOpBRd7wWU3W8GGpcLXeA2Bw8fSYQCwCJCjyDZoqU8Q17mNaepsN0B2YS9RG%2FGWhZLZjbhLxLMPUA2sUhYQsvdxFAhOOHevpRm9RnjnQKzY52G6hW3q%2B7eH5gTtV99Ix58qJztztS7E8AZsyEsKNFefZ9ShygOJJHK9EomG%2Bed%2BCba5%2Bnye7jHJQZACtZ19Szyd8v8Eg19JUKpolCVXj9TFLjULpz0%2F0MiKo63ZVnFTRX14J9uETTxdyyC6GoF0gZ2Ck9jcZ8T%2BYt5QIg9B2cgQHQTzFGncWTDulBTeK3Y0NFQo4wrfv4eCJ1uH8Y8%2FqGch5hSI3nvBtpQY2paVT88JLjkGqB9nHHvQ%2FIaoUAxg2j4j8yZ3lUuZ13061iPqbk9saUE0xQb%2BF5aDZtOYD1ZcJsY12eS3TXbIBibAEiKKUt%2BeoW6AbqwLC8nAIQ0bUFPI9yjuQQEZqgZ5anbXVQaxwCKgKbogLj33ScipOZlQAvbi0VcQ94%2Fzjgcly6CB18quj5WUEnVJUyziPu2Li1QYTCqj9vCBjqkAVWZmtSovppPUhuS%2F2Xo4Wt9esnqsdPi5rmH19L1%2FGFwrV4R4uXJTjA1JLW0MauJIskY5%2BkVdegHJG1mIbnu6ZkLPuaehHX7sGL5uGFO8dVHSzDApCMrOHsfJYpNJut8y0pvHYA5VVX7X%2FR3SM2dzJFZOVNmrTCb13MZaUuOHkNPgs1rx4zF13o9gZFNX4vapfAnpUfxeT%2BE4EZcenJ3tQmaahAv&X-Amz-Signature=56d7b51c6adfb4a26093cadd365b14ed7b31faf26c843373e5d345ee0088e506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXKTWFR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0kfPjNm6iojMrV3pQwW8cO2g6V0TY8rQfPNBgq6%2BhGQIhAI5I2W%2BleQFF1R7gVsgs2vkfVACn9Ugix40TPEl51R9%2BKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqFgMzoyvsIUaAz1Yq3AOdcLpdeKugCdrih0meyVZhrVCPR1dixk2cSwKz1ydEycFrcBVWL1GeWTPWElu1LeplFX18dOPD2IuFLc%2FYpHdphlkhrdrDqUqRDEwOpBRd7wWU3W8GGpcLXeA2Bw8fSYQCwCJCjyDZoqU8Q17mNaepsN0B2YS9RG%2FGWhZLZjbhLxLMPUA2sUhYQsvdxFAhOOHevpRm9RnjnQKzY52G6hW3q%2B7eH5gTtV99Ix58qJztztS7E8AZsyEsKNFefZ9ShygOJJHK9EomG%2Bed%2BCba5%2Bnye7jHJQZACtZ19Szyd8v8Eg19JUKpolCVXj9TFLjULpz0%2F0MiKo63ZVnFTRX14J9uETTxdyyC6GoF0gZ2Ck9jcZ8T%2BYt5QIg9B2cgQHQTzFGncWTDulBTeK3Y0NFQo4wrfv4eCJ1uH8Y8%2FqGch5hSI3nvBtpQY2paVT88JLjkGqB9nHHvQ%2FIaoUAxg2j4j8yZ3lUuZ13061iPqbk9saUE0xQb%2BF5aDZtOYD1ZcJsY12eS3TXbIBibAEiKKUt%2BeoW6AbqwLC8nAIQ0bUFPI9yjuQQEZqgZ5anbXVQaxwCKgKbogLj33ScipOZlQAvbi0VcQ94%2Fzjgcly6CB18quj5WUEnVJUyziPu2Li1QYTCqj9vCBjqkAVWZmtSovppPUhuS%2F2Xo4Wt9esnqsdPi5rmH19L1%2FGFwrV4R4uXJTjA1JLW0MauJIskY5%2BkVdegHJG1mIbnu6ZkLPuaehHX7sGL5uGFO8dVHSzDApCMrOHsfJYpNJut8y0pvHYA5VVX7X%2FR3SM2dzJFZOVNmrTCb13MZaUuOHkNPgs1rx4zF13o9gZFNX4vapfAnpUfxeT%2BE4EZcenJ3tQmaahAv&X-Amz-Signature=3c3bb1601cf00b7ab7ccfe1c8a7c6d5c03dd4de56cbed4922a357b94f53488b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXKTWFR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0kfPjNm6iojMrV3pQwW8cO2g6V0TY8rQfPNBgq6%2BhGQIhAI5I2W%2BleQFF1R7gVsgs2vkfVACn9Ugix40TPEl51R9%2BKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqFgMzoyvsIUaAz1Yq3AOdcLpdeKugCdrih0meyVZhrVCPR1dixk2cSwKz1ydEycFrcBVWL1GeWTPWElu1LeplFX18dOPD2IuFLc%2FYpHdphlkhrdrDqUqRDEwOpBRd7wWU3W8GGpcLXeA2Bw8fSYQCwCJCjyDZoqU8Q17mNaepsN0B2YS9RG%2FGWhZLZjbhLxLMPUA2sUhYQsvdxFAhOOHevpRm9RnjnQKzY52G6hW3q%2B7eH5gTtV99Ix58qJztztS7E8AZsyEsKNFefZ9ShygOJJHK9EomG%2Bed%2BCba5%2Bnye7jHJQZACtZ19Szyd8v8Eg19JUKpolCVXj9TFLjULpz0%2F0MiKo63ZVnFTRX14J9uETTxdyyC6GoF0gZ2Ck9jcZ8T%2BYt5QIg9B2cgQHQTzFGncWTDulBTeK3Y0NFQo4wrfv4eCJ1uH8Y8%2FqGch5hSI3nvBtpQY2paVT88JLjkGqB9nHHvQ%2FIaoUAxg2j4j8yZ3lUuZ13061iPqbk9saUE0xQb%2BF5aDZtOYD1ZcJsY12eS3TXbIBibAEiKKUt%2BeoW6AbqwLC8nAIQ0bUFPI9yjuQQEZqgZ5anbXVQaxwCKgKbogLj33ScipOZlQAvbi0VcQ94%2Fzjgcly6CB18quj5WUEnVJUyziPu2Li1QYTCqj9vCBjqkAVWZmtSovppPUhuS%2F2Xo4Wt9esnqsdPi5rmH19L1%2FGFwrV4R4uXJTjA1JLW0MauJIskY5%2BkVdegHJG1mIbnu6ZkLPuaehHX7sGL5uGFO8dVHSzDApCMrOHsfJYpNJut8y0pvHYA5VVX7X%2FR3SM2dzJFZOVNmrTCb13MZaUuOHkNPgs1rx4zF13o9gZFNX4vapfAnpUfxeT%2BE4EZcenJ3tQmaahAv&X-Amz-Signature=ae52a158e9fa7b9de4fac57a909a38f3b6e528363e0f5b8ecf56d5315790bc74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
