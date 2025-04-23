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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRPML4BL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFjo547WuTZs8qGKGBDTrbKw79Aw8yeQJOXXRL5Q3hzWAiEAmpy68XEFdL6w%2FuXxF1pyCh2L1603kdK6ysO5HciLuJIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPrL%2F1qdVC039I6fyrcAwYIVg2HlcXNvVsvo0GfVJESNZdHxh%2BPxC8KIIZXuVHS57CN%2FgKo%2BJ5%2FgYdFQOzbTu1AgO%2Bm2E4wb%2Fot161yMCkPHdlAvAABvEpvlOrmnDwaBRLOFUnUMzCt3TsRo4vKyWGeGQlComRmubRGxbbYIrt%2FMek7qZ1nmnWAw6n4CeZUAzxPlda3y0X8cjN%2B50fl6YNHoCE7pBqaULRUjAv1UxFseEP38RXOLjzdfom7UkAL6QthIhaMM%2Fs2slu%2BWpmeJhbuleZlmjsnropLbrQofBn6Zr4QgUrZyU5TY1pGUmwmNA5GLoBpqF2Ft1ZnhcejJnvQE16D1Mb4otwlssktkOKWREaaqA0pI1Mw%2FDafb919QZYdEU9FiF3z6R8AWdDbHyKqVvT%2BNEFXBTIpypLu261gPR5K8ncyxCU0IC8Azae%2BEKZIrpG2opapLGA1mv0WtLVdLaIl5noB%2BnDlScvIFU%2B6qTCKvEVWUiz%2BrvkQgMOYGK90PCjzyEIM94bHR5H7Bs40eJjW7hg%2B8cw1DsBwKRV2LK8N9KJWhGh2FTlASRf7T0yHTgwcY6kYbCHIGbP1xNF75olQbE6mINEU85XTpCxkjYoKjQlJOf3uRct1YBO5EB0UWEvAmmeEhqMsMIWEo8AGOqUBaYty53EsCK92aASDDQ7XgZe3IUIeiTRg9oI9Mgnwr9sxu8J6UDHNyey%2BQBJibPk0vQbeK9aeZCLakADiAdG67AhXdLUIvbvBR1nbWcCCJInqxnncXahYodDI9ka1wCSFikyRL7fWXJxbCV0aZrE1KLem9vyzV%2B3AOPdIB6to7i7aTMsUrvTvC2WUemHHg0FgZjO6Lx%2FJ1JPIpB3Ua9WGlOja%2F0kZ&X-Amz-Signature=2a45317310fb0219d6c48283e47e9846da046924fb643df51b047fcb07362e05&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRPML4BL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFjo547WuTZs8qGKGBDTrbKw79Aw8yeQJOXXRL5Q3hzWAiEAmpy68XEFdL6w%2FuXxF1pyCh2L1603kdK6ysO5HciLuJIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPrL%2F1qdVC039I6fyrcAwYIVg2HlcXNvVsvo0GfVJESNZdHxh%2BPxC8KIIZXuVHS57CN%2FgKo%2BJ5%2FgYdFQOzbTu1AgO%2Bm2E4wb%2Fot161yMCkPHdlAvAABvEpvlOrmnDwaBRLOFUnUMzCt3TsRo4vKyWGeGQlComRmubRGxbbYIrt%2FMek7qZ1nmnWAw6n4CeZUAzxPlda3y0X8cjN%2B50fl6YNHoCE7pBqaULRUjAv1UxFseEP38RXOLjzdfom7UkAL6QthIhaMM%2Fs2slu%2BWpmeJhbuleZlmjsnropLbrQofBn6Zr4QgUrZyU5TY1pGUmwmNA5GLoBpqF2Ft1ZnhcejJnvQE16D1Mb4otwlssktkOKWREaaqA0pI1Mw%2FDafb919QZYdEU9FiF3z6R8AWdDbHyKqVvT%2BNEFXBTIpypLu261gPR5K8ncyxCU0IC8Azae%2BEKZIrpG2opapLGA1mv0WtLVdLaIl5noB%2BnDlScvIFU%2B6qTCKvEVWUiz%2BrvkQgMOYGK90PCjzyEIM94bHR5H7Bs40eJjW7hg%2B8cw1DsBwKRV2LK8N9KJWhGh2FTlASRf7T0yHTgwcY6kYbCHIGbP1xNF75olQbE6mINEU85XTpCxkjYoKjQlJOf3uRct1YBO5EB0UWEvAmmeEhqMsMIWEo8AGOqUBaYty53EsCK92aASDDQ7XgZe3IUIeiTRg9oI9Mgnwr9sxu8J6UDHNyey%2BQBJibPk0vQbeK9aeZCLakADiAdG67AhXdLUIvbvBR1nbWcCCJInqxnncXahYodDI9ka1wCSFikyRL7fWXJxbCV0aZrE1KLem9vyzV%2B3AOPdIB6to7i7aTMsUrvTvC2WUemHHg0FgZjO6Lx%2FJ1JPIpB3Ua9WGlOja%2F0kZ&X-Amz-Signature=9ae3df2bc2715e16d5f1893f77d330cffc3bc8c8aede4ae5f825c240db65e4de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRPML4BL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFjo547WuTZs8qGKGBDTrbKw79Aw8yeQJOXXRL5Q3hzWAiEAmpy68XEFdL6w%2FuXxF1pyCh2L1603kdK6ysO5HciLuJIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPrL%2F1qdVC039I6fyrcAwYIVg2HlcXNvVsvo0GfVJESNZdHxh%2BPxC8KIIZXuVHS57CN%2FgKo%2BJ5%2FgYdFQOzbTu1AgO%2Bm2E4wb%2Fot161yMCkPHdlAvAABvEpvlOrmnDwaBRLOFUnUMzCt3TsRo4vKyWGeGQlComRmubRGxbbYIrt%2FMek7qZ1nmnWAw6n4CeZUAzxPlda3y0X8cjN%2B50fl6YNHoCE7pBqaULRUjAv1UxFseEP38RXOLjzdfom7UkAL6QthIhaMM%2Fs2slu%2BWpmeJhbuleZlmjsnropLbrQofBn6Zr4QgUrZyU5TY1pGUmwmNA5GLoBpqF2Ft1ZnhcejJnvQE16D1Mb4otwlssktkOKWREaaqA0pI1Mw%2FDafb919QZYdEU9FiF3z6R8AWdDbHyKqVvT%2BNEFXBTIpypLu261gPR5K8ncyxCU0IC8Azae%2BEKZIrpG2opapLGA1mv0WtLVdLaIl5noB%2BnDlScvIFU%2B6qTCKvEVWUiz%2BrvkQgMOYGK90PCjzyEIM94bHR5H7Bs40eJjW7hg%2B8cw1DsBwKRV2LK8N9KJWhGh2FTlASRf7T0yHTgwcY6kYbCHIGbP1xNF75olQbE6mINEU85XTpCxkjYoKjQlJOf3uRct1YBO5EB0UWEvAmmeEhqMsMIWEo8AGOqUBaYty53EsCK92aASDDQ7XgZe3IUIeiTRg9oI9Mgnwr9sxu8J6UDHNyey%2BQBJibPk0vQbeK9aeZCLakADiAdG67AhXdLUIvbvBR1nbWcCCJInqxnncXahYodDI9ka1wCSFikyRL7fWXJxbCV0aZrE1KLem9vyzV%2B3AOPdIB6to7i7aTMsUrvTvC2WUemHHg0FgZjO6Lx%2FJ1JPIpB3Ua9WGlOja%2F0kZ&X-Amz-Signature=f1a57736d4ce2075078e303d6695ca361d1303f1471b0ff0e04360d2e4b6795f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
