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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVKK5NO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCpt8y896fkQI4O6Vzn7vrazJYMbPL3hycmTu%2FjZT%2FbVgIhAMfeAhJ6ZAji9LgYemUOB3xxAC7CXckP4Pfn167eOi0bKv8DCGIQABoMNjM3NDIzMTgzODA1IgyH%2BguNssSuQ%2FGbzYUq3AOsMNMQkYYqe87tY22cNvRn0ZIJBely%2BPq9DxtU5NJN7xk1Zh4ji01U5a2DW5OxlI1pdh8zKLbcRNuHtCYAEMledRWyALXnB8GH4AUcd1NHbjZEM7gzWg7nBGN5TxrJ1uY923HCYVVyJDjoKHj8uCmyiu1cNf0pU1oODH17GoHsYKYptc%2BAI89RTk0h4hAMxFWn6khv9LIOIaj27dVg2Rw3v2FrWShhxu6cKKhUdVa2p6CvMtfM0gqXMeyqA1kOw9ORWGcTctLzL5GEF4xEO2bTH%2BuQRiD1tWvC4l57M25ScpOS9cs9rRPR6Z1PpwaWq06Dth6qvzoE3fqBtul0TY6854dAt8X9lvIPf1%2BtMYQS5UYjJpRz2cv0Bacx5xaeh2615zdLXXfM%2BY%2B%2BYpOPEyJZK9QkRN4z7UZGrAUvhT2qZ%2BHK6w%2FxYdiC6GGFl3BkaSR86b4bLfig3RtbKhXVwLg1u%2Bm8oEHI7vVvFPXFrlSW%2F0TRaH7K5IvkorczlQcbrh4VxU9RLXFI4%2BtZQ09MmfN%2BwGd9bIoWV0FwOwW%2BhTpYQid4qX0VPedbDBuiim1AevCouoxiwTvjUFm1dL3CPMlf%2BqapBSLB413Kp7HvvGX0bbMHonv5%2Bn2RF6k%2BsjCs2v3EBjqkAT5BzMePd%2FTjAHOKDNdlndlOTbX2wqMHw%2BDFoiK%2BHyyZ2i3z1y%2F%2FayrGe2anQvqdr1aX1OOKs5Y%2BIJhsCjxhIRCeZtJupW3EMceC1YZ7fFgF5hipK%2FxFiccAyzwMunZRihCApTeEz5WyM6n5BVyONM6an4PchBgeEreHhA13i5F0MrIVz2dCxrCby8VMQ9x9wVllG9BxhOfQRtGkG%2BEniWXQr5Jb&X-Amz-Signature=e8fe4cf5180dbb80f2bfe96cd9da0b343dc2fe915f771e555bce10ce1d09a3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVKK5NO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCpt8y896fkQI4O6Vzn7vrazJYMbPL3hycmTu%2FjZT%2FbVgIhAMfeAhJ6ZAji9LgYemUOB3xxAC7CXckP4Pfn167eOi0bKv8DCGIQABoMNjM3NDIzMTgzODA1IgyH%2BguNssSuQ%2FGbzYUq3AOsMNMQkYYqe87tY22cNvRn0ZIJBely%2BPq9DxtU5NJN7xk1Zh4ji01U5a2DW5OxlI1pdh8zKLbcRNuHtCYAEMledRWyALXnB8GH4AUcd1NHbjZEM7gzWg7nBGN5TxrJ1uY923HCYVVyJDjoKHj8uCmyiu1cNf0pU1oODH17GoHsYKYptc%2BAI89RTk0h4hAMxFWn6khv9LIOIaj27dVg2Rw3v2FrWShhxu6cKKhUdVa2p6CvMtfM0gqXMeyqA1kOw9ORWGcTctLzL5GEF4xEO2bTH%2BuQRiD1tWvC4l57M25ScpOS9cs9rRPR6Z1PpwaWq06Dth6qvzoE3fqBtul0TY6854dAt8X9lvIPf1%2BtMYQS5UYjJpRz2cv0Bacx5xaeh2615zdLXXfM%2BY%2B%2BYpOPEyJZK9QkRN4z7UZGrAUvhT2qZ%2BHK6w%2FxYdiC6GGFl3BkaSR86b4bLfig3RtbKhXVwLg1u%2Bm8oEHI7vVvFPXFrlSW%2F0TRaH7K5IvkorczlQcbrh4VxU9RLXFI4%2BtZQ09MmfN%2BwGd9bIoWV0FwOwW%2BhTpYQid4qX0VPedbDBuiim1AevCouoxiwTvjUFm1dL3CPMlf%2BqapBSLB413Kp7HvvGX0bbMHonv5%2Bn2RF6k%2BsjCs2v3EBjqkAT5BzMePd%2FTjAHOKDNdlndlOTbX2wqMHw%2BDFoiK%2BHyyZ2i3z1y%2F%2FayrGe2anQvqdr1aX1OOKs5Y%2BIJhsCjxhIRCeZtJupW3EMceC1YZ7fFgF5hipK%2FxFiccAyzwMunZRihCApTeEz5WyM6n5BVyONM6an4PchBgeEreHhA13i5F0MrIVz2dCxrCby8VMQ9x9wVllG9BxhOfQRtGkG%2BEniWXQr5Jb&X-Amz-Signature=f39b19badc1c93a339d28d24825386c8386b3147076ce61d901ff160ef478f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVKK5NO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCpt8y896fkQI4O6Vzn7vrazJYMbPL3hycmTu%2FjZT%2FbVgIhAMfeAhJ6ZAji9LgYemUOB3xxAC7CXckP4Pfn167eOi0bKv8DCGIQABoMNjM3NDIzMTgzODA1IgyH%2BguNssSuQ%2FGbzYUq3AOsMNMQkYYqe87tY22cNvRn0ZIJBely%2BPq9DxtU5NJN7xk1Zh4ji01U5a2DW5OxlI1pdh8zKLbcRNuHtCYAEMledRWyALXnB8GH4AUcd1NHbjZEM7gzWg7nBGN5TxrJ1uY923HCYVVyJDjoKHj8uCmyiu1cNf0pU1oODH17GoHsYKYptc%2BAI89RTk0h4hAMxFWn6khv9LIOIaj27dVg2Rw3v2FrWShhxu6cKKhUdVa2p6CvMtfM0gqXMeyqA1kOw9ORWGcTctLzL5GEF4xEO2bTH%2BuQRiD1tWvC4l57M25ScpOS9cs9rRPR6Z1PpwaWq06Dth6qvzoE3fqBtul0TY6854dAt8X9lvIPf1%2BtMYQS5UYjJpRz2cv0Bacx5xaeh2615zdLXXfM%2BY%2B%2BYpOPEyJZK9QkRN4z7UZGrAUvhT2qZ%2BHK6w%2FxYdiC6GGFl3BkaSR86b4bLfig3RtbKhXVwLg1u%2Bm8oEHI7vVvFPXFrlSW%2F0TRaH7K5IvkorczlQcbrh4VxU9RLXFI4%2BtZQ09MmfN%2BwGd9bIoWV0FwOwW%2BhTpYQid4qX0VPedbDBuiim1AevCouoxiwTvjUFm1dL3CPMlf%2BqapBSLB413Kp7HvvGX0bbMHonv5%2Bn2RF6k%2BsjCs2v3EBjqkAT5BzMePd%2FTjAHOKDNdlndlOTbX2wqMHw%2BDFoiK%2BHyyZ2i3z1y%2F%2FayrGe2anQvqdr1aX1OOKs5Y%2BIJhsCjxhIRCeZtJupW3EMceC1YZ7fFgF5hipK%2FxFiccAyzwMunZRihCApTeEz5WyM6n5BVyONM6an4PchBgeEreHhA13i5F0MrIVz2dCxrCby8VMQ9x9wVllG9BxhOfQRtGkG%2BEniWXQr5Jb&X-Amz-Signature=3fee9af21b90e4b35e81f285535b2836d51e4b66255075d733f36e4086513c04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVKK5NO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCpt8y896fkQI4O6Vzn7vrazJYMbPL3hycmTu%2FjZT%2FbVgIhAMfeAhJ6ZAji9LgYemUOB3xxAC7CXckP4Pfn167eOi0bKv8DCGIQABoMNjM3NDIzMTgzODA1IgyH%2BguNssSuQ%2FGbzYUq3AOsMNMQkYYqe87tY22cNvRn0ZIJBely%2BPq9DxtU5NJN7xk1Zh4ji01U5a2DW5OxlI1pdh8zKLbcRNuHtCYAEMledRWyALXnB8GH4AUcd1NHbjZEM7gzWg7nBGN5TxrJ1uY923HCYVVyJDjoKHj8uCmyiu1cNf0pU1oODH17GoHsYKYptc%2BAI89RTk0h4hAMxFWn6khv9LIOIaj27dVg2Rw3v2FrWShhxu6cKKhUdVa2p6CvMtfM0gqXMeyqA1kOw9ORWGcTctLzL5GEF4xEO2bTH%2BuQRiD1tWvC4l57M25ScpOS9cs9rRPR6Z1PpwaWq06Dth6qvzoE3fqBtul0TY6854dAt8X9lvIPf1%2BtMYQS5UYjJpRz2cv0Bacx5xaeh2615zdLXXfM%2BY%2B%2BYpOPEyJZK9QkRN4z7UZGrAUvhT2qZ%2BHK6w%2FxYdiC6GGFl3BkaSR86b4bLfig3RtbKhXVwLg1u%2Bm8oEHI7vVvFPXFrlSW%2F0TRaH7K5IvkorczlQcbrh4VxU9RLXFI4%2BtZQ09MmfN%2BwGd9bIoWV0FwOwW%2BhTpYQid4qX0VPedbDBuiim1AevCouoxiwTvjUFm1dL3CPMlf%2BqapBSLB413Kp7HvvGX0bbMHonv5%2Bn2RF6k%2BsjCs2v3EBjqkAT5BzMePd%2FTjAHOKDNdlndlOTbX2wqMHw%2BDFoiK%2BHyyZ2i3z1y%2F%2FayrGe2anQvqdr1aX1OOKs5Y%2BIJhsCjxhIRCeZtJupW3EMceC1YZ7fFgF5hipK%2FxFiccAyzwMunZRihCApTeEz5WyM6n5BVyONM6an4PchBgeEreHhA13i5F0MrIVz2dCxrCby8VMQ9x9wVllG9BxhOfQRtGkG%2BEniWXQr5Jb&X-Amz-Signature=4dd26785fbce395223a003f0e5243e5d14dd094053a5ffd27ff429e036a29773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVKK5NO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCpt8y896fkQI4O6Vzn7vrazJYMbPL3hycmTu%2FjZT%2FbVgIhAMfeAhJ6ZAji9LgYemUOB3xxAC7CXckP4Pfn167eOi0bKv8DCGIQABoMNjM3NDIzMTgzODA1IgyH%2BguNssSuQ%2FGbzYUq3AOsMNMQkYYqe87tY22cNvRn0ZIJBely%2BPq9DxtU5NJN7xk1Zh4ji01U5a2DW5OxlI1pdh8zKLbcRNuHtCYAEMledRWyALXnB8GH4AUcd1NHbjZEM7gzWg7nBGN5TxrJ1uY923HCYVVyJDjoKHj8uCmyiu1cNf0pU1oODH17GoHsYKYptc%2BAI89RTk0h4hAMxFWn6khv9LIOIaj27dVg2Rw3v2FrWShhxu6cKKhUdVa2p6CvMtfM0gqXMeyqA1kOw9ORWGcTctLzL5GEF4xEO2bTH%2BuQRiD1tWvC4l57M25ScpOS9cs9rRPR6Z1PpwaWq06Dth6qvzoE3fqBtul0TY6854dAt8X9lvIPf1%2BtMYQS5UYjJpRz2cv0Bacx5xaeh2615zdLXXfM%2BY%2B%2BYpOPEyJZK9QkRN4z7UZGrAUvhT2qZ%2BHK6w%2FxYdiC6GGFl3BkaSR86b4bLfig3RtbKhXVwLg1u%2Bm8oEHI7vVvFPXFrlSW%2F0TRaH7K5IvkorczlQcbrh4VxU9RLXFI4%2BtZQ09MmfN%2BwGd9bIoWV0FwOwW%2BhTpYQid4qX0VPedbDBuiim1AevCouoxiwTvjUFm1dL3CPMlf%2BqapBSLB413Kp7HvvGX0bbMHonv5%2Bn2RF6k%2BsjCs2v3EBjqkAT5BzMePd%2FTjAHOKDNdlndlOTbX2wqMHw%2BDFoiK%2BHyyZ2i3z1y%2F%2FayrGe2anQvqdr1aX1OOKs5Y%2BIJhsCjxhIRCeZtJupW3EMceC1YZ7fFgF5hipK%2FxFiccAyzwMunZRihCApTeEz5WyM6n5BVyONM6an4PchBgeEreHhA13i5F0MrIVz2dCxrCby8VMQ9x9wVllG9BxhOfQRtGkG%2BEniWXQr5Jb&X-Amz-Signature=fa103a983d10c868f13e7fa837ee3e025263ba8b3ceb48441da734e8f52522ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVKK5NO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCpt8y896fkQI4O6Vzn7vrazJYMbPL3hycmTu%2FjZT%2FbVgIhAMfeAhJ6ZAji9LgYemUOB3xxAC7CXckP4Pfn167eOi0bKv8DCGIQABoMNjM3NDIzMTgzODA1IgyH%2BguNssSuQ%2FGbzYUq3AOsMNMQkYYqe87tY22cNvRn0ZIJBely%2BPq9DxtU5NJN7xk1Zh4ji01U5a2DW5OxlI1pdh8zKLbcRNuHtCYAEMledRWyALXnB8GH4AUcd1NHbjZEM7gzWg7nBGN5TxrJ1uY923HCYVVyJDjoKHj8uCmyiu1cNf0pU1oODH17GoHsYKYptc%2BAI89RTk0h4hAMxFWn6khv9LIOIaj27dVg2Rw3v2FrWShhxu6cKKhUdVa2p6CvMtfM0gqXMeyqA1kOw9ORWGcTctLzL5GEF4xEO2bTH%2BuQRiD1tWvC4l57M25ScpOS9cs9rRPR6Z1PpwaWq06Dth6qvzoE3fqBtul0TY6854dAt8X9lvIPf1%2BtMYQS5UYjJpRz2cv0Bacx5xaeh2615zdLXXfM%2BY%2B%2BYpOPEyJZK9QkRN4z7UZGrAUvhT2qZ%2BHK6w%2FxYdiC6GGFl3BkaSR86b4bLfig3RtbKhXVwLg1u%2Bm8oEHI7vVvFPXFrlSW%2F0TRaH7K5IvkorczlQcbrh4VxU9RLXFI4%2BtZQ09MmfN%2BwGd9bIoWV0FwOwW%2BhTpYQid4qX0VPedbDBuiim1AevCouoxiwTvjUFm1dL3CPMlf%2BqapBSLB413Kp7HvvGX0bbMHonv5%2Bn2RF6k%2BsjCs2v3EBjqkAT5BzMePd%2FTjAHOKDNdlndlOTbX2wqMHw%2BDFoiK%2BHyyZ2i3z1y%2F%2FayrGe2anQvqdr1aX1OOKs5Y%2BIJhsCjxhIRCeZtJupW3EMceC1YZ7fFgF5hipK%2FxFiccAyzwMunZRihCApTeEz5WyM6n5BVyONM6an4PchBgeEreHhA13i5F0MrIVz2dCxrCby8VMQ9x9wVllG9BxhOfQRtGkG%2BEniWXQr5Jb&X-Amz-Signature=2406a0cd2cedb51d2df83c8288ded1c5da8c04ccd3da112325725c75bf761984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVKK5NO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCpt8y896fkQI4O6Vzn7vrazJYMbPL3hycmTu%2FjZT%2FbVgIhAMfeAhJ6ZAji9LgYemUOB3xxAC7CXckP4Pfn167eOi0bKv8DCGIQABoMNjM3NDIzMTgzODA1IgyH%2BguNssSuQ%2FGbzYUq3AOsMNMQkYYqe87tY22cNvRn0ZIJBely%2BPq9DxtU5NJN7xk1Zh4ji01U5a2DW5OxlI1pdh8zKLbcRNuHtCYAEMledRWyALXnB8GH4AUcd1NHbjZEM7gzWg7nBGN5TxrJ1uY923HCYVVyJDjoKHj8uCmyiu1cNf0pU1oODH17GoHsYKYptc%2BAI89RTk0h4hAMxFWn6khv9LIOIaj27dVg2Rw3v2FrWShhxu6cKKhUdVa2p6CvMtfM0gqXMeyqA1kOw9ORWGcTctLzL5GEF4xEO2bTH%2BuQRiD1tWvC4l57M25ScpOS9cs9rRPR6Z1PpwaWq06Dth6qvzoE3fqBtul0TY6854dAt8X9lvIPf1%2BtMYQS5UYjJpRz2cv0Bacx5xaeh2615zdLXXfM%2BY%2B%2BYpOPEyJZK9QkRN4z7UZGrAUvhT2qZ%2BHK6w%2FxYdiC6GGFl3BkaSR86b4bLfig3RtbKhXVwLg1u%2Bm8oEHI7vVvFPXFrlSW%2F0TRaH7K5IvkorczlQcbrh4VxU9RLXFI4%2BtZQ09MmfN%2BwGd9bIoWV0FwOwW%2BhTpYQid4qX0VPedbDBuiim1AevCouoxiwTvjUFm1dL3CPMlf%2BqapBSLB413Kp7HvvGX0bbMHonv5%2Bn2RF6k%2BsjCs2v3EBjqkAT5BzMePd%2FTjAHOKDNdlndlOTbX2wqMHw%2BDFoiK%2BHyyZ2i3z1y%2F%2FayrGe2anQvqdr1aX1OOKs5Y%2BIJhsCjxhIRCeZtJupW3EMceC1YZ7fFgF5hipK%2FxFiccAyzwMunZRihCApTeEz5WyM6n5BVyONM6an4PchBgeEreHhA13i5F0MrIVz2dCxrCby8VMQ9x9wVllG9BxhOfQRtGkG%2BEniWXQr5Jb&X-Amz-Signature=d43a1711f038db61d660bdeb78fd837da7c56ce0a5ffaff639e951e720f2ead9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
