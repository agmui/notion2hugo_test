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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPWW7YXN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID84pMnwPw7lmAp0yhqU3Izz9E3q26A%2FYtSjyD4sTRtYAiEAj8ryBROnX9JI6jmuMxr3WcVNFAHvdVArbj2qYzk14qoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3PJmM9eATja4%2BquircAx7Sxx1L9JRBpPByhntHw4wh%2BeSIVxyUEybCv3v4%2FRYWE7vOmKy7EFCC9a24WuEAm09ykjMme6j%2FiuQBrYH55K5WY3q%2Bmf1F6m5mPqYz6Eo75UTzSYeg5NanKHtF5aAwHaGNIGT73MWMFWjLU%2F8LK0g%2FdrXCf9AvJMt9OmaKcnvEkLUl9OgbiPbav1lFsfSAA5Jif7wc7ucPJAPV%2B364lo6tZrSp90PMqHfWvuxktWN19WuGk9RvBuU2T0JaT%2BzBY%2Bky7Mmr63tOG5tTXdkKNJEiOus0OpF80AY6EJiyXPIbOIlMyj5XAekN6Gk2iJzP4Iqfb0CsV%2BXqhFE7PooaEcr1W%2FbJUBGjgEApn86tkpCytHXSQKf4tLxK0RwZO7fQsgixErt5drKMvra3cbOYAMU86QEyzrRPY9248jmydRaYbau57exXPb2jA00YA2F7e5EY6rZKUHKeAxuFQ9sj1n7vmCmbkzQ9axJ7eBBwIqifbGeXy%2BjwFMJBBmOwfELVvm8Dhw26qoAKR430Fof9Qf7g26hE4%2FRoNnaaINlCXqRMKUnQf0FTvsaRPmKsh7o7%2Fw1x%2FlkmbliUL32UWJo2w%2BZzlPGeuZ%2B8JVEL2iStaLfpeOv6%2BnL42eTpAbrUMPfYzMMGOqUBAIwzGmkDMhLGM6xsPK%2B%2BJYdbmF3BPNZmPP1N%2FVdmnM%2FVfkYdiXrcbLHTKjYcGVKNDTtZS%2BCO9QAZh9q%2FYhCsyxIlC5w2ZqUr8AJKEjEvcLBAt1U6xZ6uownxjJbKuZqtL%2BI%2F8637DASH5ZdFIMB8HgACokhh7EuYFCzUCqIHAIRpFW%2BHDqM%2FcVoPF9XcvgjCSnlhC7g481DtsGtFiGgcNtnbZ3vG&X-Amz-Signature=415eea719ebe3037f71a7e8970875b465af2c18b989b16e947b5d763f0b2035b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPWW7YXN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID84pMnwPw7lmAp0yhqU3Izz9E3q26A%2FYtSjyD4sTRtYAiEAj8ryBROnX9JI6jmuMxr3WcVNFAHvdVArbj2qYzk14qoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3PJmM9eATja4%2BquircAx7Sxx1L9JRBpPByhntHw4wh%2BeSIVxyUEybCv3v4%2FRYWE7vOmKy7EFCC9a24WuEAm09ykjMme6j%2FiuQBrYH55K5WY3q%2Bmf1F6m5mPqYz6Eo75UTzSYeg5NanKHtF5aAwHaGNIGT73MWMFWjLU%2F8LK0g%2FdrXCf9AvJMt9OmaKcnvEkLUl9OgbiPbav1lFsfSAA5Jif7wc7ucPJAPV%2B364lo6tZrSp90PMqHfWvuxktWN19WuGk9RvBuU2T0JaT%2BzBY%2Bky7Mmr63tOG5tTXdkKNJEiOus0OpF80AY6EJiyXPIbOIlMyj5XAekN6Gk2iJzP4Iqfb0CsV%2BXqhFE7PooaEcr1W%2FbJUBGjgEApn86tkpCytHXSQKf4tLxK0RwZO7fQsgixErt5drKMvra3cbOYAMU86QEyzrRPY9248jmydRaYbau57exXPb2jA00YA2F7e5EY6rZKUHKeAxuFQ9sj1n7vmCmbkzQ9axJ7eBBwIqifbGeXy%2BjwFMJBBmOwfELVvm8Dhw26qoAKR430Fof9Qf7g26hE4%2FRoNnaaINlCXqRMKUnQf0FTvsaRPmKsh7o7%2Fw1x%2FlkmbliUL32UWJo2w%2BZzlPGeuZ%2B8JVEL2iStaLfpeOv6%2BnL42eTpAbrUMPfYzMMGOqUBAIwzGmkDMhLGM6xsPK%2B%2BJYdbmF3BPNZmPP1N%2FVdmnM%2FVfkYdiXrcbLHTKjYcGVKNDTtZS%2BCO9QAZh9q%2FYhCsyxIlC5w2ZqUr8AJKEjEvcLBAt1U6xZ6uownxjJbKuZqtL%2BI%2F8637DASH5ZdFIMB8HgACokhh7EuYFCzUCqIHAIRpFW%2BHDqM%2FcVoPF9XcvgjCSnlhC7g481DtsGtFiGgcNtnbZ3vG&X-Amz-Signature=51f6db3f65997cd43ce12f68bcf200b70c36b4e6feba1ca9cdecd2d690588527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPWW7YXN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID84pMnwPw7lmAp0yhqU3Izz9E3q26A%2FYtSjyD4sTRtYAiEAj8ryBROnX9JI6jmuMxr3WcVNFAHvdVArbj2qYzk14qoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3PJmM9eATja4%2BquircAx7Sxx1L9JRBpPByhntHw4wh%2BeSIVxyUEybCv3v4%2FRYWE7vOmKy7EFCC9a24WuEAm09ykjMme6j%2FiuQBrYH55K5WY3q%2Bmf1F6m5mPqYz6Eo75UTzSYeg5NanKHtF5aAwHaGNIGT73MWMFWjLU%2F8LK0g%2FdrXCf9AvJMt9OmaKcnvEkLUl9OgbiPbav1lFsfSAA5Jif7wc7ucPJAPV%2B364lo6tZrSp90PMqHfWvuxktWN19WuGk9RvBuU2T0JaT%2BzBY%2Bky7Mmr63tOG5tTXdkKNJEiOus0OpF80AY6EJiyXPIbOIlMyj5XAekN6Gk2iJzP4Iqfb0CsV%2BXqhFE7PooaEcr1W%2FbJUBGjgEApn86tkpCytHXSQKf4tLxK0RwZO7fQsgixErt5drKMvra3cbOYAMU86QEyzrRPY9248jmydRaYbau57exXPb2jA00YA2F7e5EY6rZKUHKeAxuFQ9sj1n7vmCmbkzQ9axJ7eBBwIqifbGeXy%2BjwFMJBBmOwfELVvm8Dhw26qoAKR430Fof9Qf7g26hE4%2FRoNnaaINlCXqRMKUnQf0FTvsaRPmKsh7o7%2Fw1x%2FlkmbliUL32UWJo2w%2BZzlPGeuZ%2B8JVEL2iStaLfpeOv6%2BnL42eTpAbrUMPfYzMMGOqUBAIwzGmkDMhLGM6xsPK%2B%2BJYdbmF3BPNZmPP1N%2FVdmnM%2FVfkYdiXrcbLHTKjYcGVKNDTtZS%2BCO9QAZh9q%2FYhCsyxIlC5w2ZqUr8AJKEjEvcLBAt1U6xZ6uownxjJbKuZqtL%2BI%2F8637DASH5ZdFIMB8HgACokhh7EuYFCzUCqIHAIRpFW%2BHDqM%2FcVoPF9XcvgjCSnlhC7g481DtsGtFiGgcNtnbZ3vG&X-Amz-Signature=a38c4f4336a3e673e9af1c302061d1c379dd5e6664b49a07196a7f3831201761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
