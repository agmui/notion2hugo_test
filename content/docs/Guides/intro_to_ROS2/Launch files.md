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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KA64CSX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD2r%2BzzkyfNfoNSC4bAawL7TbD4yk6aS63RL5iFfyl6EwIgbu22X97o5DfYg5heJSk%2FC30FdRMdwk8jxrTNv3ZFqo4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDLH6j1O04vGt1W0i6SrcA6dVg4o8uB3sHUj7%2B4hZFj52k4UcUPrgUG73tYYAKmUPJsBmdO2Jddyo6taJkaWBRJh0M6SCe8qWohQvhF9VxN505OZ2%2Bd0QCJb3ivoasKFJqIGqhwsYS%2FqejWzQSYv%2FmsywQN8AfpKUtn%2FD%2BOelhft6NMzEWjbrWqORw9eLoljZcrIKvtFWl8oPCFBITzglgoWTLXo8MjBwFuf6lfh4hQokjiH8Diox8baNcz9zHGqLQCm3Yct3hjawu4LcSdPiok8flMgwtioSunlpUPjBDwuj2X6amWNPyQ%2BVUkPDhY6hLmX1FwI%2F5AfR3Mw15zYorLPCKA4D3iCW%2FEE5S28Af2clyDFNgMhrCEswsEN%2BToEeq%2BldzEs55vmduPyvdCN4MSpdb7j5h7bjRr%2Bwh4EIUAP7Any5P5zgumegZXMK3P41fUDl4fK9LQGF%2FoyYC3%2FjHvDsi6Lzk4648la0wWrkqPR%2BxDj2gnEw2iAKNa4r0%2FqqGV3Piytq5Hvv4%2FOu1e75Xzxe3SmIBPRhWnh2uSv%2FUHOD0UqKEzu%2FN4LpoLqqdlLZ0l6ISburJIMcRq5R409UdL%2BTCeaWNRVdWEs%2Fa%2B2hxRDvzC%2BdQKSIjn0T6IaNQsVqyt3bLjD3UsDtkRHiMMiD5MIGOqUBsotALpbVRWIaQfdHLFFAHUyg18wk%2FhIkxPteXpRpz3w59DHa1EU974nYHKxV%2Bms3nDv4wQVWY8Rn8ow0FDv52%2F6V4cIB%2F9eHATka3nFh2puzH9TOw99mtxtORjGqxJOiS2q7TkHrd7LU5AefBDsXXRFoK6%2B91SQ5%2B4CYXRX3HiXChnjrcgdeK87hLhlXbvC3O1G70pQdfCGCrwxEEVyvbjh691Hh&X-Amz-Signature=7d9d40377824c061ba59df3a46e090b73dacabb775d45a06121ad7bcbac8cf43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KA64CSX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD2r%2BzzkyfNfoNSC4bAawL7TbD4yk6aS63RL5iFfyl6EwIgbu22X97o5DfYg5heJSk%2FC30FdRMdwk8jxrTNv3ZFqo4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDLH6j1O04vGt1W0i6SrcA6dVg4o8uB3sHUj7%2B4hZFj52k4UcUPrgUG73tYYAKmUPJsBmdO2Jddyo6taJkaWBRJh0M6SCe8qWohQvhF9VxN505OZ2%2Bd0QCJb3ivoasKFJqIGqhwsYS%2FqejWzQSYv%2FmsywQN8AfpKUtn%2FD%2BOelhft6NMzEWjbrWqORw9eLoljZcrIKvtFWl8oPCFBITzglgoWTLXo8MjBwFuf6lfh4hQokjiH8Diox8baNcz9zHGqLQCm3Yct3hjawu4LcSdPiok8flMgwtioSunlpUPjBDwuj2X6amWNPyQ%2BVUkPDhY6hLmX1FwI%2F5AfR3Mw15zYorLPCKA4D3iCW%2FEE5S28Af2clyDFNgMhrCEswsEN%2BToEeq%2BldzEs55vmduPyvdCN4MSpdb7j5h7bjRr%2Bwh4EIUAP7Any5P5zgumegZXMK3P41fUDl4fK9LQGF%2FoyYC3%2FjHvDsi6Lzk4648la0wWrkqPR%2BxDj2gnEw2iAKNa4r0%2FqqGV3Piytq5Hvv4%2FOu1e75Xzxe3SmIBPRhWnh2uSv%2FUHOD0UqKEzu%2FN4LpoLqqdlLZ0l6ISburJIMcRq5R409UdL%2BTCeaWNRVdWEs%2Fa%2B2hxRDvzC%2BdQKSIjn0T6IaNQsVqyt3bLjD3UsDtkRHiMMiD5MIGOqUBsotALpbVRWIaQfdHLFFAHUyg18wk%2FhIkxPteXpRpz3w59DHa1EU974nYHKxV%2Bms3nDv4wQVWY8Rn8ow0FDv52%2F6V4cIB%2F9eHATka3nFh2puzH9TOw99mtxtORjGqxJOiS2q7TkHrd7LU5AefBDsXXRFoK6%2B91SQ5%2B4CYXRX3HiXChnjrcgdeK87hLhlXbvC3O1G70pQdfCGCrwxEEVyvbjh691Hh&X-Amz-Signature=768df26636d1f628a2ba923b231d9af88c7d69a6d63b8b255d7311d9e4c639de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KA64CSX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD2r%2BzzkyfNfoNSC4bAawL7TbD4yk6aS63RL5iFfyl6EwIgbu22X97o5DfYg5heJSk%2FC30FdRMdwk8jxrTNv3ZFqo4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDLH6j1O04vGt1W0i6SrcA6dVg4o8uB3sHUj7%2B4hZFj52k4UcUPrgUG73tYYAKmUPJsBmdO2Jddyo6taJkaWBRJh0M6SCe8qWohQvhF9VxN505OZ2%2Bd0QCJb3ivoasKFJqIGqhwsYS%2FqejWzQSYv%2FmsywQN8AfpKUtn%2FD%2BOelhft6NMzEWjbrWqORw9eLoljZcrIKvtFWl8oPCFBITzglgoWTLXo8MjBwFuf6lfh4hQokjiH8Diox8baNcz9zHGqLQCm3Yct3hjawu4LcSdPiok8flMgwtioSunlpUPjBDwuj2X6amWNPyQ%2BVUkPDhY6hLmX1FwI%2F5AfR3Mw15zYorLPCKA4D3iCW%2FEE5S28Af2clyDFNgMhrCEswsEN%2BToEeq%2BldzEs55vmduPyvdCN4MSpdb7j5h7bjRr%2Bwh4EIUAP7Any5P5zgumegZXMK3P41fUDl4fK9LQGF%2FoyYC3%2FjHvDsi6Lzk4648la0wWrkqPR%2BxDj2gnEw2iAKNa4r0%2FqqGV3Piytq5Hvv4%2FOu1e75Xzxe3SmIBPRhWnh2uSv%2FUHOD0UqKEzu%2FN4LpoLqqdlLZ0l6ISburJIMcRq5R409UdL%2BTCeaWNRVdWEs%2Fa%2B2hxRDvzC%2BdQKSIjn0T6IaNQsVqyt3bLjD3UsDtkRHiMMiD5MIGOqUBsotALpbVRWIaQfdHLFFAHUyg18wk%2FhIkxPteXpRpz3w59DHa1EU974nYHKxV%2Bms3nDv4wQVWY8Rn8ow0FDv52%2F6V4cIB%2F9eHATka3nFh2puzH9TOw99mtxtORjGqxJOiS2q7TkHrd7LU5AefBDsXXRFoK6%2B91SQ5%2B4CYXRX3HiXChnjrcgdeK87hLhlXbvC3O1G70pQdfCGCrwxEEVyvbjh691Hh&X-Amz-Signature=bb2f4bad39211f11988b75995316ad33f2e9e51b341bd1db48b67746d0b1668f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
