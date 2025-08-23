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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPJ22LL%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0DehES8f9XADBd55yPd5TW903kGTbU%2B6%2BEVoCqCUJCAiEA5vXHZndMjXKMdakvM1%2BUzwzFpQk9Bkdieo66mR2a66cq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCXBREU9cEVcg%2F2l5SrcA3Y2I9STFvLR0mwL5vkfn%2BJfj%2FXt5uG6fCo6cmnSQkMeZYAh1reJ27fk8iPO83OITGZaKCDnjXb5ffDxEo%2F0ZCvvcuwACEho2JkpbRscMW%2Fmyc0EI3cNOqnQym0%2Ffct6oxdP5ZjgLuyj%2By75LpsLngQKMQCyIAYyensVMs87kWkKsgIXRrfYfrXNP93hiFEU0GHvPxgN8ZZUMxyTcfbiK5jn%2F2rl3M3vMEtJVVFm2OPnMYu6Wsh07iHTrBrH2rAfXTNacXkVsR8NOz%2FSbUPiPR6n%2Fb9A%2BuNnXgAUNdpcYXDkMN4idBpZdWcg3fJCe7WD%2BlhfI3dYcaMGSAK3eI5lnseZr4RgYkMxgc%2BT98U5tsJ0h7UR5OkoL%2Bp7MqNV%2BW8ZgNzslvcETSMjGePaQEzfcv8Pk0c4NdJfd6fDjoKwq6u4dcxmReqpx2S%2FTMzhSX4LKZybJrAGGKnhigwOamYM1pMxe%2BbGy%2BEv8Nbu5DkNvFhL%2FdCEOxctVlGEWt%2B%2BbdQ8cXnsdxXUDlD%2FHDGqvKygFPRsi8v6%2FPAcePjMqQEZrseTx3GxdXJdYdOTeNTmmv0R7VsipBeWOJm7pNqwIPNWuN6rW86FhfuU4bn6woH5veEcSt4JwyOtj4GCBr7GMJWOpMUGOqUBI3499Na1nEU1cLcTeMKgOHKSyhcF2joVVl%2B0b2mGQAfEMlFkKn9USrqR%2FSCGmGaqbAJBR8aOujG%2F7%2B3A8V0PtNAGxTWm9xKfsegGibf8jdPhdoDHNGJIsOGolc01SdDnF1DT5uP%2FuwL608oaTdarsQXnvzLjPQZM4w2S0UxPM1Y4zAum%2FXPDwMn2ej1wMv2saMdh18DXptJOTcNOpIkygXBb17Ed&X-Amz-Signature=353d01ca08fa6258bde547228b499df159025104dc59ebf7c187651af651366e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPJ22LL%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0DehES8f9XADBd55yPd5TW903kGTbU%2B6%2BEVoCqCUJCAiEA5vXHZndMjXKMdakvM1%2BUzwzFpQk9Bkdieo66mR2a66cq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCXBREU9cEVcg%2F2l5SrcA3Y2I9STFvLR0mwL5vkfn%2BJfj%2FXt5uG6fCo6cmnSQkMeZYAh1reJ27fk8iPO83OITGZaKCDnjXb5ffDxEo%2F0ZCvvcuwACEho2JkpbRscMW%2Fmyc0EI3cNOqnQym0%2Ffct6oxdP5ZjgLuyj%2By75LpsLngQKMQCyIAYyensVMs87kWkKsgIXRrfYfrXNP93hiFEU0GHvPxgN8ZZUMxyTcfbiK5jn%2F2rl3M3vMEtJVVFm2OPnMYu6Wsh07iHTrBrH2rAfXTNacXkVsR8NOz%2FSbUPiPR6n%2Fb9A%2BuNnXgAUNdpcYXDkMN4idBpZdWcg3fJCe7WD%2BlhfI3dYcaMGSAK3eI5lnseZr4RgYkMxgc%2BT98U5tsJ0h7UR5OkoL%2Bp7MqNV%2BW8ZgNzslvcETSMjGePaQEzfcv8Pk0c4NdJfd6fDjoKwq6u4dcxmReqpx2S%2FTMzhSX4LKZybJrAGGKnhigwOamYM1pMxe%2BbGy%2BEv8Nbu5DkNvFhL%2FdCEOxctVlGEWt%2B%2BbdQ8cXnsdxXUDlD%2FHDGqvKygFPRsi8v6%2FPAcePjMqQEZrseTx3GxdXJdYdOTeNTmmv0R7VsipBeWOJm7pNqwIPNWuN6rW86FhfuU4bn6woH5veEcSt4JwyOtj4GCBr7GMJWOpMUGOqUBI3499Na1nEU1cLcTeMKgOHKSyhcF2joVVl%2B0b2mGQAfEMlFkKn9USrqR%2FSCGmGaqbAJBR8aOujG%2F7%2B3A8V0PtNAGxTWm9xKfsegGibf8jdPhdoDHNGJIsOGolc01SdDnF1DT5uP%2FuwL608oaTdarsQXnvzLjPQZM4w2S0UxPM1Y4zAum%2FXPDwMn2ej1wMv2saMdh18DXptJOTcNOpIkygXBb17Ed&X-Amz-Signature=3946fdde22cea73797cd50be6b5df6e85ee379abec65aa1bd7137116a05a0c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPJ22LL%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0DehES8f9XADBd55yPd5TW903kGTbU%2B6%2BEVoCqCUJCAiEA5vXHZndMjXKMdakvM1%2BUzwzFpQk9Bkdieo66mR2a66cq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCXBREU9cEVcg%2F2l5SrcA3Y2I9STFvLR0mwL5vkfn%2BJfj%2FXt5uG6fCo6cmnSQkMeZYAh1reJ27fk8iPO83OITGZaKCDnjXb5ffDxEo%2F0ZCvvcuwACEho2JkpbRscMW%2Fmyc0EI3cNOqnQym0%2Ffct6oxdP5ZjgLuyj%2By75LpsLngQKMQCyIAYyensVMs87kWkKsgIXRrfYfrXNP93hiFEU0GHvPxgN8ZZUMxyTcfbiK5jn%2F2rl3M3vMEtJVVFm2OPnMYu6Wsh07iHTrBrH2rAfXTNacXkVsR8NOz%2FSbUPiPR6n%2Fb9A%2BuNnXgAUNdpcYXDkMN4idBpZdWcg3fJCe7WD%2BlhfI3dYcaMGSAK3eI5lnseZr4RgYkMxgc%2BT98U5tsJ0h7UR5OkoL%2Bp7MqNV%2BW8ZgNzslvcETSMjGePaQEzfcv8Pk0c4NdJfd6fDjoKwq6u4dcxmReqpx2S%2FTMzhSX4LKZybJrAGGKnhigwOamYM1pMxe%2BbGy%2BEv8Nbu5DkNvFhL%2FdCEOxctVlGEWt%2B%2BbdQ8cXnsdxXUDlD%2FHDGqvKygFPRsi8v6%2FPAcePjMqQEZrseTx3GxdXJdYdOTeNTmmv0R7VsipBeWOJm7pNqwIPNWuN6rW86FhfuU4bn6woH5veEcSt4JwyOtj4GCBr7GMJWOpMUGOqUBI3499Na1nEU1cLcTeMKgOHKSyhcF2joVVl%2B0b2mGQAfEMlFkKn9USrqR%2FSCGmGaqbAJBR8aOujG%2F7%2B3A8V0PtNAGxTWm9xKfsegGibf8jdPhdoDHNGJIsOGolc01SdDnF1DT5uP%2FuwL608oaTdarsQXnvzLjPQZM4w2S0UxPM1Y4zAum%2FXPDwMn2ej1wMv2saMdh18DXptJOTcNOpIkygXBb17Ed&X-Amz-Signature=48b70f3895b4128dd4807c5287f29dde6692c7b1fbd5c07b8be1fcc0845b3d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
