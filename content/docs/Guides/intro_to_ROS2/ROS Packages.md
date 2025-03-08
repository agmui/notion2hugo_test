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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPEUFKA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFH%2FmOfVgZ6%2BiWgJww%2BURxCrmfoNdYGQ%2FL9umII3e0E7AiEApvP3sba%2Bqraupj%2BZmjNJwIuuXXh4QbakZ37m4vOeHM4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGyRVXkeAzbpD1rTWCrcA8a90In6uCsNq85WQYo90%2BN%2FVkJ%2BaePWIyEuXJQCVYI%2BorV0Q1evMzFntYPqekIAOQvzE8kQtSC3gsMZ%2BYLjgirwL74wqeAg8BoNBwVZKB9jXcZ%2FbKnlVejIPXEtGW3I0BIZvoC1Wg5sJqo7B1dB06aw%2BLlFZRg7pCELz6dHxMmQzbv7WytLk7KywjY5%2Bs3p2eX%2Fk4%2FJwB1ZxlHHYMaPyFfeEH%2BZYYFcikXGhpXoAbaAm4Zf1hazwT8dQ7suJl7iGkfl2wPoRuJhGQpO8Bdh9Lqkq8Saod7swPO7%2B54X8rsvCZB%2Fy%2FF3wraml0worLpYMOiT156LPlzroWZmpOBaYxMEXmVT1NneKKiTIbxMTtrxvRjGRWFhhPmOLtU4%2FjprovwG27gRKfUIJKTXRvnw%2BvMgf0yEpfkbWf5VISjz0YQdmdfhY0IHpmVzNum2vbcj%2B3HkOr11%2FBKpOE2hKDBemjAFM19FZCQDUdmSasZqg%2BO9Jt%2BDA1yp%2BbEhx4JYAuN8AFqsQQyvk3bDp26z%2FVUqAC8VG70pf3s%2F8BQvVuDKLIE8%2FclVjGQCfppyoevwNc2%2BNuOMohNJWM1HoH3flB6Ma6NJNGoCxAw%2Fe1kCc9vmsPbodzxm5Bh0HUk8cgMQMMyCsr4GOqUBh%2BtrT5aL8a2GNcDRfXbzQvifI0B%2BDd1BMQBP3u3oSAYC3mNF8DaqIJ7TaQdv8dMDj1iWYIRvwC6kCy0RXv2GdRKvQ61u%2FQKDphuHIgqGroBOcv7ukQtu5iqgOSlVeRVo6BOn6YejmJa7TnqCIypJbQPYvNA9TMa3b8sR25W%2ByEVorHltlP6Wy7l61wR8AVc5xeZMdEgSYzNOtIkCnIyJiLNZXYBY&X-Amz-Signature=58af6a53d280c9a8642e9eb2363ff1e5aa840c089b6a978dec33ebe2cb271f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPEUFKA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFH%2FmOfVgZ6%2BiWgJww%2BURxCrmfoNdYGQ%2FL9umII3e0E7AiEApvP3sba%2Bqraupj%2BZmjNJwIuuXXh4QbakZ37m4vOeHM4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGyRVXkeAzbpD1rTWCrcA8a90In6uCsNq85WQYo90%2BN%2FVkJ%2BaePWIyEuXJQCVYI%2BorV0Q1evMzFntYPqekIAOQvzE8kQtSC3gsMZ%2BYLjgirwL74wqeAg8BoNBwVZKB9jXcZ%2FbKnlVejIPXEtGW3I0BIZvoC1Wg5sJqo7B1dB06aw%2BLlFZRg7pCELz6dHxMmQzbv7WytLk7KywjY5%2Bs3p2eX%2Fk4%2FJwB1ZxlHHYMaPyFfeEH%2BZYYFcikXGhpXoAbaAm4Zf1hazwT8dQ7suJl7iGkfl2wPoRuJhGQpO8Bdh9Lqkq8Saod7swPO7%2B54X8rsvCZB%2Fy%2FF3wraml0worLpYMOiT156LPlzroWZmpOBaYxMEXmVT1NneKKiTIbxMTtrxvRjGRWFhhPmOLtU4%2FjprovwG27gRKfUIJKTXRvnw%2BvMgf0yEpfkbWf5VISjz0YQdmdfhY0IHpmVzNum2vbcj%2B3HkOr11%2FBKpOE2hKDBemjAFM19FZCQDUdmSasZqg%2BO9Jt%2BDA1yp%2BbEhx4JYAuN8AFqsQQyvk3bDp26z%2FVUqAC8VG70pf3s%2F8BQvVuDKLIE8%2FclVjGQCfppyoevwNc2%2BNuOMohNJWM1HoH3flB6Ma6NJNGoCxAw%2Fe1kCc9vmsPbodzxm5Bh0HUk8cgMQMMyCsr4GOqUBh%2BtrT5aL8a2GNcDRfXbzQvifI0B%2BDd1BMQBP3u3oSAYC3mNF8DaqIJ7TaQdv8dMDj1iWYIRvwC6kCy0RXv2GdRKvQ61u%2FQKDphuHIgqGroBOcv7ukQtu5iqgOSlVeRVo6BOn6YejmJa7TnqCIypJbQPYvNA9TMa3b8sR25W%2ByEVorHltlP6Wy7l61wR8AVc5xeZMdEgSYzNOtIkCnIyJiLNZXYBY&X-Amz-Signature=9523db5cba7c718e93b2dfe1c8c61d9207507400a8c70b5107aa5c11e74e410f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPEUFKA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFH%2FmOfVgZ6%2BiWgJww%2BURxCrmfoNdYGQ%2FL9umII3e0E7AiEApvP3sba%2Bqraupj%2BZmjNJwIuuXXh4QbakZ37m4vOeHM4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGyRVXkeAzbpD1rTWCrcA8a90In6uCsNq85WQYo90%2BN%2FVkJ%2BaePWIyEuXJQCVYI%2BorV0Q1evMzFntYPqekIAOQvzE8kQtSC3gsMZ%2BYLjgirwL74wqeAg8BoNBwVZKB9jXcZ%2FbKnlVejIPXEtGW3I0BIZvoC1Wg5sJqo7B1dB06aw%2BLlFZRg7pCELz6dHxMmQzbv7WytLk7KywjY5%2Bs3p2eX%2Fk4%2FJwB1ZxlHHYMaPyFfeEH%2BZYYFcikXGhpXoAbaAm4Zf1hazwT8dQ7suJl7iGkfl2wPoRuJhGQpO8Bdh9Lqkq8Saod7swPO7%2B54X8rsvCZB%2Fy%2FF3wraml0worLpYMOiT156LPlzroWZmpOBaYxMEXmVT1NneKKiTIbxMTtrxvRjGRWFhhPmOLtU4%2FjprovwG27gRKfUIJKTXRvnw%2BvMgf0yEpfkbWf5VISjz0YQdmdfhY0IHpmVzNum2vbcj%2B3HkOr11%2FBKpOE2hKDBemjAFM19FZCQDUdmSasZqg%2BO9Jt%2BDA1yp%2BbEhx4JYAuN8AFqsQQyvk3bDp26z%2FVUqAC8VG70pf3s%2F8BQvVuDKLIE8%2FclVjGQCfppyoevwNc2%2BNuOMohNJWM1HoH3flB6Ma6NJNGoCxAw%2Fe1kCc9vmsPbodzxm5Bh0HUk8cgMQMMyCsr4GOqUBh%2BtrT5aL8a2GNcDRfXbzQvifI0B%2BDd1BMQBP3u3oSAYC3mNF8DaqIJ7TaQdv8dMDj1iWYIRvwC6kCy0RXv2GdRKvQ61u%2FQKDphuHIgqGroBOcv7ukQtu5iqgOSlVeRVo6BOn6YejmJa7TnqCIypJbQPYvNA9TMa3b8sR25W%2ByEVorHltlP6Wy7l61wR8AVc5xeZMdEgSYzNOtIkCnIyJiLNZXYBY&X-Amz-Signature=847f419d55565759950b8b779ebcf3715ce5657e0c7cac9a7e89246fc28ebee3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPEUFKA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFH%2FmOfVgZ6%2BiWgJww%2BURxCrmfoNdYGQ%2FL9umII3e0E7AiEApvP3sba%2Bqraupj%2BZmjNJwIuuXXh4QbakZ37m4vOeHM4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGyRVXkeAzbpD1rTWCrcA8a90In6uCsNq85WQYo90%2BN%2FVkJ%2BaePWIyEuXJQCVYI%2BorV0Q1evMzFntYPqekIAOQvzE8kQtSC3gsMZ%2BYLjgirwL74wqeAg8BoNBwVZKB9jXcZ%2FbKnlVejIPXEtGW3I0BIZvoC1Wg5sJqo7B1dB06aw%2BLlFZRg7pCELz6dHxMmQzbv7WytLk7KywjY5%2Bs3p2eX%2Fk4%2FJwB1ZxlHHYMaPyFfeEH%2BZYYFcikXGhpXoAbaAm4Zf1hazwT8dQ7suJl7iGkfl2wPoRuJhGQpO8Bdh9Lqkq8Saod7swPO7%2B54X8rsvCZB%2Fy%2FF3wraml0worLpYMOiT156LPlzroWZmpOBaYxMEXmVT1NneKKiTIbxMTtrxvRjGRWFhhPmOLtU4%2FjprovwG27gRKfUIJKTXRvnw%2BvMgf0yEpfkbWf5VISjz0YQdmdfhY0IHpmVzNum2vbcj%2B3HkOr11%2FBKpOE2hKDBemjAFM19FZCQDUdmSasZqg%2BO9Jt%2BDA1yp%2BbEhx4JYAuN8AFqsQQyvk3bDp26z%2FVUqAC8VG70pf3s%2F8BQvVuDKLIE8%2FclVjGQCfppyoevwNc2%2BNuOMohNJWM1HoH3flB6Ma6NJNGoCxAw%2Fe1kCc9vmsPbodzxm5Bh0HUk8cgMQMMyCsr4GOqUBh%2BtrT5aL8a2GNcDRfXbzQvifI0B%2BDd1BMQBP3u3oSAYC3mNF8DaqIJ7TaQdv8dMDj1iWYIRvwC6kCy0RXv2GdRKvQ61u%2FQKDphuHIgqGroBOcv7ukQtu5iqgOSlVeRVo6BOn6YejmJa7TnqCIypJbQPYvNA9TMa3b8sR25W%2ByEVorHltlP6Wy7l61wR8AVc5xeZMdEgSYzNOtIkCnIyJiLNZXYBY&X-Amz-Signature=02eb1dedabba8d0dcbce7c249d0f3ea5324676832af5e2b4ab1cdfa20fa269f6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPEUFKA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFH%2FmOfVgZ6%2BiWgJww%2BURxCrmfoNdYGQ%2FL9umII3e0E7AiEApvP3sba%2Bqraupj%2BZmjNJwIuuXXh4QbakZ37m4vOeHM4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGyRVXkeAzbpD1rTWCrcA8a90In6uCsNq85WQYo90%2BN%2FVkJ%2BaePWIyEuXJQCVYI%2BorV0Q1evMzFntYPqekIAOQvzE8kQtSC3gsMZ%2BYLjgirwL74wqeAg8BoNBwVZKB9jXcZ%2FbKnlVejIPXEtGW3I0BIZvoC1Wg5sJqo7B1dB06aw%2BLlFZRg7pCELz6dHxMmQzbv7WytLk7KywjY5%2Bs3p2eX%2Fk4%2FJwB1ZxlHHYMaPyFfeEH%2BZYYFcikXGhpXoAbaAm4Zf1hazwT8dQ7suJl7iGkfl2wPoRuJhGQpO8Bdh9Lqkq8Saod7swPO7%2B54X8rsvCZB%2Fy%2FF3wraml0worLpYMOiT156LPlzroWZmpOBaYxMEXmVT1NneKKiTIbxMTtrxvRjGRWFhhPmOLtU4%2FjprovwG27gRKfUIJKTXRvnw%2BvMgf0yEpfkbWf5VISjz0YQdmdfhY0IHpmVzNum2vbcj%2B3HkOr11%2FBKpOE2hKDBemjAFM19FZCQDUdmSasZqg%2BO9Jt%2BDA1yp%2BbEhx4JYAuN8AFqsQQyvk3bDp26z%2FVUqAC8VG70pf3s%2F8BQvVuDKLIE8%2FclVjGQCfppyoevwNc2%2BNuOMohNJWM1HoH3flB6Ma6NJNGoCxAw%2Fe1kCc9vmsPbodzxm5Bh0HUk8cgMQMMyCsr4GOqUBh%2BtrT5aL8a2GNcDRfXbzQvifI0B%2BDd1BMQBP3u3oSAYC3mNF8DaqIJ7TaQdv8dMDj1iWYIRvwC6kCy0RXv2GdRKvQ61u%2FQKDphuHIgqGroBOcv7ukQtu5iqgOSlVeRVo6BOn6YejmJa7TnqCIypJbQPYvNA9TMa3b8sR25W%2ByEVorHltlP6Wy7l61wR8AVc5xeZMdEgSYzNOtIkCnIyJiLNZXYBY&X-Amz-Signature=9447ea71d9fec2669d079e659906fcadfcec1a2c568c75fd2540b8a74c0045ef&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPEUFKA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFH%2FmOfVgZ6%2BiWgJww%2BURxCrmfoNdYGQ%2FL9umII3e0E7AiEApvP3sba%2Bqraupj%2BZmjNJwIuuXXh4QbakZ37m4vOeHM4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGyRVXkeAzbpD1rTWCrcA8a90In6uCsNq85WQYo90%2BN%2FVkJ%2BaePWIyEuXJQCVYI%2BorV0Q1evMzFntYPqekIAOQvzE8kQtSC3gsMZ%2BYLjgirwL74wqeAg8BoNBwVZKB9jXcZ%2FbKnlVejIPXEtGW3I0BIZvoC1Wg5sJqo7B1dB06aw%2BLlFZRg7pCELz6dHxMmQzbv7WytLk7KywjY5%2Bs3p2eX%2Fk4%2FJwB1ZxlHHYMaPyFfeEH%2BZYYFcikXGhpXoAbaAm4Zf1hazwT8dQ7suJl7iGkfl2wPoRuJhGQpO8Bdh9Lqkq8Saod7swPO7%2B54X8rsvCZB%2Fy%2FF3wraml0worLpYMOiT156LPlzroWZmpOBaYxMEXmVT1NneKKiTIbxMTtrxvRjGRWFhhPmOLtU4%2FjprovwG27gRKfUIJKTXRvnw%2BvMgf0yEpfkbWf5VISjz0YQdmdfhY0IHpmVzNum2vbcj%2B3HkOr11%2FBKpOE2hKDBemjAFM19FZCQDUdmSasZqg%2BO9Jt%2BDA1yp%2BbEhx4JYAuN8AFqsQQyvk3bDp26z%2FVUqAC8VG70pf3s%2F8BQvVuDKLIE8%2FclVjGQCfppyoevwNc2%2BNuOMohNJWM1HoH3flB6Ma6NJNGoCxAw%2Fe1kCc9vmsPbodzxm5Bh0HUk8cgMQMMyCsr4GOqUBh%2BtrT5aL8a2GNcDRfXbzQvifI0B%2BDd1BMQBP3u3oSAYC3mNF8DaqIJ7TaQdv8dMDj1iWYIRvwC6kCy0RXv2GdRKvQ61u%2FQKDphuHIgqGroBOcv7ukQtu5iqgOSlVeRVo6BOn6YejmJa7TnqCIypJbQPYvNA9TMa3b8sR25W%2ByEVorHltlP6Wy7l61wR8AVc5xeZMdEgSYzNOtIkCnIyJiLNZXYBY&X-Amz-Signature=1f909dc503d1cdbdd5bd8eb97a5e0d3ce96ec13511afbb1cf1f27a1589bb6574&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPEUFKA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T180741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFH%2FmOfVgZ6%2BiWgJww%2BURxCrmfoNdYGQ%2FL9umII3e0E7AiEApvP3sba%2Bqraupj%2BZmjNJwIuuXXh4QbakZ37m4vOeHM4q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGyRVXkeAzbpD1rTWCrcA8a90In6uCsNq85WQYo90%2BN%2FVkJ%2BaePWIyEuXJQCVYI%2BorV0Q1evMzFntYPqekIAOQvzE8kQtSC3gsMZ%2BYLjgirwL74wqeAg8BoNBwVZKB9jXcZ%2FbKnlVejIPXEtGW3I0BIZvoC1Wg5sJqo7B1dB06aw%2BLlFZRg7pCELz6dHxMmQzbv7WytLk7KywjY5%2Bs3p2eX%2Fk4%2FJwB1ZxlHHYMaPyFfeEH%2BZYYFcikXGhpXoAbaAm4Zf1hazwT8dQ7suJl7iGkfl2wPoRuJhGQpO8Bdh9Lqkq8Saod7swPO7%2B54X8rsvCZB%2Fy%2FF3wraml0worLpYMOiT156LPlzroWZmpOBaYxMEXmVT1NneKKiTIbxMTtrxvRjGRWFhhPmOLtU4%2FjprovwG27gRKfUIJKTXRvnw%2BvMgf0yEpfkbWf5VISjz0YQdmdfhY0IHpmVzNum2vbcj%2B3HkOr11%2FBKpOE2hKDBemjAFM19FZCQDUdmSasZqg%2BO9Jt%2BDA1yp%2BbEhx4JYAuN8AFqsQQyvk3bDp26z%2FVUqAC8VG70pf3s%2F8BQvVuDKLIE8%2FclVjGQCfppyoevwNc2%2BNuOMohNJWM1HoH3flB6Ma6NJNGoCxAw%2Fe1kCc9vmsPbodzxm5Bh0HUk8cgMQMMyCsr4GOqUBh%2BtrT5aL8a2GNcDRfXbzQvifI0B%2BDd1BMQBP3u3oSAYC3mNF8DaqIJ7TaQdv8dMDj1iWYIRvwC6kCy0RXv2GdRKvQ61u%2FQKDphuHIgqGroBOcv7ukQtu5iqgOSlVeRVo6BOn6YejmJa7TnqCIypJbQPYvNA9TMa3b8sR25W%2ByEVorHltlP6Wy7l61wR8AVc5xeZMdEgSYzNOtIkCnIyJiLNZXYBY&X-Amz-Signature=2ec2717278b28f71444e876f1bc678ef0fc721953d35649f3c20604e8fb6c9f3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
