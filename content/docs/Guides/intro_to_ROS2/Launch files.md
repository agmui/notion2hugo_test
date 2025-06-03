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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6IOC6UO%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCv32QrQTWJOleoryVAaJqAxuCVKfCW%2Faq0RsrJPm7gkQIgdwuLm1kmYwtyHui8ObeZqoqD7drflkQUGq5EWJZHAeAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLpNoV0DrC7Moscs9ircA4bDxaSkWK8OnhM%2F%2FsU0Z%2F1sFOA2fGKb47XK7yLq2PjkEwbIcHTTsmwhHpMzkEiRuX%2Fe6VrzMWJ%2F9Cucq3%2Fb%2FzFZeYOy14v2nzRrqPAhdRZWj4EwjN3ne40FwjQFYsYVpwFy6zgmPegQhYk7yD7mZc9i07xod7ah4O2ZBBl7wqrOTIblmd06C1%2FpOp4JJZ%2F7ZUiqlNDrsROfL2AIh0YtmmMnG5Y7rNFpxqBA%2Bj1crhmxU2L8zLzhXmt2k97K28BCYRjH8ssslybQpdqKhB2ntA5cAT9FhzKp0PO87zmUrdWarAfTpU%2FJuEeHIi1ww3rfMt%2BLJdGBnEPYrMuuRkX%2B0zfrGSx33fVbjpJl5hAYOLY9q6gzqMUz21oK9ZO54T5H5FYbnP1TwIGv53I586oqrK2ghaPk1E8vbId735Hlg4KJDEyZ1yKSkRIWUXArnuvb13KLO6f1mdX1%2Bza00hJTEa0AISUhob1MycNc8XBmR4XoUo5U8ab06jy8EC2HhnWQn6Su%2Bft%2Bq321GoawqIy%2BcfP1Buj1SdWSTpKvm5R2br3uLNXkL%2BRer1iCUOgCW2%2Bp6EvYGaoID%2B3QK6BgLwIru0aHBFNLG%2FSTve1cNXjM9EQZZ%2Fq6%2BmHHO3NHm%2FaiMKfS%2FMEGOqUBHTgXvE0F8f22cYGVVobXNxrynwDnocDJXx8V5MMFXx0pIU3kJkEQ2Rf2vBmcJpXhCREMWolfBizAQQbA06ypgjBZfOkanjz0N8ycBjREyhzrB4eXprMK3qJMj5NmEeaSfwMyzBpWR2SSLuV3fqaVRS%2BDwK7FxbAC%2BZPjOxvanVsS%2Fr%2BBjqf1XWDMWE5AbfnoiK8ouca3%2Bg1Z0IyKpVvU%2FFq6VlAm&X-Amz-Signature=73bc42f28ec83576a3b26cbfa3f8efb031a57ebb5ffbdd43f14ec4746d009ecf&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6IOC6UO%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCv32QrQTWJOleoryVAaJqAxuCVKfCW%2Faq0RsrJPm7gkQIgdwuLm1kmYwtyHui8ObeZqoqD7drflkQUGq5EWJZHAeAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLpNoV0DrC7Moscs9ircA4bDxaSkWK8OnhM%2F%2FsU0Z%2F1sFOA2fGKb47XK7yLq2PjkEwbIcHTTsmwhHpMzkEiRuX%2Fe6VrzMWJ%2F9Cucq3%2Fb%2FzFZeYOy14v2nzRrqPAhdRZWj4EwjN3ne40FwjQFYsYVpwFy6zgmPegQhYk7yD7mZc9i07xod7ah4O2ZBBl7wqrOTIblmd06C1%2FpOp4JJZ%2F7ZUiqlNDrsROfL2AIh0YtmmMnG5Y7rNFpxqBA%2Bj1crhmxU2L8zLzhXmt2k97K28BCYRjH8ssslybQpdqKhB2ntA5cAT9FhzKp0PO87zmUrdWarAfTpU%2FJuEeHIi1ww3rfMt%2BLJdGBnEPYrMuuRkX%2B0zfrGSx33fVbjpJl5hAYOLY9q6gzqMUz21oK9ZO54T5H5FYbnP1TwIGv53I586oqrK2ghaPk1E8vbId735Hlg4KJDEyZ1yKSkRIWUXArnuvb13KLO6f1mdX1%2Bza00hJTEa0AISUhob1MycNc8XBmR4XoUo5U8ab06jy8EC2HhnWQn6Su%2Bft%2Bq321GoawqIy%2BcfP1Buj1SdWSTpKvm5R2br3uLNXkL%2BRer1iCUOgCW2%2Bp6EvYGaoID%2B3QK6BgLwIru0aHBFNLG%2FSTve1cNXjM9EQZZ%2Fq6%2BmHHO3NHm%2FaiMKfS%2FMEGOqUBHTgXvE0F8f22cYGVVobXNxrynwDnocDJXx8V5MMFXx0pIU3kJkEQ2Rf2vBmcJpXhCREMWolfBizAQQbA06ypgjBZfOkanjz0N8ycBjREyhzrB4eXprMK3qJMj5NmEeaSfwMyzBpWR2SSLuV3fqaVRS%2BDwK7FxbAC%2BZPjOxvanVsS%2Fr%2BBjqf1XWDMWE5AbfnoiK8ouca3%2Bg1Z0IyKpVvU%2FFq6VlAm&X-Amz-Signature=70b2c94dc50ba31e0cbb4fc2994f9ea3d73be33f204f06d0a05bf025bffed00d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6IOC6UO%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCv32QrQTWJOleoryVAaJqAxuCVKfCW%2Faq0RsrJPm7gkQIgdwuLm1kmYwtyHui8ObeZqoqD7drflkQUGq5EWJZHAeAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLpNoV0DrC7Moscs9ircA4bDxaSkWK8OnhM%2F%2FsU0Z%2F1sFOA2fGKb47XK7yLq2PjkEwbIcHTTsmwhHpMzkEiRuX%2Fe6VrzMWJ%2F9Cucq3%2Fb%2FzFZeYOy14v2nzRrqPAhdRZWj4EwjN3ne40FwjQFYsYVpwFy6zgmPegQhYk7yD7mZc9i07xod7ah4O2ZBBl7wqrOTIblmd06C1%2FpOp4JJZ%2F7ZUiqlNDrsROfL2AIh0YtmmMnG5Y7rNFpxqBA%2Bj1crhmxU2L8zLzhXmt2k97K28BCYRjH8ssslybQpdqKhB2ntA5cAT9FhzKp0PO87zmUrdWarAfTpU%2FJuEeHIi1ww3rfMt%2BLJdGBnEPYrMuuRkX%2B0zfrGSx33fVbjpJl5hAYOLY9q6gzqMUz21oK9ZO54T5H5FYbnP1TwIGv53I586oqrK2ghaPk1E8vbId735Hlg4KJDEyZ1yKSkRIWUXArnuvb13KLO6f1mdX1%2Bza00hJTEa0AISUhob1MycNc8XBmR4XoUo5U8ab06jy8EC2HhnWQn6Su%2Bft%2Bq321GoawqIy%2BcfP1Buj1SdWSTpKvm5R2br3uLNXkL%2BRer1iCUOgCW2%2Bp6EvYGaoID%2B3QK6BgLwIru0aHBFNLG%2FSTve1cNXjM9EQZZ%2Fq6%2BmHHO3NHm%2FaiMKfS%2FMEGOqUBHTgXvE0F8f22cYGVVobXNxrynwDnocDJXx8V5MMFXx0pIU3kJkEQ2Rf2vBmcJpXhCREMWolfBizAQQbA06ypgjBZfOkanjz0N8ycBjREyhzrB4eXprMK3qJMj5NmEeaSfwMyzBpWR2SSLuV3fqaVRS%2BDwK7FxbAC%2BZPjOxvanVsS%2Fr%2BBjqf1XWDMWE5AbfnoiK8ouca3%2Bg1Z0IyKpVvU%2FFq6VlAm&X-Amz-Signature=fe901970596444aaae6c9d6b92c9162c6a5fd8a8c5651c8893af181e5b329057&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
