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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XSGK37%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChqCZTeT6stDzgx4kJsDrzjR8sn9so4mFEZSAqSK57KAiEAyuTNSTmWLuCS6qSR9fcOz%2B7V%2BlayusxK%2FxJIO1UM9kgqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqGF9hK8xTB3Ijy2CrcAyFymVsv23htN9aCvHfM1HhNH%2BK6WHfEN3g5L4iOQ8IX5bJHJoLAV36ON5FabV0ZuaiSrwfOhn3fSP4nGvBZv6eVtYMYofZtCwHpyvXeeBOI7OmitiHSCDcdK3higxRkvyhh62OXfIwWYDeYKdJZemiSuzIsvy82QvX4yvw%2BvGBs59ra7NMiMw9scXzw6yif4QV3mVCFa1IigB5wMMWiELh824IvY7ggErA1qt5jlJQuhR83Z4q3CMkMxGRZLpABxT0av9vCvncW0mcfl72sEvOoKJn60fxLncUCuuWWZiWYjpVfEL6L8E%2FtDjDo%2FoOsMiuuy4Vmjs%2BZBeI6PsYt4ZfUGS2%2BULOpvkQqKQmGfVxz6Gdyp0yY20lFpgWxCfMYnwhro0EIljpWAVwNhLG1EMBeQjsXMxvTgWIoSAOSVxzn%2BziMM0BA0GPlmVGYFdebnK3E2RxqQqAIzZAfiIsV1yUk8USwKBVljLAX4XjlnPa2NBTiiVvLAaULEKyrS9oPecx%2FjOZHeP4qtIFXJlJYID0ScsKiGQI9rCZ2vhdiX9B%2FnWEjhLnL1dhfyJYPE6eqDJk0p7LiJpr279s%2BqXgfdgS8Rsc4hhsoZmMh5g71alv8XPGvo34gm%2F%2B4gdBnMNnD2r0GOqUB%2BhzwaYwWFGu1ZFrn8PIagjVxme%2BuYCD84shUQ%2Bgnm%2FUwBVRCHtrgCXc7Ci6iuKA5IJxopmX%2FZsjg2nDuyAV9eODEq7DU0zamECFT595%2FtzVo8fCgjpEue9wC%2FHpPhfHVF1EOlAxcfpfNxhFvw3C48NwBBnL8dMGPF9ZmRtmpDu7f6ZL%2FGLivcU8CDrrdpUDsiDJDpBs4lqhpDbFlaPbFTID9uvR%2F&X-Amz-Signature=0012d062e4a4616da6743397015311ef2d7a4f770568bb7dbc07da21299a65d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XSGK37%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChqCZTeT6stDzgx4kJsDrzjR8sn9so4mFEZSAqSK57KAiEAyuTNSTmWLuCS6qSR9fcOz%2B7V%2BlayusxK%2FxJIO1UM9kgqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqGF9hK8xTB3Ijy2CrcAyFymVsv23htN9aCvHfM1HhNH%2BK6WHfEN3g5L4iOQ8IX5bJHJoLAV36ON5FabV0ZuaiSrwfOhn3fSP4nGvBZv6eVtYMYofZtCwHpyvXeeBOI7OmitiHSCDcdK3higxRkvyhh62OXfIwWYDeYKdJZemiSuzIsvy82QvX4yvw%2BvGBs59ra7NMiMw9scXzw6yif4QV3mVCFa1IigB5wMMWiELh824IvY7ggErA1qt5jlJQuhR83Z4q3CMkMxGRZLpABxT0av9vCvncW0mcfl72sEvOoKJn60fxLncUCuuWWZiWYjpVfEL6L8E%2FtDjDo%2FoOsMiuuy4Vmjs%2BZBeI6PsYt4ZfUGS2%2BULOpvkQqKQmGfVxz6Gdyp0yY20lFpgWxCfMYnwhro0EIljpWAVwNhLG1EMBeQjsXMxvTgWIoSAOSVxzn%2BziMM0BA0GPlmVGYFdebnK3E2RxqQqAIzZAfiIsV1yUk8USwKBVljLAX4XjlnPa2NBTiiVvLAaULEKyrS9oPecx%2FjOZHeP4qtIFXJlJYID0ScsKiGQI9rCZ2vhdiX9B%2FnWEjhLnL1dhfyJYPE6eqDJk0p7LiJpr279s%2BqXgfdgS8Rsc4hhsoZmMh5g71alv8XPGvo34gm%2F%2B4gdBnMNnD2r0GOqUB%2BhzwaYwWFGu1ZFrn8PIagjVxme%2BuYCD84shUQ%2Bgnm%2FUwBVRCHtrgCXc7Ci6iuKA5IJxopmX%2FZsjg2nDuyAV9eODEq7DU0zamECFT595%2FtzVo8fCgjpEue9wC%2FHpPhfHVF1EOlAxcfpfNxhFvw3C48NwBBnL8dMGPF9ZmRtmpDu7f6ZL%2FGLivcU8CDrrdpUDsiDJDpBs4lqhpDbFlaPbFTID9uvR%2F&X-Amz-Signature=685a4cf140257dfe36995a8db17825516c09efdd7f20cd7097ffa1661e561e5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XSGK37%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChqCZTeT6stDzgx4kJsDrzjR8sn9so4mFEZSAqSK57KAiEAyuTNSTmWLuCS6qSR9fcOz%2B7V%2BlayusxK%2FxJIO1UM9kgqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqGF9hK8xTB3Ijy2CrcAyFymVsv23htN9aCvHfM1HhNH%2BK6WHfEN3g5L4iOQ8IX5bJHJoLAV36ON5FabV0ZuaiSrwfOhn3fSP4nGvBZv6eVtYMYofZtCwHpyvXeeBOI7OmitiHSCDcdK3higxRkvyhh62OXfIwWYDeYKdJZemiSuzIsvy82QvX4yvw%2BvGBs59ra7NMiMw9scXzw6yif4QV3mVCFa1IigB5wMMWiELh824IvY7ggErA1qt5jlJQuhR83Z4q3CMkMxGRZLpABxT0av9vCvncW0mcfl72sEvOoKJn60fxLncUCuuWWZiWYjpVfEL6L8E%2FtDjDo%2FoOsMiuuy4Vmjs%2BZBeI6PsYt4ZfUGS2%2BULOpvkQqKQmGfVxz6Gdyp0yY20lFpgWxCfMYnwhro0EIljpWAVwNhLG1EMBeQjsXMxvTgWIoSAOSVxzn%2BziMM0BA0GPlmVGYFdebnK3E2RxqQqAIzZAfiIsV1yUk8USwKBVljLAX4XjlnPa2NBTiiVvLAaULEKyrS9oPecx%2FjOZHeP4qtIFXJlJYID0ScsKiGQI9rCZ2vhdiX9B%2FnWEjhLnL1dhfyJYPE6eqDJk0p7LiJpr279s%2BqXgfdgS8Rsc4hhsoZmMh5g71alv8XPGvo34gm%2F%2B4gdBnMNnD2r0GOqUB%2BhzwaYwWFGu1ZFrn8PIagjVxme%2BuYCD84shUQ%2Bgnm%2FUwBVRCHtrgCXc7Ci6iuKA5IJxopmX%2FZsjg2nDuyAV9eODEq7DU0zamECFT595%2FtzVo8fCgjpEue9wC%2FHpPhfHVF1EOlAxcfpfNxhFvw3C48NwBBnL8dMGPF9ZmRtmpDu7f6ZL%2FGLivcU8CDrrdpUDsiDJDpBs4lqhpDbFlaPbFTID9uvR%2F&X-Amz-Signature=1305161200539799dc022b0223a81c0e9c75b6aaa29492c75b899b2898122506&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
