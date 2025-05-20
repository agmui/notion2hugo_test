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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZMNBPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6%2FeIYEh70gwXXuef%2FR2q08Yt0hEGudWszbgUwnGEGqAIgBwNBInvKjCKr4z1fj3p8RRge5tjZk%2FeggHqGi0QKnBMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE4mHwddUgezIM4wircAzlYYVvROwILfq2wybN4nmA3ajbZhJZUIKSBb8TAIP3xJ4cuRQfHAJ2v4vs2YuM016dVAUo1L1mhmtzYbOOLlwghzrqH%2BurYmTXizNOCJ6rHkhrhliE1Nc93QZo2c%2F5V4MjLjWFICr8Yofggcpdg7puh8EtzCnDTJjfXuBs61Mdx5utEfDDqd%2BsTGkrQCGKNJCDWtYcd0ROs4JlGSPwCKBYBS2klmFXuf4i1kprAkVVbzIxh3%2BMq%2FvZ%2F1JhXWBM7rkF6Tkr%2B75I4L%2FNJifMReW2dZalLuRnBKxdTkZdy3gf7Zb8TG0k1Smp0ODlVztY5vhk%2BliD%2F1XohNByjH0v7pdvraUNfRZFSY0vpy8mtSwb5VXNxnKXhojOyyg7giHqlePb2P0Z9N4Xnm3hiHOm9NqpeZZANlLFD506pHwVUDUjIo0HRwy4W%2BV6RRbSd%2BA1oYHQBvB41nA3iDp8n%2BmtL%2BHV3WjGfHlmsrTjdk6wH6MI4AuQdHxRfPgfzq5auPuVpFdvvTemFEHulbVHs25lH9iF1m9rvMlTzYzHm0BAQtr6%2BLbkSJ3eKlQCzhKLouyQ1anq4BSefr0xTKTresD9hICZ6VDQOLKOGujSU1aq0y%2FUUV0B9GBlm1xpRJwhnMObGsMEGOqUBfNjE5REdXD3CigxGmQtqNwUT%2BKBA4lEa6iA6yO0a5MpAU9NlmzakXaKkSNSy8rEVZkLdrDhlOE0wcgLzoru0HHHKa%2F8ardH38C8NN6e2YDJ15TLa%2B%2Bnq3rboHyusjSZZ2%2BFUoTi0u2tYiHTK%2FvmCOsuKwucQWHyptC3QMzDzga5ZcHQ0oq%2F9wybL5gHvt5szHxRQeAkKxxVg3YKtL9d7p4s8gpWB&X-Amz-Signature=94b89a078e81187491132e72fa58165b7e5cf1f327d4cf3c4e55d1c93616181e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZMNBPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6%2FeIYEh70gwXXuef%2FR2q08Yt0hEGudWszbgUwnGEGqAIgBwNBInvKjCKr4z1fj3p8RRge5tjZk%2FeggHqGi0QKnBMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE4mHwddUgezIM4wircAzlYYVvROwILfq2wybN4nmA3ajbZhJZUIKSBb8TAIP3xJ4cuRQfHAJ2v4vs2YuM016dVAUo1L1mhmtzYbOOLlwghzrqH%2BurYmTXizNOCJ6rHkhrhliE1Nc93QZo2c%2F5V4MjLjWFICr8Yofggcpdg7puh8EtzCnDTJjfXuBs61Mdx5utEfDDqd%2BsTGkrQCGKNJCDWtYcd0ROs4JlGSPwCKBYBS2klmFXuf4i1kprAkVVbzIxh3%2BMq%2FvZ%2F1JhXWBM7rkF6Tkr%2B75I4L%2FNJifMReW2dZalLuRnBKxdTkZdy3gf7Zb8TG0k1Smp0ODlVztY5vhk%2BliD%2F1XohNByjH0v7pdvraUNfRZFSY0vpy8mtSwb5VXNxnKXhojOyyg7giHqlePb2P0Z9N4Xnm3hiHOm9NqpeZZANlLFD506pHwVUDUjIo0HRwy4W%2BV6RRbSd%2BA1oYHQBvB41nA3iDp8n%2BmtL%2BHV3WjGfHlmsrTjdk6wH6MI4AuQdHxRfPgfzq5auPuVpFdvvTemFEHulbVHs25lH9iF1m9rvMlTzYzHm0BAQtr6%2BLbkSJ3eKlQCzhKLouyQ1anq4BSefr0xTKTresD9hICZ6VDQOLKOGujSU1aq0y%2FUUV0B9GBlm1xpRJwhnMObGsMEGOqUBfNjE5REdXD3CigxGmQtqNwUT%2BKBA4lEa6iA6yO0a5MpAU9NlmzakXaKkSNSy8rEVZkLdrDhlOE0wcgLzoru0HHHKa%2F8ardH38C8NN6e2YDJ15TLa%2B%2Bnq3rboHyusjSZZ2%2BFUoTi0u2tYiHTK%2FvmCOsuKwucQWHyptC3QMzDzga5ZcHQ0oq%2F9wybL5gHvt5szHxRQeAkKxxVg3YKtL9d7p4s8gpWB&X-Amz-Signature=959705d11a14034c5ec62dc9665161ca59e979f9222948b8c41091b584b509f3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZMNBPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6%2FeIYEh70gwXXuef%2FR2q08Yt0hEGudWszbgUwnGEGqAIgBwNBInvKjCKr4z1fj3p8RRge5tjZk%2FeggHqGi0QKnBMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE4mHwddUgezIM4wircAzlYYVvROwILfq2wybN4nmA3ajbZhJZUIKSBb8TAIP3xJ4cuRQfHAJ2v4vs2YuM016dVAUo1L1mhmtzYbOOLlwghzrqH%2BurYmTXizNOCJ6rHkhrhliE1Nc93QZo2c%2F5V4MjLjWFICr8Yofggcpdg7puh8EtzCnDTJjfXuBs61Mdx5utEfDDqd%2BsTGkrQCGKNJCDWtYcd0ROs4JlGSPwCKBYBS2klmFXuf4i1kprAkVVbzIxh3%2BMq%2FvZ%2F1JhXWBM7rkF6Tkr%2B75I4L%2FNJifMReW2dZalLuRnBKxdTkZdy3gf7Zb8TG0k1Smp0ODlVztY5vhk%2BliD%2F1XohNByjH0v7pdvraUNfRZFSY0vpy8mtSwb5VXNxnKXhojOyyg7giHqlePb2P0Z9N4Xnm3hiHOm9NqpeZZANlLFD506pHwVUDUjIo0HRwy4W%2BV6RRbSd%2BA1oYHQBvB41nA3iDp8n%2BmtL%2BHV3WjGfHlmsrTjdk6wH6MI4AuQdHxRfPgfzq5auPuVpFdvvTemFEHulbVHs25lH9iF1m9rvMlTzYzHm0BAQtr6%2BLbkSJ3eKlQCzhKLouyQ1anq4BSefr0xTKTresD9hICZ6VDQOLKOGujSU1aq0y%2FUUV0B9GBlm1xpRJwhnMObGsMEGOqUBfNjE5REdXD3CigxGmQtqNwUT%2BKBA4lEa6iA6yO0a5MpAU9NlmzakXaKkSNSy8rEVZkLdrDhlOE0wcgLzoru0HHHKa%2F8ardH38C8NN6e2YDJ15TLa%2B%2Bnq3rboHyusjSZZ2%2BFUoTi0u2tYiHTK%2FvmCOsuKwucQWHyptC3QMzDzga5ZcHQ0oq%2F9wybL5gHvt5szHxRQeAkKxxVg3YKtL9d7p4s8gpWB&X-Amz-Signature=09d88e0638ab345d5b0737bebcf314c2847bc83f800eeffda01837f611ebbe83&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZMNBPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6%2FeIYEh70gwXXuef%2FR2q08Yt0hEGudWszbgUwnGEGqAIgBwNBInvKjCKr4z1fj3p8RRge5tjZk%2FeggHqGi0QKnBMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE4mHwddUgezIM4wircAzlYYVvROwILfq2wybN4nmA3ajbZhJZUIKSBb8TAIP3xJ4cuRQfHAJ2v4vs2YuM016dVAUo1L1mhmtzYbOOLlwghzrqH%2BurYmTXizNOCJ6rHkhrhliE1Nc93QZo2c%2F5V4MjLjWFICr8Yofggcpdg7puh8EtzCnDTJjfXuBs61Mdx5utEfDDqd%2BsTGkrQCGKNJCDWtYcd0ROs4JlGSPwCKBYBS2klmFXuf4i1kprAkVVbzIxh3%2BMq%2FvZ%2F1JhXWBM7rkF6Tkr%2B75I4L%2FNJifMReW2dZalLuRnBKxdTkZdy3gf7Zb8TG0k1Smp0ODlVztY5vhk%2BliD%2F1XohNByjH0v7pdvraUNfRZFSY0vpy8mtSwb5VXNxnKXhojOyyg7giHqlePb2P0Z9N4Xnm3hiHOm9NqpeZZANlLFD506pHwVUDUjIo0HRwy4W%2BV6RRbSd%2BA1oYHQBvB41nA3iDp8n%2BmtL%2BHV3WjGfHlmsrTjdk6wH6MI4AuQdHxRfPgfzq5auPuVpFdvvTemFEHulbVHs25lH9iF1m9rvMlTzYzHm0BAQtr6%2BLbkSJ3eKlQCzhKLouyQ1anq4BSefr0xTKTresD9hICZ6VDQOLKOGujSU1aq0y%2FUUV0B9GBlm1xpRJwhnMObGsMEGOqUBfNjE5REdXD3CigxGmQtqNwUT%2BKBA4lEa6iA6yO0a5MpAU9NlmzakXaKkSNSy8rEVZkLdrDhlOE0wcgLzoru0HHHKa%2F8ardH38C8NN6e2YDJ15TLa%2B%2Bnq3rboHyusjSZZ2%2BFUoTi0u2tYiHTK%2FvmCOsuKwucQWHyptC3QMzDzga5ZcHQ0oq%2F9wybL5gHvt5szHxRQeAkKxxVg3YKtL9d7p4s8gpWB&X-Amz-Signature=8c6dca3239244782c185198bcf6ff70e5239bfb69b82120748ba903456bae0ca&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZMNBPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6%2FeIYEh70gwXXuef%2FR2q08Yt0hEGudWszbgUwnGEGqAIgBwNBInvKjCKr4z1fj3p8RRge5tjZk%2FeggHqGi0QKnBMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE4mHwddUgezIM4wircAzlYYVvROwILfq2wybN4nmA3ajbZhJZUIKSBb8TAIP3xJ4cuRQfHAJ2v4vs2YuM016dVAUo1L1mhmtzYbOOLlwghzrqH%2BurYmTXizNOCJ6rHkhrhliE1Nc93QZo2c%2F5V4MjLjWFICr8Yofggcpdg7puh8EtzCnDTJjfXuBs61Mdx5utEfDDqd%2BsTGkrQCGKNJCDWtYcd0ROs4JlGSPwCKBYBS2klmFXuf4i1kprAkVVbzIxh3%2BMq%2FvZ%2F1JhXWBM7rkF6Tkr%2B75I4L%2FNJifMReW2dZalLuRnBKxdTkZdy3gf7Zb8TG0k1Smp0ODlVztY5vhk%2BliD%2F1XohNByjH0v7pdvraUNfRZFSY0vpy8mtSwb5VXNxnKXhojOyyg7giHqlePb2P0Z9N4Xnm3hiHOm9NqpeZZANlLFD506pHwVUDUjIo0HRwy4W%2BV6RRbSd%2BA1oYHQBvB41nA3iDp8n%2BmtL%2BHV3WjGfHlmsrTjdk6wH6MI4AuQdHxRfPgfzq5auPuVpFdvvTemFEHulbVHs25lH9iF1m9rvMlTzYzHm0BAQtr6%2BLbkSJ3eKlQCzhKLouyQ1anq4BSefr0xTKTresD9hICZ6VDQOLKOGujSU1aq0y%2FUUV0B9GBlm1xpRJwhnMObGsMEGOqUBfNjE5REdXD3CigxGmQtqNwUT%2BKBA4lEa6iA6yO0a5MpAU9NlmzakXaKkSNSy8rEVZkLdrDhlOE0wcgLzoru0HHHKa%2F8ardH38C8NN6e2YDJ15TLa%2B%2Bnq3rboHyusjSZZ2%2BFUoTi0u2tYiHTK%2FvmCOsuKwucQWHyptC3QMzDzga5ZcHQ0oq%2F9wybL5gHvt5szHxRQeAkKxxVg3YKtL9d7p4s8gpWB&X-Amz-Signature=da9f8595263c6cb29879528c62c0fffedb37a64ee953f5a79e46474c5f6418c1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZMNBPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6%2FeIYEh70gwXXuef%2FR2q08Yt0hEGudWszbgUwnGEGqAIgBwNBInvKjCKr4z1fj3p8RRge5tjZk%2FeggHqGi0QKnBMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE4mHwddUgezIM4wircAzlYYVvROwILfq2wybN4nmA3ajbZhJZUIKSBb8TAIP3xJ4cuRQfHAJ2v4vs2YuM016dVAUo1L1mhmtzYbOOLlwghzrqH%2BurYmTXizNOCJ6rHkhrhliE1Nc93QZo2c%2F5V4MjLjWFICr8Yofggcpdg7puh8EtzCnDTJjfXuBs61Mdx5utEfDDqd%2BsTGkrQCGKNJCDWtYcd0ROs4JlGSPwCKBYBS2klmFXuf4i1kprAkVVbzIxh3%2BMq%2FvZ%2F1JhXWBM7rkF6Tkr%2B75I4L%2FNJifMReW2dZalLuRnBKxdTkZdy3gf7Zb8TG0k1Smp0ODlVztY5vhk%2BliD%2F1XohNByjH0v7pdvraUNfRZFSY0vpy8mtSwb5VXNxnKXhojOyyg7giHqlePb2P0Z9N4Xnm3hiHOm9NqpeZZANlLFD506pHwVUDUjIo0HRwy4W%2BV6RRbSd%2BA1oYHQBvB41nA3iDp8n%2BmtL%2BHV3WjGfHlmsrTjdk6wH6MI4AuQdHxRfPgfzq5auPuVpFdvvTemFEHulbVHs25lH9iF1m9rvMlTzYzHm0BAQtr6%2BLbkSJ3eKlQCzhKLouyQ1anq4BSefr0xTKTresD9hICZ6VDQOLKOGujSU1aq0y%2FUUV0B9GBlm1xpRJwhnMObGsMEGOqUBfNjE5REdXD3CigxGmQtqNwUT%2BKBA4lEa6iA6yO0a5MpAU9NlmzakXaKkSNSy8rEVZkLdrDhlOE0wcgLzoru0HHHKa%2F8ardH38C8NN6e2YDJ15TLa%2B%2Bnq3rboHyusjSZZ2%2BFUoTi0u2tYiHTK%2FvmCOsuKwucQWHyptC3QMzDzga5ZcHQ0oq%2F9wybL5gHvt5szHxRQeAkKxxVg3YKtL9d7p4s8gpWB&X-Amz-Signature=13aa8e47684540eec443744547b321ec762dec995621bdca4d97fe6bae69a761&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZMNBPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6%2FeIYEh70gwXXuef%2FR2q08Yt0hEGudWszbgUwnGEGqAIgBwNBInvKjCKr4z1fj3p8RRge5tjZk%2FeggHqGi0QKnBMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE4mHwddUgezIM4wircAzlYYVvROwILfq2wybN4nmA3ajbZhJZUIKSBb8TAIP3xJ4cuRQfHAJ2v4vs2YuM016dVAUo1L1mhmtzYbOOLlwghzrqH%2BurYmTXizNOCJ6rHkhrhliE1Nc93QZo2c%2F5V4MjLjWFICr8Yofggcpdg7puh8EtzCnDTJjfXuBs61Mdx5utEfDDqd%2BsTGkrQCGKNJCDWtYcd0ROs4JlGSPwCKBYBS2klmFXuf4i1kprAkVVbzIxh3%2BMq%2FvZ%2F1JhXWBM7rkF6Tkr%2B75I4L%2FNJifMReW2dZalLuRnBKxdTkZdy3gf7Zb8TG0k1Smp0ODlVztY5vhk%2BliD%2F1XohNByjH0v7pdvraUNfRZFSY0vpy8mtSwb5VXNxnKXhojOyyg7giHqlePb2P0Z9N4Xnm3hiHOm9NqpeZZANlLFD506pHwVUDUjIo0HRwy4W%2BV6RRbSd%2BA1oYHQBvB41nA3iDp8n%2BmtL%2BHV3WjGfHlmsrTjdk6wH6MI4AuQdHxRfPgfzq5auPuVpFdvvTemFEHulbVHs25lH9iF1m9rvMlTzYzHm0BAQtr6%2BLbkSJ3eKlQCzhKLouyQ1anq4BSefr0xTKTresD9hICZ6VDQOLKOGujSU1aq0y%2FUUV0B9GBlm1xpRJwhnMObGsMEGOqUBfNjE5REdXD3CigxGmQtqNwUT%2BKBA4lEa6iA6yO0a5MpAU9NlmzakXaKkSNSy8rEVZkLdrDhlOE0wcgLzoru0HHHKa%2F8ardH38C8NN6e2YDJ15TLa%2B%2Bnq3rboHyusjSZZ2%2BFUoTi0u2tYiHTK%2FvmCOsuKwucQWHyptC3QMzDzga5ZcHQ0oq%2F9wybL5gHvt5szHxRQeAkKxxVg3YKtL9d7p4s8gpWB&X-Amz-Signature=95700b1176b80bbbcbd82aa9b80ba07f95fe976955330321865d450a1d1765d0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
