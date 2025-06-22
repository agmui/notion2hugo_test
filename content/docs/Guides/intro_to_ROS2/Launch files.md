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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN53H6SN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZFFB1dfuB8B%2FVrgEIdJtYa1PNDqGCr9eBdQxAnl%2FO2gIhANdjtm1c%2Fly8BkpM8jwaZ9i3nhqMyiKTaBdAd94gyAbrKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx03JkoIfyh9qYDyw8q3ANU53mMSpTRkVOn0IlTOg2qo7tm7pxaHfS2f1M8YTaTz0H%2FgNhKxikRooTr53bVR58LVapfk7LSYyfWq0k5ZFpaF9ozaecEDNvAfHlIkhkVeqzeM9nkuF8PHbuPL0QGNjGv3xc%2BbrN4T2QKS77q%2B2wlkJEAKqOH1x3GrsAiXoghgRZYHmlDmdJ5xfnM%2BdobC4ls6kXlK4syDuLTWF67NBWY0rAfy1%2BhBCFbgLRkRYGRPfZVWuOPr9%2B%2BuXB4BsPlgWlL0S8GYYcEQ3MZRE1vlL0l%2F23NCCOnCs%2BazAUpkpIXPj20yORSlDlOzMlxCUfV4sSXcHRXwaw%2FVl715sKgBKmjD0eABowyT2uWhcA9eectRtoVpaf0xpMT%2FHCxvSCeTO%2Byyz7StgRQbPiWshnKJeHCAFrl5iIhn17sbo22YnR2ozSE0ET6wQhEqkv6v%2FLyNiXrsJLO29SOk4lgmmqODCB1G6xl6di6%2FDsaMArCFrgCZbfTa40g%2BeSt46vRQasPtwlHd4kccwfU3hvDq4yBTZpA%2Fqk%2FGYcBRiNO3Fs9Y8BvfgqXL6nBLrRBJhp%2Fih0pPUAx65hDNjVUz0ePVVLr3qGf1hzrEG1myISF90fk5xWzj7nczT3VkGZ5%2F9B6NDDYh93CBjqkAVpOz5ppD0GK1mu5hlw8fIXOatpsPPZlTkdCiSlszsU5gBqDTAxvTxSq5YgNQoiwuOfnUA7T0zt9Oox9gQYrJzpf7Nitoru8R3neRPBI%2FKfZQNNTMuEyRg9iA25%2FuVTjjGGKIWOjey3%2Fdni5QXRt5LdV%2FlvCG%2F7SfPamR4VwXzSumk5zcbbfAJCzVgfBLi07%2BzyD9T0qyR9mHuQeJfLWrFN1N6wh&X-Amz-Signature=a08b8967a64d26c4712b96f8fc25022ce705614ff3e311f64114954a642f13fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN53H6SN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZFFB1dfuB8B%2FVrgEIdJtYa1PNDqGCr9eBdQxAnl%2FO2gIhANdjtm1c%2Fly8BkpM8jwaZ9i3nhqMyiKTaBdAd94gyAbrKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx03JkoIfyh9qYDyw8q3ANU53mMSpTRkVOn0IlTOg2qo7tm7pxaHfS2f1M8YTaTz0H%2FgNhKxikRooTr53bVR58LVapfk7LSYyfWq0k5ZFpaF9ozaecEDNvAfHlIkhkVeqzeM9nkuF8PHbuPL0QGNjGv3xc%2BbrN4T2QKS77q%2B2wlkJEAKqOH1x3GrsAiXoghgRZYHmlDmdJ5xfnM%2BdobC4ls6kXlK4syDuLTWF67NBWY0rAfy1%2BhBCFbgLRkRYGRPfZVWuOPr9%2B%2BuXB4BsPlgWlL0S8GYYcEQ3MZRE1vlL0l%2F23NCCOnCs%2BazAUpkpIXPj20yORSlDlOzMlxCUfV4sSXcHRXwaw%2FVl715sKgBKmjD0eABowyT2uWhcA9eectRtoVpaf0xpMT%2FHCxvSCeTO%2Byyz7StgRQbPiWshnKJeHCAFrl5iIhn17sbo22YnR2ozSE0ET6wQhEqkv6v%2FLyNiXrsJLO29SOk4lgmmqODCB1G6xl6di6%2FDsaMArCFrgCZbfTa40g%2BeSt46vRQasPtwlHd4kccwfU3hvDq4yBTZpA%2Fqk%2FGYcBRiNO3Fs9Y8BvfgqXL6nBLrRBJhp%2Fih0pPUAx65hDNjVUz0ePVVLr3qGf1hzrEG1myISF90fk5xWzj7nczT3VkGZ5%2F9B6NDDYh93CBjqkAVpOz5ppD0GK1mu5hlw8fIXOatpsPPZlTkdCiSlszsU5gBqDTAxvTxSq5YgNQoiwuOfnUA7T0zt9Oox9gQYrJzpf7Nitoru8R3neRPBI%2FKfZQNNTMuEyRg9iA25%2FuVTjjGGKIWOjey3%2Fdni5QXRt5LdV%2FlvCG%2F7SfPamR4VwXzSumk5zcbbfAJCzVgfBLi07%2BzyD9T0qyR9mHuQeJfLWrFN1N6wh&X-Amz-Signature=a10b17aa2a34e357434db04e984468d254087d58854ff7bb3eab1e9e59177077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN53H6SN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZFFB1dfuB8B%2FVrgEIdJtYa1PNDqGCr9eBdQxAnl%2FO2gIhANdjtm1c%2Fly8BkpM8jwaZ9i3nhqMyiKTaBdAd94gyAbrKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx03JkoIfyh9qYDyw8q3ANU53mMSpTRkVOn0IlTOg2qo7tm7pxaHfS2f1M8YTaTz0H%2FgNhKxikRooTr53bVR58LVapfk7LSYyfWq0k5ZFpaF9ozaecEDNvAfHlIkhkVeqzeM9nkuF8PHbuPL0QGNjGv3xc%2BbrN4T2QKS77q%2B2wlkJEAKqOH1x3GrsAiXoghgRZYHmlDmdJ5xfnM%2BdobC4ls6kXlK4syDuLTWF67NBWY0rAfy1%2BhBCFbgLRkRYGRPfZVWuOPr9%2B%2BuXB4BsPlgWlL0S8GYYcEQ3MZRE1vlL0l%2F23NCCOnCs%2BazAUpkpIXPj20yORSlDlOzMlxCUfV4sSXcHRXwaw%2FVl715sKgBKmjD0eABowyT2uWhcA9eectRtoVpaf0xpMT%2FHCxvSCeTO%2Byyz7StgRQbPiWshnKJeHCAFrl5iIhn17sbo22YnR2ozSE0ET6wQhEqkv6v%2FLyNiXrsJLO29SOk4lgmmqODCB1G6xl6di6%2FDsaMArCFrgCZbfTa40g%2BeSt46vRQasPtwlHd4kccwfU3hvDq4yBTZpA%2Fqk%2FGYcBRiNO3Fs9Y8BvfgqXL6nBLrRBJhp%2Fih0pPUAx65hDNjVUz0ePVVLr3qGf1hzrEG1myISF90fk5xWzj7nczT3VkGZ5%2F9B6NDDYh93CBjqkAVpOz5ppD0GK1mu5hlw8fIXOatpsPPZlTkdCiSlszsU5gBqDTAxvTxSq5YgNQoiwuOfnUA7T0zt9Oox9gQYrJzpf7Nitoru8R3neRPBI%2FKfZQNNTMuEyRg9iA25%2FuVTjjGGKIWOjey3%2Fdni5QXRt5LdV%2FlvCG%2F7SfPamR4VwXzSumk5zcbbfAJCzVgfBLi07%2BzyD9T0qyR9mHuQeJfLWrFN1N6wh&X-Amz-Signature=8983480983fa9e3a60cc13851f2479ec162795a6c95d8d274162feaa8f6b4a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
