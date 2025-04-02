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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653Y2B2WZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGHVdyYwUjKPxIiuplzxHXTA4YYo9FASvt9taSZO1kU7AiAbsgmod6xSq%2FIrmO77qtBXHtTAxK4C1XBs2aAcpnKyjSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMNYKwoypqTz2V6ZcKtwDq41sbn8brGEnbgaXoKPNERiUnwcvx2a2J5Z%2FIQf00%2Fk3VkJf%2F65rx2P3I3%2BoQKKG2bWJTVvIhRvL%2B5LAXlZWG%2FAuigdHp9%2BofHS3WZvPY9iGkwVXOwpM9%2BFoKEzT3uvncTW1TaDciprO1KfoN2VvyXLeD12XtmxGedOLfEcfgzYsmtjjz0aitzzh13gtpBTo%2BBb3eFkhlVboMZ7IipswTsMbNGp6fKuqfOqHSn%2Fsr3ABlg2nTJ%2FnbNReEF9i9icv3KwL59nCo%2Bfgg2WUiEO%2FwXMRjL%2BOgZ6Yul10VkyJnQX1OGDhWW2dXuAevrCUjA4dxTIbgxh6k%2BrO6Uhl%2FR6%2FMpB0JG19Ao8lfShqB7M6DYoZ0BUeXrKSdx4UzzPBpqBspn0jdlr%2F1nDo5gXZ66bleJvTga5AMi4xcLOJ71Kh2icniq1%2BP%2Bz3cj%2BzVb1maHkeK0eJrNgs6Y%2FcR4o6%2BU%2BvlUr8lNexC24zF3UqN7vXZRl%2BxvVL31OWnZ5ha55wfNgsrfNYHRGkyOreSJG13p7zKJdc2EOwX0p6Sij8JZXvYzOarIrMehqJFO%2FSif1isZsCwcdjxxjkObgpDlQ%2B3YMRwfFV917r7o929tyNGETDxG98d%2Fl37npvG0rOoMAw2Pu0vwY6pgEUamoPpoeQMm0tjZQctqwspxrm3FLRYB7Q6sSL12PVgx%2Bq6ur0qDufxLf0h2HVSmXbXxAqhtl5yfCjgJL%2BzLQq%2BEwOO0tYgZFRHZH7HW8VhMI62O3jXpl2n%2B7%2BBmVowzRDMqHhpeIGXQ8IhmITaO5I5%2Fhs0B3eB06PrWnlDiG0%2FyJaO%2FgFZzE%2B6gdWQeanKsykbs47qlMWbXDO2Mm7UKn99mpjYdXc&X-Amz-Signature=55d85c5e340fdec3e0e8fd290d410c3c4f71722369a9958d2c5e3d19b5576b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653Y2B2WZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGHVdyYwUjKPxIiuplzxHXTA4YYo9FASvt9taSZO1kU7AiAbsgmod6xSq%2FIrmO77qtBXHtTAxK4C1XBs2aAcpnKyjSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMNYKwoypqTz2V6ZcKtwDq41sbn8brGEnbgaXoKPNERiUnwcvx2a2J5Z%2FIQf00%2Fk3VkJf%2F65rx2P3I3%2BoQKKG2bWJTVvIhRvL%2B5LAXlZWG%2FAuigdHp9%2BofHS3WZvPY9iGkwVXOwpM9%2BFoKEzT3uvncTW1TaDciprO1KfoN2VvyXLeD12XtmxGedOLfEcfgzYsmtjjz0aitzzh13gtpBTo%2BBb3eFkhlVboMZ7IipswTsMbNGp6fKuqfOqHSn%2Fsr3ABlg2nTJ%2FnbNReEF9i9icv3KwL59nCo%2Bfgg2WUiEO%2FwXMRjL%2BOgZ6Yul10VkyJnQX1OGDhWW2dXuAevrCUjA4dxTIbgxh6k%2BrO6Uhl%2FR6%2FMpB0JG19Ao8lfShqB7M6DYoZ0BUeXrKSdx4UzzPBpqBspn0jdlr%2F1nDo5gXZ66bleJvTga5AMi4xcLOJ71Kh2icniq1%2BP%2Bz3cj%2BzVb1maHkeK0eJrNgs6Y%2FcR4o6%2BU%2BvlUr8lNexC24zF3UqN7vXZRl%2BxvVL31OWnZ5ha55wfNgsrfNYHRGkyOreSJG13p7zKJdc2EOwX0p6Sij8JZXvYzOarIrMehqJFO%2FSif1isZsCwcdjxxjkObgpDlQ%2B3YMRwfFV917r7o929tyNGETDxG98d%2Fl37npvG0rOoMAw2Pu0vwY6pgEUamoPpoeQMm0tjZQctqwspxrm3FLRYB7Q6sSL12PVgx%2Bq6ur0qDufxLf0h2HVSmXbXxAqhtl5yfCjgJL%2BzLQq%2BEwOO0tYgZFRHZH7HW8VhMI62O3jXpl2n%2B7%2BBmVowzRDMqHhpeIGXQ8IhmITaO5I5%2Fhs0B3eB06PrWnlDiG0%2FyJaO%2FgFZzE%2B6gdWQeanKsykbs47qlMWbXDO2Mm7UKn99mpjYdXc&X-Amz-Signature=e6feaacaea2290d241f9fdc23d6c4dc3f9294fe97e30e8f5825105ddb8c0ef17&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653Y2B2WZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGHVdyYwUjKPxIiuplzxHXTA4YYo9FASvt9taSZO1kU7AiAbsgmod6xSq%2FIrmO77qtBXHtTAxK4C1XBs2aAcpnKyjSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMNYKwoypqTz2V6ZcKtwDq41sbn8brGEnbgaXoKPNERiUnwcvx2a2J5Z%2FIQf00%2Fk3VkJf%2F65rx2P3I3%2BoQKKG2bWJTVvIhRvL%2B5LAXlZWG%2FAuigdHp9%2BofHS3WZvPY9iGkwVXOwpM9%2BFoKEzT3uvncTW1TaDciprO1KfoN2VvyXLeD12XtmxGedOLfEcfgzYsmtjjz0aitzzh13gtpBTo%2BBb3eFkhlVboMZ7IipswTsMbNGp6fKuqfOqHSn%2Fsr3ABlg2nTJ%2FnbNReEF9i9icv3KwL59nCo%2Bfgg2WUiEO%2FwXMRjL%2BOgZ6Yul10VkyJnQX1OGDhWW2dXuAevrCUjA4dxTIbgxh6k%2BrO6Uhl%2FR6%2FMpB0JG19Ao8lfShqB7M6DYoZ0BUeXrKSdx4UzzPBpqBspn0jdlr%2F1nDo5gXZ66bleJvTga5AMi4xcLOJ71Kh2icniq1%2BP%2Bz3cj%2BzVb1maHkeK0eJrNgs6Y%2FcR4o6%2BU%2BvlUr8lNexC24zF3UqN7vXZRl%2BxvVL31OWnZ5ha55wfNgsrfNYHRGkyOreSJG13p7zKJdc2EOwX0p6Sij8JZXvYzOarIrMehqJFO%2FSif1isZsCwcdjxxjkObgpDlQ%2B3YMRwfFV917r7o929tyNGETDxG98d%2Fl37npvG0rOoMAw2Pu0vwY6pgEUamoPpoeQMm0tjZQctqwspxrm3FLRYB7Q6sSL12PVgx%2Bq6ur0qDufxLf0h2HVSmXbXxAqhtl5yfCjgJL%2BzLQq%2BEwOO0tYgZFRHZH7HW8VhMI62O3jXpl2n%2B7%2BBmVowzRDMqHhpeIGXQ8IhmITaO5I5%2Fhs0B3eB06PrWnlDiG0%2FyJaO%2FgFZzE%2B6gdWQeanKsykbs47qlMWbXDO2Mm7UKn99mpjYdXc&X-Amz-Signature=4612835ff30ac6c1e206dc5e50e1f17ef49bab4796b33639d13e717bdc3ca9a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
