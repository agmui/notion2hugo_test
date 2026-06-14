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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFELL7QP%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDC1iw60J0D553Mk1ITCe9UyECkGRnhC6OAqlOs%2BkW5YgIhAOO9GjlRs%2F3bMdeoli4yjWG6pE9rxm9rN7bNBgI%2BmGS9Kv8DCDsQABoMNjM3NDIzMTgzODA1IgzT%2FDFzHkGHMLoXvu8q3ANavgji%2B1AtDBIbsNtB8XNAy0wKHZtJ%2FSl%2F8eRBtof%2BGqfh%2BKmoihxcuBMuTHdtjqk%2FLgjxaDL5vndm8nc%2BV0WcEkqddfKSRFEAzGEMzDYhFVReAvqYpTWD7LkXivR1RUpQMF1mTHxM1GD1ZFjGciDH6DAKd3yQelduHFpyJ6nDWihOI6LrkRW6X0ZhQ8gDSiWPwa5oqqG7ywumiUCDgweZjPKhFVxuytJFukbbo2bk0AVQ%2B5IQb9tkV29Q8RheupPZgH%2B3EFXRAYjyKitLXDWcJkXAn4B9B%2BYX2I7EvuK%2FuXueVO21z2K1cnnMxxKDnQ4Hy%2BMYnfAtmaz4d2%2FtXxA7niknYN7sqK96%2FtKPyTXYgkcfs5f4QoQB4vbsQvvAIQN%2BQNkzP6eOFdAbg9b5GJBIdzyJWwW%2FEhXKwrqzUVfVyPpILSsX9V60Om9u9%2FjRzS1gzOS29MNF8sIPze0qYk55cSkWjwbfQx0AlVWmBYcMYJcV0L1Cf2anRZuUobUY0I3UEiz7otFb8gcgoS7rWBM9ZQoZKV%2FHJFjrgV6ycBXS4Z43xzjRTYdp0h9Kw1XGnVFsHvcxiTwpgah5qzcZyXgYUbkilm%2FS%2Bj3XYLuT56BmOdeSLx7AX3EqPtYlezDInLjRBjqkAdw8oNSypngjO8FXRhtoXMJw3mnvHdHFKsTFlu42PBk5zTA4p2Nc52Aj%2B6C0R2I4rdTuAqRS46pNJra0XCb%2BKM6E6jskFA%2BoKCyqLy0uvPqzPynTPYUdsraMbitB5gPR3ejzY31bdUBlb8ZzDzKngLvWqNRh0mILRv0wPBwVbYAbgcrRAQGAp8w%2F5F9l7HhoTWWUriwkTiggsV4U1c8Uv2kPwHa5&X-Amz-Signature=0dc1dbdd6441003cf32e7f4159485a4208c01383dd8c0b50c83b7ce1fa1b8e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFELL7QP%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDC1iw60J0D553Mk1ITCe9UyECkGRnhC6OAqlOs%2BkW5YgIhAOO9GjlRs%2F3bMdeoli4yjWG6pE9rxm9rN7bNBgI%2BmGS9Kv8DCDsQABoMNjM3NDIzMTgzODA1IgzT%2FDFzHkGHMLoXvu8q3ANavgji%2B1AtDBIbsNtB8XNAy0wKHZtJ%2FSl%2F8eRBtof%2BGqfh%2BKmoihxcuBMuTHdtjqk%2FLgjxaDL5vndm8nc%2BV0WcEkqddfKSRFEAzGEMzDYhFVReAvqYpTWD7LkXivR1RUpQMF1mTHxM1GD1ZFjGciDH6DAKd3yQelduHFpyJ6nDWihOI6LrkRW6X0ZhQ8gDSiWPwa5oqqG7ywumiUCDgweZjPKhFVxuytJFukbbo2bk0AVQ%2B5IQb9tkV29Q8RheupPZgH%2B3EFXRAYjyKitLXDWcJkXAn4B9B%2BYX2I7EvuK%2FuXueVO21z2K1cnnMxxKDnQ4Hy%2BMYnfAtmaz4d2%2FtXxA7niknYN7sqK96%2FtKPyTXYgkcfs5f4QoQB4vbsQvvAIQN%2BQNkzP6eOFdAbg9b5GJBIdzyJWwW%2FEhXKwrqzUVfVyPpILSsX9V60Om9u9%2FjRzS1gzOS29MNF8sIPze0qYk55cSkWjwbfQx0AlVWmBYcMYJcV0L1Cf2anRZuUobUY0I3UEiz7otFb8gcgoS7rWBM9ZQoZKV%2FHJFjrgV6ycBXS4Z43xzjRTYdp0h9Kw1XGnVFsHvcxiTwpgah5qzcZyXgYUbkilm%2FS%2Bj3XYLuT56BmOdeSLx7AX3EqPtYlezDInLjRBjqkAdw8oNSypngjO8FXRhtoXMJw3mnvHdHFKsTFlu42PBk5zTA4p2Nc52Aj%2B6C0R2I4rdTuAqRS46pNJra0XCb%2BKM6E6jskFA%2BoKCyqLy0uvPqzPynTPYUdsraMbitB5gPR3ejzY31bdUBlb8ZzDzKngLvWqNRh0mILRv0wPBwVbYAbgcrRAQGAp8w%2F5F9l7HhoTWWUriwkTiggsV4U1c8Uv2kPwHa5&X-Amz-Signature=c197f1249ded09f5aaab1b63ce4d15f805f36999e96257fc6f9084e2c51d34ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFELL7QP%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDC1iw60J0D553Mk1ITCe9UyECkGRnhC6OAqlOs%2BkW5YgIhAOO9GjlRs%2F3bMdeoli4yjWG6pE9rxm9rN7bNBgI%2BmGS9Kv8DCDsQABoMNjM3NDIzMTgzODA1IgzT%2FDFzHkGHMLoXvu8q3ANavgji%2B1AtDBIbsNtB8XNAy0wKHZtJ%2FSl%2F8eRBtof%2BGqfh%2BKmoihxcuBMuTHdtjqk%2FLgjxaDL5vndm8nc%2BV0WcEkqddfKSRFEAzGEMzDYhFVReAvqYpTWD7LkXivR1RUpQMF1mTHxM1GD1ZFjGciDH6DAKd3yQelduHFpyJ6nDWihOI6LrkRW6X0ZhQ8gDSiWPwa5oqqG7ywumiUCDgweZjPKhFVxuytJFukbbo2bk0AVQ%2B5IQb9tkV29Q8RheupPZgH%2B3EFXRAYjyKitLXDWcJkXAn4B9B%2BYX2I7EvuK%2FuXueVO21z2K1cnnMxxKDnQ4Hy%2BMYnfAtmaz4d2%2FtXxA7niknYN7sqK96%2FtKPyTXYgkcfs5f4QoQB4vbsQvvAIQN%2BQNkzP6eOFdAbg9b5GJBIdzyJWwW%2FEhXKwrqzUVfVyPpILSsX9V60Om9u9%2FjRzS1gzOS29MNF8sIPze0qYk55cSkWjwbfQx0AlVWmBYcMYJcV0L1Cf2anRZuUobUY0I3UEiz7otFb8gcgoS7rWBM9ZQoZKV%2FHJFjrgV6ycBXS4Z43xzjRTYdp0h9Kw1XGnVFsHvcxiTwpgah5qzcZyXgYUbkilm%2FS%2Bj3XYLuT56BmOdeSLx7AX3EqPtYlezDInLjRBjqkAdw8oNSypngjO8FXRhtoXMJw3mnvHdHFKsTFlu42PBk5zTA4p2Nc52Aj%2B6C0R2I4rdTuAqRS46pNJra0XCb%2BKM6E6jskFA%2BoKCyqLy0uvPqzPynTPYUdsraMbitB5gPR3ejzY31bdUBlb8ZzDzKngLvWqNRh0mILRv0wPBwVbYAbgcrRAQGAp8w%2F5F9l7HhoTWWUriwkTiggsV4U1c8Uv2kPwHa5&X-Amz-Signature=630ba4cca5d56303ccc9369479aa75021a4974518227ec95e5c48212128bc7da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
