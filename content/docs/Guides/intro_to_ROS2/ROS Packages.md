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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643PEH4J7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrtJdKOYe3Ec5pyleh%2B0k4BhMwoPQUmsSoLf5hTKgsoAiEA%2B3xG72M1guAPAEhXEe7%2Byg3ZfI8lwkqxLQmIWCf3Bm8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiDtlVH3378ZP%2BTQSrcA%2Bo9LLYGcJVQQZXTGQmpOAEiza6Xjb5Ky14asCII9T%2F%2BdG7MLGdsoJ7FC3JMZF6Dgle8Hc%2BK3MZGrES%2BH4fPtRIJLQuECiADuV8xh3NIyt0YYYR4skPeAGFIaxK7z%2Fi8bpSwHiI2sh2n1vipBxX2WULGvBOTPsM1tLBtDpTolqXUnrwDt9j6hGphk96LO3cX1vDXoejOgABFB%2BrxPA89YkJxvBcj2nbwTOlZSNAhK8vmgf%2B3sZBe%2BPHPrpCXEku8CYOkwUrWxrh502GU3TPV8i%2BP1SMltgKAqjvxwKV7viRPVE13EIpD2zQayrzeCcWDHyunez4LWiUWak%2BWdUconzfZX0pC4XbRblr9lFeuEEhPZiUbWa%2BHXzR%2BsrniqxR8PEzBvICwv8ZVbDMVYX1WK0T%2FRPgmfhNtBaEXzIjDR15aoDMPQN45k0j7eMRF%2FbZQVhICFtYiJ3p4OiYdngZIeTG8DOyLd9He7RnN7K1ZWriZ%2B%2FCDiqhxxWrD5OKhDSMe1uAMG020p8b2od431kKDqFPaQE6ei7%2F8cSNKHm6%2BFy9HqBOyLMQjkKL0pWDWc6v%2F%2FEJ0YxlGGNLSkVrUQQ%2Bq9HWtXdADNQnZ%2Bv9KTDWPjlU1uin0%2F%2FrBPZQNz9s2MPy4q8EGOqUBav5ctwQcsXtG86REsUj%2Boe3WmvmxFISl8IdEF3xIGC8rADmTrDpEu91nj4lz%2F8E3Lvwl0Nhml8UJEEel4xVeXxcoWaq3haYKaXe8sN8jn8WtCGNDGU15iG%2FV1Dz0FZk8m5lveu87IJBem%2FHMSi7RA3t2TkUjQdM26kehI7gY3hj4e8wppkhcQid20GaHTP5QKTRJ5ekKy0PlhK53OYnix8odjnfu&X-Amz-Signature=df644afe2698dace6c9672040e879acc62be224583a8f2cee9e1e61c216d3c7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643PEH4J7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrtJdKOYe3Ec5pyleh%2B0k4BhMwoPQUmsSoLf5hTKgsoAiEA%2B3xG72M1guAPAEhXEe7%2Byg3ZfI8lwkqxLQmIWCf3Bm8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiDtlVH3378ZP%2BTQSrcA%2Bo9LLYGcJVQQZXTGQmpOAEiza6Xjb5Ky14asCII9T%2F%2BdG7MLGdsoJ7FC3JMZF6Dgle8Hc%2BK3MZGrES%2BH4fPtRIJLQuECiADuV8xh3NIyt0YYYR4skPeAGFIaxK7z%2Fi8bpSwHiI2sh2n1vipBxX2WULGvBOTPsM1tLBtDpTolqXUnrwDt9j6hGphk96LO3cX1vDXoejOgABFB%2BrxPA89YkJxvBcj2nbwTOlZSNAhK8vmgf%2B3sZBe%2BPHPrpCXEku8CYOkwUrWxrh502GU3TPV8i%2BP1SMltgKAqjvxwKV7viRPVE13EIpD2zQayrzeCcWDHyunez4LWiUWak%2BWdUconzfZX0pC4XbRblr9lFeuEEhPZiUbWa%2BHXzR%2BsrniqxR8PEzBvICwv8ZVbDMVYX1WK0T%2FRPgmfhNtBaEXzIjDR15aoDMPQN45k0j7eMRF%2FbZQVhICFtYiJ3p4OiYdngZIeTG8DOyLd9He7RnN7K1ZWriZ%2B%2FCDiqhxxWrD5OKhDSMe1uAMG020p8b2od431kKDqFPaQE6ei7%2F8cSNKHm6%2BFy9HqBOyLMQjkKL0pWDWc6v%2F%2FEJ0YxlGGNLSkVrUQQ%2Bq9HWtXdADNQnZ%2Bv9KTDWPjlU1uin0%2F%2FrBPZQNz9s2MPy4q8EGOqUBav5ctwQcsXtG86REsUj%2Boe3WmvmxFISl8IdEF3xIGC8rADmTrDpEu91nj4lz%2F8E3Lvwl0Nhml8UJEEel4xVeXxcoWaq3haYKaXe8sN8jn8WtCGNDGU15iG%2FV1Dz0FZk8m5lveu87IJBem%2FHMSi7RA3t2TkUjQdM26kehI7gY3hj4e8wppkhcQid20GaHTP5QKTRJ5ekKy0PlhK53OYnix8odjnfu&X-Amz-Signature=2e5f1d9091978ad72d93cdd62cd835b290da0d2da44672165cc91fa4f7c37beb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643PEH4J7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrtJdKOYe3Ec5pyleh%2B0k4BhMwoPQUmsSoLf5hTKgsoAiEA%2B3xG72M1guAPAEhXEe7%2Byg3ZfI8lwkqxLQmIWCf3Bm8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiDtlVH3378ZP%2BTQSrcA%2Bo9LLYGcJVQQZXTGQmpOAEiza6Xjb5Ky14asCII9T%2F%2BdG7MLGdsoJ7FC3JMZF6Dgle8Hc%2BK3MZGrES%2BH4fPtRIJLQuECiADuV8xh3NIyt0YYYR4skPeAGFIaxK7z%2Fi8bpSwHiI2sh2n1vipBxX2WULGvBOTPsM1tLBtDpTolqXUnrwDt9j6hGphk96LO3cX1vDXoejOgABFB%2BrxPA89YkJxvBcj2nbwTOlZSNAhK8vmgf%2B3sZBe%2BPHPrpCXEku8CYOkwUrWxrh502GU3TPV8i%2BP1SMltgKAqjvxwKV7viRPVE13EIpD2zQayrzeCcWDHyunez4LWiUWak%2BWdUconzfZX0pC4XbRblr9lFeuEEhPZiUbWa%2BHXzR%2BsrniqxR8PEzBvICwv8ZVbDMVYX1WK0T%2FRPgmfhNtBaEXzIjDR15aoDMPQN45k0j7eMRF%2FbZQVhICFtYiJ3p4OiYdngZIeTG8DOyLd9He7RnN7K1ZWriZ%2B%2FCDiqhxxWrD5OKhDSMe1uAMG020p8b2od431kKDqFPaQE6ei7%2F8cSNKHm6%2BFy9HqBOyLMQjkKL0pWDWc6v%2F%2FEJ0YxlGGNLSkVrUQQ%2Bq9HWtXdADNQnZ%2Bv9KTDWPjlU1uin0%2F%2FrBPZQNz9s2MPy4q8EGOqUBav5ctwQcsXtG86REsUj%2Boe3WmvmxFISl8IdEF3xIGC8rADmTrDpEu91nj4lz%2F8E3Lvwl0Nhml8UJEEel4xVeXxcoWaq3haYKaXe8sN8jn8WtCGNDGU15iG%2FV1Dz0FZk8m5lveu87IJBem%2FHMSi7RA3t2TkUjQdM26kehI7gY3hj4e8wppkhcQid20GaHTP5QKTRJ5ekKy0PlhK53OYnix8odjnfu&X-Amz-Signature=d7841c5d3bd609712a6803893c3a2ab1f2fc3dd9d2b653a1ff24a5078cb48215&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643PEH4J7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrtJdKOYe3Ec5pyleh%2B0k4BhMwoPQUmsSoLf5hTKgsoAiEA%2B3xG72M1guAPAEhXEe7%2Byg3ZfI8lwkqxLQmIWCf3Bm8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiDtlVH3378ZP%2BTQSrcA%2Bo9LLYGcJVQQZXTGQmpOAEiza6Xjb5Ky14asCII9T%2F%2BdG7MLGdsoJ7FC3JMZF6Dgle8Hc%2BK3MZGrES%2BH4fPtRIJLQuECiADuV8xh3NIyt0YYYR4skPeAGFIaxK7z%2Fi8bpSwHiI2sh2n1vipBxX2WULGvBOTPsM1tLBtDpTolqXUnrwDt9j6hGphk96LO3cX1vDXoejOgABFB%2BrxPA89YkJxvBcj2nbwTOlZSNAhK8vmgf%2B3sZBe%2BPHPrpCXEku8CYOkwUrWxrh502GU3TPV8i%2BP1SMltgKAqjvxwKV7viRPVE13EIpD2zQayrzeCcWDHyunez4LWiUWak%2BWdUconzfZX0pC4XbRblr9lFeuEEhPZiUbWa%2BHXzR%2BsrniqxR8PEzBvICwv8ZVbDMVYX1WK0T%2FRPgmfhNtBaEXzIjDR15aoDMPQN45k0j7eMRF%2FbZQVhICFtYiJ3p4OiYdngZIeTG8DOyLd9He7RnN7K1ZWriZ%2B%2FCDiqhxxWrD5OKhDSMe1uAMG020p8b2od431kKDqFPaQE6ei7%2F8cSNKHm6%2BFy9HqBOyLMQjkKL0pWDWc6v%2F%2FEJ0YxlGGNLSkVrUQQ%2Bq9HWtXdADNQnZ%2Bv9KTDWPjlU1uin0%2F%2FrBPZQNz9s2MPy4q8EGOqUBav5ctwQcsXtG86REsUj%2Boe3WmvmxFISl8IdEF3xIGC8rADmTrDpEu91nj4lz%2F8E3Lvwl0Nhml8UJEEel4xVeXxcoWaq3haYKaXe8sN8jn8WtCGNDGU15iG%2FV1Dz0FZk8m5lveu87IJBem%2FHMSi7RA3t2TkUjQdM26kehI7gY3hj4e8wppkhcQid20GaHTP5QKTRJ5ekKy0PlhK53OYnix8odjnfu&X-Amz-Signature=b5698ce385e5428d07e0db4d560c63597b4040b9b39c9a9f5a80d6fb8d108c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643PEH4J7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrtJdKOYe3Ec5pyleh%2B0k4BhMwoPQUmsSoLf5hTKgsoAiEA%2B3xG72M1guAPAEhXEe7%2Byg3ZfI8lwkqxLQmIWCf3Bm8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiDtlVH3378ZP%2BTQSrcA%2Bo9LLYGcJVQQZXTGQmpOAEiza6Xjb5Ky14asCII9T%2F%2BdG7MLGdsoJ7FC3JMZF6Dgle8Hc%2BK3MZGrES%2BH4fPtRIJLQuECiADuV8xh3NIyt0YYYR4skPeAGFIaxK7z%2Fi8bpSwHiI2sh2n1vipBxX2WULGvBOTPsM1tLBtDpTolqXUnrwDt9j6hGphk96LO3cX1vDXoejOgABFB%2BrxPA89YkJxvBcj2nbwTOlZSNAhK8vmgf%2B3sZBe%2BPHPrpCXEku8CYOkwUrWxrh502GU3TPV8i%2BP1SMltgKAqjvxwKV7viRPVE13EIpD2zQayrzeCcWDHyunez4LWiUWak%2BWdUconzfZX0pC4XbRblr9lFeuEEhPZiUbWa%2BHXzR%2BsrniqxR8PEzBvICwv8ZVbDMVYX1WK0T%2FRPgmfhNtBaEXzIjDR15aoDMPQN45k0j7eMRF%2FbZQVhICFtYiJ3p4OiYdngZIeTG8DOyLd9He7RnN7K1ZWriZ%2B%2FCDiqhxxWrD5OKhDSMe1uAMG020p8b2od431kKDqFPaQE6ei7%2F8cSNKHm6%2BFy9HqBOyLMQjkKL0pWDWc6v%2F%2FEJ0YxlGGNLSkVrUQQ%2Bq9HWtXdADNQnZ%2Bv9KTDWPjlU1uin0%2F%2FrBPZQNz9s2MPy4q8EGOqUBav5ctwQcsXtG86REsUj%2Boe3WmvmxFISl8IdEF3xIGC8rADmTrDpEu91nj4lz%2F8E3Lvwl0Nhml8UJEEel4xVeXxcoWaq3haYKaXe8sN8jn8WtCGNDGU15iG%2FV1Dz0FZk8m5lveu87IJBem%2FHMSi7RA3t2TkUjQdM26kehI7gY3hj4e8wppkhcQid20GaHTP5QKTRJ5ekKy0PlhK53OYnix8odjnfu&X-Amz-Signature=3fc836385893228615806d28bc977435785d9487870dd9fe569a0254a2d1abb4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643PEH4J7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrtJdKOYe3Ec5pyleh%2B0k4BhMwoPQUmsSoLf5hTKgsoAiEA%2B3xG72M1guAPAEhXEe7%2Byg3ZfI8lwkqxLQmIWCf3Bm8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiDtlVH3378ZP%2BTQSrcA%2Bo9LLYGcJVQQZXTGQmpOAEiza6Xjb5Ky14asCII9T%2F%2BdG7MLGdsoJ7FC3JMZF6Dgle8Hc%2BK3MZGrES%2BH4fPtRIJLQuECiADuV8xh3NIyt0YYYR4skPeAGFIaxK7z%2Fi8bpSwHiI2sh2n1vipBxX2WULGvBOTPsM1tLBtDpTolqXUnrwDt9j6hGphk96LO3cX1vDXoejOgABFB%2BrxPA89YkJxvBcj2nbwTOlZSNAhK8vmgf%2B3sZBe%2BPHPrpCXEku8CYOkwUrWxrh502GU3TPV8i%2BP1SMltgKAqjvxwKV7viRPVE13EIpD2zQayrzeCcWDHyunez4LWiUWak%2BWdUconzfZX0pC4XbRblr9lFeuEEhPZiUbWa%2BHXzR%2BsrniqxR8PEzBvICwv8ZVbDMVYX1WK0T%2FRPgmfhNtBaEXzIjDR15aoDMPQN45k0j7eMRF%2FbZQVhICFtYiJ3p4OiYdngZIeTG8DOyLd9He7RnN7K1ZWriZ%2B%2FCDiqhxxWrD5OKhDSMe1uAMG020p8b2od431kKDqFPaQE6ei7%2F8cSNKHm6%2BFy9HqBOyLMQjkKL0pWDWc6v%2F%2FEJ0YxlGGNLSkVrUQQ%2Bq9HWtXdADNQnZ%2Bv9KTDWPjlU1uin0%2F%2FrBPZQNz9s2MPy4q8EGOqUBav5ctwQcsXtG86REsUj%2Boe3WmvmxFISl8IdEF3xIGC8rADmTrDpEu91nj4lz%2F8E3Lvwl0Nhml8UJEEel4xVeXxcoWaq3haYKaXe8sN8jn8WtCGNDGU15iG%2FV1Dz0FZk8m5lveu87IJBem%2FHMSi7RA3t2TkUjQdM26kehI7gY3hj4e8wppkhcQid20GaHTP5QKTRJ5ekKy0PlhK53OYnix8odjnfu&X-Amz-Signature=9cb1bbe44572cccdd94c66dd47eb3f63d0a061a8b4ef499e01813a1543cf2855&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643PEH4J7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrtJdKOYe3Ec5pyleh%2B0k4BhMwoPQUmsSoLf5hTKgsoAiEA%2B3xG72M1guAPAEhXEe7%2Byg3ZfI8lwkqxLQmIWCf3Bm8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiDtlVH3378ZP%2BTQSrcA%2Bo9LLYGcJVQQZXTGQmpOAEiza6Xjb5Ky14asCII9T%2F%2BdG7MLGdsoJ7FC3JMZF6Dgle8Hc%2BK3MZGrES%2BH4fPtRIJLQuECiADuV8xh3NIyt0YYYR4skPeAGFIaxK7z%2Fi8bpSwHiI2sh2n1vipBxX2WULGvBOTPsM1tLBtDpTolqXUnrwDt9j6hGphk96LO3cX1vDXoejOgABFB%2BrxPA89YkJxvBcj2nbwTOlZSNAhK8vmgf%2B3sZBe%2BPHPrpCXEku8CYOkwUrWxrh502GU3TPV8i%2BP1SMltgKAqjvxwKV7viRPVE13EIpD2zQayrzeCcWDHyunez4LWiUWak%2BWdUconzfZX0pC4XbRblr9lFeuEEhPZiUbWa%2BHXzR%2BsrniqxR8PEzBvICwv8ZVbDMVYX1WK0T%2FRPgmfhNtBaEXzIjDR15aoDMPQN45k0j7eMRF%2FbZQVhICFtYiJ3p4OiYdngZIeTG8DOyLd9He7RnN7K1ZWriZ%2B%2FCDiqhxxWrD5OKhDSMe1uAMG020p8b2od431kKDqFPaQE6ei7%2F8cSNKHm6%2BFy9HqBOyLMQjkKL0pWDWc6v%2F%2FEJ0YxlGGNLSkVrUQQ%2Bq9HWtXdADNQnZ%2Bv9KTDWPjlU1uin0%2F%2FrBPZQNz9s2MPy4q8EGOqUBav5ctwQcsXtG86REsUj%2Boe3WmvmxFISl8IdEF3xIGC8rADmTrDpEu91nj4lz%2F8E3Lvwl0Nhml8UJEEel4xVeXxcoWaq3haYKaXe8sN8jn8WtCGNDGU15iG%2FV1Dz0FZk8m5lveu87IJBem%2FHMSi7RA3t2TkUjQdM26kehI7gY3hj4e8wppkhcQid20GaHTP5QKTRJ5ekKy0PlhK53OYnix8odjnfu&X-Amz-Signature=05c1009fc9da8469554f55a4a4fa080d9b8ccd71e6d2708574b24d810d53d552&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
