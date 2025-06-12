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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWV6BGA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGBZ3Z7jDUFNXNNWGzM1QQvZP4hULqy7%2FRpn%2FwUMjhT0AiEAhZXEOpRGW8fT6m%2FVRujYi8We87K3hnKuG68iHoRYzOgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSddx7n54G5HkNfkyrcAyjrZidzZMroGKbUtpehtoG8FRPe2UCZar0%2FrtLKhT5mgjYavcnOtwg%2Fv2d44mYwN0PyKW3j9NkuqVScdIljPUY0WDy4ZtbleeieJgxZj%2Fk133kaAiuWgIo0IDUy%2FQbuPUNR3PZyDV6k26zUug4k5%2FCFlja4r66B4dogI%2B%2Boo86wK0UcRPIliIyYxkIK0jlCPy1nXJHEHyj0l9b8e%2FXV1HJhFZIMSyL311XtCYN0Ez%2Fxy283xdGY7HID1KzRDKVUkuPm5vAw4qVTlaMsyyS4TlhfYOQiIOyMib6Lqisaduc8mlOQflq%2FIDkKLoEY1FGV9Rli25ZkemmV5gK5BD7QFiSOvLJNR8%2FjQq2uz7NY3TV9CSebIGT2NT9PJ2XTml8rALnaHq1%2Fm2dQ38zHur1tX1fSjBCdskS9DF5ulcMEvFFHzVBU%2ByTrKgHu2rNY1%2BCIo4Zac89dAlSiW1UZZSA0XSeIcRSAe7Q0hmtYp7nC%2Bqyx5wFVahL8U1%2BPlT2fKjJ5VNp0SBYhZyZQuHofhFZQNay9%2BAk%2FbQrMtGIsB%2FWCR6vgF9kcQQVzLnU0jLcAi8RPGfOJMOYO1KFmwnFcSFamgq7N2B6EBBNKU3lF92lbFDaZ%2FC2%2B8CKvl3GL6kIwMO6PqsIGOqUBdbv0lkRj41riYAtQZNJIfUoTPXQm3XAAfmVP29d%2FB5g0fVVWtQ1lBB4XSIbxPkacalZXDxt6EAD62LvbkHmzvOAHUlTnw%2BAVZgK0n1OLP6ZN8tpvSXGveLJMz74RgRw6U3I8x%2BksVgKAx9YcAHU5mEwQrWJV5ZBqNjo5dQqQf2INXOJXvL3JFtTjrOHHSZiqz2udqEdwIMT%2BH0qlU%2BYlPHGnNdVy&X-Amz-Signature=141770a4f0f37e3bdcba930899d992c55fc03d593e939e1e1b2ba3aa656aea9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWV6BGA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGBZ3Z7jDUFNXNNWGzM1QQvZP4hULqy7%2FRpn%2FwUMjhT0AiEAhZXEOpRGW8fT6m%2FVRujYi8We87K3hnKuG68iHoRYzOgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSddx7n54G5HkNfkyrcAyjrZidzZMroGKbUtpehtoG8FRPe2UCZar0%2FrtLKhT5mgjYavcnOtwg%2Fv2d44mYwN0PyKW3j9NkuqVScdIljPUY0WDy4ZtbleeieJgxZj%2Fk133kaAiuWgIo0IDUy%2FQbuPUNR3PZyDV6k26zUug4k5%2FCFlja4r66B4dogI%2B%2Boo86wK0UcRPIliIyYxkIK0jlCPy1nXJHEHyj0l9b8e%2FXV1HJhFZIMSyL311XtCYN0Ez%2Fxy283xdGY7HID1KzRDKVUkuPm5vAw4qVTlaMsyyS4TlhfYOQiIOyMib6Lqisaduc8mlOQflq%2FIDkKLoEY1FGV9Rli25ZkemmV5gK5BD7QFiSOvLJNR8%2FjQq2uz7NY3TV9CSebIGT2NT9PJ2XTml8rALnaHq1%2Fm2dQ38zHur1tX1fSjBCdskS9DF5ulcMEvFFHzVBU%2ByTrKgHu2rNY1%2BCIo4Zac89dAlSiW1UZZSA0XSeIcRSAe7Q0hmtYp7nC%2Bqyx5wFVahL8U1%2BPlT2fKjJ5VNp0SBYhZyZQuHofhFZQNay9%2BAk%2FbQrMtGIsB%2FWCR6vgF9kcQQVzLnU0jLcAi8RPGfOJMOYO1KFmwnFcSFamgq7N2B6EBBNKU3lF92lbFDaZ%2FC2%2B8CKvl3GL6kIwMO6PqsIGOqUBdbv0lkRj41riYAtQZNJIfUoTPXQm3XAAfmVP29d%2FB5g0fVVWtQ1lBB4XSIbxPkacalZXDxt6EAD62LvbkHmzvOAHUlTnw%2BAVZgK0n1OLP6ZN8tpvSXGveLJMz74RgRw6U3I8x%2BksVgKAx9YcAHU5mEwQrWJV5ZBqNjo5dQqQf2INXOJXvL3JFtTjrOHHSZiqz2udqEdwIMT%2BH0qlU%2BYlPHGnNdVy&X-Amz-Signature=0f9c314bf97e892aad0866047970210d2f1b7bbd956734cdfacfc59d26abe4b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWV6BGA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGBZ3Z7jDUFNXNNWGzM1QQvZP4hULqy7%2FRpn%2FwUMjhT0AiEAhZXEOpRGW8fT6m%2FVRujYi8We87K3hnKuG68iHoRYzOgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSddx7n54G5HkNfkyrcAyjrZidzZMroGKbUtpehtoG8FRPe2UCZar0%2FrtLKhT5mgjYavcnOtwg%2Fv2d44mYwN0PyKW3j9NkuqVScdIljPUY0WDy4ZtbleeieJgxZj%2Fk133kaAiuWgIo0IDUy%2FQbuPUNR3PZyDV6k26zUug4k5%2FCFlja4r66B4dogI%2B%2Boo86wK0UcRPIliIyYxkIK0jlCPy1nXJHEHyj0l9b8e%2FXV1HJhFZIMSyL311XtCYN0Ez%2Fxy283xdGY7HID1KzRDKVUkuPm5vAw4qVTlaMsyyS4TlhfYOQiIOyMib6Lqisaduc8mlOQflq%2FIDkKLoEY1FGV9Rli25ZkemmV5gK5BD7QFiSOvLJNR8%2FjQq2uz7NY3TV9CSebIGT2NT9PJ2XTml8rALnaHq1%2Fm2dQ38zHur1tX1fSjBCdskS9DF5ulcMEvFFHzVBU%2ByTrKgHu2rNY1%2BCIo4Zac89dAlSiW1UZZSA0XSeIcRSAe7Q0hmtYp7nC%2Bqyx5wFVahL8U1%2BPlT2fKjJ5VNp0SBYhZyZQuHofhFZQNay9%2BAk%2FbQrMtGIsB%2FWCR6vgF9kcQQVzLnU0jLcAi8RPGfOJMOYO1KFmwnFcSFamgq7N2B6EBBNKU3lF92lbFDaZ%2FC2%2B8CKvl3GL6kIwMO6PqsIGOqUBdbv0lkRj41riYAtQZNJIfUoTPXQm3XAAfmVP29d%2FB5g0fVVWtQ1lBB4XSIbxPkacalZXDxt6EAD62LvbkHmzvOAHUlTnw%2BAVZgK0n1OLP6ZN8tpvSXGveLJMz74RgRw6U3I8x%2BksVgKAx9YcAHU5mEwQrWJV5ZBqNjo5dQqQf2INXOJXvL3JFtTjrOHHSZiqz2udqEdwIMT%2BH0qlU%2BYlPHGnNdVy&X-Amz-Signature=cebcdb8ab408e90a22980914519c1025d03d9a30117e41bc74cf36f9d4306038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWV6BGA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGBZ3Z7jDUFNXNNWGzM1QQvZP4hULqy7%2FRpn%2FwUMjhT0AiEAhZXEOpRGW8fT6m%2FVRujYi8We87K3hnKuG68iHoRYzOgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSddx7n54G5HkNfkyrcAyjrZidzZMroGKbUtpehtoG8FRPe2UCZar0%2FrtLKhT5mgjYavcnOtwg%2Fv2d44mYwN0PyKW3j9NkuqVScdIljPUY0WDy4ZtbleeieJgxZj%2Fk133kaAiuWgIo0IDUy%2FQbuPUNR3PZyDV6k26zUug4k5%2FCFlja4r66B4dogI%2B%2Boo86wK0UcRPIliIyYxkIK0jlCPy1nXJHEHyj0l9b8e%2FXV1HJhFZIMSyL311XtCYN0Ez%2Fxy283xdGY7HID1KzRDKVUkuPm5vAw4qVTlaMsyyS4TlhfYOQiIOyMib6Lqisaduc8mlOQflq%2FIDkKLoEY1FGV9Rli25ZkemmV5gK5BD7QFiSOvLJNR8%2FjQq2uz7NY3TV9CSebIGT2NT9PJ2XTml8rALnaHq1%2Fm2dQ38zHur1tX1fSjBCdskS9DF5ulcMEvFFHzVBU%2ByTrKgHu2rNY1%2BCIo4Zac89dAlSiW1UZZSA0XSeIcRSAe7Q0hmtYp7nC%2Bqyx5wFVahL8U1%2BPlT2fKjJ5VNp0SBYhZyZQuHofhFZQNay9%2BAk%2FbQrMtGIsB%2FWCR6vgF9kcQQVzLnU0jLcAi8RPGfOJMOYO1KFmwnFcSFamgq7N2B6EBBNKU3lF92lbFDaZ%2FC2%2B8CKvl3GL6kIwMO6PqsIGOqUBdbv0lkRj41riYAtQZNJIfUoTPXQm3XAAfmVP29d%2FB5g0fVVWtQ1lBB4XSIbxPkacalZXDxt6EAD62LvbkHmzvOAHUlTnw%2BAVZgK0n1OLP6ZN8tpvSXGveLJMz74RgRw6U3I8x%2BksVgKAx9YcAHU5mEwQrWJV5ZBqNjo5dQqQf2INXOJXvL3JFtTjrOHHSZiqz2udqEdwIMT%2BH0qlU%2BYlPHGnNdVy&X-Amz-Signature=4847bd973f13519536c0391da6d737a1dd5fc390e0d11124b66328a7ba108e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWV6BGA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGBZ3Z7jDUFNXNNWGzM1QQvZP4hULqy7%2FRpn%2FwUMjhT0AiEAhZXEOpRGW8fT6m%2FVRujYi8We87K3hnKuG68iHoRYzOgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSddx7n54G5HkNfkyrcAyjrZidzZMroGKbUtpehtoG8FRPe2UCZar0%2FrtLKhT5mgjYavcnOtwg%2Fv2d44mYwN0PyKW3j9NkuqVScdIljPUY0WDy4ZtbleeieJgxZj%2Fk133kaAiuWgIo0IDUy%2FQbuPUNR3PZyDV6k26zUug4k5%2FCFlja4r66B4dogI%2B%2Boo86wK0UcRPIliIyYxkIK0jlCPy1nXJHEHyj0l9b8e%2FXV1HJhFZIMSyL311XtCYN0Ez%2Fxy283xdGY7HID1KzRDKVUkuPm5vAw4qVTlaMsyyS4TlhfYOQiIOyMib6Lqisaduc8mlOQflq%2FIDkKLoEY1FGV9Rli25ZkemmV5gK5BD7QFiSOvLJNR8%2FjQq2uz7NY3TV9CSebIGT2NT9PJ2XTml8rALnaHq1%2Fm2dQ38zHur1tX1fSjBCdskS9DF5ulcMEvFFHzVBU%2ByTrKgHu2rNY1%2BCIo4Zac89dAlSiW1UZZSA0XSeIcRSAe7Q0hmtYp7nC%2Bqyx5wFVahL8U1%2BPlT2fKjJ5VNp0SBYhZyZQuHofhFZQNay9%2BAk%2FbQrMtGIsB%2FWCR6vgF9kcQQVzLnU0jLcAi8RPGfOJMOYO1KFmwnFcSFamgq7N2B6EBBNKU3lF92lbFDaZ%2FC2%2B8CKvl3GL6kIwMO6PqsIGOqUBdbv0lkRj41riYAtQZNJIfUoTPXQm3XAAfmVP29d%2FB5g0fVVWtQ1lBB4XSIbxPkacalZXDxt6EAD62LvbkHmzvOAHUlTnw%2BAVZgK0n1OLP6ZN8tpvSXGveLJMz74RgRw6U3I8x%2BksVgKAx9YcAHU5mEwQrWJV5ZBqNjo5dQqQf2INXOJXvL3JFtTjrOHHSZiqz2udqEdwIMT%2BH0qlU%2BYlPHGnNdVy&X-Amz-Signature=8ff31730c9c420009dcc834cf449a831e6df23242e06cc67eef205e6b33b9e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWV6BGA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGBZ3Z7jDUFNXNNWGzM1QQvZP4hULqy7%2FRpn%2FwUMjhT0AiEAhZXEOpRGW8fT6m%2FVRujYi8We87K3hnKuG68iHoRYzOgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSddx7n54G5HkNfkyrcAyjrZidzZMroGKbUtpehtoG8FRPe2UCZar0%2FrtLKhT5mgjYavcnOtwg%2Fv2d44mYwN0PyKW3j9NkuqVScdIljPUY0WDy4ZtbleeieJgxZj%2Fk133kaAiuWgIo0IDUy%2FQbuPUNR3PZyDV6k26zUug4k5%2FCFlja4r66B4dogI%2B%2Boo86wK0UcRPIliIyYxkIK0jlCPy1nXJHEHyj0l9b8e%2FXV1HJhFZIMSyL311XtCYN0Ez%2Fxy283xdGY7HID1KzRDKVUkuPm5vAw4qVTlaMsyyS4TlhfYOQiIOyMib6Lqisaduc8mlOQflq%2FIDkKLoEY1FGV9Rli25ZkemmV5gK5BD7QFiSOvLJNR8%2FjQq2uz7NY3TV9CSebIGT2NT9PJ2XTml8rALnaHq1%2Fm2dQ38zHur1tX1fSjBCdskS9DF5ulcMEvFFHzVBU%2ByTrKgHu2rNY1%2BCIo4Zac89dAlSiW1UZZSA0XSeIcRSAe7Q0hmtYp7nC%2Bqyx5wFVahL8U1%2BPlT2fKjJ5VNp0SBYhZyZQuHofhFZQNay9%2BAk%2FbQrMtGIsB%2FWCR6vgF9kcQQVzLnU0jLcAi8RPGfOJMOYO1KFmwnFcSFamgq7N2B6EBBNKU3lF92lbFDaZ%2FC2%2B8CKvl3GL6kIwMO6PqsIGOqUBdbv0lkRj41riYAtQZNJIfUoTPXQm3XAAfmVP29d%2FB5g0fVVWtQ1lBB4XSIbxPkacalZXDxt6EAD62LvbkHmzvOAHUlTnw%2BAVZgK0n1OLP6ZN8tpvSXGveLJMz74RgRw6U3I8x%2BksVgKAx9YcAHU5mEwQrWJV5ZBqNjo5dQqQf2INXOJXvL3JFtTjrOHHSZiqz2udqEdwIMT%2BH0qlU%2BYlPHGnNdVy&X-Amz-Signature=d2f851eb6c11ce0cb221121aa00a55e59949ce382efd1e0fd0c44d117242f258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWV6BGA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGBZ3Z7jDUFNXNNWGzM1QQvZP4hULqy7%2FRpn%2FwUMjhT0AiEAhZXEOpRGW8fT6m%2FVRujYi8We87K3hnKuG68iHoRYzOgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSddx7n54G5HkNfkyrcAyjrZidzZMroGKbUtpehtoG8FRPe2UCZar0%2FrtLKhT5mgjYavcnOtwg%2Fv2d44mYwN0PyKW3j9NkuqVScdIljPUY0WDy4ZtbleeieJgxZj%2Fk133kaAiuWgIo0IDUy%2FQbuPUNR3PZyDV6k26zUug4k5%2FCFlja4r66B4dogI%2B%2Boo86wK0UcRPIliIyYxkIK0jlCPy1nXJHEHyj0l9b8e%2FXV1HJhFZIMSyL311XtCYN0Ez%2Fxy283xdGY7HID1KzRDKVUkuPm5vAw4qVTlaMsyyS4TlhfYOQiIOyMib6Lqisaduc8mlOQflq%2FIDkKLoEY1FGV9Rli25ZkemmV5gK5BD7QFiSOvLJNR8%2FjQq2uz7NY3TV9CSebIGT2NT9PJ2XTml8rALnaHq1%2Fm2dQ38zHur1tX1fSjBCdskS9DF5ulcMEvFFHzVBU%2ByTrKgHu2rNY1%2BCIo4Zac89dAlSiW1UZZSA0XSeIcRSAe7Q0hmtYp7nC%2Bqyx5wFVahL8U1%2BPlT2fKjJ5VNp0SBYhZyZQuHofhFZQNay9%2BAk%2FbQrMtGIsB%2FWCR6vgF9kcQQVzLnU0jLcAi8RPGfOJMOYO1KFmwnFcSFamgq7N2B6EBBNKU3lF92lbFDaZ%2FC2%2B8CKvl3GL6kIwMO6PqsIGOqUBdbv0lkRj41riYAtQZNJIfUoTPXQm3XAAfmVP29d%2FB5g0fVVWtQ1lBB4XSIbxPkacalZXDxt6EAD62LvbkHmzvOAHUlTnw%2BAVZgK0n1OLP6ZN8tpvSXGveLJMz74RgRw6U3I8x%2BksVgKAx9YcAHU5mEwQrWJV5ZBqNjo5dQqQf2INXOJXvL3JFtTjrOHHSZiqz2udqEdwIMT%2BH0qlU%2BYlPHGnNdVy&X-Amz-Signature=00c27f54b9671cfaa784db47562ed1d96adeee8f22115462ef70b17a00d0ec29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
