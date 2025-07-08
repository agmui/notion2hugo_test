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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUJXYOK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BhYNJ17IvJf5EG7WdFpnREN5XAfgxuyJpRsbDIArnHAiACXe1GLDV3Ptq5zDKUpyJHxdkx8qc5XLifT8NTeMYhvyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxMPY%2BNG6mMAR2ucHKtwDhGLQxrLRp2EldYX4Z1wp8LW4owI1bRepq6DwXxX1EK9HVdYo6opoOhqsDPLCzPRdfjFGzgGubrHHZ%2B57nCc6x6xxmoI7lsQAnjr1kjbQL%2BWfVGICgcIuyHgLqZZuxJWkcH32tqFyNmhIgDl%2BLK90vD3NGp0jVGBSxvabNZNdgxjWD%2Fs8m6cCZO2gAPXWsrPmwyafoZ5%2BCAq9mJxDb%2Be7KV24NUojFjZK8qiKKLASb%2FHnV%2FiunYwDq%2Fai1Qhy5XEvuPJKAV6WKmVGVwtXWDnuwq2Ji7uh8rF0uvmUY1U1Y3rJe0068eVFpgCPPijaCOVP9UndLGem%2Ff6oXQ4YB0L1t8%2BBA0SjoKDWML2PcxDarq9DcBgqpFZm0zMSRZZu%2FnyRM5c01RCYjZO4fH%2BFoSrvu9r%2FHtTBm0yQKuoyBVw4NWOMy%2FRIfLffFqxYzmU6dul%2BgcKmjfn7e%2Bt6AMWeEIzd768s2Gzi2vwQh%2FyOug4qh0CkA3xvCZHYQtYxo5oafrKo8PRikyB7iCRvLI8Sz1xDV8ibt67BFL7wykVm%2BoU4XEafpjBwxV%2FkoIRgECj9gstdqXFuY2SzQY1mx5jEyVFm6hSqealiSgH6DBSvqTVh4yiOIq8ub1c2P%2F6RAwAwroC1wwY6pgH5noViGndjNODFbqIq1WjkZK3hVNUZjxrUXPxdfpTdwZfkMw3j5vnxKB2BVXPHC2V%2BioyUNwjpTr03vALaHD%2FrF0W%2Bw1J1VqwITA2FarE4hwfgbiLNHeNuZMUzYSv67kmv0FDQf1QNNM9DtH%2Bor2ddaa60pS7Xqe2CFPBmNhCd1gKwtozib2DYrUm%2BS2ElqIggjKmBgHVJK7zIQv3vErpQNl7HKpEu&X-Amz-Signature=329037e0e54e715221b00e3b53c885b477fa0c661094d05b89c3bf6bc09b54ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUJXYOK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BhYNJ17IvJf5EG7WdFpnREN5XAfgxuyJpRsbDIArnHAiACXe1GLDV3Ptq5zDKUpyJHxdkx8qc5XLifT8NTeMYhvyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxMPY%2BNG6mMAR2ucHKtwDhGLQxrLRp2EldYX4Z1wp8LW4owI1bRepq6DwXxX1EK9HVdYo6opoOhqsDPLCzPRdfjFGzgGubrHHZ%2B57nCc6x6xxmoI7lsQAnjr1kjbQL%2BWfVGICgcIuyHgLqZZuxJWkcH32tqFyNmhIgDl%2BLK90vD3NGp0jVGBSxvabNZNdgxjWD%2Fs8m6cCZO2gAPXWsrPmwyafoZ5%2BCAq9mJxDb%2Be7KV24NUojFjZK8qiKKLASb%2FHnV%2FiunYwDq%2Fai1Qhy5XEvuPJKAV6WKmVGVwtXWDnuwq2Ji7uh8rF0uvmUY1U1Y3rJe0068eVFpgCPPijaCOVP9UndLGem%2Ff6oXQ4YB0L1t8%2BBA0SjoKDWML2PcxDarq9DcBgqpFZm0zMSRZZu%2FnyRM5c01RCYjZO4fH%2BFoSrvu9r%2FHtTBm0yQKuoyBVw4NWOMy%2FRIfLffFqxYzmU6dul%2BgcKmjfn7e%2Bt6AMWeEIzd768s2Gzi2vwQh%2FyOug4qh0CkA3xvCZHYQtYxo5oafrKo8PRikyB7iCRvLI8Sz1xDV8ibt67BFL7wykVm%2BoU4XEafpjBwxV%2FkoIRgECj9gstdqXFuY2SzQY1mx5jEyVFm6hSqealiSgH6DBSvqTVh4yiOIq8ub1c2P%2F6RAwAwroC1wwY6pgH5noViGndjNODFbqIq1WjkZK3hVNUZjxrUXPxdfpTdwZfkMw3j5vnxKB2BVXPHC2V%2BioyUNwjpTr03vALaHD%2FrF0W%2Bw1J1VqwITA2FarE4hwfgbiLNHeNuZMUzYSv67kmv0FDQf1QNNM9DtH%2Bor2ddaa60pS7Xqe2CFPBmNhCd1gKwtozib2DYrUm%2BS2ElqIggjKmBgHVJK7zIQv3vErpQNl7HKpEu&X-Amz-Signature=67e44ec547ca9b48aaffc6fc4128901219968f85e97c9754498bf9f88aaeb774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUJXYOK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BhYNJ17IvJf5EG7WdFpnREN5XAfgxuyJpRsbDIArnHAiACXe1GLDV3Ptq5zDKUpyJHxdkx8qc5XLifT8NTeMYhvyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxMPY%2BNG6mMAR2ucHKtwDhGLQxrLRp2EldYX4Z1wp8LW4owI1bRepq6DwXxX1EK9HVdYo6opoOhqsDPLCzPRdfjFGzgGubrHHZ%2B57nCc6x6xxmoI7lsQAnjr1kjbQL%2BWfVGICgcIuyHgLqZZuxJWkcH32tqFyNmhIgDl%2BLK90vD3NGp0jVGBSxvabNZNdgxjWD%2Fs8m6cCZO2gAPXWsrPmwyafoZ5%2BCAq9mJxDb%2Be7KV24NUojFjZK8qiKKLASb%2FHnV%2FiunYwDq%2Fai1Qhy5XEvuPJKAV6WKmVGVwtXWDnuwq2Ji7uh8rF0uvmUY1U1Y3rJe0068eVFpgCPPijaCOVP9UndLGem%2Ff6oXQ4YB0L1t8%2BBA0SjoKDWML2PcxDarq9DcBgqpFZm0zMSRZZu%2FnyRM5c01RCYjZO4fH%2BFoSrvu9r%2FHtTBm0yQKuoyBVw4NWOMy%2FRIfLffFqxYzmU6dul%2BgcKmjfn7e%2Bt6AMWeEIzd768s2Gzi2vwQh%2FyOug4qh0CkA3xvCZHYQtYxo5oafrKo8PRikyB7iCRvLI8Sz1xDV8ibt67BFL7wykVm%2BoU4XEafpjBwxV%2FkoIRgECj9gstdqXFuY2SzQY1mx5jEyVFm6hSqealiSgH6DBSvqTVh4yiOIq8ub1c2P%2F6RAwAwroC1wwY6pgH5noViGndjNODFbqIq1WjkZK3hVNUZjxrUXPxdfpTdwZfkMw3j5vnxKB2BVXPHC2V%2BioyUNwjpTr03vALaHD%2FrF0W%2Bw1J1VqwITA2FarE4hwfgbiLNHeNuZMUzYSv67kmv0FDQf1QNNM9DtH%2Bor2ddaa60pS7Xqe2CFPBmNhCd1gKwtozib2DYrUm%2BS2ElqIggjKmBgHVJK7zIQv3vErpQNl7HKpEu&X-Amz-Signature=1c24c766047f8570ee24d2d53b8cd01a4b5f8843329e8eef3acece35b6768248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUJXYOK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BhYNJ17IvJf5EG7WdFpnREN5XAfgxuyJpRsbDIArnHAiACXe1GLDV3Ptq5zDKUpyJHxdkx8qc5XLifT8NTeMYhvyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxMPY%2BNG6mMAR2ucHKtwDhGLQxrLRp2EldYX4Z1wp8LW4owI1bRepq6DwXxX1EK9HVdYo6opoOhqsDPLCzPRdfjFGzgGubrHHZ%2B57nCc6x6xxmoI7lsQAnjr1kjbQL%2BWfVGICgcIuyHgLqZZuxJWkcH32tqFyNmhIgDl%2BLK90vD3NGp0jVGBSxvabNZNdgxjWD%2Fs8m6cCZO2gAPXWsrPmwyafoZ5%2BCAq9mJxDb%2Be7KV24NUojFjZK8qiKKLASb%2FHnV%2FiunYwDq%2Fai1Qhy5XEvuPJKAV6WKmVGVwtXWDnuwq2Ji7uh8rF0uvmUY1U1Y3rJe0068eVFpgCPPijaCOVP9UndLGem%2Ff6oXQ4YB0L1t8%2BBA0SjoKDWML2PcxDarq9DcBgqpFZm0zMSRZZu%2FnyRM5c01RCYjZO4fH%2BFoSrvu9r%2FHtTBm0yQKuoyBVw4NWOMy%2FRIfLffFqxYzmU6dul%2BgcKmjfn7e%2Bt6AMWeEIzd768s2Gzi2vwQh%2FyOug4qh0CkA3xvCZHYQtYxo5oafrKo8PRikyB7iCRvLI8Sz1xDV8ibt67BFL7wykVm%2BoU4XEafpjBwxV%2FkoIRgECj9gstdqXFuY2SzQY1mx5jEyVFm6hSqealiSgH6DBSvqTVh4yiOIq8ub1c2P%2F6RAwAwroC1wwY6pgH5noViGndjNODFbqIq1WjkZK3hVNUZjxrUXPxdfpTdwZfkMw3j5vnxKB2BVXPHC2V%2BioyUNwjpTr03vALaHD%2FrF0W%2Bw1J1VqwITA2FarE4hwfgbiLNHeNuZMUzYSv67kmv0FDQf1QNNM9DtH%2Bor2ddaa60pS7Xqe2CFPBmNhCd1gKwtozib2DYrUm%2BS2ElqIggjKmBgHVJK7zIQv3vErpQNl7HKpEu&X-Amz-Signature=2ab05c20659698c9c8f2c8796b37d7497df8a0a481946d74177d85730bdff78b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUJXYOK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BhYNJ17IvJf5EG7WdFpnREN5XAfgxuyJpRsbDIArnHAiACXe1GLDV3Ptq5zDKUpyJHxdkx8qc5XLifT8NTeMYhvyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxMPY%2BNG6mMAR2ucHKtwDhGLQxrLRp2EldYX4Z1wp8LW4owI1bRepq6DwXxX1EK9HVdYo6opoOhqsDPLCzPRdfjFGzgGubrHHZ%2B57nCc6x6xxmoI7lsQAnjr1kjbQL%2BWfVGICgcIuyHgLqZZuxJWkcH32tqFyNmhIgDl%2BLK90vD3NGp0jVGBSxvabNZNdgxjWD%2Fs8m6cCZO2gAPXWsrPmwyafoZ5%2BCAq9mJxDb%2Be7KV24NUojFjZK8qiKKLASb%2FHnV%2FiunYwDq%2Fai1Qhy5XEvuPJKAV6WKmVGVwtXWDnuwq2Ji7uh8rF0uvmUY1U1Y3rJe0068eVFpgCPPijaCOVP9UndLGem%2Ff6oXQ4YB0L1t8%2BBA0SjoKDWML2PcxDarq9DcBgqpFZm0zMSRZZu%2FnyRM5c01RCYjZO4fH%2BFoSrvu9r%2FHtTBm0yQKuoyBVw4NWOMy%2FRIfLffFqxYzmU6dul%2BgcKmjfn7e%2Bt6AMWeEIzd768s2Gzi2vwQh%2FyOug4qh0CkA3xvCZHYQtYxo5oafrKo8PRikyB7iCRvLI8Sz1xDV8ibt67BFL7wykVm%2BoU4XEafpjBwxV%2FkoIRgECj9gstdqXFuY2SzQY1mx5jEyVFm6hSqealiSgH6DBSvqTVh4yiOIq8ub1c2P%2F6RAwAwroC1wwY6pgH5noViGndjNODFbqIq1WjkZK3hVNUZjxrUXPxdfpTdwZfkMw3j5vnxKB2BVXPHC2V%2BioyUNwjpTr03vALaHD%2FrF0W%2Bw1J1VqwITA2FarE4hwfgbiLNHeNuZMUzYSv67kmv0FDQf1QNNM9DtH%2Bor2ddaa60pS7Xqe2CFPBmNhCd1gKwtozib2DYrUm%2BS2ElqIggjKmBgHVJK7zIQv3vErpQNl7HKpEu&X-Amz-Signature=855a31cad68d7f8b39524ee08dbbec3503f75cf8af355b84f19a6dfd12637244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUJXYOK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BhYNJ17IvJf5EG7WdFpnREN5XAfgxuyJpRsbDIArnHAiACXe1GLDV3Ptq5zDKUpyJHxdkx8qc5XLifT8NTeMYhvyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxMPY%2BNG6mMAR2ucHKtwDhGLQxrLRp2EldYX4Z1wp8LW4owI1bRepq6DwXxX1EK9HVdYo6opoOhqsDPLCzPRdfjFGzgGubrHHZ%2B57nCc6x6xxmoI7lsQAnjr1kjbQL%2BWfVGICgcIuyHgLqZZuxJWkcH32tqFyNmhIgDl%2BLK90vD3NGp0jVGBSxvabNZNdgxjWD%2Fs8m6cCZO2gAPXWsrPmwyafoZ5%2BCAq9mJxDb%2Be7KV24NUojFjZK8qiKKLASb%2FHnV%2FiunYwDq%2Fai1Qhy5XEvuPJKAV6WKmVGVwtXWDnuwq2Ji7uh8rF0uvmUY1U1Y3rJe0068eVFpgCPPijaCOVP9UndLGem%2Ff6oXQ4YB0L1t8%2BBA0SjoKDWML2PcxDarq9DcBgqpFZm0zMSRZZu%2FnyRM5c01RCYjZO4fH%2BFoSrvu9r%2FHtTBm0yQKuoyBVw4NWOMy%2FRIfLffFqxYzmU6dul%2BgcKmjfn7e%2Bt6AMWeEIzd768s2Gzi2vwQh%2FyOug4qh0CkA3xvCZHYQtYxo5oafrKo8PRikyB7iCRvLI8Sz1xDV8ibt67BFL7wykVm%2BoU4XEafpjBwxV%2FkoIRgECj9gstdqXFuY2SzQY1mx5jEyVFm6hSqealiSgH6DBSvqTVh4yiOIq8ub1c2P%2F6RAwAwroC1wwY6pgH5noViGndjNODFbqIq1WjkZK3hVNUZjxrUXPxdfpTdwZfkMw3j5vnxKB2BVXPHC2V%2BioyUNwjpTr03vALaHD%2FrF0W%2Bw1J1VqwITA2FarE4hwfgbiLNHeNuZMUzYSv67kmv0FDQf1QNNM9DtH%2Bor2ddaa60pS7Xqe2CFPBmNhCd1gKwtozib2DYrUm%2BS2ElqIggjKmBgHVJK7zIQv3vErpQNl7HKpEu&X-Amz-Signature=d8ca0784f61d8dd79d3a2de9deca3cbed10e1ed1776385f2db155e4b4edf3dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUJXYOK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BhYNJ17IvJf5EG7WdFpnREN5XAfgxuyJpRsbDIArnHAiACXe1GLDV3Ptq5zDKUpyJHxdkx8qc5XLifT8NTeMYhvyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxMPY%2BNG6mMAR2ucHKtwDhGLQxrLRp2EldYX4Z1wp8LW4owI1bRepq6DwXxX1EK9HVdYo6opoOhqsDPLCzPRdfjFGzgGubrHHZ%2B57nCc6x6xxmoI7lsQAnjr1kjbQL%2BWfVGICgcIuyHgLqZZuxJWkcH32tqFyNmhIgDl%2BLK90vD3NGp0jVGBSxvabNZNdgxjWD%2Fs8m6cCZO2gAPXWsrPmwyafoZ5%2BCAq9mJxDb%2Be7KV24NUojFjZK8qiKKLASb%2FHnV%2FiunYwDq%2Fai1Qhy5XEvuPJKAV6WKmVGVwtXWDnuwq2Ji7uh8rF0uvmUY1U1Y3rJe0068eVFpgCPPijaCOVP9UndLGem%2Ff6oXQ4YB0L1t8%2BBA0SjoKDWML2PcxDarq9DcBgqpFZm0zMSRZZu%2FnyRM5c01RCYjZO4fH%2BFoSrvu9r%2FHtTBm0yQKuoyBVw4NWOMy%2FRIfLffFqxYzmU6dul%2BgcKmjfn7e%2Bt6AMWeEIzd768s2Gzi2vwQh%2FyOug4qh0CkA3xvCZHYQtYxo5oafrKo8PRikyB7iCRvLI8Sz1xDV8ibt67BFL7wykVm%2BoU4XEafpjBwxV%2FkoIRgECj9gstdqXFuY2SzQY1mx5jEyVFm6hSqealiSgH6DBSvqTVh4yiOIq8ub1c2P%2F6RAwAwroC1wwY6pgH5noViGndjNODFbqIq1WjkZK3hVNUZjxrUXPxdfpTdwZfkMw3j5vnxKB2BVXPHC2V%2BioyUNwjpTr03vALaHD%2FrF0W%2Bw1J1VqwITA2FarE4hwfgbiLNHeNuZMUzYSv67kmv0FDQf1QNNM9DtH%2Bor2ddaa60pS7Xqe2CFPBmNhCd1gKwtozib2DYrUm%2BS2ElqIggjKmBgHVJK7zIQv3vErpQNl7HKpEu&X-Amz-Signature=53bcd189d0fe2ef2672187953e6a30d0f548c97a1a45d6b16a6f30b6b1e959df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
