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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYBOVV7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1dN6cEpav%2BchWVa5qqSOmVg89IksrJp11%2BGFAcwDZdAiAXDVNxNdIWWwH45dF5g%2B4Ybpm7HPyn2egI%2BW5pWXcdRir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMWzOBgy3BQa0LAP4aKtwDg6eG5A5uQSXqy36QDJY0eM%2BNjEqWilhpGHDSb8GjFS9VTfjQctUcQtsOz6o0DUILOpXT3AnMMLIgc66HRh4WbZXgkqxPa1N%2B%2F1799cpPRvvn4QDGI2ku5CKBR0vPe7fgkDhADSE4svMmQsrcLD8zzCW%2Bj2J7OZyItKD9xwZ85FNouc12t8OkpRqk%2BvnxVH%2FCCktd%2Ff0NQz0sZLfFQgBai42hKedHsKQ%2Bn4FeEwRsPjAo6bKTFpgoTu8%2FQyqvyKR%2BT88sybJeViPoO1EvnEghIuGJ1y47qCzTeARDrfBbOO7e9y0QcFmPGTx6BYnUVYvco8gRImGfZ1jx%2FWXVI0G7ibOKfIb4h1SnsiSUsVZ2qk7wgQqObOuZLYfGp5W2YUvqplBlS%2BIUEdXGRqM1U1Buc2uFl7Z6c%2FaW2ZFCmeZSSQU2TsQ3%2FoZLlA4FlK4P5BbPZT8H5E2s5Wmz5DpCrfWghUa2KbnMGGyWTEvXvmtBrYGhC6vbbYriyPqkdrtQs9MGUAHv%2FZibM5rx7phm7aViJXKhXROxVRXSI6qheABBqm2%2BJXFUszCqd07ZTlK6iyIdjKurndJNv1piX2rG%2B%2Fa%2FsN%2FYsg8MtqKCxCIXcI8uTAQcYskI606b9CB9WfIw25eMvwY6pgEgIx%2B3GxQNZ4cmV4%2BHcwwu5t28c%2Fk8xMeezC%2FgI93%2FcIkamW%2BdwTnlnl0djKtu%2BfAEd%2Bp%2FphRcxUBurFB8EYLqVxnT1jjkhAf7VthjOeztvfvj%2FNjiskwUlB9BI9XBKJqPIDi08hI%2BIJNZtxT5MLQn3YFPLJnXl3%2B%2FlD%2FqB7QzwBxQtokJNlVOWFmli6uXW5RT7rQ8mzy6T5CPR8DuJMB9fGpdPSK9&X-Amz-Signature=4a357937f1cb3108954cfcc1532fd221362cf3605d0cbc99bdd80df913a64516&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYBOVV7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1dN6cEpav%2BchWVa5qqSOmVg89IksrJp11%2BGFAcwDZdAiAXDVNxNdIWWwH45dF5g%2B4Ybpm7HPyn2egI%2BW5pWXcdRir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMWzOBgy3BQa0LAP4aKtwDg6eG5A5uQSXqy36QDJY0eM%2BNjEqWilhpGHDSb8GjFS9VTfjQctUcQtsOz6o0DUILOpXT3AnMMLIgc66HRh4WbZXgkqxPa1N%2B%2F1799cpPRvvn4QDGI2ku5CKBR0vPe7fgkDhADSE4svMmQsrcLD8zzCW%2Bj2J7OZyItKD9xwZ85FNouc12t8OkpRqk%2BvnxVH%2FCCktd%2Ff0NQz0sZLfFQgBai42hKedHsKQ%2Bn4FeEwRsPjAo6bKTFpgoTu8%2FQyqvyKR%2BT88sybJeViPoO1EvnEghIuGJ1y47qCzTeARDrfBbOO7e9y0QcFmPGTx6BYnUVYvco8gRImGfZ1jx%2FWXVI0G7ibOKfIb4h1SnsiSUsVZ2qk7wgQqObOuZLYfGp5W2YUvqplBlS%2BIUEdXGRqM1U1Buc2uFl7Z6c%2FaW2ZFCmeZSSQU2TsQ3%2FoZLlA4FlK4P5BbPZT8H5E2s5Wmz5DpCrfWghUa2KbnMGGyWTEvXvmtBrYGhC6vbbYriyPqkdrtQs9MGUAHv%2FZibM5rx7phm7aViJXKhXROxVRXSI6qheABBqm2%2BJXFUszCqd07ZTlK6iyIdjKurndJNv1piX2rG%2B%2Fa%2FsN%2FYsg8MtqKCxCIXcI8uTAQcYskI606b9CB9WfIw25eMvwY6pgEgIx%2B3GxQNZ4cmV4%2BHcwwu5t28c%2Fk8xMeezC%2FgI93%2FcIkamW%2BdwTnlnl0djKtu%2BfAEd%2Bp%2FphRcxUBurFB8EYLqVxnT1jjkhAf7VthjOeztvfvj%2FNjiskwUlB9BI9XBKJqPIDi08hI%2BIJNZtxT5MLQn3YFPLJnXl3%2B%2FlD%2FqB7QzwBxQtokJNlVOWFmli6uXW5RT7rQ8mzy6T5CPR8DuJMB9fGpdPSK9&X-Amz-Signature=eff393313f3abde52863eea5238e79292bd553ba9d4528629ff11cc6054ede9f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYBOVV7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1dN6cEpav%2BchWVa5qqSOmVg89IksrJp11%2BGFAcwDZdAiAXDVNxNdIWWwH45dF5g%2B4Ybpm7HPyn2egI%2BW5pWXcdRir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMWzOBgy3BQa0LAP4aKtwDg6eG5A5uQSXqy36QDJY0eM%2BNjEqWilhpGHDSb8GjFS9VTfjQctUcQtsOz6o0DUILOpXT3AnMMLIgc66HRh4WbZXgkqxPa1N%2B%2F1799cpPRvvn4QDGI2ku5CKBR0vPe7fgkDhADSE4svMmQsrcLD8zzCW%2Bj2J7OZyItKD9xwZ85FNouc12t8OkpRqk%2BvnxVH%2FCCktd%2Ff0NQz0sZLfFQgBai42hKedHsKQ%2Bn4FeEwRsPjAo6bKTFpgoTu8%2FQyqvyKR%2BT88sybJeViPoO1EvnEghIuGJ1y47qCzTeARDrfBbOO7e9y0QcFmPGTx6BYnUVYvco8gRImGfZ1jx%2FWXVI0G7ibOKfIb4h1SnsiSUsVZ2qk7wgQqObOuZLYfGp5W2YUvqplBlS%2BIUEdXGRqM1U1Buc2uFl7Z6c%2FaW2ZFCmeZSSQU2TsQ3%2FoZLlA4FlK4P5BbPZT8H5E2s5Wmz5DpCrfWghUa2KbnMGGyWTEvXvmtBrYGhC6vbbYriyPqkdrtQs9MGUAHv%2FZibM5rx7phm7aViJXKhXROxVRXSI6qheABBqm2%2BJXFUszCqd07ZTlK6iyIdjKurndJNv1piX2rG%2B%2Fa%2FsN%2FYsg8MtqKCxCIXcI8uTAQcYskI606b9CB9WfIw25eMvwY6pgEgIx%2B3GxQNZ4cmV4%2BHcwwu5t28c%2Fk8xMeezC%2FgI93%2FcIkamW%2BdwTnlnl0djKtu%2BfAEd%2Bp%2FphRcxUBurFB8EYLqVxnT1jjkhAf7VthjOeztvfvj%2FNjiskwUlB9BI9XBKJqPIDi08hI%2BIJNZtxT5MLQn3YFPLJnXl3%2B%2FlD%2FqB7QzwBxQtokJNlVOWFmli6uXW5RT7rQ8mzy6T5CPR8DuJMB9fGpdPSK9&X-Amz-Signature=61769d4e293292bddff5283bb5e02e7da1ca95ce7aecceb8a8513ebf422f5d52&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYBOVV7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1dN6cEpav%2BchWVa5qqSOmVg89IksrJp11%2BGFAcwDZdAiAXDVNxNdIWWwH45dF5g%2B4Ybpm7HPyn2egI%2BW5pWXcdRir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMWzOBgy3BQa0LAP4aKtwDg6eG5A5uQSXqy36QDJY0eM%2BNjEqWilhpGHDSb8GjFS9VTfjQctUcQtsOz6o0DUILOpXT3AnMMLIgc66HRh4WbZXgkqxPa1N%2B%2F1799cpPRvvn4QDGI2ku5CKBR0vPe7fgkDhADSE4svMmQsrcLD8zzCW%2Bj2J7OZyItKD9xwZ85FNouc12t8OkpRqk%2BvnxVH%2FCCktd%2Ff0NQz0sZLfFQgBai42hKedHsKQ%2Bn4FeEwRsPjAo6bKTFpgoTu8%2FQyqvyKR%2BT88sybJeViPoO1EvnEghIuGJ1y47qCzTeARDrfBbOO7e9y0QcFmPGTx6BYnUVYvco8gRImGfZ1jx%2FWXVI0G7ibOKfIb4h1SnsiSUsVZ2qk7wgQqObOuZLYfGp5W2YUvqplBlS%2BIUEdXGRqM1U1Buc2uFl7Z6c%2FaW2ZFCmeZSSQU2TsQ3%2FoZLlA4FlK4P5BbPZT8H5E2s5Wmz5DpCrfWghUa2KbnMGGyWTEvXvmtBrYGhC6vbbYriyPqkdrtQs9MGUAHv%2FZibM5rx7phm7aViJXKhXROxVRXSI6qheABBqm2%2BJXFUszCqd07ZTlK6iyIdjKurndJNv1piX2rG%2B%2Fa%2FsN%2FYsg8MtqKCxCIXcI8uTAQcYskI606b9CB9WfIw25eMvwY6pgEgIx%2B3GxQNZ4cmV4%2BHcwwu5t28c%2Fk8xMeezC%2FgI93%2FcIkamW%2BdwTnlnl0djKtu%2BfAEd%2Bp%2FphRcxUBurFB8EYLqVxnT1jjkhAf7VthjOeztvfvj%2FNjiskwUlB9BI9XBKJqPIDi08hI%2BIJNZtxT5MLQn3YFPLJnXl3%2B%2FlD%2FqB7QzwBxQtokJNlVOWFmli6uXW5RT7rQ8mzy6T5CPR8DuJMB9fGpdPSK9&X-Amz-Signature=543e21172fe3793d7959a96f9135aa65921590b6a8016b02c58dc2e2e554ebac&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYBOVV7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1dN6cEpav%2BchWVa5qqSOmVg89IksrJp11%2BGFAcwDZdAiAXDVNxNdIWWwH45dF5g%2B4Ybpm7HPyn2egI%2BW5pWXcdRir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMWzOBgy3BQa0LAP4aKtwDg6eG5A5uQSXqy36QDJY0eM%2BNjEqWilhpGHDSb8GjFS9VTfjQctUcQtsOz6o0DUILOpXT3AnMMLIgc66HRh4WbZXgkqxPa1N%2B%2F1799cpPRvvn4QDGI2ku5CKBR0vPe7fgkDhADSE4svMmQsrcLD8zzCW%2Bj2J7OZyItKD9xwZ85FNouc12t8OkpRqk%2BvnxVH%2FCCktd%2Ff0NQz0sZLfFQgBai42hKedHsKQ%2Bn4FeEwRsPjAo6bKTFpgoTu8%2FQyqvyKR%2BT88sybJeViPoO1EvnEghIuGJ1y47qCzTeARDrfBbOO7e9y0QcFmPGTx6BYnUVYvco8gRImGfZ1jx%2FWXVI0G7ibOKfIb4h1SnsiSUsVZ2qk7wgQqObOuZLYfGp5W2YUvqplBlS%2BIUEdXGRqM1U1Buc2uFl7Z6c%2FaW2ZFCmeZSSQU2TsQ3%2FoZLlA4FlK4P5BbPZT8H5E2s5Wmz5DpCrfWghUa2KbnMGGyWTEvXvmtBrYGhC6vbbYriyPqkdrtQs9MGUAHv%2FZibM5rx7phm7aViJXKhXROxVRXSI6qheABBqm2%2BJXFUszCqd07ZTlK6iyIdjKurndJNv1piX2rG%2B%2Fa%2FsN%2FYsg8MtqKCxCIXcI8uTAQcYskI606b9CB9WfIw25eMvwY6pgEgIx%2B3GxQNZ4cmV4%2BHcwwu5t28c%2Fk8xMeezC%2FgI93%2FcIkamW%2BdwTnlnl0djKtu%2BfAEd%2Bp%2FphRcxUBurFB8EYLqVxnT1jjkhAf7VthjOeztvfvj%2FNjiskwUlB9BI9XBKJqPIDi08hI%2BIJNZtxT5MLQn3YFPLJnXl3%2B%2FlD%2FqB7QzwBxQtokJNlVOWFmli6uXW5RT7rQ8mzy6T5CPR8DuJMB9fGpdPSK9&X-Amz-Signature=838924fac1fdb2bd54b5e3a011a9a7ec3955a70c460abf2a0a12a369df88cffd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYBOVV7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1dN6cEpav%2BchWVa5qqSOmVg89IksrJp11%2BGFAcwDZdAiAXDVNxNdIWWwH45dF5g%2B4Ybpm7HPyn2egI%2BW5pWXcdRir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMWzOBgy3BQa0LAP4aKtwDg6eG5A5uQSXqy36QDJY0eM%2BNjEqWilhpGHDSb8GjFS9VTfjQctUcQtsOz6o0DUILOpXT3AnMMLIgc66HRh4WbZXgkqxPa1N%2B%2F1799cpPRvvn4QDGI2ku5CKBR0vPe7fgkDhADSE4svMmQsrcLD8zzCW%2Bj2J7OZyItKD9xwZ85FNouc12t8OkpRqk%2BvnxVH%2FCCktd%2Ff0NQz0sZLfFQgBai42hKedHsKQ%2Bn4FeEwRsPjAo6bKTFpgoTu8%2FQyqvyKR%2BT88sybJeViPoO1EvnEghIuGJ1y47qCzTeARDrfBbOO7e9y0QcFmPGTx6BYnUVYvco8gRImGfZ1jx%2FWXVI0G7ibOKfIb4h1SnsiSUsVZ2qk7wgQqObOuZLYfGp5W2YUvqplBlS%2BIUEdXGRqM1U1Buc2uFl7Z6c%2FaW2ZFCmeZSSQU2TsQ3%2FoZLlA4FlK4P5BbPZT8H5E2s5Wmz5DpCrfWghUa2KbnMGGyWTEvXvmtBrYGhC6vbbYriyPqkdrtQs9MGUAHv%2FZibM5rx7phm7aViJXKhXROxVRXSI6qheABBqm2%2BJXFUszCqd07ZTlK6iyIdjKurndJNv1piX2rG%2B%2Fa%2FsN%2FYsg8MtqKCxCIXcI8uTAQcYskI606b9CB9WfIw25eMvwY6pgEgIx%2B3GxQNZ4cmV4%2BHcwwu5t28c%2Fk8xMeezC%2FgI93%2FcIkamW%2BdwTnlnl0djKtu%2BfAEd%2Bp%2FphRcxUBurFB8EYLqVxnT1jjkhAf7VthjOeztvfvj%2FNjiskwUlB9BI9XBKJqPIDi08hI%2BIJNZtxT5MLQn3YFPLJnXl3%2B%2FlD%2FqB7QzwBxQtokJNlVOWFmli6uXW5RT7rQ8mzy6T5CPR8DuJMB9fGpdPSK9&X-Amz-Signature=ca6ae086dcecd6689b75d549761634edec090212be4423db23b4c1dc98aae8e1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYBOVV7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1dN6cEpav%2BchWVa5qqSOmVg89IksrJp11%2BGFAcwDZdAiAXDVNxNdIWWwH45dF5g%2B4Ybpm7HPyn2egI%2BW5pWXcdRir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMWzOBgy3BQa0LAP4aKtwDg6eG5A5uQSXqy36QDJY0eM%2BNjEqWilhpGHDSb8GjFS9VTfjQctUcQtsOz6o0DUILOpXT3AnMMLIgc66HRh4WbZXgkqxPa1N%2B%2F1799cpPRvvn4QDGI2ku5CKBR0vPe7fgkDhADSE4svMmQsrcLD8zzCW%2Bj2J7OZyItKD9xwZ85FNouc12t8OkpRqk%2BvnxVH%2FCCktd%2Ff0NQz0sZLfFQgBai42hKedHsKQ%2Bn4FeEwRsPjAo6bKTFpgoTu8%2FQyqvyKR%2BT88sybJeViPoO1EvnEghIuGJ1y47qCzTeARDrfBbOO7e9y0QcFmPGTx6BYnUVYvco8gRImGfZ1jx%2FWXVI0G7ibOKfIb4h1SnsiSUsVZ2qk7wgQqObOuZLYfGp5W2YUvqplBlS%2BIUEdXGRqM1U1Buc2uFl7Z6c%2FaW2ZFCmeZSSQU2TsQ3%2FoZLlA4FlK4P5BbPZT8H5E2s5Wmz5DpCrfWghUa2KbnMGGyWTEvXvmtBrYGhC6vbbYriyPqkdrtQs9MGUAHv%2FZibM5rx7phm7aViJXKhXROxVRXSI6qheABBqm2%2BJXFUszCqd07ZTlK6iyIdjKurndJNv1piX2rG%2B%2Fa%2FsN%2FYsg8MtqKCxCIXcI8uTAQcYskI606b9CB9WfIw25eMvwY6pgEgIx%2B3GxQNZ4cmV4%2BHcwwu5t28c%2Fk8xMeezC%2FgI93%2FcIkamW%2BdwTnlnl0djKtu%2BfAEd%2Bp%2FphRcxUBurFB8EYLqVxnT1jjkhAf7VthjOeztvfvj%2FNjiskwUlB9BI9XBKJqPIDi08hI%2BIJNZtxT5MLQn3YFPLJnXl3%2B%2FlD%2FqB7QzwBxQtokJNlVOWFmli6uXW5RT7rQ8mzy6T5CPR8DuJMB9fGpdPSK9&X-Amz-Signature=f27bea3cf05444c7208b89973570ab3357a97cc4c1c14e4444c0d20724e35d59&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
