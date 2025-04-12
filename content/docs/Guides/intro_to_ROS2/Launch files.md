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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VDMZDX3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDvYrXRHx1WNz8edImgzv7qTTjk8MgEEot8d8kNCiH%2FJgIhALK22v2KlCNnS7slU64lL7cBZBV9qN2ozFjKtD2Vqxu6KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5lS1GbevHAOtKa3cq3APisL5u2yU0%2B8oCcmz8jY6OJJqDwaM54HnIpMNyXO7sh4251%2FJVbVB32KJYfbYL%2FmEa9YHHLQE4EblVsw8j6sGOt3mQitykgKtFSU8BohYvI7aiyu3zWELJ6Z5qh8AoAgJZ%2B3sJSKjXe1smgghahlfIY7lEmch5ZSbjCFQxpey%2B9LdxP6v22UBor%2BXSNUFeYmyhOEhhK%2F%2B3baBh8cbjuiQ%2BXasDAJfbT2IweWpFVnPZEdBL3DmkYIZED8rOj2hAx0tZPXbR5oNhcTCohKr1%2BSuDia3IulsQ1EW3Sf9HUV7eesOMngDYQCFWa%2B9KWSLcbUC3SWdRxtruH9ohmycYdnLPtWSpsl0aegsTuKItbZ4WIKlHQlLZE4pu3OqWc3e2jdecPAHlIIQJnZ6ekeZn5a1S9JX0QyW06dJ54Nkpj486NRx5cMLjBU39n1q0JedBkEdsYci4SeMVcrFrXHrOSWqEt%2BJjhdyfcxdNPpdH6pMMWP8JktFPHWM7a%2BKNyKCanFNZuLvwXLV%2FCcylNlUYUqwIVhhzWIvlFMhAbYexFLsrowypvEWm9tPLuMM%2BJzx6A7fUWIHT1aia4kNpRmW8wQU3MdxNoHm4dTKoKF1qYSzTyV8EyzjyYrDROlJZljCSp%2Bi%2FBjqkAZGLvxCZUvVozbVdNcINk3RRqx2Re9%2BL3BCUq445dwD2j%2FrF6r1OzShE2tNYoBLnEmkYQfiq1jVnVvtENNR5agB3C2H0UY3s57R%2BYpDUij5ATbfmbyUcQDOR96PdhejSUauSUSmVwV%2BkfZjhccc3RdROc6%2BbntyUhxEvUqoJ7H5SmUG02S3auro6Tu20KpVXJ9OQjWP7BEi5sTdmRId0mKkUVBU7&X-Amz-Signature=0ab772b0ffaaed58760ad19e7c0adf723a431434fd366a7f9a44cd3015c7bf27&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VDMZDX3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDvYrXRHx1WNz8edImgzv7qTTjk8MgEEot8d8kNCiH%2FJgIhALK22v2KlCNnS7slU64lL7cBZBV9qN2ozFjKtD2Vqxu6KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5lS1GbevHAOtKa3cq3APisL5u2yU0%2B8oCcmz8jY6OJJqDwaM54HnIpMNyXO7sh4251%2FJVbVB32KJYfbYL%2FmEa9YHHLQE4EblVsw8j6sGOt3mQitykgKtFSU8BohYvI7aiyu3zWELJ6Z5qh8AoAgJZ%2B3sJSKjXe1smgghahlfIY7lEmch5ZSbjCFQxpey%2B9LdxP6v22UBor%2BXSNUFeYmyhOEhhK%2F%2B3baBh8cbjuiQ%2BXasDAJfbT2IweWpFVnPZEdBL3DmkYIZED8rOj2hAx0tZPXbR5oNhcTCohKr1%2BSuDia3IulsQ1EW3Sf9HUV7eesOMngDYQCFWa%2B9KWSLcbUC3SWdRxtruH9ohmycYdnLPtWSpsl0aegsTuKItbZ4WIKlHQlLZE4pu3OqWc3e2jdecPAHlIIQJnZ6ekeZn5a1S9JX0QyW06dJ54Nkpj486NRx5cMLjBU39n1q0JedBkEdsYci4SeMVcrFrXHrOSWqEt%2BJjhdyfcxdNPpdH6pMMWP8JktFPHWM7a%2BKNyKCanFNZuLvwXLV%2FCcylNlUYUqwIVhhzWIvlFMhAbYexFLsrowypvEWm9tPLuMM%2BJzx6A7fUWIHT1aia4kNpRmW8wQU3MdxNoHm4dTKoKF1qYSzTyV8EyzjyYrDROlJZljCSp%2Bi%2FBjqkAZGLvxCZUvVozbVdNcINk3RRqx2Re9%2BL3BCUq445dwD2j%2FrF6r1OzShE2tNYoBLnEmkYQfiq1jVnVvtENNR5agB3C2H0UY3s57R%2BYpDUij5ATbfmbyUcQDOR96PdhejSUauSUSmVwV%2BkfZjhccc3RdROc6%2BbntyUhxEvUqoJ7H5SmUG02S3auro6Tu20KpVXJ9OQjWP7BEi5sTdmRId0mKkUVBU7&X-Amz-Signature=d36e04c8084938d4fe3b98c107db3db2381d891667b25dab1e039ac584cbd9a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VDMZDX3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDvYrXRHx1WNz8edImgzv7qTTjk8MgEEot8d8kNCiH%2FJgIhALK22v2KlCNnS7slU64lL7cBZBV9qN2ozFjKtD2Vqxu6KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5lS1GbevHAOtKa3cq3APisL5u2yU0%2B8oCcmz8jY6OJJqDwaM54HnIpMNyXO7sh4251%2FJVbVB32KJYfbYL%2FmEa9YHHLQE4EblVsw8j6sGOt3mQitykgKtFSU8BohYvI7aiyu3zWELJ6Z5qh8AoAgJZ%2B3sJSKjXe1smgghahlfIY7lEmch5ZSbjCFQxpey%2B9LdxP6v22UBor%2BXSNUFeYmyhOEhhK%2F%2B3baBh8cbjuiQ%2BXasDAJfbT2IweWpFVnPZEdBL3DmkYIZED8rOj2hAx0tZPXbR5oNhcTCohKr1%2BSuDia3IulsQ1EW3Sf9HUV7eesOMngDYQCFWa%2B9KWSLcbUC3SWdRxtruH9ohmycYdnLPtWSpsl0aegsTuKItbZ4WIKlHQlLZE4pu3OqWc3e2jdecPAHlIIQJnZ6ekeZn5a1S9JX0QyW06dJ54Nkpj486NRx5cMLjBU39n1q0JedBkEdsYci4SeMVcrFrXHrOSWqEt%2BJjhdyfcxdNPpdH6pMMWP8JktFPHWM7a%2BKNyKCanFNZuLvwXLV%2FCcylNlUYUqwIVhhzWIvlFMhAbYexFLsrowypvEWm9tPLuMM%2BJzx6A7fUWIHT1aia4kNpRmW8wQU3MdxNoHm4dTKoKF1qYSzTyV8EyzjyYrDROlJZljCSp%2Bi%2FBjqkAZGLvxCZUvVozbVdNcINk3RRqx2Re9%2BL3BCUq445dwD2j%2FrF6r1OzShE2tNYoBLnEmkYQfiq1jVnVvtENNR5agB3C2H0UY3s57R%2BYpDUij5ATbfmbyUcQDOR96PdhejSUauSUSmVwV%2BkfZjhccc3RdROc6%2BbntyUhxEvUqoJ7H5SmUG02S3auro6Tu20KpVXJ9OQjWP7BEi5sTdmRId0mKkUVBU7&X-Amz-Signature=c7a9d102218f8eb57e36797581e906592bbac7a4cf1b754246373e479f5132ea&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
