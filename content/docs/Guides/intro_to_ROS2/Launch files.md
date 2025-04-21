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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q347XIP6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDMcAgLVaBMIbY%2Fs9rO1oV8POgsjyJigOq1AbUo8exRfQIgPk%2B6gT4t4Tf6ZhgN%2BSe6dHlXIpZ9GxV2YYAcRLFRycYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYo%2FVafIH8cvrI2pyrcAyzWgFXcmAN9sWHTDKmwfESC%2F90U8IBK9eRs8y%2FUVP9r86q5MS7o5hG3KmHWgsg8JP7aUwWfvTE%2F%2BvnmxTMW04mC9MeS2j2xa6Yl0wTRsJAES7mDAkqt0aNPD7UXb1emWPQAWG2Lrmcdi%2Fudmw2b9pkbbA3xaVJh4dOcfvnmc8VuMrpLyLwlOJXeKy7l5X7Ddhf27fjqcRyByHksQqRT1Y0HCblA3dI4TUjL%2BXq8WH8XT1LDG8Kuzc5ld9y2M3FtQvwvXBTSr6wToVEB3xVy3oDlrectfmecWZ18jKxhf71%2FwUQL0mWkDUt0e0n0RsjWo9VIoPMgKFvHq13ml3olMmcwB%2F2FeaDCQSyxU2vO69eT6RJKKPXblQImul0q5nOMAU%2Bw7VCG%2FFI0OWnWIFgG2F40%2FAOydkX11p5aXseKX2yjWe1ctvPOUCDY%2Foma%2FLP28aU%2BN1sxBgWXCnwU1iofVcrvJzWa%2BLi1tL4lsuPKuDUaMeDoE5vCflsoyH%2BAmQ8Ph1vt8TlwL3E75m6TST%2FMvh5auIykPNFj2s%2BD3%2B9IvJbTdHPncMabb7nj5UsHm6kfRlqY7IkwJSzff3fw9Blqx1kevH%2BNnIrUEz0asQiKfmyU1jxUv2iJvrgP0IV8MOSGmcAGOqUBtT9JTkFCv98%2BemLy%2FbF6QqteseLEJIhJBsOjcX8ZA%2B6udh9MQK9UAz3p0J9sOuaC5LOWXbw%2FjlUDoR9mWWiEtxlSakUUSKCvPEaOYc71QuF2KeU43DhO09Z%2FKi%2FS76B4U2DEMMqwZNOJpP91VkcTRK7HfZj07FVdllOW89EvqjdIdEZLz4hXkDnYUq3oZ%2FI5DIrGs8IXT%2BrjBAA7yXJ%2BsCy9daG%2B&X-Amz-Signature=31a33c5c761459e847f749288ffa7a98b79ce4c8b7c3abca24a494c2d01d76a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q347XIP6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDMcAgLVaBMIbY%2Fs9rO1oV8POgsjyJigOq1AbUo8exRfQIgPk%2B6gT4t4Tf6ZhgN%2BSe6dHlXIpZ9GxV2YYAcRLFRycYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYo%2FVafIH8cvrI2pyrcAyzWgFXcmAN9sWHTDKmwfESC%2F90U8IBK9eRs8y%2FUVP9r86q5MS7o5hG3KmHWgsg8JP7aUwWfvTE%2F%2BvnmxTMW04mC9MeS2j2xa6Yl0wTRsJAES7mDAkqt0aNPD7UXb1emWPQAWG2Lrmcdi%2Fudmw2b9pkbbA3xaVJh4dOcfvnmc8VuMrpLyLwlOJXeKy7l5X7Ddhf27fjqcRyByHksQqRT1Y0HCblA3dI4TUjL%2BXq8WH8XT1LDG8Kuzc5ld9y2M3FtQvwvXBTSr6wToVEB3xVy3oDlrectfmecWZ18jKxhf71%2FwUQL0mWkDUt0e0n0RsjWo9VIoPMgKFvHq13ml3olMmcwB%2F2FeaDCQSyxU2vO69eT6RJKKPXblQImul0q5nOMAU%2Bw7VCG%2FFI0OWnWIFgG2F40%2FAOydkX11p5aXseKX2yjWe1ctvPOUCDY%2Foma%2FLP28aU%2BN1sxBgWXCnwU1iofVcrvJzWa%2BLi1tL4lsuPKuDUaMeDoE5vCflsoyH%2BAmQ8Ph1vt8TlwL3E75m6TST%2FMvh5auIykPNFj2s%2BD3%2B9IvJbTdHPncMabb7nj5UsHm6kfRlqY7IkwJSzff3fw9Blqx1kevH%2BNnIrUEz0asQiKfmyU1jxUv2iJvrgP0IV8MOSGmcAGOqUBtT9JTkFCv98%2BemLy%2FbF6QqteseLEJIhJBsOjcX8ZA%2B6udh9MQK9UAz3p0J9sOuaC5LOWXbw%2FjlUDoR9mWWiEtxlSakUUSKCvPEaOYc71QuF2KeU43DhO09Z%2FKi%2FS76B4U2DEMMqwZNOJpP91VkcTRK7HfZj07FVdllOW89EvqjdIdEZLz4hXkDnYUq3oZ%2FI5DIrGs8IXT%2BrjBAA7yXJ%2BsCy9daG%2B&X-Amz-Signature=dc680dc97e05dbf05b3c2785198a8a69035e9892e3eed648d163ecc20f2ae362&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q347XIP6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDMcAgLVaBMIbY%2Fs9rO1oV8POgsjyJigOq1AbUo8exRfQIgPk%2B6gT4t4Tf6ZhgN%2BSe6dHlXIpZ9GxV2YYAcRLFRycYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYo%2FVafIH8cvrI2pyrcAyzWgFXcmAN9sWHTDKmwfESC%2F90U8IBK9eRs8y%2FUVP9r86q5MS7o5hG3KmHWgsg8JP7aUwWfvTE%2F%2BvnmxTMW04mC9MeS2j2xa6Yl0wTRsJAES7mDAkqt0aNPD7UXb1emWPQAWG2Lrmcdi%2Fudmw2b9pkbbA3xaVJh4dOcfvnmc8VuMrpLyLwlOJXeKy7l5X7Ddhf27fjqcRyByHksQqRT1Y0HCblA3dI4TUjL%2BXq8WH8XT1LDG8Kuzc5ld9y2M3FtQvwvXBTSr6wToVEB3xVy3oDlrectfmecWZ18jKxhf71%2FwUQL0mWkDUt0e0n0RsjWo9VIoPMgKFvHq13ml3olMmcwB%2F2FeaDCQSyxU2vO69eT6RJKKPXblQImul0q5nOMAU%2Bw7VCG%2FFI0OWnWIFgG2F40%2FAOydkX11p5aXseKX2yjWe1ctvPOUCDY%2Foma%2FLP28aU%2BN1sxBgWXCnwU1iofVcrvJzWa%2BLi1tL4lsuPKuDUaMeDoE5vCflsoyH%2BAmQ8Ph1vt8TlwL3E75m6TST%2FMvh5auIykPNFj2s%2BD3%2B9IvJbTdHPncMabb7nj5UsHm6kfRlqY7IkwJSzff3fw9Blqx1kevH%2BNnIrUEz0asQiKfmyU1jxUv2iJvrgP0IV8MOSGmcAGOqUBtT9JTkFCv98%2BemLy%2FbF6QqteseLEJIhJBsOjcX8ZA%2B6udh9MQK9UAz3p0J9sOuaC5LOWXbw%2FjlUDoR9mWWiEtxlSakUUSKCvPEaOYc71QuF2KeU43DhO09Z%2FKi%2FS76B4U2DEMMqwZNOJpP91VkcTRK7HfZj07FVdllOW89EvqjdIdEZLz4hXkDnYUq3oZ%2FI5DIrGs8IXT%2BrjBAA7yXJ%2BsCy9daG%2B&X-Amz-Signature=cb7a84ded2dabfdb53b79ef9f02f3f89f9c4e813d555bfb541c005d7790a3ed9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
