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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4JF4CY%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOvvdRyBSOzf5MQyzJokYAU9c7wxDx7s3bHl9rjtv68AiAcLrbdLiix57zk1LaB%2ByNlNZtgg%2B0OE6SAKMryUS4oOyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgSv9qx4zpNUdf8%2FBKtwD%2BWtNx3vhkRoxkGSatG4y1hNkTEXhYfRxq%2BfnqWaVwYnmsLgRMAWjKx66jZBZkisILXM62WaID2VjZXyEzjbkW1X1uvseU1ZoeraFykbEqAgsUH7p0rWOAQ9pZuFYOaCdjQBM0dkFmHPvm229HSGghgOjkTHugwBW3GV5lcxFL5P7yDEtlQ%2BsLElfeF5L%2F7rH6%2FOTNrue%2FiFqmVJBGDQZc2DF8hup2NwueY8jwHjPslY91hGfoIRBKEsI3jO7XmRkGZ5JzUpinDM6vd4Jzv%2FcehAuCbC9uttsqAi2d%2BhWoJIjrGlUJK07ugLivyBK997nld3Z%2BW0ZnrKyEsHCafrchmiIW6cV%2F7EuvJXsqcwvPezxg3kfDfyrNteEfZdLnk8GKR8JK%2BEKeyAj%2FYWrjYrlSya%2Bfh%2FPayy8Y%2FjTBORjlx7W6KQDWE4L0uYCqgnJZf3IGn2lL%2FqBzJQXfKjElMZmtiwJiVVlav20tDtmQiE%2B895BSm0SmKG6tFDfmRc8ul9cD1Tb%2FnfdiEIT8WpL7LqQOrgkChhcyWRsd72xQARkovCUN3e8fwIgXgHt7UiFwe5Id%2BrVYKm9aKjGF3mxUABO7TUKwnvd3UP4F2xfgvQHII5wzX4Up3iBUdscgwMw%2FcqBvwY6pgFNNNgrs5PWY3doHG3ayL%2FDkanzkuizrZjgqIoXAhqEP4mF2jX%2BpTeEDSMUbL5db2voxFdNX%2Fq89arOrcuhT8tmEjXCfa4Oo2R%2BrGKAdXIZnZAdoV%2FIhvhPnfEqT31t9OHU9KkJ27IdI%2BK5DXyxXaK7yDYelub53RJK60TrvabZkOayd%2FEFjd8foaSlqNuC7MeDfzsUnbCdI07RggIpOgnJPyamSyS%2F&X-Amz-Signature=9b0d52e811d6a6e1bbf84a35d2067b374528a74548188f199d1c8bfbc928b5b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4JF4CY%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOvvdRyBSOzf5MQyzJokYAU9c7wxDx7s3bHl9rjtv68AiAcLrbdLiix57zk1LaB%2ByNlNZtgg%2B0OE6SAKMryUS4oOyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgSv9qx4zpNUdf8%2FBKtwD%2BWtNx3vhkRoxkGSatG4y1hNkTEXhYfRxq%2BfnqWaVwYnmsLgRMAWjKx66jZBZkisILXM62WaID2VjZXyEzjbkW1X1uvseU1ZoeraFykbEqAgsUH7p0rWOAQ9pZuFYOaCdjQBM0dkFmHPvm229HSGghgOjkTHugwBW3GV5lcxFL5P7yDEtlQ%2BsLElfeF5L%2F7rH6%2FOTNrue%2FiFqmVJBGDQZc2DF8hup2NwueY8jwHjPslY91hGfoIRBKEsI3jO7XmRkGZ5JzUpinDM6vd4Jzv%2FcehAuCbC9uttsqAi2d%2BhWoJIjrGlUJK07ugLivyBK997nld3Z%2BW0ZnrKyEsHCafrchmiIW6cV%2F7EuvJXsqcwvPezxg3kfDfyrNteEfZdLnk8GKR8JK%2BEKeyAj%2FYWrjYrlSya%2Bfh%2FPayy8Y%2FjTBORjlx7W6KQDWE4L0uYCqgnJZf3IGn2lL%2FqBzJQXfKjElMZmtiwJiVVlav20tDtmQiE%2B895BSm0SmKG6tFDfmRc8ul9cD1Tb%2FnfdiEIT8WpL7LqQOrgkChhcyWRsd72xQARkovCUN3e8fwIgXgHt7UiFwe5Id%2BrVYKm9aKjGF3mxUABO7TUKwnvd3UP4F2xfgvQHII5wzX4Up3iBUdscgwMw%2FcqBvwY6pgFNNNgrs5PWY3doHG3ayL%2FDkanzkuizrZjgqIoXAhqEP4mF2jX%2BpTeEDSMUbL5db2voxFdNX%2Fq89arOrcuhT8tmEjXCfa4Oo2R%2BrGKAdXIZnZAdoV%2FIhvhPnfEqT31t9OHU9KkJ27IdI%2BK5DXyxXaK7yDYelub53RJK60TrvabZkOayd%2FEFjd8foaSlqNuC7MeDfzsUnbCdI07RggIpOgnJPyamSyS%2F&X-Amz-Signature=a438a4d56b4b71db0bb76e56824dbdd9fcb31aba68bdfeeb17c51ee30f947741&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG4JF4CY%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOvvdRyBSOzf5MQyzJokYAU9c7wxDx7s3bHl9rjtv68AiAcLrbdLiix57zk1LaB%2ByNlNZtgg%2B0OE6SAKMryUS4oOyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgSv9qx4zpNUdf8%2FBKtwD%2BWtNx3vhkRoxkGSatG4y1hNkTEXhYfRxq%2BfnqWaVwYnmsLgRMAWjKx66jZBZkisILXM62WaID2VjZXyEzjbkW1X1uvseU1ZoeraFykbEqAgsUH7p0rWOAQ9pZuFYOaCdjQBM0dkFmHPvm229HSGghgOjkTHugwBW3GV5lcxFL5P7yDEtlQ%2BsLElfeF5L%2F7rH6%2FOTNrue%2FiFqmVJBGDQZc2DF8hup2NwueY8jwHjPslY91hGfoIRBKEsI3jO7XmRkGZ5JzUpinDM6vd4Jzv%2FcehAuCbC9uttsqAi2d%2BhWoJIjrGlUJK07ugLivyBK997nld3Z%2BW0ZnrKyEsHCafrchmiIW6cV%2F7EuvJXsqcwvPezxg3kfDfyrNteEfZdLnk8GKR8JK%2BEKeyAj%2FYWrjYrlSya%2Bfh%2FPayy8Y%2FjTBORjlx7W6KQDWE4L0uYCqgnJZf3IGn2lL%2FqBzJQXfKjElMZmtiwJiVVlav20tDtmQiE%2B895BSm0SmKG6tFDfmRc8ul9cD1Tb%2FnfdiEIT8WpL7LqQOrgkChhcyWRsd72xQARkovCUN3e8fwIgXgHt7UiFwe5Id%2BrVYKm9aKjGF3mxUABO7TUKwnvd3UP4F2xfgvQHII5wzX4Up3iBUdscgwMw%2FcqBvwY6pgFNNNgrs5PWY3doHG3ayL%2FDkanzkuizrZjgqIoXAhqEP4mF2jX%2BpTeEDSMUbL5db2voxFdNX%2Fq89arOrcuhT8tmEjXCfa4Oo2R%2BrGKAdXIZnZAdoV%2FIhvhPnfEqT31t9OHU9KkJ27IdI%2BK5DXyxXaK7yDYelub53RJK60TrvabZkOayd%2FEFjd8foaSlqNuC7MeDfzsUnbCdI07RggIpOgnJPyamSyS%2F&X-Amz-Signature=547b74d4f5cc8b743db109a042145892cab65d66a6a33be0ee4e19ef34e8e83a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
