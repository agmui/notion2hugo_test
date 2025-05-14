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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2THF5YW%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFMihaZ96BznvkxZUxVrTbYWl8QYCk1t2AsFSUZX9YHxAiEA8mCq5GZWfLEcKpWwsHeYIHdZikv8ZKXTJWnsHjqyFm4q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLCCx5ee5bptuToz2yrcAzAlno%2BX0sMQ%2BqH5yUjKhdXeUm7%2BMrj671OPtWOOMIrRyydLYnX5JrVSFHKBfcviBODlxcGyX%2F%2FOxUK1OqZJsFQGjtIUsz6s70YpWH1Y6MnywGu0fpFSk3xcXCQkFO2iMVVqcuvGCUOjJDiqbT6GDemaieKY01rdftgeQCHs9lqgYZWDUXZxsBBEEkSyrQQqqgU%2FOdXHJs6TZPUQ%2FGPyCJ4wZCUdkrbFPtao5wMqCCGrINt%2BWUZbv48PU6r9PJ0mXL0XWiTe6yVjx3WAfXlqe891eup8q5DA5RtCdypEkp7%2BTXxxj2se61iy%2FWIuIFiN81qeLa8Z81akOebiV97%2BfUntY6oiTW3w%2B01fcyjTR7SObD%2FtXG3GxmzXdjhT9ZjHFCeiwNthA0vkouSYfyti%2BDfJWI9gaRlpdZLtEBUeCUKIQJ44ZCMsKabLHufkEOqlOvtK2K8dFjAeJZxFyAYaqobjf8TUD2hpwaoQo0Dy59HfyDeT7XC4Tota159MBIrqGMwvpjV4b1zTK%2BX4%2Bqy%2By5ehG9%2B2CbDaDucTe42G9U9jzfFC1WbQwGCx6l5EFRjAKCtkjOxmVsO4%2BvzvuryyAxLFCkOHl3GBj5XdMepI8h83jdgIk6eDMGbXfL6lMMjQk8EGOqUBG2YBYB77CKZ%2BESVm1jBBEYbt0dz%2BrBeqh%2BTA99PYTrUWgTdqd1TGBAb6ql1VRdvhZqkrUXi9gXylgR%2BHbi0%2FVzdL1b%2FnBSyJXW%2BM%2BboRMQwO6qZk1aa7cyfKnWlWOHw5emfkBfPqesEjf0%2BNVmCeh%2BJ9UPDq0KqxOMPoa%2BCRyxDJlFLtRc217syKaxDQS6OZeVuIZnJaI34h2R5%2BIaUx0btWqLwG&X-Amz-Signature=dab011b29f9e2e76145dc099c001c91159218be5c060d36f550ed99359306d98&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2THF5YW%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFMihaZ96BznvkxZUxVrTbYWl8QYCk1t2AsFSUZX9YHxAiEA8mCq5GZWfLEcKpWwsHeYIHdZikv8ZKXTJWnsHjqyFm4q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLCCx5ee5bptuToz2yrcAzAlno%2BX0sMQ%2BqH5yUjKhdXeUm7%2BMrj671OPtWOOMIrRyydLYnX5JrVSFHKBfcviBODlxcGyX%2F%2FOxUK1OqZJsFQGjtIUsz6s70YpWH1Y6MnywGu0fpFSk3xcXCQkFO2iMVVqcuvGCUOjJDiqbT6GDemaieKY01rdftgeQCHs9lqgYZWDUXZxsBBEEkSyrQQqqgU%2FOdXHJs6TZPUQ%2FGPyCJ4wZCUdkrbFPtao5wMqCCGrINt%2BWUZbv48PU6r9PJ0mXL0XWiTe6yVjx3WAfXlqe891eup8q5DA5RtCdypEkp7%2BTXxxj2se61iy%2FWIuIFiN81qeLa8Z81akOebiV97%2BfUntY6oiTW3w%2B01fcyjTR7SObD%2FtXG3GxmzXdjhT9ZjHFCeiwNthA0vkouSYfyti%2BDfJWI9gaRlpdZLtEBUeCUKIQJ44ZCMsKabLHufkEOqlOvtK2K8dFjAeJZxFyAYaqobjf8TUD2hpwaoQo0Dy59HfyDeT7XC4Tota159MBIrqGMwvpjV4b1zTK%2BX4%2Bqy%2By5ehG9%2B2CbDaDucTe42G9U9jzfFC1WbQwGCx6l5EFRjAKCtkjOxmVsO4%2BvzvuryyAxLFCkOHl3GBj5XdMepI8h83jdgIk6eDMGbXfL6lMMjQk8EGOqUBG2YBYB77CKZ%2BESVm1jBBEYbt0dz%2BrBeqh%2BTA99PYTrUWgTdqd1TGBAb6ql1VRdvhZqkrUXi9gXylgR%2BHbi0%2FVzdL1b%2FnBSyJXW%2BM%2BboRMQwO6qZk1aa7cyfKnWlWOHw5emfkBfPqesEjf0%2BNVmCeh%2BJ9UPDq0KqxOMPoa%2BCRyxDJlFLtRc217syKaxDQS6OZeVuIZnJaI34h2R5%2BIaUx0btWqLwG&X-Amz-Signature=64adcf2fab665a7fb818b2f721c68fedad98b3a420e1e1187a6cbd22b1be4417&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2THF5YW%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFMihaZ96BznvkxZUxVrTbYWl8QYCk1t2AsFSUZX9YHxAiEA8mCq5GZWfLEcKpWwsHeYIHdZikv8ZKXTJWnsHjqyFm4q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLCCx5ee5bptuToz2yrcAzAlno%2BX0sMQ%2BqH5yUjKhdXeUm7%2BMrj671OPtWOOMIrRyydLYnX5JrVSFHKBfcviBODlxcGyX%2F%2FOxUK1OqZJsFQGjtIUsz6s70YpWH1Y6MnywGu0fpFSk3xcXCQkFO2iMVVqcuvGCUOjJDiqbT6GDemaieKY01rdftgeQCHs9lqgYZWDUXZxsBBEEkSyrQQqqgU%2FOdXHJs6TZPUQ%2FGPyCJ4wZCUdkrbFPtao5wMqCCGrINt%2BWUZbv48PU6r9PJ0mXL0XWiTe6yVjx3WAfXlqe891eup8q5DA5RtCdypEkp7%2BTXxxj2se61iy%2FWIuIFiN81qeLa8Z81akOebiV97%2BfUntY6oiTW3w%2B01fcyjTR7SObD%2FtXG3GxmzXdjhT9ZjHFCeiwNthA0vkouSYfyti%2BDfJWI9gaRlpdZLtEBUeCUKIQJ44ZCMsKabLHufkEOqlOvtK2K8dFjAeJZxFyAYaqobjf8TUD2hpwaoQo0Dy59HfyDeT7XC4Tota159MBIrqGMwvpjV4b1zTK%2BX4%2Bqy%2By5ehG9%2B2CbDaDucTe42G9U9jzfFC1WbQwGCx6l5EFRjAKCtkjOxmVsO4%2BvzvuryyAxLFCkOHl3GBj5XdMepI8h83jdgIk6eDMGbXfL6lMMjQk8EGOqUBG2YBYB77CKZ%2BESVm1jBBEYbt0dz%2BrBeqh%2BTA99PYTrUWgTdqd1TGBAb6ql1VRdvhZqkrUXi9gXylgR%2BHbi0%2FVzdL1b%2FnBSyJXW%2BM%2BboRMQwO6qZk1aa7cyfKnWlWOHw5emfkBfPqesEjf0%2BNVmCeh%2BJ9UPDq0KqxOMPoa%2BCRyxDJlFLtRc217syKaxDQS6OZeVuIZnJaI34h2R5%2BIaUx0btWqLwG&X-Amz-Signature=cce0c884f39590f38d529768f4db09d12b235a53014f120e405c8c1c6663178c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
