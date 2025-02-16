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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6FA7EW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDUnPMnND6zTFnhn892RMLcBcAMClPBvr7U0KrVPHzDtAIgNaGm9O%2FsMInXHymK%2FYHm21U9AetZ5fFJtyzyvw2Kj8oq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDG6ixjP%2Bfps8wj%2FVfSrcAxE89SjgwqMLtQNAKl9DNhqsePGa4mdrkfYve3%2BX%2F7yoTwDXiGMqvn9dkZqDtPcaAc6OZFzkLotc%2FGeft0nD3qn0BHf%2BTg8%2BTg6182CFgb%2FflLhaU6KhFGCdyaPB7bNaz0b%2Bdgqq6OWb9j6cJ4dFLoAcHZ3Qoz77gGMiJGRhaMBHrcYPhXxhkhwpWPxxW0cGq%2BjOGUIMWk60O30jNqTyiQvPhfWEzSU8tQVezbRZnFYj6pSLs%2FyIx8mD9hvyTmILUeJnewuftdnPYck3NrPshMYuuG4%2BfHpJGwc6pqAngXn2XM%2Fe0t87EiL1MMspiL2brEyAemOFytpAJRIFhUtneZI3tKVcbgeXtBz7ApaTyV4HosvB%2BIs7Z5Y6ST2hFPtKABM1zx511PH04jNpPOBLX8FqpyK8V2Ajkd7L33UfTPuuyXn%2FgL29rGjRhrHKZi%2FClbLrtYBt%2BXj%2BKZKu4o7MCaOprC6P0O5cnmQAKZSyG52m4UMgYKEaGh0kyiU4DVC2PbTvexLnNp7o0t9DqyWL9sMtlleyIfw5pAZ7UwRZeWrGwpK2wxWuSHSiemw77PSKBs%2FdqqIZQE7ujqBBXb%2BsYKk04cjPrZrpsMRPHFiWr0gCOCfJx2k6uK4BAUMRMLzDxb0GOqUB9dsvM9akxEoWKznlOXUtxOrm%2FOfkGnqVOUeAjT9JBkRHQ%2FG5%2BHTSrnAKUSRu2sOqmB53MBtgdeGMF6R8wfX0OHysLxkgvnQmGqISP6FjnqkrHcEPWNZvpfIvs2czHewQ9%2B%2FOmCJy9DHYA1lz%2BBFpvS4KOKvQzCHNMm6i0EfwZT7uvjj7h0BLiVGMojXPtsgOZgD9Z56Q7BkJ8raC%2FgykuOLRqCYj&X-Amz-Signature=b6bfb9eb8983e9945c936a007bc4d4c9270da19cc8853c694c92aca640bb4b4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6FA7EW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDUnPMnND6zTFnhn892RMLcBcAMClPBvr7U0KrVPHzDtAIgNaGm9O%2FsMInXHymK%2FYHm21U9AetZ5fFJtyzyvw2Kj8oq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDG6ixjP%2Bfps8wj%2FVfSrcAxE89SjgwqMLtQNAKl9DNhqsePGa4mdrkfYve3%2BX%2F7yoTwDXiGMqvn9dkZqDtPcaAc6OZFzkLotc%2FGeft0nD3qn0BHf%2BTg8%2BTg6182CFgb%2FflLhaU6KhFGCdyaPB7bNaz0b%2Bdgqq6OWb9j6cJ4dFLoAcHZ3Qoz77gGMiJGRhaMBHrcYPhXxhkhwpWPxxW0cGq%2BjOGUIMWk60O30jNqTyiQvPhfWEzSU8tQVezbRZnFYj6pSLs%2FyIx8mD9hvyTmILUeJnewuftdnPYck3NrPshMYuuG4%2BfHpJGwc6pqAngXn2XM%2Fe0t87EiL1MMspiL2brEyAemOFytpAJRIFhUtneZI3tKVcbgeXtBz7ApaTyV4HosvB%2BIs7Z5Y6ST2hFPtKABM1zx511PH04jNpPOBLX8FqpyK8V2Ajkd7L33UfTPuuyXn%2FgL29rGjRhrHKZi%2FClbLrtYBt%2BXj%2BKZKu4o7MCaOprC6P0O5cnmQAKZSyG52m4UMgYKEaGh0kyiU4DVC2PbTvexLnNp7o0t9DqyWL9sMtlleyIfw5pAZ7UwRZeWrGwpK2wxWuSHSiemw77PSKBs%2FdqqIZQE7ujqBBXb%2BsYKk04cjPrZrpsMRPHFiWr0gCOCfJx2k6uK4BAUMRMLzDxb0GOqUB9dsvM9akxEoWKznlOXUtxOrm%2FOfkGnqVOUeAjT9JBkRHQ%2FG5%2BHTSrnAKUSRu2sOqmB53MBtgdeGMF6R8wfX0OHysLxkgvnQmGqISP6FjnqkrHcEPWNZvpfIvs2czHewQ9%2B%2FOmCJy9DHYA1lz%2BBFpvS4KOKvQzCHNMm6i0EfwZT7uvjj7h0BLiVGMojXPtsgOZgD9Z56Q7BkJ8raC%2FgykuOLRqCYj&X-Amz-Signature=bae26ef15770f92737a3d4dc1f4561ef40437552475ec884d9ccc456f2ad0057&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6FA7EW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDUnPMnND6zTFnhn892RMLcBcAMClPBvr7U0KrVPHzDtAIgNaGm9O%2FsMInXHymK%2FYHm21U9AetZ5fFJtyzyvw2Kj8oq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDG6ixjP%2Bfps8wj%2FVfSrcAxE89SjgwqMLtQNAKl9DNhqsePGa4mdrkfYve3%2BX%2F7yoTwDXiGMqvn9dkZqDtPcaAc6OZFzkLotc%2FGeft0nD3qn0BHf%2BTg8%2BTg6182CFgb%2FflLhaU6KhFGCdyaPB7bNaz0b%2Bdgqq6OWb9j6cJ4dFLoAcHZ3Qoz77gGMiJGRhaMBHrcYPhXxhkhwpWPxxW0cGq%2BjOGUIMWk60O30jNqTyiQvPhfWEzSU8tQVezbRZnFYj6pSLs%2FyIx8mD9hvyTmILUeJnewuftdnPYck3NrPshMYuuG4%2BfHpJGwc6pqAngXn2XM%2Fe0t87EiL1MMspiL2brEyAemOFytpAJRIFhUtneZI3tKVcbgeXtBz7ApaTyV4HosvB%2BIs7Z5Y6ST2hFPtKABM1zx511PH04jNpPOBLX8FqpyK8V2Ajkd7L33UfTPuuyXn%2FgL29rGjRhrHKZi%2FClbLrtYBt%2BXj%2BKZKu4o7MCaOprC6P0O5cnmQAKZSyG52m4UMgYKEaGh0kyiU4DVC2PbTvexLnNp7o0t9DqyWL9sMtlleyIfw5pAZ7UwRZeWrGwpK2wxWuSHSiemw77PSKBs%2FdqqIZQE7ujqBBXb%2BsYKk04cjPrZrpsMRPHFiWr0gCOCfJx2k6uK4BAUMRMLzDxb0GOqUB9dsvM9akxEoWKznlOXUtxOrm%2FOfkGnqVOUeAjT9JBkRHQ%2FG5%2BHTSrnAKUSRu2sOqmB53MBtgdeGMF6R8wfX0OHysLxkgvnQmGqISP6FjnqkrHcEPWNZvpfIvs2czHewQ9%2B%2FOmCJy9DHYA1lz%2BBFpvS4KOKvQzCHNMm6i0EfwZT7uvjj7h0BLiVGMojXPtsgOZgD9Z56Q7BkJ8raC%2FgykuOLRqCYj&X-Amz-Signature=516d85442c16a794c6c57d5bc94086e8bb0a2f5b228937d3c5f7d1aedf761553&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6FA7EW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDUnPMnND6zTFnhn892RMLcBcAMClPBvr7U0KrVPHzDtAIgNaGm9O%2FsMInXHymK%2FYHm21U9AetZ5fFJtyzyvw2Kj8oq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDG6ixjP%2Bfps8wj%2FVfSrcAxE89SjgwqMLtQNAKl9DNhqsePGa4mdrkfYve3%2BX%2F7yoTwDXiGMqvn9dkZqDtPcaAc6OZFzkLotc%2FGeft0nD3qn0BHf%2BTg8%2BTg6182CFgb%2FflLhaU6KhFGCdyaPB7bNaz0b%2Bdgqq6OWb9j6cJ4dFLoAcHZ3Qoz77gGMiJGRhaMBHrcYPhXxhkhwpWPxxW0cGq%2BjOGUIMWk60O30jNqTyiQvPhfWEzSU8tQVezbRZnFYj6pSLs%2FyIx8mD9hvyTmILUeJnewuftdnPYck3NrPshMYuuG4%2BfHpJGwc6pqAngXn2XM%2Fe0t87EiL1MMspiL2brEyAemOFytpAJRIFhUtneZI3tKVcbgeXtBz7ApaTyV4HosvB%2BIs7Z5Y6ST2hFPtKABM1zx511PH04jNpPOBLX8FqpyK8V2Ajkd7L33UfTPuuyXn%2FgL29rGjRhrHKZi%2FClbLrtYBt%2BXj%2BKZKu4o7MCaOprC6P0O5cnmQAKZSyG52m4UMgYKEaGh0kyiU4DVC2PbTvexLnNp7o0t9DqyWL9sMtlleyIfw5pAZ7UwRZeWrGwpK2wxWuSHSiemw77PSKBs%2FdqqIZQE7ujqBBXb%2BsYKk04cjPrZrpsMRPHFiWr0gCOCfJx2k6uK4BAUMRMLzDxb0GOqUB9dsvM9akxEoWKznlOXUtxOrm%2FOfkGnqVOUeAjT9JBkRHQ%2FG5%2BHTSrnAKUSRu2sOqmB53MBtgdeGMF6R8wfX0OHysLxkgvnQmGqISP6FjnqkrHcEPWNZvpfIvs2czHewQ9%2B%2FOmCJy9DHYA1lz%2BBFpvS4KOKvQzCHNMm6i0EfwZT7uvjj7h0BLiVGMojXPtsgOZgD9Z56Q7BkJ8raC%2FgykuOLRqCYj&X-Amz-Signature=532db3dda83a8d27d04801bc62934a2d580aba6b24b117c5b8dbbcc68f33791b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6FA7EW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDUnPMnND6zTFnhn892RMLcBcAMClPBvr7U0KrVPHzDtAIgNaGm9O%2FsMInXHymK%2FYHm21U9AetZ5fFJtyzyvw2Kj8oq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDG6ixjP%2Bfps8wj%2FVfSrcAxE89SjgwqMLtQNAKl9DNhqsePGa4mdrkfYve3%2BX%2F7yoTwDXiGMqvn9dkZqDtPcaAc6OZFzkLotc%2FGeft0nD3qn0BHf%2BTg8%2BTg6182CFgb%2FflLhaU6KhFGCdyaPB7bNaz0b%2Bdgqq6OWb9j6cJ4dFLoAcHZ3Qoz77gGMiJGRhaMBHrcYPhXxhkhwpWPxxW0cGq%2BjOGUIMWk60O30jNqTyiQvPhfWEzSU8tQVezbRZnFYj6pSLs%2FyIx8mD9hvyTmILUeJnewuftdnPYck3NrPshMYuuG4%2BfHpJGwc6pqAngXn2XM%2Fe0t87EiL1MMspiL2brEyAemOFytpAJRIFhUtneZI3tKVcbgeXtBz7ApaTyV4HosvB%2BIs7Z5Y6ST2hFPtKABM1zx511PH04jNpPOBLX8FqpyK8V2Ajkd7L33UfTPuuyXn%2FgL29rGjRhrHKZi%2FClbLrtYBt%2BXj%2BKZKu4o7MCaOprC6P0O5cnmQAKZSyG52m4UMgYKEaGh0kyiU4DVC2PbTvexLnNp7o0t9DqyWL9sMtlleyIfw5pAZ7UwRZeWrGwpK2wxWuSHSiemw77PSKBs%2FdqqIZQE7ujqBBXb%2BsYKk04cjPrZrpsMRPHFiWr0gCOCfJx2k6uK4BAUMRMLzDxb0GOqUB9dsvM9akxEoWKznlOXUtxOrm%2FOfkGnqVOUeAjT9JBkRHQ%2FG5%2BHTSrnAKUSRu2sOqmB53MBtgdeGMF6R8wfX0OHysLxkgvnQmGqISP6FjnqkrHcEPWNZvpfIvs2czHewQ9%2B%2FOmCJy9DHYA1lz%2BBFpvS4KOKvQzCHNMm6i0EfwZT7uvjj7h0BLiVGMojXPtsgOZgD9Z56Q7BkJ8raC%2FgykuOLRqCYj&X-Amz-Signature=f7ede37e4445077cbf85572013b5ba7d5b567d848febf4529ca0b8a7e8e6e30e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6FA7EW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDUnPMnND6zTFnhn892RMLcBcAMClPBvr7U0KrVPHzDtAIgNaGm9O%2FsMInXHymK%2FYHm21U9AetZ5fFJtyzyvw2Kj8oq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDG6ixjP%2Bfps8wj%2FVfSrcAxE89SjgwqMLtQNAKl9DNhqsePGa4mdrkfYve3%2BX%2F7yoTwDXiGMqvn9dkZqDtPcaAc6OZFzkLotc%2FGeft0nD3qn0BHf%2BTg8%2BTg6182CFgb%2FflLhaU6KhFGCdyaPB7bNaz0b%2Bdgqq6OWb9j6cJ4dFLoAcHZ3Qoz77gGMiJGRhaMBHrcYPhXxhkhwpWPxxW0cGq%2BjOGUIMWk60O30jNqTyiQvPhfWEzSU8tQVezbRZnFYj6pSLs%2FyIx8mD9hvyTmILUeJnewuftdnPYck3NrPshMYuuG4%2BfHpJGwc6pqAngXn2XM%2Fe0t87EiL1MMspiL2brEyAemOFytpAJRIFhUtneZI3tKVcbgeXtBz7ApaTyV4HosvB%2BIs7Z5Y6ST2hFPtKABM1zx511PH04jNpPOBLX8FqpyK8V2Ajkd7L33UfTPuuyXn%2FgL29rGjRhrHKZi%2FClbLrtYBt%2BXj%2BKZKu4o7MCaOprC6P0O5cnmQAKZSyG52m4UMgYKEaGh0kyiU4DVC2PbTvexLnNp7o0t9DqyWL9sMtlleyIfw5pAZ7UwRZeWrGwpK2wxWuSHSiemw77PSKBs%2FdqqIZQE7ujqBBXb%2BsYKk04cjPrZrpsMRPHFiWr0gCOCfJx2k6uK4BAUMRMLzDxb0GOqUB9dsvM9akxEoWKznlOXUtxOrm%2FOfkGnqVOUeAjT9JBkRHQ%2FG5%2BHTSrnAKUSRu2sOqmB53MBtgdeGMF6R8wfX0OHysLxkgvnQmGqISP6FjnqkrHcEPWNZvpfIvs2czHewQ9%2B%2FOmCJy9DHYA1lz%2BBFpvS4KOKvQzCHNMm6i0EfwZT7uvjj7h0BLiVGMojXPtsgOZgD9Z56Q7BkJ8raC%2FgykuOLRqCYj&X-Amz-Signature=54a27879a436b5dbf43d46adab245387554227848d1a59d822c74e4e87ade739&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6FA7EW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDUnPMnND6zTFnhn892RMLcBcAMClPBvr7U0KrVPHzDtAIgNaGm9O%2FsMInXHymK%2FYHm21U9AetZ5fFJtyzyvw2Kj8oq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDG6ixjP%2Bfps8wj%2FVfSrcAxE89SjgwqMLtQNAKl9DNhqsePGa4mdrkfYve3%2BX%2F7yoTwDXiGMqvn9dkZqDtPcaAc6OZFzkLotc%2FGeft0nD3qn0BHf%2BTg8%2BTg6182CFgb%2FflLhaU6KhFGCdyaPB7bNaz0b%2Bdgqq6OWb9j6cJ4dFLoAcHZ3Qoz77gGMiJGRhaMBHrcYPhXxhkhwpWPxxW0cGq%2BjOGUIMWk60O30jNqTyiQvPhfWEzSU8tQVezbRZnFYj6pSLs%2FyIx8mD9hvyTmILUeJnewuftdnPYck3NrPshMYuuG4%2BfHpJGwc6pqAngXn2XM%2Fe0t87EiL1MMspiL2brEyAemOFytpAJRIFhUtneZI3tKVcbgeXtBz7ApaTyV4HosvB%2BIs7Z5Y6ST2hFPtKABM1zx511PH04jNpPOBLX8FqpyK8V2Ajkd7L33UfTPuuyXn%2FgL29rGjRhrHKZi%2FClbLrtYBt%2BXj%2BKZKu4o7MCaOprC6P0O5cnmQAKZSyG52m4UMgYKEaGh0kyiU4DVC2PbTvexLnNp7o0t9DqyWL9sMtlleyIfw5pAZ7UwRZeWrGwpK2wxWuSHSiemw77PSKBs%2FdqqIZQE7ujqBBXb%2BsYKk04cjPrZrpsMRPHFiWr0gCOCfJx2k6uK4BAUMRMLzDxb0GOqUB9dsvM9akxEoWKznlOXUtxOrm%2FOfkGnqVOUeAjT9JBkRHQ%2FG5%2BHTSrnAKUSRu2sOqmB53MBtgdeGMF6R8wfX0OHysLxkgvnQmGqISP6FjnqkrHcEPWNZvpfIvs2czHewQ9%2B%2FOmCJy9DHYA1lz%2BBFpvS4KOKvQzCHNMm6i0EfwZT7uvjj7h0BLiVGMojXPtsgOZgD9Z56Q7BkJ8raC%2FgykuOLRqCYj&X-Amz-Signature=599e73727c407adc5948ef754b7995bb25f4b00889e377bdb6fafc28cd58549b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
