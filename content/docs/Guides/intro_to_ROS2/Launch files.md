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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NEMEQOD%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB41ZDRLjvuEUnzNBz%2F93i031AC22OdBvPRyCxLeezJkAiEA0GEfG57GNEbWRxmvNP1L4tcIB%2FE%2FF%2FMsisr%2BHJAK1U4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHV2iPEih4kj9jmJzyrcA2pAm7EJLzNGRzGFjIpG5OzG5wBma3GG2bJnqHxgJQOdHU78pNu%2FvNSzS7s3o7C0Eia1wp2gN8%2FyfTOfJMuEx%2BFFX%2FLsAPHe1PKsbXLYDJC6WMVjNYwg%2F9mc52ZpbD7VSt02sJ%2FFSFhiDOI2WtXDAl4GzWVLUBtXmWtBPemdQ7I5W%2BtmiLijrfdcYwrn0TOe7IBFRHLZhqa9de6nVcP1hW71hs%2F47Kpk%2F8HkWMIIKq%2By6vFe%2FNZUqV%2FT%2FEDdqrYpbYSr1IOFtd9WnR40ZQnvWBOae8%2BXVJG0c%2FIcT7AJadP%2BUqq3KK1vkB1PW5%2BgYAPuJokvbRe2jNsZj54d0gAY%2Foy8c3YmTHzPB3mNyTSCVTQzoxcn4r%2BUFAgBn6SEMiicuyQvsIOECws8Vc%2FoLF0aj7QBFxHNUXIvYpI0jNVAbNHYI%2FoqcJfVSeLaROqlrJ0O9S9eobhCFF%2BcvbN0q3e%2Ba0apmC53T0fiXPRwFTge9FKjCUBXAb0vXPaIPBas4mcaX6mE2SiVGVNMH4gmAQTHh%2FBB%2FJTlyWDmooPcFVzqmfZoMXmihpGCHt6aWE7AdoNcGUB0asxHcmkUm%2FS3Cwm7ld3zuEvomLuVMj4YrJQTzwQr7YOZV5BmyP2LVhqoMP6Umr8GOqUB%2ByQjhsupZnRnWghoNEIzlt7YWD40kKAUqZy28wc%2FrgGsPTfzUCH8eVcvqUBYyFc3jjEa2zTy1%2Btwta7Xzna82%2Be%2Bo2P19h6zqaBGBatz6tBudMqeyiQeEAJKH2nVSPeszWUEM9CX4MEtybnq%2FZ3CAtUE2uRR3kpfr30Dz4xeJzF4z8151GZ2du%2BBmqbPM%2FM3jGhnvK53uQXYIC3HLMW%2BEKt6xKAf&X-Amz-Signature=6bf961faa38521a5de0999bffec112fc67729a84e48dff927da46bf54d67ff87&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NEMEQOD%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB41ZDRLjvuEUnzNBz%2F93i031AC22OdBvPRyCxLeezJkAiEA0GEfG57GNEbWRxmvNP1L4tcIB%2FE%2FF%2FMsisr%2BHJAK1U4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHV2iPEih4kj9jmJzyrcA2pAm7EJLzNGRzGFjIpG5OzG5wBma3GG2bJnqHxgJQOdHU78pNu%2FvNSzS7s3o7C0Eia1wp2gN8%2FyfTOfJMuEx%2BFFX%2FLsAPHe1PKsbXLYDJC6WMVjNYwg%2F9mc52ZpbD7VSt02sJ%2FFSFhiDOI2WtXDAl4GzWVLUBtXmWtBPemdQ7I5W%2BtmiLijrfdcYwrn0TOe7IBFRHLZhqa9de6nVcP1hW71hs%2F47Kpk%2F8HkWMIIKq%2By6vFe%2FNZUqV%2FT%2FEDdqrYpbYSr1IOFtd9WnR40ZQnvWBOae8%2BXVJG0c%2FIcT7AJadP%2BUqq3KK1vkB1PW5%2BgYAPuJokvbRe2jNsZj54d0gAY%2Foy8c3YmTHzPB3mNyTSCVTQzoxcn4r%2BUFAgBn6SEMiicuyQvsIOECws8Vc%2FoLF0aj7QBFxHNUXIvYpI0jNVAbNHYI%2FoqcJfVSeLaROqlrJ0O9S9eobhCFF%2BcvbN0q3e%2Ba0apmC53T0fiXPRwFTge9FKjCUBXAb0vXPaIPBas4mcaX6mE2SiVGVNMH4gmAQTHh%2FBB%2FJTlyWDmooPcFVzqmfZoMXmihpGCHt6aWE7AdoNcGUB0asxHcmkUm%2FS3Cwm7ld3zuEvomLuVMj4YrJQTzwQr7YOZV5BmyP2LVhqoMP6Umr8GOqUB%2ByQjhsupZnRnWghoNEIzlt7YWD40kKAUqZy28wc%2FrgGsPTfzUCH8eVcvqUBYyFc3jjEa2zTy1%2Btwta7Xzna82%2Be%2Bo2P19h6zqaBGBatz6tBudMqeyiQeEAJKH2nVSPeszWUEM9CX4MEtybnq%2FZ3CAtUE2uRR3kpfr30Dz4xeJzF4z8151GZ2du%2BBmqbPM%2FM3jGhnvK53uQXYIC3HLMW%2BEKt6xKAf&X-Amz-Signature=270ad01b067604b774b1f5246646260d403c02cd23a2fb0d9f9d6c80ffec06c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NEMEQOD%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB41ZDRLjvuEUnzNBz%2F93i031AC22OdBvPRyCxLeezJkAiEA0GEfG57GNEbWRxmvNP1L4tcIB%2FE%2FF%2FMsisr%2BHJAK1U4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHV2iPEih4kj9jmJzyrcA2pAm7EJLzNGRzGFjIpG5OzG5wBma3GG2bJnqHxgJQOdHU78pNu%2FvNSzS7s3o7C0Eia1wp2gN8%2FyfTOfJMuEx%2BFFX%2FLsAPHe1PKsbXLYDJC6WMVjNYwg%2F9mc52ZpbD7VSt02sJ%2FFSFhiDOI2WtXDAl4GzWVLUBtXmWtBPemdQ7I5W%2BtmiLijrfdcYwrn0TOe7IBFRHLZhqa9de6nVcP1hW71hs%2F47Kpk%2F8HkWMIIKq%2By6vFe%2FNZUqV%2FT%2FEDdqrYpbYSr1IOFtd9WnR40ZQnvWBOae8%2BXVJG0c%2FIcT7AJadP%2BUqq3KK1vkB1PW5%2BgYAPuJokvbRe2jNsZj54d0gAY%2Foy8c3YmTHzPB3mNyTSCVTQzoxcn4r%2BUFAgBn6SEMiicuyQvsIOECws8Vc%2FoLF0aj7QBFxHNUXIvYpI0jNVAbNHYI%2FoqcJfVSeLaROqlrJ0O9S9eobhCFF%2BcvbN0q3e%2Ba0apmC53T0fiXPRwFTge9FKjCUBXAb0vXPaIPBas4mcaX6mE2SiVGVNMH4gmAQTHh%2FBB%2FJTlyWDmooPcFVzqmfZoMXmihpGCHt6aWE7AdoNcGUB0asxHcmkUm%2FS3Cwm7ld3zuEvomLuVMj4YrJQTzwQr7YOZV5BmyP2LVhqoMP6Umr8GOqUB%2ByQjhsupZnRnWghoNEIzlt7YWD40kKAUqZy28wc%2FrgGsPTfzUCH8eVcvqUBYyFc3jjEa2zTy1%2Btwta7Xzna82%2Be%2Bo2P19h6zqaBGBatz6tBudMqeyiQeEAJKH2nVSPeszWUEM9CX4MEtybnq%2FZ3CAtUE2uRR3kpfr30Dz4xeJzF4z8151GZ2du%2BBmqbPM%2FM3jGhnvK53uQXYIC3HLMW%2BEKt6xKAf&X-Amz-Signature=e8dc9e21ad1fe08711fbd771fc2b16927cab933a31b5a3acc03b4c11f0e48df9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
