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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCG5RZTP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDOxL7xFyQcKPVuLBGwI%2F%2FZPN6PMsqANXrTXsnIVDEqUAIgF2vNIWmfcaZaCaSSUVJURqJAgnC9ly6JVlKxIcrqTq0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDC4CK7H3Yt9qC3Ta3ircA5IJEs3nxL9%2B94hTYwmV1kClakB9RrvB5jCIyie53CMr8LVg9ngJZWEACRubAVl1QJO1zRmCGiL8XtzVBlUGKLGmvq5DMDfGTb97tAhwb7JkwqxlIxD%2FbJBwuxqTaJWsTwVxWs0T4cQvAjlsDgSYKsUayR4%2Ffl8mgvFysgSI0PPPyC8gxWlwjHwsdJ4jyI3nA4scs2Drib4uihqSnG2WsgS%2Fzq7lSa9LZQ3MCJjNiqf%2FUCDslFaImDBWYPlx2eYcwMQutPNGf%2BrOL%2Fhc7j3o4sy68l7MVppeZ98CqTlH5rjg2GAU8oSXaMKT3yzRJ8wGlTip1VHDvGSUsY952AnH2FGxYAGwpukNsJTbTEo%2FBRSwJymOJK0U2k%2FvQ3EL8xQIW%2BSdhnZlo9SoT8MmNCP0fAuJVxZ64M%2FNvrq63u1hl8EZMHDYkCbFpQ3zKBn6LUeYMZw8gDdW3P1mqHu6G36rsGHGqn0Q4sDPe9MG5z32g%2FFsGN1vwNu4A5AfJ2I9kalp34d0wfVmNWkOXKKYaSXvdTDA2EZysTlQPXwr4eDnPhcEle08Nd%2Fkii8Ex5ToD%2FGGwz8yq1hrYkYDF5hlbpw9x7YikPe%2BnZzrJkmtO6RYXtrPrlfX1f6joSdM0uLFMIHBk8QGOqUBSnmIL3bRDOV0FrWlEOCGWoKDi3LTl%2BXu%2BGedfeUezhrSZ1y3VqhTKJhdtlD7zJbYuuHiNMXeY1uBsC%2BwQ2X9Y0CiraLHQhDrO48xoBu81270b6exB8sTSAbMnaT5Fdq0nWigJfCV8Z322aUqIPsAeyVMOXeSeyJQCAcKNRJz8Z8LO6OCDKN06wbWvExmZtJ%2F%2F5mc%2BGcTiDU6u%2B9fqeA9cqdP%2BkYB&X-Amz-Signature=1004c31e2c70f8bb5a86402b4e8bba3cb6785b15e136cc91060ba86818779c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCG5RZTP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDOxL7xFyQcKPVuLBGwI%2F%2FZPN6PMsqANXrTXsnIVDEqUAIgF2vNIWmfcaZaCaSSUVJURqJAgnC9ly6JVlKxIcrqTq0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDC4CK7H3Yt9qC3Ta3ircA5IJEs3nxL9%2B94hTYwmV1kClakB9RrvB5jCIyie53CMr8LVg9ngJZWEACRubAVl1QJO1zRmCGiL8XtzVBlUGKLGmvq5DMDfGTb97tAhwb7JkwqxlIxD%2FbJBwuxqTaJWsTwVxWs0T4cQvAjlsDgSYKsUayR4%2Ffl8mgvFysgSI0PPPyC8gxWlwjHwsdJ4jyI3nA4scs2Drib4uihqSnG2WsgS%2Fzq7lSa9LZQ3MCJjNiqf%2FUCDslFaImDBWYPlx2eYcwMQutPNGf%2BrOL%2Fhc7j3o4sy68l7MVppeZ98CqTlH5rjg2GAU8oSXaMKT3yzRJ8wGlTip1VHDvGSUsY952AnH2FGxYAGwpukNsJTbTEo%2FBRSwJymOJK0U2k%2FvQ3EL8xQIW%2BSdhnZlo9SoT8MmNCP0fAuJVxZ64M%2FNvrq63u1hl8EZMHDYkCbFpQ3zKBn6LUeYMZw8gDdW3P1mqHu6G36rsGHGqn0Q4sDPe9MG5z32g%2FFsGN1vwNu4A5AfJ2I9kalp34d0wfVmNWkOXKKYaSXvdTDA2EZysTlQPXwr4eDnPhcEle08Nd%2Fkii8Ex5ToD%2FGGwz8yq1hrYkYDF5hlbpw9x7YikPe%2BnZzrJkmtO6RYXtrPrlfX1f6joSdM0uLFMIHBk8QGOqUBSnmIL3bRDOV0FrWlEOCGWoKDi3LTl%2BXu%2BGedfeUezhrSZ1y3VqhTKJhdtlD7zJbYuuHiNMXeY1uBsC%2BwQ2X9Y0CiraLHQhDrO48xoBu81270b6exB8sTSAbMnaT5Fdq0nWigJfCV8Z322aUqIPsAeyVMOXeSeyJQCAcKNRJz8Z8LO6OCDKN06wbWvExmZtJ%2F%2F5mc%2BGcTiDU6u%2B9fqeA9cqdP%2BkYB&X-Amz-Signature=93bd57456d2202a3d62f61d3512f995a75a909328b6db5a6d34a3aaf4ee5336d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCG5RZTP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDOxL7xFyQcKPVuLBGwI%2F%2FZPN6PMsqANXrTXsnIVDEqUAIgF2vNIWmfcaZaCaSSUVJURqJAgnC9ly6JVlKxIcrqTq0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDC4CK7H3Yt9qC3Ta3ircA5IJEs3nxL9%2B94hTYwmV1kClakB9RrvB5jCIyie53CMr8LVg9ngJZWEACRubAVl1QJO1zRmCGiL8XtzVBlUGKLGmvq5DMDfGTb97tAhwb7JkwqxlIxD%2FbJBwuxqTaJWsTwVxWs0T4cQvAjlsDgSYKsUayR4%2Ffl8mgvFysgSI0PPPyC8gxWlwjHwsdJ4jyI3nA4scs2Drib4uihqSnG2WsgS%2Fzq7lSa9LZQ3MCJjNiqf%2FUCDslFaImDBWYPlx2eYcwMQutPNGf%2BrOL%2Fhc7j3o4sy68l7MVppeZ98CqTlH5rjg2GAU8oSXaMKT3yzRJ8wGlTip1VHDvGSUsY952AnH2FGxYAGwpukNsJTbTEo%2FBRSwJymOJK0U2k%2FvQ3EL8xQIW%2BSdhnZlo9SoT8MmNCP0fAuJVxZ64M%2FNvrq63u1hl8EZMHDYkCbFpQ3zKBn6LUeYMZw8gDdW3P1mqHu6G36rsGHGqn0Q4sDPe9MG5z32g%2FFsGN1vwNu4A5AfJ2I9kalp34d0wfVmNWkOXKKYaSXvdTDA2EZysTlQPXwr4eDnPhcEle08Nd%2Fkii8Ex5ToD%2FGGwz8yq1hrYkYDF5hlbpw9x7YikPe%2BnZzrJkmtO6RYXtrPrlfX1f6joSdM0uLFMIHBk8QGOqUBSnmIL3bRDOV0FrWlEOCGWoKDi3LTl%2BXu%2BGedfeUezhrSZ1y3VqhTKJhdtlD7zJbYuuHiNMXeY1uBsC%2BwQ2X9Y0CiraLHQhDrO48xoBu81270b6exB8sTSAbMnaT5Fdq0nWigJfCV8Z322aUqIPsAeyVMOXeSeyJQCAcKNRJz8Z8LO6OCDKN06wbWvExmZtJ%2F%2F5mc%2BGcTiDU6u%2B9fqeA9cqdP%2BkYB&X-Amz-Signature=6c74f917c82470b0c70d8d56b980ee8bc18f8bdcc465171b900ba34a809137c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCG5RZTP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDOxL7xFyQcKPVuLBGwI%2F%2FZPN6PMsqANXrTXsnIVDEqUAIgF2vNIWmfcaZaCaSSUVJURqJAgnC9ly6JVlKxIcrqTq0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDC4CK7H3Yt9qC3Ta3ircA5IJEs3nxL9%2B94hTYwmV1kClakB9RrvB5jCIyie53CMr8LVg9ngJZWEACRubAVl1QJO1zRmCGiL8XtzVBlUGKLGmvq5DMDfGTb97tAhwb7JkwqxlIxD%2FbJBwuxqTaJWsTwVxWs0T4cQvAjlsDgSYKsUayR4%2Ffl8mgvFysgSI0PPPyC8gxWlwjHwsdJ4jyI3nA4scs2Drib4uihqSnG2WsgS%2Fzq7lSa9LZQ3MCJjNiqf%2FUCDslFaImDBWYPlx2eYcwMQutPNGf%2BrOL%2Fhc7j3o4sy68l7MVppeZ98CqTlH5rjg2GAU8oSXaMKT3yzRJ8wGlTip1VHDvGSUsY952AnH2FGxYAGwpukNsJTbTEo%2FBRSwJymOJK0U2k%2FvQ3EL8xQIW%2BSdhnZlo9SoT8MmNCP0fAuJVxZ64M%2FNvrq63u1hl8EZMHDYkCbFpQ3zKBn6LUeYMZw8gDdW3P1mqHu6G36rsGHGqn0Q4sDPe9MG5z32g%2FFsGN1vwNu4A5AfJ2I9kalp34d0wfVmNWkOXKKYaSXvdTDA2EZysTlQPXwr4eDnPhcEle08Nd%2Fkii8Ex5ToD%2FGGwz8yq1hrYkYDF5hlbpw9x7YikPe%2BnZzrJkmtO6RYXtrPrlfX1f6joSdM0uLFMIHBk8QGOqUBSnmIL3bRDOV0FrWlEOCGWoKDi3LTl%2BXu%2BGedfeUezhrSZ1y3VqhTKJhdtlD7zJbYuuHiNMXeY1uBsC%2BwQ2X9Y0CiraLHQhDrO48xoBu81270b6exB8sTSAbMnaT5Fdq0nWigJfCV8Z322aUqIPsAeyVMOXeSeyJQCAcKNRJz8Z8LO6OCDKN06wbWvExmZtJ%2F%2F5mc%2BGcTiDU6u%2B9fqeA9cqdP%2BkYB&X-Amz-Signature=a382601534f5f04e281aafa16e0f8e45beaf13bf2b7b1e4bee749a54d6051841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCG5RZTP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDOxL7xFyQcKPVuLBGwI%2F%2FZPN6PMsqANXrTXsnIVDEqUAIgF2vNIWmfcaZaCaSSUVJURqJAgnC9ly6JVlKxIcrqTq0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDC4CK7H3Yt9qC3Ta3ircA5IJEs3nxL9%2B94hTYwmV1kClakB9RrvB5jCIyie53CMr8LVg9ngJZWEACRubAVl1QJO1zRmCGiL8XtzVBlUGKLGmvq5DMDfGTb97tAhwb7JkwqxlIxD%2FbJBwuxqTaJWsTwVxWs0T4cQvAjlsDgSYKsUayR4%2Ffl8mgvFysgSI0PPPyC8gxWlwjHwsdJ4jyI3nA4scs2Drib4uihqSnG2WsgS%2Fzq7lSa9LZQ3MCJjNiqf%2FUCDslFaImDBWYPlx2eYcwMQutPNGf%2BrOL%2Fhc7j3o4sy68l7MVppeZ98CqTlH5rjg2GAU8oSXaMKT3yzRJ8wGlTip1VHDvGSUsY952AnH2FGxYAGwpukNsJTbTEo%2FBRSwJymOJK0U2k%2FvQ3EL8xQIW%2BSdhnZlo9SoT8MmNCP0fAuJVxZ64M%2FNvrq63u1hl8EZMHDYkCbFpQ3zKBn6LUeYMZw8gDdW3P1mqHu6G36rsGHGqn0Q4sDPe9MG5z32g%2FFsGN1vwNu4A5AfJ2I9kalp34d0wfVmNWkOXKKYaSXvdTDA2EZysTlQPXwr4eDnPhcEle08Nd%2Fkii8Ex5ToD%2FGGwz8yq1hrYkYDF5hlbpw9x7YikPe%2BnZzrJkmtO6RYXtrPrlfX1f6joSdM0uLFMIHBk8QGOqUBSnmIL3bRDOV0FrWlEOCGWoKDi3LTl%2BXu%2BGedfeUezhrSZ1y3VqhTKJhdtlD7zJbYuuHiNMXeY1uBsC%2BwQ2X9Y0CiraLHQhDrO48xoBu81270b6exB8sTSAbMnaT5Fdq0nWigJfCV8Z322aUqIPsAeyVMOXeSeyJQCAcKNRJz8Z8LO6OCDKN06wbWvExmZtJ%2F%2F5mc%2BGcTiDU6u%2B9fqeA9cqdP%2BkYB&X-Amz-Signature=1a687335f6c35de56f96a5bf5d57e590703c96cacf3438bc5566afce5b12ca78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCG5RZTP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDOxL7xFyQcKPVuLBGwI%2F%2FZPN6PMsqANXrTXsnIVDEqUAIgF2vNIWmfcaZaCaSSUVJURqJAgnC9ly6JVlKxIcrqTq0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDC4CK7H3Yt9qC3Ta3ircA5IJEs3nxL9%2B94hTYwmV1kClakB9RrvB5jCIyie53CMr8LVg9ngJZWEACRubAVl1QJO1zRmCGiL8XtzVBlUGKLGmvq5DMDfGTb97tAhwb7JkwqxlIxD%2FbJBwuxqTaJWsTwVxWs0T4cQvAjlsDgSYKsUayR4%2Ffl8mgvFysgSI0PPPyC8gxWlwjHwsdJ4jyI3nA4scs2Drib4uihqSnG2WsgS%2Fzq7lSa9LZQ3MCJjNiqf%2FUCDslFaImDBWYPlx2eYcwMQutPNGf%2BrOL%2Fhc7j3o4sy68l7MVppeZ98CqTlH5rjg2GAU8oSXaMKT3yzRJ8wGlTip1VHDvGSUsY952AnH2FGxYAGwpukNsJTbTEo%2FBRSwJymOJK0U2k%2FvQ3EL8xQIW%2BSdhnZlo9SoT8MmNCP0fAuJVxZ64M%2FNvrq63u1hl8EZMHDYkCbFpQ3zKBn6LUeYMZw8gDdW3P1mqHu6G36rsGHGqn0Q4sDPe9MG5z32g%2FFsGN1vwNu4A5AfJ2I9kalp34d0wfVmNWkOXKKYaSXvdTDA2EZysTlQPXwr4eDnPhcEle08Nd%2Fkii8Ex5ToD%2FGGwz8yq1hrYkYDF5hlbpw9x7YikPe%2BnZzrJkmtO6RYXtrPrlfX1f6joSdM0uLFMIHBk8QGOqUBSnmIL3bRDOV0FrWlEOCGWoKDi3LTl%2BXu%2BGedfeUezhrSZ1y3VqhTKJhdtlD7zJbYuuHiNMXeY1uBsC%2BwQ2X9Y0CiraLHQhDrO48xoBu81270b6exB8sTSAbMnaT5Fdq0nWigJfCV8Z322aUqIPsAeyVMOXeSeyJQCAcKNRJz8Z8LO6OCDKN06wbWvExmZtJ%2F%2F5mc%2BGcTiDU6u%2B9fqeA9cqdP%2BkYB&X-Amz-Signature=fe369cac11872252a33803bb0b6a4935a22c3c14b46cbd0b7d0b1aba4c96e569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCG5RZTP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDOxL7xFyQcKPVuLBGwI%2F%2FZPN6PMsqANXrTXsnIVDEqUAIgF2vNIWmfcaZaCaSSUVJURqJAgnC9ly6JVlKxIcrqTq0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDC4CK7H3Yt9qC3Ta3ircA5IJEs3nxL9%2B94hTYwmV1kClakB9RrvB5jCIyie53CMr8LVg9ngJZWEACRubAVl1QJO1zRmCGiL8XtzVBlUGKLGmvq5DMDfGTb97tAhwb7JkwqxlIxD%2FbJBwuxqTaJWsTwVxWs0T4cQvAjlsDgSYKsUayR4%2Ffl8mgvFysgSI0PPPyC8gxWlwjHwsdJ4jyI3nA4scs2Drib4uihqSnG2WsgS%2Fzq7lSa9LZQ3MCJjNiqf%2FUCDslFaImDBWYPlx2eYcwMQutPNGf%2BrOL%2Fhc7j3o4sy68l7MVppeZ98CqTlH5rjg2GAU8oSXaMKT3yzRJ8wGlTip1VHDvGSUsY952AnH2FGxYAGwpukNsJTbTEo%2FBRSwJymOJK0U2k%2FvQ3EL8xQIW%2BSdhnZlo9SoT8MmNCP0fAuJVxZ64M%2FNvrq63u1hl8EZMHDYkCbFpQ3zKBn6LUeYMZw8gDdW3P1mqHu6G36rsGHGqn0Q4sDPe9MG5z32g%2FFsGN1vwNu4A5AfJ2I9kalp34d0wfVmNWkOXKKYaSXvdTDA2EZysTlQPXwr4eDnPhcEle08Nd%2Fkii8Ex5ToD%2FGGwz8yq1hrYkYDF5hlbpw9x7YikPe%2BnZzrJkmtO6RYXtrPrlfX1f6joSdM0uLFMIHBk8QGOqUBSnmIL3bRDOV0FrWlEOCGWoKDi3LTl%2BXu%2BGedfeUezhrSZ1y3VqhTKJhdtlD7zJbYuuHiNMXeY1uBsC%2BwQ2X9Y0CiraLHQhDrO48xoBu81270b6exB8sTSAbMnaT5Fdq0nWigJfCV8Z322aUqIPsAeyVMOXeSeyJQCAcKNRJz8Z8LO6OCDKN06wbWvExmZtJ%2F%2F5mc%2BGcTiDU6u%2B9fqeA9cqdP%2BkYB&X-Amz-Signature=74a54dfa74c600490438e59496377d3f8f936a467f2ae06a8234f65dc36d279a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
