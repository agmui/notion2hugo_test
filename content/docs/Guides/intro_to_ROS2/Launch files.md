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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CAWMMHK%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0Bquu5Ct17ANzfXo4HMcDRJmz1mop%2BNzJaFg3k7norAiA2CSDPrZnLirhfkfD7z1522rOE6algfjntjwtnFkPmPCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYHWSJp%2FmwPAR%2BIDbKtwDITzBK%2Fi5mZUJ6lFD8y33NPdAo1q4iY%2FNwTmWdDPVxVDHkCpCQ4FF20UvTCQYqrZm1qTXnglDPU7Ax6iJrI2XH8U4ZeTo0qZxxmvg1HU8BTVIIN5MvPCjNWgid4IcIWy3hzoXz1CA0nrRc4kasVx2L77XEVFbkyQfZfKdmh0wwCSd7PENDAoYGR%2BCUGaTyn3MYVvapxgZWn9cVbYuw1xvotnZxgcvA%2FyDD0WadKm3UjEbFCs4sWuvO1kkYnhxn0M6jDQj8G92n0bzIofJ5QPyNHaox%2BywhGF%2FOhnIkWE2MRra7UIKMQHQFY85Nhex7OA%2F2kYFtpcE7J8Ybz3KRoDl0ttH3jBN0KMT438ZD1AWLF5E5O1teF2DJCA4ORP6xid3VUPaUL2oh3zQ2eox9ZJioPyjsQ%2BmDSge%2FnBuGbMu7vShVcqHYF5C9AWxN7JjRPuA%2BueocPT5k2KLEMjmS%2B8ifdQyaWwF%2BhOJ%2BFtc6JqPcmGKEKoXZhP96O7KDTcS0XZ5ccFIQNZM7pCCijrHQdzEAvODqdIz%2FiAHyBVvEt8%2FO63jaWtp9H%2BsMdx5zr8jSeFglV%2FEs5h%2BnIOWQYXFJFol8AtXxJGImHrIMwMe0NYYSzw8xMetaWjc500ai5gwpvbawQY6pgGVpSM5cR0Bcwtxj3znJD%2F9Naa5%2FbA8JxBoNRx0944d%2FmYoHcB92alLwn32e%2FjTgS5rhN7AspHwUSH9L3IMLYhq1A9Fa5XjaDtFYu22m3GEGTDY%2Bt9Z5v3XujenV9ey0HWVLW6InjUbx9EFhZ%2B0IOTpD2trt6PpRoOh31AM5qDnKfMRFH6jGrmGJIh9KVMji8%2FjVwdf4OjR6fbRF8%2B49gfGXLT%2BoYt2&X-Amz-Signature=f2714e315a4ef4b24afce525e2877cdcd9b294b3be3043320dcecacbd667b282&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CAWMMHK%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0Bquu5Ct17ANzfXo4HMcDRJmz1mop%2BNzJaFg3k7norAiA2CSDPrZnLirhfkfD7z1522rOE6algfjntjwtnFkPmPCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYHWSJp%2FmwPAR%2BIDbKtwDITzBK%2Fi5mZUJ6lFD8y33NPdAo1q4iY%2FNwTmWdDPVxVDHkCpCQ4FF20UvTCQYqrZm1qTXnglDPU7Ax6iJrI2XH8U4ZeTo0qZxxmvg1HU8BTVIIN5MvPCjNWgid4IcIWy3hzoXz1CA0nrRc4kasVx2L77XEVFbkyQfZfKdmh0wwCSd7PENDAoYGR%2BCUGaTyn3MYVvapxgZWn9cVbYuw1xvotnZxgcvA%2FyDD0WadKm3UjEbFCs4sWuvO1kkYnhxn0M6jDQj8G92n0bzIofJ5QPyNHaox%2BywhGF%2FOhnIkWE2MRra7UIKMQHQFY85Nhex7OA%2F2kYFtpcE7J8Ybz3KRoDl0ttH3jBN0KMT438ZD1AWLF5E5O1teF2DJCA4ORP6xid3VUPaUL2oh3zQ2eox9ZJioPyjsQ%2BmDSge%2FnBuGbMu7vShVcqHYF5C9AWxN7JjRPuA%2BueocPT5k2KLEMjmS%2B8ifdQyaWwF%2BhOJ%2BFtc6JqPcmGKEKoXZhP96O7KDTcS0XZ5ccFIQNZM7pCCijrHQdzEAvODqdIz%2FiAHyBVvEt8%2FO63jaWtp9H%2BsMdx5zr8jSeFglV%2FEs5h%2BnIOWQYXFJFol8AtXxJGImHrIMwMe0NYYSzw8xMetaWjc500ai5gwpvbawQY6pgGVpSM5cR0Bcwtxj3znJD%2F9Naa5%2FbA8JxBoNRx0944d%2FmYoHcB92alLwn32e%2FjTgS5rhN7AspHwUSH9L3IMLYhq1A9Fa5XjaDtFYu22m3GEGTDY%2Bt9Z5v3XujenV9ey0HWVLW6InjUbx9EFhZ%2B0IOTpD2trt6PpRoOh31AM5qDnKfMRFH6jGrmGJIh9KVMji8%2FjVwdf4OjR6fbRF8%2B49gfGXLT%2BoYt2&X-Amz-Signature=cc74f6cc337249b721df9d43c6b5859402b9b5f99b5316fd96d7d04e3d7501e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CAWMMHK%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0Bquu5Ct17ANzfXo4HMcDRJmz1mop%2BNzJaFg3k7norAiA2CSDPrZnLirhfkfD7z1522rOE6algfjntjwtnFkPmPCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYHWSJp%2FmwPAR%2BIDbKtwDITzBK%2Fi5mZUJ6lFD8y33NPdAo1q4iY%2FNwTmWdDPVxVDHkCpCQ4FF20UvTCQYqrZm1qTXnglDPU7Ax6iJrI2XH8U4ZeTo0qZxxmvg1HU8BTVIIN5MvPCjNWgid4IcIWy3hzoXz1CA0nrRc4kasVx2L77XEVFbkyQfZfKdmh0wwCSd7PENDAoYGR%2BCUGaTyn3MYVvapxgZWn9cVbYuw1xvotnZxgcvA%2FyDD0WadKm3UjEbFCs4sWuvO1kkYnhxn0M6jDQj8G92n0bzIofJ5QPyNHaox%2BywhGF%2FOhnIkWE2MRra7UIKMQHQFY85Nhex7OA%2F2kYFtpcE7J8Ybz3KRoDl0ttH3jBN0KMT438ZD1AWLF5E5O1teF2DJCA4ORP6xid3VUPaUL2oh3zQ2eox9ZJioPyjsQ%2BmDSge%2FnBuGbMu7vShVcqHYF5C9AWxN7JjRPuA%2BueocPT5k2KLEMjmS%2B8ifdQyaWwF%2BhOJ%2BFtc6JqPcmGKEKoXZhP96O7KDTcS0XZ5ccFIQNZM7pCCijrHQdzEAvODqdIz%2FiAHyBVvEt8%2FO63jaWtp9H%2BsMdx5zr8jSeFglV%2FEs5h%2BnIOWQYXFJFol8AtXxJGImHrIMwMe0NYYSzw8xMetaWjc500ai5gwpvbawQY6pgGVpSM5cR0Bcwtxj3znJD%2F9Naa5%2FbA8JxBoNRx0944d%2FmYoHcB92alLwn32e%2FjTgS5rhN7AspHwUSH9L3IMLYhq1A9Fa5XjaDtFYu22m3GEGTDY%2Bt9Z5v3XujenV9ey0HWVLW6InjUbx9EFhZ%2B0IOTpD2trt6PpRoOh31AM5qDnKfMRFH6jGrmGJIh9KVMji8%2FjVwdf4OjR6fbRF8%2B49gfGXLT%2BoYt2&X-Amz-Signature=626e13c82bb8f24f3c400f67cdd7d3a8ab87bf75ce7eb9834283e6df07e9d3a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
