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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFDO6ZVS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAbbidb9RCs71DfufU1GwPYaulKCT6plHXCFJBNcqy7UAiAxoSpj95xABdPMKLAC6Pp6IfCz7Jne8FzoNKHwXMpz3ir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMCzcZ%2BzuZbjKKvTnWKtwDZzy8dfVocEnCTcjUnWUAeGMeVJpAXWWAVotrA86JaqYW%2BbDUT0GEnm8AZPnbjzDabj%2Ft2vjvDKlg5d7J%2BlnLiKClI%2F8EO36DAw6yHSTAj4mzQFD1baz3hrrL3K83xR7EGh2qNkCnuN9vLeTvtUNpyvnmYkqZggt9CQ%2F32Dauk8250M6PDZ7yO7Eh%2Bet23%2BRHTfnqP06pwt%2BzuErswPlANJsYXyosfN2FOrKJIvwY8uxoU2QtId1WIJ0GU1%2BP5Z83HUy3%2F1i%2FxjhXR3%2F5wqF6CfHoZ8TAkaltGCdqw2vydlCgkrm2aGfyD3gxxOQz5tLIjIDXtD2A%2BJYuu9phYs%2FNNpAVfBokbdAqXZFCPUdi9IJRZosuUJchIJDNDxGXcX3BONjxo63uslZFuCZtw1lLtbFw5k96aYHe6qAbElZILiehRzkUfw4t3STdOq5%2B%2BDxcd9%2B0XE1RO6R3vsVdRi9Q1RNYL2fc6EResU8uM1ja38rKMvIpnaL3yjBNmnoincb%2F%2FfKJPuKqJ8sDuGmVWVkZrFMEYL2ynIggaugh9CaFkJkuvNTxnusNhFlRxSZpx%2BmLTbM%2FQPoBJv4SPHaFjMcrC7pt2Vyw0rayPgvILjL5yNLUEt4TRru7shGDVLUwyvuSvQY6pgHGoYJr%2BMX2FZlsUa8amk1TnIjFX2b1Pyk35YSlxrf1%2F4VqANfkl0QVf8cDrenamnv%2FjTdMJX6HJEKIf1o2UIMW46FWzkAm1UU%2BLCepKLXwfDrcrd238zl2%2BeDEpHhId%2FUqZd9XcN2G84juNz36UQL921jKWJ1%2BoNg7oweMGI%2BBxmTbKpR9G3qzwpROyrzIBeu14vaIYow2oLsLeCekSCvldLUbWZ8D&X-Amz-Signature=4bcf560a524e489471b883013c9762e7b5f5aa57bc0e9c2dfb52610de6d452ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFDO6ZVS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAbbidb9RCs71DfufU1GwPYaulKCT6plHXCFJBNcqy7UAiAxoSpj95xABdPMKLAC6Pp6IfCz7Jne8FzoNKHwXMpz3ir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMCzcZ%2BzuZbjKKvTnWKtwDZzy8dfVocEnCTcjUnWUAeGMeVJpAXWWAVotrA86JaqYW%2BbDUT0GEnm8AZPnbjzDabj%2Ft2vjvDKlg5d7J%2BlnLiKClI%2F8EO36DAw6yHSTAj4mzQFD1baz3hrrL3K83xR7EGh2qNkCnuN9vLeTvtUNpyvnmYkqZggt9CQ%2F32Dauk8250M6PDZ7yO7Eh%2Bet23%2BRHTfnqP06pwt%2BzuErswPlANJsYXyosfN2FOrKJIvwY8uxoU2QtId1WIJ0GU1%2BP5Z83HUy3%2F1i%2FxjhXR3%2F5wqF6CfHoZ8TAkaltGCdqw2vydlCgkrm2aGfyD3gxxOQz5tLIjIDXtD2A%2BJYuu9phYs%2FNNpAVfBokbdAqXZFCPUdi9IJRZosuUJchIJDNDxGXcX3BONjxo63uslZFuCZtw1lLtbFw5k96aYHe6qAbElZILiehRzkUfw4t3STdOq5%2B%2BDxcd9%2B0XE1RO6R3vsVdRi9Q1RNYL2fc6EResU8uM1ja38rKMvIpnaL3yjBNmnoincb%2F%2FfKJPuKqJ8sDuGmVWVkZrFMEYL2ynIggaugh9CaFkJkuvNTxnusNhFlRxSZpx%2BmLTbM%2FQPoBJv4SPHaFjMcrC7pt2Vyw0rayPgvILjL5yNLUEt4TRru7shGDVLUwyvuSvQY6pgHGoYJr%2BMX2FZlsUa8amk1TnIjFX2b1Pyk35YSlxrf1%2F4VqANfkl0QVf8cDrenamnv%2FjTdMJX6HJEKIf1o2UIMW46FWzkAm1UU%2BLCepKLXwfDrcrd238zl2%2BeDEpHhId%2FUqZd9XcN2G84juNz36UQL921jKWJ1%2BoNg7oweMGI%2BBxmTbKpR9G3qzwpROyrzIBeu14vaIYow2oLsLeCekSCvldLUbWZ8D&X-Amz-Signature=89142690dd9a498077a4f3419846cb1c18307068d267a8446de340d92cff3fb0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFDO6ZVS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAbbidb9RCs71DfufU1GwPYaulKCT6plHXCFJBNcqy7UAiAxoSpj95xABdPMKLAC6Pp6IfCz7Jne8FzoNKHwXMpz3ir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMCzcZ%2BzuZbjKKvTnWKtwDZzy8dfVocEnCTcjUnWUAeGMeVJpAXWWAVotrA86JaqYW%2BbDUT0GEnm8AZPnbjzDabj%2Ft2vjvDKlg5d7J%2BlnLiKClI%2F8EO36DAw6yHSTAj4mzQFD1baz3hrrL3K83xR7EGh2qNkCnuN9vLeTvtUNpyvnmYkqZggt9CQ%2F32Dauk8250M6PDZ7yO7Eh%2Bet23%2BRHTfnqP06pwt%2BzuErswPlANJsYXyosfN2FOrKJIvwY8uxoU2QtId1WIJ0GU1%2BP5Z83HUy3%2F1i%2FxjhXR3%2F5wqF6CfHoZ8TAkaltGCdqw2vydlCgkrm2aGfyD3gxxOQz5tLIjIDXtD2A%2BJYuu9phYs%2FNNpAVfBokbdAqXZFCPUdi9IJRZosuUJchIJDNDxGXcX3BONjxo63uslZFuCZtw1lLtbFw5k96aYHe6qAbElZILiehRzkUfw4t3STdOq5%2B%2BDxcd9%2B0XE1RO6R3vsVdRi9Q1RNYL2fc6EResU8uM1ja38rKMvIpnaL3yjBNmnoincb%2F%2FfKJPuKqJ8sDuGmVWVkZrFMEYL2ynIggaugh9CaFkJkuvNTxnusNhFlRxSZpx%2BmLTbM%2FQPoBJv4SPHaFjMcrC7pt2Vyw0rayPgvILjL5yNLUEt4TRru7shGDVLUwyvuSvQY6pgHGoYJr%2BMX2FZlsUa8amk1TnIjFX2b1Pyk35YSlxrf1%2F4VqANfkl0QVf8cDrenamnv%2FjTdMJX6HJEKIf1o2UIMW46FWzkAm1UU%2BLCepKLXwfDrcrd238zl2%2BeDEpHhId%2FUqZd9XcN2G84juNz36UQL921jKWJ1%2BoNg7oweMGI%2BBxmTbKpR9G3qzwpROyrzIBeu14vaIYow2oLsLeCekSCvldLUbWZ8D&X-Amz-Signature=d2e4a654b5e2717aa35a49b487f6c71dc4742f0c2a42b67189784bd511940b14&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
