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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNO3VU7P%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkA8ykZ6ZuKoKE9rQN9NQI%2FffdQUsow%2BOEh7y50CeO7AIhAMRETR1%2FUgiulMbuAFxQ3Jk03ORviWIKprSeyGZi7XIQKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUC6JAi4SiNEppNzUq3AOIna%2BQQ5r5edjUs%2FuXaOoLwaXrW8D4zrBBp2SuRdw73gl9mAQZUGRJiEGbTYJJ0tlkeTUqd%2BTqBIVRTL%2Fwvo4R%2BlGJzOI2739BwG2%2BALttfzAGwc4LaqYQO1p8j48lgGcQ%2Bb1baSk76JEsXhuJREUTdewSunFyWLaL%2FZZF6L9fbjUlHqJZlr%2F2TOi9wiAs9rCMEy5HU2pZUmosuxTeni77QU5hTPjAVRZA1BaLpQ1de52Mf35pQN2whhVtuuZNfGUjVcec9IDk5orLrsKOAHtThThp1%2BGaA7coCH8su0JO1%2Btl3Dc20LIRlubnq7jJCphdTjSi0HEeOjWLhLCbOqQxobZ45GkNb4qQ49hWBkHsPTJXFWsJFIrMO%2FN3%2FijT%2Bv7u%2F5GTMCUtbmgr5pXaQp97NAK9emAUOV3BTVemO1IDFhW1dh9JoKV61apO2hI6%2FCIV7BQ7qHL%2BP7LbBST3O7ugSzXzcSZd9jwcjtpKzdNOSS0QESD%2FSYvfHrHNWPiWvCjiauXUZkHJn%2F%2BTAXwQpo%2Bo%2Fv8yoR79aEp24%2FYSkhJqrlK%2FezISwIXXbgj6Xm%2B23pZllSujnjxGUaj3wWiY0Cq0%2Bu5eIkssnCYr6aquMztdgHqdTgtzbw6fbUIg2DDS%2FMjDBjqkAYJAJYUNZ47wJCszqxTHftFrip1p8r4nnkudplBq0URYSQN4%2FDkmpXiWJce3UL4c%2By%2B3Pyqz8bggl%2BO5ONcqdQYm4ZbL%2FSb96sEPsf4IkDGFkFW3K4osBWKobQ8B8BKGXgZ2qbyMEI2D64E2N08n3%2FkwrBy44q3xsvJu%2Bkn9XoNPgppDelor1VGrYKY%2FGfY3UIc7RmrHgxLWTcppuQYzYFl2svKx&X-Amz-Signature=1145ba3d49e2d7a96c99e21f3abe3b2730e8154808495df4eb3bdba80c0b78fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNO3VU7P%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkA8ykZ6ZuKoKE9rQN9NQI%2FffdQUsow%2BOEh7y50CeO7AIhAMRETR1%2FUgiulMbuAFxQ3Jk03ORviWIKprSeyGZi7XIQKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUC6JAi4SiNEppNzUq3AOIna%2BQQ5r5edjUs%2FuXaOoLwaXrW8D4zrBBp2SuRdw73gl9mAQZUGRJiEGbTYJJ0tlkeTUqd%2BTqBIVRTL%2Fwvo4R%2BlGJzOI2739BwG2%2BALttfzAGwc4LaqYQO1p8j48lgGcQ%2Bb1baSk76JEsXhuJREUTdewSunFyWLaL%2FZZF6L9fbjUlHqJZlr%2F2TOi9wiAs9rCMEy5HU2pZUmosuxTeni77QU5hTPjAVRZA1BaLpQ1de52Mf35pQN2whhVtuuZNfGUjVcec9IDk5orLrsKOAHtThThp1%2BGaA7coCH8su0JO1%2Btl3Dc20LIRlubnq7jJCphdTjSi0HEeOjWLhLCbOqQxobZ45GkNb4qQ49hWBkHsPTJXFWsJFIrMO%2FN3%2FijT%2Bv7u%2F5GTMCUtbmgr5pXaQp97NAK9emAUOV3BTVemO1IDFhW1dh9JoKV61apO2hI6%2FCIV7BQ7qHL%2BP7LbBST3O7ugSzXzcSZd9jwcjtpKzdNOSS0QESD%2FSYvfHrHNWPiWvCjiauXUZkHJn%2F%2BTAXwQpo%2Bo%2Fv8yoR79aEp24%2FYSkhJqrlK%2FezISwIXXbgj6Xm%2B23pZllSujnjxGUaj3wWiY0Cq0%2Bu5eIkssnCYr6aquMztdgHqdTgtzbw6fbUIg2DDS%2FMjDBjqkAYJAJYUNZ47wJCszqxTHftFrip1p8r4nnkudplBq0URYSQN4%2FDkmpXiWJce3UL4c%2By%2B3Pyqz8bggl%2BO5ONcqdQYm4ZbL%2FSb96sEPsf4IkDGFkFW3K4osBWKobQ8B8BKGXgZ2qbyMEI2D64E2N08n3%2FkwrBy44q3xsvJu%2Bkn9XoNPgppDelor1VGrYKY%2FGfY3UIc7RmrHgxLWTcppuQYzYFl2svKx&X-Amz-Signature=7a98f6daf6d7b4553585b283d39655427303279ecb831ca64df516a124b33805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNO3VU7P%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkA8ykZ6ZuKoKE9rQN9NQI%2FffdQUsow%2BOEh7y50CeO7AIhAMRETR1%2FUgiulMbuAFxQ3Jk03ORviWIKprSeyGZi7XIQKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUC6JAi4SiNEppNzUq3AOIna%2BQQ5r5edjUs%2FuXaOoLwaXrW8D4zrBBp2SuRdw73gl9mAQZUGRJiEGbTYJJ0tlkeTUqd%2BTqBIVRTL%2Fwvo4R%2BlGJzOI2739BwG2%2BALttfzAGwc4LaqYQO1p8j48lgGcQ%2Bb1baSk76JEsXhuJREUTdewSunFyWLaL%2FZZF6L9fbjUlHqJZlr%2F2TOi9wiAs9rCMEy5HU2pZUmosuxTeni77QU5hTPjAVRZA1BaLpQ1de52Mf35pQN2whhVtuuZNfGUjVcec9IDk5orLrsKOAHtThThp1%2BGaA7coCH8su0JO1%2Btl3Dc20LIRlubnq7jJCphdTjSi0HEeOjWLhLCbOqQxobZ45GkNb4qQ49hWBkHsPTJXFWsJFIrMO%2FN3%2FijT%2Bv7u%2F5GTMCUtbmgr5pXaQp97NAK9emAUOV3BTVemO1IDFhW1dh9JoKV61apO2hI6%2FCIV7BQ7qHL%2BP7LbBST3O7ugSzXzcSZd9jwcjtpKzdNOSS0QESD%2FSYvfHrHNWPiWvCjiauXUZkHJn%2F%2BTAXwQpo%2Bo%2Fv8yoR79aEp24%2FYSkhJqrlK%2FezISwIXXbgj6Xm%2B23pZllSujnjxGUaj3wWiY0Cq0%2Bu5eIkssnCYr6aquMztdgHqdTgtzbw6fbUIg2DDS%2FMjDBjqkAYJAJYUNZ47wJCszqxTHftFrip1p8r4nnkudplBq0URYSQN4%2FDkmpXiWJce3UL4c%2By%2B3Pyqz8bggl%2BO5ONcqdQYm4ZbL%2FSb96sEPsf4IkDGFkFW3K4osBWKobQ8B8BKGXgZ2qbyMEI2D64E2N08n3%2FkwrBy44q3xsvJu%2Bkn9XoNPgppDelor1VGrYKY%2FGfY3UIc7RmrHgxLWTcppuQYzYFl2svKx&X-Amz-Signature=dc4234124bfa2916ff8fa4e40905dcf67def424980b5359340e6803fa80b655f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
