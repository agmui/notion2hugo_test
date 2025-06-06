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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZWHNQT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDptZoFe4gBDHtc4uZHyzVLjvVKOY%2BAEvfsX8hjZo42RgIgOx3oeY%2B%2F1gghIQ9Bwigl9GVe6siGnquAoaBYhZNpS2Uq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAuc%2B%2FTZYqweB2ybUCrcA1oD0aKN3GWSe7lVIMy6pVzEIAmkrpIMMeOeLxjuHgDnxMXyLrZa%2BF%2FaeseE4jxTTwYwQgdF2q3edtrN6NrzULY%2BtbNmwh1OneUV0vOXriILDGF0%2Bh9CqErbc5RTYtkcUwuRaCn%2FSQneUjoVQPf%2Bl1AOisl53txOkSGUI3aGIQo4pGy6KJrOo%2BWxyDATaVbiYGYECD8KHS3xXt7WHjlM6O5JfsD7kQwcgLTgQFL7MulDCA4Ho8NJOBKJ4d2zCYgS8Wb3j5n2tzXbvJ13S5124o8razfb2VGZDKP2kYnm%2BwMsJuT9JndWJqz6d5zvjdCEll8UP9KWzFmNlEJbcgn5s3HlE0NGBpviAgYbl1DbgVwa%2F5rlZbrNsSxtryoOLhk%2FPbNyJr29xSzCalpznfkhnpgf%2Frx%2B%2FukTCyit3PSOaAr3cqFBoIun3r1YOz2uJa9eUWng1wRjXF5g%2B9paz%2FsuElcnUcYLb97%2FFcZ8InA0ReeOYssTkduqZHtWNsc8Uo2I1qlGZJtXHh%2Bxk7tcY6eygXg2ddseC0wVQutSKQ8JufkeC7HXfifMk%2F0DxWjvhX%2B8rHKbpuQQNm2xDnKfV%2Fe2s6uVgE0dGapAJdrgZYSveC3oquVCVidjEqDlFFkHMLKRjcIGOqUBWNuiVPzKXQA8Oh%2F7qo2litcohLXfdMd3JcmeaYsHJMBXTjibh1axk2JFUODk76F7oytWBYWjAZEZypbmos1lW0P8FbYQP3oh2z%2Fqnfdv2THImovtfJlfHsxIsZ1AzfUPMQDZEAJWBVXJwjM5KWWuHzaqNNRHxJxJQdseZtL1OF8XGrb4%2FY4sXbMyr%2FePbxUWhyIZOXtjQkZz92%2FQNf63mZREaSof&X-Amz-Signature=36b5f1978522cd9d53888590c92223ffc93e91346c2c30739620683801f0425d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZWHNQT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDptZoFe4gBDHtc4uZHyzVLjvVKOY%2BAEvfsX8hjZo42RgIgOx3oeY%2B%2F1gghIQ9Bwigl9GVe6siGnquAoaBYhZNpS2Uq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAuc%2B%2FTZYqweB2ybUCrcA1oD0aKN3GWSe7lVIMy6pVzEIAmkrpIMMeOeLxjuHgDnxMXyLrZa%2BF%2FaeseE4jxTTwYwQgdF2q3edtrN6NrzULY%2BtbNmwh1OneUV0vOXriILDGF0%2Bh9CqErbc5RTYtkcUwuRaCn%2FSQneUjoVQPf%2Bl1AOisl53txOkSGUI3aGIQo4pGy6KJrOo%2BWxyDATaVbiYGYECD8KHS3xXt7WHjlM6O5JfsD7kQwcgLTgQFL7MulDCA4Ho8NJOBKJ4d2zCYgS8Wb3j5n2tzXbvJ13S5124o8razfb2VGZDKP2kYnm%2BwMsJuT9JndWJqz6d5zvjdCEll8UP9KWzFmNlEJbcgn5s3HlE0NGBpviAgYbl1DbgVwa%2F5rlZbrNsSxtryoOLhk%2FPbNyJr29xSzCalpznfkhnpgf%2Frx%2B%2FukTCyit3PSOaAr3cqFBoIun3r1YOz2uJa9eUWng1wRjXF5g%2B9paz%2FsuElcnUcYLb97%2FFcZ8InA0ReeOYssTkduqZHtWNsc8Uo2I1qlGZJtXHh%2Bxk7tcY6eygXg2ddseC0wVQutSKQ8JufkeC7HXfifMk%2F0DxWjvhX%2B8rHKbpuQQNm2xDnKfV%2Fe2s6uVgE0dGapAJdrgZYSveC3oquVCVidjEqDlFFkHMLKRjcIGOqUBWNuiVPzKXQA8Oh%2F7qo2litcohLXfdMd3JcmeaYsHJMBXTjibh1axk2JFUODk76F7oytWBYWjAZEZypbmos1lW0P8FbYQP3oh2z%2Fqnfdv2THImovtfJlfHsxIsZ1AzfUPMQDZEAJWBVXJwjM5KWWuHzaqNNRHxJxJQdseZtL1OF8XGrb4%2FY4sXbMyr%2FePbxUWhyIZOXtjQkZz92%2FQNf63mZREaSof&X-Amz-Signature=266f54261151f391133be5894fd1c68fb3840f9ec13bb51af21bb25b9a10fa44&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZWHNQT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDptZoFe4gBDHtc4uZHyzVLjvVKOY%2BAEvfsX8hjZo42RgIgOx3oeY%2B%2F1gghIQ9Bwigl9GVe6siGnquAoaBYhZNpS2Uq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAuc%2B%2FTZYqweB2ybUCrcA1oD0aKN3GWSe7lVIMy6pVzEIAmkrpIMMeOeLxjuHgDnxMXyLrZa%2BF%2FaeseE4jxTTwYwQgdF2q3edtrN6NrzULY%2BtbNmwh1OneUV0vOXriILDGF0%2Bh9CqErbc5RTYtkcUwuRaCn%2FSQneUjoVQPf%2Bl1AOisl53txOkSGUI3aGIQo4pGy6KJrOo%2BWxyDATaVbiYGYECD8KHS3xXt7WHjlM6O5JfsD7kQwcgLTgQFL7MulDCA4Ho8NJOBKJ4d2zCYgS8Wb3j5n2tzXbvJ13S5124o8razfb2VGZDKP2kYnm%2BwMsJuT9JndWJqz6d5zvjdCEll8UP9KWzFmNlEJbcgn5s3HlE0NGBpviAgYbl1DbgVwa%2F5rlZbrNsSxtryoOLhk%2FPbNyJr29xSzCalpznfkhnpgf%2Frx%2B%2FukTCyit3PSOaAr3cqFBoIun3r1YOz2uJa9eUWng1wRjXF5g%2B9paz%2FsuElcnUcYLb97%2FFcZ8InA0ReeOYssTkduqZHtWNsc8Uo2I1qlGZJtXHh%2Bxk7tcY6eygXg2ddseC0wVQutSKQ8JufkeC7HXfifMk%2F0DxWjvhX%2B8rHKbpuQQNm2xDnKfV%2Fe2s6uVgE0dGapAJdrgZYSveC3oquVCVidjEqDlFFkHMLKRjcIGOqUBWNuiVPzKXQA8Oh%2F7qo2litcohLXfdMd3JcmeaYsHJMBXTjibh1axk2JFUODk76F7oytWBYWjAZEZypbmos1lW0P8FbYQP3oh2z%2Fqnfdv2THImovtfJlfHsxIsZ1AzfUPMQDZEAJWBVXJwjM5KWWuHzaqNNRHxJxJQdseZtL1OF8XGrb4%2FY4sXbMyr%2FePbxUWhyIZOXtjQkZz92%2FQNf63mZREaSof&X-Amz-Signature=9ca806a3089144d6528b8447a5ecce85b959616ca9fdbe2d6bbfb939a53292cc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
