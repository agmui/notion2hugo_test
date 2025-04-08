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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVT4KUI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCcd%2BcEJaJbOMsrSKx8Uuqi248oaH2ib0YdGlR8FP0GMQIhAKri7fj9QK5zDVreU%2FQJ6Bg0vBWostrG%2FrBnQO0sxA2mKv8DCHoQABoMNjM3NDIzMTgzODA1IgzzPsdkmRTfw2a6Hesq3AOjNoBZF1y%2FEum%2FIrbK%2F%2BImVHcZgDFGfvG4Im8XGZEmBpmSR402xGIYzAIGBIX7I27pKgpQeN%2FLdHO57ldzELI3k%2BOeWgrKC1fitJJJPSESe33J9zRZddb6ZisqKIfeiDGUxojd9qyZZnRICBzhA83qn5bhsZ11mDQhvA9HY07vUMpLgqjOLzqYj4U4zCKz3vqJt1VyqNlHNTEvLKOr8zYBONdG70d9upR%2BwCr%2B8iBa6sjNtp%2FnqVVrfWS%2BF5Rnj1GBj9sE9ZVkyl0nuOKha3e17KqcRDxER4961fvmqYJ6u0ZvS2rcDtTZg9MdfjSYHFVWoUqDDs6UOYtljMYZ7Yu4A6BLKb2Jh8LxTo3kReoE9rJ7SnvON4EIZxgKKNMkD3pCL5BQ%2FNWAmjsLZ6zwQ5rUqwFB8t1Z7NhMZTS%2F0znuVDOTDV%2BrZjLparCbFYIahUJWXtFWEErCxie%2BWkLMa0xZvq%2BXGpKvmjEjxIiXibktcnKy0Chu7hrbrU%2F3hiKPohy70a3UlZKXidLZcXCxoz8EgxTX3BEms%2Fq76E3Sqr43TJG2yEGWAjlj3h77pIoEQD0JA0aEKRxefkKcBwXBf8OzIL5Zhy0N8zxsKs1So5xBBLLAVjNKyIaCzToz9TDvodW%2FBjqkAW9jEp0iP0acz1MNrb%2BiiY70v1J6WeJMRW155eFkSZeLfkgxqnPaQUC2POICn%2BoRJAvjri7kgZVjxIuo1VKPVRnCQwzWBAt8BSl5og8KqwwDAn7dPYO80kd%2Fii93ahJWXGIIZQnbfZvSmiMUvSJXwT8ZA7M8QcAHs58uMaboSI96m7uFGJRsbpBZctATm57LOZUP%2FKv3mkMQ5vY1bE9vAq9%2BZOZ0&X-Amz-Signature=6f71cc3ce17910010663b11a033325677c70f34389ef7cf601fbf4b268ae609a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVT4KUI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCcd%2BcEJaJbOMsrSKx8Uuqi248oaH2ib0YdGlR8FP0GMQIhAKri7fj9QK5zDVreU%2FQJ6Bg0vBWostrG%2FrBnQO0sxA2mKv8DCHoQABoMNjM3NDIzMTgzODA1IgzzPsdkmRTfw2a6Hesq3AOjNoBZF1y%2FEum%2FIrbK%2F%2BImVHcZgDFGfvG4Im8XGZEmBpmSR402xGIYzAIGBIX7I27pKgpQeN%2FLdHO57ldzELI3k%2BOeWgrKC1fitJJJPSESe33J9zRZddb6ZisqKIfeiDGUxojd9qyZZnRICBzhA83qn5bhsZ11mDQhvA9HY07vUMpLgqjOLzqYj4U4zCKz3vqJt1VyqNlHNTEvLKOr8zYBONdG70d9upR%2BwCr%2B8iBa6sjNtp%2FnqVVrfWS%2BF5Rnj1GBj9sE9ZVkyl0nuOKha3e17KqcRDxER4961fvmqYJ6u0ZvS2rcDtTZg9MdfjSYHFVWoUqDDs6UOYtljMYZ7Yu4A6BLKb2Jh8LxTo3kReoE9rJ7SnvON4EIZxgKKNMkD3pCL5BQ%2FNWAmjsLZ6zwQ5rUqwFB8t1Z7NhMZTS%2F0znuVDOTDV%2BrZjLparCbFYIahUJWXtFWEErCxie%2BWkLMa0xZvq%2BXGpKvmjEjxIiXibktcnKy0Chu7hrbrU%2F3hiKPohy70a3UlZKXidLZcXCxoz8EgxTX3BEms%2Fq76E3Sqr43TJG2yEGWAjlj3h77pIoEQD0JA0aEKRxefkKcBwXBf8OzIL5Zhy0N8zxsKs1So5xBBLLAVjNKyIaCzToz9TDvodW%2FBjqkAW9jEp0iP0acz1MNrb%2BiiY70v1J6WeJMRW155eFkSZeLfkgxqnPaQUC2POICn%2BoRJAvjri7kgZVjxIuo1VKPVRnCQwzWBAt8BSl5og8KqwwDAn7dPYO80kd%2Fii93ahJWXGIIZQnbfZvSmiMUvSJXwT8ZA7M8QcAHs58uMaboSI96m7uFGJRsbpBZctATm57LOZUP%2FKv3mkMQ5vY1bE9vAq9%2BZOZ0&X-Amz-Signature=a126a89a9c46bf6be4503ef6fb9c9f58ce3ff28d8fd003f43bd4b4803d7b7a79&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVT4KUI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCcd%2BcEJaJbOMsrSKx8Uuqi248oaH2ib0YdGlR8FP0GMQIhAKri7fj9QK5zDVreU%2FQJ6Bg0vBWostrG%2FrBnQO0sxA2mKv8DCHoQABoMNjM3NDIzMTgzODA1IgzzPsdkmRTfw2a6Hesq3AOjNoBZF1y%2FEum%2FIrbK%2F%2BImVHcZgDFGfvG4Im8XGZEmBpmSR402xGIYzAIGBIX7I27pKgpQeN%2FLdHO57ldzELI3k%2BOeWgrKC1fitJJJPSESe33J9zRZddb6ZisqKIfeiDGUxojd9qyZZnRICBzhA83qn5bhsZ11mDQhvA9HY07vUMpLgqjOLzqYj4U4zCKz3vqJt1VyqNlHNTEvLKOr8zYBONdG70d9upR%2BwCr%2B8iBa6sjNtp%2FnqVVrfWS%2BF5Rnj1GBj9sE9ZVkyl0nuOKha3e17KqcRDxER4961fvmqYJ6u0ZvS2rcDtTZg9MdfjSYHFVWoUqDDs6UOYtljMYZ7Yu4A6BLKb2Jh8LxTo3kReoE9rJ7SnvON4EIZxgKKNMkD3pCL5BQ%2FNWAmjsLZ6zwQ5rUqwFB8t1Z7NhMZTS%2F0znuVDOTDV%2BrZjLparCbFYIahUJWXtFWEErCxie%2BWkLMa0xZvq%2BXGpKvmjEjxIiXibktcnKy0Chu7hrbrU%2F3hiKPohy70a3UlZKXidLZcXCxoz8EgxTX3BEms%2Fq76E3Sqr43TJG2yEGWAjlj3h77pIoEQD0JA0aEKRxefkKcBwXBf8OzIL5Zhy0N8zxsKs1So5xBBLLAVjNKyIaCzToz9TDvodW%2FBjqkAW9jEp0iP0acz1MNrb%2BiiY70v1J6WeJMRW155eFkSZeLfkgxqnPaQUC2POICn%2BoRJAvjri7kgZVjxIuo1VKPVRnCQwzWBAt8BSl5og8KqwwDAn7dPYO80kd%2Fii93ahJWXGIIZQnbfZvSmiMUvSJXwT8ZA7M8QcAHs58uMaboSI96m7uFGJRsbpBZctATm57LOZUP%2FKv3mkMQ5vY1bE9vAq9%2BZOZ0&X-Amz-Signature=6f3dd4d6b889193bba55c66dfe5e8b22bf960a8c559762612c35470bdb921036&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVT4KUI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCcd%2BcEJaJbOMsrSKx8Uuqi248oaH2ib0YdGlR8FP0GMQIhAKri7fj9QK5zDVreU%2FQJ6Bg0vBWostrG%2FrBnQO0sxA2mKv8DCHoQABoMNjM3NDIzMTgzODA1IgzzPsdkmRTfw2a6Hesq3AOjNoBZF1y%2FEum%2FIrbK%2F%2BImVHcZgDFGfvG4Im8XGZEmBpmSR402xGIYzAIGBIX7I27pKgpQeN%2FLdHO57ldzELI3k%2BOeWgrKC1fitJJJPSESe33J9zRZddb6ZisqKIfeiDGUxojd9qyZZnRICBzhA83qn5bhsZ11mDQhvA9HY07vUMpLgqjOLzqYj4U4zCKz3vqJt1VyqNlHNTEvLKOr8zYBONdG70d9upR%2BwCr%2B8iBa6sjNtp%2FnqVVrfWS%2BF5Rnj1GBj9sE9ZVkyl0nuOKha3e17KqcRDxER4961fvmqYJ6u0ZvS2rcDtTZg9MdfjSYHFVWoUqDDs6UOYtljMYZ7Yu4A6BLKb2Jh8LxTo3kReoE9rJ7SnvON4EIZxgKKNMkD3pCL5BQ%2FNWAmjsLZ6zwQ5rUqwFB8t1Z7NhMZTS%2F0znuVDOTDV%2BrZjLparCbFYIahUJWXtFWEErCxie%2BWkLMa0xZvq%2BXGpKvmjEjxIiXibktcnKy0Chu7hrbrU%2F3hiKPohy70a3UlZKXidLZcXCxoz8EgxTX3BEms%2Fq76E3Sqr43TJG2yEGWAjlj3h77pIoEQD0JA0aEKRxefkKcBwXBf8OzIL5Zhy0N8zxsKs1So5xBBLLAVjNKyIaCzToz9TDvodW%2FBjqkAW9jEp0iP0acz1MNrb%2BiiY70v1J6WeJMRW155eFkSZeLfkgxqnPaQUC2POICn%2BoRJAvjri7kgZVjxIuo1VKPVRnCQwzWBAt8BSl5og8KqwwDAn7dPYO80kd%2Fii93ahJWXGIIZQnbfZvSmiMUvSJXwT8ZA7M8QcAHs58uMaboSI96m7uFGJRsbpBZctATm57LOZUP%2FKv3mkMQ5vY1bE9vAq9%2BZOZ0&X-Amz-Signature=2cf683b85f9947368c6cb50b118e318d3e901b5ab41a68fabc6bc8ec97e97090&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVT4KUI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCcd%2BcEJaJbOMsrSKx8Uuqi248oaH2ib0YdGlR8FP0GMQIhAKri7fj9QK5zDVreU%2FQJ6Bg0vBWostrG%2FrBnQO0sxA2mKv8DCHoQABoMNjM3NDIzMTgzODA1IgzzPsdkmRTfw2a6Hesq3AOjNoBZF1y%2FEum%2FIrbK%2F%2BImVHcZgDFGfvG4Im8XGZEmBpmSR402xGIYzAIGBIX7I27pKgpQeN%2FLdHO57ldzELI3k%2BOeWgrKC1fitJJJPSESe33J9zRZddb6ZisqKIfeiDGUxojd9qyZZnRICBzhA83qn5bhsZ11mDQhvA9HY07vUMpLgqjOLzqYj4U4zCKz3vqJt1VyqNlHNTEvLKOr8zYBONdG70d9upR%2BwCr%2B8iBa6sjNtp%2FnqVVrfWS%2BF5Rnj1GBj9sE9ZVkyl0nuOKha3e17KqcRDxER4961fvmqYJ6u0ZvS2rcDtTZg9MdfjSYHFVWoUqDDs6UOYtljMYZ7Yu4A6BLKb2Jh8LxTo3kReoE9rJ7SnvON4EIZxgKKNMkD3pCL5BQ%2FNWAmjsLZ6zwQ5rUqwFB8t1Z7NhMZTS%2F0znuVDOTDV%2BrZjLparCbFYIahUJWXtFWEErCxie%2BWkLMa0xZvq%2BXGpKvmjEjxIiXibktcnKy0Chu7hrbrU%2F3hiKPohy70a3UlZKXidLZcXCxoz8EgxTX3BEms%2Fq76E3Sqr43TJG2yEGWAjlj3h77pIoEQD0JA0aEKRxefkKcBwXBf8OzIL5Zhy0N8zxsKs1So5xBBLLAVjNKyIaCzToz9TDvodW%2FBjqkAW9jEp0iP0acz1MNrb%2BiiY70v1J6WeJMRW155eFkSZeLfkgxqnPaQUC2POICn%2BoRJAvjri7kgZVjxIuo1VKPVRnCQwzWBAt8BSl5og8KqwwDAn7dPYO80kd%2Fii93ahJWXGIIZQnbfZvSmiMUvSJXwT8ZA7M8QcAHs58uMaboSI96m7uFGJRsbpBZctATm57LOZUP%2FKv3mkMQ5vY1bE9vAq9%2BZOZ0&X-Amz-Signature=895c8583cfe4e18632133ae7312ecd2511edacc14e5b97e7e74ab1b597b99812&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVT4KUI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCcd%2BcEJaJbOMsrSKx8Uuqi248oaH2ib0YdGlR8FP0GMQIhAKri7fj9QK5zDVreU%2FQJ6Bg0vBWostrG%2FrBnQO0sxA2mKv8DCHoQABoMNjM3NDIzMTgzODA1IgzzPsdkmRTfw2a6Hesq3AOjNoBZF1y%2FEum%2FIrbK%2F%2BImVHcZgDFGfvG4Im8XGZEmBpmSR402xGIYzAIGBIX7I27pKgpQeN%2FLdHO57ldzELI3k%2BOeWgrKC1fitJJJPSESe33J9zRZddb6ZisqKIfeiDGUxojd9qyZZnRICBzhA83qn5bhsZ11mDQhvA9HY07vUMpLgqjOLzqYj4U4zCKz3vqJt1VyqNlHNTEvLKOr8zYBONdG70d9upR%2BwCr%2B8iBa6sjNtp%2FnqVVrfWS%2BF5Rnj1GBj9sE9ZVkyl0nuOKha3e17KqcRDxER4961fvmqYJ6u0ZvS2rcDtTZg9MdfjSYHFVWoUqDDs6UOYtljMYZ7Yu4A6BLKb2Jh8LxTo3kReoE9rJ7SnvON4EIZxgKKNMkD3pCL5BQ%2FNWAmjsLZ6zwQ5rUqwFB8t1Z7NhMZTS%2F0znuVDOTDV%2BrZjLparCbFYIahUJWXtFWEErCxie%2BWkLMa0xZvq%2BXGpKvmjEjxIiXibktcnKy0Chu7hrbrU%2F3hiKPohy70a3UlZKXidLZcXCxoz8EgxTX3BEms%2Fq76E3Sqr43TJG2yEGWAjlj3h77pIoEQD0JA0aEKRxefkKcBwXBf8OzIL5Zhy0N8zxsKs1So5xBBLLAVjNKyIaCzToz9TDvodW%2FBjqkAW9jEp0iP0acz1MNrb%2BiiY70v1J6WeJMRW155eFkSZeLfkgxqnPaQUC2POICn%2BoRJAvjri7kgZVjxIuo1VKPVRnCQwzWBAt8BSl5og8KqwwDAn7dPYO80kd%2Fii93ahJWXGIIZQnbfZvSmiMUvSJXwT8ZA7M8QcAHs58uMaboSI96m7uFGJRsbpBZctATm57LOZUP%2FKv3mkMQ5vY1bE9vAq9%2BZOZ0&X-Amz-Signature=71573bee1a8c08559e94e5e7a5744859b8364df5e69aa63a084e940e2d2added&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVT4KUI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCcd%2BcEJaJbOMsrSKx8Uuqi248oaH2ib0YdGlR8FP0GMQIhAKri7fj9QK5zDVreU%2FQJ6Bg0vBWostrG%2FrBnQO0sxA2mKv8DCHoQABoMNjM3NDIzMTgzODA1IgzzPsdkmRTfw2a6Hesq3AOjNoBZF1y%2FEum%2FIrbK%2F%2BImVHcZgDFGfvG4Im8XGZEmBpmSR402xGIYzAIGBIX7I27pKgpQeN%2FLdHO57ldzELI3k%2BOeWgrKC1fitJJJPSESe33J9zRZddb6ZisqKIfeiDGUxojd9qyZZnRICBzhA83qn5bhsZ11mDQhvA9HY07vUMpLgqjOLzqYj4U4zCKz3vqJt1VyqNlHNTEvLKOr8zYBONdG70d9upR%2BwCr%2B8iBa6sjNtp%2FnqVVrfWS%2BF5Rnj1GBj9sE9ZVkyl0nuOKha3e17KqcRDxER4961fvmqYJ6u0ZvS2rcDtTZg9MdfjSYHFVWoUqDDs6UOYtljMYZ7Yu4A6BLKb2Jh8LxTo3kReoE9rJ7SnvON4EIZxgKKNMkD3pCL5BQ%2FNWAmjsLZ6zwQ5rUqwFB8t1Z7NhMZTS%2F0znuVDOTDV%2BrZjLparCbFYIahUJWXtFWEErCxie%2BWkLMa0xZvq%2BXGpKvmjEjxIiXibktcnKy0Chu7hrbrU%2F3hiKPohy70a3UlZKXidLZcXCxoz8EgxTX3BEms%2Fq76E3Sqr43TJG2yEGWAjlj3h77pIoEQD0JA0aEKRxefkKcBwXBf8OzIL5Zhy0N8zxsKs1So5xBBLLAVjNKyIaCzToz9TDvodW%2FBjqkAW9jEp0iP0acz1MNrb%2BiiY70v1J6WeJMRW155eFkSZeLfkgxqnPaQUC2POICn%2BoRJAvjri7kgZVjxIuo1VKPVRnCQwzWBAt8BSl5og8KqwwDAn7dPYO80kd%2Fii93ahJWXGIIZQnbfZvSmiMUvSJXwT8ZA7M8QcAHs58uMaboSI96m7uFGJRsbpBZctATm57LOZUP%2FKv3mkMQ5vY1bE9vAq9%2BZOZ0&X-Amz-Signature=73b61388352be7df8059a7b449797a10d915c5d2ed90794cad2ba3435b331045&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
