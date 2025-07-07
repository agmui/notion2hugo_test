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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGVLC5B3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCaDawAp1Xiv3hkrMBcjq9hIGqwapytN8HbbSqzIga3ZgIgMBrPGVCSQffr%2FCOCvneENGSwCxj%2FwVeuGYsd6f3YhSIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBWKmdWhG9KPDuhq%2FSrcA6Um8kpq01qt1o5%2FyXGON1Uer1pc4TFQaWodvtBZHQJyyX8%2BC5M6a%2FzHNB85c7%2FIMhGyMs1JlwfKgeGNTgtBXOhl8wFtXwDS5NeciS0oAj02dcoBBWl6TIShn3m0%2BngOhYR4ufFgX7glrwTZgjRSYbnE%2Blv4iUEhwLe6NZ%2FQZ08T6tcU3r2xtejGj%2BKim6d8Ot67HUcrqJHjtBgMCz2%2FfYawDGmmnanF7DHzlXC2E%2BK4IPZlxHGjoUV9LuaEnt9VJOMmF6h9%2FHTgVArsIbUplMf75qzRuhqDcIEltrxiYxu%2B%2FrP4AJMVDynZFA2BdVUNdghEYLoAdu6Iy3Y1joLPH6EZQ7mnGBTcu2ilFe08PBqXtLPt%2Bp48bVwMVk0foANQdv1Gm%2FsPtWcQ3QT07vBdLGtatIr8Gutfdj%2FeId2wVrUBupLPdRWjQReNAIoV7ARBL57LGcatSvwgJvyAtcPpkc1s4zzo7n7T4oOTtTTPumIniIen%2F5xViNSDRzst4xZ3sT27ZXa7i8mF0N%2BpkUbc7THq3D3NdB66ZbnLyoLxJwqsquhj9QmqCMAwMlOnpExzVZ0poapTLFjDrZeKV84A612WCq4R0%2FUNdkIAgwQHDgETn96BZsJK22%2BOBH%2FwMMO%2FrcMGOqUB7bexhWlw2%2BJ%2FQUIcGZDlo%2B0uJotAh54odXcIyFZc4cQadyv%2B%2BFVTzUJ8ki0f3W96UZDf3hYLD6O%2F3a8fZZszY5EMa2FtSXlRDRt6HgtVDLNtKqf4ba1SVmw94cS83bJyd%2FlajwXgmoO7hFsNHebAyoppVz78%2FXvYHUqVyp4TXw4BfaaCu7DlBSSBZPfJ33fyRHnDRgcrlgxmtPSVperKiYKK2SQI&X-Amz-Signature=e123ff4d599e3e0c30b2a52701a8ccde5c5f4fefb64d5314993dacdbe67ce2d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGVLC5B3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCaDawAp1Xiv3hkrMBcjq9hIGqwapytN8HbbSqzIga3ZgIgMBrPGVCSQffr%2FCOCvneENGSwCxj%2FwVeuGYsd6f3YhSIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBWKmdWhG9KPDuhq%2FSrcA6Um8kpq01qt1o5%2FyXGON1Uer1pc4TFQaWodvtBZHQJyyX8%2BC5M6a%2FzHNB85c7%2FIMhGyMs1JlwfKgeGNTgtBXOhl8wFtXwDS5NeciS0oAj02dcoBBWl6TIShn3m0%2BngOhYR4ufFgX7glrwTZgjRSYbnE%2Blv4iUEhwLe6NZ%2FQZ08T6tcU3r2xtejGj%2BKim6d8Ot67HUcrqJHjtBgMCz2%2FfYawDGmmnanF7DHzlXC2E%2BK4IPZlxHGjoUV9LuaEnt9VJOMmF6h9%2FHTgVArsIbUplMf75qzRuhqDcIEltrxiYxu%2B%2FrP4AJMVDynZFA2BdVUNdghEYLoAdu6Iy3Y1joLPH6EZQ7mnGBTcu2ilFe08PBqXtLPt%2Bp48bVwMVk0foANQdv1Gm%2FsPtWcQ3QT07vBdLGtatIr8Gutfdj%2FeId2wVrUBupLPdRWjQReNAIoV7ARBL57LGcatSvwgJvyAtcPpkc1s4zzo7n7T4oOTtTTPumIniIen%2F5xViNSDRzst4xZ3sT27ZXa7i8mF0N%2BpkUbc7THq3D3NdB66ZbnLyoLxJwqsquhj9QmqCMAwMlOnpExzVZ0poapTLFjDrZeKV84A612WCq4R0%2FUNdkIAgwQHDgETn96BZsJK22%2BOBH%2FwMMO%2FrcMGOqUB7bexhWlw2%2BJ%2FQUIcGZDlo%2B0uJotAh54odXcIyFZc4cQadyv%2B%2BFVTzUJ8ki0f3W96UZDf3hYLD6O%2F3a8fZZszY5EMa2FtSXlRDRt6HgtVDLNtKqf4ba1SVmw94cS83bJyd%2FlajwXgmoO7hFsNHebAyoppVz78%2FXvYHUqVyp4TXw4BfaaCu7DlBSSBZPfJ33fyRHnDRgcrlgxmtPSVperKiYKK2SQI&X-Amz-Signature=ea75cf7dda4ea4b358bc48e43324ba90faa24fd40bc52ebbac836d907dd47e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGVLC5B3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCaDawAp1Xiv3hkrMBcjq9hIGqwapytN8HbbSqzIga3ZgIgMBrPGVCSQffr%2FCOCvneENGSwCxj%2FwVeuGYsd6f3YhSIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBWKmdWhG9KPDuhq%2FSrcA6Um8kpq01qt1o5%2FyXGON1Uer1pc4TFQaWodvtBZHQJyyX8%2BC5M6a%2FzHNB85c7%2FIMhGyMs1JlwfKgeGNTgtBXOhl8wFtXwDS5NeciS0oAj02dcoBBWl6TIShn3m0%2BngOhYR4ufFgX7glrwTZgjRSYbnE%2Blv4iUEhwLe6NZ%2FQZ08T6tcU3r2xtejGj%2BKim6d8Ot67HUcrqJHjtBgMCz2%2FfYawDGmmnanF7DHzlXC2E%2BK4IPZlxHGjoUV9LuaEnt9VJOMmF6h9%2FHTgVArsIbUplMf75qzRuhqDcIEltrxiYxu%2B%2FrP4AJMVDynZFA2BdVUNdghEYLoAdu6Iy3Y1joLPH6EZQ7mnGBTcu2ilFe08PBqXtLPt%2Bp48bVwMVk0foANQdv1Gm%2FsPtWcQ3QT07vBdLGtatIr8Gutfdj%2FeId2wVrUBupLPdRWjQReNAIoV7ARBL57LGcatSvwgJvyAtcPpkc1s4zzo7n7T4oOTtTTPumIniIen%2F5xViNSDRzst4xZ3sT27ZXa7i8mF0N%2BpkUbc7THq3D3NdB66ZbnLyoLxJwqsquhj9QmqCMAwMlOnpExzVZ0poapTLFjDrZeKV84A612WCq4R0%2FUNdkIAgwQHDgETn96BZsJK22%2BOBH%2FwMMO%2FrcMGOqUB7bexhWlw2%2BJ%2FQUIcGZDlo%2B0uJotAh54odXcIyFZc4cQadyv%2B%2BFVTzUJ8ki0f3W96UZDf3hYLD6O%2F3a8fZZszY5EMa2FtSXlRDRt6HgtVDLNtKqf4ba1SVmw94cS83bJyd%2FlajwXgmoO7hFsNHebAyoppVz78%2FXvYHUqVyp4TXw4BfaaCu7DlBSSBZPfJ33fyRHnDRgcrlgxmtPSVperKiYKK2SQI&X-Amz-Signature=376589d3bacc3f05b5ad9a96d9e5b4e0ac5b7d1a16ab79f2a4456ab267d91209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
