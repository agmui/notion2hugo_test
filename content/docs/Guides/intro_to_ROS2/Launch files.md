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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HFICUWJ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIArfktGOpQAoG%2BgGz9AM9Xkk7ruf5u1FR1tzjMGW4LXgAiEA8TttBpLRUt0O7tqWfYgXfR6KeKI7%2FtCCBeJTT03T8xIq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCZsqzw09p5E9K479SrcAz0CFHCmtSwtqQP0lTxkN4xl6Z8HerP9BCVA04%2FmcMLW4FsNRDewhDkoj7NBDN0XefFs6adhBNY5Qq9OTjn%2FIQCBTy5NCPmBLsL%2FVXyFAq62Scmrf5JfPFthCAY%2BfbBzNEupEDQvbZXmJpmVea8DBWSRTEZoA2Y%2FZoHoutxHtLOjIh1gz%2BnYfCnBbFji3RKaFe70gShlIR9krCAEnUvO9xpcgAEF8g%2B3SBOeXPynxHCSU%2F0XUpXd1cHRpff9f5rk1DIPuUAuxXNar2P9rap%2BiwXu%2BZ31o6coXcPb6Ddf7bQvgKcrki%2BxmN72G%2BEOP0b8MGpkES1eQvnU9vTZw5h%2BiXabXB4dlCnunM0Ki3tzhM64ONyQ97UGH5lTswjr%2BVqjeOVDjnzYu8IlZfuoSHemhOx1wqXPgWLdOssbNJ%2BUNR2X6hBixxxkm8HZYpXRQA%2BH1r3HWZwIGoN4myUpqiHl3eMNCuwjFbt17ezhjktnvcsu3wpo%2B2jAtOn9GCImea%2Fd6dEFmZ4KNhrNKdq5aF5x8rEcWHd8Mwae8ge3TjWUZNY6txBZTAZ1NjdIUDHSZo4zRnJC0TUIERM3bf6Zcd2IyrzdVGJ4x5qmpmRcYHEy4PAgcZtbEkdzhj0Xp6NeML%2FWqcMGOqUBZW%2FuBFu2%2B1gKyF93fgE52m54bXsIreOCm6uxcLPxAK2rMGywHxkpgo4ZNOIE1CWebDdzt9Tw7eV00nl61XB6OMa5BO7MxnOsMBhQkfluHiwSiEb%2FT46sCo06AyO8oMIEH9UhtYKNq6iBa0G0sDmAhWXZV2r%2FOz0DR99%2Bt%2BpLisnNSUio%2BK3WFDIMqF9ALH494iwkHvlN15a3jOyr1i8LvfYlbARp&X-Amz-Signature=70af82a0a44f02c8442a56766974ff388bc79053584b33ea78c5bd3da002e140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HFICUWJ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIArfktGOpQAoG%2BgGz9AM9Xkk7ruf5u1FR1tzjMGW4LXgAiEA8TttBpLRUt0O7tqWfYgXfR6KeKI7%2FtCCBeJTT03T8xIq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCZsqzw09p5E9K479SrcAz0CFHCmtSwtqQP0lTxkN4xl6Z8HerP9BCVA04%2FmcMLW4FsNRDewhDkoj7NBDN0XefFs6adhBNY5Qq9OTjn%2FIQCBTy5NCPmBLsL%2FVXyFAq62Scmrf5JfPFthCAY%2BfbBzNEupEDQvbZXmJpmVea8DBWSRTEZoA2Y%2FZoHoutxHtLOjIh1gz%2BnYfCnBbFji3RKaFe70gShlIR9krCAEnUvO9xpcgAEF8g%2B3SBOeXPynxHCSU%2F0XUpXd1cHRpff9f5rk1DIPuUAuxXNar2P9rap%2BiwXu%2BZ31o6coXcPb6Ddf7bQvgKcrki%2BxmN72G%2BEOP0b8MGpkES1eQvnU9vTZw5h%2BiXabXB4dlCnunM0Ki3tzhM64ONyQ97UGH5lTswjr%2BVqjeOVDjnzYu8IlZfuoSHemhOx1wqXPgWLdOssbNJ%2BUNR2X6hBixxxkm8HZYpXRQA%2BH1r3HWZwIGoN4myUpqiHl3eMNCuwjFbt17ezhjktnvcsu3wpo%2B2jAtOn9GCImea%2Fd6dEFmZ4KNhrNKdq5aF5x8rEcWHd8Mwae8ge3TjWUZNY6txBZTAZ1NjdIUDHSZo4zRnJC0TUIERM3bf6Zcd2IyrzdVGJ4x5qmpmRcYHEy4PAgcZtbEkdzhj0Xp6NeML%2FWqcMGOqUBZW%2FuBFu2%2B1gKyF93fgE52m54bXsIreOCm6uxcLPxAK2rMGywHxkpgo4ZNOIE1CWebDdzt9Tw7eV00nl61XB6OMa5BO7MxnOsMBhQkfluHiwSiEb%2FT46sCo06AyO8oMIEH9UhtYKNq6iBa0G0sDmAhWXZV2r%2FOz0DR99%2Bt%2BpLisnNSUio%2BK3WFDIMqF9ALH494iwkHvlN15a3jOyr1i8LvfYlbARp&X-Amz-Signature=e692f5d1952df25534384192b0172fa57dfdefceae7727c3202b7bffc0690c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HFICUWJ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIArfktGOpQAoG%2BgGz9AM9Xkk7ruf5u1FR1tzjMGW4LXgAiEA8TttBpLRUt0O7tqWfYgXfR6KeKI7%2FtCCBeJTT03T8xIq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCZsqzw09p5E9K479SrcAz0CFHCmtSwtqQP0lTxkN4xl6Z8HerP9BCVA04%2FmcMLW4FsNRDewhDkoj7NBDN0XefFs6adhBNY5Qq9OTjn%2FIQCBTy5NCPmBLsL%2FVXyFAq62Scmrf5JfPFthCAY%2BfbBzNEupEDQvbZXmJpmVea8DBWSRTEZoA2Y%2FZoHoutxHtLOjIh1gz%2BnYfCnBbFji3RKaFe70gShlIR9krCAEnUvO9xpcgAEF8g%2B3SBOeXPynxHCSU%2F0XUpXd1cHRpff9f5rk1DIPuUAuxXNar2P9rap%2BiwXu%2BZ31o6coXcPb6Ddf7bQvgKcrki%2BxmN72G%2BEOP0b8MGpkES1eQvnU9vTZw5h%2BiXabXB4dlCnunM0Ki3tzhM64ONyQ97UGH5lTswjr%2BVqjeOVDjnzYu8IlZfuoSHemhOx1wqXPgWLdOssbNJ%2BUNR2X6hBixxxkm8HZYpXRQA%2BH1r3HWZwIGoN4myUpqiHl3eMNCuwjFbt17ezhjktnvcsu3wpo%2B2jAtOn9GCImea%2Fd6dEFmZ4KNhrNKdq5aF5x8rEcWHd8Mwae8ge3TjWUZNY6txBZTAZ1NjdIUDHSZo4zRnJC0TUIERM3bf6Zcd2IyrzdVGJ4x5qmpmRcYHEy4PAgcZtbEkdzhj0Xp6NeML%2FWqcMGOqUBZW%2FuBFu2%2B1gKyF93fgE52m54bXsIreOCm6uxcLPxAK2rMGywHxkpgo4ZNOIE1CWebDdzt9Tw7eV00nl61XB6OMa5BO7MxnOsMBhQkfluHiwSiEb%2FT46sCo06AyO8oMIEH9UhtYKNq6iBa0G0sDmAhWXZV2r%2FOz0DR99%2Bt%2BpLisnNSUio%2BK3WFDIMqF9ALH494iwkHvlN15a3jOyr1i8LvfYlbARp&X-Amz-Signature=2c52b78346bb26e22cd4c2a69d2eff0b3eff1d44c34f918c3ce5af4175785789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
