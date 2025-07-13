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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPAQVEAF%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIGUwp%2FtyuHYSnFuzRf430QHwnPx9tBl5%2Fpts6lZhsMAiBatnlX4tzUCB7YcPg9KqeYtNCrScpdgZJ%2FVhxHoIHwcCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcICk2f9N3ixBNnu5KtwDdytssPK1NgtXz2KAijDYGC3uUTxhqemiIgfl44eFAK5gYIYLF0jfND4zyYhEI4DPdZ7jGb9SU%2B4Af3TnBIr1T%2FDt3rAzpJyoSHe1rdRy%2BF2gLwoxh8x5W6pxS6EyK1Chc4QViQkCyu%2BN9JR6oK%2FypNVnLcRVBO7UDyVHBQlUG4egfd04kmXgjwZPvls%2BjpsCRKQ6xoQYKV7VfPQhucNPUcvbEZIkxQOVUzFLx9Yx83JzLEJCQpHgvHr8N%2F53dUx%2BQm%2FG%2F0oIA%2Fsy04NR01wN5HfA2D%2F2WL5%2FSJDFkFSjYNsU3Lq9uauFQbjlyzzLJbXeaQmDPdmjI%2Fc4TYKpPIauASZ1hT3ztfUiWj%2B2Zwzfo3%2FB5CoDEfH1EOtYQHkdxvZBPorHVU7ke0oLJfhSgWkjPw%2FtSAwWY2kWmXxnP9dP6VNW49qCa%2BieOagezsL8JXHRgjVZz%2BOJF1v7tVsmE%2Bz2uvuZ7x3QaXC6PIv6Q8iNN8kjW0bVfmz3EsP8mStjFNQklY3yDaPMYOc2KJf1kL50UZWzRJwYqvuznQZ6w6st4etHY7p4zBfnK3i7hQEyArObjI9V847XIeLmAQGqsDMLxcmdgUwYT4lMagv35T7fRDkd5Wcy4hPIjFR6jWYwp63MwwY6pgFXm%2BYjH%2FDbNWEocO1sekBbS%2BsQhY9xt5mC60peQnz82Q%2BxqlhOdUQAcngLdDCobvMeB9rKLcpWgtBaFYipqQMbFYoQPUuFJNELVP7Fo2aReYT%2BQ9pBeSsXp%2Ba4CwAFd1xgrd2AYp4oBycpcM0muywn6MxWYf1dtbDZ4L0YMpG4QEaun6AygRMzQWhKDftTvGtqKIj5AVhgeY7Ph0s3JJf6HpIp5NSe&X-Amz-Signature=d3fcffefcf02cc4328b529c7b2c4156d1901f0c9edc9ef70dff25334c16384f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPAQVEAF%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIGUwp%2FtyuHYSnFuzRf430QHwnPx9tBl5%2Fpts6lZhsMAiBatnlX4tzUCB7YcPg9KqeYtNCrScpdgZJ%2FVhxHoIHwcCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcICk2f9N3ixBNnu5KtwDdytssPK1NgtXz2KAijDYGC3uUTxhqemiIgfl44eFAK5gYIYLF0jfND4zyYhEI4DPdZ7jGb9SU%2B4Af3TnBIr1T%2FDt3rAzpJyoSHe1rdRy%2BF2gLwoxh8x5W6pxS6EyK1Chc4QViQkCyu%2BN9JR6oK%2FypNVnLcRVBO7UDyVHBQlUG4egfd04kmXgjwZPvls%2BjpsCRKQ6xoQYKV7VfPQhucNPUcvbEZIkxQOVUzFLx9Yx83JzLEJCQpHgvHr8N%2F53dUx%2BQm%2FG%2F0oIA%2Fsy04NR01wN5HfA2D%2F2WL5%2FSJDFkFSjYNsU3Lq9uauFQbjlyzzLJbXeaQmDPdmjI%2Fc4TYKpPIauASZ1hT3ztfUiWj%2B2Zwzfo3%2FB5CoDEfH1EOtYQHkdxvZBPorHVU7ke0oLJfhSgWkjPw%2FtSAwWY2kWmXxnP9dP6VNW49qCa%2BieOagezsL8JXHRgjVZz%2BOJF1v7tVsmE%2Bz2uvuZ7x3QaXC6PIv6Q8iNN8kjW0bVfmz3EsP8mStjFNQklY3yDaPMYOc2KJf1kL50UZWzRJwYqvuznQZ6w6st4etHY7p4zBfnK3i7hQEyArObjI9V847XIeLmAQGqsDMLxcmdgUwYT4lMagv35T7fRDkd5Wcy4hPIjFR6jWYwp63MwwY6pgFXm%2BYjH%2FDbNWEocO1sekBbS%2BsQhY9xt5mC60peQnz82Q%2BxqlhOdUQAcngLdDCobvMeB9rKLcpWgtBaFYipqQMbFYoQPUuFJNELVP7Fo2aReYT%2BQ9pBeSsXp%2Ba4CwAFd1xgrd2AYp4oBycpcM0muywn6MxWYf1dtbDZ4L0YMpG4QEaun6AygRMzQWhKDftTvGtqKIj5AVhgeY7Ph0s3JJf6HpIp5NSe&X-Amz-Signature=700f2fafa56bed6c5883a42fcac958837611b0d9a89f0a4f20c29afad45c34ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPAQVEAF%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIGUwp%2FtyuHYSnFuzRf430QHwnPx9tBl5%2Fpts6lZhsMAiBatnlX4tzUCB7YcPg9KqeYtNCrScpdgZJ%2FVhxHoIHwcCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcICk2f9N3ixBNnu5KtwDdytssPK1NgtXz2KAijDYGC3uUTxhqemiIgfl44eFAK5gYIYLF0jfND4zyYhEI4DPdZ7jGb9SU%2B4Af3TnBIr1T%2FDt3rAzpJyoSHe1rdRy%2BF2gLwoxh8x5W6pxS6EyK1Chc4QViQkCyu%2BN9JR6oK%2FypNVnLcRVBO7UDyVHBQlUG4egfd04kmXgjwZPvls%2BjpsCRKQ6xoQYKV7VfPQhucNPUcvbEZIkxQOVUzFLx9Yx83JzLEJCQpHgvHr8N%2F53dUx%2BQm%2FG%2F0oIA%2Fsy04NR01wN5HfA2D%2F2WL5%2FSJDFkFSjYNsU3Lq9uauFQbjlyzzLJbXeaQmDPdmjI%2Fc4TYKpPIauASZ1hT3ztfUiWj%2B2Zwzfo3%2FB5CoDEfH1EOtYQHkdxvZBPorHVU7ke0oLJfhSgWkjPw%2FtSAwWY2kWmXxnP9dP6VNW49qCa%2BieOagezsL8JXHRgjVZz%2BOJF1v7tVsmE%2Bz2uvuZ7x3QaXC6PIv6Q8iNN8kjW0bVfmz3EsP8mStjFNQklY3yDaPMYOc2KJf1kL50UZWzRJwYqvuznQZ6w6st4etHY7p4zBfnK3i7hQEyArObjI9V847XIeLmAQGqsDMLxcmdgUwYT4lMagv35T7fRDkd5Wcy4hPIjFR6jWYwp63MwwY6pgFXm%2BYjH%2FDbNWEocO1sekBbS%2BsQhY9xt5mC60peQnz82Q%2BxqlhOdUQAcngLdDCobvMeB9rKLcpWgtBaFYipqQMbFYoQPUuFJNELVP7Fo2aReYT%2BQ9pBeSsXp%2Ba4CwAFd1xgrd2AYp4oBycpcM0muywn6MxWYf1dtbDZ4L0YMpG4QEaun6AygRMzQWhKDftTvGtqKIj5AVhgeY7Ph0s3JJf6HpIp5NSe&X-Amz-Signature=1b3760f456cad049ecc0b8c0f75ae62f6dc2baca919b0af85c582cfec0c7eb9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
