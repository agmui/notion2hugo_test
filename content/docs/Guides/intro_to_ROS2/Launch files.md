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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP5KZPNT%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCD0fkut1NIMxpZFrgLR%2FmuOLrxwPZyEAY4glmJk3xyUAIhAPPU8ixqS4lToVubB9VLXJLNoQ2si2hRBuqNjlB7u6GiKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHB9Pc6d3mbt6CTIQq3AN8LRoIOWRioKekfeImmQAmP9Ql77%2BX66l341uutXgHAN9%2BtJKsP2ol12rGBcaAWoqI4lmuJ7pxuyRZLgnpRqYxgbKznR00spQAf%2BCaZ80TTCAH7Y5M4Yjr06tcr1pba3uHgDs7wlrTmykkUbACS%2FwVoWkg%2BGwl4lS3NkwBEioLm5qkd4Rn0DDZdkcmHcYY%2Bhm%2FVr7SVmvqw4om4eBXCCoZTi1SMpFZCs49w0EOps7ROzCnaPiix0oiXCOxBsnz1N1ayePa0%2FjQ17i%2FwdEy56rTYu57DlKt7X4AdT%2B%2BUPmru4ISVLnDQ2BpqUL2SN%2FTyzGBqVgHzWzO2GEp62NKkioF9K%2F5CnplFZltlPGHgkIv7TLwqYCpfUbRj7Eb3zOAsHCfetmdZEf%2BAd5gqcb6saJH3usG%2F%2B9jtYNBPM1F3bhH86UxT5o%2FkDYlslq3V4ESvZRZldwdsWiXaZ7Zmrx9ZI0reQqdTRf2fmfXbladX1T9eIA1qZWVQP%2Bs%2BrGaPnI0cNZVkZZ6AN3UqXIb%2Bm6q431rC9BYe8rMc6EPnwkpwYM2Uz4PvBQ5o1zd3QHuOzD28YKIyWgrvP6mmaOWR07V2n%2FDvxabWy5tyhFlTRadfIr9M8n6naI1J1sk5RSZLTCJxOK%2FBjqkAcazw9EVreAelhFeCcY0G0vdjSnxQe73EJ5fiH7ZsfRTb72tvLNSWdPLTMbCg%2FX3s9kPNJjjlMz%2FpeYzM5XU53oQ3d%2F0VLa%2F9zoxQhPUd7TZ%2BFEM8u48319AhfUWv77MG7hLuwH4Nwa4el6Ap2F90smywvoFFfA%2Fk1bUyziGPBsHUwSHzi11xRvv8NHFbbuwgixVUmwrigAncbVyjXNSJJXkDDyl&X-Amz-Signature=b1dae37b3a28d9dd0115eba854c7f2e0a7094c4bb33d8c61c67c30dc13505869&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP5KZPNT%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCD0fkut1NIMxpZFrgLR%2FmuOLrxwPZyEAY4glmJk3xyUAIhAPPU8ixqS4lToVubB9VLXJLNoQ2si2hRBuqNjlB7u6GiKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHB9Pc6d3mbt6CTIQq3AN8LRoIOWRioKekfeImmQAmP9Ql77%2BX66l341uutXgHAN9%2BtJKsP2ol12rGBcaAWoqI4lmuJ7pxuyRZLgnpRqYxgbKznR00spQAf%2BCaZ80TTCAH7Y5M4Yjr06tcr1pba3uHgDs7wlrTmykkUbACS%2FwVoWkg%2BGwl4lS3NkwBEioLm5qkd4Rn0DDZdkcmHcYY%2Bhm%2FVr7SVmvqw4om4eBXCCoZTi1SMpFZCs49w0EOps7ROzCnaPiix0oiXCOxBsnz1N1ayePa0%2FjQ17i%2FwdEy56rTYu57DlKt7X4AdT%2B%2BUPmru4ISVLnDQ2BpqUL2SN%2FTyzGBqVgHzWzO2GEp62NKkioF9K%2F5CnplFZltlPGHgkIv7TLwqYCpfUbRj7Eb3zOAsHCfetmdZEf%2BAd5gqcb6saJH3usG%2F%2B9jtYNBPM1F3bhH86UxT5o%2FkDYlslq3V4ESvZRZldwdsWiXaZ7Zmrx9ZI0reQqdTRf2fmfXbladX1T9eIA1qZWVQP%2Bs%2BrGaPnI0cNZVkZZ6AN3UqXIb%2Bm6q431rC9BYe8rMc6EPnwkpwYM2Uz4PvBQ5o1zd3QHuOzD28YKIyWgrvP6mmaOWR07V2n%2FDvxabWy5tyhFlTRadfIr9M8n6naI1J1sk5RSZLTCJxOK%2FBjqkAcazw9EVreAelhFeCcY0G0vdjSnxQe73EJ5fiH7ZsfRTb72tvLNSWdPLTMbCg%2FX3s9kPNJjjlMz%2FpeYzM5XU53oQ3d%2F0VLa%2F9zoxQhPUd7TZ%2BFEM8u48319AhfUWv77MG7hLuwH4Nwa4el6Ap2F90smywvoFFfA%2Fk1bUyziGPBsHUwSHzi11xRvv8NHFbbuwgixVUmwrigAncbVyjXNSJJXkDDyl&X-Amz-Signature=d54d78011270bcc7679e5da83afa9bb4cbc87f2d4a1144e6a521fbbee5d464c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP5KZPNT%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCD0fkut1NIMxpZFrgLR%2FmuOLrxwPZyEAY4glmJk3xyUAIhAPPU8ixqS4lToVubB9VLXJLNoQ2si2hRBuqNjlB7u6GiKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHB9Pc6d3mbt6CTIQq3AN8LRoIOWRioKekfeImmQAmP9Ql77%2BX66l341uutXgHAN9%2BtJKsP2ol12rGBcaAWoqI4lmuJ7pxuyRZLgnpRqYxgbKznR00spQAf%2BCaZ80TTCAH7Y5M4Yjr06tcr1pba3uHgDs7wlrTmykkUbACS%2FwVoWkg%2BGwl4lS3NkwBEioLm5qkd4Rn0DDZdkcmHcYY%2Bhm%2FVr7SVmvqw4om4eBXCCoZTi1SMpFZCs49w0EOps7ROzCnaPiix0oiXCOxBsnz1N1ayePa0%2FjQ17i%2FwdEy56rTYu57DlKt7X4AdT%2B%2BUPmru4ISVLnDQ2BpqUL2SN%2FTyzGBqVgHzWzO2GEp62NKkioF9K%2F5CnplFZltlPGHgkIv7TLwqYCpfUbRj7Eb3zOAsHCfetmdZEf%2BAd5gqcb6saJH3usG%2F%2B9jtYNBPM1F3bhH86UxT5o%2FkDYlslq3V4ESvZRZldwdsWiXaZ7Zmrx9ZI0reQqdTRf2fmfXbladX1T9eIA1qZWVQP%2Bs%2BrGaPnI0cNZVkZZ6AN3UqXIb%2Bm6q431rC9BYe8rMc6EPnwkpwYM2Uz4PvBQ5o1zd3QHuOzD28YKIyWgrvP6mmaOWR07V2n%2FDvxabWy5tyhFlTRadfIr9M8n6naI1J1sk5RSZLTCJxOK%2FBjqkAcazw9EVreAelhFeCcY0G0vdjSnxQe73EJ5fiH7ZsfRTb72tvLNSWdPLTMbCg%2FX3s9kPNJjjlMz%2FpeYzM5XU53oQ3d%2F0VLa%2F9zoxQhPUd7TZ%2BFEM8u48319AhfUWv77MG7hLuwH4Nwa4el6Ap2F90smywvoFFfA%2Fk1bUyziGPBsHUwSHzi11xRvv8NHFbbuwgixVUmwrigAncbVyjXNSJJXkDDyl&X-Amz-Signature=325901b17475d9c272c29ca02124f7e24b714f43ca147ac85f3e1cad00410454&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
