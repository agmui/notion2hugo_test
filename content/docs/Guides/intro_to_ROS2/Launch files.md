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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCXI6WAF%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FdvTdGUDBiIL5%2BOR8Nbrdfd4tcfkvJ%2FR8BnjPoLPGbAiEAnlaoMSTJ0bMD80JdnnKrAdjiDG7bojmf%2BPuSTBlsmWIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYI5eNms%2Bx9DHOJnCrcA75Pfv0pxNVKrd11rQQ8HqCquN1yAle%2BTW8VgPZzIJ3u%2FnN4YO4qM9tnasboZqiEXCduJ9oy5QODBJGymsOQI1csAk3nGQRM0pfiNAbq88a1KsSHvy7E5hKr%2F6WedGbMENevAR2u9j%2BE0R7geCpW33S%2FN%2BQLa2zP42XcAOt9bXYtAz6MYltGQlCo9miu9jdaWYI6yWASqmFqaAxOFpfTNC4DuxEKjRu2t6321mgTZiVqK96sSAnmKJvZQApfJ9UO8gE2ExrCUe2prj7el9WXiNuEjybhnj0QYP8WWyA%2FEsZW4AoSKJCxDBFCTDbz3j0mgpDgUeDB0VEisQpw08TTI5fpg%2BorryKOcFHbdKsxxp9tvstIWPAZLEmbewry9zlHhwDaYmQ6rTQjFYpWleVCYUyFFSoId9qU3%2BWAzeTiUWxxRwvCJpJcuEKUjGjkQhD%2Bj7p2yTJcztGnt%2BEZOxIbNJTYcIQxiQeboTlW7cwet2yqJqhm38R5eE2iQ30D5yHC9UjidYGsbTRujpsdrSqv60YCKD57NstQGN541StxgAmiWry8a97CDcyWl%2FhviwcN6uguEETzbGzALcD%2FO9pOY42l6NxTa%2BIqKUe5ieIEA1mhVRtt1308PrRp64dsMNG7hMMGOqUBs4XlVE3spcgRr9ZuuIgMO4R8iSdd6WN6idswZ2%2BID%2FkowiruRgOwhxwjAfwcOpxqLlhW4RMTJNXEdBArIcd6ogxKfQlUHWHW0fFObxqRQsE5SxEYqVxQB%2BGSY72CGfGkEvEMF81eM6Nu5X%2FuQv2HZps%2BMEOZNVP%2FLj2WDZ6jfHZsXbRTnmwbAnhC%2BPu9zVd3xdIopWU9BL9xfpRzDLVPCcmJsAXU&X-Amz-Signature=75d9179f65b28342422f1ef45911e7a2dff992b373756ba74ba700dc03789fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCXI6WAF%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FdvTdGUDBiIL5%2BOR8Nbrdfd4tcfkvJ%2FR8BnjPoLPGbAiEAnlaoMSTJ0bMD80JdnnKrAdjiDG7bojmf%2BPuSTBlsmWIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYI5eNms%2Bx9DHOJnCrcA75Pfv0pxNVKrd11rQQ8HqCquN1yAle%2BTW8VgPZzIJ3u%2FnN4YO4qM9tnasboZqiEXCduJ9oy5QODBJGymsOQI1csAk3nGQRM0pfiNAbq88a1KsSHvy7E5hKr%2F6WedGbMENevAR2u9j%2BE0R7geCpW33S%2FN%2BQLa2zP42XcAOt9bXYtAz6MYltGQlCo9miu9jdaWYI6yWASqmFqaAxOFpfTNC4DuxEKjRu2t6321mgTZiVqK96sSAnmKJvZQApfJ9UO8gE2ExrCUe2prj7el9WXiNuEjybhnj0QYP8WWyA%2FEsZW4AoSKJCxDBFCTDbz3j0mgpDgUeDB0VEisQpw08TTI5fpg%2BorryKOcFHbdKsxxp9tvstIWPAZLEmbewry9zlHhwDaYmQ6rTQjFYpWleVCYUyFFSoId9qU3%2BWAzeTiUWxxRwvCJpJcuEKUjGjkQhD%2Bj7p2yTJcztGnt%2BEZOxIbNJTYcIQxiQeboTlW7cwet2yqJqhm38R5eE2iQ30D5yHC9UjidYGsbTRujpsdrSqv60YCKD57NstQGN541StxgAmiWry8a97CDcyWl%2FhviwcN6uguEETzbGzALcD%2FO9pOY42l6NxTa%2BIqKUe5ieIEA1mhVRtt1308PrRp64dsMNG7hMMGOqUBs4XlVE3spcgRr9ZuuIgMO4R8iSdd6WN6idswZ2%2BID%2FkowiruRgOwhxwjAfwcOpxqLlhW4RMTJNXEdBArIcd6ogxKfQlUHWHW0fFObxqRQsE5SxEYqVxQB%2BGSY72CGfGkEvEMF81eM6Nu5X%2FuQv2HZps%2BMEOZNVP%2FLj2WDZ6jfHZsXbRTnmwbAnhC%2BPu9zVd3xdIopWU9BL9xfpRzDLVPCcmJsAXU&X-Amz-Signature=feb0dd8f08829e27716b82dd4a38461be1fea766fd6e79b17c7fb6252f11483f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCXI6WAF%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FdvTdGUDBiIL5%2BOR8Nbrdfd4tcfkvJ%2FR8BnjPoLPGbAiEAnlaoMSTJ0bMD80JdnnKrAdjiDG7bojmf%2BPuSTBlsmWIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYI5eNms%2Bx9DHOJnCrcA75Pfv0pxNVKrd11rQQ8HqCquN1yAle%2BTW8VgPZzIJ3u%2FnN4YO4qM9tnasboZqiEXCduJ9oy5QODBJGymsOQI1csAk3nGQRM0pfiNAbq88a1KsSHvy7E5hKr%2F6WedGbMENevAR2u9j%2BE0R7geCpW33S%2FN%2BQLa2zP42XcAOt9bXYtAz6MYltGQlCo9miu9jdaWYI6yWASqmFqaAxOFpfTNC4DuxEKjRu2t6321mgTZiVqK96sSAnmKJvZQApfJ9UO8gE2ExrCUe2prj7el9WXiNuEjybhnj0QYP8WWyA%2FEsZW4AoSKJCxDBFCTDbz3j0mgpDgUeDB0VEisQpw08TTI5fpg%2BorryKOcFHbdKsxxp9tvstIWPAZLEmbewry9zlHhwDaYmQ6rTQjFYpWleVCYUyFFSoId9qU3%2BWAzeTiUWxxRwvCJpJcuEKUjGjkQhD%2Bj7p2yTJcztGnt%2BEZOxIbNJTYcIQxiQeboTlW7cwet2yqJqhm38R5eE2iQ30D5yHC9UjidYGsbTRujpsdrSqv60YCKD57NstQGN541StxgAmiWry8a97CDcyWl%2FhviwcN6uguEETzbGzALcD%2FO9pOY42l6NxTa%2BIqKUe5ieIEA1mhVRtt1308PrRp64dsMNG7hMMGOqUBs4XlVE3spcgRr9ZuuIgMO4R8iSdd6WN6idswZ2%2BID%2FkowiruRgOwhxwjAfwcOpxqLlhW4RMTJNXEdBArIcd6ogxKfQlUHWHW0fFObxqRQsE5SxEYqVxQB%2BGSY72CGfGkEvEMF81eM6Nu5X%2FuQv2HZps%2BMEOZNVP%2FLj2WDZ6jfHZsXbRTnmwbAnhC%2BPu9zVd3xdIopWU9BL9xfpRzDLVPCcmJsAXU&X-Amz-Signature=dd9c4361af9ba6eaefdeb775307c7cb808eb501360d10310aa54e52117abdb4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
