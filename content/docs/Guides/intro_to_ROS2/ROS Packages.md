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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PFBUGTD%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqV7LLJDOpm%2Few0eGtUIohdzrQAppfc5P8FLe5MD5%2FZAIhAJv%2F8rK6hBqv3ArL8WkpU57ZUI75A9Juou3uZlZd0dPZKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrbhGv97o3yJJlisEq3AND0rmmy27LYbm%2BH0NJf59J%2BDXjz0SB%2Fr7JsID7wyR9YpCTdpjrfYn5prPsRkaI1I%2FpuBTxoVnumMOIDmk8K8mruqcDXq6DpFZDX1g1RGG9LC2xJYAWdvBl7nBvHT8aa4dTje3b9rtH4gv0Z1K5ZmFSsSpwCQkHT0MEkDGpsVcZZFq5p1qf3y96qz7deFVtB3slZctPaMgVrjBwF6%2F2nnJoeX2o4oBf5mL5Skd9%2F80YrKJGFnoQsHnPkmB5R8ybQK25nE4%2Fq4k09oKLUjMjuR9%2BZGC%2FyGuLN52nCnCWojYg4%2FIsjCxuDccqaLJMdHTc%2BKma0LmPw2V6POA6LpptUEqoJJwURWJ4oeLnvIW1XVBQPq2jtGuHaGml6m8VqQmV1dBLM6a%2FhawrilCPvm42lz8AlZqRM28aSww7%2F0eLEU%2FjpH468MwUNgqcbyv6Z0WzLSfIkt4iEeHauTAmJW7EaHo9zNqlr8I4STPdJ5TUCAtj5sC3uyuZKyi96UrMdG6W3AG9dzpoQQNzxezEcO3n5UCpKUfC60wJLZxs1dZ%2FT2zpEanwcCtiKL%2BTzHUJchNrLTwcchrUdNnr6bO6ymLDdbIgShrzq5RgJfvo3OIWZU3K%2B4dNX68qwYI5UN3rgTCN08TDBjqkAYnYERao50tODOdjQ1EB33CHnF%2ByZU9rUH%2B75XaVpOacoi6lxEiWUlSq1d42zNpj9jwLk6MtRqyTq6kUwez%2FDDFhr%2Bqff8VKIuJVW%2BpXufD8MXx3FC8ZQaXiqO53ZW7NPtDOKsM7yNeYLa%2F9oAAeToV3ZMPNCe8Gg8BqijgB2QFl8h3f%2BWw%2Fe4zd%2BKC198cQA7T1ZGINcfP8v4oPpXEDg3%2FQN%2Fex&X-Amz-Signature=3a25524b488d8a8f7088cc52c87c1d7ecb889417fb3af257336d20e74ffd36c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PFBUGTD%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqV7LLJDOpm%2Few0eGtUIohdzrQAppfc5P8FLe5MD5%2FZAIhAJv%2F8rK6hBqv3ArL8WkpU57ZUI75A9Juou3uZlZd0dPZKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrbhGv97o3yJJlisEq3AND0rmmy27LYbm%2BH0NJf59J%2BDXjz0SB%2Fr7JsID7wyR9YpCTdpjrfYn5prPsRkaI1I%2FpuBTxoVnumMOIDmk8K8mruqcDXq6DpFZDX1g1RGG9LC2xJYAWdvBl7nBvHT8aa4dTje3b9rtH4gv0Z1K5ZmFSsSpwCQkHT0MEkDGpsVcZZFq5p1qf3y96qz7deFVtB3slZctPaMgVrjBwF6%2F2nnJoeX2o4oBf5mL5Skd9%2F80YrKJGFnoQsHnPkmB5R8ybQK25nE4%2Fq4k09oKLUjMjuR9%2BZGC%2FyGuLN52nCnCWojYg4%2FIsjCxuDccqaLJMdHTc%2BKma0LmPw2V6POA6LpptUEqoJJwURWJ4oeLnvIW1XVBQPq2jtGuHaGml6m8VqQmV1dBLM6a%2FhawrilCPvm42lz8AlZqRM28aSww7%2F0eLEU%2FjpH468MwUNgqcbyv6Z0WzLSfIkt4iEeHauTAmJW7EaHo9zNqlr8I4STPdJ5TUCAtj5sC3uyuZKyi96UrMdG6W3AG9dzpoQQNzxezEcO3n5UCpKUfC60wJLZxs1dZ%2FT2zpEanwcCtiKL%2BTzHUJchNrLTwcchrUdNnr6bO6ymLDdbIgShrzq5RgJfvo3OIWZU3K%2B4dNX68qwYI5UN3rgTCN08TDBjqkAYnYERao50tODOdjQ1EB33CHnF%2ByZU9rUH%2B75XaVpOacoi6lxEiWUlSq1d42zNpj9jwLk6MtRqyTq6kUwez%2FDDFhr%2Bqff8VKIuJVW%2BpXufD8MXx3FC8ZQaXiqO53ZW7NPtDOKsM7yNeYLa%2F9oAAeToV3ZMPNCe8Gg8BqijgB2QFl8h3f%2BWw%2Fe4zd%2BKC198cQA7T1ZGINcfP8v4oPpXEDg3%2FQN%2Fex&X-Amz-Signature=98931b32cc8963774723e9c163bab673b28a19ea038e9aa4f42be63c84fc75c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PFBUGTD%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqV7LLJDOpm%2Few0eGtUIohdzrQAppfc5P8FLe5MD5%2FZAIhAJv%2F8rK6hBqv3ArL8WkpU57ZUI75A9Juou3uZlZd0dPZKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrbhGv97o3yJJlisEq3AND0rmmy27LYbm%2BH0NJf59J%2BDXjz0SB%2Fr7JsID7wyR9YpCTdpjrfYn5prPsRkaI1I%2FpuBTxoVnumMOIDmk8K8mruqcDXq6DpFZDX1g1RGG9LC2xJYAWdvBl7nBvHT8aa4dTje3b9rtH4gv0Z1K5ZmFSsSpwCQkHT0MEkDGpsVcZZFq5p1qf3y96qz7deFVtB3slZctPaMgVrjBwF6%2F2nnJoeX2o4oBf5mL5Skd9%2F80YrKJGFnoQsHnPkmB5R8ybQK25nE4%2Fq4k09oKLUjMjuR9%2BZGC%2FyGuLN52nCnCWojYg4%2FIsjCxuDccqaLJMdHTc%2BKma0LmPw2V6POA6LpptUEqoJJwURWJ4oeLnvIW1XVBQPq2jtGuHaGml6m8VqQmV1dBLM6a%2FhawrilCPvm42lz8AlZqRM28aSww7%2F0eLEU%2FjpH468MwUNgqcbyv6Z0WzLSfIkt4iEeHauTAmJW7EaHo9zNqlr8I4STPdJ5TUCAtj5sC3uyuZKyi96UrMdG6W3AG9dzpoQQNzxezEcO3n5UCpKUfC60wJLZxs1dZ%2FT2zpEanwcCtiKL%2BTzHUJchNrLTwcchrUdNnr6bO6ymLDdbIgShrzq5RgJfvo3OIWZU3K%2B4dNX68qwYI5UN3rgTCN08TDBjqkAYnYERao50tODOdjQ1EB33CHnF%2ByZU9rUH%2B75XaVpOacoi6lxEiWUlSq1d42zNpj9jwLk6MtRqyTq6kUwez%2FDDFhr%2Bqff8VKIuJVW%2BpXufD8MXx3FC8ZQaXiqO53ZW7NPtDOKsM7yNeYLa%2F9oAAeToV3ZMPNCe8Gg8BqijgB2QFl8h3f%2BWw%2Fe4zd%2BKC198cQA7T1ZGINcfP8v4oPpXEDg3%2FQN%2Fex&X-Amz-Signature=7c2e3f94e84d9e1da9a1b1afcf3425c4d48700899f632daec3de2568a03af2f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PFBUGTD%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqV7LLJDOpm%2Few0eGtUIohdzrQAppfc5P8FLe5MD5%2FZAIhAJv%2F8rK6hBqv3ArL8WkpU57ZUI75A9Juou3uZlZd0dPZKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrbhGv97o3yJJlisEq3AND0rmmy27LYbm%2BH0NJf59J%2BDXjz0SB%2Fr7JsID7wyR9YpCTdpjrfYn5prPsRkaI1I%2FpuBTxoVnumMOIDmk8K8mruqcDXq6DpFZDX1g1RGG9LC2xJYAWdvBl7nBvHT8aa4dTje3b9rtH4gv0Z1K5ZmFSsSpwCQkHT0MEkDGpsVcZZFq5p1qf3y96qz7deFVtB3slZctPaMgVrjBwF6%2F2nnJoeX2o4oBf5mL5Skd9%2F80YrKJGFnoQsHnPkmB5R8ybQK25nE4%2Fq4k09oKLUjMjuR9%2BZGC%2FyGuLN52nCnCWojYg4%2FIsjCxuDccqaLJMdHTc%2BKma0LmPw2V6POA6LpptUEqoJJwURWJ4oeLnvIW1XVBQPq2jtGuHaGml6m8VqQmV1dBLM6a%2FhawrilCPvm42lz8AlZqRM28aSww7%2F0eLEU%2FjpH468MwUNgqcbyv6Z0WzLSfIkt4iEeHauTAmJW7EaHo9zNqlr8I4STPdJ5TUCAtj5sC3uyuZKyi96UrMdG6W3AG9dzpoQQNzxezEcO3n5UCpKUfC60wJLZxs1dZ%2FT2zpEanwcCtiKL%2BTzHUJchNrLTwcchrUdNnr6bO6ymLDdbIgShrzq5RgJfvo3OIWZU3K%2B4dNX68qwYI5UN3rgTCN08TDBjqkAYnYERao50tODOdjQ1EB33CHnF%2ByZU9rUH%2B75XaVpOacoi6lxEiWUlSq1d42zNpj9jwLk6MtRqyTq6kUwez%2FDDFhr%2Bqff8VKIuJVW%2BpXufD8MXx3FC8ZQaXiqO53ZW7NPtDOKsM7yNeYLa%2F9oAAeToV3ZMPNCe8Gg8BqijgB2QFl8h3f%2BWw%2Fe4zd%2BKC198cQA7T1ZGINcfP8v4oPpXEDg3%2FQN%2Fex&X-Amz-Signature=86cb263a23391f99764d6e3bb9e44f9cdf66b66a646fb6f00a348feb1913316f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PFBUGTD%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqV7LLJDOpm%2Few0eGtUIohdzrQAppfc5P8FLe5MD5%2FZAIhAJv%2F8rK6hBqv3ArL8WkpU57ZUI75A9Juou3uZlZd0dPZKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrbhGv97o3yJJlisEq3AND0rmmy27LYbm%2BH0NJf59J%2BDXjz0SB%2Fr7JsID7wyR9YpCTdpjrfYn5prPsRkaI1I%2FpuBTxoVnumMOIDmk8K8mruqcDXq6DpFZDX1g1RGG9LC2xJYAWdvBl7nBvHT8aa4dTje3b9rtH4gv0Z1K5ZmFSsSpwCQkHT0MEkDGpsVcZZFq5p1qf3y96qz7deFVtB3slZctPaMgVrjBwF6%2F2nnJoeX2o4oBf5mL5Skd9%2F80YrKJGFnoQsHnPkmB5R8ybQK25nE4%2Fq4k09oKLUjMjuR9%2BZGC%2FyGuLN52nCnCWojYg4%2FIsjCxuDccqaLJMdHTc%2BKma0LmPw2V6POA6LpptUEqoJJwURWJ4oeLnvIW1XVBQPq2jtGuHaGml6m8VqQmV1dBLM6a%2FhawrilCPvm42lz8AlZqRM28aSww7%2F0eLEU%2FjpH468MwUNgqcbyv6Z0WzLSfIkt4iEeHauTAmJW7EaHo9zNqlr8I4STPdJ5TUCAtj5sC3uyuZKyi96UrMdG6W3AG9dzpoQQNzxezEcO3n5UCpKUfC60wJLZxs1dZ%2FT2zpEanwcCtiKL%2BTzHUJchNrLTwcchrUdNnr6bO6ymLDdbIgShrzq5RgJfvo3OIWZU3K%2B4dNX68qwYI5UN3rgTCN08TDBjqkAYnYERao50tODOdjQ1EB33CHnF%2ByZU9rUH%2B75XaVpOacoi6lxEiWUlSq1d42zNpj9jwLk6MtRqyTq6kUwez%2FDDFhr%2Bqff8VKIuJVW%2BpXufD8MXx3FC8ZQaXiqO53ZW7NPtDOKsM7yNeYLa%2F9oAAeToV3ZMPNCe8Gg8BqijgB2QFl8h3f%2BWw%2Fe4zd%2BKC198cQA7T1ZGINcfP8v4oPpXEDg3%2FQN%2Fex&X-Amz-Signature=5715dac964ec5fd648b818fb52ecf567e4d3e289963295cab9033ef67447d727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PFBUGTD%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqV7LLJDOpm%2Few0eGtUIohdzrQAppfc5P8FLe5MD5%2FZAIhAJv%2F8rK6hBqv3ArL8WkpU57ZUI75A9Juou3uZlZd0dPZKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrbhGv97o3yJJlisEq3AND0rmmy27LYbm%2BH0NJf59J%2BDXjz0SB%2Fr7JsID7wyR9YpCTdpjrfYn5prPsRkaI1I%2FpuBTxoVnumMOIDmk8K8mruqcDXq6DpFZDX1g1RGG9LC2xJYAWdvBl7nBvHT8aa4dTje3b9rtH4gv0Z1K5ZmFSsSpwCQkHT0MEkDGpsVcZZFq5p1qf3y96qz7deFVtB3slZctPaMgVrjBwF6%2F2nnJoeX2o4oBf5mL5Skd9%2F80YrKJGFnoQsHnPkmB5R8ybQK25nE4%2Fq4k09oKLUjMjuR9%2BZGC%2FyGuLN52nCnCWojYg4%2FIsjCxuDccqaLJMdHTc%2BKma0LmPw2V6POA6LpptUEqoJJwURWJ4oeLnvIW1XVBQPq2jtGuHaGml6m8VqQmV1dBLM6a%2FhawrilCPvm42lz8AlZqRM28aSww7%2F0eLEU%2FjpH468MwUNgqcbyv6Z0WzLSfIkt4iEeHauTAmJW7EaHo9zNqlr8I4STPdJ5TUCAtj5sC3uyuZKyi96UrMdG6W3AG9dzpoQQNzxezEcO3n5UCpKUfC60wJLZxs1dZ%2FT2zpEanwcCtiKL%2BTzHUJchNrLTwcchrUdNnr6bO6ymLDdbIgShrzq5RgJfvo3OIWZU3K%2B4dNX68qwYI5UN3rgTCN08TDBjqkAYnYERao50tODOdjQ1EB33CHnF%2ByZU9rUH%2B75XaVpOacoi6lxEiWUlSq1d42zNpj9jwLk6MtRqyTq6kUwez%2FDDFhr%2Bqff8VKIuJVW%2BpXufD8MXx3FC8ZQaXiqO53ZW7NPtDOKsM7yNeYLa%2F9oAAeToV3ZMPNCe8Gg8BqijgB2QFl8h3f%2BWw%2Fe4zd%2BKC198cQA7T1ZGINcfP8v4oPpXEDg3%2FQN%2Fex&X-Amz-Signature=8cd2ea40784af62003789aad032f74f52c6383d1134b8427e9b579a0d6bd2d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PFBUGTD%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqV7LLJDOpm%2Few0eGtUIohdzrQAppfc5P8FLe5MD5%2FZAIhAJv%2F8rK6hBqv3ArL8WkpU57ZUI75A9Juou3uZlZd0dPZKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrbhGv97o3yJJlisEq3AND0rmmy27LYbm%2BH0NJf59J%2BDXjz0SB%2Fr7JsID7wyR9YpCTdpjrfYn5prPsRkaI1I%2FpuBTxoVnumMOIDmk8K8mruqcDXq6DpFZDX1g1RGG9LC2xJYAWdvBl7nBvHT8aa4dTje3b9rtH4gv0Z1K5ZmFSsSpwCQkHT0MEkDGpsVcZZFq5p1qf3y96qz7deFVtB3slZctPaMgVrjBwF6%2F2nnJoeX2o4oBf5mL5Skd9%2F80YrKJGFnoQsHnPkmB5R8ybQK25nE4%2Fq4k09oKLUjMjuR9%2BZGC%2FyGuLN52nCnCWojYg4%2FIsjCxuDccqaLJMdHTc%2BKma0LmPw2V6POA6LpptUEqoJJwURWJ4oeLnvIW1XVBQPq2jtGuHaGml6m8VqQmV1dBLM6a%2FhawrilCPvm42lz8AlZqRM28aSww7%2F0eLEU%2FjpH468MwUNgqcbyv6Z0WzLSfIkt4iEeHauTAmJW7EaHo9zNqlr8I4STPdJ5TUCAtj5sC3uyuZKyi96UrMdG6W3AG9dzpoQQNzxezEcO3n5UCpKUfC60wJLZxs1dZ%2FT2zpEanwcCtiKL%2BTzHUJchNrLTwcchrUdNnr6bO6ymLDdbIgShrzq5RgJfvo3OIWZU3K%2B4dNX68qwYI5UN3rgTCN08TDBjqkAYnYERao50tODOdjQ1EB33CHnF%2ByZU9rUH%2B75XaVpOacoi6lxEiWUlSq1d42zNpj9jwLk6MtRqyTq6kUwez%2FDDFhr%2Bqff8VKIuJVW%2BpXufD8MXx3FC8ZQaXiqO53ZW7NPtDOKsM7yNeYLa%2F9oAAeToV3ZMPNCe8Gg8BqijgB2QFl8h3f%2BWw%2Fe4zd%2BKC198cQA7T1ZGINcfP8v4oPpXEDg3%2FQN%2Fex&X-Amz-Signature=74ea48690e21dfc974c898d2f68e2f6875dc1b445e2c7ab241157183444a5eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
