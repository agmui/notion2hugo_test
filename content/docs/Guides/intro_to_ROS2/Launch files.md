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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX7BRTG3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFene6ynfrh8ybYHZYvhx%2B5xbJPhoHLvTqgX2VYktjbfAiBzhMqVOKocx2W5S7ahBVRrSfeUsVJK23xEkeU4lpWegyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMTcPe1hsqTawvASLBKtwDRKkUwSvlWT99X4CJMU4PjbpNKKKSECAsNwNoCC3Aj8lITbtYiNeHBrv3%2FfTIfI1FDyq4g1TVmPoD0opYJEGr4E8jc%2BFAEnNO9Y7iAL5VLKLCHz4NLKWLvylaz3CHGYmk5d%2FxnHB13qCxL4QamTy5w91WrKMI9maQmGLRHtVVOIxg04Ji0hArWevnpLqDM3zV2AqHumP5XfNq4%2BqS8325zYPx8YyW6TbDKfpXI%2Fa5d63RkoBaF7cC8HFJT8O%2BwgJmoqWIU6xYMiUjSpRvAJWAr5BOD0gidNWiyjX301pwaCKgEsX%2BB3Ne9akPgbCUSqzbs%2BTmfU8T%2Bn18XF44pLqfNhu6KFeHMT%2Fg1%2Bo5fSmEMNM7y8ptqveyx7LAz790bloI8OoEBmukAvBSsaF1hwq2tInGjT8eQS31h61RBivrwirEpBcSRnOuqbdimJgC7NViUpOGc4FZq7OD0vbxGTVEJHu5cpdhVTLN9A3yBdu8Jst769KgzpjIa5MTFOyJQhuIrvrcjMba14F%2BR9drOdm1SRmvlO32SvNDCHZ8ecN%2BuYkyj%2BhWqYe4pJNgCU25f2xuOvSUvo2utUwhFgZSTwhTYg5uwbX9VcYWf0Lbjs6c5tWKsw482A%2BUvI%2BpVqow1brOvwY6pgGYs38%2Fi%2BpWMlOBeUGZmEeapSB12TjSN0M63mckcszYAmcebh4aZzIgYXNjv2PlatcSr%2FujjN8RbGT40o5R7asvv0NYbMhe7iktmbeSrz5c3sP4bbcyoyu0Uno9FdnEjXQi32xCWrGDZCFRsgEPc%2FCTBU7Neu9Jmug2UV8K9S0rLhyuDTu%2BhRvQMN5aYrXaysadU72Ldp9ZXP20pPflH%2FZNHdSFGHTU&X-Amz-Signature=2a399a923ee442b481760282db9feb0715f7445d131898add9e3cf9336ee5e91&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX7BRTG3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFene6ynfrh8ybYHZYvhx%2B5xbJPhoHLvTqgX2VYktjbfAiBzhMqVOKocx2W5S7ahBVRrSfeUsVJK23xEkeU4lpWegyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMTcPe1hsqTawvASLBKtwDRKkUwSvlWT99X4CJMU4PjbpNKKKSECAsNwNoCC3Aj8lITbtYiNeHBrv3%2FfTIfI1FDyq4g1TVmPoD0opYJEGr4E8jc%2BFAEnNO9Y7iAL5VLKLCHz4NLKWLvylaz3CHGYmk5d%2FxnHB13qCxL4QamTy5w91WrKMI9maQmGLRHtVVOIxg04Ji0hArWevnpLqDM3zV2AqHumP5XfNq4%2BqS8325zYPx8YyW6TbDKfpXI%2Fa5d63RkoBaF7cC8HFJT8O%2BwgJmoqWIU6xYMiUjSpRvAJWAr5BOD0gidNWiyjX301pwaCKgEsX%2BB3Ne9akPgbCUSqzbs%2BTmfU8T%2Bn18XF44pLqfNhu6KFeHMT%2Fg1%2Bo5fSmEMNM7y8ptqveyx7LAz790bloI8OoEBmukAvBSsaF1hwq2tInGjT8eQS31h61RBivrwirEpBcSRnOuqbdimJgC7NViUpOGc4FZq7OD0vbxGTVEJHu5cpdhVTLN9A3yBdu8Jst769KgzpjIa5MTFOyJQhuIrvrcjMba14F%2BR9drOdm1SRmvlO32SvNDCHZ8ecN%2BuYkyj%2BhWqYe4pJNgCU25f2xuOvSUvo2utUwhFgZSTwhTYg5uwbX9VcYWf0Lbjs6c5tWKsw482A%2BUvI%2BpVqow1brOvwY6pgGYs38%2Fi%2BpWMlOBeUGZmEeapSB12TjSN0M63mckcszYAmcebh4aZzIgYXNjv2PlatcSr%2FujjN8RbGT40o5R7asvv0NYbMhe7iktmbeSrz5c3sP4bbcyoyu0Uno9FdnEjXQi32xCWrGDZCFRsgEPc%2FCTBU7Neu9Jmug2UV8K9S0rLhyuDTu%2BhRvQMN5aYrXaysadU72Ldp9ZXP20pPflH%2FZNHdSFGHTU&X-Amz-Signature=9cd72b1acdfcfdd5a85eab01e18d01653a99532eef0c8fe99e63bffe948ce71c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX7BRTG3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFene6ynfrh8ybYHZYvhx%2B5xbJPhoHLvTqgX2VYktjbfAiBzhMqVOKocx2W5S7ahBVRrSfeUsVJK23xEkeU4lpWegyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMTcPe1hsqTawvASLBKtwDRKkUwSvlWT99X4CJMU4PjbpNKKKSECAsNwNoCC3Aj8lITbtYiNeHBrv3%2FfTIfI1FDyq4g1TVmPoD0opYJEGr4E8jc%2BFAEnNO9Y7iAL5VLKLCHz4NLKWLvylaz3CHGYmk5d%2FxnHB13qCxL4QamTy5w91WrKMI9maQmGLRHtVVOIxg04Ji0hArWevnpLqDM3zV2AqHumP5XfNq4%2BqS8325zYPx8YyW6TbDKfpXI%2Fa5d63RkoBaF7cC8HFJT8O%2BwgJmoqWIU6xYMiUjSpRvAJWAr5BOD0gidNWiyjX301pwaCKgEsX%2BB3Ne9akPgbCUSqzbs%2BTmfU8T%2Bn18XF44pLqfNhu6KFeHMT%2Fg1%2Bo5fSmEMNM7y8ptqveyx7LAz790bloI8OoEBmukAvBSsaF1hwq2tInGjT8eQS31h61RBivrwirEpBcSRnOuqbdimJgC7NViUpOGc4FZq7OD0vbxGTVEJHu5cpdhVTLN9A3yBdu8Jst769KgzpjIa5MTFOyJQhuIrvrcjMba14F%2BR9drOdm1SRmvlO32SvNDCHZ8ecN%2BuYkyj%2BhWqYe4pJNgCU25f2xuOvSUvo2utUwhFgZSTwhTYg5uwbX9VcYWf0Lbjs6c5tWKsw482A%2BUvI%2BpVqow1brOvwY6pgGYs38%2Fi%2BpWMlOBeUGZmEeapSB12TjSN0M63mckcszYAmcebh4aZzIgYXNjv2PlatcSr%2FujjN8RbGT40o5R7asvv0NYbMhe7iktmbeSrz5c3sP4bbcyoyu0Uno9FdnEjXQi32xCWrGDZCFRsgEPc%2FCTBU7Neu9Jmug2UV8K9S0rLhyuDTu%2BhRvQMN5aYrXaysadU72Ldp9ZXP20pPflH%2FZNHdSFGHTU&X-Amz-Signature=7a149030195471682ffc6b5d2ad1cd6ec76ba2af3dabbd7270ea2040e1842ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
