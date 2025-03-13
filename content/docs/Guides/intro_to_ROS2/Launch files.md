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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFUYSAY2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6R5g%2FlMslFavNJccyfjSM%2BZFbzQGlkADFWZi70t%2BBBQIgPLCD1c69sRveV9EqjUCV6i%2BHAI7MDzRRGA%2F60%2FiMbmoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDH7oDxbDCvBt7YHBircAwmafeu2mDr9Kef7cGbFZMZ7R5wUX8qmDcSBAqwhP04aSEriq%2Fy20MFEDpP4pEtAOmZZt5j3uXZ9%2Bs5SBSmbhyU%2FeQuHhK0AafL2TH22KZFB2LC%2B9LhSuYyYSyn48zPBPkAylStfN5QIRPGmupni571SfXhUQt92UEkLAaZOrEV0joANWFhP2kjdPIt7SzTsp79R59g9nNaJLrRCc0OusZ0dVFvfacuvb0Q%2BvDOoqnH65gRIsuqJixh1awXdFBKlU16rIAnuEPUe28FRPbzfDY2V2NqPXLyp5ijLwTe5vipD9qicddPcXM%2FMl%2BEpom7q2MafqGesM%2BDEXmoPYpjnErQOJaFaU6uoWzKR%2FjaTyKorDEZaKe5RmZcBM0E6X4mnMvxbhtnmd5vx%2BTSO3uXgPCxHLrt5b%2BqfXOEA3wc6KojY0ly4ya%2B2J7wn0mgqb1xD%2F2XMhTfQoUs5Z%2FP%2FOgLIbNxbVCNk2SVXQgsBOz5Kw5T3aGKgSUuSsxYUn6sM08ALuA%2FyqeR6emS6O1oLU8SmpuAbnkeQ26lE4SL3X72b%2BKPsDzYbl8aTxByGYZqn4gOi9ApaaBpT0TYwIQWnXBf3VKIJLwlEtBPyvVpjZvFMCk2sJHj8f%2B2yTfi6u5epMMm0zL4GOqUBEATakHmejmz9S%2FbgGRT0D0aCxeeXc9teqeLDLudM1NyuXBCJBusOAfjzNcvGRiGCK1Mtu4Urg9GhGodAZkPQ9DzNrD9qA6tF9iO0dIyitNqqA%2FKeayIhy8Nd%2Bgxxl3hQAPPQE931KX8cej6xhcJFf3nCURw3dKN31RmGIzDJEa%2F7oaiL4kwbfep6LOLQlQDHTFrwISibXsioeYTCpz15M%2B8E9TFa&X-Amz-Signature=277e80286eb34c371ca14053a4f09883d93dcbe70261ebc35788dc1fd05e5a48&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFUYSAY2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6R5g%2FlMslFavNJccyfjSM%2BZFbzQGlkADFWZi70t%2BBBQIgPLCD1c69sRveV9EqjUCV6i%2BHAI7MDzRRGA%2F60%2FiMbmoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDH7oDxbDCvBt7YHBircAwmafeu2mDr9Kef7cGbFZMZ7R5wUX8qmDcSBAqwhP04aSEriq%2Fy20MFEDpP4pEtAOmZZt5j3uXZ9%2Bs5SBSmbhyU%2FeQuHhK0AafL2TH22KZFB2LC%2B9LhSuYyYSyn48zPBPkAylStfN5QIRPGmupni571SfXhUQt92UEkLAaZOrEV0joANWFhP2kjdPIt7SzTsp79R59g9nNaJLrRCc0OusZ0dVFvfacuvb0Q%2BvDOoqnH65gRIsuqJixh1awXdFBKlU16rIAnuEPUe28FRPbzfDY2V2NqPXLyp5ijLwTe5vipD9qicddPcXM%2FMl%2BEpom7q2MafqGesM%2BDEXmoPYpjnErQOJaFaU6uoWzKR%2FjaTyKorDEZaKe5RmZcBM0E6X4mnMvxbhtnmd5vx%2BTSO3uXgPCxHLrt5b%2BqfXOEA3wc6KojY0ly4ya%2B2J7wn0mgqb1xD%2F2XMhTfQoUs5Z%2FP%2FOgLIbNxbVCNk2SVXQgsBOz5Kw5T3aGKgSUuSsxYUn6sM08ALuA%2FyqeR6emS6O1oLU8SmpuAbnkeQ26lE4SL3X72b%2BKPsDzYbl8aTxByGYZqn4gOi9ApaaBpT0TYwIQWnXBf3VKIJLwlEtBPyvVpjZvFMCk2sJHj8f%2B2yTfi6u5epMMm0zL4GOqUBEATakHmejmz9S%2FbgGRT0D0aCxeeXc9teqeLDLudM1NyuXBCJBusOAfjzNcvGRiGCK1Mtu4Urg9GhGodAZkPQ9DzNrD9qA6tF9iO0dIyitNqqA%2FKeayIhy8Nd%2Bgxxl3hQAPPQE931KX8cej6xhcJFf3nCURw3dKN31RmGIzDJEa%2F7oaiL4kwbfep6LOLQlQDHTFrwISibXsioeYTCpz15M%2B8E9TFa&X-Amz-Signature=0f96837bc4ea412f6cb18ac61cbbda3ade5a6f981c43aacf44776047a851b42e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFUYSAY2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6R5g%2FlMslFavNJccyfjSM%2BZFbzQGlkADFWZi70t%2BBBQIgPLCD1c69sRveV9EqjUCV6i%2BHAI7MDzRRGA%2F60%2FiMbmoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDH7oDxbDCvBt7YHBircAwmafeu2mDr9Kef7cGbFZMZ7R5wUX8qmDcSBAqwhP04aSEriq%2Fy20MFEDpP4pEtAOmZZt5j3uXZ9%2Bs5SBSmbhyU%2FeQuHhK0AafL2TH22KZFB2LC%2B9LhSuYyYSyn48zPBPkAylStfN5QIRPGmupni571SfXhUQt92UEkLAaZOrEV0joANWFhP2kjdPIt7SzTsp79R59g9nNaJLrRCc0OusZ0dVFvfacuvb0Q%2BvDOoqnH65gRIsuqJixh1awXdFBKlU16rIAnuEPUe28FRPbzfDY2V2NqPXLyp5ijLwTe5vipD9qicddPcXM%2FMl%2BEpom7q2MafqGesM%2BDEXmoPYpjnErQOJaFaU6uoWzKR%2FjaTyKorDEZaKe5RmZcBM0E6X4mnMvxbhtnmd5vx%2BTSO3uXgPCxHLrt5b%2BqfXOEA3wc6KojY0ly4ya%2B2J7wn0mgqb1xD%2F2XMhTfQoUs5Z%2FP%2FOgLIbNxbVCNk2SVXQgsBOz5Kw5T3aGKgSUuSsxYUn6sM08ALuA%2FyqeR6emS6O1oLU8SmpuAbnkeQ26lE4SL3X72b%2BKPsDzYbl8aTxByGYZqn4gOi9ApaaBpT0TYwIQWnXBf3VKIJLwlEtBPyvVpjZvFMCk2sJHj8f%2B2yTfi6u5epMMm0zL4GOqUBEATakHmejmz9S%2FbgGRT0D0aCxeeXc9teqeLDLudM1NyuXBCJBusOAfjzNcvGRiGCK1Mtu4Urg9GhGodAZkPQ9DzNrD9qA6tF9iO0dIyitNqqA%2FKeayIhy8Nd%2Bgxxl3hQAPPQE931KX8cej6xhcJFf3nCURw3dKN31RmGIzDJEa%2F7oaiL4kwbfep6LOLQlQDHTFrwISibXsioeYTCpz15M%2B8E9TFa&X-Amz-Signature=cb9670eaf09bcb1d3f30f77bdb3e1754d2953196bc96d4f76800a9ac192a4df2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
