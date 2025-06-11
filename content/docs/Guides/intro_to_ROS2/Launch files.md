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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM535MWB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQC3EzNiA3cyDiAIvTUKPgEJ7XQDeo3%2FhOM3EVAJuG6bqwIhAPupqIL2cOODzkTcKuVPWdWOmvg4toyl4m8%2FoWYcb64%2FKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMqbTDlM4bkJdM1MIq3AOp7fL8tWRb83HCujv%2B8qdol1at4AKlGYQ3Zg0fYREmyUXtE%2BwExQjv99dEX466pRvbLTBhrkEMgswvs0usMhXT1oE56LbDTd1DZELVmk43QnFR%2BEiYjL4%2B4Fu7I46li8j1DKfnJkP%2Ftoc%2F2RqviGy6HdsT%2FAL9OJGcyIz4i7b9BiQNB%2B5iSotlUApuRUqSD3ijJ%2BRa8IF06f%2FtIQxt98H2SrhHfmhYV5J3iM3iiHQe0MuZe41Od02JwHS4NX%2FIKndZH3k36Iur2%2FBQqDZLw9og6M7bKNZykRq2pgW2dgrlR1HJqMs6f8bIAn7JEFKoWVyTCPLC2LasO7uErpr8X5uYr%2BTrAF1ciyT1tdiKU6Yt1YGEo1bvFx1WV5zqyCFvSJmknBzU0rI30PgdTSA2Y1NaWsHwNoeIX0qpZJXLNtFjKx2d77IzBbsr%2FgYzkKjP6v5MFloiM%2Fsj4aFvUhjT1Nepjc0o6FujsoQGqHNbG%2Ftb85BmWLFSyIiLUKRlsQSv9SU1DL8nroWhEWax18h8iU2kUdJU1%2FAuiNBzA4q3nyHE%2FsdZE5OL4%2Fb4rnPylpUphmSukQcO673HDYuG5A95r4uuRs9q5EN3QFWe4d7fkAefm50hLUoikLs95WqoaTDphqjCBjqkARQYCVj9MBvJpcmKCOZYLCei2EQaedvADNKv4giFWhjfb7KSy4MOJTNhkJvXCl1qw68e9I3sCEgyG57FCBKSDO%2BYzBRdqySvyg7aUE%2B4yevmOM%2FWBEf1lj0Cz5BA71pJSoVncGFzu0cBkllm6N2DwGXKgH%2F%2F6yC20qlV7Mi7du6JwjylRFlWtisU1koFxjeKkONskrlqJZvw44hyPXP%2BNHpVOLKj&X-Amz-Signature=ed9cd51359e93a52e0ec86271b359ef466314e833a78a5c88df493b9ae555e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM535MWB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQC3EzNiA3cyDiAIvTUKPgEJ7XQDeo3%2FhOM3EVAJuG6bqwIhAPupqIL2cOODzkTcKuVPWdWOmvg4toyl4m8%2FoWYcb64%2FKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMqbTDlM4bkJdM1MIq3AOp7fL8tWRb83HCujv%2B8qdol1at4AKlGYQ3Zg0fYREmyUXtE%2BwExQjv99dEX466pRvbLTBhrkEMgswvs0usMhXT1oE56LbDTd1DZELVmk43QnFR%2BEiYjL4%2B4Fu7I46li8j1DKfnJkP%2Ftoc%2F2RqviGy6HdsT%2FAL9OJGcyIz4i7b9BiQNB%2B5iSotlUApuRUqSD3ijJ%2BRa8IF06f%2FtIQxt98H2SrhHfmhYV5J3iM3iiHQe0MuZe41Od02JwHS4NX%2FIKndZH3k36Iur2%2FBQqDZLw9og6M7bKNZykRq2pgW2dgrlR1HJqMs6f8bIAn7JEFKoWVyTCPLC2LasO7uErpr8X5uYr%2BTrAF1ciyT1tdiKU6Yt1YGEo1bvFx1WV5zqyCFvSJmknBzU0rI30PgdTSA2Y1NaWsHwNoeIX0qpZJXLNtFjKx2d77IzBbsr%2FgYzkKjP6v5MFloiM%2Fsj4aFvUhjT1Nepjc0o6FujsoQGqHNbG%2Ftb85BmWLFSyIiLUKRlsQSv9SU1DL8nroWhEWax18h8iU2kUdJU1%2FAuiNBzA4q3nyHE%2FsdZE5OL4%2Fb4rnPylpUphmSukQcO673HDYuG5A95r4uuRs9q5EN3QFWe4d7fkAefm50hLUoikLs95WqoaTDphqjCBjqkARQYCVj9MBvJpcmKCOZYLCei2EQaedvADNKv4giFWhjfb7KSy4MOJTNhkJvXCl1qw68e9I3sCEgyG57FCBKSDO%2BYzBRdqySvyg7aUE%2B4yevmOM%2FWBEf1lj0Cz5BA71pJSoVncGFzu0cBkllm6N2DwGXKgH%2F%2F6yC20qlV7Mi7du6JwjylRFlWtisU1koFxjeKkONskrlqJZvw44hyPXP%2BNHpVOLKj&X-Amz-Signature=a837dff372689f82eaf74025ab6de51fc95249cb2936f019be5ba1e2d45224f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM535MWB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQC3EzNiA3cyDiAIvTUKPgEJ7XQDeo3%2FhOM3EVAJuG6bqwIhAPupqIL2cOODzkTcKuVPWdWOmvg4toyl4m8%2FoWYcb64%2FKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMqbTDlM4bkJdM1MIq3AOp7fL8tWRb83HCujv%2B8qdol1at4AKlGYQ3Zg0fYREmyUXtE%2BwExQjv99dEX466pRvbLTBhrkEMgswvs0usMhXT1oE56LbDTd1DZELVmk43QnFR%2BEiYjL4%2B4Fu7I46li8j1DKfnJkP%2Ftoc%2F2RqviGy6HdsT%2FAL9OJGcyIz4i7b9BiQNB%2B5iSotlUApuRUqSD3ijJ%2BRa8IF06f%2FtIQxt98H2SrhHfmhYV5J3iM3iiHQe0MuZe41Od02JwHS4NX%2FIKndZH3k36Iur2%2FBQqDZLw9og6M7bKNZykRq2pgW2dgrlR1HJqMs6f8bIAn7JEFKoWVyTCPLC2LasO7uErpr8X5uYr%2BTrAF1ciyT1tdiKU6Yt1YGEo1bvFx1WV5zqyCFvSJmknBzU0rI30PgdTSA2Y1NaWsHwNoeIX0qpZJXLNtFjKx2d77IzBbsr%2FgYzkKjP6v5MFloiM%2Fsj4aFvUhjT1Nepjc0o6FujsoQGqHNbG%2Ftb85BmWLFSyIiLUKRlsQSv9SU1DL8nroWhEWax18h8iU2kUdJU1%2FAuiNBzA4q3nyHE%2FsdZE5OL4%2Fb4rnPylpUphmSukQcO673HDYuG5A95r4uuRs9q5EN3QFWe4d7fkAefm50hLUoikLs95WqoaTDphqjCBjqkARQYCVj9MBvJpcmKCOZYLCei2EQaedvADNKv4giFWhjfb7KSy4MOJTNhkJvXCl1qw68e9I3sCEgyG57FCBKSDO%2BYzBRdqySvyg7aUE%2B4yevmOM%2FWBEf1lj0Cz5BA71pJSoVncGFzu0cBkllm6N2DwGXKgH%2F%2F6yC20qlV7Mi7du6JwjylRFlWtisU1koFxjeKkONskrlqJZvw44hyPXP%2BNHpVOLKj&X-Amz-Signature=2ba48e7aa7065ce5c72fa8b0680a466b71f8bb2acbb37b359e5458597d14c271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
