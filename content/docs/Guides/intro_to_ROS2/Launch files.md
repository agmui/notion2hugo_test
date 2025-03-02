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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VZOR4IH%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDrEJy6piedxCfeF%2BSG9GYuJeqF8iiEtdY91uKO%2FeDoGgIhAJFumVQpKECeGD0imTEJLgRXDv1kGsUFfrwXzH4uZ%2F14KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FYUzzPPbui8X%2Bid0q3AOpLl%2BRyrZ0EesgWxUdET9h258WT25yGiNlHEAAoSD7Jpcv5B%2BuyWM%2B2nUcTcmN%2FAV2VTIT4i%2BJi38kOxmlM9DDfGjsA1rPctAdT8NSr2YqnfDZCbASjdBLJjET4FHK9cpMU%2F%2BKhmgw%2F5PRC7WH2CheS5SADUHLRObP7rBgh5GVd1cYrAG3n8y5WbGEQTLF%2F4tp27kSI6EqWCBUYd22wCXYIkv9VCWoGWSxCa28zx1102TAHqmWMGR8AZrrht9ZCOOlx%2FhqDwvzlF1iFBmNEUhBD%2BdK47SUFpSU98cmjLZ%2BZX3NQso6FDG11A4aa3EfGGu7ftKDIEoUJFTMv6ogILG5LIS8%2FizP9rk1ZtxWYHUfxf%2B%2B2luxKAB%2B%2FdPURmQ13F93NRk%2BfpoLlmBasvsH5fIVSnddysDy%2Fzq2S4q2SBPsE97VueXiqKUqyXtzSE92vq73mStlnLoQ%2BOIpKKvuJY0qpUf1OZ%2B78AKG6YiMtXQz6UUIIag7KuLbi1gOH%2FhTvBGLrhCmbZEwnljGC1W5lT4KwOKAdYQ5qrC6Cuc6uZjyZtMMkH%2F3fh4LIGdwRl6Tp2odFwQjjGXt8B2EctyfQDScAPOhEZYMJVq9zhQj4JXKbpkstTAWegQzmLIusTCe2I%2B%2BBjqkAbU%2BvTWTbdSsF1hPWykXNOPeTYGaWPt0V%2FoLG1mbavVumikAWk3qzizFm48Dgbh1WPvw%2BUBZkDjvw3UYfqUyZvAqlD3veVDY8omzjHNYUbXelJq1UeewYtrZPzT9d8IhHODPT0SjZkF%2B2DILfyRAVkhK7TZjVcdlt9YNdZQCWYcc1lzFy%2BPBzSPyzRZ0GLYsDgEZqa81avIQ3VZli8RQQGUQTJTB&X-Amz-Signature=892539277b93498a6ddb7d28fdf7bb5fc5fd407f32e431483cb614d9cd223a29&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VZOR4IH%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDrEJy6piedxCfeF%2BSG9GYuJeqF8iiEtdY91uKO%2FeDoGgIhAJFumVQpKECeGD0imTEJLgRXDv1kGsUFfrwXzH4uZ%2F14KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FYUzzPPbui8X%2Bid0q3AOpLl%2BRyrZ0EesgWxUdET9h258WT25yGiNlHEAAoSD7Jpcv5B%2BuyWM%2B2nUcTcmN%2FAV2VTIT4i%2BJi38kOxmlM9DDfGjsA1rPctAdT8NSr2YqnfDZCbASjdBLJjET4FHK9cpMU%2F%2BKhmgw%2F5PRC7WH2CheS5SADUHLRObP7rBgh5GVd1cYrAG3n8y5WbGEQTLF%2F4tp27kSI6EqWCBUYd22wCXYIkv9VCWoGWSxCa28zx1102TAHqmWMGR8AZrrht9ZCOOlx%2FhqDwvzlF1iFBmNEUhBD%2BdK47SUFpSU98cmjLZ%2BZX3NQso6FDG11A4aa3EfGGu7ftKDIEoUJFTMv6ogILG5LIS8%2FizP9rk1ZtxWYHUfxf%2B%2B2luxKAB%2B%2FdPURmQ13F93NRk%2BfpoLlmBasvsH5fIVSnddysDy%2Fzq2S4q2SBPsE97VueXiqKUqyXtzSE92vq73mStlnLoQ%2BOIpKKvuJY0qpUf1OZ%2B78AKG6YiMtXQz6UUIIag7KuLbi1gOH%2FhTvBGLrhCmbZEwnljGC1W5lT4KwOKAdYQ5qrC6Cuc6uZjyZtMMkH%2F3fh4LIGdwRl6Tp2odFwQjjGXt8B2EctyfQDScAPOhEZYMJVq9zhQj4JXKbpkstTAWegQzmLIusTCe2I%2B%2BBjqkAbU%2BvTWTbdSsF1hPWykXNOPeTYGaWPt0V%2FoLG1mbavVumikAWk3qzizFm48Dgbh1WPvw%2BUBZkDjvw3UYfqUyZvAqlD3veVDY8omzjHNYUbXelJq1UeewYtrZPzT9d8IhHODPT0SjZkF%2B2DILfyRAVkhK7TZjVcdlt9YNdZQCWYcc1lzFy%2BPBzSPyzRZ0GLYsDgEZqa81avIQ3VZli8RQQGUQTJTB&X-Amz-Signature=e68b16ec4f4811c2278f2f36b3f6dfdbb7c3a56f420e24b3e1874c089b1a63d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VZOR4IH%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T070711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDrEJy6piedxCfeF%2BSG9GYuJeqF8iiEtdY91uKO%2FeDoGgIhAJFumVQpKECeGD0imTEJLgRXDv1kGsUFfrwXzH4uZ%2F14KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FYUzzPPbui8X%2Bid0q3AOpLl%2BRyrZ0EesgWxUdET9h258WT25yGiNlHEAAoSD7Jpcv5B%2BuyWM%2B2nUcTcmN%2FAV2VTIT4i%2BJi38kOxmlM9DDfGjsA1rPctAdT8NSr2YqnfDZCbASjdBLJjET4FHK9cpMU%2F%2BKhmgw%2F5PRC7WH2CheS5SADUHLRObP7rBgh5GVd1cYrAG3n8y5WbGEQTLF%2F4tp27kSI6EqWCBUYd22wCXYIkv9VCWoGWSxCa28zx1102TAHqmWMGR8AZrrht9ZCOOlx%2FhqDwvzlF1iFBmNEUhBD%2BdK47SUFpSU98cmjLZ%2BZX3NQso6FDG11A4aa3EfGGu7ftKDIEoUJFTMv6ogILG5LIS8%2FizP9rk1ZtxWYHUfxf%2B%2B2luxKAB%2B%2FdPURmQ13F93NRk%2BfpoLlmBasvsH5fIVSnddysDy%2Fzq2S4q2SBPsE97VueXiqKUqyXtzSE92vq73mStlnLoQ%2BOIpKKvuJY0qpUf1OZ%2B78AKG6YiMtXQz6UUIIag7KuLbi1gOH%2FhTvBGLrhCmbZEwnljGC1W5lT4KwOKAdYQ5qrC6Cuc6uZjyZtMMkH%2F3fh4LIGdwRl6Tp2odFwQjjGXt8B2EctyfQDScAPOhEZYMJVq9zhQj4JXKbpkstTAWegQzmLIusTCe2I%2B%2BBjqkAbU%2BvTWTbdSsF1hPWykXNOPeTYGaWPt0V%2FoLG1mbavVumikAWk3qzizFm48Dgbh1WPvw%2BUBZkDjvw3UYfqUyZvAqlD3veVDY8omzjHNYUbXelJq1UeewYtrZPzT9d8IhHODPT0SjZkF%2B2DILfyRAVkhK7TZjVcdlt9YNdZQCWYcc1lzFy%2BPBzSPyzRZ0GLYsDgEZqa81avIQ3VZli8RQQGUQTJTB&X-Amz-Signature=52ce546c4e42d29a82db1f7ee18303896ee57f7997b485a0fb48b343375519dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
