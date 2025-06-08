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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRS7QMW4%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSeyZ0NCHE6%2FxAhCd1tLZRKBY8supJmzYnrq3FZ3dpeQIhALQvAYHQ9nExYDimuOh5URmf7sMTndnZcsP1beM%2FAy6KKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztSJmou%2FwZbxdew8kq3APXLcNAC8%2FoJrgsOUf22vMMnitGZSjn9FUvaPrOeLJCA6noIEn6tLtffDPKmU3dN3E5ZCHog%2BeJRlwNmwozxWjUwWb7SBbGBbniv%2F60MO8C03v3h73uPZZBfGdewNLQiIpYGYQ5JEKSnqn4k8RyqWrmhlS4W%2BD6LijGnfMy0mYOT4d3NUdJaPCw5CzYXwFDT%2FpSXERFNf6DXNITAJf%2F0CMW2NjIQCLLfYUnM7Fmm9zrhjrVY5dlkPZdnIcqrS7ItfWjJuw8MYNo8bMkoKJzodtaqale8YCf8iGLLsKxwpcaXut%2FYHtstT5x%2FOSpYT6JlYtL3CDtzetwnRzEsc1w%2FucBg8AqoqIyh1RRw7dSfpq5Z%2Fc%2FxDFaEln2iQUTr9sGCx9CB6qky5bKX7g4%2BnEctymRMyPV%2BL7SA8S7BsT5iRlYItQCrQfQI53i3%2B9gHzLKgiecOcm07Ket3oUfZ2WwL63fUabZlLQHJ2Vu0EG2ZRofwog5sZFa2%2Fx4lPWo9V7B8zf%2FAdHbx4q3k7gNmC31lBm9zud%2FHkon7JEmwpVstkrCJ1vt1dh874vR3nOKmfifcKe61Kx8gCbcLdRzOXuOXGzCc9RkpYy15H3Y%2F2qOQkZ6oneSFx3YVybyj0rskzD%2BsJTCBjqkAWLB0geNdAoS1oz6PZE0y46uKsDyJtLyb9tl%2BRjFBA%2BAnmyqGIvJnCly0ebivPPc702OvAN4Tan52fMBa5g%2FzLbxNZVJd0y4HiGQRm7ksQOpgLtPooNsYT81pLn987B6kEadHX7ZDtXcpN7DkCoqu0v6%2FGzh5wUkXUfiMer7KrkWNcZD%2B4ltqLJOSmc9WRlmWZWVXENnAntUzs1VPbezcsIo9A49&X-Amz-Signature=f5fbdf20c17a8227fd41b10d25bec12d2d9d49b7a248322a4cf092203204add0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRS7QMW4%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSeyZ0NCHE6%2FxAhCd1tLZRKBY8supJmzYnrq3FZ3dpeQIhALQvAYHQ9nExYDimuOh5URmf7sMTndnZcsP1beM%2FAy6KKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztSJmou%2FwZbxdew8kq3APXLcNAC8%2FoJrgsOUf22vMMnitGZSjn9FUvaPrOeLJCA6noIEn6tLtffDPKmU3dN3E5ZCHog%2BeJRlwNmwozxWjUwWb7SBbGBbniv%2F60MO8C03v3h73uPZZBfGdewNLQiIpYGYQ5JEKSnqn4k8RyqWrmhlS4W%2BD6LijGnfMy0mYOT4d3NUdJaPCw5CzYXwFDT%2FpSXERFNf6DXNITAJf%2F0CMW2NjIQCLLfYUnM7Fmm9zrhjrVY5dlkPZdnIcqrS7ItfWjJuw8MYNo8bMkoKJzodtaqale8YCf8iGLLsKxwpcaXut%2FYHtstT5x%2FOSpYT6JlYtL3CDtzetwnRzEsc1w%2FucBg8AqoqIyh1RRw7dSfpq5Z%2Fc%2FxDFaEln2iQUTr9sGCx9CB6qky5bKX7g4%2BnEctymRMyPV%2BL7SA8S7BsT5iRlYItQCrQfQI53i3%2B9gHzLKgiecOcm07Ket3oUfZ2WwL63fUabZlLQHJ2Vu0EG2ZRofwog5sZFa2%2Fx4lPWo9V7B8zf%2FAdHbx4q3k7gNmC31lBm9zud%2FHkon7JEmwpVstkrCJ1vt1dh874vR3nOKmfifcKe61Kx8gCbcLdRzOXuOXGzCc9RkpYy15H3Y%2F2qOQkZ6oneSFx3YVybyj0rskzD%2BsJTCBjqkAWLB0geNdAoS1oz6PZE0y46uKsDyJtLyb9tl%2BRjFBA%2BAnmyqGIvJnCly0ebivPPc702OvAN4Tan52fMBa5g%2FzLbxNZVJd0y4HiGQRm7ksQOpgLtPooNsYT81pLn987B6kEadHX7ZDtXcpN7DkCoqu0v6%2FGzh5wUkXUfiMer7KrkWNcZD%2B4ltqLJOSmc9WRlmWZWVXENnAntUzs1VPbezcsIo9A49&X-Amz-Signature=eeac99716516341c9f4effc4f4a0ef739c5c90f776a31893fb3971cb196678dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRS7QMW4%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSeyZ0NCHE6%2FxAhCd1tLZRKBY8supJmzYnrq3FZ3dpeQIhALQvAYHQ9nExYDimuOh5URmf7sMTndnZcsP1beM%2FAy6KKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztSJmou%2FwZbxdew8kq3APXLcNAC8%2FoJrgsOUf22vMMnitGZSjn9FUvaPrOeLJCA6noIEn6tLtffDPKmU3dN3E5ZCHog%2BeJRlwNmwozxWjUwWb7SBbGBbniv%2F60MO8C03v3h73uPZZBfGdewNLQiIpYGYQ5JEKSnqn4k8RyqWrmhlS4W%2BD6LijGnfMy0mYOT4d3NUdJaPCw5CzYXwFDT%2FpSXERFNf6DXNITAJf%2F0CMW2NjIQCLLfYUnM7Fmm9zrhjrVY5dlkPZdnIcqrS7ItfWjJuw8MYNo8bMkoKJzodtaqale8YCf8iGLLsKxwpcaXut%2FYHtstT5x%2FOSpYT6JlYtL3CDtzetwnRzEsc1w%2FucBg8AqoqIyh1RRw7dSfpq5Z%2Fc%2FxDFaEln2iQUTr9sGCx9CB6qky5bKX7g4%2BnEctymRMyPV%2BL7SA8S7BsT5iRlYItQCrQfQI53i3%2B9gHzLKgiecOcm07Ket3oUfZ2WwL63fUabZlLQHJ2Vu0EG2ZRofwog5sZFa2%2Fx4lPWo9V7B8zf%2FAdHbx4q3k7gNmC31lBm9zud%2FHkon7JEmwpVstkrCJ1vt1dh874vR3nOKmfifcKe61Kx8gCbcLdRzOXuOXGzCc9RkpYy15H3Y%2F2qOQkZ6oneSFx3YVybyj0rskzD%2BsJTCBjqkAWLB0geNdAoS1oz6PZE0y46uKsDyJtLyb9tl%2BRjFBA%2BAnmyqGIvJnCly0ebivPPc702OvAN4Tan52fMBa5g%2FzLbxNZVJd0y4HiGQRm7ksQOpgLtPooNsYT81pLn987B6kEadHX7ZDtXcpN7DkCoqu0v6%2FGzh5wUkXUfiMer7KrkWNcZD%2B4ltqLJOSmc9WRlmWZWVXENnAntUzs1VPbezcsIo9A49&X-Amz-Signature=f5d977853d1b70e88d6ee29ea45f684c37a594af7d20f7557d31926a9ab02652&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRS7QMW4%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSeyZ0NCHE6%2FxAhCd1tLZRKBY8supJmzYnrq3FZ3dpeQIhALQvAYHQ9nExYDimuOh5URmf7sMTndnZcsP1beM%2FAy6KKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztSJmou%2FwZbxdew8kq3APXLcNAC8%2FoJrgsOUf22vMMnitGZSjn9FUvaPrOeLJCA6noIEn6tLtffDPKmU3dN3E5ZCHog%2BeJRlwNmwozxWjUwWb7SBbGBbniv%2F60MO8C03v3h73uPZZBfGdewNLQiIpYGYQ5JEKSnqn4k8RyqWrmhlS4W%2BD6LijGnfMy0mYOT4d3NUdJaPCw5CzYXwFDT%2FpSXERFNf6DXNITAJf%2F0CMW2NjIQCLLfYUnM7Fmm9zrhjrVY5dlkPZdnIcqrS7ItfWjJuw8MYNo8bMkoKJzodtaqale8YCf8iGLLsKxwpcaXut%2FYHtstT5x%2FOSpYT6JlYtL3CDtzetwnRzEsc1w%2FucBg8AqoqIyh1RRw7dSfpq5Z%2Fc%2FxDFaEln2iQUTr9sGCx9CB6qky5bKX7g4%2BnEctymRMyPV%2BL7SA8S7BsT5iRlYItQCrQfQI53i3%2B9gHzLKgiecOcm07Ket3oUfZ2WwL63fUabZlLQHJ2Vu0EG2ZRofwog5sZFa2%2Fx4lPWo9V7B8zf%2FAdHbx4q3k7gNmC31lBm9zud%2FHkon7JEmwpVstkrCJ1vt1dh874vR3nOKmfifcKe61Kx8gCbcLdRzOXuOXGzCc9RkpYy15H3Y%2F2qOQkZ6oneSFx3YVybyj0rskzD%2BsJTCBjqkAWLB0geNdAoS1oz6PZE0y46uKsDyJtLyb9tl%2BRjFBA%2BAnmyqGIvJnCly0ebivPPc702OvAN4Tan52fMBa5g%2FzLbxNZVJd0y4HiGQRm7ksQOpgLtPooNsYT81pLn987B6kEadHX7ZDtXcpN7DkCoqu0v6%2FGzh5wUkXUfiMer7KrkWNcZD%2B4ltqLJOSmc9WRlmWZWVXENnAntUzs1VPbezcsIo9A49&X-Amz-Signature=eb19712c5fdef6a7a26ca8befac2033a28b4f08cd8f34d1317c1f293f3bfac52&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRS7QMW4%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSeyZ0NCHE6%2FxAhCd1tLZRKBY8supJmzYnrq3FZ3dpeQIhALQvAYHQ9nExYDimuOh5URmf7sMTndnZcsP1beM%2FAy6KKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztSJmou%2FwZbxdew8kq3APXLcNAC8%2FoJrgsOUf22vMMnitGZSjn9FUvaPrOeLJCA6noIEn6tLtffDPKmU3dN3E5ZCHog%2BeJRlwNmwozxWjUwWb7SBbGBbniv%2F60MO8C03v3h73uPZZBfGdewNLQiIpYGYQ5JEKSnqn4k8RyqWrmhlS4W%2BD6LijGnfMy0mYOT4d3NUdJaPCw5CzYXwFDT%2FpSXERFNf6DXNITAJf%2F0CMW2NjIQCLLfYUnM7Fmm9zrhjrVY5dlkPZdnIcqrS7ItfWjJuw8MYNo8bMkoKJzodtaqale8YCf8iGLLsKxwpcaXut%2FYHtstT5x%2FOSpYT6JlYtL3CDtzetwnRzEsc1w%2FucBg8AqoqIyh1RRw7dSfpq5Z%2Fc%2FxDFaEln2iQUTr9sGCx9CB6qky5bKX7g4%2BnEctymRMyPV%2BL7SA8S7BsT5iRlYItQCrQfQI53i3%2B9gHzLKgiecOcm07Ket3oUfZ2WwL63fUabZlLQHJ2Vu0EG2ZRofwog5sZFa2%2Fx4lPWo9V7B8zf%2FAdHbx4q3k7gNmC31lBm9zud%2FHkon7JEmwpVstkrCJ1vt1dh874vR3nOKmfifcKe61Kx8gCbcLdRzOXuOXGzCc9RkpYy15H3Y%2F2qOQkZ6oneSFx3YVybyj0rskzD%2BsJTCBjqkAWLB0geNdAoS1oz6PZE0y46uKsDyJtLyb9tl%2BRjFBA%2BAnmyqGIvJnCly0ebivPPc702OvAN4Tan52fMBa5g%2FzLbxNZVJd0y4HiGQRm7ksQOpgLtPooNsYT81pLn987B6kEadHX7ZDtXcpN7DkCoqu0v6%2FGzh5wUkXUfiMer7KrkWNcZD%2B4ltqLJOSmc9WRlmWZWVXENnAntUzs1VPbezcsIo9A49&X-Amz-Signature=dab2a173c28bfdc3c8491329bd20eab18929f49238cbe893531757dab2b54a68&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRS7QMW4%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSeyZ0NCHE6%2FxAhCd1tLZRKBY8supJmzYnrq3FZ3dpeQIhALQvAYHQ9nExYDimuOh5URmf7sMTndnZcsP1beM%2FAy6KKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztSJmou%2FwZbxdew8kq3APXLcNAC8%2FoJrgsOUf22vMMnitGZSjn9FUvaPrOeLJCA6noIEn6tLtffDPKmU3dN3E5ZCHog%2BeJRlwNmwozxWjUwWb7SBbGBbniv%2F60MO8C03v3h73uPZZBfGdewNLQiIpYGYQ5JEKSnqn4k8RyqWrmhlS4W%2BD6LijGnfMy0mYOT4d3NUdJaPCw5CzYXwFDT%2FpSXERFNf6DXNITAJf%2F0CMW2NjIQCLLfYUnM7Fmm9zrhjrVY5dlkPZdnIcqrS7ItfWjJuw8MYNo8bMkoKJzodtaqale8YCf8iGLLsKxwpcaXut%2FYHtstT5x%2FOSpYT6JlYtL3CDtzetwnRzEsc1w%2FucBg8AqoqIyh1RRw7dSfpq5Z%2Fc%2FxDFaEln2iQUTr9sGCx9CB6qky5bKX7g4%2BnEctymRMyPV%2BL7SA8S7BsT5iRlYItQCrQfQI53i3%2B9gHzLKgiecOcm07Ket3oUfZ2WwL63fUabZlLQHJ2Vu0EG2ZRofwog5sZFa2%2Fx4lPWo9V7B8zf%2FAdHbx4q3k7gNmC31lBm9zud%2FHkon7JEmwpVstkrCJ1vt1dh874vR3nOKmfifcKe61Kx8gCbcLdRzOXuOXGzCc9RkpYy15H3Y%2F2qOQkZ6oneSFx3YVybyj0rskzD%2BsJTCBjqkAWLB0geNdAoS1oz6PZE0y46uKsDyJtLyb9tl%2BRjFBA%2BAnmyqGIvJnCly0ebivPPc702OvAN4Tan52fMBa5g%2FzLbxNZVJd0y4HiGQRm7ksQOpgLtPooNsYT81pLn987B6kEadHX7ZDtXcpN7DkCoqu0v6%2FGzh5wUkXUfiMer7KrkWNcZD%2B4ltqLJOSmc9WRlmWZWVXENnAntUzs1VPbezcsIo9A49&X-Amz-Signature=dee26336330cbb6d5333273ad595456651626683e07d660aefb143320c26b2eb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRS7QMW4%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSeyZ0NCHE6%2FxAhCd1tLZRKBY8supJmzYnrq3FZ3dpeQIhALQvAYHQ9nExYDimuOh5URmf7sMTndnZcsP1beM%2FAy6KKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztSJmou%2FwZbxdew8kq3APXLcNAC8%2FoJrgsOUf22vMMnitGZSjn9FUvaPrOeLJCA6noIEn6tLtffDPKmU3dN3E5ZCHog%2BeJRlwNmwozxWjUwWb7SBbGBbniv%2F60MO8C03v3h73uPZZBfGdewNLQiIpYGYQ5JEKSnqn4k8RyqWrmhlS4W%2BD6LijGnfMy0mYOT4d3NUdJaPCw5CzYXwFDT%2FpSXERFNf6DXNITAJf%2F0CMW2NjIQCLLfYUnM7Fmm9zrhjrVY5dlkPZdnIcqrS7ItfWjJuw8MYNo8bMkoKJzodtaqale8YCf8iGLLsKxwpcaXut%2FYHtstT5x%2FOSpYT6JlYtL3CDtzetwnRzEsc1w%2FucBg8AqoqIyh1RRw7dSfpq5Z%2Fc%2FxDFaEln2iQUTr9sGCx9CB6qky5bKX7g4%2BnEctymRMyPV%2BL7SA8S7BsT5iRlYItQCrQfQI53i3%2B9gHzLKgiecOcm07Ket3oUfZ2WwL63fUabZlLQHJ2Vu0EG2ZRofwog5sZFa2%2Fx4lPWo9V7B8zf%2FAdHbx4q3k7gNmC31lBm9zud%2FHkon7JEmwpVstkrCJ1vt1dh874vR3nOKmfifcKe61Kx8gCbcLdRzOXuOXGzCc9RkpYy15H3Y%2F2qOQkZ6oneSFx3YVybyj0rskzD%2BsJTCBjqkAWLB0geNdAoS1oz6PZE0y46uKsDyJtLyb9tl%2BRjFBA%2BAnmyqGIvJnCly0ebivPPc702OvAN4Tan52fMBa5g%2FzLbxNZVJd0y4HiGQRm7ksQOpgLtPooNsYT81pLn987B6kEadHX7ZDtXcpN7DkCoqu0v6%2FGzh5wUkXUfiMer7KrkWNcZD%2B4ltqLJOSmc9WRlmWZWVXENnAntUzs1VPbezcsIo9A49&X-Amz-Signature=336520246914dd67f26fe8433f03800ed8be77b89ccecd6f990bb3f43f82c2aa&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
