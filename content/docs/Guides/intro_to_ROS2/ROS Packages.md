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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCYMYM4M%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCICs3ADI530K%2BOs%2B%2Bcz19g9uk%2BcX6Ge69ObYunjMGP%2F63AiB97NKmPnqn3MaQV8%2BU4g6t2XaIZOv51iotlxj8vAU5jir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMHChcIjNIZq4zoz39KtwDnornX3zbkxPmCdVOppaxJjojp8aD11wkhjajCW8%2BoUfD7cJ3GeYJ23UtJaYKwMHX8AzXuVuMyeLXpNduui%2BKAS4zpGPZW0%2FZKLvIaiWzPPTWjbnKqNvVAQW9JnpI9d4lS4TvApVxqlSjflQj4g6%2BmaNROcQF6xtHRB1pIQrCjmGQze4P%2FL2%2Bn0uaR1kNqxnA9HLXeV1LSuhYG5gfZZrzgeOSiALSpd8y%2B329U06ud2OAXtGVePC2a5jJ0NlYuUT%2F3COK3PwlTj4nwEzqnWQH2OYqDI7uOqsRU5b%2BmVw%2FEw0suZHJFrGhJrLSnxlPTKr%2Fxvm2Ds%2Bs0MHmqfqwvc0FROg3T5FS2wAb4wVnIsoebDL1oMXW6wtE%2Fnneou4%2B4WC0xOLfvZ9x2KSogZ2iAPzC6pkM36GVseCd7fK2qTHU4m9nU10%2FJGeJDD%2BSl8dq56iEXpUBhLkXpy4F27adSrPIRu7pXVWswSAf1MjOOWrAW1DmudjmlCQsC1ENzledAZ6vir6kHFiolyNitv4HYNKez%2Fl6gWzZaMuk53YUROSgOwdSuhtk%2FG6OELNXHV%2F3nHTbQers37vcF0blZ%2FLWi1YCENzykkfonuLmOEkL%2BrQTeMshEePNvVuJeFsEw1IwwNXVvwY6pgGIc52vfE8UHvREsvYs9OkXS1R7tXV52dCC3PM%2FBN1q3ynoyQGbrE4wAy7vsWdzLeFJ5kC0HQiR5as5yvqQ03dbJuCUIp4exp5WmDoekWYq5n6i%2Bx1Wi%2B5NHCMmsdWG9u%2BG8eFRzvtJD2OOuvhNlpi9t2iAmLXWT4%2FYYGZQtZkQ4CpaA79%2BmFVBRTyjmFVIM0eeqPsBP5%2BMz0hgBCep7nJ5yw5D3c7j&X-Amz-Signature=7eef31c253c3add8d6ee28b9b495a6eacc24701592376e9d3b389da9780aadef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCYMYM4M%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCICs3ADI530K%2BOs%2B%2Bcz19g9uk%2BcX6Ge69ObYunjMGP%2F63AiB97NKmPnqn3MaQV8%2BU4g6t2XaIZOv51iotlxj8vAU5jir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMHChcIjNIZq4zoz39KtwDnornX3zbkxPmCdVOppaxJjojp8aD11wkhjajCW8%2BoUfD7cJ3GeYJ23UtJaYKwMHX8AzXuVuMyeLXpNduui%2BKAS4zpGPZW0%2FZKLvIaiWzPPTWjbnKqNvVAQW9JnpI9d4lS4TvApVxqlSjflQj4g6%2BmaNROcQF6xtHRB1pIQrCjmGQze4P%2FL2%2Bn0uaR1kNqxnA9HLXeV1LSuhYG5gfZZrzgeOSiALSpd8y%2B329U06ud2OAXtGVePC2a5jJ0NlYuUT%2F3COK3PwlTj4nwEzqnWQH2OYqDI7uOqsRU5b%2BmVw%2FEw0suZHJFrGhJrLSnxlPTKr%2Fxvm2Ds%2Bs0MHmqfqwvc0FROg3T5FS2wAb4wVnIsoebDL1oMXW6wtE%2Fnneou4%2B4WC0xOLfvZ9x2KSogZ2iAPzC6pkM36GVseCd7fK2qTHU4m9nU10%2FJGeJDD%2BSl8dq56iEXpUBhLkXpy4F27adSrPIRu7pXVWswSAf1MjOOWrAW1DmudjmlCQsC1ENzledAZ6vir6kHFiolyNitv4HYNKez%2Fl6gWzZaMuk53YUROSgOwdSuhtk%2FG6OELNXHV%2F3nHTbQers37vcF0blZ%2FLWi1YCENzykkfonuLmOEkL%2BrQTeMshEePNvVuJeFsEw1IwwNXVvwY6pgGIc52vfE8UHvREsvYs9OkXS1R7tXV52dCC3PM%2FBN1q3ynoyQGbrE4wAy7vsWdzLeFJ5kC0HQiR5as5yvqQ03dbJuCUIp4exp5WmDoekWYq5n6i%2Bx1Wi%2B5NHCMmsdWG9u%2BG8eFRzvtJD2OOuvhNlpi9t2iAmLXWT4%2FYYGZQtZkQ4CpaA79%2BmFVBRTyjmFVIM0eeqPsBP5%2BMz0hgBCep7nJ5yw5D3c7j&X-Amz-Signature=ccf7aeb9bfbe0b6776642fd12f79dd531048e0eb9dba857a5be5b58f1f6fd28b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCYMYM4M%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCICs3ADI530K%2BOs%2B%2Bcz19g9uk%2BcX6Ge69ObYunjMGP%2F63AiB97NKmPnqn3MaQV8%2BU4g6t2XaIZOv51iotlxj8vAU5jir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMHChcIjNIZq4zoz39KtwDnornX3zbkxPmCdVOppaxJjojp8aD11wkhjajCW8%2BoUfD7cJ3GeYJ23UtJaYKwMHX8AzXuVuMyeLXpNduui%2BKAS4zpGPZW0%2FZKLvIaiWzPPTWjbnKqNvVAQW9JnpI9d4lS4TvApVxqlSjflQj4g6%2BmaNROcQF6xtHRB1pIQrCjmGQze4P%2FL2%2Bn0uaR1kNqxnA9HLXeV1LSuhYG5gfZZrzgeOSiALSpd8y%2B329U06ud2OAXtGVePC2a5jJ0NlYuUT%2F3COK3PwlTj4nwEzqnWQH2OYqDI7uOqsRU5b%2BmVw%2FEw0suZHJFrGhJrLSnxlPTKr%2Fxvm2Ds%2Bs0MHmqfqwvc0FROg3T5FS2wAb4wVnIsoebDL1oMXW6wtE%2Fnneou4%2B4WC0xOLfvZ9x2KSogZ2iAPzC6pkM36GVseCd7fK2qTHU4m9nU10%2FJGeJDD%2BSl8dq56iEXpUBhLkXpy4F27adSrPIRu7pXVWswSAf1MjOOWrAW1DmudjmlCQsC1ENzledAZ6vir6kHFiolyNitv4HYNKez%2Fl6gWzZaMuk53YUROSgOwdSuhtk%2FG6OELNXHV%2F3nHTbQers37vcF0blZ%2FLWi1YCENzykkfonuLmOEkL%2BrQTeMshEePNvVuJeFsEw1IwwNXVvwY6pgGIc52vfE8UHvREsvYs9OkXS1R7tXV52dCC3PM%2FBN1q3ynoyQGbrE4wAy7vsWdzLeFJ5kC0HQiR5as5yvqQ03dbJuCUIp4exp5WmDoekWYq5n6i%2Bx1Wi%2B5NHCMmsdWG9u%2BG8eFRzvtJD2OOuvhNlpi9t2iAmLXWT4%2FYYGZQtZkQ4CpaA79%2BmFVBRTyjmFVIM0eeqPsBP5%2BMz0hgBCep7nJ5yw5D3c7j&X-Amz-Signature=bfb3579a8e6ae1db54b54b527bbf96146897b6548120ce765ba0587934733f6a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCYMYM4M%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCICs3ADI530K%2BOs%2B%2Bcz19g9uk%2BcX6Ge69ObYunjMGP%2F63AiB97NKmPnqn3MaQV8%2BU4g6t2XaIZOv51iotlxj8vAU5jir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMHChcIjNIZq4zoz39KtwDnornX3zbkxPmCdVOppaxJjojp8aD11wkhjajCW8%2BoUfD7cJ3GeYJ23UtJaYKwMHX8AzXuVuMyeLXpNduui%2BKAS4zpGPZW0%2FZKLvIaiWzPPTWjbnKqNvVAQW9JnpI9d4lS4TvApVxqlSjflQj4g6%2BmaNROcQF6xtHRB1pIQrCjmGQze4P%2FL2%2Bn0uaR1kNqxnA9HLXeV1LSuhYG5gfZZrzgeOSiALSpd8y%2B329U06ud2OAXtGVePC2a5jJ0NlYuUT%2F3COK3PwlTj4nwEzqnWQH2OYqDI7uOqsRU5b%2BmVw%2FEw0suZHJFrGhJrLSnxlPTKr%2Fxvm2Ds%2Bs0MHmqfqwvc0FROg3T5FS2wAb4wVnIsoebDL1oMXW6wtE%2Fnneou4%2B4WC0xOLfvZ9x2KSogZ2iAPzC6pkM36GVseCd7fK2qTHU4m9nU10%2FJGeJDD%2BSl8dq56iEXpUBhLkXpy4F27adSrPIRu7pXVWswSAf1MjOOWrAW1DmudjmlCQsC1ENzledAZ6vir6kHFiolyNitv4HYNKez%2Fl6gWzZaMuk53YUROSgOwdSuhtk%2FG6OELNXHV%2F3nHTbQers37vcF0blZ%2FLWi1YCENzykkfonuLmOEkL%2BrQTeMshEePNvVuJeFsEw1IwwNXVvwY6pgGIc52vfE8UHvREsvYs9OkXS1R7tXV52dCC3PM%2FBN1q3ynoyQGbrE4wAy7vsWdzLeFJ5kC0HQiR5as5yvqQ03dbJuCUIp4exp5WmDoekWYq5n6i%2Bx1Wi%2B5NHCMmsdWG9u%2BG8eFRzvtJD2OOuvhNlpi9t2iAmLXWT4%2FYYGZQtZkQ4CpaA79%2BmFVBRTyjmFVIM0eeqPsBP5%2BMz0hgBCep7nJ5yw5D3c7j&X-Amz-Signature=f1aead320453044be406a941f37eb43a4744367e467a2bc1bb8805845988cb7a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCYMYM4M%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCICs3ADI530K%2BOs%2B%2Bcz19g9uk%2BcX6Ge69ObYunjMGP%2F63AiB97NKmPnqn3MaQV8%2BU4g6t2XaIZOv51iotlxj8vAU5jir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMHChcIjNIZq4zoz39KtwDnornX3zbkxPmCdVOppaxJjojp8aD11wkhjajCW8%2BoUfD7cJ3GeYJ23UtJaYKwMHX8AzXuVuMyeLXpNduui%2BKAS4zpGPZW0%2FZKLvIaiWzPPTWjbnKqNvVAQW9JnpI9d4lS4TvApVxqlSjflQj4g6%2BmaNROcQF6xtHRB1pIQrCjmGQze4P%2FL2%2Bn0uaR1kNqxnA9HLXeV1LSuhYG5gfZZrzgeOSiALSpd8y%2B329U06ud2OAXtGVePC2a5jJ0NlYuUT%2F3COK3PwlTj4nwEzqnWQH2OYqDI7uOqsRU5b%2BmVw%2FEw0suZHJFrGhJrLSnxlPTKr%2Fxvm2Ds%2Bs0MHmqfqwvc0FROg3T5FS2wAb4wVnIsoebDL1oMXW6wtE%2Fnneou4%2B4WC0xOLfvZ9x2KSogZ2iAPzC6pkM36GVseCd7fK2qTHU4m9nU10%2FJGeJDD%2BSl8dq56iEXpUBhLkXpy4F27adSrPIRu7pXVWswSAf1MjOOWrAW1DmudjmlCQsC1ENzledAZ6vir6kHFiolyNitv4HYNKez%2Fl6gWzZaMuk53YUROSgOwdSuhtk%2FG6OELNXHV%2F3nHTbQers37vcF0blZ%2FLWi1YCENzykkfonuLmOEkL%2BrQTeMshEePNvVuJeFsEw1IwwNXVvwY6pgGIc52vfE8UHvREsvYs9OkXS1R7tXV52dCC3PM%2FBN1q3ynoyQGbrE4wAy7vsWdzLeFJ5kC0HQiR5as5yvqQ03dbJuCUIp4exp5WmDoekWYq5n6i%2Bx1Wi%2B5NHCMmsdWG9u%2BG8eFRzvtJD2OOuvhNlpi9t2iAmLXWT4%2FYYGZQtZkQ4CpaA79%2BmFVBRTyjmFVIM0eeqPsBP5%2BMz0hgBCep7nJ5yw5D3c7j&X-Amz-Signature=77469f5c2f8dc3e1e27d012926863cd78a631e198cefa7d5f8805624e161be5c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCYMYM4M%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCICs3ADI530K%2BOs%2B%2Bcz19g9uk%2BcX6Ge69ObYunjMGP%2F63AiB97NKmPnqn3MaQV8%2BU4g6t2XaIZOv51iotlxj8vAU5jir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMHChcIjNIZq4zoz39KtwDnornX3zbkxPmCdVOppaxJjojp8aD11wkhjajCW8%2BoUfD7cJ3GeYJ23UtJaYKwMHX8AzXuVuMyeLXpNduui%2BKAS4zpGPZW0%2FZKLvIaiWzPPTWjbnKqNvVAQW9JnpI9d4lS4TvApVxqlSjflQj4g6%2BmaNROcQF6xtHRB1pIQrCjmGQze4P%2FL2%2Bn0uaR1kNqxnA9HLXeV1LSuhYG5gfZZrzgeOSiALSpd8y%2B329U06ud2OAXtGVePC2a5jJ0NlYuUT%2F3COK3PwlTj4nwEzqnWQH2OYqDI7uOqsRU5b%2BmVw%2FEw0suZHJFrGhJrLSnxlPTKr%2Fxvm2Ds%2Bs0MHmqfqwvc0FROg3T5FS2wAb4wVnIsoebDL1oMXW6wtE%2Fnneou4%2B4WC0xOLfvZ9x2KSogZ2iAPzC6pkM36GVseCd7fK2qTHU4m9nU10%2FJGeJDD%2BSl8dq56iEXpUBhLkXpy4F27adSrPIRu7pXVWswSAf1MjOOWrAW1DmudjmlCQsC1ENzledAZ6vir6kHFiolyNitv4HYNKez%2Fl6gWzZaMuk53YUROSgOwdSuhtk%2FG6OELNXHV%2F3nHTbQers37vcF0blZ%2FLWi1YCENzykkfonuLmOEkL%2BrQTeMshEePNvVuJeFsEw1IwwNXVvwY6pgGIc52vfE8UHvREsvYs9OkXS1R7tXV52dCC3PM%2FBN1q3ynoyQGbrE4wAy7vsWdzLeFJ5kC0HQiR5as5yvqQ03dbJuCUIp4exp5WmDoekWYq5n6i%2Bx1Wi%2B5NHCMmsdWG9u%2BG8eFRzvtJD2OOuvhNlpi9t2iAmLXWT4%2FYYGZQtZkQ4CpaA79%2BmFVBRTyjmFVIM0eeqPsBP5%2BMz0hgBCep7nJ5yw5D3c7j&X-Amz-Signature=44786f5d0688f875afe797951eeddf369dec50922bd6949b538f041de154bb8c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCYMYM4M%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCICs3ADI530K%2BOs%2B%2Bcz19g9uk%2BcX6Ge69ObYunjMGP%2F63AiB97NKmPnqn3MaQV8%2BU4g6t2XaIZOv51iotlxj8vAU5jir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMHChcIjNIZq4zoz39KtwDnornX3zbkxPmCdVOppaxJjojp8aD11wkhjajCW8%2BoUfD7cJ3GeYJ23UtJaYKwMHX8AzXuVuMyeLXpNduui%2BKAS4zpGPZW0%2FZKLvIaiWzPPTWjbnKqNvVAQW9JnpI9d4lS4TvApVxqlSjflQj4g6%2BmaNROcQF6xtHRB1pIQrCjmGQze4P%2FL2%2Bn0uaR1kNqxnA9HLXeV1LSuhYG5gfZZrzgeOSiALSpd8y%2B329U06ud2OAXtGVePC2a5jJ0NlYuUT%2F3COK3PwlTj4nwEzqnWQH2OYqDI7uOqsRU5b%2BmVw%2FEw0suZHJFrGhJrLSnxlPTKr%2Fxvm2Ds%2Bs0MHmqfqwvc0FROg3T5FS2wAb4wVnIsoebDL1oMXW6wtE%2Fnneou4%2B4WC0xOLfvZ9x2KSogZ2iAPzC6pkM36GVseCd7fK2qTHU4m9nU10%2FJGeJDD%2BSl8dq56iEXpUBhLkXpy4F27adSrPIRu7pXVWswSAf1MjOOWrAW1DmudjmlCQsC1ENzledAZ6vir6kHFiolyNitv4HYNKez%2Fl6gWzZaMuk53YUROSgOwdSuhtk%2FG6OELNXHV%2F3nHTbQers37vcF0blZ%2FLWi1YCENzykkfonuLmOEkL%2BrQTeMshEePNvVuJeFsEw1IwwNXVvwY6pgGIc52vfE8UHvREsvYs9OkXS1R7tXV52dCC3PM%2FBN1q3ynoyQGbrE4wAy7vsWdzLeFJ5kC0HQiR5as5yvqQ03dbJuCUIp4exp5WmDoekWYq5n6i%2Bx1Wi%2B5NHCMmsdWG9u%2BG8eFRzvtJD2OOuvhNlpi9t2iAmLXWT4%2FYYGZQtZkQ4CpaA79%2BmFVBRTyjmFVIM0eeqPsBP5%2BMz0hgBCep7nJ5yw5D3c7j&X-Amz-Signature=81645a678319757c00b1d7703641ddc34870f7c5158d095cb1f955615101426e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
