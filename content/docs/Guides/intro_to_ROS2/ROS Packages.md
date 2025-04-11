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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623UTBNPB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCsGBM9wR1a4n1ip%2BqZEgrOOPAEHtTR57KgHuUtbaaywwIhAMTkFPQAiEVqR6wL0unMgPyL3590YXd38YHMQBpVQ2B4KogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRy6Facd9KSJNcGLMq3AO1ef1nGLL2mNi6BC7fm%2FOrTX%2B2KXlgkDV42xfogeTiKsXDYwhDcYMFhbYs6a5vxJvkkfeO8MoWyaF7TUlI44xaiRaFj%2BUf7Py17JWPuV%2BHe243yJI%2B2bwnHukGNjWVVK0mHizfBD0mo7X4WzEl6Uvog0wwD%2Bf8tAO%2FyEYSetJXsDzznyDH0KSsKRNJuE8D0Xj0C7iWlCwrgcPeeNu7va81HwrjZge1zjS0LjLQ9MWT9aiEf%2FSLxT9PESLnyc72vTHWpbuk10GD%2BeVsJKxpC8Oo2y%2BKNBtoIcqGPqB3utV%2FiF4XfJzWpDkV2Vk7eph%2FbRmBQvnT4IRBezJK8b2cY4YT9hclbhuShkaxOaMohu5kUuwLoeON%2FqnILGGwoN26OWpmlWYxPu%2ByUU2wEuSLZO5FxwHz%2BVu1cATmz0DciMe%2BnbWPy7HWNKjswCqOvFrPcPRbjxpiRi6%2FYm7XHZQUzPgtFzmgwpjF8vaZ%2BA4M8OjLx%2FGwSkTEa9Z9IswXgtsaTI5Hhkt2HSGliik7urY2IaJ0XHvBm9ZYVnGfcbMEdIIXu%2BLKxJYP%2FBwk0gi0%2F3XVLKOwdmaI473o0oZpI4%2BV47eHuV4OHOsG32A%2BKM1bZ4fo20B6YjzwtTmH7vfmYTDbyuO%2FBjqkAciXew8%2BTvhFduT%2BX%2FeHpIsLw5q34OJ8J6h44BWQMAkCJ4vSq5okTXa5YEfCXn1pN58WuedJDvx3%2Bkuquhxx3AyVHeiytYDYiEb32pZ0W0cigIGT8C8M1WxEqU9BWQETE9F5FwYYaXbLaybBsV9DSjJhmd%2FWozBj412vwDCH2pT98RCrIFSmbHbQRbC8pES%2FbnjahkybLV7O9URlI%2BqGJjZ%2BhO8U&X-Amz-Signature=5954f8728d55b047a9e0339228337eebd94c14a9dbd652c6a38a5b48d79d9c4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623UTBNPB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCsGBM9wR1a4n1ip%2BqZEgrOOPAEHtTR57KgHuUtbaaywwIhAMTkFPQAiEVqR6wL0unMgPyL3590YXd38YHMQBpVQ2B4KogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRy6Facd9KSJNcGLMq3AO1ef1nGLL2mNi6BC7fm%2FOrTX%2B2KXlgkDV42xfogeTiKsXDYwhDcYMFhbYs6a5vxJvkkfeO8MoWyaF7TUlI44xaiRaFj%2BUf7Py17JWPuV%2BHe243yJI%2B2bwnHukGNjWVVK0mHizfBD0mo7X4WzEl6Uvog0wwD%2Bf8tAO%2FyEYSetJXsDzznyDH0KSsKRNJuE8D0Xj0C7iWlCwrgcPeeNu7va81HwrjZge1zjS0LjLQ9MWT9aiEf%2FSLxT9PESLnyc72vTHWpbuk10GD%2BeVsJKxpC8Oo2y%2BKNBtoIcqGPqB3utV%2FiF4XfJzWpDkV2Vk7eph%2FbRmBQvnT4IRBezJK8b2cY4YT9hclbhuShkaxOaMohu5kUuwLoeON%2FqnILGGwoN26OWpmlWYxPu%2ByUU2wEuSLZO5FxwHz%2BVu1cATmz0DciMe%2BnbWPy7HWNKjswCqOvFrPcPRbjxpiRi6%2FYm7XHZQUzPgtFzmgwpjF8vaZ%2BA4M8OjLx%2FGwSkTEa9Z9IswXgtsaTI5Hhkt2HSGliik7urY2IaJ0XHvBm9ZYVnGfcbMEdIIXu%2BLKxJYP%2FBwk0gi0%2F3XVLKOwdmaI473o0oZpI4%2BV47eHuV4OHOsG32A%2BKM1bZ4fo20B6YjzwtTmH7vfmYTDbyuO%2FBjqkAciXew8%2BTvhFduT%2BX%2FeHpIsLw5q34OJ8J6h44BWQMAkCJ4vSq5okTXa5YEfCXn1pN58WuedJDvx3%2Bkuquhxx3AyVHeiytYDYiEb32pZ0W0cigIGT8C8M1WxEqU9BWQETE9F5FwYYaXbLaybBsV9DSjJhmd%2FWozBj412vwDCH2pT98RCrIFSmbHbQRbC8pES%2FbnjahkybLV7O9URlI%2BqGJjZ%2BhO8U&X-Amz-Signature=452c59d4e6b69198a66964c3d3fde59425bf62d7ce777986d0c59002183bf34b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623UTBNPB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCsGBM9wR1a4n1ip%2BqZEgrOOPAEHtTR57KgHuUtbaaywwIhAMTkFPQAiEVqR6wL0unMgPyL3590YXd38YHMQBpVQ2B4KogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRy6Facd9KSJNcGLMq3AO1ef1nGLL2mNi6BC7fm%2FOrTX%2B2KXlgkDV42xfogeTiKsXDYwhDcYMFhbYs6a5vxJvkkfeO8MoWyaF7TUlI44xaiRaFj%2BUf7Py17JWPuV%2BHe243yJI%2B2bwnHukGNjWVVK0mHizfBD0mo7X4WzEl6Uvog0wwD%2Bf8tAO%2FyEYSetJXsDzznyDH0KSsKRNJuE8D0Xj0C7iWlCwrgcPeeNu7va81HwrjZge1zjS0LjLQ9MWT9aiEf%2FSLxT9PESLnyc72vTHWpbuk10GD%2BeVsJKxpC8Oo2y%2BKNBtoIcqGPqB3utV%2FiF4XfJzWpDkV2Vk7eph%2FbRmBQvnT4IRBezJK8b2cY4YT9hclbhuShkaxOaMohu5kUuwLoeON%2FqnILGGwoN26OWpmlWYxPu%2ByUU2wEuSLZO5FxwHz%2BVu1cATmz0DciMe%2BnbWPy7HWNKjswCqOvFrPcPRbjxpiRi6%2FYm7XHZQUzPgtFzmgwpjF8vaZ%2BA4M8OjLx%2FGwSkTEa9Z9IswXgtsaTI5Hhkt2HSGliik7urY2IaJ0XHvBm9ZYVnGfcbMEdIIXu%2BLKxJYP%2FBwk0gi0%2F3XVLKOwdmaI473o0oZpI4%2BV47eHuV4OHOsG32A%2BKM1bZ4fo20B6YjzwtTmH7vfmYTDbyuO%2FBjqkAciXew8%2BTvhFduT%2BX%2FeHpIsLw5q34OJ8J6h44BWQMAkCJ4vSq5okTXa5YEfCXn1pN58WuedJDvx3%2Bkuquhxx3AyVHeiytYDYiEb32pZ0W0cigIGT8C8M1WxEqU9BWQETE9F5FwYYaXbLaybBsV9DSjJhmd%2FWozBj412vwDCH2pT98RCrIFSmbHbQRbC8pES%2FbnjahkybLV7O9URlI%2BqGJjZ%2BhO8U&X-Amz-Signature=79bbae8acea732ab7b89d983b8872ddc8fad12917e8a872fe5c6420055cf4b5a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623UTBNPB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCsGBM9wR1a4n1ip%2BqZEgrOOPAEHtTR57KgHuUtbaaywwIhAMTkFPQAiEVqR6wL0unMgPyL3590YXd38YHMQBpVQ2B4KogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRy6Facd9KSJNcGLMq3AO1ef1nGLL2mNi6BC7fm%2FOrTX%2B2KXlgkDV42xfogeTiKsXDYwhDcYMFhbYs6a5vxJvkkfeO8MoWyaF7TUlI44xaiRaFj%2BUf7Py17JWPuV%2BHe243yJI%2B2bwnHukGNjWVVK0mHizfBD0mo7X4WzEl6Uvog0wwD%2Bf8tAO%2FyEYSetJXsDzznyDH0KSsKRNJuE8D0Xj0C7iWlCwrgcPeeNu7va81HwrjZge1zjS0LjLQ9MWT9aiEf%2FSLxT9PESLnyc72vTHWpbuk10GD%2BeVsJKxpC8Oo2y%2BKNBtoIcqGPqB3utV%2FiF4XfJzWpDkV2Vk7eph%2FbRmBQvnT4IRBezJK8b2cY4YT9hclbhuShkaxOaMohu5kUuwLoeON%2FqnILGGwoN26OWpmlWYxPu%2ByUU2wEuSLZO5FxwHz%2BVu1cATmz0DciMe%2BnbWPy7HWNKjswCqOvFrPcPRbjxpiRi6%2FYm7XHZQUzPgtFzmgwpjF8vaZ%2BA4M8OjLx%2FGwSkTEa9Z9IswXgtsaTI5Hhkt2HSGliik7urY2IaJ0XHvBm9ZYVnGfcbMEdIIXu%2BLKxJYP%2FBwk0gi0%2F3XVLKOwdmaI473o0oZpI4%2BV47eHuV4OHOsG32A%2BKM1bZ4fo20B6YjzwtTmH7vfmYTDbyuO%2FBjqkAciXew8%2BTvhFduT%2BX%2FeHpIsLw5q34OJ8J6h44BWQMAkCJ4vSq5okTXa5YEfCXn1pN58WuedJDvx3%2Bkuquhxx3AyVHeiytYDYiEb32pZ0W0cigIGT8C8M1WxEqU9BWQETE9F5FwYYaXbLaybBsV9DSjJhmd%2FWozBj412vwDCH2pT98RCrIFSmbHbQRbC8pES%2FbnjahkybLV7O9URlI%2BqGJjZ%2BhO8U&X-Amz-Signature=08525f32c0522b3d0f1dbd31278b58399389a5ae33d7344ccd0cc4135829a616&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623UTBNPB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCsGBM9wR1a4n1ip%2BqZEgrOOPAEHtTR57KgHuUtbaaywwIhAMTkFPQAiEVqR6wL0unMgPyL3590YXd38YHMQBpVQ2B4KogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRy6Facd9KSJNcGLMq3AO1ef1nGLL2mNi6BC7fm%2FOrTX%2B2KXlgkDV42xfogeTiKsXDYwhDcYMFhbYs6a5vxJvkkfeO8MoWyaF7TUlI44xaiRaFj%2BUf7Py17JWPuV%2BHe243yJI%2B2bwnHukGNjWVVK0mHizfBD0mo7X4WzEl6Uvog0wwD%2Bf8tAO%2FyEYSetJXsDzznyDH0KSsKRNJuE8D0Xj0C7iWlCwrgcPeeNu7va81HwrjZge1zjS0LjLQ9MWT9aiEf%2FSLxT9PESLnyc72vTHWpbuk10GD%2BeVsJKxpC8Oo2y%2BKNBtoIcqGPqB3utV%2FiF4XfJzWpDkV2Vk7eph%2FbRmBQvnT4IRBezJK8b2cY4YT9hclbhuShkaxOaMohu5kUuwLoeON%2FqnILGGwoN26OWpmlWYxPu%2ByUU2wEuSLZO5FxwHz%2BVu1cATmz0DciMe%2BnbWPy7HWNKjswCqOvFrPcPRbjxpiRi6%2FYm7XHZQUzPgtFzmgwpjF8vaZ%2BA4M8OjLx%2FGwSkTEa9Z9IswXgtsaTI5Hhkt2HSGliik7urY2IaJ0XHvBm9ZYVnGfcbMEdIIXu%2BLKxJYP%2FBwk0gi0%2F3XVLKOwdmaI473o0oZpI4%2BV47eHuV4OHOsG32A%2BKM1bZ4fo20B6YjzwtTmH7vfmYTDbyuO%2FBjqkAciXew8%2BTvhFduT%2BX%2FeHpIsLw5q34OJ8J6h44BWQMAkCJ4vSq5okTXa5YEfCXn1pN58WuedJDvx3%2Bkuquhxx3AyVHeiytYDYiEb32pZ0W0cigIGT8C8M1WxEqU9BWQETE9F5FwYYaXbLaybBsV9DSjJhmd%2FWozBj412vwDCH2pT98RCrIFSmbHbQRbC8pES%2FbnjahkybLV7O9URlI%2BqGJjZ%2BhO8U&X-Amz-Signature=a392f669d93ae1650220d4b933c11566a1ac397d14fb6437b2387c028499b333&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623UTBNPB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCsGBM9wR1a4n1ip%2BqZEgrOOPAEHtTR57KgHuUtbaaywwIhAMTkFPQAiEVqR6wL0unMgPyL3590YXd38YHMQBpVQ2B4KogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRy6Facd9KSJNcGLMq3AO1ef1nGLL2mNi6BC7fm%2FOrTX%2B2KXlgkDV42xfogeTiKsXDYwhDcYMFhbYs6a5vxJvkkfeO8MoWyaF7TUlI44xaiRaFj%2BUf7Py17JWPuV%2BHe243yJI%2B2bwnHukGNjWVVK0mHizfBD0mo7X4WzEl6Uvog0wwD%2Bf8tAO%2FyEYSetJXsDzznyDH0KSsKRNJuE8D0Xj0C7iWlCwrgcPeeNu7va81HwrjZge1zjS0LjLQ9MWT9aiEf%2FSLxT9PESLnyc72vTHWpbuk10GD%2BeVsJKxpC8Oo2y%2BKNBtoIcqGPqB3utV%2FiF4XfJzWpDkV2Vk7eph%2FbRmBQvnT4IRBezJK8b2cY4YT9hclbhuShkaxOaMohu5kUuwLoeON%2FqnILGGwoN26OWpmlWYxPu%2ByUU2wEuSLZO5FxwHz%2BVu1cATmz0DciMe%2BnbWPy7HWNKjswCqOvFrPcPRbjxpiRi6%2FYm7XHZQUzPgtFzmgwpjF8vaZ%2BA4M8OjLx%2FGwSkTEa9Z9IswXgtsaTI5Hhkt2HSGliik7urY2IaJ0XHvBm9ZYVnGfcbMEdIIXu%2BLKxJYP%2FBwk0gi0%2F3XVLKOwdmaI473o0oZpI4%2BV47eHuV4OHOsG32A%2BKM1bZ4fo20B6YjzwtTmH7vfmYTDbyuO%2FBjqkAciXew8%2BTvhFduT%2BX%2FeHpIsLw5q34OJ8J6h44BWQMAkCJ4vSq5okTXa5YEfCXn1pN58WuedJDvx3%2Bkuquhxx3AyVHeiytYDYiEb32pZ0W0cigIGT8C8M1WxEqU9BWQETE9F5FwYYaXbLaybBsV9DSjJhmd%2FWozBj412vwDCH2pT98RCrIFSmbHbQRbC8pES%2FbnjahkybLV7O9URlI%2BqGJjZ%2BhO8U&X-Amz-Signature=e0a3586aa6ea70beee16dc8ded56911f70f53e99723145d102c9db8cd0de0f45&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623UTBNPB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCsGBM9wR1a4n1ip%2BqZEgrOOPAEHtTR57KgHuUtbaaywwIhAMTkFPQAiEVqR6wL0unMgPyL3590YXd38YHMQBpVQ2B4KogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRy6Facd9KSJNcGLMq3AO1ef1nGLL2mNi6BC7fm%2FOrTX%2B2KXlgkDV42xfogeTiKsXDYwhDcYMFhbYs6a5vxJvkkfeO8MoWyaF7TUlI44xaiRaFj%2BUf7Py17JWPuV%2BHe243yJI%2B2bwnHukGNjWVVK0mHizfBD0mo7X4WzEl6Uvog0wwD%2Bf8tAO%2FyEYSetJXsDzznyDH0KSsKRNJuE8D0Xj0C7iWlCwrgcPeeNu7va81HwrjZge1zjS0LjLQ9MWT9aiEf%2FSLxT9PESLnyc72vTHWpbuk10GD%2BeVsJKxpC8Oo2y%2BKNBtoIcqGPqB3utV%2FiF4XfJzWpDkV2Vk7eph%2FbRmBQvnT4IRBezJK8b2cY4YT9hclbhuShkaxOaMohu5kUuwLoeON%2FqnILGGwoN26OWpmlWYxPu%2ByUU2wEuSLZO5FxwHz%2BVu1cATmz0DciMe%2BnbWPy7HWNKjswCqOvFrPcPRbjxpiRi6%2FYm7XHZQUzPgtFzmgwpjF8vaZ%2BA4M8OjLx%2FGwSkTEa9Z9IswXgtsaTI5Hhkt2HSGliik7urY2IaJ0XHvBm9ZYVnGfcbMEdIIXu%2BLKxJYP%2FBwk0gi0%2F3XVLKOwdmaI473o0oZpI4%2BV47eHuV4OHOsG32A%2BKM1bZ4fo20B6YjzwtTmH7vfmYTDbyuO%2FBjqkAciXew8%2BTvhFduT%2BX%2FeHpIsLw5q34OJ8J6h44BWQMAkCJ4vSq5okTXa5YEfCXn1pN58WuedJDvx3%2Bkuquhxx3AyVHeiytYDYiEb32pZ0W0cigIGT8C8M1WxEqU9BWQETE9F5FwYYaXbLaybBsV9DSjJhmd%2FWozBj412vwDCH2pT98RCrIFSmbHbQRbC8pES%2FbnjahkybLV7O9URlI%2BqGJjZ%2BhO8U&X-Amz-Signature=1c33444ca53f7eb4de53b2f10f5f2b04a3f1e3287eaf4cef1926cbd1cf697674&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
