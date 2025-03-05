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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F7FBUT7%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkmNb66k1maBV%2BCsw%2FaJ2xC1sVQZxAvgpL5U0IM7z2AAiB%2FlXXNz%2B6beihgehRt7Yxic8xUQ1uDUgUk2gHjn%2B8pSSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeKxmJRLBaDHBT5S5KtwD75RiFxMlyMretNabq28Gb5pJjd50%2B6kPLoHXmwuATwnzkI2kpjf1SQnOFEyP4qah3T0V9Y1SkHg794lrZH%2B9K61amzH836kgLUaHvXtxRi95iWriI7nCBngvFT9d5aFGOF9ZtJRxeVbW%2FDNst3TjHWOhBjg3HSuHMpmx7928JByCi0IyShSvCiJrxndwnLBmf9AaIUhAmvOl0J%2BSf44NB2%2FL3vrsgg2oYwq0Ipehf6IQ6lxt4swe8PVr0f1XrpxAa9q5SPOW6n83uey8LsSOE2RtU8rnqMGS%2FVC4ofIe0NOYy6h0FROHF5dsUU1u%2FgfVoo%2BsI6yU0OpBNuESwWZB2UD10RXFTl6RLxMkw8tYUtOaxDdS%2BobJU8FSa5k3qHZeApzURQPKMWWPwbNuJ%2BPkQkmvKRLfhpOfYg8iVseVyxBd%2FYgp8ly8NYhjsRYNfRRvMMniTO6pskkGROROW0ixu4IX57c0S%2B3Fh660c%2FxLdn2bDFtsHf4UB9%2B8QzPCfFP9UifehZ%2B4jc9wBoxiNhaGF0KqSt74qwHe0wlW6ucqOYV4q0QZBybQa7l9cVNi9Hf0YOMG5xpbNtvoCi4OULZDP1wNAxYMHIfcHLQwvhwUvZT3AeuFJAGYwWT1MVkw3aifvgY6pgFiItqS0J5wLUKZh4gWNUk9zDJRzDzxx%2FHFleVfi5VwMW6REPgZziAm4M232ZR65dMA5jJvPGBMAIzAdbQ%2FLi%2BIkTooM6mAVnkOxOrSVHT3UGjHutUDUaAsX6K5LIdVh0wGv4rl3GKfm6EGnM7%2BOz4cCfcZoNTt9I8BphQOORavM4EZ0iwcaY%2Fx7R%2FD9IEuo9VkZKdBYj5UdLoWcNjU53DhEbWhYsPE&X-Amz-Signature=2143933dafd29395633c9d0d40f903926d147b7ac5dd31230da0f4e162bb2744&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F7FBUT7%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkmNb66k1maBV%2BCsw%2FaJ2xC1sVQZxAvgpL5U0IM7z2AAiB%2FlXXNz%2B6beihgehRt7Yxic8xUQ1uDUgUk2gHjn%2B8pSSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeKxmJRLBaDHBT5S5KtwD75RiFxMlyMretNabq28Gb5pJjd50%2B6kPLoHXmwuATwnzkI2kpjf1SQnOFEyP4qah3T0V9Y1SkHg794lrZH%2B9K61amzH836kgLUaHvXtxRi95iWriI7nCBngvFT9d5aFGOF9ZtJRxeVbW%2FDNst3TjHWOhBjg3HSuHMpmx7928JByCi0IyShSvCiJrxndwnLBmf9AaIUhAmvOl0J%2BSf44NB2%2FL3vrsgg2oYwq0Ipehf6IQ6lxt4swe8PVr0f1XrpxAa9q5SPOW6n83uey8LsSOE2RtU8rnqMGS%2FVC4ofIe0NOYy6h0FROHF5dsUU1u%2FgfVoo%2BsI6yU0OpBNuESwWZB2UD10RXFTl6RLxMkw8tYUtOaxDdS%2BobJU8FSa5k3qHZeApzURQPKMWWPwbNuJ%2BPkQkmvKRLfhpOfYg8iVseVyxBd%2FYgp8ly8NYhjsRYNfRRvMMniTO6pskkGROROW0ixu4IX57c0S%2B3Fh660c%2FxLdn2bDFtsHf4UB9%2B8QzPCfFP9UifehZ%2B4jc9wBoxiNhaGF0KqSt74qwHe0wlW6ucqOYV4q0QZBybQa7l9cVNi9Hf0YOMG5xpbNtvoCi4OULZDP1wNAxYMHIfcHLQwvhwUvZT3AeuFJAGYwWT1MVkw3aifvgY6pgFiItqS0J5wLUKZh4gWNUk9zDJRzDzxx%2FHFleVfi5VwMW6REPgZziAm4M232ZR65dMA5jJvPGBMAIzAdbQ%2FLi%2BIkTooM6mAVnkOxOrSVHT3UGjHutUDUaAsX6K5LIdVh0wGv4rl3GKfm6EGnM7%2BOz4cCfcZoNTt9I8BphQOORavM4EZ0iwcaY%2Fx7R%2FD9IEuo9VkZKdBYj5UdLoWcNjU53DhEbWhYsPE&X-Amz-Signature=0a853bf368e7022872afdd199953230e9d1bb5ebedbf0dd7fa7239685b057b10&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F7FBUT7%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkmNb66k1maBV%2BCsw%2FaJ2xC1sVQZxAvgpL5U0IM7z2AAiB%2FlXXNz%2B6beihgehRt7Yxic8xUQ1uDUgUk2gHjn%2B8pSSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeKxmJRLBaDHBT5S5KtwD75RiFxMlyMretNabq28Gb5pJjd50%2B6kPLoHXmwuATwnzkI2kpjf1SQnOFEyP4qah3T0V9Y1SkHg794lrZH%2B9K61amzH836kgLUaHvXtxRi95iWriI7nCBngvFT9d5aFGOF9ZtJRxeVbW%2FDNst3TjHWOhBjg3HSuHMpmx7928JByCi0IyShSvCiJrxndwnLBmf9AaIUhAmvOl0J%2BSf44NB2%2FL3vrsgg2oYwq0Ipehf6IQ6lxt4swe8PVr0f1XrpxAa9q5SPOW6n83uey8LsSOE2RtU8rnqMGS%2FVC4ofIe0NOYy6h0FROHF5dsUU1u%2FgfVoo%2BsI6yU0OpBNuESwWZB2UD10RXFTl6RLxMkw8tYUtOaxDdS%2BobJU8FSa5k3qHZeApzURQPKMWWPwbNuJ%2BPkQkmvKRLfhpOfYg8iVseVyxBd%2FYgp8ly8NYhjsRYNfRRvMMniTO6pskkGROROW0ixu4IX57c0S%2B3Fh660c%2FxLdn2bDFtsHf4UB9%2B8QzPCfFP9UifehZ%2B4jc9wBoxiNhaGF0KqSt74qwHe0wlW6ucqOYV4q0QZBybQa7l9cVNi9Hf0YOMG5xpbNtvoCi4OULZDP1wNAxYMHIfcHLQwvhwUvZT3AeuFJAGYwWT1MVkw3aifvgY6pgFiItqS0J5wLUKZh4gWNUk9zDJRzDzxx%2FHFleVfi5VwMW6REPgZziAm4M232ZR65dMA5jJvPGBMAIzAdbQ%2FLi%2BIkTooM6mAVnkOxOrSVHT3UGjHutUDUaAsX6K5LIdVh0wGv4rl3GKfm6EGnM7%2BOz4cCfcZoNTt9I8BphQOORavM4EZ0iwcaY%2Fx7R%2FD9IEuo9VkZKdBYj5UdLoWcNjU53DhEbWhYsPE&X-Amz-Signature=97df91a530998663a6eb4f489a988587b0bf82351dea54955b55646b4a7b220a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F7FBUT7%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkmNb66k1maBV%2BCsw%2FaJ2xC1sVQZxAvgpL5U0IM7z2AAiB%2FlXXNz%2B6beihgehRt7Yxic8xUQ1uDUgUk2gHjn%2B8pSSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeKxmJRLBaDHBT5S5KtwD75RiFxMlyMretNabq28Gb5pJjd50%2B6kPLoHXmwuATwnzkI2kpjf1SQnOFEyP4qah3T0V9Y1SkHg794lrZH%2B9K61amzH836kgLUaHvXtxRi95iWriI7nCBngvFT9d5aFGOF9ZtJRxeVbW%2FDNst3TjHWOhBjg3HSuHMpmx7928JByCi0IyShSvCiJrxndwnLBmf9AaIUhAmvOl0J%2BSf44NB2%2FL3vrsgg2oYwq0Ipehf6IQ6lxt4swe8PVr0f1XrpxAa9q5SPOW6n83uey8LsSOE2RtU8rnqMGS%2FVC4ofIe0NOYy6h0FROHF5dsUU1u%2FgfVoo%2BsI6yU0OpBNuESwWZB2UD10RXFTl6RLxMkw8tYUtOaxDdS%2BobJU8FSa5k3qHZeApzURQPKMWWPwbNuJ%2BPkQkmvKRLfhpOfYg8iVseVyxBd%2FYgp8ly8NYhjsRYNfRRvMMniTO6pskkGROROW0ixu4IX57c0S%2B3Fh660c%2FxLdn2bDFtsHf4UB9%2B8QzPCfFP9UifehZ%2B4jc9wBoxiNhaGF0KqSt74qwHe0wlW6ucqOYV4q0QZBybQa7l9cVNi9Hf0YOMG5xpbNtvoCi4OULZDP1wNAxYMHIfcHLQwvhwUvZT3AeuFJAGYwWT1MVkw3aifvgY6pgFiItqS0J5wLUKZh4gWNUk9zDJRzDzxx%2FHFleVfi5VwMW6REPgZziAm4M232ZR65dMA5jJvPGBMAIzAdbQ%2FLi%2BIkTooM6mAVnkOxOrSVHT3UGjHutUDUaAsX6K5LIdVh0wGv4rl3GKfm6EGnM7%2BOz4cCfcZoNTt9I8BphQOORavM4EZ0iwcaY%2Fx7R%2FD9IEuo9VkZKdBYj5UdLoWcNjU53DhEbWhYsPE&X-Amz-Signature=3bf66170fcee57e5cf246dcc14a1d77a3a3b5d8867b3f658be56033a917f03f8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F7FBUT7%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkmNb66k1maBV%2BCsw%2FaJ2xC1sVQZxAvgpL5U0IM7z2AAiB%2FlXXNz%2B6beihgehRt7Yxic8xUQ1uDUgUk2gHjn%2B8pSSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeKxmJRLBaDHBT5S5KtwD75RiFxMlyMretNabq28Gb5pJjd50%2B6kPLoHXmwuATwnzkI2kpjf1SQnOFEyP4qah3T0V9Y1SkHg794lrZH%2B9K61amzH836kgLUaHvXtxRi95iWriI7nCBngvFT9d5aFGOF9ZtJRxeVbW%2FDNst3TjHWOhBjg3HSuHMpmx7928JByCi0IyShSvCiJrxndwnLBmf9AaIUhAmvOl0J%2BSf44NB2%2FL3vrsgg2oYwq0Ipehf6IQ6lxt4swe8PVr0f1XrpxAa9q5SPOW6n83uey8LsSOE2RtU8rnqMGS%2FVC4ofIe0NOYy6h0FROHF5dsUU1u%2FgfVoo%2BsI6yU0OpBNuESwWZB2UD10RXFTl6RLxMkw8tYUtOaxDdS%2BobJU8FSa5k3qHZeApzURQPKMWWPwbNuJ%2BPkQkmvKRLfhpOfYg8iVseVyxBd%2FYgp8ly8NYhjsRYNfRRvMMniTO6pskkGROROW0ixu4IX57c0S%2B3Fh660c%2FxLdn2bDFtsHf4UB9%2B8QzPCfFP9UifehZ%2B4jc9wBoxiNhaGF0KqSt74qwHe0wlW6ucqOYV4q0QZBybQa7l9cVNi9Hf0YOMG5xpbNtvoCi4OULZDP1wNAxYMHIfcHLQwvhwUvZT3AeuFJAGYwWT1MVkw3aifvgY6pgFiItqS0J5wLUKZh4gWNUk9zDJRzDzxx%2FHFleVfi5VwMW6REPgZziAm4M232ZR65dMA5jJvPGBMAIzAdbQ%2FLi%2BIkTooM6mAVnkOxOrSVHT3UGjHutUDUaAsX6K5LIdVh0wGv4rl3GKfm6EGnM7%2BOz4cCfcZoNTt9I8BphQOORavM4EZ0iwcaY%2Fx7R%2FD9IEuo9VkZKdBYj5UdLoWcNjU53DhEbWhYsPE&X-Amz-Signature=a10478460cbb1cd8171eb22d21f27970d54bc6342fdb9ae36bb831442aef4419&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F7FBUT7%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkmNb66k1maBV%2BCsw%2FaJ2xC1sVQZxAvgpL5U0IM7z2AAiB%2FlXXNz%2B6beihgehRt7Yxic8xUQ1uDUgUk2gHjn%2B8pSSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeKxmJRLBaDHBT5S5KtwD75RiFxMlyMretNabq28Gb5pJjd50%2B6kPLoHXmwuATwnzkI2kpjf1SQnOFEyP4qah3T0V9Y1SkHg794lrZH%2B9K61amzH836kgLUaHvXtxRi95iWriI7nCBngvFT9d5aFGOF9ZtJRxeVbW%2FDNst3TjHWOhBjg3HSuHMpmx7928JByCi0IyShSvCiJrxndwnLBmf9AaIUhAmvOl0J%2BSf44NB2%2FL3vrsgg2oYwq0Ipehf6IQ6lxt4swe8PVr0f1XrpxAa9q5SPOW6n83uey8LsSOE2RtU8rnqMGS%2FVC4ofIe0NOYy6h0FROHF5dsUU1u%2FgfVoo%2BsI6yU0OpBNuESwWZB2UD10RXFTl6RLxMkw8tYUtOaxDdS%2BobJU8FSa5k3qHZeApzURQPKMWWPwbNuJ%2BPkQkmvKRLfhpOfYg8iVseVyxBd%2FYgp8ly8NYhjsRYNfRRvMMniTO6pskkGROROW0ixu4IX57c0S%2B3Fh660c%2FxLdn2bDFtsHf4UB9%2B8QzPCfFP9UifehZ%2B4jc9wBoxiNhaGF0KqSt74qwHe0wlW6ucqOYV4q0QZBybQa7l9cVNi9Hf0YOMG5xpbNtvoCi4OULZDP1wNAxYMHIfcHLQwvhwUvZT3AeuFJAGYwWT1MVkw3aifvgY6pgFiItqS0J5wLUKZh4gWNUk9zDJRzDzxx%2FHFleVfi5VwMW6REPgZziAm4M232ZR65dMA5jJvPGBMAIzAdbQ%2FLi%2BIkTooM6mAVnkOxOrSVHT3UGjHutUDUaAsX6K5LIdVh0wGv4rl3GKfm6EGnM7%2BOz4cCfcZoNTt9I8BphQOORavM4EZ0iwcaY%2Fx7R%2FD9IEuo9VkZKdBYj5UdLoWcNjU53DhEbWhYsPE&X-Amz-Signature=d9e55cd33e7a3a1939ebe1edfb62b4f32b58cb567b20025cb961f084cc2e48ec&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F7FBUT7%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkmNb66k1maBV%2BCsw%2FaJ2xC1sVQZxAvgpL5U0IM7z2AAiB%2FlXXNz%2B6beihgehRt7Yxic8xUQ1uDUgUk2gHjn%2B8pSSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeKxmJRLBaDHBT5S5KtwD75RiFxMlyMretNabq28Gb5pJjd50%2B6kPLoHXmwuATwnzkI2kpjf1SQnOFEyP4qah3T0V9Y1SkHg794lrZH%2B9K61amzH836kgLUaHvXtxRi95iWriI7nCBngvFT9d5aFGOF9ZtJRxeVbW%2FDNst3TjHWOhBjg3HSuHMpmx7928JByCi0IyShSvCiJrxndwnLBmf9AaIUhAmvOl0J%2BSf44NB2%2FL3vrsgg2oYwq0Ipehf6IQ6lxt4swe8PVr0f1XrpxAa9q5SPOW6n83uey8LsSOE2RtU8rnqMGS%2FVC4ofIe0NOYy6h0FROHF5dsUU1u%2FgfVoo%2BsI6yU0OpBNuESwWZB2UD10RXFTl6RLxMkw8tYUtOaxDdS%2BobJU8FSa5k3qHZeApzURQPKMWWPwbNuJ%2BPkQkmvKRLfhpOfYg8iVseVyxBd%2FYgp8ly8NYhjsRYNfRRvMMniTO6pskkGROROW0ixu4IX57c0S%2B3Fh660c%2FxLdn2bDFtsHf4UB9%2B8QzPCfFP9UifehZ%2B4jc9wBoxiNhaGF0KqSt74qwHe0wlW6ucqOYV4q0QZBybQa7l9cVNi9Hf0YOMG5xpbNtvoCi4OULZDP1wNAxYMHIfcHLQwvhwUvZT3AeuFJAGYwWT1MVkw3aifvgY6pgFiItqS0J5wLUKZh4gWNUk9zDJRzDzxx%2FHFleVfi5VwMW6REPgZziAm4M232ZR65dMA5jJvPGBMAIzAdbQ%2FLi%2BIkTooM6mAVnkOxOrSVHT3UGjHutUDUaAsX6K5LIdVh0wGv4rl3GKfm6EGnM7%2BOz4cCfcZoNTt9I8BphQOORavM4EZ0iwcaY%2Fx7R%2FD9IEuo9VkZKdBYj5UdLoWcNjU53DhEbWhYsPE&X-Amz-Signature=bd4d4aa1e6b93076d70df35b7227dface6bbc89c003f1ab833957d56683f9d4f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
