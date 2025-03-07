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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQFT3A7Y%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIAmnI%2BpuYfhwzMKtqKiZFov0Bj51%2BO%2Bnj6bRlRyJhHodAiEAj5u60kzLCJS2rs9JX3bE%2BNoDT9Ne2IVwbYopqtNlaOsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMv3oc3MM8t4axDWvSrcAyzkNA7qgbX47tyo%2FfMAPQXlLDpfBABpkL4qMUIN7z9hBOPp87UEuQMaa4T11PtH4kD1K6TRI8MXJfU4fKJuXpBcWoLAM0K6xv1CZ%2B%2BvOnH6Jm%2BSkl5%2FB1dgUzGJYY15T4PsMqqF%2Fow%2FnGXaMGUbWUPjtw5CMahogQ%2BTILNk%2BCAZD4DAPrZpMqNeCNLW%2BbLabw%2FRB%2BsAcqNq4zxv4e7NNTkLnUHZuIduNswhIWHZwsyxhAsBz9ZBFl7HGdiSzwZgZp8wg5NcjiSDmNbSq%2BDx9i11kwGmpAfdPqWLlkyKPi2oHcsrUt12aprLmPk0krwI%2Fl2xBs3DHA1ZSEQeS%2B%2B7dgBJOZO%2FE5FIZrGgmc9G7x9IRHt487EYQuDiVvb9GkQ5mkJJlcgXhclfw5tNycKtmEI5TTpN5NuNFmBMQicqMHM9iY1olPKuyo0R5HoN9xmj2aTu2H2iiqvrMxbOjJlfVk2G2mcPb4okUIYWc7EbttZHtRegU1PrmP1wgEGdCXo8Y8NxLh%2FJPijwGSVTlWbDRe4wseXRxZNudL3uOoXuNGGNVSmCy9ribxc0FptMOXrghL6D3Wk5rymSdOxrHEeI15XnhGRbk6DNFpBQZOJL%2FDwJ9ded1Yc5TxWYSxJKMLz%2FrL4GOqUBJUoD2Gc%2FIwnvHhgXlq8ZKBXdHMPiNnuQV50S674fQvlhcEMc3b5Owcg7YE80DlryOeEx%2BHuR7g2SS2kF%2BfZI6T9ESJi3OqqTWYchaat1FbQwoJGnsP09mBV%2FxgPN%2FBq1AqlKKg3dhJvbhoOGV%2BDDTHVg0J4Oj03P80E0FYZUjYOjIv0EvIaRUUxEcm0JqpS3%2B7hT%2FYSHg%2BKqhapU8I51AYaUYcFt&X-Amz-Signature=4d4d212543bf726dea25f215f176fd5ad731879e4534047c2361dabc8c941566&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQFT3A7Y%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIAmnI%2BpuYfhwzMKtqKiZFov0Bj51%2BO%2Bnj6bRlRyJhHodAiEAj5u60kzLCJS2rs9JX3bE%2BNoDT9Ne2IVwbYopqtNlaOsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMv3oc3MM8t4axDWvSrcAyzkNA7qgbX47tyo%2FfMAPQXlLDpfBABpkL4qMUIN7z9hBOPp87UEuQMaa4T11PtH4kD1K6TRI8MXJfU4fKJuXpBcWoLAM0K6xv1CZ%2B%2BvOnH6Jm%2BSkl5%2FB1dgUzGJYY15T4PsMqqF%2Fow%2FnGXaMGUbWUPjtw5CMahogQ%2BTILNk%2BCAZD4DAPrZpMqNeCNLW%2BbLabw%2FRB%2BsAcqNq4zxv4e7NNTkLnUHZuIduNswhIWHZwsyxhAsBz9ZBFl7HGdiSzwZgZp8wg5NcjiSDmNbSq%2BDx9i11kwGmpAfdPqWLlkyKPi2oHcsrUt12aprLmPk0krwI%2Fl2xBs3DHA1ZSEQeS%2B%2B7dgBJOZO%2FE5FIZrGgmc9G7x9IRHt487EYQuDiVvb9GkQ5mkJJlcgXhclfw5tNycKtmEI5TTpN5NuNFmBMQicqMHM9iY1olPKuyo0R5HoN9xmj2aTu2H2iiqvrMxbOjJlfVk2G2mcPb4okUIYWc7EbttZHtRegU1PrmP1wgEGdCXo8Y8NxLh%2FJPijwGSVTlWbDRe4wseXRxZNudL3uOoXuNGGNVSmCy9ribxc0FptMOXrghL6D3Wk5rymSdOxrHEeI15XnhGRbk6DNFpBQZOJL%2FDwJ9ded1Yc5TxWYSxJKMLz%2FrL4GOqUBJUoD2Gc%2FIwnvHhgXlq8ZKBXdHMPiNnuQV50S674fQvlhcEMc3b5Owcg7YE80DlryOeEx%2BHuR7g2SS2kF%2BfZI6T9ESJi3OqqTWYchaat1FbQwoJGnsP09mBV%2FxgPN%2FBq1AqlKKg3dhJvbhoOGV%2BDDTHVg0J4Oj03P80E0FYZUjYOjIv0EvIaRUUxEcm0JqpS3%2B7hT%2FYSHg%2BKqhapU8I51AYaUYcFt&X-Amz-Signature=2e2e677a3693620580d4402296609c2ec03f2373203a80c1817bded8028a6681&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQFT3A7Y%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIAmnI%2BpuYfhwzMKtqKiZFov0Bj51%2BO%2Bnj6bRlRyJhHodAiEAj5u60kzLCJS2rs9JX3bE%2BNoDT9Ne2IVwbYopqtNlaOsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMv3oc3MM8t4axDWvSrcAyzkNA7qgbX47tyo%2FfMAPQXlLDpfBABpkL4qMUIN7z9hBOPp87UEuQMaa4T11PtH4kD1K6TRI8MXJfU4fKJuXpBcWoLAM0K6xv1CZ%2B%2BvOnH6Jm%2BSkl5%2FB1dgUzGJYY15T4PsMqqF%2Fow%2FnGXaMGUbWUPjtw5CMahogQ%2BTILNk%2BCAZD4DAPrZpMqNeCNLW%2BbLabw%2FRB%2BsAcqNq4zxv4e7NNTkLnUHZuIduNswhIWHZwsyxhAsBz9ZBFl7HGdiSzwZgZp8wg5NcjiSDmNbSq%2BDx9i11kwGmpAfdPqWLlkyKPi2oHcsrUt12aprLmPk0krwI%2Fl2xBs3DHA1ZSEQeS%2B%2B7dgBJOZO%2FE5FIZrGgmc9G7x9IRHt487EYQuDiVvb9GkQ5mkJJlcgXhclfw5tNycKtmEI5TTpN5NuNFmBMQicqMHM9iY1olPKuyo0R5HoN9xmj2aTu2H2iiqvrMxbOjJlfVk2G2mcPb4okUIYWc7EbttZHtRegU1PrmP1wgEGdCXo8Y8NxLh%2FJPijwGSVTlWbDRe4wseXRxZNudL3uOoXuNGGNVSmCy9ribxc0FptMOXrghL6D3Wk5rymSdOxrHEeI15XnhGRbk6DNFpBQZOJL%2FDwJ9ded1Yc5TxWYSxJKMLz%2FrL4GOqUBJUoD2Gc%2FIwnvHhgXlq8ZKBXdHMPiNnuQV50S674fQvlhcEMc3b5Owcg7YE80DlryOeEx%2BHuR7g2SS2kF%2BfZI6T9ESJi3OqqTWYchaat1FbQwoJGnsP09mBV%2FxgPN%2FBq1AqlKKg3dhJvbhoOGV%2BDDTHVg0J4Oj03P80E0FYZUjYOjIv0EvIaRUUxEcm0JqpS3%2B7hT%2FYSHg%2BKqhapU8I51AYaUYcFt&X-Amz-Signature=d6ccdc75880b74eeb1481c140372ef0d7a21a587ea18c187e2458cf9c0818315&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
