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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFTNET3%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIAjIQSvGIrjpmpZRgRphB9Twl%2FtSGb5uareB1UgUC3BIAiA%2BY3r54Sd6NWEQY9gP0BjUpv%2BwbXCXVrj7RegcKSoOwyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMELRclFeoRbysYjvtKtwDpkp0Ei9BKhTX2OpR%2B0AAtxmSEjD10qzfZSObZYExgXveXWgbytjdqK3%2FEyLS0JhOohX9CXvhlYri8uiIpfRbSvYLlfFRvy9nzPMSMo8RW1QSdauZtJfLswItvzhsgBuH9PT0Pt2zmD%2BDKq7EZqAC%2Fr8X9vUYTgNAhZ6uKFJuv7%2BRo1tT5hzYxq7%2BYfd6s%2FSDFBuMaEyTYURxDpD9xL%2BgaJ2g%2F17jpHjFafIy5x%2BSchY8mebs95i894l5zaCSVQF1SWwXvhRdE26wDtfpIws%2Fu%2F8eL87s03DxK35EqQ0VGI4vCferSdOT1FoHXMk1oD8J7ncM8uQ5B4VvaXUGR%2ByabilWbOl%2B8r4kMN0i1w7cteCmg5lwniGqsVayXOuH5NZWkEcMtevuQtyNWjh2ru3i6RnoMwOvLEK7hpSmdQFnslioQ71yFy5C3Cymk%2BzTw%2B1r%2F4Pb6yR8qao%2FEm4GBthHqQD%2FOhyOHxrwI0m%2BEdTYYtzwk5%2F8CcXwe44T72yp03K%2Bqw89Jvdv%2B580v7uw4eKIoHDs0dI%2Bnzd3qpoLs7sEolb9N%2BhYOJsXk45eDblBzgNEhX4UFJzr1qph6cmHMmlJ1UWoXya0TdslLdkEOMeN0uS75CXFuyQ9pnUSjl4wj%2FzkvAY6pgG17KfcqSpB16S80gY0HQDDeuJIqFYQcEsemMzue4pgdpbFW%2BZvdre4k8l877yXgjXG14xAvz2oESelSdYlcRCBST936cpLe40awlxCDwnu8deioat0LhRgSMGtp9ujpC7bCuYQlic58AEy%2FfIZTxLtOeQQMPXauLqVnq0otvdaaFxDCEzjYlWEYLY0h8aIVyz4vXRXTxrw5K2wCVDZvMVSyySoew%2Fs&X-Amz-Signature=f1e90de58d256c21b7da8cc9aef5875d41904299a5407788feac744f2360167b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFTNET3%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIAjIQSvGIrjpmpZRgRphB9Twl%2FtSGb5uareB1UgUC3BIAiA%2BY3r54Sd6NWEQY9gP0BjUpv%2BwbXCXVrj7RegcKSoOwyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMELRclFeoRbysYjvtKtwDpkp0Ei9BKhTX2OpR%2B0AAtxmSEjD10qzfZSObZYExgXveXWgbytjdqK3%2FEyLS0JhOohX9CXvhlYri8uiIpfRbSvYLlfFRvy9nzPMSMo8RW1QSdauZtJfLswItvzhsgBuH9PT0Pt2zmD%2BDKq7EZqAC%2Fr8X9vUYTgNAhZ6uKFJuv7%2BRo1tT5hzYxq7%2BYfd6s%2FSDFBuMaEyTYURxDpD9xL%2BgaJ2g%2F17jpHjFafIy5x%2BSchY8mebs95i894l5zaCSVQF1SWwXvhRdE26wDtfpIws%2Fu%2F8eL87s03DxK35EqQ0VGI4vCferSdOT1FoHXMk1oD8J7ncM8uQ5B4VvaXUGR%2ByabilWbOl%2B8r4kMN0i1w7cteCmg5lwniGqsVayXOuH5NZWkEcMtevuQtyNWjh2ru3i6RnoMwOvLEK7hpSmdQFnslioQ71yFy5C3Cymk%2BzTw%2B1r%2F4Pb6yR8qao%2FEm4GBthHqQD%2FOhyOHxrwI0m%2BEdTYYtzwk5%2F8CcXwe44T72yp03K%2Bqw89Jvdv%2B580v7uw4eKIoHDs0dI%2Bnzd3qpoLs7sEolb9N%2BhYOJsXk45eDblBzgNEhX4UFJzr1qph6cmHMmlJ1UWoXya0TdslLdkEOMeN0uS75CXFuyQ9pnUSjl4wj%2FzkvAY6pgG17KfcqSpB16S80gY0HQDDeuJIqFYQcEsemMzue4pgdpbFW%2BZvdre4k8l877yXgjXG14xAvz2oESelSdYlcRCBST936cpLe40awlxCDwnu8deioat0LhRgSMGtp9ujpC7bCuYQlic58AEy%2FfIZTxLtOeQQMPXauLqVnq0otvdaaFxDCEzjYlWEYLY0h8aIVyz4vXRXTxrw5K2wCVDZvMVSyySoew%2Fs&X-Amz-Signature=ce8578e689f61b0384d895db65b84227bce054af7b8fb73fdc77f6f3de0be4d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFTNET3%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T210111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIAjIQSvGIrjpmpZRgRphB9Twl%2FtSGb5uareB1UgUC3BIAiA%2BY3r54Sd6NWEQY9gP0BjUpv%2BwbXCXVrj7RegcKSoOwyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMELRclFeoRbysYjvtKtwDpkp0Ei9BKhTX2OpR%2B0AAtxmSEjD10qzfZSObZYExgXveXWgbytjdqK3%2FEyLS0JhOohX9CXvhlYri8uiIpfRbSvYLlfFRvy9nzPMSMo8RW1QSdauZtJfLswItvzhsgBuH9PT0Pt2zmD%2BDKq7EZqAC%2Fr8X9vUYTgNAhZ6uKFJuv7%2BRo1tT5hzYxq7%2BYfd6s%2FSDFBuMaEyTYURxDpD9xL%2BgaJ2g%2F17jpHjFafIy5x%2BSchY8mebs95i894l5zaCSVQF1SWwXvhRdE26wDtfpIws%2Fu%2F8eL87s03DxK35EqQ0VGI4vCferSdOT1FoHXMk1oD8J7ncM8uQ5B4VvaXUGR%2ByabilWbOl%2B8r4kMN0i1w7cteCmg5lwniGqsVayXOuH5NZWkEcMtevuQtyNWjh2ru3i6RnoMwOvLEK7hpSmdQFnslioQ71yFy5C3Cymk%2BzTw%2B1r%2F4Pb6yR8qao%2FEm4GBthHqQD%2FOhyOHxrwI0m%2BEdTYYtzwk5%2F8CcXwe44T72yp03K%2Bqw89Jvdv%2B580v7uw4eKIoHDs0dI%2Bnzd3qpoLs7sEolb9N%2BhYOJsXk45eDblBzgNEhX4UFJzr1qph6cmHMmlJ1UWoXya0TdslLdkEOMeN0uS75CXFuyQ9pnUSjl4wj%2FzkvAY6pgG17KfcqSpB16S80gY0HQDDeuJIqFYQcEsemMzue4pgdpbFW%2BZvdre4k8l877yXgjXG14xAvz2oESelSdYlcRCBST936cpLe40awlxCDwnu8deioat0LhRgSMGtp9ujpC7bCuYQlic58AEy%2FfIZTxLtOeQQMPXauLqVnq0otvdaaFxDCEzjYlWEYLY0h8aIVyz4vXRXTxrw5K2wCVDZvMVSyySoew%2Fs&X-Amz-Signature=4209f5b2f962c44d61684863ebebd339e13da56106b7e231caa07370f9b16073&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
