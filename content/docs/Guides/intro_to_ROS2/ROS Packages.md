---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3XQKKH7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDV5mTv9r2sBLwzVS35T0L02lX4jyau8bvsbCD3HrqjNQIhANIKQyJ2vP6t%2BWoIHzsgUaHLvjP0iQxk15VlI5IFgmOpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnmWZJgGV6tFHDbEwq3APjF5Nn8qIAMqXo4NuNGuKrgpug3OHDPJtky%2FsLBsIt%2BoeHiDj42ppbYkVyDLDAfaQJBPLVWxAne9EYDiHuGIk%2FNr5IKPegHIknsxP2AIJBxVpAbiAQ47JoAq1KIrftQEpS3tTMnM3zkciq6SUWll39SY1OK%2FsKHwYE6NUDHr3fnwGzn%2FjwFJbmWD2Gi8LTsdfgDZWVzNjjNUHZxEByX6n0TqqzIRx7pxcA8j6W24k4t3yG%2BOfLQQKY5WDIqJn2QINCQCYDfn%2BFwX53H34nxQur2uPA3%2F%2F5gDuCaqHgQolWBRTB0lJhmGquOC1y9LH2V%2FCTRSLYb2zyywEtINpYcmhvGCVTR6BD4YDhvYsrdFC43ZbPibDI1i0UTSx3CnnpfkUgYTqX2NXYy%2FJ8yk9hAzUpMGUuSkA1mXQ6I%2BnVgPsNWH3RkNV6Q20LS6KA0iyU5WQDwQO%2BY7cs65DkpTEnU6K8Eja%2FRzeAa1EfdOvJeLsjOqcH%2BX0SfNIrLRG19Rn%2B3AmskvXCOoF2SMCnW%2BEgCW1D%2B488a7uvaagIP4UaQguv05W7%2F5I23Bhf1lWqHUW8BXkyDhJDR477%2FyPka6ClhjzvnfQsOwe9cyArD0uWlPl8AOGQ6DN%2F7rbJVsHNXDDvktfEBjqkAQhHIn%2FPkmIAGSA%2FF%2F76s94CSQs%2BOT9xLsFg4%2Fe1r6wvaO7%2BaDmpDDFg1j6KUgRcI7EwbpBLROqelidNEm8v42qfA8xm52J51dY4fdEz%2BrR8OVzniSWrwNrxrgajqoNSot9MiGe%2BPiwxFZdo9HVH1vlylJXyHFJOjFvi9rpZ%2F9UQo7%2FbexmPomBekaG7eh31uDpA1JZVdfFRiFWagCCoGEl5ggAS&X-Amz-Signature=7b332c1c215872484058cd7c192579ef893ad0540f59fc1b33de0e39f1f750ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3XQKKH7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDV5mTv9r2sBLwzVS35T0L02lX4jyau8bvsbCD3HrqjNQIhANIKQyJ2vP6t%2BWoIHzsgUaHLvjP0iQxk15VlI5IFgmOpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnmWZJgGV6tFHDbEwq3APjF5Nn8qIAMqXo4NuNGuKrgpug3OHDPJtky%2FsLBsIt%2BoeHiDj42ppbYkVyDLDAfaQJBPLVWxAne9EYDiHuGIk%2FNr5IKPegHIknsxP2AIJBxVpAbiAQ47JoAq1KIrftQEpS3tTMnM3zkciq6SUWll39SY1OK%2FsKHwYE6NUDHr3fnwGzn%2FjwFJbmWD2Gi8LTsdfgDZWVzNjjNUHZxEByX6n0TqqzIRx7pxcA8j6W24k4t3yG%2BOfLQQKY5WDIqJn2QINCQCYDfn%2BFwX53H34nxQur2uPA3%2F%2F5gDuCaqHgQolWBRTB0lJhmGquOC1y9LH2V%2FCTRSLYb2zyywEtINpYcmhvGCVTR6BD4YDhvYsrdFC43ZbPibDI1i0UTSx3CnnpfkUgYTqX2NXYy%2FJ8yk9hAzUpMGUuSkA1mXQ6I%2BnVgPsNWH3RkNV6Q20LS6KA0iyU5WQDwQO%2BY7cs65DkpTEnU6K8Eja%2FRzeAa1EfdOvJeLsjOqcH%2BX0SfNIrLRG19Rn%2B3AmskvXCOoF2SMCnW%2BEgCW1D%2B488a7uvaagIP4UaQguv05W7%2F5I23Bhf1lWqHUW8BXkyDhJDR477%2FyPka6ClhjzvnfQsOwe9cyArD0uWlPl8AOGQ6DN%2F7rbJVsHNXDDvktfEBjqkAQhHIn%2FPkmIAGSA%2FF%2F76s94CSQs%2BOT9xLsFg4%2Fe1r6wvaO7%2BaDmpDDFg1j6KUgRcI7EwbpBLROqelidNEm8v42qfA8xm52J51dY4fdEz%2BrR8OVzniSWrwNrxrgajqoNSot9MiGe%2BPiwxFZdo9HVH1vlylJXyHFJOjFvi9rpZ%2F9UQo7%2FbexmPomBekaG7eh31uDpA1JZVdfFRiFWagCCoGEl5ggAS&X-Amz-Signature=2a8d5a51ad28792ea3c23128a20e245ec861c16a29da2117729dd21a65e443eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3XQKKH7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDV5mTv9r2sBLwzVS35T0L02lX4jyau8bvsbCD3HrqjNQIhANIKQyJ2vP6t%2BWoIHzsgUaHLvjP0iQxk15VlI5IFgmOpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnmWZJgGV6tFHDbEwq3APjF5Nn8qIAMqXo4NuNGuKrgpug3OHDPJtky%2FsLBsIt%2BoeHiDj42ppbYkVyDLDAfaQJBPLVWxAne9EYDiHuGIk%2FNr5IKPegHIknsxP2AIJBxVpAbiAQ47JoAq1KIrftQEpS3tTMnM3zkciq6SUWll39SY1OK%2FsKHwYE6NUDHr3fnwGzn%2FjwFJbmWD2Gi8LTsdfgDZWVzNjjNUHZxEByX6n0TqqzIRx7pxcA8j6W24k4t3yG%2BOfLQQKY5WDIqJn2QINCQCYDfn%2BFwX53H34nxQur2uPA3%2F%2F5gDuCaqHgQolWBRTB0lJhmGquOC1y9LH2V%2FCTRSLYb2zyywEtINpYcmhvGCVTR6BD4YDhvYsrdFC43ZbPibDI1i0UTSx3CnnpfkUgYTqX2NXYy%2FJ8yk9hAzUpMGUuSkA1mXQ6I%2BnVgPsNWH3RkNV6Q20LS6KA0iyU5WQDwQO%2BY7cs65DkpTEnU6K8Eja%2FRzeAa1EfdOvJeLsjOqcH%2BX0SfNIrLRG19Rn%2B3AmskvXCOoF2SMCnW%2BEgCW1D%2B488a7uvaagIP4UaQguv05W7%2F5I23Bhf1lWqHUW8BXkyDhJDR477%2FyPka6ClhjzvnfQsOwe9cyArD0uWlPl8AOGQ6DN%2F7rbJVsHNXDDvktfEBjqkAQhHIn%2FPkmIAGSA%2FF%2F76s94CSQs%2BOT9xLsFg4%2Fe1r6wvaO7%2BaDmpDDFg1j6KUgRcI7EwbpBLROqelidNEm8v42qfA8xm52J51dY4fdEz%2BrR8OVzniSWrwNrxrgajqoNSot9MiGe%2BPiwxFZdo9HVH1vlylJXyHFJOjFvi9rpZ%2F9UQo7%2FbexmPomBekaG7eh31uDpA1JZVdfFRiFWagCCoGEl5ggAS&X-Amz-Signature=916d060e2b4ec8245152c3bccc1ada31218abe2e9a0681ffc8898d48ba1a8ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3XQKKH7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDV5mTv9r2sBLwzVS35T0L02lX4jyau8bvsbCD3HrqjNQIhANIKQyJ2vP6t%2BWoIHzsgUaHLvjP0iQxk15VlI5IFgmOpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnmWZJgGV6tFHDbEwq3APjF5Nn8qIAMqXo4NuNGuKrgpug3OHDPJtky%2FsLBsIt%2BoeHiDj42ppbYkVyDLDAfaQJBPLVWxAne9EYDiHuGIk%2FNr5IKPegHIknsxP2AIJBxVpAbiAQ47JoAq1KIrftQEpS3tTMnM3zkciq6SUWll39SY1OK%2FsKHwYE6NUDHr3fnwGzn%2FjwFJbmWD2Gi8LTsdfgDZWVzNjjNUHZxEByX6n0TqqzIRx7pxcA8j6W24k4t3yG%2BOfLQQKY5WDIqJn2QINCQCYDfn%2BFwX53H34nxQur2uPA3%2F%2F5gDuCaqHgQolWBRTB0lJhmGquOC1y9LH2V%2FCTRSLYb2zyywEtINpYcmhvGCVTR6BD4YDhvYsrdFC43ZbPibDI1i0UTSx3CnnpfkUgYTqX2NXYy%2FJ8yk9hAzUpMGUuSkA1mXQ6I%2BnVgPsNWH3RkNV6Q20LS6KA0iyU5WQDwQO%2BY7cs65DkpTEnU6K8Eja%2FRzeAa1EfdOvJeLsjOqcH%2BX0SfNIrLRG19Rn%2B3AmskvXCOoF2SMCnW%2BEgCW1D%2B488a7uvaagIP4UaQguv05W7%2F5I23Bhf1lWqHUW8BXkyDhJDR477%2FyPka6ClhjzvnfQsOwe9cyArD0uWlPl8AOGQ6DN%2F7rbJVsHNXDDvktfEBjqkAQhHIn%2FPkmIAGSA%2FF%2F76s94CSQs%2BOT9xLsFg4%2Fe1r6wvaO7%2BaDmpDDFg1j6KUgRcI7EwbpBLROqelidNEm8v42qfA8xm52J51dY4fdEz%2BrR8OVzniSWrwNrxrgajqoNSot9MiGe%2BPiwxFZdo9HVH1vlylJXyHFJOjFvi9rpZ%2F9UQo7%2FbexmPomBekaG7eh31uDpA1JZVdfFRiFWagCCoGEl5ggAS&X-Amz-Signature=08463873e60c9bc16d0791f8ffbe57b1f1de2ffb641b4184a0d93b27873a1643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3XQKKH7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDV5mTv9r2sBLwzVS35T0L02lX4jyau8bvsbCD3HrqjNQIhANIKQyJ2vP6t%2BWoIHzsgUaHLvjP0iQxk15VlI5IFgmOpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnmWZJgGV6tFHDbEwq3APjF5Nn8qIAMqXo4NuNGuKrgpug3OHDPJtky%2FsLBsIt%2BoeHiDj42ppbYkVyDLDAfaQJBPLVWxAne9EYDiHuGIk%2FNr5IKPegHIknsxP2AIJBxVpAbiAQ47JoAq1KIrftQEpS3tTMnM3zkciq6SUWll39SY1OK%2FsKHwYE6NUDHr3fnwGzn%2FjwFJbmWD2Gi8LTsdfgDZWVzNjjNUHZxEByX6n0TqqzIRx7pxcA8j6W24k4t3yG%2BOfLQQKY5WDIqJn2QINCQCYDfn%2BFwX53H34nxQur2uPA3%2F%2F5gDuCaqHgQolWBRTB0lJhmGquOC1y9LH2V%2FCTRSLYb2zyywEtINpYcmhvGCVTR6BD4YDhvYsrdFC43ZbPibDI1i0UTSx3CnnpfkUgYTqX2NXYy%2FJ8yk9hAzUpMGUuSkA1mXQ6I%2BnVgPsNWH3RkNV6Q20LS6KA0iyU5WQDwQO%2BY7cs65DkpTEnU6K8Eja%2FRzeAa1EfdOvJeLsjOqcH%2BX0SfNIrLRG19Rn%2B3AmskvXCOoF2SMCnW%2BEgCW1D%2B488a7uvaagIP4UaQguv05W7%2F5I23Bhf1lWqHUW8BXkyDhJDR477%2FyPka6ClhjzvnfQsOwe9cyArD0uWlPl8AOGQ6DN%2F7rbJVsHNXDDvktfEBjqkAQhHIn%2FPkmIAGSA%2FF%2F76s94CSQs%2BOT9xLsFg4%2Fe1r6wvaO7%2BaDmpDDFg1j6KUgRcI7EwbpBLROqelidNEm8v42qfA8xm52J51dY4fdEz%2BrR8OVzniSWrwNrxrgajqoNSot9MiGe%2BPiwxFZdo9HVH1vlylJXyHFJOjFvi9rpZ%2F9UQo7%2FbexmPomBekaG7eh31uDpA1JZVdfFRiFWagCCoGEl5ggAS&X-Amz-Signature=a9437c52c960866c179f538de9c7f88e7b715e5ca2a78f3403da83ac70cc65a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3XQKKH7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDV5mTv9r2sBLwzVS35T0L02lX4jyau8bvsbCD3HrqjNQIhANIKQyJ2vP6t%2BWoIHzsgUaHLvjP0iQxk15VlI5IFgmOpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnmWZJgGV6tFHDbEwq3APjF5Nn8qIAMqXo4NuNGuKrgpug3OHDPJtky%2FsLBsIt%2BoeHiDj42ppbYkVyDLDAfaQJBPLVWxAne9EYDiHuGIk%2FNr5IKPegHIknsxP2AIJBxVpAbiAQ47JoAq1KIrftQEpS3tTMnM3zkciq6SUWll39SY1OK%2FsKHwYE6NUDHr3fnwGzn%2FjwFJbmWD2Gi8LTsdfgDZWVzNjjNUHZxEByX6n0TqqzIRx7pxcA8j6W24k4t3yG%2BOfLQQKY5WDIqJn2QINCQCYDfn%2BFwX53H34nxQur2uPA3%2F%2F5gDuCaqHgQolWBRTB0lJhmGquOC1y9LH2V%2FCTRSLYb2zyywEtINpYcmhvGCVTR6BD4YDhvYsrdFC43ZbPibDI1i0UTSx3CnnpfkUgYTqX2NXYy%2FJ8yk9hAzUpMGUuSkA1mXQ6I%2BnVgPsNWH3RkNV6Q20LS6KA0iyU5WQDwQO%2BY7cs65DkpTEnU6K8Eja%2FRzeAa1EfdOvJeLsjOqcH%2BX0SfNIrLRG19Rn%2B3AmskvXCOoF2SMCnW%2BEgCW1D%2B488a7uvaagIP4UaQguv05W7%2F5I23Bhf1lWqHUW8BXkyDhJDR477%2FyPka6ClhjzvnfQsOwe9cyArD0uWlPl8AOGQ6DN%2F7rbJVsHNXDDvktfEBjqkAQhHIn%2FPkmIAGSA%2FF%2F76s94CSQs%2BOT9xLsFg4%2Fe1r6wvaO7%2BaDmpDDFg1j6KUgRcI7EwbpBLROqelidNEm8v42qfA8xm52J51dY4fdEz%2BrR8OVzniSWrwNrxrgajqoNSot9MiGe%2BPiwxFZdo9HVH1vlylJXyHFJOjFvi9rpZ%2F9UQo7%2FbexmPomBekaG7eh31uDpA1JZVdfFRiFWagCCoGEl5ggAS&X-Amz-Signature=11d67c944505689d1c3c34d458458b731db8a678025438dba48aa0c4a384e87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3XQKKH7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDV5mTv9r2sBLwzVS35T0L02lX4jyau8bvsbCD3HrqjNQIhANIKQyJ2vP6t%2BWoIHzsgUaHLvjP0iQxk15VlI5IFgmOpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnmWZJgGV6tFHDbEwq3APjF5Nn8qIAMqXo4NuNGuKrgpug3OHDPJtky%2FsLBsIt%2BoeHiDj42ppbYkVyDLDAfaQJBPLVWxAne9EYDiHuGIk%2FNr5IKPegHIknsxP2AIJBxVpAbiAQ47JoAq1KIrftQEpS3tTMnM3zkciq6SUWll39SY1OK%2FsKHwYE6NUDHr3fnwGzn%2FjwFJbmWD2Gi8LTsdfgDZWVzNjjNUHZxEByX6n0TqqzIRx7pxcA8j6W24k4t3yG%2BOfLQQKY5WDIqJn2QINCQCYDfn%2BFwX53H34nxQur2uPA3%2F%2F5gDuCaqHgQolWBRTB0lJhmGquOC1y9LH2V%2FCTRSLYb2zyywEtINpYcmhvGCVTR6BD4YDhvYsrdFC43ZbPibDI1i0UTSx3CnnpfkUgYTqX2NXYy%2FJ8yk9hAzUpMGUuSkA1mXQ6I%2BnVgPsNWH3RkNV6Q20LS6KA0iyU5WQDwQO%2BY7cs65DkpTEnU6K8Eja%2FRzeAa1EfdOvJeLsjOqcH%2BX0SfNIrLRG19Rn%2B3AmskvXCOoF2SMCnW%2BEgCW1D%2B488a7uvaagIP4UaQguv05W7%2F5I23Bhf1lWqHUW8BXkyDhJDR477%2FyPka6ClhjzvnfQsOwe9cyArD0uWlPl8AOGQ6DN%2F7rbJVsHNXDDvktfEBjqkAQhHIn%2FPkmIAGSA%2FF%2F76s94CSQs%2BOT9xLsFg4%2Fe1r6wvaO7%2BaDmpDDFg1j6KUgRcI7EwbpBLROqelidNEm8v42qfA8xm52J51dY4fdEz%2BrR8OVzniSWrwNrxrgajqoNSot9MiGe%2BPiwxFZdo9HVH1vlylJXyHFJOjFvi9rpZ%2F9UQo7%2FbexmPomBekaG7eh31uDpA1JZVdfFRiFWagCCoGEl5ggAS&X-Amz-Signature=e39fb630753c27a67a7bb714fd36e22c4c0b9f59d6ffd972a7a3d06c9a1b3c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
