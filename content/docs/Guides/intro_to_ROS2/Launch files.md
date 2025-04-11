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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSEBYV4Z%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIB5UIZaxioREF5HW%2F%2BpcU3qfXeuGzZ%2FnAtZl%2Frruh96QAiEAtm0lPly%2BqNDEpTi5BMIcOEtiZovPUv8XOv1PKXzyciwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAlo8paThI2%2BYmdIyrcA7wiloca5POfmBnPXWDWXU0sZuDkrC8SYsW52LqdVuQOA12hYDRUgIZuZrNx8XF%2FE9xnT%2Fhkl%2FeUXfbZpODzwIn%2FRd17bTYiRzdIy4sLVVPcrfg3IFFG5eXw6cJMOkFewQSjuzBxt%2Beuz1KXbiv4MoPIYImFNe0byQsZs4%2FTVloiSG%2FCwLC2tacYyWLiNqCjdshmlqz8gaP%2FEjuiZRiqIgQYKpkKzWc10chPbd6xBrkezXqjnDSbuf4Fkz6TULNYgvrk6ZnU6kRc3Kdgwd8HuBpITtbLM7cSKgYDr0eQkDBmR7gABHOtLRhHK55OwVstXgCI%2FH4sVTBMWl3X70J%2FPHlXzs63ww1JWrS5n8hMoLVLMF6%2FRUGn%2Fa%2F6DaJ%2BpHgIdxYHgMAiFSwhSfW20i27AHkaTKo9ZsqV%2BQLkAEoevo4ojnOaODnuTpLd6ecXtjH7MI8YA4%2BofozpKUxJCpChwhnYyz9%2F9o37ZvuJ%2FP8VEu7HAETirRGcs0cq4obzzE19O5T3oJZNiONSHZob37Ek3%2BvmzBMnntoyNOtlwpS6ejoCQygCaJI4Lphgwk6JhBz%2BNFYjFv5oPTEHR3WSV64n5IAdZkeO5wBgZO2lvsra%2BT1lab6U%2FPucXqfAIp8RMKeM5b8GOqUB%2FNup1Jculbx734oPVyhEcQ%2B1tZ7oWA%2BgcngKHB2zg%2BnilUjeyt4LJdmhkkhs59HIcOMpczuzJMsUiOYlS5dvnltBUnNrnFmfu9lgGO4zls6FT7YdC5AR7NQWtxfXz%2BoqN4g9hXWrmfuTcHeSB%2BjaTCIuUcq%2F0%2FW8D6Hnu%2FXJojVrAKs%2BaChMe%2FwPSCwq%2Fron31zd0EW0t2DAqu%2BbkGfHDYqKt4Ge&X-Amz-Signature=a602c032e01442a820db4b1691fd6eda07e20b47c1edec91ef5872843d6171fd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSEBYV4Z%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIB5UIZaxioREF5HW%2F%2BpcU3qfXeuGzZ%2FnAtZl%2Frruh96QAiEAtm0lPly%2BqNDEpTi5BMIcOEtiZovPUv8XOv1PKXzyciwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAlo8paThI2%2BYmdIyrcA7wiloca5POfmBnPXWDWXU0sZuDkrC8SYsW52LqdVuQOA12hYDRUgIZuZrNx8XF%2FE9xnT%2Fhkl%2FeUXfbZpODzwIn%2FRd17bTYiRzdIy4sLVVPcrfg3IFFG5eXw6cJMOkFewQSjuzBxt%2Beuz1KXbiv4MoPIYImFNe0byQsZs4%2FTVloiSG%2FCwLC2tacYyWLiNqCjdshmlqz8gaP%2FEjuiZRiqIgQYKpkKzWc10chPbd6xBrkezXqjnDSbuf4Fkz6TULNYgvrk6ZnU6kRc3Kdgwd8HuBpITtbLM7cSKgYDr0eQkDBmR7gABHOtLRhHK55OwVstXgCI%2FH4sVTBMWl3X70J%2FPHlXzs63ww1JWrS5n8hMoLVLMF6%2FRUGn%2Fa%2F6DaJ%2BpHgIdxYHgMAiFSwhSfW20i27AHkaTKo9ZsqV%2BQLkAEoevo4ojnOaODnuTpLd6ecXtjH7MI8YA4%2BofozpKUxJCpChwhnYyz9%2F9o37ZvuJ%2FP8VEu7HAETirRGcs0cq4obzzE19O5T3oJZNiONSHZob37Ek3%2BvmzBMnntoyNOtlwpS6ejoCQygCaJI4Lphgwk6JhBz%2BNFYjFv5oPTEHR3WSV64n5IAdZkeO5wBgZO2lvsra%2BT1lab6U%2FPucXqfAIp8RMKeM5b8GOqUB%2FNup1Jculbx734oPVyhEcQ%2B1tZ7oWA%2BgcngKHB2zg%2BnilUjeyt4LJdmhkkhs59HIcOMpczuzJMsUiOYlS5dvnltBUnNrnFmfu9lgGO4zls6FT7YdC5AR7NQWtxfXz%2BoqN4g9hXWrmfuTcHeSB%2BjaTCIuUcq%2F0%2FW8D6Hnu%2FXJojVrAKs%2BaChMe%2FwPSCwq%2Fron31zd0EW0t2DAqu%2BbkGfHDYqKt4Ge&X-Amz-Signature=f9b4fa2d1830a1b9a17ed451f043f837cadfb5e80f648a7aeeb2dcffe2f542ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSEBYV4Z%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIB5UIZaxioREF5HW%2F%2BpcU3qfXeuGzZ%2FnAtZl%2Frruh96QAiEAtm0lPly%2BqNDEpTi5BMIcOEtiZovPUv8XOv1PKXzyciwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAlo8paThI2%2BYmdIyrcA7wiloca5POfmBnPXWDWXU0sZuDkrC8SYsW52LqdVuQOA12hYDRUgIZuZrNx8XF%2FE9xnT%2Fhkl%2FeUXfbZpODzwIn%2FRd17bTYiRzdIy4sLVVPcrfg3IFFG5eXw6cJMOkFewQSjuzBxt%2Beuz1KXbiv4MoPIYImFNe0byQsZs4%2FTVloiSG%2FCwLC2tacYyWLiNqCjdshmlqz8gaP%2FEjuiZRiqIgQYKpkKzWc10chPbd6xBrkezXqjnDSbuf4Fkz6TULNYgvrk6ZnU6kRc3Kdgwd8HuBpITtbLM7cSKgYDr0eQkDBmR7gABHOtLRhHK55OwVstXgCI%2FH4sVTBMWl3X70J%2FPHlXzs63ww1JWrS5n8hMoLVLMF6%2FRUGn%2Fa%2F6DaJ%2BpHgIdxYHgMAiFSwhSfW20i27AHkaTKo9ZsqV%2BQLkAEoevo4ojnOaODnuTpLd6ecXtjH7MI8YA4%2BofozpKUxJCpChwhnYyz9%2F9o37ZvuJ%2FP8VEu7HAETirRGcs0cq4obzzE19O5T3oJZNiONSHZob37Ek3%2BvmzBMnntoyNOtlwpS6ejoCQygCaJI4Lphgwk6JhBz%2BNFYjFv5oPTEHR3WSV64n5IAdZkeO5wBgZO2lvsra%2BT1lab6U%2FPucXqfAIp8RMKeM5b8GOqUB%2FNup1Jculbx734oPVyhEcQ%2B1tZ7oWA%2BgcngKHB2zg%2BnilUjeyt4LJdmhkkhs59HIcOMpczuzJMsUiOYlS5dvnltBUnNrnFmfu9lgGO4zls6FT7YdC5AR7NQWtxfXz%2BoqN4g9hXWrmfuTcHeSB%2BjaTCIuUcq%2F0%2FW8D6Hnu%2FXJojVrAKs%2BaChMe%2FwPSCwq%2Fron31zd0EW0t2DAqu%2BbkGfHDYqKt4Ge&X-Amz-Signature=a6a0dbc74a85380fed29266216e9321519a82217d76c7514aad395e4a189af2a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
