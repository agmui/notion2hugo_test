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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KDDPYCJ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDsktYUXjyl3ISblCskiHVbenq4H5UQxobFia8oeG64TQIgJn1f4rN2I7WliIha4sboEaTZIoG5sGcO%2BLCr1krkkUUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8ooxUfzMKze4dhuyrcA4WJB3EQb4mIWN8bIcdwX879zseXuDuIFbgsSKgAA2CF0%2F0p337kryTlOBIxccW0uJJFS8cBv%2BlLKL3fM3xHBEz5QhmHaajRdRgJQQlRfvdRN8JDC8hJiYk1px%2FQFUZaCy5HLVSBDLGzKbLHQh7Gm%2FojVacUtpk0Cbzi1DpoOmJizcKrgaMw5mTeoA9vBwLddQr4TScm%2B4loInLsRNv%2F4K4llZvaCb2VXSrxZyF9s0lfD2B8jIvpCNT3E%2B5%2Bc9ZpYQUsOKoyWllWwbSF3Aj9zFtyO3TfS9zQgfnDyfU4gxUyR%2ByJ6ZYR2LAiptk0nPRZ%2FA9pn4vEdlzpZvVJgW%2Ble7k5M%2BSa7NVWMmAj1bcJ3FAFLR4yW3gDzE7%2ByqQRWUB8XpbTFfe6ytnWW4rHnXClCafOeSZwoTOamI7en3Ji4RCz%2Bx0qzFsIPNg5iMUyh5uSE7rB%2FJQ0KL1gj7y8VnEYC93vlL8182aoHjisE8BVk1Mq8A1EYukAmwkpMePigjOo7RS6ID6uryTOaMk7cRkWYJOV7T2fCZEBhNJzQY2dkDc6uSDD41CX%2BC8fnPOh5k2Gf96cdO3nxotaH4tRbc5x3YAoOWJmD8Xl4aO3dXHvArTSKpQ3AUvRi1zMpK5eMK%2FYoMAGOqUB%2FaEzFG%2BtfUb8LSbcM43%2B%2BAsHgHst62KqBg%2FQ6f0G%2FVjnqKAuBOa4KCX6h4XB1kIYGbrKI8fDrczn8PgavtRlfkNsmiEiNmEQtSFRNWgPGETgprV2e%2FRYbWzR744wxkIgxVOTbTWlI4La35xfhtotgg%2FQJ1tCReaqIT08YmmXvtOSGs%2BB6pHnNRDbYJNQnUNyjx7wZrOlAcAXQ8MbVhJQGUYAqwuY&X-Amz-Signature=38eeeba3603b70a456231eb5aa4b5527faa24b486c38a0007c4ea8634cb47251&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KDDPYCJ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDsktYUXjyl3ISblCskiHVbenq4H5UQxobFia8oeG64TQIgJn1f4rN2I7WliIha4sboEaTZIoG5sGcO%2BLCr1krkkUUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8ooxUfzMKze4dhuyrcA4WJB3EQb4mIWN8bIcdwX879zseXuDuIFbgsSKgAA2CF0%2F0p337kryTlOBIxccW0uJJFS8cBv%2BlLKL3fM3xHBEz5QhmHaajRdRgJQQlRfvdRN8JDC8hJiYk1px%2FQFUZaCy5HLVSBDLGzKbLHQh7Gm%2FojVacUtpk0Cbzi1DpoOmJizcKrgaMw5mTeoA9vBwLddQr4TScm%2B4loInLsRNv%2F4K4llZvaCb2VXSrxZyF9s0lfD2B8jIvpCNT3E%2B5%2Bc9ZpYQUsOKoyWllWwbSF3Aj9zFtyO3TfS9zQgfnDyfU4gxUyR%2ByJ6ZYR2LAiptk0nPRZ%2FA9pn4vEdlzpZvVJgW%2Ble7k5M%2BSa7NVWMmAj1bcJ3FAFLR4yW3gDzE7%2ByqQRWUB8XpbTFfe6ytnWW4rHnXClCafOeSZwoTOamI7en3Ji4RCz%2Bx0qzFsIPNg5iMUyh5uSE7rB%2FJQ0KL1gj7y8VnEYC93vlL8182aoHjisE8BVk1Mq8A1EYukAmwkpMePigjOo7RS6ID6uryTOaMk7cRkWYJOV7T2fCZEBhNJzQY2dkDc6uSDD41CX%2BC8fnPOh5k2Gf96cdO3nxotaH4tRbc5x3YAoOWJmD8Xl4aO3dXHvArTSKpQ3AUvRi1zMpK5eMK%2FYoMAGOqUB%2FaEzFG%2BtfUb8LSbcM43%2B%2BAsHgHst62KqBg%2FQ6f0G%2FVjnqKAuBOa4KCX6h4XB1kIYGbrKI8fDrczn8PgavtRlfkNsmiEiNmEQtSFRNWgPGETgprV2e%2FRYbWzR744wxkIgxVOTbTWlI4La35xfhtotgg%2FQJ1tCReaqIT08YmmXvtOSGs%2BB6pHnNRDbYJNQnUNyjx7wZrOlAcAXQ8MbVhJQGUYAqwuY&X-Amz-Signature=e8d9ba7046698c033a97c563c707daeea7398a65ffaef113bf2753437ab976d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KDDPYCJ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDsktYUXjyl3ISblCskiHVbenq4H5UQxobFia8oeG64TQIgJn1f4rN2I7WliIha4sboEaTZIoG5sGcO%2BLCr1krkkUUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8ooxUfzMKze4dhuyrcA4WJB3EQb4mIWN8bIcdwX879zseXuDuIFbgsSKgAA2CF0%2F0p337kryTlOBIxccW0uJJFS8cBv%2BlLKL3fM3xHBEz5QhmHaajRdRgJQQlRfvdRN8JDC8hJiYk1px%2FQFUZaCy5HLVSBDLGzKbLHQh7Gm%2FojVacUtpk0Cbzi1DpoOmJizcKrgaMw5mTeoA9vBwLddQr4TScm%2B4loInLsRNv%2F4K4llZvaCb2VXSrxZyF9s0lfD2B8jIvpCNT3E%2B5%2Bc9ZpYQUsOKoyWllWwbSF3Aj9zFtyO3TfS9zQgfnDyfU4gxUyR%2ByJ6ZYR2LAiptk0nPRZ%2FA9pn4vEdlzpZvVJgW%2Ble7k5M%2BSa7NVWMmAj1bcJ3FAFLR4yW3gDzE7%2ByqQRWUB8XpbTFfe6ytnWW4rHnXClCafOeSZwoTOamI7en3Ji4RCz%2Bx0qzFsIPNg5iMUyh5uSE7rB%2FJQ0KL1gj7y8VnEYC93vlL8182aoHjisE8BVk1Mq8A1EYukAmwkpMePigjOo7RS6ID6uryTOaMk7cRkWYJOV7T2fCZEBhNJzQY2dkDc6uSDD41CX%2BC8fnPOh5k2Gf96cdO3nxotaH4tRbc5x3YAoOWJmD8Xl4aO3dXHvArTSKpQ3AUvRi1zMpK5eMK%2FYoMAGOqUB%2FaEzFG%2BtfUb8LSbcM43%2B%2BAsHgHst62KqBg%2FQ6f0G%2FVjnqKAuBOa4KCX6h4XB1kIYGbrKI8fDrczn8PgavtRlfkNsmiEiNmEQtSFRNWgPGETgprV2e%2FRYbWzR744wxkIgxVOTbTWlI4La35xfhtotgg%2FQJ1tCReaqIT08YmmXvtOSGs%2BB6pHnNRDbYJNQnUNyjx7wZrOlAcAXQ8MbVhJQGUYAqwuY&X-Amz-Signature=b636ebdd7eca197e146f0ba532299d2182a145e1a44a80a11151116e52cfe416&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
