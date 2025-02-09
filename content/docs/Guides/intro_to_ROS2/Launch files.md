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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7QMHP22%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmnhJezyh5ipqOmrBn2G%2BaVWBQ1fnzxQgqZ6GY%2BMG4fAIgf%2BR387Q9Zs4PQVw0MN8DSwggMGIYf1pZuEQnFWz8fZoqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7eZWQYE%2BH%2Bl9vrNyrcA8BFivKVAqnR54XDVUN75OacyfroSRmeciQyO0XqbbqkGoar2uNuh2Ekpc8oHUEzuSrkDxNN4vrKX%2FkaDaqxV4yvTPeeClGC8AzKjGnHFJX4x0DPxI5ejr%2BmlWR8Npl0%2F5ASV%2F3i%2FLbN%2BfAmjossh2P4R8x0lyAZgYyhctX7SX0lElhdMJJBo95qo%2BfES1NsRJIeVvPdTSVetVcbM%2F97z5Uhr%2B4SJgOleQj60In99xgU65H7tjjFJO6EO0CeJ9pDotXEd29ffDZ7mydiKZvKofpBqgZ3hSJDhFbdbP7AG%2FW5Eea5NRb2aZK6BJq4t6sTa9Z10m2mL%2F4OOscIrWoPgMO0o4EOTNP2ibeNvDtPgaz652ZTg0%2Brlk3KbnLdTerTibtXGy56DcMCZu5SIFGm5sN9dP6xnX8sRbPbMl2fFHoQ7rtSLRK9c9A8WrlmR7%2FpW5IQQ97%2B%2BOsh%2BFO2afzHt6JOa1cBteV1mDO6IATdvYEfTyTynptYjQHATNwVnORBLhGTXJDc9hUHDl2OyNWbMTh21seE%2Bu68VByl96Zh85%2BG0KafXKriImkJgHO2vpiXJGQmVvUsESmZaVEDGBJyedjj0MEIgfKqXBaC4V6i6VqTn5e4LcpUol6RwzyLMOK%2BoL0GOqUBNLCG65UTWp0E4uuODTnEhpQSKhMgrsUEVlFAn22SZ5Dp6sQliPdLlHb5qoevsdPaP%2Bz3fk9JQu0ffOyp9E5bpYhb0wMbv5oa7OV11z4lJxOr3uBawoI75Mp%2F0IYeJhFQ%2FKY%2B5G389z%2FsNM6J8IgSgOWuVwNSgXu3qvnIdniKXEcIVRvg8kDRta1228w9NZkwOfSLqKcZr1UnNah%2BJH%2FCsh%2F4kKSs&X-Amz-Signature=cf95e3ca7d973377b012a50e2ef0ec7843c1e7187c86bd812909453a7d190c53&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7QMHP22%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmnhJezyh5ipqOmrBn2G%2BaVWBQ1fnzxQgqZ6GY%2BMG4fAIgf%2BR387Q9Zs4PQVw0MN8DSwggMGIYf1pZuEQnFWz8fZoqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7eZWQYE%2BH%2Bl9vrNyrcA8BFivKVAqnR54XDVUN75OacyfroSRmeciQyO0XqbbqkGoar2uNuh2Ekpc8oHUEzuSrkDxNN4vrKX%2FkaDaqxV4yvTPeeClGC8AzKjGnHFJX4x0DPxI5ejr%2BmlWR8Npl0%2F5ASV%2F3i%2FLbN%2BfAmjossh2P4R8x0lyAZgYyhctX7SX0lElhdMJJBo95qo%2BfES1NsRJIeVvPdTSVetVcbM%2F97z5Uhr%2B4SJgOleQj60In99xgU65H7tjjFJO6EO0CeJ9pDotXEd29ffDZ7mydiKZvKofpBqgZ3hSJDhFbdbP7AG%2FW5Eea5NRb2aZK6BJq4t6sTa9Z10m2mL%2F4OOscIrWoPgMO0o4EOTNP2ibeNvDtPgaz652ZTg0%2Brlk3KbnLdTerTibtXGy56DcMCZu5SIFGm5sN9dP6xnX8sRbPbMl2fFHoQ7rtSLRK9c9A8WrlmR7%2FpW5IQQ97%2B%2BOsh%2BFO2afzHt6JOa1cBteV1mDO6IATdvYEfTyTynptYjQHATNwVnORBLhGTXJDc9hUHDl2OyNWbMTh21seE%2Bu68VByl96Zh85%2BG0KafXKriImkJgHO2vpiXJGQmVvUsESmZaVEDGBJyedjj0MEIgfKqXBaC4V6i6VqTn5e4LcpUol6RwzyLMOK%2BoL0GOqUBNLCG65UTWp0E4uuODTnEhpQSKhMgrsUEVlFAn22SZ5Dp6sQliPdLlHb5qoevsdPaP%2Bz3fk9JQu0ffOyp9E5bpYhb0wMbv5oa7OV11z4lJxOr3uBawoI75Mp%2F0IYeJhFQ%2FKY%2B5G389z%2FsNM6J8IgSgOWuVwNSgXu3qvnIdniKXEcIVRvg8kDRta1228w9NZkwOfSLqKcZr1UnNah%2BJH%2FCsh%2F4kKSs&X-Amz-Signature=245f24e7c2b0d3cad38b38ccd844aaff663dcc95ac55a71ce02c6d583e2e5869&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7QMHP22%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmnhJezyh5ipqOmrBn2G%2BaVWBQ1fnzxQgqZ6GY%2BMG4fAIgf%2BR387Q9Zs4PQVw0MN8DSwggMGIYf1pZuEQnFWz8fZoqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7eZWQYE%2BH%2Bl9vrNyrcA8BFivKVAqnR54XDVUN75OacyfroSRmeciQyO0XqbbqkGoar2uNuh2Ekpc8oHUEzuSrkDxNN4vrKX%2FkaDaqxV4yvTPeeClGC8AzKjGnHFJX4x0DPxI5ejr%2BmlWR8Npl0%2F5ASV%2F3i%2FLbN%2BfAmjossh2P4R8x0lyAZgYyhctX7SX0lElhdMJJBo95qo%2BfES1NsRJIeVvPdTSVetVcbM%2F97z5Uhr%2B4SJgOleQj60In99xgU65H7tjjFJO6EO0CeJ9pDotXEd29ffDZ7mydiKZvKofpBqgZ3hSJDhFbdbP7AG%2FW5Eea5NRb2aZK6BJq4t6sTa9Z10m2mL%2F4OOscIrWoPgMO0o4EOTNP2ibeNvDtPgaz652ZTg0%2Brlk3KbnLdTerTibtXGy56DcMCZu5SIFGm5sN9dP6xnX8sRbPbMl2fFHoQ7rtSLRK9c9A8WrlmR7%2FpW5IQQ97%2B%2BOsh%2BFO2afzHt6JOa1cBteV1mDO6IATdvYEfTyTynptYjQHATNwVnORBLhGTXJDc9hUHDl2OyNWbMTh21seE%2Bu68VByl96Zh85%2BG0KafXKriImkJgHO2vpiXJGQmVvUsESmZaVEDGBJyedjj0MEIgfKqXBaC4V6i6VqTn5e4LcpUol6RwzyLMOK%2BoL0GOqUBNLCG65UTWp0E4uuODTnEhpQSKhMgrsUEVlFAn22SZ5Dp6sQliPdLlHb5qoevsdPaP%2Bz3fk9JQu0ffOyp9E5bpYhb0wMbv5oa7OV11z4lJxOr3uBawoI75Mp%2F0IYeJhFQ%2FKY%2B5G389z%2FsNM6J8IgSgOWuVwNSgXu3qvnIdniKXEcIVRvg8kDRta1228w9NZkwOfSLqKcZr1UnNah%2BJH%2FCsh%2F4kKSs&X-Amz-Signature=732c15db9f8203fa8ee081f9b722fb71408c8d5d92e161685b7385e1a2ca3828&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
