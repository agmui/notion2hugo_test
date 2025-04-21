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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RBQ7AB3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD%2BATaBXuAraUfoyY4bD2LscdPYWOQnfBfZloLqsawW%2BQIhAOkxmuHFeJlaluDGHCN%2F1%2FVX1V1RmGmB1D1n%2FJwwOCOGKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUf7orKeficgm4G0Eq3AOjWvaHEse7D7bHNI5xD9nsFXEInRr0WGq0bqeModLMgnD4%2Ftmpv%2BiV08Ebnsw0Vjf5T%2BPrXogQ9kshGbGKMUyMfhGf%2F7i%2Bs4rmM3%2BA9vFM3PHtAdICpFV3XLuSSSoN3f4IMfqhMBPLPu%2BSSy55E0Kdxg1PgML46LwBz40puvXlSqL4WAjeJH94Nq%2Bh3wVOQBc2V5RLnXDAkWHzXTCUVjS9Pi%2FoxfUmdclhOPcXb7hqnzSaXp8cYiugUAKJD0oPlC3Ed0Ru4rbeihoLKp5mUDRcGkT1s0HI5d4oxTLuQdDq5aRQcQ4NM4WvfHCGVgwRR4iVwYAk9tApCqcy7kNN%2BR9DSRx%2F7EugemmaIEQbggNGqhv7JDRnsdTx7uA9AnescDFVF6gXz5%2BA2VZXzmx%2Be7tNSolBkjNaGvDBjfygKRBDxqolZKcCfX6ag8lkPdq8ATN5e5weTHb%2B%2FS4yfhO0cWGi5s5WJtW1Byx5wB5p%2FH%2BAHk8gbfRU4XxiLAFlxNLnK2XNjfE4abNrJVpcouY%2BPA%2FUzdnauXB4BptJXPDvw1hHISIQ4ErUyUJuXGU8%2Bx4lcb2mb5G8mGcxyxr4G6us3hqSsmEuGimkDXi%2F42HZfztqhvRM%2FLU774gxf2E5cTCyuZrABjqkAWK801OLAz28viZm73rEAEVGvnD8eWtlx9Yn66HOgzUW82Q5Sxy5Kg1lRASu3imXQ4wYc8gVLicaD0uBWpj5ks%2F33fzIZ3r57AzrnloRr00GBvwkm3oy99VgzjFDSmsAqBg8YSKmOMSEqFKtyXOVDLv%2Bkx5b3MZfMUclk0qXnfPMzSPpCbGtIsfIsHnI%2B6Ov85aQEfHnXNE6CmdYJwJvRLgkdH4n&X-Amz-Signature=9aab4686e9b7fe075efd97b89ae1ee5759ede05cfab48e2507992ac8f6460b22&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RBQ7AB3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD%2BATaBXuAraUfoyY4bD2LscdPYWOQnfBfZloLqsawW%2BQIhAOkxmuHFeJlaluDGHCN%2F1%2FVX1V1RmGmB1D1n%2FJwwOCOGKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUf7orKeficgm4G0Eq3AOjWvaHEse7D7bHNI5xD9nsFXEInRr0WGq0bqeModLMgnD4%2Ftmpv%2BiV08Ebnsw0Vjf5T%2BPrXogQ9kshGbGKMUyMfhGf%2F7i%2Bs4rmM3%2BA9vFM3PHtAdICpFV3XLuSSSoN3f4IMfqhMBPLPu%2BSSy55E0Kdxg1PgML46LwBz40puvXlSqL4WAjeJH94Nq%2Bh3wVOQBc2V5RLnXDAkWHzXTCUVjS9Pi%2FoxfUmdclhOPcXb7hqnzSaXp8cYiugUAKJD0oPlC3Ed0Ru4rbeihoLKp5mUDRcGkT1s0HI5d4oxTLuQdDq5aRQcQ4NM4WvfHCGVgwRR4iVwYAk9tApCqcy7kNN%2BR9DSRx%2F7EugemmaIEQbggNGqhv7JDRnsdTx7uA9AnescDFVF6gXz5%2BA2VZXzmx%2Be7tNSolBkjNaGvDBjfygKRBDxqolZKcCfX6ag8lkPdq8ATN5e5weTHb%2B%2FS4yfhO0cWGi5s5WJtW1Byx5wB5p%2FH%2BAHk8gbfRU4XxiLAFlxNLnK2XNjfE4abNrJVpcouY%2BPA%2FUzdnauXB4BptJXPDvw1hHISIQ4ErUyUJuXGU8%2Bx4lcb2mb5G8mGcxyxr4G6us3hqSsmEuGimkDXi%2F42HZfztqhvRM%2FLU774gxf2E5cTCyuZrABjqkAWK801OLAz28viZm73rEAEVGvnD8eWtlx9Yn66HOgzUW82Q5Sxy5Kg1lRASu3imXQ4wYc8gVLicaD0uBWpj5ks%2F33fzIZ3r57AzrnloRr00GBvwkm3oy99VgzjFDSmsAqBg8YSKmOMSEqFKtyXOVDLv%2Bkx5b3MZfMUclk0qXnfPMzSPpCbGtIsfIsHnI%2B6Ov85aQEfHnXNE6CmdYJwJvRLgkdH4n&X-Amz-Signature=b3a8ae3c9ae00923458f67fad76623bcebea8553f92fc1c9f759f2155c42be47&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RBQ7AB3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD%2BATaBXuAraUfoyY4bD2LscdPYWOQnfBfZloLqsawW%2BQIhAOkxmuHFeJlaluDGHCN%2F1%2FVX1V1RmGmB1D1n%2FJwwOCOGKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUf7orKeficgm4G0Eq3AOjWvaHEse7D7bHNI5xD9nsFXEInRr0WGq0bqeModLMgnD4%2Ftmpv%2BiV08Ebnsw0Vjf5T%2BPrXogQ9kshGbGKMUyMfhGf%2F7i%2Bs4rmM3%2BA9vFM3PHtAdICpFV3XLuSSSoN3f4IMfqhMBPLPu%2BSSy55E0Kdxg1PgML46LwBz40puvXlSqL4WAjeJH94Nq%2Bh3wVOQBc2V5RLnXDAkWHzXTCUVjS9Pi%2FoxfUmdclhOPcXb7hqnzSaXp8cYiugUAKJD0oPlC3Ed0Ru4rbeihoLKp5mUDRcGkT1s0HI5d4oxTLuQdDq5aRQcQ4NM4WvfHCGVgwRR4iVwYAk9tApCqcy7kNN%2BR9DSRx%2F7EugemmaIEQbggNGqhv7JDRnsdTx7uA9AnescDFVF6gXz5%2BA2VZXzmx%2Be7tNSolBkjNaGvDBjfygKRBDxqolZKcCfX6ag8lkPdq8ATN5e5weTHb%2B%2FS4yfhO0cWGi5s5WJtW1Byx5wB5p%2FH%2BAHk8gbfRU4XxiLAFlxNLnK2XNjfE4abNrJVpcouY%2BPA%2FUzdnauXB4BptJXPDvw1hHISIQ4ErUyUJuXGU8%2Bx4lcb2mb5G8mGcxyxr4G6us3hqSsmEuGimkDXi%2F42HZfztqhvRM%2FLU774gxf2E5cTCyuZrABjqkAWK801OLAz28viZm73rEAEVGvnD8eWtlx9Yn66HOgzUW82Q5Sxy5Kg1lRASu3imXQ4wYc8gVLicaD0uBWpj5ks%2F33fzIZ3r57AzrnloRr00GBvwkm3oy99VgzjFDSmsAqBg8YSKmOMSEqFKtyXOVDLv%2Bkx5b3MZfMUclk0qXnfPMzSPpCbGtIsfIsHnI%2B6Ov85aQEfHnXNE6CmdYJwJvRLgkdH4n&X-Amz-Signature=b6a90b9012471d1fb678e66d0b2fbe87b1206abbed6f020dbfc6f222f09fa042&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RBQ7AB3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD%2BATaBXuAraUfoyY4bD2LscdPYWOQnfBfZloLqsawW%2BQIhAOkxmuHFeJlaluDGHCN%2F1%2FVX1V1RmGmB1D1n%2FJwwOCOGKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUf7orKeficgm4G0Eq3AOjWvaHEse7D7bHNI5xD9nsFXEInRr0WGq0bqeModLMgnD4%2Ftmpv%2BiV08Ebnsw0Vjf5T%2BPrXogQ9kshGbGKMUyMfhGf%2F7i%2Bs4rmM3%2BA9vFM3PHtAdICpFV3XLuSSSoN3f4IMfqhMBPLPu%2BSSy55E0Kdxg1PgML46LwBz40puvXlSqL4WAjeJH94Nq%2Bh3wVOQBc2V5RLnXDAkWHzXTCUVjS9Pi%2FoxfUmdclhOPcXb7hqnzSaXp8cYiugUAKJD0oPlC3Ed0Ru4rbeihoLKp5mUDRcGkT1s0HI5d4oxTLuQdDq5aRQcQ4NM4WvfHCGVgwRR4iVwYAk9tApCqcy7kNN%2BR9DSRx%2F7EugemmaIEQbggNGqhv7JDRnsdTx7uA9AnescDFVF6gXz5%2BA2VZXzmx%2Be7tNSolBkjNaGvDBjfygKRBDxqolZKcCfX6ag8lkPdq8ATN5e5weTHb%2B%2FS4yfhO0cWGi5s5WJtW1Byx5wB5p%2FH%2BAHk8gbfRU4XxiLAFlxNLnK2XNjfE4abNrJVpcouY%2BPA%2FUzdnauXB4BptJXPDvw1hHISIQ4ErUyUJuXGU8%2Bx4lcb2mb5G8mGcxyxr4G6us3hqSsmEuGimkDXi%2F42HZfztqhvRM%2FLU774gxf2E5cTCyuZrABjqkAWK801OLAz28viZm73rEAEVGvnD8eWtlx9Yn66HOgzUW82Q5Sxy5Kg1lRASu3imXQ4wYc8gVLicaD0uBWpj5ks%2F33fzIZ3r57AzrnloRr00GBvwkm3oy99VgzjFDSmsAqBg8YSKmOMSEqFKtyXOVDLv%2Bkx5b3MZfMUclk0qXnfPMzSPpCbGtIsfIsHnI%2B6Ov85aQEfHnXNE6CmdYJwJvRLgkdH4n&X-Amz-Signature=ef663e49834f3ea7cef6c7ddc25534cf8a319dbcd8f85494885aad3d880af754&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RBQ7AB3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD%2BATaBXuAraUfoyY4bD2LscdPYWOQnfBfZloLqsawW%2BQIhAOkxmuHFeJlaluDGHCN%2F1%2FVX1V1RmGmB1D1n%2FJwwOCOGKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUf7orKeficgm4G0Eq3AOjWvaHEse7D7bHNI5xD9nsFXEInRr0WGq0bqeModLMgnD4%2Ftmpv%2BiV08Ebnsw0Vjf5T%2BPrXogQ9kshGbGKMUyMfhGf%2F7i%2Bs4rmM3%2BA9vFM3PHtAdICpFV3XLuSSSoN3f4IMfqhMBPLPu%2BSSy55E0Kdxg1PgML46LwBz40puvXlSqL4WAjeJH94Nq%2Bh3wVOQBc2V5RLnXDAkWHzXTCUVjS9Pi%2FoxfUmdclhOPcXb7hqnzSaXp8cYiugUAKJD0oPlC3Ed0Ru4rbeihoLKp5mUDRcGkT1s0HI5d4oxTLuQdDq5aRQcQ4NM4WvfHCGVgwRR4iVwYAk9tApCqcy7kNN%2BR9DSRx%2F7EugemmaIEQbggNGqhv7JDRnsdTx7uA9AnescDFVF6gXz5%2BA2VZXzmx%2Be7tNSolBkjNaGvDBjfygKRBDxqolZKcCfX6ag8lkPdq8ATN5e5weTHb%2B%2FS4yfhO0cWGi5s5WJtW1Byx5wB5p%2FH%2BAHk8gbfRU4XxiLAFlxNLnK2XNjfE4abNrJVpcouY%2BPA%2FUzdnauXB4BptJXPDvw1hHISIQ4ErUyUJuXGU8%2Bx4lcb2mb5G8mGcxyxr4G6us3hqSsmEuGimkDXi%2F42HZfztqhvRM%2FLU774gxf2E5cTCyuZrABjqkAWK801OLAz28viZm73rEAEVGvnD8eWtlx9Yn66HOgzUW82Q5Sxy5Kg1lRASu3imXQ4wYc8gVLicaD0uBWpj5ks%2F33fzIZ3r57AzrnloRr00GBvwkm3oy99VgzjFDSmsAqBg8YSKmOMSEqFKtyXOVDLv%2Bkx5b3MZfMUclk0qXnfPMzSPpCbGtIsfIsHnI%2B6Ov85aQEfHnXNE6CmdYJwJvRLgkdH4n&X-Amz-Signature=75d3f923f0f4b75d5520f98366956e44cca7019f1e167777bb457ed8990bb9f0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RBQ7AB3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD%2BATaBXuAraUfoyY4bD2LscdPYWOQnfBfZloLqsawW%2BQIhAOkxmuHFeJlaluDGHCN%2F1%2FVX1V1RmGmB1D1n%2FJwwOCOGKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUf7orKeficgm4G0Eq3AOjWvaHEse7D7bHNI5xD9nsFXEInRr0WGq0bqeModLMgnD4%2Ftmpv%2BiV08Ebnsw0Vjf5T%2BPrXogQ9kshGbGKMUyMfhGf%2F7i%2Bs4rmM3%2BA9vFM3PHtAdICpFV3XLuSSSoN3f4IMfqhMBPLPu%2BSSy55E0Kdxg1PgML46LwBz40puvXlSqL4WAjeJH94Nq%2Bh3wVOQBc2V5RLnXDAkWHzXTCUVjS9Pi%2FoxfUmdclhOPcXb7hqnzSaXp8cYiugUAKJD0oPlC3Ed0Ru4rbeihoLKp5mUDRcGkT1s0HI5d4oxTLuQdDq5aRQcQ4NM4WvfHCGVgwRR4iVwYAk9tApCqcy7kNN%2BR9DSRx%2F7EugemmaIEQbggNGqhv7JDRnsdTx7uA9AnescDFVF6gXz5%2BA2VZXzmx%2Be7tNSolBkjNaGvDBjfygKRBDxqolZKcCfX6ag8lkPdq8ATN5e5weTHb%2B%2FS4yfhO0cWGi5s5WJtW1Byx5wB5p%2FH%2BAHk8gbfRU4XxiLAFlxNLnK2XNjfE4abNrJVpcouY%2BPA%2FUzdnauXB4BptJXPDvw1hHISIQ4ErUyUJuXGU8%2Bx4lcb2mb5G8mGcxyxr4G6us3hqSsmEuGimkDXi%2F42HZfztqhvRM%2FLU774gxf2E5cTCyuZrABjqkAWK801OLAz28viZm73rEAEVGvnD8eWtlx9Yn66HOgzUW82Q5Sxy5Kg1lRASu3imXQ4wYc8gVLicaD0uBWpj5ks%2F33fzIZ3r57AzrnloRr00GBvwkm3oy99VgzjFDSmsAqBg8YSKmOMSEqFKtyXOVDLv%2Bkx5b3MZfMUclk0qXnfPMzSPpCbGtIsfIsHnI%2B6Ov85aQEfHnXNE6CmdYJwJvRLgkdH4n&X-Amz-Signature=9b6bc0eb1fbe4efd1c38de9bb500f32fa3086d9a3cfd4e25d0537229dcb4fdbf&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RBQ7AB3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD%2BATaBXuAraUfoyY4bD2LscdPYWOQnfBfZloLqsawW%2BQIhAOkxmuHFeJlaluDGHCN%2F1%2FVX1V1RmGmB1D1n%2FJwwOCOGKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUf7orKeficgm4G0Eq3AOjWvaHEse7D7bHNI5xD9nsFXEInRr0WGq0bqeModLMgnD4%2Ftmpv%2BiV08Ebnsw0Vjf5T%2BPrXogQ9kshGbGKMUyMfhGf%2F7i%2Bs4rmM3%2BA9vFM3PHtAdICpFV3XLuSSSoN3f4IMfqhMBPLPu%2BSSy55E0Kdxg1PgML46LwBz40puvXlSqL4WAjeJH94Nq%2Bh3wVOQBc2V5RLnXDAkWHzXTCUVjS9Pi%2FoxfUmdclhOPcXb7hqnzSaXp8cYiugUAKJD0oPlC3Ed0Ru4rbeihoLKp5mUDRcGkT1s0HI5d4oxTLuQdDq5aRQcQ4NM4WvfHCGVgwRR4iVwYAk9tApCqcy7kNN%2BR9DSRx%2F7EugemmaIEQbggNGqhv7JDRnsdTx7uA9AnescDFVF6gXz5%2BA2VZXzmx%2Be7tNSolBkjNaGvDBjfygKRBDxqolZKcCfX6ag8lkPdq8ATN5e5weTHb%2B%2FS4yfhO0cWGi5s5WJtW1Byx5wB5p%2FH%2BAHk8gbfRU4XxiLAFlxNLnK2XNjfE4abNrJVpcouY%2BPA%2FUzdnauXB4BptJXPDvw1hHISIQ4ErUyUJuXGU8%2Bx4lcb2mb5G8mGcxyxr4G6us3hqSsmEuGimkDXi%2F42HZfztqhvRM%2FLU774gxf2E5cTCyuZrABjqkAWK801OLAz28viZm73rEAEVGvnD8eWtlx9Yn66HOgzUW82Q5Sxy5Kg1lRASu3imXQ4wYc8gVLicaD0uBWpj5ks%2F33fzIZ3r57AzrnloRr00GBvwkm3oy99VgzjFDSmsAqBg8YSKmOMSEqFKtyXOVDLv%2Bkx5b3MZfMUclk0qXnfPMzSPpCbGtIsfIsHnI%2B6Ov85aQEfHnXNE6CmdYJwJvRLgkdH4n&X-Amz-Signature=b5c60f6f1f07f60965ae03414e6d98e1881543ff3a6bc027ae82f96653e19679&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
