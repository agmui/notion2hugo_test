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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645LWKYQT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYeOFnHj3DKK0gQupBpgtu4UPcrULKFgjp7vfFH3xVQAiAlOl92MjWH4fGNACEohKZBXyjMolFHfu2KBV5gc8XGnCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeB2Tw0wHkDf4mvt0KtwDUN7ZjE09etGvn8NXZz2bKC%2BSfEFFFmxLetXU%2BJsvEu7xCt4iHV0O%2FvagcY1CbpAPSOLBy%2B4Y5o2tLE0TAqard8pEKuB8J5oIZ4knYIQQuKRlOnOlAmwipKeX1MbsDa2t07tB4IJBmh3wnzDvTccsXbt%2FCJRl6xyhonWRWxEGzjakuWwPbM8q5s%2FOf5wynVno9UbSXX5%2Bltus8P4oOybvBZGgBKGnRAAUZbwsu7ePFSEwaZk3%2FvcuNhecnu3oGk%2B07oMSoFN860MCeawtDmx3K1ih38fsgm9An2XHpe4b1kTSKD7OzevxytSvRm8DO%2Bebi9ZovaOm41yDGvBjrMs8ZMAqXv1%2BQtyIdoX%2BpFO%2FsZCgeAQznYz6tHypg4iOq7WVzPmbtJe7CDCO8NXBVq9Ts1vKOLl%2FvMTL4Z4fAPyFtH2Jee01QKSWLa6AIDy3BzA0Yg66UGS3XfGjsXIIiQbcxUGeJHBmFNZEdkOLe5TJf6IWlGpwdE0Mm4SfTVc9u8hEOwl4kfL7tZvaZ1g8s2Jtszplbd2vDqSGidniemzMzV9taxai%2FWiU84IOz%2BbUeKjyJFwUUqheq6oi7kklPncdUVX69VZY700Cix56giEXsYukkIlIX%2FMZPJn0MV4wj7DYwgY6pgHHjWXqYybpxzn5lv%2Bvo6A%2FUvvdU%2BdemV%2BR4az9keHfmJCgoqxGoIDZLrxZeVaR29HLHmLMvnattr6iYIgIVzEQz7XG59R912s%2F8IjHDeTvefe%2FvI931nsIHRuFNJC9D0PfEG3XBmQPAHGxgYWAWho181LgVznIlIu1SNGZMXNqi0%2FxQRlVlkVvy1ZTZIIylfcrDGJFAQy%2BMOcSLRogGiVkCLKdbQVl&X-Amz-Signature=8078045e069f4ed23eea23b1f5934f4d1c341cc81b8e3145e2ba5c7b934e23ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645LWKYQT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYeOFnHj3DKK0gQupBpgtu4UPcrULKFgjp7vfFH3xVQAiAlOl92MjWH4fGNACEohKZBXyjMolFHfu2KBV5gc8XGnCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeB2Tw0wHkDf4mvt0KtwDUN7ZjE09etGvn8NXZz2bKC%2BSfEFFFmxLetXU%2BJsvEu7xCt4iHV0O%2FvagcY1CbpAPSOLBy%2B4Y5o2tLE0TAqard8pEKuB8J5oIZ4knYIQQuKRlOnOlAmwipKeX1MbsDa2t07tB4IJBmh3wnzDvTccsXbt%2FCJRl6xyhonWRWxEGzjakuWwPbM8q5s%2FOf5wynVno9UbSXX5%2Bltus8P4oOybvBZGgBKGnRAAUZbwsu7ePFSEwaZk3%2FvcuNhecnu3oGk%2B07oMSoFN860MCeawtDmx3K1ih38fsgm9An2XHpe4b1kTSKD7OzevxytSvRm8DO%2Bebi9ZovaOm41yDGvBjrMs8ZMAqXv1%2BQtyIdoX%2BpFO%2FsZCgeAQznYz6tHypg4iOq7WVzPmbtJe7CDCO8NXBVq9Ts1vKOLl%2FvMTL4Z4fAPyFtH2Jee01QKSWLa6AIDy3BzA0Yg66UGS3XfGjsXIIiQbcxUGeJHBmFNZEdkOLe5TJf6IWlGpwdE0Mm4SfTVc9u8hEOwl4kfL7tZvaZ1g8s2Jtszplbd2vDqSGidniemzMzV9taxai%2FWiU84IOz%2BbUeKjyJFwUUqheq6oi7kklPncdUVX69VZY700Cix56giEXsYukkIlIX%2FMZPJn0MV4wj7DYwgY6pgHHjWXqYybpxzn5lv%2Bvo6A%2FUvvdU%2BdemV%2BR4az9keHfmJCgoqxGoIDZLrxZeVaR29HLHmLMvnattr6iYIgIVzEQz7XG59R912s%2F8IjHDeTvefe%2FvI931nsIHRuFNJC9D0PfEG3XBmQPAHGxgYWAWho181LgVznIlIu1SNGZMXNqi0%2FxQRlVlkVvy1ZTZIIylfcrDGJFAQy%2BMOcSLRogGiVkCLKdbQVl&X-Amz-Signature=222cfed5fde124c76c072413f3e2029fe0830065ad115806e5f2bfc26f1d7d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645LWKYQT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYeOFnHj3DKK0gQupBpgtu4UPcrULKFgjp7vfFH3xVQAiAlOl92MjWH4fGNACEohKZBXyjMolFHfu2KBV5gc8XGnCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeB2Tw0wHkDf4mvt0KtwDUN7ZjE09etGvn8NXZz2bKC%2BSfEFFFmxLetXU%2BJsvEu7xCt4iHV0O%2FvagcY1CbpAPSOLBy%2B4Y5o2tLE0TAqard8pEKuB8J5oIZ4knYIQQuKRlOnOlAmwipKeX1MbsDa2t07tB4IJBmh3wnzDvTccsXbt%2FCJRl6xyhonWRWxEGzjakuWwPbM8q5s%2FOf5wynVno9UbSXX5%2Bltus8P4oOybvBZGgBKGnRAAUZbwsu7ePFSEwaZk3%2FvcuNhecnu3oGk%2B07oMSoFN860MCeawtDmx3K1ih38fsgm9An2XHpe4b1kTSKD7OzevxytSvRm8DO%2Bebi9ZovaOm41yDGvBjrMs8ZMAqXv1%2BQtyIdoX%2BpFO%2FsZCgeAQznYz6tHypg4iOq7WVzPmbtJe7CDCO8NXBVq9Ts1vKOLl%2FvMTL4Z4fAPyFtH2Jee01QKSWLa6AIDy3BzA0Yg66UGS3XfGjsXIIiQbcxUGeJHBmFNZEdkOLe5TJf6IWlGpwdE0Mm4SfTVc9u8hEOwl4kfL7tZvaZ1g8s2Jtszplbd2vDqSGidniemzMzV9taxai%2FWiU84IOz%2BbUeKjyJFwUUqheq6oi7kklPncdUVX69VZY700Cix56giEXsYukkIlIX%2FMZPJn0MV4wj7DYwgY6pgHHjWXqYybpxzn5lv%2Bvo6A%2FUvvdU%2BdemV%2BR4az9keHfmJCgoqxGoIDZLrxZeVaR29HLHmLMvnattr6iYIgIVzEQz7XG59R912s%2F8IjHDeTvefe%2FvI931nsIHRuFNJC9D0PfEG3XBmQPAHGxgYWAWho181LgVznIlIu1SNGZMXNqi0%2FxQRlVlkVvy1ZTZIIylfcrDGJFAQy%2BMOcSLRogGiVkCLKdbQVl&X-Amz-Signature=7ccb315a05f57ca740287a7e0366bd7d9c1e4fdc3ea5cd2f650509c4a66c7668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645LWKYQT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYeOFnHj3DKK0gQupBpgtu4UPcrULKFgjp7vfFH3xVQAiAlOl92MjWH4fGNACEohKZBXyjMolFHfu2KBV5gc8XGnCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeB2Tw0wHkDf4mvt0KtwDUN7ZjE09etGvn8NXZz2bKC%2BSfEFFFmxLetXU%2BJsvEu7xCt4iHV0O%2FvagcY1CbpAPSOLBy%2B4Y5o2tLE0TAqard8pEKuB8J5oIZ4knYIQQuKRlOnOlAmwipKeX1MbsDa2t07tB4IJBmh3wnzDvTccsXbt%2FCJRl6xyhonWRWxEGzjakuWwPbM8q5s%2FOf5wynVno9UbSXX5%2Bltus8P4oOybvBZGgBKGnRAAUZbwsu7ePFSEwaZk3%2FvcuNhecnu3oGk%2B07oMSoFN860MCeawtDmx3K1ih38fsgm9An2XHpe4b1kTSKD7OzevxytSvRm8DO%2Bebi9ZovaOm41yDGvBjrMs8ZMAqXv1%2BQtyIdoX%2BpFO%2FsZCgeAQznYz6tHypg4iOq7WVzPmbtJe7CDCO8NXBVq9Ts1vKOLl%2FvMTL4Z4fAPyFtH2Jee01QKSWLa6AIDy3BzA0Yg66UGS3XfGjsXIIiQbcxUGeJHBmFNZEdkOLe5TJf6IWlGpwdE0Mm4SfTVc9u8hEOwl4kfL7tZvaZ1g8s2Jtszplbd2vDqSGidniemzMzV9taxai%2FWiU84IOz%2BbUeKjyJFwUUqheq6oi7kklPncdUVX69VZY700Cix56giEXsYukkIlIX%2FMZPJn0MV4wj7DYwgY6pgHHjWXqYybpxzn5lv%2Bvo6A%2FUvvdU%2BdemV%2BR4az9keHfmJCgoqxGoIDZLrxZeVaR29HLHmLMvnattr6iYIgIVzEQz7XG59R912s%2F8IjHDeTvefe%2FvI931nsIHRuFNJC9D0PfEG3XBmQPAHGxgYWAWho181LgVznIlIu1SNGZMXNqi0%2FxQRlVlkVvy1ZTZIIylfcrDGJFAQy%2BMOcSLRogGiVkCLKdbQVl&X-Amz-Signature=a13e5e5f266eb848fadd5531b5e68a649ad6a65873f21d43996071124a00223f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645LWKYQT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYeOFnHj3DKK0gQupBpgtu4UPcrULKFgjp7vfFH3xVQAiAlOl92MjWH4fGNACEohKZBXyjMolFHfu2KBV5gc8XGnCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeB2Tw0wHkDf4mvt0KtwDUN7ZjE09etGvn8NXZz2bKC%2BSfEFFFmxLetXU%2BJsvEu7xCt4iHV0O%2FvagcY1CbpAPSOLBy%2B4Y5o2tLE0TAqard8pEKuB8J5oIZ4knYIQQuKRlOnOlAmwipKeX1MbsDa2t07tB4IJBmh3wnzDvTccsXbt%2FCJRl6xyhonWRWxEGzjakuWwPbM8q5s%2FOf5wynVno9UbSXX5%2Bltus8P4oOybvBZGgBKGnRAAUZbwsu7ePFSEwaZk3%2FvcuNhecnu3oGk%2B07oMSoFN860MCeawtDmx3K1ih38fsgm9An2XHpe4b1kTSKD7OzevxytSvRm8DO%2Bebi9ZovaOm41yDGvBjrMs8ZMAqXv1%2BQtyIdoX%2BpFO%2FsZCgeAQznYz6tHypg4iOq7WVzPmbtJe7CDCO8NXBVq9Ts1vKOLl%2FvMTL4Z4fAPyFtH2Jee01QKSWLa6AIDy3BzA0Yg66UGS3XfGjsXIIiQbcxUGeJHBmFNZEdkOLe5TJf6IWlGpwdE0Mm4SfTVc9u8hEOwl4kfL7tZvaZ1g8s2Jtszplbd2vDqSGidniemzMzV9taxai%2FWiU84IOz%2BbUeKjyJFwUUqheq6oi7kklPncdUVX69VZY700Cix56giEXsYukkIlIX%2FMZPJn0MV4wj7DYwgY6pgHHjWXqYybpxzn5lv%2Bvo6A%2FUvvdU%2BdemV%2BR4az9keHfmJCgoqxGoIDZLrxZeVaR29HLHmLMvnattr6iYIgIVzEQz7XG59R912s%2F8IjHDeTvefe%2FvI931nsIHRuFNJC9D0PfEG3XBmQPAHGxgYWAWho181LgVznIlIu1SNGZMXNqi0%2FxQRlVlkVvy1ZTZIIylfcrDGJFAQy%2BMOcSLRogGiVkCLKdbQVl&X-Amz-Signature=18060b67d0845703adfe2fa11dd96b71e417752db41076888708ec5e25ab91fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645LWKYQT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYeOFnHj3DKK0gQupBpgtu4UPcrULKFgjp7vfFH3xVQAiAlOl92MjWH4fGNACEohKZBXyjMolFHfu2KBV5gc8XGnCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeB2Tw0wHkDf4mvt0KtwDUN7ZjE09etGvn8NXZz2bKC%2BSfEFFFmxLetXU%2BJsvEu7xCt4iHV0O%2FvagcY1CbpAPSOLBy%2B4Y5o2tLE0TAqard8pEKuB8J5oIZ4knYIQQuKRlOnOlAmwipKeX1MbsDa2t07tB4IJBmh3wnzDvTccsXbt%2FCJRl6xyhonWRWxEGzjakuWwPbM8q5s%2FOf5wynVno9UbSXX5%2Bltus8P4oOybvBZGgBKGnRAAUZbwsu7ePFSEwaZk3%2FvcuNhecnu3oGk%2B07oMSoFN860MCeawtDmx3K1ih38fsgm9An2XHpe4b1kTSKD7OzevxytSvRm8DO%2Bebi9ZovaOm41yDGvBjrMs8ZMAqXv1%2BQtyIdoX%2BpFO%2FsZCgeAQznYz6tHypg4iOq7WVzPmbtJe7CDCO8NXBVq9Ts1vKOLl%2FvMTL4Z4fAPyFtH2Jee01QKSWLa6AIDy3BzA0Yg66UGS3XfGjsXIIiQbcxUGeJHBmFNZEdkOLe5TJf6IWlGpwdE0Mm4SfTVc9u8hEOwl4kfL7tZvaZ1g8s2Jtszplbd2vDqSGidniemzMzV9taxai%2FWiU84IOz%2BbUeKjyJFwUUqheq6oi7kklPncdUVX69VZY700Cix56giEXsYukkIlIX%2FMZPJn0MV4wj7DYwgY6pgHHjWXqYybpxzn5lv%2Bvo6A%2FUvvdU%2BdemV%2BR4az9keHfmJCgoqxGoIDZLrxZeVaR29HLHmLMvnattr6iYIgIVzEQz7XG59R912s%2F8IjHDeTvefe%2FvI931nsIHRuFNJC9D0PfEG3XBmQPAHGxgYWAWho181LgVznIlIu1SNGZMXNqi0%2FxQRlVlkVvy1ZTZIIylfcrDGJFAQy%2BMOcSLRogGiVkCLKdbQVl&X-Amz-Signature=c8ee5e28d564098381667d4ea856460c7a27d4577e1ec6b43c5224ab070c8a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645LWKYQT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYeOFnHj3DKK0gQupBpgtu4UPcrULKFgjp7vfFH3xVQAiAlOl92MjWH4fGNACEohKZBXyjMolFHfu2KBV5gc8XGnCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeB2Tw0wHkDf4mvt0KtwDUN7ZjE09etGvn8NXZz2bKC%2BSfEFFFmxLetXU%2BJsvEu7xCt4iHV0O%2FvagcY1CbpAPSOLBy%2B4Y5o2tLE0TAqard8pEKuB8J5oIZ4knYIQQuKRlOnOlAmwipKeX1MbsDa2t07tB4IJBmh3wnzDvTccsXbt%2FCJRl6xyhonWRWxEGzjakuWwPbM8q5s%2FOf5wynVno9UbSXX5%2Bltus8P4oOybvBZGgBKGnRAAUZbwsu7ePFSEwaZk3%2FvcuNhecnu3oGk%2B07oMSoFN860MCeawtDmx3K1ih38fsgm9An2XHpe4b1kTSKD7OzevxytSvRm8DO%2Bebi9ZovaOm41yDGvBjrMs8ZMAqXv1%2BQtyIdoX%2BpFO%2FsZCgeAQznYz6tHypg4iOq7WVzPmbtJe7CDCO8NXBVq9Ts1vKOLl%2FvMTL4Z4fAPyFtH2Jee01QKSWLa6AIDy3BzA0Yg66UGS3XfGjsXIIiQbcxUGeJHBmFNZEdkOLe5TJf6IWlGpwdE0Mm4SfTVc9u8hEOwl4kfL7tZvaZ1g8s2Jtszplbd2vDqSGidniemzMzV9taxai%2FWiU84IOz%2BbUeKjyJFwUUqheq6oi7kklPncdUVX69VZY700Cix56giEXsYukkIlIX%2FMZPJn0MV4wj7DYwgY6pgHHjWXqYybpxzn5lv%2Bvo6A%2FUvvdU%2BdemV%2BR4az9keHfmJCgoqxGoIDZLrxZeVaR29HLHmLMvnattr6iYIgIVzEQz7XG59R912s%2F8IjHDeTvefe%2FvI931nsIHRuFNJC9D0PfEG3XBmQPAHGxgYWAWho181LgVznIlIu1SNGZMXNqi0%2FxQRlVlkVvy1ZTZIIylfcrDGJFAQy%2BMOcSLRogGiVkCLKdbQVl&X-Amz-Signature=4be7b45ab89a6b1965a9736fd752d9e30f67df25eb43f632fd8ed9fbcb337936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
