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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3QQXAB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0JmMaFD22MhaNK513%2F6nUw6BF7yUgB48LFTl9flb52QIgdH82o7vmEi7J%2BNxIJ8JY%2FA7gp5oVvVj4vckh1VXiDX8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbVuP9bkof3EGi9VSrcA5Tg%2FyeM1Jh8B%2BbjhtkaH%2F7B8x5nPWDjXYPnGtJA0MV%2Fpjuh4W3dDyCD3TgwhamXKZybMnSu%2BG%2BDJioZaL0hleJ7m6J8SAtJYGMHnhyvfjpo%2B6%2BGdxRFGEm9pXbs7XBwtxIsAgXg4jqQnWxqNvy3MdXMPHSJObeVXoDQbCxBEiIO%2FcFN9RYZSpguYgM6ob8rzFboBCQBt3yqLgWvWpQow69XdNPTK17BSKCCdsUOv93bAPfaALwBbPrVfTnn3x%2FDTXwt6TmYvabyRSaFeP2SufanX6GacgrrAVtE%2FpfUtxjp%2B1Byyp8bEFn4X7nJa0k4PaNf3dDjoJEWJIsKgZSRrwgI5Ngi9MLxJpvJR0gU%2Bd75qr%2FuxgMR4%2BTp603yBGd3SCsUXWCOcF8mf30cClixP10aPrW2wZgWTsolgUTOw8L2rzxFzMz10d2GCx4giMw1l8F%2Fpg5B%2FHIJnWVYaJOy2qVCzW7hDpnTIEm8OdtYO11VnaOghrBWx04Dpl5lIJH48CEr4VhzHoLX0QBCUuAMJFcQfyPESCov1rCUxC3z6rd%2F1DqtjUGQ60qYfCj3p6qfEOGJiM8BZPSFUNgj001WFJzf%2Fgc4HItpQ9GvQ8LOw50qJcCTxUOffhTmMFFkMMGFiMMGOqUBwAYSOH0cE8%2BlId3SkoaFXH1glKMKW8xlSKKy4fe8swW0KZl6M42MzQgw6K%2BZomM4EaA8lxKQWpreCvfJh28%2BKdTfitAtHhBiW9j%2FIKfUgdSt00xdOidUNU4q%2Bba0wR5mKWnSGpEgXwG1tbMRMiJvc9E5zcFZPAHoQHD2tGvirpNblawq8ThTc0yRJocoBwoJalMai3n%2B5ltqUBoY5UbiaR4GkXGO&X-Amz-Signature=7709484ed1096303171c3760d33fa00047020206fce3bfca64f9ab3772242196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3QQXAB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0JmMaFD22MhaNK513%2F6nUw6BF7yUgB48LFTl9flb52QIgdH82o7vmEi7J%2BNxIJ8JY%2FA7gp5oVvVj4vckh1VXiDX8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbVuP9bkof3EGi9VSrcA5Tg%2FyeM1Jh8B%2BbjhtkaH%2F7B8x5nPWDjXYPnGtJA0MV%2Fpjuh4W3dDyCD3TgwhamXKZybMnSu%2BG%2BDJioZaL0hleJ7m6J8SAtJYGMHnhyvfjpo%2B6%2BGdxRFGEm9pXbs7XBwtxIsAgXg4jqQnWxqNvy3MdXMPHSJObeVXoDQbCxBEiIO%2FcFN9RYZSpguYgM6ob8rzFboBCQBt3yqLgWvWpQow69XdNPTK17BSKCCdsUOv93bAPfaALwBbPrVfTnn3x%2FDTXwt6TmYvabyRSaFeP2SufanX6GacgrrAVtE%2FpfUtxjp%2B1Byyp8bEFn4X7nJa0k4PaNf3dDjoJEWJIsKgZSRrwgI5Ngi9MLxJpvJR0gU%2Bd75qr%2FuxgMR4%2BTp603yBGd3SCsUXWCOcF8mf30cClixP10aPrW2wZgWTsolgUTOw8L2rzxFzMz10d2GCx4giMw1l8F%2Fpg5B%2FHIJnWVYaJOy2qVCzW7hDpnTIEm8OdtYO11VnaOghrBWx04Dpl5lIJH48CEr4VhzHoLX0QBCUuAMJFcQfyPESCov1rCUxC3z6rd%2F1DqtjUGQ60qYfCj3p6qfEOGJiM8BZPSFUNgj001WFJzf%2Fgc4HItpQ9GvQ8LOw50qJcCTxUOffhTmMFFkMMGFiMMGOqUBwAYSOH0cE8%2BlId3SkoaFXH1glKMKW8xlSKKy4fe8swW0KZl6M42MzQgw6K%2BZomM4EaA8lxKQWpreCvfJh28%2BKdTfitAtHhBiW9j%2FIKfUgdSt00xdOidUNU4q%2Bba0wR5mKWnSGpEgXwG1tbMRMiJvc9E5zcFZPAHoQHD2tGvirpNblawq8ThTc0yRJocoBwoJalMai3n%2B5ltqUBoY5UbiaR4GkXGO&X-Amz-Signature=96f4d335f4a008d6807244ac1d022fe8eb19c1e4e1d9c0b5ce87880629dc96bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3QQXAB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0JmMaFD22MhaNK513%2F6nUw6BF7yUgB48LFTl9flb52QIgdH82o7vmEi7J%2BNxIJ8JY%2FA7gp5oVvVj4vckh1VXiDX8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbVuP9bkof3EGi9VSrcA5Tg%2FyeM1Jh8B%2BbjhtkaH%2F7B8x5nPWDjXYPnGtJA0MV%2Fpjuh4W3dDyCD3TgwhamXKZybMnSu%2BG%2BDJioZaL0hleJ7m6J8SAtJYGMHnhyvfjpo%2B6%2BGdxRFGEm9pXbs7XBwtxIsAgXg4jqQnWxqNvy3MdXMPHSJObeVXoDQbCxBEiIO%2FcFN9RYZSpguYgM6ob8rzFboBCQBt3yqLgWvWpQow69XdNPTK17BSKCCdsUOv93bAPfaALwBbPrVfTnn3x%2FDTXwt6TmYvabyRSaFeP2SufanX6GacgrrAVtE%2FpfUtxjp%2B1Byyp8bEFn4X7nJa0k4PaNf3dDjoJEWJIsKgZSRrwgI5Ngi9MLxJpvJR0gU%2Bd75qr%2FuxgMR4%2BTp603yBGd3SCsUXWCOcF8mf30cClixP10aPrW2wZgWTsolgUTOw8L2rzxFzMz10d2GCx4giMw1l8F%2Fpg5B%2FHIJnWVYaJOy2qVCzW7hDpnTIEm8OdtYO11VnaOghrBWx04Dpl5lIJH48CEr4VhzHoLX0QBCUuAMJFcQfyPESCov1rCUxC3z6rd%2F1DqtjUGQ60qYfCj3p6qfEOGJiM8BZPSFUNgj001WFJzf%2Fgc4HItpQ9GvQ8LOw50qJcCTxUOffhTmMFFkMMGFiMMGOqUBwAYSOH0cE8%2BlId3SkoaFXH1glKMKW8xlSKKy4fe8swW0KZl6M42MzQgw6K%2BZomM4EaA8lxKQWpreCvfJh28%2BKdTfitAtHhBiW9j%2FIKfUgdSt00xdOidUNU4q%2Bba0wR5mKWnSGpEgXwG1tbMRMiJvc9E5zcFZPAHoQHD2tGvirpNblawq8ThTc0yRJocoBwoJalMai3n%2B5ltqUBoY5UbiaR4GkXGO&X-Amz-Signature=d7b9ef7cafa91b2316bc65e38f0128bbd84dd32fb6151f116ed53c3e02d07154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
