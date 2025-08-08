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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T2E6N46%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCxEn7Psmi8T2dCk9acyzGfQrw4quIeAGPjdzki9gE34wIgC1v%2BMaW1hw9GH0QnKgvjKr9Gh2AqCoMF2IU6XJw1K6EqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImJY7E5U7ZcDjkXTCrcAw5v88qcV61hyRY9H2K5rncNINuKJ8h9iloVIe4Nqb2ZkTNolfbMtYYmbR1D02nTWtBvLxoB%2FZM1oYmITUAmG0WqUqv1%2Fishme6HGbmDw69jBxhNKJFiHrBbBxXGxAL7x6vBTy0zDqb1hgDe9m63gtwkvFN%2BWNRX62Jmcp46qzebnduz%2FTuH5NOgN3a86o0hA3hNp902XO%2BNDAXT7k9S0k2MmE97I7YvEbG1Gp5b%2FwVQSgBjds%2Fuvmxz98O6pO3GbPsSZhGve7y%2BW4Nj4%2B5JxVv%2F1%2FhQH8X8JXvqFc7kYp2QNsB24J90gjPFR2j1HPIVDuPCq7hGij15OGh6BOL8iXK4f%2FbeT%2B9TQ9hAIAiLbEpcqq%2FDmYsXFm7tEXO5PTNs98H2sGqlVLXhkykVU0xalQ0lQ22VpPr34yzUbK1%2B7RGr6fx%2BW21PkFN9ht1qwzt7Yp5rauy1GwNk%2BDyctW5vwP2I%2B5fKi7CRzKqVapanvQsf8de9dNw%2Bi8xRGc%2BS4N5F7uSbKGB5q7MOSMlMRPSo8w2A%2FHF3jgwJAUANpiOClBE764vbHRYcm%2FaeBta1thBY5z9hB0Kx0p%2FuE5qHkYRhXJFbhG0u5n3NolP6y%2Bxv%2BAAI5K8AUuxn17B9BaaFMI7g2cQGOqUBRoN90HVzUlyQ1NC0Vwvg%2F9Xo%2BlBH8BMEZiqaWfF6G8d395kONi3uAiUyP6Js5jywx2jlo18l7UGlu%2F3iYaO5mxei9bGC8F7aL4xnFTX8G3a6LKqkk8ja8rVRznNCb%2FUe6tONYwIzE9EazLVa4RY%2FtfZFJ7LLqKJkI91eZ6A8dHV4KqJWIblF9fTjEAQQP9Mfgv0UZArf3i9zfTw9Rpxm5x4%2F9rcm&X-Amz-Signature=6af24c9cb8fca3b313fd6707dda5d4f5f5bf300e650bdcf365b883881fc64475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T2E6N46%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCxEn7Psmi8T2dCk9acyzGfQrw4quIeAGPjdzki9gE34wIgC1v%2BMaW1hw9GH0QnKgvjKr9Gh2AqCoMF2IU6XJw1K6EqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImJY7E5U7ZcDjkXTCrcAw5v88qcV61hyRY9H2K5rncNINuKJ8h9iloVIe4Nqb2ZkTNolfbMtYYmbR1D02nTWtBvLxoB%2FZM1oYmITUAmG0WqUqv1%2Fishme6HGbmDw69jBxhNKJFiHrBbBxXGxAL7x6vBTy0zDqb1hgDe9m63gtwkvFN%2BWNRX62Jmcp46qzebnduz%2FTuH5NOgN3a86o0hA3hNp902XO%2BNDAXT7k9S0k2MmE97I7YvEbG1Gp5b%2FwVQSgBjds%2Fuvmxz98O6pO3GbPsSZhGve7y%2BW4Nj4%2B5JxVv%2F1%2FhQH8X8JXvqFc7kYp2QNsB24J90gjPFR2j1HPIVDuPCq7hGij15OGh6BOL8iXK4f%2FbeT%2B9TQ9hAIAiLbEpcqq%2FDmYsXFm7tEXO5PTNs98H2sGqlVLXhkykVU0xalQ0lQ22VpPr34yzUbK1%2B7RGr6fx%2BW21PkFN9ht1qwzt7Yp5rauy1GwNk%2BDyctW5vwP2I%2B5fKi7CRzKqVapanvQsf8de9dNw%2Bi8xRGc%2BS4N5F7uSbKGB5q7MOSMlMRPSo8w2A%2FHF3jgwJAUANpiOClBE764vbHRYcm%2FaeBta1thBY5z9hB0Kx0p%2FuE5qHkYRhXJFbhG0u5n3NolP6y%2Bxv%2BAAI5K8AUuxn17B9BaaFMI7g2cQGOqUBRoN90HVzUlyQ1NC0Vwvg%2F9Xo%2BlBH8BMEZiqaWfF6G8d395kONi3uAiUyP6Js5jywx2jlo18l7UGlu%2F3iYaO5mxei9bGC8F7aL4xnFTX8G3a6LKqkk8ja8rVRznNCb%2FUe6tONYwIzE9EazLVa4RY%2FtfZFJ7LLqKJkI91eZ6A8dHV4KqJWIblF9fTjEAQQP9Mfgv0UZArf3i9zfTw9Rpxm5x4%2F9rcm&X-Amz-Signature=698f684666b4bddc7e2e2e8150812e7d95d608950a009599d544546b145dd7a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T2E6N46%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCxEn7Psmi8T2dCk9acyzGfQrw4quIeAGPjdzki9gE34wIgC1v%2BMaW1hw9GH0QnKgvjKr9Gh2AqCoMF2IU6XJw1K6EqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImJY7E5U7ZcDjkXTCrcAw5v88qcV61hyRY9H2K5rncNINuKJ8h9iloVIe4Nqb2ZkTNolfbMtYYmbR1D02nTWtBvLxoB%2FZM1oYmITUAmG0WqUqv1%2Fishme6HGbmDw69jBxhNKJFiHrBbBxXGxAL7x6vBTy0zDqb1hgDe9m63gtwkvFN%2BWNRX62Jmcp46qzebnduz%2FTuH5NOgN3a86o0hA3hNp902XO%2BNDAXT7k9S0k2MmE97I7YvEbG1Gp5b%2FwVQSgBjds%2Fuvmxz98O6pO3GbPsSZhGve7y%2BW4Nj4%2B5JxVv%2F1%2FhQH8X8JXvqFc7kYp2QNsB24J90gjPFR2j1HPIVDuPCq7hGij15OGh6BOL8iXK4f%2FbeT%2B9TQ9hAIAiLbEpcqq%2FDmYsXFm7tEXO5PTNs98H2sGqlVLXhkykVU0xalQ0lQ22VpPr34yzUbK1%2B7RGr6fx%2BW21PkFN9ht1qwzt7Yp5rauy1GwNk%2BDyctW5vwP2I%2B5fKi7CRzKqVapanvQsf8de9dNw%2Bi8xRGc%2BS4N5F7uSbKGB5q7MOSMlMRPSo8w2A%2FHF3jgwJAUANpiOClBE764vbHRYcm%2FaeBta1thBY5z9hB0Kx0p%2FuE5qHkYRhXJFbhG0u5n3NolP6y%2Bxv%2BAAI5K8AUuxn17B9BaaFMI7g2cQGOqUBRoN90HVzUlyQ1NC0Vwvg%2F9Xo%2BlBH8BMEZiqaWfF6G8d395kONi3uAiUyP6Js5jywx2jlo18l7UGlu%2F3iYaO5mxei9bGC8F7aL4xnFTX8G3a6LKqkk8ja8rVRznNCb%2FUe6tONYwIzE9EazLVa4RY%2FtfZFJ7LLqKJkI91eZ6A8dHV4KqJWIblF9fTjEAQQP9Mfgv0UZArf3i9zfTw9Rpxm5x4%2F9rcm&X-Amz-Signature=983474bfa3cd18c22ed499af9b93f4241b3cda2a081734fea012fe145b940994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T2E6N46%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCxEn7Psmi8T2dCk9acyzGfQrw4quIeAGPjdzki9gE34wIgC1v%2BMaW1hw9GH0QnKgvjKr9Gh2AqCoMF2IU6XJw1K6EqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImJY7E5U7ZcDjkXTCrcAw5v88qcV61hyRY9H2K5rncNINuKJ8h9iloVIe4Nqb2ZkTNolfbMtYYmbR1D02nTWtBvLxoB%2FZM1oYmITUAmG0WqUqv1%2Fishme6HGbmDw69jBxhNKJFiHrBbBxXGxAL7x6vBTy0zDqb1hgDe9m63gtwkvFN%2BWNRX62Jmcp46qzebnduz%2FTuH5NOgN3a86o0hA3hNp902XO%2BNDAXT7k9S0k2MmE97I7YvEbG1Gp5b%2FwVQSgBjds%2Fuvmxz98O6pO3GbPsSZhGve7y%2BW4Nj4%2B5JxVv%2F1%2FhQH8X8JXvqFc7kYp2QNsB24J90gjPFR2j1HPIVDuPCq7hGij15OGh6BOL8iXK4f%2FbeT%2B9TQ9hAIAiLbEpcqq%2FDmYsXFm7tEXO5PTNs98H2sGqlVLXhkykVU0xalQ0lQ22VpPr34yzUbK1%2B7RGr6fx%2BW21PkFN9ht1qwzt7Yp5rauy1GwNk%2BDyctW5vwP2I%2B5fKi7CRzKqVapanvQsf8de9dNw%2Bi8xRGc%2BS4N5F7uSbKGB5q7MOSMlMRPSo8w2A%2FHF3jgwJAUANpiOClBE764vbHRYcm%2FaeBta1thBY5z9hB0Kx0p%2FuE5qHkYRhXJFbhG0u5n3NolP6y%2Bxv%2BAAI5K8AUuxn17B9BaaFMI7g2cQGOqUBRoN90HVzUlyQ1NC0Vwvg%2F9Xo%2BlBH8BMEZiqaWfF6G8d395kONi3uAiUyP6Js5jywx2jlo18l7UGlu%2F3iYaO5mxei9bGC8F7aL4xnFTX8G3a6LKqkk8ja8rVRznNCb%2FUe6tONYwIzE9EazLVa4RY%2FtfZFJ7LLqKJkI91eZ6A8dHV4KqJWIblF9fTjEAQQP9Mfgv0UZArf3i9zfTw9Rpxm5x4%2F9rcm&X-Amz-Signature=a54db4cddbee30f722a13bf497ba8c0b0e1eefff7429ef1392c253fb441553ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T2E6N46%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCxEn7Psmi8T2dCk9acyzGfQrw4quIeAGPjdzki9gE34wIgC1v%2BMaW1hw9GH0QnKgvjKr9Gh2AqCoMF2IU6XJw1K6EqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImJY7E5U7ZcDjkXTCrcAw5v88qcV61hyRY9H2K5rncNINuKJ8h9iloVIe4Nqb2ZkTNolfbMtYYmbR1D02nTWtBvLxoB%2FZM1oYmITUAmG0WqUqv1%2Fishme6HGbmDw69jBxhNKJFiHrBbBxXGxAL7x6vBTy0zDqb1hgDe9m63gtwkvFN%2BWNRX62Jmcp46qzebnduz%2FTuH5NOgN3a86o0hA3hNp902XO%2BNDAXT7k9S0k2MmE97I7YvEbG1Gp5b%2FwVQSgBjds%2Fuvmxz98O6pO3GbPsSZhGve7y%2BW4Nj4%2B5JxVv%2F1%2FhQH8X8JXvqFc7kYp2QNsB24J90gjPFR2j1HPIVDuPCq7hGij15OGh6BOL8iXK4f%2FbeT%2B9TQ9hAIAiLbEpcqq%2FDmYsXFm7tEXO5PTNs98H2sGqlVLXhkykVU0xalQ0lQ22VpPr34yzUbK1%2B7RGr6fx%2BW21PkFN9ht1qwzt7Yp5rauy1GwNk%2BDyctW5vwP2I%2B5fKi7CRzKqVapanvQsf8de9dNw%2Bi8xRGc%2BS4N5F7uSbKGB5q7MOSMlMRPSo8w2A%2FHF3jgwJAUANpiOClBE764vbHRYcm%2FaeBta1thBY5z9hB0Kx0p%2FuE5qHkYRhXJFbhG0u5n3NolP6y%2Bxv%2BAAI5K8AUuxn17B9BaaFMI7g2cQGOqUBRoN90HVzUlyQ1NC0Vwvg%2F9Xo%2BlBH8BMEZiqaWfF6G8d395kONi3uAiUyP6Js5jywx2jlo18l7UGlu%2F3iYaO5mxei9bGC8F7aL4xnFTX8G3a6LKqkk8ja8rVRznNCb%2FUe6tONYwIzE9EazLVa4RY%2FtfZFJ7LLqKJkI91eZ6A8dHV4KqJWIblF9fTjEAQQP9Mfgv0UZArf3i9zfTw9Rpxm5x4%2F9rcm&X-Amz-Signature=2d4af207cedac79ef0b97ea0747cd2e44c8cfc8b17a4b26361953270c680985a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T2E6N46%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCxEn7Psmi8T2dCk9acyzGfQrw4quIeAGPjdzki9gE34wIgC1v%2BMaW1hw9GH0QnKgvjKr9Gh2AqCoMF2IU6XJw1K6EqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImJY7E5U7ZcDjkXTCrcAw5v88qcV61hyRY9H2K5rncNINuKJ8h9iloVIe4Nqb2ZkTNolfbMtYYmbR1D02nTWtBvLxoB%2FZM1oYmITUAmG0WqUqv1%2Fishme6HGbmDw69jBxhNKJFiHrBbBxXGxAL7x6vBTy0zDqb1hgDe9m63gtwkvFN%2BWNRX62Jmcp46qzebnduz%2FTuH5NOgN3a86o0hA3hNp902XO%2BNDAXT7k9S0k2MmE97I7YvEbG1Gp5b%2FwVQSgBjds%2Fuvmxz98O6pO3GbPsSZhGve7y%2BW4Nj4%2B5JxVv%2F1%2FhQH8X8JXvqFc7kYp2QNsB24J90gjPFR2j1HPIVDuPCq7hGij15OGh6BOL8iXK4f%2FbeT%2B9TQ9hAIAiLbEpcqq%2FDmYsXFm7tEXO5PTNs98H2sGqlVLXhkykVU0xalQ0lQ22VpPr34yzUbK1%2B7RGr6fx%2BW21PkFN9ht1qwzt7Yp5rauy1GwNk%2BDyctW5vwP2I%2B5fKi7CRzKqVapanvQsf8de9dNw%2Bi8xRGc%2BS4N5F7uSbKGB5q7MOSMlMRPSo8w2A%2FHF3jgwJAUANpiOClBE764vbHRYcm%2FaeBta1thBY5z9hB0Kx0p%2FuE5qHkYRhXJFbhG0u5n3NolP6y%2Bxv%2BAAI5K8AUuxn17B9BaaFMI7g2cQGOqUBRoN90HVzUlyQ1NC0Vwvg%2F9Xo%2BlBH8BMEZiqaWfF6G8d395kONi3uAiUyP6Js5jywx2jlo18l7UGlu%2F3iYaO5mxei9bGC8F7aL4xnFTX8G3a6LKqkk8ja8rVRznNCb%2FUe6tONYwIzE9EazLVa4RY%2FtfZFJ7LLqKJkI91eZ6A8dHV4KqJWIblF9fTjEAQQP9Mfgv0UZArf3i9zfTw9Rpxm5x4%2F9rcm&X-Amz-Signature=a5dc29a96939c94911d0644b78dfce19dae4677749036a57001b7a54f1310aa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T2E6N46%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCxEn7Psmi8T2dCk9acyzGfQrw4quIeAGPjdzki9gE34wIgC1v%2BMaW1hw9GH0QnKgvjKr9Gh2AqCoMF2IU6XJw1K6EqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImJY7E5U7ZcDjkXTCrcAw5v88qcV61hyRY9H2K5rncNINuKJ8h9iloVIe4Nqb2ZkTNolfbMtYYmbR1D02nTWtBvLxoB%2FZM1oYmITUAmG0WqUqv1%2Fishme6HGbmDw69jBxhNKJFiHrBbBxXGxAL7x6vBTy0zDqb1hgDe9m63gtwkvFN%2BWNRX62Jmcp46qzebnduz%2FTuH5NOgN3a86o0hA3hNp902XO%2BNDAXT7k9S0k2MmE97I7YvEbG1Gp5b%2FwVQSgBjds%2Fuvmxz98O6pO3GbPsSZhGve7y%2BW4Nj4%2B5JxVv%2F1%2FhQH8X8JXvqFc7kYp2QNsB24J90gjPFR2j1HPIVDuPCq7hGij15OGh6BOL8iXK4f%2FbeT%2B9TQ9hAIAiLbEpcqq%2FDmYsXFm7tEXO5PTNs98H2sGqlVLXhkykVU0xalQ0lQ22VpPr34yzUbK1%2B7RGr6fx%2BW21PkFN9ht1qwzt7Yp5rauy1GwNk%2BDyctW5vwP2I%2B5fKi7CRzKqVapanvQsf8de9dNw%2Bi8xRGc%2BS4N5F7uSbKGB5q7MOSMlMRPSo8w2A%2FHF3jgwJAUANpiOClBE764vbHRYcm%2FaeBta1thBY5z9hB0Kx0p%2FuE5qHkYRhXJFbhG0u5n3NolP6y%2Bxv%2BAAI5K8AUuxn17B9BaaFMI7g2cQGOqUBRoN90HVzUlyQ1NC0Vwvg%2F9Xo%2BlBH8BMEZiqaWfF6G8d395kONi3uAiUyP6Js5jywx2jlo18l7UGlu%2F3iYaO5mxei9bGC8F7aL4xnFTX8G3a6LKqkk8ja8rVRznNCb%2FUe6tONYwIzE9EazLVa4RY%2FtfZFJ7LLqKJkI91eZ6A8dHV4KqJWIblF9fTjEAQQP9Mfgv0UZArf3i9zfTw9Rpxm5x4%2F9rcm&X-Amz-Signature=42742982404cb4fe99bf63bf29982e052a49ee934f70b131918941f8450dcb1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
