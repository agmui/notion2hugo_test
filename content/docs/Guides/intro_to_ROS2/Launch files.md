---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2024-09-22T21:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manual which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZQ7AHKF%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbgNdA6bAd%2FCshYhcjjScdq2brzCHN4kODu6INPK4Y0QIhAK41FKEl8IlsozH%2BhSLbBTWXG4kWeQvNh8m931jtXTUtKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyG%2FWqfqir%2BMvDuGQq3APrZmQ9xHmBisT8T4AUhA4rnN7Y7zNX16YTjuYcwXOZC2hbwrY89ylafKNcjebEI2kF1uTT9UwZAxcz9xiAqqvABNjkWgRh%2Bb04bFghzt2GVMj0KLLgN%2BrUYooi2QDwySYyBm8yMLtblhA8a5B%2Fipw4rMO6qwMTP9ENIbsLE6CFpqTraeJzobyCKKS%2BHT7%2F6L2vdwxpGHDehrPaLb6V1nzce81YSpNp9gaYHMNEXe37yCXO2dmlrOK9w%2F%2F98fqPkpehR6e0NgJDUSXnu5Me526R%2BZJCWOfDMkMK1fLlYPcbdU08HANVI7u13OEKbObgB2jDX7Ks9STpW7K4a0MCeZH10mY7uJA1M79GlkcOT8r41PE8KaXBHkxh1rUyjZrpvk9qQB521kmRCib8c87XLP4OUIEC%2BE6xbqRFW4fe1HdwpCgb1VY5EWW4R5sn8jfS%2FCem4utlLYTF2QYzsvHFwiO6z8vIVOKJNOUQ4ef%2BIs0btD5YnpABZQE3r67PWpW9ekQCMd3%2BTHxTN2Lc9Gwt5Acb2AOzBRWxdOcHXWY5lNc6zutC%2Ba%2FLnN3zq3p5a%2F25fMcNmrSvri5hK8Ya%2FJh9QA3cOLYELd1%2F%2BCjojZkf0%2BIzGzdQ22QfC27%2FM4lvjzCs%2BvS8BjqkAe4i2wFD6xGWxbvdPdZQugG%2F55fKj8DIYgx0wTyVl2MvH%2BQeBIiDYcRB%2FmFxSKf9exK2WAT4%2F93CVczx%2B5cKykJ9X5TM9WQ1rcyZtcsGz5bLPZIVY4Mn3gZv9GYVjy5hAZ%2FVLNnxpkkdD9jo5xYNFpo2jfC%2B2ZlDAcYkSzFf21ndv2Ws3doUuGH4cu8HXpP9XacLrLTR0ktasjavdlN9alM3i0gT&X-Amz-Signature=9be1840aa09ab709eb0022b41f397539ab86c10b6ff840e03dccabc1b037b3e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZQ7AHKF%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbgNdA6bAd%2FCshYhcjjScdq2brzCHN4kODu6INPK4Y0QIhAK41FKEl8IlsozH%2BhSLbBTWXG4kWeQvNh8m931jtXTUtKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyG%2FWqfqir%2BMvDuGQq3APrZmQ9xHmBisT8T4AUhA4rnN7Y7zNX16YTjuYcwXOZC2hbwrY89ylafKNcjebEI2kF1uTT9UwZAxcz9xiAqqvABNjkWgRh%2Bb04bFghzt2GVMj0KLLgN%2BrUYooi2QDwySYyBm8yMLtblhA8a5B%2Fipw4rMO6qwMTP9ENIbsLE6CFpqTraeJzobyCKKS%2BHT7%2F6L2vdwxpGHDehrPaLb6V1nzce81YSpNp9gaYHMNEXe37yCXO2dmlrOK9w%2F%2F98fqPkpehR6e0NgJDUSXnu5Me526R%2BZJCWOfDMkMK1fLlYPcbdU08HANVI7u13OEKbObgB2jDX7Ks9STpW7K4a0MCeZH10mY7uJA1M79GlkcOT8r41PE8KaXBHkxh1rUyjZrpvk9qQB521kmRCib8c87XLP4OUIEC%2BE6xbqRFW4fe1HdwpCgb1VY5EWW4R5sn8jfS%2FCem4utlLYTF2QYzsvHFwiO6z8vIVOKJNOUQ4ef%2BIs0btD5YnpABZQE3r67PWpW9ekQCMd3%2BTHxTN2Lc9Gwt5Acb2AOzBRWxdOcHXWY5lNc6zutC%2Ba%2FLnN3zq3p5a%2F25fMcNmrSvri5hK8Ya%2FJh9QA3cOLYELd1%2F%2BCjojZkf0%2BIzGzdQ22QfC27%2FM4lvjzCs%2BvS8BjqkAe4i2wFD6xGWxbvdPdZQugG%2F55fKj8DIYgx0wTyVl2MvH%2BQeBIiDYcRB%2FmFxSKf9exK2WAT4%2F93CVczx%2B5cKykJ9X5TM9WQ1rcyZtcsGz5bLPZIVY4Mn3gZv9GYVjy5hAZ%2FVLNnxpkkdD9jo5xYNFpo2jfC%2B2ZlDAcYkSzFf21ndv2Ws3doUuGH4cu8HXpP9XacLrLTR0ktasjavdlN9alM3i0gT&X-Amz-Signature=c283551c2946eede65b755ff0b016dbda1f2a13199807621fc41230b8927e2a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZQ7AHKF%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbgNdA6bAd%2FCshYhcjjScdq2brzCHN4kODu6INPK4Y0QIhAK41FKEl8IlsozH%2BhSLbBTWXG4kWeQvNh8m931jtXTUtKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyG%2FWqfqir%2BMvDuGQq3APrZmQ9xHmBisT8T4AUhA4rnN7Y7zNX16YTjuYcwXOZC2hbwrY89ylafKNcjebEI2kF1uTT9UwZAxcz9xiAqqvABNjkWgRh%2Bb04bFghzt2GVMj0KLLgN%2BrUYooi2QDwySYyBm8yMLtblhA8a5B%2Fipw4rMO6qwMTP9ENIbsLE6CFpqTraeJzobyCKKS%2BHT7%2F6L2vdwxpGHDehrPaLb6V1nzce81YSpNp9gaYHMNEXe37yCXO2dmlrOK9w%2F%2F98fqPkpehR6e0NgJDUSXnu5Me526R%2BZJCWOfDMkMK1fLlYPcbdU08HANVI7u13OEKbObgB2jDX7Ks9STpW7K4a0MCeZH10mY7uJA1M79GlkcOT8r41PE8KaXBHkxh1rUyjZrpvk9qQB521kmRCib8c87XLP4OUIEC%2BE6xbqRFW4fe1HdwpCgb1VY5EWW4R5sn8jfS%2FCem4utlLYTF2QYzsvHFwiO6z8vIVOKJNOUQ4ef%2BIs0btD5YnpABZQE3r67PWpW9ekQCMd3%2BTHxTN2Lc9Gwt5Acb2AOzBRWxdOcHXWY5lNc6zutC%2Ba%2FLnN3zq3p5a%2F25fMcNmrSvri5hK8Ya%2FJh9QA3cOLYELd1%2F%2BCjojZkf0%2BIzGzdQ22QfC27%2FM4lvjzCs%2BvS8BjqkAe4i2wFD6xGWxbvdPdZQugG%2F55fKj8DIYgx0wTyVl2MvH%2BQeBIiDYcRB%2FmFxSKf9exK2WAT4%2F93CVczx%2B5cKykJ9X5TM9WQ1rcyZtcsGz5bLPZIVY4Mn3gZv9GYVjy5hAZ%2FVLNnxpkkdD9jo5xYNFpo2jfC%2B2ZlDAcYkSzFf21ndv2Ws3doUuGH4cu8HXpP9XacLrLTR0ktasjavdlN9alM3i0gT&X-Amz-Signature=85e77ba887938d7ce6158705c3a12d3a1018428377d4dc8a819ba3d55b9b8095&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
