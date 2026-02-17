---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHXCA23U%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDLPEJg0VJC0PteOjFm8Sbbekozxh97u8BSqtECNQl3RwIgFnujJLJY0oY0Qv%2FurO6onjmwrdRFxMlYEKe9KyWDfvcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFJUa8IFzBCAuGutMyrcA7JfG9i3wIVpgUgEV6%2Fh3PB1hTfEvAAYruGgCMjZHkqv0I%2FM%2FuoYqhauOd1UrC3wVpXf5B2jeOmekL8eP4XIuH7CZ%2B%2BvpqZNn459dXY2wDqHjrM6NvXXnqwZuLXnXxjFE6v9OmWrjRsw3N52sjUjvSIXtoegclxN9vcj7sTXAHuo%2FmEmGbQuK414ApxvFQtTrruuw%2FkmS27WiSD8Za6te6fS9NQ0ccSxHIcmM1nOJFXxDvoJVatl1PvgQNEZVpEmQeZ6c4lj5qbMIeLLmLhH9tK8fkqmeifcUwBqXwzttBs9LNyblYbtwMOF2MjkIquI3tCuVdMOYYZ0zGoFNHAKbSkIAJmnsTGhwtsWizmb1eSdh8ThBuwkf0ySf8bn%2B8rajm0pHChbMXlkTeHthaeL8IespUqWBjBEwKv42DJuYKvzxJeW12iporWVTjA7%2BZWNqWRg%2Fa8qP1vYQ6LR15N%2FOF7EwZhFEO%2B0R6Kw%2FP3%2BO4NBqy54B6XCAtJePoGC965FJcCfQAGYRqVX4cdTJ%2Ba360gSNTkEJklEUXsvXv%2FxL%2FnI%2B9FdFctRFr4uZ41VxJFQRDd0RsybENNnZnKw%2Fs7oO6MUUVijpMrvzDC%2BY1ajDIGAkAmVqpN5fGkrgPiNMMeXz8wGOqUBLkRzESulcjt9QyalYncfyjljcVY%2B8gTl5XIlC9z69ZQUP6HmbG%2BoK8wYaGvYQ3oBt8Bb5fwVyzYmDx6klbPD7hUbUupTqTojyS9pSe3tE5zaPxHS1w6W2y%2BFrrLEDWeON%2F5K6yTjP7ZTogr1PyU%2B0e3DojnRv28U0qRS58VL5rx5E0SQPp1JtAXB2p%2F7B3HjqdOzsthpX25mfbZqSI%2BPcAUxZLdp&X-Amz-Signature=e4f0ac65af60903dd53a338e8004b2d2ca0a95e92ffb9ce7fac8be5254bfd751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHXCA23U%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDLPEJg0VJC0PteOjFm8Sbbekozxh97u8BSqtECNQl3RwIgFnujJLJY0oY0Qv%2FurO6onjmwrdRFxMlYEKe9KyWDfvcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFJUa8IFzBCAuGutMyrcA7JfG9i3wIVpgUgEV6%2Fh3PB1hTfEvAAYruGgCMjZHkqv0I%2FM%2FuoYqhauOd1UrC3wVpXf5B2jeOmekL8eP4XIuH7CZ%2B%2BvpqZNn459dXY2wDqHjrM6NvXXnqwZuLXnXxjFE6v9OmWrjRsw3N52sjUjvSIXtoegclxN9vcj7sTXAHuo%2FmEmGbQuK414ApxvFQtTrruuw%2FkmS27WiSD8Za6te6fS9NQ0ccSxHIcmM1nOJFXxDvoJVatl1PvgQNEZVpEmQeZ6c4lj5qbMIeLLmLhH9tK8fkqmeifcUwBqXwzttBs9LNyblYbtwMOF2MjkIquI3tCuVdMOYYZ0zGoFNHAKbSkIAJmnsTGhwtsWizmb1eSdh8ThBuwkf0ySf8bn%2B8rajm0pHChbMXlkTeHthaeL8IespUqWBjBEwKv42DJuYKvzxJeW12iporWVTjA7%2BZWNqWRg%2Fa8qP1vYQ6LR15N%2FOF7EwZhFEO%2B0R6Kw%2FP3%2BO4NBqy54B6XCAtJePoGC965FJcCfQAGYRqVX4cdTJ%2Ba360gSNTkEJklEUXsvXv%2FxL%2FnI%2B9FdFctRFr4uZ41VxJFQRDd0RsybENNnZnKw%2Fs7oO6MUUVijpMrvzDC%2BY1ajDIGAkAmVqpN5fGkrgPiNMMeXz8wGOqUBLkRzESulcjt9QyalYncfyjljcVY%2B8gTl5XIlC9z69ZQUP6HmbG%2BoK8wYaGvYQ3oBt8Bb5fwVyzYmDx6klbPD7hUbUupTqTojyS9pSe3tE5zaPxHS1w6W2y%2BFrrLEDWeON%2F5K6yTjP7ZTogr1PyU%2B0e3DojnRv28U0qRS58VL5rx5E0SQPp1JtAXB2p%2F7B3HjqdOzsthpX25mfbZqSI%2BPcAUxZLdp&X-Amz-Signature=d8bc42c6aadcd82221169ac0ae00845ca368db2a9b96a2f5f0c46d7acb3c623f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHXCA23U%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDLPEJg0VJC0PteOjFm8Sbbekozxh97u8BSqtECNQl3RwIgFnujJLJY0oY0Qv%2FurO6onjmwrdRFxMlYEKe9KyWDfvcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFJUa8IFzBCAuGutMyrcA7JfG9i3wIVpgUgEV6%2Fh3PB1hTfEvAAYruGgCMjZHkqv0I%2FM%2FuoYqhauOd1UrC3wVpXf5B2jeOmekL8eP4XIuH7CZ%2B%2BvpqZNn459dXY2wDqHjrM6NvXXnqwZuLXnXxjFE6v9OmWrjRsw3N52sjUjvSIXtoegclxN9vcj7sTXAHuo%2FmEmGbQuK414ApxvFQtTrruuw%2FkmS27WiSD8Za6te6fS9NQ0ccSxHIcmM1nOJFXxDvoJVatl1PvgQNEZVpEmQeZ6c4lj5qbMIeLLmLhH9tK8fkqmeifcUwBqXwzttBs9LNyblYbtwMOF2MjkIquI3tCuVdMOYYZ0zGoFNHAKbSkIAJmnsTGhwtsWizmb1eSdh8ThBuwkf0ySf8bn%2B8rajm0pHChbMXlkTeHthaeL8IespUqWBjBEwKv42DJuYKvzxJeW12iporWVTjA7%2BZWNqWRg%2Fa8qP1vYQ6LR15N%2FOF7EwZhFEO%2B0R6Kw%2FP3%2BO4NBqy54B6XCAtJePoGC965FJcCfQAGYRqVX4cdTJ%2Ba360gSNTkEJklEUXsvXv%2FxL%2FnI%2B9FdFctRFr4uZ41VxJFQRDd0RsybENNnZnKw%2Fs7oO6MUUVijpMrvzDC%2BY1ajDIGAkAmVqpN5fGkrgPiNMMeXz8wGOqUBLkRzESulcjt9QyalYncfyjljcVY%2B8gTl5XIlC9z69ZQUP6HmbG%2BoK8wYaGvYQ3oBt8Bb5fwVyzYmDx6klbPD7hUbUupTqTojyS9pSe3tE5zaPxHS1w6W2y%2BFrrLEDWeON%2F5K6yTjP7ZTogr1PyU%2B0e3DojnRv28U0qRS58VL5rx5E0SQPp1JtAXB2p%2F7B3HjqdOzsthpX25mfbZqSI%2BPcAUxZLdp&X-Amz-Signature=fcf9b112073d8447070b4f0711738fbbcf993a0ed14a8f8e14c5832cff394356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHXCA23U%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDLPEJg0VJC0PteOjFm8Sbbekozxh97u8BSqtECNQl3RwIgFnujJLJY0oY0Qv%2FurO6onjmwrdRFxMlYEKe9KyWDfvcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFJUa8IFzBCAuGutMyrcA7JfG9i3wIVpgUgEV6%2Fh3PB1hTfEvAAYruGgCMjZHkqv0I%2FM%2FuoYqhauOd1UrC3wVpXf5B2jeOmekL8eP4XIuH7CZ%2B%2BvpqZNn459dXY2wDqHjrM6NvXXnqwZuLXnXxjFE6v9OmWrjRsw3N52sjUjvSIXtoegclxN9vcj7sTXAHuo%2FmEmGbQuK414ApxvFQtTrruuw%2FkmS27WiSD8Za6te6fS9NQ0ccSxHIcmM1nOJFXxDvoJVatl1PvgQNEZVpEmQeZ6c4lj5qbMIeLLmLhH9tK8fkqmeifcUwBqXwzttBs9LNyblYbtwMOF2MjkIquI3tCuVdMOYYZ0zGoFNHAKbSkIAJmnsTGhwtsWizmb1eSdh8ThBuwkf0ySf8bn%2B8rajm0pHChbMXlkTeHthaeL8IespUqWBjBEwKv42DJuYKvzxJeW12iporWVTjA7%2BZWNqWRg%2Fa8qP1vYQ6LR15N%2FOF7EwZhFEO%2B0R6Kw%2FP3%2BO4NBqy54B6XCAtJePoGC965FJcCfQAGYRqVX4cdTJ%2Ba360gSNTkEJklEUXsvXv%2FxL%2FnI%2B9FdFctRFr4uZ41VxJFQRDd0RsybENNnZnKw%2Fs7oO6MUUVijpMrvzDC%2BY1ajDIGAkAmVqpN5fGkrgPiNMMeXz8wGOqUBLkRzESulcjt9QyalYncfyjljcVY%2B8gTl5XIlC9z69ZQUP6HmbG%2BoK8wYaGvYQ3oBt8Bb5fwVyzYmDx6klbPD7hUbUupTqTojyS9pSe3tE5zaPxHS1w6W2y%2BFrrLEDWeON%2F5K6yTjP7ZTogr1PyU%2B0e3DojnRv28U0qRS58VL5rx5E0SQPp1JtAXB2p%2F7B3HjqdOzsthpX25mfbZqSI%2BPcAUxZLdp&X-Amz-Signature=179578633cb5a54ce1f4f349fd36a8246f328a3ce5f878286caef24168e90c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHXCA23U%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDLPEJg0VJC0PteOjFm8Sbbekozxh97u8BSqtECNQl3RwIgFnujJLJY0oY0Qv%2FurO6onjmwrdRFxMlYEKe9KyWDfvcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFJUa8IFzBCAuGutMyrcA7JfG9i3wIVpgUgEV6%2Fh3PB1hTfEvAAYruGgCMjZHkqv0I%2FM%2FuoYqhauOd1UrC3wVpXf5B2jeOmekL8eP4XIuH7CZ%2B%2BvpqZNn459dXY2wDqHjrM6NvXXnqwZuLXnXxjFE6v9OmWrjRsw3N52sjUjvSIXtoegclxN9vcj7sTXAHuo%2FmEmGbQuK414ApxvFQtTrruuw%2FkmS27WiSD8Za6te6fS9NQ0ccSxHIcmM1nOJFXxDvoJVatl1PvgQNEZVpEmQeZ6c4lj5qbMIeLLmLhH9tK8fkqmeifcUwBqXwzttBs9LNyblYbtwMOF2MjkIquI3tCuVdMOYYZ0zGoFNHAKbSkIAJmnsTGhwtsWizmb1eSdh8ThBuwkf0ySf8bn%2B8rajm0pHChbMXlkTeHthaeL8IespUqWBjBEwKv42DJuYKvzxJeW12iporWVTjA7%2BZWNqWRg%2Fa8qP1vYQ6LR15N%2FOF7EwZhFEO%2B0R6Kw%2FP3%2BO4NBqy54B6XCAtJePoGC965FJcCfQAGYRqVX4cdTJ%2Ba360gSNTkEJklEUXsvXv%2FxL%2FnI%2B9FdFctRFr4uZ41VxJFQRDd0RsybENNnZnKw%2Fs7oO6MUUVijpMrvzDC%2BY1ajDIGAkAmVqpN5fGkrgPiNMMeXz8wGOqUBLkRzESulcjt9QyalYncfyjljcVY%2B8gTl5XIlC9z69ZQUP6HmbG%2BoK8wYaGvYQ3oBt8Bb5fwVyzYmDx6klbPD7hUbUupTqTojyS9pSe3tE5zaPxHS1w6W2y%2BFrrLEDWeON%2F5K6yTjP7ZTogr1PyU%2B0e3DojnRv28U0qRS58VL5rx5E0SQPp1JtAXB2p%2F7B3HjqdOzsthpX25mfbZqSI%2BPcAUxZLdp&X-Amz-Signature=9ffaadb87358db55cfe0474cef1716918e04ac50d22ecbc7f4da955ad1bf8c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHXCA23U%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDLPEJg0VJC0PteOjFm8Sbbekozxh97u8BSqtECNQl3RwIgFnujJLJY0oY0Qv%2FurO6onjmwrdRFxMlYEKe9KyWDfvcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFJUa8IFzBCAuGutMyrcA7JfG9i3wIVpgUgEV6%2Fh3PB1hTfEvAAYruGgCMjZHkqv0I%2FM%2FuoYqhauOd1UrC3wVpXf5B2jeOmekL8eP4XIuH7CZ%2B%2BvpqZNn459dXY2wDqHjrM6NvXXnqwZuLXnXxjFE6v9OmWrjRsw3N52sjUjvSIXtoegclxN9vcj7sTXAHuo%2FmEmGbQuK414ApxvFQtTrruuw%2FkmS27WiSD8Za6te6fS9NQ0ccSxHIcmM1nOJFXxDvoJVatl1PvgQNEZVpEmQeZ6c4lj5qbMIeLLmLhH9tK8fkqmeifcUwBqXwzttBs9LNyblYbtwMOF2MjkIquI3tCuVdMOYYZ0zGoFNHAKbSkIAJmnsTGhwtsWizmb1eSdh8ThBuwkf0ySf8bn%2B8rajm0pHChbMXlkTeHthaeL8IespUqWBjBEwKv42DJuYKvzxJeW12iporWVTjA7%2BZWNqWRg%2Fa8qP1vYQ6LR15N%2FOF7EwZhFEO%2B0R6Kw%2FP3%2BO4NBqy54B6XCAtJePoGC965FJcCfQAGYRqVX4cdTJ%2Ba360gSNTkEJklEUXsvXv%2FxL%2FnI%2B9FdFctRFr4uZ41VxJFQRDd0RsybENNnZnKw%2Fs7oO6MUUVijpMrvzDC%2BY1ajDIGAkAmVqpN5fGkrgPiNMMeXz8wGOqUBLkRzESulcjt9QyalYncfyjljcVY%2B8gTl5XIlC9z69ZQUP6HmbG%2BoK8wYaGvYQ3oBt8Bb5fwVyzYmDx6klbPD7hUbUupTqTojyS9pSe3tE5zaPxHS1w6W2y%2BFrrLEDWeON%2F5K6yTjP7ZTogr1PyU%2B0e3DojnRv28U0qRS58VL5rx5E0SQPp1JtAXB2p%2F7B3HjqdOzsthpX25mfbZqSI%2BPcAUxZLdp&X-Amz-Signature=469ebfc752383e49f5ffab15d41d9bfda665d3b185f6efdd69624417f53ea95b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHXCA23U%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDLPEJg0VJC0PteOjFm8Sbbekozxh97u8BSqtECNQl3RwIgFnujJLJY0oY0Qv%2FurO6onjmwrdRFxMlYEKe9KyWDfvcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFJUa8IFzBCAuGutMyrcA7JfG9i3wIVpgUgEV6%2Fh3PB1hTfEvAAYruGgCMjZHkqv0I%2FM%2FuoYqhauOd1UrC3wVpXf5B2jeOmekL8eP4XIuH7CZ%2B%2BvpqZNn459dXY2wDqHjrM6NvXXnqwZuLXnXxjFE6v9OmWrjRsw3N52sjUjvSIXtoegclxN9vcj7sTXAHuo%2FmEmGbQuK414ApxvFQtTrruuw%2FkmS27WiSD8Za6te6fS9NQ0ccSxHIcmM1nOJFXxDvoJVatl1PvgQNEZVpEmQeZ6c4lj5qbMIeLLmLhH9tK8fkqmeifcUwBqXwzttBs9LNyblYbtwMOF2MjkIquI3tCuVdMOYYZ0zGoFNHAKbSkIAJmnsTGhwtsWizmb1eSdh8ThBuwkf0ySf8bn%2B8rajm0pHChbMXlkTeHthaeL8IespUqWBjBEwKv42DJuYKvzxJeW12iporWVTjA7%2BZWNqWRg%2Fa8qP1vYQ6LR15N%2FOF7EwZhFEO%2B0R6Kw%2FP3%2BO4NBqy54B6XCAtJePoGC965FJcCfQAGYRqVX4cdTJ%2Ba360gSNTkEJklEUXsvXv%2FxL%2FnI%2B9FdFctRFr4uZ41VxJFQRDd0RsybENNnZnKw%2Fs7oO6MUUVijpMrvzDC%2BY1ajDIGAkAmVqpN5fGkrgPiNMMeXz8wGOqUBLkRzESulcjt9QyalYncfyjljcVY%2B8gTl5XIlC9z69ZQUP6HmbG%2BoK8wYaGvYQ3oBt8Bb5fwVyzYmDx6klbPD7hUbUupTqTojyS9pSe3tE5zaPxHS1w6W2y%2BFrrLEDWeON%2F5K6yTjP7ZTogr1PyU%2B0e3DojnRv28U0qRS58VL5rx5E0SQPp1JtAXB2p%2F7B3HjqdOzsthpX25mfbZqSI%2BPcAUxZLdp&X-Amz-Signature=76b7d500e59d984f62d557e3a48f8adf3a1eef1cdbcb422cb372c0d07f22daa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
