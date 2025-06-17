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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JGHKIRP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeLNjHQk8FKUtviJU5PGsKViWj65Ni5fF2eKGIZgHKPwIgXMMm1DNgatNA6xsacV4zlOssqvGqXt9A2RSGbdnib9Qq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDGXMgdRoN%2BL3mGAjwyrcA9u6hElobCuCDC8ZAtGwl7CQaR76hc6u707HQs9yo4bdhEg23YS85tN1tKCriaTFqfA%2F%2FugbooEVwfOHD5noRkehfIrwSQ27gu4IB8BXF%2BCgLbFo4ybSNj6IoiXAnnJyrOBaH8g0QdZpsLA3VEkRsWGYqID6T4sitB60SqgBk6b7x7mxpFerDPMuH%2FHZIaypNFRIY94Jp3eeHummuOZgej%2Bbe2IKfyI0J43W6PhmJv7Wz09Y0m1aM6tsusRHVQmwTlroMXZKyjEgpZrmR2IVS%2FXhtQGl7L6u6lxhZkeFfSD5V8NPqBTkDfG9pxSbJ1MQqyWYc6bTeogjeRAthtKrspwWjFAFyTno%2BgnEA3DjxDy2ZTP%2Fb%2FWqON7ZKV284cyCBORNjTohr6U4ExsYVuYOR2j0fiSsM2es3EbJo9935NrzTmS%2B%2BOJ%2FS7A89%2BL7Z0S%2Fq84XujQ0YWYX0qp0gP%2BXUirf01ayOEax3xgZb5OWyJqUaLkLMh1UTw3rwgXDmNI1MiRaH0uZdcaGbodUjSufMYZ4gEaGH9CTHa9yf6lcJxcCJIa2rV%2B1ETWtBK3LXBrE3NsDxQ6bNbeFyvreIJZirsCWC0cEuwzXGiccpcoRiGUmskIS1z%2FA9YZi%2FZ2qMI7sw8IGOqUB6quOr3rG7FhnGV1dw1NBqUMIwrhbqdq7IaHuY5SIHTH2NX5MSZ96TNncSfbPR2c7s7k3pEVlaqKBJJcnXOSRrPfE1isjaWBPiKd0MKk0OnbDPdb1NLObC4t%2Bp4FPxOZqjlKkYGPCjnmlVej8n2O93w8dMNH2J499Jitga9eCuwf2u8cWXjlpyPg%2Fvp3NeynD55M%2FAC3vryJvZNz1w8E%2F%2BA%2Bq%2FeQC&X-Amz-Signature=70a0f84b857ac77c96c556d7a5328680eaaa73cd3c71af7098ace960cefcb916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JGHKIRP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeLNjHQk8FKUtviJU5PGsKViWj65Ni5fF2eKGIZgHKPwIgXMMm1DNgatNA6xsacV4zlOssqvGqXt9A2RSGbdnib9Qq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDGXMgdRoN%2BL3mGAjwyrcA9u6hElobCuCDC8ZAtGwl7CQaR76hc6u707HQs9yo4bdhEg23YS85tN1tKCriaTFqfA%2F%2FugbooEVwfOHD5noRkehfIrwSQ27gu4IB8BXF%2BCgLbFo4ybSNj6IoiXAnnJyrOBaH8g0QdZpsLA3VEkRsWGYqID6T4sitB60SqgBk6b7x7mxpFerDPMuH%2FHZIaypNFRIY94Jp3eeHummuOZgej%2Bbe2IKfyI0J43W6PhmJv7Wz09Y0m1aM6tsusRHVQmwTlroMXZKyjEgpZrmR2IVS%2FXhtQGl7L6u6lxhZkeFfSD5V8NPqBTkDfG9pxSbJ1MQqyWYc6bTeogjeRAthtKrspwWjFAFyTno%2BgnEA3DjxDy2ZTP%2Fb%2FWqON7ZKV284cyCBORNjTohr6U4ExsYVuYOR2j0fiSsM2es3EbJo9935NrzTmS%2B%2BOJ%2FS7A89%2BL7Z0S%2Fq84XujQ0YWYX0qp0gP%2BXUirf01ayOEax3xgZb5OWyJqUaLkLMh1UTw3rwgXDmNI1MiRaH0uZdcaGbodUjSufMYZ4gEaGH9CTHa9yf6lcJxcCJIa2rV%2B1ETWtBK3LXBrE3NsDxQ6bNbeFyvreIJZirsCWC0cEuwzXGiccpcoRiGUmskIS1z%2FA9YZi%2FZ2qMI7sw8IGOqUB6quOr3rG7FhnGV1dw1NBqUMIwrhbqdq7IaHuY5SIHTH2NX5MSZ96TNncSfbPR2c7s7k3pEVlaqKBJJcnXOSRrPfE1isjaWBPiKd0MKk0OnbDPdb1NLObC4t%2Bp4FPxOZqjlKkYGPCjnmlVej8n2O93w8dMNH2J499Jitga9eCuwf2u8cWXjlpyPg%2Fvp3NeynD55M%2FAC3vryJvZNz1w8E%2F%2BA%2Bq%2FeQC&X-Amz-Signature=7d542806e94326e3af1b33104c73c20952dcd23a6b29b22cff5ac3403cf357e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JGHKIRP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeLNjHQk8FKUtviJU5PGsKViWj65Ni5fF2eKGIZgHKPwIgXMMm1DNgatNA6xsacV4zlOssqvGqXt9A2RSGbdnib9Qq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDGXMgdRoN%2BL3mGAjwyrcA9u6hElobCuCDC8ZAtGwl7CQaR76hc6u707HQs9yo4bdhEg23YS85tN1tKCriaTFqfA%2F%2FugbooEVwfOHD5noRkehfIrwSQ27gu4IB8BXF%2BCgLbFo4ybSNj6IoiXAnnJyrOBaH8g0QdZpsLA3VEkRsWGYqID6T4sitB60SqgBk6b7x7mxpFerDPMuH%2FHZIaypNFRIY94Jp3eeHummuOZgej%2Bbe2IKfyI0J43W6PhmJv7Wz09Y0m1aM6tsusRHVQmwTlroMXZKyjEgpZrmR2IVS%2FXhtQGl7L6u6lxhZkeFfSD5V8NPqBTkDfG9pxSbJ1MQqyWYc6bTeogjeRAthtKrspwWjFAFyTno%2BgnEA3DjxDy2ZTP%2Fb%2FWqON7ZKV284cyCBORNjTohr6U4ExsYVuYOR2j0fiSsM2es3EbJo9935NrzTmS%2B%2BOJ%2FS7A89%2BL7Z0S%2Fq84XujQ0YWYX0qp0gP%2BXUirf01ayOEax3xgZb5OWyJqUaLkLMh1UTw3rwgXDmNI1MiRaH0uZdcaGbodUjSufMYZ4gEaGH9CTHa9yf6lcJxcCJIa2rV%2B1ETWtBK3LXBrE3NsDxQ6bNbeFyvreIJZirsCWC0cEuwzXGiccpcoRiGUmskIS1z%2FA9YZi%2FZ2qMI7sw8IGOqUB6quOr3rG7FhnGV1dw1NBqUMIwrhbqdq7IaHuY5SIHTH2NX5MSZ96TNncSfbPR2c7s7k3pEVlaqKBJJcnXOSRrPfE1isjaWBPiKd0MKk0OnbDPdb1NLObC4t%2Bp4FPxOZqjlKkYGPCjnmlVej8n2O93w8dMNH2J499Jitga9eCuwf2u8cWXjlpyPg%2Fvp3NeynD55M%2FAC3vryJvZNz1w8E%2F%2BA%2Bq%2FeQC&X-Amz-Signature=93add757bfe90ebe25270b4af576e88ef87716d248061d41384f55ee9b334a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
