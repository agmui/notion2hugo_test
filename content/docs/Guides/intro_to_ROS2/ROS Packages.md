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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3KVG5Y%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzpvBKDGVP3%2BJVw1VPVCJu%2B7if%2FK4RcrV9Sqyx%2BuT83AiBR7tcwjGQ7ddxPwyRloo2OjNKWlXyMZHS65rLnZBdqlCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjsESdEOAeTKH09tEKtwDewTdkzWjZjGUZ1x2aS3qjhBWQsuR5re8%2BZOnqs87xWlBXdlm5ZdMIR%2BTlLLv74zn9rViQ53PYuABtW0n4F3YTHsHbUhJ%2BYKpGE5F2S9BlDODGjkgHWhsLt%2F6yJhHEyOzcZljLOaYHr%2B%2BbdKyiUF6IxKpEj13ehXp505vQM857hlbo6PwY%2BlwMiDZA7sFz9ir7h%2FxtjGAzIaqijd%2BR17KZ%2BDY6sZhQp4rb422VloIMSYEL4UFjQreaTBryWEFtwrIpvn6oGcPsf325y63yaoDwdt2T9tXOijmYzX%2Fc4ylsXOhO8IJUTz6il76Q2lE98JJ00O6Hz5qCk1KLQ%2FQoZuhIeaaF4XTwX53R4cBJhPqG4BDiYsirTfAf6rllhRJ4RWYZluCIntq20wpUYWpO00zsKn9QaxJ%2FdIj3luYCnyEqIK6LPK5RJrgsQ0ZDAVY%2Fs0XfhfF7RIFY%2F1sDUptCzV6uZZFBaESYrPoSJsKEk0BkBMCwzuMwmpPfXRU%2Br0dw%2FPYQbf%2B9qNxvyqeEtjSXLjSUKKnJ3bTUgNLAg0mGsPq8eCG0RYcnigkEB5LSAYGH74YQ8XpEySAkwYqCA1BqXDB2BSFl%2BTesc%2FeMZrKIoeYkuVOw3ulXEDm7rMRWvgwjdyqvQY6pgG9acZgXf227JeGf8O7rCXsw69fZtTcKNhg9CTb3R%2ByFOGzE6pWNbdn8U%2BbQj77L7KyYaS2v3CxhqJdJcGnuwJaMX9C8O03ee4XRWnrR%2BO%2BDoEZOqjj7jPTNnkx5j97h8o%2BKdqlagMJxGj40eXUJlt70XKJOG9Id4LUe0QIodnpQzWNE6%2BjKqu7XwROxEc9PIUIRfg%2BaJk%2Bo0nf9gAHbtqZXOJs1ORC&X-Amz-Signature=0ecbdc3be378eae1642b11c33cbce51247e45927c05275156ba68f9269a0cd28&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3KVG5Y%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzpvBKDGVP3%2BJVw1VPVCJu%2B7if%2FK4RcrV9Sqyx%2BuT83AiBR7tcwjGQ7ddxPwyRloo2OjNKWlXyMZHS65rLnZBdqlCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjsESdEOAeTKH09tEKtwDewTdkzWjZjGUZ1x2aS3qjhBWQsuR5re8%2BZOnqs87xWlBXdlm5ZdMIR%2BTlLLv74zn9rViQ53PYuABtW0n4F3YTHsHbUhJ%2BYKpGE5F2S9BlDODGjkgHWhsLt%2F6yJhHEyOzcZljLOaYHr%2B%2BbdKyiUF6IxKpEj13ehXp505vQM857hlbo6PwY%2BlwMiDZA7sFz9ir7h%2FxtjGAzIaqijd%2BR17KZ%2BDY6sZhQp4rb422VloIMSYEL4UFjQreaTBryWEFtwrIpvn6oGcPsf325y63yaoDwdt2T9tXOijmYzX%2Fc4ylsXOhO8IJUTz6il76Q2lE98JJ00O6Hz5qCk1KLQ%2FQoZuhIeaaF4XTwX53R4cBJhPqG4BDiYsirTfAf6rllhRJ4RWYZluCIntq20wpUYWpO00zsKn9QaxJ%2FdIj3luYCnyEqIK6LPK5RJrgsQ0ZDAVY%2Fs0XfhfF7RIFY%2F1sDUptCzV6uZZFBaESYrPoSJsKEk0BkBMCwzuMwmpPfXRU%2Br0dw%2FPYQbf%2B9qNxvyqeEtjSXLjSUKKnJ3bTUgNLAg0mGsPq8eCG0RYcnigkEB5LSAYGH74YQ8XpEySAkwYqCA1BqXDB2BSFl%2BTesc%2FeMZrKIoeYkuVOw3ulXEDm7rMRWvgwjdyqvQY6pgG9acZgXf227JeGf8O7rCXsw69fZtTcKNhg9CTb3R%2ByFOGzE6pWNbdn8U%2BbQj77L7KyYaS2v3CxhqJdJcGnuwJaMX9C8O03ee4XRWnrR%2BO%2BDoEZOqjj7jPTNnkx5j97h8o%2BKdqlagMJxGj40eXUJlt70XKJOG9Id4LUe0QIodnpQzWNE6%2BjKqu7XwROxEc9PIUIRfg%2BaJk%2Bo0nf9gAHbtqZXOJs1ORC&X-Amz-Signature=adaae8bc36e0056e365fe0690b9052a8074d09634d21cc5bf315d2e39aabf6c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3KVG5Y%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzpvBKDGVP3%2BJVw1VPVCJu%2B7if%2FK4RcrV9Sqyx%2BuT83AiBR7tcwjGQ7ddxPwyRloo2OjNKWlXyMZHS65rLnZBdqlCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjsESdEOAeTKH09tEKtwDewTdkzWjZjGUZ1x2aS3qjhBWQsuR5re8%2BZOnqs87xWlBXdlm5ZdMIR%2BTlLLv74zn9rViQ53PYuABtW0n4F3YTHsHbUhJ%2BYKpGE5F2S9BlDODGjkgHWhsLt%2F6yJhHEyOzcZljLOaYHr%2B%2BbdKyiUF6IxKpEj13ehXp505vQM857hlbo6PwY%2BlwMiDZA7sFz9ir7h%2FxtjGAzIaqijd%2BR17KZ%2BDY6sZhQp4rb422VloIMSYEL4UFjQreaTBryWEFtwrIpvn6oGcPsf325y63yaoDwdt2T9tXOijmYzX%2Fc4ylsXOhO8IJUTz6il76Q2lE98JJ00O6Hz5qCk1KLQ%2FQoZuhIeaaF4XTwX53R4cBJhPqG4BDiYsirTfAf6rllhRJ4RWYZluCIntq20wpUYWpO00zsKn9QaxJ%2FdIj3luYCnyEqIK6LPK5RJrgsQ0ZDAVY%2Fs0XfhfF7RIFY%2F1sDUptCzV6uZZFBaESYrPoSJsKEk0BkBMCwzuMwmpPfXRU%2Br0dw%2FPYQbf%2B9qNxvyqeEtjSXLjSUKKnJ3bTUgNLAg0mGsPq8eCG0RYcnigkEB5LSAYGH74YQ8XpEySAkwYqCA1BqXDB2BSFl%2BTesc%2FeMZrKIoeYkuVOw3ulXEDm7rMRWvgwjdyqvQY6pgG9acZgXf227JeGf8O7rCXsw69fZtTcKNhg9CTb3R%2ByFOGzE6pWNbdn8U%2BbQj77L7KyYaS2v3CxhqJdJcGnuwJaMX9C8O03ee4XRWnrR%2BO%2BDoEZOqjj7jPTNnkx5j97h8o%2BKdqlagMJxGj40eXUJlt70XKJOG9Id4LUe0QIodnpQzWNE6%2BjKqu7XwROxEc9PIUIRfg%2BaJk%2Bo0nf9gAHbtqZXOJs1ORC&X-Amz-Signature=355fa5dd03e81f3a2395cac6c9922f5ea4a27c53be09e95d8b585f0e2c68fbdd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3KVG5Y%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzpvBKDGVP3%2BJVw1VPVCJu%2B7if%2FK4RcrV9Sqyx%2BuT83AiBR7tcwjGQ7ddxPwyRloo2OjNKWlXyMZHS65rLnZBdqlCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjsESdEOAeTKH09tEKtwDewTdkzWjZjGUZ1x2aS3qjhBWQsuR5re8%2BZOnqs87xWlBXdlm5ZdMIR%2BTlLLv74zn9rViQ53PYuABtW0n4F3YTHsHbUhJ%2BYKpGE5F2S9BlDODGjkgHWhsLt%2F6yJhHEyOzcZljLOaYHr%2B%2BbdKyiUF6IxKpEj13ehXp505vQM857hlbo6PwY%2BlwMiDZA7sFz9ir7h%2FxtjGAzIaqijd%2BR17KZ%2BDY6sZhQp4rb422VloIMSYEL4UFjQreaTBryWEFtwrIpvn6oGcPsf325y63yaoDwdt2T9tXOijmYzX%2Fc4ylsXOhO8IJUTz6il76Q2lE98JJ00O6Hz5qCk1KLQ%2FQoZuhIeaaF4XTwX53R4cBJhPqG4BDiYsirTfAf6rllhRJ4RWYZluCIntq20wpUYWpO00zsKn9QaxJ%2FdIj3luYCnyEqIK6LPK5RJrgsQ0ZDAVY%2Fs0XfhfF7RIFY%2F1sDUptCzV6uZZFBaESYrPoSJsKEk0BkBMCwzuMwmpPfXRU%2Br0dw%2FPYQbf%2B9qNxvyqeEtjSXLjSUKKnJ3bTUgNLAg0mGsPq8eCG0RYcnigkEB5LSAYGH74YQ8XpEySAkwYqCA1BqXDB2BSFl%2BTesc%2FeMZrKIoeYkuVOw3ulXEDm7rMRWvgwjdyqvQY6pgG9acZgXf227JeGf8O7rCXsw69fZtTcKNhg9CTb3R%2ByFOGzE6pWNbdn8U%2BbQj77L7KyYaS2v3CxhqJdJcGnuwJaMX9C8O03ee4XRWnrR%2BO%2BDoEZOqjj7jPTNnkx5j97h8o%2BKdqlagMJxGj40eXUJlt70XKJOG9Id4LUe0QIodnpQzWNE6%2BjKqu7XwROxEc9PIUIRfg%2BaJk%2Bo0nf9gAHbtqZXOJs1ORC&X-Amz-Signature=e5f5264002a1a967c6bc8f49bb96abc60f3f6815a43259c4bd4f208541c024f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3KVG5Y%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzpvBKDGVP3%2BJVw1VPVCJu%2B7if%2FK4RcrV9Sqyx%2BuT83AiBR7tcwjGQ7ddxPwyRloo2OjNKWlXyMZHS65rLnZBdqlCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjsESdEOAeTKH09tEKtwDewTdkzWjZjGUZ1x2aS3qjhBWQsuR5re8%2BZOnqs87xWlBXdlm5ZdMIR%2BTlLLv74zn9rViQ53PYuABtW0n4F3YTHsHbUhJ%2BYKpGE5F2S9BlDODGjkgHWhsLt%2F6yJhHEyOzcZljLOaYHr%2B%2BbdKyiUF6IxKpEj13ehXp505vQM857hlbo6PwY%2BlwMiDZA7sFz9ir7h%2FxtjGAzIaqijd%2BR17KZ%2BDY6sZhQp4rb422VloIMSYEL4UFjQreaTBryWEFtwrIpvn6oGcPsf325y63yaoDwdt2T9tXOijmYzX%2Fc4ylsXOhO8IJUTz6il76Q2lE98JJ00O6Hz5qCk1KLQ%2FQoZuhIeaaF4XTwX53R4cBJhPqG4BDiYsirTfAf6rllhRJ4RWYZluCIntq20wpUYWpO00zsKn9QaxJ%2FdIj3luYCnyEqIK6LPK5RJrgsQ0ZDAVY%2Fs0XfhfF7RIFY%2F1sDUptCzV6uZZFBaESYrPoSJsKEk0BkBMCwzuMwmpPfXRU%2Br0dw%2FPYQbf%2B9qNxvyqeEtjSXLjSUKKnJ3bTUgNLAg0mGsPq8eCG0RYcnigkEB5LSAYGH74YQ8XpEySAkwYqCA1BqXDB2BSFl%2BTesc%2FeMZrKIoeYkuVOw3ulXEDm7rMRWvgwjdyqvQY6pgG9acZgXf227JeGf8O7rCXsw69fZtTcKNhg9CTb3R%2ByFOGzE6pWNbdn8U%2BbQj77L7KyYaS2v3CxhqJdJcGnuwJaMX9C8O03ee4XRWnrR%2BO%2BDoEZOqjj7jPTNnkx5j97h8o%2BKdqlagMJxGj40eXUJlt70XKJOG9Id4LUe0QIodnpQzWNE6%2BjKqu7XwROxEc9PIUIRfg%2BaJk%2Bo0nf9gAHbtqZXOJs1ORC&X-Amz-Signature=0dab440481102998ab3ad6f97f5121d03f5faafa19ec13a964db668fa3d06341&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3KVG5Y%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzpvBKDGVP3%2BJVw1VPVCJu%2B7if%2FK4RcrV9Sqyx%2BuT83AiBR7tcwjGQ7ddxPwyRloo2OjNKWlXyMZHS65rLnZBdqlCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjsESdEOAeTKH09tEKtwDewTdkzWjZjGUZ1x2aS3qjhBWQsuR5re8%2BZOnqs87xWlBXdlm5ZdMIR%2BTlLLv74zn9rViQ53PYuABtW0n4F3YTHsHbUhJ%2BYKpGE5F2S9BlDODGjkgHWhsLt%2F6yJhHEyOzcZljLOaYHr%2B%2BbdKyiUF6IxKpEj13ehXp505vQM857hlbo6PwY%2BlwMiDZA7sFz9ir7h%2FxtjGAzIaqijd%2BR17KZ%2BDY6sZhQp4rb422VloIMSYEL4UFjQreaTBryWEFtwrIpvn6oGcPsf325y63yaoDwdt2T9tXOijmYzX%2Fc4ylsXOhO8IJUTz6il76Q2lE98JJ00O6Hz5qCk1KLQ%2FQoZuhIeaaF4XTwX53R4cBJhPqG4BDiYsirTfAf6rllhRJ4RWYZluCIntq20wpUYWpO00zsKn9QaxJ%2FdIj3luYCnyEqIK6LPK5RJrgsQ0ZDAVY%2Fs0XfhfF7RIFY%2F1sDUptCzV6uZZFBaESYrPoSJsKEk0BkBMCwzuMwmpPfXRU%2Br0dw%2FPYQbf%2B9qNxvyqeEtjSXLjSUKKnJ3bTUgNLAg0mGsPq8eCG0RYcnigkEB5LSAYGH74YQ8XpEySAkwYqCA1BqXDB2BSFl%2BTesc%2FeMZrKIoeYkuVOw3ulXEDm7rMRWvgwjdyqvQY6pgG9acZgXf227JeGf8O7rCXsw69fZtTcKNhg9CTb3R%2ByFOGzE6pWNbdn8U%2BbQj77L7KyYaS2v3CxhqJdJcGnuwJaMX9C8O03ee4XRWnrR%2BO%2BDoEZOqjj7jPTNnkx5j97h8o%2BKdqlagMJxGj40eXUJlt70XKJOG9Id4LUe0QIodnpQzWNE6%2BjKqu7XwROxEc9PIUIRfg%2BaJk%2Bo0nf9gAHbtqZXOJs1ORC&X-Amz-Signature=add91a26b80358e5ec643e3cbb77db163ee2e876eea46600e28f9c241ddadd28&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3KVG5Y%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzpvBKDGVP3%2BJVw1VPVCJu%2B7if%2FK4RcrV9Sqyx%2BuT83AiBR7tcwjGQ7ddxPwyRloo2OjNKWlXyMZHS65rLnZBdqlCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjsESdEOAeTKH09tEKtwDewTdkzWjZjGUZ1x2aS3qjhBWQsuR5re8%2BZOnqs87xWlBXdlm5ZdMIR%2BTlLLv74zn9rViQ53PYuABtW0n4F3YTHsHbUhJ%2BYKpGE5F2S9BlDODGjkgHWhsLt%2F6yJhHEyOzcZljLOaYHr%2B%2BbdKyiUF6IxKpEj13ehXp505vQM857hlbo6PwY%2BlwMiDZA7sFz9ir7h%2FxtjGAzIaqijd%2BR17KZ%2BDY6sZhQp4rb422VloIMSYEL4UFjQreaTBryWEFtwrIpvn6oGcPsf325y63yaoDwdt2T9tXOijmYzX%2Fc4ylsXOhO8IJUTz6il76Q2lE98JJ00O6Hz5qCk1KLQ%2FQoZuhIeaaF4XTwX53R4cBJhPqG4BDiYsirTfAf6rllhRJ4RWYZluCIntq20wpUYWpO00zsKn9QaxJ%2FdIj3luYCnyEqIK6LPK5RJrgsQ0ZDAVY%2Fs0XfhfF7RIFY%2F1sDUptCzV6uZZFBaESYrPoSJsKEk0BkBMCwzuMwmpPfXRU%2Br0dw%2FPYQbf%2B9qNxvyqeEtjSXLjSUKKnJ3bTUgNLAg0mGsPq8eCG0RYcnigkEB5LSAYGH74YQ8XpEySAkwYqCA1BqXDB2BSFl%2BTesc%2FeMZrKIoeYkuVOw3ulXEDm7rMRWvgwjdyqvQY6pgG9acZgXf227JeGf8O7rCXsw69fZtTcKNhg9CTb3R%2ByFOGzE6pWNbdn8U%2BbQj77L7KyYaS2v3CxhqJdJcGnuwJaMX9C8O03ee4XRWnrR%2BO%2BDoEZOqjj7jPTNnkx5j97h8o%2BKdqlagMJxGj40eXUJlt70XKJOG9Id4LUe0QIodnpQzWNE6%2BjKqu7XwROxEc9PIUIRfg%2BaJk%2Bo0nf9gAHbtqZXOJs1ORC&X-Amz-Signature=401a001f6ee5f3a32f625fa4f3bbb9ea50974e51fbed13433e770f33e020ddc1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
