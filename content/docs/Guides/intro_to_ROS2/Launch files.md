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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657PHU4E2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEO9a3CDjBHTxamKUEjzQ%2BUgCQS3qkAuAE9%2FZcgRBkrPAiEAn8ZpYTuwarjWe4p1V2EJl5eTzO3i15BvfdLYKy%2F0X0Yq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDOPQ1p17tUN7hJEhvircA3PaPkfEPiX8d%2FEBvhEhOgDchaqljdbvSNM%2FkLKkl%2FbYoxVxe524QRcxwoD%2FSh%2BQWbs5GsadO7CdWzSAzWmVHdCFYM9G4oIU2abjG%2BQHdLWQIWjQI7FULLVJHpjdE3m0dj5EkHpv%2F95VVLiV2cMnys25tvo4x3fddVES4kyVscYbzNJhrCXDg8SgTo8YolfrZr%2BtTjTemRjyLi9RaBX19kdIBSFS%2Fxeeleumlsl0oCc2wF4LjAAMx3P%2FjAYI6MrCg2d2VK8QhPfp%2BMiYpPuJrcIEVtPzgdacDv3ayZfgzCvaY0GtAkUAq%2BHvg9PKaX%2FUkC6ewK84V61jLbpI7%2FQFhg8cnVKfSxQsQLt2ZHkHqoufbh1rADbnUo1rcn8%2BNckkCCVXZq7vallLfXf2rUa5SobYcskVVXSvsekwXA8UObbGBO8PhPhOOy6DwLA71Ghvfr%2FSkZFwMQMz7PsX6Sr4ylKRxguxfHGMAECoujCaJrekovHK8fkcd0wINFNqKc2dGBZpwrFdsP2FhfcHObs7cMOt6o51r8LDTFFLV5Jkx7z1TcstK6MYtiA1JBoVDck5WiHmhG8cCI%2FxhSSFTIl9CYZC4DO2Nmu2cF9kRAbglpZE73kUjgczzh2exu2KMNTewsIGOqUB4T2RfdNsQWUJgZ9Wt9ZSUPuSYsGI2jMBJEyNIKA7ZeGFmVJDLwWLvy5HPmuR1nBkD%2BA1dr41j4Zcuu5B7fB6fINrr3X4Bxtc9eStPIsHC5JelK2zm%2FqYhHv69bo70uYe7fnDmz%2FegitBl03TMDrl%2Fq3Pz0YGpS0LP%2BXbU1%2BWjWfWhLwlz7HlfgxeWcmBm8hlb6QFWkV%2FVP3pfh64GlzGQMm5a%2Bcr&X-Amz-Signature=35f036c54b04b8f7d8eb477e751d98f90aabf254d3e0c634bb950cd6e966310c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657PHU4E2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEO9a3CDjBHTxamKUEjzQ%2BUgCQS3qkAuAE9%2FZcgRBkrPAiEAn8ZpYTuwarjWe4p1V2EJl5eTzO3i15BvfdLYKy%2F0X0Yq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDOPQ1p17tUN7hJEhvircA3PaPkfEPiX8d%2FEBvhEhOgDchaqljdbvSNM%2FkLKkl%2FbYoxVxe524QRcxwoD%2FSh%2BQWbs5GsadO7CdWzSAzWmVHdCFYM9G4oIU2abjG%2BQHdLWQIWjQI7FULLVJHpjdE3m0dj5EkHpv%2F95VVLiV2cMnys25tvo4x3fddVES4kyVscYbzNJhrCXDg8SgTo8YolfrZr%2BtTjTemRjyLi9RaBX19kdIBSFS%2Fxeeleumlsl0oCc2wF4LjAAMx3P%2FjAYI6MrCg2d2VK8QhPfp%2BMiYpPuJrcIEVtPzgdacDv3ayZfgzCvaY0GtAkUAq%2BHvg9PKaX%2FUkC6ewK84V61jLbpI7%2FQFhg8cnVKfSxQsQLt2ZHkHqoufbh1rADbnUo1rcn8%2BNckkCCVXZq7vallLfXf2rUa5SobYcskVVXSvsekwXA8UObbGBO8PhPhOOy6DwLA71Ghvfr%2FSkZFwMQMz7PsX6Sr4ylKRxguxfHGMAECoujCaJrekovHK8fkcd0wINFNqKc2dGBZpwrFdsP2FhfcHObs7cMOt6o51r8LDTFFLV5Jkx7z1TcstK6MYtiA1JBoVDck5WiHmhG8cCI%2FxhSSFTIl9CYZC4DO2Nmu2cF9kRAbglpZE73kUjgczzh2exu2KMNTewsIGOqUB4T2RfdNsQWUJgZ9Wt9ZSUPuSYsGI2jMBJEyNIKA7ZeGFmVJDLwWLvy5HPmuR1nBkD%2BA1dr41j4Zcuu5B7fB6fINrr3X4Bxtc9eStPIsHC5JelK2zm%2FqYhHv69bo70uYe7fnDmz%2FegitBl03TMDrl%2Fq3Pz0YGpS0LP%2BXbU1%2BWjWfWhLwlz7HlfgxeWcmBm8hlb6QFWkV%2FVP3pfh64GlzGQMm5a%2Bcr&X-Amz-Signature=65e11c2d4fd6df5e098f70d64cae716c1fc8a78d362c8f43d64b9bb7465e4834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657PHU4E2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEO9a3CDjBHTxamKUEjzQ%2BUgCQS3qkAuAE9%2FZcgRBkrPAiEAn8ZpYTuwarjWe4p1V2EJl5eTzO3i15BvfdLYKy%2F0X0Yq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDOPQ1p17tUN7hJEhvircA3PaPkfEPiX8d%2FEBvhEhOgDchaqljdbvSNM%2FkLKkl%2FbYoxVxe524QRcxwoD%2FSh%2BQWbs5GsadO7CdWzSAzWmVHdCFYM9G4oIU2abjG%2BQHdLWQIWjQI7FULLVJHpjdE3m0dj5EkHpv%2F95VVLiV2cMnys25tvo4x3fddVES4kyVscYbzNJhrCXDg8SgTo8YolfrZr%2BtTjTemRjyLi9RaBX19kdIBSFS%2Fxeeleumlsl0oCc2wF4LjAAMx3P%2FjAYI6MrCg2d2VK8QhPfp%2BMiYpPuJrcIEVtPzgdacDv3ayZfgzCvaY0GtAkUAq%2BHvg9PKaX%2FUkC6ewK84V61jLbpI7%2FQFhg8cnVKfSxQsQLt2ZHkHqoufbh1rADbnUo1rcn8%2BNckkCCVXZq7vallLfXf2rUa5SobYcskVVXSvsekwXA8UObbGBO8PhPhOOy6DwLA71Ghvfr%2FSkZFwMQMz7PsX6Sr4ylKRxguxfHGMAECoujCaJrekovHK8fkcd0wINFNqKc2dGBZpwrFdsP2FhfcHObs7cMOt6o51r8LDTFFLV5Jkx7z1TcstK6MYtiA1JBoVDck5WiHmhG8cCI%2FxhSSFTIl9CYZC4DO2Nmu2cF9kRAbglpZE73kUjgczzh2exu2KMNTewsIGOqUB4T2RfdNsQWUJgZ9Wt9ZSUPuSYsGI2jMBJEyNIKA7ZeGFmVJDLwWLvy5HPmuR1nBkD%2BA1dr41j4Zcuu5B7fB6fINrr3X4Bxtc9eStPIsHC5JelK2zm%2FqYhHv69bo70uYe7fnDmz%2FegitBl03TMDrl%2Fq3Pz0YGpS0LP%2BXbU1%2BWjWfWhLwlz7HlfgxeWcmBm8hlb6QFWkV%2FVP3pfh64GlzGQMm5a%2Bcr&X-Amz-Signature=93852c1f9a1428bc5029452b975b4a51aaa8da166c4ddd9a6d34a7be64317e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
