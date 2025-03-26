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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTKNEIH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9TZk5RkYWTFvb3tdva4eiri4laLG%2Fs5qAVllyjKfaNwIgbDT6gNFJ3lXkhp2nbxGHFvpJ0sja5H4mIFh645dyY44q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNRZA%2F471ZV1eaOg%2FircAxpTxkCtIClIX2mQwacVNmhzHHdiYr5RdOIC6wJ0g5kNcvXtJjtJNcqXKSGraq9Oi%2BhiaS2RLld2Cm%2FHemRlhnQfRzjfNXfctKrJ7%2BY3rLBQlK%2Bh4bvLvRaLmCVIFqJU9YpQkYnXmVXzixQzdqCx6gjQnhr39DfiKZuf3C0EICNCnflC%2BIooxAFF5t11%2F83D8rwfsHjajXWL8CpSBcQs%2FH%2Fh%2FRmcS2%2Bw8iql2iy81EJXfZ2JDLxiFDoupfh3dvBWIkMzlMZ4ypVhHhpW8qi07ZDeYar8i%2FYxiTiUTPxKgvGkEwBpVEBLeBwOohq51U%2Bdo0nNOlrfptIaGi9YNJDOdiUJh7ocFeuzGauTz%2FHJLhZeRM980U51v99hziG4GZm1uDtr1ILMJAEPOAwBfnAukD3zDGsSSBgT2XbPWuMaGRjSc7LjUv878LmPjp%2BHgyI2mjV0mV9S%2BYK%2B2hG2hwLLmMbS6XFzh%2BYZSYjv1LOQtZMLP2BoKGhGwynkLGEfwL1QTqvgXrL6iwk5HQaHhrqMEDud0ITWfJDKwqdqRMZd%2BgBiSZPBes1CO8yFqFu1D4uQH1zWVsaUqdzdKyGkR40LiPfrL0s8fu36zSOM8ECwtlHpRoRDNEWyVA57hV%2F9MNWakL8GOqUByGf5koWUy9RxO7g%2BZw8wdl6fAH7SB7eF7F1%2Fd4iesOF2huYAmvG%2FUe1VqahR3g6ideP1dHMqMOPtzY%2FV1xkbbzYYByWyaCt%2BAf1OoP%2Ba6Lchax9pUqmZw1c1nyNT1XbfYTN9u0Bwj3lqjp%2FOHOXjlRXrqzrXJFxz%2FGjIMt0HtBAHP57fKdwONQAzF9DHm5gQUyx7EyNz2l9t1exDhJZyIcLzUHO%2B&X-Amz-Signature=f320cb59979d77db3773fa3aae0f44edbf1d73d3a323b8c6211f6cb07e3583a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTKNEIH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9TZk5RkYWTFvb3tdva4eiri4laLG%2Fs5qAVllyjKfaNwIgbDT6gNFJ3lXkhp2nbxGHFvpJ0sja5H4mIFh645dyY44q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNRZA%2F471ZV1eaOg%2FircAxpTxkCtIClIX2mQwacVNmhzHHdiYr5RdOIC6wJ0g5kNcvXtJjtJNcqXKSGraq9Oi%2BhiaS2RLld2Cm%2FHemRlhnQfRzjfNXfctKrJ7%2BY3rLBQlK%2Bh4bvLvRaLmCVIFqJU9YpQkYnXmVXzixQzdqCx6gjQnhr39DfiKZuf3C0EICNCnflC%2BIooxAFF5t11%2F83D8rwfsHjajXWL8CpSBcQs%2FH%2Fh%2FRmcS2%2Bw8iql2iy81EJXfZ2JDLxiFDoupfh3dvBWIkMzlMZ4ypVhHhpW8qi07ZDeYar8i%2FYxiTiUTPxKgvGkEwBpVEBLeBwOohq51U%2Bdo0nNOlrfptIaGi9YNJDOdiUJh7ocFeuzGauTz%2FHJLhZeRM980U51v99hziG4GZm1uDtr1ILMJAEPOAwBfnAukD3zDGsSSBgT2XbPWuMaGRjSc7LjUv878LmPjp%2BHgyI2mjV0mV9S%2BYK%2B2hG2hwLLmMbS6XFzh%2BYZSYjv1LOQtZMLP2BoKGhGwynkLGEfwL1QTqvgXrL6iwk5HQaHhrqMEDud0ITWfJDKwqdqRMZd%2BgBiSZPBes1CO8yFqFu1D4uQH1zWVsaUqdzdKyGkR40LiPfrL0s8fu36zSOM8ECwtlHpRoRDNEWyVA57hV%2F9MNWakL8GOqUByGf5koWUy9RxO7g%2BZw8wdl6fAH7SB7eF7F1%2Fd4iesOF2huYAmvG%2FUe1VqahR3g6ideP1dHMqMOPtzY%2FV1xkbbzYYByWyaCt%2BAf1OoP%2Ba6Lchax9pUqmZw1c1nyNT1XbfYTN9u0Bwj3lqjp%2FOHOXjlRXrqzrXJFxz%2FGjIMt0HtBAHP57fKdwONQAzF9DHm5gQUyx7EyNz2l9t1exDhJZyIcLzUHO%2B&X-Amz-Signature=61b084ff7e810b4b1218a4e2413b4bd2ebae6784604fb2d5cd155eb6231b74d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTKNEIH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9TZk5RkYWTFvb3tdva4eiri4laLG%2Fs5qAVllyjKfaNwIgbDT6gNFJ3lXkhp2nbxGHFvpJ0sja5H4mIFh645dyY44q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNRZA%2F471ZV1eaOg%2FircAxpTxkCtIClIX2mQwacVNmhzHHdiYr5RdOIC6wJ0g5kNcvXtJjtJNcqXKSGraq9Oi%2BhiaS2RLld2Cm%2FHemRlhnQfRzjfNXfctKrJ7%2BY3rLBQlK%2Bh4bvLvRaLmCVIFqJU9YpQkYnXmVXzixQzdqCx6gjQnhr39DfiKZuf3C0EICNCnflC%2BIooxAFF5t11%2F83D8rwfsHjajXWL8CpSBcQs%2FH%2Fh%2FRmcS2%2Bw8iql2iy81EJXfZ2JDLxiFDoupfh3dvBWIkMzlMZ4ypVhHhpW8qi07ZDeYar8i%2FYxiTiUTPxKgvGkEwBpVEBLeBwOohq51U%2Bdo0nNOlrfptIaGi9YNJDOdiUJh7ocFeuzGauTz%2FHJLhZeRM980U51v99hziG4GZm1uDtr1ILMJAEPOAwBfnAukD3zDGsSSBgT2XbPWuMaGRjSc7LjUv878LmPjp%2BHgyI2mjV0mV9S%2BYK%2B2hG2hwLLmMbS6XFzh%2BYZSYjv1LOQtZMLP2BoKGhGwynkLGEfwL1QTqvgXrL6iwk5HQaHhrqMEDud0ITWfJDKwqdqRMZd%2BgBiSZPBes1CO8yFqFu1D4uQH1zWVsaUqdzdKyGkR40LiPfrL0s8fu36zSOM8ECwtlHpRoRDNEWyVA57hV%2F9MNWakL8GOqUByGf5koWUy9RxO7g%2BZw8wdl6fAH7SB7eF7F1%2Fd4iesOF2huYAmvG%2FUe1VqahR3g6ideP1dHMqMOPtzY%2FV1xkbbzYYByWyaCt%2BAf1OoP%2Ba6Lchax9pUqmZw1c1nyNT1XbfYTN9u0Bwj3lqjp%2FOHOXjlRXrqzrXJFxz%2FGjIMt0HtBAHP57fKdwONQAzF9DHm5gQUyx7EyNz2l9t1exDhJZyIcLzUHO%2B&X-Amz-Signature=5fa1853f47b264ba5c2da1095f91584758ed289c7e49c9d18339f6b4b7d61e58&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTKNEIH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9TZk5RkYWTFvb3tdva4eiri4laLG%2Fs5qAVllyjKfaNwIgbDT6gNFJ3lXkhp2nbxGHFvpJ0sja5H4mIFh645dyY44q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNRZA%2F471ZV1eaOg%2FircAxpTxkCtIClIX2mQwacVNmhzHHdiYr5RdOIC6wJ0g5kNcvXtJjtJNcqXKSGraq9Oi%2BhiaS2RLld2Cm%2FHemRlhnQfRzjfNXfctKrJ7%2BY3rLBQlK%2Bh4bvLvRaLmCVIFqJU9YpQkYnXmVXzixQzdqCx6gjQnhr39DfiKZuf3C0EICNCnflC%2BIooxAFF5t11%2F83D8rwfsHjajXWL8CpSBcQs%2FH%2Fh%2FRmcS2%2Bw8iql2iy81EJXfZ2JDLxiFDoupfh3dvBWIkMzlMZ4ypVhHhpW8qi07ZDeYar8i%2FYxiTiUTPxKgvGkEwBpVEBLeBwOohq51U%2Bdo0nNOlrfptIaGi9YNJDOdiUJh7ocFeuzGauTz%2FHJLhZeRM980U51v99hziG4GZm1uDtr1ILMJAEPOAwBfnAukD3zDGsSSBgT2XbPWuMaGRjSc7LjUv878LmPjp%2BHgyI2mjV0mV9S%2BYK%2B2hG2hwLLmMbS6XFzh%2BYZSYjv1LOQtZMLP2BoKGhGwynkLGEfwL1QTqvgXrL6iwk5HQaHhrqMEDud0ITWfJDKwqdqRMZd%2BgBiSZPBes1CO8yFqFu1D4uQH1zWVsaUqdzdKyGkR40LiPfrL0s8fu36zSOM8ECwtlHpRoRDNEWyVA57hV%2F9MNWakL8GOqUByGf5koWUy9RxO7g%2BZw8wdl6fAH7SB7eF7F1%2Fd4iesOF2huYAmvG%2FUe1VqahR3g6ideP1dHMqMOPtzY%2FV1xkbbzYYByWyaCt%2BAf1OoP%2Ba6Lchax9pUqmZw1c1nyNT1XbfYTN9u0Bwj3lqjp%2FOHOXjlRXrqzrXJFxz%2FGjIMt0HtBAHP57fKdwONQAzF9DHm5gQUyx7EyNz2l9t1exDhJZyIcLzUHO%2B&X-Amz-Signature=6443e61dd62a294f02a2f913c092724de978cabf2cbc236a84535baf28b710a0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTKNEIH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9TZk5RkYWTFvb3tdva4eiri4laLG%2Fs5qAVllyjKfaNwIgbDT6gNFJ3lXkhp2nbxGHFvpJ0sja5H4mIFh645dyY44q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNRZA%2F471ZV1eaOg%2FircAxpTxkCtIClIX2mQwacVNmhzHHdiYr5RdOIC6wJ0g5kNcvXtJjtJNcqXKSGraq9Oi%2BhiaS2RLld2Cm%2FHemRlhnQfRzjfNXfctKrJ7%2BY3rLBQlK%2Bh4bvLvRaLmCVIFqJU9YpQkYnXmVXzixQzdqCx6gjQnhr39DfiKZuf3C0EICNCnflC%2BIooxAFF5t11%2F83D8rwfsHjajXWL8CpSBcQs%2FH%2Fh%2FRmcS2%2Bw8iql2iy81EJXfZ2JDLxiFDoupfh3dvBWIkMzlMZ4ypVhHhpW8qi07ZDeYar8i%2FYxiTiUTPxKgvGkEwBpVEBLeBwOohq51U%2Bdo0nNOlrfptIaGi9YNJDOdiUJh7ocFeuzGauTz%2FHJLhZeRM980U51v99hziG4GZm1uDtr1ILMJAEPOAwBfnAukD3zDGsSSBgT2XbPWuMaGRjSc7LjUv878LmPjp%2BHgyI2mjV0mV9S%2BYK%2B2hG2hwLLmMbS6XFzh%2BYZSYjv1LOQtZMLP2BoKGhGwynkLGEfwL1QTqvgXrL6iwk5HQaHhrqMEDud0ITWfJDKwqdqRMZd%2BgBiSZPBes1CO8yFqFu1D4uQH1zWVsaUqdzdKyGkR40LiPfrL0s8fu36zSOM8ECwtlHpRoRDNEWyVA57hV%2F9MNWakL8GOqUByGf5koWUy9RxO7g%2BZw8wdl6fAH7SB7eF7F1%2Fd4iesOF2huYAmvG%2FUe1VqahR3g6ideP1dHMqMOPtzY%2FV1xkbbzYYByWyaCt%2BAf1OoP%2Ba6Lchax9pUqmZw1c1nyNT1XbfYTN9u0Bwj3lqjp%2FOHOXjlRXrqzrXJFxz%2FGjIMt0HtBAHP57fKdwONQAzF9DHm5gQUyx7EyNz2l9t1exDhJZyIcLzUHO%2B&X-Amz-Signature=b727b9587c323820fceba94a02ff38dd1ee0bc255a9e53ea40c3ce4ad3eb1d01&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTKNEIH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9TZk5RkYWTFvb3tdva4eiri4laLG%2Fs5qAVllyjKfaNwIgbDT6gNFJ3lXkhp2nbxGHFvpJ0sja5H4mIFh645dyY44q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNRZA%2F471ZV1eaOg%2FircAxpTxkCtIClIX2mQwacVNmhzHHdiYr5RdOIC6wJ0g5kNcvXtJjtJNcqXKSGraq9Oi%2BhiaS2RLld2Cm%2FHemRlhnQfRzjfNXfctKrJ7%2BY3rLBQlK%2Bh4bvLvRaLmCVIFqJU9YpQkYnXmVXzixQzdqCx6gjQnhr39DfiKZuf3C0EICNCnflC%2BIooxAFF5t11%2F83D8rwfsHjajXWL8CpSBcQs%2FH%2Fh%2FRmcS2%2Bw8iql2iy81EJXfZ2JDLxiFDoupfh3dvBWIkMzlMZ4ypVhHhpW8qi07ZDeYar8i%2FYxiTiUTPxKgvGkEwBpVEBLeBwOohq51U%2Bdo0nNOlrfptIaGi9YNJDOdiUJh7ocFeuzGauTz%2FHJLhZeRM980U51v99hziG4GZm1uDtr1ILMJAEPOAwBfnAukD3zDGsSSBgT2XbPWuMaGRjSc7LjUv878LmPjp%2BHgyI2mjV0mV9S%2BYK%2B2hG2hwLLmMbS6XFzh%2BYZSYjv1LOQtZMLP2BoKGhGwynkLGEfwL1QTqvgXrL6iwk5HQaHhrqMEDud0ITWfJDKwqdqRMZd%2BgBiSZPBes1CO8yFqFu1D4uQH1zWVsaUqdzdKyGkR40LiPfrL0s8fu36zSOM8ECwtlHpRoRDNEWyVA57hV%2F9MNWakL8GOqUByGf5koWUy9RxO7g%2BZw8wdl6fAH7SB7eF7F1%2Fd4iesOF2huYAmvG%2FUe1VqahR3g6ideP1dHMqMOPtzY%2FV1xkbbzYYByWyaCt%2BAf1OoP%2Ba6Lchax9pUqmZw1c1nyNT1XbfYTN9u0Bwj3lqjp%2FOHOXjlRXrqzrXJFxz%2FGjIMt0HtBAHP57fKdwONQAzF9DHm5gQUyx7EyNz2l9t1exDhJZyIcLzUHO%2B&X-Amz-Signature=73b5b462454dd31d2e0c07a0a6c63a78d3b2a013d18473456317a398d858a55a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VTKNEIH%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9TZk5RkYWTFvb3tdva4eiri4laLG%2Fs5qAVllyjKfaNwIgbDT6gNFJ3lXkhp2nbxGHFvpJ0sja5H4mIFh645dyY44q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNRZA%2F471ZV1eaOg%2FircAxpTxkCtIClIX2mQwacVNmhzHHdiYr5RdOIC6wJ0g5kNcvXtJjtJNcqXKSGraq9Oi%2BhiaS2RLld2Cm%2FHemRlhnQfRzjfNXfctKrJ7%2BY3rLBQlK%2Bh4bvLvRaLmCVIFqJU9YpQkYnXmVXzixQzdqCx6gjQnhr39DfiKZuf3C0EICNCnflC%2BIooxAFF5t11%2F83D8rwfsHjajXWL8CpSBcQs%2FH%2Fh%2FRmcS2%2Bw8iql2iy81EJXfZ2JDLxiFDoupfh3dvBWIkMzlMZ4ypVhHhpW8qi07ZDeYar8i%2FYxiTiUTPxKgvGkEwBpVEBLeBwOohq51U%2Bdo0nNOlrfptIaGi9YNJDOdiUJh7ocFeuzGauTz%2FHJLhZeRM980U51v99hziG4GZm1uDtr1ILMJAEPOAwBfnAukD3zDGsSSBgT2XbPWuMaGRjSc7LjUv878LmPjp%2BHgyI2mjV0mV9S%2BYK%2B2hG2hwLLmMbS6XFzh%2BYZSYjv1LOQtZMLP2BoKGhGwynkLGEfwL1QTqvgXrL6iwk5HQaHhrqMEDud0ITWfJDKwqdqRMZd%2BgBiSZPBes1CO8yFqFu1D4uQH1zWVsaUqdzdKyGkR40LiPfrL0s8fu36zSOM8ECwtlHpRoRDNEWyVA57hV%2F9MNWakL8GOqUByGf5koWUy9RxO7g%2BZw8wdl6fAH7SB7eF7F1%2Fd4iesOF2huYAmvG%2FUe1VqahR3g6ideP1dHMqMOPtzY%2FV1xkbbzYYByWyaCt%2BAf1OoP%2Ba6Lchax9pUqmZw1c1nyNT1XbfYTN9u0Bwj3lqjp%2FOHOXjlRXrqzrXJFxz%2FGjIMt0HtBAHP57fKdwONQAzF9DHm5gQUyx7EyNz2l9t1exDhJZyIcLzUHO%2B&X-Amz-Signature=3ac59656f0b2f6c598326c801ad963efe33c5fb343c2bd2df822ebe5900cd836&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
