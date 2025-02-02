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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCELIRXR%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5h23YFhnLZufKCyGTwOCUrldcR2ZQfFISpaJHbxwBswIhAMTK1dQqpM%2BIpObZcPWBrl5ZAAf7PH8haC3r0sWTvW%2FRKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHn08oCHx0XTtZXNUq3AP%2BBMUhqV8HuMftnV%2F8WkaHrGTk7ZFo8vGD0CMQDzqFZeFh%2BsmGFzYkYofylW71fEDs95gqmeofH5UlhxrpRTohF5jsx5il0LgAj3njK99PL5kvQR3cE4AH8F6BnluTfJB%2FtJW4eXuGf7IcrOXt2hX454SiV9peM3%2FZ1fesAuVDJsZ56D7Z%2FdlCULngdfJjlDlBg%2BsGkyRUgCFonT2fu19kFwtTUisRpH0miZtHmGQoShpHU5%2Bv%2B2A1VSueOZljxSp94r8cRCIAvQGkrOxCmdXEqELa8XYEGAzM33r%2BqvKL%2BwMzTqBEM6kgrmizRNS%2F6kgO6zm62%2FQzSn%2Bz%2FHcE8v5dl7BcU5TNsXVii2awf4igRgvz%2Fqs7KgjTuxaZQ8HKYSi5tuZ0K7JB6yVtUfbMfaCIY47LkM1pUXguaH%2F1Yo4mNDXbzTdmXDIX1LPnDZ4lyqDAp%2Bx%2ByQqnelao%2BDwMYDsGapCrGXkVEcxc602cPxFPMBET3ratp%2FYWL3hoQQYQKUrRZvT%2F4YdTWkyHfd%2BeYRiGUVqQYnt5cHA4X5EpIBNTA2dKaJVgQ1wBiFVOYkztFkVAsf8jVQ5lnZEUPU5eaFWuePBtgpQN7Eb1WFSD9VDDgLGlQ7Up6XjF5Hr5UzCh4v68BjqkAQwHy%2BSvNdiHO5JcKP%2BoYyVwmFPpruAyumhmr3VUju7NdMcGiPY9nsZmOmZFDjojKEtTc5zZJj%2FQtzFWw2bMUuNpugAX%2B7Yw5KxJuv7thuqe4J%2B22qaZRkJCVPz%2Fd5XGNJz4KLe%2F1aMoiiuLn09UW3%2F%2B%2FyUKWrL19nrYo8wXkO1UBCWwySVIWcpft6V%2B95skh75KRpLs3Nrb5ijSpNozhAtFzHul&X-Amz-Signature=fb24254dc2746f74cb51005f52041b7c42bfdcd87fe998660bd8cdf9fd346b70&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCELIRXR%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5h23YFhnLZufKCyGTwOCUrldcR2ZQfFISpaJHbxwBswIhAMTK1dQqpM%2BIpObZcPWBrl5ZAAf7PH8haC3r0sWTvW%2FRKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHn08oCHx0XTtZXNUq3AP%2BBMUhqV8HuMftnV%2F8WkaHrGTk7ZFo8vGD0CMQDzqFZeFh%2BsmGFzYkYofylW71fEDs95gqmeofH5UlhxrpRTohF5jsx5il0LgAj3njK99PL5kvQR3cE4AH8F6BnluTfJB%2FtJW4eXuGf7IcrOXt2hX454SiV9peM3%2FZ1fesAuVDJsZ56D7Z%2FdlCULngdfJjlDlBg%2BsGkyRUgCFonT2fu19kFwtTUisRpH0miZtHmGQoShpHU5%2Bv%2B2A1VSueOZljxSp94r8cRCIAvQGkrOxCmdXEqELa8XYEGAzM33r%2BqvKL%2BwMzTqBEM6kgrmizRNS%2F6kgO6zm62%2FQzSn%2Bz%2FHcE8v5dl7BcU5TNsXVii2awf4igRgvz%2Fqs7KgjTuxaZQ8HKYSi5tuZ0K7JB6yVtUfbMfaCIY47LkM1pUXguaH%2F1Yo4mNDXbzTdmXDIX1LPnDZ4lyqDAp%2Bx%2ByQqnelao%2BDwMYDsGapCrGXkVEcxc602cPxFPMBET3ratp%2FYWL3hoQQYQKUrRZvT%2F4YdTWkyHfd%2BeYRiGUVqQYnt5cHA4X5EpIBNTA2dKaJVgQ1wBiFVOYkztFkVAsf8jVQ5lnZEUPU5eaFWuePBtgpQN7Eb1WFSD9VDDgLGlQ7Up6XjF5Hr5UzCh4v68BjqkAQwHy%2BSvNdiHO5JcKP%2BoYyVwmFPpruAyumhmr3VUju7NdMcGiPY9nsZmOmZFDjojKEtTc5zZJj%2FQtzFWw2bMUuNpugAX%2B7Yw5KxJuv7thuqe4J%2B22qaZRkJCVPz%2Fd5XGNJz4KLe%2F1aMoiiuLn09UW3%2F%2B%2FyUKWrL19nrYo8wXkO1UBCWwySVIWcpft6V%2B95skh75KRpLs3Nrb5ijSpNozhAtFzHul&X-Amz-Signature=c0c9f24b077a7803001aea540232b5abaf8442a4a4d92d78f6a70bde26a2cbdf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCELIRXR%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5h23YFhnLZufKCyGTwOCUrldcR2ZQfFISpaJHbxwBswIhAMTK1dQqpM%2BIpObZcPWBrl5ZAAf7PH8haC3r0sWTvW%2FRKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHn08oCHx0XTtZXNUq3AP%2BBMUhqV8HuMftnV%2F8WkaHrGTk7ZFo8vGD0CMQDzqFZeFh%2BsmGFzYkYofylW71fEDs95gqmeofH5UlhxrpRTohF5jsx5il0LgAj3njK99PL5kvQR3cE4AH8F6BnluTfJB%2FtJW4eXuGf7IcrOXt2hX454SiV9peM3%2FZ1fesAuVDJsZ56D7Z%2FdlCULngdfJjlDlBg%2BsGkyRUgCFonT2fu19kFwtTUisRpH0miZtHmGQoShpHU5%2Bv%2B2A1VSueOZljxSp94r8cRCIAvQGkrOxCmdXEqELa8XYEGAzM33r%2BqvKL%2BwMzTqBEM6kgrmizRNS%2F6kgO6zm62%2FQzSn%2Bz%2FHcE8v5dl7BcU5TNsXVii2awf4igRgvz%2Fqs7KgjTuxaZQ8HKYSi5tuZ0K7JB6yVtUfbMfaCIY47LkM1pUXguaH%2F1Yo4mNDXbzTdmXDIX1LPnDZ4lyqDAp%2Bx%2ByQqnelao%2BDwMYDsGapCrGXkVEcxc602cPxFPMBET3ratp%2FYWL3hoQQYQKUrRZvT%2F4YdTWkyHfd%2BeYRiGUVqQYnt5cHA4X5EpIBNTA2dKaJVgQ1wBiFVOYkztFkVAsf8jVQ5lnZEUPU5eaFWuePBtgpQN7Eb1WFSD9VDDgLGlQ7Up6XjF5Hr5UzCh4v68BjqkAQwHy%2BSvNdiHO5JcKP%2BoYyVwmFPpruAyumhmr3VUju7NdMcGiPY9nsZmOmZFDjojKEtTc5zZJj%2FQtzFWw2bMUuNpugAX%2B7Yw5KxJuv7thuqe4J%2B22qaZRkJCVPz%2Fd5XGNJz4KLe%2F1aMoiiuLn09UW3%2F%2B%2FyUKWrL19nrYo8wXkO1UBCWwySVIWcpft6V%2B95skh75KRpLs3Nrb5ijSpNozhAtFzHul&X-Amz-Signature=d1c2867eeba97e5ed3e1d2602cf62a40939deac6506c4284053e39129458d3a3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
