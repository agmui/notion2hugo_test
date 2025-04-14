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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOZQG3CE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFngwyKiaYe9zu6IzmtU9qKM5FdWDOOeMPxE4kI9zkfQIgJlVNrzy%2Blw1cgbs1eFvaY04EcFxy3LdSG0ou2b9e940qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLMMgrBVFr7XiCJnyrcA%2FfKTxlIVO8f3KwAau3F1uxW1Y4V80jA2WlajZrs%2FDpGMXs6HkWcU1oxT8GScRGp5lkZV4E%2B27NSml7T%2F3HX4657Q1ILSygY0T5liHz0WyrmTqrtgs7EVtRdoE9PPl8au%2BDzJm43TV%2F9Yvp9zv65Lz04%2BrVMiPKPV2zQCElz64Mc2wpLNMZ9pwB8AR%2Ff51C4wC64MO1RW4fAFdneqVnlTUHPPlnVsovl1FNR%2BCixnacHRvy4B78pM1e%2FvyACJZjYMRcV4uiY6cCLs0YOcqT1a4ICcIPtNdF54EqSUwxqsVOv9dR4dbXACA3rLtMPnSsqAs7%2FQ8r%2FKdSPEhVwZMCARzM1ktMsVafLK5f7JN2rOGhyYVtBRq%2BEKOQuocbrYlCoxo%2BNn8Z3os2heXxMEd03pJzLc%2BeT62SHndj2ykHW6YLMgidJrTsvjcfUbfwNUGBd%2BW7Y%2FFQlKr9%2BBkl1nd%2B9Cy%2B9R3kKy20n%2FTaAfamkoQhWh6iAOdix1YWLamz9SHyZhPS9QJffmeLhZkHmaFwQ6Rkec79AiMIXPc%2F2ZH4y0gaccU%2BtZaqMaxQeZITdIQlSW8omCccAO4v0j2iXGtzOlBEmhtujv5QVVnWkatlcaxZllgVBBI57ZVASlGsfMNiQ8r8GOqUBSbiI8izZr%2BJ1oZ%2FsoOHWpJkjG%2Fl1javoOdmPosl7gYa2hfweMC2QaQ%2FiU%2F0NEl%2BZjiO2DZUivkfJLC9KFlM%2BLBF5qWlv1E91v58rmXIRxAbr8QSpRgEjJTqpBadCpLcFIi%2BwQ%2FTlicp4wSlHkznklhOsMia4BvKmW0NbLVr3JltefD7zQRfeheVVr4D1IKEKOPO4ksNeQ5hsHg9sHOvNs%2B9uJi98&X-Amz-Signature=4f2f62e825a2be7353e74374f56d363ffdcbfabaf219b7d955594c381256dc9a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOZQG3CE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFngwyKiaYe9zu6IzmtU9qKM5FdWDOOeMPxE4kI9zkfQIgJlVNrzy%2Blw1cgbs1eFvaY04EcFxy3LdSG0ou2b9e940qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLMMgrBVFr7XiCJnyrcA%2FfKTxlIVO8f3KwAau3F1uxW1Y4V80jA2WlajZrs%2FDpGMXs6HkWcU1oxT8GScRGp5lkZV4E%2B27NSml7T%2F3HX4657Q1ILSygY0T5liHz0WyrmTqrtgs7EVtRdoE9PPl8au%2BDzJm43TV%2F9Yvp9zv65Lz04%2BrVMiPKPV2zQCElz64Mc2wpLNMZ9pwB8AR%2Ff51C4wC64MO1RW4fAFdneqVnlTUHPPlnVsovl1FNR%2BCixnacHRvy4B78pM1e%2FvyACJZjYMRcV4uiY6cCLs0YOcqT1a4ICcIPtNdF54EqSUwxqsVOv9dR4dbXACA3rLtMPnSsqAs7%2FQ8r%2FKdSPEhVwZMCARzM1ktMsVafLK5f7JN2rOGhyYVtBRq%2BEKOQuocbrYlCoxo%2BNn8Z3os2heXxMEd03pJzLc%2BeT62SHndj2ykHW6YLMgidJrTsvjcfUbfwNUGBd%2BW7Y%2FFQlKr9%2BBkl1nd%2B9Cy%2B9R3kKy20n%2FTaAfamkoQhWh6iAOdix1YWLamz9SHyZhPS9QJffmeLhZkHmaFwQ6Rkec79AiMIXPc%2F2ZH4y0gaccU%2BtZaqMaxQeZITdIQlSW8omCccAO4v0j2iXGtzOlBEmhtujv5QVVnWkatlcaxZllgVBBI57ZVASlGsfMNiQ8r8GOqUBSbiI8izZr%2BJ1oZ%2FsoOHWpJkjG%2Fl1javoOdmPosl7gYa2hfweMC2QaQ%2FiU%2F0NEl%2BZjiO2DZUivkfJLC9KFlM%2BLBF5qWlv1E91v58rmXIRxAbr8QSpRgEjJTqpBadCpLcFIi%2BwQ%2FTlicp4wSlHkznklhOsMia4BvKmW0NbLVr3JltefD7zQRfeheVVr4D1IKEKOPO4ksNeQ5hsHg9sHOvNs%2B9uJi98&X-Amz-Signature=019aea2c5edc5b9b13ce581cbaf15ae203b76c976510bd775f945026603a4f91&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOZQG3CE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFngwyKiaYe9zu6IzmtU9qKM5FdWDOOeMPxE4kI9zkfQIgJlVNrzy%2Blw1cgbs1eFvaY04EcFxy3LdSG0ou2b9e940qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLMMgrBVFr7XiCJnyrcA%2FfKTxlIVO8f3KwAau3F1uxW1Y4V80jA2WlajZrs%2FDpGMXs6HkWcU1oxT8GScRGp5lkZV4E%2B27NSml7T%2F3HX4657Q1ILSygY0T5liHz0WyrmTqrtgs7EVtRdoE9PPl8au%2BDzJm43TV%2F9Yvp9zv65Lz04%2BrVMiPKPV2zQCElz64Mc2wpLNMZ9pwB8AR%2Ff51C4wC64MO1RW4fAFdneqVnlTUHPPlnVsovl1FNR%2BCixnacHRvy4B78pM1e%2FvyACJZjYMRcV4uiY6cCLs0YOcqT1a4ICcIPtNdF54EqSUwxqsVOv9dR4dbXACA3rLtMPnSsqAs7%2FQ8r%2FKdSPEhVwZMCARzM1ktMsVafLK5f7JN2rOGhyYVtBRq%2BEKOQuocbrYlCoxo%2BNn8Z3os2heXxMEd03pJzLc%2BeT62SHndj2ykHW6YLMgidJrTsvjcfUbfwNUGBd%2BW7Y%2FFQlKr9%2BBkl1nd%2B9Cy%2B9R3kKy20n%2FTaAfamkoQhWh6iAOdix1YWLamz9SHyZhPS9QJffmeLhZkHmaFwQ6Rkec79AiMIXPc%2F2ZH4y0gaccU%2BtZaqMaxQeZITdIQlSW8omCccAO4v0j2iXGtzOlBEmhtujv5QVVnWkatlcaxZllgVBBI57ZVASlGsfMNiQ8r8GOqUBSbiI8izZr%2BJ1oZ%2FsoOHWpJkjG%2Fl1javoOdmPosl7gYa2hfweMC2QaQ%2FiU%2F0NEl%2BZjiO2DZUivkfJLC9KFlM%2BLBF5qWlv1E91v58rmXIRxAbr8QSpRgEjJTqpBadCpLcFIi%2BwQ%2FTlicp4wSlHkznklhOsMia4BvKmW0NbLVr3JltefD7zQRfeheVVr4D1IKEKOPO4ksNeQ5hsHg9sHOvNs%2B9uJi98&X-Amz-Signature=912cd8ab458596349658103742d096968e1ed49ac96fb22a7587bdda0be582c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
