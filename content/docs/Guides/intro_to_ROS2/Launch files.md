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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQZJUD2G%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGJSICEz3kOj0tNyFZXKfk7gQSOuObZCD2BgXkHx%2F5%2BvAiEA9p7JvDMMc96yhQ6TjlZNMeijuG9%2BYxdfXBY1DrrSWbMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCDv31U9bL%2FAI%2FTp8ircA8XZNdLdDyu5AgVJNe61gltZAfDuldo6Gv%2FrR%2FXIiFEMxcJTJbgtrBbA3RcBQ4Vj6ceqSPp0P7r29H3oqoQuFCBfHKTKaH6tT3EdOQVjpZlMpPwNbM8C5aH3rpeqdcdSoDmKVSw2LOGavQ6PesGI9VA4ajIJfmza61dOuu9EaViIjbeN6I1sPbI27alMbv%2Bcj6oxfrNuLLwNazc8PyhnMeXuKI8MsLkMHUCkbDGBmgzYUOqut9v%2F7duPn5QqeRoZ6uVrZnVQgbDmekfkIsinKJQJWO7TvnVnBzHbEpaTtJlJSJBKi6uhabGeqwjXATvPqRhlgowRTTiPBABXNLXXZrJU8ZTnBdYORJVwoXoYqx0emImtkhkM7C%2B6zAkcUd0jUnoDStcZ3%2B2JO67qMVRomWQTdcPlf6XIFM3NM4yHTYuYBVZUONgIFQMg30QUS1BW%2B2CfjUBVtyPGiQg0I8D%2FqJ3QHOuZIomVFc0qEhBmPt1dG%2BM4bDCipgcGVKL6gWLwmAjVAufsqUlDx82040j6PulrniAirWCo5CJs5W9RHtcwR84quJsqXEBOiE9F9JZ9NdAWpE5DU0aJCA7T0ax7TVBRvtZQ6fyrIlgXcZ92%2FfHn891P0sJe41sN4JoAMPars74GOqUBiYAABVpYulGHopS06ZzCl697xvBg4HXik%2FuT9IbtBHk2%2Bh%2FD37Zpw878ycINIg0HOMN%2F2SBcqp3dQNBxIio1wq9hKQiXrnmFdptng0X2kBuiCUk%2Bru7ijuA2bI5IeouQLGk86I%2FDmPmoUuLrBH7%2Fai68LzGv5CFGDVsLdMUQIuSMtrAu%2BqoTzqcGx4WZtggPvER%2FZTJ9XME272Imo8xdKOqOI34X&X-Amz-Signature=d23a480b8c0c929672c0045fc4e09ff6b71d7cbf9513bc26f53af6e36ace8dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQZJUD2G%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGJSICEz3kOj0tNyFZXKfk7gQSOuObZCD2BgXkHx%2F5%2BvAiEA9p7JvDMMc96yhQ6TjlZNMeijuG9%2BYxdfXBY1DrrSWbMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCDv31U9bL%2FAI%2FTp8ircA8XZNdLdDyu5AgVJNe61gltZAfDuldo6Gv%2FrR%2FXIiFEMxcJTJbgtrBbA3RcBQ4Vj6ceqSPp0P7r29H3oqoQuFCBfHKTKaH6tT3EdOQVjpZlMpPwNbM8C5aH3rpeqdcdSoDmKVSw2LOGavQ6PesGI9VA4ajIJfmza61dOuu9EaViIjbeN6I1sPbI27alMbv%2Bcj6oxfrNuLLwNazc8PyhnMeXuKI8MsLkMHUCkbDGBmgzYUOqut9v%2F7duPn5QqeRoZ6uVrZnVQgbDmekfkIsinKJQJWO7TvnVnBzHbEpaTtJlJSJBKi6uhabGeqwjXATvPqRhlgowRTTiPBABXNLXXZrJU8ZTnBdYORJVwoXoYqx0emImtkhkM7C%2B6zAkcUd0jUnoDStcZ3%2B2JO67qMVRomWQTdcPlf6XIFM3NM4yHTYuYBVZUONgIFQMg30QUS1BW%2B2CfjUBVtyPGiQg0I8D%2FqJ3QHOuZIomVFc0qEhBmPt1dG%2BM4bDCipgcGVKL6gWLwmAjVAufsqUlDx82040j6PulrniAirWCo5CJs5W9RHtcwR84quJsqXEBOiE9F9JZ9NdAWpE5DU0aJCA7T0ax7TVBRvtZQ6fyrIlgXcZ92%2FfHn891P0sJe41sN4JoAMPars74GOqUBiYAABVpYulGHopS06ZzCl697xvBg4HXik%2FuT9IbtBHk2%2Bh%2FD37Zpw878ycINIg0HOMN%2F2SBcqp3dQNBxIio1wq9hKQiXrnmFdptng0X2kBuiCUk%2Bru7ijuA2bI5IeouQLGk86I%2FDmPmoUuLrBH7%2Fai68LzGv5CFGDVsLdMUQIuSMtrAu%2BqoTzqcGx4WZtggPvER%2FZTJ9XME272Imo8xdKOqOI34X&X-Amz-Signature=614fe97ea6b87e7802efda2438aa32a6bf977b7296ec419592d5511ab621a0bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQZJUD2G%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGJSICEz3kOj0tNyFZXKfk7gQSOuObZCD2BgXkHx%2F5%2BvAiEA9p7JvDMMc96yhQ6TjlZNMeijuG9%2BYxdfXBY1DrrSWbMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCDv31U9bL%2FAI%2FTp8ircA8XZNdLdDyu5AgVJNe61gltZAfDuldo6Gv%2FrR%2FXIiFEMxcJTJbgtrBbA3RcBQ4Vj6ceqSPp0P7r29H3oqoQuFCBfHKTKaH6tT3EdOQVjpZlMpPwNbM8C5aH3rpeqdcdSoDmKVSw2LOGavQ6PesGI9VA4ajIJfmza61dOuu9EaViIjbeN6I1sPbI27alMbv%2Bcj6oxfrNuLLwNazc8PyhnMeXuKI8MsLkMHUCkbDGBmgzYUOqut9v%2F7duPn5QqeRoZ6uVrZnVQgbDmekfkIsinKJQJWO7TvnVnBzHbEpaTtJlJSJBKi6uhabGeqwjXATvPqRhlgowRTTiPBABXNLXXZrJU8ZTnBdYORJVwoXoYqx0emImtkhkM7C%2B6zAkcUd0jUnoDStcZ3%2B2JO67qMVRomWQTdcPlf6XIFM3NM4yHTYuYBVZUONgIFQMg30QUS1BW%2B2CfjUBVtyPGiQg0I8D%2FqJ3QHOuZIomVFc0qEhBmPt1dG%2BM4bDCipgcGVKL6gWLwmAjVAufsqUlDx82040j6PulrniAirWCo5CJs5W9RHtcwR84quJsqXEBOiE9F9JZ9NdAWpE5DU0aJCA7T0ax7TVBRvtZQ6fyrIlgXcZ92%2FfHn891P0sJe41sN4JoAMPars74GOqUBiYAABVpYulGHopS06ZzCl697xvBg4HXik%2FuT9IbtBHk2%2Bh%2FD37Zpw878ycINIg0HOMN%2F2SBcqp3dQNBxIio1wq9hKQiXrnmFdptng0X2kBuiCUk%2Bru7ijuA2bI5IeouQLGk86I%2FDmPmoUuLrBH7%2Fai68LzGv5CFGDVsLdMUQIuSMtrAu%2BqoTzqcGx4WZtggPvER%2FZTJ9XME272Imo8xdKOqOI34X&X-Amz-Signature=47f083fec1b6e4c784140fa85add356a4ea488a794f08d26b077d81296bc1080&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
