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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VN3BQFJ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHg2boBqfRKqBDHnNrsiBgAqe1ozWoGG1UosxIRoN%2F4UAiEA7QCqCqCRXyHbK6z3%2BeWT6mM6BsF%2FBVUfFMwjkdnfizUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDP2%2FapGW8vKzBeDftCrcA3KS8Rr0M6xmlmD3WPoN8JTUIjnzblozydIjPq6QJSkVM9yZPqQ7R4gg%2FpTqhZ%2FsWBZQyM5qfkT8yW4xdTzWMIVY2EW2ZQocHkOSiY1gHzpPQuTu%2BjjVzaxu0TIwEexuDLhc4zSIzcpaJzgrxBV%2FQ7ckSoSjy9N%2BFg9JcyPzZsMxIKLFscKaJR8QhSweZwME7nLJw4I85qTXkHkLu3xUpTls4UuAt2CZTGXlINNaucXPoJAduVuLXcjae6im0V2a9DRBKFOW1M1FW9gTdTvFI2MgIPvE1RoIOZkg5UJu%2BWzKXS7QMtx0Avu4%2BLFqWkSG9uLnANp0dlIDkEog%2FETtIgmqExSq3ao5NqpsnFMchUgtmhP1Lqfpu7jqS4V12wvBw2maAovQc4U3lHYKpbWICBL6LkTWTqaO%2BibSoyZNU6ol6k3hvz8bpgtr2gx1QVgB%2FuOxii7LrKToe2MDZL%2F1EzX6NmWXTl5zYkT%2FHDQH%2BHG9JFIjEgu0JdtM1ktsi4g4ALepXSfQKyLQr0NgIi8cf6XQO3KBZZDITsJNLH9Xgc5Qwl54Q7TcUTCPhPSbpa73xlSa8hv%2BDEGk7KOGgs%2FoXKNbPatpCCW6t7p7lyXfsEpoo84opNaS%2BS%2Bpag2gMKC0v8IGOqUBcV%2B0WGdu2%2B7325COdWteifbtP9CImlC5w3w2C5INUr8enRQDLBIyEi%2FfeMALZHdz6TvLu%2BqFAl70Iy9iy%2FRrnfCmv5sWHYa1Q7vwItxTZ5GO4OlCla%2BMzdFqgVtIYW8HNnoLw4%2F%2BpMGGTYEgJ6dAcISV4V3p3ayaOUJwgXQg%2BJn801FM4%2FYuKEdKV2a3bkm%2FPqsew51T4t%2BWW%2FU9MWi7wjRWpHHW&X-Amz-Signature=ca70412ed9c8e96d1bbb71397c65a689c8a7b34230361036808881641547d94d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VN3BQFJ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHg2boBqfRKqBDHnNrsiBgAqe1ozWoGG1UosxIRoN%2F4UAiEA7QCqCqCRXyHbK6z3%2BeWT6mM6BsF%2FBVUfFMwjkdnfizUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDP2%2FapGW8vKzBeDftCrcA3KS8Rr0M6xmlmD3WPoN8JTUIjnzblozydIjPq6QJSkVM9yZPqQ7R4gg%2FpTqhZ%2FsWBZQyM5qfkT8yW4xdTzWMIVY2EW2ZQocHkOSiY1gHzpPQuTu%2BjjVzaxu0TIwEexuDLhc4zSIzcpaJzgrxBV%2FQ7ckSoSjy9N%2BFg9JcyPzZsMxIKLFscKaJR8QhSweZwME7nLJw4I85qTXkHkLu3xUpTls4UuAt2CZTGXlINNaucXPoJAduVuLXcjae6im0V2a9DRBKFOW1M1FW9gTdTvFI2MgIPvE1RoIOZkg5UJu%2BWzKXS7QMtx0Avu4%2BLFqWkSG9uLnANp0dlIDkEog%2FETtIgmqExSq3ao5NqpsnFMchUgtmhP1Lqfpu7jqS4V12wvBw2maAovQc4U3lHYKpbWICBL6LkTWTqaO%2BibSoyZNU6ol6k3hvz8bpgtr2gx1QVgB%2FuOxii7LrKToe2MDZL%2F1EzX6NmWXTl5zYkT%2FHDQH%2BHG9JFIjEgu0JdtM1ktsi4g4ALepXSfQKyLQr0NgIi8cf6XQO3KBZZDITsJNLH9Xgc5Qwl54Q7TcUTCPhPSbpa73xlSa8hv%2BDEGk7KOGgs%2FoXKNbPatpCCW6t7p7lyXfsEpoo84opNaS%2BS%2Bpag2gMKC0v8IGOqUBcV%2B0WGdu2%2B7325COdWteifbtP9CImlC5w3w2C5INUr8enRQDLBIyEi%2FfeMALZHdz6TvLu%2BqFAl70Iy9iy%2FRrnfCmv5sWHYa1Q7vwItxTZ5GO4OlCla%2BMzdFqgVtIYW8HNnoLw4%2F%2BpMGGTYEgJ6dAcISV4V3p3ayaOUJwgXQg%2BJn801FM4%2FYuKEdKV2a3bkm%2FPqsew51T4t%2BWW%2FU9MWi7wjRWpHHW&X-Amz-Signature=e720aa98775a0bac7c16b70f97692332e4ac2b61674515c67968771ddb8748e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VN3BQFJ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHg2boBqfRKqBDHnNrsiBgAqe1ozWoGG1UosxIRoN%2F4UAiEA7QCqCqCRXyHbK6z3%2BeWT6mM6BsF%2FBVUfFMwjkdnfizUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDP2%2FapGW8vKzBeDftCrcA3KS8Rr0M6xmlmD3WPoN8JTUIjnzblozydIjPq6QJSkVM9yZPqQ7R4gg%2FpTqhZ%2FsWBZQyM5qfkT8yW4xdTzWMIVY2EW2ZQocHkOSiY1gHzpPQuTu%2BjjVzaxu0TIwEexuDLhc4zSIzcpaJzgrxBV%2FQ7ckSoSjy9N%2BFg9JcyPzZsMxIKLFscKaJR8QhSweZwME7nLJw4I85qTXkHkLu3xUpTls4UuAt2CZTGXlINNaucXPoJAduVuLXcjae6im0V2a9DRBKFOW1M1FW9gTdTvFI2MgIPvE1RoIOZkg5UJu%2BWzKXS7QMtx0Avu4%2BLFqWkSG9uLnANp0dlIDkEog%2FETtIgmqExSq3ao5NqpsnFMchUgtmhP1Lqfpu7jqS4V12wvBw2maAovQc4U3lHYKpbWICBL6LkTWTqaO%2BibSoyZNU6ol6k3hvz8bpgtr2gx1QVgB%2FuOxii7LrKToe2MDZL%2F1EzX6NmWXTl5zYkT%2FHDQH%2BHG9JFIjEgu0JdtM1ktsi4g4ALepXSfQKyLQr0NgIi8cf6XQO3KBZZDITsJNLH9Xgc5Qwl54Q7TcUTCPhPSbpa73xlSa8hv%2BDEGk7KOGgs%2FoXKNbPatpCCW6t7p7lyXfsEpoo84opNaS%2BS%2Bpag2gMKC0v8IGOqUBcV%2B0WGdu2%2B7325COdWteifbtP9CImlC5w3w2C5INUr8enRQDLBIyEi%2FfeMALZHdz6TvLu%2BqFAl70Iy9iy%2FRrnfCmv5sWHYa1Q7vwItxTZ5GO4OlCla%2BMzdFqgVtIYW8HNnoLw4%2F%2BpMGGTYEgJ6dAcISV4V3p3ayaOUJwgXQg%2BJn801FM4%2FYuKEdKV2a3bkm%2FPqsew51T4t%2BWW%2FU9MWi7wjRWpHHW&X-Amz-Signature=0b3caa4f5b56118909bc90913d59427c066f3f9bdd1b2712eb7320c8778fdc2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VN3BQFJ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHg2boBqfRKqBDHnNrsiBgAqe1ozWoGG1UosxIRoN%2F4UAiEA7QCqCqCRXyHbK6z3%2BeWT6mM6BsF%2FBVUfFMwjkdnfizUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDP2%2FapGW8vKzBeDftCrcA3KS8Rr0M6xmlmD3WPoN8JTUIjnzblozydIjPq6QJSkVM9yZPqQ7R4gg%2FpTqhZ%2FsWBZQyM5qfkT8yW4xdTzWMIVY2EW2ZQocHkOSiY1gHzpPQuTu%2BjjVzaxu0TIwEexuDLhc4zSIzcpaJzgrxBV%2FQ7ckSoSjy9N%2BFg9JcyPzZsMxIKLFscKaJR8QhSweZwME7nLJw4I85qTXkHkLu3xUpTls4UuAt2CZTGXlINNaucXPoJAduVuLXcjae6im0V2a9DRBKFOW1M1FW9gTdTvFI2MgIPvE1RoIOZkg5UJu%2BWzKXS7QMtx0Avu4%2BLFqWkSG9uLnANp0dlIDkEog%2FETtIgmqExSq3ao5NqpsnFMchUgtmhP1Lqfpu7jqS4V12wvBw2maAovQc4U3lHYKpbWICBL6LkTWTqaO%2BibSoyZNU6ol6k3hvz8bpgtr2gx1QVgB%2FuOxii7LrKToe2MDZL%2F1EzX6NmWXTl5zYkT%2FHDQH%2BHG9JFIjEgu0JdtM1ktsi4g4ALepXSfQKyLQr0NgIi8cf6XQO3KBZZDITsJNLH9Xgc5Qwl54Q7TcUTCPhPSbpa73xlSa8hv%2BDEGk7KOGgs%2FoXKNbPatpCCW6t7p7lyXfsEpoo84opNaS%2BS%2Bpag2gMKC0v8IGOqUBcV%2B0WGdu2%2B7325COdWteifbtP9CImlC5w3w2C5INUr8enRQDLBIyEi%2FfeMALZHdz6TvLu%2BqFAl70Iy9iy%2FRrnfCmv5sWHYa1Q7vwItxTZ5GO4OlCla%2BMzdFqgVtIYW8HNnoLw4%2F%2BpMGGTYEgJ6dAcISV4V3p3ayaOUJwgXQg%2BJn801FM4%2FYuKEdKV2a3bkm%2FPqsew51T4t%2BWW%2FU9MWi7wjRWpHHW&X-Amz-Signature=dac446ae8bd97b9432f5fb3c41a3f10a0f5370237e7a062ba8e95c1810ffd088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VN3BQFJ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHg2boBqfRKqBDHnNrsiBgAqe1ozWoGG1UosxIRoN%2F4UAiEA7QCqCqCRXyHbK6z3%2BeWT6mM6BsF%2FBVUfFMwjkdnfizUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDP2%2FapGW8vKzBeDftCrcA3KS8Rr0M6xmlmD3WPoN8JTUIjnzblozydIjPq6QJSkVM9yZPqQ7R4gg%2FpTqhZ%2FsWBZQyM5qfkT8yW4xdTzWMIVY2EW2ZQocHkOSiY1gHzpPQuTu%2BjjVzaxu0TIwEexuDLhc4zSIzcpaJzgrxBV%2FQ7ckSoSjy9N%2BFg9JcyPzZsMxIKLFscKaJR8QhSweZwME7nLJw4I85qTXkHkLu3xUpTls4UuAt2CZTGXlINNaucXPoJAduVuLXcjae6im0V2a9DRBKFOW1M1FW9gTdTvFI2MgIPvE1RoIOZkg5UJu%2BWzKXS7QMtx0Avu4%2BLFqWkSG9uLnANp0dlIDkEog%2FETtIgmqExSq3ao5NqpsnFMchUgtmhP1Lqfpu7jqS4V12wvBw2maAovQc4U3lHYKpbWICBL6LkTWTqaO%2BibSoyZNU6ol6k3hvz8bpgtr2gx1QVgB%2FuOxii7LrKToe2MDZL%2F1EzX6NmWXTl5zYkT%2FHDQH%2BHG9JFIjEgu0JdtM1ktsi4g4ALepXSfQKyLQr0NgIi8cf6XQO3KBZZDITsJNLH9Xgc5Qwl54Q7TcUTCPhPSbpa73xlSa8hv%2BDEGk7KOGgs%2FoXKNbPatpCCW6t7p7lyXfsEpoo84opNaS%2BS%2Bpag2gMKC0v8IGOqUBcV%2B0WGdu2%2B7325COdWteifbtP9CImlC5w3w2C5INUr8enRQDLBIyEi%2FfeMALZHdz6TvLu%2BqFAl70Iy9iy%2FRrnfCmv5sWHYa1Q7vwItxTZ5GO4OlCla%2BMzdFqgVtIYW8HNnoLw4%2F%2BpMGGTYEgJ6dAcISV4V3p3ayaOUJwgXQg%2BJn801FM4%2FYuKEdKV2a3bkm%2FPqsew51T4t%2BWW%2FU9MWi7wjRWpHHW&X-Amz-Signature=c40c127cc2bd5cf293e56d11cf5621d30c8b6431bd65e96fb09b9916e4c76e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VN3BQFJ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHg2boBqfRKqBDHnNrsiBgAqe1ozWoGG1UosxIRoN%2F4UAiEA7QCqCqCRXyHbK6z3%2BeWT6mM6BsF%2FBVUfFMwjkdnfizUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDP2%2FapGW8vKzBeDftCrcA3KS8Rr0M6xmlmD3WPoN8JTUIjnzblozydIjPq6QJSkVM9yZPqQ7R4gg%2FpTqhZ%2FsWBZQyM5qfkT8yW4xdTzWMIVY2EW2ZQocHkOSiY1gHzpPQuTu%2BjjVzaxu0TIwEexuDLhc4zSIzcpaJzgrxBV%2FQ7ckSoSjy9N%2BFg9JcyPzZsMxIKLFscKaJR8QhSweZwME7nLJw4I85qTXkHkLu3xUpTls4UuAt2CZTGXlINNaucXPoJAduVuLXcjae6im0V2a9DRBKFOW1M1FW9gTdTvFI2MgIPvE1RoIOZkg5UJu%2BWzKXS7QMtx0Avu4%2BLFqWkSG9uLnANp0dlIDkEog%2FETtIgmqExSq3ao5NqpsnFMchUgtmhP1Lqfpu7jqS4V12wvBw2maAovQc4U3lHYKpbWICBL6LkTWTqaO%2BibSoyZNU6ol6k3hvz8bpgtr2gx1QVgB%2FuOxii7LrKToe2MDZL%2F1EzX6NmWXTl5zYkT%2FHDQH%2BHG9JFIjEgu0JdtM1ktsi4g4ALepXSfQKyLQr0NgIi8cf6XQO3KBZZDITsJNLH9Xgc5Qwl54Q7TcUTCPhPSbpa73xlSa8hv%2BDEGk7KOGgs%2FoXKNbPatpCCW6t7p7lyXfsEpoo84opNaS%2BS%2Bpag2gMKC0v8IGOqUBcV%2B0WGdu2%2B7325COdWteifbtP9CImlC5w3w2C5INUr8enRQDLBIyEi%2FfeMALZHdz6TvLu%2BqFAl70Iy9iy%2FRrnfCmv5sWHYa1Q7vwItxTZ5GO4OlCla%2BMzdFqgVtIYW8HNnoLw4%2F%2BpMGGTYEgJ6dAcISV4V3p3ayaOUJwgXQg%2BJn801FM4%2FYuKEdKV2a3bkm%2FPqsew51T4t%2BWW%2FU9MWi7wjRWpHHW&X-Amz-Signature=bf4f1931c71d5e41422e1a84d4ad74f045acce9ffaf123271d0974c60f11a8dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VN3BQFJ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHg2boBqfRKqBDHnNrsiBgAqe1ozWoGG1UosxIRoN%2F4UAiEA7QCqCqCRXyHbK6z3%2BeWT6mM6BsF%2FBVUfFMwjkdnfizUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDP2%2FapGW8vKzBeDftCrcA3KS8Rr0M6xmlmD3WPoN8JTUIjnzblozydIjPq6QJSkVM9yZPqQ7R4gg%2FpTqhZ%2FsWBZQyM5qfkT8yW4xdTzWMIVY2EW2ZQocHkOSiY1gHzpPQuTu%2BjjVzaxu0TIwEexuDLhc4zSIzcpaJzgrxBV%2FQ7ckSoSjy9N%2BFg9JcyPzZsMxIKLFscKaJR8QhSweZwME7nLJw4I85qTXkHkLu3xUpTls4UuAt2CZTGXlINNaucXPoJAduVuLXcjae6im0V2a9DRBKFOW1M1FW9gTdTvFI2MgIPvE1RoIOZkg5UJu%2BWzKXS7QMtx0Avu4%2BLFqWkSG9uLnANp0dlIDkEog%2FETtIgmqExSq3ao5NqpsnFMchUgtmhP1Lqfpu7jqS4V12wvBw2maAovQc4U3lHYKpbWICBL6LkTWTqaO%2BibSoyZNU6ol6k3hvz8bpgtr2gx1QVgB%2FuOxii7LrKToe2MDZL%2F1EzX6NmWXTl5zYkT%2FHDQH%2BHG9JFIjEgu0JdtM1ktsi4g4ALepXSfQKyLQr0NgIi8cf6XQO3KBZZDITsJNLH9Xgc5Qwl54Q7TcUTCPhPSbpa73xlSa8hv%2BDEGk7KOGgs%2FoXKNbPatpCCW6t7p7lyXfsEpoo84opNaS%2BS%2Bpag2gMKC0v8IGOqUBcV%2B0WGdu2%2B7325COdWteifbtP9CImlC5w3w2C5INUr8enRQDLBIyEi%2FfeMALZHdz6TvLu%2BqFAl70Iy9iy%2FRrnfCmv5sWHYa1Q7vwItxTZ5GO4OlCla%2BMzdFqgVtIYW8HNnoLw4%2F%2BpMGGTYEgJ6dAcISV4V3p3ayaOUJwgXQg%2BJn801FM4%2FYuKEdKV2a3bkm%2FPqsew51T4t%2BWW%2FU9MWi7wjRWpHHW&X-Amz-Signature=84945996d0342cf311931bcd6f1bba10e0af804e5cf1cd6832fdddab8aec7ce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
