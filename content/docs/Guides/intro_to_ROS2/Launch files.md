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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2AGAKYH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDNPF1R%2B%2FitBs5O2s%2FYfhMIgJBe0BTFsJcanO3kSS6%2FNAiEAg2TTjIZrSdyTYlxKkH%2FU2MciU2ntE52VGccxiYwB5KIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNvCfqDnIkD97AmR3SrcA9bRNJrt1O7%2F6ZlZZuBaeJGwczpgOY4rM0lWEhalqgETEsOgEtY6pgteaqrrSaNYKHgcIDDoR%2FhoQqTatAa5DPth469R%2FAA2U47JzrN%2F2vxIsSSwPdeX2G3P03Hg%2BVjucjOyS5GoV6F3eUVbSS2Nq26LGKB9h541GTze57Ix7Ypv0ZZhE0pSQFjmZReHa1Dd5pQqs6BuqZjSFKqjcXQ%2FWBAcr9zAWEQEm0a0GEzfEMuqSZy36zXPNK5%2F6fyhHo6xTyJEJijf9B3GVf8yVRgYRkp0KHIINORosBxyQvuKfMKF8WTiMDCDrAwy8t3j4uWyuuBg7B%2BvTpe5cNrfDiuN65fwpZx1ZzOzZLyINkCuIPtrMU2EL9Dw1c%2BQW0sSCKnLy4fXmaJdRuFxIuSGzrGe98xtizTwZVUuHpyLLvEuXiaKS9OGft%2B1gew4vA64QzKsascuiTESDWUl2nbFtk8y3F6mAT%2BkF2y5es1qSR38L4fvBT5bJp%2BuaSy8iasn8W4UVMksa2NIsFDrOwi%2BdvQoOMVDNH8dMl1x7a6JAPb%2BWevQ14o9VTX%2BTmxm8oyUnW6J76eDMLIerB8989mHNg1NSqqOXRkQYOfZOUTv9tYTgXtuZkDC%2BJvoiW%2BY41kDMMy5lL0GOqUBjmE85%2FdCuCqDcvT4zZROV6vCPHHNq5qwK9XhER1kq8O5anFiUYPwGqkDPNFESIN4tHpPnNGB%2BGUmnhLQOYy1EEHnGhJr6IK8tOm4JU%2F04xhGF55E0M6SGFTf9Oi86SAf6plbH58LuqUfM1X5C2e2Y33tyc6OqHrykJWnfJA4Ui58IF2VSiAwVA22hC3DdfIwNUcs%2BCJ%2F4IB12eBBpaSYKTvAcjEz&X-Amz-Signature=9a11c2ab2290fe4765696fe32b6291f97616c58d9d7c7096121544a93cb19772&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2AGAKYH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDNPF1R%2B%2FitBs5O2s%2FYfhMIgJBe0BTFsJcanO3kSS6%2FNAiEAg2TTjIZrSdyTYlxKkH%2FU2MciU2ntE52VGccxiYwB5KIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNvCfqDnIkD97AmR3SrcA9bRNJrt1O7%2F6ZlZZuBaeJGwczpgOY4rM0lWEhalqgETEsOgEtY6pgteaqrrSaNYKHgcIDDoR%2FhoQqTatAa5DPth469R%2FAA2U47JzrN%2F2vxIsSSwPdeX2G3P03Hg%2BVjucjOyS5GoV6F3eUVbSS2Nq26LGKB9h541GTze57Ix7Ypv0ZZhE0pSQFjmZReHa1Dd5pQqs6BuqZjSFKqjcXQ%2FWBAcr9zAWEQEm0a0GEzfEMuqSZy36zXPNK5%2F6fyhHo6xTyJEJijf9B3GVf8yVRgYRkp0KHIINORosBxyQvuKfMKF8WTiMDCDrAwy8t3j4uWyuuBg7B%2BvTpe5cNrfDiuN65fwpZx1ZzOzZLyINkCuIPtrMU2EL9Dw1c%2BQW0sSCKnLy4fXmaJdRuFxIuSGzrGe98xtizTwZVUuHpyLLvEuXiaKS9OGft%2B1gew4vA64QzKsascuiTESDWUl2nbFtk8y3F6mAT%2BkF2y5es1qSR38L4fvBT5bJp%2BuaSy8iasn8W4UVMksa2NIsFDrOwi%2BdvQoOMVDNH8dMl1x7a6JAPb%2BWevQ14o9VTX%2BTmxm8oyUnW6J76eDMLIerB8989mHNg1NSqqOXRkQYOfZOUTv9tYTgXtuZkDC%2BJvoiW%2BY41kDMMy5lL0GOqUBjmE85%2FdCuCqDcvT4zZROV6vCPHHNq5qwK9XhER1kq8O5anFiUYPwGqkDPNFESIN4tHpPnNGB%2BGUmnhLQOYy1EEHnGhJr6IK8tOm4JU%2F04xhGF55E0M6SGFTf9Oi86SAf6plbH58LuqUfM1X5C2e2Y33tyc6OqHrykJWnfJA4Ui58IF2VSiAwVA22hC3DdfIwNUcs%2BCJ%2F4IB12eBBpaSYKTvAcjEz&X-Amz-Signature=e0be16ce599af78f757f617cf4964d376b32d5b64af7923f3be0916e892a7936&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2AGAKYH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDNPF1R%2B%2FitBs5O2s%2FYfhMIgJBe0BTFsJcanO3kSS6%2FNAiEAg2TTjIZrSdyTYlxKkH%2FU2MciU2ntE52VGccxiYwB5KIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNvCfqDnIkD97AmR3SrcA9bRNJrt1O7%2F6ZlZZuBaeJGwczpgOY4rM0lWEhalqgETEsOgEtY6pgteaqrrSaNYKHgcIDDoR%2FhoQqTatAa5DPth469R%2FAA2U47JzrN%2F2vxIsSSwPdeX2G3P03Hg%2BVjucjOyS5GoV6F3eUVbSS2Nq26LGKB9h541GTze57Ix7Ypv0ZZhE0pSQFjmZReHa1Dd5pQqs6BuqZjSFKqjcXQ%2FWBAcr9zAWEQEm0a0GEzfEMuqSZy36zXPNK5%2F6fyhHo6xTyJEJijf9B3GVf8yVRgYRkp0KHIINORosBxyQvuKfMKF8WTiMDCDrAwy8t3j4uWyuuBg7B%2BvTpe5cNrfDiuN65fwpZx1ZzOzZLyINkCuIPtrMU2EL9Dw1c%2BQW0sSCKnLy4fXmaJdRuFxIuSGzrGe98xtizTwZVUuHpyLLvEuXiaKS9OGft%2B1gew4vA64QzKsascuiTESDWUl2nbFtk8y3F6mAT%2BkF2y5es1qSR38L4fvBT5bJp%2BuaSy8iasn8W4UVMksa2NIsFDrOwi%2BdvQoOMVDNH8dMl1x7a6JAPb%2BWevQ14o9VTX%2BTmxm8oyUnW6J76eDMLIerB8989mHNg1NSqqOXRkQYOfZOUTv9tYTgXtuZkDC%2BJvoiW%2BY41kDMMy5lL0GOqUBjmE85%2FdCuCqDcvT4zZROV6vCPHHNq5qwK9XhER1kq8O5anFiUYPwGqkDPNFESIN4tHpPnNGB%2BGUmnhLQOYy1EEHnGhJr6IK8tOm4JU%2F04xhGF55E0M6SGFTf9Oi86SAf6plbH58LuqUfM1X5C2e2Y33tyc6OqHrykJWnfJA4Ui58IF2VSiAwVA22hC3DdfIwNUcs%2BCJ%2F4IB12eBBpaSYKTvAcjEz&X-Amz-Signature=1eb3e2910cd85f630fe512ff7d98177b5bbe1ed94a9a4c013a955724b7e1ae63&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
