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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746F6JYW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyVHF2UvYAv0VBuQ3crdYcIvNCdhWgiakDHpidomPOagIhANotmYkG1tNvfXLPyXoR5fUTF6aX4hMeGG8cWwU47jlNKv8DCCwQABoMNjM3NDIzMTgzODA1Igzq4BmQ2GujoD1uIHoq3AOrFTUebGGVUofZzqrzF9LvCPW59Bw7nRle22PTM7Lkh2mdAgJgv712DbraLkpoFEyBgtFjftT634PN2LPDDa38Z7adLuJK1wIw79GyXdp2EYJ7xZUtTHaSYli2MJoU%2FP2An3%2FdP6OMFDqzEbkabKHa9txYTisF%2B9mCvddvRqDNX3KN4ta0SO6HSdMUbVNeqnL1ycTXm%2FqXWk5SMHj2iPdfAxWG150zmlfXgqX9IB4Delhovl7OnLx4AvkLNcGjhqBY8omsmr%2FmrZUuvurz9W7I0OJrePXzGl6bpYVOxIynHrheac1hMOe8jlbrloA%2BB%2F78DQ8bAEV1v%2BS%2BfPGBWza17%2Fy633x5wPKM3dYl%2BPbSdhMZ8ccYm5Q%2BJ2dk4KVlduYexoe%2BgFerQW%2BLASz4fBxjtH3jhyVX0IDZ2HZgfItl1zc2E4KvMXlePwc9VeGVwEeNJLvx8RBHMXsJSeDBQBQ8iy00Yw5rEcV73pB0rfXew8ooAqSFR5%2BOpivGlmy6gGnamFsCuKZeVM1kNMcfDLKjwEUw87q2%2B6zv3KW3O4xF2Tp9j3gbgRQ0c7YRd%2FurqF%2FBi9tksoPLjypfDySufnu%2BsZ6Z0Arjwcw1ikMW%2F1WwSyFvaap5Dzmc1g5rozDx6fHEBjqkAU%2FRp8mF1hL%2FH9y2T7%2Bbz0jk4YtFKepTz3LLBS44AbdnGpLMjDNKmlvRJK2jJuLN8ecvhffoR6WDWe42J8bvYTN%2BV83c5gCO7pihmgk6UX8pBwc99nKgMb1oiLoFdi4tTjJYczxHh%2BtwcFSHc2syrKjVmTI%2F9XLLpgjd07%2FmbPa3aMCTVVinywaA3GCtrJiNwWP5LZNC8wwRiNUrIWZmjPoTfny4&X-Amz-Signature=6137d2b4d200c8e1dfec72e17546eaf10cdb657be9bcfdb7382138ab8c0366aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746F6JYW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyVHF2UvYAv0VBuQ3crdYcIvNCdhWgiakDHpidomPOagIhANotmYkG1tNvfXLPyXoR5fUTF6aX4hMeGG8cWwU47jlNKv8DCCwQABoMNjM3NDIzMTgzODA1Igzq4BmQ2GujoD1uIHoq3AOrFTUebGGVUofZzqrzF9LvCPW59Bw7nRle22PTM7Lkh2mdAgJgv712DbraLkpoFEyBgtFjftT634PN2LPDDa38Z7adLuJK1wIw79GyXdp2EYJ7xZUtTHaSYli2MJoU%2FP2An3%2FdP6OMFDqzEbkabKHa9txYTisF%2B9mCvddvRqDNX3KN4ta0SO6HSdMUbVNeqnL1ycTXm%2FqXWk5SMHj2iPdfAxWG150zmlfXgqX9IB4Delhovl7OnLx4AvkLNcGjhqBY8omsmr%2FmrZUuvurz9W7I0OJrePXzGl6bpYVOxIynHrheac1hMOe8jlbrloA%2BB%2F78DQ8bAEV1v%2BS%2BfPGBWza17%2Fy633x5wPKM3dYl%2BPbSdhMZ8ccYm5Q%2BJ2dk4KVlduYexoe%2BgFerQW%2BLASz4fBxjtH3jhyVX0IDZ2HZgfItl1zc2E4KvMXlePwc9VeGVwEeNJLvx8RBHMXsJSeDBQBQ8iy00Yw5rEcV73pB0rfXew8ooAqSFR5%2BOpivGlmy6gGnamFsCuKZeVM1kNMcfDLKjwEUw87q2%2B6zv3KW3O4xF2Tp9j3gbgRQ0c7YRd%2FurqF%2FBi9tksoPLjypfDySufnu%2BsZ6Z0Arjwcw1ikMW%2F1WwSyFvaap5Dzmc1g5rozDx6fHEBjqkAU%2FRp8mF1hL%2FH9y2T7%2Bbz0jk4YtFKepTz3LLBS44AbdnGpLMjDNKmlvRJK2jJuLN8ecvhffoR6WDWe42J8bvYTN%2BV83c5gCO7pihmgk6UX8pBwc99nKgMb1oiLoFdi4tTjJYczxHh%2BtwcFSHc2syrKjVmTI%2F9XLLpgjd07%2FmbPa3aMCTVVinywaA3GCtrJiNwWP5LZNC8wwRiNUrIWZmjPoTfny4&X-Amz-Signature=83cfd02f33740da1a233e0f2750905578c034cb5d153dfd67f84c8b78331c300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746F6JYW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyVHF2UvYAv0VBuQ3crdYcIvNCdhWgiakDHpidomPOagIhANotmYkG1tNvfXLPyXoR5fUTF6aX4hMeGG8cWwU47jlNKv8DCCwQABoMNjM3NDIzMTgzODA1Igzq4BmQ2GujoD1uIHoq3AOrFTUebGGVUofZzqrzF9LvCPW59Bw7nRle22PTM7Lkh2mdAgJgv712DbraLkpoFEyBgtFjftT634PN2LPDDa38Z7adLuJK1wIw79GyXdp2EYJ7xZUtTHaSYli2MJoU%2FP2An3%2FdP6OMFDqzEbkabKHa9txYTisF%2B9mCvddvRqDNX3KN4ta0SO6HSdMUbVNeqnL1ycTXm%2FqXWk5SMHj2iPdfAxWG150zmlfXgqX9IB4Delhovl7OnLx4AvkLNcGjhqBY8omsmr%2FmrZUuvurz9W7I0OJrePXzGl6bpYVOxIynHrheac1hMOe8jlbrloA%2BB%2F78DQ8bAEV1v%2BS%2BfPGBWza17%2Fy633x5wPKM3dYl%2BPbSdhMZ8ccYm5Q%2BJ2dk4KVlduYexoe%2BgFerQW%2BLASz4fBxjtH3jhyVX0IDZ2HZgfItl1zc2E4KvMXlePwc9VeGVwEeNJLvx8RBHMXsJSeDBQBQ8iy00Yw5rEcV73pB0rfXew8ooAqSFR5%2BOpivGlmy6gGnamFsCuKZeVM1kNMcfDLKjwEUw87q2%2B6zv3KW3O4xF2Tp9j3gbgRQ0c7YRd%2FurqF%2FBi9tksoPLjypfDySufnu%2BsZ6Z0Arjwcw1ikMW%2F1WwSyFvaap5Dzmc1g5rozDx6fHEBjqkAU%2FRp8mF1hL%2FH9y2T7%2Bbz0jk4YtFKepTz3LLBS44AbdnGpLMjDNKmlvRJK2jJuLN8ecvhffoR6WDWe42J8bvYTN%2BV83c5gCO7pihmgk6UX8pBwc99nKgMb1oiLoFdi4tTjJYczxHh%2BtwcFSHc2syrKjVmTI%2F9XLLpgjd07%2FmbPa3aMCTVVinywaA3GCtrJiNwWP5LZNC8wwRiNUrIWZmjPoTfny4&X-Amz-Signature=e5569df2422ff924f8f1763bac53a1e9db5316cdd549bb7f631a2b0eef3f8af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746F6JYW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyVHF2UvYAv0VBuQ3crdYcIvNCdhWgiakDHpidomPOagIhANotmYkG1tNvfXLPyXoR5fUTF6aX4hMeGG8cWwU47jlNKv8DCCwQABoMNjM3NDIzMTgzODA1Igzq4BmQ2GujoD1uIHoq3AOrFTUebGGVUofZzqrzF9LvCPW59Bw7nRle22PTM7Lkh2mdAgJgv712DbraLkpoFEyBgtFjftT634PN2LPDDa38Z7adLuJK1wIw79GyXdp2EYJ7xZUtTHaSYli2MJoU%2FP2An3%2FdP6OMFDqzEbkabKHa9txYTisF%2B9mCvddvRqDNX3KN4ta0SO6HSdMUbVNeqnL1ycTXm%2FqXWk5SMHj2iPdfAxWG150zmlfXgqX9IB4Delhovl7OnLx4AvkLNcGjhqBY8omsmr%2FmrZUuvurz9W7I0OJrePXzGl6bpYVOxIynHrheac1hMOe8jlbrloA%2BB%2F78DQ8bAEV1v%2BS%2BfPGBWza17%2Fy633x5wPKM3dYl%2BPbSdhMZ8ccYm5Q%2BJ2dk4KVlduYexoe%2BgFerQW%2BLASz4fBxjtH3jhyVX0IDZ2HZgfItl1zc2E4KvMXlePwc9VeGVwEeNJLvx8RBHMXsJSeDBQBQ8iy00Yw5rEcV73pB0rfXew8ooAqSFR5%2BOpivGlmy6gGnamFsCuKZeVM1kNMcfDLKjwEUw87q2%2B6zv3KW3O4xF2Tp9j3gbgRQ0c7YRd%2FurqF%2FBi9tksoPLjypfDySufnu%2BsZ6Z0Arjwcw1ikMW%2F1WwSyFvaap5Dzmc1g5rozDx6fHEBjqkAU%2FRp8mF1hL%2FH9y2T7%2Bbz0jk4YtFKepTz3LLBS44AbdnGpLMjDNKmlvRJK2jJuLN8ecvhffoR6WDWe42J8bvYTN%2BV83c5gCO7pihmgk6UX8pBwc99nKgMb1oiLoFdi4tTjJYczxHh%2BtwcFSHc2syrKjVmTI%2F9XLLpgjd07%2FmbPa3aMCTVVinywaA3GCtrJiNwWP5LZNC8wwRiNUrIWZmjPoTfny4&X-Amz-Signature=dcf78a61e8575692bea9e6153b20a1f90f5586ed9ae15aa518ee63965bb9e5dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746F6JYW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyVHF2UvYAv0VBuQ3crdYcIvNCdhWgiakDHpidomPOagIhANotmYkG1tNvfXLPyXoR5fUTF6aX4hMeGG8cWwU47jlNKv8DCCwQABoMNjM3NDIzMTgzODA1Igzq4BmQ2GujoD1uIHoq3AOrFTUebGGVUofZzqrzF9LvCPW59Bw7nRle22PTM7Lkh2mdAgJgv712DbraLkpoFEyBgtFjftT634PN2LPDDa38Z7adLuJK1wIw79GyXdp2EYJ7xZUtTHaSYli2MJoU%2FP2An3%2FdP6OMFDqzEbkabKHa9txYTisF%2B9mCvddvRqDNX3KN4ta0SO6HSdMUbVNeqnL1ycTXm%2FqXWk5SMHj2iPdfAxWG150zmlfXgqX9IB4Delhovl7OnLx4AvkLNcGjhqBY8omsmr%2FmrZUuvurz9W7I0OJrePXzGl6bpYVOxIynHrheac1hMOe8jlbrloA%2BB%2F78DQ8bAEV1v%2BS%2BfPGBWza17%2Fy633x5wPKM3dYl%2BPbSdhMZ8ccYm5Q%2BJ2dk4KVlduYexoe%2BgFerQW%2BLASz4fBxjtH3jhyVX0IDZ2HZgfItl1zc2E4KvMXlePwc9VeGVwEeNJLvx8RBHMXsJSeDBQBQ8iy00Yw5rEcV73pB0rfXew8ooAqSFR5%2BOpivGlmy6gGnamFsCuKZeVM1kNMcfDLKjwEUw87q2%2B6zv3KW3O4xF2Tp9j3gbgRQ0c7YRd%2FurqF%2FBi9tksoPLjypfDySufnu%2BsZ6Z0Arjwcw1ikMW%2F1WwSyFvaap5Dzmc1g5rozDx6fHEBjqkAU%2FRp8mF1hL%2FH9y2T7%2Bbz0jk4YtFKepTz3LLBS44AbdnGpLMjDNKmlvRJK2jJuLN8ecvhffoR6WDWe42J8bvYTN%2BV83c5gCO7pihmgk6UX8pBwc99nKgMb1oiLoFdi4tTjJYczxHh%2BtwcFSHc2syrKjVmTI%2F9XLLpgjd07%2FmbPa3aMCTVVinywaA3GCtrJiNwWP5LZNC8wwRiNUrIWZmjPoTfny4&X-Amz-Signature=7330f85178f1cf84ebc5bcc92640cd68988b29c1d9786bde7db92c778f5baf76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746F6JYW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyVHF2UvYAv0VBuQ3crdYcIvNCdhWgiakDHpidomPOagIhANotmYkG1tNvfXLPyXoR5fUTF6aX4hMeGG8cWwU47jlNKv8DCCwQABoMNjM3NDIzMTgzODA1Igzq4BmQ2GujoD1uIHoq3AOrFTUebGGVUofZzqrzF9LvCPW59Bw7nRle22PTM7Lkh2mdAgJgv712DbraLkpoFEyBgtFjftT634PN2LPDDa38Z7adLuJK1wIw79GyXdp2EYJ7xZUtTHaSYli2MJoU%2FP2An3%2FdP6OMFDqzEbkabKHa9txYTisF%2B9mCvddvRqDNX3KN4ta0SO6HSdMUbVNeqnL1ycTXm%2FqXWk5SMHj2iPdfAxWG150zmlfXgqX9IB4Delhovl7OnLx4AvkLNcGjhqBY8omsmr%2FmrZUuvurz9W7I0OJrePXzGl6bpYVOxIynHrheac1hMOe8jlbrloA%2BB%2F78DQ8bAEV1v%2BS%2BfPGBWza17%2Fy633x5wPKM3dYl%2BPbSdhMZ8ccYm5Q%2BJ2dk4KVlduYexoe%2BgFerQW%2BLASz4fBxjtH3jhyVX0IDZ2HZgfItl1zc2E4KvMXlePwc9VeGVwEeNJLvx8RBHMXsJSeDBQBQ8iy00Yw5rEcV73pB0rfXew8ooAqSFR5%2BOpivGlmy6gGnamFsCuKZeVM1kNMcfDLKjwEUw87q2%2B6zv3KW3O4xF2Tp9j3gbgRQ0c7YRd%2FurqF%2FBi9tksoPLjypfDySufnu%2BsZ6Z0Arjwcw1ikMW%2F1WwSyFvaap5Dzmc1g5rozDx6fHEBjqkAU%2FRp8mF1hL%2FH9y2T7%2Bbz0jk4YtFKepTz3LLBS44AbdnGpLMjDNKmlvRJK2jJuLN8ecvhffoR6WDWe42J8bvYTN%2BV83c5gCO7pihmgk6UX8pBwc99nKgMb1oiLoFdi4tTjJYczxHh%2BtwcFSHc2syrKjVmTI%2F9XLLpgjd07%2FmbPa3aMCTVVinywaA3GCtrJiNwWP5LZNC8wwRiNUrIWZmjPoTfny4&X-Amz-Signature=02279a8234f52a3abfede5ba6f371974e501dcdce977e32237b4a28edad1863e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746F6JYW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyVHF2UvYAv0VBuQ3crdYcIvNCdhWgiakDHpidomPOagIhANotmYkG1tNvfXLPyXoR5fUTF6aX4hMeGG8cWwU47jlNKv8DCCwQABoMNjM3NDIzMTgzODA1Igzq4BmQ2GujoD1uIHoq3AOrFTUebGGVUofZzqrzF9LvCPW59Bw7nRle22PTM7Lkh2mdAgJgv712DbraLkpoFEyBgtFjftT634PN2LPDDa38Z7adLuJK1wIw79GyXdp2EYJ7xZUtTHaSYli2MJoU%2FP2An3%2FdP6OMFDqzEbkabKHa9txYTisF%2B9mCvddvRqDNX3KN4ta0SO6HSdMUbVNeqnL1ycTXm%2FqXWk5SMHj2iPdfAxWG150zmlfXgqX9IB4Delhovl7OnLx4AvkLNcGjhqBY8omsmr%2FmrZUuvurz9W7I0OJrePXzGl6bpYVOxIynHrheac1hMOe8jlbrloA%2BB%2F78DQ8bAEV1v%2BS%2BfPGBWza17%2Fy633x5wPKM3dYl%2BPbSdhMZ8ccYm5Q%2BJ2dk4KVlduYexoe%2BgFerQW%2BLASz4fBxjtH3jhyVX0IDZ2HZgfItl1zc2E4KvMXlePwc9VeGVwEeNJLvx8RBHMXsJSeDBQBQ8iy00Yw5rEcV73pB0rfXew8ooAqSFR5%2BOpivGlmy6gGnamFsCuKZeVM1kNMcfDLKjwEUw87q2%2B6zv3KW3O4xF2Tp9j3gbgRQ0c7YRd%2FurqF%2FBi9tksoPLjypfDySufnu%2BsZ6Z0Arjwcw1ikMW%2F1WwSyFvaap5Dzmc1g5rozDx6fHEBjqkAU%2FRp8mF1hL%2FH9y2T7%2Bbz0jk4YtFKepTz3LLBS44AbdnGpLMjDNKmlvRJK2jJuLN8ecvhffoR6WDWe42J8bvYTN%2BV83c5gCO7pihmgk6UX8pBwc99nKgMb1oiLoFdi4tTjJYczxHh%2BtwcFSHc2syrKjVmTI%2F9XLLpgjd07%2FmbPa3aMCTVVinywaA3GCtrJiNwWP5LZNC8wwRiNUrIWZmjPoTfny4&X-Amz-Signature=ae0f5f3b1baf65aee664e81d8765fb65d9857b789174d71d0134fec7bd2bed68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
