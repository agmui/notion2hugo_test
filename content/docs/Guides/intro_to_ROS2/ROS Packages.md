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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCIWW7P%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGVGzgJvwyqxAryWLB4%2BxKnbAhU8%2FUwZSIxGt3%2FQE7pDAiArBxCQktwYsUv9ZZAbU5SHHfSV09b8FL1S9IeLhwbjgCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMfeGRaVKNrf3CsgAmKtwDbq4Bz1MGFVYWql12ahSTrU3irsqeVfyUsWwaiIVLeXKRs9rOd4hQ50%2BauKKpHV9TOlZtXdg82%2Bo263fYHMi%2BTls9Siofs%2Bt5y0sLTmHd9j24FCkkT5QSytgyqEPJppWIwqf%2B9y55yOqW4IipTORUvOnq7Xj6EhwuQMlKDKFm8JGKDFd8YmWEQbqvje2sJGoXIdelWZVFbag8RDv7dShXjMxgd0LN2DOJwtjLKx7bS7Gc8hkDEeTtKUIXg7zLEmtOiHy5rCnjpMMFj1hpuX6E3lE7x54xARFYcUwTK%2BtmZtylT7fE0tZeaemEOiJINmEMgsY5YVdvg9BjC5ZbdyqGDjlfUacBuHlBB9E%2FfZg%2BBUB0mH9uKd%2FcB%2BRID3Y7zokyFXFAAAsp91d4pYO9wMCyxsqBnOb4OPetD2ihT9G8w30M5Dg2bPGxXx6baQd7pVL5JnFoB84Fk6XqkQsiOkbfU%2FSuTDOrhWgrMgB0JxLyJVYw2FJst%2FmYp32vV9gbXzDxnOyxlV4yB10wo5XnIdBiYCHto7hBRAzuWh6zLrnXUl4CZnj%2Fh27adGQy3ZgZ8hoRuT282RNAPfGLoZDWqgqg63suU0032l2ADIE4Pmr9OpTgn7PaBhU1%2B%2BMMd70w6aX6wgY6pgEK3VtHSplEIPMsQyM%2BJzIUFRXv8mNS5cu93R4GXINLnJAa6Gl%2FcvCc8jkfxm5x%2FqwGeWPS2iXb1g0qcWRxTNBQLerSvFCLNOwDJiV6%2FoXQBe6dThSZTsTKtAqMP252rZIrZu8OfHZdJkzsm%2B8MtGFLJmQlpijfKmcpMneMWGncLw3148LQaQoEXeScHgs4juOqCGgI8Kk51v1cdfrmM9JmBGYub5Y2&X-Amz-Signature=a7f567813606aec0132f404fe1c5c87e29b4b797ab345e76e2e000376cf147cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCIWW7P%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGVGzgJvwyqxAryWLB4%2BxKnbAhU8%2FUwZSIxGt3%2FQE7pDAiArBxCQktwYsUv9ZZAbU5SHHfSV09b8FL1S9IeLhwbjgCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMfeGRaVKNrf3CsgAmKtwDbq4Bz1MGFVYWql12ahSTrU3irsqeVfyUsWwaiIVLeXKRs9rOd4hQ50%2BauKKpHV9TOlZtXdg82%2Bo263fYHMi%2BTls9Siofs%2Bt5y0sLTmHd9j24FCkkT5QSytgyqEPJppWIwqf%2B9y55yOqW4IipTORUvOnq7Xj6EhwuQMlKDKFm8JGKDFd8YmWEQbqvje2sJGoXIdelWZVFbag8RDv7dShXjMxgd0LN2DOJwtjLKx7bS7Gc8hkDEeTtKUIXg7zLEmtOiHy5rCnjpMMFj1hpuX6E3lE7x54xARFYcUwTK%2BtmZtylT7fE0tZeaemEOiJINmEMgsY5YVdvg9BjC5ZbdyqGDjlfUacBuHlBB9E%2FfZg%2BBUB0mH9uKd%2FcB%2BRID3Y7zokyFXFAAAsp91d4pYO9wMCyxsqBnOb4OPetD2ihT9G8w30M5Dg2bPGxXx6baQd7pVL5JnFoB84Fk6XqkQsiOkbfU%2FSuTDOrhWgrMgB0JxLyJVYw2FJst%2FmYp32vV9gbXzDxnOyxlV4yB10wo5XnIdBiYCHto7hBRAzuWh6zLrnXUl4CZnj%2Fh27adGQy3ZgZ8hoRuT282RNAPfGLoZDWqgqg63suU0032l2ADIE4Pmr9OpTgn7PaBhU1%2B%2BMMd70w6aX6wgY6pgEK3VtHSplEIPMsQyM%2BJzIUFRXv8mNS5cu93R4GXINLnJAa6Gl%2FcvCc8jkfxm5x%2FqwGeWPS2iXb1g0qcWRxTNBQLerSvFCLNOwDJiV6%2FoXQBe6dThSZTsTKtAqMP252rZIrZu8OfHZdJkzsm%2B8MtGFLJmQlpijfKmcpMneMWGncLw3148LQaQoEXeScHgs4juOqCGgI8Kk51v1cdfrmM9JmBGYub5Y2&X-Amz-Signature=c86aedbe7fef0c0762456c93cee3d5a96e4b7756b64eb40062305651133a6b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCIWW7P%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGVGzgJvwyqxAryWLB4%2BxKnbAhU8%2FUwZSIxGt3%2FQE7pDAiArBxCQktwYsUv9ZZAbU5SHHfSV09b8FL1S9IeLhwbjgCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMfeGRaVKNrf3CsgAmKtwDbq4Bz1MGFVYWql12ahSTrU3irsqeVfyUsWwaiIVLeXKRs9rOd4hQ50%2BauKKpHV9TOlZtXdg82%2Bo263fYHMi%2BTls9Siofs%2Bt5y0sLTmHd9j24FCkkT5QSytgyqEPJppWIwqf%2B9y55yOqW4IipTORUvOnq7Xj6EhwuQMlKDKFm8JGKDFd8YmWEQbqvje2sJGoXIdelWZVFbag8RDv7dShXjMxgd0LN2DOJwtjLKx7bS7Gc8hkDEeTtKUIXg7zLEmtOiHy5rCnjpMMFj1hpuX6E3lE7x54xARFYcUwTK%2BtmZtylT7fE0tZeaemEOiJINmEMgsY5YVdvg9BjC5ZbdyqGDjlfUacBuHlBB9E%2FfZg%2BBUB0mH9uKd%2FcB%2BRID3Y7zokyFXFAAAsp91d4pYO9wMCyxsqBnOb4OPetD2ihT9G8w30M5Dg2bPGxXx6baQd7pVL5JnFoB84Fk6XqkQsiOkbfU%2FSuTDOrhWgrMgB0JxLyJVYw2FJst%2FmYp32vV9gbXzDxnOyxlV4yB10wo5XnIdBiYCHto7hBRAzuWh6zLrnXUl4CZnj%2Fh27adGQy3ZgZ8hoRuT282RNAPfGLoZDWqgqg63suU0032l2ADIE4Pmr9OpTgn7PaBhU1%2B%2BMMd70w6aX6wgY6pgEK3VtHSplEIPMsQyM%2BJzIUFRXv8mNS5cu93R4GXINLnJAa6Gl%2FcvCc8jkfxm5x%2FqwGeWPS2iXb1g0qcWRxTNBQLerSvFCLNOwDJiV6%2FoXQBe6dThSZTsTKtAqMP252rZIrZu8OfHZdJkzsm%2B8MtGFLJmQlpijfKmcpMneMWGncLw3148LQaQoEXeScHgs4juOqCGgI8Kk51v1cdfrmM9JmBGYub5Y2&X-Amz-Signature=eda74515c64bc6fee1ea4ac3024d9176f84c054a56b1d439aac93924428ce6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCIWW7P%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGVGzgJvwyqxAryWLB4%2BxKnbAhU8%2FUwZSIxGt3%2FQE7pDAiArBxCQktwYsUv9ZZAbU5SHHfSV09b8FL1S9IeLhwbjgCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMfeGRaVKNrf3CsgAmKtwDbq4Bz1MGFVYWql12ahSTrU3irsqeVfyUsWwaiIVLeXKRs9rOd4hQ50%2BauKKpHV9TOlZtXdg82%2Bo263fYHMi%2BTls9Siofs%2Bt5y0sLTmHd9j24FCkkT5QSytgyqEPJppWIwqf%2B9y55yOqW4IipTORUvOnq7Xj6EhwuQMlKDKFm8JGKDFd8YmWEQbqvje2sJGoXIdelWZVFbag8RDv7dShXjMxgd0LN2DOJwtjLKx7bS7Gc8hkDEeTtKUIXg7zLEmtOiHy5rCnjpMMFj1hpuX6E3lE7x54xARFYcUwTK%2BtmZtylT7fE0tZeaemEOiJINmEMgsY5YVdvg9BjC5ZbdyqGDjlfUacBuHlBB9E%2FfZg%2BBUB0mH9uKd%2FcB%2BRID3Y7zokyFXFAAAsp91d4pYO9wMCyxsqBnOb4OPetD2ihT9G8w30M5Dg2bPGxXx6baQd7pVL5JnFoB84Fk6XqkQsiOkbfU%2FSuTDOrhWgrMgB0JxLyJVYw2FJst%2FmYp32vV9gbXzDxnOyxlV4yB10wo5XnIdBiYCHto7hBRAzuWh6zLrnXUl4CZnj%2Fh27adGQy3ZgZ8hoRuT282RNAPfGLoZDWqgqg63suU0032l2ADIE4Pmr9OpTgn7PaBhU1%2B%2BMMd70w6aX6wgY6pgEK3VtHSplEIPMsQyM%2BJzIUFRXv8mNS5cu93R4GXINLnJAa6Gl%2FcvCc8jkfxm5x%2FqwGeWPS2iXb1g0qcWRxTNBQLerSvFCLNOwDJiV6%2FoXQBe6dThSZTsTKtAqMP252rZIrZu8OfHZdJkzsm%2B8MtGFLJmQlpijfKmcpMneMWGncLw3148LQaQoEXeScHgs4juOqCGgI8Kk51v1cdfrmM9JmBGYub5Y2&X-Amz-Signature=d84c3442c2dd7d974f1ef826666f9a3d083bb38543a4bf59cffd203bd2577ce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCIWW7P%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGVGzgJvwyqxAryWLB4%2BxKnbAhU8%2FUwZSIxGt3%2FQE7pDAiArBxCQktwYsUv9ZZAbU5SHHfSV09b8FL1S9IeLhwbjgCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMfeGRaVKNrf3CsgAmKtwDbq4Bz1MGFVYWql12ahSTrU3irsqeVfyUsWwaiIVLeXKRs9rOd4hQ50%2BauKKpHV9TOlZtXdg82%2Bo263fYHMi%2BTls9Siofs%2Bt5y0sLTmHd9j24FCkkT5QSytgyqEPJppWIwqf%2B9y55yOqW4IipTORUvOnq7Xj6EhwuQMlKDKFm8JGKDFd8YmWEQbqvje2sJGoXIdelWZVFbag8RDv7dShXjMxgd0LN2DOJwtjLKx7bS7Gc8hkDEeTtKUIXg7zLEmtOiHy5rCnjpMMFj1hpuX6E3lE7x54xARFYcUwTK%2BtmZtylT7fE0tZeaemEOiJINmEMgsY5YVdvg9BjC5ZbdyqGDjlfUacBuHlBB9E%2FfZg%2BBUB0mH9uKd%2FcB%2BRID3Y7zokyFXFAAAsp91d4pYO9wMCyxsqBnOb4OPetD2ihT9G8w30M5Dg2bPGxXx6baQd7pVL5JnFoB84Fk6XqkQsiOkbfU%2FSuTDOrhWgrMgB0JxLyJVYw2FJst%2FmYp32vV9gbXzDxnOyxlV4yB10wo5XnIdBiYCHto7hBRAzuWh6zLrnXUl4CZnj%2Fh27adGQy3ZgZ8hoRuT282RNAPfGLoZDWqgqg63suU0032l2ADIE4Pmr9OpTgn7PaBhU1%2B%2BMMd70w6aX6wgY6pgEK3VtHSplEIPMsQyM%2BJzIUFRXv8mNS5cu93R4GXINLnJAa6Gl%2FcvCc8jkfxm5x%2FqwGeWPS2iXb1g0qcWRxTNBQLerSvFCLNOwDJiV6%2FoXQBe6dThSZTsTKtAqMP252rZIrZu8OfHZdJkzsm%2B8MtGFLJmQlpijfKmcpMneMWGncLw3148LQaQoEXeScHgs4juOqCGgI8Kk51v1cdfrmM9JmBGYub5Y2&X-Amz-Signature=59118911ccf06539b4d55ed9cb24ce3a29bedc69b4ff538a871212bfbc3f14a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCIWW7P%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGVGzgJvwyqxAryWLB4%2BxKnbAhU8%2FUwZSIxGt3%2FQE7pDAiArBxCQktwYsUv9ZZAbU5SHHfSV09b8FL1S9IeLhwbjgCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMfeGRaVKNrf3CsgAmKtwDbq4Bz1MGFVYWql12ahSTrU3irsqeVfyUsWwaiIVLeXKRs9rOd4hQ50%2BauKKpHV9TOlZtXdg82%2Bo263fYHMi%2BTls9Siofs%2Bt5y0sLTmHd9j24FCkkT5QSytgyqEPJppWIwqf%2B9y55yOqW4IipTORUvOnq7Xj6EhwuQMlKDKFm8JGKDFd8YmWEQbqvje2sJGoXIdelWZVFbag8RDv7dShXjMxgd0LN2DOJwtjLKx7bS7Gc8hkDEeTtKUIXg7zLEmtOiHy5rCnjpMMFj1hpuX6E3lE7x54xARFYcUwTK%2BtmZtylT7fE0tZeaemEOiJINmEMgsY5YVdvg9BjC5ZbdyqGDjlfUacBuHlBB9E%2FfZg%2BBUB0mH9uKd%2FcB%2BRID3Y7zokyFXFAAAsp91d4pYO9wMCyxsqBnOb4OPetD2ihT9G8w30M5Dg2bPGxXx6baQd7pVL5JnFoB84Fk6XqkQsiOkbfU%2FSuTDOrhWgrMgB0JxLyJVYw2FJst%2FmYp32vV9gbXzDxnOyxlV4yB10wo5XnIdBiYCHto7hBRAzuWh6zLrnXUl4CZnj%2Fh27adGQy3ZgZ8hoRuT282RNAPfGLoZDWqgqg63suU0032l2ADIE4Pmr9OpTgn7PaBhU1%2B%2BMMd70w6aX6wgY6pgEK3VtHSplEIPMsQyM%2BJzIUFRXv8mNS5cu93R4GXINLnJAa6Gl%2FcvCc8jkfxm5x%2FqwGeWPS2iXb1g0qcWRxTNBQLerSvFCLNOwDJiV6%2FoXQBe6dThSZTsTKtAqMP252rZIrZu8OfHZdJkzsm%2B8MtGFLJmQlpijfKmcpMneMWGncLw3148LQaQoEXeScHgs4juOqCGgI8Kk51v1cdfrmM9JmBGYub5Y2&X-Amz-Signature=3b0443115e8fc8b20750efec5924c5c1566dd036538edd6e1c944b04608b1726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCIWW7P%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGVGzgJvwyqxAryWLB4%2BxKnbAhU8%2FUwZSIxGt3%2FQE7pDAiArBxCQktwYsUv9ZZAbU5SHHfSV09b8FL1S9IeLhwbjgCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMfeGRaVKNrf3CsgAmKtwDbq4Bz1MGFVYWql12ahSTrU3irsqeVfyUsWwaiIVLeXKRs9rOd4hQ50%2BauKKpHV9TOlZtXdg82%2Bo263fYHMi%2BTls9Siofs%2Bt5y0sLTmHd9j24FCkkT5QSytgyqEPJppWIwqf%2B9y55yOqW4IipTORUvOnq7Xj6EhwuQMlKDKFm8JGKDFd8YmWEQbqvje2sJGoXIdelWZVFbag8RDv7dShXjMxgd0LN2DOJwtjLKx7bS7Gc8hkDEeTtKUIXg7zLEmtOiHy5rCnjpMMFj1hpuX6E3lE7x54xARFYcUwTK%2BtmZtylT7fE0tZeaemEOiJINmEMgsY5YVdvg9BjC5ZbdyqGDjlfUacBuHlBB9E%2FfZg%2BBUB0mH9uKd%2FcB%2BRID3Y7zokyFXFAAAsp91d4pYO9wMCyxsqBnOb4OPetD2ihT9G8w30M5Dg2bPGxXx6baQd7pVL5JnFoB84Fk6XqkQsiOkbfU%2FSuTDOrhWgrMgB0JxLyJVYw2FJst%2FmYp32vV9gbXzDxnOyxlV4yB10wo5XnIdBiYCHto7hBRAzuWh6zLrnXUl4CZnj%2Fh27adGQy3ZgZ8hoRuT282RNAPfGLoZDWqgqg63suU0032l2ADIE4Pmr9OpTgn7PaBhU1%2B%2BMMd70w6aX6wgY6pgEK3VtHSplEIPMsQyM%2BJzIUFRXv8mNS5cu93R4GXINLnJAa6Gl%2FcvCc8jkfxm5x%2FqwGeWPS2iXb1g0qcWRxTNBQLerSvFCLNOwDJiV6%2FoXQBe6dThSZTsTKtAqMP252rZIrZu8OfHZdJkzsm%2B8MtGFLJmQlpijfKmcpMneMWGncLw3148LQaQoEXeScHgs4juOqCGgI8Kk51v1cdfrmM9JmBGYub5Y2&X-Amz-Signature=fecfea8cadb619d37d67c445dd9e5471f9babc112048437b02a7ea2598eb2420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
