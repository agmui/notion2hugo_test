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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRASZ7ML%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FoitmpKMbgsOOfWNHxPGucVoBE%2Bvt52nyNfe2IJOMeAiEA02JLzJyT4%2FT0i0RHCPHBku7olYLnIvN%2BG5PmqmkO0GAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAVjJdcZ%2Fc8rczqv7ircA5fGNaZa4Yb%2BMgo1BSwBWxeUPNhB%2BtV%2FAvYV%2BAdnuSthgYDzDVzIVRFAl9HY7f77BlRFVkyR5Dlq0J6rJqIuJMlJQMfYHhkNHrEzqeQas%2B1hgrRnYXActt4JgfNufA7oClBs4fdhMLLoXbUHkBAIAlHVihKKkIfwJnYYLx7Ms8xKhH%2Bd3AqavCPr41ScZbKYfxyXsYhJb0SvPCIfqOWX9p9rwMosEGaegPrR9N3KfnWgk7s5SkB9WzvSj8Mm4Y3mwjyPFZ0RvZJQUYbkYWcux%2Brzba5%2FNXIQ37NFsiVVGA%2FWNJxgrf8FXpruJKxzbbqlGnzlfG4iEfscJ2Xr%2FH5cd7DXOO7y2VxVVnl6C%2BwvbXpNEBPauhSrC5tsyIQFBDyX1KqFeF2MwjIg5bzTjWyuzd29caMj9OyQnAXfHGRJnLwgrfkmi%2FfKcHYzONLyW3K7uBf6XjV8SfSnY9qoPETGise1bEF0Yf4%2Br8MPng2LX9M%2Bh4fGZlCBVHXIWZRrdfrI%2BcXpTnFlkcyg894Qqta18vUwJ6MRlEpSEFLDCRJYwp2CLDOWQj2nUb7WQB6qrYgw2wMWKT6hKuoS0GCyWYzO%2F%2B3vGoo3abnC1F5DxUtllmz3mmpN8EdpyPdI6brmMK6W4sAGOqUBgvJU%2FbZjbFxcsuFhaogDeUCud4ihX%2Fl7GUyknRVCsAtAIPqqq470LDdYoudjh7CvAZqWcMqZYyN1TXP0OLTp4BUnhlvCVj4zbdTxgNgY3zM1O6WH6WJjRV%2BqI46D33UhB11fE8rTqhp%2BVm182dhPLX9o0%2Bd9yJ9Pk%2FhQDdt55Fb5yMrmiXMKhij9WvKigf5rDfJTF%2BrqbCqqOsJZT5P8n7blICPj&X-Amz-Signature=082bba6acb287e423eee3e1b8a2ea2b45c875f933baed1df3757e4c8ea708996&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRASZ7ML%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FoitmpKMbgsOOfWNHxPGucVoBE%2Bvt52nyNfe2IJOMeAiEA02JLzJyT4%2FT0i0RHCPHBku7olYLnIvN%2BG5PmqmkO0GAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAVjJdcZ%2Fc8rczqv7ircA5fGNaZa4Yb%2BMgo1BSwBWxeUPNhB%2BtV%2FAvYV%2BAdnuSthgYDzDVzIVRFAl9HY7f77BlRFVkyR5Dlq0J6rJqIuJMlJQMfYHhkNHrEzqeQas%2B1hgrRnYXActt4JgfNufA7oClBs4fdhMLLoXbUHkBAIAlHVihKKkIfwJnYYLx7Ms8xKhH%2Bd3AqavCPr41ScZbKYfxyXsYhJb0SvPCIfqOWX9p9rwMosEGaegPrR9N3KfnWgk7s5SkB9WzvSj8Mm4Y3mwjyPFZ0RvZJQUYbkYWcux%2Brzba5%2FNXIQ37NFsiVVGA%2FWNJxgrf8FXpruJKxzbbqlGnzlfG4iEfscJ2Xr%2FH5cd7DXOO7y2VxVVnl6C%2BwvbXpNEBPauhSrC5tsyIQFBDyX1KqFeF2MwjIg5bzTjWyuzd29caMj9OyQnAXfHGRJnLwgrfkmi%2FfKcHYzONLyW3K7uBf6XjV8SfSnY9qoPETGise1bEF0Yf4%2Br8MPng2LX9M%2Bh4fGZlCBVHXIWZRrdfrI%2BcXpTnFlkcyg894Qqta18vUwJ6MRlEpSEFLDCRJYwp2CLDOWQj2nUb7WQB6qrYgw2wMWKT6hKuoS0GCyWYzO%2F%2B3vGoo3abnC1F5DxUtllmz3mmpN8EdpyPdI6brmMK6W4sAGOqUBgvJU%2FbZjbFxcsuFhaogDeUCud4ihX%2Fl7GUyknRVCsAtAIPqqq470LDdYoudjh7CvAZqWcMqZYyN1TXP0OLTp4BUnhlvCVj4zbdTxgNgY3zM1O6WH6WJjRV%2BqI46D33UhB11fE8rTqhp%2BVm182dhPLX9o0%2Bd9yJ9Pk%2FhQDdt55Fb5yMrmiXMKhij9WvKigf5rDfJTF%2BrqbCqqOsJZT5P8n7blICPj&X-Amz-Signature=ab1813964c24ab4938e894dbedd70687e0fe73c65bb452e300da1bef0540b6a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRASZ7ML%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FoitmpKMbgsOOfWNHxPGucVoBE%2Bvt52nyNfe2IJOMeAiEA02JLzJyT4%2FT0i0RHCPHBku7olYLnIvN%2BG5PmqmkO0GAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAVjJdcZ%2Fc8rczqv7ircA5fGNaZa4Yb%2BMgo1BSwBWxeUPNhB%2BtV%2FAvYV%2BAdnuSthgYDzDVzIVRFAl9HY7f77BlRFVkyR5Dlq0J6rJqIuJMlJQMfYHhkNHrEzqeQas%2B1hgrRnYXActt4JgfNufA7oClBs4fdhMLLoXbUHkBAIAlHVihKKkIfwJnYYLx7Ms8xKhH%2Bd3AqavCPr41ScZbKYfxyXsYhJb0SvPCIfqOWX9p9rwMosEGaegPrR9N3KfnWgk7s5SkB9WzvSj8Mm4Y3mwjyPFZ0RvZJQUYbkYWcux%2Brzba5%2FNXIQ37NFsiVVGA%2FWNJxgrf8FXpruJKxzbbqlGnzlfG4iEfscJ2Xr%2FH5cd7DXOO7y2VxVVnl6C%2BwvbXpNEBPauhSrC5tsyIQFBDyX1KqFeF2MwjIg5bzTjWyuzd29caMj9OyQnAXfHGRJnLwgrfkmi%2FfKcHYzONLyW3K7uBf6XjV8SfSnY9qoPETGise1bEF0Yf4%2Br8MPng2LX9M%2Bh4fGZlCBVHXIWZRrdfrI%2BcXpTnFlkcyg894Qqta18vUwJ6MRlEpSEFLDCRJYwp2CLDOWQj2nUb7WQB6qrYgw2wMWKT6hKuoS0GCyWYzO%2F%2B3vGoo3abnC1F5DxUtllmz3mmpN8EdpyPdI6brmMK6W4sAGOqUBgvJU%2FbZjbFxcsuFhaogDeUCud4ihX%2Fl7GUyknRVCsAtAIPqqq470LDdYoudjh7CvAZqWcMqZYyN1TXP0OLTp4BUnhlvCVj4zbdTxgNgY3zM1O6WH6WJjRV%2BqI46D33UhB11fE8rTqhp%2BVm182dhPLX9o0%2Bd9yJ9Pk%2FhQDdt55Fb5yMrmiXMKhij9WvKigf5rDfJTF%2BrqbCqqOsJZT5P8n7blICPj&X-Amz-Signature=e058615ccf2003f879c939d35d740d11a93e2179a9522721d319bf4c9396dfeb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
