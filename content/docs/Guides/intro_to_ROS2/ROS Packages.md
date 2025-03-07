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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DCZVUPB%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQR%2FRcETnd%2BlC8163zSSoZFudMge7Te7CB8wum48suzQIgNebbfXuKqS3mDgGOI6c7bqQzgMUhZbs7Qdq4%2FhN32n8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGbeRxgS%2FDNq%2BCRz1SrcA8ZPgC%2BQB7LbVo%2B6VtAV7kZxoLhfYNmaw39Q4qmoaBluMw6LkDNSrvlzVefOZaGXgPdXaFb%2BXRMKhzx%2BeeaV3VR7HdluIETG7JDO2pA%2BRkGecr2JnSD9oPWjl6Nyo%2B8vof%2BwiKOPUpHKOf8XwMsLyKiIodsHrumxvzEhq3nUU9qwdGLnddy0ukkNm8h%2BvTPM5vxLpooJgG8crTwSds6Rw3rbp9EE1rkRQHTBTOKkSR0zUAUzwYvH9o90kg2nhlvpXpCLKhtwgMt9yNMCFHRzlXruGjFrrJVWG%2BrLdI3IOb3T6SwkmARwTVDpDFSn9Od7WHDGhZDXUromoyXEWUPi7Z%2FGg7G8hoH4%2BF47uXN%2FMIJv5oJIMdKXWM4UsoZqUlhT6NtQW9lpad1lfVbfwUjNY8Y3TuvOpBmCk4pCyw8dEH3HuCix2uCKQRwXowhRqEPzHiKIAIfOeCuXFI%2F76DmEyJufnvmsiyNubKIlwABa7TYXixQLtTpo0i61Z6U8KsjoWO%2BfsTHYdC7PXTB0YGoYuLqcwS2FKCNUi3eB%2BGhaysTxcVtB6WycoLHPsP1qPU7f07e9z%2BW4yb4g0bgM6BCQnB34zn%2BfuRHD9p9cFB28YFJqPxQm3jvlgRRvzg7mMNHJqL4GOqUBc%2Bk9N4YmCz6fy6U8SSQTHbg4rvjA6xnqh3NwC%2FEU9J%2BRKVca9jS%2B6DANURIssSumAFbhYBxSztjIz%2FNG4b%2FWKNY%2BmyMbRUKIe8RVjH9P4N7N8FIlcrsEO39jNhz4yc2vlgflmw5W865h9jJLfeOXJ4Kok0BT6J%2Fsk%2FPHdZwI5CEGsR3bz%2B6lNkzuW07aNHLIGdKc%2FgjYkcMrSNQjalS7%2FCDnTs9o&X-Amz-Signature=95eb5fa6df1b90a3cb3b4c1b6fa15004cb18884c6cbe01a4d2d90107658ac3a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DCZVUPB%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQR%2FRcETnd%2BlC8163zSSoZFudMge7Te7CB8wum48suzQIgNebbfXuKqS3mDgGOI6c7bqQzgMUhZbs7Qdq4%2FhN32n8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGbeRxgS%2FDNq%2BCRz1SrcA8ZPgC%2BQB7LbVo%2B6VtAV7kZxoLhfYNmaw39Q4qmoaBluMw6LkDNSrvlzVefOZaGXgPdXaFb%2BXRMKhzx%2BeeaV3VR7HdluIETG7JDO2pA%2BRkGecr2JnSD9oPWjl6Nyo%2B8vof%2BwiKOPUpHKOf8XwMsLyKiIodsHrumxvzEhq3nUU9qwdGLnddy0ukkNm8h%2BvTPM5vxLpooJgG8crTwSds6Rw3rbp9EE1rkRQHTBTOKkSR0zUAUzwYvH9o90kg2nhlvpXpCLKhtwgMt9yNMCFHRzlXruGjFrrJVWG%2BrLdI3IOb3T6SwkmARwTVDpDFSn9Od7WHDGhZDXUromoyXEWUPi7Z%2FGg7G8hoH4%2BF47uXN%2FMIJv5oJIMdKXWM4UsoZqUlhT6NtQW9lpad1lfVbfwUjNY8Y3TuvOpBmCk4pCyw8dEH3HuCix2uCKQRwXowhRqEPzHiKIAIfOeCuXFI%2F76DmEyJufnvmsiyNubKIlwABa7TYXixQLtTpo0i61Z6U8KsjoWO%2BfsTHYdC7PXTB0YGoYuLqcwS2FKCNUi3eB%2BGhaysTxcVtB6WycoLHPsP1qPU7f07e9z%2BW4yb4g0bgM6BCQnB34zn%2BfuRHD9p9cFB28YFJqPxQm3jvlgRRvzg7mMNHJqL4GOqUBc%2Bk9N4YmCz6fy6U8SSQTHbg4rvjA6xnqh3NwC%2FEU9J%2BRKVca9jS%2B6DANURIssSumAFbhYBxSztjIz%2FNG4b%2FWKNY%2BmyMbRUKIe8RVjH9P4N7N8FIlcrsEO39jNhz4yc2vlgflmw5W865h9jJLfeOXJ4Kok0BT6J%2Fsk%2FPHdZwI5CEGsR3bz%2B6lNkzuW07aNHLIGdKc%2FgjYkcMrSNQjalS7%2FCDnTs9o&X-Amz-Signature=f5aa29b8ed8899b11babef117b57b71eb134d6121477239b02feef856dcb66b1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DCZVUPB%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQR%2FRcETnd%2BlC8163zSSoZFudMge7Te7CB8wum48suzQIgNebbfXuKqS3mDgGOI6c7bqQzgMUhZbs7Qdq4%2FhN32n8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGbeRxgS%2FDNq%2BCRz1SrcA8ZPgC%2BQB7LbVo%2B6VtAV7kZxoLhfYNmaw39Q4qmoaBluMw6LkDNSrvlzVefOZaGXgPdXaFb%2BXRMKhzx%2BeeaV3VR7HdluIETG7JDO2pA%2BRkGecr2JnSD9oPWjl6Nyo%2B8vof%2BwiKOPUpHKOf8XwMsLyKiIodsHrumxvzEhq3nUU9qwdGLnddy0ukkNm8h%2BvTPM5vxLpooJgG8crTwSds6Rw3rbp9EE1rkRQHTBTOKkSR0zUAUzwYvH9o90kg2nhlvpXpCLKhtwgMt9yNMCFHRzlXruGjFrrJVWG%2BrLdI3IOb3T6SwkmARwTVDpDFSn9Od7WHDGhZDXUromoyXEWUPi7Z%2FGg7G8hoH4%2BF47uXN%2FMIJv5oJIMdKXWM4UsoZqUlhT6NtQW9lpad1lfVbfwUjNY8Y3TuvOpBmCk4pCyw8dEH3HuCix2uCKQRwXowhRqEPzHiKIAIfOeCuXFI%2F76DmEyJufnvmsiyNubKIlwABa7TYXixQLtTpo0i61Z6U8KsjoWO%2BfsTHYdC7PXTB0YGoYuLqcwS2FKCNUi3eB%2BGhaysTxcVtB6WycoLHPsP1qPU7f07e9z%2BW4yb4g0bgM6BCQnB34zn%2BfuRHD9p9cFB28YFJqPxQm3jvlgRRvzg7mMNHJqL4GOqUBc%2Bk9N4YmCz6fy6U8SSQTHbg4rvjA6xnqh3NwC%2FEU9J%2BRKVca9jS%2B6DANURIssSumAFbhYBxSztjIz%2FNG4b%2FWKNY%2BmyMbRUKIe8RVjH9P4N7N8FIlcrsEO39jNhz4yc2vlgflmw5W865h9jJLfeOXJ4Kok0BT6J%2Fsk%2FPHdZwI5CEGsR3bz%2B6lNkzuW07aNHLIGdKc%2FgjYkcMrSNQjalS7%2FCDnTs9o&X-Amz-Signature=00da65277180e52e4f80f0cf227ccd17611951ba531b857ef93eb5d22e1612df&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DCZVUPB%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQR%2FRcETnd%2BlC8163zSSoZFudMge7Te7CB8wum48suzQIgNebbfXuKqS3mDgGOI6c7bqQzgMUhZbs7Qdq4%2FhN32n8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGbeRxgS%2FDNq%2BCRz1SrcA8ZPgC%2BQB7LbVo%2B6VtAV7kZxoLhfYNmaw39Q4qmoaBluMw6LkDNSrvlzVefOZaGXgPdXaFb%2BXRMKhzx%2BeeaV3VR7HdluIETG7JDO2pA%2BRkGecr2JnSD9oPWjl6Nyo%2B8vof%2BwiKOPUpHKOf8XwMsLyKiIodsHrumxvzEhq3nUU9qwdGLnddy0ukkNm8h%2BvTPM5vxLpooJgG8crTwSds6Rw3rbp9EE1rkRQHTBTOKkSR0zUAUzwYvH9o90kg2nhlvpXpCLKhtwgMt9yNMCFHRzlXruGjFrrJVWG%2BrLdI3IOb3T6SwkmARwTVDpDFSn9Od7WHDGhZDXUromoyXEWUPi7Z%2FGg7G8hoH4%2BF47uXN%2FMIJv5oJIMdKXWM4UsoZqUlhT6NtQW9lpad1lfVbfwUjNY8Y3TuvOpBmCk4pCyw8dEH3HuCix2uCKQRwXowhRqEPzHiKIAIfOeCuXFI%2F76DmEyJufnvmsiyNubKIlwABa7TYXixQLtTpo0i61Z6U8KsjoWO%2BfsTHYdC7PXTB0YGoYuLqcwS2FKCNUi3eB%2BGhaysTxcVtB6WycoLHPsP1qPU7f07e9z%2BW4yb4g0bgM6BCQnB34zn%2BfuRHD9p9cFB28YFJqPxQm3jvlgRRvzg7mMNHJqL4GOqUBc%2Bk9N4YmCz6fy6U8SSQTHbg4rvjA6xnqh3NwC%2FEU9J%2BRKVca9jS%2B6DANURIssSumAFbhYBxSztjIz%2FNG4b%2FWKNY%2BmyMbRUKIe8RVjH9P4N7N8FIlcrsEO39jNhz4yc2vlgflmw5W865h9jJLfeOXJ4Kok0BT6J%2Fsk%2FPHdZwI5CEGsR3bz%2B6lNkzuW07aNHLIGdKc%2FgjYkcMrSNQjalS7%2FCDnTs9o&X-Amz-Signature=fd1c855f958e010dc87518e6cb10c282fb5cdb76b4115db7f804da8a54b1b578&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DCZVUPB%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQR%2FRcETnd%2BlC8163zSSoZFudMge7Te7CB8wum48suzQIgNebbfXuKqS3mDgGOI6c7bqQzgMUhZbs7Qdq4%2FhN32n8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGbeRxgS%2FDNq%2BCRz1SrcA8ZPgC%2BQB7LbVo%2B6VtAV7kZxoLhfYNmaw39Q4qmoaBluMw6LkDNSrvlzVefOZaGXgPdXaFb%2BXRMKhzx%2BeeaV3VR7HdluIETG7JDO2pA%2BRkGecr2JnSD9oPWjl6Nyo%2B8vof%2BwiKOPUpHKOf8XwMsLyKiIodsHrumxvzEhq3nUU9qwdGLnddy0ukkNm8h%2BvTPM5vxLpooJgG8crTwSds6Rw3rbp9EE1rkRQHTBTOKkSR0zUAUzwYvH9o90kg2nhlvpXpCLKhtwgMt9yNMCFHRzlXruGjFrrJVWG%2BrLdI3IOb3T6SwkmARwTVDpDFSn9Od7WHDGhZDXUromoyXEWUPi7Z%2FGg7G8hoH4%2BF47uXN%2FMIJv5oJIMdKXWM4UsoZqUlhT6NtQW9lpad1lfVbfwUjNY8Y3TuvOpBmCk4pCyw8dEH3HuCix2uCKQRwXowhRqEPzHiKIAIfOeCuXFI%2F76DmEyJufnvmsiyNubKIlwABa7TYXixQLtTpo0i61Z6U8KsjoWO%2BfsTHYdC7PXTB0YGoYuLqcwS2FKCNUi3eB%2BGhaysTxcVtB6WycoLHPsP1qPU7f07e9z%2BW4yb4g0bgM6BCQnB34zn%2BfuRHD9p9cFB28YFJqPxQm3jvlgRRvzg7mMNHJqL4GOqUBc%2Bk9N4YmCz6fy6U8SSQTHbg4rvjA6xnqh3NwC%2FEU9J%2BRKVca9jS%2B6DANURIssSumAFbhYBxSztjIz%2FNG4b%2FWKNY%2BmyMbRUKIe8RVjH9P4N7N8FIlcrsEO39jNhz4yc2vlgflmw5W865h9jJLfeOXJ4Kok0BT6J%2Fsk%2FPHdZwI5CEGsR3bz%2B6lNkzuW07aNHLIGdKc%2FgjYkcMrSNQjalS7%2FCDnTs9o&X-Amz-Signature=c24a68ed2707c931acca74a0e3e8d7a0389a44be41bec3578b8fe9db294aa727&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DCZVUPB%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQR%2FRcETnd%2BlC8163zSSoZFudMge7Te7CB8wum48suzQIgNebbfXuKqS3mDgGOI6c7bqQzgMUhZbs7Qdq4%2FhN32n8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGbeRxgS%2FDNq%2BCRz1SrcA8ZPgC%2BQB7LbVo%2B6VtAV7kZxoLhfYNmaw39Q4qmoaBluMw6LkDNSrvlzVefOZaGXgPdXaFb%2BXRMKhzx%2BeeaV3VR7HdluIETG7JDO2pA%2BRkGecr2JnSD9oPWjl6Nyo%2B8vof%2BwiKOPUpHKOf8XwMsLyKiIodsHrumxvzEhq3nUU9qwdGLnddy0ukkNm8h%2BvTPM5vxLpooJgG8crTwSds6Rw3rbp9EE1rkRQHTBTOKkSR0zUAUzwYvH9o90kg2nhlvpXpCLKhtwgMt9yNMCFHRzlXruGjFrrJVWG%2BrLdI3IOb3T6SwkmARwTVDpDFSn9Od7WHDGhZDXUromoyXEWUPi7Z%2FGg7G8hoH4%2BF47uXN%2FMIJv5oJIMdKXWM4UsoZqUlhT6NtQW9lpad1lfVbfwUjNY8Y3TuvOpBmCk4pCyw8dEH3HuCix2uCKQRwXowhRqEPzHiKIAIfOeCuXFI%2F76DmEyJufnvmsiyNubKIlwABa7TYXixQLtTpo0i61Z6U8KsjoWO%2BfsTHYdC7PXTB0YGoYuLqcwS2FKCNUi3eB%2BGhaysTxcVtB6WycoLHPsP1qPU7f07e9z%2BW4yb4g0bgM6BCQnB34zn%2BfuRHD9p9cFB28YFJqPxQm3jvlgRRvzg7mMNHJqL4GOqUBc%2Bk9N4YmCz6fy6U8SSQTHbg4rvjA6xnqh3NwC%2FEU9J%2BRKVca9jS%2B6DANURIssSumAFbhYBxSztjIz%2FNG4b%2FWKNY%2BmyMbRUKIe8RVjH9P4N7N8FIlcrsEO39jNhz4yc2vlgflmw5W865h9jJLfeOXJ4Kok0BT6J%2Fsk%2FPHdZwI5CEGsR3bz%2B6lNkzuW07aNHLIGdKc%2FgjYkcMrSNQjalS7%2FCDnTs9o&X-Amz-Signature=e5c2560ffbb88a1a045e6acb87eb7015ef1a75dc91527cffc8d705e7e11afe84&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DCZVUPB%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQR%2FRcETnd%2BlC8163zSSoZFudMge7Te7CB8wum48suzQIgNebbfXuKqS3mDgGOI6c7bqQzgMUhZbs7Qdq4%2FhN32n8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGbeRxgS%2FDNq%2BCRz1SrcA8ZPgC%2BQB7LbVo%2B6VtAV7kZxoLhfYNmaw39Q4qmoaBluMw6LkDNSrvlzVefOZaGXgPdXaFb%2BXRMKhzx%2BeeaV3VR7HdluIETG7JDO2pA%2BRkGecr2JnSD9oPWjl6Nyo%2B8vof%2BwiKOPUpHKOf8XwMsLyKiIodsHrumxvzEhq3nUU9qwdGLnddy0ukkNm8h%2BvTPM5vxLpooJgG8crTwSds6Rw3rbp9EE1rkRQHTBTOKkSR0zUAUzwYvH9o90kg2nhlvpXpCLKhtwgMt9yNMCFHRzlXruGjFrrJVWG%2BrLdI3IOb3T6SwkmARwTVDpDFSn9Od7WHDGhZDXUromoyXEWUPi7Z%2FGg7G8hoH4%2BF47uXN%2FMIJv5oJIMdKXWM4UsoZqUlhT6NtQW9lpad1lfVbfwUjNY8Y3TuvOpBmCk4pCyw8dEH3HuCix2uCKQRwXowhRqEPzHiKIAIfOeCuXFI%2F76DmEyJufnvmsiyNubKIlwABa7TYXixQLtTpo0i61Z6U8KsjoWO%2BfsTHYdC7PXTB0YGoYuLqcwS2FKCNUi3eB%2BGhaysTxcVtB6WycoLHPsP1qPU7f07e9z%2BW4yb4g0bgM6BCQnB34zn%2BfuRHD9p9cFB28YFJqPxQm3jvlgRRvzg7mMNHJqL4GOqUBc%2Bk9N4YmCz6fy6U8SSQTHbg4rvjA6xnqh3NwC%2FEU9J%2BRKVca9jS%2B6DANURIssSumAFbhYBxSztjIz%2FNG4b%2FWKNY%2BmyMbRUKIe8RVjH9P4N7N8FIlcrsEO39jNhz4yc2vlgflmw5W865h9jJLfeOXJ4Kok0BT6J%2Fsk%2FPHdZwI5CEGsR3bz%2B6lNkzuW07aNHLIGdKc%2FgjYkcMrSNQjalS7%2FCDnTs9o&X-Amz-Signature=8bc8182f73685157b2dd5cd9a43324afe905ef9ae22ad2b3292c4c6cf81f3c06&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
