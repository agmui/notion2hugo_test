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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UHV7DD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCID3Hxc%2FOlUuZuD6XgkXPkEXm%2F5OwLeBJaOsR47f6UlilAiEA6EeHjDUEkhjQma9aVoEQgvQCubJ2R%2Fu9sU%2B5eDbQRWwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIncFvDXNtOjXnmadSrcA6oFb6A%2Bv%2FV5VZJ5vauTsuzfavqEb65pzA9p9ETQcm93juMu%2Bl%2BCa1i3VQsw0fATtsS0eVvz%2FkGEsX6NMpHa34rZXHhF3Iei%2F0zevyv979VdSabUnKPffj10IvjM%2BlMJPrqGd0CqWm%2BEubbjzTOmTl9KumqTXh%2B1Awl76Ow4zYzhWcg24IPDTjBue0%2FqYm72DAM%2Fn%2BeiB7nK4kM0bGI1cnRg9TK5S8ZuPVBt0N%2FKjXztKYKwp4Af9Q92gQR4G8TFZMTZ6I%2BvSZymJkCOb130Zu0pmdv9NZ2Y5A94V0PXh9UkhtQVkfrseYFPgUFfcCHyC9jZ56nGYjxi%2Fjs2aePpxAgkFwIBgMuhs2V9P8k8Ni1TtWPAuxej5N9AetqnADKqlApmeSsMcHlaGF3PYTM5duo2Eqihl5dWnRYxR1K4RY3bVRIFpt4P7sLxc2FWLMBRZw9uZXQhP%2Fjp76XHrxmY%2BGEGL8jj3AHHomTwLb2LUQUuVPLqYQBu2G8v%2FoUsQX9kb7Y2TnuHehrk%2F9jkvn2OJEXu0j6CR9nnu9PIBnBU5bCSVXUgWqNjdU2fnQw1U%2BL4O4tAvGx0UAJySw8baRHf4UPtPAXmPaWRc%2BccIWdIfSn3DlSOFxbeKXN4ihBmMO%2FMrckGOqUBqrFtznZY9dvgeVK9WHVI8OXs0iLiugiOklu%2Ftuz7PQ28UxyOfflWzFWtQjS2OFp9E4kGG1mE5mOvccdwmSqIQtMB7VpVIxVWV9MJbvcsmiwz0y9KMp1RW6A1LrEJGvR0UxaqVGDl47SwqNmQDY%2BUylkGJ3%2BSNCG267527bjrjfcHLrNQJh%2FZcGMQibsReGdv3NGpBBT%2FRvXAxCKwI9NgWJcB6Do5&X-Amz-Signature=081cc88366264372d6e16072259604475bb4f492707a3666faab50e966eddf05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UHV7DD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCID3Hxc%2FOlUuZuD6XgkXPkEXm%2F5OwLeBJaOsR47f6UlilAiEA6EeHjDUEkhjQma9aVoEQgvQCubJ2R%2Fu9sU%2B5eDbQRWwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIncFvDXNtOjXnmadSrcA6oFb6A%2Bv%2FV5VZJ5vauTsuzfavqEb65pzA9p9ETQcm93juMu%2Bl%2BCa1i3VQsw0fATtsS0eVvz%2FkGEsX6NMpHa34rZXHhF3Iei%2F0zevyv979VdSabUnKPffj10IvjM%2BlMJPrqGd0CqWm%2BEubbjzTOmTl9KumqTXh%2B1Awl76Ow4zYzhWcg24IPDTjBue0%2FqYm72DAM%2Fn%2BeiB7nK4kM0bGI1cnRg9TK5S8ZuPVBt0N%2FKjXztKYKwp4Af9Q92gQR4G8TFZMTZ6I%2BvSZymJkCOb130Zu0pmdv9NZ2Y5A94V0PXh9UkhtQVkfrseYFPgUFfcCHyC9jZ56nGYjxi%2Fjs2aePpxAgkFwIBgMuhs2V9P8k8Ni1TtWPAuxej5N9AetqnADKqlApmeSsMcHlaGF3PYTM5duo2Eqihl5dWnRYxR1K4RY3bVRIFpt4P7sLxc2FWLMBRZw9uZXQhP%2Fjp76XHrxmY%2BGEGL8jj3AHHomTwLb2LUQUuVPLqYQBu2G8v%2FoUsQX9kb7Y2TnuHehrk%2F9jkvn2OJEXu0j6CR9nnu9PIBnBU5bCSVXUgWqNjdU2fnQw1U%2BL4O4tAvGx0UAJySw8baRHf4UPtPAXmPaWRc%2BccIWdIfSn3DlSOFxbeKXN4ihBmMO%2FMrckGOqUBqrFtznZY9dvgeVK9WHVI8OXs0iLiugiOklu%2Ftuz7PQ28UxyOfflWzFWtQjS2OFp9E4kGG1mE5mOvccdwmSqIQtMB7VpVIxVWV9MJbvcsmiwz0y9KMp1RW6A1LrEJGvR0UxaqVGDl47SwqNmQDY%2BUylkGJ3%2BSNCG267527bjrjfcHLrNQJh%2FZcGMQibsReGdv3NGpBBT%2FRvXAxCKwI9NgWJcB6Do5&X-Amz-Signature=16d111f79a52cf8e1f22714d83c973c0a1fb6e854824f0ff6374917de75dc9a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UHV7DD%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCID3Hxc%2FOlUuZuD6XgkXPkEXm%2F5OwLeBJaOsR47f6UlilAiEA6EeHjDUEkhjQma9aVoEQgvQCubJ2R%2Fu9sU%2B5eDbQRWwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIncFvDXNtOjXnmadSrcA6oFb6A%2Bv%2FV5VZJ5vauTsuzfavqEb65pzA9p9ETQcm93juMu%2Bl%2BCa1i3VQsw0fATtsS0eVvz%2FkGEsX6NMpHa34rZXHhF3Iei%2F0zevyv979VdSabUnKPffj10IvjM%2BlMJPrqGd0CqWm%2BEubbjzTOmTl9KumqTXh%2B1Awl76Ow4zYzhWcg24IPDTjBue0%2FqYm72DAM%2Fn%2BeiB7nK4kM0bGI1cnRg9TK5S8ZuPVBt0N%2FKjXztKYKwp4Af9Q92gQR4G8TFZMTZ6I%2BvSZymJkCOb130Zu0pmdv9NZ2Y5A94V0PXh9UkhtQVkfrseYFPgUFfcCHyC9jZ56nGYjxi%2Fjs2aePpxAgkFwIBgMuhs2V9P8k8Ni1TtWPAuxej5N9AetqnADKqlApmeSsMcHlaGF3PYTM5duo2Eqihl5dWnRYxR1K4RY3bVRIFpt4P7sLxc2FWLMBRZw9uZXQhP%2Fjp76XHrxmY%2BGEGL8jj3AHHomTwLb2LUQUuVPLqYQBu2G8v%2FoUsQX9kb7Y2TnuHehrk%2F9jkvn2OJEXu0j6CR9nnu9PIBnBU5bCSVXUgWqNjdU2fnQw1U%2BL4O4tAvGx0UAJySw8baRHf4UPtPAXmPaWRc%2BccIWdIfSn3DlSOFxbeKXN4ihBmMO%2FMrckGOqUBqrFtznZY9dvgeVK9WHVI8OXs0iLiugiOklu%2Ftuz7PQ28UxyOfflWzFWtQjS2OFp9E4kGG1mE5mOvccdwmSqIQtMB7VpVIxVWV9MJbvcsmiwz0y9KMp1RW6A1LrEJGvR0UxaqVGDl47SwqNmQDY%2BUylkGJ3%2BSNCG267527bjrjfcHLrNQJh%2FZcGMQibsReGdv3NGpBBT%2FRvXAxCKwI9NgWJcB6Do5&X-Amz-Signature=7a11089b2b20700bae04ead1a84fb1263db529400b558425b104dd3a87e2d5bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
