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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WS2ECYU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDhkHf8UvIOWFpUzMZO8S5%2FHhrq7VSBKrwDBu3NGKCYpQIgSsCg5DohiUFAGKQidhveAHgeDleNmvauwkusovmOgn4qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEs%2FQdaKuAxF9ywYSrcA02dUjkjMYBjz9%2FtJs6I3cRyya2KUDliC%2FB2YKZ4Y8nw6tF6gTMGzZaFULaFCItqxOHiRB8u3iEaXarWjLZQH513JaFOCpfZF%2BYcaayXaMjQasPgK28hE54m4ZhO5x%2BYxacJYxQHHm1NILWdIcmk3WOyrNSLfXMU3lWWZpwaR5YpiW9VX18oeYDJuEnuqSZ85FfR6EK1WI%2FPqLnBhiOyRSY1gt632jxVhEWe76AluNEJiaqrM2xHK%2B8D%2BB%2FshvA2EImgVJ7CLEZPt9Pb%2FTf50VxjzNyMrj%2FO4eqpuYkqphmgrYW0WdHcS492hC4E3Zbp2C36wItrc%2BC%2FVJhNodtrIR8Eu5yG7vdshsQYvatou9SKqEiPEK2LAhi9%2FptxYKT%2BQviIeFxsFeSjqX25LGvXxLUZOhm5chqcv455JRHfOdNm9aK2cHdJTnehyFa6q8jLRt5KVBApXevJ59YSOaq%2BhFKS84LltmA1ojXzD4jB5K%2BqpmG3VqY8qu%2FU2DtsQryASlwXxyxRP51wAiQQMJFpS198TijbWF93YsR1XT4jmgU9Z%2B6RyCs%2BMfV8s3qgRUSaDJpdQwTI8RX5ZEsbfm%2FpiF8h2LjeQw%2FSglSQcE7zKz%2BygREE998uo7hTZbdCMOS7o8AGOqUBc9CfDNcylBb9LuiurYFUg5i%2Fb6ZYnpKZj5DaVZQw2gT8mjOIwZL%2BgetKkr4sKVtGntJES7pQHogLff5PysduHhxPbm%2BTViEfVOtXhCg5buDovF51KmtVGrneRBXChDxQe6N0QxUK8TnZPHUh2HGdrIbJu2Icx6chK49Q8KW2qM3iWxteHcQxE6q2Qus%2BDMF4ylK%2F1d9pg3YsrxI%2BgDat6BgTFBJi&X-Amz-Signature=fb13ebd6061a9de7f060bb6533f50e1280665ef7fdd9dff8cb68c29fb2f0af43&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WS2ECYU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDhkHf8UvIOWFpUzMZO8S5%2FHhrq7VSBKrwDBu3NGKCYpQIgSsCg5DohiUFAGKQidhveAHgeDleNmvauwkusovmOgn4qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEs%2FQdaKuAxF9ywYSrcA02dUjkjMYBjz9%2FtJs6I3cRyya2KUDliC%2FB2YKZ4Y8nw6tF6gTMGzZaFULaFCItqxOHiRB8u3iEaXarWjLZQH513JaFOCpfZF%2BYcaayXaMjQasPgK28hE54m4ZhO5x%2BYxacJYxQHHm1NILWdIcmk3WOyrNSLfXMU3lWWZpwaR5YpiW9VX18oeYDJuEnuqSZ85FfR6EK1WI%2FPqLnBhiOyRSY1gt632jxVhEWe76AluNEJiaqrM2xHK%2B8D%2BB%2FshvA2EImgVJ7CLEZPt9Pb%2FTf50VxjzNyMrj%2FO4eqpuYkqphmgrYW0WdHcS492hC4E3Zbp2C36wItrc%2BC%2FVJhNodtrIR8Eu5yG7vdshsQYvatou9SKqEiPEK2LAhi9%2FptxYKT%2BQviIeFxsFeSjqX25LGvXxLUZOhm5chqcv455JRHfOdNm9aK2cHdJTnehyFa6q8jLRt5KVBApXevJ59YSOaq%2BhFKS84LltmA1ojXzD4jB5K%2BqpmG3VqY8qu%2FU2DtsQryASlwXxyxRP51wAiQQMJFpS198TijbWF93YsR1XT4jmgU9Z%2B6RyCs%2BMfV8s3qgRUSaDJpdQwTI8RX5ZEsbfm%2FpiF8h2LjeQw%2FSglSQcE7zKz%2BygREE998uo7hTZbdCMOS7o8AGOqUBc9CfDNcylBb9LuiurYFUg5i%2Fb6ZYnpKZj5DaVZQw2gT8mjOIwZL%2BgetKkr4sKVtGntJES7pQHogLff5PysduHhxPbm%2BTViEfVOtXhCg5buDovF51KmtVGrneRBXChDxQe6N0QxUK8TnZPHUh2HGdrIbJu2Icx6chK49Q8KW2qM3iWxteHcQxE6q2Qus%2BDMF4ylK%2F1d9pg3YsrxI%2BgDat6BgTFBJi&X-Amz-Signature=d3e30f3eceb881caf2be1fcad909242b73864b57573c963a6f50b31844892417&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WS2ECYU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDhkHf8UvIOWFpUzMZO8S5%2FHhrq7VSBKrwDBu3NGKCYpQIgSsCg5DohiUFAGKQidhveAHgeDleNmvauwkusovmOgn4qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEs%2FQdaKuAxF9ywYSrcA02dUjkjMYBjz9%2FtJs6I3cRyya2KUDliC%2FB2YKZ4Y8nw6tF6gTMGzZaFULaFCItqxOHiRB8u3iEaXarWjLZQH513JaFOCpfZF%2BYcaayXaMjQasPgK28hE54m4ZhO5x%2BYxacJYxQHHm1NILWdIcmk3WOyrNSLfXMU3lWWZpwaR5YpiW9VX18oeYDJuEnuqSZ85FfR6EK1WI%2FPqLnBhiOyRSY1gt632jxVhEWe76AluNEJiaqrM2xHK%2B8D%2BB%2FshvA2EImgVJ7CLEZPt9Pb%2FTf50VxjzNyMrj%2FO4eqpuYkqphmgrYW0WdHcS492hC4E3Zbp2C36wItrc%2BC%2FVJhNodtrIR8Eu5yG7vdshsQYvatou9SKqEiPEK2LAhi9%2FptxYKT%2BQviIeFxsFeSjqX25LGvXxLUZOhm5chqcv455JRHfOdNm9aK2cHdJTnehyFa6q8jLRt5KVBApXevJ59YSOaq%2BhFKS84LltmA1ojXzD4jB5K%2BqpmG3VqY8qu%2FU2DtsQryASlwXxyxRP51wAiQQMJFpS198TijbWF93YsR1XT4jmgU9Z%2B6RyCs%2BMfV8s3qgRUSaDJpdQwTI8RX5ZEsbfm%2FpiF8h2LjeQw%2FSglSQcE7zKz%2BygREE998uo7hTZbdCMOS7o8AGOqUBc9CfDNcylBb9LuiurYFUg5i%2Fb6ZYnpKZj5DaVZQw2gT8mjOIwZL%2BgetKkr4sKVtGntJES7pQHogLff5PysduHhxPbm%2BTViEfVOtXhCg5buDovF51KmtVGrneRBXChDxQe6N0QxUK8TnZPHUh2HGdrIbJu2Icx6chK49Q8KW2qM3iWxteHcQxE6q2Qus%2BDMF4ylK%2F1d9pg3YsrxI%2BgDat6BgTFBJi&X-Amz-Signature=496fe1e22741d5b144767f23551f12fdc77f950b8a288a34dcabac3763748ddf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
