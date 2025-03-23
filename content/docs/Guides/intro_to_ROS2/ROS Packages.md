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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEOK62EO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJNG5v1pkAmKM0r2mLjpy1ayDn1HZzHnqgkfQLbtacKAiB2jvppjOmqFzwaX5hk129V%2BzRHHtpB8CcNMFxa2JFgbiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNg%2FiMOZWm8AUmT%2BKtwD0o0ZrtIZC%2FlR4kpwZHsHQHX7HMXGZAJYV25DrIKE%2BMB831tEMbRmm6sMlbe68tKHZvoGZxGn5M8OUuNR47Cjh84bVobvOoMdqBq7U0zEVltlXfh9E4uHRjz%2BMjV%2BOl3WjGuuoUnFUkbuDqT9JVy2TUztjg4iFW5%2BZkmL36RqhSbfEskyhxdt6kXSxUjOVWgUBI8GaSYoZuoowepVeAU8FHCjNYhalCJEXNPSdoLHd9mUZOQspzdHb0DK%2FRhyP0QK8tVenvp%2FFZgDKdJJ%2FZVL89raYktKU3kla6kPr9pW3qLi1aP7x9tWHc%2FiER%2FaA3hqK6lKxkwXF7ErRXsQ%2FrWEtroNvO0%2FdTRxGg2VCkNZ2qy8z3eNgk23lGDFNzODsHrMpbKvjoc2d4Sa%2BkQgMvlShmJXVYL8JZ5ZZH%2Bmw8UorrHuoadvqhwlzgKlLUEew0Tkw4DHusqdhb7%2FKXvhh3X3orPiXW0zA3XT9g3D8MJHI2S4%2FY7jpcg0goXlfpt05NuefXlXVlojzU7HCxAFy0L0zxVoqEElWyiFfFeJQLU7zJSqq%2BNR3KMl6dcNIB%2B8CYN4o6PR6Ji5gRgs%2FKaDCC7nQrp%2BRcNp7gi%2BgUAFs%2BGkOct%2BlWH1%2B3SLEUk1wmAw%2BsqBvwY6pgEaoZZfXx2uzU%2BMd5G%2Fi%2F1aytGscBP2HJ%2FrZpSgADZr36iR2eFc5oQ36rvVrmEgb0eXDoNUNL6K9tCQIxCPb9Ji0E0lEZ4gahu4QYob9U0ZUiFdt2TMcjTTW7cxQrcZkQs55%2BmHTnse257XO5D190%2FGGtWUxhqxvs41jZX1nXQYU9Tarm5jxFUvWoX5FS%2FpvBI2K2iz9%2FkCWiin1souvYZ2U212%2FOpQ&X-Amz-Signature=3d24bacbcdab2a713fc63c40f3d2a1dc3ec22a93349f70e51b1fad01d78fd28c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEOK62EO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJNG5v1pkAmKM0r2mLjpy1ayDn1HZzHnqgkfQLbtacKAiB2jvppjOmqFzwaX5hk129V%2BzRHHtpB8CcNMFxa2JFgbiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNg%2FiMOZWm8AUmT%2BKtwD0o0ZrtIZC%2FlR4kpwZHsHQHX7HMXGZAJYV25DrIKE%2BMB831tEMbRmm6sMlbe68tKHZvoGZxGn5M8OUuNR47Cjh84bVobvOoMdqBq7U0zEVltlXfh9E4uHRjz%2BMjV%2BOl3WjGuuoUnFUkbuDqT9JVy2TUztjg4iFW5%2BZkmL36RqhSbfEskyhxdt6kXSxUjOVWgUBI8GaSYoZuoowepVeAU8FHCjNYhalCJEXNPSdoLHd9mUZOQspzdHb0DK%2FRhyP0QK8tVenvp%2FFZgDKdJJ%2FZVL89raYktKU3kla6kPr9pW3qLi1aP7x9tWHc%2FiER%2FaA3hqK6lKxkwXF7ErRXsQ%2FrWEtroNvO0%2FdTRxGg2VCkNZ2qy8z3eNgk23lGDFNzODsHrMpbKvjoc2d4Sa%2BkQgMvlShmJXVYL8JZ5ZZH%2Bmw8UorrHuoadvqhwlzgKlLUEew0Tkw4DHusqdhb7%2FKXvhh3X3orPiXW0zA3XT9g3D8MJHI2S4%2FY7jpcg0goXlfpt05NuefXlXVlojzU7HCxAFy0L0zxVoqEElWyiFfFeJQLU7zJSqq%2BNR3KMl6dcNIB%2B8CYN4o6PR6Ji5gRgs%2FKaDCC7nQrp%2BRcNp7gi%2BgUAFs%2BGkOct%2BlWH1%2B3SLEUk1wmAw%2BsqBvwY6pgEaoZZfXx2uzU%2BMd5G%2Fi%2F1aytGscBP2HJ%2FrZpSgADZr36iR2eFc5oQ36rvVrmEgb0eXDoNUNL6K9tCQIxCPb9Ji0E0lEZ4gahu4QYob9U0ZUiFdt2TMcjTTW7cxQrcZkQs55%2BmHTnse257XO5D190%2FGGtWUxhqxvs41jZX1nXQYU9Tarm5jxFUvWoX5FS%2FpvBI2K2iz9%2FkCWiin1souvYZ2U212%2FOpQ&X-Amz-Signature=3424d26cb0ac8430dea2aec82076d916bde75ac11dcfb62652525f0302dfba31&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEOK62EO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJNG5v1pkAmKM0r2mLjpy1ayDn1HZzHnqgkfQLbtacKAiB2jvppjOmqFzwaX5hk129V%2BzRHHtpB8CcNMFxa2JFgbiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNg%2FiMOZWm8AUmT%2BKtwD0o0ZrtIZC%2FlR4kpwZHsHQHX7HMXGZAJYV25DrIKE%2BMB831tEMbRmm6sMlbe68tKHZvoGZxGn5M8OUuNR47Cjh84bVobvOoMdqBq7U0zEVltlXfh9E4uHRjz%2BMjV%2BOl3WjGuuoUnFUkbuDqT9JVy2TUztjg4iFW5%2BZkmL36RqhSbfEskyhxdt6kXSxUjOVWgUBI8GaSYoZuoowepVeAU8FHCjNYhalCJEXNPSdoLHd9mUZOQspzdHb0DK%2FRhyP0QK8tVenvp%2FFZgDKdJJ%2FZVL89raYktKU3kla6kPr9pW3qLi1aP7x9tWHc%2FiER%2FaA3hqK6lKxkwXF7ErRXsQ%2FrWEtroNvO0%2FdTRxGg2VCkNZ2qy8z3eNgk23lGDFNzODsHrMpbKvjoc2d4Sa%2BkQgMvlShmJXVYL8JZ5ZZH%2Bmw8UorrHuoadvqhwlzgKlLUEew0Tkw4DHusqdhb7%2FKXvhh3X3orPiXW0zA3XT9g3D8MJHI2S4%2FY7jpcg0goXlfpt05NuefXlXVlojzU7HCxAFy0L0zxVoqEElWyiFfFeJQLU7zJSqq%2BNR3KMl6dcNIB%2B8CYN4o6PR6Ji5gRgs%2FKaDCC7nQrp%2BRcNp7gi%2BgUAFs%2BGkOct%2BlWH1%2B3SLEUk1wmAw%2BsqBvwY6pgEaoZZfXx2uzU%2BMd5G%2Fi%2F1aytGscBP2HJ%2FrZpSgADZr36iR2eFc5oQ36rvVrmEgb0eXDoNUNL6K9tCQIxCPb9Ji0E0lEZ4gahu4QYob9U0ZUiFdt2TMcjTTW7cxQrcZkQs55%2BmHTnse257XO5D190%2FGGtWUxhqxvs41jZX1nXQYU9Tarm5jxFUvWoX5FS%2FpvBI2K2iz9%2FkCWiin1souvYZ2U212%2FOpQ&X-Amz-Signature=dfa4d6cfade923b88536427fd9865d3696c756f2810a7986b197d9243854c963&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEOK62EO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJNG5v1pkAmKM0r2mLjpy1ayDn1HZzHnqgkfQLbtacKAiB2jvppjOmqFzwaX5hk129V%2BzRHHtpB8CcNMFxa2JFgbiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNg%2FiMOZWm8AUmT%2BKtwD0o0ZrtIZC%2FlR4kpwZHsHQHX7HMXGZAJYV25DrIKE%2BMB831tEMbRmm6sMlbe68tKHZvoGZxGn5M8OUuNR47Cjh84bVobvOoMdqBq7U0zEVltlXfh9E4uHRjz%2BMjV%2BOl3WjGuuoUnFUkbuDqT9JVy2TUztjg4iFW5%2BZkmL36RqhSbfEskyhxdt6kXSxUjOVWgUBI8GaSYoZuoowepVeAU8FHCjNYhalCJEXNPSdoLHd9mUZOQspzdHb0DK%2FRhyP0QK8tVenvp%2FFZgDKdJJ%2FZVL89raYktKU3kla6kPr9pW3qLi1aP7x9tWHc%2FiER%2FaA3hqK6lKxkwXF7ErRXsQ%2FrWEtroNvO0%2FdTRxGg2VCkNZ2qy8z3eNgk23lGDFNzODsHrMpbKvjoc2d4Sa%2BkQgMvlShmJXVYL8JZ5ZZH%2Bmw8UorrHuoadvqhwlzgKlLUEew0Tkw4DHusqdhb7%2FKXvhh3X3orPiXW0zA3XT9g3D8MJHI2S4%2FY7jpcg0goXlfpt05NuefXlXVlojzU7HCxAFy0L0zxVoqEElWyiFfFeJQLU7zJSqq%2BNR3KMl6dcNIB%2B8CYN4o6PR6Ji5gRgs%2FKaDCC7nQrp%2BRcNp7gi%2BgUAFs%2BGkOct%2BlWH1%2B3SLEUk1wmAw%2BsqBvwY6pgEaoZZfXx2uzU%2BMd5G%2Fi%2F1aytGscBP2HJ%2FrZpSgADZr36iR2eFc5oQ36rvVrmEgb0eXDoNUNL6K9tCQIxCPb9Ji0E0lEZ4gahu4QYob9U0ZUiFdt2TMcjTTW7cxQrcZkQs55%2BmHTnse257XO5D190%2FGGtWUxhqxvs41jZX1nXQYU9Tarm5jxFUvWoX5FS%2FpvBI2K2iz9%2FkCWiin1souvYZ2U212%2FOpQ&X-Amz-Signature=c868f93935ec9b992d34f732ed339a44e85f3232a9df658efa9abffb1737ac45&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEOK62EO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJNG5v1pkAmKM0r2mLjpy1ayDn1HZzHnqgkfQLbtacKAiB2jvppjOmqFzwaX5hk129V%2BzRHHtpB8CcNMFxa2JFgbiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNg%2FiMOZWm8AUmT%2BKtwD0o0ZrtIZC%2FlR4kpwZHsHQHX7HMXGZAJYV25DrIKE%2BMB831tEMbRmm6sMlbe68tKHZvoGZxGn5M8OUuNR47Cjh84bVobvOoMdqBq7U0zEVltlXfh9E4uHRjz%2BMjV%2BOl3WjGuuoUnFUkbuDqT9JVy2TUztjg4iFW5%2BZkmL36RqhSbfEskyhxdt6kXSxUjOVWgUBI8GaSYoZuoowepVeAU8FHCjNYhalCJEXNPSdoLHd9mUZOQspzdHb0DK%2FRhyP0QK8tVenvp%2FFZgDKdJJ%2FZVL89raYktKU3kla6kPr9pW3qLi1aP7x9tWHc%2FiER%2FaA3hqK6lKxkwXF7ErRXsQ%2FrWEtroNvO0%2FdTRxGg2VCkNZ2qy8z3eNgk23lGDFNzODsHrMpbKvjoc2d4Sa%2BkQgMvlShmJXVYL8JZ5ZZH%2Bmw8UorrHuoadvqhwlzgKlLUEew0Tkw4DHusqdhb7%2FKXvhh3X3orPiXW0zA3XT9g3D8MJHI2S4%2FY7jpcg0goXlfpt05NuefXlXVlojzU7HCxAFy0L0zxVoqEElWyiFfFeJQLU7zJSqq%2BNR3KMl6dcNIB%2B8CYN4o6PR6Ji5gRgs%2FKaDCC7nQrp%2BRcNp7gi%2BgUAFs%2BGkOct%2BlWH1%2B3SLEUk1wmAw%2BsqBvwY6pgEaoZZfXx2uzU%2BMd5G%2Fi%2F1aytGscBP2HJ%2FrZpSgADZr36iR2eFc5oQ36rvVrmEgb0eXDoNUNL6K9tCQIxCPb9Ji0E0lEZ4gahu4QYob9U0ZUiFdt2TMcjTTW7cxQrcZkQs55%2BmHTnse257XO5D190%2FGGtWUxhqxvs41jZX1nXQYU9Tarm5jxFUvWoX5FS%2FpvBI2K2iz9%2FkCWiin1souvYZ2U212%2FOpQ&X-Amz-Signature=06253f0b69d59587c82fa2511197cf1b558466a41529d5494cd104ae1785e789&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEOK62EO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJNG5v1pkAmKM0r2mLjpy1ayDn1HZzHnqgkfQLbtacKAiB2jvppjOmqFzwaX5hk129V%2BzRHHtpB8CcNMFxa2JFgbiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNg%2FiMOZWm8AUmT%2BKtwD0o0ZrtIZC%2FlR4kpwZHsHQHX7HMXGZAJYV25DrIKE%2BMB831tEMbRmm6sMlbe68tKHZvoGZxGn5M8OUuNR47Cjh84bVobvOoMdqBq7U0zEVltlXfh9E4uHRjz%2BMjV%2BOl3WjGuuoUnFUkbuDqT9JVy2TUztjg4iFW5%2BZkmL36RqhSbfEskyhxdt6kXSxUjOVWgUBI8GaSYoZuoowepVeAU8FHCjNYhalCJEXNPSdoLHd9mUZOQspzdHb0DK%2FRhyP0QK8tVenvp%2FFZgDKdJJ%2FZVL89raYktKU3kla6kPr9pW3qLi1aP7x9tWHc%2FiER%2FaA3hqK6lKxkwXF7ErRXsQ%2FrWEtroNvO0%2FdTRxGg2VCkNZ2qy8z3eNgk23lGDFNzODsHrMpbKvjoc2d4Sa%2BkQgMvlShmJXVYL8JZ5ZZH%2Bmw8UorrHuoadvqhwlzgKlLUEew0Tkw4DHusqdhb7%2FKXvhh3X3orPiXW0zA3XT9g3D8MJHI2S4%2FY7jpcg0goXlfpt05NuefXlXVlojzU7HCxAFy0L0zxVoqEElWyiFfFeJQLU7zJSqq%2BNR3KMl6dcNIB%2B8CYN4o6PR6Ji5gRgs%2FKaDCC7nQrp%2BRcNp7gi%2BgUAFs%2BGkOct%2BlWH1%2B3SLEUk1wmAw%2BsqBvwY6pgEaoZZfXx2uzU%2BMd5G%2Fi%2F1aytGscBP2HJ%2FrZpSgADZr36iR2eFc5oQ36rvVrmEgb0eXDoNUNL6K9tCQIxCPb9Ji0E0lEZ4gahu4QYob9U0ZUiFdt2TMcjTTW7cxQrcZkQs55%2BmHTnse257XO5D190%2FGGtWUxhqxvs41jZX1nXQYU9Tarm5jxFUvWoX5FS%2FpvBI2K2iz9%2FkCWiin1souvYZ2U212%2FOpQ&X-Amz-Signature=40f24002d32f82d9ce4a453c3f6e43d05c65a4586ea7177ffc96fdf1f9431def&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEOK62EO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJNG5v1pkAmKM0r2mLjpy1ayDn1HZzHnqgkfQLbtacKAiB2jvppjOmqFzwaX5hk129V%2BzRHHtpB8CcNMFxa2JFgbiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNg%2FiMOZWm8AUmT%2BKtwD0o0ZrtIZC%2FlR4kpwZHsHQHX7HMXGZAJYV25DrIKE%2BMB831tEMbRmm6sMlbe68tKHZvoGZxGn5M8OUuNR47Cjh84bVobvOoMdqBq7U0zEVltlXfh9E4uHRjz%2BMjV%2BOl3WjGuuoUnFUkbuDqT9JVy2TUztjg4iFW5%2BZkmL36RqhSbfEskyhxdt6kXSxUjOVWgUBI8GaSYoZuoowepVeAU8FHCjNYhalCJEXNPSdoLHd9mUZOQspzdHb0DK%2FRhyP0QK8tVenvp%2FFZgDKdJJ%2FZVL89raYktKU3kla6kPr9pW3qLi1aP7x9tWHc%2FiER%2FaA3hqK6lKxkwXF7ErRXsQ%2FrWEtroNvO0%2FdTRxGg2VCkNZ2qy8z3eNgk23lGDFNzODsHrMpbKvjoc2d4Sa%2BkQgMvlShmJXVYL8JZ5ZZH%2Bmw8UorrHuoadvqhwlzgKlLUEew0Tkw4DHusqdhb7%2FKXvhh3X3orPiXW0zA3XT9g3D8MJHI2S4%2FY7jpcg0goXlfpt05NuefXlXVlojzU7HCxAFy0L0zxVoqEElWyiFfFeJQLU7zJSqq%2BNR3KMl6dcNIB%2B8CYN4o6PR6Ji5gRgs%2FKaDCC7nQrp%2BRcNp7gi%2BgUAFs%2BGkOct%2BlWH1%2B3SLEUk1wmAw%2BsqBvwY6pgEaoZZfXx2uzU%2BMd5G%2Fi%2F1aytGscBP2HJ%2FrZpSgADZr36iR2eFc5oQ36rvVrmEgb0eXDoNUNL6K9tCQIxCPb9Ji0E0lEZ4gahu4QYob9U0ZUiFdt2TMcjTTW7cxQrcZkQs55%2BmHTnse257XO5D190%2FGGtWUxhqxvs41jZX1nXQYU9Tarm5jxFUvWoX5FS%2FpvBI2K2iz9%2FkCWiin1souvYZ2U212%2FOpQ&X-Amz-Signature=162fb3d67409a593908a18cead43e840a542d7db2f47e4e670dc8a47a33c06de&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
