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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3KZ2WS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFlWybKVtKcwzQ9flGNL%2BY9UDyIxz9m%2BpP6q%2BXyCJUwAiEAuEDhikxd26yhot4IwHa2sBOGgmZjWOkkh9CfzrZYOyQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTCdkSkoEwcKYkKzCrcA7d9MFXQIdCuLmNgtlKcCNZCmKswk808fpPZO6cCFN%2Fyf%2FG3rfsZ1Sydy6b3RQdQF9uJLnQ39hzHavOE7RXzDRFNeXmSkf5Q3d4G9%2F4bGFhVL2CovTDrm5yZAJ7yF8EOqe8tqYJXdrGsibyzK42l8D2ArPTKhxhZ6%2FeESoMUKG734JOi9Y6PULL7rYQ1Docz89g%2FyhtEwCxRJ7eLOn6kRdxEYyyyaz3q6pPajgzbgBFGS%2Fvw69DsUbiJacSzC%2FwjfEebw00POkxqJXPQCD2QXbPmQ38c5eRKc6Fn%2FUOXF9k2r22v8qCGS4gU26nNnld9Iw5vmb51dHQGTLmzv%2BcQpFAPJq%2BlsNoFfTAoIWJthvSXEX7TCSe2JngnSqA4M%2B9kGqxcitqOC8bJwhlW78Z8keV5ncGYOgdDAOXHyLJR3czFF7CpNtTTdzI%2BJC4nCOGv9Df1upMDk6NbpiMNnlsPWGYBGU07mR28vo2kYodcQWcuHHAL1R53WE5vkh9jSq17K1AK1H%2FFNwjFLWUu94uEoCGb3%2BEf5G6Y93lQxEYs%2FIYImX0LKWfHGeQIzN6XRl0l0yQRBg7jRaLvI%2BprQXM1CbRvBjPnwkVE4Eg7GKq1ReFjhHeg%2F46dMIj85416MIm7%2B8AGOqUB7JseZYUECTCwmnqTksEC9l5nWPIXStoFKv5nBOvMio2tiUrt1tNqP4c%2FOqPL4hU%2Fn5Tb0qKYbzjun4uSuWqlKKSU0KsSVeJSSdFxcF9UXtptIOUdN2iCOQAA1Gv10GaQI5VU%2B7yULliJbzTjxlPjeL3ZUHBSuV17syGIAMI2MUsqq%2FUBXo2M6VjbRXzWMVII3fQBZQdsZ2st%2BRSu0FlvtSwgShCh&X-Amz-Signature=8959233f73efddb838f7607fc8b397a8f54e50ca420ff399dbffcab0cd88fdf5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3KZ2WS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFlWybKVtKcwzQ9flGNL%2BY9UDyIxz9m%2BpP6q%2BXyCJUwAiEAuEDhikxd26yhot4IwHa2sBOGgmZjWOkkh9CfzrZYOyQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTCdkSkoEwcKYkKzCrcA7d9MFXQIdCuLmNgtlKcCNZCmKswk808fpPZO6cCFN%2Fyf%2FG3rfsZ1Sydy6b3RQdQF9uJLnQ39hzHavOE7RXzDRFNeXmSkf5Q3d4G9%2F4bGFhVL2CovTDrm5yZAJ7yF8EOqe8tqYJXdrGsibyzK42l8D2ArPTKhxhZ6%2FeESoMUKG734JOi9Y6PULL7rYQ1Docz89g%2FyhtEwCxRJ7eLOn6kRdxEYyyyaz3q6pPajgzbgBFGS%2Fvw69DsUbiJacSzC%2FwjfEebw00POkxqJXPQCD2QXbPmQ38c5eRKc6Fn%2FUOXF9k2r22v8qCGS4gU26nNnld9Iw5vmb51dHQGTLmzv%2BcQpFAPJq%2BlsNoFfTAoIWJthvSXEX7TCSe2JngnSqA4M%2B9kGqxcitqOC8bJwhlW78Z8keV5ncGYOgdDAOXHyLJR3czFF7CpNtTTdzI%2BJC4nCOGv9Df1upMDk6NbpiMNnlsPWGYBGU07mR28vo2kYodcQWcuHHAL1R53WE5vkh9jSq17K1AK1H%2FFNwjFLWUu94uEoCGb3%2BEf5G6Y93lQxEYs%2FIYImX0LKWfHGeQIzN6XRl0l0yQRBg7jRaLvI%2BprQXM1CbRvBjPnwkVE4Eg7GKq1ReFjhHeg%2F46dMIj85416MIm7%2B8AGOqUB7JseZYUECTCwmnqTksEC9l5nWPIXStoFKv5nBOvMio2tiUrt1tNqP4c%2FOqPL4hU%2Fn5Tb0qKYbzjun4uSuWqlKKSU0KsSVeJSSdFxcF9UXtptIOUdN2iCOQAA1Gv10GaQI5VU%2B7yULliJbzTjxlPjeL3ZUHBSuV17syGIAMI2MUsqq%2FUBXo2M6VjbRXzWMVII3fQBZQdsZ2st%2BRSu0FlvtSwgShCh&X-Amz-Signature=bd118a79b63bc761c813248cc21773736ff0658029e5ad0c32513ea107f79be8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3KZ2WS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFlWybKVtKcwzQ9flGNL%2BY9UDyIxz9m%2BpP6q%2BXyCJUwAiEAuEDhikxd26yhot4IwHa2sBOGgmZjWOkkh9CfzrZYOyQqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTCdkSkoEwcKYkKzCrcA7d9MFXQIdCuLmNgtlKcCNZCmKswk808fpPZO6cCFN%2Fyf%2FG3rfsZ1Sydy6b3RQdQF9uJLnQ39hzHavOE7RXzDRFNeXmSkf5Q3d4G9%2F4bGFhVL2CovTDrm5yZAJ7yF8EOqe8tqYJXdrGsibyzK42l8D2ArPTKhxhZ6%2FeESoMUKG734JOi9Y6PULL7rYQ1Docz89g%2FyhtEwCxRJ7eLOn6kRdxEYyyyaz3q6pPajgzbgBFGS%2Fvw69DsUbiJacSzC%2FwjfEebw00POkxqJXPQCD2QXbPmQ38c5eRKc6Fn%2FUOXF9k2r22v8qCGS4gU26nNnld9Iw5vmb51dHQGTLmzv%2BcQpFAPJq%2BlsNoFfTAoIWJthvSXEX7TCSe2JngnSqA4M%2B9kGqxcitqOC8bJwhlW78Z8keV5ncGYOgdDAOXHyLJR3czFF7CpNtTTdzI%2BJC4nCOGv9Df1upMDk6NbpiMNnlsPWGYBGU07mR28vo2kYodcQWcuHHAL1R53WE5vkh9jSq17K1AK1H%2FFNwjFLWUu94uEoCGb3%2BEf5G6Y93lQxEYs%2FIYImX0LKWfHGeQIzN6XRl0l0yQRBg7jRaLvI%2BprQXM1CbRvBjPnwkVE4Eg7GKq1ReFjhHeg%2F46dMIj85416MIm7%2B8AGOqUB7JseZYUECTCwmnqTksEC9l5nWPIXStoFKv5nBOvMio2tiUrt1tNqP4c%2FOqPL4hU%2Fn5Tb0qKYbzjun4uSuWqlKKSU0KsSVeJSSdFxcF9UXtptIOUdN2iCOQAA1Gv10GaQI5VU%2B7yULliJbzTjxlPjeL3ZUHBSuV17syGIAMI2MUsqq%2FUBXo2M6VjbRXzWMVII3fQBZQdsZ2st%2BRSu0FlvtSwgShCh&X-Amz-Signature=6c64fe177da5b8943de8e566104c3cdf4c0b9ba4f0b9a0bca6bd7a0bb2792dbd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
