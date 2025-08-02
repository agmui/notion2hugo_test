---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GGF5AKT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvctfj4mR6VsK7%2F9JnmJw31Y%2F%2Fg1%2BLNuIerjtA9g8MmAiEAnHkFQ4ruMMnT%2FDQ76u9Zq9%2Fo%2F6vPLSrgFgavq8DChzAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDI5YZUW1Zdto6qY8dyrcA%2FZEWHLLPe8aLsuvdFhO10WwenOyBwTOlKz5ZNC%2FFot%2FrmW%2FpFv643lxnSyLSZ%2B7YjbYCJmkO85zJ6qfTDIoXvq%2Bt1brQ399tmtNKQVIabIGh1xpoguhQQfaZK5dJdXrsCqQY0PanWQ2ZKGqZk8wgxw4BwnDy411UaCKwcmT2BqFHZAbZCCR2vqnFvtKUhzicv7rx164bmlow02fHPKjeZZpQLgS9eRPju5qA56D3KMBqsPOP%2FMaHuoo2AWubAAF6xX8GL2t4Rw76TyA%2FrZC%2FjkuvMy5M%2FjcY2OwEvrKqcup549jqQoOsZYUqYrb9Ylxyqg%2FGdy44CciDKMn5h1Fy7GWv86N3IH6JjlQ3LUwZNyJtiz1yo6Q5dHgiT6VAeVFwDyVf%2Fz3rznWWs0xOyuKwtSi0rgbAa730rhm92SwY9%2FUarmM6Cka0d9O7yjSmAcpwips1BNumnucvkGXRlnlqofxkE9WBho4LvxdaqMxzP9D07EjPwkEWPT1Ai%2BGYz0CZUjool94yUS%2B4qD8%2FT%2BeYhg9TG2Hd5ZgY%2FYRyuh0U6T6PbF%2Bo9QksMiizeGEyzaUvGbF00ptpJbrqhD3JyONlymEnhuHyHUWponu4O2b6ljJEH%2BdyyZLMcZjyuDMMOyKuMQGOqUB7SoTWJW9RSlSXHT0CZr8ZX63BFkeSy0tB2VjwVYTr5xhLsOfJed0Ib2g6h7qBiGsvQwGhAmpnfMokvZ4YyYYrteKux5SKLwRoRM3nz8f5VffQco7k%2FMErZa19UbyGzEWemegtvqNLhXfa2GxH72wiSJ6HTHwNPOq%2BdtePVdnJpGf8t6%2FXDHluPzcbECDARMUYz2OtfBNXL1nMKH9UghMZzBwuXbX&X-Amz-Signature=dae93795c061ae9fa99292528e218920b9ececb6ef5d61f1c1ecca54cd658a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GGF5AKT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvctfj4mR6VsK7%2F9JnmJw31Y%2F%2Fg1%2BLNuIerjtA9g8MmAiEAnHkFQ4ruMMnT%2FDQ76u9Zq9%2Fo%2F6vPLSrgFgavq8DChzAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDI5YZUW1Zdto6qY8dyrcA%2FZEWHLLPe8aLsuvdFhO10WwenOyBwTOlKz5ZNC%2FFot%2FrmW%2FpFv643lxnSyLSZ%2B7YjbYCJmkO85zJ6qfTDIoXvq%2Bt1brQ399tmtNKQVIabIGh1xpoguhQQfaZK5dJdXrsCqQY0PanWQ2ZKGqZk8wgxw4BwnDy411UaCKwcmT2BqFHZAbZCCR2vqnFvtKUhzicv7rx164bmlow02fHPKjeZZpQLgS9eRPju5qA56D3KMBqsPOP%2FMaHuoo2AWubAAF6xX8GL2t4Rw76TyA%2FrZC%2FjkuvMy5M%2FjcY2OwEvrKqcup549jqQoOsZYUqYrb9Ylxyqg%2FGdy44CciDKMn5h1Fy7GWv86N3IH6JjlQ3LUwZNyJtiz1yo6Q5dHgiT6VAeVFwDyVf%2Fz3rznWWs0xOyuKwtSi0rgbAa730rhm92SwY9%2FUarmM6Cka0d9O7yjSmAcpwips1BNumnucvkGXRlnlqofxkE9WBho4LvxdaqMxzP9D07EjPwkEWPT1Ai%2BGYz0CZUjool94yUS%2B4qD8%2FT%2BeYhg9TG2Hd5ZgY%2FYRyuh0U6T6PbF%2Bo9QksMiizeGEyzaUvGbF00ptpJbrqhD3JyONlymEnhuHyHUWponu4O2b6ljJEH%2BdyyZLMcZjyuDMMOyKuMQGOqUB7SoTWJW9RSlSXHT0CZr8ZX63BFkeSy0tB2VjwVYTr5xhLsOfJed0Ib2g6h7qBiGsvQwGhAmpnfMokvZ4YyYYrteKux5SKLwRoRM3nz8f5VffQco7k%2FMErZa19UbyGzEWemegtvqNLhXfa2GxH72wiSJ6HTHwNPOq%2BdtePVdnJpGf8t6%2FXDHluPzcbECDARMUYz2OtfBNXL1nMKH9UghMZzBwuXbX&X-Amz-Signature=ffe4370de8c2fedf7e073f1604a3a5e5e746a25e854ad70277b3d012b6c00e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GGF5AKT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvctfj4mR6VsK7%2F9JnmJw31Y%2F%2Fg1%2BLNuIerjtA9g8MmAiEAnHkFQ4ruMMnT%2FDQ76u9Zq9%2Fo%2F6vPLSrgFgavq8DChzAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDI5YZUW1Zdto6qY8dyrcA%2FZEWHLLPe8aLsuvdFhO10WwenOyBwTOlKz5ZNC%2FFot%2FrmW%2FpFv643lxnSyLSZ%2B7YjbYCJmkO85zJ6qfTDIoXvq%2Bt1brQ399tmtNKQVIabIGh1xpoguhQQfaZK5dJdXrsCqQY0PanWQ2ZKGqZk8wgxw4BwnDy411UaCKwcmT2BqFHZAbZCCR2vqnFvtKUhzicv7rx164bmlow02fHPKjeZZpQLgS9eRPju5qA56D3KMBqsPOP%2FMaHuoo2AWubAAF6xX8GL2t4Rw76TyA%2FrZC%2FjkuvMy5M%2FjcY2OwEvrKqcup549jqQoOsZYUqYrb9Ylxyqg%2FGdy44CciDKMn5h1Fy7GWv86N3IH6JjlQ3LUwZNyJtiz1yo6Q5dHgiT6VAeVFwDyVf%2Fz3rznWWs0xOyuKwtSi0rgbAa730rhm92SwY9%2FUarmM6Cka0d9O7yjSmAcpwips1BNumnucvkGXRlnlqofxkE9WBho4LvxdaqMxzP9D07EjPwkEWPT1Ai%2BGYz0CZUjool94yUS%2B4qD8%2FT%2BeYhg9TG2Hd5ZgY%2FYRyuh0U6T6PbF%2Bo9QksMiizeGEyzaUvGbF00ptpJbrqhD3JyONlymEnhuHyHUWponu4O2b6ljJEH%2BdyyZLMcZjyuDMMOyKuMQGOqUB7SoTWJW9RSlSXHT0CZr8ZX63BFkeSy0tB2VjwVYTr5xhLsOfJed0Ib2g6h7qBiGsvQwGhAmpnfMokvZ4YyYYrteKux5SKLwRoRM3nz8f5VffQco7k%2FMErZa19UbyGzEWemegtvqNLhXfa2GxH72wiSJ6HTHwNPOq%2BdtePVdnJpGf8t6%2FXDHluPzcbECDARMUYz2OtfBNXL1nMKH9UghMZzBwuXbX&X-Amz-Signature=fb17fd92cdd76c036b8695abeac43f941f73b99b2d1584726a06c835113dc495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
