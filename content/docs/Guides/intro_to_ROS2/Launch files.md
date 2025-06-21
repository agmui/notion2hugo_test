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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJPIOT6Y%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICS6mkUjkwJzfsUaoHNQfTkOfqfLz8vPRLQlvH1ClpGwAiBMHDK3VmvfYHHazuWKV%2BwXbKR8TtOR7ql6g6zlYVXVNiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnv3sCv5RBi3B6ChwKtwDU%2FXB4YfUZKjqzH4APKX2g3XR1pXZzdlILzB%2BLLNDGsePvXjUm9Wl77pt0k%2Bt1T4H0JVdRXcImCJ0Xre5Aitr5JsxMKCT5EjMvVPitWHJoAyE2DZvqjRZGP86FJS8zflTro%2FmMi1fsWAhiVebAx2U0N4165oOcGKlmBnithUaKdMf782swgyh479m%2Fv3dgCYt68Jjyfww%2F4NcOWZRe2myu3GUx70lwlallB9iloDmaxYm03XLYzy1zlMHURWI0id2C%2BkkpElF6OX4ilJFbAnTGmFNJ4MwdwZyd8ZP0AVPrLPJVRKDJ37He5ZRVzP2RTTz%2B9PcMFxD%2ByPJ5nXjn0SJ3tU40r6XjpMS1YbbSenPqX4FH6JOcjOisdXaI%2BK06184WLFPYqAlDpnvJIkVH3ytPvNxNgp8wthcnz3djMj4mt6JPjYhxI9PpjadOwE4P%2BV9UfmLmys55vY264opM4336GmOGNWdlJBv%2Bh0eEjVb1zsVKdYz5zvi2U%2BOf5PJklo3URmpA9dEuzsygWp1RjCeO%2Bnb9CtwW0Gyhfm%2FC%2BxxiKZRsSwj3ThMmh9ErA45SbrKvVFmODN72Al8pm3h3Pc28xSLbA6E6qLjDlIZBI2KfHlvvDM7Jpw9mW2nWdowo93cwgY6pgFnKhSItnSvR0wyt96jUWlL%2F5MrGbZLIVYlFRtswU3cCpwh1IF5UWfdnGxGCw5EMPZ3PQQdBkclA8Oktad3v67qLeammVI0dbz43%2BbyThxDIMv7D%2BhN9OD8ppkR4yACPvPiX%2BoU0CJ%2FrR%2FbvCsNed%2Fb7j0PLii5ihg1Q2Bwxh6AHpSLclDet2XJGf4BMVTIoIf%2F%2B2Q%2FchSokH3TnmELcBAnldTaDVu1&X-Amz-Signature=429efeb4053d32e4762fe504f67c9a14bf5584adc94e709eab7183302a5a6a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJPIOT6Y%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICS6mkUjkwJzfsUaoHNQfTkOfqfLz8vPRLQlvH1ClpGwAiBMHDK3VmvfYHHazuWKV%2BwXbKR8TtOR7ql6g6zlYVXVNiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnv3sCv5RBi3B6ChwKtwDU%2FXB4YfUZKjqzH4APKX2g3XR1pXZzdlILzB%2BLLNDGsePvXjUm9Wl77pt0k%2Bt1T4H0JVdRXcImCJ0Xre5Aitr5JsxMKCT5EjMvVPitWHJoAyE2DZvqjRZGP86FJS8zflTro%2FmMi1fsWAhiVebAx2U0N4165oOcGKlmBnithUaKdMf782swgyh479m%2Fv3dgCYt68Jjyfww%2F4NcOWZRe2myu3GUx70lwlallB9iloDmaxYm03XLYzy1zlMHURWI0id2C%2BkkpElF6OX4ilJFbAnTGmFNJ4MwdwZyd8ZP0AVPrLPJVRKDJ37He5ZRVzP2RTTz%2B9PcMFxD%2ByPJ5nXjn0SJ3tU40r6XjpMS1YbbSenPqX4FH6JOcjOisdXaI%2BK06184WLFPYqAlDpnvJIkVH3ytPvNxNgp8wthcnz3djMj4mt6JPjYhxI9PpjadOwE4P%2BV9UfmLmys55vY264opM4336GmOGNWdlJBv%2Bh0eEjVb1zsVKdYz5zvi2U%2BOf5PJklo3URmpA9dEuzsygWp1RjCeO%2Bnb9CtwW0Gyhfm%2FC%2BxxiKZRsSwj3ThMmh9ErA45SbrKvVFmODN72Al8pm3h3Pc28xSLbA6E6qLjDlIZBI2KfHlvvDM7Jpw9mW2nWdowo93cwgY6pgFnKhSItnSvR0wyt96jUWlL%2F5MrGbZLIVYlFRtswU3cCpwh1IF5UWfdnGxGCw5EMPZ3PQQdBkclA8Oktad3v67qLeammVI0dbz43%2BbyThxDIMv7D%2BhN9OD8ppkR4yACPvPiX%2BoU0CJ%2FrR%2FbvCsNed%2Fb7j0PLii5ihg1Q2Bwxh6AHpSLclDet2XJGf4BMVTIoIf%2F%2B2Q%2FchSokH3TnmELcBAnldTaDVu1&X-Amz-Signature=168217bbbf8d4027b06693dcb67b00fdf4e33bb70ec00114e282d7d69bc228cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJPIOT6Y%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICS6mkUjkwJzfsUaoHNQfTkOfqfLz8vPRLQlvH1ClpGwAiBMHDK3VmvfYHHazuWKV%2BwXbKR8TtOR7ql6g6zlYVXVNiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnv3sCv5RBi3B6ChwKtwDU%2FXB4YfUZKjqzH4APKX2g3XR1pXZzdlILzB%2BLLNDGsePvXjUm9Wl77pt0k%2Bt1T4H0JVdRXcImCJ0Xre5Aitr5JsxMKCT5EjMvVPitWHJoAyE2DZvqjRZGP86FJS8zflTro%2FmMi1fsWAhiVebAx2U0N4165oOcGKlmBnithUaKdMf782swgyh479m%2Fv3dgCYt68Jjyfww%2F4NcOWZRe2myu3GUx70lwlallB9iloDmaxYm03XLYzy1zlMHURWI0id2C%2BkkpElF6OX4ilJFbAnTGmFNJ4MwdwZyd8ZP0AVPrLPJVRKDJ37He5ZRVzP2RTTz%2B9PcMFxD%2ByPJ5nXjn0SJ3tU40r6XjpMS1YbbSenPqX4FH6JOcjOisdXaI%2BK06184WLFPYqAlDpnvJIkVH3ytPvNxNgp8wthcnz3djMj4mt6JPjYhxI9PpjadOwE4P%2BV9UfmLmys55vY264opM4336GmOGNWdlJBv%2Bh0eEjVb1zsVKdYz5zvi2U%2BOf5PJklo3URmpA9dEuzsygWp1RjCeO%2Bnb9CtwW0Gyhfm%2FC%2BxxiKZRsSwj3ThMmh9ErA45SbrKvVFmODN72Al8pm3h3Pc28xSLbA6E6qLjDlIZBI2KfHlvvDM7Jpw9mW2nWdowo93cwgY6pgFnKhSItnSvR0wyt96jUWlL%2F5MrGbZLIVYlFRtswU3cCpwh1IF5UWfdnGxGCw5EMPZ3PQQdBkclA8Oktad3v67qLeammVI0dbz43%2BbyThxDIMv7D%2BhN9OD8ppkR4yACPvPiX%2BoU0CJ%2FrR%2FbvCsNed%2Fb7j0PLii5ihg1Q2Bwxh6AHpSLclDet2XJGf4BMVTIoIf%2F%2B2Q%2FchSokH3TnmELcBAnldTaDVu1&X-Amz-Signature=533369b08cdd543431da9fea9616d582baf7cf9591fe74a627a979e20cf3cad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
