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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WKFVE4J%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiRyewTbyG0%2FsV83jeId62YG4bHPOyaIzmDJk34ZmbFAIgPUgxHy9tkKlCUsqfd5sbLv7RVJSnfVePIYdWz9YWhboqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpvXin9wyxIZpYRQCrcA1puZUfUySDJxx3ej80SsLxxS0YLxAY45t9PgqSOEPEMP65YFdg7S%2Bl6145Md7s6dNJ1dTj0S%2BGa%2FkAaTDTUVWXnnxU78lvg5YqIksvioxlXrRfkohQPY9R%2F%2BA4Qai2FJzIbtmcApKfS1f2tV7gr1Fbey2sE2nNv4b2ux5M5f2fz3778JQmuWowpDFlc1%2BrTrTVZd33n%2FiWZhcy6nR%2BV3XuwaDA56aKQODQGaJe6pQ1UQTqNMJngi8kJ7iFl949Z39sFLOdS8CMOJ%2FdiZ6kuY1CxtnXMMl5MIIck2lSFDqvpmUNvd169XybYXkIzQihbq3Pln3yppGfCVMzjcPcqTy91O3ZCiTiPW3TTt%2BfdEmiotnAw%2BxbM%2F3pqy3WBpMR6HYhQxMiVYK7e5SYghm8w47kGRTUHqjrCbhP%2FCg3Jl91%2FpEJyv%2FGI09Mj9hRfIqBZU2TqFWUZXs3LtnTs56P1XIqk0Q%2FQNZHFv4s2hE0qFaPy4Q6vT85qHIyJv0srKnfR5L3ewlywGeLv4Hm2vmiSBvmCXy%2FdKvgrgmBqrz7gHmzz0VKKJd9K1cESX%2F8czY%2F%2BW12Cyc%2FCPZoIyiaL7%2FyarMk0Bdr2ODH8tzjK%2BQhTrmRTdyLm5LoSP2G00aW9MOehz8IGOqUBx3LCPk2kTb186tcyc1u3rwcpCUZFKJqCeWrpvT9UFvzfbnkvyMVJbcwaZJSDXNFZSv5NzaH1DMtoX3ky%2Blkz%2BCK9slPz9DDtRTmej1orNw%2BtjZT8hkTd8Y3BUrDsuHFw8OEl4MriC6QkNzHj87FiZUYnshc0JSyVQIJyd1WW0MmpQverPgK6a%2BaU0yMztV5v%2FqRX%2FbJVL1qAVd6HeWZH78Upb%2BOo&X-Amz-Signature=ec3af595009ec6e200a650b509c8693212ab474ea13d23b49de3240ee9fe0970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WKFVE4J%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiRyewTbyG0%2FsV83jeId62YG4bHPOyaIzmDJk34ZmbFAIgPUgxHy9tkKlCUsqfd5sbLv7RVJSnfVePIYdWz9YWhboqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpvXin9wyxIZpYRQCrcA1puZUfUySDJxx3ej80SsLxxS0YLxAY45t9PgqSOEPEMP65YFdg7S%2Bl6145Md7s6dNJ1dTj0S%2BGa%2FkAaTDTUVWXnnxU78lvg5YqIksvioxlXrRfkohQPY9R%2F%2BA4Qai2FJzIbtmcApKfS1f2tV7gr1Fbey2sE2nNv4b2ux5M5f2fz3778JQmuWowpDFlc1%2BrTrTVZd33n%2FiWZhcy6nR%2BV3XuwaDA56aKQODQGaJe6pQ1UQTqNMJngi8kJ7iFl949Z39sFLOdS8CMOJ%2FdiZ6kuY1CxtnXMMl5MIIck2lSFDqvpmUNvd169XybYXkIzQihbq3Pln3yppGfCVMzjcPcqTy91O3ZCiTiPW3TTt%2BfdEmiotnAw%2BxbM%2F3pqy3WBpMR6HYhQxMiVYK7e5SYghm8w47kGRTUHqjrCbhP%2FCg3Jl91%2FpEJyv%2FGI09Mj9hRfIqBZU2TqFWUZXs3LtnTs56P1XIqk0Q%2FQNZHFv4s2hE0qFaPy4Q6vT85qHIyJv0srKnfR5L3ewlywGeLv4Hm2vmiSBvmCXy%2FdKvgrgmBqrz7gHmzz0VKKJd9K1cESX%2F8czY%2F%2BW12Cyc%2FCPZoIyiaL7%2FyarMk0Bdr2ODH8tzjK%2BQhTrmRTdyLm5LoSP2G00aW9MOehz8IGOqUBx3LCPk2kTb186tcyc1u3rwcpCUZFKJqCeWrpvT9UFvzfbnkvyMVJbcwaZJSDXNFZSv5NzaH1DMtoX3ky%2Blkz%2BCK9slPz9DDtRTmej1orNw%2BtjZT8hkTd8Y3BUrDsuHFw8OEl4MriC6QkNzHj87FiZUYnshc0JSyVQIJyd1WW0MmpQverPgK6a%2BaU0yMztV5v%2FqRX%2FbJVL1qAVd6HeWZH78Upb%2BOo&X-Amz-Signature=a238c1761f7c03f73e2520d9b9d179c873197e2a7424b839ccdbd0320947c09a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WKFVE4J%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiRyewTbyG0%2FsV83jeId62YG4bHPOyaIzmDJk34ZmbFAIgPUgxHy9tkKlCUsqfd5sbLv7RVJSnfVePIYdWz9YWhboqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpvXin9wyxIZpYRQCrcA1puZUfUySDJxx3ej80SsLxxS0YLxAY45t9PgqSOEPEMP65YFdg7S%2Bl6145Md7s6dNJ1dTj0S%2BGa%2FkAaTDTUVWXnnxU78lvg5YqIksvioxlXrRfkohQPY9R%2F%2BA4Qai2FJzIbtmcApKfS1f2tV7gr1Fbey2sE2nNv4b2ux5M5f2fz3778JQmuWowpDFlc1%2BrTrTVZd33n%2FiWZhcy6nR%2BV3XuwaDA56aKQODQGaJe6pQ1UQTqNMJngi8kJ7iFl949Z39sFLOdS8CMOJ%2FdiZ6kuY1CxtnXMMl5MIIck2lSFDqvpmUNvd169XybYXkIzQihbq3Pln3yppGfCVMzjcPcqTy91O3ZCiTiPW3TTt%2BfdEmiotnAw%2BxbM%2F3pqy3WBpMR6HYhQxMiVYK7e5SYghm8w47kGRTUHqjrCbhP%2FCg3Jl91%2FpEJyv%2FGI09Mj9hRfIqBZU2TqFWUZXs3LtnTs56P1XIqk0Q%2FQNZHFv4s2hE0qFaPy4Q6vT85qHIyJv0srKnfR5L3ewlywGeLv4Hm2vmiSBvmCXy%2FdKvgrgmBqrz7gHmzz0VKKJd9K1cESX%2F8czY%2F%2BW12Cyc%2FCPZoIyiaL7%2FyarMk0Bdr2ODH8tzjK%2BQhTrmRTdyLm5LoSP2G00aW9MOehz8IGOqUBx3LCPk2kTb186tcyc1u3rwcpCUZFKJqCeWrpvT9UFvzfbnkvyMVJbcwaZJSDXNFZSv5NzaH1DMtoX3ky%2Blkz%2BCK9slPz9DDtRTmej1orNw%2BtjZT8hkTd8Y3BUrDsuHFw8OEl4MriC6QkNzHj87FiZUYnshc0JSyVQIJyd1WW0MmpQverPgK6a%2BaU0yMztV5v%2FqRX%2FbJVL1qAVd6HeWZH78Upb%2BOo&X-Amz-Signature=481d2863494e54239f329694803438f05c4a02e6769d0eda01d21dd8d992bded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WKFVE4J%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiRyewTbyG0%2FsV83jeId62YG4bHPOyaIzmDJk34ZmbFAIgPUgxHy9tkKlCUsqfd5sbLv7RVJSnfVePIYdWz9YWhboqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpvXin9wyxIZpYRQCrcA1puZUfUySDJxx3ej80SsLxxS0YLxAY45t9PgqSOEPEMP65YFdg7S%2Bl6145Md7s6dNJ1dTj0S%2BGa%2FkAaTDTUVWXnnxU78lvg5YqIksvioxlXrRfkohQPY9R%2F%2BA4Qai2FJzIbtmcApKfS1f2tV7gr1Fbey2sE2nNv4b2ux5M5f2fz3778JQmuWowpDFlc1%2BrTrTVZd33n%2FiWZhcy6nR%2BV3XuwaDA56aKQODQGaJe6pQ1UQTqNMJngi8kJ7iFl949Z39sFLOdS8CMOJ%2FdiZ6kuY1CxtnXMMl5MIIck2lSFDqvpmUNvd169XybYXkIzQihbq3Pln3yppGfCVMzjcPcqTy91O3ZCiTiPW3TTt%2BfdEmiotnAw%2BxbM%2F3pqy3WBpMR6HYhQxMiVYK7e5SYghm8w47kGRTUHqjrCbhP%2FCg3Jl91%2FpEJyv%2FGI09Mj9hRfIqBZU2TqFWUZXs3LtnTs56P1XIqk0Q%2FQNZHFv4s2hE0qFaPy4Q6vT85qHIyJv0srKnfR5L3ewlywGeLv4Hm2vmiSBvmCXy%2FdKvgrgmBqrz7gHmzz0VKKJd9K1cESX%2F8czY%2F%2BW12Cyc%2FCPZoIyiaL7%2FyarMk0Bdr2ODH8tzjK%2BQhTrmRTdyLm5LoSP2G00aW9MOehz8IGOqUBx3LCPk2kTb186tcyc1u3rwcpCUZFKJqCeWrpvT9UFvzfbnkvyMVJbcwaZJSDXNFZSv5NzaH1DMtoX3ky%2Blkz%2BCK9slPz9DDtRTmej1orNw%2BtjZT8hkTd8Y3BUrDsuHFw8OEl4MriC6QkNzHj87FiZUYnshc0JSyVQIJyd1WW0MmpQverPgK6a%2BaU0yMztV5v%2FqRX%2FbJVL1qAVd6HeWZH78Upb%2BOo&X-Amz-Signature=77683179db0387a3d25a21c2e24f1b43d4c794a3a44e3ee9e01a4dbb7813fcb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WKFVE4J%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiRyewTbyG0%2FsV83jeId62YG4bHPOyaIzmDJk34ZmbFAIgPUgxHy9tkKlCUsqfd5sbLv7RVJSnfVePIYdWz9YWhboqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpvXin9wyxIZpYRQCrcA1puZUfUySDJxx3ej80SsLxxS0YLxAY45t9PgqSOEPEMP65YFdg7S%2Bl6145Md7s6dNJ1dTj0S%2BGa%2FkAaTDTUVWXnnxU78lvg5YqIksvioxlXrRfkohQPY9R%2F%2BA4Qai2FJzIbtmcApKfS1f2tV7gr1Fbey2sE2nNv4b2ux5M5f2fz3778JQmuWowpDFlc1%2BrTrTVZd33n%2FiWZhcy6nR%2BV3XuwaDA56aKQODQGaJe6pQ1UQTqNMJngi8kJ7iFl949Z39sFLOdS8CMOJ%2FdiZ6kuY1CxtnXMMl5MIIck2lSFDqvpmUNvd169XybYXkIzQihbq3Pln3yppGfCVMzjcPcqTy91O3ZCiTiPW3TTt%2BfdEmiotnAw%2BxbM%2F3pqy3WBpMR6HYhQxMiVYK7e5SYghm8w47kGRTUHqjrCbhP%2FCg3Jl91%2FpEJyv%2FGI09Mj9hRfIqBZU2TqFWUZXs3LtnTs56P1XIqk0Q%2FQNZHFv4s2hE0qFaPy4Q6vT85qHIyJv0srKnfR5L3ewlywGeLv4Hm2vmiSBvmCXy%2FdKvgrgmBqrz7gHmzz0VKKJd9K1cESX%2F8czY%2F%2BW12Cyc%2FCPZoIyiaL7%2FyarMk0Bdr2ODH8tzjK%2BQhTrmRTdyLm5LoSP2G00aW9MOehz8IGOqUBx3LCPk2kTb186tcyc1u3rwcpCUZFKJqCeWrpvT9UFvzfbnkvyMVJbcwaZJSDXNFZSv5NzaH1DMtoX3ky%2Blkz%2BCK9slPz9DDtRTmej1orNw%2BtjZT8hkTd8Y3BUrDsuHFw8OEl4MriC6QkNzHj87FiZUYnshc0JSyVQIJyd1WW0MmpQverPgK6a%2BaU0yMztV5v%2FqRX%2FbJVL1qAVd6HeWZH78Upb%2BOo&X-Amz-Signature=a42c373c437dec4df03269377771d06c5148e788055f436edae19c79379867b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WKFVE4J%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiRyewTbyG0%2FsV83jeId62YG4bHPOyaIzmDJk34ZmbFAIgPUgxHy9tkKlCUsqfd5sbLv7RVJSnfVePIYdWz9YWhboqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpvXin9wyxIZpYRQCrcA1puZUfUySDJxx3ej80SsLxxS0YLxAY45t9PgqSOEPEMP65YFdg7S%2Bl6145Md7s6dNJ1dTj0S%2BGa%2FkAaTDTUVWXnnxU78lvg5YqIksvioxlXrRfkohQPY9R%2F%2BA4Qai2FJzIbtmcApKfS1f2tV7gr1Fbey2sE2nNv4b2ux5M5f2fz3778JQmuWowpDFlc1%2BrTrTVZd33n%2FiWZhcy6nR%2BV3XuwaDA56aKQODQGaJe6pQ1UQTqNMJngi8kJ7iFl949Z39sFLOdS8CMOJ%2FdiZ6kuY1CxtnXMMl5MIIck2lSFDqvpmUNvd169XybYXkIzQihbq3Pln3yppGfCVMzjcPcqTy91O3ZCiTiPW3TTt%2BfdEmiotnAw%2BxbM%2F3pqy3WBpMR6HYhQxMiVYK7e5SYghm8w47kGRTUHqjrCbhP%2FCg3Jl91%2FpEJyv%2FGI09Mj9hRfIqBZU2TqFWUZXs3LtnTs56P1XIqk0Q%2FQNZHFv4s2hE0qFaPy4Q6vT85qHIyJv0srKnfR5L3ewlywGeLv4Hm2vmiSBvmCXy%2FdKvgrgmBqrz7gHmzz0VKKJd9K1cESX%2F8czY%2F%2BW12Cyc%2FCPZoIyiaL7%2FyarMk0Bdr2ODH8tzjK%2BQhTrmRTdyLm5LoSP2G00aW9MOehz8IGOqUBx3LCPk2kTb186tcyc1u3rwcpCUZFKJqCeWrpvT9UFvzfbnkvyMVJbcwaZJSDXNFZSv5NzaH1DMtoX3ky%2Blkz%2BCK9slPz9DDtRTmej1orNw%2BtjZT8hkTd8Y3BUrDsuHFw8OEl4MriC6QkNzHj87FiZUYnshc0JSyVQIJyd1WW0MmpQverPgK6a%2BaU0yMztV5v%2FqRX%2FbJVL1qAVd6HeWZH78Upb%2BOo&X-Amz-Signature=de5945636738108469392c6f254ae5f1cce40b1617395f10f65fd93c507e10af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WKFVE4J%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiRyewTbyG0%2FsV83jeId62YG4bHPOyaIzmDJk34ZmbFAIgPUgxHy9tkKlCUsqfd5sbLv7RVJSnfVePIYdWz9YWhboqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpvXin9wyxIZpYRQCrcA1puZUfUySDJxx3ej80SsLxxS0YLxAY45t9PgqSOEPEMP65YFdg7S%2Bl6145Md7s6dNJ1dTj0S%2BGa%2FkAaTDTUVWXnnxU78lvg5YqIksvioxlXrRfkohQPY9R%2F%2BA4Qai2FJzIbtmcApKfS1f2tV7gr1Fbey2sE2nNv4b2ux5M5f2fz3778JQmuWowpDFlc1%2BrTrTVZd33n%2FiWZhcy6nR%2BV3XuwaDA56aKQODQGaJe6pQ1UQTqNMJngi8kJ7iFl949Z39sFLOdS8CMOJ%2FdiZ6kuY1CxtnXMMl5MIIck2lSFDqvpmUNvd169XybYXkIzQihbq3Pln3yppGfCVMzjcPcqTy91O3ZCiTiPW3TTt%2BfdEmiotnAw%2BxbM%2F3pqy3WBpMR6HYhQxMiVYK7e5SYghm8w47kGRTUHqjrCbhP%2FCg3Jl91%2FpEJyv%2FGI09Mj9hRfIqBZU2TqFWUZXs3LtnTs56P1XIqk0Q%2FQNZHFv4s2hE0qFaPy4Q6vT85qHIyJv0srKnfR5L3ewlywGeLv4Hm2vmiSBvmCXy%2FdKvgrgmBqrz7gHmzz0VKKJd9K1cESX%2F8czY%2F%2BW12Cyc%2FCPZoIyiaL7%2FyarMk0Bdr2ODH8tzjK%2BQhTrmRTdyLm5LoSP2G00aW9MOehz8IGOqUBx3LCPk2kTb186tcyc1u3rwcpCUZFKJqCeWrpvT9UFvzfbnkvyMVJbcwaZJSDXNFZSv5NzaH1DMtoX3ky%2Blkz%2BCK9slPz9DDtRTmej1orNw%2BtjZT8hkTd8Y3BUrDsuHFw8OEl4MriC6QkNzHj87FiZUYnshc0JSyVQIJyd1WW0MmpQverPgK6a%2BaU0yMztV5v%2FqRX%2FbJVL1qAVd6HeWZH78Upb%2BOo&X-Amz-Signature=174e52c5b7f11a338b580efa16e98631fafa0ded7b2ec699cf28a86d5c1ae6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
