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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBAWDPU3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCeTqwvFE7nAwE4bcUrFvdTB9%2F63seOVEIH9zAsiHw6CAIhAJYuVYp3Xo3XFbs18QMoQByOa%2Fn0bvYezoKgPOByrNC8Kv8DCBgQABoMNjM3NDIzMTgzODA1IgyUaYjDlPADpsr6Hn4q3APCnrnS%2Fc8V0Fq0lQmxnucuteOAKF9E6KrjsJ9RpvF0qOdIlJiThGGQ2MT5DdwYORM5dwcXqHoDw0ls4ndmglxDMEBglPQm5%2FzYDqrH6m7CgwTnVRALU%2B%2FVFPQqGuCDYkewdeiHqEeZXw2YaBprh3jVPsWaAsaAABfw1anfyEepWfWZtOZrcitwEml6gi%2B4oPvtflnZ%2FxcrK%2BpANVhRIQAkustv%2F%2BxJaHISJ3gHN02z41%2BZjqWnAuedfghicqHD8838MWmGCyF03J7SmFwWJGngYXEf%2FtzVi5PJriuPlFGo%2FYU3%2Bf6aLDwHtCIcqPG%2FrYHwdDXi8uqyioSU43H8QOkY1Sz4fGf3dvBaB7AZtdYdeR0J83CQEFKbHH3Gz5ks55UinSdQRI%2Ff6Mo7yp%2BMzXU2Y%2BzcBBBdr4vtRvCvGScf93atHkLxaxD0KwErhNGO7mYKPeAzHEe52U2kscIOpfo2LyLEExiuSlcVSorVVtgAxDZGAhHBcZaPecFVfVEwz8to7sasbH888qA1YxZCOBfm8yeF56ydVS3hJoTKR837DEei6Iyo8s95TWS8miLTI8i0DOTsWjyKhxB1nLtvxlQdJJewrDdWB3zLK98rHcF2kr8cloPux%2FZoayPmPzCGuZrDBjqkAdNs%2B0F%2FwnZB%2B009xvn2dNaXzXnxtP8k1vSyN5ScCpd03fHqUm%2BVf2B1hdvAw1hCghbJ6gp%2FxCpLpRSYNWc3iNJ%2FRQ4JZ%2FZRO3T3mbBO22ZAcTbCPIsXWh4q1UEdK0mtPKW%2Fz32d1%2BHH%2BUN9r7bKTJ5kyU1%2B9MNDIfLbTqJsb2OHnXh3nfV%2BuUyv7DTsvNotqPON8xZwgLrXMZgH6zJY33ATn8Pw&X-Amz-Signature=a0ac38fb290e354943656812caef459b9e1a26273b93cf7780fa0b92fab50038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBAWDPU3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCeTqwvFE7nAwE4bcUrFvdTB9%2F63seOVEIH9zAsiHw6CAIhAJYuVYp3Xo3XFbs18QMoQByOa%2Fn0bvYezoKgPOByrNC8Kv8DCBgQABoMNjM3NDIzMTgzODA1IgyUaYjDlPADpsr6Hn4q3APCnrnS%2Fc8V0Fq0lQmxnucuteOAKF9E6KrjsJ9RpvF0qOdIlJiThGGQ2MT5DdwYORM5dwcXqHoDw0ls4ndmglxDMEBglPQm5%2FzYDqrH6m7CgwTnVRALU%2B%2FVFPQqGuCDYkewdeiHqEeZXw2YaBprh3jVPsWaAsaAABfw1anfyEepWfWZtOZrcitwEml6gi%2B4oPvtflnZ%2FxcrK%2BpANVhRIQAkustv%2F%2BxJaHISJ3gHN02z41%2BZjqWnAuedfghicqHD8838MWmGCyF03J7SmFwWJGngYXEf%2FtzVi5PJriuPlFGo%2FYU3%2Bf6aLDwHtCIcqPG%2FrYHwdDXi8uqyioSU43H8QOkY1Sz4fGf3dvBaB7AZtdYdeR0J83CQEFKbHH3Gz5ks55UinSdQRI%2Ff6Mo7yp%2BMzXU2Y%2BzcBBBdr4vtRvCvGScf93atHkLxaxD0KwErhNGO7mYKPeAzHEe52U2kscIOpfo2LyLEExiuSlcVSorVVtgAxDZGAhHBcZaPecFVfVEwz8to7sasbH888qA1YxZCOBfm8yeF56ydVS3hJoTKR837DEei6Iyo8s95TWS8miLTI8i0DOTsWjyKhxB1nLtvxlQdJJewrDdWB3zLK98rHcF2kr8cloPux%2FZoayPmPzCGuZrDBjqkAdNs%2B0F%2FwnZB%2B009xvn2dNaXzXnxtP8k1vSyN5ScCpd03fHqUm%2BVf2B1hdvAw1hCghbJ6gp%2FxCpLpRSYNWc3iNJ%2FRQ4JZ%2FZRO3T3mbBO22ZAcTbCPIsXWh4q1UEdK0mtPKW%2Fz32d1%2BHH%2BUN9r7bKTJ5kyU1%2B9MNDIfLbTqJsb2OHnXh3nfV%2BuUyv7DTsvNotqPON8xZwgLrXMZgH6zJY33ATn8Pw&X-Amz-Signature=a6177a223136d56a1abf91154b9cd75303bc55429ea8b12e431904c799b20468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBAWDPU3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCeTqwvFE7nAwE4bcUrFvdTB9%2F63seOVEIH9zAsiHw6CAIhAJYuVYp3Xo3XFbs18QMoQByOa%2Fn0bvYezoKgPOByrNC8Kv8DCBgQABoMNjM3NDIzMTgzODA1IgyUaYjDlPADpsr6Hn4q3APCnrnS%2Fc8V0Fq0lQmxnucuteOAKF9E6KrjsJ9RpvF0qOdIlJiThGGQ2MT5DdwYORM5dwcXqHoDw0ls4ndmglxDMEBglPQm5%2FzYDqrH6m7CgwTnVRALU%2B%2FVFPQqGuCDYkewdeiHqEeZXw2YaBprh3jVPsWaAsaAABfw1anfyEepWfWZtOZrcitwEml6gi%2B4oPvtflnZ%2FxcrK%2BpANVhRIQAkustv%2F%2BxJaHISJ3gHN02z41%2BZjqWnAuedfghicqHD8838MWmGCyF03J7SmFwWJGngYXEf%2FtzVi5PJriuPlFGo%2FYU3%2Bf6aLDwHtCIcqPG%2FrYHwdDXi8uqyioSU43H8QOkY1Sz4fGf3dvBaB7AZtdYdeR0J83CQEFKbHH3Gz5ks55UinSdQRI%2Ff6Mo7yp%2BMzXU2Y%2BzcBBBdr4vtRvCvGScf93atHkLxaxD0KwErhNGO7mYKPeAzHEe52U2kscIOpfo2LyLEExiuSlcVSorVVtgAxDZGAhHBcZaPecFVfVEwz8to7sasbH888qA1YxZCOBfm8yeF56ydVS3hJoTKR837DEei6Iyo8s95TWS8miLTI8i0DOTsWjyKhxB1nLtvxlQdJJewrDdWB3zLK98rHcF2kr8cloPux%2FZoayPmPzCGuZrDBjqkAdNs%2B0F%2FwnZB%2B009xvn2dNaXzXnxtP8k1vSyN5ScCpd03fHqUm%2BVf2B1hdvAw1hCghbJ6gp%2FxCpLpRSYNWc3iNJ%2FRQ4JZ%2FZRO3T3mbBO22ZAcTbCPIsXWh4q1UEdK0mtPKW%2Fz32d1%2BHH%2BUN9r7bKTJ5kyU1%2B9MNDIfLbTqJsb2OHnXh3nfV%2BuUyv7DTsvNotqPON8xZwgLrXMZgH6zJY33ATn8Pw&X-Amz-Signature=f31f7419f10efa21e8c28560ce1d4d8b41b225ce174bcca9732878bc1a04354d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBAWDPU3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCeTqwvFE7nAwE4bcUrFvdTB9%2F63seOVEIH9zAsiHw6CAIhAJYuVYp3Xo3XFbs18QMoQByOa%2Fn0bvYezoKgPOByrNC8Kv8DCBgQABoMNjM3NDIzMTgzODA1IgyUaYjDlPADpsr6Hn4q3APCnrnS%2Fc8V0Fq0lQmxnucuteOAKF9E6KrjsJ9RpvF0qOdIlJiThGGQ2MT5DdwYORM5dwcXqHoDw0ls4ndmglxDMEBglPQm5%2FzYDqrH6m7CgwTnVRALU%2B%2FVFPQqGuCDYkewdeiHqEeZXw2YaBprh3jVPsWaAsaAABfw1anfyEepWfWZtOZrcitwEml6gi%2B4oPvtflnZ%2FxcrK%2BpANVhRIQAkustv%2F%2BxJaHISJ3gHN02z41%2BZjqWnAuedfghicqHD8838MWmGCyF03J7SmFwWJGngYXEf%2FtzVi5PJriuPlFGo%2FYU3%2Bf6aLDwHtCIcqPG%2FrYHwdDXi8uqyioSU43H8QOkY1Sz4fGf3dvBaB7AZtdYdeR0J83CQEFKbHH3Gz5ks55UinSdQRI%2Ff6Mo7yp%2BMzXU2Y%2BzcBBBdr4vtRvCvGScf93atHkLxaxD0KwErhNGO7mYKPeAzHEe52U2kscIOpfo2LyLEExiuSlcVSorVVtgAxDZGAhHBcZaPecFVfVEwz8to7sasbH888qA1YxZCOBfm8yeF56ydVS3hJoTKR837DEei6Iyo8s95TWS8miLTI8i0DOTsWjyKhxB1nLtvxlQdJJewrDdWB3zLK98rHcF2kr8cloPux%2FZoayPmPzCGuZrDBjqkAdNs%2B0F%2FwnZB%2B009xvn2dNaXzXnxtP8k1vSyN5ScCpd03fHqUm%2BVf2B1hdvAw1hCghbJ6gp%2FxCpLpRSYNWc3iNJ%2FRQ4JZ%2FZRO3T3mbBO22ZAcTbCPIsXWh4q1UEdK0mtPKW%2Fz32d1%2BHH%2BUN9r7bKTJ5kyU1%2B9MNDIfLbTqJsb2OHnXh3nfV%2BuUyv7DTsvNotqPON8xZwgLrXMZgH6zJY33ATn8Pw&X-Amz-Signature=87f03fa235b6a2cd18854f678deb465b8d84a8c3926653df56beb23443b4add6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBAWDPU3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCeTqwvFE7nAwE4bcUrFvdTB9%2F63seOVEIH9zAsiHw6CAIhAJYuVYp3Xo3XFbs18QMoQByOa%2Fn0bvYezoKgPOByrNC8Kv8DCBgQABoMNjM3NDIzMTgzODA1IgyUaYjDlPADpsr6Hn4q3APCnrnS%2Fc8V0Fq0lQmxnucuteOAKF9E6KrjsJ9RpvF0qOdIlJiThGGQ2MT5DdwYORM5dwcXqHoDw0ls4ndmglxDMEBglPQm5%2FzYDqrH6m7CgwTnVRALU%2B%2FVFPQqGuCDYkewdeiHqEeZXw2YaBprh3jVPsWaAsaAABfw1anfyEepWfWZtOZrcitwEml6gi%2B4oPvtflnZ%2FxcrK%2BpANVhRIQAkustv%2F%2BxJaHISJ3gHN02z41%2BZjqWnAuedfghicqHD8838MWmGCyF03J7SmFwWJGngYXEf%2FtzVi5PJriuPlFGo%2FYU3%2Bf6aLDwHtCIcqPG%2FrYHwdDXi8uqyioSU43H8QOkY1Sz4fGf3dvBaB7AZtdYdeR0J83CQEFKbHH3Gz5ks55UinSdQRI%2Ff6Mo7yp%2BMzXU2Y%2BzcBBBdr4vtRvCvGScf93atHkLxaxD0KwErhNGO7mYKPeAzHEe52U2kscIOpfo2LyLEExiuSlcVSorVVtgAxDZGAhHBcZaPecFVfVEwz8to7sasbH888qA1YxZCOBfm8yeF56ydVS3hJoTKR837DEei6Iyo8s95TWS8miLTI8i0DOTsWjyKhxB1nLtvxlQdJJewrDdWB3zLK98rHcF2kr8cloPux%2FZoayPmPzCGuZrDBjqkAdNs%2B0F%2FwnZB%2B009xvn2dNaXzXnxtP8k1vSyN5ScCpd03fHqUm%2BVf2B1hdvAw1hCghbJ6gp%2FxCpLpRSYNWc3iNJ%2FRQ4JZ%2FZRO3T3mbBO22ZAcTbCPIsXWh4q1UEdK0mtPKW%2Fz32d1%2BHH%2BUN9r7bKTJ5kyU1%2B9MNDIfLbTqJsb2OHnXh3nfV%2BuUyv7DTsvNotqPON8xZwgLrXMZgH6zJY33ATn8Pw&X-Amz-Signature=580fc8ae3e1852f16038eaa0bd11c57e51bc321147320e24923ea125f9c730e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBAWDPU3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCeTqwvFE7nAwE4bcUrFvdTB9%2F63seOVEIH9zAsiHw6CAIhAJYuVYp3Xo3XFbs18QMoQByOa%2Fn0bvYezoKgPOByrNC8Kv8DCBgQABoMNjM3NDIzMTgzODA1IgyUaYjDlPADpsr6Hn4q3APCnrnS%2Fc8V0Fq0lQmxnucuteOAKF9E6KrjsJ9RpvF0qOdIlJiThGGQ2MT5DdwYORM5dwcXqHoDw0ls4ndmglxDMEBglPQm5%2FzYDqrH6m7CgwTnVRALU%2B%2FVFPQqGuCDYkewdeiHqEeZXw2YaBprh3jVPsWaAsaAABfw1anfyEepWfWZtOZrcitwEml6gi%2B4oPvtflnZ%2FxcrK%2BpANVhRIQAkustv%2F%2BxJaHISJ3gHN02z41%2BZjqWnAuedfghicqHD8838MWmGCyF03J7SmFwWJGngYXEf%2FtzVi5PJriuPlFGo%2FYU3%2Bf6aLDwHtCIcqPG%2FrYHwdDXi8uqyioSU43H8QOkY1Sz4fGf3dvBaB7AZtdYdeR0J83CQEFKbHH3Gz5ks55UinSdQRI%2Ff6Mo7yp%2BMzXU2Y%2BzcBBBdr4vtRvCvGScf93atHkLxaxD0KwErhNGO7mYKPeAzHEe52U2kscIOpfo2LyLEExiuSlcVSorVVtgAxDZGAhHBcZaPecFVfVEwz8to7sasbH888qA1YxZCOBfm8yeF56ydVS3hJoTKR837DEei6Iyo8s95TWS8miLTI8i0DOTsWjyKhxB1nLtvxlQdJJewrDdWB3zLK98rHcF2kr8cloPux%2FZoayPmPzCGuZrDBjqkAdNs%2B0F%2FwnZB%2B009xvn2dNaXzXnxtP8k1vSyN5ScCpd03fHqUm%2BVf2B1hdvAw1hCghbJ6gp%2FxCpLpRSYNWc3iNJ%2FRQ4JZ%2FZRO3T3mbBO22ZAcTbCPIsXWh4q1UEdK0mtPKW%2Fz32d1%2BHH%2BUN9r7bKTJ5kyU1%2B9MNDIfLbTqJsb2OHnXh3nfV%2BuUyv7DTsvNotqPON8xZwgLrXMZgH6zJY33ATn8Pw&X-Amz-Signature=5e03d93db4d787cccde9446864200476d0a33983a24a4bb9d6919645d5584380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBAWDPU3%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCeTqwvFE7nAwE4bcUrFvdTB9%2F63seOVEIH9zAsiHw6CAIhAJYuVYp3Xo3XFbs18QMoQByOa%2Fn0bvYezoKgPOByrNC8Kv8DCBgQABoMNjM3NDIzMTgzODA1IgyUaYjDlPADpsr6Hn4q3APCnrnS%2Fc8V0Fq0lQmxnucuteOAKF9E6KrjsJ9RpvF0qOdIlJiThGGQ2MT5DdwYORM5dwcXqHoDw0ls4ndmglxDMEBglPQm5%2FzYDqrH6m7CgwTnVRALU%2B%2FVFPQqGuCDYkewdeiHqEeZXw2YaBprh3jVPsWaAsaAABfw1anfyEepWfWZtOZrcitwEml6gi%2B4oPvtflnZ%2FxcrK%2BpANVhRIQAkustv%2F%2BxJaHISJ3gHN02z41%2BZjqWnAuedfghicqHD8838MWmGCyF03J7SmFwWJGngYXEf%2FtzVi5PJriuPlFGo%2FYU3%2Bf6aLDwHtCIcqPG%2FrYHwdDXi8uqyioSU43H8QOkY1Sz4fGf3dvBaB7AZtdYdeR0J83CQEFKbHH3Gz5ks55UinSdQRI%2Ff6Mo7yp%2BMzXU2Y%2BzcBBBdr4vtRvCvGScf93atHkLxaxD0KwErhNGO7mYKPeAzHEe52U2kscIOpfo2LyLEExiuSlcVSorVVtgAxDZGAhHBcZaPecFVfVEwz8to7sasbH888qA1YxZCOBfm8yeF56ydVS3hJoTKR837DEei6Iyo8s95TWS8miLTI8i0DOTsWjyKhxB1nLtvxlQdJJewrDdWB3zLK98rHcF2kr8cloPux%2FZoayPmPzCGuZrDBjqkAdNs%2B0F%2FwnZB%2B009xvn2dNaXzXnxtP8k1vSyN5ScCpd03fHqUm%2BVf2B1hdvAw1hCghbJ6gp%2FxCpLpRSYNWc3iNJ%2FRQ4JZ%2FZRO3T3mbBO22ZAcTbCPIsXWh4q1UEdK0mtPKW%2Fz32d1%2BHH%2BUN9r7bKTJ5kyU1%2B9MNDIfLbTqJsb2OHnXh3nfV%2BuUyv7DTsvNotqPON8xZwgLrXMZgH6zJY33ATn8Pw&X-Amz-Signature=2df079889d609f9d66b9cbc1dd720332531aaa4696174ef62f226f0e97336c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
