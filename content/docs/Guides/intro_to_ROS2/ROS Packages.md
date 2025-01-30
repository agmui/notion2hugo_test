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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4GPUOTO%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICv7v5ncUIs%2BGm5qWRKLXc69rzIyJAEcoXbS3ZGUbxqkAiB3bXBHExi5T8MUHk6Iqx%2BvAhSGFb6krkWD1pCQiKeeQSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkVn3sUOy7OR%2FqTtnKtwDFJ9V6%2FY1QDDVeJAzZnYM1fLuOak0eSdDuqjgbT4%2FTXNgkZ2PulE6%2B%2FTiLLgcU1%2BIQv4ZaIs7RcV0J3yzi4tmyRESr2bZ83ivwlhcNTn8k5f3giMjpe05JG3NsIL47ceujBviXVjcKZ6UotnHDbirLDt4CTh1M3HeEyF711Jaqg1lXPvcZmL145XBrIqG4ter0e%2F1t0QJjFgflh0Pvp6CMNNxgAbrcP376PcM4RtcY0Bd2Nv%2BszVrrtWUml4YtK5i6EWv9%2F9r47vXKuGGC6VOpPc9gsCXzt%2F0kZJep0UlqWjObyI1dvcdmvn3xQ6Y1OpTdKURPrKfLesQdr7d9oyv9LDQE31DJrk58KVMCsRgpOBCS27y57xuuLX%2FTPRcyU%2B9LjRmV01qV29YcY2kZN%2BVs444f1qAIQr5oHcnBjUwPE0zkvSiek4Jloym%2BPBOBTYkyXmWtdZOFXvoKkhS6wnwmrpmtk4UBGdovbfvUKA68lQvGCU4hbGaEZg1m0j29xYhNu9lIT60axBXBwuvEr90Hc7Vh1KIu5DEUlaFrhiWVIhgOedPmF8JLOoG7rm9%2FXI5%2F0yahjbf7EdCBcurNUBw%2BVTfFZ9Ey9xZvpJqaIM8xGuwI8WGk9S%2FwyipfAEw3%2FvtvAY6pgFvub8y5j5qa19ybSPQl63%2BlpOgfcnQgSW0oM0df%2B2lFFc8aZozMWzh1UPN%2B%2FqvCC%2BWpm4FaTI1VwmiFC5vkt2nKZoaINZrtUSlbZdQ7xQDQZ%2FBu13Cjf69Czk2O80ggmmK2QDdtzx9EF%2Fnmdj9f6pbeGIo1y5hiYCwoO0SOZIXHkcQ30OIP4aLxKx%2F5tCzf5SwjukG%2BW%2FpAhqFggH02K4RrR35zzph&X-Amz-Signature=d82f7399488f108f093429d273b150d521216f9dd5326f083197c16995084026&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4GPUOTO%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICv7v5ncUIs%2BGm5qWRKLXc69rzIyJAEcoXbS3ZGUbxqkAiB3bXBHExi5T8MUHk6Iqx%2BvAhSGFb6krkWD1pCQiKeeQSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkVn3sUOy7OR%2FqTtnKtwDFJ9V6%2FY1QDDVeJAzZnYM1fLuOak0eSdDuqjgbT4%2FTXNgkZ2PulE6%2B%2FTiLLgcU1%2BIQv4ZaIs7RcV0J3yzi4tmyRESr2bZ83ivwlhcNTn8k5f3giMjpe05JG3NsIL47ceujBviXVjcKZ6UotnHDbirLDt4CTh1M3HeEyF711Jaqg1lXPvcZmL145XBrIqG4ter0e%2F1t0QJjFgflh0Pvp6CMNNxgAbrcP376PcM4RtcY0Bd2Nv%2BszVrrtWUml4YtK5i6EWv9%2F9r47vXKuGGC6VOpPc9gsCXzt%2F0kZJep0UlqWjObyI1dvcdmvn3xQ6Y1OpTdKURPrKfLesQdr7d9oyv9LDQE31DJrk58KVMCsRgpOBCS27y57xuuLX%2FTPRcyU%2B9LjRmV01qV29YcY2kZN%2BVs444f1qAIQr5oHcnBjUwPE0zkvSiek4Jloym%2BPBOBTYkyXmWtdZOFXvoKkhS6wnwmrpmtk4UBGdovbfvUKA68lQvGCU4hbGaEZg1m0j29xYhNu9lIT60axBXBwuvEr90Hc7Vh1KIu5DEUlaFrhiWVIhgOedPmF8JLOoG7rm9%2FXI5%2F0yahjbf7EdCBcurNUBw%2BVTfFZ9Ey9xZvpJqaIM8xGuwI8WGk9S%2FwyipfAEw3%2FvtvAY6pgFvub8y5j5qa19ybSPQl63%2BlpOgfcnQgSW0oM0df%2B2lFFc8aZozMWzh1UPN%2B%2FqvCC%2BWpm4FaTI1VwmiFC5vkt2nKZoaINZrtUSlbZdQ7xQDQZ%2FBu13Cjf69Czk2O80ggmmK2QDdtzx9EF%2Fnmdj9f6pbeGIo1y5hiYCwoO0SOZIXHkcQ30OIP4aLxKx%2F5tCzf5SwjukG%2BW%2FpAhqFggH02K4RrR35zzph&X-Amz-Signature=5149417f9de8917ccd60f3f8cf1a3e6f17252e7c8b42ddd4fbf7938b80b4f2d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4GPUOTO%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICv7v5ncUIs%2BGm5qWRKLXc69rzIyJAEcoXbS3ZGUbxqkAiB3bXBHExi5T8MUHk6Iqx%2BvAhSGFb6krkWD1pCQiKeeQSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkVn3sUOy7OR%2FqTtnKtwDFJ9V6%2FY1QDDVeJAzZnYM1fLuOak0eSdDuqjgbT4%2FTXNgkZ2PulE6%2B%2FTiLLgcU1%2BIQv4ZaIs7RcV0J3yzi4tmyRESr2bZ83ivwlhcNTn8k5f3giMjpe05JG3NsIL47ceujBviXVjcKZ6UotnHDbirLDt4CTh1M3HeEyF711Jaqg1lXPvcZmL145XBrIqG4ter0e%2F1t0QJjFgflh0Pvp6CMNNxgAbrcP376PcM4RtcY0Bd2Nv%2BszVrrtWUml4YtK5i6EWv9%2F9r47vXKuGGC6VOpPc9gsCXzt%2F0kZJep0UlqWjObyI1dvcdmvn3xQ6Y1OpTdKURPrKfLesQdr7d9oyv9LDQE31DJrk58KVMCsRgpOBCS27y57xuuLX%2FTPRcyU%2B9LjRmV01qV29YcY2kZN%2BVs444f1qAIQr5oHcnBjUwPE0zkvSiek4Jloym%2BPBOBTYkyXmWtdZOFXvoKkhS6wnwmrpmtk4UBGdovbfvUKA68lQvGCU4hbGaEZg1m0j29xYhNu9lIT60axBXBwuvEr90Hc7Vh1KIu5DEUlaFrhiWVIhgOedPmF8JLOoG7rm9%2FXI5%2F0yahjbf7EdCBcurNUBw%2BVTfFZ9Ey9xZvpJqaIM8xGuwI8WGk9S%2FwyipfAEw3%2FvtvAY6pgFvub8y5j5qa19ybSPQl63%2BlpOgfcnQgSW0oM0df%2B2lFFc8aZozMWzh1UPN%2B%2FqvCC%2BWpm4FaTI1VwmiFC5vkt2nKZoaINZrtUSlbZdQ7xQDQZ%2FBu13Cjf69Czk2O80ggmmK2QDdtzx9EF%2Fnmdj9f6pbeGIo1y5hiYCwoO0SOZIXHkcQ30OIP4aLxKx%2F5tCzf5SwjukG%2BW%2FpAhqFggH02K4RrR35zzph&X-Amz-Signature=1901867b6a7179b0a1971cc8c965f6ee8cdf26f04bbe3a853dd38ec6dd1cf2a6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4GPUOTO%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICv7v5ncUIs%2BGm5qWRKLXc69rzIyJAEcoXbS3ZGUbxqkAiB3bXBHExi5T8MUHk6Iqx%2BvAhSGFb6krkWD1pCQiKeeQSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkVn3sUOy7OR%2FqTtnKtwDFJ9V6%2FY1QDDVeJAzZnYM1fLuOak0eSdDuqjgbT4%2FTXNgkZ2PulE6%2B%2FTiLLgcU1%2BIQv4ZaIs7RcV0J3yzi4tmyRESr2bZ83ivwlhcNTn8k5f3giMjpe05JG3NsIL47ceujBviXVjcKZ6UotnHDbirLDt4CTh1M3HeEyF711Jaqg1lXPvcZmL145XBrIqG4ter0e%2F1t0QJjFgflh0Pvp6CMNNxgAbrcP376PcM4RtcY0Bd2Nv%2BszVrrtWUml4YtK5i6EWv9%2F9r47vXKuGGC6VOpPc9gsCXzt%2F0kZJep0UlqWjObyI1dvcdmvn3xQ6Y1OpTdKURPrKfLesQdr7d9oyv9LDQE31DJrk58KVMCsRgpOBCS27y57xuuLX%2FTPRcyU%2B9LjRmV01qV29YcY2kZN%2BVs444f1qAIQr5oHcnBjUwPE0zkvSiek4Jloym%2BPBOBTYkyXmWtdZOFXvoKkhS6wnwmrpmtk4UBGdovbfvUKA68lQvGCU4hbGaEZg1m0j29xYhNu9lIT60axBXBwuvEr90Hc7Vh1KIu5DEUlaFrhiWVIhgOedPmF8JLOoG7rm9%2FXI5%2F0yahjbf7EdCBcurNUBw%2BVTfFZ9Ey9xZvpJqaIM8xGuwI8WGk9S%2FwyipfAEw3%2FvtvAY6pgFvub8y5j5qa19ybSPQl63%2BlpOgfcnQgSW0oM0df%2B2lFFc8aZozMWzh1UPN%2B%2FqvCC%2BWpm4FaTI1VwmiFC5vkt2nKZoaINZrtUSlbZdQ7xQDQZ%2FBu13Cjf69Czk2O80ggmmK2QDdtzx9EF%2Fnmdj9f6pbeGIo1y5hiYCwoO0SOZIXHkcQ30OIP4aLxKx%2F5tCzf5SwjukG%2BW%2FpAhqFggH02K4RrR35zzph&X-Amz-Signature=c3ad0c066aa0cc8ebb47d371ac7f40c2a0a0b07788dbcd8711b4c99c2b5b4cc5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4GPUOTO%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICv7v5ncUIs%2BGm5qWRKLXc69rzIyJAEcoXbS3ZGUbxqkAiB3bXBHExi5T8MUHk6Iqx%2BvAhSGFb6krkWD1pCQiKeeQSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkVn3sUOy7OR%2FqTtnKtwDFJ9V6%2FY1QDDVeJAzZnYM1fLuOak0eSdDuqjgbT4%2FTXNgkZ2PulE6%2B%2FTiLLgcU1%2BIQv4ZaIs7RcV0J3yzi4tmyRESr2bZ83ivwlhcNTn8k5f3giMjpe05JG3NsIL47ceujBviXVjcKZ6UotnHDbirLDt4CTh1M3HeEyF711Jaqg1lXPvcZmL145XBrIqG4ter0e%2F1t0QJjFgflh0Pvp6CMNNxgAbrcP376PcM4RtcY0Bd2Nv%2BszVrrtWUml4YtK5i6EWv9%2F9r47vXKuGGC6VOpPc9gsCXzt%2F0kZJep0UlqWjObyI1dvcdmvn3xQ6Y1OpTdKURPrKfLesQdr7d9oyv9LDQE31DJrk58KVMCsRgpOBCS27y57xuuLX%2FTPRcyU%2B9LjRmV01qV29YcY2kZN%2BVs444f1qAIQr5oHcnBjUwPE0zkvSiek4Jloym%2BPBOBTYkyXmWtdZOFXvoKkhS6wnwmrpmtk4UBGdovbfvUKA68lQvGCU4hbGaEZg1m0j29xYhNu9lIT60axBXBwuvEr90Hc7Vh1KIu5DEUlaFrhiWVIhgOedPmF8JLOoG7rm9%2FXI5%2F0yahjbf7EdCBcurNUBw%2BVTfFZ9Ey9xZvpJqaIM8xGuwI8WGk9S%2FwyipfAEw3%2FvtvAY6pgFvub8y5j5qa19ybSPQl63%2BlpOgfcnQgSW0oM0df%2B2lFFc8aZozMWzh1UPN%2B%2FqvCC%2BWpm4FaTI1VwmiFC5vkt2nKZoaINZrtUSlbZdQ7xQDQZ%2FBu13Cjf69Czk2O80ggmmK2QDdtzx9EF%2Fnmdj9f6pbeGIo1y5hiYCwoO0SOZIXHkcQ30OIP4aLxKx%2F5tCzf5SwjukG%2BW%2FpAhqFggH02K4RrR35zzph&X-Amz-Signature=070b15293def1a9fb50c5c5655114d43ecd3c6b2e4ee6a4b8fb70648094ef9bf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4GPUOTO%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICv7v5ncUIs%2BGm5qWRKLXc69rzIyJAEcoXbS3ZGUbxqkAiB3bXBHExi5T8MUHk6Iqx%2BvAhSGFb6krkWD1pCQiKeeQSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkVn3sUOy7OR%2FqTtnKtwDFJ9V6%2FY1QDDVeJAzZnYM1fLuOak0eSdDuqjgbT4%2FTXNgkZ2PulE6%2B%2FTiLLgcU1%2BIQv4ZaIs7RcV0J3yzi4tmyRESr2bZ83ivwlhcNTn8k5f3giMjpe05JG3NsIL47ceujBviXVjcKZ6UotnHDbirLDt4CTh1M3HeEyF711Jaqg1lXPvcZmL145XBrIqG4ter0e%2F1t0QJjFgflh0Pvp6CMNNxgAbrcP376PcM4RtcY0Bd2Nv%2BszVrrtWUml4YtK5i6EWv9%2F9r47vXKuGGC6VOpPc9gsCXzt%2F0kZJep0UlqWjObyI1dvcdmvn3xQ6Y1OpTdKURPrKfLesQdr7d9oyv9LDQE31DJrk58KVMCsRgpOBCS27y57xuuLX%2FTPRcyU%2B9LjRmV01qV29YcY2kZN%2BVs444f1qAIQr5oHcnBjUwPE0zkvSiek4Jloym%2BPBOBTYkyXmWtdZOFXvoKkhS6wnwmrpmtk4UBGdovbfvUKA68lQvGCU4hbGaEZg1m0j29xYhNu9lIT60axBXBwuvEr90Hc7Vh1KIu5DEUlaFrhiWVIhgOedPmF8JLOoG7rm9%2FXI5%2F0yahjbf7EdCBcurNUBw%2BVTfFZ9Ey9xZvpJqaIM8xGuwI8WGk9S%2FwyipfAEw3%2FvtvAY6pgFvub8y5j5qa19ybSPQl63%2BlpOgfcnQgSW0oM0df%2B2lFFc8aZozMWzh1UPN%2B%2FqvCC%2BWpm4FaTI1VwmiFC5vkt2nKZoaINZrtUSlbZdQ7xQDQZ%2FBu13Cjf69Czk2O80ggmmK2QDdtzx9EF%2Fnmdj9f6pbeGIo1y5hiYCwoO0SOZIXHkcQ30OIP4aLxKx%2F5tCzf5SwjukG%2BW%2FpAhqFggH02K4RrR35zzph&X-Amz-Signature=30013e764b309b4804dad107073af3146a7e128cb76c31939e51ed7fa103d5d6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4GPUOTO%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICv7v5ncUIs%2BGm5qWRKLXc69rzIyJAEcoXbS3ZGUbxqkAiB3bXBHExi5T8MUHk6Iqx%2BvAhSGFb6krkWD1pCQiKeeQSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkVn3sUOy7OR%2FqTtnKtwDFJ9V6%2FY1QDDVeJAzZnYM1fLuOak0eSdDuqjgbT4%2FTXNgkZ2PulE6%2B%2FTiLLgcU1%2BIQv4ZaIs7RcV0J3yzi4tmyRESr2bZ83ivwlhcNTn8k5f3giMjpe05JG3NsIL47ceujBviXVjcKZ6UotnHDbirLDt4CTh1M3HeEyF711Jaqg1lXPvcZmL145XBrIqG4ter0e%2F1t0QJjFgflh0Pvp6CMNNxgAbrcP376PcM4RtcY0Bd2Nv%2BszVrrtWUml4YtK5i6EWv9%2F9r47vXKuGGC6VOpPc9gsCXzt%2F0kZJep0UlqWjObyI1dvcdmvn3xQ6Y1OpTdKURPrKfLesQdr7d9oyv9LDQE31DJrk58KVMCsRgpOBCS27y57xuuLX%2FTPRcyU%2B9LjRmV01qV29YcY2kZN%2BVs444f1qAIQr5oHcnBjUwPE0zkvSiek4Jloym%2BPBOBTYkyXmWtdZOFXvoKkhS6wnwmrpmtk4UBGdovbfvUKA68lQvGCU4hbGaEZg1m0j29xYhNu9lIT60axBXBwuvEr90Hc7Vh1KIu5DEUlaFrhiWVIhgOedPmF8JLOoG7rm9%2FXI5%2F0yahjbf7EdCBcurNUBw%2BVTfFZ9Ey9xZvpJqaIM8xGuwI8WGk9S%2FwyipfAEw3%2FvtvAY6pgFvub8y5j5qa19ybSPQl63%2BlpOgfcnQgSW0oM0df%2B2lFFc8aZozMWzh1UPN%2B%2FqvCC%2BWpm4FaTI1VwmiFC5vkt2nKZoaINZrtUSlbZdQ7xQDQZ%2FBu13Cjf69Czk2O80ggmmK2QDdtzx9EF%2Fnmdj9f6pbeGIo1y5hiYCwoO0SOZIXHkcQ30OIP4aLxKx%2F5tCzf5SwjukG%2BW%2FpAhqFggH02K4RrR35zzph&X-Amz-Signature=b9faeb0d2afdc16e148df1bc832b1a7d9e3ce436878e2066f83ae9812f500bf1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
