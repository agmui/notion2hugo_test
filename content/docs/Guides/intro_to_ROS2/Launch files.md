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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGTFVN7W%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDrsOAkd4U8TAIvm%2BfoYHO4gZM5O9z9mWODMbvk21l6sQIhANVHZhLvUNGt6wykQT%2FFbgSCysL9S9v9P6pFnwW9xfnXKv8DCC4QABoMNjM3NDIzMTgzODA1Igz1mGyCtowASJ2q7kEq3APZgHe5dZPnK17LBQUL1jHsin5K%2BPvky36JOHS%2FfLIKU1m0WQORu5lMCUnibHrnw3THAWVJR1KCP%2FLAFS2jhocbh%2FT4cBib3YMphGDahCPyKI8m7jTq1XI5WJwjgaBTTx7k6amH3PwgnNVYWImrSgLHpAsdWsAbbZkJB%2FjQ7kT%2BfjNC%2Bdt3TVVrFPZ331SU4eHyBaB4GhoBTnowH2M3UQdXbApVl6arUenz88cLzE7emgXmjJRW5bdzuvCDYlzN%2BskHKqSzgd386FIemGUWhjAiBsCFpfEj%2BsoNgp4NnE7QrbnvSVOn2200suXVgTx6K%2FgXKEbXuoBz7QDyVzlbtN2UfNfgIx1BeQ3eIa214tiNqWpuZQDZmM7xabKbFIfNhFWeW73OzdKmqNQZrZxXshpOJuqGI2V86ENZttKQ0uwg3Dxow%2BDy4IbmLjdILoDsgIP6d99c0tfmg7TJiDSVbB83OsteTf%2B74BBpe8MYOydPrX72ewYu34SM7cL9K9tHI1WM0yzYS8HziFVlxyJhYePxhXMSdjvp5ZdmHnkpgc2IpGb7wfKU4g4iU%2FJpuclDOMhRC6oRoKyeAUtSsBMaDbQ%2BdMmH1EKv87FqL8oH2JsaAiNvnVXzaarob6wmMzCt2YjEBjqkASs%2BTts8nG3ehJlBkdFYNoi3ZGrAlE2M%2Fm1IY5mgYqu7eNPMcQ%2F2G0H%2FxDzs2ZDleEhsJkEHZiwVXqKf2SyBh2SevSDqpCoO3rk5q%2BZzVUrFWg4oMkTsXu0OAEGSIDx%2FYuc0dtC9GtJ1nlKwzUOJJs30vPbaPiAmP7Sql7cogREkUpcEA1xpIdorr8RIAai1UaSNWyWncVqg%2FO%2FS%2BGfg0pRcPqcL&X-Amz-Signature=2df9f63ef056e9cbc1e96d02c0434d24aa5cb7a1e2b0b4761e278e29f37001fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGTFVN7W%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDrsOAkd4U8TAIvm%2BfoYHO4gZM5O9z9mWODMbvk21l6sQIhANVHZhLvUNGt6wykQT%2FFbgSCysL9S9v9P6pFnwW9xfnXKv8DCC4QABoMNjM3NDIzMTgzODA1Igz1mGyCtowASJ2q7kEq3APZgHe5dZPnK17LBQUL1jHsin5K%2BPvky36JOHS%2FfLIKU1m0WQORu5lMCUnibHrnw3THAWVJR1KCP%2FLAFS2jhocbh%2FT4cBib3YMphGDahCPyKI8m7jTq1XI5WJwjgaBTTx7k6amH3PwgnNVYWImrSgLHpAsdWsAbbZkJB%2FjQ7kT%2BfjNC%2Bdt3TVVrFPZ331SU4eHyBaB4GhoBTnowH2M3UQdXbApVl6arUenz88cLzE7emgXmjJRW5bdzuvCDYlzN%2BskHKqSzgd386FIemGUWhjAiBsCFpfEj%2BsoNgp4NnE7QrbnvSVOn2200suXVgTx6K%2FgXKEbXuoBz7QDyVzlbtN2UfNfgIx1BeQ3eIa214tiNqWpuZQDZmM7xabKbFIfNhFWeW73OzdKmqNQZrZxXshpOJuqGI2V86ENZttKQ0uwg3Dxow%2BDy4IbmLjdILoDsgIP6d99c0tfmg7TJiDSVbB83OsteTf%2B74BBpe8MYOydPrX72ewYu34SM7cL9K9tHI1WM0yzYS8HziFVlxyJhYePxhXMSdjvp5ZdmHnkpgc2IpGb7wfKU4g4iU%2FJpuclDOMhRC6oRoKyeAUtSsBMaDbQ%2BdMmH1EKv87FqL8oH2JsaAiNvnVXzaarob6wmMzCt2YjEBjqkASs%2BTts8nG3ehJlBkdFYNoi3ZGrAlE2M%2Fm1IY5mgYqu7eNPMcQ%2F2G0H%2FxDzs2ZDleEhsJkEHZiwVXqKf2SyBh2SevSDqpCoO3rk5q%2BZzVUrFWg4oMkTsXu0OAEGSIDx%2FYuc0dtC9GtJ1nlKwzUOJJs30vPbaPiAmP7Sql7cogREkUpcEA1xpIdorr8RIAai1UaSNWyWncVqg%2FO%2FS%2BGfg0pRcPqcL&X-Amz-Signature=3dda5f244b86e276cd0b481de35d9e1fecb44f05ce5651ae4366a0efdd99ee97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGTFVN7W%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDrsOAkd4U8TAIvm%2BfoYHO4gZM5O9z9mWODMbvk21l6sQIhANVHZhLvUNGt6wykQT%2FFbgSCysL9S9v9P6pFnwW9xfnXKv8DCC4QABoMNjM3NDIzMTgzODA1Igz1mGyCtowASJ2q7kEq3APZgHe5dZPnK17LBQUL1jHsin5K%2BPvky36JOHS%2FfLIKU1m0WQORu5lMCUnibHrnw3THAWVJR1KCP%2FLAFS2jhocbh%2FT4cBib3YMphGDahCPyKI8m7jTq1XI5WJwjgaBTTx7k6amH3PwgnNVYWImrSgLHpAsdWsAbbZkJB%2FjQ7kT%2BfjNC%2Bdt3TVVrFPZ331SU4eHyBaB4GhoBTnowH2M3UQdXbApVl6arUenz88cLzE7emgXmjJRW5bdzuvCDYlzN%2BskHKqSzgd386FIemGUWhjAiBsCFpfEj%2BsoNgp4NnE7QrbnvSVOn2200suXVgTx6K%2FgXKEbXuoBz7QDyVzlbtN2UfNfgIx1BeQ3eIa214tiNqWpuZQDZmM7xabKbFIfNhFWeW73OzdKmqNQZrZxXshpOJuqGI2V86ENZttKQ0uwg3Dxow%2BDy4IbmLjdILoDsgIP6d99c0tfmg7TJiDSVbB83OsteTf%2B74BBpe8MYOydPrX72ewYu34SM7cL9K9tHI1WM0yzYS8HziFVlxyJhYePxhXMSdjvp5ZdmHnkpgc2IpGb7wfKU4g4iU%2FJpuclDOMhRC6oRoKyeAUtSsBMaDbQ%2BdMmH1EKv87FqL8oH2JsaAiNvnVXzaarob6wmMzCt2YjEBjqkASs%2BTts8nG3ehJlBkdFYNoi3ZGrAlE2M%2Fm1IY5mgYqu7eNPMcQ%2F2G0H%2FxDzs2ZDleEhsJkEHZiwVXqKf2SyBh2SevSDqpCoO3rk5q%2BZzVUrFWg4oMkTsXu0OAEGSIDx%2FYuc0dtC9GtJ1nlKwzUOJJs30vPbaPiAmP7Sql7cogREkUpcEA1xpIdorr8RIAai1UaSNWyWncVqg%2FO%2FS%2BGfg0pRcPqcL&X-Amz-Signature=41a2ad933e27014dd42508d63c7423f767f419d389f2e5d801d13920d9bb3166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
