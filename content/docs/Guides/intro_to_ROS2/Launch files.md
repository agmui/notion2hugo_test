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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQ3BCQ4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDxhBBlvbJ2Qc0L%2FWyo%2BupcaqcBD5%2F7DA5G0mJ%2FJ1a8hAiAxNdcYw2SvC4tml9KQEJm57aZifUAOrXQHwMulH2rrwCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6lVlJvwAWBCfQfGcKtwDpYfy%2BeVWly%2F4PwMTI9xgeBke0LGsUFgyjbx3e6hWF1rXOV4RyofJgqjGql6Xq1heYiuKJteNTRbky8Logx1LOe4eSbK29%2FIeb9P83qXioDyWj%2BSMCctoBxsSwVBTLdHMsj4UiVUI9yzUUC0pDM9dEQbAN47rOEF20hRkLRb1jlugKI2QEROIFcEPH%2BN17Vin%2Bg0SDmNk3tssxKiBwTexFunHURKkvtmE7lMEVN%2Bodj7eS7uFwIDkN6RyFRU4xiqN24VgNNb5JRtg1sBS%2FFpJT5W%2FN5%2Bf41EHeDqiaXyM2Uuz2wO6m%2BslWLoog6hoqC%2F7gOaH3PxwTpNxGkHdAFgmvdHovT1lmmT9A13Kt5prgCUiM7jX%2F4eW72%2FNn5mWdZwG7f%2Fx5PYQcpTeJG4l148h90PdpjrrtdNeo64%2FyChdaMXNh%2FkEw4Qm9g4IVQN%2FnSxYCfW2xSTYxoQOupPAmQEoSAGLjAdMumbymtrd33979Nbsks8e4ud0IEa4NetFplPS1EeAbYueJSzkwgCwquvPzjsu3C5IMuu9%2FtLh8JDIw%2FBhIsKrBFID%2FEl8GUF%2BaNsiXhHwjvHFEYU1i2kivRzUMM666Mo93Wz5epjEkr%2F%2BkWX%2FNKVbxF1IPduvPhIw%2BcG%2FwQY6pgElFEhf%2Ftt7nPMU0sVxmQNJnbe6gXrp6XY%2FGK5aPktgv%2FqSyEjAOeEj7Vf5aoJNI3RkiDQ%2FnNvEAk03HVel0tdP3GYsvg7E9y5Z2rwisJJ9T0r%2Bip6tmy4giZaz7brL39Z521rTD6Acm%2B9XUeWXoxoR5oBHjsnA0rZC4pFTxaRW4oRXyFgOFBOjdjxeF9wZuFXQAqf1JJBioq%2B%2FXvUt6u6mMAro1Vjy&X-Amz-Signature=c4a51100a493c3971016acfccf00170b05661d2bcbbc65076cac3c20d1c401bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQ3BCQ4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDxhBBlvbJ2Qc0L%2FWyo%2BupcaqcBD5%2F7DA5G0mJ%2FJ1a8hAiAxNdcYw2SvC4tml9KQEJm57aZifUAOrXQHwMulH2rrwCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6lVlJvwAWBCfQfGcKtwDpYfy%2BeVWly%2F4PwMTI9xgeBke0LGsUFgyjbx3e6hWF1rXOV4RyofJgqjGql6Xq1heYiuKJteNTRbky8Logx1LOe4eSbK29%2FIeb9P83qXioDyWj%2BSMCctoBxsSwVBTLdHMsj4UiVUI9yzUUC0pDM9dEQbAN47rOEF20hRkLRb1jlugKI2QEROIFcEPH%2BN17Vin%2Bg0SDmNk3tssxKiBwTexFunHURKkvtmE7lMEVN%2Bodj7eS7uFwIDkN6RyFRU4xiqN24VgNNb5JRtg1sBS%2FFpJT5W%2FN5%2Bf41EHeDqiaXyM2Uuz2wO6m%2BslWLoog6hoqC%2F7gOaH3PxwTpNxGkHdAFgmvdHovT1lmmT9A13Kt5prgCUiM7jX%2F4eW72%2FNn5mWdZwG7f%2Fx5PYQcpTeJG4l148h90PdpjrrtdNeo64%2FyChdaMXNh%2FkEw4Qm9g4IVQN%2FnSxYCfW2xSTYxoQOupPAmQEoSAGLjAdMumbymtrd33979Nbsks8e4ud0IEa4NetFplPS1EeAbYueJSzkwgCwquvPzjsu3C5IMuu9%2FtLh8JDIw%2FBhIsKrBFID%2FEl8GUF%2BaNsiXhHwjvHFEYU1i2kivRzUMM666Mo93Wz5epjEkr%2F%2BkWX%2FNKVbxF1IPduvPhIw%2BcG%2FwQY6pgElFEhf%2Ftt7nPMU0sVxmQNJnbe6gXrp6XY%2FGK5aPktgv%2FqSyEjAOeEj7Vf5aoJNI3RkiDQ%2FnNvEAk03HVel0tdP3GYsvg7E9y5Z2rwisJJ9T0r%2Bip6tmy4giZaz7brL39Z521rTD6Acm%2B9XUeWXoxoR5oBHjsnA0rZC4pFTxaRW4oRXyFgOFBOjdjxeF9wZuFXQAqf1JJBioq%2B%2FXvUt6u6mMAro1Vjy&X-Amz-Signature=a8f22a73bb07af2a08421784fe9439d95298dbb5f504e715961533e70c390de5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQ3BCQ4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDxhBBlvbJ2Qc0L%2FWyo%2BupcaqcBD5%2F7DA5G0mJ%2FJ1a8hAiAxNdcYw2SvC4tml9KQEJm57aZifUAOrXQHwMulH2rrwCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6lVlJvwAWBCfQfGcKtwDpYfy%2BeVWly%2F4PwMTI9xgeBke0LGsUFgyjbx3e6hWF1rXOV4RyofJgqjGql6Xq1heYiuKJteNTRbky8Logx1LOe4eSbK29%2FIeb9P83qXioDyWj%2BSMCctoBxsSwVBTLdHMsj4UiVUI9yzUUC0pDM9dEQbAN47rOEF20hRkLRb1jlugKI2QEROIFcEPH%2BN17Vin%2Bg0SDmNk3tssxKiBwTexFunHURKkvtmE7lMEVN%2Bodj7eS7uFwIDkN6RyFRU4xiqN24VgNNb5JRtg1sBS%2FFpJT5W%2FN5%2Bf41EHeDqiaXyM2Uuz2wO6m%2BslWLoog6hoqC%2F7gOaH3PxwTpNxGkHdAFgmvdHovT1lmmT9A13Kt5prgCUiM7jX%2F4eW72%2FNn5mWdZwG7f%2Fx5PYQcpTeJG4l148h90PdpjrrtdNeo64%2FyChdaMXNh%2FkEw4Qm9g4IVQN%2FnSxYCfW2xSTYxoQOupPAmQEoSAGLjAdMumbymtrd33979Nbsks8e4ud0IEa4NetFplPS1EeAbYueJSzkwgCwquvPzjsu3C5IMuu9%2FtLh8JDIw%2FBhIsKrBFID%2FEl8GUF%2BaNsiXhHwjvHFEYU1i2kivRzUMM666Mo93Wz5epjEkr%2F%2BkWX%2FNKVbxF1IPduvPhIw%2BcG%2FwQY6pgElFEhf%2Ftt7nPMU0sVxmQNJnbe6gXrp6XY%2FGK5aPktgv%2FqSyEjAOeEj7Vf5aoJNI3RkiDQ%2FnNvEAk03HVel0tdP3GYsvg7E9y5Z2rwisJJ9T0r%2Bip6tmy4giZaz7brL39Z521rTD6Acm%2B9XUeWXoxoR5oBHjsnA0rZC4pFTxaRW4oRXyFgOFBOjdjxeF9wZuFXQAqf1JJBioq%2B%2FXvUt6u6mMAro1Vjy&X-Amz-Signature=d4dcdae01ea23b364a06e9335bf173e199ffa01dec2215bdd6223d5317e21040&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
