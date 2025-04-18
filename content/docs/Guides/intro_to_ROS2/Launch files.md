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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GENERN3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7yg%2FVyMT3oN0jehFLeOgQZS2VZSErxr%2FMstNNwtLJ%2FAiEAjVu8N%2FDFED4XXyN%2BCgJhWo6DEK9wYDo1oqrZ0%2Ft%2B46Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGBUlUsUgOsBgeQWVyrcA1QJBwxgNsg4fAB6C9pHey6sPxGak1YmYQmjMJsiqvh37%2BsB0In6CaqOzP7PAfmOUNFNUm8SMG2%2FBLcwjunwbtJn5scsIpN46Ry9p8B5uiql32sTY6iZ5X27ARZN3MlMhV4auTNrxL%2FgnF0TKv%2FLMY3lSa08BnnpegxcBJw1dPO1XiOMv%2Fy2QpLrrtFQckioDFSpP%2F7HKmVHmSTrq%2FZvKuscn%2Brv%2B1HqhGK1%2BRlR83LARqhmfBodpT7wGBrfY5HdSPrp9MkzuypRY2JU0nRDnWVI9fEk5zTi10vVqMqC5d2USYrY6eih9%2FWk58uR5gLe8P%2BghFt0FNZd3Zm%2FMRvkXJGW6t1UYstk50bd7EZ08NvWWOTW3kVdcLjlFZWaaVToaijdi76AqfQWmzVtkGqqV9Vnyr1mIqsBVW86%2BU80GJG7CV%2BWueuZdDR9%2FNk8NBweLE2kaoJDapDl6SWYAW1pqK30t8BOZwTuHSE2yCmEtVuFs5IiBGxWQLs8KWNDh%2F5q5Q40h4OgGrYIWfJOkGE5y1cm6bqGrLDW3QPTEhvfMRYa1u33zoK0rUQgiPCZ8LZkvebUX9hJORW%2FFRGxZUcybZ1rxREBKzM6HKcZE9NDMxDxdNRt5hMn%2FS34OkopMIOtiMAGOqUBzJqYI5DQHI5jHbDDu6v74fFGz0T2hCGEzs7%2BCi03ARorSQRJ53%2FnoDayYQLOTLNUEcwS8UTSPZeUaq%2BF4SgBBtvelWxLwHS54z618M41tztkobVTwVGMmj2f%2B5jNKS4IVlqQ1bsnLxOlCg9t58TjsuADFedPGj9OqI0HxMJ4%2B1SJDzAfZsfH0GeuAszwnumXKbyL%2BD8JWqEsczeZUJUFaXn%2Bfm1J&X-Amz-Signature=4fbb3b468c2f99f0e006675237bfe9ac8617015aac9d97b2def6d96d24f63cab&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GENERN3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7yg%2FVyMT3oN0jehFLeOgQZS2VZSErxr%2FMstNNwtLJ%2FAiEAjVu8N%2FDFED4XXyN%2BCgJhWo6DEK9wYDo1oqrZ0%2Ft%2B46Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGBUlUsUgOsBgeQWVyrcA1QJBwxgNsg4fAB6C9pHey6sPxGak1YmYQmjMJsiqvh37%2BsB0In6CaqOzP7PAfmOUNFNUm8SMG2%2FBLcwjunwbtJn5scsIpN46Ry9p8B5uiql32sTY6iZ5X27ARZN3MlMhV4auTNrxL%2FgnF0TKv%2FLMY3lSa08BnnpegxcBJw1dPO1XiOMv%2Fy2QpLrrtFQckioDFSpP%2F7HKmVHmSTrq%2FZvKuscn%2Brv%2B1HqhGK1%2BRlR83LARqhmfBodpT7wGBrfY5HdSPrp9MkzuypRY2JU0nRDnWVI9fEk5zTi10vVqMqC5d2USYrY6eih9%2FWk58uR5gLe8P%2BghFt0FNZd3Zm%2FMRvkXJGW6t1UYstk50bd7EZ08NvWWOTW3kVdcLjlFZWaaVToaijdi76AqfQWmzVtkGqqV9Vnyr1mIqsBVW86%2BU80GJG7CV%2BWueuZdDR9%2FNk8NBweLE2kaoJDapDl6SWYAW1pqK30t8BOZwTuHSE2yCmEtVuFs5IiBGxWQLs8KWNDh%2F5q5Q40h4OgGrYIWfJOkGE5y1cm6bqGrLDW3QPTEhvfMRYa1u33zoK0rUQgiPCZ8LZkvebUX9hJORW%2FFRGxZUcybZ1rxREBKzM6HKcZE9NDMxDxdNRt5hMn%2FS34OkopMIOtiMAGOqUBzJqYI5DQHI5jHbDDu6v74fFGz0T2hCGEzs7%2BCi03ARorSQRJ53%2FnoDayYQLOTLNUEcwS8UTSPZeUaq%2BF4SgBBtvelWxLwHS54z618M41tztkobVTwVGMmj2f%2B5jNKS4IVlqQ1bsnLxOlCg9t58TjsuADFedPGj9OqI0HxMJ4%2B1SJDzAfZsfH0GeuAszwnumXKbyL%2BD8JWqEsczeZUJUFaXn%2Bfm1J&X-Amz-Signature=1853138ad13af3fa8e33d3a877bdd80361389b15d5f2527d0de12bf4d4659add&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GENERN3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7yg%2FVyMT3oN0jehFLeOgQZS2VZSErxr%2FMstNNwtLJ%2FAiEAjVu8N%2FDFED4XXyN%2BCgJhWo6DEK9wYDo1oqrZ0%2Ft%2B46Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGBUlUsUgOsBgeQWVyrcA1QJBwxgNsg4fAB6C9pHey6sPxGak1YmYQmjMJsiqvh37%2BsB0In6CaqOzP7PAfmOUNFNUm8SMG2%2FBLcwjunwbtJn5scsIpN46Ry9p8B5uiql32sTY6iZ5X27ARZN3MlMhV4auTNrxL%2FgnF0TKv%2FLMY3lSa08BnnpegxcBJw1dPO1XiOMv%2Fy2QpLrrtFQckioDFSpP%2F7HKmVHmSTrq%2FZvKuscn%2Brv%2B1HqhGK1%2BRlR83LARqhmfBodpT7wGBrfY5HdSPrp9MkzuypRY2JU0nRDnWVI9fEk5zTi10vVqMqC5d2USYrY6eih9%2FWk58uR5gLe8P%2BghFt0FNZd3Zm%2FMRvkXJGW6t1UYstk50bd7EZ08NvWWOTW3kVdcLjlFZWaaVToaijdi76AqfQWmzVtkGqqV9Vnyr1mIqsBVW86%2BU80GJG7CV%2BWueuZdDR9%2FNk8NBweLE2kaoJDapDl6SWYAW1pqK30t8BOZwTuHSE2yCmEtVuFs5IiBGxWQLs8KWNDh%2F5q5Q40h4OgGrYIWfJOkGE5y1cm6bqGrLDW3QPTEhvfMRYa1u33zoK0rUQgiPCZ8LZkvebUX9hJORW%2FFRGxZUcybZ1rxREBKzM6HKcZE9NDMxDxdNRt5hMn%2FS34OkopMIOtiMAGOqUBzJqYI5DQHI5jHbDDu6v74fFGz0T2hCGEzs7%2BCi03ARorSQRJ53%2FnoDayYQLOTLNUEcwS8UTSPZeUaq%2BF4SgBBtvelWxLwHS54z618M41tztkobVTwVGMmj2f%2B5jNKS4IVlqQ1bsnLxOlCg9t58TjsuADFedPGj9OqI0HxMJ4%2B1SJDzAfZsfH0GeuAszwnumXKbyL%2BD8JWqEsczeZUJUFaXn%2Bfm1J&X-Amz-Signature=1cf95a298054ca59647ef44a65f95f925364f23b1fea86279de67f3c003a29bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
