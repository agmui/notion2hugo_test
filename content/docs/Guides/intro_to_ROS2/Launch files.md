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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XF4OPMX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdKkcFG645uaOE4cgKnw521bf7TOFcz6W1LQB6ZSL0cAiEAv3uk6fUqg53HZLjeJ0OvEHeSdFQlwVlvVxhQOtcOKz0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOpSxU2nZYeuHubWMircAwLomnBjM2YccWMgF9PjpIKGLAMc1r0VIRfr9VDVjmyYGXATM5cInYUWSyLDjkk%2B1pWD%2FGZCwgs0AOSPgzVBe9Ni%2Bj4Cqod31AYAiXYktso2F693jfUnrPKCOoDp8YlQwcaHZPnR8hirvk2vbYMw%2F6%2BY1zbyLzwPUyGKWlHfL6WCa1AI5ojRO00spHnwDSRJRScqHRF3RxoYa6%2Bhhexog082c0SCdzwZ3pr6WNF%2FhDKqRm896U4A37SaEDJ%2BOMVo7%2BfrVfHiEPQ3ZpNjuGGz95MuVLJbWVhr%2Bvzmkdt8ZRELCyfe9QiLr%2Bu1Yj7CFGv8saHAlgjAdAR81jSC3Ky0oYE9p8fzlxNH4kllvi8KUj5CZ46WKWO0jcCvxhd9CsQ05GrI2%2FatqdfGp42FQQyhNeRxUuFImSiXZD%2BOSbQHOtAttXgYpTDJCkU2NF6LXOZ3W40zqJK79LTgbVkxlUvqlnWron1rYa7z1R0FuNoZCoSwhGaKecfUVMStGnIw%2Bk4nkl0%2F8M7gpX8M64C3R7QUGajR%2F2CSw8BAenF6foG5MYTG00TJtkWb8gMscaICiDdh%2FWGXF26%2B%2FMVRqoNJQK55exqkvt2vpH%2BcMMptjoNHCCL7YFyfuzXksois2iXNMOOezb8GOqUBx%2FehgstVTurUJlcQFNSEWC6uxjWxeldghY8z8YFiGmwKF385RXxKAlrusuxNlV7j%2FmolVCLqJH33Fj4YepAn8ZKf6IrradcBGxoYd17EO9FKWmnlZuhfbbIt2%2BcDZ3opDJhCCGGHgkKEbvfoq6OOa5InLDl9ehmmSt5tIfTOUm%2Bcove3dkS7mQvy2kgJQIkhO8%2BV%2FnJde%2BTe3DwPF9n5gK15m16c&X-Amz-Signature=e0b5526f309932c1aed014c9703c1b7e0838d39f0672bd32a6962b4d7038d3ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XF4OPMX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdKkcFG645uaOE4cgKnw521bf7TOFcz6W1LQB6ZSL0cAiEAv3uk6fUqg53HZLjeJ0OvEHeSdFQlwVlvVxhQOtcOKz0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOpSxU2nZYeuHubWMircAwLomnBjM2YccWMgF9PjpIKGLAMc1r0VIRfr9VDVjmyYGXATM5cInYUWSyLDjkk%2B1pWD%2FGZCwgs0AOSPgzVBe9Ni%2Bj4Cqod31AYAiXYktso2F693jfUnrPKCOoDp8YlQwcaHZPnR8hirvk2vbYMw%2F6%2BY1zbyLzwPUyGKWlHfL6WCa1AI5ojRO00spHnwDSRJRScqHRF3RxoYa6%2Bhhexog082c0SCdzwZ3pr6WNF%2FhDKqRm896U4A37SaEDJ%2BOMVo7%2BfrVfHiEPQ3ZpNjuGGz95MuVLJbWVhr%2Bvzmkdt8ZRELCyfe9QiLr%2Bu1Yj7CFGv8saHAlgjAdAR81jSC3Ky0oYE9p8fzlxNH4kllvi8KUj5CZ46WKWO0jcCvxhd9CsQ05GrI2%2FatqdfGp42FQQyhNeRxUuFImSiXZD%2BOSbQHOtAttXgYpTDJCkU2NF6LXOZ3W40zqJK79LTgbVkxlUvqlnWron1rYa7z1R0FuNoZCoSwhGaKecfUVMStGnIw%2Bk4nkl0%2F8M7gpX8M64C3R7QUGajR%2F2CSw8BAenF6foG5MYTG00TJtkWb8gMscaICiDdh%2FWGXF26%2B%2FMVRqoNJQK55exqkvt2vpH%2BcMMptjoNHCCL7YFyfuzXksois2iXNMOOezb8GOqUBx%2FehgstVTurUJlcQFNSEWC6uxjWxeldghY8z8YFiGmwKF385RXxKAlrusuxNlV7j%2FmolVCLqJH33Fj4YepAn8ZKf6IrradcBGxoYd17EO9FKWmnlZuhfbbIt2%2BcDZ3opDJhCCGGHgkKEbvfoq6OOa5InLDl9ehmmSt5tIfTOUm%2Bcove3dkS7mQvy2kgJQIkhO8%2BV%2FnJde%2BTe3DwPF9n5gK15m16c&X-Amz-Signature=5b413dc4b7753198c6a318dd20cd92cf37425ace840e045fcb87d12a98c96e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XF4OPMX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdKkcFG645uaOE4cgKnw521bf7TOFcz6W1LQB6ZSL0cAiEAv3uk6fUqg53HZLjeJ0OvEHeSdFQlwVlvVxhQOtcOKz0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOpSxU2nZYeuHubWMircAwLomnBjM2YccWMgF9PjpIKGLAMc1r0VIRfr9VDVjmyYGXATM5cInYUWSyLDjkk%2B1pWD%2FGZCwgs0AOSPgzVBe9Ni%2Bj4Cqod31AYAiXYktso2F693jfUnrPKCOoDp8YlQwcaHZPnR8hirvk2vbYMw%2F6%2BY1zbyLzwPUyGKWlHfL6WCa1AI5ojRO00spHnwDSRJRScqHRF3RxoYa6%2Bhhexog082c0SCdzwZ3pr6WNF%2FhDKqRm896U4A37SaEDJ%2BOMVo7%2BfrVfHiEPQ3ZpNjuGGz95MuVLJbWVhr%2Bvzmkdt8ZRELCyfe9QiLr%2Bu1Yj7CFGv8saHAlgjAdAR81jSC3Ky0oYE9p8fzlxNH4kllvi8KUj5CZ46WKWO0jcCvxhd9CsQ05GrI2%2FatqdfGp42FQQyhNeRxUuFImSiXZD%2BOSbQHOtAttXgYpTDJCkU2NF6LXOZ3W40zqJK79LTgbVkxlUvqlnWron1rYa7z1R0FuNoZCoSwhGaKecfUVMStGnIw%2Bk4nkl0%2F8M7gpX8M64C3R7QUGajR%2F2CSw8BAenF6foG5MYTG00TJtkWb8gMscaICiDdh%2FWGXF26%2B%2FMVRqoNJQK55exqkvt2vpH%2BcMMptjoNHCCL7YFyfuzXksois2iXNMOOezb8GOqUBx%2FehgstVTurUJlcQFNSEWC6uxjWxeldghY8z8YFiGmwKF385RXxKAlrusuxNlV7j%2FmolVCLqJH33Fj4YepAn8ZKf6IrradcBGxoYd17EO9FKWmnlZuhfbbIt2%2BcDZ3opDJhCCGGHgkKEbvfoq6OOa5InLDl9ehmmSt5tIfTOUm%2Bcove3dkS7mQvy2kgJQIkhO8%2BV%2FnJde%2BTe3DwPF9n5gK15m16c&X-Amz-Signature=30136be8daa6cf0c31ac5a1f123ec1fad483d081e2ac46380c350ff05d51ba4d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
