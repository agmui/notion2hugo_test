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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VVRGNT2%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO7L1tqygET73yD10FGlLrHmdlAtOqI8CpOp1XY85T4AiEA0P7Amq6lqj7VS0asQ5m1H3rE5DSmsxfHWwZt0WVo3bsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMmWiDueKz2mc%2BLu%2FCrcA1APJfKGrN8fHPuX3dyL1BE4h26dAnmV%2BxWo9rvOEfLGF%2F4nQfIVC9s9Zfnvs%2BQvgWlkok1AF307jEuwrc1UznrZkRUc9VxISKNAcuAXmFeGw8wZ%2FIhc%2Bd%2FcKezuHVtfJWnfeRTAlG4e7alGa636jlgrYH9wY7VEXvbUcNNbmMap5tuo004A9JrHRhukODvcTWkALTBTYOK4WXDYa55Xw7%2BuNPiNt9Ar8IrAc0Jfo41PIPJ%2F4O8hap2KC28F26gxuXHDLlLlSnEQYUM8oZ8aY4vzaIpCD%2BVL1auhYxg9taqdV0UI2QjclPYCOcx2gaQ5tI0KHnKs3mOl%2F6O7gIA9PuXhYZ%2Binq5maAo2EwMuGfgqDt2Dp0sGNpc%2Bvz%2F498DbOw9T6h4ndFXe1HmKjtioWTItwt1tnQqKIvLrz2wbx1Adts9SnmIVa9OpuPGuyRG%2B%2BBz8oQNs7%2BXWRXjxpn92GwnkhLahB1eoMooYdVcceaQqQ5lKhCqECF79eNPovCTJOjl9NLePUDay3fY48kl9SFyeiO5uWx6BMUhNB5spI0z29vaIcqcZl25OAvrFVPYhcKbr12fQRCriXnzz%2BFTjSNEjETnEzr71x6OQwDZQ%2BC%2FuAxkGEnkLfN8UbjIfMI6wmckGOqUB8XNLQ8YPJBo%2B9sVbqD9qPs2irajwpmLw0wPuGtuRudzjYFjEV2493t1rGWG3R2lrjzdC3csZP6%2FhLE%2FFnTkVBps9oi73gFaDEG5p7KVoCLuoZkxEBkUjVdnsWf%2F64nueYjU4eRmveXQPdcm%2B6o879GlbrqeK4JNF2GuyCIbhSuAf3fT6udCvzmgidLKy%2FmKBJwMPSbFGCYwthqmaneylhAbMDsJj&X-Amz-Signature=ccdaa2286e1921826799114e435d43a00b97889e138647c87beea549064d79ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VVRGNT2%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO7L1tqygET73yD10FGlLrHmdlAtOqI8CpOp1XY85T4AiEA0P7Amq6lqj7VS0asQ5m1H3rE5DSmsxfHWwZt0WVo3bsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMmWiDueKz2mc%2BLu%2FCrcA1APJfKGrN8fHPuX3dyL1BE4h26dAnmV%2BxWo9rvOEfLGF%2F4nQfIVC9s9Zfnvs%2BQvgWlkok1AF307jEuwrc1UznrZkRUc9VxISKNAcuAXmFeGw8wZ%2FIhc%2Bd%2FcKezuHVtfJWnfeRTAlG4e7alGa636jlgrYH9wY7VEXvbUcNNbmMap5tuo004A9JrHRhukODvcTWkALTBTYOK4WXDYa55Xw7%2BuNPiNt9Ar8IrAc0Jfo41PIPJ%2F4O8hap2KC28F26gxuXHDLlLlSnEQYUM8oZ8aY4vzaIpCD%2BVL1auhYxg9taqdV0UI2QjclPYCOcx2gaQ5tI0KHnKs3mOl%2F6O7gIA9PuXhYZ%2Binq5maAo2EwMuGfgqDt2Dp0sGNpc%2Bvz%2F498DbOw9T6h4ndFXe1HmKjtioWTItwt1tnQqKIvLrz2wbx1Adts9SnmIVa9OpuPGuyRG%2B%2BBz8oQNs7%2BXWRXjxpn92GwnkhLahB1eoMooYdVcceaQqQ5lKhCqECF79eNPovCTJOjl9NLePUDay3fY48kl9SFyeiO5uWx6BMUhNB5spI0z29vaIcqcZl25OAvrFVPYhcKbr12fQRCriXnzz%2BFTjSNEjETnEzr71x6OQwDZQ%2BC%2FuAxkGEnkLfN8UbjIfMI6wmckGOqUB8XNLQ8YPJBo%2B9sVbqD9qPs2irajwpmLw0wPuGtuRudzjYFjEV2493t1rGWG3R2lrjzdC3csZP6%2FhLE%2FFnTkVBps9oi73gFaDEG5p7KVoCLuoZkxEBkUjVdnsWf%2F64nueYjU4eRmveXQPdcm%2B6o879GlbrqeK4JNF2GuyCIbhSuAf3fT6udCvzmgidLKy%2FmKBJwMPSbFGCYwthqmaneylhAbMDsJj&X-Amz-Signature=d02c908d6cd34b52b84b5c3ec99d7868f41dad21897ba8d8b125e1a4f06a88ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VVRGNT2%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO7L1tqygET73yD10FGlLrHmdlAtOqI8CpOp1XY85T4AiEA0P7Amq6lqj7VS0asQ5m1H3rE5DSmsxfHWwZt0WVo3bsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMmWiDueKz2mc%2BLu%2FCrcA1APJfKGrN8fHPuX3dyL1BE4h26dAnmV%2BxWo9rvOEfLGF%2F4nQfIVC9s9Zfnvs%2BQvgWlkok1AF307jEuwrc1UznrZkRUc9VxISKNAcuAXmFeGw8wZ%2FIhc%2Bd%2FcKezuHVtfJWnfeRTAlG4e7alGa636jlgrYH9wY7VEXvbUcNNbmMap5tuo004A9JrHRhukODvcTWkALTBTYOK4WXDYa55Xw7%2BuNPiNt9Ar8IrAc0Jfo41PIPJ%2F4O8hap2KC28F26gxuXHDLlLlSnEQYUM8oZ8aY4vzaIpCD%2BVL1auhYxg9taqdV0UI2QjclPYCOcx2gaQ5tI0KHnKs3mOl%2F6O7gIA9PuXhYZ%2Binq5maAo2EwMuGfgqDt2Dp0sGNpc%2Bvz%2F498DbOw9T6h4ndFXe1HmKjtioWTItwt1tnQqKIvLrz2wbx1Adts9SnmIVa9OpuPGuyRG%2B%2BBz8oQNs7%2BXWRXjxpn92GwnkhLahB1eoMooYdVcceaQqQ5lKhCqECF79eNPovCTJOjl9NLePUDay3fY48kl9SFyeiO5uWx6BMUhNB5spI0z29vaIcqcZl25OAvrFVPYhcKbr12fQRCriXnzz%2BFTjSNEjETnEzr71x6OQwDZQ%2BC%2FuAxkGEnkLfN8UbjIfMI6wmckGOqUB8XNLQ8YPJBo%2B9sVbqD9qPs2irajwpmLw0wPuGtuRudzjYFjEV2493t1rGWG3R2lrjzdC3csZP6%2FhLE%2FFnTkVBps9oi73gFaDEG5p7KVoCLuoZkxEBkUjVdnsWf%2F64nueYjU4eRmveXQPdcm%2B6o879GlbrqeK4JNF2GuyCIbhSuAf3fT6udCvzmgidLKy%2FmKBJwMPSbFGCYwthqmaneylhAbMDsJj&X-Amz-Signature=22e145f0b3e2531fcd267c881ff7ec6ca9bf2dc4f56ed90451eb3d3def4dab7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
