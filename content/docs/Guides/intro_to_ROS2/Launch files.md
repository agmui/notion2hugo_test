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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672UTS3UO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDDHCeACYAKk0kDDMMvqadVxkW0nzNbolpp1%2BMzBRJm%2BQIgXiQa5JAsTK%2FsGmVdNBy%2FtFKkWNHGvqxha9%2B8mmO9JPwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcU1snX9mWUqiBDqircA1qVbcCpMptHsKxQqykGRklCHblMeztUIUbM10ZYvfr54eC%2FlTmrjHc1uSpZF%2FW%2BrApyCbWgyYjbpzqCNpvdmVhe914riK4QoLs7HvgcF3IvtlO0hU9tyPdlqCyWIOSy6Z0hz8bzV8A33dp2vEp%2BPzIH%2BEHGkkuZ%2FjlZHyr%2BSJnFzaSVtUr1KNorbVgZe5fV3PhrMA71FjVGDLFmpVpMEV3V5yt7R10s4aHsL3099cdBidiUQ1pJspE80%2Br%2Fq90gPWGqq1lA%2BqyyCCBwHOIGt9naxVj1P5DqnXyJ9qAxB3duKYYBgyXLUpEw4Y0btC2quMiiwYl5A3VE7EhNmurc2qWNMU0d4pX3HcbSyj9JZxkDmRQenndS%2BsqbnbhQvwaF%2FU1fOjCpqQ%2FRc%2BhzEcxWFCM9NAhdywvCGH9MPUTy74SDt1bTMF4vNp5Nhl4WmzrzKJgC08LOamvLQIry8vpOIIYAAWWHj%2FCdUz7i4KFizAI84q9eQ7qEyBsN0RMSe87EGA7D1kGe%2FoplHHSt0ZN2lxQWHw0ye1rLFTBN0dVzMhzXTWMOpiQfr7QDDqznBcfPnh7QiMFYcpsvt5kL9GBtmCxrnVHwMQuln7CpKc%2B4pVV%2Fshua081xkY5yAAkCMOuI58MGOqUBthGwNDybCjzkmo64kHJAyLTY%2BWgUKmawKna6fxlyUaL8VAA12eL0Asy%2F7wBNH4cYr2qLThuH0ZCElGlBPhdSclHyXkn0gpt8ZP0gvv07mlwLS%2BVMvwWpsI7jFeNMsg%2FREM6DZU9EpGYzOLGgkxc%2B5077J3FPhHIyhV3dduCBSHHSdKqYju8FqxrGhS6SP2anr9u2RyAnrFv4vSb%2B5%2BbWRoBteYI%2F&X-Amz-Signature=c3618c074a708a01a37a247598b9b9773616e876894948bea5de7aa363851431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672UTS3UO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDDHCeACYAKk0kDDMMvqadVxkW0nzNbolpp1%2BMzBRJm%2BQIgXiQa5JAsTK%2FsGmVdNBy%2FtFKkWNHGvqxha9%2B8mmO9JPwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcU1snX9mWUqiBDqircA1qVbcCpMptHsKxQqykGRklCHblMeztUIUbM10ZYvfr54eC%2FlTmrjHc1uSpZF%2FW%2BrApyCbWgyYjbpzqCNpvdmVhe914riK4QoLs7HvgcF3IvtlO0hU9tyPdlqCyWIOSy6Z0hz8bzV8A33dp2vEp%2BPzIH%2BEHGkkuZ%2FjlZHyr%2BSJnFzaSVtUr1KNorbVgZe5fV3PhrMA71FjVGDLFmpVpMEV3V5yt7R10s4aHsL3099cdBidiUQ1pJspE80%2Br%2Fq90gPWGqq1lA%2BqyyCCBwHOIGt9naxVj1P5DqnXyJ9qAxB3duKYYBgyXLUpEw4Y0btC2quMiiwYl5A3VE7EhNmurc2qWNMU0d4pX3HcbSyj9JZxkDmRQenndS%2BsqbnbhQvwaF%2FU1fOjCpqQ%2FRc%2BhzEcxWFCM9NAhdywvCGH9MPUTy74SDt1bTMF4vNp5Nhl4WmzrzKJgC08LOamvLQIry8vpOIIYAAWWHj%2FCdUz7i4KFizAI84q9eQ7qEyBsN0RMSe87EGA7D1kGe%2FoplHHSt0ZN2lxQWHw0ye1rLFTBN0dVzMhzXTWMOpiQfr7QDDqznBcfPnh7QiMFYcpsvt5kL9GBtmCxrnVHwMQuln7CpKc%2B4pVV%2Fshua081xkY5yAAkCMOuI58MGOqUBthGwNDybCjzkmo64kHJAyLTY%2BWgUKmawKna6fxlyUaL8VAA12eL0Asy%2F7wBNH4cYr2qLThuH0ZCElGlBPhdSclHyXkn0gpt8ZP0gvv07mlwLS%2BVMvwWpsI7jFeNMsg%2FREM6DZU9EpGYzOLGgkxc%2B5077J3FPhHIyhV3dduCBSHHSdKqYju8FqxrGhS6SP2anr9u2RyAnrFv4vSb%2B5%2BbWRoBteYI%2F&X-Amz-Signature=ba6dd3d276ad56f5ab96213163c19328a294b21e2331b6999e924ca306610b1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672UTS3UO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDDHCeACYAKk0kDDMMvqadVxkW0nzNbolpp1%2BMzBRJm%2BQIgXiQa5JAsTK%2FsGmVdNBy%2FtFKkWNHGvqxha9%2B8mmO9JPwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcU1snX9mWUqiBDqircA1qVbcCpMptHsKxQqykGRklCHblMeztUIUbM10ZYvfr54eC%2FlTmrjHc1uSpZF%2FW%2BrApyCbWgyYjbpzqCNpvdmVhe914riK4QoLs7HvgcF3IvtlO0hU9tyPdlqCyWIOSy6Z0hz8bzV8A33dp2vEp%2BPzIH%2BEHGkkuZ%2FjlZHyr%2BSJnFzaSVtUr1KNorbVgZe5fV3PhrMA71FjVGDLFmpVpMEV3V5yt7R10s4aHsL3099cdBidiUQ1pJspE80%2Br%2Fq90gPWGqq1lA%2BqyyCCBwHOIGt9naxVj1P5DqnXyJ9qAxB3duKYYBgyXLUpEw4Y0btC2quMiiwYl5A3VE7EhNmurc2qWNMU0d4pX3HcbSyj9JZxkDmRQenndS%2BsqbnbhQvwaF%2FU1fOjCpqQ%2FRc%2BhzEcxWFCM9NAhdywvCGH9MPUTy74SDt1bTMF4vNp5Nhl4WmzrzKJgC08LOamvLQIry8vpOIIYAAWWHj%2FCdUz7i4KFizAI84q9eQ7qEyBsN0RMSe87EGA7D1kGe%2FoplHHSt0ZN2lxQWHw0ye1rLFTBN0dVzMhzXTWMOpiQfr7QDDqznBcfPnh7QiMFYcpsvt5kL9GBtmCxrnVHwMQuln7CpKc%2B4pVV%2Fshua081xkY5yAAkCMOuI58MGOqUBthGwNDybCjzkmo64kHJAyLTY%2BWgUKmawKna6fxlyUaL8VAA12eL0Asy%2F7wBNH4cYr2qLThuH0ZCElGlBPhdSclHyXkn0gpt8ZP0gvv07mlwLS%2BVMvwWpsI7jFeNMsg%2FREM6DZU9EpGYzOLGgkxc%2B5077J3FPhHIyhV3dduCBSHHSdKqYju8FqxrGhS6SP2anr9u2RyAnrFv4vSb%2B5%2BbWRoBteYI%2F&X-Amz-Signature=caeffccf96fcfe316e62a6e34ae2de143e57ee7c3a64f10f2b66433a1df56ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
