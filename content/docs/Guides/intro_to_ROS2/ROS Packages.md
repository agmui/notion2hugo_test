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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2R2TSP3%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDu93kkyW0nRs5dGAiAOQjUWhaP3QAuGk8JOcxDMhV0CQIhALcbM25%2FsLbVVAQFgK7BVLS%2BbH3NHo2Dvszs3KNW0EipKv8DCCsQABoMNjM3NDIzMTgzODA1IgxMQSeOMnY8O7Tgo5wq3APeEmsQHaA9N9aaY3gZFg6oZPz0fnNs4E9GMqxjjoZdkUMhUsbSSfpOZyuBv6gouuMbqbat7rZyGa0HHcIxqHxSWM93u8x8qg6YBIzCYQaq36k1cv9lKpzSiAFhImRHKxnAEsBkMg6jPKISCo01svUKaTLmOdowmpEXwTxWXh382LtdL%2BNsPpJLKqdVTcZrzfWeiiy0FecRXXJzcKYp9Zb0q4tI%2FDxSFL7hPhIotn3Veno%2F5PkOsGbELt9xMXHEsEmhGs%2BUFEABtqsfuLX1EgYkBKXUqz2fgowtlU%2FSGP7sYmFcgiweb1pIVEZ32mm9avayhRHZvHcUDXOWyoDeewuBV3Yuqb5za976q%2F1mRt9ux%2BrkgWEvDd%2FCJ%2B6wo5HC6AetSZcXEE9Z9PJxM76c0dv6ujib1dMrytcfrqQp4bFqQpWebhpm1uIOiIIm8JAB9lCGGpgCsSdKYDJARN80%2BUOCQaW4cbMHO6hwJVaIZNNSeb0lQNIo%2FEmLxmYmSYLp7XfL4yVF6J37cr3aGZkn61zyic2e2j4IGAoLEKPzQ4v9zDkZIcFRirvDV%2BB6Gdql0vLOEO0iWtaSxivSNLogYW%2B8SO8YLKwFvxZlfoYmXPnVXx2PEN%2Fo7oIAsn2p6DCL3svBBjqkAdv%2B%2B6QrMB8xYQeYgrepf226SrjA%2FKBXWL7OnSZKfy52dY0GbDZLmuFoOuupf2Cr5DdaQKZkKGdfTS4hlBDgM1274UjANjyQMjHs9VMcBgP%2BQfo8wyfv4W7JNLNaAwdKVdDZRMOS5hebr6zNJQVBp0Fdg2CruOridFpmuFz2N%2FDwXigeqsXa%2FZqZZprvrI5MXa8IhDwLjTEu7UyfpUQOqeoKBiqk&X-Amz-Signature=73b14dd3914138d8a1d5cca5189ba07b0ee0cc39faa62cbb84807105cbf033fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2R2TSP3%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDu93kkyW0nRs5dGAiAOQjUWhaP3QAuGk8JOcxDMhV0CQIhALcbM25%2FsLbVVAQFgK7BVLS%2BbH3NHo2Dvszs3KNW0EipKv8DCCsQABoMNjM3NDIzMTgzODA1IgxMQSeOMnY8O7Tgo5wq3APeEmsQHaA9N9aaY3gZFg6oZPz0fnNs4E9GMqxjjoZdkUMhUsbSSfpOZyuBv6gouuMbqbat7rZyGa0HHcIxqHxSWM93u8x8qg6YBIzCYQaq36k1cv9lKpzSiAFhImRHKxnAEsBkMg6jPKISCo01svUKaTLmOdowmpEXwTxWXh382LtdL%2BNsPpJLKqdVTcZrzfWeiiy0FecRXXJzcKYp9Zb0q4tI%2FDxSFL7hPhIotn3Veno%2F5PkOsGbELt9xMXHEsEmhGs%2BUFEABtqsfuLX1EgYkBKXUqz2fgowtlU%2FSGP7sYmFcgiweb1pIVEZ32mm9avayhRHZvHcUDXOWyoDeewuBV3Yuqb5za976q%2F1mRt9ux%2BrkgWEvDd%2FCJ%2B6wo5HC6AetSZcXEE9Z9PJxM76c0dv6ujib1dMrytcfrqQp4bFqQpWebhpm1uIOiIIm8JAB9lCGGpgCsSdKYDJARN80%2BUOCQaW4cbMHO6hwJVaIZNNSeb0lQNIo%2FEmLxmYmSYLp7XfL4yVF6J37cr3aGZkn61zyic2e2j4IGAoLEKPzQ4v9zDkZIcFRirvDV%2BB6Gdql0vLOEO0iWtaSxivSNLogYW%2B8SO8YLKwFvxZlfoYmXPnVXx2PEN%2Fo7oIAsn2p6DCL3svBBjqkAdv%2B%2B6QrMB8xYQeYgrepf226SrjA%2FKBXWL7OnSZKfy52dY0GbDZLmuFoOuupf2Cr5DdaQKZkKGdfTS4hlBDgM1274UjANjyQMjHs9VMcBgP%2BQfo8wyfv4W7JNLNaAwdKVdDZRMOS5hebr6zNJQVBp0Fdg2CruOridFpmuFz2N%2FDwXigeqsXa%2FZqZZprvrI5MXa8IhDwLjTEu7UyfpUQOqeoKBiqk&X-Amz-Signature=df8d551a12ad334ad83e870f1e300bcaa537fd2fb73b6a84cfac8ba23d9df0cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2R2TSP3%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDu93kkyW0nRs5dGAiAOQjUWhaP3QAuGk8JOcxDMhV0CQIhALcbM25%2FsLbVVAQFgK7BVLS%2BbH3NHo2Dvszs3KNW0EipKv8DCCsQABoMNjM3NDIzMTgzODA1IgxMQSeOMnY8O7Tgo5wq3APeEmsQHaA9N9aaY3gZFg6oZPz0fnNs4E9GMqxjjoZdkUMhUsbSSfpOZyuBv6gouuMbqbat7rZyGa0HHcIxqHxSWM93u8x8qg6YBIzCYQaq36k1cv9lKpzSiAFhImRHKxnAEsBkMg6jPKISCo01svUKaTLmOdowmpEXwTxWXh382LtdL%2BNsPpJLKqdVTcZrzfWeiiy0FecRXXJzcKYp9Zb0q4tI%2FDxSFL7hPhIotn3Veno%2F5PkOsGbELt9xMXHEsEmhGs%2BUFEABtqsfuLX1EgYkBKXUqz2fgowtlU%2FSGP7sYmFcgiweb1pIVEZ32mm9avayhRHZvHcUDXOWyoDeewuBV3Yuqb5za976q%2F1mRt9ux%2BrkgWEvDd%2FCJ%2B6wo5HC6AetSZcXEE9Z9PJxM76c0dv6ujib1dMrytcfrqQp4bFqQpWebhpm1uIOiIIm8JAB9lCGGpgCsSdKYDJARN80%2BUOCQaW4cbMHO6hwJVaIZNNSeb0lQNIo%2FEmLxmYmSYLp7XfL4yVF6J37cr3aGZkn61zyic2e2j4IGAoLEKPzQ4v9zDkZIcFRirvDV%2BB6Gdql0vLOEO0iWtaSxivSNLogYW%2B8SO8YLKwFvxZlfoYmXPnVXx2PEN%2Fo7oIAsn2p6DCL3svBBjqkAdv%2B%2B6QrMB8xYQeYgrepf226SrjA%2FKBXWL7OnSZKfy52dY0GbDZLmuFoOuupf2Cr5DdaQKZkKGdfTS4hlBDgM1274UjANjyQMjHs9VMcBgP%2BQfo8wyfv4W7JNLNaAwdKVdDZRMOS5hebr6zNJQVBp0Fdg2CruOridFpmuFz2N%2FDwXigeqsXa%2FZqZZprvrI5MXa8IhDwLjTEu7UyfpUQOqeoKBiqk&X-Amz-Signature=05451ff0e7b3b4596d3637370b5bd0970d4f59b82325ac43580d67efe945186e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2R2TSP3%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDu93kkyW0nRs5dGAiAOQjUWhaP3QAuGk8JOcxDMhV0CQIhALcbM25%2FsLbVVAQFgK7BVLS%2BbH3NHo2Dvszs3KNW0EipKv8DCCsQABoMNjM3NDIzMTgzODA1IgxMQSeOMnY8O7Tgo5wq3APeEmsQHaA9N9aaY3gZFg6oZPz0fnNs4E9GMqxjjoZdkUMhUsbSSfpOZyuBv6gouuMbqbat7rZyGa0HHcIxqHxSWM93u8x8qg6YBIzCYQaq36k1cv9lKpzSiAFhImRHKxnAEsBkMg6jPKISCo01svUKaTLmOdowmpEXwTxWXh382LtdL%2BNsPpJLKqdVTcZrzfWeiiy0FecRXXJzcKYp9Zb0q4tI%2FDxSFL7hPhIotn3Veno%2F5PkOsGbELt9xMXHEsEmhGs%2BUFEABtqsfuLX1EgYkBKXUqz2fgowtlU%2FSGP7sYmFcgiweb1pIVEZ32mm9avayhRHZvHcUDXOWyoDeewuBV3Yuqb5za976q%2F1mRt9ux%2BrkgWEvDd%2FCJ%2B6wo5HC6AetSZcXEE9Z9PJxM76c0dv6ujib1dMrytcfrqQp4bFqQpWebhpm1uIOiIIm8JAB9lCGGpgCsSdKYDJARN80%2BUOCQaW4cbMHO6hwJVaIZNNSeb0lQNIo%2FEmLxmYmSYLp7XfL4yVF6J37cr3aGZkn61zyic2e2j4IGAoLEKPzQ4v9zDkZIcFRirvDV%2BB6Gdql0vLOEO0iWtaSxivSNLogYW%2B8SO8YLKwFvxZlfoYmXPnVXx2PEN%2Fo7oIAsn2p6DCL3svBBjqkAdv%2B%2B6QrMB8xYQeYgrepf226SrjA%2FKBXWL7OnSZKfy52dY0GbDZLmuFoOuupf2Cr5DdaQKZkKGdfTS4hlBDgM1274UjANjyQMjHs9VMcBgP%2BQfo8wyfv4W7JNLNaAwdKVdDZRMOS5hebr6zNJQVBp0Fdg2CruOridFpmuFz2N%2FDwXigeqsXa%2FZqZZprvrI5MXa8IhDwLjTEu7UyfpUQOqeoKBiqk&X-Amz-Signature=c3ec72c94d92bbf33ac60f4b3cfea18ff6814d668536bd00a8dde2c3697623d6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2R2TSP3%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDu93kkyW0nRs5dGAiAOQjUWhaP3QAuGk8JOcxDMhV0CQIhALcbM25%2FsLbVVAQFgK7BVLS%2BbH3NHo2Dvszs3KNW0EipKv8DCCsQABoMNjM3NDIzMTgzODA1IgxMQSeOMnY8O7Tgo5wq3APeEmsQHaA9N9aaY3gZFg6oZPz0fnNs4E9GMqxjjoZdkUMhUsbSSfpOZyuBv6gouuMbqbat7rZyGa0HHcIxqHxSWM93u8x8qg6YBIzCYQaq36k1cv9lKpzSiAFhImRHKxnAEsBkMg6jPKISCo01svUKaTLmOdowmpEXwTxWXh382LtdL%2BNsPpJLKqdVTcZrzfWeiiy0FecRXXJzcKYp9Zb0q4tI%2FDxSFL7hPhIotn3Veno%2F5PkOsGbELt9xMXHEsEmhGs%2BUFEABtqsfuLX1EgYkBKXUqz2fgowtlU%2FSGP7sYmFcgiweb1pIVEZ32mm9avayhRHZvHcUDXOWyoDeewuBV3Yuqb5za976q%2F1mRt9ux%2BrkgWEvDd%2FCJ%2B6wo5HC6AetSZcXEE9Z9PJxM76c0dv6ujib1dMrytcfrqQp4bFqQpWebhpm1uIOiIIm8JAB9lCGGpgCsSdKYDJARN80%2BUOCQaW4cbMHO6hwJVaIZNNSeb0lQNIo%2FEmLxmYmSYLp7XfL4yVF6J37cr3aGZkn61zyic2e2j4IGAoLEKPzQ4v9zDkZIcFRirvDV%2BB6Gdql0vLOEO0iWtaSxivSNLogYW%2B8SO8YLKwFvxZlfoYmXPnVXx2PEN%2Fo7oIAsn2p6DCL3svBBjqkAdv%2B%2B6QrMB8xYQeYgrepf226SrjA%2FKBXWL7OnSZKfy52dY0GbDZLmuFoOuupf2Cr5DdaQKZkKGdfTS4hlBDgM1274UjANjyQMjHs9VMcBgP%2BQfo8wyfv4W7JNLNaAwdKVdDZRMOS5hebr6zNJQVBp0Fdg2CruOridFpmuFz2N%2FDwXigeqsXa%2FZqZZprvrI5MXa8IhDwLjTEu7UyfpUQOqeoKBiqk&X-Amz-Signature=20abe55c5cbf8a618d746957eb4c8946457b122926e0de1d1de2a8b888d89d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2R2TSP3%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDu93kkyW0nRs5dGAiAOQjUWhaP3QAuGk8JOcxDMhV0CQIhALcbM25%2FsLbVVAQFgK7BVLS%2BbH3NHo2Dvszs3KNW0EipKv8DCCsQABoMNjM3NDIzMTgzODA1IgxMQSeOMnY8O7Tgo5wq3APeEmsQHaA9N9aaY3gZFg6oZPz0fnNs4E9GMqxjjoZdkUMhUsbSSfpOZyuBv6gouuMbqbat7rZyGa0HHcIxqHxSWM93u8x8qg6YBIzCYQaq36k1cv9lKpzSiAFhImRHKxnAEsBkMg6jPKISCo01svUKaTLmOdowmpEXwTxWXh382LtdL%2BNsPpJLKqdVTcZrzfWeiiy0FecRXXJzcKYp9Zb0q4tI%2FDxSFL7hPhIotn3Veno%2F5PkOsGbELt9xMXHEsEmhGs%2BUFEABtqsfuLX1EgYkBKXUqz2fgowtlU%2FSGP7sYmFcgiweb1pIVEZ32mm9avayhRHZvHcUDXOWyoDeewuBV3Yuqb5za976q%2F1mRt9ux%2BrkgWEvDd%2FCJ%2B6wo5HC6AetSZcXEE9Z9PJxM76c0dv6ujib1dMrytcfrqQp4bFqQpWebhpm1uIOiIIm8JAB9lCGGpgCsSdKYDJARN80%2BUOCQaW4cbMHO6hwJVaIZNNSeb0lQNIo%2FEmLxmYmSYLp7XfL4yVF6J37cr3aGZkn61zyic2e2j4IGAoLEKPzQ4v9zDkZIcFRirvDV%2BB6Gdql0vLOEO0iWtaSxivSNLogYW%2B8SO8YLKwFvxZlfoYmXPnVXx2PEN%2Fo7oIAsn2p6DCL3svBBjqkAdv%2B%2B6QrMB8xYQeYgrepf226SrjA%2FKBXWL7OnSZKfy52dY0GbDZLmuFoOuupf2Cr5DdaQKZkKGdfTS4hlBDgM1274UjANjyQMjHs9VMcBgP%2BQfo8wyfv4W7JNLNaAwdKVdDZRMOS5hebr6zNJQVBp0Fdg2CruOridFpmuFz2N%2FDwXigeqsXa%2FZqZZprvrI5MXa8IhDwLjTEu7UyfpUQOqeoKBiqk&X-Amz-Signature=e8720177eeb4fbfe0b0825c2bb827b0f17c077d58e14dbad7c423564bf02d5f5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2R2TSP3%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDu93kkyW0nRs5dGAiAOQjUWhaP3QAuGk8JOcxDMhV0CQIhALcbM25%2FsLbVVAQFgK7BVLS%2BbH3NHo2Dvszs3KNW0EipKv8DCCsQABoMNjM3NDIzMTgzODA1IgxMQSeOMnY8O7Tgo5wq3APeEmsQHaA9N9aaY3gZFg6oZPz0fnNs4E9GMqxjjoZdkUMhUsbSSfpOZyuBv6gouuMbqbat7rZyGa0HHcIxqHxSWM93u8x8qg6YBIzCYQaq36k1cv9lKpzSiAFhImRHKxnAEsBkMg6jPKISCo01svUKaTLmOdowmpEXwTxWXh382LtdL%2BNsPpJLKqdVTcZrzfWeiiy0FecRXXJzcKYp9Zb0q4tI%2FDxSFL7hPhIotn3Veno%2F5PkOsGbELt9xMXHEsEmhGs%2BUFEABtqsfuLX1EgYkBKXUqz2fgowtlU%2FSGP7sYmFcgiweb1pIVEZ32mm9avayhRHZvHcUDXOWyoDeewuBV3Yuqb5za976q%2F1mRt9ux%2BrkgWEvDd%2FCJ%2B6wo5HC6AetSZcXEE9Z9PJxM76c0dv6ujib1dMrytcfrqQp4bFqQpWebhpm1uIOiIIm8JAB9lCGGpgCsSdKYDJARN80%2BUOCQaW4cbMHO6hwJVaIZNNSeb0lQNIo%2FEmLxmYmSYLp7XfL4yVF6J37cr3aGZkn61zyic2e2j4IGAoLEKPzQ4v9zDkZIcFRirvDV%2BB6Gdql0vLOEO0iWtaSxivSNLogYW%2B8SO8YLKwFvxZlfoYmXPnVXx2PEN%2Fo7oIAsn2p6DCL3svBBjqkAdv%2B%2B6QrMB8xYQeYgrepf226SrjA%2FKBXWL7OnSZKfy52dY0GbDZLmuFoOuupf2Cr5DdaQKZkKGdfTS4hlBDgM1274UjANjyQMjHs9VMcBgP%2BQfo8wyfv4W7JNLNaAwdKVdDZRMOS5hebr6zNJQVBp0Fdg2CruOridFpmuFz2N%2FDwXigeqsXa%2FZqZZprvrI5MXa8IhDwLjTEu7UyfpUQOqeoKBiqk&X-Amz-Signature=012d809a8d0d1929d110cc6bc3e974afeadd1a2ab65a2b982db5ca695809dfd6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
