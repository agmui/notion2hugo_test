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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZUMZ5F%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgVb1dwryFxml1ZTFmXx%2FE1abjprYde68Kk%2BKEeMvGNgIhANwCjtY9g%2BJsQ3Aoka2dRVznoO4d6U5eS0L%2FqVKRQpx2KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdbC0h%2BxndZ2ucwfYq3AMtBOPLSu7E8WNsj9FopNapR94%2FvWDCQbXlHrnhEN%2FTec7kSoeJQU1%2FHqFSeL5hwJ0slAAV9HMwFeNvVmK0Wnaqvl9Y%2BdWhpwIT0uBfspDIaArwftMwe1MDvnufdv1%2F8WAbsu2U8cRwMD1X%2FpasVfgCzsmiymt%2BnPu4jmyeYcqXb7F3DA9XtFXomyVWzN5llVtYK6N5Ff8WYPXMaOk70KDT%2FZNuzYAj9CcQue3sE0uAjneos6xKQx8n7lDEJLwBCB1pfqE9b1h%2FqN1gbNdS7w9XE3kv5MOPtkdrtD8oAGyUG%2FluExxlnxLoi32wdJnus875g4fvDmkLKRYk7HvGZ7jMQSFAxRb0lwg%2FQoC%2BNd6HlyobgCiNu3XT50HL8BtRVqRxRCVgtqbOpIoUv2zgWMkTsOD0i58IbjS7OtrcspKZohBLxbIYcrxOddIgI4hUEcgY0q0MDxIXMoPcWAMczkT6etnQaAMzzM8bTH3MpZaXM6om%2BEtNkEfoZHPzplhuQLmMH5uxgZMrLFRsHwNlsKlSgPd3ib2CUjKUMf8sbbsn1rFUVLIYFSU%2F0VASFBa1BzMmxcMU3hFxL%2B5ERmkhtQddXIQFsq%2B%2F9hZR1HpoLCu%2F3TGBWqSVZeNzQyBY%2BzCOvai9BjqkASzjGbcJPMeLws%2Btjj5erDt5GdIdOgqRZcYOnO%2ByaWUiHG3726EnHKa76BfqCB9netHS9IPVPwF%2Bq97ej%2F4ChlVI6wzEiD%2BgzSwTfkPtDYAqMa57A4dDBvAM2nHPOlVtJpJdR3aO9ygZHwfa14lGjffb2QpGSnUFZjY1x2hGmL8LufCAiOSmvIkuZXBF2fR7bDuWV2y75BixyPo0Q39AFPjs44XC&X-Amz-Signature=76b8f89b4cd6f10c1ba526ce9ac650b8875f8f0b0f45e0f8f92d49d304157f68&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZUMZ5F%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgVb1dwryFxml1ZTFmXx%2FE1abjprYde68Kk%2BKEeMvGNgIhANwCjtY9g%2BJsQ3Aoka2dRVznoO4d6U5eS0L%2FqVKRQpx2KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdbC0h%2BxndZ2ucwfYq3AMtBOPLSu7E8WNsj9FopNapR94%2FvWDCQbXlHrnhEN%2FTec7kSoeJQU1%2FHqFSeL5hwJ0slAAV9HMwFeNvVmK0Wnaqvl9Y%2BdWhpwIT0uBfspDIaArwftMwe1MDvnufdv1%2F8WAbsu2U8cRwMD1X%2FpasVfgCzsmiymt%2BnPu4jmyeYcqXb7F3DA9XtFXomyVWzN5llVtYK6N5Ff8WYPXMaOk70KDT%2FZNuzYAj9CcQue3sE0uAjneos6xKQx8n7lDEJLwBCB1pfqE9b1h%2FqN1gbNdS7w9XE3kv5MOPtkdrtD8oAGyUG%2FluExxlnxLoi32wdJnus875g4fvDmkLKRYk7HvGZ7jMQSFAxRb0lwg%2FQoC%2BNd6HlyobgCiNu3XT50HL8BtRVqRxRCVgtqbOpIoUv2zgWMkTsOD0i58IbjS7OtrcspKZohBLxbIYcrxOddIgI4hUEcgY0q0MDxIXMoPcWAMczkT6etnQaAMzzM8bTH3MpZaXM6om%2BEtNkEfoZHPzplhuQLmMH5uxgZMrLFRsHwNlsKlSgPd3ib2CUjKUMf8sbbsn1rFUVLIYFSU%2F0VASFBa1BzMmxcMU3hFxL%2B5ERmkhtQddXIQFsq%2B%2F9hZR1HpoLCu%2F3TGBWqSVZeNzQyBY%2BzCOvai9BjqkASzjGbcJPMeLws%2Btjj5erDt5GdIdOgqRZcYOnO%2ByaWUiHG3726EnHKa76BfqCB9netHS9IPVPwF%2Bq97ej%2F4ChlVI6wzEiD%2BgzSwTfkPtDYAqMa57A4dDBvAM2nHPOlVtJpJdR3aO9ygZHwfa14lGjffb2QpGSnUFZjY1x2hGmL8LufCAiOSmvIkuZXBF2fR7bDuWV2y75BixyPo0Q39AFPjs44XC&X-Amz-Signature=f3e3e3692381d6a465f01dd13d3de0ed01cd03ae3edc5a240ab9047234d35d17&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZUMZ5F%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgVb1dwryFxml1ZTFmXx%2FE1abjprYde68Kk%2BKEeMvGNgIhANwCjtY9g%2BJsQ3Aoka2dRVznoO4d6U5eS0L%2FqVKRQpx2KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdbC0h%2BxndZ2ucwfYq3AMtBOPLSu7E8WNsj9FopNapR94%2FvWDCQbXlHrnhEN%2FTec7kSoeJQU1%2FHqFSeL5hwJ0slAAV9HMwFeNvVmK0Wnaqvl9Y%2BdWhpwIT0uBfspDIaArwftMwe1MDvnufdv1%2F8WAbsu2U8cRwMD1X%2FpasVfgCzsmiymt%2BnPu4jmyeYcqXb7F3DA9XtFXomyVWzN5llVtYK6N5Ff8WYPXMaOk70KDT%2FZNuzYAj9CcQue3sE0uAjneos6xKQx8n7lDEJLwBCB1pfqE9b1h%2FqN1gbNdS7w9XE3kv5MOPtkdrtD8oAGyUG%2FluExxlnxLoi32wdJnus875g4fvDmkLKRYk7HvGZ7jMQSFAxRb0lwg%2FQoC%2BNd6HlyobgCiNu3XT50HL8BtRVqRxRCVgtqbOpIoUv2zgWMkTsOD0i58IbjS7OtrcspKZohBLxbIYcrxOddIgI4hUEcgY0q0MDxIXMoPcWAMczkT6etnQaAMzzM8bTH3MpZaXM6om%2BEtNkEfoZHPzplhuQLmMH5uxgZMrLFRsHwNlsKlSgPd3ib2CUjKUMf8sbbsn1rFUVLIYFSU%2F0VASFBa1BzMmxcMU3hFxL%2B5ERmkhtQddXIQFsq%2B%2F9hZR1HpoLCu%2F3TGBWqSVZeNzQyBY%2BzCOvai9BjqkASzjGbcJPMeLws%2Btjj5erDt5GdIdOgqRZcYOnO%2ByaWUiHG3726EnHKa76BfqCB9netHS9IPVPwF%2Bq97ej%2F4ChlVI6wzEiD%2BgzSwTfkPtDYAqMa57A4dDBvAM2nHPOlVtJpJdR3aO9ygZHwfa14lGjffb2QpGSnUFZjY1x2hGmL8LufCAiOSmvIkuZXBF2fR7bDuWV2y75BixyPo0Q39AFPjs44XC&X-Amz-Signature=f2c46d4c128b0fe6d1444cb9b33f2ebe79139acb19db0eacd71a87a4e14434b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
