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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFX3HRBO%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxhyJ%2Bi71BnnVFxuIRoRSulNagOOw9NLP2F2DuOTRhegIgK6P8G89Z%2BTQWaQ5fr2lR6DOMsNyXRmGMbQkMPf0dcMAqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXXClxtYZqlY6TCpSrcAwCCwWFlY%2BHIKgYNG23ekhQC85r0cZAH9OlCEzc%2BYn7fQnL%2FNPZ5QUWV6RjCL0ZA8HkeRUDn74r0D%2BHmvjwnKIaN4V69WNWwtcs60hYlI0OmYlsR%2BpTM141Su%2FHD1dtOVj32zoHpMpF506VpPxtWnybJmDO74Wa4QBOeXBr3VIosjdn4SQx9n5YzwstMUm%2FQ6%2B0Xqh3vQcy%2BV8bxH0uRcZVMhNPxnJUUGd4Xa85BUSlMKoT1BzpG2bnVXEfzUc4irz%2Biw4xeU53Dxk5ORnVDj%2BqFqEUFaNzj3siPCU429evO%2FryLQwcHH81HeH%2Be3X3u%2BR%2FtATLR6x4RnNGOaxLZ1rRIolAQxqhq9iIH1lOCxcsGhFgPRLesx4Wf3GGHz6Ee4Y1ED5TOALpzhZGcyfUnrBYYh3NQ5lAMyqfr%2BD1cAS343DepPd56pHgUn29FnCZmJZSs8Gy7%2BkYRiyMeh68XLekqC2dDkVPSDIKKN7ISLD8sAPwxkOtnfYldQAppWCFXLf2cL3f3EQtz57P%2F1hlkyAjgj0fjzIKktHNp6mBbf9bSULl1Zhu2yl5aM0RLaDz4GVx2P%2F46O6Rxj2KO8fv%2FWLkqgU5oyRokYUkbp0b96eFEemds9OT1KrwGwfSvMKSPzMIGOqUB8ta8aCspdeg0e9LkkfD7fPyBLiaZXHvhZN9eqUY5SUapXRYZLXdRYZRZzjKOX2%2FEbciTRPmJDcaugrjhUFdP1%2BYTnSN1eP2tGHIhNuhC16G%2BvKxxDDBOQWIsnRr7f91I6kOgC6reQNZvJpJAmxxaON9qFlULjrX1NdMK4JvfjHLQXxErS83LTvlhfXlAzKcirGQkMQzcXn8nNVnUOQvhBQnAcpXR&X-Amz-Signature=856e9c56948f086bb11103bfc8e9459241e7c67a60f2cd75775021a0edc6beba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFX3HRBO%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxhyJ%2Bi71BnnVFxuIRoRSulNagOOw9NLP2F2DuOTRhegIgK6P8G89Z%2BTQWaQ5fr2lR6DOMsNyXRmGMbQkMPf0dcMAqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXXClxtYZqlY6TCpSrcAwCCwWFlY%2BHIKgYNG23ekhQC85r0cZAH9OlCEzc%2BYn7fQnL%2FNPZ5QUWV6RjCL0ZA8HkeRUDn74r0D%2BHmvjwnKIaN4V69WNWwtcs60hYlI0OmYlsR%2BpTM141Su%2FHD1dtOVj32zoHpMpF506VpPxtWnybJmDO74Wa4QBOeXBr3VIosjdn4SQx9n5YzwstMUm%2FQ6%2B0Xqh3vQcy%2BV8bxH0uRcZVMhNPxnJUUGd4Xa85BUSlMKoT1BzpG2bnVXEfzUc4irz%2Biw4xeU53Dxk5ORnVDj%2BqFqEUFaNzj3siPCU429evO%2FryLQwcHH81HeH%2Be3X3u%2BR%2FtATLR6x4RnNGOaxLZ1rRIolAQxqhq9iIH1lOCxcsGhFgPRLesx4Wf3GGHz6Ee4Y1ED5TOALpzhZGcyfUnrBYYh3NQ5lAMyqfr%2BD1cAS343DepPd56pHgUn29FnCZmJZSs8Gy7%2BkYRiyMeh68XLekqC2dDkVPSDIKKN7ISLD8sAPwxkOtnfYldQAppWCFXLf2cL3f3EQtz57P%2F1hlkyAjgj0fjzIKktHNp6mBbf9bSULl1Zhu2yl5aM0RLaDz4GVx2P%2F46O6Rxj2KO8fv%2FWLkqgU5oyRokYUkbp0b96eFEemds9OT1KrwGwfSvMKSPzMIGOqUB8ta8aCspdeg0e9LkkfD7fPyBLiaZXHvhZN9eqUY5SUapXRYZLXdRYZRZzjKOX2%2FEbciTRPmJDcaugrjhUFdP1%2BYTnSN1eP2tGHIhNuhC16G%2BvKxxDDBOQWIsnRr7f91I6kOgC6reQNZvJpJAmxxaON9qFlULjrX1NdMK4JvfjHLQXxErS83LTvlhfXlAzKcirGQkMQzcXn8nNVnUOQvhBQnAcpXR&X-Amz-Signature=e4b80b45170ed407b4e3e986d53727ccf635d1346d3664c9bfe921a6f0ce6b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFX3HRBO%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxhyJ%2Bi71BnnVFxuIRoRSulNagOOw9NLP2F2DuOTRhegIgK6P8G89Z%2BTQWaQ5fr2lR6DOMsNyXRmGMbQkMPf0dcMAqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXXClxtYZqlY6TCpSrcAwCCwWFlY%2BHIKgYNG23ekhQC85r0cZAH9OlCEzc%2BYn7fQnL%2FNPZ5QUWV6RjCL0ZA8HkeRUDn74r0D%2BHmvjwnKIaN4V69WNWwtcs60hYlI0OmYlsR%2BpTM141Su%2FHD1dtOVj32zoHpMpF506VpPxtWnybJmDO74Wa4QBOeXBr3VIosjdn4SQx9n5YzwstMUm%2FQ6%2B0Xqh3vQcy%2BV8bxH0uRcZVMhNPxnJUUGd4Xa85BUSlMKoT1BzpG2bnVXEfzUc4irz%2Biw4xeU53Dxk5ORnVDj%2BqFqEUFaNzj3siPCU429evO%2FryLQwcHH81HeH%2Be3X3u%2BR%2FtATLR6x4RnNGOaxLZ1rRIolAQxqhq9iIH1lOCxcsGhFgPRLesx4Wf3GGHz6Ee4Y1ED5TOALpzhZGcyfUnrBYYh3NQ5lAMyqfr%2BD1cAS343DepPd56pHgUn29FnCZmJZSs8Gy7%2BkYRiyMeh68XLekqC2dDkVPSDIKKN7ISLD8sAPwxkOtnfYldQAppWCFXLf2cL3f3EQtz57P%2F1hlkyAjgj0fjzIKktHNp6mBbf9bSULl1Zhu2yl5aM0RLaDz4GVx2P%2F46O6Rxj2KO8fv%2FWLkqgU5oyRokYUkbp0b96eFEemds9OT1KrwGwfSvMKSPzMIGOqUB8ta8aCspdeg0e9LkkfD7fPyBLiaZXHvhZN9eqUY5SUapXRYZLXdRYZRZzjKOX2%2FEbciTRPmJDcaugrjhUFdP1%2BYTnSN1eP2tGHIhNuhC16G%2BvKxxDDBOQWIsnRr7f91I6kOgC6reQNZvJpJAmxxaON9qFlULjrX1NdMK4JvfjHLQXxErS83LTvlhfXlAzKcirGQkMQzcXn8nNVnUOQvhBQnAcpXR&X-Amz-Signature=86b3d118e156c1d638c1663576470703058be48a2721419511ec0e0584f31772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
