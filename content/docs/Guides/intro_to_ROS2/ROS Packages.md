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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WEYILU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHePhwSGVl340bDcazvMPuOL3OOb6FBvj9WGA%2FnQh3e%2BAiAUYTVMsdEiKMBAIzcETR8NchNiJlXyF9PYQwk%2B4u%2FPYCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOXWWemf27JQvQ8bzKtwDWrbYjhJpZdGEEIfcuRhIVAeagKWK4dpBoREI2cnfUnOF2jhseIWX8D0H96WE%2FM9rFMiStuvisqqSqAb7XjtAetfHgxRVEjYyTtcYNmyFgGd2S8bwkI8OuT94PHZdNwuETUUUoWTbk%2FERrWkJi%2FDuhsWTQU2xugfQavsEiGjKQENbGgC7oNbMeVZWtMFfrZ%2FGYNKXoHWB3Gc4pXq%2FO%2F0%2BICeBBk51cSxYX3WRc%2B2v4H4ZjhilpwLJ5yTGYJVI8hUcHA3w6fCnCFJsm1DKgoj08nAe%2BEyddYVI17KRKZ4Zh9CA0ArvAzivtGoOdkaWFxR3yq0GXoeBdZp87ehr%2Bl2Z3HYxL2mYoK%2BGQAzxdmXv7crq3RlXqsoVFVVarwjUfU%2B6PV9Skhi5yrzsrfTwVLu%2FHS6XOyf2Rlwi3aT2wfLK3vBsNef8VRaHT0%2FlUJQSKHxiFiIQXfWEqmddoSbWspQ4PJbm1AM1g5WXKnD5sS8YGN%2F0kug2MT13KTAxlzXXhrbWIsvn8ggn1LZMKZjzSeOjMfEmdUXHJqcSb5zcmPX7605TFSHenspOpCwuyHIZzgcG%2BaPc%2BI42jxea6g3T4MQxHt5RSmH5DBsWvjB8qween0IL96EqCxKPg06cc7Yw68awwQY6pgHUSU6iV7Sx8BMiqy2hAxlshii63DciNAF2B7sSWj3XBPht7mLzSrI%2Ffa50xYMH63ROJpVY7xamcnoAviyMSTWswIs6E7mJtLgZUNBwLiJimNxEBqOg3llDnjCqMEs4%2BNNoli6dHGKyuFSUcaBtKnFb9w6%2BiXCBicK1yguqFQ0647EOAzDBslo6bFZF9g8JP98fkT6sA6n5eQxVVs%2FOqFvkfOFB4nz7&X-Amz-Signature=11253190c0d59b2b404ab2e35cd1156ed2db0310461ea281ce7405922704b121&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WEYILU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHePhwSGVl340bDcazvMPuOL3OOb6FBvj9WGA%2FnQh3e%2BAiAUYTVMsdEiKMBAIzcETR8NchNiJlXyF9PYQwk%2B4u%2FPYCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOXWWemf27JQvQ8bzKtwDWrbYjhJpZdGEEIfcuRhIVAeagKWK4dpBoREI2cnfUnOF2jhseIWX8D0H96WE%2FM9rFMiStuvisqqSqAb7XjtAetfHgxRVEjYyTtcYNmyFgGd2S8bwkI8OuT94PHZdNwuETUUUoWTbk%2FERrWkJi%2FDuhsWTQU2xugfQavsEiGjKQENbGgC7oNbMeVZWtMFfrZ%2FGYNKXoHWB3Gc4pXq%2FO%2F0%2BICeBBk51cSxYX3WRc%2B2v4H4ZjhilpwLJ5yTGYJVI8hUcHA3w6fCnCFJsm1DKgoj08nAe%2BEyddYVI17KRKZ4Zh9CA0ArvAzivtGoOdkaWFxR3yq0GXoeBdZp87ehr%2Bl2Z3HYxL2mYoK%2BGQAzxdmXv7crq3RlXqsoVFVVarwjUfU%2B6PV9Skhi5yrzsrfTwVLu%2FHS6XOyf2Rlwi3aT2wfLK3vBsNef8VRaHT0%2FlUJQSKHxiFiIQXfWEqmddoSbWspQ4PJbm1AM1g5WXKnD5sS8YGN%2F0kug2MT13KTAxlzXXhrbWIsvn8ggn1LZMKZjzSeOjMfEmdUXHJqcSb5zcmPX7605TFSHenspOpCwuyHIZzgcG%2BaPc%2BI42jxea6g3T4MQxHt5RSmH5DBsWvjB8qween0IL96EqCxKPg06cc7Yw68awwQY6pgHUSU6iV7Sx8BMiqy2hAxlshii63DciNAF2B7sSWj3XBPht7mLzSrI%2Ffa50xYMH63ROJpVY7xamcnoAviyMSTWswIs6E7mJtLgZUNBwLiJimNxEBqOg3llDnjCqMEs4%2BNNoli6dHGKyuFSUcaBtKnFb9w6%2BiXCBicK1yguqFQ0647EOAzDBslo6bFZF9g8JP98fkT6sA6n5eQxVVs%2FOqFvkfOFB4nz7&X-Amz-Signature=394b75354247d38498b34f27c61862be911636c566b0f2ab871fe51d5eb1d5ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WEYILU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHePhwSGVl340bDcazvMPuOL3OOb6FBvj9WGA%2FnQh3e%2BAiAUYTVMsdEiKMBAIzcETR8NchNiJlXyF9PYQwk%2B4u%2FPYCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOXWWemf27JQvQ8bzKtwDWrbYjhJpZdGEEIfcuRhIVAeagKWK4dpBoREI2cnfUnOF2jhseIWX8D0H96WE%2FM9rFMiStuvisqqSqAb7XjtAetfHgxRVEjYyTtcYNmyFgGd2S8bwkI8OuT94PHZdNwuETUUUoWTbk%2FERrWkJi%2FDuhsWTQU2xugfQavsEiGjKQENbGgC7oNbMeVZWtMFfrZ%2FGYNKXoHWB3Gc4pXq%2FO%2F0%2BICeBBk51cSxYX3WRc%2B2v4H4ZjhilpwLJ5yTGYJVI8hUcHA3w6fCnCFJsm1DKgoj08nAe%2BEyddYVI17KRKZ4Zh9CA0ArvAzivtGoOdkaWFxR3yq0GXoeBdZp87ehr%2Bl2Z3HYxL2mYoK%2BGQAzxdmXv7crq3RlXqsoVFVVarwjUfU%2B6PV9Skhi5yrzsrfTwVLu%2FHS6XOyf2Rlwi3aT2wfLK3vBsNef8VRaHT0%2FlUJQSKHxiFiIQXfWEqmddoSbWspQ4PJbm1AM1g5WXKnD5sS8YGN%2F0kug2MT13KTAxlzXXhrbWIsvn8ggn1LZMKZjzSeOjMfEmdUXHJqcSb5zcmPX7605TFSHenspOpCwuyHIZzgcG%2BaPc%2BI42jxea6g3T4MQxHt5RSmH5DBsWvjB8qween0IL96EqCxKPg06cc7Yw68awwQY6pgHUSU6iV7Sx8BMiqy2hAxlshii63DciNAF2B7sSWj3XBPht7mLzSrI%2Ffa50xYMH63ROJpVY7xamcnoAviyMSTWswIs6E7mJtLgZUNBwLiJimNxEBqOg3llDnjCqMEs4%2BNNoli6dHGKyuFSUcaBtKnFb9w6%2BiXCBicK1yguqFQ0647EOAzDBslo6bFZF9g8JP98fkT6sA6n5eQxVVs%2FOqFvkfOFB4nz7&X-Amz-Signature=3be48ae1a477cffa2e4c9c49f713c855ce565e3d6d974eb51b8db19e1c5bdbd6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WEYILU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHePhwSGVl340bDcazvMPuOL3OOb6FBvj9WGA%2FnQh3e%2BAiAUYTVMsdEiKMBAIzcETR8NchNiJlXyF9PYQwk%2B4u%2FPYCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOXWWemf27JQvQ8bzKtwDWrbYjhJpZdGEEIfcuRhIVAeagKWK4dpBoREI2cnfUnOF2jhseIWX8D0H96WE%2FM9rFMiStuvisqqSqAb7XjtAetfHgxRVEjYyTtcYNmyFgGd2S8bwkI8OuT94PHZdNwuETUUUoWTbk%2FERrWkJi%2FDuhsWTQU2xugfQavsEiGjKQENbGgC7oNbMeVZWtMFfrZ%2FGYNKXoHWB3Gc4pXq%2FO%2F0%2BICeBBk51cSxYX3WRc%2B2v4H4ZjhilpwLJ5yTGYJVI8hUcHA3w6fCnCFJsm1DKgoj08nAe%2BEyddYVI17KRKZ4Zh9CA0ArvAzivtGoOdkaWFxR3yq0GXoeBdZp87ehr%2Bl2Z3HYxL2mYoK%2BGQAzxdmXv7crq3RlXqsoVFVVarwjUfU%2B6PV9Skhi5yrzsrfTwVLu%2FHS6XOyf2Rlwi3aT2wfLK3vBsNef8VRaHT0%2FlUJQSKHxiFiIQXfWEqmddoSbWspQ4PJbm1AM1g5WXKnD5sS8YGN%2F0kug2MT13KTAxlzXXhrbWIsvn8ggn1LZMKZjzSeOjMfEmdUXHJqcSb5zcmPX7605TFSHenspOpCwuyHIZzgcG%2BaPc%2BI42jxea6g3T4MQxHt5RSmH5DBsWvjB8qween0IL96EqCxKPg06cc7Yw68awwQY6pgHUSU6iV7Sx8BMiqy2hAxlshii63DciNAF2B7sSWj3XBPht7mLzSrI%2Ffa50xYMH63ROJpVY7xamcnoAviyMSTWswIs6E7mJtLgZUNBwLiJimNxEBqOg3llDnjCqMEs4%2BNNoli6dHGKyuFSUcaBtKnFb9w6%2BiXCBicK1yguqFQ0647EOAzDBslo6bFZF9g8JP98fkT6sA6n5eQxVVs%2FOqFvkfOFB4nz7&X-Amz-Signature=24fa802a63760bf48337692103e23066fc42d19f80f30f1d9b58a228331f84fb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WEYILU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHePhwSGVl340bDcazvMPuOL3OOb6FBvj9WGA%2FnQh3e%2BAiAUYTVMsdEiKMBAIzcETR8NchNiJlXyF9PYQwk%2B4u%2FPYCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOXWWemf27JQvQ8bzKtwDWrbYjhJpZdGEEIfcuRhIVAeagKWK4dpBoREI2cnfUnOF2jhseIWX8D0H96WE%2FM9rFMiStuvisqqSqAb7XjtAetfHgxRVEjYyTtcYNmyFgGd2S8bwkI8OuT94PHZdNwuETUUUoWTbk%2FERrWkJi%2FDuhsWTQU2xugfQavsEiGjKQENbGgC7oNbMeVZWtMFfrZ%2FGYNKXoHWB3Gc4pXq%2FO%2F0%2BICeBBk51cSxYX3WRc%2B2v4H4ZjhilpwLJ5yTGYJVI8hUcHA3w6fCnCFJsm1DKgoj08nAe%2BEyddYVI17KRKZ4Zh9CA0ArvAzivtGoOdkaWFxR3yq0GXoeBdZp87ehr%2Bl2Z3HYxL2mYoK%2BGQAzxdmXv7crq3RlXqsoVFVVarwjUfU%2B6PV9Skhi5yrzsrfTwVLu%2FHS6XOyf2Rlwi3aT2wfLK3vBsNef8VRaHT0%2FlUJQSKHxiFiIQXfWEqmddoSbWspQ4PJbm1AM1g5WXKnD5sS8YGN%2F0kug2MT13KTAxlzXXhrbWIsvn8ggn1LZMKZjzSeOjMfEmdUXHJqcSb5zcmPX7605TFSHenspOpCwuyHIZzgcG%2BaPc%2BI42jxea6g3T4MQxHt5RSmH5DBsWvjB8qween0IL96EqCxKPg06cc7Yw68awwQY6pgHUSU6iV7Sx8BMiqy2hAxlshii63DciNAF2B7sSWj3XBPht7mLzSrI%2Ffa50xYMH63ROJpVY7xamcnoAviyMSTWswIs6E7mJtLgZUNBwLiJimNxEBqOg3llDnjCqMEs4%2BNNoli6dHGKyuFSUcaBtKnFb9w6%2BiXCBicK1yguqFQ0647EOAzDBslo6bFZF9g8JP98fkT6sA6n5eQxVVs%2FOqFvkfOFB4nz7&X-Amz-Signature=fa2910487e6a41f99f7d5f4f6d2313fd5b924cba3e556718106d4cd6304b1041&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WEYILU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHePhwSGVl340bDcazvMPuOL3OOb6FBvj9WGA%2FnQh3e%2BAiAUYTVMsdEiKMBAIzcETR8NchNiJlXyF9PYQwk%2B4u%2FPYCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOXWWemf27JQvQ8bzKtwDWrbYjhJpZdGEEIfcuRhIVAeagKWK4dpBoREI2cnfUnOF2jhseIWX8D0H96WE%2FM9rFMiStuvisqqSqAb7XjtAetfHgxRVEjYyTtcYNmyFgGd2S8bwkI8OuT94PHZdNwuETUUUoWTbk%2FERrWkJi%2FDuhsWTQU2xugfQavsEiGjKQENbGgC7oNbMeVZWtMFfrZ%2FGYNKXoHWB3Gc4pXq%2FO%2F0%2BICeBBk51cSxYX3WRc%2B2v4H4ZjhilpwLJ5yTGYJVI8hUcHA3w6fCnCFJsm1DKgoj08nAe%2BEyddYVI17KRKZ4Zh9CA0ArvAzivtGoOdkaWFxR3yq0GXoeBdZp87ehr%2Bl2Z3HYxL2mYoK%2BGQAzxdmXv7crq3RlXqsoVFVVarwjUfU%2B6PV9Skhi5yrzsrfTwVLu%2FHS6XOyf2Rlwi3aT2wfLK3vBsNef8VRaHT0%2FlUJQSKHxiFiIQXfWEqmddoSbWspQ4PJbm1AM1g5WXKnD5sS8YGN%2F0kug2MT13KTAxlzXXhrbWIsvn8ggn1LZMKZjzSeOjMfEmdUXHJqcSb5zcmPX7605TFSHenspOpCwuyHIZzgcG%2BaPc%2BI42jxea6g3T4MQxHt5RSmH5DBsWvjB8qween0IL96EqCxKPg06cc7Yw68awwQY6pgHUSU6iV7Sx8BMiqy2hAxlshii63DciNAF2B7sSWj3XBPht7mLzSrI%2Ffa50xYMH63ROJpVY7xamcnoAviyMSTWswIs6E7mJtLgZUNBwLiJimNxEBqOg3llDnjCqMEs4%2BNNoli6dHGKyuFSUcaBtKnFb9w6%2BiXCBicK1yguqFQ0647EOAzDBslo6bFZF9g8JP98fkT6sA6n5eQxVVs%2FOqFvkfOFB4nz7&X-Amz-Signature=c4403aba4cda3c66794f67200cad94015f987422bab521f26788081d09fa2b42&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WEYILU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHePhwSGVl340bDcazvMPuOL3OOb6FBvj9WGA%2FnQh3e%2BAiAUYTVMsdEiKMBAIzcETR8NchNiJlXyF9PYQwk%2B4u%2FPYCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOXWWemf27JQvQ8bzKtwDWrbYjhJpZdGEEIfcuRhIVAeagKWK4dpBoREI2cnfUnOF2jhseIWX8D0H96WE%2FM9rFMiStuvisqqSqAb7XjtAetfHgxRVEjYyTtcYNmyFgGd2S8bwkI8OuT94PHZdNwuETUUUoWTbk%2FERrWkJi%2FDuhsWTQU2xugfQavsEiGjKQENbGgC7oNbMeVZWtMFfrZ%2FGYNKXoHWB3Gc4pXq%2FO%2F0%2BICeBBk51cSxYX3WRc%2B2v4H4ZjhilpwLJ5yTGYJVI8hUcHA3w6fCnCFJsm1DKgoj08nAe%2BEyddYVI17KRKZ4Zh9CA0ArvAzivtGoOdkaWFxR3yq0GXoeBdZp87ehr%2Bl2Z3HYxL2mYoK%2BGQAzxdmXv7crq3RlXqsoVFVVarwjUfU%2B6PV9Skhi5yrzsrfTwVLu%2FHS6XOyf2Rlwi3aT2wfLK3vBsNef8VRaHT0%2FlUJQSKHxiFiIQXfWEqmddoSbWspQ4PJbm1AM1g5WXKnD5sS8YGN%2F0kug2MT13KTAxlzXXhrbWIsvn8ggn1LZMKZjzSeOjMfEmdUXHJqcSb5zcmPX7605TFSHenspOpCwuyHIZzgcG%2BaPc%2BI42jxea6g3T4MQxHt5RSmH5DBsWvjB8qween0IL96EqCxKPg06cc7Yw68awwQY6pgHUSU6iV7Sx8BMiqy2hAxlshii63DciNAF2B7sSWj3XBPht7mLzSrI%2Ffa50xYMH63ROJpVY7xamcnoAviyMSTWswIs6E7mJtLgZUNBwLiJimNxEBqOg3llDnjCqMEs4%2BNNoli6dHGKyuFSUcaBtKnFb9w6%2BiXCBicK1yguqFQ0647EOAzDBslo6bFZF9g8JP98fkT6sA6n5eQxVVs%2FOqFvkfOFB4nz7&X-Amz-Signature=5d034289b1950c9538a5639d9d792bd6f3864594e23051bc7f1cbceb92bdf1c6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
