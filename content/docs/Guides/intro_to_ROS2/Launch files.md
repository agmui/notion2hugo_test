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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFL5OBN5%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIG3meGQrWxJ0locNyuXY5q7O%2FGvpXqMukMJFPIhe60%2FRAiEA%2BIUo7%2Fe35E8x0YiCXsYL9macOrtozsjE%2BcFceTCpLUsq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCKcTnjkzsdId9g0rircAx5lBv6Hsl0PsOayO1rUa6xcCPCkHGAQStfB0WDRlmnuSggaawoT8oawbB1sjmq6xnkIl2qmXQFs5MFpWl3HwnVpum17B78fLCAIBuU%2F99erygFS%2Bd6kPJD6TEzYGYsLq%2FcP1d9Pd2k%2Bcd4lfggeJzXFHKNShmg03OALpq%2B%2FT%2BAmMWSpYfe3Ph6uyDctnKeR49fzOd7jhOV1DyNyUJRr1Kja4qrsMEZB9ORxQiAjrA5vF4VTg1FJQ5Br485Dgyy3eAg5yq7al2s1rpqERRlQBm2aaTjYAGQ98xP%2BLHsvohJuW79iWeAotfWOo0Hgfovo%2Bbp43VF8N8KOogF0H6Ja69jfuaeDQsEvxHj48Xdf7KMISVM%2Ffw5SNHnPL0CL2boinqDoxmvD48fHRgVUTcf%2FcPaKFaFkqJM25lkF7JUUpBJETQEGV7BpdS9C4hn3TXR%2BhZi48JWWFJdZ5o5vBSodd2NJlJ3a7vzXcKMtKjB7IbFVT4G574EGiNDm6G%2F%2Fl9DXS2jy%2Fb3aIziLaGUL44EfZOUkIQ56i%2BN0UtVsaFP3Zx14peLrzmH5m5C%2BwSvmcqwnCW5o5Zvm6vEZzuzKEEb4ZuKs9vcImxDfHwaki5eBVtT4hoTJPB%2BOH33Y%2BQ4xMNWblb0GOqUBm5yFfst3hmzFMpl%2BRuLU5I3QdebB8ftLQ4DzdIcACjevD4HE0d0yahbhIl2LLg1ViIDAMogTU07fKhqqfHdRCI%2FhtWN1nVgWsab4%2BCNZxELqtLUApgt0agVHUNCsmUqvy89U85oNtwel8Y8uNDLju3V4EoFRdE55dFO%2B5rWzK%2BFBXHxPShzSzgMlVSpg4HlaIV08EoozZeJNAS87W4WcwQ6YK%2FIi&X-Amz-Signature=1c927a3f140ea90eca73be5fd5ad0e6406c1af3463ec68a207fb40d9d283836d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFL5OBN5%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIG3meGQrWxJ0locNyuXY5q7O%2FGvpXqMukMJFPIhe60%2FRAiEA%2BIUo7%2Fe35E8x0YiCXsYL9macOrtozsjE%2BcFceTCpLUsq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCKcTnjkzsdId9g0rircAx5lBv6Hsl0PsOayO1rUa6xcCPCkHGAQStfB0WDRlmnuSggaawoT8oawbB1sjmq6xnkIl2qmXQFs5MFpWl3HwnVpum17B78fLCAIBuU%2F99erygFS%2Bd6kPJD6TEzYGYsLq%2FcP1d9Pd2k%2Bcd4lfggeJzXFHKNShmg03OALpq%2B%2FT%2BAmMWSpYfe3Ph6uyDctnKeR49fzOd7jhOV1DyNyUJRr1Kja4qrsMEZB9ORxQiAjrA5vF4VTg1FJQ5Br485Dgyy3eAg5yq7al2s1rpqERRlQBm2aaTjYAGQ98xP%2BLHsvohJuW79iWeAotfWOo0Hgfovo%2Bbp43VF8N8KOogF0H6Ja69jfuaeDQsEvxHj48Xdf7KMISVM%2Ffw5SNHnPL0CL2boinqDoxmvD48fHRgVUTcf%2FcPaKFaFkqJM25lkF7JUUpBJETQEGV7BpdS9C4hn3TXR%2BhZi48JWWFJdZ5o5vBSodd2NJlJ3a7vzXcKMtKjB7IbFVT4G574EGiNDm6G%2F%2Fl9DXS2jy%2Fb3aIziLaGUL44EfZOUkIQ56i%2BN0UtVsaFP3Zx14peLrzmH5m5C%2BwSvmcqwnCW5o5Zvm6vEZzuzKEEb4ZuKs9vcImxDfHwaki5eBVtT4hoTJPB%2BOH33Y%2BQ4xMNWblb0GOqUBm5yFfst3hmzFMpl%2BRuLU5I3QdebB8ftLQ4DzdIcACjevD4HE0d0yahbhIl2LLg1ViIDAMogTU07fKhqqfHdRCI%2FhtWN1nVgWsab4%2BCNZxELqtLUApgt0agVHUNCsmUqvy89U85oNtwel8Y8uNDLju3V4EoFRdE55dFO%2B5rWzK%2BFBXHxPShzSzgMlVSpg4HlaIV08EoozZeJNAS87W4WcwQ6YK%2FIi&X-Amz-Signature=cd35c569779d7aebd9a40e8a058b557dd27ed7367feed034d1d75c57b013b848&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFL5OBN5%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIG3meGQrWxJ0locNyuXY5q7O%2FGvpXqMukMJFPIhe60%2FRAiEA%2BIUo7%2Fe35E8x0YiCXsYL9macOrtozsjE%2BcFceTCpLUsq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCKcTnjkzsdId9g0rircAx5lBv6Hsl0PsOayO1rUa6xcCPCkHGAQStfB0WDRlmnuSggaawoT8oawbB1sjmq6xnkIl2qmXQFs5MFpWl3HwnVpum17B78fLCAIBuU%2F99erygFS%2Bd6kPJD6TEzYGYsLq%2FcP1d9Pd2k%2Bcd4lfggeJzXFHKNShmg03OALpq%2B%2FT%2BAmMWSpYfe3Ph6uyDctnKeR49fzOd7jhOV1DyNyUJRr1Kja4qrsMEZB9ORxQiAjrA5vF4VTg1FJQ5Br485Dgyy3eAg5yq7al2s1rpqERRlQBm2aaTjYAGQ98xP%2BLHsvohJuW79iWeAotfWOo0Hgfovo%2Bbp43VF8N8KOogF0H6Ja69jfuaeDQsEvxHj48Xdf7KMISVM%2Ffw5SNHnPL0CL2boinqDoxmvD48fHRgVUTcf%2FcPaKFaFkqJM25lkF7JUUpBJETQEGV7BpdS9C4hn3TXR%2BhZi48JWWFJdZ5o5vBSodd2NJlJ3a7vzXcKMtKjB7IbFVT4G574EGiNDm6G%2F%2Fl9DXS2jy%2Fb3aIziLaGUL44EfZOUkIQ56i%2BN0UtVsaFP3Zx14peLrzmH5m5C%2BwSvmcqwnCW5o5Zvm6vEZzuzKEEb4ZuKs9vcImxDfHwaki5eBVtT4hoTJPB%2BOH33Y%2BQ4xMNWblb0GOqUBm5yFfst3hmzFMpl%2BRuLU5I3QdebB8ftLQ4DzdIcACjevD4HE0d0yahbhIl2LLg1ViIDAMogTU07fKhqqfHdRCI%2FhtWN1nVgWsab4%2BCNZxELqtLUApgt0agVHUNCsmUqvy89U85oNtwel8Y8uNDLju3V4EoFRdE55dFO%2B5rWzK%2BFBXHxPShzSzgMlVSpg4HlaIV08EoozZeJNAS87W4WcwQ6YK%2FIi&X-Amz-Signature=8eecd3df993f1060c76709e3c1dd7f4b7fcc96d0c66a494656a67e628ec6b5fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
