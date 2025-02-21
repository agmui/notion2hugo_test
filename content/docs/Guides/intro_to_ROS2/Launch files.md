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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE3FSOAU%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEJruMUmU97pKu2dI5QPocvJA0lpqSuxA3OTaiio%2FOEwIgXjBFUiNWeP2O%2FNEAyjP3mmwGT1L7p4C87mgbLr0ancQqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnMStLGgieYQ5YFCircA1D%2BIxyai0TQJ1Ukm%2BpMRm3I4ykI4gPMBFAlPjE0lJenLDoyo%2Bte7%2B4KnGEqJytnM0JxmGJCv6KZcAEKSiRPbGTA4PTu%2B0vs15p096BrlKTrwsptQ701AVTfYQDAdfyHFvInffnsvtY2MXjoDs2%2FD%2BKOklw87XkTD9opc1K0fQXFZt1TaUFjo9yP%2BZ5UStjB2Kz524paclhCsslqSAIoCdnMBQtBkVGfb68tzm4nKoEPqSLfJZEH%2Fuf1Do0Ny45QSrJXSSjlzES296IMiRYAaiM%2B5AuZMo%2FqhNac44UTO3n%2BLXswvMsewh46rHLu75QvDu1ny3ShjsC%2FtPuSgQ0MinFQe4woMLNcTqJqrPADF14OrkHjJqT9IsTo1tMWYuEqHmwv6WRwCG3mnfAdgiuPGvIpsKICdYtvFypJdge307aqgzp8aMuwJGCqJTr90LLkJ8r9dZ1OKxCxV%2FXAPbHBlLajtPMUV55RnkdJWo25yHyEWl0xxHc75exMiZY7FFdq6xWt5Pw6EeEmQRD3La4CsnU%2BOO54Nt9AAu%2B57XfTpjVoN%2FQWrtuSY1DuQnX707HLOJn%2FJQtgTVacwL2WUCU%2FukmNyf7wTHJgHhNhKP55hXD%2BQMeYqlflQLF9lQM1MI7l4b0GOqUBqcsBIbnBQ6QPJDNx669SyTbUAXZbi2oi%2FhGGansEK8iBzoKP7uvYNYfG2I3hVr8Ir2E1rfHz8bkOqSNckZCICoN%2Ft3SUVPirFPmtizFV7IYn3o8jCFCEz0ET6nqNHpH%2FZuRmVPMB6rQjfdiT0ZTrr81dtJIaEgrGOq3%2FnGd9umNCpHDRSsBYVsbQCjPbxWVopWu1iK4YOSGP1htZoeiSlVzOdmkR&X-Amz-Signature=a06eac8748c838cd2c048697115312ddc3db94ac5db74ec56058286212af4f46&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE3FSOAU%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEJruMUmU97pKu2dI5QPocvJA0lpqSuxA3OTaiio%2FOEwIgXjBFUiNWeP2O%2FNEAyjP3mmwGT1L7p4C87mgbLr0ancQqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnMStLGgieYQ5YFCircA1D%2BIxyai0TQJ1Ukm%2BpMRm3I4ykI4gPMBFAlPjE0lJenLDoyo%2Bte7%2B4KnGEqJytnM0JxmGJCv6KZcAEKSiRPbGTA4PTu%2B0vs15p096BrlKTrwsptQ701AVTfYQDAdfyHFvInffnsvtY2MXjoDs2%2FD%2BKOklw87XkTD9opc1K0fQXFZt1TaUFjo9yP%2BZ5UStjB2Kz524paclhCsslqSAIoCdnMBQtBkVGfb68tzm4nKoEPqSLfJZEH%2Fuf1Do0Ny45QSrJXSSjlzES296IMiRYAaiM%2B5AuZMo%2FqhNac44UTO3n%2BLXswvMsewh46rHLu75QvDu1ny3ShjsC%2FtPuSgQ0MinFQe4woMLNcTqJqrPADF14OrkHjJqT9IsTo1tMWYuEqHmwv6WRwCG3mnfAdgiuPGvIpsKICdYtvFypJdge307aqgzp8aMuwJGCqJTr90LLkJ8r9dZ1OKxCxV%2FXAPbHBlLajtPMUV55RnkdJWo25yHyEWl0xxHc75exMiZY7FFdq6xWt5Pw6EeEmQRD3La4CsnU%2BOO54Nt9AAu%2B57XfTpjVoN%2FQWrtuSY1DuQnX707HLOJn%2FJQtgTVacwL2WUCU%2FukmNyf7wTHJgHhNhKP55hXD%2BQMeYqlflQLF9lQM1MI7l4b0GOqUBqcsBIbnBQ6QPJDNx669SyTbUAXZbi2oi%2FhGGansEK8iBzoKP7uvYNYfG2I3hVr8Ir2E1rfHz8bkOqSNckZCICoN%2Ft3SUVPirFPmtizFV7IYn3o8jCFCEz0ET6nqNHpH%2FZuRmVPMB6rQjfdiT0ZTrr81dtJIaEgrGOq3%2FnGd9umNCpHDRSsBYVsbQCjPbxWVopWu1iK4YOSGP1htZoeiSlVzOdmkR&X-Amz-Signature=5d758fbb1f228f5da520949979efcc448426071a10031859f045dac086df1a17&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE3FSOAU%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEJruMUmU97pKu2dI5QPocvJA0lpqSuxA3OTaiio%2FOEwIgXjBFUiNWeP2O%2FNEAyjP3mmwGT1L7p4C87mgbLr0ancQqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnMStLGgieYQ5YFCircA1D%2BIxyai0TQJ1Ukm%2BpMRm3I4ykI4gPMBFAlPjE0lJenLDoyo%2Bte7%2B4KnGEqJytnM0JxmGJCv6KZcAEKSiRPbGTA4PTu%2B0vs15p096BrlKTrwsptQ701AVTfYQDAdfyHFvInffnsvtY2MXjoDs2%2FD%2BKOklw87XkTD9opc1K0fQXFZt1TaUFjo9yP%2BZ5UStjB2Kz524paclhCsslqSAIoCdnMBQtBkVGfb68tzm4nKoEPqSLfJZEH%2Fuf1Do0Ny45QSrJXSSjlzES296IMiRYAaiM%2B5AuZMo%2FqhNac44UTO3n%2BLXswvMsewh46rHLu75QvDu1ny3ShjsC%2FtPuSgQ0MinFQe4woMLNcTqJqrPADF14OrkHjJqT9IsTo1tMWYuEqHmwv6WRwCG3mnfAdgiuPGvIpsKICdYtvFypJdge307aqgzp8aMuwJGCqJTr90LLkJ8r9dZ1OKxCxV%2FXAPbHBlLajtPMUV55RnkdJWo25yHyEWl0xxHc75exMiZY7FFdq6xWt5Pw6EeEmQRD3La4CsnU%2BOO54Nt9AAu%2B57XfTpjVoN%2FQWrtuSY1DuQnX707HLOJn%2FJQtgTVacwL2WUCU%2FukmNyf7wTHJgHhNhKP55hXD%2BQMeYqlflQLF9lQM1MI7l4b0GOqUBqcsBIbnBQ6QPJDNx669SyTbUAXZbi2oi%2FhGGansEK8iBzoKP7uvYNYfG2I3hVr8Ir2E1rfHz8bkOqSNckZCICoN%2Ft3SUVPirFPmtizFV7IYn3o8jCFCEz0ET6nqNHpH%2FZuRmVPMB6rQjfdiT0ZTrr81dtJIaEgrGOq3%2FnGd9umNCpHDRSsBYVsbQCjPbxWVopWu1iK4YOSGP1htZoeiSlVzOdmkR&X-Amz-Signature=3bc9fef1eff8e1ba6970771eb1eb6a83bb53314547787278567474080734411d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
