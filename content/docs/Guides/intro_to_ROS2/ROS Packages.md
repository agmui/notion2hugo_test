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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O5MDWCA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1GnARqfLxP0NzhMHGRPqP5JhtP7B1tNE3He0jYba5BQIgPc7OCgFkGuL1dA4vOZR1aDf8f09vAX%2BEiQy%2B6FB6GFsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHV%2FMiEQxsppupLzGyrcA7lXeetJVSAyQnStoDc4nNbIZG6uRhkIZkZ6XRdvCQDC7P3LjtwSGzyTBxZeTGaxL00NKdrWChJh9bCr%2BVHUJOZyJNKQ7vIhqtjMrRfbN3lIZD1yZ7EHoYKSoaULwnXy%2FqmIOVRWeSqLo0jrjLV9ctK8K6gRKEAzRKS%2FlfcLoyunn8F%2F7AFFQ5mo%2FDbd0TPn6XooEihJMD%2BHKfXIb7bgJCcN1jxJHnizZrvOvNR8%2B%2FzGHvaIhGOkzy7mj8zBzvmuYfwrSzbPMg%2FD%2FDbudO8mLRhM3iFmxuJ1eyvaueCndppDVSVUf7bbMjp3ntJz%2FP%2Fisn%2Bc%2BWIBTfc6pOmKUHMhmlNVS4e2UX4U8ggqDAsnrHhK%2BsRLD%2FWtR3lQDocpCx7e6lI1Wfh8wzTIwqc44X%2BMTlMN0GKnVooKob%2BnKrp6BIXPVHbVuoMAJSPYABJDz9uprlzw4O3sDc6%2F2yc54%2BFQN9wLbxexpKzXQ1QzTMfo%2FqA1rgPRxyDLtFShMJwKWBI9eELqAMH%2FiekphGmWH63%2F9aDhJGFLF7Fxqrm87jdkB32svd42wTzI5Hknm152YBAkQl4U0YGW8qPKgCp%2Bvj%2BCKg4mjl7zSjvmjSdq8j4yoHLMGY5Q5S%2FijQmdxwWEMMiL58AGOqUBIC%2BcyB%2ByI9hBmMnnmYmLrlTANAm%2F%2FpKDW11%2FQDLI9bC1%2Bp17jxOw0qyomW1idu%2FaNBh17eEGcmlBCh4bLOp2rBP2uNvLlEeG5ynkoK%2BJo9BklC76PteBAoOmu50UNM1JfyUpTQX7DQHUenNaiTdhcZ%2B%2FRDJPioMlGRPuMOAUZKzp4nd3m1m71xm3Xzjm045tQm2zSZ8gM2Wrx57V%2FWhZHwI%2FKMF9&X-Amz-Signature=79313787666f9071dc7ca8003831bd4b6adc605bbad43b807f7beb688abb5ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O5MDWCA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1GnARqfLxP0NzhMHGRPqP5JhtP7B1tNE3He0jYba5BQIgPc7OCgFkGuL1dA4vOZR1aDf8f09vAX%2BEiQy%2B6FB6GFsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHV%2FMiEQxsppupLzGyrcA7lXeetJVSAyQnStoDc4nNbIZG6uRhkIZkZ6XRdvCQDC7P3LjtwSGzyTBxZeTGaxL00NKdrWChJh9bCr%2BVHUJOZyJNKQ7vIhqtjMrRfbN3lIZD1yZ7EHoYKSoaULwnXy%2FqmIOVRWeSqLo0jrjLV9ctK8K6gRKEAzRKS%2FlfcLoyunn8F%2F7AFFQ5mo%2FDbd0TPn6XooEihJMD%2BHKfXIb7bgJCcN1jxJHnizZrvOvNR8%2B%2FzGHvaIhGOkzy7mj8zBzvmuYfwrSzbPMg%2FD%2FDbudO8mLRhM3iFmxuJ1eyvaueCndppDVSVUf7bbMjp3ntJz%2FP%2Fisn%2Bc%2BWIBTfc6pOmKUHMhmlNVS4e2UX4U8ggqDAsnrHhK%2BsRLD%2FWtR3lQDocpCx7e6lI1Wfh8wzTIwqc44X%2BMTlMN0GKnVooKob%2BnKrp6BIXPVHbVuoMAJSPYABJDz9uprlzw4O3sDc6%2F2yc54%2BFQN9wLbxexpKzXQ1QzTMfo%2FqA1rgPRxyDLtFShMJwKWBI9eELqAMH%2FiekphGmWH63%2F9aDhJGFLF7Fxqrm87jdkB32svd42wTzI5Hknm152YBAkQl4U0YGW8qPKgCp%2Bvj%2BCKg4mjl7zSjvmjSdq8j4yoHLMGY5Q5S%2FijQmdxwWEMMiL58AGOqUBIC%2BcyB%2ByI9hBmMnnmYmLrlTANAm%2F%2FpKDW11%2FQDLI9bC1%2Bp17jxOw0qyomW1idu%2FaNBh17eEGcmlBCh4bLOp2rBP2uNvLlEeG5ynkoK%2BJo9BklC76PteBAoOmu50UNM1JfyUpTQX7DQHUenNaiTdhcZ%2B%2FRDJPioMlGRPuMOAUZKzp4nd3m1m71xm3Xzjm045tQm2zSZ8gM2Wrx57V%2FWhZHwI%2FKMF9&X-Amz-Signature=7c6e560c049c28aefcc98ff7b5d9eb57552ced016cdecec86043a8ae240c33a6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O5MDWCA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1GnARqfLxP0NzhMHGRPqP5JhtP7B1tNE3He0jYba5BQIgPc7OCgFkGuL1dA4vOZR1aDf8f09vAX%2BEiQy%2B6FB6GFsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHV%2FMiEQxsppupLzGyrcA7lXeetJVSAyQnStoDc4nNbIZG6uRhkIZkZ6XRdvCQDC7P3LjtwSGzyTBxZeTGaxL00NKdrWChJh9bCr%2BVHUJOZyJNKQ7vIhqtjMrRfbN3lIZD1yZ7EHoYKSoaULwnXy%2FqmIOVRWeSqLo0jrjLV9ctK8K6gRKEAzRKS%2FlfcLoyunn8F%2F7AFFQ5mo%2FDbd0TPn6XooEihJMD%2BHKfXIb7bgJCcN1jxJHnizZrvOvNR8%2B%2FzGHvaIhGOkzy7mj8zBzvmuYfwrSzbPMg%2FD%2FDbudO8mLRhM3iFmxuJ1eyvaueCndppDVSVUf7bbMjp3ntJz%2FP%2Fisn%2Bc%2BWIBTfc6pOmKUHMhmlNVS4e2UX4U8ggqDAsnrHhK%2BsRLD%2FWtR3lQDocpCx7e6lI1Wfh8wzTIwqc44X%2BMTlMN0GKnVooKob%2BnKrp6BIXPVHbVuoMAJSPYABJDz9uprlzw4O3sDc6%2F2yc54%2BFQN9wLbxexpKzXQ1QzTMfo%2FqA1rgPRxyDLtFShMJwKWBI9eELqAMH%2FiekphGmWH63%2F9aDhJGFLF7Fxqrm87jdkB32svd42wTzI5Hknm152YBAkQl4U0YGW8qPKgCp%2Bvj%2BCKg4mjl7zSjvmjSdq8j4yoHLMGY5Q5S%2FijQmdxwWEMMiL58AGOqUBIC%2BcyB%2ByI9hBmMnnmYmLrlTANAm%2F%2FpKDW11%2FQDLI9bC1%2Bp17jxOw0qyomW1idu%2FaNBh17eEGcmlBCh4bLOp2rBP2uNvLlEeG5ynkoK%2BJo9BklC76PteBAoOmu50UNM1JfyUpTQX7DQHUenNaiTdhcZ%2B%2FRDJPioMlGRPuMOAUZKzp4nd3m1m71xm3Xzjm045tQm2zSZ8gM2Wrx57V%2FWhZHwI%2FKMF9&X-Amz-Signature=a753b37841c8b093c1a8d02ee6dc5c3b46ddb3c344f1d1748dd1be0a5be64289&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O5MDWCA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1GnARqfLxP0NzhMHGRPqP5JhtP7B1tNE3He0jYba5BQIgPc7OCgFkGuL1dA4vOZR1aDf8f09vAX%2BEiQy%2B6FB6GFsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHV%2FMiEQxsppupLzGyrcA7lXeetJVSAyQnStoDc4nNbIZG6uRhkIZkZ6XRdvCQDC7P3LjtwSGzyTBxZeTGaxL00NKdrWChJh9bCr%2BVHUJOZyJNKQ7vIhqtjMrRfbN3lIZD1yZ7EHoYKSoaULwnXy%2FqmIOVRWeSqLo0jrjLV9ctK8K6gRKEAzRKS%2FlfcLoyunn8F%2F7AFFQ5mo%2FDbd0TPn6XooEihJMD%2BHKfXIb7bgJCcN1jxJHnizZrvOvNR8%2B%2FzGHvaIhGOkzy7mj8zBzvmuYfwrSzbPMg%2FD%2FDbudO8mLRhM3iFmxuJ1eyvaueCndppDVSVUf7bbMjp3ntJz%2FP%2Fisn%2Bc%2BWIBTfc6pOmKUHMhmlNVS4e2UX4U8ggqDAsnrHhK%2BsRLD%2FWtR3lQDocpCx7e6lI1Wfh8wzTIwqc44X%2BMTlMN0GKnVooKob%2BnKrp6BIXPVHbVuoMAJSPYABJDz9uprlzw4O3sDc6%2F2yc54%2BFQN9wLbxexpKzXQ1QzTMfo%2FqA1rgPRxyDLtFShMJwKWBI9eELqAMH%2FiekphGmWH63%2F9aDhJGFLF7Fxqrm87jdkB32svd42wTzI5Hknm152YBAkQl4U0YGW8qPKgCp%2Bvj%2BCKg4mjl7zSjvmjSdq8j4yoHLMGY5Q5S%2FijQmdxwWEMMiL58AGOqUBIC%2BcyB%2ByI9hBmMnnmYmLrlTANAm%2F%2FpKDW11%2FQDLI9bC1%2Bp17jxOw0qyomW1idu%2FaNBh17eEGcmlBCh4bLOp2rBP2uNvLlEeG5ynkoK%2BJo9BklC76PteBAoOmu50UNM1JfyUpTQX7DQHUenNaiTdhcZ%2B%2FRDJPioMlGRPuMOAUZKzp4nd3m1m71xm3Xzjm045tQm2zSZ8gM2Wrx57V%2FWhZHwI%2FKMF9&X-Amz-Signature=f6c3a39058a0af2ab3485b33985e7e3b47c4bc004845b6f15ec0be6498ba90c2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O5MDWCA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1GnARqfLxP0NzhMHGRPqP5JhtP7B1tNE3He0jYba5BQIgPc7OCgFkGuL1dA4vOZR1aDf8f09vAX%2BEiQy%2B6FB6GFsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHV%2FMiEQxsppupLzGyrcA7lXeetJVSAyQnStoDc4nNbIZG6uRhkIZkZ6XRdvCQDC7P3LjtwSGzyTBxZeTGaxL00NKdrWChJh9bCr%2BVHUJOZyJNKQ7vIhqtjMrRfbN3lIZD1yZ7EHoYKSoaULwnXy%2FqmIOVRWeSqLo0jrjLV9ctK8K6gRKEAzRKS%2FlfcLoyunn8F%2F7AFFQ5mo%2FDbd0TPn6XooEihJMD%2BHKfXIb7bgJCcN1jxJHnizZrvOvNR8%2B%2FzGHvaIhGOkzy7mj8zBzvmuYfwrSzbPMg%2FD%2FDbudO8mLRhM3iFmxuJ1eyvaueCndppDVSVUf7bbMjp3ntJz%2FP%2Fisn%2Bc%2BWIBTfc6pOmKUHMhmlNVS4e2UX4U8ggqDAsnrHhK%2BsRLD%2FWtR3lQDocpCx7e6lI1Wfh8wzTIwqc44X%2BMTlMN0GKnVooKob%2BnKrp6BIXPVHbVuoMAJSPYABJDz9uprlzw4O3sDc6%2F2yc54%2BFQN9wLbxexpKzXQ1QzTMfo%2FqA1rgPRxyDLtFShMJwKWBI9eELqAMH%2FiekphGmWH63%2F9aDhJGFLF7Fxqrm87jdkB32svd42wTzI5Hknm152YBAkQl4U0YGW8qPKgCp%2Bvj%2BCKg4mjl7zSjvmjSdq8j4yoHLMGY5Q5S%2FijQmdxwWEMMiL58AGOqUBIC%2BcyB%2ByI9hBmMnnmYmLrlTANAm%2F%2FpKDW11%2FQDLI9bC1%2Bp17jxOw0qyomW1idu%2FaNBh17eEGcmlBCh4bLOp2rBP2uNvLlEeG5ynkoK%2BJo9BklC76PteBAoOmu50UNM1JfyUpTQX7DQHUenNaiTdhcZ%2B%2FRDJPioMlGRPuMOAUZKzp4nd3m1m71xm3Xzjm045tQm2zSZ8gM2Wrx57V%2FWhZHwI%2FKMF9&X-Amz-Signature=9e1c708fdbbae38deb4d1135cb4275a85337d409a19b07ce4d18921182850b18&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O5MDWCA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1GnARqfLxP0NzhMHGRPqP5JhtP7B1tNE3He0jYba5BQIgPc7OCgFkGuL1dA4vOZR1aDf8f09vAX%2BEiQy%2B6FB6GFsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHV%2FMiEQxsppupLzGyrcA7lXeetJVSAyQnStoDc4nNbIZG6uRhkIZkZ6XRdvCQDC7P3LjtwSGzyTBxZeTGaxL00NKdrWChJh9bCr%2BVHUJOZyJNKQ7vIhqtjMrRfbN3lIZD1yZ7EHoYKSoaULwnXy%2FqmIOVRWeSqLo0jrjLV9ctK8K6gRKEAzRKS%2FlfcLoyunn8F%2F7AFFQ5mo%2FDbd0TPn6XooEihJMD%2BHKfXIb7bgJCcN1jxJHnizZrvOvNR8%2B%2FzGHvaIhGOkzy7mj8zBzvmuYfwrSzbPMg%2FD%2FDbudO8mLRhM3iFmxuJ1eyvaueCndppDVSVUf7bbMjp3ntJz%2FP%2Fisn%2Bc%2BWIBTfc6pOmKUHMhmlNVS4e2UX4U8ggqDAsnrHhK%2BsRLD%2FWtR3lQDocpCx7e6lI1Wfh8wzTIwqc44X%2BMTlMN0GKnVooKob%2BnKrp6BIXPVHbVuoMAJSPYABJDz9uprlzw4O3sDc6%2F2yc54%2BFQN9wLbxexpKzXQ1QzTMfo%2FqA1rgPRxyDLtFShMJwKWBI9eELqAMH%2FiekphGmWH63%2F9aDhJGFLF7Fxqrm87jdkB32svd42wTzI5Hknm152YBAkQl4U0YGW8qPKgCp%2Bvj%2BCKg4mjl7zSjvmjSdq8j4yoHLMGY5Q5S%2FijQmdxwWEMMiL58AGOqUBIC%2BcyB%2ByI9hBmMnnmYmLrlTANAm%2F%2FpKDW11%2FQDLI9bC1%2Bp17jxOw0qyomW1idu%2FaNBh17eEGcmlBCh4bLOp2rBP2uNvLlEeG5ynkoK%2BJo9BklC76PteBAoOmu50UNM1JfyUpTQX7DQHUenNaiTdhcZ%2B%2FRDJPioMlGRPuMOAUZKzp4nd3m1m71xm3Xzjm045tQm2zSZ8gM2Wrx57V%2FWhZHwI%2FKMF9&X-Amz-Signature=823bf1bd6192a400878825700e8a4e4aac4a8804942c2be38223aaf228233cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O5MDWCA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1GnARqfLxP0NzhMHGRPqP5JhtP7B1tNE3He0jYba5BQIgPc7OCgFkGuL1dA4vOZR1aDf8f09vAX%2BEiQy%2B6FB6GFsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHV%2FMiEQxsppupLzGyrcA7lXeetJVSAyQnStoDc4nNbIZG6uRhkIZkZ6XRdvCQDC7P3LjtwSGzyTBxZeTGaxL00NKdrWChJh9bCr%2BVHUJOZyJNKQ7vIhqtjMrRfbN3lIZD1yZ7EHoYKSoaULwnXy%2FqmIOVRWeSqLo0jrjLV9ctK8K6gRKEAzRKS%2FlfcLoyunn8F%2F7AFFQ5mo%2FDbd0TPn6XooEihJMD%2BHKfXIb7bgJCcN1jxJHnizZrvOvNR8%2B%2FzGHvaIhGOkzy7mj8zBzvmuYfwrSzbPMg%2FD%2FDbudO8mLRhM3iFmxuJ1eyvaueCndppDVSVUf7bbMjp3ntJz%2FP%2Fisn%2Bc%2BWIBTfc6pOmKUHMhmlNVS4e2UX4U8ggqDAsnrHhK%2BsRLD%2FWtR3lQDocpCx7e6lI1Wfh8wzTIwqc44X%2BMTlMN0GKnVooKob%2BnKrp6BIXPVHbVuoMAJSPYABJDz9uprlzw4O3sDc6%2F2yc54%2BFQN9wLbxexpKzXQ1QzTMfo%2FqA1rgPRxyDLtFShMJwKWBI9eELqAMH%2FiekphGmWH63%2F9aDhJGFLF7Fxqrm87jdkB32svd42wTzI5Hknm152YBAkQl4U0YGW8qPKgCp%2Bvj%2BCKg4mjl7zSjvmjSdq8j4yoHLMGY5Q5S%2FijQmdxwWEMMiL58AGOqUBIC%2BcyB%2ByI9hBmMnnmYmLrlTANAm%2F%2FpKDW11%2FQDLI9bC1%2Bp17jxOw0qyomW1idu%2FaNBh17eEGcmlBCh4bLOp2rBP2uNvLlEeG5ynkoK%2BJo9BklC76PteBAoOmu50UNM1JfyUpTQX7DQHUenNaiTdhcZ%2B%2FRDJPioMlGRPuMOAUZKzp4nd3m1m71xm3Xzjm045tQm2zSZ8gM2Wrx57V%2FWhZHwI%2FKMF9&X-Amz-Signature=4460f10c6a65529680bcf933601798ab3d7406dd13b1c3d2623b546a228cd762&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
