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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSD4G5GW%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQC3zME86M1AYQt%2B8yFOnjN3nSgMfF2lAPT3HsP41adELgIgF95O%2FRSdU5l1PoUYwQ%2But5swYGDjT1NNgoDq3WMtlgUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOFus6lBV6dLcaTb0CrcA9yB0VC7csU7EYGjY3DgWTQBOITuGYEbD9Y%2FTHDBnQhecWBw%2F6pXxBhxThfDgE1bqQntdWnsKtgs8MHxo6IGtW%2B1sj%2F9yRsRMxR88ISW4T%2FmkKX3IOcJcDnL1mJXZ0MwCfNPYp%2BML3H3yNVq7ZbX6GFaIhRr7Lnjb0%2FFq3FtZoV8n5xyjEJK0X%2F1la%2FYAlD2MdWO5E3EcrFUk0zIv8amRHG9USSFrG4jpKgLgHFSLWxV2ptK56WXWSiGjVzIEcVNpvVd8eGoe9R4C209hTG5zrfPW%2BZBM3WDJOIdu5bgZ0nq3KioQ8Tqsj1wZL6ugu1pRuI57hkfCDvXU%2BWZ4DcjC%2BI1k0ngrvnOGO9R%2FX78KbxzG%2Bo6UbnXMVDg%2BjUPoZQnWvxLdvcTNY9UFnEcnCg%2FnmOuJJhz7aMgaLtT9Y1t5vSq8XYXBqQsFgGGFNXfe3vDcfxmr8RpUzNF%2F86D%2BCHBYmLg0ih%2FMOWmN%2B0ZJ9zYfExcxWnSMLD1TfuOhJfQo7cl8aZwJD7TV1RnhhxdSq%2FkVAZeavhBAJcz7Ar4RsxegGnvgBn7soRqDNWQaS4iTQ2EZs%2F0sWT596Z4ASyYFm9taiHI%2Fow2u%2Fxl0vd2mNuElr%2BKNikbNF4M%2FTNfcqypMKX3%2FcEGOqUBMdquPYUSFCxhVY7nMV1Tv5BmJ6UHm2reg60xIONwh8%2BC%2F6NYhw7D4jaGpZp8nILyO6BBCScZdiaYowzgSGU0QVH5zLguhlbBdA2v%2FdEdzJtirTYvoFmveX%2BBFYgIR3tVFoeDSa2YxzRNET9ZdGpWs1p1xMkzi8Hr1aHnRcdxcPX%2Bx7sPdMW8JV5mOqYUyMHSzZcDEHWB7aBh0%2Bml%2F%2FMU1kV6i4FE&X-Amz-Signature=caa5eed68e629b616d947176621b198d85af7e9acb8c1f7247e23d828f579034&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSD4G5GW%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQC3zME86M1AYQt%2B8yFOnjN3nSgMfF2lAPT3HsP41adELgIgF95O%2FRSdU5l1PoUYwQ%2But5swYGDjT1NNgoDq3WMtlgUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOFus6lBV6dLcaTb0CrcA9yB0VC7csU7EYGjY3DgWTQBOITuGYEbD9Y%2FTHDBnQhecWBw%2F6pXxBhxThfDgE1bqQntdWnsKtgs8MHxo6IGtW%2B1sj%2F9yRsRMxR88ISW4T%2FmkKX3IOcJcDnL1mJXZ0MwCfNPYp%2BML3H3yNVq7ZbX6GFaIhRr7Lnjb0%2FFq3FtZoV8n5xyjEJK0X%2F1la%2FYAlD2MdWO5E3EcrFUk0zIv8amRHG9USSFrG4jpKgLgHFSLWxV2ptK56WXWSiGjVzIEcVNpvVd8eGoe9R4C209hTG5zrfPW%2BZBM3WDJOIdu5bgZ0nq3KioQ8Tqsj1wZL6ugu1pRuI57hkfCDvXU%2BWZ4DcjC%2BI1k0ngrvnOGO9R%2FX78KbxzG%2Bo6UbnXMVDg%2BjUPoZQnWvxLdvcTNY9UFnEcnCg%2FnmOuJJhz7aMgaLtT9Y1t5vSq8XYXBqQsFgGGFNXfe3vDcfxmr8RpUzNF%2F86D%2BCHBYmLg0ih%2FMOWmN%2B0ZJ9zYfExcxWnSMLD1TfuOhJfQo7cl8aZwJD7TV1RnhhxdSq%2FkVAZeavhBAJcz7Ar4RsxegGnvgBn7soRqDNWQaS4iTQ2EZs%2F0sWT596Z4ASyYFm9taiHI%2Fow2u%2Fxl0vd2mNuElr%2BKNikbNF4M%2FTNfcqypMKX3%2FcEGOqUBMdquPYUSFCxhVY7nMV1Tv5BmJ6UHm2reg60xIONwh8%2BC%2F6NYhw7D4jaGpZp8nILyO6BBCScZdiaYowzgSGU0QVH5zLguhlbBdA2v%2FdEdzJtirTYvoFmveX%2BBFYgIR3tVFoeDSa2YxzRNET9ZdGpWs1p1xMkzi8Hr1aHnRcdxcPX%2Bx7sPdMW8JV5mOqYUyMHSzZcDEHWB7aBh0%2Bml%2F%2FMU1kV6i4FE&X-Amz-Signature=b478eb11946ddd5086304159a8b49e96e948a06e49b4ab0d121e173c43f80c93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSD4G5GW%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQC3zME86M1AYQt%2B8yFOnjN3nSgMfF2lAPT3HsP41adELgIgF95O%2FRSdU5l1PoUYwQ%2But5swYGDjT1NNgoDq3WMtlgUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOFus6lBV6dLcaTb0CrcA9yB0VC7csU7EYGjY3DgWTQBOITuGYEbD9Y%2FTHDBnQhecWBw%2F6pXxBhxThfDgE1bqQntdWnsKtgs8MHxo6IGtW%2B1sj%2F9yRsRMxR88ISW4T%2FmkKX3IOcJcDnL1mJXZ0MwCfNPYp%2BML3H3yNVq7ZbX6GFaIhRr7Lnjb0%2FFq3FtZoV8n5xyjEJK0X%2F1la%2FYAlD2MdWO5E3EcrFUk0zIv8amRHG9USSFrG4jpKgLgHFSLWxV2ptK56WXWSiGjVzIEcVNpvVd8eGoe9R4C209hTG5zrfPW%2BZBM3WDJOIdu5bgZ0nq3KioQ8Tqsj1wZL6ugu1pRuI57hkfCDvXU%2BWZ4DcjC%2BI1k0ngrvnOGO9R%2FX78KbxzG%2Bo6UbnXMVDg%2BjUPoZQnWvxLdvcTNY9UFnEcnCg%2FnmOuJJhz7aMgaLtT9Y1t5vSq8XYXBqQsFgGGFNXfe3vDcfxmr8RpUzNF%2F86D%2BCHBYmLg0ih%2FMOWmN%2B0ZJ9zYfExcxWnSMLD1TfuOhJfQo7cl8aZwJD7TV1RnhhxdSq%2FkVAZeavhBAJcz7Ar4RsxegGnvgBn7soRqDNWQaS4iTQ2EZs%2F0sWT596Z4ASyYFm9taiHI%2Fow2u%2Fxl0vd2mNuElr%2BKNikbNF4M%2FTNfcqypMKX3%2FcEGOqUBMdquPYUSFCxhVY7nMV1Tv5BmJ6UHm2reg60xIONwh8%2BC%2F6NYhw7D4jaGpZp8nILyO6BBCScZdiaYowzgSGU0QVH5zLguhlbBdA2v%2FdEdzJtirTYvoFmveX%2BBFYgIR3tVFoeDSa2YxzRNET9ZdGpWs1p1xMkzi8Hr1aHnRcdxcPX%2Bx7sPdMW8JV5mOqYUyMHSzZcDEHWB7aBh0%2Bml%2F%2FMU1kV6i4FE&X-Amz-Signature=fba14145c1fd4d15238e81d43799ebe5f83d939257bf74256ae14e9c8584f5f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
