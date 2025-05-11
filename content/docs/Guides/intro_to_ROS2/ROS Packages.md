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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NQUSDRS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBWu1wgT8NUNOQVBHhYbcu5CDr0IVUUuaKBYr%2BiCCeoKAiBo35186NRVWYWdi5hhqIZJ2xVUpOUjlBHwAcYbjJ68SyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9wM%2Fy2zh%2B%2Fxy8r%2BKtwDerVsR%2BzO%2F%2Bbsk7qKSrRtg9qqDHubpjhK69XYEG0LqmNXHAzNcwVgDsZx1CDw%2FxUlZX4xNuLYBZYQBCZrMgYUtSVtsNGajzLsbhFReWI12Zwqc4u%2BSlQQ9kFJMP84dXAGKCScunuSp3JIDWifbbUVO0zuzHQtp2tiMc%2BE9YhjPvG24xeyrymSQJAWGFm9pmDDEpnwGm7wu9uEpdXzPCDuVjISHhelxgy4481QNsTvC17uqTZfD2xzxLtDK2hmXU4ZrCQUjpzaKhzvZwOJp79Y0LdWj2JHS2CZAkkrNmWk29PcdEyqSInC6EZR%2BdIdUFf2NwlMYQ8IyBpiygbpA4VfcS6Eu9UfkT9wevFdrUwbRPEaLkEDk7e47LhuWBKQmSkqEwdG4S68OhBNm1l5pAKrU6gJ5dhAdpM8R0ouQsCThLu6CVEjte%2BLvi8SWAeeV0CZamBPmydnQjs5XHZZ8MTCtuNrgpBbmfKdo%2FVF3AvvikHdjqq0ZpA%2FRWMv2OL7od5Gb1HtLyiuzlb4MltzKaW7WbDBzuHZ%2FzeXSpWCyf8GqM3ZcjgWTva85StiYa54N%2BsJQaF%2Fl9bCABjrFljk6tDnAG3GM9fKEghqKjMbkeCNnU2MuMdloQJJiBgRfGUw0LuEwQY6pgGCImXaYEbaGUH%2B7a2URpXY8xXWsC8Ns0uSnoDb60hrDuUkMgZneBQtOsrvV8ZNDANIQIEundAsSW6561v%2BKxlWEjFJT1b%2BXgY4pfZ%2FFmerMjBv3nhG3lqtRvZNeSApARNpiWILOoYOQlrhqn7QFaRNRb5pnf9pOyTt4jooyC5n%2B6p1Y9vdeIQXeu35aoh3qfAf9d0zjPlUeoS8k59lCqAES9F5TxpC&X-Amz-Signature=a126c012c4623436ffc6256f8621f53c24b218a7b0762160f35711c3d580475a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NQUSDRS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBWu1wgT8NUNOQVBHhYbcu5CDr0IVUUuaKBYr%2BiCCeoKAiBo35186NRVWYWdi5hhqIZJ2xVUpOUjlBHwAcYbjJ68SyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9wM%2Fy2zh%2B%2Fxy8r%2BKtwDerVsR%2BzO%2F%2Bbsk7qKSrRtg9qqDHubpjhK69XYEG0LqmNXHAzNcwVgDsZx1CDw%2FxUlZX4xNuLYBZYQBCZrMgYUtSVtsNGajzLsbhFReWI12Zwqc4u%2BSlQQ9kFJMP84dXAGKCScunuSp3JIDWifbbUVO0zuzHQtp2tiMc%2BE9YhjPvG24xeyrymSQJAWGFm9pmDDEpnwGm7wu9uEpdXzPCDuVjISHhelxgy4481QNsTvC17uqTZfD2xzxLtDK2hmXU4ZrCQUjpzaKhzvZwOJp79Y0LdWj2JHS2CZAkkrNmWk29PcdEyqSInC6EZR%2BdIdUFf2NwlMYQ8IyBpiygbpA4VfcS6Eu9UfkT9wevFdrUwbRPEaLkEDk7e47LhuWBKQmSkqEwdG4S68OhBNm1l5pAKrU6gJ5dhAdpM8R0ouQsCThLu6CVEjte%2BLvi8SWAeeV0CZamBPmydnQjs5XHZZ8MTCtuNrgpBbmfKdo%2FVF3AvvikHdjqq0ZpA%2FRWMv2OL7od5Gb1HtLyiuzlb4MltzKaW7WbDBzuHZ%2FzeXSpWCyf8GqM3ZcjgWTva85StiYa54N%2BsJQaF%2Fl9bCABjrFljk6tDnAG3GM9fKEghqKjMbkeCNnU2MuMdloQJJiBgRfGUw0LuEwQY6pgGCImXaYEbaGUH%2B7a2URpXY8xXWsC8Ns0uSnoDb60hrDuUkMgZneBQtOsrvV8ZNDANIQIEundAsSW6561v%2BKxlWEjFJT1b%2BXgY4pfZ%2FFmerMjBv3nhG3lqtRvZNeSApARNpiWILOoYOQlrhqn7QFaRNRb5pnf9pOyTt4jooyC5n%2B6p1Y9vdeIQXeu35aoh3qfAf9d0zjPlUeoS8k59lCqAES9F5TxpC&X-Amz-Signature=4d699c00f1201ad4784ab7459390eaec5a18c9874551fbf2b9d8ebdd21b899ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NQUSDRS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBWu1wgT8NUNOQVBHhYbcu5CDr0IVUUuaKBYr%2BiCCeoKAiBo35186NRVWYWdi5hhqIZJ2xVUpOUjlBHwAcYbjJ68SyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9wM%2Fy2zh%2B%2Fxy8r%2BKtwDerVsR%2BzO%2F%2Bbsk7qKSrRtg9qqDHubpjhK69XYEG0LqmNXHAzNcwVgDsZx1CDw%2FxUlZX4xNuLYBZYQBCZrMgYUtSVtsNGajzLsbhFReWI12Zwqc4u%2BSlQQ9kFJMP84dXAGKCScunuSp3JIDWifbbUVO0zuzHQtp2tiMc%2BE9YhjPvG24xeyrymSQJAWGFm9pmDDEpnwGm7wu9uEpdXzPCDuVjISHhelxgy4481QNsTvC17uqTZfD2xzxLtDK2hmXU4ZrCQUjpzaKhzvZwOJp79Y0LdWj2JHS2CZAkkrNmWk29PcdEyqSInC6EZR%2BdIdUFf2NwlMYQ8IyBpiygbpA4VfcS6Eu9UfkT9wevFdrUwbRPEaLkEDk7e47LhuWBKQmSkqEwdG4S68OhBNm1l5pAKrU6gJ5dhAdpM8R0ouQsCThLu6CVEjte%2BLvi8SWAeeV0CZamBPmydnQjs5XHZZ8MTCtuNrgpBbmfKdo%2FVF3AvvikHdjqq0ZpA%2FRWMv2OL7od5Gb1HtLyiuzlb4MltzKaW7WbDBzuHZ%2FzeXSpWCyf8GqM3ZcjgWTva85StiYa54N%2BsJQaF%2Fl9bCABjrFljk6tDnAG3GM9fKEghqKjMbkeCNnU2MuMdloQJJiBgRfGUw0LuEwQY6pgGCImXaYEbaGUH%2B7a2URpXY8xXWsC8Ns0uSnoDb60hrDuUkMgZneBQtOsrvV8ZNDANIQIEundAsSW6561v%2BKxlWEjFJT1b%2BXgY4pfZ%2FFmerMjBv3nhG3lqtRvZNeSApARNpiWILOoYOQlrhqn7QFaRNRb5pnf9pOyTt4jooyC5n%2B6p1Y9vdeIQXeu35aoh3qfAf9d0zjPlUeoS8k59lCqAES9F5TxpC&X-Amz-Signature=31681865d1886e7418aa3375b4344f09736e3da6d838ef4b2ff4fe0bc3a18c72&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NQUSDRS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBWu1wgT8NUNOQVBHhYbcu5CDr0IVUUuaKBYr%2BiCCeoKAiBo35186NRVWYWdi5hhqIZJ2xVUpOUjlBHwAcYbjJ68SyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9wM%2Fy2zh%2B%2Fxy8r%2BKtwDerVsR%2BzO%2F%2Bbsk7qKSrRtg9qqDHubpjhK69XYEG0LqmNXHAzNcwVgDsZx1CDw%2FxUlZX4xNuLYBZYQBCZrMgYUtSVtsNGajzLsbhFReWI12Zwqc4u%2BSlQQ9kFJMP84dXAGKCScunuSp3JIDWifbbUVO0zuzHQtp2tiMc%2BE9YhjPvG24xeyrymSQJAWGFm9pmDDEpnwGm7wu9uEpdXzPCDuVjISHhelxgy4481QNsTvC17uqTZfD2xzxLtDK2hmXU4ZrCQUjpzaKhzvZwOJp79Y0LdWj2JHS2CZAkkrNmWk29PcdEyqSInC6EZR%2BdIdUFf2NwlMYQ8IyBpiygbpA4VfcS6Eu9UfkT9wevFdrUwbRPEaLkEDk7e47LhuWBKQmSkqEwdG4S68OhBNm1l5pAKrU6gJ5dhAdpM8R0ouQsCThLu6CVEjte%2BLvi8SWAeeV0CZamBPmydnQjs5XHZZ8MTCtuNrgpBbmfKdo%2FVF3AvvikHdjqq0ZpA%2FRWMv2OL7od5Gb1HtLyiuzlb4MltzKaW7WbDBzuHZ%2FzeXSpWCyf8GqM3ZcjgWTva85StiYa54N%2BsJQaF%2Fl9bCABjrFljk6tDnAG3GM9fKEghqKjMbkeCNnU2MuMdloQJJiBgRfGUw0LuEwQY6pgGCImXaYEbaGUH%2B7a2URpXY8xXWsC8Ns0uSnoDb60hrDuUkMgZneBQtOsrvV8ZNDANIQIEundAsSW6561v%2BKxlWEjFJT1b%2BXgY4pfZ%2FFmerMjBv3nhG3lqtRvZNeSApARNpiWILOoYOQlrhqn7QFaRNRb5pnf9pOyTt4jooyC5n%2B6p1Y9vdeIQXeu35aoh3qfAf9d0zjPlUeoS8k59lCqAES9F5TxpC&X-Amz-Signature=73b9f5d822340d57190e3bf68e6d88e721b613a5f02149c84751c0b9fd6feade&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NQUSDRS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBWu1wgT8NUNOQVBHhYbcu5CDr0IVUUuaKBYr%2BiCCeoKAiBo35186NRVWYWdi5hhqIZJ2xVUpOUjlBHwAcYbjJ68SyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9wM%2Fy2zh%2B%2Fxy8r%2BKtwDerVsR%2BzO%2F%2Bbsk7qKSrRtg9qqDHubpjhK69XYEG0LqmNXHAzNcwVgDsZx1CDw%2FxUlZX4xNuLYBZYQBCZrMgYUtSVtsNGajzLsbhFReWI12Zwqc4u%2BSlQQ9kFJMP84dXAGKCScunuSp3JIDWifbbUVO0zuzHQtp2tiMc%2BE9YhjPvG24xeyrymSQJAWGFm9pmDDEpnwGm7wu9uEpdXzPCDuVjISHhelxgy4481QNsTvC17uqTZfD2xzxLtDK2hmXU4ZrCQUjpzaKhzvZwOJp79Y0LdWj2JHS2CZAkkrNmWk29PcdEyqSInC6EZR%2BdIdUFf2NwlMYQ8IyBpiygbpA4VfcS6Eu9UfkT9wevFdrUwbRPEaLkEDk7e47LhuWBKQmSkqEwdG4S68OhBNm1l5pAKrU6gJ5dhAdpM8R0ouQsCThLu6CVEjte%2BLvi8SWAeeV0CZamBPmydnQjs5XHZZ8MTCtuNrgpBbmfKdo%2FVF3AvvikHdjqq0ZpA%2FRWMv2OL7od5Gb1HtLyiuzlb4MltzKaW7WbDBzuHZ%2FzeXSpWCyf8GqM3ZcjgWTva85StiYa54N%2BsJQaF%2Fl9bCABjrFljk6tDnAG3GM9fKEghqKjMbkeCNnU2MuMdloQJJiBgRfGUw0LuEwQY6pgGCImXaYEbaGUH%2B7a2URpXY8xXWsC8Ns0uSnoDb60hrDuUkMgZneBQtOsrvV8ZNDANIQIEundAsSW6561v%2BKxlWEjFJT1b%2BXgY4pfZ%2FFmerMjBv3nhG3lqtRvZNeSApARNpiWILOoYOQlrhqn7QFaRNRb5pnf9pOyTt4jooyC5n%2B6p1Y9vdeIQXeu35aoh3qfAf9d0zjPlUeoS8k59lCqAES9F5TxpC&X-Amz-Signature=28c0e916ad1ff9f7a0fcff5c5ea3b933711f10e854965e800ee2763d7f90c2ef&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NQUSDRS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBWu1wgT8NUNOQVBHhYbcu5CDr0IVUUuaKBYr%2BiCCeoKAiBo35186NRVWYWdi5hhqIZJ2xVUpOUjlBHwAcYbjJ68SyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9wM%2Fy2zh%2B%2Fxy8r%2BKtwDerVsR%2BzO%2F%2Bbsk7qKSrRtg9qqDHubpjhK69XYEG0LqmNXHAzNcwVgDsZx1CDw%2FxUlZX4xNuLYBZYQBCZrMgYUtSVtsNGajzLsbhFReWI12Zwqc4u%2BSlQQ9kFJMP84dXAGKCScunuSp3JIDWifbbUVO0zuzHQtp2tiMc%2BE9YhjPvG24xeyrymSQJAWGFm9pmDDEpnwGm7wu9uEpdXzPCDuVjISHhelxgy4481QNsTvC17uqTZfD2xzxLtDK2hmXU4ZrCQUjpzaKhzvZwOJp79Y0LdWj2JHS2CZAkkrNmWk29PcdEyqSInC6EZR%2BdIdUFf2NwlMYQ8IyBpiygbpA4VfcS6Eu9UfkT9wevFdrUwbRPEaLkEDk7e47LhuWBKQmSkqEwdG4S68OhBNm1l5pAKrU6gJ5dhAdpM8R0ouQsCThLu6CVEjte%2BLvi8SWAeeV0CZamBPmydnQjs5XHZZ8MTCtuNrgpBbmfKdo%2FVF3AvvikHdjqq0ZpA%2FRWMv2OL7od5Gb1HtLyiuzlb4MltzKaW7WbDBzuHZ%2FzeXSpWCyf8GqM3ZcjgWTva85StiYa54N%2BsJQaF%2Fl9bCABjrFljk6tDnAG3GM9fKEghqKjMbkeCNnU2MuMdloQJJiBgRfGUw0LuEwQY6pgGCImXaYEbaGUH%2B7a2URpXY8xXWsC8Ns0uSnoDb60hrDuUkMgZneBQtOsrvV8ZNDANIQIEundAsSW6561v%2BKxlWEjFJT1b%2BXgY4pfZ%2FFmerMjBv3nhG3lqtRvZNeSApARNpiWILOoYOQlrhqn7QFaRNRb5pnf9pOyTt4jooyC5n%2B6p1Y9vdeIQXeu35aoh3qfAf9d0zjPlUeoS8k59lCqAES9F5TxpC&X-Amz-Signature=7c1233148d70031f32b65992233cb93b4677c2ee0346dd5de1b2a48c83592539&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NQUSDRS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBWu1wgT8NUNOQVBHhYbcu5CDr0IVUUuaKBYr%2BiCCeoKAiBo35186NRVWYWdi5hhqIZJ2xVUpOUjlBHwAcYbjJ68SyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9wM%2Fy2zh%2B%2Fxy8r%2BKtwDerVsR%2BzO%2F%2Bbsk7qKSrRtg9qqDHubpjhK69XYEG0LqmNXHAzNcwVgDsZx1CDw%2FxUlZX4xNuLYBZYQBCZrMgYUtSVtsNGajzLsbhFReWI12Zwqc4u%2BSlQQ9kFJMP84dXAGKCScunuSp3JIDWifbbUVO0zuzHQtp2tiMc%2BE9YhjPvG24xeyrymSQJAWGFm9pmDDEpnwGm7wu9uEpdXzPCDuVjISHhelxgy4481QNsTvC17uqTZfD2xzxLtDK2hmXU4ZrCQUjpzaKhzvZwOJp79Y0LdWj2JHS2CZAkkrNmWk29PcdEyqSInC6EZR%2BdIdUFf2NwlMYQ8IyBpiygbpA4VfcS6Eu9UfkT9wevFdrUwbRPEaLkEDk7e47LhuWBKQmSkqEwdG4S68OhBNm1l5pAKrU6gJ5dhAdpM8R0ouQsCThLu6CVEjte%2BLvi8SWAeeV0CZamBPmydnQjs5XHZZ8MTCtuNrgpBbmfKdo%2FVF3AvvikHdjqq0ZpA%2FRWMv2OL7od5Gb1HtLyiuzlb4MltzKaW7WbDBzuHZ%2FzeXSpWCyf8GqM3ZcjgWTva85StiYa54N%2BsJQaF%2Fl9bCABjrFljk6tDnAG3GM9fKEghqKjMbkeCNnU2MuMdloQJJiBgRfGUw0LuEwQY6pgGCImXaYEbaGUH%2B7a2URpXY8xXWsC8Ns0uSnoDb60hrDuUkMgZneBQtOsrvV8ZNDANIQIEundAsSW6561v%2BKxlWEjFJT1b%2BXgY4pfZ%2FFmerMjBv3nhG3lqtRvZNeSApARNpiWILOoYOQlrhqn7QFaRNRb5pnf9pOyTt4jooyC5n%2B6p1Y9vdeIQXeu35aoh3qfAf9d0zjPlUeoS8k59lCqAES9F5TxpC&X-Amz-Signature=378656bdee909a48260828b80e490b58e0d6d455a29e7dba885e3e75d2a55f59&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
