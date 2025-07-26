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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUMSZUG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDhhvqdvZf0CDfqBaWPOb3rHKSpuyOe553i6Gh5OKpolwIhALWhzY3qiakZVzkYUq%2B82QbfppOPtwDjjZjXUhQim6BeKv8DCF8QABoMNjM3NDIzMTgzODA1IgylyXzGVKg25A68faMq3AN20xA%2BFE%2FOQ7KZMGgK7aD%2FyEK2ve5KGl6g0mURfa%2B8FePYo9%2FGt5AK4DejqnbdW53gpSE7bunfD3B1G1oqrg1UZ8Ad8SkuITCE3gbjQbcacDUF4CpwZDKEKB2bBjvIYU0GRXu9qFHUeHiG1WKwEfv1oXmn8Elva2GpOPZNVKIjOsRINkn2o0CQJJKuegQu2Hx4ojL0enItwug%2BGEFosVmwjGYQMzPh3rhEUrK6iT%2BI7voGb3Y3G00mD8wlMWWH0YysXgertcvv380DMRC%2BPTuxFwuAlinetUc0xu6QSsowEUhCSX%2BUgsBM%2Fkc2w7echPXpJIUkgp1eJwT9BB93dB41W1WTYUdBZfonVNr3qCVAzPgPbCppCxSawT%2F2x7NQpC946HijiTyyPUNYHANVHYxDNO4jTo84krbYHtXXrM2Dg1Eqf9UM8PbB3HSJkXcdMSvkcp6O%2FSaApJaI8xSAm71iBdl9gkHNZpJQ06RdrpIjQXm2GHmX%2Bp8dbnUDkMAwelvzUOTUXClw1HwfAH29Pd%2BNdqZfkxVI2Kb0hRTzdyxpyrGWLeASyjB4shhQwnJ7770QGhOveePS5kFrM49doQ1oN74BNiz63dbDXjduptQPcxFGu5rkkbdRY7tjDDDUwZPEBjqkAUJEChLVntwfGYPiZU8r4j1nVdoH3xlju5wIJkKdVkNQE%2B0TZPw3UwA%2BPAT3jYfLCQbaAbsVkOxzHOERJxWL9ksQUkEbaJRe%2BZP9sREJEvgOF%2FcUk%2B8cTVy4%2FYA9UljTx4H4eLnPMLOoDzKCaNuuQ6UJaGOIJQDxXXG9BofloQbWTygvH3MEvU18jnXhaksh8RSdHIYHFp1R%2BEXgVWf20vT9wVBK&X-Amz-Signature=fda17dfa511b6e35d1c7f56c2b85a9cf4184350d925d4083e4474245412dd9ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUMSZUG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDhhvqdvZf0CDfqBaWPOb3rHKSpuyOe553i6Gh5OKpolwIhALWhzY3qiakZVzkYUq%2B82QbfppOPtwDjjZjXUhQim6BeKv8DCF8QABoMNjM3NDIzMTgzODA1IgylyXzGVKg25A68faMq3AN20xA%2BFE%2FOQ7KZMGgK7aD%2FyEK2ve5KGl6g0mURfa%2B8FePYo9%2FGt5AK4DejqnbdW53gpSE7bunfD3B1G1oqrg1UZ8Ad8SkuITCE3gbjQbcacDUF4CpwZDKEKB2bBjvIYU0GRXu9qFHUeHiG1WKwEfv1oXmn8Elva2GpOPZNVKIjOsRINkn2o0CQJJKuegQu2Hx4ojL0enItwug%2BGEFosVmwjGYQMzPh3rhEUrK6iT%2BI7voGb3Y3G00mD8wlMWWH0YysXgertcvv380DMRC%2BPTuxFwuAlinetUc0xu6QSsowEUhCSX%2BUgsBM%2Fkc2w7echPXpJIUkgp1eJwT9BB93dB41W1WTYUdBZfonVNr3qCVAzPgPbCppCxSawT%2F2x7NQpC946HijiTyyPUNYHANVHYxDNO4jTo84krbYHtXXrM2Dg1Eqf9UM8PbB3HSJkXcdMSvkcp6O%2FSaApJaI8xSAm71iBdl9gkHNZpJQ06RdrpIjQXm2GHmX%2Bp8dbnUDkMAwelvzUOTUXClw1HwfAH29Pd%2BNdqZfkxVI2Kb0hRTzdyxpyrGWLeASyjB4shhQwnJ7770QGhOveePS5kFrM49doQ1oN74BNiz63dbDXjduptQPcxFGu5rkkbdRY7tjDDDUwZPEBjqkAUJEChLVntwfGYPiZU8r4j1nVdoH3xlju5wIJkKdVkNQE%2B0TZPw3UwA%2BPAT3jYfLCQbaAbsVkOxzHOERJxWL9ksQUkEbaJRe%2BZP9sREJEvgOF%2FcUk%2B8cTVy4%2FYA9UljTx4H4eLnPMLOoDzKCaNuuQ6UJaGOIJQDxXXG9BofloQbWTygvH3MEvU18jnXhaksh8RSdHIYHFp1R%2BEXgVWf20vT9wVBK&X-Amz-Signature=00a1898a96e6b9d1f8b2bd6c4475faa67e4eaf78f81bf1fb4e5ec4a2160df091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUMSZUG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDhhvqdvZf0CDfqBaWPOb3rHKSpuyOe553i6Gh5OKpolwIhALWhzY3qiakZVzkYUq%2B82QbfppOPtwDjjZjXUhQim6BeKv8DCF8QABoMNjM3NDIzMTgzODA1IgylyXzGVKg25A68faMq3AN20xA%2BFE%2FOQ7KZMGgK7aD%2FyEK2ve5KGl6g0mURfa%2B8FePYo9%2FGt5AK4DejqnbdW53gpSE7bunfD3B1G1oqrg1UZ8Ad8SkuITCE3gbjQbcacDUF4CpwZDKEKB2bBjvIYU0GRXu9qFHUeHiG1WKwEfv1oXmn8Elva2GpOPZNVKIjOsRINkn2o0CQJJKuegQu2Hx4ojL0enItwug%2BGEFosVmwjGYQMzPh3rhEUrK6iT%2BI7voGb3Y3G00mD8wlMWWH0YysXgertcvv380DMRC%2BPTuxFwuAlinetUc0xu6QSsowEUhCSX%2BUgsBM%2Fkc2w7echPXpJIUkgp1eJwT9BB93dB41W1WTYUdBZfonVNr3qCVAzPgPbCppCxSawT%2F2x7NQpC946HijiTyyPUNYHANVHYxDNO4jTo84krbYHtXXrM2Dg1Eqf9UM8PbB3HSJkXcdMSvkcp6O%2FSaApJaI8xSAm71iBdl9gkHNZpJQ06RdrpIjQXm2GHmX%2Bp8dbnUDkMAwelvzUOTUXClw1HwfAH29Pd%2BNdqZfkxVI2Kb0hRTzdyxpyrGWLeASyjB4shhQwnJ7770QGhOveePS5kFrM49doQ1oN74BNiz63dbDXjduptQPcxFGu5rkkbdRY7tjDDDUwZPEBjqkAUJEChLVntwfGYPiZU8r4j1nVdoH3xlju5wIJkKdVkNQE%2B0TZPw3UwA%2BPAT3jYfLCQbaAbsVkOxzHOERJxWL9ksQUkEbaJRe%2BZP9sREJEvgOF%2FcUk%2B8cTVy4%2FYA9UljTx4H4eLnPMLOoDzKCaNuuQ6UJaGOIJQDxXXG9BofloQbWTygvH3MEvU18jnXhaksh8RSdHIYHFp1R%2BEXgVWf20vT9wVBK&X-Amz-Signature=942e66acba4c5f6f4eee07b1cc0643633665ebb9c4decc382b9b6bb576c6c376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUMSZUG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDhhvqdvZf0CDfqBaWPOb3rHKSpuyOe553i6Gh5OKpolwIhALWhzY3qiakZVzkYUq%2B82QbfppOPtwDjjZjXUhQim6BeKv8DCF8QABoMNjM3NDIzMTgzODA1IgylyXzGVKg25A68faMq3AN20xA%2BFE%2FOQ7KZMGgK7aD%2FyEK2ve5KGl6g0mURfa%2B8FePYo9%2FGt5AK4DejqnbdW53gpSE7bunfD3B1G1oqrg1UZ8Ad8SkuITCE3gbjQbcacDUF4CpwZDKEKB2bBjvIYU0GRXu9qFHUeHiG1WKwEfv1oXmn8Elva2GpOPZNVKIjOsRINkn2o0CQJJKuegQu2Hx4ojL0enItwug%2BGEFosVmwjGYQMzPh3rhEUrK6iT%2BI7voGb3Y3G00mD8wlMWWH0YysXgertcvv380DMRC%2BPTuxFwuAlinetUc0xu6QSsowEUhCSX%2BUgsBM%2Fkc2w7echPXpJIUkgp1eJwT9BB93dB41W1WTYUdBZfonVNr3qCVAzPgPbCppCxSawT%2F2x7NQpC946HijiTyyPUNYHANVHYxDNO4jTo84krbYHtXXrM2Dg1Eqf9UM8PbB3HSJkXcdMSvkcp6O%2FSaApJaI8xSAm71iBdl9gkHNZpJQ06RdrpIjQXm2GHmX%2Bp8dbnUDkMAwelvzUOTUXClw1HwfAH29Pd%2BNdqZfkxVI2Kb0hRTzdyxpyrGWLeASyjB4shhQwnJ7770QGhOveePS5kFrM49doQ1oN74BNiz63dbDXjduptQPcxFGu5rkkbdRY7tjDDDUwZPEBjqkAUJEChLVntwfGYPiZU8r4j1nVdoH3xlju5wIJkKdVkNQE%2B0TZPw3UwA%2BPAT3jYfLCQbaAbsVkOxzHOERJxWL9ksQUkEbaJRe%2BZP9sREJEvgOF%2FcUk%2B8cTVy4%2FYA9UljTx4H4eLnPMLOoDzKCaNuuQ6UJaGOIJQDxXXG9BofloQbWTygvH3MEvU18jnXhaksh8RSdHIYHFp1R%2BEXgVWf20vT9wVBK&X-Amz-Signature=8dda55e8f0249c2cc77fcbba7c3b0b24ca31fcd88b2d005e34a365eafd8cb293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUMSZUG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDhhvqdvZf0CDfqBaWPOb3rHKSpuyOe553i6Gh5OKpolwIhALWhzY3qiakZVzkYUq%2B82QbfppOPtwDjjZjXUhQim6BeKv8DCF8QABoMNjM3NDIzMTgzODA1IgylyXzGVKg25A68faMq3AN20xA%2BFE%2FOQ7KZMGgK7aD%2FyEK2ve5KGl6g0mURfa%2B8FePYo9%2FGt5AK4DejqnbdW53gpSE7bunfD3B1G1oqrg1UZ8Ad8SkuITCE3gbjQbcacDUF4CpwZDKEKB2bBjvIYU0GRXu9qFHUeHiG1WKwEfv1oXmn8Elva2GpOPZNVKIjOsRINkn2o0CQJJKuegQu2Hx4ojL0enItwug%2BGEFosVmwjGYQMzPh3rhEUrK6iT%2BI7voGb3Y3G00mD8wlMWWH0YysXgertcvv380DMRC%2BPTuxFwuAlinetUc0xu6QSsowEUhCSX%2BUgsBM%2Fkc2w7echPXpJIUkgp1eJwT9BB93dB41W1WTYUdBZfonVNr3qCVAzPgPbCppCxSawT%2F2x7NQpC946HijiTyyPUNYHANVHYxDNO4jTo84krbYHtXXrM2Dg1Eqf9UM8PbB3HSJkXcdMSvkcp6O%2FSaApJaI8xSAm71iBdl9gkHNZpJQ06RdrpIjQXm2GHmX%2Bp8dbnUDkMAwelvzUOTUXClw1HwfAH29Pd%2BNdqZfkxVI2Kb0hRTzdyxpyrGWLeASyjB4shhQwnJ7770QGhOveePS5kFrM49doQ1oN74BNiz63dbDXjduptQPcxFGu5rkkbdRY7tjDDDUwZPEBjqkAUJEChLVntwfGYPiZU8r4j1nVdoH3xlju5wIJkKdVkNQE%2B0TZPw3UwA%2BPAT3jYfLCQbaAbsVkOxzHOERJxWL9ksQUkEbaJRe%2BZP9sREJEvgOF%2FcUk%2B8cTVy4%2FYA9UljTx4H4eLnPMLOoDzKCaNuuQ6UJaGOIJQDxXXG9BofloQbWTygvH3MEvU18jnXhaksh8RSdHIYHFp1R%2BEXgVWf20vT9wVBK&X-Amz-Signature=78900caa80166604b28d1399d6236bf802ca48f43acfd5cb2773ce87984762c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUMSZUG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDhhvqdvZf0CDfqBaWPOb3rHKSpuyOe553i6Gh5OKpolwIhALWhzY3qiakZVzkYUq%2B82QbfppOPtwDjjZjXUhQim6BeKv8DCF8QABoMNjM3NDIzMTgzODA1IgylyXzGVKg25A68faMq3AN20xA%2BFE%2FOQ7KZMGgK7aD%2FyEK2ve5KGl6g0mURfa%2B8FePYo9%2FGt5AK4DejqnbdW53gpSE7bunfD3B1G1oqrg1UZ8Ad8SkuITCE3gbjQbcacDUF4CpwZDKEKB2bBjvIYU0GRXu9qFHUeHiG1WKwEfv1oXmn8Elva2GpOPZNVKIjOsRINkn2o0CQJJKuegQu2Hx4ojL0enItwug%2BGEFosVmwjGYQMzPh3rhEUrK6iT%2BI7voGb3Y3G00mD8wlMWWH0YysXgertcvv380DMRC%2BPTuxFwuAlinetUc0xu6QSsowEUhCSX%2BUgsBM%2Fkc2w7echPXpJIUkgp1eJwT9BB93dB41W1WTYUdBZfonVNr3qCVAzPgPbCppCxSawT%2F2x7NQpC946HijiTyyPUNYHANVHYxDNO4jTo84krbYHtXXrM2Dg1Eqf9UM8PbB3HSJkXcdMSvkcp6O%2FSaApJaI8xSAm71iBdl9gkHNZpJQ06RdrpIjQXm2GHmX%2Bp8dbnUDkMAwelvzUOTUXClw1HwfAH29Pd%2BNdqZfkxVI2Kb0hRTzdyxpyrGWLeASyjB4shhQwnJ7770QGhOveePS5kFrM49doQ1oN74BNiz63dbDXjduptQPcxFGu5rkkbdRY7tjDDDUwZPEBjqkAUJEChLVntwfGYPiZU8r4j1nVdoH3xlju5wIJkKdVkNQE%2B0TZPw3UwA%2BPAT3jYfLCQbaAbsVkOxzHOERJxWL9ksQUkEbaJRe%2BZP9sREJEvgOF%2FcUk%2B8cTVy4%2FYA9UljTx4H4eLnPMLOoDzKCaNuuQ6UJaGOIJQDxXXG9BofloQbWTygvH3MEvU18jnXhaksh8RSdHIYHFp1R%2BEXgVWf20vT9wVBK&X-Amz-Signature=18f041ba05b3fb47e586ee6182d2eb085382be2a88a2be0f3881e700e8593f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUMSZUG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDhhvqdvZf0CDfqBaWPOb3rHKSpuyOe553i6Gh5OKpolwIhALWhzY3qiakZVzkYUq%2B82QbfppOPtwDjjZjXUhQim6BeKv8DCF8QABoMNjM3NDIzMTgzODA1IgylyXzGVKg25A68faMq3AN20xA%2BFE%2FOQ7KZMGgK7aD%2FyEK2ve5KGl6g0mURfa%2B8FePYo9%2FGt5AK4DejqnbdW53gpSE7bunfD3B1G1oqrg1UZ8Ad8SkuITCE3gbjQbcacDUF4CpwZDKEKB2bBjvIYU0GRXu9qFHUeHiG1WKwEfv1oXmn8Elva2GpOPZNVKIjOsRINkn2o0CQJJKuegQu2Hx4ojL0enItwug%2BGEFosVmwjGYQMzPh3rhEUrK6iT%2BI7voGb3Y3G00mD8wlMWWH0YysXgertcvv380DMRC%2BPTuxFwuAlinetUc0xu6QSsowEUhCSX%2BUgsBM%2Fkc2w7echPXpJIUkgp1eJwT9BB93dB41W1WTYUdBZfonVNr3qCVAzPgPbCppCxSawT%2F2x7NQpC946HijiTyyPUNYHANVHYxDNO4jTo84krbYHtXXrM2Dg1Eqf9UM8PbB3HSJkXcdMSvkcp6O%2FSaApJaI8xSAm71iBdl9gkHNZpJQ06RdrpIjQXm2GHmX%2Bp8dbnUDkMAwelvzUOTUXClw1HwfAH29Pd%2BNdqZfkxVI2Kb0hRTzdyxpyrGWLeASyjB4shhQwnJ7770QGhOveePS5kFrM49doQ1oN74BNiz63dbDXjduptQPcxFGu5rkkbdRY7tjDDDUwZPEBjqkAUJEChLVntwfGYPiZU8r4j1nVdoH3xlju5wIJkKdVkNQE%2B0TZPw3UwA%2BPAT3jYfLCQbaAbsVkOxzHOERJxWL9ksQUkEbaJRe%2BZP9sREJEvgOF%2FcUk%2B8cTVy4%2FYA9UljTx4H4eLnPMLOoDzKCaNuuQ6UJaGOIJQDxXXG9BofloQbWTygvH3MEvU18jnXhaksh8RSdHIYHFp1R%2BEXgVWf20vT9wVBK&X-Amz-Signature=da14018ebee5c0145851890edda6a05e54c311fe6ba55ed9d64d61c35916af7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
