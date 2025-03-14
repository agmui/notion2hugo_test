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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC37B44O%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvul0%2B%2FqyqI%2BQGjdrBLTUV%2FTM1doyIwyiudyPLWvWGoAiBITHONmby2QTonvO6OuZ3nIHucxbO9PxKARqcP26XTNSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU94%2Fl4VoCAQ6x4hpKtwDBx3it7E889r7a8lyozeGOcx3Iiu%2FZW7a6xDoD%2FXY4w7CCu8R1B4NGfgdPF87oSqKx1RBuphVTgBTCAUPLI2MygsK6RSYZmbXD7m3Ihi%2FSn3rqdttUPh5rkvRf8VqWDMrvZFj0G6PpCqIimpf4QE30eUqZCQBIg3%2BZx01xECpeLbsghsqeh5v0xyeDRKEo6FiXV6fUZhVeIpFy4lOKfm5WxniGnpe596aetIEd7Mw2GDdmp5FHvEvchaWx%2FwkT529%2FhpPzadIka8LInsyz9UixvgKGfqQrRRdmardx7ukRb7MzOkQ1BNbW0tfBDDxrC6XE3tdrBAA7uA40s9nzn0kzYHjtGkCzA8ERa9KfU8aM%2B1l1uO5QyfeWaIp4MBSgxjuLcxIv0GFLA4F1AGoJbKolG4rF272Bba0emO3gJywrOtBrlvygwOJ2FJXVnSJDOwAHGwxa31CWsjS9lFgz4s5EqIfNSAPfmcWaGLfI8K7417coQggX4fPb%2F5GKq4Z%2BY8gzPzFXj78gcZ8DxobFyKr40kaQAAewzOBtW87ha9BoFopS2j3B%2B97QKkjXwX%2Bka3LoMYfZXxV8baVvnzjGIDigA0GWe3Ww5ecBoWz%2FZeTpESIwPCguwwWWV9MvUswo8DRvgY6pgGfkzKKzrEiDw4a6miTDjncglJGGiWM2K32QN0q9526q1VjqUKJ3ZCR6vxlYF8F%2FG%2BWj65qckBRJaGK9IyTXzHVfTIJGT%2BmCkgghYIzsdTp4elJTAa%2FAZLIvF%2FUSBYLSNFcirjnmRd%2B347qoX9HhPlL1KYLIRA0V1SAvw59V8o3wGKfNEETe8Dn8%2FW59UpHDUcHx9nV7zhlZyUFyNVx2LxLzFXIRLsz&X-Amz-Signature=e77d6381cdb7d3da9f9d124846b4b46088679bd788f228fa3e541c74d297f922&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC37B44O%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvul0%2B%2FqyqI%2BQGjdrBLTUV%2FTM1doyIwyiudyPLWvWGoAiBITHONmby2QTonvO6OuZ3nIHucxbO9PxKARqcP26XTNSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU94%2Fl4VoCAQ6x4hpKtwDBx3it7E889r7a8lyozeGOcx3Iiu%2FZW7a6xDoD%2FXY4w7CCu8R1B4NGfgdPF87oSqKx1RBuphVTgBTCAUPLI2MygsK6RSYZmbXD7m3Ihi%2FSn3rqdttUPh5rkvRf8VqWDMrvZFj0G6PpCqIimpf4QE30eUqZCQBIg3%2BZx01xECpeLbsghsqeh5v0xyeDRKEo6FiXV6fUZhVeIpFy4lOKfm5WxniGnpe596aetIEd7Mw2GDdmp5FHvEvchaWx%2FwkT529%2FhpPzadIka8LInsyz9UixvgKGfqQrRRdmardx7ukRb7MzOkQ1BNbW0tfBDDxrC6XE3tdrBAA7uA40s9nzn0kzYHjtGkCzA8ERa9KfU8aM%2B1l1uO5QyfeWaIp4MBSgxjuLcxIv0GFLA4F1AGoJbKolG4rF272Bba0emO3gJywrOtBrlvygwOJ2FJXVnSJDOwAHGwxa31CWsjS9lFgz4s5EqIfNSAPfmcWaGLfI8K7417coQggX4fPb%2F5GKq4Z%2BY8gzPzFXj78gcZ8DxobFyKr40kaQAAewzOBtW87ha9BoFopS2j3B%2B97QKkjXwX%2Bka3LoMYfZXxV8baVvnzjGIDigA0GWe3Ww5ecBoWz%2FZeTpESIwPCguwwWWV9MvUswo8DRvgY6pgGfkzKKzrEiDw4a6miTDjncglJGGiWM2K32QN0q9526q1VjqUKJ3ZCR6vxlYF8F%2FG%2BWj65qckBRJaGK9IyTXzHVfTIJGT%2BmCkgghYIzsdTp4elJTAa%2FAZLIvF%2FUSBYLSNFcirjnmRd%2B347qoX9HhPlL1KYLIRA0V1SAvw59V8o3wGKfNEETe8Dn8%2FW59UpHDUcHx9nV7zhlZyUFyNVx2LxLzFXIRLsz&X-Amz-Signature=c4d564cce4581884fc3fad2d796fb00b8a7f0c1d01b143054fbd1989959a7392&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC37B44O%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvul0%2B%2FqyqI%2BQGjdrBLTUV%2FTM1doyIwyiudyPLWvWGoAiBITHONmby2QTonvO6OuZ3nIHucxbO9PxKARqcP26XTNSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU94%2Fl4VoCAQ6x4hpKtwDBx3it7E889r7a8lyozeGOcx3Iiu%2FZW7a6xDoD%2FXY4w7CCu8R1B4NGfgdPF87oSqKx1RBuphVTgBTCAUPLI2MygsK6RSYZmbXD7m3Ihi%2FSn3rqdttUPh5rkvRf8VqWDMrvZFj0G6PpCqIimpf4QE30eUqZCQBIg3%2BZx01xECpeLbsghsqeh5v0xyeDRKEo6FiXV6fUZhVeIpFy4lOKfm5WxniGnpe596aetIEd7Mw2GDdmp5FHvEvchaWx%2FwkT529%2FhpPzadIka8LInsyz9UixvgKGfqQrRRdmardx7ukRb7MzOkQ1BNbW0tfBDDxrC6XE3tdrBAA7uA40s9nzn0kzYHjtGkCzA8ERa9KfU8aM%2B1l1uO5QyfeWaIp4MBSgxjuLcxIv0GFLA4F1AGoJbKolG4rF272Bba0emO3gJywrOtBrlvygwOJ2FJXVnSJDOwAHGwxa31CWsjS9lFgz4s5EqIfNSAPfmcWaGLfI8K7417coQggX4fPb%2F5GKq4Z%2BY8gzPzFXj78gcZ8DxobFyKr40kaQAAewzOBtW87ha9BoFopS2j3B%2B97QKkjXwX%2Bka3LoMYfZXxV8baVvnzjGIDigA0GWe3Ww5ecBoWz%2FZeTpESIwPCguwwWWV9MvUswo8DRvgY6pgGfkzKKzrEiDw4a6miTDjncglJGGiWM2K32QN0q9526q1VjqUKJ3ZCR6vxlYF8F%2FG%2BWj65qckBRJaGK9IyTXzHVfTIJGT%2BmCkgghYIzsdTp4elJTAa%2FAZLIvF%2FUSBYLSNFcirjnmRd%2B347qoX9HhPlL1KYLIRA0V1SAvw59V8o3wGKfNEETe8Dn8%2FW59UpHDUcHx9nV7zhlZyUFyNVx2LxLzFXIRLsz&X-Amz-Signature=9ded30c87d024a4613c0401ac9be774170c47db9bc60fb983acb8f90c06e86a8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
