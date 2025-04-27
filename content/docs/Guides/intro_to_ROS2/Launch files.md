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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRGCQ3QY%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDcf7hcARj2vNDnoXBLp%2FRW%2BrSYhQ2Yw6fzz%2B%2BikXJ1wIhAO%2B819WdU5Q%2FzYFUdNBdyX73fFc3LUBdMA%2FNbbLzQpZQKv8DCFYQABoMNjM3NDIzMTgzODA1Igwatq6BP59pxJpYxDsq3AOZDlKPJ9KTEeiiJPtCHj6Mw7wN0HRQoGMdy27SNs6DB05h1DcZqsXJRZPtH3trr1%2FQwFRN7fV3OOrv9dCceCk9Xn5n7EUALB92eud1%2BEBjsAmhzZwnh2vHXmrTgwpeBSz9QfgpxOSHb7QYE0TpnC%2FI2sLHPigCxZR4s9YxAfdVArvHZ5S7jiUvmW971v8BJSzjiV08rsKvsWL7%2FTuXfY8RHlB9wUcpWcr4XPAnJ5yE0eiWlT3MKisYLcR%2BY6%2Ft97COadsaM9%2BGX1AZlfw6CWm191MIVHg0%2Fi4dAlhFQqVZwRBDTi3cMDKriNI%2BfNXXyMp5E9t%2BCDpb0qISQFxAjpJOPO7J%2BdscxKopSK7TFsX0%2FADp01n7LXMCN7xDni1%2FfGekLnS9iXk5pAiS%2BzoVliRmVA1yPm18drcUM%2FFAdGdAiVRKMN8kWSIxetVL0VVE%2Bib0hjGs9cAE%2Few03sLFTJMQ4jiqYwkqRU1rPcPXDyvbtZZ62Grs7TKhRrl7tTIQcUVvumLNe1sC0R%2F%2FuyXR92vlR3EjAtE%2Bwj1ZwQ03C7C6rh41QbGfL2D3M%2Feop%2FjIeAyh4frpR0CpSNO04kK4up0RorkjKqWXxSBP4EZYlem7sXm0Ho8cpdGmd8KzvTDu7LbABjqkAdrzl1w3XwoaP2Z6xvsH3uFmBlF7DjbG6gFJnCBh6g11TXV6T1vJ5yGhRaqZ3Pxb5O8JFnDpPoN0OuyADWXkxn15WukvN%2BRnUnkabtIO%2BgAIubfkiMiEm4%2BAsgzGtsn9hC1nJVt98FWwiBbHzLUKVjg%2F1dWt2xVbmVzHuM5OuWKa0pKNZ15m4Ct6kUTN3OdHe3IyELAe69YtDnvUeknPqSOw6iCT&X-Amz-Signature=69f22dc4f69ca0a7c0950556c5cebde9d652d03960bd377495ddc06d455d0643&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRGCQ3QY%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDcf7hcARj2vNDnoXBLp%2FRW%2BrSYhQ2Yw6fzz%2B%2BikXJ1wIhAO%2B819WdU5Q%2FzYFUdNBdyX73fFc3LUBdMA%2FNbbLzQpZQKv8DCFYQABoMNjM3NDIzMTgzODA1Igwatq6BP59pxJpYxDsq3AOZDlKPJ9KTEeiiJPtCHj6Mw7wN0HRQoGMdy27SNs6DB05h1DcZqsXJRZPtH3trr1%2FQwFRN7fV3OOrv9dCceCk9Xn5n7EUALB92eud1%2BEBjsAmhzZwnh2vHXmrTgwpeBSz9QfgpxOSHb7QYE0TpnC%2FI2sLHPigCxZR4s9YxAfdVArvHZ5S7jiUvmW971v8BJSzjiV08rsKvsWL7%2FTuXfY8RHlB9wUcpWcr4XPAnJ5yE0eiWlT3MKisYLcR%2BY6%2Ft97COadsaM9%2BGX1AZlfw6CWm191MIVHg0%2Fi4dAlhFQqVZwRBDTi3cMDKriNI%2BfNXXyMp5E9t%2BCDpb0qISQFxAjpJOPO7J%2BdscxKopSK7TFsX0%2FADp01n7LXMCN7xDni1%2FfGekLnS9iXk5pAiS%2BzoVliRmVA1yPm18drcUM%2FFAdGdAiVRKMN8kWSIxetVL0VVE%2Bib0hjGs9cAE%2Few03sLFTJMQ4jiqYwkqRU1rPcPXDyvbtZZ62Grs7TKhRrl7tTIQcUVvumLNe1sC0R%2F%2FuyXR92vlR3EjAtE%2Bwj1ZwQ03C7C6rh41QbGfL2D3M%2Feop%2FjIeAyh4frpR0CpSNO04kK4up0RorkjKqWXxSBP4EZYlem7sXm0Ho8cpdGmd8KzvTDu7LbABjqkAdrzl1w3XwoaP2Z6xvsH3uFmBlF7DjbG6gFJnCBh6g11TXV6T1vJ5yGhRaqZ3Pxb5O8JFnDpPoN0OuyADWXkxn15WukvN%2BRnUnkabtIO%2BgAIubfkiMiEm4%2BAsgzGtsn9hC1nJVt98FWwiBbHzLUKVjg%2F1dWt2xVbmVzHuM5OuWKa0pKNZ15m4Ct6kUTN3OdHe3IyELAe69YtDnvUeknPqSOw6iCT&X-Amz-Signature=79f962973ebf30e2c63c62bd2e510459f8785761840d126f81d544be4bac2b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRGCQ3QY%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDcf7hcARj2vNDnoXBLp%2FRW%2BrSYhQ2Yw6fzz%2B%2BikXJ1wIhAO%2B819WdU5Q%2FzYFUdNBdyX73fFc3LUBdMA%2FNbbLzQpZQKv8DCFYQABoMNjM3NDIzMTgzODA1Igwatq6BP59pxJpYxDsq3AOZDlKPJ9KTEeiiJPtCHj6Mw7wN0HRQoGMdy27SNs6DB05h1DcZqsXJRZPtH3trr1%2FQwFRN7fV3OOrv9dCceCk9Xn5n7EUALB92eud1%2BEBjsAmhzZwnh2vHXmrTgwpeBSz9QfgpxOSHb7QYE0TpnC%2FI2sLHPigCxZR4s9YxAfdVArvHZ5S7jiUvmW971v8BJSzjiV08rsKvsWL7%2FTuXfY8RHlB9wUcpWcr4XPAnJ5yE0eiWlT3MKisYLcR%2BY6%2Ft97COadsaM9%2BGX1AZlfw6CWm191MIVHg0%2Fi4dAlhFQqVZwRBDTi3cMDKriNI%2BfNXXyMp5E9t%2BCDpb0qISQFxAjpJOPO7J%2BdscxKopSK7TFsX0%2FADp01n7LXMCN7xDni1%2FfGekLnS9iXk5pAiS%2BzoVliRmVA1yPm18drcUM%2FFAdGdAiVRKMN8kWSIxetVL0VVE%2Bib0hjGs9cAE%2Few03sLFTJMQ4jiqYwkqRU1rPcPXDyvbtZZ62Grs7TKhRrl7tTIQcUVvumLNe1sC0R%2F%2FuyXR92vlR3EjAtE%2Bwj1ZwQ03C7C6rh41QbGfL2D3M%2Feop%2FjIeAyh4frpR0CpSNO04kK4up0RorkjKqWXxSBP4EZYlem7sXm0Ho8cpdGmd8KzvTDu7LbABjqkAdrzl1w3XwoaP2Z6xvsH3uFmBlF7DjbG6gFJnCBh6g11TXV6T1vJ5yGhRaqZ3Pxb5O8JFnDpPoN0OuyADWXkxn15WukvN%2BRnUnkabtIO%2BgAIubfkiMiEm4%2BAsgzGtsn9hC1nJVt98FWwiBbHzLUKVjg%2F1dWt2xVbmVzHuM5OuWKa0pKNZ15m4Ct6kUTN3OdHe3IyELAe69YtDnvUeknPqSOw6iCT&X-Amz-Signature=0a7e3b6134b16351a01545dacb8cfdf7212c0c1e8d7ab219fd7702432d4ec41b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
