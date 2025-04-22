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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEFEYNR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFe7naWgKL3daHNiopQuQa8x6BlzKilwe5ah5ZAiMFdOAiA%2FWF7wqJBFGuTNE4%2B05TpU0Ucjh34%2FI%2Fbn%2FxFxngBeviqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzpwPf1l2HkDYWGEUKtwDLqPhAO8MZsbfedrWJtS9VaVP1RZ4vRgGwHUff8AYAFM%2FX3nzwmv9JZkv5PHZ1IK3L2km641HuTxQ%2BwpslFsJ6oURzL%2B0uJpF%2FqOKmnxwzCBv4eDn29iePyGvZxqmD8azgYlvRtUVdxQd4QHTSjhhHdiC5NHF1cXwYr7a1VCjYVFknmr9jGcEvkBP1scuBqYbKO5BrUmLOXzlCv7Xqip6M3UVe4mDa7xdusaJXVl3GD08%2BexE2NEA9HpZE9QM4M%2FpvztgEbMlq3Ekn81oK9DhgEidv3qnQqPOysCvjx7K%2FEM1IO%2FRS7s19zEW5bJHb9FO5Dk8oVNEgPbJk79xD1lzuuC8EZuqlkXkCEwDYkhSH6k6DvLSmAmvGwXMPNXjjssJzKg6T3%2F05sCia8z9dWhSLduCmaccLEqAcJCLWNpSSIWrsCYqCJqSyXEGx3ocmORIWKK0BsjS3Su48b5WnRr73ZTVdw%2F%2FD%2BZEIJIPisv3r2WdfhQ5sJjMr75DE%2FwiDWJ6vyvFCtmJhOHEkIKKaVuoyJ5L8FpON3zYuu3WcCTii9EyAeqiYkPIp3yIH%2FbNM%2F8%2BjkURxc5qYoMPEKEgKG4V8uNeYVCezhXpRjRM3meZD%2FGcVSco3fq%2BLkCfdtUw8qqewAY6pgFmX9dFbMESHRaGaqs9IcB7vAT2oBOVz%2B9DYbnJ26BO8YBM6EwyJ5IWe0HXn4G8QyRCoDJPc4isBTfzmb6xZujvYcqQnLG%2FBqoqJCmLMaYG4v%2FPPHqepjhOgL7UlxTRPqm6zvNminlX7qyiK1%2BQRiMnN949Lx5HtWARvBXe5VsAWWR97g9YgPKG6kqgTQiLtw9E9Bv9IIjRov%2Bqi57Iz9GlwlWYTFsC&X-Amz-Signature=228c7693e2ad0b8aa5aa2d7cc7cd5f6de5c0c9681b54a7464c196dbefb0426d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEFEYNR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFe7naWgKL3daHNiopQuQa8x6BlzKilwe5ah5ZAiMFdOAiA%2FWF7wqJBFGuTNE4%2B05TpU0Ucjh34%2FI%2Fbn%2FxFxngBeviqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzpwPf1l2HkDYWGEUKtwDLqPhAO8MZsbfedrWJtS9VaVP1RZ4vRgGwHUff8AYAFM%2FX3nzwmv9JZkv5PHZ1IK3L2km641HuTxQ%2BwpslFsJ6oURzL%2B0uJpF%2FqOKmnxwzCBv4eDn29iePyGvZxqmD8azgYlvRtUVdxQd4QHTSjhhHdiC5NHF1cXwYr7a1VCjYVFknmr9jGcEvkBP1scuBqYbKO5BrUmLOXzlCv7Xqip6M3UVe4mDa7xdusaJXVl3GD08%2BexE2NEA9HpZE9QM4M%2FpvztgEbMlq3Ekn81oK9DhgEidv3qnQqPOysCvjx7K%2FEM1IO%2FRS7s19zEW5bJHb9FO5Dk8oVNEgPbJk79xD1lzuuC8EZuqlkXkCEwDYkhSH6k6DvLSmAmvGwXMPNXjjssJzKg6T3%2F05sCia8z9dWhSLduCmaccLEqAcJCLWNpSSIWrsCYqCJqSyXEGx3ocmORIWKK0BsjS3Su48b5WnRr73ZTVdw%2F%2FD%2BZEIJIPisv3r2WdfhQ5sJjMr75DE%2FwiDWJ6vyvFCtmJhOHEkIKKaVuoyJ5L8FpON3zYuu3WcCTii9EyAeqiYkPIp3yIH%2FbNM%2F8%2BjkURxc5qYoMPEKEgKG4V8uNeYVCezhXpRjRM3meZD%2FGcVSco3fq%2BLkCfdtUw8qqewAY6pgFmX9dFbMESHRaGaqs9IcB7vAT2oBOVz%2B9DYbnJ26BO8YBM6EwyJ5IWe0HXn4G8QyRCoDJPc4isBTfzmb6xZujvYcqQnLG%2FBqoqJCmLMaYG4v%2FPPHqepjhOgL7UlxTRPqm6zvNminlX7qyiK1%2BQRiMnN949Lx5HtWARvBXe5VsAWWR97g9YgPKG6kqgTQiLtw9E9Bv9IIjRov%2Bqi57Iz9GlwlWYTFsC&X-Amz-Signature=e526ba94dae4077b0ce59b864e168450fb96893a101bf4eea56d6d76aaf5ddea&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEFEYNR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFe7naWgKL3daHNiopQuQa8x6BlzKilwe5ah5ZAiMFdOAiA%2FWF7wqJBFGuTNE4%2B05TpU0Ucjh34%2FI%2Fbn%2FxFxngBeviqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzpwPf1l2HkDYWGEUKtwDLqPhAO8MZsbfedrWJtS9VaVP1RZ4vRgGwHUff8AYAFM%2FX3nzwmv9JZkv5PHZ1IK3L2km641HuTxQ%2BwpslFsJ6oURzL%2B0uJpF%2FqOKmnxwzCBv4eDn29iePyGvZxqmD8azgYlvRtUVdxQd4QHTSjhhHdiC5NHF1cXwYr7a1VCjYVFknmr9jGcEvkBP1scuBqYbKO5BrUmLOXzlCv7Xqip6M3UVe4mDa7xdusaJXVl3GD08%2BexE2NEA9HpZE9QM4M%2FpvztgEbMlq3Ekn81oK9DhgEidv3qnQqPOysCvjx7K%2FEM1IO%2FRS7s19zEW5bJHb9FO5Dk8oVNEgPbJk79xD1lzuuC8EZuqlkXkCEwDYkhSH6k6DvLSmAmvGwXMPNXjjssJzKg6T3%2F05sCia8z9dWhSLduCmaccLEqAcJCLWNpSSIWrsCYqCJqSyXEGx3ocmORIWKK0BsjS3Su48b5WnRr73ZTVdw%2F%2FD%2BZEIJIPisv3r2WdfhQ5sJjMr75DE%2FwiDWJ6vyvFCtmJhOHEkIKKaVuoyJ5L8FpON3zYuu3WcCTii9EyAeqiYkPIp3yIH%2FbNM%2F8%2BjkURxc5qYoMPEKEgKG4V8uNeYVCezhXpRjRM3meZD%2FGcVSco3fq%2BLkCfdtUw8qqewAY6pgFmX9dFbMESHRaGaqs9IcB7vAT2oBOVz%2B9DYbnJ26BO8YBM6EwyJ5IWe0HXn4G8QyRCoDJPc4isBTfzmb6xZujvYcqQnLG%2FBqoqJCmLMaYG4v%2FPPHqepjhOgL7UlxTRPqm6zvNminlX7qyiK1%2BQRiMnN949Lx5HtWARvBXe5VsAWWR97g9YgPKG6kqgTQiLtw9E9Bv9IIjRov%2Bqi57Iz9GlwlWYTFsC&X-Amz-Signature=2f680a191b1fa4e073a2686a745ca8f342a67a18562d532e5b4442e3811e90c1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEFEYNR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFe7naWgKL3daHNiopQuQa8x6BlzKilwe5ah5ZAiMFdOAiA%2FWF7wqJBFGuTNE4%2B05TpU0Ucjh34%2FI%2Fbn%2FxFxngBeviqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzpwPf1l2HkDYWGEUKtwDLqPhAO8MZsbfedrWJtS9VaVP1RZ4vRgGwHUff8AYAFM%2FX3nzwmv9JZkv5PHZ1IK3L2km641HuTxQ%2BwpslFsJ6oURzL%2B0uJpF%2FqOKmnxwzCBv4eDn29iePyGvZxqmD8azgYlvRtUVdxQd4QHTSjhhHdiC5NHF1cXwYr7a1VCjYVFknmr9jGcEvkBP1scuBqYbKO5BrUmLOXzlCv7Xqip6M3UVe4mDa7xdusaJXVl3GD08%2BexE2NEA9HpZE9QM4M%2FpvztgEbMlq3Ekn81oK9DhgEidv3qnQqPOysCvjx7K%2FEM1IO%2FRS7s19zEW5bJHb9FO5Dk8oVNEgPbJk79xD1lzuuC8EZuqlkXkCEwDYkhSH6k6DvLSmAmvGwXMPNXjjssJzKg6T3%2F05sCia8z9dWhSLduCmaccLEqAcJCLWNpSSIWrsCYqCJqSyXEGx3ocmORIWKK0BsjS3Su48b5WnRr73ZTVdw%2F%2FD%2BZEIJIPisv3r2WdfhQ5sJjMr75DE%2FwiDWJ6vyvFCtmJhOHEkIKKaVuoyJ5L8FpON3zYuu3WcCTii9EyAeqiYkPIp3yIH%2FbNM%2F8%2BjkURxc5qYoMPEKEgKG4V8uNeYVCezhXpRjRM3meZD%2FGcVSco3fq%2BLkCfdtUw8qqewAY6pgFmX9dFbMESHRaGaqs9IcB7vAT2oBOVz%2B9DYbnJ26BO8YBM6EwyJ5IWe0HXn4G8QyRCoDJPc4isBTfzmb6xZujvYcqQnLG%2FBqoqJCmLMaYG4v%2FPPHqepjhOgL7UlxTRPqm6zvNminlX7qyiK1%2BQRiMnN949Lx5HtWARvBXe5VsAWWR97g9YgPKG6kqgTQiLtw9E9Bv9IIjRov%2Bqi57Iz9GlwlWYTFsC&X-Amz-Signature=49491dac78d8b6a9670c46d1013f2a635c98d7b903dca098ac8fe37710071c50&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEFEYNR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFe7naWgKL3daHNiopQuQa8x6BlzKilwe5ah5ZAiMFdOAiA%2FWF7wqJBFGuTNE4%2B05TpU0Ucjh34%2FI%2Fbn%2FxFxngBeviqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzpwPf1l2HkDYWGEUKtwDLqPhAO8MZsbfedrWJtS9VaVP1RZ4vRgGwHUff8AYAFM%2FX3nzwmv9JZkv5PHZ1IK3L2km641HuTxQ%2BwpslFsJ6oURzL%2B0uJpF%2FqOKmnxwzCBv4eDn29iePyGvZxqmD8azgYlvRtUVdxQd4QHTSjhhHdiC5NHF1cXwYr7a1VCjYVFknmr9jGcEvkBP1scuBqYbKO5BrUmLOXzlCv7Xqip6M3UVe4mDa7xdusaJXVl3GD08%2BexE2NEA9HpZE9QM4M%2FpvztgEbMlq3Ekn81oK9DhgEidv3qnQqPOysCvjx7K%2FEM1IO%2FRS7s19zEW5bJHb9FO5Dk8oVNEgPbJk79xD1lzuuC8EZuqlkXkCEwDYkhSH6k6DvLSmAmvGwXMPNXjjssJzKg6T3%2F05sCia8z9dWhSLduCmaccLEqAcJCLWNpSSIWrsCYqCJqSyXEGx3ocmORIWKK0BsjS3Su48b5WnRr73ZTVdw%2F%2FD%2BZEIJIPisv3r2WdfhQ5sJjMr75DE%2FwiDWJ6vyvFCtmJhOHEkIKKaVuoyJ5L8FpON3zYuu3WcCTii9EyAeqiYkPIp3yIH%2FbNM%2F8%2BjkURxc5qYoMPEKEgKG4V8uNeYVCezhXpRjRM3meZD%2FGcVSco3fq%2BLkCfdtUw8qqewAY6pgFmX9dFbMESHRaGaqs9IcB7vAT2oBOVz%2B9DYbnJ26BO8YBM6EwyJ5IWe0HXn4G8QyRCoDJPc4isBTfzmb6xZujvYcqQnLG%2FBqoqJCmLMaYG4v%2FPPHqepjhOgL7UlxTRPqm6zvNminlX7qyiK1%2BQRiMnN949Lx5HtWARvBXe5VsAWWR97g9YgPKG6kqgTQiLtw9E9Bv9IIjRov%2Bqi57Iz9GlwlWYTFsC&X-Amz-Signature=077aa3e6754b67a6f5fa80acb7d74d54681ed77a1b1076741b5ea48c8e0103fb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEFEYNR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFe7naWgKL3daHNiopQuQa8x6BlzKilwe5ah5ZAiMFdOAiA%2FWF7wqJBFGuTNE4%2B05TpU0Ucjh34%2FI%2Fbn%2FxFxngBeviqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzpwPf1l2HkDYWGEUKtwDLqPhAO8MZsbfedrWJtS9VaVP1RZ4vRgGwHUff8AYAFM%2FX3nzwmv9JZkv5PHZ1IK3L2km641HuTxQ%2BwpslFsJ6oURzL%2B0uJpF%2FqOKmnxwzCBv4eDn29iePyGvZxqmD8azgYlvRtUVdxQd4QHTSjhhHdiC5NHF1cXwYr7a1VCjYVFknmr9jGcEvkBP1scuBqYbKO5BrUmLOXzlCv7Xqip6M3UVe4mDa7xdusaJXVl3GD08%2BexE2NEA9HpZE9QM4M%2FpvztgEbMlq3Ekn81oK9DhgEidv3qnQqPOysCvjx7K%2FEM1IO%2FRS7s19zEW5bJHb9FO5Dk8oVNEgPbJk79xD1lzuuC8EZuqlkXkCEwDYkhSH6k6DvLSmAmvGwXMPNXjjssJzKg6T3%2F05sCia8z9dWhSLduCmaccLEqAcJCLWNpSSIWrsCYqCJqSyXEGx3ocmORIWKK0BsjS3Su48b5WnRr73ZTVdw%2F%2FD%2BZEIJIPisv3r2WdfhQ5sJjMr75DE%2FwiDWJ6vyvFCtmJhOHEkIKKaVuoyJ5L8FpON3zYuu3WcCTii9EyAeqiYkPIp3yIH%2FbNM%2F8%2BjkURxc5qYoMPEKEgKG4V8uNeYVCezhXpRjRM3meZD%2FGcVSco3fq%2BLkCfdtUw8qqewAY6pgFmX9dFbMESHRaGaqs9IcB7vAT2oBOVz%2B9DYbnJ26BO8YBM6EwyJ5IWe0HXn4G8QyRCoDJPc4isBTfzmb6xZujvYcqQnLG%2FBqoqJCmLMaYG4v%2FPPHqepjhOgL7UlxTRPqm6zvNminlX7qyiK1%2BQRiMnN949Lx5HtWARvBXe5VsAWWR97g9YgPKG6kqgTQiLtw9E9Bv9IIjRov%2Bqi57Iz9GlwlWYTFsC&X-Amz-Signature=87c5736b2de9fa48d4a20b2cd5da8f94c45d5f732e210eb5272c5bec13c9c65b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEFEYNR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFe7naWgKL3daHNiopQuQa8x6BlzKilwe5ah5ZAiMFdOAiA%2FWF7wqJBFGuTNE4%2B05TpU0Ucjh34%2FI%2Fbn%2FxFxngBeviqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzpwPf1l2HkDYWGEUKtwDLqPhAO8MZsbfedrWJtS9VaVP1RZ4vRgGwHUff8AYAFM%2FX3nzwmv9JZkv5PHZ1IK3L2km641HuTxQ%2BwpslFsJ6oURzL%2B0uJpF%2FqOKmnxwzCBv4eDn29iePyGvZxqmD8azgYlvRtUVdxQd4QHTSjhhHdiC5NHF1cXwYr7a1VCjYVFknmr9jGcEvkBP1scuBqYbKO5BrUmLOXzlCv7Xqip6M3UVe4mDa7xdusaJXVl3GD08%2BexE2NEA9HpZE9QM4M%2FpvztgEbMlq3Ekn81oK9DhgEidv3qnQqPOysCvjx7K%2FEM1IO%2FRS7s19zEW5bJHb9FO5Dk8oVNEgPbJk79xD1lzuuC8EZuqlkXkCEwDYkhSH6k6DvLSmAmvGwXMPNXjjssJzKg6T3%2F05sCia8z9dWhSLduCmaccLEqAcJCLWNpSSIWrsCYqCJqSyXEGx3ocmORIWKK0BsjS3Su48b5WnRr73ZTVdw%2F%2FD%2BZEIJIPisv3r2WdfhQ5sJjMr75DE%2FwiDWJ6vyvFCtmJhOHEkIKKaVuoyJ5L8FpON3zYuu3WcCTii9EyAeqiYkPIp3yIH%2FbNM%2F8%2BjkURxc5qYoMPEKEgKG4V8uNeYVCezhXpRjRM3meZD%2FGcVSco3fq%2BLkCfdtUw8qqewAY6pgFmX9dFbMESHRaGaqs9IcB7vAT2oBOVz%2B9DYbnJ26BO8YBM6EwyJ5IWe0HXn4G8QyRCoDJPc4isBTfzmb6xZujvYcqQnLG%2FBqoqJCmLMaYG4v%2FPPHqepjhOgL7UlxTRPqm6zvNminlX7qyiK1%2BQRiMnN949Lx5HtWARvBXe5VsAWWR97g9YgPKG6kqgTQiLtw9E9Bv9IIjRov%2Bqi57Iz9GlwlWYTFsC&X-Amz-Signature=a4e84d042e99b6dc4822ea0c41fe660faf9e2c58a7aa955e1b16b3c9fa82461c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
