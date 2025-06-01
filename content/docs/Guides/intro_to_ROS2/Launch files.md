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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTV42D6H%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDI3GK3RJo2OS2b7N949BOWDMexXuF7NlWf0tO8XQlLegIgfB%2BRLGluHu1iJQ%2FmRKq1R%2BoOHnzVS4%2FqbTGhMUnxdYoqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2NbeqL%2F18ciqpIJyrcA8ElPXtBAoVoYMdOVIzhUtnPJKYQYnYI%2FpaxuoJE%2B0nK2BlvOKG4oL0dg7u7%2F6iiKeHxvlLnbwbDg2zWLJtkadxGYec4Ij7ykF%2FsK7W9StlnLOFQ1%2FpMSIiwbeateCRJ%2Fr%2FNbEmhS6eLt9p4u95N8AkqeP57yofUNROzUJ%2BWXYBkSHisA7vLIilPremfS%2FjlPn8tK2P0LE%2FVTqz0cWmrgtY70OKGZXW%2BI2uQbMcEr72G%2BjnnD%2FdKs10L9hYonHuSfE2V4sNPc0Ou4GzOxUS2Tiao98VmOKcM9TZpZ%2FCPfXvPY23nBcG3%2FB1HoAjMg%2FKDaLSIb0vnIe7zix0sDZ%2FCIxLZNrj4kzCZq3KZ5CwvuZ8uFMQI%2B906sRgy72DMn6uE8MZYjrubnt%2FVaHBSICUu%2FvcHGDzXQmkNh9xRCEsNQZ%2FEYbYOn%2BjsvUmnNXE22QMDNGDg%2BYH%2FmqnESNiQwqrmVDwpo1eQBuceGOeqkgXtyBkewbE7T0%2ForbdA%2BIBap%2BEI70rmpWEjTlJbmEudIeXJGD2JC%2FLFkehSRJtrqGWYqIXuqWM4Fxwimob1u%2FplM%2BG0nFQAu0O%2FTU8ajwrbaqhLnZ9kVFQCiI1zgjGTAJ6r%2B01Vdcliv6EdnCdWzdRAML7f8MEGOqUBdgieRh1q1e%2BsWm4jBBNoboywCz1dNFBqSJHMIGZW1Y6a3sWz5dwjNq8%2BmQtSkAAxibaGvdUC%2B1EOpmQaCdIby3DuoThnwHcIL7rGSgKme0qhidVFt%2FO2UilUgE45WQeMU5wAQ2W%2B7W6DHmJzlndwUSLqnU5NDraFY8MdQL5bCxhYhshNh7eR0EeSE6ukQWAMvkfFbm9WO8l96pGdsNi%2FXMPAt2xO&X-Amz-Signature=17a603a0e7a5d9cefc784762ea50fdd4acb95767b7da22c2737f59ca23552101&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTV42D6H%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDI3GK3RJo2OS2b7N949BOWDMexXuF7NlWf0tO8XQlLegIgfB%2BRLGluHu1iJQ%2FmRKq1R%2BoOHnzVS4%2FqbTGhMUnxdYoqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2NbeqL%2F18ciqpIJyrcA8ElPXtBAoVoYMdOVIzhUtnPJKYQYnYI%2FpaxuoJE%2B0nK2BlvOKG4oL0dg7u7%2F6iiKeHxvlLnbwbDg2zWLJtkadxGYec4Ij7ykF%2FsK7W9StlnLOFQ1%2FpMSIiwbeateCRJ%2Fr%2FNbEmhS6eLt9p4u95N8AkqeP57yofUNROzUJ%2BWXYBkSHisA7vLIilPremfS%2FjlPn8tK2P0LE%2FVTqz0cWmrgtY70OKGZXW%2BI2uQbMcEr72G%2BjnnD%2FdKs10L9hYonHuSfE2V4sNPc0Ou4GzOxUS2Tiao98VmOKcM9TZpZ%2FCPfXvPY23nBcG3%2FB1HoAjMg%2FKDaLSIb0vnIe7zix0sDZ%2FCIxLZNrj4kzCZq3KZ5CwvuZ8uFMQI%2B906sRgy72DMn6uE8MZYjrubnt%2FVaHBSICUu%2FvcHGDzXQmkNh9xRCEsNQZ%2FEYbYOn%2BjsvUmnNXE22QMDNGDg%2BYH%2FmqnESNiQwqrmVDwpo1eQBuceGOeqkgXtyBkewbE7T0%2ForbdA%2BIBap%2BEI70rmpWEjTlJbmEudIeXJGD2JC%2FLFkehSRJtrqGWYqIXuqWM4Fxwimob1u%2FplM%2BG0nFQAu0O%2FTU8ajwrbaqhLnZ9kVFQCiI1zgjGTAJ6r%2B01Vdcliv6EdnCdWzdRAML7f8MEGOqUBdgieRh1q1e%2BsWm4jBBNoboywCz1dNFBqSJHMIGZW1Y6a3sWz5dwjNq8%2BmQtSkAAxibaGvdUC%2B1EOpmQaCdIby3DuoThnwHcIL7rGSgKme0qhidVFt%2FO2UilUgE45WQeMU5wAQ2W%2B7W6DHmJzlndwUSLqnU5NDraFY8MdQL5bCxhYhshNh7eR0EeSE6ukQWAMvkfFbm9WO8l96pGdsNi%2FXMPAt2xO&X-Amz-Signature=b091056777204da15a4985864b715fbd265f09a88f8a5ac3ef373dc784d85b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTV42D6H%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDI3GK3RJo2OS2b7N949BOWDMexXuF7NlWf0tO8XQlLegIgfB%2BRLGluHu1iJQ%2FmRKq1R%2BoOHnzVS4%2FqbTGhMUnxdYoqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2NbeqL%2F18ciqpIJyrcA8ElPXtBAoVoYMdOVIzhUtnPJKYQYnYI%2FpaxuoJE%2B0nK2BlvOKG4oL0dg7u7%2F6iiKeHxvlLnbwbDg2zWLJtkadxGYec4Ij7ykF%2FsK7W9StlnLOFQ1%2FpMSIiwbeateCRJ%2Fr%2FNbEmhS6eLt9p4u95N8AkqeP57yofUNROzUJ%2BWXYBkSHisA7vLIilPremfS%2FjlPn8tK2P0LE%2FVTqz0cWmrgtY70OKGZXW%2BI2uQbMcEr72G%2BjnnD%2FdKs10L9hYonHuSfE2V4sNPc0Ou4GzOxUS2Tiao98VmOKcM9TZpZ%2FCPfXvPY23nBcG3%2FB1HoAjMg%2FKDaLSIb0vnIe7zix0sDZ%2FCIxLZNrj4kzCZq3KZ5CwvuZ8uFMQI%2B906sRgy72DMn6uE8MZYjrubnt%2FVaHBSICUu%2FvcHGDzXQmkNh9xRCEsNQZ%2FEYbYOn%2BjsvUmnNXE22QMDNGDg%2BYH%2FmqnESNiQwqrmVDwpo1eQBuceGOeqkgXtyBkewbE7T0%2ForbdA%2BIBap%2BEI70rmpWEjTlJbmEudIeXJGD2JC%2FLFkehSRJtrqGWYqIXuqWM4Fxwimob1u%2FplM%2BG0nFQAu0O%2FTU8ajwrbaqhLnZ9kVFQCiI1zgjGTAJ6r%2B01Vdcliv6EdnCdWzdRAML7f8MEGOqUBdgieRh1q1e%2BsWm4jBBNoboywCz1dNFBqSJHMIGZW1Y6a3sWz5dwjNq8%2BmQtSkAAxibaGvdUC%2B1EOpmQaCdIby3DuoThnwHcIL7rGSgKme0qhidVFt%2FO2UilUgE45WQeMU5wAQ2W%2B7W6DHmJzlndwUSLqnU5NDraFY8MdQL5bCxhYhshNh7eR0EeSE6ukQWAMvkfFbm9WO8l96pGdsNi%2FXMPAt2xO&X-Amz-Signature=8f7dcdbc4645d03a1a06a821c4422009b2dbd71f922ce46a01fa1a6f2348a88a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
