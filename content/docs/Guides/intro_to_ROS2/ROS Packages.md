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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJXHKKH%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhB1AQPjaDLc7lcD80KKLY5l1ZzNbtCHW05gP6J0yYhAiEAu6mmK%2FAdBXQ7CPuINljSncZ9z2mGSYTs%2BPzwDY6UyUkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4sSiF6KCQ70Bx1JCrcA%2Fxi%2FDaz3VaThv6Po6jQoANYnxMwrZAx%2BAGyTo0uDkxHJhNiq%2F6UuZUeYH3CwUd9ZRetix0ICgCV2xfm9f%2FExJwhwWBvSV93hR%2FFwByWoJCNA0A1JaZessr%2FesyhIVFQcIhysMjhivmHwNJ5o9KpJZCwJdPYvfpgQUsGL3WrIYDVQWMPNQxJ9s3R43dze4lU2taxriXxREPrU4%2B8QXO7acH%2BMVHLOjTwfo8YKuX4SHmxv5znUdP5AF7wTUaW8OaiiUWtvDUuvH4UjSzhFnq%2FxMZRQfVu7bCk1q3seu3kfyneJmemqWniy%2FktxHD09U2hazfTohbQsszoNfMEs7vRw0MpPtP4%2F4rBMNsM2qTznfq63MQ9pM5U8z9Vquy0LDS7rYNks0nPwJYclLmVuSSIDH%2F%2FcZnUv6i1FYX5Jz%2BfrfziUNu%2F6r4YGjA7SXndROtj6UXdKJqkJ4S7Qedo5n0oOuOEyXhrbEktyiQ1zK3AmPKm0B2uCbAen7QQwXZM57iFWxReJhXOwXNA8gRw5wphhX%2F0T6UFBq2WZJjGmHoStifyR%2BP%2FxnJ4dconqf4GfkZPAg2HaV8MCTIKj%2BQ7Wk2r0TFr%2BwSijDTipjJmiqz%2FfLVmhVL6RdK5f%2FYRIBo0MJCl6b0GOqUB1iyq2DjWZiWBEJ978qhDFvtzJBaXBco2mswKDe%2FGDmwDyoVyq%2BFg%2FG4MZmcABciQKPyK%2B%2BRUqH%2FjvPF3h%2FMSIFvXyM8YUKOBx4TYo3HUWr2xJAv5NjKrET0KeimGihLUwu%2B0DR3RsnSjb9P1qIR9hXFswNoDLj62JwqO7IZlWNZ1zGhoq1Uy64j0Ga5PVjzXEr0RuwnTJj%2FY1tayJpvIn8O%2BqqNi&X-Amz-Signature=80339c410f7382029d77a7289e67f1eb4f17422b5fc974ad43ee10c51814a918&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJXHKKH%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhB1AQPjaDLc7lcD80KKLY5l1ZzNbtCHW05gP6J0yYhAiEAu6mmK%2FAdBXQ7CPuINljSncZ9z2mGSYTs%2BPzwDY6UyUkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4sSiF6KCQ70Bx1JCrcA%2Fxi%2FDaz3VaThv6Po6jQoANYnxMwrZAx%2BAGyTo0uDkxHJhNiq%2F6UuZUeYH3CwUd9ZRetix0ICgCV2xfm9f%2FExJwhwWBvSV93hR%2FFwByWoJCNA0A1JaZessr%2FesyhIVFQcIhysMjhivmHwNJ5o9KpJZCwJdPYvfpgQUsGL3WrIYDVQWMPNQxJ9s3R43dze4lU2taxriXxREPrU4%2B8QXO7acH%2BMVHLOjTwfo8YKuX4SHmxv5znUdP5AF7wTUaW8OaiiUWtvDUuvH4UjSzhFnq%2FxMZRQfVu7bCk1q3seu3kfyneJmemqWniy%2FktxHD09U2hazfTohbQsszoNfMEs7vRw0MpPtP4%2F4rBMNsM2qTznfq63MQ9pM5U8z9Vquy0LDS7rYNks0nPwJYclLmVuSSIDH%2F%2FcZnUv6i1FYX5Jz%2BfrfziUNu%2F6r4YGjA7SXndROtj6UXdKJqkJ4S7Qedo5n0oOuOEyXhrbEktyiQ1zK3AmPKm0B2uCbAen7QQwXZM57iFWxReJhXOwXNA8gRw5wphhX%2F0T6UFBq2WZJjGmHoStifyR%2BP%2FxnJ4dconqf4GfkZPAg2HaV8MCTIKj%2BQ7Wk2r0TFr%2BwSijDTipjJmiqz%2FfLVmhVL6RdK5f%2FYRIBo0MJCl6b0GOqUB1iyq2DjWZiWBEJ978qhDFvtzJBaXBco2mswKDe%2FGDmwDyoVyq%2BFg%2FG4MZmcABciQKPyK%2B%2BRUqH%2FjvPF3h%2FMSIFvXyM8YUKOBx4TYo3HUWr2xJAv5NjKrET0KeimGihLUwu%2B0DR3RsnSjb9P1qIR9hXFswNoDLj62JwqO7IZlWNZ1zGhoq1Uy64j0Ga5PVjzXEr0RuwnTJj%2FY1tayJpvIn8O%2BqqNi&X-Amz-Signature=c8fbd2c05308df83af87cd3f6fe4fbbc02150c8ef04b8a10571cdd5502afeac1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJXHKKH%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhB1AQPjaDLc7lcD80KKLY5l1ZzNbtCHW05gP6J0yYhAiEAu6mmK%2FAdBXQ7CPuINljSncZ9z2mGSYTs%2BPzwDY6UyUkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4sSiF6KCQ70Bx1JCrcA%2Fxi%2FDaz3VaThv6Po6jQoANYnxMwrZAx%2BAGyTo0uDkxHJhNiq%2F6UuZUeYH3CwUd9ZRetix0ICgCV2xfm9f%2FExJwhwWBvSV93hR%2FFwByWoJCNA0A1JaZessr%2FesyhIVFQcIhysMjhivmHwNJ5o9KpJZCwJdPYvfpgQUsGL3WrIYDVQWMPNQxJ9s3R43dze4lU2taxriXxREPrU4%2B8QXO7acH%2BMVHLOjTwfo8YKuX4SHmxv5znUdP5AF7wTUaW8OaiiUWtvDUuvH4UjSzhFnq%2FxMZRQfVu7bCk1q3seu3kfyneJmemqWniy%2FktxHD09U2hazfTohbQsszoNfMEs7vRw0MpPtP4%2F4rBMNsM2qTznfq63MQ9pM5U8z9Vquy0LDS7rYNks0nPwJYclLmVuSSIDH%2F%2FcZnUv6i1FYX5Jz%2BfrfziUNu%2F6r4YGjA7SXndROtj6UXdKJqkJ4S7Qedo5n0oOuOEyXhrbEktyiQ1zK3AmPKm0B2uCbAen7QQwXZM57iFWxReJhXOwXNA8gRw5wphhX%2F0T6UFBq2WZJjGmHoStifyR%2BP%2FxnJ4dconqf4GfkZPAg2HaV8MCTIKj%2BQ7Wk2r0TFr%2BwSijDTipjJmiqz%2FfLVmhVL6RdK5f%2FYRIBo0MJCl6b0GOqUB1iyq2DjWZiWBEJ978qhDFvtzJBaXBco2mswKDe%2FGDmwDyoVyq%2BFg%2FG4MZmcABciQKPyK%2B%2BRUqH%2FjvPF3h%2FMSIFvXyM8YUKOBx4TYo3HUWr2xJAv5NjKrET0KeimGihLUwu%2B0DR3RsnSjb9P1qIR9hXFswNoDLj62JwqO7IZlWNZ1zGhoq1Uy64j0Ga5PVjzXEr0RuwnTJj%2FY1tayJpvIn8O%2BqqNi&X-Amz-Signature=2cf0c5b97064589727eef1282a363cc7149dde47a9522d9b99adddc2e65fdd17&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJXHKKH%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhB1AQPjaDLc7lcD80KKLY5l1ZzNbtCHW05gP6J0yYhAiEAu6mmK%2FAdBXQ7CPuINljSncZ9z2mGSYTs%2BPzwDY6UyUkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4sSiF6KCQ70Bx1JCrcA%2Fxi%2FDaz3VaThv6Po6jQoANYnxMwrZAx%2BAGyTo0uDkxHJhNiq%2F6UuZUeYH3CwUd9ZRetix0ICgCV2xfm9f%2FExJwhwWBvSV93hR%2FFwByWoJCNA0A1JaZessr%2FesyhIVFQcIhysMjhivmHwNJ5o9KpJZCwJdPYvfpgQUsGL3WrIYDVQWMPNQxJ9s3R43dze4lU2taxriXxREPrU4%2B8QXO7acH%2BMVHLOjTwfo8YKuX4SHmxv5znUdP5AF7wTUaW8OaiiUWtvDUuvH4UjSzhFnq%2FxMZRQfVu7bCk1q3seu3kfyneJmemqWniy%2FktxHD09U2hazfTohbQsszoNfMEs7vRw0MpPtP4%2F4rBMNsM2qTznfq63MQ9pM5U8z9Vquy0LDS7rYNks0nPwJYclLmVuSSIDH%2F%2FcZnUv6i1FYX5Jz%2BfrfziUNu%2F6r4YGjA7SXndROtj6UXdKJqkJ4S7Qedo5n0oOuOEyXhrbEktyiQ1zK3AmPKm0B2uCbAen7QQwXZM57iFWxReJhXOwXNA8gRw5wphhX%2F0T6UFBq2WZJjGmHoStifyR%2BP%2FxnJ4dconqf4GfkZPAg2HaV8MCTIKj%2BQ7Wk2r0TFr%2BwSijDTipjJmiqz%2FfLVmhVL6RdK5f%2FYRIBo0MJCl6b0GOqUB1iyq2DjWZiWBEJ978qhDFvtzJBaXBco2mswKDe%2FGDmwDyoVyq%2BFg%2FG4MZmcABciQKPyK%2B%2BRUqH%2FjvPF3h%2FMSIFvXyM8YUKOBx4TYo3HUWr2xJAv5NjKrET0KeimGihLUwu%2B0DR3RsnSjb9P1qIR9hXFswNoDLj62JwqO7IZlWNZ1zGhoq1Uy64j0Ga5PVjzXEr0RuwnTJj%2FY1tayJpvIn8O%2BqqNi&X-Amz-Signature=67775f2c0f25c0a927e56de73c792ebe133b0485ea0fdeac9306fb9c7ca0b5ea&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJXHKKH%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhB1AQPjaDLc7lcD80KKLY5l1ZzNbtCHW05gP6J0yYhAiEAu6mmK%2FAdBXQ7CPuINljSncZ9z2mGSYTs%2BPzwDY6UyUkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4sSiF6KCQ70Bx1JCrcA%2Fxi%2FDaz3VaThv6Po6jQoANYnxMwrZAx%2BAGyTo0uDkxHJhNiq%2F6UuZUeYH3CwUd9ZRetix0ICgCV2xfm9f%2FExJwhwWBvSV93hR%2FFwByWoJCNA0A1JaZessr%2FesyhIVFQcIhysMjhivmHwNJ5o9KpJZCwJdPYvfpgQUsGL3WrIYDVQWMPNQxJ9s3R43dze4lU2taxriXxREPrU4%2B8QXO7acH%2BMVHLOjTwfo8YKuX4SHmxv5znUdP5AF7wTUaW8OaiiUWtvDUuvH4UjSzhFnq%2FxMZRQfVu7bCk1q3seu3kfyneJmemqWniy%2FktxHD09U2hazfTohbQsszoNfMEs7vRw0MpPtP4%2F4rBMNsM2qTznfq63MQ9pM5U8z9Vquy0LDS7rYNks0nPwJYclLmVuSSIDH%2F%2FcZnUv6i1FYX5Jz%2BfrfziUNu%2F6r4YGjA7SXndROtj6UXdKJqkJ4S7Qedo5n0oOuOEyXhrbEktyiQ1zK3AmPKm0B2uCbAen7QQwXZM57iFWxReJhXOwXNA8gRw5wphhX%2F0T6UFBq2WZJjGmHoStifyR%2BP%2FxnJ4dconqf4GfkZPAg2HaV8MCTIKj%2BQ7Wk2r0TFr%2BwSijDTipjJmiqz%2FfLVmhVL6RdK5f%2FYRIBo0MJCl6b0GOqUB1iyq2DjWZiWBEJ978qhDFvtzJBaXBco2mswKDe%2FGDmwDyoVyq%2BFg%2FG4MZmcABciQKPyK%2B%2BRUqH%2FjvPF3h%2FMSIFvXyM8YUKOBx4TYo3HUWr2xJAv5NjKrET0KeimGihLUwu%2B0DR3RsnSjb9P1qIR9hXFswNoDLj62JwqO7IZlWNZ1zGhoq1Uy64j0Ga5PVjzXEr0RuwnTJj%2FY1tayJpvIn8O%2BqqNi&X-Amz-Signature=059f2864897a70e1a55c58746ec0de198bd95709efc8f458aa8be7ceb1881804&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJXHKKH%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhB1AQPjaDLc7lcD80KKLY5l1ZzNbtCHW05gP6J0yYhAiEAu6mmK%2FAdBXQ7CPuINljSncZ9z2mGSYTs%2BPzwDY6UyUkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4sSiF6KCQ70Bx1JCrcA%2Fxi%2FDaz3VaThv6Po6jQoANYnxMwrZAx%2BAGyTo0uDkxHJhNiq%2F6UuZUeYH3CwUd9ZRetix0ICgCV2xfm9f%2FExJwhwWBvSV93hR%2FFwByWoJCNA0A1JaZessr%2FesyhIVFQcIhysMjhivmHwNJ5o9KpJZCwJdPYvfpgQUsGL3WrIYDVQWMPNQxJ9s3R43dze4lU2taxriXxREPrU4%2B8QXO7acH%2BMVHLOjTwfo8YKuX4SHmxv5znUdP5AF7wTUaW8OaiiUWtvDUuvH4UjSzhFnq%2FxMZRQfVu7bCk1q3seu3kfyneJmemqWniy%2FktxHD09U2hazfTohbQsszoNfMEs7vRw0MpPtP4%2F4rBMNsM2qTznfq63MQ9pM5U8z9Vquy0LDS7rYNks0nPwJYclLmVuSSIDH%2F%2FcZnUv6i1FYX5Jz%2BfrfziUNu%2F6r4YGjA7SXndROtj6UXdKJqkJ4S7Qedo5n0oOuOEyXhrbEktyiQ1zK3AmPKm0B2uCbAen7QQwXZM57iFWxReJhXOwXNA8gRw5wphhX%2F0T6UFBq2WZJjGmHoStifyR%2BP%2FxnJ4dconqf4GfkZPAg2HaV8MCTIKj%2BQ7Wk2r0TFr%2BwSijDTipjJmiqz%2FfLVmhVL6RdK5f%2FYRIBo0MJCl6b0GOqUB1iyq2DjWZiWBEJ978qhDFvtzJBaXBco2mswKDe%2FGDmwDyoVyq%2BFg%2FG4MZmcABciQKPyK%2B%2BRUqH%2FjvPF3h%2FMSIFvXyM8YUKOBx4TYo3HUWr2xJAv5NjKrET0KeimGihLUwu%2B0DR3RsnSjb9P1qIR9hXFswNoDLj62JwqO7IZlWNZ1zGhoq1Uy64j0Ga5PVjzXEr0RuwnTJj%2FY1tayJpvIn8O%2BqqNi&X-Amz-Signature=eabdfbd6a609c8d2d33016c7822ccf72638b947aaabf1ec279909c9a0a71b4d2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJXHKKH%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhB1AQPjaDLc7lcD80KKLY5l1ZzNbtCHW05gP6J0yYhAiEAu6mmK%2FAdBXQ7CPuINljSncZ9z2mGSYTs%2BPzwDY6UyUkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4sSiF6KCQ70Bx1JCrcA%2Fxi%2FDaz3VaThv6Po6jQoANYnxMwrZAx%2BAGyTo0uDkxHJhNiq%2F6UuZUeYH3CwUd9ZRetix0ICgCV2xfm9f%2FExJwhwWBvSV93hR%2FFwByWoJCNA0A1JaZessr%2FesyhIVFQcIhysMjhivmHwNJ5o9KpJZCwJdPYvfpgQUsGL3WrIYDVQWMPNQxJ9s3R43dze4lU2taxriXxREPrU4%2B8QXO7acH%2BMVHLOjTwfo8YKuX4SHmxv5znUdP5AF7wTUaW8OaiiUWtvDUuvH4UjSzhFnq%2FxMZRQfVu7bCk1q3seu3kfyneJmemqWniy%2FktxHD09U2hazfTohbQsszoNfMEs7vRw0MpPtP4%2F4rBMNsM2qTznfq63MQ9pM5U8z9Vquy0LDS7rYNks0nPwJYclLmVuSSIDH%2F%2FcZnUv6i1FYX5Jz%2BfrfziUNu%2F6r4YGjA7SXndROtj6UXdKJqkJ4S7Qedo5n0oOuOEyXhrbEktyiQ1zK3AmPKm0B2uCbAen7QQwXZM57iFWxReJhXOwXNA8gRw5wphhX%2F0T6UFBq2WZJjGmHoStifyR%2BP%2FxnJ4dconqf4GfkZPAg2HaV8MCTIKj%2BQ7Wk2r0TFr%2BwSijDTipjJmiqz%2FfLVmhVL6RdK5f%2FYRIBo0MJCl6b0GOqUB1iyq2DjWZiWBEJ978qhDFvtzJBaXBco2mswKDe%2FGDmwDyoVyq%2BFg%2FG4MZmcABciQKPyK%2B%2BRUqH%2FjvPF3h%2FMSIFvXyM8YUKOBx4TYo3HUWr2xJAv5NjKrET0KeimGihLUwu%2B0DR3RsnSjb9P1qIR9hXFswNoDLj62JwqO7IZlWNZ1zGhoq1Uy64j0Ga5PVjzXEr0RuwnTJj%2FY1tayJpvIn8O%2BqqNi&X-Amz-Signature=87599115731f3ee48099523875c9d0dd2cb423977633880946377f3cde6a30c8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
