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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZFTSZDU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQC8XkfS5aH4S75gJLSW5dZ%2B8vU2EO89UOoxaUB5hhRVYwIgJRynOE7yio6iNiVqCqR3itVbii%2Ftcic2bqE8COvf16oqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeiqQ2Kol8M0k4OCircA8oWP3OAbIQQBSEG%2FPhwuq0Lw8Y%2Fipdm7aiSYbB3ZxbLdqJbpdrf6sCRB71u39PWK7eNx1ZcT9pypqogcs75giqw3v3V%2FPjtlAvly5MAKDEGQ0fW62QzVMKxSSL1LyV1lVy4dNnpl9E7Jv3lpeBl3EshdHASAtwImSK8VVK%2BE6ixlxnJ7nVLqqvzD6bH4ILOP5o7ueuzqmT8lajYaJH%2BP6jQYhzFsFP1rFaGVhdBU56ucLHt6AXdelQFMpSE7jU4TXDW47FUzxdMNfsvk2QbOXjKDQRyrX5wGvefCMiXbz7wC%2Bnf7Hdj8fifklei8uh14b8vkJOHitD61N0u06%2FcIE3e%2FvxqoqYXPjqMHLrR3WLKEET0uzE7ObIJu8asAoSK%2BDNejIh4c%2FXI5M1FEuU7T02FkMzfZFSlDeRrJ0G1rMe2O0clSz3Ap6R4%2BFSIQxYpft9EtzW3uhzwOgAhdJthOgYM%2BNY4egG%2Bf45K%2Fvox5b3q6w4ntEMaagEN3RXRWECuvLM6QYUJLaW4dZY%2B14ENc2Cgh%2BeG95mQjU8GDexuwuoZhOhmCPQPcTcuwvk0%2Bu0q3fbLUEcaIaF38unA93p9x%2Ffo02of87ZJqqH64E3h%2B7QGJI0ondzc64n%2BsyubMJ77uL4GOqUBJ%2FAmHFfR%2Bjp%2FLEuKGy4sCZvlQdVeNhSuljj0BOCGkAtLTMOg6AvpnwK0NoQx6QR2ZNm1VUG8Hyo7h4NR2dAHWVDthgy49RH2W7ZEyWVoKvHoiTQ%2BgB9SCVo%2BZrcrvvm%2F5AITFKBCIz3NUZV9hzVTmMRCh7%2BSLjkAo7Knam8Ua8OQ1gAy3elxcwh6iWPzs3vCIrgsnPFeVdgCHf8KkbZwrm6omX%2B7&X-Amz-Signature=392f9165882180767003a28246ec40cf76dfd09e3b34023fe9e8dcddbade190a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZFTSZDU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQC8XkfS5aH4S75gJLSW5dZ%2B8vU2EO89UOoxaUB5hhRVYwIgJRynOE7yio6iNiVqCqR3itVbii%2Ftcic2bqE8COvf16oqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeiqQ2Kol8M0k4OCircA8oWP3OAbIQQBSEG%2FPhwuq0Lw8Y%2Fipdm7aiSYbB3ZxbLdqJbpdrf6sCRB71u39PWK7eNx1ZcT9pypqogcs75giqw3v3V%2FPjtlAvly5MAKDEGQ0fW62QzVMKxSSL1LyV1lVy4dNnpl9E7Jv3lpeBl3EshdHASAtwImSK8VVK%2BE6ixlxnJ7nVLqqvzD6bH4ILOP5o7ueuzqmT8lajYaJH%2BP6jQYhzFsFP1rFaGVhdBU56ucLHt6AXdelQFMpSE7jU4TXDW47FUzxdMNfsvk2QbOXjKDQRyrX5wGvefCMiXbz7wC%2Bnf7Hdj8fifklei8uh14b8vkJOHitD61N0u06%2FcIE3e%2FvxqoqYXPjqMHLrR3WLKEET0uzE7ObIJu8asAoSK%2BDNejIh4c%2FXI5M1FEuU7T02FkMzfZFSlDeRrJ0G1rMe2O0clSz3Ap6R4%2BFSIQxYpft9EtzW3uhzwOgAhdJthOgYM%2BNY4egG%2Bf45K%2Fvox5b3q6w4ntEMaagEN3RXRWECuvLM6QYUJLaW4dZY%2B14ENc2Cgh%2BeG95mQjU8GDexuwuoZhOhmCPQPcTcuwvk0%2Bu0q3fbLUEcaIaF38unA93p9x%2Ffo02of87ZJqqH64E3h%2B7QGJI0ondzc64n%2BsyubMJ77uL4GOqUBJ%2FAmHFfR%2Bjp%2FLEuKGy4sCZvlQdVeNhSuljj0BOCGkAtLTMOg6AvpnwK0NoQx6QR2ZNm1VUG8Hyo7h4NR2dAHWVDthgy49RH2W7ZEyWVoKvHoiTQ%2BgB9SCVo%2BZrcrvvm%2F5AITFKBCIz3NUZV9hzVTmMRCh7%2BSLjkAo7Knam8Ua8OQ1gAy3elxcwh6iWPzs3vCIrgsnPFeVdgCHf8KkbZwrm6omX%2B7&X-Amz-Signature=1a43fa1b2cadd87b749b548afe29e9fcd6ed4d8b181c283e0983762a8f7cc025&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZFTSZDU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQC8XkfS5aH4S75gJLSW5dZ%2B8vU2EO89UOoxaUB5hhRVYwIgJRynOE7yio6iNiVqCqR3itVbii%2Ftcic2bqE8COvf16oqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeiqQ2Kol8M0k4OCircA8oWP3OAbIQQBSEG%2FPhwuq0Lw8Y%2Fipdm7aiSYbB3ZxbLdqJbpdrf6sCRB71u39PWK7eNx1ZcT9pypqogcs75giqw3v3V%2FPjtlAvly5MAKDEGQ0fW62QzVMKxSSL1LyV1lVy4dNnpl9E7Jv3lpeBl3EshdHASAtwImSK8VVK%2BE6ixlxnJ7nVLqqvzD6bH4ILOP5o7ueuzqmT8lajYaJH%2BP6jQYhzFsFP1rFaGVhdBU56ucLHt6AXdelQFMpSE7jU4TXDW47FUzxdMNfsvk2QbOXjKDQRyrX5wGvefCMiXbz7wC%2Bnf7Hdj8fifklei8uh14b8vkJOHitD61N0u06%2FcIE3e%2FvxqoqYXPjqMHLrR3WLKEET0uzE7ObIJu8asAoSK%2BDNejIh4c%2FXI5M1FEuU7T02FkMzfZFSlDeRrJ0G1rMe2O0clSz3Ap6R4%2BFSIQxYpft9EtzW3uhzwOgAhdJthOgYM%2BNY4egG%2Bf45K%2Fvox5b3q6w4ntEMaagEN3RXRWECuvLM6QYUJLaW4dZY%2B14ENc2Cgh%2BeG95mQjU8GDexuwuoZhOhmCPQPcTcuwvk0%2Bu0q3fbLUEcaIaF38unA93p9x%2Ffo02of87ZJqqH64E3h%2B7QGJI0ondzc64n%2BsyubMJ77uL4GOqUBJ%2FAmHFfR%2Bjp%2FLEuKGy4sCZvlQdVeNhSuljj0BOCGkAtLTMOg6AvpnwK0NoQx6QR2ZNm1VUG8Hyo7h4NR2dAHWVDthgy49RH2W7ZEyWVoKvHoiTQ%2BgB9SCVo%2BZrcrvvm%2F5AITFKBCIz3NUZV9hzVTmMRCh7%2BSLjkAo7Knam8Ua8OQ1gAy3elxcwh6iWPzs3vCIrgsnPFeVdgCHf8KkbZwrm6omX%2B7&X-Amz-Signature=fd6bdea03447a99148e7617aeda95de9e4c97ebeb892a7ea01130f8b1b6da6f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
