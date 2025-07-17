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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2G2TE43%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDkSpt8Tx%2FjlnqKipEceYkfwPScepwwoOQ9HaXx0fC6cAiEAyX81Fv9QfAy5MvEU3Gl2dtIdK5MFZTTEnSltaJMC4O8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEuavIQpcJf07GmflSrcAxohO7N1eKlMUZCdao8wloFV3%2FE%2FpC3ybJQ4VSYjyrZojppw0Cu5zER7JBQ%2Fc%2BoCazaUcyejYIYEBrvlxq3J1SVKI9Pw0OWAwRar%2F0Gi56byofWVSLnBq%2FoezYeUB3uj9pBzPRwFni1moMgJlYah495BkjTBgr0Q1zMHqkrU3EZ1DUaQ9SsH6hECeGgTHG1xBav%2FhtILemNzp6e79UE5mhtoeyscop4SwOk1RwJwLmkaTB8IqTpOSUBpj0hHZbAdTcKHVc%2BTs7GzoVXZhYlnzkhMYG4e8UDl8bi5o5WAQjRJcTjrjvy3%2BDCf91Ai%2FbNCqWjn0Xhk4iKGuLWoeuCU8Xjwz8VTnnssdkoJ4GR5mtUfopEbZ6m8LYVsFwK2I4XX56Tw1%2FNVInK%2F1JyAS7VyGG%2BCB09aQy6X8ZsytpD%2Fv4NpyvbqnAe8cZ7qR4fq1%2BUfeTtWTlKBquKu4LaeUdvJbmSgRb3ESM4XpvlBgcDigQWnTCkDDgkOmgaWihjCPTg1L7gyZJJm1H26sOlL37pfPkf11Yq5JvAIqo1K73KtabUWuq0xtVpeArUccSTLV3dVXmJ2R0LRr3V1tORHR7C%2BE10IEY3vXLZ4QnqgIQCdAasGDlqtj80FigUwfhUVMKW848MGOqUBBC0PsBtmnfBKr1usrzCGepjHOr4pYgn1gvugY5vcQUxRf8cvum0acGDsoW9IJ3x4J%2Bl6%2FRigkMpbLztTxtNmKYBpJVNbp9d%2BRqY6%2F1089v2%2B2fiLRSXcW9pTayt01aulq5gYDGn7jLsyWIjVJeQFcl%2B8ee4UI7okWmpV6gr5NOS1OeHN6%2FvRDeFPoOd95TAi%2F%2BSVprGyYBTRlGmVZQDsyaUHTSw5&X-Amz-Signature=467d42803c56e991ec9289d786ae60271097cdbb138d31912fe21e24a7bccc95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2G2TE43%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDkSpt8Tx%2FjlnqKipEceYkfwPScepwwoOQ9HaXx0fC6cAiEAyX81Fv9QfAy5MvEU3Gl2dtIdK5MFZTTEnSltaJMC4O8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEuavIQpcJf07GmflSrcAxohO7N1eKlMUZCdao8wloFV3%2FE%2FpC3ybJQ4VSYjyrZojppw0Cu5zER7JBQ%2Fc%2BoCazaUcyejYIYEBrvlxq3J1SVKI9Pw0OWAwRar%2F0Gi56byofWVSLnBq%2FoezYeUB3uj9pBzPRwFni1moMgJlYah495BkjTBgr0Q1zMHqkrU3EZ1DUaQ9SsH6hECeGgTHG1xBav%2FhtILemNzp6e79UE5mhtoeyscop4SwOk1RwJwLmkaTB8IqTpOSUBpj0hHZbAdTcKHVc%2BTs7GzoVXZhYlnzkhMYG4e8UDl8bi5o5WAQjRJcTjrjvy3%2BDCf91Ai%2FbNCqWjn0Xhk4iKGuLWoeuCU8Xjwz8VTnnssdkoJ4GR5mtUfopEbZ6m8LYVsFwK2I4XX56Tw1%2FNVInK%2F1JyAS7VyGG%2BCB09aQy6X8ZsytpD%2Fv4NpyvbqnAe8cZ7qR4fq1%2BUfeTtWTlKBquKu4LaeUdvJbmSgRb3ESM4XpvlBgcDigQWnTCkDDgkOmgaWihjCPTg1L7gyZJJm1H26sOlL37pfPkf11Yq5JvAIqo1K73KtabUWuq0xtVpeArUccSTLV3dVXmJ2R0LRr3V1tORHR7C%2BE10IEY3vXLZ4QnqgIQCdAasGDlqtj80FigUwfhUVMKW848MGOqUBBC0PsBtmnfBKr1usrzCGepjHOr4pYgn1gvugY5vcQUxRf8cvum0acGDsoW9IJ3x4J%2Bl6%2FRigkMpbLztTxtNmKYBpJVNbp9d%2BRqY6%2F1089v2%2B2fiLRSXcW9pTayt01aulq5gYDGn7jLsyWIjVJeQFcl%2B8ee4UI7okWmpV6gr5NOS1OeHN6%2FvRDeFPoOd95TAi%2F%2BSVprGyYBTRlGmVZQDsyaUHTSw5&X-Amz-Signature=2025e6b39309a25416b1efbd9c87402b4ec6ae58f17ebee54270f83e1bab2789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2G2TE43%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDkSpt8Tx%2FjlnqKipEceYkfwPScepwwoOQ9HaXx0fC6cAiEAyX81Fv9QfAy5MvEU3Gl2dtIdK5MFZTTEnSltaJMC4O8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEuavIQpcJf07GmflSrcAxohO7N1eKlMUZCdao8wloFV3%2FE%2FpC3ybJQ4VSYjyrZojppw0Cu5zER7JBQ%2Fc%2BoCazaUcyejYIYEBrvlxq3J1SVKI9Pw0OWAwRar%2F0Gi56byofWVSLnBq%2FoezYeUB3uj9pBzPRwFni1moMgJlYah495BkjTBgr0Q1zMHqkrU3EZ1DUaQ9SsH6hECeGgTHG1xBav%2FhtILemNzp6e79UE5mhtoeyscop4SwOk1RwJwLmkaTB8IqTpOSUBpj0hHZbAdTcKHVc%2BTs7GzoVXZhYlnzkhMYG4e8UDl8bi5o5WAQjRJcTjrjvy3%2BDCf91Ai%2FbNCqWjn0Xhk4iKGuLWoeuCU8Xjwz8VTnnssdkoJ4GR5mtUfopEbZ6m8LYVsFwK2I4XX56Tw1%2FNVInK%2F1JyAS7VyGG%2BCB09aQy6X8ZsytpD%2Fv4NpyvbqnAe8cZ7qR4fq1%2BUfeTtWTlKBquKu4LaeUdvJbmSgRb3ESM4XpvlBgcDigQWnTCkDDgkOmgaWihjCPTg1L7gyZJJm1H26sOlL37pfPkf11Yq5JvAIqo1K73KtabUWuq0xtVpeArUccSTLV3dVXmJ2R0LRr3V1tORHR7C%2BE10IEY3vXLZ4QnqgIQCdAasGDlqtj80FigUwfhUVMKW848MGOqUBBC0PsBtmnfBKr1usrzCGepjHOr4pYgn1gvugY5vcQUxRf8cvum0acGDsoW9IJ3x4J%2Bl6%2FRigkMpbLztTxtNmKYBpJVNbp9d%2BRqY6%2F1089v2%2B2fiLRSXcW9pTayt01aulq5gYDGn7jLsyWIjVJeQFcl%2B8ee4UI7okWmpV6gr5NOS1OeHN6%2FvRDeFPoOd95TAi%2F%2BSVprGyYBTRlGmVZQDsyaUHTSw5&X-Amz-Signature=04502b05951fc76a5cd1a150916d2f4373115ed6f360a3cb4b86c2472ddb1259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
