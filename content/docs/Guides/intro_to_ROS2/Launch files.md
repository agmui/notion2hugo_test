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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5U7VAYT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrYCLD4c0yLK8ZT3HyaI88GUSqwPQaidk9sDQ1nw2goAIgBtkeuXgCs5%2F9yu%2FCacU02Yj3tC6h7rLLOI5N8LGOsfEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIwh7ltbOTDhv%2BsiGyrcA%2BeodD%2FG%2FemWrxXmGiovZs0Fe3ybcEt%2F7NQqf9SHovl0XHnNgNQ2enodC%2Fy6eVIKvekE4t4zx8sr6dMBNbcFdvkiTWomWQB1xyYPGmGD9W1H7G7FAH8dIonHJCZioJmCBTb%2FidUs%2FhUNmVLXxvLUOwUA066gapdJa5ItbiBqWNuJ2oowTT4B4DAx22oDpvCFL%2F8TECNPSJVWLNGlQrGH4AlZgeHNZhk1uLj%2FoaPUc2IzzGxoSlT%2BjKeTAboDpq4r2XJTXXqbUKI3xZgkMc1CzRdqs9B1G534%2FE8ADigSA3PjGoou3zDRvycmJlZB2oJCEeTesGvFMr1b7JIFeKkDXRJe5xjC5Lw2SH0frzVruTN%2BfqPoWONzfTbdoLZ45aDIzGw3u2%2B6YXPNX1hXs2hY%2FgbMM9dSFBYkm1TlErlwjzLjInRlxjFikwco6iGHaCvF7NfNptN%2B9xvfUGNUmKhsHq7tyrnYsVZjs0qCln1nYx5qFUhABfMmmQu0M4vptblpylSvHfIaxTzqM2sQuYUci7ZC%2Bfb67LEIX9BItocCyb%2FsWhOVYgKmzK3LCpnuPyoEOqWOvlF8IMnOJnT%2BVmhiL6CVT7n%2Fp3p9FedoLa0uMK7rUz1eMtZIOxnOMlOPMNa%2FyL8GOqUB1j9oDdld7yISgpHHUikSnt0MZuHAfsqADZj4gC7xr6wENpyaJR5xKEVGR3Lst%2BvWcEb1R3HCC1c4Wyf1U3LjiCk%2FywSHE5iCHIL%2BlbVmVeG%2BZaPyJA5ohdT%2BIb3ONh6o2yf%2F7tGdkeW6iL9pSPfM2gL%2F%2FUb3lYZjxIy%2Fhp37zpKW8LcUnZp9bV4a3mTdjssssfOqW5BKELmjX2UBfr0mm2xyQKwW&X-Amz-Signature=8dd8f6806a0985d3af3c8c029a603fc195a6f91824d4bdc824549a7bffff3618&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5U7VAYT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrYCLD4c0yLK8ZT3HyaI88GUSqwPQaidk9sDQ1nw2goAIgBtkeuXgCs5%2F9yu%2FCacU02Yj3tC6h7rLLOI5N8LGOsfEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIwh7ltbOTDhv%2BsiGyrcA%2BeodD%2FG%2FemWrxXmGiovZs0Fe3ybcEt%2F7NQqf9SHovl0XHnNgNQ2enodC%2Fy6eVIKvekE4t4zx8sr6dMBNbcFdvkiTWomWQB1xyYPGmGD9W1H7G7FAH8dIonHJCZioJmCBTb%2FidUs%2FhUNmVLXxvLUOwUA066gapdJa5ItbiBqWNuJ2oowTT4B4DAx22oDpvCFL%2F8TECNPSJVWLNGlQrGH4AlZgeHNZhk1uLj%2FoaPUc2IzzGxoSlT%2BjKeTAboDpq4r2XJTXXqbUKI3xZgkMc1CzRdqs9B1G534%2FE8ADigSA3PjGoou3zDRvycmJlZB2oJCEeTesGvFMr1b7JIFeKkDXRJe5xjC5Lw2SH0frzVruTN%2BfqPoWONzfTbdoLZ45aDIzGw3u2%2B6YXPNX1hXs2hY%2FgbMM9dSFBYkm1TlErlwjzLjInRlxjFikwco6iGHaCvF7NfNptN%2B9xvfUGNUmKhsHq7tyrnYsVZjs0qCln1nYx5qFUhABfMmmQu0M4vptblpylSvHfIaxTzqM2sQuYUci7ZC%2Bfb67LEIX9BItocCyb%2FsWhOVYgKmzK3LCpnuPyoEOqWOvlF8IMnOJnT%2BVmhiL6CVT7n%2Fp3p9FedoLa0uMK7rUz1eMtZIOxnOMlOPMNa%2FyL8GOqUB1j9oDdld7yISgpHHUikSnt0MZuHAfsqADZj4gC7xr6wENpyaJR5xKEVGR3Lst%2BvWcEb1R3HCC1c4Wyf1U3LjiCk%2FywSHE5iCHIL%2BlbVmVeG%2BZaPyJA5ohdT%2BIb3ONh6o2yf%2F7tGdkeW6iL9pSPfM2gL%2F%2FUb3lYZjxIy%2Fhp37zpKW8LcUnZp9bV4a3mTdjssssfOqW5BKELmjX2UBfr0mm2xyQKwW&X-Amz-Signature=06e99afb30e466d812a67fc56d310ca9d39ca9405dcdb5397f40ae63811bfecb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5U7VAYT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrYCLD4c0yLK8ZT3HyaI88GUSqwPQaidk9sDQ1nw2goAIgBtkeuXgCs5%2F9yu%2FCacU02Yj3tC6h7rLLOI5N8LGOsfEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIwh7ltbOTDhv%2BsiGyrcA%2BeodD%2FG%2FemWrxXmGiovZs0Fe3ybcEt%2F7NQqf9SHovl0XHnNgNQ2enodC%2Fy6eVIKvekE4t4zx8sr6dMBNbcFdvkiTWomWQB1xyYPGmGD9W1H7G7FAH8dIonHJCZioJmCBTb%2FidUs%2FhUNmVLXxvLUOwUA066gapdJa5ItbiBqWNuJ2oowTT4B4DAx22oDpvCFL%2F8TECNPSJVWLNGlQrGH4AlZgeHNZhk1uLj%2FoaPUc2IzzGxoSlT%2BjKeTAboDpq4r2XJTXXqbUKI3xZgkMc1CzRdqs9B1G534%2FE8ADigSA3PjGoou3zDRvycmJlZB2oJCEeTesGvFMr1b7JIFeKkDXRJe5xjC5Lw2SH0frzVruTN%2BfqPoWONzfTbdoLZ45aDIzGw3u2%2B6YXPNX1hXs2hY%2FgbMM9dSFBYkm1TlErlwjzLjInRlxjFikwco6iGHaCvF7NfNptN%2B9xvfUGNUmKhsHq7tyrnYsVZjs0qCln1nYx5qFUhABfMmmQu0M4vptblpylSvHfIaxTzqM2sQuYUci7ZC%2Bfb67LEIX9BItocCyb%2FsWhOVYgKmzK3LCpnuPyoEOqWOvlF8IMnOJnT%2BVmhiL6CVT7n%2Fp3p9FedoLa0uMK7rUz1eMtZIOxnOMlOPMNa%2FyL8GOqUB1j9oDdld7yISgpHHUikSnt0MZuHAfsqADZj4gC7xr6wENpyaJR5xKEVGR3Lst%2BvWcEb1R3HCC1c4Wyf1U3LjiCk%2FywSHE5iCHIL%2BlbVmVeG%2BZaPyJA5ohdT%2BIb3ONh6o2yf%2F7tGdkeW6iL9pSPfM2gL%2F%2FUb3lYZjxIy%2Fhp37zpKW8LcUnZp9bV4a3mTdjssssfOqW5BKELmjX2UBfr0mm2xyQKwW&X-Amz-Signature=21332f2dd5aec30769eb024be49f7b787f32f4b74d6cb5164fd869ffbf80617f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
