---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYEBVNOL%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyBKlUJaoYeQEv%2FY2R8q3EveqBHl%2FpgYzA0VeIbGXWSQIgR%2FFeCVClvFJ9bePnXGO%2FTvz%2BxyJTl2zjHPRV5qIxC7oqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmKbU0Dkkzjeo6WJyrcA3W2gQLpmDoNEW0%2BPXaoLdqxjn2HECBX21MGu4jPpHkd1s8k4ODw1v6r%2Ft6N2CGIjopZYkzXVG6MJeMyWXyO4WkWVCMyN5I01eti29qjyuk3emSiEo9izhJ%2FU92%2Bv%2BKokfT1SWK7F5BM6BYDwRrKEyQkY0Yhl3U1EGue%2BJg8VXibVm0sPCQKXDYELAzIk4B%2BDtIl7175K3v06l5wz4Oh1Nt6WB027o0OEkJL2dga56S0vJl7OJNeitFL1EmYSnGdM03DbD7GKtdlb651fGgtWNSJMwVotQeO5Uf261lsZ5qEXCoD9UWfQUtQRrQpL91iwrhjaz3GC%2F7fCMRa7gD%2FCBTjVTmo8JRse1SIgV4Rt8WmPSk%2BYpYl7zYEMYm73%2FUZGptBQCphBNu1ux%2Bm2pfo7mWXp9jCcz2Gwa17yTCzEhJ3Ede7776jzxnKmqOHx2mbphnRjKzEMXcfygs6jr2NUzfecvLlO401vdQJK21zdcEdFGflSLp2DOpNob1%2FVNKtpYWxsnmsknYuCGBDheIZA7vlfUekdDlquHOLVuN%2B%2F994J4G28hlTzcXa%2BOR7QfCjemxyMLewRRHlQbCbhL5N6OFjtczFi%2BuACs3%2Br%2BSYl41zy%2BJihiCKVrj3KKHyMMaWjMcGOqUBUi4fhRZdENuInsHRlz%2BA21%2BZKb36Rdgm9H9Z3%2Fq%2BPFom9NhaTUbgmx%2F7rLFia4ahuoOMDvHi%2BBUUKTk1AXkex%2BLqAPU5HxTGwVe9GjOgY6ZU2HljHsOpFEYOK1GuyDDGjCZ7tiD7JdXMmn5xRyoWKiE%2BEi0%2BTJInY9tcyIz1U0JGHviSD%2FbkTXCVakUqcBzR7y2P5%2FfVwhh591tbBUWlqdv5YzBU&X-Amz-Signature=ee9f16bd7d9cf48dcda58857cc38e5b5cbfc2c966dfaf1bc8a2e9b98edbaf173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYEBVNOL%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyBKlUJaoYeQEv%2FY2R8q3EveqBHl%2FpgYzA0VeIbGXWSQIgR%2FFeCVClvFJ9bePnXGO%2FTvz%2BxyJTl2zjHPRV5qIxC7oqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmKbU0Dkkzjeo6WJyrcA3W2gQLpmDoNEW0%2BPXaoLdqxjn2HECBX21MGu4jPpHkd1s8k4ODw1v6r%2Ft6N2CGIjopZYkzXVG6MJeMyWXyO4WkWVCMyN5I01eti29qjyuk3emSiEo9izhJ%2FU92%2Bv%2BKokfT1SWK7F5BM6BYDwRrKEyQkY0Yhl3U1EGue%2BJg8VXibVm0sPCQKXDYELAzIk4B%2BDtIl7175K3v06l5wz4Oh1Nt6WB027o0OEkJL2dga56S0vJl7OJNeitFL1EmYSnGdM03DbD7GKtdlb651fGgtWNSJMwVotQeO5Uf261lsZ5qEXCoD9UWfQUtQRrQpL91iwrhjaz3GC%2F7fCMRa7gD%2FCBTjVTmo8JRse1SIgV4Rt8WmPSk%2BYpYl7zYEMYm73%2FUZGptBQCphBNu1ux%2Bm2pfo7mWXp9jCcz2Gwa17yTCzEhJ3Ede7776jzxnKmqOHx2mbphnRjKzEMXcfygs6jr2NUzfecvLlO401vdQJK21zdcEdFGflSLp2DOpNob1%2FVNKtpYWxsnmsknYuCGBDheIZA7vlfUekdDlquHOLVuN%2B%2F994J4G28hlTzcXa%2BOR7QfCjemxyMLewRRHlQbCbhL5N6OFjtczFi%2BuACs3%2Br%2BSYl41zy%2BJihiCKVrj3KKHyMMaWjMcGOqUBUi4fhRZdENuInsHRlz%2BA21%2BZKb36Rdgm9H9Z3%2Fq%2BPFom9NhaTUbgmx%2F7rLFia4ahuoOMDvHi%2BBUUKTk1AXkex%2BLqAPU5HxTGwVe9GjOgY6ZU2HljHsOpFEYOK1GuyDDGjCZ7tiD7JdXMmn5xRyoWKiE%2BEi0%2BTJInY9tcyIz1U0JGHviSD%2FbkTXCVakUqcBzR7y2P5%2FfVwhh591tbBUWlqdv5YzBU&X-Amz-Signature=b492b5079cef79d14004c752c69006e6e1bc70da0cf4398817392f21e54b82d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYEBVNOL%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyBKlUJaoYeQEv%2FY2R8q3EveqBHl%2FpgYzA0VeIbGXWSQIgR%2FFeCVClvFJ9bePnXGO%2FTvz%2BxyJTl2zjHPRV5qIxC7oqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmKbU0Dkkzjeo6WJyrcA3W2gQLpmDoNEW0%2BPXaoLdqxjn2HECBX21MGu4jPpHkd1s8k4ODw1v6r%2Ft6N2CGIjopZYkzXVG6MJeMyWXyO4WkWVCMyN5I01eti29qjyuk3emSiEo9izhJ%2FU92%2Bv%2BKokfT1SWK7F5BM6BYDwRrKEyQkY0Yhl3U1EGue%2BJg8VXibVm0sPCQKXDYELAzIk4B%2BDtIl7175K3v06l5wz4Oh1Nt6WB027o0OEkJL2dga56S0vJl7OJNeitFL1EmYSnGdM03DbD7GKtdlb651fGgtWNSJMwVotQeO5Uf261lsZ5qEXCoD9UWfQUtQRrQpL91iwrhjaz3GC%2F7fCMRa7gD%2FCBTjVTmo8JRse1SIgV4Rt8WmPSk%2BYpYl7zYEMYm73%2FUZGptBQCphBNu1ux%2Bm2pfo7mWXp9jCcz2Gwa17yTCzEhJ3Ede7776jzxnKmqOHx2mbphnRjKzEMXcfygs6jr2NUzfecvLlO401vdQJK21zdcEdFGflSLp2DOpNob1%2FVNKtpYWxsnmsknYuCGBDheIZA7vlfUekdDlquHOLVuN%2B%2F994J4G28hlTzcXa%2BOR7QfCjemxyMLewRRHlQbCbhL5N6OFjtczFi%2BuACs3%2Br%2BSYl41zy%2BJihiCKVrj3KKHyMMaWjMcGOqUBUi4fhRZdENuInsHRlz%2BA21%2BZKb36Rdgm9H9Z3%2Fq%2BPFom9NhaTUbgmx%2F7rLFia4ahuoOMDvHi%2BBUUKTk1AXkex%2BLqAPU5HxTGwVe9GjOgY6ZU2HljHsOpFEYOK1GuyDDGjCZ7tiD7JdXMmn5xRyoWKiE%2BEi0%2BTJInY9tcyIz1U0JGHviSD%2FbkTXCVakUqcBzR7y2P5%2FfVwhh591tbBUWlqdv5YzBU&X-Amz-Signature=d5e770bff98412f19dcb24a49cd7a185590d0144d3db34b1ca4636cf32b819ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
