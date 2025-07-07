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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YSDTVOW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCj4D%2FfHxOiH018YP6cC9EIk1SW5zWrFSOGcWOjPbd%2BogIhAKhGrMnA8eYTXq2kCuFiaK6JFxseQcS0mJbwEJfANYbTKv8DCHwQABoMNjM3NDIzMTgzODA1IgzLcABIcEYjLYdbsX0q3AMGD7AQxfrKMDwfAOuc6sG3WEeLjkP3ZJ0BRA99sEM6sTYTLFDYj%2B1MGQqXOAw7C3QOhHVdp3Bo%2Fc7tlLhUm%2BR3MZobxMetNRnbgTUBEj%2BmB%2FBthRiBjVTyzxVxhmyzVc9pI%2BrctCwnFUVM4xiUVESF1BpJ34btCpA8hZgyzxqBmzIcN3ZcTwNhJvBsvgJ0ufaYBJKgp5PjG%2Fr1V5S1uMPsUNp6XN%2BGZpaVjY9V%2FFk0fmqCNBqgLQjggq93VcSb%2BBfBLJHqM3Nn1r3gzcPCIktaQmrlPVA41rUZwkFxwdAdpRa6WIa%2FHOrq29Uuiih6MsCB0zzMX%2BHUSQNgED7bd4yUtEKzdhUVMbTLw6p61xr90vU2mW8438fBy%2FrSFM7FgxYdH%2BBLmO4DS54qXTcxz%2FTBIVLx5ur%2BW1IO90m0DfX3CqKbVqmJ%2FY%2FJfCRl5h07evNSuWBB9weivGv4Uq1%2Fp6ygX5EVZHncQSYvFF%2Bb5S7ZlqyCMVQGa%2FkvVRL3YIVIAvj6%2B17ZRJa8g3o8YsKWr94cSuSTsVh6X24YcCn5U2%2BERWN3pUFhqzAlPxr7%2Bxi%2Bgw%2FY7O39uh2Liyvjt4%2BejzYblzaa0kuBcG5sOsW3P5qlkcpwRXaEhG%2BGn50AMzD3vbDDBjqkAauBzyojVdneej%2FqC7h4NeOEJhhqsWVGYW0Y59BPa5K74v43pL8OzLOMKSIQjEzTOAGmFyPVe%2FmgTIxcf6h7rXRWqdQ9OxprTHYKc%2BrGZo5ZTonNeZHaw27wFVLf4ez5wg%2Fww1Sklesg%2BWiZgjESWEASRJ7rJGGTWN92uup6ccLrcT6nax9lk%2BTh%2BMSO14rJiYd8AOg957hRHHLdz1Z507Y%2FAbkv&X-Amz-Signature=8e8c9e356b64ac00b9f6ee870fda7000c9b0b9382f7b4804ba7136ed026bbe9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YSDTVOW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCj4D%2FfHxOiH018YP6cC9EIk1SW5zWrFSOGcWOjPbd%2BogIhAKhGrMnA8eYTXq2kCuFiaK6JFxseQcS0mJbwEJfANYbTKv8DCHwQABoMNjM3NDIzMTgzODA1IgzLcABIcEYjLYdbsX0q3AMGD7AQxfrKMDwfAOuc6sG3WEeLjkP3ZJ0BRA99sEM6sTYTLFDYj%2B1MGQqXOAw7C3QOhHVdp3Bo%2Fc7tlLhUm%2BR3MZobxMetNRnbgTUBEj%2BmB%2FBthRiBjVTyzxVxhmyzVc9pI%2BrctCwnFUVM4xiUVESF1BpJ34btCpA8hZgyzxqBmzIcN3ZcTwNhJvBsvgJ0ufaYBJKgp5PjG%2Fr1V5S1uMPsUNp6XN%2BGZpaVjY9V%2FFk0fmqCNBqgLQjggq93VcSb%2BBfBLJHqM3Nn1r3gzcPCIktaQmrlPVA41rUZwkFxwdAdpRa6WIa%2FHOrq29Uuiih6MsCB0zzMX%2BHUSQNgED7bd4yUtEKzdhUVMbTLw6p61xr90vU2mW8438fBy%2FrSFM7FgxYdH%2BBLmO4DS54qXTcxz%2FTBIVLx5ur%2BW1IO90m0DfX3CqKbVqmJ%2FY%2FJfCRl5h07evNSuWBB9weivGv4Uq1%2Fp6ygX5EVZHncQSYvFF%2Bb5S7ZlqyCMVQGa%2FkvVRL3YIVIAvj6%2B17ZRJa8g3o8YsKWr94cSuSTsVh6X24YcCn5U2%2BERWN3pUFhqzAlPxr7%2Bxi%2Bgw%2FY7O39uh2Liyvjt4%2BejzYblzaa0kuBcG5sOsW3P5qlkcpwRXaEhG%2BGn50AMzD3vbDDBjqkAauBzyojVdneej%2FqC7h4NeOEJhhqsWVGYW0Y59BPa5K74v43pL8OzLOMKSIQjEzTOAGmFyPVe%2FmgTIxcf6h7rXRWqdQ9OxprTHYKc%2BrGZo5ZTonNeZHaw27wFVLf4ez5wg%2Fww1Sklesg%2BWiZgjESWEASRJ7rJGGTWN92uup6ccLrcT6nax9lk%2BTh%2BMSO14rJiYd8AOg957hRHHLdz1Z507Y%2FAbkv&X-Amz-Signature=7eedb7e3be3d332068d02b7ca0d2d78b8d60cb7c58f052885617c91e611ffd43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YSDTVOW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCj4D%2FfHxOiH018YP6cC9EIk1SW5zWrFSOGcWOjPbd%2BogIhAKhGrMnA8eYTXq2kCuFiaK6JFxseQcS0mJbwEJfANYbTKv8DCHwQABoMNjM3NDIzMTgzODA1IgzLcABIcEYjLYdbsX0q3AMGD7AQxfrKMDwfAOuc6sG3WEeLjkP3ZJ0BRA99sEM6sTYTLFDYj%2B1MGQqXOAw7C3QOhHVdp3Bo%2Fc7tlLhUm%2BR3MZobxMetNRnbgTUBEj%2BmB%2FBthRiBjVTyzxVxhmyzVc9pI%2BrctCwnFUVM4xiUVESF1BpJ34btCpA8hZgyzxqBmzIcN3ZcTwNhJvBsvgJ0ufaYBJKgp5PjG%2Fr1V5S1uMPsUNp6XN%2BGZpaVjY9V%2FFk0fmqCNBqgLQjggq93VcSb%2BBfBLJHqM3Nn1r3gzcPCIktaQmrlPVA41rUZwkFxwdAdpRa6WIa%2FHOrq29Uuiih6MsCB0zzMX%2BHUSQNgED7bd4yUtEKzdhUVMbTLw6p61xr90vU2mW8438fBy%2FrSFM7FgxYdH%2BBLmO4DS54qXTcxz%2FTBIVLx5ur%2BW1IO90m0DfX3CqKbVqmJ%2FY%2FJfCRl5h07evNSuWBB9weivGv4Uq1%2Fp6ygX5EVZHncQSYvFF%2Bb5S7ZlqyCMVQGa%2FkvVRL3YIVIAvj6%2B17ZRJa8g3o8YsKWr94cSuSTsVh6X24YcCn5U2%2BERWN3pUFhqzAlPxr7%2Bxi%2Bgw%2FY7O39uh2Liyvjt4%2BejzYblzaa0kuBcG5sOsW3P5qlkcpwRXaEhG%2BGn50AMzD3vbDDBjqkAauBzyojVdneej%2FqC7h4NeOEJhhqsWVGYW0Y59BPa5K74v43pL8OzLOMKSIQjEzTOAGmFyPVe%2FmgTIxcf6h7rXRWqdQ9OxprTHYKc%2BrGZo5ZTonNeZHaw27wFVLf4ez5wg%2Fww1Sklesg%2BWiZgjESWEASRJ7rJGGTWN92uup6ccLrcT6nax9lk%2BTh%2BMSO14rJiYd8AOg957hRHHLdz1Z507Y%2FAbkv&X-Amz-Signature=64a08b2eb6458160251028a0fcead9b0856f821ce59a5d0186f4d088637443fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YSDTVOW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCj4D%2FfHxOiH018YP6cC9EIk1SW5zWrFSOGcWOjPbd%2BogIhAKhGrMnA8eYTXq2kCuFiaK6JFxseQcS0mJbwEJfANYbTKv8DCHwQABoMNjM3NDIzMTgzODA1IgzLcABIcEYjLYdbsX0q3AMGD7AQxfrKMDwfAOuc6sG3WEeLjkP3ZJ0BRA99sEM6sTYTLFDYj%2B1MGQqXOAw7C3QOhHVdp3Bo%2Fc7tlLhUm%2BR3MZobxMetNRnbgTUBEj%2BmB%2FBthRiBjVTyzxVxhmyzVc9pI%2BrctCwnFUVM4xiUVESF1BpJ34btCpA8hZgyzxqBmzIcN3ZcTwNhJvBsvgJ0ufaYBJKgp5PjG%2Fr1V5S1uMPsUNp6XN%2BGZpaVjY9V%2FFk0fmqCNBqgLQjggq93VcSb%2BBfBLJHqM3Nn1r3gzcPCIktaQmrlPVA41rUZwkFxwdAdpRa6WIa%2FHOrq29Uuiih6MsCB0zzMX%2BHUSQNgED7bd4yUtEKzdhUVMbTLw6p61xr90vU2mW8438fBy%2FrSFM7FgxYdH%2BBLmO4DS54qXTcxz%2FTBIVLx5ur%2BW1IO90m0DfX3CqKbVqmJ%2FY%2FJfCRl5h07evNSuWBB9weivGv4Uq1%2Fp6ygX5EVZHncQSYvFF%2Bb5S7ZlqyCMVQGa%2FkvVRL3YIVIAvj6%2B17ZRJa8g3o8YsKWr94cSuSTsVh6X24YcCn5U2%2BERWN3pUFhqzAlPxr7%2Bxi%2Bgw%2FY7O39uh2Liyvjt4%2BejzYblzaa0kuBcG5sOsW3P5qlkcpwRXaEhG%2BGn50AMzD3vbDDBjqkAauBzyojVdneej%2FqC7h4NeOEJhhqsWVGYW0Y59BPa5K74v43pL8OzLOMKSIQjEzTOAGmFyPVe%2FmgTIxcf6h7rXRWqdQ9OxprTHYKc%2BrGZo5ZTonNeZHaw27wFVLf4ez5wg%2Fww1Sklesg%2BWiZgjESWEASRJ7rJGGTWN92uup6ccLrcT6nax9lk%2BTh%2BMSO14rJiYd8AOg957hRHHLdz1Z507Y%2FAbkv&X-Amz-Signature=b8d52171a2933bbdc0dcf02abc202f4f2281b03136e9695f02e6abfd372f7a6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YSDTVOW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCj4D%2FfHxOiH018YP6cC9EIk1SW5zWrFSOGcWOjPbd%2BogIhAKhGrMnA8eYTXq2kCuFiaK6JFxseQcS0mJbwEJfANYbTKv8DCHwQABoMNjM3NDIzMTgzODA1IgzLcABIcEYjLYdbsX0q3AMGD7AQxfrKMDwfAOuc6sG3WEeLjkP3ZJ0BRA99sEM6sTYTLFDYj%2B1MGQqXOAw7C3QOhHVdp3Bo%2Fc7tlLhUm%2BR3MZobxMetNRnbgTUBEj%2BmB%2FBthRiBjVTyzxVxhmyzVc9pI%2BrctCwnFUVM4xiUVESF1BpJ34btCpA8hZgyzxqBmzIcN3ZcTwNhJvBsvgJ0ufaYBJKgp5PjG%2Fr1V5S1uMPsUNp6XN%2BGZpaVjY9V%2FFk0fmqCNBqgLQjggq93VcSb%2BBfBLJHqM3Nn1r3gzcPCIktaQmrlPVA41rUZwkFxwdAdpRa6WIa%2FHOrq29Uuiih6MsCB0zzMX%2BHUSQNgED7bd4yUtEKzdhUVMbTLw6p61xr90vU2mW8438fBy%2FrSFM7FgxYdH%2BBLmO4DS54qXTcxz%2FTBIVLx5ur%2BW1IO90m0DfX3CqKbVqmJ%2FY%2FJfCRl5h07evNSuWBB9weivGv4Uq1%2Fp6ygX5EVZHncQSYvFF%2Bb5S7ZlqyCMVQGa%2FkvVRL3YIVIAvj6%2B17ZRJa8g3o8YsKWr94cSuSTsVh6X24YcCn5U2%2BERWN3pUFhqzAlPxr7%2Bxi%2Bgw%2FY7O39uh2Liyvjt4%2BejzYblzaa0kuBcG5sOsW3P5qlkcpwRXaEhG%2BGn50AMzD3vbDDBjqkAauBzyojVdneej%2FqC7h4NeOEJhhqsWVGYW0Y59BPa5K74v43pL8OzLOMKSIQjEzTOAGmFyPVe%2FmgTIxcf6h7rXRWqdQ9OxprTHYKc%2BrGZo5ZTonNeZHaw27wFVLf4ez5wg%2Fww1Sklesg%2BWiZgjESWEASRJ7rJGGTWN92uup6ccLrcT6nax9lk%2BTh%2BMSO14rJiYd8AOg957hRHHLdz1Z507Y%2FAbkv&X-Amz-Signature=3bb242fa8fed1b6f7a72775b92a0fc4840301b9fa44e88eda9060171360c7358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YSDTVOW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCj4D%2FfHxOiH018YP6cC9EIk1SW5zWrFSOGcWOjPbd%2BogIhAKhGrMnA8eYTXq2kCuFiaK6JFxseQcS0mJbwEJfANYbTKv8DCHwQABoMNjM3NDIzMTgzODA1IgzLcABIcEYjLYdbsX0q3AMGD7AQxfrKMDwfAOuc6sG3WEeLjkP3ZJ0BRA99sEM6sTYTLFDYj%2B1MGQqXOAw7C3QOhHVdp3Bo%2Fc7tlLhUm%2BR3MZobxMetNRnbgTUBEj%2BmB%2FBthRiBjVTyzxVxhmyzVc9pI%2BrctCwnFUVM4xiUVESF1BpJ34btCpA8hZgyzxqBmzIcN3ZcTwNhJvBsvgJ0ufaYBJKgp5PjG%2Fr1V5S1uMPsUNp6XN%2BGZpaVjY9V%2FFk0fmqCNBqgLQjggq93VcSb%2BBfBLJHqM3Nn1r3gzcPCIktaQmrlPVA41rUZwkFxwdAdpRa6WIa%2FHOrq29Uuiih6MsCB0zzMX%2BHUSQNgED7bd4yUtEKzdhUVMbTLw6p61xr90vU2mW8438fBy%2FrSFM7FgxYdH%2BBLmO4DS54qXTcxz%2FTBIVLx5ur%2BW1IO90m0DfX3CqKbVqmJ%2FY%2FJfCRl5h07evNSuWBB9weivGv4Uq1%2Fp6ygX5EVZHncQSYvFF%2Bb5S7ZlqyCMVQGa%2FkvVRL3YIVIAvj6%2B17ZRJa8g3o8YsKWr94cSuSTsVh6X24YcCn5U2%2BERWN3pUFhqzAlPxr7%2Bxi%2Bgw%2FY7O39uh2Liyvjt4%2BejzYblzaa0kuBcG5sOsW3P5qlkcpwRXaEhG%2BGn50AMzD3vbDDBjqkAauBzyojVdneej%2FqC7h4NeOEJhhqsWVGYW0Y59BPa5K74v43pL8OzLOMKSIQjEzTOAGmFyPVe%2FmgTIxcf6h7rXRWqdQ9OxprTHYKc%2BrGZo5ZTonNeZHaw27wFVLf4ez5wg%2Fww1Sklesg%2BWiZgjESWEASRJ7rJGGTWN92uup6ccLrcT6nax9lk%2BTh%2BMSO14rJiYd8AOg957hRHHLdz1Z507Y%2FAbkv&X-Amz-Signature=f4e655480a947f0e3fdc16427bb47670c428cba06d7dea075b7df7f04f3400dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YSDTVOW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCj4D%2FfHxOiH018YP6cC9EIk1SW5zWrFSOGcWOjPbd%2BogIhAKhGrMnA8eYTXq2kCuFiaK6JFxseQcS0mJbwEJfANYbTKv8DCHwQABoMNjM3NDIzMTgzODA1IgzLcABIcEYjLYdbsX0q3AMGD7AQxfrKMDwfAOuc6sG3WEeLjkP3ZJ0BRA99sEM6sTYTLFDYj%2B1MGQqXOAw7C3QOhHVdp3Bo%2Fc7tlLhUm%2BR3MZobxMetNRnbgTUBEj%2BmB%2FBthRiBjVTyzxVxhmyzVc9pI%2BrctCwnFUVM4xiUVESF1BpJ34btCpA8hZgyzxqBmzIcN3ZcTwNhJvBsvgJ0ufaYBJKgp5PjG%2Fr1V5S1uMPsUNp6XN%2BGZpaVjY9V%2FFk0fmqCNBqgLQjggq93VcSb%2BBfBLJHqM3Nn1r3gzcPCIktaQmrlPVA41rUZwkFxwdAdpRa6WIa%2FHOrq29Uuiih6MsCB0zzMX%2BHUSQNgED7bd4yUtEKzdhUVMbTLw6p61xr90vU2mW8438fBy%2FrSFM7FgxYdH%2BBLmO4DS54qXTcxz%2FTBIVLx5ur%2BW1IO90m0DfX3CqKbVqmJ%2FY%2FJfCRl5h07evNSuWBB9weivGv4Uq1%2Fp6ygX5EVZHncQSYvFF%2Bb5S7ZlqyCMVQGa%2FkvVRL3YIVIAvj6%2B17ZRJa8g3o8YsKWr94cSuSTsVh6X24YcCn5U2%2BERWN3pUFhqzAlPxr7%2Bxi%2Bgw%2FY7O39uh2Liyvjt4%2BejzYblzaa0kuBcG5sOsW3P5qlkcpwRXaEhG%2BGn50AMzD3vbDDBjqkAauBzyojVdneej%2FqC7h4NeOEJhhqsWVGYW0Y59BPa5K74v43pL8OzLOMKSIQjEzTOAGmFyPVe%2FmgTIxcf6h7rXRWqdQ9OxprTHYKc%2BrGZo5ZTonNeZHaw27wFVLf4ez5wg%2Fww1Sklesg%2BWiZgjESWEASRJ7rJGGTWN92uup6ccLrcT6nax9lk%2BTh%2BMSO14rJiYd8AOg957hRHHLdz1Z507Y%2FAbkv&X-Amz-Signature=23699ae7e5e10736059d2b7e7b119bd0fd8aa672e1adf6643a6a5e3871a1f3b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
