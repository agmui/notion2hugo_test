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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5KRKPU%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCHjN5EF%2FOHm4CiNqo4cqlYzQ1wrZdHRVKbdhp6MfwhswIhAITR6%2BdNea8b%2FxPOThx9jwQQ6bRgpWUewkHfD64VtkRXKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHmvtppTVFG1G5YJ4q3ANEOFYo7mulEKKY%2B8bkG8xGc%2BXClm8qIggkd3RJ4CEsGbv6lxmKREkxmMK7deInGsxL%2BQ1BVmAMtHq6rm2jwOuZShRtP2JA8BHjtqADmauTC7WlNtWJgSzy6wa97cJONb4AoBk%2FjizN96nCaeVS5uTJ4qR%2FjmIy26LZGo1jhAJXuVNNu2VQSzC5chjdKySBwC7bT%2FL6x3Fseq1KC%2BUdCnyCzKSKZE3nU5bu63qoxnN0dz0Kb6IYnN1kj12YwaHt0ubVBL0dhGPK7wZAiX1vru1oPgnVVR7959vIGUOmzly8o2A6fNw3pC9fIHVNxz99PCIWUdlmtvDt8BDGg%2Fx7dUKo4Ch%2BQTJnmjsdQQDIqeFi%2B9jXwbQu7xztm5K7u1RGc3UxlDyOQncmPYVSDfgwtvttsZ9OvbxZAaKclbtfoqOSJ5TrONUEa58Aq2M89ZuaQgm0PP4DeTpP0Lv2A8qnjuOFSiciZP1U5GfzxYCkrmlyJcAQio6NIDLaMWGWjSBrgZvtjsMHbULo3ReZPTa12h7kcF4w4zq6vcySjtztAvliJ%2BhW6nwygrRqPWTBCcwmr%2FLoWrGV8ebYqNdG64M2n8hwO2vkIjYk98jEet2PglOJgiSSf2aaPYdmcF%2BLZjDW7P7ABjqkARpZHAdHXiEGdHBFf4PUy%2BnEZUgsINFZjndIzaUQAeM0bpVvm7PO5vTWup2pUCx%2Fy57MIz1LUbzsNZGa2Hs0w5yOm0RStvsXv216dVXM1%2FjuhshHUH1XaV5CVVazWluGrqCLoZGHDqPtDCNv87JBC2Ti%2BTsS1Rq183tes%2FzCVsWcFD0j0g%2F0nWkcRfEnsza%2FI6FQg8I89y%2BLFIgD1X4KTLXKwNnY&X-Amz-Signature=8280f7001983a30bec63b458893a83b94bca8be1d86bd38ab1adc1a31e072a72&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5KRKPU%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCHjN5EF%2FOHm4CiNqo4cqlYzQ1wrZdHRVKbdhp6MfwhswIhAITR6%2BdNea8b%2FxPOThx9jwQQ6bRgpWUewkHfD64VtkRXKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHmvtppTVFG1G5YJ4q3ANEOFYo7mulEKKY%2B8bkG8xGc%2BXClm8qIggkd3RJ4CEsGbv6lxmKREkxmMK7deInGsxL%2BQ1BVmAMtHq6rm2jwOuZShRtP2JA8BHjtqADmauTC7WlNtWJgSzy6wa97cJONb4AoBk%2FjizN96nCaeVS5uTJ4qR%2FjmIy26LZGo1jhAJXuVNNu2VQSzC5chjdKySBwC7bT%2FL6x3Fseq1KC%2BUdCnyCzKSKZE3nU5bu63qoxnN0dz0Kb6IYnN1kj12YwaHt0ubVBL0dhGPK7wZAiX1vru1oPgnVVR7959vIGUOmzly8o2A6fNw3pC9fIHVNxz99PCIWUdlmtvDt8BDGg%2Fx7dUKo4Ch%2BQTJnmjsdQQDIqeFi%2B9jXwbQu7xztm5K7u1RGc3UxlDyOQncmPYVSDfgwtvttsZ9OvbxZAaKclbtfoqOSJ5TrONUEa58Aq2M89ZuaQgm0PP4DeTpP0Lv2A8qnjuOFSiciZP1U5GfzxYCkrmlyJcAQio6NIDLaMWGWjSBrgZvtjsMHbULo3ReZPTa12h7kcF4w4zq6vcySjtztAvliJ%2BhW6nwygrRqPWTBCcwmr%2FLoWrGV8ebYqNdG64M2n8hwO2vkIjYk98jEet2PglOJgiSSf2aaPYdmcF%2BLZjDW7P7ABjqkARpZHAdHXiEGdHBFf4PUy%2BnEZUgsINFZjndIzaUQAeM0bpVvm7PO5vTWup2pUCx%2Fy57MIz1LUbzsNZGa2Hs0w5yOm0RStvsXv216dVXM1%2FjuhshHUH1XaV5CVVazWluGrqCLoZGHDqPtDCNv87JBC2Ti%2BTsS1Rq183tes%2FzCVsWcFD0j0g%2F0nWkcRfEnsza%2FI6FQg8I89y%2BLFIgD1X4KTLXKwNnY&X-Amz-Signature=6a7a1992530f743834aa3f19222e0a79dd164ee9df7a5b35d895ef218a48ff7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5KRKPU%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCHjN5EF%2FOHm4CiNqo4cqlYzQ1wrZdHRVKbdhp6MfwhswIhAITR6%2BdNea8b%2FxPOThx9jwQQ6bRgpWUewkHfD64VtkRXKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHmvtppTVFG1G5YJ4q3ANEOFYo7mulEKKY%2B8bkG8xGc%2BXClm8qIggkd3RJ4CEsGbv6lxmKREkxmMK7deInGsxL%2BQ1BVmAMtHq6rm2jwOuZShRtP2JA8BHjtqADmauTC7WlNtWJgSzy6wa97cJONb4AoBk%2FjizN96nCaeVS5uTJ4qR%2FjmIy26LZGo1jhAJXuVNNu2VQSzC5chjdKySBwC7bT%2FL6x3Fseq1KC%2BUdCnyCzKSKZE3nU5bu63qoxnN0dz0Kb6IYnN1kj12YwaHt0ubVBL0dhGPK7wZAiX1vru1oPgnVVR7959vIGUOmzly8o2A6fNw3pC9fIHVNxz99PCIWUdlmtvDt8BDGg%2Fx7dUKo4Ch%2BQTJnmjsdQQDIqeFi%2B9jXwbQu7xztm5K7u1RGc3UxlDyOQncmPYVSDfgwtvttsZ9OvbxZAaKclbtfoqOSJ5TrONUEa58Aq2M89ZuaQgm0PP4DeTpP0Lv2A8qnjuOFSiciZP1U5GfzxYCkrmlyJcAQio6NIDLaMWGWjSBrgZvtjsMHbULo3ReZPTa12h7kcF4w4zq6vcySjtztAvliJ%2BhW6nwygrRqPWTBCcwmr%2FLoWrGV8ebYqNdG64M2n8hwO2vkIjYk98jEet2PglOJgiSSf2aaPYdmcF%2BLZjDW7P7ABjqkARpZHAdHXiEGdHBFf4PUy%2BnEZUgsINFZjndIzaUQAeM0bpVvm7PO5vTWup2pUCx%2Fy57MIz1LUbzsNZGa2Hs0w5yOm0RStvsXv216dVXM1%2FjuhshHUH1XaV5CVVazWluGrqCLoZGHDqPtDCNv87JBC2Ti%2BTsS1Rq183tes%2FzCVsWcFD0j0g%2F0nWkcRfEnsza%2FI6FQg8I89y%2BLFIgD1X4KTLXKwNnY&X-Amz-Signature=48431fd071a49c06c4d00c7bb7a912f95ad55f7b477bc2d537b8056054468dc8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
