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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXW2AJEE%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRdo2F9zjRlBx3x7%2BG3xucLJhKNVQsyhBHQYxzqDXpiAiACN9CpSJWGbXZ6TXzkfTXEEfP80kLXVUfw51sHxLNanyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdWTQ1NlGI5%2FXziFPKtwD2x3s7jCLxXqCRw9ZyqTFb7RNhb0t5D95py10k7duBDS6fJ2nnTHkJQCstNN3RlGMyv6WfTeGAsJXLdTb7%2BPQQw0cyqg%2F26mqbW1dlO3rVDNYJn9JLJyqvzeA%2Fvo2zIIHSAGVC0ktT%2F5F28Ar1d2qHsGSI7blFYyJPBsZo2OAHGIqTrIXzEcffxM%2FGv0X38%2FQIVvHaeKJuXRL2K9sBDxhm2anhbXyubL29JX7JLBr%2BmiwHf%2BAQS7X7Jxzadxmsvqidc00wVaSmAlpAe%2BhBYixxMzq%2FdsV7W5%2BFx2A1U2ZGReiMLQu9Q4A1MsidzQOSZV%2BTNWyhgpJ60q%2BvTYxqLr7Vd4mpOkik3soz2y7nusrGhYYjNqtTilgGHczUdUoyyCBj%2FdoqGlsI6rXtWbAHqhc0Ti0KMAwslu1vtAzOyoSi7CjLUOAYx7qQoZX2%2B2JjNgifR3DlbVTpU%2B%2B5ZPxb9RQIhJacZoCZrdQxnYgEQoqY9WIpWh6IrojgDxHyrnh%2FdXZ7KGlZ65rfZhI8doFLqoZvD06Cmi20PN419dw%2FTPxOiwAZrWM%2B7tRtQwayNwDwrJPbx%2FcB8XHEpbK1VqyhTT%2BkXn6X%2FRjqhoTcRdwLHIPF0b29mWE2%2BwYxEkACZYwu%2F%2FxvAY6pgGmwi4ui7mzVwTsl7I0qKGsIfjV6xle59mtovQcr23oHuqbwyEmU7mnDayRCl%2FW3jU3KNxlnDSTzel422YZlMjxkGoU6W%2FFDcBdx89s7zo88RywSZ4RdK%2Fkryuae9oJP18A75GiBYbUNp3JiOz579jqAJFLi2E4O8gheRHA8rVe%2FGZyEQfTbqDZY%2FawqatU%2BUuKjYfDaaSLPir7UHbaMAuRkjz4AWDT&X-Amz-Signature=3e58fa23ef0b238067028762755500a5a2aad661ae0663481344e06da72aff35&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXW2AJEE%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRdo2F9zjRlBx3x7%2BG3xucLJhKNVQsyhBHQYxzqDXpiAiACN9CpSJWGbXZ6TXzkfTXEEfP80kLXVUfw51sHxLNanyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdWTQ1NlGI5%2FXziFPKtwD2x3s7jCLxXqCRw9ZyqTFb7RNhb0t5D95py10k7duBDS6fJ2nnTHkJQCstNN3RlGMyv6WfTeGAsJXLdTb7%2BPQQw0cyqg%2F26mqbW1dlO3rVDNYJn9JLJyqvzeA%2Fvo2zIIHSAGVC0ktT%2F5F28Ar1d2qHsGSI7blFYyJPBsZo2OAHGIqTrIXzEcffxM%2FGv0X38%2FQIVvHaeKJuXRL2K9sBDxhm2anhbXyubL29JX7JLBr%2BmiwHf%2BAQS7X7Jxzadxmsvqidc00wVaSmAlpAe%2BhBYixxMzq%2FdsV7W5%2BFx2A1U2ZGReiMLQu9Q4A1MsidzQOSZV%2BTNWyhgpJ60q%2BvTYxqLr7Vd4mpOkik3soz2y7nusrGhYYjNqtTilgGHczUdUoyyCBj%2FdoqGlsI6rXtWbAHqhc0Ti0KMAwslu1vtAzOyoSi7CjLUOAYx7qQoZX2%2B2JjNgifR3DlbVTpU%2B%2B5ZPxb9RQIhJacZoCZrdQxnYgEQoqY9WIpWh6IrojgDxHyrnh%2FdXZ7KGlZ65rfZhI8doFLqoZvD06Cmi20PN419dw%2FTPxOiwAZrWM%2B7tRtQwayNwDwrJPbx%2FcB8XHEpbK1VqyhTT%2BkXn6X%2FRjqhoTcRdwLHIPF0b29mWE2%2BwYxEkACZYwu%2F%2FxvAY6pgGmwi4ui7mzVwTsl7I0qKGsIfjV6xle59mtovQcr23oHuqbwyEmU7mnDayRCl%2FW3jU3KNxlnDSTzel422YZlMjxkGoU6W%2FFDcBdx89s7zo88RywSZ4RdK%2Fkryuae9oJP18A75GiBYbUNp3JiOz579jqAJFLi2E4O8gheRHA8rVe%2FGZyEQfTbqDZY%2FawqatU%2BUuKjYfDaaSLPir7UHbaMAuRkjz4AWDT&X-Amz-Signature=f725539aec682f1fd404648b38f622412bb25f4f7547525d86481fa41d9acb20&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXW2AJEE%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRdo2F9zjRlBx3x7%2BG3xucLJhKNVQsyhBHQYxzqDXpiAiACN9CpSJWGbXZ6TXzkfTXEEfP80kLXVUfw51sHxLNanyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdWTQ1NlGI5%2FXziFPKtwD2x3s7jCLxXqCRw9ZyqTFb7RNhb0t5D95py10k7duBDS6fJ2nnTHkJQCstNN3RlGMyv6WfTeGAsJXLdTb7%2BPQQw0cyqg%2F26mqbW1dlO3rVDNYJn9JLJyqvzeA%2Fvo2zIIHSAGVC0ktT%2F5F28Ar1d2qHsGSI7blFYyJPBsZo2OAHGIqTrIXzEcffxM%2FGv0X38%2FQIVvHaeKJuXRL2K9sBDxhm2anhbXyubL29JX7JLBr%2BmiwHf%2BAQS7X7Jxzadxmsvqidc00wVaSmAlpAe%2BhBYixxMzq%2FdsV7W5%2BFx2A1U2ZGReiMLQu9Q4A1MsidzQOSZV%2BTNWyhgpJ60q%2BvTYxqLr7Vd4mpOkik3soz2y7nusrGhYYjNqtTilgGHczUdUoyyCBj%2FdoqGlsI6rXtWbAHqhc0Ti0KMAwslu1vtAzOyoSi7CjLUOAYx7qQoZX2%2B2JjNgifR3DlbVTpU%2B%2B5ZPxb9RQIhJacZoCZrdQxnYgEQoqY9WIpWh6IrojgDxHyrnh%2FdXZ7KGlZ65rfZhI8doFLqoZvD06Cmi20PN419dw%2FTPxOiwAZrWM%2B7tRtQwayNwDwrJPbx%2FcB8XHEpbK1VqyhTT%2BkXn6X%2FRjqhoTcRdwLHIPF0b29mWE2%2BwYxEkACZYwu%2F%2FxvAY6pgGmwi4ui7mzVwTsl7I0qKGsIfjV6xle59mtovQcr23oHuqbwyEmU7mnDayRCl%2FW3jU3KNxlnDSTzel422YZlMjxkGoU6W%2FFDcBdx89s7zo88RywSZ4RdK%2Fkryuae9oJP18A75GiBYbUNp3JiOz579jqAJFLi2E4O8gheRHA8rVe%2FGZyEQfTbqDZY%2FawqatU%2BUuKjYfDaaSLPir7UHbaMAuRkjz4AWDT&X-Amz-Signature=f4f0fbc23c55538c5b29657dba73292b970cb329d0c726c57026904a4343992a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXW2AJEE%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRdo2F9zjRlBx3x7%2BG3xucLJhKNVQsyhBHQYxzqDXpiAiACN9CpSJWGbXZ6TXzkfTXEEfP80kLXVUfw51sHxLNanyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdWTQ1NlGI5%2FXziFPKtwD2x3s7jCLxXqCRw9ZyqTFb7RNhb0t5D95py10k7duBDS6fJ2nnTHkJQCstNN3RlGMyv6WfTeGAsJXLdTb7%2BPQQw0cyqg%2F26mqbW1dlO3rVDNYJn9JLJyqvzeA%2Fvo2zIIHSAGVC0ktT%2F5F28Ar1d2qHsGSI7blFYyJPBsZo2OAHGIqTrIXzEcffxM%2FGv0X38%2FQIVvHaeKJuXRL2K9sBDxhm2anhbXyubL29JX7JLBr%2BmiwHf%2BAQS7X7Jxzadxmsvqidc00wVaSmAlpAe%2BhBYixxMzq%2FdsV7W5%2BFx2A1U2ZGReiMLQu9Q4A1MsidzQOSZV%2BTNWyhgpJ60q%2BvTYxqLr7Vd4mpOkik3soz2y7nusrGhYYjNqtTilgGHczUdUoyyCBj%2FdoqGlsI6rXtWbAHqhc0Ti0KMAwslu1vtAzOyoSi7CjLUOAYx7qQoZX2%2B2JjNgifR3DlbVTpU%2B%2B5ZPxb9RQIhJacZoCZrdQxnYgEQoqY9WIpWh6IrojgDxHyrnh%2FdXZ7KGlZ65rfZhI8doFLqoZvD06Cmi20PN419dw%2FTPxOiwAZrWM%2B7tRtQwayNwDwrJPbx%2FcB8XHEpbK1VqyhTT%2BkXn6X%2FRjqhoTcRdwLHIPF0b29mWE2%2BwYxEkACZYwu%2F%2FxvAY6pgGmwi4ui7mzVwTsl7I0qKGsIfjV6xle59mtovQcr23oHuqbwyEmU7mnDayRCl%2FW3jU3KNxlnDSTzel422YZlMjxkGoU6W%2FFDcBdx89s7zo88RywSZ4RdK%2Fkryuae9oJP18A75GiBYbUNp3JiOz579jqAJFLi2E4O8gheRHA8rVe%2FGZyEQfTbqDZY%2FawqatU%2BUuKjYfDaaSLPir7UHbaMAuRkjz4AWDT&X-Amz-Signature=a2b1a952c6416da4ff5a560475f131dd8b3ec157f0ed1c99cf67d05224a8a783&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXW2AJEE%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRdo2F9zjRlBx3x7%2BG3xucLJhKNVQsyhBHQYxzqDXpiAiACN9CpSJWGbXZ6TXzkfTXEEfP80kLXVUfw51sHxLNanyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdWTQ1NlGI5%2FXziFPKtwD2x3s7jCLxXqCRw9ZyqTFb7RNhb0t5D95py10k7duBDS6fJ2nnTHkJQCstNN3RlGMyv6WfTeGAsJXLdTb7%2BPQQw0cyqg%2F26mqbW1dlO3rVDNYJn9JLJyqvzeA%2Fvo2zIIHSAGVC0ktT%2F5F28Ar1d2qHsGSI7blFYyJPBsZo2OAHGIqTrIXzEcffxM%2FGv0X38%2FQIVvHaeKJuXRL2K9sBDxhm2anhbXyubL29JX7JLBr%2BmiwHf%2BAQS7X7Jxzadxmsvqidc00wVaSmAlpAe%2BhBYixxMzq%2FdsV7W5%2BFx2A1U2ZGReiMLQu9Q4A1MsidzQOSZV%2BTNWyhgpJ60q%2BvTYxqLr7Vd4mpOkik3soz2y7nusrGhYYjNqtTilgGHczUdUoyyCBj%2FdoqGlsI6rXtWbAHqhc0Ti0KMAwslu1vtAzOyoSi7CjLUOAYx7qQoZX2%2B2JjNgifR3DlbVTpU%2B%2B5ZPxb9RQIhJacZoCZrdQxnYgEQoqY9WIpWh6IrojgDxHyrnh%2FdXZ7KGlZ65rfZhI8doFLqoZvD06Cmi20PN419dw%2FTPxOiwAZrWM%2B7tRtQwayNwDwrJPbx%2FcB8XHEpbK1VqyhTT%2BkXn6X%2FRjqhoTcRdwLHIPF0b29mWE2%2BwYxEkACZYwu%2F%2FxvAY6pgGmwi4ui7mzVwTsl7I0qKGsIfjV6xle59mtovQcr23oHuqbwyEmU7mnDayRCl%2FW3jU3KNxlnDSTzel422YZlMjxkGoU6W%2FFDcBdx89s7zo88RywSZ4RdK%2Fkryuae9oJP18A75GiBYbUNp3JiOz579jqAJFLi2E4O8gheRHA8rVe%2FGZyEQfTbqDZY%2FawqatU%2BUuKjYfDaaSLPir7UHbaMAuRkjz4AWDT&X-Amz-Signature=0961346ed7d77ea47c8f362a0528642c48340b87fcf171f6f23f38eb17761c8c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXW2AJEE%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRdo2F9zjRlBx3x7%2BG3xucLJhKNVQsyhBHQYxzqDXpiAiACN9CpSJWGbXZ6TXzkfTXEEfP80kLXVUfw51sHxLNanyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdWTQ1NlGI5%2FXziFPKtwD2x3s7jCLxXqCRw9ZyqTFb7RNhb0t5D95py10k7duBDS6fJ2nnTHkJQCstNN3RlGMyv6WfTeGAsJXLdTb7%2BPQQw0cyqg%2F26mqbW1dlO3rVDNYJn9JLJyqvzeA%2Fvo2zIIHSAGVC0ktT%2F5F28Ar1d2qHsGSI7blFYyJPBsZo2OAHGIqTrIXzEcffxM%2FGv0X38%2FQIVvHaeKJuXRL2K9sBDxhm2anhbXyubL29JX7JLBr%2BmiwHf%2BAQS7X7Jxzadxmsvqidc00wVaSmAlpAe%2BhBYixxMzq%2FdsV7W5%2BFx2A1U2ZGReiMLQu9Q4A1MsidzQOSZV%2BTNWyhgpJ60q%2BvTYxqLr7Vd4mpOkik3soz2y7nusrGhYYjNqtTilgGHczUdUoyyCBj%2FdoqGlsI6rXtWbAHqhc0Ti0KMAwslu1vtAzOyoSi7CjLUOAYx7qQoZX2%2B2JjNgifR3DlbVTpU%2B%2B5ZPxb9RQIhJacZoCZrdQxnYgEQoqY9WIpWh6IrojgDxHyrnh%2FdXZ7KGlZ65rfZhI8doFLqoZvD06Cmi20PN419dw%2FTPxOiwAZrWM%2B7tRtQwayNwDwrJPbx%2FcB8XHEpbK1VqyhTT%2BkXn6X%2FRjqhoTcRdwLHIPF0b29mWE2%2BwYxEkACZYwu%2F%2FxvAY6pgGmwi4ui7mzVwTsl7I0qKGsIfjV6xle59mtovQcr23oHuqbwyEmU7mnDayRCl%2FW3jU3KNxlnDSTzel422YZlMjxkGoU6W%2FFDcBdx89s7zo88RywSZ4RdK%2Fkryuae9oJP18A75GiBYbUNp3JiOz579jqAJFLi2E4O8gheRHA8rVe%2FGZyEQfTbqDZY%2FawqatU%2BUuKjYfDaaSLPir7UHbaMAuRkjz4AWDT&X-Amz-Signature=2f0c9a92a4b31dbfb11f0c46b8621d94ed05238230dc937f798f706226abcf0c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXW2AJEE%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRdo2F9zjRlBx3x7%2BG3xucLJhKNVQsyhBHQYxzqDXpiAiACN9CpSJWGbXZ6TXzkfTXEEfP80kLXVUfw51sHxLNanyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdWTQ1NlGI5%2FXziFPKtwD2x3s7jCLxXqCRw9ZyqTFb7RNhb0t5D95py10k7duBDS6fJ2nnTHkJQCstNN3RlGMyv6WfTeGAsJXLdTb7%2BPQQw0cyqg%2F26mqbW1dlO3rVDNYJn9JLJyqvzeA%2Fvo2zIIHSAGVC0ktT%2F5F28Ar1d2qHsGSI7blFYyJPBsZo2OAHGIqTrIXzEcffxM%2FGv0X38%2FQIVvHaeKJuXRL2K9sBDxhm2anhbXyubL29JX7JLBr%2BmiwHf%2BAQS7X7Jxzadxmsvqidc00wVaSmAlpAe%2BhBYixxMzq%2FdsV7W5%2BFx2A1U2ZGReiMLQu9Q4A1MsidzQOSZV%2BTNWyhgpJ60q%2BvTYxqLr7Vd4mpOkik3soz2y7nusrGhYYjNqtTilgGHczUdUoyyCBj%2FdoqGlsI6rXtWbAHqhc0Ti0KMAwslu1vtAzOyoSi7CjLUOAYx7qQoZX2%2B2JjNgifR3DlbVTpU%2B%2B5ZPxb9RQIhJacZoCZrdQxnYgEQoqY9WIpWh6IrojgDxHyrnh%2FdXZ7KGlZ65rfZhI8doFLqoZvD06Cmi20PN419dw%2FTPxOiwAZrWM%2B7tRtQwayNwDwrJPbx%2FcB8XHEpbK1VqyhTT%2BkXn6X%2FRjqhoTcRdwLHIPF0b29mWE2%2BwYxEkACZYwu%2F%2FxvAY6pgGmwi4ui7mzVwTsl7I0qKGsIfjV6xle59mtovQcr23oHuqbwyEmU7mnDayRCl%2FW3jU3KNxlnDSTzel422YZlMjxkGoU6W%2FFDcBdx89s7zo88RywSZ4RdK%2Fkryuae9oJP18A75GiBYbUNp3JiOz579jqAJFLi2E4O8gheRHA8rVe%2FGZyEQfTbqDZY%2FawqatU%2BUuKjYfDaaSLPir7UHbaMAuRkjz4AWDT&X-Amz-Signature=cd919c1224b021538f8efe51cf6178b912e3a77b2e1fc2eab1014c6d39a7af7a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
