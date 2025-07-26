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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKN34HH6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIF2LqNj9DQ2rtJPCMHGCwixRw7aWkoALcDld4HoelmIvAiA%2FkzE7%2FcM5UhZT6d9B5uZCqE%2FJGBpy6ZNEVd2Ve%2Byf7ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMQ0FkAvfXrUl4nZBAKtwDiOyR7n8Xs3vsXv9gb1WsbEFPxw9IhivdqoEHA3LgUyP7dd5NW%2FDcwgTqZykJan1emDqU8YihZmZNxsB4l2bD3M3Gu6501fSoBrYJDIAOpMCEwR06xmPzE%2FuIBZl8FSWFMD00IMnvdNCTQnfkyrZ0%2FbSsWlq9hIJeZOD20Hl0vJaFvijnPPWTJe9hsFLbBTZmAj%2BFHW1eldYeJcj9JW4b3vCwaTLfWOhn2XeA5bKXlCMOGFqZck28e4GDzIbZh9cna6cW%2FV5Gp2t%2FB8JEpQhmWtEng%2Fi5uox3BOw4ZIn%2FIfEwCcn0%2BwkYFqbYkRcBIYUQZZwDSgoFxOdO1v4mJQTILkBsnqv41Wu%2FujW3XveAaF1jyJvtozr8N80ahBiAh7PMFTycLgIUnwEe%2B1wqeK9ZbfiATy%2BioQbr%2FI1YbZXPwhcrtqUYzJ0lJgZzO3T3S5aUJWm3rOMyhZ54V4oH0fRKaSFiNQYW8qXc5ymfmPjGM7nFTkILm6weSwxD%2FDI4jVXSKNrpm5WgYkhqAUFq2HQyeOd2ssmbsk3rtxvWJ8ei%2B%2BFoNPUeZzqwh94csKcymtiWDFNoObGjfE0MZLl9wvYilR7KsQjz0i0e%2BOrNsdfRN4I8vzoqoNIOXzYEwvgw%2BPSQxAY6pgFs4OannAvGUDcjoJzKeLoeT5ijLfhnJdCg7I1oKdRO2Fi%2B5EpAak%2Flug5K5oabOh2yfiQxB6jZbKXelrOpW%2BD7%2FNXbvhbGkClAZBXsRpQkK5qq%2FuuGv1%2BnEQ8sVk5KS3zr8Qs9yxRh0U%2F75Frd%2BigrvTl73eBJ0STaDRM%2BKiY0pJhXMxUax5bWBGunWEHm%2BmMWz0fqXNItDlojoicJY1Yy1ePy7gA1&X-Amz-Signature=1123b8f0675b22a186bf472196b0a2a5d868f89590085bcdac36d1067c439366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKN34HH6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIF2LqNj9DQ2rtJPCMHGCwixRw7aWkoALcDld4HoelmIvAiA%2FkzE7%2FcM5UhZT6d9B5uZCqE%2FJGBpy6ZNEVd2Ve%2Byf7ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMQ0FkAvfXrUl4nZBAKtwDiOyR7n8Xs3vsXv9gb1WsbEFPxw9IhivdqoEHA3LgUyP7dd5NW%2FDcwgTqZykJan1emDqU8YihZmZNxsB4l2bD3M3Gu6501fSoBrYJDIAOpMCEwR06xmPzE%2FuIBZl8FSWFMD00IMnvdNCTQnfkyrZ0%2FbSsWlq9hIJeZOD20Hl0vJaFvijnPPWTJe9hsFLbBTZmAj%2BFHW1eldYeJcj9JW4b3vCwaTLfWOhn2XeA5bKXlCMOGFqZck28e4GDzIbZh9cna6cW%2FV5Gp2t%2FB8JEpQhmWtEng%2Fi5uox3BOw4ZIn%2FIfEwCcn0%2BwkYFqbYkRcBIYUQZZwDSgoFxOdO1v4mJQTILkBsnqv41Wu%2FujW3XveAaF1jyJvtozr8N80ahBiAh7PMFTycLgIUnwEe%2B1wqeK9ZbfiATy%2BioQbr%2FI1YbZXPwhcrtqUYzJ0lJgZzO3T3S5aUJWm3rOMyhZ54V4oH0fRKaSFiNQYW8qXc5ymfmPjGM7nFTkILm6weSwxD%2FDI4jVXSKNrpm5WgYkhqAUFq2HQyeOd2ssmbsk3rtxvWJ8ei%2B%2BFoNPUeZzqwh94csKcymtiWDFNoObGjfE0MZLl9wvYilR7KsQjz0i0e%2BOrNsdfRN4I8vzoqoNIOXzYEwvgw%2BPSQxAY6pgFs4OannAvGUDcjoJzKeLoeT5ijLfhnJdCg7I1oKdRO2Fi%2B5EpAak%2Flug5K5oabOh2yfiQxB6jZbKXelrOpW%2BD7%2FNXbvhbGkClAZBXsRpQkK5qq%2FuuGv1%2BnEQ8sVk5KS3zr8Qs9yxRh0U%2F75Frd%2BigrvTl73eBJ0STaDRM%2BKiY0pJhXMxUax5bWBGunWEHm%2BmMWz0fqXNItDlojoicJY1Yy1ePy7gA1&X-Amz-Signature=4bb9dd870ee22f67b836846bda48f9ac425a4fd97f9aeb03ef44cc62f3b5def0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKN34HH6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIF2LqNj9DQ2rtJPCMHGCwixRw7aWkoALcDld4HoelmIvAiA%2FkzE7%2FcM5UhZT6d9B5uZCqE%2FJGBpy6ZNEVd2Ve%2Byf7ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMQ0FkAvfXrUl4nZBAKtwDiOyR7n8Xs3vsXv9gb1WsbEFPxw9IhivdqoEHA3LgUyP7dd5NW%2FDcwgTqZykJan1emDqU8YihZmZNxsB4l2bD3M3Gu6501fSoBrYJDIAOpMCEwR06xmPzE%2FuIBZl8FSWFMD00IMnvdNCTQnfkyrZ0%2FbSsWlq9hIJeZOD20Hl0vJaFvijnPPWTJe9hsFLbBTZmAj%2BFHW1eldYeJcj9JW4b3vCwaTLfWOhn2XeA5bKXlCMOGFqZck28e4GDzIbZh9cna6cW%2FV5Gp2t%2FB8JEpQhmWtEng%2Fi5uox3BOw4ZIn%2FIfEwCcn0%2BwkYFqbYkRcBIYUQZZwDSgoFxOdO1v4mJQTILkBsnqv41Wu%2FujW3XveAaF1jyJvtozr8N80ahBiAh7PMFTycLgIUnwEe%2B1wqeK9ZbfiATy%2BioQbr%2FI1YbZXPwhcrtqUYzJ0lJgZzO3T3S5aUJWm3rOMyhZ54V4oH0fRKaSFiNQYW8qXc5ymfmPjGM7nFTkILm6weSwxD%2FDI4jVXSKNrpm5WgYkhqAUFq2HQyeOd2ssmbsk3rtxvWJ8ei%2B%2BFoNPUeZzqwh94csKcymtiWDFNoObGjfE0MZLl9wvYilR7KsQjz0i0e%2BOrNsdfRN4I8vzoqoNIOXzYEwvgw%2BPSQxAY6pgFs4OannAvGUDcjoJzKeLoeT5ijLfhnJdCg7I1oKdRO2Fi%2B5EpAak%2Flug5K5oabOh2yfiQxB6jZbKXelrOpW%2BD7%2FNXbvhbGkClAZBXsRpQkK5qq%2FuuGv1%2BnEQ8sVk5KS3zr8Qs9yxRh0U%2F75Frd%2BigrvTl73eBJ0STaDRM%2BKiY0pJhXMxUax5bWBGunWEHm%2BmMWz0fqXNItDlojoicJY1Yy1ePy7gA1&X-Amz-Signature=ecad1694438089b337dc2f940448a2a7b49700478cd96ba870a8f9225b159db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKN34HH6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIF2LqNj9DQ2rtJPCMHGCwixRw7aWkoALcDld4HoelmIvAiA%2FkzE7%2FcM5UhZT6d9B5uZCqE%2FJGBpy6ZNEVd2Ve%2Byf7ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMQ0FkAvfXrUl4nZBAKtwDiOyR7n8Xs3vsXv9gb1WsbEFPxw9IhivdqoEHA3LgUyP7dd5NW%2FDcwgTqZykJan1emDqU8YihZmZNxsB4l2bD3M3Gu6501fSoBrYJDIAOpMCEwR06xmPzE%2FuIBZl8FSWFMD00IMnvdNCTQnfkyrZ0%2FbSsWlq9hIJeZOD20Hl0vJaFvijnPPWTJe9hsFLbBTZmAj%2BFHW1eldYeJcj9JW4b3vCwaTLfWOhn2XeA5bKXlCMOGFqZck28e4GDzIbZh9cna6cW%2FV5Gp2t%2FB8JEpQhmWtEng%2Fi5uox3BOw4ZIn%2FIfEwCcn0%2BwkYFqbYkRcBIYUQZZwDSgoFxOdO1v4mJQTILkBsnqv41Wu%2FujW3XveAaF1jyJvtozr8N80ahBiAh7PMFTycLgIUnwEe%2B1wqeK9ZbfiATy%2BioQbr%2FI1YbZXPwhcrtqUYzJ0lJgZzO3T3S5aUJWm3rOMyhZ54V4oH0fRKaSFiNQYW8qXc5ymfmPjGM7nFTkILm6weSwxD%2FDI4jVXSKNrpm5WgYkhqAUFq2HQyeOd2ssmbsk3rtxvWJ8ei%2B%2BFoNPUeZzqwh94csKcymtiWDFNoObGjfE0MZLl9wvYilR7KsQjz0i0e%2BOrNsdfRN4I8vzoqoNIOXzYEwvgw%2BPSQxAY6pgFs4OannAvGUDcjoJzKeLoeT5ijLfhnJdCg7I1oKdRO2Fi%2B5EpAak%2Flug5K5oabOh2yfiQxB6jZbKXelrOpW%2BD7%2FNXbvhbGkClAZBXsRpQkK5qq%2FuuGv1%2BnEQ8sVk5KS3zr8Qs9yxRh0U%2F75Frd%2BigrvTl73eBJ0STaDRM%2BKiY0pJhXMxUax5bWBGunWEHm%2BmMWz0fqXNItDlojoicJY1Yy1ePy7gA1&X-Amz-Signature=93721f62bd77e2dfcc80a61fdb446e7f7b0fb703b721713c4d0a81f6d236840a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKN34HH6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIF2LqNj9DQ2rtJPCMHGCwixRw7aWkoALcDld4HoelmIvAiA%2FkzE7%2FcM5UhZT6d9B5uZCqE%2FJGBpy6ZNEVd2Ve%2Byf7ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMQ0FkAvfXrUl4nZBAKtwDiOyR7n8Xs3vsXv9gb1WsbEFPxw9IhivdqoEHA3LgUyP7dd5NW%2FDcwgTqZykJan1emDqU8YihZmZNxsB4l2bD3M3Gu6501fSoBrYJDIAOpMCEwR06xmPzE%2FuIBZl8FSWFMD00IMnvdNCTQnfkyrZ0%2FbSsWlq9hIJeZOD20Hl0vJaFvijnPPWTJe9hsFLbBTZmAj%2BFHW1eldYeJcj9JW4b3vCwaTLfWOhn2XeA5bKXlCMOGFqZck28e4GDzIbZh9cna6cW%2FV5Gp2t%2FB8JEpQhmWtEng%2Fi5uox3BOw4ZIn%2FIfEwCcn0%2BwkYFqbYkRcBIYUQZZwDSgoFxOdO1v4mJQTILkBsnqv41Wu%2FujW3XveAaF1jyJvtozr8N80ahBiAh7PMFTycLgIUnwEe%2B1wqeK9ZbfiATy%2BioQbr%2FI1YbZXPwhcrtqUYzJ0lJgZzO3T3S5aUJWm3rOMyhZ54V4oH0fRKaSFiNQYW8qXc5ymfmPjGM7nFTkILm6weSwxD%2FDI4jVXSKNrpm5WgYkhqAUFq2HQyeOd2ssmbsk3rtxvWJ8ei%2B%2BFoNPUeZzqwh94csKcymtiWDFNoObGjfE0MZLl9wvYilR7KsQjz0i0e%2BOrNsdfRN4I8vzoqoNIOXzYEwvgw%2BPSQxAY6pgFs4OannAvGUDcjoJzKeLoeT5ijLfhnJdCg7I1oKdRO2Fi%2B5EpAak%2Flug5K5oabOh2yfiQxB6jZbKXelrOpW%2BD7%2FNXbvhbGkClAZBXsRpQkK5qq%2FuuGv1%2BnEQ8sVk5KS3zr8Qs9yxRh0U%2F75Frd%2BigrvTl73eBJ0STaDRM%2BKiY0pJhXMxUax5bWBGunWEHm%2BmMWz0fqXNItDlojoicJY1Yy1ePy7gA1&X-Amz-Signature=b9d1919f63e152487182cc9568c2e03b09da636264ea2e0fceb39f5eb40a4ee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKN34HH6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIF2LqNj9DQ2rtJPCMHGCwixRw7aWkoALcDld4HoelmIvAiA%2FkzE7%2FcM5UhZT6d9B5uZCqE%2FJGBpy6ZNEVd2Ve%2Byf7ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMQ0FkAvfXrUl4nZBAKtwDiOyR7n8Xs3vsXv9gb1WsbEFPxw9IhivdqoEHA3LgUyP7dd5NW%2FDcwgTqZykJan1emDqU8YihZmZNxsB4l2bD3M3Gu6501fSoBrYJDIAOpMCEwR06xmPzE%2FuIBZl8FSWFMD00IMnvdNCTQnfkyrZ0%2FbSsWlq9hIJeZOD20Hl0vJaFvijnPPWTJe9hsFLbBTZmAj%2BFHW1eldYeJcj9JW4b3vCwaTLfWOhn2XeA5bKXlCMOGFqZck28e4GDzIbZh9cna6cW%2FV5Gp2t%2FB8JEpQhmWtEng%2Fi5uox3BOw4ZIn%2FIfEwCcn0%2BwkYFqbYkRcBIYUQZZwDSgoFxOdO1v4mJQTILkBsnqv41Wu%2FujW3XveAaF1jyJvtozr8N80ahBiAh7PMFTycLgIUnwEe%2B1wqeK9ZbfiATy%2BioQbr%2FI1YbZXPwhcrtqUYzJ0lJgZzO3T3S5aUJWm3rOMyhZ54V4oH0fRKaSFiNQYW8qXc5ymfmPjGM7nFTkILm6weSwxD%2FDI4jVXSKNrpm5WgYkhqAUFq2HQyeOd2ssmbsk3rtxvWJ8ei%2B%2BFoNPUeZzqwh94csKcymtiWDFNoObGjfE0MZLl9wvYilR7KsQjz0i0e%2BOrNsdfRN4I8vzoqoNIOXzYEwvgw%2BPSQxAY6pgFs4OannAvGUDcjoJzKeLoeT5ijLfhnJdCg7I1oKdRO2Fi%2B5EpAak%2Flug5K5oabOh2yfiQxB6jZbKXelrOpW%2BD7%2FNXbvhbGkClAZBXsRpQkK5qq%2FuuGv1%2BnEQ8sVk5KS3zr8Qs9yxRh0U%2F75Frd%2BigrvTl73eBJ0STaDRM%2BKiY0pJhXMxUax5bWBGunWEHm%2BmMWz0fqXNItDlojoicJY1Yy1ePy7gA1&X-Amz-Signature=0393c3a84d1ad0fe0e19b0fa07fe712bf9e24421663472e41f43fefa0694c3bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKN34HH6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIF2LqNj9DQ2rtJPCMHGCwixRw7aWkoALcDld4HoelmIvAiA%2FkzE7%2FcM5UhZT6d9B5uZCqE%2FJGBpy6ZNEVd2Ve%2Byf7ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMQ0FkAvfXrUl4nZBAKtwDiOyR7n8Xs3vsXv9gb1WsbEFPxw9IhivdqoEHA3LgUyP7dd5NW%2FDcwgTqZykJan1emDqU8YihZmZNxsB4l2bD3M3Gu6501fSoBrYJDIAOpMCEwR06xmPzE%2FuIBZl8FSWFMD00IMnvdNCTQnfkyrZ0%2FbSsWlq9hIJeZOD20Hl0vJaFvijnPPWTJe9hsFLbBTZmAj%2BFHW1eldYeJcj9JW4b3vCwaTLfWOhn2XeA5bKXlCMOGFqZck28e4GDzIbZh9cna6cW%2FV5Gp2t%2FB8JEpQhmWtEng%2Fi5uox3BOw4ZIn%2FIfEwCcn0%2BwkYFqbYkRcBIYUQZZwDSgoFxOdO1v4mJQTILkBsnqv41Wu%2FujW3XveAaF1jyJvtozr8N80ahBiAh7PMFTycLgIUnwEe%2B1wqeK9ZbfiATy%2BioQbr%2FI1YbZXPwhcrtqUYzJ0lJgZzO3T3S5aUJWm3rOMyhZ54V4oH0fRKaSFiNQYW8qXc5ymfmPjGM7nFTkILm6weSwxD%2FDI4jVXSKNrpm5WgYkhqAUFq2HQyeOd2ssmbsk3rtxvWJ8ei%2B%2BFoNPUeZzqwh94csKcymtiWDFNoObGjfE0MZLl9wvYilR7KsQjz0i0e%2BOrNsdfRN4I8vzoqoNIOXzYEwvgw%2BPSQxAY6pgFs4OannAvGUDcjoJzKeLoeT5ijLfhnJdCg7I1oKdRO2Fi%2B5EpAak%2Flug5K5oabOh2yfiQxB6jZbKXelrOpW%2BD7%2FNXbvhbGkClAZBXsRpQkK5qq%2FuuGv1%2BnEQ8sVk5KS3zr8Qs9yxRh0U%2F75Frd%2BigrvTl73eBJ0STaDRM%2BKiY0pJhXMxUax5bWBGunWEHm%2BmMWz0fqXNItDlojoicJY1Yy1ePy7gA1&X-Amz-Signature=f6c3402ac20b6b01e6af695210dff2c17458ee18337692b849f81194ffb00826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
