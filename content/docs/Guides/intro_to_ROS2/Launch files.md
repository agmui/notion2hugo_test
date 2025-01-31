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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7I3WVIZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUIfe7HN3QvXjZgw6tj03rrlSrVjGdcJxwZbOmTZYlsAiBbHE07Lx1TZeBMmHdcgRUH50%2Bk207fJovk326lEOxOFyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvIydgGRjrKGPp9%2BbKtwDdsmBu5qGbqerr7wR%2FtT5q8kQrt3Y2Xv9oazvelCfA3QuXQbXOLZ8jI6LMU39jQ%2BYetkVw5FmeM6Yp6Az1EsIQ4hbZsb6RSyoyhCFX8zgXD5yMndNqD8o%2FXYtdz90Gp402CvDcygfb4eXTUtrQ4nwfXARhJgokaOKAsf%2BnUjgEVzQYH1PmVsOYlfVTZSIv4MeWiDXfrvXX2foPuwfG7akfB1EI4bsxcavcmSY4oVgp9XzA9TkPswEDTOooHgMH8whhfja6tw9clCtpL3Y7IDJ6%2Bs59VmwgzpKRy9LxZ7oAE0PZEoa8cb%2FBn%2FucKrm4qaHqY3FzmSJW86z%2B50ZtJBOiSE6DbhaAi2ZjVdw4oYmYeorvVV4f93CkRbupyQ2BC4LdN%2FkvlTAT%2F9%2FHva9GCfWra1GkVJDKjcY7nVy5ip5TvphK4yQImjFjNLq%2BCo0lHumraw6ZSw2Pl%2BWicEyQ4HX%2FtayGeb4wQ7rXKe0Z22NOrD4mdBj7qI%2Bhg%2FRwJWtDqjfzv9DIdh%2BMSP0mHU29pHXvYfkxMgOeswcrHxmiFgA5zGV%2BXyv4%2Bh0C8MGChAgmf0SZGrPCccumYacs8%2B5KuBtVXkeq8S5uR6Mea7K0rkO3cFbyzTm3YjZjilfF9swycrzvAY6pgGcaJgH8YB1n0RoF38Y01F9KGYcY6mFPI4skc55lMO3jHiSMUvRoE19Ufi2xuiTQ0YLWDPsd1hSRtSPAY1uLMZKIF%2B%2Fz6GP6pXdrqpcNw92vhP55sXbt0d0GXhoUMj4xyqOkjEoCSXVIN%2FT00RRcOLCfckvsE%2F%2BD1WSN%2BR94csMZLWhrcyJ0%2FwPQfxv9lpqxP1bRqNcymXnjxaNCeTVwJaAMWr6t2L6&X-Amz-Signature=d4971926893ca84ee8e6d8507a07010fe034712df2b0f97c80d38f88ae808e58&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7I3WVIZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUIfe7HN3QvXjZgw6tj03rrlSrVjGdcJxwZbOmTZYlsAiBbHE07Lx1TZeBMmHdcgRUH50%2Bk207fJovk326lEOxOFyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvIydgGRjrKGPp9%2BbKtwDdsmBu5qGbqerr7wR%2FtT5q8kQrt3Y2Xv9oazvelCfA3QuXQbXOLZ8jI6LMU39jQ%2BYetkVw5FmeM6Yp6Az1EsIQ4hbZsb6RSyoyhCFX8zgXD5yMndNqD8o%2FXYtdz90Gp402CvDcygfb4eXTUtrQ4nwfXARhJgokaOKAsf%2BnUjgEVzQYH1PmVsOYlfVTZSIv4MeWiDXfrvXX2foPuwfG7akfB1EI4bsxcavcmSY4oVgp9XzA9TkPswEDTOooHgMH8whhfja6tw9clCtpL3Y7IDJ6%2Bs59VmwgzpKRy9LxZ7oAE0PZEoa8cb%2FBn%2FucKrm4qaHqY3FzmSJW86z%2B50ZtJBOiSE6DbhaAi2ZjVdw4oYmYeorvVV4f93CkRbupyQ2BC4LdN%2FkvlTAT%2F9%2FHva9GCfWra1GkVJDKjcY7nVy5ip5TvphK4yQImjFjNLq%2BCo0lHumraw6ZSw2Pl%2BWicEyQ4HX%2FtayGeb4wQ7rXKe0Z22NOrD4mdBj7qI%2Bhg%2FRwJWtDqjfzv9DIdh%2BMSP0mHU29pHXvYfkxMgOeswcrHxmiFgA5zGV%2BXyv4%2Bh0C8MGChAgmf0SZGrPCccumYacs8%2B5KuBtVXkeq8S5uR6Mea7K0rkO3cFbyzTm3YjZjilfF9swycrzvAY6pgGcaJgH8YB1n0RoF38Y01F9KGYcY6mFPI4skc55lMO3jHiSMUvRoE19Ufi2xuiTQ0YLWDPsd1hSRtSPAY1uLMZKIF%2B%2Fz6GP6pXdrqpcNw92vhP55sXbt0d0GXhoUMj4xyqOkjEoCSXVIN%2FT00RRcOLCfckvsE%2F%2BD1WSN%2BR94csMZLWhrcyJ0%2FwPQfxv9lpqxP1bRqNcymXnjxaNCeTVwJaAMWr6t2L6&X-Amz-Signature=2c2d929d428ee139c2789261f4813db03620c1934682cda6fbce795273842a95&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7I3WVIZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUIfe7HN3QvXjZgw6tj03rrlSrVjGdcJxwZbOmTZYlsAiBbHE07Lx1TZeBMmHdcgRUH50%2Bk207fJovk326lEOxOFyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvIydgGRjrKGPp9%2BbKtwDdsmBu5qGbqerr7wR%2FtT5q8kQrt3Y2Xv9oazvelCfA3QuXQbXOLZ8jI6LMU39jQ%2BYetkVw5FmeM6Yp6Az1EsIQ4hbZsb6RSyoyhCFX8zgXD5yMndNqD8o%2FXYtdz90Gp402CvDcygfb4eXTUtrQ4nwfXARhJgokaOKAsf%2BnUjgEVzQYH1PmVsOYlfVTZSIv4MeWiDXfrvXX2foPuwfG7akfB1EI4bsxcavcmSY4oVgp9XzA9TkPswEDTOooHgMH8whhfja6tw9clCtpL3Y7IDJ6%2Bs59VmwgzpKRy9LxZ7oAE0PZEoa8cb%2FBn%2FucKrm4qaHqY3FzmSJW86z%2B50ZtJBOiSE6DbhaAi2ZjVdw4oYmYeorvVV4f93CkRbupyQ2BC4LdN%2FkvlTAT%2F9%2FHva9GCfWra1GkVJDKjcY7nVy5ip5TvphK4yQImjFjNLq%2BCo0lHumraw6ZSw2Pl%2BWicEyQ4HX%2FtayGeb4wQ7rXKe0Z22NOrD4mdBj7qI%2Bhg%2FRwJWtDqjfzv9DIdh%2BMSP0mHU29pHXvYfkxMgOeswcrHxmiFgA5zGV%2BXyv4%2Bh0C8MGChAgmf0SZGrPCccumYacs8%2B5KuBtVXkeq8S5uR6Mea7K0rkO3cFbyzTm3YjZjilfF9swycrzvAY6pgGcaJgH8YB1n0RoF38Y01F9KGYcY6mFPI4skc55lMO3jHiSMUvRoE19Ufi2xuiTQ0YLWDPsd1hSRtSPAY1uLMZKIF%2B%2Fz6GP6pXdrqpcNw92vhP55sXbt0d0GXhoUMj4xyqOkjEoCSXVIN%2FT00RRcOLCfckvsE%2F%2BD1WSN%2BR94csMZLWhrcyJ0%2FwPQfxv9lpqxP1bRqNcymXnjxaNCeTVwJaAMWr6t2L6&X-Amz-Signature=e64cea5bf2a631577cff60da4fef3db2abc5441b848e065b3d01d1893cf79b77&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
