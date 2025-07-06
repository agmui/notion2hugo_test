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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7S6BQAY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIACd2OMsWPlvn3iqIrr1m0q1Yym1zWCEaRN4x10TZE%2FGAiEA2Q55jDcjcxDJ8w9yKNyxFxES7YDEwQqalrrcB%2FZbCeIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNC4C161ArHjKshv9yrcA3qWxMHiSRb5HRYz8DphUAl5xMt8L2ECeuWn5JwVTklnQLCoC8F4JJl8zfRKzrspU7hSsqkGknH7vzrOWrg%2FxnRXY4inxRad1vO8WvHfxMvJuX9g9uOmakr6yMQcdMZlZjTl545fpsjN%2Fj695NUwJKVbO1Yab9UmnBrYNfAJ9Ak9dMvbSySc8pup1yYAVsOxW2m6TDsisz6aSospqj1RwdWaPLW8K72fiZ1RemOzBMPYFvkwlSCpGEjOimT%2Bmq7AwkJHwuKSPqmbIoP5aEXVZRGQnpBAqF1V%2Bms6GDPXgtnG5omSU4Bu6JOLsXBT4sZ5ZfwguoyMXwEfZxkBrYNGGfMypTF%2BG2f%2FrhQqaqH%2FBD9xaqJ7JxHhiyJVltnrpeaF8velPeBYtJw8Mr4t8zAXdJHBgiHEbwDD5gSc4EIHlHA9ks56zsFfQlSGthS5UoTSNDmz9AGy4C%2FRx%2FuIfnAy67EQXuWn5BrtRYhCQqrKcw9S%2Fx1Oszz%2FdJlUCHO3XrKzv7F2lVaTQPus%2FcHbawaT8rwrmrCfbeqydUKlfY76mPXOuLWhWMZxzDeycbnnvAUg%2Fhk8prnXjnn9%2BpvzOVc%2FOvGCTPoFGQFTLo3cQB7shVd6JMKRVpu3RbqJRelMMNbtp8MGOqUBE%2FMFavOX2uVgTvqa%2F5Pb%2BW71u7Y9i1L5u8MxfmLFuy9jSC5%2BeCCrDP%2BUNb3r2EpJuZHz7rkBaFvOEt0BdPFxXEw0HYTjiJNDNNuK4x9BhIF0Obf0Au2DLWwCFywO2Ulmip5%2BCEgtE75jq6%2Brc6Ws%2Blr3ZuFdkCrRcziKcovxK4sFcqJhUv89lSATWUO0BW9hHLC8MksFqMjoqzyR32PQnv7Nh2cm&X-Amz-Signature=1855731b0435909a31ab8eb79b24c553ad1bedede9ddf6c3e0c1dd158f7fba22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7S6BQAY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIACd2OMsWPlvn3iqIrr1m0q1Yym1zWCEaRN4x10TZE%2FGAiEA2Q55jDcjcxDJ8w9yKNyxFxES7YDEwQqalrrcB%2FZbCeIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNC4C161ArHjKshv9yrcA3qWxMHiSRb5HRYz8DphUAl5xMt8L2ECeuWn5JwVTklnQLCoC8F4JJl8zfRKzrspU7hSsqkGknH7vzrOWrg%2FxnRXY4inxRad1vO8WvHfxMvJuX9g9uOmakr6yMQcdMZlZjTl545fpsjN%2Fj695NUwJKVbO1Yab9UmnBrYNfAJ9Ak9dMvbSySc8pup1yYAVsOxW2m6TDsisz6aSospqj1RwdWaPLW8K72fiZ1RemOzBMPYFvkwlSCpGEjOimT%2Bmq7AwkJHwuKSPqmbIoP5aEXVZRGQnpBAqF1V%2Bms6GDPXgtnG5omSU4Bu6JOLsXBT4sZ5ZfwguoyMXwEfZxkBrYNGGfMypTF%2BG2f%2FrhQqaqH%2FBD9xaqJ7JxHhiyJVltnrpeaF8velPeBYtJw8Mr4t8zAXdJHBgiHEbwDD5gSc4EIHlHA9ks56zsFfQlSGthS5UoTSNDmz9AGy4C%2FRx%2FuIfnAy67EQXuWn5BrtRYhCQqrKcw9S%2Fx1Oszz%2FdJlUCHO3XrKzv7F2lVaTQPus%2FcHbawaT8rwrmrCfbeqydUKlfY76mPXOuLWhWMZxzDeycbnnvAUg%2Fhk8prnXjnn9%2BpvzOVc%2FOvGCTPoFGQFTLo3cQB7shVd6JMKRVpu3RbqJRelMMNbtp8MGOqUBE%2FMFavOX2uVgTvqa%2F5Pb%2BW71u7Y9i1L5u8MxfmLFuy9jSC5%2BeCCrDP%2BUNb3r2EpJuZHz7rkBaFvOEt0BdPFxXEw0HYTjiJNDNNuK4x9BhIF0Obf0Au2DLWwCFywO2Ulmip5%2BCEgtE75jq6%2Brc6Ws%2Blr3ZuFdkCrRcziKcovxK4sFcqJhUv89lSATWUO0BW9hHLC8MksFqMjoqzyR32PQnv7Nh2cm&X-Amz-Signature=d9d6bb5382691038b1754949d7246b79563b49c504d594df75eaef0408dda9c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7S6BQAY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIACd2OMsWPlvn3iqIrr1m0q1Yym1zWCEaRN4x10TZE%2FGAiEA2Q55jDcjcxDJ8w9yKNyxFxES7YDEwQqalrrcB%2FZbCeIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNC4C161ArHjKshv9yrcA3qWxMHiSRb5HRYz8DphUAl5xMt8L2ECeuWn5JwVTklnQLCoC8F4JJl8zfRKzrspU7hSsqkGknH7vzrOWrg%2FxnRXY4inxRad1vO8WvHfxMvJuX9g9uOmakr6yMQcdMZlZjTl545fpsjN%2Fj695NUwJKVbO1Yab9UmnBrYNfAJ9Ak9dMvbSySc8pup1yYAVsOxW2m6TDsisz6aSospqj1RwdWaPLW8K72fiZ1RemOzBMPYFvkwlSCpGEjOimT%2Bmq7AwkJHwuKSPqmbIoP5aEXVZRGQnpBAqF1V%2Bms6GDPXgtnG5omSU4Bu6JOLsXBT4sZ5ZfwguoyMXwEfZxkBrYNGGfMypTF%2BG2f%2FrhQqaqH%2FBD9xaqJ7JxHhiyJVltnrpeaF8velPeBYtJw8Mr4t8zAXdJHBgiHEbwDD5gSc4EIHlHA9ks56zsFfQlSGthS5UoTSNDmz9AGy4C%2FRx%2FuIfnAy67EQXuWn5BrtRYhCQqrKcw9S%2Fx1Oszz%2FdJlUCHO3XrKzv7F2lVaTQPus%2FcHbawaT8rwrmrCfbeqydUKlfY76mPXOuLWhWMZxzDeycbnnvAUg%2Fhk8prnXjnn9%2BpvzOVc%2FOvGCTPoFGQFTLo3cQB7shVd6JMKRVpu3RbqJRelMMNbtp8MGOqUBE%2FMFavOX2uVgTvqa%2F5Pb%2BW71u7Y9i1L5u8MxfmLFuy9jSC5%2BeCCrDP%2BUNb3r2EpJuZHz7rkBaFvOEt0BdPFxXEw0HYTjiJNDNNuK4x9BhIF0Obf0Au2DLWwCFywO2Ulmip5%2BCEgtE75jq6%2Brc6Ws%2Blr3ZuFdkCrRcziKcovxK4sFcqJhUv89lSATWUO0BW9hHLC8MksFqMjoqzyR32PQnv7Nh2cm&X-Amz-Signature=7b517eda45021ae34cc7fa2af9980dc88ae08a46cbdffc892b4b6621b9892ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7S6BQAY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIACd2OMsWPlvn3iqIrr1m0q1Yym1zWCEaRN4x10TZE%2FGAiEA2Q55jDcjcxDJ8w9yKNyxFxES7YDEwQqalrrcB%2FZbCeIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNC4C161ArHjKshv9yrcA3qWxMHiSRb5HRYz8DphUAl5xMt8L2ECeuWn5JwVTklnQLCoC8F4JJl8zfRKzrspU7hSsqkGknH7vzrOWrg%2FxnRXY4inxRad1vO8WvHfxMvJuX9g9uOmakr6yMQcdMZlZjTl545fpsjN%2Fj695NUwJKVbO1Yab9UmnBrYNfAJ9Ak9dMvbSySc8pup1yYAVsOxW2m6TDsisz6aSospqj1RwdWaPLW8K72fiZ1RemOzBMPYFvkwlSCpGEjOimT%2Bmq7AwkJHwuKSPqmbIoP5aEXVZRGQnpBAqF1V%2Bms6GDPXgtnG5omSU4Bu6JOLsXBT4sZ5ZfwguoyMXwEfZxkBrYNGGfMypTF%2BG2f%2FrhQqaqH%2FBD9xaqJ7JxHhiyJVltnrpeaF8velPeBYtJw8Mr4t8zAXdJHBgiHEbwDD5gSc4EIHlHA9ks56zsFfQlSGthS5UoTSNDmz9AGy4C%2FRx%2FuIfnAy67EQXuWn5BrtRYhCQqrKcw9S%2Fx1Oszz%2FdJlUCHO3XrKzv7F2lVaTQPus%2FcHbawaT8rwrmrCfbeqydUKlfY76mPXOuLWhWMZxzDeycbnnvAUg%2Fhk8prnXjnn9%2BpvzOVc%2FOvGCTPoFGQFTLo3cQB7shVd6JMKRVpu3RbqJRelMMNbtp8MGOqUBE%2FMFavOX2uVgTvqa%2F5Pb%2BW71u7Y9i1L5u8MxfmLFuy9jSC5%2BeCCrDP%2BUNb3r2EpJuZHz7rkBaFvOEt0BdPFxXEw0HYTjiJNDNNuK4x9BhIF0Obf0Au2DLWwCFywO2Ulmip5%2BCEgtE75jq6%2Brc6Ws%2Blr3ZuFdkCrRcziKcovxK4sFcqJhUv89lSATWUO0BW9hHLC8MksFqMjoqzyR32PQnv7Nh2cm&X-Amz-Signature=cec5f4d53110ee20ec9bba8b153092e38e6aa35c09f8568611efc425fc0f1ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7S6BQAY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIACd2OMsWPlvn3iqIrr1m0q1Yym1zWCEaRN4x10TZE%2FGAiEA2Q55jDcjcxDJ8w9yKNyxFxES7YDEwQqalrrcB%2FZbCeIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNC4C161ArHjKshv9yrcA3qWxMHiSRb5HRYz8DphUAl5xMt8L2ECeuWn5JwVTklnQLCoC8F4JJl8zfRKzrspU7hSsqkGknH7vzrOWrg%2FxnRXY4inxRad1vO8WvHfxMvJuX9g9uOmakr6yMQcdMZlZjTl545fpsjN%2Fj695NUwJKVbO1Yab9UmnBrYNfAJ9Ak9dMvbSySc8pup1yYAVsOxW2m6TDsisz6aSospqj1RwdWaPLW8K72fiZ1RemOzBMPYFvkwlSCpGEjOimT%2Bmq7AwkJHwuKSPqmbIoP5aEXVZRGQnpBAqF1V%2Bms6GDPXgtnG5omSU4Bu6JOLsXBT4sZ5ZfwguoyMXwEfZxkBrYNGGfMypTF%2BG2f%2FrhQqaqH%2FBD9xaqJ7JxHhiyJVltnrpeaF8velPeBYtJw8Mr4t8zAXdJHBgiHEbwDD5gSc4EIHlHA9ks56zsFfQlSGthS5UoTSNDmz9AGy4C%2FRx%2FuIfnAy67EQXuWn5BrtRYhCQqrKcw9S%2Fx1Oszz%2FdJlUCHO3XrKzv7F2lVaTQPus%2FcHbawaT8rwrmrCfbeqydUKlfY76mPXOuLWhWMZxzDeycbnnvAUg%2Fhk8prnXjnn9%2BpvzOVc%2FOvGCTPoFGQFTLo3cQB7shVd6JMKRVpu3RbqJRelMMNbtp8MGOqUBE%2FMFavOX2uVgTvqa%2F5Pb%2BW71u7Y9i1L5u8MxfmLFuy9jSC5%2BeCCrDP%2BUNb3r2EpJuZHz7rkBaFvOEt0BdPFxXEw0HYTjiJNDNNuK4x9BhIF0Obf0Au2DLWwCFywO2Ulmip5%2BCEgtE75jq6%2Brc6Ws%2Blr3ZuFdkCrRcziKcovxK4sFcqJhUv89lSATWUO0BW9hHLC8MksFqMjoqzyR32PQnv7Nh2cm&X-Amz-Signature=7517bdd1aef7dfde0f841266513c7ea35ba9d491b91ad190684b357cf6af3650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7S6BQAY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIACd2OMsWPlvn3iqIrr1m0q1Yym1zWCEaRN4x10TZE%2FGAiEA2Q55jDcjcxDJ8w9yKNyxFxES7YDEwQqalrrcB%2FZbCeIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNC4C161ArHjKshv9yrcA3qWxMHiSRb5HRYz8DphUAl5xMt8L2ECeuWn5JwVTklnQLCoC8F4JJl8zfRKzrspU7hSsqkGknH7vzrOWrg%2FxnRXY4inxRad1vO8WvHfxMvJuX9g9uOmakr6yMQcdMZlZjTl545fpsjN%2Fj695NUwJKVbO1Yab9UmnBrYNfAJ9Ak9dMvbSySc8pup1yYAVsOxW2m6TDsisz6aSospqj1RwdWaPLW8K72fiZ1RemOzBMPYFvkwlSCpGEjOimT%2Bmq7AwkJHwuKSPqmbIoP5aEXVZRGQnpBAqF1V%2Bms6GDPXgtnG5omSU4Bu6JOLsXBT4sZ5ZfwguoyMXwEfZxkBrYNGGfMypTF%2BG2f%2FrhQqaqH%2FBD9xaqJ7JxHhiyJVltnrpeaF8velPeBYtJw8Mr4t8zAXdJHBgiHEbwDD5gSc4EIHlHA9ks56zsFfQlSGthS5UoTSNDmz9AGy4C%2FRx%2FuIfnAy67EQXuWn5BrtRYhCQqrKcw9S%2Fx1Oszz%2FdJlUCHO3XrKzv7F2lVaTQPus%2FcHbawaT8rwrmrCfbeqydUKlfY76mPXOuLWhWMZxzDeycbnnvAUg%2Fhk8prnXjnn9%2BpvzOVc%2FOvGCTPoFGQFTLo3cQB7shVd6JMKRVpu3RbqJRelMMNbtp8MGOqUBE%2FMFavOX2uVgTvqa%2F5Pb%2BW71u7Y9i1L5u8MxfmLFuy9jSC5%2BeCCrDP%2BUNb3r2EpJuZHz7rkBaFvOEt0BdPFxXEw0HYTjiJNDNNuK4x9BhIF0Obf0Au2DLWwCFywO2Ulmip5%2BCEgtE75jq6%2Brc6Ws%2Blr3ZuFdkCrRcziKcovxK4sFcqJhUv89lSATWUO0BW9hHLC8MksFqMjoqzyR32PQnv7Nh2cm&X-Amz-Signature=b507ab640806c7d4c8b5a4a59101031844320a652e7f6d0ee4673e1c75b9c445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7S6BQAY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIACd2OMsWPlvn3iqIrr1m0q1Yym1zWCEaRN4x10TZE%2FGAiEA2Q55jDcjcxDJ8w9yKNyxFxES7YDEwQqalrrcB%2FZbCeIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDNC4C161ArHjKshv9yrcA3qWxMHiSRb5HRYz8DphUAl5xMt8L2ECeuWn5JwVTklnQLCoC8F4JJl8zfRKzrspU7hSsqkGknH7vzrOWrg%2FxnRXY4inxRad1vO8WvHfxMvJuX9g9uOmakr6yMQcdMZlZjTl545fpsjN%2Fj695NUwJKVbO1Yab9UmnBrYNfAJ9Ak9dMvbSySc8pup1yYAVsOxW2m6TDsisz6aSospqj1RwdWaPLW8K72fiZ1RemOzBMPYFvkwlSCpGEjOimT%2Bmq7AwkJHwuKSPqmbIoP5aEXVZRGQnpBAqF1V%2Bms6GDPXgtnG5omSU4Bu6JOLsXBT4sZ5ZfwguoyMXwEfZxkBrYNGGfMypTF%2BG2f%2FrhQqaqH%2FBD9xaqJ7JxHhiyJVltnrpeaF8velPeBYtJw8Mr4t8zAXdJHBgiHEbwDD5gSc4EIHlHA9ks56zsFfQlSGthS5UoTSNDmz9AGy4C%2FRx%2FuIfnAy67EQXuWn5BrtRYhCQqrKcw9S%2Fx1Oszz%2FdJlUCHO3XrKzv7F2lVaTQPus%2FcHbawaT8rwrmrCfbeqydUKlfY76mPXOuLWhWMZxzDeycbnnvAUg%2Fhk8prnXjnn9%2BpvzOVc%2FOvGCTPoFGQFTLo3cQB7shVd6JMKRVpu3RbqJRelMMNbtp8MGOqUBE%2FMFavOX2uVgTvqa%2F5Pb%2BW71u7Y9i1L5u8MxfmLFuy9jSC5%2BeCCrDP%2BUNb3r2EpJuZHz7rkBaFvOEt0BdPFxXEw0HYTjiJNDNNuK4x9BhIF0Obf0Au2DLWwCFywO2Ulmip5%2BCEgtE75jq6%2Brc6Ws%2Blr3ZuFdkCrRcziKcovxK4sFcqJhUv89lSATWUO0BW9hHLC8MksFqMjoqzyR32PQnv7Nh2cm&X-Amz-Signature=5fa4b037e9c3954dc0b27f09d9f561ad6ac0dbb52644a57c21f1e291dcf46173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
