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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NKMZBFJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD74xC0odJfpiv6zIOGc%2B6RbWrcX%2FRgyaKk4MBY5cI5rwIgQzwYtnGD0hy8kRh5sq5iUX3IPJ2r%2BGF%2BA4WXZ1dqLIAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4gtaLQSMO7K1iWoSrcA5qqwCmg3xkpOPMi%2Fy8ExvXeUI2iWqk%2FARduKHg3HwbmZi%2FOAyRaMmRjhx2CWeQT9mwUz7A%2BEuUpIIggDVDZO97iQM0FrIiAFOWhAqH%2FFz8IYeDSldVHwhNtee3hcZd7Q7hTAiDAOM2Quk2p3Y0hgVTMz5ANjbQuu4veL9Jol2Y9z7aXc2pPl838JsL7fltk9w9ROQgI9tWgCfy5Xw2TCur8quIu%2B%2BCws0H%2BmLcg%2FE%2FzkU1wgKKZnsWIkAEDU%2FjGWfZnn%2FpnyfePQPC30JX%2BWi45pKV36XYVdopjQYYwRkkdYO%2F5cJh7ZIseClTg6Al49pc3Pt4tNYLz7nkPOoIRKbScgCCdIrdd3B2g8W2R3I%2BkqIyUGvpSOB%2BT5ogXMnUME%2BxpjVKon1HyHVaPKokjOYrFFJvzfErxZIxSOTJzaseuFJUZjB1zxfhUfmPFYpLZ4cs2BwfYVeZYYZSB8X9aOdAXanMl6uSxINcP20PCbwNrjjhLwVl4stuiMP5SM3EW4xe4DORWcu%2BxeZh34mkFrKueWbKZf7znIdneRu5bmWGr6Acr1Zmja3MT2dRagvTVujWdT0a71PZ48N4whs9x7UgMuxPy7Yi7DoyqDcKvAmq54AQVc8HkU1r2r9bYMPDKo8QGOqUBz8APNrUBcC0uDqjM305WCYQfZAL0xAszBtUUDB5KDw1dDHpgYy13z9jvk6hi9mGm88FGO8BbSmNAYvLAWuKUYj%2FGub1kVcOulJZEN6syqyeDtwnGGlED29fYLOKrbiVZsn2cVqmK4%2FdU4NR%2Bk%2FCFx%2F76%2F3pnhgQ%2B6D2IugoYl%2BzOcdbWS1aOEVxsPTHjrMehyVkfHmgEj%2ByAGcSkra4ZobRzDVuL&X-Amz-Signature=ef29c546cd0fbbdc72d9173d075b4225bc01e5ea13d0da9fbc0c957cd2fc398f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NKMZBFJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD74xC0odJfpiv6zIOGc%2B6RbWrcX%2FRgyaKk4MBY5cI5rwIgQzwYtnGD0hy8kRh5sq5iUX3IPJ2r%2BGF%2BA4WXZ1dqLIAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4gtaLQSMO7K1iWoSrcA5qqwCmg3xkpOPMi%2Fy8ExvXeUI2iWqk%2FARduKHg3HwbmZi%2FOAyRaMmRjhx2CWeQT9mwUz7A%2BEuUpIIggDVDZO97iQM0FrIiAFOWhAqH%2FFz8IYeDSldVHwhNtee3hcZd7Q7hTAiDAOM2Quk2p3Y0hgVTMz5ANjbQuu4veL9Jol2Y9z7aXc2pPl838JsL7fltk9w9ROQgI9tWgCfy5Xw2TCur8quIu%2B%2BCws0H%2BmLcg%2FE%2FzkU1wgKKZnsWIkAEDU%2FjGWfZnn%2FpnyfePQPC30JX%2BWi45pKV36XYVdopjQYYwRkkdYO%2F5cJh7ZIseClTg6Al49pc3Pt4tNYLz7nkPOoIRKbScgCCdIrdd3B2g8W2R3I%2BkqIyUGvpSOB%2BT5ogXMnUME%2BxpjVKon1HyHVaPKokjOYrFFJvzfErxZIxSOTJzaseuFJUZjB1zxfhUfmPFYpLZ4cs2BwfYVeZYYZSB8X9aOdAXanMl6uSxINcP20PCbwNrjjhLwVl4stuiMP5SM3EW4xe4DORWcu%2BxeZh34mkFrKueWbKZf7znIdneRu5bmWGr6Acr1Zmja3MT2dRagvTVujWdT0a71PZ48N4whs9x7UgMuxPy7Yi7DoyqDcKvAmq54AQVc8HkU1r2r9bYMPDKo8QGOqUBz8APNrUBcC0uDqjM305WCYQfZAL0xAszBtUUDB5KDw1dDHpgYy13z9jvk6hi9mGm88FGO8BbSmNAYvLAWuKUYj%2FGub1kVcOulJZEN6syqyeDtwnGGlED29fYLOKrbiVZsn2cVqmK4%2FdU4NR%2Bk%2FCFx%2F76%2F3pnhgQ%2B6D2IugoYl%2BzOcdbWS1aOEVxsPTHjrMehyVkfHmgEj%2ByAGcSkra4ZobRzDVuL&X-Amz-Signature=5ffc00bf25890601f6344f3478c9b6bf8b46ca8dfd9c0371ff9e75dd79e3264b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NKMZBFJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD74xC0odJfpiv6zIOGc%2B6RbWrcX%2FRgyaKk4MBY5cI5rwIgQzwYtnGD0hy8kRh5sq5iUX3IPJ2r%2BGF%2BA4WXZ1dqLIAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4gtaLQSMO7K1iWoSrcA5qqwCmg3xkpOPMi%2Fy8ExvXeUI2iWqk%2FARduKHg3HwbmZi%2FOAyRaMmRjhx2CWeQT9mwUz7A%2BEuUpIIggDVDZO97iQM0FrIiAFOWhAqH%2FFz8IYeDSldVHwhNtee3hcZd7Q7hTAiDAOM2Quk2p3Y0hgVTMz5ANjbQuu4veL9Jol2Y9z7aXc2pPl838JsL7fltk9w9ROQgI9tWgCfy5Xw2TCur8quIu%2B%2BCws0H%2BmLcg%2FE%2FzkU1wgKKZnsWIkAEDU%2FjGWfZnn%2FpnyfePQPC30JX%2BWi45pKV36XYVdopjQYYwRkkdYO%2F5cJh7ZIseClTg6Al49pc3Pt4tNYLz7nkPOoIRKbScgCCdIrdd3B2g8W2R3I%2BkqIyUGvpSOB%2BT5ogXMnUME%2BxpjVKon1HyHVaPKokjOYrFFJvzfErxZIxSOTJzaseuFJUZjB1zxfhUfmPFYpLZ4cs2BwfYVeZYYZSB8X9aOdAXanMl6uSxINcP20PCbwNrjjhLwVl4stuiMP5SM3EW4xe4DORWcu%2BxeZh34mkFrKueWbKZf7znIdneRu5bmWGr6Acr1Zmja3MT2dRagvTVujWdT0a71PZ48N4whs9x7UgMuxPy7Yi7DoyqDcKvAmq54AQVc8HkU1r2r9bYMPDKo8QGOqUBz8APNrUBcC0uDqjM305WCYQfZAL0xAszBtUUDB5KDw1dDHpgYy13z9jvk6hi9mGm88FGO8BbSmNAYvLAWuKUYj%2FGub1kVcOulJZEN6syqyeDtwnGGlED29fYLOKrbiVZsn2cVqmK4%2FdU4NR%2Bk%2FCFx%2F76%2F3pnhgQ%2B6D2IugoYl%2BzOcdbWS1aOEVxsPTHjrMehyVkfHmgEj%2ByAGcSkra4ZobRzDVuL&X-Amz-Signature=2428a6daac82015a7410d64d93db180cf8aa3d9d295b49f3fad4b8b2e6a5028e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
