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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2VK45Z3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9P98OyNlFxZmSXAJ1vhvU%2BGhsjWqBiuo7FMQm5STgHAiA80ivxf59JSkRbffnA%2B1D4cvTyy5y5SeQKztYQviMpNCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUFXVb7PkYZ2qDvVdKtwDXyK6g%2Fz%2FwPRKvs9NPCsSUZjRXKpl6OweVHoe8n9lXJ42mIsMVTfOJv2wxjGMrQ0SrOS01rx7IUN0998C6dBI8QIk4%2FP9Ns9%2FxS%2FbZQiNh5AmcS5Shapb49TeepJ66J5CnZ4PVo41hHFKSyX8PnFguibS%2BWYawRW8%2Fa%2FQVaiMFfh7X8W5jbMWXO0bBcOuse2mj%2BEXleJZPEzHTgt%2BoQpa7dBPEnW3XkdAEjSDPbzZ%2B90Dk2xcZ1Qy7YMs0NtjaNQXVxgh%2FN00AZJQukhPYAbNIkV0i5Eb9XRu8aO6YGTPiTlBH5NZzalreG1eMfdZAgoCkfJCWKuMnnCcbWE0HJq1zWnFkrdvs48yOUizPgnYp4X6IdxGCSkw38rmtDPRocXJoyPx3fBKYiHlQBNf04lKTnLBk4GA%2BlCzbN77eTntGmCWWHcEC4BWf20CkC0HhvMKsNXc9MU392sIY2g%2B%2FGR%2FgBCDZ7JbcKNisv9o1tss7z5VZyfGfkiDX8LoIWB%2F7PF8Ck07tQgO3AS3tTf30yvt%2Fk7p6e0xgzTBJQRccBtZJXM%2Fq%2BjBfHmd9OKb9Py0vcUyulQd5DSErXeyfzsb8QDH%2BHQ7oU9ecKF%2BeC6KRkRkhB2THOHw%2FbKQi6lI%2F1Ew%2B8b4vAY6pgFu4ZcqNjuVU9F1275P6IntY1kfOnzGBVHNvWH064OV6svnzae7fD82JH1h3wW%2FXOl9iFZqY8zKeokqxQYXmdcViPYvuO9e6IfTl3cZVcwpemgIDRlANkuZ6XpMk3ehJCBOb%2FnKdJZOv3nYzj1pzY5l3fpezUU%2BnlUdSbDj%2F4%2FJ8r7n7QYE15uC1p3Pg7MtqHUyihGv9TDXN8eGVajrKDUI6%2FnV%2FoxJ&X-Amz-Signature=058a2d02d7b51db353b11063cbc269271f37a386d79121de16cb884eb308a487&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2VK45Z3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9P98OyNlFxZmSXAJ1vhvU%2BGhsjWqBiuo7FMQm5STgHAiA80ivxf59JSkRbffnA%2B1D4cvTyy5y5SeQKztYQviMpNCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUFXVb7PkYZ2qDvVdKtwDXyK6g%2Fz%2FwPRKvs9NPCsSUZjRXKpl6OweVHoe8n9lXJ42mIsMVTfOJv2wxjGMrQ0SrOS01rx7IUN0998C6dBI8QIk4%2FP9Ns9%2FxS%2FbZQiNh5AmcS5Shapb49TeepJ66J5CnZ4PVo41hHFKSyX8PnFguibS%2BWYawRW8%2Fa%2FQVaiMFfh7X8W5jbMWXO0bBcOuse2mj%2BEXleJZPEzHTgt%2BoQpa7dBPEnW3XkdAEjSDPbzZ%2B90Dk2xcZ1Qy7YMs0NtjaNQXVxgh%2FN00AZJQukhPYAbNIkV0i5Eb9XRu8aO6YGTPiTlBH5NZzalreG1eMfdZAgoCkfJCWKuMnnCcbWE0HJq1zWnFkrdvs48yOUizPgnYp4X6IdxGCSkw38rmtDPRocXJoyPx3fBKYiHlQBNf04lKTnLBk4GA%2BlCzbN77eTntGmCWWHcEC4BWf20CkC0HhvMKsNXc9MU392sIY2g%2B%2FGR%2FgBCDZ7JbcKNisv9o1tss7z5VZyfGfkiDX8LoIWB%2F7PF8Ck07tQgO3AS3tTf30yvt%2Fk7p6e0xgzTBJQRccBtZJXM%2Fq%2BjBfHmd9OKb9Py0vcUyulQd5DSErXeyfzsb8QDH%2BHQ7oU9ecKF%2BeC6KRkRkhB2THOHw%2FbKQi6lI%2F1Ew%2B8b4vAY6pgFu4ZcqNjuVU9F1275P6IntY1kfOnzGBVHNvWH064OV6svnzae7fD82JH1h3wW%2FXOl9iFZqY8zKeokqxQYXmdcViPYvuO9e6IfTl3cZVcwpemgIDRlANkuZ6XpMk3ehJCBOb%2FnKdJZOv3nYzj1pzY5l3fpezUU%2BnlUdSbDj%2F4%2FJ8r7n7QYE15uC1p3Pg7MtqHUyihGv9TDXN8eGVajrKDUI6%2FnV%2FoxJ&X-Amz-Signature=b485c6a13107f80567ecb398d27e4c0aba2e42c32f1250c5d22cb441d12510c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2VK45Z3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9P98OyNlFxZmSXAJ1vhvU%2BGhsjWqBiuo7FMQm5STgHAiA80ivxf59JSkRbffnA%2B1D4cvTyy5y5SeQKztYQviMpNCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUFXVb7PkYZ2qDvVdKtwDXyK6g%2Fz%2FwPRKvs9NPCsSUZjRXKpl6OweVHoe8n9lXJ42mIsMVTfOJv2wxjGMrQ0SrOS01rx7IUN0998C6dBI8QIk4%2FP9Ns9%2FxS%2FbZQiNh5AmcS5Shapb49TeepJ66J5CnZ4PVo41hHFKSyX8PnFguibS%2BWYawRW8%2Fa%2FQVaiMFfh7X8W5jbMWXO0bBcOuse2mj%2BEXleJZPEzHTgt%2BoQpa7dBPEnW3XkdAEjSDPbzZ%2B90Dk2xcZ1Qy7YMs0NtjaNQXVxgh%2FN00AZJQukhPYAbNIkV0i5Eb9XRu8aO6YGTPiTlBH5NZzalreG1eMfdZAgoCkfJCWKuMnnCcbWE0HJq1zWnFkrdvs48yOUizPgnYp4X6IdxGCSkw38rmtDPRocXJoyPx3fBKYiHlQBNf04lKTnLBk4GA%2BlCzbN77eTntGmCWWHcEC4BWf20CkC0HhvMKsNXc9MU392sIY2g%2B%2FGR%2FgBCDZ7JbcKNisv9o1tss7z5VZyfGfkiDX8LoIWB%2F7PF8Ck07tQgO3AS3tTf30yvt%2Fk7p6e0xgzTBJQRccBtZJXM%2Fq%2BjBfHmd9OKb9Py0vcUyulQd5DSErXeyfzsb8QDH%2BHQ7oU9ecKF%2BeC6KRkRkhB2THOHw%2FbKQi6lI%2F1Ew%2B8b4vAY6pgFu4ZcqNjuVU9F1275P6IntY1kfOnzGBVHNvWH064OV6svnzae7fD82JH1h3wW%2FXOl9iFZqY8zKeokqxQYXmdcViPYvuO9e6IfTl3cZVcwpemgIDRlANkuZ6XpMk3ehJCBOb%2FnKdJZOv3nYzj1pzY5l3fpezUU%2BnlUdSbDj%2F4%2FJ8r7n7QYE15uC1p3Pg7MtqHUyihGv9TDXN8eGVajrKDUI6%2FnV%2FoxJ&X-Amz-Signature=a412b59ea6e95bbce0b3ab78d1c12accd4f9b5e0c50dd6356955ca963b9b7bf7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
