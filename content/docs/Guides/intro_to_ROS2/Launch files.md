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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HWPMDJU%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCb9Qcy251DUMbuDwaBVk2hNVeqKaz%2BdrKWytRNjzAp0gIhAOYcCuBwn6JXeK8vcLduMNsTrJyAtID1EhJ8ooboxD3VKv8DCE8QABoMNjM3NDIzMTgzODA1IgwLpCGDunlKA%2BwZNSwq3AOgU2WkiA1a%2ByAWke9T50TnWDwZzUh26eGMtZz5OVlIhsk4O%2BPItTRI5VPiYJnsGV1di3odCtkaT4md0MB2MMjWxP1%2FLrNOCZI%2FHmcgogv6XBV%2Bkm8t6404uEnMOX1aFpHQsrnfNXUlPS1Cu5Nvx9LEsUqW%2B47DYU9i3eOYPDnKQY1uq2E9E5ATA%2FWhh0uREv52%2BoiyPZJ9yBdhA1CJD7YWOaHi3ECQG7DQir62snKC0jvKCkWvbvs8I2lgscbyupjmVtq0ZLwM1gjFLG6QXiwuCYmZrGMuKKi3dCCh%2B2QsHmA%2Bk%2FtgUbigAOL1zHhJmclNzInieALU6uNTxoFGWenHjdfZdiGukZc6RuJWptrMEsyC6M1C7YnKQAVOn8rISaWkOZDjSYQ2ZfbFbHWDZ9SFnoZ%2B%2FrLkuv%2FEXeajpyG1mREdAEd55AYZExtU6Y6aSbXjeh9PmXILQhhpDQNkfTrSnpUudpN6ezpGt%2Bdiz3ClpFLlSi20hsQD8FwCeBJzeGCX8XkJHtJTuH7cN41b6rgNgTtgK1hwhiXs2BAMfVHlmXOYQL2tpvo%2Fx4IwWiUvghiqLq5XbZEA0%2BmxULA0lZi3SLzdVDF1bnAILSmH1SLmc9fO6tOA%2FpkvhUVOCDCsgvm9BjqkAdhqzB1OH9XI4RQeSPIEE4K60MfB78wnRgqNjZff4kKmNahJwR0ww4qngUxsA2bV7l65iJn3d0tCNr9VnSJSUMiqG8Cd5SMoqGejyB3zAifygIQadt9OjwujpB2R8P0G2r%2F9t9GjbVQ8rthBXM5XsOAg8SVewTbJO0xHceeZREeqQeqWchnPrThgX7kWK%2BnKD39PmrJD5%2BCDCPSihZ3KKdOxTQbP&X-Amz-Signature=519a090ec628222ebf5d086eeaf8dc679a3c251b4f40dca87f4c8f0d6a11fad9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HWPMDJU%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCb9Qcy251DUMbuDwaBVk2hNVeqKaz%2BdrKWytRNjzAp0gIhAOYcCuBwn6JXeK8vcLduMNsTrJyAtID1EhJ8ooboxD3VKv8DCE8QABoMNjM3NDIzMTgzODA1IgwLpCGDunlKA%2BwZNSwq3AOgU2WkiA1a%2ByAWke9T50TnWDwZzUh26eGMtZz5OVlIhsk4O%2BPItTRI5VPiYJnsGV1di3odCtkaT4md0MB2MMjWxP1%2FLrNOCZI%2FHmcgogv6XBV%2Bkm8t6404uEnMOX1aFpHQsrnfNXUlPS1Cu5Nvx9LEsUqW%2B47DYU9i3eOYPDnKQY1uq2E9E5ATA%2FWhh0uREv52%2BoiyPZJ9yBdhA1CJD7YWOaHi3ECQG7DQir62snKC0jvKCkWvbvs8I2lgscbyupjmVtq0ZLwM1gjFLG6QXiwuCYmZrGMuKKi3dCCh%2B2QsHmA%2Bk%2FtgUbigAOL1zHhJmclNzInieALU6uNTxoFGWenHjdfZdiGukZc6RuJWptrMEsyC6M1C7YnKQAVOn8rISaWkOZDjSYQ2ZfbFbHWDZ9SFnoZ%2B%2FrLkuv%2FEXeajpyG1mREdAEd55AYZExtU6Y6aSbXjeh9PmXILQhhpDQNkfTrSnpUudpN6ezpGt%2Bdiz3ClpFLlSi20hsQD8FwCeBJzeGCX8XkJHtJTuH7cN41b6rgNgTtgK1hwhiXs2BAMfVHlmXOYQL2tpvo%2Fx4IwWiUvghiqLq5XbZEA0%2BmxULA0lZi3SLzdVDF1bnAILSmH1SLmc9fO6tOA%2FpkvhUVOCDCsgvm9BjqkAdhqzB1OH9XI4RQeSPIEE4K60MfB78wnRgqNjZff4kKmNahJwR0ww4qngUxsA2bV7l65iJn3d0tCNr9VnSJSUMiqG8Cd5SMoqGejyB3zAifygIQadt9OjwujpB2R8P0G2r%2F9t9GjbVQ8rthBXM5XsOAg8SVewTbJO0xHceeZREeqQeqWchnPrThgX7kWK%2BnKD39PmrJD5%2BCDCPSihZ3KKdOxTQbP&X-Amz-Signature=49fbebda710c1a5e24b8576b64ed2015712394ea3dea48418f5194ad6d4fe575&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HWPMDJU%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCb9Qcy251DUMbuDwaBVk2hNVeqKaz%2BdrKWytRNjzAp0gIhAOYcCuBwn6JXeK8vcLduMNsTrJyAtID1EhJ8ooboxD3VKv8DCE8QABoMNjM3NDIzMTgzODA1IgwLpCGDunlKA%2BwZNSwq3AOgU2WkiA1a%2ByAWke9T50TnWDwZzUh26eGMtZz5OVlIhsk4O%2BPItTRI5VPiYJnsGV1di3odCtkaT4md0MB2MMjWxP1%2FLrNOCZI%2FHmcgogv6XBV%2Bkm8t6404uEnMOX1aFpHQsrnfNXUlPS1Cu5Nvx9LEsUqW%2B47DYU9i3eOYPDnKQY1uq2E9E5ATA%2FWhh0uREv52%2BoiyPZJ9yBdhA1CJD7YWOaHi3ECQG7DQir62snKC0jvKCkWvbvs8I2lgscbyupjmVtq0ZLwM1gjFLG6QXiwuCYmZrGMuKKi3dCCh%2B2QsHmA%2Bk%2FtgUbigAOL1zHhJmclNzInieALU6uNTxoFGWenHjdfZdiGukZc6RuJWptrMEsyC6M1C7YnKQAVOn8rISaWkOZDjSYQ2ZfbFbHWDZ9SFnoZ%2B%2FrLkuv%2FEXeajpyG1mREdAEd55AYZExtU6Y6aSbXjeh9PmXILQhhpDQNkfTrSnpUudpN6ezpGt%2Bdiz3ClpFLlSi20hsQD8FwCeBJzeGCX8XkJHtJTuH7cN41b6rgNgTtgK1hwhiXs2BAMfVHlmXOYQL2tpvo%2Fx4IwWiUvghiqLq5XbZEA0%2BmxULA0lZi3SLzdVDF1bnAILSmH1SLmc9fO6tOA%2FpkvhUVOCDCsgvm9BjqkAdhqzB1OH9XI4RQeSPIEE4K60MfB78wnRgqNjZff4kKmNahJwR0ww4qngUxsA2bV7l65iJn3d0tCNr9VnSJSUMiqG8Cd5SMoqGejyB3zAifygIQadt9OjwujpB2R8P0G2r%2F9t9GjbVQ8rthBXM5XsOAg8SVewTbJO0xHceeZREeqQeqWchnPrThgX7kWK%2BnKD39PmrJD5%2BCDCPSihZ3KKdOxTQbP&X-Amz-Signature=32d297bef7eea5ba629e449c1802dca9264ad35ccbe7e7e3fb5ac2880a7b2bd1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
