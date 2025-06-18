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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLEXFRE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1DWKbXtVU0fJRw4LBNVaRRqfMmO0kmpzEamA%2BTeq1NQIgBF4QlIK0efVqdTLpO%2F%2Fq6TrpaNCHyIMabqp%2BZFd6GIgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZjJC3yfAuA3VNGByrcAzoc%2FUpveqMQLxxUCDBzG6VMOfJdWlKN%2FRmF5B5XSYcj8eD0qUXlWR39yHkzqx7PksMwZyEVLKtl%2FyleIZI7QEnVQQ6ykw%2FcVhlCevx0vOSwvZr%2FCxkhj%2BtmoP2EY3x2qLCQk1avAo4MiYlV4JVkwoKKUgeBgpdmpm99jJGe4%2FgBd5o4MZbQXPNEfsRBgT9aoS4ToxUc1gpzHJTzVZZvuNFi%2BPz41TCjkObn5qaW8cQWhUpel%2B4xiDBqOc5zFm4sJANrb9CA1NyGGPiCCTAH4oCgFi5Xau%2FGz9W4zT6XfL0iH%2FyPq2MeHxFzdXEkzkLxdamGFtcc1TluknDTZz0YD2lNX0LV2VOH4AVJ9gkHzWVlom16kEt7UEQmJwE6su6uIamRRU64w57Ln9KougkAjSnkrkvOw%2FBALkGtk2GH38g5o38BVSHa0Ni98lw4Akwo%2BXCqqWSc7Ne9fzzm24LxfJT2xgmlmJ%2F8vKKG7NQRZNqxA8GMbKx%2B7PPGTwhOZcK75w9j9UEeiRApJRthrJfdW7K4DKvnHmX9Ig0mIA%2F9ZRg0SXr5KbaQOM0%2BRwlU3ymCfo8kqi53FFRzb33wZv3oB19uiiJcTKeHW9Bp7vjUDVGoRi%2B1BPNI0ebd7dMpMPWMysIGOqUBXbn0DjHgPADDk99yt3KprSH8HFWHphTVTgbs5Ds0nBXN%2B6GrJhST%2Bf1BDDuLtzqWoK5F4t7Cobjlkwo8Enk69gMk1FPUkfifGrGurl0qGioZBZxYAuuFDh3Y2q98er8e1Ti7d7MWRv67CwwHOmtoR%2F5Tuv5RHCXw6hN7A6a7avlaMUBxiY0YOcADHjSZah%2BIDpucRPHnoNBvSrlggxRGUCv2DVSK&X-Amz-Signature=f6939e0f33d316baa1137f753791b10aabc14d6f2c180028b941816e26182bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLEXFRE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1DWKbXtVU0fJRw4LBNVaRRqfMmO0kmpzEamA%2BTeq1NQIgBF4QlIK0efVqdTLpO%2F%2Fq6TrpaNCHyIMabqp%2BZFd6GIgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZjJC3yfAuA3VNGByrcAzoc%2FUpveqMQLxxUCDBzG6VMOfJdWlKN%2FRmF5B5XSYcj8eD0qUXlWR39yHkzqx7PksMwZyEVLKtl%2FyleIZI7QEnVQQ6ykw%2FcVhlCevx0vOSwvZr%2FCxkhj%2BtmoP2EY3x2qLCQk1avAo4MiYlV4JVkwoKKUgeBgpdmpm99jJGe4%2FgBd5o4MZbQXPNEfsRBgT9aoS4ToxUc1gpzHJTzVZZvuNFi%2BPz41TCjkObn5qaW8cQWhUpel%2B4xiDBqOc5zFm4sJANrb9CA1NyGGPiCCTAH4oCgFi5Xau%2FGz9W4zT6XfL0iH%2FyPq2MeHxFzdXEkzkLxdamGFtcc1TluknDTZz0YD2lNX0LV2VOH4AVJ9gkHzWVlom16kEt7UEQmJwE6su6uIamRRU64w57Ln9KougkAjSnkrkvOw%2FBALkGtk2GH38g5o38BVSHa0Ni98lw4Akwo%2BXCqqWSc7Ne9fzzm24LxfJT2xgmlmJ%2F8vKKG7NQRZNqxA8GMbKx%2B7PPGTwhOZcK75w9j9UEeiRApJRthrJfdW7K4DKvnHmX9Ig0mIA%2F9ZRg0SXr5KbaQOM0%2BRwlU3ymCfo8kqi53FFRzb33wZv3oB19uiiJcTKeHW9Bp7vjUDVGoRi%2B1BPNI0ebd7dMpMPWMysIGOqUBXbn0DjHgPADDk99yt3KprSH8HFWHphTVTgbs5Ds0nBXN%2B6GrJhST%2Bf1BDDuLtzqWoK5F4t7Cobjlkwo8Enk69gMk1FPUkfifGrGurl0qGioZBZxYAuuFDh3Y2q98er8e1Ti7d7MWRv67CwwHOmtoR%2F5Tuv5RHCXw6hN7A6a7avlaMUBxiY0YOcADHjSZah%2BIDpucRPHnoNBvSrlggxRGUCv2DVSK&X-Amz-Signature=47ecce8faa33416cfc875254f3a2624bd7c5fed72e1343963c709197a1cc53b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLEXFRE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1DWKbXtVU0fJRw4LBNVaRRqfMmO0kmpzEamA%2BTeq1NQIgBF4QlIK0efVqdTLpO%2F%2Fq6TrpaNCHyIMabqp%2BZFd6GIgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZjJC3yfAuA3VNGByrcAzoc%2FUpveqMQLxxUCDBzG6VMOfJdWlKN%2FRmF5B5XSYcj8eD0qUXlWR39yHkzqx7PksMwZyEVLKtl%2FyleIZI7QEnVQQ6ykw%2FcVhlCevx0vOSwvZr%2FCxkhj%2BtmoP2EY3x2qLCQk1avAo4MiYlV4JVkwoKKUgeBgpdmpm99jJGe4%2FgBd5o4MZbQXPNEfsRBgT9aoS4ToxUc1gpzHJTzVZZvuNFi%2BPz41TCjkObn5qaW8cQWhUpel%2B4xiDBqOc5zFm4sJANrb9CA1NyGGPiCCTAH4oCgFi5Xau%2FGz9W4zT6XfL0iH%2FyPq2MeHxFzdXEkzkLxdamGFtcc1TluknDTZz0YD2lNX0LV2VOH4AVJ9gkHzWVlom16kEt7UEQmJwE6su6uIamRRU64w57Ln9KougkAjSnkrkvOw%2FBALkGtk2GH38g5o38BVSHa0Ni98lw4Akwo%2BXCqqWSc7Ne9fzzm24LxfJT2xgmlmJ%2F8vKKG7NQRZNqxA8GMbKx%2B7PPGTwhOZcK75w9j9UEeiRApJRthrJfdW7K4DKvnHmX9Ig0mIA%2F9ZRg0SXr5KbaQOM0%2BRwlU3ymCfo8kqi53FFRzb33wZv3oB19uiiJcTKeHW9Bp7vjUDVGoRi%2B1BPNI0ebd7dMpMPWMysIGOqUBXbn0DjHgPADDk99yt3KprSH8HFWHphTVTgbs5Ds0nBXN%2B6GrJhST%2Bf1BDDuLtzqWoK5F4t7Cobjlkwo8Enk69gMk1FPUkfifGrGurl0qGioZBZxYAuuFDh3Y2q98er8e1Ti7d7MWRv67CwwHOmtoR%2F5Tuv5RHCXw6hN7A6a7avlaMUBxiY0YOcADHjSZah%2BIDpucRPHnoNBvSrlggxRGUCv2DVSK&X-Amz-Signature=3d2b3d39de37e038f7140853ce639a25925b3de2155f34253a3e8b4724e88399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLEXFRE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1DWKbXtVU0fJRw4LBNVaRRqfMmO0kmpzEamA%2BTeq1NQIgBF4QlIK0efVqdTLpO%2F%2Fq6TrpaNCHyIMabqp%2BZFd6GIgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZjJC3yfAuA3VNGByrcAzoc%2FUpveqMQLxxUCDBzG6VMOfJdWlKN%2FRmF5B5XSYcj8eD0qUXlWR39yHkzqx7PksMwZyEVLKtl%2FyleIZI7QEnVQQ6ykw%2FcVhlCevx0vOSwvZr%2FCxkhj%2BtmoP2EY3x2qLCQk1avAo4MiYlV4JVkwoKKUgeBgpdmpm99jJGe4%2FgBd5o4MZbQXPNEfsRBgT9aoS4ToxUc1gpzHJTzVZZvuNFi%2BPz41TCjkObn5qaW8cQWhUpel%2B4xiDBqOc5zFm4sJANrb9CA1NyGGPiCCTAH4oCgFi5Xau%2FGz9W4zT6XfL0iH%2FyPq2MeHxFzdXEkzkLxdamGFtcc1TluknDTZz0YD2lNX0LV2VOH4AVJ9gkHzWVlom16kEt7UEQmJwE6su6uIamRRU64w57Ln9KougkAjSnkrkvOw%2FBALkGtk2GH38g5o38BVSHa0Ni98lw4Akwo%2BXCqqWSc7Ne9fzzm24LxfJT2xgmlmJ%2F8vKKG7NQRZNqxA8GMbKx%2B7PPGTwhOZcK75w9j9UEeiRApJRthrJfdW7K4DKvnHmX9Ig0mIA%2F9ZRg0SXr5KbaQOM0%2BRwlU3ymCfo8kqi53FFRzb33wZv3oB19uiiJcTKeHW9Bp7vjUDVGoRi%2B1BPNI0ebd7dMpMPWMysIGOqUBXbn0DjHgPADDk99yt3KprSH8HFWHphTVTgbs5Ds0nBXN%2B6GrJhST%2Bf1BDDuLtzqWoK5F4t7Cobjlkwo8Enk69gMk1FPUkfifGrGurl0qGioZBZxYAuuFDh3Y2q98er8e1Ti7d7MWRv67CwwHOmtoR%2F5Tuv5RHCXw6hN7A6a7avlaMUBxiY0YOcADHjSZah%2BIDpucRPHnoNBvSrlggxRGUCv2DVSK&X-Amz-Signature=1210179191854beb053fa8aca8f84f74883671a3f50398227914944c12fe695c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLEXFRE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1DWKbXtVU0fJRw4LBNVaRRqfMmO0kmpzEamA%2BTeq1NQIgBF4QlIK0efVqdTLpO%2F%2Fq6TrpaNCHyIMabqp%2BZFd6GIgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZjJC3yfAuA3VNGByrcAzoc%2FUpveqMQLxxUCDBzG6VMOfJdWlKN%2FRmF5B5XSYcj8eD0qUXlWR39yHkzqx7PksMwZyEVLKtl%2FyleIZI7QEnVQQ6ykw%2FcVhlCevx0vOSwvZr%2FCxkhj%2BtmoP2EY3x2qLCQk1avAo4MiYlV4JVkwoKKUgeBgpdmpm99jJGe4%2FgBd5o4MZbQXPNEfsRBgT9aoS4ToxUc1gpzHJTzVZZvuNFi%2BPz41TCjkObn5qaW8cQWhUpel%2B4xiDBqOc5zFm4sJANrb9CA1NyGGPiCCTAH4oCgFi5Xau%2FGz9W4zT6XfL0iH%2FyPq2MeHxFzdXEkzkLxdamGFtcc1TluknDTZz0YD2lNX0LV2VOH4AVJ9gkHzWVlom16kEt7UEQmJwE6su6uIamRRU64w57Ln9KougkAjSnkrkvOw%2FBALkGtk2GH38g5o38BVSHa0Ni98lw4Akwo%2BXCqqWSc7Ne9fzzm24LxfJT2xgmlmJ%2F8vKKG7NQRZNqxA8GMbKx%2B7PPGTwhOZcK75w9j9UEeiRApJRthrJfdW7K4DKvnHmX9Ig0mIA%2F9ZRg0SXr5KbaQOM0%2BRwlU3ymCfo8kqi53FFRzb33wZv3oB19uiiJcTKeHW9Bp7vjUDVGoRi%2B1BPNI0ebd7dMpMPWMysIGOqUBXbn0DjHgPADDk99yt3KprSH8HFWHphTVTgbs5Ds0nBXN%2B6GrJhST%2Bf1BDDuLtzqWoK5F4t7Cobjlkwo8Enk69gMk1FPUkfifGrGurl0qGioZBZxYAuuFDh3Y2q98er8e1Ti7d7MWRv67CwwHOmtoR%2F5Tuv5RHCXw6hN7A6a7avlaMUBxiY0YOcADHjSZah%2BIDpucRPHnoNBvSrlggxRGUCv2DVSK&X-Amz-Signature=e4cba257d4e066303492d6f4178d76b4161470c15fc7b25744fcd06256938554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLEXFRE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1DWKbXtVU0fJRw4LBNVaRRqfMmO0kmpzEamA%2BTeq1NQIgBF4QlIK0efVqdTLpO%2F%2Fq6TrpaNCHyIMabqp%2BZFd6GIgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZjJC3yfAuA3VNGByrcAzoc%2FUpveqMQLxxUCDBzG6VMOfJdWlKN%2FRmF5B5XSYcj8eD0qUXlWR39yHkzqx7PksMwZyEVLKtl%2FyleIZI7QEnVQQ6ykw%2FcVhlCevx0vOSwvZr%2FCxkhj%2BtmoP2EY3x2qLCQk1avAo4MiYlV4JVkwoKKUgeBgpdmpm99jJGe4%2FgBd5o4MZbQXPNEfsRBgT9aoS4ToxUc1gpzHJTzVZZvuNFi%2BPz41TCjkObn5qaW8cQWhUpel%2B4xiDBqOc5zFm4sJANrb9CA1NyGGPiCCTAH4oCgFi5Xau%2FGz9W4zT6XfL0iH%2FyPq2MeHxFzdXEkzkLxdamGFtcc1TluknDTZz0YD2lNX0LV2VOH4AVJ9gkHzWVlom16kEt7UEQmJwE6su6uIamRRU64w57Ln9KougkAjSnkrkvOw%2FBALkGtk2GH38g5o38BVSHa0Ni98lw4Akwo%2BXCqqWSc7Ne9fzzm24LxfJT2xgmlmJ%2F8vKKG7NQRZNqxA8GMbKx%2B7PPGTwhOZcK75w9j9UEeiRApJRthrJfdW7K4DKvnHmX9Ig0mIA%2F9ZRg0SXr5KbaQOM0%2BRwlU3ymCfo8kqi53FFRzb33wZv3oB19uiiJcTKeHW9Bp7vjUDVGoRi%2B1BPNI0ebd7dMpMPWMysIGOqUBXbn0DjHgPADDk99yt3KprSH8HFWHphTVTgbs5Ds0nBXN%2B6GrJhST%2Bf1BDDuLtzqWoK5F4t7Cobjlkwo8Enk69gMk1FPUkfifGrGurl0qGioZBZxYAuuFDh3Y2q98er8e1Ti7d7MWRv67CwwHOmtoR%2F5Tuv5RHCXw6hN7A6a7avlaMUBxiY0YOcADHjSZah%2BIDpucRPHnoNBvSrlggxRGUCv2DVSK&X-Amz-Signature=9a74ef3e8252f3763b86cf54bcd6b4efb44f1f81c083cb165e69c87dcb976abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLEXFRE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1DWKbXtVU0fJRw4LBNVaRRqfMmO0kmpzEamA%2BTeq1NQIgBF4QlIK0efVqdTLpO%2F%2Fq6TrpaNCHyIMabqp%2BZFd6GIgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZjJC3yfAuA3VNGByrcAzoc%2FUpveqMQLxxUCDBzG6VMOfJdWlKN%2FRmF5B5XSYcj8eD0qUXlWR39yHkzqx7PksMwZyEVLKtl%2FyleIZI7QEnVQQ6ykw%2FcVhlCevx0vOSwvZr%2FCxkhj%2BtmoP2EY3x2qLCQk1avAo4MiYlV4JVkwoKKUgeBgpdmpm99jJGe4%2FgBd5o4MZbQXPNEfsRBgT9aoS4ToxUc1gpzHJTzVZZvuNFi%2BPz41TCjkObn5qaW8cQWhUpel%2B4xiDBqOc5zFm4sJANrb9CA1NyGGPiCCTAH4oCgFi5Xau%2FGz9W4zT6XfL0iH%2FyPq2MeHxFzdXEkzkLxdamGFtcc1TluknDTZz0YD2lNX0LV2VOH4AVJ9gkHzWVlom16kEt7UEQmJwE6su6uIamRRU64w57Ln9KougkAjSnkrkvOw%2FBALkGtk2GH38g5o38BVSHa0Ni98lw4Akwo%2BXCqqWSc7Ne9fzzm24LxfJT2xgmlmJ%2F8vKKG7NQRZNqxA8GMbKx%2B7PPGTwhOZcK75w9j9UEeiRApJRthrJfdW7K4DKvnHmX9Ig0mIA%2F9ZRg0SXr5KbaQOM0%2BRwlU3ymCfo8kqi53FFRzb33wZv3oB19uiiJcTKeHW9Bp7vjUDVGoRi%2B1BPNI0ebd7dMpMPWMysIGOqUBXbn0DjHgPADDk99yt3KprSH8HFWHphTVTgbs5Ds0nBXN%2B6GrJhST%2Bf1BDDuLtzqWoK5F4t7Cobjlkwo8Enk69gMk1FPUkfifGrGurl0qGioZBZxYAuuFDh3Y2q98er8e1Ti7d7MWRv67CwwHOmtoR%2F5Tuv5RHCXw6hN7A6a7avlaMUBxiY0YOcADHjSZah%2BIDpucRPHnoNBvSrlggxRGUCv2DVSK&X-Amz-Signature=37b5798749fc1481c49c87886720193e7c30821fff755d2472684e728de94347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
