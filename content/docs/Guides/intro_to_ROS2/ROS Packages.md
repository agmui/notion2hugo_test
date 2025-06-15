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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGYJRMVG%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD86%2FVCERbH3QKEIXN1t8qUE7DPWfTclnvXGkbtVd1O5QIgR3OMxgcin1tuiWLDBz0IBu17dM03BVsP2uo%2B37hEoRsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAz4DeVLprXy3rXQkCrcAz2TrP2jQRgo8DNIJNMdlRb8sDDBLAeB0LuuXDg6nb7gPupqDxhKynoRqHbBX3KfMvQEpA4116gvcTnhLnZ%2FW06%2F4gfUZUtPdKxbx%2FQlxF%2F9%2BOPSZW0E2GJwAFeV3AWCF6m%2BN2BWVswxMJ4D4NBBSvPWDF9CttdyUEzzWmL6ND%2FpyVG3cwtpErcyloUo7KTJ52I01tYuBlfR59cB8SwNr0ZUUyjCyZC%2BaCK4MbNW3dRS1Z3IjNuV5QYrVc2tglTFZxtX0sNpXKK9BfTYxbvRBz23JUHTCGzTjl5LvYWxhe0k%2Byq4AlIqTADbINZnuAHNLzIbuHBN6rFH4NDPFN5ZrezX7uhVPx1LKKfmKYkx4fXzEIg2lFukZfZH%2FKeroMxQW2fMfVkNaEFCzefZoKpvkmUHuR9OpIf4PIw668kUo1%2B01iafBtiodfLQmQ8tTtV%2BS1kN7SiWj2oE%2FEIbk%2F46pjUAtlQm4RZ82X4Ma52PHzT9nWdmDBfR124Pi7rOqvFb7cRuCAV5YLYschOqE6eQUoUsUpofnOFnstN5Y89LFuaTME5j85eVqqnQFe4kyXqSFFkemtQ4O0xj7OEmC0yFigaTsSGX7KJN9vfsNTwRgoyYnoMnj7VHhv7dW9wcMOCEusIGOqUBEMDBiTW%2FPtOpexXGOQNmaJHDJNOa%2BDwdpN4ERizIbpWkP7L8OLkkRN%2FFZgbK0X2FhcwReGxd%2BBEqPX5ExhWwYP5lYEypyGmBq7nbhPYLm%2FIaTSAWVmk892knBfcvE%2Fa96WVnYVAeG6Z5Udw0sM6cDbEx8%2BGdX7Y50ouQYD%2BVPObo7RpVN9KvAqna%2B%2FavTIUBdMzwLND5n%2F7HLndc9m6b2McNlaU%2F&X-Amz-Signature=22f37941a3d91d1dec76852ea5693d2d6117b2b1ce688a956983a9a474475f98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGYJRMVG%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD86%2FVCERbH3QKEIXN1t8qUE7DPWfTclnvXGkbtVd1O5QIgR3OMxgcin1tuiWLDBz0IBu17dM03BVsP2uo%2B37hEoRsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAz4DeVLprXy3rXQkCrcAz2TrP2jQRgo8DNIJNMdlRb8sDDBLAeB0LuuXDg6nb7gPupqDxhKynoRqHbBX3KfMvQEpA4116gvcTnhLnZ%2FW06%2F4gfUZUtPdKxbx%2FQlxF%2F9%2BOPSZW0E2GJwAFeV3AWCF6m%2BN2BWVswxMJ4D4NBBSvPWDF9CttdyUEzzWmL6ND%2FpyVG3cwtpErcyloUo7KTJ52I01tYuBlfR59cB8SwNr0ZUUyjCyZC%2BaCK4MbNW3dRS1Z3IjNuV5QYrVc2tglTFZxtX0sNpXKK9BfTYxbvRBz23JUHTCGzTjl5LvYWxhe0k%2Byq4AlIqTADbINZnuAHNLzIbuHBN6rFH4NDPFN5ZrezX7uhVPx1LKKfmKYkx4fXzEIg2lFukZfZH%2FKeroMxQW2fMfVkNaEFCzefZoKpvkmUHuR9OpIf4PIw668kUo1%2B01iafBtiodfLQmQ8tTtV%2BS1kN7SiWj2oE%2FEIbk%2F46pjUAtlQm4RZ82X4Ma52PHzT9nWdmDBfR124Pi7rOqvFb7cRuCAV5YLYschOqE6eQUoUsUpofnOFnstN5Y89LFuaTME5j85eVqqnQFe4kyXqSFFkemtQ4O0xj7OEmC0yFigaTsSGX7KJN9vfsNTwRgoyYnoMnj7VHhv7dW9wcMOCEusIGOqUBEMDBiTW%2FPtOpexXGOQNmaJHDJNOa%2BDwdpN4ERizIbpWkP7L8OLkkRN%2FFZgbK0X2FhcwReGxd%2BBEqPX5ExhWwYP5lYEypyGmBq7nbhPYLm%2FIaTSAWVmk892knBfcvE%2Fa96WVnYVAeG6Z5Udw0sM6cDbEx8%2BGdX7Y50ouQYD%2BVPObo7RpVN9KvAqna%2B%2FavTIUBdMzwLND5n%2F7HLndc9m6b2McNlaU%2F&X-Amz-Signature=d123c179bcbae595e67d5fbe726c782c80a17be3d1db03b4c1173f0db47a4a05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGYJRMVG%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD86%2FVCERbH3QKEIXN1t8qUE7DPWfTclnvXGkbtVd1O5QIgR3OMxgcin1tuiWLDBz0IBu17dM03BVsP2uo%2B37hEoRsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAz4DeVLprXy3rXQkCrcAz2TrP2jQRgo8DNIJNMdlRb8sDDBLAeB0LuuXDg6nb7gPupqDxhKynoRqHbBX3KfMvQEpA4116gvcTnhLnZ%2FW06%2F4gfUZUtPdKxbx%2FQlxF%2F9%2BOPSZW0E2GJwAFeV3AWCF6m%2BN2BWVswxMJ4D4NBBSvPWDF9CttdyUEzzWmL6ND%2FpyVG3cwtpErcyloUo7KTJ52I01tYuBlfR59cB8SwNr0ZUUyjCyZC%2BaCK4MbNW3dRS1Z3IjNuV5QYrVc2tglTFZxtX0sNpXKK9BfTYxbvRBz23JUHTCGzTjl5LvYWxhe0k%2Byq4AlIqTADbINZnuAHNLzIbuHBN6rFH4NDPFN5ZrezX7uhVPx1LKKfmKYkx4fXzEIg2lFukZfZH%2FKeroMxQW2fMfVkNaEFCzefZoKpvkmUHuR9OpIf4PIw668kUo1%2B01iafBtiodfLQmQ8tTtV%2BS1kN7SiWj2oE%2FEIbk%2F46pjUAtlQm4RZ82X4Ma52PHzT9nWdmDBfR124Pi7rOqvFb7cRuCAV5YLYschOqE6eQUoUsUpofnOFnstN5Y89LFuaTME5j85eVqqnQFe4kyXqSFFkemtQ4O0xj7OEmC0yFigaTsSGX7KJN9vfsNTwRgoyYnoMnj7VHhv7dW9wcMOCEusIGOqUBEMDBiTW%2FPtOpexXGOQNmaJHDJNOa%2BDwdpN4ERizIbpWkP7L8OLkkRN%2FFZgbK0X2FhcwReGxd%2BBEqPX5ExhWwYP5lYEypyGmBq7nbhPYLm%2FIaTSAWVmk892knBfcvE%2Fa96WVnYVAeG6Z5Udw0sM6cDbEx8%2BGdX7Y50ouQYD%2BVPObo7RpVN9KvAqna%2B%2FavTIUBdMzwLND5n%2F7HLndc9m6b2McNlaU%2F&X-Amz-Signature=a7ec8c717d4b707d584b0266288df582e086d406f01b3053406c84c9aa00075e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGYJRMVG%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD86%2FVCERbH3QKEIXN1t8qUE7DPWfTclnvXGkbtVd1O5QIgR3OMxgcin1tuiWLDBz0IBu17dM03BVsP2uo%2B37hEoRsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAz4DeVLprXy3rXQkCrcAz2TrP2jQRgo8DNIJNMdlRb8sDDBLAeB0LuuXDg6nb7gPupqDxhKynoRqHbBX3KfMvQEpA4116gvcTnhLnZ%2FW06%2F4gfUZUtPdKxbx%2FQlxF%2F9%2BOPSZW0E2GJwAFeV3AWCF6m%2BN2BWVswxMJ4D4NBBSvPWDF9CttdyUEzzWmL6ND%2FpyVG3cwtpErcyloUo7KTJ52I01tYuBlfR59cB8SwNr0ZUUyjCyZC%2BaCK4MbNW3dRS1Z3IjNuV5QYrVc2tglTFZxtX0sNpXKK9BfTYxbvRBz23JUHTCGzTjl5LvYWxhe0k%2Byq4AlIqTADbINZnuAHNLzIbuHBN6rFH4NDPFN5ZrezX7uhVPx1LKKfmKYkx4fXzEIg2lFukZfZH%2FKeroMxQW2fMfVkNaEFCzefZoKpvkmUHuR9OpIf4PIw668kUo1%2B01iafBtiodfLQmQ8tTtV%2BS1kN7SiWj2oE%2FEIbk%2F46pjUAtlQm4RZ82X4Ma52PHzT9nWdmDBfR124Pi7rOqvFb7cRuCAV5YLYschOqE6eQUoUsUpofnOFnstN5Y89LFuaTME5j85eVqqnQFe4kyXqSFFkemtQ4O0xj7OEmC0yFigaTsSGX7KJN9vfsNTwRgoyYnoMnj7VHhv7dW9wcMOCEusIGOqUBEMDBiTW%2FPtOpexXGOQNmaJHDJNOa%2BDwdpN4ERizIbpWkP7L8OLkkRN%2FFZgbK0X2FhcwReGxd%2BBEqPX5ExhWwYP5lYEypyGmBq7nbhPYLm%2FIaTSAWVmk892knBfcvE%2Fa96WVnYVAeG6Z5Udw0sM6cDbEx8%2BGdX7Y50ouQYD%2BVPObo7RpVN9KvAqna%2B%2FavTIUBdMzwLND5n%2F7HLndc9m6b2McNlaU%2F&X-Amz-Signature=20c885dd67c85b68e1176430fe7c57b71f066299ab866183ddaaae8fd949a6fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGYJRMVG%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD86%2FVCERbH3QKEIXN1t8qUE7DPWfTclnvXGkbtVd1O5QIgR3OMxgcin1tuiWLDBz0IBu17dM03BVsP2uo%2B37hEoRsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAz4DeVLprXy3rXQkCrcAz2TrP2jQRgo8DNIJNMdlRb8sDDBLAeB0LuuXDg6nb7gPupqDxhKynoRqHbBX3KfMvQEpA4116gvcTnhLnZ%2FW06%2F4gfUZUtPdKxbx%2FQlxF%2F9%2BOPSZW0E2GJwAFeV3AWCF6m%2BN2BWVswxMJ4D4NBBSvPWDF9CttdyUEzzWmL6ND%2FpyVG3cwtpErcyloUo7KTJ52I01tYuBlfR59cB8SwNr0ZUUyjCyZC%2BaCK4MbNW3dRS1Z3IjNuV5QYrVc2tglTFZxtX0sNpXKK9BfTYxbvRBz23JUHTCGzTjl5LvYWxhe0k%2Byq4AlIqTADbINZnuAHNLzIbuHBN6rFH4NDPFN5ZrezX7uhVPx1LKKfmKYkx4fXzEIg2lFukZfZH%2FKeroMxQW2fMfVkNaEFCzefZoKpvkmUHuR9OpIf4PIw668kUo1%2B01iafBtiodfLQmQ8tTtV%2BS1kN7SiWj2oE%2FEIbk%2F46pjUAtlQm4RZ82X4Ma52PHzT9nWdmDBfR124Pi7rOqvFb7cRuCAV5YLYschOqE6eQUoUsUpofnOFnstN5Y89LFuaTME5j85eVqqnQFe4kyXqSFFkemtQ4O0xj7OEmC0yFigaTsSGX7KJN9vfsNTwRgoyYnoMnj7VHhv7dW9wcMOCEusIGOqUBEMDBiTW%2FPtOpexXGOQNmaJHDJNOa%2BDwdpN4ERizIbpWkP7L8OLkkRN%2FFZgbK0X2FhcwReGxd%2BBEqPX5ExhWwYP5lYEypyGmBq7nbhPYLm%2FIaTSAWVmk892knBfcvE%2Fa96WVnYVAeG6Z5Udw0sM6cDbEx8%2BGdX7Y50ouQYD%2BVPObo7RpVN9KvAqna%2B%2FavTIUBdMzwLND5n%2F7HLndc9m6b2McNlaU%2F&X-Amz-Signature=41bc61f2247710f32b4e3001fb730c90509ca89df73a4fb4f08bff83c436c1a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGYJRMVG%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD86%2FVCERbH3QKEIXN1t8qUE7DPWfTclnvXGkbtVd1O5QIgR3OMxgcin1tuiWLDBz0IBu17dM03BVsP2uo%2B37hEoRsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAz4DeVLprXy3rXQkCrcAz2TrP2jQRgo8DNIJNMdlRb8sDDBLAeB0LuuXDg6nb7gPupqDxhKynoRqHbBX3KfMvQEpA4116gvcTnhLnZ%2FW06%2F4gfUZUtPdKxbx%2FQlxF%2F9%2BOPSZW0E2GJwAFeV3AWCF6m%2BN2BWVswxMJ4D4NBBSvPWDF9CttdyUEzzWmL6ND%2FpyVG3cwtpErcyloUo7KTJ52I01tYuBlfR59cB8SwNr0ZUUyjCyZC%2BaCK4MbNW3dRS1Z3IjNuV5QYrVc2tglTFZxtX0sNpXKK9BfTYxbvRBz23JUHTCGzTjl5LvYWxhe0k%2Byq4AlIqTADbINZnuAHNLzIbuHBN6rFH4NDPFN5ZrezX7uhVPx1LKKfmKYkx4fXzEIg2lFukZfZH%2FKeroMxQW2fMfVkNaEFCzefZoKpvkmUHuR9OpIf4PIw668kUo1%2B01iafBtiodfLQmQ8tTtV%2BS1kN7SiWj2oE%2FEIbk%2F46pjUAtlQm4RZ82X4Ma52PHzT9nWdmDBfR124Pi7rOqvFb7cRuCAV5YLYschOqE6eQUoUsUpofnOFnstN5Y89LFuaTME5j85eVqqnQFe4kyXqSFFkemtQ4O0xj7OEmC0yFigaTsSGX7KJN9vfsNTwRgoyYnoMnj7VHhv7dW9wcMOCEusIGOqUBEMDBiTW%2FPtOpexXGOQNmaJHDJNOa%2BDwdpN4ERizIbpWkP7L8OLkkRN%2FFZgbK0X2FhcwReGxd%2BBEqPX5ExhWwYP5lYEypyGmBq7nbhPYLm%2FIaTSAWVmk892knBfcvE%2Fa96WVnYVAeG6Z5Udw0sM6cDbEx8%2BGdX7Y50ouQYD%2BVPObo7RpVN9KvAqna%2B%2FavTIUBdMzwLND5n%2F7HLndc9m6b2McNlaU%2F&X-Amz-Signature=d2a9c642210379041503f2da421283c9394627313c2a482305544f631ad2ee77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGYJRMVG%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD86%2FVCERbH3QKEIXN1t8qUE7DPWfTclnvXGkbtVd1O5QIgR3OMxgcin1tuiWLDBz0IBu17dM03BVsP2uo%2B37hEoRsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAz4DeVLprXy3rXQkCrcAz2TrP2jQRgo8DNIJNMdlRb8sDDBLAeB0LuuXDg6nb7gPupqDxhKynoRqHbBX3KfMvQEpA4116gvcTnhLnZ%2FW06%2F4gfUZUtPdKxbx%2FQlxF%2F9%2BOPSZW0E2GJwAFeV3AWCF6m%2BN2BWVswxMJ4D4NBBSvPWDF9CttdyUEzzWmL6ND%2FpyVG3cwtpErcyloUo7KTJ52I01tYuBlfR59cB8SwNr0ZUUyjCyZC%2BaCK4MbNW3dRS1Z3IjNuV5QYrVc2tglTFZxtX0sNpXKK9BfTYxbvRBz23JUHTCGzTjl5LvYWxhe0k%2Byq4AlIqTADbINZnuAHNLzIbuHBN6rFH4NDPFN5ZrezX7uhVPx1LKKfmKYkx4fXzEIg2lFukZfZH%2FKeroMxQW2fMfVkNaEFCzefZoKpvkmUHuR9OpIf4PIw668kUo1%2B01iafBtiodfLQmQ8tTtV%2BS1kN7SiWj2oE%2FEIbk%2F46pjUAtlQm4RZ82X4Ma52PHzT9nWdmDBfR124Pi7rOqvFb7cRuCAV5YLYschOqE6eQUoUsUpofnOFnstN5Y89LFuaTME5j85eVqqnQFe4kyXqSFFkemtQ4O0xj7OEmC0yFigaTsSGX7KJN9vfsNTwRgoyYnoMnj7VHhv7dW9wcMOCEusIGOqUBEMDBiTW%2FPtOpexXGOQNmaJHDJNOa%2BDwdpN4ERizIbpWkP7L8OLkkRN%2FFZgbK0X2FhcwReGxd%2BBEqPX5ExhWwYP5lYEypyGmBq7nbhPYLm%2FIaTSAWVmk892knBfcvE%2Fa96WVnYVAeG6Z5Udw0sM6cDbEx8%2BGdX7Y50ouQYD%2BVPObo7RpVN9KvAqna%2B%2FavTIUBdMzwLND5n%2F7HLndc9m6b2McNlaU%2F&X-Amz-Signature=a113df9a5be8db57ce262e3fbc23c7a155950375ee886d01c94ac43e09b8659e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
