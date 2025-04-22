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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA7PNPO6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDNj9SezuWktTU%2Bi2Zc5%2FXWL7TF5K%2BU8oxZA7okvegePAIgezdlZntCjcCMtxpb2gaRR0Swo9%2BcX6Hy8tqobmvo0NYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKFazMuHudreuPx5CrcA02zuna8TKqQo2gcALQyaQa3dZVKw1uiUkSmWmpoeqCryFKkGjnhd3rUTlDQbunwX2pRsJnzJgVQ6%2FRWgy79Utyg%2FiUJQd5LFTl4cMcBjwCgXby2N%2F4qmC%2BB4WiXZLEiFarUw4fTex4ZeuhIrZlu9a2pBtOSRu%2BXJsdbWyheFLjUK%2Bo%2FwL7g4rL3GNyTTo8YbecdxkLAtIAOApOAGNq%2FF41rtmppC%2B%2FQBJ5Oij1qCfn1yi2WRaEw4u%2B0FBTzJXrVEreRy74Xn2u6lfC2tJ6%2B0drj5PC2Rg9XM5eKzFwzJ4%2FREBMWqqODU6RB%2FunzanwPj36VOcXy0HxwWrBbGmU9WfsGzPGbqHyDkB5C2D54upe8y28%2FmyMf3NHx6lCUnY13vS5Tg2TJWHUczk5j1AHVQOSYIxHCLU32Cvg%2B96dHftfXvi7XDisLMqdKosG9Vd0lkBtALWzel%2BPMdGx63V1FvsT2KN3BQ%2BTA52b2pUeFznLWFvje9Imrj1A0G9IQdRNUJ1yZb4ID6M0qIvn9Q76mVSltABG1gtufbsCY2ihScqJXgqisOlNJDlQ%2FNSFgcJzq2axOF1kgud2aXoOd08PzFyhMbX0FocRDgNuOIyngRw6v%2BPCG3V37GxtR2snJMIDgnsAGOqUBtdGID568hphVdwuLKHoSKwp8UcL60FBxInyUVzegNVsf8f9%2B1lf6DfxC3c9UBJld%2F0Boi81xaxNxcbMJ%2FoWg5Jgn3RUH0c7j8LgDdGMFF9h5q2pv%2FxZVlglIIor13CoU%2BjlxOs5dRnHEXUqZ2CjQ86IzmA%2FVuLuD6avzKmOOU382C5qOaC0NkGyVJkGb4PvBstMhH%2F%2BQO7PL19ynjQnGypfNbBiS&X-Amz-Signature=f237d4e389ad40d4073480828b6e037199b5ac8314fce19e7af89aad7a61a12b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA7PNPO6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDNj9SezuWktTU%2Bi2Zc5%2FXWL7TF5K%2BU8oxZA7okvegePAIgezdlZntCjcCMtxpb2gaRR0Swo9%2BcX6Hy8tqobmvo0NYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKFazMuHudreuPx5CrcA02zuna8TKqQo2gcALQyaQa3dZVKw1uiUkSmWmpoeqCryFKkGjnhd3rUTlDQbunwX2pRsJnzJgVQ6%2FRWgy79Utyg%2FiUJQd5LFTl4cMcBjwCgXby2N%2F4qmC%2BB4WiXZLEiFarUw4fTex4ZeuhIrZlu9a2pBtOSRu%2BXJsdbWyheFLjUK%2Bo%2FwL7g4rL3GNyTTo8YbecdxkLAtIAOApOAGNq%2FF41rtmppC%2B%2FQBJ5Oij1qCfn1yi2WRaEw4u%2B0FBTzJXrVEreRy74Xn2u6lfC2tJ6%2B0drj5PC2Rg9XM5eKzFwzJ4%2FREBMWqqODU6RB%2FunzanwPj36VOcXy0HxwWrBbGmU9WfsGzPGbqHyDkB5C2D54upe8y28%2FmyMf3NHx6lCUnY13vS5Tg2TJWHUczk5j1AHVQOSYIxHCLU32Cvg%2B96dHftfXvi7XDisLMqdKosG9Vd0lkBtALWzel%2BPMdGx63V1FvsT2KN3BQ%2BTA52b2pUeFznLWFvje9Imrj1A0G9IQdRNUJ1yZb4ID6M0qIvn9Q76mVSltABG1gtufbsCY2ihScqJXgqisOlNJDlQ%2FNSFgcJzq2axOF1kgud2aXoOd08PzFyhMbX0FocRDgNuOIyngRw6v%2BPCG3V37GxtR2snJMIDgnsAGOqUBtdGID568hphVdwuLKHoSKwp8UcL60FBxInyUVzegNVsf8f9%2B1lf6DfxC3c9UBJld%2F0Boi81xaxNxcbMJ%2FoWg5Jgn3RUH0c7j8LgDdGMFF9h5q2pv%2FxZVlglIIor13CoU%2BjlxOs5dRnHEXUqZ2CjQ86IzmA%2FVuLuD6avzKmOOU382C5qOaC0NkGyVJkGb4PvBstMhH%2F%2BQO7PL19ynjQnGypfNbBiS&X-Amz-Signature=c37b5645a0a3d040c39af906d7a790bb7db99c838e8b060fc060c408b11c5a21&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA7PNPO6%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDNj9SezuWktTU%2Bi2Zc5%2FXWL7TF5K%2BU8oxZA7okvegePAIgezdlZntCjcCMtxpb2gaRR0Swo9%2BcX6Hy8tqobmvo0NYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKFazMuHudreuPx5CrcA02zuna8TKqQo2gcALQyaQa3dZVKw1uiUkSmWmpoeqCryFKkGjnhd3rUTlDQbunwX2pRsJnzJgVQ6%2FRWgy79Utyg%2FiUJQd5LFTl4cMcBjwCgXby2N%2F4qmC%2BB4WiXZLEiFarUw4fTex4ZeuhIrZlu9a2pBtOSRu%2BXJsdbWyheFLjUK%2Bo%2FwL7g4rL3GNyTTo8YbecdxkLAtIAOApOAGNq%2FF41rtmppC%2B%2FQBJ5Oij1qCfn1yi2WRaEw4u%2B0FBTzJXrVEreRy74Xn2u6lfC2tJ6%2B0drj5PC2Rg9XM5eKzFwzJ4%2FREBMWqqODU6RB%2FunzanwPj36VOcXy0HxwWrBbGmU9WfsGzPGbqHyDkB5C2D54upe8y28%2FmyMf3NHx6lCUnY13vS5Tg2TJWHUczk5j1AHVQOSYIxHCLU32Cvg%2B96dHftfXvi7XDisLMqdKosG9Vd0lkBtALWzel%2BPMdGx63V1FvsT2KN3BQ%2BTA52b2pUeFznLWFvje9Imrj1A0G9IQdRNUJ1yZb4ID6M0qIvn9Q76mVSltABG1gtufbsCY2ihScqJXgqisOlNJDlQ%2FNSFgcJzq2axOF1kgud2aXoOd08PzFyhMbX0FocRDgNuOIyngRw6v%2BPCG3V37GxtR2snJMIDgnsAGOqUBtdGID568hphVdwuLKHoSKwp8UcL60FBxInyUVzegNVsf8f9%2B1lf6DfxC3c9UBJld%2F0Boi81xaxNxcbMJ%2FoWg5Jgn3RUH0c7j8LgDdGMFF9h5q2pv%2FxZVlglIIor13CoU%2BjlxOs5dRnHEXUqZ2CjQ86IzmA%2FVuLuD6avzKmOOU382C5qOaC0NkGyVJkGb4PvBstMhH%2F%2BQO7PL19ynjQnGypfNbBiS&X-Amz-Signature=1c5f00aaf7e70619aac824821fc6ad90044d04563d2b742bce541dac0fec7ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
