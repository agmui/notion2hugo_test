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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566USH37%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCBWkhLbFvJyn9XLB2OYc18DsMjEz6CIKElKOMcKbV1tQIhAOXdIy1ehdhmhgtjDntbTPYkHjD4cGF1y%2Fuo9G0%2FSkUYKv8DCFQQABoMNjM3NDIzMTgzODA1IgypBO5DCXGKMlGM70gq3APdsvg8x5JezFpk8Um7cYUkir%2BwzO6%2FBqVlHH0QeYm1I5gxzRG7uAUJRksi%2FEG1LslBwxgs6LUU0cfjCcOI8cWsNCxex7Sl536x4yy%2F6AVc%2BvF8A0m26OsYqGz%2FZgZobGMUgli30eyiCZ1rgHWX%2F%2BGt8om%2Flpupwt8X7fy9TZ3hFFV%2BWh96xOB07rweK6VG%2B0zUkvWljiK7eOnU3m5ihrlOybz79oCYCg37lV2R7uNnYcNrXusSmM87fi4ZIDgtYQPjb2CJtsVRQsj%2FtS1B2t82GIhgLm395WcSHHN04SDbvkucWq3CKDit6CSLTI2cPT%2B5JjbOouCHthsPpd6fGtDji8v4HYfY%2FI9LIcEZaduQoe%2Bn4AButGLiW0GiwJHcMv3YubhQ24HFTNuSBsm9Jfl7uqhXPg%2BWWvPhTX97CFR4vaMAOn42At6UrLLBfbIuo%2FPLOplRk%2Fxaw%2FJ88Y3R%2FSBtPbMVyY%2FZlMorJSsKQeUVK%2FLtn8LVEbIhYdhQ0K%2F8KICGONiltn2AYJXekA%2FzfaqBCsmKkctD%2BqpfLmS43P1Bao4kqrheNMCyKEe9OGY9eOEmFXrYuJbXLeW9266I5bhPp%2BIqOM%2BoZA8H6XbBzcf5w2gBJb6MD9fBbkRC3jCNkr7CBjqkAWdIb6WAc%2FZ%2BZQV7Jo8Q1LYcjj5Xk%2BxFdi4S390WWRdnUA7Hsye8M4akv6OqApnzVGdtvrnYtXOLWhMEl4q3ar0LH3z6xsVrj6NYsmj2AzeSCJKqdfzx%2Faj7RDsIzPGA8HnHjGJCpF6%2F%2FwLy5CaMTlF1yy49VU1XG6rzEZPkqJ84RKtcJWECiJt5ot8a%2B3aiuKLJ%2Bxh4HJE8T9VI3ub30xdZc5oT&X-Amz-Signature=5ff344ed656bf89eb94f820b1b24d4df693a88ed2a3948a699d98c2ba29007a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566USH37%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCBWkhLbFvJyn9XLB2OYc18DsMjEz6CIKElKOMcKbV1tQIhAOXdIy1ehdhmhgtjDntbTPYkHjD4cGF1y%2Fuo9G0%2FSkUYKv8DCFQQABoMNjM3NDIzMTgzODA1IgypBO5DCXGKMlGM70gq3APdsvg8x5JezFpk8Um7cYUkir%2BwzO6%2FBqVlHH0QeYm1I5gxzRG7uAUJRksi%2FEG1LslBwxgs6LUU0cfjCcOI8cWsNCxex7Sl536x4yy%2F6AVc%2BvF8A0m26OsYqGz%2FZgZobGMUgli30eyiCZ1rgHWX%2F%2BGt8om%2Flpupwt8X7fy9TZ3hFFV%2BWh96xOB07rweK6VG%2B0zUkvWljiK7eOnU3m5ihrlOybz79oCYCg37lV2R7uNnYcNrXusSmM87fi4ZIDgtYQPjb2CJtsVRQsj%2FtS1B2t82GIhgLm395WcSHHN04SDbvkucWq3CKDit6CSLTI2cPT%2B5JjbOouCHthsPpd6fGtDji8v4HYfY%2FI9LIcEZaduQoe%2Bn4AButGLiW0GiwJHcMv3YubhQ24HFTNuSBsm9Jfl7uqhXPg%2BWWvPhTX97CFR4vaMAOn42At6UrLLBfbIuo%2FPLOplRk%2Fxaw%2FJ88Y3R%2FSBtPbMVyY%2FZlMorJSsKQeUVK%2FLtn8LVEbIhYdhQ0K%2F8KICGONiltn2AYJXekA%2FzfaqBCsmKkctD%2BqpfLmS43P1Bao4kqrheNMCyKEe9OGY9eOEmFXrYuJbXLeW9266I5bhPp%2BIqOM%2BoZA8H6XbBzcf5w2gBJb6MD9fBbkRC3jCNkr7CBjqkAWdIb6WAc%2FZ%2BZQV7Jo8Q1LYcjj5Xk%2BxFdi4S390WWRdnUA7Hsye8M4akv6OqApnzVGdtvrnYtXOLWhMEl4q3ar0LH3z6xsVrj6NYsmj2AzeSCJKqdfzx%2Faj7RDsIzPGA8HnHjGJCpF6%2F%2FwLy5CaMTlF1yy49VU1XG6rzEZPkqJ84RKtcJWECiJt5ot8a%2B3aiuKLJ%2Bxh4HJE8T9VI3ub30xdZc5oT&X-Amz-Signature=bde81b3d5c8f72969dbd6a970c1de284094f3457df59fc063448a385cb1f4537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566USH37%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCBWkhLbFvJyn9XLB2OYc18DsMjEz6CIKElKOMcKbV1tQIhAOXdIy1ehdhmhgtjDntbTPYkHjD4cGF1y%2Fuo9G0%2FSkUYKv8DCFQQABoMNjM3NDIzMTgzODA1IgypBO5DCXGKMlGM70gq3APdsvg8x5JezFpk8Um7cYUkir%2BwzO6%2FBqVlHH0QeYm1I5gxzRG7uAUJRksi%2FEG1LslBwxgs6LUU0cfjCcOI8cWsNCxex7Sl536x4yy%2F6AVc%2BvF8A0m26OsYqGz%2FZgZobGMUgli30eyiCZ1rgHWX%2F%2BGt8om%2Flpupwt8X7fy9TZ3hFFV%2BWh96xOB07rweK6VG%2B0zUkvWljiK7eOnU3m5ihrlOybz79oCYCg37lV2R7uNnYcNrXusSmM87fi4ZIDgtYQPjb2CJtsVRQsj%2FtS1B2t82GIhgLm395WcSHHN04SDbvkucWq3CKDit6CSLTI2cPT%2B5JjbOouCHthsPpd6fGtDji8v4HYfY%2FI9LIcEZaduQoe%2Bn4AButGLiW0GiwJHcMv3YubhQ24HFTNuSBsm9Jfl7uqhXPg%2BWWvPhTX97CFR4vaMAOn42At6UrLLBfbIuo%2FPLOplRk%2Fxaw%2FJ88Y3R%2FSBtPbMVyY%2FZlMorJSsKQeUVK%2FLtn8LVEbIhYdhQ0K%2F8KICGONiltn2AYJXekA%2FzfaqBCsmKkctD%2BqpfLmS43P1Bao4kqrheNMCyKEe9OGY9eOEmFXrYuJbXLeW9266I5bhPp%2BIqOM%2BoZA8H6XbBzcf5w2gBJb6MD9fBbkRC3jCNkr7CBjqkAWdIb6WAc%2FZ%2BZQV7Jo8Q1LYcjj5Xk%2BxFdi4S390WWRdnUA7Hsye8M4akv6OqApnzVGdtvrnYtXOLWhMEl4q3ar0LH3z6xsVrj6NYsmj2AzeSCJKqdfzx%2Faj7RDsIzPGA8HnHjGJCpF6%2F%2FwLy5CaMTlF1yy49VU1XG6rzEZPkqJ84RKtcJWECiJt5ot8a%2B3aiuKLJ%2Bxh4HJE8T9VI3ub30xdZc5oT&X-Amz-Signature=1354545b3e9721b2c1dededb08236a54594edcec5db4fe3d042b610eb51a2543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
