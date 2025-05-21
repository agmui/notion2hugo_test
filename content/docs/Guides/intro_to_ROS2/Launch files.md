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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZQEOUF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNgj25nQl2T2y2CGKlaUbTOwBah3Po8BN4RoEu0IsUpAiEAzp2Jz%2FNKPGJu%2F63UZSxvRYYSbpM9Picgys%2FPXfyOnz8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw%2Fh4BuBtwltNUeOircA1XYUX7c2HB4rQ8axan8dFBZVjzQ7nZJ0c4a5RYsIor2ZZkAkvYRcQ%2BBBhXjOVKp9TtiSHbVOIERM2WI8iuJ2bIU9IL49MIlIjsW1UKxuA4SSc3JxeIe8lq3tvM9Y0n9S3xMVmNhsQ98CUqG2ttj3sY5zlfA4uJuFSYhjB2e7vcWoyV74%2BGgASjENJqM6lckpQEdR5BR%2BICp70zdsXQRC%2B6RnsT6i0m8WpIXT1yq154PNk1GgT%2Biruv0dGf2XHvr40fGYFR65CUguUVxCVAdAbgkTFhjG8WoNtLxHGErt%2F%2FvaFk%2B1I0TJndJEB9oDf6SKoR%2FDUhPcMNSt0COzfJGg3dTtcdqAQLe9Kp1ntcbl21ZBU9%2Fgb2qHL7tLnY8TuHqaibWzrFmX3rhmK%2BYberIfqOp2Xyl0dUzZQbioysB0T0lxaqzzh343IMervYUhNiM1FZeDv5V6GfFr1HG7CDr%2FUnbhqbLawSuwmAOBOLZR0A6mJjNgLWVCUuEC%2Fej6NkD945d1Jq%2BaG8x5Dh302wCtPVD1qY5aEBfWnDEKisd1B7cVgI0q%2F4THaMkelNlijoUOpv%2FeJ5WlXhTzRp41me1ldtcdRKBE8XNWI0P6l1XK0n64O%2FK7xhmvpB82LnsMK2QtcEGOqUB2u4VUCn%2FYSl3PdIc5Vyy%2BVAg9BoAeiEfXhhsFJDrtXfLgLPuC8LTJ%2F0DcZmpPznfMaO%2F4UXZmK6YY0N2TOYNgfDWnjC9gknrhbe8WJq3A0UXW7%2Fg0ZbP66e9Kw39tFMzXEyTQDD5yGCzXvTZSP8wUw%2BhmlgYmPaX0Qi1PLly1D9vWYSgA7yGbGqSsnEyutbMZ%2BouI3RXeNwCqo5uTCmTZTqm5Des&X-Amz-Signature=156554e17aa0b7ee5e9eed8f82c61aadeadfd81fc209e56888e76e2688677089&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZQEOUF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNgj25nQl2T2y2CGKlaUbTOwBah3Po8BN4RoEu0IsUpAiEAzp2Jz%2FNKPGJu%2F63UZSxvRYYSbpM9Picgys%2FPXfyOnz8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw%2Fh4BuBtwltNUeOircA1XYUX7c2HB4rQ8axan8dFBZVjzQ7nZJ0c4a5RYsIor2ZZkAkvYRcQ%2BBBhXjOVKp9TtiSHbVOIERM2WI8iuJ2bIU9IL49MIlIjsW1UKxuA4SSc3JxeIe8lq3tvM9Y0n9S3xMVmNhsQ98CUqG2ttj3sY5zlfA4uJuFSYhjB2e7vcWoyV74%2BGgASjENJqM6lckpQEdR5BR%2BICp70zdsXQRC%2B6RnsT6i0m8WpIXT1yq154PNk1GgT%2Biruv0dGf2XHvr40fGYFR65CUguUVxCVAdAbgkTFhjG8WoNtLxHGErt%2F%2FvaFk%2B1I0TJndJEB9oDf6SKoR%2FDUhPcMNSt0COzfJGg3dTtcdqAQLe9Kp1ntcbl21ZBU9%2Fgb2qHL7tLnY8TuHqaibWzrFmX3rhmK%2BYberIfqOp2Xyl0dUzZQbioysB0T0lxaqzzh343IMervYUhNiM1FZeDv5V6GfFr1HG7CDr%2FUnbhqbLawSuwmAOBOLZR0A6mJjNgLWVCUuEC%2Fej6NkD945d1Jq%2BaG8x5Dh302wCtPVD1qY5aEBfWnDEKisd1B7cVgI0q%2F4THaMkelNlijoUOpv%2FeJ5WlXhTzRp41me1ldtcdRKBE8XNWI0P6l1XK0n64O%2FK7xhmvpB82LnsMK2QtcEGOqUB2u4VUCn%2FYSl3PdIc5Vyy%2BVAg9BoAeiEfXhhsFJDrtXfLgLPuC8LTJ%2F0DcZmpPznfMaO%2F4UXZmK6YY0N2TOYNgfDWnjC9gknrhbe8WJq3A0UXW7%2Fg0ZbP66e9Kw39tFMzXEyTQDD5yGCzXvTZSP8wUw%2BhmlgYmPaX0Qi1PLly1D9vWYSgA7yGbGqSsnEyutbMZ%2BouI3RXeNwCqo5uTCmTZTqm5Des&X-Amz-Signature=c0c675e536b3101c63ed94f00944a7a8ed83fb9d27ae774f11311b1ed079dc00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZQEOUF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNgj25nQl2T2y2CGKlaUbTOwBah3Po8BN4RoEu0IsUpAiEAzp2Jz%2FNKPGJu%2F63UZSxvRYYSbpM9Picgys%2FPXfyOnz8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw%2Fh4BuBtwltNUeOircA1XYUX7c2HB4rQ8axan8dFBZVjzQ7nZJ0c4a5RYsIor2ZZkAkvYRcQ%2BBBhXjOVKp9TtiSHbVOIERM2WI8iuJ2bIU9IL49MIlIjsW1UKxuA4SSc3JxeIe8lq3tvM9Y0n9S3xMVmNhsQ98CUqG2ttj3sY5zlfA4uJuFSYhjB2e7vcWoyV74%2BGgASjENJqM6lckpQEdR5BR%2BICp70zdsXQRC%2B6RnsT6i0m8WpIXT1yq154PNk1GgT%2Biruv0dGf2XHvr40fGYFR65CUguUVxCVAdAbgkTFhjG8WoNtLxHGErt%2F%2FvaFk%2B1I0TJndJEB9oDf6SKoR%2FDUhPcMNSt0COzfJGg3dTtcdqAQLe9Kp1ntcbl21ZBU9%2Fgb2qHL7tLnY8TuHqaibWzrFmX3rhmK%2BYberIfqOp2Xyl0dUzZQbioysB0T0lxaqzzh343IMervYUhNiM1FZeDv5V6GfFr1HG7CDr%2FUnbhqbLawSuwmAOBOLZR0A6mJjNgLWVCUuEC%2Fej6NkD945d1Jq%2BaG8x5Dh302wCtPVD1qY5aEBfWnDEKisd1B7cVgI0q%2F4THaMkelNlijoUOpv%2FeJ5WlXhTzRp41me1ldtcdRKBE8XNWI0P6l1XK0n64O%2FK7xhmvpB82LnsMK2QtcEGOqUB2u4VUCn%2FYSl3PdIc5Vyy%2BVAg9BoAeiEfXhhsFJDrtXfLgLPuC8LTJ%2F0DcZmpPznfMaO%2F4UXZmK6YY0N2TOYNgfDWnjC9gknrhbe8WJq3A0UXW7%2Fg0ZbP66e9Kw39tFMzXEyTQDD5yGCzXvTZSP8wUw%2BhmlgYmPaX0Qi1PLly1D9vWYSgA7yGbGqSsnEyutbMZ%2BouI3RXeNwCqo5uTCmTZTqm5Des&X-Amz-Signature=d7441385673c4f9fd53770c62540ecdbef6deb54dfbc0c225dc6edd87b1bf081&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
