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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QIO3DH2%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDOHKNzfBR4nmnugAiQw3oaSwxR3PTzfRUek%2FNEJCvG8QIgXB0D4b%2FkrNr1%2FBWhPvHxcjmN0X8acgxDHO50f7udiKMqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHE4FkWB53ZpR0JmzSrcA1Nmjm2a%2F%2B43O4KuMPqdoQMjZBtVh1A7%2FKiTJWD8r8CpI9Rrtq0fYhfvdGhcL3qt8KKDTK4fQFhCw5Ic8Jp3Hp66fNYXaAysNx1Sp0oB%2BHMCy6J0teTXV9jcVVVDzEyvxbJtUElxGUsPd%2BlmpqK4GJ4pl4eOxUw3UKGcheh37hAe%2FQlM0qL%2Fncg9u5I1mEGoQ2c8QfoOck64i9tqkghpTcY2CYasRzFsxCqHAE1veTW7Esig4Z7Jy9JXdOVCSI66aaxSAHlqbES3KcSRcYcp8iFBCTThdwZDJoiWRjpO2lFHG7hHlpSZNBX0FWMe8LBBiKjvH%2Fe6bbKPx8kx3HfpFyKAjbRT8wf1W28n1VrZKPNTq4APJKTMk3NGsAiHV6nZI1d9Bzu%2F3ks3guIGROWC1Hcs7odt1mWXEwzQdSsT2cQVSIbtHPEZx0pVtOrf4Hk4O7ectAEpNmCE%2B0M7LUKhOjZ30XU65ODIKfUqm8QIfKoXV9FdyCVABEeDek8XAagmSBjdoJjyecDRvofrD%2FwXhj%2FFutj1NrTDFbnyYlgpd27jO9S1fzFH9oXH%2FDzqF8TD3fKEXyhC7nzd0wdxs948wSeMJDA2yg01C4QJv6Q4TS1qq1WB%2FWjl7FLAFrUcMMySpcAGOqUBAa1w8uUJAB%2Bx34J5UONNJUqnVUh8CQ9q%2FCt%2B1W2NDWzfCocFlJ6eFgvaxoE5kCRRLT2WrNN8e5aNkZ7snBnMudO1BuuVxK4mskOmLPQZSHYLe8vtupng7v9wd%2FOne8AuZFwRCxK2ykhugNoG9hR%2BPf9q%2BHZcdFHQYfYGhEzUvwOJSCSa1HAGXuGh5%2BUZK5gIevylzQLYvBuwSdfGRyqfJW7U5%2Fiu&X-Amz-Signature=9689c66b7f888cd0eb9744f510bd2907ff644c3a9b5eb9c9f170ce2ae599ed68&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QIO3DH2%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDOHKNzfBR4nmnugAiQw3oaSwxR3PTzfRUek%2FNEJCvG8QIgXB0D4b%2FkrNr1%2FBWhPvHxcjmN0X8acgxDHO50f7udiKMqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHE4FkWB53ZpR0JmzSrcA1Nmjm2a%2F%2B43O4KuMPqdoQMjZBtVh1A7%2FKiTJWD8r8CpI9Rrtq0fYhfvdGhcL3qt8KKDTK4fQFhCw5Ic8Jp3Hp66fNYXaAysNx1Sp0oB%2BHMCy6J0teTXV9jcVVVDzEyvxbJtUElxGUsPd%2BlmpqK4GJ4pl4eOxUw3UKGcheh37hAe%2FQlM0qL%2Fncg9u5I1mEGoQ2c8QfoOck64i9tqkghpTcY2CYasRzFsxCqHAE1veTW7Esig4Z7Jy9JXdOVCSI66aaxSAHlqbES3KcSRcYcp8iFBCTThdwZDJoiWRjpO2lFHG7hHlpSZNBX0FWMe8LBBiKjvH%2Fe6bbKPx8kx3HfpFyKAjbRT8wf1W28n1VrZKPNTq4APJKTMk3NGsAiHV6nZI1d9Bzu%2F3ks3guIGROWC1Hcs7odt1mWXEwzQdSsT2cQVSIbtHPEZx0pVtOrf4Hk4O7ectAEpNmCE%2B0M7LUKhOjZ30XU65ODIKfUqm8QIfKoXV9FdyCVABEeDek8XAagmSBjdoJjyecDRvofrD%2FwXhj%2FFutj1NrTDFbnyYlgpd27jO9S1fzFH9oXH%2FDzqF8TD3fKEXyhC7nzd0wdxs948wSeMJDA2yg01C4QJv6Q4TS1qq1WB%2FWjl7FLAFrUcMMySpcAGOqUBAa1w8uUJAB%2Bx34J5UONNJUqnVUh8CQ9q%2FCt%2B1W2NDWzfCocFlJ6eFgvaxoE5kCRRLT2WrNN8e5aNkZ7snBnMudO1BuuVxK4mskOmLPQZSHYLe8vtupng7v9wd%2FOne8AuZFwRCxK2ykhugNoG9hR%2BPf9q%2BHZcdFHQYfYGhEzUvwOJSCSa1HAGXuGh5%2BUZK5gIevylzQLYvBuwSdfGRyqfJW7U5%2Fiu&X-Amz-Signature=74b5b0b9e2f598d6ac17251f84f969049a04d2af1a31740383032d4a621dab58&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QIO3DH2%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDOHKNzfBR4nmnugAiQw3oaSwxR3PTzfRUek%2FNEJCvG8QIgXB0D4b%2FkrNr1%2FBWhPvHxcjmN0X8acgxDHO50f7udiKMqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHE4FkWB53ZpR0JmzSrcA1Nmjm2a%2F%2B43O4KuMPqdoQMjZBtVh1A7%2FKiTJWD8r8CpI9Rrtq0fYhfvdGhcL3qt8KKDTK4fQFhCw5Ic8Jp3Hp66fNYXaAysNx1Sp0oB%2BHMCy6J0teTXV9jcVVVDzEyvxbJtUElxGUsPd%2BlmpqK4GJ4pl4eOxUw3UKGcheh37hAe%2FQlM0qL%2Fncg9u5I1mEGoQ2c8QfoOck64i9tqkghpTcY2CYasRzFsxCqHAE1veTW7Esig4Z7Jy9JXdOVCSI66aaxSAHlqbES3KcSRcYcp8iFBCTThdwZDJoiWRjpO2lFHG7hHlpSZNBX0FWMe8LBBiKjvH%2Fe6bbKPx8kx3HfpFyKAjbRT8wf1W28n1VrZKPNTq4APJKTMk3NGsAiHV6nZI1d9Bzu%2F3ks3guIGROWC1Hcs7odt1mWXEwzQdSsT2cQVSIbtHPEZx0pVtOrf4Hk4O7ectAEpNmCE%2B0M7LUKhOjZ30XU65ODIKfUqm8QIfKoXV9FdyCVABEeDek8XAagmSBjdoJjyecDRvofrD%2FwXhj%2FFutj1NrTDFbnyYlgpd27jO9S1fzFH9oXH%2FDzqF8TD3fKEXyhC7nzd0wdxs948wSeMJDA2yg01C4QJv6Q4TS1qq1WB%2FWjl7FLAFrUcMMySpcAGOqUBAa1w8uUJAB%2Bx34J5UONNJUqnVUh8CQ9q%2FCt%2B1W2NDWzfCocFlJ6eFgvaxoE5kCRRLT2WrNN8e5aNkZ7snBnMudO1BuuVxK4mskOmLPQZSHYLe8vtupng7v9wd%2FOne8AuZFwRCxK2ykhugNoG9hR%2BPf9q%2BHZcdFHQYfYGhEzUvwOJSCSa1HAGXuGh5%2BUZK5gIevylzQLYvBuwSdfGRyqfJW7U5%2Fiu&X-Amz-Signature=64f8c03f9598940aead7925b6a0e8a30e23f812e3991b71785d411e7b1d3e29e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
