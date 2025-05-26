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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMXBGKNI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDLjKzTV4t39aG7dPoEGNoJdELmayvr72aoouZRQrUP1gIgeu26XSoENTNjGWRKZqu%2FzoJFFShIYAnIv3dPgRW%2FAWcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKpMechTdl5LIvXhByrcA8JCa0ZbyOSkWz7wpxHdpfePdVNl708GmgyLytQ4O2Up7DL5lmp%2BUELMuDqdnNrug6q5e9LaG2DwIgMxDjFRaqspDrudWv%2B%2FAbR6HOY5PrzVVaJ999MgR%2Bg6%2FfUVavnVPujOtTD%2B8HzdlHjIuGet8t%2Fh8g6NmwzrQhGyFB7oxhRn2A6BwgAWVVNQFC69trOe2NLHI1Dbq1t9yX02BHeGUy%2BnRl7N34fp0g%2FCDsRWiq%2Fjo6ESKgRdu35jgKdzFdUf2q%2FPrZdN6maK2ud4LqZ4Mt2ZUa79LfGUIsoaUPXYg8ZQU3rB80N9sL%2BWhIB%2BNdJE9S7qVtyI%2BUT20WmE02kCi9euhcLAj%2FLEy7q6LREjbF3rh04LtrgO8qV%2FK9%2BpEcEHuKFY6536yMci%2Fzt7QmLNgz2H6Ez%2FUDUCbyWuYT0CZ2bqhgxT4AeyhrioyFuVY17dsCVI4OWiuhbnPkGsSMKE7ARdiLeMoRxlzCqkr3LotemKr7P64l2ZhGHMWy%2Btu4ZLTNDyXMbdsIDr8v2FuTcpe7xnp6X5RKOpONOfTlJGhAtwcKnCbh%2Fi5lO%2B3h%2FV3Z%2FUCd37j8zRZxZPPGDJG0mrNyZoJwr8Uk01T8%2F6tHrb%2BKzLRIE7DtqBVbVf%2BbzzMJWqzsEGOqUBam6t%2ByVm7I%2FfGjoMKvnzLLRqibgm5Gt7jDxJfPY%2BsmH1NQLM7yf1n%2FEARYTzOcBvlvfKDZc2kXjxECrtVJgOJi8QSjfmmYL63zWUDpjFXIExAZRaUyW6DB%2BT5BZGhYE%2FNeQCopzJnmycKw8ZG9%2FpwbROZSoEtfp%2FTet6zpD3V5%2BfAbo8gwcT3YoXXr7PaV4uRg05uKNgFl6X2iQM7adKdFR3Ufep&X-Amz-Signature=0a418c147156cbaaf75b237b9d93b04ea656324a4e714818132f80e4d3e90636&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMXBGKNI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDLjKzTV4t39aG7dPoEGNoJdELmayvr72aoouZRQrUP1gIgeu26XSoENTNjGWRKZqu%2FzoJFFShIYAnIv3dPgRW%2FAWcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKpMechTdl5LIvXhByrcA8JCa0ZbyOSkWz7wpxHdpfePdVNl708GmgyLytQ4O2Up7DL5lmp%2BUELMuDqdnNrug6q5e9LaG2DwIgMxDjFRaqspDrudWv%2B%2FAbR6HOY5PrzVVaJ999MgR%2Bg6%2FfUVavnVPujOtTD%2B8HzdlHjIuGet8t%2Fh8g6NmwzrQhGyFB7oxhRn2A6BwgAWVVNQFC69trOe2NLHI1Dbq1t9yX02BHeGUy%2BnRl7N34fp0g%2FCDsRWiq%2Fjo6ESKgRdu35jgKdzFdUf2q%2FPrZdN6maK2ud4LqZ4Mt2ZUa79LfGUIsoaUPXYg8ZQU3rB80N9sL%2BWhIB%2BNdJE9S7qVtyI%2BUT20WmE02kCi9euhcLAj%2FLEy7q6LREjbF3rh04LtrgO8qV%2FK9%2BpEcEHuKFY6536yMci%2Fzt7QmLNgz2H6Ez%2FUDUCbyWuYT0CZ2bqhgxT4AeyhrioyFuVY17dsCVI4OWiuhbnPkGsSMKE7ARdiLeMoRxlzCqkr3LotemKr7P64l2ZhGHMWy%2Btu4ZLTNDyXMbdsIDr8v2FuTcpe7xnp6X5RKOpONOfTlJGhAtwcKnCbh%2Fi5lO%2B3h%2FV3Z%2FUCd37j8zRZxZPPGDJG0mrNyZoJwr8Uk01T8%2F6tHrb%2BKzLRIE7DtqBVbVf%2BbzzMJWqzsEGOqUBam6t%2ByVm7I%2FfGjoMKvnzLLRqibgm5Gt7jDxJfPY%2BsmH1NQLM7yf1n%2FEARYTzOcBvlvfKDZc2kXjxECrtVJgOJi8QSjfmmYL63zWUDpjFXIExAZRaUyW6DB%2BT5BZGhYE%2FNeQCopzJnmycKw8ZG9%2FpwbROZSoEtfp%2FTet6zpD3V5%2BfAbo8gwcT3YoXXr7PaV4uRg05uKNgFl6X2iQM7adKdFR3Ufep&X-Amz-Signature=435fd9d982e5ecc66d51a3a78493e3cedbc588fa643109a39e87a8f05081130f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMXBGKNI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDLjKzTV4t39aG7dPoEGNoJdELmayvr72aoouZRQrUP1gIgeu26XSoENTNjGWRKZqu%2FzoJFFShIYAnIv3dPgRW%2FAWcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKpMechTdl5LIvXhByrcA8JCa0ZbyOSkWz7wpxHdpfePdVNl708GmgyLytQ4O2Up7DL5lmp%2BUELMuDqdnNrug6q5e9LaG2DwIgMxDjFRaqspDrudWv%2B%2FAbR6HOY5PrzVVaJ999MgR%2Bg6%2FfUVavnVPujOtTD%2B8HzdlHjIuGet8t%2Fh8g6NmwzrQhGyFB7oxhRn2A6BwgAWVVNQFC69trOe2NLHI1Dbq1t9yX02BHeGUy%2BnRl7N34fp0g%2FCDsRWiq%2Fjo6ESKgRdu35jgKdzFdUf2q%2FPrZdN6maK2ud4LqZ4Mt2ZUa79LfGUIsoaUPXYg8ZQU3rB80N9sL%2BWhIB%2BNdJE9S7qVtyI%2BUT20WmE02kCi9euhcLAj%2FLEy7q6LREjbF3rh04LtrgO8qV%2FK9%2BpEcEHuKFY6536yMci%2Fzt7QmLNgz2H6Ez%2FUDUCbyWuYT0CZ2bqhgxT4AeyhrioyFuVY17dsCVI4OWiuhbnPkGsSMKE7ARdiLeMoRxlzCqkr3LotemKr7P64l2ZhGHMWy%2Btu4ZLTNDyXMbdsIDr8v2FuTcpe7xnp6X5RKOpONOfTlJGhAtwcKnCbh%2Fi5lO%2B3h%2FV3Z%2FUCd37j8zRZxZPPGDJG0mrNyZoJwr8Uk01T8%2F6tHrb%2BKzLRIE7DtqBVbVf%2BbzzMJWqzsEGOqUBam6t%2ByVm7I%2FfGjoMKvnzLLRqibgm5Gt7jDxJfPY%2BsmH1NQLM7yf1n%2FEARYTzOcBvlvfKDZc2kXjxECrtVJgOJi8QSjfmmYL63zWUDpjFXIExAZRaUyW6DB%2BT5BZGhYE%2FNeQCopzJnmycKw8ZG9%2FpwbROZSoEtfp%2FTet6zpD3V5%2BfAbo8gwcT3YoXXr7PaV4uRg05uKNgFl6X2iQM7adKdFR3Ufep&X-Amz-Signature=f1943f2d5777f870cab6b746143c860b567804a2e885362c7504221641794915&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMXBGKNI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDLjKzTV4t39aG7dPoEGNoJdELmayvr72aoouZRQrUP1gIgeu26XSoENTNjGWRKZqu%2FzoJFFShIYAnIv3dPgRW%2FAWcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKpMechTdl5LIvXhByrcA8JCa0ZbyOSkWz7wpxHdpfePdVNl708GmgyLytQ4O2Up7DL5lmp%2BUELMuDqdnNrug6q5e9LaG2DwIgMxDjFRaqspDrudWv%2B%2FAbR6HOY5PrzVVaJ999MgR%2Bg6%2FfUVavnVPujOtTD%2B8HzdlHjIuGet8t%2Fh8g6NmwzrQhGyFB7oxhRn2A6BwgAWVVNQFC69trOe2NLHI1Dbq1t9yX02BHeGUy%2BnRl7N34fp0g%2FCDsRWiq%2Fjo6ESKgRdu35jgKdzFdUf2q%2FPrZdN6maK2ud4LqZ4Mt2ZUa79LfGUIsoaUPXYg8ZQU3rB80N9sL%2BWhIB%2BNdJE9S7qVtyI%2BUT20WmE02kCi9euhcLAj%2FLEy7q6LREjbF3rh04LtrgO8qV%2FK9%2BpEcEHuKFY6536yMci%2Fzt7QmLNgz2H6Ez%2FUDUCbyWuYT0CZ2bqhgxT4AeyhrioyFuVY17dsCVI4OWiuhbnPkGsSMKE7ARdiLeMoRxlzCqkr3LotemKr7P64l2ZhGHMWy%2Btu4ZLTNDyXMbdsIDr8v2FuTcpe7xnp6X5RKOpONOfTlJGhAtwcKnCbh%2Fi5lO%2B3h%2FV3Z%2FUCd37j8zRZxZPPGDJG0mrNyZoJwr8Uk01T8%2F6tHrb%2BKzLRIE7DtqBVbVf%2BbzzMJWqzsEGOqUBam6t%2ByVm7I%2FfGjoMKvnzLLRqibgm5Gt7jDxJfPY%2BsmH1NQLM7yf1n%2FEARYTzOcBvlvfKDZc2kXjxECrtVJgOJi8QSjfmmYL63zWUDpjFXIExAZRaUyW6DB%2BT5BZGhYE%2FNeQCopzJnmycKw8ZG9%2FpwbROZSoEtfp%2FTet6zpD3V5%2BfAbo8gwcT3YoXXr7PaV4uRg05uKNgFl6X2iQM7adKdFR3Ufep&X-Amz-Signature=34aa0c100bfee2caeeb6ab559dff062bc469f608ca46f52af678add99bcf4e36&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMXBGKNI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDLjKzTV4t39aG7dPoEGNoJdELmayvr72aoouZRQrUP1gIgeu26XSoENTNjGWRKZqu%2FzoJFFShIYAnIv3dPgRW%2FAWcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKpMechTdl5LIvXhByrcA8JCa0ZbyOSkWz7wpxHdpfePdVNl708GmgyLytQ4O2Up7DL5lmp%2BUELMuDqdnNrug6q5e9LaG2DwIgMxDjFRaqspDrudWv%2B%2FAbR6HOY5PrzVVaJ999MgR%2Bg6%2FfUVavnVPujOtTD%2B8HzdlHjIuGet8t%2Fh8g6NmwzrQhGyFB7oxhRn2A6BwgAWVVNQFC69trOe2NLHI1Dbq1t9yX02BHeGUy%2BnRl7N34fp0g%2FCDsRWiq%2Fjo6ESKgRdu35jgKdzFdUf2q%2FPrZdN6maK2ud4LqZ4Mt2ZUa79LfGUIsoaUPXYg8ZQU3rB80N9sL%2BWhIB%2BNdJE9S7qVtyI%2BUT20WmE02kCi9euhcLAj%2FLEy7q6LREjbF3rh04LtrgO8qV%2FK9%2BpEcEHuKFY6536yMci%2Fzt7QmLNgz2H6Ez%2FUDUCbyWuYT0CZ2bqhgxT4AeyhrioyFuVY17dsCVI4OWiuhbnPkGsSMKE7ARdiLeMoRxlzCqkr3LotemKr7P64l2ZhGHMWy%2Btu4ZLTNDyXMbdsIDr8v2FuTcpe7xnp6X5RKOpONOfTlJGhAtwcKnCbh%2Fi5lO%2B3h%2FV3Z%2FUCd37j8zRZxZPPGDJG0mrNyZoJwr8Uk01T8%2F6tHrb%2BKzLRIE7DtqBVbVf%2BbzzMJWqzsEGOqUBam6t%2ByVm7I%2FfGjoMKvnzLLRqibgm5Gt7jDxJfPY%2BsmH1NQLM7yf1n%2FEARYTzOcBvlvfKDZc2kXjxECrtVJgOJi8QSjfmmYL63zWUDpjFXIExAZRaUyW6DB%2BT5BZGhYE%2FNeQCopzJnmycKw8ZG9%2FpwbROZSoEtfp%2FTet6zpD3V5%2BfAbo8gwcT3YoXXr7PaV4uRg05uKNgFl6X2iQM7adKdFR3Ufep&X-Amz-Signature=f1e433e52053218d832ec2ccf80c8a9ba2f9d3f7a9cb82ef3df5edfc39c7915c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMXBGKNI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDLjKzTV4t39aG7dPoEGNoJdELmayvr72aoouZRQrUP1gIgeu26XSoENTNjGWRKZqu%2FzoJFFShIYAnIv3dPgRW%2FAWcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKpMechTdl5LIvXhByrcA8JCa0ZbyOSkWz7wpxHdpfePdVNl708GmgyLytQ4O2Up7DL5lmp%2BUELMuDqdnNrug6q5e9LaG2DwIgMxDjFRaqspDrudWv%2B%2FAbR6HOY5PrzVVaJ999MgR%2Bg6%2FfUVavnVPujOtTD%2B8HzdlHjIuGet8t%2Fh8g6NmwzrQhGyFB7oxhRn2A6BwgAWVVNQFC69trOe2NLHI1Dbq1t9yX02BHeGUy%2BnRl7N34fp0g%2FCDsRWiq%2Fjo6ESKgRdu35jgKdzFdUf2q%2FPrZdN6maK2ud4LqZ4Mt2ZUa79LfGUIsoaUPXYg8ZQU3rB80N9sL%2BWhIB%2BNdJE9S7qVtyI%2BUT20WmE02kCi9euhcLAj%2FLEy7q6LREjbF3rh04LtrgO8qV%2FK9%2BpEcEHuKFY6536yMci%2Fzt7QmLNgz2H6Ez%2FUDUCbyWuYT0CZ2bqhgxT4AeyhrioyFuVY17dsCVI4OWiuhbnPkGsSMKE7ARdiLeMoRxlzCqkr3LotemKr7P64l2ZhGHMWy%2Btu4ZLTNDyXMbdsIDr8v2FuTcpe7xnp6X5RKOpONOfTlJGhAtwcKnCbh%2Fi5lO%2B3h%2FV3Z%2FUCd37j8zRZxZPPGDJG0mrNyZoJwr8Uk01T8%2F6tHrb%2BKzLRIE7DtqBVbVf%2BbzzMJWqzsEGOqUBam6t%2ByVm7I%2FfGjoMKvnzLLRqibgm5Gt7jDxJfPY%2BsmH1NQLM7yf1n%2FEARYTzOcBvlvfKDZc2kXjxECrtVJgOJi8QSjfmmYL63zWUDpjFXIExAZRaUyW6DB%2BT5BZGhYE%2FNeQCopzJnmycKw8ZG9%2FpwbROZSoEtfp%2FTet6zpD3V5%2BfAbo8gwcT3YoXXr7PaV4uRg05uKNgFl6X2iQM7adKdFR3Ufep&X-Amz-Signature=56ae85aa61e58a088389148ea9fe70561195f5351dec7870b518ea3da34790df&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMXBGKNI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDLjKzTV4t39aG7dPoEGNoJdELmayvr72aoouZRQrUP1gIgeu26XSoENTNjGWRKZqu%2FzoJFFShIYAnIv3dPgRW%2FAWcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKpMechTdl5LIvXhByrcA8JCa0ZbyOSkWz7wpxHdpfePdVNl708GmgyLytQ4O2Up7DL5lmp%2BUELMuDqdnNrug6q5e9LaG2DwIgMxDjFRaqspDrudWv%2B%2FAbR6HOY5PrzVVaJ999MgR%2Bg6%2FfUVavnVPujOtTD%2B8HzdlHjIuGet8t%2Fh8g6NmwzrQhGyFB7oxhRn2A6BwgAWVVNQFC69trOe2NLHI1Dbq1t9yX02BHeGUy%2BnRl7N34fp0g%2FCDsRWiq%2Fjo6ESKgRdu35jgKdzFdUf2q%2FPrZdN6maK2ud4LqZ4Mt2ZUa79LfGUIsoaUPXYg8ZQU3rB80N9sL%2BWhIB%2BNdJE9S7qVtyI%2BUT20WmE02kCi9euhcLAj%2FLEy7q6LREjbF3rh04LtrgO8qV%2FK9%2BpEcEHuKFY6536yMci%2Fzt7QmLNgz2H6Ez%2FUDUCbyWuYT0CZ2bqhgxT4AeyhrioyFuVY17dsCVI4OWiuhbnPkGsSMKE7ARdiLeMoRxlzCqkr3LotemKr7P64l2ZhGHMWy%2Btu4ZLTNDyXMbdsIDr8v2FuTcpe7xnp6X5RKOpONOfTlJGhAtwcKnCbh%2Fi5lO%2B3h%2FV3Z%2FUCd37j8zRZxZPPGDJG0mrNyZoJwr8Uk01T8%2F6tHrb%2BKzLRIE7DtqBVbVf%2BbzzMJWqzsEGOqUBam6t%2ByVm7I%2FfGjoMKvnzLLRqibgm5Gt7jDxJfPY%2BsmH1NQLM7yf1n%2FEARYTzOcBvlvfKDZc2kXjxECrtVJgOJi8QSjfmmYL63zWUDpjFXIExAZRaUyW6DB%2BT5BZGhYE%2FNeQCopzJnmycKw8ZG9%2FpwbROZSoEtfp%2FTet6zpD3V5%2BfAbo8gwcT3YoXXr7PaV4uRg05uKNgFl6X2iQM7adKdFR3Ufep&X-Amz-Signature=455d48ddb75a84c60099fa1e424090d64d81afe46c3bb3c03ddf6941b31b0f15&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
