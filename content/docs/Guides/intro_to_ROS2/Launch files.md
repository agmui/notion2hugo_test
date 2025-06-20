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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW7YXM4G%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFI%2BK9HXfY9QrW7Rye2w9S9qS%2BF%2BbMvJkblmgu8jaUApAiBCKnHJn7IFoghoaL16Jcs8zOvT2X3m4iNKfnDJNHImxiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3X7KzB8S69CgteUWKtwDXs2mAhlhL9L2NTmMeRxPTVckJE%2B%2B8CCoZMSGA4E7qm6DmKmhVR%2FOL%2FeEaYqWDpf2K3Y9KtbjNXdkvrcgXz85mqU1WqGHUlgEgL%2Fn1ns2pRlqMZPr11Mp7YRGP0n%2Fr30QpGjUWS2ocPfk8iVQlTL9q10ehAUb4HP5DMf2608J9hwrr1%2FVcSxw6wkoWnrqOPrroXslYuB6qC%2BbVGCCv%2BehmpcsAnC6hF7LvAWuGjQoc6leKggIGvwTVugcFcfANhmdSTm8laW2RdLXE%2F6ZPsarem50ZLe4Ya6yujIJvZDoHOAiDgsbkPpuKf6sWm9L5cIUVdNaMkevXxbFZrM2fIhMfeIR1o%2BAAmkgy9Otq0j0HFAZPrC%2BJemZgia%2Bnn3Sp7UuZQnUz2SfrVJrwWEs0wygNz7LWm5N8jCA4tD36TaKG2gLFkDVYh8lyGZ9GN9RLI1kexPFcO5VtCcFO90ef75ImZOUkb1e3rVCDVycRjfIz1JFpw7H8jb2sZFoC39Eie1fov25DD%2FSvqK8TxvwAVVardmBY6U8%2F9tlvljOHKfP8JIwbi7HFavIRFUzCxSnNeB3xDCJZQd03iCj%2FPLcywElpykYmxkWSlb8FD0nVMLF4bAm3uqWyPgQrNyUr%2BUwq73TwgY6pgEtrxfEjTXg90sPIEicTd9bblgaAI4c%2FfOplR%2B4H%2BRwv%2BEgFyFqF%2BgrXtFY5a%2B09TNVjyRqecHpfikHp0O2UeiGV6I%2B%2FsM7yBcZ%2BNEy%2BZak3mtXZcqajTgQ62rAsirt6OlaaXn2mqddmozmtUH4NctDLANSgaOELF85Kte8vdNM0W%2F1yrCzGyU7WM%2B%2B3PZJTSpdn8sJE5fPGBp32BPxjxVGYR4W6%2BHW&X-Amz-Signature=3cb7d927272ee911ab98c96e9fbab30adcbcad2d17628e6953d6ee258dd44a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW7YXM4G%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFI%2BK9HXfY9QrW7Rye2w9S9qS%2BF%2BbMvJkblmgu8jaUApAiBCKnHJn7IFoghoaL16Jcs8zOvT2X3m4iNKfnDJNHImxiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3X7KzB8S69CgteUWKtwDXs2mAhlhL9L2NTmMeRxPTVckJE%2B%2B8CCoZMSGA4E7qm6DmKmhVR%2FOL%2FeEaYqWDpf2K3Y9KtbjNXdkvrcgXz85mqU1WqGHUlgEgL%2Fn1ns2pRlqMZPr11Mp7YRGP0n%2Fr30QpGjUWS2ocPfk8iVQlTL9q10ehAUb4HP5DMf2608J9hwrr1%2FVcSxw6wkoWnrqOPrroXslYuB6qC%2BbVGCCv%2BehmpcsAnC6hF7LvAWuGjQoc6leKggIGvwTVugcFcfANhmdSTm8laW2RdLXE%2F6ZPsarem50ZLe4Ya6yujIJvZDoHOAiDgsbkPpuKf6sWm9L5cIUVdNaMkevXxbFZrM2fIhMfeIR1o%2BAAmkgy9Otq0j0HFAZPrC%2BJemZgia%2Bnn3Sp7UuZQnUz2SfrVJrwWEs0wygNz7LWm5N8jCA4tD36TaKG2gLFkDVYh8lyGZ9GN9RLI1kexPFcO5VtCcFO90ef75ImZOUkb1e3rVCDVycRjfIz1JFpw7H8jb2sZFoC39Eie1fov25DD%2FSvqK8TxvwAVVardmBY6U8%2F9tlvljOHKfP8JIwbi7HFavIRFUzCxSnNeB3xDCJZQd03iCj%2FPLcywElpykYmxkWSlb8FD0nVMLF4bAm3uqWyPgQrNyUr%2BUwq73TwgY6pgEtrxfEjTXg90sPIEicTd9bblgaAI4c%2FfOplR%2B4H%2BRwv%2BEgFyFqF%2BgrXtFY5a%2B09TNVjyRqecHpfikHp0O2UeiGV6I%2B%2FsM7yBcZ%2BNEy%2BZak3mtXZcqajTgQ62rAsirt6OlaaXn2mqddmozmtUH4NctDLANSgaOELF85Kte8vdNM0W%2F1yrCzGyU7WM%2B%2B3PZJTSpdn8sJE5fPGBp32BPxjxVGYR4W6%2BHW&X-Amz-Signature=f56bffae46bbb178284b6f7d828f382aa1e8946723f9f1dcf21fd5880d4dbf2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW7YXM4G%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFI%2BK9HXfY9QrW7Rye2w9S9qS%2BF%2BbMvJkblmgu8jaUApAiBCKnHJn7IFoghoaL16Jcs8zOvT2X3m4iNKfnDJNHImxiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3X7KzB8S69CgteUWKtwDXs2mAhlhL9L2NTmMeRxPTVckJE%2B%2B8CCoZMSGA4E7qm6DmKmhVR%2FOL%2FeEaYqWDpf2K3Y9KtbjNXdkvrcgXz85mqU1WqGHUlgEgL%2Fn1ns2pRlqMZPr11Mp7YRGP0n%2Fr30QpGjUWS2ocPfk8iVQlTL9q10ehAUb4HP5DMf2608J9hwrr1%2FVcSxw6wkoWnrqOPrroXslYuB6qC%2BbVGCCv%2BehmpcsAnC6hF7LvAWuGjQoc6leKggIGvwTVugcFcfANhmdSTm8laW2RdLXE%2F6ZPsarem50ZLe4Ya6yujIJvZDoHOAiDgsbkPpuKf6sWm9L5cIUVdNaMkevXxbFZrM2fIhMfeIR1o%2BAAmkgy9Otq0j0HFAZPrC%2BJemZgia%2Bnn3Sp7UuZQnUz2SfrVJrwWEs0wygNz7LWm5N8jCA4tD36TaKG2gLFkDVYh8lyGZ9GN9RLI1kexPFcO5VtCcFO90ef75ImZOUkb1e3rVCDVycRjfIz1JFpw7H8jb2sZFoC39Eie1fov25DD%2FSvqK8TxvwAVVardmBY6U8%2F9tlvljOHKfP8JIwbi7HFavIRFUzCxSnNeB3xDCJZQd03iCj%2FPLcywElpykYmxkWSlb8FD0nVMLF4bAm3uqWyPgQrNyUr%2BUwq73TwgY6pgEtrxfEjTXg90sPIEicTd9bblgaAI4c%2FfOplR%2B4H%2BRwv%2BEgFyFqF%2BgrXtFY5a%2B09TNVjyRqecHpfikHp0O2UeiGV6I%2B%2FsM7yBcZ%2BNEy%2BZak3mtXZcqajTgQ62rAsirt6OlaaXn2mqddmozmtUH4NctDLANSgaOELF85Kte8vdNM0W%2F1yrCzGyU7WM%2B%2B3PZJTSpdn8sJE5fPGBp32BPxjxVGYR4W6%2BHW&X-Amz-Signature=bd81b9aa3e3d6733f92ba180f5247c94dd26c380f2bd8e520e512de5ed040a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
