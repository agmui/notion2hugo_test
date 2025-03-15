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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6FUBTAB%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8nF3zLgJgeGT8oiUMQ%2Fy3eWDadrdrT2L1y%2BOpB2rl5AiEAveBIE8zkyKLUP1XiIEIJO4U%2FxvUb%2BWYs%2BmVJe4L6G4MqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiZ2w5N5Jk3vuWC6SrcA05Wdtpwq3WMgiokBFNn9R%2B7bMiJkiJ3hPtac%2BcEjstKCKTb7Fd1iGr4G6r9IMV9hXPaIyYNCDmhh%2FBuTazsISP1Xr8CAInnfQCuK0jxlTKFbbORLOyi%2BS47Xtar66BsxSruCPZTVnLJ91%2B0PpW0mBc8InWVaE9WR%2FmCc57s3Y3nrCCBnuy9qlVtabVAJ3xlxj%2Bs9XEvmtugMMhKtMReBPL0SdhpTJOwZzP4HbCP%2B41UqHds9wT6B3VXZhptzOF9KGv95XfI3R7NB9ylF18YXTxCfSQBLuIfKTcYQnc%2F1FCJ1NIzD7fSCJo5gwkVahhSQr%2BD1k%2FYsvurXFm%2FtequjOx0YxyijEjCGzBIIMHxgQcaCqmKt1SFMvg2Wlirop9dYXRYrY2M2ZIInDLaQJR0a1E3J%2Fp0CSDnuzZ4bkHQRyoetD2nFcMFTd3EGfBwJ5Xwcx%2Bclg3mYwtsr7fDhYtYfp4G4XHohy9g%2FzN9BPdDKOSDl5CRVUfglpXDe7mTkKhpapGUB%2F%2BDQ9gKu8PDEf727gnRBT7DLKkbzBPqlaZrd72JDhys0J7fmcT9%2BWNBNtF8mzk9HAvmYBZNTuYdfeW10b7uUurB6SP%2FwyKBiF9zX3%2BtJrXOMD56IWzDr2m2MPGl1L4GOqUBEAwT3kOetTKoSPgnxGWL4APNikkW4qsVa%2BaqPDcDDzQ0y%2FEs6qbXZIr0l8hA1LUcD%2F6V5XAQ5Ya55EanK158ANRgS5XX9PtHFRBmeZ%2FgtqrD2U6VJtb2458BeaCs0%2BPAYJYEAMGVxq6Qod3COyn7ClXtGoiE%2BT2%2B6L80qD7nj%2FVOPMkziVqMp8m3gSXRWpvZAzoPNumTCaKf7T9uzxlxl%2FqNzCqo&X-Amz-Signature=77ba4e0eb0d14826060b493b1b1fcaad50fee44c97faa8d2d37119126246db76&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6FUBTAB%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8nF3zLgJgeGT8oiUMQ%2Fy3eWDadrdrT2L1y%2BOpB2rl5AiEAveBIE8zkyKLUP1XiIEIJO4U%2FxvUb%2BWYs%2BmVJe4L6G4MqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiZ2w5N5Jk3vuWC6SrcA05Wdtpwq3WMgiokBFNn9R%2B7bMiJkiJ3hPtac%2BcEjstKCKTb7Fd1iGr4G6r9IMV9hXPaIyYNCDmhh%2FBuTazsISP1Xr8CAInnfQCuK0jxlTKFbbORLOyi%2BS47Xtar66BsxSruCPZTVnLJ91%2B0PpW0mBc8InWVaE9WR%2FmCc57s3Y3nrCCBnuy9qlVtabVAJ3xlxj%2Bs9XEvmtugMMhKtMReBPL0SdhpTJOwZzP4HbCP%2B41UqHds9wT6B3VXZhptzOF9KGv95XfI3R7NB9ylF18YXTxCfSQBLuIfKTcYQnc%2F1FCJ1NIzD7fSCJo5gwkVahhSQr%2BD1k%2FYsvurXFm%2FtequjOx0YxyijEjCGzBIIMHxgQcaCqmKt1SFMvg2Wlirop9dYXRYrY2M2ZIInDLaQJR0a1E3J%2Fp0CSDnuzZ4bkHQRyoetD2nFcMFTd3EGfBwJ5Xwcx%2Bclg3mYwtsr7fDhYtYfp4G4XHohy9g%2FzN9BPdDKOSDl5CRVUfglpXDe7mTkKhpapGUB%2F%2BDQ9gKu8PDEf727gnRBT7DLKkbzBPqlaZrd72JDhys0J7fmcT9%2BWNBNtF8mzk9HAvmYBZNTuYdfeW10b7uUurB6SP%2FwyKBiF9zX3%2BtJrXOMD56IWzDr2m2MPGl1L4GOqUBEAwT3kOetTKoSPgnxGWL4APNikkW4qsVa%2BaqPDcDDzQ0y%2FEs6qbXZIr0l8hA1LUcD%2F6V5XAQ5Ya55EanK158ANRgS5XX9PtHFRBmeZ%2FgtqrD2U6VJtb2458BeaCs0%2BPAYJYEAMGVxq6Qod3COyn7ClXtGoiE%2BT2%2B6L80qD7nj%2FVOPMkziVqMp8m3gSXRWpvZAzoPNumTCaKf7T9uzxlxl%2FqNzCqo&X-Amz-Signature=dbf86433e304218e9fd08ff904480eee60fb93d2b423cb077f2a4453833deb86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6FUBTAB%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8nF3zLgJgeGT8oiUMQ%2Fy3eWDadrdrT2L1y%2BOpB2rl5AiEAveBIE8zkyKLUP1XiIEIJO4U%2FxvUb%2BWYs%2BmVJe4L6G4MqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiZ2w5N5Jk3vuWC6SrcA05Wdtpwq3WMgiokBFNn9R%2B7bMiJkiJ3hPtac%2BcEjstKCKTb7Fd1iGr4G6r9IMV9hXPaIyYNCDmhh%2FBuTazsISP1Xr8CAInnfQCuK0jxlTKFbbORLOyi%2BS47Xtar66BsxSruCPZTVnLJ91%2B0PpW0mBc8InWVaE9WR%2FmCc57s3Y3nrCCBnuy9qlVtabVAJ3xlxj%2Bs9XEvmtugMMhKtMReBPL0SdhpTJOwZzP4HbCP%2B41UqHds9wT6B3VXZhptzOF9KGv95XfI3R7NB9ylF18YXTxCfSQBLuIfKTcYQnc%2F1FCJ1NIzD7fSCJo5gwkVahhSQr%2BD1k%2FYsvurXFm%2FtequjOx0YxyijEjCGzBIIMHxgQcaCqmKt1SFMvg2Wlirop9dYXRYrY2M2ZIInDLaQJR0a1E3J%2Fp0CSDnuzZ4bkHQRyoetD2nFcMFTd3EGfBwJ5Xwcx%2Bclg3mYwtsr7fDhYtYfp4G4XHohy9g%2FzN9BPdDKOSDl5CRVUfglpXDe7mTkKhpapGUB%2F%2BDQ9gKu8PDEf727gnRBT7DLKkbzBPqlaZrd72JDhys0J7fmcT9%2BWNBNtF8mzk9HAvmYBZNTuYdfeW10b7uUurB6SP%2FwyKBiF9zX3%2BtJrXOMD56IWzDr2m2MPGl1L4GOqUBEAwT3kOetTKoSPgnxGWL4APNikkW4qsVa%2BaqPDcDDzQ0y%2FEs6qbXZIr0l8hA1LUcD%2F6V5XAQ5Ya55EanK158ANRgS5XX9PtHFRBmeZ%2FgtqrD2U6VJtb2458BeaCs0%2BPAYJYEAMGVxq6Qod3COyn7ClXtGoiE%2BT2%2B6L80qD7nj%2FVOPMkziVqMp8m3gSXRWpvZAzoPNumTCaKf7T9uzxlxl%2FqNzCqo&X-Amz-Signature=e19dfcb8c68f7f528f8640f1bef8823250b943221c8258639564fb60ba7bc8be&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
