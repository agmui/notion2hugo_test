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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYSHNJIE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDlhThzdWbVU9y%2BUpn0MhIFNVbuyJvT7oPqPByjURVIvgIhAIy49nbo4GiPARYgktGBCZ%2Bw%2BjHKsLszIezJDPIBcHIrKv8DCC4QABoMNjM3NDIzMTgzODA1Igz2aCiNHqqQIcDA8Gwq3ANvDyFIlqNbIWqral9lCkkhd%2Fj5cBoK3JS28cvkIhrniodcd2t4BqVRAJS2dU8txCtIUgKsFDgJZCuhZGbCiwekSzK33LuYgKFSKlupsOPzPY8I4xCnT56G9u0FkQWBaW14vSsd050Ek3WExLCrQwYP10h3wAwSx3%2FL82ukqA9dBRmEJoAdy3auAPTrFmpKsbLcohJrQIj44BDfETO%2FOsEZIEkgWRPdwmMScskhQ8Mq5dM0Amg2o05iN%2FPEmiZrrc%2FBfULjYzd84QjZUFHjXR0KzFuE0E%2B6lFQCjO4E%2Fl07MvWAh1pCrXYorhdv8D9bh4nd1uA%2B2qzaRrqjSGc7Q%2BPTmpSPdISxfbaEP7ZaeVwlXNa39DMcKGmz7JkxNj3KlYEHld8zjNSAqaLf0fjQB2k6T0LT1Ol1gzkOi%2B59YGyzAro1E6eyd5NJejqv7buluKmI9qmzPBWv1xWHUu9o1LSdQycjAuRQnCb%2FM0KwG7ZmQSI4T8CcavKNj4ebYcXzbF%2B30i%2BjM4ApfMWws4ncGkreXZHchxT8tqlON1AKfqji3l9lL4S3q8znpIhyEmIyGxtpv3oIOq3ER9423Ckgtk0TvZg7UPkjgOHFmPMDbpsqRvASxpmDI%2FBFYgB45zDjhdTDBjqkAVd69vtSIJ1NbuxNaLUTWVASbzjw7eczrxClsGCGOh6V0%2BeEXjrAaQF4e5GUSGEV3V9V2DMDpx5Pd%2FORQLy0YuqKM06V28rWtTVJeIWnF3aGTZddtVid4c6Wn2k4qH6OEU6iOD7g8TJjwR9yLqVx2I8qnUcaUgJ9ip3TOaE4FhpYwUnPse%2BwUAFAVwfbtCWoMQI0Q38Snh8ka7bKK33GpOMUGjC0&X-Amz-Signature=c7b1e8fefcf0cde7be6ef17d162938c6cfbd13b757ac5c209b109ba6206dcaea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYSHNJIE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDlhThzdWbVU9y%2BUpn0MhIFNVbuyJvT7oPqPByjURVIvgIhAIy49nbo4GiPARYgktGBCZ%2Bw%2BjHKsLszIezJDPIBcHIrKv8DCC4QABoMNjM3NDIzMTgzODA1Igz2aCiNHqqQIcDA8Gwq3ANvDyFIlqNbIWqral9lCkkhd%2Fj5cBoK3JS28cvkIhrniodcd2t4BqVRAJS2dU8txCtIUgKsFDgJZCuhZGbCiwekSzK33LuYgKFSKlupsOPzPY8I4xCnT56G9u0FkQWBaW14vSsd050Ek3WExLCrQwYP10h3wAwSx3%2FL82ukqA9dBRmEJoAdy3auAPTrFmpKsbLcohJrQIj44BDfETO%2FOsEZIEkgWRPdwmMScskhQ8Mq5dM0Amg2o05iN%2FPEmiZrrc%2FBfULjYzd84QjZUFHjXR0KzFuE0E%2B6lFQCjO4E%2Fl07MvWAh1pCrXYorhdv8D9bh4nd1uA%2B2qzaRrqjSGc7Q%2BPTmpSPdISxfbaEP7ZaeVwlXNa39DMcKGmz7JkxNj3KlYEHld8zjNSAqaLf0fjQB2k6T0LT1Ol1gzkOi%2B59YGyzAro1E6eyd5NJejqv7buluKmI9qmzPBWv1xWHUu9o1LSdQycjAuRQnCb%2FM0KwG7ZmQSI4T8CcavKNj4ebYcXzbF%2B30i%2BjM4ApfMWws4ncGkreXZHchxT8tqlON1AKfqji3l9lL4S3q8znpIhyEmIyGxtpv3oIOq3ER9423Ckgtk0TvZg7UPkjgOHFmPMDbpsqRvASxpmDI%2FBFYgB45zDjhdTDBjqkAVd69vtSIJ1NbuxNaLUTWVASbzjw7eczrxClsGCGOh6V0%2BeEXjrAaQF4e5GUSGEV3V9V2DMDpx5Pd%2FORQLy0YuqKM06V28rWtTVJeIWnF3aGTZddtVid4c6Wn2k4qH6OEU6iOD7g8TJjwR9yLqVx2I8qnUcaUgJ9ip3TOaE4FhpYwUnPse%2BwUAFAVwfbtCWoMQI0Q38Snh8ka7bKK33GpOMUGjC0&X-Amz-Signature=2b41faa066270e58e893a3ce8b3f38d146fe7ac84fb6e9280d0b361d6b871e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYSHNJIE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDlhThzdWbVU9y%2BUpn0MhIFNVbuyJvT7oPqPByjURVIvgIhAIy49nbo4GiPARYgktGBCZ%2Bw%2BjHKsLszIezJDPIBcHIrKv8DCC4QABoMNjM3NDIzMTgzODA1Igz2aCiNHqqQIcDA8Gwq3ANvDyFIlqNbIWqral9lCkkhd%2Fj5cBoK3JS28cvkIhrniodcd2t4BqVRAJS2dU8txCtIUgKsFDgJZCuhZGbCiwekSzK33LuYgKFSKlupsOPzPY8I4xCnT56G9u0FkQWBaW14vSsd050Ek3WExLCrQwYP10h3wAwSx3%2FL82ukqA9dBRmEJoAdy3auAPTrFmpKsbLcohJrQIj44BDfETO%2FOsEZIEkgWRPdwmMScskhQ8Mq5dM0Amg2o05iN%2FPEmiZrrc%2FBfULjYzd84QjZUFHjXR0KzFuE0E%2B6lFQCjO4E%2Fl07MvWAh1pCrXYorhdv8D9bh4nd1uA%2B2qzaRrqjSGc7Q%2BPTmpSPdISxfbaEP7ZaeVwlXNa39DMcKGmz7JkxNj3KlYEHld8zjNSAqaLf0fjQB2k6T0LT1Ol1gzkOi%2B59YGyzAro1E6eyd5NJejqv7buluKmI9qmzPBWv1xWHUu9o1LSdQycjAuRQnCb%2FM0KwG7ZmQSI4T8CcavKNj4ebYcXzbF%2B30i%2BjM4ApfMWws4ncGkreXZHchxT8tqlON1AKfqji3l9lL4S3q8znpIhyEmIyGxtpv3oIOq3ER9423Ckgtk0TvZg7UPkjgOHFmPMDbpsqRvASxpmDI%2FBFYgB45zDjhdTDBjqkAVd69vtSIJ1NbuxNaLUTWVASbzjw7eczrxClsGCGOh6V0%2BeEXjrAaQF4e5GUSGEV3V9V2DMDpx5Pd%2FORQLy0YuqKM06V28rWtTVJeIWnF3aGTZddtVid4c6Wn2k4qH6OEU6iOD7g8TJjwR9yLqVx2I8qnUcaUgJ9ip3TOaE4FhpYwUnPse%2BwUAFAVwfbtCWoMQI0Q38Snh8ka7bKK33GpOMUGjC0&X-Amz-Signature=0b2ac0c9178a804047a3a940d098bb099f638d279f3f432441882aa1353d5833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
