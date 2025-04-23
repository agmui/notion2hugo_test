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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFIQFGBC%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDOT%2BsmjkpqPLVI0G9oXqNKqFrXnlfOEyH3bkiJHpBsAwIhANQCac7IeS%2BVb34uc1ehN71ltTkfWqUTAIpWB%2F0zhjlRKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjGYvwhnJ7kqPK6B4q3APvU8f2sbIBhFHBX57DpoyqcY1JyPG5i6mA86%2BEXfzJ4v9RAIXN8ocAGS6jN48fg5h6ho2xzubzEh8PywnTbWiaAYknbxpaxoEOtKa1x7n6B%2Bj66knr9%2Bouzva80psYXGNaZHElB8FaPz2I%2Bf9DzdW8mxyyVDh30nCDRdrJyP3J5pM0aVJcZnLOb8lBl4EnRgk%2FlZNiqMNAWkACF0ANUIzWVqCt5eoBce9WodDqNDAPPscbdO%2BRvCxs08BwHPicuPY4BIHpYkzvb5Y3Q7skNKf9bgfr8htymzjcnh5DCRwiMMURznkoMDrvWX7GZHzpUFJGQV1mNYOxGYN3Yu%2BS2nQITLndnyHOgpMnNFEP0RkoQ1I%2F2XzKZkvnkkJeTRtrnFjI2YCpjQQ4iidVK6r9Cjh%2FZBJDvR4SbaicOHWCNYsLHDME0OWsFj2IpV5IZV8AVwkFzFDx3LUoc3QqG0cUvDyt15Z%2FUlQ6YvuKxiaJMK5VCkJ%2BSMv4O%2FsAT0fyGmV8NVtY%2B036Cfi2efbw2Nc827qSYXmG1BKT3e3sBE6he66ke1vCiaQVghqSCMDYhoGaoiZ9NSNqb2nkxio%2FhklhveiR3M%2BP5%2Bf9VZYd79a6aZ%2BXdxpeRo4tIISLF%2FhklzC4yKXABjqkAa5OBqBxUQotuiHpuipjgQfJetEK06u%2BifoekZjoN30%2BGq4b%2Fdjd%2FM4IJdhJ%2B704nnYd%2FU19HZJGon39QdeNwT2Q1DJR5m2%2B6gDXV%2Fxh0SMhfV88fa%2FDFuDN8YRvyMVYwdHxxVE1WXanQO44jeISEF84%2BqEAG0L8E6baqERI43ABsdt7iYoxGcKz59F%2BfOfXZtq8lzuQAA6OB8uj6Vo1uNsPThc3&X-Amz-Signature=6f6f3c41084000aaeb6d93b97ef19b45814449bcec32a20541589cd37103b7a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFIQFGBC%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDOT%2BsmjkpqPLVI0G9oXqNKqFrXnlfOEyH3bkiJHpBsAwIhANQCac7IeS%2BVb34uc1ehN71ltTkfWqUTAIpWB%2F0zhjlRKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjGYvwhnJ7kqPK6B4q3APvU8f2sbIBhFHBX57DpoyqcY1JyPG5i6mA86%2BEXfzJ4v9RAIXN8ocAGS6jN48fg5h6ho2xzubzEh8PywnTbWiaAYknbxpaxoEOtKa1x7n6B%2Bj66knr9%2Bouzva80psYXGNaZHElB8FaPz2I%2Bf9DzdW8mxyyVDh30nCDRdrJyP3J5pM0aVJcZnLOb8lBl4EnRgk%2FlZNiqMNAWkACF0ANUIzWVqCt5eoBce9WodDqNDAPPscbdO%2BRvCxs08BwHPicuPY4BIHpYkzvb5Y3Q7skNKf9bgfr8htymzjcnh5DCRwiMMURznkoMDrvWX7GZHzpUFJGQV1mNYOxGYN3Yu%2BS2nQITLndnyHOgpMnNFEP0RkoQ1I%2F2XzKZkvnkkJeTRtrnFjI2YCpjQQ4iidVK6r9Cjh%2FZBJDvR4SbaicOHWCNYsLHDME0OWsFj2IpV5IZV8AVwkFzFDx3LUoc3QqG0cUvDyt15Z%2FUlQ6YvuKxiaJMK5VCkJ%2BSMv4O%2FsAT0fyGmV8NVtY%2B036Cfi2efbw2Nc827qSYXmG1BKT3e3sBE6he66ke1vCiaQVghqSCMDYhoGaoiZ9NSNqb2nkxio%2FhklhveiR3M%2BP5%2Bf9VZYd79a6aZ%2BXdxpeRo4tIISLF%2FhklzC4yKXABjqkAa5OBqBxUQotuiHpuipjgQfJetEK06u%2BifoekZjoN30%2BGq4b%2Fdjd%2FM4IJdhJ%2B704nnYd%2FU19HZJGon39QdeNwT2Q1DJR5m2%2B6gDXV%2Fxh0SMhfV88fa%2FDFuDN8YRvyMVYwdHxxVE1WXanQO44jeISEF84%2BqEAG0L8E6baqERI43ABsdt7iYoxGcKz59F%2BfOfXZtq8lzuQAA6OB8uj6Vo1uNsPThc3&X-Amz-Signature=e2af8a246910a8788776d7b765488c02f8c113180921f4c1252d730c7918177c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFIQFGBC%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDOT%2BsmjkpqPLVI0G9oXqNKqFrXnlfOEyH3bkiJHpBsAwIhANQCac7IeS%2BVb34uc1ehN71ltTkfWqUTAIpWB%2F0zhjlRKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjGYvwhnJ7kqPK6B4q3APvU8f2sbIBhFHBX57DpoyqcY1JyPG5i6mA86%2BEXfzJ4v9RAIXN8ocAGS6jN48fg5h6ho2xzubzEh8PywnTbWiaAYknbxpaxoEOtKa1x7n6B%2Bj66knr9%2Bouzva80psYXGNaZHElB8FaPz2I%2Bf9DzdW8mxyyVDh30nCDRdrJyP3J5pM0aVJcZnLOb8lBl4EnRgk%2FlZNiqMNAWkACF0ANUIzWVqCt5eoBce9WodDqNDAPPscbdO%2BRvCxs08BwHPicuPY4BIHpYkzvb5Y3Q7skNKf9bgfr8htymzjcnh5DCRwiMMURznkoMDrvWX7GZHzpUFJGQV1mNYOxGYN3Yu%2BS2nQITLndnyHOgpMnNFEP0RkoQ1I%2F2XzKZkvnkkJeTRtrnFjI2YCpjQQ4iidVK6r9Cjh%2FZBJDvR4SbaicOHWCNYsLHDME0OWsFj2IpV5IZV8AVwkFzFDx3LUoc3QqG0cUvDyt15Z%2FUlQ6YvuKxiaJMK5VCkJ%2BSMv4O%2FsAT0fyGmV8NVtY%2B036Cfi2efbw2Nc827qSYXmG1BKT3e3sBE6he66ke1vCiaQVghqSCMDYhoGaoiZ9NSNqb2nkxio%2FhklhveiR3M%2BP5%2Bf9VZYd79a6aZ%2BXdxpeRo4tIISLF%2FhklzC4yKXABjqkAa5OBqBxUQotuiHpuipjgQfJetEK06u%2BifoekZjoN30%2BGq4b%2Fdjd%2FM4IJdhJ%2B704nnYd%2FU19HZJGon39QdeNwT2Q1DJR5m2%2B6gDXV%2Fxh0SMhfV88fa%2FDFuDN8YRvyMVYwdHxxVE1WXanQO44jeISEF84%2BqEAG0L8E6baqERI43ABsdt7iYoxGcKz59F%2BfOfXZtq8lzuQAA6OB8uj6Vo1uNsPThc3&X-Amz-Signature=4fbd8d450cf7100d507aef08ac42f9439f8ba347924145a261c6d070b77c393b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
