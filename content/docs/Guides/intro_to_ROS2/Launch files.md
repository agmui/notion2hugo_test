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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQGF6UJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhmTen8iTgphWTeh6oiQzOvnLNn5e9y%2BsyNzvUnzMEDgIhAIlEGTBVHLGFmwn9aO5FWcEFIqIJWy1SEsLFXFz%2Fur2sKv8DCFwQABoMNjM3NDIzMTgzODA1IgxhbapnDTRjq%2FISe%2F4q3AOrF1sJcF7cDuYmQNKkv9nIcKS7vJDNat8Mj7gfVDqT%2FEetFa4uvFht3oDymhLySPXEUEs4fGSwctcomt8ylIxFWXgtK992FEyNHG5vahVmNCfZjPdg1dZAep%2FZkxUfOwHsykY%2BL668hqaZ5DwukB3sSuzW0g8hKhqIO6a%2BwPdcdawr1lETsVnxF6Fb2kMerv7nBo4cJI0x9SMRlK0LMuRe%2BnGWHkf1gWMq6uzOVEIB7rY6SpOKBYK%2BC9ifHev0NFrCSugBZC9vVZW84XDwtc8I3obxOqq3Q97jlgyR4cxJB5L6YOK6ALCrcXGWBx%2FRf4tbaicRFZc47ECORCnZXTqsLjzSHv%2FbWE%2BvFrqnYiy8r2L8EzPCRJCutKFiwbJFXYeJ%2FwC9oxAj4iPdkPFAhdbMsd83O0eR4sIUpZncbOuob9bTXuOCeB74M0wOJn2ZaiQbr7Rv0gSoeATlMOtzNVv1DigWrnEnBj1twiHGf1S9t0SgA%2BP%2Bl4%2FqJbMYZuGD13wAf%2Bk37NIMUeJzDPFUbUS8a0jlyJXhzAHMHSPVVmxwVTWAmeor0u50vN9FyS58%2F8lfUZYfhYb3tsRmk2OSlYIDWRFwqrIXbzTAJ3ZJYWEIenBK6Knz631wOzQxBDC4q9bBBjqkAYRqQiQ6d7gNRRU2acF%2FMQlFCgawFnmaPtGrUbCpjI70HanX0qqm%2FQOujJyPJonk%2FOW1LvkJ%2Bds5B9Xfn%2FR4O5eWawMrdEjQvRo6945TwTcxw4q0AZe98xVWuJdWCAtP1cyEvoEq0Jacbpxa0%2BrjbO3uYTFe32EZgTm0WEN9SV0kY2bVqtihZElPWSDi68wn8q3eShpEcVfHN%2B6GdTyFY1BiPEW5&X-Amz-Signature=6709371e52d6c0a06fd2d4da8a5f982818e30ddccaef875b7370548437a8393b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQGF6UJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhmTen8iTgphWTeh6oiQzOvnLNn5e9y%2BsyNzvUnzMEDgIhAIlEGTBVHLGFmwn9aO5FWcEFIqIJWy1SEsLFXFz%2Fur2sKv8DCFwQABoMNjM3NDIzMTgzODA1IgxhbapnDTRjq%2FISe%2F4q3AOrF1sJcF7cDuYmQNKkv9nIcKS7vJDNat8Mj7gfVDqT%2FEetFa4uvFht3oDymhLySPXEUEs4fGSwctcomt8ylIxFWXgtK992FEyNHG5vahVmNCfZjPdg1dZAep%2FZkxUfOwHsykY%2BL668hqaZ5DwukB3sSuzW0g8hKhqIO6a%2BwPdcdawr1lETsVnxF6Fb2kMerv7nBo4cJI0x9SMRlK0LMuRe%2BnGWHkf1gWMq6uzOVEIB7rY6SpOKBYK%2BC9ifHev0NFrCSugBZC9vVZW84XDwtc8I3obxOqq3Q97jlgyR4cxJB5L6YOK6ALCrcXGWBx%2FRf4tbaicRFZc47ECORCnZXTqsLjzSHv%2FbWE%2BvFrqnYiy8r2L8EzPCRJCutKFiwbJFXYeJ%2FwC9oxAj4iPdkPFAhdbMsd83O0eR4sIUpZncbOuob9bTXuOCeB74M0wOJn2ZaiQbr7Rv0gSoeATlMOtzNVv1DigWrnEnBj1twiHGf1S9t0SgA%2BP%2Bl4%2FqJbMYZuGD13wAf%2Bk37NIMUeJzDPFUbUS8a0jlyJXhzAHMHSPVVmxwVTWAmeor0u50vN9FyS58%2F8lfUZYfhYb3tsRmk2OSlYIDWRFwqrIXbzTAJ3ZJYWEIenBK6Knz631wOzQxBDC4q9bBBjqkAYRqQiQ6d7gNRRU2acF%2FMQlFCgawFnmaPtGrUbCpjI70HanX0qqm%2FQOujJyPJonk%2FOW1LvkJ%2Bds5B9Xfn%2FR4O5eWawMrdEjQvRo6945TwTcxw4q0AZe98xVWuJdWCAtP1cyEvoEq0Jacbpxa0%2BrjbO3uYTFe32EZgTm0WEN9SV0kY2bVqtihZElPWSDi68wn8q3eShpEcVfHN%2B6GdTyFY1BiPEW5&X-Amz-Signature=facd86452d6f038aeb9d54e01499c4da93e7633798985d2975cd9b71e0b28dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQGF6UJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhmTen8iTgphWTeh6oiQzOvnLNn5e9y%2BsyNzvUnzMEDgIhAIlEGTBVHLGFmwn9aO5FWcEFIqIJWy1SEsLFXFz%2Fur2sKv8DCFwQABoMNjM3NDIzMTgzODA1IgxhbapnDTRjq%2FISe%2F4q3AOrF1sJcF7cDuYmQNKkv9nIcKS7vJDNat8Mj7gfVDqT%2FEetFa4uvFht3oDymhLySPXEUEs4fGSwctcomt8ylIxFWXgtK992FEyNHG5vahVmNCfZjPdg1dZAep%2FZkxUfOwHsykY%2BL668hqaZ5DwukB3sSuzW0g8hKhqIO6a%2BwPdcdawr1lETsVnxF6Fb2kMerv7nBo4cJI0x9SMRlK0LMuRe%2BnGWHkf1gWMq6uzOVEIB7rY6SpOKBYK%2BC9ifHev0NFrCSugBZC9vVZW84XDwtc8I3obxOqq3Q97jlgyR4cxJB5L6YOK6ALCrcXGWBx%2FRf4tbaicRFZc47ECORCnZXTqsLjzSHv%2FbWE%2BvFrqnYiy8r2L8EzPCRJCutKFiwbJFXYeJ%2FwC9oxAj4iPdkPFAhdbMsd83O0eR4sIUpZncbOuob9bTXuOCeB74M0wOJn2ZaiQbr7Rv0gSoeATlMOtzNVv1DigWrnEnBj1twiHGf1S9t0SgA%2BP%2Bl4%2FqJbMYZuGD13wAf%2Bk37NIMUeJzDPFUbUS8a0jlyJXhzAHMHSPVVmxwVTWAmeor0u50vN9FyS58%2F8lfUZYfhYb3tsRmk2OSlYIDWRFwqrIXbzTAJ3ZJYWEIenBK6Knz631wOzQxBDC4q9bBBjqkAYRqQiQ6d7gNRRU2acF%2FMQlFCgawFnmaPtGrUbCpjI70HanX0qqm%2FQOujJyPJonk%2FOW1LvkJ%2Bds5B9Xfn%2FR4O5eWawMrdEjQvRo6945TwTcxw4q0AZe98xVWuJdWCAtP1cyEvoEq0Jacbpxa0%2BrjbO3uYTFe32EZgTm0WEN9SV0kY2bVqtihZElPWSDi68wn8q3eShpEcVfHN%2B6GdTyFY1BiPEW5&X-Amz-Signature=ec30da343bb80a112376215399208c95d887f84ac494c62c2e80d7ad8bd36acd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
