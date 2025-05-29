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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KY6T4Q6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBgne56r%2FtYQlv3AvDLit8I3KTcAnDnZjLQusbmtOARAiEA8m7JgVi28X94oAWQMpwBE8TenqCNupRyGg2DMLDwPZwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvTKenWLG4HRm8NqCrcA3zQ11L%2FStXZbNzXvZhTpy7ejUGxPhM1qZDoCq5jSUompX%2BY2CrikB6n6t9veqOALUuOtEfpjBdEEmy%2BEyUWh4sAGm17E3JcomE2ZsnxH8lpfGuG8zjWOtBT1L4n7tbUPoNA6bjkQyUgEOF4UeyE1mjCFdsTUWUGBpITEdIBI7KYlCBju20JvQlwGXz5bgwjn4fzGpHFACLLICAhIskTBQZzh51n6tSDV1q0tm97V%2BZ8S9HNioCoTP29PxcsOz%2BwQWlmO8w82GmClxYol%2FeslnfnMexgJ03CURatltZT2VmMiAvH1tnqhu0UwNMNOC3WYdrML4ekPYIPZegQmr8WM0PbeTEEeIk1ZTI5BzSkAaeJI2rOqJSTY%2FzkL2ATbm0peHlbRiweNVjEYeh7exHrA8WQJBuDXVAHmLZKLmrNKsB9yVtK%2F2GqHOWidLm359Q6qTmLXDkdDoAQdYv1aMW4nKpHGF%2BWsX8HCiPt3vUgYNuRwkYMPoK8Wt7vdQ%2FLI1LgvVj7Gd4LEooqbR2qlqSe4rJVFl8fsz%2FmOao0NZ5XQgHl6LvZga%2BvRHiGpPUB%2FcPht7e0aUxAsKRpc0ojZvMrWoOnft3D6lJCh57%2F2R4U0gatSwMltyGNfi7AiB0sMJGz4sEGOqUBlrYwVAeJxrjyPESip9NQpkAWUesU3ulkyoTKxEBY%2FWbWZ75EjkPA491SGIcw8AlPmk0qgFhWkzLj0RuzVeeiUUN3huX18%2FLMZ3RRPSrrNBfkz06QAwMR0TXyXVTth4SXPoKvVNPN2FKrZ6ZoXH4x1qhdzP0FgQlN%2BZzn1bwPc7lpdiNB99ALYDdaY%2FuL6alIVMhOPUORZcm1U%2Fvo5A%2FkORh7OXeT&X-Amz-Signature=b7065e7ebaaa4f14fbe57334b9f1c9b9c4cc8fcfb01fe0ea9ffacf0b67e52a50&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KY6T4Q6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBgne56r%2FtYQlv3AvDLit8I3KTcAnDnZjLQusbmtOARAiEA8m7JgVi28X94oAWQMpwBE8TenqCNupRyGg2DMLDwPZwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvTKenWLG4HRm8NqCrcA3zQ11L%2FStXZbNzXvZhTpy7ejUGxPhM1qZDoCq5jSUompX%2BY2CrikB6n6t9veqOALUuOtEfpjBdEEmy%2BEyUWh4sAGm17E3JcomE2ZsnxH8lpfGuG8zjWOtBT1L4n7tbUPoNA6bjkQyUgEOF4UeyE1mjCFdsTUWUGBpITEdIBI7KYlCBju20JvQlwGXz5bgwjn4fzGpHFACLLICAhIskTBQZzh51n6tSDV1q0tm97V%2BZ8S9HNioCoTP29PxcsOz%2BwQWlmO8w82GmClxYol%2FeslnfnMexgJ03CURatltZT2VmMiAvH1tnqhu0UwNMNOC3WYdrML4ekPYIPZegQmr8WM0PbeTEEeIk1ZTI5BzSkAaeJI2rOqJSTY%2FzkL2ATbm0peHlbRiweNVjEYeh7exHrA8WQJBuDXVAHmLZKLmrNKsB9yVtK%2F2GqHOWidLm359Q6qTmLXDkdDoAQdYv1aMW4nKpHGF%2BWsX8HCiPt3vUgYNuRwkYMPoK8Wt7vdQ%2FLI1LgvVj7Gd4LEooqbR2qlqSe4rJVFl8fsz%2FmOao0NZ5XQgHl6LvZga%2BvRHiGpPUB%2FcPht7e0aUxAsKRpc0ojZvMrWoOnft3D6lJCh57%2F2R4U0gatSwMltyGNfi7AiB0sMJGz4sEGOqUBlrYwVAeJxrjyPESip9NQpkAWUesU3ulkyoTKxEBY%2FWbWZ75EjkPA491SGIcw8AlPmk0qgFhWkzLj0RuzVeeiUUN3huX18%2FLMZ3RRPSrrNBfkz06QAwMR0TXyXVTth4SXPoKvVNPN2FKrZ6ZoXH4x1qhdzP0FgQlN%2BZzn1bwPc7lpdiNB99ALYDdaY%2FuL6alIVMhOPUORZcm1U%2Fvo5A%2FkORh7OXeT&X-Amz-Signature=7397f1839fd095b852a9fce2875bde5b5ad9908bd6f9264368bf684875d860c3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KY6T4Q6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBgne56r%2FtYQlv3AvDLit8I3KTcAnDnZjLQusbmtOARAiEA8m7JgVi28X94oAWQMpwBE8TenqCNupRyGg2DMLDwPZwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvTKenWLG4HRm8NqCrcA3zQ11L%2FStXZbNzXvZhTpy7ejUGxPhM1qZDoCq5jSUompX%2BY2CrikB6n6t9veqOALUuOtEfpjBdEEmy%2BEyUWh4sAGm17E3JcomE2ZsnxH8lpfGuG8zjWOtBT1L4n7tbUPoNA6bjkQyUgEOF4UeyE1mjCFdsTUWUGBpITEdIBI7KYlCBju20JvQlwGXz5bgwjn4fzGpHFACLLICAhIskTBQZzh51n6tSDV1q0tm97V%2BZ8S9HNioCoTP29PxcsOz%2BwQWlmO8w82GmClxYol%2FeslnfnMexgJ03CURatltZT2VmMiAvH1tnqhu0UwNMNOC3WYdrML4ekPYIPZegQmr8WM0PbeTEEeIk1ZTI5BzSkAaeJI2rOqJSTY%2FzkL2ATbm0peHlbRiweNVjEYeh7exHrA8WQJBuDXVAHmLZKLmrNKsB9yVtK%2F2GqHOWidLm359Q6qTmLXDkdDoAQdYv1aMW4nKpHGF%2BWsX8HCiPt3vUgYNuRwkYMPoK8Wt7vdQ%2FLI1LgvVj7Gd4LEooqbR2qlqSe4rJVFl8fsz%2FmOao0NZ5XQgHl6LvZga%2BvRHiGpPUB%2FcPht7e0aUxAsKRpc0ojZvMrWoOnft3D6lJCh57%2F2R4U0gatSwMltyGNfi7AiB0sMJGz4sEGOqUBlrYwVAeJxrjyPESip9NQpkAWUesU3ulkyoTKxEBY%2FWbWZ75EjkPA491SGIcw8AlPmk0qgFhWkzLj0RuzVeeiUUN3huX18%2FLMZ3RRPSrrNBfkz06QAwMR0TXyXVTth4SXPoKvVNPN2FKrZ6ZoXH4x1qhdzP0FgQlN%2BZzn1bwPc7lpdiNB99ALYDdaY%2FuL6alIVMhOPUORZcm1U%2Fvo5A%2FkORh7OXeT&X-Amz-Signature=4625f17cf9aad49be7f95b2eeb586503f585485b61b7d4c26e07bbf4549c6379&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KY6T4Q6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBgne56r%2FtYQlv3AvDLit8I3KTcAnDnZjLQusbmtOARAiEA8m7JgVi28X94oAWQMpwBE8TenqCNupRyGg2DMLDwPZwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvTKenWLG4HRm8NqCrcA3zQ11L%2FStXZbNzXvZhTpy7ejUGxPhM1qZDoCq5jSUompX%2BY2CrikB6n6t9veqOALUuOtEfpjBdEEmy%2BEyUWh4sAGm17E3JcomE2ZsnxH8lpfGuG8zjWOtBT1L4n7tbUPoNA6bjkQyUgEOF4UeyE1mjCFdsTUWUGBpITEdIBI7KYlCBju20JvQlwGXz5bgwjn4fzGpHFACLLICAhIskTBQZzh51n6tSDV1q0tm97V%2BZ8S9HNioCoTP29PxcsOz%2BwQWlmO8w82GmClxYol%2FeslnfnMexgJ03CURatltZT2VmMiAvH1tnqhu0UwNMNOC3WYdrML4ekPYIPZegQmr8WM0PbeTEEeIk1ZTI5BzSkAaeJI2rOqJSTY%2FzkL2ATbm0peHlbRiweNVjEYeh7exHrA8WQJBuDXVAHmLZKLmrNKsB9yVtK%2F2GqHOWidLm359Q6qTmLXDkdDoAQdYv1aMW4nKpHGF%2BWsX8HCiPt3vUgYNuRwkYMPoK8Wt7vdQ%2FLI1LgvVj7Gd4LEooqbR2qlqSe4rJVFl8fsz%2FmOao0NZ5XQgHl6LvZga%2BvRHiGpPUB%2FcPht7e0aUxAsKRpc0ojZvMrWoOnft3D6lJCh57%2F2R4U0gatSwMltyGNfi7AiB0sMJGz4sEGOqUBlrYwVAeJxrjyPESip9NQpkAWUesU3ulkyoTKxEBY%2FWbWZ75EjkPA491SGIcw8AlPmk0qgFhWkzLj0RuzVeeiUUN3huX18%2FLMZ3RRPSrrNBfkz06QAwMR0TXyXVTth4SXPoKvVNPN2FKrZ6ZoXH4x1qhdzP0FgQlN%2BZzn1bwPc7lpdiNB99ALYDdaY%2FuL6alIVMhOPUORZcm1U%2Fvo5A%2FkORh7OXeT&X-Amz-Signature=fd973dbc85f2933290ea96b2f75a3e730fcc2d3108eb246eab602e5e33d02df2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KY6T4Q6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBgne56r%2FtYQlv3AvDLit8I3KTcAnDnZjLQusbmtOARAiEA8m7JgVi28X94oAWQMpwBE8TenqCNupRyGg2DMLDwPZwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvTKenWLG4HRm8NqCrcA3zQ11L%2FStXZbNzXvZhTpy7ejUGxPhM1qZDoCq5jSUompX%2BY2CrikB6n6t9veqOALUuOtEfpjBdEEmy%2BEyUWh4sAGm17E3JcomE2ZsnxH8lpfGuG8zjWOtBT1L4n7tbUPoNA6bjkQyUgEOF4UeyE1mjCFdsTUWUGBpITEdIBI7KYlCBju20JvQlwGXz5bgwjn4fzGpHFACLLICAhIskTBQZzh51n6tSDV1q0tm97V%2BZ8S9HNioCoTP29PxcsOz%2BwQWlmO8w82GmClxYol%2FeslnfnMexgJ03CURatltZT2VmMiAvH1tnqhu0UwNMNOC3WYdrML4ekPYIPZegQmr8WM0PbeTEEeIk1ZTI5BzSkAaeJI2rOqJSTY%2FzkL2ATbm0peHlbRiweNVjEYeh7exHrA8WQJBuDXVAHmLZKLmrNKsB9yVtK%2F2GqHOWidLm359Q6qTmLXDkdDoAQdYv1aMW4nKpHGF%2BWsX8HCiPt3vUgYNuRwkYMPoK8Wt7vdQ%2FLI1LgvVj7Gd4LEooqbR2qlqSe4rJVFl8fsz%2FmOao0NZ5XQgHl6LvZga%2BvRHiGpPUB%2FcPht7e0aUxAsKRpc0ojZvMrWoOnft3D6lJCh57%2F2R4U0gatSwMltyGNfi7AiB0sMJGz4sEGOqUBlrYwVAeJxrjyPESip9NQpkAWUesU3ulkyoTKxEBY%2FWbWZ75EjkPA491SGIcw8AlPmk0qgFhWkzLj0RuzVeeiUUN3huX18%2FLMZ3RRPSrrNBfkz06QAwMR0TXyXVTth4SXPoKvVNPN2FKrZ6ZoXH4x1qhdzP0FgQlN%2BZzn1bwPc7lpdiNB99ALYDdaY%2FuL6alIVMhOPUORZcm1U%2Fvo5A%2FkORh7OXeT&X-Amz-Signature=460d7b1cd47dbf2015a680a3093533835155e17f3f3e3b61e3685df7510e010e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KY6T4Q6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBgne56r%2FtYQlv3AvDLit8I3KTcAnDnZjLQusbmtOARAiEA8m7JgVi28X94oAWQMpwBE8TenqCNupRyGg2DMLDwPZwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvTKenWLG4HRm8NqCrcA3zQ11L%2FStXZbNzXvZhTpy7ejUGxPhM1qZDoCq5jSUompX%2BY2CrikB6n6t9veqOALUuOtEfpjBdEEmy%2BEyUWh4sAGm17E3JcomE2ZsnxH8lpfGuG8zjWOtBT1L4n7tbUPoNA6bjkQyUgEOF4UeyE1mjCFdsTUWUGBpITEdIBI7KYlCBju20JvQlwGXz5bgwjn4fzGpHFACLLICAhIskTBQZzh51n6tSDV1q0tm97V%2BZ8S9HNioCoTP29PxcsOz%2BwQWlmO8w82GmClxYol%2FeslnfnMexgJ03CURatltZT2VmMiAvH1tnqhu0UwNMNOC3WYdrML4ekPYIPZegQmr8WM0PbeTEEeIk1ZTI5BzSkAaeJI2rOqJSTY%2FzkL2ATbm0peHlbRiweNVjEYeh7exHrA8WQJBuDXVAHmLZKLmrNKsB9yVtK%2F2GqHOWidLm359Q6qTmLXDkdDoAQdYv1aMW4nKpHGF%2BWsX8HCiPt3vUgYNuRwkYMPoK8Wt7vdQ%2FLI1LgvVj7Gd4LEooqbR2qlqSe4rJVFl8fsz%2FmOao0NZ5XQgHl6LvZga%2BvRHiGpPUB%2FcPht7e0aUxAsKRpc0ojZvMrWoOnft3D6lJCh57%2F2R4U0gatSwMltyGNfi7AiB0sMJGz4sEGOqUBlrYwVAeJxrjyPESip9NQpkAWUesU3ulkyoTKxEBY%2FWbWZ75EjkPA491SGIcw8AlPmk0qgFhWkzLj0RuzVeeiUUN3huX18%2FLMZ3RRPSrrNBfkz06QAwMR0TXyXVTth4SXPoKvVNPN2FKrZ6ZoXH4x1qhdzP0FgQlN%2BZzn1bwPc7lpdiNB99ALYDdaY%2FuL6alIVMhOPUORZcm1U%2Fvo5A%2FkORh7OXeT&X-Amz-Signature=30a3088788cda3e86411f98bdd56190ec59d18a4dc23878caeafa243a21ed3e0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KY6T4Q6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBgne56r%2FtYQlv3AvDLit8I3KTcAnDnZjLQusbmtOARAiEA8m7JgVi28X94oAWQMpwBE8TenqCNupRyGg2DMLDwPZwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvTKenWLG4HRm8NqCrcA3zQ11L%2FStXZbNzXvZhTpy7ejUGxPhM1qZDoCq5jSUompX%2BY2CrikB6n6t9veqOALUuOtEfpjBdEEmy%2BEyUWh4sAGm17E3JcomE2ZsnxH8lpfGuG8zjWOtBT1L4n7tbUPoNA6bjkQyUgEOF4UeyE1mjCFdsTUWUGBpITEdIBI7KYlCBju20JvQlwGXz5bgwjn4fzGpHFACLLICAhIskTBQZzh51n6tSDV1q0tm97V%2BZ8S9HNioCoTP29PxcsOz%2BwQWlmO8w82GmClxYol%2FeslnfnMexgJ03CURatltZT2VmMiAvH1tnqhu0UwNMNOC3WYdrML4ekPYIPZegQmr8WM0PbeTEEeIk1ZTI5BzSkAaeJI2rOqJSTY%2FzkL2ATbm0peHlbRiweNVjEYeh7exHrA8WQJBuDXVAHmLZKLmrNKsB9yVtK%2F2GqHOWidLm359Q6qTmLXDkdDoAQdYv1aMW4nKpHGF%2BWsX8HCiPt3vUgYNuRwkYMPoK8Wt7vdQ%2FLI1LgvVj7Gd4LEooqbR2qlqSe4rJVFl8fsz%2FmOao0NZ5XQgHl6LvZga%2BvRHiGpPUB%2FcPht7e0aUxAsKRpc0ojZvMrWoOnft3D6lJCh57%2F2R4U0gatSwMltyGNfi7AiB0sMJGz4sEGOqUBlrYwVAeJxrjyPESip9NQpkAWUesU3ulkyoTKxEBY%2FWbWZ75EjkPA491SGIcw8AlPmk0qgFhWkzLj0RuzVeeiUUN3huX18%2FLMZ3RRPSrrNBfkz06QAwMR0TXyXVTth4SXPoKvVNPN2FKrZ6ZoXH4x1qhdzP0FgQlN%2BZzn1bwPc7lpdiNB99ALYDdaY%2FuL6alIVMhOPUORZcm1U%2Fvo5A%2FkORh7OXeT&X-Amz-Signature=4a2687f3437636ea14eea60997f9aed709618586295b1d9c3f1de9f356b31b6d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
