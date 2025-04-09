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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCFDFZDW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIAeCRveFL4FiwFmlG2QGyJSyvBxgQ8X0LDQK3USYfVCmAiBeGRz5JOGvC0vQEe5eglrfXt17wlx3cd5gI3Dg%2FHa%2FpCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhFjCcFweQ3oOTSyuKtwD%2BSO9wzIj02ZI9pL9AVrGgCll%2FkR%2BbADte5%2B7lIttoP3ro8H%2B7KzdyJvsQTCVbuxNwfBMhsHUS8TdHqA1eANjpiP11Q2pKz5%2F5lj%2B66RhaiGggSYJlrF15yCrsUBMYM%2Fe5PuTgeqb1FeGtUrwVcr1hfBn%2FkhGxL07AqKXygv%2B3CT7IlF7N6JjLA0%2FvuNAWB9fb2vBqn43ibk51mT9UcZQKbD09I%2FVKPmHQ5O9i8USmZecUwaRnAmBfCDHGDqQujkRJoeaeR0yVhFNmBoqQPEOlLhSl%2B%2BMmWN%2BZ5ePMhDrH%2FrRAwGdBdU0ro6tudDYnGB%2BlqGODai30TGXa6jszpCFfo7HBH3sZ%2BR7FgeYtlYMQpFAeSOkayDdniBriFvL4TizQ1wzUgcttt1ttpw3f9KXJAoMLPDvlVGNB25XNVR5gt0BNHSGSy%2BnNwlMTOs9qHmsQbGtcHgphec1D3M7zwjWKuP2HdixWiSKLRbuiSpvm8En%2FpvUkwlkPv3STUw3DRssUkVSbMSsTCdoOTNf3H52IMI71DSpjhed4RUyhlYzJuJml3NvvLANtdm71Hx2ET%2BrIRXfxT9fQhTeYXNLrR7lFtXjCr3BRHxp3FqmSgF9ucTG1vNR%2Bnsv2GIMUPEwgf7ZvwY6pgFz8oI1fixG%2F61tIA43wSB1uH5b6YE9y5KXZEcnNxi0C%2Bo4%2FovSRFJhifiJjG9p7a5jV0kyOvruGLuWWjICqVNMzPZF2wPzVCo6iC8poxH%2FvMXt%2BFpDuvnDY49HFeDVxHib8%2F29UfPyH%2FmQa0oHeURoKLo%2FQt4TUNqWsLGjCQZZ5BJhLb2ZqwhTYOwZNSbgyma44JJqUsR5hR8I%2FqvnJr51%2FIQ1mIyI&X-Amz-Signature=d190f78a056d856a2ab2f0eea22ed73ee0cd62dd282c76548c8ea68e77116d9e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCFDFZDW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIAeCRveFL4FiwFmlG2QGyJSyvBxgQ8X0LDQK3USYfVCmAiBeGRz5JOGvC0vQEe5eglrfXt17wlx3cd5gI3Dg%2FHa%2FpCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhFjCcFweQ3oOTSyuKtwD%2BSO9wzIj02ZI9pL9AVrGgCll%2FkR%2BbADte5%2B7lIttoP3ro8H%2B7KzdyJvsQTCVbuxNwfBMhsHUS8TdHqA1eANjpiP11Q2pKz5%2F5lj%2B66RhaiGggSYJlrF15yCrsUBMYM%2Fe5PuTgeqb1FeGtUrwVcr1hfBn%2FkhGxL07AqKXygv%2B3CT7IlF7N6JjLA0%2FvuNAWB9fb2vBqn43ibk51mT9UcZQKbD09I%2FVKPmHQ5O9i8USmZecUwaRnAmBfCDHGDqQujkRJoeaeR0yVhFNmBoqQPEOlLhSl%2B%2BMmWN%2BZ5ePMhDrH%2FrRAwGdBdU0ro6tudDYnGB%2BlqGODai30TGXa6jszpCFfo7HBH3sZ%2BR7FgeYtlYMQpFAeSOkayDdniBriFvL4TizQ1wzUgcttt1ttpw3f9KXJAoMLPDvlVGNB25XNVR5gt0BNHSGSy%2BnNwlMTOs9qHmsQbGtcHgphec1D3M7zwjWKuP2HdixWiSKLRbuiSpvm8En%2FpvUkwlkPv3STUw3DRssUkVSbMSsTCdoOTNf3H52IMI71DSpjhed4RUyhlYzJuJml3NvvLANtdm71Hx2ET%2BrIRXfxT9fQhTeYXNLrR7lFtXjCr3BRHxp3FqmSgF9ucTG1vNR%2Bnsv2GIMUPEwgf7ZvwY6pgFz8oI1fixG%2F61tIA43wSB1uH5b6YE9y5KXZEcnNxi0C%2Bo4%2FovSRFJhifiJjG9p7a5jV0kyOvruGLuWWjICqVNMzPZF2wPzVCo6iC8poxH%2FvMXt%2BFpDuvnDY49HFeDVxHib8%2F29UfPyH%2FmQa0oHeURoKLo%2FQt4TUNqWsLGjCQZZ5BJhLb2ZqwhTYOwZNSbgyma44JJqUsR5hR8I%2FqvnJr51%2FIQ1mIyI&X-Amz-Signature=d676ca5db3e9fd8a39f6a8113a37d99a3a7826c29c8ebed3bef5da45e7110115&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCFDFZDW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIAeCRveFL4FiwFmlG2QGyJSyvBxgQ8X0LDQK3USYfVCmAiBeGRz5JOGvC0vQEe5eglrfXt17wlx3cd5gI3Dg%2FHa%2FpCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhFjCcFweQ3oOTSyuKtwD%2BSO9wzIj02ZI9pL9AVrGgCll%2FkR%2BbADte5%2B7lIttoP3ro8H%2B7KzdyJvsQTCVbuxNwfBMhsHUS8TdHqA1eANjpiP11Q2pKz5%2F5lj%2B66RhaiGggSYJlrF15yCrsUBMYM%2Fe5PuTgeqb1FeGtUrwVcr1hfBn%2FkhGxL07AqKXygv%2B3CT7IlF7N6JjLA0%2FvuNAWB9fb2vBqn43ibk51mT9UcZQKbD09I%2FVKPmHQ5O9i8USmZecUwaRnAmBfCDHGDqQujkRJoeaeR0yVhFNmBoqQPEOlLhSl%2B%2BMmWN%2BZ5ePMhDrH%2FrRAwGdBdU0ro6tudDYnGB%2BlqGODai30TGXa6jszpCFfo7HBH3sZ%2BR7FgeYtlYMQpFAeSOkayDdniBriFvL4TizQ1wzUgcttt1ttpw3f9KXJAoMLPDvlVGNB25XNVR5gt0BNHSGSy%2BnNwlMTOs9qHmsQbGtcHgphec1D3M7zwjWKuP2HdixWiSKLRbuiSpvm8En%2FpvUkwlkPv3STUw3DRssUkVSbMSsTCdoOTNf3H52IMI71DSpjhed4RUyhlYzJuJml3NvvLANtdm71Hx2ET%2BrIRXfxT9fQhTeYXNLrR7lFtXjCr3BRHxp3FqmSgF9ucTG1vNR%2Bnsv2GIMUPEwgf7ZvwY6pgFz8oI1fixG%2F61tIA43wSB1uH5b6YE9y5KXZEcnNxi0C%2Bo4%2FovSRFJhifiJjG9p7a5jV0kyOvruGLuWWjICqVNMzPZF2wPzVCo6iC8poxH%2FvMXt%2BFpDuvnDY49HFeDVxHib8%2F29UfPyH%2FmQa0oHeURoKLo%2FQt4TUNqWsLGjCQZZ5BJhLb2ZqwhTYOwZNSbgyma44JJqUsR5hR8I%2FqvnJr51%2FIQ1mIyI&X-Amz-Signature=d6cf60fce07921c205b0dc95510c0ab40faec3f55fe354f32ed6f19e76147253&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
