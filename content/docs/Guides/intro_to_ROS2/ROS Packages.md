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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEM44FX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8WCTfPDJ%2Fw%2FFXUCgPKZ5sovfRJ2ZK2Shz5W6VUELlkAiEAhqeKdAhLtdimiUHZNel9A9KRPujPcceM3h3NBqjXL%2BYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDbsNgOlCJiRkWWlAircAxXSqNPWOy2wOB1z25bcBx5%2Byfv2OY7zSOO5aeO5SlIXL62L1j9wLbY3sRGJ%2F3iVjMVH10t59oPGHDGwAZhYmBv%2FCx3di0oD%2BmwQmE3hK6JGc4SQJ041LWV35AD2oZyEzQ4KYRdYqH%2B5pvvqkqlJpFnug8CXjVISQ2mDGghB86ho0vGXUH7fNqWm56Uzl11EimU%2BAHseZ56z6Mudn2Z2o1FvWDoLSXfarUIQpi2FT7CIlHQJoUo%2BTrivlCGfjeX%2Fsc3qJhdRWO%2BfQsGQdr1vEfcbShEarNT8w1LO0TqXZgP9YpvuHCb6xEFAXrIJVyeWJtSC8VTHFp4pp9ji8jp1AreU9OHs3tdr%2F7o6CUBgS4u9aN7W7EutJa%2Fkrq4fr1eG9JsBozDXXfmEWH7PViSi2GeVd%2F8pWiMcjLofqfNryVNV6DX4Ywbm79JqFs7kWqOupZcoK%2BXrziPaRuzBMbz5gZLz7tAnGhLoDbV3x0z2MXjvGbf%2BJUV9S0SVwpH0vV3WDg7mKalYgNr6%2BeNXhl7NFAkvJiR4aM2h4g%2BGB3XA5wiyhhUWIt0zZqgQEZ7zT3CxjvJycaciVCiDB%2FXF8dvTSqmDqpzlpfDRa4MQNaplTsDkm6inj4urv41LsVxLMKL3%2F78GOqUBWWiMei8ZFmjRtDdLvsjWEU7mo4AWj0ejhTVAzwZmXIFvWZ45wAP%2B9uxMVkZD2ysZKqRPposav%2F21enM4U2an3SAeppyPC71kB%2FOJzMtQWMthm%2F4lMTjTyB6kgMAiFKjjubad%2FWuqcblDFBjxs27cOtecQo4N5sQLlqIM0sEIKBGc4AI2Uade3W3eGwfYlN9kzcHjiDCZlZA34L3l6LTzAtDZG82L&X-Amz-Signature=165143a03138a771b7598c0b656ee7455d92d5c7791c679370951cef6eed760e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEM44FX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8WCTfPDJ%2Fw%2FFXUCgPKZ5sovfRJ2ZK2Shz5W6VUELlkAiEAhqeKdAhLtdimiUHZNel9A9KRPujPcceM3h3NBqjXL%2BYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDbsNgOlCJiRkWWlAircAxXSqNPWOy2wOB1z25bcBx5%2Byfv2OY7zSOO5aeO5SlIXL62L1j9wLbY3sRGJ%2F3iVjMVH10t59oPGHDGwAZhYmBv%2FCx3di0oD%2BmwQmE3hK6JGc4SQJ041LWV35AD2oZyEzQ4KYRdYqH%2B5pvvqkqlJpFnug8CXjVISQ2mDGghB86ho0vGXUH7fNqWm56Uzl11EimU%2BAHseZ56z6Mudn2Z2o1FvWDoLSXfarUIQpi2FT7CIlHQJoUo%2BTrivlCGfjeX%2Fsc3qJhdRWO%2BfQsGQdr1vEfcbShEarNT8w1LO0TqXZgP9YpvuHCb6xEFAXrIJVyeWJtSC8VTHFp4pp9ji8jp1AreU9OHs3tdr%2F7o6CUBgS4u9aN7W7EutJa%2Fkrq4fr1eG9JsBozDXXfmEWH7PViSi2GeVd%2F8pWiMcjLofqfNryVNV6DX4Ywbm79JqFs7kWqOupZcoK%2BXrziPaRuzBMbz5gZLz7tAnGhLoDbV3x0z2MXjvGbf%2BJUV9S0SVwpH0vV3WDg7mKalYgNr6%2BeNXhl7NFAkvJiR4aM2h4g%2BGB3XA5wiyhhUWIt0zZqgQEZ7zT3CxjvJycaciVCiDB%2FXF8dvTSqmDqpzlpfDRa4MQNaplTsDkm6inj4urv41LsVxLMKL3%2F78GOqUBWWiMei8ZFmjRtDdLvsjWEU7mo4AWj0ejhTVAzwZmXIFvWZ45wAP%2B9uxMVkZD2ysZKqRPposav%2F21enM4U2an3SAeppyPC71kB%2FOJzMtQWMthm%2F4lMTjTyB6kgMAiFKjjubad%2FWuqcblDFBjxs27cOtecQo4N5sQLlqIM0sEIKBGc4AI2Uade3W3eGwfYlN9kzcHjiDCZlZA34L3l6LTzAtDZG82L&X-Amz-Signature=1e2b504bc5362f5d0adb8b6130c6716720c62572a54a1b129639f84c6e9d9d16&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEM44FX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8WCTfPDJ%2Fw%2FFXUCgPKZ5sovfRJ2ZK2Shz5W6VUELlkAiEAhqeKdAhLtdimiUHZNel9A9KRPujPcceM3h3NBqjXL%2BYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDbsNgOlCJiRkWWlAircAxXSqNPWOy2wOB1z25bcBx5%2Byfv2OY7zSOO5aeO5SlIXL62L1j9wLbY3sRGJ%2F3iVjMVH10t59oPGHDGwAZhYmBv%2FCx3di0oD%2BmwQmE3hK6JGc4SQJ041LWV35AD2oZyEzQ4KYRdYqH%2B5pvvqkqlJpFnug8CXjVISQ2mDGghB86ho0vGXUH7fNqWm56Uzl11EimU%2BAHseZ56z6Mudn2Z2o1FvWDoLSXfarUIQpi2FT7CIlHQJoUo%2BTrivlCGfjeX%2Fsc3qJhdRWO%2BfQsGQdr1vEfcbShEarNT8w1LO0TqXZgP9YpvuHCb6xEFAXrIJVyeWJtSC8VTHFp4pp9ji8jp1AreU9OHs3tdr%2F7o6CUBgS4u9aN7W7EutJa%2Fkrq4fr1eG9JsBozDXXfmEWH7PViSi2GeVd%2F8pWiMcjLofqfNryVNV6DX4Ywbm79JqFs7kWqOupZcoK%2BXrziPaRuzBMbz5gZLz7tAnGhLoDbV3x0z2MXjvGbf%2BJUV9S0SVwpH0vV3WDg7mKalYgNr6%2BeNXhl7NFAkvJiR4aM2h4g%2BGB3XA5wiyhhUWIt0zZqgQEZ7zT3CxjvJycaciVCiDB%2FXF8dvTSqmDqpzlpfDRa4MQNaplTsDkm6inj4urv41LsVxLMKL3%2F78GOqUBWWiMei8ZFmjRtDdLvsjWEU7mo4AWj0ejhTVAzwZmXIFvWZ45wAP%2B9uxMVkZD2ysZKqRPposav%2F21enM4U2an3SAeppyPC71kB%2FOJzMtQWMthm%2F4lMTjTyB6kgMAiFKjjubad%2FWuqcblDFBjxs27cOtecQo4N5sQLlqIM0sEIKBGc4AI2Uade3W3eGwfYlN9kzcHjiDCZlZA34L3l6LTzAtDZG82L&X-Amz-Signature=eb82cedfe52228ec8e80ae20ef934b6417da7d02f9df11119cd3fa4e4d90c544&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEM44FX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8WCTfPDJ%2Fw%2FFXUCgPKZ5sovfRJ2ZK2Shz5W6VUELlkAiEAhqeKdAhLtdimiUHZNel9A9KRPujPcceM3h3NBqjXL%2BYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDbsNgOlCJiRkWWlAircAxXSqNPWOy2wOB1z25bcBx5%2Byfv2OY7zSOO5aeO5SlIXL62L1j9wLbY3sRGJ%2F3iVjMVH10t59oPGHDGwAZhYmBv%2FCx3di0oD%2BmwQmE3hK6JGc4SQJ041LWV35AD2oZyEzQ4KYRdYqH%2B5pvvqkqlJpFnug8CXjVISQ2mDGghB86ho0vGXUH7fNqWm56Uzl11EimU%2BAHseZ56z6Mudn2Z2o1FvWDoLSXfarUIQpi2FT7CIlHQJoUo%2BTrivlCGfjeX%2Fsc3qJhdRWO%2BfQsGQdr1vEfcbShEarNT8w1LO0TqXZgP9YpvuHCb6xEFAXrIJVyeWJtSC8VTHFp4pp9ji8jp1AreU9OHs3tdr%2F7o6CUBgS4u9aN7W7EutJa%2Fkrq4fr1eG9JsBozDXXfmEWH7PViSi2GeVd%2F8pWiMcjLofqfNryVNV6DX4Ywbm79JqFs7kWqOupZcoK%2BXrziPaRuzBMbz5gZLz7tAnGhLoDbV3x0z2MXjvGbf%2BJUV9S0SVwpH0vV3WDg7mKalYgNr6%2BeNXhl7NFAkvJiR4aM2h4g%2BGB3XA5wiyhhUWIt0zZqgQEZ7zT3CxjvJycaciVCiDB%2FXF8dvTSqmDqpzlpfDRa4MQNaplTsDkm6inj4urv41LsVxLMKL3%2F78GOqUBWWiMei8ZFmjRtDdLvsjWEU7mo4AWj0ejhTVAzwZmXIFvWZ45wAP%2B9uxMVkZD2ysZKqRPposav%2F21enM4U2an3SAeppyPC71kB%2FOJzMtQWMthm%2F4lMTjTyB6kgMAiFKjjubad%2FWuqcblDFBjxs27cOtecQo4N5sQLlqIM0sEIKBGc4AI2Uade3W3eGwfYlN9kzcHjiDCZlZA34L3l6LTzAtDZG82L&X-Amz-Signature=7b24659b00089ed8cef3c3c7e2d18583b25b7cdb1de7e6d81a3ca5d50a3f2324&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEM44FX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8WCTfPDJ%2Fw%2FFXUCgPKZ5sovfRJ2ZK2Shz5W6VUELlkAiEAhqeKdAhLtdimiUHZNel9A9KRPujPcceM3h3NBqjXL%2BYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDbsNgOlCJiRkWWlAircAxXSqNPWOy2wOB1z25bcBx5%2Byfv2OY7zSOO5aeO5SlIXL62L1j9wLbY3sRGJ%2F3iVjMVH10t59oPGHDGwAZhYmBv%2FCx3di0oD%2BmwQmE3hK6JGc4SQJ041LWV35AD2oZyEzQ4KYRdYqH%2B5pvvqkqlJpFnug8CXjVISQ2mDGghB86ho0vGXUH7fNqWm56Uzl11EimU%2BAHseZ56z6Mudn2Z2o1FvWDoLSXfarUIQpi2FT7CIlHQJoUo%2BTrivlCGfjeX%2Fsc3qJhdRWO%2BfQsGQdr1vEfcbShEarNT8w1LO0TqXZgP9YpvuHCb6xEFAXrIJVyeWJtSC8VTHFp4pp9ji8jp1AreU9OHs3tdr%2F7o6CUBgS4u9aN7W7EutJa%2Fkrq4fr1eG9JsBozDXXfmEWH7PViSi2GeVd%2F8pWiMcjLofqfNryVNV6DX4Ywbm79JqFs7kWqOupZcoK%2BXrziPaRuzBMbz5gZLz7tAnGhLoDbV3x0z2MXjvGbf%2BJUV9S0SVwpH0vV3WDg7mKalYgNr6%2BeNXhl7NFAkvJiR4aM2h4g%2BGB3XA5wiyhhUWIt0zZqgQEZ7zT3CxjvJycaciVCiDB%2FXF8dvTSqmDqpzlpfDRa4MQNaplTsDkm6inj4urv41LsVxLMKL3%2F78GOqUBWWiMei8ZFmjRtDdLvsjWEU7mo4AWj0ejhTVAzwZmXIFvWZ45wAP%2B9uxMVkZD2ysZKqRPposav%2F21enM4U2an3SAeppyPC71kB%2FOJzMtQWMthm%2F4lMTjTyB6kgMAiFKjjubad%2FWuqcblDFBjxs27cOtecQo4N5sQLlqIM0sEIKBGc4AI2Uade3W3eGwfYlN9kzcHjiDCZlZA34L3l6LTzAtDZG82L&X-Amz-Signature=ecac83fce8bbc9dc81d568c678ed6d90f14b04aa9136563821489563a5373eb3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEM44FX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8WCTfPDJ%2Fw%2FFXUCgPKZ5sovfRJ2ZK2Shz5W6VUELlkAiEAhqeKdAhLtdimiUHZNel9A9KRPujPcceM3h3NBqjXL%2BYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDbsNgOlCJiRkWWlAircAxXSqNPWOy2wOB1z25bcBx5%2Byfv2OY7zSOO5aeO5SlIXL62L1j9wLbY3sRGJ%2F3iVjMVH10t59oPGHDGwAZhYmBv%2FCx3di0oD%2BmwQmE3hK6JGc4SQJ041LWV35AD2oZyEzQ4KYRdYqH%2B5pvvqkqlJpFnug8CXjVISQ2mDGghB86ho0vGXUH7fNqWm56Uzl11EimU%2BAHseZ56z6Mudn2Z2o1FvWDoLSXfarUIQpi2FT7CIlHQJoUo%2BTrivlCGfjeX%2Fsc3qJhdRWO%2BfQsGQdr1vEfcbShEarNT8w1LO0TqXZgP9YpvuHCb6xEFAXrIJVyeWJtSC8VTHFp4pp9ji8jp1AreU9OHs3tdr%2F7o6CUBgS4u9aN7W7EutJa%2Fkrq4fr1eG9JsBozDXXfmEWH7PViSi2GeVd%2F8pWiMcjLofqfNryVNV6DX4Ywbm79JqFs7kWqOupZcoK%2BXrziPaRuzBMbz5gZLz7tAnGhLoDbV3x0z2MXjvGbf%2BJUV9S0SVwpH0vV3WDg7mKalYgNr6%2BeNXhl7NFAkvJiR4aM2h4g%2BGB3XA5wiyhhUWIt0zZqgQEZ7zT3CxjvJycaciVCiDB%2FXF8dvTSqmDqpzlpfDRa4MQNaplTsDkm6inj4urv41LsVxLMKL3%2F78GOqUBWWiMei8ZFmjRtDdLvsjWEU7mo4AWj0ejhTVAzwZmXIFvWZ45wAP%2B9uxMVkZD2ysZKqRPposav%2F21enM4U2an3SAeppyPC71kB%2FOJzMtQWMthm%2F4lMTjTyB6kgMAiFKjjubad%2FWuqcblDFBjxs27cOtecQo4N5sQLlqIM0sEIKBGc4AI2Uade3W3eGwfYlN9kzcHjiDCZlZA34L3l6LTzAtDZG82L&X-Amz-Signature=f9801a774a2f4fe335e45084fb83d8115a48dfc063a9b07c4de91042d9786a26&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEM44FX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8WCTfPDJ%2Fw%2FFXUCgPKZ5sovfRJ2ZK2Shz5W6VUELlkAiEAhqeKdAhLtdimiUHZNel9A9KRPujPcceM3h3NBqjXL%2BYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDbsNgOlCJiRkWWlAircAxXSqNPWOy2wOB1z25bcBx5%2Byfv2OY7zSOO5aeO5SlIXL62L1j9wLbY3sRGJ%2F3iVjMVH10t59oPGHDGwAZhYmBv%2FCx3di0oD%2BmwQmE3hK6JGc4SQJ041LWV35AD2oZyEzQ4KYRdYqH%2B5pvvqkqlJpFnug8CXjVISQ2mDGghB86ho0vGXUH7fNqWm56Uzl11EimU%2BAHseZ56z6Mudn2Z2o1FvWDoLSXfarUIQpi2FT7CIlHQJoUo%2BTrivlCGfjeX%2Fsc3qJhdRWO%2BfQsGQdr1vEfcbShEarNT8w1LO0TqXZgP9YpvuHCb6xEFAXrIJVyeWJtSC8VTHFp4pp9ji8jp1AreU9OHs3tdr%2F7o6CUBgS4u9aN7W7EutJa%2Fkrq4fr1eG9JsBozDXXfmEWH7PViSi2GeVd%2F8pWiMcjLofqfNryVNV6DX4Ywbm79JqFs7kWqOupZcoK%2BXrziPaRuzBMbz5gZLz7tAnGhLoDbV3x0z2MXjvGbf%2BJUV9S0SVwpH0vV3WDg7mKalYgNr6%2BeNXhl7NFAkvJiR4aM2h4g%2BGB3XA5wiyhhUWIt0zZqgQEZ7zT3CxjvJycaciVCiDB%2FXF8dvTSqmDqpzlpfDRa4MQNaplTsDkm6inj4urv41LsVxLMKL3%2F78GOqUBWWiMei8ZFmjRtDdLvsjWEU7mo4AWj0ejhTVAzwZmXIFvWZ45wAP%2B9uxMVkZD2ysZKqRPposav%2F21enM4U2an3SAeppyPC71kB%2FOJzMtQWMthm%2F4lMTjTyB6kgMAiFKjjubad%2FWuqcblDFBjxs27cOtecQo4N5sQLlqIM0sEIKBGc4AI2Uade3W3eGwfYlN9kzcHjiDCZlZA34L3l6LTzAtDZG82L&X-Amz-Signature=fd46d7b320dbb0c99afd13dac085900181a1491b767ebdc3c205052108250de4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
