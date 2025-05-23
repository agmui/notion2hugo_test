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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3OGVUAA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBEXJwZloL5ACIc9gmMyRcQv8Ftq0VZRMIJO6OXKnvaGAiA52a79kl8idydOE%2FOVcpI5CdmQDAJk4NWTlT8tsiQRRSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxYe%2BETC28jp1dVUmKtwDa1bhZ9vEHp8X%2Fa%2FaYorQs1Yrttqb5BBYD%2BmBY8KGoxRVk5xIR0g3S%2FoLhZwDrRCT7p%2FcUxMD7uriafwlJN4kwg7OgUgxU0kC4aCLB5WyIi%2F1MaqyxbiC14aE2sLcF9jXMBDlBFprvjptEJjIeUObagusfoZM4uIyorHB5s1peETfYg5YqtteEun8Ax5nPYaDXeovcOuqGPy3Dhfu0K10Z%2FZTHz6N%2BzCJyOdGG%2F1LZsbjFdWDubn08om2kpCTk3Kojc9aPJLpJ5KzBAVyFcd6IJactbgPt1K%2FIVf8PRJAdcDj0JSqhuXJpMX6ER1%2FzUp6K2X%2BXa0TIV2KoGdSjfIKKXKhl8jEk4Az6avaAbdiiGE%2FbK2K2QWJrX6FDXzJoIWzgeXPD5zu08os5Exr58eCPceltVIgLUllwh4R%2B2cHk8FcpGPw%2FmNxiywVI1pybNTWpeeEYtihLWF42uHsMPSosPcoz4tn0yGUvFW8gSFBXXqvbMc2cxkJFPsrYBBJ8YH1M6PWpRoDiRW682lS89gUlQeESUaQM%2B9WxwY8rjILQg0%2BolP7h4R7W3ObN21JY6bV4ExTqz1aamnwVT2lK0iv6gCDlA7JwzU0Vw4K%2Fmiu0e8pSPkF54N25%2BremrUwisq%2BwQY6pgH2cJlqUBj%2FGURU%2BJlSqN85tr3AnDuLE52OnacfcNA8emf%2FUsa4m4ELp1%2BBRphHBgrgOQHkE1lvfQ8ThHvjdKqBVGahyGwoU9iUKGau%2FeDVYAkeGQEvO1RaOLI%2B%2Bo9F1G0b%2F0kqUDEFm%2BXYmVrB7sSoldM32AMTkClMhJkk5Z7IH%2FHd85autQEX7xKxquHv3Ywn4crURTfD7kSJI039Uzop4ckxxAkD&X-Amz-Signature=fac5d3146b4d3c46df464bd3b3c0f070ffd42c1629cabb78c1dfc3ee9200273d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3OGVUAA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBEXJwZloL5ACIc9gmMyRcQv8Ftq0VZRMIJO6OXKnvaGAiA52a79kl8idydOE%2FOVcpI5CdmQDAJk4NWTlT8tsiQRRSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxYe%2BETC28jp1dVUmKtwDa1bhZ9vEHp8X%2Fa%2FaYorQs1Yrttqb5BBYD%2BmBY8KGoxRVk5xIR0g3S%2FoLhZwDrRCT7p%2FcUxMD7uriafwlJN4kwg7OgUgxU0kC4aCLB5WyIi%2F1MaqyxbiC14aE2sLcF9jXMBDlBFprvjptEJjIeUObagusfoZM4uIyorHB5s1peETfYg5YqtteEun8Ax5nPYaDXeovcOuqGPy3Dhfu0K10Z%2FZTHz6N%2BzCJyOdGG%2F1LZsbjFdWDubn08om2kpCTk3Kojc9aPJLpJ5KzBAVyFcd6IJactbgPt1K%2FIVf8PRJAdcDj0JSqhuXJpMX6ER1%2FzUp6K2X%2BXa0TIV2KoGdSjfIKKXKhl8jEk4Az6avaAbdiiGE%2FbK2K2QWJrX6FDXzJoIWzgeXPD5zu08os5Exr58eCPceltVIgLUllwh4R%2B2cHk8FcpGPw%2FmNxiywVI1pybNTWpeeEYtihLWF42uHsMPSosPcoz4tn0yGUvFW8gSFBXXqvbMc2cxkJFPsrYBBJ8YH1M6PWpRoDiRW682lS89gUlQeESUaQM%2B9WxwY8rjILQg0%2BolP7h4R7W3ObN21JY6bV4ExTqz1aamnwVT2lK0iv6gCDlA7JwzU0Vw4K%2Fmiu0e8pSPkF54N25%2BremrUwisq%2BwQY6pgH2cJlqUBj%2FGURU%2BJlSqN85tr3AnDuLE52OnacfcNA8emf%2FUsa4m4ELp1%2BBRphHBgrgOQHkE1lvfQ8ThHvjdKqBVGahyGwoU9iUKGau%2FeDVYAkeGQEvO1RaOLI%2B%2Bo9F1G0b%2F0kqUDEFm%2BXYmVrB7sSoldM32AMTkClMhJkk5Z7IH%2FHd85autQEX7xKxquHv3Ywn4crURTfD7kSJI039Uzop4ckxxAkD&X-Amz-Signature=17d322bfe2da9301d31853318f9d837ae199226b68ce07ee86fe4772b78cb881&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3OGVUAA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBEXJwZloL5ACIc9gmMyRcQv8Ftq0VZRMIJO6OXKnvaGAiA52a79kl8idydOE%2FOVcpI5CdmQDAJk4NWTlT8tsiQRRSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxYe%2BETC28jp1dVUmKtwDa1bhZ9vEHp8X%2Fa%2FaYorQs1Yrttqb5BBYD%2BmBY8KGoxRVk5xIR0g3S%2FoLhZwDrRCT7p%2FcUxMD7uriafwlJN4kwg7OgUgxU0kC4aCLB5WyIi%2F1MaqyxbiC14aE2sLcF9jXMBDlBFprvjptEJjIeUObagusfoZM4uIyorHB5s1peETfYg5YqtteEun8Ax5nPYaDXeovcOuqGPy3Dhfu0K10Z%2FZTHz6N%2BzCJyOdGG%2F1LZsbjFdWDubn08om2kpCTk3Kojc9aPJLpJ5KzBAVyFcd6IJactbgPt1K%2FIVf8PRJAdcDj0JSqhuXJpMX6ER1%2FzUp6K2X%2BXa0TIV2KoGdSjfIKKXKhl8jEk4Az6avaAbdiiGE%2FbK2K2QWJrX6FDXzJoIWzgeXPD5zu08os5Exr58eCPceltVIgLUllwh4R%2B2cHk8FcpGPw%2FmNxiywVI1pybNTWpeeEYtihLWF42uHsMPSosPcoz4tn0yGUvFW8gSFBXXqvbMc2cxkJFPsrYBBJ8YH1M6PWpRoDiRW682lS89gUlQeESUaQM%2B9WxwY8rjILQg0%2BolP7h4R7W3ObN21JY6bV4ExTqz1aamnwVT2lK0iv6gCDlA7JwzU0Vw4K%2Fmiu0e8pSPkF54N25%2BremrUwisq%2BwQY6pgH2cJlqUBj%2FGURU%2BJlSqN85tr3AnDuLE52OnacfcNA8emf%2FUsa4m4ELp1%2BBRphHBgrgOQHkE1lvfQ8ThHvjdKqBVGahyGwoU9iUKGau%2FeDVYAkeGQEvO1RaOLI%2B%2Bo9F1G0b%2F0kqUDEFm%2BXYmVrB7sSoldM32AMTkClMhJkk5Z7IH%2FHd85autQEX7xKxquHv3Ywn4crURTfD7kSJI039Uzop4ckxxAkD&X-Amz-Signature=71e6c15181db6f00093f19c2652b0d5b29437aeb56ee36328e136e33472138ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
