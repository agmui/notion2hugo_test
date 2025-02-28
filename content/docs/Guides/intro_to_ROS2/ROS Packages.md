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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB3BKJ5A%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDDky%2BTBFRRA050kKQPZoah8qrc9500%2BZHDm2oXybszzAiBzjKTQXGWqTzLrPGsORQjpenyGFtQ9A627sb76PIlRmSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdGusU8fHjhyudfBQKtwD6OX4mZnB9%2FNQB64Snl2XWS7nQ3RTxB8Gnh6WJ6iR7OPzD1MkdESmuMK2o937a%2FMHoFLRD8aUSK%2FKAwtgeLaRF5TUkd1%2BfFz6gAv5LIllibsAMpLmIZLOKEBLd8DOb0GAt8abA8UKItUr3tpmuDSZZsxqMO1tIfkeNuX%2BSW5tMpaIv3tfVyx6sO2Fv3DbuQS65Cm534Q2kBRU2fmjtzz0LU2AEZEp2v6Fo5zG9R79rhh4XXzea7jMqwq2n0v24E%2BjG%2BomSIbu%2Ftm%2Fyk6VN0Y6MAihIIa%2BOw%2FXWsVYvua4B0NAL0%2FGUhaS8nmapC9uyZrSqpU%2FQVQnWwOqau5b%2F900FCz1ekjD8Ka9QoJqQo7pfgVIa1K0bnFxMTf2e3KGe1ERCv4kv8BW4kkEjNm16amqaMjhF2IZCzlIbXqhEA6%2FtMgt4V7xEJHdQN24WWazjw0S73ZkaMI66ADqkMBUQqTjRbvdqja%2FXb34XqjBlzhcpv%2BdofHhDBEwD43qGyHK2feMG5OAcU77BJJR7xiyc8Cbz3aaibt4W4wFeSnQBn3B453irEX3LWG%2B6mz1G2sMFhOBBDhIxecQAUcFN2PNM%2BHlwxDuBCv9hcPVzEEl63sVXQHaTHOEcyXPPi0tw64wza6HvgY6pgHbzqBjTtBvOjOatx76SfECOUhj7H8zz9BGY1RnTqI1aggODSAaIrmWfavWYUYN7NZmzYgMZoMpmioUvHr2%2BbZJ%2FfutIYpQCFOEqSUfyY%2FE4VReFzO6bGHhXMJI6dXZR5%2BFjo2tzEsw2jBsvszxH3ilv57LVfPJ4X%2BHDVN4ZFrR9Me%2B09xG0pr45%2BYGoJg0ITrhE12nqxGyLsSLeOO0bHlzkzXa34oV&X-Amz-Signature=3b2464c13597310a654399281421d727a86d15a25128df5ab5848cf75a65f446&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB3BKJ5A%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDDky%2BTBFRRA050kKQPZoah8qrc9500%2BZHDm2oXybszzAiBzjKTQXGWqTzLrPGsORQjpenyGFtQ9A627sb76PIlRmSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdGusU8fHjhyudfBQKtwD6OX4mZnB9%2FNQB64Snl2XWS7nQ3RTxB8Gnh6WJ6iR7OPzD1MkdESmuMK2o937a%2FMHoFLRD8aUSK%2FKAwtgeLaRF5TUkd1%2BfFz6gAv5LIllibsAMpLmIZLOKEBLd8DOb0GAt8abA8UKItUr3tpmuDSZZsxqMO1tIfkeNuX%2BSW5tMpaIv3tfVyx6sO2Fv3DbuQS65Cm534Q2kBRU2fmjtzz0LU2AEZEp2v6Fo5zG9R79rhh4XXzea7jMqwq2n0v24E%2BjG%2BomSIbu%2Ftm%2Fyk6VN0Y6MAihIIa%2BOw%2FXWsVYvua4B0NAL0%2FGUhaS8nmapC9uyZrSqpU%2FQVQnWwOqau5b%2F900FCz1ekjD8Ka9QoJqQo7pfgVIa1K0bnFxMTf2e3KGe1ERCv4kv8BW4kkEjNm16amqaMjhF2IZCzlIbXqhEA6%2FtMgt4V7xEJHdQN24WWazjw0S73ZkaMI66ADqkMBUQqTjRbvdqja%2FXb34XqjBlzhcpv%2BdofHhDBEwD43qGyHK2feMG5OAcU77BJJR7xiyc8Cbz3aaibt4W4wFeSnQBn3B453irEX3LWG%2B6mz1G2sMFhOBBDhIxecQAUcFN2PNM%2BHlwxDuBCv9hcPVzEEl63sVXQHaTHOEcyXPPi0tw64wza6HvgY6pgHbzqBjTtBvOjOatx76SfECOUhj7H8zz9BGY1RnTqI1aggODSAaIrmWfavWYUYN7NZmzYgMZoMpmioUvHr2%2BbZJ%2FfutIYpQCFOEqSUfyY%2FE4VReFzO6bGHhXMJI6dXZR5%2BFjo2tzEsw2jBsvszxH3ilv57LVfPJ4X%2BHDVN4ZFrR9Me%2B09xG0pr45%2BYGoJg0ITrhE12nqxGyLsSLeOO0bHlzkzXa34oV&X-Amz-Signature=3a97d66a76b87636e12f1851b002e94287f20de8940cf89e6db4f844c9180b81&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB3BKJ5A%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDDky%2BTBFRRA050kKQPZoah8qrc9500%2BZHDm2oXybszzAiBzjKTQXGWqTzLrPGsORQjpenyGFtQ9A627sb76PIlRmSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdGusU8fHjhyudfBQKtwD6OX4mZnB9%2FNQB64Snl2XWS7nQ3RTxB8Gnh6WJ6iR7OPzD1MkdESmuMK2o937a%2FMHoFLRD8aUSK%2FKAwtgeLaRF5TUkd1%2BfFz6gAv5LIllibsAMpLmIZLOKEBLd8DOb0GAt8abA8UKItUr3tpmuDSZZsxqMO1tIfkeNuX%2BSW5tMpaIv3tfVyx6sO2Fv3DbuQS65Cm534Q2kBRU2fmjtzz0LU2AEZEp2v6Fo5zG9R79rhh4XXzea7jMqwq2n0v24E%2BjG%2BomSIbu%2Ftm%2Fyk6VN0Y6MAihIIa%2BOw%2FXWsVYvua4B0NAL0%2FGUhaS8nmapC9uyZrSqpU%2FQVQnWwOqau5b%2F900FCz1ekjD8Ka9QoJqQo7pfgVIa1K0bnFxMTf2e3KGe1ERCv4kv8BW4kkEjNm16amqaMjhF2IZCzlIbXqhEA6%2FtMgt4V7xEJHdQN24WWazjw0S73ZkaMI66ADqkMBUQqTjRbvdqja%2FXb34XqjBlzhcpv%2BdofHhDBEwD43qGyHK2feMG5OAcU77BJJR7xiyc8Cbz3aaibt4W4wFeSnQBn3B453irEX3LWG%2B6mz1G2sMFhOBBDhIxecQAUcFN2PNM%2BHlwxDuBCv9hcPVzEEl63sVXQHaTHOEcyXPPi0tw64wza6HvgY6pgHbzqBjTtBvOjOatx76SfECOUhj7H8zz9BGY1RnTqI1aggODSAaIrmWfavWYUYN7NZmzYgMZoMpmioUvHr2%2BbZJ%2FfutIYpQCFOEqSUfyY%2FE4VReFzO6bGHhXMJI6dXZR5%2BFjo2tzEsw2jBsvszxH3ilv57LVfPJ4X%2BHDVN4ZFrR9Me%2B09xG0pr45%2BYGoJg0ITrhE12nqxGyLsSLeOO0bHlzkzXa34oV&X-Amz-Signature=0f2d5f05444565daeef34cc439d4cd9014dfb489b83a2722e4e1baff774a11a0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB3BKJ5A%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDDky%2BTBFRRA050kKQPZoah8qrc9500%2BZHDm2oXybszzAiBzjKTQXGWqTzLrPGsORQjpenyGFtQ9A627sb76PIlRmSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdGusU8fHjhyudfBQKtwD6OX4mZnB9%2FNQB64Snl2XWS7nQ3RTxB8Gnh6WJ6iR7OPzD1MkdESmuMK2o937a%2FMHoFLRD8aUSK%2FKAwtgeLaRF5TUkd1%2BfFz6gAv5LIllibsAMpLmIZLOKEBLd8DOb0GAt8abA8UKItUr3tpmuDSZZsxqMO1tIfkeNuX%2BSW5tMpaIv3tfVyx6sO2Fv3DbuQS65Cm534Q2kBRU2fmjtzz0LU2AEZEp2v6Fo5zG9R79rhh4XXzea7jMqwq2n0v24E%2BjG%2BomSIbu%2Ftm%2Fyk6VN0Y6MAihIIa%2BOw%2FXWsVYvua4B0NAL0%2FGUhaS8nmapC9uyZrSqpU%2FQVQnWwOqau5b%2F900FCz1ekjD8Ka9QoJqQo7pfgVIa1K0bnFxMTf2e3KGe1ERCv4kv8BW4kkEjNm16amqaMjhF2IZCzlIbXqhEA6%2FtMgt4V7xEJHdQN24WWazjw0S73ZkaMI66ADqkMBUQqTjRbvdqja%2FXb34XqjBlzhcpv%2BdofHhDBEwD43qGyHK2feMG5OAcU77BJJR7xiyc8Cbz3aaibt4W4wFeSnQBn3B453irEX3LWG%2B6mz1G2sMFhOBBDhIxecQAUcFN2PNM%2BHlwxDuBCv9hcPVzEEl63sVXQHaTHOEcyXPPi0tw64wza6HvgY6pgHbzqBjTtBvOjOatx76SfECOUhj7H8zz9BGY1RnTqI1aggODSAaIrmWfavWYUYN7NZmzYgMZoMpmioUvHr2%2BbZJ%2FfutIYpQCFOEqSUfyY%2FE4VReFzO6bGHhXMJI6dXZR5%2BFjo2tzEsw2jBsvszxH3ilv57LVfPJ4X%2BHDVN4ZFrR9Me%2B09xG0pr45%2BYGoJg0ITrhE12nqxGyLsSLeOO0bHlzkzXa34oV&X-Amz-Signature=9e4e01b2d3d90d066324a95482a00ebb68942b20b665be184f0e7cce99570aec&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB3BKJ5A%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDDky%2BTBFRRA050kKQPZoah8qrc9500%2BZHDm2oXybszzAiBzjKTQXGWqTzLrPGsORQjpenyGFtQ9A627sb76PIlRmSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdGusU8fHjhyudfBQKtwD6OX4mZnB9%2FNQB64Snl2XWS7nQ3RTxB8Gnh6WJ6iR7OPzD1MkdESmuMK2o937a%2FMHoFLRD8aUSK%2FKAwtgeLaRF5TUkd1%2BfFz6gAv5LIllibsAMpLmIZLOKEBLd8DOb0GAt8abA8UKItUr3tpmuDSZZsxqMO1tIfkeNuX%2BSW5tMpaIv3tfVyx6sO2Fv3DbuQS65Cm534Q2kBRU2fmjtzz0LU2AEZEp2v6Fo5zG9R79rhh4XXzea7jMqwq2n0v24E%2BjG%2BomSIbu%2Ftm%2Fyk6VN0Y6MAihIIa%2BOw%2FXWsVYvua4B0NAL0%2FGUhaS8nmapC9uyZrSqpU%2FQVQnWwOqau5b%2F900FCz1ekjD8Ka9QoJqQo7pfgVIa1K0bnFxMTf2e3KGe1ERCv4kv8BW4kkEjNm16amqaMjhF2IZCzlIbXqhEA6%2FtMgt4V7xEJHdQN24WWazjw0S73ZkaMI66ADqkMBUQqTjRbvdqja%2FXb34XqjBlzhcpv%2BdofHhDBEwD43qGyHK2feMG5OAcU77BJJR7xiyc8Cbz3aaibt4W4wFeSnQBn3B453irEX3LWG%2B6mz1G2sMFhOBBDhIxecQAUcFN2PNM%2BHlwxDuBCv9hcPVzEEl63sVXQHaTHOEcyXPPi0tw64wza6HvgY6pgHbzqBjTtBvOjOatx76SfECOUhj7H8zz9BGY1RnTqI1aggODSAaIrmWfavWYUYN7NZmzYgMZoMpmioUvHr2%2BbZJ%2FfutIYpQCFOEqSUfyY%2FE4VReFzO6bGHhXMJI6dXZR5%2BFjo2tzEsw2jBsvszxH3ilv57LVfPJ4X%2BHDVN4ZFrR9Me%2B09xG0pr45%2BYGoJg0ITrhE12nqxGyLsSLeOO0bHlzkzXa34oV&X-Amz-Signature=09e2c9fe2ad983dfbecc88ac3886127eefbb45846a14db1d829b30a532b12b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB3BKJ5A%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDDky%2BTBFRRA050kKQPZoah8qrc9500%2BZHDm2oXybszzAiBzjKTQXGWqTzLrPGsORQjpenyGFtQ9A627sb76PIlRmSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdGusU8fHjhyudfBQKtwD6OX4mZnB9%2FNQB64Snl2XWS7nQ3RTxB8Gnh6WJ6iR7OPzD1MkdESmuMK2o937a%2FMHoFLRD8aUSK%2FKAwtgeLaRF5TUkd1%2BfFz6gAv5LIllibsAMpLmIZLOKEBLd8DOb0GAt8abA8UKItUr3tpmuDSZZsxqMO1tIfkeNuX%2BSW5tMpaIv3tfVyx6sO2Fv3DbuQS65Cm534Q2kBRU2fmjtzz0LU2AEZEp2v6Fo5zG9R79rhh4XXzea7jMqwq2n0v24E%2BjG%2BomSIbu%2Ftm%2Fyk6VN0Y6MAihIIa%2BOw%2FXWsVYvua4B0NAL0%2FGUhaS8nmapC9uyZrSqpU%2FQVQnWwOqau5b%2F900FCz1ekjD8Ka9QoJqQo7pfgVIa1K0bnFxMTf2e3KGe1ERCv4kv8BW4kkEjNm16amqaMjhF2IZCzlIbXqhEA6%2FtMgt4V7xEJHdQN24WWazjw0S73ZkaMI66ADqkMBUQqTjRbvdqja%2FXb34XqjBlzhcpv%2BdofHhDBEwD43qGyHK2feMG5OAcU77BJJR7xiyc8Cbz3aaibt4W4wFeSnQBn3B453irEX3LWG%2B6mz1G2sMFhOBBDhIxecQAUcFN2PNM%2BHlwxDuBCv9hcPVzEEl63sVXQHaTHOEcyXPPi0tw64wza6HvgY6pgHbzqBjTtBvOjOatx76SfECOUhj7H8zz9BGY1RnTqI1aggODSAaIrmWfavWYUYN7NZmzYgMZoMpmioUvHr2%2BbZJ%2FfutIYpQCFOEqSUfyY%2FE4VReFzO6bGHhXMJI6dXZR5%2BFjo2tzEsw2jBsvszxH3ilv57LVfPJ4X%2BHDVN4ZFrR9Me%2B09xG0pr45%2BYGoJg0ITrhE12nqxGyLsSLeOO0bHlzkzXa34oV&X-Amz-Signature=36a2cbdd54c6f593d8d42467caf8dc3f4a82461ba9ac0e25e8c354039d61f822&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB3BKJ5A%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDDky%2BTBFRRA050kKQPZoah8qrc9500%2BZHDm2oXybszzAiBzjKTQXGWqTzLrPGsORQjpenyGFtQ9A627sb76PIlRmSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdGusU8fHjhyudfBQKtwD6OX4mZnB9%2FNQB64Snl2XWS7nQ3RTxB8Gnh6WJ6iR7OPzD1MkdESmuMK2o937a%2FMHoFLRD8aUSK%2FKAwtgeLaRF5TUkd1%2BfFz6gAv5LIllibsAMpLmIZLOKEBLd8DOb0GAt8abA8UKItUr3tpmuDSZZsxqMO1tIfkeNuX%2BSW5tMpaIv3tfVyx6sO2Fv3DbuQS65Cm534Q2kBRU2fmjtzz0LU2AEZEp2v6Fo5zG9R79rhh4XXzea7jMqwq2n0v24E%2BjG%2BomSIbu%2Ftm%2Fyk6VN0Y6MAihIIa%2BOw%2FXWsVYvua4B0NAL0%2FGUhaS8nmapC9uyZrSqpU%2FQVQnWwOqau5b%2F900FCz1ekjD8Ka9QoJqQo7pfgVIa1K0bnFxMTf2e3KGe1ERCv4kv8BW4kkEjNm16amqaMjhF2IZCzlIbXqhEA6%2FtMgt4V7xEJHdQN24WWazjw0S73ZkaMI66ADqkMBUQqTjRbvdqja%2FXb34XqjBlzhcpv%2BdofHhDBEwD43qGyHK2feMG5OAcU77BJJR7xiyc8Cbz3aaibt4W4wFeSnQBn3B453irEX3LWG%2B6mz1G2sMFhOBBDhIxecQAUcFN2PNM%2BHlwxDuBCv9hcPVzEEl63sVXQHaTHOEcyXPPi0tw64wza6HvgY6pgHbzqBjTtBvOjOatx76SfECOUhj7H8zz9BGY1RnTqI1aggODSAaIrmWfavWYUYN7NZmzYgMZoMpmioUvHr2%2BbZJ%2FfutIYpQCFOEqSUfyY%2FE4VReFzO6bGHhXMJI6dXZR5%2BFjo2tzEsw2jBsvszxH3ilv57LVfPJ4X%2BHDVN4ZFrR9Me%2B09xG0pr45%2BYGoJg0ITrhE12nqxGyLsSLeOO0bHlzkzXa34oV&X-Amz-Signature=98b19b091558be27288ab58f6ca843dab4999d66c49bd76b13d65dc98d50237e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
