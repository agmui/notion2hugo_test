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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ERI3M6D%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDRhF3ov85sjZgp1SvtcmPAJjo9Uz3MPj8LZ1X9KuYnmQIgY1%2B4z4tUAdWEZgpY1yGoTqaPVxqvIcDHyXJkscDOa3Iq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMCT%2BTvPZXTn9qDTxircA4UODUf1Bpl0AdGkomZIsd63%2FfheLvCWm595S46yT8d6Bu7o5hklorVGbWJdMbVFw8Ngd4EWojCcbdiu1fRSv1%2BSurMqtgBBxMFDG7cQWF3KQYCdvOPDxf%2Bnwdeo1sqK4Jy1neLR8W%2Ba%2BFm90IVxphP2q59YgoJGtvnUokXg8hXVtlPpJEd%2BdjjnkamxjdmaLyIN8HD%2BWPmt43bZTwAMlu9pp4cmWlYXQuZHkIDPJC4CB06oUTW4nML2hmLNq4WpZAaE74Nbt03HA4MQ4hO8434DFXCDPhFDB7awdaU5vsonTVu8hMm3VPuF5c%2B61PRbdE7OpqaE0J85fMChMDlJL%2BXxAIkQLEj%2Fuaq02k6AKpJeaYnmtqJMVoqk2HT%2F88CGsloJRFYA6hkgMEYpSRpos1BjVRE%2FC51VDEy2j2byKZpH%2FISxQ1ILz9j001nMQjpvF97aa8%2BwtJ46zKuyY3NDLMSlzZQOCcozk2I8V%2Bcy8RyciIOFL55rE1jtZGiPQMGkFvfNrx0q6rvaIbiO9oA5cNy9ys%2F9M7VPaR%2FA%2BZTm5hytiFAFGnk3vpIw86ZygjlEd0fPz7f7HjQD9B5C0n2dp09TYHbQg2s8enzuXqPmj9QeSbq2EQukpXyipVEZMMz8vb0GOqUBEoGjpDdkuDf8pqVyX0IjZOQNR0Tjz1b5MM7ce0n9EIBkUc3Azts6ZfM%2FCQAFaHZbkeD4PsxUGHG%2BfuI%2FP9TE5jt%2BwdhXOEK7kJaBC0FqJeXVzYXDmDmD5CaM9e1wFqpVkfz%2FoLUWqlZgT%2BzluH4gAu2j5pLV7Won9%2BRUOa8A3FQvyEaJELVOkLiyethxDCSbEbRdzJ9PZvmZT4zEsMDDPERVM75x&X-Amz-Signature=46cc8471ccb9cc0c262bf3fde4c46db37b02fcc393a54ae5561255c9ea41cdba&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ERI3M6D%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDRhF3ov85sjZgp1SvtcmPAJjo9Uz3MPj8LZ1X9KuYnmQIgY1%2B4z4tUAdWEZgpY1yGoTqaPVxqvIcDHyXJkscDOa3Iq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMCT%2BTvPZXTn9qDTxircA4UODUf1Bpl0AdGkomZIsd63%2FfheLvCWm595S46yT8d6Bu7o5hklorVGbWJdMbVFw8Ngd4EWojCcbdiu1fRSv1%2BSurMqtgBBxMFDG7cQWF3KQYCdvOPDxf%2Bnwdeo1sqK4Jy1neLR8W%2Ba%2BFm90IVxphP2q59YgoJGtvnUokXg8hXVtlPpJEd%2BdjjnkamxjdmaLyIN8HD%2BWPmt43bZTwAMlu9pp4cmWlYXQuZHkIDPJC4CB06oUTW4nML2hmLNq4WpZAaE74Nbt03HA4MQ4hO8434DFXCDPhFDB7awdaU5vsonTVu8hMm3VPuF5c%2B61PRbdE7OpqaE0J85fMChMDlJL%2BXxAIkQLEj%2Fuaq02k6AKpJeaYnmtqJMVoqk2HT%2F88CGsloJRFYA6hkgMEYpSRpos1BjVRE%2FC51VDEy2j2byKZpH%2FISxQ1ILz9j001nMQjpvF97aa8%2BwtJ46zKuyY3NDLMSlzZQOCcozk2I8V%2Bcy8RyciIOFL55rE1jtZGiPQMGkFvfNrx0q6rvaIbiO9oA5cNy9ys%2F9M7VPaR%2FA%2BZTm5hytiFAFGnk3vpIw86ZygjlEd0fPz7f7HjQD9B5C0n2dp09TYHbQg2s8enzuXqPmj9QeSbq2EQukpXyipVEZMMz8vb0GOqUBEoGjpDdkuDf8pqVyX0IjZOQNR0Tjz1b5MM7ce0n9EIBkUc3Azts6ZfM%2FCQAFaHZbkeD4PsxUGHG%2BfuI%2FP9TE5jt%2BwdhXOEK7kJaBC0FqJeXVzYXDmDmD5CaM9e1wFqpVkfz%2FoLUWqlZgT%2BzluH4gAu2j5pLV7Won9%2BRUOa8A3FQvyEaJELVOkLiyethxDCSbEbRdzJ9PZvmZT4zEsMDDPERVM75x&X-Amz-Signature=09433d6dc8fcaa7e15fd33c2c37f640052cf13d850c82a4f869dd8113ec1f057&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ERI3M6D%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDRhF3ov85sjZgp1SvtcmPAJjo9Uz3MPj8LZ1X9KuYnmQIgY1%2B4z4tUAdWEZgpY1yGoTqaPVxqvIcDHyXJkscDOa3Iq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMCT%2BTvPZXTn9qDTxircA4UODUf1Bpl0AdGkomZIsd63%2FfheLvCWm595S46yT8d6Bu7o5hklorVGbWJdMbVFw8Ngd4EWojCcbdiu1fRSv1%2BSurMqtgBBxMFDG7cQWF3KQYCdvOPDxf%2Bnwdeo1sqK4Jy1neLR8W%2Ba%2BFm90IVxphP2q59YgoJGtvnUokXg8hXVtlPpJEd%2BdjjnkamxjdmaLyIN8HD%2BWPmt43bZTwAMlu9pp4cmWlYXQuZHkIDPJC4CB06oUTW4nML2hmLNq4WpZAaE74Nbt03HA4MQ4hO8434DFXCDPhFDB7awdaU5vsonTVu8hMm3VPuF5c%2B61PRbdE7OpqaE0J85fMChMDlJL%2BXxAIkQLEj%2Fuaq02k6AKpJeaYnmtqJMVoqk2HT%2F88CGsloJRFYA6hkgMEYpSRpos1BjVRE%2FC51VDEy2j2byKZpH%2FISxQ1ILz9j001nMQjpvF97aa8%2BwtJ46zKuyY3NDLMSlzZQOCcozk2I8V%2Bcy8RyciIOFL55rE1jtZGiPQMGkFvfNrx0q6rvaIbiO9oA5cNy9ys%2F9M7VPaR%2FA%2BZTm5hytiFAFGnk3vpIw86ZygjlEd0fPz7f7HjQD9B5C0n2dp09TYHbQg2s8enzuXqPmj9QeSbq2EQukpXyipVEZMMz8vb0GOqUBEoGjpDdkuDf8pqVyX0IjZOQNR0Tjz1b5MM7ce0n9EIBkUc3Azts6ZfM%2FCQAFaHZbkeD4PsxUGHG%2BfuI%2FP9TE5jt%2BwdhXOEK7kJaBC0FqJeXVzYXDmDmD5CaM9e1wFqpVkfz%2FoLUWqlZgT%2BzluH4gAu2j5pLV7Won9%2BRUOa8A3FQvyEaJELVOkLiyethxDCSbEbRdzJ9PZvmZT4zEsMDDPERVM75x&X-Amz-Signature=b99ea9469633570637330573862251111b78cdf94a3114d2ad15f3b38ce8a04a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
