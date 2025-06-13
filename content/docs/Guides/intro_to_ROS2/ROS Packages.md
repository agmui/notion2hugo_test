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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S53J4CR%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD20DI7T%2BMmBvfWED62gMn9n9g4O%2FY6re8%2B7l5QGk8%2F4wIhAJzlqqjae4imrrYo%2FG4Oa3EA9BZSBVzWD63jPwKjs9RFKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxW%2FglXJlyex59QMIq3APKK0rFL4s6qYGYy2g3xQEyTZ7mYq0J%2FJxY%2FOqqDDY714n5sFEuVH%2Btir65MS7krXkAGK%2B83hS%2BFFKjcjz6B3UvcVeRKFOCwTlnFfoo%2FGRnVhy4SBTy5UKtKCBgiXmvzyZmJrZZ%2FlAiWvREM8UE571dqPAaBP%2FGErZa76ijHnrIfslyCVxBLU3UcPuprd%2BnLcw%2FXI4roOmel5PtWq%2F5du3L6TbrOCj3V%2FqSdDASaJayooq%2Bm9BrxPBXlxj%2F%2FBsca7HNiLMujfs1CjyvC07toDx5I1kh2YGYpNNPwVatQ0n6bZKPK9lHAMKHlw%2Fnf2RAotWad7pj8xLCDmpwMCN4OD9s80aJpGeoY%2F8zGcygTp7wITabRJmnP6Aq63UGxdAywf1G4Yp9l%2Btoxcazu6c9A1qKtLvmkS5mL25KZ%2F1hducIWxMsJxO8SqqzUkgzGBbK87nwk1xpJIfFMVAJt0c2dNbXoRcoJHOk%2FmAndxQ07CgQQvLWxYIydmTYZmKOPB7b0w3Bfzikb7CagAhiDSFdR10hxtXtd3LIkw2uTz%2FdGcJbUAgIcTAgzPRuBGcabTc4PUrN8AILal%2BlWByYCepipdK47FZg5hY%2BeF4%2B5FnkUk7aasdghYpGMXxtEJMu2jDM167CBjqkAX%2Fc3Ok3I5AwJE6V0oqqGQ6bnBdZE%2F1NM27QD2oq62vZU8ZD2fzfiJVAkn1IK62uk6Fu15I7sW1BByfqChpYKcKei7ck6EHVnmFlqG45KfPZV1XzOOQ25ZlaQY4wjx9O9a%2BLIeOUEua6sO%2BaaCo2GJfO182emUnFEiZsFPPozzgHHUBmK%2BSAD4%2FYCxfgY8GD%2BSnu%2FI0v6wO0%2FSibEgwGRtW7FQkL&X-Amz-Signature=11848730b8c9574702b3c7a0a66cefc279869d8e614f9a154cb4390ac0581eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S53J4CR%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD20DI7T%2BMmBvfWED62gMn9n9g4O%2FY6re8%2B7l5QGk8%2F4wIhAJzlqqjae4imrrYo%2FG4Oa3EA9BZSBVzWD63jPwKjs9RFKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxW%2FglXJlyex59QMIq3APKK0rFL4s6qYGYy2g3xQEyTZ7mYq0J%2FJxY%2FOqqDDY714n5sFEuVH%2Btir65MS7krXkAGK%2B83hS%2BFFKjcjz6B3UvcVeRKFOCwTlnFfoo%2FGRnVhy4SBTy5UKtKCBgiXmvzyZmJrZZ%2FlAiWvREM8UE571dqPAaBP%2FGErZa76ijHnrIfslyCVxBLU3UcPuprd%2BnLcw%2FXI4roOmel5PtWq%2F5du3L6TbrOCj3V%2FqSdDASaJayooq%2Bm9BrxPBXlxj%2F%2FBsca7HNiLMujfs1CjyvC07toDx5I1kh2YGYpNNPwVatQ0n6bZKPK9lHAMKHlw%2Fnf2RAotWad7pj8xLCDmpwMCN4OD9s80aJpGeoY%2F8zGcygTp7wITabRJmnP6Aq63UGxdAywf1G4Yp9l%2Btoxcazu6c9A1qKtLvmkS5mL25KZ%2F1hducIWxMsJxO8SqqzUkgzGBbK87nwk1xpJIfFMVAJt0c2dNbXoRcoJHOk%2FmAndxQ07CgQQvLWxYIydmTYZmKOPB7b0w3Bfzikb7CagAhiDSFdR10hxtXtd3LIkw2uTz%2FdGcJbUAgIcTAgzPRuBGcabTc4PUrN8AILal%2BlWByYCepipdK47FZg5hY%2BeF4%2B5FnkUk7aasdghYpGMXxtEJMu2jDM167CBjqkAX%2Fc3Ok3I5AwJE6V0oqqGQ6bnBdZE%2F1NM27QD2oq62vZU8ZD2fzfiJVAkn1IK62uk6Fu15I7sW1BByfqChpYKcKei7ck6EHVnmFlqG45KfPZV1XzOOQ25ZlaQY4wjx9O9a%2BLIeOUEua6sO%2BaaCo2GJfO182emUnFEiZsFPPozzgHHUBmK%2BSAD4%2FYCxfgY8GD%2BSnu%2FI0v6wO0%2FSibEgwGRtW7FQkL&X-Amz-Signature=f4d304e499b098e6bf26670fee200b678279228bc4a9a3289d3a13c8ceccf915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S53J4CR%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD20DI7T%2BMmBvfWED62gMn9n9g4O%2FY6re8%2B7l5QGk8%2F4wIhAJzlqqjae4imrrYo%2FG4Oa3EA9BZSBVzWD63jPwKjs9RFKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxW%2FglXJlyex59QMIq3APKK0rFL4s6qYGYy2g3xQEyTZ7mYq0J%2FJxY%2FOqqDDY714n5sFEuVH%2Btir65MS7krXkAGK%2B83hS%2BFFKjcjz6B3UvcVeRKFOCwTlnFfoo%2FGRnVhy4SBTy5UKtKCBgiXmvzyZmJrZZ%2FlAiWvREM8UE571dqPAaBP%2FGErZa76ijHnrIfslyCVxBLU3UcPuprd%2BnLcw%2FXI4roOmel5PtWq%2F5du3L6TbrOCj3V%2FqSdDASaJayooq%2Bm9BrxPBXlxj%2F%2FBsca7HNiLMujfs1CjyvC07toDx5I1kh2YGYpNNPwVatQ0n6bZKPK9lHAMKHlw%2Fnf2RAotWad7pj8xLCDmpwMCN4OD9s80aJpGeoY%2F8zGcygTp7wITabRJmnP6Aq63UGxdAywf1G4Yp9l%2Btoxcazu6c9A1qKtLvmkS5mL25KZ%2F1hducIWxMsJxO8SqqzUkgzGBbK87nwk1xpJIfFMVAJt0c2dNbXoRcoJHOk%2FmAndxQ07CgQQvLWxYIydmTYZmKOPB7b0w3Bfzikb7CagAhiDSFdR10hxtXtd3LIkw2uTz%2FdGcJbUAgIcTAgzPRuBGcabTc4PUrN8AILal%2BlWByYCepipdK47FZg5hY%2BeF4%2B5FnkUk7aasdghYpGMXxtEJMu2jDM167CBjqkAX%2Fc3Ok3I5AwJE6V0oqqGQ6bnBdZE%2F1NM27QD2oq62vZU8ZD2fzfiJVAkn1IK62uk6Fu15I7sW1BByfqChpYKcKei7ck6EHVnmFlqG45KfPZV1XzOOQ25ZlaQY4wjx9O9a%2BLIeOUEua6sO%2BaaCo2GJfO182emUnFEiZsFPPozzgHHUBmK%2BSAD4%2FYCxfgY8GD%2BSnu%2FI0v6wO0%2FSibEgwGRtW7FQkL&X-Amz-Signature=b4ecd46d255d13e55742740c9e4faca8189e5d8288977f01821bb78616526d18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S53J4CR%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD20DI7T%2BMmBvfWED62gMn9n9g4O%2FY6re8%2B7l5QGk8%2F4wIhAJzlqqjae4imrrYo%2FG4Oa3EA9BZSBVzWD63jPwKjs9RFKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxW%2FglXJlyex59QMIq3APKK0rFL4s6qYGYy2g3xQEyTZ7mYq0J%2FJxY%2FOqqDDY714n5sFEuVH%2Btir65MS7krXkAGK%2B83hS%2BFFKjcjz6B3UvcVeRKFOCwTlnFfoo%2FGRnVhy4SBTy5UKtKCBgiXmvzyZmJrZZ%2FlAiWvREM8UE571dqPAaBP%2FGErZa76ijHnrIfslyCVxBLU3UcPuprd%2BnLcw%2FXI4roOmel5PtWq%2F5du3L6TbrOCj3V%2FqSdDASaJayooq%2Bm9BrxPBXlxj%2F%2FBsca7HNiLMujfs1CjyvC07toDx5I1kh2YGYpNNPwVatQ0n6bZKPK9lHAMKHlw%2Fnf2RAotWad7pj8xLCDmpwMCN4OD9s80aJpGeoY%2F8zGcygTp7wITabRJmnP6Aq63UGxdAywf1G4Yp9l%2Btoxcazu6c9A1qKtLvmkS5mL25KZ%2F1hducIWxMsJxO8SqqzUkgzGBbK87nwk1xpJIfFMVAJt0c2dNbXoRcoJHOk%2FmAndxQ07CgQQvLWxYIydmTYZmKOPB7b0w3Bfzikb7CagAhiDSFdR10hxtXtd3LIkw2uTz%2FdGcJbUAgIcTAgzPRuBGcabTc4PUrN8AILal%2BlWByYCepipdK47FZg5hY%2BeF4%2B5FnkUk7aasdghYpGMXxtEJMu2jDM167CBjqkAX%2Fc3Ok3I5AwJE6V0oqqGQ6bnBdZE%2F1NM27QD2oq62vZU8ZD2fzfiJVAkn1IK62uk6Fu15I7sW1BByfqChpYKcKei7ck6EHVnmFlqG45KfPZV1XzOOQ25ZlaQY4wjx9O9a%2BLIeOUEua6sO%2BaaCo2GJfO182emUnFEiZsFPPozzgHHUBmK%2BSAD4%2FYCxfgY8GD%2BSnu%2FI0v6wO0%2FSibEgwGRtW7FQkL&X-Amz-Signature=e33c967a5fc79ad178aa4e4bb76fc482978af3444037fd2dcfa5b363571e73ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S53J4CR%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD20DI7T%2BMmBvfWED62gMn9n9g4O%2FY6re8%2B7l5QGk8%2F4wIhAJzlqqjae4imrrYo%2FG4Oa3EA9BZSBVzWD63jPwKjs9RFKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxW%2FglXJlyex59QMIq3APKK0rFL4s6qYGYy2g3xQEyTZ7mYq0J%2FJxY%2FOqqDDY714n5sFEuVH%2Btir65MS7krXkAGK%2B83hS%2BFFKjcjz6B3UvcVeRKFOCwTlnFfoo%2FGRnVhy4SBTy5UKtKCBgiXmvzyZmJrZZ%2FlAiWvREM8UE571dqPAaBP%2FGErZa76ijHnrIfslyCVxBLU3UcPuprd%2BnLcw%2FXI4roOmel5PtWq%2F5du3L6TbrOCj3V%2FqSdDASaJayooq%2Bm9BrxPBXlxj%2F%2FBsca7HNiLMujfs1CjyvC07toDx5I1kh2YGYpNNPwVatQ0n6bZKPK9lHAMKHlw%2Fnf2RAotWad7pj8xLCDmpwMCN4OD9s80aJpGeoY%2F8zGcygTp7wITabRJmnP6Aq63UGxdAywf1G4Yp9l%2Btoxcazu6c9A1qKtLvmkS5mL25KZ%2F1hducIWxMsJxO8SqqzUkgzGBbK87nwk1xpJIfFMVAJt0c2dNbXoRcoJHOk%2FmAndxQ07CgQQvLWxYIydmTYZmKOPB7b0w3Bfzikb7CagAhiDSFdR10hxtXtd3LIkw2uTz%2FdGcJbUAgIcTAgzPRuBGcabTc4PUrN8AILal%2BlWByYCepipdK47FZg5hY%2BeF4%2B5FnkUk7aasdghYpGMXxtEJMu2jDM167CBjqkAX%2Fc3Ok3I5AwJE6V0oqqGQ6bnBdZE%2F1NM27QD2oq62vZU8ZD2fzfiJVAkn1IK62uk6Fu15I7sW1BByfqChpYKcKei7ck6EHVnmFlqG45KfPZV1XzOOQ25ZlaQY4wjx9O9a%2BLIeOUEua6sO%2BaaCo2GJfO182emUnFEiZsFPPozzgHHUBmK%2BSAD4%2FYCxfgY8GD%2BSnu%2FI0v6wO0%2FSibEgwGRtW7FQkL&X-Amz-Signature=4d2845908a9b099425f2870882e3e2303bcd626fd6fb0594bc8559f6ee5224ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S53J4CR%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD20DI7T%2BMmBvfWED62gMn9n9g4O%2FY6re8%2B7l5QGk8%2F4wIhAJzlqqjae4imrrYo%2FG4Oa3EA9BZSBVzWD63jPwKjs9RFKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxW%2FglXJlyex59QMIq3APKK0rFL4s6qYGYy2g3xQEyTZ7mYq0J%2FJxY%2FOqqDDY714n5sFEuVH%2Btir65MS7krXkAGK%2B83hS%2BFFKjcjz6B3UvcVeRKFOCwTlnFfoo%2FGRnVhy4SBTy5UKtKCBgiXmvzyZmJrZZ%2FlAiWvREM8UE571dqPAaBP%2FGErZa76ijHnrIfslyCVxBLU3UcPuprd%2BnLcw%2FXI4roOmel5PtWq%2F5du3L6TbrOCj3V%2FqSdDASaJayooq%2Bm9BrxPBXlxj%2F%2FBsca7HNiLMujfs1CjyvC07toDx5I1kh2YGYpNNPwVatQ0n6bZKPK9lHAMKHlw%2Fnf2RAotWad7pj8xLCDmpwMCN4OD9s80aJpGeoY%2F8zGcygTp7wITabRJmnP6Aq63UGxdAywf1G4Yp9l%2Btoxcazu6c9A1qKtLvmkS5mL25KZ%2F1hducIWxMsJxO8SqqzUkgzGBbK87nwk1xpJIfFMVAJt0c2dNbXoRcoJHOk%2FmAndxQ07CgQQvLWxYIydmTYZmKOPB7b0w3Bfzikb7CagAhiDSFdR10hxtXtd3LIkw2uTz%2FdGcJbUAgIcTAgzPRuBGcabTc4PUrN8AILal%2BlWByYCepipdK47FZg5hY%2BeF4%2B5FnkUk7aasdghYpGMXxtEJMu2jDM167CBjqkAX%2Fc3Ok3I5AwJE6V0oqqGQ6bnBdZE%2F1NM27QD2oq62vZU8ZD2fzfiJVAkn1IK62uk6Fu15I7sW1BByfqChpYKcKei7ck6EHVnmFlqG45KfPZV1XzOOQ25ZlaQY4wjx9O9a%2BLIeOUEua6sO%2BaaCo2GJfO182emUnFEiZsFPPozzgHHUBmK%2BSAD4%2FYCxfgY8GD%2BSnu%2FI0v6wO0%2FSibEgwGRtW7FQkL&X-Amz-Signature=f9610fb4bed59fb41e135bec22312bd3f721466a23a1b33a1b1965dede95ac9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S53J4CR%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD20DI7T%2BMmBvfWED62gMn9n9g4O%2FY6re8%2B7l5QGk8%2F4wIhAJzlqqjae4imrrYo%2FG4Oa3EA9BZSBVzWD63jPwKjs9RFKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxW%2FglXJlyex59QMIq3APKK0rFL4s6qYGYy2g3xQEyTZ7mYq0J%2FJxY%2FOqqDDY714n5sFEuVH%2Btir65MS7krXkAGK%2B83hS%2BFFKjcjz6B3UvcVeRKFOCwTlnFfoo%2FGRnVhy4SBTy5UKtKCBgiXmvzyZmJrZZ%2FlAiWvREM8UE571dqPAaBP%2FGErZa76ijHnrIfslyCVxBLU3UcPuprd%2BnLcw%2FXI4roOmel5PtWq%2F5du3L6TbrOCj3V%2FqSdDASaJayooq%2Bm9BrxPBXlxj%2F%2FBsca7HNiLMujfs1CjyvC07toDx5I1kh2YGYpNNPwVatQ0n6bZKPK9lHAMKHlw%2Fnf2RAotWad7pj8xLCDmpwMCN4OD9s80aJpGeoY%2F8zGcygTp7wITabRJmnP6Aq63UGxdAywf1G4Yp9l%2Btoxcazu6c9A1qKtLvmkS5mL25KZ%2F1hducIWxMsJxO8SqqzUkgzGBbK87nwk1xpJIfFMVAJt0c2dNbXoRcoJHOk%2FmAndxQ07CgQQvLWxYIydmTYZmKOPB7b0w3Bfzikb7CagAhiDSFdR10hxtXtd3LIkw2uTz%2FdGcJbUAgIcTAgzPRuBGcabTc4PUrN8AILal%2BlWByYCepipdK47FZg5hY%2BeF4%2B5FnkUk7aasdghYpGMXxtEJMu2jDM167CBjqkAX%2Fc3Ok3I5AwJE6V0oqqGQ6bnBdZE%2F1NM27QD2oq62vZU8ZD2fzfiJVAkn1IK62uk6Fu15I7sW1BByfqChpYKcKei7ck6EHVnmFlqG45KfPZV1XzOOQ25ZlaQY4wjx9O9a%2BLIeOUEua6sO%2BaaCo2GJfO182emUnFEiZsFPPozzgHHUBmK%2BSAD4%2FYCxfgY8GD%2BSnu%2FI0v6wO0%2FSibEgwGRtW7FQkL&X-Amz-Signature=63e5cdb101b22d49430b06350b3b325c5d4551e0d8a2d48996fc028675a06e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
