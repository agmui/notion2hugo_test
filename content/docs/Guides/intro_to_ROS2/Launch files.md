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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DIEINW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGxsW93IdPtUEbO844YZ%2Fo5ZMPjMqOnYo9OfRLAPCG9AiAcXor3R1zjNuCVns2SecD3u2sLsj0xObCWxbTVbXjbFiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqGyXVnyRepd4ZNXKtwDaVyibvcPGEC%2BitA%2F8NAPcl28JhHUbk1GtLyi0UHhSkf7Drr3%2BSxQBHIuPwrygxIlApxy7akqw17V7Zke56Sbyt37ChkdgFrh3n4CoBEp6HICE5Xc3f1HtyxZg3hG27AbPZFamj%2BPNwvqN0NRh1btJhsn9ZhMLMQJNo1br4Zf%2B%2B6n%2FlYWNEdRp6DELcfsptP1oNDkUCUwG8BQdq8hrR%2F%2FTnOWHuz4Pc9TqzFiNyncd80bzJpTZjx0nN4mSHMgFGp%2BXLeKai%2Fv3Jz7tv8CrujdVgW0BvZOHK31fT0PFUz2DgLJoCs86AHQYvjX2ThQu3APcsKpw3Ov2xJjsxG8sVZLCgSabpudtVL3dP3IdP3dEVKnTVWYo%2B4jus0OGuhVSgMH8h42bszwIc83WURd%2B52NkRWqAewPfCFTqaDw8%2FIr4BhzExT1xg%2F6yCu5YjS81IEkthQeLQPWGO9i7DIlSNQ1eoxoei%2F2tQCjTk6hxS%2BdqCPrptGTsOAVZValSMBmjviuI0wsUm%2BT6hyTnNT3iGczfVFHMxDJAWmexdi9HDjkuPfp%2BfgOsHQzVFuLjjegTGxqHZdHLZJjBkmoFhZFUKR5aKdv%2Fj0j5ZQQZgNC6aBlgjDGfoylMAtDP2g0hO4wre7BwAY6pgEvUV9S1Rzd0syImhb8I%2BAZ43nR71U2WcR713vKo0z%2Bsnlffso%2FiYgl8%2FvmZ2FFFE7Wms%2FWwpbctBCDGSdTNeR%2BJfRitA5abWZDE3dF7mYkV4GmJZvediID%2FMpLluUuTfnvNEzPVk9tpb%2F7bIrb%2BOBD9wtJpCsgFCFRIhqksFmr9Uf5wRyab032hTzpLDlF8F3qJui39MBgeB90IJw5%2FcmvjdpF9XO7&X-Amz-Signature=879d1756e505326da9081048ed17491118698f75317f36a14d6e7b0e8be41547&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DIEINW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGxsW93IdPtUEbO844YZ%2Fo5ZMPjMqOnYo9OfRLAPCG9AiAcXor3R1zjNuCVns2SecD3u2sLsj0xObCWxbTVbXjbFiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqGyXVnyRepd4ZNXKtwDaVyibvcPGEC%2BitA%2F8NAPcl28JhHUbk1GtLyi0UHhSkf7Drr3%2BSxQBHIuPwrygxIlApxy7akqw17V7Zke56Sbyt37ChkdgFrh3n4CoBEp6HICE5Xc3f1HtyxZg3hG27AbPZFamj%2BPNwvqN0NRh1btJhsn9ZhMLMQJNo1br4Zf%2B%2B6n%2FlYWNEdRp6DELcfsptP1oNDkUCUwG8BQdq8hrR%2F%2FTnOWHuz4Pc9TqzFiNyncd80bzJpTZjx0nN4mSHMgFGp%2BXLeKai%2Fv3Jz7tv8CrujdVgW0BvZOHK31fT0PFUz2DgLJoCs86AHQYvjX2ThQu3APcsKpw3Ov2xJjsxG8sVZLCgSabpudtVL3dP3IdP3dEVKnTVWYo%2B4jus0OGuhVSgMH8h42bszwIc83WURd%2B52NkRWqAewPfCFTqaDw8%2FIr4BhzExT1xg%2F6yCu5YjS81IEkthQeLQPWGO9i7DIlSNQ1eoxoei%2F2tQCjTk6hxS%2BdqCPrptGTsOAVZValSMBmjviuI0wsUm%2BT6hyTnNT3iGczfVFHMxDJAWmexdi9HDjkuPfp%2BfgOsHQzVFuLjjegTGxqHZdHLZJjBkmoFhZFUKR5aKdv%2Fj0j5ZQQZgNC6aBlgjDGfoylMAtDP2g0hO4wre7BwAY6pgEvUV9S1Rzd0syImhb8I%2BAZ43nR71U2WcR713vKo0z%2Bsnlffso%2FiYgl8%2FvmZ2FFFE7Wms%2FWwpbctBCDGSdTNeR%2BJfRitA5abWZDE3dF7mYkV4GmJZvediID%2FMpLluUuTfnvNEzPVk9tpb%2F7bIrb%2BOBD9wtJpCsgFCFRIhqksFmr9Uf5wRyab032hTzpLDlF8F3qJui39MBgeB90IJw5%2FcmvjdpF9XO7&X-Amz-Signature=387ce7d31b39de1d43332d3a1ac34d9ab9e2c6e50893dd02f2cc5577856dcef2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DIEINW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGxsW93IdPtUEbO844YZ%2Fo5ZMPjMqOnYo9OfRLAPCG9AiAcXor3R1zjNuCVns2SecD3u2sLsj0xObCWxbTVbXjbFiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqGyXVnyRepd4ZNXKtwDaVyibvcPGEC%2BitA%2F8NAPcl28JhHUbk1GtLyi0UHhSkf7Drr3%2BSxQBHIuPwrygxIlApxy7akqw17V7Zke56Sbyt37ChkdgFrh3n4CoBEp6HICE5Xc3f1HtyxZg3hG27AbPZFamj%2BPNwvqN0NRh1btJhsn9ZhMLMQJNo1br4Zf%2B%2B6n%2FlYWNEdRp6DELcfsptP1oNDkUCUwG8BQdq8hrR%2F%2FTnOWHuz4Pc9TqzFiNyncd80bzJpTZjx0nN4mSHMgFGp%2BXLeKai%2Fv3Jz7tv8CrujdVgW0BvZOHK31fT0PFUz2DgLJoCs86AHQYvjX2ThQu3APcsKpw3Ov2xJjsxG8sVZLCgSabpudtVL3dP3IdP3dEVKnTVWYo%2B4jus0OGuhVSgMH8h42bszwIc83WURd%2B52NkRWqAewPfCFTqaDw8%2FIr4BhzExT1xg%2F6yCu5YjS81IEkthQeLQPWGO9i7DIlSNQ1eoxoei%2F2tQCjTk6hxS%2BdqCPrptGTsOAVZValSMBmjviuI0wsUm%2BT6hyTnNT3iGczfVFHMxDJAWmexdi9HDjkuPfp%2BfgOsHQzVFuLjjegTGxqHZdHLZJjBkmoFhZFUKR5aKdv%2Fj0j5ZQQZgNC6aBlgjDGfoylMAtDP2g0hO4wre7BwAY6pgEvUV9S1Rzd0syImhb8I%2BAZ43nR71U2WcR713vKo0z%2Bsnlffso%2FiYgl8%2FvmZ2FFFE7Wms%2FWwpbctBCDGSdTNeR%2BJfRitA5abWZDE3dF7mYkV4GmJZvediID%2FMpLluUuTfnvNEzPVk9tpb%2F7bIrb%2BOBD9wtJpCsgFCFRIhqksFmr9Uf5wRyab032hTzpLDlF8F3qJui39MBgeB90IJw5%2FcmvjdpF9XO7&X-Amz-Signature=e181bde9411468ad4aa1493378b2e41769293299c543c955f3a2956a514f5c99&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
