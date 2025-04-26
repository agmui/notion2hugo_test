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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L4T4ER6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw1u5f8%2BWl%2F%2FGq3q7i5nz7VR6hhC1Ektc3wjjN6IcobwIhAKljgK5B46tvmKgaKNX2GKdvjc2abyRK%2FKiimIUY6bQMKv8DCD0QABoMNjM3NDIzMTgzODA1IgwXwTsTyi%2FrdpQsLqsq3AO9OcL%2Fu1d2RM2F%2FDpgX3L9TBPvnaPnbzStOREsd8pH9FUkeH5txszxp728jrQubBfs8kG6ZPua9gvBrp85avgQlX5Y7TsuF9GhWjpqAlVRAfiYm4LnQ7WrozFhg9rf%2BJqC4m%2BIz%2BfRS2BRlEUazr9A3bYThFO0Ed5HL1tRANS9WsDLaG09k%2FTWfIQowehb7wuFOK8P%2F72ak34FwUUK6JUdA7phkBhZbnj82rHNeKrToB76%2FXB421yQziz9NZ55cxrYMtU0zg7ousLCyAF%2BebPQYFWtXttkLn0qU2fK1KU4PaUvixZKeFMwKzYSWeYBCnK8vCbd00UhzjrfjUW8Lfio0Piw39x14M9%2B3IyMo8JI8vz3T3FKxzMve3d9rl9UcqYdF4XoxZvv3CnKlQaePKiBHSg1n%2B18CvqTlNHUuBI%2FYDQXbxhkWodi6AFHKRasocGyVscCCjI7OxrbIstWU1KCgzpn8YXb9k0zUcBtnUytmG82ehxy6UnF%2BAAUQGPvG7PAPo0xTXdyOyvAdaoREkCB%2F1XuIPNkUg0dzuEFv94DzteWI1hD7aL7L0OGNTHzOZP0qpb3X6NiZvt9MA0ElzzTZlD2EHKKEfXROZ2jXZs1DRgvCUMWwKHiGtEJjDDbqrHABjqkAcLMud9XukhAqy%2F11Ic6pqBrxNPXCX6GC90PF%2B6GvBds6a1bLSObr4CpWHsQvSHKLh7COY2hXQiGLbdkIF6Nzsdvl%2BtZWUoy4F72gn6SNuNFBH0GD3dAnf%2FDr7jeqSvBZIBdqNQgCGWC%2B8ep2spIVflc0aWGXndReWBfnKXydDiDxN0gDqIayGalYhshN1ft7JYbLNsGHJxM7T9otqkBpayRf3Wh&X-Amz-Signature=fef45f2bc13e5d6d7a33ee2c7079db4cddf0e9fbac707598b40ece451803a7bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L4T4ER6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw1u5f8%2BWl%2F%2FGq3q7i5nz7VR6hhC1Ektc3wjjN6IcobwIhAKljgK5B46tvmKgaKNX2GKdvjc2abyRK%2FKiimIUY6bQMKv8DCD0QABoMNjM3NDIzMTgzODA1IgwXwTsTyi%2FrdpQsLqsq3AO9OcL%2Fu1d2RM2F%2FDpgX3L9TBPvnaPnbzStOREsd8pH9FUkeH5txszxp728jrQubBfs8kG6ZPua9gvBrp85avgQlX5Y7TsuF9GhWjpqAlVRAfiYm4LnQ7WrozFhg9rf%2BJqC4m%2BIz%2BfRS2BRlEUazr9A3bYThFO0Ed5HL1tRANS9WsDLaG09k%2FTWfIQowehb7wuFOK8P%2F72ak34FwUUK6JUdA7phkBhZbnj82rHNeKrToB76%2FXB421yQziz9NZ55cxrYMtU0zg7ousLCyAF%2BebPQYFWtXttkLn0qU2fK1KU4PaUvixZKeFMwKzYSWeYBCnK8vCbd00UhzjrfjUW8Lfio0Piw39x14M9%2B3IyMo8JI8vz3T3FKxzMve3d9rl9UcqYdF4XoxZvv3CnKlQaePKiBHSg1n%2B18CvqTlNHUuBI%2FYDQXbxhkWodi6AFHKRasocGyVscCCjI7OxrbIstWU1KCgzpn8YXb9k0zUcBtnUytmG82ehxy6UnF%2BAAUQGPvG7PAPo0xTXdyOyvAdaoREkCB%2F1XuIPNkUg0dzuEFv94DzteWI1hD7aL7L0OGNTHzOZP0qpb3X6NiZvt9MA0ElzzTZlD2EHKKEfXROZ2jXZs1DRgvCUMWwKHiGtEJjDDbqrHABjqkAcLMud9XukhAqy%2F11Ic6pqBrxNPXCX6GC90PF%2B6GvBds6a1bLSObr4CpWHsQvSHKLh7COY2hXQiGLbdkIF6Nzsdvl%2BtZWUoy4F72gn6SNuNFBH0GD3dAnf%2FDr7jeqSvBZIBdqNQgCGWC%2B8ep2spIVflc0aWGXndReWBfnKXydDiDxN0gDqIayGalYhshN1ft7JYbLNsGHJxM7T9otqkBpayRf3Wh&X-Amz-Signature=105cd3acc48dc871457a1185b44f89c533290a6e04996db252f38d53e17b5120&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L4T4ER6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw1u5f8%2BWl%2F%2FGq3q7i5nz7VR6hhC1Ektc3wjjN6IcobwIhAKljgK5B46tvmKgaKNX2GKdvjc2abyRK%2FKiimIUY6bQMKv8DCD0QABoMNjM3NDIzMTgzODA1IgwXwTsTyi%2FrdpQsLqsq3AO9OcL%2Fu1d2RM2F%2FDpgX3L9TBPvnaPnbzStOREsd8pH9FUkeH5txszxp728jrQubBfs8kG6ZPua9gvBrp85avgQlX5Y7TsuF9GhWjpqAlVRAfiYm4LnQ7WrozFhg9rf%2BJqC4m%2BIz%2BfRS2BRlEUazr9A3bYThFO0Ed5HL1tRANS9WsDLaG09k%2FTWfIQowehb7wuFOK8P%2F72ak34FwUUK6JUdA7phkBhZbnj82rHNeKrToB76%2FXB421yQziz9NZ55cxrYMtU0zg7ousLCyAF%2BebPQYFWtXttkLn0qU2fK1KU4PaUvixZKeFMwKzYSWeYBCnK8vCbd00UhzjrfjUW8Lfio0Piw39x14M9%2B3IyMo8JI8vz3T3FKxzMve3d9rl9UcqYdF4XoxZvv3CnKlQaePKiBHSg1n%2B18CvqTlNHUuBI%2FYDQXbxhkWodi6AFHKRasocGyVscCCjI7OxrbIstWU1KCgzpn8YXb9k0zUcBtnUytmG82ehxy6UnF%2BAAUQGPvG7PAPo0xTXdyOyvAdaoREkCB%2F1XuIPNkUg0dzuEFv94DzteWI1hD7aL7L0OGNTHzOZP0qpb3X6NiZvt9MA0ElzzTZlD2EHKKEfXROZ2jXZs1DRgvCUMWwKHiGtEJjDDbqrHABjqkAcLMud9XukhAqy%2F11Ic6pqBrxNPXCX6GC90PF%2B6GvBds6a1bLSObr4CpWHsQvSHKLh7COY2hXQiGLbdkIF6Nzsdvl%2BtZWUoy4F72gn6SNuNFBH0GD3dAnf%2FDr7jeqSvBZIBdqNQgCGWC%2B8ep2spIVflc0aWGXndReWBfnKXydDiDxN0gDqIayGalYhshN1ft7JYbLNsGHJxM7T9otqkBpayRf3Wh&X-Amz-Signature=693942de1c05a289c2739903aa1a46db1a13761bb6496c9c0ee548c68ab150ef&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L4T4ER6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw1u5f8%2BWl%2F%2FGq3q7i5nz7VR6hhC1Ektc3wjjN6IcobwIhAKljgK5B46tvmKgaKNX2GKdvjc2abyRK%2FKiimIUY6bQMKv8DCD0QABoMNjM3NDIzMTgzODA1IgwXwTsTyi%2FrdpQsLqsq3AO9OcL%2Fu1d2RM2F%2FDpgX3L9TBPvnaPnbzStOREsd8pH9FUkeH5txszxp728jrQubBfs8kG6ZPua9gvBrp85avgQlX5Y7TsuF9GhWjpqAlVRAfiYm4LnQ7WrozFhg9rf%2BJqC4m%2BIz%2BfRS2BRlEUazr9A3bYThFO0Ed5HL1tRANS9WsDLaG09k%2FTWfIQowehb7wuFOK8P%2F72ak34FwUUK6JUdA7phkBhZbnj82rHNeKrToB76%2FXB421yQziz9NZ55cxrYMtU0zg7ousLCyAF%2BebPQYFWtXttkLn0qU2fK1KU4PaUvixZKeFMwKzYSWeYBCnK8vCbd00UhzjrfjUW8Lfio0Piw39x14M9%2B3IyMo8JI8vz3T3FKxzMve3d9rl9UcqYdF4XoxZvv3CnKlQaePKiBHSg1n%2B18CvqTlNHUuBI%2FYDQXbxhkWodi6AFHKRasocGyVscCCjI7OxrbIstWU1KCgzpn8YXb9k0zUcBtnUytmG82ehxy6UnF%2BAAUQGPvG7PAPo0xTXdyOyvAdaoREkCB%2F1XuIPNkUg0dzuEFv94DzteWI1hD7aL7L0OGNTHzOZP0qpb3X6NiZvt9MA0ElzzTZlD2EHKKEfXROZ2jXZs1DRgvCUMWwKHiGtEJjDDbqrHABjqkAcLMud9XukhAqy%2F11Ic6pqBrxNPXCX6GC90PF%2B6GvBds6a1bLSObr4CpWHsQvSHKLh7COY2hXQiGLbdkIF6Nzsdvl%2BtZWUoy4F72gn6SNuNFBH0GD3dAnf%2FDr7jeqSvBZIBdqNQgCGWC%2B8ep2spIVflc0aWGXndReWBfnKXydDiDxN0gDqIayGalYhshN1ft7JYbLNsGHJxM7T9otqkBpayRf3Wh&X-Amz-Signature=e9ad3821400cf09bd09ab38f9c71a4878f15dc92434dd0597d8c98d93dfc5f2b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L4T4ER6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw1u5f8%2BWl%2F%2FGq3q7i5nz7VR6hhC1Ektc3wjjN6IcobwIhAKljgK5B46tvmKgaKNX2GKdvjc2abyRK%2FKiimIUY6bQMKv8DCD0QABoMNjM3NDIzMTgzODA1IgwXwTsTyi%2FrdpQsLqsq3AO9OcL%2Fu1d2RM2F%2FDpgX3L9TBPvnaPnbzStOREsd8pH9FUkeH5txszxp728jrQubBfs8kG6ZPua9gvBrp85avgQlX5Y7TsuF9GhWjpqAlVRAfiYm4LnQ7WrozFhg9rf%2BJqC4m%2BIz%2BfRS2BRlEUazr9A3bYThFO0Ed5HL1tRANS9WsDLaG09k%2FTWfIQowehb7wuFOK8P%2F72ak34FwUUK6JUdA7phkBhZbnj82rHNeKrToB76%2FXB421yQziz9NZ55cxrYMtU0zg7ousLCyAF%2BebPQYFWtXttkLn0qU2fK1KU4PaUvixZKeFMwKzYSWeYBCnK8vCbd00UhzjrfjUW8Lfio0Piw39x14M9%2B3IyMo8JI8vz3T3FKxzMve3d9rl9UcqYdF4XoxZvv3CnKlQaePKiBHSg1n%2B18CvqTlNHUuBI%2FYDQXbxhkWodi6AFHKRasocGyVscCCjI7OxrbIstWU1KCgzpn8YXb9k0zUcBtnUytmG82ehxy6UnF%2BAAUQGPvG7PAPo0xTXdyOyvAdaoREkCB%2F1XuIPNkUg0dzuEFv94DzteWI1hD7aL7L0OGNTHzOZP0qpb3X6NiZvt9MA0ElzzTZlD2EHKKEfXROZ2jXZs1DRgvCUMWwKHiGtEJjDDbqrHABjqkAcLMud9XukhAqy%2F11Ic6pqBrxNPXCX6GC90PF%2B6GvBds6a1bLSObr4CpWHsQvSHKLh7COY2hXQiGLbdkIF6Nzsdvl%2BtZWUoy4F72gn6SNuNFBH0GD3dAnf%2FDr7jeqSvBZIBdqNQgCGWC%2B8ep2spIVflc0aWGXndReWBfnKXydDiDxN0gDqIayGalYhshN1ft7JYbLNsGHJxM7T9otqkBpayRf3Wh&X-Amz-Signature=dc6fd3f3c77157709b655d4bb15535675524c0336fe80c3006b2123b597077e1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L4T4ER6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw1u5f8%2BWl%2F%2FGq3q7i5nz7VR6hhC1Ektc3wjjN6IcobwIhAKljgK5B46tvmKgaKNX2GKdvjc2abyRK%2FKiimIUY6bQMKv8DCD0QABoMNjM3NDIzMTgzODA1IgwXwTsTyi%2FrdpQsLqsq3AO9OcL%2Fu1d2RM2F%2FDpgX3L9TBPvnaPnbzStOREsd8pH9FUkeH5txszxp728jrQubBfs8kG6ZPua9gvBrp85avgQlX5Y7TsuF9GhWjpqAlVRAfiYm4LnQ7WrozFhg9rf%2BJqC4m%2BIz%2BfRS2BRlEUazr9A3bYThFO0Ed5HL1tRANS9WsDLaG09k%2FTWfIQowehb7wuFOK8P%2F72ak34FwUUK6JUdA7phkBhZbnj82rHNeKrToB76%2FXB421yQziz9NZ55cxrYMtU0zg7ousLCyAF%2BebPQYFWtXttkLn0qU2fK1KU4PaUvixZKeFMwKzYSWeYBCnK8vCbd00UhzjrfjUW8Lfio0Piw39x14M9%2B3IyMo8JI8vz3T3FKxzMve3d9rl9UcqYdF4XoxZvv3CnKlQaePKiBHSg1n%2B18CvqTlNHUuBI%2FYDQXbxhkWodi6AFHKRasocGyVscCCjI7OxrbIstWU1KCgzpn8YXb9k0zUcBtnUytmG82ehxy6UnF%2BAAUQGPvG7PAPo0xTXdyOyvAdaoREkCB%2F1XuIPNkUg0dzuEFv94DzteWI1hD7aL7L0OGNTHzOZP0qpb3X6NiZvt9MA0ElzzTZlD2EHKKEfXROZ2jXZs1DRgvCUMWwKHiGtEJjDDbqrHABjqkAcLMud9XukhAqy%2F11Ic6pqBrxNPXCX6GC90PF%2B6GvBds6a1bLSObr4CpWHsQvSHKLh7COY2hXQiGLbdkIF6Nzsdvl%2BtZWUoy4F72gn6SNuNFBH0GD3dAnf%2FDr7jeqSvBZIBdqNQgCGWC%2B8ep2spIVflc0aWGXndReWBfnKXydDiDxN0gDqIayGalYhshN1ft7JYbLNsGHJxM7T9otqkBpayRf3Wh&X-Amz-Signature=57b65ce70e11973b01fc47e5fed2301df876a97ecaa9b7189c4cb5cf242c1abb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L4T4ER6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw1u5f8%2BWl%2F%2FGq3q7i5nz7VR6hhC1Ektc3wjjN6IcobwIhAKljgK5B46tvmKgaKNX2GKdvjc2abyRK%2FKiimIUY6bQMKv8DCD0QABoMNjM3NDIzMTgzODA1IgwXwTsTyi%2FrdpQsLqsq3AO9OcL%2Fu1d2RM2F%2FDpgX3L9TBPvnaPnbzStOREsd8pH9FUkeH5txszxp728jrQubBfs8kG6ZPua9gvBrp85avgQlX5Y7TsuF9GhWjpqAlVRAfiYm4LnQ7WrozFhg9rf%2BJqC4m%2BIz%2BfRS2BRlEUazr9A3bYThFO0Ed5HL1tRANS9WsDLaG09k%2FTWfIQowehb7wuFOK8P%2F72ak34FwUUK6JUdA7phkBhZbnj82rHNeKrToB76%2FXB421yQziz9NZ55cxrYMtU0zg7ousLCyAF%2BebPQYFWtXttkLn0qU2fK1KU4PaUvixZKeFMwKzYSWeYBCnK8vCbd00UhzjrfjUW8Lfio0Piw39x14M9%2B3IyMo8JI8vz3T3FKxzMve3d9rl9UcqYdF4XoxZvv3CnKlQaePKiBHSg1n%2B18CvqTlNHUuBI%2FYDQXbxhkWodi6AFHKRasocGyVscCCjI7OxrbIstWU1KCgzpn8YXb9k0zUcBtnUytmG82ehxy6UnF%2BAAUQGPvG7PAPo0xTXdyOyvAdaoREkCB%2F1XuIPNkUg0dzuEFv94DzteWI1hD7aL7L0OGNTHzOZP0qpb3X6NiZvt9MA0ElzzTZlD2EHKKEfXROZ2jXZs1DRgvCUMWwKHiGtEJjDDbqrHABjqkAcLMud9XukhAqy%2F11Ic6pqBrxNPXCX6GC90PF%2B6GvBds6a1bLSObr4CpWHsQvSHKLh7COY2hXQiGLbdkIF6Nzsdvl%2BtZWUoy4F72gn6SNuNFBH0GD3dAnf%2FDr7jeqSvBZIBdqNQgCGWC%2B8ep2spIVflc0aWGXndReWBfnKXydDiDxN0gDqIayGalYhshN1ft7JYbLNsGHJxM7T9otqkBpayRf3Wh&X-Amz-Signature=74bb5edfca0aeff0af1c6dcca2805f3384cbb97964af6271701b62cdd45fcc98&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
