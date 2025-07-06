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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y44D4SF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBiKym8RBre1XI04todBMG7uwAq8Gr2r%2FovbQlOEaRxgAiAl8mfrSG8MOOEbBX%2FAkv39uHXdy0y80%2FyFGlSCF%2BsauSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMoSi3agEfDw0e1vDWKtwDgBgTiklBh636eUNECNqn0PvucJL4T7RBXVeoROFpQRtw5kAiUF%2BRh6G82wLrMpuZ0Q2VmRHH%2FTPYIf6tlVgV5lJ5o6hkiKOVC6IQXeq1ODugB1ILv2UjurwaB%2FXF7D3jqMktAfVss9gFc0gk%2FhEmY%2FGq69v012AB5BqOMElg3etnkZAJKGOoQiWbU5NsIjk4cOHNsoJfGW91AIO%2BgGCbT8m7CBpiAoY5VZLPh2q5Z4tyTvq728WTXTTLHCxDCf%2FLeer4IO0MwcSYTJ%2BgebK6qMyxKw%2BkAgFka6DZLv%2FSvUYEzzUxQDfvZ0hrlsKOEb%2FS9dL98qoZ27bVWtB2L1EJaMEHjhxQsiLE6u32qurlh%2BGJuiXIp%2FhMd0rHYXfx3OrIJvfDjGKRsdGfTrgqK%2BfoFrJKsH7EFdQxD7p22tUliwCz6aLcqLkRjdnsIRn9whsJEr90Ir87in0K%2Ft77PMiXUPf6LMGilWHewsWzN%2FObQzmqzho0VgaPLBJHDSr7jrCi1THP7rW3bwrr4NGZ12EAdy9JUALXI6Hf9rco1Lw5HWeiaCfpT2reXmARUcxu92mc2T6n9Ns32tJ22wq6t8ZPZAn27McQboKi7ONk3LL3e7zOzCqOkoPXHzymzFgw%2B%2B6qwwY6pgH24HGy%2BVWGLP9ysEtu%2BixLadk0NOcm7WkV5%2BHt4qwRfF%2BL5zxuZ9IHrQzWOap8B4Fc109AF6txAO%2BvSBv100Ii351UlAAPlJYPA2q0ueyPq7YwcfZ01O0aRgPNd65PuM%2BmE1vCpHBGxzK4Xl%2FGjWR8Y4mCf81rOUxTOgXnZ4wEMfsiDByu0NRnKowNrMc5sSZwtYWYKwf0eXN%2F0wVBi6BEbe5vaX0d&X-Amz-Signature=f164bf28cc1300168ad280b5ad54b0802725499b5252d4727044844215d91c6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y44D4SF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBiKym8RBre1XI04todBMG7uwAq8Gr2r%2FovbQlOEaRxgAiAl8mfrSG8MOOEbBX%2FAkv39uHXdy0y80%2FyFGlSCF%2BsauSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMoSi3agEfDw0e1vDWKtwDgBgTiklBh636eUNECNqn0PvucJL4T7RBXVeoROFpQRtw5kAiUF%2BRh6G82wLrMpuZ0Q2VmRHH%2FTPYIf6tlVgV5lJ5o6hkiKOVC6IQXeq1ODugB1ILv2UjurwaB%2FXF7D3jqMktAfVss9gFc0gk%2FhEmY%2FGq69v012AB5BqOMElg3etnkZAJKGOoQiWbU5NsIjk4cOHNsoJfGW91AIO%2BgGCbT8m7CBpiAoY5VZLPh2q5Z4tyTvq728WTXTTLHCxDCf%2FLeer4IO0MwcSYTJ%2BgebK6qMyxKw%2BkAgFka6DZLv%2FSvUYEzzUxQDfvZ0hrlsKOEb%2FS9dL98qoZ27bVWtB2L1EJaMEHjhxQsiLE6u32qurlh%2BGJuiXIp%2FhMd0rHYXfx3OrIJvfDjGKRsdGfTrgqK%2BfoFrJKsH7EFdQxD7p22tUliwCz6aLcqLkRjdnsIRn9whsJEr90Ir87in0K%2Ft77PMiXUPf6LMGilWHewsWzN%2FObQzmqzho0VgaPLBJHDSr7jrCi1THP7rW3bwrr4NGZ12EAdy9JUALXI6Hf9rco1Lw5HWeiaCfpT2reXmARUcxu92mc2T6n9Ns32tJ22wq6t8ZPZAn27McQboKi7ONk3LL3e7zOzCqOkoPXHzymzFgw%2B%2B6qwwY6pgH24HGy%2BVWGLP9ysEtu%2BixLadk0NOcm7WkV5%2BHt4qwRfF%2BL5zxuZ9IHrQzWOap8B4Fc109AF6txAO%2BvSBv100Ii351UlAAPlJYPA2q0ueyPq7YwcfZ01O0aRgPNd65PuM%2BmE1vCpHBGxzK4Xl%2FGjWR8Y4mCf81rOUxTOgXnZ4wEMfsiDByu0NRnKowNrMc5sSZwtYWYKwf0eXN%2F0wVBi6BEbe5vaX0d&X-Amz-Signature=f8bcd307d3722a945b83353d4d6c8d72e67c1a5966d4845b2b0f3ee07d97141d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y44D4SF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBiKym8RBre1XI04todBMG7uwAq8Gr2r%2FovbQlOEaRxgAiAl8mfrSG8MOOEbBX%2FAkv39uHXdy0y80%2FyFGlSCF%2BsauSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMoSi3agEfDw0e1vDWKtwDgBgTiklBh636eUNECNqn0PvucJL4T7RBXVeoROFpQRtw5kAiUF%2BRh6G82wLrMpuZ0Q2VmRHH%2FTPYIf6tlVgV5lJ5o6hkiKOVC6IQXeq1ODugB1ILv2UjurwaB%2FXF7D3jqMktAfVss9gFc0gk%2FhEmY%2FGq69v012AB5BqOMElg3etnkZAJKGOoQiWbU5NsIjk4cOHNsoJfGW91AIO%2BgGCbT8m7CBpiAoY5VZLPh2q5Z4tyTvq728WTXTTLHCxDCf%2FLeer4IO0MwcSYTJ%2BgebK6qMyxKw%2BkAgFka6DZLv%2FSvUYEzzUxQDfvZ0hrlsKOEb%2FS9dL98qoZ27bVWtB2L1EJaMEHjhxQsiLE6u32qurlh%2BGJuiXIp%2FhMd0rHYXfx3OrIJvfDjGKRsdGfTrgqK%2BfoFrJKsH7EFdQxD7p22tUliwCz6aLcqLkRjdnsIRn9whsJEr90Ir87in0K%2Ft77PMiXUPf6LMGilWHewsWzN%2FObQzmqzho0VgaPLBJHDSr7jrCi1THP7rW3bwrr4NGZ12EAdy9JUALXI6Hf9rco1Lw5HWeiaCfpT2reXmARUcxu92mc2T6n9Ns32tJ22wq6t8ZPZAn27McQboKi7ONk3LL3e7zOzCqOkoPXHzymzFgw%2B%2B6qwwY6pgH24HGy%2BVWGLP9ysEtu%2BixLadk0NOcm7WkV5%2BHt4qwRfF%2BL5zxuZ9IHrQzWOap8B4Fc109AF6txAO%2BvSBv100Ii351UlAAPlJYPA2q0ueyPq7YwcfZ01O0aRgPNd65PuM%2BmE1vCpHBGxzK4Xl%2FGjWR8Y4mCf81rOUxTOgXnZ4wEMfsiDByu0NRnKowNrMc5sSZwtYWYKwf0eXN%2F0wVBi6BEbe5vaX0d&X-Amz-Signature=3b24f8698f38e662c351aa554fbe6082c0cc5b025ceb620ab660bd0205f10b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
