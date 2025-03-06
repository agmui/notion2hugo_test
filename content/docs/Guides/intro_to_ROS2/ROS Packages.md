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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUBA6THQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2wM%2B%2Fg2qSxJygWjhDcDY4psjEBzI1CTjGV0%2FEXDR%2F%2BwIgEkHzrh8fpfwFHyd82UV1pYIzyJ%2FfcqbdriKUr%2BLdukUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBoL8acQJNUgxM4QHCrcAwdyl1uuW4ifJNqIL54wdoj951JyO1Ok1ucQ%2B11%2FWBvRBhQin5TlXwKi5OaC87BYiREXfze6QDV96WaFGRrZdvBXH9%2FyF2NW7oWkltvZ9X2DmeibLeWdlRZBjS6ypey5VlX%2FZsncV4eSb6XCiZAo1CECpHFtEVJyBpL3Ai70s1F9DLjTwrnSQar8V8Jvdv6CF0GjRBf3tMt0nM5a%2BLmbQ%2Fq8PMZf3slGvxFoyw7%2BmEehLZvcxKwRUH%2F0ZPyEuBwmdZTB5WDdB94yVQIed7i5WrrzDUL75fCRGIP9agLjW4D0ccK63XLQ50VFp3xpeSUl46tj5bz7i0TKsv%2BC0GUQkbemwWpPznIlYzEu7PRxfdRwcH6DMux8HEIYLkLQ6s3vUZQ%2Bj4JrEkpT6mJBjJs1oPNKsHmvlhalI4vVoZlWoV64c%2FiaS3FCZyVf5Pxyc0QhVlmFdg5Ms3tZwGlpfV02VYo1IvvxnZXMNEmAnWNTZ7Pdr0Ob4%2BQmMsdG46WQ45%2BtF27QGZbn12oK278%2FBQvgvSfomyAZCKuK2twTODL6Ziw%2BLs4pj9uD7%2Bua9%2B6ey%2Fl4gPmZWDSbEijda4o0VgQ4yalieKQP8S9waUaKgvp2WUNMBQy%2BcU4fmjFj5TerMJz2pL4GOqUBrDxVV8vGPnN6qyfc%2B9I0CUxI03TYoRnN1uaAGakCdIjYnimEU%2FZrMQpwFS3Nx2HBRbUgPlJT0Q5ywDLFkQR7NsJHwnEAXLVygw41jLCAaIMHEuGoZse2NIa2Ml7d11vKl1dqqwARjnbkQQg6da1rfjIARqPAmob%2B4NdWcvO8EQMmUqWv8gx2dGxYEJHx4%2FlmfJU%2BRbf01FygyAuugAi4hQJZfbIO&X-Amz-Signature=b3eeb216a6c9ae050d00746eedabb7a8c7691b2f915d850a8cfec5c1e4055f89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUBA6THQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2wM%2B%2Fg2qSxJygWjhDcDY4psjEBzI1CTjGV0%2FEXDR%2F%2BwIgEkHzrh8fpfwFHyd82UV1pYIzyJ%2FfcqbdriKUr%2BLdukUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBoL8acQJNUgxM4QHCrcAwdyl1uuW4ifJNqIL54wdoj951JyO1Ok1ucQ%2B11%2FWBvRBhQin5TlXwKi5OaC87BYiREXfze6QDV96WaFGRrZdvBXH9%2FyF2NW7oWkltvZ9X2DmeibLeWdlRZBjS6ypey5VlX%2FZsncV4eSb6XCiZAo1CECpHFtEVJyBpL3Ai70s1F9DLjTwrnSQar8V8Jvdv6CF0GjRBf3tMt0nM5a%2BLmbQ%2Fq8PMZf3slGvxFoyw7%2BmEehLZvcxKwRUH%2F0ZPyEuBwmdZTB5WDdB94yVQIed7i5WrrzDUL75fCRGIP9agLjW4D0ccK63XLQ50VFp3xpeSUl46tj5bz7i0TKsv%2BC0GUQkbemwWpPznIlYzEu7PRxfdRwcH6DMux8HEIYLkLQ6s3vUZQ%2Bj4JrEkpT6mJBjJs1oPNKsHmvlhalI4vVoZlWoV64c%2FiaS3FCZyVf5Pxyc0QhVlmFdg5Ms3tZwGlpfV02VYo1IvvxnZXMNEmAnWNTZ7Pdr0Ob4%2BQmMsdG46WQ45%2BtF27QGZbn12oK278%2FBQvgvSfomyAZCKuK2twTODL6Ziw%2BLs4pj9uD7%2Bua9%2B6ey%2Fl4gPmZWDSbEijda4o0VgQ4yalieKQP8S9waUaKgvp2WUNMBQy%2BcU4fmjFj5TerMJz2pL4GOqUBrDxVV8vGPnN6qyfc%2B9I0CUxI03TYoRnN1uaAGakCdIjYnimEU%2FZrMQpwFS3Nx2HBRbUgPlJT0Q5ywDLFkQR7NsJHwnEAXLVygw41jLCAaIMHEuGoZse2NIa2Ml7d11vKl1dqqwARjnbkQQg6da1rfjIARqPAmob%2B4NdWcvO8EQMmUqWv8gx2dGxYEJHx4%2FlmfJU%2BRbf01FygyAuugAi4hQJZfbIO&X-Amz-Signature=e0c98bd49eb874e7d2543eda7e1266f0617f1d5d07bbf5acc8c85c610c3aed1d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUBA6THQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2wM%2B%2Fg2qSxJygWjhDcDY4psjEBzI1CTjGV0%2FEXDR%2F%2BwIgEkHzrh8fpfwFHyd82UV1pYIzyJ%2FfcqbdriKUr%2BLdukUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBoL8acQJNUgxM4QHCrcAwdyl1uuW4ifJNqIL54wdoj951JyO1Ok1ucQ%2B11%2FWBvRBhQin5TlXwKi5OaC87BYiREXfze6QDV96WaFGRrZdvBXH9%2FyF2NW7oWkltvZ9X2DmeibLeWdlRZBjS6ypey5VlX%2FZsncV4eSb6XCiZAo1CECpHFtEVJyBpL3Ai70s1F9DLjTwrnSQar8V8Jvdv6CF0GjRBf3tMt0nM5a%2BLmbQ%2Fq8PMZf3slGvxFoyw7%2BmEehLZvcxKwRUH%2F0ZPyEuBwmdZTB5WDdB94yVQIed7i5WrrzDUL75fCRGIP9agLjW4D0ccK63XLQ50VFp3xpeSUl46tj5bz7i0TKsv%2BC0GUQkbemwWpPznIlYzEu7PRxfdRwcH6DMux8HEIYLkLQ6s3vUZQ%2Bj4JrEkpT6mJBjJs1oPNKsHmvlhalI4vVoZlWoV64c%2FiaS3FCZyVf5Pxyc0QhVlmFdg5Ms3tZwGlpfV02VYo1IvvxnZXMNEmAnWNTZ7Pdr0Ob4%2BQmMsdG46WQ45%2BtF27QGZbn12oK278%2FBQvgvSfomyAZCKuK2twTODL6Ziw%2BLs4pj9uD7%2Bua9%2B6ey%2Fl4gPmZWDSbEijda4o0VgQ4yalieKQP8S9waUaKgvp2WUNMBQy%2BcU4fmjFj5TerMJz2pL4GOqUBrDxVV8vGPnN6qyfc%2B9I0CUxI03TYoRnN1uaAGakCdIjYnimEU%2FZrMQpwFS3Nx2HBRbUgPlJT0Q5ywDLFkQR7NsJHwnEAXLVygw41jLCAaIMHEuGoZse2NIa2Ml7d11vKl1dqqwARjnbkQQg6da1rfjIARqPAmob%2B4NdWcvO8EQMmUqWv8gx2dGxYEJHx4%2FlmfJU%2BRbf01FygyAuugAi4hQJZfbIO&X-Amz-Signature=0f4b048b41f2aec671fe27a3e63571327114a0edbcb91d7f2cded9f9871f278b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUBA6THQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2wM%2B%2Fg2qSxJygWjhDcDY4psjEBzI1CTjGV0%2FEXDR%2F%2BwIgEkHzrh8fpfwFHyd82UV1pYIzyJ%2FfcqbdriKUr%2BLdukUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBoL8acQJNUgxM4QHCrcAwdyl1uuW4ifJNqIL54wdoj951JyO1Ok1ucQ%2B11%2FWBvRBhQin5TlXwKi5OaC87BYiREXfze6QDV96WaFGRrZdvBXH9%2FyF2NW7oWkltvZ9X2DmeibLeWdlRZBjS6ypey5VlX%2FZsncV4eSb6XCiZAo1CECpHFtEVJyBpL3Ai70s1F9DLjTwrnSQar8V8Jvdv6CF0GjRBf3tMt0nM5a%2BLmbQ%2Fq8PMZf3slGvxFoyw7%2BmEehLZvcxKwRUH%2F0ZPyEuBwmdZTB5WDdB94yVQIed7i5WrrzDUL75fCRGIP9agLjW4D0ccK63XLQ50VFp3xpeSUl46tj5bz7i0TKsv%2BC0GUQkbemwWpPznIlYzEu7PRxfdRwcH6DMux8HEIYLkLQ6s3vUZQ%2Bj4JrEkpT6mJBjJs1oPNKsHmvlhalI4vVoZlWoV64c%2FiaS3FCZyVf5Pxyc0QhVlmFdg5Ms3tZwGlpfV02VYo1IvvxnZXMNEmAnWNTZ7Pdr0Ob4%2BQmMsdG46WQ45%2BtF27QGZbn12oK278%2FBQvgvSfomyAZCKuK2twTODL6Ziw%2BLs4pj9uD7%2Bua9%2B6ey%2Fl4gPmZWDSbEijda4o0VgQ4yalieKQP8S9waUaKgvp2WUNMBQy%2BcU4fmjFj5TerMJz2pL4GOqUBrDxVV8vGPnN6qyfc%2B9I0CUxI03TYoRnN1uaAGakCdIjYnimEU%2FZrMQpwFS3Nx2HBRbUgPlJT0Q5ywDLFkQR7NsJHwnEAXLVygw41jLCAaIMHEuGoZse2NIa2Ml7d11vKl1dqqwARjnbkQQg6da1rfjIARqPAmob%2B4NdWcvO8EQMmUqWv8gx2dGxYEJHx4%2FlmfJU%2BRbf01FygyAuugAi4hQJZfbIO&X-Amz-Signature=788c96fafdbba2f3d202183557e4313bf0b50443d520afd8354e6c67d239634e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUBA6THQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2wM%2B%2Fg2qSxJygWjhDcDY4psjEBzI1CTjGV0%2FEXDR%2F%2BwIgEkHzrh8fpfwFHyd82UV1pYIzyJ%2FfcqbdriKUr%2BLdukUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBoL8acQJNUgxM4QHCrcAwdyl1uuW4ifJNqIL54wdoj951JyO1Ok1ucQ%2B11%2FWBvRBhQin5TlXwKi5OaC87BYiREXfze6QDV96WaFGRrZdvBXH9%2FyF2NW7oWkltvZ9X2DmeibLeWdlRZBjS6ypey5VlX%2FZsncV4eSb6XCiZAo1CECpHFtEVJyBpL3Ai70s1F9DLjTwrnSQar8V8Jvdv6CF0GjRBf3tMt0nM5a%2BLmbQ%2Fq8PMZf3slGvxFoyw7%2BmEehLZvcxKwRUH%2F0ZPyEuBwmdZTB5WDdB94yVQIed7i5WrrzDUL75fCRGIP9agLjW4D0ccK63XLQ50VFp3xpeSUl46tj5bz7i0TKsv%2BC0GUQkbemwWpPznIlYzEu7PRxfdRwcH6DMux8HEIYLkLQ6s3vUZQ%2Bj4JrEkpT6mJBjJs1oPNKsHmvlhalI4vVoZlWoV64c%2FiaS3FCZyVf5Pxyc0QhVlmFdg5Ms3tZwGlpfV02VYo1IvvxnZXMNEmAnWNTZ7Pdr0Ob4%2BQmMsdG46WQ45%2BtF27QGZbn12oK278%2FBQvgvSfomyAZCKuK2twTODL6Ziw%2BLs4pj9uD7%2Bua9%2B6ey%2Fl4gPmZWDSbEijda4o0VgQ4yalieKQP8S9waUaKgvp2WUNMBQy%2BcU4fmjFj5TerMJz2pL4GOqUBrDxVV8vGPnN6qyfc%2B9I0CUxI03TYoRnN1uaAGakCdIjYnimEU%2FZrMQpwFS3Nx2HBRbUgPlJT0Q5ywDLFkQR7NsJHwnEAXLVygw41jLCAaIMHEuGoZse2NIa2Ml7d11vKl1dqqwARjnbkQQg6da1rfjIARqPAmob%2B4NdWcvO8EQMmUqWv8gx2dGxYEJHx4%2FlmfJU%2BRbf01FygyAuugAi4hQJZfbIO&X-Amz-Signature=8590309b128a4fc772f8b75f15b6a29d03d58ce836bae6a79c1e7b1df4eac3bb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUBA6THQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2wM%2B%2Fg2qSxJygWjhDcDY4psjEBzI1CTjGV0%2FEXDR%2F%2BwIgEkHzrh8fpfwFHyd82UV1pYIzyJ%2FfcqbdriKUr%2BLdukUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBoL8acQJNUgxM4QHCrcAwdyl1uuW4ifJNqIL54wdoj951JyO1Ok1ucQ%2B11%2FWBvRBhQin5TlXwKi5OaC87BYiREXfze6QDV96WaFGRrZdvBXH9%2FyF2NW7oWkltvZ9X2DmeibLeWdlRZBjS6ypey5VlX%2FZsncV4eSb6XCiZAo1CECpHFtEVJyBpL3Ai70s1F9DLjTwrnSQar8V8Jvdv6CF0GjRBf3tMt0nM5a%2BLmbQ%2Fq8PMZf3slGvxFoyw7%2BmEehLZvcxKwRUH%2F0ZPyEuBwmdZTB5WDdB94yVQIed7i5WrrzDUL75fCRGIP9agLjW4D0ccK63XLQ50VFp3xpeSUl46tj5bz7i0TKsv%2BC0GUQkbemwWpPznIlYzEu7PRxfdRwcH6DMux8HEIYLkLQ6s3vUZQ%2Bj4JrEkpT6mJBjJs1oPNKsHmvlhalI4vVoZlWoV64c%2FiaS3FCZyVf5Pxyc0QhVlmFdg5Ms3tZwGlpfV02VYo1IvvxnZXMNEmAnWNTZ7Pdr0Ob4%2BQmMsdG46WQ45%2BtF27QGZbn12oK278%2FBQvgvSfomyAZCKuK2twTODL6Ziw%2BLs4pj9uD7%2Bua9%2B6ey%2Fl4gPmZWDSbEijda4o0VgQ4yalieKQP8S9waUaKgvp2WUNMBQy%2BcU4fmjFj5TerMJz2pL4GOqUBrDxVV8vGPnN6qyfc%2B9I0CUxI03TYoRnN1uaAGakCdIjYnimEU%2FZrMQpwFS3Nx2HBRbUgPlJT0Q5ywDLFkQR7NsJHwnEAXLVygw41jLCAaIMHEuGoZse2NIa2Ml7d11vKl1dqqwARjnbkQQg6da1rfjIARqPAmob%2B4NdWcvO8EQMmUqWv8gx2dGxYEJHx4%2FlmfJU%2BRbf01FygyAuugAi4hQJZfbIO&X-Amz-Signature=8174e6c32c5813ca8c91a3bf496d3ef3e9a9e38c73b2e6add009b565fb06a44d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUBA6THQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2wM%2B%2Fg2qSxJygWjhDcDY4psjEBzI1CTjGV0%2FEXDR%2F%2BwIgEkHzrh8fpfwFHyd82UV1pYIzyJ%2FfcqbdriKUr%2BLdukUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBoL8acQJNUgxM4QHCrcAwdyl1uuW4ifJNqIL54wdoj951JyO1Ok1ucQ%2B11%2FWBvRBhQin5TlXwKi5OaC87BYiREXfze6QDV96WaFGRrZdvBXH9%2FyF2NW7oWkltvZ9X2DmeibLeWdlRZBjS6ypey5VlX%2FZsncV4eSb6XCiZAo1CECpHFtEVJyBpL3Ai70s1F9DLjTwrnSQar8V8Jvdv6CF0GjRBf3tMt0nM5a%2BLmbQ%2Fq8PMZf3slGvxFoyw7%2BmEehLZvcxKwRUH%2F0ZPyEuBwmdZTB5WDdB94yVQIed7i5WrrzDUL75fCRGIP9agLjW4D0ccK63XLQ50VFp3xpeSUl46tj5bz7i0TKsv%2BC0GUQkbemwWpPznIlYzEu7PRxfdRwcH6DMux8HEIYLkLQ6s3vUZQ%2Bj4JrEkpT6mJBjJs1oPNKsHmvlhalI4vVoZlWoV64c%2FiaS3FCZyVf5Pxyc0QhVlmFdg5Ms3tZwGlpfV02VYo1IvvxnZXMNEmAnWNTZ7Pdr0Ob4%2BQmMsdG46WQ45%2BtF27QGZbn12oK278%2FBQvgvSfomyAZCKuK2twTODL6Ziw%2BLs4pj9uD7%2Bua9%2B6ey%2Fl4gPmZWDSbEijda4o0VgQ4yalieKQP8S9waUaKgvp2WUNMBQy%2BcU4fmjFj5TerMJz2pL4GOqUBrDxVV8vGPnN6qyfc%2B9I0CUxI03TYoRnN1uaAGakCdIjYnimEU%2FZrMQpwFS3Nx2HBRbUgPlJT0Q5ywDLFkQR7NsJHwnEAXLVygw41jLCAaIMHEuGoZse2NIa2Ml7d11vKl1dqqwARjnbkQQg6da1rfjIARqPAmob%2B4NdWcvO8EQMmUqWv8gx2dGxYEJHx4%2FlmfJU%2BRbf01FygyAuugAi4hQJZfbIO&X-Amz-Signature=b91e56e9a542e88b4248f2acd3f4c1e5d5797bafcb519cebaad550b12892c48d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
