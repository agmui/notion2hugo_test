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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIEGFBHY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGe8wzEXZVs7eAe8q7Bi%2BYiKWKIPa8AwX8NgICXajnlRAiEAv6mKCaZJiiXvh4SbaTSufK%2FF%2F16YUmnyW40B4KmsUokqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOpScj%2Bw6n7%2FjVmYSrcA%2FEexzfXa7WxHtX9JwH%2Fn%2F%2BBj6WvwLKu%2BLO8Et%2FMO4usFjPEksdSKul2zkJ9tDkFWdq9sXEX6kUqRFCU4M7%2BIwYXlSwVdu0E6TiRZjGApGHApkhBQZWgpR%2B1OlPZNNAnKuTPpupKB9vEeXq5c5aL9sktOLUZJbabKWGywLv6r7y6OPUxtxAnNgbEms6dGq6SSSbK8cUVb9xa7%2FbmdJBAW5hKzgR8BpGdn%2BBsXRAtIWnbZyo%2BhBjqoA08%2FZds8M8qT3jP3ZhTYYyo5UOcoHrYWhjKxZdV4SK0u68Q3RjV0GSWBcbQBVwGX7It7O9QaWhvu5KjcMwdAVAujEB8zVRgO4BK6Jwp9UdQ7RkzDuhO193V999Xi9KU1RO561M46ZbCWqvxDTxAgWZDY3AT2h9jfkuJ%2Fi226vD2ywfwKocesBpFC9%2BovSmXJ8hu9l%2FgAXw16mFk3Xz8DclY%2FozhBsZgA3S24XBhAbsOBVZXCfzNIkyLaf8ckIGimbDne8Pru%2BFofP0kqXiP8FMNxopQGVWZI7wQCn3Hz6e3xtDvZe%2Fc3cELbqcjD2KWAZ%2FpvUtpXosuveDKIAzTbUTYYAosA4fYQtFRoEzU3GUpNT2vMFVNZoo0G6HgsqGjuE6qbZOfML7EyMAGOqUB1Z0H7pTMxH8Db%2BBLXvb%2FTScZ6NFQjpKdI4NjA9J4Dry2%2BfYL%2BuidhGPJLoTQczj4N%2FaZ9GS103GIc3HLvMWmM0eHcW415KM3mPSzd%2Biwcigqzl4pqRbxQh%2BFl8QlJW4qOFephWp5EPUNnicjrsgI4OEqQEBN9HW40zA8O5L0VBOpwZmmZy05PmdSSZvOrGdGB11i97SeseWDlSYjcs%2BKmxlxpzwO&X-Amz-Signature=504779c5a407ace63196a70f68f9b4c299472b9070b3f92d5247c8299cb07e4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIEGFBHY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGe8wzEXZVs7eAe8q7Bi%2BYiKWKIPa8AwX8NgICXajnlRAiEAv6mKCaZJiiXvh4SbaTSufK%2FF%2F16YUmnyW40B4KmsUokqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOpScj%2Bw6n7%2FjVmYSrcA%2FEexzfXa7WxHtX9JwH%2Fn%2F%2BBj6WvwLKu%2BLO8Et%2FMO4usFjPEksdSKul2zkJ9tDkFWdq9sXEX6kUqRFCU4M7%2BIwYXlSwVdu0E6TiRZjGApGHApkhBQZWgpR%2B1OlPZNNAnKuTPpupKB9vEeXq5c5aL9sktOLUZJbabKWGywLv6r7y6OPUxtxAnNgbEms6dGq6SSSbK8cUVb9xa7%2FbmdJBAW5hKzgR8BpGdn%2BBsXRAtIWnbZyo%2BhBjqoA08%2FZds8M8qT3jP3ZhTYYyo5UOcoHrYWhjKxZdV4SK0u68Q3RjV0GSWBcbQBVwGX7It7O9QaWhvu5KjcMwdAVAujEB8zVRgO4BK6Jwp9UdQ7RkzDuhO193V999Xi9KU1RO561M46ZbCWqvxDTxAgWZDY3AT2h9jfkuJ%2Fi226vD2ywfwKocesBpFC9%2BovSmXJ8hu9l%2FgAXw16mFk3Xz8DclY%2FozhBsZgA3S24XBhAbsOBVZXCfzNIkyLaf8ckIGimbDne8Pru%2BFofP0kqXiP8FMNxopQGVWZI7wQCn3Hz6e3xtDvZe%2Fc3cELbqcjD2KWAZ%2FpvUtpXosuveDKIAzTbUTYYAosA4fYQtFRoEzU3GUpNT2vMFVNZoo0G6HgsqGjuE6qbZOfML7EyMAGOqUB1Z0H7pTMxH8Db%2BBLXvb%2FTScZ6NFQjpKdI4NjA9J4Dry2%2BfYL%2BuidhGPJLoTQczj4N%2FaZ9GS103GIc3HLvMWmM0eHcW415KM3mPSzd%2Biwcigqzl4pqRbxQh%2BFl8QlJW4qOFephWp5EPUNnicjrsgI4OEqQEBN9HW40zA8O5L0VBOpwZmmZy05PmdSSZvOrGdGB11i97SeseWDlSYjcs%2BKmxlxpzwO&X-Amz-Signature=9e04550123df6ff0077d4e644fb6b2e12b0afa594c6d4015b5c1bc303c265453&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIEGFBHY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGe8wzEXZVs7eAe8q7Bi%2BYiKWKIPa8AwX8NgICXajnlRAiEAv6mKCaZJiiXvh4SbaTSufK%2FF%2F16YUmnyW40B4KmsUokqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOpScj%2Bw6n7%2FjVmYSrcA%2FEexzfXa7WxHtX9JwH%2Fn%2F%2BBj6WvwLKu%2BLO8Et%2FMO4usFjPEksdSKul2zkJ9tDkFWdq9sXEX6kUqRFCU4M7%2BIwYXlSwVdu0E6TiRZjGApGHApkhBQZWgpR%2B1OlPZNNAnKuTPpupKB9vEeXq5c5aL9sktOLUZJbabKWGywLv6r7y6OPUxtxAnNgbEms6dGq6SSSbK8cUVb9xa7%2FbmdJBAW5hKzgR8BpGdn%2BBsXRAtIWnbZyo%2BhBjqoA08%2FZds8M8qT3jP3ZhTYYyo5UOcoHrYWhjKxZdV4SK0u68Q3RjV0GSWBcbQBVwGX7It7O9QaWhvu5KjcMwdAVAujEB8zVRgO4BK6Jwp9UdQ7RkzDuhO193V999Xi9KU1RO561M46ZbCWqvxDTxAgWZDY3AT2h9jfkuJ%2Fi226vD2ywfwKocesBpFC9%2BovSmXJ8hu9l%2FgAXw16mFk3Xz8DclY%2FozhBsZgA3S24XBhAbsOBVZXCfzNIkyLaf8ckIGimbDne8Pru%2BFofP0kqXiP8FMNxopQGVWZI7wQCn3Hz6e3xtDvZe%2Fc3cELbqcjD2KWAZ%2FpvUtpXosuveDKIAzTbUTYYAosA4fYQtFRoEzU3GUpNT2vMFVNZoo0G6HgsqGjuE6qbZOfML7EyMAGOqUB1Z0H7pTMxH8Db%2BBLXvb%2FTScZ6NFQjpKdI4NjA9J4Dry2%2BfYL%2BuidhGPJLoTQczj4N%2FaZ9GS103GIc3HLvMWmM0eHcW415KM3mPSzd%2Biwcigqzl4pqRbxQh%2BFl8QlJW4qOFephWp5EPUNnicjrsgI4OEqQEBN9HW40zA8O5L0VBOpwZmmZy05PmdSSZvOrGdGB11i97SeseWDlSYjcs%2BKmxlxpzwO&X-Amz-Signature=dd07f173a4182f9c0923555086568426630b8f3e8af3c8a0ae1c89b95592d0e9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIEGFBHY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGe8wzEXZVs7eAe8q7Bi%2BYiKWKIPa8AwX8NgICXajnlRAiEAv6mKCaZJiiXvh4SbaTSufK%2FF%2F16YUmnyW40B4KmsUokqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOpScj%2Bw6n7%2FjVmYSrcA%2FEexzfXa7WxHtX9JwH%2Fn%2F%2BBj6WvwLKu%2BLO8Et%2FMO4usFjPEksdSKul2zkJ9tDkFWdq9sXEX6kUqRFCU4M7%2BIwYXlSwVdu0E6TiRZjGApGHApkhBQZWgpR%2B1OlPZNNAnKuTPpupKB9vEeXq5c5aL9sktOLUZJbabKWGywLv6r7y6OPUxtxAnNgbEms6dGq6SSSbK8cUVb9xa7%2FbmdJBAW5hKzgR8BpGdn%2BBsXRAtIWnbZyo%2BhBjqoA08%2FZds8M8qT3jP3ZhTYYyo5UOcoHrYWhjKxZdV4SK0u68Q3RjV0GSWBcbQBVwGX7It7O9QaWhvu5KjcMwdAVAujEB8zVRgO4BK6Jwp9UdQ7RkzDuhO193V999Xi9KU1RO561M46ZbCWqvxDTxAgWZDY3AT2h9jfkuJ%2Fi226vD2ywfwKocesBpFC9%2BovSmXJ8hu9l%2FgAXw16mFk3Xz8DclY%2FozhBsZgA3S24XBhAbsOBVZXCfzNIkyLaf8ckIGimbDne8Pru%2BFofP0kqXiP8FMNxopQGVWZI7wQCn3Hz6e3xtDvZe%2Fc3cELbqcjD2KWAZ%2FpvUtpXosuveDKIAzTbUTYYAosA4fYQtFRoEzU3GUpNT2vMFVNZoo0G6HgsqGjuE6qbZOfML7EyMAGOqUB1Z0H7pTMxH8Db%2BBLXvb%2FTScZ6NFQjpKdI4NjA9J4Dry2%2BfYL%2BuidhGPJLoTQczj4N%2FaZ9GS103GIc3HLvMWmM0eHcW415KM3mPSzd%2Biwcigqzl4pqRbxQh%2BFl8QlJW4qOFephWp5EPUNnicjrsgI4OEqQEBN9HW40zA8O5L0VBOpwZmmZy05PmdSSZvOrGdGB11i97SeseWDlSYjcs%2BKmxlxpzwO&X-Amz-Signature=80a2758dbbfeab432fc4fa5f647a03cd60cb4528c9be23ff7444170d36027e37&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIEGFBHY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGe8wzEXZVs7eAe8q7Bi%2BYiKWKIPa8AwX8NgICXajnlRAiEAv6mKCaZJiiXvh4SbaTSufK%2FF%2F16YUmnyW40B4KmsUokqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOpScj%2Bw6n7%2FjVmYSrcA%2FEexzfXa7WxHtX9JwH%2Fn%2F%2BBj6WvwLKu%2BLO8Et%2FMO4usFjPEksdSKul2zkJ9tDkFWdq9sXEX6kUqRFCU4M7%2BIwYXlSwVdu0E6TiRZjGApGHApkhBQZWgpR%2B1OlPZNNAnKuTPpupKB9vEeXq5c5aL9sktOLUZJbabKWGywLv6r7y6OPUxtxAnNgbEms6dGq6SSSbK8cUVb9xa7%2FbmdJBAW5hKzgR8BpGdn%2BBsXRAtIWnbZyo%2BhBjqoA08%2FZds8M8qT3jP3ZhTYYyo5UOcoHrYWhjKxZdV4SK0u68Q3RjV0GSWBcbQBVwGX7It7O9QaWhvu5KjcMwdAVAujEB8zVRgO4BK6Jwp9UdQ7RkzDuhO193V999Xi9KU1RO561M46ZbCWqvxDTxAgWZDY3AT2h9jfkuJ%2Fi226vD2ywfwKocesBpFC9%2BovSmXJ8hu9l%2FgAXw16mFk3Xz8DclY%2FozhBsZgA3S24XBhAbsOBVZXCfzNIkyLaf8ckIGimbDne8Pru%2BFofP0kqXiP8FMNxopQGVWZI7wQCn3Hz6e3xtDvZe%2Fc3cELbqcjD2KWAZ%2FpvUtpXosuveDKIAzTbUTYYAosA4fYQtFRoEzU3GUpNT2vMFVNZoo0G6HgsqGjuE6qbZOfML7EyMAGOqUB1Z0H7pTMxH8Db%2BBLXvb%2FTScZ6NFQjpKdI4NjA9J4Dry2%2BfYL%2BuidhGPJLoTQczj4N%2FaZ9GS103GIc3HLvMWmM0eHcW415KM3mPSzd%2Biwcigqzl4pqRbxQh%2BFl8QlJW4qOFephWp5EPUNnicjrsgI4OEqQEBN9HW40zA8O5L0VBOpwZmmZy05PmdSSZvOrGdGB11i97SeseWDlSYjcs%2BKmxlxpzwO&X-Amz-Signature=9ec067b3ac1bd2d594062e92677c434a9a6d9a5fffc41e2c8f160c1c906daaf2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIEGFBHY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGe8wzEXZVs7eAe8q7Bi%2BYiKWKIPa8AwX8NgICXajnlRAiEAv6mKCaZJiiXvh4SbaTSufK%2FF%2F16YUmnyW40B4KmsUokqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOpScj%2Bw6n7%2FjVmYSrcA%2FEexzfXa7WxHtX9JwH%2Fn%2F%2BBj6WvwLKu%2BLO8Et%2FMO4usFjPEksdSKul2zkJ9tDkFWdq9sXEX6kUqRFCU4M7%2BIwYXlSwVdu0E6TiRZjGApGHApkhBQZWgpR%2B1OlPZNNAnKuTPpupKB9vEeXq5c5aL9sktOLUZJbabKWGywLv6r7y6OPUxtxAnNgbEms6dGq6SSSbK8cUVb9xa7%2FbmdJBAW5hKzgR8BpGdn%2BBsXRAtIWnbZyo%2BhBjqoA08%2FZds8M8qT3jP3ZhTYYyo5UOcoHrYWhjKxZdV4SK0u68Q3RjV0GSWBcbQBVwGX7It7O9QaWhvu5KjcMwdAVAujEB8zVRgO4BK6Jwp9UdQ7RkzDuhO193V999Xi9KU1RO561M46ZbCWqvxDTxAgWZDY3AT2h9jfkuJ%2Fi226vD2ywfwKocesBpFC9%2BovSmXJ8hu9l%2FgAXw16mFk3Xz8DclY%2FozhBsZgA3S24XBhAbsOBVZXCfzNIkyLaf8ckIGimbDne8Pru%2BFofP0kqXiP8FMNxopQGVWZI7wQCn3Hz6e3xtDvZe%2Fc3cELbqcjD2KWAZ%2FpvUtpXosuveDKIAzTbUTYYAosA4fYQtFRoEzU3GUpNT2vMFVNZoo0G6HgsqGjuE6qbZOfML7EyMAGOqUB1Z0H7pTMxH8Db%2BBLXvb%2FTScZ6NFQjpKdI4NjA9J4Dry2%2BfYL%2BuidhGPJLoTQczj4N%2FaZ9GS103GIc3HLvMWmM0eHcW415KM3mPSzd%2Biwcigqzl4pqRbxQh%2BFl8QlJW4qOFephWp5EPUNnicjrsgI4OEqQEBN9HW40zA8O5L0VBOpwZmmZy05PmdSSZvOrGdGB11i97SeseWDlSYjcs%2BKmxlxpzwO&X-Amz-Signature=b7c364bac649e908b2e79eb5a6051d08ea06d32a5a85ab5e7e5969b860cc705d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIEGFBHY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGe8wzEXZVs7eAe8q7Bi%2BYiKWKIPa8AwX8NgICXajnlRAiEAv6mKCaZJiiXvh4SbaTSufK%2FF%2F16YUmnyW40B4KmsUokqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHOpScj%2Bw6n7%2FjVmYSrcA%2FEexzfXa7WxHtX9JwH%2Fn%2F%2BBj6WvwLKu%2BLO8Et%2FMO4usFjPEksdSKul2zkJ9tDkFWdq9sXEX6kUqRFCU4M7%2BIwYXlSwVdu0E6TiRZjGApGHApkhBQZWgpR%2B1OlPZNNAnKuTPpupKB9vEeXq5c5aL9sktOLUZJbabKWGywLv6r7y6OPUxtxAnNgbEms6dGq6SSSbK8cUVb9xa7%2FbmdJBAW5hKzgR8BpGdn%2BBsXRAtIWnbZyo%2BhBjqoA08%2FZds8M8qT3jP3ZhTYYyo5UOcoHrYWhjKxZdV4SK0u68Q3RjV0GSWBcbQBVwGX7It7O9QaWhvu5KjcMwdAVAujEB8zVRgO4BK6Jwp9UdQ7RkzDuhO193V999Xi9KU1RO561M46ZbCWqvxDTxAgWZDY3AT2h9jfkuJ%2Fi226vD2ywfwKocesBpFC9%2BovSmXJ8hu9l%2FgAXw16mFk3Xz8DclY%2FozhBsZgA3S24XBhAbsOBVZXCfzNIkyLaf8ckIGimbDne8Pru%2BFofP0kqXiP8FMNxopQGVWZI7wQCn3Hz6e3xtDvZe%2Fc3cELbqcjD2KWAZ%2FpvUtpXosuveDKIAzTbUTYYAosA4fYQtFRoEzU3GUpNT2vMFVNZoo0G6HgsqGjuE6qbZOfML7EyMAGOqUB1Z0H7pTMxH8Db%2BBLXvb%2FTScZ6NFQjpKdI4NjA9J4Dry2%2BfYL%2BuidhGPJLoTQczj4N%2FaZ9GS103GIc3HLvMWmM0eHcW415KM3mPSzd%2Biwcigqzl4pqRbxQh%2BFl8QlJW4qOFephWp5EPUNnicjrsgI4OEqQEBN9HW40zA8O5L0VBOpwZmmZy05PmdSSZvOrGdGB11i97SeseWDlSYjcs%2BKmxlxpzwO&X-Amz-Signature=69e4635e04f3365fc0dfbe788cbaa6a4b486191d011a4f4a017883f34bb6ca04&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
