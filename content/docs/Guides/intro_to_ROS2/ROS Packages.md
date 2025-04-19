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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52R457S%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIG0W56obyqsATOScWa5FIFtMuMcAeljj1juHtJTaQ7NAAiBAi9yI7Zc4MK%2BliGpOphYVaQaKFIdR9xg7s6CVJrEkKiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj7j%2FGSkJWLeVpJKiKtwDVLHTL0g0q6xqzoreAIcNU631nBh4S8U0pBXIsfbSdBmJWfVEP6EsxEkaZxbf0fJoyW4IEaXF0sVPBguLw%2F5pIThEz9brsWtU%2FncWRLjXsfjPehsmCft9CTyub%2BPFT%2Fb%2FEIkUTEXr5PvvC5nSqXEBYEOUahWmABdERr7mCefOuV9MYYLy8h7ZQBX0Wy9m2Z%2B8MPXiTdXy3Vq18TnY7VjQ1Enskgk%2BpiKK8kykNplCPRMpfcAFj9XACWLsnG6mCu5LIr4dLGOKy96hhL%2FD6edCAvDXWc%2FvAhcE%2F0V8Tlo%2FtBpuLngAvyvDPmqOmMpzXHOrzCwbB5zIs326iAp0kfxgIz4aDHFUgz%2Bend7SRIp62LkfKkpDTJeUxWuX9Au7ouC2mNJNUBX9Z0JUux4pjMv%2FM1lyCtfDV2teD9SSqWZ2NvxH9YrYOJ553J3b3aEZ5K%2FBguRbg7YTjlcDIsjVFm%2Bok4ogr7%2Fc0SQBpfiM6%2BSt07JuXf5HzyXvLIBtT9pM8HCcfaTbQ9JIJDBvozXQFHz7XUcHB0DLg9qO4UuubSsttfTfclzCaYYxmEVVfeAjI7hvjckr2WLIalTZNW3j1CWxhofB4a9hmofVLSdCgTs7PpyNOChRB%2F91Ljrig%2FEw0ZyOwAY6pgGCt%2BaV8trXm%2FwJxcbSc1SS1fRTVxsZeczVhvU%2BBpzPJNvFdXNNjt6eiSSE8T%2BvJaL%2Fa410C8nqxUdIiG0z0z79Ncm9xWJJn39K29V0QcE%2BSnUpf70mIILZMt3%2B6aH5bYHldqQAXV3YBINWz1HmqeVlHQ5CZh3XU2elgsGvCmJCTaEaagKJaqvqBvnYR3wQtGTiJiN2EPBmMNN2KgN6faUA7uLCULfE&X-Amz-Signature=9dbf7680912ba4c9de0d624a48583abd86022e0cc4a16b5397f80c9804e90cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52R457S%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIG0W56obyqsATOScWa5FIFtMuMcAeljj1juHtJTaQ7NAAiBAi9yI7Zc4MK%2BliGpOphYVaQaKFIdR9xg7s6CVJrEkKiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj7j%2FGSkJWLeVpJKiKtwDVLHTL0g0q6xqzoreAIcNU631nBh4S8U0pBXIsfbSdBmJWfVEP6EsxEkaZxbf0fJoyW4IEaXF0sVPBguLw%2F5pIThEz9brsWtU%2FncWRLjXsfjPehsmCft9CTyub%2BPFT%2Fb%2FEIkUTEXr5PvvC5nSqXEBYEOUahWmABdERr7mCefOuV9MYYLy8h7ZQBX0Wy9m2Z%2B8MPXiTdXy3Vq18TnY7VjQ1Enskgk%2BpiKK8kykNplCPRMpfcAFj9XACWLsnG6mCu5LIr4dLGOKy96hhL%2FD6edCAvDXWc%2FvAhcE%2F0V8Tlo%2FtBpuLngAvyvDPmqOmMpzXHOrzCwbB5zIs326iAp0kfxgIz4aDHFUgz%2Bend7SRIp62LkfKkpDTJeUxWuX9Au7ouC2mNJNUBX9Z0JUux4pjMv%2FM1lyCtfDV2teD9SSqWZ2NvxH9YrYOJ553J3b3aEZ5K%2FBguRbg7YTjlcDIsjVFm%2Bok4ogr7%2Fc0SQBpfiM6%2BSt07JuXf5HzyXvLIBtT9pM8HCcfaTbQ9JIJDBvozXQFHz7XUcHB0DLg9qO4UuubSsttfTfclzCaYYxmEVVfeAjI7hvjckr2WLIalTZNW3j1CWxhofB4a9hmofVLSdCgTs7PpyNOChRB%2F91Ljrig%2FEw0ZyOwAY6pgGCt%2BaV8trXm%2FwJxcbSc1SS1fRTVxsZeczVhvU%2BBpzPJNvFdXNNjt6eiSSE8T%2BvJaL%2Fa410C8nqxUdIiG0z0z79Ncm9xWJJn39K29V0QcE%2BSnUpf70mIILZMt3%2B6aH5bYHldqQAXV3YBINWz1HmqeVlHQ5CZh3XU2elgsGvCmJCTaEaagKJaqvqBvnYR3wQtGTiJiN2EPBmMNN2KgN6faUA7uLCULfE&X-Amz-Signature=bb45bb72c8a8f64e270872d335186fe1b34cbc83e42285972b56aa51991f9536&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52R457S%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIG0W56obyqsATOScWa5FIFtMuMcAeljj1juHtJTaQ7NAAiBAi9yI7Zc4MK%2BliGpOphYVaQaKFIdR9xg7s6CVJrEkKiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj7j%2FGSkJWLeVpJKiKtwDVLHTL0g0q6xqzoreAIcNU631nBh4S8U0pBXIsfbSdBmJWfVEP6EsxEkaZxbf0fJoyW4IEaXF0sVPBguLw%2F5pIThEz9brsWtU%2FncWRLjXsfjPehsmCft9CTyub%2BPFT%2Fb%2FEIkUTEXr5PvvC5nSqXEBYEOUahWmABdERr7mCefOuV9MYYLy8h7ZQBX0Wy9m2Z%2B8MPXiTdXy3Vq18TnY7VjQ1Enskgk%2BpiKK8kykNplCPRMpfcAFj9XACWLsnG6mCu5LIr4dLGOKy96hhL%2FD6edCAvDXWc%2FvAhcE%2F0V8Tlo%2FtBpuLngAvyvDPmqOmMpzXHOrzCwbB5zIs326iAp0kfxgIz4aDHFUgz%2Bend7SRIp62LkfKkpDTJeUxWuX9Au7ouC2mNJNUBX9Z0JUux4pjMv%2FM1lyCtfDV2teD9SSqWZ2NvxH9YrYOJ553J3b3aEZ5K%2FBguRbg7YTjlcDIsjVFm%2Bok4ogr7%2Fc0SQBpfiM6%2BSt07JuXf5HzyXvLIBtT9pM8HCcfaTbQ9JIJDBvozXQFHz7XUcHB0DLg9qO4UuubSsttfTfclzCaYYxmEVVfeAjI7hvjckr2WLIalTZNW3j1CWxhofB4a9hmofVLSdCgTs7PpyNOChRB%2F91Ljrig%2FEw0ZyOwAY6pgGCt%2BaV8trXm%2FwJxcbSc1SS1fRTVxsZeczVhvU%2BBpzPJNvFdXNNjt6eiSSE8T%2BvJaL%2Fa410C8nqxUdIiG0z0z79Ncm9xWJJn39K29V0QcE%2BSnUpf70mIILZMt3%2B6aH5bYHldqQAXV3YBINWz1HmqeVlHQ5CZh3XU2elgsGvCmJCTaEaagKJaqvqBvnYR3wQtGTiJiN2EPBmMNN2KgN6faUA7uLCULfE&X-Amz-Signature=2efaef43379b08fe86834ed41a7ade9b3abe4964b25fd94d9b0871e9c0643777&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52R457S%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIG0W56obyqsATOScWa5FIFtMuMcAeljj1juHtJTaQ7NAAiBAi9yI7Zc4MK%2BliGpOphYVaQaKFIdR9xg7s6CVJrEkKiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj7j%2FGSkJWLeVpJKiKtwDVLHTL0g0q6xqzoreAIcNU631nBh4S8U0pBXIsfbSdBmJWfVEP6EsxEkaZxbf0fJoyW4IEaXF0sVPBguLw%2F5pIThEz9brsWtU%2FncWRLjXsfjPehsmCft9CTyub%2BPFT%2Fb%2FEIkUTEXr5PvvC5nSqXEBYEOUahWmABdERr7mCefOuV9MYYLy8h7ZQBX0Wy9m2Z%2B8MPXiTdXy3Vq18TnY7VjQ1Enskgk%2BpiKK8kykNplCPRMpfcAFj9XACWLsnG6mCu5LIr4dLGOKy96hhL%2FD6edCAvDXWc%2FvAhcE%2F0V8Tlo%2FtBpuLngAvyvDPmqOmMpzXHOrzCwbB5zIs326iAp0kfxgIz4aDHFUgz%2Bend7SRIp62LkfKkpDTJeUxWuX9Au7ouC2mNJNUBX9Z0JUux4pjMv%2FM1lyCtfDV2teD9SSqWZ2NvxH9YrYOJ553J3b3aEZ5K%2FBguRbg7YTjlcDIsjVFm%2Bok4ogr7%2Fc0SQBpfiM6%2BSt07JuXf5HzyXvLIBtT9pM8HCcfaTbQ9JIJDBvozXQFHz7XUcHB0DLg9qO4UuubSsttfTfclzCaYYxmEVVfeAjI7hvjckr2WLIalTZNW3j1CWxhofB4a9hmofVLSdCgTs7PpyNOChRB%2F91Ljrig%2FEw0ZyOwAY6pgGCt%2BaV8trXm%2FwJxcbSc1SS1fRTVxsZeczVhvU%2BBpzPJNvFdXNNjt6eiSSE8T%2BvJaL%2Fa410C8nqxUdIiG0z0z79Ncm9xWJJn39K29V0QcE%2BSnUpf70mIILZMt3%2B6aH5bYHldqQAXV3YBINWz1HmqeVlHQ5CZh3XU2elgsGvCmJCTaEaagKJaqvqBvnYR3wQtGTiJiN2EPBmMNN2KgN6faUA7uLCULfE&X-Amz-Signature=88238f39a4479368b51888239219062787c91b217d1df6d3432e6851f0f05bc5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52R457S%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIG0W56obyqsATOScWa5FIFtMuMcAeljj1juHtJTaQ7NAAiBAi9yI7Zc4MK%2BliGpOphYVaQaKFIdR9xg7s6CVJrEkKiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj7j%2FGSkJWLeVpJKiKtwDVLHTL0g0q6xqzoreAIcNU631nBh4S8U0pBXIsfbSdBmJWfVEP6EsxEkaZxbf0fJoyW4IEaXF0sVPBguLw%2F5pIThEz9brsWtU%2FncWRLjXsfjPehsmCft9CTyub%2BPFT%2Fb%2FEIkUTEXr5PvvC5nSqXEBYEOUahWmABdERr7mCefOuV9MYYLy8h7ZQBX0Wy9m2Z%2B8MPXiTdXy3Vq18TnY7VjQ1Enskgk%2BpiKK8kykNplCPRMpfcAFj9XACWLsnG6mCu5LIr4dLGOKy96hhL%2FD6edCAvDXWc%2FvAhcE%2F0V8Tlo%2FtBpuLngAvyvDPmqOmMpzXHOrzCwbB5zIs326iAp0kfxgIz4aDHFUgz%2Bend7SRIp62LkfKkpDTJeUxWuX9Au7ouC2mNJNUBX9Z0JUux4pjMv%2FM1lyCtfDV2teD9SSqWZ2NvxH9YrYOJ553J3b3aEZ5K%2FBguRbg7YTjlcDIsjVFm%2Bok4ogr7%2Fc0SQBpfiM6%2BSt07JuXf5HzyXvLIBtT9pM8HCcfaTbQ9JIJDBvozXQFHz7XUcHB0DLg9qO4UuubSsttfTfclzCaYYxmEVVfeAjI7hvjckr2WLIalTZNW3j1CWxhofB4a9hmofVLSdCgTs7PpyNOChRB%2F91Ljrig%2FEw0ZyOwAY6pgGCt%2BaV8trXm%2FwJxcbSc1SS1fRTVxsZeczVhvU%2BBpzPJNvFdXNNjt6eiSSE8T%2BvJaL%2Fa410C8nqxUdIiG0z0z79Ncm9xWJJn39K29V0QcE%2BSnUpf70mIILZMt3%2B6aH5bYHldqQAXV3YBINWz1HmqeVlHQ5CZh3XU2elgsGvCmJCTaEaagKJaqvqBvnYR3wQtGTiJiN2EPBmMNN2KgN6faUA7uLCULfE&X-Amz-Signature=affc19dba98438d852802f8f2b2ce3fa4fd37e95fcb24cbfdff64fe022b2213c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52R457S%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIG0W56obyqsATOScWa5FIFtMuMcAeljj1juHtJTaQ7NAAiBAi9yI7Zc4MK%2BliGpOphYVaQaKFIdR9xg7s6CVJrEkKiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj7j%2FGSkJWLeVpJKiKtwDVLHTL0g0q6xqzoreAIcNU631nBh4S8U0pBXIsfbSdBmJWfVEP6EsxEkaZxbf0fJoyW4IEaXF0sVPBguLw%2F5pIThEz9brsWtU%2FncWRLjXsfjPehsmCft9CTyub%2BPFT%2Fb%2FEIkUTEXr5PvvC5nSqXEBYEOUahWmABdERr7mCefOuV9MYYLy8h7ZQBX0Wy9m2Z%2B8MPXiTdXy3Vq18TnY7VjQ1Enskgk%2BpiKK8kykNplCPRMpfcAFj9XACWLsnG6mCu5LIr4dLGOKy96hhL%2FD6edCAvDXWc%2FvAhcE%2F0V8Tlo%2FtBpuLngAvyvDPmqOmMpzXHOrzCwbB5zIs326iAp0kfxgIz4aDHFUgz%2Bend7SRIp62LkfKkpDTJeUxWuX9Au7ouC2mNJNUBX9Z0JUux4pjMv%2FM1lyCtfDV2teD9SSqWZ2NvxH9YrYOJ553J3b3aEZ5K%2FBguRbg7YTjlcDIsjVFm%2Bok4ogr7%2Fc0SQBpfiM6%2BSt07JuXf5HzyXvLIBtT9pM8HCcfaTbQ9JIJDBvozXQFHz7XUcHB0DLg9qO4UuubSsttfTfclzCaYYxmEVVfeAjI7hvjckr2WLIalTZNW3j1CWxhofB4a9hmofVLSdCgTs7PpyNOChRB%2F91Ljrig%2FEw0ZyOwAY6pgGCt%2BaV8trXm%2FwJxcbSc1SS1fRTVxsZeczVhvU%2BBpzPJNvFdXNNjt6eiSSE8T%2BvJaL%2Fa410C8nqxUdIiG0z0z79Ncm9xWJJn39K29V0QcE%2BSnUpf70mIILZMt3%2B6aH5bYHldqQAXV3YBINWz1HmqeVlHQ5CZh3XU2elgsGvCmJCTaEaagKJaqvqBvnYR3wQtGTiJiN2EPBmMNN2KgN6faUA7uLCULfE&X-Amz-Signature=d1a3a4b1d213edf74de59ca4828f448873b8d1846fc60fc308670898f699995a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q52R457S%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIG0W56obyqsATOScWa5FIFtMuMcAeljj1juHtJTaQ7NAAiBAi9yI7Zc4MK%2BliGpOphYVaQaKFIdR9xg7s6CVJrEkKiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj7j%2FGSkJWLeVpJKiKtwDVLHTL0g0q6xqzoreAIcNU631nBh4S8U0pBXIsfbSdBmJWfVEP6EsxEkaZxbf0fJoyW4IEaXF0sVPBguLw%2F5pIThEz9brsWtU%2FncWRLjXsfjPehsmCft9CTyub%2BPFT%2Fb%2FEIkUTEXr5PvvC5nSqXEBYEOUahWmABdERr7mCefOuV9MYYLy8h7ZQBX0Wy9m2Z%2B8MPXiTdXy3Vq18TnY7VjQ1Enskgk%2BpiKK8kykNplCPRMpfcAFj9XACWLsnG6mCu5LIr4dLGOKy96hhL%2FD6edCAvDXWc%2FvAhcE%2F0V8Tlo%2FtBpuLngAvyvDPmqOmMpzXHOrzCwbB5zIs326iAp0kfxgIz4aDHFUgz%2Bend7SRIp62LkfKkpDTJeUxWuX9Au7ouC2mNJNUBX9Z0JUux4pjMv%2FM1lyCtfDV2teD9SSqWZ2NvxH9YrYOJ553J3b3aEZ5K%2FBguRbg7YTjlcDIsjVFm%2Bok4ogr7%2Fc0SQBpfiM6%2BSt07JuXf5HzyXvLIBtT9pM8HCcfaTbQ9JIJDBvozXQFHz7XUcHB0DLg9qO4UuubSsttfTfclzCaYYxmEVVfeAjI7hvjckr2WLIalTZNW3j1CWxhofB4a9hmofVLSdCgTs7PpyNOChRB%2F91Ljrig%2FEw0ZyOwAY6pgGCt%2BaV8trXm%2FwJxcbSc1SS1fRTVxsZeczVhvU%2BBpzPJNvFdXNNjt6eiSSE8T%2BvJaL%2Fa410C8nqxUdIiG0z0z79Ncm9xWJJn39K29V0QcE%2BSnUpf70mIILZMt3%2B6aH5bYHldqQAXV3YBINWz1HmqeVlHQ5CZh3XU2elgsGvCmJCTaEaagKJaqvqBvnYR3wQtGTiJiN2EPBmMNN2KgN6faUA7uLCULfE&X-Amz-Signature=6f8995a2be4e70332426c1b2bfa2e38dcbdaaeb062baa0c9da1c92d0f62a02c7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
