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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6UGV4LT%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQD5rA19oke%2BzZ6qebb%2BDgxYlDEH6z1K3DE8ldeSfRLhrAIhAL2zwxTrfN2tTN5PHNiKtrYlwUb95ZnmDDpGJGxODQGBKv8DCGUQABoMNjM3NDIzMTgzODA1Igymhsu0%2F0iiJ6eR6rUq3AOw%2Fv24EPg3mpX%2F%2Bm8zpi1VGtZdh9OenANm10UoKbAOSNdtY3kCYDGkVj6cOJqwsLMmYRXpEzjxLjbPZHaCdRfSWLIsfEZREeD5jIdScT9KwiKWDPrT5dAIeOZebfV7zdPFTzxrJccuDqMIBkaZpPuKsycP%2B0sGXA7uFkMFwR7pMxkJjl7t6SCLJxh2zfiCUM%2BXvC5Z1luHgSQdlx4t939oxrIDcvx8uSCil6asTZle%2BF2lW6%2BeVgM5e15SFtehhW0d7Waflc1f9XLauvLmBQZuAnJNRtz3Mxt%2FZxOjs1kTeyByph68TyHumKzQXb9FybfYgYcIKORxyyIGJdE%2BszIBsf10rDRUWZb0YuZDILkIZsYnWc4JtmaEzd6CVs2g%2FOE9UHNdRdhQReuIoYa7AyJ8tQ0YiGBgS9%2F15%2B4iEpreK%2B9zCMnZr1B8A2I3P8P7jKJ0uNWu5nk0iD9%2FCny3ZPodgn3FHZkHlhIfOJpef%2BCwo94PGweqfhbFQs7RZLCgcyCNrpevbXzYOfXYQ2q8IwrRku%2FxnxkJVBEiKm7QfsdlUASp3%2FvYUVd4meQfpKM8aK1kaVL1j2njf%2FsPD3balzW054YISAXyZ6U3zeWd7VP8%2FDYR6pnaOoFPnjN67DDFkee%2BBjqkAU09K30RV3ZA6yoJD0L0IwzYtUfl%2B4Dc5dYfg%2BCsfYGFBvs17o%2Bo8loPvbPbDHp%2Bz6k8wScG7iB4qSaNNdO%2B3vDWJV0fJPkRQyAoYFgakCrfOZNvyk2g0YSSxKlzm0aV5vsXk3ZQEsKGk3cP%2BeiK%2FrAh4%2FCyk2yUJzx7Cq0G8VMrGvEbHZm45%2FJnGToJicYQsAiIUaj4npxtQTHW%2FBrkQWZrkGEH&X-Amz-Signature=e197b5f509cd5582f6bae3512ece775e90b6742321e43b7236bc7702d44517cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6UGV4LT%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQD5rA19oke%2BzZ6qebb%2BDgxYlDEH6z1K3DE8ldeSfRLhrAIhAL2zwxTrfN2tTN5PHNiKtrYlwUb95ZnmDDpGJGxODQGBKv8DCGUQABoMNjM3NDIzMTgzODA1Igymhsu0%2F0iiJ6eR6rUq3AOw%2Fv24EPg3mpX%2F%2Bm8zpi1VGtZdh9OenANm10UoKbAOSNdtY3kCYDGkVj6cOJqwsLMmYRXpEzjxLjbPZHaCdRfSWLIsfEZREeD5jIdScT9KwiKWDPrT5dAIeOZebfV7zdPFTzxrJccuDqMIBkaZpPuKsycP%2B0sGXA7uFkMFwR7pMxkJjl7t6SCLJxh2zfiCUM%2BXvC5Z1luHgSQdlx4t939oxrIDcvx8uSCil6asTZle%2BF2lW6%2BeVgM5e15SFtehhW0d7Waflc1f9XLauvLmBQZuAnJNRtz3Mxt%2FZxOjs1kTeyByph68TyHumKzQXb9FybfYgYcIKORxyyIGJdE%2BszIBsf10rDRUWZb0YuZDILkIZsYnWc4JtmaEzd6CVs2g%2FOE9UHNdRdhQReuIoYa7AyJ8tQ0YiGBgS9%2F15%2B4iEpreK%2B9zCMnZr1B8A2I3P8P7jKJ0uNWu5nk0iD9%2FCny3ZPodgn3FHZkHlhIfOJpef%2BCwo94PGweqfhbFQs7RZLCgcyCNrpevbXzYOfXYQ2q8IwrRku%2FxnxkJVBEiKm7QfsdlUASp3%2FvYUVd4meQfpKM8aK1kaVL1j2njf%2FsPD3balzW054YISAXyZ6U3zeWd7VP8%2FDYR6pnaOoFPnjN67DDFkee%2BBjqkAU09K30RV3ZA6yoJD0L0IwzYtUfl%2B4Dc5dYfg%2BCsfYGFBvs17o%2Bo8loPvbPbDHp%2Bz6k8wScG7iB4qSaNNdO%2B3vDWJV0fJPkRQyAoYFgakCrfOZNvyk2g0YSSxKlzm0aV5vsXk3ZQEsKGk3cP%2BeiK%2FrAh4%2FCyk2yUJzx7Cq0G8VMrGvEbHZm45%2FJnGToJicYQsAiIUaj4npxtQTHW%2FBrkQWZrkGEH&X-Amz-Signature=527a83aed753d961a3cd41de9ccebe402e8507c687c73ed79e0e33cb707edd97&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6UGV4LT%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQD5rA19oke%2BzZ6qebb%2BDgxYlDEH6z1K3DE8ldeSfRLhrAIhAL2zwxTrfN2tTN5PHNiKtrYlwUb95ZnmDDpGJGxODQGBKv8DCGUQABoMNjM3NDIzMTgzODA1Igymhsu0%2F0iiJ6eR6rUq3AOw%2Fv24EPg3mpX%2F%2Bm8zpi1VGtZdh9OenANm10UoKbAOSNdtY3kCYDGkVj6cOJqwsLMmYRXpEzjxLjbPZHaCdRfSWLIsfEZREeD5jIdScT9KwiKWDPrT5dAIeOZebfV7zdPFTzxrJccuDqMIBkaZpPuKsycP%2B0sGXA7uFkMFwR7pMxkJjl7t6SCLJxh2zfiCUM%2BXvC5Z1luHgSQdlx4t939oxrIDcvx8uSCil6asTZle%2BF2lW6%2BeVgM5e15SFtehhW0d7Waflc1f9XLauvLmBQZuAnJNRtz3Mxt%2FZxOjs1kTeyByph68TyHumKzQXb9FybfYgYcIKORxyyIGJdE%2BszIBsf10rDRUWZb0YuZDILkIZsYnWc4JtmaEzd6CVs2g%2FOE9UHNdRdhQReuIoYa7AyJ8tQ0YiGBgS9%2F15%2B4iEpreK%2B9zCMnZr1B8A2I3P8P7jKJ0uNWu5nk0iD9%2FCny3ZPodgn3FHZkHlhIfOJpef%2BCwo94PGweqfhbFQs7RZLCgcyCNrpevbXzYOfXYQ2q8IwrRku%2FxnxkJVBEiKm7QfsdlUASp3%2FvYUVd4meQfpKM8aK1kaVL1j2njf%2FsPD3balzW054YISAXyZ6U3zeWd7VP8%2FDYR6pnaOoFPnjN67DDFkee%2BBjqkAU09K30RV3ZA6yoJD0L0IwzYtUfl%2B4Dc5dYfg%2BCsfYGFBvs17o%2Bo8loPvbPbDHp%2Bz6k8wScG7iB4qSaNNdO%2B3vDWJV0fJPkRQyAoYFgakCrfOZNvyk2g0YSSxKlzm0aV5vsXk3ZQEsKGk3cP%2BeiK%2FrAh4%2FCyk2yUJzx7Cq0G8VMrGvEbHZm45%2FJnGToJicYQsAiIUaj4npxtQTHW%2FBrkQWZrkGEH&X-Amz-Signature=72206ce606ed6c99dd3da70d1f3490375f5fb859f153cb7af5e46bdf58f3cd2f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
