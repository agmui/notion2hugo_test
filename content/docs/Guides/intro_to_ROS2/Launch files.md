---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAVX2PSR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhRE4qvnM9zbADjmolWFLsdaJwqejrnr42MdwbyCXsEAiAUVd8no8aJcrQ3j3fVPuIiF1i0qHq8B8BGkmoGlQuwWSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKTJlKIvLc7XJHSaQKtwDWCbHxgARCRAEq%2BqvEk4I8bK%2FgEEWizYRP4tEkk%2Fu42xE0cKvDSwdr1aCp4XeYE5MmkkXXbIyk5Mnhv8ZMRH7taIca%2B107Svr7Zl2poXunZZbCKxwrjDIuUskh5%2BNHic7ghwBQvZWdvizMGCcKqFwS1u7G5gN6BH9%2Fkw%2FMFayHYjRtUqN93YdeV3PKhqAHxTw30OfD%2FvWLP9J1LWm4yWarqJm7vguK9Av51xl7nxSnT7v9xoO4xlV%2FNInO8KNSyqWZNUbSK8E%2Bc0Uwm18Lo%2Fu4Aao5qxd3PDNu1hlCfuY%2BcEJx45erb090O6%2BrSdDoeSTovoqiYG1tJX1vN0155o8ZD6IvnK0X3yQe%2FBGBlNpqVnrNSFf9OLSH1ZPkf1Zo8Lz5l9bS3bhwQCMsInq4PFYyipSM6sb5OXx6Q2PTzCuo7H%2FINaBWJeOUUuYSiyrAeyTZMNm6QjIOWc%2FUOuOU8kfKJzzyGlWY8DrfX3XnM255yyn2xWh2YRTFYiI9nFtE8UfsoRZ%2FBxwD6ZBfhIxKuL3HWw97yJDmvhhDTImwbwmB75LcsojTmbCAQYMq4CHLrTFeLtPucbk7ER3F%2F%2F5PfLj1Nz9nVT0G6%2BDW4TgpB%2FsSEMmiaK7Pvfy6SZtofYw8ay1xAY6pgFPdFJFOKjbgsrqkhhB7nrOUNziSJcSDrGpLP%2FhnBgIcHrR%2F16H%2FLmWPj5LH9ksRMj%2ByYFzkbNG9yZ0kfs8wbJsfPOfEVi2s4UKTr4Oih0UHiHrPNPk%2F8TDE%2BDi%2Buca7LqoOy5CVDG81neU7IxXsPikqSZRAV4FT151gaF9kxxIcIo0h%2FKcg7dh8kSaHZTpJg%2BEoZ7Kcu%2BWPaboUMaAmXicy47YACjc&X-Amz-Signature=40c1ba747b6a748501732d289f6ab5962e3f724338d48e6e5c07730302a5713c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAVX2PSR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhRE4qvnM9zbADjmolWFLsdaJwqejrnr42MdwbyCXsEAiAUVd8no8aJcrQ3j3fVPuIiF1i0qHq8B8BGkmoGlQuwWSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKTJlKIvLc7XJHSaQKtwDWCbHxgARCRAEq%2BqvEk4I8bK%2FgEEWizYRP4tEkk%2Fu42xE0cKvDSwdr1aCp4XeYE5MmkkXXbIyk5Mnhv8ZMRH7taIca%2B107Svr7Zl2poXunZZbCKxwrjDIuUskh5%2BNHic7ghwBQvZWdvizMGCcKqFwS1u7G5gN6BH9%2Fkw%2FMFayHYjRtUqN93YdeV3PKhqAHxTw30OfD%2FvWLP9J1LWm4yWarqJm7vguK9Av51xl7nxSnT7v9xoO4xlV%2FNInO8KNSyqWZNUbSK8E%2Bc0Uwm18Lo%2Fu4Aao5qxd3PDNu1hlCfuY%2BcEJx45erb090O6%2BrSdDoeSTovoqiYG1tJX1vN0155o8ZD6IvnK0X3yQe%2FBGBlNpqVnrNSFf9OLSH1ZPkf1Zo8Lz5l9bS3bhwQCMsInq4PFYyipSM6sb5OXx6Q2PTzCuo7H%2FINaBWJeOUUuYSiyrAeyTZMNm6QjIOWc%2FUOuOU8kfKJzzyGlWY8DrfX3XnM255yyn2xWh2YRTFYiI9nFtE8UfsoRZ%2FBxwD6ZBfhIxKuL3HWw97yJDmvhhDTImwbwmB75LcsojTmbCAQYMq4CHLrTFeLtPucbk7ER3F%2F%2F5PfLj1Nz9nVT0G6%2BDW4TgpB%2FsSEMmiaK7Pvfy6SZtofYw8ay1xAY6pgFPdFJFOKjbgsrqkhhB7nrOUNziSJcSDrGpLP%2FhnBgIcHrR%2F16H%2FLmWPj5LH9ksRMj%2ByYFzkbNG9yZ0kfs8wbJsfPOfEVi2s4UKTr4Oih0UHiHrPNPk%2F8TDE%2BDi%2Buca7LqoOy5CVDG81neU7IxXsPikqSZRAV4FT151gaF9kxxIcIo0h%2FKcg7dh8kSaHZTpJg%2BEoZ7Kcu%2BWPaboUMaAmXicy47YACjc&X-Amz-Signature=a9c94186307f7ef5d2376fef73a2d5138405173554b979eba96562bb77ed73a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAVX2PSR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhRE4qvnM9zbADjmolWFLsdaJwqejrnr42MdwbyCXsEAiAUVd8no8aJcrQ3j3fVPuIiF1i0qHq8B8BGkmoGlQuwWSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKTJlKIvLc7XJHSaQKtwDWCbHxgARCRAEq%2BqvEk4I8bK%2FgEEWizYRP4tEkk%2Fu42xE0cKvDSwdr1aCp4XeYE5MmkkXXbIyk5Mnhv8ZMRH7taIca%2B107Svr7Zl2poXunZZbCKxwrjDIuUskh5%2BNHic7ghwBQvZWdvizMGCcKqFwS1u7G5gN6BH9%2Fkw%2FMFayHYjRtUqN93YdeV3PKhqAHxTw30OfD%2FvWLP9J1LWm4yWarqJm7vguK9Av51xl7nxSnT7v9xoO4xlV%2FNInO8KNSyqWZNUbSK8E%2Bc0Uwm18Lo%2Fu4Aao5qxd3PDNu1hlCfuY%2BcEJx45erb090O6%2BrSdDoeSTovoqiYG1tJX1vN0155o8ZD6IvnK0X3yQe%2FBGBlNpqVnrNSFf9OLSH1ZPkf1Zo8Lz5l9bS3bhwQCMsInq4PFYyipSM6sb5OXx6Q2PTzCuo7H%2FINaBWJeOUUuYSiyrAeyTZMNm6QjIOWc%2FUOuOU8kfKJzzyGlWY8DrfX3XnM255yyn2xWh2YRTFYiI9nFtE8UfsoRZ%2FBxwD6ZBfhIxKuL3HWw97yJDmvhhDTImwbwmB75LcsojTmbCAQYMq4CHLrTFeLtPucbk7ER3F%2F%2F5PfLj1Nz9nVT0G6%2BDW4TgpB%2FsSEMmiaK7Pvfy6SZtofYw8ay1xAY6pgFPdFJFOKjbgsrqkhhB7nrOUNziSJcSDrGpLP%2FhnBgIcHrR%2F16H%2FLmWPj5LH9ksRMj%2ByYFzkbNG9yZ0kfs8wbJsfPOfEVi2s4UKTr4Oih0UHiHrPNPk%2F8TDE%2BDi%2Buca7LqoOy5CVDG81neU7IxXsPikqSZRAV4FT151gaF9kxxIcIo0h%2FKcg7dh8kSaHZTpJg%2BEoZ7Kcu%2BWPaboUMaAmXicy47YACjc&X-Amz-Signature=6b069f512048be04a6ccc1e5ce725f7a0ab1d486d2f6d5e606ae59b9a1a3fb0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
