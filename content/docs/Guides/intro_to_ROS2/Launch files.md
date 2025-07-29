---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPB46AH2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqhAsPvjfbGOJyipgnIsKq2tQRWhxTOiRWGlhH%2F%2BfLiAiEAmgB3a8Z%2FgJZgP1vxlfvHoZO2LffrpwDIVfKU%2FPYYw3IqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAp4aLRi5JZg4x4GHCrcA1ZqKRkUBlSzJ1G%2F%2FJzvM4t3wLnECYqxyL%2BSra7UyddwFwnlpDgjltAVkfC1yx3HheU3l0iJXHI12Q8cBe600fs%2FLT1OA5fXUAPQ3VYcowC9Vx4icsuXOY%2BSu1yxFSGeGrdfkk5sLCCFQxixRAEtmpK7CTNDDyJ3gFuxE%2F1PLOYUFfhQQjxbcs1R1wTegGhumXEN5NTlTL3tbOgM9Gd7sLUfszcn7SvWcFTC9mqybklKlYkjCv3Bd9bi3NYqVoNLEbmxywCvVHs2kw47aX3uqmxqbY%2BNM5lZfMJfBPs4suhGW4E8TrjTdX%2F6tbNDmrIsnvaPeVyjU14IIBtBw2YCVb1ol2NjNx6HEIHPDw8dOxDMdMnJF%2FEJEF5z65NqFKFKq8wjTrpNZ1F4Y4SXrrd%2BrAzQEaT42%2FNWpZXl%2F1dD2YttlTaIZt4A2ZhKStGfK75Sty5a9e6LEmHm8ABcTvRoT2bcUujWsmat%2Fv5IIWEE8ytpXSMUAvSb4MNcFEhoaayyMmc8ZsuYN9lPAH%2BMh34%2FEEb%2BFvrJ%2FKGnZzexT3Es5b10Xe5faVYdAzacNFBialPJkPRlhsCdgMMulSxcuVJ3EpPFBwh5rqJLm%2BvkqHKcpnq5escvBpJCefXnVNAVMIeupMQGOqUBTziRvtp5Bi2lJpN%2FasKoMg0X7UdTevJuAlXTf2j6wgfIODmT27xFs14P9X63fdU2rX%2BXOTOquuFpJ0sXYgBS77ln5BYA5mVvDCcC3TTXHusSQFBNRLwElha%2FvbQe9%2BbPxARj5U%2BO1ZYAA6sFbwIUeQ86R2zU03QkZRNR%2BvdECJXV2zc%2Fns8mMF%2BVGEFH7VbXIZflM4hCZbJnA9ThgPisnsli55id&X-Amz-Signature=3951343f33cf0f4eb95116f84b540020c556637b89cfa37f161aeed5e1759108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPB46AH2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqhAsPvjfbGOJyipgnIsKq2tQRWhxTOiRWGlhH%2F%2BfLiAiEAmgB3a8Z%2FgJZgP1vxlfvHoZO2LffrpwDIVfKU%2FPYYw3IqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAp4aLRi5JZg4x4GHCrcA1ZqKRkUBlSzJ1G%2F%2FJzvM4t3wLnECYqxyL%2BSra7UyddwFwnlpDgjltAVkfC1yx3HheU3l0iJXHI12Q8cBe600fs%2FLT1OA5fXUAPQ3VYcowC9Vx4icsuXOY%2BSu1yxFSGeGrdfkk5sLCCFQxixRAEtmpK7CTNDDyJ3gFuxE%2F1PLOYUFfhQQjxbcs1R1wTegGhumXEN5NTlTL3tbOgM9Gd7sLUfszcn7SvWcFTC9mqybklKlYkjCv3Bd9bi3NYqVoNLEbmxywCvVHs2kw47aX3uqmxqbY%2BNM5lZfMJfBPs4suhGW4E8TrjTdX%2F6tbNDmrIsnvaPeVyjU14IIBtBw2YCVb1ol2NjNx6HEIHPDw8dOxDMdMnJF%2FEJEF5z65NqFKFKq8wjTrpNZ1F4Y4SXrrd%2BrAzQEaT42%2FNWpZXl%2F1dD2YttlTaIZt4A2ZhKStGfK75Sty5a9e6LEmHm8ABcTvRoT2bcUujWsmat%2Fv5IIWEE8ytpXSMUAvSb4MNcFEhoaayyMmc8ZsuYN9lPAH%2BMh34%2FEEb%2BFvrJ%2FKGnZzexT3Es5b10Xe5faVYdAzacNFBialPJkPRlhsCdgMMulSxcuVJ3EpPFBwh5rqJLm%2BvkqHKcpnq5escvBpJCefXnVNAVMIeupMQGOqUBTziRvtp5Bi2lJpN%2FasKoMg0X7UdTevJuAlXTf2j6wgfIODmT27xFs14P9X63fdU2rX%2BXOTOquuFpJ0sXYgBS77ln5BYA5mVvDCcC3TTXHusSQFBNRLwElha%2FvbQe9%2BbPxARj5U%2BO1ZYAA6sFbwIUeQ86R2zU03QkZRNR%2BvdECJXV2zc%2Fns8mMF%2BVGEFH7VbXIZflM4hCZbJnA9ThgPisnsli55id&X-Amz-Signature=7a42ec8072a667a58ce3c182ced70f77fbaa3f663bf8569f8764eb609f86ff8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPB46AH2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqhAsPvjfbGOJyipgnIsKq2tQRWhxTOiRWGlhH%2F%2BfLiAiEAmgB3a8Z%2FgJZgP1vxlfvHoZO2LffrpwDIVfKU%2FPYYw3IqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAp4aLRi5JZg4x4GHCrcA1ZqKRkUBlSzJ1G%2F%2FJzvM4t3wLnECYqxyL%2BSra7UyddwFwnlpDgjltAVkfC1yx3HheU3l0iJXHI12Q8cBe600fs%2FLT1OA5fXUAPQ3VYcowC9Vx4icsuXOY%2BSu1yxFSGeGrdfkk5sLCCFQxixRAEtmpK7CTNDDyJ3gFuxE%2F1PLOYUFfhQQjxbcs1R1wTegGhumXEN5NTlTL3tbOgM9Gd7sLUfszcn7SvWcFTC9mqybklKlYkjCv3Bd9bi3NYqVoNLEbmxywCvVHs2kw47aX3uqmxqbY%2BNM5lZfMJfBPs4suhGW4E8TrjTdX%2F6tbNDmrIsnvaPeVyjU14IIBtBw2YCVb1ol2NjNx6HEIHPDw8dOxDMdMnJF%2FEJEF5z65NqFKFKq8wjTrpNZ1F4Y4SXrrd%2BrAzQEaT42%2FNWpZXl%2F1dD2YttlTaIZt4A2ZhKStGfK75Sty5a9e6LEmHm8ABcTvRoT2bcUujWsmat%2Fv5IIWEE8ytpXSMUAvSb4MNcFEhoaayyMmc8ZsuYN9lPAH%2BMh34%2FEEb%2BFvrJ%2FKGnZzexT3Es5b10Xe5faVYdAzacNFBialPJkPRlhsCdgMMulSxcuVJ3EpPFBwh5rqJLm%2BvkqHKcpnq5escvBpJCefXnVNAVMIeupMQGOqUBTziRvtp5Bi2lJpN%2FasKoMg0X7UdTevJuAlXTf2j6wgfIODmT27xFs14P9X63fdU2rX%2BXOTOquuFpJ0sXYgBS77ln5BYA5mVvDCcC3TTXHusSQFBNRLwElha%2FvbQe9%2BbPxARj5U%2BO1ZYAA6sFbwIUeQ86R2zU03QkZRNR%2BvdECJXV2zc%2Fns8mMF%2BVGEFH7VbXIZflM4hCZbJnA9ThgPisnsli55id&X-Amz-Signature=ac329c8737ad93850dc3e0c345945c8e56861e057b9904b577227ee3402e5782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
