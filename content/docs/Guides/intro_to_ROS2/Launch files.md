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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQZQSZK%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEJGOzJyV7vPxFdD%2BJynuI4%2BkghkdA7oeKFxwucMzt6MAiEA9Rrex2jmQrQWJ9tV%2B2%2F9bZWsso%2BOCBjnojuWFlmoodsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH%2Fz0HwfXQbpUBNuxircA%2FzNqEGaaA4gImqJF5oUKYmYgv9%2FTbyFSOF2Kza107js%2F49BDpHu6Idqauv8wCVkRQE7%2FQweyTksTtW%2FvO5FNaAS%2B232A06iqaFxJBKx7jWiU%2BAe%2F2QdAS5kZVLl3ZorFs4Q%2BWwEj3R6Mr5ngmkKIeh3YMs4NmWfU24hm0Kv8yOrUTuatcF3EmTUNn6C%2B%2F4jcUnM4I0fHs0bZPLt6sPp6NjoS0ybJJ4l5bGpMj2e6FSNoXHlHao0KYj2KMzEuUW%2Bh9Mci6VjibY1nGOC%2FfiRZ%2FUZvnDFD6HXlCX3KkCt2GVLElR6UUwciFT%2B9hUXbKEdcKEJmExSDcGh01hRKqTigVRUSOnymfRK0%2B3V8jR9P1RzhtnSPkrByizmNsIdMymhWqQIe5kDwmNcTGzSFNjsfF%2Fbl7iFm7KI8UnmUB6tWXPEWvWZRlyve%2FacZg55N7%2F0FwulWB7B%2BqOGavziS3v9RVlkGWDXwZi1Seyo7W02z2n1fx4gG6HFdOp25MeIzMIVyQ4ZMmrgK4cGDFzfnQFliVMcnjNRagaEJRCpxbM%2FphK8Jrqlcbf3k27AjoMbUSMZBD%2FGwiS07l3%2Fza%2BLu7YVYnIi8z1yd2L9Siyy58AK3D%2FFz6dSp0cgXMhIwsDbMIa8rM4GOqUB7JxdodUjcD3%2FHooo5HRqBS5WQtVO5T8GyWvjwWlnnyGgU9CEX77Gx3KF4JbklcnGy7QrfMD6lxT%2Fch0I48L2x6Bj3QtEwpSocG6%2FnLjWHvVfgIn7n0iXwXNd18wOisJClBuoFzmIITqnBMJSy8jM4eKavm2721Bjb97hJ6pUkfE05ZgOA6T47f%2B%2BoW2uhixm1P1b%2FqnVwV0uEt%2BT%2FGiMP6CHhZTH&X-Amz-Signature=c2d0d691ad6d2b7c2f97a42b00a9cb40ce2012c8ca2f861c7487256ff7a9d002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQZQSZK%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEJGOzJyV7vPxFdD%2BJynuI4%2BkghkdA7oeKFxwucMzt6MAiEA9Rrex2jmQrQWJ9tV%2B2%2F9bZWsso%2BOCBjnojuWFlmoodsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH%2Fz0HwfXQbpUBNuxircA%2FzNqEGaaA4gImqJF5oUKYmYgv9%2FTbyFSOF2Kza107js%2F49BDpHu6Idqauv8wCVkRQE7%2FQweyTksTtW%2FvO5FNaAS%2B232A06iqaFxJBKx7jWiU%2BAe%2F2QdAS5kZVLl3ZorFs4Q%2BWwEj3R6Mr5ngmkKIeh3YMs4NmWfU24hm0Kv8yOrUTuatcF3EmTUNn6C%2B%2F4jcUnM4I0fHs0bZPLt6sPp6NjoS0ybJJ4l5bGpMj2e6FSNoXHlHao0KYj2KMzEuUW%2Bh9Mci6VjibY1nGOC%2FfiRZ%2FUZvnDFD6HXlCX3KkCt2GVLElR6UUwciFT%2B9hUXbKEdcKEJmExSDcGh01hRKqTigVRUSOnymfRK0%2B3V8jR9P1RzhtnSPkrByizmNsIdMymhWqQIe5kDwmNcTGzSFNjsfF%2Fbl7iFm7KI8UnmUB6tWXPEWvWZRlyve%2FacZg55N7%2F0FwulWB7B%2BqOGavziS3v9RVlkGWDXwZi1Seyo7W02z2n1fx4gG6HFdOp25MeIzMIVyQ4ZMmrgK4cGDFzfnQFliVMcnjNRagaEJRCpxbM%2FphK8Jrqlcbf3k27AjoMbUSMZBD%2FGwiS07l3%2Fza%2BLu7YVYnIi8z1yd2L9Siyy58AK3D%2FFz6dSp0cgXMhIwsDbMIa8rM4GOqUB7JxdodUjcD3%2FHooo5HRqBS5WQtVO5T8GyWvjwWlnnyGgU9CEX77Gx3KF4JbklcnGy7QrfMD6lxT%2Fch0I48L2x6Bj3QtEwpSocG6%2FnLjWHvVfgIn7n0iXwXNd18wOisJClBuoFzmIITqnBMJSy8jM4eKavm2721Bjb97hJ6pUkfE05ZgOA6T47f%2B%2BoW2uhixm1P1b%2FqnVwV0uEt%2BT%2FGiMP6CHhZTH&X-Amz-Signature=e7a629f98f627e0d1de6e91fb812a5083749b55be227ee3b2ef9a6ad51a0de05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQZQSZK%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEJGOzJyV7vPxFdD%2BJynuI4%2BkghkdA7oeKFxwucMzt6MAiEA9Rrex2jmQrQWJ9tV%2B2%2F9bZWsso%2BOCBjnojuWFlmoodsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDH%2Fz0HwfXQbpUBNuxircA%2FzNqEGaaA4gImqJF5oUKYmYgv9%2FTbyFSOF2Kza107js%2F49BDpHu6Idqauv8wCVkRQE7%2FQweyTksTtW%2FvO5FNaAS%2B232A06iqaFxJBKx7jWiU%2BAe%2F2QdAS5kZVLl3ZorFs4Q%2BWwEj3R6Mr5ngmkKIeh3YMs4NmWfU24hm0Kv8yOrUTuatcF3EmTUNn6C%2B%2F4jcUnM4I0fHs0bZPLt6sPp6NjoS0ybJJ4l5bGpMj2e6FSNoXHlHao0KYj2KMzEuUW%2Bh9Mci6VjibY1nGOC%2FfiRZ%2FUZvnDFD6HXlCX3KkCt2GVLElR6UUwciFT%2B9hUXbKEdcKEJmExSDcGh01hRKqTigVRUSOnymfRK0%2B3V8jR9P1RzhtnSPkrByizmNsIdMymhWqQIe5kDwmNcTGzSFNjsfF%2Fbl7iFm7KI8UnmUB6tWXPEWvWZRlyve%2FacZg55N7%2F0FwulWB7B%2BqOGavziS3v9RVlkGWDXwZi1Seyo7W02z2n1fx4gG6HFdOp25MeIzMIVyQ4ZMmrgK4cGDFzfnQFliVMcnjNRagaEJRCpxbM%2FphK8Jrqlcbf3k27AjoMbUSMZBD%2FGwiS07l3%2Fza%2BLu7YVYnIi8z1yd2L9Siyy58AK3D%2FFz6dSp0cgXMhIwsDbMIa8rM4GOqUB7JxdodUjcD3%2FHooo5HRqBS5WQtVO5T8GyWvjwWlnnyGgU9CEX77Gx3KF4JbklcnGy7QrfMD6lxT%2Fch0I48L2x6Bj3QtEwpSocG6%2FnLjWHvVfgIn7n0iXwXNd18wOisJClBuoFzmIITqnBMJSy8jM4eKavm2721Bjb97hJ6pUkfE05ZgOA6T47f%2B%2BoW2uhixm1P1b%2FqnVwV0uEt%2BT%2FGiMP6CHhZTH&X-Amz-Signature=5178727c45b0452abc02a6c63df413eb797a28c19960ee70352afa9e07f947eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
