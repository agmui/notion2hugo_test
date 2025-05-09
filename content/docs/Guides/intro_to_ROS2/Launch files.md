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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZQBJGIR%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5A9luHQ2OiO9jqnCjevI2u2t%2FNG4q7xUIZafrRKpEiAiBNSVvQpsKafdA9%2F%2BgqhHM7WTyEzFLUUBx2FrrEPc8vEyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0w90HVqUVQM72XHLKtwDXc6FOfNh%2FSxNgUHsunvbIhA7mnmgqxoFWFAOnIml69L%2BrXhQQqCUW7S0XvB9%2BNHuRAIEURtd3gVEpCgfIBuz2WV5nNV2Sz8NJAuj9BkerDgWxzteoHRy4nQ54auI2binpeUgfkdavounOq0wGxgx%2Fc9OHBM1eIPRdRMbu5ghLuUO2hCZxhfhgtnLetwJUOFVtgFc6rgGsE7ArrbXoxmwOoAPrWqb6xhpj7m4goxnbNpvf9sKVYHgeymw%2B%2BPCAfs4bMtdiMNaxBBVg3Hb7T9xKV3Lx52IbWJgQLgmUfEqTX3fU84hUkvahSQTWm6lbO94zH5qqGLl%2Bks%2FaHSqP7L68EHK81cPy18ZrxFg5qDHbfCZArIuWMhFYb1cbqMzjzWAEAf2J1%2Fx4l%2FD75541kkonDsn7bMHRdpftOq91tmGGAhVzp5j6C9T4ySp%2BehFc8x8dGA2GtkXTByXU22aHI8vEo4FddZ2crRi83Io0lMlgtaW7mtrdgMvbByvDLHnmow6f6wVj5Oh6P1iMACtOugtggZOAVFFE%2F52AzbyPaLPkXIWrDBEkcEuhjMQp9blZGJI9%2BfOIdTX70sdodGSxjOHD36CbOT3uvieS50%2FsZy1gW8C%2Fch7CgkibJdsKWUwnfn2wAY6pgHctK8%2Bz%2F2LP6Bt6dSymRqwXVlP8VoOuwUHksh%2BQ2bvls07YyjNraeAV5vp1IH1izih3Xs5LTlwIQshE7vvqfRqqJyinst83ELyDkWcKN7nJmOUlMIlfK7t3jQ4Rhy59kvvZ1oP%2F0pCUIl8iNLx1JOdFEuyORBXpPIt1qrmu1twaQOIJgveZlYK%2Bx25I7d9CAy6PBiH6bkN1o3VypTKOs7%2FdqHA%2FS6D&X-Amz-Signature=d4330bfa6dba3ce1eb4499467bc4b8c8b642acad92c7cafbd0694b1330574aa4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZQBJGIR%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5A9luHQ2OiO9jqnCjevI2u2t%2FNG4q7xUIZafrRKpEiAiBNSVvQpsKafdA9%2F%2BgqhHM7WTyEzFLUUBx2FrrEPc8vEyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0w90HVqUVQM72XHLKtwDXc6FOfNh%2FSxNgUHsunvbIhA7mnmgqxoFWFAOnIml69L%2BrXhQQqCUW7S0XvB9%2BNHuRAIEURtd3gVEpCgfIBuz2WV5nNV2Sz8NJAuj9BkerDgWxzteoHRy4nQ54auI2binpeUgfkdavounOq0wGxgx%2Fc9OHBM1eIPRdRMbu5ghLuUO2hCZxhfhgtnLetwJUOFVtgFc6rgGsE7ArrbXoxmwOoAPrWqb6xhpj7m4goxnbNpvf9sKVYHgeymw%2B%2BPCAfs4bMtdiMNaxBBVg3Hb7T9xKV3Lx52IbWJgQLgmUfEqTX3fU84hUkvahSQTWm6lbO94zH5qqGLl%2Bks%2FaHSqP7L68EHK81cPy18ZrxFg5qDHbfCZArIuWMhFYb1cbqMzjzWAEAf2J1%2Fx4l%2FD75541kkonDsn7bMHRdpftOq91tmGGAhVzp5j6C9T4ySp%2BehFc8x8dGA2GtkXTByXU22aHI8vEo4FddZ2crRi83Io0lMlgtaW7mtrdgMvbByvDLHnmow6f6wVj5Oh6P1iMACtOugtggZOAVFFE%2F52AzbyPaLPkXIWrDBEkcEuhjMQp9blZGJI9%2BfOIdTX70sdodGSxjOHD36CbOT3uvieS50%2FsZy1gW8C%2Fch7CgkibJdsKWUwnfn2wAY6pgHctK8%2Bz%2F2LP6Bt6dSymRqwXVlP8VoOuwUHksh%2BQ2bvls07YyjNraeAV5vp1IH1izih3Xs5LTlwIQshE7vvqfRqqJyinst83ELyDkWcKN7nJmOUlMIlfK7t3jQ4Rhy59kvvZ1oP%2F0pCUIl8iNLx1JOdFEuyORBXpPIt1qrmu1twaQOIJgveZlYK%2Bx25I7d9CAy6PBiH6bkN1o3VypTKOs7%2FdqHA%2FS6D&X-Amz-Signature=1f7e658494b3c320a7fbaeac17b510d596ae1f62ab91fdb3d1e0a6dc67b46528&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZQBJGIR%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5A9luHQ2OiO9jqnCjevI2u2t%2FNG4q7xUIZafrRKpEiAiBNSVvQpsKafdA9%2F%2BgqhHM7WTyEzFLUUBx2FrrEPc8vEyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0w90HVqUVQM72XHLKtwDXc6FOfNh%2FSxNgUHsunvbIhA7mnmgqxoFWFAOnIml69L%2BrXhQQqCUW7S0XvB9%2BNHuRAIEURtd3gVEpCgfIBuz2WV5nNV2Sz8NJAuj9BkerDgWxzteoHRy4nQ54auI2binpeUgfkdavounOq0wGxgx%2Fc9OHBM1eIPRdRMbu5ghLuUO2hCZxhfhgtnLetwJUOFVtgFc6rgGsE7ArrbXoxmwOoAPrWqb6xhpj7m4goxnbNpvf9sKVYHgeymw%2B%2BPCAfs4bMtdiMNaxBBVg3Hb7T9xKV3Lx52IbWJgQLgmUfEqTX3fU84hUkvahSQTWm6lbO94zH5qqGLl%2Bks%2FaHSqP7L68EHK81cPy18ZrxFg5qDHbfCZArIuWMhFYb1cbqMzjzWAEAf2J1%2Fx4l%2FD75541kkonDsn7bMHRdpftOq91tmGGAhVzp5j6C9T4ySp%2BehFc8x8dGA2GtkXTByXU22aHI8vEo4FddZ2crRi83Io0lMlgtaW7mtrdgMvbByvDLHnmow6f6wVj5Oh6P1iMACtOugtggZOAVFFE%2F52AzbyPaLPkXIWrDBEkcEuhjMQp9blZGJI9%2BfOIdTX70sdodGSxjOHD36CbOT3uvieS50%2FsZy1gW8C%2Fch7CgkibJdsKWUwnfn2wAY6pgHctK8%2Bz%2F2LP6Bt6dSymRqwXVlP8VoOuwUHksh%2BQ2bvls07YyjNraeAV5vp1IH1izih3Xs5LTlwIQshE7vvqfRqqJyinst83ELyDkWcKN7nJmOUlMIlfK7t3jQ4Rhy59kvvZ1oP%2F0pCUIl8iNLx1JOdFEuyORBXpPIt1qrmu1twaQOIJgveZlYK%2Bx25I7d9CAy6PBiH6bkN1o3VypTKOs7%2FdqHA%2FS6D&X-Amz-Signature=5f6c50caede2c088634f177d09065906c3f2720155ef5f17c0d150670c360aaf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
