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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHX6Z4UZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FtvUMQrkP%2FyziO9L6z6AC0R0pOWe%2FyY91IzE4hfyPEgIgRHHKh773Yq3%2BW50lOGGzHzjNE6V89Vz0V5EzukY4ePcqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BKvI%2BQoXqqV4BO0ircAy60GBwknns%2BWV3RmGaklog7ZiPP4Wo6cnWlKi6KMJ5dzQxcijegShmUNyK%2FM54wkpynEGdg4yxzyb6WtQ7gCV6inZwidCoiEl1GcLavj9%2BJR0rZ1TCaYBDbPB8ngD6wa91%2FedPMXn2si%2Be4SuD%2BEoWrtmeACX0GJN3Y2uJav05ojC3AiQ8ygxf8XiMOJ34Uch%2BtfsI%2F7jzCnaLWkROC5sH%2Bbi3jyZ5sQjPNyD%2BfsIdG5r9IK6iXf5Jzxa5ze%2Ftqmy66KYmXpEICCkyQRUmOMtTZdTbGnJBL8d3B2in7FmXbO2k8Rp1eq5%2FD%2FawK07ltA%2BJeWxLxWrMeB3VLMDZe4NyYgRETgX3CwL3I4fEkzE3eU9jUjc4g8wJongoOg3ADpewTVPIotEPz1Rq%2B052sqpq5JLt%2BRGFksUGv0eDCmjUtG9hDv206foyMLs%2B7XEiiJgeIcR3n9z4uEGQoGbxZzV41TeTHdhibzI9gWFgEG5iALE%2F4fMsdsQ9zfAMC3zKdbAVmhCH%2Ba9JYVsJ2xVhMZSJLJpZOIQKFpeBp%2FcB5jt5NKK7ZSUs5MoIgj4WwhxzjXEVRfvA%2BzcmRFifrqtxV%2FI21pjVDXKXbZWs66OjX8oij4RMC1dim%2BTQJDEFnMOHMzr4GOqUBTSLDbrwuM6vrOzC8z%2B0WMcrOVaEYDgxS28anXmgPGHeWDCroi1awhgq%2BcEd6evqiuVhj94sAGsDK76tZHkdyERAT6dndAfwf9DoW6xYLFJOks3QFJe2fUsPF2uM8%2FIRSR%2F%2F4AuJ9pUDzX%2FL0PdA%2BOQFyiyfsEpuH5%2BNIZ%2BE6EEEiGfoIP7M%2FXIu94L7pALW0WpwtfWFNPVK1T1BkzlSWo66DVra6&X-Amz-Signature=852e082cdae69de9b43cefa770cb8952abb5a59a19a85b60fa797474066b7654&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHX6Z4UZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FtvUMQrkP%2FyziO9L6z6AC0R0pOWe%2FyY91IzE4hfyPEgIgRHHKh773Yq3%2BW50lOGGzHzjNE6V89Vz0V5EzukY4ePcqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BKvI%2BQoXqqV4BO0ircAy60GBwknns%2BWV3RmGaklog7ZiPP4Wo6cnWlKi6KMJ5dzQxcijegShmUNyK%2FM54wkpynEGdg4yxzyb6WtQ7gCV6inZwidCoiEl1GcLavj9%2BJR0rZ1TCaYBDbPB8ngD6wa91%2FedPMXn2si%2Be4SuD%2BEoWrtmeACX0GJN3Y2uJav05ojC3AiQ8ygxf8XiMOJ34Uch%2BtfsI%2F7jzCnaLWkROC5sH%2Bbi3jyZ5sQjPNyD%2BfsIdG5r9IK6iXf5Jzxa5ze%2Ftqmy66KYmXpEICCkyQRUmOMtTZdTbGnJBL8d3B2in7FmXbO2k8Rp1eq5%2FD%2FawK07ltA%2BJeWxLxWrMeB3VLMDZe4NyYgRETgX3CwL3I4fEkzE3eU9jUjc4g8wJongoOg3ADpewTVPIotEPz1Rq%2B052sqpq5JLt%2BRGFksUGv0eDCmjUtG9hDv206foyMLs%2B7XEiiJgeIcR3n9z4uEGQoGbxZzV41TeTHdhibzI9gWFgEG5iALE%2F4fMsdsQ9zfAMC3zKdbAVmhCH%2Ba9JYVsJ2xVhMZSJLJpZOIQKFpeBp%2FcB5jt5NKK7ZSUs5MoIgj4WwhxzjXEVRfvA%2BzcmRFifrqtxV%2FI21pjVDXKXbZWs66OjX8oij4RMC1dim%2BTQJDEFnMOHMzr4GOqUBTSLDbrwuM6vrOzC8z%2B0WMcrOVaEYDgxS28anXmgPGHeWDCroi1awhgq%2BcEd6evqiuVhj94sAGsDK76tZHkdyERAT6dndAfwf9DoW6xYLFJOks3QFJe2fUsPF2uM8%2FIRSR%2F%2F4AuJ9pUDzX%2FL0PdA%2BOQFyiyfsEpuH5%2BNIZ%2BE6EEEiGfoIP7M%2FXIu94L7pALW0WpwtfWFNPVK1T1BkzlSWo66DVra6&X-Amz-Signature=c9a86735b85fff9c2e9e45742d3fd4706d9e061c9a19e8dde6830a494af0b763&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHX6Z4UZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FtvUMQrkP%2FyziO9L6z6AC0R0pOWe%2FyY91IzE4hfyPEgIgRHHKh773Yq3%2BW50lOGGzHzjNE6V89Vz0V5EzukY4ePcqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BKvI%2BQoXqqV4BO0ircAy60GBwknns%2BWV3RmGaklog7ZiPP4Wo6cnWlKi6KMJ5dzQxcijegShmUNyK%2FM54wkpynEGdg4yxzyb6WtQ7gCV6inZwidCoiEl1GcLavj9%2BJR0rZ1TCaYBDbPB8ngD6wa91%2FedPMXn2si%2Be4SuD%2BEoWrtmeACX0GJN3Y2uJav05ojC3AiQ8ygxf8XiMOJ34Uch%2BtfsI%2F7jzCnaLWkROC5sH%2Bbi3jyZ5sQjPNyD%2BfsIdG5r9IK6iXf5Jzxa5ze%2Ftqmy66KYmXpEICCkyQRUmOMtTZdTbGnJBL8d3B2in7FmXbO2k8Rp1eq5%2FD%2FawK07ltA%2BJeWxLxWrMeB3VLMDZe4NyYgRETgX3CwL3I4fEkzE3eU9jUjc4g8wJongoOg3ADpewTVPIotEPz1Rq%2B052sqpq5JLt%2BRGFksUGv0eDCmjUtG9hDv206foyMLs%2B7XEiiJgeIcR3n9z4uEGQoGbxZzV41TeTHdhibzI9gWFgEG5iALE%2F4fMsdsQ9zfAMC3zKdbAVmhCH%2Ba9JYVsJ2xVhMZSJLJpZOIQKFpeBp%2FcB5jt5NKK7ZSUs5MoIgj4WwhxzjXEVRfvA%2BzcmRFifrqtxV%2FI21pjVDXKXbZWs66OjX8oij4RMC1dim%2BTQJDEFnMOHMzr4GOqUBTSLDbrwuM6vrOzC8z%2B0WMcrOVaEYDgxS28anXmgPGHeWDCroi1awhgq%2BcEd6evqiuVhj94sAGsDK76tZHkdyERAT6dndAfwf9DoW6xYLFJOks3QFJe2fUsPF2uM8%2FIRSR%2F%2F4AuJ9pUDzX%2FL0PdA%2BOQFyiyfsEpuH5%2BNIZ%2BE6EEEiGfoIP7M%2FXIu94L7pALW0WpwtfWFNPVK1T1BkzlSWo66DVra6&X-Amz-Signature=c69074627bd3fcc9499ebd917f78e3366df397bb2fbad7ae15417b4fc1889cde&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
