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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSWJWSNB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyFiHQwhfHjlyKOphJ8xnmWr%2BY6swlZKK7BU2mMo2atQIhANw%2BOJFH%2BOBPkHdM2vQ8HWghvcZre52QFH8%2BX1YYYaBaKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFjp9lnmJDTDu7Yi8q3AP%2FU2Vy4op5cJnUdGXAl79LkVdZzBP7E942RCtXgfQ29sauWNrtku2PIEEAw2PPwMd1Hh9jUCGciuGlHOPw5YX872LtHCD%2BEmRrEvks3DdvnxLVyyog27M59cc3fav%2FNqVqo2hV08hBvB1nZngtyvInj0iSNGVmGqRR3Bfaa6pnajhFKTF6g%2BkqZbwoA1T707LrkdphCyMJs83JrFehlzsLKLmggnTUq98IDXr0KtTmeGv1%2FfVdjNhI5s5C4SuxKAm5xbNCPkWufDLOajDVIB7DAKYV0ckW%2BMNX5jVDvMO2MhkW956bbhCklSTFlEhxhvWyUyjNFwQax%2Ftfyo5j7kS7amLVZHX%2FIgv5hqEsPS7M0vX%2B9X8CMyuSjZ6fGENLBlsgVayzYE9I7%2BpVkDo56ZWSpHDNoZ8MXPFX6qvQnzqkleprnCCPqCJhQshVy8lgZpt4hyrhSX1ofngP7r%2FcIE92lB7rdJ18doJGaz7NQwpNyiwtJ2MpCghc9eRr4aBmXy4Qthq5o0zXvMZ%2B2uyfh4kwgSH2Nc%2F5QmpxSKICbwL%2BizyM3B31njQkr3i3%2BN6%2Bt8q5qRkL2sCTZFtiKhciN%2Fygk%2B9lu2FAmT8HKoHv8YbEdLAyg9d7YiCAPySzuDC7qt7CBjqkAUDxG9P7h6pWfrQJd7GX5Rc5VHIWMNpMKsMVYJ45COaPyJb3THrreunSZYCumkERTW2g21baF0nE%2BpRbGLSotyAYnPazu2JltAGnZHl6Deht6ksZnjLAGh6zTG%2BMmaqhKAzI4suHNVdVd%2BEVEexngNQabUUL7dLS51VZdzTqhU1vWvmGZ3NyMWnygwlE4xJwG7OzsGY%2FXUqm%2BM9m8nYA0oINugia&X-Amz-Signature=1b080a6907db484dd970cd47bc5293e1512dc469a5c44e7724becf44b5d70cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSWJWSNB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyFiHQwhfHjlyKOphJ8xnmWr%2BY6swlZKK7BU2mMo2atQIhANw%2BOJFH%2BOBPkHdM2vQ8HWghvcZre52QFH8%2BX1YYYaBaKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFjp9lnmJDTDu7Yi8q3AP%2FU2Vy4op5cJnUdGXAl79LkVdZzBP7E942RCtXgfQ29sauWNrtku2PIEEAw2PPwMd1Hh9jUCGciuGlHOPw5YX872LtHCD%2BEmRrEvks3DdvnxLVyyog27M59cc3fav%2FNqVqo2hV08hBvB1nZngtyvInj0iSNGVmGqRR3Bfaa6pnajhFKTF6g%2BkqZbwoA1T707LrkdphCyMJs83JrFehlzsLKLmggnTUq98IDXr0KtTmeGv1%2FfVdjNhI5s5C4SuxKAm5xbNCPkWufDLOajDVIB7DAKYV0ckW%2BMNX5jVDvMO2MhkW956bbhCklSTFlEhxhvWyUyjNFwQax%2Ftfyo5j7kS7amLVZHX%2FIgv5hqEsPS7M0vX%2B9X8CMyuSjZ6fGENLBlsgVayzYE9I7%2BpVkDo56ZWSpHDNoZ8MXPFX6qvQnzqkleprnCCPqCJhQshVy8lgZpt4hyrhSX1ofngP7r%2FcIE92lB7rdJ18doJGaz7NQwpNyiwtJ2MpCghc9eRr4aBmXy4Qthq5o0zXvMZ%2B2uyfh4kwgSH2Nc%2F5QmpxSKICbwL%2BizyM3B31njQkr3i3%2BN6%2Bt8q5qRkL2sCTZFtiKhciN%2Fygk%2B9lu2FAmT8HKoHv8YbEdLAyg9d7YiCAPySzuDC7qt7CBjqkAUDxG9P7h6pWfrQJd7GX5Rc5VHIWMNpMKsMVYJ45COaPyJb3THrreunSZYCumkERTW2g21baF0nE%2BpRbGLSotyAYnPazu2JltAGnZHl6Deht6ksZnjLAGh6zTG%2BMmaqhKAzI4suHNVdVd%2BEVEexngNQabUUL7dLS51VZdzTqhU1vWvmGZ3NyMWnygwlE4xJwG7OzsGY%2FXUqm%2BM9m8nYA0oINugia&X-Amz-Signature=bc63116615c1a0441e2dfce8380d859e4142b1823d62bc64758fa2fb716ea8e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSWJWSNB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyFiHQwhfHjlyKOphJ8xnmWr%2BY6swlZKK7BU2mMo2atQIhANw%2BOJFH%2BOBPkHdM2vQ8HWghvcZre52QFH8%2BX1YYYaBaKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFjp9lnmJDTDu7Yi8q3AP%2FU2Vy4op5cJnUdGXAl79LkVdZzBP7E942RCtXgfQ29sauWNrtku2PIEEAw2PPwMd1Hh9jUCGciuGlHOPw5YX872LtHCD%2BEmRrEvks3DdvnxLVyyog27M59cc3fav%2FNqVqo2hV08hBvB1nZngtyvInj0iSNGVmGqRR3Bfaa6pnajhFKTF6g%2BkqZbwoA1T707LrkdphCyMJs83JrFehlzsLKLmggnTUq98IDXr0KtTmeGv1%2FfVdjNhI5s5C4SuxKAm5xbNCPkWufDLOajDVIB7DAKYV0ckW%2BMNX5jVDvMO2MhkW956bbhCklSTFlEhxhvWyUyjNFwQax%2Ftfyo5j7kS7amLVZHX%2FIgv5hqEsPS7M0vX%2B9X8CMyuSjZ6fGENLBlsgVayzYE9I7%2BpVkDo56ZWSpHDNoZ8MXPFX6qvQnzqkleprnCCPqCJhQshVy8lgZpt4hyrhSX1ofngP7r%2FcIE92lB7rdJ18doJGaz7NQwpNyiwtJ2MpCghc9eRr4aBmXy4Qthq5o0zXvMZ%2B2uyfh4kwgSH2Nc%2F5QmpxSKICbwL%2BizyM3B31njQkr3i3%2BN6%2Bt8q5qRkL2sCTZFtiKhciN%2Fygk%2B9lu2FAmT8HKoHv8YbEdLAyg9d7YiCAPySzuDC7qt7CBjqkAUDxG9P7h6pWfrQJd7GX5Rc5VHIWMNpMKsMVYJ45COaPyJb3THrreunSZYCumkERTW2g21baF0nE%2BpRbGLSotyAYnPazu2JltAGnZHl6Deht6ksZnjLAGh6zTG%2BMmaqhKAzI4suHNVdVd%2BEVEexngNQabUUL7dLS51VZdzTqhU1vWvmGZ3NyMWnygwlE4xJwG7OzsGY%2FXUqm%2BM9m8nYA0oINugia&X-Amz-Signature=fc716a106f51ee442924a7a50052f53a94ecce517db55b0022cf1fc13fd90615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSWJWSNB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyFiHQwhfHjlyKOphJ8xnmWr%2BY6swlZKK7BU2mMo2atQIhANw%2BOJFH%2BOBPkHdM2vQ8HWghvcZre52QFH8%2BX1YYYaBaKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFjp9lnmJDTDu7Yi8q3AP%2FU2Vy4op5cJnUdGXAl79LkVdZzBP7E942RCtXgfQ29sauWNrtku2PIEEAw2PPwMd1Hh9jUCGciuGlHOPw5YX872LtHCD%2BEmRrEvks3DdvnxLVyyog27M59cc3fav%2FNqVqo2hV08hBvB1nZngtyvInj0iSNGVmGqRR3Bfaa6pnajhFKTF6g%2BkqZbwoA1T707LrkdphCyMJs83JrFehlzsLKLmggnTUq98IDXr0KtTmeGv1%2FfVdjNhI5s5C4SuxKAm5xbNCPkWufDLOajDVIB7DAKYV0ckW%2BMNX5jVDvMO2MhkW956bbhCklSTFlEhxhvWyUyjNFwQax%2Ftfyo5j7kS7amLVZHX%2FIgv5hqEsPS7M0vX%2B9X8CMyuSjZ6fGENLBlsgVayzYE9I7%2BpVkDo56ZWSpHDNoZ8MXPFX6qvQnzqkleprnCCPqCJhQshVy8lgZpt4hyrhSX1ofngP7r%2FcIE92lB7rdJ18doJGaz7NQwpNyiwtJ2MpCghc9eRr4aBmXy4Qthq5o0zXvMZ%2B2uyfh4kwgSH2Nc%2F5QmpxSKICbwL%2BizyM3B31njQkr3i3%2BN6%2Bt8q5qRkL2sCTZFtiKhciN%2Fygk%2B9lu2FAmT8HKoHv8YbEdLAyg9d7YiCAPySzuDC7qt7CBjqkAUDxG9P7h6pWfrQJd7GX5Rc5VHIWMNpMKsMVYJ45COaPyJb3THrreunSZYCumkERTW2g21baF0nE%2BpRbGLSotyAYnPazu2JltAGnZHl6Deht6ksZnjLAGh6zTG%2BMmaqhKAzI4suHNVdVd%2BEVEexngNQabUUL7dLS51VZdzTqhU1vWvmGZ3NyMWnygwlE4xJwG7OzsGY%2FXUqm%2BM9m8nYA0oINugia&X-Amz-Signature=94a64839352c221b604b5a7a5e465cdaf317263eeb6504e0d6a8ebcbcf793ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSWJWSNB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyFiHQwhfHjlyKOphJ8xnmWr%2BY6swlZKK7BU2mMo2atQIhANw%2BOJFH%2BOBPkHdM2vQ8HWghvcZre52QFH8%2BX1YYYaBaKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFjp9lnmJDTDu7Yi8q3AP%2FU2Vy4op5cJnUdGXAl79LkVdZzBP7E942RCtXgfQ29sauWNrtku2PIEEAw2PPwMd1Hh9jUCGciuGlHOPw5YX872LtHCD%2BEmRrEvks3DdvnxLVyyog27M59cc3fav%2FNqVqo2hV08hBvB1nZngtyvInj0iSNGVmGqRR3Bfaa6pnajhFKTF6g%2BkqZbwoA1T707LrkdphCyMJs83JrFehlzsLKLmggnTUq98IDXr0KtTmeGv1%2FfVdjNhI5s5C4SuxKAm5xbNCPkWufDLOajDVIB7DAKYV0ckW%2BMNX5jVDvMO2MhkW956bbhCklSTFlEhxhvWyUyjNFwQax%2Ftfyo5j7kS7amLVZHX%2FIgv5hqEsPS7M0vX%2B9X8CMyuSjZ6fGENLBlsgVayzYE9I7%2BpVkDo56ZWSpHDNoZ8MXPFX6qvQnzqkleprnCCPqCJhQshVy8lgZpt4hyrhSX1ofngP7r%2FcIE92lB7rdJ18doJGaz7NQwpNyiwtJ2MpCghc9eRr4aBmXy4Qthq5o0zXvMZ%2B2uyfh4kwgSH2Nc%2F5QmpxSKICbwL%2BizyM3B31njQkr3i3%2BN6%2Bt8q5qRkL2sCTZFtiKhciN%2Fygk%2B9lu2FAmT8HKoHv8YbEdLAyg9d7YiCAPySzuDC7qt7CBjqkAUDxG9P7h6pWfrQJd7GX5Rc5VHIWMNpMKsMVYJ45COaPyJb3THrreunSZYCumkERTW2g21baF0nE%2BpRbGLSotyAYnPazu2JltAGnZHl6Deht6ksZnjLAGh6zTG%2BMmaqhKAzI4suHNVdVd%2BEVEexngNQabUUL7dLS51VZdzTqhU1vWvmGZ3NyMWnygwlE4xJwG7OzsGY%2FXUqm%2BM9m8nYA0oINugia&X-Amz-Signature=5e280ad7d9aa18208e303da7ea505d9d99e8e52f6e18bdc8640938afb9a31d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSWJWSNB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyFiHQwhfHjlyKOphJ8xnmWr%2BY6swlZKK7BU2mMo2atQIhANw%2BOJFH%2BOBPkHdM2vQ8HWghvcZre52QFH8%2BX1YYYaBaKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFjp9lnmJDTDu7Yi8q3AP%2FU2Vy4op5cJnUdGXAl79LkVdZzBP7E942RCtXgfQ29sauWNrtku2PIEEAw2PPwMd1Hh9jUCGciuGlHOPw5YX872LtHCD%2BEmRrEvks3DdvnxLVyyog27M59cc3fav%2FNqVqo2hV08hBvB1nZngtyvInj0iSNGVmGqRR3Bfaa6pnajhFKTF6g%2BkqZbwoA1T707LrkdphCyMJs83JrFehlzsLKLmggnTUq98IDXr0KtTmeGv1%2FfVdjNhI5s5C4SuxKAm5xbNCPkWufDLOajDVIB7DAKYV0ckW%2BMNX5jVDvMO2MhkW956bbhCklSTFlEhxhvWyUyjNFwQax%2Ftfyo5j7kS7amLVZHX%2FIgv5hqEsPS7M0vX%2B9X8CMyuSjZ6fGENLBlsgVayzYE9I7%2BpVkDo56ZWSpHDNoZ8MXPFX6qvQnzqkleprnCCPqCJhQshVy8lgZpt4hyrhSX1ofngP7r%2FcIE92lB7rdJ18doJGaz7NQwpNyiwtJ2MpCghc9eRr4aBmXy4Qthq5o0zXvMZ%2B2uyfh4kwgSH2Nc%2F5QmpxSKICbwL%2BizyM3B31njQkr3i3%2BN6%2Bt8q5qRkL2sCTZFtiKhciN%2Fygk%2B9lu2FAmT8HKoHv8YbEdLAyg9d7YiCAPySzuDC7qt7CBjqkAUDxG9P7h6pWfrQJd7GX5Rc5VHIWMNpMKsMVYJ45COaPyJb3THrreunSZYCumkERTW2g21baF0nE%2BpRbGLSotyAYnPazu2JltAGnZHl6Deht6ksZnjLAGh6zTG%2BMmaqhKAzI4suHNVdVd%2BEVEexngNQabUUL7dLS51VZdzTqhU1vWvmGZ3NyMWnygwlE4xJwG7OzsGY%2FXUqm%2BM9m8nYA0oINugia&X-Amz-Signature=c8e7b8a70722cf5872ce1b391a9552d31188c44a39f24004688630dded8117bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSWJWSNB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyFiHQwhfHjlyKOphJ8xnmWr%2BY6swlZKK7BU2mMo2atQIhANw%2BOJFH%2BOBPkHdM2vQ8HWghvcZre52QFH8%2BX1YYYaBaKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFjp9lnmJDTDu7Yi8q3AP%2FU2Vy4op5cJnUdGXAl79LkVdZzBP7E942RCtXgfQ29sauWNrtku2PIEEAw2PPwMd1Hh9jUCGciuGlHOPw5YX872LtHCD%2BEmRrEvks3DdvnxLVyyog27M59cc3fav%2FNqVqo2hV08hBvB1nZngtyvInj0iSNGVmGqRR3Bfaa6pnajhFKTF6g%2BkqZbwoA1T707LrkdphCyMJs83JrFehlzsLKLmggnTUq98IDXr0KtTmeGv1%2FfVdjNhI5s5C4SuxKAm5xbNCPkWufDLOajDVIB7DAKYV0ckW%2BMNX5jVDvMO2MhkW956bbhCklSTFlEhxhvWyUyjNFwQax%2Ftfyo5j7kS7amLVZHX%2FIgv5hqEsPS7M0vX%2B9X8CMyuSjZ6fGENLBlsgVayzYE9I7%2BpVkDo56ZWSpHDNoZ8MXPFX6qvQnzqkleprnCCPqCJhQshVy8lgZpt4hyrhSX1ofngP7r%2FcIE92lB7rdJ18doJGaz7NQwpNyiwtJ2MpCghc9eRr4aBmXy4Qthq5o0zXvMZ%2B2uyfh4kwgSH2Nc%2F5QmpxSKICbwL%2BizyM3B31njQkr3i3%2BN6%2Bt8q5qRkL2sCTZFtiKhciN%2Fygk%2B9lu2FAmT8HKoHv8YbEdLAyg9d7YiCAPySzuDC7qt7CBjqkAUDxG9P7h6pWfrQJd7GX5Rc5VHIWMNpMKsMVYJ45COaPyJb3THrreunSZYCumkERTW2g21baF0nE%2BpRbGLSotyAYnPazu2JltAGnZHl6Deht6ksZnjLAGh6zTG%2BMmaqhKAzI4suHNVdVd%2BEVEexngNQabUUL7dLS51VZdzTqhU1vWvmGZ3NyMWnygwlE4xJwG7OzsGY%2FXUqm%2BM9m8nYA0oINugia&X-Amz-Signature=4bcf0d88867ca90ac80694f2282e53e8158b62a8a2be0e0a5d8b4fe56466e48c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
