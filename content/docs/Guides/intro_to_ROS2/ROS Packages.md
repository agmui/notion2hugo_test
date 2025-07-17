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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W74LV43W%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC5aAuNFii4GConICWo5OGrRvsVhprJQ4zCl4TD24qyXQIhAKTmpev5tjTAd6lkgQ9mHg%2B00md6XfR2cNXEhqxP%2F43fKv8DCHAQABoMNjM3NDIzMTgzODA1IgzYRs7uacl2SxMjqqYq3AMSk4NilbB6j7CSJ3Cc%2B3tqL6jSZgjDukdWahNLTxqGT1pr0GG8FPRtgkeC0HlgrpJqc%2BOY1T6mEYLvWJS%2F5Svrv1mOh%2FdkLHNwc63r7ervgrPV6ifbadSjAU7mp5pNF2dLqtPb7Uq1wB59rwgkvgEHBNHyEhKcqMnCWkvZ0E0e4y%2Bos4mgT%2B5Z5JOsFlmm2wGbotzKCQAW6H4cjDynctkOL0aSsedOYtLzGTgxVgN2vWh8Mg0DIJ7dCavvrRZgqrMkoy3g%2BZHnGXCNh16C4dQzKoPxIdGS3IdKZYuREHzWAmyfX7953gAULnrroVWK4VM1sVlWVXmsGLtUmJjQPso8ch2FgldSmBTlcCG1%2FdiPXr9Juapgjckq9MJzKsTsUY1eVkNXAcufjwjfhREPpHj8WCkTq4sfAJVm0A5YnpQwJ5IFJJkdpER7ta6If1GOIbF%2ByETOqWtiJlcSLHHGlGcuYMWYqZfZvoiqXkDC8DVAHvkRPIGcGFWdRBxzaN2a58iAr5GTbXHqsPkRjyUSwS7iUuRKP67whMMfWMUTSzjR52KgsbIo1SbSRlDs5G5WjL5xZEH0hc60MDmsSzF9IMaZr4iTT9ekq0ck6z4vKJ1HPlP43dtiLOIyKfO7YTDZwOLDBjqkAbNmrAucIrJTe%2B9Qjmcz%2BzO4qGz1U4yxtlDk7PQiLwaOQDIop8t7ITgjnXWqi4NxE2zecglBYk16VxqgRQN12apO%2FBjlqO3e8q80pPqbLWe%2Bvj%2BnL2I7I9saMWjGWxlt9i3bFqa8yi8F%2B1bJf%2BQLRfqWFSfqGXf8Fb1wvFdD4yJZdO5HJ82v3B89E8jSrsHKn5xim2bDWShLEbuWagyCZoJBwUAm&X-Amz-Signature=b2841fb67a70d24f20307cca777f5908204ad212f06939a973e7c0bf5f60830b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W74LV43W%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC5aAuNFii4GConICWo5OGrRvsVhprJQ4zCl4TD24qyXQIhAKTmpev5tjTAd6lkgQ9mHg%2B00md6XfR2cNXEhqxP%2F43fKv8DCHAQABoMNjM3NDIzMTgzODA1IgzYRs7uacl2SxMjqqYq3AMSk4NilbB6j7CSJ3Cc%2B3tqL6jSZgjDukdWahNLTxqGT1pr0GG8FPRtgkeC0HlgrpJqc%2BOY1T6mEYLvWJS%2F5Svrv1mOh%2FdkLHNwc63r7ervgrPV6ifbadSjAU7mp5pNF2dLqtPb7Uq1wB59rwgkvgEHBNHyEhKcqMnCWkvZ0E0e4y%2Bos4mgT%2B5Z5JOsFlmm2wGbotzKCQAW6H4cjDynctkOL0aSsedOYtLzGTgxVgN2vWh8Mg0DIJ7dCavvrRZgqrMkoy3g%2BZHnGXCNh16C4dQzKoPxIdGS3IdKZYuREHzWAmyfX7953gAULnrroVWK4VM1sVlWVXmsGLtUmJjQPso8ch2FgldSmBTlcCG1%2FdiPXr9Juapgjckq9MJzKsTsUY1eVkNXAcufjwjfhREPpHj8WCkTq4sfAJVm0A5YnpQwJ5IFJJkdpER7ta6If1GOIbF%2ByETOqWtiJlcSLHHGlGcuYMWYqZfZvoiqXkDC8DVAHvkRPIGcGFWdRBxzaN2a58iAr5GTbXHqsPkRjyUSwS7iUuRKP67whMMfWMUTSzjR52KgsbIo1SbSRlDs5G5WjL5xZEH0hc60MDmsSzF9IMaZr4iTT9ekq0ck6z4vKJ1HPlP43dtiLOIyKfO7YTDZwOLDBjqkAbNmrAucIrJTe%2B9Qjmcz%2BzO4qGz1U4yxtlDk7PQiLwaOQDIop8t7ITgjnXWqi4NxE2zecglBYk16VxqgRQN12apO%2FBjlqO3e8q80pPqbLWe%2Bvj%2BnL2I7I9saMWjGWxlt9i3bFqa8yi8F%2B1bJf%2BQLRfqWFSfqGXf8Fb1wvFdD4yJZdO5HJ82v3B89E8jSrsHKn5xim2bDWShLEbuWagyCZoJBwUAm&X-Amz-Signature=925bc2224bfa00a16ec686e54923c723b702bf58a33c02fd65fe2a1ae4f478de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W74LV43W%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC5aAuNFii4GConICWo5OGrRvsVhprJQ4zCl4TD24qyXQIhAKTmpev5tjTAd6lkgQ9mHg%2B00md6XfR2cNXEhqxP%2F43fKv8DCHAQABoMNjM3NDIzMTgzODA1IgzYRs7uacl2SxMjqqYq3AMSk4NilbB6j7CSJ3Cc%2B3tqL6jSZgjDukdWahNLTxqGT1pr0GG8FPRtgkeC0HlgrpJqc%2BOY1T6mEYLvWJS%2F5Svrv1mOh%2FdkLHNwc63r7ervgrPV6ifbadSjAU7mp5pNF2dLqtPb7Uq1wB59rwgkvgEHBNHyEhKcqMnCWkvZ0E0e4y%2Bos4mgT%2B5Z5JOsFlmm2wGbotzKCQAW6H4cjDynctkOL0aSsedOYtLzGTgxVgN2vWh8Mg0DIJ7dCavvrRZgqrMkoy3g%2BZHnGXCNh16C4dQzKoPxIdGS3IdKZYuREHzWAmyfX7953gAULnrroVWK4VM1sVlWVXmsGLtUmJjQPso8ch2FgldSmBTlcCG1%2FdiPXr9Juapgjckq9MJzKsTsUY1eVkNXAcufjwjfhREPpHj8WCkTq4sfAJVm0A5YnpQwJ5IFJJkdpER7ta6If1GOIbF%2ByETOqWtiJlcSLHHGlGcuYMWYqZfZvoiqXkDC8DVAHvkRPIGcGFWdRBxzaN2a58iAr5GTbXHqsPkRjyUSwS7iUuRKP67whMMfWMUTSzjR52KgsbIo1SbSRlDs5G5WjL5xZEH0hc60MDmsSzF9IMaZr4iTT9ekq0ck6z4vKJ1HPlP43dtiLOIyKfO7YTDZwOLDBjqkAbNmrAucIrJTe%2B9Qjmcz%2BzO4qGz1U4yxtlDk7PQiLwaOQDIop8t7ITgjnXWqi4NxE2zecglBYk16VxqgRQN12apO%2FBjlqO3e8q80pPqbLWe%2Bvj%2BnL2I7I9saMWjGWxlt9i3bFqa8yi8F%2B1bJf%2BQLRfqWFSfqGXf8Fb1wvFdD4yJZdO5HJ82v3B89E8jSrsHKn5xim2bDWShLEbuWagyCZoJBwUAm&X-Amz-Signature=fd460ddca5f3d988ee68644d53be9f7cf4b250812752095cc9e094bfe5aecf07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W74LV43W%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC5aAuNFii4GConICWo5OGrRvsVhprJQ4zCl4TD24qyXQIhAKTmpev5tjTAd6lkgQ9mHg%2B00md6XfR2cNXEhqxP%2F43fKv8DCHAQABoMNjM3NDIzMTgzODA1IgzYRs7uacl2SxMjqqYq3AMSk4NilbB6j7CSJ3Cc%2B3tqL6jSZgjDukdWahNLTxqGT1pr0GG8FPRtgkeC0HlgrpJqc%2BOY1T6mEYLvWJS%2F5Svrv1mOh%2FdkLHNwc63r7ervgrPV6ifbadSjAU7mp5pNF2dLqtPb7Uq1wB59rwgkvgEHBNHyEhKcqMnCWkvZ0E0e4y%2Bos4mgT%2B5Z5JOsFlmm2wGbotzKCQAW6H4cjDynctkOL0aSsedOYtLzGTgxVgN2vWh8Mg0DIJ7dCavvrRZgqrMkoy3g%2BZHnGXCNh16C4dQzKoPxIdGS3IdKZYuREHzWAmyfX7953gAULnrroVWK4VM1sVlWVXmsGLtUmJjQPso8ch2FgldSmBTlcCG1%2FdiPXr9Juapgjckq9MJzKsTsUY1eVkNXAcufjwjfhREPpHj8WCkTq4sfAJVm0A5YnpQwJ5IFJJkdpER7ta6If1GOIbF%2ByETOqWtiJlcSLHHGlGcuYMWYqZfZvoiqXkDC8DVAHvkRPIGcGFWdRBxzaN2a58iAr5GTbXHqsPkRjyUSwS7iUuRKP67whMMfWMUTSzjR52KgsbIo1SbSRlDs5G5WjL5xZEH0hc60MDmsSzF9IMaZr4iTT9ekq0ck6z4vKJ1HPlP43dtiLOIyKfO7YTDZwOLDBjqkAbNmrAucIrJTe%2B9Qjmcz%2BzO4qGz1U4yxtlDk7PQiLwaOQDIop8t7ITgjnXWqi4NxE2zecglBYk16VxqgRQN12apO%2FBjlqO3e8q80pPqbLWe%2Bvj%2BnL2I7I9saMWjGWxlt9i3bFqa8yi8F%2B1bJf%2BQLRfqWFSfqGXf8Fb1wvFdD4yJZdO5HJ82v3B89E8jSrsHKn5xim2bDWShLEbuWagyCZoJBwUAm&X-Amz-Signature=bc2b582a9a6e4d11adef776743046f914254a2e5670ead446755b722e4d6a942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W74LV43W%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC5aAuNFii4GConICWo5OGrRvsVhprJQ4zCl4TD24qyXQIhAKTmpev5tjTAd6lkgQ9mHg%2B00md6XfR2cNXEhqxP%2F43fKv8DCHAQABoMNjM3NDIzMTgzODA1IgzYRs7uacl2SxMjqqYq3AMSk4NilbB6j7CSJ3Cc%2B3tqL6jSZgjDukdWahNLTxqGT1pr0GG8FPRtgkeC0HlgrpJqc%2BOY1T6mEYLvWJS%2F5Svrv1mOh%2FdkLHNwc63r7ervgrPV6ifbadSjAU7mp5pNF2dLqtPb7Uq1wB59rwgkvgEHBNHyEhKcqMnCWkvZ0E0e4y%2Bos4mgT%2B5Z5JOsFlmm2wGbotzKCQAW6H4cjDynctkOL0aSsedOYtLzGTgxVgN2vWh8Mg0DIJ7dCavvrRZgqrMkoy3g%2BZHnGXCNh16C4dQzKoPxIdGS3IdKZYuREHzWAmyfX7953gAULnrroVWK4VM1sVlWVXmsGLtUmJjQPso8ch2FgldSmBTlcCG1%2FdiPXr9Juapgjckq9MJzKsTsUY1eVkNXAcufjwjfhREPpHj8WCkTq4sfAJVm0A5YnpQwJ5IFJJkdpER7ta6If1GOIbF%2ByETOqWtiJlcSLHHGlGcuYMWYqZfZvoiqXkDC8DVAHvkRPIGcGFWdRBxzaN2a58iAr5GTbXHqsPkRjyUSwS7iUuRKP67whMMfWMUTSzjR52KgsbIo1SbSRlDs5G5WjL5xZEH0hc60MDmsSzF9IMaZr4iTT9ekq0ck6z4vKJ1HPlP43dtiLOIyKfO7YTDZwOLDBjqkAbNmrAucIrJTe%2B9Qjmcz%2BzO4qGz1U4yxtlDk7PQiLwaOQDIop8t7ITgjnXWqi4NxE2zecglBYk16VxqgRQN12apO%2FBjlqO3e8q80pPqbLWe%2Bvj%2BnL2I7I9saMWjGWxlt9i3bFqa8yi8F%2B1bJf%2BQLRfqWFSfqGXf8Fb1wvFdD4yJZdO5HJ82v3B89E8jSrsHKn5xim2bDWShLEbuWagyCZoJBwUAm&X-Amz-Signature=d1f974604c54106c324c59fb2e88a4295c5f7dadd761a9427252665063b4329a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W74LV43W%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC5aAuNFii4GConICWo5OGrRvsVhprJQ4zCl4TD24qyXQIhAKTmpev5tjTAd6lkgQ9mHg%2B00md6XfR2cNXEhqxP%2F43fKv8DCHAQABoMNjM3NDIzMTgzODA1IgzYRs7uacl2SxMjqqYq3AMSk4NilbB6j7CSJ3Cc%2B3tqL6jSZgjDukdWahNLTxqGT1pr0GG8FPRtgkeC0HlgrpJqc%2BOY1T6mEYLvWJS%2F5Svrv1mOh%2FdkLHNwc63r7ervgrPV6ifbadSjAU7mp5pNF2dLqtPb7Uq1wB59rwgkvgEHBNHyEhKcqMnCWkvZ0E0e4y%2Bos4mgT%2B5Z5JOsFlmm2wGbotzKCQAW6H4cjDynctkOL0aSsedOYtLzGTgxVgN2vWh8Mg0DIJ7dCavvrRZgqrMkoy3g%2BZHnGXCNh16C4dQzKoPxIdGS3IdKZYuREHzWAmyfX7953gAULnrroVWK4VM1sVlWVXmsGLtUmJjQPso8ch2FgldSmBTlcCG1%2FdiPXr9Juapgjckq9MJzKsTsUY1eVkNXAcufjwjfhREPpHj8WCkTq4sfAJVm0A5YnpQwJ5IFJJkdpER7ta6If1GOIbF%2ByETOqWtiJlcSLHHGlGcuYMWYqZfZvoiqXkDC8DVAHvkRPIGcGFWdRBxzaN2a58iAr5GTbXHqsPkRjyUSwS7iUuRKP67whMMfWMUTSzjR52KgsbIo1SbSRlDs5G5WjL5xZEH0hc60MDmsSzF9IMaZr4iTT9ekq0ck6z4vKJ1HPlP43dtiLOIyKfO7YTDZwOLDBjqkAbNmrAucIrJTe%2B9Qjmcz%2BzO4qGz1U4yxtlDk7PQiLwaOQDIop8t7ITgjnXWqi4NxE2zecglBYk16VxqgRQN12apO%2FBjlqO3e8q80pPqbLWe%2Bvj%2BnL2I7I9saMWjGWxlt9i3bFqa8yi8F%2B1bJf%2BQLRfqWFSfqGXf8Fb1wvFdD4yJZdO5HJ82v3B89E8jSrsHKn5xim2bDWShLEbuWagyCZoJBwUAm&X-Amz-Signature=14bf6eeafee44eee4acc1182d037ede54e34980a69293c7bb6dbed1d8f8ff53c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W74LV43W%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC5aAuNFii4GConICWo5OGrRvsVhprJQ4zCl4TD24qyXQIhAKTmpev5tjTAd6lkgQ9mHg%2B00md6XfR2cNXEhqxP%2F43fKv8DCHAQABoMNjM3NDIzMTgzODA1IgzYRs7uacl2SxMjqqYq3AMSk4NilbB6j7CSJ3Cc%2B3tqL6jSZgjDukdWahNLTxqGT1pr0GG8FPRtgkeC0HlgrpJqc%2BOY1T6mEYLvWJS%2F5Svrv1mOh%2FdkLHNwc63r7ervgrPV6ifbadSjAU7mp5pNF2dLqtPb7Uq1wB59rwgkvgEHBNHyEhKcqMnCWkvZ0E0e4y%2Bos4mgT%2B5Z5JOsFlmm2wGbotzKCQAW6H4cjDynctkOL0aSsedOYtLzGTgxVgN2vWh8Mg0DIJ7dCavvrRZgqrMkoy3g%2BZHnGXCNh16C4dQzKoPxIdGS3IdKZYuREHzWAmyfX7953gAULnrroVWK4VM1sVlWVXmsGLtUmJjQPso8ch2FgldSmBTlcCG1%2FdiPXr9Juapgjckq9MJzKsTsUY1eVkNXAcufjwjfhREPpHj8WCkTq4sfAJVm0A5YnpQwJ5IFJJkdpER7ta6If1GOIbF%2ByETOqWtiJlcSLHHGlGcuYMWYqZfZvoiqXkDC8DVAHvkRPIGcGFWdRBxzaN2a58iAr5GTbXHqsPkRjyUSwS7iUuRKP67whMMfWMUTSzjR52KgsbIo1SbSRlDs5G5WjL5xZEH0hc60MDmsSzF9IMaZr4iTT9ekq0ck6z4vKJ1HPlP43dtiLOIyKfO7YTDZwOLDBjqkAbNmrAucIrJTe%2B9Qjmcz%2BzO4qGz1U4yxtlDk7PQiLwaOQDIop8t7ITgjnXWqi4NxE2zecglBYk16VxqgRQN12apO%2FBjlqO3e8q80pPqbLWe%2Bvj%2BnL2I7I9saMWjGWxlt9i3bFqa8yi8F%2B1bJf%2BQLRfqWFSfqGXf8Fb1wvFdD4yJZdO5HJ82v3B89E8jSrsHKn5xim2bDWShLEbuWagyCZoJBwUAm&X-Amz-Signature=5b47c41628fe0f51c167c1629483c7bb4a68c3622bff7281a15b183800fd0d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
