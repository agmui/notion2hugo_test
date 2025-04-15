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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUS53XDY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFC2ayh2CZ9bHxyK913BcxqUdyR5fA%2BCGLe1ceEF8z1gIgem0VYbESxBMwdlJ680Hqq5kAdEHrxWEikE%2B1ZhPO1WAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAWFkvaoOQG7hLfvlircA5LUJmI1Su0t%2FLUnHQ4De1bunhaKyYvmopYhE01siu8JQ%2FrYTCZdPcy5SjCW8mwpmpd4ENA5UW%2BHHZP%2BgggAO8Y2THcT9NJcDq8Ayc4sOViqStgdvc2wPTBlFfAMBL0Zd0%2FIIi69ylHe9sZlv8aOB72Y7D1BAP1MlMUDCW1vnudOTT4QSF3gpLDLyZY9bwLCyM%2BYQFFmLSIrmFybpEgS%2BGA80UuNfuqaQDPqo5%2BGm1yhlcWDym0Bi8inovEf4mBb5%2B935BSO%2FFJ8vpOfKaMSNTNsRpq43QROMxfm1%2FkEciycEnTn7N9MA0zQ8RbJh4OPRvVWSbBzl2d2cJL%2Br1GvctEKakqBdA70ZLp9pXBsKM%2FbWWiuws6e0Hj0jBmIr%2BBbdkyr4GXj0rSyhfjbjCpXERXS75%2FPZF%2FOHVy3Mjkrr%2FoeFAZTMimnISD57W%2BQYajdWoLxEnNN84C2GCQ8%2BTitRYl%2BOc%2B8e%2BKU%2BVArFOrL7SW2S%2BJYd4yj57EeSutOOAHmfwex5fnOTmqKOiyi4Rvp706OOTJCShpJM2rr%2FTTT9WTRtNlm0uqY7xFDUImBZU1lxKwLy%2FbIj6lK0Vp0GQyO%2F%2FEOm3gpaMqmojH%2FF8ZyO%2BwS2FDUefbqK4OWEQnJMOHW%2Br8GOqUBGZ4vpt%2FmrTXl9gVxfnzdkgY4cIvPAhnkNqM9%2BYXRwWXuWTZG9TLxmzsOaJHrPxKjcQioigDn2PKnjw3wzwiVfD1ET53%2Fd2eJPAE3Y8hZmOFss8Liv06tZvt25TmLk8DCkiGNSttFt17gGJQ1oPZe5EgD4kViT3hdxH%2BAavfqrzOFORMI8cBWF2Bwp56W10msaMbyMYZqfNUqXVt64L1J7xibh3fk&X-Amz-Signature=b910cda91968178fbb8ae4e8252cf006fe73f5cfb7719ad6ca8f6e6c31c9a73e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUS53XDY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFC2ayh2CZ9bHxyK913BcxqUdyR5fA%2BCGLe1ceEF8z1gIgem0VYbESxBMwdlJ680Hqq5kAdEHrxWEikE%2B1ZhPO1WAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAWFkvaoOQG7hLfvlircA5LUJmI1Su0t%2FLUnHQ4De1bunhaKyYvmopYhE01siu8JQ%2FrYTCZdPcy5SjCW8mwpmpd4ENA5UW%2BHHZP%2BgggAO8Y2THcT9NJcDq8Ayc4sOViqStgdvc2wPTBlFfAMBL0Zd0%2FIIi69ylHe9sZlv8aOB72Y7D1BAP1MlMUDCW1vnudOTT4QSF3gpLDLyZY9bwLCyM%2BYQFFmLSIrmFybpEgS%2BGA80UuNfuqaQDPqo5%2BGm1yhlcWDym0Bi8inovEf4mBb5%2B935BSO%2FFJ8vpOfKaMSNTNsRpq43QROMxfm1%2FkEciycEnTn7N9MA0zQ8RbJh4OPRvVWSbBzl2d2cJL%2Br1GvctEKakqBdA70ZLp9pXBsKM%2FbWWiuws6e0Hj0jBmIr%2BBbdkyr4GXj0rSyhfjbjCpXERXS75%2FPZF%2FOHVy3Mjkrr%2FoeFAZTMimnISD57W%2BQYajdWoLxEnNN84C2GCQ8%2BTitRYl%2BOc%2B8e%2BKU%2BVArFOrL7SW2S%2BJYd4yj57EeSutOOAHmfwex5fnOTmqKOiyi4Rvp706OOTJCShpJM2rr%2FTTT9WTRtNlm0uqY7xFDUImBZU1lxKwLy%2FbIj6lK0Vp0GQyO%2F%2FEOm3gpaMqmojH%2FF8ZyO%2BwS2FDUefbqK4OWEQnJMOHW%2Br8GOqUBGZ4vpt%2FmrTXl9gVxfnzdkgY4cIvPAhnkNqM9%2BYXRwWXuWTZG9TLxmzsOaJHrPxKjcQioigDn2PKnjw3wzwiVfD1ET53%2Fd2eJPAE3Y8hZmOFss8Liv06tZvt25TmLk8DCkiGNSttFt17gGJQ1oPZe5EgD4kViT3hdxH%2BAavfqrzOFORMI8cBWF2Bwp56W10msaMbyMYZqfNUqXVt64L1J7xibh3fk&X-Amz-Signature=2ed0eaf73055f2b2d947018416c272ad3d038a6242661d78a78655d9f10529a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUS53XDY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFC2ayh2CZ9bHxyK913BcxqUdyR5fA%2BCGLe1ceEF8z1gIgem0VYbESxBMwdlJ680Hqq5kAdEHrxWEikE%2B1ZhPO1WAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAWFkvaoOQG7hLfvlircA5LUJmI1Su0t%2FLUnHQ4De1bunhaKyYvmopYhE01siu8JQ%2FrYTCZdPcy5SjCW8mwpmpd4ENA5UW%2BHHZP%2BgggAO8Y2THcT9NJcDq8Ayc4sOViqStgdvc2wPTBlFfAMBL0Zd0%2FIIi69ylHe9sZlv8aOB72Y7D1BAP1MlMUDCW1vnudOTT4QSF3gpLDLyZY9bwLCyM%2BYQFFmLSIrmFybpEgS%2BGA80UuNfuqaQDPqo5%2BGm1yhlcWDym0Bi8inovEf4mBb5%2B935BSO%2FFJ8vpOfKaMSNTNsRpq43QROMxfm1%2FkEciycEnTn7N9MA0zQ8RbJh4OPRvVWSbBzl2d2cJL%2Br1GvctEKakqBdA70ZLp9pXBsKM%2FbWWiuws6e0Hj0jBmIr%2BBbdkyr4GXj0rSyhfjbjCpXERXS75%2FPZF%2FOHVy3Mjkrr%2FoeFAZTMimnISD57W%2BQYajdWoLxEnNN84C2GCQ8%2BTitRYl%2BOc%2B8e%2BKU%2BVArFOrL7SW2S%2BJYd4yj57EeSutOOAHmfwex5fnOTmqKOiyi4Rvp706OOTJCShpJM2rr%2FTTT9WTRtNlm0uqY7xFDUImBZU1lxKwLy%2FbIj6lK0Vp0GQyO%2F%2FEOm3gpaMqmojH%2FF8ZyO%2BwS2FDUefbqK4OWEQnJMOHW%2Br8GOqUBGZ4vpt%2FmrTXl9gVxfnzdkgY4cIvPAhnkNqM9%2BYXRwWXuWTZG9TLxmzsOaJHrPxKjcQioigDn2PKnjw3wzwiVfD1ET53%2Fd2eJPAE3Y8hZmOFss8Liv06tZvt25TmLk8DCkiGNSttFt17gGJQ1oPZe5EgD4kViT3hdxH%2BAavfqrzOFORMI8cBWF2Bwp56W10msaMbyMYZqfNUqXVt64L1J7xibh3fk&X-Amz-Signature=67c832ad4191c6b7848cfabc9135de724b610bf93e6654d1f8360172fd281780&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
