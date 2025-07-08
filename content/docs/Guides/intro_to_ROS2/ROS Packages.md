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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFE77XXN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD73tC6z48hegUvxWvHIvB4ynrM4ZYaQBKcWAZBM3gsRAIhAN8UJWz%2B6Adn7v1ghj2Vu%2F6bqsKmzZl3B3aCL%2BECO14kKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUI86tnO79xkDn7tUq3ANrPyKEQpWrrQmekb8mVwdtSHTlCNJ3Nxf%2BdZTbT%2BpCEbTf%2BIdl61cW%2FUID9I32NxQPDwDCTxPU3RFTPsRVX2Hp1VemzReddbbYxNvBXxAG%2BIQful0TBJz0XKnsH9PiuGAmGdHVH31IfcQmr7LCIDuvvHbdk%2FPIRtTm7m55q4GYBiZMKp71xxD5PSgsPBEmp67s1z%2FvA2SLxgMKQNbP6h74SxA8tyKewIRlyI0jS9EpXjoWxOytpNismnXHsR73eUHpHlC0w%2FJa7O6S55GD%2BLRs%2BOXfMeWdkp5YOoEMpWYsDnhzRaWTaCgwGqWoi3ZjD6BstLXPD5LTwyDRR6mtRWNSx6xTEQkrGz6IqUnJkwIu7cag30ql7%2BnxXLYNJpNoFcP2%2FUH5efNQ%2F0rzmDJJ87mMLLLfu9G6oCsQoH6D%2FZPhHKtwfP9km4eagOB80yOTX5qkQ38EAklQqkqGq3z1TcYZcSz290BXO%2BgWNYMwlVgUfA4BToqu%2Fu3lHZoPadjmYhEqC0ksQd8iCmfoyH%2BaOZo%2B2zAq%2F%2B%2F3CGxqbTAlp9UIhsvyYmvSCDhAp8Ym4VuQT%2B33h5a4zycIpYsV0BvGoF7V21Wjfnj2rdzUgmHwvLm8kxxM08a3z66m9z9egjC0rbXDBjqkAUvxw4Fm6yEuGkw4onpN1tBzPFwYja1RS8ZdVhkT39Lz%2BDu3LrOxU7dfF2U6io7BBQdjUgbO%2Fo%2FJ2I6Th8Uv%2FXyfkFfe8njIta%2BOUS1TB%2FQHXsSlJjTTGdk6kI7meyvefBoIbYB2YgcKd%2B1F7aw%2B%2BcF%2Bltv%2FPdGKZ%2Brsyc4Ys4JB8KUC%2FS%2FZq1vy5Wue8RB%2B8lfOBsdkQZ1hui4XC4aORhi0pnPb&X-Amz-Signature=fd7551617c19d4e851cc89b212be9a7c2c16d03e0c864189b1acdd22c99a94ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFE77XXN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD73tC6z48hegUvxWvHIvB4ynrM4ZYaQBKcWAZBM3gsRAIhAN8UJWz%2B6Adn7v1ghj2Vu%2F6bqsKmzZl3B3aCL%2BECO14kKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUI86tnO79xkDn7tUq3ANrPyKEQpWrrQmekb8mVwdtSHTlCNJ3Nxf%2BdZTbT%2BpCEbTf%2BIdl61cW%2FUID9I32NxQPDwDCTxPU3RFTPsRVX2Hp1VemzReddbbYxNvBXxAG%2BIQful0TBJz0XKnsH9PiuGAmGdHVH31IfcQmr7LCIDuvvHbdk%2FPIRtTm7m55q4GYBiZMKp71xxD5PSgsPBEmp67s1z%2FvA2SLxgMKQNbP6h74SxA8tyKewIRlyI0jS9EpXjoWxOytpNismnXHsR73eUHpHlC0w%2FJa7O6S55GD%2BLRs%2BOXfMeWdkp5YOoEMpWYsDnhzRaWTaCgwGqWoi3ZjD6BstLXPD5LTwyDRR6mtRWNSx6xTEQkrGz6IqUnJkwIu7cag30ql7%2BnxXLYNJpNoFcP2%2FUH5efNQ%2F0rzmDJJ87mMLLLfu9G6oCsQoH6D%2FZPhHKtwfP9km4eagOB80yOTX5qkQ38EAklQqkqGq3z1TcYZcSz290BXO%2BgWNYMwlVgUfA4BToqu%2Fu3lHZoPadjmYhEqC0ksQd8iCmfoyH%2BaOZo%2B2zAq%2F%2B%2F3CGxqbTAlp9UIhsvyYmvSCDhAp8Ym4VuQT%2B33h5a4zycIpYsV0BvGoF7V21Wjfnj2rdzUgmHwvLm8kxxM08a3z66m9z9egjC0rbXDBjqkAUvxw4Fm6yEuGkw4onpN1tBzPFwYja1RS8ZdVhkT39Lz%2BDu3LrOxU7dfF2U6io7BBQdjUgbO%2Fo%2FJ2I6Th8Uv%2FXyfkFfe8njIta%2BOUS1TB%2FQHXsSlJjTTGdk6kI7meyvefBoIbYB2YgcKd%2B1F7aw%2B%2BcF%2Bltv%2FPdGKZ%2Brsyc4Ys4JB8KUC%2FS%2FZq1vy5Wue8RB%2B8lfOBsdkQZ1hui4XC4aORhi0pnPb&X-Amz-Signature=7492614a1dedab694373db33624be7e3fae434c9015999151a4c0e89caca9d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFE77XXN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD73tC6z48hegUvxWvHIvB4ynrM4ZYaQBKcWAZBM3gsRAIhAN8UJWz%2B6Adn7v1ghj2Vu%2F6bqsKmzZl3B3aCL%2BECO14kKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUI86tnO79xkDn7tUq3ANrPyKEQpWrrQmekb8mVwdtSHTlCNJ3Nxf%2BdZTbT%2BpCEbTf%2BIdl61cW%2FUID9I32NxQPDwDCTxPU3RFTPsRVX2Hp1VemzReddbbYxNvBXxAG%2BIQful0TBJz0XKnsH9PiuGAmGdHVH31IfcQmr7LCIDuvvHbdk%2FPIRtTm7m55q4GYBiZMKp71xxD5PSgsPBEmp67s1z%2FvA2SLxgMKQNbP6h74SxA8tyKewIRlyI0jS9EpXjoWxOytpNismnXHsR73eUHpHlC0w%2FJa7O6S55GD%2BLRs%2BOXfMeWdkp5YOoEMpWYsDnhzRaWTaCgwGqWoi3ZjD6BstLXPD5LTwyDRR6mtRWNSx6xTEQkrGz6IqUnJkwIu7cag30ql7%2BnxXLYNJpNoFcP2%2FUH5efNQ%2F0rzmDJJ87mMLLLfu9G6oCsQoH6D%2FZPhHKtwfP9km4eagOB80yOTX5qkQ38EAklQqkqGq3z1TcYZcSz290BXO%2BgWNYMwlVgUfA4BToqu%2Fu3lHZoPadjmYhEqC0ksQd8iCmfoyH%2BaOZo%2B2zAq%2F%2B%2F3CGxqbTAlp9UIhsvyYmvSCDhAp8Ym4VuQT%2B33h5a4zycIpYsV0BvGoF7V21Wjfnj2rdzUgmHwvLm8kxxM08a3z66m9z9egjC0rbXDBjqkAUvxw4Fm6yEuGkw4onpN1tBzPFwYja1RS8ZdVhkT39Lz%2BDu3LrOxU7dfF2U6io7BBQdjUgbO%2Fo%2FJ2I6Th8Uv%2FXyfkFfe8njIta%2BOUS1TB%2FQHXsSlJjTTGdk6kI7meyvefBoIbYB2YgcKd%2B1F7aw%2B%2BcF%2Bltv%2FPdGKZ%2Brsyc4Ys4JB8KUC%2FS%2FZq1vy5Wue8RB%2B8lfOBsdkQZ1hui4XC4aORhi0pnPb&X-Amz-Signature=d92cb5b05b6877a1ebde89ebb7fa781e902ce62f9da50ef780695bebe4949078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFE77XXN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD73tC6z48hegUvxWvHIvB4ynrM4ZYaQBKcWAZBM3gsRAIhAN8UJWz%2B6Adn7v1ghj2Vu%2F6bqsKmzZl3B3aCL%2BECO14kKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUI86tnO79xkDn7tUq3ANrPyKEQpWrrQmekb8mVwdtSHTlCNJ3Nxf%2BdZTbT%2BpCEbTf%2BIdl61cW%2FUID9I32NxQPDwDCTxPU3RFTPsRVX2Hp1VemzReddbbYxNvBXxAG%2BIQful0TBJz0XKnsH9PiuGAmGdHVH31IfcQmr7LCIDuvvHbdk%2FPIRtTm7m55q4GYBiZMKp71xxD5PSgsPBEmp67s1z%2FvA2SLxgMKQNbP6h74SxA8tyKewIRlyI0jS9EpXjoWxOytpNismnXHsR73eUHpHlC0w%2FJa7O6S55GD%2BLRs%2BOXfMeWdkp5YOoEMpWYsDnhzRaWTaCgwGqWoi3ZjD6BstLXPD5LTwyDRR6mtRWNSx6xTEQkrGz6IqUnJkwIu7cag30ql7%2BnxXLYNJpNoFcP2%2FUH5efNQ%2F0rzmDJJ87mMLLLfu9G6oCsQoH6D%2FZPhHKtwfP9km4eagOB80yOTX5qkQ38EAklQqkqGq3z1TcYZcSz290BXO%2BgWNYMwlVgUfA4BToqu%2Fu3lHZoPadjmYhEqC0ksQd8iCmfoyH%2BaOZo%2B2zAq%2F%2B%2F3CGxqbTAlp9UIhsvyYmvSCDhAp8Ym4VuQT%2B33h5a4zycIpYsV0BvGoF7V21Wjfnj2rdzUgmHwvLm8kxxM08a3z66m9z9egjC0rbXDBjqkAUvxw4Fm6yEuGkw4onpN1tBzPFwYja1RS8ZdVhkT39Lz%2BDu3LrOxU7dfF2U6io7BBQdjUgbO%2Fo%2FJ2I6Th8Uv%2FXyfkFfe8njIta%2BOUS1TB%2FQHXsSlJjTTGdk6kI7meyvefBoIbYB2YgcKd%2B1F7aw%2B%2BcF%2Bltv%2FPdGKZ%2Brsyc4Ys4JB8KUC%2FS%2FZq1vy5Wue8RB%2B8lfOBsdkQZ1hui4XC4aORhi0pnPb&X-Amz-Signature=a4de0cf59f3d27b07c63d2638e73358f8f0a43f68c7eb68f82a4b984a4f968d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFE77XXN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD73tC6z48hegUvxWvHIvB4ynrM4ZYaQBKcWAZBM3gsRAIhAN8UJWz%2B6Adn7v1ghj2Vu%2F6bqsKmzZl3B3aCL%2BECO14kKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUI86tnO79xkDn7tUq3ANrPyKEQpWrrQmekb8mVwdtSHTlCNJ3Nxf%2BdZTbT%2BpCEbTf%2BIdl61cW%2FUID9I32NxQPDwDCTxPU3RFTPsRVX2Hp1VemzReddbbYxNvBXxAG%2BIQful0TBJz0XKnsH9PiuGAmGdHVH31IfcQmr7LCIDuvvHbdk%2FPIRtTm7m55q4GYBiZMKp71xxD5PSgsPBEmp67s1z%2FvA2SLxgMKQNbP6h74SxA8tyKewIRlyI0jS9EpXjoWxOytpNismnXHsR73eUHpHlC0w%2FJa7O6S55GD%2BLRs%2BOXfMeWdkp5YOoEMpWYsDnhzRaWTaCgwGqWoi3ZjD6BstLXPD5LTwyDRR6mtRWNSx6xTEQkrGz6IqUnJkwIu7cag30ql7%2BnxXLYNJpNoFcP2%2FUH5efNQ%2F0rzmDJJ87mMLLLfu9G6oCsQoH6D%2FZPhHKtwfP9km4eagOB80yOTX5qkQ38EAklQqkqGq3z1TcYZcSz290BXO%2BgWNYMwlVgUfA4BToqu%2Fu3lHZoPadjmYhEqC0ksQd8iCmfoyH%2BaOZo%2B2zAq%2F%2B%2F3CGxqbTAlp9UIhsvyYmvSCDhAp8Ym4VuQT%2B33h5a4zycIpYsV0BvGoF7V21Wjfnj2rdzUgmHwvLm8kxxM08a3z66m9z9egjC0rbXDBjqkAUvxw4Fm6yEuGkw4onpN1tBzPFwYja1RS8ZdVhkT39Lz%2BDu3LrOxU7dfF2U6io7BBQdjUgbO%2Fo%2FJ2I6Th8Uv%2FXyfkFfe8njIta%2BOUS1TB%2FQHXsSlJjTTGdk6kI7meyvefBoIbYB2YgcKd%2B1F7aw%2B%2BcF%2Bltv%2FPdGKZ%2Brsyc4Ys4JB8KUC%2FS%2FZq1vy5Wue8RB%2B8lfOBsdkQZ1hui4XC4aORhi0pnPb&X-Amz-Signature=511940e723ed62aa674cbc01906c045227d60b4a83c46468377236b0e9dfa3d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFE77XXN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD73tC6z48hegUvxWvHIvB4ynrM4ZYaQBKcWAZBM3gsRAIhAN8UJWz%2B6Adn7v1ghj2Vu%2F6bqsKmzZl3B3aCL%2BECO14kKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUI86tnO79xkDn7tUq3ANrPyKEQpWrrQmekb8mVwdtSHTlCNJ3Nxf%2BdZTbT%2BpCEbTf%2BIdl61cW%2FUID9I32NxQPDwDCTxPU3RFTPsRVX2Hp1VemzReddbbYxNvBXxAG%2BIQful0TBJz0XKnsH9PiuGAmGdHVH31IfcQmr7LCIDuvvHbdk%2FPIRtTm7m55q4GYBiZMKp71xxD5PSgsPBEmp67s1z%2FvA2SLxgMKQNbP6h74SxA8tyKewIRlyI0jS9EpXjoWxOytpNismnXHsR73eUHpHlC0w%2FJa7O6S55GD%2BLRs%2BOXfMeWdkp5YOoEMpWYsDnhzRaWTaCgwGqWoi3ZjD6BstLXPD5LTwyDRR6mtRWNSx6xTEQkrGz6IqUnJkwIu7cag30ql7%2BnxXLYNJpNoFcP2%2FUH5efNQ%2F0rzmDJJ87mMLLLfu9G6oCsQoH6D%2FZPhHKtwfP9km4eagOB80yOTX5qkQ38EAklQqkqGq3z1TcYZcSz290BXO%2BgWNYMwlVgUfA4BToqu%2Fu3lHZoPadjmYhEqC0ksQd8iCmfoyH%2BaOZo%2B2zAq%2F%2B%2F3CGxqbTAlp9UIhsvyYmvSCDhAp8Ym4VuQT%2B33h5a4zycIpYsV0BvGoF7V21Wjfnj2rdzUgmHwvLm8kxxM08a3z66m9z9egjC0rbXDBjqkAUvxw4Fm6yEuGkw4onpN1tBzPFwYja1RS8ZdVhkT39Lz%2BDu3LrOxU7dfF2U6io7BBQdjUgbO%2Fo%2FJ2I6Th8Uv%2FXyfkFfe8njIta%2BOUS1TB%2FQHXsSlJjTTGdk6kI7meyvefBoIbYB2YgcKd%2B1F7aw%2B%2BcF%2Bltv%2FPdGKZ%2Brsyc4Ys4JB8KUC%2FS%2FZq1vy5Wue8RB%2B8lfOBsdkQZ1hui4XC4aORhi0pnPb&X-Amz-Signature=9781f2bc070b3202c159100da7ef7a94e5aea4b05a3454ba05b9d0658d6878a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFE77XXN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD73tC6z48hegUvxWvHIvB4ynrM4ZYaQBKcWAZBM3gsRAIhAN8UJWz%2B6Adn7v1ghj2Vu%2F6bqsKmzZl3B3aCL%2BECO14kKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUI86tnO79xkDn7tUq3ANrPyKEQpWrrQmekb8mVwdtSHTlCNJ3Nxf%2BdZTbT%2BpCEbTf%2BIdl61cW%2FUID9I32NxQPDwDCTxPU3RFTPsRVX2Hp1VemzReddbbYxNvBXxAG%2BIQful0TBJz0XKnsH9PiuGAmGdHVH31IfcQmr7LCIDuvvHbdk%2FPIRtTm7m55q4GYBiZMKp71xxD5PSgsPBEmp67s1z%2FvA2SLxgMKQNbP6h74SxA8tyKewIRlyI0jS9EpXjoWxOytpNismnXHsR73eUHpHlC0w%2FJa7O6S55GD%2BLRs%2BOXfMeWdkp5YOoEMpWYsDnhzRaWTaCgwGqWoi3ZjD6BstLXPD5LTwyDRR6mtRWNSx6xTEQkrGz6IqUnJkwIu7cag30ql7%2BnxXLYNJpNoFcP2%2FUH5efNQ%2F0rzmDJJ87mMLLLfu9G6oCsQoH6D%2FZPhHKtwfP9km4eagOB80yOTX5qkQ38EAklQqkqGq3z1TcYZcSz290BXO%2BgWNYMwlVgUfA4BToqu%2Fu3lHZoPadjmYhEqC0ksQd8iCmfoyH%2BaOZo%2B2zAq%2F%2B%2F3CGxqbTAlp9UIhsvyYmvSCDhAp8Ym4VuQT%2B33h5a4zycIpYsV0BvGoF7V21Wjfnj2rdzUgmHwvLm8kxxM08a3z66m9z9egjC0rbXDBjqkAUvxw4Fm6yEuGkw4onpN1tBzPFwYja1RS8ZdVhkT39Lz%2BDu3LrOxU7dfF2U6io7BBQdjUgbO%2Fo%2FJ2I6Th8Uv%2FXyfkFfe8njIta%2BOUS1TB%2FQHXsSlJjTTGdk6kI7meyvefBoIbYB2YgcKd%2B1F7aw%2B%2BcF%2Bltv%2FPdGKZ%2Brsyc4Ys4JB8KUC%2FS%2FZq1vy5Wue8RB%2B8lfOBsdkQZ1hui4XC4aORhi0pnPb&X-Amz-Signature=8ddcd0fb708eba700f3b1e101432486ec52c49f924dafbd6ac174b2e7a84a513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
