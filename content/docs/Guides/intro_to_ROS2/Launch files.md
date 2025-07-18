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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CRQIIEB%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCs5hB7pBLrNhWDcjbXWa5Na4GgIRP0wg51kGm5nPA0uwIgPFXEZKM%2FBFbrJ7OR1Qpa850ZOiw9Idf3q2cf7s82ZJYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJv%2FeGaXeHyjLgU1ySrcA6Pn4olFl4ihr%2BIGJIXJQZqJGbKZHIeZmHvDtLPX5qNbyxdYBz9VP1gfTlVAWTyHZJk1NXl6bOFVDFQGmIl0QVlS%2BFM%2BElSplYWVhOpF9EIzTnlK7jzU0fBP6wqBc66VqxzTc9k6GyLPobVldoIv0lcifViN%2BLmx6u8bqhas8GPrWcLzwBjCmO0lpf9xdYEHz4Af5W3gnlQoP0%2B4OpEK%2BP977s7LXHLCIFa4Ped6Ugy9TiLjflcViJaE8XUb84mAAQ98o6Q6f3FPDJ%2FfE48AQbVOysV0fZ71FXIHXC158srtGSbrPpZjlyLGjlyb3CR%2FWrjBtoJiSEPdTDIsJeKqUtye6pamZsi9iI2pEOA0Hbi3msrDcg9qXYtGJhLagYh3I%2F9MPlQxmIje%2FCtC9w%2BJOfprQ8tFBPp3%2BN2Sb%2F8MZFxRYNOty86tMkCqIKEs%2B4g95m0JdrLKUY7O3qdgrRoTGbkvRia1D6GM%2BzaI8JFiQCbCT4bwXrVL9xym9sN3Zp4g2c3ZtZXZP303iwHvJO5kKdX2AgIUW%2B7ZqHKwyw6txK4%2F7n%2FNOBB40qmeJ%2B2yWqsKaHVGLocwbe2Bh8KzYYcUJDCmSSbbKK5enxuo9gsB0FG07N9xelTSmlXo1eooMLHP6MMGOqUBQGsBt51%2BZBhuHom8nk0tahbaeGOCW8wdy7SkE6Y5TSTTLzkrYsFfbr2bqcNO1alheJTGVDeAvpYbO921ZyB5BG7YeXYumo%2FMr1EgXj6w5xtg1K7XoEq%2FwXsbr31HpThtkGriMBmZvKpBJY8tzMGEpYO45g5shLMfpOrAP3bI6SKfeaGwlEi4LLZfL2coQxOusC6xxYiMkogHSaEtgYV8yPEwOXCD&X-Amz-Signature=e96689b8f79f400fd15f9c3f6fcaecdaee69159924c58a79d9d3e322af302cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CRQIIEB%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCs5hB7pBLrNhWDcjbXWa5Na4GgIRP0wg51kGm5nPA0uwIgPFXEZKM%2FBFbrJ7OR1Qpa850ZOiw9Idf3q2cf7s82ZJYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJv%2FeGaXeHyjLgU1ySrcA6Pn4olFl4ihr%2BIGJIXJQZqJGbKZHIeZmHvDtLPX5qNbyxdYBz9VP1gfTlVAWTyHZJk1NXl6bOFVDFQGmIl0QVlS%2BFM%2BElSplYWVhOpF9EIzTnlK7jzU0fBP6wqBc66VqxzTc9k6GyLPobVldoIv0lcifViN%2BLmx6u8bqhas8GPrWcLzwBjCmO0lpf9xdYEHz4Af5W3gnlQoP0%2B4OpEK%2BP977s7LXHLCIFa4Ped6Ugy9TiLjflcViJaE8XUb84mAAQ98o6Q6f3FPDJ%2FfE48AQbVOysV0fZ71FXIHXC158srtGSbrPpZjlyLGjlyb3CR%2FWrjBtoJiSEPdTDIsJeKqUtye6pamZsi9iI2pEOA0Hbi3msrDcg9qXYtGJhLagYh3I%2F9MPlQxmIje%2FCtC9w%2BJOfprQ8tFBPp3%2BN2Sb%2F8MZFxRYNOty86tMkCqIKEs%2B4g95m0JdrLKUY7O3qdgrRoTGbkvRia1D6GM%2BzaI8JFiQCbCT4bwXrVL9xym9sN3Zp4g2c3ZtZXZP303iwHvJO5kKdX2AgIUW%2B7ZqHKwyw6txK4%2F7n%2FNOBB40qmeJ%2B2yWqsKaHVGLocwbe2Bh8KzYYcUJDCmSSbbKK5enxuo9gsB0FG07N9xelTSmlXo1eooMLHP6MMGOqUBQGsBt51%2BZBhuHom8nk0tahbaeGOCW8wdy7SkE6Y5TSTTLzkrYsFfbr2bqcNO1alheJTGVDeAvpYbO921ZyB5BG7YeXYumo%2FMr1EgXj6w5xtg1K7XoEq%2FwXsbr31HpThtkGriMBmZvKpBJY8tzMGEpYO45g5shLMfpOrAP3bI6SKfeaGwlEi4LLZfL2coQxOusC6xxYiMkogHSaEtgYV8yPEwOXCD&X-Amz-Signature=20973f6fc2a8682fb148b1ddc2477645177d87f20c7b2c7253b727c90690a3bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CRQIIEB%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCs5hB7pBLrNhWDcjbXWa5Na4GgIRP0wg51kGm5nPA0uwIgPFXEZKM%2FBFbrJ7OR1Qpa850ZOiw9Idf3q2cf7s82ZJYqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJv%2FeGaXeHyjLgU1ySrcA6Pn4olFl4ihr%2BIGJIXJQZqJGbKZHIeZmHvDtLPX5qNbyxdYBz9VP1gfTlVAWTyHZJk1NXl6bOFVDFQGmIl0QVlS%2BFM%2BElSplYWVhOpF9EIzTnlK7jzU0fBP6wqBc66VqxzTc9k6GyLPobVldoIv0lcifViN%2BLmx6u8bqhas8GPrWcLzwBjCmO0lpf9xdYEHz4Af5W3gnlQoP0%2B4OpEK%2BP977s7LXHLCIFa4Ped6Ugy9TiLjflcViJaE8XUb84mAAQ98o6Q6f3FPDJ%2FfE48AQbVOysV0fZ71FXIHXC158srtGSbrPpZjlyLGjlyb3CR%2FWrjBtoJiSEPdTDIsJeKqUtye6pamZsi9iI2pEOA0Hbi3msrDcg9qXYtGJhLagYh3I%2F9MPlQxmIje%2FCtC9w%2BJOfprQ8tFBPp3%2BN2Sb%2F8MZFxRYNOty86tMkCqIKEs%2B4g95m0JdrLKUY7O3qdgrRoTGbkvRia1D6GM%2BzaI8JFiQCbCT4bwXrVL9xym9sN3Zp4g2c3ZtZXZP303iwHvJO5kKdX2AgIUW%2B7ZqHKwyw6txK4%2F7n%2FNOBB40qmeJ%2B2yWqsKaHVGLocwbe2Bh8KzYYcUJDCmSSbbKK5enxuo9gsB0FG07N9xelTSmlXo1eooMLHP6MMGOqUBQGsBt51%2BZBhuHom8nk0tahbaeGOCW8wdy7SkE6Y5TSTTLzkrYsFfbr2bqcNO1alheJTGVDeAvpYbO921ZyB5BG7YeXYumo%2FMr1EgXj6w5xtg1K7XoEq%2FwXsbr31HpThtkGriMBmZvKpBJY8tzMGEpYO45g5shLMfpOrAP3bI6SKfeaGwlEi4LLZfL2coQxOusC6xxYiMkogHSaEtgYV8yPEwOXCD&X-Amz-Signature=b9e8ef76caa7b61db45934349eee79119b04c813b0e347edfec481c17a8c0924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
