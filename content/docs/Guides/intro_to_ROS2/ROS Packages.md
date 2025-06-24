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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EUGEBR6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T151010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDuyj2E3AX71DvaatmiJc50ekLi3HRgd9CugpuMKtoD4gIhALkq3Su2OspFJHotRE5RCNRptYk2pACIZLfipaX7n%2FraKv8DCC8QABoMNjM3NDIzMTgzODA1IgxDxs75tKBXO2jIUNcq3AMDOO0DKn3xwiEZXG5zz5exqpaveC9hW6TAj598mJpweIl08r0o5bZIU6e6DfX%2FTYu0m7L4stdIVSRijBUkJ8snho%2FcouFuqGpeeoy40panS%2FONqE7A%2BM8AbfDKLCB5uaNslOBQ98Y3%2FdMu0Y7yJrTHgKKau0e%2Bq%2B5gQQcX%2B%2FclbPa7RLQqGLkNE5IRasOc%2BpN02sk7MEtNbqtlLJ7pvXKFEs6q%2FgGuahaGlsxFdUAw9rUbCenFxRUK2iSecuZeAU%2Bwc297ETT0pEB297RzktqlC%2BVo1Fltz7ndjTHwbmXxm7iPRR6tjye7abglFiWDhzqNbbMWPUxqtQbygWZ1LeNZsIEQS0gJZYE6oNSyRGCNZ3QMhcRqPiGDoURET2pnmYBeXpG9Mlwu0tlbS1cSlZM9wJafLtEnSTe5eXA5z8UyLWvr68PZ3AJnO3SjAaQH2XnHrZbNwlq%2FzKB965jkT9acWgCshmehMBJwGIFoWpQEqSHIROsufbubNieoU%2BaNADUNzyemrsMd0harirHBIV5XWvAfzsAE80S4RIL6OBVMqN%2FqUCCSlx7jh85Reu1HoOzjZxdRib19pP2P2izNVbpO2PF3HDNLMCoy4BC5ceRxxlKUm5Y7bAZHh4xkQjC13OrCBjqkAWWX0cxRrWl4Q6Qg7%2FPfDM9XQ4A2oVE1aMUobSVAyReXWZ%2B9H8y3F1Q894kO2Iui7HsRbvqjnlkxfO9fXxp5phXG1l20XaZp84xuNI042mjpLen5Sdd%2BjAC4Rz8YICpN1mDRxwk6iztj%2B0doPcdPKTHDy0nRmMdo0TQK7awD%2FZMPABXB3G7Hb5ic4TAJpdp1uBAJyVV09bbfTQP%2BzV%2FSHyg1eV3O&X-Amz-Signature=0baff4bd6274bef4d10e9058fd4c29b5d4d9e75db2b755479363c0c98d68f0eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EUGEBR6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T151010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDuyj2E3AX71DvaatmiJc50ekLi3HRgd9CugpuMKtoD4gIhALkq3Su2OspFJHotRE5RCNRptYk2pACIZLfipaX7n%2FraKv8DCC8QABoMNjM3NDIzMTgzODA1IgxDxs75tKBXO2jIUNcq3AMDOO0DKn3xwiEZXG5zz5exqpaveC9hW6TAj598mJpweIl08r0o5bZIU6e6DfX%2FTYu0m7L4stdIVSRijBUkJ8snho%2FcouFuqGpeeoy40panS%2FONqE7A%2BM8AbfDKLCB5uaNslOBQ98Y3%2FdMu0Y7yJrTHgKKau0e%2Bq%2B5gQQcX%2B%2FclbPa7RLQqGLkNE5IRasOc%2BpN02sk7MEtNbqtlLJ7pvXKFEs6q%2FgGuahaGlsxFdUAw9rUbCenFxRUK2iSecuZeAU%2Bwc297ETT0pEB297RzktqlC%2BVo1Fltz7ndjTHwbmXxm7iPRR6tjye7abglFiWDhzqNbbMWPUxqtQbygWZ1LeNZsIEQS0gJZYE6oNSyRGCNZ3QMhcRqPiGDoURET2pnmYBeXpG9Mlwu0tlbS1cSlZM9wJafLtEnSTe5eXA5z8UyLWvr68PZ3AJnO3SjAaQH2XnHrZbNwlq%2FzKB965jkT9acWgCshmehMBJwGIFoWpQEqSHIROsufbubNieoU%2BaNADUNzyemrsMd0harirHBIV5XWvAfzsAE80S4RIL6OBVMqN%2FqUCCSlx7jh85Reu1HoOzjZxdRib19pP2P2izNVbpO2PF3HDNLMCoy4BC5ceRxxlKUm5Y7bAZHh4xkQjC13OrCBjqkAWWX0cxRrWl4Q6Qg7%2FPfDM9XQ4A2oVE1aMUobSVAyReXWZ%2B9H8y3F1Q894kO2Iui7HsRbvqjnlkxfO9fXxp5phXG1l20XaZp84xuNI042mjpLen5Sdd%2BjAC4Rz8YICpN1mDRxwk6iztj%2B0doPcdPKTHDy0nRmMdo0TQK7awD%2FZMPABXB3G7Hb5ic4TAJpdp1uBAJyVV09bbfTQP%2BzV%2FSHyg1eV3O&X-Amz-Signature=82341339cc75ee5bbb2d51bdb49f87680c168b7e39b105052396a42926e2d6d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EUGEBR6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T151010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDuyj2E3AX71DvaatmiJc50ekLi3HRgd9CugpuMKtoD4gIhALkq3Su2OspFJHotRE5RCNRptYk2pACIZLfipaX7n%2FraKv8DCC8QABoMNjM3NDIzMTgzODA1IgxDxs75tKBXO2jIUNcq3AMDOO0DKn3xwiEZXG5zz5exqpaveC9hW6TAj598mJpweIl08r0o5bZIU6e6DfX%2FTYu0m7L4stdIVSRijBUkJ8snho%2FcouFuqGpeeoy40panS%2FONqE7A%2BM8AbfDKLCB5uaNslOBQ98Y3%2FdMu0Y7yJrTHgKKau0e%2Bq%2B5gQQcX%2B%2FclbPa7RLQqGLkNE5IRasOc%2BpN02sk7MEtNbqtlLJ7pvXKFEs6q%2FgGuahaGlsxFdUAw9rUbCenFxRUK2iSecuZeAU%2Bwc297ETT0pEB297RzktqlC%2BVo1Fltz7ndjTHwbmXxm7iPRR6tjye7abglFiWDhzqNbbMWPUxqtQbygWZ1LeNZsIEQS0gJZYE6oNSyRGCNZ3QMhcRqPiGDoURET2pnmYBeXpG9Mlwu0tlbS1cSlZM9wJafLtEnSTe5eXA5z8UyLWvr68PZ3AJnO3SjAaQH2XnHrZbNwlq%2FzKB965jkT9acWgCshmehMBJwGIFoWpQEqSHIROsufbubNieoU%2BaNADUNzyemrsMd0harirHBIV5XWvAfzsAE80S4RIL6OBVMqN%2FqUCCSlx7jh85Reu1HoOzjZxdRib19pP2P2izNVbpO2PF3HDNLMCoy4BC5ceRxxlKUm5Y7bAZHh4xkQjC13OrCBjqkAWWX0cxRrWl4Q6Qg7%2FPfDM9XQ4A2oVE1aMUobSVAyReXWZ%2B9H8y3F1Q894kO2Iui7HsRbvqjnlkxfO9fXxp5phXG1l20XaZp84xuNI042mjpLen5Sdd%2BjAC4Rz8YICpN1mDRxwk6iztj%2B0doPcdPKTHDy0nRmMdo0TQK7awD%2FZMPABXB3G7Hb5ic4TAJpdp1uBAJyVV09bbfTQP%2BzV%2FSHyg1eV3O&X-Amz-Signature=f735401239549be5c62241c75e2573f0d121ba34cf282ae4de3d7e2d26cb4050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EUGEBR6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T151010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDuyj2E3AX71DvaatmiJc50ekLi3HRgd9CugpuMKtoD4gIhALkq3Su2OspFJHotRE5RCNRptYk2pACIZLfipaX7n%2FraKv8DCC8QABoMNjM3NDIzMTgzODA1IgxDxs75tKBXO2jIUNcq3AMDOO0DKn3xwiEZXG5zz5exqpaveC9hW6TAj598mJpweIl08r0o5bZIU6e6DfX%2FTYu0m7L4stdIVSRijBUkJ8snho%2FcouFuqGpeeoy40panS%2FONqE7A%2BM8AbfDKLCB5uaNslOBQ98Y3%2FdMu0Y7yJrTHgKKau0e%2Bq%2B5gQQcX%2B%2FclbPa7RLQqGLkNE5IRasOc%2BpN02sk7MEtNbqtlLJ7pvXKFEs6q%2FgGuahaGlsxFdUAw9rUbCenFxRUK2iSecuZeAU%2Bwc297ETT0pEB297RzktqlC%2BVo1Fltz7ndjTHwbmXxm7iPRR6tjye7abglFiWDhzqNbbMWPUxqtQbygWZ1LeNZsIEQS0gJZYE6oNSyRGCNZ3QMhcRqPiGDoURET2pnmYBeXpG9Mlwu0tlbS1cSlZM9wJafLtEnSTe5eXA5z8UyLWvr68PZ3AJnO3SjAaQH2XnHrZbNwlq%2FzKB965jkT9acWgCshmehMBJwGIFoWpQEqSHIROsufbubNieoU%2BaNADUNzyemrsMd0harirHBIV5XWvAfzsAE80S4RIL6OBVMqN%2FqUCCSlx7jh85Reu1HoOzjZxdRib19pP2P2izNVbpO2PF3HDNLMCoy4BC5ceRxxlKUm5Y7bAZHh4xkQjC13OrCBjqkAWWX0cxRrWl4Q6Qg7%2FPfDM9XQ4A2oVE1aMUobSVAyReXWZ%2B9H8y3F1Q894kO2Iui7HsRbvqjnlkxfO9fXxp5phXG1l20XaZp84xuNI042mjpLen5Sdd%2BjAC4Rz8YICpN1mDRxwk6iztj%2B0doPcdPKTHDy0nRmMdo0TQK7awD%2FZMPABXB3G7Hb5ic4TAJpdp1uBAJyVV09bbfTQP%2BzV%2FSHyg1eV3O&X-Amz-Signature=c9e6d16d0a462e52bf43afeebabef20bf9f5db0cf55d40b910c89dd0bb692f4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EUGEBR6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T151010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDuyj2E3AX71DvaatmiJc50ekLi3HRgd9CugpuMKtoD4gIhALkq3Su2OspFJHotRE5RCNRptYk2pACIZLfipaX7n%2FraKv8DCC8QABoMNjM3NDIzMTgzODA1IgxDxs75tKBXO2jIUNcq3AMDOO0DKn3xwiEZXG5zz5exqpaveC9hW6TAj598mJpweIl08r0o5bZIU6e6DfX%2FTYu0m7L4stdIVSRijBUkJ8snho%2FcouFuqGpeeoy40panS%2FONqE7A%2BM8AbfDKLCB5uaNslOBQ98Y3%2FdMu0Y7yJrTHgKKau0e%2Bq%2B5gQQcX%2B%2FclbPa7RLQqGLkNE5IRasOc%2BpN02sk7MEtNbqtlLJ7pvXKFEs6q%2FgGuahaGlsxFdUAw9rUbCenFxRUK2iSecuZeAU%2Bwc297ETT0pEB297RzktqlC%2BVo1Fltz7ndjTHwbmXxm7iPRR6tjye7abglFiWDhzqNbbMWPUxqtQbygWZ1LeNZsIEQS0gJZYE6oNSyRGCNZ3QMhcRqPiGDoURET2pnmYBeXpG9Mlwu0tlbS1cSlZM9wJafLtEnSTe5eXA5z8UyLWvr68PZ3AJnO3SjAaQH2XnHrZbNwlq%2FzKB965jkT9acWgCshmehMBJwGIFoWpQEqSHIROsufbubNieoU%2BaNADUNzyemrsMd0harirHBIV5XWvAfzsAE80S4RIL6OBVMqN%2FqUCCSlx7jh85Reu1HoOzjZxdRib19pP2P2izNVbpO2PF3HDNLMCoy4BC5ceRxxlKUm5Y7bAZHh4xkQjC13OrCBjqkAWWX0cxRrWl4Q6Qg7%2FPfDM9XQ4A2oVE1aMUobSVAyReXWZ%2B9H8y3F1Q894kO2Iui7HsRbvqjnlkxfO9fXxp5phXG1l20XaZp84xuNI042mjpLen5Sdd%2BjAC4Rz8YICpN1mDRxwk6iztj%2B0doPcdPKTHDy0nRmMdo0TQK7awD%2FZMPABXB3G7Hb5ic4TAJpdp1uBAJyVV09bbfTQP%2BzV%2FSHyg1eV3O&X-Amz-Signature=599f8b3cc48c183c6bc8d4f840c6b3520e58391df3e82cd7ced232aa2249a74e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EUGEBR6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T151011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDuyj2E3AX71DvaatmiJc50ekLi3HRgd9CugpuMKtoD4gIhALkq3Su2OspFJHotRE5RCNRptYk2pACIZLfipaX7n%2FraKv8DCC8QABoMNjM3NDIzMTgzODA1IgxDxs75tKBXO2jIUNcq3AMDOO0DKn3xwiEZXG5zz5exqpaveC9hW6TAj598mJpweIl08r0o5bZIU6e6DfX%2FTYu0m7L4stdIVSRijBUkJ8snho%2FcouFuqGpeeoy40panS%2FONqE7A%2BM8AbfDKLCB5uaNslOBQ98Y3%2FdMu0Y7yJrTHgKKau0e%2Bq%2B5gQQcX%2B%2FclbPa7RLQqGLkNE5IRasOc%2BpN02sk7MEtNbqtlLJ7pvXKFEs6q%2FgGuahaGlsxFdUAw9rUbCenFxRUK2iSecuZeAU%2Bwc297ETT0pEB297RzktqlC%2BVo1Fltz7ndjTHwbmXxm7iPRR6tjye7abglFiWDhzqNbbMWPUxqtQbygWZ1LeNZsIEQS0gJZYE6oNSyRGCNZ3QMhcRqPiGDoURET2pnmYBeXpG9Mlwu0tlbS1cSlZM9wJafLtEnSTe5eXA5z8UyLWvr68PZ3AJnO3SjAaQH2XnHrZbNwlq%2FzKB965jkT9acWgCshmehMBJwGIFoWpQEqSHIROsufbubNieoU%2BaNADUNzyemrsMd0harirHBIV5XWvAfzsAE80S4RIL6OBVMqN%2FqUCCSlx7jh85Reu1HoOzjZxdRib19pP2P2izNVbpO2PF3HDNLMCoy4BC5ceRxxlKUm5Y7bAZHh4xkQjC13OrCBjqkAWWX0cxRrWl4Q6Qg7%2FPfDM9XQ4A2oVE1aMUobSVAyReXWZ%2B9H8y3F1Q894kO2Iui7HsRbvqjnlkxfO9fXxp5phXG1l20XaZp84xuNI042mjpLen5Sdd%2BjAC4Rz8YICpN1mDRxwk6iztj%2B0doPcdPKTHDy0nRmMdo0TQK7awD%2FZMPABXB3G7Hb5ic4TAJpdp1uBAJyVV09bbfTQP%2BzV%2FSHyg1eV3O&X-Amz-Signature=0593815b0d7cb0c150339f00a5c14616e1b922e3d7ae55446b125baa6a3e64e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EUGEBR6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T151011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDuyj2E3AX71DvaatmiJc50ekLi3HRgd9CugpuMKtoD4gIhALkq3Su2OspFJHotRE5RCNRptYk2pACIZLfipaX7n%2FraKv8DCC8QABoMNjM3NDIzMTgzODA1IgxDxs75tKBXO2jIUNcq3AMDOO0DKn3xwiEZXG5zz5exqpaveC9hW6TAj598mJpweIl08r0o5bZIU6e6DfX%2FTYu0m7L4stdIVSRijBUkJ8snho%2FcouFuqGpeeoy40panS%2FONqE7A%2BM8AbfDKLCB5uaNslOBQ98Y3%2FdMu0Y7yJrTHgKKau0e%2Bq%2B5gQQcX%2B%2FclbPa7RLQqGLkNE5IRasOc%2BpN02sk7MEtNbqtlLJ7pvXKFEs6q%2FgGuahaGlsxFdUAw9rUbCenFxRUK2iSecuZeAU%2Bwc297ETT0pEB297RzktqlC%2BVo1Fltz7ndjTHwbmXxm7iPRR6tjye7abglFiWDhzqNbbMWPUxqtQbygWZ1LeNZsIEQS0gJZYE6oNSyRGCNZ3QMhcRqPiGDoURET2pnmYBeXpG9Mlwu0tlbS1cSlZM9wJafLtEnSTe5eXA5z8UyLWvr68PZ3AJnO3SjAaQH2XnHrZbNwlq%2FzKB965jkT9acWgCshmehMBJwGIFoWpQEqSHIROsufbubNieoU%2BaNADUNzyemrsMd0harirHBIV5XWvAfzsAE80S4RIL6OBVMqN%2FqUCCSlx7jh85Reu1HoOzjZxdRib19pP2P2izNVbpO2PF3HDNLMCoy4BC5ceRxxlKUm5Y7bAZHh4xkQjC13OrCBjqkAWWX0cxRrWl4Q6Qg7%2FPfDM9XQ4A2oVE1aMUobSVAyReXWZ%2B9H8y3F1Q894kO2Iui7HsRbvqjnlkxfO9fXxp5phXG1l20XaZp84xuNI042mjpLen5Sdd%2BjAC4Rz8YICpN1mDRxwk6iztj%2B0doPcdPKTHDy0nRmMdo0TQK7awD%2FZMPABXB3G7Hb5ic4TAJpdp1uBAJyVV09bbfTQP%2BzV%2FSHyg1eV3O&X-Amz-Signature=bbea19081f956c4d8b044f0e4de25030967cff819a4a3b71ee1174230597c1c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
