---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWVQJWMF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHgEYRLjkrdDbgQUzmXZMVg13xl%2FeHiGMlp30B%2FRoPyqAiAp3tE4VdhR5QyozftzY5BsRcd1uSU5f0Xn2wpLpep6Oir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM7myj5bprDPEB%2FZ59KtwDPmx%2BZd2plq9UU8rGfPNf5c%2FiS0RylDHLY5ANq4XABQtOo7VPFFrWVSq7DCxnTsxldBDGXtl8LjG1uFWl%2BQKaH0GT%2Bk7CO8T5%2BSMhLDFrDid0GLhPShk8YTZOCu3mbS6gaiEHDBQETETDlJOuMfDs311kXzj9GD%2FXdWnMc2DN3MW721fPgsSaixoEDvbjbr0cRbx5TpD56a%2BkYHquIVG39TOt2JBv2EfuTFy1ivev3ciEyrUn4XykNHH8%2FxTreOfTnsm18joOwbputfzqj2tphvPjFjMM9x2B4W60q1VzJuT%2Bakq%2BJMQPEJbdYQOGLO1G57cvknzrTp7yArpfw9t2ujgwrryFp24yYJrX8rPODyqONKJ5VPC%2BfMNdrEyZWKr%2FmudQpBDsST%2BrshHI7N4atdX2gyCzX7Sr0cLhQ2hbDao79bpJn6zfoAohu94x5EAPvCt%2B82pQ8ce1O4bQSfpWxGMD4ygWZPDni8gA3Ud8kCbKDoC735xutiPD9vnmTQd5RKbEM0xIsSYBrrpNrvWDUKvej0C6hJnJfhQKg1Y%2FjbGNNxiOeIF68w%2FPNCspc6Daq9H9ABoi8qxQug2dhjS3VLsbFD0LaBHrUviEdSu90PR8xCFFobU3aiBQCpcw9NrGxAY6pgFAevbkmylJFW8M%2F%2BTTF1uIM10jcP2C1WVcfwQ1dJ2d3%2Bp6O5uyoEPdqgYXzwobch1FNSKKR8FF%2FZ2lPJAhiadBoRj5aJ2KGe2CYq1sWhH%2F0vnftKH88rQVX0UsVCGFjm1xkgBauAMT3M13w7fxOvNlIVB6fcZ%2BYddCIrLyvLF7nOkMeNw07TrNOy4zjByBxmfDZwlghDtf3HbL1W3Na19%2BiUviD3Gc&X-Amz-Signature=bb8c3c37fc2b862d01fb0f9acf349e9a4a57df0ee5c023ebbb31c13980a2cc54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWVQJWMF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHgEYRLjkrdDbgQUzmXZMVg13xl%2FeHiGMlp30B%2FRoPyqAiAp3tE4VdhR5QyozftzY5BsRcd1uSU5f0Xn2wpLpep6Oir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM7myj5bprDPEB%2FZ59KtwDPmx%2BZd2plq9UU8rGfPNf5c%2FiS0RylDHLY5ANq4XABQtOo7VPFFrWVSq7DCxnTsxldBDGXtl8LjG1uFWl%2BQKaH0GT%2Bk7CO8T5%2BSMhLDFrDid0GLhPShk8YTZOCu3mbS6gaiEHDBQETETDlJOuMfDs311kXzj9GD%2FXdWnMc2DN3MW721fPgsSaixoEDvbjbr0cRbx5TpD56a%2BkYHquIVG39TOt2JBv2EfuTFy1ivev3ciEyrUn4XykNHH8%2FxTreOfTnsm18joOwbputfzqj2tphvPjFjMM9x2B4W60q1VzJuT%2Bakq%2BJMQPEJbdYQOGLO1G57cvknzrTp7yArpfw9t2ujgwrryFp24yYJrX8rPODyqONKJ5VPC%2BfMNdrEyZWKr%2FmudQpBDsST%2BrshHI7N4atdX2gyCzX7Sr0cLhQ2hbDao79bpJn6zfoAohu94x5EAPvCt%2B82pQ8ce1O4bQSfpWxGMD4ygWZPDni8gA3Ud8kCbKDoC735xutiPD9vnmTQd5RKbEM0xIsSYBrrpNrvWDUKvej0C6hJnJfhQKg1Y%2FjbGNNxiOeIF68w%2FPNCspc6Daq9H9ABoi8qxQug2dhjS3VLsbFD0LaBHrUviEdSu90PR8xCFFobU3aiBQCpcw9NrGxAY6pgFAevbkmylJFW8M%2F%2BTTF1uIM10jcP2C1WVcfwQ1dJ2d3%2Bp6O5uyoEPdqgYXzwobch1FNSKKR8FF%2FZ2lPJAhiadBoRj5aJ2KGe2CYq1sWhH%2F0vnftKH88rQVX0UsVCGFjm1xkgBauAMT3M13w7fxOvNlIVB6fcZ%2BYddCIrLyvLF7nOkMeNw07TrNOy4zjByBxmfDZwlghDtf3HbL1W3Na19%2BiUviD3Gc&X-Amz-Signature=5a3366ce61d53313af288d12c38baabfdbc6274c13a32c4910613f032a70c5fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWVQJWMF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHgEYRLjkrdDbgQUzmXZMVg13xl%2FeHiGMlp30B%2FRoPyqAiAp3tE4VdhR5QyozftzY5BsRcd1uSU5f0Xn2wpLpep6Oir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM7myj5bprDPEB%2FZ59KtwDPmx%2BZd2plq9UU8rGfPNf5c%2FiS0RylDHLY5ANq4XABQtOo7VPFFrWVSq7DCxnTsxldBDGXtl8LjG1uFWl%2BQKaH0GT%2Bk7CO8T5%2BSMhLDFrDid0GLhPShk8YTZOCu3mbS6gaiEHDBQETETDlJOuMfDs311kXzj9GD%2FXdWnMc2DN3MW721fPgsSaixoEDvbjbr0cRbx5TpD56a%2BkYHquIVG39TOt2JBv2EfuTFy1ivev3ciEyrUn4XykNHH8%2FxTreOfTnsm18joOwbputfzqj2tphvPjFjMM9x2B4W60q1VzJuT%2Bakq%2BJMQPEJbdYQOGLO1G57cvknzrTp7yArpfw9t2ujgwrryFp24yYJrX8rPODyqONKJ5VPC%2BfMNdrEyZWKr%2FmudQpBDsST%2BrshHI7N4atdX2gyCzX7Sr0cLhQ2hbDao79bpJn6zfoAohu94x5EAPvCt%2B82pQ8ce1O4bQSfpWxGMD4ygWZPDni8gA3Ud8kCbKDoC735xutiPD9vnmTQd5RKbEM0xIsSYBrrpNrvWDUKvej0C6hJnJfhQKg1Y%2FjbGNNxiOeIF68w%2FPNCspc6Daq9H9ABoi8qxQug2dhjS3VLsbFD0LaBHrUviEdSu90PR8xCFFobU3aiBQCpcw9NrGxAY6pgFAevbkmylJFW8M%2F%2BTTF1uIM10jcP2C1WVcfwQ1dJ2d3%2Bp6O5uyoEPdqgYXzwobch1FNSKKR8FF%2FZ2lPJAhiadBoRj5aJ2KGe2CYq1sWhH%2F0vnftKH88rQVX0UsVCGFjm1xkgBauAMT3M13w7fxOvNlIVB6fcZ%2BYddCIrLyvLF7nOkMeNw07TrNOy4zjByBxmfDZwlghDtf3HbL1W3Na19%2BiUviD3Gc&X-Amz-Signature=6a225adee6bc73e0d276829da900abbdc336a81f917956fe7001d2eadac81fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
