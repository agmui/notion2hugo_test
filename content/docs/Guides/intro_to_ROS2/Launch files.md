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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV7CNVHM%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaX%2FE72Clf4rXlEhyAoaT0j91IfI1%2BBabSLfHgpTUAVAiB65BpiRnwFE1VCzGbmfMirQcmBpO6XiNuhCvpab53IByr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMeE7UJnuU5NOpuFc5KtwD0Ov%2F1EKPsS8rF7B%2Fku2sAxjW2SKLUI8QMG1EDc0vEEm3ShMIMMMP9PRamjNa6j1dLK2cokXQGoTDZwe%2F1Fik%2BVibc4RPiAF0LHdgB1V94d98tNcFtsTjRY12njbZdoHY7WdT7KRdLre9wSNWUNf5xTa5SZxG3XBGIO9bfs2icRnkkMmHVb%2FhiXA8I%2BkRrfbO00eeaE9QkAAQT7cWU4%2BAiGmqKHh0EJnPPxSOjv444xXR7axK0KLlgVUOGX0DSbscjvHGTf9Gk9eo0UNS8A6M%2B9XcF%2F%2BfHNmfi013dog4cwsbW4IckzZFRNEtDGsl5oa6mNUwpF6BXUXATIOXzAjQj0t3wgppl28W%2B%2FTgrvAnnU4GAPs%2FPC3GqASSQvJNupYMHmjDjt1nyD5Yl8nwPo%2BmgEcfoKoQjhOTVqZGCexgcuBCWvCYBYwpna%2BcYwr2pmeZ0N%2FrPM7Svrzy9jzyQT4xeFXKWV0mz2Dr2E0CD4EUO7cXc6U2aeR1K%2B%2BS6wbsFVQJJTV2dKrJ5kPLRRyq6eBqJFs%2FL%2FaOFJwyI1df0lv6JV5as8fLaKw5cTksLIk1EFIBLZ1Kv2Ug6potWOOPkjsM8hfYNxSh6BHKCiPJliY2vWfqC%2FhiJ6fDTrFaun4wr4ervgY6pgEktJ89o9lu2osI%2BZPzS4EaMoTrSPrwTKa5uyfO6xexzxF7a%2FrQZlXcee9WiGcninK6VV4STgj0ypiXM6U0e2D7v9xgNBOkISkyzEv6Apx7vX%2BV%2BeRWQmjAPrfLfxTr5EBfdIsIFvbvYav%2B6%2BR1M06VyA5tJCXPmzrknksjGWeucCKM%2BSFJZtlMRtvrdoHQzTgS917ClygPdmYVLFG0l9TzM%2B3zFvjX&X-Amz-Signature=ff28e939a72aeb26088014e727c5196b29b2058d31453b5e96b9af01f284a031&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV7CNVHM%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaX%2FE72Clf4rXlEhyAoaT0j91IfI1%2BBabSLfHgpTUAVAiB65BpiRnwFE1VCzGbmfMirQcmBpO6XiNuhCvpab53IByr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMeE7UJnuU5NOpuFc5KtwD0Ov%2F1EKPsS8rF7B%2Fku2sAxjW2SKLUI8QMG1EDc0vEEm3ShMIMMMP9PRamjNa6j1dLK2cokXQGoTDZwe%2F1Fik%2BVibc4RPiAF0LHdgB1V94d98tNcFtsTjRY12njbZdoHY7WdT7KRdLre9wSNWUNf5xTa5SZxG3XBGIO9bfs2icRnkkMmHVb%2FhiXA8I%2BkRrfbO00eeaE9QkAAQT7cWU4%2BAiGmqKHh0EJnPPxSOjv444xXR7axK0KLlgVUOGX0DSbscjvHGTf9Gk9eo0UNS8A6M%2B9XcF%2F%2BfHNmfi013dog4cwsbW4IckzZFRNEtDGsl5oa6mNUwpF6BXUXATIOXzAjQj0t3wgppl28W%2B%2FTgrvAnnU4GAPs%2FPC3GqASSQvJNupYMHmjDjt1nyD5Yl8nwPo%2BmgEcfoKoQjhOTVqZGCexgcuBCWvCYBYwpna%2BcYwr2pmeZ0N%2FrPM7Svrzy9jzyQT4xeFXKWV0mz2Dr2E0CD4EUO7cXc6U2aeR1K%2B%2BS6wbsFVQJJTV2dKrJ5kPLRRyq6eBqJFs%2FL%2FaOFJwyI1df0lv6JV5as8fLaKw5cTksLIk1EFIBLZ1Kv2Ug6potWOOPkjsM8hfYNxSh6BHKCiPJliY2vWfqC%2FhiJ6fDTrFaun4wr4ervgY6pgEktJ89o9lu2osI%2BZPzS4EaMoTrSPrwTKa5uyfO6xexzxF7a%2FrQZlXcee9WiGcninK6VV4STgj0ypiXM6U0e2D7v9xgNBOkISkyzEv6Apx7vX%2BV%2BeRWQmjAPrfLfxTr5EBfdIsIFvbvYav%2B6%2BR1M06VyA5tJCXPmzrknksjGWeucCKM%2BSFJZtlMRtvrdoHQzTgS917ClygPdmYVLFG0l9TzM%2B3zFvjX&X-Amz-Signature=172dadfcc6590dcf532d0644f5e6255d20770c60737bad00af7e81099489ec98&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV7CNVHM%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaX%2FE72Clf4rXlEhyAoaT0j91IfI1%2BBabSLfHgpTUAVAiB65BpiRnwFE1VCzGbmfMirQcmBpO6XiNuhCvpab53IByr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMeE7UJnuU5NOpuFc5KtwD0Ov%2F1EKPsS8rF7B%2Fku2sAxjW2SKLUI8QMG1EDc0vEEm3ShMIMMMP9PRamjNa6j1dLK2cokXQGoTDZwe%2F1Fik%2BVibc4RPiAF0LHdgB1V94d98tNcFtsTjRY12njbZdoHY7WdT7KRdLre9wSNWUNf5xTa5SZxG3XBGIO9bfs2icRnkkMmHVb%2FhiXA8I%2BkRrfbO00eeaE9QkAAQT7cWU4%2BAiGmqKHh0EJnPPxSOjv444xXR7axK0KLlgVUOGX0DSbscjvHGTf9Gk9eo0UNS8A6M%2B9XcF%2F%2BfHNmfi013dog4cwsbW4IckzZFRNEtDGsl5oa6mNUwpF6BXUXATIOXzAjQj0t3wgppl28W%2B%2FTgrvAnnU4GAPs%2FPC3GqASSQvJNupYMHmjDjt1nyD5Yl8nwPo%2BmgEcfoKoQjhOTVqZGCexgcuBCWvCYBYwpna%2BcYwr2pmeZ0N%2FrPM7Svrzy9jzyQT4xeFXKWV0mz2Dr2E0CD4EUO7cXc6U2aeR1K%2B%2BS6wbsFVQJJTV2dKrJ5kPLRRyq6eBqJFs%2FL%2FaOFJwyI1df0lv6JV5as8fLaKw5cTksLIk1EFIBLZ1Kv2Ug6potWOOPkjsM8hfYNxSh6BHKCiPJliY2vWfqC%2FhiJ6fDTrFaun4wr4ervgY6pgEktJ89o9lu2osI%2BZPzS4EaMoTrSPrwTKa5uyfO6xexzxF7a%2FrQZlXcee9WiGcninK6VV4STgj0ypiXM6U0e2D7v9xgNBOkISkyzEv6Apx7vX%2BV%2BeRWQmjAPrfLfxTr5EBfdIsIFvbvYav%2B6%2BR1M06VyA5tJCXPmzrknksjGWeucCKM%2BSFJZtlMRtvrdoHQzTgS917ClygPdmYVLFG0l9TzM%2B3zFvjX&X-Amz-Signature=c854eb5337a806eaa16a2653ff816ad8f5610c49f9ba726954f2f1a1edee74e4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
