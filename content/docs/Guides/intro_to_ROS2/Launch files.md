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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L3V74HH%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGX4VJeX4MmC3fuHuprZfOI4cBHOUXuwylox3DYXCb%2BAIgaEIYk6ot5E%2B%2FVHEaRnnwY4L1WdPxrF9tYTsSq7Q7%2BdwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhJcCYDFbJfsWizYircAwomBnTllH74rHXQN9uk%2FZKMnN%2B%2BHnNLJwIYCSDN%2Fp%2FBPtQ3YbkBvvV80%2BTveYhfsCn52BowW6N%2Frzzfmt5H8KpCQVbhTeCWxmTHMQFXNgTcKdzziCkMy3PbJI5XqJYLKqjDWPV5W62X4qC8Yx7M%2F9DAPkk9UmEc8EpPRUCkTw%2FenfVokJbsB92Wi2m3A9WZp0Zg6gO1r2iaSs8VYK8E9ZfAxIVqJM16eJReilIOzVSlV7KWKbm16ObdCrmRIKEliwwwk0V1vrx64yhJ01ASdzQ9vyk4MYsikxfF515t6GU%2BZXsdt65k9V2CeNlEH7%2FF%2BVrAi3xplLWyyWPyO28NaeSyOO6MEjvHHKFguugfTLomKejranqyxK71VtpEktRsHiLlOdCxiMDY1zhs9wWEwT5wFrA3KQ5x8FYrEM4JZSNjVh5sxLHVGRWNDhYMpnExytq6EpzWa1lHcbN%2FyQaZbPQ%2F91Z8hFRs4kNrRtB9%2BVKF5HIZ1f2sdz8xqFQ0hOF%2B9XcSVW%2BX2TxOd3kV2EEeO%2BbMuDt0qyHJDfBRu8nwPpdTyQOpAuhZLzzv0Y5xXDQwRbUZIQ1NyqkBDma8vj%2FYprkBauVQjM%2BMykg8ZYPbq2TR%2B059YdnEq3FU33LAMO%2FJk74GOqUBzHeub4HJHcy8yrwnmCSB6XggBjZijoPf3TLtZW3yfxgadI%2BLt46ISQRqwI4II%2BJ9p9FqKeLJjQjU643v66ePbfhxDUtGckdMo3L2Gi1MwL5EL3R70RgxcxM45Kg5BWpbAbYFJK3EjchiMvplAGHKQ7KLae9YehQbjEGXzPin44d73oxQMY696BvaSXmEFwYwWPqf7ao2vtxUWTEYjGbfAl74VyzL&X-Amz-Signature=4da7327c0432bd3cb74c25f52383c3bbee5811ce8aee2c96cbd863d117fa78f5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L3V74HH%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGX4VJeX4MmC3fuHuprZfOI4cBHOUXuwylox3DYXCb%2BAIgaEIYk6ot5E%2B%2FVHEaRnnwY4L1WdPxrF9tYTsSq7Q7%2BdwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhJcCYDFbJfsWizYircAwomBnTllH74rHXQN9uk%2FZKMnN%2B%2BHnNLJwIYCSDN%2Fp%2FBPtQ3YbkBvvV80%2BTveYhfsCn52BowW6N%2Frzzfmt5H8KpCQVbhTeCWxmTHMQFXNgTcKdzziCkMy3PbJI5XqJYLKqjDWPV5W62X4qC8Yx7M%2F9DAPkk9UmEc8EpPRUCkTw%2FenfVokJbsB92Wi2m3A9WZp0Zg6gO1r2iaSs8VYK8E9ZfAxIVqJM16eJReilIOzVSlV7KWKbm16ObdCrmRIKEliwwwk0V1vrx64yhJ01ASdzQ9vyk4MYsikxfF515t6GU%2BZXsdt65k9V2CeNlEH7%2FF%2BVrAi3xplLWyyWPyO28NaeSyOO6MEjvHHKFguugfTLomKejranqyxK71VtpEktRsHiLlOdCxiMDY1zhs9wWEwT5wFrA3KQ5x8FYrEM4JZSNjVh5sxLHVGRWNDhYMpnExytq6EpzWa1lHcbN%2FyQaZbPQ%2F91Z8hFRs4kNrRtB9%2BVKF5HIZ1f2sdz8xqFQ0hOF%2B9XcSVW%2BX2TxOd3kV2EEeO%2BbMuDt0qyHJDfBRu8nwPpdTyQOpAuhZLzzv0Y5xXDQwRbUZIQ1NyqkBDma8vj%2FYprkBauVQjM%2BMykg8ZYPbq2TR%2B059YdnEq3FU33LAMO%2FJk74GOqUBzHeub4HJHcy8yrwnmCSB6XggBjZijoPf3TLtZW3yfxgadI%2BLt46ISQRqwI4II%2BJ9p9FqKeLJjQjU643v66ePbfhxDUtGckdMo3L2Gi1MwL5EL3R70RgxcxM45Kg5BWpbAbYFJK3EjchiMvplAGHKQ7KLae9YehQbjEGXzPin44d73oxQMY696BvaSXmEFwYwWPqf7ao2vtxUWTEYjGbfAl74VyzL&X-Amz-Signature=b1bdd16fa2049461798f7f7951d05505dc55bab072d5d8c6e9baecdfd516d481&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L3V74HH%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGX4VJeX4MmC3fuHuprZfOI4cBHOUXuwylox3DYXCb%2BAIgaEIYk6ot5E%2B%2FVHEaRnnwY4L1WdPxrF9tYTsSq7Q7%2BdwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhJcCYDFbJfsWizYircAwomBnTllH74rHXQN9uk%2FZKMnN%2B%2BHnNLJwIYCSDN%2Fp%2FBPtQ3YbkBvvV80%2BTveYhfsCn52BowW6N%2Frzzfmt5H8KpCQVbhTeCWxmTHMQFXNgTcKdzziCkMy3PbJI5XqJYLKqjDWPV5W62X4qC8Yx7M%2F9DAPkk9UmEc8EpPRUCkTw%2FenfVokJbsB92Wi2m3A9WZp0Zg6gO1r2iaSs8VYK8E9ZfAxIVqJM16eJReilIOzVSlV7KWKbm16ObdCrmRIKEliwwwk0V1vrx64yhJ01ASdzQ9vyk4MYsikxfF515t6GU%2BZXsdt65k9V2CeNlEH7%2FF%2BVrAi3xplLWyyWPyO28NaeSyOO6MEjvHHKFguugfTLomKejranqyxK71VtpEktRsHiLlOdCxiMDY1zhs9wWEwT5wFrA3KQ5x8FYrEM4JZSNjVh5sxLHVGRWNDhYMpnExytq6EpzWa1lHcbN%2FyQaZbPQ%2F91Z8hFRs4kNrRtB9%2BVKF5HIZ1f2sdz8xqFQ0hOF%2B9XcSVW%2BX2TxOd3kV2EEeO%2BbMuDt0qyHJDfBRu8nwPpdTyQOpAuhZLzzv0Y5xXDQwRbUZIQ1NyqkBDma8vj%2FYprkBauVQjM%2BMykg8ZYPbq2TR%2B059YdnEq3FU33LAMO%2FJk74GOqUBzHeub4HJHcy8yrwnmCSB6XggBjZijoPf3TLtZW3yfxgadI%2BLt46ISQRqwI4II%2BJ9p9FqKeLJjQjU643v66ePbfhxDUtGckdMo3L2Gi1MwL5EL3R70RgxcxM45Kg5BWpbAbYFJK3EjchiMvplAGHKQ7KLae9YehQbjEGXzPin44d73oxQMY696BvaSXmEFwYwWPqf7ao2vtxUWTEYjGbfAl74VyzL&X-Amz-Signature=4aea79b515500623d57c3f05b18424d510acbf474a3d4b61271ba38ea66ddd25&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
