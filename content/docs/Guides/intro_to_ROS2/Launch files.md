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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQJ5VNFW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FhepInWI4%2F3iM1bpKBbG6q0K%2FqZccTiqt%2FmFhFS08XAiEAomO6sIeMdW79uCS4RlP%2FElMJ4wofgNidiP2i%2F%2BD42p4q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFKuL5THn%2B0loodQxSrcA14vCv4pLP5B201Wuo22BgPdFwyWgSHPEpRKtLEBsE05Te9mJWkwVDxBZesFrHaiW2Bds6GFfXpz5%2Fjyp4V3e5DsIdwBhU%2F%2BXrfsh4WFVYj%2BRd1emP6NGp0FP16aQkaIWf%2FD5tt8B8A0e6ION8p2l%2F3Tsj3FGNPzKDxx4g23vP9L5qAaXodGGbrKtpDX3HtoFr%2BQMaDzaQ1HCHrxnkatZ1UImUhIBYrtiueVrLnmyIGr1Fou07sAAnB%2BRfj8G8vBPswUWeQbwMPD1o%2B0KyLDOnVykCU52dd71ygaHtihU50ErxysgEFDVODCQ4qKbN9B0J1GkRXp3tQreMW7uEdej6uJJ4%2BDrXO%2F7d1morogJIeAvITz3KgX11AWdhJrLeWUjcnRm7kCIBeHC9s3PamOQ9WGxxedcsQutnrn2JogM4KHphpp2%2BJKW7trYxdV0U5pgxDgoQEsiSej1U5e6oVBpDOudLKGAy4r6u4T%2B1R7GaZG5k2fOWKkKgU2GTxi994kS6GflD1C7UBUdnhswnBImY7hDwOE0W%2FuvwAXAx9myzCsOestYNTIFS%2B%2FpKZYN0kFKR5odrY1vfQwnapBYplZ1uZvsVGvD1Zot%2FOzJYHkgIXfUeKvpfht2TxqjVxDMI6C2L4GOqUBmX%2BSzcVnAkYJBcriDPOV9nI9XBvsgSAvqa2R4t3Hc11fXrQ%2FNcNjXJmONy%2FLke797lY46SpZv6RsIDVvY8cUgbflVnNBucvxtpITZ90%2B6A%2FgK7dj2bkFqD9w378aVSFhknX9rXe7oUSq5DzY8GhDSqKr99SjJ1uipBnIUx6ZYIp66oCvEXg6PKahJJjW5CSLCBp3Tyf%2BuqB0NAgkZYlnbH1j3o1b&X-Amz-Signature=05e4ef63349d558d65ff46162a3e81dd473c50bdf948a707aaef4c7432bfe2c9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQJ5VNFW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FhepInWI4%2F3iM1bpKBbG6q0K%2FqZccTiqt%2FmFhFS08XAiEAomO6sIeMdW79uCS4RlP%2FElMJ4wofgNidiP2i%2F%2BD42p4q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFKuL5THn%2B0loodQxSrcA14vCv4pLP5B201Wuo22BgPdFwyWgSHPEpRKtLEBsE05Te9mJWkwVDxBZesFrHaiW2Bds6GFfXpz5%2Fjyp4V3e5DsIdwBhU%2F%2BXrfsh4WFVYj%2BRd1emP6NGp0FP16aQkaIWf%2FD5tt8B8A0e6ION8p2l%2F3Tsj3FGNPzKDxx4g23vP9L5qAaXodGGbrKtpDX3HtoFr%2BQMaDzaQ1HCHrxnkatZ1UImUhIBYrtiueVrLnmyIGr1Fou07sAAnB%2BRfj8G8vBPswUWeQbwMPD1o%2B0KyLDOnVykCU52dd71ygaHtihU50ErxysgEFDVODCQ4qKbN9B0J1GkRXp3tQreMW7uEdej6uJJ4%2BDrXO%2F7d1morogJIeAvITz3KgX11AWdhJrLeWUjcnRm7kCIBeHC9s3PamOQ9WGxxedcsQutnrn2JogM4KHphpp2%2BJKW7trYxdV0U5pgxDgoQEsiSej1U5e6oVBpDOudLKGAy4r6u4T%2B1R7GaZG5k2fOWKkKgU2GTxi994kS6GflD1C7UBUdnhswnBImY7hDwOE0W%2FuvwAXAx9myzCsOestYNTIFS%2B%2FpKZYN0kFKR5odrY1vfQwnapBYplZ1uZvsVGvD1Zot%2FOzJYHkgIXfUeKvpfht2TxqjVxDMI6C2L4GOqUBmX%2BSzcVnAkYJBcriDPOV9nI9XBvsgSAvqa2R4t3Hc11fXrQ%2FNcNjXJmONy%2FLke797lY46SpZv6RsIDVvY8cUgbflVnNBucvxtpITZ90%2B6A%2FgK7dj2bkFqD9w378aVSFhknX9rXe7oUSq5DzY8GhDSqKr99SjJ1uipBnIUx6ZYIp66oCvEXg6PKahJJjW5CSLCBp3Tyf%2BuqB0NAgkZYlnbH1j3o1b&X-Amz-Signature=fa6a8aaec7bf5fb24eb3c6da868ef599dbe6c5f38831c183cd86dd50c874231f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQJ5VNFW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FhepInWI4%2F3iM1bpKBbG6q0K%2FqZccTiqt%2FmFhFS08XAiEAomO6sIeMdW79uCS4RlP%2FElMJ4wofgNidiP2i%2F%2BD42p4q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFKuL5THn%2B0loodQxSrcA14vCv4pLP5B201Wuo22BgPdFwyWgSHPEpRKtLEBsE05Te9mJWkwVDxBZesFrHaiW2Bds6GFfXpz5%2Fjyp4V3e5DsIdwBhU%2F%2BXrfsh4WFVYj%2BRd1emP6NGp0FP16aQkaIWf%2FD5tt8B8A0e6ION8p2l%2F3Tsj3FGNPzKDxx4g23vP9L5qAaXodGGbrKtpDX3HtoFr%2BQMaDzaQ1HCHrxnkatZ1UImUhIBYrtiueVrLnmyIGr1Fou07sAAnB%2BRfj8G8vBPswUWeQbwMPD1o%2B0KyLDOnVykCU52dd71ygaHtihU50ErxysgEFDVODCQ4qKbN9B0J1GkRXp3tQreMW7uEdej6uJJ4%2BDrXO%2F7d1morogJIeAvITz3KgX11AWdhJrLeWUjcnRm7kCIBeHC9s3PamOQ9WGxxedcsQutnrn2JogM4KHphpp2%2BJKW7trYxdV0U5pgxDgoQEsiSej1U5e6oVBpDOudLKGAy4r6u4T%2B1R7GaZG5k2fOWKkKgU2GTxi994kS6GflD1C7UBUdnhswnBImY7hDwOE0W%2FuvwAXAx9myzCsOestYNTIFS%2B%2FpKZYN0kFKR5odrY1vfQwnapBYplZ1uZvsVGvD1Zot%2FOzJYHkgIXfUeKvpfht2TxqjVxDMI6C2L4GOqUBmX%2BSzcVnAkYJBcriDPOV9nI9XBvsgSAvqa2R4t3Hc11fXrQ%2FNcNjXJmONy%2FLke797lY46SpZv6RsIDVvY8cUgbflVnNBucvxtpITZ90%2B6A%2FgK7dj2bkFqD9w378aVSFhknX9rXe7oUSq5DzY8GhDSqKr99SjJ1uipBnIUx6ZYIp66oCvEXg6PKahJJjW5CSLCBp3Tyf%2BuqB0NAgkZYlnbH1j3o1b&X-Amz-Signature=5c55229ee081ab54084cd52bb7c840b3bdac0b0d79ceea44207954afe5532402&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
