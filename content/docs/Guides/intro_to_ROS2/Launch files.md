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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SISDJI2D%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDojjw%2FN7PVysxoaCRllAWbLq6741gOCizWDAjyxeUHzAiEApRb8zzJ2yUj1Vcnuw4E%2FPc7r10PKp2uG3RyFCwPlBKsqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEN36fJo%2FmFVxcJGwCrcA1jKF9z0iSF0ooUe2wnCR3H3I8MCBzznxGrwNjMrr%2BLcjZu%2Fayj2yCUO1ZvYgnqx2e3UTiHTqqW%2BSkYKs9BaW7WDue%2BmBUqSVuOHKodNwu1uAX8TTcR5kzUy8JH8%2B%2FbDL4hjFwfgeQQPpYf%2FmwPbweN34R%2FBPLpTzuaJnSF47zWbWVstBU7qVh%2FnP3oEfjr8k0M3OkYKKPNZsPBgcJb5K6uRPu7WQnCobaBo5deYC0nlS4K5GJ3PN1m5k0pqj%2BOyEEnS38%2FgA2U1LgemY834UWyle1nIiQtCAcXBO2NKu4eqh01sD5f1AYFrgHV2yoNjzXihrIHpnEcRJwAbMIqSlSLItEw2dCQTXS0HIMRciUuDKmwULd21OlT1q0vUhXues9iteXHXDb4Gk2ARHtasdeHbx%2FRRfzSBhS1MDE2IV%2BYXFt8hjQfEi1Him688TyClNcOsva3utSi6aLdtAB97SDL6zsH42YHFSylrr1tODzBN%2Bu7UOH1Kzpl3CbMJqVD%2B7Ec1dU9NeP1hCxIaSAgP10n7bbEIosFvLBqbsNsL5mx4Gq9OLjnIBoLV1QfRfJ2xbNskxkZ9RQ2Aqo%2BKG1D4cUquqPJKsV7SpyRURL9dYC1%2BxlarkQPQ0NJpefe8MOXI57wGOqUBWYlp7zWoJV%2B7A8vuG3GGYEiWapPmAUTxDhUmP7Zp4q2Wwm7skU3bBL5P%2BEKfL4nHuXG%2FssVLqMRCMNS7PD7h9P6VMDXckkoRPKgUocJ4lVkJaSXc45WUQQ1q%2BsJ5nHNgv3%2BAvHVMarzZqdAdUVxBey5Yzpye8hojYzrjhBr3BeuPPajXQ1DNx5DNtkTwJzeiyINaPea%2FF9Nq2W3hccVdtOf2%2FLCj&X-Amz-Signature=51d4bec7c40aa328ac097ce3bdf5aa0d6993a7d8c885550bcb96d05b78b0075a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SISDJI2D%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDojjw%2FN7PVysxoaCRllAWbLq6741gOCizWDAjyxeUHzAiEApRb8zzJ2yUj1Vcnuw4E%2FPc7r10PKp2uG3RyFCwPlBKsqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEN36fJo%2FmFVxcJGwCrcA1jKF9z0iSF0ooUe2wnCR3H3I8MCBzznxGrwNjMrr%2BLcjZu%2Fayj2yCUO1ZvYgnqx2e3UTiHTqqW%2BSkYKs9BaW7WDue%2BmBUqSVuOHKodNwu1uAX8TTcR5kzUy8JH8%2B%2FbDL4hjFwfgeQQPpYf%2FmwPbweN34R%2FBPLpTzuaJnSF47zWbWVstBU7qVh%2FnP3oEfjr8k0M3OkYKKPNZsPBgcJb5K6uRPu7WQnCobaBo5deYC0nlS4K5GJ3PN1m5k0pqj%2BOyEEnS38%2FgA2U1LgemY834UWyle1nIiQtCAcXBO2NKu4eqh01sD5f1AYFrgHV2yoNjzXihrIHpnEcRJwAbMIqSlSLItEw2dCQTXS0HIMRciUuDKmwULd21OlT1q0vUhXues9iteXHXDb4Gk2ARHtasdeHbx%2FRRfzSBhS1MDE2IV%2BYXFt8hjQfEi1Him688TyClNcOsva3utSi6aLdtAB97SDL6zsH42YHFSylrr1tODzBN%2Bu7UOH1Kzpl3CbMJqVD%2B7Ec1dU9NeP1hCxIaSAgP10n7bbEIosFvLBqbsNsL5mx4Gq9OLjnIBoLV1QfRfJ2xbNskxkZ9RQ2Aqo%2BKG1D4cUquqPJKsV7SpyRURL9dYC1%2BxlarkQPQ0NJpefe8MOXI57wGOqUBWYlp7zWoJV%2B7A8vuG3GGYEiWapPmAUTxDhUmP7Zp4q2Wwm7skU3bBL5P%2BEKfL4nHuXG%2FssVLqMRCMNS7PD7h9P6VMDXckkoRPKgUocJ4lVkJaSXc45WUQQ1q%2BsJ5nHNgv3%2BAvHVMarzZqdAdUVxBey5Yzpye8hojYzrjhBr3BeuPPajXQ1DNx5DNtkTwJzeiyINaPea%2FF9Nq2W3hccVdtOf2%2FLCj&X-Amz-Signature=6058abab1b497765b69c2b31afda69d57256cc6cac6874d048a22897237953a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SISDJI2D%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDojjw%2FN7PVysxoaCRllAWbLq6741gOCizWDAjyxeUHzAiEApRb8zzJ2yUj1Vcnuw4E%2FPc7r10PKp2uG3RyFCwPlBKsqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEN36fJo%2FmFVxcJGwCrcA1jKF9z0iSF0ooUe2wnCR3H3I8MCBzznxGrwNjMrr%2BLcjZu%2Fayj2yCUO1ZvYgnqx2e3UTiHTqqW%2BSkYKs9BaW7WDue%2BmBUqSVuOHKodNwu1uAX8TTcR5kzUy8JH8%2B%2FbDL4hjFwfgeQQPpYf%2FmwPbweN34R%2FBPLpTzuaJnSF47zWbWVstBU7qVh%2FnP3oEfjr8k0M3OkYKKPNZsPBgcJb5K6uRPu7WQnCobaBo5deYC0nlS4K5GJ3PN1m5k0pqj%2BOyEEnS38%2FgA2U1LgemY834UWyle1nIiQtCAcXBO2NKu4eqh01sD5f1AYFrgHV2yoNjzXihrIHpnEcRJwAbMIqSlSLItEw2dCQTXS0HIMRciUuDKmwULd21OlT1q0vUhXues9iteXHXDb4Gk2ARHtasdeHbx%2FRRfzSBhS1MDE2IV%2BYXFt8hjQfEi1Him688TyClNcOsva3utSi6aLdtAB97SDL6zsH42YHFSylrr1tODzBN%2Bu7UOH1Kzpl3CbMJqVD%2B7Ec1dU9NeP1hCxIaSAgP10n7bbEIosFvLBqbsNsL5mx4Gq9OLjnIBoLV1QfRfJ2xbNskxkZ9RQ2Aqo%2BKG1D4cUquqPJKsV7SpyRURL9dYC1%2BxlarkQPQ0NJpefe8MOXI57wGOqUBWYlp7zWoJV%2B7A8vuG3GGYEiWapPmAUTxDhUmP7Zp4q2Wwm7skU3bBL5P%2BEKfL4nHuXG%2FssVLqMRCMNS7PD7h9P6VMDXckkoRPKgUocJ4lVkJaSXc45WUQQ1q%2BsJ5nHNgv3%2BAvHVMarzZqdAdUVxBey5Yzpye8hojYzrjhBr3BeuPPajXQ1DNx5DNtkTwJzeiyINaPea%2FF9Nq2W3hccVdtOf2%2FLCj&X-Amz-Signature=3931a91df9cb79a807f55b0a9e57f4b2ab93956056d8b411e5232433a143066c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
