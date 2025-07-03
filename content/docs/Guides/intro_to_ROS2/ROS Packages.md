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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKR7CMNW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICsdLuA%2BSZ%2Fy6Tx9TvAmg%2B1s1R1lUy1PH25PdLBgs%2BAIAiB8VkZLUKFJQZ2zSFlSRBlZS500otXYcwAXsZmDtzXW1Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM8XH6sOF2TnuONr0tKtwD8guaRvBtJkqBowyKa1M%2BnVE%2BHAYab9jc3kzuKiqVyzC7rx%2FlNXKyvNHhqTFFFVhx5OEtNt04J5gSkLbcSe%2BpKQ%2Bxp268R7XkpDgPfr%2B7%2BpE52AwHpRVFA1r%2FCp3dIPVFgxMhgbt1aMpwRs5WF9hQJmA25D1kcUdnATvn45TYlDQo7vNBqGwEAYUSvEVT%2FCtuY1jkYHLTgNsu2hbP6FQ7qFhI0Bx%2F0%2FVhsbuLLpS%2BrXuDbBQccw7Vn960EiGuOGxLAlMN0LvhdvqMB2UrszMiV0iee58YUu7sVzYOcONf1DwbGANVrnzOB0G6eBUcXXd4frw7LZ9l%2BNENa2fmwX2czkILOCv0a6zKxCRCSticRkQYa1jhAlrXwGTZml5mGKJlqyVLAeSqdhVeM6hzdPVE4wamjs5gr34x0NSKX6ZjD9o%2FbS4el9p7gd%2B9mUaoc1RcWd1jk07IfizGR1%2FZNX1QbJODrR5BVXEri%2BaUa7jUsArbiNH2H%2Bz2HE%2BpCQIaRiu2QGRZijCxhe8SBl2WXIKfMFSahe20bSululzXzAZO1br4xign6agHeFY2YXVHAz9bqWIBXEfTjkcum3jdG8LfcZRUilemzAsfBo4SMIRPs0geDcT%2Brv%2BjKJU04sMwn%2BaawwY6pgG85NyOAO5BXBJTID7gyKogwVHVYpD3m0B5BJ3SmIdGE2s%2FYj2mB2ffkAdoTXtACrIlDiNshFSHqTh6BKxeRuOC%2BogOcVojg1SC6upNSMXJL3ClmHnRrw3D7T51dZ35IAcBX%2ByVN9MElbsJsmQzTzTNHbE9XNEY0juL8qgIP%2F2%2FOAtdIogw3LiYiLlLui1dSALXjtVOAg%2FR7P8RwAEsh3Bj36kunUh5&X-Amz-Signature=245d9d5ad7860ea7a48e5c9140e5d1adbd5ffd2eb77442daf1c50b567b11e88c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKR7CMNW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICsdLuA%2BSZ%2Fy6Tx9TvAmg%2B1s1R1lUy1PH25PdLBgs%2BAIAiB8VkZLUKFJQZ2zSFlSRBlZS500otXYcwAXsZmDtzXW1Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM8XH6sOF2TnuONr0tKtwD8guaRvBtJkqBowyKa1M%2BnVE%2BHAYab9jc3kzuKiqVyzC7rx%2FlNXKyvNHhqTFFFVhx5OEtNt04J5gSkLbcSe%2BpKQ%2Bxp268R7XkpDgPfr%2B7%2BpE52AwHpRVFA1r%2FCp3dIPVFgxMhgbt1aMpwRs5WF9hQJmA25D1kcUdnATvn45TYlDQo7vNBqGwEAYUSvEVT%2FCtuY1jkYHLTgNsu2hbP6FQ7qFhI0Bx%2F0%2FVhsbuLLpS%2BrXuDbBQccw7Vn960EiGuOGxLAlMN0LvhdvqMB2UrszMiV0iee58YUu7sVzYOcONf1DwbGANVrnzOB0G6eBUcXXd4frw7LZ9l%2BNENa2fmwX2czkILOCv0a6zKxCRCSticRkQYa1jhAlrXwGTZml5mGKJlqyVLAeSqdhVeM6hzdPVE4wamjs5gr34x0NSKX6ZjD9o%2FbS4el9p7gd%2B9mUaoc1RcWd1jk07IfizGR1%2FZNX1QbJODrR5BVXEri%2BaUa7jUsArbiNH2H%2Bz2HE%2BpCQIaRiu2QGRZijCxhe8SBl2WXIKfMFSahe20bSululzXzAZO1br4xign6agHeFY2YXVHAz9bqWIBXEfTjkcum3jdG8LfcZRUilemzAsfBo4SMIRPs0geDcT%2Brv%2BjKJU04sMwn%2BaawwY6pgG85NyOAO5BXBJTID7gyKogwVHVYpD3m0B5BJ3SmIdGE2s%2FYj2mB2ffkAdoTXtACrIlDiNshFSHqTh6BKxeRuOC%2BogOcVojg1SC6upNSMXJL3ClmHnRrw3D7T51dZ35IAcBX%2ByVN9MElbsJsmQzTzTNHbE9XNEY0juL8qgIP%2F2%2FOAtdIogw3LiYiLlLui1dSALXjtVOAg%2FR7P8RwAEsh3Bj36kunUh5&X-Amz-Signature=adfae8c16cea6e9d70f1cafdaa47dfa5f2ab7cf03ffa31e2c26467f062e0d1e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKR7CMNW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICsdLuA%2BSZ%2Fy6Tx9TvAmg%2B1s1R1lUy1PH25PdLBgs%2BAIAiB8VkZLUKFJQZ2zSFlSRBlZS500otXYcwAXsZmDtzXW1Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM8XH6sOF2TnuONr0tKtwD8guaRvBtJkqBowyKa1M%2BnVE%2BHAYab9jc3kzuKiqVyzC7rx%2FlNXKyvNHhqTFFFVhx5OEtNt04J5gSkLbcSe%2BpKQ%2Bxp268R7XkpDgPfr%2B7%2BpE52AwHpRVFA1r%2FCp3dIPVFgxMhgbt1aMpwRs5WF9hQJmA25D1kcUdnATvn45TYlDQo7vNBqGwEAYUSvEVT%2FCtuY1jkYHLTgNsu2hbP6FQ7qFhI0Bx%2F0%2FVhsbuLLpS%2BrXuDbBQccw7Vn960EiGuOGxLAlMN0LvhdvqMB2UrszMiV0iee58YUu7sVzYOcONf1DwbGANVrnzOB0G6eBUcXXd4frw7LZ9l%2BNENa2fmwX2czkILOCv0a6zKxCRCSticRkQYa1jhAlrXwGTZml5mGKJlqyVLAeSqdhVeM6hzdPVE4wamjs5gr34x0NSKX6ZjD9o%2FbS4el9p7gd%2B9mUaoc1RcWd1jk07IfizGR1%2FZNX1QbJODrR5BVXEri%2BaUa7jUsArbiNH2H%2Bz2HE%2BpCQIaRiu2QGRZijCxhe8SBl2WXIKfMFSahe20bSululzXzAZO1br4xign6agHeFY2YXVHAz9bqWIBXEfTjkcum3jdG8LfcZRUilemzAsfBo4SMIRPs0geDcT%2Brv%2BjKJU04sMwn%2BaawwY6pgG85NyOAO5BXBJTID7gyKogwVHVYpD3m0B5BJ3SmIdGE2s%2FYj2mB2ffkAdoTXtACrIlDiNshFSHqTh6BKxeRuOC%2BogOcVojg1SC6upNSMXJL3ClmHnRrw3D7T51dZ35IAcBX%2ByVN9MElbsJsmQzTzTNHbE9XNEY0juL8qgIP%2F2%2FOAtdIogw3LiYiLlLui1dSALXjtVOAg%2FR7P8RwAEsh3Bj36kunUh5&X-Amz-Signature=98ac19f94592a41b97823b3d31b6197fe0fa86a925a9e6ff40645e1db8c6990d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKR7CMNW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICsdLuA%2BSZ%2Fy6Tx9TvAmg%2B1s1R1lUy1PH25PdLBgs%2BAIAiB8VkZLUKFJQZ2zSFlSRBlZS500otXYcwAXsZmDtzXW1Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM8XH6sOF2TnuONr0tKtwD8guaRvBtJkqBowyKa1M%2BnVE%2BHAYab9jc3kzuKiqVyzC7rx%2FlNXKyvNHhqTFFFVhx5OEtNt04J5gSkLbcSe%2BpKQ%2Bxp268R7XkpDgPfr%2B7%2BpE52AwHpRVFA1r%2FCp3dIPVFgxMhgbt1aMpwRs5WF9hQJmA25D1kcUdnATvn45TYlDQo7vNBqGwEAYUSvEVT%2FCtuY1jkYHLTgNsu2hbP6FQ7qFhI0Bx%2F0%2FVhsbuLLpS%2BrXuDbBQccw7Vn960EiGuOGxLAlMN0LvhdvqMB2UrszMiV0iee58YUu7sVzYOcONf1DwbGANVrnzOB0G6eBUcXXd4frw7LZ9l%2BNENa2fmwX2czkILOCv0a6zKxCRCSticRkQYa1jhAlrXwGTZml5mGKJlqyVLAeSqdhVeM6hzdPVE4wamjs5gr34x0NSKX6ZjD9o%2FbS4el9p7gd%2B9mUaoc1RcWd1jk07IfizGR1%2FZNX1QbJODrR5BVXEri%2BaUa7jUsArbiNH2H%2Bz2HE%2BpCQIaRiu2QGRZijCxhe8SBl2WXIKfMFSahe20bSululzXzAZO1br4xign6agHeFY2YXVHAz9bqWIBXEfTjkcum3jdG8LfcZRUilemzAsfBo4SMIRPs0geDcT%2Brv%2BjKJU04sMwn%2BaawwY6pgG85NyOAO5BXBJTID7gyKogwVHVYpD3m0B5BJ3SmIdGE2s%2FYj2mB2ffkAdoTXtACrIlDiNshFSHqTh6BKxeRuOC%2BogOcVojg1SC6upNSMXJL3ClmHnRrw3D7T51dZ35IAcBX%2ByVN9MElbsJsmQzTzTNHbE9XNEY0juL8qgIP%2F2%2FOAtdIogw3LiYiLlLui1dSALXjtVOAg%2FR7P8RwAEsh3Bj36kunUh5&X-Amz-Signature=b8f71fa92ef4abcba45525ecdd31af2c7814aa76c6dbfeb72b1bf731dea36ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKR7CMNW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICsdLuA%2BSZ%2Fy6Tx9TvAmg%2B1s1R1lUy1PH25PdLBgs%2BAIAiB8VkZLUKFJQZ2zSFlSRBlZS500otXYcwAXsZmDtzXW1Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM8XH6sOF2TnuONr0tKtwD8guaRvBtJkqBowyKa1M%2BnVE%2BHAYab9jc3kzuKiqVyzC7rx%2FlNXKyvNHhqTFFFVhx5OEtNt04J5gSkLbcSe%2BpKQ%2Bxp268R7XkpDgPfr%2B7%2BpE52AwHpRVFA1r%2FCp3dIPVFgxMhgbt1aMpwRs5WF9hQJmA25D1kcUdnATvn45TYlDQo7vNBqGwEAYUSvEVT%2FCtuY1jkYHLTgNsu2hbP6FQ7qFhI0Bx%2F0%2FVhsbuLLpS%2BrXuDbBQccw7Vn960EiGuOGxLAlMN0LvhdvqMB2UrszMiV0iee58YUu7sVzYOcONf1DwbGANVrnzOB0G6eBUcXXd4frw7LZ9l%2BNENa2fmwX2czkILOCv0a6zKxCRCSticRkQYa1jhAlrXwGTZml5mGKJlqyVLAeSqdhVeM6hzdPVE4wamjs5gr34x0NSKX6ZjD9o%2FbS4el9p7gd%2B9mUaoc1RcWd1jk07IfizGR1%2FZNX1QbJODrR5BVXEri%2BaUa7jUsArbiNH2H%2Bz2HE%2BpCQIaRiu2QGRZijCxhe8SBl2WXIKfMFSahe20bSululzXzAZO1br4xign6agHeFY2YXVHAz9bqWIBXEfTjkcum3jdG8LfcZRUilemzAsfBo4SMIRPs0geDcT%2Brv%2BjKJU04sMwn%2BaawwY6pgG85NyOAO5BXBJTID7gyKogwVHVYpD3m0B5BJ3SmIdGE2s%2FYj2mB2ffkAdoTXtACrIlDiNshFSHqTh6BKxeRuOC%2BogOcVojg1SC6upNSMXJL3ClmHnRrw3D7T51dZ35IAcBX%2ByVN9MElbsJsmQzTzTNHbE9XNEY0juL8qgIP%2F2%2FOAtdIogw3LiYiLlLui1dSALXjtVOAg%2FR7P8RwAEsh3Bj36kunUh5&X-Amz-Signature=4e3be1a06344ba65d59e7040d097c64de028459e6d773347084ef3843b6fe90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKR7CMNW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICsdLuA%2BSZ%2Fy6Tx9TvAmg%2B1s1R1lUy1PH25PdLBgs%2BAIAiB8VkZLUKFJQZ2zSFlSRBlZS500otXYcwAXsZmDtzXW1Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM8XH6sOF2TnuONr0tKtwD8guaRvBtJkqBowyKa1M%2BnVE%2BHAYab9jc3kzuKiqVyzC7rx%2FlNXKyvNHhqTFFFVhx5OEtNt04J5gSkLbcSe%2BpKQ%2Bxp268R7XkpDgPfr%2B7%2BpE52AwHpRVFA1r%2FCp3dIPVFgxMhgbt1aMpwRs5WF9hQJmA25D1kcUdnATvn45TYlDQo7vNBqGwEAYUSvEVT%2FCtuY1jkYHLTgNsu2hbP6FQ7qFhI0Bx%2F0%2FVhsbuLLpS%2BrXuDbBQccw7Vn960EiGuOGxLAlMN0LvhdvqMB2UrszMiV0iee58YUu7sVzYOcONf1DwbGANVrnzOB0G6eBUcXXd4frw7LZ9l%2BNENa2fmwX2czkILOCv0a6zKxCRCSticRkQYa1jhAlrXwGTZml5mGKJlqyVLAeSqdhVeM6hzdPVE4wamjs5gr34x0NSKX6ZjD9o%2FbS4el9p7gd%2B9mUaoc1RcWd1jk07IfizGR1%2FZNX1QbJODrR5BVXEri%2BaUa7jUsArbiNH2H%2Bz2HE%2BpCQIaRiu2QGRZijCxhe8SBl2WXIKfMFSahe20bSululzXzAZO1br4xign6agHeFY2YXVHAz9bqWIBXEfTjkcum3jdG8LfcZRUilemzAsfBo4SMIRPs0geDcT%2Brv%2BjKJU04sMwn%2BaawwY6pgG85NyOAO5BXBJTID7gyKogwVHVYpD3m0B5BJ3SmIdGE2s%2FYj2mB2ffkAdoTXtACrIlDiNshFSHqTh6BKxeRuOC%2BogOcVojg1SC6upNSMXJL3ClmHnRrw3D7T51dZ35IAcBX%2ByVN9MElbsJsmQzTzTNHbE9XNEY0juL8qgIP%2F2%2FOAtdIogw3LiYiLlLui1dSALXjtVOAg%2FR7P8RwAEsh3Bj36kunUh5&X-Amz-Signature=e9fe23adfd66732626a258114c1a5bc2c9d0d9fdcb1987b61b5776f6155b2ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKR7CMNW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICsdLuA%2BSZ%2Fy6Tx9TvAmg%2B1s1R1lUy1PH25PdLBgs%2BAIAiB8VkZLUKFJQZ2zSFlSRBlZS500otXYcwAXsZmDtzXW1Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM8XH6sOF2TnuONr0tKtwD8guaRvBtJkqBowyKa1M%2BnVE%2BHAYab9jc3kzuKiqVyzC7rx%2FlNXKyvNHhqTFFFVhx5OEtNt04J5gSkLbcSe%2BpKQ%2Bxp268R7XkpDgPfr%2B7%2BpE52AwHpRVFA1r%2FCp3dIPVFgxMhgbt1aMpwRs5WF9hQJmA25D1kcUdnATvn45TYlDQo7vNBqGwEAYUSvEVT%2FCtuY1jkYHLTgNsu2hbP6FQ7qFhI0Bx%2F0%2FVhsbuLLpS%2BrXuDbBQccw7Vn960EiGuOGxLAlMN0LvhdvqMB2UrszMiV0iee58YUu7sVzYOcONf1DwbGANVrnzOB0G6eBUcXXd4frw7LZ9l%2BNENa2fmwX2czkILOCv0a6zKxCRCSticRkQYa1jhAlrXwGTZml5mGKJlqyVLAeSqdhVeM6hzdPVE4wamjs5gr34x0NSKX6ZjD9o%2FbS4el9p7gd%2B9mUaoc1RcWd1jk07IfizGR1%2FZNX1QbJODrR5BVXEri%2BaUa7jUsArbiNH2H%2Bz2HE%2BpCQIaRiu2QGRZijCxhe8SBl2WXIKfMFSahe20bSululzXzAZO1br4xign6agHeFY2YXVHAz9bqWIBXEfTjkcum3jdG8LfcZRUilemzAsfBo4SMIRPs0geDcT%2Brv%2BjKJU04sMwn%2BaawwY6pgG85NyOAO5BXBJTID7gyKogwVHVYpD3m0B5BJ3SmIdGE2s%2FYj2mB2ffkAdoTXtACrIlDiNshFSHqTh6BKxeRuOC%2BogOcVojg1SC6upNSMXJL3ClmHnRrw3D7T51dZ35IAcBX%2ByVN9MElbsJsmQzTzTNHbE9XNEY0juL8qgIP%2F2%2FOAtdIogw3LiYiLlLui1dSALXjtVOAg%2FR7P8RwAEsh3Bj36kunUh5&X-Amz-Signature=3192047c753f9b95b709b7bdaa535ecd0681445efb97b2059b2168c408cfa45d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
