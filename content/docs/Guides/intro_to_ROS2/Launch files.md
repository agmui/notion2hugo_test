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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HEZ2EZK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDZ6Nv%2Fko4yXdfcPqhosS%2B24KURTeRNsWvtRQX8IUWVxQIgbh2vT%2BObrsUgWCJCJZyNNinV0t0CBuR7ci23Ogde9csqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmLET7xwyS4gGMcgCrcA1Retp23z3Jv2wkJKXByswwE7ako%2BHvcTd%2B8HPMIYiNYpUtOZYjcTTYXbezmSjtI6%2Bnw2TIVcu3hIJyA1NSLryx%2F4WoW%2FRSReyq0etYs9Z2ecyZ0kUSSTPD1Jrk8inwD3LPFN7pSA56z96XNy5s47gW65jaRuBu3of0FLkAFc7jpLRdsCtNr2hG09jeQfPFTu1rbatk6hdRtMEmNHLWk0kO8Nx%2B4UtUhDXBIX7yIQwvGYCOXl%2Fw9Kp2X9C9Q%2B7pbhUATwz%2FxijVbYniYSyJxUV33lnZZJqr4J7t1yHTctkPpE2ioMrOQhkeEeEH717DWL0uHf6h85U4d18OV7jkRHAcZFO3TxYO0Q8jrPg3xK6InbH81XRkpvPPitEP7RW55pgspigNJ94ExwS3lCrtVRlsf3ncffrjJzZo9ue%2BXCQQZukpkhMrw8WG9Jyg6F6hS8iVG3q8rJTeyfGj%2BlNOzyU9YWU2%2FhgCOk79lJqTy6s%2F2GI9o5B72PY7ImwgImrLPTJa1sX40rANWLr2bQzG%2BUrKtUILZnQTty6BLBmzhNj8YhLWNSQvIETTwzqLdRsGx8PzGlEfkudlb%2BcZ4PVBycDpgT2BEKz8I9KoA%2BDVVDoDz%2BJD%2FJJ3r2d9X%2BJS5MPa5i74GOqUBplio58cBkMRx6zXJjXlXIiDEssDDnabrCqbxwhMmIzPpubm9Dm59WNqpheeuXq2AUKHdbHTQbyVIRgYWJjvpDHVq4YJcr5qIiTVl3TpfWZ5FV3kKBoUyEjgjiuz4MGZSpOQCgKqZOeSk8IkJ55JmVguWULSmT%2By0%2BOvaRwzFIw8URr7qVjbY1PkO5l1LXd4LCPhnkOIO8cNJSV814o1MlrzCnHZl&X-Amz-Signature=c2fdf7446e031230478942a2456cb55635a9154e08be383c992412af572cc06f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HEZ2EZK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDZ6Nv%2Fko4yXdfcPqhosS%2B24KURTeRNsWvtRQX8IUWVxQIgbh2vT%2BObrsUgWCJCJZyNNinV0t0CBuR7ci23Ogde9csqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmLET7xwyS4gGMcgCrcA1Retp23z3Jv2wkJKXByswwE7ako%2BHvcTd%2B8HPMIYiNYpUtOZYjcTTYXbezmSjtI6%2Bnw2TIVcu3hIJyA1NSLryx%2F4WoW%2FRSReyq0etYs9Z2ecyZ0kUSSTPD1Jrk8inwD3LPFN7pSA56z96XNy5s47gW65jaRuBu3of0FLkAFc7jpLRdsCtNr2hG09jeQfPFTu1rbatk6hdRtMEmNHLWk0kO8Nx%2B4UtUhDXBIX7yIQwvGYCOXl%2Fw9Kp2X9C9Q%2B7pbhUATwz%2FxijVbYniYSyJxUV33lnZZJqr4J7t1yHTctkPpE2ioMrOQhkeEeEH717DWL0uHf6h85U4d18OV7jkRHAcZFO3TxYO0Q8jrPg3xK6InbH81XRkpvPPitEP7RW55pgspigNJ94ExwS3lCrtVRlsf3ncffrjJzZo9ue%2BXCQQZukpkhMrw8WG9Jyg6F6hS8iVG3q8rJTeyfGj%2BlNOzyU9YWU2%2FhgCOk79lJqTy6s%2F2GI9o5B72PY7ImwgImrLPTJa1sX40rANWLr2bQzG%2BUrKtUILZnQTty6BLBmzhNj8YhLWNSQvIETTwzqLdRsGx8PzGlEfkudlb%2BcZ4PVBycDpgT2BEKz8I9KoA%2BDVVDoDz%2BJD%2FJJ3r2d9X%2BJS5MPa5i74GOqUBplio58cBkMRx6zXJjXlXIiDEssDDnabrCqbxwhMmIzPpubm9Dm59WNqpheeuXq2AUKHdbHTQbyVIRgYWJjvpDHVq4YJcr5qIiTVl3TpfWZ5FV3kKBoUyEjgjiuz4MGZSpOQCgKqZOeSk8IkJ55JmVguWULSmT%2By0%2BOvaRwzFIw8URr7qVjbY1PkO5l1LXd4LCPhnkOIO8cNJSV814o1MlrzCnHZl&X-Amz-Signature=5bdf1a49394f9ae74797293b7f8baa9a1e3dc368409143f619d98072aa6534a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HEZ2EZK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDZ6Nv%2Fko4yXdfcPqhosS%2B24KURTeRNsWvtRQX8IUWVxQIgbh2vT%2BObrsUgWCJCJZyNNinV0t0CBuR7ci23Ogde9csqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmLET7xwyS4gGMcgCrcA1Retp23z3Jv2wkJKXByswwE7ako%2BHvcTd%2B8HPMIYiNYpUtOZYjcTTYXbezmSjtI6%2Bnw2TIVcu3hIJyA1NSLryx%2F4WoW%2FRSReyq0etYs9Z2ecyZ0kUSSTPD1Jrk8inwD3LPFN7pSA56z96XNy5s47gW65jaRuBu3of0FLkAFc7jpLRdsCtNr2hG09jeQfPFTu1rbatk6hdRtMEmNHLWk0kO8Nx%2B4UtUhDXBIX7yIQwvGYCOXl%2Fw9Kp2X9C9Q%2B7pbhUATwz%2FxijVbYniYSyJxUV33lnZZJqr4J7t1yHTctkPpE2ioMrOQhkeEeEH717DWL0uHf6h85U4d18OV7jkRHAcZFO3TxYO0Q8jrPg3xK6InbH81XRkpvPPitEP7RW55pgspigNJ94ExwS3lCrtVRlsf3ncffrjJzZo9ue%2BXCQQZukpkhMrw8WG9Jyg6F6hS8iVG3q8rJTeyfGj%2BlNOzyU9YWU2%2FhgCOk79lJqTy6s%2F2GI9o5B72PY7ImwgImrLPTJa1sX40rANWLr2bQzG%2BUrKtUILZnQTty6BLBmzhNj8YhLWNSQvIETTwzqLdRsGx8PzGlEfkudlb%2BcZ4PVBycDpgT2BEKz8I9KoA%2BDVVDoDz%2BJD%2FJJ3r2d9X%2BJS5MPa5i74GOqUBplio58cBkMRx6zXJjXlXIiDEssDDnabrCqbxwhMmIzPpubm9Dm59WNqpheeuXq2AUKHdbHTQbyVIRgYWJjvpDHVq4YJcr5qIiTVl3TpfWZ5FV3kKBoUyEjgjiuz4MGZSpOQCgKqZOeSk8IkJ55JmVguWULSmT%2By0%2BOvaRwzFIw8URr7qVjbY1PkO5l1LXd4LCPhnkOIO8cNJSV814o1MlrzCnHZl&X-Amz-Signature=a8d982d3fe73f284695d2784a0a357a71591f4a82fc0c51c20a8d2b301a8f74e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
