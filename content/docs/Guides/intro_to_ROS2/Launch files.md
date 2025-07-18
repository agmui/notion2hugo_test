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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGERCSL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCGBYc%2BgLNGrQg3DkFRZKbKgVeR76L7MGUbyN8an1uYfwIgPKX9coAhPyOR%2FifZrfHkfkhks6lbEc%2F4yJO97XdEcT4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY3BD1Z4eH2YSccoyrcAyfhnDgsDQSQElqiQqc%2F6C3d8oK12yp7Y3CvQooPyMCWE46cvxae%2FP1DK2%2BRKALcTOFyWl%2BwMRUYImLvmLtQqlArufnZxmAohVT1jEZRUL127HkRgMbalfDakrnIA981gf44jmIMjVIG0Pks0y%2Bq5BJbDs48Mikz29cEkqm%2F7nTN9AXG%2Fse%2BhuC%2FrgITHs46mYpZrtsGOhObKUCmqnDVJRls%2FvlU7u%2BepG5ANsc%2BEQwPHTvdJ%2F30nqPH8nB8CVfO%2B6Mmj%2B%2BzG8%2BWwUhHszhuee01skjuX8WR%2Fl%2BVA%2Fys0y72ME5UDgZdW5%2Bq6GFQdms%2FEAUtIwGzm%2FvghhazxzdYgNV71cSyuRMeNILEQ8gRSHRyfYc78nvidKMXbqVucAyuIVWSwJE2hKFkSkleeajDaS5E3g%2F4cNsfUlO9ETEo5O9dp7oZq3HGzFILSoC3txth5405aYEUzwFUja4MmGwVei3u%2F2JyorPvMMgZ0d%2FrbVpiGkbA4E4mmVsqy40rZh%2BSZ7hhZncRqBOakmLsTjyAaX7HS1fxzJf6b9DfYT8D5JpUVx2%2FJ5TTH0K3WL2Czgktx5ggJtiC%2FHhe7xNIH2ASed9fIDjfDHf4mq%2FYDbxtClEvk%2BHl1suO%2F636kbDOMPL858MGOqUBtjEKvC%2FqbqZJ7SU7SzslT%2FC3D9o%2FHsjqFT9x%2BNkcUCiXp0bY9KKgL7e24NNjvj%2F6h0AxrPiCVFEs%2FMxuWM0rQSVebjMEOLM5F8r2W%2FTLuSbtiSwZN%2FJQ%2FXaj5WJxh7gwrSqtvGGQXTAovSdJGYIUFPtwkMmuSjzXiWvgAmmeTb2rBwOznmyGM1F5QGa7RyXSj7m%2FgdcpoDfcY3dXDo6t7EP%2BQ1Nd&X-Amz-Signature=7873b14e94b70fa54fd093f9230c78b1f8dc4ddd16aa3a4440f86c32a4e6d03d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGERCSL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCGBYc%2BgLNGrQg3DkFRZKbKgVeR76L7MGUbyN8an1uYfwIgPKX9coAhPyOR%2FifZrfHkfkhks6lbEc%2F4yJO97XdEcT4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY3BD1Z4eH2YSccoyrcAyfhnDgsDQSQElqiQqc%2F6C3d8oK12yp7Y3CvQooPyMCWE46cvxae%2FP1DK2%2BRKALcTOFyWl%2BwMRUYImLvmLtQqlArufnZxmAohVT1jEZRUL127HkRgMbalfDakrnIA981gf44jmIMjVIG0Pks0y%2Bq5BJbDs48Mikz29cEkqm%2F7nTN9AXG%2Fse%2BhuC%2FrgITHs46mYpZrtsGOhObKUCmqnDVJRls%2FvlU7u%2BepG5ANsc%2BEQwPHTvdJ%2F30nqPH8nB8CVfO%2B6Mmj%2B%2BzG8%2BWwUhHszhuee01skjuX8WR%2Fl%2BVA%2Fys0y72ME5UDgZdW5%2Bq6GFQdms%2FEAUtIwGzm%2FvghhazxzdYgNV71cSyuRMeNILEQ8gRSHRyfYc78nvidKMXbqVucAyuIVWSwJE2hKFkSkleeajDaS5E3g%2F4cNsfUlO9ETEo5O9dp7oZq3HGzFILSoC3txth5405aYEUzwFUja4MmGwVei3u%2F2JyorPvMMgZ0d%2FrbVpiGkbA4E4mmVsqy40rZh%2BSZ7hhZncRqBOakmLsTjyAaX7HS1fxzJf6b9DfYT8D5JpUVx2%2FJ5TTH0K3WL2Czgktx5ggJtiC%2FHhe7xNIH2ASed9fIDjfDHf4mq%2FYDbxtClEvk%2BHl1suO%2F636kbDOMPL858MGOqUBtjEKvC%2FqbqZJ7SU7SzslT%2FC3D9o%2FHsjqFT9x%2BNkcUCiXp0bY9KKgL7e24NNjvj%2F6h0AxrPiCVFEs%2FMxuWM0rQSVebjMEOLM5F8r2W%2FTLuSbtiSwZN%2FJQ%2FXaj5WJxh7gwrSqtvGGQXTAovSdJGYIUFPtwkMmuSjzXiWvgAmmeTb2rBwOznmyGM1F5QGa7RyXSj7m%2FgdcpoDfcY3dXDo6t7EP%2BQ1Nd&X-Amz-Signature=6fad53ceaf883a04d7c7366ab6987bb7da057cc65dad9480ffb4623cbbc76b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOGERCSL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCGBYc%2BgLNGrQg3DkFRZKbKgVeR76L7MGUbyN8an1uYfwIgPKX9coAhPyOR%2FifZrfHkfkhks6lbEc%2F4yJO97XdEcT4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY3BD1Z4eH2YSccoyrcAyfhnDgsDQSQElqiQqc%2F6C3d8oK12yp7Y3CvQooPyMCWE46cvxae%2FP1DK2%2BRKALcTOFyWl%2BwMRUYImLvmLtQqlArufnZxmAohVT1jEZRUL127HkRgMbalfDakrnIA981gf44jmIMjVIG0Pks0y%2Bq5BJbDs48Mikz29cEkqm%2F7nTN9AXG%2Fse%2BhuC%2FrgITHs46mYpZrtsGOhObKUCmqnDVJRls%2FvlU7u%2BepG5ANsc%2BEQwPHTvdJ%2F30nqPH8nB8CVfO%2B6Mmj%2B%2BzG8%2BWwUhHszhuee01skjuX8WR%2Fl%2BVA%2Fys0y72ME5UDgZdW5%2Bq6GFQdms%2FEAUtIwGzm%2FvghhazxzdYgNV71cSyuRMeNILEQ8gRSHRyfYc78nvidKMXbqVucAyuIVWSwJE2hKFkSkleeajDaS5E3g%2F4cNsfUlO9ETEo5O9dp7oZq3HGzFILSoC3txth5405aYEUzwFUja4MmGwVei3u%2F2JyorPvMMgZ0d%2FrbVpiGkbA4E4mmVsqy40rZh%2BSZ7hhZncRqBOakmLsTjyAaX7HS1fxzJf6b9DfYT8D5JpUVx2%2FJ5TTH0K3WL2Czgktx5ggJtiC%2FHhe7xNIH2ASed9fIDjfDHf4mq%2FYDbxtClEvk%2BHl1suO%2F636kbDOMPL858MGOqUBtjEKvC%2FqbqZJ7SU7SzslT%2FC3D9o%2FHsjqFT9x%2BNkcUCiXp0bY9KKgL7e24NNjvj%2F6h0AxrPiCVFEs%2FMxuWM0rQSVebjMEOLM5F8r2W%2FTLuSbtiSwZN%2FJQ%2FXaj5WJxh7gwrSqtvGGQXTAovSdJGYIUFPtwkMmuSjzXiWvgAmmeTb2rBwOznmyGM1F5QGa7RyXSj7m%2FgdcpoDfcY3dXDo6t7EP%2BQ1Nd&X-Amz-Signature=9ad7a932d6c3c04ec2d839d01ae4eb873ae0d044e550aef5071d029234741b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
