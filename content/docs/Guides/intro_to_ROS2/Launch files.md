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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3W5ZTD%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCKz3Z%2FlBbZ%2BJZf3n3ai%2BeghV8LbKYXoVbPSIQdY8BkQIgI3CgOiOxrdJmhmbc5ONSoUGRKXjSQRqqtzlx8TGqMKgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdZXBYZ%2BMaUMh1UEyrcAzhR1JfDx9eQq0Pw5dQTpmh5r8nBYPoJy2jDwr3xgPNyYX4rFUhaqDNspMM5Db6G1jQUDBk0%2FcV5V08Waf7JrTeGBP%2B%2B5g%2BtTQxaR5cHdm5oCRgWTsrzmiYosCbP1mYyTvFafpj8O%2FAwdtd3cXRABxkSWsftZonOKdWWy2QvwF3lLutCVb69MV893ryI%2BfZxuQtR6rJ2kdbyiPolaEYEU5xJaqEn1VsBAsV%2F9YlEF05QQez%2B5HZODmY%2FK4OcgB2PPOyM0b%2FI7ovUA1Dl4P1bncUIVLuEvv3WJ3Zi0kdImlub%2BKnyEypOR0KBnosK1W2EhMQFOA170fhgKHGPsHnXSi57HOFD%2Byraldl2z1RADjiI562IovQFxpyuApBN20mb6fj%2BjIdbt39BwYfbK%2B5NP7%2Fns9Pao1UsHuyF%2BKtXyQh7wKx7zqjcOOEcjwa8%2FMNYZv3u19BBPWDrkkfH%2FZ%2BIfKtZ8l35WTyc0mV3o9JhGNDCQStVwXcnEUMavV%2FDJIGYlgko8z58ZAtuE6OqBICvk9UIGIQx2JAjw8PNzLF8RzBOjNIySX9W7%2BYsCuJgrTi7aMf7cJsJKfOKIQeNtHouyoGGIYKXwvuDGvnmoRFJPZNX0xh3dnp6KqB1D%2B2QMOn7jMAGOqUB1EOPTisupjE0xBu9aeAR%2Fv4ev08tDbp%2FfksLm6iAe7U%2B6WpkOZibkALHX%2FNhQHIMDGpzZAeUxeHE6HbI2IJKqNexRNvWXDeyCcmDxewldsqs9Znvs3T4NFXGJrz%2BlCkWRvqzoL3%2BL%2F631AKFJEd6xwTMJ8FZRYifFBHfzLGCFw5wXIq299MGxbILP6LgIdgn1Issq8%2FG%2F4VMawNnby%2BClVgbok2s&X-Amz-Signature=9e8ae7dc42c4260b4cae0264c21ce602c0919f84c9e1a8819d394850296ea904&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3W5ZTD%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCKz3Z%2FlBbZ%2BJZf3n3ai%2BeghV8LbKYXoVbPSIQdY8BkQIgI3CgOiOxrdJmhmbc5ONSoUGRKXjSQRqqtzlx8TGqMKgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdZXBYZ%2BMaUMh1UEyrcAzhR1JfDx9eQq0Pw5dQTpmh5r8nBYPoJy2jDwr3xgPNyYX4rFUhaqDNspMM5Db6G1jQUDBk0%2FcV5V08Waf7JrTeGBP%2B%2B5g%2BtTQxaR5cHdm5oCRgWTsrzmiYosCbP1mYyTvFafpj8O%2FAwdtd3cXRABxkSWsftZonOKdWWy2QvwF3lLutCVb69MV893ryI%2BfZxuQtR6rJ2kdbyiPolaEYEU5xJaqEn1VsBAsV%2F9YlEF05QQez%2B5HZODmY%2FK4OcgB2PPOyM0b%2FI7ovUA1Dl4P1bncUIVLuEvv3WJ3Zi0kdImlub%2BKnyEypOR0KBnosK1W2EhMQFOA170fhgKHGPsHnXSi57HOFD%2Byraldl2z1RADjiI562IovQFxpyuApBN20mb6fj%2BjIdbt39BwYfbK%2B5NP7%2Fns9Pao1UsHuyF%2BKtXyQh7wKx7zqjcOOEcjwa8%2FMNYZv3u19BBPWDrkkfH%2FZ%2BIfKtZ8l35WTyc0mV3o9JhGNDCQStVwXcnEUMavV%2FDJIGYlgko8z58ZAtuE6OqBICvk9UIGIQx2JAjw8PNzLF8RzBOjNIySX9W7%2BYsCuJgrTi7aMf7cJsJKfOKIQeNtHouyoGGIYKXwvuDGvnmoRFJPZNX0xh3dnp6KqB1D%2B2QMOn7jMAGOqUB1EOPTisupjE0xBu9aeAR%2Fv4ev08tDbp%2FfksLm6iAe7U%2B6WpkOZibkALHX%2FNhQHIMDGpzZAeUxeHE6HbI2IJKqNexRNvWXDeyCcmDxewldsqs9Znvs3T4NFXGJrz%2BlCkWRvqzoL3%2BL%2F631AKFJEd6xwTMJ8FZRYifFBHfzLGCFw5wXIq299MGxbILP6LgIdgn1Issq8%2FG%2F4VMawNnby%2BClVgbok2s&X-Amz-Signature=6f3c8d110851e92b7abda243eda19ab1572beddee417ef91a09389b2d35b502f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3W5ZTD%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCKz3Z%2FlBbZ%2BJZf3n3ai%2BeghV8LbKYXoVbPSIQdY8BkQIgI3CgOiOxrdJmhmbc5ONSoUGRKXjSQRqqtzlx8TGqMKgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdZXBYZ%2BMaUMh1UEyrcAzhR1JfDx9eQq0Pw5dQTpmh5r8nBYPoJy2jDwr3xgPNyYX4rFUhaqDNspMM5Db6G1jQUDBk0%2FcV5V08Waf7JrTeGBP%2B%2B5g%2BtTQxaR5cHdm5oCRgWTsrzmiYosCbP1mYyTvFafpj8O%2FAwdtd3cXRABxkSWsftZonOKdWWy2QvwF3lLutCVb69MV893ryI%2BfZxuQtR6rJ2kdbyiPolaEYEU5xJaqEn1VsBAsV%2F9YlEF05QQez%2B5HZODmY%2FK4OcgB2PPOyM0b%2FI7ovUA1Dl4P1bncUIVLuEvv3WJ3Zi0kdImlub%2BKnyEypOR0KBnosK1W2EhMQFOA170fhgKHGPsHnXSi57HOFD%2Byraldl2z1RADjiI562IovQFxpyuApBN20mb6fj%2BjIdbt39BwYfbK%2B5NP7%2Fns9Pao1UsHuyF%2BKtXyQh7wKx7zqjcOOEcjwa8%2FMNYZv3u19BBPWDrkkfH%2FZ%2BIfKtZ8l35WTyc0mV3o9JhGNDCQStVwXcnEUMavV%2FDJIGYlgko8z58ZAtuE6OqBICvk9UIGIQx2JAjw8PNzLF8RzBOjNIySX9W7%2BYsCuJgrTi7aMf7cJsJKfOKIQeNtHouyoGGIYKXwvuDGvnmoRFJPZNX0xh3dnp6KqB1D%2B2QMOn7jMAGOqUB1EOPTisupjE0xBu9aeAR%2Fv4ev08tDbp%2FfksLm6iAe7U%2B6WpkOZibkALHX%2FNhQHIMDGpzZAeUxeHE6HbI2IJKqNexRNvWXDeyCcmDxewldsqs9Znvs3T4NFXGJrz%2BlCkWRvqzoL3%2BL%2F631AKFJEd6xwTMJ8FZRYifFBHfzLGCFw5wXIq299MGxbILP6LgIdgn1Issq8%2FG%2F4VMawNnby%2BClVgbok2s&X-Amz-Signature=2b130822371215634db331e93e2b8307dd65e14f78151d1618f8ecf97f21ca70&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
