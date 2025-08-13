---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMYEBBA7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECSQdcwS2jOQf2L8DlVWy3eWXIWX%2FJxTz79E5u8pg8GAiEAkUEXPnLGiopgaD2QV2eqS%2FXxI%2BAfCXPrdazf2u7PgIUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDENwM6ecmPjRy7USaCrcA22ifobc7cNIMrqU9pX3kd8eBq67zJ6leYUveHeDJ76EZ52rudYpVTPPyyZrLpQXYxLJnDZD5OoUiNkj3ElQLarW3NdziuwIvw0dZfPoEQaKKMT1gs0hwCvgGXJFnz8pIGK7XCOGvfUdp1SVw5D4%2FS8LQmRGfqZ3pMYsWUpEXEYq41zpe6F2VkcaO%2F8qXJ72NJDKWr8lMMQ1HdEOwKvIkvWYlXvA8EhQYL9Zb3o%2FHpyDu2JUD2EsHGzgFl0HHCzU5nCyYlm0TF6DQ6WCSMrupVykkGxYtzjG659F9qN86drkqgjKUij8ZaKatRUyNvpRXZH7fjWHMYE%2FmR38k7dd3hjj0QXrqYnZTZ8Py6%2BhI9nXNQg9qQPD61Q%2BdJbJuQSqwhnwkwRhV%2BfIfyOwVpWdF0J2dCYOtwqdEvc96v%2BfATZBHb1BIPSbo1eB2WhwG%2FZod7C8vbv2%2FWXWlVfErQ2Xt%2Bczre27e3pc8aAix64XAKCaoW6w55Kp6uJNH16AsCzWHmZhjQeKw7v3NbzYKfleX%2BsbzTaCwVblQtat16NX2hWIgLFkJDC%2BwAiZ%2FU2LZbZgVf5tXr%2Fk%2BrVgoxf8ll2e54BTbV6nAhWojdDIxhvRK%2BqYtnFtWyek%2BMUw8giSMJmH8MQGOqUBpQdPj63SQROZjgiIvWKhzHu0izyt71HAUnTV%2Bq7YefrsXUxrbetjoguLyqyBpzhKs4t48EnX4o1si3Jjf5GquECV83Qa0Zcbk5KscthqXeRDfLfiP7vw4wcUvY2f%2BMvVnbYxM8Je2VNGm%2B9wAFVde6FT%2FWl1CXa3D2i%2FFxvJNkomrNdvsugAxokC%2BK4rAOyUDp1C7zWX2oTmw0S8jOHTOlERcnLe&X-Amz-Signature=4f964205b760a8fb3720436ed7c3db2c13837781b846bb23a01128d26ae453c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMYEBBA7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECSQdcwS2jOQf2L8DlVWy3eWXIWX%2FJxTz79E5u8pg8GAiEAkUEXPnLGiopgaD2QV2eqS%2FXxI%2BAfCXPrdazf2u7PgIUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDENwM6ecmPjRy7USaCrcA22ifobc7cNIMrqU9pX3kd8eBq67zJ6leYUveHeDJ76EZ52rudYpVTPPyyZrLpQXYxLJnDZD5OoUiNkj3ElQLarW3NdziuwIvw0dZfPoEQaKKMT1gs0hwCvgGXJFnz8pIGK7XCOGvfUdp1SVw5D4%2FS8LQmRGfqZ3pMYsWUpEXEYq41zpe6F2VkcaO%2F8qXJ72NJDKWr8lMMQ1HdEOwKvIkvWYlXvA8EhQYL9Zb3o%2FHpyDu2JUD2EsHGzgFl0HHCzU5nCyYlm0TF6DQ6WCSMrupVykkGxYtzjG659F9qN86drkqgjKUij8ZaKatRUyNvpRXZH7fjWHMYE%2FmR38k7dd3hjj0QXrqYnZTZ8Py6%2BhI9nXNQg9qQPD61Q%2BdJbJuQSqwhnwkwRhV%2BfIfyOwVpWdF0J2dCYOtwqdEvc96v%2BfATZBHb1BIPSbo1eB2WhwG%2FZod7C8vbv2%2FWXWlVfErQ2Xt%2Bczre27e3pc8aAix64XAKCaoW6w55Kp6uJNH16AsCzWHmZhjQeKw7v3NbzYKfleX%2BsbzTaCwVblQtat16NX2hWIgLFkJDC%2BwAiZ%2FU2LZbZgVf5tXr%2Fk%2BrVgoxf8ll2e54BTbV6nAhWojdDIxhvRK%2BqYtnFtWyek%2BMUw8giSMJmH8MQGOqUBpQdPj63SQROZjgiIvWKhzHu0izyt71HAUnTV%2Bq7YefrsXUxrbetjoguLyqyBpzhKs4t48EnX4o1si3Jjf5GquECV83Qa0Zcbk5KscthqXeRDfLfiP7vw4wcUvY2f%2BMvVnbYxM8Je2VNGm%2B9wAFVde6FT%2FWl1CXa3D2i%2FFxvJNkomrNdvsugAxokC%2BK4rAOyUDp1C7zWX2oTmw0S8jOHTOlERcnLe&X-Amz-Signature=0604aabd99fc0bcd4af33d1a0b3c3a89d4c98fd3e4458b0e0566206cb039909b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMYEBBA7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECSQdcwS2jOQf2L8DlVWy3eWXIWX%2FJxTz79E5u8pg8GAiEAkUEXPnLGiopgaD2QV2eqS%2FXxI%2BAfCXPrdazf2u7PgIUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDENwM6ecmPjRy7USaCrcA22ifobc7cNIMrqU9pX3kd8eBq67zJ6leYUveHeDJ76EZ52rudYpVTPPyyZrLpQXYxLJnDZD5OoUiNkj3ElQLarW3NdziuwIvw0dZfPoEQaKKMT1gs0hwCvgGXJFnz8pIGK7XCOGvfUdp1SVw5D4%2FS8LQmRGfqZ3pMYsWUpEXEYq41zpe6F2VkcaO%2F8qXJ72NJDKWr8lMMQ1HdEOwKvIkvWYlXvA8EhQYL9Zb3o%2FHpyDu2JUD2EsHGzgFl0HHCzU5nCyYlm0TF6DQ6WCSMrupVykkGxYtzjG659F9qN86drkqgjKUij8ZaKatRUyNvpRXZH7fjWHMYE%2FmR38k7dd3hjj0QXrqYnZTZ8Py6%2BhI9nXNQg9qQPD61Q%2BdJbJuQSqwhnwkwRhV%2BfIfyOwVpWdF0J2dCYOtwqdEvc96v%2BfATZBHb1BIPSbo1eB2WhwG%2FZod7C8vbv2%2FWXWlVfErQ2Xt%2Bczre27e3pc8aAix64XAKCaoW6w55Kp6uJNH16AsCzWHmZhjQeKw7v3NbzYKfleX%2BsbzTaCwVblQtat16NX2hWIgLFkJDC%2BwAiZ%2FU2LZbZgVf5tXr%2Fk%2BrVgoxf8ll2e54BTbV6nAhWojdDIxhvRK%2BqYtnFtWyek%2BMUw8giSMJmH8MQGOqUBpQdPj63SQROZjgiIvWKhzHu0izyt71HAUnTV%2Bq7YefrsXUxrbetjoguLyqyBpzhKs4t48EnX4o1si3Jjf5GquECV83Qa0Zcbk5KscthqXeRDfLfiP7vw4wcUvY2f%2BMvVnbYxM8Je2VNGm%2B9wAFVde6FT%2FWl1CXa3D2i%2FFxvJNkomrNdvsugAxokC%2BK4rAOyUDp1C7zWX2oTmw0S8jOHTOlERcnLe&X-Amz-Signature=223a298be2d28ed5d80bdbefc3d10cb40a433f822f90723b3bd438a889e9b4f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMYEBBA7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECSQdcwS2jOQf2L8DlVWy3eWXIWX%2FJxTz79E5u8pg8GAiEAkUEXPnLGiopgaD2QV2eqS%2FXxI%2BAfCXPrdazf2u7PgIUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDENwM6ecmPjRy7USaCrcA22ifobc7cNIMrqU9pX3kd8eBq67zJ6leYUveHeDJ76EZ52rudYpVTPPyyZrLpQXYxLJnDZD5OoUiNkj3ElQLarW3NdziuwIvw0dZfPoEQaKKMT1gs0hwCvgGXJFnz8pIGK7XCOGvfUdp1SVw5D4%2FS8LQmRGfqZ3pMYsWUpEXEYq41zpe6F2VkcaO%2F8qXJ72NJDKWr8lMMQ1HdEOwKvIkvWYlXvA8EhQYL9Zb3o%2FHpyDu2JUD2EsHGzgFl0HHCzU5nCyYlm0TF6DQ6WCSMrupVykkGxYtzjG659F9qN86drkqgjKUij8ZaKatRUyNvpRXZH7fjWHMYE%2FmR38k7dd3hjj0QXrqYnZTZ8Py6%2BhI9nXNQg9qQPD61Q%2BdJbJuQSqwhnwkwRhV%2BfIfyOwVpWdF0J2dCYOtwqdEvc96v%2BfATZBHb1BIPSbo1eB2WhwG%2FZod7C8vbv2%2FWXWlVfErQ2Xt%2Bczre27e3pc8aAix64XAKCaoW6w55Kp6uJNH16AsCzWHmZhjQeKw7v3NbzYKfleX%2BsbzTaCwVblQtat16NX2hWIgLFkJDC%2BwAiZ%2FU2LZbZgVf5tXr%2Fk%2BrVgoxf8ll2e54BTbV6nAhWojdDIxhvRK%2BqYtnFtWyek%2BMUw8giSMJmH8MQGOqUBpQdPj63SQROZjgiIvWKhzHu0izyt71HAUnTV%2Bq7YefrsXUxrbetjoguLyqyBpzhKs4t48EnX4o1si3Jjf5GquECV83Qa0Zcbk5KscthqXeRDfLfiP7vw4wcUvY2f%2BMvVnbYxM8Je2VNGm%2B9wAFVde6FT%2FWl1CXa3D2i%2FFxvJNkomrNdvsugAxokC%2BK4rAOyUDp1C7zWX2oTmw0S8jOHTOlERcnLe&X-Amz-Signature=92ef8805d80abea58c38b3bde0d81fa4d2f88d2a93e98c82671a2c6d1807a80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMYEBBA7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECSQdcwS2jOQf2L8DlVWy3eWXIWX%2FJxTz79E5u8pg8GAiEAkUEXPnLGiopgaD2QV2eqS%2FXxI%2BAfCXPrdazf2u7PgIUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDENwM6ecmPjRy7USaCrcA22ifobc7cNIMrqU9pX3kd8eBq67zJ6leYUveHeDJ76EZ52rudYpVTPPyyZrLpQXYxLJnDZD5OoUiNkj3ElQLarW3NdziuwIvw0dZfPoEQaKKMT1gs0hwCvgGXJFnz8pIGK7XCOGvfUdp1SVw5D4%2FS8LQmRGfqZ3pMYsWUpEXEYq41zpe6F2VkcaO%2F8qXJ72NJDKWr8lMMQ1HdEOwKvIkvWYlXvA8EhQYL9Zb3o%2FHpyDu2JUD2EsHGzgFl0HHCzU5nCyYlm0TF6DQ6WCSMrupVykkGxYtzjG659F9qN86drkqgjKUij8ZaKatRUyNvpRXZH7fjWHMYE%2FmR38k7dd3hjj0QXrqYnZTZ8Py6%2BhI9nXNQg9qQPD61Q%2BdJbJuQSqwhnwkwRhV%2BfIfyOwVpWdF0J2dCYOtwqdEvc96v%2BfATZBHb1BIPSbo1eB2WhwG%2FZod7C8vbv2%2FWXWlVfErQ2Xt%2Bczre27e3pc8aAix64XAKCaoW6w55Kp6uJNH16AsCzWHmZhjQeKw7v3NbzYKfleX%2BsbzTaCwVblQtat16NX2hWIgLFkJDC%2BwAiZ%2FU2LZbZgVf5tXr%2Fk%2BrVgoxf8ll2e54BTbV6nAhWojdDIxhvRK%2BqYtnFtWyek%2BMUw8giSMJmH8MQGOqUBpQdPj63SQROZjgiIvWKhzHu0izyt71HAUnTV%2Bq7YefrsXUxrbetjoguLyqyBpzhKs4t48EnX4o1si3Jjf5GquECV83Qa0Zcbk5KscthqXeRDfLfiP7vw4wcUvY2f%2BMvVnbYxM8Je2VNGm%2B9wAFVde6FT%2FWl1CXa3D2i%2FFxvJNkomrNdvsugAxokC%2BK4rAOyUDp1C7zWX2oTmw0S8jOHTOlERcnLe&X-Amz-Signature=1a2b19e816204af62e765c9e1936d014f1faac0306ee0ca295cc9dbb3a0adf68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMYEBBA7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECSQdcwS2jOQf2L8DlVWy3eWXIWX%2FJxTz79E5u8pg8GAiEAkUEXPnLGiopgaD2QV2eqS%2FXxI%2BAfCXPrdazf2u7PgIUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDENwM6ecmPjRy7USaCrcA22ifobc7cNIMrqU9pX3kd8eBq67zJ6leYUveHeDJ76EZ52rudYpVTPPyyZrLpQXYxLJnDZD5OoUiNkj3ElQLarW3NdziuwIvw0dZfPoEQaKKMT1gs0hwCvgGXJFnz8pIGK7XCOGvfUdp1SVw5D4%2FS8LQmRGfqZ3pMYsWUpEXEYq41zpe6F2VkcaO%2F8qXJ72NJDKWr8lMMQ1HdEOwKvIkvWYlXvA8EhQYL9Zb3o%2FHpyDu2JUD2EsHGzgFl0HHCzU5nCyYlm0TF6DQ6WCSMrupVykkGxYtzjG659F9qN86drkqgjKUij8ZaKatRUyNvpRXZH7fjWHMYE%2FmR38k7dd3hjj0QXrqYnZTZ8Py6%2BhI9nXNQg9qQPD61Q%2BdJbJuQSqwhnwkwRhV%2BfIfyOwVpWdF0J2dCYOtwqdEvc96v%2BfATZBHb1BIPSbo1eB2WhwG%2FZod7C8vbv2%2FWXWlVfErQ2Xt%2Bczre27e3pc8aAix64XAKCaoW6w55Kp6uJNH16AsCzWHmZhjQeKw7v3NbzYKfleX%2BsbzTaCwVblQtat16NX2hWIgLFkJDC%2BwAiZ%2FU2LZbZgVf5tXr%2Fk%2BrVgoxf8ll2e54BTbV6nAhWojdDIxhvRK%2BqYtnFtWyek%2BMUw8giSMJmH8MQGOqUBpQdPj63SQROZjgiIvWKhzHu0izyt71HAUnTV%2Bq7YefrsXUxrbetjoguLyqyBpzhKs4t48EnX4o1si3Jjf5GquECV83Qa0Zcbk5KscthqXeRDfLfiP7vw4wcUvY2f%2BMvVnbYxM8Je2VNGm%2B9wAFVde6FT%2FWl1CXa3D2i%2FFxvJNkomrNdvsugAxokC%2BK4rAOyUDp1C7zWX2oTmw0S8jOHTOlERcnLe&X-Amz-Signature=6c69ae6813f3eb7c5b28d947e0fbf303b0cb7eb6bbff681de425bccdf8a78ef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMYEBBA7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECSQdcwS2jOQf2L8DlVWy3eWXIWX%2FJxTz79E5u8pg8GAiEAkUEXPnLGiopgaD2QV2eqS%2FXxI%2BAfCXPrdazf2u7PgIUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDENwM6ecmPjRy7USaCrcA22ifobc7cNIMrqU9pX3kd8eBq67zJ6leYUveHeDJ76EZ52rudYpVTPPyyZrLpQXYxLJnDZD5OoUiNkj3ElQLarW3NdziuwIvw0dZfPoEQaKKMT1gs0hwCvgGXJFnz8pIGK7XCOGvfUdp1SVw5D4%2FS8LQmRGfqZ3pMYsWUpEXEYq41zpe6F2VkcaO%2F8qXJ72NJDKWr8lMMQ1HdEOwKvIkvWYlXvA8EhQYL9Zb3o%2FHpyDu2JUD2EsHGzgFl0HHCzU5nCyYlm0TF6DQ6WCSMrupVykkGxYtzjG659F9qN86drkqgjKUij8ZaKatRUyNvpRXZH7fjWHMYE%2FmR38k7dd3hjj0QXrqYnZTZ8Py6%2BhI9nXNQg9qQPD61Q%2BdJbJuQSqwhnwkwRhV%2BfIfyOwVpWdF0J2dCYOtwqdEvc96v%2BfATZBHb1BIPSbo1eB2WhwG%2FZod7C8vbv2%2FWXWlVfErQ2Xt%2Bczre27e3pc8aAix64XAKCaoW6w55Kp6uJNH16AsCzWHmZhjQeKw7v3NbzYKfleX%2BsbzTaCwVblQtat16NX2hWIgLFkJDC%2BwAiZ%2FU2LZbZgVf5tXr%2Fk%2BrVgoxf8ll2e54BTbV6nAhWojdDIxhvRK%2BqYtnFtWyek%2BMUw8giSMJmH8MQGOqUBpQdPj63SQROZjgiIvWKhzHu0izyt71HAUnTV%2Bq7YefrsXUxrbetjoguLyqyBpzhKs4t48EnX4o1si3Jjf5GquECV83Qa0Zcbk5KscthqXeRDfLfiP7vw4wcUvY2f%2BMvVnbYxM8Je2VNGm%2B9wAFVde6FT%2FWl1CXa3D2i%2FFxvJNkomrNdvsugAxokC%2BK4rAOyUDp1C7zWX2oTmw0S8jOHTOlERcnLe&X-Amz-Signature=f54648ddc5ad5b550ffbdaa16808a4593a491b362bbb0c768c05925fec94abbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
