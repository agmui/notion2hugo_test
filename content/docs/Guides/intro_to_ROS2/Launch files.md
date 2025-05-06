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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TIBMMX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF687OL4KzMoG5OzaClCiKiijfg%2BBm3IBFdVvcCgl%2Fl2AiEA3D4RBxljBod9at6X9mEU6WVKAK%2FEmGm6JzWeVUrRx0sq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAt%2F4ZaPpZsF5RJpuyrcA79x%2FXTHzz5AtIQp3H1UOwe98R3B29Zg7pOMSK9p0bPc41Ult3WY%2FCHbtfDvMawU6QaCFblPVT9JtFqvOiCLQBacv3OvNSeKO64wRgQoSJnn8kK5J%2FA25%2FvxrATtLSjZQ%2F8arEdrtahCWTxx84rzffUOz7kDCxynB67OW49T2ulD7avtniSK2BgZdA6s4K5eKcKuBXwWUJt75vzBYBjYd5wwtwpIMR0x1DU2vuHuVFdKS0Kw2lEO9cLrAQZc7Krh3mr4eS2G2rcMlsTXHmOLuj48GoQ75UMktzahCQi0fDrNqZDwhTPHfxjTOgHRGNMYobwldZhBlsvJ6VdsoijKn%2FmlsnCQnzJW%2BN9pS%2B7UZ6fscR5afLz%2FJLzyyasyuyXD%2BfYA4oYmSF8eeN3vkVzgVOAZ7RCcTG3S0tYu1vVihTuNAYRi%2FNjIVFEb%2Bd7Dby2V%2BPIDC9QaSSilq2sdyCoQmV4rLEtCCN%2FmvUSorXcEWd1XPrxj3eHaapSoncueAQ37TuaojCeqRvOqhVLz42xHdtBcdo2wOhztzdNqsaawghlHs3z7iztor4wRSZSVDRw4ZsuTq8xoMFpm6WR%2BQV6E7ObjrY1a5MDvPhxss0w7HU9R3GZYAFCsJcyMmUbCMPGz6cAGOqUBsT1K81HvWcQ2yHxqhNyvFp3%2Fzs%2BL%2BudrExDWU7YMkddwFoY39XyS22bc7cE73CT0tF1zsqhmuJOIkpCsct%2FNpNT%2BHaxlOWIBQKJFD0RfTPkAKZ6XwBuYJ1ETln2I4v7UuHkcX%2FkvVAOQsy9TdtGaS1W9cZUn41mx0MLW2zrqlTTtXWRJJC2N3gXOws4TFXATgwSaJizT2BgenJJMqdrkGMy5v3RA&X-Amz-Signature=8a19a4da33cd85c71b239e6c633861c7d6a094bae24ca9bffc154bc4b132fd0b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TIBMMX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF687OL4KzMoG5OzaClCiKiijfg%2BBm3IBFdVvcCgl%2Fl2AiEA3D4RBxljBod9at6X9mEU6WVKAK%2FEmGm6JzWeVUrRx0sq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAt%2F4ZaPpZsF5RJpuyrcA79x%2FXTHzz5AtIQp3H1UOwe98R3B29Zg7pOMSK9p0bPc41Ult3WY%2FCHbtfDvMawU6QaCFblPVT9JtFqvOiCLQBacv3OvNSeKO64wRgQoSJnn8kK5J%2FA25%2FvxrATtLSjZQ%2F8arEdrtahCWTxx84rzffUOz7kDCxynB67OW49T2ulD7avtniSK2BgZdA6s4K5eKcKuBXwWUJt75vzBYBjYd5wwtwpIMR0x1DU2vuHuVFdKS0Kw2lEO9cLrAQZc7Krh3mr4eS2G2rcMlsTXHmOLuj48GoQ75UMktzahCQi0fDrNqZDwhTPHfxjTOgHRGNMYobwldZhBlsvJ6VdsoijKn%2FmlsnCQnzJW%2BN9pS%2B7UZ6fscR5afLz%2FJLzyyasyuyXD%2BfYA4oYmSF8eeN3vkVzgVOAZ7RCcTG3S0tYu1vVihTuNAYRi%2FNjIVFEb%2Bd7Dby2V%2BPIDC9QaSSilq2sdyCoQmV4rLEtCCN%2FmvUSorXcEWd1XPrxj3eHaapSoncueAQ37TuaojCeqRvOqhVLz42xHdtBcdo2wOhztzdNqsaawghlHs3z7iztor4wRSZSVDRw4ZsuTq8xoMFpm6WR%2BQV6E7ObjrY1a5MDvPhxss0w7HU9R3GZYAFCsJcyMmUbCMPGz6cAGOqUBsT1K81HvWcQ2yHxqhNyvFp3%2Fzs%2BL%2BudrExDWU7YMkddwFoY39XyS22bc7cE73CT0tF1zsqhmuJOIkpCsct%2FNpNT%2BHaxlOWIBQKJFD0RfTPkAKZ6XwBuYJ1ETln2I4v7UuHkcX%2FkvVAOQsy9TdtGaS1W9cZUn41mx0MLW2zrqlTTtXWRJJC2N3gXOws4TFXATgwSaJizT2BgenJJMqdrkGMy5v3RA&X-Amz-Signature=668f196488d56b8ee6ee0c4609752e4f72de4217d7f09ead6108ad348d66111d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TIBMMX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF687OL4KzMoG5OzaClCiKiijfg%2BBm3IBFdVvcCgl%2Fl2AiEA3D4RBxljBod9at6X9mEU6WVKAK%2FEmGm6JzWeVUrRx0sq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAt%2F4ZaPpZsF5RJpuyrcA79x%2FXTHzz5AtIQp3H1UOwe98R3B29Zg7pOMSK9p0bPc41Ult3WY%2FCHbtfDvMawU6QaCFblPVT9JtFqvOiCLQBacv3OvNSeKO64wRgQoSJnn8kK5J%2FA25%2FvxrATtLSjZQ%2F8arEdrtahCWTxx84rzffUOz7kDCxynB67OW49T2ulD7avtniSK2BgZdA6s4K5eKcKuBXwWUJt75vzBYBjYd5wwtwpIMR0x1DU2vuHuVFdKS0Kw2lEO9cLrAQZc7Krh3mr4eS2G2rcMlsTXHmOLuj48GoQ75UMktzahCQi0fDrNqZDwhTPHfxjTOgHRGNMYobwldZhBlsvJ6VdsoijKn%2FmlsnCQnzJW%2BN9pS%2B7UZ6fscR5afLz%2FJLzyyasyuyXD%2BfYA4oYmSF8eeN3vkVzgVOAZ7RCcTG3S0tYu1vVihTuNAYRi%2FNjIVFEb%2Bd7Dby2V%2BPIDC9QaSSilq2sdyCoQmV4rLEtCCN%2FmvUSorXcEWd1XPrxj3eHaapSoncueAQ37TuaojCeqRvOqhVLz42xHdtBcdo2wOhztzdNqsaawghlHs3z7iztor4wRSZSVDRw4ZsuTq8xoMFpm6WR%2BQV6E7ObjrY1a5MDvPhxss0w7HU9R3GZYAFCsJcyMmUbCMPGz6cAGOqUBsT1K81HvWcQ2yHxqhNyvFp3%2Fzs%2BL%2BudrExDWU7YMkddwFoY39XyS22bc7cE73CT0tF1zsqhmuJOIkpCsct%2FNpNT%2BHaxlOWIBQKJFD0RfTPkAKZ6XwBuYJ1ETln2I4v7UuHkcX%2FkvVAOQsy9TdtGaS1W9cZUn41mx0MLW2zrqlTTtXWRJJC2N3gXOws4TFXATgwSaJizT2BgenJJMqdrkGMy5v3RA&X-Amz-Signature=7ba245a86dc1b9e5f5bbdca57009780053eae7b79668e52d7d11ba7202b0ae9a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
