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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627SICLUA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQC5h56ivm9HURvOsiICnP0CZmmEM2%2FbbPiMSS3FPmEsMAIgID473OYlSUSNCCLxuCHL7XdO6%2BUogJ73OjG7F0XjR%2BMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKl3DMCO9nPfRGNqdSrcAzj%2BkuCotNtwwBT5Xzu6%2BZfxetf8f4%2BYNFlYA0bwO2yrd0ZVCsnYGn3xdKsDv61TMIRsVgWBuInfZ8zv0rVVs%2BFonJ5Fl0LOtS4j0H8DPWpvdy0qfolYMziJMgU4Bd9R4iaRfN%2FpfdaHplJ2N5X7gJuTM%2Bj6aCpb%2F3Zt7YsVBlYBhbyEG7sxlKmL10GIx6KK63FXFn7xhJLQEYrFJvKX%2FQJxvMflqErUVZ3tEJ1%2FyWREYAiprEHMJ1Z5lrs%2BMgPWqeyy1OEWj3szS4F2ZMcRlhMx7Rhe%2FSyxEu%2BFIhJ0JyShmQ7o8JZ0iRREa5SHoslZ%2BHIp%2BtJUQe1JDq6tplLrLlBkg3KbsvBKVnr%2F%2BQhA0ha%2FYRFBlf5lPjToYEulVvyBIf5DY2Jnv6uJyJVdA4vqi%2FMTmlAUFuw5oglb05eZMEQjxBzqQVq9sk4cDzA6iRMn6yzD%2BAb%2BLtZVCod%2BHQc9V%2FqPqtf%2FJEhX7k0m0x0GdAvzz5gZLwUWgkv4KQncdY1izk2rHD9pQFlqD9zdUAoBvllJBmXu2kH3fLTCoR2yoqtxPpu65ZFsqW%2FS%2FxWloiIBdUJLnsxaM7mF9X9Wt63iClbMR7EkguYtYdJ44ig9kFf6rCEWzKbpTc%2FBLOmZMIHx7sEGOqUBVbJdoDqy06Y%2Bh2TA3VLPAbrl%2FfAmil%2BuO62FNBeKd76x7wg%2BnGSulh4efgaT%2B774opI50PDlxfiNM7aU804yFmXzxaEsTuvNNdc7u2w5KtC5f0T%2F%2FDZT21OvcgU5wmwtbm10b1rYqdMpUtmzvkWOGQ3i2K3s2LJT5UjE08bUkH1RYJDyfDE08D2oP3V3okelVNK3kYDeh6kEfjAghg%2FWJ%2FlBlwNv&X-Amz-Signature=91c6e6b818ede4d7e0899873974f8685876ba3a57b859a940f12f15a0635b244&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627SICLUA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQC5h56ivm9HURvOsiICnP0CZmmEM2%2FbbPiMSS3FPmEsMAIgID473OYlSUSNCCLxuCHL7XdO6%2BUogJ73OjG7F0XjR%2BMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKl3DMCO9nPfRGNqdSrcAzj%2BkuCotNtwwBT5Xzu6%2BZfxetf8f4%2BYNFlYA0bwO2yrd0ZVCsnYGn3xdKsDv61TMIRsVgWBuInfZ8zv0rVVs%2BFonJ5Fl0LOtS4j0H8DPWpvdy0qfolYMziJMgU4Bd9R4iaRfN%2FpfdaHplJ2N5X7gJuTM%2Bj6aCpb%2F3Zt7YsVBlYBhbyEG7sxlKmL10GIx6KK63FXFn7xhJLQEYrFJvKX%2FQJxvMflqErUVZ3tEJ1%2FyWREYAiprEHMJ1Z5lrs%2BMgPWqeyy1OEWj3szS4F2ZMcRlhMx7Rhe%2FSyxEu%2BFIhJ0JyShmQ7o8JZ0iRREa5SHoslZ%2BHIp%2BtJUQe1JDq6tplLrLlBkg3KbsvBKVnr%2F%2BQhA0ha%2FYRFBlf5lPjToYEulVvyBIf5DY2Jnv6uJyJVdA4vqi%2FMTmlAUFuw5oglb05eZMEQjxBzqQVq9sk4cDzA6iRMn6yzD%2BAb%2BLtZVCod%2BHQc9V%2FqPqtf%2FJEhX7k0m0x0GdAvzz5gZLwUWgkv4KQncdY1izk2rHD9pQFlqD9zdUAoBvllJBmXu2kH3fLTCoR2yoqtxPpu65ZFsqW%2FS%2FxWloiIBdUJLnsxaM7mF9X9Wt63iClbMR7EkguYtYdJ44ig9kFf6rCEWzKbpTc%2FBLOmZMIHx7sEGOqUBVbJdoDqy06Y%2Bh2TA3VLPAbrl%2FfAmil%2BuO62FNBeKd76x7wg%2BnGSulh4efgaT%2B774opI50PDlxfiNM7aU804yFmXzxaEsTuvNNdc7u2w5KtC5f0T%2F%2FDZT21OvcgU5wmwtbm10b1rYqdMpUtmzvkWOGQ3i2K3s2LJT5UjE08bUkH1RYJDyfDE08D2oP3V3okelVNK3kYDeh6kEfjAghg%2FWJ%2FlBlwNv&X-Amz-Signature=076b6ebaaf04937289863a5bad51baa2011953bdf64a3f093ae292585c49a899&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627SICLUA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQC5h56ivm9HURvOsiICnP0CZmmEM2%2FbbPiMSS3FPmEsMAIgID473OYlSUSNCCLxuCHL7XdO6%2BUogJ73OjG7F0XjR%2BMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKl3DMCO9nPfRGNqdSrcAzj%2BkuCotNtwwBT5Xzu6%2BZfxetf8f4%2BYNFlYA0bwO2yrd0ZVCsnYGn3xdKsDv61TMIRsVgWBuInfZ8zv0rVVs%2BFonJ5Fl0LOtS4j0H8DPWpvdy0qfolYMziJMgU4Bd9R4iaRfN%2FpfdaHplJ2N5X7gJuTM%2Bj6aCpb%2F3Zt7YsVBlYBhbyEG7sxlKmL10GIx6KK63FXFn7xhJLQEYrFJvKX%2FQJxvMflqErUVZ3tEJ1%2FyWREYAiprEHMJ1Z5lrs%2BMgPWqeyy1OEWj3szS4F2ZMcRlhMx7Rhe%2FSyxEu%2BFIhJ0JyShmQ7o8JZ0iRREa5SHoslZ%2BHIp%2BtJUQe1JDq6tplLrLlBkg3KbsvBKVnr%2F%2BQhA0ha%2FYRFBlf5lPjToYEulVvyBIf5DY2Jnv6uJyJVdA4vqi%2FMTmlAUFuw5oglb05eZMEQjxBzqQVq9sk4cDzA6iRMn6yzD%2BAb%2BLtZVCod%2BHQc9V%2FqPqtf%2FJEhX7k0m0x0GdAvzz5gZLwUWgkv4KQncdY1izk2rHD9pQFlqD9zdUAoBvllJBmXu2kH3fLTCoR2yoqtxPpu65ZFsqW%2FS%2FxWloiIBdUJLnsxaM7mF9X9Wt63iClbMR7EkguYtYdJ44ig9kFf6rCEWzKbpTc%2FBLOmZMIHx7sEGOqUBVbJdoDqy06Y%2Bh2TA3VLPAbrl%2FfAmil%2BuO62FNBeKd76x7wg%2BnGSulh4efgaT%2B774opI50PDlxfiNM7aU804yFmXzxaEsTuvNNdc7u2w5KtC5f0T%2F%2FDZT21OvcgU5wmwtbm10b1rYqdMpUtmzvkWOGQ3i2K3s2LJT5UjE08bUkH1RYJDyfDE08D2oP3V3okelVNK3kYDeh6kEfjAghg%2FWJ%2FlBlwNv&X-Amz-Signature=5cdb69d57201c2655c261a3cf139ece24059ce4af14a653c7aeda91b9e0f24ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
