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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJEQLZG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD0vCbsKw0yytyN6Bt79xQLzWDW%2F6Wz%2FcdjKrUDMSECIQIhAP59h45njMoweJMzFpFyFjdmdJXMY6Z5PUbaQhcNDjeLKv8DCEkQABoMNjM3NDIzMTgzODA1IgwFc8HOn4QHrqXnmj0q3APjCe3WWZ0ZZg1ZvYEa3Pq6TN5qzG8a3DD5z%2BNHWDlngwoMEaqL53%2FdBNbNoSyK5o7Ao5pb4x%2BMMWgToS8ENOmsn%2FIahrqdz7miYx%2F9Cn6Gj1lCJIihM7q53D27eRckvMdF9yzUd2%2Fy4QEOeR6sWeGX%2F7%2FlV8zRml4y%2BkQFKwf20Zka841lHoLiwKkL3m6xBjxOgoJoDWP4bJUgq9KD9A5ieUef2ReD0EexjhyKzKaGu6tWxefQaKOFL%2BonR4do0rDLmglQUzQwTAaGkHwbKgq2%2FgNZAe0uikjgPX%2FPB8XM52LfH1xZ6OCfFVf2JMz4E7B0GdlnO2zYDThOeRcQf6V1FibJW4LrcAAywjWbINfr5kwACLLmeb%2B4mb7i9P%2F%2FeoJaH3PHnRqFBKL1K3%2BtbcWZe%2BbY76dTVjhdhcOETakU9580tkV3je9KB7vaCoEpg1ADeCtHukgfz952kV%2B3Jnf9pI2Ansgw4WnKT4QSCZSNij6NAx4GDavJpb0BzQbhmDp0ujNGuH9sChYrybjAdz6K8YsAhe4kzcxb9vbg5iCtrE2D6HR1bZZs9eTmmMLpP4Zc%2BJhk75K1WM0l6%2FSRNAv2C%2BMvZwZD2QyMEVR7vK%2BJmnlP6gTfBtBTN96HnTC8hYfCBjqkAV3rZXjWR4VlNdkHmfSl0VKfhIsLXU%2Blm%2F71C%2FXmeJJdE8Dpnx9JgcrD2YTosG21Q65fvFGSEiK4X0paQUtLskKwTDRv2jPor3VzJK2cxgWrrJhlvVv8SQp4FEcn0Y00KT8bH4PAUwMN1JsF%2BC47ZyxosG96cZMxauCUUklERQRVhG4CpNXayBswxKBrKqCDgy6TlETkTSb9hPxThkj%2BWJwTDkmu&X-Amz-Signature=047fafb86dea92bec1f89f00a1fbfb3ed7f55575ddf6b79f8c1ba8862f60568a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJEQLZG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD0vCbsKw0yytyN6Bt79xQLzWDW%2F6Wz%2FcdjKrUDMSECIQIhAP59h45njMoweJMzFpFyFjdmdJXMY6Z5PUbaQhcNDjeLKv8DCEkQABoMNjM3NDIzMTgzODA1IgwFc8HOn4QHrqXnmj0q3APjCe3WWZ0ZZg1ZvYEa3Pq6TN5qzG8a3DD5z%2BNHWDlngwoMEaqL53%2FdBNbNoSyK5o7Ao5pb4x%2BMMWgToS8ENOmsn%2FIahrqdz7miYx%2F9Cn6Gj1lCJIihM7q53D27eRckvMdF9yzUd2%2Fy4QEOeR6sWeGX%2F7%2FlV8zRml4y%2BkQFKwf20Zka841lHoLiwKkL3m6xBjxOgoJoDWP4bJUgq9KD9A5ieUef2ReD0EexjhyKzKaGu6tWxefQaKOFL%2BonR4do0rDLmglQUzQwTAaGkHwbKgq2%2FgNZAe0uikjgPX%2FPB8XM52LfH1xZ6OCfFVf2JMz4E7B0GdlnO2zYDThOeRcQf6V1FibJW4LrcAAywjWbINfr5kwACLLmeb%2B4mb7i9P%2F%2FeoJaH3PHnRqFBKL1K3%2BtbcWZe%2BbY76dTVjhdhcOETakU9580tkV3je9KB7vaCoEpg1ADeCtHukgfz952kV%2B3Jnf9pI2Ansgw4WnKT4QSCZSNij6NAx4GDavJpb0BzQbhmDp0ujNGuH9sChYrybjAdz6K8YsAhe4kzcxb9vbg5iCtrE2D6HR1bZZs9eTmmMLpP4Zc%2BJhk75K1WM0l6%2FSRNAv2C%2BMvZwZD2QyMEVR7vK%2BJmnlP6gTfBtBTN96HnTC8hYfCBjqkAV3rZXjWR4VlNdkHmfSl0VKfhIsLXU%2Blm%2F71C%2FXmeJJdE8Dpnx9JgcrD2YTosG21Q65fvFGSEiK4X0paQUtLskKwTDRv2jPor3VzJK2cxgWrrJhlvVv8SQp4FEcn0Y00KT8bH4PAUwMN1JsF%2BC47ZyxosG96cZMxauCUUklERQRVhG4CpNXayBswxKBrKqCDgy6TlETkTSb9hPxThkj%2BWJwTDkmu&X-Amz-Signature=b4ddb4f0101a33634d91ffde59b73a2e4ce005371e42e43b1c27008a1a7ed63e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJEQLZG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD0vCbsKw0yytyN6Bt79xQLzWDW%2F6Wz%2FcdjKrUDMSECIQIhAP59h45njMoweJMzFpFyFjdmdJXMY6Z5PUbaQhcNDjeLKv8DCEkQABoMNjM3NDIzMTgzODA1IgwFc8HOn4QHrqXnmj0q3APjCe3WWZ0ZZg1ZvYEa3Pq6TN5qzG8a3DD5z%2BNHWDlngwoMEaqL53%2FdBNbNoSyK5o7Ao5pb4x%2BMMWgToS8ENOmsn%2FIahrqdz7miYx%2F9Cn6Gj1lCJIihM7q53D27eRckvMdF9yzUd2%2Fy4QEOeR6sWeGX%2F7%2FlV8zRml4y%2BkQFKwf20Zka841lHoLiwKkL3m6xBjxOgoJoDWP4bJUgq9KD9A5ieUef2ReD0EexjhyKzKaGu6tWxefQaKOFL%2BonR4do0rDLmglQUzQwTAaGkHwbKgq2%2FgNZAe0uikjgPX%2FPB8XM52LfH1xZ6OCfFVf2JMz4E7B0GdlnO2zYDThOeRcQf6V1FibJW4LrcAAywjWbINfr5kwACLLmeb%2B4mb7i9P%2F%2FeoJaH3PHnRqFBKL1K3%2BtbcWZe%2BbY76dTVjhdhcOETakU9580tkV3je9KB7vaCoEpg1ADeCtHukgfz952kV%2B3Jnf9pI2Ansgw4WnKT4QSCZSNij6NAx4GDavJpb0BzQbhmDp0ujNGuH9sChYrybjAdz6K8YsAhe4kzcxb9vbg5iCtrE2D6HR1bZZs9eTmmMLpP4Zc%2BJhk75K1WM0l6%2FSRNAv2C%2BMvZwZD2QyMEVR7vK%2BJmnlP6gTfBtBTN96HnTC8hYfCBjqkAV3rZXjWR4VlNdkHmfSl0VKfhIsLXU%2Blm%2F71C%2FXmeJJdE8Dpnx9JgcrD2YTosG21Q65fvFGSEiK4X0paQUtLskKwTDRv2jPor3VzJK2cxgWrrJhlvVv8SQp4FEcn0Y00KT8bH4PAUwMN1JsF%2BC47ZyxosG96cZMxauCUUklERQRVhG4CpNXayBswxKBrKqCDgy6TlETkTSb9hPxThkj%2BWJwTDkmu&X-Amz-Signature=2bdf443eda93faea94c5c006fa806496721542b8661389e82bc59eabbaa81dda&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJEQLZG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD0vCbsKw0yytyN6Bt79xQLzWDW%2F6Wz%2FcdjKrUDMSECIQIhAP59h45njMoweJMzFpFyFjdmdJXMY6Z5PUbaQhcNDjeLKv8DCEkQABoMNjM3NDIzMTgzODA1IgwFc8HOn4QHrqXnmj0q3APjCe3WWZ0ZZg1ZvYEa3Pq6TN5qzG8a3DD5z%2BNHWDlngwoMEaqL53%2FdBNbNoSyK5o7Ao5pb4x%2BMMWgToS8ENOmsn%2FIahrqdz7miYx%2F9Cn6Gj1lCJIihM7q53D27eRckvMdF9yzUd2%2Fy4QEOeR6sWeGX%2F7%2FlV8zRml4y%2BkQFKwf20Zka841lHoLiwKkL3m6xBjxOgoJoDWP4bJUgq9KD9A5ieUef2ReD0EexjhyKzKaGu6tWxefQaKOFL%2BonR4do0rDLmglQUzQwTAaGkHwbKgq2%2FgNZAe0uikjgPX%2FPB8XM52LfH1xZ6OCfFVf2JMz4E7B0GdlnO2zYDThOeRcQf6V1FibJW4LrcAAywjWbINfr5kwACLLmeb%2B4mb7i9P%2F%2FeoJaH3PHnRqFBKL1K3%2BtbcWZe%2BbY76dTVjhdhcOETakU9580tkV3je9KB7vaCoEpg1ADeCtHukgfz952kV%2B3Jnf9pI2Ansgw4WnKT4QSCZSNij6NAx4GDavJpb0BzQbhmDp0ujNGuH9sChYrybjAdz6K8YsAhe4kzcxb9vbg5iCtrE2D6HR1bZZs9eTmmMLpP4Zc%2BJhk75K1WM0l6%2FSRNAv2C%2BMvZwZD2QyMEVR7vK%2BJmnlP6gTfBtBTN96HnTC8hYfCBjqkAV3rZXjWR4VlNdkHmfSl0VKfhIsLXU%2Blm%2F71C%2FXmeJJdE8Dpnx9JgcrD2YTosG21Q65fvFGSEiK4X0paQUtLskKwTDRv2jPor3VzJK2cxgWrrJhlvVv8SQp4FEcn0Y00KT8bH4PAUwMN1JsF%2BC47ZyxosG96cZMxauCUUklERQRVhG4CpNXayBswxKBrKqCDgy6TlETkTSb9hPxThkj%2BWJwTDkmu&X-Amz-Signature=e0c2617d95d66daad6b52b66b6424ea8c89e26f1c6b40a0a6f73d48d9d4534d5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJEQLZG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD0vCbsKw0yytyN6Bt79xQLzWDW%2F6Wz%2FcdjKrUDMSECIQIhAP59h45njMoweJMzFpFyFjdmdJXMY6Z5PUbaQhcNDjeLKv8DCEkQABoMNjM3NDIzMTgzODA1IgwFc8HOn4QHrqXnmj0q3APjCe3WWZ0ZZg1ZvYEa3Pq6TN5qzG8a3DD5z%2BNHWDlngwoMEaqL53%2FdBNbNoSyK5o7Ao5pb4x%2BMMWgToS8ENOmsn%2FIahrqdz7miYx%2F9Cn6Gj1lCJIihM7q53D27eRckvMdF9yzUd2%2Fy4QEOeR6sWeGX%2F7%2FlV8zRml4y%2BkQFKwf20Zka841lHoLiwKkL3m6xBjxOgoJoDWP4bJUgq9KD9A5ieUef2ReD0EexjhyKzKaGu6tWxefQaKOFL%2BonR4do0rDLmglQUzQwTAaGkHwbKgq2%2FgNZAe0uikjgPX%2FPB8XM52LfH1xZ6OCfFVf2JMz4E7B0GdlnO2zYDThOeRcQf6V1FibJW4LrcAAywjWbINfr5kwACLLmeb%2B4mb7i9P%2F%2FeoJaH3PHnRqFBKL1K3%2BtbcWZe%2BbY76dTVjhdhcOETakU9580tkV3je9KB7vaCoEpg1ADeCtHukgfz952kV%2B3Jnf9pI2Ansgw4WnKT4QSCZSNij6NAx4GDavJpb0BzQbhmDp0ujNGuH9sChYrybjAdz6K8YsAhe4kzcxb9vbg5iCtrE2D6HR1bZZs9eTmmMLpP4Zc%2BJhk75K1WM0l6%2FSRNAv2C%2BMvZwZD2QyMEVR7vK%2BJmnlP6gTfBtBTN96HnTC8hYfCBjqkAV3rZXjWR4VlNdkHmfSl0VKfhIsLXU%2Blm%2F71C%2FXmeJJdE8Dpnx9JgcrD2YTosG21Q65fvFGSEiK4X0paQUtLskKwTDRv2jPor3VzJK2cxgWrrJhlvVv8SQp4FEcn0Y00KT8bH4PAUwMN1JsF%2BC47ZyxosG96cZMxauCUUklERQRVhG4CpNXayBswxKBrKqCDgy6TlETkTSb9hPxThkj%2BWJwTDkmu&X-Amz-Signature=aa5241c7c54fb6cb4d8796b79ce86aa8570c9dea70eaa1c07e627063527bc7ae&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJEQLZG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD0vCbsKw0yytyN6Bt79xQLzWDW%2F6Wz%2FcdjKrUDMSECIQIhAP59h45njMoweJMzFpFyFjdmdJXMY6Z5PUbaQhcNDjeLKv8DCEkQABoMNjM3NDIzMTgzODA1IgwFc8HOn4QHrqXnmj0q3APjCe3WWZ0ZZg1ZvYEa3Pq6TN5qzG8a3DD5z%2BNHWDlngwoMEaqL53%2FdBNbNoSyK5o7Ao5pb4x%2BMMWgToS8ENOmsn%2FIahrqdz7miYx%2F9Cn6Gj1lCJIihM7q53D27eRckvMdF9yzUd2%2Fy4QEOeR6sWeGX%2F7%2FlV8zRml4y%2BkQFKwf20Zka841lHoLiwKkL3m6xBjxOgoJoDWP4bJUgq9KD9A5ieUef2ReD0EexjhyKzKaGu6tWxefQaKOFL%2BonR4do0rDLmglQUzQwTAaGkHwbKgq2%2FgNZAe0uikjgPX%2FPB8XM52LfH1xZ6OCfFVf2JMz4E7B0GdlnO2zYDThOeRcQf6V1FibJW4LrcAAywjWbINfr5kwACLLmeb%2B4mb7i9P%2F%2FeoJaH3PHnRqFBKL1K3%2BtbcWZe%2BbY76dTVjhdhcOETakU9580tkV3je9KB7vaCoEpg1ADeCtHukgfz952kV%2B3Jnf9pI2Ansgw4WnKT4QSCZSNij6NAx4GDavJpb0BzQbhmDp0ujNGuH9sChYrybjAdz6K8YsAhe4kzcxb9vbg5iCtrE2D6HR1bZZs9eTmmMLpP4Zc%2BJhk75K1WM0l6%2FSRNAv2C%2BMvZwZD2QyMEVR7vK%2BJmnlP6gTfBtBTN96HnTC8hYfCBjqkAV3rZXjWR4VlNdkHmfSl0VKfhIsLXU%2Blm%2F71C%2FXmeJJdE8Dpnx9JgcrD2YTosG21Q65fvFGSEiK4X0paQUtLskKwTDRv2jPor3VzJK2cxgWrrJhlvVv8SQp4FEcn0Y00KT8bH4PAUwMN1JsF%2BC47ZyxosG96cZMxauCUUklERQRVhG4CpNXayBswxKBrKqCDgy6TlETkTSb9hPxThkj%2BWJwTDkmu&X-Amz-Signature=44117206bdaf6fcc3c2e9f43aa0c59e6c490146c70b5b2cd9426c4d0ca0df339&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZJEQLZG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD0vCbsKw0yytyN6Bt79xQLzWDW%2F6Wz%2FcdjKrUDMSECIQIhAP59h45njMoweJMzFpFyFjdmdJXMY6Z5PUbaQhcNDjeLKv8DCEkQABoMNjM3NDIzMTgzODA1IgwFc8HOn4QHrqXnmj0q3APjCe3WWZ0ZZg1ZvYEa3Pq6TN5qzG8a3DD5z%2BNHWDlngwoMEaqL53%2FdBNbNoSyK5o7Ao5pb4x%2BMMWgToS8ENOmsn%2FIahrqdz7miYx%2F9Cn6Gj1lCJIihM7q53D27eRckvMdF9yzUd2%2Fy4QEOeR6sWeGX%2F7%2FlV8zRml4y%2BkQFKwf20Zka841lHoLiwKkL3m6xBjxOgoJoDWP4bJUgq9KD9A5ieUef2ReD0EexjhyKzKaGu6tWxefQaKOFL%2BonR4do0rDLmglQUzQwTAaGkHwbKgq2%2FgNZAe0uikjgPX%2FPB8XM52LfH1xZ6OCfFVf2JMz4E7B0GdlnO2zYDThOeRcQf6V1FibJW4LrcAAywjWbINfr5kwACLLmeb%2B4mb7i9P%2F%2FeoJaH3PHnRqFBKL1K3%2BtbcWZe%2BbY76dTVjhdhcOETakU9580tkV3je9KB7vaCoEpg1ADeCtHukgfz952kV%2B3Jnf9pI2Ansgw4WnKT4QSCZSNij6NAx4GDavJpb0BzQbhmDp0ujNGuH9sChYrybjAdz6K8YsAhe4kzcxb9vbg5iCtrE2D6HR1bZZs9eTmmMLpP4Zc%2BJhk75K1WM0l6%2FSRNAv2C%2BMvZwZD2QyMEVR7vK%2BJmnlP6gTfBtBTN96HnTC8hYfCBjqkAV3rZXjWR4VlNdkHmfSl0VKfhIsLXU%2Blm%2F71C%2FXmeJJdE8Dpnx9JgcrD2YTosG21Q65fvFGSEiK4X0paQUtLskKwTDRv2jPor3VzJK2cxgWrrJhlvVv8SQp4FEcn0Y00KT8bH4PAUwMN1JsF%2BC47ZyxosG96cZMxauCUUklERQRVhG4CpNXayBswxKBrKqCDgy6TlETkTSb9hPxThkj%2BWJwTDkmu&X-Amz-Signature=2260c1cb91ae2a6f7f8d7f7016e6200a9a21a6902cee05adb646ccf60b10de74&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
