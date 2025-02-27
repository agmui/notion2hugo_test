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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUAMWUWR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIDbWz5u8AYAUuCYghbJN7livSAdwDcqZBJQ%2FcE8alep%2BAiEAwGX8RetMv8624gycd6GiKE8svInDCwtbDHBpQGvtZIIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0vpnbwExs5cicXFCrcA%2Bz40wL1yHQdP%2FQ%2Ft556NZXDlIA2eF5TjahD5SJrvFyH2SveK7P9T1UCcgTMOj2%2FUdZCzhlAcpFXxCgIXdPqzHWeMQqUJwDOOxqEom4kKwrjAnTlE1Ttq%2BBOhhMtfM0DdfPneTs2V4CVD3zGLWUaWtvCmROjc5ld9IuTdfrc%2FnDNgYsKp5e6356mEABAa0CQEhSW6VhvpfqoikqJw%2FD%2FjTAzPi%2BFwL3xSX8FvLTemLfdVpbFkUh%2BQ%2F4NXheyVxYGyKToQ%2BJlg41jNpTNJugxAUAXEAkOhHrex3UVPLY1ZpQZX5dM518GN3HRs92PQ9UV2EEPOa9nUmslkrpkvzNB%2B5iPSjOceMfc5aAR0lobgAGU1QnODNfGtPTITKc%2B217NT3bmglNwXSHe6puXNyLyeU3axVOyD8XSzodf80TT6g4bkGeYYhc73XDTcc%2ByAYdX8OC9SShMeOiiT5tfAp4yPLHiSpmr%2BbKg84oEkwK%2BKwX1%2BNPk0PpItoqYE3TPWL%2FmGq8jL48UteZTezfueSXvIPHXErbBFbq3D9b2Hrhx6M5sf94KbMTnVlRSp4xfPVag2l6hv5RJcr39pXdFvc%2BDKJAT%2B7vsRQ%2BjDGW9d0ssnQn9ZWCIoE%2F0uYE%2BdVySMOnYg74GOqUBiQjA%2FllHIqJQqhwIFBvH%2BrN00%2F35TTvX2cYOaHTu9UVclI5qc1ZvbubZ4l3ZRGONBG0tMiFDEviBrocFJ7OHSKzKHOFD5oy2aSBN5m%2FEd1R%2FvRwFzHbxXjaxEfoP73Z5V4it%2FSaprlK%2Fx7%2FgSJk%2Bi2%2Ft2cDI%2Bt7aULpzKPAtyKCh%2FmcbmwACI%2F2PO9rHD9U6JWFHCRSd2aE4WJpfxiYVXjXoO%2BSl&X-Amz-Signature=45558d3334f515ee16085934af6cd9a4681cd79e25b83e0418724204b3b9ce65&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUAMWUWR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIDbWz5u8AYAUuCYghbJN7livSAdwDcqZBJQ%2FcE8alep%2BAiEAwGX8RetMv8624gycd6GiKE8svInDCwtbDHBpQGvtZIIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0vpnbwExs5cicXFCrcA%2Bz40wL1yHQdP%2FQ%2Ft556NZXDlIA2eF5TjahD5SJrvFyH2SveK7P9T1UCcgTMOj2%2FUdZCzhlAcpFXxCgIXdPqzHWeMQqUJwDOOxqEom4kKwrjAnTlE1Ttq%2BBOhhMtfM0DdfPneTs2V4CVD3zGLWUaWtvCmROjc5ld9IuTdfrc%2FnDNgYsKp5e6356mEABAa0CQEhSW6VhvpfqoikqJw%2FD%2FjTAzPi%2BFwL3xSX8FvLTemLfdVpbFkUh%2BQ%2F4NXheyVxYGyKToQ%2BJlg41jNpTNJugxAUAXEAkOhHrex3UVPLY1ZpQZX5dM518GN3HRs92PQ9UV2EEPOa9nUmslkrpkvzNB%2B5iPSjOceMfc5aAR0lobgAGU1QnODNfGtPTITKc%2B217NT3bmglNwXSHe6puXNyLyeU3axVOyD8XSzodf80TT6g4bkGeYYhc73XDTcc%2ByAYdX8OC9SShMeOiiT5tfAp4yPLHiSpmr%2BbKg84oEkwK%2BKwX1%2BNPk0PpItoqYE3TPWL%2FmGq8jL48UteZTezfueSXvIPHXErbBFbq3D9b2Hrhx6M5sf94KbMTnVlRSp4xfPVag2l6hv5RJcr39pXdFvc%2BDKJAT%2B7vsRQ%2BjDGW9d0ssnQn9ZWCIoE%2F0uYE%2BdVySMOnYg74GOqUBiQjA%2FllHIqJQqhwIFBvH%2BrN00%2F35TTvX2cYOaHTu9UVclI5qc1ZvbubZ4l3ZRGONBG0tMiFDEviBrocFJ7OHSKzKHOFD5oy2aSBN5m%2FEd1R%2FvRwFzHbxXjaxEfoP73Z5V4it%2FSaprlK%2Fx7%2FgSJk%2Bi2%2Ft2cDI%2Bt7aULpzKPAtyKCh%2FmcbmwACI%2F2PO9rHD9U6JWFHCRSd2aE4WJpfxiYVXjXoO%2BSl&X-Amz-Signature=ccc4b3061c93a688a47a9a5428ef84fd22b7d91fc235d4deeedb8c2080b09de6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUAMWUWR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIDbWz5u8AYAUuCYghbJN7livSAdwDcqZBJQ%2FcE8alep%2BAiEAwGX8RetMv8624gycd6GiKE8svInDCwtbDHBpQGvtZIIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0vpnbwExs5cicXFCrcA%2Bz40wL1yHQdP%2FQ%2Ft556NZXDlIA2eF5TjahD5SJrvFyH2SveK7P9T1UCcgTMOj2%2FUdZCzhlAcpFXxCgIXdPqzHWeMQqUJwDOOxqEom4kKwrjAnTlE1Ttq%2BBOhhMtfM0DdfPneTs2V4CVD3zGLWUaWtvCmROjc5ld9IuTdfrc%2FnDNgYsKp5e6356mEABAa0CQEhSW6VhvpfqoikqJw%2FD%2FjTAzPi%2BFwL3xSX8FvLTemLfdVpbFkUh%2BQ%2F4NXheyVxYGyKToQ%2BJlg41jNpTNJugxAUAXEAkOhHrex3UVPLY1ZpQZX5dM518GN3HRs92PQ9UV2EEPOa9nUmslkrpkvzNB%2B5iPSjOceMfc5aAR0lobgAGU1QnODNfGtPTITKc%2B217NT3bmglNwXSHe6puXNyLyeU3axVOyD8XSzodf80TT6g4bkGeYYhc73XDTcc%2ByAYdX8OC9SShMeOiiT5tfAp4yPLHiSpmr%2BbKg84oEkwK%2BKwX1%2BNPk0PpItoqYE3TPWL%2FmGq8jL48UteZTezfueSXvIPHXErbBFbq3D9b2Hrhx6M5sf94KbMTnVlRSp4xfPVag2l6hv5RJcr39pXdFvc%2BDKJAT%2B7vsRQ%2BjDGW9d0ssnQn9ZWCIoE%2F0uYE%2BdVySMOnYg74GOqUBiQjA%2FllHIqJQqhwIFBvH%2BrN00%2F35TTvX2cYOaHTu9UVclI5qc1ZvbubZ4l3ZRGONBG0tMiFDEviBrocFJ7OHSKzKHOFD5oy2aSBN5m%2FEd1R%2FvRwFzHbxXjaxEfoP73Z5V4it%2FSaprlK%2Fx7%2FgSJk%2Bi2%2Ft2cDI%2Bt7aULpzKPAtyKCh%2FmcbmwACI%2F2PO9rHD9U6JWFHCRSd2aE4WJpfxiYVXjXoO%2BSl&X-Amz-Signature=6c805c6f5e7fbab7b71ebfc356f4075ea19197d1ae0d0722998d0cd6f1895c6a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
