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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q37F3FB%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCRCcUzbVJQu8rTpYb%2FSoI7qSP%2FJuj%2FTmI4Ro0Dia4oUAIgHOjzUpGrpVUpZL0y4ArrHdepkIGTpLgiB9oEVS9x0I8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDDcCW5osc%2Fh98XnDircA1HD3wnGQ1stRdQC1YAyB%2F2T4Vvqpx1Xn9m4Tol0kxpwWddPkCk9J2BCNVX0fSm2WkvBfx6598wFPLUmTUs2gbpZyNwsEbmLkVoKgfZui%2FC7lGZgO6imksjXHJXzUGzeKJ%2Bh8Sx0r1uC7nWiBPsrf3nBwh6sb42CeeD6UeNvg6KRRnQMa2OfmJzN8AXWJKZFVhAdzU5Sqs%2Br4L65xT63mcpzJsxzhZvptg3LHTTjTxhW7FXaAdvHkFnG0OEeKHUBGw2jyQMw0MwAhl552Lb8VBr8ssOZvpUgh3WgZJ4SqJo8hX2VfxKI07vVSQm48IL2ZfoSpSL4pXtm0fDX1nijgw3l%2BAtXdiQWO%2Brzz52U1Fr%2BDoWdIRzzB5qif%2FhZaox%2FfAeZnlZcsk7ys%2BTXz%2Fx4Xj9SiOogUG6%2FVEwDUmOOGTUPGpSlsZFKK40rgE9TC4GDr%2F6InHqSBGiHpS%2FJ8BVSl%2FWQJkekwkN60SM8%2FT1QnkgKvniej2B7kpEjMRFirc%2Fx8XGekYp3qUMZiE76wrAMSmVYz%2BkQ07m2qrhZ5UlIi%2FKcdCyZPtqC229KbB7dmgNH%2FtGGpGuVm841B3a%2F%2FPU633hJVDOGu8vL7extGU4XZEQAMAq2KWrmC7Z55J7sMPiamb0GOqUBbCpK17MvE%2FzL8%2BFVgi%2Byc5ho4GI8aET2H1jLLS8ONYOvN1c%2B%2B7HNNi%2BnEhsTpkQ7BoGmeloJKgSYLHh0dmCy1sH3JsyoGNZi7W3MSA6fSupH3nO0N4Oudtrnbn9wIgfWCj8LSDWwCqNHWnizrVn2jvIq3y3pZqmc1vkkHA6vTl7KefOwfBsJvuc%2BRgKc7asAydgcAZYb0SBU3d5fCf8%2BqyMSTeJT&X-Amz-Signature=069d01fa5d37a1c361547fbb52540e357fd3d85c34247452baf81b7496839eba&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q37F3FB%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCRCcUzbVJQu8rTpYb%2FSoI7qSP%2FJuj%2FTmI4Ro0Dia4oUAIgHOjzUpGrpVUpZL0y4ArrHdepkIGTpLgiB9oEVS9x0I8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDDcCW5osc%2Fh98XnDircA1HD3wnGQ1stRdQC1YAyB%2F2T4Vvqpx1Xn9m4Tol0kxpwWddPkCk9J2BCNVX0fSm2WkvBfx6598wFPLUmTUs2gbpZyNwsEbmLkVoKgfZui%2FC7lGZgO6imksjXHJXzUGzeKJ%2Bh8Sx0r1uC7nWiBPsrf3nBwh6sb42CeeD6UeNvg6KRRnQMa2OfmJzN8AXWJKZFVhAdzU5Sqs%2Br4L65xT63mcpzJsxzhZvptg3LHTTjTxhW7FXaAdvHkFnG0OEeKHUBGw2jyQMw0MwAhl552Lb8VBr8ssOZvpUgh3WgZJ4SqJo8hX2VfxKI07vVSQm48IL2ZfoSpSL4pXtm0fDX1nijgw3l%2BAtXdiQWO%2Brzz52U1Fr%2BDoWdIRzzB5qif%2FhZaox%2FfAeZnlZcsk7ys%2BTXz%2Fx4Xj9SiOogUG6%2FVEwDUmOOGTUPGpSlsZFKK40rgE9TC4GDr%2F6InHqSBGiHpS%2FJ8BVSl%2FWQJkekwkN60SM8%2FT1QnkgKvniej2B7kpEjMRFirc%2Fx8XGekYp3qUMZiE76wrAMSmVYz%2BkQ07m2qrhZ5UlIi%2FKcdCyZPtqC229KbB7dmgNH%2FtGGpGuVm841B3a%2F%2FPU633hJVDOGu8vL7extGU4XZEQAMAq2KWrmC7Z55J7sMPiamb0GOqUBbCpK17MvE%2FzL8%2BFVgi%2Byc5ho4GI8aET2H1jLLS8ONYOvN1c%2B%2B7HNNi%2BnEhsTpkQ7BoGmeloJKgSYLHh0dmCy1sH3JsyoGNZi7W3MSA6fSupH3nO0N4Oudtrnbn9wIgfWCj8LSDWwCqNHWnizrVn2jvIq3y3pZqmc1vkkHA6vTl7KefOwfBsJvuc%2BRgKc7asAydgcAZYb0SBU3d5fCf8%2BqyMSTeJT&X-Amz-Signature=a2ef959bcca50e9f715daaff5581aa138fa94b34e62936a4d238e620b001948f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q37F3FB%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCRCcUzbVJQu8rTpYb%2FSoI7qSP%2FJuj%2FTmI4Ro0Dia4oUAIgHOjzUpGrpVUpZL0y4ArrHdepkIGTpLgiB9oEVS9x0I8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDDcCW5osc%2Fh98XnDircA1HD3wnGQ1stRdQC1YAyB%2F2T4Vvqpx1Xn9m4Tol0kxpwWddPkCk9J2BCNVX0fSm2WkvBfx6598wFPLUmTUs2gbpZyNwsEbmLkVoKgfZui%2FC7lGZgO6imksjXHJXzUGzeKJ%2Bh8Sx0r1uC7nWiBPsrf3nBwh6sb42CeeD6UeNvg6KRRnQMa2OfmJzN8AXWJKZFVhAdzU5Sqs%2Br4L65xT63mcpzJsxzhZvptg3LHTTjTxhW7FXaAdvHkFnG0OEeKHUBGw2jyQMw0MwAhl552Lb8VBr8ssOZvpUgh3WgZJ4SqJo8hX2VfxKI07vVSQm48IL2ZfoSpSL4pXtm0fDX1nijgw3l%2BAtXdiQWO%2Brzz52U1Fr%2BDoWdIRzzB5qif%2FhZaox%2FfAeZnlZcsk7ys%2BTXz%2Fx4Xj9SiOogUG6%2FVEwDUmOOGTUPGpSlsZFKK40rgE9TC4GDr%2F6InHqSBGiHpS%2FJ8BVSl%2FWQJkekwkN60SM8%2FT1QnkgKvniej2B7kpEjMRFirc%2Fx8XGekYp3qUMZiE76wrAMSmVYz%2BkQ07m2qrhZ5UlIi%2FKcdCyZPtqC229KbB7dmgNH%2FtGGpGuVm841B3a%2F%2FPU633hJVDOGu8vL7extGU4XZEQAMAq2KWrmC7Z55J7sMPiamb0GOqUBbCpK17MvE%2FzL8%2BFVgi%2Byc5ho4GI8aET2H1jLLS8ONYOvN1c%2B%2B7HNNi%2BnEhsTpkQ7BoGmeloJKgSYLHh0dmCy1sH3JsyoGNZi7W3MSA6fSupH3nO0N4Oudtrnbn9wIgfWCj8LSDWwCqNHWnizrVn2jvIq3y3pZqmc1vkkHA6vTl7KefOwfBsJvuc%2BRgKc7asAydgcAZYb0SBU3d5fCf8%2BqyMSTeJT&X-Amz-Signature=628ae0a5b327be239fc95d7385e63a604d0a6f18bb41cacb316cde89e0e3915f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
