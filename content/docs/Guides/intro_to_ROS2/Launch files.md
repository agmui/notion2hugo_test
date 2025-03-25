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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662KAWPOG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVHfbFBei%2Fp12Fp0ZzXcYyyXb%2BKqDznpeK7%2Brnj6QvYAiBNXOfqd8SJU0OuU5jIUg76aRhviV77bjSuORuMsvdluyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFynHoSy%2BI4s8BG6FKtwDB%2FRLoxhbE4CcFvXbv%2FxGFxkPyPFPn7k8nKx%2BBOwFYo7DlRSA%2FIdCB%2B8pEXRd9lS4sphz6WNa11BOozp%2FNF1Ykxo%2FQFcRtk2L1cTZh4TjmXy8AvdyDaQVzdmsj24UJ0qCEIhLg7hOZe9Cay9DyKUj7Y48MmnQMlVdtDMgpqh1yGCzHESvDx7wvbAxk2LCkNDa0UHqx%2FT0zJI2ivNjZXuz8%2FqyO6oI669gls9Vw%2B4I6rNSrmco4geKkZTwl8rjNBBQjOR443blXzh1u6zHOSRcQqg9z4yIPkMi35r3ot7oqPAw9w8gGljpBA98czHoWRNDSLg4iRf44dqFx5ywyFN8h%2FoZF8y9c7cAdGyBIJEJBzgFujTrvwTbxmqE%2BO1mIqv%2BuqA28qDVl6P5XPQ7Nlt4cuggAf0AqtZU9AiuKkM6SGzyQjh%2F19S%2BUAlj5HDUo4tZvAk1dKfP5kls4iq%2BzCWL7OGbCB%2FJ0XxgGszVIgY9FPbWQndiPxcqLOcq4WR9%2FyPcKn3YOGXGGxhVCDs4SD1oUk%2BpJ7sNeBGrWhchHsER%2B54zuy7NnBglM3F1wRDTPPCd%2FUd0Oecc2tLvLuLiCd4vZmWNt%2Bwb9qFloCpQZtsMtnFZGzkyC9zcomfPLSgwjJeIvwY6pgE6G5aF37g4alEZjQl%2BI50MUAoSlXiLvyy08xH3xx25mWZU8kreVJriJQQhVaFIxDZjn%2B1vd6Hpfeb3q21S2bKtO2IFH9Fg0HxPqPAj9lrjd60TqlIzrMf%2BQlllEOKOq9eIxgd%2BJWCF2Ba3gfdW1JugV2bVZJQ%2FvbNY15QXgPsfKpe3cr0JZ7oIAPwJzyeChzmFYN2pbLqdtTL9ybbz4K2cOZfxjtxT&X-Amz-Signature=c146202367512883d0f2d10112dd3320a2cb87135601fc8622a992618bdef2a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662KAWPOG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVHfbFBei%2Fp12Fp0ZzXcYyyXb%2BKqDznpeK7%2Brnj6QvYAiBNXOfqd8SJU0OuU5jIUg76aRhviV77bjSuORuMsvdluyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFynHoSy%2BI4s8BG6FKtwDB%2FRLoxhbE4CcFvXbv%2FxGFxkPyPFPn7k8nKx%2BBOwFYo7DlRSA%2FIdCB%2B8pEXRd9lS4sphz6WNa11BOozp%2FNF1Ykxo%2FQFcRtk2L1cTZh4TjmXy8AvdyDaQVzdmsj24UJ0qCEIhLg7hOZe9Cay9DyKUj7Y48MmnQMlVdtDMgpqh1yGCzHESvDx7wvbAxk2LCkNDa0UHqx%2FT0zJI2ivNjZXuz8%2FqyO6oI669gls9Vw%2B4I6rNSrmco4geKkZTwl8rjNBBQjOR443blXzh1u6zHOSRcQqg9z4yIPkMi35r3ot7oqPAw9w8gGljpBA98czHoWRNDSLg4iRf44dqFx5ywyFN8h%2FoZF8y9c7cAdGyBIJEJBzgFujTrvwTbxmqE%2BO1mIqv%2BuqA28qDVl6P5XPQ7Nlt4cuggAf0AqtZU9AiuKkM6SGzyQjh%2F19S%2BUAlj5HDUo4tZvAk1dKfP5kls4iq%2BzCWL7OGbCB%2FJ0XxgGszVIgY9FPbWQndiPxcqLOcq4WR9%2FyPcKn3YOGXGGxhVCDs4SD1oUk%2BpJ7sNeBGrWhchHsER%2B54zuy7NnBglM3F1wRDTPPCd%2FUd0Oecc2tLvLuLiCd4vZmWNt%2Bwb9qFloCpQZtsMtnFZGzkyC9zcomfPLSgwjJeIvwY6pgE6G5aF37g4alEZjQl%2BI50MUAoSlXiLvyy08xH3xx25mWZU8kreVJriJQQhVaFIxDZjn%2B1vd6Hpfeb3q21S2bKtO2IFH9Fg0HxPqPAj9lrjd60TqlIzrMf%2BQlllEOKOq9eIxgd%2BJWCF2Ba3gfdW1JugV2bVZJQ%2FvbNY15QXgPsfKpe3cr0JZ7oIAPwJzyeChzmFYN2pbLqdtTL9ybbz4K2cOZfxjtxT&X-Amz-Signature=dde6e08d8523219e164601137b3eb04cadc67f6b1d59959927ccf1c5e066e3b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662KAWPOG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVHfbFBei%2Fp12Fp0ZzXcYyyXb%2BKqDznpeK7%2Brnj6QvYAiBNXOfqd8SJU0OuU5jIUg76aRhviV77bjSuORuMsvdluyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFynHoSy%2BI4s8BG6FKtwDB%2FRLoxhbE4CcFvXbv%2FxGFxkPyPFPn7k8nKx%2BBOwFYo7DlRSA%2FIdCB%2B8pEXRd9lS4sphz6WNa11BOozp%2FNF1Ykxo%2FQFcRtk2L1cTZh4TjmXy8AvdyDaQVzdmsj24UJ0qCEIhLg7hOZe9Cay9DyKUj7Y48MmnQMlVdtDMgpqh1yGCzHESvDx7wvbAxk2LCkNDa0UHqx%2FT0zJI2ivNjZXuz8%2FqyO6oI669gls9Vw%2B4I6rNSrmco4geKkZTwl8rjNBBQjOR443blXzh1u6zHOSRcQqg9z4yIPkMi35r3ot7oqPAw9w8gGljpBA98czHoWRNDSLg4iRf44dqFx5ywyFN8h%2FoZF8y9c7cAdGyBIJEJBzgFujTrvwTbxmqE%2BO1mIqv%2BuqA28qDVl6P5XPQ7Nlt4cuggAf0AqtZU9AiuKkM6SGzyQjh%2F19S%2BUAlj5HDUo4tZvAk1dKfP5kls4iq%2BzCWL7OGbCB%2FJ0XxgGszVIgY9FPbWQndiPxcqLOcq4WR9%2FyPcKn3YOGXGGxhVCDs4SD1oUk%2BpJ7sNeBGrWhchHsER%2B54zuy7NnBglM3F1wRDTPPCd%2FUd0Oecc2tLvLuLiCd4vZmWNt%2Bwb9qFloCpQZtsMtnFZGzkyC9zcomfPLSgwjJeIvwY6pgE6G5aF37g4alEZjQl%2BI50MUAoSlXiLvyy08xH3xx25mWZU8kreVJriJQQhVaFIxDZjn%2B1vd6Hpfeb3q21S2bKtO2IFH9Fg0HxPqPAj9lrjd60TqlIzrMf%2BQlllEOKOq9eIxgd%2BJWCF2Ba3gfdW1JugV2bVZJQ%2FvbNY15QXgPsfKpe3cr0JZ7oIAPwJzyeChzmFYN2pbLqdtTL9ybbz4K2cOZfxjtxT&X-Amz-Signature=4471a88a4407db7d13b288995d64ac1273df84d79e3871632082a5e7f66577cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
