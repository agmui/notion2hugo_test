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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EYAWZXK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDU1WSUz5UU48VMZXMsYs2oYR0HW39yZbNlsQmVsFKgHAIgNH9aiDnPCscJ91g93ekp1QJvWIw7ff8wsaEK4M0LwyMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbjoWfEz0TJghjjUCrcAzbTU2Yr%2FqstzTQ7ih9onfUAG1dL2eYCGjunaRrUbMw3EIQIeJNjVuqO93Q6n6vLiLawvjPsIBOOU1emnWs7L8YVJxWIufvzORUVVIuxw2EHQUthSbMQ8KyOtUdxMbRPJDcdaoTHsTi9Ergpf1eci8UuNjpapv0LcavclyeeKruKEBWQz2wFghzmxkTSrM5qVzMhtWBvOuifchirjDcKhG87741a64VrSXpsj0CyIDYPkMJG6C2LurolosuNU7DcD3qnjh0s85YZgJM3%2BvopeRpbuNH1eS9x3jxnjV5Eay4P7pbcr2QPum0o9jsguWBgSqIa5AtCsxO%2BcsRDVZmGV%2BCj8fvCiX%2FPUeSwLAJdHR%2BYrBIZLvXXpK1OGN7mK5ojSdIESAvqod8zkI%2FRvVHnAQrfjzh5t8uWih5j2f5UiaMXDJCBBtZw2PBkb73EMni8xfHI6sa0Nx%2FH3oJ4ZIpOlg3whxZSJoq4G5A7d5L3bwvuLCAlLusNoHSWUEf8BO2%2F%2F7cu7FvwBiK%2BGDaq2FZb%2B164dTdzbfDPDzTjdSlNix5uFRr35W3nyxaN%2FJTGmIYnptdqqEzl%2FU5uOCF5hozCycmjpbUSjsS36VJk0Wz60ukjxl5VTo7U4pwq1K7PMKPz%2Fr4GOqUB74c3g%2BJ6IzCDfIQX6XntAsUSPgpOol8FvND04XzIXDT%2Fi8mdmKpjFs%2FMbty4Bb90Yq41qPZHh7hXKUQbFEFk7kpZAInOTvYMpTg4oFUDybLRpGOmvoXnzJEmS543WvPYbm%2BF79ChQBHOQflfBmibsLoVKi2Unt9tnd5QSSRYqz9WcD6CrJ67apvLP4KXaN2YBQbTLzQSAvc5oo0isVmPz1y7c1MK&X-Amz-Signature=69870276c3fb56a6d2b9b07f97e5a2a1fdec36ff9571aadc5a654449a9cc9e20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EYAWZXK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDU1WSUz5UU48VMZXMsYs2oYR0HW39yZbNlsQmVsFKgHAIgNH9aiDnPCscJ91g93ekp1QJvWIw7ff8wsaEK4M0LwyMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbjoWfEz0TJghjjUCrcAzbTU2Yr%2FqstzTQ7ih9onfUAG1dL2eYCGjunaRrUbMw3EIQIeJNjVuqO93Q6n6vLiLawvjPsIBOOU1emnWs7L8YVJxWIufvzORUVVIuxw2EHQUthSbMQ8KyOtUdxMbRPJDcdaoTHsTi9Ergpf1eci8UuNjpapv0LcavclyeeKruKEBWQz2wFghzmxkTSrM5qVzMhtWBvOuifchirjDcKhG87741a64VrSXpsj0CyIDYPkMJG6C2LurolosuNU7DcD3qnjh0s85YZgJM3%2BvopeRpbuNH1eS9x3jxnjV5Eay4P7pbcr2QPum0o9jsguWBgSqIa5AtCsxO%2BcsRDVZmGV%2BCj8fvCiX%2FPUeSwLAJdHR%2BYrBIZLvXXpK1OGN7mK5ojSdIESAvqod8zkI%2FRvVHnAQrfjzh5t8uWih5j2f5UiaMXDJCBBtZw2PBkb73EMni8xfHI6sa0Nx%2FH3oJ4ZIpOlg3whxZSJoq4G5A7d5L3bwvuLCAlLusNoHSWUEf8BO2%2F%2F7cu7FvwBiK%2BGDaq2FZb%2B164dTdzbfDPDzTjdSlNix5uFRr35W3nyxaN%2FJTGmIYnptdqqEzl%2FU5uOCF5hozCycmjpbUSjsS36VJk0Wz60ukjxl5VTo7U4pwq1K7PMKPz%2Fr4GOqUB74c3g%2BJ6IzCDfIQX6XntAsUSPgpOol8FvND04XzIXDT%2Fi8mdmKpjFs%2FMbty4Bb90Yq41qPZHh7hXKUQbFEFk7kpZAInOTvYMpTg4oFUDybLRpGOmvoXnzJEmS543WvPYbm%2BF79ChQBHOQflfBmibsLoVKi2Unt9tnd5QSSRYqz9WcD6CrJ67apvLP4KXaN2YBQbTLzQSAvc5oo0isVmPz1y7c1MK&X-Amz-Signature=ef171d9d9b9c75b7450b8ad4b242607602e92f483b24d62ebc7e08f0a07f5b86&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EYAWZXK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDU1WSUz5UU48VMZXMsYs2oYR0HW39yZbNlsQmVsFKgHAIgNH9aiDnPCscJ91g93ekp1QJvWIw7ff8wsaEK4M0LwyMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbjoWfEz0TJghjjUCrcAzbTU2Yr%2FqstzTQ7ih9onfUAG1dL2eYCGjunaRrUbMw3EIQIeJNjVuqO93Q6n6vLiLawvjPsIBOOU1emnWs7L8YVJxWIufvzORUVVIuxw2EHQUthSbMQ8KyOtUdxMbRPJDcdaoTHsTi9Ergpf1eci8UuNjpapv0LcavclyeeKruKEBWQz2wFghzmxkTSrM5qVzMhtWBvOuifchirjDcKhG87741a64VrSXpsj0CyIDYPkMJG6C2LurolosuNU7DcD3qnjh0s85YZgJM3%2BvopeRpbuNH1eS9x3jxnjV5Eay4P7pbcr2QPum0o9jsguWBgSqIa5AtCsxO%2BcsRDVZmGV%2BCj8fvCiX%2FPUeSwLAJdHR%2BYrBIZLvXXpK1OGN7mK5ojSdIESAvqod8zkI%2FRvVHnAQrfjzh5t8uWih5j2f5UiaMXDJCBBtZw2PBkb73EMni8xfHI6sa0Nx%2FH3oJ4ZIpOlg3whxZSJoq4G5A7d5L3bwvuLCAlLusNoHSWUEf8BO2%2F%2F7cu7FvwBiK%2BGDaq2FZb%2B164dTdzbfDPDzTjdSlNix5uFRr35W3nyxaN%2FJTGmIYnptdqqEzl%2FU5uOCF5hozCycmjpbUSjsS36VJk0Wz60ukjxl5VTo7U4pwq1K7PMKPz%2Fr4GOqUB74c3g%2BJ6IzCDfIQX6XntAsUSPgpOol8FvND04XzIXDT%2Fi8mdmKpjFs%2FMbty4Bb90Yq41qPZHh7hXKUQbFEFk7kpZAInOTvYMpTg4oFUDybLRpGOmvoXnzJEmS543WvPYbm%2BF79ChQBHOQflfBmibsLoVKi2Unt9tnd5QSSRYqz9WcD6CrJ67apvLP4KXaN2YBQbTLzQSAvc5oo0isVmPz1y7c1MK&X-Amz-Signature=1673b4916e76acbf8510d80344acb02724757222d72a80c2eac28f04976056fd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EYAWZXK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDU1WSUz5UU48VMZXMsYs2oYR0HW39yZbNlsQmVsFKgHAIgNH9aiDnPCscJ91g93ekp1QJvWIw7ff8wsaEK4M0LwyMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbjoWfEz0TJghjjUCrcAzbTU2Yr%2FqstzTQ7ih9onfUAG1dL2eYCGjunaRrUbMw3EIQIeJNjVuqO93Q6n6vLiLawvjPsIBOOU1emnWs7L8YVJxWIufvzORUVVIuxw2EHQUthSbMQ8KyOtUdxMbRPJDcdaoTHsTi9Ergpf1eci8UuNjpapv0LcavclyeeKruKEBWQz2wFghzmxkTSrM5qVzMhtWBvOuifchirjDcKhG87741a64VrSXpsj0CyIDYPkMJG6C2LurolosuNU7DcD3qnjh0s85YZgJM3%2BvopeRpbuNH1eS9x3jxnjV5Eay4P7pbcr2QPum0o9jsguWBgSqIa5AtCsxO%2BcsRDVZmGV%2BCj8fvCiX%2FPUeSwLAJdHR%2BYrBIZLvXXpK1OGN7mK5ojSdIESAvqod8zkI%2FRvVHnAQrfjzh5t8uWih5j2f5UiaMXDJCBBtZw2PBkb73EMni8xfHI6sa0Nx%2FH3oJ4ZIpOlg3whxZSJoq4G5A7d5L3bwvuLCAlLusNoHSWUEf8BO2%2F%2F7cu7FvwBiK%2BGDaq2FZb%2B164dTdzbfDPDzTjdSlNix5uFRr35W3nyxaN%2FJTGmIYnptdqqEzl%2FU5uOCF5hozCycmjpbUSjsS36VJk0Wz60ukjxl5VTo7U4pwq1K7PMKPz%2Fr4GOqUB74c3g%2BJ6IzCDfIQX6XntAsUSPgpOol8FvND04XzIXDT%2Fi8mdmKpjFs%2FMbty4Bb90Yq41qPZHh7hXKUQbFEFk7kpZAInOTvYMpTg4oFUDybLRpGOmvoXnzJEmS543WvPYbm%2BF79ChQBHOQflfBmibsLoVKi2Unt9tnd5QSSRYqz9WcD6CrJ67apvLP4KXaN2YBQbTLzQSAvc5oo0isVmPz1y7c1MK&X-Amz-Signature=9c84dae688ec07f92703a634dc91f852d6224352879d37288d6fadbbda792a33&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EYAWZXK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDU1WSUz5UU48VMZXMsYs2oYR0HW39yZbNlsQmVsFKgHAIgNH9aiDnPCscJ91g93ekp1QJvWIw7ff8wsaEK4M0LwyMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbjoWfEz0TJghjjUCrcAzbTU2Yr%2FqstzTQ7ih9onfUAG1dL2eYCGjunaRrUbMw3EIQIeJNjVuqO93Q6n6vLiLawvjPsIBOOU1emnWs7L8YVJxWIufvzORUVVIuxw2EHQUthSbMQ8KyOtUdxMbRPJDcdaoTHsTi9Ergpf1eci8UuNjpapv0LcavclyeeKruKEBWQz2wFghzmxkTSrM5qVzMhtWBvOuifchirjDcKhG87741a64VrSXpsj0CyIDYPkMJG6C2LurolosuNU7DcD3qnjh0s85YZgJM3%2BvopeRpbuNH1eS9x3jxnjV5Eay4P7pbcr2QPum0o9jsguWBgSqIa5AtCsxO%2BcsRDVZmGV%2BCj8fvCiX%2FPUeSwLAJdHR%2BYrBIZLvXXpK1OGN7mK5ojSdIESAvqod8zkI%2FRvVHnAQrfjzh5t8uWih5j2f5UiaMXDJCBBtZw2PBkb73EMni8xfHI6sa0Nx%2FH3oJ4ZIpOlg3whxZSJoq4G5A7d5L3bwvuLCAlLusNoHSWUEf8BO2%2F%2F7cu7FvwBiK%2BGDaq2FZb%2B164dTdzbfDPDzTjdSlNix5uFRr35W3nyxaN%2FJTGmIYnptdqqEzl%2FU5uOCF5hozCycmjpbUSjsS36VJk0Wz60ukjxl5VTo7U4pwq1K7PMKPz%2Fr4GOqUB74c3g%2BJ6IzCDfIQX6XntAsUSPgpOol8FvND04XzIXDT%2Fi8mdmKpjFs%2FMbty4Bb90Yq41qPZHh7hXKUQbFEFk7kpZAInOTvYMpTg4oFUDybLRpGOmvoXnzJEmS543WvPYbm%2BF79ChQBHOQflfBmibsLoVKi2Unt9tnd5QSSRYqz9WcD6CrJ67apvLP4KXaN2YBQbTLzQSAvc5oo0isVmPz1y7c1MK&X-Amz-Signature=5c9a35182122611b410257519232aca6cc5531f41f7bbaaccc78d629ae493c55&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EYAWZXK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDU1WSUz5UU48VMZXMsYs2oYR0HW39yZbNlsQmVsFKgHAIgNH9aiDnPCscJ91g93ekp1QJvWIw7ff8wsaEK4M0LwyMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbjoWfEz0TJghjjUCrcAzbTU2Yr%2FqstzTQ7ih9onfUAG1dL2eYCGjunaRrUbMw3EIQIeJNjVuqO93Q6n6vLiLawvjPsIBOOU1emnWs7L8YVJxWIufvzORUVVIuxw2EHQUthSbMQ8KyOtUdxMbRPJDcdaoTHsTi9Ergpf1eci8UuNjpapv0LcavclyeeKruKEBWQz2wFghzmxkTSrM5qVzMhtWBvOuifchirjDcKhG87741a64VrSXpsj0CyIDYPkMJG6C2LurolosuNU7DcD3qnjh0s85YZgJM3%2BvopeRpbuNH1eS9x3jxnjV5Eay4P7pbcr2QPum0o9jsguWBgSqIa5AtCsxO%2BcsRDVZmGV%2BCj8fvCiX%2FPUeSwLAJdHR%2BYrBIZLvXXpK1OGN7mK5ojSdIESAvqod8zkI%2FRvVHnAQrfjzh5t8uWih5j2f5UiaMXDJCBBtZw2PBkb73EMni8xfHI6sa0Nx%2FH3oJ4ZIpOlg3whxZSJoq4G5A7d5L3bwvuLCAlLusNoHSWUEf8BO2%2F%2F7cu7FvwBiK%2BGDaq2FZb%2B164dTdzbfDPDzTjdSlNix5uFRr35W3nyxaN%2FJTGmIYnptdqqEzl%2FU5uOCF5hozCycmjpbUSjsS36VJk0Wz60ukjxl5VTo7U4pwq1K7PMKPz%2Fr4GOqUB74c3g%2BJ6IzCDfIQX6XntAsUSPgpOol8FvND04XzIXDT%2Fi8mdmKpjFs%2FMbty4Bb90Yq41qPZHh7hXKUQbFEFk7kpZAInOTvYMpTg4oFUDybLRpGOmvoXnzJEmS543WvPYbm%2BF79ChQBHOQflfBmibsLoVKi2Unt9tnd5QSSRYqz9WcD6CrJ67apvLP4KXaN2YBQbTLzQSAvc5oo0isVmPz1y7c1MK&X-Amz-Signature=851dcccfd117322cc0026f29432e0453595b3fff85862a0cc5bbe745fd613905&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EYAWZXK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T090740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDU1WSUz5UU48VMZXMsYs2oYR0HW39yZbNlsQmVsFKgHAIgNH9aiDnPCscJ91g93ekp1QJvWIw7ff8wsaEK4M0LwyMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbjoWfEz0TJghjjUCrcAzbTU2Yr%2FqstzTQ7ih9onfUAG1dL2eYCGjunaRrUbMw3EIQIeJNjVuqO93Q6n6vLiLawvjPsIBOOU1emnWs7L8YVJxWIufvzORUVVIuxw2EHQUthSbMQ8KyOtUdxMbRPJDcdaoTHsTi9Ergpf1eci8UuNjpapv0LcavclyeeKruKEBWQz2wFghzmxkTSrM5qVzMhtWBvOuifchirjDcKhG87741a64VrSXpsj0CyIDYPkMJG6C2LurolosuNU7DcD3qnjh0s85YZgJM3%2BvopeRpbuNH1eS9x3jxnjV5Eay4P7pbcr2QPum0o9jsguWBgSqIa5AtCsxO%2BcsRDVZmGV%2BCj8fvCiX%2FPUeSwLAJdHR%2BYrBIZLvXXpK1OGN7mK5ojSdIESAvqod8zkI%2FRvVHnAQrfjzh5t8uWih5j2f5UiaMXDJCBBtZw2PBkb73EMni8xfHI6sa0Nx%2FH3oJ4ZIpOlg3whxZSJoq4G5A7d5L3bwvuLCAlLusNoHSWUEf8BO2%2F%2F7cu7FvwBiK%2BGDaq2FZb%2B164dTdzbfDPDzTjdSlNix5uFRr35W3nyxaN%2FJTGmIYnptdqqEzl%2FU5uOCF5hozCycmjpbUSjsS36VJk0Wz60ukjxl5VTo7U4pwq1K7PMKPz%2Fr4GOqUB74c3g%2BJ6IzCDfIQX6XntAsUSPgpOol8FvND04XzIXDT%2Fi8mdmKpjFs%2FMbty4Bb90Yq41qPZHh7hXKUQbFEFk7kpZAInOTvYMpTg4oFUDybLRpGOmvoXnzJEmS543WvPYbm%2BF79ChQBHOQflfBmibsLoVKi2Unt9tnd5QSSRYqz9WcD6CrJ67apvLP4KXaN2YBQbTLzQSAvc5oo0isVmPz1y7c1MK&X-Amz-Signature=45334f1f050d9f44b898b7824b345c1edd1c06d62a70b7cae04cb7fc99b51e86&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
