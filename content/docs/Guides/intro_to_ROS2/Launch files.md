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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXF53MOM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYXyzVO8ycZuOwz%2B%2Bs9MHp%2F2CZ3t5A7v%2B8obQ3m3Xr%2FQIhAMnC6bJ%2BXkgkj%2Fop%2B1qOhP36BRLP%2Bouob68K4njJ7meJKv8DCEYQABoMNjM3NDIzMTgzODA1Igw%2B4S9i%2BGrSuzowvXYq3APrroBFWLmd1TT8csw1W46b8Q%2Bu5wp6dnhEh5kBeEPu29TkecLGefQoBwx1A4EdV74SzQ%2BRar%2BMKhcKOHKSFlsNFTUJp17G66rBVqx%2Bb11W3LhqqMFZbct77YkGpq4VqVe2ovRNaK0addwLhDchI1k67ZRspTC9Klqn2V4Z0E7T1mDrX6kIVEtHU3eHXe%2F%2BfwtWsuIRonE1GEQTcoP3RSLW6dyQOcYNNoTUkiB3feYpzqxbRD2B1FSHkPLAD3NbAaJIrsCqKJ%2FY7bznBJd04DckF5efasuZUDKbzsqbTCW5PUXEcWNGnmrkuvqBJrp8FcErdbwrMrT%2B%2FA44pA0HjSRhM7fmcGoaQfxYDLDWkQhMMqAfpcCIEyN4qABMXSdISOT3pQW8JMEgXkySbyG3OUo4OD1R5I3k%2FMTPbGfPBQJEOZrmNWk2SFiX66cLFgUwtVcBqExR4aB2DgNhV1q6ssvXZIO43Y4DEj0NEgQE5PG4HZypL0bJzK6Gx5pSPiCaotqEZvWqU0AtEHpw2w7rmuJcV1SvlEyo64thuWgKbPXxfUXRclcXapNLxSMrTZpn2WejxVRRaXEuzdV3a89HL4Tb27OZz3Sfon1zg2flbRj7LNAFGwdifOoH1C0YvDCX3%2F6%2FBjqkAcdA%2BZ%2Blk9W5JKNtMkzC1ohNLYXdWYeR9SB4Qp1qotF8HQv0akuQMmxODUKQohBWl9WMfnbNYRFyeRdxBlpZtRXTRtmsjZwFDxTCZWekN3fCPXhYmmAltwdBbbGrHhT9VbsmNuRrXeDVjpbxyT8A9YcJIAPEAazzfS8PH%2FpghBCMoVk%2BxJeW%2BOnzAhznmE8tpHRTcer4On4zZRHiZCzpI7%2Bvs5dY&X-Amz-Signature=50d2ae2a2d53124cfdac5a9a1327c45e5155e9b2523e701965b315ddbe16267e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXF53MOM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYXyzVO8ycZuOwz%2B%2Bs9MHp%2F2CZ3t5A7v%2B8obQ3m3Xr%2FQIhAMnC6bJ%2BXkgkj%2Fop%2B1qOhP36BRLP%2Bouob68K4njJ7meJKv8DCEYQABoMNjM3NDIzMTgzODA1Igw%2B4S9i%2BGrSuzowvXYq3APrroBFWLmd1TT8csw1W46b8Q%2Bu5wp6dnhEh5kBeEPu29TkecLGefQoBwx1A4EdV74SzQ%2BRar%2BMKhcKOHKSFlsNFTUJp17G66rBVqx%2Bb11W3LhqqMFZbct77YkGpq4VqVe2ovRNaK0addwLhDchI1k67ZRspTC9Klqn2V4Z0E7T1mDrX6kIVEtHU3eHXe%2F%2BfwtWsuIRonE1GEQTcoP3RSLW6dyQOcYNNoTUkiB3feYpzqxbRD2B1FSHkPLAD3NbAaJIrsCqKJ%2FY7bznBJd04DckF5efasuZUDKbzsqbTCW5PUXEcWNGnmrkuvqBJrp8FcErdbwrMrT%2B%2FA44pA0HjSRhM7fmcGoaQfxYDLDWkQhMMqAfpcCIEyN4qABMXSdISOT3pQW8JMEgXkySbyG3OUo4OD1R5I3k%2FMTPbGfPBQJEOZrmNWk2SFiX66cLFgUwtVcBqExR4aB2DgNhV1q6ssvXZIO43Y4DEj0NEgQE5PG4HZypL0bJzK6Gx5pSPiCaotqEZvWqU0AtEHpw2w7rmuJcV1SvlEyo64thuWgKbPXxfUXRclcXapNLxSMrTZpn2WejxVRRaXEuzdV3a89HL4Tb27OZz3Sfon1zg2flbRj7LNAFGwdifOoH1C0YvDCX3%2F6%2FBjqkAcdA%2BZ%2Blk9W5JKNtMkzC1ohNLYXdWYeR9SB4Qp1qotF8HQv0akuQMmxODUKQohBWl9WMfnbNYRFyeRdxBlpZtRXTRtmsjZwFDxTCZWekN3fCPXhYmmAltwdBbbGrHhT9VbsmNuRrXeDVjpbxyT8A9YcJIAPEAazzfS8PH%2FpghBCMoVk%2BxJeW%2BOnzAhznmE8tpHRTcer4On4zZRHiZCzpI7%2Bvs5dY&X-Amz-Signature=4b727adfc4e64c50e38c6acce17fb726a52098feb4c87bef72bada94044db94d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXF53MOM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYXyzVO8ycZuOwz%2B%2Bs9MHp%2F2CZ3t5A7v%2B8obQ3m3Xr%2FQIhAMnC6bJ%2BXkgkj%2Fop%2B1qOhP36BRLP%2Bouob68K4njJ7meJKv8DCEYQABoMNjM3NDIzMTgzODA1Igw%2B4S9i%2BGrSuzowvXYq3APrroBFWLmd1TT8csw1W46b8Q%2Bu5wp6dnhEh5kBeEPu29TkecLGefQoBwx1A4EdV74SzQ%2BRar%2BMKhcKOHKSFlsNFTUJp17G66rBVqx%2Bb11W3LhqqMFZbct77YkGpq4VqVe2ovRNaK0addwLhDchI1k67ZRspTC9Klqn2V4Z0E7T1mDrX6kIVEtHU3eHXe%2F%2BfwtWsuIRonE1GEQTcoP3RSLW6dyQOcYNNoTUkiB3feYpzqxbRD2B1FSHkPLAD3NbAaJIrsCqKJ%2FY7bznBJd04DckF5efasuZUDKbzsqbTCW5PUXEcWNGnmrkuvqBJrp8FcErdbwrMrT%2B%2FA44pA0HjSRhM7fmcGoaQfxYDLDWkQhMMqAfpcCIEyN4qABMXSdISOT3pQW8JMEgXkySbyG3OUo4OD1R5I3k%2FMTPbGfPBQJEOZrmNWk2SFiX66cLFgUwtVcBqExR4aB2DgNhV1q6ssvXZIO43Y4DEj0NEgQE5PG4HZypL0bJzK6Gx5pSPiCaotqEZvWqU0AtEHpw2w7rmuJcV1SvlEyo64thuWgKbPXxfUXRclcXapNLxSMrTZpn2WejxVRRaXEuzdV3a89HL4Tb27OZz3Sfon1zg2flbRj7LNAFGwdifOoH1C0YvDCX3%2F6%2FBjqkAcdA%2BZ%2Blk9W5JKNtMkzC1ohNLYXdWYeR9SB4Qp1qotF8HQv0akuQMmxODUKQohBWl9WMfnbNYRFyeRdxBlpZtRXTRtmsjZwFDxTCZWekN3fCPXhYmmAltwdBbbGrHhT9VbsmNuRrXeDVjpbxyT8A9YcJIAPEAazzfS8PH%2FpghBCMoVk%2BxJeW%2BOnzAhznmE8tpHRTcer4On4zZRHiZCzpI7%2Bvs5dY&X-Amz-Signature=c13896864538640dd88a02da521ff296fbdbc1f6c6e034feb95cffa89b3af5b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
