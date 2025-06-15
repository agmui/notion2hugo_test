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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCMXN6L%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIAMNEwHtFyUZ1MlQXfTVVQsSKNvXQf3lRfzPQDEz3xdYAiEAog3%2FSDCczId5I1ii0dFbbtFL1G3ZHYDO7iEO8iNdE7Eq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDD6W0ETMjGL5dY%2FUSircA7%2B5jysHpDoajHwE0zlMoQiIEutziDXVavF2GxD3hlWh%2BzexuBt4zkCOZ3D1BKwS5EnrYdFLOP6vwBGpVWao55gtqnZ1%2BJqvB1JwHsc2dbVQeYo%2BmEmFhZDJ3FYyV77KynU9aHVoKzfmJioUF%2FYHURqgsXNUIxpABuvx%2BOrdILOE%2F3dAdLMYB4pzJjxugqi0mgzFhBBicWfW0c8k10BdBS7nvv%2BJMgvBgWKWMRFqF18aRMiTU0AIjhExZ1vAwWiD0DU8I%2FJQh6Zv4SjQK4awgtpYbcfYEuadKX%2Bs8jqf20GLp2T51%2BQm8nGDBxM8hpM7HwMy2UgtukTfL5tMKvD79WTlRzkMsALkJQBXQkG22oUHyMG89FjUefDDIYteWx3heGwIqvBKNyVdtxw3Epg5FFMBkAFxwsjixoOCtYXpKqPhEMVkwjm0gfYBftt7noYl8G9X5fi96PvZRVKrqciW9YSa9OkEVl6ObNp6vVSGk30o1E%2Fxm%2B1ZEMHKz9ehKi4Dyh4V80%2FIWOl5HXMwSdtzG5cHzkED9u1wEmyn%2Bo1YxuKi9f4ZgxOy1pd6RtlshoT6UCFmVFZ64o3UTMdENzpUD95BgDtNFI6qVZhT6%2BhDJO9gZTIOOUWmB%2BCNqlYOMPysucIGOqUB7MXSXOxAzKG6nht5bW3wIDTV8nL2dPhJIhXuCnmr4x8lx4BhiGa40JcYYuyWgKQw63djT1GlekFwbUX%2FExFtNSGAyAzlE%2Buu6B7po06qO3hQHyccUa%2FkvWLj7bky2ZawGIFrFR8HEsUhaL73Oku1WOdoBSAW2IyOiwri0SADDlgkzODjRAEc9pbTpHLUcq9bKpvUnorc0xV0w10SoV9VM%2FlROtHX&X-Amz-Signature=b2237664314dd4b37fd440d90358c2b806848a428ab261de4ad1e6987d2b63af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCMXN6L%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIAMNEwHtFyUZ1MlQXfTVVQsSKNvXQf3lRfzPQDEz3xdYAiEAog3%2FSDCczId5I1ii0dFbbtFL1G3ZHYDO7iEO8iNdE7Eq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDD6W0ETMjGL5dY%2FUSircA7%2B5jysHpDoajHwE0zlMoQiIEutziDXVavF2GxD3hlWh%2BzexuBt4zkCOZ3D1BKwS5EnrYdFLOP6vwBGpVWao55gtqnZ1%2BJqvB1JwHsc2dbVQeYo%2BmEmFhZDJ3FYyV77KynU9aHVoKzfmJioUF%2FYHURqgsXNUIxpABuvx%2BOrdILOE%2F3dAdLMYB4pzJjxugqi0mgzFhBBicWfW0c8k10BdBS7nvv%2BJMgvBgWKWMRFqF18aRMiTU0AIjhExZ1vAwWiD0DU8I%2FJQh6Zv4SjQK4awgtpYbcfYEuadKX%2Bs8jqf20GLp2T51%2BQm8nGDBxM8hpM7HwMy2UgtukTfL5tMKvD79WTlRzkMsALkJQBXQkG22oUHyMG89FjUefDDIYteWx3heGwIqvBKNyVdtxw3Epg5FFMBkAFxwsjixoOCtYXpKqPhEMVkwjm0gfYBftt7noYl8G9X5fi96PvZRVKrqciW9YSa9OkEVl6ObNp6vVSGk30o1E%2Fxm%2B1ZEMHKz9ehKi4Dyh4V80%2FIWOl5HXMwSdtzG5cHzkED9u1wEmyn%2Bo1YxuKi9f4ZgxOy1pd6RtlshoT6UCFmVFZ64o3UTMdENzpUD95BgDtNFI6qVZhT6%2BhDJO9gZTIOOUWmB%2BCNqlYOMPysucIGOqUB7MXSXOxAzKG6nht5bW3wIDTV8nL2dPhJIhXuCnmr4x8lx4BhiGa40JcYYuyWgKQw63djT1GlekFwbUX%2FExFtNSGAyAzlE%2Buu6B7po06qO3hQHyccUa%2FkvWLj7bky2ZawGIFrFR8HEsUhaL73Oku1WOdoBSAW2IyOiwri0SADDlgkzODjRAEc9pbTpHLUcq9bKpvUnorc0xV0w10SoV9VM%2FlROtHX&X-Amz-Signature=c1a3b90e42b15863dcdeaac75f9b73e7e1ace4e65a1535ed9354afab20dd1ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCMXN6L%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIAMNEwHtFyUZ1MlQXfTVVQsSKNvXQf3lRfzPQDEz3xdYAiEAog3%2FSDCczId5I1ii0dFbbtFL1G3ZHYDO7iEO8iNdE7Eq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDD6W0ETMjGL5dY%2FUSircA7%2B5jysHpDoajHwE0zlMoQiIEutziDXVavF2GxD3hlWh%2BzexuBt4zkCOZ3D1BKwS5EnrYdFLOP6vwBGpVWao55gtqnZ1%2BJqvB1JwHsc2dbVQeYo%2BmEmFhZDJ3FYyV77KynU9aHVoKzfmJioUF%2FYHURqgsXNUIxpABuvx%2BOrdILOE%2F3dAdLMYB4pzJjxugqi0mgzFhBBicWfW0c8k10BdBS7nvv%2BJMgvBgWKWMRFqF18aRMiTU0AIjhExZ1vAwWiD0DU8I%2FJQh6Zv4SjQK4awgtpYbcfYEuadKX%2Bs8jqf20GLp2T51%2BQm8nGDBxM8hpM7HwMy2UgtukTfL5tMKvD79WTlRzkMsALkJQBXQkG22oUHyMG89FjUefDDIYteWx3heGwIqvBKNyVdtxw3Epg5FFMBkAFxwsjixoOCtYXpKqPhEMVkwjm0gfYBftt7noYl8G9X5fi96PvZRVKrqciW9YSa9OkEVl6ObNp6vVSGk30o1E%2Fxm%2B1ZEMHKz9ehKi4Dyh4V80%2FIWOl5HXMwSdtzG5cHzkED9u1wEmyn%2Bo1YxuKi9f4ZgxOy1pd6RtlshoT6UCFmVFZ64o3UTMdENzpUD95BgDtNFI6qVZhT6%2BhDJO9gZTIOOUWmB%2BCNqlYOMPysucIGOqUB7MXSXOxAzKG6nht5bW3wIDTV8nL2dPhJIhXuCnmr4x8lx4BhiGa40JcYYuyWgKQw63djT1GlekFwbUX%2FExFtNSGAyAzlE%2Buu6B7po06qO3hQHyccUa%2FkvWLj7bky2ZawGIFrFR8HEsUhaL73Oku1WOdoBSAW2IyOiwri0SADDlgkzODjRAEc9pbTpHLUcq9bKpvUnorc0xV0w10SoV9VM%2FlROtHX&X-Amz-Signature=76832055bc6ef8e05c4fad548aef21bb00863f4ac173f1a5e68c6e2d0aec0c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
