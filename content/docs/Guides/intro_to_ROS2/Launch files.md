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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466727FXS4E%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmfe0RPdUxxAfsbhK%2Bd%2FxXJnQL%2F4525%2FAUqP15VNS7aAiEAvWMYvdyryRAsPN1Fp2xyt6wJd0sSEzZUN7en%2FoidHz4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMXeZ6Htak%2BknJJvcyrcAwxEe4EYzBjk7%2BMOwMLL3rC1NnGV6SpYzFg8UyiEmrOAsOw6vnphcENWHvy%2FHRH%2F5LBM9%2BDq4LCSoOM7i4eiEmCJSVANhfSLEt8sV5vxqeT10fLyTkyXdup3eaRciYesNrSl9OltOhckXJit%2BIFeO4Gz4su4CTy29B8rzj0fKd7B5KNcntUDdj0Rosa4FKJEaSs9kwfrGN0E2kIOFvhC6ocX4Dx8AVHD0%2BI3w30w0KOjzLicMzRBHsmty9CscXOUpsvkR2BwCyMXIqgAgVhhN%2BesibHlmqDh3M%2Bfq%2BeeDOGk9%2FmkSWlvc1%2BZ35zZQ3TZyomuqby1wab%2BviTeTfw90nj0ccsgBzYXO3aNUXgzOGu9B8ELSK7jStYTuxO4%2B0rH8f9ts%2BO%2FIHyFL8A2NeiDWGwCulKh0r7JuNfOXCmrfrKeA8CRHTr6rEIACzm9UHALE0HHQ8JliuHObZDW3mqroxhrgRLPj4FYIH37kfOFzGNcXVPHRcXdO3jUZ3d34YphyuJKdEzLkplRrbyTGEG1G4rZztwBWjXrlUUG82j9kC6tMESKag8KOpHyh1enWYTf9kkU6DT0Fm2AoORF8ctO2kvpPWZSAMQGVo4Z4LqAYaFCjJ3QX2Lin6%2Bx51NrMJeour0GOqUBPn9twyQFT94%2FEBfCvZVd%2Bue%2Fvfg7Brw6jivQznVvWZcLM%2F4PeLyggUcTPLHSXRkNCkNcbKBaJD4F2H9TMCt0Bqrp0qFCo2rNPRKq1aOD3XqogOxEihrmPc0vK1MF7CpgjUkVxNNmIJEzAyU9lGewBZmiKzUI6xtRhbpIYVEqg67qyhaOL8vc6XEDddLvA7z4MF09NhtCC79zpouNBucvFwNBUBGk&X-Amz-Signature=d409b1767645683c0e530046ac3b4db952e6f7c0b1ffc5756f0870a5db8fd2c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466727FXS4E%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmfe0RPdUxxAfsbhK%2Bd%2FxXJnQL%2F4525%2FAUqP15VNS7aAiEAvWMYvdyryRAsPN1Fp2xyt6wJd0sSEzZUN7en%2FoidHz4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMXeZ6Htak%2BknJJvcyrcAwxEe4EYzBjk7%2BMOwMLL3rC1NnGV6SpYzFg8UyiEmrOAsOw6vnphcENWHvy%2FHRH%2F5LBM9%2BDq4LCSoOM7i4eiEmCJSVANhfSLEt8sV5vxqeT10fLyTkyXdup3eaRciYesNrSl9OltOhckXJit%2BIFeO4Gz4su4CTy29B8rzj0fKd7B5KNcntUDdj0Rosa4FKJEaSs9kwfrGN0E2kIOFvhC6ocX4Dx8AVHD0%2BI3w30w0KOjzLicMzRBHsmty9CscXOUpsvkR2BwCyMXIqgAgVhhN%2BesibHlmqDh3M%2Bfq%2BeeDOGk9%2FmkSWlvc1%2BZ35zZQ3TZyomuqby1wab%2BviTeTfw90nj0ccsgBzYXO3aNUXgzOGu9B8ELSK7jStYTuxO4%2B0rH8f9ts%2BO%2FIHyFL8A2NeiDWGwCulKh0r7JuNfOXCmrfrKeA8CRHTr6rEIACzm9UHALE0HHQ8JliuHObZDW3mqroxhrgRLPj4FYIH37kfOFzGNcXVPHRcXdO3jUZ3d34YphyuJKdEzLkplRrbyTGEG1G4rZztwBWjXrlUUG82j9kC6tMESKag8KOpHyh1enWYTf9kkU6DT0Fm2AoORF8ctO2kvpPWZSAMQGVo4Z4LqAYaFCjJ3QX2Lin6%2Bx51NrMJeour0GOqUBPn9twyQFT94%2FEBfCvZVd%2Bue%2Fvfg7Brw6jivQznVvWZcLM%2F4PeLyggUcTPLHSXRkNCkNcbKBaJD4F2H9TMCt0Bqrp0qFCo2rNPRKq1aOD3XqogOxEihrmPc0vK1MF7CpgjUkVxNNmIJEzAyU9lGewBZmiKzUI6xtRhbpIYVEqg67qyhaOL8vc6XEDddLvA7z4MF09NhtCC79zpouNBucvFwNBUBGk&X-Amz-Signature=8982623245a8812f61fef702856d1375839cc4faaa374cc2684fffc56e87225e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466727FXS4E%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmfe0RPdUxxAfsbhK%2Bd%2FxXJnQL%2F4525%2FAUqP15VNS7aAiEAvWMYvdyryRAsPN1Fp2xyt6wJd0sSEzZUN7en%2FoidHz4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMXeZ6Htak%2BknJJvcyrcAwxEe4EYzBjk7%2BMOwMLL3rC1NnGV6SpYzFg8UyiEmrOAsOw6vnphcENWHvy%2FHRH%2F5LBM9%2BDq4LCSoOM7i4eiEmCJSVANhfSLEt8sV5vxqeT10fLyTkyXdup3eaRciYesNrSl9OltOhckXJit%2BIFeO4Gz4su4CTy29B8rzj0fKd7B5KNcntUDdj0Rosa4FKJEaSs9kwfrGN0E2kIOFvhC6ocX4Dx8AVHD0%2BI3w30w0KOjzLicMzRBHsmty9CscXOUpsvkR2BwCyMXIqgAgVhhN%2BesibHlmqDh3M%2Bfq%2BeeDOGk9%2FmkSWlvc1%2BZ35zZQ3TZyomuqby1wab%2BviTeTfw90nj0ccsgBzYXO3aNUXgzOGu9B8ELSK7jStYTuxO4%2B0rH8f9ts%2BO%2FIHyFL8A2NeiDWGwCulKh0r7JuNfOXCmrfrKeA8CRHTr6rEIACzm9UHALE0HHQ8JliuHObZDW3mqroxhrgRLPj4FYIH37kfOFzGNcXVPHRcXdO3jUZ3d34YphyuJKdEzLkplRrbyTGEG1G4rZztwBWjXrlUUG82j9kC6tMESKag8KOpHyh1enWYTf9kkU6DT0Fm2AoORF8ctO2kvpPWZSAMQGVo4Z4LqAYaFCjJ3QX2Lin6%2Bx51NrMJeour0GOqUBPn9twyQFT94%2FEBfCvZVd%2Bue%2Fvfg7Brw6jivQznVvWZcLM%2F4PeLyggUcTPLHSXRkNCkNcbKBaJD4F2H9TMCt0Bqrp0qFCo2rNPRKq1aOD3XqogOxEihrmPc0vK1MF7CpgjUkVxNNmIJEzAyU9lGewBZmiKzUI6xtRhbpIYVEqg67qyhaOL8vc6XEDddLvA7z4MF09NhtCC79zpouNBucvFwNBUBGk&X-Amz-Signature=f5ca1b69e9babdd6656a549711e11920e5c9767657e0514669f69bcb6fb884ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
