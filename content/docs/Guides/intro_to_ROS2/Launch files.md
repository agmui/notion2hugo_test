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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BI5CZW4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAyK8wpV4vxuSr9Ez8nLkimHZOltkR%2B5%2BDBXD9ptFlFAiEA1GC4IB%2BYqtzypWkGJU8KrmXgdvLQfqew368cFXT9mAEqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHq%2F%2F4EKaCib94KjircA7nNjvXHIjC%2FvINsCIcZK555ABwVqKUaVg69mu2Z8vp388INPeRVQugkbIBDD4LjE%2BeX3BjGjYP1jhPIzFr79ruMjvoWOkSlklabXhleyfGPKBIEKY4pMN6hAem5Ca32r68NDEvG%2BlG85kT5%2FXjP2BpDtGr336v5l88F4cPoViaGJcerbW%2FgTHGOFUf%2FWxkqa1m%2FWSM33L1RHzhapkXSS%2Fj3pqmq3sP90Zw2HpsexhBJDx0w7cJPUDG7Jci5lAe%2FJISqiLSn%2Fh4u5praBF0yehQP9D%2FFC7sz7I%2Bb0MMIUlBBSQIo9dAjI7Q67SesQsZ43C7173rDW%2FxzdsJhUcPgF%2FyY7B3Wa5T0J%2F6aU%2Be9VLuqLmdQRbG4WWqT28BIh6zJg%2BS62kyLsON6SjQfsiSTnN0UIQKeu8AFMxmTEd%2BXTFujtQktKFVLH9rG9%2FmwhLKgzOpqXYv2po8tfaHMf75U5z47Q1vipyc%2BQ6KwnpHELeVnjxetIsGuQxRrOyKsBPGeUiBTVnRCt%2FfgEkoGC%2BdtnRZPA%2FnhuQfQ4qXCJVN0nZYuCSMeV1JN9rvpc%2F%2Ftmf0hPrUwK2LoIiKcLehFtpRcdMu0uICISmZax46o2rFP82XG2VEf6g55yFHhjLwuMKqk7LwGOqUBA2xDcSnqXEXXmRh53lrQGEjobnNA%2BwVZiETemshG6bQGG943bfxvvLJ%2BzvuylmwcAIm1o%2F2hkfwKXKsspJxPmPDwmkJkgvhTvNzbpAHdaIuz6rwOqrzxkOuxu6bk%2B7%2BW2sy9OuzbWCbHFlNHBbg9Ipp9IBfWM%2F0MOPwIrhrfBm61Va8WP6x0NFELEm0gkFPwubFZK7pXY1DZwNg6%2BVhohL5fsQi%2B&X-Amz-Signature=0df67e36f448f75c3f77a1f11fdba7f9ee2191a3043702bf017cdf475a8f7618&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BI5CZW4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAyK8wpV4vxuSr9Ez8nLkimHZOltkR%2B5%2BDBXD9ptFlFAiEA1GC4IB%2BYqtzypWkGJU8KrmXgdvLQfqew368cFXT9mAEqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHq%2F%2F4EKaCib94KjircA7nNjvXHIjC%2FvINsCIcZK555ABwVqKUaVg69mu2Z8vp388INPeRVQugkbIBDD4LjE%2BeX3BjGjYP1jhPIzFr79ruMjvoWOkSlklabXhleyfGPKBIEKY4pMN6hAem5Ca32r68NDEvG%2BlG85kT5%2FXjP2BpDtGr336v5l88F4cPoViaGJcerbW%2FgTHGOFUf%2FWxkqa1m%2FWSM33L1RHzhapkXSS%2Fj3pqmq3sP90Zw2HpsexhBJDx0w7cJPUDG7Jci5lAe%2FJISqiLSn%2Fh4u5praBF0yehQP9D%2FFC7sz7I%2Bb0MMIUlBBSQIo9dAjI7Q67SesQsZ43C7173rDW%2FxzdsJhUcPgF%2FyY7B3Wa5T0J%2F6aU%2Be9VLuqLmdQRbG4WWqT28BIh6zJg%2BS62kyLsON6SjQfsiSTnN0UIQKeu8AFMxmTEd%2BXTFujtQktKFVLH9rG9%2FmwhLKgzOpqXYv2po8tfaHMf75U5z47Q1vipyc%2BQ6KwnpHELeVnjxetIsGuQxRrOyKsBPGeUiBTVnRCt%2FfgEkoGC%2BdtnRZPA%2FnhuQfQ4qXCJVN0nZYuCSMeV1JN9rvpc%2F%2Ftmf0hPrUwK2LoIiKcLehFtpRcdMu0uICISmZax46o2rFP82XG2VEf6g55yFHhjLwuMKqk7LwGOqUBA2xDcSnqXEXXmRh53lrQGEjobnNA%2BwVZiETemshG6bQGG943bfxvvLJ%2BzvuylmwcAIm1o%2F2hkfwKXKsspJxPmPDwmkJkgvhTvNzbpAHdaIuz6rwOqrzxkOuxu6bk%2B7%2BW2sy9OuzbWCbHFlNHBbg9Ipp9IBfWM%2F0MOPwIrhrfBm61Va8WP6x0NFELEm0gkFPwubFZK7pXY1DZwNg6%2BVhohL5fsQi%2B&X-Amz-Signature=8df902a906a0bdc09c0a4f9f0d048799f05ad729255141dc3c377c2655c5eb26&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BI5CZW4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAyK8wpV4vxuSr9Ez8nLkimHZOltkR%2B5%2BDBXD9ptFlFAiEA1GC4IB%2BYqtzypWkGJU8KrmXgdvLQfqew368cFXT9mAEqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHq%2F%2F4EKaCib94KjircA7nNjvXHIjC%2FvINsCIcZK555ABwVqKUaVg69mu2Z8vp388INPeRVQugkbIBDD4LjE%2BeX3BjGjYP1jhPIzFr79ruMjvoWOkSlklabXhleyfGPKBIEKY4pMN6hAem5Ca32r68NDEvG%2BlG85kT5%2FXjP2BpDtGr336v5l88F4cPoViaGJcerbW%2FgTHGOFUf%2FWxkqa1m%2FWSM33L1RHzhapkXSS%2Fj3pqmq3sP90Zw2HpsexhBJDx0w7cJPUDG7Jci5lAe%2FJISqiLSn%2Fh4u5praBF0yehQP9D%2FFC7sz7I%2Bb0MMIUlBBSQIo9dAjI7Q67SesQsZ43C7173rDW%2FxzdsJhUcPgF%2FyY7B3Wa5T0J%2F6aU%2Be9VLuqLmdQRbG4WWqT28BIh6zJg%2BS62kyLsON6SjQfsiSTnN0UIQKeu8AFMxmTEd%2BXTFujtQktKFVLH9rG9%2FmwhLKgzOpqXYv2po8tfaHMf75U5z47Q1vipyc%2BQ6KwnpHELeVnjxetIsGuQxRrOyKsBPGeUiBTVnRCt%2FfgEkoGC%2BdtnRZPA%2FnhuQfQ4qXCJVN0nZYuCSMeV1JN9rvpc%2F%2Ftmf0hPrUwK2LoIiKcLehFtpRcdMu0uICISmZax46o2rFP82XG2VEf6g55yFHhjLwuMKqk7LwGOqUBA2xDcSnqXEXXmRh53lrQGEjobnNA%2BwVZiETemshG6bQGG943bfxvvLJ%2BzvuylmwcAIm1o%2F2hkfwKXKsspJxPmPDwmkJkgvhTvNzbpAHdaIuz6rwOqrzxkOuxu6bk%2B7%2BW2sy9OuzbWCbHFlNHBbg9Ipp9IBfWM%2F0MOPwIrhrfBm61Va8WP6x0NFELEm0gkFPwubFZK7pXY1DZwNg6%2BVhohL5fsQi%2B&X-Amz-Signature=0c2f9a0ae1e51f414c4ff556c8011216cb23b192c2ea860fe744a6e522e426b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
