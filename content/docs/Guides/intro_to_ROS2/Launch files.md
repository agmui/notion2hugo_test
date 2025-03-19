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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2MHUNBL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICG57%2BUAZt535pTdZxZAKICLeET3FB3f6VYuRkKn6Z50AiEA14usH1npJzdSrTUDMs7AXcr%2F8Jx5teAJpmjL07%2B%2F%2FlMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB8Z1JbPV5JUPH2SCSrcAyPOzjnC%2F%2FCjtnv%2BG%2FqYBZt3vLlXc4Idoq1SNTamGctlxfGeZaJuQxB2EdtreKaYrO3O4EfwocDeEwJvLM%2Bxplet0X2VMwbr08NCazMfJQ42PZBMRiIpTIWiWDNIMnbdiAiYvEmuGD5cNvSZOWExplgfeQCEZ83If%2B22cTZVImJoiZKPT5JLbX2lJFIrUlgqEJsQFgUE4ICM4kj7co3%2BhmeZo2xXC8yGFjOrDLeQUag%2B8TJ2slloX2M7wROffg0x8sThdnLiA4HQM5pRYW36batvEe%2Ffw%2F7JM4AfbG6h%2BuXcZIrPYhwtS4XF7wMTKdL%2BhIBKJYP%2F5uzadLSuah1K9tvrSAobuihWeYyptvQUoUOUJKJ5JLwf%2BAkJMuukzp6GvwwPylKDy8EEjT7r%2FQeSfRxFwE%2B37i%2BeSjPgeCGoUANc01TNZrmja1fp%2BeGjixMJXjJ7LHqSeSY%2BW2o7EAQXKfqA8NfMOQ69Gdnq%2BtkMoJvBCUkkLMM2hV6bUYGllkDgizRBkXDTwWXPtpOLgYnwg%2FOHi8xwjvk9Zp9lVKI2ecHBul4Z4pU1KC%2F%2FXvsUYn9%2Bse3zv3Pm5LvGRRNrayu5GSyqdLkyfM9QekSa3JiI8IyEn2oTkHMx%2Fwzi9oEEMOv96L4GOqUBIF9ynNlHU%2Bp1G354WrBqvFnQzNuEDa%2FMWBqcMKYSM005hH4crPVQ%2BNgn6OiM4GjHS35Z9DQ4euOmtNBg7ftaPUo58mIZvR%2FCSwrK5pv2EyRh%2FJTioSqv6jfLX%2FbRPcDLdPEIKN7aNqlGweibpU%2FuhG95CYKcHNGR3%2FSZRkmXB6UWQCBX2oFWtN69c9rh%2BKwoTbtawspXcgS7qOPj%2BT9o2wqUsTgq&X-Amz-Signature=a552e48af7391f4880f7d2fe3127b4503c9448b6b84c59a467499eff337a1278&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2MHUNBL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICG57%2BUAZt535pTdZxZAKICLeET3FB3f6VYuRkKn6Z50AiEA14usH1npJzdSrTUDMs7AXcr%2F8Jx5teAJpmjL07%2B%2F%2FlMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB8Z1JbPV5JUPH2SCSrcAyPOzjnC%2F%2FCjtnv%2BG%2FqYBZt3vLlXc4Idoq1SNTamGctlxfGeZaJuQxB2EdtreKaYrO3O4EfwocDeEwJvLM%2Bxplet0X2VMwbr08NCazMfJQ42PZBMRiIpTIWiWDNIMnbdiAiYvEmuGD5cNvSZOWExplgfeQCEZ83If%2B22cTZVImJoiZKPT5JLbX2lJFIrUlgqEJsQFgUE4ICM4kj7co3%2BhmeZo2xXC8yGFjOrDLeQUag%2B8TJ2slloX2M7wROffg0x8sThdnLiA4HQM5pRYW36batvEe%2Ffw%2F7JM4AfbG6h%2BuXcZIrPYhwtS4XF7wMTKdL%2BhIBKJYP%2F5uzadLSuah1K9tvrSAobuihWeYyptvQUoUOUJKJ5JLwf%2BAkJMuukzp6GvwwPylKDy8EEjT7r%2FQeSfRxFwE%2B37i%2BeSjPgeCGoUANc01TNZrmja1fp%2BeGjixMJXjJ7LHqSeSY%2BW2o7EAQXKfqA8NfMOQ69Gdnq%2BtkMoJvBCUkkLMM2hV6bUYGllkDgizRBkXDTwWXPtpOLgYnwg%2FOHi8xwjvk9Zp9lVKI2ecHBul4Z4pU1KC%2F%2FXvsUYn9%2Bse3zv3Pm5LvGRRNrayu5GSyqdLkyfM9QekSa3JiI8IyEn2oTkHMx%2Fwzi9oEEMOv96L4GOqUBIF9ynNlHU%2Bp1G354WrBqvFnQzNuEDa%2FMWBqcMKYSM005hH4crPVQ%2BNgn6OiM4GjHS35Z9DQ4euOmtNBg7ftaPUo58mIZvR%2FCSwrK5pv2EyRh%2FJTioSqv6jfLX%2FbRPcDLdPEIKN7aNqlGweibpU%2FuhG95CYKcHNGR3%2FSZRkmXB6UWQCBX2oFWtN69c9rh%2BKwoTbtawspXcgS7qOPj%2BT9o2wqUsTgq&X-Amz-Signature=f00294249ffc874e60995beb91acaea96c8481835f61da03aab877d97e8cb808&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2MHUNBL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICG57%2BUAZt535pTdZxZAKICLeET3FB3f6VYuRkKn6Z50AiEA14usH1npJzdSrTUDMs7AXcr%2F8Jx5teAJpmjL07%2B%2F%2FlMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB8Z1JbPV5JUPH2SCSrcAyPOzjnC%2F%2FCjtnv%2BG%2FqYBZt3vLlXc4Idoq1SNTamGctlxfGeZaJuQxB2EdtreKaYrO3O4EfwocDeEwJvLM%2Bxplet0X2VMwbr08NCazMfJQ42PZBMRiIpTIWiWDNIMnbdiAiYvEmuGD5cNvSZOWExplgfeQCEZ83If%2B22cTZVImJoiZKPT5JLbX2lJFIrUlgqEJsQFgUE4ICM4kj7co3%2BhmeZo2xXC8yGFjOrDLeQUag%2B8TJ2slloX2M7wROffg0x8sThdnLiA4HQM5pRYW36batvEe%2Ffw%2F7JM4AfbG6h%2BuXcZIrPYhwtS4XF7wMTKdL%2BhIBKJYP%2F5uzadLSuah1K9tvrSAobuihWeYyptvQUoUOUJKJ5JLwf%2BAkJMuukzp6GvwwPylKDy8EEjT7r%2FQeSfRxFwE%2B37i%2BeSjPgeCGoUANc01TNZrmja1fp%2BeGjixMJXjJ7LHqSeSY%2BW2o7EAQXKfqA8NfMOQ69Gdnq%2BtkMoJvBCUkkLMM2hV6bUYGllkDgizRBkXDTwWXPtpOLgYnwg%2FOHi8xwjvk9Zp9lVKI2ecHBul4Z4pU1KC%2F%2FXvsUYn9%2Bse3zv3Pm5LvGRRNrayu5GSyqdLkyfM9QekSa3JiI8IyEn2oTkHMx%2Fwzi9oEEMOv96L4GOqUBIF9ynNlHU%2Bp1G354WrBqvFnQzNuEDa%2FMWBqcMKYSM005hH4crPVQ%2BNgn6OiM4GjHS35Z9DQ4euOmtNBg7ftaPUo58mIZvR%2FCSwrK5pv2EyRh%2FJTioSqv6jfLX%2FbRPcDLdPEIKN7aNqlGweibpU%2FuhG95CYKcHNGR3%2FSZRkmXB6UWQCBX2oFWtN69c9rh%2BKwoTbtawspXcgS7qOPj%2BT9o2wqUsTgq&X-Amz-Signature=0726a0adcef447d0bb106afd648484200e71abb421d5261a59f988c7263f864d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
