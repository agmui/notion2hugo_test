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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YC36MW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIAWX58O899BEn66z%2BRP2pF9uiRB6q9GBJSPlGkdm2cOxAiBXTQKkNgi9%2BdgQujONArGVusklIPCgx5mSxdY8IEOl5yqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7zSOTmrVlPl39IxRKtwDdUsaKPk%2BphNjrzmwAE4dVYLnf2W7ei%2BxrOPDiAQWjqzwBuvGFGZQvoTFU7j%2FKpPxsuWhlPW5Wv3AxvuXpu2dmcHffZYtOv4nwHtAldSP%2FSf7qb27Tew1H%2FRY3FqvjlaNnpZbNRdFMpYaUAT%2FnNxv0kgaO1DMmyx39v%2BYnVgJO5kAw0%2Ff1dQ%2F8TSE%2Fz2PFyVHz7OzcWkT6jQY6huzOXAc5T%2F6qr%2FXnWwOYUYBAQJFclTpqMrQpfMlOuqM%2Fn31%2Fze2Pa6FWPzKr%2BFVfTBNpQRrt7qv0C8Okw0dJUVRWl7ouhfRSIsLB3ZDkGySKioYk8M9idCZdtTGnFlV8Z9uJBYG6ruC%2B9V3ncl%2FUPs7Im1WQNZM7PjsiUIGc6%2Bb%2FkJhVf8YObjWbsNMtHUGG2WDc7a%2FUy9EYKQKenQbiVdTr5JK05VPIbp67uN3Y9SlPTSCxYnH125p9CFFL%2FRxCrotey4cMRMOYkN2VLLRkYrWX1QKAeETojqlZTQB5lwHz2NeCYgzlyT9eIjzmDDBuKyfjwa4G5BiX6LhX0XSknGG6QMRp0K7w58NmmWRMQWmoOC8pWv8jeVONoa%2B0GhBbtqgcU%2BcpktX4e8bzRW6Oy5zQhEqayK4u9NKa8EZ5poiPhcwsrLHwAY6pgGbQ0LPn7kLO9lUHP1yerhm%2FHUCVa%2FcvNp4tsFu8qKQor9qBfqUDq9rSpwI%2B%2BMCUxQJsQZj%2BZalmcUhkfBKID1Nenu7frmAn8t16wEOU7v2ZNurw9EZ57Wj41MEf9dbsWebN9p6%2F3O2PEhypJWFE9qoBYlq%2F9%2F77Jv9D38dMkwQ5MGwzWm8GegAXgreJxE%2Fw%2FrFKkC3jHVBE9hharz1Gh8RLd078UcC&X-Amz-Signature=539ba91fdb207f0dd56ba5b4558447fe4e988b32223e3207e5ba9d7867b5901e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YC36MW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIAWX58O899BEn66z%2BRP2pF9uiRB6q9GBJSPlGkdm2cOxAiBXTQKkNgi9%2BdgQujONArGVusklIPCgx5mSxdY8IEOl5yqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7zSOTmrVlPl39IxRKtwDdUsaKPk%2BphNjrzmwAE4dVYLnf2W7ei%2BxrOPDiAQWjqzwBuvGFGZQvoTFU7j%2FKpPxsuWhlPW5Wv3AxvuXpu2dmcHffZYtOv4nwHtAldSP%2FSf7qb27Tew1H%2FRY3FqvjlaNnpZbNRdFMpYaUAT%2FnNxv0kgaO1DMmyx39v%2BYnVgJO5kAw0%2Ff1dQ%2F8TSE%2Fz2PFyVHz7OzcWkT6jQY6huzOXAc5T%2F6qr%2FXnWwOYUYBAQJFclTpqMrQpfMlOuqM%2Fn31%2Fze2Pa6FWPzKr%2BFVfTBNpQRrt7qv0C8Okw0dJUVRWl7ouhfRSIsLB3ZDkGySKioYk8M9idCZdtTGnFlV8Z9uJBYG6ruC%2B9V3ncl%2FUPs7Im1WQNZM7PjsiUIGc6%2Bb%2FkJhVf8YObjWbsNMtHUGG2WDc7a%2FUy9EYKQKenQbiVdTr5JK05VPIbp67uN3Y9SlPTSCxYnH125p9CFFL%2FRxCrotey4cMRMOYkN2VLLRkYrWX1QKAeETojqlZTQB5lwHz2NeCYgzlyT9eIjzmDDBuKyfjwa4G5BiX6LhX0XSknGG6QMRp0K7w58NmmWRMQWmoOC8pWv8jeVONoa%2B0GhBbtqgcU%2BcpktX4e8bzRW6Oy5zQhEqayK4u9NKa8EZ5poiPhcwsrLHwAY6pgGbQ0LPn7kLO9lUHP1yerhm%2FHUCVa%2FcvNp4tsFu8qKQor9qBfqUDq9rSpwI%2B%2BMCUxQJsQZj%2BZalmcUhkfBKID1Nenu7frmAn8t16wEOU7v2ZNurw9EZ57Wj41MEf9dbsWebN9p6%2F3O2PEhypJWFE9qoBYlq%2F9%2F77Jv9D38dMkwQ5MGwzWm8GegAXgreJxE%2Fw%2FrFKkC3jHVBE9hharz1Gh8RLd078UcC&X-Amz-Signature=c34ff82307477202b0ec6623008e5ef2fb492899ec4e1696ca88efb60fc88b86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YC36MW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIAWX58O899BEn66z%2BRP2pF9uiRB6q9GBJSPlGkdm2cOxAiBXTQKkNgi9%2BdgQujONArGVusklIPCgx5mSxdY8IEOl5yqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7zSOTmrVlPl39IxRKtwDdUsaKPk%2BphNjrzmwAE4dVYLnf2W7ei%2BxrOPDiAQWjqzwBuvGFGZQvoTFU7j%2FKpPxsuWhlPW5Wv3AxvuXpu2dmcHffZYtOv4nwHtAldSP%2FSf7qb27Tew1H%2FRY3FqvjlaNnpZbNRdFMpYaUAT%2FnNxv0kgaO1DMmyx39v%2BYnVgJO5kAw0%2Ff1dQ%2F8TSE%2Fz2PFyVHz7OzcWkT6jQY6huzOXAc5T%2F6qr%2FXnWwOYUYBAQJFclTpqMrQpfMlOuqM%2Fn31%2Fze2Pa6FWPzKr%2BFVfTBNpQRrt7qv0C8Okw0dJUVRWl7ouhfRSIsLB3ZDkGySKioYk8M9idCZdtTGnFlV8Z9uJBYG6ruC%2B9V3ncl%2FUPs7Im1WQNZM7PjsiUIGc6%2Bb%2FkJhVf8YObjWbsNMtHUGG2WDc7a%2FUy9EYKQKenQbiVdTr5JK05VPIbp67uN3Y9SlPTSCxYnH125p9CFFL%2FRxCrotey4cMRMOYkN2VLLRkYrWX1QKAeETojqlZTQB5lwHz2NeCYgzlyT9eIjzmDDBuKyfjwa4G5BiX6LhX0XSknGG6QMRp0K7w58NmmWRMQWmoOC8pWv8jeVONoa%2B0GhBbtqgcU%2BcpktX4e8bzRW6Oy5zQhEqayK4u9NKa8EZ5poiPhcwsrLHwAY6pgGbQ0LPn7kLO9lUHP1yerhm%2FHUCVa%2FcvNp4tsFu8qKQor9qBfqUDq9rSpwI%2B%2BMCUxQJsQZj%2BZalmcUhkfBKID1Nenu7frmAn8t16wEOU7v2ZNurw9EZ57Wj41MEf9dbsWebN9p6%2F3O2PEhypJWFE9qoBYlq%2F9%2F77Jv9D38dMkwQ5MGwzWm8GegAXgreJxE%2Fw%2FrFKkC3jHVBE9hharz1Gh8RLd078UcC&X-Amz-Signature=1437ec936fa82df155a2c1428edcb79ac44009ced5aa764d1b5255665fe17534&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
