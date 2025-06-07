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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC76XIMV%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVrkgEmAqKVT3wk4gIkwPOTgVZLwI%2BRyj62tEZ24sLrAIhAOAA0p6KEyPdUQvvrL8xNzQof1L2ZSPYkVQUDTw4Sv1LKv8DCHAQABoMNjM3NDIzMTgzODA1IgzVj8OoEJkl3RiucLgq3AOJcVlt8WPQAxUwmEqQQ6aALElxHA7ua1Jxt0ZjuR%2BaF3QLvFFsi7CFwQ97WI6ewpNIYhrDp%2FDbNcAeWtoxrTket8w%2FQ7YHGl7OR5xqdvevvTMGFVT1Q%2FvRFUfZIT8Omuqi%2FzxU1vLAci7rOoFvp0uyOPlmWRIAgcmdcgo3z9%2FlndZKnANM%2FkGHTs9K4phSoKZuplc4OKZiU6b%2FTbZVRNoJ3sKV%2FpATKvoTp9hAIQ7bRn4VrdaICLjxksuCQ6Lim%2FehILoAzBc8JiuGl1ATlvCVY8oHPoM%2FadwcbKU7tZKWaoYB9g6MjIn%2BKv7yS1kdpEdCzROulqL6dCn7rCnAdTuHE5g9e56dJgjMxlvFvq7RNselIC8ZyhPgUngR0Z85bh2KiqXS6hDZRuItOc3IyjyT2MRVpFvouac0ZA%2Frs7PxbWXwECwRGlnIpzI9TLdkgXXnn%2Bl0Vl6athE6lCpybvLWwiMa%2FDOwL8g1tSGw0sVKGmhSQDo16wZhrwglsNSa%2BZhbyxSFLdHucmO%2B%2B0WvjyEHKRz0U6ACcztEhjhef2D76b2Bqt%2FVa1JJJEyg7rym4aJKpVL5HHsH60U%2Fip4EY5sAODiZEa3BLciWLsxFtcIM9%2BuvUZfXIfAvLKU1LDDAt4%2FCBjqkAUvLC3KTHZjYpRnwgZw7o%2FDvASTmVJ1PeGiHEZWPyJsYVTEu%2BU1VjCPneDkVZG%2BLNX0eEMFGHQWhBSJlaXc%2B5I8iO497iYXn4GlOiytNmOaEolFSsUKGEi4lcQ4lPO9uc8gdl3%2BPLeHLXNNIt9fqxQWW4wYSkrlWQlnR%2BQtMNve6FPf6ozGD8cSHn70MOrcTQMJtSGo4rBlSQOH0VGOpv2HfK1Wa&X-Amz-Signature=480b326ff449b699697cfa1e2d5f4ffa5a25247709947ada901cabf88ff82758&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC76XIMV%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVrkgEmAqKVT3wk4gIkwPOTgVZLwI%2BRyj62tEZ24sLrAIhAOAA0p6KEyPdUQvvrL8xNzQof1L2ZSPYkVQUDTw4Sv1LKv8DCHAQABoMNjM3NDIzMTgzODA1IgzVj8OoEJkl3RiucLgq3AOJcVlt8WPQAxUwmEqQQ6aALElxHA7ua1Jxt0ZjuR%2BaF3QLvFFsi7CFwQ97WI6ewpNIYhrDp%2FDbNcAeWtoxrTket8w%2FQ7YHGl7OR5xqdvevvTMGFVT1Q%2FvRFUfZIT8Omuqi%2FzxU1vLAci7rOoFvp0uyOPlmWRIAgcmdcgo3z9%2FlndZKnANM%2FkGHTs9K4phSoKZuplc4OKZiU6b%2FTbZVRNoJ3sKV%2FpATKvoTp9hAIQ7bRn4VrdaICLjxksuCQ6Lim%2FehILoAzBc8JiuGl1ATlvCVY8oHPoM%2FadwcbKU7tZKWaoYB9g6MjIn%2BKv7yS1kdpEdCzROulqL6dCn7rCnAdTuHE5g9e56dJgjMxlvFvq7RNselIC8ZyhPgUngR0Z85bh2KiqXS6hDZRuItOc3IyjyT2MRVpFvouac0ZA%2Frs7PxbWXwECwRGlnIpzI9TLdkgXXnn%2Bl0Vl6athE6lCpybvLWwiMa%2FDOwL8g1tSGw0sVKGmhSQDo16wZhrwglsNSa%2BZhbyxSFLdHucmO%2B%2B0WvjyEHKRz0U6ACcztEhjhef2D76b2Bqt%2FVa1JJJEyg7rym4aJKpVL5HHsH60U%2Fip4EY5sAODiZEa3BLciWLsxFtcIM9%2BuvUZfXIfAvLKU1LDDAt4%2FCBjqkAUvLC3KTHZjYpRnwgZw7o%2FDvASTmVJ1PeGiHEZWPyJsYVTEu%2BU1VjCPneDkVZG%2BLNX0eEMFGHQWhBSJlaXc%2B5I8iO497iYXn4GlOiytNmOaEolFSsUKGEi4lcQ4lPO9uc8gdl3%2BPLeHLXNNIt9fqxQWW4wYSkrlWQlnR%2BQtMNve6FPf6ozGD8cSHn70MOrcTQMJtSGo4rBlSQOH0VGOpv2HfK1Wa&X-Amz-Signature=632ad957468436a466d3f6fd7293f41366d9d341a29d1aaad9748b036ca699c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC76XIMV%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVrkgEmAqKVT3wk4gIkwPOTgVZLwI%2BRyj62tEZ24sLrAIhAOAA0p6KEyPdUQvvrL8xNzQof1L2ZSPYkVQUDTw4Sv1LKv8DCHAQABoMNjM3NDIzMTgzODA1IgzVj8OoEJkl3RiucLgq3AOJcVlt8WPQAxUwmEqQQ6aALElxHA7ua1Jxt0ZjuR%2BaF3QLvFFsi7CFwQ97WI6ewpNIYhrDp%2FDbNcAeWtoxrTket8w%2FQ7YHGl7OR5xqdvevvTMGFVT1Q%2FvRFUfZIT8Omuqi%2FzxU1vLAci7rOoFvp0uyOPlmWRIAgcmdcgo3z9%2FlndZKnANM%2FkGHTs9K4phSoKZuplc4OKZiU6b%2FTbZVRNoJ3sKV%2FpATKvoTp9hAIQ7bRn4VrdaICLjxksuCQ6Lim%2FehILoAzBc8JiuGl1ATlvCVY8oHPoM%2FadwcbKU7tZKWaoYB9g6MjIn%2BKv7yS1kdpEdCzROulqL6dCn7rCnAdTuHE5g9e56dJgjMxlvFvq7RNselIC8ZyhPgUngR0Z85bh2KiqXS6hDZRuItOc3IyjyT2MRVpFvouac0ZA%2Frs7PxbWXwECwRGlnIpzI9TLdkgXXnn%2Bl0Vl6athE6lCpybvLWwiMa%2FDOwL8g1tSGw0sVKGmhSQDo16wZhrwglsNSa%2BZhbyxSFLdHucmO%2B%2B0WvjyEHKRz0U6ACcztEhjhef2D76b2Bqt%2FVa1JJJEyg7rym4aJKpVL5HHsH60U%2Fip4EY5sAODiZEa3BLciWLsxFtcIM9%2BuvUZfXIfAvLKU1LDDAt4%2FCBjqkAUvLC3KTHZjYpRnwgZw7o%2FDvASTmVJ1PeGiHEZWPyJsYVTEu%2BU1VjCPneDkVZG%2BLNX0eEMFGHQWhBSJlaXc%2B5I8iO497iYXn4GlOiytNmOaEolFSsUKGEi4lcQ4lPO9uc8gdl3%2BPLeHLXNNIt9fqxQWW4wYSkrlWQlnR%2BQtMNve6FPf6ozGD8cSHn70MOrcTQMJtSGo4rBlSQOH0VGOpv2HfK1Wa&X-Amz-Signature=555179e4c6dd50cde35cbc12c8333cdeed3d1b9691375d846526b2f66f941afd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
