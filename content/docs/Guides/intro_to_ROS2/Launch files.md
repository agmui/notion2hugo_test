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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZS52TO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDeG2X%2B%2FbfEDBG16A%2BM6l58cFGwSWJhFhbHsQp3lRZJrAIhANvujjwzV6MFFfujZS%2FJvSJlvB5KpOWQHjCpQZ5ELa9KKv8DCEwQABoMNjM3NDIzMTgzODA1IgzJaYDTaw2TsPR5p%2F4q3ANC28sLbrgXaDmthEKqZ%2BW3HWpbHUMjcqdMHX4ae9D926ZLsyM0jWxQTl7bN4YZ0G33LZP8zsiStgeQSrjN0moWxgfIjPKSSHgeMMzUg7zqLWAwvuu8A1lJ2Q0LFgZMXc1O2NE2dPetUQ3Qus0lhMvrPsEuQuVinJm4aeFL2j9jxOth%2F6SASCWXD4puE82pdK%2FBxpECq2z%2B9GReAyBKHpyNYQQSxTHoTxc0o61mi2PYrWjE3ye%2FHhubGWyu3Pj93O9ItD%2FAn4KoTOrKyyvx1B4zHzPl4TEA%2FKCe4adUI3wS%2BvZMqBJew%2BJxqDhb0R4aoOMM1U6fYmA5oTVnhGZteoRCS2GQP4C71RPpj%2FA5vgVLlaM3c3eH3sXSDfXPFpq3zYiRAsl4iGlR2FxJq2BGFXHgJTcZG4dwnS2XdpKoAf5TqCzW5gp%2F%2F3563VI8sPxACIi%2FWCCnVoOHHVXXGUNp%2FNds7Ci4sDuQqazseVSiuf7RU4%2Fd0tXb6DIgE6Dy3XCNHn1OH5dHgI6aQ0dD5NCR%2FmGy7Fv%2F2GWTFrnLeW2cP%2FfM5p%2F9%2BrsjS0BB6U%2Bue8S%2BIbz6drzv7mrQKqXdhHBOgxnXAaXNsV6htqx92IAVyaqUy%2B16Opwcfr5ZIfvJ5zCcjfHCBjqkAf6DN%2FMu6gVwGhhxzcQGYWzJG%2F7i1SFjQecTDcXa6K421df3PjQs%2Fe8RDmkuAqi2Lj1wCtBrAEmwnsK2CG2mdd7tz%2BXKVo%2Bc74dZkZwx0Gf1NpvzjBenRI7k5MJG9SInIRuRhFurDkbrcEqVgGGLaXre%2B%2BdAG1%2FT5RRd2qci7gcBxbCnZPmqfh3nYu%2FFdvY2QM4NHiR5JNVXkcQk2tTDzNRNj8XB&X-Amz-Signature=5cb8ebea47b3521863c22965ed41e76d81b01eece967152b4191de34569ea196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZS52TO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDeG2X%2B%2FbfEDBG16A%2BM6l58cFGwSWJhFhbHsQp3lRZJrAIhANvujjwzV6MFFfujZS%2FJvSJlvB5KpOWQHjCpQZ5ELa9KKv8DCEwQABoMNjM3NDIzMTgzODA1IgzJaYDTaw2TsPR5p%2F4q3ANC28sLbrgXaDmthEKqZ%2BW3HWpbHUMjcqdMHX4ae9D926ZLsyM0jWxQTl7bN4YZ0G33LZP8zsiStgeQSrjN0moWxgfIjPKSSHgeMMzUg7zqLWAwvuu8A1lJ2Q0LFgZMXc1O2NE2dPetUQ3Qus0lhMvrPsEuQuVinJm4aeFL2j9jxOth%2F6SASCWXD4puE82pdK%2FBxpECq2z%2B9GReAyBKHpyNYQQSxTHoTxc0o61mi2PYrWjE3ye%2FHhubGWyu3Pj93O9ItD%2FAn4KoTOrKyyvx1B4zHzPl4TEA%2FKCe4adUI3wS%2BvZMqBJew%2BJxqDhb0R4aoOMM1U6fYmA5oTVnhGZteoRCS2GQP4C71RPpj%2FA5vgVLlaM3c3eH3sXSDfXPFpq3zYiRAsl4iGlR2FxJq2BGFXHgJTcZG4dwnS2XdpKoAf5TqCzW5gp%2F%2F3563VI8sPxACIi%2FWCCnVoOHHVXXGUNp%2FNds7Ci4sDuQqazseVSiuf7RU4%2Fd0tXb6DIgE6Dy3XCNHn1OH5dHgI6aQ0dD5NCR%2FmGy7Fv%2F2GWTFrnLeW2cP%2FfM5p%2F9%2BrsjS0BB6U%2Bue8S%2BIbz6drzv7mrQKqXdhHBOgxnXAaXNsV6htqx92IAVyaqUy%2B16Opwcfr5ZIfvJ5zCcjfHCBjqkAf6DN%2FMu6gVwGhhxzcQGYWzJG%2F7i1SFjQecTDcXa6K421df3PjQs%2Fe8RDmkuAqi2Lj1wCtBrAEmwnsK2CG2mdd7tz%2BXKVo%2Bc74dZkZwx0Gf1NpvzjBenRI7k5MJG9SInIRuRhFurDkbrcEqVgGGLaXre%2B%2BdAG1%2FT5RRd2qci7gcBxbCnZPmqfh3nYu%2FFdvY2QM4NHiR5JNVXkcQk2tTDzNRNj8XB&X-Amz-Signature=fd76eeeeeca4479d203606d995ce3ecb8019f222d2d46269a9bb77ea364a4b3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZS52TO%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDeG2X%2B%2FbfEDBG16A%2BM6l58cFGwSWJhFhbHsQp3lRZJrAIhANvujjwzV6MFFfujZS%2FJvSJlvB5KpOWQHjCpQZ5ELa9KKv8DCEwQABoMNjM3NDIzMTgzODA1IgzJaYDTaw2TsPR5p%2F4q3ANC28sLbrgXaDmthEKqZ%2BW3HWpbHUMjcqdMHX4ae9D926ZLsyM0jWxQTl7bN4YZ0G33LZP8zsiStgeQSrjN0moWxgfIjPKSSHgeMMzUg7zqLWAwvuu8A1lJ2Q0LFgZMXc1O2NE2dPetUQ3Qus0lhMvrPsEuQuVinJm4aeFL2j9jxOth%2F6SASCWXD4puE82pdK%2FBxpECq2z%2B9GReAyBKHpyNYQQSxTHoTxc0o61mi2PYrWjE3ye%2FHhubGWyu3Pj93O9ItD%2FAn4KoTOrKyyvx1B4zHzPl4TEA%2FKCe4adUI3wS%2BvZMqBJew%2BJxqDhb0R4aoOMM1U6fYmA5oTVnhGZteoRCS2GQP4C71RPpj%2FA5vgVLlaM3c3eH3sXSDfXPFpq3zYiRAsl4iGlR2FxJq2BGFXHgJTcZG4dwnS2XdpKoAf5TqCzW5gp%2F%2F3563VI8sPxACIi%2FWCCnVoOHHVXXGUNp%2FNds7Ci4sDuQqazseVSiuf7RU4%2Fd0tXb6DIgE6Dy3XCNHn1OH5dHgI6aQ0dD5NCR%2FmGy7Fv%2F2GWTFrnLeW2cP%2FfM5p%2F9%2BrsjS0BB6U%2Bue8S%2BIbz6drzv7mrQKqXdhHBOgxnXAaXNsV6htqx92IAVyaqUy%2B16Opwcfr5ZIfvJ5zCcjfHCBjqkAf6DN%2FMu6gVwGhhxzcQGYWzJG%2F7i1SFjQecTDcXa6K421df3PjQs%2Fe8RDmkuAqi2Lj1wCtBrAEmwnsK2CG2mdd7tz%2BXKVo%2Bc74dZkZwx0Gf1NpvzjBenRI7k5MJG9SInIRuRhFurDkbrcEqVgGGLaXre%2B%2BdAG1%2FT5RRd2qci7gcBxbCnZPmqfh3nYu%2FFdvY2QM4NHiR5JNVXkcQk2tTDzNRNj8XB&X-Amz-Signature=1873fbe8cf725751a644184be2dc6950dd1a67df22b6794fd65ad35ab385a8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
