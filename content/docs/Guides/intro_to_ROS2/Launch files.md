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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HZTIAG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2fCDPCe2CSI3nw%2F6llT34jO2wsBkgmBdIbW9Vi4HqvAiACa2Xqou%2Bzz5EQ6ve6W%2BnIq9KjCmEqyRlk6uPnapjSqiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRHBJS9QX09aTIfHKtwDb04bBn9XJIs2FCjvQbhxe2e8LEEgyvZRmItRgnVX9PPuetuhojco7F2dF%2Bcffd%2BINMEN44kWy%2BHzhI1qLnJ5ys%2Fjk1XClAfAdPqMQ83Z8z0KitTlh3PLpOAwnSlFXipJ9xE%2FqIlzC%2FfRz8CH2wxUugGD0hCPKHAhGgXoD%2FpdGiJiUPpl4yQlBvgVeThBLo25phIFh3RZkOd%2BGlO%2FM1Er6CsK1b053hYO2Z6kIxjXPCl2MOm0RtEQ5JgnTrpG41h%2FobL2f2Asnkjh%2BxaEnVXWRB0nNeNFib5fnsf263YbpLM93%2F6qKIrDICyf%2BNZy8yIPbwfHmS0m1kxkAryB%2BCsCikJZ1sExrKR%2BY7%2BKWkMk8ES%2BRiT89HY8X0uDPJkacYHYOpA75XWGpFw1Xptq2rABZScKfIw%2BwMBEBUfD3nLnDJi3IaTBoQvg%2F9eaePkGU5M50Cr0Utz8yR2bXyKKbPtAMkhAXw3%2FxgISMEiPUEibDDfc0UXzILfa%2BWse0KDjRrhTK9hXV14rKByEMnATLODzfzELDEyg0R1gW%2BtIZ8zSy67K%2BJw2estdFO33jzx5w2fPsFNCImttIH6MuU78MvElYRkgxyi2wVzn4rlBDmEfD9JXEuWgvmwX2eeqE5Aw6tTMvgY6pgFNNYlBJyLsLcRox9abu3JnY%2F6R1GRVKlip9ytkEY80imWj0c65DK%2F%2B8SNXHiqyrdioAoF7vFppnSoZUbE5Vxd4Dbe4lGJEhYVfTue6BmzZoO8k2i85uqtTWntP384ORZgI%2BPNdLhA5B42fnRpfJtFRxHFVD5arX%2Ft8Hm4eXCArKmDxbxAMD3inbxC28THqczB5Mq4dO%2BmgtB0UriDvnOfoJHt5v2SC&X-Amz-Signature=1e7d828ca7071d6bf0ceb3baf686daeb01ae35c01fb44e515193210a94f47af2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HZTIAG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2fCDPCe2CSI3nw%2F6llT34jO2wsBkgmBdIbW9Vi4HqvAiACa2Xqou%2Bzz5EQ6ve6W%2BnIq9KjCmEqyRlk6uPnapjSqiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRHBJS9QX09aTIfHKtwDb04bBn9XJIs2FCjvQbhxe2e8LEEgyvZRmItRgnVX9PPuetuhojco7F2dF%2Bcffd%2BINMEN44kWy%2BHzhI1qLnJ5ys%2Fjk1XClAfAdPqMQ83Z8z0KitTlh3PLpOAwnSlFXipJ9xE%2FqIlzC%2FfRz8CH2wxUugGD0hCPKHAhGgXoD%2FpdGiJiUPpl4yQlBvgVeThBLo25phIFh3RZkOd%2BGlO%2FM1Er6CsK1b053hYO2Z6kIxjXPCl2MOm0RtEQ5JgnTrpG41h%2FobL2f2Asnkjh%2BxaEnVXWRB0nNeNFib5fnsf263YbpLM93%2F6qKIrDICyf%2BNZy8yIPbwfHmS0m1kxkAryB%2BCsCikJZ1sExrKR%2BY7%2BKWkMk8ES%2BRiT89HY8X0uDPJkacYHYOpA75XWGpFw1Xptq2rABZScKfIw%2BwMBEBUfD3nLnDJi3IaTBoQvg%2F9eaePkGU5M50Cr0Utz8yR2bXyKKbPtAMkhAXw3%2FxgISMEiPUEibDDfc0UXzILfa%2BWse0KDjRrhTK9hXV14rKByEMnATLODzfzELDEyg0R1gW%2BtIZ8zSy67K%2BJw2estdFO33jzx5w2fPsFNCImttIH6MuU78MvElYRkgxyi2wVzn4rlBDmEfD9JXEuWgvmwX2eeqE5Aw6tTMvgY6pgFNNYlBJyLsLcRox9abu3JnY%2F6R1GRVKlip9ytkEY80imWj0c65DK%2F%2B8SNXHiqyrdioAoF7vFppnSoZUbE5Vxd4Dbe4lGJEhYVfTue6BmzZoO8k2i85uqtTWntP384ORZgI%2BPNdLhA5B42fnRpfJtFRxHFVD5arX%2Ft8Hm4eXCArKmDxbxAMD3inbxC28THqczB5Mq4dO%2BmgtB0UriDvnOfoJHt5v2SC&X-Amz-Signature=9b37ac87e6a7c664d527072b7c5f819d7e5bf35cccab17a2515bff966acc54d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HZTIAG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2fCDPCe2CSI3nw%2F6llT34jO2wsBkgmBdIbW9Vi4HqvAiACa2Xqou%2Bzz5EQ6ve6W%2BnIq9KjCmEqyRlk6uPnapjSqiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTRHBJS9QX09aTIfHKtwDb04bBn9XJIs2FCjvQbhxe2e8LEEgyvZRmItRgnVX9PPuetuhojco7F2dF%2Bcffd%2BINMEN44kWy%2BHzhI1qLnJ5ys%2Fjk1XClAfAdPqMQ83Z8z0KitTlh3PLpOAwnSlFXipJ9xE%2FqIlzC%2FfRz8CH2wxUugGD0hCPKHAhGgXoD%2FpdGiJiUPpl4yQlBvgVeThBLo25phIFh3RZkOd%2BGlO%2FM1Er6CsK1b053hYO2Z6kIxjXPCl2MOm0RtEQ5JgnTrpG41h%2FobL2f2Asnkjh%2BxaEnVXWRB0nNeNFib5fnsf263YbpLM93%2F6qKIrDICyf%2BNZy8yIPbwfHmS0m1kxkAryB%2BCsCikJZ1sExrKR%2BY7%2BKWkMk8ES%2BRiT89HY8X0uDPJkacYHYOpA75XWGpFw1Xptq2rABZScKfIw%2BwMBEBUfD3nLnDJi3IaTBoQvg%2F9eaePkGU5M50Cr0Utz8yR2bXyKKbPtAMkhAXw3%2FxgISMEiPUEibDDfc0UXzILfa%2BWse0KDjRrhTK9hXV14rKByEMnATLODzfzELDEyg0R1gW%2BtIZ8zSy67K%2BJw2estdFO33jzx5w2fPsFNCImttIH6MuU78MvElYRkgxyi2wVzn4rlBDmEfD9JXEuWgvmwX2eeqE5Aw6tTMvgY6pgFNNYlBJyLsLcRox9abu3JnY%2F6R1GRVKlip9ytkEY80imWj0c65DK%2F%2B8SNXHiqyrdioAoF7vFppnSoZUbE5Vxd4Dbe4lGJEhYVfTue6BmzZoO8k2i85uqtTWntP384ORZgI%2BPNdLhA5B42fnRpfJtFRxHFVD5arX%2Ft8Hm4eXCArKmDxbxAMD3inbxC28THqczB5Mq4dO%2BmgtB0UriDvnOfoJHt5v2SC&X-Amz-Signature=419fba650ea88f0a5cb4ba9119b8269eab3e2156b91e65a0dff1657316a1366d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
