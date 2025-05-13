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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTELUPI%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCpkBXuCosXq3%2BRPADWuSWhG6PFuFX8jovukcdbev8LlQIhAOoJnI3CVmLda%2FJTr9A5si6%2BL4LOsJmvM%2FUSSWIeviVKKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywblJ3EnZwgjaBMZgq3APHwf%2B2St17sy0V20A5oGKTbvE2EvyoFMVfoZQJliHuibxBeLVsC7xuoeS5qL5NSm7eRKHa0wbfDXm0Cux%2BDTav44jLIsjXR3vhJVP90V58T5GR4rUO269Nglscqux0rflbpAqwAI4ZmmTo0w5tLhsdiZg4fk%2F57%2Fy3UZyPBID7bhhBuR4OdT1SFjPw8Cc9IjVbtATI4kRsXYaYlZj6WsioU9RP1SqnfdyNHOy7ml5X39V2IyyNfYMdsH0GsDhsT9rmJLykFbQ6B21h%2Fi1luiRg4cRuA07puMRtfh36AXCJDa6nYniObib1rN1oHyU%2B8fXE7GPXTSlSadRGRH4nd6mdsOTl%2BiGsY7qSEsQYPUfFkzClg2u0xgJ9aczKrwDLgwc3Y0WwHOkO7lYV7DKV%2FJnKNXZGrAAG%2BnEGSQPUnZDB0DQi73%2Bqwo2gGXQxD5xyjQX5ts2sWDrIL7WbPPWFBsHgUhstTVuQuBB2GOb91DycFkGweDLlonW%2BZ6gTfPU%2BJ%2BDfGFG3aR3FqJ9obEAPU%2BmfecEk7dbubWvxU9YxTAiJIW2iHrF9cvIq4vBc%2Bi3ikdWPvvKnwL6mYhbFQ%2Fz%2BCkp%2F7XrmaaBC1ckrMlqzjtgbbGh%2F09GH%2B0sgZPSukDCT247BBjqkAdDnqy3uZFDKtukuaxK0osUs5I1dqPxLU77uNN9DQKdQd%2BZl7ulzqdfSykeY2t4EI%2FPRoHFKjEWSe1wmF3sopCAFsg8jwyakgNuj3qcPltW8OHl2GnT5DKVZC68dMz8mX1%2Btmgyjrg3WnK1ETIU1TTnRpWIUp00E3IFaGI8P4HeqnH2Ie%2FtgZOpvddGblguPTqQsPEO0ZOX3RMMdJ%2F9lCzTDq6ac&X-Amz-Signature=c278115d429c534c3c2ea306a2ac50f1b51f0bd06b964a43f326f23256617513&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTELUPI%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCpkBXuCosXq3%2BRPADWuSWhG6PFuFX8jovukcdbev8LlQIhAOoJnI3CVmLda%2FJTr9A5si6%2BL4LOsJmvM%2FUSSWIeviVKKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywblJ3EnZwgjaBMZgq3APHwf%2B2St17sy0V20A5oGKTbvE2EvyoFMVfoZQJliHuibxBeLVsC7xuoeS5qL5NSm7eRKHa0wbfDXm0Cux%2BDTav44jLIsjXR3vhJVP90V58T5GR4rUO269Nglscqux0rflbpAqwAI4ZmmTo0w5tLhsdiZg4fk%2F57%2Fy3UZyPBID7bhhBuR4OdT1SFjPw8Cc9IjVbtATI4kRsXYaYlZj6WsioU9RP1SqnfdyNHOy7ml5X39V2IyyNfYMdsH0GsDhsT9rmJLykFbQ6B21h%2Fi1luiRg4cRuA07puMRtfh36AXCJDa6nYniObib1rN1oHyU%2B8fXE7GPXTSlSadRGRH4nd6mdsOTl%2BiGsY7qSEsQYPUfFkzClg2u0xgJ9aczKrwDLgwc3Y0WwHOkO7lYV7DKV%2FJnKNXZGrAAG%2BnEGSQPUnZDB0DQi73%2Bqwo2gGXQxD5xyjQX5ts2sWDrIL7WbPPWFBsHgUhstTVuQuBB2GOb91DycFkGweDLlonW%2BZ6gTfPU%2BJ%2BDfGFG3aR3FqJ9obEAPU%2BmfecEk7dbubWvxU9YxTAiJIW2iHrF9cvIq4vBc%2Bi3ikdWPvvKnwL6mYhbFQ%2Fz%2BCkp%2F7XrmaaBC1ckrMlqzjtgbbGh%2F09GH%2B0sgZPSukDCT247BBjqkAdDnqy3uZFDKtukuaxK0osUs5I1dqPxLU77uNN9DQKdQd%2BZl7ulzqdfSykeY2t4EI%2FPRoHFKjEWSe1wmF3sopCAFsg8jwyakgNuj3qcPltW8OHl2GnT5DKVZC68dMz8mX1%2Btmgyjrg3WnK1ETIU1TTnRpWIUp00E3IFaGI8P4HeqnH2Ie%2FtgZOpvddGblguPTqQsPEO0ZOX3RMMdJ%2F9lCzTDq6ac&X-Amz-Signature=4242d0c6adf456e99d17f524857166ef0ad2ef7b9432808f078c1991f0fa34e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTELUPI%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCpkBXuCosXq3%2BRPADWuSWhG6PFuFX8jovukcdbev8LlQIhAOoJnI3CVmLda%2FJTr9A5si6%2BL4LOsJmvM%2FUSSWIeviVKKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywblJ3EnZwgjaBMZgq3APHwf%2B2St17sy0V20A5oGKTbvE2EvyoFMVfoZQJliHuibxBeLVsC7xuoeS5qL5NSm7eRKHa0wbfDXm0Cux%2BDTav44jLIsjXR3vhJVP90V58T5GR4rUO269Nglscqux0rflbpAqwAI4ZmmTo0w5tLhsdiZg4fk%2F57%2Fy3UZyPBID7bhhBuR4OdT1SFjPw8Cc9IjVbtATI4kRsXYaYlZj6WsioU9RP1SqnfdyNHOy7ml5X39V2IyyNfYMdsH0GsDhsT9rmJLykFbQ6B21h%2Fi1luiRg4cRuA07puMRtfh36AXCJDa6nYniObib1rN1oHyU%2B8fXE7GPXTSlSadRGRH4nd6mdsOTl%2BiGsY7qSEsQYPUfFkzClg2u0xgJ9aczKrwDLgwc3Y0WwHOkO7lYV7DKV%2FJnKNXZGrAAG%2BnEGSQPUnZDB0DQi73%2Bqwo2gGXQxD5xyjQX5ts2sWDrIL7WbPPWFBsHgUhstTVuQuBB2GOb91DycFkGweDLlonW%2BZ6gTfPU%2BJ%2BDfGFG3aR3FqJ9obEAPU%2BmfecEk7dbubWvxU9YxTAiJIW2iHrF9cvIq4vBc%2Bi3ikdWPvvKnwL6mYhbFQ%2Fz%2BCkp%2F7XrmaaBC1ckrMlqzjtgbbGh%2F09GH%2B0sgZPSukDCT247BBjqkAdDnqy3uZFDKtukuaxK0osUs5I1dqPxLU77uNN9DQKdQd%2BZl7ulzqdfSykeY2t4EI%2FPRoHFKjEWSe1wmF3sopCAFsg8jwyakgNuj3qcPltW8OHl2GnT5DKVZC68dMz8mX1%2Btmgyjrg3WnK1ETIU1TTnRpWIUp00E3IFaGI8P4HeqnH2Ie%2FtgZOpvddGblguPTqQsPEO0ZOX3RMMdJ%2F9lCzTDq6ac&X-Amz-Signature=ce2136afb8850d75cecdbb2e45fbc124b7293c858304125c2df60beee5f9a961&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
