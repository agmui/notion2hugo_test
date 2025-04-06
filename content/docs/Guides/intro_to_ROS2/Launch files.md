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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDMEXS5C%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHu9ZsqqeacYeFtsg2L%2FTU%2BemUtWOVISescjMRKS8bEPAiEAlLLJeDXm0fIEgdlX97M5lYkjyhcZ7OUva%2F7sG0dTMrYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDH8dUoUzX8NU6JoHuSrcA%2BqCHOjZUJuNQC46d9TQwoDrRvk95dSfKqCXUixcVuJe%2Bj0KPSZYt4TvMHlr80%2B1NCiSDJTeLO3GgS0I6O73t6kHxFi9j8ZvOhoZ92S4HItVV4EtJSR4edZg7JQuQYLa4et2yz1x68eZz1k8dkJh0tImQlMlawfWeHNzdo%2BrE4%2FfKG%2BeDxlOgHCKbmVJz5yr%2FlRLivA1Eg02BESbqpCGAyUA7Dt3jNCqFqMHI%2B7qdgOGhkiE3BZNjoQLSNE4EcnmGS1haOHyUnhi92cMXpwOs0RJh2ga4CAnn1tAOKD3ES3RjfDYafuBOGeLOTy91JXMsr0xG0i%2Bq9P5XFXi91das4kxTGk%2FDtShsrfK7iWTc9WLD0fLylNaC61ypCd96%2B5fxvrXi%2BGnFizcR91g0xTysdiTfQuACc3J5UyKulJQU0fOznYpvpAIIGOICfhESPfJJWY2OG%2FxbsoSX7LG0WhwPvIezuR2ozm%2BJB85YGYSsPdZyxwZ%2B%2B91E%2F%2Bz88sz0Q1byyirtmqqprhOKvkJf3BLqQjkv%2By8ApG0wFrYlFVqRAe2xjNSM6uk7Cj3VuV6%2Fn09cdyuguM9kaHObbHCxM8w%2BSzSRRYWtA7aO9t4eeNvCRk6%2Bdgcz0Vlceo2LmyJMNLCxr8GOqUBbl5T%2FtFxmm4aMZ8rQmDS7Oszdad2btsIBm%2BwV%2FZCMmhKpfx9aJEmqc%2Bkzlog32oZbBnEw%2FsfidcmwK122iQaUCFYpU%2BVAIA2qbd35W5189d%2FhVvRwojMZh78jwuqHs4Tzovy%2BSuDvLQuuo%2FPRfX8c%2FEUT%2BDQZNbE97bRJsha979cddVskQpNFM9e12bVRzkISnaVay66xKPNdvm1RaZzBx3rt544&X-Amz-Signature=472461a713b5bfa5564e981d04a0f1c8741654dbd5103a3460500ba1e866a040&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDMEXS5C%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHu9ZsqqeacYeFtsg2L%2FTU%2BemUtWOVISescjMRKS8bEPAiEAlLLJeDXm0fIEgdlX97M5lYkjyhcZ7OUva%2F7sG0dTMrYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDH8dUoUzX8NU6JoHuSrcA%2BqCHOjZUJuNQC46d9TQwoDrRvk95dSfKqCXUixcVuJe%2Bj0KPSZYt4TvMHlr80%2B1NCiSDJTeLO3GgS0I6O73t6kHxFi9j8ZvOhoZ92S4HItVV4EtJSR4edZg7JQuQYLa4et2yz1x68eZz1k8dkJh0tImQlMlawfWeHNzdo%2BrE4%2FfKG%2BeDxlOgHCKbmVJz5yr%2FlRLivA1Eg02BESbqpCGAyUA7Dt3jNCqFqMHI%2B7qdgOGhkiE3BZNjoQLSNE4EcnmGS1haOHyUnhi92cMXpwOs0RJh2ga4CAnn1tAOKD3ES3RjfDYafuBOGeLOTy91JXMsr0xG0i%2Bq9P5XFXi91das4kxTGk%2FDtShsrfK7iWTc9WLD0fLylNaC61ypCd96%2B5fxvrXi%2BGnFizcR91g0xTysdiTfQuACc3J5UyKulJQU0fOznYpvpAIIGOICfhESPfJJWY2OG%2FxbsoSX7LG0WhwPvIezuR2ozm%2BJB85YGYSsPdZyxwZ%2B%2B91E%2F%2Bz88sz0Q1byyirtmqqprhOKvkJf3BLqQjkv%2By8ApG0wFrYlFVqRAe2xjNSM6uk7Cj3VuV6%2Fn09cdyuguM9kaHObbHCxM8w%2BSzSRRYWtA7aO9t4eeNvCRk6%2Bdgcz0Vlceo2LmyJMNLCxr8GOqUBbl5T%2FtFxmm4aMZ8rQmDS7Oszdad2btsIBm%2BwV%2FZCMmhKpfx9aJEmqc%2Bkzlog32oZbBnEw%2FsfidcmwK122iQaUCFYpU%2BVAIA2qbd35W5189d%2FhVvRwojMZh78jwuqHs4Tzovy%2BSuDvLQuuo%2FPRfX8c%2FEUT%2BDQZNbE97bRJsha979cddVskQpNFM9e12bVRzkISnaVay66xKPNdvm1RaZzBx3rt544&X-Amz-Signature=6dbf45b61d934be49846ebabc6f66680d7055fbce37c42fc9973c09f4cf8780b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDMEXS5C%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHu9ZsqqeacYeFtsg2L%2FTU%2BemUtWOVISescjMRKS8bEPAiEAlLLJeDXm0fIEgdlX97M5lYkjyhcZ7OUva%2F7sG0dTMrYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDH8dUoUzX8NU6JoHuSrcA%2BqCHOjZUJuNQC46d9TQwoDrRvk95dSfKqCXUixcVuJe%2Bj0KPSZYt4TvMHlr80%2B1NCiSDJTeLO3GgS0I6O73t6kHxFi9j8ZvOhoZ92S4HItVV4EtJSR4edZg7JQuQYLa4et2yz1x68eZz1k8dkJh0tImQlMlawfWeHNzdo%2BrE4%2FfKG%2BeDxlOgHCKbmVJz5yr%2FlRLivA1Eg02BESbqpCGAyUA7Dt3jNCqFqMHI%2B7qdgOGhkiE3BZNjoQLSNE4EcnmGS1haOHyUnhi92cMXpwOs0RJh2ga4CAnn1tAOKD3ES3RjfDYafuBOGeLOTy91JXMsr0xG0i%2Bq9P5XFXi91das4kxTGk%2FDtShsrfK7iWTc9WLD0fLylNaC61ypCd96%2B5fxvrXi%2BGnFizcR91g0xTysdiTfQuACc3J5UyKulJQU0fOznYpvpAIIGOICfhESPfJJWY2OG%2FxbsoSX7LG0WhwPvIezuR2ozm%2BJB85YGYSsPdZyxwZ%2B%2B91E%2F%2Bz88sz0Q1byyirtmqqprhOKvkJf3BLqQjkv%2By8ApG0wFrYlFVqRAe2xjNSM6uk7Cj3VuV6%2Fn09cdyuguM9kaHObbHCxM8w%2BSzSRRYWtA7aO9t4eeNvCRk6%2Bdgcz0Vlceo2LmyJMNLCxr8GOqUBbl5T%2FtFxmm4aMZ8rQmDS7Oszdad2btsIBm%2BwV%2FZCMmhKpfx9aJEmqc%2Bkzlog32oZbBnEw%2FsfidcmwK122iQaUCFYpU%2BVAIA2qbd35W5189d%2FhVvRwojMZh78jwuqHs4Tzovy%2BSuDvLQuuo%2FPRfX8c%2FEUT%2BDQZNbE97bRJsha979cddVskQpNFM9e12bVRzkISnaVay66xKPNdvm1RaZzBx3rt544&X-Amz-Signature=ae1e9d72ac77d51f854ecba2fb30c1c42755e1cd58388e344c4612431672ca91&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
