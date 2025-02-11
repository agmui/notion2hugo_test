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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4BHN34%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaq5j7CVlCA9MDo6XftNWUJDy4RKCfmNuNMBSlWcDVhAiEA33eVxpbXlI%2FrQ6HXpzDmuFk186on2UumqsBr%2FRc4RbQqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFDwjXboWoyupmmlSrcA7VaKDZFuXXqQI31SxFuKo6LivYfpVPeoDroQdbdgnHI49DTVKwwgS%2Bobn1X3UBVY9F20uGQpaiV9i12z4Y5OLw03nmoWY2kvcHR4GLoju7X23BLnN%2FKUADfrMvGJCqNt1mrqCw%2BZfu6k6KxtIX3CiWc0Ym5H6PfrNZkoYMEcc2iLRQscJlUDOaVLdjHFjPYI5EQm3qVrh0c5WPyLd49MD8u42KXTrzTXO24Zwh83V4Ls84I92B3qWWZoJLIH2ciYiitYByzsiyhMTyLm4LI9oZUhKa8H9xao4IaPAbOPKfpFg%2FFwCurKfc4bxdcgsFZv69lf8Ncw%2Fcb9FfkqWuGvANtgTpnAgSGiufaj25G1uq38MV7GW0Hh%2FDqNuUvFzJPC0j2ALRF5uunHI6GZEaVXxnxiCg8JIbkQEL37IY7c880c0HCTYkkZnXakacJMBpSFBhbfyI6ec1N%2FGfTI3L3DOvtaT5GuSqO7DIoMrnmKdVQAsILwAmTPixU3c0Ar4pERtex0tY09ylAV7nxn2fj5XIa9%2Bg%2FzldVq4SvskOft2vx0KMXm6GYl%2FHjECdL%2FeoN2Q3hwGvJo%2BzggnQkdpyNlfEfrmysf3zjtQtyoz2pjc97dY0gyiYQWTIAniesMJe0qr0GOqUBiR8bdUSipIoM4%2BFcY3d%2Fp%2BStu6Dg%2FYaZ3Ax61MQMglJBmtu9rXhKDcx%2FTQJkf3QpAbdSPU9kZMzbieUikuk3YLtVqxY%2FMQ0ZX50yO64etDAkfGlUJxdcb176tLCvFOg1ZOCyCuUEecyDX2lDpEfYByi%2Bj%2Bj6Cl2UN%2Bm5VvWiGj5JhcI5KgIDd9NErjByj4iZb27ucg9dix5zD0oMNQ8gtem46KZH&X-Amz-Signature=976ad9ede489993cb182254ae89eb49d53a4773768031183cc1faf0b88fa6f88&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4BHN34%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaq5j7CVlCA9MDo6XftNWUJDy4RKCfmNuNMBSlWcDVhAiEA33eVxpbXlI%2FrQ6HXpzDmuFk186on2UumqsBr%2FRc4RbQqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFDwjXboWoyupmmlSrcA7VaKDZFuXXqQI31SxFuKo6LivYfpVPeoDroQdbdgnHI49DTVKwwgS%2Bobn1X3UBVY9F20uGQpaiV9i12z4Y5OLw03nmoWY2kvcHR4GLoju7X23BLnN%2FKUADfrMvGJCqNt1mrqCw%2BZfu6k6KxtIX3CiWc0Ym5H6PfrNZkoYMEcc2iLRQscJlUDOaVLdjHFjPYI5EQm3qVrh0c5WPyLd49MD8u42KXTrzTXO24Zwh83V4Ls84I92B3qWWZoJLIH2ciYiitYByzsiyhMTyLm4LI9oZUhKa8H9xao4IaPAbOPKfpFg%2FFwCurKfc4bxdcgsFZv69lf8Ncw%2Fcb9FfkqWuGvANtgTpnAgSGiufaj25G1uq38MV7GW0Hh%2FDqNuUvFzJPC0j2ALRF5uunHI6GZEaVXxnxiCg8JIbkQEL37IY7c880c0HCTYkkZnXakacJMBpSFBhbfyI6ec1N%2FGfTI3L3DOvtaT5GuSqO7DIoMrnmKdVQAsILwAmTPixU3c0Ar4pERtex0tY09ylAV7nxn2fj5XIa9%2Bg%2FzldVq4SvskOft2vx0KMXm6GYl%2FHjECdL%2FeoN2Q3hwGvJo%2BzggnQkdpyNlfEfrmysf3zjtQtyoz2pjc97dY0gyiYQWTIAniesMJe0qr0GOqUBiR8bdUSipIoM4%2BFcY3d%2Fp%2BStu6Dg%2FYaZ3Ax61MQMglJBmtu9rXhKDcx%2FTQJkf3QpAbdSPU9kZMzbieUikuk3YLtVqxY%2FMQ0ZX50yO64etDAkfGlUJxdcb176tLCvFOg1ZOCyCuUEecyDX2lDpEfYByi%2Bj%2Bj6Cl2UN%2Bm5VvWiGj5JhcI5KgIDd9NErjByj4iZb27ucg9dix5zD0oMNQ8gtem46KZH&X-Amz-Signature=dcb736105fc820572fa7392c334b0076cd9d89f153260871d255411dbde32475&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4BHN34%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaq5j7CVlCA9MDo6XftNWUJDy4RKCfmNuNMBSlWcDVhAiEA33eVxpbXlI%2FrQ6HXpzDmuFk186on2UumqsBr%2FRc4RbQqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFDwjXboWoyupmmlSrcA7VaKDZFuXXqQI31SxFuKo6LivYfpVPeoDroQdbdgnHI49DTVKwwgS%2Bobn1X3UBVY9F20uGQpaiV9i12z4Y5OLw03nmoWY2kvcHR4GLoju7X23BLnN%2FKUADfrMvGJCqNt1mrqCw%2BZfu6k6KxtIX3CiWc0Ym5H6PfrNZkoYMEcc2iLRQscJlUDOaVLdjHFjPYI5EQm3qVrh0c5WPyLd49MD8u42KXTrzTXO24Zwh83V4Ls84I92B3qWWZoJLIH2ciYiitYByzsiyhMTyLm4LI9oZUhKa8H9xao4IaPAbOPKfpFg%2FFwCurKfc4bxdcgsFZv69lf8Ncw%2Fcb9FfkqWuGvANtgTpnAgSGiufaj25G1uq38MV7GW0Hh%2FDqNuUvFzJPC0j2ALRF5uunHI6GZEaVXxnxiCg8JIbkQEL37IY7c880c0HCTYkkZnXakacJMBpSFBhbfyI6ec1N%2FGfTI3L3DOvtaT5GuSqO7DIoMrnmKdVQAsILwAmTPixU3c0Ar4pERtex0tY09ylAV7nxn2fj5XIa9%2Bg%2FzldVq4SvskOft2vx0KMXm6GYl%2FHjECdL%2FeoN2Q3hwGvJo%2BzggnQkdpyNlfEfrmysf3zjtQtyoz2pjc97dY0gyiYQWTIAniesMJe0qr0GOqUBiR8bdUSipIoM4%2BFcY3d%2Fp%2BStu6Dg%2FYaZ3Ax61MQMglJBmtu9rXhKDcx%2FTQJkf3QpAbdSPU9kZMzbieUikuk3YLtVqxY%2FMQ0ZX50yO64etDAkfGlUJxdcb176tLCvFOg1ZOCyCuUEecyDX2lDpEfYByi%2Bj%2Bj6Cl2UN%2Bm5VvWiGj5JhcI5KgIDd9NErjByj4iZb27ucg9dix5zD0oMNQ8gtem46KZH&X-Amz-Signature=7b33b5701be0e92280e9d7ce406e269e9504ddfedc1167b185f3bf308478b176&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
