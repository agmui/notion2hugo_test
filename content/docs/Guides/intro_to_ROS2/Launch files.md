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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QGRVMIM%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDjF%2Ft7LM3oTRUc401dYYZnhwey%2Bt%2BITOQi8dI1BNw5WwIhAJl4Y924MFZ%2Fp6fH0miiuKzsY0PvD7UyfPHjDyj1okdJKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRfbIzCxPeHSVZWcgq3AM4Q1UspS09cLHvS2av%2B%2F5d6oHBgO1VH5UOb3TKb36MLmTJosv1FRRzO7kwzsO0xNJ527FxCaOFdG3jjaRt9JK0NM39clpw80UcP6jTjhjtr9V9l8Le%2FPHQjONNTwChNLBTnd341Fu%2FUnfPNNLopbKiHWhM6al47nkaNs%2FzTOTXzOEycfRj1tNZwG2IZjWORb3jEbSAamBabG4%2Bjto6r8t8nNlm9gLtCOFvos9hp%2BrzHgZ0G8DZpCYv2sIWZDVMJwwzcWvIeuFeJHEJP%2BjW%2FUEsk%2B%2FjFeEIEvcULyM57UjFVxb0eX%2ByAttQix%2FuZTN03wTb4rGhtTYpyivbuNqMLVfRY9tM5E1Xu3ifpuA7uKLG8WpGQfVRhcMlbnv%2Bxw3%2BgQoZYUVXvb5Hf3oRbBE1OxPR6KCo0PIVPndh0o5TQH8gA1a1SIPecXB56wUrDuCJylNVs9Y7Dco8ft7PJYS6AYwElTVleLl%2FxdHioX4MV2PJGByL0faDClTeMtULAYzY0Jh17UhZ7eQ4efB9VFPeXawNRIVvOVYOnq2tqhi%2BfrV3eVp8E%2BTI4%2BIMWatPo4ERhKcf4neay3wpXaTVSPW5rwd2V3xt1xH3JwaHi%2Br%2FY4Q6d%2FfGR7Xim7%2FzQidVcDCEgfPBBjqkAePz0UYN%2BKQnrgSUVQkaxc8P6yjtYhp2iL65S%2BtoQ7c6TcHjntO1yEizJckl9cGnZc6Oz1Sc5iWnl3rIWuQ6JGwQU34y%2BjAKe2pokqORzKBHrp1FyzMtbsupjheTqMMNxJ3LSPNNT7mMePiNiiGQvzG%2FTJPvkteXF25Cba8Al2G%2BebxaMSPo8qBb0mJ0bMF9lEQj8WQeWRXL8W3VT5d6gHIvUrfd&X-Amz-Signature=d8674317711131f212de6a61d794c7fafd27d9b6ae841b7b543a7e82c8b2d6b2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QGRVMIM%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDjF%2Ft7LM3oTRUc401dYYZnhwey%2Bt%2BITOQi8dI1BNw5WwIhAJl4Y924MFZ%2Fp6fH0miiuKzsY0PvD7UyfPHjDyj1okdJKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRfbIzCxPeHSVZWcgq3AM4Q1UspS09cLHvS2av%2B%2F5d6oHBgO1VH5UOb3TKb36MLmTJosv1FRRzO7kwzsO0xNJ527FxCaOFdG3jjaRt9JK0NM39clpw80UcP6jTjhjtr9V9l8Le%2FPHQjONNTwChNLBTnd341Fu%2FUnfPNNLopbKiHWhM6al47nkaNs%2FzTOTXzOEycfRj1tNZwG2IZjWORb3jEbSAamBabG4%2Bjto6r8t8nNlm9gLtCOFvos9hp%2BrzHgZ0G8DZpCYv2sIWZDVMJwwzcWvIeuFeJHEJP%2BjW%2FUEsk%2B%2FjFeEIEvcULyM57UjFVxb0eX%2ByAttQix%2FuZTN03wTb4rGhtTYpyivbuNqMLVfRY9tM5E1Xu3ifpuA7uKLG8WpGQfVRhcMlbnv%2Bxw3%2BgQoZYUVXvb5Hf3oRbBE1OxPR6KCo0PIVPndh0o5TQH8gA1a1SIPecXB56wUrDuCJylNVs9Y7Dco8ft7PJYS6AYwElTVleLl%2FxdHioX4MV2PJGByL0faDClTeMtULAYzY0Jh17UhZ7eQ4efB9VFPeXawNRIVvOVYOnq2tqhi%2BfrV3eVp8E%2BTI4%2BIMWatPo4ERhKcf4neay3wpXaTVSPW5rwd2V3xt1xH3JwaHi%2Br%2FY4Q6d%2FfGR7Xim7%2FzQidVcDCEgfPBBjqkAePz0UYN%2BKQnrgSUVQkaxc8P6yjtYhp2iL65S%2BtoQ7c6TcHjntO1yEizJckl9cGnZc6Oz1Sc5iWnl3rIWuQ6JGwQU34y%2BjAKe2pokqORzKBHrp1FyzMtbsupjheTqMMNxJ3LSPNNT7mMePiNiiGQvzG%2FTJPvkteXF25Cba8Al2G%2BebxaMSPo8qBb0mJ0bMF9lEQj8WQeWRXL8W3VT5d6gHIvUrfd&X-Amz-Signature=35c513ff7a60414ec374cf837a3c41a813a85209122b76e7164fcc285ffb5bec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QGRVMIM%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDjF%2Ft7LM3oTRUc401dYYZnhwey%2Bt%2BITOQi8dI1BNw5WwIhAJl4Y924MFZ%2Fp6fH0miiuKzsY0PvD7UyfPHjDyj1okdJKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRfbIzCxPeHSVZWcgq3AM4Q1UspS09cLHvS2av%2B%2F5d6oHBgO1VH5UOb3TKb36MLmTJosv1FRRzO7kwzsO0xNJ527FxCaOFdG3jjaRt9JK0NM39clpw80UcP6jTjhjtr9V9l8Le%2FPHQjONNTwChNLBTnd341Fu%2FUnfPNNLopbKiHWhM6al47nkaNs%2FzTOTXzOEycfRj1tNZwG2IZjWORb3jEbSAamBabG4%2Bjto6r8t8nNlm9gLtCOFvos9hp%2BrzHgZ0G8DZpCYv2sIWZDVMJwwzcWvIeuFeJHEJP%2BjW%2FUEsk%2B%2FjFeEIEvcULyM57UjFVxb0eX%2ByAttQix%2FuZTN03wTb4rGhtTYpyivbuNqMLVfRY9tM5E1Xu3ifpuA7uKLG8WpGQfVRhcMlbnv%2Bxw3%2BgQoZYUVXvb5Hf3oRbBE1OxPR6KCo0PIVPndh0o5TQH8gA1a1SIPecXB56wUrDuCJylNVs9Y7Dco8ft7PJYS6AYwElTVleLl%2FxdHioX4MV2PJGByL0faDClTeMtULAYzY0Jh17UhZ7eQ4efB9VFPeXawNRIVvOVYOnq2tqhi%2BfrV3eVp8E%2BTI4%2BIMWatPo4ERhKcf4neay3wpXaTVSPW5rwd2V3xt1xH3JwaHi%2Br%2FY4Q6d%2FfGR7Xim7%2FzQidVcDCEgfPBBjqkAePz0UYN%2BKQnrgSUVQkaxc8P6yjtYhp2iL65S%2BtoQ7c6TcHjntO1yEizJckl9cGnZc6Oz1Sc5iWnl3rIWuQ6JGwQU34y%2BjAKe2pokqORzKBHrp1FyzMtbsupjheTqMMNxJ3LSPNNT7mMePiNiiGQvzG%2FTJPvkteXF25Cba8Al2G%2BebxaMSPo8qBb0mJ0bMF9lEQj8WQeWRXL8W3VT5d6gHIvUrfd&X-Amz-Signature=56ef6929e729fb68096d94b33e58444716bd68472e6763aed5cd3b21a064d74b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
