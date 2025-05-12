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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KYVBYNO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCUSQNFgqjH2udRRSr%2Bqvyep6YAws3WcOkf6bd6mrJ14wIgbMLQ8mOvuHzeX33NxVZeK4u6Fjt63HsU%2B3UCjnPRZOgqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUms3DnXO51TwCQ8CrcAwotskjon%2B%2B8MbpDywxX2aUQzCNPxOaD42CBZXpwpBUjBnZJit5gXyU0206odGx0GqlEppGYCwkw3f7q77MA6HLvTuah0xQWT%2F%2BNiGURCQuSMiNf%2F5OjeCzG%2FFiLcQ3m7SEkJImSj34pbA4aIg%2FSmeM%2B30mCQ67RLyjD1%2FKorR4grFMB0yX34ZPALWrkZaouFb2VI%2BrWNJIhKCKKnol1HyiwNPFa8G0Zax0IrOFMjKdqLwD3QW4Qobw5gyolcimn0t3ahbFAkVGVWH7NkDoOCCs%2BlDcy%2BFn4wwutvsufFEZupD4zrxNQjB%2FL1Hv%2BR1dHywhA3rPB39IFJDnKvjUT%2Fs3rNbo%2FBivnqBMXTGjCZKOThNJTfxzZDkb3tLCrDAxNEFvDVxCfM0exEXHGodDd9%2FlPk7SeR1xQwkqUguxuECYtrOkj7nhs80J41Fqvg0khhDUp%2BIwHP4RE9eGo47OKSk7NcQaGmAoiISTod%2FJXTLSsOzEArza233Rn2b5kt6ga5oKendqQo2GVFvi1j192cwWB0pxOPn7BtiN1lcM%2FCmhiJ72WOeIVvXTN5wFxBrtVgUejox88f%2FjkvXYRYBSHQWAjVGIgFT0BubBAJgGI6Su9YiH4YNBivTh4M3vnMP6Bh8EGOqUBD6l8oRGBoEanSGhoXHNQvidUl2WivGfQzOXzOyXVY53ycr7Ztlo9l47vUTPZ7tnIP%2FnMLJYba6nm1IA1PWK7sM6C5EXSfCw9Oz2v5g3KMFn%2FtzXutOscZA6ZL6hpq5wKPSw6cZJAOnVYtJK2SZBcc3d7XbAu5rAEJxNAUBT9GHGCsvUHOYbQg%2BR47zippnVZclS59fSNYZDuvmR%2FGTbTMgV6SNOT&X-Amz-Signature=af30983b556862bd207daedf4cf3c13a068ae02708de157439475661f71794d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KYVBYNO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCUSQNFgqjH2udRRSr%2Bqvyep6YAws3WcOkf6bd6mrJ14wIgbMLQ8mOvuHzeX33NxVZeK4u6Fjt63HsU%2B3UCjnPRZOgqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUms3DnXO51TwCQ8CrcAwotskjon%2B%2B8MbpDywxX2aUQzCNPxOaD42CBZXpwpBUjBnZJit5gXyU0206odGx0GqlEppGYCwkw3f7q77MA6HLvTuah0xQWT%2F%2BNiGURCQuSMiNf%2F5OjeCzG%2FFiLcQ3m7SEkJImSj34pbA4aIg%2FSmeM%2B30mCQ67RLyjD1%2FKorR4grFMB0yX34ZPALWrkZaouFb2VI%2BrWNJIhKCKKnol1HyiwNPFa8G0Zax0IrOFMjKdqLwD3QW4Qobw5gyolcimn0t3ahbFAkVGVWH7NkDoOCCs%2BlDcy%2BFn4wwutvsufFEZupD4zrxNQjB%2FL1Hv%2BR1dHywhA3rPB39IFJDnKvjUT%2Fs3rNbo%2FBivnqBMXTGjCZKOThNJTfxzZDkb3tLCrDAxNEFvDVxCfM0exEXHGodDd9%2FlPk7SeR1xQwkqUguxuECYtrOkj7nhs80J41Fqvg0khhDUp%2BIwHP4RE9eGo47OKSk7NcQaGmAoiISTod%2FJXTLSsOzEArza233Rn2b5kt6ga5oKendqQo2GVFvi1j192cwWB0pxOPn7BtiN1lcM%2FCmhiJ72WOeIVvXTN5wFxBrtVgUejox88f%2FjkvXYRYBSHQWAjVGIgFT0BubBAJgGI6Su9YiH4YNBivTh4M3vnMP6Bh8EGOqUBD6l8oRGBoEanSGhoXHNQvidUl2WivGfQzOXzOyXVY53ycr7Ztlo9l47vUTPZ7tnIP%2FnMLJYba6nm1IA1PWK7sM6C5EXSfCw9Oz2v5g3KMFn%2FtzXutOscZA6ZL6hpq5wKPSw6cZJAOnVYtJK2SZBcc3d7XbAu5rAEJxNAUBT9GHGCsvUHOYbQg%2BR47zippnVZclS59fSNYZDuvmR%2FGTbTMgV6SNOT&X-Amz-Signature=0224669e048c4a0dd221c6fd5c9cfc5353306470ea56eead38204faad7bd4a8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KYVBYNO%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCUSQNFgqjH2udRRSr%2Bqvyep6YAws3WcOkf6bd6mrJ14wIgbMLQ8mOvuHzeX33NxVZeK4u6Fjt63HsU%2B3UCjnPRZOgqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUms3DnXO51TwCQ8CrcAwotskjon%2B%2B8MbpDywxX2aUQzCNPxOaD42CBZXpwpBUjBnZJit5gXyU0206odGx0GqlEppGYCwkw3f7q77MA6HLvTuah0xQWT%2F%2BNiGURCQuSMiNf%2F5OjeCzG%2FFiLcQ3m7SEkJImSj34pbA4aIg%2FSmeM%2B30mCQ67RLyjD1%2FKorR4grFMB0yX34ZPALWrkZaouFb2VI%2BrWNJIhKCKKnol1HyiwNPFa8G0Zax0IrOFMjKdqLwD3QW4Qobw5gyolcimn0t3ahbFAkVGVWH7NkDoOCCs%2BlDcy%2BFn4wwutvsufFEZupD4zrxNQjB%2FL1Hv%2BR1dHywhA3rPB39IFJDnKvjUT%2Fs3rNbo%2FBivnqBMXTGjCZKOThNJTfxzZDkb3tLCrDAxNEFvDVxCfM0exEXHGodDd9%2FlPk7SeR1xQwkqUguxuECYtrOkj7nhs80J41Fqvg0khhDUp%2BIwHP4RE9eGo47OKSk7NcQaGmAoiISTod%2FJXTLSsOzEArza233Rn2b5kt6ga5oKendqQo2GVFvi1j192cwWB0pxOPn7BtiN1lcM%2FCmhiJ72WOeIVvXTN5wFxBrtVgUejox88f%2FjkvXYRYBSHQWAjVGIgFT0BubBAJgGI6Su9YiH4YNBivTh4M3vnMP6Bh8EGOqUBD6l8oRGBoEanSGhoXHNQvidUl2WivGfQzOXzOyXVY53ycr7Ztlo9l47vUTPZ7tnIP%2FnMLJYba6nm1IA1PWK7sM6C5EXSfCw9Oz2v5g3KMFn%2FtzXutOscZA6ZL6hpq5wKPSw6cZJAOnVYtJK2SZBcc3d7XbAu5rAEJxNAUBT9GHGCsvUHOYbQg%2BR47zippnVZclS59fSNYZDuvmR%2FGTbTMgV6SNOT&X-Amz-Signature=adeafedde6987cafa70a256557913c56e9a85c05a45b3922b0a5da6502fc07e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
