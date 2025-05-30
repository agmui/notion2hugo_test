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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5SOP4S%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMClxLV2tJdqJ1KpnLM55UmJWlE2QR3VOWJUxcBP%2F9bAiEAmONaQXL1%2Fkq4CFOozl4vMAhGc8PyWVd%2FFiumlGB7QD8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9XCr7eIpVCUWbKyyrcAyKuKm8hYDhQwdOHYzPNV6DIdK9ArKcNBYn0DyRE3IISEPn4p4XDh4ujvmeouhebETbfJ9ECcXeQQGWCqwjRKxaiEIARIVtVCn9oXTprzxuueRmYfuumb6baKCS6W9t%2FYcU9zS0qdAVjorfnqGRJacsrvbGQ4yYUcTKzzHMzapx8RRPsE2B9gtj2wtJi2w9dLulZH4Y%2BHiGFFpRj0wYkyAnN4sJslbk5I5hRNDPzCylIvUhp2es3ZActWTYXnXuo1qurdhQfdBvvx35Utpk3XBBg8vcusE02kcBybSTrKM80HOUtfCjV4Ih7kbWphsUgJGeOc8MtyqS2El%2BJ5ylIlhEtPuZrpwGCldovMCLQkPgBuJrh3THYBwCxQ43jnMFbUDAFJnDEjlZJ6JaEBNvp6%2BqIxcyXXqd6MroBnsoUUXlZNe9Djd1ZvDp39XbK4IJMLRTV%2Fihn7j9%2FVIycZN0t8VeBlshJ9poS7O%2FrN6ehIic%2BMT7o9rhxQAsYWmgzkOvafp9s8bRBuH5r8Rk4MuTmnKuEivYwUORh8xiJscbN6QelQMN8xH9mcEMTyD0fvFKJUPpGq0RYbHzN5AoIjlaL48eF9kLk95ifmGEeLBuuUdOglukyudjS7ZKWGZjcMNn958EGOqUBzXGT3Fznby8AxUVDjhs1edMlPDw%2BezdT35M4f3kECzLDdBexmr5gfMB37IsQOTt8wecMlHksawBq2%2BBoJU27yPDSo7ed6SGIeyeBEaJ3tIUwMo%2BJ6sRuCV0qDSJvPgTDnnjwfqYb%2Fg6z9jdaRcxle0%2FA4vUIV1gYnAWvosBVTzKSlA4GHVQ39r1Tee77gq%2BxXcNoKyVH63bBMLYEi6FMENTC%2F3M1&X-Amz-Signature=dc46042d65156956b0de93bba183413839641692df5a820a9c2ae0b7a178642a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5SOP4S%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMClxLV2tJdqJ1KpnLM55UmJWlE2QR3VOWJUxcBP%2F9bAiEAmONaQXL1%2Fkq4CFOozl4vMAhGc8PyWVd%2FFiumlGB7QD8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9XCr7eIpVCUWbKyyrcAyKuKm8hYDhQwdOHYzPNV6DIdK9ArKcNBYn0DyRE3IISEPn4p4XDh4ujvmeouhebETbfJ9ECcXeQQGWCqwjRKxaiEIARIVtVCn9oXTprzxuueRmYfuumb6baKCS6W9t%2FYcU9zS0qdAVjorfnqGRJacsrvbGQ4yYUcTKzzHMzapx8RRPsE2B9gtj2wtJi2w9dLulZH4Y%2BHiGFFpRj0wYkyAnN4sJslbk5I5hRNDPzCylIvUhp2es3ZActWTYXnXuo1qurdhQfdBvvx35Utpk3XBBg8vcusE02kcBybSTrKM80HOUtfCjV4Ih7kbWphsUgJGeOc8MtyqS2El%2BJ5ylIlhEtPuZrpwGCldovMCLQkPgBuJrh3THYBwCxQ43jnMFbUDAFJnDEjlZJ6JaEBNvp6%2BqIxcyXXqd6MroBnsoUUXlZNe9Djd1ZvDp39XbK4IJMLRTV%2Fihn7j9%2FVIycZN0t8VeBlshJ9poS7O%2FrN6ehIic%2BMT7o9rhxQAsYWmgzkOvafp9s8bRBuH5r8Rk4MuTmnKuEivYwUORh8xiJscbN6QelQMN8xH9mcEMTyD0fvFKJUPpGq0RYbHzN5AoIjlaL48eF9kLk95ifmGEeLBuuUdOglukyudjS7ZKWGZjcMNn958EGOqUBzXGT3Fznby8AxUVDjhs1edMlPDw%2BezdT35M4f3kECzLDdBexmr5gfMB37IsQOTt8wecMlHksawBq2%2BBoJU27yPDSo7ed6SGIeyeBEaJ3tIUwMo%2BJ6sRuCV0qDSJvPgTDnnjwfqYb%2Fg6z9jdaRcxle0%2FA4vUIV1gYnAWvosBVTzKSlA4GHVQ39r1Tee77gq%2BxXcNoKyVH63bBMLYEi6FMENTC%2F3M1&X-Amz-Signature=a915ed8bcb5182b90f4bf4246cda084f6ab38bbe78976dc161a3e51fd80a602d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5SOP4S%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMClxLV2tJdqJ1KpnLM55UmJWlE2QR3VOWJUxcBP%2F9bAiEAmONaQXL1%2Fkq4CFOozl4vMAhGc8PyWVd%2FFiumlGB7QD8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9XCr7eIpVCUWbKyyrcAyKuKm8hYDhQwdOHYzPNV6DIdK9ArKcNBYn0DyRE3IISEPn4p4XDh4ujvmeouhebETbfJ9ECcXeQQGWCqwjRKxaiEIARIVtVCn9oXTprzxuueRmYfuumb6baKCS6W9t%2FYcU9zS0qdAVjorfnqGRJacsrvbGQ4yYUcTKzzHMzapx8RRPsE2B9gtj2wtJi2w9dLulZH4Y%2BHiGFFpRj0wYkyAnN4sJslbk5I5hRNDPzCylIvUhp2es3ZActWTYXnXuo1qurdhQfdBvvx35Utpk3XBBg8vcusE02kcBybSTrKM80HOUtfCjV4Ih7kbWphsUgJGeOc8MtyqS2El%2BJ5ylIlhEtPuZrpwGCldovMCLQkPgBuJrh3THYBwCxQ43jnMFbUDAFJnDEjlZJ6JaEBNvp6%2BqIxcyXXqd6MroBnsoUUXlZNe9Djd1ZvDp39XbK4IJMLRTV%2Fihn7j9%2FVIycZN0t8VeBlshJ9poS7O%2FrN6ehIic%2BMT7o9rhxQAsYWmgzkOvafp9s8bRBuH5r8Rk4MuTmnKuEivYwUORh8xiJscbN6QelQMN8xH9mcEMTyD0fvFKJUPpGq0RYbHzN5AoIjlaL48eF9kLk95ifmGEeLBuuUdOglukyudjS7ZKWGZjcMNn958EGOqUBzXGT3Fznby8AxUVDjhs1edMlPDw%2BezdT35M4f3kECzLDdBexmr5gfMB37IsQOTt8wecMlHksawBq2%2BBoJU27yPDSo7ed6SGIeyeBEaJ3tIUwMo%2BJ6sRuCV0qDSJvPgTDnnjwfqYb%2Fg6z9jdaRcxle0%2FA4vUIV1gYnAWvosBVTzKSlA4GHVQ39r1Tee77gq%2BxXcNoKyVH63bBMLYEi6FMENTC%2F3M1&X-Amz-Signature=a38591bcc83efff163d27e533071cf7cafdc4374789048e5bda99791ab2971a6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5SOP4S%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMClxLV2tJdqJ1KpnLM55UmJWlE2QR3VOWJUxcBP%2F9bAiEAmONaQXL1%2Fkq4CFOozl4vMAhGc8PyWVd%2FFiumlGB7QD8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9XCr7eIpVCUWbKyyrcAyKuKm8hYDhQwdOHYzPNV6DIdK9ArKcNBYn0DyRE3IISEPn4p4XDh4ujvmeouhebETbfJ9ECcXeQQGWCqwjRKxaiEIARIVtVCn9oXTprzxuueRmYfuumb6baKCS6W9t%2FYcU9zS0qdAVjorfnqGRJacsrvbGQ4yYUcTKzzHMzapx8RRPsE2B9gtj2wtJi2w9dLulZH4Y%2BHiGFFpRj0wYkyAnN4sJslbk5I5hRNDPzCylIvUhp2es3ZActWTYXnXuo1qurdhQfdBvvx35Utpk3XBBg8vcusE02kcBybSTrKM80HOUtfCjV4Ih7kbWphsUgJGeOc8MtyqS2El%2BJ5ylIlhEtPuZrpwGCldovMCLQkPgBuJrh3THYBwCxQ43jnMFbUDAFJnDEjlZJ6JaEBNvp6%2BqIxcyXXqd6MroBnsoUUXlZNe9Djd1ZvDp39XbK4IJMLRTV%2Fihn7j9%2FVIycZN0t8VeBlshJ9poS7O%2FrN6ehIic%2BMT7o9rhxQAsYWmgzkOvafp9s8bRBuH5r8Rk4MuTmnKuEivYwUORh8xiJscbN6QelQMN8xH9mcEMTyD0fvFKJUPpGq0RYbHzN5AoIjlaL48eF9kLk95ifmGEeLBuuUdOglukyudjS7ZKWGZjcMNn958EGOqUBzXGT3Fznby8AxUVDjhs1edMlPDw%2BezdT35M4f3kECzLDdBexmr5gfMB37IsQOTt8wecMlHksawBq2%2BBoJU27yPDSo7ed6SGIeyeBEaJ3tIUwMo%2BJ6sRuCV0qDSJvPgTDnnjwfqYb%2Fg6z9jdaRcxle0%2FA4vUIV1gYnAWvosBVTzKSlA4GHVQ39r1Tee77gq%2BxXcNoKyVH63bBMLYEi6FMENTC%2F3M1&X-Amz-Signature=3734c3cd05a5b706d16907a0fdc52e00cf950036aaba368ecdaf63e62e5705ca&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5SOP4S%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMClxLV2tJdqJ1KpnLM55UmJWlE2QR3VOWJUxcBP%2F9bAiEAmONaQXL1%2Fkq4CFOozl4vMAhGc8PyWVd%2FFiumlGB7QD8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9XCr7eIpVCUWbKyyrcAyKuKm8hYDhQwdOHYzPNV6DIdK9ArKcNBYn0DyRE3IISEPn4p4XDh4ujvmeouhebETbfJ9ECcXeQQGWCqwjRKxaiEIARIVtVCn9oXTprzxuueRmYfuumb6baKCS6W9t%2FYcU9zS0qdAVjorfnqGRJacsrvbGQ4yYUcTKzzHMzapx8RRPsE2B9gtj2wtJi2w9dLulZH4Y%2BHiGFFpRj0wYkyAnN4sJslbk5I5hRNDPzCylIvUhp2es3ZActWTYXnXuo1qurdhQfdBvvx35Utpk3XBBg8vcusE02kcBybSTrKM80HOUtfCjV4Ih7kbWphsUgJGeOc8MtyqS2El%2BJ5ylIlhEtPuZrpwGCldovMCLQkPgBuJrh3THYBwCxQ43jnMFbUDAFJnDEjlZJ6JaEBNvp6%2BqIxcyXXqd6MroBnsoUUXlZNe9Djd1ZvDp39XbK4IJMLRTV%2Fihn7j9%2FVIycZN0t8VeBlshJ9poS7O%2FrN6ehIic%2BMT7o9rhxQAsYWmgzkOvafp9s8bRBuH5r8Rk4MuTmnKuEivYwUORh8xiJscbN6QelQMN8xH9mcEMTyD0fvFKJUPpGq0RYbHzN5AoIjlaL48eF9kLk95ifmGEeLBuuUdOglukyudjS7ZKWGZjcMNn958EGOqUBzXGT3Fznby8AxUVDjhs1edMlPDw%2BezdT35M4f3kECzLDdBexmr5gfMB37IsQOTt8wecMlHksawBq2%2BBoJU27yPDSo7ed6SGIeyeBEaJ3tIUwMo%2BJ6sRuCV0qDSJvPgTDnnjwfqYb%2Fg6z9jdaRcxle0%2FA4vUIV1gYnAWvosBVTzKSlA4GHVQ39r1Tee77gq%2BxXcNoKyVH63bBMLYEi6FMENTC%2F3M1&X-Amz-Signature=4be2e2c63b8440bb7c2ca6c95060106a072fe3441bd7594ef2167a0d269d5d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5SOP4S%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMClxLV2tJdqJ1KpnLM55UmJWlE2QR3VOWJUxcBP%2F9bAiEAmONaQXL1%2Fkq4CFOozl4vMAhGc8PyWVd%2FFiumlGB7QD8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9XCr7eIpVCUWbKyyrcAyKuKm8hYDhQwdOHYzPNV6DIdK9ArKcNBYn0DyRE3IISEPn4p4XDh4ujvmeouhebETbfJ9ECcXeQQGWCqwjRKxaiEIARIVtVCn9oXTprzxuueRmYfuumb6baKCS6W9t%2FYcU9zS0qdAVjorfnqGRJacsrvbGQ4yYUcTKzzHMzapx8RRPsE2B9gtj2wtJi2w9dLulZH4Y%2BHiGFFpRj0wYkyAnN4sJslbk5I5hRNDPzCylIvUhp2es3ZActWTYXnXuo1qurdhQfdBvvx35Utpk3XBBg8vcusE02kcBybSTrKM80HOUtfCjV4Ih7kbWphsUgJGeOc8MtyqS2El%2BJ5ylIlhEtPuZrpwGCldovMCLQkPgBuJrh3THYBwCxQ43jnMFbUDAFJnDEjlZJ6JaEBNvp6%2BqIxcyXXqd6MroBnsoUUXlZNe9Djd1ZvDp39XbK4IJMLRTV%2Fihn7j9%2FVIycZN0t8VeBlshJ9poS7O%2FrN6ehIic%2BMT7o9rhxQAsYWmgzkOvafp9s8bRBuH5r8Rk4MuTmnKuEivYwUORh8xiJscbN6QelQMN8xH9mcEMTyD0fvFKJUPpGq0RYbHzN5AoIjlaL48eF9kLk95ifmGEeLBuuUdOglukyudjS7ZKWGZjcMNn958EGOqUBzXGT3Fznby8AxUVDjhs1edMlPDw%2BezdT35M4f3kECzLDdBexmr5gfMB37IsQOTt8wecMlHksawBq2%2BBoJU27yPDSo7ed6SGIeyeBEaJ3tIUwMo%2BJ6sRuCV0qDSJvPgTDnnjwfqYb%2Fg6z9jdaRcxle0%2FA4vUIV1gYnAWvosBVTzKSlA4GHVQ39r1Tee77gq%2BxXcNoKyVH63bBMLYEi6FMENTC%2F3M1&X-Amz-Signature=7c3a2acfaffc3cc3d24c3b03fa48679096d214f930b3aca628c129f8a957e75f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5SOP4S%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMClxLV2tJdqJ1KpnLM55UmJWlE2QR3VOWJUxcBP%2F9bAiEAmONaQXL1%2Fkq4CFOozl4vMAhGc8PyWVd%2FFiumlGB7QD8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9XCr7eIpVCUWbKyyrcAyKuKm8hYDhQwdOHYzPNV6DIdK9ArKcNBYn0DyRE3IISEPn4p4XDh4ujvmeouhebETbfJ9ECcXeQQGWCqwjRKxaiEIARIVtVCn9oXTprzxuueRmYfuumb6baKCS6W9t%2FYcU9zS0qdAVjorfnqGRJacsrvbGQ4yYUcTKzzHMzapx8RRPsE2B9gtj2wtJi2w9dLulZH4Y%2BHiGFFpRj0wYkyAnN4sJslbk5I5hRNDPzCylIvUhp2es3ZActWTYXnXuo1qurdhQfdBvvx35Utpk3XBBg8vcusE02kcBybSTrKM80HOUtfCjV4Ih7kbWphsUgJGeOc8MtyqS2El%2BJ5ylIlhEtPuZrpwGCldovMCLQkPgBuJrh3THYBwCxQ43jnMFbUDAFJnDEjlZJ6JaEBNvp6%2BqIxcyXXqd6MroBnsoUUXlZNe9Djd1ZvDp39XbK4IJMLRTV%2Fihn7j9%2FVIycZN0t8VeBlshJ9poS7O%2FrN6ehIic%2BMT7o9rhxQAsYWmgzkOvafp9s8bRBuH5r8Rk4MuTmnKuEivYwUORh8xiJscbN6QelQMN8xH9mcEMTyD0fvFKJUPpGq0RYbHzN5AoIjlaL48eF9kLk95ifmGEeLBuuUdOglukyudjS7ZKWGZjcMNn958EGOqUBzXGT3Fznby8AxUVDjhs1edMlPDw%2BezdT35M4f3kECzLDdBexmr5gfMB37IsQOTt8wecMlHksawBq2%2BBoJU27yPDSo7ed6SGIeyeBEaJ3tIUwMo%2BJ6sRuCV0qDSJvPgTDnnjwfqYb%2Fg6z9jdaRcxle0%2FA4vUIV1gYnAWvosBVTzKSlA4GHVQ39r1Tee77gq%2BxXcNoKyVH63bBMLYEi6FMENTC%2F3M1&X-Amz-Signature=aba1fde08d0fade39fce2791e57b756e511e214325e01d2ae247248519be3883&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
