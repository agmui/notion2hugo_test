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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQCBEZGW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPEFeY6%2BAxGL%2BJXWgFN57DlahEQk%2B2GkgJYOkbw5QigwIhAING9Owi8ZQ%2BHrZuWSlY6gnKCchTveVW1B4aXSLWr8%2F%2FKv8DCGEQABoMNjM3NDIzMTgzODA1IgwVJTg%2BOEERpfsoAOAq3AOXY3PycezsfjBfwJm%2FqugG9zAnYDMj0i9UADdcZ8Bf0sFU0dn3veILBkQQTxYY%2FDi6wem4IGDm4AvmmXiFv%2BUcLqeAoFAnMknChF0wq0FgLXyDKhgACqz5QJuSrlLnFp4J0ZMq9a8Kk4WvBK2dfyk5FOUf3ujJUIexs3VS9%2FD5phIMI3jK5GG3AK%2BiLE7FlSnl2zhSZT0j4kBfRjNNsRVyW2SYd1LCgwznwo6IIPBHGvUbMl9ZCWMurTHO%2B%2FIMESdZ%2BHFF3U5AoWAFT9klVe2zc0xqc719hSBrA6i0FXH4FIbif0fcJ7ujSbxhwlIuQR%2B5V23biQmUTb0oycFa6vH70U9s3AGE01aqDCm%2FLvlXfYgCWHcIIqZW7OPPVof1O9hiJKAOTzLUS5R7hIX53vz20pZli%2BjbBOtPlAktMQV%2BQ9qYM9j0UWUvzsw9jdwy8rjxQPJCvEZI%2BAzG4eKvk4O0LhdHEDbncVdK1CexBCUN3Dmdv9EEV9WmXzbYs%2B1w1ffHq90D6OPWO%2BdsVnb8Ji9T9Jv2HPYbiqfrGxNI%2FXCcWrRMCLfLgtpe6TICjiwomtA%2F3iIaEovwyVaQTRpebuS4EHGxxFm%2B1%2Bk4FVaCZht%2Bzdr8dNgTNwvJUneW5zCA1qLBBjqkAX7tVSLsnoLyYDbOUkXd7EAxtDiamJd920j5UOX4vle7sXAUrUMp%2FrjO%2Fvk9AR5Zq1AWpk9OnpRGW0u3pXTW75rH2dDFHjMxAZ0UY18ch%2BQ7wEAMlbebJ3zGk4DxZIkRi1N2n1jm5mokqwtKICwpM5AWrOCRDPAAh9SYJKoZcrH8ny7Dipf%2B3nO882ksNeJdG9sPFUBSot%2BCnx2lms44SsdZzUB5&X-Amz-Signature=c384b2201d63c58bae1d559fdd427c0b1d7bb3d685615f662432ab1e2d9347d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQCBEZGW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPEFeY6%2BAxGL%2BJXWgFN57DlahEQk%2B2GkgJYOkbw5QigwIhAING9Owi8ZQ%2BHrZuWSlY6gnKCchTveVW1B4aXSLWr8%2F%2FKv8DCGEQABoMNjM3NDIzMTgzODA1IgwVJTg%2BOEERpfsoAOAq3AOXY3PycezsfjBfwJm%2FqugG9zAnYDMj0i9UADdcZ8Bf0sFU0dn3veILBkQQTxYY%2FDi6wem4IGDm4AvmmXiFv%2BUcLqeAoFAnMknChF0wq0FgLXyDKhgACqz5QJuSrlLnFp4J0ZMq9a8Kk4WvBK2dfyk5FOUf3ujJUIexs3VS9%2FD5phIMI3jK5GG3AK%2BiLE7FlSnl2zhSZT0j4kBfRjNNsRVyW2SYd1LCgwznwo6IIPBHGvUbMl9ZCWMurTHO%2B%2FIMESdZ%2BHFF3U5AoWAFT9klVe2zc0xqc719hSBrA6i0FXH4FIbif0fcJ7ujSbxhwlIuQR%2B5V23biQmUTb0oycFa6vH70U9s3AGE01aqDCm%2FLvlXfYgCWHcIIqZW7OPPVof1O9hiJKAOTzLUS5R7hIX53vz20pZli%2BjbBOtPlAktMQV%2BQ9qYM9j0UWUvzsw9jdwy8rjxQPJCvEZI%2BAzG4eKvk4O0LhdHEDbncVdK1CexBCUN3Dmdv9EEV9WmXzbYs%2B1w1ffHq90D6OPWO%2BdsVnb8Ji9T9Jv2HPYbiqfrGxNI%2FXCcWrRMCLfLgtpe6TICjiwomtA%2F3iIaEovwyVaQTRpebuS4EHGxxFm%2B1%2Bk4FVaCZht%2Bzdr8dNgTNwvJUneW5zCA1qLBBjqkAX7tVSLsnoLyYDbOUkXd7EAxtDiamJd920j5UOX4vle7sXAUrUMp%2FrjO%2Fvk9AR5Zq1AWpk9OnpRGW0u3pXTW75rH2dDFHjMxAZ0UY18ch%2BQ7wEAMlbebJ3zGk4DxZIkRi1N2n1jm5mokqwtKICwpM5AWrOCRDPAAh9SYJKoZcrH8ny7Dipf%2B3nO882ksNeJdG9sPFUBSot%2BCnx2lms44SsdZzUB5&X-Amz-Signature=8f55b7739b0f3857dfa5c9f834e9d04f3b4729c21ee5dadcba722292166d61b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQCBEZGW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPEFeY6%2BAxGL%2BJXWgFN57DlahEQk%2B2GkgJYOkbw5QigwIhAING9Owi8ZQ%2BHrZuWSlY6gnKCchTveVW1B4aXSLWr8%2F%2FKv8DCGEQABoMNjM3NDIzMTgzODA1IgwVJTg%2BOEERpfsoAOAq3AOXY3PycezsfjBfwJm%2FqugG9zAnYDMj0i9UADdcZ8Bf0sFU0dn3veILBkQQTxYY%2FDi6wem4IGDm4AvmmXiFv%2BUcLqeAoFAnMknChF0wq0FgLXyDKhgACqz5QJuSrlLnFp4J0ZMq9a8Kk4WvBK2dfyk5FOUf3ujJUIexs3VS9%2FD5phIMI3jK5GG3AK%2BiLE7FlSnl2zhSZT0j4kBfRjNNsRVyW2SYd1LCgwznwo6IIPBHGvUbMl9ZCWMurTHO%2B%2FIMESdZ%2BHFF3U5AoWAFT9klVe2zc0xqc719hSBrA6i0FXH4FIbif0fcJ7ujSbxhwlIuQR%2B5V23biQmUTb0oycFa6vH70U9s3AGE01aqDCm%2FLvlXfYgCWHcIIqZW7OPPVof1O9hiJKAOTzLUS5R7hIX53vz20pZli%2BjbBOtPlAktMQV%2BQ9qYM9j0UWUvzsw9jdwy8rjxQPJCvEZI%2BAzG4eKvk4O0LhdHEDbncVdK1CexBCUN3Dmdv9EEV9WmXzbYs%2B1w1ffHq90D6OPWO%2BdsVnb8Ji9T9Jv2HPYbiqfrGxNI%2FXCcWrRMCLfLgtpe6TICjiwomtA%2F3iIaEovwyVaQTRpebuS4EHGxxFm%2B1%2Bk4FVaCZht%2Bzdr8dNgTNwvJUneW5zCA1qLBBjqkAX7tVSLsnoLyYDbOUkXd7EAxtDiamJd920j5UOX4vle7sXAUrUMp%2FrjO%2Fvk9AR5Zq1AWpk9OnpRGW0u3pXTW75rH2dDFHjMxAZ0UY18ch%2BQ7wEAMlbebJ3zGk4DxZIkRi1N2n1jm5mokqwtKICwpM5AWrOCRDPAAh9SYJKoZcrH8ny7Dipf%2B3nO882ksNeJdG9sPFUBSot%2BCnx2lms44SsdZzUB5&X-Amz-Signature=90ea3ea8f233ec629f0988855d96b0865871ad4735ac41391fb4562198ee2df7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
