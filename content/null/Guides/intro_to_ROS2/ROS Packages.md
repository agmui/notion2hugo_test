---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/ROS Packages.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3IGORJP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIF6hmlwb1GrA6K4kelAY5qaL%2B5nNLgHoEW0fCMaSfwoSAiEAhGxTmBjJj%2F%2Bg4VQ1z58TBNVjTlnyGSaZhIFYLYtr230q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMIfPQ2BRVQPQ0kcyCrcA2iwj5aJKEqmKxF%2Bj0%2FzPz0RwT7LyNyc6hr8b4ELQWjzb4BtS6gVtN%2Bqn52RWlyXgm80pelANPREQ63Ui398WO4nLLWigCxSlUeqzKxl8eFtngIzGRMqWZwA1FElfc3Hg6AvMsAVFab1oAL7u2YOttiOxutjQyuUnNRO%2BRwltBxpdIbl2PZNkCJDUYM8Wx6SBSuA59LKyORp09Yc%2BLi39mXWQ1n0EG9YeP9ASfeGz6BsefFAhWL7cGHY7e4X%2FOOuD2aAE%2Bd80jyPgXXal5uGvEVdTr%2BCnLidDEn0tWPU%2Fsniv4StSzVX6x3LUEmNCPj1V%2Br5supj7ldFzXlwm1dn4KgCu4PZ4XIsR3pvmn%2BbsyOQCmj0AAzaZflCnp1aTPP0wX8VX%2FRVNrPhH%2BwIAb4P2mcxMdbH8TPRtuK44YAYloteoKNJsr6mu%2BwWe4He0gH2oGG76w%2BZewF7kruuJJIea1hhb%2FVQPYGR%2FwUgSsuqf%2FzWnZyWoDexnE0a0Uhvdb7IvHAARhqKiPyXCeukgNkbxLvWqHA%2F6ojOvDdM5sq8AuGWEf8iJk8PgDI7Jexjes7QB6eDFzwCVXkgnslWF5a2FP%2F7q%2FfxEQmnqUKApN%2Blf0yoRe6%2F34Dx%2B%2FBJ9j2lMIbPir0GOqUBMUvcJJJyf6VIzxEKFam%2FXeF%2FPEBbMcJb2c75cGVbcDOA7rAJ6x336S9NKznpJejDXPm6Od8NvMKp0%2FZaIoGhTFK1Ja8Y%2BkgqZmYk7D%2FZAej6IH2OcNnlAvUAk8CuuN0XrhSkSeBxyTkE1uRkcfnUVL2Yzk9S3i0nZYV8hJnZCAVpdOX7lkgDcfwSO0rVDds0dlSbvQAGLjTVXJOzBGhm%2FKFGdj8t&X-Amz-Signature=80fb28fd38be357bfa0feddc4e3b04c80f924b52414f9cb0d3860350e534f30b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3IGORJP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIF6hmlwb1GrA6K4kelAY5qaL%2B5nNLgHoEW0fCMaSfwoSAiEAhGxTmBjJj%2F%2Bg4VQ1z58TBNVjTlnyGSaZhIFYLYtr230q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMIfPQ2BRVQPQ0kcyCrcA2iwj5aJKEqmKxF%2Bj0%2FzPz0RwT7LyNyc6hr8b4ELQWjzb4BtS6gVtN%2Bqn52RWlyXgm80pelANPREQ63Ui398WO4nLLWigCxSlUeqzKxl8eFtngIzGRMqWZwA1FElfc3Hg6AvMsAVFab1oAL7u2YOttiOxutjQyuUnNRO%2BRwltBxpdIbl2PZNkCJDUYM8Wx6SBSuA59LKyORp09Yc%2BLi39mXWQ1n0EG9YeP9ASfeGz6BsefFAhWL7cGHY7e4X%2FOOuD2aAE%2Bd80jyPgXXal5uGvEVdTr%2BCnLidDEn0tWPU%2Fsniv4StSzVX6x3LUEmNCPj1V%2Br5supj7ldFzXlwm1dn4KgCu4PZ4XIsR3pvmn%2BbsyOQCmj0AAzaZflCnp1aTPP0wX8VX%2FRVNrPhH%2BwIAb4P2mcxMdbH8TPRtuK44YAYloteoKNJsr6mu%2BwWe4He0gH2oGG76w%2BZewF7kruuJJIea1hhb%2FVQPYGR%2FwUgSsuqf%2FzWnZyWoDexnE0a0Uhvdb7IvHAARhqKiPyXCeukgNkbxLvWqHA%2F6ojOvDdM5sq8AuGWEf8iJk8PgDI7Jexjes7QB6eDFzwCVXkgnslWF5a2FP%2F7q%2FfxEQmnqUKApN%2Blf0yoRe6%2F34Dx%2B%2FBJ9j2lMIbPir0GOqUBMUvcJJJyf6VIzxEKFam%2FXeF%2FPEBbMcJb2c75cGVbcDOA7rAJ6x336S9NKznpJejDXPm6Od8NvMKp0%2FZaIoGhTFK1Ja8Y%2BkgqZmYk7D%2FZAej6IH2OcNnlAvUAk8CuuN0XrhSkSeBxyTkE1uRkcfnUVL2Yzk9S3i0nZYV8hJnZCAVpdOX7lkgDcfwSO0rVDds0dlSbvQAGLjTVXJOzBGhm%2FKFGdj8t&X-Amz-Signature=cccb0d144d7f0cf1dc3c788a4e2cb97fb292e84df052586ecf0146ede6fc71b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3IGORJP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIF6hmlwb1GrA6K4kelAY5qaL%2B5nNLgHoEW0fCMaSfwoSAiEAhGxTmBjJj%2F%2Bg4VQ1z58TBNVjTlnyGSaZhIFYLYtr230q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMIfPQ2BRVQPQ0kcyCrcA2iwj5aJKEqmKxF%2Bj0%2FzPz0RwT7LyNyc6hr8b4ELQWjzb4BtS6gVtN%2Bqn52RWlyXgm80pelANPREQ63Ui398WO4nLLWigCxSlUeqzKxl8eFtngIzGRMqWZwA1FElfc3Hg6AvMsAVFab1oAL7u2YOttiOxutjQyuUnNRO%2BRwltBxpdIbl2PZNkCJDUYM8Wx6SBSuA59LKyORp09Yc%2BLi39mXWQ1n0EG9YeP9ASfeGz6BsefFAhWL7cGHY7e4X%2FOOuD2aAE%2Bd80jyPgXXal5uGvEVdTr%2BCnLidDEn0tWPU%2Fsniv4StSzVX6x3LUEmNCPj1V%2Br5supj7ldFzXlwm1dn4KgCu4PZ4XIsR3pvmn%2BbsyOQCmj0AAzaZflCnp1aTPP0wX8VX%2FRVNrPhH%2BwIAb4P2mcxMdbH8TPRtuK44YAYloteoKNJsr6mu%2BwWe4He0gH2oGG76w%2BZewF7kruuJJIea1hhb%2FVQPYGR%2FwUgSsuqf%2FzWnZyWoDexnE0a0Uhvdb7IvHAARhqKiPyXCeukgNkbxLvWqHA%2F6ojOvDdM5sq8AuGWEf8iJk8PgDI7Jexjes7QB6eDFzwCVXkgnslWF5a2FP%2F7q%2FfxEQmnqUKApN%2Blf0yoRe6%2F34Dx%2B%2FBJ9j2lMIbPir0GOqUBMUvcJJJyf6VIzxEKFam%2FXeF%2FPEBbMcJb2c75cGVbcDOA7rAJ6x336S9NKznpJejDXPm6Od8NvMKp0%2FZaIoGhTFK1Ja8Y%2BkgqZmYk7D%2FZAej6IH2OcNnlAvUAk8CuuN0XrhSkSeBxyTkE1uRkcfnUVL2Yzk9S3i0nZYV8hJnZCAVpdOX7lkgDcfwSO0rVDds0dlSbvQAGLjTVXJOzBGhm%2FKFGdj8t&X-Amz-Signature=b6a3f46457715144ec20c398a5427fd54ab8d952ac726f64a4c929a48512ed86&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3IGORJP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIF6hmlwb1GrA6K4kelAY5qaL%2B5nNLgHoEW0fCMaSfwoSAiEAhGxTmBjJj%2F%2Bg4VQ1z58TBNVjTlnyGSaZhIFYLYtr230q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMIfPQ2BRVQPQ0kcyCrcA2iwj5aJKEqmKxF%2Bj0%2FzPz0RwT7LyNyc6hr8b4ELQWjzb4BtS6gVtN%2Bqn52RWlyXgm80pelANPREQ63Ui398WO4nLLWigCxSlUeqzKxl8eFtngIzGRMqWZwA1FElfc3Hg6AvMsAVFab1oAL7u2YOttiOxutjQyuUnNRO%2BRwltBxpdIbl2PZNkCJDUYM8Wx6SBSuA59LKyORp09Yc%2BLi39mXWQ1n0EG9YeP9ASfeGz6BsefFAhWL7cGHY7e4X%2FOOuD2aAE%2Bd80jyPgXXal5uGvEVdTr%2BCnLidDEn0tWPU%2Fsniv4StSzVX6x3LUEmNCPj1V%2Br5supj7ldFzXlwm1dn4KgCu4PZ4XIsR3pvmn%2BbsyOQCmj0AAzaZflCnp1aTPP0wX8VX%2FRVNrPhH%2BwIAb4P2mcxMdbH8TPRtuK44YAYloteoKNJsr6mu%2BwWe4He0gH2oGG76w%2BZewF7kruuJJIea1hhb%2FVQPYGR%2FwUgSsuqf%2FzWnZyWoDexnE0a0Uhvdb7IvHAARhqKiPyXCeukgNkbxLvWqHA%2F6ojOvDdM5sq8AuGWEf8iJk8PgDI7Jexjes7QB6eDFzwCVXkgnslWF5a2FP%2F7q%2FfxEQmnqUKApN%2Blf0yoRe6%2F34Dx%2B%2FBJ9j2lMIbPir0GOqUBMUvcJJJyf6VIzxEKFam%2FXeF%2FPEBbMcJb2c75cGVbcDOA7rAJ6x336S9NKznpJejDXPm6Od8NvMKp0%2FZaIoGhTFK1Ja8Y%2BkgqZmYk7D%2FZAej6IH2OcNnlAvUAk8CuuN0XrhSkSeBxyTkE1uRkcfnUVL2Yzk9S3i0nZYV8hJnZCAVpdOX7lkgDcfwSO0rVDds0dlSbvQAGLjTVXJOzBGhm%2FKFGdj8t&X-Amz-Signature=7de7243e58e3a9e9d9c107f1e673ed363b7cb8eb8d0ded72857f6bf2056a1580&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3IGORJP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIF6hmlwb1GrA6K4kelAY5qaL%2B5nNLgHoEW0fCMaSfwoSAiEAhGxTmBjJj%2F%2Bg4VQ1z58TBNVjTlnyGSaZhIFYLYtr230q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMIfPQ2BRVQPQ0kcyCrcA2iwj5aJKEqmKxF%2Bj0%2FzPz0RwT7LyNyc6hr8b4ELQWjzb4BtS6gVtN%2Bqn52RWlyXgm80pelANPREQ63Ui398WO4nLLWigCxSlUeqzKxl8eFtngIzGRMqWZwA1FElfc3Hg6AvMsAVFab1oAL7u2YOttiOxutjQyuUnNRO%2BRwltBxpdIbl2PZNkCJDUYM8Wx6SBSuA59LKyORp09Yc%2BLi39mXWQ1n0EG9YeP9ASfeGz6BsefFAhWL7cGHY7e4X%2FOOuD2aAE%2Bd80jyPgXXal5uGvEVdTr%2BCnLidDEn0tWPU%2Fsniv4StSzVX6x3LUEmNCPj1V%2Br5supj7ldFzXlwm1dn4KgCu4PZ4XIsR3pvmn%2BbsyOQCmj0AAzaZflCnp1aTPP0wX8VX%2FRVNrPhH%2BwIAb4P2mcxMdbH8TPRtuK44YAYloteoKNJsr6mu%2BwWe4He0gH2oGG76w%2BZewF7kruuJJIea1hhb%2FVQPYGR%2FwUgSsuqf%2FzWnZyWoDexnE0a0Uhvdb7IvHAARhqKiPyXCeukgNkbxLvWqHA%2F6ojOvDdM5sq8AuGWEf8iJk8PgDI7Jexjes7QB6eDFzwCVXkgnslWF5a2FP%2F7q%2FfxEQmnqUKApN%2Blf0yoRe6%2F34Dx%2B%2FBJ9j2lMIbPir0GOqUBMUvcJJJyf6VIzxEKFam%2FXeF%2FPEBbMcJb2c75cGVbcDOA7rAJ6x336S9NKznpJejDXPm6Od8NvMKp0%2FZaIoGhTFK1Ja8Y%2BkgqZmYk7D%2FZAej6IH2OcNnlAvUAk8CuuN0XrhSkSeBxyTkE1uRkcfnUVL2Yzk9S3i0nZYV8hJnZCAVpdOX7lkgDcfwSO0rVDds0dlSbvQAGLjTVXJOzBGhm%2FKFGdj8t&X-Amz-Signature=71f018969f7decce54fada2ff3b8663ca5b98b3e04194588ea9905473d033172&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3IGORJP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIF6hmlwb1GrA6K4kelAY5qaL%2B5nNLgHoEW0fCMaSfwoSAiEAhGxTmBjJj%2F%2Bg4VQ1z58TBNVjTlnyGSaZhIFYLYtr230q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMIfPQ2BRVQPQ0kcyCrcA2iwj5aJKEqmKxF%2Bj0%2FzPz0RwT7LyNyc6hr8b4ELQWjzb4BtS6gVtN%2Bqn52RWlyXgm80pelANPREQ63Ui398WO4nLLWigCxSlUeqzKxl8eFtngIzGRMqWZwA1FElfc3Hg6AvMsAVFab1oAL7u2YOttiOxutjQyuUnNRO%2BRwltBxpdIbl2PZNkCJDUYM8Wx6SBSuA59LKyORp09Yc%2BLi39mXWQ1n0EG9YeP9ASfeGz6BsefFAhWL7cGHY7e4X%2FOOuD2aAE%2Bd80jyPgXXal5uGvEVdTr%2BCnLidDEn0tWPU%2Fsniv4StSzVX6x3LUEmNCPj1V%2Br5supj7ldFzXlwm1dn4KgCu4PZ4XIsR3pvmn%2BbsyOQCmj0AAzaZflCnp1aTPP0wX8VX%2FRVNrPhH%2BwIAb4P2mcxMdbH8TPRtuK44YAYloteoKNJsr6mu%2BwWe4He0gH2oGG76w%2BZewF7kruuJJIea1hhb%2FVQPYGR%2FwUgSsuqf%2FzWnZyWoDexnE0a0Uhvdb7IvHAARhqKiPyXCeukgNkbxLvWqHA%2F6ojOvDdM5sq8AuGWEf8iJk8PgDI7Jexjes7QB6eDFzwCVXkgnslWF5a2FP%2F7q%2FfxEQmnqUKApN%2Blf0yoRe6%2F34Dx%2B%2FBJ9j2lMIbPir0GOqUBMUvcJJJyf6VIzxEKFam%2FXeF%2FPEBbMcJb2c75cGVbcDOA7rAJ6x336S9NKznpJejDXPm6Od8NvMKp0%2FZaIoGhTFK1Ja8Y%2BkgqZmYk7D%2FZAej6IH2OcNnlAvUAk8CuuN0XrhSkSeBxyTkE1uRkcfnUVL2Yzk9S3i0nZYV8hJnZCAVpdOX7lkgDcfwSO0rVDds0dlSbvQAGLjTVXJOzBGhm%2FKFGdj8t&X-Amz-Signature=c2178cae97dd67e93e47eb4f608d6c2241993b7af4d4b7e02074277a78c42df6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3IGORJP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIF6hmlwb1GrA6K4kelAY5qaL%2B5nNLgHoEW0fCMaSfwoSAiEAhGxTmBjJj%2F%2Bg4VQ1z58TBNVjTlnyGSaZhIFYLYtr230q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMIfPQ2BRVQPQ0kcyCrcA2iwj5aJKEqmKxF%2Bj0%2FzPz0RwT7LyNyc6hr8b4ELQWjzb4BtS6gVtN%2Bqn52RWlyXgm80pelANPREQ63Ui398WO4nLLWigCxSlUeqzKxl8eFtngIzGRMqWZwA1FElfc3Hg6AvMsAVFab1oAL7u2YOttiOxutjQyuUnNRO%2BRwltBxpdIbl2PZNkCJDUYM8Wx6SBSuA59LKyORp09Yc%2BLi39mXWQ1n0EG9YeP9ASfeGz6BsefFAhWL7cGHY7e4X%2FOOuD2aAE%2Bd80jyPgXXal5uGvEVdTr%2BCnLidDEn0tWPU%2Fsniv4StSzVX6x3LUEmNCPj1V%2Br5supj7ldFzXlwm1dn4KgCu4PZ4XIsR3pvmn%2BbsyOQCmj0AAzaZflCnp1aTPP0wX8VX%2FRVNrPhH%2BwIAb4P2mcxMdbH8TPRtuK44YAYloteoKNJsr6mu%2BwWe4He0gH2oGG76w%2BZewF7kruuJJIea1hhb%2FVQPYGR%2FwUgSsuqf%2FzWnZyWoDexnE0a0Uhvdb7IvHAARhqKiPyXCeukgNkbxLvWqHA%2F6ojOvDdM5sq8AuGWEf8iJk8PgDI7Jexjes7QB6eDFzwCVXkgnslWF5a2FP%2F7q%2FfxEQmnqUKApN%2Blf0yoRe6%2F34Dx%2B%2FBJ9j2lMIbPir0GOqUBMUvcJJJyf6VIzxEKFam%2FXeF%2FPEBbMcJb2c75cGVbcDOA7rAJ6x336S9NKznpJejDXPm6Od8NvMKp0%2FZaIoGhTFK1Ja8Y%2BkgqZmYk7D%2FZAej6IH2OcNnlAvUAk8CuuN0XrhSkSeBxyTkE1uRkcfnUVL2Yzk9S3i0nZYV8hJnZCAVpdOX7lkgDcfwSO0rVDds0dlSbvQAGLjTVXJOzBGhm%2FKFGdj8t&X-Amz-Signature=7848f4e8ba5caf2040816a3a996dd36d787cc58d01c1e4c3ab00e419169c1f37&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
