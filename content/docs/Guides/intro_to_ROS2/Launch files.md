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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXSG3ZU5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDH8DWDgpUBlqjKxNXusvgatLVrJMlR8TVVXaME2pLGqAiBU7XnWJaQGno4QKBYSKX44E4MAHm6S8iBwyL9gG%2FS7BSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMuEmQa8W0oeBbEeHTKtwDDRtX6gHyJLWnWTzKqkRIVJaLu6cfl0nKi8OzKCq5bjUaALnuHZHdI7lfA8dKBb%2BJqLBYw9uTMSKZ2nD8%2FaNKEzQkYeKBCRxhE5g0fvQqRupmlVbes9QVGuoqFhGo%2FFk91%2BzMfePQarVGDYMhDyB0jOQgixQV6rvHdiRjhvkLNEyGSnLqvJjtDjrEfv963yEHPxHPtgwBdHcVBT4U38p6qlEpPr%2F9K9gq2I%2FmhdichWq5fHMF7qSLLdPJp31DKbEDYG26SMvwceQI9xpkmwu%2B4REfvAP97bnY86uTJKs%2BrR%2BcJapCyrMCAVHtMlZKnIQL5rjZI%2FuTUPcM8Znnyt05g%2B0lcvDASdEN1ND936%2B478glgZ%2BFm9sQ6fvOc9pChJ%2BPJX0xjyPvRoQ5cEIPmEWX5eFeRXFW0Ydkd0geUkiSEqiJ9quclTotyquWUxsHHXzmJ5kwlYVVgYl81yWpNQfEnKmBQUTPDDLgPyyvVKHanV741up%2BbzTFwT21Onwsshswg3i4wJL%2BYZUlyiCyQ8%2BXrZEJKSa3%2BJQIri6EHF7kPsczBICSCjzmRoHnHvax4LxFL75nBOUk03tJvcF05s7%2BhA2jYFxBkyJb2zWIVo9HLnZF1JIs6UGbvPXJA7kw%2Bp31wgY6pgGatC5uoU3QN%2F4uuvfsboS6P0DzWwatTbJHiftjif5qyXRIc%2Fl%2B2ePb4Y6FWxdDVgwniGxlV6VJ9%2FKsA%2BV5fg6UBWjqu9QwxORZG55IWmSTjKSLsJnkDaD%2FT8zrbu4N0ubT%2FFTkrZwY%2F9hey9f4GojT6303gmmyLOBPsF1WhyflHUqH%2BA1A4ClnQ5JMF4wM0pLS9EbfRohXnmayRlc3xzG2bXQwscRu&X-Amz-Signature=52197d6f9b884fc18c9190037c87869040ea1b555020f7f717e3cdd11e5cd9c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXSG3ZU5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDH8DWDgpUBlqjKxNXusvgatLVrJMlR8TVVXaME2pLGqAiBU7XnWJaQGno4QKBYSKX44E4MAHm6S8iBwyL9gG%2FS7BSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMuEmQa8W0oeBbEeHTKtwDDRtX6gHyJLWnWTzKqkRIVJaLu6cfl0nKi8OzKCq5bjUaALnuHZHdI7lfA8dKBb%2BJqLBYw9uTMSKZ2nD8%2FaNKEzQkYeKBCRxhE5g0fvQqRupmlVbes9QVGuoqFhGo%2FFk91%2BzMfePQarVGDYMhDyB0jOQgixQV6rvHdiRjhvkLNEyGSnLqvJjtDjrEfv963yEHPxHPtgwBdHcVBT4U38p6qlEpPr%2F9K9gq2I%2FmhdichWq5fHMF7qSLLdPJp31DKbEDYG26SMvwceQI9xpkmwu%2B4REfvAP97bnY86uTJKs%2BrR%2BcJapCyrMCAVHtMlZKnIQL5rjZI%2FuTUPcM8Znnyt05g%2B0lcvDASdEN1ND936%2B478glgZ%2BFm9sQ6fvOc9pChJ%2BPJX0xjyPvRoQ5cEIPmEWX5eFeRXFW0Ydkd0geUkiSEqiJ9quclTotyquWUxsHHXzmJ5kwlYVVgYl81yWpNQfEnKmBQUTPDDLgPyyvVKHanV741up%2BbzTFwT21Onwsshswg3i4wJL%2BYZUlyiCyQ8%2BXrZEJKSa3%2BJQIri6EHF7kPsczBICSCjzmRoHnHvax4LxFL75nBOUk03tJvcF05s7%2BhA2jYFxBkyJb2zWIVo9HLnZF1JIs6UGbvPXJA7kw%2Bp31wgY6pgGatC5uoU3QN%2F4uuvfsboS6P0DzWwatTbJHiftjif5qyXRIc%2Fl%2B2ePb4Y6FWxdDVgwniGxlV6VJ9%2FKsA%2BV5fg6UBWjqu9QwxORZG55IWmSTjKSLsJnkDaD%2FT8zrbu4N0ubT%2FFTkrZwY%2F9hey9f4GojT6303gmmyLOBPsF1WhyflHUqH%2BA1A4ClnQ5JMF4wM0pLS9EbfRohXnmayRlc3xzG2bXQwscRu&X-Amz-Signature=27b7e764888f2d0aedcae2376ab06f821e91f5e675a1da64739e0b8dc66770e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXSG3ZU5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDH8DWDgpUBlqjKxNXusvgatLVrJMlR8TVVXaME2pLGqAiBU7XnWJaQGno4QKBYSKX44E4MAHm6S8iBwyL9gG%2FS7BSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMuEmQa8W0oeBbEeHTKtwDDRtX6gHyJLWnWTzKqkRIVJaLu6cfl0nKi8OzKCq5bjUaALnuHZHdI7lfA8dKBb%2BJqLBYw9uTMSKZ2nD8%2FaNKEzQkYeKBCRxhE5g0fvQqRupmlVbes9QVGuoqFhGo%2FFk91%2BzMfePQarVGDYMhDyB0jOQgixQV6rvHdiRjhvkLNEyGSnLqvJjtDjrEfv963yEHPxHPtgwBdHcVBT4U38p6qlEpPr%2F9K9gq2I%2FmhdichWq5fHMF7qSLLdPJp31DKbEDYG26SMvwceQI9xpkmwu%2B4REfvAP97bnY86uTJKs%2BrR%2BcJapCyrMCAVHtMlZKnIQL5rjZI%2FuTUPcM8Znnyt05g%2B0lcvDASdEN1ND936%2B478glgZ%2BFm9sQ6fvOc9pChJ%2BPJX0xjyPvRoQ5cEIPmEWX5eFeRXFW0Ydkd0geUkiSEqiJ9quclTotyquWUxsHHXzmJ5kwlYVVgYl81yWpNQfEnKmBQUTPDDLgPyyvVKHanV741up%2BbzTFwT21Onwsshswg3i4wJL%2BYZUlyiCyQ8%2BXrZEJKSa3%2BJQIri6EHF7kPsczBICSCjzmRoHnHvax4LxFL75nBOUk03tJvcF05s7%2BhA2jYFxBkyJb2zWIVo9HLnZF1JIs6UGbvPXJA7kw%2Bp31wgY6pgGatC5uoU3QN%2F4uuvfsboS6P0DzWwatTbJHiftjif5qyXRIc%2Fl%2B2ePb4Y6FWxdDVgwniGxlV6VJ9%2FKsA%2BV5fg6UBWjqu9QwxORZG55IWmSTjKSLsJnkDaD%2FT8zrbu4N0ubT%2FFTkrZwY%2F9hey9f4GojT6303gmmyLOBPsF1WhyflHUqH%2BA1A4ClnQ5JMF4wM0pLS9EbfRohXnmayRlc3xzG2bXQwscRu&X-Amz-Signature=bc10c5ae836b60c1418163b9a4f785a46edf552bea6dd06609f3f82b9dcba2e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
