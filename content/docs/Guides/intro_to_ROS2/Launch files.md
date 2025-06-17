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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW2IZ6GR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoirAhxQ7BiIi0Rl4rhytZWut7KScqCe2sIOPzp4Lh3AiAwe4mU2QibJnIOVwMgijEye4WeVmqFElhZuDDK95dMcSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM6bLnQXWCdL3OK338KtwDToqRwbSZhN0c%2F9l%2B1N96ao3SfkEx7cve8PXX%2FAN7y2j%2BarmkiOpdpFPBBB%2FxRprBP0Y4rzYDayDKQ8w1qfB2lbdg4z845XMr%2B7TGQJR73Zi%2B5wLr60uQCQ4KZgCRA81ym6kOKhApAXFomTmBqCJjh%2BUB%2F32OshSYxkooga7h%2FqdeC5I9FV2nzOS1T5%2BL2Pmx4ZTEyjuQwmCOPSCLcCjXqpY2iaiDQieVEDXnmXw6r%2B8Bzgaqwl42L2jnMTMzotnNS7vFukeQ%2FdUc7ShBBKFQ4EVljU3FtKMjRfDn2o%2FPWtRwsukGnTaPgGSTj96AszPAuEflJJ2vXcYtLKhvQPAJY28ezoJ6EzdA6FO24g%2F46b4xHdjq8%2BjBA2NGk0T0g%2BC6kVeDCV1QqQhmLTpAQCM7Wth8mCcQHFvPjopF2OxZvDthIAdDDl1jyxfbjDVr597P9X%2FMMjY%2Fn9OkUgnr%2BnSDzyKGw77uzlqYeyCCBt6Ws6tHBfMVNIdt3DCI4JoBuXr1VrJQfjPi1ntW9ZNWm0zlTfAW8gTU0cMBzHSQomvE3h%2BlbnXTcKirKdKyjdO3xKOehSUlnOgBvIx067gcrpUfWqXztsS%2FO5B3HVmi66Br98pwBDAC4fVRqoAT2G4wyInHwgY6pgFV9o5uFKQwYt05hv7asT5TQAnIoQMiSK4KA%2FhCVDUGOjvjU9853%2B3hQhcW0IouR6EBStX0nXKd232Fmyn8qp2skN9NPKAWXstFvcwurnt5cXDyYVLzCmmIrAZB%2B%2F5ZywMY1U0slpKfe9OJQWLHG11QDdzrF4ID6f%2B6f8XrHgOZNC8i0uEfFKh9Q5BUOQGX0T12vYywSOde2WfKI7Jbii%2F4EJ05bkSR&X-Amz-Signature=fe516412cfc18e49efba5f4cb6023c02ef55377ffed44a06b6845fe66e3f170a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW2IZ6GR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoirAhxQ7BiIi0Rl4rhytZWut7KScqCe2sIOPzp4Lh3AiAwe4mU2QibJnIOVwMgijEye4WeVmqFElhZuDDK95dMcSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM6bLnQXWCdL3OK338KtwDToqRwbSZhN0c%2F9l%2B1N96ao3SfkEx7cve8PXX%2FAN7y2j%2BarmkiOpdpFPBBB%2FxRprBP0Y4rzYDayDKQ8w1qfB2lbdg4z845XMr%2B7TGQJR73Zi%2B5wLr60uQCQ4KZgCRA81ym6kOKhApAXFomTmBqCJjh%2BUB%2F32OshSYxkooga7h%2FqdeC5I9FV2nzOS1T5%2BL2Pmx4ZTEyjuQwmCOPSCLcCjXqpY2iaiDQieVEDXnmXw6r%2B8Bzgaqwl42L2jnMTMzotnNS7vFukeQ%2FdUc7ShBBKFQ4EVljU3FtKMjRfDn2o%2FPWtRwsukGnTaPgGSTj96AszPAuEflJJ2vXcYtLKhvQPAJY28ezoJ6EzdA6FO24g%2F46b4xHdjq8%2BjBA2NGk0T0g%2BC6kVeDCV1QqQhmLTpAQCM7Wth8mCcQHFvPjopF2OxZvDthIAdDDl1jyxfbjDVr597P9X%2FMMjY%2Fn9OkUgnr%2BnSDzyKGw77uzlqYeyCCBt6Ws6tHBfMVNIdt3DCI4JoBuXr1VrJQfjPi1ntW9ZNWm0zlTfAW8gTU0cMBzHSQomvE3h%2BlbnXTcKirKdKyjdO3xKOehSUlnOgBvIx067gcrpUfWqXztsS%2FO5B3HVmi66Br98pwBDAC4fVRqoAT2G4wyInHwgY6pgFV9o5uFKQwYt05hv7asT5TQAnIoQMiSK4KA%2FhCVDUGOjvjU9853%2B3hQhcW0IouR6EBStX0nXKd232Fmyn8qp2skN9NPKAWXstFvcwurnt5cXDyYVLzCmmIrAZB%2B%2F5ZywMY1U0slpKfe9OJQWLHG11QDdzrF4ID6f%2B6f8XrHgOZNC8i0uEfFKh9Q5BUOQGX0T12vYywSOde2WfKI7Jbii%2F4EJ05bkSR&X-Amz-Signature=3f9197a228d6adb013b3193ec047b0038e6f6a0bf13e101cb13f3a0c1767b96e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW2IZ6GR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoirAhxQ7BiIi0Rl4rhytZWut7KScqCe2sIOPzp4Lh3AiAwe4mU2QibJnIOVwMgijEye4WeVmqFElhZuDDK95dMcSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM6bLnQXWCdL3OK338KtwDToqRwbSZhN0c%2F9l%2B1N96ao3SfkEx7cve8PXX%2FAN7y2j%2BarmkiOpdpFPBBB%2FxRprBP0Y4rzYDayDKQ8w1qfB2lbdg4z845XMr%2B7TGQJR73Zi%2B5wLr60uQCQ4KZgCRA81ym6kOKhApAXFomTmBqCJjh%2BUB%2F32OshSYxkooga7h%2FqdeC5I9FV2nzOS1T5%2BL2Pmx4ZTEyjuQwmCOPSCLcCjXqpY2iaiDQieVEDXnmXw6r%2B8Bzgaqwl42L2jnMTMzotnNS7vFukeQ%2FdUc7ShBBKFQ4EVljU3FtKMjRfDn2o%2FPWtRwsukGnTaPgGSTj96AszPAuEflJJ2vXcYtLKhvQPAJY28ezoJ6EzdA6FO24g%2F46b4xHdjq8%2BjBA2NGk0T0g%2BC6kVeDCV1QqQhmLTpAQCM7Wth8mCcQHFvPjopF2OxZvDthIAdDDl1jyxfbjDVr597P9X%2FMMjY%2Fn9OkUgnr%2BnSDzyKGw77uzlqYeyCCBt6Ws6tHBfMVNIdt3DCI4JoBuXr1VrJQfjPi1ntW9ZNWm0zlTfAW8gTU0cMBzHSQomvE3h%2BlbnXTcKirKdKyjdO3xKOehSUlnOgBvIx067gcrpUfWqXztsS%2FO5B3HVmi66Br98pwBDAC4fVRqoAT2G4wyInHwgY6pgFV9o5uFKQwYt05hv7asT5TQAnIoQMiSK4KA%2FhCVDUGOjvjU9853%2B3hQhcW0IouR6EBStX0nXKd232Fmyn8qp2skN9NPKAWXstFvcwurnt5cXDyYVLzCmmIrAZB%2B%2F5ZywMY1U0slpKfe9OJQWLHG11QDdzrF4ID6f%2B6f8XrHgOZNC8i0uEfFKh9Q5BUOQGX0T12vYywSOde2WfKI7Jbii%2F4EJ05bkSR&X-Amz-Signature=6338439177567f89d3092257f618b5e1880740a0cafe92f133feb2d8bdb774ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
