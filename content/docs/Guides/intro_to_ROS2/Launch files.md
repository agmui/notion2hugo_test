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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ALYFIBM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT41ARqFJ2GJsec%2FiYQ3ixLvVPU8Mid8Y8PYoll8zrTQIhAMXz%2FriJiKCPONQ5O1%2FjwsFc8NAjcoCeTQca9rDWgRmzKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy23%2BDzn7auUadxHasq3AOMn1aD2LUDDiTqq804FNNi2mpBxmqAmJnItEGSW5clhpZyc8Y0qh96W%2BJweu2LANbQQ6S%2Fz9Xey5jk4xIxwbBMTiV6qBeqa7IHxaxM2CjKOvv%2FLlkii4%2FkWCiTv%2Fw%2B1PqH97EUgpibsAg8yiB9F7RoB%2BRdipT0GucuP8p5pDicuJmNXjnXCF7M0Hske8k9senCcx2Hbv66ZbL4td20%2FH7OoUWftPl0sEJf2Kiv18J7%2FV5fIH384N%2Fx1BvUA7u4n9LJJe4AvXbRFdv%2Bsov48Wd%2Fc0htcR%2F2bGNcU%2Bw38R7bdrEhzR%2BUS6ZsbeJH0y6AeNGmh7O668yRRoQtgJ8fKlT7IPX878gQklwsaCrMTZszpd%2BkOW7K5FNXfgFxAPP57tFiHLsC%2FaBy70O6twH7T8yugsUIXWWVIj8zGIZfn%2FWY50Q%2BnyQ7nOpG9xPDDJMPSIJD0ptHzDG9O0mD1JyJMER96idaMDFJYTwe8z42SHt4DNDuji%2Bl5cwqcnOrj4E5kdDM%2FoxXY1XGz4n2YoSxj0VQVqxjxtDShSlDYrwblgR3DHLD75C5%2Fab%2F66%2BjVgF1nVAlHeLICCR%2Fi9YL0jkPadd5NFbTWJeLgGCFfECKRPiYM3XeCLEz8ltM20lyrDCP1uq9BjqkAeZAbhjtxHfIbE9hugVKxjIuqQKOKXubDrMr%2FNEG7iJoKtDSrHYz6p9vT52NWyRJJwQD8cP1GgdMGKMjdmJqeDB%2F77WnekUTHd%2BI68suZHKcKkutRsi3QqjuP%2BdpRmF9r1Ld1y5sGlayZjHInEbNl44dn88EleZgnD%2F4IlheFJdYFS9LEYKSB6zaNM%2F9V4FNUjW14zx5RpfG%2BBTOiXzUEYLXYkRe&X-Amz-Signature=bec6f3595f065908ecffab0614523031273987baf162ea968f3395fe5c09bbe0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ALYFIBM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT41ARqFJ2GJsec%2FiYQ3ixLvVPU8Mid8Y8PYoll8zrTQIhAMXz%2FriJiKCPONQ5O1%2FjwsFc8NAjcoCeTQca9rDWgRmzKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy23%2BDzn7auUadxHasq3AOMn1aD2LUDDiTqq804FNNi2mpBxmqAmJnItEGSW5clhpZyc8Y0qh96W%2BJweu2LANbQQ6S%2Fz9Xey5jk4xIxwbBMTiV6qBeqa7IHxaxM2CjKOvv%2FLlkii4%2FkWCiTv%2Fw%2B1PqH97EUgpibsAg8yiB9F7RoB%2BRdipT0GucuP8p5pDicuJmNXjnXCF7M0Hske8k9senCcx2Hbv66ZbL4td20%2FH7OoUWftPl0sEJf2Kiv18J7%2FV5fIH384N%2Fx1BvUA7u4n9LJJe4AvXbRFdv%2Bsov48Wd%2Fc0htcR%2F2bGNcU%2Bw38R7bdrEhzR%2BUS6ZsbeJH0y6AeNGmh7O668yRRoQtgJ8fKlT7IPX878gQklwsaCrMTZszpd%2BkOW7K5FNXfgFxAPP57tFiHLsC%2FaBy70O6twH7T8yugsUIXWWVIj8zGIZfn%2FWY50Q%2BnyQ7nOpG9xPDDJMPSIJD0ptHzDG9O0mD1JyJMER96idaMDFJYTwe8z42SHt4DNDuji%2Bl5cwqcnOrj4E5kdDM%2FoxXY1XGz4n2YoSxj0VQVqxjxtDShSlDYrwblgR3DHLD75C5%2Fab%2F66%2BjVgF1nVAlHeLICCR%2Fi9YL0jkPadd5NFbTWJeLgGCFfECKRPiYM3XeCLEz8ltM20lyrDCP1uq9BjqkAeZAbhjtxHfIbE9hugVKxjIuqQKOKXubDrMr%2FNEG7iJoKtDSrHYz6p9vT52NWyRJJwQD8cP1GgdMGKMjdmJqeDB%2F77WnekUTHd%2BI68suZHKcKkutRsi3QqjuP%2BdpRmF9r1Ld1y5sGlayZjHInEbNl44dn88EleZgnD%2F4IlheFJdYFS9LEYKSB6zaNM%2F9V4FNUjW14zx5RpfG%2BBTOiXzUEYLXYkRe&X-Amz-Signature=b404b8f80b992a989a6a04e37835e06cd604c2d5f1d00dce892dd6b3d611c854&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ALYFIBM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT41ARqFJ2GJsec%2FiYQ3ixLvVPU8Mid8Y8PYoll8zrTQIhAMXz%2FriJiKCPONQ5O1%2FjwsFc8NAjcoCeTQca9rDWgRmzKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy23%2BDzn7auUadxHasq3AOMn1aD2LUDDiTqq804FNNi2mpBxmqAmJnItEGSW5clhpZyc8Y0qh96W%2BJweu2LANbQQ6S%2Fz9Xey5jk4xIxwbBMTiV6qBeqa7IHxaxM2CjKOvv%2FLlkii4%2FkWCiTv%2Fw%2B1PqH97EUgpibsAg8yiB9F7RoB%2BRdipT0GucuP8p5pDicuJmNXjnXCF7M0Hske8k9senCcx2Hbv66ZbL4td20%2FH7OoUWftPl0sEJf2Kiv18J7%2FV5fIH384N%2Fx1BvUA7u4n9LJJe4AvXbRFdv%2Bsov48Wd%2Fc0htcR%2F2bGNcU%2Bw38R7bdrEhzR%2BUS6ZsbeJH0y6AeNGmh7O668yRRoQtgJ8fKlT7IPX878gQklwsaCrMTZszpd%2BkOW7K5FNXfgFxAPP57tFiHLsC%2FaBy70O6twH7T8yugsUIXWWVIj8zGIZfn%2FWY50Q%2BnyQ7nOpG9xPDDJMPSIJD0ptHzDG9O0mD1JyJMER96idaMDFJYTwe8z42SHt4DNDuji%2Bl5cwqcnOrj4E5kdDM%2FoxXY1XGz4n2YoSxj0VQVqxjxtDShSlDYrwblgR3DHLD75C5%2Fab%2F66%2BjVgF1nVAlHeLICCR%2Fi9YL0jkPadd5NFbTWJeLgGCFfECKRPiYM3XeCLEz8ltM20lyrDCP1uq9BjqkAeZAbhjtxHfIbE9hugVKxjIuqQKOKXubDrMr%2FNEG7iJoKtDSrHYz6p9vT52NWyRJJwQD8cP1GgdMGKMjdmJqeDB%2F77WnekUTHd%2BI68suZHKcKkutRsi3QqjuP%2BdpRmF9r1Ld1y5sGlayZjHInEbNl44dn88EleZgnD%2F4IlheFJdYFS9LEYKSB6zaNM%2F9V4FNUjW14zx5RpfG%2BBTOiXzUEYLXYkRe&X-Amz-Signature=5cbd03382d22aa03c00438de46a9f775c2ec0d7c44b4209eda62b4d5a1229136&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
