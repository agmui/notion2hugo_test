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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STICBGX3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgeW9AiklyVAfIIdrWuI77XI5rWjPcB%2Bmd3%2BLr%2B8ml3wIgcKiMkdWOcSVyMpC11YhpcjhkX1%2FMdqOFZD9yW%2BiL8WMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAiF380d9ZwfbNADsCrcA%2BL2njzSUrKLEETeDPK6Xe%2FxUzJyLZdDep3UtXx31UeE4iuzRJ2usnPVvXO0akSII17LRU2Pg%2Bn0RV1WQ7JvEa6IITbQCfFuJxYyqvTw7yjMXA6dNPikDlZct9imkzid301txvv72DERKHXjN5d7ZhFgaTRkyLsb62KLweMvJQkWQM4DDUMPIeqewc%2Fc98WPVrEiEgmh%2Bn26asaViMyUBBT%2FOc2kJX1LBYnBTEGFaVWsfgomehgvaBVZHCtYlv94KvcsXx%2FV3EYCAqRJ%2FFf2DVBhMw22FeQ4RwpXEdDHgF04kOBlOIvPl%2BI1d%2FkUPG7L6czAPXEY9AkbK22%2BQXJ5bX%2FY2Hpm4YTrFhWmJL3Oz%2FbX4MtSKNlPJUzFRB4LrTNCVRXyI2SkbtRiIfzcIXOqQHzlmRu%2ByH5TfE9QqPeb9vaRuMaQ2insa1UcuUrQabseM1TbvrDd9Syx2M7zsXbiWBbawkCzdYRHegg1S1xKeehWdFrugD0Rov9wbC8DPk5R7F95bQB9V5VwoK2iR7Y49fYIyrqoFWPpZetedbbXKFnNRzsQto1ps%2FmFbikPAstcnPHn%2FOySH6OSH1Tk%2F5zvXwidIZ28pXxha4z%2BEps7Y9s8L7NdsVt2OPCrtRE9MK6UuMQGOqUBAKr3vFw%2F8DIKhm2r%2B1cLBph0AVPapa5K693Zy8gNEYQxgQ%2FgFWgFGmbkYrO%2B7ew0510T6XKhaoOCoUL6JcTXfSLELfV0FVS0ICN3g1lagt%2BZ4H3pw8vKk8Eo5PIsn5QNIxekmHdfbMODhMjq2%2FqoHDVhJlSce4b8ozRFeUxsmRViIdMFgDGbBTnoSLC1id9JQFWAT%2Frvf6xnIouXl8W%2Bi1qig3cs&X-Amz-Signature=1b1fafcd9b83a87af3c1e3a61be599213dcd07985bdb718247adf197ada4153b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STICBGX3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgeW9AiklyVAfIIdrWuI77XI5rWjPcB%2Bmd3%2BLr%2B8ml3wIgcKiMkdWOcSVyMpC11YhpcjhkX1%2FMdqOFZD9yW%2BiL8WMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAiF380d9ZwfbNADsCrcA%2BL2njzSUrKLEETeDPK6Xe%2FxUzJyLZdDep3UtXx31UeE4iuzRJ2usnPVvXO0akSII17LRU2Pg%2Bn0RV1WQ7JvEa6IITbQCfFuJxYyqvTw7yjMXA6dNPikDlZct9imkzid301txvv72DERKHXjN5d7ZhFgaTRkyLsb62KLweMvJQkWQM4DDUMPIeqewc%2Fc98WPVrEiEgmh%2Bn26asaViMyUBBT%2FOc2kJX1LBYnBTEGFaVWsfgomehgvaBVZHCtYlv94KvcsXx%2FV3EYCAqRJ%2FFf2DVBhMw22FeQ4RwpXEdDHgF04kOBlOIvPl%2BI1d%2FkUPG7L6czAPXEY9AkbK22%2BQXJ5bX%2FY2Hpm4YTrFhWmJL3Oz%2FbX4MtSKNlPJUzFRB4LrTNCVRXyI2SkbtRiIfzcIXOqQHzlmRu%2ByH5TfE9QqPeb9vaRuMaQ2insa1UcuUrQabseM1TbvrDd9Syx2M7zsXbiWBbawkCzdYRHegg1S1xKeehWdFrugD0Rov9wbC8DPk5R7F95bQB9V5VwoK2iR7Y49fYIyrqoFWPpZetedbbXKFnNRzsQto1ps%2FmFbikPAstcnPHn%2FOySH6OSH1Tk%2F5zvXwidIZ28pXxha4z%2BEps7Y9s8L7NdsVt2OPCrtRE9MK6UuMQGOqUBAKr3vFw%2F8DIKhm2r%2B1cLBph0AVPapa5K693Zy8gNEYQxgQ%2FgFWgFGmbkYrO%2B7ew0510T6XKhaoOCoUL6JcTXfSLELfV0FVS0ICN3g1lagt%2BZ4H3pw8vKk8Eo5PIsn5QNIxekmHdfbMODhMjq2%2FqoHDVhJlSce4b8ozRFeUxsmRViIdMFgDGbBTnoSLC1id9JQFWAT%2Frvf6xnIouXl8W%2Bi1qig3cs&X-Amz-Signature=fac6f984982207ea377f94897e0a63ef3c7c171744bd86930cd7c4962e115d5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STICBGX3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgeW9AiklyVAfIIdrWuI77XI5rWjPcB%2Bmd3%2BLr%2B8ml3wIgcKiMkdWOcSVyMpC11YhpcjhkX1%2FMdqOFZD9yW%2BiL8WMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAiF380d9ZwfbNADsCrcA%2BL2njzSUrKLEETeDPK6Xe%2FxUzJyLZdDep3UtXx31UeE4iuzRJ2usnPVvXO0akSII17LRU2Pg%2Bn0RV1WQ7JvEa6IITbQCfFuJxYyqvTw7yjMXA6dNPikDlZct9imkzid301txvv72DERKHXjN5d7ZhFgaTRkyLsb62KLweMvJQkWQM4DDUMPIeqewc%2Fc98WPVrEiEgmh%2Bn26asaViMyUBBT%2FOc2kJX1LBYnBTEGFaVWsfgomehgvaBVZHCtYlv94KvcsXx%2FV3EYCAqRJ%2FFf2DVBhMw22FeQ4RwpXEdDHgF04kOBlOIvPl%2BI1d%2FkUPG7L6czAPXEY9AkbK22%2BQXJ5bX%2FY2Hpm4YTrFhWmJL3Oz%2FbX4MtSKNlPJUzFRB4LrTNCVRXyI2SkbtRiIfzcIXOqQHzlmRu%2ByH5TfE9QqPeb9vaRuMaQ2insa1UcuUrQabseM1TbvrDd9Syx2M7zsXbiWBbawkCzdYRHegg1S1xKeehWdFrugD0Rov9wbC8DPk5R7F95bQB9V5VwoK2iR7Y49fYIyrqoFWPpZetedbbXKFnNRzsQto1ps%2FmFbikPAstcnPHn%2FOySH6OSH1Tk%2F5zvXwidIZ28pXxha4z%2BEps7Y9s8L7NdsVt2OPCrtRE9MK6UuMQGOqUBAKr3vFw%2F8DIKhm2r%2B1cLBph0AVPapa5K693Zy8gNEYQxgQ%2FgFWgFGmbkYrO%2B7ew0510T6XKhaoOCoUL6JcTXfSLELfV0FVS0ICN3g1lagt%2BZ4H3pw8vKk8Eo5PIsn5QNIxekmHdfbMODhMjq2%2FqoHDVhJlSce4b8ozRFeUxsmRViIdMFgDGbBTnoSLC1id9JQFWAT%2Frvf6xnIouXl8W%2Bi1qig3cs&X-Amz-Signature=d47e86e955cbe2a72654a57cf00eae548eda4791d6dafc5d8d9570313550ef64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
