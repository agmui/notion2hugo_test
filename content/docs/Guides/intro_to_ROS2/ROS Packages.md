---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMOKIN3P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCYFTji7wRDZ3Rsr2XEp6GeOae70HIERCLUoxGNyVodCAIgJMFrz5IzqtKcYyWTEgiQG8gwmNO1e16TqYj2kTy1Ri0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKnqTWyeEYO%2FuEAPKyrcA%2FjgSA9C2G0LiUc6HY0YgfRm18xWyfyTfmtRVQlYHO0SMy%2B59yweJyyPpa3iVABHaHD9h%2BfrRy0uZ6WEFK8wDoV3LPH5FirRcRiud91gGiw4IwIo%2FJCySatMOcVvsb2uZhy784Y9acwVX3d4wVMYzsMo8LNbsoUFlXQB%2BORC6tY5ycYRJh17k%2F7xPR5hvF%2BuUtleyacMyeWBaeE22Mbm8zAC%2FTSItHbQqmvDyeY%2B2s7pOIuJxftUWlrQ3OOjO6t6DMbVN2bp%2BB4XcbEHLN9LzkWMzAK7HyxBlTaNEGfX7CJd0EIcQEI%2F7lydsZzk8SZI0Dncslmamc5w%2F6lgSNT%2FI3WlVVox%2B2f2uDLOW9D8KNDqxZmAuUpPG4lj9lT1i6vhnj2YtlmhLyXOxXSnP3Xw0blbIwhEH9SeLWVbq2dA6qBg8Lx07xn3PKR9nTD6v33eWGpM%2F6IAVeHtrEPKR1qeTwD5ziFIUgf7ITLc5aeftkd1C4bL1hrro7pPhthY959cHdTphfjS4wmaM6GzWD208esM6J7BGeIvZ01o8KT2lecGD7XVcp1ya0%2FSj9jKnacTXQz4l3E8CjU7cZ1H4K4h%2FkQdr8uwaMyf9%2B6MmTPc31CdDQ2otAWjrgIePbRHMJLY%2FsQGOqUBNEX6eMadcTkWR7fL9UMi%2FAUPpURhRg5wjTR2QPeKH3h2xUmH%2F5etUp7abBn9qSOK0DW4fsxzO%2F3HvfF2OTB2wUiOKXlJCcRe4egMdqKL7HPW7%2FUowLFjiyrRSB%2BKfyuQs8fMIRfrA0w8LoLtSZ1aHlaNZ6kws8lqbH3VP2UPwFj2a5pY9YQJsoZSJa%2FaNEIQXzOpP83C2sLGwnWsQsm1jvplz5ix&X-Amz-Signature=5889174643045c18aee5a58e44c8efa359c732e5d53596e0e8ccf05dad98000f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMOKIN3P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCYFTji7wRDZ3Rsr2XEp6GeOae70HIERCLUoxGNyVodCAIgJMFrz5IzqtKcYyWTEgiQG8gwmNO1e16TqYj2kTy1Ri0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKnqTWyeEYO%2FuEAPKyrcA%2FjgSA9C2G0LiUc6HY0YgfRm18xWyfyTfmtRVQlYHO0SMy%2B59yweJyyPpa3iVABHaHD9h%2BfrRy0uZ6WEFK8wDoV3LPH5FirRcRiud91gGiw4IwIo%2FJCySatMOcVvsb2uZhy784Y9acwVX3d4wVMYzsMo8LNbsoUFlXQB%2BORC6tY5ycYRJh17k%2F7xPR5hvF%2BuUtleyacMyeWBaeE22Mbm8zAC%2FTSItHbQqmvDyeY%2B2s7pOIuJxftUWlrQ3OOjO6t6DMbVN2bp%2BB4XcbEHLN9LzkWMzAK7HyxBlTaNEGfX7CJd0EIcQEI%2F7lydsZzk8SZI0Dncslmamc5w%2F6lgSNT%2FI3WlVVox%2B2f2uDLOW9D8KNDqxZmAuUpPG4lj9lT1i6vhnj2YtlmhLyXOxXSnP3Xw0blbIwhEH9SeLWVbq2dA6qBg8Lx07xn3PKR9nTD6v33eWGpM%2F6IAVeHtrEPKR1qeTwD5ziFIUgf7ITLc5aeftkd1C4bL1hrro7pPhthY959cHdTphfjS4wmaM6GzWD208esM6J7BGeIvZ01o8KT2lecGD7XVcp1ya0%2FSj9jKnacTXQz4l3E8CjU7cZ1H4K4h%2FkQdr8uwaMyf9%2B6MmTPc31CdDQ2otAWjrgIePbRHMJLY%2FsQGOqUBNEX6eMadcTkWR7fL9UMi%2FAUPpURhRg5wjTR2QPeKH3h2xUmH%2F5etUp7abBn9qSOK0DW4fsxzO%2F3HvfF2OTB2wUiOKXlJCcRe4egMdqKL7HPW7%2FUowLFjiyrRSB%2BKfyuQs8fMIRfrA0w8LoLtSZ1aHlaNZ6kws8lqbH3VP2UPwFj2a5pY9YQJsoZSJa%2FaNEIQXzOpP83C2sLGwnWsQsm1jvplz5ix&X-Amz-Signature=76e21cee1d8e1d9fb3f0e3c939cb4ef98b9796c2e17c37a21af515a3183021da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMOKIN3P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCYFTji7wRDZ3Rsr2XEp6GeOae70HIERCLUoxGNyVodCAIgJMFrz5IzqtKcYyWTEgiQG8gwmNO1e16TqYj2kTy1Ri0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKnqTWyeEYO%2FuEAPKyrcA%2FjgSA9C2G0LiUc6HY0YgfRm18xWyfyTfmtRVQlYHO0SMy%2B59yweJyyPpa3iVABHaHD9h%2BfrRy0uZ6WEFK8wDoV3LPH5FirRcRiud91gGiw4IwIo%2FJCySatMOcVvsb2uZhy784Y9acwVX3d4wVMYzsMo8LNbsoUFlXQB%2BORC6tY5ycYRJh17k%2F7xPR5hvF%2BuUtleyacMyeWBaeE22Mbm8zAC%2FTSItHbQqmvDyeY%2B2s7pOIuJxftUWlrQ3OOjO6t6DMbVN2bp%2BB4XcbEHLN9LzkWMzAK7HyxBlTaNEGfX7CJd0EIcQEI%2F7lydsZzk8SZI0Dncslmamc5w%2F6lgSNT%2FI3WlVVox%2B2f2uDLOW9D8KNDqxZmAuUpPG4lj9lT1i6vhnj2YtlmhLyXOxXSnP3Xw0blbIwhEH9SeLWVbq2dA6qBg8Lx07xn3PKR9nTD6v33eWGpM%2F6IAVeHtrEPKR1qeTwD5ziFIUgf7ITLc5aeftkd1C4bL1hrro7pPhthY959cHdTphfjS4wmaM6GzWD208esM6J7BGeIvZ01o8KT2lecGD7XVcp1ya0%2FSj9jKnacTXQz4l3E8CjU7cZ1H4K4h%2FkQdr8uwaMyf9%2B6MmTPc31CdDQ2otAWjrgIePbRHMJLY%2FsQGOqUBNEX6eMadcTkWR7fL9UMi%2FAUPpURhRg5wjTR2QPeKH3h2xUmH%2F5etUp7abBn9qSOK0DW4fsxzO%2F3HvfF2OTB2wUiOKXlJCcRe4egMdqKL7HPW7%2FUowLFjiyrRSB%2BKfyuQs8fMIRfrA0w8LoLtSZ1aHlaNZ6kws8lqbH3VP2UPwFj2a5pY9YQJsoZSJa%2FaNEIQXzOpP83C2sLGwnWsQsm1jvplz5ix&X-Amz-Signature=3e8cb01579b1759818a07501b03e11ca8c2e44d1e2f475df6c73ce27869ba6e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMOKIN3P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCYFTji7wRDZ3Rsr2XEp6GeOae70HIERCLUoxGNyVodCAIgJMFrz5IzqtKcYyWTEgiQG8gwmNO1e16TqYj2kTy1Ri0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKnqTWyeEYO%2FuEAPKyrcA%2FjgSA9C2G0LiUc6HY0YgfRm18xWyfyTfmtRVQlYHO0SMy%2B59yweJyyPpa3iVABHaHD9h%2BfrRy0uZ6WEFK8wDoV3LPH5FirRcRiud91gGiw4IwIo%2FJCySatMOcVvsb2uZhy784Y9acwVX3d4wVMYzsMo8LNbsoUFlXQB%2BORC6tY5ycYRJh17k%2F7xPR5hvF%2BuUtleyacMyeWBaeE22Mbm8zAC%2FTSItHbQqmvDyeY%2B2s7pOIuJxftUWlrQ3OOjO6t6DMbVN2bp%2BB4XcbEHLN9LzkWMzAK7HyxBlTaNEGfX7CJd0EIcQEI%2F7lydsZzk8SZI0Dncslmamc5w%2F6lgSNT%2FI3WlVVox%2B2f2uDLOW9D8KNDqxZmAuUpPG4lj9lT1i6vhnj2YtlmhLyXOxXSnP3Xw0blbIwhEH9SeLWVbq2dA6qBg8Lx07xn3PKR9nTD6v33eWGpM%2F6IAVeHtrEPKR1qeTwD5ziFIUgf7ITLc5aeftkd1C4bL1hrro7pPhthY959cHdTphfjS4wmaM6GzWD208esM6J7BGeIvZ01o8KT2lecGD7XVcp1ya0%2FSj9jKnacTXQz4l3E8CjU7cZ1H4K4h%2FkQdr8uwaMyf9%2B6MmTPc31CdDQ2otAWjrgIePbRHMJLY%2FsQGOqUBNEX6eMadcTkWR7fL9UMi%2FAUPpURhRg5wjTR2QPeKH3h2xUmH%2F5etUp7abBn9qSOK0DW4fsxzO%2F3HvfF2OTB2wUiOKXlJCcRe4egMdqKL7HPW7%2FUowLFjiyrRSB%2BKfyuQs8fMIRfrA0w8LoLtSZ1aHlaNZ6kws8lqbH3VP2UPwFj2a5pY9YQJsoZSJa%2FaNEIQXzOpP83C2sLGwnWsQsm1jvplz5ix&X-Amz-Signature=c4540c4196375aae1afc962781d0253fd52a665893cc825059b3fa301f5dc923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMOKIN3P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCYFTji7wRDZ3Rsr2XEp6GeOae70HIERCLUoxGNyVodCAIgJMFrz5IzqtKcYyWTEgiQG8gwmNO1e16TqYj2kTy1Ri0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKnqTWyeEYO%2FuEAPKyrcA%2FjgSA9C2G0LiUc6HY0YgfRm18xWyfyTfmtRVQlYHO0SMy%2B59yweJyyPpa3iVABHaHD9h%2BfrRy0uZ6WEFK8wDoV3LPH5FirRcRiud91gGiw4IwIo%2FJCySatMOcVvsb2uZhy784Y9acwVX3d4wVMYzsMo8LNbsoUFlXQB%2BORC6tY5ycYRJh17k%2F7xPR5hvF%2BuUtleyacMyeWBaeE22Mbm8zAC%2FTSItHbQqmvDyeY%2B2s7pOIuJxftUWlrQ3OOjO6t6DMbVN2bp%2BB4XcbEHLN9LzkWMzAK7HyxBlTaNEGfX7CJd0EIcQEI%2F7lydsZzk8SZI0Dncslmamc5w%2F6lgSNT%2FI3WlVVox%2B2f2uDLOW9D8KNDqxZmAuUpPG4lj9lT1i6vhnj2YtlmhLyXOxXSnP3Xw0blbIwhEH9SeLWVbq2dA6qBg8Lx07xn3PKR9nTD6v33eWGpM%2F6IAVeHtrEPKR1qeTwD5ziFIUgf7ITLc5aeftkd1C4bL1hrro7pPhthY959cHdTphfjS4wmaM6GzWD208esM6J7BGeIvZ01o8KT2lecGD7XVcp1ya0%2FSj9jKnacTXQz4l3E8CjU7cZ1H4K4h%2FkQdr8uwaMyf9%2B6MmTPc31CdDQ2otAWjrgIePbRHMJLY%2FsQGOqUBNEX6eMadcTkWR7fL9UMi%2FAUPpURhRg5wjTR2QPeKH3h2xUmH%2F5etUp7abBn9qSOK0DW4fsxzO%2F3HvfF2OTB2wUiOKXlJCcRe4egMdqKL7HPW7%2FUowLFjiyrRSB%2BKfyuQs8fMIRfrA0w8LoLtSZ1aHlaNZ6kws8lqbH3VP2UPwFj2a5pY9YQJsoZSJa%2FaNEIQXzOpP83C2sLGwnWsQsm1jvplz5ix&X-Amz-Signature=69b968af821f42c3df7f93d5f96428a8ebeebdd79107916fd67230d0bc800444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMOKIN3P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCYFTji7wRDZ3Rsr2XEp6GeOae70HIERCLUoxGNyVodCAIgJMFrz5IzqtKcYyWTEgiQG8gwmNO1e16TqYj2kTy1Ri0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKnqTWyeEYO%2FuEAPKyrcA%2FjgSA9C2G0LiUc6HY0YgfRm18xWyfyTfmtRVQlYHO0SMy%2B59yweJyyPpa3iVABHaHD9h%2BfrRy0uZ6WEFK8wDoV3LPH5FirRcRiud91gGiw4IwIo%2FJCySatMOcVvsb2uZhy784Y9acwVX3d4wVMYzsMo8LNbsoUFlXQB%2BORC6tY5ycYRJh17k%2F7xPR5hvF%2BuUtleyacMyeWBaeE22Mbm8zAC%2FTSItHbQqmvDyeY%2B2s7pOIuJxftUWlrQ3OOjO6t6DMbVN2bp%2BB4XcbEHLN9LzkWMzAK7HyxBlTaNEGfX7CJd0EIcQEI%2F7lydsZzk8SZI0Dncslmamc5w%2F6lgSNT%2FI3WlVVox%2B2f2uDLOW9D8KNDqxZmAuUpPG4lj9lT1i6vhnj2YtlmhLyXOxXSnP3Xw0blbIwhEH9SeLWVbq2dA6qBg8Lx07xn3PKR9nTD6v33eWGpM%2F6IAVeHtrEPKR1qeTwD5ziFIUgf7ITLc5aeftkd1C4bL1hrro7pPhthY959cHdTphfjS4wmaM6GzWD208esM6J7BGeIvZ01o8KT2lecGD7XVcp1ya0%2FSj9jKnacTXQz4l3E8CjU7cZ1H4K4h%2FkQdr8uwaMyf9%2B6MmTPc31CdDQ2otAWjrgIePbRHMJLY%2FsQGOqUBNEX6eMadcTkWR7fL9UMi%2FAUPpURhRg5wjTR2QPeKH3h2xUmH%2F5etUp7abBn9qSOK0DW4fsxzO%2F3HvfF2OTB2wUiOKXlJCcRe4egMdqKL7HPW7%2FUowLFjiyrRSB%2BKfyuQs8fMIRfrA0w8LoLtSZ1aHlaNZ6kws8lqbH3VP2UPwFj2a5pY9YQJsoZSJa%2FaNEIQXzOpP83C2sLGwnWsQsm1jvplz5ix&X-Amz-Signature=40a16828ed035ff717fd321a2a392641c1ba270ecbc50be63e13117eda0540aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMOKIN3P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCYFTji7wRDZ3Rsr2XEp6GeOae70HIERCLUoxGNyVodCAIgJMFrz5IzqtKcYyWTEgiQG8gwmNO1e16TqYj2kTy1Ri0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKnqTWyeEYO%2FuEAPKyrcA%2FjgSA9C2G0LiUc6HY0YgfRm18xWyfyTfmtRVQlYHO0SMy%2B59yweJyyPpa3iVABHaHD9h%2BfrRy0uZ6WEFK8wDoV3LPH5FirRcRiud91gGiw4IwIo%2FJCySatMOcVvsb2uZhy784Y9acwVX3d4wVMYzsMo8LNbsoUFlXQB%2BORC6tY5ycYRJh17k%2F7xPR5hvF%2BuUtleyacMyeWBaeE22Mbm8zAC%2FTSItHbQqmvDyeY%2B2s7pOIuJxftUWlrQ3OOjO6t6DMbVN2bp%2BB4XcbEHLN9LzkWMzAK7HyxBlTaNEGfX7CJd0EIcQEI%2F7lydsZzk8SZI0Dncslmamc5w%2F6lgSNT%2FI3WlVVox%2B2f2uDLOW9D8KNDqxZmAuUpPG4lj9lT1i6vhnj2YtlmhLyXOxXSnP3Xw0blbIwhEH9SeLWVbq2dA6qBg8Lx07xn3PKR9nTD6v33eWGpM%2F6IAVeHtrEPKR1qeTwD5ziFIUgf7ITLc5aeftkd1C4bL1hrro7pPhthY959cHdTphfjS4wmaM6GzWD208esM6J7BGeIvZ01o8KT2lecGD7XVcp1ya0%2FSj9jKnacTXQz4l3E8CjU7cZ1H4K4h%2FkQdr8uwaMyf9%2B6MmTPc31CdDQ2otAWjrgIePbRHMJLY%2FsQGOqUBNEX6eMadcTkWR7fL9UMi%2FAUPpURhRg5wjTR2QPeKH3h2xUmH%2F5etUp7abBn9qSOK0DW4fsxzO%2F3HvfF2OTB2wUiOKXlJCcRe4egMdqKL7HPW7%2FUowLFjiyrRSB%2BKfyuQs8fMIRfrA0w8LoLtSZ1aHlaNZ6kws8lqbH3VP2UPwFj2a5pY9YQJsoZSJa%2FaNEIQXzOpP83C2sLGwnWsQsm1jvplz5ix&X-Amz-Signature=4d5a146337a9dc1cdff6cf429d4fa5d71497aeeb0e595687d3ac4a0fdd53aee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
