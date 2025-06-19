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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7KN4VFH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FwURre59S7xm540U5fuYr1XVPGj37kksFFzwd9t8IjQIgZ1%2BkohtrOKeHWn%2FpxBm8vq%2F5BtBR0RVLFxrefBtc7ZAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfSz%2FMa1oBJkfOYBSrcA72F96HY3AFspP8ZJkpHdBdBOoL5WgHiQokyWX0rQ4GHLF54%2F4f%2F1AgBY59YLJUJqZPgppteMGw%2F2cPeCq0u09Jr4rhxJuc5BQBZ2sDwrThXJab69v1tswOx4zFm9Laqx96S3SB8GRAyaivkQsL5nt0I%2Fj0kbNHPzaLSeNNE10WJo3NDlm6KZH1JX4%2FVryZs%2FwXdBzZSK1boQokWIgm0ztH2wzVY%2FLg3ncMN4xO3sh9KTsYvMd7NtKDu8ZLWhoCOHSjeYI2JmwSZRSzUahdTxdygdIDd4CfPUqzaJFm0cfSVxEloCh3pAdLav6WSS9pPzxF8bXg2LEwLNek%2Fwz7A64vvpELL3TB8BIcZ%2BWTVTDmTE2MTc96NOCqWx6%2F2UNNaa3ZmdrC5MhvSPEF9YkW0ttfgy%2BjLDkct0MXufmBbYQwGBWeDBwklaEL9LrQbVL7oFjeRL3rQS6TCdY%2FjT6MV1Uby0hRbBFKLtFfBrGpeig2%2BFLSkGjjO%2BPhzdLhtwJ%2FH7iNqWtGcm5h5%2Flt0d9EO9dWRDMZn43NMcZmql7SOmIugCjjmAAc6egdtqzt9iqqM6rBJvsNx6X%2Fn3t%2BnPcN4o8ioOWvq7kUuWDgmmztNEa%2BladzANoL9E1e4CZweMJiJ0MIGOqUBHZfKqcBYEBPCWmwsHB5K9VYVjYDtY%2FJDEIIrEBXYAoNAm6IQvw3sr68cscMZKvwtf8SurD0KMAmG8cJg8%2F8DH70C4fH%2FciY6EPOVxCnSFhlmAZ0G21TiRHc1LTlNisUk%2FE4fgqdi4t65X2xlNhjA2YuZtGzA5ylyhK0%2BBHPbh%2BGNivLD%2BaXorS3TSBh16cUlCMKxO44qXqI2qXF072V8CGm0EkOU&X-Amz-Signature=35d5ec70f725fd3d29df13b7f9b3f639b1488f08de5ea1e889d5b88de904a661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7KN4VFH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FwURre59S7xm540U5fuYr1XVPGj37kksFFzwd9t8IjQIgZ1%2BkohtrOKeHWn%2FpxBm8vq%2F5BtBR0RVLFxrefBtc7ZAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfSz%2FMa1oBJkfOYBSrcA72F96HY3AFspP8ZJkpHdBdBOoL5WgHiQokyWX0rQ4GHLF54%2F4f%2F1AgBY59YLJUJqZPgppteMGw%2F2cPeCq0u09Jr4rhxJuc5BQBZ2sDwrThXJab69v1tswOx4zFm9Laqx96S3SB8GRAyaivkQsL5nt0I%2Fj0kbNHPzaLSeNNE10WJo3NDlm6KZH1JX4%2FVryZs%2FwXdBzZSK1boQokWIgm0ztH2wzVY%2FLg3ncMN4xO3sh9KTsYvMd7NtKDu8ZLWhoCOHSjeYI2JmwSZRSzUahdTxdygdIDd4CfPUqzaJFm0cfSVxEloCh3pAdLav6WSS9pPzxF8bXg2LEwLNek%2Fwz7A64vvpELL3TB8BIcZ%2BWTVTDmTE2MTc96NOCqWx6%2F2UNNaa3ZmdrC5MhvSPEF9YkW0ttfgy%2BjLDkct0MXufmBbYQwGBWeDBwklaEL9LrQbVL7oFjeRL3rQS6TCdY%2FjT6MV1Uby0hRbBFKLtFfBrGpeig2%2BFLSkGjjO%2BPhzdLhtwJ%2FH7iNqWtGcm5h5%2Flt0d9EO9dWRDMZn43NMcZmql7SOmIugCjjmAAc6egdtqzt9iqqM6rBJvsNx6X%2Fn3t%2BnPcN4o8ioOWvq7kUuWDgmmztNEa%2BladzANoL9E1e4CZweMJiJ0MIGOqUBHZfKqcBYEBPCWmwsHB5K9VYVjYDtY%2FJDEIIrEBXYAoNAm6IQvw3sr68cscMZKvwtf8SurD0KMAmG8cJg8%2F8DH70C4fH%2FciY6EPOVxCnSFhlmAZ0G21TiRHc1LTlNisUk%2FE4fgqdi4t65X2xlNhjA2YuZtGzA5ylyhK0%2BBHPbh%2BGNivLD%2BaXorS3TSBh16cUlCMKxO44qXqI2qXF072V8CGm0EkOU&X-Amz-Signature=f8ec9c6e6558aecd5c4a60e65ef0ead0a8dfe8dcc7af4a9c85beb4681f080ea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7KN4VFH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FwURre59S7xm540U5fuYr1XVPGj37kksFFzwd9t8IjQIgZ1%2BkohtrOKeHWn%2FpxBm8vq%2F5BtBR0RVLFxrefBtc7ZAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfSz%2FMa1oBJkfOYBSrcA72F96HY3AFspP8ZJkpHdBdBOoL5WgHiQokyWX0rQ4GHLF54%2F4f%2F1AgBY59YLJUJqZPgppteMGw%2F2cPeCq0u09Jr4rhxJuc5BQBZ2sDwrThXJab69v1tswOx4zFm9Laqx96S3SB8GRAyaivkQsL5nt0I%2Fj0kbNHPzaLSeNNE10WJo3NDlm6KZH1JX4%2FVryZs%2FwXdBzZSK1boQokWIgm0ztH2wzVY%2FLg3ncMN4xO3sh9KTsYvMd7NtKDu8ZLWhoCOHSjeYI2JmwSZRSzUahdTxdygdIDd4CfPUqzaJFm0cfSVxEloCh3pAdLav6WSS9pPzxF8bXg2LEwLNek%2Fwz7A64vvpELL3TB8BIcZ%2BWTVTDmTE2MTc96NOCqWx6%2F2UNNaa3ZmdrC5MhvSPEF9YkW0ttfgy%2BjLDkct0MXufmBbYQwGBWeDBwklaEL9LrQbVL7oFjeRL3rQS6TCdY%2FjT6MV1Uby0hRbBFKLtFfBrGpeig2%2BFLSkGjjO%2BPhzdLhtwJ%2FH7iNqWtGcm5h5%2Flt0d9EO9dWRDMZn43NMcZmql7SOmIugCjjmAAc6egdtqzt9iqqM6rBJvsNx6X%2Fn3t%2BnPcN4o8ioOWvq7kUuWDgmmztNEa%2BladzANoL9E1e4CZweMJiJ0MIGOqUBHZfKqcBYEBPCWmwsHB5K9VYVjYDtY%2FJDEIIrEBXYAoNAm6IQvw3sr68cscMZKvwtf8SurD0KMAmG8cJg8%2F8DH70C4fH%2FciY6EPOVxCnSFhlmAZ0G21TiRHc1LTlNisUk%2FE4fgqdi4t65X2xlNhjA2YuZtGzA5ylyhK0%2BBHPbh%2BGNivLD%2BaXorS3TSBh16cUlCMKxO44qXqI2qXF072V8CGm0EkOU&X-Amz-Signature=982040ac5c2b9c4f2e8cab712a5e09afa18e6718db13d99c34aa1c4311a61db2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7KN4VFH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FwURre59S7xm540U5fuYr1XVPGj37kksFFzwd9t8IjQIgZ1%2BkohtrOKeHWn%2FpxBm8vq%2F5BtBR0RVLFxrefBtc7ZAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfSz%2FMa1oBJkfOYBSrcA72F96HY3AFspP8ZJkpHdBdBOoL5WgHiQokyWX0rQ4GHLF54%2F4f%2F1AgBY59YLJUJqZPgppteMGw%2F2cPeCq0u09Jr4rhxJuc5BQBZ2sDwrThXJab69v1tswOx4zFm9Laqx96S3SB8GRAyaivkQsL5nt0I%2Fj0kbNHPzaLSeNNE10WJo3NDlm6KZH1JX4%2FVryZs%2FwXdBzZSK1boQokWIgm0ztH2wzVY%2FLg3ncMN4xO3sh9KTsYvMd7NtKDu8ZLWhoCOHSjeYI2JmwSZRSzUahdTxdygdIDd4CfPUqzaJFm0cfSVxEloCh3pAdLav6WSS9pPzxF8bXg2LEwLNek%2Fwz7A64vvpELL3TB8BIcZ%2BWTVTDmTE2MTc96NOCqWx6%2F2UNNaa3ZmdrC5MhvSPEF9YkW0ttfgy%2BjLDkct0MXufmBbYQwGBWeDBwklaEL9LrQbVL7oFjeRL3rQS6TCdY%2FjT6MV1Uby0hRbBFKLtFfBrGpeig2%2BFLSkGjjO%2BPhzdLhtwJ%2FH7iNqWtGcm5h5%2Flt0d9EO9dWRDMZn43NMcZmql7SOmIugCjjmAAc6egdtqzt9iqqM6rBJvsNx6X%2Fn3t%2BnPcN4o8ioOWvq7kUuWDgmmztNEa%2BladzANoL9E1e4CZweMJiJ0MIGOqUBHZfKqcBYEBPCWmwsHB5K9VYVjYDtY%2FJDEIIrEBXYAoNAm6IQvw3sr68cscMZKvwtf8SurD0KMAmG8cJg8%2F8DH70C4fH%2FciY6EPOVxCnSFhlmAZ0G21TiRHc1LTlNisUk%2FE4fgqdi4t65X2xlNhjA2YuZtGzA5ylyhK0%2BBHPbh%2BGNivLD%2BaXorS3TSBh16cUlCMKxO44qXqI2qXF072V8CGm0EkOU&X-Amz-Signature=66d6bcc3eae522e7d052873c718a62408f1d35edc813095c743ec67789d7e316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7KN4VFH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FwURre59S7xm540U5fuYr1XVPGj37kksFFzwd9t8IjQIgZ1%2BkohtrOKeHWn%2FpxBm8vq%2F5BtBR0RVLFxrefBtc7ZAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfSz%2FMa1oBJkfOYBSrcA72F96HY3AFspP8ZJkpHdBdBOoL5WgHiQokyWX0rQ4GHLF54%2F4f%2F1AgBY59YLJUJqZPgppteMGw%2F2cPeCq0u09Jr4rhxJuc5BQBZ2sDwrThXJab69v1tswOx4zFm9Laqx96S3SB8GRAyaivkQsL5nt0I%2Fj0kbNHPzaLSeNNE10WJo3NDlm6KZH1JX4%2FVryZs%2FwXdBzZSK1boQokWIgm0ztH2wzVY%2FLg3ncMN4xO3sh9KTsYvMd7NtKDu8ZLWhoCOHSjeYI2JmwSZRSzUahdTxdygdIDd4CfPUqzaJFm0cfSVxEloCh3pAdLav6WSS9pPzxF8bXg2LEwLNek%2Fwz7A64vvpELL3TB8BIcZ%2BWTVTDmTE2MTc96NOCqWx6%2F2UNNaa3ZmdrC5MhvSPEF9YkW0ttfgy%2BjLDkct0MXufmBbYQwGBWeDBwklaEL9LrQbVL7oFjeRL3rQS6TCdY%2FjT6MV1Uby0hRbBFKLtFfBrGpeig2%2BFLSkGjjO%2BPhzdLhtwJ%2FH7iNqWtGcm5h5%2Flt0d9EO9dWRDMZn43NMcZmql7SOmIugCjjmAAc6egdtqzt9iqqM6rBJvsNx6X%2Fn3t%2BnPcN4o8ioOWvq7kUuWDgmmztNEa%2BladzANoL9E1e4CZweMJiJ0MIGOqUBHZfKqcBYEBPCWmwsHB5K9VYVjYDtY%2FJDEIIrEBXYAoNAm6IQvw3sr68cscMZKvwtf8SurD0KMAmG8cJg8%2F8DH70C4fH%2FciY6EPOVxCnSFhlmAZ0G21TiRHc1LTlNisUk%2FE4fgqdi4t65X2xlNhjA2YuZtGzA5ylyhK0%2BBHPbh%2BGNivLD%2BaXorS3TSBh16cUlCMKxO44qXqI2qXF072V8CGm0EkOU&X-Amz-Signature=17c1f56edcc0dcb8abc7da8a6cc9caaab2e698ed1b3f7196bb476ebb3433bdaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7KN4VFH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FwURre59S7xm540U5fuYr1XVPGj37kksFFzwd9t8IjQIgZ1%2BkohtrOKeHWn%2FpxBm8vq%2F5BtBR0RVLFxrefBtc7ZAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfSz%2FMa1oBJkfOYBSrcA72F96HY3AFspP8ZJkpHdBdBOoL5WgHiQokyWX0rQ4GHLF54%2F4f%2F1AgBY59YLJUJqZPgppteMGw%2F2cPeCq0u09Jr4rhxJuc5BQBZ2sDwrThXJab69v1tswOx4zFm9Laqx96S3SB8GRAyaivkQsL5nt0I%2Fj0kbNHPzaLSeNNE10WJo3NDlm6KZH1JX4%2FVryZs%2FwXdBzZSK1boQokWIgm0ztH2wzVY%2FLg3ncMN4xO3sh9KTsYvMd7NtKDu8ZLWhoCOHSjeYI2JmwSZRSzUahdTxdygdIDd4CfPUqzaJFm0cfSVxEloCh3pAdLav6WSS9pPzxF8bXg2LEwLNek%2Fwz7A64vvpELL3TB8BIcZ%2BWTVTDmTE2MTc96NOCqWx6%2F2UNNaa3ZmdrC5MhvSPEF9YkW0ttfgy%2BjLDkct0MXufmBbYQwGBWeDBwklaEL9LrQbVL7oFjeRL3rQS6TCdY%2FjT6MV1Uby0hRbBFKLtFfBrGpeig2%2BFLSkGjjO%2BPhzdLhtwJ%2FH7iNqWtGcm5h5%2Flt0d9EO9dWRDMZn43NMcZmql7SOmIugCjjmAAc6egdtqzt9iqqM6rBJvsNx6X%2Fn3t%2BnPcN4o8ioOWvq7kUuWDgmmztNEa%2BladzANoL9E1e4CZweMJiJ0MIGOqUBHZfKqcBYEBPCWmwsHB5K9VYVjYDtY%2FJDEIIrEBXYAoNAm6IQvw3sr68cscMZKvwtf8SurD0KMAmG8cJg8%2F8DH70C4fH%2FciY6EPOVxCnSFhlmAZ0G21TiRHc1LTlNisUk%2FE4fgqdi4t65X2xlNhjA2YuZtGzA5ylyhK0%2BBHPbh%2BGNivLD%2BaXorS3TSBh16cUlCMKxO44qXqI2qXF072V8CGm0EkOU&X-Amz-Signature=c6ab2d201284311a373e598bbaa77f21375c7e34a29b63ebbd0e660500a92761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7KN4VFH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FwURre59S7xm540U5fuYr1XVPGj37kksFFzwd9t8IjQIgZ1%2BkohtrOKeHWn%2FpxBm8vq%2F5BtBR0RVLFxrefBtc7ZAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfSz%2FMa1oBJkfOYBSrcA72F96HY3AFspP8ZJkpHdBdBOoL5WgHiQokyWX0rQ4GHLF54%2F4f%2F1AgBY59YLJUJqZPgppteMGw%2F2cPeCq0u09Jr4rhxJuc5BQBZ2sDwrThXJab69v1tswOx4zFm9Laqx96S3SB8GRAyaivkQsL5nt0I%2Fj0kbNHPzaLSeNNE10WJo3NDlm6KZH1JX4%2FVryZs%2FwXdBzZSK1boQokWIgm0ztH2wzVY%2FLg3ncMN4xO3sh9KTsYvMd7NtKDu8ZLWhoCOHSjeYI2JmwSZRSzUahdTxdygdIDd4CfPUqzaJFm0cfSVxEloCh3pAdLav6WSS9pPzxF8bXg2LEwLNek%2Fwz7A64vvpELL3TB8BIcZ%2BWTVTDmTE2MTc96NOCqWx6%2F2UNNaa3ZmdrC5MhvSPEF9YkW0ttfgy%2BjLDkct0MXufmBbYQwGBWeDBwklaEL9LrQbVL7oFjeRL3rQS6TCdY%2FjT6MV1Uby0hRbBFKLtFfBrGpeig2%2BFLSkGjjO%2BPhzdLhtwJ%2FH7iNqWtGcm5h5%2Flt0d9EO9dWRDMZn43NMcZmql7SOmIugCjjmAAc6egdtqzt9iqqM6rBJvsNx6X%2Fn3t%2BnPcN4o8ioOWvq7kUuWDgmmztNEa%2BladzANoL9E1e4CZweMJiJ0MIGOqUBHZfKqcBYEBPCWmwsHB5K9VYVjYDtY%2FJDEIIrEBXYAoNAm6IQvw3sr68cscMZKvwtf8SurD0KMAmG8cJg8%2F8DH70C4fH%2FciY6EPOVxCnSFhlmAZ0G21TiRHc1LTlNisUk%2FE4fgqdi4t65X2xlNhjA2YuZtGzA5ylyhK0%2BBHPbh%2BGNivLD%2BaXorS3TSBh16cUlCMKxO44qXqI2qXF072V8CGm0EkOU&X-Amz-Signature=4b7c60ad761ec9afc2842be52dec821ec1f76e90209d15f0eb58f23e59ed1cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
