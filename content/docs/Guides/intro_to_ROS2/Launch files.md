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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625L75YXU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDwvCmBhEmoGnsAV1Bra0vCE1R5YL8MHDxmQelswosl7AIhAP%2FeDT79dC42v0Wlm0CZNH%2Bi8kPzxQShtEDo0iaRnVUOKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxgx9inG084H8BYCdMq3APd1n8fz2QuHgHnnLwGRyGJiINZN3M5c0pVlswwKXYOcY02U13pBzxtp37m4IMa1PdJqVg%2BdP5U6ucEBTPHrJXOzVNIK7QjrBJi5NtwerrYiPixs48HfNgdUPjMejdqbtzNtIM6pnVX8ikEDdpcZeGsKsokHcqCuH4VDbcsOtwcZpF4PlHGpFjP%2FBei3JzI2FwcmzbV1BJXJZ97BoASxJEXzr6Tv7UNAblw%2B93skH9LXL3HXUsgUTiiq0oDc%2Bu8NEVwh6714H7oZOCBX%2BnKoe9fTL1PIuwwHOyDV3hjwAeDNSuXO0fjBnVJtwQd231oR2I6BiOWInMb%2FBZiHItAW5x7Xek%2BkUbwwzxt3v7SRcuxpw1fWZbAul4FPtFn80KlPK09XG38Txay%2B6z6wSybLRu0j5759klnyBivaDs%2FcZbKcGR7cAE6GtkzYbIaQN6ljSbyUFBZUFMlWQuOPckB5iUh2VqaySLL9L4uyOwRFJi2m%2BdkmqfinMTba6kT2aSe1o%2BngIi6u%2Bi2NxMRoJ8P0CdXU0MT3lorv8dNfcP4nVggwUtsd0sUuPMK5wcXLCrIRY4l2aJ0VApLZT2vJpO7Ks8IbYNdtVXUV%2BICi5JzRDb5F%2B79oZjAKs63m4w2fzCVoc7ABjqkAS0WeuzAuMTbCs7JwbffWfT5HKSH0Sjn4JOZ%2FCXDg3rr1l9jxndE1BeFV7tdzGBPNMzuE7UEj5fX4Yj26N%2BKxgytCQmE9BVvNmjKLZmR2Xe95O0EJC3nPbkTuG6zxBqeBUcW6oTKSvwvYVK80QC5o7ZR1PMFPwZVENDc8PZ%2FVoRxRzJdBCqEMaFtvjZJ9TA0FaCDNEoeCNs6vXqVg7PwTkSSgAaq&X-Amz-Signature=7fc5be0384f3df01e8b443ec4b36182b9749252a0fd99ae9e7fb23f0ce86e8f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625L75YXU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDwvCmBhEmoGnsAV1Bra0vCE1R5YL8MHDxmQelswosl7AIhAP%2FeDT79dC42v0Wlm0CZNH%2Bi8kPzxQShtEDo0iaRnVUOKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxgx9inG084H8BYCdMq3APd1n8fz2QuHgHnnLwGRyGJiINZN3M5c0pVlswwKXYOcY02U13pBzxtp37m4IMa1PdJqVg%2BdP5U6ucEBTPHrJXOzVNIK7QjrBJi5NtwerrYiPixs48HfNgdUPjMejdqbtzNtIM6pnVX8ikEDdpcZeGsKsokHcqCuH4VDbcsOtwcZpF4PlHGpFjP%2FBei3JzI2FwcmzbV1BJXJZ97BoASxJEXzr6Tv7UNAblw%2B93skH9LXL3HXUsgUTiiq0oDc%2Bu8NEVwh6714H7oZOCBX%2BnKoe9fTL1PIuwwHOyDV3hjwAeDNSuXO0fjBnVJtwQd231oR2I6BiOWInMb%2FBZiHItAW5x7Xek%2BkUbwwzxt3v7SRcuxpw1fWZbAul4FPtFn80KlPK09XG38Txay%2B6z6wSybLRu0j5759klnyBivaDs%2FcZbKcGR7cAE6GtkzYbIaQN6ljSbyUFBZUFMlWQuOPckB5iUh2VqaySLL9L4uyOwRFJi2m%2BdkmqfinMTba6kT2aSe1o%2BngIi6u%2Bi2NxMRoJ8P0CdXU0MT3lorv8dNfcP4nVggwUtsd0sUuPMK5wcXLCrIRY4l2aJ0VApLZT2vJpO7Ks8IbYNdtVXUV%2BICi5JzRDb5F%2B79oZjAKs63m4w2fzCVoc7ABjqkAS0WeuzAuMTbCs7JwbffWfT5HKSH0Sjn4JOZ%2FCXDg3rr1l9jxndE1BeFV7tdzGBPNMzuE7UEj5fX4Yj26N%2BKxgytCQmE9BVvNmjKLZmR2Xe95O0EJC3nPbkTuG6zxBqeBUcW6oTKSvwvYVK80QC5o7ZR1PMFPwZVENDc8PZ%2FVoRxRzJdBCqEMaFtvjZJ9TA0FaCDNEoeCNs6vXqVg7PwTkSSgAaq&X-Amz-Signature=7af190a5263d3e184fe4b978af355dad5ae64dec5ca2604b66e959e39727ae36&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625L75YXU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDwvCmBhEmoGnsAV1Bra0vCE1R5YL8MHDxmQelswosl7AIhAP%2FeDT79dC42v0Wlm0CZNH%2Bi8kPzxQShtEDo0iaRnVUOKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxgx9inG084H8BYCdMq3APd1n8fz2QuHgHnnLwGRyGJiINZN3M5c0pVlswwKXYOcY02U13pBzxtp37m4IMa1PdJqVg%2BdP5U6ucEBTPHrJXOzVNIK7QjrBJi5NtwerrYiPixs48HfNgdUPjMejdqbtzNtIM6pnVX8ikEDdpcZeGsKsokHcqCuH4VDbcsOtwcZpF4PlHGpFjP%2FBei3JzI2FwcmzbV1BJXJZ97BoASxJEXzr6Tv7UNAblw%2B93skH9LXL3HXUsgUTiiq0oDc%2Bu8NEVwh6714H7oZOCBX%2BnKoe9fTL1PIuwwHOyDV3hjwAeDNSuXO0fjBnVJtwQd231oR2I6BiOWInMb%2FBZiHItAW5x7Xek%2BkUbwwzxt3v7SRcuxpw1fWZbAul4FPtFn80KlPK09XG38Txay%2B6z6wSybLRu0j5759klnyBivaDs%2FcZbKcGR7cAE6GtkzYbIaQN6ljSbyUFBZUFMlWQuOPckB5iUh2VqaySLL9L4uyOwRFJi2m%2BdkmqfinMTba6kT2aSe1o%2BngIi6u%2Bi2NxMRoJ8P0CdXU0MT3lorv8dNfcP4nVggwUtsd0sUuPMK5wcXLCrIRY4l2aJ0VApLZT2vJpO7Ks8IbYNdtVXUV%2BICi5JzRDb5F%2B79oZjAKs63m4w2fzCVoc7ABjqkAS0WeuzAuMTbCs7JwbffWfT5HKSH0Sjn4JOZ%2FCXDg3rr1l9jxndE1BeFV7tdzGBPNMzuE7UEj5fX4Yj26N%2BKxgytCQmE9BVvNmjKLZmR2Xe95O0EJC3nPbkTuG6zxBqeBUcW6oTKSvwvYVK80QC5o7ZR1PMFPwZVENDc8PZ%2FVoRxRzJdBCqEMaFtvjZJ9TA0FaCDNEoeCNs6vXqVg7PwTkSSgAaq&X-Amz-Signature=29687a2953f949494e2d699fe05528f5713645ef34ce4f850942847935209d46&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
