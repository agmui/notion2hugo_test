---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Launch files.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZA42CV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQD4NLQhPZgpFZW6amFqIPb94ZUx48QdsFLGlLcJEyHF8AIgNZsyc3qGC8VOPBzqNfUHfHGacblXUnRXh15%2BWZuTpVEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGeJcaIoFgDo8FIHZyrcA%2FlGXzhsWQ%2Fo8lzhJ6CN7QXeBBomWi7Bfwc1ZGXhAJwDwz09TUl%2B0NIbuco41JkmUxh6XEVOGmTUbTSZCzhtxhaH%2BaPdEWJFtFcINQUuWF7P%2BVfbRI7gfhJ1P3W1XdcQRUE%2BqGYvXHIMVdR4ClTho9wRrBioYOismvqgyImPQ3vR3BpqgRtCWjj0%2B5HKN9UgsJdyBJtCC6I0waXDSWHMdLAfXtJjn4a389Mp3x%2FOH7gyKct0l6POJaj4bi3VyQrQ8iA2csJB7me31cp4ngmOtmzlgiT14E3SBIgDdHjlFpNSC588DEC1Z9PRGGDn5alfRKzsyqRrFSErz9KVRioen5UQzGXVgQikbiTUmCyB1ZDc3Lnez%2BNIkqK2PavuxCxRaqgcmZpkDaXd7mDlt0DnHrKi1pTFQMSxA8OkAdKvzZPWoL8%2FvcUDtyJhGgdXNKQCX%2FZiB8I4WqyA2JCdgBGWisDZ3cXtBH5tOttU6dUArcoUeSvByAOgIz4I1veh4nGMTBRSqSjtukzmJtCHg0Vp5n4cJNwNC6rzZ8FYDfT9yeIVlIltK7qCmbbu%2FCduqfC1MmI5MrPGzVnUSXq%2F5wGrQd3GjuXAKJe2nfguJzENZ7NK006nN0%2FfpIViKRK1MI%2BXjL0GOqUBf3SxEZ%2FqlaSXxknGfa62eR2cUk6uaLqRkgo7JS9Sca0797TYMgupaUjtBOHfGP35rb6vdYMOvhFaEbNpf%2BReFiJd2j4tuqZbg2msKEkRSSzxQp2o6teqQZIh0flhfSRw1%2Bejv4URsYR9zLK5TWQygg2nCFJpE8vu0neGHWhjFfZEn7NzJo8oY79knYKKUsicPC6oHdWHqbIdHOMs1%2FsoTptLKoPk&X-Amz-Signature=20790c86a1bec79b16dd4c9c5d1157e547f3d8664537a5224595a4a4276fe434&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZA42CV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQD4NLQhPZgpFZW6amFqIPb94ZUx48QdsFLGlLcJEyHF8AIgNZsyc3qGC8VOPBzqNfUHfHGacblXUnRXh15%2BWZuTpVEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGeJcaIoFgDo8FIHZyrcA%2FlGXzhsWQ%2Fo8lzhJ6CN7QXeBBomWi7Bfwc1ZGXhAJwDwz09TUl%2B0NIbuco41JkmUxh6XEVOGmTUbTSZCzhtxhaH%2BaPdEWJFtFcINQUuWF7P%2BVfbRI7gfhJ1P3W1XdcQRUE%2BqGYvXHIMVdR4ClTho9wRrBioYOismvqgyImPQ3vR3BpqgRtCWjj0%2B5HKN9UgsJdyBJtCC6I0waXDSWHMdLAfXtJjn4a389Mp3x%2FOH7gyKct0l6POJaj4bi3VyQrQ8iA2csJB7me31cp4ngmOtmzlgiT14E3SBIgDdHjlFpNSC588DEC1Z9PRGGDn5alfRKzsyqRrFSErz9KVRioen5UQzGXVgQikbiTUmCyB1ZDc3Lnez%2BNIkqK2PavuxCxRaqgcmZpkDaXd7mDlt0DnHrKi1pTFQMSxA8OkAdKvzZPWoL8%2FvcUDtyJhGgdXNKQCX%2FZiB8I4WqyA2JCdgBGWisDZ3cXtBH5tOttU6dUArcoUeSvByAOgIz4I1veh4nGMTBRSqSjtukzmJtCHg0Vp5n4cJNwNC6rzZ8FYDfT9yeIVlIltK7qCmbbu%2FCduqfC1MmI5MrPGzVnUSXq%2F5wGrQd3GjuXAKJe2nfguJzENZ7NK006nN0%2FfpIViKRK1MI%2BXjL0GOqUBf3SxEZ%2FqlaSXxknGfa62eR2cUk6uaLqRkgo7JS9Sca0797TYMgupaUjtBOHfGP35rb6vdYMOvhFaEbNpf%2BReFiJd2j4tuqZbg2msKEkRSSzxQp2o6teqQZIh0flhfSRw1%2Bejv4URsYR9zLK5TWQygg2nCFJpE8vu0neGHWhjFfZEn7NzJo8oY79knYKKUsicPC6oHdWHqbIdHOMs1%2FsoTptLKoPk&X-Amz-Signature=8c5f8d7716d55e5f6a3b5735eed22faeefe48e0e5eba8161ec12c81629ecf793&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZA42CV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQD4NLQhPZgpFZW6amFqIPb94ZUx48QdsFLGlLcJEyHF8AIgNZsyc3qGC8VOPBzqNfUHfHGacblXUnRXh15%2BWZuTpVEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGeJcaIoFgDo8FIHZyrcA%2FlGXzhsWQ%2Fo8lzhJ6CN7QXeBBomWi7Bfwc1ZGXhAJwDwz09TUl%2B0NIbuco41JkmUxh6XEVOGmTUbTSZCzhtxhaH%2BaPdEWJFtFcINQUuWF7P%2BVfbRI7gfhJ1P3W1XdcQRUE%2BqGYvXHIMVdR4ClTho9wRrBioYOismvqgyImPQ3vR3BpqgRtCWjj0%2B5HKN9UgsJdyBJtCC6I0waXDSWHMdLAfXtJjn4a389Mp3x%2FOH7gyKct0l6POJaj4bi3VyQrQ8iA2csJB7me31cp4ngmOtmzlgiT14E3SBIgDdHjlFpNSC588DEC1Z9PRGGDn5alfRKzsyqRrFSErz9KVRioen5UQzGXVgQikbiTUmCyB1ZDc3Lnez%2BNIkqK2PavuxCxRaqgcmZpkDaXd7mDlt0DnHrKi1pTFQMSxA8OkAdKvzZPWoL8%2FvcUDtyJhGgdXNKQCX%2FZiB8I4WqyA2JCdgBGWisDZ3cXtBH5tOttU6dUArcoUeSvByAOgIz4I1veh4nGMTBRSqSjtukzmJtCHg0Vp5n4cJNwNC6rzZ8FYDfT9yeIVlIltK7qCmbbu%2FCduqfC1MmI5MrPGzVnUSXq%2F5wGrQd3GjuXAKJe2nfguJzENZ7NK006nN0%2FfpIViKRK1MI%2BXjL0GOqUBf3SxEZ%2FqlaSXxknGfa62eR2cUk6uaLqRkgo7JS9Sca0797TYMgupaUjtBOHfGP35rb6vdYMOvhFaEbNpf%2BReFiJd2j4tuqZbg2msKEkRSSzxQp2o6teqQZIh0flhfSRw1%2Bejv4URsYR9zLK5TWQygg2nCFJpE8vu0neGHWhjFfZEn7NzJo8oY79knYKKUsicPC6oHdWHqbIdHOMs1%2FsoTptLKoPk&X-Amz-Signature=6e7eaed1c8aa070b11ade7fbb5cb5b1d024efb8fe88500ec42868ad1da68b959&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
