---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W47SYAMB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPFDV2J4BWoDU6uCMd785qTu7Yz8WcrVBEuSW6YNicbQIgTQIPmH%2FYUSyAxlrH1ZuHYr64CMMtNex6Y149Yn9OiyYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjsAoDhaZWMLm3ejyrcAypyxEkXUDPmOlsgjakkYRNozW1YmfKwKA1riuD%2FKiVVwroEdioHfkMa0XlxLERdQbDStZeZhlJWLBIr4cVMrYphVhHoSq33xQIOUtF3XBWdjnuQ9hdYg7DDrGNtL6wria15%2F874UdfHDx6tE%2FVt7Ccx4CrDRhFe6RIj0StPKektGwU%2B3F60d7uCx92U5FTDlOhtBV%2BSSAqjPOQK0stdQGvHZFz%2BR3iKguZLGp83MJybjZEOnkgSHo24yMeCsxk4b2N1WIS4mKsrbFICV07JvrDzmMTRyPnNHEcjvX8tJ0DG4bpYXmpIOVTXC5f%2B7oxyNmX86gcHpJqjarbkPy2xr37nAasg%2FY5%2Fms294osLP9Jn81X551fnzhdFLfhk8exRrrl3SGn5tW6XoOrN9RSSOzzmPzxLrMVBenftPkIsdVvl2Rgybst17hgKeIUZ5dhlX%2FIj5ViJH%2FFpWHkE5DzXsp0mjfPcTlA66DI0WXpYeI77iPIa4ZvEhUaFM8r9bM59OhoXYeFjkR1re4U0%2BCbi9AOmk%2Bii6B7btr8bJNI%2BGNJsDwNXwKVzn2JaLkRZCG1AZgZqEo%2BYg%2Btg4pizNL9FISuEm4ToVUJO6xDFC%2BcAEduA%2FvgO0yxaqQMv2fr8MKHR2MkGOqUBtpV5q1GMgvrnIS7Ec4KLEqVpVGlSrEpH8SS%2BgSNseNFLQ4lxZBvohXTTvklgDcECibk3ypkh0cqF7fQ6ngb3tah14VSgDz7bjyMyBODCW4pnwVOn%2BD4CpXa%2F1gv3xZGYJxAsYmWTweTbAYwDqgSe7LAecBdcOCoavi9%2BoLFUHM79B4ewt%2BCKsUNh36Wq1I6nUI%2BC7Ooc1yBLwgzRy1Lnfbz2JjPB&X-Amz-Signature=6ad0981cf0e1a7091d128e60859d8743167b720811335f26572561acfc1eed52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W47SYAMB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPFDV2J4BWoDU6uCMd785qTu7Yz8WcrVBEuSW6YNicbQIgTQIPmH%2FYUSyAxlrH1ZuHYr64CMMtNex6Y149Yn9OiyYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjsAoDhaZWMLm3ejyrcAypyxEkXUDPmOlsgjakkYRNozW1YmfKwKA1riuD%2FKiVVwroEdioHfkMa0XlxLERdQbDStZeZhlJWLBIr4cVMrYphVhHoSq33xQIOUtF3XBWdjnuQ9hdYg7DDrGNtL6wria15%2F874UdfHDx6tE%2FVt7Ccx4CrDRhFe6RIj0StPKektGwU%2B3F60d7uCx92U5FTDlOhtBV%2BSSAqjPOQK0stdQGvHZFz%2BR3iKguZLGp83MJybjZEOnkgSHo24yMeCsxk4b2N1WIS4mKsrbFICV07JvrDzmMTRyPnNHEcjvX8tJ0DG4bpYXmpIOVTXC5f%2B7oxyNmX86gcHpJqjarbkPy2xr37nAasg%2FY5%2Fms294osLP9Jn81X551fnzhdFLfhk8exRrrl3SGn5tW6XoOrN9RSSOzzmPzxLrMVBenftPkIsdVvl2Rgybst17hgKeIUZ5dhlX%2FIj5ViJH%2FFpWHkE5DzXsp0mjfPcTlA66DI0WXpYeI77iPIa4ZvEhUaFM8r9bM59OhoXYeFjkR1re4U0%2BCbi9AOmk%2Bii6B7btr8bJNI%2BGNJsDwNXwKVzn2JaLkRZCG1AZgZqEo%2BYg%2Btg4pizNL9FISuEm4ToVUJO6xDFC%2BcAEduA%2FvgO0yxaqQMv2fr8MKHR2MkGOqUBtpV5q1GMgvrnIS7Ec4KLEqVpVGlSrEpH8SS%2BgSNseNFLQ4lxZBvohXTTvklgDcECibk3ypkh0cqF7fQ6ngb3tah14VSgDz7bjyMyBODCW4pnwVOn%2BD4CpXa%2F1gv3xZGYJxAsYmWTweTbAYwDqgSe7LAecBdcOCoavi9%2BoLFUHM79B4ewt%2BCKsUNh36Wq1I6nUI%2BC7Ooc1yBLwgzRy1Lnfbz2JjPB&X-Amz-Signature=0dbcbb7e31558b4f4985280e55396e99fdfc4219452b13d02fdea42aadadab06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W47SYAMB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPFDV2J4BWoDU6uCMd785qTu7Yz8WcrVBEuSW6YNicbQIgTQIPmH%2FYUSyAxlrH1ZuHYr64CMMtNex6Y149Yn9OiyYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjsAoDhaZWMLm3ejyrcAypyxEkXUDPmOlsgjakkYRNozW1YmfKwKA1riuD%2FKiVVwroEdioHfkMa0XlxLERdQbDStZeZhlJWLBIr4cVMrYphVhHoSq33xQIOUtF3XBWdjnuQ9hdYg7DDrGNtL6wria15%2F874UdfHDx6tE%2FVt7Ccx4CrDRhFe6RIj0StPKektGwU%2B3F60d7uCx92U5FTDlOhtBV%2BSSAqjPOQK0stdQGvHZFz%2BR3iKguZLGp83MJybjZEOnkgSHo24yMeCsxk4b2N1WIS4mKsrbFICV07JvrDzmMTRyPnNHEcjvX8tJ0DG4bpYXmpIOVTXC5f%2B7oxyNmX86gcHpJqjarbkPy2xr37nAasg%2FY5%2Fms294osLP9Jn81X551fnzhdFLfhk8exRrrl3SGn5tW6XoOrN9RSSOzzmPzxLrMVBenftPkIsdVvl2Rgybst17hgKeIUZ5dhlX%2FIj5ViJH%2FFpWHkE5DzXsp0mjfPcTlA66DI0WXpYeI77iPIa4ZvEhUaFM8r9bM59OhoXYeFjkR1re4U0%2BCbi9AOmk%2Bii6B7btr8bJNI%2BGNJsDwNXwKVzn2JaLkRZCG1AZgZqEo%2BYg%2Btg4pizNL9FISuEm4ToVUJO6xDFC%2BcAEduA%2FvgO0yxaqQMv2fr8MKHR2MkGOqUBtpV5q1GMgvrnIS7Ec4KLEqVpVGlSrEpH8SS%2BgSNseNFLQ4lxZBvohXTTvklgDcECibk3ypkh0cqF7fQ6ngb3tah14VSgDz7bjyMyBODCW4pnwVOn%2BD4CpXa%2F1gv3xZGYJxAsYmWTweTbAYwDqgSe7LAecBdcOCoavi9%2BoLFUHM79B4ewt%2BCKsUNh36Wq1I6nUI%2BC7Ooc1yBLwgzRy1Lnfbz2JjPB&X-Amz-Signature=8ba740ea4ee4fec1290de8e7d7f3e643e9b609ac69ed4f0e8b21ffa1488a4460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
