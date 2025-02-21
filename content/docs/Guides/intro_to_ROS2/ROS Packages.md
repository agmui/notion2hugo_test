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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC46NGSK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzwaMc7ZjvAKXP%2B%2B4lY6q9FtGcorg7Rv2Jf0pDRhcMICIHFxvtbAB6so5qg8c91RjNpPzJhwNKzB8b5ZGFgODGwfKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDx5Qo80mDrX%2BcCO8q3APicrn%2FmryJ1w4hyFITj%2BN5dcRnsMN5oasxOMacfAfNtRQxwf2%2BEQvBXufGacb2lDR97vBR3MARrAX3j0ylzhsTt%2BwqCUYR6QvlNtcxibTzDXuVgyqDTq0HQ8ASljGnGo9aDvs7%2B0x3Z1Gm9QtYz6GTYE%2F2QtLFv2jked3UCN5Kc2kGNPYcFn8S2iQN4AO0K8%2FiAu148QEUS1CXvzSD6qs4rF%2FLkKF5DaK%2FZO%2BnsIAcul0TYCtQtTBj0uPSaKXzXcMUhkVOoQyzWvOtRbQfkdxI9QQZsFOq%2BvM01QiYkNW1cYVwrP%2BWzJgImjUBlDyEdiGOhP77GBOgG1RPAsXsS5Kwr%2FBNkILVMFT4Uky2QPYASA5XfBEX8VQkpewmM7lCXAV2JCh9%2BjbsL94dAUAMG6jI5EafnAFVYDS%2BdQkhq8o39xJ0fGNryuwo0TJfYUMNw9iegJI9nOtUXygSNGqUXBBYZdSceb8jbHb7w4gad9DvgAuuYWvkcTOYtYuIE%2FjpMdSncsOhSxu%2BdrG7G5uoIuJuDRarWCbwRPfBTsq%2B3KALuu3GgCkSD2ZNpqFKvgBt18VdyOYU%2BYDBLbPgpXm5DRsQ6LKHxcoo1yc8FDZQFFzD9B%2B3o5oayghNm1HGuTDfveK9BjqnAZFDuM6cIYB7Y%2FYz8J3p4PCdSNlLaSIfg1QyANFXcO12Ju1cXWWYTl4ps9ObJnCOgV2ZqNY%2B0chRXTmBVOJv8uHi9zRAzMqHG9k9Nqk0FyX%2F1LpQbwqyssKg2H9X54MaLGHS2CGZsbHrsAiN2sXr7EQYfx0cRwDpC2QDoZa%2BPV7njUG%2FfvCQXrPqRduxoOkQ%2FMORFb0JilhOYDSQjDoNXN6Al0yXHTAl&X-Amz-Signature=1be260af39821e161ec916c3f1e4548ab690185725e92b4dac92983eb3269c6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC46NGSK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzwaMc7ZjvAKXP%2B%2B4lY6q9FtGcorg7Rv2Jf0pDRhcMICIHFxvtbAB6so5qg8c91RjNpPzJhwNKzB8b5ZGFgODGwfKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDx5Qo80mDrX%2BcCO8q3APicrn%2FmryJ1w4hyFITj%2BN5dcRnsMN5oasxOMacfAfNtRQxwf2%2BEQvBXufGacb2lDR97vBR3MARrAX3j0ylzhsTt%2BwqCUYR6QvlNtcxibTzDXuVgyqDTq0HQ8ASljGnGo9aDvs7%2B0x3Z1Gm9QtYz6GTYE%2F2QtLFv2jked3UCN5Kc2kGNPYcFn8S2iQN4AO0K8%2FiAu148QEUS1CXvzSD6qs4rF%2FLkKF5DaK%2FZO%2BnsIAcul0TYCtQtTBj0uPSaKXzXcMUhkVOoQyzWvOtRbQfkdxI9QQZsFOq%2BvM01QiYkNW1cYVwrP%2BWzJgImjUBlDyEdiGOhP77GBOgG1RPAsXsS5Kwr%2FBNkILVMFT4Uky2QPYASA5XfBEX8VQkpewmM7lCXAV2JCh9%2BjbsL94dAUAMG6jI5EafnAFVYDS%2BdQkhq8o39xJ0fGNryuwo0TJfYUMNw9iegJI9nOtUXygSNGqUXBBYZdSceb8jbHb7w4gad9DvgAuuYWvkcTOYtYuIE%2FjpMdSncsOhSxu%2BdrG7G5uoIuJuDRarWCbwRPfBTsq%2B3KALuu3GgCkSD2ZNpqFKvgBt18VdyOYU%2BYDBLbPgpXm5DRsQ6LKHxcoo1yc8FDZQFFzD9B%2B3o5oayghNm1HGuTDfveK9BjqnAZFDuM6cIYB7Y%2FYz8J3p4PCdSNlLaSIfg1QyANFXcO12Ju1cXWWYTl4ps9ObJnCOgV2ZqNY%2B0chRXTmBVOJv8uHi9zRAzMqHG9k9Nqk0FyX%2F1LpQbwqyssKg2H9X54MaLGHS2CGZsbHrsAiN2sXr7EQYfx0cRwDpC2QDoZa%2BPV7njUG%2FfvCQXrPqRduxoOkQ%2FMORFb0JilhOYDSQjDoNXN6Al0yXHTAl&X-Amz-Signature=0c7666d8528fe781e194b56e3c7536c2fea4d0412a50d02634c74fbc35ce5413&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC46NGSK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzwaMc7ZjvAKXP%2B%2B4lY6q9FtGcorg7Rv2Jf0pDRhcMICIHFxvtbAB6so5qg8c91RjNpPzJhwNKzB8b5ZGFgODGwfKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDx5Qo80mDrX%2BcCO8q3APicrn%2FmryJ1w4hyFITj%2BN5dcRnsMN5oasxOMacfAfNtRQxwf2%2BEQvBXufGacb2lDR97vBR3MARrAX3j0ylzhsTt%2BwqCUYR6QvlNtcxibTzDXuVgyqDTq0HQ8ASljGnGo9aDvs7%2B0x3Z1Gm9QtYz6GTYE%2F2QtLFv2jked3UCN5Kc2kGNPYcFn8S2iQN4AO0K8%2FiAu148QEUS1CXvzSD6qs4rF%2FLkKF5DaK%2FZO%2BnsIAcul0TYCtQtTBj0uPSaKXzXcMUhkVOoQyzWvOtRbQfkdxI9QQZsFOq%2BvM01QiYkNW1cYVwrP%2BWzJgImjUBlDyEdiGOhP77GBOgG1RPAsXsS5Kwr%2FBNkILVMFT4Uky2QPYASA5XfBEX8VQkpewmM7lCXAV2JCh9%2BjbsL94dAUAMG6jI5EafnAFVYDS%2BdQkhq8o39xJ0fGNryuwo0TJfYUMNw9iegJI9nOtUXygSNGqUXBBYZdSceb8jbHb7w4gad9DvgAuuYWvkcTOYtYuIE%2FjpMdSncsOhSxu%2BdrG7G5uoIuJuDRarWCbwRPfBTsq%2B3KALuu3GgCkSD2ZNpqFKvgBt18VdyOYU%2BYDBLbPgpXm5DRsQ6LKHxcoo1yc8FDZQFFzD9B%2B3o5oayghNm1HGuTDfveK9BjqnAZFDuM6cIYB7Y%2FYz8J3p4PCdSNlLaSIfg1QyANFXcO12Ju1cXWWYTl4ps9ObJnCOgV2ZqNY%2B0chRXTmBVOJv8uHi9zRAzMqHG9k9Nqk0FyX%2F1LpQbwqyssKg2H9X54MaLGHS2CGZsbHrsAiN2sXr7EQYfx0cRwDpC2QDoZa%2BPV7njUG%2FfvCQXrPqRduxoOkQ%2FMORFb0JilhOYDSQjDoNXN6Al0yXHTAl&X-Amz-Signature=908a03fab2b93d4c68311a49f5a44481c26fec57f222e2e8e229b113c1509b99&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC46NGSK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzwaMc7ZjvAKXP%2B%2B4lY6q9FtGcorg7Rv2Jf0pDRhcMICIHFxvtbAB6so5qg8c91RjNpPzJhwNKzB8b5ZGFgODGwfKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDx5Qo80mDrX%2BcCO8q3APicrn%2FmryJ1w4hyFITj%2BN5dcRnsMN5oasxOMacfAfNtRQxwf2%2BEQvBXufGacb2lDR97vBR3MARrAX3j0ylzhsTt%2BwqCUYR6QvlNtcxibTzDXuVgyqDTq0HQ8ASljGnGo9aDvs7%2B0x3Z1Gm9QtYz6GTYE%2F2QtLFv2jked3UCN5Kc2kGNPYcFn8S2iQN4AO0K8%2FiAu148QEUS1CXvzSD6qs4rF%2FLkKF5DaK%2FZO%2BnsIAcul0TYCtQtTBj0uPSaKXzXcMUhkVOoQyzWvOtRbQfkdxI9QQZsFOq%2BvM01QiYkNW1cYVwrP%2BWzJgImjUBlDyEdiGOhP77GBOgG1RPAsXsS5Kwr%2FBNkILVMFT4Uky2QPYASA5XfBEX8VQkpewmM7lCXAV2JCh9%2BjbsL94dAUAMG6jI5EafnAFVYDS%2BdQkhq8o39xJ0fGNryuwo0TJfYUMNw9iegJI9nOtUXygSNGqUXBBYZdSceb8jbHb7w4gad9DvgAuuYWvkcTOYtYuIE%2FjpMdSncsOhSxu%2BdrG7G5uoIuJuDRarWCbwRPfBTsq%2B3KALuu3GgCkSD2ZNpqFKvgBt18VdyOYU%2BYDBLbPgpXm5DRsQ6LKHxcoo1yc8FDZQFFzD9B%2B3o5oayghNm1HGuTDfveK9BjqnAZFDuM6cIYB7Y%2FYz8J3p4PCdSNlLaSIfg1QyANFXcO12Ju1cXWWYTl4ps9ObJnCOgV2ZqNY%2B0chRXTmBVOJv8uHi9zRAzMqHG9k9Nqk0FyX%2F1LpQbwqyssKg2H9X54MaLGHS2CGZsbHrsAiN2sXr7EQYfx0cRwDpC2QDoZa%2BPV7njUG%2FfvCQXrPqRduxoOkQ%2FMORFb0JilhOYDSQjDoNXN6Al0yXHTAl&X-Amz-Signature=7e0658021447a92ae0e018d24dae59cec496c40e27a61e6b51f07d8f83823bf3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC46NGSK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzwaMc7ZjvAKXP%2B%2B4lY6q9FtGcorg7Rv2Jf0pDRhcMICIHFxvtbAB6so5qg8c91RjNpPzJhwNKzB8b5ZGFgODGwfKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDx5Qo80mDrX%2BcCO8q3APicrn%2FmryJ1w4hyFITj%2BN5dcRnsMN5oasxOMacfAfNtRQxwf2%2BEQvBXufGacb2lDR97vBR3MARrAX3j0ylzhsTt%2BwqCUYR6QvlNtcxibTzDXuVgyqDTq0HQ8ASljGnGo9aDvs7%2B0x3Z1Gm9QtYz6GTYE%2F2QtLFv2jked3UCN5Kc2kGNPYcFn8S2iQN4AO0K8%2FiAu148QEUS1CXvzSD6qs4rF%2FLkKF5DaK%2FZO%2BnsIAcul0TYCtQtTBj0uPSaKXzXcMUhkVOoQyzWvOtRbQfkdxI9QQZsFOq%2BvM01QiYkNW1cYVwrP%2BWzJgImjUBlDyEdiGOhP77GBOgG1RPAsXsS5Kwr%2FBNkILVMFT4Uky2QPYASA5XfBEX8VQkpewmM7lCXAV2JCh9%2BjbsL94dAUAMG6jI5EafnAFVYDS%2BdQkhq8o39xJ0fGNryuwo0TJfYUMNw9iegJI9nOtUXygSNGqUXBBYZdSceb8jbHb7w4gad9DvgAuuYWvkcTOYtYuIE%2FjpMdSncsOhSxu%2BdrG7G5uoIuJuDRarWCbwRPfBTsq%2B3KALuu3GgCkSD2ZNpqFKvgBt18VdyOYU%2BYDBLbPgpXm5DRsQ6LKHxcoo1yc8FDZQFFzD9B%2B3o5oayghNm1HGuTDfveK9BjqnAZFDuM6cIYB7Y%2FYz8J3p4PCdSNlLaSIfg1QyANFXcO12Ju1cXWWYTl4ps9ObJnCOgV2ZqNY%2B0chRXTmBVOJv8uHi9zRAzMqHG9k9Nqk0FyX%2F1LpQbwqyssKg2H9X54MaLGHS2CGZsbHrsAiN2sXr7EQYfx0cRwDpC2QDoZa%2BPV7njUG%2FfvCQXrPqRduxoOkQ%2FMORFb0JilhOYDSQjDoNXN6Al0yXHTAl&X-Amz-Signature=e3b8e29d5871dad6e9541b569ebf6aa39b0867f899bc8f6679fa70d17c7e69f0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC46NGSK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzwaMc7ZjvAKXP%2B%2B4lY6q9FtGcorg7Rv2Jf0pDRhcMICIHFxvtbAB6so5qg8c91RjNpPzJhwNKzB8b5ZGFgODGwfKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDx5Qo80mDrX%2BcCO8q3APicrn%2FmryJ1w4hyFITj%2BN5dcRnsMN5oasxOMacfAfNtRQxwf2%2BEQvBXufGacb2lDR97vBR3MARrAX3j0ylzhsTt%2BwqCUYR6QvlNtcxibTzDXuVgyqDTq0HQ8ASljGnGo9aDvs7%2B0x3Z1Gm9QtYz6GTYE%2F2QtLFv2jked3UCN5Kc2kGNPYcFn8S2iQN4AO0K8%2FiAu148QEUS1CXvzSD6qs4rF%2FLkKF5DaK%2FZO%2BnsIAcul0TYCtQtTBj0uPSaKXzXcMUhkVOoQyzWvOtRbQfkdxI9QQZsFOq%2BvM01QiYkNW1cYVwrP%2BWzJgImjUBlDyEdiGOhP77GBOgG1RPAsXsS5Kwr%2FBNkILVMFT4Uky2QPYASA5XfBEX8VQkpewmM7lCXAV2JCh9%2BjbsL94dAUAMG6jI5EafnAFVYDS%2BdQkhq8o39xJ0fGNryuwo0TJfYUMNw9iegJI9nOtUXygSNGqUXBBYZdSceb8jbHb7w4gad9DvgAuuYWvkcTOYtYuIE%2FjpMdSncsOhSxu%2BdrG7G5uoIuJuDRarWCbwRPfBTsq%2B3KALuu3GgCkSD2ZNpqFKvgBt18VdyOYU%2BYDBLbPgpXm5DRsQ6LKHxcoo1yc8FDZQFFzD9B%2B3o5oayghNm1HGuTDfveK9BjqnAZFDuM6cIYB7Y%2FYz8J3p4PCdSNlLaSIfg1QyANFXcO12Ju1cXWWYTl4ps9ObJnCOgV2ZqNY%2B0chRXTmBVOJv8uHi9zRAzMqHG9k9Nqk0FyX%2F1LpQbwqyssKg2H9X54MaLGHS2CGZsbHrsAiN2sXr7EQYfx0cRwDpC2QDoZa%2BPV7njUG%2FfvCQXrPqRduxoOkQ%2FMORFb0JilhOYDSQjDoNXN6Al0yXHTAl&X-Amz-Signature=d6756885d6573b08b03afabbc03655a861f6f6497bcf5d38941ed2946ed5052a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC46NGSK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzwaMc7ZjvAKXP%2B%2B4lY6q9FtGcorg7Rv2Jf0pDRhcMICIHFxvtbAB6so5qg8c91RjNpPzJhwNKzB8b5ZGFgODGwfKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDx5Qo80mDrX%2BcCO8q3APicrn%2FmryJ1w4hyFITj%2BN5dcRnsMN5oasxOMacfAfNtRQxwf2%2BEQvBXufGacb2lDR97vBR3MARrAX3j0ylzhsTt%2BwqCUYR6QvlNtcxibTzDXuVgyqDTq0HQ8ASljGnGo9aDvs7%2B0x3Z1Gm9QtYz6GTYE%2F2QtLFv2jked3UCN5Kc2kGNPYcFn8S2iQN4AO0K8%2FiAu148QEUS1CXvzSD6qs4rF%2FLkKF5DaK%2FZO%2BnsIAcul0TYCtQtTBj0uPSaKXzXcMUhkVOoQyzWvOtRbQfkdxI9QQZsFOq%2BvM01QiYkNW1cYVwrP%2BWzJgImjUBlDyEdiGOhP77GBOgG1RPAsXsS5Kwr%2FBNkILVMFT4Uky2QPYASA5XfBEX8VQkpewmM7lCXAV2JCh9%2BjbsL94dAUAMG6jI5EafnAFVYDS%2BdQkhq8o39xJ0fGNryuwo0TJfYUMNw9iegJI9nOtUXygSNGqUXBBYZdSceb8jbHb7w4gad9DvgAuuYWvkcTOYtYuIE%2FjpMdSncsOhSxu%2BdrG7G5uoIuJuDRarWCbwRPfBTsq%2B3KALuu3GgCkSD2ZNpqFKvgBt18VdyOYU%2BYDBLbPgpXm5DRsQ6LKHxcoo1yc8FDZQFFzD9B%2B3o5oayghNm1HGuTDfveK9BjqnAZFDuM6cIYB7Y%2FYz8J3p4PCdSNlLaSIfg1QyANFXcO12Ju1cXWWYTl4ps9ObJnCOgV2ZqNY%2B0chRXTmBVOJv8uHi9zRAzMqHG9k9Nqk0FyX%2F1LpQbwqyssKg2H9X54MaLGHS2CGZsbHrsAiN2sXr7EQYfx0cRwDpC2QDoZa%2BPV7njUG%2FfvCQXrPqRduxoOkQ%2FMORFb0JilhOYDSQjDoNXN6Al0yXHTAl&X-Amz-Signature=32ce9b02dc4b939111bc4609e5d5c2754f2e8b33c55c5660e8be8523956f2a80&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
