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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTB2TF4S%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCLnD%2FLGrwO%2B23aYV3hkNhCxrSV0gAMvSn966wyFbiGrwIgE1%2Bpmf7dihY7BCI458wS%2B%2BkobHHh2hWiMfQlf91sfFAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDF9sSbNXbSO%2BpR6uSrcAwcygqJPQ5xvir%2FlBnHNxPQ1tnsdshYMfh32nXozOj6nr5xNt680L4axwtvB%2FNpy7ei%2B0xHcc3NrkPFfRL%2F48ulqoX0bhdsVtj4OoCO1GPOL5gQK%2B7iI2Goa1x0BejpoSMWqmyX1nHLqff%2F4XmNfxnUutVd6i3yJIG8VurZFoJzEcttXRwauijNolGuQi7sEciBGHd7IyeOH5YezNbSIXwlTNl3tqUh5sqtNCQ77aiHwlFhqkKHfCYIiNxRwQvjEzo79RjMlx9baRHYA8ikLOchC9UmSyz19IHOh8vpzs60BUTgoCHiQ5b3CAZojQFzYI2pLOOXu139ipx5iUDMl3CQ8T7PXB8bt2y7v7x3JdC56BWfVaBgBjptD%2B4gxtsii1xZMnwW5%2B%2F8r89PEG0EpE173xI5clquGQ9%2BngcgKLJHxOALt42FYj9x5p7mj5Vh48z7HCKPD93zqofBZR5WCPxWO4zxhlJnt9YV9ivoFS0G%2BzHgygGPZX23lreYWNv9JOPxiDjBtHFWETJKR93RacghGyEuEq7z7kjYV8uW9DR6UDeIhadtJw1le%2BJ%2FaXpTGB8qXtKDFOR4%2FqnMsH1XzdKuotJT1Mff3hvpKto2RWM4XQuElE%2BbjmkunEz34MK7alcAGOqUBjHT2Fg5S86RcSLlumCm1QdR3m34kZQuo31p0v9fJU9A6w0WLy1nZJd7QZl1p1kd8dtZU7IZ%2FEuW4PYMs1eSFS%2Fq7V4HKejfXSR8cfgT%2BVqS7vAC9t6vGesv8vDlnkArB%2Fuyk%2BlXDitCCQZAxZhnSjDJen30gj7f8xnEkPA%2FVvaF6hqEsEg%2FLIttByyvVcOFqDyq43DxVJs2YGvaIaYgDHeTh2uJh&X-Amz-Signature=3eae03c9743d537e387c159207cb7931f15cd1c16a37743f8a5ccd6e01394005&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTB2TF4S%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCLnD%2FLGrwO%2B23aYV3hkNhCxrSV0gAMvSn966wyFbiGrwIgE1%2Bpmf7dihY7BCI458wS%2B%2BkobHHh2hWiMfQlf91sfFAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDF9sSbNXbSO%2BpR6uSrcAwcygqJPQ5xvir%2FlBnHNxPQ1tnsdshYMfh32nXozOj6nr5xNt680L4axwtvB%2FNpy7ei%2B0xHcc3NrkPFfRL%2F48ulqoX0bhdsVtj4OoCO1GPOL5gQK%2B7iI2Goa1x0BejpoSMWqmyX1nHLqff%2F4XmNfxnUutVd6i3yJIG8VurZFoJzEcttXRwauijNolGuQi7sEciBGHd7IyeOH5YezNbSIXwlTNl3tqUh5sqtNCQ77aiHwlFhqkKHfCYIiNxRwQvjEzo79RjMlx9baRHYA8ikLOchC9UmSyz19IHOh8vpzs60BUTgoCHiQ5b3CAZojQFzYI2pLOOXu139ipx5iUDMl3CQ8T7PXB8bt2y7v7x3JdC56BWfVaBgBjptD%2B4gxtsii1xZMnwW5%2B%2F8r89PEG0EpE173xI5clquGQ9%2BngcgKLJHxOALt42FYj9x5p7mj5Vh48z7HCKPD93zqofBZR5WCPxWO4zxhlJnt9YV9ivoFS0G%2BzHgygGPZX23lreYWNv9JOPxiDjBtHFWETJKR93RacghGyEuEq7z7kjYV8uW9DR6UDeIhadtJw1le%2BJ%2FaXpTGB8qXtKDFOR4%2FqnMsH1XzdKuotJT1Mff3hvpKto2RWM4XQuElE%2BbjmkunEz34MK7alcAGOqUBjHT2Fg5S86RcSLlumCm1QdR3m34kZQuo31p0v9fJU9A6w0WLy1nZJd7QZl1p1kd8dtZU7IZ%2FEuW4PYMs1eSFS%2Fq7V4HKejfXSR8cfgT%2BVqS7vAC9t6vGesv8vDlnkArB%2Fuyk%2BlXDitCCQZAxZhnSjDJen30gj7f8xnEkPA%2FVvaF6hqEsEg%2FLIttByyvVcOFqDyq43DxVJs2YGvaIaYgDHeTh2uJh&X-Amz-Signature=169aede666797f0dce637fdc5e0e4ab96a3c82b0ad0491b1e8bffb4ea032a8d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTB2TF4S%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCLnD%2FLGrwO%2B23aYV3hkNhCxrSV0gAMvSn966wyFbiGrwIgE1%2Bpmf7dihY7BCI458wS%2B%2BkobHHh2hWiMfQlf91sfFAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDF9sSbNXbSO%2BpR6uSrcAwcygqJPQ5xvir%2FlBnHNxPQ1tnsdshYMfh32nXozOj6nr5xNt680L4axwtvB%2FNpy7ei%2B0xHcc3NrkPFfRL%2F48ulqoX0bhdsVtj4OoCO1GPOL5gQK%2B7iI2Goa1x0BejpoSMWqmyX1nHLqff%2F4XmNfxnUutVd6i3yJIG8VurZFoJzEcttXRwauijNolGuQi7sEciBGHd7IyeOH5YezNbSIXwlTNl3tqUh5sqtNCQ77aiHwlFhqkKHfCYIiNxRwQvjEzo79RjMlx9baRHYA8ikLOchC9UmSyz19IHOh8vpzs60BUTgoCHiQ5b3CAZojQFzYI2pLOOXu139ipx5iUDMl3CQ8T7PXB8bt2y7v7x3JdC56BWfVaBgBjptD%2B4gxtsii1xZMnwW5%2B%2F8r89PEG0EpE173xI5clquGQ9%2BngcgKLJHxOALt42FYj9x5p7mj5Vh48z7HCKPD93zqofBZR5WCPxWO4zxhlJnt9YV9ivoFS0G%2BzHgygGPZX23lreYWNv9JOPxiDjBtHFWETJKR93RacghGyEuEq7z7kjYV8uW9DR6UDeIhadtJw1le%2BJ%2FaXpTGB8qXtKDFOR4%2FqnMsH1XzdKuotJT1Mff3hvpKto2RWM4XQuElE%2BbjmkunEz34MK7alcAGOqUBjHT2Fg5S86RcSLlumCm1QdR3m34kZQuo31p0v9fJU9A6w0WLy1nZJd7QZl1p1kd8dtZU7IZ%2FEuW4PYMs1eSFS%2Fq7V4HKejfXSR8cfgT%2BVqS7vAC9t6vGesv8vDlnkArB%2Fuyk%2BlXDitCCQZAxZhnSjDJen30gj7f8xnEkPA%2FVvaF6hqEsEg%2FLIttByyvVcOFqDyq43DxVJs2YGvaIaYgDHeTh2uJh&X-Amz-Signature=5944a25c7823628aec0a66984270edb51dbe5cd7bccdc59ed7ef10acc052d76b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTB2TF4S%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCLnD%2FLGrwO%2B23aYV3hkNhCxrSV0gAMvSn966wyFbiGrwIgE1%2Bpmf7dihY7BCI458wS%2B%2BkobHHh2hWiMfQlf91sfFAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDF9sSbNXbSO%2BpR6uSrcAwcygqJPQ5xvir%2FlBnHNxPQ1tnsdshYMfh32nXozOj6nr5xNt680L4axwtvB%2FNpy7ei%2B0xHcc3NrkPFfRL%2F48ulqoX0bhdsVtj4OoCO1GPOL5gQK%2B7iI2Goa1x0BejpoSMWqmyX1nHLqff%2F4XmNfxnUutVd6i3yJIG8VurZFoJzEcttXRwauijNolGuQi7sEciBGHd7IyeOH5YezNbSIXwlTNl3tqUh5sqtNCQ77aiHwlFhqkKHfCYIiNxRwQvjEzo79RjMlx9baRHYA8ikLOchC9UmSyz19IHOh8vpzs60BUTgoCHiQ5b3CAZojQFzYI2pLOOXu139ipx5iUDMl3CQ8T7PXB8bt2y7v7x3JdC56BWfVaBgBjptD%2B4gxtsii1xZMnwW5%2B%2F8r89PEG0EpE173xI5clquGQ9%2BngcgKLJHxOALt42FYj9x5p7mj5Vh48z7HCKPD93zqofBZR5WCPxWO4zxhlJnt9YV9ivoFS0G%2BzHgygGPZX23lreYWNv9JOPxiDjBtHFWETJKR93RacghGyEuEq7z7kjYV8uW9DR6UDeIhadtJw1le%2BJ%2FaXpTGB8qXtKDFOR4%2FqnMsH1XzdKuotJT1Mff3hvpKto2RWM4XQuElE%2BbjmkunEz34MK7alcAGOqUBjHT2Fg5S86RcSLlumCm1QdR3m34kZQuo31p0v9fJU9A6w0WLy1nZJd7QZl1p1kd8dtZU7IZ%2FEuW4PYMs1eSFS%2Fq7V4HKejfXSR8cfgT%2BVqS7vAC9t6vGesv8vDlnkArB%2Fuyk%2BlXDitCCQZAxZhnSjDJen30gj7f8xnEkPA%2FVvaF6hqEsEg%2FLIttByyvVcOFqDyq43DxVJs2YGvaIaYgDHeTh2uJh&X-Amz-Signature=aa79ab1bae8c3934b82c97ca30aeaa4040b34ee7b5892e5a21f4872c53657850&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTB2TF4S%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCLnD%2FLGrwO%2B23aYV3hkNhCxrSV0gAMvSn966wyFbiGrwIgE1%2Bpmf7dihY7BCI458wS%2B%2BkobHHh2hWiMfQlf91sfFAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDF9sSbNXbSO%2BpR6uSrcAwcygqJPQ5xvir%2FlBnHNxPQ1tnsdshYMfh32nXozOj6nr5xNt680L4axwtvB%2FNpy7ei%2B0xHcc3NrkPFfRL%2F48ulqoX0bhdsVtj4OoCO1GPOL5gQK%2B7iI2Goa1x0BejpoSMWqmyX1nHLqff%2F4XmNfxnUutVd6i3yJIG8VurZFoJzEcttXRwauijNolGuQi7sEciBGHd7IyeOH5YezNbSIXwlTNl3tqUh5sqtNCQ77aiHwlFhqkKHfCYIiNxRwQvjEzo79RjMlx9baRHYA8ikLOchC9UmSyz19IHOh8vpzs60BUTgoCHiQ5b3CAZojQFzYI2pLOOXu139ipx5iUDMl3CQ8T7PXB8bt2y7v7x3JdC56BWfVaBgBjptD%2B4gxtsii1xZMnwW5%2B%2F8r89PEG0EpE173xI5clquGQ9%2BngcgKLJHxOALt42FYj9x5p7mj5Vh48z7HCKPD93zqofBZR5WCPxWO4zxhlJnt9YV9ivoFS0G%2BzHgygGPZX23lreYWNv9JOPxiDjBtHFWETJKR93RacghGyEuEq7z7kjYV8uW9DR6UDeIhadtJw1le%2BJ%2FaXpTGB8qXtKDFOR4%2FqnMsH1XzdKuotJT1Mff3hvpKto2RWM4XQuElE%2BbjmkunEz34MK7alcAGOqUBjHT2Fg5S86RcSLlumCm1QdR3m34kZQuo31p0v9fJU9A6w0WLy1nZJd7QZl1p1kd8dtZU7IZ%2FEuW4PYMs1eSFS%2Fq7V4HKejfXSR8cfgT%2BVqS7vAC9t6vGesv8vDlnkArB%2Fuyk%2BlXDitCCQZAxZhnSjDJen30gj7f8xnEkPA%2FVvaF6hqEsEg%2FLIttByyvVcOFqDyq43DxVJs2YGvaIaYgDHeTh2uJh&X-Amz-Signature=d47468e8d30ae2031ba19c084154776d7f7f41a0c9f2911ef437b59e9f233ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTB2TF4S%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCLnD%2FLGrwO%2B23aYV3hkNhCxrSV0gAMvSn966wyFbiGrwIgE1%2Bpmf7dihY7BCI458wS%2B%2BkobHHh2hWiMfQlf91sfFAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDF9sSbNXbSO%2BpR6uSrcAwcygqJPQ5xvir%2FlBnHNxPQ1tnsdshYMfh32nXozOj6nr5xNt680L4axwtvB%2FNpy7ei%2B0xHcc3NrkPFfRL%2F48ulqoX0bhdsVtj4OoCO1GPOL5gQK%2B7iI2Goa1x0BejpoSMWqmyX1nHLqff%2F4XmNfxnUutVd6i3yJIG8VurZFoJzEcttXRwauijNolGuQi7sEciBGHd7IyeOH5YezNbSIXwlTNl3tqUh5sqtNCQ77aiHwlFhqkKHfCYIiNxRwQvjEzo79RjMlx9baRHYA8ikLOchC9UmSyz19IHOh8vpzs60BUTgoCHiQ5b3CAZojQFzYI2pLOOXu139ipx5iUDMl3CQ8T7PXB8bt2y7v7x3JdC56BWfVaBgBjptD%2B4gxtsii1xZMnwW5%2B%2F8r89PEG0EpE173xI5clquGQ9%2BngcgKLJHxOALt42FYj9x5p7mj5Vh48z7HCKPD93zqofBZR5WCPxWO4zxhlJnt9YV9ivoFS0G%2BzHgygGPZX23lreYWNv9JOPxiDjBtHFWETJKR93RacghGyEuEq7z7kjYV8uW9DR6UDeIhadtJw1le%2BJ%2FaXpTGB8qXtKDFOR4%2FqnMsH1XzdKuotJT1Mff3hvpKto2RWM4XQuElE%2BbjmkunEz34MK7alcAGOqUBjHT2Fg5S86RcSLlumCm1QdR3m34kZQuo31p0v9fJU9A6w0WLy1nZJd7QZl1p1kd8dtZU7IZ%2FEuW4PYMs1eSFS%2Fq7V4HKejfXSR8cfgT%2BVqS7vAC9t6vGesv8vDlnkArB%2Fuyk%2BlXDitCCQZAxZhnSjDJen30gj7f8xnEkPA%2FVvaF6hqEsEg%2FLIttByyvVcOFqDyq43DxVJs2YGvaIaYgDHeTh2uJh&X-Amz-Signature=6ac90c91997d8e7917a5b57c6274751a2c82ed42adf45bc39ce93fba9bb3db74&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTB2TF4S%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCLnD%2FLGrwO%2B23aYV3hkNhCxrSV0gAMvSn966wyFbiGrwIgE1%2Bpmf7dihY7BCI458wS%2B%2BkobHHh2hWiMfQlf91sfFAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDF9sSbNXbSO%2BpR6uSrcAwcygqJPQ5xvir%2FlBnHNxPQ1tnsdshYMfh32nXozOj6nr5xNt680L4axwtvB%2FNpy7ei%2B0xHcc3NrkPFfRL%2F48ulqoX0bhdsVtj4OoCO1GPOL5gQK%2B7iI2Goa1x0BejpoSMWqmyX1nHLqff%2F4XmNfxnUutVd6i3yJIG8VurZFoJzEcttXRwauijNolGuQi7sEciBGHd7IyeOH5YezNbSIXwlTNl3tqUh5sqtNCQ77aiHwlFhqkKHfCYIiNxRwQvjEzo79RjMlx9baRHYA8ikLOchC9UmSyz19IHOh8vpzs60BUTgoCHiQ5b3CAZojQFzYI2pLOOXu139ipx5iUDMl3CQ8T7PXB8bt2y7v7x3JdC56BWfVaBgBjptD%2B4gxtsii1xZMnwW5%2B%2F8r89PEG0EpE173xI5clquGQ9%2BngcgKLJHxOALt42FYj9x5p7mj5Vh48z7HCKPD93zqofBZR5WCPxWO4zxhlJnt9YV9ivoFS0G%2BzHgygGPZX23lreYWNv9JOPxiDjBtHFWETJKR93RacghGyEuEq7z7kjYV8uW9DR6UDeIhadtJw1le%2BJ%2FaXpTGB8qXtKDFOR4%2FqnMsH1XzdKuotJT1Mff3hvpKto2RWM4XQuElE%2BbjmkunEz34MK7alcAGOqUBjHT2Fg5S86RcSLlumCm1QdR3m34kZQuo31p0v9fJU9A6w0WLy1nZJd7QZl1p1kd8dtZU7IZ%2FEuW4PYMs1eSFS%2Fq7V4HKejfXSR8cfgT%2BVqS7vAC9t6vGesv8vDlnkArB%2Fuyk%2BlXDitCCQZAxZhnSjDJen30gj7f8xnEkPA%2FVvaF6hqEsEg%2FLIttByyvVcOFqDyq43DxVJs2YGvaIaYgDHeTh2uJh&X-Amz-Signature=76175c10a3a247cb45f8115d6306d0914a8a70f21c9d692a9736c51dfaf97a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
