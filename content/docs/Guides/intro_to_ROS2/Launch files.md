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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VAXK2B2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2y6itpn7TQo%2FlJFddusuc7ReUOHMPpcb44XcbzrDKdgIgKXy7CXGAdbyNtSwRgOetFN0xszsRjd%2FxAaJ6n%2BA%2BxIYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKrmsbMWLl2aRwztXircA0u256%2BjBCX%2BTpyYfcl0MwlPFeIpQEhXcxjD71F2z0TjP1q6G7lde0h4%2FhKrwRsBllFMdoP4HMPCypi2z1o0SZimfDKztZUTeGgWHbWSBPH6le5bR%2Bg37QC3PEWd%2BZKs7fmr5jSnV4DKRuO58GEYO%2FUt3q8cMFZPisMu%2FWL8YBkSlWQNAamwbyf%2BwfvwZgqskxe%2FZX7j2%2BA2OCFW0tM4vF09lJ4nxDRt6I1Xhl3YWZnu4nRvwIWfAM%2FlW3EDezmrPSVnPcHMnk%2FQpMpc48S7SyyItkkYn9QcGNETa7C2Wxg4D5TAPeT%2BFGMB3qKTow9HddP4PRCT8P86Uj3RE4EKS46Vy%2BQdSOm2UT9AHxkRm4Z2Tr944Yn1XKAfpUFvyn26P2F99LArWiefZZe9IwnML%2BivrfEUX%2FWUNF7MTM5urwcn6FjZBPrn8Hgkb3YknoKFQF8hWB%2BX2UnHL%2FE7Bn0CKHsy20WsIHXih5H85NrRvr3pCvHi1pXbwM8snKvoFGo9THwi7Awa1hSparZUJrl%2BZyAn4fLjWdPFTZC36cpebuZKVVdpWJaSnkxSIVLVv%2F87%2B4W0P6lhhoMDQJmBgnK7mDH%2BKkd8izT5qvQF7i5b%2Bu6RcVw2WmNQrSn3QlcpMJ%2FEi78GOqUBS556bwPin2MbgXC7xc1DBjMvFGmqTSKCJGQg4iWDRyjnPVF67cx2uXEJPke1Yznm39ag8%2BOPAtEArvGfURy8HZNdjZK5DNKVLUBeFIgVZMXuz%2FnmeBpNK6XoPSJ5LKJzlPOJur1GnFaEKvgWV4dzjM%2FrQZ5R%2FOct%2BNRWdleDc1wJqxfszSFBASLFZJHzOFPXDb%2BpRqawv%2F1SBymvrFwiDIzozGPH&X-Amz-Signature=7e6315e470c599eaa86696af714057f1940d0e3883459bd091f63c3fa93e00a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VAXK2B2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2y6itpn7TQo%2FlJFddusuc7ReUOHMPpcb44XcbzrDKdgIgKXy7CXGAdbyNtSwRgOetFN0xszsRjd%2FxAaJ6n%2BA%2BxIYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKrmsbMWLl2aRwztXircA0u256%2BjBCX%2BTpyYfcl0MwlPFeIpQEhXcxjD71F2z0TjP1q6G7lde0h4%2FhKrwRsBllFMdoP4HMPCypi2z1o0SZimfDKztZUTeGgWHbWSBPH6le5bR%2Bg37QC3PEWd%2BZKs7fmr5jSnV4DKRuO58GEYO%2FUt3q8cMFZPisMu%2FWL8YBkSlWQNAamwbyf%2BwfvwZgqskxe%2FZX7j2%2BA2OCFW0tM4vF09lJ4nxDRt6I1Xhl3YWZnu4nRvwIWfAM%2FlW3EDezmrPSVnPcHMnk%2FQpMpc48S7SyyItkkYn9QcGNETa7C2Wxg4D5TAPeT%2BFGMB3qKTow9HddP4PRCT8P86Uj3RE4EKS46Vy%2BQdSOm2UT9AHxkRm4Z2Tr944Yn1XKAfpUFvyn26P2F99LArWiefZZe9IwnML%2BivrfEUX%2FWUNF7MTM5urwcn6FjZBPrn8Hgkb3YknoKFQF8hWB%2BX2UnHL%2FE7Bn0CKHsy20WsIHXih5H85NrRvr3pCvHi1pXbwM8snKvoFGo9THwi7Awa1hSparZUJrl%2BZyAn4fLjWdPFTZC36cpebuZKVVdpWJaSnkxSIVLVv%2F87%2B4W0P6lhhoMDQJmBgnK7mDH%2BKkd8izT5qvQF7i5b%2Bu6RcVw2WmNQrSn3QlcpMJ%2FEi78GOqUBS556bwPin2MbgXC7xc1DBjMvFGmqTSKCJGQg4iWDRyjnPVF67cx2uXEJPke1Yznm39ag8%2BOPAtEArvGfURy8HZNdjZK5DNKVLUBeFIgVZMXuz%2FnmeBpNK6XoPSJ5LKJzlPOJur1GnFaEKvgWV4dzjM%2FrQZ5R%2FOct%2BNRWdleDc1wJqxfszSFBASLFZJHzOFPXDb%2BpRqawv%2F1SBymvrFwiDIzozGPH&X-Amz-Signature=25dc4c0fe4d029d38803ce0fdb2554f964089378c458691179db3878a3a792b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VAXK2B2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2y6itpn7TQo%2FlJFddusuc7ReUOHMPpcb44XcbzrDKdgIgKXy7CXGAdbyNtSwRgOetFN0xszsRjd%2FxAaJ6n%2BA%2BxIYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKrmsbMWLl2aRwztXircA0u256%2BjBCX%2BTpyYfcl0MwlPFeIpQEhXcxjD71F2z0TjP1q6G7lde0h4%2FhKrwRsBllFMdoP4HMPCypi2z1o0SZimfDKztZUTeGgWHbWSBPH6le5bR%2Bg37QC3PEWd%2BZKs7fmr5jSnV4DKRuO58GEYO%2FUt3q8cMFZPisMu%2FWL8YBkSlWQNAamwbyf%2BwfvwZgqskxe%2FZX7j2%2BA2OCFW0tM4vF09lJ4nxDRt6I1Xhl3YWZnu4nRvwIWfAM%2FlW3EDezmrPSVnPcHMnk%2FQpMpc48S7SyyItkkYn9QcGNETa7C2Wxg4D5TAPeT%2BFGMB3qKTow9HddP4PRCT8P86Uj3RE4EKS46Vy%2BQdSOm2UT9AHxkRm4Z2Tr944Yn1XKAfpUFvyn26P2F99LArWiefZZe9IwnML%2BivrfEUX%2FWUNF7MTM5urwcn6FjZBPrn8Hgkb3YknoKFQF8hWB%2BX2UnHL%2FE7Bn0CKHsy20WsIHXih5H85NrRvr3pCvHi1pXbwM8snKvoFGo9THwi7Awa1hSparZUJrl%2BZyAn4fLjWdPFTZC36cpebuZKVVdpWJaSnkxSIVLVv%2F87%2B4W0P6lhhoMDQJmBgnK7mDH%2BKkd8izT5qvQF7i5b%2Bu6RcVw2WmNQrSn3QlcpMJ%2FEi78GOqUBS556bwPin2MbgXC7xc1DBjMvFGmqTSKCJGQg4iWDRyjnPVF67cx2uXEJPke1Yznm39ag8%2BOPAtEArvGfURy8HZNdjZK5DNKVLUBeFIgVZMXuz%2FnmeBpNK6XoPSJ5LKJzlPOJur1GnFaEKvgWV4dzjM%2FrQZ5R%2FOct%2BNRWdleDc1wJqxfszSFBASLFZJHzOFPXDb%2BpRqawv%2F1SBymvrFwiDIzozGPH&X-Amz-Signature=3f509865075f181c71f8253f77e6afa320fafb9029dfe993ca470649651a0da2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
