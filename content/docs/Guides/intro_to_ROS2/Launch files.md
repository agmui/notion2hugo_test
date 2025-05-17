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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VCS6NO5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb3LUIOMxDMgp%2F%2FnK6Gi24ok%2FfRplBPpNhbOcKV%2FRNHwIgZZ5lftUPp44Gr0ZO4jRH%2FgTHdbBwBIxJ761JBMQoIRsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLoRgvLsFHR%2BA4UbiSrcAyuCrYmI6l3kr8URCcI8AsI%2B0kGBdwfSE%2FSFTiPhTMCV5bTJ2uxI5XdyvJX542XMGNI56AJ4AtdDS6eMm6spf3LdJa%2BNp74IrcFxyjb%2FE0OeAis0b9p4nbvdfKcj%2FzX7o3XyFitEu8qiOtuC5AFAMBgMnSPyjPfgF6NdY14OvmGs%2Bk6sVA%2FMRcMB4YKvN4SocyghiYKSimXY5cYLXivZ9KCe%2Fg46h%2FzML4fOQVx%2BILvKTqQ%2BgpLBU3W3j040lCVgqXrdVOWQo9Ec%2F4ywCKH4bKBiR2336wxLBG33dPeT9YDn9F8q5%2FSlBJpwch%2BMRwzBx5xRGe0CMZe%2F4cLshkxyebJm34NH9tAQLuS8pJdqnXTF7oriLmg2Ljo9Xok2Jzlx3Sy%2BdEFlMHsiipVNFi6eLXuj4UwjG5FUFrL0iJB58GilYTpw6Q7TelBawEkKYu6OKvIyYg%2Fj3iXNNtybGcUshIXY0tZZ78U%2FSvFCerjm%2BBldVNuaijyMNOXjjNm1Z2qpgIvjPVJNykDMyNIsAu%2FFGoI%2F4kXbgUYl3PyG3%2FH%2BXFH%2B4cSoNInFXOJgyQVLrWJU0HyhP70HRuf73EokNqoYO6RFBHtPXGP7%2Bzs%2F%2BtKetBj7R1Qofh5zXxyPdHpAMNvTosEGOqUBvRWdXceMyl3EO0AD21G3hRKkVH9dni%2BsToNbALfackoDKoh%2FYV%2Bu8qvlyU1LqX4x%2BzrTYpFX3dYoc1ehesTphz6D9xBCq4Jws9L0i7H6xZtqqf7bqC%2Fk%2FphqNIbI9MTzZcUY7nMjKQoB3YfFS1N%2Bz9dtJ%2FdzzqbMuUpDA7ts1c9zsn1zB6wnPOVo6EjF4YUhl05DhDRibHIIZsX2ugZK8R40ofwK&X-Amz-Signature=7fef3fe6188655811f5078ae5950cfa7dbac11d36fe74df2f8c9fc260098c352&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VCS6NO5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb3LUIOMxDMgp%2F%2FnK6Gi24ok%2FfRplBPpNhbOcKV%2FRNHwIgZZ5lftUPp44Gr0ZO4jRH%2FgTHdbBwBIxJ761JBMQoIRsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLoRgvLsFHR%2BA4UbiSrcAyuCrYmI6l3kr8URCcI8AsI%2B0kGBdwfSE%2FSFTiPhTMCV5bTJ2uxI5XdyvJX542XMGNI56AJ4AtdDS6eMm6spf3LdJa%2BNp74IrcFxyjb%2FE0OeAis0b9p4nbvdfKcj%2FzX7o3XyFitEu8qiOtuC5AFAMBgMnSPyjPfgF6NdY14OvmGs%2Bk6sVA%2FMRcMB4YKvN4SocyghiYKSimXY5cYLXivZ9KCe%2Fg46h%2FzML4fOQVx%2BILvKTqQ%2BgpLBU3W3j040lCVgqXrdVOWQo9Ec%2F4ywCKH4bKBiR2336wxLBG33dPeT9YDn9F8q5%2FSlBJpwch%2BMRwzBx5xRGe0CMZe%2F4cLshkxyebJm34NH9tAQLuS8pJdqnXTF7oriLmg2Ljo9Xok2Jzlx3Sy%2BdEFlMHsiipVNFi6eLXuj4UwjG5FUFrL0iJB58GilYTpw6Q7TelBawEkKYu6OKvIyYg%2Fj3iXNNtybGcUshIXY0tZZ78U%2FSvFCerjm%2BBldVNuaijyMNOXjjNm1Z2qpgIvjPVJNykDMyNIsAu%2FFGoI%2F4kXbgUYl3PyG3%2FH%2BXFH%2B4cSoNInFXOJgyQVLrWJU0HyhP70HRuf73EokNqoYO6RFBHtPXGP7%2Bzs%2F%2BtKetBj7R1Qofh5zXxyPdHpAMNvTosEGOqUBvRWdXceMyl3EO0AD21G3hRKkVH9dni%2BsToNbALfackoDKoh%2FYV%2Bu8qvlyU1LqX4x%2BzrTYpFX3dYoc1ehesTphz6D9xBCq4Jws9L0i7H6xZtqqf7bqC%2Fk%2FphqNIbI9MTzZcUY7nMjKQoB3YfFS1N%2Bz9dtJ%2FdzzqbMuUpDA7ts1c9zsn1zB6wnPOVo6EjF4YUhl05DhDRibHIIZsX2ugZK8R40ofwK&X-Amz-Signature=cc7979e6dd6b9c7436881387219f82ce3f75bed5ed6075a85ecdaa6dc11c598b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VCS6NO5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb3LUIOMxDMgp%2F%2FnK6Gi24ok%2FfRplBPpNhbOcKV%2FRNHwIgZZ5lftUPp44Gr0ZO4jRH%2FgTHdbBwBIxJ761JBMQoIRsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLoRgvLsFHR%2BA4UbiSrcAyuCrYmI6l3kr8URCcI8AsI%2B0kGBdwfSE%2FSFTiPhTMCV5bTJ2uxI5XdyvJX542XMGNI56AJ4AtdDS6eMm6spf3LdJa%2BNp74IrcFxyjb%2FE0OeAis0b9p4nbvdfKcj%2FzX7o3XyFitEu8qiOtuC5AFAMBgMnSPyjPfgF6NdY14OvmGs%2Bk6sVA%2FMRcMB4YKvN4SocyghiYKSimXY5cYLXivZ9KCe%2Fg46h%2FzML4fOQVx%2BILvKTqQ%2BgpLBU3W3j040lCVgqXrdVOWQo9Ec%2F4ywCKH4bKBiR2336wxLBG33dPeT9YDn9F8q5%2FSlBJpwch%2BMRwzBx5xRGe0CMZe%2F4cLshkxyebJm34NH9tAQLuS8pJdqnXTF7oriLmg2Ljo9Xok2Jzlx3Sy%2BdEFlMHsiipVNFi6eLXuj4UwjG5FUFrL0iJB58GilYTpw6Q7TelBawEkKYu6OKvIyYg%2Fj3iXNNtybGcUshIXY0tZZ78U%2FSvFCerjm%2BBldVNuaijyMNOXjjNm1Z2qpgIvjPVJNykDMyNIsAu%2FFGoI%2F4kXbgUYl3PyG3%2FH%2BXFH%2B4cSoNInFXOJgyQVLrWJU0HyhP70HRuf73EokNqoYO6RFBHtPXGP7%2Bzs%2F%2BtKetBj7R1Qofh5zXxyPdHpAMNvTosEGOqUBvRWdXceMyl3EO0AD21G3hRKkVH9dni%2BsToNbALfackoDKoh%2FYV%2Bu8qvlyU1LqX4x%2BzrTYpFX3dYoc1ehesTphz6D9xBCq4Jws9L0i7H6xZtqqf7bqC%2Fk%2FphqNIbI9MTzZcUY7nMjKQoB3YfFS1N%2Bz9dtJ%2FdzzqbMuUpDA7ts1c9zsn1zB6wnPOVo6EjF4YUhl05DhDRibHIIZsX2ugZK8R40ofwK&X-Amz-Signature=7970f526a706f9d166a06a6aabcc8fbdf29b650eeb0b567cab3266c94eaa0110&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
