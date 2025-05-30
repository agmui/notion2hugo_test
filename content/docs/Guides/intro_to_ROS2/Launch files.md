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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7D4LT7T%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICa6tD2vvfMM4OT1GQs2JPS4p5GRIl%2FbFTPm1BkRQ9GtAiBm8wfYKxStENaEHRvncJQ22MfLKcBb4LxktR8qvpwnrSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWkkVYk5LWuXKeHvrKtwDNMQrAzKcCJAYaPw%2FpYaPR5qZ9JA4tb6OP3ZgBPs9xcOx%2FSl%2BU4I1%2BMDM9dG0CJ0ZPQldg%2FrJMbUJyclzkOpMAHUirAqsYl52I4oiLUnqr67rfVY1H%2Fh3ed4ZgGEikq7n9NSZ38w9MiWtorNWZ90LRVuwYtdtcMdSAW8BgcDGpHOlDxvLLCFraGzYPN0u8aZ6jUWgQJraCqHD62vTFo0QxJEG34jXdBEvlXpKBDz%2BmVUjXxiTuMtby8L6ZwnUgfWTDWmIzQvceNGUqACQfbnYDIJ2hBBoeDz9cZw9EWBi7K3GJlZNhX2bPM7Ca603mEYZCt84JkAb5NQf4RynxUE%2FWL96kJ%2BJY0RFdWiYf8dYen7%2FzQ%2Fncuynzf%2Fol%2FX99CaKkKyuz%2BcDhmyc5dsiXxYtKO%2B3W%2FsLrjylU2PXzu0kp59PKozG5FOqUnhTB5uup0u6RyhKzFTAgOtiMmgk8m6BmSQxoAP1XYiAWHipEfnKEgnq2fRFZvgfrlN69eLDcF0WHIORekFIFU8M5qXUjoAjur9ZL7MBDw3V%2Bnhu2tcTHSFJrDu5HXsPVH51wH%2BtlrZTg%2BgLuNIx9K63Be8QvSyMKTX5QXLe6HKH1ss5ulVx4GILtyDcMwd9rei5sfow%2FbrnwQY6pgGi%2F9S%2BpLT8H3F0gw7dZLeGRYnqEfIJrM1gD5%2FS%2FYcjYT5XCefwWR7iuzSz0BkxCbT4Mciv4%2BLEw5d%2B6LqJboyzNbWSi3vPOPlp1CzBMK18ZhxSCLqUUyjSHg2DCZJJH6Cqcrtxs%2FcyW%2FfM%2BktjdkO6ZlP6UTn10csl%2B0vKasKFNjmr6veGODtQrtaIayaTwOiQO%2F3UWvPg3AHtrKrHJ1gK89MeIPvT&X-Amz-Signature=00f38a0cf44b4347da9d9442689dcab5d21bbcad1e1d6856b84925a3557fd29c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7D4LT7T%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICa6tD2vvfMM4OT1GQs2JPS4p5GRIl%2FbFTPm1BkRQ9GtAiBm8wfYKxStENaEHRvncJQ22MfLKcBb4LxktR8qvpwnrSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWkkVYk5LWuXKeHvrKtwDNMQrAzKcCJAYaPw%2FpYaPR5qZ9JA4tb6OP3ZgBPs9xcOx%2FSl%2BU4I1%2BMDM9dG0CJ0ZPQldg%2FrJMbUJyclzkOpMAHUirAqsYl52I4oiLUnqr67rfVY1H%2Fh3ed4ZgGEikq7n9NSZ38w9MiWtorNWZ90LRVuwYtdtcMdSAW8BgcDGpHOlDxvLLCFraGzYPN0u8aZ6jUWgQJraCqHD62vTFo0QxJEG34jXdBEvlXpKBDz%2BmVUjXxiTuMtby8L6ZwnUgfWTDWmIzQvceNGUqACQfbnYDIJ2hBBoeDz9cZw9EWBi7K3GJlZNhX2bPM7Ca603mEYZCt84JkAb5NQf4RynxUE%2FWL96kJ%2BJY0RFdWiYf8dYen7%2FzQ%2Fncuynzf%2Fol%2FX99CaKkKyuz%2BcDhmyc5dsiXxYtKO%2B3W%2FsLrjylU2PXzu0kp59PKozG5FOqUnhTB5uup0u6RyhKzFTAgOtiMmgk8m6BmSQxoAP1XYiAWHipEfnKEgnq2fRFZvgfrlN69eLDcF0WHIORekFIFU8M5qXUjoAjur9ZL7MBDw3V%2Bnhu2tcTHSFJrDu5HXsPVH51wH%2BtlrZTg%2BgLuNIx9K63Be8QvSyMKTX5QXLe6HKH1ss5ulVx4GILtyDcMwd9rei5sfow%2FbrnwQY6pgGi%2F9S%2BpLT8H3F0gw7dZLeGRYnqEfIJrM1gD5%2FS%2FYcjYT5XCefwWR7iuzSz0BkxCbT4Mciv4%2BLEw5d%2B6LqJboyzNbWSi3vPOPlp1CzBMK18ZhxSCLqUUyjSHg2DCZJJH6Cqcrtxs%2FcyW%2FfM%2BktjdkO6ZlP6UTn10csl%2B0vKasKFNjmr6veGODtQrtaIayaTwOiQO%2F3UWvPg3AHtrKrHJ1gK89MeIPvT&X-Amz-Signature=4b7e0c7b7ea2ac5fecd39061acd05723532250bf64909568f66c4fb139d6ad82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7D4LT7T%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICa6tD2vvfMM4OT1GQs2JPS4p5GRIl%2FbFTPm1BkRQ9GtAiBm8wfYKxStENaEHRvncJQ22MfLKcBb4LxktR8qvpwnrSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWkkVYk5LWuXKeHvrKtwDNMQrAzKcCJAYaPw%2FpYaPR5qZ9JA4tb6OP3ZgBPs9xcOx%2FSl%2BU4I1%2BMDM9dG0CJ0ZPQldg%2FrJMbUJyclzkOpMAHUirAqsYl52I4oiLUnqr67rfVY1H%2Fh3ed4ZgGEikq7n9NSZ38w9MiWtorNWZ90LRVuwYtdtcMdSAW8BgcDGpHOlDxvLLCFraGzYPN0u8aZ6jUWgQJraCqHD62vTFo0QxJEG34jXdBEvlXpKBDz%2BmVUjXxiTuMtby8L6ZwnUgfWTDWmIzQvceNGUqACQfbnYDIJ2hBBoeDz9cZw9EWBi7K3GJlZNhX2bPM7Ca603mEYZCt84JkAb5NQf4RynxUE%2FWL96kJ%2BJY0RFdWiYf8dYen7%2FzQ%2Fncuynzf%2Fol%2FX99CaKkKyuz%2BcDhmyc5dsiXxYtKO%2B3W%2FsLrjylU2PXzu0kp59PKozG5FOqUnhTB5uup0u6RyhKzFTAgOtiMmgk8m6BmSQxoAP1XYiAWHipEfnKEgnq2fRFZvgfrlN69eLDcF0WHIORekFIFU8M5qXUjoAjur9ZL7MBDw3V%2Bnhu2tcTHSFJrDu5HXsPVH51wH%2BtlrZTg%2BgLuNIx9K63Be8QvSyMKTX5QXLe6HKH1ss5ulVx4GILtyDcMwd9rei5sfow%2FbrnwQY6pgGi%2F9S%2BpLT8H3F0gw7dZLeGRYnqEfIJrM1gD5%2FS%2FYcjYT5XCefwWR7iuzSz0BkxCbT4Mciv4%2BLEw5d%2B6LqJboyzNbWSi3vPOPlp1CzBMK18ZhxSCLqUUyjSHg2DCZJJH6Cqcrtxs%2FcyW%2FfM%2BktjdkO6ZlP6UTn10csl%2B0vKasKFNjmr6veGODtQrtaIayaTwOiQO%2F3UWvPg3AHtrKrHJ1gK89MeIPvT&X-Amz-Signature=106b886b65ac8dfc066cde9b34fb409960c7b998c787aaf31a7905ad5fe987b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
