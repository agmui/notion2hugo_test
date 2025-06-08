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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEN7K4YF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCapXcIE6McDiC%2FEPddbd5Nm2kY5Y8OIFg7nn%2BbBZfGTgIhAKlZ8YrEMyjSSXSEYe6DaGjZBcy%2Fr7aDp1nTjW3H%2FTWdKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUJGjHdIRgCiFTiRsq3AOs7OBZ3j8cLABRRiK0aapnjTWXabWPDuLInYc8WTTOYCGElY2EotEuqfmCVYpZ64XCYkUBw%2BmmYG%2FiUuk8aq0E2MiQtg3I%2BF1iM5rW9UBGX%2FuA2LUGZWyZ%2B3pQtc08fKET1nmTelePAg3aTBb5aNdtuFzYVLhMyeLTRpeqhvL%2FJkAEqKflhqzUJkPI6j2d5JW68xBIa9RZZKATAMhygkOMa3ly0SXYb8tkYGzJwQ%2FCImO3tRba7p3XIQ1C19x0Kc5fSQE079ecq3%2BeN5Uhd1Ka1WNyF6h8nugUgqnEy3WFTjMYaMp8g0PEz7AOM4dLDnfvV%2BX3kNwNp7g5vV3wrLo2qTs2bFWexdv%2BRBY9n96vxQtbvBwUTCRc2wKpla6fNIPB7snhxiR3PRk5szgm%2BXjM%2BDOd6su1bRxdyzuDDI7YzJR4vvWpbfIhodUqaEVAcuZs61uK4UXIci2ExtQeTxkXXPlDXHHyLxa7DeKPMYFaCNEfUJWPuOwMRkzwW2JDBMXcd4a5GwoKUumdYbQEDOJX9EyjapDlEkTvLoFgh3RKEDF1VOsP3gDNwtALuaqNHfPZFC9NNCw00lDYrKLd2vCsOsbdDvm7CcCkqdnpnelKebP6RcOPXvo%2BmqN4GDCl4pfCBjqkAQuuwEvUHuJ7W%2BhQb1jHIiL8ton5uHvICHgwnDf0tIG8Dcdz1OYoOwVkfEGg6aXGx0M3a8y79xl78zaAAo83KToKgMoZo3hEynOfpJmJgsExaSlH1NB40qdz%2FcPL8yTjSrMCM3xa%2BYhzgkt0hpcItN4aOv8x5mOwvC5XsfK07pFY1q9Q3AfDl8gEfCJr24ePaYbvi%2FPuwLXhVKG3a75MSymkwRni&X-Amz-Signature=2241a3e02b7cb7d76cf421cc5a9af83d08030f1adab20b2c3f00eefd884769e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEN7K4YF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCapXcIE6McDiC%2FEPddbd5Nm2kY5Y8OIFg7nn%2BbBZfGTgIhAKlZ8YrEMyjSSXSEYe6DaGjZBcy%2Fr7aDp1nTjW3H%2FTWdKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUJGjHdIRgCiFTiRsq3AOs7OBZ3j8cLABRRiK0aapnjTWXabWPDuLInYc8WTTOYCGElY2EotEuqfmCVYpZ64XCYkUBw%2BmmYG%2FiUuk8aq0E2MiQtg3I%2BF1iM5rW9UBGX%2FuA2LUGZWyZ%2B3pQtc08fKET1nmTelePAg3aTBb5aNdtuFzYVLhMyeLTRpeqhvL%2FJkAEqKflhqzUJkPI6j2d5JW68xBIa9RZZKATAMhygkOMa3ly0SXYb8tkYGzJwQ%2FCImO3tRba7p3XIQ1C19x0Kc5fSQE079ecq3%2BeN5Uhd1Ka1WNyF6h8nugUgqnEy3WFTjMYaMp8g0PEz7AOM4dLDnfvV%2BX3kNwNp7g5vV3wrLo2qTs2bFWexdv%2BRBY9n96vxQtbvBwUTCRc2wKpla6fNIPB7snhxiR3PRk5szgm%2BXjM%2BDOd6su1bRxdyzuDDI7YzJR4vvWpbfIhodUqaEVAcuZs61uK4UXIci2ExtQeTxkXXPlDXHHyLxa7DeKPMYFaCNEfUJWPuOwMRkzwW2JDBMXcd4a5GwoKUumdYbQEDOJX9EyjapDlEkTvLoFgh3RKEDF1VOsP3gDNwtALuaqNHfPZFC9NNCw00lDYrKLd2vCsOsbdDvm7CcCkqdnpnelKebP6RcOPXvo%2BmqN4GDCl4pfCBjqkAQuuwEvUHuJ7W%2BhQb1jHIiL8ton5uHvICHgwnDf0tIG8Dcdz1OYoOwVkfEGg6aXGx0M3a8y79xl78zaAAo83KToKgMoZo3hEynOfpJmJgsExaSlH1NB40qdz%2FcPL8yTjSrMCM3xa%2BYhzgkt0hpcItN4aOv8x5mOwvC5XsfK07pFY1q9Q3AfDl8gEfCJr24ePaYbvi%2FPuwLXhVKG3a75MSymkwRni&X-Amz-Signature=c04b274226c9f4443d4bc88f1d61af37e4394b01255e841791c0a88fd884aa84&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEN7K4YF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCapXcIE6McDiC%2FEPddbd5Nm2kY5Y8OIFg7nn%2BbBZfGTgIhAKlZ8YrEMyjSSXSEYe6DaGjZBcy%2Fr7aDp1nTjW3H%2FTWdKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUJGjHdIRgCiFTiRsq3AOs7OBZ3j8cLABRRiK0aapnjTWXabWPDuLInYc8WTTOYCGElY2EotEuqfmCVYpZ64XCYkUBw%2BmmYG%2FiUuk8aq0E2MiQtg3I%2BF1iM5rW9UBGX%2FuA2LUGZWyZ%2B3pQtc08fKET1nmTelePAg3aTBb5aNdtuFzYVLhMyeLTRpeqhvL%2FJkAEqKflhqzUJkPI6j2d5JW68xBIa9RZZKATAMhygkOMa3ly0SXYb8tkYGzJwQ%2FCImO3tRba7p3XIQ1C19x0Kc5fSQE079ecq3%2BeN5Uhd1Ka1WNyF6h8nugUgqnEy3WFTjMYaMp8g0PEz7AOM4dLDnfvV%2BX3kNwNp7g5vV3wrLo2qTs2bFWexdv%2BRBY9n96vxQtbvBwUTCRc2wKpla6fNIPB7snhxiR3PRk5szgm%2BXjM%2BDOd6su1bRxdyzuDDI7YzJR4vvWpbfIhodUqaEVAcuZs61uK4UXIci2ExtQeTxkXXPlDXHHyLxa7DeKPMYFaCNEfUJWPuOwMRkzwW2JDBMXcd4a5GwoKUumdYbQEDOJX9EyjapDlEkTvLoFgh3RKEDF1VOsP3gDNwtALuaqNHfPZFC9NNCw00lDYrKLd2vCsOsbdDvm7CcCkqdnpnelKebP6RcOPXvo%2BmqN4GDCl4pfCBjqkAQuuwEvUHuJ7W%2BhQb1jHIiL8ton5uHvICHgwnDf0tIG8Dcdz1OYoOwVkfEGg6aXGx0M3a8y79xl78zaAAo83KToKgMoZo3hEynOfpJmJgsExaSlH1NB40qdz%2FcPL8yTjSrMCM3xa%2BYhzgkt0hpcItN4aOv8x5mOwvC5XsfK07pFY1q9Q3AfDl8gEfCJr24ePaYbvi%2FPuwLXhVKG3a75MSymkwRni&X-Amz-Signature=7d2077255186f3ac15f847fe4e83d023dbc23f72ccd273d1be1916d750b462e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
