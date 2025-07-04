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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDEVEKYR%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDkVrUQHnEtU1GGrAxdOcsnx1AeGInlRgMGueG5s6FrXQIgf2FNz9AH00gvaU2ZTyx1R9T8bKjQr8qFMfQg8WnCo2Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJGfg0rN69Ewq3q7lyrcA91t9yDQTxUbfGk1bxVA2zDM9jfOaZIDDkNcAX8fXegv1wE5O73S61W8ubkrjuPnjdXvM3x20kF1luNxGZWq1Mc81Ai8c%2FzkHQ7rFUjxmbI%2FHVjwnR1wUudg%2BUuZiCq9Rgs%2FPKZV%2FS3%2B1jTwDSWwceEFTbY24y91O%2B4hiVbZtTza19PX5kuvDqXQokDO470SFcs2KrwBmZ1q9KHzd5QK7stqWOb0jC7PXd0zEyMyQlr4h1HtTvNIhFw3ZLt0ujqyYKxXpBIDAf2tGa2lfcBNnzMv1ZR%2BKsuXFujFwTaNU8Q%2F2U1tgJZDkdR4Um%2F0BBaFG9B1Gijed7JnJzd1L4H9joVvEAWzFJiZuGOhQ8ibk73vaGQAYsp%2FyIjFbn97SI3qWb7j2jM9IsUS40%2FdUPgNiJi2u3PEgGbj4GVsJNPdOiHEIphK2NZmk6mY4VmNelg7M0K%2BYlrAy%2BQXaERyMPUxI6YvHfiXDhRCt1Meab9%2B8kuE2UEwL2K6edtiI9g84Og3uCh9qw4c7dUYMOwMiTtxPYZbxp2G%2BShktmAD8SMk6voqI2dLV%2FwS6uIf1cRsDRx2j1TDOFa%2FvH0k3BqhzaJDALvRh8j1ejD6l54ERAdtWUfkdGDe0uWOoFWmOZxrMOW%2BoMMGOqUBkXYMUM6xLTnGbUyKQKqmn8iUuSQx5Oify0swX31gPpDiNyfAJ6DLRe12u7Us0q3FvMhl%2FnwlQVFgT3L3tifwFgCr83x55RQNFdfIZxCNNthkcWeTQGDGupr6LmcyzBvMVvmAPAvliN7hWvSK1yIEBcWAgRnLOwbzti8%2F5YqpFcuf3HOJ4LTXqWu%2FPZjIMVpfrQ%2FkFB90GX6M1NfCyk393e1%2BRio5&X-Amz-Signature=d04030b62c1d62e1c1f208308a67450b43edbebee8eaff4afbb95dc32646e194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDEVEKYR%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDkVrUQHnEtU1GGrAxdOcsnx1AeGInlRgMGueG5s6FrXQIgf2FNz9AH00gvaU2ZTyx1R9T8bKjQr8qFMfQg8WnCo2Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJGfg0rN69Ewq3q7lyrcA91t9yDQTxUbfGk1bxVA2zDM9jfOaZIDDkNcAX8fXegv1wE5O73S61W8ubkrjuPnjdXvM3x20kF1luNxGZWq1Mc81Ai8c%2FzkHQ7rFUjxmbI%2FHVjwnR1wUudg%2BUuZiCq9Rgs%2FPKZV%2FS3%2B1jTwDSWwceEFTbY24y91O%2B4hiVbZtTza19PX5kuvDqXQokDO470SFcs2KrwBmZ1q9KHzd5QK7stqWOb0jC7PXd0zEyMyQlr4h1HtTvNIhFw3ZLt0ujqyYKxXpBIDAf2tGa2lfcBNnzMv1ZR%2BKsuXFujFwTaNU8Q%2F2U1tgJZDkdR4Um%2F0BBaFG9B1Gijed7JnJzd1L4H9joVvEAWzFJiZuGOhQ8ibk73vaGQAYsp%2FyIjFbn97SI3qWb7j2jM9IsUS40%2FdUPgNiJi2u3PEgGbj4GVsJNPdOiHEIphK2NZmk6mY4VmNelg7M0K%2BYlrAy%2BQXaERyMPUxI6YvHfiXDhRCt1Meab9%2B8kuE2UEwL2K6edtiI9g84Og3uCh9qw4c7dUYMOwMiTtxPYZbxp2G%2BShktmAD8SMk6voqI2dLV%2FwS6uIf1cRsDRx2j1TDOFa%2FvH0k3BqhzaJDALvRh8j1ejD6l54ERAdtWUfkdGDe0uWOoFWmOZxrMOW%2BoMMGOqUBkXYMUM6xLTnGbUyKQKqmn8iUuSQx5Oify0swX31gPpDiNyfAJ6DLRe12u7Us0q3FvMhl%2FnwlQVFgT3L3tifwFgCr83x55RQNFdfIZxCNNthkcWeTQGDGupr6LmcyzBvMVvmAPAvliN7hWvSK1yIEBcWAgRnLOwbzti8%2F5YqpFcuf3HOJ4LTXqWu%2FPZjIMVpfrQ%2FkFB90GX6M1NfCyk393e1%2BRio5&X-Amz-Signature=9259dbe19c45fb5d505aa7f0c10292c9b896bcc6f179ad4a083641491ebc7d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDEVEKYR%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDkVrUQHnEtU1GGrAxdOcsnx1AeGInlRgMGueG5s6FrXQIgf2FNz9AH00gvaU2ZTyx1R9T8bKjQr8qFMfQg8WnCo2Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJGfg0rN69Ewq3q7lyrcA91t9yDQTxUbfGk1bxVA2zDM9jfOaZIDDkNcAX8fXegv1wE5O73S61W8ubkrjuPnjdXvM3x20kF1luNxGZWq1Mc81Ai8c%2FzkHQ7rFUjxmbI%2FHVjwnR1wUudg%2BUuZiCq9Rgs%2FPKZV%2FS3%2B1jTwDSWwceEFTbY24y91O%2B4hiVbZtTza19PX5kuvDqXQokDO470SFcs2KrwBmZ1q9KHzd5QK7stqWOb0jC7PXd0zEyMyQlr4h1HtTvNIhFw3ZLt0ujqyYKxXpBIDAf2tGa2lfcBNnzMv1ZR%2BKsuXFujFwTaNU8Q%2F2U1tgJZDkdR4Um%2F0BBaFG9B1Gijed7JnJzd1L4H9joVvEAWzFJiZuGOhQ8ibk73vaGQAYsp%2FyIjFbn97SI3qWb7j2jM9IsUS40%2FdUPgNiJi2u3PEgGbj4GVsJNPdOiHEIphK2NZmk6mY4VmNelg7M0K%2BYlrAy%2BQXaERyMPUxI6YvHfiXDhRCt1Meab9%2B8kuE2UEwL2K6edtiI9g84Og3uCh9qw4c7dUYMOwMiTtxPYZbxp2G%2BShktmAD8SMk6voqI2dLV%2FwS6uIf1cRsDRx2j1TDOFa%2FvH0k3BqhzaJDALvRh8j1ejD6l54ERAdtWUfkdGDe0uWOoFWmOZxrMOW%2BoMMGOqUBkXYMUM6xLTnGbUyKQKqmn8iUuSQx5Oify0swX31gPpDiNyfAJ6DLRe12u7Us0q3FvMhl%2FnwlQVFgT3L3tifwFgCr83x55RQNFdfIZxCNNthkcWeTQGDGupr6LmcyzBvMVvmAPAvliN7hWvSK1yIEBcWAgRnLOwbzti8%2F5YqpFcuf3HOJ4LTXqWu%2FPZjIMVpfrQ%2FkFB90GX6M1NfCyk393e1%2BRio5&X-Amz-Signature=7228f061b6afce42928643b668790e5424c4988b187f4312329dbb63da9afac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDEVEKYR%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDkVrUQHnEtU1GGrAxdOcsnx1AeGInlRgMGueG5s6FrXQIgf2FNz9AH00gvaU2ZTyx1R9T8bKjQr8qFMfQg8WnCo2Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJGfg0rN69Ewq3q7lyrcA91t9yDQTxUbfGk1bxVA2zDM9jfOaZIDDkNcAX8fXegv1wE5O73S61W8ubkrjuPnjdXvM3x20kF1luNxGZWq1Mc81Ai8c%2FzkHQ7rFUjxmbI%2FHVjwnR1wUudg%2BUuZiCq9Rgs%2FPKZV%2FS3%2B1jTwDSWwceEFTbY24y91O%2B4hiVbZtTza19PX5kuvDqXQokDO470SFcs2KrwBmZ1q9KHzd5QK7stqWOb0jC7PXd0zEyMyQlr4h1HtTvNIhFw3ZLt0ujqyYKxXpBIDAf2tGa2lfcBNnzMv1ZR%2BKsuXFujFwTaNU8Q%2F2U1tgJZDkdR4Um%2F0BBaFG9B1Gijed7JnJzd1L4H9joVvEAWzFJiZuGOhQ8ibk73vaGQAYsp%2FyIjFbn97SI3qWb7j2jM9IsUS40%2FdUPgNiJi2u3PEgGbj4GVsJNPdOiHEIphK2NZmk6mY4VmNelg7M0K%2BYlrAy%2BQXaERyMPUxI6YvHfiXDhRCt1Meab9%2B8kuE2UEwL2K6edtiI9g84Og3uCh9qw4c7dUYMOwMiTtxPYZbxp2G%2BShktmAD8SMk6voqI2dLV%2FwS6uIf1cRsDRx2j1TDOFa%2FvH0k3BqhzaJDALvRh8j1ejD6l54ERAdtWUfkdGDe0uWOoFWmOZxrMOW%2BoMMGOqUBkXYMUM6xLTnGbUyKQKqmn8iUuSQx5Oify0swX31gPpDiNyfAJ6DLRe12u7Us0q3FvMhl%2FnwlQVFgT3L3tifwFgCr83x55RQNFdfIZxCNNthkcWeTQGDGupr6LmcyzBvMVvmAPAvliN7hWvSK1yIEBcWAgRnLOwbzti8%2F5YqpFcuf3HOJ4LTXqWu%2FPZjIMVpfrQ%2FkFB90GX6M1NfCyk393e1%2BRio5&X-Amz-Signature=e2acb5970032a76923a68f5eb2dfd76609e9263e9bd9c9c3b01a2cc447dc6576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDEVEKYR%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDkVrUQHnEtU1GGrAxdOcsnx1AeGInlRgMGueG5s6FrXQIgf2FNz9AH00gvaU2ZTyx1R9T8bKjQr8qFMfQg8WnCo2Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJGfg0rN69Ewq3q7lyrcA91t9yDQTxUbfGk1bxVA2zDM9jfOaZIDDkNcAX8fXegv1wE5O73S61W8ubkrjuPnjdXvM3x20kF1luNxGZWq1Mc81Ai8c%2FzkHQ7rFUjxmbI%2FHVjwnR1wUudg%2BUuZiCq9Rgs%2FPKZV%2FS3%2B1jTwDSWwceEFTbY24y91O%2B4hiVbZtTza19PX5kuvDqXQokDO470SFcs2KrwBmZ1q9KHzd5QK7stqWOb0jC7PXd0zEyMyQlr4h1HtTvNIhFw3ZLt0ujqyYKxXpBIDAf2tGa2lfcBNnzMv1ZR%2BKsuXFujFwTaNU8Q%2F2U1tgJZDkdR4Um%2F0BBaFG9B1Gijed7JnJzd1L4H9joVvEAWzFJiZuGOhQ8ibk73vaGQAYsp%2FyIjFbn97SI3qWb7j2jM9IsUS40%2FdUPgNiJi2u3PEgGbj4GVsJNPdOiHEIphK2NZmk6mY4VmNelg7M0K%2BYlrAy%2BQXaERyMPUxI6YvHfiXDhRCt1Meab9%2B8kuE2UEwL2K6edtiI9g84Og3uCh9qw4c7dUYMOwMiTtxPYZbxp2G%2BShktmAD8SMk6voqI2dLV%2FwS6uIf1cRsDRx2j1TDOFa%2FvH0k3BqhzaJDALvRh8j1ejD6l54ERAdtWUfkdGDe0uWOoFWmOZxrMOW%2BoMMGOqUBkXYMUM6xLTnGbUyKQKqmn8iUuSQx5Oify0swX31gPpDiNyfAJ6DLRe12u7Us0q3FvMhl%2FnwlQVFgT3L3tifwFgCr83x55RQNFdfIZxCNNthkcWeTQGDGupr6LmcyzBvMVvmAPAvliN7hWvSK1yIEBcWAgRnLOwbzti8%2F5YqpFcuf3HOJ4LTXqWu%2FPZjIMVpfrQ%2FkFB90GX6M1NfCyk393e1%2BRio5&X-Amz-Signature=9ad21ab2f3da2fa98f01a553509898aa524295c5665e5ae991ade4133bb9d49a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDEVEKYR%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDkVrUQHnEtU1GGrAxdOcsnx1AeGInlRgMGueG5s6FrXQIgf2FNz9AH00gvaU2ZTyx1R9T8bKjQr8qFMfQg8WnCo2Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJGfg0rN69Ewq3q7lyrcA91t9yDQTxUbfGk1bxVA2zDM9jfOaZIDDkNcAX8fXegv1wE5O73S61W8ubkrjuPnjdXvM3x20kF1luNxGZWq1Mc81Ai8c%2FzkHQ7rFUjxmbI%2FHVjwnR1wUudg%2BUuZiCq9Rgs%2FPKZV%2FS3%2B1jTwDSWwceEFTbY24y91O%2B4hiVbZtTza19PX5kuvDqXQokDO470SFcs2KrwBmZ1q9KHzd5QK7stqWOb0jC7PXd0zEyMyQlr4h1HtTvNIhFw3ZLt0ujqyYKxXpBIDAf2tGa2lfcBNnzMv1ZR%2BKsuXFujFwTaNU8Q%2F2U1tgJZDkdR4Um%2F0BBaFG9B1Gijed7JnJzd1L4H9joVvEAWzFJiZuGOhQ8ibk73vaGQAYsp%2FyIjFbn97SI3qWb7j2jM9IsUS40%2FdUPgNiJi2u3PEgGbj4GVsJNPdOiHEIphK2NZmk6mY4VmNelg7M0K%2BYlrAy%2BQXaERyMPUxI6YvHfiXDhRCt1Meab9%2B8kuE2UEwL2K6edtiI9g84Og3uCh9qw4c7dUYMOwMiTtxPYZbxp2G%2BShktmAD8SMk6voqI2dLV%2FwS6uIf1cRsDRx2j1TDOFa%2FvH0k3BqhzaJDALvRh8j1ejD6l54ERAdtWUfkdGDe0uWOoFWmOZxrMOW%2BoMMGOqUBkXYMUM6xLTnGbUyKQKqmn8iUuSQx5Oify0swX31gPpDiNyfAJ6DLRe12u7Us0q3FvMhl%2FnwlQVFgT3L3tifwFgCr83x55RQNFdfIZxCNNthkcWeTQGDGupr6LmcyzBvMVvmAPAvliN7hWvSK1yIEBcWAgRnLOwbzti8%2F5YqpFcuf3HOJ4LTXqWu%2FPZjIMVpfrQ%2FkFB90GX6M1NfCyk393e1%2BRio5&X-Amz-Signature=5dbcaf73c1c9e6a3a370b9126f548276be0c927dbe05ab3c46b1fef1b1984a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDEVEKYR%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDkVrUQHnEtU1GGrAxdOcsnx1AeGInlRgMGueG5s6FrXQIgf2FNz9AH00gvaU2ZTyx1R9T8bKjQr8qFMfQg8WnCo2Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJGfg0rN69Ewq3q7lyrcA91t9yDQTxUbfGk1bxVA2zDM9jfOaZIDDkNcAX8fXegv1wE5O73S61W8ubkrjuPnjdXvM3x20kF1luNxGZWq1Mc81Ai8c%2FzkHQ7rFUjxmbI%2FHVjwnR1wUudg%2BUuZiCq9Rgs%2FPKZV%2FS3%2B1jTwDSWwceEFTbY24y91O%2B4hiVbZtTza19PX5kuvDqXQokDO470SFcs2KrwBmZ1q9KHzd5QK7stqWOb0jC7PXd0zEyMyQlr4h1HtTvNIhFw3ZLt0ujqyYKxXpBIDAf2tGa2lfcBNnzMv1ZR%2BKsuXFujFwTaNU8Q%2F2U1tgJZDkdR4Um%2F0BBaFG9B1Gijed7JnJzd1L4H9joVvEAWzFJiZuGOhQ8ibk73vaGQAYsp%2FyIjFbn97SI3qWb7j2jM9IsUS40%2FdUPgNiJi2u3PEgGbj4GVsJNPdOiHEIphK2NZmk6mY4VmNelg7M0K%2BYlrAy%2BQXaERyMPUxI6YvHfiXDhRCt1Meab9%2B8kuE2UEwL2K6edtiI9g84Og3uCh9qw4c7dUYMOwMiTtxPYZbxp2G%2BShktmAD8SMk6voqI2dLV%2FwS6uIf1cRsDRx2j1TDOFa%2FvH0k3BqhzaJDALvRh8j1ejD6l54ERAdtWUfkdGDe0uWOoFWmOZxrMOW%2BoMMGOqUBkXYMUM6xLTnGbUyKQKqmn8iUuSQx5Oify0swX31gPpDiNyfAJ6DLRe12u7Us0q3FvMhl%2FnwlQVFgT3L3tifwFgCr83x55RQNFdfIZxCNNthkcWeTQGDGupr6LmcyzBvMVvmAPAvliN7hWvSK1yIEBcWAgRnLOwbzti8%2F5YqpFcuf3HOJ4LTXqWu%2FPZjIMVpfrQ%2FkFB90GX6M1NfCyk393e1%2BRio5&X-Amz-Signature=6b1a2de56a017298a4430dc6ea816000633374777038cfc09aa5b07cce989ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
