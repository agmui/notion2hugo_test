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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZIYGOGU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkNu14se1C6ieBvjJdZrscFZak7hRzrJhBuiWzdtqsrAIhAMNU3KM0RVAJKBMXbngzmI13dyhiksmUgNZBI1aH3YYUKv8DCBoQABoMNjM3NDIzMTgzODA1IgxP3I38UGxhse%2FPj%2F4q3AOqUlx9hQGzdILwt%2FMS16MXTg4UL4aexTKFC6hn%2Fq2xuJrLMaeICU2ns%2F5BbnNxjdY52NVCs25Gcn7ZYPRXpYl%2FzBb7a%2B9FPLuIjNioYkmkmpFCWbN9pvknRTBk%2BJv7JzM6paqy%2FDixTz%2B874yAVggsk2PnHxypWPfkYxan2olvG2MWBjqnyPoF5BdZNhseH34lqANpj%2BL0fbLKJGW34QdjAuFIFh60s2HxtzkV96H%2B0UPvdPGno3e2mI1ucwIW8CO06MOY8mVfWxdm4vjuy4M0cMdKZM26%2BFpq2WNeh%2BM%2B%2FBZ8PH98DLwRwriMS4PNrpNyTaXVWSnJTHGz9%2Bj1kF3A%2FFqXYzeFPmb%2Fvp%2FF1oZDYlAiQUoF4AgKYN4ZZlqDRVrKIKATHW5J0PUCeMVWv1apKIiRVPrDIkpOC0GrwWGdhUfB%2B%2BYNOPpKpTpmx3VcIsqBH1cCClQBzhc6tb%2FV9TferdevC%2Bc7eHT4pencgY%2Bm84YWCbG8hz8Tc6fIE1A18gTZ4G3l8Kt2iOQ07LeoR4RzppbJEvjaUpk%2BZu%2FhzpofS9WYUwnS3Gbgzo5JLl%2Be1XPWPYiRODZESR66p4feVXie7rcB990lKqSImaVZLfG7c1hfk7dasH8zRjWyTTCFhKK%2BBjqkARM96madQevXYv7DcoFTTcOAPVwoVnc4ul2Ta9AsjDyJ9O8fezK8xV3NsAg8p0U7PPLLZtvhGkqUG7Dk1md1wz%2BYfqoERn3Chdl4I7u%2BlzIHiHaJBTM8O8rnjU7u17ubvlcz0BQUO5tTJXjEE6M7R6Qv8%2Fea%2Fw%2B%2FlPrfEyQV%2Bs%2Fmv2zjOGbGbdqailEQXirXHWVtRBV%2BdhobBOn5kvmwQaEQ13To&X-Amz-Signature=ee0acdac58a25defaf7c5dd0d25cdda09002b686cbaee07375f44ad1d5d5534c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZIYGOGU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkNu14se1C6ieBvjJdZrscFZak7hRzrJhBuiWzdtqsrAIhAMNU3KM0RVAJKBMXbngzmI13dyhiksmUgNZBI1aH3YYUKv8DCBoQABoMNjM3NDIzMTgzODA1IgxP3I38UGxhse%2FPj%2F4q3AOqUlx9hQGzdILwt%2FMS16MXTg4UL4aexTKFC6hn%2Fq2xuJrLMaeICU2ns%2F5BbnNxjdY52NVCs25Gcn7ZYPRXpYl%2FzBb7a%2B9FPLuIjNioYkmkmpFCWbN9pvknRTBk%2BJv7JzM6paqy%2FDixTz%2B874yAVggsk2PnHxypWPfkYxan2olvG2MWBjqnyPoF5BdZNhseH34lqANpj%2BL0fbLKJGW34QdjAuFIFh60s2HxtzkV96H%2B0UPvdPGno3e2mI1ucwIW8CO06MOY8mVfWxdm4vjuy4M0cMdKZM26%2BFpq2WNeh%2BM%2B%2FBZ8PH98DLwRwriMS4PNrpNyTaXVWSnJTHGz9%2Bj1kF3A%2FFqXYzeFPmb%2Fvp%2FF1oZDYlAiQUoF4AgKYN4ZZlqDRVrKIKATHW5J0PUCeMVWv1apKIiRVPrDIkpOC0GrwWGdhUfB%2B%2BYNOPpKpTpmx3VcIsqBH1cCClQBzhc6tb%2FV9TferdevC%2Bc7eHT4pencgY%2Bm84YWCbG8hz8Tc6fIE1A18gTZ4G3l8Kt2iOQ07LeoR4RzppbJEvjaUpk%2BZu%2FhzpofS9WYUwnS3Gbgzo5JLl%2Be1XPWPYiRODZESR66p4feVXie7rcB990lKqSImaVZLfG7c1hfk7dasH8zRjWyTTCFhKK%2BBjqkARM96madQevXYv7DcoFTTcOAPVwoVnc4ul2Ta9AsjDyJ9O8fezK8xV3NsAg8p0U7PPLLZtvhGkqUG7Dk1md1wz%2BYfqoERn3Chdl4I7u%2BlzIHiHaJBTM8O8rnjU7u17ubvlcz0BQUO5tTJXjEE6M7R6Qv8%2Fea%2Fw%2B%2FlPrfEyQV%2Bs%2Fmv2zjOGbGbdqailEQXirXHWVtRBV%2BdhobBOn5kvmwQaEQ13To&X-Amz-Signature=dbc4d2e70becdc57604eccebc2fff77f3484e97a8d150a5d2ec073e0ca1a5f9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZIYGOGU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkNu14se1C6ieBvjJdZrscFZak7hRzrJhBuiWzdtqsrAIhAMNU3KM0RVAJKBMXbngzmI13dyhiksmUgNZBI1aH3YYUKv8DCBoQABoMNjM3NDIzMTgzODA1IgxP3I38UGxhse%2FPj%2F4q3AOqUlx9hQGzdILwt%2FMS16MXTg4UL4aexTKFC6hn%2Fq2xuJrLMaeICU2ns%2F5BbnNxjdY52NVCs25Gcn7ZYPRXpYl%2FzBb7a%2B9FPLuIjNioYkmkmpFCWbN9pvknRTBk%2BJv7JzM6paqy%2FDixTz%2B874yAVggsk2PnHxypWPfkYxan2olvG2MWBjqnyPoF5BdZNhseH34lqANpj%2BL0fbLKJGW34QdjAuFIFh60s2HxtzkV96H%2B0UPvdPGno3e2mI1ucwIW8CO06MOY8mVfWxdm4vjuy4M0cMdKZM26%2BFpq2WNeh%2BM%2B%2FBZ8PH98DLwRwriMS4PNrpNyTaXVWSnJTHGz9%2Bj1kF3A%2FFqXYzeFPmb%2Fvp%2FF1oZDYlAiQUoF4AgKYN4ZZlqDRVrKIKATHW5J0PUCeMVWv1apKIiRVPrDIkpOC0GrwWGdhUfB%2B%2BYNOPpKpTpmx3VcIsqBH1cCClQBzhc6tb%2FV9TferdevC%2Bc7eHT4pencgY%2Bm84YWCbG8hz8Tc6fIE1A18gTZ4G3l8Kt2iOQ07LeoR4RzppbJEvjaUpk%2BZu%2FhzpofS9WYUwnS3Gbgzo5JLl%2Be1XPWPYiRODZESR66p4feVXie7rcB990lKqSImaVZLfG7c1hfk7dasH8zRjWyTTCFhKK%2BBjqkARM96madQevXYv7DcoFTTcOAPVwoVnc4ul2Ta9AsjDyJ9O8fezK8xV3NsAg8p0U7PPLLZtvhGkqUG7Dk1md1wz%2BYfqoERn3Chdl4I7u%2BlzIHiHaJBTM8O8rnjU7u17ubvlcz0BQUO5tTJXjEE6M7R6Qv8%2Fea%2Fw%2B%2FlPrfEyQV%2Bs%2Fmv2zjOGbGbdqailEQXirXHWVtRBV%2BdhobBOn5kvmwQaEQ13To&X-Amz-Signature=1795021810cea618204fb43217f7db392150a162ff9ce72e7ea5e911f32b3693&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
