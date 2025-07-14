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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4RJOVMT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCM2OnoRJfhKTyqWb8JJa%2BAtHVdcBtWq9W%2FvQmwthb2oAIhAIkRtemtq3wi3AfVjnofruxAyO4PeUvsRAcBxKKZi3tKKv8DCDcQABoMNjM3NDIzMTgzODA1Igzqzwzd7FAA02QoqtUq3ANJZaYplWj6MXVYv7xtQthN1dy3y0s%2FdFJPhQeYfY%2BBZiEG1BDiMxbL1Bb0Silqul2x56cJCv21Jn7KYbnaBxTh%2F3pZ0b5NYJmTmAcC8F8sW6nvo4XAabLE3%2BWjAFIbK6S%2BV6lPgDlCUK9c70%2F16RDh%2FPktjHxlF4VnLi%2BtAc7F6%2B5uBFAh4Ps2ZmVSx2MCpWLrQg7KtNov4FSP7piuKVR%2BP49kE%2Fz5xaYo%2BLApzwdMH6hE9ZBCXshsWqFnnGX81kQUFAyeOdwkqy48wJ1TZfMqkgzU%2FiDwe4ofuJ4VPpqRtxTabYDiWDAFipQ3jFTu%2BogOhiWs1PSZe7tDxKIzjwmBgwtAoJ8UbqctbzILRXIeDA%2BPM91Frdn6cfZu9zawePcPsM07QY6Kme5HSSfzenU8zoI8gZ7Rtv%2FI2%2Baci2jd8keQl%2B0L8Qx7dFx790CXd1IEu91KWf4%2BYUNJIc2Q67ddSaqHzOu9u6EX3FaFKMfJ9WMCiun7OReGAxrlTSzcslAmMZVFKQjpMyuRg9jdlAfpCRQcUZwhtX3yThlTyUoGc8rBfzHB%2BlIVmZsCxA0Laoi1gazsfgGPaK%2BwJoV52j7%2BiYnV%2BVzgjBfrBeYrks7CILFhiSwLgEFJPNiBsDD%2B99XDBjqkAcLze7DJOML4XdaagoDtTVy3Ws9JbNRMtebr%2BHISmCT9094a%2FZG0QRew4cz281pvYXMk%2Bmazn2lfkUy4SyeFv%2BzfNHMXXNM7%2Ff5DBi%2B58mMrKyPzupCh00JbVzlWBZJ09vT9LFq2%2BAIsp%2B8vlHGQKCmX7ReKoObLnnPhK8YecpmK2MAQ%2BuKesjDHKGOHNmOZBhHNXejgN%2B1%2FFiXxXwpfgzRHG9C5&X-Amz-Signature=9bc4f7726045d62956e23b82f9469d9c20c81a392f6ccbeccc39577c5ae06f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4RJOVMT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCM2OnoRJfhKTyqWb8JJa%2BAtHVdcBtWq9W%2FvQmwthb2oAIhAIkRtemtq3wi3AfVjnofruxAyO4PeUvsRAcBxKKZi3tKKv8DCDcQABoMNjM3NDIzMTgzODA1Igzqzwzd7FAA02QoqtUq3ANJZaYplWj6MXVYv7xtQthN1dy3y0s%2FdFJPhQeYfY%2BBZiEG1BDiMxbL1Bb0Silqul2x56cJCv21Jn7KYbnaBxTh%2F3pZ0b5NYJmTmAcC8F8sW6nvo4XAabLE3%2BWjAFIbK6S%2BV6lPgDlCUK9c70%2F16RDh%2FPktjHxlF4VnLi%2BtAc7F6%2B5uBFAh4Ps2ZmVSx2MCpWLrQg7KtNov4FSP7piuKVR%2BP49kE%2Fz5xaYo%2BLApzwdMH6hE9ZBCXshsWqFnnGX81kQUFAyeOdwkqy48wJ1TZfMqkgzU%2FiDwe4ofuJ4VPpqRtxTabYDiWDAFipQ3jFTu%2BogOhiWs1PSZe7tDxKIzjwmBgwtAoJ8UbqctbzILRXIeDA%2BPM91Frdn6cfZu9zawePcPsM07QY6Kme5HSSfzenU8zoI8gZ7Rtv%2FI2%2Baci2jd8keQl%2B0L8Qx7dFx790CXd1IEu91KWf4%2BYUNJIc2Q67ddSaqHzOu9u6EX3FaFKMfJ9WMCiun7OReGAxrlTSzcslAmMZVFKQjpMyuRg9jdlAfpCRQcUZwhtX3yThlTyUoGc8rBfzHB%2BlIVmZsCxA0Laoi1gazsfgGPaK%2BwJoV52j7%2BiYnV%2BVzgjBfrBeYrks7CILFhiSwLgEFJPNiBsDD%2B99XDBjqkAcLze7DJOML4XdaagoDtTVy3Ws9JbNRMtebr%2BHISmCT9094a%2FZG0QRew4cz281pvYXMk%2Bmazn2lfkUy4SyeFv%2BzfNHMXXNM7%2Ff5DBi%2B58mMrKyPzupCh00JbVzlWBZJ09vT9LFq2%2BAIsp%2B8vlHGQKCmX7ReKoObLnnPhK8YecpmK2MAQ%2BuKesjDHKGOHNmOZBhHNXejgN%2B1%2FFiXxXwpfgzRHG9C5&X-Amz-Signature=fe0ad5d23ea002bb484bc5509adbddc6fc6b0e958ae5d5d40326be2db0520039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4RJOVMT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCM2OnoRJfhKTyqWb8JJa%2BAtHVdcBtWq9W%2FvQmwthb2oAIhAIkRtemtq3wi3AfVjnofruxAyO4PeUvsRAcBxKKZi3tKKv8DCDcQABoMNjM3NDIzMTgzODA1Igzqzwzd7FAA02QoqtUq3ANJZaYplWj6MXVYv7xtQthN1dy3y0s%2FdFJPhQeYfY%2BBZiEG1BDiMxbL1Bb0Silqul2x56cJCv21Jn7KYbnaBxTh%2F3pZ0b5NYJmTmAcC8F8sW6nvo4XAabLE3%2BWjAFIbK6S%2BV6lPgDlCUK9c70%2F16RDh%2FPktjHxlF4VnLi%2BtAc7F6%2B5uBFAh4Ps2ZmVSx2MCpWLrQg7KtNov4FSP7piuKVR%2BP49kE%2Fz5xaYo%2BLApzwdMH6hE9ZBCXshsWqFnnGX81kQUFAyeOdwkqy48wJ1TZfMqkgzU%2FiDwe4ofuJ4VPpqRtxTabYDiWDAFipQ3jFTu%2BogOhiWs1PSZe7tDxKIzjwmBgwtAoJ8UbqctbzILRXIeDA%2BPM91Frdn6cfZu9zawePcPsM07QY6Kme5HSSfzenU8zoI8gZ7Rtv%2FI2%2Baci2jd8keQl%2B0L8Qx7dFx790CXd1IEu91KWf4%2BYUNJIc2Q67ddSaqHzOu9u6EX3FaFKMfJ9WMCiun7OReGAxrlTSzcslAmMZVFKQjpMyuRg9jdlAfpCRQcUZwhtX3yThlTyUoGc8rBfzHB%2BlIVmZsCxA0Laoi1gazsfgGPaK%2BwJoV52j7%2BiYnV%2BVzgjBfrBeYrks7CILFhiSwLgEFJPNiBsDD%2B99XDBjqkAcLze7DJOML4XdaagoDtTVy3Ws9JbNRMtebr%2BHISmCT9094a%2FZG0QRew4cz281pvYXMk%2Bmazn2lfkUy4SyeFv%2BzfNHMXXNM7%2Ff5DBi%2B58mMrKyPzupCh00JbVzlWBZJ09vT9LFq2%2BAIsp%2B8vlHGQKCmX7ReKoObLnnPhK8YecpmK2MAQ%2BuKesjDHKGOHNmOZBhHNXejgN%2B1%2FFiXxXwpfgzRHG9C5&X-Amz-Signature=1840d7473900a50304a5c8f1d96846f91850c5f7e4d1252233e16b7a990ec949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
