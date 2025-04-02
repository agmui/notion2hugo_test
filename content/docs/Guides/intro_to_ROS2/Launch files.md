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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRWYQYZH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T132009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDpym6ZcxHZxQm%2BJPJkO899kKeo9iAnsxd5K6u%2BNTeW2AIgfdMAQd%2FkSRRJjHZquz0Qdl%2B608hTR953z%2F4jxW1zhMEqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjn3Omk38GDawzn9SrcA8xAtmgRMenVixAtgU51SjhfNoxXJi3JMRFcz74NEBMmqF%2BAcTJow6dzMH2pT2SzWhx%2FphYaeTWGIX9LHhXvS224ChXmWl%2FvfJ%2FdncB7gqKJD%2B26dS5oGuyUD0TVyJnxUFLdrklkVO%2BlE3nWD3Xrw%2Bmwj6oDwN9AgmnKDZTymqG6%2F0FdqO0Y%2F8R1mPy2Ng54M2JenGY4mytyLojjRLrsPJLgsQU9M1sVMRTn%2BBH4Bx63fp%2FrcwyzEUUe5QBeOLm93jz0Y52tgV83dwvXxz2LGwKkgqyQ5eWmFfJNah%2Bf%2Bnu9KvFrYBO%2Ftenlc2n6d%2B2QWg5aKVqnMooUr66PiGBzM79Zww5duRdsR6oQ1y93lQXUGGfKweAwA0UPC1r2sXBBtJpR2p6ZvhcUVXVANo%2F9Z5SErsUY7FNPaID%2BOwLfc3CX6l6zkczwGV5JzQmxUUD0cJEvo5MrOIZBzUZpqPGOdWOgVCM%2Fatd6sk2vnITcWTkHqy7nQickUZ4HYg51vOi42PqfWy2j8Ii4f5FrMjoYqAmwjPxlwVa2io57Wgz5dexu5q5gkEI7FIcioXE88jVERkazzdIebim1PP0ehoomkjvI%2Bu8oNfJQhpIpFwOwBDzQrGOukOCf2iqNSNrvMKrgtL8GOqUBUiTcfWYnASOLo9tTA%2Bn9FekPWykYzHsgeOCryr6NGGNg%2FsVh31oPWJQ0c%2Frj1HpiRWaC0OKAzKAA73I%2B6p3Vd1b%2FzatID%2FHJt2mxDaY7tAoDu3kBF6WqDUl1lUIwNpg%2Fa27sYlZLk3%2FTw8D2jXxx0Ln1ifc6K5tV5pWDGbL80NSusa%2Be2bcHwLrFVxLjgDJLTyVUyXgCqjl33ShFJJ8S2eLkAjp%2F&X-Amz-Signature=1eee6de9cdc8c438de84d690249a0eda661b506fc468bf8c503d45028bac2260&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRWYQYZH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T132009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDpym6ZcxHZxQm%2BJPJkO899kKeo9iAnsxd5K6u%2BNTeW2AIgfdMAQd%2FkSRRJjHZquz0Qdl%2B608hTR953z%2F4jxW1zhMEqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjn3Omk38GDawzn9SrcA8xAtmgRMenVixAtgU51SjhfNoxXJi3JMRFcz74NEBMmqF%2BAcTJow6dzMH2pT2SzWhx%2FphYaeTWGIX9LHhXvS224ChXmWl%2FvfJ%2FdncB7gqKJD%2B26dS5oGuyUD0TVyJnxUFLdrklkVO%2BlE3nWD3Xrw%2Bmwj6oDwN9AgmnKDZTymqG6%2F0FdqO0Y%2F8R1mPy2Ng54M2JenGY4mytyLojjRLrsPJLgsQU9M1sVMRTn%2BBH4Bx63fp%2FrcwyzEUUe5QBeOLm93jz0Y52tgV83dwvXxz2LGwKkgqyQ5eWmFfJNah%2Bf%2Bnu9KvFrYBO%2Ftenlc2n6d%2B2QWg5aKVqnMooUr66PiGBzM79Zww5duRdsR6oQ1y93lQXUGGfKweAwA0UPC1r2sXBBtJpR2p6ZvhcUVXVANo%2F9Z5SErsUY7FNPaID%2BOwLfc3CX6l6zkczwGV5JzQmxUUD0cJEvo5MrOIZBzUZpqPGOdWOgVCM%2Fatd6sk2vnITcWTkHqy7nQickUZ4HYg51vOi42PqfWy2j8Ii4f5FrMjoYqAmwjPxlwVa2io57Wgz5dexu5q5gkEI7FIcioXE88jVERkazzdIebim1PP0ehoomkjvI%2Bu8oNfJQhpIpFwOwBDzQrGOukOCf2iqNSNrvMKrgtL8GOqUBUiTcfWYnASOLo9tTA%2Bn9FekPWykYzHsgeOCryr6NGGNg%2FsVh31oPWJQ0c%2Frj1HpiRWaC0OKAzKAA73I%2B6p3Vd1b%2FzatID%2FHJt2mxDaY7tAoDu3kBF6WqDUl1lUIwNpg%2Fa27sYlZLk3%2FTw8D2jXxx0Ln1ifc6K5tV5pWDGbL80NSusa%2Be2bcHwLrFVxLjgDJLTyVUyXgCqjl33ShFJJ8S2eLkAjp%2F&X-Amz-Signature=ed4e38a42b0843f589fdf9cd927582317d2dfb4fb1479aed8a8958268794f718&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRWYQYZH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T132009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDpym6ZcxHZxQm%2BJPJkO899kKeo9iAnsxd5K6u%2BNTeW2AIgfdMAQd%2FkSRRJjHZquz0Qdl%2B608hTR953z%2F4jxW1zhMEqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjn3Omk38GDawzn9SrcA8xAtmgRMenVixAtgU51SjhfNoxXJi3JMRFcz74NEBMmqF%2BAcTJow6dzMH2pT2SzWhx%2FphYaeTWGIX9LHhXvS224ChXmWl%2FvfJ%2FdncB7gqKJD%2B26dS5oGuyUD0TVyJnxUFLdrklkVO%2BlE3nWD3Xrw%2Bmwj6oDwN9AgmnKDZTymqG6%2F0FdqO0Y%2F8R1mPy2Ng54M2JenGY4mytyLojjRLrsPJLgsQU9M1sVMRTn%2BBH4Bx63fp%2FrcwyzEUUe5QBeOLm93jz0Y52tgV83dwvXxz2LGwKkgqyQ5eWmFfJNah%2Bf%2Bnu9KvFrYBO%2Ftenlc2n6d%2B2QWg5aKVqnMooUr66PiGBzM79Zww5duRdsR6oQ1y93lQXUGGfKweAwA0UPC1r2sXBBtJpR2p6ZvhcUVXVANo%2F9Z5SErsUY7FNPaID%2BOwLfc3CX6l6zkczwGV5JzQmxUUD0cJEvo5MrOIZBzUZpqPGOdWOgVCM%2Fatd6sk2vnITcWTkHqy7nQickUZ4HYg51vOi42PqfWy2j8Ii4f5FrMjoYqAmwjPxlwVa2io57Wgz5dexu5q5gkEI7FIcioXE88jVERkazzdIebim1PP0ehoomkjvI%2Bu8oNfJQhpIpFwOwBDzQrGOukOCf2iqNSNrvMKrgtL8GOqUBUiTcfWYnASOLo9tTA%2Bn9FekPWykYzHsgeOCryr6NGGNg%2FsVh31oPWJQ0c%2Frj1HpiRWaC0OKAzKAA73I%2B6p3Vd1b%2FzatID%2FHJt2mxDaY7tAoDu3kBF6WqDUl1lUIwNpg%2Fa27sYlZLk3%2FTw8D2jXxx0Ln1ifc6K5tV5pWDGbL80NSusa%2Be2bcHwLrFVxLjgDJLTyVUyXgCqjl33ShFJJ8S2eLkAjp%2F&X-Amz-Signature=f1bbe10434881415edc27bd5a59c3d4d06a2e7e6edcaae52a925e3acc94ee352&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
