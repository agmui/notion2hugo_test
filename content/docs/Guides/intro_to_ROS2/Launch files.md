---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD3H2QIL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSzQ0KcbAOcpiRcVyWxYV26RvI2x%2FI8%2B8uosC%2FEH%2BimgIgchxFFtKQEaSzzF6vR%2FB4QjX%2FdcekP0in9cf2Vbw6p8MqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHn1esLpRGKslSUe8ircA0gA8FKXHHeHQeAWdazs0vp%2FeWbyF5Ux4fwIa79D1l6myeYYXAXekrVwbCQ9grmYmUMIGKSlYQgEmmS1TRnxXCwXPCcBWmhbi1sWJRMUgWzpSJe1TVN9%2F0PmWItS5JvmHQ3Wkezn7xBU4SrUVghJVY3ZUC1klbE6d66E45P%2Fft1Bg%2FG6ll61T%2B8YlagUtt5iBMsra4PLtoshGjtTMHTXJWqDz0WzUte0AajBBVKxKOFzaLAnJma1oboSLvOqglQJsiV60G392mCcPE6P1DbaOIIzlzLPPG9N5rfWMLw5YISq3kVUVRnrzmP6K4YTLXTnkbROyUJobY%2FsnWcdkrS7RsNLK5hCo6EocIwRSCY1741rGc2Jp4HSf7zSX0j24OedamvfG2HVkTZC7e7OQl9dpS%2BL8VcTVw%2Bmj%2BVCyd7vIXMPU1Nx65fQiJgqHiLK5q4vrasOTAf4vlAnqKUOkcnlr64cY9%2FpbmHNgoASpoU%2B9z7nfKLBEAblHlX%2FFR6HXoqw8UWYpEePHV4rfZB%2FOB%2FeOtB8PGJXREfoavZgFfFKxYfJhiVpxh8mLJzJgwVy8Hx9rXZero5nPjl7T8rCA0%2FBZ%2B8HxY8LpRXlKglKbBSFct2hmqCZL0kRYdStr4b3ML2QrsQGOqUB5UakVnu9831Nqa9nl5imJH0zlIGSoqVroY3QdM4Q03RM45QxWjODK7eOOy%2BNpJmUeppLKzvfhprLyjhMQNRjI2GQsY%2Fl5TC3N%2Fxb1LXD10t0M%2FTEFqPVDeiic5uQLOzJJXI4t8fw%2F%2FAVIZlzkT9dPiTPRgTJXjYU3cJxSoG0WWhpNNPudkMrj92wgy65z%2F60vQ%2Bs0oMHg4UXvW0Lg3d6rsCzN%2Fdl&X-Amz-Signature=b490c5e4c8f6cb8ba06010043ba3b219dea1cceb66438be7fc76de02421f9172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD3H2QIL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSzQ0KcbAOcpiRcVyWxYV26RvI2x%2FI8%2B8uosC%2FEH%2BimgIgchxFFtKQEaSzzF6vR%2FB4QjX%2FdcekP0in9cf2Vbw6p8MqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHn1esLpRGKslSUe8ircA0gA8FKXHHeHQeAWdazs0vp%2FeWbyF5Ux4fwIa79D1l6myeYYXAXekrVwbCQ9grmYmUMIGKSlYQgEmmS1TRnxXCwXPCcBWmhbi1sWJRMUgWzpSJe1TVN9%2F0PmWItS5JvmHQ3Wkezn7xBU4SrUVghJVY3ZUC1klbE6d66E45P%2Fft1Bg%2FG6ll61T%2B8YlagUtt5iBMsra4PLtoshGjtTMHTXJWqDz0WzUte0AajBBVKxKOFzaLAnJma1oboSLvOqglQJsiV60G392mCcPE6P1DbaOIIzlzLPPG9N5rfWMLw5YISq3kVUVRnrzmP6K4YTLXTnkbROyUJobY%2FsnWcdkrS7RsNLK5hCo6EocIwRSCY1741rGc2Jp4HSf7zSX0j24OedamvfG2HVkTZC7e7OQl9dpS%2BL8VcTVw%2Bmj%2BVCyd7vIXMPU1Nx65fQiJgqHiLK5q4vrasOTAf4vlAnqKUOkcnlr64cY9%2FpbmHNgoASpoU%2B9z7nfKLBEAblHlX%2FFR6HXoqw8UWYpEePHV4rfZB%2FOB%2FeOtB8PGJXREfoavZgFfFKxYfJhiVpxh8mLJzJgwVy8Hx9rXZero5nPjl7T8rCA0%2FBZ%2B8HxY8LpRXlKglKbBSFct2hmqCZL0kRYdStr4b3ML2QrsQGOqUB5UakVnu9831Nqa9nl5imJH0zlIGSoqVroY3QdM4Q03RM45QxWjODK7eOOy%2BNpJmUeppLKzvfhprLyjhMQNRjI2GQsY%2Fl5TC3N%2Fxb1LXD10t0M%2FTEFqPVDeiic5uQLOzJJXI4t8fw%2F%2FAVIZlzkT9dPiTPRgTJXjYU3cJxSoG0WWhpNNPudkMrj92wgy65z%2F60vQ%2Bs0oMHg4UXvW0Lg3d6rsCzN%2Fdl&X-Amz-Signature=9bb18bf11d090b86a1dc6744070bfd2c0b90afc478a5fd1667b2e5afadac6335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD3H2QIL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSzQ0KcbAOcpiRcVyWxYV26RvI2x%2FI8%2B8uosC%2FEH%2BimgIgchxFFtKQEaSzzF6vR%2FB4QjX%2FdcekP0in9cf2Vbw6p8MqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHn1esLpRGKslSUe8ircA0gA8FKXHHeHQeAWdazs0vp%2FeWbyF5Ux4fwIa79D1l6myeYYXAXekrVwbCQ9grmYmUMIGKSlYQgEmmS1TRnxXCwXPCcBWmhbi1sWJRMUgWzpSJe1TVN9%2F0PmWItS5JvmHQ3Wkezn7xBU4SrUVghJVY3ZUC1klbE6d66E45P%2Fft1Bg%2FG6ll61T%2B8YlagUtt5iBMsra4PLtoshGjtTMHTXJWqDz0WzUte0AajBBVKxKOFzaLAnJma1oboSLvOqglQJsiV60G392mCcPE6P1DbaOIIzlzLPPG9N5rfWMLw5YISq3kVUVRnrzmP6K4YTLXTnkbROyUJobY%2FsnWcdkrS7RsNLK5hCo6EocIwRSCY1741rGc2Jp4HSf7zSX0j24OedamvfG2HVkTZC7e7OQl9dpS%2BL8VcTVw%2Bmj%2BVCyd7vIXMPU1Nx65fQiJgqHiLK5q4vrasOTAf4vlAnqKUOkcnlr64cY9%2FpbmHNgoASpoU%2B9z7nfKLBEAblHlX%2FFR6HXoqw8UWYpEePHV4rfZB%2FOB%2FeOtB8PGJXREfoavZgFfFKxYfJhiVpxh8mLJzJgwVy8Hx9rXZero5nPjl7T8rCA0%2FBZ%2B8HxY8LpRXlKglKbBSFct2hmqCZL0kRYdStr4b3ML2QrsQGOqUB5UakVnu9831Nqa9nl5imJH0zlIGSoqVroY3QdM4Q03RM45QxWjODK7eOOy%2BNpJmUeppLKzvfhprLyjhMQNRjI2GQsY%2Fl5TC3N%2Fxb1LXD10t0M%2FTEFqPVDeiic5uQLOzJJXI4t8fw%2F%2FAVIZlzkT9dPiTPRgTJXjYU3cJxSoG0WWhpNNPudkMrj92wgy65z%2F60vQ%2Bs0oMHg4UXvW0Lg3d6rsCzN%2Fdl&X-Amz-Signature=ed03146077dfded21cdc4fc873033827a822c518bc32458ac049a058d60a53d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
