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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGALCQFV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF5l8gtZNp6TQgnoZ94kwnPY1J47S0Y7y7QchFzUDyWKAiEAjTS37U0mA678kakPaHkFuMWZvaofS0L2P6Dxr4nph9oq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMm330HRBNsjmWH%2F0yrcA4jdDGaydd4Jzncq%2FRb0apWAZsTiPRUS89Z%2BJES3heKmKNWbexzGerkGdt2uCOq0KGdko%2FqOYY89GcW%2Fnxoxi1JYw9jlx3t454a97Ow4ly0N0xLrsqVA7CjxjcyStBFt0zmV1dEWP1ziSGk%2FeHHJ6liYQd%2Fcw47pCRjL0au%2Bj0d%2BE6BQPMYpoTgBn7%2Bai7Ka%2FcR2qem6Op4gZz8%2BCxuytJvwsSdE0hURuymvpzDGEJ7ktFElwCjcMmHmJWvkBUBo%2FjzE1hweb2PoQx%2FqASv802sEMw3AO%2BcSsM5WxDpJCGN7TV1tTKgPF29%2Br9H7mqbSuuVn2xwGab%2FvU1%2BOnTzXmd9OBRpQAiA3DKmaNjYyDPD5gJpSANY6vsk2Wr4cqe1n%2BFoJbYKRRArU3yjvwT9CK7QdLy3Z0gRivJ3xP8GffTrxGkY%2B%2FhH26FZHdfwOqeSo89V0YoVMsbPQHTImV2MR0sqSltwswWnmJ9R8AxjId5dwSsffTgx4t7uGAHQfMJ9vF8FwlJae6rO7wvx0jf6IOKCgKAOzdSwSQIYwyoyCkUeU2OqBYb5XfDUHyaz9X3vrvLQVNJf0NGZmC4QnUhYhQdJ7byuqSDp4j7uFWfKQ3Us%2BOHVohQWXOasj646jMNHY7L4GOqUBXG18DGn5Gm7Wj1kpIaYZksoHltF6wx5jciuDJiNi0vJ8xGu1rYdchZ9vCySXSZ3QoDTO9Y6OK%2B3HOcOE84EHKMnkELbNYP8kPmnimXXVj%2FwZQPUa0g9gm03Om7dNMpL5OdsoNRvl22wKbdQpN3tEreSWSfSL%2BMsoRtxV6SguiNXDBCXvISwBatb14GaluZS4WSiYN9ydMAgkakjwFrhbrVCr4nAT&X-Amz-Signature=85e0be3a1ef7fc49ed8bcd52779623dbddea9c540e2ffee63b3be9b069f2c67d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGALCQFV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF5l8gtZNp6TQgnoZ94kwnPY1J47S0Y7y7QchFzUDyWKAiEAjTS37U0mA678kakPaHkFuMWZvaofS0L2P6Dxr4nph9oq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMm330HRBNsjmWH%2F0yrcA4jdDGaydd4Jzncq%2FRb0apWAZsTiPRUS89Z%2BJES3heKmKNWbexzGerkGdt2uCOq0KGdko%2FqOYY89GcW%2Fnxoxi1JYw9jlx3t454a97Ow4ly0N0xLrsqVA7CjxjcyStBFt0zmV1dEWP1ziSGk%2FeHHJ6liYQd%2Fcw47pCRjL0au%2Bj0d%2BE6BQPMYpoTgBn7%2Bai7Ka%2FcR2qem6Op4gZz8%2BCxuytJvwsSdE0hURuymvpzDGEJ7ktFElwCjcMmHmJWvkBUBo%2FjzE1hweb2PoQx%2FqASv802sEMw3AO%2BcSsM5WxDpJCGN7TV1tTKgPF29%2Br9H7mqbSuuVn2xwGab%2FvU1%2BOnTzXmd9OBRpQAiA3DKmaNjYyDPD5gJpSANY6vsk2Wr4cqe1n%2BFoJbYKRRArU3yjvwT9CK7QdLy3Z0gRivJ3xP8GffTrxGkY%2B%2FhH26FZHdfwOqeSo89V0YoVMsbPQHTImV2MR0sqSltwswWnmJ9R8AxjId5dwSsffTgx4t7uGAHQfMJ9vF8FwlJae6rO7wvx0jf6IOKCgKAOzdSwSQIYwyoyCkUeU2OqBYb5XfDUHyaz9X3vrvLQVNJf0NGZmC4QnUhYhQdJ7byuqSDp4j7uFWfKQ3Us%2BOHVohQWXOasj646jMNHY7L4GOqUBXG18DGn5Gm7Wj1kpIaYZksoHltF6wx5jciuDJiNi0vJ8xGu1rYdchZ9vCySXSZ3QoDTO9Y6OK%2B3HOcOE84EHKMnkELbNYP8kPmnimXXVj%2FwZQPUa0g9gm03Om7dNMpL5OdsoNRvl22wKbdQpN3tEreSWSfSL%2BMsoRtxV6SguiNXDBCXvISwBatb14GaluZS4WSiYN9ydMAgkakjwFrhbrVCr4nAT&X-Amz-Signature=54c5413430f1a8ccacb39aa198c434bb3af9e962aa926b0b3e4d6f6a6197887f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGALCQFV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF5l8gtZNp6TQgnoZ94kwnPY1J47S0Y7y7QchFzUDyWKAiEAjTS37U0mA678kakPaHkFuMWZvaofS0L2P6Dxr4nph9oq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMm330HRBNsjmWH%2F0yrcA4jdDGaydd4Jzncq%2FRb0apWAZsTiPRUS89Z%2BJES3heKmKNWbexzGerkGdt2uCOq0KGdko%2FqOYY89GcW%2Fnxoxi1JYw9jlx3t454a97Ow4ly0N0xLrsqVA7CjxjcyStBFt0zmV1dEWP1ziSGk%2FeHHJ6liYQd%2Fcw47pCRjL0au%2Bj0d%2BE6BQPMYpoTgBn7%2Bai7Ka%2FcR2qem6Op4gZz8%2BCxuytJvwsSdE0hURuymvpzDGEJ7ktFElwCjcMmHmJWvkBUBo%2FjzE1hweb2PoQx%2FqASv802sEMw3AO%2BcSsM5WxDpJCGN7TV1tTKgPF29%2Br9H7mqbSuuVn2xwGab%2FvU1%2BOnTzXmd9OBRpQAiA3DKmaNjYyDPD5gJpSANY6vsk2Wr4cqe1n%2BFoJbYKRRArU3yjvwT9CK7QdLy3Z0gRivJ3xP8GffTrxGkY%2B%2FhH26FZHdfwOqeSo89V0YoVMsbPQHTImV2MR0sqSltwswWnmJ9R8AxjId5dwSsffTgx4t7uGAHQfMJ9vF8FwlJae6rO7wvx0jf6IOKCgKAOzdSwSQIYwyoyCkUeU2OqBYb5XfDUHyaz9X3vrvLQVNJf0NGZmC4QnUhYhQdJ7byuqSDp4j7uFWfKQ3Us%2BOHVohQWXOasj646jMNHY7L4GOqUBXG18DGn5Gm7Wj1kpIaYZksoHltF6wx5jciuDJiNi0vJ8xGu1rYdchZ9vCySXSZ3QoDTO9Y6OK%2B3HOcOE84EHKMnkELbNYP8kPmnimXXVj%2FwZQPUa0g9gm03Om7dNMpL5OdsoNRvl22wKbdQpN3tEreSWSfSL%2BMsoRtxV6SguiNXDBCXvISwBatb14GaluZS4WSiYN9ydMAgkakjwFrhbrVCr4nAT&X-Amz-Signature=b84a7b1f4b67523bdfbc7fdf4af3eb10ca906771cf4468393b45d18fd4f53f6d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGALCQFV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF5l8gtZNp6TQgnoZ94kwnPY1J47S0Y7y7QchFzUDyWKAiEAjTS37U0mA678kakPaHkFuMWZvaofS0L2P6Dxr4nph9oq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMm330HRBNsjmWH%2F0yrcA4jdDGaydd4Jzncq%2FRb0apWAZsTiPRUS89Z%2BJES3heKmKNWbexzGerkGdt2uCOq0KGdko%2FqOYY89GcW%2Fnxoxi1JYw9jlx3t454a97Ow4ly0N0xLrsqVA7CjxjcyStBFt0zmV1dEWP1ziSGk%2FeHHJ6liYQd%2Fcw47pCRjL0au%2Bj0d%2BE6BQPMYpoTgBn7%2Bai7Ka%2FcR2qem6Op4gZz8%2BCxuytJvwsSdE0hURuymvpzDGEJ7ktFElwCjcMmHmJWvkBUBo%2FjzE1hweb2PoQx%2FqASv802sEMw3AO%2BcSsM5WxDpJCGN7TV1tTKgPF29%2Br9H7mqbSuuVn2xwGab%2FvU1%2BOnTzXmd9OBRpQAiA3DKmaNjYyDPD5gJpSANY6vsk2Wr4cqe1n%2BFoJbYKRRArU3yjvwT9CK7QdLy3Z0gRivJ3xP8GffTrxGkY%2B%2FhH26FZHdfwOqeSo89V0YoVMsbPQHTImV2MR0sqSltwswWnmJ9R8AxjId5dwSsffTgx4t7uGAHQfMJ9vF8FwlJae6rO7wvx0jf6IOKCgKAOzdSwSQIYwyoyCkUeU2OqBYb5XfDUHyaz9X3vrvLQVNJf0NGZmC4QnUhYhQdJ7byuqSDp4j7uFWfKQ3Us%2BOHVohQWXOasj646jMNHY7L4GOqUBXG18DGn5Gm7Wj1kpIaYZksoHltF6wx5jciuDJiNi0vJ8xGu1rYdchZ9vCySXSZ3QoDTO9Y6OK%2B3HOcOE84EHKMnkELbNYP8kPmnimXXVj%2FwZQPUa0g9gm03Om7dNMpL5OdsoNRvl22wKbdQpN3tEreSWSfSL%2BMsoRtxV6SguiNXDBCXvISwBatb14GaluZS4WSiYN9ydMAgkakjwFrhbrVCr4nAT&X-Amz-Signature=e9e55ef894345cbda6416cdfea6af804f8e2890fc2b08995d034edf2d2e8f14e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGALCQFV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF5l8gtZNp6TQgnoZ94kwnPY1J47S0Y7y7QchFzUDyWKAiEAjTS37U0mA678kakPaHkFuMWZvaofS0L2P6Dxr4nph9oq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMm330HRBNsjmWH%2F0yrcA4jdDGaydd4Jzncq%2FRb0apWAZsTiPRUS89Z%2BJES3heKmKNWbexzGerkGdt2uCOq0KGdko%2FqOYY89GcW%2Fnxoxi1JYw9jlx3t454a97Ow4ly0N0xLrsqVA7CjxjcyStBFt0zmV1dEWP1ziSGk%2FeHHJ6liYQd%2Fcw47pCRjL0au%2Bj0d%2BE6BQPMYpoTgBn7%2Bai7Ka%2FcR2qem6Op4gZz8%2BCxuytJvwsSdE0hURuymvpzDGEJ7ktFElwCjcMmHmJWvkBUBo%2FjzE1hweb2PoQx%2FqASv802sEMw3AO%2BcSsM5WxDpJCGN7TV1tTKgPF29%2Br9H7mqbSuuVn2xwGab%2FvU1%2BOnTzXmd9OBRpQAiA3DKmaNjYyDPD5gJpSANY6vsk2Wr4cqe1n%2BFoJbYKRRArU3yjvwT9CK7QdLy3Z0gRivJ3xP8GffTrxGkY%2B%2FhH26FZHdfwOqeSo89V0YoVMsbPQHTImV2MR0sqSltwswWnmJ9R8AxjId5dwSsffTgx4t7uGAHQfMJ9vF8FwlJae6rO7wvx0jf6IOKCgKAOzdSwSQIYwyoyCkUeU2OqBYb5XfDUHyaz9X3vrvLQVNJf0NGZmC4QnUhYhQdJ7byuqSDp4j7uFWfKQ3Us%2BOHVohQWXOasj646jMNHY7L4GOqUBXG18DGn5Gm7Wj1kpIaYZksoHltF6wx5jciuDJiNi0vJ8xGu1rYdchZ9vCySXSZ3QoDTO9Y6OK%2B3HOcOE84EHKMnkELbNYP8kPmnimXXVj%2FwZQPUa0g9gm03Om7dNMpL5OdsoNRvl22wKbdQpN3tEreSWSfSL%2BMsoRtxV6SguiNXDBCXvISwBatb14GaluZS4WSiYN9ydMAgkakjwFrhbrVCr4nAT&X-Amz-Signature=4da261f0ba2e937be78eacae634bd88b824e9d9cb91fc77cedbebe1ef050f349&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGALCQFV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF5l8gtZNp6TQgnoZ94kwnPY1J47S0Y7y7QchFzUDyWKAiEAjTS37U0mA678kakPaHkFuMWZvaofS0L2P6Dxr4nph9oq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMm330HRBNsjmWH%2F0yrcA4jdDGaydd4Jzncq%2FRb0apWAZsTiPRUS89Z%2BJES3heKmKNWbexzGerkGdt2uCOq0KGdko%2FqOYY89GcW%2Fnxoxi1JYw9jlx3t454a97Ow4ly0N0xLrsqVA7CjxjcyStBFt0zmV1dEWP1ziSGk%2FeHHJ6liYQd%2Fcw47pCRjL0au%2Bj0d%2BE6BQPMYpoTgBn7%2Bai7Ka%2FcR2qem6Op4gZz8%2BCxuytJvwsSdE0hURuymvpzDGEJ7ktFElwCjcMmHmJWvkBUBo%2FjzE1hweb2PoQx%2FqASv802sEMw3AO%2BcSsM5WxDpJCGN7TV1tTKgPF29%2Br9H7mqbSuuVn2xwGab%2FvU1%2BOnTzXmd9OBRpQAiA3DKmaNjYyDPD5gJpSANY6vsk2Wr4cqe1n%2BFoJbYKRRArU3yjvwT9CK7QdLy3Z0gRivJ3xP8GffTrxGkY%2B%2FhH26FZHdfwOqeSo89V0YoVMsbPQHTImV2MR0sqSltwswWnmJ9R8AxjId5dwSsffTgx4t7uGAHQfMJ9vF8FwlJae6rO7wvx0jf6IOKCgKAOzdSwSQIYwyoyCkUeU2OqBYb5XfDUHyaz9X3vrvLQVNJf0NGZmC4QnUhYhQdJ7byuqSDp4j7uFWfKQ3Us%2BOHVohQWXOasj646jMNHY7L4GOqUBXG18DGn5Gm7Wj1kpIaYZksoHltF6wx5jciuDJiNi0vJ8xGu1rYdchZ9vCySXSZ3QoDTO9Y6OK%2B3HOcOE84EHKMnkELbNYP8kPmnimXXVj%2FwZQPUa0g9gm03Om7dNMpL5OdsoNRvl22wKbdQpN3tEreSWSfSL%2BMsoRtxV6SguiNXDBCXvISwBatb14GaluZS4WSiYN9ydMAgkakjwFrhbrVCr4nAT&X-Amz-Signature=851df351a8367f2eb2622accf60bfd0b74560bfc2e285eadceb28d1da1823956&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGALCQFV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIF5l8gtZNp6TQgnoZ94kwnPY1J47S0Y7y7QchFzUDyWKAiEAjTS37U0mA678kakPaHkFuMWZvaofS0L2P6Dxr4nph9oq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMm330HRBNsjmWH%2F0yrcA4jdDGaydd4Jzncq%2FRb0apWAZsTiPRUS89Z%2BJES3heKmKNWbexzGerkGdt2uCOq0KGdko%2FqOYY89GcW%2Fnxoxi1JYw9jlx3t454a97Ow4ly0N0xLrsqVA7CjxjcyStBFt0zmV1dEWP1ziSGk%2FeHHJ6liYQd%2Fcw47pCRjL0au%2Bj0d%2BE6BQPMYpoTgBn7%2Bai7Ka%2FcR2qem6Op4gZz8%2BCxuytJvwsSdE0hURuymvpzDGEJ7ktFElwCjcMmHmJWvkBUBo%2FjzE1hweb2PoQx%2FqASv802sEMw3AO%2BcSsM5WxDpJCGN7TV1tTKgPF29%2Br9H7mqbSuuVn2xwGab%2FvU1%2BOnTzXmd9OBRpQAiA3DKmaNjYyDPD5gJpSANY6vsk2Wr4cqe1n%2BFoJbYKRRArU3yjvwT9CK7QdLy3Z0gRivJ3xP8GffTrxGkY%2B%2FhH26FZHdfwOqeSo89V0YoVMsbPQHTImV2MR0sqSltwswWnmJ9R8AxjId5dwSsffTgx4t7uGAHQfMJ9vF8FwlJae6rO7wvx0jf6IOKCgKAOzdSwSQIYwyoyCkUeU2OqBYb5XfDUHyaz9X3vrvLQVNJf0NGZmC4QnUhYhQdJ7byuqSDp4j7uFWfKQ3Us%2BOHVohQWXOasj646jMNHY7L4GOqUBXG18DGn5Gm7Wj1kpIaYZksoHltF6wx5jciuDJiNi0vJ8xGu1rYdchZ9vCySXSZ3QoDTO9Y6OK%2B3HOcOE84EHKMnkELbNYP8kPmnimXXVj%2FwZQPUa0g9gm03Om7dNMpL5OdsoNRvl22wKbdQpN3tEreSWSfSL%2BMsoRtxV6SguiNXDBCXvISwBatb14GaluZS4WSiYN9ydMAgkakjwFrhbrVCr4nAT&X-Amz-Signature=5819a20ae4d5d1f07476d3f14f5a1856278db3a1ffab31132d79c57f808d9854&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
