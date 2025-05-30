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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4MZHZI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLDSg2IcufkmYLZ6nHLej6VCdyeSAzkpfNcEzFmp4odgIgK7t1rzBpYey7408zrTZK%2FPn6m6oRbaU3K6m5UIF4RiUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlGW8Jthw9bjG75HSrcA%2Fqa5VemRAeW9xO6PQmU%2F6dij8NZFTyJycFUSz7kcTtCQO0e9hWrm%2BLJozdExWnndCiCpYv7UhozsiMn%2F5rP3FFo5%2BcN25XEkwROFZvciqfXF2I1ZyFYRjGR6P4fqDz3DygpJDP1GVMQAMy5P9wSyIIu254CxYQ0v8OPFUxUTKcUzlF382s%2BTEsKiynqEaPqtLUWreSy6fY0WRLRWVPIcRlP5NRp7ManSTd6x%2BW1%2FuVFNznptvnBQzgHKyIttGH3FyatC4lQoXl6Jzi668gYXTSnLvEwVfQ%2B2BFrrJEHIWi4GayHGD73osZPzIMVMvy9rwo0n024JCPAbmDnEjvlFDXD1ekuoxYjGjDQ7lCtZrVYiaep%2BlSgLgqnq7mn5YNReu%2BeWOvrZChU8QJJHeQq0A0fgZxtsljWtRISENY7Cv7LleKEOoIYBF3Wf2FB%2F2%2BNSlDDkfAxHo0dC%2BfF%2F5eqsUjCJ0dWhY9z%2Baqnr9awYdYgfzraJIKpVqiXHZ20vcfipdkbQneNB3hs1Zcb7DvTWNqgf4Pho%2Fk6rwsSDjlMQPv35yKtZ4aVL49qw8xFW6rdxrxXWEpe3cFY6DEoIqlKazhcwsPLOKa33GpN7V4b9%2FhLjvNhonr2H1J0Hw%2BfMMDL6MEGOqUBgOESTz8BpWNF7EKQ%2BdP4LktLXGlBgHlqxnw1FLNEQLKMsMXUuH3B%2BrbY%2BE%2FtDERsyHMZVp3V5XOFxd%2FYT%2FsYyophSHqfPvpUehZvhLqZiElPYgoLTF1CscQVsslz5QoGWOzPkv%2B22toKzjB3tzvNOHJoWn0HJLRuxoexCaG1VG45BwsSv1SNFtFhPasihgok8paluU%2BhxtVI6c3yccoPUtu4Q6Ye&X-Amz-Signature=8e9433f8e899785d19eb83b6053a91bc9c1cca3118310f596176e9878f08f75f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4MZHZI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLDSg2IcufkmYLZ6nHLej6VCdyeSAzkpfNcEzFmp4odgIgK7t1rzBpYey7408zrTZK%2FPn6m6oRbaU3K6m5UIF4RiUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlGW8Jthw9bjG75HSrcA%2Fqa5VemRAeW9xO6PQmU%2F6dij8NZFTyJycFUSz7kcTtCQO0e9hWrm%2BLJozdExWnndCiCpYv7UhozsiMn%2F5rP3FFo5%2BcN25XEkwROFZvciqfXF2I1ZyFYRjGR6P4fqDz3DygpJDP1GVMQAMy5P9wSyIIu254CxYQ0v8OPFUxUTKcUzlF382s%2BTEsKiynqEaPqtLUWreSy6fY0WRLRWVPIcRlP5NRp7ManSTd6x%2BW1%2FuVFNznptvnBQzgHKyIttGH3FyatC4lQoXl6Jzi668gYXTSnLvEwVfQ%2B2BFrrJEHIWi4GayHGD73osZPzIMVMvy9rwo0n024JCPAbmDnEjvlFDXD1ekuoxYjGjDQ7lCtZrVYiaep%2BlSgLgqnq7mn5YNReu%2BeWOvrZChU8QJJHeQq0A0fgZxtsljWtRISENY7Cv7LleKEOoIYBF3Wf2FB%2F2%2BNSlDDkfAxHo0dC%2BfF%2F5eqsUjCJ0dWhY9z%2Baqnr9awYdYgfzraJIKpVqiXHZ20vcfipdkbQneNB3hs1Zcb7DvTWNqgf4Pho%2Fk6rwsSDjlMQPv35yKtZ4aVL49qw8xFW6rdxrxXWEpe3cFY6DEoIqlKazhcwsPLOKa33GpN7V4b9%2FhLjvNhonr2H1J0Hw%2BfMMDL6MEGOqUBgOESTz8BpWNF7EKQ%2BdP4LktLXGlBgHlqxnw1FLNEQLKMsMXUuH3B%2BrbY%2BE%2FtDERsyHMZVp3V5XOFxd%2FYT%2FsYyophSHqfPvpUehZvhLqZiElPYgoLTF1CscQVsslz5QoGWOzPkv%2B22toKzjB3tzvNOHJoWn0HJLRuxoexCaG1VG45BwsSv1SNFtFhPasihgok8paluU%2BhxtVI6c3yccoPUtu4Q6Ye&X-Amz-Signature=5ff326440ffa4553282f906f733136aab9a8de5786e340767ead4f9f9945693c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4MZHZI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLDSg2IcufkmYLZ6nHLej6VCdyeSAzkpfNcEzFmp4odgIgK7t1rzBpYey7408zrTZK%2FPn6m6oRbaU3K6m5UIF4RiUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlGW8Jthw9bjG75HSrcA%2Fqa5VemRAeW9xO6PQmU%2F6dij8NZFTyJycFUSz7kcTtCQO0e9hWrm%2BLJozdExWnndCiCpYv7UhozsiMn%2F5rP3FFo5%2BcN25XEkwROFZvciqfXF2I1ZyFYRjGR6P4fqDz3DygpJDP1GVMQAMy5P9wSyIIu254CxYQ0v8OPFUxUTKcUzlF382s%2BTEsKiynqEaPqtLUWreSy6fY0WRLRWVPIcRlP5NRp7ManSTd6x%2BW1%2FuVFNznptvnBQzgHKyIttGH3FyatC4lQoXl6Jzi668gYXTSnLvEwVfQ%2B2BFrrJEHIWi4GayHGD73osZPzIMVMvy9rwo0n024JCPAbmDnEjvlFDXD1ekuoxYjGjDQ7lCtZrVYiaep%2BlSgLgqnq7mn5YNReu%2BeWOvrZChU8QJJHeQq0A0fgZxtsljWtRISENY7Cv7LleKEOoIYBF3Wf2FB%2F2%2BNSlDDkfAxHo0dC%2BfF%2F5eqsUjCJ0dWhY9z%2Baqnr9awYdYgfzraJIKpVqiXHZ20vcfipdkbQneNB3hs1Zcb7DvTWNqgf4Pho%2Fk6rwsSDjlMQPv35yKtZ4aVL49qw8xFW6rdxrxXWEpe3cFY6DEoIqlKazhcwsPLOKa33GpN7V4b9%2FhLjvNhonr2H1J0Hw%2BfMMDL6MEGOqUBgOESTz8BpWNF7EKQ%2BdP4LktLXGlBgHlqxnw1FLNEQLKMsMXUuH3B%2BrbY%2BE%2FtDERsyHMZVp3V5XOFxd%2FYT%2FsYyophSHqfPvpUehZvhLqZiElPYgoLTF1CscQVsslz5QoGWOzPkv%2B22toKzjB3tzvNOHJoWn0HJLRuxoexCaG1VG45BwsSv1SNFtFhPasihgok8paluU%2BhxtVI6c3yccoPUtu4Q6Ye&X-Amz-Signature=47d598b985bb643898a5a353e324130b456e88074d5600c8be1e59e1551ac228&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4MZHZI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLDSg2IcufkmYLZ6nHLej6VCdyeSAzkpfNcEzFmp4odgIgK7t1rzBpYey7408zrTZK%2FPn6m6oRbaU3K6m5UIF4RiUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlGW8Jthw9bjG75HSrcA%2Fqa5VemRAeW9xO6PQmU%2F6dij8NZFTyJycFUSz7kcTtCQO0e9hWrm%2BLJozdExWnndCiCpYv7UhozsiMn%2F5rP3FFo5%2BcN25XEkwROFZvciqfXF2I1ZyFYRjGR6P4fqDz3DygpJDP1GVMQAMy5P9wSyIIu254CxYQ0v8OPFUxUTKcUzlF382s%2BTEsKiynqEaPqtLUWreSy6fY0WRLRWVPIcRlP5NRp7ManSTd6x%2BW1%2FuVFNznptvnBQzgHKyIttGH3FyatC4lQoXl6Jzi668gYXTSnLvEwVfQ%2B2BFrrJEHIWi4GayHGD73osZPzIMVMvy9rwo0n024JCPAbmDnEjvlFDXD1ekuoxYjGjDQ7lCtZrVYiaep%2BlSgLgqnq7mn5YNReu%2BeWOvrZChU8QJJHeQq0A0fgZxtsljWtRISENY7Cv7LleKEOoIYBF3Wf2FB%2F2%2BNSlDDkfAxHo0dC%2BfF%2F5eqsUjCJ0dWhY9z%2Baqnr9awYdYgfzraJIKpVqiXHZ20vcfipdkbQneNB3hs1Zcb7DvTWNqgf4Pho%2Fk6rwsSDjlMQPv35yKtZ4aVL49qw8xFW6rdxrxXWEpe3cFY6DEoIqlKazhcwsPLOKa33GpN7V4b9%2FhLjvNhonr2H1J0Hw%2BfMMDL6MEGOqUBgOESTz8BpWNF7EKQ%2BdP4LktLXGlBgHlqxnw1FLNEQLKMsMXUuH3B%2BrbY%2BE%2FtDERsyHMZVp3V5XOFxd%2FYT%2FsYyophSHqfPvpUehZvhLqZiElPYgoLTF1CscQVsslz5QoGWOzPkv%2B22toKzjB3tzvNOHJoWn0HJLRuxoexCaG1VG45BwsSv1SNFtFhPasihgok8paluU%2BhxtVI6c3yccoPUtu4Q6Ye&X-Amz-Signature=c38769e58a4497747685a246597b8708b337fc278ab4fc9c2ab314ae9699a645&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4MZHZI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLDSg2IcufkmYLZ6nHLej6VCdyeSAzkpfNcEzFmp4odgIgK7t1rzBpYey7408zrTZK%2FPn6m6oRbaU3K6m5UIF4RiUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlGW8Jthw9bjG75HSrcA%2Fqa5VemRAeW9xO6PQmU%2F6dij8NZFTyJycFUSz7kcTtCQO0e9hWrm%2BLJozdExWnndCiCpYv7UhozsiMn%2F5rP3FFo5%2BcN25XEkwROFZvciqfXF2I1ZyFYRjGR6P4fqDz3DygpJDP1GVMQAMy5P9wSyIIu254CxYQ0v8OPFUxUTKcUzlF382s%2BTEsKiynqEaPqtLUWreSy6fY0WRLRWVPIcRlP5NRp7ManSTd6x%2BW1%2FuVFNznptvnBQzgHKyIttGH3FyatC4lQoXl6Jzi668gYXTSnLvEwVfQ%2B2BFrrJEHIWi4GayHGD73osZPzIMVMvy9rwo0n024JCPAbmDnEjvlFDXD1ekuoxYjGjDQ7lCtZrVYiaep%2BlSgLgqnq7mn5YNReu%2BeWOvrZChU8QJJHeQq0A0fgZxtsljWtRISENY7Cv7LleKEOoIYBF3Wf2FB%2F2%2BNSlDDkfAxHo0dC%2BfF%2F5eqsUjCJ0dWhY9z%2Baqnr9awYdYgfzraJIKpVqiXHZ20vcfipdkbQneNB3hs1Zcb7DvTWNqgf4Pho%2Fk6rwsSDjlMQPv35yKtZ4aVL49qw8xFW6rdxrxXWEpe3cFY6DEoIqlKazhcwsPLOKa33GpN7V4b9%2FhLjvNhonr2H1J0Hw%2BfMMDL6MEGOqUBgOESTz8BpWNF7EKQ%2BdP4LktLXGlBgHlqxnw1FLNEQLKMsMXUuH3B%2BrbY%2BE%2FtDERsyHMZVp3V5XOFxd%2FYT%2FsYyophSHqfPvpUehZvhLqZiElPYgoLTF1CscQVsslz5QoGWOzPkv%2B22toKzjB3tzvNOHJoWn0HJLRuxoexCaG1VG45BwsSv1SNFtFhPasihgok8paluU%2BhxtVI6c3yccoPUtu4Q6Ye&X-Amz-Signature=94db40caa6af4a01b19d230785a1c9d737044620408be0700d6cad0fc0c2de5f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4MZHZI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLDSg2IcufkmYLZ6nHLej6VCdyeSAzkpfNcEzFmp4odgIgK7t1rzBpYey7408zrTZK%2FPn6m6oRbaU3K6m5UIF4RiUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlGW8Jthw9bjG75HSrcA%2Fqa5VemRAeW9xO6PQmU%2F6dij8NZFTyJycFUSz7kcTtCQO0e9hWrm%2BLJozdExWnndCiCpYv7UhozsiMn%2F5rP3FFo5%2BcN25XEkwROFZvciqfXF2I1ZyFYRjGR6P4fqDz3DygpJDP1GVMQAMy5P9wSyIIu254CxYQ0v8OPFUxUTKcUzlF382s%2BTEsKiynqEaPqtLUWreSy6fY0WRLRWVPIcRlP5NRp7ManSTd6x%2BW1%2FuVFNznptvnBQzgHKyIttGH3FyatC4lQoXl6Jzi668gYXTSnLvEwVfQ%2B2BFrrJEHIWi4GayHGD73osZPzIMVMvy9rwo0n024JCPAbmDnEjvlFDXD1ekuoxYjGjDQ7lCtZrVYiaep%2BlSgLgqnq7mn5YNReu%2BeWOvrZChU8QJJHeQq0A0fgZxtsljWtRISENY7Cv7LleKEOoIYBF3Wf2FB%2F2%2BNSlDDkfAxHo0dC%2BfF%2F5eqsUjCJ0dWhY9z%2Baqnr9awYdYgfzraJIKpVqiXHZ20vcfipdkbQneNB3hs1Zcb7DvTWNqgf4Pho%2Fk6rwsSDjlMQPv35yKtZ4aVL49qw8xFW6rdxrxXWEpe3cFY6DEoIqlKazhcwsPLOKa33GpN7V4b9%2FhLjvNhonr2H1J0Hw%2BfMMDL6MEGOqUBgOESTz8BpWNF7EKQ%2BdP4LktLXGlBgHlqxnw1FLNEQLKMsMXUuH3B%2BrbY%2BE%2FtDERsyHMZVp3V5XOFxd%2FYT%2FsYyophSHqfPvpUehZvhLqZiElPYgoLTF1CscQVsslz5QoGWOzPkv%2B22toKzjB3tzvNOHJoWn0HJLRuxoexCaG1VG45BwsSv1SNFtFhPasihgok8paluU%2BhxtVI6c3yccoPUtu4Q6Ye&X-Amz-Signature=e1b05c24164dbd57a95fb0f1f7fa0626aed10104baea95433d7bb66d0536f4a6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4MZHZI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLDSg2IcufkmYLZ6nHLej6VCdyeSAzkpfNcEzFmp4odgIgK7t1rzBpYey7408zrTZK%2FPn6m6oRbaU3K6m5UIF4RiUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlGW8Jthw9bjG75HSrcA%2Fqa5VemRAeW9xO6PQmU%2F6dij8NZFTyJycFUSz7kcTtCQO0e9hWrm%2BLJozdExWnndCiCpYv7UhozsiMn%2F5rP3FFo5%2BcN25XEkwROFZvciqfXF2I1ZyFYRjGR6P4fqDz3DygpJDP1GVMQAMy5P9wSyIIu254CxYQ0v8OPFUxUTKcUzlF382s%2BTEsKiynqEaPqtLUWreSy6fY0WRLRWVPIcRlP5NRp7ManSTd6x%2BW1%2FuVFNznptvnBQzgHKyIttGH3FyatC4lQoXl6Jzi668gYXTSnLvEwVfQ%2B2BFrrJEHIWi4GayHGD73osZPzIMVMvy9rwo0n024JCPAbmDnEjvlFDXD1ekuoxYjGjDQ7lCtZrVYiaep%2BlSgLgqnq7mn5YNReu%2BeWOvrZChU8QJJHeQq0A0fgZxtsljWtRISENY7Cv7LleKEOoIYBF3Wf2FB%2F2%2BNSlDDkfAxHo0dC%2BfF%2F5eqsUjCJ0dWhY9z%2Baqnr9awYdYgfzraJIKpVqiXHZ20vcfipdkbQneNB3hs1Zcb7DvTWNqgf4Pho%2Fk6rwsSDjlMQPv35yKtZ4aVL49qw8xFW6rdxrxXWEpe3cFY6DEoIqlKazhcwsPLOKa33GpN7V4b9%2FhLjvNhonr2H1J0Hw%2BfMMDL6MEGOqUBgOESTz8BpWNF7EKQ%2BdP4LktLXGlBgHlqxnw1FLNEQLKMsMXUuH3B%2BrbY%2BE%2FtDERsyHMZVp3V5XOFxd%2FYT%2FsYyophSHqfPvpUehZvhLqZiElPYgoLTF1CscQVsslz5QoGWOzPkv%2B22toKzjB3tzvNOHJoWn0HJLRuxoexCaG1VG45BwsSv1SNFtFhPasihgok8paluU%2BhxtVI6c3yccoPUtu4Q6Ye&X-Amz-Signature=f4a3d3cf8adf9048bdcdd232ce40b74d8b42a23999dde7296dc2c15173e7f0e9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
