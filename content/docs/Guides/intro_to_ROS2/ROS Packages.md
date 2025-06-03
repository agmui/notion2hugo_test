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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVECC2AW%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFoNv5JhDekft9cI%2BduvHbKrq4cnVgvl%2BWBwlNu6VKSyAiEAoHtwLKFoeLNzZ5Cbz5a%2BmEHLthYu3j62mr4IfOYPrW0q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJVfOzCvx%2BC8hq7bFyrcA0tKCikdr3xHlmA%2B9k%2FGu%2FbPmjBYxmhX91fjCbOI61myPT75%2BhdLT7ppF%2BLBvg1Wv9cB%2BMaAQ2%2B6e8oO3rQNwepINromFeyYjwtMGRa11fHNNiHMtDamO9lY4dPH9UCvPpWG0Yf3Ku0r7Rr4gbGmylXtfftiqATteEIHmtu7clLLF421y%2FIeKb8NDUSbvMj42HBBCYRyHlqRORhp%2FC%2Bho%2BPeqbnlhdewFSaIYKdOIABqAOT9Q6CWZkIidLSfgBzoRRvC3iae62akXIQ%2BjWNnxDM%2BP%2BFrKgRBC%2F4oUbaqrOVmFKYyFOlqzdc0xcImHVlqWL4Cq%2BQYrcMUxwvTcewhl9hcfPkdooI53J%2F6CxbyoCLkwMB%2F0l8gyeaousgmyPHXP9g3XjzIPLKY%2Bquf2snU7vvO3gubMoOBA8G%2FCeF%2BfR8KsgGHsCavmoD4J7VxL%2FMyK1Iw1B2j8T2sN4o7vfpC3hyvODl9gdqExDS22BAiZ5vv1uPIkCrh9bpOO26XXvlNF%2Fqj9s2Vi3uOHWYJ7zBi9odczb2bvWxD1sIVXgcxQ%2BlZ302Q98miRhcnXJu5Jna2c2j7DeQg5iAOgqgpxIw6HbX6OJNf7S9GD9PtnDk1DNgngia2UOj2FeAkiLEIMO6s%2B8EGOqUB0gGxZQlxUN2jcXYrHd6IseYeiT38W0VlilEOCPsMFg0Xag2eHZhHqTHi0X7mlbznqoj%2F4QyED1%2FLkpKuyPaTV6VG%2F96wk4rL4SwJ3iHlQC04h0pDUp5%2FpjijnvB5vWV2cpPWvnCgNwIWYLACaGKylvUZ3NDq7vEtZWVh%2BpcJo9YWWTb8OdE1eVvFYXIR5jKB3AwUI7tBuyX5mj7kTNGPZMGYTzkr&X-Amz-Signature=7deb4e44700088548a80217c9d6430b111f45a82b8def79d75423b82b902fc92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVECC2AW%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFoNv5JhDekft9cI%2BduvHbKrq4cnVgvl%2BWBwlNu6VKSyAiEAoHtwLKFoeLNzZ5Cbz5a%2BmEHLthYu3j62mr4IfOYPrW0q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJVfOzCvx%2BC8hq7bFyrcA0tKCikdr3xHlmA%2B9k%2FGu%2FbPmjBYxmhX91fjCbOI61myPT75%2BhdLT7ppF%2BLBvg1Wv9cB%2BMaAQ2%2B6e8oO3rQNwepINromFeyYjwtMGRa11fHNNiHMtDamO9lY4dPH9UCvPpWG0Yf3Ku0r7Rr4gbGmylXtfftiqATteEIHmtu7clLLF421y%2FIeKb8NDUSbvMj42HBBCYRyHlqRORhp%2FC%2Bho%2BPeqbnlhdewFSaIYKdOIABqAOT9Q6CWZkIidLSfgBzoRRvC3iae62akXIQ%2BjWNnxDM%2BP%2BFrKgRBC%2F4oUbaqrOVmFKYyFOlqzdc0xcImHVlqWL4Cq%2BQYrcMUxwvTcewhl9hcfPkdooI53J%2F6CxbyoCLkwMB%2F0l8gyeaousgmyPHXP9g3XjzIPLKY%2Bquf2snU7vvO3gubMoOBA8G%2FCeF%2BfR8KsgGHsCavmoD4J7VxL%2FMyK1Iw1B2j8T2sN4o7vfpC3hyvODl9gdqExDS22BAiZ5vv1uPIkCrh9bpOO26XXvlNF%2Fqj9s2Vi3uOHWYJ7zBi9odczb2bvWxD1sIVXgcxQ%2BlZ302Q98miRhcnXJu5Jna2c2j7DeQg5iAOgqgpxIw6HbX6OJNf7S9GD9PtnDk1DNgngia2UOj2FeAkiLEIMO6s%2B8EGOqUB0gGxZQlxUN2jcXYrHd6IseYeiT38W0VlilEOCPsMFg0Xag2eHZhHqTHi0X7mlbznqoj%2F4QyED1%2FLkpKuyPaTV6VG%2F96wk4rL4SwJ3iHlQC04h0pDUp5%2FpjijnvB5vWV2cpPWvnCgNwIWYLACaGKylvUZ3NDq7vEtZWVh%2BpcJo9YWWTb8OdE1eVvFYXIR5jKB3AwUI7tBuyX5mj7kTNGPZMGYTzkr&X-Amz-Signature=d5281c08ca61af611f3db652e3252f3721808f98fb0ddc6fd5c69dadf377031b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVECC2AW%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFoNv5JhDekft9cI%2BduvHbKrq4cnVgvl%2BWBwlNu6VKSyAiEAoHtwLKFoeLNzZ5Cbz5a%2BmEHLthYu3j62mr4IfOYPrW0q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJVfOzCvx%2BC8hq7bFyrcA0tKCikdr3xHlmA%2B9k%2FGu%2FbPmjBYxmhX91fjCbOI61myPT75%2BhdLT7ppF%2BLBvg1Wv9cB%2BMaAQ2%2B6e8oO3rQNwepINromFeyYjwtMGRa11fHNNiHMtDamO9lY4dPH9UCvPpWG0Yf3Ku0r7Rr4gbGmylXtfftiqATteEIHmtu7clLLF421y%2FIeKb8NDUSbvMj42HBBCYRyHlqRORhp%2FC%2Bho%2BPeqbnlhdewFSaIYKdOIABqAOT9Q6CWZkIidLSfgBzoRRvC3iae62akXIQ%2BjWNnxDM%2BP%2BFrKgRBC%2F4oUbaqrOVmFKYyFOlqzdc0xcImHVlqWL4Cq%2BQYrcMUxwvTcewhl9hcfPkdooI53J%2F6CxbyoCLkwMB%2F0l8gyeaousgmyPHXP9g3XjzIPLKY%2Bquf2snU7vvO3gubMoOBA8G%2FCeF%2BfR8KsgGHsCavmoD4J7VxL%2FMyK1Iw1B2j8T2sN4o7vfpC3hyvODl9gdqExDS22BAiZ5vv1uPIkCrh9bpOO26XXvlNF%2Fqj9s2Vi3uOHWYJ7zBi9odczb2bvWxD1sIVXgcxQ%2BlZ302Q98miRhcnXJu5Jna2c2j7DeQg5iAOgqgpxIw6HbX6OJNf7S9GD9PtnDk1DNgngia2UOj2FeAkiLEIMO6s%2B8EGOqUB0gGxZQlxUN2jcXYrHd6IseYeiT38W0VlilEOCPsMFg0Xag2eHZhHqTHi0X7mlbznqoj%2F4QyED1%2FLkpKuyPaTV6VG%2F96wk4rL4SwJ3iHlQC04h0pDUp5%2FpjijnvB5vWV2cpPWvnCgNwIWYLACaGKylvUZ3NDq7vEtZWVh%2BpcJo9YWWTb8OdE1eVvFYXIR5jKB3AwUI7tBuyX5mj7kTNGPZMGYTzkr&X-Amz-Signature=7d0f14e5f99d6b2b3ad652bcad82d11fe17ef171abea772a68a697a5a9979ba6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVECC2AW%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFoNv5JhDekft9cI%2BduvHbKrq4cnVgvl%2BWBwlNu6VKSyAiEAoHtwLKFoeLNzZ5Cbz5a%2BmEHLthYu3j62mr4IfOYPrW0q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJVfOzCvx%2BC8hq7bFyrcA0tKCikdr3xHlmA%2B9k%2FGu%2FbPmjBYxmhX91fjCbOI61myPT75%2BhdLT7ppF%2BLBvg1Wv9cB%2BMaAQ2%2B6e8oO3rQNwepINromFeyYjwtMGRa11fHNNiHMtDamO9lY4dPH9UCvPpWG0Yf3Ku0r7Rr4gbGmylXtfftiqATteEIHmtu7clLLF421y%2FIeKb8NDUSbvMj42HBBCYRyHlqRORhp%2FC%2Bho%2BPeqbnlhdewFSaIYKdOIABqAOT9Q6CWZkIidLSfgBzoRRvC3iae62akXIQ%2BjWNnxDM%2BP%2BFrKgRBC%2F4oUbaqrOVmFKYyFOlqzdc0xcImHVlqWL4Cq%2BQYrcMUxwvTcewhl9hcfPkdooI53J%2F6CxbyoCLkwMB%2F0l8gyeaousgmyPHXP9g3XjzIPLKY%2Bquf2snU7vvO3gubMoOBA8G%2FCeF%2BfR8KsgGHsCavmoD4J7VxL%2FMyK1Iw1B2j8T2sN4o7vfpC3hyvODl9gdqExDS22BAiZ5vv1uPIkCrh9bpOO26XXvlNF%2Fqj9s2Vi3uOHWYJ7zBi9odczb2bvWxD1sIVXgcxQ%2BlZ302Q98miRhcnXJu5Jna2c2j7DeQg5iAOgqgpxIw6HbX6OJNf7S9GD9PtnDk1DNgngia2UOj2FeAkiLEIMO6s%2B8EGOqUB0gGxZQlxUN2jcXYrHd6IseYeiT38W0VlilEOCPsMFg0Xag2eHZhHqTHi0X7mlbznqoj%2F4QyED1%2FLkpKuyPaTV6VG%2F96wk4rL4SwJ3iHlQC04h0pDUp5%2FpjijnvB5vWV2cpPWvnCgNwIWYLACaGKylvUZ3NDq7vEtZWVh%2BpcJo9YWWTb8OdE1eVvFYXIR5jKB3AwUI7tBuyX5mj7kTNGPZMGYTzkr&X-Amz-Signature=970e83a392ae449f2dbcd8f53a4c587623b2d26cbe6a315718da05a6cc689b62&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVECC2AW%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFoNv5JhDekft9cI%2BduvHbKrq4cnVgvl%2BWBwlNu6VKSyAiEAoHtwLKFoeLNzZ5Cbz5a%2BmEHLthYu3j62mr4IfOYPrW0q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJVfOzCvx%2BC8hq7bFyrcA0tKCikdr3xHlmA%2B9k%2FGu%2FbPmjBYxmhX91fjCbOI61myPT75%2BhdLT7ppF%2BLBvg1Wv9cB%2BMaAQ2%2B6e8oO3rQNwepINromFeyYjwtMGRa11fHNNiHMtDamO9lY4dPH9UCvPpWG0Yf3Ku0r7Rr4gbGmylXtfftiqATteEIHmtu7clLLF421y%2FIeKb8NDUSbvMj42HBBCYRyHlqRORhp%2FC%2Bho%2BPeqbnlhdewFSaIYKdOIABqAOT9Q6CWZkIidLSfgBzoRRvC3iae62akXIQ%2BjWNnxDM%2BP%2BFrKgRBC%2F4oUbaqrOVmFKYyFOlqzdc0xcImHVlqWL4Cq%2BQYrcMUxwvTcewhl9hcfPkdooI53J%2F6CxbyoCLkwMB%2F0l8gyeaousgmyPHXP9g3XjzIPLKY%2Bquf2snU7vvO3gubMoOBA8G%2FCeF%2BfR8KsgGHsCavmoD4J7VxL%2FMyK1Iw1B2j8T2sN4o7vfpC3hyvODl9gdqExDS22BAiZ5vv1uPIkCrh9bpOO26XXvlNF%2Fqj9s2Vi3uOHWYJ7zBi9odczb2bvWxD1sIVXgcxQ%2BlZ302Q98miRhcnXJu5Jna2c2j7DeQg5iAOgqgpxIw6HbX6OJNf7S9GD9PtnDk1DNgngia2UOj2FeAkiLEIMO6s%2B8EGOqUB0gGxZQlxUN2jcXYrHd6IseYeiT38W0VlilEOCPsMFg0Xag2eHZhHqTHi0X7mlbznqoj%2F4QyED1%2FLkpKuyPaTV6VG%2F96wk4rL4SwJ3iHlQC04h0pDUp5%2FpjijnvB5vWV2cpPWvnCgNwIWYLACaGKylvUZ3NDq7vEtZWVh%2BpcJo9YWWTb8OdE1eVvFYXIR5jKB3AwUI7tBuyX5mj7kTNGPZMGYTzkr&X-Amz-Signature=9b81e4708a3a7c5c4dfa7a2ebf173991008397e5c5457a4eec5b137a8879449c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVECC2AW%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFoNv5JhDekft9cI%2BduvHbKrq4cnVgvl%2BWBwlNu6VKSyAiEAoHtwLKFoeLNzZ5Cbz5a%2BmEHLthYu3j62mr4IfOYPrW0q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJVfOzCvx%2BC8hq7bFyrcA0tKCikdr3xHlmA%2B9k%2FGu%2FbPmjBYxmhX91fjCbOI61myPT75%2BhdLT7ppF%2BLBvg1Wv9cB%2BMaAQ2%2B6e8oO3rQNwepINromFeyYjwtMGRa11fHNNiHMtDamO9lY4dPH9UCvPpWG0Yf3Ku0r7Rr4gbGmylXtfftiqATteEIHmtu7clLLF421y%2FIeKb8NDUSbvMj42HBBCYRyHlqRORhp%2FC%2Bho%2BPeqbnlhdewFSaIYKdOIABqAOT9Q6CWZkIidLSfgBzoRRvC3iae62akXIQ%2BjWNnxDM%2BP%2BFrKgRBC%2F4oUbaqrOVmFKYyFOlqzdc0xcImHVlqWL4Cq%2BQYrcMUxwvTcewhl9hcfPkdooI53J%2F6CxbyoCLkwMB%2F0l8gyeaousgmyPHXP9g3XjzIPLKY%2Bquf2snU7vvO3gubMoOBA8G%2FCeF%2BfR8KsgGHsCavmoD4J7VxL%2FMyK1Iw1B2j8T2sN4o7vfpC3hyvODl9gdqExDS22BAiZ5vv1uPIkCrh9bpOO26XXvlNF%2Fqj9s2Vi3uOHWYJ7zBi9odczb2bvWxD1sIVXgcxQ%2BlZ302Q98miRhcnXJu5Jna2c2j7DeQg5iAOgqgpxIw6HbX6OJNf7S9GD9PtnDk1DNgngia2UOj2FeAkiLEIMO6s%2B8EGOqUB0gGxZQlxUN2jcXYrHd6IseYeiT38W0VlilEOCPsMFg0Xag2eHZhHqTHi0X7mlbznqoj%2F4QyED1%2FLkpKuyPaTV6VG%2F96wk4rL4SwJ3iHlQC04h0pDUp5%2FpjijnvB5vWV2cpPWvnCgNwIWYLACaGKylvUZ3NDq7vEtZWVh%2BpcJo9YWWTb8OdE1eVvFYXIR5jKB3AwUI7tBuyX5mj7kTNGPZMGYTzkr&X-Amz-Signature=88eacec8907fa0f65a27285a57dd374f94db53416b3d19ed25d38a9fd8aedf6b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVECC2AW%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFoNv5JhDekft9cI%2BduvHbKrq4cnVgvl%2BWBwlNu6VKSyAiEAoHtwLKFoeLNzZ5Cbz5a%2BmEHLthYu3j62mr4IfOYPrW0q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJVfOzCvx%2BC8hq7bFyrcA0tKCikdr3xHlmA%2B9k%2FGu%2FbPmjBYxmhX91fjCbOI61myPT75%2BhdLT7ppF%2BLBvg1Wv9cB%2BMaAQ2%2B6e8oO3rQNwepINromFeyYjwtMGRa11fHNNiHMtDamO9lY4dPH9UCvPpWG0Yf3Ku0r7Rr4gbGmylXtfftiqATteEIHmtu7clLLF421y%2FIeKb8NDUSbvMj42HBBCYRyHlqRORhp%2FC%2Bho%2BPeqbnlhdewFSaIYKdOIABqAOT9Q6CWZkIidLSfgBzoRRvC3iae62akXIQ%2BjWNnxDM%2BP%2BFrKgRBC%2F4oUbaqrOVmFKYyFOlqzdc0xcImHVlqWL4Cq%2BQYrcMUxwvTcewhl9hcfPkdooI53J%2F6CxbyoCLkwMB%2F0l8gyeaousgmyPHXP9g3XjzIPLKY%2Bquf2snU7vvO3gubMoOBA8G%2FCeF%2BfR8KsgGHsCavmoD4J7VxL%2FMyK1Iw1B2j8T2sN4o7vfpC3hyvODl9gdqExDS22BAiZ5vv1uPIkCrh9bpOO26XXvlNF%2Fqj9s2Vi3uOHWYJ7zBi9odczb2bvWxD1sIVXgcxQ%2BlZ302Q98miRhcnXJu5Jna2c2j7DeQg5iAOgqgpxIw6HbX6OJNf7S9GD9PtnDk1DNgngia2UOj2FeAkiLEIMO6s%2B8EGOqUB0gGxZQlxUN2jcXYrHd6IseYeiT38W0VlilEOCPsMFg0Xag2eHZhHqTHi0X7mlbznqoj%2F4QyED1%2FLkpKuyPaTV6VG%2F96wk4rL4SwJ3iHlQC04h0pDUp5%2FpjijnvB5vWV2cpPWvnCgNwIWYLACaGKylvUZ3NDq7vEtZWVh%2BpcJo9YWWTb8OdE1eVvFYXIR5jKB3AwUI7tBuyX5mj7kTNGPZMGYTzkr&X-Amz-Signature=f157605f369db7e962353d3cb33137cf666ccacc36a192a8800abe823d416798&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
