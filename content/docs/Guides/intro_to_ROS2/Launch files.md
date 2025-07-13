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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAHKLZQH%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbr3TVMGyY574vSoUFH7cJqHEc0gjTlAIGCaGxw5B5SAiAG%2BHVVNDTfXcEwrFODqoHd1zd14K11GsRlMKpmCR9Rxyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMvxWofKwKAdM3HFa8KtwDVr3dRnFvWOxc6dac4fPE0knW80aOCedYpNBvSx%2Bqi%2FekQwZEnewv3JD%2FIZFkOSaFpqUJa3H9ToS3pQUCE86T8vj5SFOuVZvRb0xHynYZZc%2FtmfgA54JA7S5nLAwsKB6SCg9r6LXv45MMaMzH8a0ndVMj1YVQvZPw0GK9kf5JpAEPayxp8bUfLp3%2F1EKlWQCyDphMGLK3HBSNTtdo5XLHInnOUC3nuLXYB39AfcaXs%2FytA%2BIaI6DbQaFud63vrL%2FqsMt2DaOT4KJ93JbhBej2%2BpDNyg7V%2FA5zV1JQzalrLGaGKAJ97fvjONwfTRjjH%2BrKto1EFme0Mn9gvPiSGYwsWrG8xB3chOf9QB9FXE5n47zcZAozJDx7BLOYXABfq1%2BDqjFD0G8Wm4qGKBtdJV%2FS4CUZjS3ApO0DBs0GPY6rFJL5B510gh2vwyD4nFWZ%2FHD3xEPFp%2B4k96bpMXV73851z%2BF7p8nqROOKHOrLt5iwOiJ4mzTj%2BNTFt2cXy0NP1ilPqsP%2Byds8VOyX5A9oDnykSB70PehV9O53OOZ8N4RI7iG1ueYcRJeXaxuydxcJw3QYlpp%2BH4FXso%2Fxn12xNpFHr0M8dEkQyuijm4T0F4Ntiw1%2BwQk%2FSg%2BzeFshX8MwrpbPwwY6pgGCftT1Ntdfd4zOPUYHXb39apymvNyXCgl5zYAc16uGcz6SH2zlFJj60z5ghhNvBmmR5Cz5vmCVh80CpBTQ8uPMX8NIrjHJnG7Rdtlz4cZW9bgrTclVdvo072sHTDda1Fua6O4%2FEfULpDvmmZkIADYZ2GjWmeUou3EPdsBAo9jEL8%2F7N2H2063mvpv6uCi5IOESVHcKgczrGJwXD0%2FUx72%2FTbs1Ew2U&X-Amz-Signature=0d2bf14c43baab79a6a47692ef0e4eb2ad2dc4763176cc7891b108df805782e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAHKLZQH%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbr3TVMGyY574vSoUFH7cJqHEc0gjTlAIGCaGxw5B5SAiAG%2BHVVNDTfXcEwrFODqoHd1zd14K11GsRlMKpmCR9Rxyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMvxWofKwKAdM3HFa8KtwDVr3dRnFvWOxc6dac4fPE0knW80aOCedYpNBvSx%2Bqi%2FekQwZEnewv3JD%2FIZFkOSaFpqUJa3H9ToS3pQUCE86T8vj5SFOuVZvRb0xHynYZZc%2FtmfgA54JA7S5nLAwsKB6SCg9r6LXv45MMaMzH8a0ndVMj1YVQvZPw0GK9kf5JpAEPayxp8bUfLp3%2F1EKlWQCyDphMGLK3HBSNTtdo5XLHInnOUC3nuLXYB39AfcaXs%2FytA%2BIaI6DbQaFud63vrL%2FqsMt2DaOT4KJ93JbhBej2%2BpDNyg7V%2FA5zV1JQzalrLGaGKAJ97fvjONwfTRjjH%2BrKto1EFme0Mn9gvPiSGYwsWrG8xB3chOf9QB9FXE5n47zcZAozJDx7BLOYXABfq1%2BDqjFD0G8Wm4qGKBtdJV%2FS4CUZjS3ApO0DBs0GPY6rFJL5B510gh2vwyD4nFWZ%2FHD3xEPFp%2B4k96bpMXV73851z%2BF7p8nqROOKHOrLt5iwOiJ4mzTj%2BNTFt2cXy0NP1ilPqsP%2Byds8VOyX5A9oDnykSB70PehV9O53OOZ8N4RI7iG1ueYcRJeXaxuydxcJw3QYlpp%2BH4FXso%2Fxn12xNpFHr0M8dEkQyuijm4T0F4Ntiw1%2BwQk%2FSg%2BzeFshX8MwrpbPwwY6pgGCftT1Ntdfd4zOPUYHXb39apymvNyXCgl5zYAc16uGcz6SH2zlFJj60z5ghhNvBmmR5Cz5vmCVh80CpBTQ8uPMX8NIrjHJnG7Rdtlz4cZW9bgrTclVdvo072sHTDda1Fua6O4%2FEfULpDvmmZkIADYZ2GjWmeUou3EPdsBAo9jEL8%2F7N2H2063mvpv6uCi5IOESVHcKgczrGJwXD0%2FUx72%2FTbs1Ew2U&X-Amz-Signature=648fce8a6a65774bdab65ad5cea2b2ffced110444cdae798b3280275b58714ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAHKLZQH%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbr3TVMGyY574vSoUFH7cJqHEc0gjTlAIGCaGxw5B5SAiAG%2BHVVNDTfXcEwrFODqoHd1zd14K11GsRlMKpmCR9Rxyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMvxWofKwKAdM3HFa8KtwDVr3dRnFvWOxc6dac4fPE0knW80aOCedYpNBvSx%2Bqi%2FekQwZEnewv3JD%2FIZFkOSaFpqUJa3H9ToS3pQUCE86T8vj5SFOuVZvRb0xHynYZZc%2FtmfgA54JA7S5nLAwsKB6SCg9r6LXv45MMaMzH8a0ndVMj1YVQvZPw0GK9kf5JpAEPayxp8bUfLp3%2F1EKlWQCyDphMGLK3HBSNTtdo5XLHInnOUC3nuLXYB39AfcaXs%2FytA%2BIaI6DbQaFud63vrL%2FqsMt2DaOT4KJ93JbhBej2%2BpDNyg7V%2FA5zV1JQzalrLGaGKAJ97fvjONwfTRjjH%2BrKto1EFme0Mn9gvPiSGYwsWrG8xB3chOf9QB9FXE5n47zcZAozJDx7BLOYXABfq1%2BDqjFD0G8Wm4qGKBtdJV%2FS4CUZjS3ApO0DBs0GPY6rFJL5B510gh2vwyD4nFWZ%2FHD3xEPFp%2B4k96bpMXV73851z%2BF7p8nqROOKHOrLt5iwOiJ4mzTj%2BNTFt2cXy0NP1ilPqsP%2Byds8VOyX5A9oDnykSB70PehV9O53OOZ8N4RI7iG1ueYcRJeXaxuydxcJw3QYlpp%2BH4FXso%2Fxn12xNpFHr0M8dEkQyuijm4T0F4Ntiw1%2BwQk%2FSg%2BzeFshX8MwrpbPwwY6pgGCftT1Ntdfd4zOPUYHXb39apymvNyXCgl5zYAc16uGcz6SH2zlFJj60z5ghhNvBmmR5Cz5vmCVh80CpBTQ8uPMX8NIrjHJnG7Rdtlz4cZW9bgrTclVdvo072sHTDda1Fua6O4%2FEfULpDvmmZkIADYZ2GjWmeUou3EPdsBAo9jEL8%2F7N2H2063mvpv6uCi5IOESVHcKgczrGJwXD0%2FUx72%2FTbs1Ew2U&X-Amz-Signature=3df1ea8284f3afdcbcc305a9fdfe2b3bd50b3011915d464b0a4d1ce52eb13aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
