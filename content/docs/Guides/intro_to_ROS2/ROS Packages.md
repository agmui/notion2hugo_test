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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECDZVIM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIHcTViNE9wL8T5iQV1KeM%2B91LVKDmrnacoSgl3AZwd89Ah9sLoQG%2FWKkPVF8d4PmCnP0Eir2v3aEiz%2B4%2FjSLsJJ9Kv8DCBMQABoMNjM3NDIzMTgzODA1Igw%2BX2Kt3fCcPGEuhWsq3ANR14aUbcyzlklunHV3xYmwKfYO4YsBXII6w7ZO4v5dXfnHDZ1VqoeJE7%2F8Y3AbMWvAPljFbci3RnPUKAiyLFBK21166qbly8LTAMLHduJLX0OjR4PDWLSMdZQaMbSke7rpUqWzYRW%2B1iBEAreTwgiyPpxtjnlxV%2FMb6pomOiT%2BM%2BoQT%2F5gAWCg16lo7JZAq5epEpOf8b1G26XqOaCtClwghH30xveCIY2NUuxfJPf04QDTwTAZDmWVqc2V%2F3SlLZfW0m6aqW0FtHwtzFdYt165LchKzLsXF0%2BWS9SCMOsXasuSnV6tZHMayFhsesSmEJ3HZdWHkV85rDhaFqPVRYK%2FNqgDZQOnuP15c7lCJYwPBu0Ie0vAE1QlfrEixMfXQ1xKY4VHIXZk5CbqHNh3k6jp%2F%2BKgaDOTsZa9fdIz6hJXkZCK%2B3P80TJyAYGf8RtpaQF2MqpVlUWJifu0fWdB3WrmDZ2KryQZLBwayBhz6P6KQtxY%2F1xopudHrXM1qhiX0xjm7M85alRKDLua3V94GNdCWpwpX%2FiKyUWakO9KeBj6lItCHgYF7nUn5KU9m%2BF4GBwJb3oikyLO97WmTbLKgTnm3C5Jv%2FT0w56u9noxSsYN1amRUEjNQhxejCd9JTCp5L6%2FBjqnAQ0YB9AZd7TZil2hWqPlPLJN5Us%2Bea1CeikDpdqwo4Wl4u0EJK7LVg8eLaUUYf1f0MT7f95NuqUcQvx7mHVyYh9xRb9p9cY6L3dQY%2F2VuIn0xFnBQt%2FC0tuFjd5y%2B8gFBfbx0Zv5JWEtfe7FClyHPPpGz372YNMfbdCnOoG9jqjdF0pRCYb3geT9EoT4K5oIIrN3H%2FdbKmEfZAznQ4yV7SPmuUFVI%2FFM&X-Amz-Signature=1e6ebc7a97b71e8a59e744fcdba99255926af5af7a72ff11daecc026f7c87441&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECDZVIM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIHcTViNE9wL8T5iQV1KeM%2B91LVKDmrnacoSgl3AZwd89Ah9sLoQG%2FWKkPVF8d4PmCnP0Eir2v3aEiz%2B4%2FjSLsJJ9Kv8DCBMQABoMNjM3NDIzMTgzODA1Igw%2BX2Kt3fCcPGEuhWsq3ANR14aUbcyzlklunHV3xYmwKfYO4YsBXII6w7ZO4v5dXfnHDZ1VqoeJE7%2F8Y3AbMWvAPljFbci3RnPUKAiyLFBK21166qbly8LTAMLHduJLX0OjR4PDWLSMdZQaMbSke7rpUqWzYRW%2B1iBEAreTwgiyPpxtjnlxV%2FMb6pomOiT%2BM%2BoQT%2F5gAWCg16lo7JZAq5epEpOf8b1G26XqOaCtClwghH30xveCIY2NUuxfJPf04QDTwTAZDmWVqc2V%2F3SlLZfW0m6aqW0FtHwtzFdYt165LchKzLsXF0%2BWS9SCMOsXasuSnV6tZHMayFhsesSmEJ3HZdWHkV85rDhaFqPVRYK%2FNqgDZQOnuP15c7lCJYwPBu0Ie0vAE1QlfrEixMfXQ1xKY4VHIXZk5CbqHNh3k6jp%2F%2BKgaDOTsZa9fdIz6hJXkZCK%2B3P80TJyAYGf8RtpaQF2MqpVlUWJifu0fWdB3WrmDZ2KryQZLBwayBhz6P6KQtxY%2F1xopudHrXM1qhiX0xjm7M85alRKDLua3V94GNdCWpwpX%2FiKyUWakO9KeBj6lItCHgYF7nUn5KU9m%2BF4GBwJb3oikyLO97WmTbLKgTnm3C5Jv%2FT0w56u9noxSsYN1amRUEjNQhxejCd9JTCp5L6%2FBjqnAQ0YB9AZd7TZil2hWqPlPLJN5Us%2Bea1CeikDpdqwo4Wl4u0EJK7LVg8eLaUUYf1f0MT7f95NuqUcQvx7mHVyYh9xRb9p9cY6L3dQY%2F2VuIn0xFnBQt%2FC0tuFjd5y%2B8gFBfbx0Zv5JWEtfe7FClyHPPpGz372YNMfbdCnOoG9jqjdF0pRCYb3geT9EoT4K5oIIrN3H%2FdbKmEfZAznQ4yV7SPmuUFVI%2FFM&X-Amz-Signature=b0cbeb890198bec00d92422259575830c9da13196a07aec9fd018e7e0081649b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECDZVIM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIHcTViNE9wL8T5iQV1KeM%2B91LVKDmrnacoSgl3AZwd89Ah9sLoQG%2FWKkPVF8d4PmCnP0Eir2v3aEiz%2B4%2FjSLsJJ9Kv8DCBMQABoMNjM3NDIzMTgzODA1Igw%2BX2Kt3fCcPGEuhWsq3ANR14aUbcyzlklunHV3xYmwKfYO4YsBXII6w7ZO4v5dXfnHDZ1VqoeJE7%2F8Y3AbMWvAPljFbci3RnPUKAiyLFBK21166qbly8LTAMLHduJLX0OjR4PDWLSMdZQaMbSke7rpUqWzYRW%2B1iBEAreTwgiyPpxtjnlxV%2FMb6pomOiT%2BM%2BoQT%2F5gAWCg16lo7JZAq5epEpOf8b1G26XqOaCtClwghH30xveCIY2NUuxfJPf04QDTwTAZDmWVqc2V%2F3SlLZfW0m6aqW0FtHwtzFdYt165LchKzLsXF0%2BWS9SCMOsXasuSnV6tZHMayFhsesSmEJ3HZdWHkV85rDhaFqPVRYK%2FNqgDZQOnuP15c7lCJYwPBu0Ie0vAE1QlfrEixMfXQ1xKY4VHIXZk5CbqHNh3k6jp%2F%2BKgaDOTsZa9fdIz6hJXkZCK%2B3P80TJyAYGf8RtpaQF2MqpVlUWJifu0fWdB3WrmDZ2KryQZLBwayBhz6P6KQtxY%2F1xopudHrXM1qhiX0xjm7M85alRKDLua3V94GNdCWpwpX%2FiKyUWakO9KeBj6lItCHgYF7nUn5KU9m%2BF4GBwJb3oikyLO97WmTbLKgTnm3C5Jv%2FT0w56u9noxSsYN1amRUEjNQhxejCd9JTCp5L6%2FBjqnAQ0YB9AZd7TZil2hWqPlPLJN5Us%2Bea1CeikDpdqwo4Wl4u0EJK7LVg8eLaUUYf1f0MT7f95NuqUcQvx7mHVyYh9xRb9p9cY6L3dQY%2F2VuIn0xFnBQt%2FC0tuFjd5y%2B8gFBfbx0Zv5JWEtfe7FClyHPPpGz372YNMfbdCnOoG9jqjdF0pRCYb3geT9EoT4K5oIIrN3H%2FdbKmEfZAznQ4yV7SPmuUFVI%2FFM&X-Amz-Signature=a186db20239319fcc4f4dac56ae0eb91a89a3d01b24500bc33e17fdc12b8be01&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECDZVIM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIHcTViNE9wL8T5iQV1KeM%2B91LVKDmrnacoSgl3AZwd89Ah9sLoQG%2FWKkPVF8d4PmCnP0Eir2v3aEiz%2B4%2FjSLsJJ9Kv8DCBMQABoMNjM3NDIzMTgzODA1Igw%2BX2Kt3fCcPGEuhWsq3ANR14aUbcyzlklunHV3xYmwKfYO4YsBXII6w7ZO4v5dXfnHDZ1VqoeJE7%2F8Y3AbMWvAPljFbci3RnPUKAiyLFBK21166qbly8LTAMLHduJLX0OjR4PDWLSMdZQaMbSke7rpUqWzYRW%2B1iBEAreTwgiyPpxtjnlxV%2FMb6pomOiT%2BM%2BoQT%2F5gAWCg16lo7JZAq5epEpOf8b1G26XqOaCtClwghH30xveCIY2NUuxfJPf04QDTwTAZDmWVqc2V%2F3SlLZfW0m6aqW0FtHwtzFdYt165LchKzLsXF0%2BWS9SCMOsXasuSnV6tZHMayFhsesSmEJ3HZdWHkV85rDhaFqPVRYK%2FNqgDZQOnuP15c7lCJYwPBu0Ie0vAE1QlfrEixMfXQ1xKY4VHIXZk5CbqHNh3k6jp%2F%2BKgaDOTsZa9fdIz6hJXkZCK%2B3P80TJyAYGf8RtpaQF2MqpVlUWJifu0fWdB3WrmDZ2KryQZLBwayBhz6P6KQtxY%2F1xopudHrXM1qhiX0xjm7M85alRKDLua3V94GNdCWpwpX%2FiKyUWakO9KeBj6lItCHgYF7nUn5KU9m%2BF4GBwJb3oikyLO97WmTbLKgTnm3C5Jv%2FT0w56u9noxSsYN1amRUEjNQhxejCd9JTCp5L6%2FBjqnAQ0YB9AZd7TZil2hWqPlPLJN5Us%2Bea1CeikDpdqwo4Wl4u0EJK7LVg8eLaUUYf1f0MT7f95NuqUcQvx7mHVyYh9xRb9p9cY6L3dQY%2F2VuIn0xFnBQt%2FC0tuFjd5y%2B8gFBfbx0Zv5JWEtfe7FClyHPPpGz372YNMfbdCnOoG9jqjdF0pRCYb3geT9EoT4K5oIIrN3H%2FdbKmEfZAznQ4yV7SPmuUFVI%2FFM&X-Amz-Signature=7a87f0ea16b5577e1befb7135453e574fc446b7bfa2fe3c336002e4577f8868c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECDZVIM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIHcTViNE9wL8T5iQV1KeM%2B91LVKDmrnacoSgl3AZwd89Ah9sLoQG%2FWKkPVF8d4PmCnP0Eir2v3aEiz%2B4%2FjSLsJJ9Kv8DCBMQABoMNjM3NDIzMTgzODA1Igw%2BX2Kt3fCcPGEuhWsq3ANR14aUbcyzlklunHV3xYmwKfYO4YsBXII6w7ZO4v5dXfnHDZ1VqoeJE7%2F8Y3AbMWvAPljFbci3RnPUKAiyLFBK21166qbly8LTAMLHduJLX0OjR4PDWLSMdZQaMbSke7rpUqWzYRW%2B1iBEAreTwgiyPpxtjnlxV%2FMb6pomOiT%2BM%2BoQT%2F5gAWCg16lo7JZAq5epEpOf8b1G26XqOaCtClwghH30xveCIY2NUuxfJPf04QDTwTAZDmWVqc2V%2F3SlLZfW0m6aqW0FtHwtzFdYt165LchKzLsXF0%2BWS9SCMOsXasuSnV6tZHMayFhsesSmEJ3HZdWHkV85rDhaFqPVRYK%2FNqgDZQOnuP15c7lCJYwPBu0Ie0vAE1QlfrEixMfXQ1xKY4VHIXZk5CbqHNh3k6jp%2F%2BKgaDOTsZa9fdIz6hJXkZCK%2B3P80TJyAYGf8RtpaQF2MqpVlUWJifu0fWdB3WrmDZ2KryQZLBwayBhz6P6KQtxY%2F1xopudHrXM1qhiX0xjm7M85alRKDLua3V94GNdCWpwpX%2FiKyUWakO9KeBj6lItCHgYF7nUn5KU9m%2BF4GBwJb3oikyLO97WmTbLKgTnm3C5Jv%2FT0w56u9noxSsYN1amRUEjNQhxejCd9JTCp5L6%2FBjqnAQ0YB9AZd7TZil2hWqPlPLJN5Us%2Bea1CeikDpdqwo4Wl4u0EJK7LVg8eLaUUYf1f0MT7f95NuqUcQvx7mHVyYh9xRb9p9cY6L3dQY%2F2VuIn0xFnBQt%2FC0tuFjd5y%2B8gFBfbx0Zv5JWEtfe7FClyHPPpGz372YNMfbdCnOoG9jqjdF0pRCYb3geT9EoT4K5oIIrN3H%2FdbKmEfZAznQ4yV7SPmuUFVI%2FFM&X-Amz-Signature=6cc343c5739871ba36acd31e2234bb383e0042ca00d93c66910d19da7a4a6468&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECDZVIM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIHcTViNE9wL8T5iQV1KeM%2B91LVKDmrnacoSgl3AZwd89Ah9sLoQG%2FWKkPVF8d4PmCnP0Eir2v3aEiz%2B4%2FjSLsJJ9Kv8DCBMQABoMNjM3NDIzMTgzODA1Igw%2BX2Kt3fCcPGEuhWsq3ANR14aUbcyzlklunHV3xYmwKfYO4YsBXII6w7ZO4v5dXfnHDZ1VqoeJE7%2F8Y3AbMWvAPljFbci3RnPUKAiyLFBK21166qbly8LTAMLHduJLX0OjR4PDWLSMdZQaMbSke7rpUqWzYRW%2B1iBEAreTwgiyPpxtjnlxV%2FMb6pomOiT%2BM%2BoQT%2F5gAWCg16lo7JZAq5epEpOf8b1G26XqOaCtClwghH30xveCIY2NUuxfJPf04QDTwTAZDmWVqc2V%2F3SlLZfW0m6aqW0FtHwtzFdYt165LchKzLsXF0%2BWS9SCMOsXasuSnV6tZHMayFhsesSmEJ3HZdWHkV85rDhaFqPVRYK%2FNqgDZQOnuP15c7lCJYwPBu0Ie0vAE1QlfrEixMfXQ1xKY4VHIXZk5CbqHNh3k6jp%2F%2BKgaDOTsZa9fdIz6hJXkZCK%2B3P80TJyAYGf8RtpaQF2MqpVlUWJifu0fWdB3WrmDZ2KryQZLBwayBhz6P6KQtxY%2F1xopudHrXM1qhiX0xjm7M85alRKDLua3V94GNdCWpwpX%2FiKyUWakO9KeBj6lItCHgYF7nUn5KU9m%2BF4GBwJb3oikyLO97WmTbLKgTnm3C5Jv%2FT0w56u9noxSsYN1amRUEjNQhxejCd9JTCp5L6%2FBjqnAQ0YB9AZd7TZil2hWqPlPLJN5Us%2Bea1CeikDpdqwo4Wl4u0EJK7LVg8eLaUUYf1f0MT7f95NuqUcQvx7mHVyYh9xRb9p9cY6L3dQY%2F2VuIn0xFnBQt%2FC0tuFjd5y%2B8gFBfbx0Zv5JWEtfe7FClyHPPpGz372YNMfbdCnOoG9jqjdF0pRCYb3geT9EoT4K5oIIrN3H%2FdbKmEfZAznQ4yV7SPmuUFVI%2FFM&X-Amz-Signature=b6259f3723b8ff48b7b0bb53a8d8e7fcbcb4a7832cbfb20bbe5434e8b20ed114&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECDZVIM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIHcTViNE9wL8T5iQV1KeM%2B91LVKDmrnacoSgl3AZwd89Ah9sLoQG%2FWKkPVF8d4PmCnP0Eir2v3aEiz%2B4%2FjSLsJJ9Kv8DCBMQABoMNjM3NDIzMTgzODA1Igw%2BX2Kt3fCcPGEuhWsq3ANR14aUbcyzlklunHV3xYmwKfYO4YsBXII6w7ZO4v5dXfnHDZ1VqoeJE7%2F8Y3AbMWvAPljFbci3RnPUKAiyLFBK21166qbly8LTAMLHduJLX0OjR4PDWLSMdZQaMbSke7rpUqWzYRW%2B1iBEAreTwgiyPpxtjnlxV%2FMb6pomOiT%2BM%2BoQT%2F5gAWCg16lo7JZAq5epEpOf8b1G26XqOaCtClwghH30xveCIY2NUuxfJPf04QDTwTAZDmWVqc2V%2F3SlLZfW0m6aqW0FtHwtzFdYt165LchKzLsXF0%2BWS9SCMOsXasuSnV6tZHMayFhsesSmEJ3HZdWHkV85rDhaFqPVRYK%2FNqgDZQOnuP15c7lCJYwPBu0Ie0vAE1QlfrEixMfXQ1xKY4VHIXZk5CbqHNh3k6jp%2F%2BKgaDOTsZa9fdIz6hJXkZCK%2B3P80TJyAYGf8RtpaQF2MqpVlUWJifu0fWdB3WrmDZ2KryQZLBwayBhz6P6KQtxY%2F1xopudHrXM1qhiX0xjm7M85alRKDLua3V94GNdCWpwpX%2FiKyUWakO9KeBj6lItCHgYF7nUn5KU9m%2BF4GBwJb3oikyLO97WmTbLKgTnm3C5Jv%2FT0w56u9noxSsYN1amRUEjNQhxejCd9JTCp5L6%2FBjqnAQ0YB9AZd7TZil2hWqPlPLJN5Us%2Bea1CeikDpdqwo4Wl4u0EJK7LVg8eLaUUYf1f0MT7f95NuqUcQvx7mHVyYh9xRb9p9cY6L3dQY%2F2VuIn0xFnBQt%2FC0tuFjd5y%2B8gFBfbx0Zv5JWEtfe7FClyHPPpGz372YNMfbdCnOoG9jqjdF0pRCYb3geT9EoT4K5oIIrN3H%2FdbKmEfZAznQ4yV7SPmuUFVI%2FFM&X-Amz-Signature=63a173779653b05f4e750af06bcca7b17f827eae3593095c86bd6671740c8b27&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
