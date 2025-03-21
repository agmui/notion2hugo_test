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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKGHF447%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDGdekD9IBtGNdyM9gSEnMVGLGkpDDm%2B9LlLTs3JtorYwIhAO9NJ1kHvnN0EbDTxHtaAM0f8Q5MZufLUa2Msc8mjrrBKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BImiJ91ZCDbZOSOgq3AN0Y16jHzJz39yjMMARkVYJwRDdP8J%2BLn2wZDJXaoG0ZRFB3p7ew3CVIjRAPkQubAoNIYI%2BQI0sKtnqnoaypLujJ6e5oQJD5yXtV1XS3WjBBYPf%2FgOB%2FpkvNH%2Ff9S7un6VgwLEEhCTtBWuPP9RoWPNCpdW6kQq2GaK%2FYh8KPnlybDIAtODy6YC57KonbIW7sIoGvO03OUqXeuwJl4j%2F3kdQXORnRbNvNziTBY%2BrYIddI3OYj2d0dmMy7La2oor5hyNwgDtRuy97mnyM2wul6P0G%2Fa27cYzAQO0s4ugp5suq8yShuSXKo3N4B0YmakCz2g%2BHuvv8wPqKipzJQZxpCyJ0vkgpuY1j2fG6Si6u%2B4Pp8tV%2BpQasVbsc%2FWWu3SVn7xD4jyox5YLm3GxgIEPT7zSC4fqvkJJjvcldMeuwXsH0d7wp0Dn1gU5vGlpuQKd1hDqHjZjXJlW97za%2BzG40YWlT8zO3E%2BOSgBsV0yhCqiIYF4PCmRYBSLtw6hCN53aCZs2khGO2mjk1lWoi6ApWe535xCxJkGEuCaWAWmgI7w0Wggu0RE4i20vvNuS%2BwhaLkcnOLYkDLe48aZ7lreqmbZJ%2BT35eDDqxbBhPTfRmIFTQrSVkbkaLr8kWsX2j6zCKmvW%2BBjqkAc215m0WV7Xna9cA10F0oljFMIckbWuFWu0dcf7yAEQ1lbs50D3Py1xfeZ2%2F9HuNem2Atw0dSVDkXlfLf6%2FKKJHC8pLePuYuAaeeen1ABdVQGZUS%2FoegnYlmo6aWLTHvWznqiVpNF6YnWRKda7l9BS1po6iiuWqgIEbS0uC631vU3wwdijsZlon4OEWqDi%2BgHe3p%2Fsv9aVhl4bQfmpdKIcQuJU2U&X-Amz-Signature=5e5948d17eb03ae2f94f59c0d98723c539689a6a6ef0d52fba795b812ba6f829&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKGHF447%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDGdekD9IBtGNdyM9gSEnMVGLGkpDDm%2B9LlLTs3JtorYwIhAO9NJ1kHvnN0EbDTxHtaAM0f8Q5MZufLUa2Msc8mjrrBKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BImiJ91ZCDbZOSOgq3AN0Y16jHzJz39yjMMARkVYJwRDdP8J%2BLn2wZDJXaoG0ZRFB3p7ew3CVIjRAPkQubAoNIYI%2BQI0sKtnqnoaypLujJ6e5oQJD5yXtV1XS3WjBBYPf%2FgOB%2FpkvNH%2Ff9S7un6VgwLEEhCTtBWuPP9RoWPNCpdW6kQq2GaK%2FYh8KPnlybDIAtODy6YC57KonbIW7sIoGvO03OUqXeuwJl4j%2F3kdQXORnRbNvNziTBY%2BrYIddI3OYj2d0dmMy7La2oor5hyNwgDtRuy97mnyM2wul6P0G%2Fa27cYzAQO0s4ugp5suq8yShuSXKo3N4B0YmakCz2g%2BHuvv8wPqKipzJQZxpCyJ0vkgpuY1j2fG6Si6u%2B4Pp8tV%2BpQasVbsc%2FWWu3SVn7xD4jyox5YLm3GxgIEPT7zSC4fqvkJJjvcldMeuwXsH0d7wp0Dn1gU5vGlpuQKd1hDqHjZjXJlW97za%2BzG40YWlT8zO3E%2BOSgBsV0yhCqiIYF4PCmRYBSLtw6hCN53aCZs2khGO2mjk1lWoi6ApWe535xCxJkGEuCaWAWmgI7w0Wggu0RE4i20vvNuS%2BwhaLkcnOLYkDLe48aZ7lreqmbZJ%2BT35eDDqxbBhPTfRmIFTQrSVkbkaLr8kWsX2j6zCKmvW%2BBjqkAc215m0WV7Xna9cA10F0oljFMIckbWuFWu0dcf7yAEQ1lbs50D3Py1xfeZ2%2F9HuNem2Atw0dSVDkXlfLf6%2FKKJHC8pLePuYuAaeeen1ABdVQGZUS%2FoegnYlmo6aWLTHvWznqiVpNF6YnWRKda7l9BS1po6iiuWqgIEbS0uC631vU3wwdijsZlon4OEWqDi%2BgHe3p%2Fsv9aVhl4bQfmpdKIcQuJU2U&X-Amz-Signature=3c6b236097d9b6a5ff16f4c392654967344ca2303a504d07edad8b598a76aaf5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKGHF447%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDGdekD9IBtGNdyM9gSEnMVGLGkpDDm%2B9LlLTs3JtorYwIhAO9NJ1kHvnN0EbDTxHtaAM0f8Q5MZufLUa2Msc8mjrrBKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BImiJ91ZCDbZOSOgq3AN0Y16jHzJz39yjMMARkVYJwRDdP8J%2BLn2wZDJXaoG0ZRFB3p7ew3CVIjRAPkQubAoNIYI%2BQI0sKtnqnoaypLujJ6e5oQJD5yXtV1XS3WjBBYPf%2FgOB%2FpkvNH%2Ff9S7un6VgwLEEhCTtBWuPP9RoWPNCpdW6kQq2GaK%2FYh8KPnlybDIAtODy6YC57KonbIW7sIoGvO03OUqXeuwJl4j%2F3kdQXORnRbNvNziTBY%2BrYIddI3OYj2d0dmMy7La2oor5hyNwgDtRuy97mnyM2wul6P0G%2Fa27cYzAQO0s4ugp5suq8yShuSXKo3N4B0YmakCz2g%2BHuvv8wPqKipzJQZxpCyJ0vkgpuY1j2fG6Si6u%2B4Pp8tV%2BpQasVbsc%2FWWu3SVn7xD4jyox5YLm3GxgIEPT7zSC4fqvkJJjvcldMeuwXsH0d7wp0Dn1gU5vGlpuQKd1hDqHjZjXJlW97za%2BzG40YWlT8zO3E%2BOSgBsV0yhCqiIYF4PCmRYBSLtw6hCN53aCZs2khGO2mjk1lWoi6ApWe535xCxJkGEuCaWAWmgI7w0Wggu0RE4i20vvNuS%2BwhaLkcnOLYkDLe48aZ7lreqmbZJ%2BT35eDDqxbBhPTfRmIFTQrSVkbkaLr8kWsX2j6zCKmvW%2BBjqkAc215m0WV7Xna9cA10F0oljFMIckbWuFWu0dcf7yAEQ1lbs50D3Py1xfeZ2%2F9HuNem2Atw0dSVDkXlfLf6%2FKKJHC8pLePuYuAaeeen1ABdVQGZUS%2FoegnYlmo6aWLTHvWznqiVpNF6YnWRKda7l9BS1po6iiuWqgIEbS0uC631vU3wwdijsZlon4OEWqDi%2BgHe3p%2Fsv9aVhl4bQfmpdKIcQuJU2U&X-Amz-Signature=30952032c5d0f259206a820279139627d20002c2595a59fa083bd514493352c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
