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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VDJNFMG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCUUz5x7B2ZbRKGzIuZt4xUW4fKBRUb7n0Hw7VqiOrxAiBTz%2BA2ipzAFWE1pajWIMHV3434b1OO8D7kqKAVJKdTOSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ZjJgUSSmPbsWIHDKtwDpl1A6ZlHCTETgVe%2BIazlgGQqyOCQNxpgvFjD8BeUSn0mN%2FOiOyzNGs3W%2BzpPTTpCLAI7qZ%2BovkOlJYi4rj2nn%2FDgiVZB%2FwdfGB6IdS7MHYtXEirBk8sfe5L9DRsYYNNIDve0aR%2B0myNKcm9yZRGel%2FlVWVCwkAGerTjov3OTpi9Rg49JByIBc4Ei7P95BLT3msTWYlsWdf3qaNk9FYLDYVA6DAuktZ4HeW4Co%2Fx7x%2BKvlLchtOHOVIkG38x0v0WWL6wrPosWP6qwnsz6WHtuqVFHNqeFlFNJ5N%2BdRLqvSGVTmmz28Hl%2BGH5QNx20lQ4z3JpgpRySN78yg97EpJ4Cbq014S4U5csw5RbUzPsjpKMdpLClzQwJb%2Blhz206Lzm%2Flsa6lFLbMfINJhID4kidGEReewhAUyzW5a13nVyJNCAL0pvcCRqbNfBpWFRVLcCkEwBu5Q4KJpDzY1aqubDKg5%2BZ0iy6%2BZdj0%2FXdjKZJzcCw1DJ92MyiCWfcWGtIjH5yJpSfILH1jf35hRXgnnjvGnInblXE2OrBbp5V32ytV%2BltG%2By2%2BCNJ4LgZQs8FfHs1WG1TbqCMuk%2Fhduzvs4U5ENSyBtVcujNVk3NN%2Bxp1tmPVlSGpv5aEivKF2AAw7KS4wwY6pgGsVFZkzBk1MmWDoicpWrnK8BuZB%2B1onqi6RjX%2B4glFRF0LojBxaoko4LSuvgq2eozz9pbo3NZzYGeYh5%2B78PP4NvFLNLIr1CcsFT8uw1SyjMwvH1v6OMpCRHfa9YOhtNK93X9eZDrMT%2B3lwhkenbmLtN18TA8%2FI7GPhFNmbaHhLbw7gN%2BuAfv1RzfFxPP%2FN%2BFqcMCB5ucKDou%2FWAT7zNcsk6PuJKnA&X-Amz-Signature=803a9d5b3e0f2c1a7b900de1780691d898bd3637ccb363545083c9aa5a6a2ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VDJNFMG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCUUz5x7B2ZbRKGzIuZt4xUW4fKBRUb7n0Hw7VqiOrxAiBTz%2BA2ipzAFWE1pajWIMHV3434b1OO8D7kqKAVJKdTOSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ZjJgUSSmPbsWIHDKtwDpl1A6ZlHCTETgVe%2BIazlgGQqyOCQNxpgvFjD8BeUSn0mN%2FOiOyzNGs3W%2BzpPTTpCLAI7qZ%2BovkOlJYi4rj2nn%2FDgiVZB%2FwdfGB6IdS7MHYtXEirBk8sfe5L9DRsYYNNIDve0aR%2B0myNKcm9yZRGel%2FlVWVCwkAGerTjov3OTpi9Rg49JByIBc4Ei7P95BLT3msTWYlsWdf3qaNk9FYLDYVA6DAuktZ4HeW4Co%2Fx7x%2BKvlLchtOHOVIkG38x0v0WWL6wrPosWP6qwnsz6WHtuqVFHNqeFlFNJ5N%2BdRLqvSGVTmmz28Hl%2BGH5QNx20lQ4z3JpgpRySN78yg97EpJ4Cbq014S4U5csw5RbUzPsjpKMdpLClzQwJb%2Blhz206Lzm%2Flsa6lFLbMfINJhID4kidGEReewhAUyzW5a13nVyJNCAL0pvcCRqbNfBpWFRVLcCkEwBu5Q4KJpDzY1aqubDKg5%2BZ0iy6%2BZdj0%2FXdjKZJzcCw1DJ92MyiCWfcWGtIjH5yJpSfILH1jf35hRXgnnjvGnInblXE2OrBbp5V32ytV%2BltG%2By2%2BCNJ4LgZQs8FfHs1WG1TbqCMuk%2Fhduzvs4U5ENSyBtVcujNVk3NN%2Bxp1tmPVlSGpv5aEivKF2AAw7KS4wwY6pgGsVFZkzBk1MmWDoicpWrnK8BuZB%2B1onqi6RjX%2B4glFRF0LojBxaoko4LSuvgq2eozz9pbo3NZzYGeYh5%2B78PP4NvFLNLIr1CcsFT8uw1SyjMwvH1v6OMpCRHfa9YOhtNK93X9eZDrMT%2B3lwhkenbmLtN18TA8%2FI7GPhFNmbaHhLbw7gN%2BuAfv1RzfFxPP%2FN%2BFqcMCB5ucKDou%2FWAT7zNcsk6PuJKnA&X-Amz-Signature=b51dd5de29cc746568a3c21f9e91060d9f7ff65d8b99b94c1e2a3fc33aaa39ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VDJNFMG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCUUz5x7B2ZbRKGzIuZt4xUW4fKBRUb7n0Hw7VqiOrxAiBTz%2BA2ipzAFWE1pajWIMHV3434b1OO8D7kqKAVJKdTOSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ZjJgUSSmPbsWIHDKtwDpl1A6ZlHCTETgVe%2BIazlgGQqyOCQNxpgvFjD8BeUSn0mN%2FOiOyzNGs3W%2BzpPTTpCLAI7qZ%2BovkOlJYi4rj2nn%2FDgiVZB%2FwdfGB6IdS7MHYtXEirBk8sfe5L9DRsYYNNIDve0aR%2B0myNKcm9yZRGel%2FlVWVCwkAGerTjov3OTpi9Rg49JByIBc4Ei7P95BLT3msTWYlsWdf3qaNk9FYLDYVA6DAuktZ4HeW4Co%2Fx7x%2BKvlLchtOHOVIkG38x0v0WWL6wrPosWP6qwnsz6WHtuqVFHNqeFlFNJ5N%2BdRLqvSGVTmmz28Hl%2BGH5QNx20lQ4z3JpgpRySN78yg97EpJ4Cbq014S4U5csw5RbUzPsjpKMdpLClzQwJb%2Blhz206Lzm%2Flsa6lFLbMfINJhID4kidGEReewhAUyzW5a13nVyJNCAL0pvcCRqbNfBpWFRVLcCkEwBu5Q4KJpDzY1aqubDKg5%2BZ0iy6%2BZdj0%2FXdjKZJzcCw1DJ92MyiCWfcWGtIjH5yJpSfILH1jf35hRXgnnjvGnInblXE2OrBbp5V32ytV%2BltG%2By2%2BCNJ4LgZQs8FfHs1WG1TbqCMuk%2Fhduzvs4U5ENSyBtVcujNVk3NN%2Bxp1tmPVlSGpv5aEivKF2AAw7KS4wwY6pgGsVFZkzBk1MmWDoicpWrnK8BuZB%2B1onqi6RjX%2B4glFRF0LojBxaoko4LSuvgq2eozz9pbo3NZzYGeYh5%2B78PP4NvFLNLIr1CcsFT8uw1SyjMwvH1v6OMpCRHfa9YOhtNK93X9eZDrMT%2B3lwhkenbmLtN18TA8%2FI7GPhFNmbaHhLbw7gN%2BuAfv1RzfFxPP%2FN%2BFqcMCB5ucKDou%2FWAT7zNcsk6PuJKnA&X-Amz-Signature=958deeb88e195582a9abc30d29aec98c805e1f5de86491d6d3703931671f8aaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VDJNFMG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCUUz5x7B2ZbRKGzIuZt4xUW4fKBRUb7n0Hw7VqiOrxAiBTz%2BA2ipzAFWE1pajWIMHV3434b1OO8D7kqKAVJKdTOSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ZjJgUSSmPbsWIHDKtwDpl1A6ZlHCTETgVe%2BIazlgGQqyOCQNxpgvFjD8BeUSn0mN%2FOiOyzNGs3W%2BzpPTTpCLAI7qZ%2BovkOlJYi4rj2nn%2FDgiVZB%2FwdfGB6IdS7MHYtXEirBk8sfe5L9DRsYYNNIDve0aR%2B0myNKcm9yZRGel%2FlVWVCwkAGerTjov3OTpi9Rg49JByIBc4Ei7P95BLT3msTWYlsWdf3qaNk9FYLDYVA6DAuktZ4HeW4Co%2Fx7x%2BKvlLchtOHOVIkG38x0v0WWL6wrPosWP6qwnsz6WHtuqVFHNqeFlFNJ5N%2BdRLqvSGVTmmz28Hl%2BGH5QNx20lQ4z3JpgpRySN78yg97EpJ4Cbq014S4U5csw5RbUzPsjpKMdpLClzQwJb%2Blhz206Lzm%2Flsa6lFLbMfINJhID4kidGEReewhAUyzW5a13nVyJNCAL0pvcCRqbNfBpWFRVLcCkEwBu5Q4KJpDzY1aqubDKg5%2BZ0iy6%2BZdj0%2FXdjKZJzcCw1DJ92MyiCWfcWGtIjH5yJpSfILH1jf35hRXgnnjvGnInblXE2OrBbp5V32ytV%2BltG%2By2%2BCNJ4LgZQs8FfHs1WG1TbqCMuk%2Fhduzvs4U5ENSyBtVcujNVk3NN%2Bxp1tmPVlSGpv5aEivKF2AAw7KS4wwY6pgGsVFZkzBk1MmWDoicpWrnK8BuZB%2B1onqi6RjX%2B4glFRF0LojBxaoko4LSuvgq2eozz9pbo3NZzYGeYh5%2B78PP4NvFLNLIr1CcsFT8uw1SyjMwvH1v6OMpCRHfa9YOhtNK93X9eZDrMT%2B3lwhkenbmLtN18TA8%2FI7GPhFNmbaHhLbw7gN%2BuAfv1RzfFxPP%2FN%2BFqcMCB5ucKDou%2FWAT7zNcsk6PuJKnA&X-Amz-Signature=4af4681e752b611b904ebe489aff332a492d6103ef6e6622fc9e35b2628cb9b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VDJNFMG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCUUz5x7B2ZbRKGzIuZt4xUW4fKBRUb7n0Hw7VqiOrxAiBTz%2BA2ipzAFWE1pajWIMHV3434b1OO8D7kqKAVJKdTOSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ZjJgUSSmPbsWIHDKtwDpl1A6ZlHCTETgVe%2BIazlgGQqyOCQNxpgvFjD8BeUSn0mN%2FOiOyzNGs3W%2BzpPTTpCLAI7qZ%2BovkOlJYi4rj2nn%2FDgiVZB%2FwdfGB6IdS7MHYtXEirBk8sfe5L9DRsYYNNIDve0aR%2B0myNKcm9yZRGel%2FlVWVCwkAGerTjov3OTpi9Rg49JByIBc4Ei7P95BLT3msTWYlsWdf3qaNk9FYLDYVA6DAuktZ4HeW4Co%2Fx7x%2BKvlLchtOHOVIkG38x0v0WWL6wrPosWP6qwnsz6WHtuqVFHNqeFlFNJ5N%2BdRLqvSGVTmmz28Hl%2BGH5QNx20lQ4z3JpgpRySN78yg97EpJ4Cbq014S4U5csw5RbUzPsjpKMdpLClzQwJb%2Blhz206Lzm%2Flsa6lFLbMfINJhID4kidGEReewhAUyzW5a13nVyJNCAL0pvcCRqbNfBpWFRVLcCkEwBu5Q4KJpDzY1aqubDKg5%2BZ0iy6%2BZdj0%2FXdjKZJzcCw1DJ92MyiCWfcWGtIjH5yJpSfILH1jf35hRXgnnjvGnInblXE2OrBbp5V32ytV%2BltG%2By2%2BCNJ4LgZQs8FfHs1WG1TbqCMuk%2Fhduzvs4U5ENSyBtVcujNVk3NN%2Bxp1tmPVlSGpv5aEivKF2AAw7KS4wwY6pgGsVFZkzBk1MmWDoicpWrnK8BuZB%2B1onqi6RjX%2B4glFRF0LojBxaoko4LSuvgq2eozz9pbo3NZzYGeYh5%2B78PP4NvFLNLIr1CcsFT8uw1SyjMwvH1v6OMpCRHfa9YOhtNK93X9eZDrMT%2B3lwhkenbmLtN18TA8%2FI7GPhFNmbaHhLbw7gN%2BuAfv1RzfFxPP%2FN%2BFqcMCB5ucKDou%2FWAT7zNcsk6PuJKnA&X-Amz-Signature=a90b26aa97253bd8b3c065ab3fad9be7108341a0272ff02f4c5a59cfba578335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VDJNFMG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCUUz5x7B2ZbRKGzIuZt4xUW4fKBRUb7n0Hw7VqiOrxAiBTz%2BA2ipzAFWE1pajWIMHV3434b1OO8D7kqKAVJKdTOSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ZjJgUSSmPbsWIHDKtwDpl1A6ZlHCTETgVe%2BIazlgGQqyOCQNxpgvFjD8BeUSn0mN%2FOiOyzNGs3W%2BzpPTTpCLAI7qZ%2BovkOlJYi4rj2nn%2FDgiVZB%2FwdfGB6IdS7MHYtXEirBk8sfe5L9DRsYYNNIDve0aR%2B0myNKcm9yZRGel%2FlVWVCwkAGerTjov3OTpi9Rg49JByIBc4Ei7P95BLT3msTWYlsWdf3qaNk9FYLDYVA6DAuktZ4HeW4Co%2Fx7x%2BKvlLchtOHOVIkG38x0v0WWL6wrPosWP6qwnsz6WHtuqVFHNqeFlFNJ5N%2BdRLqvSGVTmmz28Hl%2BGH5QNx20lQ4z3JpgpRySN78yg97EpJ4Cbq014S4U5csw5RbUzPsjpKMdpLClzQwJb%2Blhz206Lzm%2Flsa6lFLbMfINJhID4kidGEReewhAUyzW5a13nVyJNCAL0pvcCRqbNfBpWFRVLcCkEwBu5Q4KJpDzY1aqubDKg5%2BZ0iy6%2BZdj0%2FXdjKZJzcCw1DJ92MyiCWfcWGtIjH5yJpSfILH1jf35hRXgnnjvGnInblXE2OrBbp5V32ytV%2BltG%2By2%2BCNJ4LgZQs8FfHs1WG1TbqCMuk%2Fhduzvs4U5ENSyBtVcujNVk3NN%2Bxp1tmPVlSGpv5aEivKF2AAw7KS4wwY6pgGsVFZkzBk1MmWDoicpWrnK8BuZB%2B1onqi6RjX%2B4glFRF0LojBxaoko4LSuvgq2eozz9pbo3NZzYGeYh5%2B78PP4NvFLNLIr1CcsFT8uw1SyjMwvH1v6OMpCRHfa9YOhtNK93X9eZDrMT%2B3lwhkenbmLtN18TA8%2FI7GPhFNmbaHhLbw7gN%2BuAfv1RzfFxPP%2FN%2BFqcMCB5ucKDou%2FWAT7zNcsk6PuJKnA&X-Amz-Signature=d3939e3a638793c23579a1ec7c214e70efb6b9a9bf697bbb1d28d69c3f4fadee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VDJNFMG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCUUz5x7B2ZbRKGzIuZt4xUW4fKBRUb7n0Hw7VqiOrxAiBTz%2BA2ipzAFWE1pajWIMHV3434b1OO8D7kqKAVJKdTOSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ZjJgUSSmPbsWIHDKtwDpl1A6ZlHCTETgVe%2BIazlgGQqyOCQNxpgvFjD8BeUSn0mN%2FOiOyzNGs3W%2BzpPTTpCLAI7qZ%2BovkOlJYi4rj2nn%2FDgiVZB%2FwdfGB6IdS7MHYtXEirBk8sfe5L9DRsYYNNIDve0aR%2B0myNKcm9yZRGel%2FlVWVCwkAGerTjov3OTpi9Rg49JByIBc4Ei7P95BLT3msTWYlsWdf3qaNk9FYLDYVA6DAuktZ4HeW4Co%2Fx7x%2BKvlLchtOHOVIkG38x0v0WWL6wrPosWP6qwnsz6WHtuqVFHNqeFlFNJ5N%2BdRLqvSGVTmmz28Hl%2BGH5QNx20lQ4z3JpgpRySN78yg97EpJ4Cbq014S4U5csw5RbUzPsjpKMdpLClzQwJb%2Blhz206Lzm%2Flsa6lFLbMfINJhID4kidGEReewhAUyzW5a13nVyJNCAL0pvcCRqbNfBpWFRVLcCkEwBu5Q4KJpDzY1aqubDKg5%2BZ0iy6%2BZdj0%2FXdjKZJzcCw1DJ92MyiCWfcWGtIjH5yJpSfILH1jf35hRXgnnjvGnInblXE2OrBbp5V32ytV%2BltG%2By2%2BCNJ4LgZQs8FfHs1WG1TbqCMuk%2Fhduzvs4U5ENSyBtVcujNVk3NN%2Bxp1tmPVlSGpv5aEivKF2AAw7KS4wwY6pgGsVFZkzBk1MmWDoicpWrnK8BuZB%2B1onqi6RjX%2B4glFRF0LojBxaoko4LSuvgq2eozz9pbo3NZzYGeYh5%2B78PP4NvFLNLIr1CcsFT8uw1SyjMwvH1v6OMpCRHfa9YOhtNK93X9eZDrMT%2B3lwhkenbmLtN18TA8%2FI7GPhFNmbaHhLbw7gN%2BuAfv1RzfFxPP%2FN%2BFqcMCB5ucKDou%2FWAT7zNcsk6PuJKnA&X-Amz-Signature=5a669bb086093f17e63b51acd9298553f452329c02f6cba1c1c63ef93416fd93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
