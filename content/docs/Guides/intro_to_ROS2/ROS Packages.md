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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HMSJPAG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpVNHIY6qzJLztaxhzjols93V2NmfcPIfJVSdGfZTCwIhAMuXn6Q2yrdJnvOe%2Fc%2B81KfkjGV3vOiYSHzUO1xi45vTKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD3Xa%2FS%2FmgG2tZaMAq3ANhXcWv4A3NoBxYzyhjfrt3MHewSZbiO5Bk5EkrpBqFjt5Wu8tWE1XDWDeuumubX5r89woMlfEY0f6uUbqA%2BEmBufZJ0mrPGHNzFF%2Fe9tVHyoa5rEJ1QdcITXZeF1T8THI6BzPtzQ3lUQqR%2Betga0YyCBB1ZuV4XMxngN%2BsQbNjjwx6ZvQlLVvkTsEWvAAnIU%2F%2BcYSDFJ7keMRqC%2Bk2w%2Bc3P5e1D7Yx9KYgU4zUA2ULJofLB4RZn29qYT2X6%2B2JM4AjPzUvgH4MlR9LFlBZx2Ku1mszDPEKkZ4At2a4g7E9cc3w8VqtsyZsDsOHy5Fuk%2BtWGhtZXHzjvJumHzuQKMPsPTkQ9I6nsZecVHaiOcqNlrnV%2F6yNB7Esk8KuBbJUMIIuPf96Yepd0BV%2FVGf0hDOADHjILkJU0tM8mDowF0GcfSEKqpbN67OpFVgjenWoMcmOZTars86699WoTPXPTxaIkBMCsEWpU5YglcxXGQXgUtmpdX7%2BT3nN550BrBUpmStM%2Ft6k6NlI96q74YFrfcr8s6%2BzYrPYuJuGSeSyuZGqJxWsRqeHLwRPyaBgVi8ZbIxG68e0ljQ3EnNmW8%2BJ2fEN88p7ikurqcsv9JXQcEl6epdVYkbf3KwJX8h8ujDwg6O9BjqkATDQAPjPkBRX7Llo5MZOTsKWl3XlgGMcVV%2FCUdPKylhvrzRqnITteX%2B4LZIJoT9O6HBHSUP6spHininArp%2BCUM99VWV9DsqfJzwPOKvXI8bIqtMCWfW%2B3b1igmB6JprgV2SOsiIs4PROC4ny%2B9e9Cg6J%2B2YGv%2BtBsm%2FkCdP6ND5Ha65BRKMAHovTb4vgO5jLZ7yJ1xJBBkcU1vJ3Z3yEktKDTkAc&X-Amz-Signature=d1f3e9927955025111f57c91aeb6157205385aa8101b40cff16b60fe3ca75f0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HMSJPAG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpVNHIY6qzJLztaxhzjols93V2NmfcPIfJVSdGfZTCwIhAMuXn6Q2yrdJnvOe%2Fc%2B81KfkjGV3vOiYSHzUO1xi45vTKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD3Xa%2FS%2FmgG2tZaMAq3ANhXcWv4A3NoBxYzyhjfrt3MHewSZbiO5Bk5EkrpBqFjt5Wu8tWE1XDWDeuumubX5r89woMlfEY0f6uUbqA%2BEmBufZJ0mrPGHNzFF%2Fe9tVHyoa5rEJ1QdcITXZeF1T8THI6BzPtzQ3lUQqR%2Betga0YyCBB1ZuV4XMxngN%2BsQbNjjwx6ZvQlLVvkTsEWvAAnIU%2F%2BcYSDFJ7keMRqC%2Bk2w%2Bc3P5e1D7Yx9KYgU4zUA2ULJofLB4RZn29qYT2X6%2B2JM4AjPzUvgH4MlR9LFlBZx2Ku1mszDPEKkZ4At2a4g7E9cc3w8VqtsyZsDsOHy5Fuk%2BtWGhtZXHzjvJumHzuQKMPsPTkQ9I6nsZecVHaiOcqNlrnV%2F6yNB7Esk8KuBbJUMIIuPf96Yepd0BV%2FVGf0hDOADHjILkJU0tM8mDowF0GcfSEKqpbN67OpFVgjenWoMcmOZTars86699WoTPXPTxaIkBMCsEWpU5YglcxXGQXgUtmpdX7%2BT3nN550BrBUpmStM%2Ft6k6NlI96q74YFrfcr8s6%2BzYrPYuJuGSeSyuZGqJxWsRqeHLwRPyaBgVi8ZbIxG68e0ljQ3EnNmW8%2BJ2fEN88p7ikurqcsv9JXQcEl6epdVYkbf3KwJX8h8ujDwg6O9BjqkATDQAPjPkBRX7Llo5MZOTsKWl3XlgGMcVV%2FCUdPKylhvrzRqnITteX%2B4LZIJoT9O6HBHSUP6spHininArp%2BCUM99VWV9DsqfJzwPOKvXI8bIqtMCWfW%2B3b1igmB6JprgV2SOsiIs4PROC4ny%2B9e9Cg6J%2B2YGv%2BtBsm%2FkCdP6ND5Ha65BRKMAHovTb4vgO5jLZ7yJ1xJBBkcU1vJ3Z3yEktKDTkAc&X-Amz-Signature=adc0263afd5eeeae77736f9cc4ef7b53e5c23d9fe3c9c167d0b3f53e522155ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HMSJPAG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpVNHIY6qzJLztaxhzjols93V2NmfcPIfJVSdGfZTCwIhAMuXn6Q2yrdJnvOe%2Fc%2B81KfkjGV3vOiYSHzUO1xi45vTKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD3Xa%2FS%2FmgG2tZaMAq3ANhXcWv4A3NoBxYzyhjfrt3MHewSZbiO5Bk5EkrpBqFjt5Wu8tWE1XDWDeuumubX5r89woMlfEY0f6uUbqA%2BEmBufZJ0mrPGHNzFF%2Fe9tVHyoa5rEJ1QdcITXZeF1T8THI6BzPtzQ3lUQqR%2Betga0YyCBB1ZuV4XMxngN%2BsQbNjjwx6ZvQlLVvkTsEWvAAnIU%2F%2BcYSDFJ7keMRqC%2Bk2w%2Bc3P5e1D7Yx9KYgU4zUA2ULJofLB4RZn29qYT2X6%2B2JM4AjPzUvgH4MlR9LFlBZx2Ku1mszDPEKkZ4At2a4g7E9cc3w8VqtsyZsDsOHy5Fuk%2BtWGhtZXHzjvJumHzuQKMPsPTkQ9I6nsZecVHaiOcqNlrnV%2F6yNB7Esk8KuBbJUMIIuPf96Yepd0BV%2FVGf0hDOADHjILkJU0tM8mDowF0GcfSEKqpbN67OpFVgjenWoMcmOZTars86699WoTPXPTxaIkBMCsEWpU5YglcxXGQXgUtmpdX7%2BT3nN550BrBUpmStM%2Ft6k6NlI96q74YFrfcr8s6%2BzYrPYuJuGSeSyuZGqJxWsRqeHLwRPyaBgVi8ZbIxG68e0ljQ3EnNmW8%2BJ2fEN88p7ikurqcsv9JXQcEl6epdVYkbf3KwJX8h8ujDwg6O9BjqkATDQAPjPkBRX7Llo5MZOTsKWl3XlgGMcVV%2FCUdPKylhvrzRqnITteX%2B4LZIJoT9O6HBHSUP6spHininArp%2BCUM99VWV9DsqfJzwPOKvXI8bIqtMCWfW%2B3b1igmB6JprgV2SOsiIs4PROC4ny%2B9e9Cg6J%2B2YGv%2BtBsm%2FkCdP6ND5Ha65BRKMAHovTb4vgO5jLZ7yJ1xJBBkcU1vJ3Z3yEktKDTkAc&X-Amz-Signature=ce2561a62bbe4a7eab6b8da4be58ceee375b5b3637076953f7ff27808792bacf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HMSJPAG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpVNHIY6qzJLztaxhzjols93V2NmfcPIfJVSdGfZTCwIhAMuXn6Q2yrdJnvOe%2Fc%2B81KfkjGV3vOiYSHzUO1xi45vTKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD3Xa%2FS%2FmgG2tZaMAq3ANhXcWv4A3NoBxYzyhjfrt3MHewSZbiO5Bk5EkrpBqFjt5Wu8tWE1XDWDeuumubX5r89woMlfEY0f6uUbqA%2BEmBufZJ0mrPGHNzFF%2Fe9tVHyoa5rEJ1QdcITXZeF1T8THI6BzPtzQ3lUQqR%2Betga0YyCBB1ZuV4XMxngN%2BsQbNjjwx6ZvQlLVvkTsEWvAAnIU%2F%2BcYSDFJ7keMRqC%2Bk2w%2Bc3P5e1D7Yx9KYgU4zUA2ULJofLB4RZn29qYT2X6%2B2JM4AjPzUvgH4MlR9LFlBZx2Ku1mszDPEKkZ4At2a4g7E9cc3w8VqtsyZsDsOHy5Fuk%2BtWGhtZXHzjvJumHzuQKMPsPTkQ9I6nsZecVHaiOcqNlrnV%2F6yNB7Esk8KuBbJUMIIuPf96Yepd0BV%2FVGf0hDOADHjILkJU0tM8mDowF0GcfSEKqpbN67OpFVgjenWoMcmOZTars86699WoTPXPTxaIkBMCsEWpU5YglcxXGQXgUtmpdX7%2BT3nN550BrBUpmStM%2Ft6k6NlI96q74YFrfcr8s6%2BzYrPYuJuGSeSyuZGqJxWsRqeHLwRPyaBgVi8ZbIxG68e0ljQ3EnNmW8%2BJ2fEN88p7ikurqcsv9JXQcEl6epdVYkbf3KwJX8h8ujDwg6O9BjqkATDQAPjPkBRX7Llo5MZOTsKWl3XlgGMcVV%2FCUdPKylhvrzRqnITteX%2B4LZIJoT9O6HBHSUP6spHininArp%2BCUM99VWV9DsqfJzwPOKvXI8bIqtMCWfW%2B3b1igmB6JprgV2SOsiIs4PROC4ny%2B9e9Cg6J%2B2YGv%2BtBsm%2FkCdP6ND5Ha65BRKMAHovTb4vgO5jLZ7yJ1xJBBkcU1vJ3Z3yEktKDTkAc&X-Amz-Signature=eb65c497605d1d1398e6bddd93246148629295dd865dd9e58602b61977f398f8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HMSJPAG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpVNHIY6qzJLztaxhzjols93V2NmfcPIfJVSdGfZTCwIhAMuXn6Q2yrdJnvOe%2Fc%2B81KfkjGV3vOiYSHzUO1xi45vTKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD3Xa%2FS%2FmgG2tZaMAq3ANhXcWv4A3NoBxYzyhjfrt3MHewSZbiO5Bk5EkrpBqFjt5Wu8tWE1XDWDeuumubX5r89woMlfEY0f6uUbqA%2BEmBufZJ0mrPGHNzFF%2Fe9tVHyoa5rEJ1QdcITXZeF1T8THI6BzPtzQ3lUQqR%2Betga0YyCBB1ZuV4XMxngN%2BsQbNjjwx6ZvQlLVvkTsEWvAAnIU%2F%2BcYSDFJ7keMRqC%2Bk2w%2Bc3P5e1D7Yx9KYgU4zUA2ULJofLB4RZn29qYT2X6%2B2JM4AjPzUvgH4MlR9LFlBZx2Ku1mszDPEKkZ4At2a4g7E9cc3w8VqtsyZsDsOHy5Fuk%2BtWGhtZXHzjvJumHzuQKMPsPTkQ9I6nsZecVHaiOcqNlrnV%2F6yNB7Esk8KuBbJUMIIuPf96Yepd0BV%2FVGf0hDOADHjILkJU0tM8mDowF0GcfSEKqpbN67OpFVgjenWoMcmOZTars86699WoTPXPTxaIkBMCsEWpU5YglcxXGQXgUtmpdX7%2BT3nN550BrBUpmStM%2Ft6k6NlI96q74YFrfcr8s6%2BzYrPYuJuGSeSyuZGqJxWsRqeHLwRPyaBgVi8ZbIxG68e0ljQ3EnNmW8%2BJ2fEN88p7ikurqcsv9JXQcEl6epdVYkbf3KwJX8h8ujDwg6O9BjqkATDQAPjPkBRX7Llo5MZOTsKWl3XlgGMcVV%2FCUdPKylhvrzRqnITteX%2B4LZIJoT9O6HBHSUP6spHininArp%2BCUM99VWV9DsqfJzwPOKvXI8bIqtMCWfW%2B3b1igmB6JprgV2SOsiIs4PROC4ny%2B9e9Cg6J%2B2YGv%2BtBsm%2FkCdP6ND5Ha65BRKMAHovTb4vgO5jLZ7yJ1xJBBkcU1vJ3Z3yEktKDTkAc&X-Amz-Signature=2c2e6e187b4ea08cbe9a7060e94c7c21396314fe61710c6b176d4434e3f92a75&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HMSJPAG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpVNHIY6qzJLztaxhzjols93V2NmfcPIfJVSdGfZTCwIhAMuXn6Q2yrdJnvOe%2Fc%2B81KfkjGV3vOiYSHzUO1xi45vTKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD3Xa%2FS%2FmgG2tZaMAq3ANhXcWv4A3NoBxYzyhjfrt3MHewSZbiO5Bk5EkrpBqFjt5Wu8tWE1XDWDeuumubX5r89woMlfEY0f6uUbqA%2BEmBufZJ0mrPGHNzFF%2Fe9tVHyoa5rEJ1QdcITXZeF1T8THI6BzPtzQ3lUQqR%2Betga0YyCBB1ZuV4XMxngN%2BsQbNjjwx6ZvQlLVvkTsEWvAAnIU%2F%2BcYSDFJ7keMRqC%2Bk2w%2Bc3P5e1D7Yx9KYgU4zUA2ULJofLB4RZn29qYT2X6%2B2JM4AjPzUvgH4MlR9LFlBZx2Ku1mszDPEKkZ4At2a4g7E9cc3w8VqtsyZsDsOHy5Fuk%2BtWGhtZXHzjvJumHzuQKMPsPTkQ9I6nsZecVHaiOcqNlrnV%2F6yNB7Esk8KuBbJUMIIuPf96Yepd0BV%2FVGf0hDOADHjILkJU0tM8mDowF0GcfSEKqpbN67OpFVgjenWoMcmOZTars86699WoTPXPTxaIkBMCsEWpU5YglcxXGQXgUtmpdX7%2BT3nN550BrBUpmStM%2Ft6k6NlI96q74YFrfcr8s6%2BzYrPYuJuGSeSyuZGqJxWsRqeHLwRPyaBgVi8ZbIxG68e0ljQ3EnNmW8%2BJ2fEN88p7ikurqcsv9JXQcEl6epdVYkbf3KwJX8h8ujDwg6O9BjqkATDQAPjPkBRX7Llo5MZOTsKWl3XlgGMcVV%2FCUdPKylhvrzRqnITteX%2B4LZIJoT9O6HBHSUP6spHininArp%2BCUM99VWV9DsqfJzwPOKvXI8bIqtMCWfW%2B3b1igmB6JprgV2SOsiIs4PROC4ny%2B9e9Cg6J%2B2YGv%2BtBsm%2FkCdP6ND5Ha65BRKMAHovTb4vgO5jLZ7yJ1xJBBkcU1vJ3Z3yEktKDTkAc&X-Amz-Signature=eca60a56d040a4559df4fc6bf9095922338ff73c3f97580200b8505c4f192eac&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HMSJPAG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlpVNHIY6qzJLztaxhzjols93V2NmfcPIfJVSdGfZTCwIhAMuXn6Q2yrdJnvOe%2Fc%2B81KfkjGV3vOiYSHzUO1xi45vTKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD3Xa%2FS%2FmgG2tZaMAq3ANhXcWv4A3NoBxYzyhjfrt3MHewSZbiO5Bk5EkrpBqFjt5Wu8tWE1XDWDeuumubX5r89woMlfEY0f6uUbqA%2BEmBufZJ0mrPGHNzFF%2Fe9tVHyoa5rEJ1QdcITXZeF1T8THI6BzPtzQ3lUQqR%2Betga0YyCBB1ZuV4XMxngN%2BsQbNjjwx6ZvQlLVvkTsEWvAAnIU%2F%2BcYSDFJ7keMRqC%2Bk2w%2Bc3P5e1D7Yx9KYgU4zUA2ULJofLB4RZn29qYT2X6%2B2JM4AjPzUvgH4MlR9LFlBZx2Ku1mszDPEKkZ4At2a4g7E9cc3w8VqtsyZsDsOHy5Fuk%2BtWGhtZXHzjvJumHzuQKMPsPTkQ9I6nsZecVHaiOcqNlrnV%2F6yNB7Esk8KuBbJUMIIuPf96Yepd0BV%2FVGf0hDOADHjILkJU0tM8mDowF0GcfSEKqpbN67OpFVgjenWoMcmOZTars86699WoTPXPTxaIkBMCsEWpU5YglcxXGQXgUtmpdX7%2BT3nN550BrBUpmStM%2Ft6k6NlI96q74YFrfcr8s6%2BzYrPYuJuGSeSyuZGqJxWsRqeHLwRPyaBgVi8ZbIxG68e0ljQ3EnNmW8%2BJ2fEN88p7ikurqcsv9JXQcEl6epdVYkbf3KwJX8h8ujDwg6O9BjqkATDQAPjPkBRX7Llo5MZOTsKWl3XlgGMcVV%2FCUdPKylhvrzRqnITteX%2B4LZIJoT9O6HBHSUP6spHininArp%2BCUM99VWV9DsqfJzwPOKvXI8bIqtMCWfW%2B3b1igmB6JprgV2SOsiIs4PROC4ny%2B9e9Cg6J%2B2YGv%2BtBsm%2FkCdP6ND5Ha65BRKMAHovTb4vgO5jLZ7yJ1xJBBkcU1vJ3Z3yEktKDTkAc&X-Amz-Signature=57b1c9610548564d03889724053357e5884be78009596c02ee797e04b8f4e160&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
