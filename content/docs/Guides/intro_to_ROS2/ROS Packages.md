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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ4ABA6%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCvsC6%2BUJ9AVOxpkcl6wqCgM76EmGWp4is%2BpnZQBGYzhQIhAII26aVBqUNh5h3JW05Jj7S6z9l4jAq%2BLsGjbEmTHanlKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziVkjK4yYQLUJET9cq3AMfRNDBuzy3aXR%2BFbX%2FV0FvKoqROlMxCuT7QCSEFokuvle1iRxD0SrKJwGn7p5xTNhRgsrLAmkVY36Y3oNSZ6aOOABCwTijq9eyHVchjkN2Xxrmn8EdlSkyiJVbsdtWMV3A%2BJ6nRrlMyMSZY6fQkSt5LkEDYQXKoOMlrd5sbRPBhKMjpW%2F5ZsyvhZK4EJrjUXg%2Ba9c%2FUWHUEamb0VIwT5WehukcFz%2BdrabEYlVUHu9Q%2F6iSdMQQCLHk4M2fAijEJftRTg2SUsFTK1jQeik8VL4RjQygJ3YfCPnJzXr4oK0bcjNT%2FErx4zfSGhjlVuLnFugRaYt8HWVtp4DYpxVWFY6n7ud0XSfjCKTvE3w20oC%2BlidnB9y8QS844ZFix7rujcRtHc%2FLDBNyBBoMzJk2loZ5dUhp%2BznlUWxHx%2B%2FTkjgubj5NRtuynd9HQTbZf0wpM7yrV2cdEh1TpUIjovj1BwG6uNAqJnxhn3FaKcfT%2FzsB66gFPEFWjyq3XBVhfLLe%2FS%2Fq%2FPiAE9QQ1wU56qB9rKSOIPbXySiBPsGhUZZufgpOwiB9UGZr%2Fp53ulKh4I%2Fqn8Ql58jhVYk4YhFEVL9rmRbVsilvLNpFHxu1AhoKcSkz1qnwFcNQc4hcE2OR1DC1qMLBBjqkAVUEPajSm0nYnxuZ4PPdvwEibAS1xNzZ3TlsQ8zcSIQu2e7dl6HmXUx6wzLqdxVezWNHklUaGQchfOQlYQjydhdj0DCf5wkNupijCTw9ZjxB12U1LvgXcBY0bVie5ZaEC%2FJTUEP3psHfCYSi9FntQraUrBlu72vkTdmj5JvKx%2Baf6e6kzMjK4KbK2Y%2FCK%2FO%2BStqW2R%2FyMJ2SeL3AIjgxik85kSji&X-Amz-Signature=b793af180c52c9e74d89862f7740b4259921e2d4f04c03e351255a27a738a893&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ4ABA6%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCvsC6%2BUJ9AVOxpkcl6wqCgM76EmGWp4is%2BpnZQBGYzhQIhAII26aVBqUNh5h3JW05Jj7S6z9l4jAq%2BLsGjbEmTHanlKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziVkjK4yYQLUJET9cq3AMfRNDBuzy3aXR%2BFbX%2FV0FvKoqROlMxCuT7QCSEFokuvle1iRxD0SrKJwGn7p5xTNhRgsrLAmkVY36Y3oNSZ6aOOABCwTijq9eyHVchjkN2Xxrmn8EdlSkyiJVbsdtWMV3A%2BJ6nRrlMyMSZY6fQkSt5LkEDYQXKoOMlrd5sbRPBhKMjpW%2F5ZsyvhZK4EJrjUXg%2Ba9c%2FUWHUEamb0VIwT5WehukcFz%2BdrabEYlVUHu9Q%2F6iSdMQQCLHk4M2fAijEJftRTg2SUsFTK1jQeik8VL4RjQygJ3YfCPnJzXr4oK0bcjNT%2FErx4zfSGhjlVuLnFugRaYt8HWVtp4DYpxVWFY6n7ud0XSfjCKTvE3w20oC%2BlidnB9y8QS844ZFix7rujcRtHc%2FLDBNyBBoMzJk2loZ5dUhp%2BznlUWxHx%2B%2FTkjgubj5NRtuynd9HQTbZf0wpM7yrV2cdEh1TpUIjovj1BwG6uNAqJnxhn3FaKcfT%2FzsB66gFPEFWjyq3XBVhfLLe%2FS%2Fq%2FPiAE9QQ1wU56qB9rKSOIPbXySiBPsGhUZZufgpOwiB9UGZr%2Fp53ulKh4I%2Fqn8Ql58jhVYk4YhFEVL9rmRbVsilvLNpFHxu1AhoKcSkz1qnwFcNQc4hcE2OR1DC1qMLBBjqkAVUEPajSm0nYnxuZ4PPdvwEibAS1xNzZ3TlsQ8zcSIQu2e7dl6HmXUx6wzLqdxVezWNHklUaGQchfOQlYQjydhdj0DCf5wkNupijCTw9ZjxB12U1LvgXcBY0bVie5ZaEC%2FJTUEP3psHfCYSi9FntQraUrBlu72vkTdmj5JvKx%2Baf6e6kzMjK4KbK2Y%2FCK%2FO%2BStqW2R%2FyMJ2SeL3AIjgxik85kSji&X-Amz-Signature=98aa54bb73553465ac2021d698f084fa17d0237b8d27a7d622e000e64d389742&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ4ABA6%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCvsC6%2BUJ9AVOxpkcl6wqCgM76EmGWp4is%2BpnZQBGYzhQIhAII26aVBqUNh5h3JW05Jj7S6z9l4jAq%2BLsGjbEmTHanlKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziVkjK4yYQLUJET9cq3AMfRNDBuzy3aXR%2BFbX%2FV0FvKoqROlMxCuT7QCSEFokuvle1iRxD0SrKJwGn7p5xTNhRgsrLAmkVY36Y3oNSZ6aOOABCwTijq9eyHVchjkN2Xxrmn8EdlSkyiJVbsdtWMV3A%2BJ6nRrlMyMSZY6fQkSt5LkEDYQXKoOMlrd5sbRPBhKMjpW%2F5ZsyvhZK4EJrjUXg%2Ba9c%2FUWHUEamb0VIwT5WehukcFz%2BdrabEYlVUHu9Q%2F6iSdMQQCLHk4M2fAijEJftRTg2SUsFTK1jQeik8VL4RjQygJ3YfCPnJzXr4oK0bcjNT%2FErx4zfSGhjlVuLnFugRaYt8HWVtp4DYpxVWFY6n7ud0XSfjCKTvE3w20oC%2BlidnB9y8QS844ZFix7rujcRtHc%2FLDBNyBBoMzJk2loZ5dUhp%2BznlUWxHx%2B%2FTkjgubj5NRtuynd9HQTbZf0wpM7yrV2cdEh1TpUIjovj1BwG6uNAqJnxhn3FaKcfT%2FzsB66gFPEFWjyq3XBVhfLLe%2FS%2Fq%2FPiAE9QQ1wU56qB9rKSOIPbXySiBPsGhUZZufgpOwiB9UGZr%2Fp53ulKh4I%2Fqn8Ql58jhVYk4YhFEVL9rmRbVsilvLNpFHxu1AhoKcSkz1qnwFcNQc4hcE2OR1DC1qMLBBjqkAVUEPajSm0nYnxuZ4PPdvwEibAS1xNzZ3TlsQ8zcSIQu2e7dl6HmXUx6wzLqdxVezWNHklUaGQchfOQlYQjydhdj0DCf5wkNupijCTw9ZjxB12U1LvgXcBY0bVie5ZaEC%2FJTUEP3psHfCYSi9FntQraUrBlu72vkTdmj5JvKx%2Baf6e6kzMjK4KbK2Y%2FCK%2FO%2BStqW2R%2FyMJ2SeL3AIjgxik85kSji&X-Amz-Signature=9f2319ac7381a6ca4d72664bf06a3108d026738246995a91043a8d0ea41d88d1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ4ABA6%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCvsC6%2BUJ9AVOxpkcl6wqCgM76EmGWp4is%2BpnZQBGYzhQIhAII26aVBqUNh5h3JW05Jj7S6z9l4jAq%2BLsGjbEmTHanlKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziVkjK4yYQLUJET9cq3AMfRNDBuzy3aXR%2BFbX%2FV0FvKoqROlMxCuT7QCSEFokuvle1iRxD0SrKJwGn7p5xTNhRgsrLAmkVY36Y3oNSZ6aOOABCwTijq9eyHVchjkN2Xxrmn8EdlSkyiJVbsdtWMV3A%2BJ6nRrlMyMSZY6fQkSt5LkEDYQXKoOMlrd5sbRPBhKMjpW%2F5ZsyvhZK4EJrjUXg%2Ba9c%2FUWHUEamb0VIwT5WehukcFz%2BdrabEYlVUHu9Q%2F6iSdMQQCLHk4M2fAijEJftRTg2SUsFTK1jQeik8VL4RjQygJ3YfCPnJzXr4oK0bcjNT%2FErx4zfSGhjlVuLnFugRaYt8HWVtp4DYpxVWFY6n7ud0XSfjCKTvE3w20oC%2BlidnB9y8QS844ZFix7rujcRtHc%2FLDBNyBBoMzJk2loZ5dUhp%2BznlUWxHx%2B%2FTkjgubj5NRtuynd9HQTbZf0wpM7yrV2cdEh1TpUIjovj1BwG6uNAqJnxhn3FaKcfT%2FzsB66gFPEFWjyq3XBVhfLLe%2FS%2Fq%2FPiAE9QQ1wU56qB9rKSOIPbXySiBPsGhUZZufgpOwiB9UGZr%2Fp53ulKh4I%2Fqn8Ql58jhVYk4YhFEVL9rmRbVsilvLNpFHxu1AhoKcSkz1qnwFcNQc4hcE2OR1DC1qMLBBjqkAVUEPajSm0nYnxuZ4PPdvwEibAS1xNzZ3TlsQ8zcSIQu2e7dl6HmXUx6wzLqdxVezWNHklUaGQchfOQlYQjydhdj0DCf5wkNupijCTw9ZjxB12U1LvgXcBY0bVie5ZaEC%2FJTUEP3psHfCYSi9FntQraUrBlu72vkTdmj5JvKx%2Baf6e6kzMjK4KbK2Y%2FCK%2FO%2BStqW2R%2FyMJ2SeL3AIjgxik85kSji&X-Amz-Signature=7a070be46a6d97e13a41770734a6772c1d71425a5764c886139f08b1219dea94&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ4ABA6%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCvsC6%2BUJ9AVOxpkcl6wqCgM76EmGWp4is%2BpnZQBGYzhQIhAII26aVBqUNh5h3JW05Jj7S6z9l4jAq%2BLsGjbEmTHanlKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziVkjK4yYQLUJET9cq3AMfRNDBuzy3aXR%2BFbX%2FV0FvKoqROlMxCuT7QCSEFokuvle1iRxD0SrKJwGn7p5xTNhRgsrLAmkVY36Y3oNSZ6aOOABCwTijq9eyHVchjkN2Xxrmn8EdlSkyiJVbsdtWMV3A%2BJ6nRrlMyMSZY6fQkSt5LkEDYQXKoOMlrd5sbRPBhKMjpW%2F5ZsyvhZK4EJrjUXg%2Ba9c%2FUWHUEamb0VIwT5WehukcFz%2BdrabEYlVUHu9Q%2F6iSdMQQCLHk4M2fAijEJftRTg2SUsFTK1jQeik8VL4RjQygJ3YfCPnJzXr4oK0bcjNT%2FErx4zfSGhjlVuLnFugRaYt8HWVtp4DYpxVWFY6n7ud0XSfjCKTvE3w20oC%2BlidnB9y8QS844ZFix7rujcRtHc%2FLDBNyBBoMzJk2loZ5dUhp%2BznlUWxHx%2B%2FTkjgubj5NRtuynd9HQTbZf0wpM7yrV2cdEh1TpUIjovj1BwG6uNAqJnxhn3FaKcfT%2FzsB66gFPEFWjyq3XBVhfLLe%2FS%2Fq%2FPiAE9QQ1wU56qB9rKSOIPbXySiBPsGhUZZufgpOwiB9UGZr%2Fp53ulKh4I%2Fqn8Ql58jhVYk4YhFEVL9rmRbVsilvLNpFHxu1AhoKcSkz1qnwFcNQc4hcE2OR1DC1qMLBBjqkAVUEPajSm0nYnxuZ4PPdvwEibAS1xNzZ3TlsQ8zcSIQu2e7dl6HmXUx6wzLqdxVezWNHklUaGQchfOQlYQjydhdj0DCf5wkNupijCTw9ZjxB12U1LvgXcBY0bVie5ZaEC%2FJTUEP3psHfCYSi9FntQraUrBlu72vkTdmj5JvKx%2Baf6e6kzMjK4KbK2Y%2FCK%2FO%2BStqW2R%2FyMJ2SeL3AIjgxik85kSji&X-Amz-Signature=b9743f758fec4b3e42413e4c732cfb3c984b396436e606e53d7352d62ffd318b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ4ABA6%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCvsC6%2BUJ9AVOxpkcl6wqCgM76EmGWp4is%2BpnZQBGYzhQIhAII26aVBqUNh5h3JW05Jj7S6z9l4jAq%2BLsGjbEmTHanlKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziVkjK4yYQLUJET9cq3AMfRNDBuzy3aXR%2BFbX%2FV0FvKoqROlMxCuT7QCSEFokuvle1iRxD0SrKJwGn7p5xTNhRgsrLAmkVY36Y3oNSZ6aOOABCwTijq9eyHVchjkN2Xxrmn8EdlSkyiJVbsdtWMV3A%2BJ6nRrlMyMSZY6fQkSt5LkEDYQXKoOMlrd5sbRPBhKMjpW%2F5ZsyvhZK4EJrjUXg%2Ba9c%2FUWHUEamb0VIwT5WehukcFz%2BdrabEYlVUHu9Q%2F6iSdMQQCLHk4M2fAijEJftRTg2SUsFTK1jQeik8VL4RjQygJ3YfCPnJzXr4oK0bcjNT%2FErx4zfSGhjlVuLnFugRaYt8HWVtp4DYpxVWFY6n7ud0XSfjCKTvE3w20oC%2BlidnB9y8QS844ZFix7rujcRtHc%2FLDBNyBBoMzJk2loZ5dUhp%2BznlUWxHx%2B%2FTkjgubj5NRtuynd9HQTbZf0wpM7yrV2cdEh1TpUIjovj1BwG6uNAqJnxhn3FaKcfT%2FzsB66gFPEFWjyq3XBVhfLLe%2FS%2Fq%2FPiAE9QQ1wU56qB9rKSOIPbXySiBPsGhUZZufgpOwiB9UGZr%2Fp53ulKh4I%2Fqn8Ql58jhVYk4YhFEVL9rmRbVsilvLNpFHxu1AhoKcSkz1qnwFcNQc4hcE2OR1DC1qMLBBjqkAVUEPajSm0nYnxuZ4PPdvwEibAS1xNzZ3TlsQ8zcSIQu2e7dl6HmXUx6wzLqdxVezWNHklUaGQchfOQlYQjydhdj0DCf5wkNupijCTw9ZjxB12U1LvgXcBY0bVie5ZaEC%2FJTUEP3psHfCYSi9FntQraUrBlu72vkTdmj5JvKx%2Baf6e6kzMjK4KbK2Y%2FCK%2FO%2BStqW2R%2FyMJ2SeL3AIjgxik85kSji&X-Amz-Signature=82337dc606ab137e4f5139350d77cb380abc714c63978cad560fd98279a792e1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ4ABA6%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCvsC6%2BUJ9AVOxpkcl6wqCgM76EmGWp4is%2BpnZQBGYzhQIhAII26aVBqUNh5h3JW05Jj7S6z9l4jAq%2BLsGjbEmTHanlKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziVkjK4yYQLUJET9cq3AMfRNDBuzy3aXR%2BFbX%2FV0FvKoqROlMxCuT7QCSEFokuvle1iRxD0SrKJwGn7p5xTNhRgsrLAmkVY36Y3oNSZ6aOOABCwTijq9eyHVchjkN2Xxrmn8EdlSkyiJVbsdtWMV3A%2BJ6nRrlMyMSZY6fQkSt5LkEDYQXKoOMlrd5sbRPBhKMjpW%2F5ZsyvhZK4EJrjUXg%2Ba9c%2FUWHUEamb0VIwT5WehukcFz%2BdrabEYlVUHu9Q%2F6iSdMQQCLHk4M2fAijEJftRTg2SUsFTK1jQeik8VL4RjQygJ3YfCPnJzXr4oK0bcjNT%2FErx4zfSGhjlVuLnFugRaYt8HWVtp4DYpxVWFY6n7ud0XSfjCKTvE3w20oC%2BlidnB9y8QS844ZFix7rujcRtHc%2FLDBNyBBoMzJk2loZ5dUhp%2BznlUWxHx%2B%2FTkjgubj5NRtuynd9HQTbZf0wpM7yrV2cdEh1TpUIjovj1BwG6uNAqJnxhn3FaKcfT%2FzsB66gFPEFWjyq3XBVhfLLe%2FS%2Fq%2FPiAE9QQ1wU56qB9rKSOIPbXySiBPsGhUZZufgpOwiB9UGZr%2Fp53ulKh4I%2Fqn8Ql58jhVYk4YhFEVL9rmRbVsilvLNpFHxu1AhoKcSkz1qnwFcNQc4hcE2OR1DC1qMLBBjqkAVUEPajSm0nYnxuZ4PPdvwEibAS1xNzZ3TlsQ8zcSIQu2e7dl6HmXUx6wzLqdxVezWNHklUaGQchfOQlYQjydhdj0DCf5wkNupijCTw9ZjxB12U1LvgXcBY0bVie5ZaEC%2FJTUEP3psHfCYSi9FntQraUrBlu72vkTdmj5JvKx%2Baf6e6kzMjK4KbK2Y%2FCK%2FO%2BStqW2R%2FyMJ2SeL3AIjgxik85kSji&X-Amz-Signature=ee000436f612304fbd1f70b6713e3527da790db90afb38f297a79a66fb9e1c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
