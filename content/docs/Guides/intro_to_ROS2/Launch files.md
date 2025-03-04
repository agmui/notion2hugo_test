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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLBEFQWQ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw6RNJajMCu%2BDqeHGVXdvpf4TR4CiB1SBU4eokWQ3ofQIhAJicppBsD5vJWrg8zNZMHAFuJH9CS9j6dtFcix4uUsNkKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtJ9q4%2BQ%2BW34ASma4q3APMKTes0Vgha474znBkh3VOQKhUO6eFeiIGGpe1XlV72%2Fh4SaFK%2Bc3r%2FTLNsBUB%2BQg03A5uyqfhOXWnycnjHUnx0Q%2FNOhrOAO%2Bhs21uZHkitLoF5kACkHAOBYBv%2Bg9CJDWO1%2Fh8J2pvjNSu7F8szWM%2BmfCv91Z83V24jsI64T1oHUOrYijeii8N8q1D8nfJFtmKpO2ZVGgOZbHIzbMgKI1YV0ssD0Hbh%2F8XjDpV18zkCskAxbGE%2FXlDYEsIYqeOk86uvrSDka0BsDfKm5qSbPsgJ0oKtRQzosYsPLHlQynBwsDYeRaizRaY9CCd2I2gUzLfsp7yGWtUjZ8OWpfXW0Gi1CsxmDepZPW4jLnztd2CIN40X%2Fc3IXl3O0LJ6dt2B%2Bg6gHEFQTrpQAIr3KUquRClLjtvaLPUxttAF3naP4NGNURKq065XvEfJnEZhVcbOX1L7f8EwejBHlOCvFtKmVlF6Z3GTtxSXCVzpSzitTF2F69QzYiJ6Yzj2L3MOWMmpQsm7CKhn3JG0vC%2BITLsBzDpaBhogawfF5EmiZPDNxKVLGvVGXF%2Br1S5J8n6bwKE183DWUtR80hKmROddKnY947dmHRTqPLfY5v%2FiPscMZ%2B7ftTYrdHF6Vkp7YV%2BNzDA%2BJi%2BBjqkAeNK%2Fs7VKUwbLvfXe5SCopahpvbLYOwMqRGWpL2FjgFsmod0sefI8GwMGIYrz1dqccjxQJiHKpo3ejWynUFW%2BqwufI3omNkwH3BKS8leRQH95RFeXTZhNV1b6rn74IVAjG3eOqDz3zlgdv3AM9nzHYpCjJqX%2BrgldI7fhvXcISb3nyjBlC%2BQauLKGQhLN3%2BEsbCprSk%2BL9R42rbxseftm0pE6ppD&X-Amz-Signature=30072dce63666147f02b9de0f212bc0f05b09361bc6854d3a8610d2f713591ee&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLBEFQWQ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw6RNJajMCu%2BDqeHGVXdvpf4TR4CiB1SBU4eokWQ3ofQIhAJicppBsD5vJWrg8zNZMHAFuJH9CS9j6dtFcix4uUsNkKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtJ9q4%2BQ%2BW34ASma4q3APMKTes0Vgha474znBkh3VOQKhUO6eFeiIGGpe1XlV72%2Fh4SaFK%2Bc3r%2FTLNsBUB%2BQg03A5uyqfhOXWnycnjHUnx0Q%2FNOhrOAO%2Bhs21uZHkitLoF5kACkHAOBYBv%2Bg9CJDWO1%2Fh8J2pvjNSu7F8szWM%2BmfCv91Z83V24jsI64T1oHUOrYijeii8N8q1D8nfJFtmKpO2ZVGgOZbHIzbMgKI1YV0ssD0Hbh%2F8XjDpV18zkCskAxbGE%2FXlDYEsIYqeOk86uvrSDka0BsDfKm5qSbPsgJ0oKtRQzosYsPLHlQynBwsDYeRaizRaY9CCd2I2gUzLfsp7yGWtUjZ8OWpfXW0Gi1CsxmDepZPW4jLnztd2CIN40X%2Fc3IXl3O0LJ6dt2B%2Bg6gHEFQTrpQAIr3KUquRClLjtvaLPUxttAF3naP4NGNURKq065XvEfJnEZhVcbOX1L7f8EwejBHlOCvFtKmVlF6Z3GTtxSXCVzpSzitTF2F69QzYiJ6Yzj2L3MOWMmpQsm7CKhn3JG0vC%2BITLsBzDpaBhogawfF5EmiZPDNxKVLGvVGXF%2Br1S5J8n6bwKE183DWUtR80hKmROddKnY947dmHRTqPLfY5v%2FiPscMZ%2B7ftTYrdHF6Vkp7YV%2BNzDA%2BJi%2BBjqkAeNK%2Fs7VKUwbLvfXe5SCopahpvbLYOwMqRGWpL2FjgFsmod0sefI8GwMGIYrz1dqccjxQJiHKpo3ejWynUFW%2BqwufI3omNkwH3BKS8leRQH95RFeXTZhNV1b6rn74IVAjG3eOqDz3zlgdv3AM9nzHYpCjJqX%2BrgldI7fhvXcISb3nyjBlC%2BQauLKGQhLN3%2BEsbCprSk%2BL9R42rbxseftm0pE6ppD&X-Amz-Signature=4226d1ab5e526534873f254ac2edec2eff1c346eb422369eb1d106da1e4816f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLBEFQWQ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw6RNJajMCu%2BDqeHGVXdvpf4TR4CiB1SBU4eokWQ3ofQIhAJicppBsD5vJWrg8zNZMHAFuJH9CS9j6dtFcix4uUsNkKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtJ9q4%2BQ%2BW34ASma4q3APMKTes0Vgha474znBkh3VOQKhUO6eFeiIGGpe1XlV72%2Fh4SaFK%2Bc3r%2FTLNsBUB%2BQg03A5uyqfhOXWnycnjHUnx0Q%2FNOhrOAO%2Bhs21uZHkitLoF5kACkHAOBYBv%2Bg9CJDWO1%2Fh8J2pvjNSu7F8szWM%2BmfCv91Z83V24jsI64T1oHUOrYijeii8N8q1D8nfJFtmKpO2ZVGgOZbHIzbMgKI1YV0ssD0Hbh%2F8XjDpV18zkCskAxbGE%2FXlDYEsIYqeOk86uvrSDka0BsDfKm5qSbPsgJ0oKtRQzosYsPLHlQynBwsDYeRaizRaY9CCd2I2gUzLfsp7yGWtUjZ8OWpfXW0Gi1CsxmDepZPW4jLnztd2CIN40X%2Fc3IXl3O0LJ6dt2B%2Bg6gHEFQTrpQAIr3KUquRClLjtvaLPUxttAF3naP4NGNURKq065XvEfJnEZhVcbOX1L7f8EwejBHlOCvFtKmVlF6Z3GTtxSXCVzpSzitTF2F69QzYiJ6Yzj2L3MOWMmpQsm7CKhn3JG0vC%2BITLsBzDpaBhogawfF5EmiZPDNxKVLGvVGXF%2Br1S5J8n6bwKE183DWUtR80hKmROddKnY947dmHRTqPLfY5v%2FiPscMZ%2B7ftTYrdHF6Vkp7YV%2BNzDA%2BJi%2BBjqkAeNK%2Fs7VKUwbLvfXe5SCopahpvbLYOwMqRGWpL2FjgFsmod0sefI8GwMGIYrz1dqccjxQJiHKpo3ejWynUFW%2BqwufI3omNkwH3BKS8leRQH95RFeXTZhNV1b6rn74IVAjG3eOqDz3zlgdv3AM9nzHYpCjJqX%2BrgldI7fhvXcISb3nyjBlC%2BQauLKGQhLN3%2BEsbCprSk%2BL9R42rbxseftm0pE6ppD&X-Amz-Signature=c6aecd1a2679e4b7402b706cedb38519de1348d976ce2eb79d11413529165e5a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
