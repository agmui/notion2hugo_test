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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SX5H7MB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICvKtSRZK9zJqed5sUUSlNkzhIaNSVHnc%2FVh3prDLdjgAiEAlANN1vlZ2vtP72hTQASWa0qWhmto1kGxqGyH%2Bk3gVacqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmeOfVX%2BHWBTtcu%2FSrcAwUu0%2FIwCXSq9p4bV%2F99zSijg6EUdJJChfDTuFPxvDMunBhhOAQueIeqLWvt1TO0l%2FT3M0A810UYVa4OVOV9BSrS9pNrNMlfk1ZkCYYtRDmmqgbG5vLY03a8alSZ19d5JBzby%2B%2Bn0J%2F%2BLFPf8JMkk7AeHqT3hh5FNXI66vFi5c%2Fi2pP1n4SALA4u6dRK9vi0RdzsQtVkcloo%2Fme3YoMae4LTCXOUlNjpGNXI8fInG6R%2BNIieqKswnT68pLhxQK%2FvylCmTdBjCNUo3UH54lusDA4c%2FGsfQVJGVKdjTzZ9tTlAMLFsUzhGFhImbQMHnHr%2ByQ5TgWJuG0Z2XA3lRCwps0DkcGGQ1tL%2FsGek%2F9nn5hpZMLbFehpG3PiwkTfCuBY8q5ybP9LDu3hag69C5eyU3cjsR14SEgB56ndBLBP0jAjJumAxhvGQcmZv%2Fbm4yLfyH69JOh6YtXcw%2B382ntY58d%2F2r9Z6V9VQBWfODdW42tUSnASWYf4NONAVw%2B7Nzwo4cUyzzp6rU0vYuBqi4t%2FWBjmJ83oEPm7SCfjWJB1eg5qTNLJJlKRhcn%2FpIEnH9qNELcE6y8nT0BT%2BTq%2FdGWL5LPEZlsk7woXMh52lvli9DDg42OcCb4G2nRfKcGHUMJGThr4GOqUB%2By6WVGinn3ggsvS%2BWGD2Y9bQXM0gvSkVtpyDgkflE0pNHj1R4ycS6REuiAQD8j6wSLSN8P0R7u4HiAxcV6zbUGFk%2Fu1uyiwoYLVv3IjM9tpywWgwEXG381LLnA1Q1Q77CJi9sbIAJKedGOjOLs074V0nZiY4xyjnhiWbd%2FDkUPyd2Nl2%2BQZDY7msMGFHQAqNJIsNCjrJN6JGVZ4Jpm3sw57xgEtr&X-Amz-Signature=07fabc86f984c8295e6df5f1a822514746bfbe8fb643a775876442c5ab2f9bd6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SX5H7MB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICvKtSRZK9zJqed5sUUSlNkzhIaNSVHnc%2FVh3prDLdjgAiEAlANN1vlZ2vtP72hTQASWa0qWhmto1kGxqGyH%2Bk3gVacqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmeOfVX%2BHWBTtcu%2FSrcAwUu0%2FIwCXSq9p4bV%2F99zSijg6EUdJJChfDTuFPxvDMunBhhOAQueIeqLWvt1TO0l%2FT3M0A810UYVa4OVOV9BSrS9pNrNMlfk1ZkCYYtRDmmqgbG5vLY03a8alSZ19d5JBzby%2B%2Bn0J%2F%2BLFPf8JMkk7AeHqT3hh5FNXI66vFi5c%2Fi2pP1n4SALA4u6dRK9vi0RdzsQtVkcloo%2Fme3YoMae4LTCXOUlNjpGNXI8fInG6R%2BNIieqKswnT68pLhxQK%2FvylCmTdBjCNUo3UH54lusDA4c%2FGsfQVJGVKdjTzZ9tTlAMLFsUzhGFhImbQMHnHr%2ByQ5TgWJuG0Z2XA3lRCwps0DkcGGQ1tL%2FsGek%2F9nn5hpZMLbFehpG3PiwkTfCuBY8q5ybP9LDu3hag69C5eyU3cjsR14SEgB56ndBLBP0jAjJumAxhvGQcmZv%2Fbm4yLfyH69JOh6YtXcw%2B382ntY58d%2F2r9Z6V9VQBWfODdW42tUSnASWYf4NONAVw%2B7Nzwo4cUyzzp6rU0vYuBqi4t%2FWBjmJ83oEPm7SCfjWJB1eg5qTNLJJlKRhcn%2FpIEnH9qNELcE6y8nT0BT%2BTq%2FdGWL5LPEZlsk7woXMh52lvli9DDg42OcCb4G2nRfKcGHUMJGThr4GOqUB%2By6WVGinn3ggsvS%2BWGD2Y9bQXM0gvSkVtpyDgkflE0pNHj1R4ycS6REuiAQD8j6wSLSN8P0R7u4HiAxcV6zbUGFk%2Fu1uyiwoYLVv3IjM9tpywWgwEXG381LLnA1Q1Q77CJi9sbIAJKedGOjOLs074V0nZiY4xyjnhiWbd%2FDkUPyd2Nl2%2BQZDY7msMGFHQAqNJIsNCjrJN6JGVZ4Jpm3sw57xgEtr&X-Amz-Signature=118b16d83942d751a096556de885dbe4cfa2d4a851b6a058b3f6d8d06f189b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SX5H7MB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICvKtSRZK9zJqed5sUUSlNkzhIaNSVHnc%2FVh3prDLdjgAiEAlANN1vlZ2vtP72hTQASWa0qWhmto1kGxqGyH%2Bk3gVacqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmeOfVX%2BHWBTtcu%2FSrcAwUu0%2FIwCXSq9p4bV%2F99zSijg6EUdJJChfDTuFPxvDMunBhhOAQueIeqLWvt1TO0l%2FT3M0A810UYVa4OVOV9BSrS9pNrNMlfk1ZkCYYtRDmmqgbG5vLY03a8alSZ19d5JBzby%2B%2Bn0J%2F%2BLFPf8JMkk7AeHqT3hh5FNXI66vFi5c%2Fi2pP1n4SALA4u6dRK9vi0RdzsQtVkcloo%2Fme3YoMae4LTCXOUlNjpGNXI8fInG6R%2BNIieqKswnT68pLhxQK%2FvylCmTdBjCNUo3UH54lusDA4c%2FGsfQVJGVKdjTzZ9tTlAMLFsUzhGFhImbQMHnHr%2ByQ5TgWJuG0Z2XA3lRCwps0DkcGGQ1tL%2FsGek%2F9nn5hpZMLbFehpG3PiwkTfCuBY8q5ybP9LDu3hag69C5eyU3cjsR14SEgB56ndBLBP0jAjJumAxhvGQcmZv%2Fbm4yLfyH69JOh6YtXcw%2B382ntY58d%2F2r9Z6V9VQBWfODdW42tUSnASWYf4NONAVw%2B7Nzwo4cUyzzp6rU0vYuBqi4t%2FWBjmJ83oEPm7SCfjWJB1eg5qTNLJJlKRhcn%2FpIEnH9qNELcE6y8nT0BT%2BTq%2FdGWL5LPEZlsk7woXMh52lvli9DDg42OcCb4G2nRfKcGHUMJGThr4GOqUB%2By6WVGinn3ggsvS%2BWGD2Y9bQXM0gvSkVtpyDgkflE0pNHj1R4ycS6REuiAQD8j6wSLSN8P0R7u4HiAxcV6zbUGFk%2Fu1uyiwoYLVv3IjM9tpywWgwEXG381LLnA1Q1Q77CJi9sbIAJKedGOjOLs074V0nZiY4xyjnhiWbd%2FDkUPyd2Nl2%2BQZDY7msMGFHQAqNJIsNCjrJN6JGVZ4Jpm3sw57xgEtr&X-Amz-Signature=387d5c35601e2720682497d1f14984f1ad8a4fc184a63be819ca981804a0afd1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SX5H7MB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICvKtSRZK9zJqed5sUUSlNkzhIaNSVHnc%2FVh3prDLdjgAiEAlANN1vlZ2vtP72hTQASWa0qWhmto1kGxqGyH%2Bk3gVacqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmeOfVX%2BHWBTtcu%2FSrcAwUu0%2FIwCXSq9p4bV%2F99zSijg6EUdJJChfDTuFPxvDMunBhhOAQueIeqLWvt1TO0l%2FT3M0A810UYVa4OVOV9BSrS9pNrNMlfk1ZkCYYtRDmmqgbG5vLY03a8alSZ19d5JBzby%2B%2Bn0J%2F%2BLFPf8JMkk7AeHqT3hh5FNXI66vFi5c%2Fi2pP1n4SALA4u6dRK9vi0RdzsQtVkcloo%2Fme3YoMae4LTCXOUlNjpGNXI8fInG6R%2BNIieqKswnT68pLhxQK%2FvylCmTdBjCNUo3UH54lusDA4c%2FGsfQVJGVKdjTzZ9tTlAMLFsUzhGFhImbQMHnHr%2ByQ5TgWJuG0Z2XA3lRCwps0DkcGGQ1tL%2FsGek%2F9nn5hpZMLbFehpG3PiwkTfCuBY8q5ybP9LDu3hag69C5eyU3cjsR14SEgB56ndBLBP0jAjJumAxhvGQcmZv%2Fbm4yLfyH69JOh6YtXcw%2B382ntY58d%2F2r9Z6V9VQBWfODdW42tUSnASWYf4NONAVw%2B7Nzwo4cUyzzp6rU0vYuBqi4t%2FWBjmJ83oEPm7SCfjWJB1eg5qTNLJJlKRhcn%2FpIEnH9qNELcE6y8nT0BT%2BTq%2FdGWL5LPEZlsk7woXMh52lvli9DDg42OcCb4G2nRfKcGHUMJGThr4GOqUB%2By6WVGinn3ggsvS%2BWGD2Y9bQXM0gvSkVtpyDgkflE0pNHj1R4ycS6REuiAQD8j6wSLSN8P0R7u4HiAxcV6zbUGFk%2Fu1uyiwoYLVv3IjM9tpywWgwEXG381LLnA1Q1Q77CJi9sbIAJKedGOjOLs074V0nZiY4xyjnhiWbd%2FDkUPyd2Nl2%2BQZDY7msMGFHQAqNJIsNCjrJN6JGVZ4Jpm3sw57xgEtr&X-Amz-Signature=40a323d08be1b60897de40613f400068c4ee0a8ff01fd2c9bb1c762d25247ffb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SX5H7MB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICvKtSRZK9zJqed5sUUSlNkzhIaNSVHnc%2FVh3prDLdjgAiEAlANN1vlZ2vtP72hTQASWa0qWhmto1kGxqGyH%2Bk3gVacqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmeOfVX%2BHWBTtcu%2FSrcAwUu0%2FIwCXSq9p4bV%2F99zSijg6EUdJJChfDTuFPxvDMunBhhOAQueIeqLWvt1TO0l%2FT3M0A810UYVa4OVOV9BSrS9pNrNMlfk1ZkCYYtRDmmqgbG5vLY03a8alSZ19d5JBzby%2B%2Bn0J%2F%2BLFPf8JMkk7AeHqT3hh5FNXI66vFi5c%2Fi2pP1n4SALA4u6dRK9vi0RdzsQtVkcloo%2Fme3YoMae4LTCXOUlNjpGNXI8fInG6R%2BNIieqKswnT68pLhxQK%2FvylCmTdBjCNUo3UH54lusDA4c%2FGsfQVJGVKdjTzZ9tTlAMLFsUzhGFhImbQMHnHr%2ByQ5TgWJuG0Z2XA3lRCwps0DkcGGQ1tL%2FsGek%2F9nn5hpZMLbFehpG3PiwkTfCuBY8q5ybP9LDu3hag69C5eyU3cjsR14SEgB56ndBLBP0jAjJumAxhvGQcmZv%2Fbm4yLfyH69JOh6YtXcw%2B382ntY58d%2F2r9Z6V9VQBWfODdW42tUSnASWYf4NONAVw%2B7Nzwo4cUyzzp6rU0vYuBqi4t%2FWBjmJ83oEPm7SCfjWJB1eg5qTNLJJlKRhcn%2FpIEnH9qNELcE6y8nT0BT%2BTq%2FdGWL5LPEZlsk7woXMh52lvli9DDg42OcCb4G2nRfKcGHUMJGThr4GOqUB%2By6WVGinn3ggsvS%2BWGD2Y9bQXM0gvSkVtpyDgkflE0pNHj1R4ycS6REuiAQD8j6wSLSN8P0R7u4HiAxcV6zbUGFk%2Fu1uyiwoYLVv3IjM9tpywWgwEXG381LLnA1Q1Q77CJi9sbIAJKedGOjOLs074V0nZiY4xyjnhiWbd%2FDkUPyd2Nl2%2BQZDY7msMGFHQAqNJIsNCjrJN6JGVZ4Jpm3sw57xgEtr&X-Amz-Signature=15c5814039286fe61f478c148cfa8b50ca06536fd7c3d5116ce34e128a3e9781&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SX5H7MB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICvKtSRZK9zJqed5sUUSlNkzhIaNSVHnc%2FVh3prDLdjgAiEAlANN1vlZ2vtP72hTQASWa0qWhmto1kGxqGyH%2Bk3gVacqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmeOfVX%2BHWBTtcu%2FSrcAwUu0%2FIwCXSq9p4bV%2F99zSijg6EUdJJChfDTuFPxvDMunBhhOAQueIeqLWvt1TO0l%2FT3M0A810UYVa4OVOV9BSrS9pNrNMlfk1ZkCYYtRDmmqgbG5vLY03a8alSZ19d5JBzby%2B%2Bn0J%2F%2BLFPf8JMkk7AeHqT3hh5FNXI66vFi5c%2Fi2pP1n4SALA4u6dRK9vi0RdzsQtVkcloo%2Fme3YoMae4LTCXOUlNjpGNXI8fInG6R%2BNIieqKswnT68pLhxQK%2FvylCmTdBjCNUo3UH54lusDA4c%2FGsfQVJGVKdjTzZ9tTlAMLFsUzhGFhImbQMHnHr%2ByQ5TgWJuG0Z2XA3lRCwps0DkcGGQ1tL%2FsGek%2F9nn5hpZMLbFehpG3PiwkTfCuBY8q5ybP9LDu3hag69C5eyU3cjsR14SEgB56ndBLBP0jAjJumAxhvGQcmZv%2Fbm4yLfyH69JOh6YtXcw%2B382ntY58d%2F2r9Z6V9VQBWfODdW42tUSnASWYf4NONAVw%2B7Nzwo4cUyzzp6rU0vYuBqi4t%2FWBjmJ83oEPm7SCfjWJB1eg5qTNLJJlKRhcn%2FpIEnH9qNELcE6y8nT0BT%2BTq%2FdGWL5LPEZlsk7woXMh52lvli9DDg42OcCb4G2nRfKcGHUMJGThr4GOqUB%2By6WVGinn3ggsvS%2BWGD2Y9bQXM0gvSkVtpyDgkflE0pNHj1R4ycS6REuiAQD8j6wSLSN8P0R7u4HiAxcV6zbUGFk%2Fu1uyiwoYLVv3IjM9tpywWgwEXG381LLnA1Q1Q77CJi9sbIAJKedGOjOLs074V0nZiY4xyjnhiWbd%2FDkUPyd2Nl2%2BQZDY7msMGFHQAqNJIsNCjrJN6JGVZ4Jpm3sw57xgEtr&X-Amz-Signature=9eb67f60e85d8751e5039090743ee9d338f2b0f5866442e4669a4e1f941b93d2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SX5H7MB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICvKtSRZK9zJqed5sUUSlNkzhIaNSVHnc%2FVh3prDLdjgAiEAlANN1vlZ2vtP72hTQASWa0qWhmto1kGxqGyH%2Bk3gVacqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmeOfVX%2BHWBTtcu%2FSrcAwUu0%2FIwCXSq9p4bV%2F99zSijg6EUdJJChfDTuFPxvDMunBhhOAQueIeqLWvt1TO0l%2FT3M0A810UYVa4OVOV9BSrS9pNrNMlfk1ZkCYYtRDmmqgbG5vLY03a8alSZ19d5JBzby%2B%2Bn0J%2F%2BLFPf8JMkk7AeHqT3hh5FNXI66vFi5c%2Fi2pP1n4SALA4u6dRK9vi0RdzsQtVkcloo%2Fme3YoMae4LTCXOUlNjpGNXI8fInG6R%2BNIieqKswnT68pLhxQK%2FvylCmTdBjCNUo3UH54lusDA4c%2FGsfQVJGVKdjTzZ9tTlAMLFsUzhGFhImbQMHnHr%2ByQ5TgWJuG0Z2XA3lRCwps0DkcGGQ1tL%2FsGek%2F9nn5hpZMLbFehpG3PiwkTfCuBY8q5ybP9LDu3hag69C5eyU3cjsR14SEgB56ndBLBP0jAjJumAxhvGQcmZv%2Fbm4yLfyH69JOh6YtXcw%2B382ntY58d%2F2r9Z6V9VQBWfODdW42tUSnASWYf4NONAVw%2B7Nzwo4cUyzzp6rU0vYuBqi4t%2FWBjmJ83oEPm7SCfjWJB1eg5qTNLJJlKRhcn%2FpIEnH9qNELcE6y8nT0BT%2BTq%2FdGWL5LPEZlsk7woXMh52lvli9DDg42OcCb4G2nRfKcGHUMJGThr4GOqUB%2By6WVGinn3ggsvS%2BWGD2Y9bQXM0gvSkVtpyDgkflE0pNHj1R4ycS6REuiAQD8j6wSLSN8P0R7u4HiAxcV6zbUGFk%2Fu1uyiwoYLVv3IjM9tpywWgwEXG381LLnA1Q1Q77CJi9sbIAJKedGOjOLs074V0nZiY4xyjnhiWbd%2FDkUPyd2Nl2%2BQZDY7msMGFHQAqNJIsNCjrJN6JGVZ4Jpm3sw57xgEtr&X-Amz-Signature=28dcc75697d37a09980e579dd567c34e5c6a27cf599f60fb1f0cabdcd500e186&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
