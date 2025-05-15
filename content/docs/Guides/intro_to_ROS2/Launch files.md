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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FYL2HJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDEtlSBWCCwsZchIHNOEqG3R3wTaLtBefqEFQ8dB4BhBQIhANN136EIJU3JbDOMytlpv5uFiFF%2Bv5Gkd%2Bwywwmwd5NhKv8DCC0QABoMNjM3NDIzMTgzODA1Igxhg%2FEVTdZ0XX9RoJgq3APWehx6uyqijisoRAi%2Bplc6MgQyyTeHirAGEfe%2FF4v5NpOAcAB4FBAJ38HbdXub5%2BegNf9S%2FQuawfjAZ9JwXs2w7YF20JImQL%2FK9nnrFNSn6pZx0rIrzPHjP7V%2B%2BXD6ybb3n2RdQHDe76edY0npXs%2Bb%2BH1CQ7F%2B8SG6NB%2F7vhqJRrL7SZI%2FD4%2Fno%2BfhmUo7z2Gn8fs0iHF%2Bb8AVFwK82t%2BSvZuRTEaKehbYFJkPIOqQy6WIiarhh%2FqF%2F8g%2FNT9O5GvG7wp7qa%2BbiRq79IeBmsmLDJi4Tt3ywNotg1SsOdfHegmyElJx2O0hb2mspmeNJNBgXtYb6SiHHW%2Ft6ZrBlcHGgRcboD%2FfupSIGAifDitvRihrOQ4JQRk7PeUWauPSiet4d8wKQJJCY%2FRNqMdOk6i7iniVEONoyLp1dIGm9gz9z2wSdRoCreUyqym0Duxb2tmR2ox%2FYt%2F6Tyl5lgjo7JNw7msYKQuccj1EGiETm5r2%2BeUfZYMIo1kQPiE%2FIs%2FM5vyHZ7g1Jju7C02ROK%2BLSAh%2BTHNO%2BDLVEnmh7Le7WdssIHce%2FfhFelgeY2ePj0Ko5as1UfYW3ASMbvCGGezQIxAnBbBOSK2chOSDgiexLVlmrMESVmVdrlPZrrqBpjCDoZfBBjqkAZkA72RihI%2F68KRLiD1PgxnKZhZ34t0N3k2P8nIFe5xJrmg37385tKBT9d2jU9B7D8Y1XT9V5c38N%2FfzFkuHs8ERQg6puAaQAADkIlS%2BFchi%2FDzWf%2BJxRuUX7Ec%2FkG4X4ewfORCHReGQ2UBkKPcLDuXbZZZdpGQNy9WlPjR01WourwrAUoz%2FapPu7nJ9rXNF6dB%2FuvhYJv4C9637J7r%2BktJsnZbC&X-Amz-Signature=c9c0f3a7a7fad9eb9ec3082f21c3c9db8fb2f07737f0a5c623b66efb75e2f867&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FYL2HJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDEtlSBWCCwsZchIHNOEqG3R3wTaLtBefqEFQ8dB4BhBQIhANN136EIJU3JbDOMytlpv5uFiFF%2Bv5Gkd%2Bwywwmwd5NhKv8DCC0QABoMNjM3NDIzMTgzODA1Igxhg%2FEVTdZ0XX9RoJgq3APWehx6uyqijisoRAi%2Bplc6MgQyyTeHirAGEfe%2FF4v5NpOAcAB4FBAJ38HbdXub5%2BegNf9S%2FQuawfjAZ9JwXs2w7YF20JImQL%2FK9nnrFNSn6pZx0rIrzPHjP7V%2B%2BXD6ybb3n2RdQHDe76edY0npXs%2Bb%2BH1CQ7F%2B8SG6NB%2F7vhqJRrL7SZI%2FD4%2Fno%2BfhmUo7z2Gn8fs0iHF%2Bb8AVFwK82t%2BSvZuRTEaKehbYFJkPIOqQy6WIiarhh%2FqF%2F8g%2FNT9O5GvG7wp7qa%2BbiRq79IeBmsmLDJi4Tt3ywNotg1SsOdfHegmyElJx2O0hb2mspmeNJNBgXtYb6SiHHW%2Ft6ZrBlcHGgRcboD%2FfupSIGAifDitvRihrOQ4JQRk7PeUWauPSiet4d8wKQJJCY%2FRNqMdOk6i7iniVEONoyLp1dIGm9gz9z2wSdRoCreUyqym0Duxb2tmR2ox%2FYt%2F6Tyl5lgjo7JNw7msYKQuccj1EGiETm5r2%2BeUfZYMIo1kQPiE%2FIs%2FM5vyHZ7g1Jju7C02ROK%2BLSAh%2BTHNO%2BDLVEnmh7Le7WdssIHce%2FfhFelgeY2ePj0Ko5as1UfYW3ASMbvCGGezQIxAnBbBOSK2chOSDgiexLVlmrMESVmVdrlPZrrqBpjCDoZfBBjqkAZkA72RihI%2F68KRLiD1PgxnKZhZ34t0N3k2P8nIFe5xJrmg37385tKBT9d2jU9B7D8Y1XT9V5c38N%2FfzFkuHs8ERQg6puAaQAADkIlS%2BFchi%2FDzWf%2BJxRuUX7Ec%2FkG4X4ewfORCHReGQ2UBkKPcLDuXbZZZdpGQNy9WlPjR01WourwrAUoz%2FapPu7nJ9rXNF6dB%2FuvhYJv4C9637J7r%2BktJsnZbC&X-Amz-Signature=8d21a0ab812c90b4cfb100a8de9bec0887c4a4155efaa4787dea329da26da728&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FYL2HJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDEtlSBWCCwsZchIHNOEqG3R3wTaLtBefqEFQ8dB4BhBQIhANN136EIJU3JbDOMytlpv5uFiFF%2Bv5Gkd%2Bwywwmwd5NhKv8DCC0QABoMNjM3NDIzMTgzODA1Igxhg%2FEVTdZ0XX9RoJgq3APWehx6uyqijisoRAi%2Bplc6MgQyyTeHirAGEfe%2FF4v5NpOAcAB4FBAJ38HbdXub5%2BegNf9S%2FQuawfjAZ9JwXs2w7YF20JImQL%2FK9nnrFNSn6pZx0rIrzPHjP7V%2B%2BXD6ybb3n2RdQHDe76edY0npXs%2Bb%2BH1CQ7F%2B8SG6NB%2F7vhqJRrL7SZI%2FD4%2Fno%2BfhmUo7z2Gn8fs0iHF%2Bb8AVFwK82t%2BSvZuRTEaKehbYFJkPIOqQy6WIiarhh%2FqF%2F8g%2FNT9O5GvG7wp7qa%2BbiRq79IeBmsmLDJi4Tt3ywNotg1SsOdfHegmyElJx2O0hb2mspmeNJNBgXtYb6SiHHW%2Ft6ZrBlcHGgRcboD%2FfupSIGAifDitvRihrOQ4JQRk7PeUWauPSiet4d8wKQJJCY%2FRNqMdOk6i7iniVEONoyLp1dIGm9gz9z2wSdRoCreUyqym0Duxb2tmR2ox%2FYt%2F6Tyl5lgjo7JNw7msYKQuccj1EGiETm5r2%2BeUfZYMIo1kQPiE%2FIs%2FM5vyHZ7g1Jju7C02ROK%2BLSAh%2BTHNO%2BDLVEnmh7Le7WdssIHce%2FfhFelgeY2ePj0Ko5as1UfYW3ASMbvCGGezQIxAnBbBOSK2chOSDgiexLVlmrMESVmVdrlPZrrqBpjCDoZfBBjqkAZkA72RihI%2F68KRLiD1PgxnKZhZ34t0N3k2P8nIFe5xJrmg37385tKBT9d2jU9B7D8Y1XT9V5c38N%2FfzFkuHs8ERQg6puAaQAADkIlS%2BFchi%2FDzWf%2BJxRuUX7Ec%2FkG4X4ewfORCHReGQ2UBkKPcLDuXbZZZdpGQNy9WlPjR01WourwrAUoz%2FapPu7nJ9rXNF6dB%2FuvhYJv4C9637J7r%2BktJsnZbC&X-Amz-Signature=10fbe5085249fcae0170ba18fd4af689d03c59d06d72bd7832e12c441d4fc808&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
