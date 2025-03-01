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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO4H3LEG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDGjXsqJOdknMvGQ1x3UCuUxkccNcpesGXSYuTwiPBREAiEAy5xwzaxsQfAawiJ3f8vgG5JvmzNZvTZoFmCGhY7FcpwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSkdTSwkHm0JDkQ9CrcA7ozKl2w1yPSsqxiKuWo%2BWPcqeO40gARgU0NlSAaORyHcbEo%2BUas14xeNVYc6GwH%2F%2BfRns1e7rvrCAgdiaLChew1kQ7lR35aU%2BcSqk5SCS3p%2B1vCVNmIzhU7imWQWb9w91avLQW8GQjdvxQNZRxgvKEeMbF04gKWFN8kZb0QYKX70Di%2B0HT7Ki9hmy84gbx2cIIZ%2BfQTP%2FS71rN42%2BX5jaLentifaLaBaZ77S%2BYbUk%2BflJMuI5%2FoFbg2F5yEN2Z3VHGAwn4BWveLGDXUIjx%2FwGBZzQoad2TnXWvQsWV5Q6v%2BxCdTPMoMSDtqvhLMZ5kLAy8%2Fg7ALKaT3BzYskGNa%2F3Q3Ba2ffgHzHvLG0TSuqHUxc7w%2FhWJd303b6%2BIr7X%2BwJ3NUqmudsxIGYkIyiohC%2F3rLPbLsAVVfuwD70MMyGBONborn44VoQRljCfKFzpJ5DL4m1VRO9jpBAx03W5sn4%2F1MGHDgTyT5azIwsKyqb4fSXbn%2BxNws9Svn6vW7blY6JXxlLYJ%2FgYiX9S7qb8tXUAiHBhtsWeHNqo7qdmkE0aUw75IP9b9kYRRSrPWtky3yndgodpyntegewM1flBnF7Qn0PAyLA%2FHUeIr7ANF8nQuVMcempm%2FWl2TWBUokMP6UjL4GOqUBgkRUfKb5ynrgB8scWpYWtCuWO%2FJI0hhyO7xZ%2BsfEzT%2F2Pp3FwQvSKkm1hmElzA%2FAlQJuwNyLeqIryt9tv0tglDUBaIbINPzYncD37EhmFfgqYNZ2Mv5JbDnC1gucSgHLU4gr8UWCFhVfGRng2C5HN%2BrI%2BwsDdzXP433VMZ6qRP0oiIJqi36JiDuh5NQ9F49OcEJSKpsdPJplaKJYTbBzM%2BzotmQR&X-Amz-Signature=c3ecca59f9bba1b6cc998aa0965b98423eb997b52893ba57d0059ea26ef1352c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO4H3LEG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDGjXsqJOdknMvGQ1x3UCuUxkccNcpesGXSYuTwiPBREAiEAy5xwzaxsQfAawiJ3f8vgG5JvmzNZvTZoFmCGhY7FcpwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSkdTSwkHm0JDkQ9CrcA7ozKl2w1yPSsqxiKuWo%2BWPcqeO40gARgU0NlSAaORyHcbEo%2BUas14xeNVYc6GwH%2F%2BfRns1e7rvrCAgdiaLChew1kQ7lR35aU%2BcSqk5SCS3p%2B1vCVNmIzhU7imWQWb9w91avLQW8GQjdvxQNZRxgvKEeMbF04gKWFN8kZb0QYKX70Di%2B0HT7Ki9hmy84gbx2cIIZ%2BfQTP%2FS71rN42%2BX5jaLentifaLaBaZ77S%2BYbUk%2BflJMuI5%2FoFbg2F5yEN2Z3VHGAwn4BWveLGDXUIjx%2FwGBZzQoad2TnXWvQsWV5Q6v%2BxCdTPMoMSDtqvhLMZ5kLAy8%2Fg7ALKaT3BzYskGNa%2F3Q3Ba2ffgHzHvLG0TSuqHUxc7w%2FhWJd303b6%2BIr7X%2BwJ3NUqmudsxIGYkIyiohC%2F3rLPbLsAVVfuwD70MMyGBONborn44VoQRljCfKFzpJ5DL4m1VRO9jpBAx03W5sn4%2F1MGHDgTyT5azIwsKyqb4fSXbn%2BxNws9Svn6vW7blY6JXxlLYJ%2FgYiX9S7qb8tXUAiHBhtsWeHNqo7qdmkE0aUw75IP9b9kYRRSrPWtky3yndgodpyntegewM1flBnF7Qn0PAyLA%2FHUeIr7ANF8nQuVMcempm%2FWl2TWBUokMP6UjL4GOqUBgkRUfKb5ynrgB8scWpYWtCuWO%2FJI0hhyO7xZ%2BsfEzT%2F2Pp3FwQvSKkm1hmElzA%2FAlQJuwNyLeqIryt9tv0tglDUBaIbINPzYncD37EhmFfgqYNZ2Mv5JbDnC1gucSgHLU4gr8UWCFhVfGRng2C5HN%2BrI%2BwsDdzXP433VMZ6qRP0oiIJqi36JiDuh5NQ9F49OcEJSKpsdPJplaKJYTbBzM%2BzotmQR&X-Amz-Signature=01417f738edf8509c77d099a6c977260f2b99b9bd1658021dfd0e74ceae23b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO4H3LEG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDGjXsqJOdknMvGQ1x3UCuUxkccNcpesGXSYuTwiPBREAiEAy5xwzaxsQfAawiJ3f8vgG5JvmzNZvTZoFmCGhY7FcpwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSkdTSwkHm0JDkQ9CrcA7ozKl2w1yPSsqxiKuWo%2BWPcqeO40gARgU0NlSAaORyHcbEo%2BUas14xeNVYc6GwH%2F%2BfRns1e7rvrCAgdiaLChew1kQ7lR35aU%2BcSqk5SCS3p%2B1vCVNmIzhU7imWQWb9w91avLQW8GQjdvxQNZRxgvKEeMbF04gKWFN8kZb0QYKX70Di%2B0HT7Ki9hmy84gbx2cIIZ%2BfQTP%2FS71rN42%2BX5jaLentifaLaBaZ77S%2BYbUk%2BflJMuI5%2FoFbg2F5yEN2Z3VHGAwn4BWveLGDXUIjx%2FwGBZzQoad2TnXWvQsWV5Q6v%2BxCdTPMoMSDtqvhLMZ5kLAy8%2Fg7ALKaT3BzYskGNa%2F3Q3Ba2ffgHzHvLG0TSuqHUxc7w%2FhWJd303b6%2BIr7X%2BwJ3NUqmudsxIGYkIyiohC%2F3rLPbLsAVVfuwD70MMyGBONborn44VoQRljCfKFzpJ5DL4m1VRO9jpBAx03W5sn4%2F1MGHDgTyT5azIwsKyqb4fSXbn%2BxNws9Svn6vW7blY6JXxlLYJ%2FgYiX9S7qb8tXUAiHBhtsWeHNqo7qdmkE0aUw75IP9b9kYRRSrPWtky3yndgodpyntegewM1flBnF7Qn0PAyLA%2FHUeIr7ANF8nQuVMcempm%2FWl2TWBUokMP6UjL4GOqUBgkRUfKb5ynrgB8scWpYWtCuWO%2FJI0hhyO7xZ%2BsfEzT%2F2Pp3FwQvSKkm1hmElzA%2FAlQJuwNyLeqIryt9tv0tglDUBaIbINPzYncD37EhmFfgqYNZ2Mv5JbDnC1gucSgHLU4gr8UWCFhVfGRng2C5HN%2BrI%2BwsDdzXP433VMZ6qRP0oiIJqi36JiDuh5NQ9F49OcEJSKpsdPJplaKJYTbBzM%2BzotmQR&X-Amz-Signature=4634e8314542debc64c63843b78f308fd028c5b71e3d53e49d9c6f2b9985eb05&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO4H3LEG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDGjXsqJOdknMvGQ1x3UCuUxkccNcpesGXSYuTwiPBREAiEAy5xwzaxsQfAawiJ3f8vgG5JvmzNZvTZoFmCGhY7FcpwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSkdTSwkHm0JDkQ9CrcA7ozKl2w1yPSsqxiKuWo%2BWPcqeO40gARgU0NlSAaORyHcbEo%2BUas14xeNVYc6GwH%2F%2BfRns1e7rvrCAgdiaLChew1kQ7lR35aU%2BcSqk5SCS3p%2B1vCVNmIzhU7imWQWb9w91avLQW8GQjdvxQNZRxgvKEeMbF04gKWFN8kZb0QYKX70Di%2B0HT7Ki9hmy84gbx2cIIZ%2BfQTP%2FS71rN42%2BX5jaLentifaLaBaZ77S%2BYbUk%2BflJMuI5%2FoFbg2F5yEN2Z3VHGAwn4BWveLGDXUIjx%2FwGBZzQoad2TnXWvQsWV5Q6v%2BxCdTPMoMSDtqvhLMZ5kLAy8%2Fg7ALKaT3BzYskGNa%2F3Q3Ba2ffgHzHvLG0TSuqHUxc7w%2FhWJd303b6%2BIr7X%2BwJ3NUqmudsxIGYkIyiohC%2F3rLPbLsAVVfuwD70MMyGBONborn44VoQRljCfKFzpJ5DL4m1VRO9jpBAx03W5sn4%2F1MGHDgTyT5azIwsKyqb4fSXbn%2BxNws9Svn6vW7blY6JXxlLYJ%2FgYiX9S7qb8tXUAiHBhtsWeHNqo7qdmkE0aUw75IP9b9kYRRSrPWtky3yndgodpyntegewM1flBnF7Qn0PAyLA%2FHUeIr7ANF8nQuVMcempm%2FWl2TWBUokMP6UjL4GOqUBgkRUfKb5ynrgB8scWpYWtCuWO%2FJI0hhyO7xZ%2BsfEzT%2F2Pp3FwQvSKkm1hmElzA%2FAlQJuwNyLeqIryt9tv0tglDUBaIbINPzYncD37EhmFfgqYNZ2Mv5JbDnC1gucSgHLU4gr8UWCFhVfGRng2C5HN%2BrI%2BwsDdzXP433VMZ6qRP0oiIJqi36JiDuh5NQ9F49OcEJSKpsdPJplaKJYTbBzM%2BzotmQR&X-Amz-Signature=97e9e7d51a3c3c9b726148a91949fca464b1614e96dd51e820480eadc5a51cee&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO4H3LEG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDGjXsqJOdknMvGQ1x3UCuUxkccNcpesGXSYuTwiPBREAiEAy5xwzaxsQfAawiJ3f8vgG5JvmzNZvTZoFmCGhY7FcpwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSkdTSwkHm0JDkQ9CrcA7ozKl2w1yPSsqxiKuWo%2BWPcqeO40gARgU0NlSAaORyHcbEo%2BUas14xeNVYc6GwH%2F%2BfRns1e7rvrCAgdiaLChew1kQ7lR35aU%2BcSqk5SCS3p%2B1vCVNmIzhU7imWQWb9w91avLQW8GQjdvxQNZRxgvKEeMbF04gKWFN8kZb0QYKX70Di%2B0HT7Ki9hmy84gbx2cIIZ%2BfQTP%2FS71rN42%2BX5jaLentifaLaBaZ77S%2BYbUk%2BflJMuI5%2FoFbg2F5yEN2Z3VHGAwn4BWveLGDXUIjx%2FwGBZzQoad2TnXWvQsWV5Q6v%2BxCdTPMoMSDtqvhLMZ5kLAy8%2Fg7ALKaT3BzYskGNa%2F3Q3Ba2ffgHzHvLG0TSuqHUxc7w%2FhWJd303b6%2BIr7X%2BwJ3NUqmudsxIGYkIyiohC%2F3rLPbLsAVVfuwD70MMyGBONborn44VoQRljCfKFzpJ5DL4m1VRO9jpBAx03W5sn4%2F1MGHDgTyT5azIwsKyqb4fSXbn%2BxNws9Svn6vW7blY6JXxlLYJ%2FgYiX9S7qb8tXUAiHBhtsWeHNqo7qdmkE0aUw75IP9b9kYRRSrPWtky3yndgodpyntegewM1flBnF7Qn0PAyLA%2FHUeIr7ANF8nQuVMcempm%2FWl2TWBUokMP6UjL4GOqUBgkRUfKb5ynrgB8scWpYWtCuWO%2FJI0hhyO7xZ%2BsfEzT%2F2Pp3FwQvSKkm1hmElzA%2FAlQJuwNyLeqIryt9tv0tglDUBaIbINPzYncD37EhmFfgqYNZ2Mv5JbDnC1gucSgHLU4gr8UWCFhVfGRng2C5HN%2BrI%2BwsDdzXP433VMZ6qRP0oiIJqi36JiDuh5NQ9F49OcEJSKpsdPJplaKJYTbBzM%2BzotmQR&X-Amz-Signature=cca6c436176b78e6e825c05c6728b845f926b5992774c145ea9d65884e11b01f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO4H3LEG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDGjXsqJOdknMvGQ1x3UCuUxkccNcpesGXSYuTwiPBREAiEAy5xwzaxsQfAawiJ3f8vgG5JvmzNZvTZoFmCGhY7FcpwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSkdTSwkHm0JDkQ9CrcA7ozKl2w1yPSsqxiKuWo%2BWPcqeO40gARgU0NlSAaORyHcbEo%2BUas14xeNVYc6GwH%2F%2BfRns1e7rvrCAgdiaLChew1kQ7lR35aU%2BcSqk5SCS3p%2B1vCVNmIzhU7imWQWb9w91avLQW8GQjdvxQNZRxgvKEeMbF04gKWFN8kZb0QYKX70Di%2B0HT7Ki9hmy84gbx2cIIZ%2BfQTP%2FS71rN42%2BX5jaLentifaLaBaZ77S%2BYbUk%2BflJMuI5%2FoFbg2F5yEN2Z3VHGAwn4BWveLGDXUIjx%2FwGBZzQoad2TnXWvQsWV5Q6v%2BxCdTPMoMSDtqvhLMZ5kLAy8%2Fg7ALKaT3BzYskGNa%2F3Q3Ba2ffgHzHvLG0TSuqHUxc7w%2FhWJd303b6%2BIr7X%2BwJ3NUqmudsxIGYkIyiohC%2F3rLPbLsAVVfuwD70MMyGBONborn44VoQRljCfKFzpJ5DL4m1VRO9jpBAx03W5sn4%2F1MGHDgTyT5azIwsKyqb4fSXbn%2BxNws9Svn6vW7blY6JXxlLYJ%2FgYiX9S7qb8tXUAiHBhtsWeHNqo7qdmkE0aUw75IP9b9kYRRSrPWtky3yndgodpyntegewM1flBnF7Qn0PAyLA%2FHUeIr7ANF8nQuVMcempm%2FWl2TWBUokMP6UjL4GOqUBgkRUfKb5ynrgB8scWpYWtCuWO%2FJI0hhyO7xZ%2BsfEzT%2F2Pp3FwQvSKkm1hmElzA%2FAlQJuwNyLeqIryt9tv0tglDUBaIbINPzYncD37EhmFfgqYNZ2Mv5JbDnC1gucSgHLU4gr8UWCFhVfGRng2C5HN%2BrI%2BwsDdzXP433VMZ6qRP0oiIJqi36JiDuh5NQ9F49OcEJSKpsdPJplaKJYTbBzM%2BzotmQR&X-Amz-Signature=3843bbeef73a8eef26af190323b6c734afc87360e39a7b362ec16aae5559ccbc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO4H3LEG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDGjXsqJOdknMvGQ1x3UCuUxkccNcpesGXSYuTwiPBREAiEAy5xwzaxsQfAawiJ3f8vgG5JvmzNZvTZoFmCGhY7FcpwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSkdTSwkHm0JDkQ9CrcA7ozKl2w1yPSsqxiKuWo%2BWPcqeO40gARgU0NlSAaORyHcbEo%2BUas14xeNVYc6GwH%2F%2BfRns1e7rvrCAgdiaLChew1kQ7lR35aU%2BcSqk5SCS3p%2B1vCVNmIzhU7imWQWb9w91avLQW8GQjdvxQNZRxgvKEeMbF04gKWFN8kZb0QYKX70Di%2B0HT7Ki9hmy84gbx2cIIZ%2BfQTP%2FS71rN42%2BX5jaLentifaLaBaZ77S%2BYbUk%2BflJMuI5%2FoFbg2F5yEN2Z3VHGAwn4BWveLGDXUIjx%2FwGBZzQoad2TnXWvQsWV5Q6v%2BxCdTPMoMSDtqvhLMZ5kLAy8%2Fg7ALKaT3BzYskGNa%2F3Q3Ba2ffgHzHvLG0TSuqHUxc7w%2FhWJd303b6%2BIr7X%2BwJ3NUqmudsxIGYkIyiohC%2F3rLPbLsAVVfuwD70MMyGBONborn44VoQRljCfKFzpJ5DL4m1VRO9jpBAx03W5sn4%2F1MGHDgTyT5azIwsKyqb4fSXbn%2BxNws9Svn6vW7blY6JXxlLYJ%2FgYiX9S7qb8tXUAiHBhtsWeHNqo7qdmkE0aUw75IP9b9kYRRSrPWtky3yndgodpyntegewM1flBnF7Qn0PAyLA%2FHUeIr7ANF8nQuVMcempm%2FWl2TWBUokMP6UjL4GOqUBgkRUfKb5ynrgB8scWpYWtCuWO%2FJI0hhyO7xZ%2BsfEzT%2F2Pp3FwQvSKkm1hmElzA%2FAlQJuwNyLeqIryt9tv0tglDUBaIbINPzYncD37EhmFfgqYNZ2Mv5JbDnC1gucSgHLU4gr8UWCFhVfGRng2C5HN%2BrI%2BwsDdzXP433VMZ6qRP0oiIJqi36JiDuh5NQ9F49OcEJSKpsdPJplaKJYTbBzM%2BzotmQR&X-Amz-Signature=5cfbf80c48b317fd67290ea092c70486172e1c2faa06a7237694e2f3be842de2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
