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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73DGV5H%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2VDLSm%2BS7QgV%2B4WhTFtvrcXIteE8Y5pxICctNQG9a6AiEAyc47UrTqDYjDsRGSCef65050gpw7Bk1%2BAWu5ZhnfEGQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BLW5q%2FgnO6f%2Bg68SrcA92VW0z5FBiol0VKZ%2FuHgahPoC1iUIoV91lZ69T7OlHz1glkGS032p8GgszVJarASBGBXPW%2Fm5shLDpXmpYrIyYQZlwqN9FuZKEICVpuzvYWc6OmQu2dorQSVgXMoKeAdkhhA67uS1xfU6umVbz42Ku7D2xRILslPo1J8LGVYRqwfAL2J6IC0QgZ4irjFqkYmcL8dTtCOPAK9HrPyN5XaRC8lBrQXkQycgYri9LlliQXdzsPvtm6%2FRF47W1Dat5z1oWIslOKQDTh3pEw8eugOhFHWeex0XCPf81PEtJYi6tWQI35fA86zlP85yf61ebliJb1lOyE3hsNCdaCgIwMHRr6tQMME53M2QWYmlm05%2BIplTk%2BL1dlUXEZz5GHoT%2Fs%2B7NwtBgutDalq1bUdlAAd%2BADJMH%2F8z3U5ADTCTZ1tTZeI01OFxQphtIq929W5ZvrmTlr%2FBfT8AsWPdrAw%2BXoegWILeyz60GVj8v07It4aFlZD4yjWKOp0yDEColsrsRYiYp8FgsGiEgSkIN5RXVoBSwtc1ksFBLsf%2FIlgXarSwp73hzs8jydLILN17ZMwOag2uTrSTkr8Yi3bPHVuVsD1rsXUxGFjJUaLetvqD6dx%2Fqz6If2ySux4kDgrNTXMIWVkr4GOqUBpnehmsNds6GZ4%2BOw7ly0L4I80lOKIXxJZtQBIgmM7itRcSnKy5E0jL1C3fwWPtq4IUCybJTnLs5vzhQSLmVS3T0baQ8ITeVNQG9rpURdrpaHEYOB9%2FmpAR7Jui9QeuXn0idVxjwLgnba75MYISMj3p%2BDV%2Fctf4d3JgT7T8M21t5gJ6ywlRjtKJjPDqBmNW3e58ijIKHCDnfwhA6RD1BRcpwANLVf&X-Amz-Signature=7761651e1349113c628ecce9757f9f6a56ad12edce3f145f5302a8252f3d2808&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73DGV5H%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2VDLSm%2BS7QgV%2B4WhTFtvrcXIteE8Y5pxICctNQG9a6AiEAyc47UrTqDYjDsRGSCef65050gpw7Bk1%2BAWu5ZhnfEGQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BLW5q%2FgnO6f%2Bg68SrcA92VW0z5FBiol0VKZ%2FuHgahPoC1iUIoV91lZ69T7OlHz1glkGS032p8GgszVJarASBGBXPW%2Fm5shLDpXmpYrIyYQZlwqN9FuZKEICVpuzvYWc6OmQu2dorQSVgXMoKeAdkhhA67uS1xfU6umVbz42Ku7D2xRILslPo1J8LGVYRqwfAL2J6IC0QgZ4irjFqkYmcL8dTtCOPAK9HrPyN5XaRC8lBrQXkQycgYri9LlliQXdzsPvtm6%2FRF47W1Dat5z1oWIslOKQDTh3pEw8eugOhFHWeex0XCPf81PEtJYi6tWQI35fA86zlP85yf61ebliJb1lOyE3hsNCdaCgIwMHRr6tQMME53M2QWYmlm05%2BIplTk%2BL1dlUXEZz5GHoT%2Fs%2B7NwtBgutDalq1bUdlAAd%2BADJMH%2F8z3U5ADTCTZ1tTZeI01OFxQphtIq929W5ZvrmTlr%2FBfT8AsWPdrAw%2BXoegWILeyz60GVj8v07It4aFlZD4yjWKOp0yDEColsrsRYiYp8FgsGiEgSkIN5RXVoBSwtc1ksFBLsf%2FIlgXarSwp73hzs8jydLILN17ZMwOag2uTrSTkr8Yi3bPHVuVsD1rsXUxGFjJUaLetvqD6dx%2Fqz6If2ySux4kDgrNTXMIWVkr4GOqUBpnehmsNds6GZ4%2BOw7ly0L4I80lOKIXxJZtQBIgmM7itRcSnKy5E0jL1C3fwWPtq4IUCybJTnLs5vzhQSLmVS3T0baQ8ITeVNQG9rpURdrpaHEYOB9%2FmpAR7Jui9QeuXn0idVxjwLgnba75MYISMj3p%2BDV%2Fctf4d3JgT7T8M21t5gJ6ywlRjtKJjPDqBmNW3e58ijIKHCDnfwhA6RD1BRcpwANLVf&X-Amz-Signature=886c94d9b83648562487d6e601cfaa617248ebcf72fe6bcbb9641a0603bd9c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73DGV5H%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2VDLSm%2BS7QgV%2B4WhTFtvrcXIteE8Y5pxICctNQG9a6AiEAyc47UrTqDYjDsRGSCef65050gpw7Bk1%2BAWu5ZhnfEGQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BLW5q%2FgnO6f%2Bg68SrcA92VW0z5FBiol0VKZ%2FuHgahPoC1iUIoV91lZ69T7OlHz1glkGS032p8GgszVJarASBGBXPW%2Fm5shLDpXmpYrIyYQZlwqN9FuZKEICVpuzvYWc6OmQu2dorQSVgXMoKeAdkhhA67uS1xfU6umVbz42Ku7D2xRILslPo1J8LGVYRqwfAL2J6IC0QgZ4irjFqkYmcL8dTtCOPAK9HrPyN5XaRC8lBrQXkQycgYri9LlliQXdzsPvtm6%2FRF47W1Dat5z1oWIslOKQDTh3pEw8eugOhFHWeex0XCPf81PEtJYi6tWQI35fA86zlP85yf61ebliJb1lOyE3hsNCdaCgIwMHRr6tQMME53M2QWYmlm05%2BIplTk%2BL1dlUXEZz5GHoT%2Fs%2B7NwtBgutDalq1bUdlAAd%2BADJMH%2F8z3U5ADTCTZ1tTZeI01OFxQphtIq929W5ZvrmTlr%2FBfT8AsWPdrAw%2BXoegWILeyz60GVj8v07It4aFlZD4yjWKOp0yDEColsrsRYiYp8FgsGiEgSkIN5RXVoBSwtc1ksFBLsf%2FIlgXarSwp73hzs8jydLILN17ZMwOag2uTrSTkr8Yi3bPHVuVsD1rsXUxGFjJUaLetvqD6dx%2Fqz6If2ySux4kDgrNTXMIWVkr4GOqUBpnehmsNds6GZ4%2BOw7ly0L4I80lOKIXxJZtQBIgmM7itRcSnKy5E0jL1C3fwWPtq4IUCybJTnLs5vzhQSLmVS3T0baQ8ITeVNQG9rpURdrpaHEYOB9%2FmpAR7Jui9QeuXn0idVxjwLgnba75MYISMj3p%2BDV%2Fctf4d3JgT7T8M21t5gJ6ywlRjtKJjPDqBmNW3e58ijIKHCDnfwhA6RD1BRcpwANLVf&X-Amz-Signature=a429369b8fe6f92a228a7d1659742d9e558c1c62ed150af42694408e77c535c1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73DGV5H%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2VDLSm%2BS7QgV%2B4WhTFtvrcXIteE8Y5pxICctNQG9a6AiEAyc47UrTqDYjDsRGSCef65050gpw7Bk1%2BAWu5ZhnfEGQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BLW5q%2FgnO6f%2Bg68SrcA92VW0z5FBiol0VKZ%2FuHgahPoC1iUIoV91lZ69T7OlHz1glkGS032p8GgszVJarASBGBXPW%2Fm5shLDpXmpYrIyYQZlwqN9FuZKEICVpuzvYWc6OmQu2dorQSVgXMoKeAdkhhA67uS1xfU6umVbz42Ku7D2xRILslPo1J8LGVYRqwfAL2J6IC0QgZ4irjFqkYmcL8dTtCOPAK9HrPyN5XaRC8lBrQXkQycgYri9LlliQXdzsPvtm6%2FRF47W1Dat5z1oWIslOKQDTh3pEw8eugOhFHWeex0XCPf81PEtJYi6tWQI35fA86zlP85yf61ebliJb1lOyE3hsNCdaCgIwMHRr6tQMME53M2QWYmlm05%2BIplTk%2BL1dlUXEZz5GHoT%2Fs%2B7NwtBgutDalq1bUdlAAd%2BADJMH%2F8z3U5ADTCTZ1tTZeI01OFxQphtIq929W5ZvrmTlr%2FBfT8AsWPdrAw%2BXoegWILeyz60GVj8v07It4aFlZD4yjWKOp0yDEColsrsRYiYp8FgsGiEgSkIN5RXVoBSwtc1ksFBLsf%2FIlgXarSwp73hzs8jydLILN17ZMwOag2uTrSTkr8Yi3bPHVuVsD1rsXUxGFjJUaLetvqD6dx%2Fqz6If2ySux4kDgrNTXMIWVkr4GOqUBpnehmsNds6GZ4%2BOw7ly0L4I80lOKIXxJZtQBIgmM7itRcSnKy5E0jL1C3fwWPtq4IUCybJTnLs5vzhQSLmVS3T0baQ8ITeVNQG9rpURdrpaHEYOB9%2FmpAR7Jui9QeuXn0idVxjwLgnba75MYISMj3p%2BDV%2Fctf4d3JgT7T8M21t5gJ6ywlRjtKJjPDqBmNW3e58ijIKHCDnfwhA6RD1BRcpwANLVf&X-Amz-Signature=87451540ee0fdd5b0f2657f568119847b60e8abc83cad082e2522195baeabdb5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73DGV5H%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2VDLSm%2BS7QgV%2B4WhTFtvrcXIteE8Y5pxICctNQG9a6AiEAyc47UrTqDYjDsRGSCef65050gpw7Bk1%2BAWu5ZhnfEGQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BLW5q%2FgnO6f%2Bg68SrcA92VW0z5FBiol0VKZ%2FuHgahPoC1iUIoV91lZ69T7OlHz1glkGS032p8GgszVJarASBGBXPW%2Fm5shLDpXmpYrIyYQZlwqN9FuZKEICVpuzvYWc6OmQu2dorQSVgXMoKeAdkhhA67uS1xfU6umVbz42Ku7D2xRILslPo1J8LGVYRqwfAL2J6IC0QgZ4irjFqkYmcL8dTtCOPAK9HrPyN5XaRC8lBrQXkQycgYri9LlliQXdzsPvtm6%2FRF47W1Dat5z1oWIslOKQDTh3pEw8eugOhFHWeex0XCPf81PEtJYi6tWQI35fA86zlP85yf61ebliJb1lOyE3hsNCdaCgIwMHRr6tQMME53M2QWYmlm05%2BIplTk%2BL1dlUXEZz5GHoT%2Fs%2B7NwtBgutDalq1bUdlAAd%2BADJMH%2F8z3U5ADTCTZ1tTZeI01OFxQphtIq929W5ZvrmTlr%2FBfT8AsWPdrAw%2BXoegWILeyz60GVj8v07It4aFlZD4yjWKOp0yDEColsrsRYiYp8FgsGiEgSkIN5RXVoBSwtc1ksFBLsf%2FIlgXarSwp73hzs8jydLILN17ZMwOag2uTrSTkr8Yi3bPHVuVsD1rsXUxGFjJUaLetvqD6dx%2Fqz6If2ySux4kDgrNTXMIWVkr4GOqUBpnehmsNds6GZ4%2BOw7ly0L4I80lOKIXxJZtQBIgmM7itRcSnKy5E0jL1C3fwWPtq4IUCybJTnLs5vzhQSLmVS3T0baQ8ITeVNQG9rpURdrpaHEYOB9%2FmpAR7Jui9QeuXn0idVxjwLgnba75MYISMj3p%2BDV%2Fctf4d3JgT7T8M21t5gJ6ywlRjtKJjPDqBmNW3e58ijIKHCDnfwhA6RD1BRcpwANLVf&X-Amz-Signature=89f1af2a672d16313676075e62542ea1c284ae2a94ff0b908a8dd4f319a7ff4c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73DGV5H%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2VDLSm%2BS7QgV%2B4WhTFtvrcXIteE8Y5pxICctNQG9a6AiEAyc47UrTqDYjDsRGSCef65050gpw7Bk1%2BAWu5ZhnfEGQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BLW5q%2FgnO6f%2Bg68SrcA92VW0z5FBiol0VKZ%2FuHgahPoC1iUIoV91lZ69T7OlHz1glkGS032p8GgszVJarASBGBXPW%2Fm5shLDpXmpYrIyYQZlwqN9FuZKEICVpuzvYWc6OmQu2dorQSVgXMoKeAdkhhA67uS1xfU6umVbz42Ku7D2xRILslPo1J8LGVYRqwfAL2J6IC0QgZ4irjFqkYmcL8dTtCOPAK9HrPyN5XaRC8lBrQXkQycgYri9LlliQXdzsPvtm6%2FRF47W1Dat5z1oWIslOKQDTh3pEw8eugOhFHWeex0XCPf81PEtJYi6tWQI35fA86zlP85yf61ebliJb1lOyE3hsNCdaCgIwMHRr6tQMME53M2QWYmlm05%2BIplTk%2BL1dlUXEZz5GHoT%2Fs%2B7NwtBgutDalq1bUdlAAd%2BADJMH%2F8z3U5ADTCTZ1tTZeI01OFxQphtIq929W5ZvrmTlr%2FBfT8AsWPdrAw%2BXoegWILeyz60GVj8v07It4aFlZD4yjWKOp0yDEColsrsRYiYp8FgsGiEgSkIN5RXVoBSwtc1ksFBLsf%2FIlgXarSwp73hzs8jydLILN17ZMwOag2uTrSTkr8Yi3bPHVuVsD1rsXUxGFjJUaLetvqD6dx%2Fqz6If2ySux4kDgrNTXMIWVkr4GOqUBpnehmsNds6GZ4%2BOw7ly0L4I80lOKIXxJZtQBIgmM7itRcSnKy5E0jL1C3fwWPtq4IUCybJTnLs5vzhQSLmVS3T0baQ8ITeVNQG9rpURdrpaHEYOB9%2FmpAR7Jui9QeuXn0idVxjwLgnba75MYISMj3p%2BDV%2Fctf4d3JgT7T8M21t5gJ6ywlRjtKJjPDqBmNW3e58ijIKHCDnfwhA6RD1BRcpwANLVf&X-Amz-Signature=dc55dd9891a3336798bf51f29244d3067611e271faadb4d5cb8ad6bcd071f4d3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z73DGV5H%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2VDLSm%2BS7QgV%2B4WhTFtvrcXIteE8Y5pxICctNQG9a6AiEAyc47UrTqDYjDsRGSCef65050gpw7Bk1%2BAWu5ZhnfEGQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BLW5q%2FgnO6f%2Bg68SrcA92VW0z5FBiol0VKZ%2FuHgahPoC1iUIoV91lZ69T7OlHz1glkGS032p8GgszVJarASBGBXPW%2Fm5shLDpXmpYrIyYQZlwqN9FuZKEICVpuzvYWc6OmQu2dorQSVgXMoKeAdkhhA67uS1xfU6umVbz42Ku7D2xRILslPo1J8LGVYRqwfAL2J6IC0QgZ4irjFqkYmcL8dTtCOPAK9HrPyN5XaRC8lBrQXkQycgYri9LlliQXdzsPvtm6%2FRF47W1Dat5z1oWIslOKQDTh3pEw8eugOhFHWeex0XCPf81PEtJYi6tWQI35fA86zlP85yf61ebliJb1lOyE3hsNCdaCgIwMHRr6tQMME53M2QWYmlm05%2BIplTk%2BL1dlUXEZz5GHoT%2Fs%2B7NwtBgutDalq1bUdlAAd%2BADJMH%2F8z3U5ADTCTZ1tTZeI01OFxQphtIq929W5ZvrmTlr%2FBfT8AsWPdrAw%2BXoegWILeyz60GVj8v07It4aFlZD4yjWKOp0yDEColsrsRYiYp8FgsGiEgSkIN5RXVoBSwtc1ksFBLsf%2FIlgXarSwp73hzs8jydLILN17ZMwOag2uTrSTkr8Yi3bPHVuVsD1rsXUxGFjJUaLetvqD6dx%2Fqz6If2ySux4kDgrNTXMIWVkr4GOqUBpnehmsNds6GZ4%2BOw7ly0L4I80lOKIXxJZtQBIgmM7itRcSnKy5E0jL1C3fwWPtq4IUCybJTnLs5vzhQSLmVS3T0baQ8ITeVNQG9rpURdrpaHEYOB9%2FmpAR7Jui9QeuXn0idVxjwLgnba75MYISMj3p%2BDV%2Fctf4d3JgT7T8M21t5gJ6ywlRjtKJjPDqBmNW3e58ijIKHCDnfwhA6RD1BRcpwANLVf&X-Amz-Signature=c24fe1095cf3c1f002b80c8ed84aafa8bd6f876be658f36651021e55ee262439&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
