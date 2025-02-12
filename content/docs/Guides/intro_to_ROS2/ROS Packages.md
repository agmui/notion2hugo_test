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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7SCM75O%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGF1%2FCZ%2FwnFbuVr2kKnAcffx99%2FHNgbBXJHtKqmw2yccAiANmNzskcXRMlsxiw52mmXgH2w%2Fh6qPBVHB8hoaE7tMqiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkM8Fz52ht1ml05ZKtwDgz62DHDzR2HxW2O6%2FTpuRHht0LFA1S3d1Y8vf5J0sNNMc%2FYo1YMaD8GfrPMSm0NOb%2BRELrwjFrUWLPCHb5ZZ7rq3CavGhHiIc2bMsNNxN%2Ft01B1hVInLTRKzD7I17MGc4uFVK9%2FykczRgIcDKoqeUMoMN8inrdTdTlQtz7%2B2K%2FHKKE5allvbjpCl7RMc7DdVlQTYCoD3yUVkEyL3QfhHMNP89Oihw3qm9n%2BvPtVJ6VVs9a6IrBfHKxgXpDkVnH7KjpOZY6kVcLlBC7bOh%2BZg5TFAKOnjMrt90b14BuQXVd%2Fyv8S1PFFHSdTi2J3wtFdCk3s0hJ%2BwJg5tioJrWvpfHYHuwjHlBOuj4coph1bEiTeiGiqoihEtp%2Fh2AA7JVL7FY5A58R5w2ey3XM3f%2FTsCX74qoAmnChFtK22RrSUeDvhSPkcxMXLPgiprPfwWVDLGuMq941YG8teVFKDD34rrqhGcVMNV5kaUT7h223WKzy1p8q55DeiJInjdgAm5EO7QdO1J%2BncTGwaYoheypus7EiANjtqpJIwd6zIDTF902l%2BQ3kj%2B5TIpuAMCtAUe0Z%2Brx4QCWj1FfZL%2BbweomFI7vzFwPNAw8HGq7oY4bvWBYSqRv4yzbImO8Ikl7F4wzIqxvQY6pgGaj3wyKSkdJqm49BhrLbd84WdUzf9QXzU6XNUEVFYFDoKCYXa08mjw83qMHnwvlcoU1lbn8OAHW018ggZ2GLv37tzEqvJokcX1fmTDDeVM%2BEBB1s3kMmFLQQbq2rFh%2BqvAmM4u0OtCKw0Q45pBi0G4q9%2FmkNtNtDUe07Dmz3TzNDgmopeZu%2FWui0057O7i43ONgjuvu4VxotGZqwFJ5mnOnnMeMLLE&X-Amz-Signature=c5c2fd28f3c23785f18c45a53decdeb0f34343d27ab47050a86cc235a076185e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7SCM75O%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGF1%2FCZ%2FwnFbuVr2kKnAcffx99%2FHNgbBXJHtKqmw2yccAiANmNzskcXRMlsxiw52mmXgH2w%2Fh6qPBVHB8hoaE7tMqiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkM8Fz52ht1ml05ZKtwDgz62DHDzR2HxW2O6%2FTpuRHht0LFA1S3d1Y8vf5J0sNNMc%2FYo1YMaD8GfrPMSm0NOb%2BRELrwjFrUWLPCHb5ZZ7rq3CavGhHiIc2bMsNNxN%2Ft01B1hVInLTRKzD7I17MGc4uFVK9%2FykczRgIcDKoqeUMoMN8inrdTdTlQtz7%2B2K%2FHKKE5allvbjpCl7RMc7DdVlQTYCoD3yUVkEyL3QfhHMNP89Oihw3qm9n%2BvPtVJ6VVs9a6IrBfHKxgXpDkVnH7KjpOZY6kVcLlBC7bOh%2BZg5TFAKOnjMrt90b14BuQXVd%2Fyv8S1PFFHSdTi2J3wtFdCk3s0hJ%2BwJg5tioJrWvpfHYHuwjHlBOuj4coph1bEiTeiGiqoihEtp%2Fh2AA7JVL7FY5A58R5w2ey3XM3f%2FTsCX74qoAmnChFtK22RrSUeDvhSPkcxMXLPgiprPfwWVDLGuMq941YG8teVFKDD34rrqhGcVMNV5kaUT7h223WKzy1p8q55DeiJInjdgAm5EO7QdO1J%2BncTGwaYoheypus7EiANjtqpJIwd6zIDTF902l%2BQ3kj%2B5TIpuAMCtAUe0Z%2Brx4QCWj1FfZL%2BbweomFI7vzFwPNAw8HGq7oY4bvWBYSqRv4yzbImO8Ikl7F4wzIqxvQY6pgGaj3wyKSkdJqm49BhrLbd84WdUzf9QXzU6XNUEVFYFDoKCYXa08mjw83qMHnwvlcoU1lbn8OAHW018ggZ2GLv37tzEqvJokcX1fmTDDeVM%2BEBB1s3kMmFLQQbq2rFh%2BqvAmM4u0OtCKw0Q45pBi0G4q9%2FmkNtNtDUe07Dmz3TzNDgmopeZu%2FWui0057O7i43ONgjuvu4VxotGZqwFJ5mnOnnMeMLLE&X-Amz-Signature=5cb7fd509a0e18064bd3159d3e4771ba3672208f6f5e3166e04651bf4c8268c7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7SCM75O%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGF1%2FCZ%2FwnFbuVr2kKnAcffx99%2FHNgbBXJHtKqmw2yccAiANmNzskcXRMlsxiw52mmXgH2w%2Fh6qPBVHB8hoaE7tMqiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkM8Fz52ht1ml05ZKtwDgz62DHDzR2HxW2O6%2FTpuRHht0LFA1S3d1Y8vf5J0sNNMc%2FYo1YMaD8GfrPMSm0NOb%2BRELrwjFrUWLPCHb5ZZ7rq3CavGhHiIc2bMsNNxN%2Ft01B1hVInLTRKzD7I17MGc4uFVK9%2FykczRgIcDKoqeUMoMN8inrdTdTlQtz7%2B2K%2FHKKE5allvbjpCl7RMc7DdVlQTYCoD3yUVkEyL3QfhHMNP89Oihw3qm9n%2BvPtVJ6VVs9a6IrBfHKxgXpDkVnH7KjpOZY6kVcLlBC7bOh%2BZg5TFAKOnjMrt90b14BuQXVd%2Fyv8S1PFFHSdTi2J3wtFdCk3s0hJ%2BwJg5tioJrWvpfHYHuwjHlBOuj4coph1bEiTeiGiqoihEtp%2Fh2AA7JVL7FY5A58R5w2ey3XM3f%2FTsCX74qoAmnChFtK22RrSUeDvhSPkcxMXLPgiprPfwWVDLGuMq941YG8teVFKDD34rrqhGcVMNV5kaUT7h223WKzy1p8q55DeiJInjdgAm5EO7QdO1J%2BncTGwaYoheypus7EiANjtqpJIwd6zIDTF902l%2BQ3kj%2B5TIpuAMCtAUe0Z%2Brx4QCWj1FfZL%2BbweomFI7vzFwPNAw8HGq7oY4bvWBYSqRv4yzbImO8Ikl7F4wzIqxvQY6pgGaj3wyKSkdJqm49BhrLbd84WdUzf9QXzU6XNUEVFYFDoKCYXa08mjw83qMHnwvlcoU1lbn8OAHW018ggZ2GLv37tzEqvJokcX1fmTDDeVM%2BEBB1s3kMmFLQQbq2rFh%2BqvAmM4u0OtCKw0Q45pBi0G4q9%2FmkNtNtDUe07Dmz3TzNDgmopeZu%2FWui0057O7i43ONgjuvu4VxotGZqwFJ5mnOnnMeMLLE&X-Amz-Signature=576af1ec6665801925a6f823bf3a94f3cd6068aef4d7fb7d7415807371dd104e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7SCM75O%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGF1%2FCZ%2FwnFbuVr2kKnAcffx99%2FHNgbBXJHtKqmw2yccAiANmNzskcXRMlsxiw52mmXgH2w%2Fh6qPBVHB8hoaE7tMqiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkM8Fz52ht1ml05ZKtwDgz62DHDzR2HxW2O6%2FTpuRHht0LFA1S3d1Y8vf5J0sNNMc%2FYo1YMaD8GfrPMSm0NOb%2BRELrwjFrUWLPCHb5ZZ7rq3CavGhHiIc2bMsNNxN%2Ft01B1hVInLTRKzD7I17MGc4uFVK9%2FykczRgIcDKoqeUMoMN8inrdTdTlQtz7%2B2K%2FHKKE5allvbjpCl7RMc7DdVlQTYCoD3yUVkEyL3QfhHMNP89Oihw3qm9n%2BvPtVJ6VVs9a6IrBfHKxgXpDkVnH7KjpOZY6kVcLlBC7bOh%2BZg5TFAKOnjMrt90b14BuQXVd%2Fyv8S1PFFHSdTi2J3wtFdCk3s0hJ%2BwJg5tioJrWvpfHYHuwjHlBOuj4coph1bEiTeiGiqoihEtp%2Fh2AA7JVL7FY5A58R5w2ey3XM3f%2FTsCX74qoAmnChFtK22RrSUeDvhSPkcxMXLPgiprPfwWVDLGuMq941YG8teVFKDD34rrqhGcVMNV5kaUT7h223WKzy1p8q55DeiJInjdgAm5EO7QdO1J%2BncTGwaYoheypus7EiANjtqpJIwd6zIDTF902l%2BQ3kj%2B5TIpuAMCtAUe0Z%2Brx4QCWj1FfZL%2BbweomFI7vzFwPNAw8HGq7oY4bvWBYSqRv4yzbImO8Ikl7F4wzIqxvQY6pgGaj3wyKSkdJqm49BhrLbd84WdUzf9QXzU6XNUEVFYFDoKCYXa08mjw83qMHnwvlcoU1lbn8OAHW018ggZ2GLv37tzEqvJokcX1fmTDDeVM%2BEBB1s3kMmFLQQbq2rFh%2BqvAmM4u0OtCKw0Q45pBi0G4q9%2FmkNtNtDUe07Dmz3TzNDgmopeZu%2FWui0057O7i43ONgjuvu4VxotGZqwFJ5mnOnnMeMLLE&X-Amz-Signature=2c5039b992d8470ce991dc22021e5c3e87b6dd333a4f6273afc91f3327969c23&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7SCM75O%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGF1%2FCZ%2FwnFbuVr2kKnAcffx99%2FHNgbBXJHtKqmw2yccAiANmNzskcXRMlsxiw52mmXgH2w%2Fh6qPBVHB8hoaE7tMqiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkM8Fz52ht1ml05ZKtwDgz62DHDzR2HxW2O6%2FTpuRHht0LFA1S3d1Y8vf5J0sNNMc%2FYo1YMaD8GfrPMSm0NOb%2BRELrwjFrUWLPCHb5ZZ7rq3CavGhHiIc2bMsNNxN%2Ft01B1hVInLTRKzD7I17MGc4uFVK9%2FykczRgIcDKoqeUMoMN8inrdTdTlQtz7%2B2K%2FHKKE5allvbjpCl7RMc7DdVlQTYCoD3yUVkEyL3QfhHMNP89Oihw3qm9n%2BvPtVJ6VVs9a6IrBfHKxgXpDkVnH7KjpOZY6kVcLlBC7bOh%2BZg5TFAKOnjMrt90b14BuQXVd%2Fyv8S1PFFHSdTi2J3wtFdCk3s0hJ%2BwJg5tioJrWvpfHYHuwjHlBOuj4coph1bEiTeiGiqoihEtp%2Fh2AA7JVL7FY5A58R5w2ey3XM3f%2FTsCX74qoAmnChFtK22RrSUeDvhSPkcxMXLPgiprPfwWVDLGuMq941YG8teVFKDD34rrqhGcVMNV5kaUT7h223WKzy1p8q55DeiJInjdgAm5EO7QdO1J%2BncTGwaYoheypus7EiANjtqpJIwd6zIDTF902l%2BQ3kj%2B5TIpuAMCtAUe0Z%2Brx4QCWj1FfZL%2BbweomFI7vzFwPNAw8HGq7oY4bvWBYSqRv4yzbImO8Ikl7F4wzIqxvQY6pgGaj3wyKSkdJqm49BhrLbd84WdUzf9QXzU6XNUEVFYFDoKCYXa08mjw83qMHnwvlcoU1lbn8OAHW018ggZ2GLv37tzEqvJokcX1fmTDDeVM%2BEBB1s3kMmFLQQbq2rFh%2BqvAmM4u0OtCKw0Q45pBi0G4q9%2FmkNtNtDUe07Dmz3TzNDgmopeZu%2FWui0057O7i43ONgjuvu4VxotGZqwFJ5mnOnnMeMLLE&X-Amz-Signature=6ecd830dad1968ab30bc80cd18402066acae29ca294fb68ccbdc8265adcfdfc4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7SCM75O%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGF1%2FCZ%2FwnFbuVr2kKnAcffx99%2FHNgbBXJHtKqmw2yccAiANmNzskcXRMlsxiw52mmXgH2w%2Fh6qPBVHB8hoaE7tMqiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkM8Fz52ht1ml05ZKtwDgz62DHDzR2HxW2O6%2FTpuRHht0LFA1S3d1Y8vf5J0sNNMc%2FYo1YMaD8GfrPMSm0NOb%2BRELrwjFrUWLPCHb5ZZ7rq3CavGhHiIc2bMsNNxN%2Ft01B1hVInLTRKzD7I17MGc4uFVK9%2FykczRgIcDKoqeUMoMN8inrdTdTlQtz7%2B2K%2FHKKE5allvbjpCl7RMc7DdVlQTYCoD3yUVkEyL3QfhHMNP89Oihw3qm9n%2BvPtVJ6VVs9a6IrBfHKxgXpDkVnH7KjpOZY6kVcLlBC7bOh%2BZg5TFAKOnjMrt90b14BuQXVd%2Fyv8S1PFFHSdTi2J3wtFdCk3s0hJ%2BwJg5tioJrWvpfHYHuwjHlBOuj4coph1bEiTeiGiqoihEtp%2Fh2AA7JVL7FY5A58R5w2ey3XM3f%2FTsCX74qoAmnChFtK22RrSUeDvhSPkcxMXLPgiprPfwWVDLGuMq941YG8teVFKDD34rrqhGcVMNV5kaUT7h223WKzy1p8q55DeiJInjdgAm5EO7QdO1J%2BncTGwaYoheypus7EiANjtqpJIwd6zIDTF902l%2BQ3kj%2B5TIpuAMCtAUe0Z%2Brx4QCWj1FfZL%2BbweomFI7vzFwPNAw8HGq7oY4bvWBYSqRv4yzbImO8Ikl7F4wzIqxvQY6pgGaj3wyKSkdJqm49BhrLbd84WdUzf9QXzU6XNUEVFYFDoKCYXa08mjw83qMHnwvlcoU1lbn8OAHW018ggZ2GLv37tzEqvJokcX1fmTDDeVM%2BEBB1s3kMmFLQQbq2rFh%2BqvAmM4u0OtCKw0Q45pBi0G4q9%2FmkNtNtDUe07Dmz3TzNDgmopeZu%2FWui0057O7i43ONgjuvu4VxotGZqwFJ5mnOnnMeMLLE&X-Amz-Signature=677821989b55e04e7492757d79be9f22c3c3fe75e84a7b6aa2075893142a506d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7SCM75O%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGF1%2FCZ%2FwnFbuVr2kKnAcffx99%2FHNgbBXJHtKqmw2yccAiANmNzskcXRMlsxiw52mmXgH2w%2Fh6qPBVHB8hoaE7tMqiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkM8Fz52ht1ml05ZKtwDgz62DHDzR2HxW2O6%2FTpuRHht0LFA1S3d1Y8vf5J0sNNMc%2FYo1YMaD8GfrPMSm0NOb%2BRELrwjFrUWLPCHb5ZZ7rq3CavGhHiIc2bMsNNxN%2Ft01B1hVInLTRKzD7I17MGc4uFVK9%2FykczRgIcDKoqeUMoMN8inrdTdTlQtz7%2B2K%2FHKKE5allvbjpCl7RMc7DdVlQTYCoD3yUVkEyL3QfhHMNP89Oihw3qm9n%2BvPtVJ6VVs9a6IrBfHKxgXpDkVnH7KjpOZY6kVcLlBC7bOh%2BZg5TFAKOnjMrt90b14BuQXVd%2Fyv8S1PFFHSdTi2J3wtFdCk3s0hJ%2BwJg5tioJrWvpfHYHuwjHlBOuj4coph1bEiTeiGiqoihEtp%2Fh2AA7JVL7FY5A58R5w2ey3XM3f%2FTsCX74qoAmnChFtK22RrSUeDvhSPkcxMXLPgiprPfwWVDLGuMq941YG8teVFKDD34rrqhGcVMNV5kaUT7h223WKzy1p8q55DeiJInjdgAm5EO7QdO1J%2BncTGwaYoheypus7EiANjtqpJIwd6zIDTF902l%2BQ3kj%2B5TIpuAMCtAUe0Z%2Brx4QCWj1FfZL%2BbweomFI7vzFwPNAw8HGq7oY4bvWBYSqRv4yzbImO8Ikl7F4wzIqxvQY6pgGaj3wyKSkdJqm49BhrLbd84WdUzf9QXzU6XNUEVFYFDoKCYXa08mjw83qMHnwvlcoU1lbn8OAHW018ggZ2GLv37tzEqvJokcX1fmTDDeVM%2BEBB1s3kMmFLQQbq2rFh%2BqvAmM4u0OtCKw0Q45pBi0G4q9%2FmkNtNtDUe07Dmz3TzNDgmopeZu%2FWui0057O7i43ONgjuvu4VxotGZqwFJ5mnOnnMeMLLE&X-Amz-Signature=6f689bfa252ca5ca8df0a94dcc1f3f240c54ba7d72a0a85c4b733d16c9fcb313&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
