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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKAF7ZVI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXrl10qIqDkuf6XAUiByLeETejesgg%2Bo9AdVpGslN4HAiBRuhWUI98vztuGK5ehIAe%2BpfiEXd5dt3zXgO6AmWlltir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMY7ysC8BwcaWtGBUSKtwDjlyUTxKVAtjY%2FI2Q2IUldFfw5Z2S5BgiJETRwMsdHynxQs1Rzfb5zjNtPUqYzA4gK2V1Eu0uG0EaF%2BsTgca3W51jTUacdtQ7L2ZyYH6MHYY34yibkfc07PFoQEWEKo8sp7%2F5rZKo3BDzoqAaj%2BZb7J8CK%2Baa9zwqWAXblSY1bcRQ%2FXplXosukcTjn3ksgdrfMJInH1AuA0IcRzJm4O%2BHYQjt9H1dmuPFBvvDYUxFFrYe%2BYazf%2BfHDyBd0uEZqnOvC99AVDRDqNBup0S9N3i9eH3Tia2uo1Yr7r5enyAXx%2BEblVqqSb4%2FsLvucrp1IZjYLDPoRgsv3DwGuh6OjBIOItGG7z6PoutFki9G2OJBs%2FVhFPW36YBAkumuwXCUXSw2kvfSWggTvbuXtPFpITfP0TWzYbdZLM5oHolc4y6Tk%2F37m0v0LeuD9%2F%2FOqbh293VkPTjv%2Bzi2jAoc4pxDjROue9oO97574a3qCYp6k81CHqZeiFj%2Bi%2FFwvfLVcN0%2B%2B2JKEm7J4fMi7tXeh4xcF8icOzwwZ%2B33i1PQPxJJWmPjsx3TnlIg3tiPycgDgRu9Zyl5fT8Hd33irW3OmyCpsLJarCoYHzBHZq%2F9jsdTt58PaADQxsQpBz5xkrGWThsw746HwAY6pgF7Dqt%2BfDQO%2Fy4kQ6OsJFac0UMKDmrjNaDByk7aSnyyflUjwxhYs0kn3tBRhUB6HS8IrFOarSwm7qMcumoCYPsYwDKq%2F0z%2BmtmnhnjW6vL6f1XormRYEWgZT47ccqqpNKmwazRmL%2B3MIqH4s2aI1p6rdpxWhe1KS4hpmkAG0RTzyAxJFJ3e8Mp0LKgK%2Bi9lRg9lykrmuKY7GJUNKNPVCv156fDS3uqq&X-Amz-Signature=e50c80014b1627cb19e0ccccf3ed6b682ca8a07a23c7f133a20ce6d6fdca95c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKAF7ZVI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXrl10qIqDkuf6XAUiByLeETejesgg%2Bo9AdVpGslN4HAiBRuhWUI98vztuGK5ehIAe%2BpfiEXd5dt3zXgO6AmWlltir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMY7ysC8BwcaWtGBUSKtwDjlyUTxKVAtjY%2FI2Q2IUldFfw5Z2S5BgiJETRwMsdHynxQs1Rzfb5zjNtPUqYzA4gK2V1Eu0uG0EaF%2BsTgca3W51jTUacdtQ7L2ZyYH6MHYY34yibkfc07PFoQEWEKo8sp7%2F5rZKo3BDzoqAaj%2BZb7J8CK%2Baa9zwqWAXblSY1bcRQ%2FXplXosukcTjn3ksgdrfMJInH1AuA0IcRzJm4O%2BHYQjt9H1dmuPFBvvDYUxFFrYe%2BYazf%2BfHDyBd0uEZqnOvC99AVDRDqNBup0S9N3i9eH3Tia2uo1Yr7r5enyAXx%2BEblVqqSb4%2FsLvucrp1IZjYLDPoRgsv3DwGuh6OjBIOItGG7z6PoutFki9G2OJBs%2FVhFPW36YBAkumuwXCUXSw2kvfSWggTvbuXtPFpITfP0TWzYbdZLM5oHolc4y6Tk%2F37m0v0LeuD9%2F%2FOqbh293VkPTjv%2Bzi2jAoc4pxDjROue9oO97574a3qCYp6k81CHqZeiFj%2Bi%2FFwvfLVcN0%2B%2B2JKEm7J4fMi7tXeh4xcF8icOzwwZ%2B33i1PQPxJJWmPjsx3TnlIg3tiPycgDgRu9Zyl5fT8Hd33irW3OmyCpsLJarCoYHzBHZq%2F9jsdTt58PaADQxsQpBz5xkrGWThsw746HwAY6pgF7Dqt%2BfDQO%2Fy4kQ6OsJFac0UMKDmrjNaDByk7aSnyyflUjwxhYs0kn3tBRhUB6HS8IrFOarSwm7qMcumoCYPsYwDKq%2F0z%2BmtmnhnjW6vL6f1XormRYEWgZT47ccqqpNKmwazRmL%2B3MIqH4s2aI1p6rdpxWhe1KS4hpmkAG0RTzyAxJFJ3e8Mp0LKgK%2Bi9lRg9lykrmuKY7GJUNKNPVCv156fDS3uqq&X-Amz-Signature=e17a8fb17e75cbaca0812580cfc9879681a6777eae3f51e50bc07edde846cb03&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKAF7ZVI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXrl10qIqDkuf6XAUiByLeETejesgg%2Bo9AdVpGslN4HAiBRuhWUI98vztuGK5ehIAe%2BpfiEXd5dt3zXgO6AmWlltir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMY7ysC8BwcaWtGBUSKtwDjlyUTxKVAtjY%2FI2Q2IUldFfw5Z2S5BgiJETRwMsdHynxQs1Rzfb5zjNtPUqYzA4gK2V1Eu0uG0EaF%2BsTgca3W51jTUacdtQ7L2ZyYH6MHYY34yibkfc07PFoQEWEKo8sp7%2F5rZKo3BDzoqAaj%2BZb7J8CK%2Baa9zwqWAXblSY1bcRQ%2FXplXosukcTjn3ksgdrfMJInH1AuA0IcRzJm4O%2BHYQjt9H1dmuPFBvvDYUxFFrYe%2BYazf%2BfHDyBd0uEZqnOvC99AVDRDqNBup0S9N3i9eH3Tia2uo1Yr7r5enyAXx%2BEblVqqSb4%2FsLvucrp1IZjYLDPoRgsv3DwGuh6OjBIOItGG7z6PoutFki9G2OJBs%2FVhFPW36YBAkumuwXCUXSw2kvfSWggTvbuXtPFpITfP0TWzYbdZLM5oHolc4y6Tk%2F37m0v0LeuD9%2F%2FOqbh293VkPTjv%2Bzi2jAoc4pxDjROue9oO97574a3qCYp6k81CHqZeiFj%2Bi%2FFwvfLVcN0%2B%2B2JKEm7J4fMi7tXeh4xcF8icOzwwZ%2B33i1PQPxJJWmPjsx3TnlIg3tiPycgDgRu9Zyl5fT8Hd33irW3OmyCpsLJarCoYHzBHZq%2F9jsdTt58PaADQxsQpBz5xkrGWThsw746HwAY6pgF7Dqt%2BfDQO%2Fy4kQ6OsJFac0UMKDmrjNaDByk7aSnyyflUjwxhYs0kn3tBRhUB6HS8IrFOarSwm7qMcumoCYPsYwDKq%2F0z%2BmtmnhnjW6vL6f1XormRYEWgZT47ccqqpNKmwazRmL%2B3MIqH4s2aI1p6rdpxWhe1KS4hpmkAG0RTzyAxJFJ3e8Mp0LKgK%2Bi9lRg9lykrmuKY7GJUNKNPVCv156fDS3uqq&X-Amz-Signature=e38cc4fa6f9d1ddae340e43dbc8a3ed595335257b74523135a47743c32bab3e7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
