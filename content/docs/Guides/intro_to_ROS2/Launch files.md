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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2LTJ64G%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIE5L%2BuWuIushW%2FaJAx1w30ZdbV55P4pj14lOuk6uBISXAiB22rCnKaL%2B3XYCJdf%2F55O4uLZ%2BR8mzMsKHnR2Xz0CtqSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMttIQy849K3PWFMK5KtwDezqQF1Rce8OAPNtQNxbChN7TYRLbAQ5p%2FKRbGqLsXONqqlVzCJcqlcV1C06seFDVeeoWVKhcyGoYTOpLBhOxuUgDxIAY4LX6lkaCQbxI%2BiQGkK8m9KkZ9YMUt9wNQRGVu1Pobn5JPueQ0f63OoLfxOkg0c8%2Bd9P7uLrsfYUCT0ngPEaUGeCIvLGHlu0RUgxm2MNnSbD9PsCZZ5HNYTqKrHxz7cop818Lw2wcwvA7ERDWhlXqpNdN8FmTnHMLDOcTEtGIFPSSoHJFKrx%2FTSyAve1I2td4AtcmivTPacX%2FsXQHks8COD6VHsrksnaiEzuFk6PUDf9hTY%2FwoTs23UUrj2473I0KbagqVplFH58bQ%2Fp4urvV7iaBP7HB%2FiqT%2Fb78%2Bv%2F%2F1KuUWUKCGUvhpwlMoBaVehFqRLBidSuF62kaqXJSPjS8UnxylRJeg4cgVzqyWb5EHMZ45lvaSx1Mdg8JZRCHmbgENv9Upborm6ycnK1nv1YjO6aNpirIZVnUXYVPdbDJz6buzAn791U9xAQ4Rv%2FhgLe83MwRllQwOoaFhxhQ4uyafW9%2BCAn9u1np%2B5A0oOJX00FvEJDH%2BphJYWktPKGjdAMsMP1Zdex%2BZFOCAt4oNxjldwlH2D1zSygw1d%2FhvwY6pgHmdS8I%2FWkqwaN%2F3uCzCkGwM%2BADn0uqCvEiVlTW1qi9SQuML70mvwQ%2B0cvPmP8m6dt8TAmAChYKsAoOQSxC1tOdw2AjhrEkl2UFkSufwU5BcgPHx%2FyWvSwVmnkNQ0owG%2BxyDY3Zzc2ZMppoEtOWW%2BoDzHnTUZ0qdaUiPN7F02zG%2Bh72jy%2BKWREvKIJyGEmLByKqcFlACPCs9%2BpzhBhUY4jevk2IInRb&X-Amz-Signature=e5eb6ae155b79831ef1664e8089a2387d039a6f05084b1839442e0386a949637&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2LTJ64G%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIE5L%2BuWuIushW%2FaJAx1w30ZdbV55P4pj14lOuk6uBISXAiB22rCnKaL%2B3XYCJdf%2F55O4uLZ%2BR8mzMsKHnR2Xz0CtqSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMttIQy849K3PWFMK5KtwDezqQF1Rce8OAPNtQNxbChN7TYRLbAQ5p%2FKRbGqLsXONqqlVzCJcqlcV1C06seFDVeeoWVKhcyGoYTOpLBhOxuUgDxIAY4LX6lkaCQbxI%2BiQGkK8m9KkZ9YMUt9wNQRGVu1Pobn5JPueQ0f63OoLfxOkg0c8%2Bd9P7uLrsfYUCT0ngPEaUGeCIvLGHlu0RUgxm2MNnSbD9PsCZZ5HNYTqKrHxz7cop818Lw2wcwvA7ERDWhlXqpNdN8FmTnHMLDOcTEtGIFPSSoHJFKrx%2FTSyAve1I2td4AtcmivTPacX%2FsXQHks8COD6VHsrksnaiEzuFk6PUDf9hTY%2FwoTs23UUrj2473I0KbagqVplFH58bQ%2Fp4urvV7iaBP7HB%2FiqT%2Fb78%2Bv%2F%2F1KuUWUKCGUvhpwlMoBaVehFqRLBidSuF62kaqXJSPjS8UnxylRJeg4cgVzqyWb5EHMZ45lvaSx1Mdg8JZRCHmbgENv9Upborm6ycnK1nv1YjO6aNpirIZVnUXYVPdbDJz6buzAn791U9xAQ4Rv%2FhgLe83MwRllQwOoaFhxhQ4uyafW9%2BCAn9u1np%2B5A0oOJX00FvEJDH%2BphJYWktPKGjdAMsMP1Zdex%2BZFOCAt4oNxjldwlH2D1zSygw1d%2FhvwY6pgHmdS8I%2FWkqwaN%2F3uCzCkGwM%2BADn0uqCvEiVlTW1qi9SQuML70mvwQ%2B0cvPmP8m6dt8TAmAChYKsAoOQSxC1tOdw2AjhrEkl2UFkSufwU5BcgPHx%2FyWvSwVmnkNQ0owG%2BxyDY3Zzc2ZMppoEtOWW%2BoDzHnTUZ0qdaUiPN7F02zG%2Bh72jy%2BKWREvKIJyGEmLByKqcFlACPCs9%2BpzhBhUY4jevk2IInRb&X-Amz-Signature=bb9d7dfad6b2b91fda71ef08b7c38218d67fa75b98fe251536a9ad72382e2b3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2LTJ64G%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIE5L%2BuWuIushW%2FaJAx1w30ZdbV55P4pj14lOuk6uBISXAiB22rCnKaL%2B3XYCJdf%2F55O4uLZ%2BR8mzMsKHnR2Xz0CtqSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMttIQy849K3PWFMK5KtwDezqQF1Rce8OAPNtQNxbChN7TYRLbAQ5p%2FKRbGqLsXONqqlVzCJcqlcV1C06seFDVeeoWVKhcyGoYTOpLBhOxuUgDxIAY4LX6lkaCQbxI%2BiQGkK8m9KkZ9YMUt9wNQRGVu1Pobn5JPueQ0f63OoLfxOkg0c8%2Bd9P7uLrsfYUCT0ngPEaUGeCIvLGHlu0RUgxm2MNnSbD9PsCZZ5HNYTqKrHxz7cop818Lw2wcwvA7ERDWhlXqpNdN8FmTnHMLDOcTEtGIFPSSoHJFKrx%2FTSyAve1I2td4AtcmivTPacX%2FsXQHks8COD6VHsrksnaiEzuFk6PUDf9hTY%2FwoTs23UUrj2473I0KbagqVplFH58bQ%2Fp4urvV7iaBP7HB%2FiqT%2Fb78%2Bv%2F%2F1KuUWUKCGUvhpwlMoBaVehFqRLBidSuF62kaqXJSPjS8UnxylRJeg4cgVzqyWb5EHMZ45lvaSx1Mdg8JZRCHmbgENv9Upborm6ycnK1nv1YjO6aNpirIZVnUXYVPdbDJz6buzAn791U9xAQ4Rv%2FhgLe83MwRllQwOoaFhxhQ4uyafW9%2BCAn9u1np%2B5A0oOJX00FvEJDH%2BphJYWktPKGjdAMsMP1Zdex%2BZFOCAt4oNxjldwlH2D1zSygw1d%2FhvwY6pgHmdS8I%2FWkqwaN%2F3uCzCkGwM%2BADn0uqCvEiVlTW1qi9SQuML70mvwQ%2B0cvPmP8m6dt8TAmAChYKsAoOQSxC1tOdw2AjhrEkl2UFkSufwU5BcgPHx%2FyWvSwVmnkNQ0owG%2BxyDY3Zzc2ZMppoEtOWW%2BoDzHnTUZ0qdaUiPN7F02zG%2Bh72jy%2BKWREvKIJyGEmLByKqcFlACPCs9%2BpzhBhUY4jevk2IInRb&X-Amz-Signature=133a3b9c4956b88908f6a1721822c3de968c3c586235cdcc53c42e94df0d8d72&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
