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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3LV25GF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD7tylAHewGazqiy2fh21oTwITaIIqPB2r65hgvsYaLDwIgFKbtS4qh8x1n6mUMAn2cME6H85KVxm13lF%2F9Ilq6xu4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyea1NYfMPAIEl9NircA6f1c%2FoFk8GWrE2WdYiqrpShiHRGQGThSGwlq8RCrOYecCNgUnkikdsAMR0uXT5leDBoprLR0SRjNSl1ccSjPl0krHvLKnhR43n05Z23%2Ff3qC2i3569jSV8FP6kQyE%2BEaa3YDYFkGeTUMUWUgFThWGXn9LAsvW%2BN%2B33vqn3U50yeNb6xaJEWWcT93tHwGMCxqWWZ2g%2Fj0x4oRP8sXP0aBrhHSQa6T4cnxdHm8F18cN%2BhphGiOnX4hlj%2Bw6VWASc4SpgX8b7mN%2FizI4lAGtnoU4JU8xts%2B1NtY%2F%2FrrRAlIKg%2B5Atdt0q29SjgVDQRufXPFM1%2FFIgEOXXsOyBo59auQbt4H7qGIdXa%2Fr8RwwNLpRmZzpa8HqvwLadthrYm8pyXWplxbybgC03eLjHEYuuFBScUjoxmsg3fEvNzzoK6NBoqUrjeT%2FPDhf860sRwAg0H%2Ff9x7d6iNi%2FZmc4QPrqi4EIas260brggm8xmtQHHMAQWVcx49TlI5K%2Fhha1NrNTAXUl6KAqh8cyXGu%2B9rKTA0rq2%2Fg4%2Far57zdInLmNK2Jnmlm8C6uC3rEtEuuKoMSxHAzQAyHjrFFc%2B1Xc3bc%2FhrXLqkMbx%2FQQY%2FxVNxsIU4FG50jKIU5gJnFOUTgZ%2FMJXHjb4GOqUBJiTvtySrcb5McOmNsq6AYHWkLLbpP%2BWyHPXrHrF9SHqJj4m7HKq28H1ZaWzeNkJGNyXWmXvcSTJR8AzU26Wv1Rmnba865VYknF6D9JzjltnutnlFCBa3qj5EyZIP9qaUHh8CgYDl1KB3%2BkJy973Y9Y5HU7XDyCU3Z9YZZJkIwtODEu%2BOWgi1sbnMzbW3OVOOgbMt7CrUKYmxzbvOfCJT1rSgCcUl&X-Amz-Signature=efaf2c40498413a8d1070f6f1e18e1d962fca6d62379146cc0175a6f342ca596&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3LV25GF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD7tylAHewGazqiy2fh21oTwITaIIqPB2r65hgvsYaLDwIgFKbtS4qh8x1n6mUMAn2cME6H85KVxm13lF%2F9Ilq6xu4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyea1NYfMPAIEl9NircA6f1c%2FoFk8GWrE2WdYiqrpShiHRGQGThSGwlq8RCrOYecCNgUnkikdsAMR0uXT5leDBoprLR0SRjNSl1ccSjPl0krHvLKnhR43n05Z23%2Ff3qC2i3569jSV8FP6kQyE%2BEaa3YDYFkGeTUMUWUgFThWGXn9LAsvW%2BN%2B33vqn3U50yeNb6xaJEWWcT93tHwGMCxqWWZ2g%2Fj0x4oRP8sXP0aBrhHSQa6T4cnxdHm8F18cN%2BhphGiOnX4hlj%2Bw6VWASc4SpgX8b7mN%2FizI4lAGtnoU4JU8xts%2B1NtY%2F%2FrrRAlIKg%2B5Atdt0q29SjgVDQRufXPFM1%2FFIgEOXXsOyBo59auQbt4H7qGIdXa%2Fr8RwwNLpRmZzpa8HqvwLadthrYm8pyXWplxbybgC03eLjHEYuuFBScUjoxmsg3fEvNzzoK6NBoqUrjeT%2FPDhf860sRwAg0H%2Ff9x7d6iNi%2FZmc4QPrqi4EIas260brggm8xmtQHHMAQWVcx49TlI5K%2Fhha1NrNTAXUl6KAqh8cyXGu%2B9rKTA0rq2%2Fg4%2Far57zdInLmNK2Jnmlm8C6uC3rEtEuuKoMSxHAzQAyHjrFFc%2B1Xc3bc%2FhrXLqkMbx%2FQQY%2FxVNxsIU4FG50jKIU5gJnFOUTgZ%2FMJXHjb4GOqUBJiTvtySrcb5McOmNsq6AYHWkLLbpP%2BWyHPXrHrF9SHqJj4m7HKq28H1ZaWzeNkJGNyXWmXvcSTJR8AzU26Wv1Rmnba865VYknF6D9JzjltnutnlFCBa3qj5EyZIP9qaUHh8CgYDl1KB3%2BkJy973Y9Y5HU7XDyCU3Z9YZZJkIwtODEu%2BOWgi1sbnMzbW3OVOOgbMt7CrUKYmxzbvOfCJT1rSgCcUl&X-Amz-Signature=dbc7ccff73b37776bd424b2358aed1a3efa931cfea8f0f4ee37b51b42fb61257&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3LV25GF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD7tylAHewGazqiy2fh21oTwITaIIqPB2r65hgvsYaLDwIgFKbtS4qh8x1n6mUMAn2cME6H85KVxm13lF%2F9Ilq6xu4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyea1NYfMPAIEl9NircA6f1c%2FoFk8GWrE2WdYiqrpShiHRGQGThSGwlq8RCrOYecCNgUnkikdsAMR0uXT5leDBoprLR0SRjNSl1ccSjPl0krHvLKnhR43n05Z23%2Ff3qC2i3569jSV8FP6kQyE%2BEaa3YDYFkGeTUMUWUgFThWGXn9LAsvW%2BN%2B33vqn3U50yeNb6xaJEWWcT93tHwGMCxqWWZ2g%2Fj0x4oRP8sXP0aBrhHSQa6T4cnxdHm8F18cN%2BhphGiOnX4hlj%2Bw6VWASc4SpgX8b7mN%2FizI4lAGtnoU4JU8xts%2B1NtY%2F%2FrrRAlIKg%2B5Atdt0q29SjgVDQRufXPFM1%2FFIgEOXXsOyBo59auQbt4H7qGIdXa%2Fr8RwwNLpRmZzpa8HqvwLadthrYm8pyXWplxbybgC03eLjHEYuuFBScUjoxmsg3fEvNzzoK6NBoqUrjeT%2FPDhf860sRwAg0H%2Ff9x7d6iNi%2FZmc4QPrqi4EIas260brggm8xmtQHHMAQWVcx49TlI5K%2Fhha1NrNTAXUl6KAqh8cyXGu%2B9rKTA0rq2%2Fg4%2Far57zdInLmNK2Jnmlm8C6uC3rEtEuuKoMSxHAzQAyHjrFFc%2B1Xc3bc%2FhrXLqkMbx%2FQQY%2FxVNxsIU4FG50jKIU5gJnFOUTgZ%2FMJXHjb4GOqUBJiTvtySrcb5McOmNsq6AYHWkLLbpP%2BWyHPXrHrF9SHqJj4m7HKq28H1ZaWzeNkJGNyXWmXvcSTJR8AzU26Wv1Rmnba865VYknF6D9JzjltnutnlFCBa3qj5EyZIP9qaUHh8CgYDl1KB3%2BkJy973Y9Y5HU7XDyCU3Z9YZZJkIwtODEu%2BOWgi1sbnMzbW3OVOOgbMt7CrUKYmxzbvOfCJT1rSgCcUl&X-Amz-Signature=b9bbbe5a37400983ccb08e4e937928490a3d89e5bac614fb7d2a53c35c156241&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
