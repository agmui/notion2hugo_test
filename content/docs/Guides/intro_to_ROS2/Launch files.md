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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWZBCFLV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCk35cQ7u%2FMpyjpepLS%2F5rw%2BCrfCar1Xz1W8cw0kdzB5QIgK7VVSm9qnK6mFyP%2BOlS2GxowW7eyrnN%2BiLmVxjYriKkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbKR8Ys98DTTN5fvCrcA9yL38QUUeWbzILnP2s2HgnRPcVXtRGYuEqLJriZK%2FF92e3xkgA6mp2%2FCZwNzCOFVYNAlRF6JQQnFKTlDNgkdwTlRIIUeCztxf1eqcZvNrd4Y8rjsxJkhgan9upgcS2AmPwGANpoCFCVDZPiBm4xhv6G56rWPbYY9xeZXYy1LaW75EPbiyJotANH68oIBaFF88r%2FDFGDOvHKAbheqH5OZXWlZo9NCs6qQ9gxcJgxeun62vWcAEdAb%2Bg5JfEso3M2aRrijBLXibQlIbqkmAhFwSral2xUMs2RXmq5ivw0jC%2B48weQ75X7exLPm1PsPCVElzWxyFr%2FURxDApRJ8yij7sTSPglLOqi7aTuTnwr0MjnHS1%2BImeqlG1Sr85JzhM83%2FQJPl4yzhAwiW3yCfrcTAdGDWjdsAX%2Bx5x1mCzaD%2B%2F9J8kairQs15hNv7Bez0kFFi4VUk%2FxnkAQGt%2FLBr6CL74Q4SwcM4mtLQ8YPcpg9JgTZkZv%2FtHfmTH35PaEsfGF086BhO81VgO9%2BGOUuqd1iiwLDJ1c2E2CADRYXUANtk5o5YarozWZP2b4FbPnZBkwI%2FoSJelVxeHUyFgUTCQche7DWEKGM%2FzkCPLN1%2FZ%2B9Nr%2BeqrjF%2FEb2UFPvocWfMMO4q78GOqUBPFhGql9r4HA97MaiFbT%2FTWehCw9dcR2pTQZWzhWUQlB%2F0NQxBoHvAdOhw%2Fl%2F0QdiJtDnduD1DD%2FvV9%2FAj3qeqFejOxEIBTu8eAlhfwX3jyAzQQqxAphnLdL2qGR8%2BQUg9yN2TDly5Ems7eANTlfq%2FFpAx4C8Qpg6Hh0lVqU8VbTrsAT8WrpTq3VCkmGlD62sHdWAbOBGiq5p7LXrFyC3fJH5Kvj6&X-Amz-Signature=6252ac38973e2cf2871ae351f8a9b6c9e0380299295bfe6fd283ea671c1020f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWZBCFLV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCk35cQ7u%2FMpyjpepLS%2F5rw%2BCrfCar1Xz1W8cw0kdzB5QIgK7VVSm9qnK6mFyP%2BOlS2GxowW7eyrnN%2BiLmVxjYriKkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbKR8Ys98DTTN5fvCrcA9yL38QUUeWbzILnP2s2HgnRPcVXtRGYuEqLJriZK%2FF92e3xkgA6mp2%2FCZwNzCOFVYNAlRF6JQQnFKTlDNgkdwTlRIIUeCztxf1eqcZvNrd4Y8rjsxJkhgan9upgcS2AmPwGANpoCFCVDZPiBm4xhv6G56rWPbYY9xeZXYy1LaW75EPbiyJotANH68oIBaFF88r%2FDFGDOvHKAbheqH5OZXWlZo9NCs6qQ9gxcJgxeun62vWcAEdAb%2Bg5JfEso3M2aRrijBLXibQlIbqkmAhFwSral2xUMs2RXmq5ivw0jC%2B48weQ75X7exLPm1PsPCVElzWxyFr%2FURxDApRJ8yij7sTSPglLOqi7aTuTnwr0MjnHS1%2BImeqlG1Sr85JzhM83%2FQJPl4yzhAwiW3yCfrcTAdGDWjdsAX%2Bx5x1mCzaD%2B%2F9J8kairQs15hNv7Bez0kFFi4VUk%2FxnkAQGt%2FLBr6CL74Q4SwcM4mtLQ8YPcpg9JgTZkZv%2FtHfmTH35PaEsfGF086BhO81VgO9%2BGOUuqd1iiwLDJ1c2E2CADRYXUANtk5o5YarozWZP2b4FbPnZBkwI%2FoSJelVxeHUyFgUTCQche7DWEKGM%2FzkCPLN1%2FZ%2B9Nr%2BeqrjF%2FEb2UFPvocWfMMO4q78GOqUBPFhGql9r4HA97MaiFbT%2FTWehCw9dcR2pTQZWzhWUQlB%2F0NQxBoHvAdOhw%2Fl%2F0QdiJtDnduD1DD%2FvV9%2FAj3qeqFejOxEIBTu8eAlhfwX3jyAzQQqxAphnLdL2qGR8%2BQUg9yN2TDly5Ems7eANTlfq%2FFpAx4C8Qpg6Hh0lVqU8VbTrsAT8WrpTq3VCkmGlD62sHdWAbOBGiq5p7LXrFyC3fJH5Kvj6&X-Amz-Signature=c700a5f1f6f9ce63e011e4fd21c7db7a5dbb892cd4e59758e583d3cf7e20cae1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWZBCFLV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCk35cQ7u%2FMpyjpepLS%2F5rw%2BCrfCar1Xz1W8cw0kdzB5QIgK7VVSm9qnK6mFyP%2BOlS2GxowW7eyrnN%2BiLmVxjYriKkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbKR8Ys98DTTN5fvCrcA9yL38QUUeWbzILnP2s2HgnRPcVXtRGYuEqLJriZK%2FF92e3xkgA6mp2%2FCZwNzCOFVYNAlRF6JQQnFKTlDNgkdwTlRIIUeCztxf1eqcZvNrd4Y8rjsxJkhgan9upgcS2AmPwGANpoCFCVDZPiBm4xhv6G56rWPbYY9xeZXYy1LaW75EPbiyJotANH68oIBaFF88r%2FDFGDOvHKAbheqH5OZXWlZo9NCs6qQ9gxcJgxeun62vWcAEdAb%2Bg5JfEso3M2aRrijBLXibQlIbqkmAhFwSral2xUMs2RXmq5ivw0jC%2B48weQ75X7exLPm1PsPCVElzWxyFr%2FURxDApRJ8yij7sTSPglLOqi7aTuTnwr0MjnHS1%2BImeqlG1Sr85JzhM83%2FQJPl4yzhAwiW3yCfrcTAdGDWjdsAX%2Bx5x1mCzaD%2B%2F9J8kairQs15hNv7Bez0kFFi4VUk%2FxnkAQGt%2FLBr6CL74Q4SwcM4mtLQ8YPcpg9JgTZkZv%2FtHfmTH35PaEsfGF086BhO81VgO9%2BGOUuqd1iiwLDJ1c2E2CADRYXUANtk5o5YarozWZP2b4FbPnZBkwI%2FoSJelVxeHUyFgUTCQche7DWEKGM%2FzkCPLN1%2FZ%2B9Nr%2BeqrjF%2FEb2UFPvocWfMMO4q78GOqUBPFhGql9r4HA97MaiFbT%2FTWehCw9dcR2pTQZWzhWUQlB%2F0NQxBoHvAdOhw%2Fl%2F0QdiJtDnduD1DD%2FvV9%2FAj3qeqFejOxEIBTu8eAlhfwX3jyAzQQqxAphnLdL2qGR8%2BQUg9yN2TDly5Ems7eANTlfq%2FFpAx4C8Qpg6Hh0lVqU8VbTrsAT8WrpTq3VCkmGlD62sHdWAbOBGiq5p7LXrFyC3fJH5Kvj6&X-Amz-Signature=8a8e7fe14df746436efac099c4aad019b9386bef12c63a3e594ca6f0ff635904&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
