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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27LKCZH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHPtLRiBDgZixRAzIbUxug4t3J3JHzA0HbmUQDQJYPzAiEAj1wT0ROGYGxTAYyzz3AFgbzrLEf5oAJik2z0idWYfeEq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDF%2By5cDYzypAXGnxnyrcA%2BBp9CsI6GXSFjyu2fHpi7R1BZg8e7BBg9TnwQt%2BF4c1gC5q1NfS9dsRDO%2BUXd9%2FiPnN313%2FWjs%2BGJRpIRXHfMlwYP9lAt%2BdHpj%2BdL8C5jFNYA5slVbuh1VuhlmdN3wEve7cvt1osCr7LE05sfSH8C56Tn5zYedGdyd6Dp3FVdQpKiaLjTIC5svUTJ9IWkiTE7C0OjuOeESduw2qAOOkwIgyncjHp12QYgGRBOxgUG138GfBUCQRa8jJLWpVWqUEgSG1T5%2BrUP4qkkSZHSwlHtLFe2lLh4%2BpMBRhSDUKd%2Fr92BoBwaCYvS09d0QeVO32UbFarbSJEyZA9uuCWst14p3thaT9ylujMqJ2IqXw7KyEsEwLRgfGdwvgj5D9Tw8rIY9W8aKd6agnvEP3vl00r2Q3Ax%2Fkt2VsFOx%2FWsjonFRW0V4S3qHy4Mrs5BeL9vI3rnt7iF6cTRebsneLzl6kBRqsFlFVlfc0JMTWn4AzCMEwrUsmnYDwfyStSKnTVZb9CBGS%2FW2bOkBvvgLvGRdq6dhVb4ncoGBgYUnY6lIRhjTCLf77v6rgBeZdInPCzxKELxNE59OyN%2BkHjnJoK%2FcsapCzGNh%2BzblDCejfHS3FKYzekBrhoKPEytwbd87DMPqmir8GOqUB8%2FH5JmBOz8FQN3wvM%2Bs7kaBj%2Ftx5ckcboWFtjTJyAvBZOMH8T18%2Bh9FnR3k7yyrS3DKvtV4cE2lD4EvXDShcUxp8V1RyRogqC2E278n5282xQKjS2dpvtubIs%2BgaV3P08gB9A%2B0FhzMGkOlXD%2F90EsPHoe1s3oF%2BSWgbBKKvphb1wzZigDbSrgIlTsacUay8l6p%2FJO%2FPQ5uO%2FIDp3%2Fai0rwce5sq&X-Amz-Signature=c8ad1d2719708ddca29f3c930740a8bf31dfd3a46dd814d8fa4ce688a325fd3e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27LKCZH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHPtLRiBDgZixRAzIbUxug4t3J3JHzA0HbmUQDQJYPzAiEAj1wT0ROGYGxTAYyzz3AFgbzrLEf5oAJik2z0idWYfeEq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDF%2By5cDYzypAXGnxnyrcA%2BBp9CsI6GXSFjyu2fHpi7R1BZg8e7BBg9TnwQt%2BF4c1gC5q1NfS9dsRDO%2BUXd9%2FiPnN313%2FWjs%2BGJRpIRXHfMlwYP9lAt%2BdHpj%2BdL8C5jFNYA5slVbuh1VuhlmdN3wEve7cvt1osCr7LE05sfSH8C56Tn5zYedGdyd6Dp3FVdQpKiaLjTIC5svUTJ9IWkiTE7C0OjuOeESduw2qAOOkwIgyncjHp12QYgGRBOxgUG138GfBUCQRa8jJLWpVWqUEgSG1T5%2BrUP4qkkSZHSwlHtLFe2lLh4%2BpMBRhSDUKd%2Fr92BoBwaCYvS09d0QeVO32UbFarbSJEyZA9uuCWst14p3thaT9ylujMqJ2IqXw7KyEsEwLRgfGdwvgj5D9Tw8rIY9W8aKd6agnvEP3vl00r2Q3Ax%2Fkt2VsFOx%2FWsjonFRW0V4S3qHy4Mrs5BeL9vI3rnt7iF6cTRebsneLzl6kBRqsFlFVlfc0JMTWn4AzCMEwrUsmnYDwfyStSKnTVZb9CBGS%2FW2bOkBvvgLvGRdq6dhVb4ncoGBgYUnY6lIRhjTCLf77v6rgBeZdInPCzxKELxNE59OyN%2BkHjnJoK%2FcsapCzGNh%2BzblDCejfHS3FKYzekBrhoKPEytwbd87DMPqmir8GOqUB8%2FH5JmBOz8FQN3wvM%2Bs7kaBj%2Ftx5ckcboWFtjTJyAvBZOMH8T18%2Bh9FnR3k7yyrS3DKvtV4cE2lD4EvXDShcUxp8V1RyRogqC2E278n5282xQKjS2dpvtubIs%2BgaV3P08gB9A%2B0FhzMGkOlXD%2F90EsPHoe1s3oF%2BSWgbBKKvphb1wzZigDbSrgIlTsacUay8l6p%2FJO%2FPQ5uO%2FIDp3%2Fai0rwce5sq&X-Amz-Signature=67e72d5817556a4665ea20f72306e07fed14ca67c85b52600626487ca272d16f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27LKCZH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHPtLRiBDgZixRAzIbUxug4t3J3JHzA0HbmUQDQJYPzAiEAj1wT0ROGYGxTAYyzz3AFgbzrLEf5oAJik2z0idWYfeEq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDF%2By5cDYzypAXGnxnyrcA%2BBp9CsI6GXSFjyu2fHpi7R1BZg8e7BBg9TnwQt%2BF4c1gC5q1NfS9dsRDO%2BUXd9%2FiPnN313%2FWjs%2BGJRpIRXHfMlwYP9lAt%2BdHpj%2BdL8C5jFNYA5slVbuh1VuhlmdN3wEve7cvt1osCr7LE05sfSH8C56Tn5zYedGdyd6Dp3FVdQpKiaLjTIC5svUTJ9IWkiTE7C0OjuOeESduw2qAOOkwIgyncjHp12QYgGRBOxgUG138GfBUCQRa8jJLWpVWqUEgSG1T5%2BrUP4qkkSZHSwlHtLFe2lLh4%2BpMBRhSDUKd%2Fr92BoBwaCYvS09d0QeVO32UbFarbSJEyZA9uuCWst14p3thaT9ylujMqJ2IqXw7KyEsEwLRgfGdwvgj5D9Tw8rIY9W8aKd6agnvEP3vl00r2Q3Ax%2Fkt2VsFOx%2FWsjonFRW0V4S3qHy4Mrs5BeL9vI3rnt7iF6cTRebsneLzl6kBRqsFlFVlfc0JMTWn4AzCMEwrUsmnYDwfyStSKnTVZb9CBGS%2FW2bOkBvvgLvGRdq6dhVb4ncoGBgYUnY6lIRhjTCLf77v6rgBeZdInPCzxKELxNE59OyN%2BkHjnJoK%2FcsapCzGNh%2BzblDCejfHS3FKYzekBrhoKPEytwbd87DMPqmir8GOqUB8%2FH5JmBOz8FQN3wvM%2Bs7kaBj%2Ftx5ckcboWFtjTJyAvBZOMH8T18%2Bh9FnR3k7yyrS3DKvtV4cE2lD4EvXDShcUxp8V1RyRogqC2E278n5282xQKjS2dpvtubIs%2BgaV3P08gB9A%2B0FhzMGkOlXD%2F90EsPHoe1s3oF%2BSWgbBKKvphb1wzZigDbSrgIlTsacUay8l6p%2FJO%2FPQ5uO%2FIDp3%2Fai0rwce5sq&X-Amz-Signature=419a7f8ba43671d2b973c706bf724ff49a12e695909abeb3b307af322e4335f4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
