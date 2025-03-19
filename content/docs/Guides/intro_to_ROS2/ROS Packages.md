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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNCXVQRJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBa4mibtOrmooYkDPWdejAd7nkvV%2F1FzHkNwE2vG5d3%2FAiEAn0L%2BpCr%2FlMU5Paw0bORHz%2FB1%2FUVutmzlzsczo4nm%2FzAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNmWPtV%2FfI7ZcORApircAzu8BUUhE4Q2oetNO3VMloCYJ1xUzoDQ7l4VTMCk6YBPvvz1sEzYIJpecwsXHRdMhOvzZ437uMwUj6Hoe1ERCmhIWFF8wHAPMfgJJ7cqgSbERK4ei0SpJe%2B6lyI8FAqZz8c6p5zJ%2Fl%2FidJfCXBOu24IA1SDcR53zQpumAjestjOnCOnBgT5lBJMJkOO8bP3uOQKTQQ3rfz6Jet6UA0wRN3VzVpkB3obKfvsdHU8PYqrwhrAPOkNSalqqlPOu9Hz42lckLxYpx1XG1wwXtZGdTyA%2B2KttXO91lTgeDGRRov660ISFfhlrNJr%2BXwrTQmZupk2buavRyJxVoxhcjb29lyYuNAevnTMTdQ%2Fgn4VZQORd5En3dWPABPHp0gNjc9f7u1k9rj3PMzKTN7baogLdVWXgC0v66oi1sI8ZrwGEaSe4Zc0UFX7vYLOUWV8Sx%2FVHYuhozMkVZlWsD9S1iigXHv8yOm6hBVA6pWusT750ZlSnYTVP52ttllpCevmg%2Bb5MRQEzcaPufXbpH6RlVDerGjzmBPdeUk%2F%2FmaDx5lxMLMdlSbToYfJZ0dx8x%2FTdrjLoMUX4tYUULx%2B0VDiKkgveWxsY4doohdYmkMFb0pCFqLkX5VRW3%2FQ5DpKeXW%2BfMI28674GOqUBB2BLGgstgr7uTcGNVEX2BN%2BjvRW4CvG8TyX4ZAetwDkelfXt3rxH3mVQv9WBknezqJxJ7cIg41OfjQyCci01u9J8mlh0F6%2Fuc9Y6KPHb8j0pchCkpZ0daZhsXz3Us%2Br853aDjYPT%2BpGigQMtx8Dyc3mu5C9%2FXu8KSQzJZzg9COu7aUtW9s53DPacA9j14Mb7B593t5yWHgxmHr%2F5NoZBpin%2F8N%2Fh&X-Amz-Signature=c9a3741c873ce0c9d2a2bd52e20e09db60d6fbd62ad2eed498e5214810c44c68&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNCXVQRJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBa4mibtOrmooYkDPWdejAd7nkvV%2F1FzHkNwE2vG5d3%2FAiEAn0L%2BpCr%2FlMU5Paw0bORHz%2FB1%2FUVutmzlzsczo4nm%2FzAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNmWPtV%2FfI7ZcORApircAzu8BUUhE4Q2oetNO3VMloCYJ1xUzoDQ7l4VTMCk6YBPvvz1sEzYIJpecwsXHRdMhOvzZ437uMwUj6Hoe1ERCmhIWFF8wHAPMfgJJ7cqgSbERK4ei0SpJe%2B6lyI8FAqZz8c6p5zJ%2Fl%2FidJfCXBOu24IA1SDcR53zQpumAjestjOnCOnBgT5lBJMJkOO8bP3uOQKTQQ3rfz6Jet6UA0wRN3VzVpkB3obKfvsdHU8PYqrwhrAPOkNSalqqlPOu9Hz42lckLxYpx1XG1wwXtZGdTyA%2B2KttXO91lTgeDGRRov660ISFfhlrNJr%2BXwrTQmZupk2buavRyJxVoxhcjb29lyYuNAevnTMTdQ%2Fgn4VZQORd5En3dWPABPHp0gNjc9f7u1k9rj3PMzKTN7baogLdVWXgC0v66oi1sI8ZrwGEaSe4Zc0UFX7vYLOUWV8Sx%2FVHYuhozMkVZlWsD9S1iigXHv8yOm6hBVA6pWusT750ZlSnYTVP52ttllpCevmg%2Bb5MRQEzcaPufXbpH6RlVDerGjzmBPdeUk%2F%2FmaDx5lxMLMdlSbToYfJZ0dx8x%2FTdrjLoMUX4tYUULx%2B0VDiKkgveWxsY4doohdYmkMFb0pCFqLkX5VRW3%2FQ5DpKeXW%2BfMI28674GOqUBB2BLGgstgr7uTcGNVEX2BN%2BjvRW4CvG8TyX4ZAetwDkelfXt3rxH3mVQv9WBknezqJxJ7cIg41OfjQyCci01u9J8mlh0F6%2Fuc9Y6KPHb8j0pchCkpZ0daZhsXz3Us%2Br853aDjYPT%2BpGigQMtx8Dyc3mu5C9%2FXu8KSQzJZzg9COu7aUtW9s53DPacA9j14Mb7B593t5yWHgxmHr%2F5NoZBpin%2F8N%2Fh&X-Amz-Signature=11af688219df23757e1b3fc55f279a24c6624f43891e31bdc8163c6b7d361d36&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNCXVQRJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBa4mibtOrmooYkDPWdejAd7nkvV%2F1FzHkNwE2vG5d3%2FAiEAn0L%2BpCr%2FlMU5Paw0bORHz%2FB1%2FUVutmzlzsczo4nm%2FzAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNmWPtV%2FfI7ZcORApircAzu8BUUhE4Q2oetNO3VMloCYJ1xUzoDQ7l4VTMCk6YBPvvz1sEzYIJpecwsXHRdMhOvzZ437uMwUj6Hoe1ERCmhIWFF8wHAPMfgJJ7cqgSbERK4ei0SpJe%2B6lyI8FAqZz8c6p5zJ%2Fl%2FidJfCXBOu24IA1SDcR53zQpumAjestjOnCOnBgT5lBJMJkOO8bP3uOQKTQQ3rfz6Jet6UA0wRN3VzVpkB3obKfvsdHU8PYqrwhrAPOkNSalqqlPOu9Hz42lckLxYpx1XG1wwXtZGdTyA%2B2KttXO91lTgeDGRRov660ISFfhlrNJr%2BXwrTQmZupk2buavRyJxVoxhcjb29lyYuNAevnTMTdQ%2Fgn4VZQORd5En3dWPABPHp0gNjc9f7u1k9rj3PMzKTN7baogLdVWXgC0v66oi1sI8ZrwGEaSe4Zc0UFX7vYLOUWV8Sx%2FVHYuhozMkVZlWsD9S1iigXHv8yOm6hBVA6pWusT750ZlSnYTVP52ttllpCevmg%2Bb5MRQEzcaPufXbpH6RlVDerGjzmBPdeUk%2F%2FmaDx5lxMLMdlSbToYfJZ0dx8x%2FTdrjLoMUX4tYUULx%2B0VDiKkgveWxsY4doohdYmkMFb0pCFqLkX5VRW3%2FQ5DpKeXW%2BfMI28674GOqUBB2BLGgstgr7uTcGNVEX2BN%2BjvRW4CvG8TyX4ZAetwDkelfXt3rxH3mVQv9WBknezqJxJ7cIg41OfjQyCci01u9J8mlh0F6%2Fuc9Y6KPHb8j0pchCkpZ0daZhsXz3Us%2Br853aDjYPT%2BpGigQMtx8Dyc3mu5C9%2FXu8KSQzJZzg9COu7aUtW9s53DPacA9j14Mb7B593t5yWHgxmHr%2F5NoZBpin%2F8N%2Fh&X-Amz-Signature=47f1f4c67aa9fd8e1c2b7b98f05876a6db442f332d5e510e4846b0b81a723d87&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNCXVQRJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBa4mibtOrmooYkDPWdejAd7nkvV%2F1FzHkNwE2vG5d3%2FAiEAn0L%2BpCr%2FlMU5Paw0bORHz%2FB1%2FUVutmzlzsczo4nm%2FzAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNmWPtV%2FfI7ZcORApircAzu8BUUhE4Q2oetNO3VMloCYJ1xUzoDQ7l4VTMCk6YBPvvz1sEzYIJpecwsXHRdMhOvzZ437uMwUj6Hoe1ERCmhIWFF8wHAPMfgJJ7cqgSbERK4ei0SpJe%2B6lyI8FAqZz8c6p5zJ%2Fl%2FidJfCXBOu24IA1SDcR53zQpumAjestjOnCOnBgT5lBJMJkOO8bP3uOQKTQQ3rfz6Jet6UA0wRN3VzVpkB3obKfvsdHU8PYqrwhrAPOkNSalqqlPOu9Hz42lckLxYpx1XG1wwXtZGdTyA%2B2KttXO91lTgeDGRRov660ISFfhlrNJr%2BXwrTQmZupk2buavRyJxVoxhcjb29lyYuNAevnTMTdQ%2Fgn4VZQORd5En3dWPABPHp0gNjc9f7u1k9rj3PMzKTN7baogLdVWXgC0v66oi1sI8ZrwGEaSe4Zc0UFX7vYLOUWV8Sx%2FVHYuhozMkVZlWsD9S1iigXHv8yOm6hBVA6pWusT750ZlSnYTVP52ttllpCevmg%2Bb5MRQEzcaPufXbpH6RlVDerGjzmBPdeUk%2F%2FmaDx5lxMLMdlSbToYfJZ0dx8x%2FTdrjLoMUX4tYUULx%2B0VDiKkgveWxsY4doohdYmkMFb0pCFqLkX5VRW3%2FQ5DpKeXW%2BfMI28674GOqUBB2BLGgstgr7uTcGNVEX2BN%2BjvRW4CvG8TyX4ZAetwDkelfXt3rxH3mVQv9WBknezqJxJ7cIg41OfjQyCci01u9J8mlh0F6%2Fuc9Y6KPHb8j0pchCkpZ0daZhsXz3Us%2Br853aDjYPT%2BpGigQMtx8Dyc3mu5C9%2FXu8KSQzJZzg9COu7aUtW9s53DPacA9j14Mb7B593t5yWHgxmHr%2F5NoZBpin%2F8N%2Fh&X-Amz-Signature=71e9c182bd0636af912d2cb1531ad338bb5777be1f16f1cc970fd52a3e0458cc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNCXVQRJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBa4mibtOrmooYkDPWdejAd7nkvV%2F1FzHkNwE2vG5d3%2FAiEAn0L%2BpCr%2FlMU5Paw0bORHz%2FB1%2FUVutmzlzsczo4nm%2FzAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNmWPtV%2FfI7ZcORApircAzu8BUUhE4Q2oetNO3VMloCYJ1xUzoDQ7l4VTMCk6YBPvvz1sEzYIJpecwsXHRdMhOvzZ437uMwUj6Hoe1ERCmhIWFF8wHAPMfgJJ7cqgSbERK4ei0SpJe%2B6lyI8FAqZz8c6p5zJ%2Fl%2FidJfCXBOu24IA1SDcR53zQpumAjestjOnCOnBgT5lBJMJkOO8bP3uOQKTQQ3rfz6Jet6UA0wRN3VzVpkB3obKfvsdHU8PYqrwhrAPOkNSalqqlPOu9Hz42lckLxYpx1XG1wwXtZGdTyA%2B2KttXO91lTgeDGRRov660ISFfhlrNJr%2BXwrTQmZupk2buavRyJxVoxhcjb29lyYuNAevnTMTdQ%2Fgn4VZQORd5En3dWPABPHp0gNjc9f7u1k9rj3PMzKTN7baogLdVWXgC0v66oi1sI8ZrwGEaSe4Zc0UFX7vYLOUWV8Sx%2FVHYuhozMkVZlWsD9S1iigXHv8yOm6hBVA6pWusT750ZlSnYTVP52ttllpCevmg%2Bb5MRQEzcaPufXbpH6RlVDerGjzmBPdeUk%2F%2FmaDx5lxMLMdlSbToYfJZ0dx8x%2FTdrjLoMUX4tYUULx%2B0VDiKkgveWxsY4doohdYmkMFb0pCFqLkX5VRW3%2FQ5DpKeXW%2BfMI28674GOqUBB2BLGgstgr7uTcGNVEX2BN%2BjvRW4CvG8TyX4ZAetwDkelfXt3rxH3mVQv9WBknezqJxJ7cIg41OfjQyCci01u9J8mlh0F6%2Fuc9Y6KPHb8j0pchCkpZ0daZhsXz3Us%2Br853aDjYPT%2BpGigQMtx8Dyc3mu5C9%2FXu8KSQzJZzg9COu7aUtW9s53DPacA9j14Mb7B593t5yWHgxmHr%2F5NoZBpin%2F8N%2Fh&X-Amz-Signature=67c914175ee9bae3342eba98001b59d076e76887861a2f8cac1e7086e21c1caa&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNCXVQRJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBa4mibtOrmooYkDPWdejAd7nkvV%2F1FzHkNwE2vG5d3%2FAiEAn0L%2BpCr%2FlMU5Paw0bORHz%2FB1%2FUVutmzlzsczo4nm%2FzAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNmWPtV%2FfI7ZcORApircAzu8BUUhE4Q2oetNO3VMloCYJ1xUzoDQ7l4VTMCk6YBPvvz1sEzYIJpecwsXHRdMhOvzZ437uMwUj6Hoe1ERCmhIWFF8wHAPMfgJJ7cqgSbERK4ei0SpJe%2B6lyI8FAqZz8c6p5zJ%2Fl%2FidJfCXBOu24IA1SDcR53zQpumAjestjOnCOnBgT5lBJMJkOO8bP3uOQKTQQ3rfz6Jet6UA0wRN3VzVpkB3obKfvsdHU8PYqrwhrAPOkNSalqqlPOu9Hz42lckLxYpx1XG1wwXtZGdTyA%2B2KttXO91lTgeDGRRov660ISFfhlrNJr%2BXwrTQmZupk2buavRyJxVoxhcjb29lyYuNAevnTMTdQ%2Fgn4VZQORd5En3dWPABPHp0gNjc9f7u1k9rj3PMzKTN7baogLdVWXgC0v66oi1sI8ZrwGEaSe4Zc0UFX7vYLOUWV8Sx%2FVHYuhozMkVZlWsD9S1iigXHv8yOm6hBVA6pWusT750ZlSnYTVP52ttllpCevmg%2Bb5MRQEzcaPufXbpH6RlVDerGjzmBPdeUk%2F%2FmaDx5lxMLMdlSbToYfJZ0dx8x%2FTdrjLoMUX4tYUULx%2B0VDiKkgveWxsY4doohdYmkMFb0pCFqLkX5VRW3%2FQ5DpKeXW%2BfMI28674GOqUBB2BLGgstgr7uTcGNVEX2BN%2BjvRW4CvG8TyX4ZAetwDkelfXt3rxH3mVQv9WBknezqJxJ7cIg41OfjQyCci01u9J8mlh0F6%2Fuc9Y6KPHb8j0pchCkpZ0daZhsXz3Us%2Br853aDjYPT%2BpGigQMtx8Dyc3mu5C9%2FXu8KSQzJZzg9COu7aUtW9s53DPacA9j14Mb7B593t5yWHgxmHr%2F5NoZBpin%2F8N%2Fh&X-Amz-Signature=86e5bcab051bd14a19324298bd72f7c821a02ac335530602d1c180f24a7cd578&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNCXVQRJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBa4mibtOrmooYkDPWdejAd7nkvV%2F1FzHkNwE2vG5d3%2FAiEAn0L%2BpCr%2FlMU5Paw0bORHz%2FB1%2FUVutmzlzsczo4nm%2FzAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNmWPtV%2FfI7ZcORApircAzu8BUUhE4Q2oetNO3VMloCYJ1xUzoDQ7l4VTMCk6YBPvvz1sEzYIJpecwsXHRdMhOvzZ437uMwUj6Hoe1ERCmhIWFF8wHAPMfgJJ7cqgSbERK4ei0SpJe%2B6lyI8FAqZz8c6p5zJ%2Fl%2FidJfCXBOu24IA1SDcR53zQpumAjestjOnCOnBgT5lBJMJkOO8bP3uOQKTQQ3rfz6Jet6UA0wRN3VzVpkB3obKfvsdHU8PYqrwhrAPOkNSalqqlPOu9Hz42lckLxYpx1XG1wwXtZGdTyA%2B2KttXO91lTgeDGRRov660ISFfhlrNJr%2BXwrTQmZupk2buavRyJxVoxhcjb29lyYuNAevnTMTdQ%2Fgn4VZQORd5En3dWPABPHp0gNjc9f7u1k9rj3PMzKTN7baogLdVWXgC0v66oi1sI8ZrwGEaSe4Zc0UFX7vYLOUWV8Sx%2FVHYuhozMkVZlWsD9S1iigXHv8yOm6hBVA6pWusT750ZlSnYTVP52ttllpCevmg%2Bb5MRQEzcaPufXbpH6RlVDerGjzmBPdeUk%2F%2FmaDx5lxMLMdlSbToYfJZ0dx8x%2FTdrjLoMUX4tYUULx%2B0VDiKkgveWxsY4doohdYmkMFb0pCFqLkX5VRW3%2FQ5DpKeXW%2BfMI28674GOqUBB2BLGgstgr7uTcGNVEX2BN%2BjvRW4CvG8TyX4ZAetwDkelfXt3rxH3mVQv9WBknezqJxJ7cIg41OfjQyCci01u9J8mlh0F6%2Fuc9Y6KPHb8j0pchCkpZ0daZhsXz3Us%2Br853aDjYPT%2BpGigQMtx8Dyc3mu5C9%2FXu8KSQzJZzg9COu7aUtW9s53DPacA9j14Mb7B593t5yWHgxmHr%2F5NoZBpin%2F8N%2Fh&X-Amz-Signature=4d0efcfe943cbbb97dcb90976b27b329c37c16d03f1303e4703604edaa262282&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
