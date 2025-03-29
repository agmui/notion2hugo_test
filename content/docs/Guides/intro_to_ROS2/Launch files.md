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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23NJBID%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD3FJkbWOnZ34juFgHeX9dTT4%2BCLiolb3Hff7hhOJ9AWAIgAU5hvpc2vVKJpQ2%2BRn25oI8j01v7hOd31TmeN9MB038q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDak3wvJ46%2FHg4DAIircA3q%2BTJQPJfvBUmZW0su8jE0XQb4rwWal8jeKKLAeKtGU3DiBfhQy1XvpS66BhJY3JnHAPbC1NhXG0Rwu8zDUe%2FSZY2N3yEr%2BSpqXsuaem%2B3Kn61bWun1QUxOHxBZF%2F6emlpDpq3c6G%2BNUJr7DQQVVgAbyuczPb6wfjZlUNP50thxZxV0Ukvfy5%2FnoZLqVLZjZdapzmFdnWluHK0cHIKS4R01wY1c1sXPlLFwFjekX6Kw7zHS98%2BsrrVwvsYojwz%2FyeZ3R5zzm5XYNxT5HGw1gfT1INRyhQoSHtJi8Csg8MZagHT5OuMYj42romg02PrHX4LZ70Hn6CESplXv042fgSpikGuoQ%2ByQPgoKosQgY3GItYILA0sIJqZmc1JTwPESyApbVd3gJamVHPymhizfBQeyM5Pd1G0AULCzlzQP1ThCDfGzMNbMf5gfyQGdOUWRL3ZhsVR1Ku%2BUzow3ZRQV4QUrAuBSIDiWjhmDHewoek81y6Aj3iV00Vv9oMYfm2s0tA8%2BKzncwPmJezN72vRqeuwHx4WRpZIUOCOO3DwOuxFT63%2F9UfCl9smp9%2Fd%2FB%2F2e0FF4LwDwi9QANiTFSYQ61OIyVN%2BogLGIVui3WFZfwMo%2Fr1Y8YP672FGUfmj%2BMOrenL8GOqUBB9uTF32JD%2FclAdXQ6jIrZuXZLRvkAceVfhJk31SYYzBJO5xzvs1uW9EWlBY9m57bUbdX621iR4wZzfKM1D1Lr7nefB6lJ2OfjmAGi2vlPZi6r%2FuMKWBhy2dxPgPCzqt37AnWbZNS4HX%2FFY2rGCAh9NuFYJvizWA%2F43YwnxP%2B1nPH51WxbHli9VGpPGmjSsHFZwCwKbtjsXzvhe0QJyEbwUT8lU4k&X-Amz-Signature=2b82516482c70c5437eaa4fb3ab08ff8e2a5b81d9eb776ea1ff6f832350ac9ef&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23NJBID%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD3FJkbWOnZ34juFgHeX9dTT4%2BCLiolb3Hff7hhOJ9AWAIgAU5hvpc2vVKJpQ2%2BRn25oI8j01v7hOd31TmeN9MB038q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDak3wvJ46%2FHg4DAIircA3q%2BTJQPJfvBUmZW0su8jE0XQb4rwWal8jeKKLAeKtGU3DiBfhQy1XvpS66BhJY3JnHAPbC1NhXG0Rwu8zDUe%2FSZY2N3yEr%2BSpqXsuaem%2B3Kn61bWun1QUxOHxBZF%2F6emlpDpq3c6G%2BNUJr7DQQVVgAbyuczPb6wfjZlUNP50thxZxV0Ukvfy5%2FnoZLqVLZjZdapzmFdnWluHK0cHIKS4R01wY1c1sXPlLFwFjekX6Kw7zHS98%2BsrrVwvsYojwz%2FyeZ3R5zzm5XYNxT5HGw1gfT1INRyhQoSHtJi8Csg8MZagHT5OuMYj42romg02PrHX4LZ70Hn6CESplXv042fgSpikGuoQ%2ByQPgoKosQgY3GItYILA0sIJqZmc1JTwPESyApbVd3gJamVHPymhizfBQeyM5Pd1G0AULCzlzQP1ThCDfGzMNbMf5gfyQGdOUWRL3ZhsVR1Ku%2BUzow3ZRQV4QUrAuBSIDiWjhmDHewoek81y6Aj3iV00Vv9oMYfm2s0tA8%2BKzncwPmJezN72vRqeuwHx4WRpZIUOCOO3DwOuxFT63%2F9UfCl9smp9%2Fd%2FB%2F2e0FF4LwDwi9QANiTFSYQ61OIyVN%2BogLGIVui3WFZfwMo%2Fr1Y8YP672FGUfmj%2BMOrenL8GOqUBB9uTF32JD%2FclAdXQ6jIrZuXZLRvkAceVfhJk31SYYzBJO5xzvs1uW9EWlBY9m57bUbdX621iR4wZzfKM1D1Lr7nefB6lJ2OfjmAGi2vlPZi6r%2FuMKWBhy2dxPgPCzqt37AnWbZNS4HX%2FFY2rGCAh9NuFYJvizWA%2F43YwnxP%2B1nPH51WxbHli9VGpPGmjSsHFZwCwKbtjsXzvhe0QJyEbwUT8lU4k&X-Amz-Signature=431e5b9c3f6110063143d71f2e9691fc8080de5dcf5e6e8278466eeb6bdd9437&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23NJBID%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD3FJkbWOnZ34juFgHeX9dTT4%2BCLiolb3Hff7hhOJ9AWAIgAU5hvpc2vVKJpQ2%2BRn25oI8j01v7hOd31TmeN9MB038q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDak3wvJ46%2FHg4DAIircA3q%2BTJQPJfvBUmZW0su8jE0XQb4rwWal8jeKKLAeKtGU3DiBfhQy1XvpS66BhJY3JnHAPbC1NhXG0Rwu8zDUe%2FSZY2N3yEr%2BSpqXsuaem%2B3Kn61bWun1QUxOHxBZF%2F6emlpDpq3c6G%2BNUJr7DQQVVgAbyuczPb6wfjZlUNP50thxZxV0Ukvfy5%2FnoZLqVLZjZdapzmFdnWluHK0cHIKS4R01wY1c1sXPlLFwFjekX6Kw7zHS98%2BsrrVwvsYojwz%2FyeZ3R5zzm5XYNxT5HGw1gfT1INRyhQoSHtJi8Csg8MZagHT5OuMYj42romg02PrHX4LZ70Hn6CESplXv042fgSpikGuoQ%2ByQPgoKosQgY3GItYILA0sIJqZmc1JTwPESyApbVd3gJamVHPymhizfBQeyM5Pd1G0AULCzlzQP1ThCDfGzMNbMf5gfyQGdOUWRL3ZhsVR1Ku%2BUzow3ZRQV4QUrAuBSIDiWjhmDHewoek81y6Aj3iV00Vv9oMYfm2s0tA8%2BKzncwPmJezN72vRqeuwHx4WRpZIUOCOO3DwOuxFT63%2F9UfCl9smp9%2Fd%2FB%2F2e0FF4LwDwi9QANiTFSYQ61OIyVN%2BogLGIVui3WFZfwMo%2Fr1Y8YP672FGUfmj%2BMOrenL8GOqUBB9uTF32JD%2FclAdXQ6jIrZuXZLRvkAceVfhJk31SYYzBJO5xzvs1uW9EWlBY9m57bUbdX621iR4wZzfKM1D1Lr7nefB6lJ2OfjmAGi2vlPZi6r%2FuMKWBhy2dxPgPCzqt37AnWbZNS4HX%2FFY2rGCAh9NuFYJvizWA%2F43YwnxP%2B1nPH51WxbHli9VGpPGmjSsHFZwCwKbtjsXzvhe0QJyEbwUT8lU4k&X-Amz-Signature=d4baeafb116c3cc83cde6e3eccba3255da978703a5499f9a8fee2600ddfd3e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
