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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2GOP2K%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0VlKZpuOebV0p970YWnNNTw%2BCjAVg8tJ%2B5hRm4R7utAiEA2DVr6CyZPDCG34kiYOh9DgJ5UDYFfGTlVkjAtDrwqLoqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQli0g%2F%2FE%2FidG5sYircA%2FDwrkn9eOSD617s1iztDQwRVuwYLWvXQsch57Qc5Lo9AgAA0nFzm6UP8jB7fmiqnf97uUx2zkzfWFngLR%2FeAhjJ00cHPeSZrQuoiqiRSkHEBGW7PdSWRsdtSNYWaUUeVWO3iU6iJNs8rQegAaei6lAK%2F%2BCq1l0VjKG4eSR41a39qauNy7f62o1y0sxMod8ku0xhKdD1C6N7HF24FLJo0b4vOQvwrfETV2a7tuMdHxOa2813YSv5XjgqXgNQ%2Byw5YKhsaE%2F8QdRoMh7oapRHTfIaeh3DOJ1tEnowQzasxV3JtJeJ0BKcd%2FUsZxwHNzBPtsLrgIyLLb2jzK4KWJtLgMRoipJRRqBfJPUrYHVsTBqzJVQXJJ6Y1ptCKa%2BC2uZXovjILxLAGBTYTcK3Ue2qxtVGzzMfXfclZbypP0%2FcCt%2FgwL8chvabrKhZYpe9LPq2vkn0d1gZ8uQwrEDEiIa4FMYGMBp7Hj5u18JF5XwhIAM0rUCiBsR9Dt4BaVb%2B2hXkFuGQrIpo2sHYx14%2BeufAPtYD87G2BdYvay3WlZVtoxKsjkncqz33MJqwI7otf7VCXriIhuMLulkW0yu5JLbLB23tgIcyWMHHnstFi5kjwvMcqz77CDMjzLU8DIhRMObv98AGOqUBHKZaozV5WFAwMImay8bTIcSYgC8DCe1sZ%2FzXmm%2FFePFLRIIgRmYxKE%2FYHdVbBArE7Idd8QSzhbs11DK9n307tOtr6H8HtzqVi3v%2FwpUmrLcrz7G8d866kPDapSE1xiTv2zpm2wh%2B4YR4cAm3N2bv3rHAeXW35rXVFJ6ZIbs9foxnsgiykajD8rv6158zyajiU5Y4wkmoF7fkbVm3s3%2Ffgg4Y99ZI&X-Amz-Signature=ee5ad0b53b3c1bf30ad3853d3a2939b205f1dfd260e28ffbcecfaeec978058b2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2GOP2K%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0VlKZpuOebV0p970YWnNNTw%2BCjAVg8tJ%2B5hRm4R7utAiEA2DVr6CyZPDCG34kiYOh9DgJ5UDYFfGTlVkjAtDrwqLoqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQli0g%2F%2FE%2FidG5sYircA%2FDwrkn9eOSD617s1iztDQwRVuwYLWvXQsch57Qc5Lo9AgAA0nFzm6UP8jB7fmiqnf97uUx2zkzfWFngLR%2FeAhjJ00cHPeSZrQuoiqiRSkHEBGW7PdSWRsdtSNYWaUUeVWO3iU6iJNs8rQegAaei6lAK%2F%2BCq1l0VjKG4eSR41a39qauNy7f62o1y0sxMod8ku0xhKdD1C6N7HF24FLJo0b4vOQvwrfETV2a7tuMdHxOa2813YSv5XjgqXgNQ%2Byw5YKhsaE%2F8QdRoMh7oapRHTfIaeh3DOJ1tEnowQzasxV3JtJeJ0BKcd%2FUsZxwHNzBPtsLrgIyLLb2jzK4KWJtLgMRoipJRRqBfJPUrYHVsTBqzJVQXJJ6Y1ptCKa%2BC2uZXovjILxLAGBTYTcK3Ue2qxtVGzzMfXfclZbypP0%2FcCt%2FgwL8chvabrKhZYpe9LPq2vkn0d1gZ8uQwrEDEiIa4FMYGMBp7Hj5u18JF5XwhIAM0rUCiBsR9Dt4BaVb%2B2hXkFuGQrIpo2sHYx14%2BeufAPtYD87G2BdYvay3WlZVtoxKsjkncqz33MJqwI7otf7VCXriIhuMLulkW0yu5JLbLB23tgIcyWMHHnstFi5kjwvMcqz77CDMjzLU8DIhRMObv98AGOqUBHKZaozV5WFAwMImay8bTIcSYgC8DCe1sZ%2FzXmm%2FFePFLRIIgRmYxKE%2FYHdVbBArE7Idd8QSzhbs11DK9n307tOtr6H8HtzqVi3v%2FwpUmrLcrz7G8d866kPDapSE1xiTv2zpm2wh%2B4YR4cAm3N2bv3rHAeXW35rXVFJ6ZIbs9foxnsgiykajD8rv6158zyajiU5Y4wkmoF7fkbVm3s3%2Ffgg4Y99ZI&X-Amz-Signature=b4f2f74f50ec5c74b467eff9636880df3ce5563132bd9d29acf2626bc8d39272&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT2GOP2K%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0VlKZpuOebV0p970YWnNNTw%2BCjAVg8tJ%2B5hRm4R7utAiEA2DVr6CyZPDCG34kiYOh9DgJ5UDYFfGTlVkjAtDrwqLoqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQli0g%2F%2FE%2FidG5sYircA%2FDwrkn9eOSD617s1iztDQwRVuwYLWvXQsch57Qc5Lo9AgAA0nFzm6UP8jB7fmiqnf97uUx2zkzfWFngLR%2FeAhjJ00cHPeSZrQuoiqiRSkHEBGW7PdSWRsdtSNYWaUUeVWO3iU6iJNs8rQegAaei6lAK%2F%2BCq1l0VjKG4eSR41a39qauNy7f62o1y0sxMod8ku0xhKdD1C6N7HF24FLJo0b4vOQvwrfETV2a7tuMdHxOa2813YSv5XjgqXgNQ%2Byw5YKhsaE%2F8QdRoMh7oapRHTfIaeh3DOJ1tEnowQzasxV3JtJeJ0BKcd%2FUsZxwHNzBPtsLrgIyLLb2jzK4KWJtLgMRoipJRRqBfJPUrYHVsTBqzJVQXJJ6Y1ptCKa%2BC2uZXovjILxLAGBTYTcK3Ue2qxtVGzzMfXfclZbypP0%2FcCt%2FgwL8chvabrKhZYpe9LPq2vkn0d1gZ8uQwrEDEiIa4FMYGMBp7Hj5u18JF5XwhIAM0rUCiBsR9Dt4BaVb%2B2hXkFuGQrIpo2sHYx14%2BeufAPtYD87G2BdYvay3WlZVtoxKsjkncqz33MJqwI7otf7VCXriIhuMLulkW0yu5JLbLB23tgIcyWMHHnstFi5kjwvMcqz77CDMjzLU8DIhRMObv98AGOqUBHKZaozV5WFAwMImay8bTIcSYgC8DCe1sZ%2FzXmm%2FFePFLRIIgRmYxKE%2FYHdVbBArE7Idd8QSzhbs11DK9n307tOtr6H8HtzqVi3v%2FwpUmrLcrz7G8d866kPDapSE1xiTv2zpm2wh%2B4YR4cAm3N2bv3rHAeXW35rXVFJ6ZIbs9foxnsgiykajD8rv6158zyajiU5Y4wkmoF7fkbVm3s3%2Ffgg4Y99ZI&X-Amz-Signature=2a2381b8b1bea6f6c937a6f5ba82a520bccb0fa31fdb5d2513c2cd20a05a90b9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
