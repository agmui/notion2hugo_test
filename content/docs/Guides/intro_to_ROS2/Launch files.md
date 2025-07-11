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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTAZRQ4P%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpjqOwR9LFsW1BrXuhjrWRwCd1YCOG1JuJAS%2FBZ67ueAiEA2liol4HijJuc01hcBIW5VtVWkd2dFG79rK7xaZ5OrHgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMLAcnioWuHOp3tPyrcA3My9zwwbqUk4woHLGMUHrbN70NHtwZ%2BoXCp4qvuD5SJajv%2BxDcblohYHomUc%2FDDOCx29ZnBLzmwiLQmjxqNlcS2S2YjFmod5R0Q%2F5B7w5AaETP16HZGWklyogXg3rEJHGxgslvYt38naZqFmpGjP%2BuOu3Mj%2FPXmG2myv1kBbtmaOAfqO7SMmRe9qjuKzrmNhHQVdliRZSzaa4gY6hLgByl4kTLWsawevtu3Cgf8Fi%2F0Z%2BJ2fvCAsipNeXenq1PpICeVazEWC80tLtq2KNaOc4e8iEQgBhla8G%2FUGeKS1mwJipTxt3El7oCUH6Z8xW3sAKwzG3dgDXRYl4gD3gMQzAWWeHW15PKEomKO7qp8Iz18prnfpGIk%2BayIN2Qw8%2B%2FHlC%2FREcr5XP4ZGvmSOAcdfOCCXQtTjSeyKv53Jc5PG7kOda1nToV4RnSK%2BHkvRG8fugixwf2ydr7Qw9NJTAN9neGSYZPnXMpOKyeWiEGrQnHg0pxGnOdytoldOyl%2BD4f2iF9lXXGokg5qjcK%2B5Dur2ubPyJ8WkNo7N0QO6zmru0bu2Et5VyYJb057xG4iSeX2lbs53bATjA7%2Bqe5lFznISNc30Ax7OiGf3qWvZNXT6m0TbF4cSiT97G6wzkXqMKvVxcMGOqUBGJymQ6UW0sar2SkM8lsKNDCJT0GDu81HJcQrrhGEa1isByefFRYCC2jE1J8OwiBSmtVmVWIryj0e4fHmcC9LfWzPbY1SOiQNuSy8X%2BU0xkMt1jCo56lnx0FE1o%2BnGC3gI1ucKD%2B7KREKj%2FeV4MlvtPs3I6u%2FuYC%2FqivBJcbMpxEo2JJ1MPgfEffvzWo6ipg370qiR9wq%2FPPOgrVbEdR2hM6cCYir&X-Amz-Signature=27cf736c7b2c866e619c0be5ff06209215590522b7a8d024fc480c9900c137bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTAZRQ4P%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpjqOwR9LFsW1BrXuhjrWRwCd1YCOG1JuJAS%2FBZ67ueAiEA2liol4HijJuc01hcBIW5VtVWkd2dFG79rK7xaZ5OrHgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMLAcnioWuHOp3tPyrcA3My9zwwbqUk4woHLGMUHrbN70NHtwZ%2BoXCp4qvuD5SJajv%2BxDcblohYHomUc%2FDDOCx29ZnBLzmwiLQmjxqNlcS2S2YjFmod5R0Q%2F5B7w5AaETP16HZGWklyogXg3rEJHGxgslvYt38naZqFmpGjP%2BuOu3Mj%2FPXmG2myv1kBbtmaOAfqO7SMmRe9qjuKzrmNhHQVdliRZSzaa4gY6hLgByl4kTLWsawevtu3Cgf8Fi%2F0Z%2BJ2fvCAsipNeXenq1PpICeVazEWC80tLtq2KNaOc4e8iEQgBhla8G%2FUGeKS1mwJipTxt3El7oCUH6Z8xW3sAKwzG3dgDXRYl4gD3gMQzAWWeHW15PKEomKO7qp8Iz18prnfpGIk%2BayIN2Qw8%2B%2FHlC%2FREcr5XP4ZGvmSOAcdfOCCXQtTjSeyKv53Jc5PG7kOda1nToV4RnSK%2BHkvRG8fugixwf2ydr7Qw9NJTAN9neGSYZPnXMpOKyeWiEGrQnHg0pxGnOdytoldOyl%2BD4f2iF9lXXGokg5qjcK%2B5Dur2ubPyJ8WkNo7N0QO6zmru0bu2Et5VyYJb057xG4iSeX2lbs53bATjA7%2Bqe5lFznISNc30Ax7OiGf3qWvZNXT6m0TbF4cSiT97G6wzkXqMKvVxcMGOqUBGJymQ6UW0sar2SkM8lsKNDCJT0GDu81HJcQrrhGEa1isByefFRYCC2jE1J8OwiBSmtVmVWIryj0e4fHmcC9LfWzPbY1SOiQNuSy8X%2BU0xkMt1jCo56lnx0FE1o%2BnGC3gI1ucKD%2B7KREKj%2FeV4MlvtPs3I6u%2FuYC%2FqivBJcbMpxEo2JJ1MPgfEffvzWo6ipg370qiR9wq%2FPPOgrVbEdR2hM6cCYir&X-Amz-Signature=613e4ff703e0dba835ef1bea2444dbcd2b51253ce521d7e9672aae794df91f7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTAZRQ4P%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpjqOwR9LFsW1BrXuhjrWRwCd1YCOG1JuJAS%2FBZ67ueAiEA2liol4HijJuc01hcBIW5VtVWkd2dFG79rK7xaZ5OrHgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMLAcnioWuHOp3tPyrcA3My9zwwbqUk4woHLGMUHrbN70NHtwZ%2BoXCp4qvuD5SJajv%2BxDcblohYHomUc%2FDDOCx29ZnBLzmwiLQmjxqNlcS2S2YjFmod5R0Q%2F5B7w5AaETP16HZGWklyogXg3rEJHGxgslvYt38naZqFmpGjP%2BuOu3Mj%2FPXmG2myv1kBbtmaOAfqO7SMmRe9qjuKzrmNhHQVdliRZSzaa4gY6hLgByl4kTLWsawevtu3Cgf8Fi%2F0Z%2BJ2fvCAsipNeXenq1PpICeVazEWC80tLtq2KNaOc4e8iEQgBhla8G%2FUGeKS1mwJipTxt3El7oCUH6Z8xW3sAKwzG3dgDXRYl4gD3gMQzAWWeHW15PKEomKO7qp8Iz18prnfpGIk%2BayIN2Qw8%2B%2FHlC%2FREcr5XP4ZGvmSOAcdfOCCXQtTjSeyKv53Jc5PG7kOda1nToV4RnSK%2BHkvRG8fugixwf2ydr7Qw9NJTAN9neGSYZPnXMpOKyeWiEGrQnHg0pxGnOdytoldOyl%2BD4f2iF9lXXGokg5qjcK%2B5Dur2ubPyJ8WkNo7N0QO6zmru0bu2Et5VyYJb057xG4iSeX2lbs53bATjA7%2Bqe5lFznISNc30Ax7OiGf3qWvZNXT6m0TbF4cSiT97G6wzkXqMKvVxcMGOqUBGJymQ6UW0sar2SkM8lsKNDCJT0GDu81HJcQrrhGEa1isByefFRYCC2jE1J8OwiBSmtVmVWIryj0e4fHmcC9LfWzPbY1SOiQNuSy8X%2BU0xkMt1jCo56lnx0FE1o%2BnGC3gI1ucKD%2B7KREKj%2FeV4MlvtPs3I6u%2FuYC%2FqivBJcbMpxEo2JJ1MPgfEffvzWo6ipg370qiR9wq%2FPPOgrVbEdR2hM6cCYir&X-Amz-Signature=06e6c673b42e0503ad24ba430fe81710151182b1b4da52cba88c19c9c9ec9bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
