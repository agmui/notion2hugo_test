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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CPYKAS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV09xAXSYJMJ95Bq46tj5po3QGvygvEPPasdQGV8UY4AiBDV1Tl8079T%2FRt2Hu7HX6%2Fpl2Tfjm%2FHcu00MVsSaDdGiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMPxSajmOg6X9r6TXKtwDYsLcYntbxA8EGTQPZ%2F9Go1DLvvxCjQfJ9pAKdMS7nR8UmPTgdvCEpwYxO21rj9Pqy1MnooD0hyaejMMBqgnfLhN6Lc%2Bzevh9t61Ag%2BH%2F88LIoK1Z08BCDN0SHWXD4sKe9JiyEhGZEj1ZbeBeCCJ4EQQhei8FXx7me7XeQq48HPSOUeoKooObutdbUO%2B9rZTrrN3Tz9DskX3t%2FRTq5RPga2p%2ByDOUKt1yaENhcMJd9rMGThy%2Bxstk6p%2FUtyqtbBzLN6eH1zGj81YaorcLeczIjSDCY5kz%2FMzZ%2FpeYcEMcuFW74RD%2BgeRnKQNAzEDqjpnETelTO2ui4CfLRBa0SSU%2FixSfJ9IWi0spxZa5aJxgxL%2FH4qNgLmZE6VW30h68UOQa5c1hU1xzEIb6yICbhC3XhkBr9gsAPtKvoYJRvjXEQCTK8FRw8rQM91%2FkZf3S7UwMDReisBzDa%2BLqD5abhm5%2F%2Fr6A5860YRWYskKYG7lRSQsakm3m17TdppPuAOyn8qM1Lcs71SchPptMVtl8eeS4K7EI8GLC5c%2F02J9dgBJ1LeUrd2kQJ%2Fey%2B0dr0y3Pw9wn3aX17GWqpmblD8tUa6TT6zw1195oP2OdgNKCTZ%2BaW5bXJwZR%2BUplAzujyjcwvo%2F8wAY6pgGyyB8Taof95H7KFZ38viB3ZLuInf5oq8KLuB9ld7uia8pAR8%2F1hU17Dm2jMK%2FGCF9BmbBlRRRuncSJtGlQJPxIOdFwlLV7my6Nvc%2BDBavi9KiJkHN25UYoCEHx7GSR9qdNWUtvqTTK5EyVhBM1OT2oOSKWy4EgKpYFck0EoRz9kFcOfmbsth43Ry%2BG4iTGoMctiWEafpt4siqrOzW4cvhon2fZ8XO0&X-Amz-Signature=6eee61f664aedd4033e3612efe5e4929e7d111ce0546a58c137c0c84d166226c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CPYKAS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV09xAXSYJMJ95Bq46tj5po3QGvygvEPPasdQGV8UY4AiBDV1Tl8079T%2FRt2Hu7HX6%2Fpl2Tfjm%2FHcu00MVsSaDdGiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMPxSajmOg6X9r6TXKtwDYsLcYntbxA8EGTQPZ%2F9Go1DLvvxCjQfJ9pAKdMS7nR8UmPTgdvCEpwYxO21rj9Pqy1MnooD0hyaejMMBqgnfLhN6Lc%2Bzevh9t61Ag%2BH%2F88LIoK1Z08BCDN0SHWXD4sKe9JiyEhGZEj1ZbeBeCCJ4EQQhei8FXx7me7XeQq48HPSOUeoKooObutdbUO%2B9rZTrrN3Tz9DskX3t%2FRTq5RPga2p%2ByDOUKt1yaENhcMJd9rMGThy%2Bxstk6p%2FUtyqtbBzLN6eH1zGj81YaorcLeczIjSDCY5kz%2FMzZ%2FpeYcEMcuFW74RD%2BgeRnKQNAzEDqjpnETelTO2ui4CfLRBa0SSU%2FixSfJ9IWi0spxZa5aJxgxL%2FH4qNgLmZE6VW30h68UOQa5c1hU1xzEIb6yICbhC3XhkBr9gsAPtKvoYJRvjXEQCTK8FRw8rQM91%2FkZf3S7UwMDReisBzDa%2BLqD5abhm5%2F%2Fr6A5860YRWYskKYG7lRSQsakm3m17TdppPuAOyn8qM1Lcs71SchPptMVtl8eeS4K7EI8GLC5c%2F02J9dgBJ1LeUrd2kQJ%2Fey%2B0dr0y3Pw9wn3aX17GWqpmblD8tUa6TT6zw1195oP2OdgNKCTZ%2BaW5bXJwZR%2BUplAzujyjcwvo%2F8wAY6pgGyyB8Taof95H7KFZ38viB3ZLuInf5oq8KLuB9ld7uia8pAR8%2F1hU17Dm2jMK%2FGCF9BmbBlRRRuncSJtGlQJPxIOdFwlLV7my6Nvc%2BDBavi9KiJkHN25UYoCEHx7GSR9qdNWUtvqTTK5EyVhBM1OT2oOSKWy4EgKpYFck0EoRz9kFcOfmbsth43Ry%2BG4iTGoMctiWEafpt4siqrOzW4cvhon2fZ8XO0&X-Amz-Signature=908b15b777cd39772c6164ed5b6abb48d8cfd8a20c18793f8f99130bc689723c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CPYKAS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV09xAXSYJMJ95Bq46tj5po3QGvygvEPPasdQGV8UY4AiBDV1Tl8079T%2FRt2Hu7HX6%2Fpl2Tfjm%2FHcu00MVsSaDdGiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMPxSajmOg6X9r6TXKtwDYsLcYntbxA8EGTQPZ%2F9Go1DLvvxCjQfJ9pAKdMS7nR8UmPTgdvCEpwYxO21rj9Pqy1MnooD0hyaejMMBqgnfLhN6Lc%2Bzevh9t61Ag%2BH%2F88LIoK1Z08BCDN0SHWXD4sKe9JiyEhGZEj1ZbeBeCCJ4EQQhei8FXx7me7XeQq48HPSOUeoKooObutdbUO%2B9rZTrrN3Tz9DskX3t%2FRTq5RPga2p%2ByDOUKt1yaENhcMJd9rMGThy%2Bxstk6p%2FUtyqtbBzLN6eH1zGj81YaorcLeczIjSDCY5kz%2FMzZ%2FpeYcEMcuFW74RD%2BgeRnKQNAzEDqjpnETelTO2ui4CfLRBa0SSU%2FixSfJ9IWi0spxZa5aJxgxL%2FH4qNgLmZE6VW30h68UOQa5c1hU1xzEIb6yICbhC3XhkBr9gsAPtKvoYJRvjXEQCTK8FRw8rQM91%2FkZf3S7UwMDReisBzDa%2BLqD5abhm5%2F%2Fr6A5860YRWYskKYG7lRSQsakm3m17TdppPuAOyn8qM1Lcs71SchPptMVtl8eeS4K7EI8GLC5c%2F02J9dgBJ1LeUrd2kQJ%2Fey%2B0dr0y3Pw9wn3aX17GWqpmblD8tUa6TT6zw1195oP2OdgNKCTZ%2BaW5bXJwZR%2BUplAzujyjcwvo%2F8wAY6pgGyyB8Taof95H7KFZ38viB3ZLuInf5oq8KLuB9ld7uia8pAR8%2F1hU17Dm2jMK%2FGCF9BmbBlRRRuncSJtGlQJPxIOdFwlLV7my6Nvc%2BDBavi9KiJkHN25UYoCEHx7GSR9qdNWUtvqTTK5EyVhBM1OT2oOSKWy4EgKpYFck0EoRz9kFcOfmbsth43Ry%2BG4iTGoMctiWEafpt4siqrOzW4cvhon2fZ8XO0&X-Amz-Signature=4715ae910dd0224b69ba59ea15bda55c6ac5505e5589e4fe72275084af9e2a74&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CPYKAS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV09xAXSYJMJ95Bq46tj5po3QGvygvEPPasdQGV8UY4AiBDV1Tl8079T%2FRt2Hu7HX6%2Fpl2Tfjm%2FHcu00MVsSaDdGiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMPxSajmOg6X9r6TXKtwDYsLcYntbxA8EGTQPZ%2F9Go1DLvvxCjQfJ9pAKdMS7nR8UmPTgdvCEpwYxO21rj9Pqy1MnooD0hyaejMMBqgnfLhN6Lc%2Bzevh9t61Ag%2BH%2F88LIoK1Z08BCDN0SHWXD4sKe9JiyEhGZEj1ZbeBeCCJ4EQQhei8FXx7me7XeQq48HPSOUeoKooObutdbUO%2B9rZTrrN3Tz9DskX3t%2FRTq5RPga2p%2ByDOUKt1yaENhcMJd9rMGThy%2Bxstk6p%2FUtyqtbBzLN6eH1zGj81YaorcLeczIjSDCY5kz%2FMzZ%2FpeYcEMcuFW74RD%2BgeRnKQNAzEDqjpnETelTO2ui4CfLRBa0SSU%2FixSfJ9IWi0spxZa5aJxgxL%2FH4qNgLmZE6VW30h68UOQa5c1hU1xzEIb6yICbhC3XhkBr9gsAPtKvoYJRvjXEQCTK8FRw8rQM91%2FkZf3S7UwMDReisBzDa%2BLqD5abhm5%2F%2Fr6A5860YRWYskKYG7lRSQsakm3m17TdppPuAOyn8qM1Lcs71SchPptMVtl8eeS4K7EI8GLC5c%2F02J9dgBJ1LeUrd2kQJ%2Fey%2B0dr0y3Pw9wn3aX17GWqpmblD8tUa6TT6zw1195oP2OdgNKCTZ%2BaW5bXJwZR%2BUplAzujyjcwvo%2F8wAY6pgGyyB8Taof95H7KFZ38viB3ZLuInf5oq8KLuB9ld7uia8pAR8%2F1hU17Dm2jMK%2FGCF9BmbBlRRRuncSJtGlQJPxIOdFwlLV7my6Nvc%2BDBavi9KiJkHN25UYoCEHx7GSR9qdNWUtvqTTK5EyVhBM1OT2oOSKWy4EgKpYFck0EoRz9kFcOfmbsth43Ry%2BG4iTGoMctiWEafpt4siqrOzW4cvhon2fZ8XO0&X-Amz-Signature=aec627f6b33a6e736aa6d54a19d2b8498c6fe69693e3adec6af5ceef3af4648c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CPYKAS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV09xAXSYJMJ95Bq46tj5po3QGvygvEPPasdQGV8UY4AiBDV1Tl8079T%2FRt2Hu7HX6%2Fpl2Tfjm%2FHcu00MVsSaDdGiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMPxSajmOg6X9r6TXKtwDYsLcYntbxA8EGTQPZ%2F9Go1DLvvxCjQfJ9pAKdMS7nR8UmPTgdvCEpwYxO21rj9Pqy1MnooD0hyaejMMBqgnfLhN6Lc%2Bzevh9t61Ag%2BH%2F88LIoK1Z08BCDN0SHWXD4sKe9JiyEhGZEj1ZbeBeCCJ4EQQhei8FXx7me7XeQq48HPSOUeoKooObutdbUO%2B9rZTrrN3Tz9DskX3t%2FRTq5RPga2p%2ByDOUKt1yaENhcMJd9rMGThy%2Bxstk6p%2FUtyqtbBzLN6eH1zGj81YaorcLeczIjSDCY5kz%2FMzZ%2FpeYcEMcuFW74RD%2BgeRnKQNAzEDqjpnETelTO2ui4CfLRBa0SSU%2FixSfJ9IWi0spxZa5aJxgxL%2FH4qNgLmZE6VW30h68UOQa5c1hU1xzEIb6yICbhC3XhkBr9gsAPtKvoYJRvjXEQCTK8FRw8rQM91%2FkZf3S7UwMDReisBzDa%2BLqD5abhm5%2F%2Fr6A5860YRWYskKYG7lRSQsakm3m17TdppPuAOyn8qM1Lcs71SchPptMVtl8eeS4K7EI8GLC5c%2F02J9dgBJ1LeUrd2kQJ%2Fey%2B0dr0y3Pw9wn3aX17GWqpmblD8tUa6TT6zw1195oP2OdgNKCTZ%2BaW5bXJwZR%2BUplAzujyjcwvo%2F8wAY6pgGyyB8Taof95H7KFZ38viB3ZLuInf5oq8KLuB9ld7uia8pAR8%2F1hU17Dm2jMK%2FGCF9BmbBlRRRuncSJtGlQJPxIOdFwlLV7my6Nvc%2BDBavi9KiJkHN25UYoCEHx7GSR9qdNWUtvqTTK5EyVhBM1OT2oOSKWy4EgKpYFck0EoRz9kFcOfmbsth43Ry%2BG4iTGoMctiWEafpt4siqrOzW4cvhon2fZ8XO0&X-Amz-Signature=0bdc6d6bf6f0d86fdc557c22732c0a4c4b87d8650f148f1b2ef7eb24a0ba2a83&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CPYKAS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV09xAXSYJMJ95Bq46tj5po3QGvygvEPPasdQGV8UY4AiBDV1Tl8079T%2FRt2Hu7HX6%2Fpl2Tfjm%2FHcu00MVsSaDdGiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMPxSajmOg6X9r6TXKtwDYsLcYntbxA8EGTQPZ%2F9Go1DLvvxCjQfJ9pAKdMS7nR8UmPTgdvCEpwYxO21rj9Pqy1MnooD0hyaejMMBqgnfLhN6Lc%2Bzevh9t61Ag%2BH%2F88LIoK1Z08BCDN0SHWXD4sKe9JiyEhGZEj1ZbeBeCCJ4EQQhei8FXx7me7XeQq48HPSOUeoKooObutdbUO%2B9rZTrrN3Tz9DskX3t%2FRTq5RPga2p%2ByDOUKt1yaENhcMJd9rMGThy%2Bxstk6p%2FUtyqtbBzLN6eH1zGj81YaorcLeczIjSDCY5kz%2FMzZ%2FpeYcEMcuFW74RD%2BgeRnKQNAzEDqjpnETelTO2ui4CfLRBa0SSU%2FixSfJ9IWi0spxZa5aJxgxL%2FH4qNgLmZE6VW30h68UOQa5c1hU1xzEIb6yICbhC3XhkBr9gsAPtKvoYJRvjXEQCTK8FRw8rQM91%2FkZf3S7UwMDReisBzDa%2BLqD5abhm5%2F%2Fr6A5860YRWYskKYG7lRSQsakm3m17TdppPuAOyn8qM1Lcs71SchPptMVtl8eeS4K7EI8GLC5c%2F02J9dgBJ1LeUrd2kQJ%2Fey%2B0dr0y3Pw9wn3aX17GWqpmblD8tUa6TT6zw1195oP2OdgNKCTZ%2BaW5bXJwZR%2BUplAzujyjcwvo%2F8wAY6pgGyyB8Taof95H7KFZ38viB3ZLuInf5oq8KLuB9ld7uia8pAR8%2F1hU17Dm2jMK%2FGCF9BmbBlRRRuncSJtGlQJPxIOdFwlLV7my6Nvc%2BDBavi9KiJkHN25UYoCEHx7GSR9qdNWUtvqTTK5EyVhBM1OT2oOSKWy4EgKpYFck0EoRz9kFcOfmbsth43Ry%2BG4iTGoMctiWEafpt4siqrOzW4cvhon2fZ8XO0&X-Amz-Signature=bfbd42a82534fd7f841650f1fb508649102098f6c1cfb1b36d59220d36516fee&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CPYKAS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV09xAXSYJMJ95Bq46tj5po3QGvygvEPPasdQGV8UY4AiBDV1Tl8079T%2FRt2Hu7HX6%2Fpl2Tfjm%2FHcu00MVsSaDdGiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMPxSajmOg6X9r6TXKtwDYsLcYntbxA8EGTQPZ%2F9Go1DLvvxCjQfJ9pAKdMS7nR8UmPTgdvCEpwYxO21rj9Pqy1MnooD0hyaejMMBqgnfLhN6Lc%2Bzevh9t61Ag%2BH%2F88LIoK1Z08BCDN0SHWXD4sKe9JiyEhGZEj1ZbeBeCCJ4EQQhei8FXx7me7XeQq48HPSOUeoKooObutdbUO%2B9rZTrrN3Tz9DskX3t%2FRTq5RPga2p%2ByDOUKt1yaENhcMJd9rMGThy%2Bxstk6p%2FUtyqtbBzLN6eH1zGj81YaorcLeczIjSDCY5kz%2FMzZ%2FpeYcEMcuFW74RD%2BgeRnKQNAzEDqjpnETelTO2ui4CfLRBa0SSU%2FixSfJ9IWi0spxZa5aJxgxL%2FH4qNgLmZE6VW30h68UOQa5c1hU1xzEIb6yICbhC3XhkBr9gsAPtKvoYJRvjXEQCTK8FRw8rQM91%2FkZf3S7UwMDReisBzDa%2BLqD5abhm5%2F%2Fr6A5860YRWYskKYG7lRSQsakm3m17TdppPuAOyn8qM1Lcs71SchPptMVtl8eeS4K7EI8GLC5c%2F02J9dgBJ1LeUrd2kQJ%2Fey%2B0dr0y3Pw9wn3aX17GWqpmblD8tUa6TT6zw1195oP2OdgNKCTZ%2BaW5bXJwZR%2BUplAzujyjcwvo%2F8wAY6pgGyyB8Taof95H7KFZ38viB3ZLuInf5oq8KLuB9ld7uia8pAR8%2F1hU17Dm2jMK%2FGCF9BmbBlRRRuncSJtGlQJPxIOdFwlLV7my6Nvc%2BDBavi9KiJkHN25UYoCEHx7GSR9qdNWUtvqTTK5EyVhBM1OT2oOSKWy4EgKpYFck0EoRz9kFcOfmbsth43Ry%2BG4iTGoMctiWEafpt4siqrOzW4cvhon2fZ8XO0&X-Amz-Signature=697e9a9d3c2bcf6c270b0b89cff9af8d3c8083d612dc0f0c55f53d9adb5a2522&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
