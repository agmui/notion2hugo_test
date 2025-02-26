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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOFX2INI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDViQAyB70xbJkMXaNDt25GkPDhs3r53hs68yUgeB9zLgIhALnups8uaD0relnt0JpC2OeHHxRh7yIMFvb5wAOXrA%2BeKv8DCF0QABoMNjM3NDIzMTgzODA1IgxKl9QoMVrhtrG%2B67sq3AOKVBLuTIOhatoFOg6RNDu9QT8zTb3FLPAVDv6rbxDeMgh%2B2t1uWPrTGwXdhjvFvqGME8VKo%2Fkd8zmyg7y0bMfIZcC0DaWrG8eJOSVQYettpc6tt%2F7cQwE8NUa7yzS5BvXFbIEFx3Pbco5YASIFqkcyb428JCJtvYWy8vF8lIOV4TB2JjJbSHd%2BuvD5PEMAT4PBoifR%2F%2FTCEYTEW476PfcM%2Bjo21w6xRNAV1OVzZLaQLoaa5W2M77VjEkkMhFj%2B3j8WJM0q0FHsgHU1NOGWu9zVHb9qHTExXZTTNLSwfMJ0Ca30aPWPdBaQWRskfQA0VN4Mhlx6ZaQjctIhh8vi6CTkCLrKIP%2FtwNagd2refvDNY%2FvDYdXT%2B08Dzc8cCbzGcKtipCtkRASXh5dptxd0%2FUivsP36SzrtdFdaGf07DihAgv7N%2B9o9dNcOy0VA7DCwAypkbLFA7f5DMBK5hDw%2BGgMC6552ss3MXhSxhEUJqdWeSrtHvaPasNOyMmqqn%2F4ILAlsUnom8KBqwsKyINSYYkssyTpROpWPO%2FT6iiM10rsuyuE2GhthHNr5l4T6%2B%2FImWKIlhCPyNfvJF%2BB5DnqigI4A6I58VDV2SKy6Tw4VDfY3iS6IgwqHj%2F4KXe6zCTDLiPy9BjqkAWz3z%2Bs2Pg9iWLaQQorlAohtdGWY%2FnLay4e5DGJbtR6molezIu2qC%2Bvqr2gvS5LGH%2FmGHpIcw8XSIE%2BfkNmOeSUvlSyGc4%2Fyl1%2Fq8DAXAPfg1%2FdxKWrNGGoo44P0G2lBlqhf2HBSoAjE0z8LqiHRFCCF2Kw28KxhCYo3%2FLjQ23aRmtS28F0PjBGeZTceLpydW5MFCu7nfaIrgEVQrHcqk4RPzONb&X-Amz-Signature=18c0026a0a3584987db4bcdfa5c85fbc5a86a5616f9eb6f972440c4975879366&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOFX2INI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDViQAyB70xbJkMXaNDt25GkPDhs3r53hs68yUgeB9zLgIhALnups8uaD0relnt0JpC2OeHHxRh7yIMFvb5wAOXrA%2BeKv8DCF0QABoMNjM3NDIzMTgzODA1IgxKl9QoMVrhtrG%2B67sq3AOKVBLuTIOhatoFOg6RNDu9QT8zTb3FLPAVDv6rbxDeMgh%2B2t1uWPrTGwXdhjvFvqGME8VKo%2Fkd8zmyg7y0bMfIZcC0DaWrG8eJOSVQYettpc6tt%2F7cQwE8NUa7yzS5BvXFbIEFx3Pbco5YASIFqkcyb428JCJtvYWy8vF8lIOV4TB2JjJbSHd%2BuvD5PEMAT4PBoifR%2F%2FTCEYTEW476PfcM%2Bjo21w6xRNAV1OVzZLaQLoaa5W2M77VjEkkMhFj%2B3j8WJM0q0FHsgHU1NOGWu9zVHb9qHTExXZTTNLSwfMJ0Ca30aPWPdBaQWRskfQA0VN4Mhlx6ZaQjctIhh8vi6CTkCLrKIP%2FtwNagd2refvDNY%2FvDYdXT%2B08Dzc8cCbzGcKtipCtkRASXh5dptxd0%2FUivsP36SzrtdFdaGf07DihAgv7N%2B9o9dNcOy0VA7DCwAypkbLFA7f5DMBK5hDw%2BGgMC6552ss3MXhSxhEUJqdWeSrtHvaPasNOyMmqqn%2F4ILAlsUnom8KBqwsKyINSYYkssyTpROpWPO%2FT6iiM10rsuyuE2GhthHNr5l4T6%2B%2FImWKIlhCPyNfvJF%2BB5DnqigI4A6I58VDV2SKy6Tw4VDfY3iS6IgwqHj%2F4KXe6zCTDLiPy9BjqkAWz3z%2Bs2Pg9iWLaQQorlAohtdGWY%2FnLay4e5DGJbtR6molezIu2qC%2Bvqr2gvS5LGH%2FmGHpIcw8XSIE%2BfkNmOeSUvlSyGc4%2Fyl1%2Fq8DAXAPfg1%2FdxKWrNGGoo44P0G2lBlqhf2HBSoAjE0z8LqiHRFCCF2Kw28KxhCYo3%2FLjQ23aRmtS28F0PjBGeZTceLpydW5MFCu7nfaIrgEVQrHcqk4RPzONb&X-Amz-Signature=4f0f8a525195e988135078a2fbafdb9df86c64e9e27b8f9ebae1b6e57f820f09&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOFX2INI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDViQAyB70xbJkMXaNDt25GkPDhs3r53hs68yUgeB9zLgIhALnups8uaD0relnt0JpC2OeHHxRh7yIMFvb5wAOXrA%2BeKv8DCF0QABoMNjM3NDIzMTgzODA1IgxKl9QoMVrhtrG%2B67sq3AOKVBLuTIOhatoFOg6RNDu9QT8zTb3FLPAVDv6rbxDeMgh%2B2t1uWPrTGwXdhjvFvqGME8VKo%2Fkd8zmyg7y0bMfIZcC0DaWrG8eJOSVQYettpc6tt%2F7cQwE8NUa7yzS5BvXFbIEFx3Pbco5YASIFqkcyb428JCJtvYWy8vF8lIOV4TB2JjJbSHd%2BuvD5PEMAT4PBoifR%2F%2FTCEYTEW476PfcM%2Bjo21w6xRNAV1OVzZLaQLoaa5W2M77VjEkkMhFj%2B3j8WJM0q0FHsgHU1NOGWu9zVHb9qHTExXZTTNLSwfMJ0Ca30aPWPdBaQWRskfQA0VN4Mhlx6ZaQjctIhh8vi6CTkCLrKIP%2FtwNagd2refvDNY%2FvDYdXT%2B08Dzc8cCbzGcKtipCtkRASXh5dptxd0%2FUivsP36SzrtdFdaGf07DihAgv7N%2B9o9dNcOy0VA7DCwAypkbLFA7f5DMBK5hDw%2BGgMC6552ss3MXhSxhEUJqdWeSrtHvaPasNOyMmqqn%2F4ILAlsUnom8KBqwsKyINSYYkssyTpROpWPO%2FT6iiM10rsuyuE2GhthHNr5l4T6%2B%2FImWKIlhCPyNfvJF%2BB5DnqigI4A6I58VDV2SKy6Tw4VDfY3iS6IgwqHj%2F4KXe6zCTDLiPy9BjqkAWz3z%2Bs2Pg9iWLaQQorlAohtdGWY%2FnLay4e5DGJbtR6molezIu2qC%2Bvqr2gvS5LGH%2FmGHpIcw8XSIE%2BfkNmOeSUvlSyGc4%2Fyl1%2Fq8DAXAPfg1%2FdxKWrNGGoo44P0G2lBlqhf2HBSoAjE0z8LqiHRFCCF2Kw28KxhCYo3%2FLjQ23aRmtS28F0PjBGeZTceLpydW5MFCu7nfaIrgEVQrHcqk4RPzONb&X-Amz-Signature=2ad03cdc446a2b664961ea17720c5435d7dfad62665b884fd6f3a9479a7c9f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
