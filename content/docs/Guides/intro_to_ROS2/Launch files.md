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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RXENOUQ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ1tzWtq5t7hSR4Ox%2F0apP6BkBJ3oOx4CSUTWO5nUGQQIgAXmkMuYY6wGjMEp0QzYOZyVlhE1C0IVJkT2WsWrw%2B2QqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsyn5mEHJqSfvyFCCrcA3%2FXZYrQ%2FMPvmVHi50%2FrLF7NOzAjrN5wmnAZmDzF8nc6QUvxQGBNOChKqhTv3pj63LJlLM25smqxiizzOmo6lG5%2Fgltn0H9IjbJyvNlTW%2FC2N1QFThvYtMhgxiFcfsHwe1NxRR7UzTeX%2Bw81Wb0wto%2B8AButFEqmTgB%2BpLyiJauvDWs1LjjYBe3G02SHl2ZhpTu7%2FTQ0vApPCMsDEHOAPrmCAfItS2L305bfBhgl4ar0fVLQwb6D6ZD8%2BIGUaHsnPseS%2BjhUHKkVXi6XOCSP%2BPc1Om3dnWlofxMbdbkwMkwKWcEfRgSOgvoc0L%2BiYpGF31syjsTYVq3q3Nd5HLvx9m4ca%2F03s%2BbI1jMq0ueth5qMzX00Oi%2BO2Ep6jU13GBdeJOUzjueczUn4bVrEPsAsNAgBNuumM%2BwdvUjKA61NTaiSl6pLAvd3S0oUnYn0jqCoeoWCpGRwxCRVV482A50Tmc4yTaEaVfMU7uuhZV0vOYQolFJQrk%2BsxeRIGlLbjzAlFe6YMsj471Gp9MFZ4tMdIdTlF6Aj27w%2FYr1s9d3w2bL7Id0ayjXy8NjLG659RlKFJspjpjJxQX3f5wgvzSYpvebRW4WUZ1SJVB84SmT%2FQ%2BRw8alDzzo9QRKOWS8KMO3TtMMGOqUBzygOrho7xW4ly%2FTG9hCR%2FyW2XRD4QR27g%2FUIKpN3MsaLMyjJTIr2bUM7N5krnUOAvpFf0x%2Fbwo2Gih%2F8IN8VN7Ca26g9jUxwJ9Xch7OIWJM3u%2F2nbFRLN8aznSci8sa9jHx5ZlUlMuBim0NNgOyKt0vUJEgZcQ0k%2F0h4SIUeH5kEVrPYqfvM1hYKfm1mWzNmLET5S8cDb7zxZHkYZ4laRrabDDlC&X-Amz-Signature=05863c62f827b79e7c1cb2698ca708dab87e281ffb009134f30d2936d495f930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RXENOUQ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ1tzWtq5t7hSR4Ox%2F0apP6BkBJ3oOx4CSUTWO5nUGQQIgAXmkMuYY6wGjMEp0QzYOZyVlhE1C0IVJkT2WsWrw%2B2QqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsyn5mEHJqSfvyFCCrcA3%2FXZYrQ%2FMPvmVHi50%2FrLF7NOzAjrN5wmnAZmDzF8nc6QUvxQGBNOChKqhTv3pj63LJlLM25smqxiizzOmo6lG5%2Fgltn0H9IjbJyvNlTW%2FC2N1QFThvYtMhgxiFcfsHwe1NxRR7UzTeX%2Bw81Wb0wto%2B8AButFEqmTgB%2BpLyiJauvDWs1LjjYBe3G02SHl2ZhpTu7%2FTQ0vApPCMsDEHOAPrmCAfItS2L305bfBhgl4ar0fVLQwb6D6ZD8%2BIGUaHsnPseS%2BjhUHKkVXi6XOCSP%2BPc1Om3dnWlofxMbdbkwMkwKWcEfRgSOgvoc0L%2BiYpGF31syjsTYVq3q3Nd5HLvx9m4ca%2F03s%2BbI1jMq0ueth5qMzX00Oi%2BO2Ep6jU13GBdeJOUzjueczUn4bVrEPsAsNAgBNuumM%2BwdvUjKA61NTaiSl6pLAvd3S0oUnYn0jqCoeoWCpGRwxCRVV482A50Tmc4yTaEaVfMU7uuhZV0vOYQolFJQrk%2BsxeRIGlLbjzAlFe6YMsj471Gp9MFZ4tMdIdTlF6Aj27w%2FYr1s9d3w2bL7Id0ayjXy8NjLG659RlKFJspjpjJxQX3f5wgvzSYpvebRW4WUZ1SJVB84SmT%2FQ%2BRw8alDzzo9QRKOWS8KMO3TtMMGOqUBzygOrho7xW4ly%2FTG9hCR%2FyW2XRD4QR27g%2FUIKpN3MsaLMyjJTIr2bUM7N5krnUOAvpFf0x%2Fbwo2Gih%2F8IN8VN7Ca26g9jUxwJ9Xch7OIWJM3u%2F2nbFRLN8aznSci8sa9jHx5ZlUlMuBim0NNgOyKt0vUJEgZcQ0k%2F0h4SIUeH5kEVrPYqfvM1hYKfm1mWzNmLET5S8cDb7zxZHkYZ4laRrabDDlC&X-Amz-Signature=c41ae8b604c751a80ed376c5f5c7e53ba6807e31200a63c5f15f200ec7f559a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RXENOUQ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ1tzWtq5t7hSR4Ox%2F0apP6BkBJ3oOx4CSUTWO5nUGQQIgAXmkMuYY6wGjMEp0QzYOZyVlhE1C0IVJkT2WsWrw%2B2QqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsyn5mEHJqSfvyFCCrcA3%2FXZYrQ%2FMPvmVHi50%2FrLF7NOzAjrN5wmnAZmDzF8nc6QUvxQGBNOChKqhTv3pj63LJlLM25smqxiizzOmo6lG5%2Fgltn0H9IjbJyvNlTW%2FC2N1QFThvYtMhgxiFcfsHwe1NxRR7UzTeX%2Bw81Wb0wto%2B8AButFEqmTgB%2BpLyiJauvDWs1LjjYBe3G02SHl2ZhpTu7%2FTQ0vApPCMsDEHOAPrmCAfItS2L305bfBhgl4ar0fVLQwb6D6ZD8%2BIGUaHsnPseS%2BjhUHKkVXi6XOCSP%2BPc1Om3dnWlofxMbdbkwMkwKWcEfRgSOgvoc0L%2BiYpGF31syjsTYVq3q3Nd5HLvx9m4ca%2F03s%2BbI1jMq0ueth5qMzX00Oi%2BO2Ep6jU13GBdeJOUzjueczUn4bVrEPsAsNAgBNuumM%2BwdvUjKA61NTaiSl6pLAvd3S0oUnYn0jqCoeoWCpGRwxCRVV482A50Tmc4yTaEaVfMU7uuhZV0vOYQolFJQrk%2BsxeRIGlLbjzAlFe6YMsj471Gp9MFZ4tMdIdTlF6Aj27w%2FYr1s9d3w2bL7Id0ayjXy8NjLG659RlKFJspjpjJxQX3f5wgvzSYpvebRW4WUZ1SJVB84SmT%2FQ%2BRw8alDzzo9QRKOWS8KMO3TtMMGOqUBzygOrho7xW4ly%2FTG9hCR%2FyW2XRD4QR27g%2FUIKpN3MsaLMyjJTIr2bUM7N5krnUOAvpFf0x%2Fbwo2Gih%2F8IN8VN7Ca26g9jUxwJ9Xch7OIWJM3u%2F2nbFRLN8aznSci8sa9jHx5ZlUlMuBim0NNgOyKt0vUJEgZcQ0k%2F0h4SIUeH5kEVrPYqfvM1hYKfm1mWzNmLET5S8cDb7zxZHkYZ4laRrabDDlC&X-Amz-Signature=d15e6c9e20c5cfb224a257ab51ee81260de4da9a9b36409a3929b92aea9f3a39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
