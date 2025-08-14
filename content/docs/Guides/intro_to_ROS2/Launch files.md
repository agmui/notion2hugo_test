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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ZGHYFX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZwjy13rgSP%2FR3L8mj4TEJsEcjQc2AKTsbfHK9E751XAiEApFREDc2KkmWOjCw%2ByxKVg4mFRhTbYYCCIpi2QKwgAfMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDARwa5ZwSAvO8Yh1DCrcA0eqSpyAnGNh2ilV%2BRm9mM4EIjhd9RNTlVyo15jrN6KrWYKNYhtraaAlUNe%2Bm7ZrLDofWrB7EwJ%2Bhdj4I6%2BHjh1l22FHqeQkwwiN0aIBMhgth3WBHLjcyye1Q8mJhgd21Q%2BIINoyaYY5P1jIOOOWk%2FgZheW3Jkqd0jTfXQft8slNtxE39HCrHnKJPmZ6nHEFct09PoEXxPxHkV22Kl1qn9x1ngJMkuw%2FlIok1%2FaqIXxRvrX5w11%2FPTNoBruj%2B66ujjeMdAE9diQN3DR%2BtebkSeLeSqTWk2UnMmUEZ3VDGku7N7XpRey0pOap4NmjNwAY%2Boa9h7aus5Kbk3C1Adg7KB%2BeRpBsRNzLCvOiZRdEilXQuozwW82WjDe1XpqmIfmkHvPYX7yU0jseWAuyKDU15dPKZG2JdMBRXSU0z4yP67TIx7kVcuJmnzLCxWZnFJmCBeqMIo%2Fz0TRpM6YDhCXgoC595RXr8o3TH7%2F7s6r5Gvnx0BZDGfKqBbO79jSqcc3DubZh917YkB8WsgqKrtNuUxEbudSheYO%2BYpneoUqnWYVU0g8j8Xe5uMzUtrF%2BBKNH3LqPFri2d2elGRG%2FgcaqQ8xX47wjNfwhVH%2FpqXgkIolWLdTkwkTQeqhe280bMJKL9cQGOqUBwb9DCnv2DtrCgCgT0AaZC4818uJ1319YxxZnAMgQYOz1X2ql2um85qZg0AqLDq4Q5EgZy2zCqir8C6I7mboKyWRepsfHoswAN9P%2BKXbZTvRJ4hneX4FSMb%2BKtZ81m3VFt5XxUvK3NfUrjDF6nEAZOiy1nQKZVuXw5aDrbJxn27RQAZekYzcHvBwYhdZxGg%2Fiiq7hlCZV5i90gYiA78azTlH4nVdU&X-Amz-Signature=42108c65e7d75e60b480fd5feaf2192365acb9e8b53e1c0dc4f2abd8e1d54abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ZGHYFX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZwjy13rgSP%2FR3L8mj4TEJsEcjQc2AKTsbfHK9E751XAiEApFREDc2KkmWOjCw%2ByxKVg4mFRhTbYYCCIpi2QKwgAfMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDARwa5ZwSAvO8Yh1DCrcA0eqSpyAnGNh2ilV%2BRm9mM4EIjhd9RNTlVyo15jrN6KrWYKNYhtraaAlUNe%2Bm7ZrLDofWrB7EwJ%2Bhdj4I6%2BHjh1l22FHqeQkwwiN0aIBMhgth3WBHLjcyye1Q8mJhgd21Q%2BIINoyaYY5P1jIOOOWk%2FgZheW3Jkqd0jTfXQft8slNtxE39HCrHnKJPmZ6nHEFct09PoEXxPxHkV22Kl1qn9x1ngJMkuw%2FlIok1%2FaqIXxRvrX5w11%2FPTNoBruj%2B66ujjeMdAE9diQN3DR%2BtebkSeLeSqTWk2UnMmUEZ3VDGku7N7XpRey0pOap4NmjNwAY%2Boa9h7aus5Kbk3C1Adg7KB%2BeRpBsRNzLCvOiZRdEilXQuozwW82WjDe1XpqmIfmkHvPYX7yU0jseWAuyKDU15dPKZG2JdMBRXSU0z4yP67TIx7kVcuJmnzLCxWZnFJmCBeqMIo%2Fz0TRpM6YDhCXgoC595RXr8o3TH7%2F7s6r5Gvnx0BZDGfKqBbO79jSqcc3DubZh917YkB8WsgqKrtNuUxEbudSheYO%2BYpneoUqnWYVU0g8j8Xe5uMzUtrF%2BBKNH3LqPFri2d2elGRG%2FgcaqQ8xX47wjNfwhVH%2FpqXgkIolWLdTkwkTQeqhe280bMJKL9cQGOqUBwb9DCnv2DtrCgCgT0AaZC4818uJ1319YxxZnAMgQYOz1X2ql2um85qZg0AqLDq4Q5EgZy2zCqir8C6I7mboKyWRepsfHoswAN9P%2BKXbZTvRJ4hneX4FSMb%2BKtZ81m3VFt5XxUvK3NfUrjDF6nEAZOiy1nQKZVuXw5aDrbJxn27RQAZekYzcHvBwYhdZxGg%2Fiiq7hlCZV5i90gYiA78azTlH4nVdU&X-Amz-Signature=422e479754939234d99030ed184c1eb0925a16a49d993afa5cc30a465d77bb44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ZGHYFX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZwjy13rgSP%2FR3L8mj4TEJsEcjQc2AKTsbfHK9E751XAiEApFREDc2KkmWOjCw%2ByxKVg4mFRhTbYYCCIpi2QKwgAfMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDARwa5ZwSAvO8Yh1DCrcA0eqSpyAnGNh2ilV%2BRm9mM4EIjhd9RNTlVyo15jrN6KrWYKNYhtraaAlUNe%2Bm7ZrLDofWrB7EwJ%2Bhdj4I6%2BHjh1l22FHqeQkwwiN0aIBMhgth3WBHLjcyye1Q8mJhgd21Q%2BIINoyaYY5P1jIOOOWk%2FgZheW3Jkqd0jTfXQft8slNtxE39HCrHnKJPmZ6nHEFct09PoEXxPxHkV22Kl1qn9x1ngJMkuw%2FlIok1%2FaqIXxRvrX5w11%2FPTNoBruj%2B66ujjeMdAE9diQN3DR%2BtebkSeLeSqTWk2UnMmUEZ3VDGku7N7XpRey0pOap4NmjNwAY%2Boa9h7aus5Kbk3C1Adg7KB%2BeRpBsRNzLCvOiZRdEilXQuozwW82WjDe1XpqmIfmkHvPYX7yU0jseWAuyKDU15dPKZG2JdMBRXSU0z4yP67TIx7kVcuJmnzLCxWZnFJmCBeqMIo%2Fz0TRpM6YDhCXgoC595RXr8o3TH7%2F7s6r5Gvnx0BZDGfKqBbO79jSqcc3DubZh917YkB8WsgqKrtNuUxEbudSheYO%2BYpneoUqnWYVU0g8j8Xe5uMzUtrF%2BBKNH3LqPFri2d2elGRG%2FgcaqQ8xX47wjNfwhVH%2FpqXgkIolWLdTkwkTQeqhe280bMJKL9cQGOqUBwb9DCnv2DtrCgCgT0AaZC4818uJ1319YxxZnAMgQYOz1X2ql2um85qZg0AqLDq4Q5EgZy2zCqir8C6I7mboKyWRepsfHoswAN9P%2BKXbZTvRJ4hneX4FSMb%2BKtZ81m3VFt5XxUvK3NfUrjDF6nEAZOiy1nQKZVuXw5aDrbJxn27RQAZekYzcHvBwYhdZxGg%2Fiiq7hlCZV5i90gYiA78azTlH4nVdU&X-Amz-Signature=c93a1329cc4f2116fe9c74e7d52f97260eeb6cdbb745c0caaa86cfefaf21ed52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
