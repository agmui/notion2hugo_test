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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROMFSNLU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJUWvsvQ6%2FUtI3nzNchfubfWhr8qaXcLJHQUI%2Fnyxt1AiEA%2B8wR0kpzJcLGEYV5UzlloL74Ka6iRXRIWY1w8vdPr1Uq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKblQNFMLR9WHsX9SSrcA7HIiOJIjgLnvecamOASnIuvy1YpHTV7uEWwHOgzsVpRCAbY6S7t6D1l6Jhf%2FNENct2682NwRVCXVq2zULAiEbmfIaPxwv2ZclGe4Mz2I%2BRD7yKW62Y3oVKhFNvucZMgTq6%2BZZzriJg%2BFG9BhJ7YzRlpaLdo%2FG5l7phg2PZw%2BCd9EOokOyNpVOTNP5CSseMORqI%2FkWH%2Fcydp%2FCtk5uNKD%2FAdo9TMfoJqGnYoLN%2BIne4LtQyGY179OEjh1sg8bY82qzKjfgPWp51rZL5Yo%2Br0au2%2FKuB6w4n8JYjgsLXNIpaeJ%2Fo3QYOCyJRekO9smqTCM8E6e8RE330m24saJyMpEWkq7zFN6b%2FckvfUU5gF%2BMVnTxauuRlRxHqjYM9lr%2BmfnSHS6nU8bQRwWFLlsYTnIa0fWfOQyUoFh5nRAmDi5FuSDLydlVx%2F4chMcaRB0Wa7kgKuBEBPNnxPRx0koVKDnHMjJSb2gufwSTkMdP%2BEX8gXXurk9tNpiNO38nM6uNcvor2YxfZ3dPcOI9N1EJlnuXS9uesT%2BNmrCFIWQt0dklb0%2B3M3NJysvZZIQgN8VBIDHm88covuPemC6fj0ZQIHEdps0eHzyOVd83vFNxq3ahqTEpfL8AlpN0MjW70GMPTM5MAGOqUBURD84BbKVsI45BQjaZwPTgC%2BA0JUn2o5kUCfyI6tozm3eRxhIWbomQtV1a7wUuuiq85DJIpl1s71TQiotvQ8IfzxuCUjJW39nZzTASkDsbLyiyd77%2BQNynKzBGJ3cPRcwU%2Bf9EkLEyGrfyGSe1FEydEstKfFJhLB86lPotRGA54SJbwVBvvSH06KeEad42hJtAlV4Tw8b76gXTuyYENnTPuoNWOf&X-Amz-Signature=20a026df3bb8ec24544964aaffc47c3d171db346be1c55c2323bed157e7f1cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROMFSNLU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJUWvsvQ6%2FUtI3nzNchfubfWhr8qaXcLJHQUI%2Fnyxt1AiEA%2B8wR0kpzJcLGEYV5UzlloL74Ka6iRXRIWY1w8vdPr1Uq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKblQNFMLR9WHsX9SSrcA7HIiOJIjgLnvecamOASnIuvy1YpHTV7uEWwHOgzsVpRCAbY6S7t6D1l6Jhf%2FNENct2682NwRVCXVq2zULAiEbmfIaPxwv2ZclGe4Mz2I%2BRD7yKW62Y3oVKhFNvucZMgTq6%2BZZzriJg%2BFG9BhJ7YzRlpaLdo%2FG5l7phg2PZw%2BCd9EOokOyNpVOTNP5CSseMORqI%2FkWH%2Fcydp%2FCtk5uNKD%2FAdo9TMfoJqGnYoLN%2BIne4LtQyGY179OEjh1sg8bY82qzKjfgPWp51rZL5Yo%2Br0au2%2FKuB6w4n8JYjgsLXNIpaeJ%2Fo3QYOCyJRekO9smqTCM8E6e8RE330m24saJyMpEWkq7zFN6b%2FckvfUU5gF%2BMVnTxauuRlRxHqjYM9lr%2BmfnSHS6nU8bQRwWFLlsYTnIa0fWfOQyUoFh5nRAmDi5FuSDLydlVx%2F4chMcaRB0Wa7kgKuBEBPNnxPRx0koVKDnHMjJSb2gufwSTkMdP%2BEX8gXXurk9tNpiNO38nM6uNcvor2YxfZ3dPcOI9N1EJlnuXS9uesT%2BNmrCFIWQt0dklb0%2B3M3NJysvZZIQgN8VBIDHm88covuPemC6fj0ZQIHEdps0eHzyOVd83vFNxq3ahqTEpfL8AlpN0MjW70GMPTM5MAGOqUBURD84BbKVsI45BQjaZwPTgC%2BA0JUn2o5kUCfyI6tozm3eRxhIWbomQtV1a7wUuuiq85DJIpl1s71TQiotvQ8IfzxuCUjJW39nZzTASkDsbLyiyd77%2BQNynKzBGJ3cPRcwU%2Bf9EkLEyGrfyGSe1FEydEstKfFJhLB86lPotRGA54SJbwVBvvSH06KeEad42hJtAlV4Tw8b76gXTuyYENnTPuoNWOf&X-Amz-Signature=58e7def9da1cf8b0b5eb09ec6ed45d1b188a98e3f868ac3c6d7742cc170a548d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROMFSNLU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJUWvsvQ6%2FUtI3nzNchfubfWhr8qaXcLJHQUI%2Fnyxt1AiEA%2B8wR0kpzJcLGEYV5UzlloL74Ka6iRXRIWY1w8vdPr1Uq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKblQNFMLR9WHsX9SSrcA7HIiOJIjgLnvecamOASnIuvy1YpHTV7uEWwHOgzsVpRCAbY6S7t6D1l6Jhf%2FNENct2682NwRVCXVq2zULAiEbmfIaPxwv2ZclGe4Mz2I%2BRD7yKW62Y3oVKhFNvucZMgTq6%2BZZzriJg%2BFG9BhJ7YzRlpaLdo%2FG5l7phg2PZw%2BCd9EOokOyNpVOTNP5CSseMORqI%2FkWH%2Fcydp%2FCtk5uNKD%2FAdo9TMfoJqGnYoLN%2BIne4LtQyGY179OEjh1sg8bY82qzKjfgPWp51rZL5Yo%2Br0au2%2FKuB6w4n8JYjgsLXNIpaeJ%2Fo3QYOCyJRekO9smqTCM8E6e8RE330m24saJyMpEWkq7zFN6b%2FckvfUU5gF%2BMVnTxauuRlRxHqjYM9lr%2BmfnSHS6nU8bQRwWFLlsYTnIa0fWfOQyUoFh5nRAmDi5FuSDLydlVx%2F4chMcaRB0Wa7kgKuBEBPNnxPRx0koVKDnHMjJSb2gufwSTkMdP%2BEX8gXXurk9tNpiNO38nM6uNcvor2YxfZ3dPcOI9N1EJlnuXS9uesT%2BNmrCFIWQt0dklb0%2B3M3NJysvZZIQgN8VBIDHm88covuPemC6fj0ZQIHEdps0eHzyOVd83vFNxq3ahqTEpfL8AlpN0MjW70GMPTM5MAGOqUBURD84BbKVsI45BQjaZwPTgC%2BA0JUn2o5kUCfyI6tozm3eRxhIWbomQtV1a7wUuuiq85DJIpl1s71TQiotvQ8IfzxuCUjJW39nZzTASkDsbLyiyd77%2BQNynKzBGJ3cPRcwU%2Bf9EkLEyGrfyGSe1FEydEstKfFJhLB86lPotRGA54SJbwVBvvSH06KeEad42hJtAlV4Tw8b76gXTuyYENnTPuoNWOf&X-Amz-Signature=0ba33ab1aff2c23a0f56686ca1b18cf796c591ef106f9c6310f37ef557d40bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
