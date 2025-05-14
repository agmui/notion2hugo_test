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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPHRP4PO%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDL29v8YF2oiSLOx08xf8Io435z3l9BA5YUNC2XdRz%2FowIhAOk98FKMN%2FqzeP7SJNCZZhfgoJgkB%2Fu71kgfUdMtCnXVKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaUzaZ%2FYSqQFv00IYq3AOTKXZvBao%2FWjXqTVY1nSkePnqz8YdZ1g%2FSAsm2cMer4%2F0GpqshFUQNV2XkkxHjHFLleslFWmUa1DNxQb5Vz2iQKd4OLYyXI8HKC1Eu3oGnqVvkIOs8uTw7YzLgqxbNA5EqBlmbtNDzosOzGcgGEnP9oAL8guHJeZuAUvIWaiFfa2n5ImK2Nyr8qQmUzzCpkxbTWkjerYsilvIxef0GvFgOXnL%2BVO90BbBi%2FjL3FQkO7J%2FdaWG9fFSZCS57FJLra2NXDsA1lKz7crlIr64%2BVbj5BcpX9pWBNYyEv2OaSmH%2FZf9H3ngHCPYYNkbSQdEfk2I70rnfEUMpl6IcEXQmKIKxor5LoCQKEOKDtwA%2BRuj%2FC1lmKmi5KQ1RGUpEJ6I5gV1g8cLwFV894THVJ2TzSBwYCeuiiKYyTDAOjmutU0W%2BObFvo%2B53zCnn6PhRRYH5HFJyfKl6gNDD5uI1yzNvtteOXHfdkMbMoVv9ATQOoCNUszJ54DWMqO%2FgEoy0k2XxCR8z4YBlYmvKO5ZjblzDrCPQWhdY5mcp8kaOvVBhBLghfL5rvxwuWj2T2dmaRAOyXqSfXAQDXKTD%2Fq5GADrryQj%2B16xHL7VKrSktNrCAqr9wd53r2lScXsqIwGIdrDCkiJDBBjqkASlP%2B5bBscmkoTww%2BBgfZ0%2BGpQiWxgOnDWD7uGDi%2FIzyE9I2LoJT%2FVoSaVfbjD8AqaxF1hNoINXe%2FZDhsNTDr%2F%2F6anl6MDrGEEPT76enR17OqWQE3HxWLTv%2FSMCVPq7MlqIPsKRp%2FTsg5RWt3e1xSU1liDYJr425mJ2DWfjQ4iVaUg6KjEuxKNXpR%2FE2lCKM%2FAacS9O4O0LOMqvZhocRhJSj1s0h&X-Amz-Signature=696dcb381dfda14486212b0673e50a4b76b6cc237b3798563384819e2fe4768b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPHRP4PO%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDL29v8YF2oiSLOx08xf8Io435z3l9BA5YUNC2XdRz%2FowIhAOk98FKMN%2FqzeP7SJNCZZhfgoJgkB%2Fu71kgfUdMtCnXVKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaUzaZ%2FYSqQFv00IYq3AOTKXZvBao%2FWjXqTVY1nSkePnqz8YdZ1g%2FSAsm2cMer4%2F0GpqshFUQNV2XkkxHjHFLleslFWmUa1DNxQb5Vz2iQKd4OLYyXI8HKC1Eu3oGnqVvkIOs8uTw7YzLgqxbNA5EqBlmbtNDzosOzGcgGEnP9oAL8guHJeZuAUvIWaiFfa2n5ImK2Nyr8qQmUzzCpkxbTWkjerYsilvIxef0GvFgOXnL%2BVO90BbBi%2FjL3FQkO7J%2FdaWG9fFSZCS57FJLra2NXDsA1lKz7crlIr64%2BVbj5BcpX9pWBNYyEv2OaSmH%2FZf9H3ngHCPYYNkbSQdEfk2I70rnfEUMpl6IcEXQmKIKxor5LoCQKEOKDtwA%2BRuj%2FC1lmKmi5KQ1RGUpEJ6I5gV1g8cLwFV894THVJ2TzSBwYCeuiiKYyTDAOjmutU0W%2BObFvo%2B53zCnn6PhRRYH5HFJyfKl6gNDD5uI1yzNvtteOXHfdkMbMoVv9ATQOoCNUszJ54DWMqO%2FgEoy0k2XxCR8z4YBlYmvKO5ZjblzDrCPQWhdY5mcp8kaOvVBhBLghfL5rvxwuWj2T2dmaRAOyXqSfXAQDXKTD%2Fq5GADrryQj%2B16xHL7VKrSktNrCAqr9wd53r2lScXsqIwGIdrDCkiJDBBjqkASlP%2B5bBscmkoTww%2BBgfZ0%2BGpQiWxgOnDWD7uGDi%2FIzyE9I2LoJT%2FVoSaVfbjD8AqaxF1hNoINXe%2FZDhsNTDr%2F%2F6anl6MDrGEEPT76enR17OqWQE3HxWLTv%2FSMCVPq7MlqIPsKRp%2FTsg5RWt3e1xSU1liDYJr425mJ2DWfjQ4iVaUg6KjEuxKNXpR%2FE2lCKM%2FAacS9O4O0LOMqvZhocRhJSj1s0h&X-Amz-Signature=a4ce6cac650dadbcd9128bd4279d74f83a73a8b519156ca212ac8cb4eb9b504d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPHRP4PO%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDL29v8YF2oiSLOx08xf8Io435z3l9BA5YUNC2XdRz%2FowIhAOk98FKMN%2FqzeP7SJNCZZhfgoJgkB%2Fu71kgfUdMtCnXVKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaUzaZ%2FYSqQFv00IYq3AOTKXZvBao%2FWjXqTVY1nSkePnqz8YdZ1g%2FSAsm2cMer4%2F0GpqshFUQNV2XkkxHjHFLleslFWmUa1DNxQb5Vz2iQKd4OLYyXI8HKC1Eu3oGnqVvkIOs8uTw7YzLgqxbNA5EqBlmbtNDzosOzGcgGEnP9oAL8guHJeZuAUvIWaiFfa2n5ImK2Nyr8qQmUzzCpkxbTWkjerYsilvIxef0GvFgOXnL%2BVO90BbBi%2FjL3FQkO7J%2FdaWG9fFSZCS57FJLra2NXDsA1lKz7crlIr64%2BVbj5BcpX9pWBNYyEv2OaSmH%2FZf9H3ngHCPYYNkbSQdEfk2I70rnfEUMpl6IcEXQmKIKxor5LoCQKEOKDtwA%2BRuj%2FC1lmKmi5KQ1RGUpEJ6I5gV1g8cLwFV894THVJ2TzSBwYCeuiiKYyTDAOjmutU0W%2BObFvo%2B53zCnn6PhRRYH5HFJyfKl6gNDD5uI1yzNvtteOXHfdkMbMoVv9ATQOoCNUszJ54DWMqO%2FgEoy0k2XxCR8z4YBlYmvKO5ZjblzDrCPQWhdY5mcp8kaOvVBhBLghfL5rvxwuWj2T2dmaRAOyXqSfXAQDXKTD%2Fq5GADrryQj%2B16xHL7VKrSktNrCAqr9wd53r2lScXsqIwGIdrDCkiJDBBjqkASlP%2B5bBscmkoTww%2BBgfZ0%2BGpQiWxgOnDWD7uGDi%2FIzyE9I2LoJT%2FVoSaVfbjD8AqaxF1hNoINXe%2FZDhsNTDr%2F%2F6anl6MDrGEEPT76enR17OqWQE3HxWLTv%2FSMCVPq7MlqIPsKRp%2FTsg5RWt3e1xSU1liDYJr425mJ2DWfjQ4iVaUg6KjEuxKNXpR%2FE2lCKM%2FAacS9O4O0LOMqvZhocRhJSj1s0h&X-Amz-Signature=a58ebd8febb16909379463f37e1981ea7bcb8449ff86c608b7495a58f3b17a96&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPHRP4PO%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDL29v8YF2oiSLOx08xf8Io435z3l9BA5YUNC2XdRz%2FowIhAOk98FKMN%2FqzeP7SJNCZZhfgoJgkB%2Fu71kgfUdMtCnXVKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaUzaZ%2FYSqQFv00IYq3AOTKXZvBao%2FWjXqTVY1nSkePnqz8YdZ1g%2FSAsm2cMer4%2F0GpqshFUQNV2XkkxHjHFLleslFWmUa1DNxQb5Vz2iQKd4OLYyXI8HKC1Eu3oGnqVvkIOs8uTw7YzLgqxbNA5EqBlmbtNDzosOzGcgGEnP9oAL8guHJeZuAUvIWaiFfa2n5ImK2Nyr8qQmUzzCpkxbTWkjerYsilvIxef0GvFgOXnL%2BVO90BbBi%2FjL3FQkO7J%2FdaWG9fFSZCS57FJLra2NXDsA1lKz7crlIr64%2BVbj5BcpX9pWBNYyEv2OaSmH%2FZf9H3ngHCPYYNkbSQdEfk2I70rnfEUMpl6IcEXQmKIKxor5LoCQKEOKDtwA%2BRuj%2FC1lmKmi5KQ1RGUpEJ6I5gV1g8cLwFV894THVJ2TzSBwYCeuiiKYyTDAOjmutU0W%2BObFvo%2B53zCnn6PhRRYH5HFJyfKl6gNDD5uI1yzNvtteOXHfdkMbMoVv9ATQOoCNUszJ54DWMqO%2FgEoy0k2XxCR8z4YBlYmvKO5ZjblzDrCPQWhdY5mcp8kaOvVBhBLghfL5rvxwuWj2T2dmaRAOyXqSfXAQDXKTD%2Fq5GADrryQj%2B16xHL7VKrSktNrCAqr9wd53r2lScXsqIwGIdrDCkiJDBBjqkASlP%2B5bBscmkoTww%2BBgfZ0%2BGpQiWxgOnDWD7uGDi%2FIzyE9I2LoJT%2FVoSaVfbjD8AqaxF1hNoINXe%2FZDhsNTDr%2F%2F6anl6MDrGEEPT76enR17OqWQE3HxWLTv%2FSMCVPq7MlqIPsKRp%2FTsg5RWt3e1xSU1liDYJr425mJ2DWfjQ4iVaUg6KjEuxKNXpR%2FE2lCKM%2FAacS9O4O0LOMqvZhocRhJSj1s0h&X-Amz-Signature=ea4c2fde1c0ae89d8d9a693141de8b29e5357c95c030d36ef4d080385a1780ae&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPHRP4PO%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDL29v8YF2oiSLOx08xf8Io435z3l9BA5YUNC2XdRz%2FowIhAOk98FKMN%2FqzeP7SJNCZZhfgoJgkB%2Fu71kgfUdMtCnXVKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaUzaZ%2FYSqQFv00IYq3AOTKXZvBao%2FWjXqTVY1nSkePnqz8YdZ1g%2FSAsm2cMer4%2F0GpqshFUQNV2XkkxHjHFLleslFWmUa1DNxQb5Vz2iQKd4OLYyXI8HKC1Eu3oGnqVvkIOs8uTw7YzLgqxbNA5EqBlmbtNDzosOzGcgGEnP9oAL8guHJeZuAUvIWaiFfa2n5ImK2Nyr8qQmUzzCpkxbTWkjerYsilvIxef0GvFgOXnL%2BVO90BbBi%2FjL3FQkO7J%2FdaWG9fFSZCS57FJLra2NXDsA1lKz7crlIr64%2BVbj5BcpX9pWBNYyEv2OaSmH%2FZf9H3ngHCPYYNkbSQdEfk2I70rnfEUMpl6IcEXQmKIKxor5LoCQKEOKDtwA%2BRuj%2FC1lmKmi5KQ1RGUpEJ6I5gV1g8cLwFV894THVJ2TzSBwYCeuiiKYyTDAOjmutU0W%2BObFvo%2B53zCnn6PhRRYH5HFJyfKl6gNDD5uI1yzNvtteOXHfdkMbMoVv9ATQOoCNUszJ54DWMqO%2FgEoy0k2XxCR8z4YBlYmvKO5ZjblzDrCPQWhdY5mcp8kaOvVBhBLghfL5rvxwuWj2T2dmaRAOyXqSfXAQDXKTD%2Fq5GADrryQj%2B16xHL7VKrSktNrCAqr9wd53r2lScXsqIwGIdrDCkiJDBBjqkASlP%2B5bBscmkoTww%2BBgfZ0%2BGpQiWxgOnDWD7uGDi%2FIzyE9I2LoJT%2FVoSaVfbjD8AqaxF1hNoINXe%2FZDhsNTDr%2F%2F6anl6MDrGEEPT76enR17OqWQE3HxWLTv%2FSMCVPq7MlqIPsKRp%2FTsg5RWt3e1xSU1liDYJr425mJ2DWfjQ4iVaUg6KjEuxKNXpR%2FE2lCKM%2FAacS9O4O0LOMqvZhocRhJSj1s0h&X-Amz-Signature=1ee9d23450d045da1be7e9779cf2f454a62c530e6b1c96b3733666a01ac496bc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPHRP4PO%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDL29v8YF2oiSLOx08xf8Io435z3l9BA5YUNC2XdRz%2FowIhAOk98FKMN%2FqzeP7SJNCZZhfgoJgkB%2Fu71kgfUdMtCnXVKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaUzaZ%2FYSqQFv00IYq3AOTKXZvBao%2FWjXqTVY1nSkePnqz8YdZ1g%2FSAsm2cMer4%2F0GpqshFUQNV2XkkxHjHFLleslFWmUa1DNxQb5Vz2iQKd4OLYyXI8HKC1Eu3oGnqVvkIOs8uTw7YzLgqxbNA5EqBlmbtNDzosOzGcgGEnP9oAL8guHJeZuAUvIWaiFfa2n5ImK2Nyr8qQmUzzCpkxbTWkjerYsilvIxef0GvFgOXnL%2BVO90BbBi%2FjL3FQkO7J%2FdaWG9fFSZCS57FJLra2NXDsA1lKz7crlIr64%2BVbj5BcpX9pWBNYyEv2OaSmH%2FZf9H3ngHCPYYNkbSQdEfk2I70rnfEUMpl6IcEXQmKIKxor5LoCQKEOKDtwA%2BRuj%2FC1lmKmi5KQ1RGUpEJ6I5gV1g8cLwFV894THVJ2TzSBwYCeuiiKYyTDAOjmutU0W%2BObFvo%2B53zCnn6PhRRYH5HFJyfKl6gNDD5uI1yzNvtteOXHfdkMbMoVv9ATQOoCNUszJ54DWMqO%2FgEoy0k2XxCR8z4YBlYmvKO5ZjblzDrCPQWhdY5mcp8kaOvVBhBLghfL5rvxwuWj2T2dmaRAOyXqSfXAQDXKTD%2Fq5GADrryQj%2B16xHL7VKrSktNrCAqr9wd53r2lScXsqIwGIdrDCkiJDBBjqkASlP%2B5bBscmkoTww%2BBgfZ0%2BGpQiWxgOnDWD7uGDi%2FIzyE9I2LoJT%2FVoSaVfbjD8AqaxF1hNoINXe%2FZDhsNTDr%2F%2F6anl6MDrGEEPT76enR17OqWQE3HxWLTv%2FSMCVPq7MlqIPsKRp%2FTsg5RWt3e1xSU1liDYJr425mJ2DWfjQ4iVaUg6KjEuxKNXpR%2FE2lCKM%2FAacS9O4O0LOMqvZhocRhJSj1s0h&X-Amz-Signature=1666fc5e53c59b4d723056859e590e15ba4c848b77583f58fe08842c7c72f14a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPHRP4PO%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDL29v8YF2oiSLOx08xf8Io435z3l9BA5YUNC2XdRz%2FowIhAOk98FKMN%2FqzeP7SJNCZZhfgoJgkB%2Fu71kgfUdMtCnXVKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaUzaZ%2FYSqQFv00IYq3AOTKXZvBao%2FWjXqTVY1nSkePnqz8YdZ1g%2FSAsm2cMer4%2F0GpqshFUQNV2XkkxHjHFLleslFWmUa1DNxQb5Vz2iQKd4OLYyXI8HKC1Eu3oGnqVvkIOs8uTw7YzLgqxbNA5EqBlmbtNDzosOzGcgGEnP9oAL8guHJeZuAUvIWaiFfa2n5ImK2Nyr8qQmUzzCpkxbTWkjerYsilvIxef0GvFgOXnL%2BVO90BbBi%2FjL3FQkO7J%2FdaWG9fFSZCS57FJLra2NXDsA1lKz7crlIr64%2BVbj5BcpX9pWBNYyEv2OaSmH%2FZf9H3ngHCPYYNkbSQdEfk2I70rnfEUMpl6IcEXQmKIKxor5LoCQKEOKDtwA%2BRuj%2FC1lmKmi5KQ1RGUpEJ6I5gV1g8cLwFV894THVJ2TzSBwYCeuiiKYyTDAOjmutU0W%2BObFvo%2B53zCnn6PhRRYH5HFJyfKl6gNDD5uI1yzNvtteOXHfdkMbMoVv9ATQOoCNUszJ54DWMqO%2FgEoy0k2XxCR8z4YBlYmvKO5ZjblzDrCPQWhdY5mcp8kaOvVBhBLghfL5rvxwuWj2T2dmaRAOyXqSfXAQDXKTD%2Fq5GADrryQj%2B16xHL7VKrSktNrCAqr9wd53r2lScXsqIwGIdrDCkiJDBBjqkASlP%2B5bBscmkoTww%2BBgfZ0%2BGpQiWxgOnDWD7uGDi%2FIzyE9I2LoJT%2FVoSaVfbjD8AqaxF1hNoINXe%2FZDhsNTDr%2F%2F6anl6MDrGEEPT76enR17OqWQE3HxWLTv%2FSMCVPq7MlqIPsKRp%2FTsg5RWt3e1xSU1liDYJr425mJ2DWfjQ4iVaUg6KjEuxKNXpR%2FE2lCKM%2FAacS9O4O0LOMqvZhocRhJSj1s0h&X-Amz-Signature=8b99463118a66839bd11a711bb7b3b951091f3bae21c282c5c451565f36e4cfb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
