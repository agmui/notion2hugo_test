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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJKPNXXT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDBg9VlTVYkR4yEVhhMXnU9xk79NZutdN8VFmFqLHbIqAiEA3MUfGgD7Col92ZjPrwAdeRBN8fGEquTwwPCvQaJcc%2BQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9I0LeXy966WEEfLSrcA09Y1L72vAsOg3AjbfCWW6gcTtDZ1BzZrWOKfJ511gvSm1Q3k%2B%2Bwt4vFR4fmJuezIaHchM0C6uVS9T9eaYxKci3%2BmnyWmFdGOKJdYsyHB11jAUfDDyaG%2FRu8cuOLIv5RM0R9wmBUOm7lBocsqvjjCioCoX8XD8pGKuAs5LG70H08jJfX%2FuP0aKudxtwBXwxKeG%2BoYhdjisl2g%2BZ9UGgafh0bnjjYusTeaN9OegQQctAmEqmqLlpGNzPN0ulwKMiumF5xzZyVUij2iqw59zlbu3pQOLrbx3Gd9lJ7oJSwDI0%2F4PlhEJDpaMfBUgKB6eUgKwxHl1gZDsnT9VrD%2Fy1viNcjWnZwTuLBAgnZVQ39949TxKlWAlUnY7qoULuAChO0v6kB1OTmdIivJ4FiqpBNGs9V6f3d0nu3XEVNFlssk8LSEXvD7nTY0LwDBNqV9fkxsHUI8GoGgc2iX9RTe0iXcowBDuPZEe4Ph0Xi5eHBHVkXPe1J6ihx8wwwFPASOq0bxRsLK72x8VzSBqNCPpph%2B07lk1mq%2FKPUIZncl9Nj4l4BdpQpfwKXrMYa8jQSMzZf3mDDoOWDutXp0vaarxbBgeyfZUC86Z7WgIF7Qta6rW6uF4%2BCe%2FB2Vu4DBE6BMLu5q78GOqUBBiNQLg0%2BxdB5Lg3tmGEwDzObebiUrPrsQ5nxnpJXcRQc1VHpNQxe9xH24Ojsw3iSgxtf5AZVppBBqMolR1k0itwERcSKlzfSaOh0a%2FR5ZdrnMfnPvVaeSblzGOQ2L8nOa9pFOUoOXLb2n1MNAaX9bDE0DaBTbcyhkIssbZ%2Bth0eY5977UciW0%2FkSqjstgW5IOgpVYYkIrdrTdXMSJquiIiB4%2FMWk&X-Amz-Signature=2c76881099ceddfd3f91813cbf71a88ac4eafb13764fe07e4687be379b2c84c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJKPNXXT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDBg9VlTVYkR4yEVhhMXnU9xk79NZutdN8VFmFqLHbIqAiEA3MUfGgD7Col92ZjPrwAdeRBN8fGEquTwwPCvQaJcc%2BQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9I0LeXy966WEEfLSrcA09Y1L72vAsOg3AjbfCWW6gcTtDZ1BzZrWOKfJ511gvSm1Q3k%2B%2Bwt4vFR4fmJuezIaHchM0C6uVS9T9eaYxKci3%2BmnyWmFdGOKJdYsyHB11jAUfDDyaG%2FRu8cuOLIv5RM0R9wmBUOm7lBocsqvjjCioCoX8XD8pGKuAs5LG70H08jJfX%2FuP0aKudxtwBXwxKeG%2BoYhdjisl2g%2BZ9UGgafh0bnjjYusTeaN9OegQQctAmEqmqLlpGNzPN0ulwKMiumF5xzZyVUij2iqw59zlbu3pQOLrbx3Gd9lJ7oJSwDI0%2F4PlhEJDpaMfBUgKB6eUgKwxHl1gZDsnT9VrD%2Fy1viNcjWnZwTuLBAgnZVQ39949TxKlWAlUnY7qoULuAChO0v6kB1OTmdIivJ4FiqpBNGs9V6f3d0nu3XEVNFlssk8LSEXvD7nTY0LwDBNqV9fkxsHUI8GoGgc2iX9RTe0iXcowBDuPZEe4Ph0Xi5eHBHVkXPe1J6ihx8wwwFPASOq0bxRsLK72x8VzSBqNCPpph%2B07lk1mq%2FKPUIZncl9Nj4l4BdpQpfwKXrMYa8jQSMzZf3mDDoOWDutXp0vaarxbBgeyfZUC86Z7WgIF7Qta6rW6uF4%2BCe%2FB2Vu4DBE6BMLu5q78GOqUBBiNQLg0%2BxdB5Lg3tmGEwDzObebiUrPrsQ5nxnpJXcRQc1VHpNQxe9xH24Ojsw3iSgxtf5AZVppBBqMolR1k0itwERcSKlzfSaOh0a%2FR5ZdrnMfnPvVaeSblzGOQ2L8nOa9pFOUoOXLb2n1MNAaX9bDE0DaBTbcyhkIssbZ%2Bth0eY5977UciW0%2FkSqjstgW5IOgpVYYkIrdrTdXMSJquiIiB4%2FMWk&X-Amz-Signature=bc673d5675654222846e5d6c32f5faea2ec768992a111df0d718225e13eb0134&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJKPNXXT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDBg9VlTVYkR4yEVhhMXnU9xk79NZutdN8VFmFqLHbIqAiEA3MUfGgD7Col92ZjPrwAdeRBN8fGEquTwwPCvQaJcc%2BQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9I0LeXy966WEEfLSrcA09Y1L72vAsOg3AjbfCWW6gcTtDZ1BzZrWOKfJ511gvSm1Q3k%2B%2Bwt4vFR4fmJuezIaHchM0C6uVS9T9eaYxKci3%2BmnyWmFdGOKJdYsyHB11jAUfDDyaG%2FRu8cuOLIv5RM0R9wmBUOm7lBocsqvjjCioCoX8XD8pGKuAs5LG70H08jJfX%2FuP0aKudxtwBXwxKeG%2BoYhdjisl2g%2BZ9UGgafh0bnjjYusTeaN9OegQQctAmEqmqLlpGNzPN0ulwKMiumF5xzZyVUij2iqw59zlbu3pQOLrbx3Gd9lJ7oJSwDI0%2F4PlhEJDpaMfBUgKB6eUgKwxHl1gZDsnT9VrD%2Fy1viNcjWnZwTuLBAgnZVQ39949TxKlWAlUnY7qoULuAChO0v6kB1OTmdIivJ4FiqpBNGs9V6f3d0nu3XEVNFlssk8LSEXvD7nTY0LwDBNqV9fkxsHUI8GoGgc2iX9RTe0iXcowBDuPZEe4Ph0Xi5eHBHVkXPe1J6ihx8wwwFPASOq0bxRsLK72x8VzSBqNCPpph%2B07lk1mq%2FKPUIZncl9Nj4l4BdpQpfwKXrMYa8jQSMzZf3mDDoOWDutXp0vaarxbBgeyfZUC86Z7WgIF7Qta6rW6uF4%2BCe%2FB2Vu4DBE6BMLu5q78GOqUBBiNQLg0%2BxdB5Lg3tmGEwDzObebiUrPrsQ5nxnpJXcRQc1VHpNQxe9xH24Ojsw3iSgxtf5AZVppBBqMolR1k0itwERcSKlzfSaOh0a%2FR5ZdrnMfnPvVaeSblzGOQ2L8nOa9pFOUoOXLb2n1MNAaX9bDE0DaBTbcyhkIssbZ%2Bth0eY5977UciW0%2FkSqjstgW5IOgpVYYkIrdrTdXMSJquiIiB4%2FMWk&X-Amz-Signature=c7f39ffbde5e3e693a3bf09ed7b01e5cc4b9742c3664645342155d46808249bc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJKPNXXT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDBg9VlTVYkR4yEVhhMXnU9xk79NZutdN8VFmFqLHbIqAiEA3MUfGgD7Col92ZjPrwAdeRBN8fGEquTwwPCvQaJcc%2BQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9I0LeXy966WEEfLSrcA09Y1L72vAsOg3AjbfCWW6gcTtDZ1BzZrWOKfJ511gvSm1Q3k%2B%2Bwt4vFR4fmJuezIaHchM0C6uVS9T9eaYxKci3%2BmnyWmFdGOKJdYsyHB11jAUfDDyaG%2FRu8cuOLIv5RM0R9wmBUOm7lBocsqvjjCioCoX8XD8pGKuAs5LG70H08jJfX%2FuP0aKudxtwBXwxKeG%2BoYhdjisl2g%2BZ9UGgafh0bnjjYusTeaN9OegQQctAmEqmqLlpGNzPN0ulwKMiumF5xzZyVUij2iqw59zlbu3pQOLrbx3Gd9lJ7oJSwDI0%2F4PlhEJDpaMfBUgKB6eUgKwxHl1gZDsnT9VrD%2Fy1viNcjWnZwTuLBAgnZVQ39949TxKlWAlUnY7qoULuAChO0v6kB1OTmdIivJ4FiqpBNGs9V6f3d0nu3XEVNFlssk8LSEXvD7nTY0LwDBNqV9fkxsHUI8GoGgc2iX9RTe0iXcowBDuPZEe4Ph0Xi5eHBHVkXPe1J6ihx8wwwFPASOq0bxRsLK72x8VzSBqNCPpph%2B07lk1mq%2FKPUIZncl9Nj4l4BdpQpfwKXrMYa8jQSMzZf3mDDoOWDutXp0vaarxbBgeyfZUC86Z7WgIF7Qta6rW6uF4%2BCe%2FB2Vu4DBE6BMLu5q78GOqUBBiNQLg0%2BxdB5Lg3tmGEwDzObebiUrPrsQ5nxnpJXcRQc1VHpNQxe9xH24Ojsw3iSgxtf5AZVppBBqMolR1k0itwERcSKlzfSaOh0a%2FR5ZdrnMfnPvVaeSblzGOQ2L8nOa9pFOUoOXLb2n1MNAaX9bDE0DaBTbcyhkIssbZ%2Bth0eY5977UciW0%2FkSqjstgW5IOgpVYYkIrdrTdXMSJquiIiB4%2FMWk&X-Amz-Signature=820852a84f7ffebc1f09f4ef4fc7f588e2472fe5613efcd93693239a0b8e7968&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJKPNXXT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDBg9VlTVYkR4yEVhhMXnU9xk79NZutdN8VFmFqLHbIqAiEA3MUfGgD7Col92ZjPrwAdeRBN8fGEquTwwPCvQaJcc%2BQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9I0LeXy966WEEfLSrcA09Y1L72vAsOg3AjbfCWW6gcTtDZ1BzZrWOKfJ511gvSm1Q3k%2B%2Bwt4vFR4fmJuezIaHchM0C6uVS9T9eaYxKci3%2BmnyWmFdGOKJdYsyHB11jAUfDDyaG%2FRu8cuOLIv5RM0R9wmBUOm7lBocsqvjjCioCoX8XD8pGKuAs5LG70H08jJfX%2FuP0aKudxtwBXwxKeG%2BoYhdjisl2g%2BZ9UGgafh0bnjjYusTeaN9OegQQctAmEqmqLlpGNzPN0ulwKMiumF5xzZyVUij2iqw59zlbu3pQOLrbx3Gd9lJ7oJSwDI0%2F4PlhEJDpaMfBUgKB6eUgKwxHl1gZDsnT9VrD%2Fy1viNcjWnZwTuLBAgnZVQ39949TxKlWAlUnY7qoULuAChO0v6kB1OTmdIivJ4FiqpBNGs9V6f3d0nu3XEVNFlssk8LSEXvD7nTY0LwDBNqV9fkxsHUI8GoGgc2iX9RTe0iXcowBDuPZEe4Ph0Xi5eHBHVkXPe1J6ihx8wwwFPASOq0bxRsLK72x8VzSBqNCPpph%2B07lk1mq%2FKPUIZncl9Nj4l4BdpQpfwKXrMYa8jQSMzZf3mDDoOWDutXp0vaarxbBgeyfZUC86Z7WgIF7Qta6rW6uF4%2BCe%2FB2Vu4DBE6BMLu5q78GOqUBBiNQLg0%2BxdB5Lg3tmGEwDzObebiUrPrsQ5nxnpJXcRQc1VHpNQxe9xH24Ojsw3iSgxtf5AZVppBBqMolR1k0itwERcSKlzfSaOh0a%2FR5ZdrnMfnPvVaeSblzGOQ2L8nOa9pFOUoOXLb2n1MNAaX9bDE0DaBTbcyhkIssbZ%2Bth0eY5977UciW0%2FkSqjstgW5IOgpVYYkIrdrTdXMSJquiIiB4%2FMWk&X-Amz-Signature=16c4b85db7d01266b946820872d20ff71c229f6f06613f58c7982554473f86f1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJKPNXXT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDBg9VlTVYkR4yEVhhMXnU9xk79NZutdN8VFmFqLHbIqAiEA3MUfGgD7Col92ZjPrwAdeRBN8fGEquTwwPCvQaJcc%2BQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9I0LeXy966WEEfLSrcA09Y1L72vAsOg3AjbfCWW6gcTtDZ1BzZrWOKfJ511gvSm1Q3k%2B%2Bwt4vFR4fmJuezIaHchM0C6uVS9T9eaYxKci3%2BmnyWmFdGOKJdYsyHB11jAUfDDyaG%2FRu8cuOLIv5RM0R9wmBUOm7lBocsqvjjCioCoX8XD8pGKuAs5LG70H08jJfX%2FuP0aKudxtwBXwxKeG%2BoYhdjisl2g%2BZ9UGgafh0bnjjYusTeaN9OegQQctAmEqmqLlpGNzPN0ulwKMiumF5xzZyVUij2iqw59zlbu3pQOLrbx3Gd9lJ7oJSwDI0%2F4PlhEJDpaMfBUgKB6eUgKwxHl1gZDsnT9VrD%2Fy1viNcjWnZwTuLBAgnZVQ39949TxKlWAlUnY7qoULuAChO0v6kB1OTmdIivJ4FiqpBNGs9V6f3d0nu3XEVNFlssk8LSEXvD7nTY0LwDBNqV9fkxsHUI8GoGgc2iX9RTe0iXcowBDuPZEe4Ph0Xi5eHBHVkXPe1J6ihx8wwwFPASOq0bxRsLK72x8VzSBqNCPpph%2B07lk1mq%2FKPUIZncl9Nj4l4BdpQpfwKXrMYa8jQSMzZf3mDDoOWDutXp0vaarxbBgeyfZUC86Z7WgIF7Qta6rW6uF4%2BCe%2FB2Vu4DBE6BMLu5q78GOqUBBiNQLg0%2BxdB5Lg3tmGEwDzObebiUrPrsQ5nxnpJXcRQc1VHpNQxe9xH24Ojsw3iSgxtf5AZVppBBqMolR1k0itwERcSKlzfSaOh0a%2FR5ZdrnMfnPvVaeSblzGOQ2L8nOa9pFOUoOXLb2n1MNAaX9bDE0DaBTbcyhkIssbZ%2Bth0eY5977UciW0%2FkSqjstgW5IOgpVYYkIrdrTdXMSJquiIiB4%2FMWk&X-Amz-Signature=097fb5faeaac6bb8162840b85cc144b4540dcb8df642e138d0286512423b16ca&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJKPNXXT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDBg9VlTVYkR4yEVhhMXnU9xk79NZutdN8VFmFqLHbIqAiEA3MUfGgD7Col92ZjPrwAdeRBN8fGEquTwwPCvQaJcc%2BQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9I0LeXy966WEEfLSrcA09Y1L72vAsOg3AjbfCWW6gcTtDZ1BzZrWOKfJ511gvSm1Q3k%2B%2Bwt4vFR4fmJuezIaHchM0C6uVS9T9eaYxKci3%2BmnyWmFdGOKJdYsyHB11jAUfDDyaG%2FRu8cuOLIv5RM0R9wmBUOm7lBocsqvjjCioCoX8XD8pGKuAs5LG70H08jJfX%2FuP0aKudxtwBXwxKeG%2BoYhdjisl2g%2BZ9UGgafh0bnjjYusTeaN9OegQQctAmEqmqLlpGNzPN0ulwKMiumF5xzZyVUij2iqw59zlbu3pQOLrbx3Gd9lJ7oJSwDI0%2F4PlhEJDpaMfBUgKB6eUgKwxHl1gZDsnT9VrD%2Fy1viNcjWnZwTuLBAgnZVQ39949TxKlWAlUnY7qoULuAChO0v6kB1OTmdIivJ4FiqpBNGs9V6f3d0nu3XEVNFlssk8LSEXvD7nTY0LwDBNqV9fkxsHUI8GoGgc2iX9RTe0iXcowBDuPZEe4Ph0Xi5eHBHVkXPe1J6ihx8wwwFPASOq0bxRsLK72x8VzSBqNCPpph%2B07lk1mq%2FKPUIZncl9Nj4l4BdpQpfwKXrMYa8jQSMzZf3mDDoOWDutXp0vaarxbBgeyfZUC86Z7WgIF7Qta6rW6uF4%2BCe%2FB2Vu4DBE6BMLu5q78GOqUBBiNQLg0%2BxdB5Lg3tmGEwDzObebiUrPrsQ5nxnpJXcRQc1VHpNQxe9xH24Ojsw3iSgxtf5AZVppBBqMolR1k0itwERcSKlzfSaOh0a%2FR5ZdrnMfnPvVaeSblzGOQ2L8nOa9pFOUoOXLb2n1MNAaX9bDE0DaBTbcyhkIssbZ%2Bth0eY5977UciW0%2FkSqjstgW5IOgpVYYkIrdrTdXMSJquiIiB4%2FMWk&X-Amz-Signature=94ff636f93dcda4b6f6ae6a2b09e40d78015043bc321ca211246371ebed34703&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
