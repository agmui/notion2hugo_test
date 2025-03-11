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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AU3UDFY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDztB0lQU6sbBG0uskgml5kNJpPPWi11aMdy3oqWJz44gIhAMlvVnHfxaBReU7YGn00GOjNOmyP7SfzFdVDwGb2R1WmKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKVmdcYZAp5oWRx7Qq3AM9x6cZ2f%2B3Lv63m9u5e2P4Mw%2BLCY3DX8%2FPI1lB14zleUM2%2F43EX%2FwMlPH2E1blnk9Kd%2Bi88AT7ALiuNwGaUFG7kvJE8LNXE0HB8rw8M74Cy2ZFIJRI7HMpP242Vx%2FFxRAUw68swGxCmB1rfOknhV6sVnXdcgXS5rISpBo%2FfgR5hXW%2FvBW1AzEZRsLo1AvkLUzQFed%2BdzB3MAyq5aeYkfRakuajMolRkeAvlFl8BFKb9XXOY2N8V2BeOVtE0mBDTWRiyCJnYR4DrnPyYtoWog6qn9jGerQiluTlRn2%2BcMoMGjpASXD5%2BaGFVyAWUugEmInMdcYntpgoIqHWLpybrDzJVyMwHGY3neg6qgl4gEEWKzczyTjRR4rTCri%2BKN0cs%2FkYA7lYJBSYGEOyQdbbISQyMJgEhHlew4CAXcbfEvPHEtY5zg6s0rEqzK7y50VEIVTLd3pdXrP%2BKjxeLnmNlbla2o658%2BYBixm9ETKUGB6ZAwhISX2z8BLU2ulVxPt7dGMIUwRDfZvjMaaUFkP7GmuoKQdZitpFQrNMmFO5007oBwYWq%2BERbEXrYtHDTWZbahHz22acvaD5Uf2GX87k9klkQOu7%2FmXDYqvnGnyV2nlqC9B9Mw6Ek30o09625jCVjMG%2BBjqkASbdJSjR9%2FoLRIt4xnOB6PJ99qZne3HMp1xYElzxsxeAe2SogXqe9JsZlNtJlp9WcT5R85XL5r%2BB1DrmtXcF89XfmVg8Fm0LJBN%2FsBYj9OlkffC%2F7eNfdRSR%2B8FEFYswPzr0RPxhxFQBAvJ4UrpVHPSU0EmMZFpJWh3QkLlA4e1jv%2FkGBBXCUwhF3VfiEW8gPjdNmRVZMke08KgOpsT2QOzB%2FACu&X-Amz-Signature=abcdc285a2b6f3882936d407951e9bab42ac8d7b4d28dc5ba5580e3337161740&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AU3UDFY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDztB0lQU6sbBG0uskgml5kNJpPPWi11aMdy3oqWJz44gIhAMlvVnHfxaBReU7YGn00GOjNOmyP7SfzFdVDwGb2R1WmKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKVmdcYZAp5oWRx7Qq3AM9x6cZ2f%2B3Lv63m9u5e2P4Mw%2BLCY3DX8%2FPI1lB14zleUM2%2F43EX%2FwMlPH2E1blnk9Kd%2Bi88AT7ALiuNwGaUFG7kvJE8LNXE0HB8rw8M74Cy2ZFIJRI7HMpP242Vx%2FFxRAUw68swGxCmB1rfOknhV6sVnXdcgXS5rISpBo%2FfgR5hXW%2FvBW1AzEZRsLo1AvkLUzQFed%2BdzB3MAyq5aeYkfRakuajMolRkeAvlFl8BFKb9XXOY2N8V2BeOVtE0mBDTWRiyCJnYR4DrnPyYtoWog6qn9jGerQiluTlRn2%2BcMoMGjpASXD5%2BaGFVyAWUugEmInMdcYntpgoIqHWLpybrDzJVyMwHGY3neg6qgl4gEEWKzczyTjRR4rTCri%2BKN0cs%2FkYA7lYJBSYGEOyQdbbISQyMJgEhHlew4CAXcbfEvPHEtY5zg6s0rEqzK7y50VEIVTLd3pdXrP%2BKjxeLnmNlbla2o658%2BYBixm9ETKUGB6ZAwhISX2z8BLU2ulVxPt7dGMIUwRDfZvjMaaUFkP7GmuoKQdZitpFQrNMmFO5007oBwYWq%2BERbEXrYtHDTWZbahHz22acvaD5Uf2GX87k9klkQOu7%2FmXDYqvnGnyV2nlqC9B9Mw6Ek30o09625jCVjMG%2BBjqkASbdJSjR9%2FoLRIt4xnOB6PJ99qZne3HMp1xYElzxsxeAe2SogXqe9JsZlNtJlp9WcT5R85XL5r%2BB1DrmtXcF89XfmVg8Fm0LJBN%2FsBYj9OlkffC%2F7eNfdRSR%2B8FEFYswPzr0RPxhxFQBAvJ4UrpVHPSU0EmMZFpJWh3QkLlA4e1jv%2FkGBBXCUwhF3VfiEW8gPjdNmRVZMke08KgOpsT2QOzB%2FACu&X-Amz-Signature=4ed62cdd0e2ea79a0eeb93e06fa58f749132213e3e1e9bf8cfccb5ca76759fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AU3UDFY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDztB0lQU6sbBG0uskgml5kNJpPPWi11aMdy3oqWJz44gIhAMlvVnHfxaBReU7YGn00GOjNOmyP7SfzFdVDwGb2R1WmKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKVmdcYZAp5oWRx7Qq3AM9x6cZ2f%2B3Lv63m9u5e2P4Mw%2BLCY3DX8%2FPI1lB14zleUM2%2F43EX%2FwMlPH2E1blnk9Kd%2Bi88AT7ALiuNwGaUFG7kvJE8LNXE0HB8rw8M74Cy2ZFIJRI7HMpP242Vx%2FFxRAUw68swGxCmB1rfOknhV6sVnXdcgXS5rISpBo%2FfgR5hXW%2FvBW1AzEZRsLo1AvkLUzQFed%2BdzB3MAyq5aeYkfRakuajMolRkeAvlFl8BFKb9XXOY2N8V2BeOVtE0mBDTWRiyCJnYR4DrnPyYtoWog6qn9jGerQiluTlRn2%2BcMoMGjpASXD5%2BaGFVyAWUugEmInMdcYntpgoIqHWLpybrDzJVyMwHGY3neg6qgl4gEEWKzczyTjRR4rTCri%2BKN0cs%2FkYA7lYJBSYGEOyQdbbISQyMJgEhHlew4CAXcbfEvPHEtY5zg6s0rEqzK7y50VEIVTLd3pdXrP%2BKjxeLnmNlbla2o658%2BYBixm9ETKUGB6ZAwhISX2z8BLU2ulVxPt7dGMIUwRDfZvjMaaUFkP7GmuoKQdZitpFQrNMmFO5007oBwYWq%2BERbEXrYtHDTWZbahHz22acvaD5Uf2GX87k9klkQOu7%2FmXDYqvnGnyV2nlqC9B9Mw6Ek30o09625jCVjMG%2BBjqkASbdJSjR9%2FoLRIt4xnOB6PJ99qZne3HMp1xYElzxsxeAe2SogXqe9JsZlNtJlp9WcT5R85XL5r%2BB1DrmtXcF89XfmVg8Fm0LJBN%2FsBYj9OlkffC%2F7eNfdRSR%2B8FEFYswPzr0RPxhxFQBAvJ4UrpVHPSU0EmMZFpJWh3QkLlA4e1jv%2FkGBBXCUwhF3VfiEW8gPjdNmRVZMke08KgOpsT2QOzB%2FACu&X-Amz-Signature=b697218c47efcbe9175fac39ce25e79a194c33b0a8723906b9e5244b0b439885&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
