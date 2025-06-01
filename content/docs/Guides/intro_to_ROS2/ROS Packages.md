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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BYPFXIJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH0ArYmaMXQ%2B4OiegUXEcZHTt%2Fxs6Hp7k3Fx2HpOhliMAiAwhVExWDkyDkzmZ87bUcQ0bxGg%2FFauS5Bn7ZGd4CuS%2BCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDOxv%2BPgccuboTDvCKtwDYtehQOkh0xKv6Os%2FcKHRWwtQ%2FLSaN5lK%2FGx%2B2MYXjoF8StYhBf8if40b5PUORjHp%2BOr1EHbZVOy4Dt9KijZfWyf1hscCdM4ZMzAwmJZNWGJgGPOcd9A7fvqfvStdnF9q6wC1i2FXefb%2BRTf%2Bqv9NIfI5NBXrA2Ggb28eJfyjVnoMjwPoX3%2FWomf7IPILGhAHMrjgRP2FrsGLsR3iGsbvJfhE0v43jNwl1G8%2F7FGSYtmmy0KX6Q0X%2FHEoeiZscFKsxicuzi836UIHR%2BT9WYNC8FgBMJaffH9kJVC%2BD%2FYvYHlUE6s3uJErCnJbPW9lbdGJhlF4vJWx2QiBbvlH113r9MTUO%2F8AFqhJEEhmi7b1greOVjUraErKjxvj2VCFNuJeOOJ4QwDpEuq5h%2FJ2NmP5k02It8nB%2Bttl%2Fi71fsYMiy3NnMZShWG5JZmabmv62OfJ7FTpTePzUCxEwY9DeI1DWfZgmyPFXtqwNze4EKJpy1d2UMBPGngctTJNutv2Bx6gGZV0Kii%2BRt7FTgQkiTmKg87h9LCP5SY49ub3F%2F%2BCUT8p%2BTQsigFphH11y6lgzqFDa6YZJUCcy4%2BwEL5yk%2Bk9on52JfGNWj8YuFxlx8xiriIXZ9fsHSr8yB%2FhoDMwzonywQY6pgFR%2BfUThYe3Ptm8wNIJv4VmdT8ZaZlGsdd8Oyxs8VSU4zCqiWCAdM5RQkWx0c4rl21WRR1ecETDsFgFDtqotQq1zO8hvT%2BCHhkWkaeJlYCLC1V5a8CGsVxq37OkIKtXiFLYV%2F0XZkq1YQIhFvOh6eGbYeXGLQ6qBFWCMplWHWgVEoJAowrZys0VEy9y%2Bft7pG20mnBOLr9BC1JVoZr9kHNPDOZ%2Fz6lv&X-Amz-Signature=d1e68d961ee322c86bc331a88730303812a1aecc91d5db4c7fbb763e37567c6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BYPFXIJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH0ArYmaMXQ%2B4OiegUXEcZHTt%2Fxs6Hp7k3Fx2HpOhliMAiAwhVExWDkyDkzmZ87bUcQ0bxGg%2FFauS5Bn7ZGd4CuS%2BCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDOxv%2BPgccuboTDvCKtwDYtehQOkh0xKv6Os%2FcKHRWwtQ%2FLSaN5lK%2FGx%2B2MYXjoF8StYhBf8if40b5PUORjHp%2BOr1EHbZVOy4Dt9KijZfWyf1hscCdM4ZMzAwmJZNWGJgGPOcd9A7fvqfvStdnF9q6wC1i2FXefb%2BRTf%2Bqv9NIfI5NBXrA2Ggb28eJfyjVnoMjwPoX3%2FWomf7IPILGhAHMrjgRP2FrsGLsR3iGsbvJfhE0v43jNwl1G8%2F7FGSYtmmy0KX6Q0X%2FHEoeiZscFKsxicuzi836UIHR%2BT9WYNC8FgBMJaffH9kJVC%2BD%2FYvYHlUE6s3uJErCnJbPW9lbdGJhlF4vJWx2QiBbvlH113r9MTUO%2F8AFqhJEEhmi7b1greOVjUraErKjxvj2VCFNuJeOOJ4QwDpEuq5h%2FJ2NmP5k02It8nB%2Bttl%2Fi71fsYMiy3NnMZShWG5JZmabmv62OfJ7FTpTePzUCxEwY9DeI1DWfZgmyPFXtqwNze4EKJpy1d2UMBPGngctTJNutv2Bx6gGZV0Kii%2BRt7FTgQkiTmKg87h9LCP5SY49ub3F%2F%2BCUT8p%2BTQsigFphH11y6lgzqFDa6YZJUCcy4%2BwEL5yk%2Bk9on52JfGNWj8YuFxlx8xiriIXZ9fsHSr8yB%2FhoDMwzonywQY6pgFR%2BfUThYe3Ptm8wNIJv4VmdT8ZaZlGsdd8Oyxs8VSU4zCqiWCAdM5RQkWx0c4rl21WRR1ecETDsFgFDtqotQq1zO8hvT%2BCHhkWkaeJlYCLC1V5a8CGsVxq37OkIKtXiFLYV%2F0XZkq1YQIhFvOh6eGbYeXGLQ6qBFWCMplWHWgVEoJAowrZys0VEy9y%2Bft7pG20mnBOLr9BC1JVoZr9kHNPDOZ%2Fz6lv&X-Amz-Signature=c6f3a9f610eb40c0f776808711ad24cb03520ef600d6147d3fb38340814ff32a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BYPFXIJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH0ArYmaMXQ%2B4OiegUXEcZHTt%2Fxs6Hp7k3Fx2HpOhliMAiAwhVExWDkyDkzmZ87bUcQ0bxGg%2FFauS5Bn7ZGd4CuS%2BCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDOxv%2BPgccuboTDvCKtwDYtehQOkh0xKv6Os%2FcKHRWwtQ%2FLSaN5lK%2FGx%2B2MYXjoF8StYhBf8if40b5PUORjHp%2BOr1EHbZVOy4Dt9KijZfWyf1hscCdM4ZMzAwmJZNWGJgGPOcd9A7fvqfvStdnF9q6wC1i2FXefb%2BRTf%2Bqv9NIfI5NBXrA2Ggb28eJfyjVnoMjwPoX3%2FWomf7IPILGhAHMrjgRP2FrsGLsR3iGsbvJfhE0v43jNwl1G8%2F7FGSYtmmy0KX6Q0X%2FHEoeiZscFKsxicuzi836UIHR%2BT9WYNC8FgBMJaffH9kJVC%2BD%2FYvYHlUE6s3uJErCnJbPW9lbdGJhlF4vJWx2QiBbvlH113r9MTUO%2F8AFqhJEEhmi7b1greOVjUraErKjxvj2VCFNuJeOOJ4QwDpEuq5h%2FJ2NmP5k02It8nB%2Bttl%2Fi71fsYMiy3NnMZShWG5JZmabmv62OfJ7FTpTePzUCxEwY9DeI1DWfZgmyPFXtqwNze4EKJpy1d2UMBPGngctTJNutv2Bx6gGZV0Kii%2BRt7FTgQkiTmKg87h9LCP5SY49ub3F%2F%2BCUT8p%2BTQsigFphH11y6lgzqFDa6YZJUCcy4%2BwEL5yk%2Bk9on52JfGNWj8YuFxlx8xiriIXZ9fsHSr8yB%2FhoDMwzonywQY6pgFR%2BfUThYe3Ptm8wNIJv4VmdT8ZaZlGsdd8Oyxs8VSU4zCqiWCAdM5RQkWx0c4rl21WRR1ecETDsFgFDtqotQq1zO8hvT%2BCHhkWkaeJlYCLC1V5a8CGsVxq37OkIKtXiFLYV%2F0XZkq1YQIhFvOh6eGbYeXGLQ6qBFWCMplWHWgVEoJAowrZys0VEy9y%2Bft7pG20mnBOLr9BC1JVoZr9kHNPDOZ%2Fz6lv&X-Amz-Signature=4e2e40d188bab6d1c732c994168b04e182f2749833c61aa6f2bb76d0a691c74d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BYPFXIJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH0ArYmaMXQ%2B4OiegUXEcZHTt%2Fxs6Hp7k3Fx2HpOhliMAiAwhVExWDkyDkzmZ87bUcQ0bxGg%2FFauS5Bn7ZGd4CuS%2BCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDOxv%2BPgccuboTDvCKtwDYtehQOkh0xKv6Os%2FcKHRWwtQ%2FLSaN5lK%2FGx%2B2MYXjoF8StYhBf8if40b5PUORjHp%2BOr1EHbZVOy4Dt9KijZfWyf1hscCdM4ZMzAwmJZNWGJgGPOcd9A7fvqfvStdnF9q6wC1i2FXefb%2BRTf%2Bqv9NIfI5NBXrA2Ggb28eJfyjVnoMjwPoX3%2FWomf7IPILGhAHMrjgRP2FrsGLsR3iGsbvJfhE0v43jNwl1G8%2F7FGSYtmmy0KX6Q0X%2FHEoeiZscFKsxicuzi836UIHR%2BT9WYNC8FgBMJaffH9kJVC%2BD%2FYvYHlUE6s3uJErCnJbPW9lbdGJhlF4vJWx2QiBbvlH113r9MTUO%2F8AFqhJEEhmi7b1greOVjUraErKjxvj2VCFNuJeOOJ4QwDpEuq5h%2FJ2NmP5k02It8nB%2Bttl%2Fi71fsYMiy3NnMZShWG5JZmabmv62OfJ7FTpTePzUCxEwY9DeI1DWfZgmyPFXtqwNze4EKJpy1d2UMBPGngctTJNutv2Bx6gGZV0Kii%2BRt7FTgQkiTmKg87h9LCP5SY49ub3F%2F%2BCUT8p%2BTQsigFphH11y6lgzqFDa6YZJUCcy4%2BwEL5yk%2Bk9on52JfGNWj8YuFxlx8xiriIXZ9fsHSr8yB%2FhoDMwzonywQY6pgFR%2BfUThYe3Ptm8wNIJv4VmdT8ZaZlGsdd8Oyxs8VSU4zCqiWCAdM5RQkWx0c4rl21WRR1ecETDsFgFDtqotQq1zO8hvT%2BCHhkWkaeJlYCLC1V5a8CGsVxq37OkIKtXiFLYV%2F0XZkq1YQIhFvOh6eGbYeXGLQ6qBFWCMplWHWgVEoJAowrZys0VEy9y%2Bft7pG20mnBOLr9BC1JVoZr9kHNPDOZ%2Fz6lv&X-Amz-Signature=5691dd6207669fe08460f6519cc79b45a04ee0b652f4d461b2294bc7b9dcd6df&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BYPFXIJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH0ArYmaMXQ%2B4OiegUXEcZHTt%2Fxs6Hp7k3Fx2HpOhliMAiAwhVExWDkyDkzmZ87bUcQ0bxGg%2FFauS5Bn7ZGd4CuS%2BCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDOxv%2BPgccuboTDvCKtwDYtehQOkh0xKv6Os%2FcKHRWwtQ%2FLSaN5lK%2FGx%2B2MYXjoF8StYhBf8if40b5PUORjHp%2BOr1EHbZVOy4Dt9KijZfWyf1hscCdM4ZMzAwmJZNWGJgGPOcd9A7fvqfvStdnF9q6wC1i2FXefb%2BRTf%2Bqv9NIfI5NBXrA2Ggb28eJfyjVnoMjwPoX3%2FWomf7IPILGhAHMrjgRP2FrsGLsR3iGsbvJfhE0v43jNwl1G8%2F7FGSYtmmy0KX6Q0X%2FHEoeiZscFKsxicuzi836UIHR%2BT9WYNC8FgBMJaffH9kJVC%2BD%2FYvYHlUE6s3uJErCnJbPW9lbdGJhlF4vJWx2QiBbvlH113r9MTUO%2F8AFqhJEEhmi7b1greOVjUraErKjxvj2VCFNuJeOOJ4QwDpEuq5h%2FJ2NmP5k02It8nB%2Bttl%2Fi71fsYMiy3NnMZShWG5JZmabmv62OfJ7FTpTePzUCxEwY9DeI1DWfZgmyPFXtqwNze4EKJpy1d2UMBPGngctTJNutv2Bx6gGZV0Kii%2BRt7FTgQkiTmKg87h9LCP5SY49ub3F%2F%2BCUT8p%2BTQsigFphH11y6lgzqFDa6YZJUCcy4%2BwEL5yk%2Bk9on52JfGNWj8YuFxlx8xiriIXZ9fsHSr8yB%2FhoDMwzonywQY6pgFR%2BfUThYe3Ptm8wNIJv4VmdT8ZaZlGsdd8Oyxs8VSU4zCqiWCAdM5RQkWx0c4rl21WRR1ecETDsFgFDtqotQq1zO8hvT%2BCHhkWkaeJlYCLC1V5a8CGsVxq37OkIKtXiFLYV%2F0XZkq1YQIhFvOh6eGbYeXGLQ6qBFWCMplWHWgVEoJAowrZys0VEy9y%2Bft7pG20mnBOLr9BC1JVoZr9kHNPDOZ%2Fz6lv&X-Amz-Signature=c898db06bddd2c2932bfd423430af45891b0b84201dcd5da34f7df1385e3fd67&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BYPFXIJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH0ArYmaMXQ%2B4OiegUXEcZHTt%2Fxs6Hp7k3Fx2HpOhliMAiAwhVExWDkyDkzmZ87bUcQ0bxGg%2FFauS5Bn7ZGd4CuS%2BCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDOxv%2BPgccuboTDvCKtwDYtehQOkh0xKv6Os%2FcKHRWwtQ%2FLSaN5lK%2FGx%2B2MYXjoF8StYhBf8if40b5PUORjHp%2BOr1EHbZVOy4Dt9KijZfWyf1hscCdM4ZMzAwmJZNWGJgGPOcd9A7fvqfvStdnF9q6wC1i2FXefb%2BRTf%2Bqv9NIfI5NBXrA2Ggb28eJfyjVnoMjwPoX3%2FWomf7IPILGhAHMrjgRP2FrsGLsR3iGsbvJfhE0v43jNwl1G8%2F7FGSYtmmy0KX6Q0X%2FHEoeiZscFKsxicuzi836UIHR%2BT9WYNC8FgBMJaffH9kJVC%2BD%2FYvYHlUE6s3uJErCnJbPW9lbdGJhlF4vJWx2QiBbvlH113r9MTUO%2F8AFqhJEEhmi7b1greOVjUraErKjxvj2VCFNuJeOOJ4QwDpEuq5h%2FJ2NmP5k02It8nB%2Bttl%2Fi71fsYMiy3NnMZShWG5JZmabmv62OfJ7FTpTePzUCxEwY9DeI1DWfZgmyPFXtqwNze4EKJpy1d2UMBPGngctTJNutv2Bx6gGZV0Kii%2BRt7FTgQkiTmKg87h9LCP5SY49ub3F%2F%2BCUT8p%2BTQsigFphH11y6lgzqFDa6YZJUCcy4%2BwEL5yk%2Bk9on52JfGNWj8YuFxlx8xiriIXZ9fsHSr8yB%2FhoDMwzonywQY6pgFR%2BfUThYe3Ptm8wNIJv4VmdT8ZaZlGsdd8Oyxs8VSU4zCqiWCAdM5RQkWx0c4rl21WRR1ecETDsFgFDtqotQq1zO8hvT%2BCHhkWkaeJlYCLC1V5a8CGsVxq37OkIKtXiFLYV%2F0XZkq1YQIhFvOh6eGbYeXGLQ6qBFWCMplWHWgVEoJAowrZys0VEy9y%2Bft7pG20mnBOLr9BC1JVoZr9kHNPDOZ%2Fz6lv&X-Amz-Signature=efb9d1c272be18b7ad4014eae6a3a010925ddb58f07c2450001301ac46115b31&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BYPFXIJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH0ArYmaMXQ%2B4OiegUXEcZHTt%2Fxs6Hp7k3Fx2HpOhliMAiAwhVExWDkyDkzmZ87bUcQ0bxGg%2FFauS5Bn7ZGd4CuS%2BCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDOxv%2BPgccuboTDvCKtwDYtehQOkh0xKv6Os%2FcKHRWwtQ%2FLSaN5lK%2FGx%2B2MYXjoF8StYhBf8if40b5PUORjHp%2BOr1EHbZVOy4Dt9KijZfWyf1hscCdM4ZMzAwmJZNWGJgGPOcd9A7fvqfvStdnF9q6wC1i2FXefb%2BRTf%2Bqv9NIfI5NBXrA2Ggb28eJfyjVnoMjwPoX3%2FWomf7IPILGhAHMrjgRP2FrsGLsR3iGsbvJfhE0v43jNwl1G8%2F7FGSYtmmy0KX6Q0X%2FHEoeiZscFKsxicuzi836UIHR%2BT9WYNC8FgBMJaffH9kJVC%2BD%2FYvYHlUE6s3uJErCnJbPW9lbdGJhlF4vJWx2QiBbvlH113r9MTUO%2F8AFqhJEEhmi7b1greOVjUraErKjxvj2VCFNuJeOOJ4QwDpEuq5h%2FJ2NmP5k02It8nB%2Bttl%2Fi71fsYMiy3NnMZShWG5JZmabmv62OfJ7FTpTePzUCxEwY9DeI1DWfZgmyPFXtqwNze4EKJpy1d2UMBPGngctTJNutv2Bx6gGZV0Kii%2BRt7FTgQkiTmKg87h9LCP5SY49ub3F%2F%2BCUT8p%2BTQsigFphH11y6lgzqFDa6YZJUCcy4%2BwEL5yk%2Bk9on52JfGNWj8YuFxlx8xiriIXZ9fsHSr8yB%2FhoDMwzonywQY6pgFR%2BfUThYe3Ptm8wNIJv4VmdT8ZaZlGsdd8Oyxs8VSU4zCqiWCAdM5RQkWx0c4rl21WRR1ecETDsFgFDtqotQq1zO8hvT%2BCHhkWkaeJlYCLC1V5a8CGsVxq37OkIKtXiFLYV%2F0XZkq1YQIhFvOh6eGbYeXGLQ6qBFWCMplWHWgVEoJAowrZys0VEy9y%2Bft7pG20mnBOLr9BC1JVoZr9kHNPDOZ%2Fz6lv&X-Amz-Signature=b3dec86c40803b00a68fbe2a7efc011b58a21bafbadd203954a71f0b3fbdfbcb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
