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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD2VH2XJ%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFz%2BG%2Fb%2Fxo5OJlYxroVcttu5KkNIVqtsr52mB711kMN3AiB2XxFGi4QPDq3XxljLwkV2eNl%2FqccYwDcfja4DoKYoeyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6gWNAP76Vh8s%2B3GZKtwDJyyQBy7mGn%2Fityj5D110OAyO7L14uHIjJ6Lz1VQ%2FDW7rDAS046g%2Bi1%2BXWjomzm1yWFqQxeuW1hqKP5%2FnsMS5PXn1h9LRo8cdlQ8A7mqzhZE2rVW%2BSik0tQo7HCc8q5D18a7tf0EwVKwS1BUt2FjuYd8d4U0PTvi7Fz8C%2F3wYr%2FomRzlbGYTyAj2qGR%2BsID5ymh5ytNwHyUp2WTsf5Iw3QYU4rGI%2FE9JoT8mDwpofwAxtoMiOMT3c0OC5XKha7BzzkxXbXiPsfPYqub7t7hcHPh9U9IjeJM8mjLD9mDrmF%2BY9y%2Bq%2BnIEzC88mA1NCXbteZEeIqIarU7XhoQ01qiJKUahfwXMjcOaBVYHqmB4of%2FM5iZjAkKDkxX8KPFi%2F%2B8ywjS1AVMgTRb8CmVUuNJgnBVnyMGLDKZ%2BTs7%2FAJrA63%2Bzhrmht6wpskVKCpbgYbadDNzLIjPibHHnXKNav7AE%2Bxrc46eYfkGFhBX0qFuaslgAyspPqGlcB%2BvBxkDDhiEuM59inbjtgVhDHR63Yphwkd1jhqZvLkHtImmPcO2JPlN59wLp08R3O2j59hg8ESnWqER%2BrfsJRhYI3A1yQZk4M%2FkSwx0JyTjm0lDV%2By1ea82pBLg2gbbWCLr50cvIwl7b50wY6pgHkyuqug1b%2FA%2FQieK5sZwp5bK5Dpb4GKzTBzDEFExVgVu%2BN3oUji%2FG4iuB5rn2yNKHacrUclOImPQg4O05Dh5bW8fot4AFBNReG6OcLGzBbsZdsloxQstaoAo%2F8UnypKH2wo4m3A5%2BdLpkf4Ne8KPbv6YdOuFBbjA98c7dWc5ysPcyo%2FavZ3k6ALV4uoflj377gcStuo6p%2FKTbn9Eh%2Bpts5J5k24MiY&X-Amz-Signature=d3142a577cc2c8e3cdc9bd709e4cd7545d34c1a64ecac43460ae7e5fa3f4e29e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD2VH2XJ%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFz%2BG%2Fb%2Fxo5OJlYxroVcttu5KkNIVqtsr52mB711kMN3AiB2XxFGi4QPDq3XxljLwkV2eNl%2FqccYwDcfja4DoKYoeyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6gWNAP76Vh8s%2B3GZKtwDJyyQBy7mGn%2Fityj5D110OAyO7L14uHIjJ6Lz1VQ%2FDW7rDAS046g%2Bi1%2BXWjomzm1yWFqQxeuW1hqKP5%2FnsMS5PXn1h9LRo8cdlQ8A7mqzhZE2rVW%2BSik0tQo7HCc8q5D18a7tf0EwVKwS1BUt2FjuYd8d4U0PTvi7Fz8C%2F3wYr%2FomRzlbGYTyAj2qGR%2BsID5ymh5ytNwHyUp2WTsf5Iw3QYU4rGI%2FE9JoT8mDwpofwAxtoMiOMT3c0OC5XKha7BzzkxXbXiPsfPYqub7t7hcHPh9U9IjeJM8mjLD9mDrmF%2BY9y%2Bq%2BnIEzC88mA1NCXbteZEeIqIarU7XhoQ01qiJKUahfwXMjcOaBVYHqmB4of%2FM5iZjAkKDkxX8KPFi%2F%2B8ywjS1AVMgTRb8CmVUuNJgnBVnyMGLDKZ%2BTs7%2FAJrA63%2Bzhrmht6wpskVKCpbgYbadDNzLIjPibHHnXKNav7AE%2Bxrc46eYfkGFhBX0qFuaslgAyspPqGlcB%2BvBxkDDhiEuM59inbjtgVhDHR63Yphwkd1jhqZvLkHtImmPcO2JPlN59wLp08R3O2j59hg8ESnWqER%2BrfsJRhYI3A1yQZk4M%2FkSwx0JyTjm0lDV%2By1ea82pBLg2gbbWCLr50cvIwl7b50wY6pgHkyuqug1b%2FA%2FQieK5sZwp5bK5Dpb4GKzTBzDEFExVgVu%2BN3oUji%2FG4iuB5rn2yNKHacrUclOImPQg4O05Dh5bW8fot4AFBNReG6OcLGzBbsZdsloxQstaoAo%2F8UnypKH2wo4m3A5%2BdLpkf4Ne8KPbv6YdOuFBbjA98c7dWc5ysPcyo%2FavZ3k6ALV4uoflj377gcStuo6p%2FKTbn9Eh%2Bpts5J5k24MiY&X-Amz-Signature=54353e8a28b1b0415e7d6c70b89ca4d45e706233a52ea70a328ff32e75e582d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD2VH2XJ%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFz%2BG%2Fb%2Fxo5OJlYxroVcttu5KkNIVqtsr52mB711kMN3AiB2XxFGi4QPDq3XxljLwkV2eNl%2FqccYwDcfja4DoKYoeyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6gWNAP76Vh8s%2B3GZKtwDJyyQBy7mGn%2Fityj5D110OAyO7L14uHIjJ6Lz1VQ%2FDW7rDAS046g%2Bi1%2BXWjomzm1yWFqQxeuW1hqKP5%2FnsMS5PXn1h9LRo8cdlQ8A7mqzhZE2rVW%2BSik0tQo7HCc8q5D18a7tf0EwVKwS1BUt2FjuYd8d4U0PTvi7Fz8C%2F3wYr%2FomRzlbGYTyAj2qGR%2BsID5ymh5ytNwHyUp2WTsf5Iw3QYU4rGI%2FE9JoT8mDwpofwAxtoMiOMT3c0OC5XKha7BzzkxXbXiPsfPYqub7t7hcHPh9U9IjeJM8mjLD9mDrmF%2BY9y%2Bq%2BnIEzC88mA1NCXbteZEeIqIarU7XhoQ01qiJKUahfwXMjcOaBVYHqmB4of%2FM5iZjAkKDkxX8KPFi%2F%2B8ywjS1AVMgTRb8CmVUuNJgnBVnyMGLDKZ%2BTs7%2FAJrA63%2Bzhrmht6wpskVKCpbgYbadDNzLIjPibHHnXKNav7AE%2Bxrc46eYfkGFhBX0qFuaslgAyspPqGlcB%2BvBxkDDhiEuM59inbjtgVhDHR63Yphwkd1jhqZvLkHtImmPcO2JPlN59wLp08R3O2j59hg8ESnWqER%2BrfsJRhYI3A1yQZk4M%2FkSwx0JyTjm0lDV%2By1ea82pBLg2gbbWCLr50cvIwl7b50wY6pgHkyuqug1b%2FA%2FQieK5sZwp5bK5Dpb4GKzTBzDEFExVgVu%2BN3oUji%2FG4iuB5rn2yNKHacrUclOImPQg4O05Dh5bW8fot4AFBNReG6OcLGzBbsZdsloxQstaoAo%2F8UnypKH2wo4m3A5%2BdLpkf4Ne8KPbv6YdOuFBbjA98c7dWc5ysPcyo%2FavZ3k6ALV4uoflj377gcStuo6p%2FKTbn9Eh%2Bpts5J5k24MiY&X-Amz-Signature=f2bce411e8fff1b3ffe77a4661a201fcdd04f7410899bb44d748ea705a489bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
