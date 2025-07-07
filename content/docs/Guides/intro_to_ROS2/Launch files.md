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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRSIMIYM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIDKDjq%2FRBYIRo2xTkQOy05OFgjy%2Bet5W0fbCKgbaTHt%2FAiEAod3T0Y53EvZwWBVi38XVrlurWFtkfoHijyI9Wae4UqYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDPiErSwIUwx%2BVJ2bUSrcA7v0VS9nhfyYia6ft8Ea4nfiDSvCRqwXAFkrZNriHORj0qUVMhMElnXiymTvh02Whod5MyNDfBi%2FHQ5AjB15bhYORk4pNISfaYNUzqojdphGKSFZ05Mp7aEwLt28kqsPPtsoHIYA1ltCHNxP1cUt8GkZCnvuV1BqdDWL0TXgYYo9zf50bVvh7U4OOXw2txBOhNx%2BmJIhd1EASy8b2ATn9l62THgN%2BgD1kTjjSnISqG%2FjkST15WJDDZRY0gKeqr2%2FZOckODq2ohvFX9Hi47UIZhfkNGO23860k5HLEf0y5iWND6EA0ERMnKFOR2%2Fbmx4ORa3WsdZ6HGgBgQ8wix9qSwehGUaGnW2XbPOtgiEQ0YHz%2BoM9KwYIPeA2FqNTgmgJnihUmK%2BA8tge%2FQFdQOlQtrQOFr6rpR%2FJoj%2BbhDNswn1KH9lK%2F%2BedhkGerOSDW9zzQNBN9TLcUhe2pMmPMgbVcq1yyuMcNCA6L0EOAGlcIQdGabUVgtdu21gS494Reo1u0aNLYTGHJ6WyHKE9laCWsHturkslLwDl8y71MA7Xi%2BCTSUpdBSTLpMcek4GxkWNDMfoNJ%2BSO88MV1FHO3jTqz3otmOyZZwIHEytJZrtD2Zdg%2FSEIrMva1O4Y3LFBMJeSrMMGOqUBZ7XyNHYP2wT3S4KX1GylbCfqiqzJci264YRMHRJ8D3irSwfJDENMk82daJA9%2FXQLFxeLs9lzkT33pjYPUK21oKXWRDQ3LVhUOpkrN3qN4NXe6nQZm%2BcYljz0wFvnlOnQ%2BnQB8Zg5VSF1K8vWlEZ8ej%2BZFtjp4yQWqStqL%2FY6lXVtWsMQeEm4fBJ4vsn0Me8aIqNiReads5N0%2FrA9mb3LP4iCdAzZ&X-Amz-Signature=6080181884e347511d32dc72efd9ad7f11396f78f3231284a3a7a0fd1d578191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRSIMIYM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIDKDjq%2FRBYIRo2xTkQOy05OFgjy%2Bet5W0fbCKgbaTHt%2FAiEAod3T0Y53EvZwWBVi38XVrlurWFtkfoHijyI9Wae4UqYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDPiErSwIUwx%2BVJ2bUSrcA7v0VS9nhfyYia6ft8Ea4nfiDSvCRqwXAFkrZNriHORj0qUVMhMElnXiymTvh02Whod5MyNDfBi%2FHQ5AjB15bhYORk4pNISfaYNUzqojdphGKSFZ05Mp7aEwLt28kqsPPtsoHIYA1ltCHNxP1cUt8GkZCnvuV1BqdDWL0TXgYYo9zf50bVvh7U4OOXw2txBOhNx%2BmJIhd1EASy8b2ATn9l62THgN%2BgD1kTjjSnISqG%2FjkST15WJDDZRY0gKeqr2%2FZOckODq2ohvFX9Hi47UIZhfkNGO23860k5HLEf0y5iWND6EA0ERMnKFOR2%2Fbmx4ORa3WsdZ6HGgBgQ8wix9qSwehGUaGnW2XbPOtgiEQ0YHz%2BoM9KwYIPeA2FqNTgmgJnihUmK%2BA8tge%2FQFdQOlQtrQOFr6rpR%2FJoj%2BbhDNswn1KH9lK%2F%2BedhkGerOSDW9zzQNBN9TLcUhe2pMmPMgbVcq1yyuMcNCA6L0EOAGlcIQdGabUVgtdu21gS494Reo1u0aNLYTGHJ6WyHKE9laCWsHturkslLwDl8y71MA7Xi%2BCTSUpdBSTLpMcek4GxkWNDMfoNJ%2BSO88MV1FHO3jTqz3otmOyZZwIHEytJZrtD2Zdg%2FSEIrMva1O4Y3LFBMJeSrMMGOqUBZ7XyNHYP2wT3S4KX1GylbCfqiqzJci264YRMHRJ8D3irSwfJDENMk82daJA9%2FXQLFxeLs9lzkT33pjYPUK21oKXWRDQ3LVhUOpkrN3qN4NXe6nQZm%2BcYljz0wFvnlOnQ%2BnQB8Zg5VSF1K8vWlEZ8ej%2BZFtjp4yQWqStqL%2FY6lXVtWsMQeEm4fBJ4vsn0Me8aIqNiReads5N0%2FrA9mb3LP4iCdAzZ&X-Amz-Signature=eaedee93b245d9b7ce115e9cdfe8f0c5c4cfa2db8c19ff6a2b7942a31a9a8f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRSIMIYM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIDKDjq%2FRBYIRo2xTkQOy05OFgjy%2Bet5W0fbCKgbaTHt%2FAiEAod3T0Y53EvZwWBVi38XVrlurWFtkfoHijyI9Wae4UqYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDPiErSwIUwx%2BVJ2bUSrcA7v0VS9nhfyYia6ft8Ea4nfiDSvCRqwXAFkrZNriHORj0qUVMhMElnXiymTvh02Whod5MyNDfBi%2FHQ5AjB15bhYORk4pNISfaYNUzqojdphGKSFZ05Mp7aEwLt28kqsPPtsoHIYA1ltCHNxP1cUt8GkZCnvuV1BqdDWL0TXgYYo9zf50bVvh7U4OOXw2txBOhNx%2BmJIhd1EASy8b2ATn9l62THgN%2BgD1kTjjSnISqG%2FjkST15WJDDZRY0gKeqr2%2FZOckODq2ohvFX9Hi47UIZhfkNGO23860k5HLEf0y5iWND6EA0ERMnKFOR2%2Fbmx4ORa3WsdZ6HGgBgQ8wix9qSwehGUaGnW2XbPOtgiEQ0YHz%2BoM9KwYIPeA2FqNTgmgJnihUmK%2BA8tge%2FQFdQOlQtrQOFr6rpR%2FJoj%2BbhDNswn1KH9lK%2F%2BedhkGerOSDW9zzQNBN9TLcUhe2pMmPMgbVcq1yyuMcNCA6L0EOAGlcIQdGabUVgtdu21gS494Reo1u0aNLYTGHJ6WyHKE9laCWsHturkslLwDl8y71MA7Xi%2BCTSUpdBSTLpMcek4GxkWNDMfoNJ%2BSO88MV1FHO3jTqz3otmOyZZwIHEytJZrtD2Zdg%2FSEIrMva1O4Y3LFBMJeSrMMGOqUBZ7XyNHYP2wT3S4KX1GylbCfqiqzJci264YRMHRJ8D3irSwfJDENMk82daJA9%2FXQLFxeLs9lzkT33pjYPUK21oKXWRDQ3LVhUOpkrN3qN4NXe6nQZm%2BcYljz0wFvnlOnQ%2BnQB8Zg5VSF1K8vWlEZ8ej%2BZFtjp4yQWqStqL%2FY6lXVtWsMQeEm4fBJ4vsn0Me8aIqNiReads5N0%2FrA9mb3LP4iCdAzZ&X-Amz-Signature=c6d8cb577725f56873b234af9f93e059faf409a1a0467ec7fcff730d0d8e37e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
