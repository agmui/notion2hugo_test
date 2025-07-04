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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZKUNTYT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDsL2X8H4%2FHn2cybQV9U7U9DFGvPj4hzbJFJCzGFz%2BNQAIhAKxW59hciTv52tmAph2fTlWpYpFSy9GYBIOuNyO7TrfzKv8DCCEQABoMNjM3NDIzMTgzODA1Igz2jXrZT2bhFoi7gmAq3APPJ6K9okRNeP2V%2BLMbEnSLJVaSFdWr2y9YTObjQplZfrFxXh64NBkC60ul8GUwX%2FjtWdmnOEYVQcUjZU%2BL4SvOANonxmOqh7BAX%2B5Azp9aVgMlLjVPZjGPH5ED0oWeBifJ%2B0Jc7xA98lTairgS9sYgFd3KMmXHEITTKYB9785OqfW59aYt1lhOqIVX6EkEXQ0d7TB0Yv1eNW8A%2BZeuyE6A%2BReQGtEtz0kRC0Wwr0OVPN0%2FJv9zzT6%2BX%2BhGp5p8i5Duv719rUHuGqjXg4lzU7hYr2vp4fNPG6TJ5jhhTaX0Ng2iIvBow6lgbvLGLoYQK2m7kBZriitZ0W7n5oUzMDQkEDcxA9EHHWtfI7xSiIKLG%2BuOUU%2B6ZLE%2FczQY5S9z05cIaRL1Vt%2Fh6hJamTIV9SSrMICtq6CnSVF5aBSo6KkPKR34gQw5kv7hwp0wS5whBG9p5duepYn%2F5TaouqDksA1MprKQ75x%2FjBlMcaT%2Buss9UYeghcvZ0Hwrg7Ev3cT5ZqDpasubuNzE5bTBwc0AAJsD0AlPmZCuA6XXrjoiXKxuYJM%2FCehqF3ax0%2BfWObi%2B%2FlWlmnan3k%2FRIK%2BJzyWFrBIUyz3nnhQpQfvSv29qwwYduEs4Iao5hjn4z2Y9CjDDt5zDBjqkAbbkZIl3ZBpBBJRBYGTiptXLG6TBMTB1Y%2FOqscmN%2FMxBfpMY1T9BQDD6mV%2FtnCNVmIvoPmk4QoNJLhMrAZToAwTyx0rvwkBd1dW3BF3M4j%2FFJLeLmDREkKLUhz5A%2F6VYXn7oMMVXPOdrw%2BvcCaHyCAsISQxkXIz0uD87dYX98V%2FjsH7FNn6gSDOXYJXR91x%2BAe3bOJDiuwRix2oONCazT%2BWqFrAE&X-Amz-Signature=6f804399f04ed35d3b99ff0d22810da323cc35bec39ff718836398e6efb9282b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZKUNTYT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDsL2X8H4%2FHn2cybQV9U7U9DFGvPj4hzbJFJCzGFz%2BNQAIhAKxW59hciTv52tmAph2fTlWpYpFSy9GYBIOuNyO7TrfzKv8DCCEQABoMNjM3NDIzMTgzODA1Igz2jXrZT2bhFoi7gmAq3APPJ6K9okRNeP2V%2BLMbEnSLJVaSFdWr2y9YTObjQplZfrFxXh64NBkC60ul8GUwX%2FjtWdmnOEYVQcUjZU%2BL4SvOANonxmOqh7BAX%2B5Azp9aVgMlLjVPZjGPH5ED0oWeBifJ%2B0Jc7xA98lTairgS9sYgFd3KMmXHEITTKYB9785OqfW59aYt1lhOqIVX6EkEXQ0d7TB0Yv1eNW8A%2BZeuyE6A%2BReQGtEtz0kRC0Wwr0OVPN0%2FJv9zzT6%2BX%2BhGp5p8i5Duv719rUHuGqjXg4lzU7hYr2vp4fNPG6TJ5jhhTaX0Ng2iIvBow6lgbvLGLoYQK2m7kBZriitZ0W7n5oUzMDQkEDcxA9EHHWtfI7xSiIKLG%2BuOUU%2B6ZLE%2FczQY5S9z05cIaRL1Vt%2Fh6hJamTIV9SSrMICtq6CnSVF5aBSo6KkPKR34gQw5kv7hwp0wS5whBG9p5duepYn%2F5TaouqDksA1MprKQ75x%2FjBlMcaT%2Buss9UYeghcvZ0Hwrg7Ev3cT5ZqDpasubuNzE5bTBwc0AAJsD0AlPmZCuA6XXrjoiXKxuYJM%2FCehqF3ax0%2BfWObi%2B%2FlWlmnan3k%2FRIK%2BJzyWFrBIUyz3nnhQpQfvSv29qwwYduEs4Iao5hjn4z2Y9CjDDt5zDBjqkAbbkZIl3ZBpBBJRBYGTiptXLG6TBMTB1Y%2FOqscmN%2FMxBfpMY1T9BQDD6mV%2FtnCNVmIvoPmk4QoNJLhMrAZToAwTyx0rvwkBd1dW3BF3M4j%2FFJLeLmDREkKLUhz5A%2F6VYXn7oMMVXPOdrw%2BvcCaHyCAsISQxkXIz0uD87dYX98V%2FjsH7FNn6gSDOXYJXR91x%2BAe3bOJDiuwRix2oONCazT%2BWqFrAE&X-Amz-Signature=4cb29ff08bb48b8841f4c182ebf185d8b6ed3ce8a8523f7a9050290a57a6e871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZKUNTYT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDsL2X8H4%2FHn2cybQV9U7U9DFGvPj4hzbJFJCzGFz%2BNQAIhAKxW59hciTv52tmAph2fTlWpYpFSy9GYBIOuNyO7TrfzKv8DCCEQABoMNjM3NDIzMTgzODA1Igz2jXrZT2bhFoi7gmAq3APPJ6K9okRNeP2V%2BLMbEnSLJVaSFdWr2y9YTObjQplZfrFxXh64NBkC60ul8GUwX%2FjtWdmnOEYVQcUjZU%2BL4SvOANonxmOqh7BAX%2B5Azp9aVgMlLjVPZjGPH5ED0oWeBifJ%2B0Jc7xA98lTairgS9sYgFd3KMmXHEITTKYB9785OqfW59aYt1lhOqIVX6EkEXQ0d7TB0Yv1eNW8A%2BZeuyE6A%2BReQGtEtz0kRC0Wwr0OVPN0%2FJv9zzT6%2BX%2BhGp5p8i5Duv719rUHuGqjXg4lzU7hYr2vp4fNPG6TJ5jhhTaX0Ng2iIvBow6lgbvLGLoYQK2m7kBZriitZ0W7n5oUzMDQkEDcxA9EHHWtfI7xSiIKLG%2BuOUU%2B6ZLE%2FczQY5S9z05cIaRL1Vt%2Fh6hJamTIV9SSrMICtq6CnSVF5aBSo6KkPKR34gQw5kv7hwp0wS5whBG9p5duepYn%2F5TaouqDksA1MprKQ75x%2FjBlMcaT%2Buss9UYeghcvZ0Hwrg7Ev3cT5ZqDpasubuNzE5bTBwc0AAJsD0AlPmZCuA6XXrjoiXKxuYJM%2FCehqF3ax0%2BfWObi%2B%2FlWlmnan3k%2FRIK%2BJzyWFrBIUyz3nnhQpQfvSv29qwwYduEs4Iao5hjn4z2Y9CjDDt5zDBjqkAbbkZIl3ZBpBBJRBYGTiptXLG6TBMTB1Y%2FOqscmN%2FMxBfpMY1T9BQDD6mV%2FtnCNVmIvoPmk4QoNJLhMrAZToAwTyx0rvwkBd1dW3BF3M4j%2FFJLeLmDREkKLUhz5A%2F6VYXn7oMMVXPOdrw%2BvcCaHyCAsISQxkXIz0uD87dYX98V%2FjsH7FNn6gSDOXYJXR91x%2BAe3bOJDiuwRix2oONCazT%2BWqFrAE&X-Amz-Signature=50ddb4f896b95e4cad66fb5c41a5809ad8f8ca2474c2df1d68efbc2683527516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
