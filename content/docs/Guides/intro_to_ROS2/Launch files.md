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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUFU34SF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCSYgN5AOH53PD5xkaOh63%2F1gWZ9jVVsja8nJGYdl1vhAIgFA5XcTP2D8rxCUpW9BMwM%2BdtlueuAT1118TnQ6s57w4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbsusxaO06a4vTrTyrcAzJkODilUHhLYFwiDeKppTzOF9LDQVupkl81VRauw5dqlBljR1hNPP7xbCnArB3OCG%2BgxwjMRbQajOLv5r148aUj%2BUNsS%2FsfpIXJlJmiAMUH9TiQSiFTjss4yBMGlnM3NE4e44DDwsa016gVnc57wvE8eYDURUkKv4IbpYDG5B7xOKhzloDQTwUckc91t6s%2B%2FexatzlFCpYmIMNjY%2BhGYmWHahtrz00UCeyrJ34QxL8%2BLzIuzq52ekD%2FDUsxX%2BWFsQRk7ZJZHGTO%2ByalMFixg9%2FRcyN9yjeI1NpfsdNisjHIod4sq1osN2ZtmxfU7ifSCCwBFuoMOgZINyhEEKd%2Fc%2BrlAdyFGKBohOxOhqOL1npn0zfDfuRuPTFhQs7CHv%2FqCnMHPK4pmrM%2BQRMeNQpd8AQl781TIiXVeEGFyJsO%2FmEoJNBNi7t%2B0DHAsz4L4itnky4Anf2P1ydFzNF1V2M8eKUqzlCGGTcUXZh6fEFzaSOadDvQXAF2B0q%2F4bBA2YrT8VbKkFkRGZngfHvWpCfo48LfYWggUcscJol4UXQ62hjV8dZ0c7Z4GP30ARaTNMDJ%2BOwEyHLvKZ8gvRorC6CYQ3VVZuux91q1rpEjqCLwlk0t9Naf5I4hq589b260MPKFhcEGOqUB%2BIX6%2BOrVyVNIbF%2FOt4XHO7L0YGnxJ%2BOz8OD15p%2Fzye7G%2FYEUo0BLMkh7YBtCiq5jQcRZYrhb6qGbp1vneUJVTGuYN2f74LZVEAZOlUs6OFJKBIj8DozV0G19YOXAWwQzKNL%2FaWrtEN0i51YHpF%2FS%2F%2BtXna%2B2SfANQQR0eB%2BeUcmDliAAnxIJ0TSVjfJFuRg%2BMH5U7rFHRkCcy%2FPHVTEz5UX8vGeb&X-Amz-Signature=132fbd0af21bd9cb4e3d396eb6cf9aae48cc25891872705f2f732b6aab4fef6b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUFU34SF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCSYgN5AOH53PD5xkaOh63%2F1gWZ9jVVsja8nJGYdl1vhAIgFA5XcTP2D8rxCUpW9BMwM%2BdtlueuAT1118TnQ6s57w4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbsusxaO06a4vTrTyrcAzJkODilUHhLYFwiDeKppTzOF9LDQVupkl81VRauw5dqlBljR1hNPP7xbCnArB3OCG%2BgxwjMRbQajOLv5r148aUj%2BUNsS%2FsfpIXJlJmiAMUH9TiQSiFTjss4yBMGlnM3NE4e44DDwsa016gVnc57wvE8eYDURUkKv4IbpYDG5B7xOKhzloDQTwUckc91t6s%2B%2FexatzlFCpYmIMNjY%2BhGYmWHahtrz00UCeyrJ34QxL8%2BLzIuzq52ekD%2FDUsxX%2BWFsQRk7ZJZHGTO%2ByalMFixg9%2FRcyN9yjeI1NpfsdNisjHIod4sq1osN2ZtmxfU7ifSCCwBFuoMOgZINyhEEKd%2Fc%2BrlAdyFGKBohOxOhqOL1npn0zfDfuRuPTFhQs7CHv%2FqCnMHPK4pmrM%2BQRMeNQpd8AQl781TIiXVeEGFyJsO%2FmEoJNBNi7t%2B0DHAsz4L4itnky4Anf2P1ydFzNF1V2M8eKUqzlCGGTcUXZh6fEFzaSOadDvQXAF2B0q%2F4bBA2YrT8VbKkFkRGZngfHvWpCfo48LfYWggUcscJol4UXQ62hjV8dZ0c7Z4GP30ARaTNMDJ%2BOwEyHLvKZ8gvRorC6CYQ3VVZuux91q1rpEjqCLwlk0t9Naf5I4hq589b260MPKFhcEGOqUB%2BIX6%2BOrVyVNIbF%2FOt4XHO7L0YGnxJ%2BOz8OD15p%2Fzye7G%2FYEUo0BLMkh7YBtCiq5jQcRZYrhb6qGbp1vneUJVTGuYN2f74LZVEAZOlUs6OFJKBIj8DozV0G19YOXAWwQzKNL%2FaWrtEN0i51YHpF%2FS%2F%2BtXna%2B2SfANQQR0eB%2BeUcmDliAAnxIJ0TSVjfJFuRg%2BMH5U7rFHRkCcy%2FPHVTEz5UX8vGeb&X-Amz-Signature=656bb79b4ae3147ae388e0f8e3f770cc2352022a422066716ab5e27cb64b07cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUFU34SF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCSYgN5AOH53PD5xkaOh63%2F1gWZ9jVVsja8nJGYdl1vhAIgFA5XcTP2D8rxCUpW9BMwM%2BdtlueuAT1118TnQ6s57w4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbsusxaO06a4vTrTyrcAzJkODilUHhLYFwiDeKppTzOF9LDQVupkl81VRauw5dqlBljR1hNPP7xbCnArB3OCG%2BgxwjMRbQajOLv5r148aUj%2BUNsS%2FsfpIXJlJmiAMUH9TiQSiFTjss4yBMGlnM3NE4e44DDwsa016gVnc57wvE8eYDURUkKv4IbpYDG5B7xOKhzloDQTwUckc91t6s%2B%2FexatzlFCpYmIMNjY%2BhGYmWHahtrz00UCeyrJ34QxL8%2BLzIuzq52ekD%2FDUsxX%2BWFsQRk7ZJZHGTO%2ByalMFixg9%2FRcyN9yjeI1NpfsdNisjHIod4sq1osN2ZtmxfU7ifSCCwBFuoMOgZINyhEEKd%2Fc%2BrlAdyFGKBohOxOhqOL1npn0zfDfuRuPTFhQs7CHv%2FqCnMHPK4pmrM%2BQRMeNQpd8AQl781TIiXVeEGFyJsO%2FmEoJNBNi7t%2B0DHAsz4L4itnky4Anf2P1ydFzNF1V2M8eKUqzlCGGTcUXZh6fEFzaSOadDvQXAF2B0q%2F4bBA2YrT8VbKkFkRGZngfHvWpCfo48LfYWggUcscJol4UXQ62hjV8dZ0c7Z4GP30ARaTNMDJ%2BOwEyHLvKZ8gvRorC6CYQ3VVZuux91q1rpEjqCLwlk0t9Naf5I4hq589b260MPKFhcEGOqUB%2BIX6%2BOrVyVNIbF%2FOt4XHO7L0YGnxJ%2BOz8OD15p%2Fzye7G%2FYEUo0BLMkh7YBtCiq5jQcRZYrhb6qGbp1vneUJVTGuYN2f74LZVEAZOlUs6OFJKBIj8DozV0G19YOXAWwQzKNL%2FaWrtEN0i51YHpF%2FS%2F%2BtXna%2B2SfANQQR0eB%2BeUcmDliAAnxIJ0TSVjfJFuRg%2BMH5U7rFHRkCcy%2FPHVTEz5UX8vGeb&X-Amz-Signature=9ee4f06e21e8dd5a230a12696869a272105f95a5e5868bd72f4ea853289970dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
