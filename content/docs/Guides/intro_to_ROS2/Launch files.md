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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YTDPQLR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUQmdRwlHAX5fesRXCTXwjgkNYzamEj%2FY35%2B8KFEF3LAIhAK%2FqUi26fXJscMk%2FpEB7rMP4rApFZJu7gXBWfZrhOXYAKv8DCEcQABoMNjM3NDIzMTgzODA1IgzJp74AeHYfaiguKPwq3ANFUteSvB%2FtIoX%2BDnF6jvK4M6TPzhWIuUgHyAP8S4BM35pgIG9qfRSBlFRw%2FmnnBKkEnRG7gzfhuS4nUMWCQMpx%2BG6RSARUXyerRZT1uWh5QaxEiKH8XX1Rg1pEVOnjKx9bxZRiH4vjyU4pDD7w4OTzAIVifVydhRO%2FP5tmO9wNBKkukaZcq7yELye7RGd3msHxHapxHHgjYu9OcXBGyz8%2FfKsOYOx%2BhYtFRG8DsvvAYNzOcjWpPJJ%2FyOPKaj43XAZqIyh%2F1FzfPStf0Jxy%2FsGzk%2BoHSpEnuRi%2FtKe%2FIgGcLzsKirm7RVrPYm7%2FXODCtxocxVMox64H1VzJKWgLP9gurXQrDyCzrY3GTsQpuzs2%2BhQbQmvabf6Q2Xjurl9Utz1Q4fbnMNQINiCdr506iP2hEpOy4J3bRB7wkpUe7I2yGWkWOXC2kUUFk8gPkl2ORJlzdT8FMlhx%2F0FM6CCvuNK2ttkiWNkeO6Tioh4W%2Fd04g%2F9LjzbymyeD2VD71QacYoBRtiDD%2FHkOnGZcuqD9Mgo%2B3MWohhShEtILSwdpm5rdnOqmCUT1valE6YrdIJi4I9j91%2FDxnhMi9PW04pLFLyGBcRSP%2B%2FEt7En7%2FfLCleQWEVAakCCzMPps9U%2F6rzCwyuC%2BBjqkAe%2BjaHyuiXDHl8Q%2BJQE4C2HFqnxGRbPpYTidsDTjzVHHNhRDY1ywcCvfp6L9Gs0i1gFNC7wrQTTWnZJeYOQsp9cMjk%2BT0t38KBnCl9Jsi912MOXjirRgMPP7kDj1CbXBLBfgLoCONENIUj9Ga1Bt5WfS%2B0DglD7Yv1%2BblTCMJEZ5SgLfeb2c%2FgVhZFWaCxKIxxx15%2BFmdIhz%2BvrHwVlvvSP63W5U&X-Amz-Signature=7ff613f6e59ba64360f46786a78000de891ba1555bac1fbbb1947c655382b4bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YTDPQLR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUQmdRwlHAX5fesRXCTXwjgkNYzamEj%2FY35%2B8KFEF3LAIhAK%2FqUi26fXJscMk%2FpEB7rMP4rApFZJu7gXBWfZrhOXYAKv8DCEcQABoMNjM3NDIzMTgzODA1IgzJp74AeHYfaiguKPwq3ANFUteSvB%2FtIoX%2BDnF6jvK4M6TPzhWIuUgHyAP8S4BM35pgIG9qfRSBlFRw%2FmnnBKkEnRG7gzfhuS4nUMWCQMpx%2BG6RSARUXyerRZT1uWh5QaxEiKH8XX1Rg1pEVOnjKx9bxZRiH4vjyU4pDD7w4OTzAIVifVydhRO%2FP5tmO9wNBKkukaZcq7yELye7RGd3msHxHapxHHgjYu9OcXBGyz8%2FfKsOYOx%2BhYtFRG8DsvvAYNzOcjWpPJJ%2FyOPKaj43XAZqIyh%2F1FzfPStf0Jxy%2FsGzk%2BoHSpEnuRi%2FtKe%2FIgGcLzsKirm7RVrPYm7%2FXODCtxocxVMox64H1VzJKWgLP9gurXQrDyCzrY3GTsQpuzs2%2BhQbQmvabf6Q2Xjurl9Utz1Q4fbnMNQINiCdr506iP2hEpOy4J3bRB7wkpUe7I2yGWkWOXC2kUUFk8gPkl2ORJlzdT8FMlhx%2F0FM6CCvuNK2ttkiWNkeO6Tioh4W%2Fd04g%2F9LjzbymyeD2VD71QacYoBRtiDD%2FHkOnGZcuqD9Mgo%2B3MWohhShEtILSwdpm5rdnOqmCUT1valE6YrdIJi4I9j91%2FDxnhMi9PW04pLFLyGBcRSP%2B%2FEt7En7%2FfLCleQWEVAakCCzMPps9U%2F6rzCwyuC%2BBjqkAe%2BjaHyuiXDHl8Q%2BJQE4C2HFqnxGRbPpYTidsDTjzVHHNhRDY1ywcCvfp6L9Gs0i1gFNC7wrQTTWnZJeYOQsp9cMjk%2BT0t38KBnCl9Jsi912MOXjirRgMPP7kDj1CbXBLBfgLoCONENIUj9Ga1Bt5WfS%2B0DglD7Yv1%2BblTCMJEZ5SgLfeb2c%2FgVhZFWaCxKIxxx15%2BFmdIhz%2BvrHwVlvvSP63W5U&X-Amz-Signature=a1193227079e637aa5319d133bda5c33a1b17843a017e6e09a784f7a2e1cf3bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YTDPQLR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUQmdRwlHAX5fesRXCTXwjgkNYzamEj%2FY35%2B8KFEF3LAIhAK%2FqUi26fXJscMk%2FpEB7rMP4rApFZJu7gXBWfZrhOXYAKv8DCEcQABoMNjM3NDIzMTgzODA1IgzJp74AeHYfaiguKPwq3ANFUteSvB%2FtIoX%2BDnF6jvK4M6TPzhWIuUgHyAP8S4BM35pgIG9qfRSBlFRw%2FmnnBKkEnRG7gzfhuS4nUMWCQMpx%2BG6RSARUXyerRZT1uWh5QaxEiKH8XX1Rg1pEVOnjKx9bxZRiH4vjyU4pDD7w4OTzAIVifVydhRO%2FP5tmO9wNBKkukaZcq7yELye7RGd3msHxHapxHHgjYu9OcXBGyz8%2FfKsOYOx%2BhYtFRG8DsvvAYNzOcjWpPJJ%2FyOPKaj43XAZqIyh%2F1FzfPStf0Jxy%2FsGzk%2BoHSpEnuRi%2FtKe%2FIgGcLzsKirm7RVrPYm7%2FXODCtxocxVMox64H1VzJKWgLP9gurXQrDyCzrY3GTsQpuzs2%2BhQbQmvabf6Q2Xjurl9Utz1Q4fbnMNQINiCdr506iP2hEpOy4J3bRB7wkpUe7I2yGWkWOXC2kUUFk8gPkl2ORJlzdT8FMlhx%2F0FM6CCvuNK2ttkiWNkeO6Tioh4W%2Fd04g%2F9LjzbymyeD2VD71QacYoBRtiDD%2FHkOnGZcuqD9Mgo%2B3MWohhShEtILSwdpm5rdnOqmCUT1valE6YrdIJi4I9j91%2FDxnhMi9PW04pLFLyGBcRSP%2B%2FEt7En7%2FfLCleQWEVAakCCzMPps9U%2F6rzCwyuC%2BBjqkAe%2BjaHyuiXDHl8Q%2BJQE4C2HFqnxGRbPpYTidsDTjzVHHNhRDY1ywcCvfp6L9Gs0i1gFNC7wrQTTWnZJeYOQsp9cMjk%2BT0t38KBnCl9Jsi912MOXjirRgMPP7kDj1CbXBLBfgLoCONENIUj9Ga1Bt5WfS%2B0DglD7Yv1%2BblTCMJEZ5SgLfeb2c%2FgVhZFWaCxKIxxx15%2BFmdIhz%2BvrHwVlvvSP63W5U&X-Amz-Signature=76f5d60bbe3011a622d3982a10571ad88793793c4373a3cb14892f5d2272c111&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
