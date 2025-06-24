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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RQBKXQU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICav4n6HkZGuxYIsHPBwBcm%2B5iMivG%2BE7TYi%2BQgjbIAMAiEAt9tcTgXw6Y2%2FFb%2B%2BZdMEKd654w2cPGfPpxfSlQUsCSwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPu5%2FqAd6pjEPxN%2B2ircA64JhcAba%2BUHhXvJyVq90dPIf6uaRJBvpHEqjRJM75kVqMv3rRyd0ydTTGPFsK%2FJnlEGCXd5hyu572%2B3l0GZrnfeS9iMiTTPnKWA0oZWs6vB38wddW%2FVSI2XlAdEpE6C%2BSAzAlVr82UaZs2imWri7I5%2B8qBOzP7GxFM9e7UJEK9xNZ2AzM1C0jPqnJFAAiayTjpRk2tdeL0GW%2Fr0KXbME73zHyjOH7pYbET4LsuANJdvDdfEx1jXc3QtFaV5Gb6aASxJYPYfIeIcuQwK2L%2BgSCHYgyZdeyvWuY6sdHY6Atuj%2B%2B1OT%2Bc3Bngpdw7tB4Aq%2FBzmrbT6v49bcRcv7dDK2aoovyeUFrLzSVleW82tSCmbbbRDgOsZiY9eDxyQ%2F9kDKTEI8QNYYWDj0lKiD7yFV%2FT8gR4ctgqCPwlRyr766lZl%2FGWMt5SMfBj6vrOqNtj9N6t%2BmbZu6WptuBGaSPGcsI6cjXQ%2FrUbmw6qXxrZaZYKc94%2FQ2mp2yIZJ%2BaGjC%2FmSCuqxeqSgSi9yltKRtb2qwxTpI%2FoI9ndttWdGt8etRIT21030DohPVMnGfKg6GnboK%2BhcPxmxvRD5ivPUki7mkuqOH%2BjDATddiLHaoPbpRc98kMLf7wLO2nFmtEYXMIu57MIGOqUBlVGQ50jKYT%2FXufe3PCZdqRwWEaZQSSsboM2nHt0OjZMibriyJO1ljVlJdazBfx8siT4cPiHD5XlfFKmIoIbr9CS3wcrtFHHHRDRtKI1Pc0UQ9akg7%2F%2FZ4APrZdITfhRBZYc4HVkkc4uRt2Z3CwGkmNVuhAhnfLxc5UYtzuaumZAMzPX6XcCu6KCQWnVOpbAXAwGCvY%2BDd6Zz9%2FTthXBFuE1i4o%2BO&X-Amz-Signature=37ce118adc6e2e5339b6fc044f4019e48c0c2a7e8e9d215c0fe22ce8307fab58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RQBKXQU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICav4n6HkZGuxYIsHPBwBcm%2B5iMivG%2BE7TYi%2BQgjbIAMAiEAt9tcTgXw6Y2%2FFb%2B%2BZdMEKd654w2cPGfPpxfSlQUsCSwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPu5%2FqAd6pjEPxN%2B2ircA64JhcAba%2BUHhXvJyVq90dPIf6uaRJBvpHEqjRJM75kVqMv3rRyd0ydTTGPFsK%2FJnlEGCXd5hyu572%2B3l0GZrnfeS9iMiTTPnKWA0oZWs6vB38wddW%2FVSI2XlAdEpE6C%2BSAzAlVr82UaZs2imWri7I5%2B8qBOzP7GxFM9e7UJEK9xNZ2AzM1C0jPqnJFAAiayTjpRk2tdeL0GW%2Fr0KXbME73zHyjOH7pYbET4LsuANJdvDdfEx1jXc3QtFaV5Gb6aASxJYPYfIeIcuQwK2L%2BgSCHYgyZdeyvWuY6sdHY6Atuj%2B%2B1OT%2Bc3Bngpdw7tB4Aq%2FBzmrbT6v49bcRcv7dDK2aoovyeUFrLzSVleW82tSCmbbbRDgOsZiY9eDxyQ%2F9kDKTEI8QNYYWDj0lKiD7yFV%2FT8gR4ctgqCPwlRyr766lZl%2FGWMt5SMfBj6vrOqNtj9N6t%2BmbZu6WptuBGaSPGcsI6cjXQ%2FrUbmw6qXxrZaZYKc94%2FQ2mp2yIZJ%2BaGjC%2FmSCuqxeqSgSi9yltKRtb2qwxTpI%2FoI9ndttWdGt8etRIT21030DohPVMnGfKg6GnboK%2BhcPxmxvRD5ivPUki7mkuqOH%2BjDATddiLHaoPbpRc98kMLf7wLO2nFmtEYXMIu57MIGOqUBlVGQ50jKYT%2FXufe3PCZdqRwWEaZQSSsboM2nHt0OjZMibriyJO1ljVlJdazBfx8siT4cPiHD5XlfFKmIoIbr9CS3wcrtFHHHRDRtKI1Pc0UQ9akg7%2F%2FZ4APrZdITfhRBZYc4HVkkc4uRt2Z3CwGkmNVuhAhnfLxc5UYtzuaumZAMzPX6XcCu6KCQWnVOpbAXAwGCvY%2BDd6Zz9%2FTthXBFuE1i4o%2BO&X-Amz-Signature=d439c9f2c834d8ddec2648886132f7b4f1bea29e56ef6309e54e3aec19fd9996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RQBKXQU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCICav4n6HkZGuxYIsHPBwBcm%2B5iMivG%2BE7TYi%2BQgjbIAMAiEAt9tcTgXw6Y2%2FFb%2B%2BZdMEKd654w2cPGfPpxfSlQUsCSwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPu5%2FqAd6pjEPxN%2B2ircA64JhcAba%2BUHhXvJyVq90dPIf6uaRJBvpHEqjRJM75kVqMv3rRyd0ydTTGPFsK%2FJnlEGCXd5hyu572%2B3l0GZrnfeS9iMiTTPnKWA0oZWs6vB38wddW%2FVSI2XlAdEpE6C%2BSAzAlVr82UaZs2imWri7I5%2B8qBOzP7GxFM9e7UJEK9xNZ2AzM1C0jPqnJFAAiayTjpRk2tdeL0GW%2Fr0KXbME73zHyjOH7pYbET4LsuANJdvDdfEx1jXc3QtFaV5Gb6aASxJYPYfIeIcuQwK2L%2BgSCHYgyZdeyvWuY6sdHY6Atuj%2B%2B1OT%2Bc3Bngpdw7tB4Aq%2FBzmrbT6v49bcRcv7dDK2aoovyeUFrLzSVleW82tSCmbbbRDgOsZiY9eDxyQ%2F9kDKTEI8QNYYWDj0lKiD7yFV%2FT8gR4ctgqCPwlRyr766lZl%2FGWMt5SMfBj6vrOqNtj9N6t%2BmbZu6WptuBGaSPGcsI6cjXQ%2FrUbmw6qXxrZaZYKc94%2FQ2mp2yIZJ%2BaGjC%2FmSCuqxeqSgSi9yltKRtb2qwxTpI%2FoI9ndttWdGt8etRIT21030DohPVMnGfKg6GnboK%2BhcPxmxvRD5ivPUki7mkuqOH%2BjDATddiLHaoPbpRc98kMLf7wLO2nFmtEYXMIu57MIGOqUBlVGQ50jKYT%2FXufe3PCZdqRwWEaZQSSsboM2nHt0OjZMibriyJO1ljVlJdazBfx8siT4cPiHD5XlfFKmIoIbr9CS3wcrtFHHHRDRtKI1Pc0UQ9akg7%2F%2FZ4APrZdITfhRBZYc4HVkkc4uRt2Z3CwGkmNVuhAhnfLxc5UYtzuaumZAMzPX6XcCu6KCQWnVOpbAXAwGCvY%2BDd6Zz9%2FTthXBFuE1i4o%2BO&X-Amz-Signature=6efeb16dac90d913ec6f4cfd0b9d1c8950ba002687bf7fa3d173b9533cbfa0f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
