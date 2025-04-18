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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GXEUDMA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg4hses0qxuC3PKPRckCjpKUE8KYnNlUJnIz48ZposRwIgH6cepGQZeaSKae41PpydQTqczHodMcXV68BU4hG%2FDTEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKJmxRnaAWG0TJGfnyrcA%2Fgki7LYZW79reYNhrQiKaN7KhTW31XP9Ll8DRKUMeuF7d6xoWFlcgCxlA0OVLyJ33OJDS4yqvfR7kBZHB483uC36dNlOdje5Cv45KHlAXRI%2FbNJn6zyB%2Bwv%2FYJDSa0AM2j2XY3bbgy0FDaEUnNksu2oIDDnP1T1gnuuDQeDsb%2B1jfrQIiEUsL1zi%2Bd9dsVWe7NbNhWh16dIFuVhVTatscn2tbD5wwYMlNPUkuiibPaGCSskW76uscA2Xi%2FPxeI%2BLH3CAc0qZOVq2utZbodR%2B%2BleBXOmi%2BOGqQzTEt6nePXNd6JlJWxhm5JIB9CzL09i%2BX%2BN%2BBmI0arRgrYIBDAeVGCsq9rFjno87I2vMic5w6ivHR1Vtjw7%2FLXGp3v6BoJLeRcj4p5ubqKuddy%2FMzsZBuRC6JI12XIREgbcsJfAD3DFqgjvQ%2B1sehgXymxoHvNzt5h7B3ucW%2Buh3lryI5Dk8JH%2FLKcmV7ryT%2BTKXt7RBQvrWqsNbSha1EeDrpe%2B7ZCHXnQ0GT4ZL3z8zU8TaugNiVPF6%2FA5Jng4RdbkUyJXHKcrwyvz5xbwExxx5GyxHBOIbEnWUvJsrjK96jpbRJ%2F2%2FHd9UWqpi6DHdIrAjOkzJIjayjyrZeXqc%2BiOTvawML75icAGOqUB6CU1i9pe%2BlzNvnlRrjKyQOP1Do3WOCGKaomXhwWK4M6wzKupQay%2B5Mo%2Fhc9IIwNbXqmvBc%2BIQ41%2BNcX1gP%2FTptjBPpvyE%2F6FAT5wCkoJ7paYgFs2hQJyx5K8F5zwdvmcwi5CQW2tzy6bGzMfKAs%2FO8ItLFVKLgpEReZ6HF8rwsWyTjIRyTkftzoTBmFHOOCU1P4%2Fch0HAplxleLLv0kfQHnKtHwh&X-Amz-Signature=d103b3a03d18fd76197e344a84bd3f72cd9d4c0f4bfda1b4c3e5fd1568ff6a73&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GXEUDMA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg4hses0qxuC3PKPRckCjpKUE8KYnNlUJnIz48ZposRwIgH6cepGQZeaSKae41PpydQTqczHodMcXV68BU4hG%2FDTEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKJmxRnaAWG0TJGfnyrcA%2Fgki7LYZW79reYNhrQiKaN7KhTW31XP9Ll8DRKUMeuF7d6xoWFlcgCxlA0OVLyJ33OJDS4yqvfR7kBZHB483uC36dNlOdje5Cv45KHlAXRI%2FbNJn6zyB%2Bwv%2FYJDSa0AM2j2XY3bbgy0FDaEUnNksu2oIDDnP1T1gnuuDQeDsb%2B1jfrQIiEUsL1zi%2Bd9dsVWe7NbNhWh16dIFuVhVTatscn2tbD5wwYMlNPUkuiibPaGCSskW76uscA2Xi%2FPxeI%2BLH3CAc0qZOVq2utZbodR%2B%2BleBXOmi%2BOGqQzTEt6nePXNd6JlJWxhm5JIB9CzL09i%2BX%2BN%2BBmI0arRgrYIBDAeVGCsq9rFjno87I2vMic5w6ivHR1Vtjw7%2FLXGp3v6BoJLeRcj4p5ubqKuddy%2FMzsZBuRC6JI12XIREgbcsJfAD3DFqgjvQ%2B1sehgXymxoHvNzt5h7B3ucW%2Buh3lryI5Dk8JH%2FLKcmV7ryT%2BTKXt7RBQvrWqsNbSha1EeDrpe%2B7ZCHXnQ0GT4ZL3z8zU8TaugNiVPF6%2FA5Jng4RdbkUyJXHKcrwyvz5xbwExxx5GyxHBOIbEnWUvJsrjK96jpbRJ%2F2%2FHd9UWqpi6DHdIrAjOkzJIjayjyrZeXqc%2BiOTvawML75icAGOqUB6CU1i9pe%2BlzNvnlRrjKyQOP1Do3WOCGKaomXhwWK4M6wzKupQay%2B5Mo%2Fhc9IIwNbXqmvBc%2BIQ41%2BNcX1gP%2FTptjBPpvyE%2F6FAT5wCkoJ7paYgFs2hQJyx5K8F5zwdvmcwi5CQW2tzy6bGzMfKAs%2FO8ItLFVKLgpEReZ6HF8rwsWyTjIRyTkftzoTBmFHOOCU1P4%2Fch0HAplxleLLv0kfQHnKtHwh&X-Amz-Signature=1c11711103dccf435ff2f13d4a2683309e26da2aa5e48a9d632b6811db83b5fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GXEUDMA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg4hses0qxuC3PKPRckCjpKUE8KYnNlUJnIz48ZposRwIgH6cepGQZeaSKae41PpydQTqczHodMcXV68BU4hG%2FDTEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDKJmxRnaAWG0TJGfnyrcA%2Fgki7LYZW79reYNhrQiKaN7KhTW31XP9Ll8DRKUMeuF7d6xoWFlcgCxlA0OVLyJ33OJDS4yqvfR7kBZHB483uC36dNlOdje5Cv45KHlAXRI%2FbNJn6zyB%2Bwv%2FYJDSa0AM2j2XY3bbgy0FDaEUnNksu2oIDDnP1T1gnuuDQeDsb%2B1jfrQIiEUsL1zi%2Bd9dsVWe7NbNhWh16dIFuVhVTatscn2tbD5wwYMlNPUkuiibPaGCSskW76uscA2Xi%2FPxeI%2BLH3CAc0qZOVq2utZbodR%2B%2BleBXOmi%2BOGqQzTEt6nePXNd6JlJWxhm5JIB9CzL09i%2BX%2BN%2BBmI0arRgrYIBDAeVGCsq9rFjno87I2vMic5w6ivHR1Vtjw7%2FLXGp3v6BoJLeRcj4p5ubqKuddy%2FMzsZBuRC6JI12XIREgbcsJfAD3DFqgjvQ%2B1sehgXymxoHvNzt5h7B3ucW%2Buh3lryI5Dk8JH%2FLKcmV7ryT%2BTKXt7RBQvrWqsNbSha1EeDrpe%2B7ZCHXnQ0GT4ZL3z8zU8TaugNiVPF6%2FA5Jng4RdbkUyJXHKcrwyvz5xbwExxx5GyxHBOIbEnWUvJsrjK96jpbRJ%2F2%2FHd9UWqpi6DHdIrAjOkzJIjayjyrZeXqc%2BiOTvawML75icAGOqUB6CU1i9pe%2BlzNvnlRrjKyQOP1Do3WOCGKaomXhwWK4M6wzKupQay%2B5Mo%2Fhc9IIwNbXqmvBc%2BIQ41%2BNcX1gP%2FTptjBPpvyE%2F6FAT5wCkoJ7paYgFs2hQJyx5K8F5zwdvmcwi5CQW2tzy6bGzMfKAs%2FO8ItLFVKLgpEReZ6HF8rwsWyTjIRyTkftzoTBmFHOOCU1P4%2Fch0HAplxleLLv0kfQHnKtHwh&X-Amz-Signature=d460e9b1657e7bc65ed0d17f838f3e2056a0586c58dce83ecc220e3ad2ed96b7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
