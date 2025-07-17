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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVCQDOK%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCokWiirA%2FYP4UJ1lALennGA%2Fa%2Fp9HlhHj%2BaD%2B9tWkOZwIhAMjmCH3v8%2B%2FomW1lRec%2B4%2B0s2REM0%2Bhbnmb0HMfKI365Kv8DCHAQABoMNjM3NDIzMTgzODA1IgwwzUBN2%2F%2BIDerSBmQq3APk8Pcsc6Qkl5mMPw%2Fqqg6WocEPcsWvR%2BDz7D0I9ZWcFwBimxXnMAN3MmWMOw4qnyihQf9ClCYhNlYu3%2BgelQ9AzcVvbccltr8VacadY8%2FFMuDaEPhg1i6J8DgnyUZtu8ozabwdk%2F3XFYC6ClR%2Ft91zIsmu2sZfYl7c84cTQFf3t9qX4x4P6fA3HIOj%2FBa5SJrjstjkfA0pr7HXK57RsUd3vVEXEyzhaxKkWu%2BLBpCO8FKqf1zIsbBVU7RZAE0t3IhjkXxm7NooHxNvpvDuxSMoQ2b0Q%2BwOb1dQnHoTpw8NEX0TJYjF49pU6%2FqageOzF1yeL2NbJCe2liq%2F%2Ft3v6P1QF%2FxAPR%2Bscby4b1t02tXJjlNfO%2BF1joWLXTFFRzn24JvbZwuedhgxrZwmm8XOBS8ez5sfinBJHST62DN80T23iNBGLH5RvxBP%2BWe1Euae%2FkfAuztFI53SOza%2B%2FoqwNgeSb2uFwgwPDlwUPKzQ0Y7whH6UIYsdDTsUiSWjdCycTv%2Bj7sZcb%2BiN3NhimxvJCpVqRRb9Z9DnBhdj0%2FEoT%2F%2BrMw1%2BA19GoLYZ3tFYhY1ujfbIAHAGUBDjLyyS%2B4WzlcngZCG1cN7M%2FdgU2e5QiW6zgliS4ZKd%2FRjRm7exyDDrv%2BLDBjqkAZR%2BIS04Z94D7PW%2FESwbjo%2F4%2BIKTi7J30OVZfdNxpsql%2BwGGhdDjUF4UlrFB3ohaL1v5%2Fg3qEyo3XvC5nHt4lJXmo4Ew9fboc2OUXV8guzn6ZY5q00D9FBKukRYHIr7T%2B3dOXKhdXrxeirOzrh3hcyhkCnOLNDVpwVo4kLKVTrbQFG0i1Aqpxdu9Ep4NsmnNUP3j3QwWUvH28uHidrASf94ux2qQ&X-Amz-Signature=0e348097b89511bd8bfdef4db1e3ed022ee8f1fd7af399895bb492b3fb4b9c1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVCQDOK%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCokWiirA%2FYP4UJ1lALennGA%2Fa%2Fp9HlhHj%2BaD%2B9tWkOZwIhAMjmCH3v8%2B%2FomW1lRec%2B4%2B0s2REM0%2Bhbnmb0HMfKI365Kv8DCHAQABoMNjM3NDIzMTgzODA1IgwwzUBN2%2F%2BIDerSBmQq3APk8Pcsc6Qkl5mMPw%2Fqqg6WocEPcsWvR%2BDz7D0I9ZWcFwBimxXnMAN3MmWMOw4qnyihQf9ClCYhNlYu3%2BgelQ9AzcVvbccltr8VacadY8%2FFMuDaEPhg1i6J8DgnyUZtu8ozabwdk%2F3XFYC6ClR%2Ft91zIsmu2sZfYl7c84cTQFf3t9qX4x4P6fA3HIOj%2FBa5SJrjstjkfA0pr7HXK57RsUd3vVEXEyzhaxKkWu%2BLBpCO8FKqf1zIsbBVU7RZAE0t3IhjkXxm7NooHxNvpvDuxSMoQ2b0Q%2BwOb1dQnHoTpw8NEX0TJYjF49pU6%2FqageOzF1yeL2NbJCe2liq%2F%2Ft3v6P1QF%2FxAPR%2Bscby4b1t02tXJjlNfO%2BF1joWLXTFFRzn24JvbZwuedhgxrZwmm8XOBS8ez5sfinBJHST62DN80T23iNBGLH5RvxBP%2BWe1Euae%2FkfAuztFI53SOza%2B%2FoqwNgeSb2uFwgwPDlwUPKzQ0Y7whH6UIYsdDTsUiSWjdCycTv%2Bj7sZcb%2BiN3NhimxvJCpVqRRb9Z9DnBhdj0%2FEoT%2F%2BrMw1%2BA19GoLYZ3tFYhY1ujfbIAHAGUBDjLyyS%2B4WzlcngZCG1cN7M%2FdgU2e5QiW6zgliS4ZKd%2FRjRm7exyDDrv%2BLDBjqkAZR%2BIS04Z94D7PW%2FESwbjo%2F4%2BIKTi7J30OVZfdNxpsql%2BwGGhdDjUF4UlrFB3ohaL1v5%2Fg3qEyo3XvC5nHt4lJXmo4Ew9fboc2OUXV8guzn6ZY5q00D9FBKukRYHIr7T%2B3dOXKhdXrxeirOzrh3hcyhkCnOLNDVpwVo4kLKVTrbQFG0i1Aqpxdu9Ep4NsmnNUP3j3QwWUvH28uHidrASf94ux2qQ&X-Amz-Signature=c58e77c5cca7f936643e37d4f2be6997269b31c6196cd3f1416b5bc0b739926d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVCQDOK%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCokWiirA%2FYP4UJ1lALennGA%2Fa%2Fp9HlhHj%2BaD%2B9tWkOZwIhAMjmCH3v8%2B%2FomW1lRec%2B4%2B0s2REM0%2Bhbnmb0HMfKI365Kv8DCHAQABoMNjM3NDIzMTgzODA1IgwwzUBN2%2F%2BIDerSBmQq3APk8Pcsc6Qkl5mMPw%2Fqqg6WocEPcsWvR%2BDz7D0I9ZWcFwBimxXnMAN3MmWMOw4qnyihQf9ClCYhNlYu3%2BgelQ9AzcVvbccltr8VacadY8%2FFMuDaEPhg1i6J8DgnyUZtu8ozabwdk%2F3XFYC6ClR%2Ft91zIsmu2sZfYl7c84cTQFf3t9qX4x4P6fA3HIOj%2FBa5SJrjstjkfA0pr7HXK57RsUd3vVEXEyzhaxKkWu%2BLBpCO8FKqf1zIsbBVU7RZAE0t3IhjkXxm7NooHxNvpvDuxSMoQ2b0Q%2BwOb1dQnHoTpw8NEX0TJYjF49pU6%2FqageOzF1yeL2NbJCe2liq%2F%2Ft3v6P1QF%2FxAPR%2Bscby4b1t02tXJjlNfO%2BF1joWLXTFFRzn24JvbZwuedhgxrZwmm8XOBS8ez5sfinBJHST62DN80T23iNBGLH5RvxBP%2BWe1Euae%2FkfAuztFI53SOza%2B%2FoqwNgeSb2uFwgwPDlwUPKzQ0Y7whH6UIYsdDTsUiSWjdCycTv%2Bj7sZcb%2BiN3NhimxvJCpVqRRb9Z9DnBhdj0%2FEoT%2F%2BrMw1%2BA19GoLYZ3tFYhY1ujfbIAHAGUBDjLyyS%2B4WzlcngZCG1cN7M%2FdgU2e5QiW6zgliS4ZKd%2FRjRm7exyDDrv%2BLDBjqkAZR%2BIS04Z94D7PW%2FESwbjo%2F4%2BIKTi7J30OVZfdNxpsql%2BwGGhdDjUF4UlrFB3ohaL1v5%2Fg3qEyo3XvC5nHt4lJXmo4Ew9fboc2OUXV8guzn6ZY5q00D9FBKukRYHIr7T%2B3dOXKhdXrxeirOzrh3hcyhkCnOLNDVpwVo4kLKVTrbQFG0i1Aqpxdu9Ep4NsmnNUP3j3QwWUvH28uHidrASf94ux2qQ&X-Amz-Signature=a04d897b93a8fe84b4d24e9f8512c86b33cb2023f2a4fa2e761ba59489e3f07e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVCQDOK%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCokWiirA%2FYP4UJ1lALennGA%2Fa%2Fp9HlhHj%2BaD%2B9tWkOZwIhAMjmCH3v8%2B%2FomW1lRec%2B4%2B0s2REM0%2Bhbnmb0HMfKI365Kv8DCHAQABoMNjM3NDIzMTgzODA1IgwwzUBN2%2F%2BIDerSBmQq3APk8Pcsc6Qkl5mMPw%2Fqqg6WocEPcsWvR%2BDz7D0I9ZWcFwBimxXnMAN3MmWMOw4qnyihQf9ClCYhNlYu3%2BgelQ9AzcVvbccltr8VacadY8%2FFMuDaEPhg1i6J8DgnyUZtu8ozabwdk%2F3XFYC6ClR%2Ft91zIsmu2sZfYl7c84cTQFf3t9qX4x4P6fA3HIOj%2FBa5SJrjstjkfA0pr7HXK57RsUd3vVEXEyzhaxKkWu%2BLBpCO8FKqf1zIsbBVU7RZAE0t3IhjkXxm7NooHxNvpvDuxSMoQ2b0Q%2BwOb1dQnHoTpw8NEX0TJYjF49pU6%2FqageOzF1yeL2NbJCe2liq%2F%2Ft3v6P1QF%2FxAPR%2Bscby4b1t02tXJjlNfO%2BF1joWLXTFFRzn24JvbZwuedhgxrZwmm8XOBS8ez5sfinBJHST62DN80T23iNBGLH5RvxBP%2BWe1Euae%2FkfAuztFI53SOza%2B%2FoqwNgeSb2uFwgwPDlwUPKzQ0Y7whH6UIYsdDTsUiSWjdCycTv%2Bj7sZcb%2BiN3NhimxvJCpVqRRb9Z9DnBhdj0%2FEoT%2F%2BrMw1%2BA19GoLYZ3tFYhY1ujfbIAHAGUBDjLyyS%2B4WzlcngZCG1cN7M%2FdgU2e5QiW6zgliS4ZKd%2FRjRm7exyDDrv%2BLDBjqkAZR%2BIS04Z94D7PW%2FESwbjo%2F4%2BIKTi7J30OVZfdNxpsql%2BwGGhdDjUF4UlrFB3ohaL1v5%2Fg3qEyo3XvC5nHt4lJXmo4Ew9fboc2OUXV8guzn6ZY5q00D9FBKukRYHIr7T%2B3dOXKhdXrxeirOzrh3hcyhkCnOLNDVpwVo4kLKVTrbQFG0i1Aqpxdu9Ep4NsmnNUP3j3QwWUvH28uHidrASf94ux2qQ&X-Amz-Signature=b34d277a0672abe59cd15895f337e3a382a147c3a6a32b14bec5b34757f4adbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVCQDOK%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCokWiirA%2FYP4UJ1lALennGA%2Fa%2Fp9HlhHj%2BaD%2B9tWkOZwIhAMjmCH3v8%2B%2FomW1lRec%2B4%2B0s2REM0%2Bhbnmb0HMfKI365Kv8DCHAQABoMNjM3NDIzMTgzODA1IgwwzUBN2%2F%2BIDerSBmQq3APk8Pcsc6Qkl5mMPw%2Fqqg6WocEPcsWvR%2BDz7D0I9ZWcFwBimxXnMAN3MmWMOw4qnyihQf9ClCYhNlYu3%2BgelQ9AzcVvbccltr8VacadY8%2FFMuDaEPhg1i6J8DgnyUZtu8ozabwdk%2F3XFYC6ClR%2Ft91zIsmu2sZfYl7c84cTQFf3t9qX4x4P6fA3HIOj%2FBa5SJrjstjkfA0pr7HXK57RsUd3vVEXEyzhaxKkWu%2BLBpCO8FKqf1zIsbBVU7RZAE0t3IhjkXxm7NooHxNvpvDuxSMoQ2b0Q%2BwOb1dQnHoTpw8NEX0TJYjF49pU6%2FqageOzF1yeL2NbJCe2liq%2F%2Ft3v6P1QF%2FxAPR%2Bscby4b1t02tXJjlNfO%2BF1joWLXTFFRzn24JvbZwuedhgxrZwmm8XOBS8ez5sfinBJHST62DN80T23iNBGLH5RvxBP%2BWe1Euae%2FkfAuztFI53SOza%2B%2FoqwNgeSb2uFwgwPDlwUPKzQ0Y7whH6UIYsdDTsUiSWjdCycTv%2Bj7sZcb%2BiN3NhimxvJCpVqRRb9Z9DnBhdj0%2FEoT%2F%2BrMw1%2BA19GoLYZ3tFYhY1ujfbIAHAGUBDjLyyS%2B4WzlcngZCG1cN7M%2FdgU2e5QiW6zgliS4ZKd%2FRjRm7exyDDrv%2BLDBjqkAZR%2BIS04Z94D7PW%2FESwbjo%2F4%2BIKTi7J30OVZfdNxpsql%2BwGGhdDjUF4UlrFB3ohaL1v5%2Fg3qEyo3XvC5nHt4lJXmo4Ew9fboc2OUXV8guzn6ZY5q00D9FBKukRYHIr7T%2B3dOXKhdXrxeirOzrh3hcyhkCnOLNDVpwVo4kLKVTrbQFG0i1Aqpxdu9Ep4NsmnNUP3j3QwWUvH28uHidrASf94ux2qQ&X-Amz-Signature=1d100d6ac8c77991cffd4393258e60edab4d5e2b775a0f80dc02799bcd7683c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVCQDOK%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCokWiirA%2FYP4UJ1lALennGA%2Fa%2Fp9HlhHj%2BaD%2B9tWkOZwIhAMjmCH3v8%2B%2FomW1lRec%2B4%2B0s2REM0%2Bhbnmb0HMfKI365Kv8DCHAQABoMNjM3NDIzMTgzODA1IgwwzUBN2%2F%2BIDerSBmQq3APk8Pcsc6Qkl5mMPw%2Fqqg6WocEPcsWvR%2BDz7D0I9ZWcFwBimxXnMAN3MmWMOw4qnyihQf9ClCYhNlYu3%2BgelQ9AzcVvbccltr8VacadY8%2FFMuDaEPhg1i6J8DgnyUZtu8ozabwdk%2F3XFYC6ClR%2Ft91zIsmu2sZfYl7c84cTQFf3t9qX4x4P6fA3HIOj%2FBa5SJrjstjkfA0pr7HXK57RsUd3vVEXEyzhaxKkWu%2BLBpCO8FKqf1zIsbBVU7RZAE0t3IhjkXxm7NooHxNvpvDuxSMoQ2b0Q%2BwOb1dQnHoTpw8NEX0TJYjF49pU6%2FqageOzF1yeL2NbJCe2liq%2F%2Ft3v6P1QF%2FxAPR%2Bscby4b1t02tXJjlNfO%2BF1joWLXTFFRzn24JvbZwuedhgxrZwmm8XOBS8ez5sfinBJHST62DN80T23iNBGLH5RvxBP%2BWe1Euae%2FkfAuztFI53SOza%2B%2FoqwNgeSb2uFwgwPDlwUPKzQ0Y7whH6UIYsdDTsUiSWjdCycTv%2Bj7sZcb%2BiN3NhimxvJCpVqRRb9Z9DnBhdj0%2FEoT%2F%2BrMw1%2BA19GoLYZ3tFYhY1ujfbIAHAGUBDjLyyS%2B4WzlcngZCG1cN7M%2FdgU2e5QiW6zgliS4ZKd%2FRjRm7exyDDrv%2BLDBjqkAZR%2BIS04Z94D7PW%2FESwbjo%2F4%2BIKTi7J30OVZfdNxpsql%2BwGGhdDjUF4UlrFB3ohaL1v5%2Fg3qEyo3XvC5nHt4lJXmo4Ew9fboc2OUXV8guzn6ZY5q00D9FBKukRYHIr7T%2B3dOXKhdXrxeirOzrh3hcyhkCnOLNDVpwVo4kLKVTrbQFG0i1Aqpxdu9Ep4NsmnNUP3j3QwWUvH28uHidrASf94ux2qQ&X-Amz-Signature=7047c2bdb617c3a74b2127056aa08fdbc22f43005f59854f9e5ebc80a14febae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVCQDOK%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCokWiirA%2FYP4UJ1lALennGA%2Fa%2Fp9HlhHj%2BaD%2B9tWkOZwIhAMjmCH3v8%2B%2FomW1lRec%2B4%2B0s2REM0%2Bhbnmb0HMfKI365Kv8DCHAQABoMNjM3NDIzMTgzODA1IgwwzUBN2%2F%2BIDerSBmQq3APk8Pcsc6Qkl5mMPw%2Fqqg6WocEPcsWvR%2BDz7D0I9ZWcFwBimxXnMAN3MmWMOw4qnyihQf9ClCYhNlYu3%2BgelQ9AzcVvbccltr8VacadY8%2FFMuDaEPhg1i6J8DgnyUZtu8ozabwdk%2F3XFYC6ClR%2Ft91zIsmu2sZfYl7c84cTQFf3t9qX4x4P6fA3HIOj%2FBa5SJrjstjkfA0pr7HXK57RsUd3vVEXEyzhaxKkWu%2BLBpCO8FKqf1zIsbBVU7RZAE0t3IhjkXxm7NooHxNvpvDuxSMoQ2b0Q%2BwOb1dQnHoTpw8NEX0TJYjF49pU6%2FqageOzF1yeL2NbJCe2liq%2F%2Ft3v6P1QF%2FxAPR%2Bscby4b1t02tXJjlNfO%2BF1joWLXTFFRzn24JvbZwuedhgxrZwmm8XOBS8ez5sfinBJHST62DN80T23iNBGLH5RvxBP%2BWe1Euae%2FkfAuztFI53SOza%2B%2FoqwNgeSb2uFwgwPDlwUPKzQ0Y7whH6UIYsdDTsUiSWjdCycTv%2Bj7sZcb%2BiN3NhimxvJCpVqRRb9Z9DnBhdj0%2FEoT%2F%2BrMw1%2BA19GoLYZ3tFYhY1ujfbIAHAGUBDjLyyS%2B4WzlcngZCG1cN7M%2FdgU2e5QiW6zgliS4ZKd%2FRjRm7exyDDrv%2BLDBjqkAZR%2BIS04Z94D7PW%2FESwbjo%2F4%2BIKTi7J30OVZfdNxpsql%2BwGGhdDjUF4UlrFB3ohaL1v5%2Fg3qEyo3XvC5nHt4lJXmo4Ew9fboc2OUXV8guzn6ZY5q00D9FBKukRYHIr7T%2B3dOXKhdXrxeirOzrh3hcyhkCnOLNDVpwVo4kLKVTrbQFG0i1Aqpxdu9Ep4NsmnNUP3j3QwWUvH28uHidrASf94ux2qQ&X-Amz-Signature=5336b7e2a75947b147d9ffe89b26b9d4f5f4f56df3159c3bf9297b107181f26f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
