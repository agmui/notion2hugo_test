---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHS5NYBV%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFod7FSkls7tFKIPmzUCsT2v7fS2oSVNCl3GbnCakkD8AiEAgypxMtqRMPzca%2B%2BRnYy2QzLtyaDj7%2FHWw%2BaaokOELq0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDMGJkrlkVjbcTSVWCrcA3wXhU%2BkuFTYDePitEJDohIfpUyNhkNUBzDdxvqzDXCWygK7r%2FNzE29f4lYCLuvPkY%2FgykTmspZR7XLxntyN6LONy9eNhgLnx57GCBpIasBKouccNPjgf1y6msWG4h%2F5mwsjp9NRVshZuwPSRZlRmh6f3Cx8vwWCV327%2F4Zufe5CqPb17gq%2FGQPKXvsxA87kbIx4N38IJ4gm5aHZju3N%2BTd0z33kgYGtkUfFrMeiaRQxXEXwaGkQgg0UIM2ZGSgCrd4hiYnZjgdKQQltsfGg%2BF5zht4qUky9GxNkNBTRfsK%2BWzHExBaHqMto1mBh%2BgO4XtMgifFLsTgn8tr965La1o%2B%2BzN3W7t7N5wCTITug5EhwuEpAJ5bMaT6w7pGK9sr6iFS0djC%2FBwkXNrPh3tDo0ErSDmz6BhqfqraNSPUk8VcZ3JjFpJs%2BbUIVwff3ZdbACcQ7t7GFcaXdLkAowFdyWFZCe0%2B5nDNRdT%2FmoOi5av%2BcLVYR59rqHAcvynZmU%2Br0qm4ekdpThFWWglZ1gFO%2BNK%2FfYbVO7szEkbH0GGWtFiBuxlyYRnWFZ%2FOpx3ZmExOFxya%2FwnGlFxicxWQm263zJx8JtNNd%2Fha6kfy3UhaYlpnVj%2BpGnYxAP6XVcBreMOiYz8wGOqUBkdPs1Qg4G%2BV8a%2Fm7E75XsIhB36Ph0Gzv89iQQUnZFFvaGrM5fSDoOk3TAiz8VQiDYA5d%2BB47vRB3P6prkPY46pcKl1Lt%2FqWW7EcDD9YB6tjze8Dvd%2BIyd3gmUC%2Fcq2gHtQtaVww7iaV%2FQKG5kko1pQony45adB%2FVyVSka6ertABGTf3cBmOQ9yIEz3e9wx%2BBZzP89kP4MxG9CsXwVidIh30%2BFCro&X-Amz-Signature=b481c9ecdcd986e0457601af779c26970ee0febbbf5bb81d045b229d516f6f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHS5NYBV%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFod7FSkls7tFKIPmzUCsT2v7fS2oSVNCl3GbnCakkD8AiEAgypxMtqRMPzca%2B%2BRnYy2QzLtyaDj7%2FHWw%2BaaokOELq0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDMGJkrlkVjbcTSVWCrcA3wXhU%2BkuFTYDePitEJDohIfpUyNhkNUBzDdxvqzDXCWygK7r%2FNzE29f4lYCLuvPkY%2FgykTmspZR7XLxntyN6LONy9eNhgLnx57GCBpIasBKouccNPjgf1y6msWG4h%2F5mwsjp9NRVshZuwPSRZlRmh6f3Cx8vwWCV327%2F4Zufe5CqPb17gq%2FGQPKXvsxA87kbIx4N38IJ4gm5aHZju3N%2BTd0z33kgYGtkUfFrMeiaRQxXEXwaGkQgg0UIM2ZGSgCrd4hiYnZjgdKQQltsfGg%2BF5zht4qUky9GxNkNBTRfsK%2BWzHExBaHqMto1mBh%2BgO4XtMgifFLsTgn8tr965La1o%2B%2BzN3W7t7N5wCTITug5EhwuEpAJ5bMaT6w7pGK9sr6iFS0djC%2FBwkXNrPh3tDo0ErSDmz6BhqfqraNSPUk8VcZ3JjFpJs%2BbUIVwff3ZdbACcQ7t7GFcaXdLkAowFdyWFZCe0%2B5nDNRdT%2FmoOi5av%2BcLVYR59rqHAcvynZmU%2Br0qm4ekdpThFWWglZ1gFO%2BNK%2FfYbVO7szEkbH0GGWtFiBuxlyYRnWFZ%2FOpx3ZmExOFxya%2FwnGlFxicxWQm263zJx8JtNNd%2Fha6kfy3UhaYlpnVj%2BpGnYxAP6XVcBreMOiYz8wGOqUBkdPs1Qg4G%2BV8a%2Fm7E75XsIhB36Ph0Gzv89iQQUnZFFvaGrM5fSDoOk3TAiz8VQiDYA5d%2BB47vRB3P6prkPY46pcKl1Lt%2FqWW7EcDD9YB6tjze8Dvd%2BIyd3gmUC%2Fcq2gHtQtaVww7iaV%2FQKG5kko1pQony45adB%2FVyVSka6ertABGTf3cBmOQ9yIEz3e9wx%2BBZzP89kP4MxG9CsXwVidIh30%2BFCro&X-Amz-Signature=dd741be13edd3a0c27a97d4b0133fc180681320634b0d82e7e6fcc1e3be5731b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHS5NYBV%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFod7FSkls7tFKIPmzUCsT2v7fS2oSVNCl3GbnCakkD8AiEAgypxMtqRMPzca%2B%2BRnYy2QzLtyaDj7%2FHWw%2BaaokOELq0q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDMGJkrlkVjbcTSVWCrcA3wXhU%2BkuFTYDePitEJDohIfpUyNhkNUBzDdxvqzDXCWygK7r%2FNzE29f4lYCLuvPkY%2FgykTmspZR7XLxntyN6LONy9eNhgLnx57GCBpIasBKouccNPjgf1y6msWG4h%2F5mwsjp9NRVshZuwPSRZlRmh6f3Cx8vwWCV327%2F4Zufe5CqPb17gq%2FGQPKXvsxA87kbIx4N38IJ4gm5aHZju3N%2BTd0z33kgYGtkUfFrMeiaRQxXEXwaGkQgg0UIM2ZGSgCrd4hiYnZjgdKQQltsfGg%2BF5zht4qUky9GxNkNBTRfsK%2BWzHExBaHqMto1mBh%2BgO4XtMgifFLsTgn8tr965La1o%2B%2BzN3W7t7N5wCTITug5EhwuEpAJ5bMaT6w7pGK9sr6iFS0djC%2FBwkXNrPh3tDo0ErSDmz6BhqfqraNSPUk8VcZ3JjFpJs%2BbUIVwff3ZdbACcQ7t7GFcaXdLkAowFdyWFZCe0%2B5nDNRdT%2FmoOi5av%2BcLVYR59rqHAcvynZmU%2Br0qm4ekdpThFWWglZ1gFO%2BNK%2FfYbVO7szEkbH0GGWtFiBuxlyYRnWFZ%2FOpx3ZmExOFxya%2FwnGlFxicxWQm263zJx8JtNNd%2Fha6kfy3UhaYlpnVj%2BpGnYxAP6XVcBreMOiYz8wGOqUBkdPs1Qg4G%2BV8a%2Fm7E75XsIhB36Ph0Gzv89iQQUnZFFvaGrM5fSDoOk3TAiz8VQiDYA5d%2BB47vRB3P6prkPY46pcKl1Lt%2FqWW7EcDD9YB6tjze8Dvd%2BIyd3gmUC%2Fcq2gHtQtaVww7iaV%2FQKG5kko1pQony45adB%2FVyVSka6ertABGTf3cBmOQ9yIEz3e9wx%2BBZzP89kP4MxG9CsXwVidIh30%2BFCro&X-Amz-Signature=4a5c9f72f11f4898d7339dff30d7ebe36e271a8a84454a5793c894307f4b1b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
