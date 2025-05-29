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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFBIZNF%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgZL1TrtMotO9v7THrI%2FjTNdlWS3o9II48OsJ3w85I8gIhANj3zr0Q%2Bhm7LxDgjX%2Bebh8ZiNLXiRlzdtRfJBoeR21zKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw%2FldEJPp%2BBPKozr8q3AMf2l7X2Bda3ryRzmKm7KjyQ9RH8SibDCUlpz%2Fa1MsPy2MaMZVqS4kzOwZFop16DBP%2FG0ywCSrgQiApNllFyZianjMzeo2%2FEZFTX5G%2FoL10W3A3ctFmmr2okXlfmQ5UppP6IX6G0Q7gT8zRmFnilEX%2F2rm4%2BEjJen%2FDjbgPzlqsKw%2FPzSPaKFWQ8BLW0%2BBWVTpAGBjVJ%2BlycUScPiU4lfL0Ta1LVaBqzprbuvjEMzz4oyK1j8mLdJrsrGBW3YJXcnEvtLnymLb5v1FFLLpVYLr4661pCQv7cqh10lqOD%2BFk9j3vU3XY0UfnuU9BpMMO5YrUZbPNYWevf59%2BcRW%2BgtYyhz2wIQV5xrqqxjYBhaS7LtYHb%2BedpWJVC9IXq8%2BhjFlAA9Ocyn7eIugmaAKZxG8VZeh5Kuswwn%2FKeafskNF4f8CV8mmip00JGL2R3byoqftL9%2FzYGzMKd10aAi2dALJiRzIdOcqlly2wqy8OTFu4QTHr5KK4T4huuqZUyoA3121EdRT3SRe2%2FDFjXE2ln75D6eaUeWS9J6GJPuveCjS4VJzz4tcTAUZOat8jPrlM4be9KYE%2B59ZNbfrupgBlP8Z9pDIf41xSjhwpVMaNZebw2R4C6GeAd%2FEp13QI9zC62%2BDBBjqkAdBdBLQIQuYzJ5RjTTOE10u1XnaJf%2FDzyc%2FvEiLS5x0oYRWIoxtJe9G3idy79gSiDcizvF6QCksuIjhdyuHTJ8xvDgPuFjyyxHN%2BNy47H1mD0AHK%2BW3qjz1BvkFiElWxTy6gE3%2FbNJiyPcBLkxNhKGaCReP5muYRzUSRS4%2B4nYaB4KvtQmQxdtWJp7%2FjuW213%2BQ5kIf5YR%2BCuBUKjSZV0aNlyPjn&X-Amz-Signature=bf08a8d2f85426946dd290946a61aced0717a3b8c058b6aa624239d8384f4008&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFBIZNF%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgZL1TrtMotO9v7THrI%2FjTNdlWS3o9II48OsJ3w85I8gIhANj3zr0Q%2Bhm7LxDgjX%2Bebh8ZiNLXiRlzdtRfJBoeR21zKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw%2FldEJPp%2BBPKozr8q3AMf2l7X2Bda3ryRzmKm7KjyQ9RH8SibDCUlpz%2Fa1MsPy2MaMZVqS4kzOwZFop16DBP%2FG0ywCSrgQiApNllFyZianjMzeo2%2FEZFTX5G%2FoL10W3A3ctFmmr2okXlfmQ5UppP6IX6G0Q7gT8zRmFnilEX%2F2rm4%2BEjJen%2FDjbgPzlqsKw%2FPzSPaKFWQ8BLW0%2BBWVTpAGBjVJ%2BlycUScPiU4lfL0Ta1LVaBqzprbuvjEMzz4oyK1j8mLdJrsrGBW3YJXcnEvtLnymLb5v1FFLLpVYLr4661pCQv7cqh10lqOD%2BFk9j3vU3XY0UfnuU9BpMMO5YrUZbPNYWevf59%2BcRW%2BgtYyhz2wIQV5xrqqxjYBhaS7LtYHb%2BedpWJVC9IXq8%2BhjFlAA9Ocyn7eIugmaAKZxG8VZeh5Kuswwn%2FKeafskNF4f8CV8mmip00JGL2R3byoqftL9%2FzYGzMKd10aAi2dALJiRzIdOcqlly2wqy8OTFu4QTHr5KK4T4huuqZUyoA3121EdRT3SRe2%2FDFjXE2ln75D6eaUeWS9J6GJPuveCjS4VJzz4tcTAUZOat8jPrlM4be9KYE%2B59ZNbfrupgBlP8Z9pDIf41xSjhwpVMaNZebw2R4C6GeAd%2FEp13QI9zC62%2BDBBjqkAdBdBLQIQuYzJ5RjTTOE10u1XnaJf%2FDzyc%2FvEiLS5x0oYRWIoxtJe9G3idy79gSiDcizvF6QCksuIjhdyuHTJ8xvDgPuFjyyxHN%2BNy47H1mD0AHK%2BW3qjz1BvkFiElWxTy6gE3%2FbNJiyPcBLkxNhKGaCReP5muYRzUSRS4%2B4nYaB4KvtQmQxdtWJp7%2FjuW213%2BQ5kIf5YR%2BCuBUKjSZV0aNlyPjn&X-Amz-Signature=4f285499f54cfc6d67d9e9fac2e20499317c79d5559e87122e192cde6e43f3d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFBIZNF%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgZL1TrtMotO9v7THrI%2FjTNdlWS3o9II48OsJ3w85I8gIhANj3zr0Q%2Bhm7LxDgjX%2Bebh8ZiNLXiRlzdtRfJBoeR21zKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw%2FldEJPp%2BBPKozr8q3AMf2l7X2Bda3ryRzmKm7KjyQ9RH8SibDCUlpz%2Fa1MsPy2MaMZVqS4kzOwZFop16DBP%2FG0ywCSrgQiApNllFyZianjMzeo2%2FEZFTX5G%2FoL10W3A3ctFmmr2okXlfmQ5UppP6IX6G0Q7gT8zRmFnilEX%2F2rm4%2BEjJen%2FDjbgPzlqsKw%2FPzSPaKFWQ8BLW0%2BBWVTpAGBjVJ%2BlycUScPiU4lfL0Ta1LVaBqzprbuvjEMzz4oyK1j8mLdJrsrGBW3YJXcnEvtLnymLb5v1FFLLpVYLr4661pCQv7cqh10lqOD%2BFk9j3vU3XY0UfnuU9BpMMO5YrUZbPNYWevf59%2BcRW%2BgtYyhz2wIQV5xrqqxjYBhaS7LtYHb%2BedpWJVC9IXq8%2BhjFlAA9Ocyn7eIugmaAKZxG8VZeh5Kuswwn%2FKeafskNF4f8CV8mmip00JGL2R3byoqftL9%2FzYGzMKd10aAi2dALJiRzIdOcqlly2wqy8OTFu4QTHr5KK4T4huuqZUyoA3121EdRT3SRe2%2FDFjXE2ln75D6eaUeWS9J6GJPuveCjS4VJzz4tcTAUZOat8jPrlM4be9KYE%2B59ZNbfrupgBlP8Z9pDIf41xSjhwpVMaNZebw2R4C6GeAd%2FEp13QI9zC62%2BDBBjqkAdBdBLQIQuYzJ5RjTTOE10u1XnaJf%2FDzyc%2FvEiLS5x0oYRWIoxtJe9G3idy79gSiDcizvF6QCksuIjhdyuHTJ8xvDgPuFjyyxHN%2BNy47H1mD0AHK%2BW3qjz1BvkFiElWxTy6gE3%2FbNJiyPcBLkxNhKGaCReP5muYRzUSRS4%2B4nYaB4KvtQmQxdtWJp7%2FjuW213%2BQ5kIf5YR%2BCuBUKjSZV0aNlyPjn&X-Amz-Signature=89c51b8c249f4eb083f9ad03d2168ae861224d43dc87810a6dba18af9d3ae57e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
