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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTHOJXMS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkyLCgMylWcREn5%2FSTDOnrIkxj1MsiaZ0E0wILNoxSBAiA4SwYgBBj95nzcHasPeM%2BVUZMaZSZ8I%2BiZv%2FeufcogzyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMEEcRW7le1Rva2FVKtwD%2FsBehtmAX6e3c2%2BdPVxdlhjxzDn7bAnDbu%2F0JWr8z3q77z5fWN%2BuztKM%2F%2F58O4TaLaFXmZhHCkBju2Nzj4NLLt7p%2BXuXgNXYRSG3dvwBbTwxIkxbAOK9h2KlKihWEIUbcuyD4kPgsEX3sYFgqTil7H4Y9RGs4Ci%2BewnIYkoGE5x4HyZiRN9u1bTaI93Ak1qdketj1zzlTghnGc5NgCbUGtFVDUMCNcD%2BczkwbwXuoGf22T9Rb2uE%2BErawwrg9hkQuaFug%2F4EqAo5xlc5Kiv%2Fx5La8qlX%2F50%2BZm8CyjzLhYhRiJUZoLSHkU3cgoVGKVSgNbq1UDbm02wQPjD4%2BvGT%2BaIXGjKyLVNbDnUKGnwxMNbbwYrj5zlCS6WU9%2FJ9K2z4CTGLpK9pvdI1OZ4%2B0a2cHA4onVVQg2zTVaaBJRXkHSDR4jJq6g6kaWq%2BcuY2WtRpdc%2FToECLOVjpfaK9vTr3BJzoJHkVM4x%2FqjHtJtFZyJMR9t4AWO9I7bsDzewXxVg4gfZTcHiTuT%2F21Bkvd3yEsd9N4W7KeawCfNxae7ZmQTueHiRoLtRX%2FFIVaTI68dtc6JXhGw5YRckavUp2TlhKBivGer2rnvuM5VcKs64fPv7%2B9iWQp1aUr0c8GR8w8pKuvQY6pgHdA4bbautX%2FSoDYCpkRmK5QjucW9A8%2BRpM0gq3SYv7%2FJt2JyV2olh0MefhGw%2BupnYBz463Je0U8Fd3wQ69dINX%2B9FccvYjNOr8rg7qamvCS6IB%2B7spikzKZDyq2B7MOKKH9ehFHmhW0tyk%2BY%2F%2FxoCzG8uFRSOzIxpoRHCUNXp%2F6XfiCfUYjmm%2BNHDY%2Ff7N5ufjgEu%2BmGeYGJ%2FxWPQ21z9G76rBZ%2FMP&X-Amz-Signature=265167b7d2b31cad926a1f9924dfe370cafebc48ba103edf2ef45916ba5268f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTHOJXMS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkyLCgMylWcREn5%2FSTDOnrIkxj1MsiaZ0E0wILNoxSBAiA4SwYgBBj95nzcHasPeM%2BVUZMaZSZ8I%2BiZv%2FeufcogzyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMEEcRW7le1Rva2FVKtwD%2FsBehtmAX6e3c2%2BdPVxdlhjxzDn7bAnDbu%2F0JWr8z3q77z5fWN%2BuztKM%2F%2F58O4TaLaFXmZhHCkBju2Nzj4NLLt7p%2BXuXgNXYRSG3dvwBbTwxIkxbAOK9h2KlKihWEIUbcuyD4kPgsEX3sYFgqTil7H4Y9RGs4Ci%2BewnIYkoGE5x4HyZiRN9u1bTaI93Ak1qdketj1zzlTghnGc5NgCbUGtFVDUMCNcD%2BczkwbwXuoGf22T9Rb2uE%2BErawwrg9hkQuaFug%2F4EqAo5xlc5Kiv%2Fx5La8qlX%2F50%2BZm8CyjzLhYhRiJUZoLSHkU3cgoVGKVSgNbq1UDbm02wQPjD4%2BvGT%2BaIXGjKyLVNbDnUKGnwxMNbbwYrj5zlCS6WU9%2FJ9K2z4CTGLpK9pvdI1OZ4%2B0a2cHA4onVVQg2zTVaaBJRXkHSDR4jJq6g6kaWq%2BcuY2WtRpdc%2FToECLOVjpfaK9vTr3BJzoJHkVM4x%2FqjHtJtFZyJMR9t4AWO9I7bsDzewXxVg4gfZTcHiTuT%2F21Bkvd3yEsd9N4W7KeawCfNxae7ZmQTueHiRoLtRX%2FFIVaTI68dtc6JXhGw5YRckavUp2TlhKBivGer2rnvuM5VcKs64fPv7%2B9iWQp1aUr0c8GR8w8pKuvQY6pgHdA4bbautX%2FSoDYCpkRmK5QjucW9A8%2BRpM0gq3SYv7%2FJt2JyV2olh0MefhGw%2BupnYBz463Je0U8Fd3wQ69dINX%2B9FccvYjNOr8rg7qamvCS6IB%2B7spikzKZDyq2B7MOKKH9ehFHmhW0tyk%2BY%2F%2FxoCzG8uFRSOzIxpoRHCUNXp%2F6XfiCfUYjmm%2BNHDY%2Ff7N5ufjgEu%2BmGeYGJ%2FxWPQ21z9G76rBZ%2FMP&X-Amz-Signature=682c71977a21c402f25e4b2913185803599343d8f4085539d10018020a19cdde&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTHOJXMS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkyLCgMylWcREn5%2FSTDOnrIkxj1MsiaZ0E0wILNoxSBAiA4SwYgBBj95nzcHasPeM%2BVUZMaZSZ8I%2BiZv%2FeufcogzyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMEEcRW7le1Rva2FVKtwD%2FsBehtmAX6e3c2%2BdPVxdlhjxzDn7bAnDbu%2F0JWr8z3q77z5fWN%2BuztKM%2F%2F58O4TaLaFXmZhHCkBju2Nzj4NLLt7p%2BXuXgNXYRSG3dvwBbTwxIkxbAOK9h2KlKihWEIUbcuyD4kPgsEX3sYFgqTil7H4Y9RGs4Ci%2BewnIYkoGE5x4HyZiRN9u1bTaI93Ak1qdketj1zzlTghnGc5NgCbUGtFVDUMCNcD%2BczkwbwXuoGf22T9Rb2uE%2BErawwrg9hkQuaFug%2F4EqAo5xlc5Kiv%2Fx5La8qlX%2F50%2BZm8CyjzLhYhRiJUZoLSHkU3cgoVGKVSgNbq1UDbm02wQPjD4%2BvGT%2BaIXGjKyLVNbDnUKGnwxMNbbwYrj5zlCS6WU9%2FJ9K2z4CTGLpK9pvdI1OZ4%2B0a2cHA4onVVQg2zTVaaBJRXkHSDR4jJq6g6kaWq%2BcuY2WtRpdc%2FToECLOVjpfaK9vTr3BJzoJHkVM4x%2FqjHtJtFZyJMR9t4AWO9I7bsDzewXxVg4gfZTcHiTuT%2F21Bkvd3yEsd9N4W7KeawCfNxae7ZmQTueHiRoLtRX%2FFIVaTI68dtc6JXhGw5YRckavUp2TlhKBivGer2rnvuM5VcKs64fPv7%2B9iWQp1aUr0c8GR8w8pKuvQY6pgHdA4bbautX%2FSoDYCpkRmK5QjucW9A8%2BRpM0gq3SYv7%2FJt2JyV2olh0MefhGw%2BupnYBz463Je0U8Fd3wQ69dINX%2B9FccvYjNOr8rg7qamvCS6IB%2B7spikzKZDyq2B7MOKKH9ehFHmhW0tyk%2BY%2F%2FxoCzG8uFRSOzIxpoRHCUNXp%2F6XfiCfUYjmm%2BNHDY%2Ff7N5ufjgEu%2BmGeYGJ%2FxWPQ21z9G76rBZ%2FMP&X-Amz-Signature=f7d37981669ce0782bb8b15c78e52077f9490ba623b6667eeb54eaa889e7fc37&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTHOJXMS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkyLCgMylWcREn5%2FSTDOnrIkxj1MsiaZ0E0wILNoxSBAiA4SwYgBBj95nzcHasPeM%2BVUZMaZSZ8I%2BiZv%2FeufcogzyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMEEcRW7le1Rva2FVKtwD%2FsBehtmAX6e3c2%2BdPVxdlhjxzDn7bAnDbu%2F0JWr8z3q77z5fWN%2BuztKM%2F%2F58O4TaLaFXmZhHCkBju2Nzj4NLLt7p%2BXuXgNXYRSG3dvwBbTwxIkxbAOK9h2KlKihWEIUbcuyD4kPgsEX3sYFgqTil7H4Y9RGs4Ci%2BewnIYkoGE5x4HyZiRN9u1bTaI93Ak1qdketj1zzlTghnGc5NgCbUGtFVDUMCNcD%2BczkwbwXuoGf22T9Rb2uE%2BErawwrg9hkQuaFug%2F4EqAo5xlc5Kiv%2Fx5La8qlX%2F50%2BZm8CyjzLhYhRiJUZoLSHkU3cgoVGKVSgNbq1UDbm02wQPjD4%2BvGT%2BaIXGjKyLVNbDnUKGnwxMNbbwYrj5zlCS6WU9%2FJ9K2z4CTGLpK9pvdI1OZ4%2B0a2cHA4onVVQg2zTVaaBJRXkHSDR4jJq6g6kaWq%2BcuY2WtRpdc%2FToECLOVjpfaK9vTr3BJzoJHkVM4x%2FqjHtJtFZyJMR9t4AWO9I7bsDzewXxVg4gfZTcHiTuT%2F21Bkvd3yEsd9N4W7KeawCfNxae7ZmQTueHiRoLtRX%2FFIVaTI68dtc6JXhGw5YRckavUp2TlhKBivGer2rnvuM5VcKs64fPv7%2B9iWQp1aUr0c8GR8w8pKuvQY6pgHdA4bbautX%2FSoDYCpkRmK5QjucW9A8%2BRpM0gq3SYv7%2FJt2JyV2olh0MefhGw%2BupnYBz463Je0U8Fd3wQ69dINX%2B9FccvYjNOr8rg7qamvCS6IB%2B7spikzKZDyq2B7MOKKH9ehFHmhW0tyk%2BY%2F%2FxoCzG8uFRSOzIxpoRHCUNXp%2F6XfiCfUYjmm%2BNHDY%2Ff7N5ufjgEu%2BmGeYGJ%2FxWPQ21z9G76rBZ%2FMP&X-Amz-Signature=89a314a6ce85af530b154477aa7c0958ccf579e46c1f16f96fcf4b4a32d9afeb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTHOJXMS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkyLCgMylWcREn5%2FSTDOnrIkxj1MsiaZ0E0wILNoxSBAiA4SwYgBBj95nzcHasPeM%2BVUZMaZSZ8I%2BiZv%2FeufcogzyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMEEcRW7le1Rva2FVKtwD%2FsBehtmAX6e3c2%2BdPVxdlhjxzDn7bAnDbu%2F0JWr8z3q77z5fWN%2BuztKM%2F%2F58O4TaLaFXmZhHCkBju2Nzj4NLLt7p%2BXuXgNXYRSG3dvwBbTwxIkxbAOK9h2KlKihWEIUbcuyD4kPgsEX3sYFgqTil7H4Y9RGs4Ci%2BewnIYkoGE5x4HyZiRN9u1bTaI93Ak1qdketj1zzlTghnGc5NgCbUGtFVDUMCNcD%2BczkwbwXuoGf22T9Rb2uE%2BErawwrg9hkQuaFug%2F4EqAo5xlc5Kiv%2Fx5La8qlX%2F50%2BZm8CyjzLhYhRiJUZoLSHkU3cgoVGKVSgNbq1UDbm02wQPjD4%2BvGT%2BaIXGjKyLVNbDnUKGnwxMNbbwYrj5zlCS6WU9%2FJ9K2z4CTGLpK9pvdI1OZ4%2B0a2cHA4onVVQg2zTVaaBJRXkHSDR4jJq6g6kaWq%2BcuY2WtRpdc%2FToECLOVjpfaK9vTr3BJzoJHkVM4x%2FqjHtJtFZyJMR9t4AWO9I7bsDzewXxVg4gfZTcHiTuT%2F21Bkvd3yEsd9N4W7KeawCfNxae7ZmQTueHiRoLtRX%2FFIVaTI68dtc6JXhGw5YRckavUp2TlhKBivGer2rnvuM5VcKs64fPv7%2B9iWQp1aUr0c8GR8w8pKuvQY6pgHdA4bbautX%2FSoDYCpkRmK5QjucW9A8%2BRpM0gq3SYv7%2FJt2JyV2olh0MefhGw%2BupnYBz463Je0U8Fd3wQ69dINX%2B9FccvYjNOr8rg7qamvCS6IB%2B7spikzKZDyq2B7MOKKH9ehFHmhW0tyk%2BY%2F%2FxoCzG8uFRSOzIxpoRHCUNXp%2F6XfiCfUYjmm%2BNHDY%2Ff7N5ufjgEu%2BmGeYGJ%2FxWPQ21z9G76rBZ%2FMP&X-Amz-Signature=bd77cbd6e4ffc5d19b7cfec13c4453a30e263c7b76a343d532d6dae64e864060&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTHOJXMS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkyLCgMylWcREn5%2FSTDOnrIkxj1MsiaZ0E0wILNoxSBAiA4SwYgBBj95nzcHasPeM%2BVUZMaZSZ8I%2BiZv%2FeufcogzyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMEEcRW7le1Rva2FVKtwD%2FsBehtmAX6e3c2%2BdPVxdlhjxzDn7bAnDbu%2F0JWr8z3q77z5fWN%2BuztKM%2F%2F58O4TaLaFXmZhHCkBju2Nzj4NLLt7p%2BXuXgNXYRSG3dvwBbTwxIkxbAOK9h2KlKihWEIUbcuyD4kPgsEX3sYFgqTil7H4Y9RGs4Ci%2BewnIYkoGE5x4HyZiRN9u1bTaI93Ak1qdketj1zzlTghnGc5NgCbUGtFVDUMCNcD%2BczkwbwXuoGf22T9Rb2uE%2BErawwrg9hkQuaFug%2F4EqAo5xlc5Kiv%2Fx5La8qlX%2F50%2BZm8CyjzLhYhRiJUZoLSHkU3cgoVGKVSgNbq1UDbm02wQPjD4%2BvGT%2BaIXGjKyLVNbDnUKGnwxMNbbwYrj5zlCS6WU9%2FJ9K2z4CTGLpK9pvdI1OZ4%2B0a2cHA4onVVQg2zTVaaBJRXkHSDR4jJq6g6kaWq%2BcuY2WtRpdc%2FToECLOVjpfaK9vTr3BJzoJHkVM4x%2FqjHtJtFZyJMR9t4AWO9I7bsDzewXxVg4gfZTcHiTuT%2F21Bkvd3yEsd9N4W7KeawCfNxae7ZmQTueHiRoLtRX%2FFIVaTI68dtc6JXhGw5YRckavUp2TlhKBivGer2rnvuM5VcKs64fPv7%2B9iWQp1aUr0c8GR8w8pKuvQY6pgHdA4bbautX%2FSoDYCpkRmK5QjucW9A8%2BRpM0gq3SYv7%2FJt2JyV2olh0MefhGw%2BupnYBz463Je0U8Fd3wQ69dINX%2B9FccvYjNOr8rg7qamvCS6IB%2B7spikzKZDyq2B7MOKKH9ehFHmhW0tyk%2BY%2F%2FxoCzG8uFRSOzIxpoRHCUNXp%2F6XfiCfUYjmm%2BNHDY%2Ff7N5ufjgEu%2BmGeYGJ%2FxWPQ21z9G76rBZ%2FMP&X-Amz-Signature=15e9dc63839de6b4f7031b86e3fbcad4a6b7076f5ecb2c1ac1211a6946c7239f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTHOJXMS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkyLCgMylWcREn5%2FSTDOnrIkxj1MsiaZ0E0wILNoxSBAiA4SwYgBBj95nzcHasPeM%2BVUZMaZSZ8I%2BiZv%2FeufcogzyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMEEcRW7le1Rva2FVKtwD%2FsBehtmAX6e3c2%2BdPVxdlhjxzDn7bAnDbu%2F0JWr8z3q77z5fWN%2BuztKM%2F%2F58O4TaLaFXmZhHCkBju2Nzj4NLLt7p%2BXuXgNXYRSG3dvwBbTwxIkxbAOK9h2KlKihWEIUbcuyD4kPgsEX3sYFgqTil7H4Y9RGs4Ci%2BewnIYkoGE5x4HyZiRN9u1bTaI93Ak1qdketj1zzlTghnGc5NgCbUGtFVDUMCNcD%2BczkwbwXuoGf22T9Rb2uE%2BErawwrg9hkQuaFug%2F4EqAo5xlc5Kiv%2Fx5La8qlX%2F50%2BZm8CyjzLhYhRiJUZoLSHkU3cgoVGKVSgNbq1UDbm02wQPjD4%2BvGT%2BaIXGjKyLVNbDnUKGnwxMNbbwYrj5zlCS6WU9%2FJ9K2z4CTGLpK9pvdI1OZ4%2B0a2cHA4onVVQg2zTVaaBJRXkHSDR4jJq6g6kaWq%2BcuY2WtRpdc%2FToECLOVjpfaK9vTr3BJzoJHkVM4x%2FqjHtJtFZyJMR9t4AWO9I7bsDzewXxVg4gfZTcHiTuT%2F21Bkvd3yEsd9N4W7KeawCfNxae7ZmQTueHiRoLtRX%2FFIVaTI68dtc6JXhGw5YRckavUp2TlhKBivGer2rnvuM5VcKs64fPv7%2B9iWQp1aUr0c8GR8w8pKuvQY6pgHdA4bbautX%2FSoDYCpkRmK5QjucW9A8%2BRpM0gq3SYv7%2FJt2JyV2olh0MefhGw%2BupnYBz463Je0U8Fd3wQ69dINX%2B9FccvYjNOr8rg7qamvCS6IB%2B7spikzKZDyq2B7MOKKH9ehFHmhW0tyk%2BY%2F%2FxoCzG8uFRSOzIxpoRHCUNXp%2F6XfiCfUYjmm%2BNHDY%2Ff7N5ufjgEu%2BmGeYGJ%2FxWPQ21z9G76rBZ%2FMP&X-Amz-Signature=72ad1b86ab8dfc43fdd9ad11216485ca737b94e34fa46f582d45b36ef608e8aa&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
