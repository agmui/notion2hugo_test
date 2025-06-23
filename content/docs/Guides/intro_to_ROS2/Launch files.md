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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466452IFRYI%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCx1uXs9J7PWEHFYzwGt4vmbaWNmDEL6DgdotImq3yDDgIgE%2BBfc0UKUshJZNsQKmSnrhUouu7nz4bbObwRSV6nQOwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKKroTZEuGwViO4yQyrcAyuaAMA1bDuqOwEdQ4uj4cGtocbhMuMt4VLhOFBp0fMBHJQgHNxbU7THBCBU8TJXQms%2FojQJsJBiIGkB3z%2F1R97i2j0xFUDPOfIkWn64nRl99gnsQjiLBhvRw8F%2BpfEw%2BIeLj4t5QnjN5ydFIlH0Z4W59Yu8Bo8Es3RDhYFmTxw79wNDQoP0Y7FPzgH0hEM4iSoAG6tenwrwTwmnerio4VcOBu%2F%2FD4EybqzE%2BU%2BevN5e7MIMdfzXZkIyG%2BcgpR4kNK%2FzmuKCpMZfjz2MkymEIISbNzCAZtzSZSZGajgAQ93iFP%2BrcsZ%2FJA%2Bb4SZ8YcXKMbZl2%2FnLhq83Jd0o9vrhjymb5Kv%2FC9ceUrdGa7akFO96ZyIZUJMdIeYYC32k8GfuBeAmXsLlM%2BobPOLhB%2BilTi4gb0T8uQV3yH4ogJqQVD1bQrwGWcmXkTyfhDjJyXUwFVFTkDFrkEK8ttlbYKXNXN9DGIQDMIyOuWEIh27XFcWOCjg3j0yKKq0jCGAb0uCkZkJ2QXiw%2Bax3rgsYG7TrXwIhF6Q2D1YsMUN3xaUgCJOevMzC3OgX%2FtnyTTQe9fvgvciAfKylTjKSnHfgTkK1zVVWU%2FBKMCc1dsY0TJ0ulvwYBM11n0WbMzR57vSTMLKz58IGOqUBNNEwXH5CvttATlxkUzcRRZtzGQSF6FEGyfC%2BpZzpqa%2FCgmKdYtN93Ehr%2FNQxnQUwghGOVgGGwgzBzdVchWXR3mbiCOxIhC9hlTkcMf%2BaTZya6xo%2FdOMRYYTNgSlhY7etdVsAYFww%2FdQ6L8eExDrqQ%2BSkM2%2FeJ25VWikpsn7d%2BottoCZFUUfL6XerV8cbLidA799tQiIfT%2BSgv7ly8Bmd%2BnnyKSQ6&X-Amz-Signature=cbd3a736921a87021b54914e1d55c500f35ff243c97dfe4eb61bbe8f739bfaa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466452IFRYI%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCx1uXs9J7PWEHFYzwGt4vmbaWNmDEL6DgdotImq3yDDgIgE%2BBfc0UKUshJZNsQKmSnrhUouu7nz4bbObwRSV6nQOwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKKroTZEuGwViO4yQyrcAyuaAMA1bDuqOwEdQ4uj4cGtocbhMuMt4VLhOFBp0fMBHJQgHNxbU7THBCBU8TJXQms%2FojQJsJBiIGkB3z%2F1R97i2j0xFUDPOfIkWn64nRl99gnsQjiLBhvRw8F%2BpfEw%2BIeLj4t5QnjN5ydFIlH0Z4W59Yu8Bo8Es3RDhYFmTxw79wNDQoP0Y7FPzgH0hEM4iSoAG6tenwrwTwmnerio4VcOBu%2F%2FD4EybqzE%2BU%2BevN5e7MIMdfzXZkIyG%2BcgpR4kNK%2FzmuKCpMZfjz2MkymEIISbNzCAZtzSZSZGajgAQ93iFP%2BrcsZ%2FJA%2Bb4SZ8YcXKMbZl2%2FnLhq83Jd0o9vrhjymb5Kv%2FC9ceUrdGa7akFO96ZyIZUJMdIeYYC32k8GfuBeAmXsLlM%2BobPOLhB%2BilTi4gb0T8uQV3yH4ogJqQVD1bQrwGWcmXkTyfhDjJyXUwFVFTkDFrkEK8ttlbYKXNXN9DGIQDMIyOuWEIh27XFcWOCjg3j0yKKq0jCGAb0uCkZkJ2QXiw%2Bax3rgsYG7TrXwIhF6Q2D1YsMUN3xaUgCJOevMzC3OgX%2FtnyTTQe9fvgvciAfKylTjKSnHfgTkK1zVVWU%2FBKMCc1dsY0TJ0ulvwYBM11n0WbMzR57vSTMLKz58IGOqUBNNEwXH5CvttATlxkUzcRRZtzGQSF6FEGyfC%2BpZzpqa%2FCgmKdYtN93Ehr%2FNQxnQUwghGOVgGGwgzBzdVchWXR3mbiCOxIhC9hlTkcMf%2BaTZya6xo%2FdOMRYYTNgSlhY7etdVsAYFww%2FdQ6L8eExDrqQ%2BSkM2%2FeJ25VWikpsn7d%2BottoCZFUUfL6XerV8cbLidA799tQiIfT%2BSgv7ly8Bmd%2BnnyKSQ6&X-Amz-Signature=93880c1196301eadfff7640a8229772e087d17fd7e4e918081b404d6dda10777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466452IFRYI%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCx1uXs9J7PWEHFYzwGt4vmbaWNmDEL6DgdotImq3yDDgIgE%2BBfc0UKUshJZNsQKmSnrhUouu7nz4bbObwRSV6nQOwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKKroTZEuGwViO4yQyrcAyuaAMA1bDuqOwEdQ4uj4cGtocbhMuMt4VLhOFBp0fMBHJQgHNxbU7THBCBU8TJXQms%2FojQJsJBiIGkB3z%2F1R97i2j0xFUDPOfIkWn64nRl99gnsQjiLBhvRw8F%2BpfEw%2BIeLj4t5QnjN5ydFIlH0Z4W59Yu8Bo8Es3RDhYFmTxw79wNDQoP0Y7FPzgH0hEM4iSoAG6tenwrwTwmnerio4VcOBu%2F%2FD4EybqzE%2BU%2BevN5e7MIMdfzXZkIyG%2BcgpR4kNK%2FzmuKCpMZfjz2MkymEIISbNzCAZtzSZSZGajgAQ93iFP%2BrcsZ%2FJA%2Bb4SZ8YcXKMbZl2%2FnLhq83Jd0o9vrhjymb5Kv%2FC9ceUrdGa7akFO96ZyIZUJMdIeYYC32k8GfuBeAmXsLlM%2BobPOLhB%2BilTi4gb0T8uQV3yH4ogJqQVD1bQrwGWcmXkTyfhDjJyXUwFVFTkDFrkEK8ttlbYKXNXN9DGIQDMIyOuWEIh27XFcWOCjg3j0yKKq0jCGAb0uCkZkJ2QXiw%2Bax3rgsYG7TrXwIhF6Q2D1YsMUN3xaUgCJOevMzC3OgX%2FtnyTTQe9fvgvciAfKylTjKSnHfgTkK1zVVWU%2FBKMCc1dsY0TJ0ulvwYBM11n0WbMzR57vSTMLKz58IGOqUBNNEwXH5CvttATlxkUzcRRZtzGQSF6FEGyfC%2BpZzpqa%2FCgmKdYtN93Ehr%2FNQxnQUwghGOVgGGwgzBzdVchWXR3mbiCOxIhC9hlTkcMf%2BaTZya6xo%2FdOMRYYTNgSlhY7etdVsAYFww%2FdQ6L8eExDrqQ%2BSkM2%2FeJ25VWikpsn7d%2BottoCZFUUfL6XerV8cbLidA799tQiIfT%2BSgv7ly8Bmd%2BnnyKSQ6&X-Amz-Signature=3a3f15653e498e7897565707bf660a0a78279b1f11927430e50c2ae20ebbd360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
