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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZUDZRXI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCUVL7MK4MC6l8KnjKdHNisYjbV4yMAPSROBHTsMclksAIgdkM00%2F3fUIQk1OmRR4U0i3wP0D2aY4u%2BFPG4hNHaJYkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDGDK1ED%2FGBogQTGaEircA7VhN51l4vCL8DRZ%2BY5Id3jqDau78kGq6Wu99nFfoYbnAdMSiNGJobaDTV7hUFt6R%2F%2BFXXxEDifswm3msMd9gaK%2BmMIxkIKsMnz4tO3VxklNsVrSSIY5S%2FWZ3J0%2BEHT8jdyw3G5A8h5GHjFy9TXRq2Lo9DYxKhtfVtvoU%2BD4zX68txbju66sDy5PRyV8uEcqUHMTdQlcHrGmbhk0Seh5bCRWUFzesBcF1Vr%2FqhDHkdS6zH5rqGtz3w06RE7I98%2FPz%2BHRjDLbtBKjSWjMKy2nbWg8IAhZIWuM8V41zmSK8sZVlkHLj9C7UVBwL75HAEqhU5ha6%2Ff0Y3Zy3BKBSl0s1i0fqWxk9Jxn%2Fl1y5SKcGM%2F3JFSzhoyV9yQ5SC3HWgOwvaZl5sYCOJHQpBvZx7t7P%2F8loZ1wCkwuAUQjD6GAzNCX%2F2ATSAexwTT5SGlu6y6CE1faTljn8%2F8Y5wurZaSt9hGqG2823h0lq6U16SXmq04mdWQVwdqevNU2oTLR0iDT21CXSdQ9HiAq0%2Bt%2BqkwfaOMVHkMuZuCzchgN3suLKlBtpQl0stYT9R71LJtA0rZvVwkQoKarVhIEbZ3smvBJBQFkVX440NRJ0k%2BFdbw8wVjSrMSpdKjF3hTNhRPDMMvm%2B8EGOqUBGr0%2BZ9qb1JYd06LHzZdq8m1pqWt8L4YHKgtrpDDEA14EJ%2BRuI0F33nzMyQz%2F6bhJn7icRPmqZZTIHG87IzCkdqdg2iuIOhqxuw3RlJZpD3ogeDVyLrzXwr2qaGwmgaxpTrKJriOMoWraZVqY2LUyusbgLHWgeLsUcNnJMKnd%2FZoZz161e7TMEGJFyVfg8RTORzoq%2B0N6eYtEGvriBRjsR8VUWDZ8&X-Amz-Signature=31cb73cb068b96821be576efec84e18084c8ec8ad0d4da4eabf8b56d2a93e9c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZUDZRXI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCUVL7MK4MC6l8KnjKdHNisYjbV4yMAPSROBHTsMclksAIgdkM00%2F3fUIQk1OmRR4U0i3wP0D2aY4u%2BFPG4hNHaJYkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDGDK1ED%2FGBogQTGaEircA7VhN51l4vCL8DRZ%2BY5Id3jqDau78kGq6Wu99nFfoYbnAdMSiNGJobaDTV7hUFt6R%2F%2BFXXxEDifswm3msMd9gaK%2BmMIxkIKsMnz4tO3VxklNsVrSSIY5S%2FWZ3J0%2BEHT8jdyw3G5A8h5GHjFy9TXRq2Lo9DYxKhtfVtvoU%2BD4zX68txbju66sDy5PRyV8uEcqUHMTdQlcHrGmbhk0Seh5bCRWUFzesBcF1Vr%2FqhDHkdS6zH5rqGtz3w06RE7I98%2FPz%2BHRjDLbtBKjSWjMKy2nbWg8IAhZIWuM8V41zmSK8sZVlkHLj9C7UVBwL75HAEqhU5ha6%2Ff0Y3Zy3BKBSl0s1i0fqWxk9Jxn%2Fl1y5SKcGM%2F3JFSzhoyV9yQ5SC3HWgOwvaZl5sYCOJHQpBvZx7t7P%2F8loZ1wCkwuAUQjD6GAzNCX%2F2ATSAexwTT5SGlu6y6CE1faTljn8%2F8Y5wurZaSt9hGqG2823h0lq6U16SXmq04mdWQVwdqevNU2oTLR0iDT21CXSdQ9HiAq0%2Bt%2BqkwfaOMVHkMuZuCzchgN3suLKlBtpQl0stYT9R71LJtA0rZvVwkQoKarVhIEbZ3smvBJBQFkVX440NRJ0k%2BFdbw8wVjSrMSpdKjF3hTNhRPDMMvm%2B8EGOqUBGr0%2BZ9qb1JYd06LHzZdq8m1pqWt8L4YHKgtrpDDEA14EJ%2BRuI0F33nzMyQz%2F6bhJn7icRPmqZZTIHG87IzCkdqdg2iuIOhqxuw3RlJZpD3ogeDVyLrzXwr2qaGwmgaxpTrKJriOMoWraZVqY2LUyusbgLHWgeLsUcNnJMKnd%2FZoZz161e7TMEGJFyVfg8RTORzoq%2B0N6eYtEGvriBRjsR8VUWDZ8&X-Amz-Signature=025538f600a425ed91f2aae00aa009e65e26205a89be9e8b95895cc2d3b54bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZUDZRXI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCUVL7MK4MC6l8KnjKdHNisYjbV4yMAPSROBHTsMclksAIgdkM00%2F3fUIQk1OmRR4U0i3wP0D2aY4u%2BFPG4hNHaJYkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDGDK1ED%2FGBogQTGaEircA7VhN51l4vCL8DRZ%2BY5Id3jqDau78kGq6Wu99nFfoYbnAdMSiNGJobaDTV7hUFt6R%2F%2BFXXxEDifswm3msMd9gaK%2BmMIxkIKsMnz4tO3VxklNsVrSSIY5S%2FWZ3J0%2BEHT8jdyw3G5A8h5GHjFy9TXRq2Lo9DYxKhtfVtvoU%2BD4zX68txbju66sDy5PRyV8uEcqUHMTdQlcHrGmbhk0Seh5bCRWUFzesBcF1Vr%2FqhDHkdS6zH5rqGtz3w06RE7I98%2FPz%2BHRjDLbtBKjSWjMKy2nbWg8IAhZIWuM8V41zmSK8sZVlkHLj9C7UVBwL75HAEqhU5ha6%2Ff0Y3Zy3BKBSl0s1i0fqWxk9Jxn%2Fl1y5SKcGM%2F3JFSzhoyV9yQ5SC3HWgOwvaZl5sYCOJHQpBvZx7t7P%2F8loZ1wCkwuAUQjD6GAzNCX%2F2ATSAexwTT5SGlu6y6CE1faTljn8%2F8Y5wurZaSt9hGqG2823h0lq6U16SXmq04mdWQVwdqevNU2oTLR0iDT21CXSdQ9HiAq0%2Bt%2BqkwfaOMVHkMuZuCzchgN3suLKlBtpQl0stYT9R71LJtA0rZvVwkQoKarVhIEbZ3smvBJBQFkVX440NRJ0k%2BFdbw8wVjSrMSpdKjF3hTNhRPDMMvm%2B8EGOqUBGr0%2BZ9qb1JYd06LHzZdq8m1pqWt8L4YHKgtrpDDEA14EJ%2BRuI0F33nzMyQz%2F6bhJn7icRPmqZZTIHG87IzCkdqdg2iuIOhqxuw3RlJZpD3ogeDVyLrzXwr2qaGwmgaxpTrKJriOMoWraZVqY2LUyusbgLHWgeLsUcNnJMKnd%2FZoZz161e7TMEGJFyVfg8RTORzoq%2B0N6eYtEGvriBRjsR8VUWDZ8&X-Amz-Signature=e41da544f6a9908e615cba116194849a068a3082e0b491baf99a776c4991c3c6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
