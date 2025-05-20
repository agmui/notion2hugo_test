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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLU3SZD%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOPNzue7TlOg5dqFqdJn2AI7pQuM3nqbIv63y6Sp4MQgIgVkcJUeYi2AJno9zWIsesPr29%2BU8EvNW2i2fP2NO4olMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqfEI6FHmR9BIx%2F5SrcAwpEh1P8qNs0Y3nZwnybbdUUOBvehaiij80yQNpu%2FgkaH307LHap%2BPedFGkuK7Wn0psm95WZuapM3W65QYfx6C36P3oPOygQBxcvzMkC56G%2BWjjbXAfMERd20w70zhXb9zCD07%2B8IhzQsl6F87GJ7scIZKLH%2BlCcu4LIsh4JjVCl84U9akAocDKGDH1zKTQwQ8lBqSAlpCbebOi1Cc18h4zGu2ROQw9zi6ZAlG9Lf1sbE1vAltyTRN%2Blo19r4UfWycufk5ZARauy8SfYAH%2BgogQ3wxDzTXPMXWY0J4Ni7oQ9dP3rwYj7qWCvbJm49Q%2B357qfacchhZjZ%2BqGWmXDo5wuy57cWoRvL5%2Fcb6WuZM8IaSxkubxy429jNoxSt4WPrMts19HuAhJ9p0FV0MGNHF6cGcigOhC2Z79uiQdRCpM286uYic9aSq2Wqpha42YDBf5Gjkj7QnLU%2Fj2Yfqk96Luny3XJGVfcZBWkxSo6tAHzxC6PihOnqabqxgnaAfF3mm8Ulx12l10sMxpFTMuyecVgPJE1UFKAriEH97yANqUaaCIhVnfMp1%2B1SFOAXJ1RrjaJUoldBbiknmF%2Fo6RNn4xoMf6q9U58cVTouX3DIiOl6A2Ieh7NekNLL05kyMNmssMEGOqUBNZ8RUqCR%2BdZ6cp%2FyBc3R6jfz1YNKMdmiHGwwgv70NO6HNmUPiDPdwW5lVjmvn%2FRYs27vlz%2Fu3HXeqLuYnh1jo9xPmuhPs%2BSQrht1wQScGxNUUmgEmn69v%2BOAOej0JG6s%2BUlipJBsa47dwwCPt%2BLoaTVUUTHqYugroloouJDKOuayBy3yhmwMOh8ClqezbeKF3GNmjaeZ6anQPYWCvaOpfSYMerNF&X-Amz-Signature=b71a69f4361c836b182cd3e1de6fc9b7020ef62f68baed3370e0f640986e2bb2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLU3SZD%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOPNzue7TlOg5dqFqdJn2AI7pQuM3nqbIv63y6Sp4MQgIgVkcJUeYi2AJno9zWIsesPr29%2BU8EvNW2i2fP2NO4olMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqfEI6FHmR9BIx%2F5SrcAwpEh1P8qNs0Y3nZwnybbdUUOBvehaiij80yQNpu%2FgkaH307LHap%2BPedFGkuK7Wn0psm95WZuapM3W65QYfx6C36P3oPOygQBxcvzMkC56G%2BWjjbXAfMERd20w70zhXb9zCD07%2B8IhzQsl6F87GJ7scIZKLH%2BlCcu4LIsh4JjVCl84U9akAocDKGDH1zKTQwQ8lBqSAlpCbebOi1Cc18h4zGu2ROQw9zi6ZAlG9Lf1sbE1vAltyTRN%2Blo19r4UfWycufk5ZARauy8SfYAH%2BgogQ3wxDzTXPMXWY0J4Ni7oQ9dP3rwYj7qWCvbJm49Q%2B357qfacchhZjZ%2BqGWmXDo5wuy57cWoRvL5%2Fcb6WuZM8IaSxkubxy429jNoxSt4WPrMts19HuAhJ9p0FV0MGNHF6cGcigOhC2Z79uiQdRCpM286uYic9aSq2Wqpha42YDBf5Gjkj7QnLU%2Fj2Yfqk96Luny3XJGVfcZBWkxSo6tAHzxC6PihOnqabqxgnaAfF3mm8Ulx12l10sMxpFTMuyecVgPJE1UFKAriEH97yANqUaaCIhVnfMp1%2B1SFOAXJ1RrjaJUoldBbiknmF%2Fo6RNn4xoMf6q9U58cVTouX3DIiOl6A2Ieh7NekNLL05kyMNmssMEGOqUBNZ8RUqCR%2BdZ6cp%2FyBc3R6jfz1YNKMdmiHGwwgv70NO6HNmUPiDPdwW5lVjmvn%2FRYs27vlz%2Fu3HXeqLuYnh1jo9xPmuhPs%2BSQrht1wQScGxNUUmgEmn69v%2BOAOej0JG6s%2BUlipJBsa47dwwCPt%2BLoaTVUUTHqYugroloouJDKOuayBy3yhmwMOh8ClqezbeKF3GNmjaeZ6anQPYWCvaOpfSYMerNF&X-Amz-Signature=0fa332cec72676373744fffae49fe15a1f2c1dfd02b173a81a88189767ffbcde&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLU3SZD%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOPNzue7TlOg5dqFqdJn2AI7pQuM3nqbIv63y6Sp4MQgIgVkcJUeYi2AJno9zWIsesPr29%2BU8EvNW2i2fP2NO4olMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqfEI6FHmR9BIx%2F5SrcAwpEh1P8qNs0Y3nZwnybbdUUOBvehaiij80yQNpu%2FgkaH307LHap%2BPedFGkuK7Wn0psm95WZuapM3W65QYfx6C36P3oPOygQBxcvzMkC56G%2BWjjbXAfMERd20w70zhXb9zCD07%2B8IhzQsl6F87GJ7scIZKLH%2BlCcu4LIsh4JjVCl84U9akAocDKGDH1zKTQwQ8lBqSAlpCbebOi1Cc18h4zGu2ROQw9zi6ZAlG9Lf1sbE1vAltyTRN%2Blo19r4UfWycufk5ZARauy8SfYAH%2BgogQ3wxDzTXPMXWY0J4Ni7oQ9dP3rwYj7qWCvbJm49Q%2B357qfacchhZjZ%2BqGWmXDo5wuy57cWoRvL5%2Fcb6WuZM8IaSxkubxy429jNoxSt4WPrMts19HuAhJ9p0FV0MGNHF6cGcigOhC2Z79uiQdRCpM286uYic9aSq2Wqpha42YDBf5Gjkj7QnLU%2Fj2Yfqk96Luny3XJGVfcZBWkxSo6tAHzxC6PihOnqabqxgnaAfF3mm8Ulx12l10sMxpFTMuyecVgPJE1UFKAriEH97yANqUaaCIhVnfMp1%2B1SFOAXJ1RrjaJUoldBbiknmF%2Fo6RNn4xoMf6q9U58cVTouX3DIiOl6A2Ieh7NekNLL05kyMNmssMEGOqUBNZ8RUqCR%2BdZ6cp%2FyBc3R6jfz1YNKMdmiHGwwgv70NO6HNmUPiDPdwW5lVjmvn%2FRYs27vlz%2Fu3HXeqLuYnh1jo9xPmuhPs%2BSQrht1wQScGxNUUmgEmn69v%2BOAOej0JG6s%2BUlipJBsa47dwwCPt%2BLoaTVUUTHqYugroloouJDKOuayBy3yhmwMOh8ClqezbeKF3GNmjaeZ6anQPYWCvaOpfSYMerNF&X-Amz-Signature=85ab0d9d40abb09f197a7af258cbd33d49bd944407b5cbc1f2cbafc48a86b064&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
