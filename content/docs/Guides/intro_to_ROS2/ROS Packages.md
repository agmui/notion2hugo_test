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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5I33P7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4V1fQq3jkI3x19idiX2g2FzqX5w7hk5m54g4OFseiuAiBU5qRUwA3fO6TcefkIxG4gPQVIq7raK7UjF5GLX%2FHEjCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMiogLsiyHklx0FONrKtwDWsKYeeGjMRuXKgEWVGY%2BOad%2Ffy4gdr3LNS8lyVeX2RxPzS9a9nBTaDKCjyKwEsBqhaD41uPzOqNptqKwLY7j2Hyql6HuoWQpnYrYveJ2yJ85Owxa7BBOkDQfKiQFJMmt3NfcCzB2GmhXr8r%2Fbi3tPu45CS27p33I%2B480KcPy%2BOyMUfLN4HoJ31AqUDUkyGNuej8LO7FG2dKhHnypSybuqmLFeTDcvZvIkkrKQPk4zUxs5T06Zn8%2BgAn2emJTGKILn361qS7WrMhDq%2BMGxawR5rW16Isy%2FHL%2BqPOVsY5P0yg6L%2FWou5aPEUH9WXsUasSOs8IN2rZ36AXcfnYtwjv%2FADQkoi3pYpnjeG0Dk29ZVmaQe2GxjJ9AuDyJVbjrVnZxA05efq602OaHSznG3ktSMNkgZ7H%2B4cTgVuDp44SE2Y%2FMrL2n3Bydl62oXMfYH8NbXf1GaZ3pHNIMu6j%2FoPAY4R9sMI6jQ%2BCO%2B83mbgGanpzkPt8gi6NUiBs81W%2ByIduBlw9QLoV%2FLBQAkbqnZsqvezK5iRK%2BtWJyUnVZgWJTCxA9vfLYC3jMXmAeeLcMtL4NBuTwymwkYnLbGBOyUrj7OiBWU%2BiYV9T%2B7KJgW2poOwgACWw%2Ba6COFWBphvwwpuD%2BvwY6pgEZAJckrJ7dKY%2F1BsPsGiHoh%2FT4ynFhJXbR6dXVz%2Bm3nT9oB0fsYTu1GHxdRcur5GrEaSd4aiIAwYZfCW1kuOnLFjxyMSv2QR92ZoCn03R7z9KtV0Kg898YKab4at49RM6MevtxSekd58uctWopP7c%2F2Q%2BdoT%2BE6PAU5%2BnqpPBHIjZQrfKfzo%2BD4tfx%2BroLIRqUndtcoIbhK6tLkIGfqq67z2txRp59&X-Amz-Signature=3f3f53e6f9cddd69fc63a3ebd3c233b7e7b97605eb4a06adbddda6cae7f5b93d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5I33P7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4V1fQq3jkI3x19idiX2g2FzqX5w7hk5m54g4OFseiuAiBU5qRUwA3fO6TcefkIxG4gPQVIq7raK7UjF5GLX%2FHEjCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMiogLsiyHklx0FONrKtwDWsKYeeGjMRuXKgEWVGY%2BOad%2Ffy4gdr3LNS8lyVeX2RxPzS9a9nBTaDKCjyKwEsBqhaD41uPzOqNptqKwLY7j2Hyql6HuoWQpnYrYveJ2yJ85Owxa7BBOkDQfKiQFJMmt3NfcCzB2GmhXr8r%2Fbi3tPu45CS27p33I%2B480KcPy%2BOyMUfLN4HoJ31AqUDUkyGNuej8LO7FG2dKhHnypSybuqmLFeTDcvZvIkkrKQPk4zUxs5T06Zn8%2BgAn2emJTGKILn361qS7WrMhDq%2BMGxawR5rW16Isy%2FHL%2BqPOVsY5P0yg6L%2FWou5aPEUH9WXsUasSOs8IN2rZ36AXcfnYtwjv%2FADQkoi3pYpnjeG0Dk29ZVmaQe2GxjJ9AuDyJVbjrVnZxA05efq602OaHSznG3ktSMNkgZ7H%2B4cTgVuDp44SE2Y%2FMrL2n3Bydl62oXMfYH8NbXf1GaZ3pHNIMu6j%2FoPAY4R9sMI6jQ%2BCO%2B83mbgGanpzkPt8gi6NUiBs81W%2ByIduBlw9QLoV%2FLBQAkbqnZsqvezK5iRK%2BtWJyUnVZgWJTCxA9vfLYC3jMXmAeeLcMtL4NBuTwymwkYnLbGBOyUrj7OiBWU%2BiYV9T%2B7KJgW2poOwgACWw%2Ba6COFWBphvwwpuD%2BvwY6pgEZAJckrJ7dKY%2F1BsPsGiHoh%2FT4ynFhJXbR6dXVz%2Bm3nT9oB0fsYTu1GHxdRcur5GrEaSd4aiIAwYZfCW1kuOnLFjxyMSv2QR92ZoCn03R7z9KtV0Kg898YKab4at49RM6MevtxSekd58uctWopP7c%2F2Q%2BdoT%2BE6PAU5%2BnqpPBHIjZQrfKfzo%2BD4tfx%2BroLIRqUndtcoIbhK6tLkIGfqq67z2txRp59&X-Amz-Signature=4daf70adc785e9cb291a2af599705e8841b35276bd642e0fbe8ad486b6037c4e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5I33P7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4V1fQq3jkI3x19idiX2g2FzqX5w7hk5m54g4OFseiuAiBU5qRUwA3fO6TcefkIxG4gPQVIq7raK7UjF5GLX%2FHEjCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMiogLsiyHklx0FONrKtwDWsKYeeGjMRuXKgEWVGY%2BOad%2Ffy4gdr3LNS8lyVeX2RxPzS9a9nBTaDKCjyKwEsBqhaD41uPzOqNptqKwLY7j2Hyql6HuoWQpnYrYveJ2yJ85Owxa7BBOkDQfKiQFJMmt3NfcCzB2GmhXr8r%2Fbi3tPu45CS27p33I%2B480KcPy%2BOyMUfLN4HoJ31AqUDUkyGNuej8LO7FG2dKhHnypSybuqmLFeTDcvZvIkkrKQPk4zUxs5T06Zn8%2BgAn2emJTGKILn361qS7WrMhDq%2BMGxawR5rW16Isy%2FHL%2BqPOVsY5P0yg6L%2FWou5aPEUH9WXsUasSOs8IN2rZ36AXcfnYtwjv%2FADQkoi3pYpnjeG0Dk29ZVmaQe2GxjJ9AuDyJVbjrVnZxA05efq602OaHSznG3ktSMNkgZ7H%2B4cTgVuDp44SE2Y%2FMrL2n3Bydl62oXMfYH8NbXf1GaZ3pHNIMu6j%2FoPAY4R9sMI6jQ%2BCO%2B83mbgGanpzkPt8gi6NUiBs81W%2ByIduBlw9QLoV%2FLBQAkbqnZsqvezK5iRK%2BtWJyUnVZgWJTCxA9vfLYC3jMXmAeeLcMtL4NBuTwymwkYnLbGBOyUrj7OiBWU%2BiYV9T%2B7KJgW2poOwgACWw%2Ba6COFWBphvwwpuD%2BvwY6pgEZAJckrJ7dKY%2F1BsPsGiHoh%2FT4ynFhJXbR6dXVz%2Bm3nT9oB0fsYTu1GHxdRcur5GrEaSd4aiIAwYZfCW1kuOnLFjxyMSv2QR92ZoCn03R7z9KtV0Kg898YKab4at49RM6MevtxSekd58uctWopP7c%2F2Q%2BdoT%2BE6PAU5%2BnqpPBHIjZQrfKfzo%2BD4tfx%2BroLIRqUndtcoIbhK6tLkIGfqq67z2txRp59&X-Amz-Signature=a6425180cb92b367c56426941bce9c5cb24d9b9a9e131d23af1a1e8e0a1215aa&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5I33P7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4V1fQq3jkI3x19idiX2g2FzqX5w7hk5m54g4OFseiuAiBU5qRUwA3fO6TcefkIxG4gPQVIq7raK7UjF5GLX%2FHEjCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMiogLsiyHklx0FONrKtwDWsKYeeGjMRuXKgEWVGY%2BOad%2Ffy4gdr3LNS8lyVeX2RxPzS9a9nBTaDKCjyKwEsBqhaD41uPzOqNptqKwLY7j2Hyql6HuoWQpnYrYveJ2yJ85Owxa7BBOkDQfKiQFJMmt3NfcCzB2GmhXr8r%2Fbi3tPu45CS27p33I%2B480KcPy%2BOyMUfLN4HoJ31AqUDUkyGNuej8LO7FG2dKhHnypSybuqmLFeTDcvZvIkkrKQPk4zUxs5T06Zn8%2BgAn2emJTGKILn361qS7WrMhDq%2BMGxawR5rW16Isy%2FHL%2BqPOVsY5P0yg6L%2FWou5aPEUH9WXsUasSOs8IN2rZ36AXcfnYtwjv%2FADQkoi3pYpnjeG0Dk29ZVmaQe2GxjJ9AuDyJVbjrVnZxA05efq602OaHSznG3ktSMNkgZ7H%2B4cTgVuDp44SE2Y%2FMrL2n3Bydl62oXMfYH8NbXf1GaZ3pHNIMu6j%2FoPAY4R9sMI6jQ%2BCO%2B83mbgGanpzkPt8gi6NUiBs81W%2ByIduBlw9QLoV%2FLBQAkbqnZsqvezK5iRK%2BtWJyUnVZgWJTCxA9vfLYC3jMXmAeeLcMtL4NBuTwymwkYnLbGBOyUrj7OiBWU%2BiYV9T%2B7KJgW2poOwgACWw%2Ba6COFWBphvwwpuD%2BvwY6pgEZAJckrJ7dKY%2F1BsPsGiHoh%2FT4ynFhJXbR6dXVz%2Bm3nT9oB0fsYTu1GHxdRcur5GrEaSd4aiIAwYZfCW1kuOnLFjxyMSv2QR92ZoCn03R7z9KtV0Kg898YKab4at49RM6MevtxSekd58uctWopP7c%2F2Q%2BdoT%2BE6PAU5%2BnqpPBHIjZQrfKfzo%2BD4tfx%2BroLIRqUndtcoIbhK6tLkIGfqq67z2txRp59&X-Amz-Signature=65760faca23d1b3e7f52740d7a055ce9b24df1cfd7afc3020baf9d690e9a8278&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5I33P7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4V1fQq3jkI3x19idiX2g2FzqX5w7hk5m54g4OFseiuAiBU5qRUwA3fO6TcefkIxG4gPQVIq7raK7UjF5GLX%2FHEjCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMiogLsiyHklx0FONrKtwDWsKYeeGjMRuXKgEWVGY%2BOad%2Ffy4gdr3LNS8lyVeX2RxPzS9a9nBTaDKCjyKwEsBqhaD41uPzOqNptqKwLY7j2Hyql6HuoWQpnYrYveJ2yJ85Owxa7BBOkDQfKiQFJMmt3NfcCzB2GmhXr8r%2Fbi3tPu45CS27p33I%2B480KcPy%2BOyMUfLN4HoJ31AqUDUkyGNuej8LO7FG2dKhHnypSybuqmLFeTDcvZvIkkrKQPk4zUxs5T06Zn8%2BgAn2emJTGKILn361qS7WrMhDq%2BMGxawR5rW16Isy%2FHL%2BqPOVsY5P0yg6L%2FWou5aPEUH9WXsUasSOs8IN2rZ36AXcfnYtwjv%2FADQkoi3pYpnjeG0Dk29ZVmaQe2GxjJ9AuDyJVbjrVnZxA05efq602OaHSznG3ktSMNkgZ7H%2B4cTgVuDp44SE2Y%2FMrL2n3Bydl62oXMfYH8NbXf1GaZ3pHNIMu6j%2FoPAY4R9sMI6jQ%2BCO%2B83mbgGanpzkPt8gi6NUiBs81W%2ByIduBlw9QLoV%2FLBQAkbqnZsqvezK5iRK%2BtWJyUnVZgWJTCxA9vfLYC3jMXmAeeLcMtL4NBuTwymwkYnLbGBOyUrj7OiBWU%2BiYV9T%2B7KJgW2poOwgACWw%2Ba6COFWBphvwwpuD%2BvwY6pgEZAJckrJ7dKY%2F1BsPsGiHoh%2FT4ynFhJXbR6dXVz%2Bm3nT9oB0fsYTu1GHxdRcur5GrEaSd4aiIAwYZfCW1kuOnLFjxyMSv2QR92ZoCn03R7z9KtV0Kg898YKab4at49RM6MevtxSekd58uctWopP7c%2F2Q%2BdoT%2BE6PAU5%2BnqpPBHIjZQrfKfzo%2BD4tfx%2BroLIRqUndtcoIbhK6tLkIGfqq67z2txRp59&X-Amz-Signature=8dbdd7e44fb9bffd27cdac9bc27b7b5ad480e9e51028f48a22924b3dcc2e3f09&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5I33P7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4V1fQq3jkI3x19idiX2g2FzqX5w7hk5m54g4OFseiuAiBU5qRUwA3fO6TcefkIxG4gPQVIq7raK7UjF5GLX%2FHEjCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMiogLsiyHklx0FONrKtwDWsKYeeGjMRuXKgEWVGY%2BOad%2Ffy4gdr3LNS8lyVeX2RxPzS9a9nBTaDKCjyKwEsBqhaD41uPzOqNptqKwLY7j2Hyql6HuoWQpnYrYveJ2yJ85Owxa7BBOkDQfKiQFJMmt3NfcCzB2GmhXr8r%2Fbi3tPu45CS27p33I%2B480KcPy%2BOyMUfLN4HoJ31AqUDUkyGNuej8LO7FG2dKhHnypSybuqmLFeTDcvZvIkkrKQPk4zUxs5T06Zn8%2BgAn2emJTGKILn361qS7WrMhDq%2BMGxawR5rW16Isy%2FHL%2BqPOVsY5P0yg6L%2FWou5aPEUH9WXsUasSOs8IN2rZ36AXcfnYtwjv%2FADQkoi3pYpnjeG0Dk29ZVmaQe2GxjJ9AuDyJVbjrVnZxA05efq602OaHSznG3ktSMNkgZ7H%2B4cTgVuDp44SE2Y%2FMrL2n3Bydl62oXMfYH8NbXf1GaZ3pHNIMu6j%2FoPAY4R9sMI6jQ%2BCO%2B83mbgGanpzkPt8gi6NUiBs81W%2ByIduBlw9QLoV%2FLBQAkbqnZsqvezK5iRK%2BtWJyUnVZgWJTCxA9vfLYC3jMXmAeeLcMtL4NBuTwymwkYnLbGBOyUrj7OiBWU%2BiYV9T%2B7KJgW2poOwgACWw%2Ba6COFWBphvwwpuD%2BvwY6pgEZAJckrJ7dKY%2F1BsPsGiHoh%2FT4ynFhJXbR6dXVz%2Bm3nT9oB0fsYTu1GHxdRcur5GrEaSd4aiIAwYZfCW1kuOnLFjxyMSv2QR92ZoCn03R7z9KtV0Kg898YKab4at49RM6MevtxSekd58uctWopP7c%2F2Q%2BdoT%2BE6PAU5%2BnqpPBHIjZQrfKfzo%2BD4tfx%2BroLIRqUndtcoIbhK6tLkIGfqq67z2txRp59&X-Amz-Signature=51a64b9ab37d89e79bbaa6c0d6736d1f2c6226564ce0b5cfbf46ca7d755089de&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5I33P7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4V1fQq3jkI3x19idiX2g2FzqX5w7hk5m54g4OFseiuAiBU5qRUwA3fO6TcefkIxG4gPQVIq7raK7UjF5GLX%2FHEjCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMiogLsiyHklx0FONrKtwDWsKYeeGjMRuXKgEWVGY%2BOad%2Ffy4gdr3LNS8lyVeX2RxPzS9a9nBTaDKCjyKwEsBqhaD41uPzOqNptqKwLY7j2Hyql6HuoWQpnYrYveJ2yJ85Owxa7BBOkDQfKiQFJMmt3NfcCzB2GmhXr8r%2Fbi3tPu45CS27p33I%2B480KcPy%2BOyMUfLN4HoJ31AqUDUkyGNuej8LO7FG2dKhHnypSybuqmLFeTDcvZvIkkrKQPk4zUxs5T06Zn8%2BgAn2emJTGKILn361qS7WrMhDq%2BMGxawR5rW16Isy%2FHL%2BqPOVsY5P0yg6L%2FWou5aPEUH9WXsUasSOs8IN2rZ36AXcfnYtwjv%2FADQkoi3pYpnjeG0Dk29ZVmaQe2GxjJ9AuDyJVbjrVnZxA05efq602OaHSznG3ktSMNkgZ7H%2B4cTgVuDp44SE2Y%2FMrL2n3Bydl62oXMfYH8NbXf1GaZ3pHNIMu6j%2FoPAY4R9sMI6jQ%2BCO%2B83mbgGanpzkPt8gi6NUiBs81W%2ByIduBlw9QLoV%2FLBQAkbqnZsqvezK5iRK%2BtWJyUnVZgWJTCxA9vfLYC3jMXmAeeLcMtL4NBuTwymwkYnLbGBOyUrj7OiBWU%2BiYV9T%2B7KJgW2poOwgACWw%2Ba6COFWBphvwwpuD%2BvwY6pgEZAJckrJ7dKY%2F1BsPsGiHoh%2FT4ynFhJXbR6dXVz%2Bm3nT9oB0fsYTu1GHxdRcur5GrEaSd4aiIAwYZfCW1kuOnLFjxyMSv2QR92ZoCn03R7z9KtV0Kg898YKab4at49RM6MevtxSekd58uctWopP7c%2F2Q%2BdoT%2BE6PAU5%2BnqpPBHIjZQrfKfzo%2BD4tfx%2BroLIRqUndtcoIbhK6tLkIGfqq67z2txRp59&X-Amz-Signature=d4ccac1be4b6a85cb52e260dfd76c1b9daceab157d67b336920f27fce0aa7af3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
