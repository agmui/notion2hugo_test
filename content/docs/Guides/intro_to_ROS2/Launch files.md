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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR7F6Y6U%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC4hWTvzeEt9JgHyXtUgQJd8h6R7UtQbZ7RE1tzStU9cAIhAOgi8oVMEhdwI1jw26kJ%2B20qC%2FVJJ8qAjsrRf4Dg81W5Kv8DCFwQABoMNjM3NDIzMTgzODA1IgzFwbAxRcR%2BrkuIYuQq3APVLR%2BSXVlQvr8DPRefDGqzHN8127Zg%2BgAl6O6jfbtxGGn1OImcumQPAlU6KKGAk%2B0LpswrxbfuwN4PIXoEyO6ZTwsFdENT6AGVUKGachwk5CBBNpU%2BjqqnZiXeGOnPJBwPOljvNIu5K3BGz4dqIx%2BEvtZ3swvDooqxK2Gk7LyJcgHUWhjR4nyjYzpBdTda%2FyNiVilJFHRaegFXNLz7o%2BNtGBSCZBVYBqQwiPZvTa3M4zfyCGmyQ%2B24jN%2BxX7XjG28qRU0HRiwjnl0ewW5jcficJHhWA1JsAEz1XokX7uxDjsUvBpD1DwqZ132kuK4TD4oT%2BYqzBBx1WK%2BYboaWY1s0Ni0bk9AjoPn5iRmexlX2t%2FIj8oKVt8AuEfrSB1bbDOPrL4%2BJyG%2FMCnJ018ese0AaF0Uph0%2BHEiJrNJihMB%2BnfSH0EGm0iuXPpzAvM1OdErwXs6k2oFKnHG%2Fj5zoJiln1dJQEkL1ZqDanxEU%2B9TjBNRHZYeCXeR8pRJiVpsS3CAyAYGPSstTNhgzWmUynRrCwAkjg7zOZ%2BeL0OlFWLOJ9YsOgHA8H8mBlgZJCM8e2aGzeaZGZLkSGsWTd6%2FV2Zvmrzso5YWYV%2BC8kX%2FpkxmdXluMBmOi%2Be4Lo%2FtGlpjCw47%2FCBjqkAVnDEdERLMbhZjffJW3nTWhEct8uet9ghqEWDE00hv5qeEP4Z6eX2Qn3aB2gcoqlo2QrOIO9xWj3NC7TTliK4ecIXGV4I5A4bCwS3%2FQu2VKVpCWp3Hww5dB90pE%2BaZwZ8U9kcrsD5zNo6YzUaBZ6uFTJkp%2BVrhjka7KawqouD9vuRDrn0Gm43k%2BHSWevcP863qe678Rh2p1k3RFYxm7D%2FIx4aVRZ&X-Amz-Signature=851b77fa63099ae685975f71e79ab5a5b91aacabf87b781dda733d7572d13e6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR7F6Y6U%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC4hWTvzeEt9JgHyXtUgQJd8h6R7UtQbZ7RE1tzStU9cAIhAOgi8oVMEhdwI1jw26kJ%2B20qC%2FVJJ8qAjsrRf4Dg81W5Kv8DCFwQABoMNjM3NDIzMTgzODA1IgzFwbAxRcR%2BrkuIYuQq3APVLR%2BSXVlQvr8DPRefDGqzHN8127Zg%2BgAl6O6jfbtxGGn1OImcumQPAlU6KKGAk%2B0LpswrxbfuwN4PIXoEyO6ZTwsFdENT6AGVUKGachwk5CBBNpU%2BjqqnZiXeGOnPJBwPOljvNIu5K3BGz4dqIx%2BEvtZ3swvDooqxK2Gk7LyJcgHUWhjR4nyjYzpBdTda%2FyNiVilJFHRaegFXNLz7o%2BNtGBSCZBVYBqQwiPZvTa3M4zfyCGmyQ%2B24jN%2BxX7XjG28qRU0HRiwjnl0ewW5jcficJHhWA1JsAEz1XokX7uxDjsUvBpD1DwqZ132kuK4TD4oT%2BYqzBBx1WK%2BYboaWY1s0Ni0bk9AjoPn5iRmexlX2t%2FIj8oKVt8AuEfrSB1bbDOPrL4%2BJyG%2FMCnJ018ese0AaF0Uph0%2BHEiJrNJihMB%2BnfSH0EGm0iuXPpzAvM1OdErwXs6k2oFKnHG%2Fj5zoJiln1dJQEkL1ZqDanxEU%2B9TjBNRHZYeCXeR8pRJiVpsS3CAyAYGPSstTNhgzWmUynRrCwAkjg7zOZ%2BeL0OlFWLOJ9YsOgHA8H8mBlgZJCM8e2aGzeaZGZLkSGsWTd6%2FV2Zvmrzso5YWYV%2BC8kX%2FpkxmdXluMBmOi%2Be4Lo%2FtGlpjCw47%2FCBjqkAVnDEdERLMbhZjffJW3nTWhEct8uet9ghqEWDE00hv5qeEP4Z6eX2Qn3aB2gcoqlo2QrOIO9xWj3NC7TTliK4ecIXGV4I5A4bCwS3%2FQu2VKVpCWp3Hww5dB90pE%2BaZwZ8U9kcrsD5zNo6YzUaBZ6uFTJkp%2BVrhjka7KawqouD9vuRDrn0Gm43k%2BHSWevcP863qe678Rh2p1k3RFYxm7D%2FIx4aVRZ&X-Amz-Signature=e887b61e7973762dff025eb62419df63dded4378dbeff52b57e7b41c6987865b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR7F6Y6U%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC4hWTvzeEt9JgHyXtUgQJd8h6R7UtQbZ7RE1tzStU9cAIhAOgi8oVMEhdwI1jw26kJ%2B20qC%2FVJJ8qAjsrRf4Dg81W5Kv8DCFwQABoMNjM3NDIzMTgzODA1IgzFwbAxRcR%2BrkuIYuQq3APVLR%2BSXVlQvr8DPRefDGqzHN8127Zg%2BgAl6O6jfbtxGGn1OImcumQPAlU6KKGAk%2B0LpswrxbfuwN4PIXoEyO6ZTwsFdENT6AGVUKGachwk5CBBNpU%2BjqqnZiXeGOnPJBwPOljvNIu5K3BGz4dqIx%2BEvtZ3swvDooqxK2Gk7LyJcgHUWhjR4nyjYzpBdTda%2FyNiVilJFHRaegFXNLz7o%2BNtGBSCZBVYBqQwiPZvTa3M4zfyCGmyQ%2B24jN%2BxX7XjG28qRU0HRiwjnl0ewW5jcficJHhWA1JsAEz1XokX7uxDjsUvBpD1DwqZ132kuK4TD4oT%2BYqzBBx1WK%2BYboaWY1s0Ni0bk9AjoPn5iRmexlX2t%2FIj8oKVt8AuEfrSB1bbDOPrL4%2BJyG%2FMCnJ018ese0AaF0Uph0%2BHEiJrNJihMB%2BnfSH0EGm0iuXPpzAvM1OdErwXs6k2oFKnHG%2Fj5zoJiln1dJQEkL1ZqDanxEU%2B9TjBNRHZYeCXeR8pRJiVpsS3CAyAYGPSstTNhgzWmUynRrCwAkjg7zOZ%2BeL0OlFWLOJ9YsOgHA8H8mBlgZJCM8e2aGzeaZGZLkSGsWTd6%2FV2Zvmrzso5YWYV%2BC8kX%2FpkxmdXluMBmOi%2Be4Lo%2FtGlpjCw47%2FCBjqkAVnDEdERLMbhZjffJW3nTWhEct8uet9ghqEWDE00hv5qeEP4Z6eX2Qn3aB2gcoqlo2QrOIO9xWj3NC7TTliK4ecIXGV4I5A4bCwS3%2FQu2VKVpCWp3Hww5dB90pE%2BaZwZ8U9kcrsD5zNo6YzUaBZ6uFTJkp%2BVrhjka7KawqouD9vuRDrn0Gm43k%2BHSWevcP863qe678Rh2p1k3RFYxm7D%2FIx4aVRZ&X-Amz-Signature=13b8c446774261318b20ebbce4290144951f0a782c4967e701c5d67e108c2ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
