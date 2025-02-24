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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZYBYY6P%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8pLooQH7pDoLviWM7hSC4Wxt8FR4JPjG9G5XX7XogGAiA1PzEERVpKLRfPTrd9O0F9JRCI2rttvpFRob6P9lvxiSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMv2lRvyz4%2ByslJvvPKtwDlncd%2B549a63dlUdPSwQiFkvvvSf3RZjWQzdlaSfnd7B%2BwFUlplZ%2FvSOxmiLMp3zTrRkbdj7%2FAmRP8cZbvhUW%2Fx1%2BXOlQCHrvI8NaMPnoWAvSKocZtwASKBlb0EP2S0qM2Uy717HDstqEDODhBsYIwy%2BKYZhkCj%2BL4%2Fk3GCvrdzrDNMnr9GYs9Ll5XOydU53AtwPa3TS%2BEC58AozNE9gESfJW9Z%2BJc0BzHnBWveWPi654l7AfiEcoZveve%2BN4TPIUQeM3npvrCB629n7iz5Lcw4Ksuo1jd6vA%2FooCBd7JLRRFXIBs9xDOHhbp4tM%2BFR%2BHC1EFJDibdim3IljUhDNcKZuO3v719TwosBkGSqRx7zPll2LBqFThJIxDCZAai4U97H%2FUQ%2BXfPG2VJDRFsdOXHwZoa2AsDLVObGHRCrGA7O%2BUbFp077MsR1pDXBgg134VCFYWn4ss3Um0sAMEcj9Am4CONpi%2F6V4Ml%2BNabMrf6OZx0YzGsY4P6lokJh1fIBZucUmuoEmezYE3jUJL%2FeiRM1xN2si%2FGBc3RH5rfr3FJV2WA7EHlnUCRvFQKfof9uhNhv1J24WUgoSnG3XoirXprRBn0E0ByxmEH8ArnfGhbRjJj2iqMPjKfL66EfQwr%2FDuvQY6pgEKqCt4jDR%2Fi%2BxYB2afGZ7kCAfEtdcN%2FI86pCJB%2Fjlytg%2BCs8ujFJ5i2cw3ye9UmmJcPcCR3K5PrqKBXdwAeHGg2EqY07GS3OOQb3wQt1N89%2B6wfm3fLdzZDzMTvzfG11a65%2FknVjfI3OHN%2FkSUrBjwdfUVlBtnXGEFiiEiwR9vDSQciGhaKc57BzGyN3dr8xR%2BNH95fEceNUREMyv7WDFtjjoqjbt9&X-Amz-Signature=722511ec3364ef4950a4b940ac9addf0a907680d4d0e1106a5ea72e5029509d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZYBYY6P%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8pLooQH7pDoLviWM7hSC4Wxt8FR4JPjG9G5XX7XogGAiA1PzEERVpKLRfPTrd9O0F9JRCI2rttvpFRob6P9lvxiSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMv2lRvyz4%2ByslJvvPKtwDlncd%2B549a63dlUdPSwQiFkvvvSf3RZjWQzdlaSfnd7B%2BwFUlplZ%2FvSOxmiLMp3zTrRkbdj7%2FAmRP8cZbvhUW%2Fx1%2BXOlQCHrvI8NaMPnoWAvSKocZtwASKBlb0EP2S0qM2Uy717HDstqEDODhBsYIwy%2BKYZhkCj%2BL4%2Fk3GCvrdzrDNMnr9GYs9Ll5XOydU53AtwPa3TS%2BEC58AozNE9gESfJW9Z%2BJc0BzHnBWveWPi654l7AfiEcoZveve%2BN4TPIUQeM3npvrCB629n7iz5Lcw4Ksuo1jd6vA%2FooCBd7JLRRFXIBs9xDOHhbp4tM%2BFR%2BHC1EFJDibdim3IljUhDNcKZuO3v719TwosBkGSqRx7zPll2LBqFThJIxDCZAai4U97H%2FUQ%2BXfPG2VJDRFsdOXHwZoa2AsDLVObGHRCrGA7O%2BUbFp077MsR1pDXBgg134VCFYWn4ss3Um0sAMEcj9Am4CONpi%2F6V4Ml%2BNabMrf6OZx0YzGsY4P6lokJh1fIBZucUmuoEmezYE3jUJL%2FeiRM1xN2si%2FGBc3RH5rfr3FJV2WA7EHlnUCRvFQKfof9uhNhv1J24WUgoSnG3XoirXprRBn0E0ByxmEH8ArnfGhbRjJj2iqMPjKfL66EfQwr%2FDuvQY6pgEKqCt4jDR%2Fi%2BxYB2afGZ7kCAfEtdcN%2FI86pCJB%2Fjlytg%2BCs8ujFJ5i2cw3ye9UmmJcPcCR3K5PrqKBXdwAeHGg2EqY07GS3OOQb3wQt1N89%2B6wfm3fLdzZDzMTvzfG11a65%2FknVjfI3OHN%2FkSUrBjwdfUVlBtnXGEFiiEiwR9vDSQciGhaKc57BzGyN3dr8xR%2BNH95fEceNUREMyv7WDFtjjoqjbt9&X-Amz-Signature=a89c536a677f2b70ea54519dfc31b12f616b1a8d67e7963b2cd70d387ac107ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZYBYY6P%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8pLooQH7pDoLviWM7hSC4Wxt8FR4JPjG9G5XX7XogGAiA1PzEERVpKLRfPTrd9O0F9JRCI2rttvpFRob6P9lvxiSr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMv2lRvyz4%2ByslJvvPKtwDlncd%2B549a63dlUdPSwQiFkvvvSf3RZjWQzdlaSfnd7B%2BwFUlplZ%2FvSOxmiLMp3zTrRkbdj7%2FAmRP8cZbvhUW%2Fx1%2BXOlQCHrvI8NaMPnoWAvSKocZtwASKBlb0EP2S0qM2Uy717HDstqEDODhBsYIwy%2BKYZhkCj%2BL4%2Fk3GCvrdzrDNMnr9GYs9Ll5XOydU53AtwPa3TS%2BEC58AozNE9gESfJW9Z%2BJc0BzHnBWveWPi654l7AfiEcoZveve%2BN4TPIUQeM3npvrCB629n7iz5Lcw4Ksuo1jd6vA%2FooCBd7JLRRFXIBs9xDOHhbp4tM%2BFR%2BHC1EFJDibdim3IljUhDNcKZuO3v719TwosBkGSqRx7zPll2LBqFThJIxDCZAai4U97H%2FUQ%2BXfPG2VJDRFsdOXHwZoa2AsDLVObGHRCrGA7O%2BUbFp077MsR1pDXBgg134VCFYWn4ss3Um0sAMEcj9Am4CONpi%2F6V4Ml%2BNabMrf6OZx0YzGsY4P6lokJh1fIBZucUmuoEmezYE3jUJL%2FeiRM1xN2si%2FGBc3RH5rfr3FJV2WA7EHlnUCRvFQKfof9uhNhv1J24WUgoSnG3XoirXprRBn0E0ByxmEH8ArnfGhbRjJj2iqMPjKfL66EfQwr%2FDuvQY6pgEKqCt4jDR%2Fi%2BxYB2afGZ7kCAfEtdcN%2FI86pCJB%2Fjlytg%2BCs8ujFJ5i2cw3ye9UmmJcPcCR3K5PrqKBXdwAeHGg2EqY07GS3OOQb3wQt1N89%2B6wfm3fLdzZDzMTvzfG11a65%2FknVjfI3OHN%2FkSUrBjwdfUVlBtnXGEFiiEiwR9vDSQciGhaKc57BzGyN3dr8xR%2BNH95fEceNUREMyv7WDFtjjoqjbt9&X-Amz-Signature=85904963e0c8f4aab2c3bce9c33ab44c26a30e7163c2117a8c672e912e71bb8e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
