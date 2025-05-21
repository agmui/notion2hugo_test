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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTP3CUPG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBrZmETb0j9%2FP1EO34O7%2FsuIi2%2FW%2Fyrfc8yX7hs64UpQAiEAkJwhU0%2FA%2BRyjU6mu4bML51%2FrN4WKhLv%2BwJPtzWWpSJwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPH1LYNsbS8VsWc%2ByrcAwTIoGgSCLOaiBEk8364rOhEkKrD9uGfcKDpSVztkGVeeKcT01Yimr7UGjfzw6%2Fha1dp9mlr1%2BrQtI8DHijtbUBH%2F8zPcou6RXqaCMIzinxCT6ZXbtCahSEpo47ZTGdXQMrIF7FeE4AG3JiMqd%2FNOh%2F%2B0y9TniihepguhNf0D8NTlGq%2FPHzmO%2Fsum%2BdATgvhPC%2B4vOvNA1xoKwdRfB3prr5fTPLnnZyxLJcac9e72R3C%2FyEPVR7G8dui%2B06hPZZEUsU7XOI8f0U1qHAl7KqtHK0RsKSKbsr3oW%2B21nB%2BEJjqIyQAe%2Blbg%2BAJdYud7Pe%2BS5kalU082F0BXyi8FLsLAC6qMd3URCr%2FnI6DGfScFipsGT%2BTawp99jVKDLB0C7btqPLw1GuyiyP8aTx5JV8jryE4Fjuh%2Fd9UlFd28yVEEtIbESxs0Qk51bI9%2FDrty7e%2Fq%2BNapoYxsLhZpxT4bXm91OG8Ip02AGo%2FnD9T7jmD4kpGIrWPJJHlPtMU%2BUHBQBP2yqI%2Fnc7YLvr3lA8m4MZIqobds%2Fr179Zl8BrRDSu6myyOgdqTuqzqvcM7PBmlcDtEnt028jz%2B9Of7MgKGojh8ZM%2BUOqzsp%2FU59Nzd75znTE0yQJJ7VVMpPQh4OHYVMJGhucEGOqUB6dle4kjNVEwit5MC6pd%2B8kPR%2BS5Kd0jdJkHj279wV5ufjz2V9GTi%2F8e5HpVLK1j96F5315geO%2BWWOlMqaCV2RuOhovrij3ks5K%2BP0WHO%2FbWiTQnfe6A7XQOkFav9O1OotFboC1%2BI14zmap2ELNqPnglhkvc02%2BeMszJJspw%2BrZHcRcmCRZAaXgWRccr4P7lr%2BvRAL9ikx9jSCORTjm%2BBO1etLmKO&X-Amz-Signature=3e3867bc4f5dacb968093d578909a4fcdf160b5a481a751622183fb58d5e2958&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTP3CUPG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBrZmETb0j9%2FP1EO34O7%2FsuIi2%2FW%2Fyrfc8yX7hs64UpQAiEAkJwhU0%2FA%2BRyjU6mu4bML51%2FrN4WKhLv%2BwJPtzWWpSJwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPH1LYNsbS8VsWc%2ByrcAwTIoGgSCLOaiBEk8364rOhEkKrD9uGfcKDpSVztkGVeeKcT01Yimr7UGjfzw6%2Fha1dp9mlr1%2BrQtI8DHijtbUBH%2F8zPcou6RXqaCMIzinxCT6ZXbtCahSEpo47ZTGdXQMrIF7FeE4AG3JiMqd%2FNOh%2F%2B0y9TniihepguhNf0D8NTlGq%2FPHzmO%2Fsum%2BdATgvhPC%2B4vOvNA1xoKwdRfB3prr5fTPLnnZyxLJcac9e72R3C%2FyEPVR7G8dui%2B06hPZZEUsU7XOI8f0U1qHAl7KqtHK0RsKSKbsr3oW%2B21nB%2BEJjqIyQAe%2Blbg%2BAJdYud7Pe%2BS5kalU082F0BXyi8FLsLAC6qMd3URCr%2FnI6DGfScFipsGT%2BTawp99jVKDLB0C7btqPLw1GuyiyP8aTx5JV8jryE4Fjuh%2Fd9UlFd28yVEEtIbESxs0Qk51bI9%2FDrty7e%2Fq%2BNapoYxsLhZpxT4bXm91OG8Ip02AGo%2FnD9T7jmD4kpGIrWPJJHlPtMU%2BUHBQBP2yqI%2Fnc7YLvr3lA8m4MZIqobds%2Fr179Zl8BrRDSu6myyOgdqTuqzqvcM7PBmlcDtEnt028jz%2B9Of7MgKGojh8ZM%2BUOqzsp%2FU59Nzd75znTE0yQJJ7VVMpPQh4OHYVMJGhucEGOqUB6dle4kjNVEwit5MC6pd%2B8kPR%2BS5Kd0jdJkHj279wV5ufjz2V9GTi%2F8e5HpVLK1j96F5315geO%2BWWOlMqaCV2RuOhovrij3ks5K%2BP0WHO%2FbWiTQnfe6A7XQOkFav9O1OotFboC1%2BI14zmap2ELNqPnglhkvc02%2BeMszJJspw%2BrZHcRcmCRZAaXgWRccr4P7lr%2BvRAL9ikx9jSCORTjm%2BBO1etLmKO&X-Amz-Signature=012c0d6c1468d336382b672e72b988310d8c92622723924d0729db46839f2dff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTP3CUPG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBrZmETb0j9%2FP1EO34O7%2FsuIi2%2FW%2Fyrfc8yX7hs64UpQAiEAkJwhU0%2FA%2BRyjU6mu4bML51%2FrN4WKhLv%2BwJPtzWWpSJwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPH1LYNsbS8VsWc%2ByrcAwTIoGgSCLOaiBEk8364rOhEkKrD9uGfcKDpSVztkGVeeKcT01Yimr7UGjfzw6%2Fha1dp9mlr1%2BrQtI8DHijtbUBH%2F8zPcou6RXqaCMIzinxCT6ZXbtCahSEpo47ZTGdXQMrIF7FeE4AG3JiMqd%2FNOh%2F%2B0y9TniihepguhNf0D8NTlGq%2FPHzmO%2Fsum%2BdATgvhPC%2B4vOvNA1xoKwdRfB3prr5fTPLnnZyxLJcac9e72R3C%2FyEPVR7G8dui%2B06hPZZEUsU7XOI8f0U1qHAl7KqtHK0RsKSKbsr3oW%2B21nB%2BEJjqIyQAe%2Blbg%2BAJdYud7Pe%2BS5kalU082F0BXyi8FLsLAC6qMd3URCr%2FnI6DGfScFipsGT%2BTawp99jVKDLB0C7btqPLw1GuyiyP8aTx5JV8jryE4Fjuh%2Fd9UlFd28yVEEtIbESxs0Qk51bI9%2FDrty7e%2Fq%2BNapoYxsLhZpxT4bXm91OG8Ip02AGo%2FnD9T7jmD4kpGIrWPJJHlPtMU%2BUHBQBP2yqI%2Fnc7YLvr3lA8m4MZIqobds%2Fr179Zl8BrRDSu6myyOgdqTuqzqvcM7PBmlcDtEnt028jz%2B9Of7MgKGojh8ZM%2BUOqzsp%2FU59Nzd75znTE0yQJJ7VVMpPQh4OHYVMJGhucEGOqUB6dle4kjNVEwit5MC6pd%2B8kPR%2BS5Kd0jdJkHj279wV5ufjz2V9GTi%2F8e5HpVLK1j96F5315geO%2BWWOlMqaCV2RuOhovrij3ks5K%2BP0WHO%2FbWiTQnfe6A7XQOkFav9O1OotFboC1%2BI14zmap2ELNqPnglhkvc02%2BeMszJJspw%2BrZHcRcmCRZAaXgWRccr4P7lr%2BvRAL9ikx9jSCORTjm%2BBO1etLmKO&X-Amz-Signature=0de2c6d93b93045a56f72748d2e2b38a15fa4692da10a7e47b491ec2a3b68593&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
