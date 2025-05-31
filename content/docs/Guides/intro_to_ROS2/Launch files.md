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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VME36I5X%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaMcytWvQnTG%2FNdC1rzvL5QBYxapoh0LAHzF1XfPtiWAiEAmET1Fu8ZPsejU6uULPlNw6iiiXICA3HzQJtd6SRsSiQqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByVuaaxlj61EGArNircA55a8vE4K5ziiybYcRwRgCOIVqwnMPMOmlDZBH6bw82OFEbbJXitZpAgo0QNQ5mF%2BTF78CMt31tb4%2FXRkWnLQoKfq7ZBkvGpU7j%2BX92MRzP9VVLIJIM9%2FZV7J1WjhmGKWae8i0c46Dp1VyoRxk5JtXBDbxeezoZJzp%2FY6U4FBtH%2BKwG4sBdzvQz5fV2Lu9kNZzXCAcys7NBq9vA1i1%2Fv9fWv%2FGYfGyrCFfbM5mULG95LqOnnHEe5IUE%2BXnkYXb0fINfTSz3y5zuCaR0Q89CbgJ%2Fsmym1dZmx5PwKi9Bd0FCtldIjaGbIIt%2Bw5aJFomuYpdaw4t3BcRXLSV%2BsrUF8QtP9BxhQAU7qWPE%2FhycRNVmkMnRYqy3gHoceXafPa4k44hTmq53rSpiW5uRR8GC4JIe0tU6Kj42kaIHKhStYPPma6k6qw7Z9kcfI%2BlB4N83Nmq8cf4TLVE4ucAzppopAIi3mwmuoi%2F1Nj9hTuSwICoox0dQqTL8Omw2jqvO3V1vdAEb9PqKakwDmqIXVkF5fDWF1vVr3ADgXPv9T37K%2B2SiqTyOZsHPZ55sphqOROen1Ba1w9PMSVHIAntjuKulmSjwM3DcgzG59sWCVdW%2F3XyLHR0wiaCOXGG9kPIt6MLK168EGOqUB6dUlNMiG8CFAubrxXYXJPOje5XEitpmswaY2Twc6i%2Bpd4PxjgKwDnTv%2BoC42bnrCfTvcZpi%2FKmGixwxwn9qNSBTGnoKzGPdyfSLbmW42%2BUdNAR2rS0ABZrN13PGLMmbOvwX2qVXMhXf2SHdqJs8bsSNTh97js9bIq21OjUtSn4Vq79tjWFpFwbrQw7r3AKxD%2FOwRs33NxVeJCRBAHtgWECezgF41&X-Amz-Signature=06a1bc72c9b7c62c5bcbbe66d01af3a4afed9d458d68b78eee33d1d72c378fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VME36I5X%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaMcytWvQnTG%2FNdC1rzvL5QBYxapoh0LAHzF1XfPtiWAiEAmET1Fu8ZPsejU6uULPlNw6iiiXICA3HzQJtd6SRsSiQqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByVuaaxlj61EGArNircA55a8vE4K5ziiybYcRwRgCOIVqwnMPMOmlDZBH6bw82OFEbbJXitZpAgo0QNQ5mF%2BTF78CMt31tb4%2FXRkWnLQoKfq7ZBkvGpU7j%2BX92MRzP9VVLIJIM9%2FZV7J1WjhmGKWae8i0c46Dp1VyoRxk5JtXBDbxeezoZJzp%2FY6U4FBtH%2BKwG4sBdzvQz5fV2Lu9kNZzXCAcys7NBq9vA1i1%2Fv9fWv%2FGYfGyrCFfbM5mULG95LqOnnHEe5IUE%2BXnkYXb0fINfTSz3y5zuCaR0Q89CbgJ%2Fsmym1dZmx5PwKi9Bd0FCtldIjaGbIIt%2Bw5aJFomuYpdaw4t3BcRXLSV%2BsrUF8QtP9BxhQAU7qWPE%2FhycRNVmkMnRYqy3gHoceXafPa4k44hTmq53rSpiW5uRR8GC4JIe0tU6Kj42kaIHKhStYPPma6k6qw7Z9kcfI%2BlB4N83Nmq8cf4TLVE4ucAzppopAIi3mwmuoi%2F1Nj9hTuSwICoox0dQqTL8Omw2jqvO3V1vdAEb9PqKakwDmqIXVkF5fDWF1vVr3ADgXPv9T37K%2B2SiqTyOZsHPZ55sphqOROen1Ba1w9PMSVHIAntjuKulmSjwM3DcgzG59sWCVdW%2F3XyLHR0wiaCOXGG9kPIt6MLK168EGOqUB6dUlNMiG8CFAubrxXYXJPOje5XEitpmswaY2Twc6i%2Bpd4PxjgKwDnTv%2BoC42bnrCfTvcZpi%2FKmGixwxwn9qNSBTGnoKzGPdyfSLbmW42%2BUdNAR2rS0ABZrN13PGLMmbOvwX2qVXMhXf2SHdqJs8bsSNTh97js9bIq21OjUtSn4Vq79tjWFpFwbrQw7r3AKxD%2FOwRs33NxVeJCRBAHtgWECezgF41&X-Amz-Signature=2c744e4a81cad425a5fe968aa5895c2bcc0d5e0ae24bc96f9855d018a4fed39d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VME36I5X%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaMcytWvQnTG%2FNdC1rzvL5QBYxapoh0LAHzF1XfPtiWAiEAmET1Fu8ZPsejU6uULPlNw6iiiXICA3HzQJtd6SRsSiQqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByVuaaxlj61EGArNircA55a8vE4K5ziiybYcRwRgCOIVqwnMPMOmlDZBH6bw82OFEbbJXitZpAgo0QNQ5mF%2BTF78CMt31tb4%2FXRkWnLQoKfq7ZBkvGpU7j%2BX92MRzP9VVLIJIM9%2FZV7J1WjhmGKWae8i0c46Dp1VyoRxk5JtXBDbxeezoZJzp%2FY6U4FBtH%2BKwG4sBdzvQz5fV2Lu9kNZzXCAcys7NBq9vA1i1%2Fv9fWv%2FGYfGyrCFfbM5mULG95LqOnnHEe5IUE%2BXnkYXb0fINfTSz3y5zuCaR0Q89CbgJ%2Fsmym1dZmx5PwKi9Bd0FCtldIjaGbIIt%2Bw5aJFomuYpdaw4t3BcRXLSV%2BsrUF8QtP9BxhQAU7qWPE%2FhycRNVmkMnRYqy3gHoceXafPa4k44hTmq53rSpiW5uRR8GC4JIe0tU6Kj42kaIHKhStYPPma6k6qw7Z9kcfI%2BlB4N83Nmq8cf4TLVE4ucAzppopAIi3mwmuoi%2F1Nj9hTuSwICoox0dQqTL8Omw2jqvO3V1vdAEb9PqKakwDmqIXVkF5fDWF1vVr3ADgXPv9T37K%2B2SiqTyOZsHPZ55sphqOROen1Ba1w9PMSVHIAntjuKulmSjwM3DcgzG59sWCVdW%2F3XyLHR0wiaCOXGG9kPIt6MLK168EGOqUB6dUlNMiG8CFAubrxXYXJPOje5XEitpmswaY2Twc6i%2Bpd4PxjgKwDnTv%2BoC42bnrCfTvcZpi%2FKmGixwxwn9qNSBTGnoKzGPdyfSLbmW42%2BUdNAR2rS0ABZrN13PGLMmbOvwX2qVXMhXf2SHdqJs8bsSNTh97js9bIq21OjUtSn4Vq79tjWFpFwbrQw7r3AKxD%2FOwRs33NxVeJCRBAHtgWECezgF41&X-Amz-Signature=62cecee738180b9ab027227fd5102a438731dc0d3c432f48588f0cc485dd0e40&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
