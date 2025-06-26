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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2XXBLQ5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCp6wQGCGkKxCphY9vB3WAsBk%2FgwaqiREYUMg4yoZVo6AIhAK03YeS0YSArAXE7K0OA0j858UurSyqedNnEZRbVtXtnKv8DCFMQABoMNjM3NDIzMTgzODA1IgyQEnJwS62HPp7KEd4q3AMVUqUkYuqYSVcw1%2F%2FCIj4omgbW5V4AYmjKvqNvqTCv3XnmAcx9mjHXZ%2BKPwKn9ClLJRAubpqRf7uDF1awLYI4GuswnqpXCf%2BBCiZr7ihDqfV5Q9%2FP16vHKvlUTqWb4c3v0gGpGHvkI1c1dh831Q9Q64Q84LKo2AVLoSnnv3GIMd5vOQKmUmKlwowwZjEoHZpLOhnml%2FlgNzDTl4OdEI7v6YRrhWXAqNu8OkF%2BUy0Y7jRRjPAmhHlItrfQ2wbxW09a%2Bg%2BqWfjWaAdzNxHWswT1OM0L6bXqWu5RvfrZxwaXU7GgjX9VoiilG8KtdDOpIw4Pijh5bhwEDPIxYd1OPe4RsfXEW79vAG1AgRR3Xtfak3rk7DK0wKAoWpVo3sFLnc9BX2yRCACuBjyWrip45E8tabR4WvMab8Zb4%2Bbb%2ByZ098UHrfQjRVtLNcm0uUb%2FpuCAQIXCVJGkGX1gIpZLui2oUmr6Y9X%2Ft58TuUV9RWlCYyskenqlyLqMKT%2FiVeELKUbBm0J%2B3meUKDxOCNV8wR7iWGXovHx20WFtZeuXZOjLMyAi8dL4wsm3J%2FuBL92L%2FVzp5Qkp7j9fmL%2FdZzMBxk%2FjrmcET%2Fpx7suF%2FpChE0f%2B%2B3%2BV1BRSdxo1N%2FDMNzTC13%2FLCBjqkASz5rwoN1wPBP8N62EbHK4YAnhJu1R6z%2Ft%2BVi22uOHWccw6cTJzopkwtQXiBQrmKoga0Hl%2BTxEfAHXPGhn2KxK2l8FMRuweTxT1UHmn9AooG6G0Kh%2F%2Fy%2B08kZdieg6dv9k75lQ9CjIwGjFU7%2FTI4ImoRDQWdTzkPtJe9xAKaYcjU2qMY2t3f4gyFOUTZrtYh3HanM7z6RqABYCmlwCk1B1Dh6XQE&X-Amz-Signature=ebcc7c485fa1e514a7ce4b490a759de3c599628d9fa12d71f4943a138fbe153a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2XXBLQ5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCp6wQGCGkKxCphY9vB3WAsBk%2FgwaqiREYUMg4yoZVo6AIhAK03YeS0YSArAXE7K0OA0j858UurSyqedNnEZRbVtXtnKv8DCFMQABoMNjM3NDIzMTgzODA1IgyQEnJwS62HPp7KEd4q3AMVUqUkYuqYSVcw1%2F%2FCIj4omgbW5V4AYmjKvqNvqTCv3XnmAcx9mjHXZ%2BKPwKn9ClLJRAubpqRf7uDF1awLYI4GuswnqpXCf%2BBCiZr7ihDqfV5Q9%2FP16vHKvlUTqWb4c3v0gGpGHvkI1c1dh831Q9Q64Q84LKo2AVLoSnnv3GIMd5vOQKmUmKlwowwZjEoHZpLOhnml%2FlgNzDTl4OdEI7v6YRrhWXAqNu8OkF%2BUy0Y7jRRjPAmhHlItrfQ2wbxW09a%2Bg%2BqWfjWaAdzNxHWswT1OM0L6bXqWu5RvfrZxwaXU7GgjX9VoiilG8KtdDOpIw4Pijh5bhwEDPIxYd1OPe4RsfXEW79vAG1AgRR3Xtfak3rk7DK0wKAoWpVo3sFLnc9BX2yRCACuBjyWrip45E8tabR4WvMab8Zb4%2Bbb%2ByZ098UHrfQjRVtLNcm0uUb%2FpuCAQIXCVJGkGX1gIpZLui2oUmr6Y9X%2Ft58TuUV9RWlCYyskenqlyLqMKT%2FiVeELKUbBm0J%2B3meUKDxOCNV8wR7iWGXovHx20WFtZeuXZOjLMyAi8dL4wsm3J%2FuBL92L%2FVzp5Qkp7j9fmL%2FdZzMBxk%2FjrmcET%2Fpx7suF%2FpChE0f%2B%2B3%2BV1BRSdxo1N%2FDMNzTC13%2FLCBjqkASz5rwoN1wPBP8N62EbHK4YAnhJu1R6z%2Ft%2BVi22uOHWccw6cTJzopkwtQXiBQrmKoga0Hl%2BTxEfAHXPGhn2KxK2l8FMRuweTxT1UHmn9AooG6G0Kh%2F%2Fy%2B08kZdieg6dv9k75lQ9CjIwGjFU7%2FTI4ImoRDQWdTzkPtJe9xAKaYcjU2qMY2t3f4gyFOUTZrtYh3HanM7z6RqABYCmlwCk1B1Dh6XQE&X-Amz-Signature=51a828c7072381e7c2e0db2c459be369c11641e8fd27d96c7c7fd4590abff072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2XXBLQ5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCp6wQGCGkKxCphY9vB3WAsBk%2FgwaqiREYUMg4yoZVo6AIhAK03YeS0YSArAXE7K0OA0j858UurSyqedNnEZRbVtXtnKv8DCFMQABoMNjM3NDIzMTgzODA1IgyQEnJwS62HPp7KEd4q3AMVUqUkYuqYSVcw1%2F%2FCIj4omgbW5V4AYmjKvqNvqTCv3XnmAcx9mjHXZ%2BKPwKn9ClLJRAubpqRf7uDF1awLYI4GuswnqpXCf%2BBCiZr7ihDqfV5Q9%2FP16vHKvlUTqWb4c3v0gGpGHvkI1c1dh831Q9Q64Q84LKo2AVLoSnnv3GIMd5vOQKmUmKlwowwZjEoHZpLOhnml%2FlgNzDTl4OdEI7v6YRrhWXAqNu8OkF%2BUy0Y7jRRjPAmhHlItrfQ2wbxW09a%2Bg%2BqWfjWaAdzNxHWswT1OM0L6bXqWu5RvfrZxwaXU7GgjX9VoiilG8KtdDOpIw4Pijh5bhwEDPIxYd1OPe4RsfXEW79vAG1AgRR3Xtfak3rk7DK0wKAoWpVo3sFLnc9BX2yRCACuBjyWrip45E8tabR4WvMab8Zb4%2Bbb%2ByZ098UHrfQjRVtLNcm0uUb%2FpuCAQIXCVJGkGX1gIpZLui2oUmr6Y9X%2Ft58TuUV9RWlCYyskenqlyLqMKT%2FiVeELKUbBm0J%2B3meUKDxOCNV8wR7iWGXovHx20WFtZeuXZOjLMyAi8dL4wsm3J%2FuBL92L%2FVzp5Qkp7j9fmL%2FdZzMBxk%2FjrmcET%2Fpx7suF%2FpChE0f%2B%2B3%2BV1BRSdxo1N%2FDMNzTC13%2FLCBjqkASz5rwoN1wPBP8N62EbHK4YAnhJu1R6z%2Ft%2BVi22uOHWccw6cTJzopkwtQXiBQrmKoga0Hl%2BTxEfAHXPGhn2KxK2l8FMRuweTxT1UHmn9AooG6G0Kh%2F%2Fy%2B08kZdieg6dv9k75lQ9CjIwGjFU7%2FTI4ImoRDQWdTzkPtJe9xAKaYcjU2qMY2t3f4gyFOUTZrtYh3HanM7z6RqABYCmlwCk1B1Dh6XQE&X-Amz-Signature=7df5b19d61c635793f62ff5d37406b610fe131db43a8e344778fc864fb8647c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2XXBLQ5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCp6wQGCGkKxCphY9vB3WAsBk%2FgwaqiREYUMg4yoZVo6AIhAK03YeS0YSArAXE7K0OA0j858UurSyqedNnEZRbVtXtnKv8DCFMQABoMNjM3NDIzMTgzODA1IgyQEnJwS62HPp7KEd4q3AMVUqUkYuqYSVcw1%2F%2FCIj4omgbW5V4AYmjKvqNvqTCv3XnmAcx9mjHXZ%2BKPwKn9ClLJRAubpqRf7uDF1awLYI4GuswnqpXCf%2BBCiZr7ihDqfV5Q9%2FP16vHKvlUTqWb4c3v0gGpGHvkI1c1dh831Q9Q64Q84LKo2AVLoSnnv3GIMd5vOQKmUmKlwowwZjEoHZpLOhnml%2FlgNzDTl4OdEI7v6YRrhWXAqNu8OkF%2BUy0Y7jRRjPAmhHlItrfQ2wbxW09a%2Bg%2BqWfjWaAdzNxHWswT1OM0L6bXqWu5RvfrZxwaXU7GgjX9VoiilG8KtdDOpIw4Pijh5bhwEDPIxYd1OPe4RsfXEW79vAG1AgRR3Xtfak3rk7DK0wKAoWpVo3sFLnc9BX2yRCACuBjyWrip45E8tabR4WvMab8Zb4%2Bbb%2ByZ098UHrfQjRVtLNcm0uUb%2FpuCAQIXCVJGkGX1gIpZLui2oUmr6Y9X%2Ft58TuUV9RWlCYyskenqlyLqMKT%2FiVeELKUbBm0J%2B3meUKDxOCNV8wR7iWGXovHx20WFtZeuXZOjLMyAi8dL4wsm3J%2FuBL92L%2FVzp5Qkp7j9fmL%2FdZzMBxk%2FjrmcET%2Fpx7suF%2FpChE0f%2B%2B3%2BV1BRSdxo1N%2FDMNzTC13%2FLCBjqkASz5rwoN1wPBP8N62EbHK4YAnhJu1R6z%2Ft%2BVi22uOHWccw6cTJzopkwtQXiBQrmKoga0Hl%2BTxEfAHXPGhn2KxK2l8FMRuweTxT1UHmn9AooG6G0Kh%2F%2Fy%2B08kZdieg6dv9k75lQ9CjIwGjFU7%2FTI4ImoRDQWdTzkPtJe9xAKaYcjU2qMY2t3f4gyFOUTZrtYh3HanM7z6RqABYCmlwCk1B1Dh6XQE&X-Amz-Signature=77fe098800836e49586673176b6e0969bd4920824cfff33340c9b12b217ee43c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2XXBLQ5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCp6wQGCGkKxCphY9vB3WAsBk%2FgwaqiREYUMg4yoZVo6AIhAK03YeS0YSArAXE7K0OA0j858UurSyqedNnEZRbVtXtnKv8DCFMQABoMNjM3NDIzMTgzODA1IgyQEnJwS62HPp7KEd4q3AMVUqUkYuqYSVcw1%2F%2FCIj4omgbW5V4AYmjKvqNvqTCv3XnmAcx9mjHXZ%2BKPwKn9ClLJRAubpqRf7uDF1awLYI4GuswnqpXCf%2BBCiZr7ihDqfV5Q9%2FP16vHKvlUTqWb4c3v0gGpGHvkI1c1dh831Q9Q64Q84LKo2AVLoSnnv3GIMd5vOQKmUmKlwowwZjEoHZpLOhnml%2FlgNzDTl4OdEI7v6YRrhWXAqNu8OkF%2BUy0Y7jRRjPAmhHlItrfQ2wbxW09a%2Bg%2BqWfjWaAdzNxHWswT1OM0L6bXqWu5RvfrZxwaXU7GgjX9VoiilG8KtdDOpIw4Pijh5bhwEDPIxYd1OPe4RsfXEW79vAG1AgRR3Xtfak3rk7DK0wKAoWpVo3sFLnc9BX2yRCACuBjyWrip45E8tabR4WvMab8Zb4%2Bbb%2ByZ098UHrfQjRVtLNcm0uUb%2FpuCAQIXCVJGkGX1gIpZLui2oUmr6Y9X%2Ft58TuUV9RWlCYyskenqlyLqMKT%2FiVeELKUbBm0J%2B3meUKDxOCNV8wR7iWGXovHx20WFtZeuXZOjLMyAi8dL4wsm3J%2FuBL92L%2FVzp5Qkp7j9fmL%2FdZzMBxk%2FjrmcET%2Fpx7suF%2FpChE0f%2B%2B3%2BV1BRSdxo1N%2FDMNzTC13%2FLCBjqkASz5rwoN1wPBP8N62EbHK4YAnhJu1R6z%2Ft%2BVi22uOHWccw6cTJzopkwtQXiBQrmKoga0Hl%2BTxEfAHXPGhn2KxK2l8FMRuweTxT1UHmn9AooG6G0Kh%2F%2Fy%2B08kZdieg6dv9k75lQ9CjIwGjFU7%2FTI4ImoRDQWdTzkPtJe9xAKaYcjU2qMY2t3f4gyFOUTZrtYh3HanM7z6RqABYCmlwCk1B1Dh6XQE&X-Amz-Signature=2265ae0b15d205fd71b6b7485e2d2b48ed138fd33f2c5b86e651b823ddd44a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2XXBLQ5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCp6wQGCGkKxCphY9vB3WAsBk%2FgwaqiREYUMg4yoZVo6AIhAK03YeS0YSArAXE7K0OA0j858UurSyqedNnEZRbVtXtnKv8DCFMQABoMNjM3NDIzMTgzODA1IgyQEnJwS62HPp7KEd4q3AMVUqUkYuqYSVcw1%2F%2FCIj4omgbW5V4AYmjKvqNvqTCv3XnmAcx9mjHXZ%2BKPwKn9ClLJRAubpqRf7uDF1awLYI4GuswnqpXCf%2BBCiZr7ihDqfV5Q9%2FP16vHKvlUTqWb4c3v0gGpGHvkI1c1dh831Q9Q64Q84LKo2AVLoSnnv3GIMd5vOQKmUmKlwowwZjEoHZpLOhnml%2FlgNzDTl4OdEI7v6YRrhWXAqNu8OkF%2BUy0Y7jRRjPAmhHlItrfQ2wbxW09a%2Bg%2BqWfjWaAdzNxHWswT1OM0L6bXqWu5RvfrZxwaXU7GgjX9VoiilG8KtdDOpIw4Pijh5bhwEDPIxYd1OPe4RsfXEW79vAG1AgRR3Xtfak3rk7DK0wKAoWpVo3sFLnc9BX2yRCACuBjyWrip45E8tabR4WvMab8Zb4%2Bbb%2ByZ098UHrfQjRVtLNcm0uUb%2FpuCAQIXCVJGkGX1gIpZLui2oUmr6Y9X%2Ft58TuUV9RWlCYyskenqlyLqMKT%2FiVeELKUbBm0J%2B3meUKDxOCNV8wR7iWGXovHx20WFtZeuXZOjLMyAi8dL4wsm3J%2FuBL92L%2FVzp5Qkp7j9fmL%2FdZzMBxk%2FjrmcET%2Fpx7suF%2FpChE0f%2B%2B3%2BV1BRSdxo1N%2FDMNzTC13%2FLCBjqkASz5rwoN1wPBP8N62EbHK4YAnhJu1R6z%2Ft%2BVi22uOHWccw6cTJzopkwtQXiBQrmKoga0Hl%2BTxEfAHXPGhn2KxK2l8FMRuweTxT1UHmn9AooG6G0Kh%2F%2Fy%2B08kZdieg6dv9k75lQ9CjIwGjFU7%2FTI4ImoRDQWdTzkPtJe9xAKaYcjU2qMY2t3f4gyFOUTZrtYh3HanM7z6RqABYCmlwCk1B1Dh6XQE&X-Amz-Signature=08b724e3c792d42a24f9de80d9cbeeb483186ef3461660fe8c5b33b0644dda45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2XXBLQ5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCp6wQGCGkKxCphY9vB3WAsBk%2FgwaqiREYUMg4yoZVo6AIhAK03YeS0YSArAXE7K0OA0j858UurSyqedNnEZRbVtXtnKv8DCFMQABoMNjM3NDIzMTgzODA1IgyQEnJwS62HPp7KEd4q3AMVUqUkYuqYSVcw1%2F%2FCIj4omgbW5V4AYmjKvqNvqTCv3XnmAcx9mjHXZ%2BKPwKn9ClLJRAubpqRf7uDF1awLYI4GuswnqpXCf%2BBCiZr7ihDqfV5Q9%2FP16vHKvlUTqWb4c3v0gGpGHvkI1c1dh831Q9Q64Q84LKo2AVLoSnnv3GIMd5vOQKmUmKlwowwZjEoHZpLOhnml%2FlgNzDTl4OdEI7v6YRrhWXAqNu8OkF%2BUy0Y7jRRjPAmhHlItrfQ2wbxW09a%2Bg%2BqWfjWaAdzNxHWswT1OM0L6bXqWu5RvfrZxwaXU7GgjX9VoiilG8KtdDOpIw4Pijh5bhwEDPIxYd1OPe4RsfXEW79vAG1AgRR3Xtfak3rk7DK0wKAoWpVo3sFLnc9BX2yRCACuBjyWrip45E8tabR4WvMab8Zb4%2Bbb%2ByZ098UHrfQjRVtLNcm0uUb%2FpuCAQIXCVJGkGX1gIpZLui2oUmr6Y9X%2Ft58TuUV9RWlCYyskenqlyLqMKT%2FiVeELKUbBm0J%2B3meUKDxOCNV8wR7iWGXovHx20WFtZeuXZOjLMyAi8dL4wsm3J%2FuBL92L%2FVzp5Qkp7j9fmL%2FdZzMBxk%2FjrmcET%2Fpx7suF%2FpChE0f%2B%2B3%2BV1BRSdxo1N%2FDMNzTC13%2FLCBjqkASz5rwoN1wPBP8N62EbHK4YAnhJu1R6z%2Ft%2BVi22uOHWccw6cTJzopkwtQXiBQrmKoga0Hl%2BTxEfAHXPGhn2KxK2l8FMRuweTxT1UHmn9AooG6G0Kh%2F%2Fy%2B08kZdieg6dv9k75lQ9CjIwGjFU7%2FTI4ImoRDQWdTzkPtJe9xAKaYcjU2qMY2t3f4gyFOUTZrtYh3HanM7z6RqABYCmlwCk1B1Dh6XQE&X-Amz-Signature=14e368e6a900e1f842d6ebd6e8d0ac5cc5b05179fe1b5d6f49bf47e0512dac2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
