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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665IYJ5FC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIETvBFJgQGXPjQZeseIjpyexEPl3djbhM%2FOXqzUUEk43AiADPp3hc25LnhCo5sIFXYlGD2jmVuUNGEZauDHGiNqpeir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMPtRq6mcI9YRLtVvbKtwDJPi08BSze8EZ81QVjwwiH7WbITqCg%2FGNwpN%2Fmn3fzCP5%2BQuXMvtOxZgC0XN61QGWho41bo6WTLphWHj%2FP7cPxuyZMs%2FZfcEagxfo%2F1V3sScNQkf1IES6O2pJT8BZjVRQ3CPBg4hz0zkVMS3VGZrCljrXE6dfAkHH4MgGequyP5VyUL03as0jgv7dtZjUsZ%2FuRmP8KlcVGtuYkSXz11Ua50cV15SAcNydyRSM0Ax4A1tFxhUO0ChLH%2FZtC37jXuRZuE6J%2B87iyD6vIQfaAU%2B4rb2Do5ZmdGOVW27BsXH1Yl%2FOcLVrDY5cSAyXGhBLI3uA%2FIfVWNq5MUaOFVc0hWP5RK4w7mCsQoOHmTFDgEJJyT%2BJwO5CN%2FYvqqLdg9M7hJ4SPKCelYqE87%2FBMh2ulxVCyQFtOl59YMX%2FZTAcDqHxWwbojCOJEDemGy4XEPHEwRfVeijzcGec%2F4nyg4eV2Fl2Rk9LGGe%2FdoiG%2FVNp0Am%2BPamzo7eTHvsea0uv95Gx%2B4v76IDHinONFoFkzmjWCnFQNn9xS6TkkZuDt0fRZDDPbHxeouk782HtVM3CzJfG79nVWriRQhVHHHYgc0ITvjefiN%2BabJLTERsuD3ipnHEBC%2FEY4nnRdXwxbBFq2Ugw5KLqwgY6pgGVhijL7urwqbUZ9jJKJ%2BBSrfruQddTm31M5DTwNThWc%2BOxqkGOBo%2FQ0FY5243pbqw%2Fg7VNYBoinia7oCxPcL6RImmwE4wtWxQ9dibuF2IYRt1J6vFt8Oh%2FP7T0MmUH7TFkr60xmbmGH2JfW8BDG%2B9upEMgTh1m2JQHs0ceAKaDrrVIkAGtj9VAt41ZKfsOwcOMZm6aMFSV3CzA2LwcGVRdAB815CJZ&X-Amz-Signature=dcabbe533c6bf0c898470503db5fb8fb4d485d4dc1195a7e3dd3f9e19b6ae050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665IYJ5FC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIETvBFJgQGXPjQZeseIjpyexEPl3djbhM%2FOXqzUUEk43AiADPp3hc25LnhCo5sIFXYlGD2jmVuUNGEZauDHGiNqpeir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMPtRq6mcI9YRLtVvbKtwDJPi08BSze8EZ81QVjwwiH7WbITqCg%2FGNwpN%2Fmn3fzCP5%2BQuXMvtOxZgC0XN61QGWho41bo6WTLphWHj%2FP7cPxuyZMs%2FZfcEagxfo%2F1V3sScNQkf1IES6O2pJT8BZjVRQ3CPBg4hz0zkVMS3VGZrCljrXE6dfAkHH4MgGequyP5VyUL03as0jgv7dtZjUsZ%2FuRmP8KlcVGtuYkSXz11Ua50cV15SAcNydyRSM0Ax4A1tFxhUO0ChLH%2FZtC37jXuRZuE6J%2B87iyD6vIQfaAU%2B4rb2Do5ZmdGOVW27BsXH1Yl%2FOcLVrDY5cSAyXGhBLI3uA%2FIfVWNq5MUaOFVc0hWP5RK4w7mCsQoOHmTFDgEJJyT%2BJwO5CN%2FYvqqLdg9M7hJ4SPKCelYqE87%2FBMh2ulxVCyQFtOl59YMX%2FZTAcDqHxWwbojCOJEDemGy4XEPHEwRfVeijzcGec%2F4nyg4eV2Fl2Rk9LGGe%2FdoiG%2FVNp0Am%2BPamzo7eTHvsea0uv95Gx%2B4v76IDHinONFoFkzmjWCnFQNn9xS6TkkZuDt0fRZDDPbHxeouk782HtVM3CzJfG79nVWriRQhVHHHYgc0ITvjefiN%2BabJLTERsuD3ipnHEBC%2FEY4nnRdXwxbBFq2Ugw5KLqwgY6pgGVhijL7urwqbUZ9jJKJ%2BBSrfruQddTm31M5DTwNThWc%2BOxqkGOBo%2FQ0FY5243pbqw%2Fg7VNYBoinia7oCxPcL6RImmwE4wtWxQ9dibuF2IYRt1J6vFt8Oh%2FP7T0MmUH7TFkr60xmbmGH2JfW8BDG%2B9upEMgTh1m2JQHs0ceAKaDrrVIkAGtj9VAt41ZKfsOwcOMZm6aMFSV3CzA2LwcGVRdAB815CJZ&X-Amz-Signature=b675cf7805d493974e98c3b2ebeb8289d6a8da18ee2998c6be5f88439df8e285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665IYJ5FC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIETvBFJgQGXPjQZeseIjpyexEPl3djbhM%2FOXqzUUEk43AiADPp3hc25LnhCo5sIFXYlGD2jmVuUNGEZauDHGiNqpeir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMPtRq6mcI9YRLtVvbKtwDJPi08BSze8EZ81QVjwwiH7WbITqCg%2FGNwpN%2Fmn3fzCP5%2BQuXMvtOxZgC0XN61QGWho41bo6WTLphWHj%2FP7cPxuyZMs%2FZfcEagxfo%2F1V3sScNQkf1IES6O2pJT8BZjVRQ3CPBg4hz0zkVMS3VGZrCljrXE6dfAkHH4MgGequyP5VyUL03as0jgv7dtZjUsZ%2FuRmP8KlcVGtuYkSXz11Ua50cV15SAcNydyRSM0Ax4A1tFxhUO0ChLH%2FZtC37jXuRZuE6J%2B87iyD6vIQfaAU%2B4rb2Do5ZmdGOVW27BsXH1Yl%2FOcLVrDY5cSAyXGhBLI3uA%2FIfVWNq5MUaOFVc0hWP5RK4w7mCsQoOHmTFDgEJJyT%2BJwO5CN%2FYvqqLdg9M7hJ4SPKCelYqE87%2FBMh2ulxVCyQFtOl59YMX%2FZTAcDqHxWwbojCOJEDemGy4XEPHEwRfVeijzcGec%2F4nyg4eV2Fl2Rk9LGGe%2FdoiG%2FVNp0Am%2BPamzo7eTHvsea0uv95Gx%2B4v76IDHinONFoFkzmjWCnFQNn9xS6TkkZuDt0fRZDDPbHxeouk782HtVM3CzJfG79nVWriRQhVHHHYgc0ITvjefiN%2BabJLTERsuD3ipnHEBC%2FEY4nnRdXwxbBFq2Ugw5KLqwgY6pgGVhijL7urwqbUZ9jJKJ%2BBSrfruQddTm31M5DTwNThWc%2BOxqkGOBo%2FQ0FY5243pbqw%2Fg7VNYBoinia7oCxPcL6RImmwE4wtWxQ9dibuF2IYRt1J6vFt8Oh%2FP7T0MmUH7TFkr60xmbmGH2JfW8BDG%2B9upEMgTh1m2JQHs0ceAKaDrrVIkAGtj9VAt41ZKfsOwcOMZm6aMFSV3CzA2LwcGVRdAB815CJZ&X-Amz-Signature=c1910e41d6bbaa0c165edcd0eea0195d8c555ccf8913877083e60c9c8b8a381f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
