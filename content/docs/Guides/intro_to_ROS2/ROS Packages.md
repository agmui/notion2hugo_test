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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZ7DC5D%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKEF4NwtXDlERVmVaz1dquOc9MB8cd5goadM7MLwJFSAiEAkO2R7gEpRttM9UPJbxaDKgtHUMMT0W54h087ObVUTP0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFaUL4GdB71FP1zznSrcA7eN5pvpDKaAZO%2BKEIShHU2JE6ikX8OiEWPp%2FWPHOX5FQD2GAiak9YadJHF3TzBveFbUHJmJKNNN7txkc2l5qTf2h3E8CYvC3tD2nJVadrlzahjDuB0EfDxN0YB3el5Urzsq47OJi3qzTScFOh5yJJpKuhQxCvxwna82OeOQ0AFH71rY7sm0vXkb3oblWxBOfvhENNKRpRHB225bRlI4iaXd4ojqlLEKDhufOblxmLSHIzozhrsIQ99gUezHr4XDROL1AXtDkm%2F7O%2FgrruS15L12Tu9vVRTZQYkIuQYdQjMJGWQTjlqDYyX2%2FlQzHvQN6AH%2FzxRCiHHhjCI6vu9MHGKZAeQKhAcP8stq5p2cORSox1DvNeG9Suh9xITykykzAojwvcqclz1qYaQ3veB%2BF%2FFJOTIe4EvWP6NXaMSrGz8Em5Uxud5tBswK%2Bi%2FjDdFSUL5vgxKH4F9u%2B8L2vuck2ZgqDmqapemNfBHU8gWSfVEceaKPOvmyHOyIGnyCjzw%2FpqIurSTsKhbM35iswPNO%2FFbpjHMMHfZjwwhV09IKnKdULUZcMriosArLpwZNTi12uPprbkzTFBA7y%2B6Q9p1i3rNqiwcMVJ5Xxk%2FOhuBv%2BHUDDW%2FPdri1W45XxMfrMNeylb8GOqUBTFqz5b7iLVnyFaG46doWy9dhAYen1LqsURTJlAhKIob1iBYvNitpbuzu0xXxfasLOO5kZMyZrtS9Tdn9SIXNPTTE7jJwjCHc9ZwNU2v9eZh5hovii7QMiyjalJu3yWdpp9k8OkZkjqKKc6KnenGNHBBcXF6n%2Bot%2FMYVb4Cn85Qx0mlqTUarYXPUPQg14cNqC8dvhQCPso0X6ySQMsFd4vBJhfenW&X-Amz-Signature=52d3d9056344d7eefb6cf9f78d5f70ecb7da19c4cba339951a178c59039379fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZ7DC5D%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKEF4NwtXDlERVmVaz1dquOc9MB8cd5goadM7MLwJFSAiEAkO2R7gEpRttM9UPJbxaDKgtHUMMT0W54h087ObVUTP0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFaUL4GdB71FP1zznSrcA7eN5pvpDKaAZO%2BKEIShHU2JE6ikX8OiEWPp%2FWPHOX5FQD2GAiak9YadJHF3TzBveFbUHJmJKNNN7txkc2l5qTf2h3E8CYvC3tD2nJVadrlzahjDuB0EfDxN0YB3el5Urzsq47OJi3qzTScFOh5yJJpKuhQxCvxwna82OeOQ0AFH71rY7sm0vXkb3oblWxBOfvhENNKRpRHB225bRlI4iaXd4ojqlLEKDhufOblxmLSHIzozhrsIQ99gUezHr4XDROL1AXtDkm%2F7O%2FgrruS15L12Tu9vVRTZQYkIuQYdQjMJGWQTjlqDYyX2%2FlQzHvQN6AH%2FzxRCiHHhjCI6vu9MHGKZAeQKhAcP8stq5p2cORSox1DvNeG9Suh9xITykykzAojwvcqclz1qYaQ3veB%2BF%2FFJOTIe4EvWP6NXaMSrGz8Em5Uxud5tBswK%2Bi%2FjDdFSUL5vgxKH4F9u%2B8L2vuck2ZgqDmqapemNfBHU8gWSfVEceaKPOvmyHOyIGnyCjzw%2FpqIurSTsKhbM35iswPNO%2FFbpjHMMHfZjwwhV09IKnKdULUZcMriosArLpwZNTi12uPprbkzTFBA7y%2B6Q9p1i3rNqiwcMVJ5Xxk%2FOhuBv%2BHUDDW%2FPdri1W45XxMfrMNeylb8GOqUBTFqz5b7iLVnyFaG46doWy9dhAYen1LqsURTJlAhKIob1iBYvNitpbuzu0xXxfasLOO5kZMyZrtS9Tdn9SIXNPTTE7jJwjCHc9ZwNU2v9eZh5hovii7QMiyjalJu3yWdpp9k8OkZkjqKKc6KnenGNHBBcXF6n%2Bot%2FMYVb4Cn85Qx0mlqTUarYXPUPQg14cNqC8dvhQCPso0X6ySQMsFd4vBJhfenW&X-Amz-Signature=cd43a9c14017937b2afbaf337e2defded36126c676f000a375c9afa707be1fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZ7DC5D%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKEF4NwtXDlERVmVaz1dquOc9MB8cd5goadM7MLwJFSAiEAkO2R7gEpRttM9UPJbxaDKgtHUMMT0W54h087ObVUTP0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFaUL4GdB71FP1zznSrcA7eN5pvpDKaAZO%2BKEIShHU2JE6ikX8OiEWPp%2FWPHOX5FQD2GAiak9YadJHF3TzBveFbUHJmJKNNN7txkc2l5qTf2h3E8CYvC3tD2nJVadrlzahjDuB0EfDxN0YB3el5Urzsq47OJi3qzTScFOh5yJJpKuhQxCvxwna82OeOQ0AFH71rY7sm0vXkb3oblWxBOfvhENNKRpRHB225bRlI4iaXd4ojqlLEKDhufOblxmLSHIzozhrsIQ99gUezHr4XDROL1AXtDkm%2F7O%2FgrruS15L12Tu9vVRTZQYkIuQYdQjMJGWQTjlqDYyX2%2FlQzHvQN6AH%2FzxRCiHHhjCI6vu9MHGKZAeQKhAcP8stq5p2cORSox1DvNeG9Suh9xITykykzAojwvcqclz1qYaQ3veB%2BF%2FFJOTIe4EvWP6NXaMSrGz8Em5Uxud5tBswK%2Bi%2FjDdFSUL5vgxKH4F9u%2B8L2vuck2ZgqDmqapemNfBHU8gWSfVEceaKPOvmyHOyIGnyCjzw%2FpqIurSTsKhbM35iswPNO%2FFbpjHMMHfZjwwhV09IKnKdULUZcMriosArLpwZNTi12uPprbkzTFBA7y%2B6Q9p1i3rNqiwcMVJ5Xxk%2FOhuBv%2BHUDDW%2FPdri1W45XxMfrMNeylb8GOqUBTFqz5b7iLVnyFaG46doWy9dhAYen1LqsURTJlAhKIob1iBYvNitpbuzu0xXxfasLOO5kZMyZrtS9Tdn9SIXNPTTE7jJwjCHc9ZwNU2v9eZh5hovii7QMiyjalJu3yWdpp9k8OkZkjqKKc6KnenGNHBBcXF6n%2Bot%2FMYVb4Cn85Qx0mlqTUarYXPUPQg14cNqC8dvhQCPso0X6ySQMsFd4vBJhfenW&X-Amz-Signature=e09c0c0723617238fc9974dd9a64ac0083971d771e59beefd06ad6d84a7af048&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZ7DC5D%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKEF4NwtXDlERVmVaz1dquOc9MB8cd5goadM7MLwJFSAiEAkO2R7gEpRttM9UPJbxaDKgtHUMMT0W54h087ObVUTP0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFaUL4GdB71FP1zznSrcA7eN5pvpDKaAZO%2BKEIShHU2JE6ikX8OiEWPp%2FWPHOX5FQD2GAiak9YadJHF3TzBveFbUHJmJKNNN7txkc2l5qTf2h3E8CYvC3tD2nJVadrlzahjDuB0EfDxN0YB3el5Urzsq47OJi3qzTScFOh5yJJpKuhQxCvxwna82OeOQ0AFH71rY7sm0vXkb3oblWxBOfvhENNKRpRHB225bRlI4iaXd4ojqlLEKDhufOblxmLSHIzozhrsIQ99gUezHr4XDROL1AXtDkm%2F7O%2FgrruS15L12Tu9vVRTZQYkIuQYdQjMJGWQTjlqDYyX2%2FlQzHvQN6AH%2FzxRCiHHhjCI6vu9MHGKZAeQKhAcP8stq5p2cORSox1DvNeG9Suh9xITykykzAojwvcqclz1qYaQ3veB%2BF%2FFJOTIe4EvWP6NXaMSrGz8Em5Uxud5tBswK%2Bi%2FjDdFSUL5vgxKH4F9u%2B8L2vuck2ZgqDmqapemNfBHU8gWSfVEceaKPOvmyHOyIGnyCjzw%2FpqIurSTsKhbM35iswPNO%2FFbpjHMMHfZjwwhV09IKnKdULUZcMriosArLpwZNTi12uPprbkzTFBA7y%2B6Q9p1i3rNqiwcMVJ5Xxk%2FOhuBv%2BHUDDW%2FPdri1W45XxMfrMNeylb8GOqUBTFqz5b7iLVnyFaG46doWy9dhAYen1LqsURTJlAhKIob1iBYvNitpbuzu0xXxfasLOO5kZMyZrtS9Tdn9SIXNPTTE7jJwjCHc9ZwNU2v9eZh5hovii7QMiyjalJu3yWdpp9k8OkZkjqKKc6KnenGNHBBcXF6n%2Bot%2FMYVb4Cn85Qx0mlqTUarYXPUPQg14cNqC8dvhQCPso0X6ySQMsFd4vBJhfenW&X-Amz-Signature=d1d76fc08fd7d89cbfe2e83aa7d2f8384e19fd5f5dc62b1e7069ca89267f3543&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZ7DC5D%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKEF4NwtXDlERVmVaz1dquOc9MB8cd5goadM7MLwJFSAiEAkO2R7gEpRttM9UPJbxaDKgtHUMMT0W54h087ObVUTP0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFaUL4GdB71FP1zznSrcA7eN5pvpDKaAZO%2BKEIShHU2JE6ikX8OiEWPp%2FWPHOX5FQD2GAiak9YadJHF3TzBveFbUHJmJKNNN7txkc2l5qTf2h3E8CYvC3tD2nJVadrlzahjDuB0EfDxN0YB3el5Urzsq47OJi3qzTScFOh5yJJpKuhQxCvxwna82OeOQ0AFH71rY7sm0vXkb3oblWxBOfvhENNKRpRHB225bRlI4iaXd4ojqlLEKDhufOblxmLSHIzozhrsIQ99gUezHr4XDROL1AXtDkm%2F7O%2FgrruS15L12Tu9vVRTZQYkIuQYdQjMJGWQTjlqDYyX2%2FlQzHvQN6AH%2FzxRCiHHhjCI6vu9MHGKZAeQKhAcP8stq5p2cORSox1DvNeG9Suh9xITykykzAojwvcqclz1qYaQ3veB%2BF%2FFJOTIe4EvWP6NXaMSrGz8Em5Uxud5tBswK%2Bi%2FjDdFSUL5vgxKH4F9u%2B8L2vuck2ZgqDmqapemNfBHU8gWSfVEceaKPOvmyHOyIGnyCjzw%2FpqIurSTsKhbM35iswPNO%2FFbpjHMMHfZjwwhV09IKnKdULUZcMriosArLpwZNTi12uPprbkzTFBA7y%2B6Q9p1i3rNqiwcMVJ5Xxk%2FOhuBv%2BHUDDW%2FPdri1W45XxMfrMNeylb8GOqUBTFqz5b7iLVnyFaG46doWy9dhAYen1LqsURTJlAhKIob1iBYvNitpbuzu0xXxfasLOO5kZMyZrtS9Tdn9SIXNPTTE7jJwjCHc9ZwNU2v9eZh5hovii7QMiyjalJu3yWdpp9k8OkZkjqKKc6KnenGNHBBcXF6n%2Bot%2FMYVb4Cn85Qx0mlqTUarYXPUPQg14cNqC8dvhQCPso0X6ySQMsFd4vBJhfenW&X-Amz-Signature=2378cc92b95c1e6bcf674e390ec5279b6b929efca91c2b4b2a510db692008c52&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZ7DC5D%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKEF4NwtXDlERVmVaz1dquOc9MB8cd5goadM7MLwJFSAiEAkO2R7gEpRttM9UPJbxaDKgtHUMMT0W54h087ObVUTP0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFaUL4GdB71FP1zznSrcA7eN5pvpDKaAZO%2BKEIShHU2JE6ikX8OiEWPp%2FWPHOX5FQD2GAiak9YadJHF3TzBveFbUHJmJKNNN7txkc2l5qTf2h3E8CYvC3tD2nJVadrlzahjDuB0EfDxN0YB3el5Urzsq47OJi3qzTScFOh5yJJpKuhQxCvxwna82OeOQ0AFH71rY7sm0vXkb3oblWxBOfvhENNKRpRHB225bRlI4iaXd4ojqlLEKDhufOblxmLSHIzozhrsIQ99gUezHr4XDROL1AXtDkm%2F7O%2FgrruS15L12Tu9vVRTZQYkIuQYdQjMJGWQTjlqDYyX2%2FlQzHvQN6AH%2FzxRCiHHhjCI6vu9MHGKZAeQKhAcP8stq5p2cORSox1DvNeG9Suh9xITykykzAojwvcqclz1qYaQ3veB%2BF%2FFJOTIe4EvWP6NXaMSrGz8Em5Uxud5tBswK%2Bi%2FjDdFSUL5vgxKH4F9u%2B8L2vuck2ZgqDmqapemNfBHU8gWSfVEceaKPOvmyHOyIGnyCjzw%2FpqIurSTsKhbM35iswPNO%2FFbpjHMMHfZjwwhV09IKnKdULUZcMriosArLpwZNTi12uPprbkzTFBA7y%2B6Q9p1i3rNqiwcMVJ5Xxk%2FOhuBv%2BHUDDW%2FPdri1W45XxMfrMNeylb8GOqUBTFqz5b7iLVnyFaG46doWy9dhAYen1LqsURTJlAhKIob1iBYvNitpbuzu0xXxfasLOO5kZMyZrtS9Tdn9SIXNPTTE7jJwjCHc9ZwNU2v9eZh5hovii7QMiyjalJu3yWdpp9k8OkZkjqKKc6KnenGNHBBcXF6n%2Bot%2FMYVb4Cn85Qx0mlqTUarYXPUPQg14cNqC8dvhQCPso0X6ySQMsFd4vBJhfenW&X-Amz-Signature=e880e203c28b22014c246cb7f2cb6454d4f0a52d18f012c4aa6c36e63fead5f2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZ7DC5D%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKEF4NwtXDlERVmVaz1dquOc9MB8cd5goadM7MLwJFSAiEAkO2R7gEpRttM9UPJbxaDKgtHUMMT0W54h087ObVUTP0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFaUL4GdB71FP1zznSrcA7eN5pvpDKaAZO%2BKEIShHU2JE6ikX8OiEWPp%2FWPHOX5FQD2GAiak9YadJHF3TzBveFbUHJmJKNNN7txkc2l5qTf2h3E8CYvC3tD2nJVadrlzahjDuB0EfDxN0YB3el5Urzsq47OJi3qzTScFOh5yJJpKuhQxCvxwna82OeOQ0AFH71rY7sm0vXkb3oblWxBOfvhENNKRpRHB225bRlI4iaXd4ojqlLEKDhufOblxmLSHIzozhrsIQ99gUezHr4XDROL1AXtDkm%2F7O%2FgrruS15L12Tu9vVRTZQYkIuQYdQjMJGWQTjlqDYyX2%2FlQzHvQN6AH%2FzxRCiHHhjCI6vu9MHGKZAeQKhAcP8stq5p2cORSox1DvNeG9Suh9xITykykzAojwvcqclz1qYaQ3veB%2BF%2FFJOTIe4EvWP6NXaMSrGz8Em5Uxud5tBswK%2Bi%2FjDdFSUL5vgxKH4F9u%2B8L2vuck2ZgqDmqapemNfBHU8gWSfVEceaKPOvmyHOyIGnyCjzw%2FpqIurSTsKhbM35iswPNO%2FFbpjHMMHfZjwwhV09IKnKdULUZcMriosArLpwZNTi12uPprbkzTFBA7y%2B6Q9p1i3rNqiwcMVJ5Xxk%2FOhuBv%2BHUDDW%2FPdri1W45XxMfrMNeylb8GOqUBTFqz5b7iLVnyFaG46doWy9dhAYen1LqsURTJlAhKIob1iBYvNitpbuzu0xXxfasLOO5kZMyZrtS9Tdn9SIXNPTTE7jJwjCHc9ZwNU2v9eZh5hovii7QMiyjalJu3yWdpp9k8OkZkjqKKc6KnenGNHBBcXF6n%2Bot%2FMYVb4Cn85Qx0mlqTUarYXPUPQg14cNqC8dvhQCPso0X6ySQMsFd4vBJhfenW&X-Amz-Signature=f09d98f487cfc92c5c2c446c977d6cecb23230ea14d1328f624deadbbf01f8e9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
