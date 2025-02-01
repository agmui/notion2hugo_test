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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PY22HO7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuynNIfAUrg52WsnHgKs9nxCRzYkEF1bIdjL0IoiHcxAiEA%2F4kSAnuLcT8OZ0xrb2aJ8XkkHWyffiZpd0xOd8j5ebUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOVdmarXjM164VyYyrcA3kGbKX8XsoB8KQ%2B%2FmfJAKOgW%2BOucjsaG72wz2Q8FqK2AuwJtR17anVMySMB44H7pz7dF72fgqdXdfB%2B0r28j9BQzSSu8wWK0%2FVBf%2F9pMPn3XiqY7QQJBm%2Bgy2VPIXUGOrfW%2Bem8Vs0nGJmWSqKmqhSLp79xcWvSiCBgylLc9EMIgMCCcXlakdxBh7zavKt1EfwoZYnOpiVpojq0RQqIFl%2FYegYGGU%2BXsbEEzIjXtUHcj9QfGQTamEnAuYf8GtaNMuydMHHJVxLTt8A0ubqtNulQtmaxz%2FStPYAoI8J5SQ1Okm8JybsL4KVYuB2e7z2I3NyX08%2BQdlsb4JorA01Hia7fTqEMX%2Byz7g5DnpVeLRtdGEa6cTIU4sN5fcXHixS%2FJ9ZSLALHk4qbzx0tIxICAk0BSSxRDx9VtlIKrFMIuVZ4ZQICrtgIMHmV1l7Z6OIL6CZEMczkWZ%2FzAjf6GrzMGPgPfSZb2WBgK7Z7QzMYrv%2FsOzFu0n3m7fOTPQ%2Bvu7yQtl34i%2FpZJHBOe0zl7qd74lCZg7pq4w1RuTy3Ai9XaqcU80W%2FT%2BO4PLuEgKCWVSkS3Xwy1Ls2IXxZt8SsFGdrGpdlHhC9espoWpYYCB%2FCx7RpihazCzN2efV7uekPMPvC9rwGOqUBOYJ5CF78yFOUm1r2OSvlpn3PzP2xiT07Oge4BTFasRf7Py%2F%2B9p%2BZls3XGQcJxhe5fZAsqE8o4xZItwZ3%2BNJrzM2JcS4MPxFpHcUmx%2BCkcfXHrZVXDhr6HHVtB53BDeg2uQu%2FoxYjsR0QUQwQVfGk9N7m2UaxUfoFb9p%2F%2BOZsLa4wb%2F6%2FCz6BKBWCm9fGalHIE9AXTWKa0RhkrSZNkltqi50rhf4F&X-Amz-Signature=415cc160dc6947ab5a1047e37eabf79afa2d6414a7eae1625c3fc9f91ad16672&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PY22HO7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuynNIfAUrg52WsnHgKs9nxCRzYkEF1bIdjL0IoiHcxAiEA%2F4kSAnuLcT8OZ0xrb2aJ8XkkHWyffiZpd0xOd8j5ebUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOVdmarXjM164VyYyrcA3kGbKX8XsoB8KQ%2B%2FmfJAKOgW%2BOucjsaG72wz2Q8FqK2AuwJtR17anVMySMB44H7pz7dF72fgqdXdfB%2B0r28j9BQzSSu8wWK0%2FVBf%2F9pMPn3XiqY7QQJBm%2Bgy2VPIXUGOrfW%2Bem8Vs0nGJmWSqKmqhSLp79xcWvSiCBgylLc9EMIgMCCcXlakdxBh7zavKt1EfwoZYnOpiVpojq0RQqIFl%2FYegYGGU%2BXsbEEzIjXtUHcj9QfGQTamEnAuYf8GtaNMuydMHHJVxLTt8A0ubqtNulQtmaxz%2FStPYAoI8J5SQ1Okm8JybsL4KVYuB2e7z2I3NyX08%2BQdlsb4JorA01Hia7fTqEMX%2Byz7g5DnpVeLRtdGEa6cTIU4sN5fcXHixS%2FJ9ZSLALHk4qbzx0tIxICAk0BSSxRDx9VtlIKrFMIuVZ4ZQICrtgIMHmV1l7Z6OIL6CZEMczkWZ%2FzAjf6GrzMGPgPfSZb2WBgK7Z7QzMYrv%2FsOzFu0n3m7fOTPQ%2Bvu7yQtl34i%2FpZJHBOe0zl7qd74lCZg7pq4w1RuTy3Ai9XaqcU80W%2FT%2BO4PLuEgKCWVSkS3Xwy1Ls2IXxZt8SsFGdrGpdlHhC9espoWpYYCB%2FCx7RpihazCzN2efV7uekPMPvC9rwGOqUBOYJ5CF78yFOUm1r2OSvlpn3PzP2xiT07Oge4BTFasRf7Py%2F%2B9p%2BZls3XGQcJxhe5fZAsqE8o4xZItwZ3%2BNJrzM2JcS4MPxFpHcUmx%2BCkcfXHrZVXDhr6HHVtB53BDeg2uQu%2FoxYjsR0QUQwQVfGk9N7m2UaxUfoFb9p%2F%2BOZsLa4wb%2F6%2FCz6BKBWCm9fGalHIE9AXTWKa0RhkrSZNkltqi50rhf4F&X-Amz-Signature=5b2f42844f7b2b912c16705839e8ace92bc1151813cc215e8f09c84fec3e7233&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PY22HO7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuynNIfAUrg52WsnHgKs9nxCRzYkEF1bIdjL0IoiHcxAiEA%2F4kSAnuLcT8OZ0xrb2aJ8XkkHWyffiZpd0xOd8j5ebUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOVdmarXjM164VyYyrcA3kGbKX8XsoB8KQ%2B%2FmfJAKOgW%2BOucjsaG72wz2Q8FqK2AuwJtR17anVMySMB44H7pz7dF72fgqdXdfB%2B0r28j9BQzSSu8wWK0%2FVBf%2F9pMPn3XiqY7QQJBm%2Bgy2VPIXUGOrfW%2Bem8Vs0nGJmWSqKmqhSLp79xcWvSiCBgylLc9EMIgMCCcXlakdxBh7zavKt1EfwoZYnOpiVpojq0RQqIFl%2FYegYGGU%2BXsbEEzIjXtUHcj9QfGQTamEnAuYf8GtaNMuydMHHJVxLTt8A0ubqtNulQtmaxz%2FStPYAoI8J5SQ1Okm8JybsL4KVYuB2e7z2I3NyX08%2BQdlsb4JorA01Hia7fTqEMX%2Byz7g5DnpVeLRtdGEa6cTIU4sN5fcXHixS%2FJ9ZSLALHk4qbzx0tIxICAk0BSSxRDx9VtlIKrFMIuVZ4ZQICrtgIMHmV1l7Z6OIL6CZEMczkWZ%2FzAjf6GrzMGPgPfSZb2WBgK7Z7QzMYrv%2FsOzFu0n3m7fOTPQ%2Bvu7yQtl34i%2FpZJHBOe0zl7qd74lCZg7pq4w1RuTy3Ai9XaqcU80W%2FT%2BO4PLuEgKCWVSkS3Xwy1Ls2IXxZt8SsFGdrGpdlHhC9espoWpYYCB%2FCx7RpihazCzN2efV7uekPMPvC9rwGOqUBOYJ5CF78yFOUm1r2OSvlpn3PzP2xiT07Oge4BTFasRf7Py%2F%2B9p%2BZls3XGQcJxhe5fZAsqE8o4xZItwZ3%2BNJrzM2JcS4MPxFpHcUmx%2BCkcfXHrZVXDhr6HHVtB53BDeg2uQu%2FoxYjsR0QUQwQVfGk9N7m2UaxUfoFb9p%2F%2BOZsLa4wb%2F6%2FCz6BKBWCm9fGalHIE9AXTWKa0RhkrSZNkltqi50rhf4F&X-Amz-Signature=07510f8c562f062734bc853c4890d9379d0e89053fffd085086114c5636cff9b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PY22HO7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuynNIfAUrg52WsnHgKs9nxCRzYkEF1bIdjL0IoiHcxAiEA%2F4kSAnuLcT8OZ0xrb2aJ8XkkHWyffiZpd0xOd8j5ebUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOVdmarXjM164VyYyrcA3kGbKX8XsoB8KQ%2B%2FmfJAKOgW%2BOucjsaG72wz2Q8FqK2AuwJtR17anVMySMB44H7pz7dF72fgqdXdfB%2B0r28j9BQzSSu8wWK0%2FVBf%2F9pMPn3XiqY7QQJBm%2Bgy2VPIXUGOrfW%2Bem8Vs0nGJmWSqKmqhSLp79xcWvSiCBgylLc9EMIgMCCcXlakdxBh7zavKt1EfwoZYnOpiVpojq0RQqIFl%2FYegYGGU%2BXsbEEzIjXtUHcj9QfGQTamEnAuYf8GtaNMuydMHHJVxLTt8A0ubqtNulQtmaxz%2FStPYAoI8J5SQ1Okm8JybsL4KVYuB2e7z2I3NyX08%2BQdlsb4JorA01Hia7fTqEMX%2Byz7g5DnpVeLRtdGEa6cTIU4sN5fcXHixS%2FJ9ZSLALHk4qbzx0tIxICAk0BSSxRDx9VtlIKrFMIuVZ4ZQICrtgIMHmV1l7Z6OIL6CZEMczkWZ%2FzAjf6GrzMGPgPfSZb2WBgK7Z7QzMYrv%2FsOzFu0n3m7fOTPQ%2Bvu7yQtl34i%2FpZJHBOe0zl7qd74lCZg7pq4w1RuTy3Ai9XaqcU80W%2FT%2BO4PLuEgKCWVSkS3Xwy1Ls2IXxZt8SsFGdrGpdlHhC9espoWpYYCB%2FCx7RpihazCzN2efV7uekPMPvC9rwGOqUBOYJ5CF78yFOUm1r2OSvlpn3PzP2xiT07Oge4BTFasRf7Py%2F%2B9p%2BZls3XGQcJxhe5fZAsqE8o4xZItwZ3%2BNJrzM2JcS4MPxFpHcUmx%2BCkcfXHrZVXDhr6HHVtB53BDeg2uQu%2FoxYjsR0QUQwQVfGk9N7m2UaxUfoFb9p%2F%2BOZsLa4wb%2F6%2FCz6BKBWCm9fGalHIE9AXTWKa0RhkrSZNkltqi50rhf4F&X-Amz-Signature=30a8da03d0a6a74f19c88ca52b50396814a28d0420f6d8e9ea336a73dfead284&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PY22HO7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuynNIfAUrg52WsnHgKs9nxCRzYkEF1bIdjL0IoiHcxAiEA%2F4kSAnuLcT8OZ0xrb2aJ8XkkHWyffiZpd0xOd8j5ebUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOVdmarXjM164VyYyrcA3kGbKX8XsoB8KQ%2B%2FmfJAKOgW%2BOucjsaG72wz2Q8FqK2AuwJtR17anVMySMB44H7pz7dF72fgqdXdfB%2B0r28j9BQzSSu8wWK0%2FVBf%2F9pMPn3XiqY7QQJBm%2Bgy2VPIXUGOrfW%2Bem8Vs0nGJmWSqKmqhSLp79xcWvSiCBgylLc9EMIgMCCcXlakdxBh7zavKt1EfwoZYnOpiVpojq0RQqIFl%2FYegYGGU%2BXsbEEzIjXtUHcj9QfGQTamEnAuYf8GtaNMuydMHHJVxLTt8A0ubqtNulQtmaxz%2FStPYAoI8J5SQ1Okm8JybsL4KVYuB2e7z2I3NyX08%2BQdlsb4JorA01Hia7fTqEMX%2Byz7g5DnpVeLRtdGEa6cTIU4sN5fcXHixS%2FJ9ZSLALHk4qbzx0tIxICAk0BSSxRDx9VtlIKrFMIuVZ4ZQICrtgIMHmV1l7Z6OIL6CZEMczkWZ%2FzAjf6GrzMGPgPfSZb2WBgK7Z7QzMYrv%2FsOzFu0n3m7fOTPQ%2Bvu7yQtl34i%2FpZJHBOe0zl7qd74lCZg7pq4w1RuTy3Ai9XaqcU80W%2FT%2BO4PLuEgKCWVSkS3Xwy1Ls2IXxZt8SsFGdrGpdlHhC9espoWpYYCB%2FCx7RpihazCzN2efV7uekPMPvC9rwGOqUBOYJ5CF78yFOUm1r2OSvlpn3PzP2xiT07Oge4BTFasRf7Py%2F%2B9p%2BZls3XGQcJxhe5fZAsqE8o4xZItwZ3%2BNJrzM2JcS4MPxFpHcUmx%2BCkcfXHrZVXDhr6HHVtB53BDeg2uQu%2FoxYjsR0QUQwQVfGk9N7m2UaxUfoFb9p%2F%2BOZsLa4wb%2F6%2FCz6BKBWCm9fGalHIE9AXTWKa0RhkrSZNkltqi50rhf4F&X-Amz-Signature=e89152cbc9f9a3b3da3255b70a55eb2b79688dd6d4d4864135b4fd1ecb7a73b4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PY22HO7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuynNIfAUrg52WsnHgKs9nxCRzYkEF1bIdjL0IoiHcxAiEA%2F4kSAnuLcT8OZ0xrb2aJ8XkkHWyffiZpd0xOd8j5ebUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOVdmarXjM164VyYyrcA3kGbKX8XsoB8KQ%2B%2FmfJAKOgW%2BOucjsaG72wz2Q8FqK2AuwJtR17anVMySMB44H7pz7dF72fgqdXdfB%2B0r28j9BQzSSu8wWK0%2FVBf%2F9pMPn3XiqY7QQJBm%2Bgy2VPIXUGOrfW%2Bem8Vs0nGJmWSqKmqhSLp79xcWvSiCBgylLc9EMIgMCCcXlakdxBh7zavKt1EfwoZYnOpiVpojq0RQqIFl%2FYegYGGU%2BXsbEEzIjXtUHcj9QfGQTamEnAuYf8GtaNMuydMHHJVxLTt8A0ubqtNulQtmaxz%2FStPYAoI8J5SQ1Okm8JybsL4KVYuB2e7z2I3NyX08%2BQdlsb4JorA01Hia7fTqEMX%2Byz7g5DnpVeLRtdGEa6cTIU4sN5fcXHixS%2FJ9ZSLALHk4qbzx0tIxICAk0BSSxRDx9VtlIKrFMIuVZ4ZQICrtgIMHmV1l7Z6OIL6CZEMczkWZ%2FzAjf6GrzMGPgPfSZb2WBgK7Z7QzMYrv%2FsOzFu0n3m7fOTPQ%2Bvu7yQtl34i%2FpZJHBOe0zl7qd74lCZg7pq4w1RuTy3Ai9XaqcU80W%2FT%2BO4PLuEgKCWVSkS3Xwy1Ls2IXxZt8SsFGdrGpdlHhC9espoWpYYCB%2FCx7RpihazCzN2efV7uekPMPvC9rwGOqUBOYJ5CF78yFOUm1r2OSvlpn3PzP2xiT07Oge4BTFasRf7Py%2F%2B9p%2BZls3XGQcJxhe5fZAsqE8o4xZItwZ3%2BNJrzM2JcS4MPxFpHcUmx%2BCkcfXHrZVXDhr6HHVtB53BDeg2uQu%2FoxYjsR0QUQwQVfGk9N7m2UaxUfoFb9p%2F%2BOZsLa4wb%2F6%2FCz6BKBWCm9fGalHIE9AXTWKa0RhkrSZNkltqi50rhf4F&X-Amz-Signature=78c55fedfec77cb899f9713e8d4252e4ed67bd82e32e6c3006e8bdfa336af4e0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PY22HO7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuynNIfAUrg52WsnHgKs9nxCRzYkEF1bIdjL0IoiHcxAiEA%2F4kSAnuLcT8OZ0xrb2aJ8XkkHWyffiZpd0xOd8j5ebUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOVdmarXjM164VyYyrcA3kGbKX8XsoB8KQ%2B%2FmfJAKOgW%2BOucjsaG72wz2Q8FqK2AuwJtR17anVMySMB44H7pz7dF72fgqdXdfB%2B0r28j9BQzSSu8wWK0%2FVBf%2F9pMPn3XiqY7QQJBm%2Bgy2VPIXUGOrfW%2Bem8Vs0nGJmWSqKmqhSLp79xcWvSiCBgylLc9EMIgMCCcXlakdxBh7zavKt1EfwoZYnOpiVpojq0RQqIFl%2FYegYGGU%2BXsbEEzIjXtUHcj9QfGQTamEnAuYf8GtaNMuydMHHJVxLTt8A0ubqtNulQtmaxz%2FStPYAoI8J5SQ1Okm8JybsL4KVYuB2e7z2I3NyX08%2BQdlsb4JorA01Hia7fTqEMX%2Byz7g5DnpVeLRtdGEa6cTIU4sN5fcXHixS%2FJ9ZSLALHk4qbzx0tIxICAk0BSSxRDx9VtlIKrFMIuVZ4ZQICrtgIMHmV1l7Z6OIL6CZEMczkWZ%2FzAjf6GrzMGPgPfSZb2WBgK7Z7QzMYrv%2FsOzFu0n3m7fOTPQ%2Bvu7yQtl34i%2FpZJHBOe0zl7qd74lCZg7pq4w1RuTy3Ai9XaqcU80W%2FT%2BO4PLuEgKCWVSkS3Xwy1Ls2IXxZt8SsFGdrGpdlHhC9espoWpYYCB%2FCx7RpihazCzN2efV7uekPMPvC9rwGOqUBOYJ5CF78yFOUm1r2OSvlpn3PzP2xiT07Oge4BTFasRf7Py%2F%2B9p%2BZls3XGQcJxhe5fZAsqE8o4xZItwZ3%2BNJrzM2JcS4MPxFpHcUmx%2BCkcfXHrZVXDhr6HHVtB53BDeg2uQu%2FoxYjsR0QUQwQVfGk9N7m2UaxUfoFb9p%2F%2BOZsLa4wb%2F6%2FCz6BKBWCm9fGalHIE9AXTWKa0RhkrSZNkltqi50rhf4F&X-Amz-Signature=b88d2ba26bbcbfc69ee958bff280e3dcbd982e72e2ba4bfe9e596557479bb943&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
