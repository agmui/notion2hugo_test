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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMYKU7PI%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDzVuGWs1OfDrppRfwVV5Z2ABM9ylBfroDV2cPh8IVIBAIhAMFHWcS7R2qFJUqpmunIgbDpBOLPRy7kkBsuw1xdQxstKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtE45cF%2B74iOnSnroq3AOwYIsAevHk1tNPOftac0K3xv8oVfnlSA5JubAfWbmgFjmWPh3JAmQypLM1anAkh1k70PuCvUqDQRun%2FoxN2mM8Hs8zVe%2BhX9PODqD6cURuGKEUbGoEi9tRDiRGgPC3DUJBSRhff7W%2FJAGQA9IHkBcRCcGI4ojtEK%2BNHAk5XncSwtTDnC79sEtJ%2BTmzMiJ3TujX%2F5faQKFs1vBc5Q9WWbly2U29Af7OVIaO%2FU8uj3%2BlDKWFSt0hyKKRZJqlpCc9XR5QruQHetu4KlsVQitygFf3zec4XfqhaKeHmmvEMiwiseYRE1GEa8MqNsv89emDy%2B3MMF2ZYZ4ldYJl9qr%2BAVIcahzkU8bhd7LlTke2YhWJ9xAGNgP3E7p814X7PhX%2BPoMLVeZNCnt%2Bv6N%2BuutL5xosDBmtJEgrO77OQySrW0Guw%2F165fhqhMhJV7rp%2FkP3Sssl2Icg%2BMkgzn9bULJVvQabnAgL1XEALRCmHsUWPkRdk9AO2BqUptfrHyNRBKyZlXmSsWXMREBz3qfNCjgNQ8Y5dWnbwJpPAdrUa02JLitUWWdH1fcpN7Pg72ynx4FA54UfpLhKaIp45fZN3GJiqXcSIjtelzHS3WShtaMgq9f0iMJHFDObdvGsSD1GozDWqeq%2FBjqkAVKKLOsP59J1tkW4IRCfdZ4RdF1J3Uerx9WTWe4Og4J3E0IbzXhacxsyVlJdcL8KAAhsv%2FfRMuTfzIxvoJdZiB6SU8InxBJpwv6TT5uz%2FUBzs46k9sdPqnEa6JFocUAHNvpnaCKa%2Farxa0CBbM8tQywkJjhlQcx%2B%2F%2BY22VmSy9gZGXdFBKEHHHocNu%2B6HSomI3%2Fck0YnYB%2BP%2B8gXPDAN%2BE8yIkAY&X-Amz-Signature=657fe35da06b774de627240bbc340bf7f827278bfed4c2d6be84e6eefbbc5c33&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMYKU7PI%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDzVuGWs1OfDrppRfwVV5Z2ABM9ylBfroDV2cPh8IVIBAIhAMFHWcS7R2qFJUqpmunIgbDpBOLPRy7kkBsuw1xdQxstKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtE45cF%2B74iOnSnroq3AOwYIsAevHk1tNPOftac0K3xv8oVfnlSA5JubAfWbmgFjmWPh3JAmQypLM1anAkh1k70PuCvUqDQRun%2FoxN2mM8Hs8zVe%2BhX9PODqD6cURuGKEUbGoEi9tRDiRGgPC3DUJBSRhff7W%2FJAGQA9IHkBcRCcGI4ojtEK%2BNHAk5XncSwtTDnC79sEtJ%2BTmzMiJ3TujX%2F5faQKFs1vBc5Q9WWbly2U29Af7OVIaO%2FU8uj3%2BlDKWFSt0hyKKRZJqlpCc9XR5QruQHetu4KlsVQitygFf3zec4XfqhaKeHmmvEMiwiseYRE1GEa8MqNsv89emDy%2B3MMF2ZYZ4ldYJl9qr%2BAVIcahzkU8bhd7LlTke2YhWJ9xAGNgP3E7p814X7PhX%2BPoMLVeZNCnt%2Bv6N%2BuutL5xosDBmtJEgrO77OQySrW0Guw%2F165fhqhMhJV7rp%2FkP3Sssl2Icg%2BMkgzn9bULJVvQabnAgL1XEALRCmHsUWPkRdk9AO2BqUptfrHyNRBKyZlXmSsWXMREBz3qfNCjgNQ8Y5dWnbwJpPAdrUa02JLitUWWdH1fcpN7Pg72ynx4FA54UfpLhKaIp45fZN3GJiqXcSIjtelzHS3WShtaMgq9f0iMJHFDObdvGsSD1GozDWqeq%2FBjqkAVKKLOsP59J1tkW4IRCfdZ4RdF1J3Uerx9WTWe4Og4J3E0IbzXhacxsyVlJdcL8KAAhsv%2FfRMuTfzIxvoJdZiB6SU8InxBJpwv6TT5uz%2FUBzs46k9sdPqnEa6JFocUAHNvpnaCKa%2Farxa0CBbM8tQywkJjhlQcx%2B%2F%2BY22VmSy9gZGXdFBKEHHHocNu%2B6HSomI3%2Fck0YnYB%2BP%2B8gXPDAN%2BE8yIkAY&X-Amz-Signature=9877a1f7f96f341966feea479ebc989048456abc0a64f39823e3d4316a9ce6e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMYKU7PI%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDzVuGWs1OfDrppRfwVV5Z2ABM9ylBfroDV2cPh8IVIBAIhAMFHWcS7R2qFJUqpmunIgbDpBOLPRy7kkBsuw1xdQxstKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtE45cF%2B74iOnSnroq3AOwYIsAevHk1tNPOftac0K3xv8oVfnlSA5JubAfWbmgFjmWPh3JAmQypLM1anAkh1k70PuCvUqDQRun%2FoxN2mM8Hs8zVe%2BhX9PODqD6cURuGKEUbGoEi9tRDiRGgPC3DUJBSRhff7W%2FJAGQA9IHkBcRCcGI4ojtEK%2BNHAk5XncSwtTDnC79sEtJ%2BTmzMiJ3TujX%2F5faQKFs1vBc5Q9WWbly2U29Af7OVIaO%2FU8uj3%2BlDKWFSt0hyKKRZJqlpCc9XR5QruQHetu4KlsVQitygFf3zec4XfqhaKeHmmvEMiwiseYRE1GEa8MqNsv89emDy%2B3MMF2ZYZ4ldYJl9qr%2BAVIcahzkU8bhd7LlTke2YhWJ9xAGNgP3E7p814X7PhX%2BPoMLVeZNCnt%2Bv6N%2BuutL5xosDBmtJEgrO77OQySrW0Guw%2F165fhqhMhJV7rp%2FkP3Sssl2Icg%2BMkgzn9bULJVvQabnAgL1XEALRCmHsUWPkRdk9AO2BqUptfrHyNRBKyZlXmSsWXMREBz3qfNCjgNQ8Y5dWnbwJpPAdrUa02JLitUWWdH1fcpN7Pg72ynx4FA54UfpLhKaIp45fZN3GJiqXcSIjtelzHS3WShtaMgq9f0iMJHFDObdvGsSD1GozDWqeq%2FBjqkAVKKLOsP59J1tkW4IRCfdZ4RdF1J3Uerx9WTWe4Og4J3E0IbzXhacxsyVlJdcL8KAAhsv%2FfRMuTfzIxvoJdZiB6SU8InxBJpwv6TT5uz%2FUBzs46k9sdPqnEa6JFocUAHNvpnaCKa%2Farxa0CBbM8tQywkJjhlQcx%2B%2F%2BY22VmSy9gZGXdFBKEHHHocNu%2B6HSomI3%2Fck0YnYB%2BP%2B8gXPDAN%2BE8yIkAY&X-Amz-Signature=0744dab006e4bca8418beaac6219dc7f358171478d09b9b206c3a326c08f68be&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
