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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3DPPTYV%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDO20dccgV1hXLxH9iUef0vvI9DsX0766nH96auAg3dgQIgI1vbD87Wpb5zhfwhOq6EK0pHef4VaRJsosw1hxTZS5gqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOZJNagm3RwNfWMFyrcA8elwZWNUn7DbTAH9J2XWvHMqB4bEUXeZWfCfUiBvQbwv1rKPukdZJXcpb88%2FXJzaSHo1Y03%2B4T3U3WEYFF4lYmiKabHnLITOBRkMIOGKSGaEgq22nYDXzqqLg0VdZPMPo6n9v%2B2ZgaTkznz5BQpbzwhoi9hgr55K4z%2BRYRtBe5Bj0jJa8r%2BYGSQJRTmr7slajCw8bLHJzaE6umcwqiiNpclLJAvj%2Bb1FtlQV6AgqQZkCfjF5G1oSOoN3o1NpEZMigIKfciBsQ3FQ%2B92Mpk1QgaZzU2i0NJc%2FOzMYKDhPurf0UwQ26c2bVJ84XLhV2VzY%2FvsU777cU6Rw1wk0jZi3W0Bdak8Xx59JbNOsvDdNwO2ZXvGL4Bh6Jt%2FsY4ThtFVX2p3BwRB99so20loOJ6%2B6Bsbwql%2BLsqkFcAXqVfuzE4H3dPt%2FY%2FuO6N4TEgAUXO0eo8Etflop5KDWhhPRel2e8YTC9EVx5FBKKcdexLUKMFvXPmRg2XNIKLWHhIcMOjoGmctkhJqWw%2BzGMmV638JEKC2mRVxWC9SmDsTpz%2BkRWbix%2BlCKagd18QyDUQtBTkrJnjvM3TN3WU9WE3LOnyhzJsHTgPXaGYExlVqBEYDsaovP6hL3mRCKSyXYFTJMKb40b0GOqUBJeNuv0FbABZZRx3QzrBS%2FFvaJRLo0f8mxG83gHJ%2Bh7KggQUlLgJaVpUV3OHxOArt9i6nagpcIUYwwWwcBUZECjBs5Gm1kyKHrfOtIAXn9Lrn1WV0krVtxqyrnmaS2LBkoYGnBlnZyOOy%2BLIJYiqOKlVn3s7drYX1%2FI5MEUbvQMU4Mzz%2F9CtE7Y9Q%2BEzTJLEeOH5IlX2i%2BdfqjtFhp5p2hQhcp8pp&X-Amz-Signature=85b582d6c599c920c304741db944a0397e97962605c203c5a38f4c6eb8454caa&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3DPPTYV%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDO20dccgV1hXLxH9iUef0vvI9DsX0766nH96auAg3dgQIgI1vbD87Wpb5zhfwhOq6EK0pHef4VaRJsosw1hxTZS5gqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOZJNagm3RwNfWMFyrcA8elwZWNUn7DbTAH9J2XWvHMqB4bEUXeZWfCfUiBvQbwv1rKPukdZJXcpb88%2FXJzaSHo1Y03%2B4T3U3WEYFF4lYmiKabHnLITOBRkMIOGKSGaEgq22nYDXzqqLg0VdZPMPo6n9v%2B2ZgaTkznz5BQpbzwhoi9hgr55K4z%2BRYRtBe5Bj0jJa8r%2BYGSQJRTmr7slajCw8bLHJzaE6umcwqiiNpclLJAvj%2Bb1FtlQV6AgqQZkCfjF5G1oSOoN3o1NpEZMigIKfciBsQ3FQ%2B92Mpk1QgaZzU2i0NJc%2FOzMYKDhPurf0UwQ26c2bVJ84XLhV2VzY%2FvsU777cU6Rw1wk0jZi3W0Bdak8Xx59JbNOsvDdNwO2ZXvGL4Bh6Jt%2FsY4ThtFVX2p3BwRB99so20loOJ6%2B6Bsbwql%2BLsqkFcAXqVfuzE4H3dPt%2FY%2FuO6N4TEgAUXO0eo8Etflop5KDWhhPRel2e8YTC9EVx5FBKKcdexLUKMFvXPmRg2XNIKLWHhIcMOjoGmctkhJqWw%2BzGMmV638JEKC2mRVxWC9SmDsTpz%2BkRWbix%2BlCKagd18QyDUQtBTkrJnjvM3TN3WU9WE3LOnyhzJsHTgPXaGYExlVqBEYDsaovP6hL3mRCKSyXYFTJMKb40b0GOqUBJeNuv0FbABZZRx3QzrBS%2FFvaJRLo0f8mxG83gHJ%2Bh7KggQUlLgJaVpUV3OHxOArt9i6nagpcIUYwwWwcBUZECjBs5Gm1kyKHrfOtIAXn9Lrn1WV0krVtxqyrnmaS2LBkoYGnBlnZyOOy%2BLIJYiqOKlVn3s7drYX1%2FI5MEUbvQMU4Mzz%2F9CtE7Y9Q%2BEzTJLEeOH5IlX2i%2BdfqjtFhp5p2hQhcp8pp&X-Amz-Signature=bb7ba362e00a6ff88e5a702c4db883134a80cbc19544c0c7469a25daf3084525&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3DPPTYV%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDO20dccgV1hXLxH9iUef0vvI9DsX0766nH96auAg3dgQIgI1vbD87Wpb5zhfwhOq6EK0pHef4VaRJsosw1hxTZS5gqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOZJNagm3RwNfWMFyrcA8elwZWNUn7DbTAH9J2XWvHMqB4bEUXeZWfCfUiBvQbwv1rKPukdZJXcpb88%2FXJzaSHo1Y03%2B4T3U3WEYFF4lYmiKabHnLITOBRkMIOGKSGaEgq22nYDXzqqLg0VdZPMPo6n9v%2B2ZgaTkznz5BQpbzwhoi9hgr55K4z%2BRYRtBe5Bj0jJa8r%2BYGSQJRTmr7slajCw8bLHJzaE6umcwqiiNpclLJAvj%2Bb1FtlQV6AgqQZkCfjF5G1oSOoN3o1NpEZMigIKfciBsQ3FQ%2B92Mpk1QgaZzU2i0NJc%2FOzMYKDhPurf0UwQ26c2bVJ84XLhV2VzY%2FvsU777cU6Rw1wk0jZi3W0Bdak8Xx59JbNOsvDdNwO2ZXvGL4Bh6Jt%2FsY4ThtFVX2p3BwRB99so20loOJ6%2B6Bsbwql%2BLsqkFcAXqVfuzE4H3dPt%2FY%2FuO6N4TEgAUXO0eo8Etflop5KDWhhPRel2e8YTC9EVx5FBKKcdexLUKMFvXPmRg2XNIKLWHhIcMOjoGmctkhJqWw%2BzGMmV638JEKC2mRVxWC9SmDsTpz%2BkRWbix%2BlCKagd18QyDUQtBTkrJnjvM3TN3WU9WE3LOnyhzJsHTgPXaGYExlVqBEYDsaovP6hL3mRCKSyXYFTJMKb40b0GOqUBJeNuv0FbABZZRx3QzrBS%2FFvaJRLo0f8mxG83gHJ%2Bh7KggQUlLgJaVpUV3OHxOArt9i6nagpcIUYwwWwcBUZECjBs5Gm1kyKHrfOtIAXn9Lrn1WV0krVtxqyrnmaS2LBkoYGnBlnZyOOy%2BLIJYiqOKlVn3s7drYX1%2FI5MEUbvQMU4Mzz%2F9CtE7Y9Q%2BEzTJLEeOH5IlX2i%2BdfqjtFhp5p2hQhcp8pp&X-Amz-Signature=bca5d26fd7940b167655f258e476ede7f28dc3cd050b71563491ed0714baa130&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
