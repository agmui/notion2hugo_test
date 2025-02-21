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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5OMLFP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGAJ2rtugoW9CuasCxP4ruzlzRnQeG2ViBf%2F%2FBTV99NgIgQnlpYzRa6mm79tO1GdKf%2BQBJ5skyHk3tRjTOQNuYsfgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcJ%2BXIxXbfvl0vP3yrcA8nUM9skC0aPvzRNnxPWbUOcVjpnP7CERdoN1BDlxk5TZCwN1MU%2F2Hg8rA1S9FAW924B6hmqjIy2WpsCCMu9uaAEAYf5FSOvIpjuFbW6xvpmvpMHWyQjU7mx5nL32h1D9JSjTSnnvw4462uEK%2F5o5J8X77BH7AB1KYjnhEVreGedzPSm4TkWrs61DEcXMfOHI6f90rS2WyV0MSc%2B3msxb3fVj3qbscuGwojCUSjIg00odcGBI3xKTdK6ylPq0MUNH%2F3jzqgpTSbc0orEr85mGwZmO7Sg0j71%2Bz1FD6PsRA%2F5TUouFVBh8BtQkwuX5vq6Wb%2BjUL8geV5%2BF6hkVrQUzTa2H9jg0x97aYqYaLmOQTDeL63u3LG3BUjs7UCdVAyuE5EPrGnZiJPTkree66%2BOTAAX8GarwsEXo5pTcERuQKLnMXPwt7YDZRP6f2nbKAqHFMFTbBIm91%2BETSJEmHDQC%2BpxeDteO39ihrWl%2Bg4EmaDxHGFEL8gvka2HFi6wqumI%2BVv6SuOT4X58G1Te5FrgB5DPeHjRibFh%2Bk9%2FSx8%2BVfm0JZQIMIkhFw%2BQcZBSs0H41Lf77Agg6GS1bhAu%2FueVmVxVM8q9nygfyHbvzjcj4oCFd%2FUa0iGU98lVHYW1MLf74L0GOqUBU90ZD6qDgzacuB1xf%2FWabwhB2kY9zdaccwdaCHdkaAhscOUCIM0Ud4FP02AnelGFO2VrvwvCZA7j3pa6ml8MfW5yBiWyFWYnTBbv2vPvNjImqbCSCXIJ%2Fe7X6czJgx6ZrR7v3VHKam8eCoiifC%2FkEJe3P4vuQRZGJ6aYOzb0beKTiD2nBGMXbDrUQvlJ6lE74J%2F3XuBEDslRrLMQQRzEpI0uaAjC&X-Amz-Signature=e114c6705b5a4794dcb6746863a62dd538ebed7e62974a7a1e65b5ac0c2b8f51&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5OMLFP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGAJ2rtugoW9CuasCxP4ruzlzRnQeG2ViBf%2F%2FBTV99NgIgQnlpYzRa6mm79tO1GdKf%2BQBJ5skyHk3tRjTOQNuYsfgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcJ%2BXIxXbfvl0vP3yrcA8nUM9skC0aPvzRNnxPWbUOcVjpnP7CERdoN1BDlxk5TZCwN1MU%2F2Hg8rA1S9FAW924B6hmqjIy2WpsCCMu9uaAEAYf5FSOvIpjuFbW6xvpmvpMHWyQjU7mx5nL32h1D9JSjTSnnvw4462uEK%2F5o5J8X77BH7AB1KYjnhEVreGedzPSm4TkWrs61DEcXMfOHI6f90rS2WyV0MSc%2B3msxb3fVj3qbscuGwojCUSjIg00odcGBI3xKTdK6ylPq0MUNH%2F3jzqgpTSbc0orEr85mGwZmO7Sg0j71%2Bz1FD6PsRA%2F5TUouFVBh8BtQkwuX5vq6Wb%2BjUL8geV5%2BF6hkVrQUzTa2H9jg0x97aYqYaLmOQTDeL63u3LG3BUjs7UCdVAyuE5EPrGnZiJPTkree66%2BOTAAX8GarwsEXo5pTcERuQKLnMXPwt7YDZRP6f2nbKAqHFMFTbBIm91%2BETSJEmHDQC%2BpxeDteO39ihrWl%2Bg4EmaDxHGFEL8gvka2HFi6wqumI%2BVv6SuOT4X58G1Te5FrgB5DPeHjRibFh%2Bk9%2FSx8%2BVfm0JZQIMIkhFw%2BQcZBSs0H41Lf77Agg6GS1bhAu%2FueVmVxVM8q9nygfyHbvzjcj4oCFd%2FUa0iGU98lVHYW1MLf74L0GOqUBU90ZD6qDgzacuB1xf%2FWabwhB2kY9zdaccwdaCHdkaAhscOUCIM0Ud4FP02AnelGFO2VrvwvCZA7j3pa6ml8MfW5yBiWyFWYnTBbv2vPvNjImqbCSCXIJ%2Fe7X6czJgx6ZrR7v3VHKam8eCoiifC%2FkEJe3P4vuQRZGJ6aYOzb0beKTiD2nBGMXbDrUQvlJ6lE74J%2F3XuBEDslRrLMQQRzEpI0uaAjC&X-Amz-Signature=51210e3064310e8319bc869fef7fbcf446b49ec3f4e0dcf6e0a3fb5bd8684a57&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F5OMLFP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGAJ2rtugoW9CuasCxP4ruzlzRnQeG2ViBf%2F%2FBTV99NgIgQnlpYzRa6mm79tO1GdKf%2BQBJ5skyHk3tRjTOQNuYsfgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcJ%2BXIxXbfvl0vP3yrcA8nUM9skC0aPvzRNnxPWbUOcVjpnP7CERdoN1BDlxk5TZCwN1MU%2F2Hg8rA1S9FAW924B6hmqjIy2WpsCCMu9uaAEAYf5FSOvIpjuFbW6xvpmvpMHWyQjU7mx5nL32h1D9JSjTSnnvw4462uEK%2F5o5J8X77BH7AB1KYjnhEVreGedzPSm4TkWrs61DEcXMfOHI6f90rS2WyV0MSc%2B3msxb3fVj3qbscuGwojCUSjIg00odcGBI3xKTdK6ylPq0MUNH%2F3jzqgpTSbc0orEr85mGwZmO7Sg0j71%2Bz1FD6PsRA%2F5TUouFVBh8BtQkwuX5vq6Wb%2BjUL8geV5%2BF6hkVrQUzTa2H9jg0x97aYqYaLmOQTDeL63u3LG3BUjs7UCdVAyuE5EPrGnZiJPTkree66%2BOTAAX8GarwsEXo5pTcERuQKLnMXPwt7YDZRP6f2nbKAqHFMFTbBIm91%2BETSJEmHDQC%2BpxeDteO39ihrWl%2Bg4EmaDxHGFEL8gvka2HFi6wqumI%2BVv6SuOT4X58G1Te5FrgB5DPeHjRibFh%2Bk9%2FSx8%2BVfm0JZQIMIkhFw%2BQcZBSs0H41Lf77Agg6GS1bhAu%2FueVmVxVM8q9nygfyHbvzjcj4oCFd%2FUa0iGU98lVHYW1MLf74L0GOqUBU90ZD6qDgzacuB1xf%2FWabwhB2kY9zdaccwdaCHdkaAhscOUCIM0Ud4FP02AnelGFO2VrvwvCZA7j3pa6ml8MfW5yBiWyFWYnTBbv2vPvNjImqbCSCXIJ%2Fe7X6czJgx6ZrR7v3VHKam8eCoiifC%2FkEJe3P4vuQRZGJ6aYOzb0beKTiD2nBGMXbDrUQvlJ6lE74J%2F3XuBEDslRrLMQQRzEpI0uaAjC&X-Amz-Signature=319bb07833cf6417b936ff0e9a225a57d2dba119218bc2ee2fcd356996d9aded&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
