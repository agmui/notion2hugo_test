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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WFQ4WPX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDBx2DUhzJ7HFy5Nc%2BKvyMijjFGDjeGd6PbAF8PnqiUDwIgKYcU0SYphsal80dS8baD0%2Fu%2FHWvNvYfCS5FU1duKrcUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBx8wvP5Wbgx9Pb%2BUyrcA6llB27fPp9yNs3XI2GDf3zty0dI1UEmZofieVujDH9kIohcsLLZHwj6MYv4Da671XGk7z8GE2QV%2FQS3SmnarMUX7HLzRPdc0em85BqJiQZoQa7ATgqZZejT956yFXDcgyczp8o0C3ufpRPzHo%2FjlrILyNjCO6WhgH9iGYKrO%2Fh2D5uyryLl6VC6gk%2B7Ux6r1dTtI%2BelseSHGCoXolyKGdVlgkjVYtjhFMwc7MIcB9Mx4hkq7Wl6y2Yl1ErCPWlMyRJp1VzxNBSZKm%2FJTNbNWSMIPQE2cC17fIHqfsmBFDAreSjRUeeSgqHR0DrHWxshNxOCERNoluGor6GlVJoIRUoF6kwWW2ND2ZHAZfNtlXDHnQRF%2B%2BqJ1hf2UmJPfRBau0WJh1uPceUC6hCAuNQ9ZLp5EVvIrE9SRr%2Ff6dCkYYZqRDsBvxrw9l48BhxwVN%2FZuaAOb%2FSoPCi13D2Bl1tMhg16NrtA1%2BPgDBqJfS2uDsDYfdk5%2FOrb3MD9asokZRVkQ%2FHS7aS5%2FnrtGwyRBmC47Z2JbXVrXDofeW2LgjB%2BewxJn2eRMzToiCPQG7l77Nvi2zhGSXtwDtjIftrkf4QGVmYLkfX6PI6bJdwg5zW%2BS4Tpwbc%2B%2BgByZhl1y62iMNj3%2BMIGOqUBrtcHaBt2yaCyU3ESdkU0Op0o5Z8rchziqXADy4AtgsXMzP5Ms15fxGEgrcis3nC%2Bmnf2FSluTO7%2FxYr%2FQK0shDE4HboWA6ljXX0EhOC37QTqsk6Ed41wFE4c1lV1xQIcmEQZ6wgk0VXoaFsHT3bdLyALWFWs1BZ2p6MRnWp11WEtzx3C2cqgf8Z82gqA1bIxT0LOLE8o89m7XJDrTqI78DtxQ4C1&X-Amz-Signature=84a72934317cc0a6099d241575aaf4bf6e2d3238826669ecff56c59b7b4cf068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WFQ4WPX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDBx2DUhzJ7HFy5Nc%2BKvyMijjFGDjeGd6PbAF8PnqiUDwIgKYcU0SYphsal80dS8baD0%2Fu%2FHWvNvYfCS5FU1duKrcUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBx8wvP5Wbgx9Pb%2BUyrcA6llB27fPp9yNs3XI2GDf3zty0dI1UEmZofieVujDH9kIohcsLLZHwj6MYv4Da671XGk7z8GE2QV%2FQS3SmnarMUX7HLzRPdc0em85BqJiQZoQa7ATgqZZejT956yFXDcgyczp8o0C3ufpRPzHo%2FjlrILyNjCO6WhgH9iGYKrO%2Fh2D5uyryLl6VC6gk%2B7Ux6r1dTtI%2BelseSHGCoXolyKGdVlgkjVYtjhFMwc7MIcB9Mx4hkq7Wl6y2Yl1ErCPWlMyRJp1VzxNBSZKm%2FJTNbNWSMIPQE2cC17fIHqfsmBFDAreSjRUeeSgqHR0DrHWxshNxOCERNoluGor6GlVJoIRUoF6kwWW2ND2ZHAZfNtlXDHnQRF%2B%2BqJ1hf2UmJPfRBau0WJh1uPceUC6hCAuNQ9ZLp5EVvIrE9SRr%2Ff6dCkYYZqRDsBvxrw9l48BhxwVN%2FZuaAOb%2FSoPCi13D2Bl1tMhg16NrtA1%2BPgDBqJfS2uDsDYfdk5%2FOrb3MD9asokZRVkQ%2FHS7aS5%2FnrtGwyRBmC47Z2JbXVrXDofeW2LgjB%2BewxJn2eRMzToiCPQG7l77Nvi2zhGSXtwDtjIftrkf4QGVmYLkfX6PI6bJdwg5zW%2BS4Tpwbc%2B%2BgByZhl1y62iMNj3%2BMIGOqUBrtcHaBt2yaCyU3ESdkU0Op0o5Z8rchziqXADy4AtgsXMzP5Ms15fxGEgrcis3nC%2Bmnf2FSluTO7%2FxYr%2FQK0shDE4HboWA6ljXX0EhOC37QTqsk6Ed41wFE4c1lV1xQIcmEQZ6wgk0VXoaFsHT3bdLyALWFWs1BZ2p6MRnWp11WEtzx3C2cqgf8Z82gqA1bIxT0LOLE8o89m7XJDrTqI78DtxQ4C1&X-Amz-Signature=b866a33d452146c6239dd3b448dbba6f089cbcd82632054b60a494ac390ae41f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WFQ4WPX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDBx2DUhzJ7HFy5Nc%2BKvyMijjFGDjeGd6PbAF8PnqiUDwIgKYcU0SYphsal80dS8baD0%2Fu%2FHWvNvYfCS5FU1duKrcUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBx8wvP5Wbgx9Pb%2BUyrcA6llB27fPp9yNs3XI2GDf3zty0dI1UEmZofieVujDH9kIohcsLLZHwj6MYv4Da671XGk7z8GE2QV%2FQS3SmnarMUX7HLzRPdc0em85BqJiQZoQa7ATgqZZejT956yFXDcgyczp8o0C3ufpRPzHo%2FjlrILyNjCO6WhgH9iGYKrO%2Fh2D5uyryLl6VC6gk%2B7Ux6r1dTtI%2BelseSHGCoXolyKGdVlgkjVYtjhFMwc7MIcB9Mx4hkq7Wl6y2Yl1ErCPWlMyRJp1VzxNBSZKm%2FJTNbNWSMIPQE2cC17fIHqfsmBFDAreSjRUeeSgqHR0DrHWxshNxOCERNoluGor6GlVJoIRUoF6kwWW2ND2ZHAZfNtlXDHnQRF%2B%2BqJ1hf2UmJPfRBau0WJh1uPceUC6hCAuNQ9ZLp5EVvIrE9SRr%2Ff6dCkYYZqRDsBvxrw9l48BhxwVN%2FZuaAOb%2FSoPCi13D2Bl1tMhg16NrtA1%2BPgDBqJfS2uDsDYfdk5%2FOrb3MD9asokZRVkQ%2FHS7aS5%2FnrtGwyRBmC47Z2JbXVrXDofeW2LgjB%2BewxJn2eRMzToiCPQG7l77Nvi2zhGSXtwDtjIftrkf4QGVmYLkfX6PI6bJdwg5zW%2BS4Tpwbc%2B%2BgByZhl1y62iMNj3%2BMIGOqUBrtcHaBt2yaCyU3ESdkU0Op0o5Z8rchziqXADy4AtgsXMzP5Ms15fxGEgrcis3nC%2Bmnf2FSluTO7%2FxYr%2FQK0shDE4HboWA6ljXX0EhOC37QTqsk6Ed41wFE4c1lV1xQIcmEQZ6wgk0VXoaFsHT3bdLyALWFWs1BZ2p6MRnWp11WEtzx3C2cqgf8Z82gqA1bIxT0LOLE8o89m7XJDrTqI78DtxQ4C1&X-Amz-Signature=551c743834db473be15d1a6c11e4d91157977231e3dc610a38d00c6500349b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
