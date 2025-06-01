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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRARL3Z%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCfzPP33rSNcoDpZ8LA%2FlyaO%2FdA5nx6aB5lzqakgcHXUwIgYEujhbjkmJkGJEDy3Qm%2FSuxqVtvyDm%2BhwPRIeYsTUhMqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEDNI5rbcufAlBqJCrcA34m%2Bk%2FmOYn%2Bz1BuHxg9QG8fj78e%2F%2B3u1AZB0aKJ0qR5rc6A72qwValIZj3siYN9Hwu9a7qI7Q0HN54zI1T7LKWELF5oS2AKXn0mhBb7G931vEskvDwfHgefZsjrU3tXZtWPz7MzzZFa5ZnSfT5CNle0h6LqZyt5d5Jgl3bLaFmT%2BlxYBd%2BVw5EGFJkDOzTGjJJUNK7quG2OSOY5YYWB6VyBb%2Bh9cd8YebqWtvTi2chPQ9If3BzJYhsAWcUMdDR7f1iLxhNdOIX9kS1UgOXRJhdYmljLTOQ3BtjyLZOutPrLZEyxWUmlWrV%2FKiBdtQ%2BErxzQ7W80%2BEEgXDGh1qLOO%2BhDrxB07%2BtyWlBhnW6PpvJba0ZRLjkD%2BLtlfpvC2Bk4jhtirTleF7EPzoLYC%2BwINYxvcNfdqI8Q6fsBXslUz0TsdAK6%2FL1ViIpBRxH8zKTCCQZL2YEj21yj3BccFj3AAmAUZsgk%2F5uBVvIOjpOTht6EfIeAqaE%2Fhevm7CAYvoI%2BSMltfpXZby6dQkl5ybDcwne5r0tzix%2BQtoxKNEbwVnK%2B0V0gqfooWVRR2hIjhZPoU8dow4mOW2ayWsva1VfA%2FL8%2F7fOCpOZ2OjroeClo9%2FR%2BaYaPT58o7jadVaz%2FMPWm78EGOqUB70eW%2FSu6ceqBgTE%2BL7tVa0kXIw282hBn0Kq402Ap8nD4MNhpbI06zAQoIKmAFJBEDZdDdWvNjn1pcyB7n%2FH78MxTcMlxpK87e6%2BTvAxF5tAcu7sHAWTdxBjzLdETkeOusT3jrMZY86AoEDkvN%2F933gAkDhmmb2y97bgvsBnx8bpg9NS5mPxZ5uJkagK2O5aGr3I6LTzHhsYXjeHEsYLZJht%2F7Wdz&X-Amz-Signature=b78f6764246af4366b921de53a874a3b66b07e02506aa7960b02f1312207319d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRARL3Z%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCfzPP33rSNcoDpZ8LA%2FlyaO%2FdA5nx6aB5lzqakgcHXUwIgYEujhbjkmJkGJEDy3Qm%2FSuxqVtvyDm%2BhwPRIeYsTUhMqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEDNI5rbcufAlBqJCrcA34m%2Bk%2FmOYn%2Bz1BuHxg9QG8fj78e%2F%2B3u1AZB0aKJ0qR5rc6A72qwValIZj3siYN9Hwu9a7qI7Q0HN54zI1T7LKWELF5oS2AKXn0mhBb7G931vEskvDwfHgefZsjrU3tXZtWPz7MzzZFa5ZnSfT5CNle0h6LqZyt5d5Jgl3bLaFmT%2BlxYBd%2BVw5EGFJkDOzTGjJJUNK7quG2OSOY5YYWB6VyBb%2Bh9cd8YebqWtvTi2chPQ9If3BzJYhsAWcUMdDR7f1iLxhNdOIX9kS1UgOXRJhdYmljLTOQ3BtjyLZOutPrLZEyxWUmlWrV%2FKiBdtQ%2BErxzQ7W80%2BEEgXDGh1qLOO%2BhDrxB07%2BtyWlBhnW6PpvJba0ZRLjkD%2BLtlfpvC2Bk4jhtirTleF7EPzoLYC%2BwINYxvcNfdqI8Q6fsBXslUz0TsdAK6%2FL1ViIpBRxH8zKTCCQZL2YEj21yj3BccFj3AAmAUZsgk%2F5uBVvIOjpOTht6EfIeAqaE%2Fhevm7CAYvoI%2BSMltfpXZby6dQkl5ybDcwne5r0tzix%2BQtoxKNEbwVnK%2B0V0gqfooWVRR2hIjhZPoU8dow4mOW2ayWsva1VfA%2FL8%2F7fOCpOZ2OjroeClo9%2FR%2BaYaPT58o7jadVaz%2FMPWm78EGOqUB70eW%2FSu6ceqBgTE%2BL7tVa0kXIw282hBn0Kq402Ap8nD4MNhpbI06zAQoIKmAFJBEDZdDdWvNjn1pcyB7n%2FH78MxTcMlxpK87e6%2BTvAxF5tAcu7sHAWTdxBjzLdETkeOusT3jrMZY86AoEDkvN%2F933gAkDhmmb2y97bgvsBnx8bpg9NS5mPxZ5uJkagK2O5aGr3I6LTzHhsYXjeHEsYLZJht%2F7Wdz&X-Amz-Signature=67c06167188fc60f41b3a7e91604531a44ea75cce64d63e252a4d4a9389062b4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRARL3Z%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCfzPP33rSNcoDpZ8LA%2FlyaO%2FdA5nx6aB5lzqakgcHXUwIgYEujhbjkmJkGJEDy3Qm%2FSuxqVtvyDm%2BhwPRIeYsTUhMqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEDNI5rbcufAlBqJCrcA34m%2Bk%2FmOYn%2Bz1BuHxg9QG8fj78e%2F%2B3u1AZB0aKJ0qR5rc6A72qwValIZj3siYN9Hwu9a7qI7Q0HN54zI1T7LKWELF5oS2AKXn0mhBb7G931vEskvDwfHgefZsjrU3tXZtWPz7MzzZFa5ZnSfT5CNle0h6LqZyt5d5Jgl3bLaFmT%2BlxYBd%2BVw5EGFJkDOzTGjJJUNK7quG2OSOY5YYWB6VyBb%2Bh9cd8YebqWtvTi2chPQ9If3BzJYhsAWcUMdDR7f1iLxhNdOIX9kS1UgOXRJhdYmljLTOQ3BtjyLZOutPrLZEyxWUmlWrV%2FKiBdtQ%2BErxzQ7W80%2BEEgXDGh1qLOO%2BhDrxB07%2BtyWlBhnW6PpvJba0ZRLjkD%2BLtlfpvC2Bk4jhtirTleF7EPzoLYC%2BwINYxvcNfdqI8Q6fsBXslUz0TsdAK6%2FL1ViIpBRxH8zKTCCQZL2YEj21yj3BccFj3AAmAUZsgk%2F5uBVvIOjpOTht6EfIeAqaE%2Fhevm7CAYvoI%2BSMltfpXZby6dQkl5ybDcwne5r0tzix%2BQtoxKNEbwVnK%2B0V0gqfooWVRR2hIjhZPoU8dow4mOW2ayWsva1VfA%2FL8%2F7fOCpOZ2OjroeClo9%2FR%2BaYaPT58o7jadVaz%2FMPWm78EGOqUB70eW%2FSu6ceqBgTE%2BL7tVa0kXIw282hBn0Kq402Ap8nD4MNhpbI06zAQoIKmAFJBEDZdDdWvNjn1pcyB7n%2FH78MxTcMlxpK87e6%2BTvAxF5tAcu7sHAWTdxBjzLdETkeOusT3jrMZY86AoEDkvN%2F933gAkDhmmb2y97bgvsBnx8bpg9NS5mPxZ5uJkagK2O5aGr3I6LTzHhsYXjeHEsYLZJht%2F7Wdz&X-Amz-Signature=6e5d2f73eb2e91a0e8074366c237f0210bfeb2b1f443cfecdde1fc4a66852b81&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRARL3Z%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCfzPP33rSNcoDpZ8LA%2FlyaO%2FdA5nx6aB5lzqakgcHXUwIgYEujhbjkmJkGJEDy3Qm%2FSuxqVtvyDm%2BhwPRIeYsTUhMqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEDNI5rbcufAlBqJCrcA34m%2Bk%2FmOYn%2Bz1BuHxg9QG8fj78e%2F%2B3u1AZB0aKJ0qR5rc6A72qwValIZj3siYN9Hwu9a7qI7Q0HN54zI1T7LKWELF5oS2AKXn0mhBb7G931vEskvDwfHgefZsjrU3tXZtWPz7MzzZFa5ZnSfT5CNle0h6LqZyt5d5Jgl3bLaFmT%2BlxYBd%2BVw5EGFJkDOzTGjJJUNK7quG2OSOY5YYWB6VyBb%2Bh9cd8YebqWtvTi2chPQ9If3BzJYhsAWcUMdDR7f1iLxhNdOIX9kS1UgOXRJhdYmljLTOQ3BtjyLZOutPrLZEyxWUmlWrV%2FKiBdtQ%2BErxzQ7W80%2BEEgXDGh1qLOO%2BhDrxB07%2BtyWlBhnW6PpvJba0ZRLjkD%2BLtlfpvC2Bk4jhtirTleF7EPzoLYC%2BwINYxvcNfdqI8Q6fsBXslUz0TsdAK6%2FL1ViIpBRxH8zKTCCQZL2YEj21yj3BccFj3AAmAUZsgk%2F5uBVvIOjpOTht6EfIeAqaE%2Fhevm7CAYvoI%2BSMltfpXZby6dQkl5ybDcwne5r0tzix%2BQtoxKNEbwVnK%2B0V0gqfooWVRR2hIjhZPoU8dow4mOW2ayWsva1VfA%2FL8%2F7fOCpOZ2OjroeClo9%2FR%2BaYaPT58o7jadVaz%2FMPWm78EGOqUB70eW%2FSu6ceqBgTE%2BL7tVa0kXIw282hBn0Kq402Ap8nD4MNhpbI06zAQoIKmAFJBEDZdDdWvNjn1pcyB7n%2FH78MxTcMlxpK87e6%2BTvAxF5tAcu7sHAWTdxBjzLdETkeOusT3jrMZY86AoEDkvN%2F933gAkDhmmb2y97bgvsBnx8bpg9NS5mPxZ5uJkagK2O5aGr3I6LTzHhsYXjeHEsYLZJht%2F7Wdz&X-Amz-Signature=dfb064cd8bbf13265d27c5e6b93f9387955f7f2d3dcee86846aedb71a6725452&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRARL3Z%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCfzPP33rSNcoDpZ8LA%2FlyaO%2FdA5nx6aB5lzqakgcHXUwIgYEujhbjkmJkGJEDy3Qm%2FSuxqVtvyDm%2BhwPRIeYsTUhMqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEDNI5rbcufAlBqJCrcA34m%2Bk%2FmOYn%2Bz1BuHxg9QG8fj78e%2F%2B3u1AZB0aKJ0qR5rc6A72qwValIZj3siYN9Hwu9a7qI7Q0HN54zI1T7LKWELF5oS2AKXn0mhBb7G931vEskvDwfHgefZsjrU3tXZtWPz7MzzZFa5ZnSfT5CNle0h6LqZyt5d5Jgl3bLaFmT%2BlxYBd%2BVw5EGFJkDOzTGjJJUNK7quG2OSOY5YYWB6VyBb%2Bh9cd8YebqWtvTi2chPQ9If3BzJYhsAWcUMdDR7f1iLxhNdOIX9kS1UgOXRJhdYmljLTOQ3BtjyLZOutPrLZEyxWUmlWrV%2FKiBdtQ%2BErxzQ7W80%2BEEgXDGh1qLOO%2BhDrxB07%2BtyWlBhnW6PpvJba0ZRLjkD%2BLtlfpvC2Bk4jhtirTleF7EPzoLYC%2BwINYxvcNfdqI8Q6fsBXslUz0TsdAK6%2FL1ViIpBRxH8zKTCCQZL2YEj21yj3BccFj3AAmAUZsgk%2F5uBVvIOjpOTht6EfIeAqaE%2Fhevm7CAYvoI%2BSMltfpXZby6dQkl5ybDcwne5r0tzix%2BQtoxKNEbwVnK%2B0V0gqfooWVRR2hIjhZPoU8dow4mOW2ayWsva1VfA%2FL8%2F7fOCpOZ2OjroeClo9%2FR%2BaYaPT58o7jadVaz%2FMPWm78EGOqUB70eW%2FSu6ceqBgTE%2BL7tVa0kXIw282hBn0Kq402Ap8nD4MNhpbI06zAQoIKmAFJBEDZdDdWvNjn1pcyB7n%2FH78MxTcMlxpK87e6%2BTvAxF5tAcu7sHAWTdxBjzLdETkeOusT3jrMZY86AoEDkvN%2F933gAkDhmmb2y97bgvsBnx8bpg9NS5mPxZ5uJkagK2O5aGr3I6LTzHhsYXjeHEsYLZJht%2F7Wdz&X-Amz-Signature=73287474653f0026799db073592d4aa128c20b305f448c0aef13132f04aea7ce&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRARL3Z%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCfzPP33rSNcoDpZ8LA%2FlyaO%2FdA5nx6aB5lzqakgcHXUwIgYEujhbjkmJkGJEDy3Qm%2FSuxqVtvyDm%2BhwPRIeYsTUhMqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEDNI5rbcufAlBqJCrcA34m%2Bk%2FmOYn%2Bz1BuHxg9QG8fj78e%2F%2B3u1AZB0aKJ0qR5rc6A72qwValIZj3siYN9Hwu9a7qI7Q0HN54zI1T7LKWELF5oS2AKXn0mhBb7G931vEskvDwfHgefZsjrU3tXZtWPz7MzzZFa5ZnSfT5CNle0h6LqZyt5d5Jgl3bLaFmT%2BlxYBd%2BVw5EGFJkDOzTGjJJUNK7quG2OSOY5YYWB6VyBb%2Bh9cd8YebqWtvTi2chPQ9If3BzJYhsAWcUMdDR7f1iLxhNdOIX9kS1UgOXRJhdYmljLTOQ3BtjyLZOutPrLZEyxWUmlWrV%2FKiBdtQ%2BErxzQ7W80%2BEEgXDGh1qLOO%2BhDrxB07%2BtyWlBhnW6PpvJba0ZRLjkD%2BLtlfpvC2Bk4jhtirTleF7EPzoLYC%2BwINYxvcNfdqI8Q6fsBXslUz0TsdAK6%2FL1ViIpBRxH8zKTCCQZL2YEj21yj3BccFj3AAmAUZsgk%2F5uBVvIOjpOTht6EfIeAqaE%2Fhevm7CAYvoI%2BSMltfpXZby6dQkl5ybDcwne5r0tzix%2BQtoxKNEbwVnK%2B0V0gqfooWVRR2hIjhZPoU8dow4mOW2ayWsva1VfA%2FL8%2F7fOCpOZ2OjroeClo9%2FR%2BaYaPT58o7jadVaz%2FMPWm78EGOqUB70eW%2FSu6ceqBgTE%2BL7tVa0kXIw282hBn0Kq402Ap8nD4MNhpbI06zAQoIKmAFJBEDZdDdWvNjn1pcyB7n%2FH78MxTcMlxpK87e6%2BTvAxF5tAcu7sHAWTdxBjzLdETkeOusT3jrMZY86AoEDkvN%2F933gAkDhmmb2y97bgvsBnx8bpg9NS5mPxZ5uJkagK2O5aGr3I6LTzHhsYXjeHEsYLZJht%2F7Wdz&X-Amz-Signature=6d80fc9182cbb4d839fb72276b7ebc0d24f03b0abc1573f0670ef3509afd384d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRARL3Z%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCfzPP33rSNcoDpZ8LA%2FlyaO%2FdA5nx6aB5lzqakgcHXUwIgYEujhbjkmJkGJEDy3Qm%2FSuxqVtvyDm%2BhwPRIeYsTUhMqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEDNI5rbcufAlBqJCrcA34m%2Bk%2FmOYn%2Bz1BuHxg9QG8fj78e%2F%2B3u1AZB0aKJ0qR5rc6A72qwValIZj3siYN9Hwu9a7qI7Q0HN54zI1T7LKWELF5oS2AKXn0mhBb7G931vEskvDwfHgefZsjrU3tXZtWPz7MzzZFa5ZnSfT5CNle0h6LqZyt5d5Jgl3bLaFmT%2BlxYBd%2BVw5EGFJkDOzTGjJJUNK7quG2OSOY5YYWB6VyBb%2Bh9cd8YebqWtvTi2chPQ9If3BzJYhsAWcUMdDR7f1iLxhNdOIX9kS1UgOXRJhdYmljLTOQ3BtjyLZOutPrLZEyxWUmlWrV%2FKiBdtQ%2BErxzQ7W80%2BEEgXDGh1qLOO%2BhDrxB07%2BtyWlBhnW6PpvJba0ZRLjkD%2BLtlfpvC2Bk4jhtirTleF7EPzoLYC%2BwINYxvcNfdqI8Q6fsBXslUz0TsdAK6%2FL1ViIpBRxH8zKTCCQZL2YEj21yj3BccFj3AAmAUZsgk%2F5uBVvIOjpOTht6EfIeAqaE%2Fhevm7CAYvoI%2BSMltfpXZby6dQkl5ybDcwne5r0tzix%2BQtoxKNEbwVnK%2B0V0gqfooWVRR2hIjhZPoU8dow4mOW2ayWsva1VfA%2FL8%2F7fOCpOZ2OjroeClo9%2FR%2BaYaPT58o7jadVaz%2FMPWm78EGOqUB70eW%2FSu6ceqBgTE%2BL7tVa0kXIw282hBn0Kq402Ap8nD4MNhpbI06zAQoIKmAFJBEDZdDdWvNjn1pcyB7n%2FH78MxTcMlxpK87e6%2BTvAxF5tAcu7sHAWTdxBjzLdETkeOusT3jrMZY86AoEDkvN%2F933gAkDhmmb2y97bgvsBnx8bpg9NS5mPxZ5uJkagK2O5aGr3I6LTzHhsYXjeHEsYLZJht%2F7Wdz&X-Amz-Signature=9ee96126d39dce3628740b2b347cc5b194e4a04dc9a1508a0ba7cbe92e0cfdf5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
