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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVLPW5Z%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNZgftjw%2FScPpkcMMOzP5bodo9OS2iEi5lAkzUVvZ4YAIgAiSxGbemwcTHzz1qjDK3ixAwiEPKRaN6x8%2BwJgLAXPwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7MW8dn2C0D%2BvAG%2BircA7WRdqde4FUIVc6B6HUbZCCgYyZwurF%2F0BUEJOQH7oJrVQnJS6idomvXVaplMKijae1HYnqT8lV6eq15jIO1ebzJ%2B1vZwapERJbJkCgSktIvM7Er08VteN%2Be9mtSnNVhmXmRgdORfyU2PrvDqmhf%2BElS0AC3HP%2FV46S0oBY0MFPbbQfK0V9K4quKO%2Fmfy%2FzDW3DDBGjnF62zNP13bYzfOJPzf5c5WDHEPZDhexek3OaSCV1D8W%2FLce1mZafj0gMXGibzOrW1lxbclTgLQU%2BG2cQmMvRrJjFma5JkPPTU3S9P25%2Fio64VHq2Brsrs8T%2FCQ4a7LRScfiROj2yNmzV8uUWn%2BLUoHq4T819G%2BgFIKCG%2B%2BFfoVcXE4e%2Bps7oavs5SIcXoBF%2FUC9tXp2Drbttv0tJjNtWNOVNiTLDuseZJcaqgMYv91Fe0cyFyhw5N%2FIfWTUh%2Bry6fw9VIZ%2BSc4xJUWJEFsEhvlVmr02wYA180AVkkw2lQj1bSp3eZJBGl10CJbe0E16V4j9AahCqMwW492eRBLf9Dzq1kZ9kfSqWeY%2Fnnozjp0pXTY2hQMxbsOyV6HNN0Xg8row0lcXLAF3SMQAhLa4lN9OqOh%2B94Z3BL8ziF%2FEvBJuaYzBPwh33CMOq33MIGOqUBtDK650qpPeH2CWuG%2FP85WIihZOIWlX8Y9t4bzwKwX%2Bwu8uausK0vr4OhyNU%2BS1RkdfKDvo98AmN4Z5I98h6B63QKkLzGLDPTiknrlMw1thethPvKaOFla7zzog0zEtMnckXKBIuadosEeCIZ4Wu0Hdx%2Bg5Hunv8XGTjOwABaT6pVlK9X%2F%2F9JslxWeRVJpwUrqQp0cljn68i72TftjDYM%2F7tjmKhe&X-Amz-Signature=835b30e34ca2c7cc9614d75c53eb86c4d26432301240530482038e3231eb2ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVLPW5Z%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNZgftjw%2FScPpkcMMOzP5bodo9OS2iEi5lAkzUVvZ4YAIgAiSxGbemwcTHzz1qjDK3ixAwiEPKRaN6x8%2BwJgLAXPwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7MW8dn2C0D%2BvAG%2BircA7WRdqde4FUIVc6B6HUbZCCgYyZwurF%2F0BUEJOQH7oJrVQnJS6idomvXVaplMKijae1HYnqT8lV6eq15jIO1ebzJ%2B1vZwapERJbJkCgSktIvM7Er08VteN%2Be9mtSnNVhmXmRgdORfyU2PrvDqmhf%2BElS0AC3HP%2FV46S0oBY0MFPbbQfK0V9K4quKO%2Fmfy%2FzDW3DDBGjnF62zNP13bYzfOJPzf5c5WDHEPZDhexek3OaSCV1D8W%2FLce1mZafj0gMXGibzOrW1lxbclTgLQU%2BG2cQmMvRrJjFma5JkPPTU3S9P25%2Fio64VHq2Brsrs8T%2FCQ4a7LRScfiROj2yNmzV8uUWn%2BLUoHq4T819G%2BgFIKCG%2B%2BFfoVcXE4e%2Bps7oavs5SIcXoBF%2FUC9tXp2Drbttv0tJjNtWNOVNiTLDuseZJcaqgMYv91Fe0cyFyhw5N%2FIfWTUh%2Bry6fw9VIZ%2BSc4xJUWJEFsEhvlVmr02wYA180AVkkw2lQj1bSp3eZJBGl10CJbe0E16V4j9AahCqMwW492eRBLf9Dzq1kZ9kfSqWeY%2Fnnozjp0pXTY2hQMxbsOyV6HNN0Xg8row0lcXLAF3SMQAhLa4lN9OqOh%2B94Z3BL8ziF%2FEvBJuaYzBPwh33CMOq33MIGOqUBtDK650qpPeH2CWuG%2FP85WIihZOIWlX8Y9t4bzwKwX%2Bwu8uausK0vr4OhyNU%2BS1RkdfKDvo98AmN4Z5I98h6B63QKkLzGLDPTiknrlMw1thethPvKaOFla7zzog0zEtMnckXKBIuadosEeCIZ4Wu0Hdx%2Bg5Hunv8XGTjOwABaT6pVlK9X%2F%2F9JslxWeRVJpwUrqQp0cljn68i72TftjDYM%2F7tjmKhe&X-Amz-Signature=77e5bdeb50f1677d39ceddc44fdd71648892bc692f8df6a57596750981ed6b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVLPW5Z%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNZgftjw%2FScPpkcMMOzP5bodo9OS2iEi5lAkzUVvZ4YAIgAiSxGbemwcTHzz1qjDK3ixAwiEPKRaN6x8%2BwJgLAXPwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7MW8dn2C0D%2BvAG%2BircA7WRdqde4FUIVc6B6HUbZCCgYyZwurF%2F0BUEJOQH7oJrVQnJS6idomvXVaplMKijae1HYnqT8lV6eq15jIO1ebzJ%2B1vZwapERJbJkCgSktIvM7Er08VteN%2Be9mtSnNVhmXmRgdORfyU2PrvDqmhf%2BElS0AC3HP%2FV46S0oBY0MFPbbQfK0V9K4quKO%2Fmfy%2FzDW3DDBGjnF62zNP13bYzfOJPzf5c5WDHEPZDhexek3OaSCV1D8W%2FLce1mZafj0gMXGibzOrW1lxbclTgLQU%2BG2cQmMvRrJjFma5JkPPTU3S9P25%2Fio64VHq2Brsrs8T%2FCQ4a7LRScfiROj2yNmzV8uUWn%2BLUoHq4T819G%2BgFIKCG%2B%2BFfoVcXE4e%2Bps7oavs5SIcXoBF%2FUC9tXp2Drbttv0tJjNtWNOVNiTLDuseZJcaqgMYv91Fe0cyFyhw5N%2FIfWTUh%2Bry6fw9VIZ%2BSc4xJUWJEFsEhvlVmr02wYA180AVkkw2lQj1bSp3eZJBGl10CJbe0E16V4j9AahCqMwW492eRBLf9Dzq1kZ9kfSqWeY%2Fnnozjp0pXTY2hQMxbsOyV6HNN0Xg8row0lcXLAF3SMQAhLa4lN9OqOh%2B94Z3BL8ziF%2FEvBJuaYzBPwh33CMOq33MIGOqUBtDK650qpPeH2CWuG%2FP85WIihZOIWlX8Y9t4bzwKwX%2Bwu8uausK0vr4OhyNU%2BS1RkdfKDvo98AmN4Z5I98h6B63QKkLzGLDPTiknrlMw1thethPvKaOFla7zzog0zEtMnckXKBIuadosEeCIZ4Wu0Hdx%2Bg5Hunv8XGTjOwABaT6pVlK9X%2F%2F9JslxWeRVJpwUrqQp0cljn68i72TftjDYM%2F7tjmKhe&X-Amz-Signature=6cc2e5c8460d2aadea07f2dd2f9edfaa2b32dd1cfd61e6c44e4560a9f4a6c7eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
