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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64IWPOT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCDEsSS0Y6nHn7CEOGXKrUIougkWE3Q4w7Em%2FLK6iU8ggIgar0X%2FkoDXFFgE%2Fzwa199evsTEyz%2FNEMjpHPcCekqxmgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMN2B8%2Fpe7TLet%2BbwyrcA3LXYWXjURMkp08fZoFQcEik8pA2YWMeqsEA8Sk1MJmyBKW%2BIkxOHFrlaWMzRUtyqTdlKj1VzHnS%2FXXYZ06iA1xZ9dwvRdq7M7Q21cabOwY6%2FEkj2ii7bjOSu7SYfCL3O6%2BuSbiAjiYCcmeChUOvPYJjh9paNgc9Nibu%2BcSsthTf1GKxGdhJE0gOSIsj%2BPLJSUdt%2FHr5v%2B6RGjdyzX%2BIKdIuVNtVtRTQiUv9nk0WfEkBj9gx%2FYfKseTwrN4PPqnap9Qt9xRisyx3xwzw8RuJFfIfGaTDCeRxEbnjtuCv%2FHvltWwcO%2BW6jeg9HDIzHOeHWnNzZlJW8DQBO1O8ct0Zh1yzy92mWztG0pS5bs4YINpIjeshn3%2FeoVpzU493Qppt6NvBGwdhMJzDdkLGMDQ%2FJXxDDof8uyBUgynLX5z6VPhMSytL88SgFM7IoDV55We1GDO%2F%2BcgGSi5Xng%2FYyQO9O1o2nb6zWLO2RVm8ruPx0byG47OcNKONOt1IRlQY6fl0bQD9VSJMCnJazzQuufKdU7NZ8G5fcBXuz5BYG7MctrKRpOtWueuRK5K7MsDzTNPMPxXStqGPKj9lPorxRJFsqPdsywDVQhACtuanxui7kpyf6L9NR0hA3lSPfhi0MNbswb0GOqUBy7plPcLUGGjl59Lh0yJwrNWPQ6FRXodi8B4GRLwRdn8afS%2Fcukxa5Vf1qiZwctS4V6ct4CqpCk7YIXnQwSrXkZwOMC1EaqPYyKfWtSDG6kr%2BMDryDQxpWvcVeOASp%2BbdiiR%2FynfDKBcOqMX4TzJrTYPlyfGQmZrsvBRuYJoCIj0QUvT5WzdtS78NXYBTF5SH5HnTVVjIYlfva2rshlVRyurEUNaI&X-Amz-Signature=ec92e3420e06f296655cf819d2f379ef6b7c5f71dacaa50d78e1e1dcc3dec8ba&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64IWPOT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCDEsSS0Y6nHn7CEOGXKrUIougkWE3Q4w7Em%2FLK6iU8ggIgar0X%2FkoDXFFgE%2Fzwa199evsTEyz%2FNEMjpHPcCekqxmgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMN2B8%2Fpe7TLet%2BbwyrcA3LXYWXjURMkp08fZoFQcEik8pA2YWMeqsEA8Sk1MJmyBKW%2BIkxOHFrlaWMzRUtyqTdlKj1VzHnS%2FXXYZ06iA1xZ9dwvRdq7M7Q21cabOwY6%2FEkj2ii7bjOSu7SYfCL3O6%2BuSbiAjiYCcmeChUOvPYJjh9paNgc9Nibu%2BcSsthTf1GKxGdhJE0gOSIsj%2BPLJSUdt%2FHr5v%2B6RGjdyzX%2BIKdIuVNtVtRTQiUv9nk0WfEkBj9gx%2FYfKseTwrN4PPqnap9Qt9xRisyx3xwzw8RuJFfIfGaTDCeRxEbnjtuCv%2FHvltWwcO%2BW6jeg9HDIzHOeHWnNzZlJW8DQBO1O8ct0Zh1yzy92mWztG0pS5bs4YINpIjeshn3%2FeoVpzU493Qppt6NvBGwdhMJzDdkLGMDQ%2FJXxDDof8uyBUgynLX5z6VPhMSytL88SgFM7IoDV55We1GDO%2F%2BcgGSi5Xng%2FYyQO9O1o2nb6zWLO2RVm8ruPx0byG47OcNKONOt1IRlQY6fl0bQD9VSJMCnJazzQuufKdU7NZ8G5fcBXuz5BYG7MctrKRpOtWueuRK5K7MsDzTNPMPxXStqGPKj9lPorxRJFsqPdsywDVQhACtuanxui7kpyf6L9NR0hA3lSPfhi0MNbswb0GOqUBy7plPcLUGGjl59Lh0yJwrNWPQ6FRXodi8B4GRLwRdn8afS%2Fcukxa5Vf1qiZwctS4V6ct4CqpCk7YIXnQwSrXkZwOMC1EaqPYyKfWtSDG6kr%2BMDryDQxpWvcVeOASp%2BbdiiR%2FynfDKBcOqMX4TzJrTYPlyfGQmZrsvBRuYJoCIj0QUvT5WzdtS78NXYBTF5SH5HnTVVjIYlfva2rshlVRyurEUNaI&X-Amz-Signature=47b217b1ec235a6e73e2c4ad564ff402d797782ad55f201d4366c03f4427dbef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64IWPOT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCDEsSS0Y6nHn7CEOGXKrUIougkWE3Q4w7Em%2FLK6iU8ggIgar0X%2FkoDXFFgE%2Fzwa199evsTEyz%2FNEMjpHPcCekqxmgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMN2B8%2Fpe7TLet%2BbwyrcA3LXYWXjURMkp08fZoFQcEik8pA2YWMeqsEA8Sk1MJmyBKW%2BIkxOHFrlaWMzRUtyqTdlKj1VzHnS%2FXXYZ06iA1xZ9dwvRdq7M7Q21cabOwY6%2FEkj2ii7bjOSu7SYfCL3O6%2BuSbiAjiYCcmeChUOvPYJjh9paNgc9Nibu%2BcSsthTf1GKxGdhJE0gOSIsj%2BPLJSUdt%2FHr5v%2B6RGjdyzX%2BIKdIuVNtVtRTQiUv9nk0WfEkBj9gx%2FYfKseTwrN4PPqnap9Qt9xRisyx3xwzw8RuJFfIfGaTDCeRxEbnjtuCv%2FHvltWwcO%2BW6jeg9HDIzHOeHWnNzZlJW8DQBO1O8ct0Zh1yzy92mWztG0pS5bs4YINpIjeshn3%2FeoVpzU493Qppt6NvBGwdhMJzDdkLGMDQ%2FJXxDDof8uyBUgynLX5z6VPhMSytL88SgFM7IoDV55We1GDO%2F%2BcgGSi5Xng%2FYyQO9O1o2nb6zWLO2RVm8ruPx0byG47OcNKONOt1IRlQY6fl0bQD9VSJMCnJazzQuufKdU7NZ8G5fcBXuz5BYG7MctrKRpOtWueuRK5K7MsDzTNPMPxXStqGPKj9lPorxRJFsqPdsywDVQhACtuanxui7kpyf6L9NR0hA3lSPfhi0MNbswb0GOqUBy7plPcLUGGjl59Lh0yJwrNWPQ6FRXodi8B4GRLwRdn8afS%2Fcukxa5Vf1qiZwctS4V6ct4CqpCk7YIXnQwSrXkZwOMC1EaqPYyKfWtSDG6kr%2BMDryDQxpWvcVeOASp%2BbdiiR%2FynfDKBcOqMX4TzJrTYPlyfGQmZrsvBRuYJoCIj0QUvT5WzdtS78NXYBTF5SH5HnTVVjIYlfva2rshlVRyurEUNaI&X-Amz-Signature=f2a7d432fcd7bbcaf4b01b5283239fb2523e112305b522fb11944f17a2acc5f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
