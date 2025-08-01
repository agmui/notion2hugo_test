---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZSMB2OL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDehNNR7L8J8NDfJanFqLuP3TqzGXephCKamT2EF5xqHQIge2%2B%2BC0Cd49yfgLsjLAQtC6zGI38VrOMPHMIAUJ1kGi0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICm5qYXMCAwd%2BfxOyrcA4oEgK%2BwY814XqWWxson1G4REDinp18SdfB5VNlHkniYbiq1TLNhdEeh%2FP28fa8%2F0PYomsQVfm2FGve4o50gml8yR4SuH5gydsTnbESdF%2B4VSazM5J0W%2Flzixq%2BPDQQq8qavo7b68jITZ2PuboennKgUWmhJ%2FOWFnRNLvfSWgcXJ%2BXcPtsVYlDjJk4FmoSH%2F%2BTJCOUFEpXa1hbomulqoyUsRFu8tpnfOwx7CnxRetTJb4yFfrmb9sHaDdoKcpiGR%2Bfg4w5P7UnZpCESyGODSr92B%2B9uCWIFB6N1uawbaFfKFLQslHWEJBRrMspN09kQ%2Frww4sG3SDTwZvULFTMTCMvTC1vOBqj5kgQ9yl8oAubJpMUBnNh8UQ%2FW6liihjMC%2BjbxjpOpWmNdc8vrEbD2Oeb5nc5dNh7jXoULgMeLkVxAWtm%2FXt7YDWSOjosfS4ZHFQl%2Fg0VTDc3WGIBP3bcPEVotOo7wWyh5mPnPK5ZmVNYXL6ax%2FxpwPJDSFNdkQmAgT54nIQ4O1T3XagYvXX4eRxXDbrTFCmT62zWeVSRNyIS%2FB3JerX2dMgjOFHJzFoutEQ%2FktuK3Ra2f42gFoe3zVLQMkGna7hwgE6k4Xb8uMUll3IKSW1usZLqBxnjEnMIDutMQGOqUBr%2Fa7xAMRQR3je1fiLV7ex3rwYOej1kvJTz19ybrLJ5EnBsFaOx55RZcKJx3R3AXPPX40dngnww3RAK8%2BQTswp6aE4fcCkGP0fRlzDlTXGbn4btUFy69vvmyKPjbnFXi25udEFVm75nZqhYj08rOmyUntPcDmYqXfUSf471bkcAYfIi0SMoiOa%2FodfEYIUTYphhPPolHcpFl4pm0TL5PHZaHCBkUA&X-Amz-Signature=320424f6f9b8cc29dca7a54527778c2f05a847cf1bff54ea0becdef29285e788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZSMB2OL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDehNNR7L8J8NDfJanFqLuP3TqzGXephCKamT2EF5xqHQIge2%2B%2BC0Cd49yfgLsjLAQtC6zGI38VrOMPHMIAUJ1kGi0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICm5qYXMCAwd%2BfxOyrcA4oEgK%2BwY814XqWWxson1G4REDinp18SdfB5VNlHkniYbiq1TLNhdEeh%2FP28fa8%2F0PYomsQVfm2FGve4o50gml8yR4SuH5gydsTnbESdF%2B4VSazM5J0W%2Flzixq%2BPDQQq8qavo7b68jITZ2PuboennKgUWmhJ%2FOWFnRNLvfSWgcXJ%2BXcPtsVYlDjJk4FmoSH%2F%2BTJCOUFEpXa1hbomulqoyUsRFu8tpnfOwx7CnxRetTJb4yFfrmb9sHaDdoKcpiGR%2Bfg4w5P7UnZpCESyGODSr92B%2B9uCWIFB6N1uawbaFfKFLQslHWEJBRrMspN09kQ%2Frww4sG3SDTwZvULFTMTCMvTC1vOBqj5kgQ9yl8oAubJpMUBnNh8UQ%2FW6liihjMC%2BjbxjpOpWmNdc8vrEbD2Oeb5nc5dNh7jXoULgMeLkVxAWtm%2FXt7YDWSOjosfS4ZHFQl%2Fg0VTDc3WGIBP3bcPEVotOo7wWyh5mPnPK5ZmVNYXL6ax%2FxpwPJDSFNdkQmAgT54nIQ4O1T3XagYvXX4eRxXDbrTFCmT62zWeVSRNyIS%2FB3JerX2dMgjOFHJzFoutEQ%2FktuK3Ra2f42gFoe3zVLQMkGna7hwgE6k4Xb8uMUll3IKSW1usZLqBxnjEnMIDutMQGOqUBr%2Fa7xAMRQR3je1fiLV7ex3rwYOej1kvJTz19ybrLJ5EnBsFaOx55RZcKJx3R3AXPPX40dngnww3RAK8%2BQTswp6aE4fcCkGP0fRlzDlTXGbn4btUFy69vvmyKPjbnFXi25udEFVm75nZqhYj08rOmyUntPcDmYqXfUSf471bkcAYfIi0SMoiOa%2FodfEYIUTYphhPPolHcpFl4pm0TL5PHZaHCBkUA&X-Amz-Signature=a8febf0810f23d1e81e5f36589f12010588f8c61bb058b930b6b952e7478fb81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZSMB2OL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDehNNR7L8J8NDfJanFqLuP3TqzGXephCKamT2EF5xqHQIge2%2B%2BC0Cd49yfgLsjLAQtC6zGI38VrOMPHMIAUJ1kGi0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICm5qYXMCAwd%2BfxOyrcA4oEgK%2BwY814XqWWxson1G4REDinp18SdfB5VNlHkniYbiq1TLNhdEeh%2FP28fa8%2F0PYomsQVfm2FGve4o50gml8yR4SuH5gydsTnbESdF%2B4VSazM5J0W%2Flzixq%2BPDQQq8qavo7b68jITZ2PuboennKgUWmhJ%2FOWFnRNLvfSWgcXJ%2BXcPtsVYlDjJk4FmoSH%2F%2BTJCOUFEpXa1hbomulqoyUsRFu8tpnfOwx7CnxRetTJb4yFfrmb9sHaDdoKcpiGR%2Bfg4w5P7UnZpCESyGODSr92B%2B9uCWIFB6N1uawbaFfKFLQslHWEJBRrMspN09kQ%2Frww4sG3SDTwZvULFTMTCMvTC1vOBqj5kgQ9yl8oAubJpMUBnNh8UQ%2FW6liihjMC%2BjbxjpOpWmNdc8vrEbD2Oeb5nc5dNh7jXoULgMeLkVxAWtm%2FXt7YDWSOjosfS4ZHFQl%2Fg0VTDc3WGIBP3bcPEVotOo7wWyh5mPnPK5ZmVNYXL6ax%2FxpwPJDSFNdkQmAgT54nIQ4O1T3XagYvXX4eRxXDbrTFCmT62zWeVSRNyIS%2FB3JerX2dMgjOFHJzFoutEQ%2FktuK3Ra2f42gFoe3zVLQMkGna7hwgE6k4Xb8uMUll3IKSW1usZLqBxnjEnMIDutMQGOqUBr%2Fa7xAMRQR3je1fiLV7ex3rwYOej1kvJTz19ybrLJ5EnBsFaOx55RZcKJx3R3AXPPX40dngnww3RAK8%2BQTswp6aE4fcCkGP0fRlzDlTXGbn4btUFy69vvmyKPjbnFXi25udEFVm75nZqhYj08rOmyUntPcDmYqXfUSf471bkcAYfIi0SMoiOa%2FodfEYIUTYphhPPolHcpFl4pm0TL5PHZaHCBkUA&X-Amz-Signature=c090df7a952324c52430ab9565491f5dcf676baeeed01a1440ac2a009a0b3378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
