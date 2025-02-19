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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVKWYVVL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3XE%2FWibBKqyrArgiQ9XVSX9pb6am82YMpXiSJBZv3NAiEA9HxRliGI4qurle%2BSz8H%2FYi%2B2VR%2Bc2N92HrwjbRnrchwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNz97p2bn87cuFVDWCrcA0uvYFWEklfimVtR9DoKzB6Sx8XawZjsUKN0Mg%2F1bRj6U9l9xHWz4iNc06RR6KAMuWo4DbL9EmyzfYxRo4y1ZTUQKMs3yN9MCwBx%2FY0Q2%2BT%2Bo6lZkeVjuBTG03nW2aV8%2BtNrsQMJDw838UE19hrExnwWAZF707pbevTkW4iSXpb4XDKcxPiDrI2rStyk%2BR9pOrfKKx1pe1fHpp8TrG9pnm1brKciyF1r%2BEI61buPWX%2Fjy9cdHiO3XSjZZnsxJZ5SRbsLbzO3wl%2B%2F5mGjL0f6IErLjebGveP7%2FW9BqONtNY6EnZxadgkVZeb4T6AVcLRIT6amYdAWZXDyaAaZpsRnVo%2BiQCGfBqccg5wqHpaM3AMTTn3yPxiKbOq8owptod8MGlQKuL5pN4x4p0R%2FOA3Sx0sLPIsr0LHs5srtWQ7miBdUxrdn0KDaY07uXWFFHBzM3cgJar6VYtCDSotpoJ7QHQohsFnSJYQnZm1f6QTBzGuo5ahUeIhjRl18QQL1U0FEi5sCIHNCZSTx14VMEtVTW2BMyL%2FrTd0UmW5q%2Bhbflf2rMWGmQHGecmDVx65yUHSYXdGTby9vIpjjIZwM2YdBrbuPj%2Beh4JLCQTx1gLCDUj6j2abJaExSp3gzRkV9MJHv2L0GOqUBnDCV6fuVaNlf%2FKlud1irytrkIpMGy6j3xSpLKKmaNiHZa1UnYnSgeFEcnz0FLZMkpNcDAK%2FA1jeqV7GhvRJ7ljJCPrs2jifgWekNh%2FXVRuIlLYsx%2Bh8kfMoTDrbq4m5DJ8vbDRD5MKrQ57e%2B%2BsJYTKYR4znp86%2BtoSUHUbK7Zf5bgdOdj12kcYSsYonD%2BTbYRbWuHzlQ2g6H2SZyz%2BuCYcuhNECh&X-Amz-Signature=ca14318fbc668f5078add524a5d23265fa23e56a416dd0809ce0566e1fd8383e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVKWYVVL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3XE%2FWibBKqyrArgiQ9XVSX9pb6am82YMpXiSJBZv3NAiEA9HxRliGI4qurle%2BSz8H%2FYi%2B2VR%2Bc2N92HrwjbRnrchwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNz97p2bn87cuFVDWCrcA0uvYFWEklfimVtR9DoKzB6Sx8XawZjsUKN0Mg%2F1bRj6U9l9xHWz4iNc06RR6KAMuWo4DbL9EmyzfYxRo4y1ZTUQKMs3yN9MCwBx%2FY0Q2%2BT%2Bo6lZkeVjuBTG03nW2aV8%2BtNrsQMJDw838UE19hrExnwWAZF707pbevTkW4iSXpb4XDKcxPiDrI2rStyk%2BR9pOrfKKx1pe1fHpp8TrG9pnm1brKciyF1r%2BEI61buPWX%2Fjy9cdHiO3XSjZZnsxJZ5SRbsLbzO3wl%2B%2F5mGjL0f6IErLjebGveP7%2FW9BqONtNY6EnZxadgkVZeb4T6AVcLRIT6amYdAWZXDyaAaZpsRnVo%2BiQCGfBqccg5wqHpaM3AMTTn3yPxiKbOq8owptod8MGlQKuL5pN4x4p0R%2FOA3Sx0sLPIsr0LHs5srtWQ7miBdUxrdn0KDaY07uXWFFHBzM3cgJar6VYtCDSotpoJ7QHQohsFnSJYQnZm1f6QTBzGuo5ahUeIhjRl18QQL1U0FEi5sCIHNCZSTx14VMEtVTW2BMyL%2FrTd0UmW5q%2Bhbflf2rMWGmQHGecmDVx65yUHSYXdGTby9vIpjjIZwM2YdBrbuPj%2Beh4JLCQTx1gLCDUj6j2abJaExSp3gzRkV9MJHv2L0GOqUBnDCV6fuVaNlf%2FKlud1irytrkIpMGy6j3xSpLKKmaNiHZa1UnYnSgeFEcnz0FLZMkpNcDAK%2FA1jeqV7GhvRJ7ljJCPrs2jifgWekNh%2FXVRuIlLYsx%2Bh8kfMoTDrbq4m5DJ8vbDRD5MKrQ57e%2B%2BsJYTKYR4znp86%2BtoSUHUbK7Zf5bgdOdj12kcYSsYonD%2BTbYRbWuHzlQ2g6H2SZyz%2BuCYcuhNECh&X-Amz-Signature=c173c7c34cf915701269893b18e998887ca08427f2a4e441bfa26b2d62175d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVKWYVVL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3XE%2FWibBKqyrArgiQ9XVSX9pb6am82YMpXiSJBZv3NAiEA9HxRliGI4qurle%2BSz8H%2FYi%2B2VR%2Bc2N92HrwjbRnrchwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNz97p2bn87cuFVDWCrcA0uvYFWEklfimVtR9DoKzB6Sx8XawZjsUKN0Mg%2F1bRj6U9l9xHWz4iNc06RR6KAMuWo4DbL9EmyzfYxRo4y1ZTUQKMs3yN9MCwBx%2FY0Q2%2BT%2Bo6lZkeVjuBTG03nW2aV8%2BtNrsQMJDw838UE19hrExnwWAZF707pbevTkW4iSXpb4XDKcxPiDrI2rStyk%2BR9pOrfKKx1pe1fHpp8TrG9pnm1brKciyF1r%2BEI61buPWX%2Fjy9cdHiO3XSjZZnsxJZ5SRbsLbzO3wl%2B%2F5mGjL0f6IErLjebGveP7%2FW9BqONtNY6EnZxadgkVZeb4T6AVcLRIT6amYdAWZXDyaAaZpsRnVo%2BiQCGfBqccg5wqHpaM3AMTTn3yPxiKbOq8owptod8MGlQKuL5pN4x4p0R%2FOA3Sx0sLPIsr0LHs5srtWQ7miBdUxrdn0KDaY07uXWFFHBzM3cgJar6VYtCDSotpoJ7QHQohsFnSJYQnZm1f6QTBzGuo5ahUeIhjRl18QQL1U0FEi5sCIHNCZSTx14VMEtVTW2BMyL%2FrTd0UmW5q%2Bhbflf2rMWGmQHGecmDVx65yUHSYXdGTby9vIpjjIZwM2YdBrbuPj%2Beh4JLCQTx1gLCDUj6j2abJaExSp3gzRkV9MJHv2L0GOqUBnDCV6fuVaNlf%2FKlud1irytrkIpMGy6j3xSpLKKmaNiHZa1UnYnSgeFEcnz0FLZMkpNcDAK%2FA1jeqV7GhvRJ7ljJCPrs2jifgWekNh%2FXVRuIlLYsx%2Bh8kfMoTDrbq4m5DJ8vbDRD5MKrQ57e%2B%2BsJYTKYR4znp86%2BtoSUHUbK7Zf5bgdOdj12kcYSsYonD%2BTbYRbWuHzlQ2g6H2SZyz%2BuCYcuhNECh&X-Amz-Signature=74756ef9f6ff2d568b82ae8231df2768e43d0bed0a470f3748b131958e689829&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
