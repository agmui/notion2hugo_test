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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXJ6ZLM%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0mPtVYWLiF0oFVGVBQkNiR9iG3jj5kT%2FWxlavMylAOAiEA1WcgZYI1T5eLa5CW6k1KXqZXdW0rbeC9%2BoYfes4BV%2FMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCZ5t1BWWicxkq5FCrcAxjrqaoD1uj5gN%2BLjqwffN71Ra9fRmfs8KcIPMxv5woev1Mh750pULO4ZvMhiRi9azISmbaSm4V%2F98t%2B00412nsMVm2XyagZQKbzhGks5k5FJIe32dXhN%2BLgml%2FlRUu%2BbnsvHGrvfPx%2BRfTqH%2B2z6o06mQqxUd7YI9TDgcigVPZV0Ht968lghdbEvXd7JG%2B%2FHMHiBAs%2FWPxNKzwC2krwV2OPqPm7TIqPe8u8wSc02CrtXJTTsoJjl%2B5E2C2NJjKPyMjggas4gPRS5grJOUmiBrGBB3FnbujwUXpa0x%2FmM5uJukGq2bUYWo4phPVZfpUHZ%2FnoDrJh5rwU4pIG43bFYlYa8siL547BX8zBzvVKYDL3rMLxpUW0ugzOUvemFlEOUIRO3Jq%2BFYnfcXBJuILfYlI3JhlUEuRZO2hoe%2Ftjv5zKG4Z%2FafJ2uHp8Ne25qVfCnVWOSRJavh%2FO9Dk3uhMoGbRmHMDHQaEk1vuRiqnmeJga6EZ534E8Ssaxad00eGI4zzQdjg01PzUmRnXA4xF3Ct1bExx9d40NQ6xjWZODmu%2BHwcnDcFlimNIK9txQM07QfL0DUWhlX3OyG4cZiD4GyBfOXA2ITtW1AIiIwf2qvze812wiTG0ArYT4i%2BkyMMj178MGOqUBVJOYhY7lL7GhwTczEgoONInucYbMSqNOPmmdThDt6Z0MIK3t37eokZC35Su3ghoXoBBcgzdBaapTAz5GKXoyxd2PvYs3pMi22riF1j4KAz2qHevt5JPYUYaOEiedK%2FdkjfdXwoCVCkkYBA%2FWhkCyHpC5%2BcDa31rytwT%2BbOnRdH1zaGb%2BJnq9rnMqRbnJG18SBQAEg5THlaSzu717kZsuPqTXaS66&X-Amz-Signature=b156788a13176980a4a49c77d3aa2254d0c614e9dcb57d1c331aae0eb3a8eccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXJ6ZLM%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0mPtVYWLiF0oFVGVBQkNiR9iG3jj5kT%2FWxlavMylAOAiEA1WcgZYI1T5eLa5CW6k1KXqZXdW0rbeC9%2BoYfes4BV%2FMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCZ5t1BWWicxkq5FCrcAxjrqaoD1uj5gN%2BLjqwffN71Ra9fRmfs8KcIPMxv5woev1Mh750pULO4ZvMhiRi9azISmbaSm4V%2F98t%2B00412nsMVm2XyagZQKbzhGks5k5FJIe32dXhN%2BLgml%2FlRUu%2BbnsvHGrvfPx%2BRfTqH%2B2z6o06mQqxUd7YI9TDgcigVPZV0Ht968lghdbEvXd7JG%2B%2FHMHiBAs%2FWPxNKzwC2krwV2OPqPm7TIqPe8u8wSc02CrtXJTTsoJjl%2B5E2C2NJjKPyMjggas4gPRS5grJOUmiBrGBB3FnbujwUXpa0x%2FmM5uJukGq2bUYWo4phPVZfpUHZ%2FnoDrJh5rwU4pIG43bFYlYa8siL547BX8zBzvVKYDL3rMLxpUW0ugzOUvemFlEOUIRO3Jq%2BFYnfcXBJuILfYlI3JhlUEuRZO2hoe%2Ftjv5zKG4Z%2FafJ2uHp8Ne25qVfCnVWOSRJavh%2FO9Dk3uhMoGbRmHMDHQaEk1vuRiqnmeJga6EZ534E8Ssaxad00eGI4zzQdjg01PzUmRnXA4xF3Ct1bExx9d40NQ6xjWZODmu%2BHwcnDcFlimNIK9txQM07QfL0DUWhlX3OyG4cZiD4GyBfOXA2ITtW1AIiIwf2qvze812wiTG0ArYT4i%2BkyMMj178MGOqUBVJOYhY7lL7GhwTczEgoONInucYbMSqNOPmmdThDt6Z0MIK3t37eokZC35Su3ghoXoBBcgzdBaapTAz5GKXoyxd2PvYs3pMi22riF1j4KAz2qHevt5JPYUYaOEiedK%2FdkjfdXwoCVCkkYBA%2FWhkCyHpC5%2BcDa31rytwT%2BbOnRdH1zaGb%2BJnq9rnMqRbnJG18SBQAEg5THlaSzu717kZsuPqTXaS66&X-Amz-Signature=71cc26ba90a04b7d0d99630f12093b896869656f1e126b5b2dac94fb5d312c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXJ6ZLM%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0mPtVYWLiF0oFVGVBQkNiR9iG3jj5kT%2FWxlavMylAOAiEA1WcgZYI1T5eLa5CW6k1KXqZXdW0rbeC9%2BoYfes4BV%2FMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCZ5t1BWWicxkq5FCrcAxjrqaoD1uj5gN%2BLjqwffN71Ra9fRmfs8KcIPMxv5woev1Mh750pULO4ZvMhiRi9azISmbaSm4V%2F98t%2B00412nsMVm2XyagZQKbzhGks5k5FJIe32dXhN%2BLgml%2FlRUu%2BbnsvHGrvfPx%2BRfTqH%2B2z6o06mQqxUd7YI9TDgcigVPZV0Ht968lghdbEvXd7JG%2B%2FHMHiBAs%2FWPxNKzwC2krwV2OPqPm7TIqPe8u8wSc02CrtXJTTsoJjl%2B5E2C2NJjKPyMjggas4gPRS5grJOUmiBrGBB3FnbujwUXpa0x%2FmM5uJukGq2bUYWo4phPVZfpUHZ%2FnoDrJh5rwU4pIG43bFYlYa8siL547BX8zBzvVKYDL3rMLxpUW0ugzOUvemFlEOUIRO3Jq%2BFYnfcXBJuILfYlI3JhlUEuRZO2hoe%2Ftjv5zKG4Z%2FafJ2uHp8Ne25qVfCnVWOSRJavh%2FO9Dk3uhMoGbRmHMDHQaEk1vuRiqnmeJga6EZ534E8Ssaxad00eGI4zzQdjg01PzUmRnXA4xF3Ct1bExx9d40NQ6xjWZODmu%2BHwcnDcFlimNIK9txQM07QfL0DUWhlX3OyG4cZiD4GyBfOXA2ITtW1AIiIwf2qvze812wiTG0ArYT4i%2BkyMMj178MGOqUBVJOYhY7lL7GhwTczEgoONInucYbMSqNOPmmdThDt6Z0MIK3t37eokZC35Su3ghoXoBBcgzdBaapTAz5GKXoyxd2PvYs3pMi22riF1j4KAz2qHevt5JPYUYaOEiedK%2FdkjfdXwoCVCkkYBA%2FWhkCyHpC5%2BcDa31rytwT%2BbOnRdH1zaGb%2BJnq9rnMqRbnJG18SBQAEg5THlaSzu717kZsuPqTXaS66&X-Amz-Signature=958adf4ffba907cd6a204e9007ac957bc271cdc82aa918345e0f2074966ff37b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
