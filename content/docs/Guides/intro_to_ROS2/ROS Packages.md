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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3FHQR4%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFustEfRmukt7aWURUXspkUFZ3IZFyIyoIgBFnQpR1kCAiEA0c3VrWtc2igtt4ixL420Xh6WuCr%2B7kCq2svqUIi2SXIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAozm%2Fe5CGRuQUJ4gircA4THdWzoRlZ8CyvwaLCAN8JEoj%2B3yvx8cHu%2BEZQxhFOOEIqLI10YrfB7F%2Bc3GsMVl2bRLK1iUBSWe7VV6Hn9FUrJaN6RsyiWuwh8AogZKt1QPCbc%2FkBJnQzbPW3xMlX7UxHQvD3P9w5I02vZ1eJYlHZq6SyrNXPHFc6D3eXTcmx2BWSPnbgKonG9iZS18R2hpw20YKysvzHyYzrrZsV3Yy0TBYjwC0Jivm0R2gbHBSBuZEsoz%2BhVoJAu2uv3rWqpSdi%2Fdv%2BeMbsGjCgYDxm7Csl8Ywzj4duz0odZq8ntDKdGV%2BPJyg8OAba8WOwOVLHrWKxqxA4xiTtcFziU9q%2F3BrjwK1%2BIJHTLCOAZWVnlo93TQcTxxe8XpQnZ%2FiCqTCiKi9YhxF3nKii68J7C6bKxYuMsDZwTUkAwV8c5LKa0GoDvZk15PIG2WPj1BrjikEDnIqbsq2h1iyVXhiHVAvhp7IfUxzjqXJt0EX98zQZHYRwAfdwqJFxWH9dv3tMpjb%2BUm3GVrcmYC%2BfjQxvuv0jpYziN5cLgMCiT7bW9Uku2KYpVW4hba5rCpgKaWLWXCh8g%2Fs8Ubqo%2B1pWYcJMcAPHyiyA4bZCHUSuZ4s%2FCkPdR1n0RYrOKdUSy9YYJKMslMKOkxb8GOqUBchxup7LNwVN21bBgSG8lSSI8oakrStUNccSp2lPYr9HyjpKQ%2BjqhvUUuypdAcQTbZujsOLwKIBpgDONsr%2BcNIYrTgeSY9OVT%2Fb%2B%2BZdoUDJXKNt1z9C4e8Sh49FYm81I96ID%2Bxoo0z5q6Qj3x%2BslLDaA0FWCXQphm9YKp6Zwb3Z%2B3zszZvLfaRlpz8%2F1ULJbSWjK1tE0VaSFon32%2FgbVfyuagpMjS&X-Amz-Signature=c7934a995b798bb3358aca5ee01bd21d1ef2e6d95e7e3b17e11685e9957d9fc0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3FHQR4%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFustEfRmukt7aWURUXspkUFZ3IZFyIyoIgBFnQpR1kCAiEA0c3VrWtc2igtt4ixL420Xh6WuCr%2B7kCq2svqUIi2SXIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAozm%2Fe5CGRuQUJ4gircA4THdWzoRlZ8CyvwaLCAN8JEoj%2B3yvx8cHu%2BEZQxhFOOEIqLI10YrfB7F%2Bc3GsMVl2bRLK1iUBSWe7VV6Hn9FUrJaN6RsyiWuwh8AogZKt1QPCbc%2FkBJnQzbPW3xMlX7UxHQvD3P9w5I02vZ1eJYlHZq6SyrNXPHFc6D3eXTcmx2BWSPnbgKonG9iZS18R2hpw20YKysvzHyYzrrZsV3Yy0TBYjwC0Jivm0R2gbHBSBuZEsoz%2BhVoJAu2uv3rWqpSdi%2Fdv%2BeMbsGjCgYDxm7Csl8Ywzj4duz0odZq8ntDKdGV%2BPJyg8OAba8WOwOVLHrWKxqxA4xiTtcFziU9q%2F3BrjwK1%2BIJHTLCOAZWVnlo93TQcTxxe8XpQnZ%2FiCqTCiKi9YhxF3nKii68J7C6bKxYuMsDZwTUkAwV8c5LKa0GoDvZk15PIG2WPj1BrjikEDnIqbsq2h1iyVXhiHVAvhp7IfUxzjqXJt0EX98zQZHYRwAfdwqJFxWH9dv3tMpjb%2BUm3GVrcmYC%2BfjQxvuv0jpYziN5cLgMCiT7bW9Uku2KYpVW4hba5rCpgKaWLWXCh8g%2Fs8Ubqo%2B1pWYcJMcAPHyiyA4bZCHUSuZ4s%2FCkPdR1n0RYrOKdUSy9YYJKMslMKOkxb8GOqUBchxup7LNwVN21bBgSG8lSSI8oakrStUNccSp2lPYr9HyjpKQ%2BjqhvUUuypdAcQTbZujsOLwKIBpgDONsr%2BcNIYrTgeSY9OVT%2Fb%2B%2BZdoUDJXKNt1z9C4e8Sh49FYm81I96ID%2Bxoo0z5q6Qj3x%2BslLDaA0FWCXQphm9YKp6Zwb3Z%2B3zszZvLfaRlpz8%2F1ULJbSWjK1tE0VaSFon32%2FgbVfyuagpMjS&X-Amz-Signature=68bbbfe998e0e66aebbc230837c69634d5a5bff2bfcc79476219523f14095f9e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3FHQR4%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFustEfRmukt7aWURUXspkUFZ3IZFyIyoIgBFnQpR1kCAiEA0c3VrWtc2igtt4ixL420Xh6WuCr%2B7kCq2svqUIi2SXIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAozm%2Fe5CGRuQUJ4gircA4THdWzoRlZ8CyvwaLCAN8JEoj%2B3yvx8cHu%2BEZQxhFOOEIqLI10YrfB7F%2Bc3GsMVl2bRLK1iUBSWe7VV6Hn9FUrJaN6RsyiWuwh8AogZKt1QPCbc%2FkBJnQzbPW3xMlX7UxHQvD3P9w5I02vZ1eJYlHZq6SyrNXPHFc6D3eXTcmx2BWSPnbgKonG9iZS18R2hpw20YKysvzHyYzrrZsV3Yy0TBYjwC0Jivm0R2gbHBSBuZEsoz%2BhVoJAu2uv3rWqpSdi%2Fdv%2BeMbsGjCgYDxm7Csl8Ywzj4duz0odZq8ntDKdGV%2BPJyg8OAba8WOwOVLHrWKxqxA4xiTtcFziU9q%2F3BrjwK1%2BIJHTLCOAZWVnlo93TQcTxxe8XpQnZ%2FiCqTCiKi9YhxF3nKii68J7C6bKxYuMsDZwTUkAwV8c5LKa0GoDvZk15PIG2WPj1BrjikEDnIqbsq2h1iyVXhiHVAvhp7IfUxzjqXJt0EX98zQZHYRwAfdwqJFxWH9dv3tMpjb%2BUm3GVrcmYC%2BfjQxvuv0jpYziN5cLgMCiT7bW9Uku2KYpVW4hba5rCpgKaWLWXCh8g%2Fs8Ubqo%2B1pWYcJMcAPHyiyA4bZCHUSuZ4s%2FCkPdR1n0RYrOKdUSy9YYJKMslMKOkxb8GOqUBchxup7LNwVN21bBgSG8lSSI8oakrStUNccSp2lPYr9HyjpKQ%2BjqhvUUuypdAcQTbZujsOLwKIBpgDONsr%2BcNIYrTgeSY9OVT%2Fb%2B%2BZdoUDJXKNt1z9C4e8Sh49FYm81I96ID%2Bxoo0z5q6Qj3x%2BslLDaA0FWCXQphm9YKp6Zwb3Z%2B3zszZvLfaRlpz8%2F1ULJbSWjK1tE0VaSFon32%2FgbVfyuagpMjS&X-Amz-Signature=579b0a3ba423cbebe7ada0d5a4a5cdf7fdf4457261f26b7d7c2853efd9b429ee&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3FHQR4%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFustEfRmukt7aWURUXspkUFZ3IZFyIyoIgBFnQpR1kCAiEA0c3VrWtc2igtt4ixL420Xh6WuCr%2B7kCq2svqUIi2SXIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAozm%2Fe5CGRuQUJ4gircA4THdWzoRlZ8CyvwaLCAN8JEoj%2B3yvx8cHu%2BEZQxhFOOEIqLI10YrfB7F%2Bc3GsMVl2bRLK1iUBSWe7VV6Hn9FUrJaN6RsyiWuwh8AogZKt1QPCbc%2FkBJnQzbPW3xMlX7UxHQvD3P9w5I02vZ1eJYlHZq6SyrNXPHFc6D3eXTcmx2BWSPnbgKonG9iZS18R2hpw20YKysvzHyYzrrZsV3Yy0TBYjwC0Jivm0R2gbHBSBuZEsoz%2BhVoJAu2uv3rWqpSdi%2Fdv%2BeMbsGjCgYDxm7Csl8Ywzj4duz0odZq8ntDKdGV%2BPJyg8OAba8WOwOVLHrWKxqxA4xiTtcFziU9q%2F3BrjwK1%2BIJHTLCOAZWVnlo93TQcTxxe8XpQnZ%2FiCqTCiKi9YhxF3nKii68J7C6bKxYuMsDZwTUkAwV8c5LKa0GoDvZk15PIG2WPj1BrjikEDnIqbsq2h1iyVXhiHVAvhp7IfUxzjqXJt0EX98zQZHYRwAfdwqJFxWH9dv3tMpjb%2BUm3GVrcmYC%2BfjQxvuv0jpYziN5cLgMCiT7bW9Uku2KYpVW4hba5rCpgKaWLWXCh8g%2Fs8Ubqo%2B1pWYcJMcAPHyiyA4bZCHUSuZ4s%2FCkPdR1n0RYrOKdUSy9YYJKMslMKOkxb8GOqUBchxup7LNwVN21bBgSG8lSSI8oakrStUNccSp2lPYr9HyjpKQ%2BjqhvUUuypdAcQTbZujsOLwKIBpgDONsr%2BcNIYrTgeSY9OVT%2Fb%2B%2BZdoUDJXKNt1z9C4e8Sh49FYm81I96ID%2Bxoo0z5q6Qj3x%2BslLDaA0FWCXQphm9YKp6Zwb3Z%2B3zszZvLfaRlpz8%2F1ULJbSWjK1tE0VaSFon32%2FgbVfyuagpMjS&X-Amz-Signature=e35154b3020244417e31934aa346946217d6d220dbb29e6c614d6b07dbbbb4d6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3FHQR4%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFustEfRmukt7aWURUXspkUFZ3IZFyIyoIgBFnQpR1kCAiEA0c3VrWtc2igtt4ixL420Xh6WuCr%2B7kCq2svqUIi2SXIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAozm%2Fe5CGRuQUJ4gircA4THdWzoRlZ8CyvwaLCAN8JEoj%2B3yvx8cHu%2BEZQxhFOOEIqLI10YrfB7F%2Bc3GsMVl2bRLK1iUBSWe7VV6Hn9FUrJaN6RsyiWuwh8AogZKt1QPCbc%2FkBJnQzbPW3xMlX7UxHQvD3P9w5I02vZ1eJYlHZq6SyrNXPHFc6D3eXTcmx2BWSPnbgKonG9iZS18R2hpw20YKysvzHyYzrrZsV3Yy0TBYjwC0Jivm0R2gbHBSBuZEsoz%2BhVoJAu2uv3rWqpSdi%2Fdv%2BeMbsGjCgYDxm7Csl8Ywzj4duz0odZq8ntDKdGV%2BPJyg8OAba8WOwOVLHrWKxqxA4xiTtcFziU9q%2F3BrjwK1%2BIJHTLCOAZWVnlo93TQcTxxe8XpQnZ%2FiCqTCiKi9YhxF3nKii68J7C6bKxYuMsDZwTUkAwV8c5LKa0GoDvZk15PIG2WPj1BrjikEDnIqbsq2h1iyVXhiHVAvhp7IfUxzjqXJt0EX98zQZHYRwAfdwqJFxWH9dv3tMpjb%2BUm3GVrcmYC%2BfjQxvuv0jpYziN5cLgMCiT7bW9Uku2KYpVW4hba5rCpgKaWLWXCh8g%2Fs8Ubqo%2B1pWYcJMcAPHyiyA4bZCHUSuZ4s%2FCkPdR1n0RYrOKdUSy9YYJKMslMKOkxb8GOqUBchxup7LNwVN21bBgSG8lSSI8oakrStUNccSp2lPYr9HyjpKQ%2BjqhvUUuypdAcQTbZujsOLwKIBpgDONsr%2BcNIYrTgeSY9OVT%2Fb%2B%2BZdoUDJXKNt1z9C4e8Sh49FYm81I96ID%2Bxoo0z5q6Qj3x%2BslLDaA0FWCXQphm9YKp6Zwb3Z%2B3zszZvLfaRlpz8%2F1ULJbSWjK1tE0VaSFon32%2FgbVfyuagpMjS&X-Amz-Signature=83f61306a962e3e319dba50033947d89fa430cfb641cb861cb76396a08e18b49&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3FHQR4%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFustEfRmukt7aWURUXspkUFZ3IZFyIyoIgBFnQpR1kCAiEA0c3VrWtc2igtt4ixL420Xh6WuCr%2B7kCq2svqUIi2SXIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAozm%2Fe5CGRuQUJ4gircA4THdWzoRlZ8CyvwaLCAN8JEoj%2B3yvx8cHu%2BEZQxhFOOEIqLI10YrfB7F%2Bc3GsMVl2bRLK1iUBSWe7VV6Hn9FUrJaN6RsyiWuwh8AogZKt1QPCbc%2FkBJnQzbPW3xMlX7UxHQvD3P9w5I02vZ1eJYlHZq6SyrNXPHFc6D3eXTcmx2BWSPnbgKonG9iZS18R2hpw20YKysvzHyYzrrZsV3Yy0TBYjwC0Jivm0R2gbHBSBuZEsoz%2BhVoJAu2uv3rWqpSdi%2Fdv%2BeMbsGjCgYDxm7Csl8Ywzj4duz0odZq8ntDKdGV%2BPJyg8OAba8WOwOVLHrWKxqxA4xiTtcFziU9q%2F3BrjwK1%2BIJHTLCOAZWVnlo93TQcTxxe8XpQnZ%2FiCqTCiKi9YhxF3nKii68J7C6bKxYuMsDZwTUkAwV8c5LKa0GoDvZk15PIG2WPj1BrjikEDnIqbsq2h1iyVXhiHVAvhp7IfUxzjqXJt0EX98zQZHYRwAfdwqJFxWH9dv3tMpjb%2BUm3GVrcmYC%2BfjQxvuv0jpYziN5cLgMCiT7bW9Uku2KYpVW4hba5rCpgKaWLWXCh8g%2Fs8Ubqo%2B1pWYcJMcAPHyiyA4bZCHUSuZ4s%2FCkPdR1n0RYrOKdUSy9YYJKMslMKOkxb8GOqUBchxup7LNwVN21bBgSG8lSSI8oakrStUNccSp2lPYr9HyjpKQ%2BjqhvUUuypdAcQTbZujsOLwKIBpgDONsr%2BcNIYrTgeSY9OVT%2Fb%2B%2BZdoUDJXKNt1z9C4e8Sh49FYm81I96ID%2Bxoo0z5q6Qj3x%2BslLDaA0FWCXQphm9YKp6Zwb3Z%2B3zszZvLfaRlpz8%2F1ULJbSWjK1tE0VaSFon32%2FgbVfyuagpMjS&X-Amz-Signature=f7fb6f367db3dc38a39c920a6e1246368516c5798c50de90bb46448cbf7c0a6c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3FHQR4%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFustEfRmukt7aWURUXspkUFZ3IZFyIyoIgBFnQpR1kCAiEA0c3VrWtc2igtt4ixL420Xh6WuCr%2B7kCq2svqUIi2SXIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAozm%2Fe5CGRuQUJ4gircA4THdWzoRlZ8CyvwaLCAN8JEoj%2B3yvx8cHu%2BEZQxhFOOEIqLI10YrfB7F%2Bc3GsMVl2bRLK1iUBSWe7VV6Hn9FUrJaN6RsyiWuwh8AogZKt1QPCbc%2FkBJnQzbPW3xMlX7UxHQvD3P9w5I02vZ1eJYlHZq6SyrNXPHFc6D3eXTcmx2BWSPnbgKonG9iZS18R2hpw20YKysvzHyYzrrZsV3Yy0TBYjwC0Jivm0R2gbHBSBuZEsoz%2BhVoJAu2uv3rWqpSdi%2Fdv%2BeMbsGjCgYDxm7Csl8Ywzj4duz0odZq8ntDKdGV%2BPJyg8OAba8WOwOVLHrWKxqxA4xiTtcFziU9q%2F3BrjwK1%2BIJHTLCOAZWVnlo93TQcTxxe8XpQnZ%2FiCqTCiKi9YhxF3nKii68J7C6bKxYuMsDZwTUkAwV8c5LKa0GoDvZk15PIG2WPj1BrjikEDnIqbsq2h1iyVXhiHVAvhp7IfUxzjqXJt0EX98zQZHYRwAfdwqJFxWH9dv3tMpjb%2BUm3GVrcmYC%2BfjQxvuv0jpYziN5cLgMCiT7bW9Uku2KYpVW4hba5rCpgKaWLWXCh8g%2Fs8Ubqo%2B1pWYcJMcAPHyiyA4bZCHUSuZ4s%2FCkPdR1n0RYrOKdUSy9YYJKMslMKOkxb8GOqUBchxup7LNwVN21bBgSG8lSSI8oakrStUNccSp2lPYr9HyjpKQ%2BjqhvUUuypdAcQTbZujsOLwKIBpgDONsr%2BcNIYrTgeSY9OVT%2Fb%2B%2BZdoUDJXKNt1z9C4e8Sh49FYm81I96ID%2Bxoo0z5q6Qj3x%2BslLDaA0FWCXQphm9YKp6Zwb3Z%2B3zszZvLfaRlpz8%2F1ULJbSWjK1tE0VaSFon32%2FgbVfyuagpMjS&X-Amz-Signature=3bbd9e267afb66a47c370bafebe4dc27a02c87c278417245f9e2f329fb9a5aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
