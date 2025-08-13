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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH74TWF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqZBu1%2Fj5YGSeP6FXRbPXHFzaWDOA%2FVr9shDBF2ZyuYAIhAJ3GEg8QG4kJRhQ0zfbyHx%2BHzBEArgHZr28zUT1sFtRBKv8DCCQQABoMNjM3NDIzMTgzODA1IgyS2pfzDu4eQ4HKeSYq3ANPTYpz0WBF21SROaGOHysjnODwCUlGeRVeJAQM3Y9WgbYj6Ja5l7hxcjx73kZkeyKemmbl7YviuEhWlWnhyQKqtE2dWhp7VZQjJJsZWii5%2BAvPu0osqvcHsUN5XAU6H%2BLB79Xpate3BtRmTO%2B4S9XGWvR4gpXuDYFtF2RE%2FDdLEMP7zwQFhLqXhpZj36th8fpLrW9lljgOjCEE%2FNaamT1gFsycfCiIig8TukGQl8oi4kjWEXCGbyZf6o8kaOAw6Ox%2FcFvbHMMnTZJGP6JKu585X8GFaCCqchrzat7iJqV4bPfEf7G%2FAkX%2BxJibBKAla9U19V0O8qkspKH%2BEt69gbSnrCbgA4O6R97nbSrhN9NKGYKEjaiwbfAFkCqRtgWVUbfu%2B3DlDj8thvDe2dCrR0Mx7wbOLbZ%2BPaxYxXpTx3Yzrqug0Sd6%2FCkZ%2BLCliW3lSetn3qopLBbqsT%2FtVb%2BALj3FTB4RLWmkC96Cr%2B2SC59%2BZjXfpOPQcP2B4cadNFE6Crg6s9kLxC8cqtdeMtX1EL0iH%2F6OZA0EAMkjcS56IH%2FtJ7SL0LeJHTLUBRDtSHg7wXUwsqtVk0aVWCw625ucBDkWFDWGouoY6O5cXn90qzcohMWTj54uAeJMzeaLdjDThfDEBjqkASbbB1yhSV023NxyGsbBrUkwGsnuzY%2F5qlJfvJUcDT9iBtP%2BtAeA2ivxQxY6VJ%2BOTk9WWLRt7L6LUOGx7inmLcMIWKU21iv891DhWilIrwoUGdvMXum%2BRfWY%2FpW9%2BuJIqsQ8wqCXbmqB812ACZEfQO4v65QVKOKFcyXl5ef0Ppw0W0h%2BFUfGZoZKPrpXh5oFqwfiCMRbFW4zn6mlDPEWmJyDU%2BtP&X-Amz-Signature=f95175eb5bebe0bdec0f171503f952ea07726de422c1f67a7f1974c3fd60e62d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH74TWF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqZBu1%2Fj5YGSeP6FXRbPXHFzaWDOA%2FVr9shDBF2ZyuYAIhAJ3GEg8QG4kJRhQ0zfbyHx%2BHzBEArgHZr28zUT1sFtRBKv8DCCQQABoMNjM3NDIzMTgzODA1IgyS2pfzDu4eQ4HKeSYq3ANPTYpz0WBF21SROaGOHysjnODwCUlGeRVeJAQM3Y9WgbYj6Ja5l7hxcjx73kZkeyKemmbl7YviuEhWlWnhyQKqtE2dWhp7VZQjJJsZWii5%2BAvPu0osqvcHsUN5XAU6H%2BLB79Xpate3BtRmTO%2B4S9XGWvR4gpXuDYFtF2RE%2FDdLEMP7zwQFhLqXhpZj36th8fpLrW9lljgOjCEE%2FNaamT1gFsycfCiIig8TukGQl8oi4kjWEXCGbyZf6o8kaOAw6Ox%2FcFvbHMMnTZJGP6JKu585X8GFaCCqchrzat7iJqV4bPfEf7G%2FAkX%2BxJibBKAla9U19V0O8qkspKH%2BEt69gbSnrCbgA4O6R97nbSrhN9NKGYKEjaiwbfAFkCqRtgWVUbfu%2B3DlDj8thvDe2dCrR0Mx7wbOLbZ%2BPaxYxXpTx3Yzrqug0Sd6%2FCkZ%2BLCliW3lSetn3qopLBbqsT%2FtVb%2BALj3FTB4RLWmkC96Cr%2B2SC59%2BZjXfpOPQcP2B4cadNFE6Crg6s9kLxC8cqtdeMtX1EL0iH%2F6OZA0EAMkjcS56IH%2FtJ7SL0LeJHTLUBRDtSHg7wXUwsqtVk0aVWCw625ucBDkWFDWGouoY6O5cXn90qzcohMWTj54uAeJMzeaLdjDThfDEBjqkASbbB1yhSV023NxyGsbBrUkwGsnuzY%2F5qlJfvJUcDT9iBtP%2BtAeA2ivxQxY6VJ%2BOTk9WWLRt7L6LUOGx7inmLcMIWKU21iv891DhWilIrwoUGdvMXum%2BRfWY%2FpW9%2BuJIqsQ8wqCXbmqB812ACZEfQO4v65QVKOKFcyXl5ef0Ppw0W0h%2BFUfGZoZKPrpXh5oFqwfiCMRbFW4zn6mlDPEWmJyDU%2BtP&X-Amz-Signature=b2bccafd6c5cfd4e1a0f8d7afd0f5000ca219e7e6694b9b21ac3132a5601a9d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH74TWF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqZBu1%2Fj5YGSeP6FXRbPXHFzaWDOA%2FVr9shDBF2ZyuYAIhAJ3GEg8QG4kJRhQ0zfbyHx%2BHzBEArgHZr28zUT1sFtRBKv8DCCQQABoMNjM3NDIzMTgzODA1IgyS2pfzDu4eQ4HKeSYq3ANPTYpz0WBF21SROaGOHysjnODwCUlGeRVeJAQM3Y9WgbYj6Ja5l7hxcjx73kZkeyKemmbl7YviuEhWlWnhyQKqtE2dWhp7VZQjJJsZWii5%2BAvPu0osqvcHsUN5XAU6H%2BLB79Xpate3BtRmTO%2B4S9XGWvR4gpXuDYFtF2RE%2FDdLEMP7zwQFhLqXhpZj36th8fpLrW9lljgOjCEE%2FNaamT1gFsycfCiIig8TukGQl8oi4kjWEXCGbyZf6o8kaOAw6Ox%2FcFvbHMMnTZJGP6JKu585X8GFaCCqchrzat7iJqV4bPfEf7G%2FAkX%2BxJibBKAla9U19V0O8qkspKH%2BEt69gbSnrCbgA4O6R97nbSrhN9NKGYKEjaiwbfAFkCqRtgWVUbfu%2B3DlDj8thvDe2dCrR0Mx7wbOLbZ%2BPaxYxXpTx3Yzrqug0Sd6%2FCkZ%2BLCliW3lSetn3qopLBbqsT%2FtVb%2BALj3FTB4RLWmkC96Cr%2B2SC59%2BZjXfpOPQcP2B4cadNFE6Crg6s9kLxC8cqtdeMtX1EL0iH%2F6OZA0EAMkjcS56IH%2FtJ7SL0LeJHTLUBRDtSHg7wXUwsqtVk0aVWCw625ucBDkWFDWGouoY6O5cXn90qzcohMWTj54uAeJMzeaLdjDThfDEBjqkASbbB1yhSV023NxyGsbBrUkwGsnuzY%2F5qlJfvJUcDT9iBtP%2BtAeA2ivxQxY6VJ%2BOTk9WWLRt7L6LUOGx7inmLcMIWKU21iv891DhWilIrwoUGdvMXum%2BRfWY%2FpW9%2BuJIqsQ8wqCXbmqB812ACZEfQO4v65QVKOKFcyXl5ef0Ppw0W0h%2BFUfGZoZKPrpXh5oFqwfiCMRbFW4zn6mlDPEWmJyDU%2BtP&X-Amz-Signature=941fe28bee8e63ecbfebece0892b2e9fa51d1019ffb897d943ffeffb29688105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH74TWF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqZBu1%2Fj5YGSeP6FXRbPXHFzaWDOA%2FVr9shDBF2ZyuYAIhAJ3GEg8QG4kJRhQ0zfbyHx%2BHzBEArgHZr28zUT1sFtRBKv8DCCQQABoMNjM3NDIzMTgzODA1IgyS2pfzDu4eQ4HKeSYq3ANPTYpz0WBF21SROaGOHysjnODwCUlGeRVeJAQM3Y9WgbYj6Ja5l7hxcjx73kZkeyKemmbl7YviuEhWlWnhyQKqtE2dWhp7VZQjJJsZWii5%2BAvPu0osqvcHsUN5XAU6H%2BLB79Xpate3BtRmTO%2B4S9XGWvR4gpXuDYFtF2RE%2FDdLEMP7zwQFhLqXhpZj36th8fpLrW9lljgOjCEE%2FNaamT1gFsycfCiIig8TukGQl8oi4kjWEXCGbyZf6o8kaOAw6Ox%2FcFvbHMMnTZJGP6JKu585X8GFaCCqchrzat7iJqV4bPfEf7G%2FAkX%2BxJibBKAla9U19V0O8qkspKH%2BEt69gbSnrCbgA4O6R97nbSrhN9NKGYKEjaiwbfAFkCqRtgWVUbfu%2B3DlDj8thvDe2dCrR0Mx7wbOLbZ%2BPaxYxXpTx3Yzrqug0Sd6%2FCkZ%2BLCliW3lSetn3qopLBbqsT%2FtVb%2BALj3FTB4RLWmkC96Cr%2B2SC59%2BZjXfpOPQcP2B4cadNFE6Crg6s9kLxC8cqtdeMtX1EL0iH%2F6OZA0EAMkjcS56IH%2FtJ7SL0LeJHTLUBRDtSHg7wXUwsqtVk0aVWCw625ucBDkWFDWGouoY6O5cXn90qzcohMWTj54uAeJMzeaLdjDThfDEBjqkASbbB1yhSV023NxyGsbBrUkwGsnuzY%2F5qlJfvJUcDT9iBtP%2BtAeA2ivxQxY6VJ%2BOTk9WWLRt7L6LUOGx7inmLcMIWKU21iv891DhWilIrwoUGdvMXum%2BRfWY%2FpW9%2BuJIqsQ8wqCXbmqB812ACZEfQO4v65QVKOKFcyXl5ef0Ppw0W0h%2BFUfGZoZKPrpXh5oFqwfiCMRbFW4zn6mlDPEWmJyDU%2BtP&X-Amz-Signature=ee3164ec6199aea3ce93a7ee25e553e43fda1b3d930c8fdc1d30a59363e72497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH74TWF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqZBu1%2Fj5YGSeP6FXRbPXHFzaWDOA%2FVr9shDBF2ZyuYAIhAJ3GEg8QG4kJRhQ0zfbyHx%2BHzBEArgHZr28zUT1sFtRBKv8DCCQQABoMNjM3NDIzMTgzODA1IgyS2pfzDu4eQ4HKeSYq3ANPTYpz0WBF21SROaGOHysjnODwCUlGeRVeJAQM3Y9WgbYj6Ja5l7hxcjx73kZkeyKemmbl7YviuEhWlWnhyQKqtE2dWhp7VZQjJJsZWii5%2BAvPu0osqvcHsUN5XAU6H%2BLB79Xpate3BtRmTO%2B4S9XGWvR4gpXuDYFtF2RE%2FDdLEMP7zwQFhLqXhpZj36th8fpLrW9lljgOjCEE%2FNaamT1gFsycfCiIig8TukGQl8oi4kjWEXCGbyZf6o8kaOAw6Ox%2FcFvbHMMnTZJGP6JKu585X8GFaCCqchrzat7iJqV4bPfEf7G%2FAkX%2BxJibBKAla9U19V0O8qkspKH%2BEt69gbSnrCbgA4O6R97nbSrhN9NKGYKEjaiwbfAFkCqRtgWVUbfu%2B3DlDj8thvDe2dCrR0Mx7wbOLbZ%2BPaxYxXpTx3Yzrqug0Sd6%2FCkZ%2BLCliW3lSetn3qopLBbqsT%2FtVb%2BALj3FTB4RLWmkC96Cr%2B2SC59%2BZjXfpOPQcP2B4cadNFE6Crg6s9kLxC8cqtdeMtX1EL0iH%2F6OZA0EAMkjcS56IH%2FtJ7SL0LeJHTLUBRDtSHg7wXUwsqtVk0aVWCw625ucBDkWFDWGouoY6O5cXn90qzcohMWTj54uAeJMzeaLdjDThfDEBjqkASbbB1yhSV023NxyGsbBrUkwGsnuzY%2F5qlJfvJUcDT9iBtP%2BtAeA2ivxQxY6VJ%2BOTk9WWLRt7L6LUOGx7inmLcMIWKU21iv891DhWilIrwoUGdvMXum%2BRfWY%2FpW9%2BuJIqsQ8wqCXbmqB812ACZEfQO4v65QVKOKFcyXl5ef0Ppw0W0h%2BFUfGZoZKPrpXh5oFqwfiCMRbFW4zn6mlDPEWmJyDU%2BtP&X-Amz-Signature=ef6739f57855e4e278a16698d2c9e16ab72a75f279fe8cbddfe148e821859600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH74TWF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqZBu1%2Fj5YGSeP6FXRbPXHFzaWDOA%2FVr9shDBF2ZyuYAIhAJ3GEg8QG4kJRhQ0zfbyHx%2BHzBEArgHZr28zUT1sFtRBKv8DCCQQABoMNjM3NDIzMTgzODA1IgyS2pfzDu4eQ4HKeSYq3ANPTYpz0WBF21SROaGOHysjnODwCUlGeRVeJAQM3Y9WgbYj6Ja5l7hxcjx73kZkeyKemmbl7YviuEhWlWnhyQKqtE2dWhp7VZQjJJsZWii5%2BAvPu0osqvcHsUN5XAU6H%2BLB79Xpate3BtRmTO%2B4S9XGWvR4gpXuDYFtF2RE%2FDdLEMP7zwQFhLqXhpZj36th8fpLrW9lljgOjCEE%2FNaamT1gFsycfCiIig8TukGQl8oi4kjWEXCGbyZf6o8kaOAw6Ox%2FcFvbHMMnTZJGP6JKu585X8GFaCCqchrzat7iJqV4bPfEf7G%2FAkX%2BxJibBKAla9U19V0O8qkspKH%2BEt69gbSnrCbgA4O6R97nbSrhN9NKGYKEjaiwbfAFkCqRtgWVUbfu%2B3DlDj8thvDe2dCrR0Mx7wbOLbZ%2BPaxYxXpTx3Yzrqug0Sd6%2FCkZ%2BLCliW3lSetn3qopLBbqsT%2FtVb%2BALj3FTB4RLWmkC96Cr%2B2SC59%2BZjXfpOPQcP2B4cadNFE6Crg6s9kLxC8cqtdeMtX1EL0iH%2F6OZA0EAMkjcS56IH%2FtJ7SL0LeJHTLUBRDtSHg7wXUwsqtVk0aVWCw625ucBDkWFDWGouoY6O5cXn90qzcohMWTj54uAeJMzeaLdjDThfDEBjqkASbbB1yhSV023NxyGsbBrUkwGsnuzY%2F5qlJfvJUcDT9iBtP%2BtAeA2ivxQxY6VJ%2BOTk9WWLRt7L6LUOGx7inmLcMIWKU21iv891DhWilIrwoUGdvMXum%2BRfWY%2FpW9%2BuJIqsQ8wqCXbmqB812ACZEfQO4v65QVKOKFcyXl5ef0Ppw0W0h%2BFUfGZoZKPrpXh5oFqwfiCMRbFW4zn6mlDPEWmJyDU%2BtP&X-Amz-Signature=e4005e2334faca02743365dda42da0bf340cf7da36137c157115f9938470da21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH74TWF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqZBu1%2Fj5YGSeP6FXRbPXHFzaWDOA%2FVr9shDBF2ZyuYAIhAJ3GEg8QG4kJRhQ0zfbyHx%2BHzBEArgHZr28zUT1sFtRBKv8DCCQQABoMNjM3NDIzMTgzODA1IgyS2pfzDu4eQ4HKeSYq3ANPTYpz0WBF21SROaGOHysjnODwCUlGeRVeJAQM3Y9WgbYj6Ja5l7hxcjx73kZkeyKemmbl7YviuEhWlWnhyQKqtE2dWhp7VZQjJJsZWii5%2BAvPu0osqvcHsUN5XAU6H%2BLB79Xpate3BtRmTO%2B4S9XGWvR4gpXuDYFtF2RE%2FDdLEMP7zwQFhLqXhpZj36th8fpLrW9lljgOjCEE%2FNaamT1gFsycfCiIig8TukGQl8oi4kjWEXCGbyZf6o8kaOAw6Ox%2FcFvbHMMnTZJGP6JKu585X8GFaCCqchrzat7iJqV4bPfEf7G%2FAkX%2BxJibBKAla9U19V0O8qkspKH%2BEt69gbSnrCbgA4O6R97nbSrhN9NKGYKEjaiwbfAFkCqRtgWVUbfu%2B3DlDj8thvDe2dCrR0Mx7wbOLbZ%2BPaxYxXpTx3Yzrqug0Sd6%2FCkZ%2BLCliW3lSetn3qopLBbqsT%2FtVb%2BALj3FTB4RLWmkC96Cr%2B2SC59%2BZjXfpOPQcP2B4cadNFE6Crg6s9kLxC8cqtdeMtX1EL0iH%2F6OZA0EAMkjcS56IH%2FtJ7SL0LeJHTLUBRDtSHg7wXUwsqtVk0aVWCw625ucBDkWFDWGouoY6O5cXn90qzcohMWTj54uAeJMzeaLdjDThfDEBjqkASbbB1yhSV023NxyGsbBrUkwGsnuzY%2F5qlJfvJUcDT9iBtP%2BtAeA2ivxQxY6VJ%2BOTk9WWLRt7L6LUOGx7inmLcMIWKU21iv891DhWilIrwoUGdvMXum%2BRfWY%2FpW9%2BuJIqsQ8wqCXbmqB812ACZEfQO4v65QVKOKFcyXl5ef0Ppw0W0h%2BFUfGZoZKPrpXh5oFqwfiCMRbFW4zn6mlDPEWmJyDU%2BtP&X-Amz-Signature=7bebc04bb1f79d0ebc1e657dbf9a42cb93ec9342550c115bf19acfc2852f30ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
