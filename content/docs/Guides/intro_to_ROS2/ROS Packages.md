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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ENABWWN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIESXq%2FpIie0SpH%2FqS8qgsjMy8i5YYC3Og7hV%2F3vZHTJHAiEA%2BP8Ylzl9dYy4ZiI3o%2Fz5t2Y%2B51ub%2BQJ5CbxYFYmW%2FmEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrcr%2BeINAV1ZYbndyrcA2qfX9AHPrYKXdTZbomOsifGfvgW%2Fi%2FH0R%2F%2F44YCzXnb7MJubooLSSNyyDvh2KpDQ7YUAxIF6OlDhDUwXKOfnzfRc9BQyL6LgRxN%2BuPXl1V8TC3N1Ds5DXv1%2BXXdufpzvW9pFNf3CnbKCcwZAlLV2QNyMXXteuRF7ICgPLe4n0d4FuIuV3vlptGhILO67Yy1jmfBSrHc3R1gQFQWPSqKJ8VD0aWTLHBfAxJfWSN0%2B%2FmOr2E86rsBp2bAV19E5KcvOpvms37VndoNfeuOsTqA8nC7gSfn8Lbq0NQR6MQwFNwJ9zcE%2BAQJHB3Ufm25N9W4bS92siLiwCcjWaGbfzDoxrxnQoQAqcUb%2FqxJGIcm75HI%2Bz2GYzYV5T%2FM1%2Fd4z9Qnsw2FnZMaY1i7fgQ%2BOpu0c8G86Pz9fAPQKjnJ3P1oUo7aIaFLOr8dc79MHksnpxT6nusEInam6crA1FAH1N89u36LMCDujtQb6vMtU7CrSPYpyQ3PESYK7V6vSlUDLYfNxTqcSwCGrSJWBT%2B1l%2F9NDy82PmexTk7dstQs%2BfsDbQqNmdtjn07hDIljq9uyjnxF8YUvVRlqkkaS7hTX1gaLsmkqwdgQRfXco9R6zWfwyXWIEXMYqybhexzeEOXXMISbxL4GOqUBtq%2FNtQlidgO0RtfbWDYtO1PLxSlqtsdEeW9VxWhpZ4A7DOrxjv1%2FwTpNS%2Bfk%2Fpu2WW3XdiA3xhku0jsubWUOfWwj49rkqGPMYqRmK4E3FceDfPwDiaGOJFYYYj0vlVjHIV%2BTcxUW69nZdfWEPTIgemv%2FyoErk8MNuKtoXP4cqudm7z%2BqXBthcX4TjYQeVir6Xxmt3JkmmZ36BKZNd%2FLh0lIBz5hV&X-Amz-Signature=138975917811f4072abe26d566a2adbe7675fad8b8b24bc23b7ea0026ae520be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ENABWWN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIESXq%2FpIie0SpH%2FqS8qgsjMy8i5YYC3Og7hV%2F3vZHTJHAiEA%2BP8Ylzl9dYy4ZiI3o%2Fz5t2Y%2B51ub%2BQJ5CbxYFYmW%2FmEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrcr%2BeINAV1ZYbndyrcA2qfX9AHPrYKXdTZbomOsifGfvgW%2Fi%2FH0R%2F%2F44YCzXnb7MJubooLSSNyyDvh2KpDQ7YUAxIF6OlDhDUwXKOfnzfRc9BQyL6LgRxN%2BuPXl1V8TC3N1Ds5DXv1%2BXXdufpzvW9pFNf3CnbKCcwZAlLV2QNyMXXteuRF7ICgPLe4n0d4FuIuV3vlptGhILO67Yy1jmfBSrHc3R1gQFQWPSqKJ8VD0aWTLHBfAxJfWSN0%2B%2FmOr2E86rsBp2bAV19E5KcvOpvms37VndoNfeuOsTqA8nC7gSfn8Lbq0NQR6MQwFNwJ9zcE%2BAQJHB3Ufm25N9W4bS92siLiwCcjWaGbfzDoxrxnQoQAqcUb%2FqxJGIcm75HI%2Bz2GYzYV5T%2FM1%2Fd4z9Qnsw2FnZMaY1i7fgQ%2BOpu0c8G86Pz9fAPQKjnJ3P1oUo7aIaFLOr8dc79MHksnpxT6nusEInam6crA1FAH1N89u36LMCDujtQb6vMtU7CrSPYpyQ3PESYK7V6vSlUDLYfNxTqcSwCGrSJWBT%2B1l%2F9NDy82PmexTk7dstQs%2BfsDbQqNmdtjn07hDIljq9uyjnxF8YUvVRlqkkaS7hTX1gaLsmkqwdgQRfXco9R6zWfwyXWIEXMYqybhexzeEOXXMISbxL4GOqUBtq%2FNtQlidgO0RtfbWDYtO1PLxSlqtsdEeW9VxWhpZ4A7DOrxjv1%2FwTpNS%2Bfk%2Fpu2WW3XdiA3xhku0jsubWUOfWwj49rkqGPMYqRmK4E3FceDfPwDiaGOJFYYYj0vlVjHIV%2BTcxUW69nZdfWEPTIgemv%2FyoErk8MNuKtoXP4cqudm7z%2BqXBthcX4TjYQeVir6Xxmt3JkmmZ36BKZNd%2FLh0lIBz5hV&X-Amz-Signature=ea052dd1e9584bf5731599d95b6d25eecca3afec1dae4378cfe31c43f40e535e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ENABWWN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIESXq%2FpIie0SpH%2FqS8qgsjMy8i5YYC3Og7hV%2F3vZHTJHAiEA%2BP8Ylzl9dYy4ZiI3o%2Fz5t2Y%2B51ub%2BQJ5CbxYFYmW%2FmEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrcr%2BeINAV1ZYbndyrcA2qfX9AHPrYKXdTZbomOsifGfvgW%2Fi%2FH0R%2F%2F44YCzXnb7MJubooLSSNyyDvh2KpDQ7YUAxIF6OlDhDUwXKOfnzfRc9BQyL6LgRxN%2BuPXl1V8TC3N1Ds5DXv1%2BXXdufpzvW9pFNf3CnbKCcwZAlLV2QNyMXXteuRF7ICgPLe4n0d4FuIuV3vlptGhILO67Yy1jmfBSrHc3R1gQFQWPSqKJ8VD0aWTLHBfAxJfWSN0%2B%2FmOr2E86rsBp2bAV19E5KcvOpvms37VndoNfeuOsTqA8nC7gSfn8Lbq0NQR6MQwFNwJ9zcE%2BAQJHB3Ufm25N9W4bS92siLiwCcjWaGbfzDoxrxnQoQAqcUb%2FqxJGIcm75HI%2Bz2GYzYV5T%2FM1%2Fd4z9Qnsw2FnZMaY1i7fgQ%2BOpu0c8G86Pz9fAPQKjnJ3P1oUo7aIaFLOr8dc79MHksnpxT6nusEInam6crA1FAH1N89u36LMCDujtQb6vMtU7CrSPYpyQ3PESYK7V6vSlUDLYfNxTqcSwCGrSJWBT%2B1l%2F9NDy82PmexTk7dstQs%2BfsDbQqNmdtjn07hDIljq9uyjnxF8YUvVRlqkkaS7hTX1gaLsmkqwdgQRfXco9R6zWfwyXWIEXMYqybhexzeEOXXMISbxL4GOqUBtq%2FNtQlidgO0RtfbWDYtO1PLxSlqtsdEeW9VxWhpZ4A7DOrxjv1%2FwTpNS%2Bfk%2Fpu2WW3XdiA3xhku0jsubWUOfWwj49rkqGPMYqRmK4E3FceDfPwDiaGOJFYYYj0vlVjHIV%2BTcxUW69nZdfWEPTIgemv%2FyoErk8MNuKtoXP4cqudm7z%2BqXBthcX4TjYQeVir6Xxmt3JkmmZ36BKZNd%2FLh0lIBz5hV&X-Amz-Signature=018bb351174c701bb0c03f521af8ae895ab9c7170db6e96fc9ffe22f247653c9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ENABWWN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIESXq%2FpIie0SpH%2FqS8qgsjMy8i5YYC3Og7hV%2F3vZHTJHAiEA%2BP8Ylzl9dYy4ZiI3o%2Fz5t2Y%2B51ub%2BQJ5CbxYFYmW%2FmEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrcr%2BeINAV1ZYbndyrcA2qfX9AHPrYKXdTZbomOsifGfvgW%2Fi%2FH0R%2F%2F44YCzXnb7MJubooLSSNyyDvh2KpDQ7YUAxIF6OlDhDUwXKOfnzfRc9BQyL6LgRxN%2BuPXl1V8TC3N1Ds5DXv1%2BXXdufpzvW9pFNf3CnbKCcwZAlLV2QNyMXXteuRF7ICgPLe4n0d4FuIuV3vlptGhILO67Yy1jmfBSrHc3R1gQFQWPSqKJ8VD0aWTLHBfAxJfWSN0%2B%2FmOr2E86rsBp2bAV19E5KcvOpvms37VndoNfeuOsTqA8nC7gSfn8Lbq0NQR6MQwFNwJ9zcE%2BAQJHB3Ufm25N9W4bS92siLiwCcjWaGbfzDoxrxnQoQAqcUb%2FqxJGIcm75HI%2Bz2GYzYV5T%2FM1%2Fd4z9Qnsw2FnZMaY1i7fgQ%2BOpu0c8G86Pz9fAPQKjnJ3P1oUo7aIaFLOr8dc79MHksnpxT6nusEInam6crA1FAH1N89u36LMCDujtQb6vMtU7CrSPYpyQ3PESYK7V6vSlUDLYfNxTqcSwCGrSJWBT%2B1l%2F9NDy82PmexTk7dstQs%2BfsDbQqNmdtjn07hDIljq9uyjnxF8YUvVRlqkkaS7hTX1gaLsmkqwdgQRfXco9R6zWfwyXWIEXMYqybhexzeEOXXMISbxL4GOqUBtq%2FNtQlidgO0RtfbWDYtO1PLxSlqtsdEeW9VxWhpZ4A7DOrxjv1%2FwTpNS%2Bfk%2Fpu2WW3XdiA3xhku0jsubWUOfWwj49rkqGPMYqRmK4E3FceDfPwDiaGOJFYYYj0vlVjHIV%2BTcxUW69nZdfWEPTIgemv%2FyoErk8MNuKtoXP4cqudm7z%2BqXBthcX4TjYQeVir6Xxmt3JkmmZ36BKZNd%2FLh0lIBz5hV&X-Amz-Signature=9a816ce12902a8eb8b872620358a8bfbb077c813e2c546d2aa366d909dd8059e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ENABWWN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIESXq%2FpIie0SpH%2FqS8qgsjMy8i5YYC3Og7hV%2F3vZHTJHAiEA%2BP8Ylzl9dYy4ZiI3o%2Fz5t2Y%2B51ub%2BQJ5CbxYFYmW%2FmEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrcr%2BeINAV1ZYbndyrcA2qfX9AHPrYKXdTZbomOsifGfvgW%2Fi%2FH0R%2F%2F44YCzXnb7MJubooLSSNyyDvh2KpDQ7YUAxIF6OlDhDUwXKOfnzfRc9BQyL6LgRxN%2BuPXl1V8TC3N1Ds5DXv1%2BXXdufpzvW9pFNf3CnbKCcwZAlLV2QNyMXXteuRF7ICgPLe4n0d4FuIuV3vlptGhILO67Yy1jmfBSrHc3R1gQFQWPSqKJ8VD0aWTLHBfAxJfWSN0%2B%2FmOr2E86rsBp2bAV19E5KcvOpvms37VndoNfeuOsTqA8nC7gSfn8Lbq0NQR6MQwFNwJ9zcE%2BAQJHB3Ufm25N9W4bS92siLiwCcjWaGbfzDoxrxnQoQAqcUb%2FqxJGIcm75HI%2Bz2GYzYV5T%2FM1%2Fd4z9Qnsw2FnZMaY1i7fgQ%2BOpu0c8G86Pz9fAPQKjnJ3P1oUo7aIaFLOr8dc79MHksnpxT6nusEInam6crA1FAH1N89u36LMCDujtQb6vMtU7CrSPYpyQ3PESYK7V6vSlUDLYfNxTqcSwCGrSJWBT%2B1l%2F9NDy82PmexTk7dstQs%2BfsDbQqNmdtjn07hDIljq9uyjnxF8YUvVRlqkkaS7hTX1gaLsmkqwdgQRfXco9R6zWfwyXWIEXMYqybhexzeEOXXMISbxL4GOqUBtq%2FNtQlidgO0RtfbWDYtO1PLxSlqtsdEeW9VxWhpZ4A7DOrxjv1%2FwTpNS%2Bfk%2Fpu2WW3XdiA3xhku0jsubWUOfWwj49rkqGPMYqRmK4E3FceDfPwDiaGOJFYYYj0vlVjHIV%2BTcxUW69nZdfWEPTIgemv%2FyoErk8MNuKtoXP4cqudm7z%2BqXBthcX4TjYQeVir6Xxmt3JkmmZ36BKZNd%2FLh0lIBz5hV&X-Amz-Signature=10ee855da6f6268546c64d49ad129310a6778a2cd9d6d67a8b2eff9c74102f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ENABWWN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIESXq%2FpIie0SpH%2FqS8qgsjMy8i5YYC3Og7hV%2F3vZHTJHAiEA%2BP8Ylzl9dYy4ZiI3o%2Fz5t2Y%2B51ub%2BQJ5CbxYFYmW%2FmEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrcr%2BeINAV1ZYbndyrcA2qfX9AHPrYKXdTZbomOsifGfvgW%2Fi%2FH0R%2F%2F44YCzXnb7MJubooLSSNyyDvh2KpDQ7YUAxIF6OlDhDUwXKOfnzfRc9BQyL6LgRxN%2BuPXl1V8TC3N1Ds5DXv1%2BXXdufpzvW9pFNf3CnbKCcwZAlLV2QNyMXXteuRF7ICgPLe4n0d4FuIuV3vlptGhILO67Yy1jmfBSrHc3R1gQFQWPSqKJ8VD0aWTLHBfAxJfWSN0%2B%2FmOr2E86rsBp2bAV19E5KcvOpvms37VndoNfeuOsTqA8nC7gSfn8Lbq0NQR6MQwFNwJ9zcE%2BAQJHB3Ufm25N9W4bS92siLiwCcjWaGbfzDoxrxnQoQAqcUb%2FqxJGIcm75HI%2Bz2GYzYV5T%2FM1%2Fd4z9Qnsw2FnZMaY1i7fgQ%2BOpu0c8G86Pz9fAPQKjnJ3P1oUo7aIaFLOr8dc79MHksnpxT6nusEInam6crA1FAH1N89u36LMCDujtQb6vMtU7CrSPYpyQ3PESYK7V6vSlUDLYfNxTqcSwCGrSJWBT%2B1l%2F9NDy82PmexTk7dstQs%2BfsDbQqNmdtjn07hDIljq9uyjnxF8YUvVRlqkkaS7hTX1gaLsmkqwdgQRfXco9R6zWfwyXWIEXMYqybhexzeEOXXMISbxL4GOqUBtq%2FNtQlidgO0RtfbWDYtO1PLxSlqtsdEeW9VxWhpZ4A7DOrxjv1%2FwTpNS%2Bfk%2Fpu2WW3XdiA3xhku0jsubWUOfWwj49rkqGPMYqRmK4E3FceDfPwDiaGOJFYYYj0vlVjHIV%2BTcxUW69nZdfWEPTIgemv%2FyoErk8MNuKtoXP4cqudm7z%2BqXBthcX4TjYQeVir6Xxmt3JkmmZ36BKZNd%2FLh0lIBz5hV&X-Amz-Signature=9db0788eedcf0be715cf2d1ca26d9dcab49e7123d43a3b5de290cadca1e048df&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ENABWWN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIESXq%2FpIie0SpH%2FqS8qgsjMy8i5YYC3Og7hV%2F3vZHTJHAiEA%2BP8Ylzl9dYy4ZiI3o%2Fz5t2Y%2B51ub%2BQJ5CbxYFYmW%2FmEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrcr%2BeINAV1ZYbndyrcA2qfX9AHPrYKXdTZbomOsifGfvgW%2Fi%2FH0R%2F%2F44YCzXnb7MJubooLSSNyyDvh2KpDQ7YUAxIF6OlDhDUwXKOfnzfRc9BQyL6LgRxN%2BuPXl1V8TC3N1Ds5DXv1%2BXXdufpzvW9pFNf3CnbKCcwZAlLV2QNyMXXteuRF7ICgPLe4n0d4FuIuV3vlptGhILO67Yy1jmfBSrHc3R1gQFQWPSqKJ8VD0aWTLHBfAxJfWSN0%2B%2FmOr2E86rsBp2bAV19E5KcvOpvms37VndoNfeuOsTqA8nC7gSfn8Lbq0NQR6MQwFNwJ9zcE%2BAQJHB3Ufm25N9W4bS92siLiwCcjWaGbfzDoxrxnQoQAqcUb%2FqxJGIcm75HI%2Bz2GYzYV5T%2FM1%2Fd4z9Qnsw2FnZMaY1i7fgQ%2BOpu0c8G86Pz9fAPQKjnJ3P1oUo7aIaFLOr8dc79MHksnpxT6nusEInam6crA1FAH1N89u36LMCDujtQb6vMtU7CrSPYpyQ3PESYK7V6vSlUDLYfNxTqcSwCGrSJWBT%2B1l%2F9NDy82PmexTk7dstQs%2BfsDbQqNmdtjn07hDIljq9uyjnxF8YUvVRlqkkaS7hTX1gaLsmkqwdgQRfXco9R6zWfwyXWIEXMYqybhexzeEOXXMISbxL4GOqUBtq%2FNtQlidgO0RtfbWDYtO1PLxSlqtsdEeW9VxWhpZ4A7DOrxjv1%2FwTpNS%2Bfk%2Fpu2WW3XdiA3xhku0jsubWUOfWwj49rkqGPMYqRmK4E3FceDfPwDiaGOJFYYYj0vlVjHIV%2BTcxUW69nZdfWEPTIgemv%2FyoErk8MNuKtoXP4cqudm7z%2BqXBthcX4TjYQeVir6Xxmt3JkmmZ36BKZNd%2FLh0lIBz5hV&X-Amz-Signature=dae0dd2b22405387d475fa202729758a3074925d05042657d45a948945dd582e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
