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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7AR6HY3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZhG5fWAd9U4E4kJKi6G9B7Qwb8qmrpgu8zOs96NCnQAiBt9QTvijWlp8x1JrdXQP7YOaZyUJvh8xlEXmfidqd6wSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMwYndR0erdMOf%2BBScKtwDDugGaq5GWk%2F%2F%2B6QYr0mUrX0NsLs5SkVRQfXbtvfo%2FQ0sAjz9QVN2Gr9SFcA16O0e4Irk3MPDJrqlb0lth0I3gWFpwcK6vCAsQO%2FhSinB7HK6oXXBC4t3lS8nKyoc7eMchhOa4Ar%2BvH2e13OtN6KAbJLh0FgvhLnDre78ZUc8TN86pUrDo4dTwC9xWScgol0YhtrnCvzuJKkMBVQEpqJ5KPJE9RWHrK3eUEZwHeBMp52z6JYDICsFI6vQ7%2Fv8i7a7WQwQUyiypsVOcfx1l%2BbOgujHYkPFyC1egGPhvxCXIYVYpQvcT5C9D8U6ajpoTylQBs1oxFXEKpYa02HQj8AxazGUS%2BGvEhDTor0QwTaRItU04dK9px6z0nbAUPIi7CwWDHSJBt3LU2DwmrCTl%2FHp0n5xZS1C9GZN3AF3ksiEgipRhLgy5A1TR%2B7Igr%2BV6N8fVxyGC5cfNpzgsTv2zCpjwPvdRm%2BnqQoe%2FysSYX9JzXv8q%2BIza9uv29%2FeDyb5KyQ%2BNS%2B%2F1x5v9yTbLHjCJvMSQvMkyTunWiWRJQj20w6b3A8eY8Vn%2FFE4TqmWDd8d9x7Ve7c8YbyegF6kGqkUbkP4sv7HEbgvVvoCyJ99%2FSHmOnTBOFS2WNttP%2BS5f%2BEwtqbFwgY6pgHVrSFPwYZHM6sgwN5r3k2GwZNwJV9QOclmEqI9I%2FEbTkiJFkpN1mzYJQMDhU8UYlgL5F1nsMdY9iAv3cmJ8zng5VAZggafNEUuS6FWtbJaf1WpyAdTtXHf65zdqmpRKGRJ6dppBw0oIBKo6BN2kIObGeTsDT%2B9w7bh839I3JrZfq%2F2Ks8ij3orXc0PlU2gZuFEKxRY5ogOIkRDLseKAypsM8kZP9%2Bm&X-Amz-Signature=92bd53922d986cd4905b3af8bd5b0b8793fb687c64228a5ee9bf28fe000d22c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7AR6HY3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZhG5fWAd9U4E4kJKi6G9B7Qwb8qmrpgu8zOs96NCnQAiBt9QTvijWlp8x1JrdXQP7YOaZyUJvh8xlEXmfidqd6wSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMwYndR0erdMOf%2BBScKtwDDugGaq5GWk%2F%2F%2B6QYr0mUrX0NsLs5SkVRQfXbtvfo%2FQ0sAjz9QVN2Gr9SFcA16O0e4Irk3MPDJrqlb0lth0I3gWFpwcK6vCAsQO%2FhSinB7HK6oXXBC4t3lS8nKyoc7eMchhOa4Ar%2BvH2e13OtN6KAbJLh0FgvhLnDre78ZUc8TN86pUrDo4dTwC9xWScgol0YhtrnCvzuJKkMBVQEpqJ5KPJE9RWHrK3eUEZwHeBMp52z6JYDICsFI6vQ7%2Fv8i7a7WQwQUyiypsVOcfx1l%2BbOgujHYkPFyC1egGPhvxCXIYVYpQvcT5C9D8U6ajpoTylQBs1oxFXEKpYa02HQj8AxazGUS%2BGvEhDTor0QwTaRItU04dK9px6z0nbAUPIi7CwWDHSJBt3LU2DwmrCTl%2FHp0n5xZS1C9GZN3AF3ksiEgipRhLgy5A1TR%2B7Igr%2BV6N8fVxyGC5cfNpzgsTv2zCpjwPvdRm%2BnqQoe%2FysSYX9JzXv8q%2BIza9uv29%2FeDyb5KyQ%2BNS%2B%2F1x5v9yTbLHjCJvMSQvMkyTunWiWRJQj20w6b3A8eY8Vn%2FFE4TqmWDd8d9x7Ve7c8YbyegF6kGqkUbkP4sv7HEbgvVvoCyJ99%2FSHmOnTBOFS2WNttP%2BS5f%2BEwtqbFwgY6pgHVrSFPwYZHM6sgwN5r3k2GwZNwJV9QOclmEqI9I%2FEbTkiJFkpN1mzYJQMDhU8UYlgL5F1nsMdY9iAv3cmJ8zng5VAZggafNEUuS6FWtbJaf1WpyAdTtXHf65zdqmpRKGRJ6dppBw0oIBKo6BN2kIObGeTsDT%2B9w7bh839I3JrZfq%2F2Ks8ij3orXc0PlU2gZuFEKxRY5ogOIkRDLseKAypsM8kZP9%2Bm&X-Amz-Signature=115cadbf90a2d4ee26635c5e1abe64ab82063207165173bf051e4634566bcf86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7AR6HY3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZhG5fWAd9U4E4kJKi6G9B7Qwb8qmrpgu8zOs96NCnQAiBt9QTvijWlp8x1JrdXQP7YOaZyUJvh8xlEXmfidqd6wSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMwYndR0erdMOf%2BBScKtwDDugGaq5GWk%2F%2F%2B6QYr0mUrX0NsLs5SkVRQfXbtvfo%2FQ0sAjz9QVN2Gr9SFcA16O0e4Irk3MPDJrqlb0lth0I3gWFpwcK6vCAsQO%2FhSinB7HK6oXXBC4t3lS8nKyoc7eMchhOa4Ar%2BvH2e13OtN6KAbJLh0FgvhLnDre78ZUc8TN86pUrDo4dTwC9xWScgol0YhtrnCvzuJKkMBVQEpqJ5KPJE9RWHrK3eUEZwHeBMp52z6JYDICsFI6vQ7%2Fv8i7a7WQwQUyiypsVOcfx1l%2BbOgujHYkPFyC1egGPhvxCXIYVYpQvcT5C9D8U6ajpoTylQBs1oxFXEKpYa02HQj8AxazGUS%2BGvEhDTor0QwTaRItU04dK9px6z0nbAUPIi7CwWDHSJBt3LU2DwmrCTl%2FHp0n5xZS1C9GZN3AF3ksiEgipRhLgy5A1TR%2B7Igr%2BV6N8fVxyGC5cfNpzgsTv2zCpjwPvdRm%2BnqQoe%2FysSYX9JzXv8q%2BIza9uv29%2FeDyb5KyQ%2BNS%2B%2F1x5v9yTbLHjCJvMSQvMkyTunWiWRJQj20w6b3A8eY8Vn%2FFE4TqmWDd8d9x7Ve7c8YbyegF6kGqkUbkP4sv7HEbgvVvoCyJ99%2FSHmOnTBOFS2WNttP%2BS5f%2BEwtqbFwgY6pgHVrSFPwYZHM6sgwN5r3k2GwZNwJV9QOclmEqI9I%2FEbTkiJFkpN1mzYJQMDhU8UYlgL5F1nsMdY9iAv3cmJ8zng5VAZggafNEUuS6FWtbJaf1WpyAdTtXHf65zdqmpRKGRJ6dppBw0oIBKo6BN2kIObGeTsDT%2B9w7bh839I3JrZfq%2F2Ks8ij3orXc0PlU2gZuFEKxRY5ogOIkRDLseKAypsM8kZP9%2Bm&X-Amz-Signature=4b4ca59a509012e4e5205584023838d4c0e65271fc9c8b41d76d8930e624dccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
