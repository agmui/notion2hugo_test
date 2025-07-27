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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEAZMWT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCrIr15JhnAFfSBQkTRQqFK1v%2F5nlXfO0rQ3vyH0ITZsgIhAOWcujfGTJLoAUj8cx1cDOP8gY%2F2ILEsvqeJUcqu5nwGKv8DCGgQABoMNjM3NDIzMTgzODA1Igw7aqJofqz%2FdO3tCB8q3AMkcCJW6Rqu7HlJXelsJIJKzWSqyxTuInO76iunt9CSMFZRK5LUCigVLaWkEiim%2FRBEiEaRGzIx1Au1NjqSYIZxpLYbUbiP%2B%2FknjzlwC9aqx4Q%2FN4rAFlLSd2SXIuj8BxMT6fWAjA1H%2F%2FvtNozJMnx3Y7MfSaekg5AIRyQVGxA1FR3F4bXbkb9ITm5U2xhHojqZqqCZfy46yH4lMoxMq1k5Y7YiWeOBLf%2FUWl%2BdjhKZszcyzQ9bL6rPjDtSm76wqiqyTXDIix%2BUsv7ZpB%2BToPCs7jaXLKF0vmRqVGMfUZ8gnZFN7LMrV5oohGFjWfy8yqCgphaR8%2Bp96rtH%2B0Ku0FQlDNZ7nFMJb3m7OXBdYgyTr5ehVCuLxb9%2BxzacjwwZkKtJiP3bscpUggkoAMEv6A6zvzSSm8VWEBDr2%2FnbmZRMRYyJeZguYBJghthhGubB2ZVxVb9PNMf4XhVSBjI4Nb31WH4IiSpTSf9ZJ2X6HvsalpL%2Bq1ryv%2B51VMnkYzRBVrMgFT%2FteZD5w3V6gtrtOnXcGjc3y2Bs44lEmR5WPA4c6cbPwcm4R1ceskvmkYnytE8p1%2FI0AgjHVR8vvjYq46vpJw%2BfWJwR%2BmV3TXC1UTjxjyItCQDDqkTqSIuSKDDRwpXEBjqkAdqFRm1qfGEGl%2Bfdho8HVxMSACHjQ244OopOHAa3Xwu%2BV9JQd6nZXm12wzauOB3zt0x%2Fqvzd7XpLkSR6zFyGEO4ZwfD8Dn9UKs321QKIAJE6WtJwus0Uhi9ho2ZnrzjkTvUZrXeETQU7tDF7LlNRk3dPw9jXEKt%2BDax3Gmc%2Bvp22rgAvZl4kfX5PsVbNwRy%2FMKdspmRfEd6LMEKagJz5ASQOvprN&X-Amz-Signature=c617f0a021ff6a64b247cb18b9a30900bbc56e354306a68fed54d6421b29b750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEAZMWT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCrIr15JhnAFfSBQkTRQqFK1v%2F5nlXfO0rQ3vyH0ITZsgIhAOWcujfGTJLoAUj8cx1cDOP8gY%2F2ILEsvqeJUcqu5nwGKv8DCGgQABoMNjM3NDIzMTgzODA1Igw7aqJofqz%2FdO3tCB8q3AMkcCJW6Rqu7HlJXelsJIJKzWSqyxTuInO76iunt9CSMFZRK5LUCigVLaWkEiim%2FRBEiEaRGzIx1Au1NjqSYIZxpLYbUbiP%2B%2FknjzlwC9aqx4Q%2FN4rAFlLSd2SXIuj8BxMT6fWAjA1H%2F%2FvtNozJMnx3Y7MfSaekg5AIRyQVGxA1FR3F4bXbkb9ITm5U2xhHojqZqqCZfy46yH4lMoxMq1k5Y7YiWeOBLf%2FUWl%2BdjhKZszcyzQ9bL6rPjDtSm76wqiqyTXDIix%2BUsv7ZpB%2BToPCs7jaXLKF0vmRqVGMfUZ8gnZFN7LMrV5oohGFjWfy8yqCgphaR8%2Bp96rtH%2B0Ku0FQlDNZ7nFMJb3m7OXBdYgyTr5ehVCuLxb9%2BxzacjwwZkKtJiP3bscpUggkoAMEv6A6zvzSSm8VWEBDr2%2FnbmZRMRYyJeZguYBJghthhGubB2ZVxVb9PNMf4XhVSBjI4Nb31WH4IiSpTSf9ZJ2X6HvsalpL%2Bq1ryv%2B51VMnkYzRBVrMgFT%2FteZD5w3V6gtrtOnXcGjc3y2Bs44lEmR5WPA4c6cbPwcm4R1ceskvmkYnytE8p1%2FI0AgjHVR8vvjYq46vpJw%2BfWJwR%2BmV3TXC1UTjxjyItCQDDqkTqSIuSKDDRwpXEBjqkAdqFRm1qfGEGl%2Bfdho8HVxMSACHjQ244OopOHAa3Xwu%2BV9JQd6nZXm12wzauOB3zt0x%2Fqvzd7XpLkSR6zFyGEO4ZwfD8Dn9UKs321QKIAJE6WtJwus0Uhi9ho2ZnrzjkTvUZrXeETQU7tDF7LlNRk3dPw9jXEKt%2BDax3Gmc%2Bvp22rgAvZl4kfX5PsVbNwRy%2FMKdspmRfEd6LMEKagJz5ASQOvprN&X-Amz-Signature=3862646ba784ae8f6fb7ae8c372f7af371afb619087a4361823a2f51d21056c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEAZMWT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCrIr15JhnAFfSBQkTRQqFK1v%2F5nlXfO0rQ3vyH0ITZsgIhAOWcujfGTJLoAUj8cx1cDOP8gY%2F2ILEsvqeJUcqu5nwGKv8DCGgQABoMNjM3NDIzMTgzODA1Igw7aqJofqz%2FdO3tCB8q3AMkcCJW6Rqu7HlJXelsJIJKzWSqyxTuInO76iunt9CSMFZRK5LUCigVLaWkEiim%2FRBEiEaRGzIx1Au1NjqSYIZxpLYbUbiP%2B%2FknjzlwC9aqx4Q%2FN4rAFlLSd2SXIuj8BxMT6fWAjA1H%2F%2FvtNozJMnx3Y7MfSaekg5AIRyQVGxA1FR3F4bXbkb9ITm5U2xhHojqZqqCZfy46yH4lMoxMq1k5Y7YiWeOBLf%2FUWl%2BdjhKZszcyzQ9bL6rPjDtSm76wqiqyTXDIix%2BUsv7ZpB%2BToPCs7jaXLKF0vmRqVGMfUZ8gnZFN7LMrV5oohGFjWfy8yqCgphaR8%2Bp96rtH%2B0Ku0FQlDNZ7nFMJb3m7OXBdYgyTr5ehVCuLxb9%2BxzacjwwZkKtJiP3bscpUggkoAMEv6A6zvzSSm8VWEBDr2%2FnbmZRMRYyJeZguYBJghthhGubB2ZVxVb9PNMf4XhVSBjI4Nb31WH4IiSpTSf9ZJ2X6HvsalpL%2Bq1ryv%2B51VMnkYzRBVrMgFT%2FteZD5w3V6gtrtOnXcGjc3y2Bs44lEmR5WPA4c6cbPwcm4R1ceskvmkYnytE8p1%2FI0AgjHVR8vvjYq46vpJw%2BfWJwR%2BmV3TXC1UTjxjyItCQDDqkTqSIuSKDDRwpXEBjqkAdqFRm1qfGEGl%2Bfdho8HVxMSACHjQ244OopOHAa3Xwu%2BV9JQd6nZXm12wzauOB3zt0x%2Fqvzd7XpLkSR6zFyGEO4ZwfD8Dn9UKs321QKIAJE6WtJwus0Uhi9ho2ZnrzjkTvUZrXeETQU7tDF7LlNRk3dPw9jXEKt%2BDax3Gmc%2Bvp22rgAvZl4kfX5PsVbNwRy%2FMKdspmRfEd6LMEKagJz5ASQOvprN&X-Amz-Signature=b733bed4e45cef037be6d01b0bf72d3fe334edc6a8a2ffc4223fc84733beb6fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEAZMWT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCrIr15JhnAFfSBQkTRQqFK1v%2F5nlXfO0rQ3vyH0ITZsgIhAOWcujfGTJLoAUj8cx1cDOP8gY%2F2ILEsvqeJUcqu5nwGKv8DCGgQABoMNjM3NDIzMTgzODA1Igw7aqJofqz%2FdO3tCB8q3AMkcCJW6Rqu7HlJXelsJIJKzWSqyxTuInO76iunt9CSMFZRK5LUCigVLaWkEiim%2FRBEiEaRGzIx1Au1NjqSYIZxpLYbUbiP%2B%2FknjzlwC9aqx4Q%2FN4rAFlLSd2SXIuj8BxMT6fWAjA1H%2F%2FvtNozJMnx3Y7MfSaekg5AIRyQVGxA1FR3F4bXbkb9ITm5U2xhHojqZqqCZfy46yH4lMoxMq1k5Y7YiWeOBLf%2FUWl%2BdjhKZszcyzQ9bL6rPjDtSm76wqiqyTXDIix%2BUsv7ZpB%2BToPCs7jaXLKF0vmRqVGMfUZ8gnZFN7LMrV5oohGFjWfy8yqCgphaR8%2Bp96rtH%2B0Ku0FQlDNZ7nFMJb3m7OXBdYgyTr5ehVCuLxb9%2BxzacjwwZkKtJiP3bscpUggkoAMEv6A6zvzSSm8VWEBDr2%2FnbmZRMRYyJeZguYBJghthhGubB2ZVxVb9PNMf4XhVSBjI4Nb31WH4IiSpTSf9ZJ2X6HvsalpL%2Bq1ryv%2B51VMnkYzRBVrMgFT%2FteZD5w3V6gtrtOnXcGjc3y2Bs44lEmR5WPA4c6cbPwcm4R1ceskvmkYnytE8p1%2FI0AgjHVR8vvjYq46vpJw%2BfWJwR%2BmV3TXC1UTjxjyItCQDDqkTqSIuSKDDRwpXEBjqkAdqFRm1qfGEGl%2Bfdho8HVxMSACHjQ244OopOHAa3Xwu%2BV9JQd6nZXm12wzauOB3zt0x%2Fqvzd7XpLkSR6zFyGEO4ZwfD8Dn9UKs321QKIAJE6WtJwus0Uhi9ho2ZnrzjkTvUZrXeETQU7tDF7LlNRk3dPw9jXEKt%2BDax3Gmc%2Bvp22rgAvZl4kfX5PsVbNwRy%2FMKdspmRfEd6LMEKagJz5ASQOvprN&X-Amz-Signature=466f8bc48ae202f075cbc6c71bde227f126d33e4b31e44b2546085009c1b07c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEAZMWT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCrIr15JhnAFfSBQkTRQqFK1v%2F5nlXfO0rQ3vyH0ITZsgIhAOWcujfGTJLoAUj8cx1cDOP8gY%2F2ILEsvqeJUcqu5nwGKv8DCGgQABoMNjM3NDIzMTgzODA1Igw7aqJofqz%2FdO3tCB8q3AMkcCJW6Rqu7HlJXelsJIJKzWSqyxTuInO76iunt9CSMFZRK5LUCigVLaWkEiim%2FRBEiEaRGzIx1Au1NjqSYIZxpLYbUbiP%2B%2FknjzlwC9aqx4Q%2FN4rAFlLSd2SXIuj8BxMT6fWAjA1H%2F%2FvtNozJMnx3Y7MfSaekg5AIRyQVGxA1FR3F4bXbkb9ITm5U2xhHojqZqqCZfy46yH4lMoxMq1k5Y7YiWeOBLf%2FUWl%2BdjhKZszcyzQ9bL6rPjDtSm76wqiqyTXDIix%2BUsv7ZpB%2BToPCs7jaXLKF0vmRqVGMfUZ8gnZFN7LMrV5oohGFjWfy8yqCgphaR8%2Bp96rtH%2B0Ku0FQlDNZ7nFMJb3m7OXBdYgyTr5ehVCuLxb9%2BxzacjwwZkKtJiP3bscpUggkoAMEv6A6zvzSSm8VWEBDr2%2FnbmZRMRYyJeZguYBJghthhGubB2ZVxVb9PNMf4XhVSBjI4Nb31WH4IiSpTSf9ZJ2X6HvsalpL%2Bq1ryv%2B51VMnkYzRBVrMgFT%2FteZD5w3V6gtrtOnXcGjc3y2Bs44lEmR5WPA4c6cbPwcm4R1ceskvmkYnytE8p1%2FI0AgjHVR8vvjYq46vpJw%2BfWJwR%2BmV3TXC1UTjxjyItCQDDqkTqSIuSKDDRwpXEBjqkAdqFRm1qfGEGl%2Bfdho8HVxMSACHjQ244OopOHAa3Xwu%2BV9JQd6nZXm12wzauOB3zt0x%2Fqvzd7XpLkSR6zFyGEO4ZwfD8Dn9UKs321QKIAJE6WtJwus0Uhi9ho2ZnrzjkTvUZrXeETQU7tDF7LlNRk3dPw9jXEKt%2BDax3Gmc%2Bvp22rgAvZl4kfX5PsVbNwRy%2FMKdspmRfEd6LMEKagJz5ASQOvprN&X-Amz-Signature=d714a636cff8aa9544367ecf84729a507ec55a4b585f17d2e5dbfd754f2bd71c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEAZMWT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCrIr15JhnAFfSBQkTRQqFK1v%2F5nlXfO0rQ3vyH0ITZsgIhAOWcujfGTJLoAUj8cx1cDOP8gY%2F2ILEsvqeJUcqu5nwGKv8DCGgQABoMNjM3NDIzMTgzODA1Igw7aqJofqz%2FdO3tCB8q3AMkcCJW6Rqu7HlJXelsJIJKzWSqyxTuInO76iunt9CSMFZRK5LUCigVLaWkEiim%2FRBEiEaRGzIx1Au1NjqSYIZxpLYbUbiP%2B%2FknjzlwC9aqx4Q%2FN4rAFlLSd2SXIuj8BxMT6fWAjA1H%2F%2FvtNozJMnx3Y7MfSaekg5AIRyQVGxA1FR3F4bXbkb9ITm5U2xhHojqZqqCZfy46yH4lMoxMq1k5Y7YiWeOBLf%2FUWl%2BdjhKZszcyzQ9bL6rPjDtSm76wqiqyTXDIix%2BUsv7ZpB%2BToPCs7jaXLKF0vmRqVGMfUZ8gnZFN7LMrV5oohGFjWfy8yqCgphaR8%2Bp96rtH%2B0Ku0FQlDNZ7nFMJb3m7OXBdYgyTr5ehVCuLxb9%2BxzacjwwZkKtJiP3bscpUggkoAMEv6A6zvzSSm8VWEBDr2%2FnbmZRMRYyJeZguYBJghthhGubB2ZVxVb9PNMf4XhVSBjI4Nb31WH4IiSpTSf9ZJ2X6HvsalpL%2Bq1ryv%2B51VMnkYzRBVrMgFT%2FteZD5w3V6gtrtOnXcGjc3y2Bs44lEmR5WPA4c6cbPwcm4R1ceskvmkYnytE8p1%2FI0AgjHVR8vvjYq46vpJw%2BfWJwR%2BmV3TXC1UTjxjyItCQDDqkTqSIuSKDDRwpXEBjqkAdqFRm1qfGEGl%2Bfdho8HVxMSACHjQ244OopOHAa3Xwu%2BV9JQd6nZXm12wzauOB3zt0x%2Fqvzd7XpLkSR6zFyGEO4ZwfD8Dn9UKs321QKIAJE6WtJwus0Uhi9ho2ZnrzjkTvUZrXeETQU7tDF7LlNRk3dPw9jXEKt%2BDax3Gmc%2Bvp22rgAvZl4kfX5PsVbNwRy%2FMKdspmRfEd6LMEKagJz5ASQOvprN&X-Amz-Signature=f2b7cc0969007cb0969cf58bb40345742c33d3a222369f8d09c0586d2bfbf703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEAZMWT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCrIr15JhnAFfSBQkTRQqFK1v%2F5nlXfO0rQ3vyH0ITZsgIhAOWcujfGTJLoAUj8cx1cDOP8gY%2F2ILEsvqeJUcqu5nwGKv8DCGgQABoMNjM3NDIzMTgzODA1Igw7aqJofqz%2FdO3tCB8q3AMkcCJW6Rqu7HlJXelsJIJKzWSqyxTuInO76iunt9CSMFZRK5LUCigVLaWkEiim%2FRBEiEaRGzIx1Au1NjqSYIZxpLYbUbiP%2B%2FknjzlwC9aqx4Q%2FN4rAFlLSd2SXIuj8BxMT6fWAjA1H%2F%2FvtNozJMnx3Y7MfSaekg5AIRyQVGxA1FR3F4bXbkb9ITm5U2xhHojqZqqCZfy46yH4lMoxMq1k5Y7YiWeOBLf%2FUWl%2BdjhKZszcyzQ9bL6rPjDtSm76wqiqyTXDIix%2BUsv7ZpB%2BToPCs7jaXLKF0vmRqVGMfUZ8gnZFN7LMrV5oohGFjWfy8yqCgphaR8%2Bp96rtH%2B0Ku0FQlDNZ7nFMJb3m7OXBdYgyTr5ehVCuLxb9%2BxzacjwwZkKtJiP3bscpUggkoAMEv6A6zvzSSm8VWEBDr2%2FnbmZRMRYyJeZguYBJghthhGubB2ZVxVb9PNMf4XhVSBjI4Nb31WH4IiSpTSf9ZJ2X6HvsalpL%2Bq1ryv%2B51VMnkYzRBVrMgFT%2FteZD5w3V6gtrtOnXcGjc3y2Bs44lEmR5WPA4c6cbPwcm4R1ceskvmkYnytE8p1%2FI0AgjHVR8vvjYq46vpJw%2BfWJwR%2BmV3TXC1UTjxjyItCQDDqkTqSIuSKDDRwpXEBjqkAdqFRm1qfGEGl%2Bfdho8HVxMSACHjQ244OopOHAa3Xwu%2BV9JQd6nZXm12wzauOB3zt0x%2Fqvzd7XpLkSR6zFyGEO4ZwfD8Dn9UKs321QKIAJE6WtJwus0Uhi9ho2ZnrzjkTvUZrXeETQU7tDF7LlNRk3dPw9jXEKt%2BDax3Gmc%2Bvp22rgAvZl4kfX5PsVbNwRy%2FMKdspmRfEd6LMEKagJz5ASQOvprN&X-Amz-Signature=c39310c60d2e5c92f8cd0c4ccc13c3a33ad418ed5f27271157c8911f37a092d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
