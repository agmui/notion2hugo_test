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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADWR57S%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB3h5eDCN4ftZ38oMBY6xcBc%2Bd8Q8SOOhMg%2F%2BklLSSzAiBcBj5C0EVc1nfKRBCrKm%2BDlQN%2FuWU4HAxM7%2BgI2HnQ7iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMejR8va8BJrHmwxspKtwDLeEHPnvWw8mUixBiVKLhjg8XKSoKD7vua5R974xUNzRtiIP%2BlgUrWqyCpzjP6JnM7Hs4xbOg02mkgMNWrzcFP2LwK%2BaB8pX7slJ%2BJiUQ0%2Fy0kcMO%2BVj9K9i4F%2FLKbQV60b6cdZqKqxclu%2FzErY5j5LwwDtq2GZ%2FIbK0lhk5lapqESQqOfeNBitKrvpGZU4u7WVz%2F0HwLM9HgrGUhjBqXU7Lufg8N1hgd%2BDPa3eaf9gvI0xkicF3NeURsfuPYbBJr09x%2FO%2FXFxX4wkmKbqFfGADVojpbRlOmLIlpTMzuXFAj4BzreNVw9vi39p2RAhf86tQ1C0qkjt0Teqb6N%2FTVZK9E5kjqjkj2QKTyiXxBQo4AKbxRI109X1VdjlzyGDSpdzcLkoDMVakYkqibB4gWzUUNzQxMHPvk3MBp%2FC34B36tTaFpbNOU7GGZTKjc89WVt4Sks050%2FPVZ08C%2B6khSrZpSBOLMhqXMAEn3CJ0Gwg1JRR0VsZMtiFTmk6R340Z1%2BrbTT%2Bd%2Fp%2BRNr3DHFayI29DKrXWWNAbvH6pw5lfL%2Fwa106jka8y%2BAWQgZsSMAvaNfXD1nL5g2FRVnpypEKUgKMdXV%2FlIb1o2SgtKfJ8GDFn3LqrlhMTmPSnwZwDIwxI7mwQY6pgFsMVz6HSxuMvO3JlzeYhvsLToLskoZEBhRLXVmmibJA5Xw9Ut%2FmxLI48utE4Cq8nQmoDGMfSD5AjBcfKzCQjVGv5resAhaoqHQF%2BBUS3PJC4YaBmMudnPEXZoEMSyP%2BWUKkNkWXo6SzTJI9QhG58cxpStWRK7E5zuzYhiAJmsEa%2FRDFizhJy7nNv%2Bh46GhrtEOxFIyF9F%2FHu7GSnX76RQd2JY%2FpiNM&X-Amz-Signature=438fdeecc7e0bea1c3c6c75bdb208501f5ba71b2fa09b8b2f642962a7547d970&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADWR57S%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB3h5eDCN4ftZ38oMBY6xcBc%2Bd8Q8SOOhMg%2F%2BklLSSzAiBcBj5C0EVc1nfKRBCrKm%2BDlQN%2FuWU4HAxM7%2BgI2HnQ7iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMejR8va8BJrHmwxspKtwDLeEHPnvWw8mUixBiVKLhjg8XKSoKD7vua5R974xUNzRtiIP%2BlgUrWqyCpzjP6JnM7Hs4xbOg02mkgMNWrzcFP2LwK%2BaB8pX7slJ%2BJiUQ0%2Fy0kcMO%2BVj9K9i4F%2FLKbQV60b6cdZqKqxclu%2FzErY5j5LwwDtq2GZ%2FIbK0lhk5lapqESQqOfeNBitKrvpGZU4u7WVz%2F0HwLM9HgrGUhjBqXU7Lufg8N1hgd%2BDPa3eaf9gvI0xkicF3NeURsfuPYbBJr09x%2FO%2FXFxX4wkmKbqFfGADVojpbRlOmLIlpTMzuXFAj4BzreNVw9vi39p2RAhf86tQ1C0qkjt0Teqb6N%2FTVZK9E5kjqjkj2QKTyiXxBQo4AKbxRI109X1VdjlzyGDSpdzcLkoDMVakYkqibB4gWzUUNzQxMHPvk3MBp%2FC34B36tTaFpbNOU7GGZTKjc89WVt4Sks050%2FPVZ08C%2B6khSrZpSBOLMhqXMAEn3CJ0Gwg1JRR0VsZMtiFTmk6R340Z1%2BrbTT%2Bd%2Fp%2BRNr3DHFayI29DKrXWWNAbvH6pw5lfL%2Fwa106jka8y%2BAWQgZsSMAvaNfXD1nL5g2FRVnpypEKUgKMdXV%2FlIb1o2SgtKfJ8GDFn3LqrlhMTmPSnwZwDIwxI7mwQY6pgFsMVz6HSxuMvO3JlzeYhvsLToLskoZEBhRLXVmmibJA5Xw9Ut%2FmxLI48utE4Cq8nQmoDGMfSD5AjBcfKzCQjVGv5resAhaoqHQF%2BBUS3PJC4YaBmMudnPEXZoEMSyP%2BWUKkNkWXo6SzTJI9QhG58cxpStWRK7E5zuzYhiAJmsEa%2FRDFizhJy7nNv%2Bh46GhrtEOxFIyF9F%2FHu7GSnX76RQd2JY%2FpiNM&X-Amz-Signature=ec0cafe54b2853ba0901a787bb89362efeb6ba08006a729a764f5b9227847cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADWR57S%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB3h5eDCN4ftZ38oMBY6xcBc%2Bd8Q8SOOhMg%2F%2BklLSSzAiBcBj5C0EVc1nfKRBCrKm%2BDlQN%2FuWU4HAxM7%2BgI2HnQ7iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMejR8va8BJrHmwxspKtwDLeEHPnvWw8mUixBiVKLhjg8XKSoKD7vua5R974xUNzRtiIP%2BlgUrWqyCpzjP6JnM7Hs4xbOg02mkgMNWrzcFP2LwK%2BaB8pX7slJ%2BJiUQ0%2Fy0kcMO%2BVj9K9i4F%2FLKbQV60b6cdZqKqxclu%2FzErY5j5LwwDtq2GZ%2FIbK0lhk5lapqESQqOfeNBitKrvpGZU4u7WVz%2F0HwLM9HgrGUhjBqXU7Lufg8N1hgd%2BDPa3eaf9gvI0xkicF3NeURsfuPYbBJr09x%2FO%2FXFxX4wkmKbqFfGADVojpbRlOmLIlpTMzuXFAj4BzreNVw9vi39p2RAhf86tQ1C0qkjt0Teqb6N%2FTVZK9E5kjqjkj2QKTyiXxBQo4AKbxRI109X1VdjlzyGDSpdzcLkoDMVakYkqibB4gWzUUNzQxMHPvk3MBp%2FC34B36tTaFpbNOU7GGZTKjc89WVt4Sks050%2FPVZ08C%2B6khSrZpSBOLMhqXMAEn3CJ0Gwg1JRR0VsZMtiFTmk6R340Z1%2BrbTT%2Bd%2Fp%2BRNr3DHFayI29DKrXWWNAbvH6pw5lfL%2Fwa106jka8y%2BAWQgZsSMAvaNfXD1nL5g2FRVnpypEKUgKMdXV%2FlIb1o2SgtKfJ8GDFn3LqrlhMTmPSnwZwDIwxI7mwQY6pgFsMVz6HSxuMvO3JlzeYhvsLToLskoZEBhRLXVmmibJA5Xw9Ut%2FmxLI48utE4Cq8nQmoDGMfSD5AjBcfKzCQjVGv5resAhaoqHQF%2BBUS3PJC4YaBmMudnPEXZoEMSyP%2BWUKkNkWXo6SzTJI9QhG58cxpStWRK7E5zuzYhiAJmsEa%2FRDFizhJy7nNv%2Bh46GhrtEOxFIyF9F%2FHu7GSnX76RQd2JY%2FpiNM&X-Amz-Signature=e63227b1ca6469eb8b90c8c4d4b23519a35756ec0074182b62fd321af0648f7a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
