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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FLDGPJU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD3fXhTTaAfo24ag7vWw0gJQfjwcdrPX95B%2Bdgm9WWWigIhANfLMGDsELuvikggi4%2FVT0kqORelJOrTchPTQYRy9mn3KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BrMMlgLLgFosHRzEq3APAn1Xi2%2FXB%2BIzx21NUxIsluFavAQRLj%2FCHzhzLKehYiwfLAcpUc3T9%2Bo3khKb0yWqtzJKmIi%2FnruCfZhABCfAjNZUyc8rO7Imyi%2BgNw9HnlEDsrdvzmt6fsMuupNO90xY%2F4npWmkTY8W3ZF3x1EIvVFi5mIosaJaXtelW2lqgMFc5l%2FPY4OclZ7yShVdB2%2FLVO6ki6s%2F2n3PboPgRdgEBODSjMJplWagWTGXYUIFb9DxNaU0rIggOSS7F%2FKYZfh3bF97xq0s%2FiwUdQjjIfUjz%2FcJPuMcyz1rcEf8oz7ue%2BrxrjgRuyqW6HaozjefzZAAIftsZTalzYfswIPGupT8xjSyE%2FYP2sX5ogMifFyiSeB2dJ8UxkjZ8xEHI0iXBNjPcYR3zcu5xvUOBKfpsEfkVo30Jq4hS%2Bt5YaHt18Uev0%2BccS%2BZvQJQhiYoI09MJBcWfOvZJuFVLBXPLu4fM%2Fd%2F9CdCK9J8INe5Zqy%2FkXdlfGJRVWbH5M98U9COwOXPg0B87%2F0XUaKn8tvxxhROrcm3D5wBCV5wunDiTAu9BMA09My7W2kiXSaB%2BbdsHslfqsb7HLSDrnheH9SXahS3BTXV6zLpQGxPAHYGMXKAy7vYbkXVc8HSiBOwaHTo%2BaHzD3kty%2FBjqkASeuoNoaTuMufOv0jXP0BBfyE%2BxaaMLpcOTMujR19h3V2N86cGhz6AodPbq%2B%2FdQQix7%2BphZuT2KtZgHjOVe7PZDGoKg1jklbb3ryKsCQrLfD9wW2C94dEOIL8EsR9yUp0T8N8mjrAuj4MgJNUl22Ud7FsshQys56bh7SpopA6YP8ZH65ZYy4NpllJjDy0GWCN60nb%2Fxukp40REZ1fK%2F3s5CA9xqk&X-Amz-Signature=bcfb5db7de78a555e0f06098b1ca316e50cb44e95a10de017881bceb90a65223&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FLDGPJU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD3fXhTTaAfo24ag7vWw0gJQfjwcdrPX95B%2Bdgm9WWWigIhANfLMGDsELuvikggi4%2FVT0kqORelJOrTchPTQYRy9mn3KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BrMMlgLLgFosHRzEq3APAn1Xi2%2FXB%2BIzx21NUxIsluFavAQRLj%2FCHzhzLKehYiwfLAcpUc3T9%2Bo3khKb0yWqtzJKmIi%2FnruCfZhABCfAjNZUyc8rO7Imyi%2BgNw9HnlEDsrdvzmt6fsMuupNO90xY%2F4npWmkTY8W3ZF3x1EIvVFi5mIosaJaXtelW2lqgMFc5l%2FPY4OclZ7yShVdB2%2FLVO6ki6s%2F2n3PboPgRdgEBODSjMJplWagWTGXYUIFb9DxNaU0rIggOSS7F%2FKYZfh3bF97xq0s%2FiwUdQjjIfUjz%2FcJPuMcyz1rcEf8oz7ue%2BrxrjgRuyqW6HaozjefzZAAIftsZTalzYfswIPGupT8xjSyE%2FYP2sX5ogMifFyiSeB2dJ8UxkjZ8xEHI0iXBNjPcYR3zcu5xvUOBKfpsEfkVo30Jq4hS%2Bt5YaHt18Uev0%2BccS%2BZvQJQhiYoI09MJBcWfOvZJuFVLBXPLu4fM%2Fd%2F9CdCK9J8INe5Zqy%2FkXdlfGJRVWbH5M98U9COwOXPg0B87%2F0XUaKn8tvxxhROrcm3D5wBCV5wunDiTAu9BMA09My7W2kiXSaB%2BbdsHslfqsb7HLSDrnheH9SXahS3BTXV6zLpQGxPAHYGMXKAy7vYbkXVc8HSiBOwaHTo%2BaHzD3kty%2FBjqkASeuoNoaTuMufOv0jXP0BBfyE%2BxaaMLpcOTMujR19h3V2N86cGhz6AodPbq%2B%2FdQQix7%2BphZuT2KtZgHjOVe7PZDGoKg1jklbb3ryKsCQrLfD9wW2C94dEOIL8EsR9yUp0T8N8mjrAuj4MgJNUl22Ud7FsshQys56bh7SpopA6YP8ZH65ZYy4NpllJjDy0GWCN60nb%2Fxukp40REZ1fK%2F3s5CA9xqk&X-Amz-Signature=35a6ae723d012e9c7e88d31e114e2c40b6235c3a27d8ef9290577b6a38e1c9e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FLDGPJU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD3fXhTTaAfo24ag7vWw0gJQfjwcdrPX95B%2Bdgm9WWWigIhANfLMGDsELuvikggi4%2FVT0kqORelJOrTchPTQYRy9mn3KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BrMMlgLLgFosHRzEq3APAn1Xi2%2FXB%2BIzx21NUxIsluFavAQRLj%2FCHzhzLKehYiwfLAcpUc3T9%2Bo3khKb0yWqtzJKmIi%2FnruCfZhABCfAjNZUyc8rO7Imyi%2BgNw9HnlEDsrdvzmt6fsMuupNO90xY%2F4npWmkTY8W3ZF3x1EIvVFi5mIosaJaXtelW2lqgMFc5l%2FPY4OclZ7yShVdB2%2FLVO6ki6s%2F2n3PboPgRdgEBODSjMJplWagWTGXYUIFb9DxNaU0rIggOSS7F%2FKYZfh3bF97xq0s%2FiwUdQjjIfUjz%2FcJPuMcyz1rcEf8oz7ue%2BrxrjgRuyqW6HaozjefzZAAIftsZTalzYfswIPGupT8xjSyE%2FYP2sX5ogMifFyiSeB2dJ8UxkjZ8xEHI0iXBNjPcYR3zcu5xvUOBKfpsEfkVo30Jq4hS%2Bt5YaHt18Uev0%2BccS%2BZvQJQhiYoI09MJBcWfOvZJuFVLBXPLu4fM%2Fd%2F9CdCK9J8INe5Zqy%2FkXdlfGJRVWbH5M98U9COwOXPg0B87%2F0XUaKn8tvxxhROrcm3D5wBCV5wunDiTAu9BMA09My7W2kiXSaB%2BbdsHslfqsb7HLSDrnheH9SXahS3BTXV6zLpQGxPAHYGMXKAy7vYbkXVc8HSiBOwaHTo%2BaHzD3kty%2FBjqkASeuoNoaTuMufOv0jXP0BBfyE%2BxaaMLpcOTMujR19h3V2N86cGhz6AodPbq%2B%2FdQQix7%2BphZuT2KtZgHjOVe7PZDGoKg1jklbb3ryKsCQrLfD9wW2C94dEOIL8EsR9yUp0T8N8mjrAuj4MgJNUl22Ud7FsshQys56bh7SpopA6YP8ZH65ZYy4NpllJjDy0GWCN60nb%2Fxukp40REZ1fK%2F3s5CA9xqk&X-Amz-Signature=a0247077233bf5acfb1a8f0415c42d01b7fef851ed481d355b94ab17903db894&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
