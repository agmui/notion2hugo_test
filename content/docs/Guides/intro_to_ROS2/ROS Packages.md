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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X4ZTZE3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVJwN%2BiRxVDSfPzgN09WbedoIgYeu%2FaFm%2FS%2B2o4mrQLgIgCOcdDW0SKGizCzsHoV36KCfwv7y7q5g61NdOWdTXqhAq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDaqH4CrsFeo3AB1MSrcA0hUuV8tWOt%2F6aNIDu3HNYGgyBM0W1Ps85GViorzscbGWL%2BzmMvHc5aP9WQxNAG%2F8aY57Lu6L3gNrb2uGh8UOge0tvSZ%2FrC5fubbLV%2BJkaglObhL8CS1NdC8dU0kAk%2Bu%2Bd6Q%2Fn3tTq5GE95YvyJPLuEQvEghqFJq3x6OzRCdgJAus9q%2FDEQlOT0Eggx1JSA9J7s%2BFYBu4fF82YvCqF9vM9XVpi%2FKy4yBpiulfQKAmmbzW5wb29vABpX1xGtX9huLwb6sEDdBRpsXxEf1AfmcPezb4Crs5mu6ombuZBURcwhznLEeSCPpe%2BxB7LcspnOsR%2FXoompDeB1S3LlK9W9n9tYtK%2FNh7s4kROZsk5dJ2hNW17mG1irXVF4Z0rMM1NKDMzVPZs%2F2eBc2DfmUrUG4FVeU9ddyzBghjCEIm7SBqalzPH0seA0ZeXQebgBDGb2nZ8IwjtVY3UkH5lrMelA8krYOulr3CTkgfvviCZIMK0duJMt%2FwaLh5c2M2RczinWcQrcOfVIsDY3pgClDKKbMBikSQ7QPTcIfWbbt%2FlVECDI%2Bcxo6wqytGHIsccoD8aaLGDXKcYYnhAVd5668O66w1Q56M90%2BHqToDd90O4XOjF4uZrKpQWf%2Fvfl9g6NGMOmiu8AGOqUBIWCIZ3P%2BSsGo0G6o7iWrr3V3fgmt1M2e9f8xdkWhdx2W5D28ZBJZgS4cWiY7ap1MWNlQHAq3VChc2gv%2FCGP9oC%2BQKVO0X42HNVoYP1g5Lsi%2Fd%2Bv7WhLSsFD43iZfpx7lVSI%2FbRvRNEhoHeMjahu%2BFz08kfwq8Q6nt4jUhdiMX4L23LmKqgR%2BZ3pB6F22w70NF1thzzBRJx2rMf%2FSPZlzECmy9taF&X-Amz-Signature=827faff825f2e00992811c7a266fe14fafb6054e0abf552e8683b9910ecae08c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X4ZTZE3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVJwN%2BiRxVDSfPzgN09WbedoIgYeu%2FaFm%2FS%2B2o4mrQLgIgCOcdDW0SKGizCzsHoV36KCfwv7y7q5g61NdOWdTXqhAq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDaqH4CrsFeo3AB1MSrcA0hUuV8tWOt%2F6aNIDu3HNYGgyBM0W1Ps85GViorzscbGWL%2BzmMvHc5aP9WQxNAG%2F8aY57Lu6L3gNrb2uGh8UOge0tvSZ%2FrC5fubbLV%2BJkaglObhL8CS1NdC8dU0kAk%2Bu%2Bd6Q%2Fn3tTq5GE95YvyJPLuEQvEghqFJq3x6OzRCdgJAus9q%2FDEQlOT0Eggx1JSA9J7s%2BFYBu4fF82YvCqF9vM9XVpi%2FKy4yBpiulfQKAmmbzW5wb29vABpX1xGtX9huLwb6sEDdBRpsXxEf1AfmcPezb4Crs5mu6ombuZBURcwhznLEeSCPpe%2BxB7LcspnOsR%2FXoompDeB1S3LlK9W9n9tYtK%2FNh7s4kROZsk5dJ2hNW17mG1irXVF4Z0rMM1NKDMzVPZs%2F2eBc2DfmUrUG4FVeU9ddyzBghjCEIm7SBqalzPH0seA0ZeXQebgBDGb2nZ8IwjtVY3UkH5lrMelA8krYOulr3CTkgfvviCZIMK0duJMt%2FwaLh5c2M2RczinWcQrcOfVIsDY3pgClDKKbMBikSQ7QPTcIfWbbt%2FlVECDI%2Bcxo6wqytGHIsccoD8aaLGDXKcYYnhAVd5668O66w1Q56M90%2BHqToDd90O4XOjF4uZrKpQWf%2Fvfl9g6NGMOmiu8AGOqUBIWCIZ3P%2BSsGo0G6o7iWrr3V3fgmt1M2e9f8xdkWhdx2W5D28ZBJZgS4cWiY7ap1MWNlQHAq3VChc2gv%2FCGP9oC%2BQKVO0X42HNVoYP1g5Lsi%2Fd%2Bv7WhLSsFD43iZfpx7lVSI%2FbRvRNEhoHeMjahu%2BFz08kfwq8Q6nt4jUhdiMX4L23LmKqgR%2BZ3pB6F22w70NF1thzzBRJx2rMf%2FSPZlzECmy9taF&X-Amz-Signature=29c4e940674086a7a7dd8700525661713af329bdd7e26645f73a0f1a7a50959e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X4ZTZE3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVJwN%2BiRxVDSfPzgN09WbedoIgYeu%2FaFm%2FS%2B2o4mrQLgIgCOcdDW0SKGizCzsHoV36KCfwv7y7q5g61NdOWdTXqhAq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDaqH4CrsFeo3AB1MSrcA0hUuV8tWOt%2F6aNIDu3HNYGgyBM0W1Ps85GViorzscbGWL%2BzmMvHc5aP9WQxNAG%2F8aY57Lu6L3gNrb2uGh8UOge0tvSZ%2FrC5fubbLV%2BJkaglObhL8CS1NdC8dU0kAk%2Bu%2Bd6Q%2Fn3tTq5GE95YvyJPLuEQvEghqFJq3x6OzRCdgJAus9q%2FDEQlOT0Eggx1JSA9J7s%2BFYBu4fF82YvCqF9vM9XVpi%2FKy4yBpiulfQKAmmbzW5wb29vABpX1xGtX9huLwb6sEDdBRpsXxEf1AfmcPezb4Crs5mu6ombuZBURcwhznLEeSCPpe%2BxB7LcspnOsR%2FXoompDeB1S3LlK9W9n9tYtK%2FNh7s4kROZsk5dJ2hNW17mG1irXVF4Z0rMM1NKDMzVPZs%2F2eBc2DfmUrUG4FVeU9ddyzBghjCEIm7SBqalzPH0seA0ZeXQebgBDGb2nZ8IwjtVY3UkH5lrMelA8krYOulr3CTkgfvviCZIMK0duJMt%2FwaLh5c2M2RczinWcQrcOfVIsDY3pgClDKKbMBikSQ7QPTcIfWbbt%2FlVECDI%2Bcxo6wqytGHIsccoD8aaLGDXKcYYnhAVd5668O66w1Q56M90%2BHqToDd90O4XOjF4uZrKpQWf%2Fvfl9g6NGMOmiu8AGOqUBIWCIZ3P%2BSsGo0G6o7iWrr3V3fgmt1M2e9f8xdkWhdx2W5D28ZBJZgS4cWiY7ap1MWNlQHAq3VChc2gv%2FCGP9oC%2BQKVO0X42HNVoYP1g5Lsi%2Fd%2Bv7WhLSsFD43iZfpx7lVSI%2FbRvRNEhoHeMjahu%2BFz08kfwq8Q6nt4jUhdiMX4L23LmKqgR%2BZ3pB6F22w70NF1thzzBRJx2rMf%2FSPZlzECmy9taF&X-Amz-Signature=becdbf4463a006fae1da3d33c3caa2d7e1163daa2b14ae23b85364d572beed63&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X4ZTZE3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVJwN%2BiRxVDSfPzgN09WbedoIgYeu%2FaFm%2FS%2B2o4mrQLgIgCOcdDW0SKGizCzsHoV36KCfwv7y7q5g61NdOWdTXqhAq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDaqH4CrsFeo3AB1MSrcA0hUuV8tWOt%2F6aNIDu3HNYGgyBM0W1Ps85GViorzscbGWL%2BzmMvHc5aP9WQxNAG%2F8aY57Lu6L3gNrb2uGh8UOge0tvSZ%2FrC5fubbLV%2BJkaglObhL8CS1NdC8dU0kAk%2Bu%2Bd6Q%2Fn3tTq5GE95YvyJPLuEQvEghqFJq3x6OzRCdgJAus9q%2FDEQlOT0Eggx1JSA9J7s%2BFYBu4fF82YvCqF9vM9XVpi%2FKy4yBpiulfQKAmmbzW5wb29vABpX1xGtX9huLwb6sEDdBRpsXxEf1AfmcPezb4Crs5mu6ombuZBURcwhznLEeSCPpe%2BxB7LcspnOsR%2FXoompDeB1S3LlK9W9n9tYtK%2FNh7s4kROZsk5dJ2hNW17mG1irXVF4Z0rMM1NKDMzVPZs%2F2eBc2DfmUrUG4FVeU9ddyzBghjCEIm7SBqalzPH0seA0ZeXQebgBDGb2nZ8IwjtVY3UkH5lrMelA8krYOulr3CTkgfvviCZIMK0duJMt%2FwaLh5c2M2RczinWcQrcOfVIsDY3pgClDKKbMBikSQ7QPTcIfWbbt%2FlVECDI%2Bcxo6wqytGHIsccoD8aaLGDXKcYYnhAVd5668O66w1Q56M90%2BHqToDd90O4XOjF4uZrKpQWf%2Fvfl9g6NGMOmiu8AGOqUBIWCIZ3P%2BSsGo0G6o7iWrr3V3fgmt1M2e9f8xdkWhdx2W5D28ZBJZgS4cWiY7ap1MWNlQHAq3VChc2gv%2FCGP9oC%2BQKVO0X42HNVoYP1g5Lsi%2Fd%2Bv7WhLSsFD43iZfpx7lVSI%2FbRvRNEhoHeMjahu%2BFz08kfwq8Q6nt4jUhdiMX4L23LmKqgR%2BZ3pB6F22w70NF1thzzBRJx2rMf%2FSPZlzECmy9taF&X-Amz-Signature=04b7af89f8c1b75b496f0b41ef71674ad946067086531bf3a1bc8bfff60be86c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X4ZTZE3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVJwN%2BiRxVDSfPzgN09WbedoIgYeu%2FaFm%2FS%2B2o4mrQLgIgCOcdDW0SKGizCzsHoV36KCfwv7y7q5g61NdOWdTXqhAq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDaqH4CrsFeo3AB1MSrcA0hUuV8tWOt%2F6aNIDu3HNYGgyBM0W1Ps85GViorzscbGWL%2BzmMvHc5aP9WQxNAG%2F8aY57Lu6L3gNrb2uGh8UOge0tvSZ%2FrC5fubbLV%2BJkaglObhL8CS1NdC8dU0kAk%2Bu%2Bd6Q%2Fn3tTq5GE95YvyJPLuEQvEghqFJq3x6OzRCdgJAus9q%2FDEQlOT0Eggx1JSA9J7s%2BFYBu4fF82YvCqF9vM9XVpi%2FKy4yBpiulfQKAmmbzW5wb29vABpX1xGtX9huLwb6sEDdBRpsXxEf1AfmcPezb4Crs5mu6ombuZBURcwhznLEeSCPpe%2BxB7LcspnOsR%2FXoompDeB1S3LlK9W9n9tYtK%2FNh7s4kROZsk5dJ2hNW17mG1irXVF4Z0rMM1NKDMzVPZs%2F2eBc2DfmUrUG4FVeU9ddyzBghjCEIm7SBqalzPH0seA0ZeXQebgBDGb2nZ8IwjtVY3UkH5lrMelA8krYOulr3CTkgfvviCZIMK0duJMt%2FwaLh5c2M2RczinWcQrcOfVIsDY3pgClDKKbMBikSQ7QPTcIfWbbt%2FlVECDI%2Bcxo6wqytGHIsccoD8aaLGDXKcYYnhAVd5668O66w1Q56M90%2BHqToDd90O4XOjF4uZrKpQWf%2Fvfl9g6NGMOmiu8AGOqUBIWCIZ3P%2BSsGo0G6o7iWrr3V3fgmt1M2e9f8xdkWhdx2W5D28ZBJZgS4cWiY7ap1MWNlQHAq3VChc2gv%2FCGP9oC%2BQKVO0X42HNVoYP1g5Lsi%2Fd%2Bv7WhLSsFD43iZfpx7lVSI%2FbRvRNEhoHeMjahu%2BFz08kfwq8Q6nt4jUhdiMX4L23LmKqgR%2BZ3pB6F22w70NF1thzzBRJx2rMf%2FSPZlzECmy9taF&X-Amz-Signature=2f94d4a72f8c935bcb8e5c822a79676672f6b76a68132c4cbcc33da021753677&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X4ZTZE3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVJwN%2BiRxVDSfPzgN09WbedoIgYeu%2FaFm%2FS%2B2o4mrQLgIgCOcdDW0SKGizCzsHoV36KCfwv7y7q5g61NdOWdTXqhAq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDaqH4CrsFeo3AB1MSrcA0hUuV8tWOt%2F6aNIDu3HNYGgyBM0W1Ps85GViorzscbGWL%2BzmMvHc5aP9WQxNAG%2F8aY57Lu6L3gNrb2uGh8UOge0tvSZ%2FrC5fubbLV%2BJkaglObhL8CS1NdC8dU0kAk%2Bu%2Bd6Q%2Fn3tTq5GE95YvyJPLuEQvEghqFJq3x6OzRCdgJAus9q%2FDEQlOT0Eggx1JSA9J7s%2BFYBu4fF82YvCqF9vM9XVpi%2FKy4yBpiulfQKAmmbzW5wb29vABpX1xGtX9huLwb6sEDdBRpsXxEf1AfmcPezb4Crs5mu6ombuZBURcwhznLEeSCPpe%2BxB7LcspnOsR%2FXoompDeB1S3LlK9W9n9tYtK%2FNh7s4kROZsk5dJ2hNW17mG1irXVF4Z0rMM1NKDMzVPZs%2F2eBc2DfmUrUG4FVeU9ddyzBghjCEIm7SBqalzPH0seA0ZeXQebgBDGb2nZ8IwjtVY3UkH5lrMelA8krYOulr3CTkgfvviCZIMK0duJMt%2FwaLh5c2M2RczinWcQrcOfVIsDY3pgClDKKbMBikSQ7QPTcIfWbbt%2FlVECDI%2Bcxo6wqytGHIsccoD8aaLGDXKcYYnhAVd5668O66w1Q56M90%2BHqToDd90O4XOjF4uZrKpQWf%2Fvfl9g6NGMOmiu8AGOqUBIWCIZ3P%2BSsGo0G6o7iWrr3V3fgmt1M2e9f8xdkWhdx2W5D28ZBJZgS4cWiY7ap1MWNlQHAq3VChc2gv%2FCGP9oC%2BQKVO0X42HNVoYP1g5Lsi%2Fd%2Bv7WhLSsFD43iZfpx7lVSI%2FbRvRNEhoHeMjahu%2BFz08kfwq8Q6nt4jUhdiMX4L23LmKqgR%2BZ3pB6F22w70NF1thzzBRJx2rMf%2FSPZlzECmy9taF&X-Amz-Signature=5dee209e47417454910ce89f7eadcc106aefb291b32ff9de40c55cae6dc8f6df&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X4ZTZE3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVJwN%2BiRxVDSfPzgN09WbedoIgYeu%2FaFm%2FS%2B2o4mrQLgIgCOcdDW0SKGizCzsHoV36KCfwv7y7q5g61NdOWdTXqhAq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDaqH4CrsFeo3AB1MSrcA0hUuV8tWOt%2F6aNIDu3HNYGgyBM0W1Ps85GViorzscbGWL%2BzmMvHc5aP9WQxNAG%2F8aY57Lu6L3gNrb2uGh8UOge0tvSZ%2FrC5fubbLV%2BJkaglObhL8CS1NdC8dU0kAk%2Bu%2Bd6Q%2Fn3tTq5GE95YvyJPLuEQvEghqFJq3x6OzRCdgJAus9q%2FDEQlOT0Eggx1JSA9J7s%2BFYBu4fF82YvCqF9vM9XVpi%2FKy4yBpiulfQKAmmbzW5wb29vABpX1xGtX9huLwb6sEDdBRpsXxEf1AfmcPezb4Crs5mu6ombuZBURcwhznLEeSCPpe%2BxB7LcspnOsR%2FXoompDeB1S3LlK9W9n9tYtK%2FNh7s4kROZsk5dJ2hNW17mG1irXVF4Z0rMM1NKDMzVPZs%2F2eBc2DfmUrUG4FVeU9ddyzBghjCEIm7SBqalzPH0seA0ZeXQebgBDGb2nZ8IwjtVY3UkH5lrMelA8krYOulr3CTkgfvviCZIMK0duJMt%2FwaLh5c2M2RczinWcQrcOfVIsDY3pgClDKKbMBikSQ7QPTcIfWbbt%2FlVECDI%2Bcxo6wqytGHIsccoD8aaLGDXKcYYnhAVd5668O66w1Q56M90%2BHqToDd90O4XOjF4uZrKpQWf%2Fvfl9g6NGMOmiu8AGOqUBIWCIZ3P%2BSsGo0G6o7iWrr3V3fgmt1M2e9f8xdkWhdx2W5D28ZBJZgS4cWiY7ap1MWNlQHAq3VChc2gv%2FCGP9oC%2BQKVO0X42HNVoYP1g5Lsi%2Fd%2Bv7WhLSsFD43iZfpx7lVSI%2FbRvRNEhoHeMjahu%2BFz08kfwq8Q6nt4jUhdiMX4L23LmKqgR%2BZ3pB6F22w70NF1thzzBRJx2rMf%2FSPZlzECmy9taF&X-Amz-Signature=ac7bc3ded2e056f62a3b9f62adb9fafa070e9a365098f2e56f94be7e5f5a96ab&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
