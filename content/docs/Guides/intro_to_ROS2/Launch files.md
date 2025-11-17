---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

This is where `ROS` launch files come in.

`ROS` launch files are files where multiple nodes can be launched from all stored in one place.

First, create a folder called `launch` in the root folder of the package and inside launch create a file called `python_params_launch.py` 

inside we first import the `ROS` libraries

```docker
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node
```

Then we create a function called `generate_launch_description()`

in this function, we first define which nodes we want to run. In our case we want to replicate the command `ros2 run my_package param_test` and setting the parameter of that node to earth

```python
def generate_launch_description():
	  node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
```

 Then, we have to return a `LaunchDescription` object which takes a list of `ROS` nodes we want to run.

```python
def generate_launch_description():
    return LaunchDescription([
			node
    ])
```

**NOTE:** how this is basically the same as `ros2 run my_package param_test`

## Solution

```python
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node

def generate_launch_description():
    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
    return LaunchDescription(
        [node]
        )
```

# Registering the launch file to the workspace

To register the launch file we have to go into `setup.py` and add in 3 different lines shown below:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FMTOWZ%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz%2BhY37yDNqVkbjntms5Xk2mTacYKRkE6XehHISrTLSAIhAK4Sv3FEu6XS6Js5wyowoQOZDvrVlien6F43AyeEOdVoKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn9IRp6H%2BxmUYHxBUq3AOfwE1WQO6E2Kg3FsnFko75fWGnZcb2knBByUx%2F50BsKpskIoOSLxkBedwFlL5x5KEEA%2Fe7cs3n7xJuPwdZivUborU5eDetkbYhiVBL1%2FKOjc2ioBVHEzHA%2B7xTzPQfrO2LHvP4IA7AwdeUDguqeNiso1ossCFGux%2BSi3C1I2p4bF7fAkXHV%2Fr3SRFQOFchNOOGBDBz4JQ2F0tIRwwboJWsFQEmY95B0dBFvmSVp4%2BWKqWRTKL3leqLch42mtgxQtYOqBPRYmhutjU51eyClOXP4NRN%2BqhbaWUxO7wi6l9azhIRUaDw1XdGc%2FB2mVd41v8QE%2BaVPePaBnSYk3ZlY3lnsV6ewyXVm1VYv%2Bzv0xSEXs2cRBhAf3I7z2NiOQV2yjIjxw5ua0nkP5ARXPEmzAJWFhfXNMtKxqJE463tg%2BOirMnuzeZ0aLhxyvWStTfp0I9bUZ4cPvc9eqQJYyEtXdURiqS0n6bmOTN%2F8Wzdv89aO7qBPN%2B1eYncyL5Nd8iq%2FQvljaYlJfmzvsolESBk2wgTrFETj9qU3jWI238Jj5ynv%2FKXJrXrPfDczLfZucaHHLlDBYx0L04YpKsnN7ltb3NzZiOuU8biXMq1QowsXh3VYcNd68NjTVVbXEjSKjCJ4enIBjqkARvBjdnP732NAuUbEFc2aNpJDl2sqi0lWURgZQyy%2B6z37eAo1DEsRrPM8D7IF18G1APb%2BI%2Fi1mwqLgwd2PEBBLplNUs8n%2BacpKb8P3GBsaoVbTceNbfshXGbVI%2F8WIT%2FXbriauy4J%2BIEPmgXbmL3XZtVFvf56NiTyBNKgnOK4Ei0z9hdolwlKMWENn%2BZJJFajhxM8zM%2BKht85T23VFqIh052YQtg&X-Amz-Signature=1a843c523513fd6a098d01407f7ad4bb7af03dafbbc5959341cbe1d9f0005bee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FMTOWZ%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz%2BhY37yDNqVkbjntms5Xk2mTacYKRkE6XehHISrTLSAIhAK4Sv3FEu6XS6Js5wyowoQOZDvrVlien6F43AyeEOdVoKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn9IRp6H%2BxmUYHxBUq3AOfwE1WQO6E2Kg3FsnFko75fWGnZcb2knBByUx%2F50BsKpskIoOSLxkBedwFlL5x5KEEA%2Fe7cs3n7xJuPwdZivUborU5eDetkbYhiVBL1%2FKOjc2ioBVHEzHA%2B7xTzPQfrO2LHvP4IA7AwdeUDguqeNiso1ossCFGux%2BSi3C1I2p4bF7fAkXHV%2Fr3SRFQOFchNOOGBDBz4JQ2F0tIRwwboJWsFQEmY95B0dBFvmSVp4%2BWKqWRTKL3leqLch42mtgxQtYOqBPRYmhutjU51eyClOXP4NRN%2BqhbaWUxO7wi6l9azhIRUaDw1XdGc%2FB2mVd41v8QE%2BaVPePaBnSYk3ZlY3lnsV6ewyXVm1VYv%2Bzv0xSEXs2cRBhAf3I7z2NiOQV2yjIjxw5ua0nkP5ARXPEmzAJWFhfXNMtKxqJE463tg%2BOirMnuzeZ0aLhxyvWStTfp0I9bUZ4cPvc9eqQJYyEtXdURiqS0n6bmOTN%2F8Wzdv89aO7qBPN%2B1eYncyL5Nd8iq%2FQvljaYlJfmzvsolESBk2wgTrFETj9qU3jWI238Jj5ynv%2FKXJrXrPfDczLfZucaHHLlDBYx0L04YpKsnN7ltb3NzZiOuU8biXMq1QowsXh3VYcNd68NjTVVbXEjSKjCJ4enIBjqkARvBjdnP732NAuUbEFc2aNpJDl2sqi0lWURgZQyy%2B6z37eAo1DEsRrPM8D7IF18G1APb%2BI%2Fi1mwqLgwd2PEBBLplNUs8n%2BacpKb8P3GBsaoVbTceNbfshXGbVI%2F8WIT%2FXbriauy4J%2BIEPmgXbmL3XZtVFvf56NiTyBNKgnOK4Ei0z9hdolwlKMWENn%2BZJJFajhxM8zM%2BKht85T23VFqIh052YQtg&X-Amz-Signature=543958b944e4085b066b5bd2b6b339400802ee76a33cba4941ecd48f18346d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Launch arguments

We can also specify arguments to go into launch files for convenience

For example, we don’t want to reopen the launch file to change what `param_test` prints out every time.

First, at the top of `generate_launch_description()` we would declare a `LaunchConfiguration` and `DeclareLaunchArgument` object. 

`LaunchConfiguration` takes the parameter's name and `DeclareLaunchArgument` takes the name of the same parameter and its default value.

```python
 def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test') 
```

we then can pass the `LaunchConfiguration` object into the Node object and put the `DeclarationLaunchArgument` object into the return array.

```python
def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test')

    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            # {'my_parameter': 'earth'}
            {'my_parameter': some_arg}
        ]
    )
    return LaunchDescription(
        [launch_arg, node]
        )
```

now we can simply change the parameter in `python_params_launch.py` by running 

```bash
ros2 launch my_package python_params_launch.py some_arg:=hi
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FMTOWZ%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz%2BhY37yDNqVkbjntms5Xk2mTacYKRkE6XehHISrTLSAIhAK4Sv3FEu6XS6Js5wyowoQOZDvrVlien6F43AyeEOdVoKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn9IRp6H%2BxmUYHxBUq3AOfwE1WQO6E2Kg3FsnFko75fWGnZcb2knBByUx%2F50BsKpskIoOSLxkBedwFlL5x5KEEA%2Fe7cs3n7xJuPwdZivUborU5eDetkbYhiVBL1%2FKOjc2ioBVHEzHA%2B7xTzPQfrO2LHvP4IA7AwdeUDguqeNiso1ossCFGux%2BSi3C1I2p4bF7fAkXHV%2Fr3SRFQOFchNOOGBDBz4JQ2F0tIRwwboJWsFQEmY95B0dBFvmSVp4%2BWKqWRTKL3leqLch42mtgxQtYOqBPRYmhutjU51eyClOXP4NRN%2BqhbaWUxO7wi6l9azhIRUaDw1XdGc%2FB2mVd41v8QE%2BaVPePaBnSYk3ZlY3lnsV6ewyXVm1VYv%2Bzv0xSEXs2cRBhAf3I7z2NiOQV2yjIjxw5ua0nkP5ARXPEmzAJWFhfXNMtKxqJE463tg%2BOirMnuzeZ0aLhxyvWStTfp0I9bUZ4cPvc9eqQJYyEtXdURiqS0n6bmOTN%2F8Wzdv89aO7qBPN%2B1eYncyL5Nd8iq%2FQvljaYlJfmzvsolESBk2wgTrFETj9qU3jWI238Jj5ynv%2FKXJrXrPfDczLfZucaHHLlDBYx0L04YpKsnN7ltb3NzZiOuU8biXMq1QowsXh3VYcNd68NjTVVbXEjSKjCJ4enIBjqkARvBjdnP732NAuUbEFc2aNpJDl2sqi0lWURgZQyy%2B6z37eAo1DEsRrPM8D7IF18G1APb%2BI%2Fi1mwqLgwd2PEBBLplNUs8n%2BacpKb8P3GBsaoVbTceNbfshXGbVI%2F8WIT%2FXbriauy4J%2BIEPmgXbmL3XZtVFvf56NiTyBNKgnOK4Ei0z9hdolwlKMWENn%2BZJJFajhxM8zM%2BKht85T23VFqIh052YQtg&X-Amz-Signature=6c147f2b8166ac54c3a7938e166e414aa2b893245020e0ed277580e8309ffda0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
