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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVSYS6P%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDpyD7SMra%2Fuk92MKhzNYw9e18Jm0GawpLkQb08cEctbQIhALjk3NIMNCfIJBq8reMgFrqGWfmrpCMAQASfsawagz9OKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytqUIWqurjMEeOXmYq3APxp9HSPIF31eDB59wAvOFauiXKLOBilGIY%2BBmOUU0IPeTZExuhpkPzsKk8Ct%2F02zwCfDoz6LkD4ZpfugU71sFKPTCc41Emjlli78Z8n8h%2Bztr8IbPOVFV0r8nofQ2zlQKOzWI3CY0wKnSv8Gk8zAe%2FHP6XY7mS6ORL3mZpnEy749BL9cCByNEyZ2FlvElfieH%2BnHsHEXHTrKVe6U%2BmQvB18twYnPzd9%2FOcvbOIgKEBQNlnhPftjssPH6K1BucwkS4wV1m9w8dDPHyRrsasXmXf1fVZV%2F1CCTz7xYCO%2BZctWH7ArSqhdyzLViD8Vkkeltjs0HJkMbAPUcvaMM7R20n4i1A3Opx2ghBExPDofxOky%2FhDMoGO710NCaVLNv6THoLoWLwCoUF%2F218Ob8EK2Tj4UyvziOLcdRFXtbepczCg9wYHfwpWF%2BGHh5K8ZjqLf94QwRlkOxc6MYzxIhKqZW46%2BTCQe3wdnHyov1%2BVno%2Bi1SJc0QY2qZ22mJDS6BNbMDXtG7NJs2cbrO7Q8Ig1xu8dO1HcwOhiz%2F1KRjlP1Z26ZX0T%2FyruD%2BQHgKthL%2BX%2BZiCMkev36fOiC0fJaM5X0QT%2F6uK4KWNiVkWsdgFcYI8aryhJyMd52AGj146UxTCOqry%2BBjqkAfgUp38htOiR7lvB9a6xyFqmw9YhduU33%2Bs9LR8DKHJ%2FW9Eoq2KTaQ6hfW%2Ft9NmcSMBp68eqmqwV3pBji08%2FqndsUs9akkfTEqHUrVATQKRREfX%2Fd3xII1k5MRBu2QVP29aSWZqYp%2FoTHpdlz8NxfCg5a7bRTf7m2%2F%2FO3OudSPFWmXLcrqo58tmnb0aXq1J2v%2B%2BkdTcjA3Vy7rDY7sScrLMLkWwr&X-Amz-Signature=4652c0c09e87d4a939730524101864afa7e8496b7060c566e1479e0e992a742b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVSYS6P%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDpyD7SMra%2Fuk92MKhzNYw9e18Jm0GawpLkQb08cEctbQIhALjk3NIMNCfIJBq8reMgFrqGWfmrpCMAQASfsawagz9OKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytqUIWqurjMEeOXmYq3APxp9HSPIF31eDB59wAvOFauiXKLOBilGIY%2BBmOUU0IPeTZExuhpkPzsKk8Ct%2F02zwCfDoz6LkD4ZpfugU71sFKPTCc41Emjlli78Z8n8h%2Bztr8IbPOVFV0r8nofQ2zlQKOzWI3CY0wKnSv8Gk8zAe%2FHP6XY7mS6ORL3mZpnEy749BL9cCByNEyZ2FlvElfieH%2BnHsHEXHTrKVe6U%2BmQvB18twYnPzd9%2FOcvbOIgKEBQNlnhPftjssPH6K1BucwkS4wV1m9w8dDPHyRrsasXmXf1fVZV%2F1CCTz7xYCO%2BZctWH7ArSqhdyzLViD8Vkkeltjs0HJkMbAPUcvaMM7R20n4i1A3Opx2ghBExPDofxOky%2FhDMoGO710NCaVLNv6THoLoWLwCoUF%2F218Ob8EK2Tj4UyvziOLcdRFXtbepczCg9wYHfwpWF%2BGHh5K8ZjqLf94QwRlkOxc6MYzxIhKqZW46%2BTCQe3wdnHyov1%2BVno%2Bi1SJc0QY2qZ22mJDS6BNbMDXtG7NJs2cbrO7Q8Ig1xu8dO1HcwOhiz%2F1KRjlP1Z26ZX0T%2FyruD%2BQHgKthL%2BX%2BZiCMkev36fOiC0fJaM5X0QT%2F6uK4KWNiVkWsdgFcYI8aryhJyMd52AGj146UxTCOqry%2BBjqkAfgUp38htOiR7lvB9a6xyFqmw9YhduU33%2Bs9LR8DKHJ%2FW9Eoq2KTaQ6hfW%2Ft9NmcSMBp68eqmqwV3pBji08%2FqndsUs9akkfTEqHUrVATQKRREfX%2Fd3xII1k5MRBu2QVP29aSWZqYp%2FoTHpdlz8NxfCg5a7bRTf7m2%2F%2FO3OudSPFWmXLcrqo58tmnb0aXq1J2v%2B%2BkdTcjA3Vy7rDY7sScrLMLkWwr&X-Amz-Signature=08ff504201bd17cab1308f8585357d2b0b547030fd77d96503ee7b47a6890321&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVSYS6P%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDpyD7SMra%2Fuk92MKhzNYw9e18Jm0GawpLkQb08cEctbQIhALjk3NIMNCfIJBq8reMgFrqGWfmrpCMAQASfsawagz9OKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytqUIWqurjMEeOXmYq3APxp9HSPIF31eDB59wAvOFauiXKLOBilGIY%2BBmOUU0IPeTZExuhpkPzsKk8Ct%2F02zwCfDoz6LkD4ZpfugU71sFKPTCc41Emjlli78Z8n8h%2Bztr8IbPOVFV0r8nofQ2zlQKOzWI3CY0wKnSv8Gk8zAe%2FHP6XY7mS6ORL3mZpnEy749BL9cCByNEyZ2FlvElfieH%2BnHsHEXHTrKVe6U%2BmQvB18twYnPzd9%2FOcvbOIgKEBQNlnhPftjssPH6K1BucwkS4wV1m9w8dDPHyRrsasXmXf1fVZV%2F1CCTz7xYCO%2BZctWH7ArSqhdyzLViD8Vkkeltjs0HJkMbAPUcvaMM7R20n4i1A3Opx2ghBExPDofxOky%2FhDMoGO710NCaVLNv6THoLoWLwCoUF%2F218Ob8EK2Tj4UyvziOLcdRFXtbepczCg9wYHfwpWF%2BGHh5K8ZjqLf94QwRlkOxc6MYzxIhKqZW46%2BTCQe3wdnHyov1%2BVno%2Bi1SJc0QY2qZ22mJDS6BNbMDXtG7NJs2cbrO7Q8Ig1xu8dO1HcwOhiz%2F1KRjlP1Z26ZX0T%2FyruD%2BQHgKthL%2BX%2BZiCMkev36fOiC0fJaM5X0QT%2F6uK4KWNiVkWsdgFcYI8aryhJyMd52AGj146UxTCOqry%2BBjqkAfgUp38htOiR7lvB9a6xyFqmw9YhduU33%2Bs9LR8DKHJ%2FW9Eoq2KTaQ6hfW%2Ft9NmcSMBp68eqmqwV3pBji08%2FqndsUs9akkfTEqHUrVATQKRREfX%2Fd3xII1k5MRBu2QVP29aSWZqYp%2FoTHpdlz8NxfCg5a7bRTf7m2%2F%2FO3OudSPFWmXLcrqo58tmnb0aXq1J2v%2B%2BkdTcjA3Vy7rDY7sScrLMLkWwr&X-Amz-Signature=8925bb24953562e98efecba35fc8be2c6ba8f10261b5c0589d173beef3abcf6b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
