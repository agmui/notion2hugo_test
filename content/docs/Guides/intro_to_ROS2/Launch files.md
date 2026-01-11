---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ7YIFJO%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDO2xY7e1T0RVvZW3sn6co5K3s5Rt%2BJcWNe7pAW%2FY4eiAIhAP4PhtJg3cHaR6fGSrT9bFESkff7%2Bwkwtops%2BExqZdEkKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI23D0MJZ0iG5ur6wq3ANJGyEvC6b9u4vcADmKPGUTvU0FWOCamuGdV%2BAhVcrNnuinjktP5NGQQYFf%2FAdnAo%2FMHmgd%2FDkWdzGMTdsJzNcDwoup%2F%2FyofTG2ixNPwoj5Cni9ZyW1jAPLa%2Fhu3lJoykgkSPdZy7Qqq%2FH4E58BQltRnlepaAw5wRvfn8YtMXPCyk1jYmaFBnEokrn5tuRK50PJhpvI6L3Ed2jCc0Ut2ddSJ2jqjULIqdfCokrjGZskdYZsuznlPNopVpMyJqqMXbgK1dXQBcpcnX9XOcp3zVaCdRad9G5p57tjtEvDju%2FMqUg%2FzGQ2OoiUWCKheN%2Bdz2hyqmTpmSf1%2BhNj86Ln79mgQP%2Ft0Cohxp9ZqLuCLZ9ng8MeS6OEl9OU2%2BSurQ9hL7FHKg5qePG9RU1GbPJ1tbSWQqtbJUqdRypXMo%2FAcgk4zxD7N58948%2Fl8hri3hX50hTH%2F18NOfQBo0CZWV3DOUkTAFkGkyMBWkkyChXfGq%2FH1SSsit9dcJdp7iKPk0OU04Nk8lyVyfGaOyXY88V%2Fv8sT6Zw99W1nDJzCMaqYbYnuaa10MOyInlfNXIM72X2PeZrmBmcoZTyPkIug%2F1ODxNQKrOHi5V7rxW9dV93GkD%2B8wwrhnE9icVumaP3frjCggIzLBjqkAUTuSRXq32U0CAw%2FPSn09ZH1SMKnW3RCSzdOtdp2mgshusARUMNJVSESt5xxRuFRZni5m8gSOM6VvnmEHEh72XO7KhJ81ti5Wqm8bClCyL9K3BFjNQn2KhVkWrJFVJ2KD6GJ3FLbHQMVWYAD01oklfob%2B3V9cfH4A9WI9%2BrGQZuLHTvg%2B7%2Fkrna%2FGiMlLEkUZ7CzpDxoVN6z5RBKG4%2BzNASkAsV0&X-Amz-Signature=c6cefd961496f46d4ccb0fdcef926b47d7398f35e799cee735655a5a15ef4539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ7YIFJO%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDO2xY7e1T0RVvZW3sn6co5K3s5Rt%2BJcWNe7pAW%2FY4eiAIhAP4PhtJg3cHaR6fGSrT9bFESkff7%2Bwkwtops%2BExqZdEkKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI23D0MJZ0iG5ur6wq3ANJGyEvC6b9u4vcADmKPGUTvU0FWOCamuGdV%2BAhVcrNnuinjktP5NGQQYFf%2FAdnAo%2FMHmgd%2FDkWdzGMTdsJzNcDwoup%2F%2FyofTG2ixNPwoj5Cni9ZyW1jAPLa%2Fhu3lJoykgkSPdZy7Qqq%2FH4E58BQltRnlepaAw5wRvfn8YtMXPCyk1jYmaFBnEokrn5tuRK50PJhpvI6L3Ed2jCc0Ut2ddSJ2jqjULIqdfCokrjGZskdYZsuznlPNopVpMyJqqMXbgK1dXQBcpcnX9XOcp3zVaCdRad9G5p57tjtEvDju%2FMqUg%2FzGQ2OoiUWCKheN%2Bdz2hyqmTpmSf1%2BhNj86Ln79mgQP%2Ft0Cohxp9ZqLuCLZ9ng8MeS6OEl9OU2%2BSurQ9hL7FHKg5qePG9RU1GbPJ1tbSWQqtbJUqdRypXMo%2FAcgk4zxD7N58948%2Fl8hri3hX50hTH%2F18NOfQBo0CZWV3DOUkTAFkGkyMBWkkyChXfGq%2FH1SSsit9dcJdp7iKPk0OU04Nk8lyVyfGaOyXY88V%2Fv8sT6Zw99W1nDJzCMaqYbYnuaa10MOyInlfNXIM72X2PeZrmBmcoZTyPkIug%2F1ODxNQKrOHi5V7rxW9dV93GkD%2B8wwrhnE9icVumaP3frjCggIzLBjqkAUTuSRXq32U0CAw%2FPSn09ZH1SMKnW3RCSzdOtdp2mgshusARUMNJVSESt5xxRuFRZni5m8gSOM6VvnmEHEh72XO7KhJ81ti5Wqm8bClCyL9K3BFjNQn2KhVkWrJFVJ2KD6GJ3FLbHQMVWYAD01oklfob%2B3V9cfH4A9WI9%2BrGQZuLHTvg%2B7%2Fkrna%2FGiMlLEkUZ7CzpDxoVN6z5RBKG4%2BzNASkAsV0&X-Amz-Signature=5db45b6066dacf4bf4d2c3a918b1449a05b2363ebd7ca9c1cf5f5493ac896d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ7YIFJO%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDO2xY7e1T0RVvZW3sn6co5K3s5Rt%2BJcWNe7pAW%2FY4eiAIhAP4PhtJg3cHaR6fGSrT9bFESkff7%2Bwkwtops%2BExqZdEkKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI23D0MJZ0iG5ur6wq3ANJGyEvC6b9u4vcADmKPGUTvU0FWOCamuGdV%2BAhVcrNnuinjktP5NGQQYFf%2FAdnAo%2FMHmgd%2FDkWdzGMTdsJzNcDwoup%2F%2FyofTG2ixNPwoj5Cni9ZyW1jAPLa%2Fhu3lJoykgkSPdZy7Qqq%2FH4E58BQltRnlepaAw5wRvfn8YtMXPCyk1jYmaFBnEokrn5tuRK50PJhpvI6L3Ed2jCc0Ut2ddSJ2jqjULIqdfCokrjGZskdYZsuznlPNopVpMyJqqMXbgK1dXQBcpcnX9XOcp3zVaCdRad9G5p57tjtEvDju%2FMqUg%2FzGQ2OoiUWCKheN%2Bdz2hyqmTpmSf1%2BhNj86Ln79mgQP%2Ft0Cohxp9ZqLuCLZ9ng8MeS6OEl9OU2%2BSurQ9hL7FHKg5qePG9RU1GbPJ1tbSWQqtbJUqdRypXMo%2FAcgk4zxD7N58948%2Fl8hri3hX50hTH%2F18NOfQBo0CZWV3DOUkTAFkGkyMBWkkyChXfGq%2FH1SSsit9dcJdp7iKPk0OU04Nk8lyVyfGaOyXY88V%2Fv8sT6Zw99W1nDJzCMaqYbYnuaa10MOyInlfNXIM72X2PeZrmBmcoZTyPkIug%2F1ODxNQKrOHi5V7rxW9dV93GkD%2B8wwrhnE9icVumaP3frjCggIzLBjqkAUTuSRXq32U0CAw%2FPSn09ZH1SMKnW3RCSzdOtdp2mgshusARUMNJVSESt5xxRuFRZni5m8gSOM6VvnmEHEh72XO7KhJ81ti5Wqm8bClCyL9K3BFjNQn2KhVkWrJFVJ2KD6GJ3FLbHQMVWYAD01oklfob%2B3V9cfH4A9WI9%2BrGQZuLHTvg%2B7%2Fkrna%2FGiMlLEkUZ7CzpDxoVN6z5RBKG4%2BzNASkAsV0&X-Amz-Signature=99688796876888b60f6b597747ba116f80d2b53b9037b9bb0ac8aa5752dcb90c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
