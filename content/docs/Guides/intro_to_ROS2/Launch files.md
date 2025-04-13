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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BTS64DT%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDfsNsFg26S5ZKARq%2BPgEUfs4QaErq%2FvL%2FjxptKWjcSNAIgGUeUtuJbf0z2iOKsCZH9e1DiUmC46P9zqTbjqoiIXWgqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrvJ4aQH7kbSeDHGSrcAymL18m3EIOe8bYZzJS%2BvKByio8RO2JCvcpnrtjIfOQkNXyuGhdgqYYx0Hc9ruVsjdUZYbKpUyDk4a59O6NAg7uWAgyzRjiWRyTU%2F5ddvskZKU8zM1pNST1%2FC%2Bca6uZRrHiTMxEmZfkcArbSIcbLahX3xavKMetW%2FjvS5pINWuGT9RuAudJ6jZiplDo9%2FsqxRuvC5jThg%2FHUcN9qi8lG5Ns%2FVDJMCajPkK4ed7iq1hJBCQaeM9PekaC%2BLirKGUnyIkMPaRso%2B5B6Xt%2BlQnAOwuYQA5EtTA3ZyDvJQ3OjMxEgLe5%2FtZq6WuZN0mL351cn7wJpp5IratDH%2FVfVYIAUR4G6NRcEVIOZW4jaEwZKMUXtBIpkqUlCiJJ0RAQIpU1iFn5Vb3twXgUUGnBKNGf12ZgSgpY1ZQYPVApPq1mvav08zr%2FMtJ292Alr9qCUEBTF%2BnGPn3BAqm9M6O3RLvpL49PhY%2F1y8xEwxP5Iw7wp%2FRuykR2fWBNsn0lAZWEjPa2f0Toug2a6bIz9pPk1thWO%2BhG2U4iMxET6fbdqqGku6u9aCIFuBBphywbPK8Or50U8a9UOup0X9QeGutTrEyNmxJiMljExAznvel%2BO%2ByFLW8Wdz7L2qZwdAD03gs63MKqK778GOqUBfe1n%2BTno%2BJLQJORF5AjCe0mDkmsaWzcZKff%2FaoRADjelajJI09M8ZyEIdNUOE99Y6zaqmlXazxy84nfoTV26p8Mh1RNiBEC8FbNa3aNmAEq0zLNCwbua7PqnlsBrIWUb0MY8hA%2FgNYzKizWW5R3Q%2BZLTgHRE6Rv4QDdthJ3FpNINFwaT5RgPodaKxANe0vLDy%2FrpjKP9ljlMex4rKi27SBHEpZTo&X-Amz-Signature=2482af931a9407cd0f27662c97ce6f05118d745d5d245ed08a83a4b5d5632ec8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BTS64DT%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDfsNsFg26S5ZKARq%2BPgEUfs4QaErq%2FvL%2FjxptKWjcSNAIgGUeUtuJbf0z2iOKsCZH9e1DiUmC46P9zqTbjqoiIXWgqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrvJ4aQH7kbSeDHGSrcAymL18m3EIOe8bYZzJS%2BvKByio8RO2JCvcpnrtjIfOQkNXyuGhdgqYYx0Hc9ruVsjdUZYbKpUyDk4a59O6NAg7uWAgyzRjiWRyTU%2F5ddvskZKU8zM1pNST1%2FC%2Bca6uZRrHiTMxEmZfkcArbSIcbLahX3xavKMetW%2FjvS5pINWuGT9RuAudJ6jZiplDo9%2FsqxRuvC5jThg%2FHUcN9qi8lG5Ns%2FVDJMCajPkK4ed7iq1hJBCQaeM9PekaC%2BLirKGUnyIkMPaRso%2B5B6Xt%2BlQnAOwuYQA5EtTA3ZyDvJQ3OjMxEgLe5%2FtZq6WuZN0mL351cn7wJpp5IratDH%2FVfVYIAUR4G6NRcEVIOZW4jaEwZKMUXtBIpkqUlCiJJ0RAQIpU1iFn5Vb3twXgUUGnBKNGf12ZgSgpY1ZQYPVApPq1mvav08zr%2FMtJ292Alr9qCUEBTF%2BnGPn3BAqm9M6O3RLvpL49PhY%2F1y8xEwxP5Iw7wp%2FRuykR2fWBNsn0lAZWEjPa2f0Toug2a6bIz9pPk1thWO%2BhG2U4iMxET6fbdqqGku6u9aCIFuBBphywbPK8Or50U8a9UOup0X9QeGutTrEyNmxJiMljExAznvel%2BO%2ByFLW8Wdz7L2qZwdAD03gs63MKqK778GOqUBfe1n%2BTno%2BJLQJORF5AjCe0mDkmsaWzcZKff%2FaoRADjelajJI09M8ZyEIdNUOE99Y6zaqmlXazxy84nfoTV26p8Mh1RNiBEC8FbNa3aNmAEq0zLNCwbua7PqnlsBrIWUb0MY8hA%2FgNYzKizWW5R3Q%2BZLTgHRE6Rv4QDdthJ3FpNINFwaT5RgPodaKxANe0vLDy%2FrpjKP9ljlMex4rKi27SBHEpZTo&X-Amz-Signature=673aa3e0c5388a02e1390910f7ac35109103c65d26f197c46bf0b91a7b30c180&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BTS64DT%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDfsNsFg26S5ZKARq%2BPgEUfs4QaErq%2FvL%2FjxptKWjcSNAIgGUeUtuJbf0z2iOKsCZH9e1DiUmC46P9zqTbjqoiIXWgqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrvJ4aQH7kbSeDHGSrcAymL18m3EIOe8bYZzJS%2BvKByio8RO2JCvcpnrtjIfOQkNXyuGhdgqYYx0Hc9ruVsjdUZYbKpUyDk4a59O6NAg7uWAgyzRjiWRyTU%2F5ddvskZKU8zM1pNST1%2FC%2Bca6uZRrHiTMxEmZfkcArbSIcbLahX3xavKMetW%2FjvS5pINWuGT9RuAudJ6jZiplDo9%2FsqxRuvC5jThg%2FHUcN9qi8lG5Ns%2FVDJMCajPkK4ed7iq1hJBCQaeM9PekaC%2BLirKGUnyIkMPaRso%2B5B6Xt%2BlQnAOwuYQA5EtTA3ZyDvJQ3OjMxEgLe5%2FtZq6WuZN0mL351cn7wJpp5IratDH%2FVfVYIAUR4G6NRcEVIOZW4jaEwZKMUXtBIpkqUlCiJJ0RAQIpU1iFn5Vb3twXgUUGnBKNGf12ZgSgpY1ZQYPVApPq1mvav08zr%2FMtJ292Alr9qCUEBTF%2BnGPn3BAqm9M6O3RLvpL49PhY%2F1y8xEwxP5Iw7wp%2FRuykR2fWBNsn0lAZWEjPa2f0Toug2a6bIz9pPk1thWO%2BhG2U4iMxET6fbdqqGku6u9aCIFuBBphywbPK8Or50U8a9UOup0X9QeGutTrEyNmxJiMljExAznvel%2BO%2ByFLW8Wdz7L2qZwdAD03gs63MKqK778GOqUBfe1n%2BTno%2BJLQJORF5AjCe0mDkmsaWzcZKff%2FaoRADjelajJI09M8ZyEIdNUOE99Y6zaqmlXazxy84nfoTV26p8Mh1RNiBEC8FbNa3aNmAEq0zLNCwbua7PqnlsBrIWUb0MY8hA%2FgNYzKizWW5R3Q%2BZLTgHRE6Rv4QDdthJ3FpNINFwaT5RgPodaKxANe0vLDy%2FrpjKP9ljlMex4rKi27SBHEpZTo&X-Amz-Signature=d231926b92764e8f09410d1e7e1bb77f5a4a7ad31c94bb0e3ca35669e66e731c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
