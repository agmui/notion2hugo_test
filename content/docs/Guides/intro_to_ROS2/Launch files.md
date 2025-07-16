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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRYCMEFR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIF1InOuQRmtC4xQZW0FchChY%2B3LizaYtuk01%2FMvqjhf%2BAiEAsOEDDIPLRTU2AyayoS%2BilpaNEJCQRVNIIhJcABg%2BSloq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFgzqPrN4tF12ItqQSrcA09mSdAr9yyelA3s97ikwB7%2BZyXGcwIL0VEGFrLncqurW8DGy6nzExXuWKCb%2BuwpaefTX1WdiQdL%2Fd%2Fp7I7kgl87rcRdVucEDvNp6M96M1yyF25%2BCYicBDZed5TJsiGn2zmqgJuNP54N4FY2BKh0N2MF2PQVG%2Fx%2FVKi5ZJFdIKMKFAs2PvKLBziNwOzeWMjZ8pMdFr64JxJjt%2BCXPB6H1GKRbsK7kYFYxdb18ABTmKfTv5ZAw9ouM3PfAwnrbdx0alySwm%2BDWQVXEtOYvRWuKhkn66ElgMAokU68zo3wossklO4BJOA9%2By796C%2Bnrdc4H8Iojx9ZgsIUNx0X3FDK0yvT73%2Fz89Ldi0WJBf7spFtdaJRiq85pL66xxQfPoh9csDxy1qg5%2FQHXvxOXTBWdY44CrdnS1vHHhIion0Z9lIP4WaS8pma07gBcB%2FhzNp%2FDOhX7o40wUQyyrHAr3LhGi1Rk1QcV6ddWOKLWAhDe3OxfiBMdCU%2BDKIPmgELyOR0%2BN%2FSLUpNb7Jo8vE7CPEFqyejucYcYIKSMWPLEvu%2Fz1njFu2QRygO5EkwDp2HwHrUUCiEVrqBZDqPMDyxAYpzkag5mPtw9MUwTrqhwRmPCFM6%2BzV4gqsf6gfCKB09hMLCu3MMGOqUBoYKRq%2F5YfeHPFVuiHtz9bFNGfkeyASPYmckd9%2FGPZ40jNlg59Yo%2F64xWpXEbHjHkC%2Bn2t%2FUXA9l08kgA5MPdObPjOapT9O4WdPxhdncvz5NfWn7velD%2FWgLvkJnlozcakc1MrCRv6dpAfByP5ER%2FmsfUkJb8Ho14jLcruqzw%2BXF6dxjvPVABZni4H6PNYifZMsiULLzk3Vnx5VlDpWCf0tvUHHkD&X-Amz-Signature=c69bc771df769ddbcd234e6a6221be6710b97758946733e8149da934623171e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRYCMEFR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIF1InOuQRmtC4xQZW0FchChY%2B3LizaYtuk01%2FMvqjhf%2BAiEAsOEDDIPLRTU2AyayoS%2BilpaNEJCQRVNIIhJcABg%2BSloq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFgzqPrN4tF12ItqQSrcA09mSdAr9yyelA3s97ikwB7%2BZyXGcwIL0VEGFrLncqurW8DGy6nzExXuWKCb%2BuwpaefTX1WdiQdL%2Fd%2Fp7I7kgl87rcRdVucEDvNp6M96M1yyF25%2BCYicBDZed5TJsiGn2zmqgJuNP54N4FY2BKh0N2MF2PQVG%2Fx%2FVKi5ZJFdIKMKFAs2PvKLBziNwOzeWMjZ8pMdFr64JxJjt%2BCXPB6H1GKRbsK7kYFYxdb18ABTmKfTv5ZAw9ouM3PfAwnrbdx0alySwm%2BDWQVXEtOYvRWuKhkn66ElgMAokU68zo3wossklO4BJOA9%2By796C%2Bnrdc4H8Iojx9ZgsIUNx0X3FDK0yvT73%2Fz89Ldi0WJBf7spFtdaJRiq85pL66xxQfPoh9csDxy1qg5%2FQHXvxOXTBWdY44CrdnS1vHHhIion0Z9lIP4WaS8pma07gBcB%2FhzNp%2FDOhX7o40wUQyyrHAr3LhGi1Rk1QcV6ddWOKLWAhDe3OxfiBMdCU%2BDKIPmgELyOR0%2BN%2FSLUpNb7Jo8vE7CPEFqyejucYcYIKSMWPLEvu%2Fz1njFu2QRygO5EkwDp2HwHrUUCiEVrqBZDqPMDyxAYpzkag5mPtw9MUwTrqhwRmPCFM6%2BzV4gqsf6gfCKB09hMLCu3MMGOqUBoYKRq%2F5YfeHPFVuiHtz9bFNGfkeyASPYmckd9%2FGPZ40jNlg59Yo%2F64xWpXEbHjHkC%2Bn2t%2FUXA9l08kgA5MPdObPjOapT9O4WdPxhdncvz5NfWn7velD%2FWgLvkJnlozcakc1MrCRv6dpAfByP5ER%2FmsfUkJb8Ho14jLcruqzw%2BXF6dxjvPVABZni4H6PNYifZMsiULLzk3Vnx5VlDpWCf0tvUHHkD&X-Amz-Signature=6ca7b770175129f5d596886022cbf9947f5615f590d261b592f2382fd2b6777f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRYCMEFR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIF1InOuQRmtC4xQZW0FchChY%2B3LizaYtuk01%2FMvqjhf%2BAiEAsOEDDIPLRTU2AyayoS%2BilpaNEJCQRVNIIhJcABg%2BSloq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFgzqPrN4tF12ItqQSrcA09mSdAr9yyelA3s97ikwB7%2BZyXGcwIL0VEGFrLncqurW8DGy6nzExXuWKCb%2BuwpaefTX1WdiQdL%2Fd%2Fp7I7kgl87rcRdVucEDvNp6M96M1yyF25%2BCYicBDZed5TJsiGn2zmqgJuNP54N4FY2BKh0N2MF2PQVG%2Fx%2FVKi5ZJFdIKMKFAs2PvKLBziNwOzeWMjZ8pMdFr64JxJjt%2BCXPB6H1GKRbsK7kYFYxdb18ABTmKfTv5ZAw9ouM3PfAwnrbdx0alySwm%2BDWQVXEtOYvRWuKhkn66ElgMAokU68zo3wossklO4BJOA9%2By796C%2Bnrdc4H8Iojx9ZgsIUNx0X3FDK0yvT73%2Fz89Ldi0WJBf7spFtdaJRiq85pL66xxQfPoh9csDxy1qg5%2FQHXvxOXTBWdY44CrdnS1vHHhIion0Z9lIP4WaS8pma07gBcB%2FhzNp%2FDOhX7o40wUQyyrHAr3LhGi1Rk1QcV6ddWOKLWAhDe3OxfiBMdCU%2BDKIPmgELyOR0%2BN%2FSLUpNb7Jo8vE7CPEFqyejucYcYIKSMWPLEvu%2Fz1njFu2QRygO5EkwDp2HwHrUUCiEVrqBZDqPMDyxAYpzkag5mPtw9MUwTrqhwRmPCFM6%2BzV4gqsf6gfCKB09hMLCu3MMGOqUBoYKRq%2F5YfeHPFVuiHtz9bFNGfkeyASPYmckd9%2FGPZ40jNlg59Yo%2F64xWpXEbHjHkC%2Bn2t%2FUXA9l08kgA5MPdObPjOapT9O4WdPxhdncvz5NfWn7velD%2FWgLvkJnlozcakc1MrCRv6dpAfByP5ER%2FmsfUkJb8Ho14jLcruqzw%2BXF6dxjvPVABZni4H6PNYifZMsiULLzk3Vnx5VlDpWCf0tvUHHkD&X-Amz-Signature=96f7cd9fd59e4237a9a96f9815c45f602ac020919d5b8b2b54ede174fc3c5812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
