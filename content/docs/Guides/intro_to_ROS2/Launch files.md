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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZTDU2BE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCNB7X8SpyDq6guovbbrAT4N3GAPsEbt5TO%2Fne15f6zsQIhAP40RwyM0BS%2FL6ZUEhjv1Gd70Q14cmklcwYnIeMW8qEyKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8f5XXIqqRcvqmROkq3AMjx3zwHElCz3ZLR5v50Ctvk%2B4Za%2Fdos3zFW1HOd323YchsnJDCDCT4URHtjgRL6pq%2B0cGdzvREWLExFbwJMZmmncmy4NA7KwdoIzLCQTh8M2xeFD%2F5Z8eCrPht69f7tWoEpviMAs3imptkCMtFAmzlNHl%2FaUsZVjbgRjG1d9tx74LRtesQK25A1a796lvBooTpiBEA3hL%2FQDozvXltKVzF1%2FJUKzai6CoMf7mMV0vyqqWF1Ku8yIXOk%2FxCsJlbX%2FwAYYUBwC3QNEL9ZAXkBYwLyq2RiR3zFlZevmugfS3qcCx8sxZNqhp70fUFE4UUNBcppethPfuepcZl08QTRwqkmIDxSlI8Y69MqrhzAcx4Xrk49amCmEA7eaH3Ft0vNxD83GhBeKXuoCarCkmExm3r%2BpvGleU5JV%2FDyusOJoHzHp447FaWRJyxThoZHjnd10kdHvZkpzp4Zs9TH86uXltxzUE13aQPrXb3mEuYoWgZ70geG0hUxCEHaWRVJB%2FnAIC%2BvXVl2L6IjV86v%2FirkM0r1FPZ47iAu8KOuGIG2ebnyGhFIpm0wAsCHaWDtK4Fkx9Uw0yuKlJfxo0XZVi%2Bt8byP7NkkAjT6i2r%2BBpPu4pSJ4tSHso%2F2eDbZ2QFRzCUsO%2FBBjqkAbLsH2OGCU%2BtxYAGEWXcCBoNKMtIV1BcgKjpS%2BLjYXvkNwMGAlLFmTBqTUv9UoFqGWeKDwqLVIMnmN2X4mgq6XmwFqk6Gj5ZhBCtR8FUZhbdNGBitWDKNqHih6qQ0SeRFxcxg1rcPWYHqZ7MCirsyHA2gbsz3sFycfmAORcVNveheg2Rx76bIeaIaJJ6oi5txCxVTjO7Jd0izOjjo3LAst%2FA2N9o&X-Amz-Signature=cc7c0edce1e8b826e6c4f4584802e4468bb3aa2e2c5c3fc65a3967e6c714ec50&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZTDU2BE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCNB7X8SpyDq6guovbbrAT4N3GAPsEbt5TO%2Fne15f6zsQIhAP40RwyM0BS%2FL6ZUEhjv1Gd70Q14cmklcwYnIeMW8qEyKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8f5XXIqqRcvqmROkq3AMjx3zwHElCz3ZLR5v50Ctvk%2B4Za%2Fdos3zFW1HOd323YchsnJDCDCT4URHtjgRL6pq%2B0cGdzvREWLExFbwJMZmmncmy4NA7KwdoIzLCQTh8M2xeFD%2F5Z8eCrPht69f7tWoEpviMAs3imptkCMtFAmzlNHl%2FaUsZVjbgRjG1d9tx74LRtesQK25A1a796lvBooTpiBEA3hL%2FQDozvXltKVzF1%2FJUKzai6CoMf7mMV0vyqqWF1Ku8yIXOk%2FxCsJlbX%2FwAYYUBwC3QNEL9ZAXkBYwLyq2RiR3zFlZevmugfS3qcCx8sxZNqhp70fUFE4UUNBcppethPfuepcZl08QTRwqkmIDxSlI8Y69MqrhzAcx4Xrk49amCmEA7eaH3Ft0vNxD83GhBeKXuoCarCkmExm3r%2BpvGleU5JV%2FDyusOJoHzHp447FaWRJyxThoZHjnd10kdHvZkpzp4Zs9TH86uXltxzUE13aQPrXb3mEuYoWgZ70geG0hUxCEHaWRVJB%2FnAIC%2BvXVl2L6IjV86v%2FirkM0r1FPZ47iAu8KOuGIG2ebnyGhFIpm0wAsCHaWDtK4Fkx9Uw0yuKlJfxo0XZVi%2Bt8byP7NkkAjT6i2r%2BBpPu4pSJ4tSHso%2F2eDbZ2QFRzCUsO%2FBBjqkAbLsH2OGCU%2BtxYAGEWXcCBoNKMtIV1BcgKjpS%2BLjYXvkNwMGAlLFmTBqTUv9UoFqGWeKDwqLVIMnmN2X4mgq6XmwFqk6Gj5ZhBCtR8FUZhbdNGBitWDKNqHih6qQ0SeRFxcxg1rcPWYHqZ7MCirsyHA2gbsz3sFycfmAORcVNveheg2Rx76bIeaIaJJ6oi5txCxVTjO7Jd0izOjjo3LAst%2FA2N9o&X-Amz-Signature=ce93306d687d6d62a44de861a13ed8d91ee55a67546f9b185b58560f05d9fbf1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZTDU2BE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCNB7X8SpyDq6guovbbrAT4N3GAPsEbt5TO%2Fne15f6zsQIhAP40RwyM0BS%2FL6ZUEhjv1Gd70Q14cmklcwYnIeMW8qEyKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8f5XXIqqRcvqmROkq3AMjx3zwHElCz3ZLR5v50Ctvk%2B4Za%2Fdos3zFW1HOd323YchsnJDCDCT4URHtjgRL6pq%2B0cGdzvREWLExFbwJMZmmncmy4NA7KwdoIzLCQTh8M2xeFD%2F5Z8eCrPht69f7tWoEpviMAs3imptkCMtFAmzlNHl%2FaUsZVjbgRjG1d9tx74LRtesQK25A1a796lvBooTpiBEA3hL%2FQDozvXltKVzF1%2FJUKzai6CoMf7mMV0vyqqWF1Ku8yIXOk%2FxCsJlbX%2FwAYYUBwC3QNEL9ZAXkBYwLyq2RiR3zFlZevmugfS3qcCx8sxZNqhp70fUFE4UUNBcppethPfuepcZl08QTRwqkmIDxSlI8Y69MqrhzAcx4Xrk49amCmEA7eaH3Ft0vNxD83GhBeKXuoCarCkmExm3r%2BpvGleU5JV%2FDyusOJoHzHp447FaWRJyxThoZHjnd10kdHvZkpzp4Zs9TH86uXltxzUE13aQPrXb3mEuYoWgZ70geG0hUxCEHaWRVJB%2FnAIC%2BvXVl2L6IjV86v%2FirkM0r1FPZ47iAu8KOuGIG2ebnyGhFIpm0wAsCHaWDtK4Fkx9Uw0yuKlJfxo0XZVi%2Bt8byP7NkkAjT6i2r%2BBpPu4pSJ4tSHso%2F2eDbZ2QFRzCUsO%2FBBjqkAbLsH2OGCU%2BtxYAGEWXcCBoNKMtIV1BcgKjpS%2BLjYXvkNwMGAlLFmTBqTUv9UoFqGWeKDwqLVIMnmN2X4mgq6XmwFqk6Gj5ZhBCtR8FUZhbdNGBitWDKNqHih6qQ0SeRFxcxg1rcPWYHqZ7MCirsyHA2gbsz3sFycfmAORcVNveheg2Rx76bIeaIaJJ6oi5txCxVTjO7Jd0izOjjo3LAst%2FA2N9o&X-Amz-Signature=209f0857985129d33ad521a7c98971ea2c6d61eba7dfe31e20d49c026429509b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
