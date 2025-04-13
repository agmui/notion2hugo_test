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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REHDNMMH%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDZOyT1AaQVcGbu7NtNhyO4owykUTRpJ1gTkxCnRI%2BCPwIgEt5iBup%2Bwgy5QcdXxKV4rmLTlZA5l3xZGeRexjcY91YqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcLjrPYZEto8uZIfSrcAwu4iIL6Avnv%2BuZVfn0KjFPwcxoepZ91Xao8K1XacrXqZnKqJJG1VE%2FEERAulwrcns8%2F1ZuyJxf1c3Ym4IUMTHOJFZOIZk5jJry76ro8Y%2BT6CsbdGO0pAZM9kNiH%2FYKtmb32w%2BoTtV4irikGEvgrdToMhpImM1tS1hmLy6j4V3BsmH%2BCu2fQgbJHKTLuBgQleX%2BlmbX9egVoM%2Fl4re18eZ1cqLuIIHLCZf77c9Eik9Fwkab0oFL7D8oymS3GzWyohIgkmC2tonDjJ4HJbtSQcu6kpydyuYCmNfOqqUV9%2FPG23tJNDMNAo1mTRkpnlBqNGHfXidIYLXpzJJz4o4D%2BEKgMkcQXgWb3LpwTybftHB1PHNvivSVT5YJeLN9UeQ5cTyc5Q%2BQHCjXlFYkZbiDG%2FTc8Im1RoT%2Fz9LxJNT97uWgHxuMyNuolrcYqQa%2FugOtkUCEliC2CiTs59IuE5RQeR9%2Bz4h8ORHqLk8xD2yakLT25JnmqHZ8veMQvrqayJ4OwgZiP38QbwdmhZhvKfryx8D9aisHGCOrPHWzuVo4tvw2DHABp9nxy0990xlqYgO%2Bjd14F8DdRtGxTBwA6E777MKte31V9ixbbA3VtNkh%2FBwp0S8xXpl%2FcmUosIvL3MKqK778GOqUBgUIm1YFTCi1l%2BhXLIU3LSNs0wcNTWrMqpuXRSOntTfocphEIXCeDZ6YSMYs2tfwZ3jKoT6eYS3FUCU1DygcOPS0Mbxw1YNS9VsS7%2BQG1IxoarWFxe4jLCxBvVi1arX%2BebQGQv%2Bo5hMGFk3Kz2moBT952mgNFW4C8ZTZPp2dMimKImafGseYWfdxOsqA8RYRQFkvqsvVTflDcgGiP%2B0wW33G31enR&X-Amz-Signature=90d716cd69d7e4b89bcb30c72be111b4c6e62471030208a011254bb2571a3c1f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REHDNMMH%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDZOyT1AaQVcGbu7NtNhyO4owykUTRpJ1gTkxCnRI%2BCPwIgEt5iBup%2Bwgy5QcdXxKV4rmLTlZA5l3xZGeRexjcY91YqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcLjrPYZEto8uZIfSrcAwu4iIL6Avnv%2BuZVfn0KjFPwcxoepZ91Xao8K1XacrXqZnKqJJG1VE%2FEERAulwrcns8%2F1ZuyJxf1c3Ym4IUMTHOJFZOIZk5jJry76ro8Y%2BT6CsbdGO0pAZM9kNiH%2FYKtmb32w%2BoTtV4irikGEvgrdToMhpImM1tS1hmLy6j4V3BsmH%2BCu2fQgbJHKTLuBgQleX%2BlmbX9egVoM%2Fl4re18eZ1cqLuIIHLCZf77c9Eik9Fwkab0oFL7D8oymS3GzWyohIgkmC2tonDjJ4HJbtSQcu6kpydyuYCmNfOqqUV9%2FPG23tJNDMNAo1mTRkpnlBqNGHfXidIYLXpzJJz4o4D%2BEKgMkcQXgWb3LpwTybftHB1PHNvivSVT5YJeLN9UeQ5cTyc5Q%2BQHCjXlFYkZbiDG%2FTc8Im1RoT%2Fz9LxJNT97uWgHxuMyNuolrcYqQa%2FugOtkUCEliC2CiTs59IuE5RQeR9%2Bz4h8ORHqLk8xD2yakLT25JnmqHZ8veMQvrqayJ4OwgZiP38QbwdmhZhvKfryx8D9aisHGCOrPHWzuVo4tvw2DHABp9nxy0990xlqYgO%2Bjd14F8DdRtGxTBwA6E777MKte31V9ixbbA3VtNkh%2FBwp0S8xXpl%2FcmUosIvL3MKqK778GOqUBgUIm1YFTCi1l%2BhXLIU3LSNs0wcNTWrMqpuXRSOntTfocphEIXCeDZ6YSMYs2tfwZ3jKoT6eYS3FUCU1DygcOPS0Mbxw1YNS9VsS7%2BQG1IxoarWFxe4jLCxBvVi1arX%2BebQGQv%2Bo5hMGFk3Kz2moBT952mgNFW4C8ZTZPp2dMimKImafGseYWfdxOsqA8RYRQFkvqsvVTflDcgGiP%2B0wW33G31enR&X-Amz-Signature=e3f3f1c568a768cceaede3375119356e1032263e8e7fa80388898f8bc3cf25e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REHDNMMH%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDZOyT1AaQVcGbu7NtNhyO4owykUTRpJ1gTkxCnRI%2BCPwIgEt5iBup%2Bwgy5QcdXxKV4rmLTlZA5l3xZGeRexjcY91YqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcLjrPYZEto8uZIfSrcAwu4iIL6Avnv%2BuZVfn0KjFPwcxoepZ91Xao8K1XacrXqZnKqJJG1VE%2FEERAulwrcns8%2F1ZuyJxf1c3Ym4IUMTHOJFZOIZk5jJry76ro8Y%2BT6CsbdGO0pAZM9kNiH%2FYKtmb32w%2BoTtV4irikGEvgrdToMhpImM1tS1hmLy6j4V3BsmH%2BCu2fQgbJHKTLuBgQleX%2BlmbX9egVoM%2Fl4re18eZ1cqLuIIHLCZf77c9Eik9Fwkab0oFL7D8oymS3GzWyohIgkmC2tonDjJ4HJbtSQcu6kpydyuYCmNfOqqUV9%2FPG23tJNDMNAo1mTRkpnlBqNGHfXidIYLXpzJJz4o4D%2BEKgMkcQXgWb3LpwTybftHB1PHNvivSVT5YJeLN9UeQ5cTyc5Q%2BQHCjXlFYkZbiDG%2FTc8Im1RoT%2Fz9LxJNT97uWgHxuMyNuolrcYqQa%2FugOtkUCEliC2CiTs59IuE5RQeR9%2Bz4h8ORHqLk8xD2yakLT25JnmqHZ8veMQvrqayJ4OwgZiP38QbwdmhZhvKfryx8D9aisHGCOrPHWzuVo4tvw2DHABp9nxy0990xlqYgO%2Bjd14F8DdRtGxTBwA6E777MKte31V9ixbbA3VtNkh%2FBwp0S8xXpl%2FcmUosIvL3MKqK778GOqUBgUIm1YFTCi1l%2BhXLIU3LSNs0wcNTWrMqpuXRSOntTfocphEIXCeDZ6YSMYs2tfwZ3jKoT6eYS3FUCU1DygcOPS0Mbxw1YNS9VsS7%2BQG1IxoarWFxe4jLCxBvVi1arX%2BebQGQv%2Bo5hMGFk3Kz2moBT952mgNFW4C8ZTZPp2dMimKImafGseYWfdxOsqA8RYRQFkvqsvVTflDcgGiP%2B0wW33G31enR&X-Amz-Signature=2580c3a3941ab58fb7a38e6d1b754945d01b9cfdff8e6e2f4738ff019ad8ad24&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
