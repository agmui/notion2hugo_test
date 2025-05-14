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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSYRLGT%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIFGCPiNXwTZtfmDMaFnjGT5Pku6gREZrSADEPb904L8yAiB%2FPB6FMYb6ShSChidaoqttMXtd8WnldvVPnYEW0pHHiCr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM0pAmXbLNaz19mFtUKtwDo40q4YdbSlf%2B%2F2UAVlTr5khwv0DKVGVE26dy%2FNuDe8Xaiu49DBcdb77BM2TFeH9GXKTuutS4qPJJCXfQxKXG8fU2Fm4trv0hnh9xYFybzMk%2Blh1BBRqOhjQX%2BVANF3XqLPC7PYHiYsmIlj3h%2F3WbOrpiIaBy%2Bzjn5CRYTdL2fFtRXLm1jDStjbR%2FkyDAD9J%2FjfErD9yAOlp4IE4ri2io0v1254LAADwO%2BDSW3TWEOZZ3onaplDWnpaAqXN4%2BGtXvohY36wuuv9qC78%2F%2BVij65Ni5p9QiT7NqOi0q5Zni5ldxA2XDpd%2Be3Ju049yLEg5lHcp3%2FtS%2FncDisSd2SCJZrKWZOlz8e5O2210KAiWOVZAuP8S78icKVVd1jZwVAwBOzSGjbviSYr4dApeUOhvqVIxukkq3MhTU%2Bz0gwG4gBtHLaVtetgWCc8trbbjqNDAPm5nvsQURUlx%2F72smyXVQJ9DFhfOmVmJJYYW9XpmqQ4G07ER6JDFb%2FAA3VBNCCSQmLG3mIGC1AV91VZqLqeCjeVyQ8cJBRBZrvjvltdJxyed%2FmP1ywgWI%2BXTwBAT%2Fiwsjh%2F3UUve83edS%2Fk%2Fesj6ukswmp0VjrWfw7zwFo31AQ8QLy3sgSXAkdDGiKsYw2LqSwQY6pgFJKqJ2rvhTDSXjZ30CeDsjjDK65OOK%2Fsm%2FBe65kQi1gTzku8fLDUCuCkQkbCW8%2B4fr8P92gl4Kpq5qFwxIBOon6t4ChiaiReTEyrIfD83f26S4iFnOcrgdIc72rxpj%2FEi%2FAMUGN4a%2Bd8Dlv%2F2h1k6AXslKGMHI%2B6Ct5qZ8oWBNxZ8Wz2zTm%2Ba0DCVGVkGrOyqiwR85A0wPw%2F17lQtvz8ncM06SuxEa&X-Amz-Signature=fe14f14575b444785f11e3f08c8a8acb8d161cb6e459d70ac0d7c6f8b50971ff&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSYRLGT%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIFGCPiNXwTZtfmDMaFnjGT5Pku6gREZrSADEPb904L8yAiB%2FPB6FMYb6ShSChidaoqttMXtd8WnldvVPnYEW0pHHiCr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM0pAmXbLNaz19mFtUKtwDo40q4YdbSlf%2B%2F2UAVlTr5khwv0DKVGVE26dy%2FNuDe8Xaiu49DBcdb77BM2TFeH9GXKTuutS4qPJJCXfQxKXG8fU2Fm4trv0hnh9xYFybzMk%2Blh1BBRqOhjQX%2BVANF3XqLPC7PYHiYsmIlj3h%2F3WbOrpiIaBy%2Bzjn5CRYTdL2fFtRXLm1jDStjbR%2FkyDAD9J%2FjfErD9yAOlp4IE4ri2io0v1254LAADwO%2BDSW3TWEOZZ3onaplDWnpaAqXN4%2BGtXvohY36wuuv9qC78%2F%2BVij65Ni5p9QiT7NqOi0q5Zni5ldxA2XDpd%2Be3Ju049yLEg5lHcp3%2FtS%2FncDisSd2SCJZrKWZOlz8e5O2210KAiWOVZAuP8S78icKVVd1jZwVAwBOzSGjbviSYr4dApeUOhvqVIxukkq3MhTU%2Bz0gwG4gBtHLaVtetgWCc8trbbjqNDAPm5nvsQURUlx%2F72smyXVQJ9DFhfOmVmJJYYW9XpmqQ4G07ER6JDFb%2FAA3VBNCCSQmLG3mIGC1AV91VZqLqeCjeVyQ8cJBRBZrvjvltdJxyed%2FmP1ywgWI%2BXTwBAT%2Fiwsjh%2F3UUve83edS%2Fk%2Fesj6ukswmp0VjrWfw7zwFo31AQ8QLy3sgSXAkdDGiKsYw2LqSwQY6pgFJKqJ2rvhTDSXjZ30CeDsjjDK65OOK%2Fsm%2FBe65kQi1gTzku8fLDUCuCkQkbCW8%2B4fr8P92gl4Kpq5qFwxIBOon6t4ChiaiReTEyrIfD83f26S4iFnOcrgdIc72rxpj%2FEi%2FAMUGN4a%2Bd8Dlv%2F2h1k6AXslKGMHI%2B6Ct5qZ8oWBNxZ8Wz2zTm%2Ba0DCVGVkGrOyqiwR85A0wPw%2F17lQtvz8ncM06SuxEa&X-Amz-Signature=f65b144fbf379631d417fea0272fb26d816fb60a2127dcfb78467676031be651&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSYRLGT%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIFGCPiNXwTZtfmDMaFnjGT5Pku6gREZrSADEPb904L8yAiB%2FPB6FMYb6ShSChidaoqttMXtd8WnldvVPnYEW0pHHiCr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM0pAmXbLNaz19mFtUKtwDo40q4YdbSlf%2B%2F2UAVlTr5khwv0DKVGVE26dy%2FNuDe8Xaiu49DBcdb77BM2TFeH9GXKTuutS4qPJJCXfQxKXG8fU2Fm4trv0hnh9xYFybzMk%2Blh1BBRqOhjQX%2BVANF3XqLPC7PYHiYsmIlj3h%2F3WbOrpiIaBy%2Bzjn5CRYTdL2fFtRXLm1jDStjbR%2FkyDAD9J%2FjfErD9yAOlp4IE4ri2io0v1254LAADwO%2BDSW3TWEOZZ3onaplDWnpaAqXN4%2BGtXvohY36wuuv9qC78%2F%2BVij65Ni5p9QiT7NqOi0q5Zni5ldxA2XDpd%2Be3Ju049yLEg5lHcp3%2FtS%2FncDisSd2SCJZrKWZOlz8e5O2210KAiWOVZAuP8S78icKVVd1jZwVAwBOzSGjbviSYr4dApeUOhvqVIxukkq3MhTU%2Bz0gwG4gBtHLaVtetgWCc8trbbjqNDAPm5nvsQURUlx%2F72smyXVQJ9DFhfOmVmJJYYW9XpmqQ4G07ER6JDFb%2FAA3VBNCCSQmLG3mIGC1AV91VZqLqeCjeVyQ8cJBRBZrvjvltdJxyed%2FmP1ywgWI%2BXTwBAT%2Fiwsjh%2F3UUve83edS%2Fk%2Fesj6ukswmp0VjrWfw7zwFo31AQ8QLy3sgSXAkdDGiKsYw2LqSwQY6pgFJKqJ2rvhTDSXjZ30CeDsjjDK65OOK%2Fsm%2FBe65kQi1gTzku8fLDUCuCkQkbCW8%2B4fr8P92gl4Kpq5qFwxIBOon6t4ChiaiReTEyrIfD83f26S4iFnOcrgdIc72rxpj%2FEi%2FAMUGN4a%2Bd8Dlv%2F2h1k6AXslKGMHI%2B6Ct5qZ8oWBNxZ8Wz2zTm%2Ba0DCVGVkGrOyqiwR85A0wPw%2F17lQtvz8ncM06SuxEa&X-Amz-Signature=3a4b81cc529210f6041d0d71290d28729fa3d43ec9c92726fd201c0c3df233d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
