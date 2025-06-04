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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVS2DXLF%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIAS0lfv6hZqcG6B5kfHoXzv1eTs75n%2FXxOMJPD13xz2bAiEAvkOFTwkLxzAdnazn0VnqNL6c2aGY2VDwVaOefHGWqxQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDNX5eUhFCYl52Re3kyrcA0XDb02uGhNSsxTdgFnFS%2BjjoqNcb1bQqeGd8QkIf6pjQ9aHROhUd7Qcz68w5o5T4blyryDB7JCZZYPGQHhHCltDfNy0Zf4anM2TqjCYzImDJp8vdIPgvhAQfJOvaem1yXYnBLe8ecuGdDDVrSpyKBLhi%2F8YWqMBSVH6XUBMOyEjkoHKKfZBK9XzOBC%2F40KyyIBJs8BShlNaWWFUubhFs0jqOvPbNy5VZ3lUzx8xsZu%2FJs6d6rXSgUfSw9qQNrn3RzLPlFXr1D6%2F19SDtQR6r%2B9GBr5ZBff%2Bw0SXrGBjq3YVxZpRzEbO%2FmVAWrucW7hG6o%2FluhKpUcdqHP%2F4USbSouaRelMfBjsP5c4s0rGSoupblu8i1%2BwI90uWFV%2B4OfEZYOAbKV7l3gZvybfx9pl9F9%2B%2Fl3Sy7XTwUxda6aaZ59IBOwmnM37HXN7LoiAHK6Pl9JiUSm1aldS8Rg3u0K8%2FDTBF34s7gY3F1Yr9u3fi26W2cJxwooqieFqUi93%2FanPUs7Mi%2F8l%2B5t26bY6b3QXJ5LrZ6gshmhKe2%2BkGgCr%2B35SGyf8MaYFgeRPW6XrhyRLXn2xsiYAOjMayyYNVevVga%2BgBhHr6eymfqeeG3zX2BklZy4b%2BlTcuQ0Vd5amzMLDQgMIGOqUBluUdEcIe3PzQDzVMYUHCcvbTEn01ye2EVozDru9yIGF6zyypAo8SfXHDuUgZEuBDFZfZFmaDPEIIexW1yk0GAsJNfOJ6ia090PRp3hR27Eh%2BUYx54x74LacVdtEuQMPSOYOM6DcW%2Bbb2sF8sbqNA%2Bg7O6Nh1L3piog7lCsUi9aPrlfcrEYVI%2BXa%2Bm5vyBahi%2BerN1vzje3SaIxw0MUDvBzpGEEs0&X-Amz-Signature=e8206694eb825146f9e2e51353eddd5623c515624c2e4001b47e167eb6acc6b2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVS2DXLF%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIAS0lfv6hZqcG6B5kfHoXzv1eTs75n%2FXxOMJPD13xz2bAiEAvkOFTwkLxzAdnazn0VnqNL6c2aGY2VDwVaOefHGWqxQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDNX5eUhFCYl52Re3kyrcA0XDb02uGhNSsxTdgFnFS%2BjjoqNcb1bQqeGd8QkIf6pjQ9aHROhUd7Qcz68w5o5T4blyryDB7JCZZYPGQHhHCltDfNy0Zf4anM2TqjCYzImDJp8vdIPgvhAQfJOvaem1yXYnBLe8ecuGdDDVrSpyKBLhi%2F8YWqMBSVH6XUBMOyEjkoHKKfZBK9XzOBC%2F40KyyIBJs8BShlNaWWFUubhFs0jqOvPbNy5VZ3lUzx8xsZu%2FJs6d6rXSgUfSw9qQNrn3RzLPlFXr1D6%2F19SDtQR6r%2B9GBr5ZBff%2Bw0SXrGBjq3YVxZpRzEbO%2FmVAWrucW7hG6o%2FluhKpUcdqHP%2F4USbSouaRelMfBjsP5c4s0rGSoupblu8i1%2BwI90uWFV%2B4OfEZYOAbKV7l3gZvybfx9pl9F9%2B%2Fl3Sy7XTwUxda6aaZ59IBOwmnM37HXN7LoiAHK6Pl9JiUSm1aldS8Rg3u0K8%2FDTBF34s7gY3F1Yr9u3fi26W2cJxwooqieFqUi93%2FanPUs7Mi%2F8l%2B5t26bY6b3QXJ5LrZ6gshmhKe2%2BkGgCr%2B35SGyf8MaYFgeRPW6XrhyRLXn2xsiYAOjMayyYNVevVga%2BgBhHr6eymfqeeG3zX2BklZy4b%2BlTcuQ0Vd5amzMLDQgMIGOqUBluUdEcIe3PzQDzVMYUHCcvbTEn01ye2EVozDru9yIGF6zyypAo8SfXHDuUgZEuBDFZfZFmaDPEIIexW1yk0GAsJNfOJ6ia090PRp3hR27Eh%2BUYx54x74LacVdtEuQMPSOYOM6DcW%2Bbb2sF8sbqNA%2Bg7O6Nh1L3piog7lCsUi9aPrlfcrEYVI%2BXa%2Bm5vyBahi%2BerN1vzje3SaIxw0MUDvBzpGEEs0&X-Amz-Signature=a9088644e64eea7754e064f4dfebb71607c1d7de4f8dd6f8e9ca5ee0a9c08e15&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVS2DXLF%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIAS0lfv6hZqcG6B5kfHoXzv1eTs75n%2FXxOMJPD13xz2bAiEAvkOFTwkLxzAdnazn0VnqNL6c2aGY2VDwVaOefHGWqxQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDNX5eUhFCYl52Re3kyrcA0XDb02uGhNSsxTdgFnFS%2BjjoqNcb1bQqeGd8QkIf6pjQ9aHROhUd7Qcz68w5o5T4blyryDB7JCZZYPGQHhHCltDfNy0Zf4anM2TqjCYzImDJp8vdIPgvhAQfJOvaem1yXYnBLe8ecuGdDDVrSpyKBLhi%2F8YWqMBSVH6XUBMOyEjkoHKKfZBK9XzOBC%2F40KyyIBJs8BShlNaWWFUubhFs0jqOvPbNy5VZ3lUzx8xsZu%2FJs6d6rXSgUfSw9qQNrn3RzLPlFXr1D6%2F19SDtQR6r%2B9GBr5ZBff%2Bw0SXrGBjq3YVxZpRzEbO%2FmVAWrucW7hG6o%2FluhKpUcdqHP%2F4USbSouaRelMfBjsP5c4s0rGSoupblu8i1%2BwI90uWFV%2B4OfEZYOAbKV7l3gZvybfx9pl9F9%2B%2Fl3Sy7XTwUxda6aaZ59IBOwmnM37HXN7LoiAHK6Pl9JiUSm1aldS8Rg3u0K8%2FDTBF34s7gY3F1Yr9u3fi26W2cJxwooqieFqUi93%2FanPUs7Mi%2F8l%2B5t26bY6b3QXJ5LrZ6gshmhKe2%2BkGgCr%2B35SGyf8MaYFgeRPW6XrhyRLXn2xsiYAOjMayyYNVevVga%2BgBhHr6eymfqeeG3zX2BklZy4b%2BlTcuQ0Vd5amzMLDQgMIGOqUBluUdEcIe3PzQDzVMYUHCcvbTEn01ye2EVozDru9yIGF6zyypAo8SfXHDuUgZEuBDFZfZFmaDPEIIexW1yk0GAsJNfOJ6ia090PRp3hR27Eh%2BUYx54x74LacVdtEuQMPSOYOM6DcW%2Bbb2sF8sbqNA%2Bg7O6Nh1L3piog7lCsUi9aPrlfcrEYVI%2BXa%2Bm5vyBahi%2BerN1vzje3SaIxw0MUDvBzpGEEs0&X-Amz-Signature=89ab3ac56f08493e3b9a93f40d4c32dd917664bb2ea3e2cad7c8496d8774cb79&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
