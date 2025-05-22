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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUNWGQWX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIFhLOQafttaCSBD2e%2FmBzW2Fvxx3diVlLGjbG2KNTl47AiEAiGmX5GuaZyZIAST2b4uNjb57ty00hkOPWtv2%2BT7FHUsqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUhr1xdUtKiTqtAIircA6fVE0cXXOglMgwL0%2F5%2B8Yww54iida%2Bk4HseqAPiLlcr28Zl5UjEEOFCjHnuDsXujwYSSFek%2BbIFO%2F0RUxOav4c%2Br186owG%2Fn%2BxsKjm54hF%2B0cgW5qkC42kuySX7tPXQaNVeVMHKnT6s38c%2Fl7Nd4T2R8CKwBBHMn0k27uWWz7szDlciXq3l7Ii9JHIjugv1FJBKgw97rURtH%2B4GNAZu23uB3Hd0HSPPOLlJZngPO3clTmuOtyrGchi7a3v99K5%2F6xaDCHrvZKFENx2B0%2Fvyxb14JRD40ODQCm%2FypFhKW4w6csNOvs08zSHxgioN3v9MmZYW0JY5MuNumtEDVgpN0kdrIIW5PgaJWxihGOITVgnebyr9EK%2BqjR2KhWft7j2%2FfmwUsnVRFkvzxMqiLC3lJYg%2B3O1lP9I5ZG8e2E6sHgZ7t5u3luerImyATC2n50%2FPcOAO9RfSuJQufMxd8TAyBCUJYiQUQM%2FiuXDijZuBDnJOSsQQJj0%2F5BRKlCopmK4vuRSePL4QiF2h3N10R8o81LLAooej1j3kymr%2FlO3Cn6eTk%2BbEzah40W9UDi2iRKqIhxtZxiUi8C2VR5OGPQoJGgcOd9TeOJFhavpXoRO8RLkDu938fJi9Rq%2B7zmeWMPL2usEGOqUBBB7IP730kmCqO%2F28GgWXd0NApoCYtqqKa9DkSVvxXX0XdgQAYFGhNu45qQQluGz0zLvRTi%2B1rFp%2F8UW1O0WN10KB6tXsRUM2beS83pNOla9Hk6fShyVI5qm0AoSlMdjQyOPhUySE7n%2BXkBynF1grhg9%2FeyPmihRPfLeeDjmwW%2FtjoMDLOcfm0irP%2FzeQ8jHvpIPPi7hum0KBPNtjn8%2Fy50h8A4rJ&X-Amz-Signature=15ae5dc01ea319489e4ffd76dace3f5f6aba1241b7b6039a7fb265deee65aa49&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUNWGQWX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIFhLOQafttaCSBD2e%2FmBzW2Fvxx3diVlLGjbG2KNTl47AiEAiGmX5GuaZyZIAST2b4uNjb57ty00hkOPWtv2%2BT7FHUsqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUhr1xdUtKiTqtAIircA6fVE0cXXOglMgwL0%2F5%2B8Yww54iida%2Bk4HseqAPiLlcr28Zl5UjEEOFCjHnuDsXujwYSSFek%2BbIFO%2F0RUxOav4c%2Br186owG%2Fn%2BxsKjm54hF%2B0cgW5qkC42kuySX7tPXQaNVeVMHKnT6s38c%2Fl7Nd4T2R8CKwBBHMn0k27uWWz7szDlciXq3l7Ii9JHIjugv1FJBKgw97rURtH%2B4GNAZu23uB3Hd0HSPPOLlJZngPO3clTmuOtyrGchi7a3v99K5%2F6xaDCHrvZKFENx2B0%2Fvyxb14JRD40ODQCm%2FypFhKW4w6csNOvs08zSHxgioN3v9MmZYW0JY5MuNumtEDVgpN0kdrIIW5PgaJWxihGOITVgnebyr9EK%2BqjR2KhWft7j2%2FfmwUsnVRFkvzxMqiLC3lJYg%2B3O1lP9I5ZG8e2E6sHgZ7t5u3luerImyATC2n50%2FPcOAO9RfSuJQufMxd8TAyBCUJYiQUQM%2FiuXDijZuBDnJOSsQQJj0%2F5BRKlCopmK4vuRSePL4QiF2h3N10R8o81LLAooej1j3kymr%2FlO3Cn6eTk%2BbEzah40W9UDi2iRKqIhxtZxiUi8C2VR5OGPQoJGgcOd9TeOJFhavpXoRO8RLkDu938fJi9Rq%2B7zmeWMPL2usEGOqUBBB7IP730kmCqO%2F28GgWXd0NApoCYtqqKa9DkSVvxXX0XdgQAYFGhNu45qQQluGz0zLvRTi%2B1rFp%2F8UW1O0WN10KB6tXsRUM2beS83pNOla9Hk6fShyVI5qm0AoSlMdjQyOPhUySE7n%2BXkBynF1grhg9%2FeyPmihRPfLeeDjmwW%2FtjoMDLOcfm0irP%2FzeQ8jHvpIPPi7hum0KBPNtjn8%2Fy50h8A4rJ&X-Amz-Signature=2085a87c1fc1dafebecd2891891af5afda39a0c88d0595f81afd6adfa437661d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUNWGQWX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIFhLOQafttaCSBD2e%2FmBzW2Fvxx3diVlLGjbG2KNTl47AiEAiGmX5GuaZyZIAST2b4uNjb57ty00hkOPWtv2%2BT7FHUsqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUhr1xdUtKiTqtAIircA6fVE0cXXOglMgwL0%2F5%2B8Yww54iida%2Bk4HseqAPiLlcr28Zl5UjEEOFCjHnuDsXujwYSSFek%2BbIFO%2F0RUxOav4c%2Br186owG%2Fn%2BxsKjm54hF%2B0cgW5qkC42kuySX7tPXQaNVeVMHKnT6s38c%2Fl7Nd4T2R8CKwBBHMn0k27uWWz7szDlciXq3l7Ii9JHIjugv1FJBKgw97rURtH%2B4GNAZu23uB3Hd0HSPPOLlJZngPO3clTmuOtyrGchi7a3v99K5%2F6xaDCHrvZKFENx2B0%2Fvyxb14JRD40ODQCm%2FypFhKW4w6csNOvs08zSHxgioN3v9MmZYW0JY5MuNumtEDVgpN0kdrIIW5PgaJWxihGOITVgnebyr9EK%2BqjR2KhWft7j2%2FfmwUsnVRFkvzxMqiLC3lJYg%2B3O1lP9I5ZG8e2E6sHgZ7t5u3luerImyATC2n50%2FPcOAO9RfSuJQufMxd8TAyBCUJYiQUQM%2FiuXDijZuBDnJOSsQQJj0%2F5BRKlCopmK4vuRSePL4QiF2h3N10R8o81LLAooej1j3kymr%2FlO3Cn6eTk%2BbEzah40W9UDi2iRKqIhxtZxiUi8C2VR5OGPQoJGgcOd9TeOJFhavpXoRO8RLkDu938fJi9Rq%2B7zmeWMPL2usEGOqUBBB7IP730kmCqO%2F28GgWXd0NApoCYtqqKa9DkSVvxXX0XdgQAYFGhNu45qQQluGz0zLvRTi%2B1rFp%2F8UW1O0WN10KB6tXsRUM2beS83pNOla9Hk6fShyVI5qm0AoSlMdjQyOPhUySE7n%2BXkBynF1grhg9%2FeyPmihRPfLeeDjmwW%2FtjoMDLOcfm0irP%2FzeQ8jHvpIPPi7hum0KBPNtjn8%2Fy50h8A4rJ&X-Amz-Signature=5a873913cef32ab2a632fa4adeefe8b21f04d954edc9d31e4f4cdda9a6087732&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
