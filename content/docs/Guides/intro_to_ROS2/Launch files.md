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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XVY4Q3P%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8tCEyxiBrZYGcdurxYCEZLH61a%2F4Fa6AMs0Sg8dXcCAiEAjCrcjlpyVJnYPtfw44UDCdiQI%2FYAAFFRJbANeeNCTgkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkiaGaroUFsihCBxSrcA%2FQOzo5g9pmyP2on7VU8rB6wADvA9NqLiAB%2Fr0gqDSFEDRcJuwlrl54I5Z64ZeRMcWZowrGxvyPQll2lO7Krurm2GYLX00KMURsjCnCmNqoZoxoxNAw5X9ayWV0TNoEHZXDFuwBKDkQO%2FUW4OccWHx4XgEWNyOl4PvG05xNK%2Bw7FmsOUzG%2FQN4Fqe4iCpcItUF8LUSTs7HTHWEVeUPq%2BzC3%2BHV0hA%2BpMfRgQYNmh4AWQkgzGNELva%2FwIML4oTug9MBPiY3UyeQNrcvxIQnLdhSwcUAO8LjBVYPt6PD7x7u3irp3yIbIUOXXuxp9SbSVmH824CxfozoRFxOTykwfZnfsAHVn8cfrUfp2zkASkdafWqamvFAxiazKjslIXsE7vQAuORuRbYBbNW8QDONoAldCUxSIQHyh%2Fg9hpCYZW12KjigqFs%2Bk8YKRTm%2F5K03bLt9FGMAc6unkSGXOWRjLlXLJOu3WUem4lzpbEtTPmw8ExwFpDMVR9S%2B%2Fb45yIoBXW5nFkUd1MKk4ZdnA3mkee0CQQSsurDTKxl7Nb8e25qj87frOYPapu24ttBvLPskUYEpu%2FpjmJxIlcraPa0Mf9lX4%2BeYgPiHvCb1q8g3f%2BU6%2Bi4%2Fj8%2Fw%2BI%2B%2BQJ4%2BWLMKiIq8EGOqUBk5fRf%2BtvIeM8OdlDWAwuMhQ1OEzAKe3yI4yjxIC%2FHZwQia6uHK3mNAtGJy0hBkk3UG8AlQR3tO%2BeSwKtfeEVQrmdWWMZ0WK2xCsmwvGjlOW9m1TPousg%2BeRY3PeSy%2F43x9Y6ZniORkb3EghgP9R%2F8gK26CY8skVMIqe4MJJ1gmkNaKoOdgBgzNVMwlYNPc09gqiW6AqYzRCck2h6cL4iR7v%2BT2dN&X-Amz-Signature=f633a4efade4664963564f4b713d54671f405b8d8da013f47649baa1f8dc4848&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XVY4Q3P%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8tCEyxiBrZYGcdurxYCEZLH61a%2F4Fa6AMs0Sg8dXcCAiEAjCrcjlpyVJnYPtfw44UDCdiQI%2FYAAFFRJbANeeNCTgkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkiaGaroUFsihCBxSrcA%2FQOzo5g9pmyP2on7VU8rB6wADvA9NqLiAB%2Fr0gqDSFEDRcJuwlrl54I5Z64ZeRMcWZowrGxvyPQll2lO7Krurm2GYLX00KMURsjCnCmNqoZoxoxNAw5X9ayWV0TNoEHZXDFuwBKDkQO%2FUW4OccWHx4XgEWNyOl4PvG05xNK%2Bw7FmsOUzG%2FQN4Fqe4iCpcItUF8LUSTs7HTHWEVeUPq%2BzC3%2BHV0hA%2BpMfRgQYNmh4AWQkgzGNELva%2FwIML4oTug9MBPiY3UyeQNrcvxIQnLdhSwcUAO8LjBVYPt6PD7x7u3irp3yIbIUOXXuxp9SbSVmH824CxfozoRFxOTykwfZnfsAHVn8cfrUfp2zkASkdafWqamvFAxiazKjslIXsE7vQAuORuRbYBbNW8QDONoAldCUxSIQHyh%2Fg9hpCYZW12KjigqFs%2Bk8YKRTm%2F5K03bLt9FGMAc6unkSGXOWRjLlXLJOu3WUem4lzpbEtTPmw8ExwFpDMVR9S%2B%2Fb45yIoBXW5nFkUd1MKk4ZdnA3mkee0CQQSsurDTKxl7Nb8e25qj87frOYPapu24ttBvLPskUYEpu%2FpjmJxIlcraPa0Mf9lX4%2BeYgPiHvCb1q8g3f%2BU6%2Bi4%2Fj8%2Fw%2BI%2B%2BQJ4%2BWLMKiIq8EGOqUBk5fRf%2BtvIeM8OdlDWAwuMhQ1OEzAKe3yI4yjxIC%2FHZwQia6uHK3mNAtGJy0hBkk3UG8AlQR3tO%2BeSwKtfeEVQrmdWWMZ0WK2xCsmwvGjlOW9m1TPousg%2BeRY3PeSy%2F43x9Y6ZniORkb3EghgP9R%2F8gK26CY8skVMIqe4MJJ1gmkNaKoOdgBgzNVMwlYNPc09gqiW6AqYzRCck2h6cL4iR7v%2BT2dN&X-Amz-Signature=0a6b152dcb8a796503517f122675670683a05b4813deed46e889bbf7a8683d56&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XVY4Q3P%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8tCEyxiBrZYGcdurxYCEZLH61a%2F4Fa6AMs0Sg8dXcCAiEAjCrcjlpyVJnYPtfw44UDCdiQI%2FYAAFFRJbANeeNCTgkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkiaGaroUFsihCBxSrcA%2FQOzo5g9pmyP2on7VU8rB6wADvA9NqLiAB%2Fr0gqDSFEDRcJuwlrl54I5Z64ZeRMcWZowrGxvyPQll2lO7Krurm2GYLX00KMURsjCnCmNqoZoxoxNAw5X9ayWV0TNoEHZXDFuwBKDkQO%2FUW4OccWHx4XgEWNyOl4PvG05xNK%2Bw7FmsOUzG%2FQN4Fqe4iCpcItUF8LUSTs7HTHWEVeUPq%2BzC3%2BHV0hA%2BpMfRgQYNmh4AWQkgzGNELva%2FwIML4oTug9MBPiY3UyeQNrcvxIQnLdhSwcUAO8LjBVYPt6PD7x7u3irp3yIbIUOXXuxp9SbSVmH824CxfozoRFxOTykwfZnfsAHVn8cfrUfp2zkASkdafWqamvFAxiazKjslIXsE7vQAuORuRbYBbNW8QDONoAldCUxSIQHyh%2Fg9hpCYZW12KjigqFs%2Bk8YKRTm%2F5K03bLt9FGMAc6unkSGXOWRjLlXLJOu3WUem4lzpbEtTPmw8ExwFpDMVR9S%2B%2Fb45yIoBXW5nFkUd1MKk4ZdnA3mkee0CQQSsurDTKxl7Nb8e25qj87frOYPapu24ttBvLPskUYEpu%2FpjmJxIlcraPa0Mf9lX4%2BeYgPiHvCb1q8g3f%2BU6%2Bi4%2Fj8%2Fw%2BI%2B%2BQJ4%2BWLMKiIq8EGOqUBk5fRf%2BtvIeM8OdlDWAwuMhQ1OEzAKe3yI4yjxIC%2FHZwQia6uHK3mNAtGJy0hBkk3UG8AlQR3tO%2BeSwKtfeEVQrmdWWMZ0WK2xCsmwvGjlOW9m1TPousg%2BeRY3PeSy%2F43x9Y6ZniORkb3EghgP9R%2F8gK26CY8skVMIqe4MJJ1gmkNaKoOdgBgzNVMwlYNPc09gqiW6AqYzRCck2h6cL4iR7v%2BT2dN&X-Amz-Signature=59bb85c2d7f105266c4f206c01e044351fb92730f01dcf2b3d3d227f5d209ead&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
