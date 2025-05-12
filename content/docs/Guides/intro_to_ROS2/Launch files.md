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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSTMSYT%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCMWEjOdX2c5V9vnHUeCtn0tKrr%2B67gD3wEy8S9l0s7ggIgI%2BCFxw6AkyOIGzLupOtqtWtuYGL75%2BXikRd2Z0bN%2BBIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrRqM8xY71CmDiv0yrcA5po%2BqzG8FcGsU8qnhIj02Qlhv4JMaY1adNYC6Hi%2BAlxmW3%2F9M611HHsI4f0QD7tklPbieeH0F1OQAwXntFxQ98aeLdWwQ7wqq6k6GeUVLch97w8nY7jPu2lKWXPDMXbvgOU3AybNzky73GR6vBVFAcKSUjnFJEeROjSSSpo0gmZkAm0isaVDMwI0rHXh0fBE%2BOCEgq%2FXtTBfNIzBOtaE5ig2Xx3vb5d1p4WHSa6ONYoeWBIOPZb8OuTzYPN6T8Lh%2FrkShRqz3Jl15tAuu3ye68TyPiQ%2BnpL4mGggGUuNSvJtYI0CKIhzEXbUAWToVatbOBi94IMPbdaKUwknCoCzbTV6oQyCkLYpEmGtfDl4oopmOQEBKy9FsuacIwjKoKNWcp0UPb3193FYjW9pSJxQyG%2B1%2FVMgXIpyleOuWzVOprBnExcKu6l1P2XJYikqd8DZen8tduykWseYAyLJZdAJrVLYbbQ6IYWwY75zKqLNFUt7yElH2XvpzRK3C5TAewDyrnSqf3HyKBltm0DguzmnP%2FnZcO0lC7dlNybuokzKXd3M%2FTX68gbnfv9n5Ou%2BrXpG6iZm896%2FJcwBv71ja0ywCM8rOao898h9kWvoxnU9F0j5dSrFmOOGboxrp67MKaEhsEGOqUB1Yp8Ia%2BE4XPGwsOcjPqhajkYaGV8Nc%2F40J4Nygj1DGFW%2FyXemUAeVdFY99GnqFjwAfRY6RdZhnX3mNGkjHE0Avdj0EUhKu8QyPicWoX5o8GjDO80yFf1b%2BgJV%2F61LlULRXxNVFN%2BHrjP373ED5S8BRMkIrLX902IGyfMIlh9s35HC0E8JhN0TuXMgxQG46mtnpTQkWryFZGHeP5fUzHefpy7E24o&X-Amz-Signature=24153899847d89c5cbd6b1e098e28562e9c1233d8e18f813fa5b731456963e0f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSTMSYT%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCMWEjOdX2c5V9vnHUeCtn0tKrr%2B67gD3wEy8S9l0s7ggIgI%2BCFxw6AkyOIGzLupOtqtWtuYGL75%2BXikRd2Z0bN%2BBIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrRqM8xY71CmDiv0yrcA5po%2BqzG8FcGsU8qnhIj02Qlhv4JMaY1adNYC6Hi%2BAlxmW3%2F9M611HHsI4f0QD7tklPbieeH0F1OQAwXntFxQ98aeLdWwQ7wqq6k6GeUVLch97w8nY7jPu2lKWXPDMXbvgOU3AybNzky73GR6vBVFAcKSUjnFJEeROjSSSpo0gmZkAm0isaVDMwI0rHXh0fBE%2BOCEgq%2FXtTBfNIzBOtaE5ig2Xx3vb5d1p4WHSa6ONYoeWBIOPZb8OuTzYPN6T8Lh%2FrkShRqz3Jl15tAuu3ye68TyPiQ%2BnpL4mGggGUuNSvJtYI0CKIhzEXbUAWToVatbOBi94IMPbdaKUwknCoCzbTV6oQyCkLYpEmGtfDl4oopmOQEBKy9FsuacIwjKoKNWcp0UPb3193FYjW9pSJxQyG%2B1%2FVMgXIpyleOuWzVOprBnExcKu6l1P2XJYikqd8DZen8tduykWseYAyLJZdAJrVLYbbQ6IYWwY75zKqLNFUt7yElH2XvpzRK3C5TAewDyrnSqf3HyKBltm0DguzmnP%2FnZcO0lC7dlNybuokzKXd3M%2FTX68gbnfv9n5Ou%2BrXpG6iZm896%2FJcwBv71ja0ywCM8rOao898h9kWvoxnU9F0j5dSrFmOOGboxrp67MKaEhsEGOqUB1Yp8Ia%2BE4XPGwsOcjPqhajkYaGV8Nc%2F40J4Nygj1DGFW%2FyXemUAeVdFY99GnqFjwAfRY6RdZhnX3mNGkjHE0Avdj0EUhKu8QyPicWoX5o8GjDO80yFf1b%2BgJV%2F61LlULRXxNVFN%2BHrjP373ED5S8BRMkIrLX902IGyfMIlh9s35HC0E8JhN0TuXMgxQG46mtnpTQkWryFZGHeP5fUzHefpy7E24o&X-Amz-Signature=47c72fe51fdc3d6bf3a6f0d3bf8d4568f88620b10c3ba05e26999f083867a306&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSTMSYT%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCMWEjOdX2c5V9vnHUeCtn0tKrr%2B67gD3wEy8S9l0s7ggIgI%2BCFxw6AkyOIGzLupOtqtWtuYGL75%2BXikRd2Z0bN%2BBIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrRqM8xY71CmDiv0yrcA5po%2BqzG8FcGsU8qnhIj02Qlhv4JMaY1adNYC6Hi%2BAlxmW3%2F9M611HHsI4f0QD7tklPbieeH0F1OQAwXntFxQ98aeLdWwQ7wqq6k6GeUVLch97w8nY7jPu2lKWXPDMXbvgOU3AybNzky73GR6vBVFAcKSUjnFJEeROjSSSpo0gmZkAm0isaVDMwI0rHXh0fBE%2BOCEgq%2FXtTBfNIzBOtaE5ig2Xx3vb5d1p4WHSa6ONYoeWBIOPZb8OuTzYPN6T8Lh%2FrkShRqz3Jl15tAuu3ye68TyPiQ%2BnpL4mGggGUuNSvJtYI0CKIhzEXbUAWToVatbOBi94IMPbdaKUwknCoCzbTV6oQyCkLYpEmGtfDl4oopmOQEBKy9FsuacIwjKoKNWcp0UPb3193FYjW9pSJxQyG%2B1%2FVMgXIpyleOuWzVOprBnExcKu6l1P2XJYikqd8DZen8tduykWseYAyLJZdAJrVLYbbQ6IYWwY75zKqLNFUt7yElH2XvpzRK3C5TAewDyrnSqf3HyKBltm0DguzmnP%2FnZcO0lC7dlNybuokzKXd3M%2FTX68gbnfv9n5Ou%2BrXpG6iZm896%2FJcwBv71ja0ywCM8rOao898h9kWvoxnU9F0j5dSrFmOOGboxrp67MKaEhsEGOqUB1Yp8Ia%2BE4XPGwsOcjPqhajkYaGV8Nc%2F40J4Nygj1DGFW%2FyXemUAeVdFY99GnqFjwAfRY6RdZhnX3mNGkjHE0Avdj0EUhKu8QyPicWoX5o8GjDO80yFf1b%2BgJV%2F61LlULRXxNVFN%2BHrjP373ED5S8BRMkIrLX902IGyfMIlh9s35HC0E8JhN0TuXMgxQG46mtnpTQkWryFZGHeP5fUzHefpy7E24o&X-Amz-Signature=f479c61f268cbbdb15f8ca5920c6b687e555f1d0a76646fffd483a9be7eadd1f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
