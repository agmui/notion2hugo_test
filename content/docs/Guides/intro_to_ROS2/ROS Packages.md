---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRF3PDKA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1PA8eQofy5Tfsj%2Fg4omVS7Dxm97HFDAxnIyW%2BAkmPBAiBr0lUxmBX4IsEO8955BRHszlj7gH5NS7chUVRgVOeNqSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWuYF4L%2BrS30WKiwdKtwDU565czWOhwiKxX7kWEoGqNYZvwrPk03EVLWDObhQbcLrfjREbVhRh9AEnfld1wSl6HbwSOqWGhkWouVeEQ61MYpEKV9xFVnmltontBW2ANqDP5qCcoT6vftRuMD%2BQqYcWfaj9FRpJaop0SQS%2BAIANyJAiNcvUsgEW2whtmHDh8cvzE4FSk35obg2a3hwXcpMCZkeHrcjHs2uTr6UbcqZWC36zjYEeMLxLMJpaZHJXJ2fs4Mk9CcE%2Bw%2FRavCG6KEcjgNYbx7X2xX722NfEsgZ1IdywiV1BZwj4%2FIeUDLnPT12yq4%2Bl0m28hZNdxg4CHV%2BIBv8GYZrsmZg5Xn5S7VqVBffIwYwTGN%2B2yVpZbq19ogNlli4yh44cDd1AIx9UJ7J1GF1DGBr8s5sYXVShDGL9yCMPZHwn6uqLjBzfHzF0%2FuMdl9A9ZBGhYItpzOj24AjT2hOTI%2BtBw81mIANUdvFZ6MLUAbNwc87na9ocD8UhQ3TvUHDgFFHdsCPzawNwYbgaENwf10V06RiisTEFvMM1GLFU7x4d7WkkwEOGuzENUrgiOGII4%2B9Nk4fTLN4JjoyEJEkJMOraMdwYzzZEx%2BnVmW0Zrt4Brk71zmSQft%2Fhmg5sWmlLDz5%2FkKaQpIw66HIwwY6pgGoc0M063T%2BHvA7nNztMvnnGeIyW1Nt6slwsAkRfYPFMdJ%2BpZvVMOG4z8zz2aCLlV6g5M2hhOk0TOCgFsTirWpJADB%2Fliygr%2FYdp2JXddOVAT2WUP%2FEZ2lGcb4DiwpR6knKfFB%2F8mPvteoh%2FuQjn7lZjiC5pMwolUmijb9X%2B7wRTKEYHhpwlm3TCIZWoMGb%2BaAHV1gfcpBjrE84XhTZB1kHTIcpuD6G&X-Amz-Signature=d9ba1b07495bc83f58854bafe2106515a56cd6e8638342d58c66ec3a5967f48a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRF3PDKA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1PA8eQofy5Tfsj%2Fg4omVS7Dxm97HFDAxnIyW%2BAkmPBAiBr0lUxmBX4IsEO8955BRHszlj7gH5NS7chUVRgVOeNqSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWuYF4L%2BrS30WKiwdKtwDU565czWOhwiKxX7kWEoGqNYZvwrPk03EVLWDObhQbcLrfjREbVhRh9AEnfld1wSl6HbwSOqWGhkWouVeEQ61MYpEKV9xFVnmltontBW2ANqDP5qCcoT6vftRuMD%2BQqYcWfaj9FRpJaop0SQS%2BAIANyJAiNcvUsgEW2whtmHDh8cvzE4FSk35obg2a3hwXcpMCZkeHrcjHs2uTr6UbcqZWC36zjYEeMLxLMJpaZHJXJ2fs4Mk9CcE%2Bw%2FRavCG6KEcjgNYbx7X2xX722NfEsgZ1IdywiV1BZwj4%2FIeUDLnPT12yq4%2Bl0m28hZNdxg4CHV%2BIBv8GYZrsmZg5Xn5S7VqVBffIwYwTGN%2B2yVpZbq19ogNlli4yh44cDd1AIx9UJ7J1GF1DGBr8s5sYXVShDGL9yCMPZHwn6uqLjBzfHzF0%2FuMdl9A9ZBGhYItpzOj24AjT2hOTI%2BtBw81mIANUdvFZ6MLUAbNwc87na9ocD8UhQ3TvUHDgFFHdsCPzawNwYbgaENwf10V06RiisTEFvMM1GLFU7x4d7WkkwEOGuzENUrgiOGII4%2B9Nk4fTLN4JjoyEJEkJMOraMdwYzzZEx%2BnVmW0Zrt4Brk71zmSQft%2Fhmg5sWmlLDz5%2FkKaQpIw66HIwwY6pgGoc0M063T%2BHvA7nNztMvnnGeIyW1Nt6slwsAkRfYPFMdJ%2BpZvVMOG4z8zz2aCLlV6g5M2hhOk0TOCgFsTirWpJADB%2Fliygr%2FYdp2JXddOVAT2WUP%2FEZ2lGcb4DiwpR6knKfFB%2F8mPvteoh%2FuQjn7lZjiC5pMwolUmijb9X%2B7wRTKEYHhpwlm3TCIZWoMGb%2BaAHV1gfcpBjrE84XhTZB1kHTIcpuD6G&X-Amz-Signature=956fa6bfe1420e973cd2d765743e404fabeb5b9c4320f93f2f10adc96ff99b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRF3PDKA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1PA8eQofy5Tfsj%2Fg4omVS7Dxm97HFDAxnIyW%2BAkmPBAiBr0lUxmBX4IsEO8955BRHszlj7gH5NS7chUVRgVOeNqSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWuYF4L%2BrS30WKiwdKtwDU565czWOhwiKxX7kWEoGqNYZvwrPk03EVLWDObhQbcLrfjREbVhRh9AEnfld1wSl6HbwSOqWGhkWouVeEQ61MYpEKV9xFVnmltontBW2ANqDP5qCcoT6vftRuMD%2BQqYcWfaj9FRpJaop0SQS%2BAIANyJAiNcvUsgEW2whtmHDh8cvzE4FSk35obg2a3hwXcpMCZkeHrcjHs2uTr6UbcqZWC36zjYEeMLxLMJpaZHJXJ2fs4Mk9CcE%2Bw%2FRavCG6KEcjgNYbx7X2xX722NfEsgZ1IdywiV1BZwj4%2FIeUDLnPT12yq4%2Bl0m28hZNdxg4CHV%2BIBv8GYZrsmZg5Xn5S7VqVBffIwYwTGN%2B2yVpZbq19ogNlli4yh44cDd1AIx9UJ7J1GF1DGBr8s5sYXVShDGL9yCMPZHwn6uqLjBzfHzF0%2FuMdl9A9ZBGhYItpzOj24AjT2hOTI%2BtBw81mIANUdvFZ6MLUAbNwc87na9ocD8UhQ3TvUHDgFFHdsCPzawNwYbgaENwf10V06RiisTEFvMM1GLFU7x4d7WkkwEOGuzENUrgiOGII4%2B9Nk4fTLN4JjoyEJEkJMOraMdwYzzZEx%2BnVmW0Zrt4Brk71zmSQft%2Fhmg5sWmlLDz5%2FkKaQpIw66HIwwY6pgGoc0M063T%2BHvA7nNztMvnnGeIyW1Nt6slwsAkRfYPFMdJ%2BpZvVMOG4z8zz2aCLlV6g5M2hhOk0TOCgFsTirWpJADB%2Fliygr%2FYdp2JXddOVAT2WUP%2FEZ2lGcb4DiwpR6knKfFB%2F8mPvteoh%2FuQjn7lZjiC5pMwolUmijb9X%2B7wRTKEYHhpwlm3TCIZWoMGb%2BaAHV1gfcpBjrE84XhTZB1kHTIcpuD6G&X-Amz-Signature=155ed26a530ac2d022333eb2627a59eb9c45d88d094766fc0742d57181d6937a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRF3PDKA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1PA8eQofy5Tfsj%2Fg4omVS7Dxm97HFDAxnIyW%2BAkmPBAiBr0lUxmBX4IsEO8955BRHszlj7gH5NS7chUVRgVOeNqSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWuYF4L%2BrS30WKiwdKtwDU565czWOhwiKxX7kWEoGqNYZvwrPk03EVLWDObhQbcLrfjREbVhRh9AEnfld1wSl6HbwSOqWGhkWouVeEQ61MYpEKV9xFVnmltontBW2ANqDP5qCcoT6vftRuMD%2BQqYcWfaj9FRpJaop0SQS%2BAIANyJAiNcvUsgEW2whtmHDh8cvzE4FSk35obg2a3hwXcpMCZkeHrcjHs2uTr6UbcqZWC36zjYEeMLxLMJpaZHJXJ2fs4Mk9CcE%2Bw%2FRavCG6KEcjgNYbx7X2xX722NfEsgZ1IdywiV1BZwj4%2FIeUDLnPT12yq4%2Bl0m28hZNdxg4CHV%2BIBv8GYZrsmZg5Xn5S7VqVBffIwYwTGN%2B2yVpZbq19ogNlli4yh44cDd1AIx9UJ7J1GF1DGBr8s5sYXVShDGL9yCMPZHwn6uqLjBzfHzF0%2FuMdl9A9ZBGhYItpzOj24AjT2hOTI%2BtBw81mIANUdvFZ6MLUAbNwc87na9ocD8UhQ3TvUHDgFFHdsCPzawNwYbgaENwf10V06RiisTEFvMM1GLFU7x4d7WkkwEOGuzENUrgiOGII4%2B9Nk4fTLN4JjoyEJEkJMOraMdwYzzZEx%2BnVmW0Zrt4Brk71zmSQft%2Fhmg5sWmlLDz5%2FkKaQpIw66HIwwY6pgGoc0M063T%2BHvA7nNztMvnnGeIyW1Nt6slwsAkRfYPFMdJ%2BpZvVMOG4z8zz2aCLlV6g5M2hhOk0TOCgFsTirWpJADB%2Fliygr%2FYdp2JXddOVAT2WUP%2FEZ2lGcb4DiwpR6knKfFB%2F8mPvteoh%2FuQjn7lZjiC5pMwolUmijb9X%2B7wRTKEYHhpwlm3TCIZWoMGb%2BaAHV1gfcpBjrE84XhTZB1kHTIcpuD6G&X-Amz-Signature=3968494413f1e70eb94cfe85d89d9672a6071632440bbcff6cca0c199964a61b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRF3PDKA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1PA8eQofy5Tfsj%2Fg4omVS7Dxm97HFDAxnIyW%2BAkmPBAiBr0lUxmBX4IsEO8955BRHszlj7gH5NS7chUVRgVOeNqSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWuYF4L%2BrS30WKiwdKtwDU565czWOhwiKxX7kWEoGqNYZvwrPk03EVLWDObhQbcLrfjREbVhRh9AEnfld1wSl6HbwSOqWGhkWouVeEQ61MYpEKV9xFVnmltontBW2ANqDP5qCcoT6vftRuMD%2BQqYcWfaj9FRpJaop0SQS%2BAIANyJAiNcvUsgEW2whtmHDh8cvzE4FSk35obg2a3hwXcpMCZkeHrcjHs2uTr6UbcqZWC36zjYEeMLxLMJpaZHJXJ2fs4Mk9CcE%2Bw%2FRavCG6KEcjgNYbx7X2xX722NfEsgZ1IdywiV1BZwj4%2FIeUDLnPT12yq4%2Bl0m28hZNdxg4CHV%2BIBv8GYZrsmZg5Xn5S7VqVBffIwYwTGN%2B2yVpZbq19ogNlli4yh44cDd1AIx9UJ7J1GF1DGBr8s5sYXVShDGL9yCMPZHwn6uqLjBzfHzF0%2FuMdl9A9ZBGhYItpzOj24AjT2hOTI%2BtBw81mIANUdvFZ6MLUAbNwc87na9ocD8UhQ3TvUHDgFFHdsCPzawNwYbgaENwf10V06RiisTEFvMM1GLFU7x4d7WkkwEOGuzENUrgiOGII4%2B9Nk4fTLN4JjoyEJEkJMOraMdwYzzZEx%2BnVmW0Zrt4Brk71zmSQft%2Fhmg5sWmlLDz5%2FkKaQpIw66HIwwY6pgGoc0M063T%2BHvA7nNztMvnnGeIyW1Nt6slwsAkRfYPFMdJ%2BpZvVMOG4z8zz2aCLlV6g5M2hhOk0TOCgFsTirWpJADB%2Fliygr%2FYdp2JXddOVAT2WUP%2FEZ2lGcb4DiwpR6knKfFB%2F8mPvteoh%2FuQjn7lZjiC5pMwolUmijb9X%2B7wRTKEYHhpwlm3TCIZWoMGb%2BaAHV1gfcpBjrE84XhTZB1kHTIcpuD6G&X-Amz-Signature=f8f44add11be4991c62c315c1d136e67c390f526be21832a346d492dd0a5ea0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRF3PDKA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1PA8eQofy5Tfsj%2Fg4omVS7Dxm97HFDAxnIyW%2BAkmPBAiBr0lUxmBX4IsEO8955BRHszlj7gH5NS7chUVRgVOeNqSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWuYF4L%2BrS30WKiwdKtwDU565czWOhwiKxX7kWEoGqNYZvwrPk03EVLWDObhQbcLrfjREbVhRh9AEnfld1wSl6HbwSOqWGhkWouVeEQ61MYpEKV9xFVnmltontBW2ANqDP5qCcoT6vftRuMD%2BQqYcWfaj9FRpJaop0SQS%2BAIANyJAiNcvUsgEW2whtmHDh8cvzE4FSk35obg2a3hwXcpMCZkeHrcjHs2uTr6UbcqZWC36zjYEeMLxLMJpaZHJXJ2fs4Mk9CcE%2Bw%2FRavCG6KEcjgNYbx7X2xX722NfEsgZ1IdywiV1BZwj4%2FIeUDLnPT12yq4%2Bl0m28hZNdxg4CHV%2BIBv8GYZrsmZg5Xn5S7VqVBffIwYwTGN%2B2yVpZbq19ogNlli4yh44cDd1AIx9UJ7J1GF1DGBr8s5sYXVShDGL9yCMPZHwn6uqLjBzfHzF0%2FuMdl9A9ZBGhYItpzOj24AjT2hOTI%2BtBw81mIANUdvFZ6MLUAbNwc87na9ocD8UhQ3TvUHDgFFHdsCPzawNwYbgaENwf10V06RiisTEFvMM1GLFU7x4d7WkkwEOGuzENUrgiOGII4%2B9Nk4fTLN4JjoyEJEkJMOraMdwYzzZEx%2BnVmW0Zrt4Brk71zmSQft%2Fhmg5sWmlLDz5%2FkKaQpIw66HIwwY6pgGoc0M063T%2BHvA7nNztMvnnGeIyW1Nt6slwsAkRfYPFMdJ%2BpZvVMOG4z8zz2aCLlV6g5M2hhOk0TOCgFsTirWpJADB%2Fliygr%2FYdp2JXddOVAT2WUP%2FEZ2lGcb4DiwpR6knKfFB%2F8mPvteoh%2FuQjn7lZjiC5pMwolUmijb9X%2B7wRTKEYHhpwlm3TCIZWoMGb%2BaAHV1gfcpBjrE84XhTZB1kHTIcpuD6G&X-Amz-Signature=7c0df5177be8d46cd7ba43f83cb17d2748971ac1dd4202dd486df87a29b7393b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRF3PDKA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1PA8eQofy5Tfsj%2Fg4omVS7Dxm97HFDAxnIyW%2BAkmPBAiBr0lUxmBX4IsEO8955BRHszlj7gH5NS7chUVRgVOeNqSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWuYF4L%2BrS30WKiwdKtwDU565czWOhwiKxX7kWEoGqNYZvwrPk03EVLWDObhQbcLrfjREbVhRh9AEnfld1wSl6HbwSOqWGhkWouVeEQ61MYpEKV9xFVnmltontBW2ANqDP5qCcoT6vftRuMD%2BQqYcWfaj9FRpJaop0SQS%2BAIANyJAiNcvUsgEW2whtmHDh8cvzE4FSk35obg2a3hwXcpMCZkeHrcjHs2uTr6UbcqZWC36zjYEeMLxLMJpaZHJXJ2fs4Mk9CcE%2Bw%2FRavCG6KEcjgNYbx7X2xX722NfEsgZ1IdywiV1BZwj4%2FIeUDLnPT12yq4%2Bl0m28hZNdxg4CHV%2BIBv8GYZrsmZg5Xn5S7VqVBffIwYwTGN%2B2yVpZbq19ogNlli4yh44cDd1AIx9UJ7J1GF1DGBr8s5sYXVShDGL9yCMPZHwn6uqLjBzfHzF0%2FuMdl9A9ZBGhYItpzOj24AjT2hOTI%2BtBw81mIANUdvFZ6MLUAbNwc87na9ocD8UhQ3TvUHDgFFHdsCPzawNwYbgaENwf10V06RiisTEFvMM1GLFU7x4d7WkkwEOGuzENUrgiOGII4%2B9Nk4fTLN4JjoyEJEkJMOraMdwYzzZEx%2BnVmW0Zrt4Brk71zmSQft%2Fhmg5sWmlLDz5%2FkKaQpIw66HIwwY6pgGoc0M063T%2BHvA7nNztMvnnGeIyW1Nt6slwsAkRfYPFMdJ%2BpZvVMOG4z8zz2aCLlV6g5M2hhOk0TOCgFsTirWpJADB%2Fliygr%2FYdp2JXddOVAT2WUP%2FEZ2lGcb4DiwpR6knKfFB%2F8mPvteoh%2FuQjn7lZjiC5pMwolUmijb9X%2B7wRTKEYHhpwlm3TCIZWoMGb%2BaAHV1gfcpBjrE84XhTZB1kHTIcpuD6G&X-Amz-Signature=fefb141896b735a592f1edb344ada9a83a9615503a928902b228254c3792427e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
