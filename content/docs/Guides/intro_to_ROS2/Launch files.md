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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWDWNDM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCF2Y1ipYlL9aXkaJUWB%2F8lBpK5UtH%2FSp3W50UmwRQsYQIgZN2HwgWpJ%2FVAq3PltakzorEcwFqwmeXjSu1kOCSg60wq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHgvxdgGo5KrSrTodyrcA20%2F1FxHgdsQXc8TSk3K02omHb3zfXvpqWeBaPe0QN8huCa3Nm6EUjqSndpNZjMRS%2BV9KEekV9moVwr0pvZCVWdK30vH3viO16EpjzNn%2BLlfusESzsHlTvTF3YHkbDVdQ3xoWQwGPr55FJuIwn76Yh2e9abxSd%2FcXBjrUC2AAh0dfa7qzw67hy4%2FfyYn8FriTIPXcwh7Zp0e%2BDhr2DNAyqwHHXoTArZAhga5IksgJtSfqHJLMBbILwqIlHj2cREGA5UZpBQC3W2hi99zJyMEWRATtaRRS44tovB4gg6LD2%2FSkuou0FL%2B45ReoaLObAlkWMrxjwC6SpEoOhkXqTphAMnIiPg9vjr65dFFGv0Hh2mc1SOLtHqcQVCM5w7VjZnFIouv9dh0TgIVwyENYYvNv5g3KrU6YMuAeFg2iUxWza%2BbICbnuNqFmlQD8NN0ACEpT1ThW%2FHudhlElhTpQ0F7iUs3JPnFDW1Lrz90ajEOPepnD4ImwbRYKSeQ7BbJETK1nf0V7qn2r8vMMmuJrsO1V1qARN63tO9lWnC0NoAdkKS8T2wjoH5FtZWdicYhqd0meF3L62GkQdFkXmAdErodIgAa6UTQlQsyUGujyJhkR%2BUMc%2B5uZm47B8nXRp%2FTMMX%2BvcIGOqUBP%2BN4NDJTq03XbrKnEexJYENP6m8z0ofotCX1nsfHvj5%2BDI3r%2B%2FUIDFi5yKRGIm2ZIrts0C63nwiK6zUcNu6xDcOom7CDQdadHUlipOtrEBvk15DCj1w1NyGUBb0E45lMxX9xeyWKUlK7g8XGj9nb7sdSA1JHBhKMcT9JVxYsMv1Oct3pAYXECo3wjPGn1FbcZEMiq5SKeQSZuM3piYHgTDP1tklk&X-Amz-Signature=0b74b22b370a01592265ae5370af6e3cac9e5b2860529485ff8bd943c39e39ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWDWNDM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCF2Y1ipYlL9aXkaJUWB%2F8lBpK5UtH%2FSp3W50UmwRQsYQIgZN2HwgWpJ%2FVAq3PltakzorEcwFqwmeXjSu1kOCSg60wq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHgvxdgGo5KrSrTodyrcA20%2F1FxHgdsQXc8TSk3K02omHb3zfXvpqWeBaPe0QN8huCa3Nm6EUjqSndpNZjMRS%2BV9KEekV9moVwr0pvZCVWdK30vH3viO16EpjzNn%2BLlfusESzsHlTvTF3YHkbDVdQ3xoWQwGPr55FJuIwn76Yh2e9abxSd%2FcXBjrUC2AAh0dfa7qzw67hy4%2FfyYn8FriTIPXcwh7Zp0e%2BDhr2DNAyqwHHXoTArZAhga5IksgJtSfqHJLMBbILwqIlHj2cREGA5UZpBQC3W2hi99zJyMEWRATtaRRS44tovB4gg6LD2%2FSkuou0FL%2B45ReoaLObAlkWMrxjwC6SpEoOhkXqTphAMnIiPg9vjr65dFFGv0Hh2mc1SOLtHqcQVCM5w7VjZnFIouv9dh0TgIVwyENYYvNv5g3KrU6YMuAeFg2iUxWza%2BbICbnuNqFmlQD8NN0ACEpT1ThW%2FHudhlElhTpQ0F7iUs3JPnFDW1Lrz90ajEOPepnD4ImwbRYKSeQ7BbJETK1nf0V7qn2r8vMMmuJrsO1V1qARN63tO9lWnC0NoAdkKS8T2wjoH5FtZWdicYhqd0meF3L62GkQdFkXmAdErodIgAa6UTQlQsyUGujyJhkR%2BUMc%2B5uZm47B8nXRp%2FTMMX%2BvcIGOqUBP%2BN4NDJTq03XbrKnEexJYENP6m8z0ofotCX1nsfHvj5%2BDI3r%2B%2FUIDFi5yKRGIm2ZIrts0C63nwiK6zUcNu6xDcOom7CDQdadHUlipOtrEBvk15DCj1w1NyGUBb0E45lMxX9xeyWKUlK7g8XGj9nb7sdSA1JHBhKMcT9JVxYsMv1Oct3pAYXECo3wjPGn1FbcZEMiq5SKeQSZuM3piYHgTDP1tklk&X-Amz-Signature=dfc66ca2c669596e6d7c4d9fed81a95decf2ea54fd8e2614f50697cb5be72fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWDWNDM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T034540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCF2Y1ipYlL9aXkaJUWB%2F8lBpK5UtH%2FSp3W50UmwRQsYQIgZN2HwgWpJ%2FVAq3PltakzorEcwFqwmeXjSu1kOCSg60wq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHgvxdgGo5KrSrTodyrcA20%2F1FxHgdsQXc8TSk3K02omHb3zfXvpqWeBaPe0QN8huCa3Nm6EUjqSndpNZjMRS%2BV9KEekV9moVwr0pvZCVWdK30vH3viO16EpjzNn%2BLlfusESzsHlTvTF3YHkbDVdQ3xoWQwGPr55FJuIwn76Yh2e9abxSd%2FcXBjrUC2AAh0dfa7qzw67hy4%2FfyYn8FriTIPXcwh7Zp0e%2BDhr2DNAyqwHHXoTArZAhga5IksgJtSfqHJLMBbILwqIlHj2cREGA5UZpBQC3W2hi99zJyMEWRATtaRRS44tovB4gg6LD2%2FSkuou0FL%2B45ReoaLObAlkWMrxjwC6SpEoOhkXqTphAMnIiPg9vjr65dFFGv0Hh2mc1SOLtHqcQVCM5w7VjZnFIouv9dh0TgIVwyENYYvNv5g3KrU6YMuAeFg2iUxWza%2BbICbnuNqFmlQD8NN0ACEpT1ThW%2FHudhlElhTpQ0F7iUs3JPnFDW1Lrz90ajEOPepnD4ImwbRYKSeQ7BbJETK1nf0V7qn2r8vMMmuJrsO1V1qARN63tO9lWnC0NoAdkKS8T2wjoH5FtZWdicYhqd0meF3L62GkQdFkXmAdErodIgAa6UTQlQsyUGujyJhkR%2BUMc%2B5uZm47B8nXRp%2FTMMX%2BvcIGOqUBP%2BN4NDJTq03XbrKnEexJYENP6m8z0ofotCX1nsfHvj5%2BDI3r%2B%2FUIDFi5yKRGIm2ZIrts0C63nwiK6zUcNu6xDcOom7CDQdadHUlipOtrEBvk15DCj1w1NyGUBb0E45lMxX9xeyWKUlK7g8XGj9nb7sdSA1JHBhKMcT9JVxYsMv1Oct3pAYXECo3wjPGn1FbcZEMiq5SKeQSZuM3piYHgTDP1tklk&X-Amz-Signature=82d03ea4d3f8ea56f1928108744d9cde443770eb15a63991f759ab96a70e1904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
