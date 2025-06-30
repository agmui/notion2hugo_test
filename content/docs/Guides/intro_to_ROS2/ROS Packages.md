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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOSKW46R%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXWAPRtKgXrEAKSTLTpZiX9%2F2ucMN%2FQ83BZ0KGx6OkHAiAD6%2BKG0uqj6aJXWA2B3hFEaJq%2BNBQaVVMLN43Y9nKLpSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDYBShUX41zvXHxQ2KtwDp5cbGnUOqukZ74qUnYUYvi7T6LSDyI0LI4sFA5vfedvOMOe4Ep9Lc6L3AbNTxHWmR7i43O8ajiX3ZxshjaJ84S9GgMelVFlv9hwR1bTu2DViCXu9LQDPR%2FEQWWa7aUHvVh8QQr3Ek7kBRpXEzWi%2BHk9g%2BOHjJ7ZRmTfxqOkUKNBvZKPtIyLzGYR%2BHR%2BbyfOVG18QlQBGAsgH%2BkAQ6042O35%2FgAb6T6zXLAb2HEusFr8uFxAEdcHQxaD3vaoPPj7pR6HtY2lLgJvH0NHu2zi4Bt258ApqijbI31ceKnLfSz5s9um5aIy00vwxnMQ4ZaJxQLzfJlx3tb54YGaJn6FG2bsWOI6Rx5nJmq3QhsyPmfNW3qFz1%2BqlLnhlRBt5Df7BycN7tlq8clqmH5%2BfKWBWVPSNX0asNklx9jznskO5Bja1ATlo7h%2FOvkltxClBjg9IRebsdIrKSBpWRtRm8PTFI00gju9QDftJPLQl8xgKWPjo%2Fly7wq3in62nT4YAq6t%2ByqezzYmPRDADxigBZhQ8ZpQsV8lggI23vs27WJC%2BRnNCiEXN3WWqeLU58Nm6Ti%2F10zq9BIyTIK9sPaHKBXxBwrpFkQDaXBLUwweFddwp6rvem6i9Ys5BdSksey4w9qKJwwY6pgGj5X3YtMd2AUhJ1qopb8xDr9BpjtEgnePoNOH0rQky3z7aa1fyYYu6BA09VDkLME%2B1LTmzoZnJia3vXu9A3wpl4Br%2BofCo3rKpAULxE4pYmdj9J3BMAKCd6l6In6cOpO3Mj6pWUH%2FBXdpOUUU2lNik2uofGj6fu6%2BMKV6mzwnIXKPg2XlcEF3IT%2FNNimoUJLn1KdCqSPZ9uNPgrXBzGok9NVEyAK1i&X-Amz-Signature=7918b514644f4fceaa9228a9f67e51a093d95e0b446a92d8eae3f600b306570e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOSKW46R%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXWAPRtKgXrEAKSTLTpZiX9%2F2ucMN%2FQ83BZ0KGx6OkHAiAD6%2BKG0uqj6aJXWA2B3hFEaJq%2BNBQaVVMLN43Y9nKLpSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDYBShUX41zvXHxQ2KtwDp5cbGnUOqukZ74qUnYUYvi7T6LSDyI0LI4sFA5vfedvOMOe4Ep9Lc6L3AbNTxHWmR7i43O8ajiX3ZxshjaJ84S9GgMelVFlv9hwR1bTu2DViCXu9LQDPR%2FEQWWa7aUHvVh8QQr3Ek7kBRpXEzWi%2BHk9g%2BOHjJ7ZRmTfxqOkUKNBvZKPtIyLzGYR%2BHR%2BbyfOVG18QlQBGAsgH%2BkAQ6042O35%2FgAb6T6zXLAb2HEusFr8uFxAEdcHQxaD3vaoPPj7pR6HtY2lLgJvH0NHu2zi4Bt258ApqijbI31ceKnLfSz5s9um5aIy00vwxnMQ4ZaJxQLzfJlx3tb54YGaJn6FG2bsWOI6Rx5nJmq3QhsyPmfNW3qFz1%2BqlLnhlRBt5Df7BycN7tlq8clqmH5%2BfKWBWVPSNX0asNklx9jznskO5Bja1ATlo7h%2FOvkltxClBjg9IRebsdIrKSBpWRtRm8PTFI00gju9QDftJPLQl8xgKWPjo%2Fly7wq3in62nT4YAq6t%2ByqezzYmPRDADxigBZhQ8ZpQsV8lggI23vs27WJC%2BRnNCiEXN3WWqeLU58Nm6Ti%2F10zq9BIyTIK9sPaHKBXxBwrpFkQDaXBLUwweFddwp6rvem6i9Ys5BdSksey4w9qKJwwY6pgGj5X3YtMd2AUhJ1qopb8xDr9BpjtEgnePoNOH0rQky3z7aa1fyYYu6BA09VDkLME%2B1LTmzoZnJia3vXu9A3wpl4Br%2BofCo3rKpAULxE4pYmdj9J3BMAKCd6l6In6cOpO3Mj6pWUH%2FBXdpOUUU2lNik2uofGj6fu6%2BMKV6mzwnIXKPg2XlcEF3IT%2FNNimoUJLn1KdCqSPZ9uNPgrXBzGok9NVEyAK1i&X-Amz-Signature=561d84b1f198319ae4fecf097c0cc458ed554c990162f95f98e5d0b1a8cc53e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOSKW46R%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXWAPRtKgXrEAKSTLTpZiX9%2F2ucMN%2FQ83BZ0KGx6OkHAiAD6%2BKG0uqj6aJXWA2B3hFEaJq%2BNBQaVVMLN43Y9nKLpSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDYBShUX41zvXHxQ2KtwDp5cbGnUOqukZ74qUnYUYvi7T6LSDyI0LI4sFA5vfedvOMOe4Ep9Lc6L3AbNTxHWmR7i43O8ajiX3ZxshjaJ84S9GgMelVFlv9hwR1bTu2DViCXu9LQDPR%2FEQWWa7aUHvVh8QQr3Ek7kBRpXEzWi%2BHk9g%2BOHjJ7ZRmTfxqOkUKNBvZKPtIyLzGYR%2BHR%2BbyfOVG18QlQBGAsgH%2BkAQ6042O35%2FgAb6T6zXLAb2HEusFr8uFxAEdcHQxaD3vaoPPj7pR6HtY2lLgJvH0NHu2zi4Bt258ApqijbI31ceKnLfSz5s9um5aIy00vwxnMQ4ZaJxQLzfJlx3tb54YGaJn6FG2bsWOI6Rx5nJmq3QhsyPmfNW3qFz1%2BqlLnhlRBt5Df7BycN7tlq8clqmH5%2BfKWBWVPSNX0asNklx9jznskO5Bja1ATlo7h%2FOvkltxClBjg9IRebsdIrKSBpWRtRm8PTFI00gju9QDftJPLQl8xgKWPjo%2Fly7wq3in62nT4YAq6t%2ByqezzYmPRDADxigBZhQ8ZpQsV8lggI23vs27WJC%2BRnNCiEXN3WWqeLU58Nm6Ti%2F10zq9BIyTIK9sPaHKBXxBwrpFkQDaXBLUwweFddwp6rvem6i9Ys5BdSksey4w9qKJwwY6pgGj5X3YtMd2AUhJ1qopb8xDr9BpjtEgnePoNOH0rQky3z7aa1fyYYu6BA09VDkLME%2B1LTmzoZnJia3vXu9A3wpl4Br%2BofCo3rKpAULxE4pYmdj9J3BMAKCd6l6In6cOpO3Mj6pWUH%2FBXdpOUUU2lNik2uofGj6fu6%2BMKV6mzwnIXKPg2XlcEF3IT%2FNNimoUJLn1KdCqSPZ9uNPgrXBzGok9NVEyAK1i&X-Amz-Signature=4d4c3a6d7cd9cbb3fe2207268734248756ed848c27a37a789d0afbecab543a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOSKW46R%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXWAPRtKgXrEAKSTLTpZiX9%2F2ucMN%2FQ83BZ0KGx6OkHAiAD6%2BKG0uqj6aJXWA2B3hFEaJq%2BNBQaVVMLN43Y9nKLpSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDYBShUX41zvXHxQ2KtwDp5cbGnUOqukZ74qUnYUYvi7T6LSDyI0LI4sFA5vfedvOMOe4Ep9Lc6L3AbNTxHWmR7i43O8ajiX3ZxshjaJ84S9GgMelVFlv9hwR1bTu2DViCXu9LQDPR%2FEQWWa7aUHvVh8QQr3Ek7kBRpXEzWi%2BHk9g%2BOHjJ7ZRmTfxqOkUKNBvZKPtIyLzGYR%2BHR%2BbyfOVG18QlQBGAsgH%2BkAQ6042O35%2FgAb6T6zXLAb2HEusFr8uFxAEdcHQxaD3vaoPPj7pR6HtY2lLgJvH0NHu2zi4Bt258ApqijbI31ceKnLfSz5s9um5aIy00vwxnMQ4ZaJxQLzfJlx3tb54YGaJn6FG2bsWOI6Rx5nJmq3QhsyPmfNW3qFz1%2BqlLnhlRBt5Df7BycN7tlq8clqmH5%2BfKWBWVPSNX0asNklx9jznskO5Bja1ATlo7h%2FOvkltxClBjg9IRebsdIrKSBpWRtRm8PTFI00gju9QDftJPLQl8xgKWPjo%2Fly7wq3in62nT4YAq6t%2ByqezzYmPRDADxigBZhQ8ZpQsV8lggI23vs27WJC%2BRnNCiEXN3WWqeLU58Nm6Ti%2F10zq9BIyTIK9sPaHKBXxBwrpFkQDaXBLUwweFddwp6rvem6i9Ys5BdSksey4w9qKJwwY6pgGj5X3YtMd2AUhJ1qopb8xDr9BpjtEgnePoNOH0rQky3z7aa1fyYYu6BA09VDkLME%2B1LTmzoZnJia3vXu9A3wpl4Br%2BofCo3rKpAULxE4pYmdj9J3BMAKCd6l6In6cOpO3Mj6pWUH%2FBXdpOUUU2lNik2uofGj6fu6%2BMKV6mzwnIXKPg2XlcEF3IT%2FNNimoUJLn1KdCqSPZ9uNPgrXBzGok9NVEyAK1i&X-Amz-Signature=65ee8b455d5661164c169012f46adf0092e1b3a3d7eb4ba60075836c83e71d87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOSKW46R%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXWAPRtKgXrEAKSTLTpZiX9%2F2ucMN%2FQ83BZ0KGx6OkHAiAD6%2BKG0uqj6aJXWA2B3hFEaJq%2BNBQaVVMLN43Y9nKLpSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDYBShUX41zvXHxQ2KtwDp5cbGnUOqukZ74qUnYUYvi7T6LSDyI0LI4sFA5vfedvOMOe4Ep9Lc6L3AbNTxHWmR7i43O8ajiX3ZxshjaJ84S9GgMelVFlv9hwR1bTu2DViCXu9LQDPR%2FEQWWa7aUHvVh8QQr3Ek7kBRpXEzWi%2BHk9g%2BOHjJ7ZRmTfxqOkUKNBvZKPtIyLzGYR%2BHR%2BbyfOVG18QlQBGAsgH%2BkAQ6042O35%2FgAb6T6zXLAb2HEusFr8uFxAEdcHQxaD3vaoPPj7pR6HtY2lLgJvH0NHu2zi4Bt258ApqijbI31ceKnLfSz5s9um5aIy00vwxnMQ4ZaJxQLzfJlx3tb54YGaJn6FG2bsWOI6Rx5nJmq3QhsyPmfNW3qFz1%2BqlLnhlRBt5Df7BycN7tlq8clqmH5%2BfKWBWVPSNX0asNklx9jznskO5Bja1ATlo7h%2FOvkltxClBjg9IRebsdIrKSBpWRtRm8PTFI00gju9QDftJPLQl8xgKWPjo%2Fly7wq3in62nT4YAq6t%2ByqezzYmPRDADxigBZhQ8ZpQsV8lggI23vs27WJC%2BRnNCiEXN3WWqeLU58Nm6Ti%2F10zq9BIyTIK9sPaHKBXxBwrpFkQDaXBLUwweFddwp6rvem6i9Ys5BdSksey4w9qKJwwY6pgGj5X3YtMd2AUhJ1qopb8xDr9BpjtEgnePoNOH0rQky3z7aa1fyYYu6BA09VDkLME%2B1LTmzoZnJia3vXu9A3wpl4Br%2BofCo3rKpAULxE4pYmdj9J3BMAKCd6l6In6cOpO3Mj6pWUH%2FBXdpOUUU2lNik2uofGj6fu6%2BMKV6mzwnIXKPg2XlcEF3IT%2FNNimoUJLn1KdCqSPZ9uNPgrXBzGok9NVEyAK1i&X-Amz-Signature=4f75fbbfa3647b478f566dd9db1435b69a1accd11b234d6f9790093712cddbe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOSKW46R%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXWAPRtKgXrEAKSTLTpZiX9%2F2ucMN%2FQ83BZ0KGx6OkHAiAD6%2BKG0uqj6aJXWA2B3hFEaJq%2BNBQaVVMLN43Y9nKLpSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDYBShUX41zvXHxQ2KtwDp5cbGnUOqukZ74qUnYUYvi7T6LSDyI0LI4sFA5vfedvOMOe4Ep9Lc6L3AbNTxHWmR7i43O8ajiX3ZxshjaJ84S9GgMelVFlv9hwR1bTu2DViCXu9LQDPR%2FEQWWa7aUHvVh8QQr3Ek7kBRpXEzWi%2BHk9g%2BOHjJ7ZRmTfxqOkUKNBvZKPtIyLzGYR%2BHR%2BbyfOVG18QlQBGAsgH%2BkAQ6042O35%2FgAb6T6zXLAb2HEusFr8uFxAEdcHQxaD3vaoPPj7pR6HtY2lLgJvH0NHu2zi4Bt258ApqijbI31ceKnLfSz5s9um5aIy00vwxnMQ4ZaJxQLzfJlx3tb54YGaJn6FG2bsWOI6Rx5nJmq3QhsyPmfNW3qFz1%2BqlLnhlRBt5Df7BycN7tlq8clqmH5%2BfKWBWVPSNX0asNklx9jznskO5Bja1ATlo7h%2FOvkltxClBjg9IRebsdIrKSBpWRtRm8PTFI00gju9QDftJPLQl8xgKWPjo%2Fly7wq3in62nT4YAq6t%2ByqezzYmPRDADxigBZhQ8ZpQsV8lggI23vs27WJC%2BRnNCiEXN3WWqeLU58Nm6Ti%2F10zq9BIyTIK9sPaHKBXxBwrpFkQDaXBLUwweFddwp6rvem6i9Ys5BdSksey4w9qKJwwY6pgGj5X3YtMd2AUhJ1qopb8xDr9BpjtEgnePoNOH0rQky3z7aa1fyYYu6BA09VDkLME%2B1LTmzoZnJia3vXu9A3wpl4Br%2BofCo3rKpAULxE4pYmdj9J3BMAKCd6l6In6cOpO3Mj6pWUH%2FBXdpOUUU2lNik2uofGj6fu6%2BMKV6mzwnIXKPg2XlcEF3IT%2FNNimoUJLn1KdCqSPZ9uNPgrXBzGok9NVEyAK1i&X-Amz-Signature=848b89d577be1da28c6121a37fa3473535557de6d6cb25cb5800d38edb5bcfd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOSKW46R%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXWAPRtKgXrEAKSTLTpZiX9%2F2ucMN%2FQ83BZ0KGx6OkHAiAD6%2BKG0uqj6aJXWA2B3hFEaJq%2BNBQaVVMLN43Y9nKLpSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDYBShUX41zvXHxQ2KtwDp5cbGnUOqukZ74qUnYUYvi7T6LSDyI0LI4sFA5vfedvOMOe4Ep9Lc6L3AbNTxHWmR7i43O8ajiX3ZxshjaJ84S9GgMelVFlv9hwR1bTu2DViCXu9LQDPR%2FEQWWa7aUHvVh8QQr3Ek7kBRpXEzWi%2BHk9g%2BOHjJ7ZRmTfxqOkUKNBvZKPtIyLzGYR%2BHR%2BbyfOVG18QlQBGAsgH%2BkAQ6042O35%2FgAb6T6zXLAb2HEusFr8uFxAEdcHQxaD3vaoPPj7pR6HtY2lLgJvH0NHu2zi4Bt258ApqijbI31ceKnLfSz5s9um5aIy00vwxnMQ4ZaJxQLzfJlx3tb54YGaJn6FG2bsWOI6Rx5nJmq3QhsyPmfNW3qFz1%2BqlLnhlRBt5Df7BycN7tlq8clqmH5%2BfKWBWVPSNX0asNklx9jznskO5Bja1ATlo7h%2FOvkltxClBjg9IRebsdIrKSBpWRtRm8PTFI00gju9QDftJPLQl8xgKWPjo%2Fly7wq3in62nT4YAq6t%2ByqezzYmPRDADxigBZhQ8ZpQsV8lggI23vs27WJC%2BRnNCiEXN3WWqeLU58Nm6Ti%2F10zq9BIyTIK9sPaHKBXxBwrpFkQDaXBLUwweFddwp6rvem6i9Ys5BdSksey4w9qKJwwY6pgGj5X3YtMd2AUhJ1qopb8xDr9BpjtEgnePoNOH0rQky3z7aa1fyYYu6BA09VDkLME%2B1LTmzoZnJia3vXu9A3wpl4Br%2BofCo3rKpAULxE4pYmdj9J3BMAKCd6l6In6cOpO3Mj6pWUH%2FBXdpOUUU2lNik2uofGj6fu6%2BMKV6mzwnIXKPg2XlcEF3IT%2FNNimoUJLn1KdCqSPZ9uNPgrXBzGok9NVEyAK1i&X-Amz-Signature=4b8c6b56a8937b4580907e55dba449f12883dbcda14bd893365d70b1c58cedbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
