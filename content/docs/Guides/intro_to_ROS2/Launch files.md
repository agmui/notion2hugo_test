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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKGLEJXK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMeK4hc%2BS2O0LRq9PKh0z9wnr67JlxksR6wkh2dML3cwIgY%2B%2B20V8iPI1kU76w7524tSjzGRb99Dlh3Te4pfdlNeMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIaMnjP22%2FBoMF8DgyrcAzKO8Iyzt38C9CWFn8QNaSuZWHleQKmw%2Fap8uqOluTrgu3JtyboM61opx25JDBIQMuXm7xVbbTatz1cxbHppXrvTSuEFtzR%2FEaSoGVNgIqJxOnH6p1ud7z2XlmY5NXX1uWAWFtVUARVWRoDXOfvVDUpLLsXWUN4U8cS1oDD5wBpRw84U5aa7B18u61g3Jzm%2FZumaXQqvG7%2FIpzUJ%2Bl3aYK4325Ed%2Bi4icNbGXqXxTK81dnbcybxRXlzvgr2V9WFhM%2BqewdDTdlL%2BzI8AuVcri8U1J3rPJ6EC5aEeHY37kHQdtJmNaDoVJ2NoNUIJEYxaHKlBd6X04vCzymGy21Yu3VScwihGVgUnfim3r8qb7ucEy0NUrAbkF8SqJ840q5YH6Ps7G86S9%2Bt2uxjZuWHMsHjOQak%2F0jy58huGkCKdopwgJ1sEa0dYOQze7gMAcGWNdJ3A0%2Bw0WHUUzfU4gOqz0iAUp8HQ7E7nYuXEycyudGmDFdhTGpeGKR6ERICmtSDKje8BEQmfhHOsD%2Fpp21JY2%2FAbS9EfZymU9tSH4394e0LoLy79kUOhMgPoG4ypEY2kXt57ScdOixIK%2B5BrC%2BPW7yaLwY6bwbyyLFgcPlIovtR%2FFAtMRuRRuX%2F6ByGaMMbbrb0GOqUBQBhc0oVzq2vud%2BBznAKEDyO54EWIJhoR00yTu8XcJDckAWh5xB7ZqqKoD2yO5RDP4%2FBeAteBWuvtHPYOVtI4QYK675HwJMGYiUd9apo33%2BnOB5KGFBKwcisSWwlIR9v6HUHK7SPY%2FZYcVpwE8xKBGcFSSfQb5fxu6Ps8nvH9kh5ijnQ3Nl5UQ9ctgveBFquG%2Fu40sgTOvA7tZRWMadD0vX%2FJIIz%2B&X-Amz-Signature=d7b5c194f6d1a44b0a6e0914c16991a23b41f89d58f04503f3f07346c67552dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKGLEJXK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMeK4hc%2BS2O0LRq9PKh0z9wnr67JlxksR6wkh2dML3cwIgY%2B%2B20V8iPI1kU76w7524tSjzGRb99Dlh3Te4pfdlNeMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIaMnjP22%2FBoMF8DgyrcAzKO8Iyzt38C9CWFn8QNaSuZWHleQKmw%2Fap8uqOluTrgu3JtyboM61opx25JDBIQMuXm7xVbbTatz1cxbHppXrvTSuEFtzR%2FEaSoGVNgIqJxOnH6p1ud7z2XlmY5NXX1uWAWFtVUARVWRoDXOfvVDUpLLsXWUN4U8cS1oDD5wBpRw84U5aa7B18u61g3Jzm%2FZumaXQqvG7%2FIpzUJ%2Bl3aYK4325Ed%2Bi4icNbGXqXxTK81dnbcybxRXlzvgr2V9WFhM%2BqewdDTdlL%2BzI8AuVcri8U1J3rPJ6EC5aEeHY37kHQdtJmNaDoVJ2NoNUIJEYxaHKlBd6X04vCzymGy21Yu3VScwihGVgUnfim3r8qb7ucEy0NUrAbkF8SqJ840q5YH6Ps7G86S9%2Bt2uxjZuWHMsHjOQak%2F0jy58huGkCKdopwgJ1sEa0dYOQze7gMAcGWNdJ3A0%2Bw0WHUUzfU4gOqz0iAUp8HQ7E7nYuXEycyudGmDFdhTGpeGKR6ERICmtSDKje8BEQmfhHOsD%2Fpp21JY2%2FAbS9EfZymU9tSH4394e0LoLy79kUOhMgPoG4ypEY2kXt57ScdOixIK%2B5BrC%2BPW7yaLwY6bwbyyLFgcPlIovtR%2FFAtMRuRRuX%2F6ByGaMMbbrb0GOqUBQBhc0oVzq2vud%2BBznAKEDyO54EWIJhoR00yTu8XcJDckAWh5xB7ZqqKoD2yO5RDP4%2FBeAteBWuvtHPYOVtI4QYK675HwJMGYiUd9apo33%2BnOB5KGFBKwcisSWwlIR9v6HUHK7SPY%2FZYcVpwE8xKBGcFSSfQb5fxu6Ps8nvH9kh5ijnQ3Nl5UQ9ctgveBFquG%2Fu40sgTOvA7tZRWMadD0vX%2FJIIz%2B&X-Amz-Signature=b3a1133754c41609a565de3e27eb5f539cb97730a9c4f3389924a5760841a1fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKGLEJXK%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMeK4hc%2BS2O0LRq9PKh0z9wnr67JlxksR6wkh2dML3cwIgY%2B%2B20V8iPI1kU76w7524tSjzGRb99Dlh3Te4pfdlNeMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIaMnjP22%2FBoMF8DgyrcAzKO8Iyzt38C9CWFn8QNaSuZWHleQKmw%2Fap8uqOluTrgu3JtyboM61opx25JDBIQMuXm7xVbbTatz1cxbHppXrvTSuEFtzR%2FEaSoGVNgIqJxOnH6p1ud7z2XlmY5NXX1uWAWFtVUARVWRoDXOfvVDUpLLsXWUN4U8cS1oDD5wBpRw84U5aa7B18u61g3Jzm%2FZumaXQqvG7%2FIpzUJ%2Bl3aYK4325Ed%2Bi4icNbGXqXxTK81dnbcybxRXlzvgr2V9WFhM%2BqewdDTdlL%2BzI8AuVcri8U1J3rPJ6EC5aEeHY37kHQdtJmNaDoVJ2NoNUIJEYxaHKlBd6X04vCzymGy21Yu3VScwihGVgUnfim3r8qb7ucEy0NUrAbkF8SqJ840q5YH6Ps7G86S9%2Bt2uxjZuWHMsHjOQak%2F0jy58huGkCKdopwgJ1sEa0dYOQze7gMAcGWNdJ3A0%2Bw0WHUUzfU4gOqz0iAUp8HQ7E7nYuXEycyudGmDFdhTGpeGKR6ERICmtSDKje8BEQmfhHOsD%2Fpp21JY2%2FAbS9EfZymU9tSH4394e0LoLy79kUOhMgPoG4ypEY2kXt57ScdOixIK%2B5BrC%2BPW7yaLwY6bwbyyLFgcPlIovtR%2FFAtMRuRRuX%2F6ByGaMMbbrb0GOqUBQBhc0oVzq2vud%2BBznAKEDyO54EWIJhoR00yTu8XcJDckAWh5xB7ZqqKoD2yO5RDP4%2FBeAteBWuvtHPYOVtI4QYK675HwJMGYiUd9apo33%2BnOB5KGFBKwcisSWwlIR9v6HUHK7SPY%2FZYcVpwE8xKBGcFSSfQb5fxu6Ps8nvH9kh5ijnQ3Nl5UQ9ctgveBFquG%2Fu40sgTOvA7tZRWMadD0vX%2FJIIz%2B&X-Amz-Signature=f1e3b38735cda7e3c0c4f8669c4143a3d4a5580eac219974d9ecba1a810604c6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
