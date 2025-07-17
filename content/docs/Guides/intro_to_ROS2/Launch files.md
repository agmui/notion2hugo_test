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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4OQ7BTI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCv22HVzvAe4pM8yTNLNDL18aMOcF10m9BSb%2B9RHVVa6AIgB8V7ODCQGUm%2Br1%2Bks6JROa97faJOfR8uMcO9NkT9F4Qq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO3D7TbK0o6dwxvaUSrcAybqyOUeUtG9OPWDyI5ao5cW3u%2BJwUiC8bwP9S8deXxo6%2Bu9fEOlv1QxMuZbCzXMe7qOvQTmYB4%2FGXLHInhcerPLbLvTeFGyefcMWrJTgLybv6UpDwiFaILK4f2wLiaafOkm0T2F16zq6ydmh34%2ByD2HI%2F8G1sk%2BVH946gqG0Zo7u9cwgqujEb%2BlhppFrtiV3XnVgyma6WusSpMkWTmNHOvT1DMsQrN3%2FxusXS%2FK4Qt7RVQXBpZf85LRzhcvX71VV7BvwcLhquGI7dGa6yHyFqs5S%2FrjdDhnHLU745nTBa0OIjSZL9ZD4QBxQzGRr4QSODIV3FUTjSGjJ5vmPumni9FN7TvdLmVyAtvctTOJEudMeEMeSsoKn2DHGDXBwR5UiRABgw1TOSZeBOHgAle5s4fvuEW7uJQCdcUPwtJfqbRN%2B0LXmzY3V0z8wx5iFGBx7hF6F%2BKWIsyCvurJ0lT3uoSrq4xSEbsRYF42cwS7Lo18xEkmE8p%2B9ktZIhHz9gkjwDndD%2F6Ruln4F1k%2F0aoUr%2BNDVcS6rDRUNgw3dB3mnhykWC701Fc6BLK8CG4bhzjNYnKJMgtKRpx6X3lGeXXkNNo3T9Nb3Kw2vBHgt%2FnlWKovniL%2F1b19yabhGYFzMMXr4sMGOqUB2eMQYyUsZ2%2FyvPlsSjPJRj22fvsIUw7dAUK798gp0r%2FgWo0XfKfsv16Rx815AA16niCPSdY2uJQRBS2XEEorG87vX%2BtfB3dW1L9cLHXDolRnsOXHouSC52yxJpir3fcVVEUK%2B8lH1ahJKpihT%2FsCkUvJgC9QSjfbMMjBdUkD3zWoRFb72bQ3vxLDrIRtKXFBgrZ7kO2dUqPxOrARl%2F6p3ZP5FVm5&X-Amz-Signature=d89f4af6664aa6ae4ba56d5e492d3f6f35d758f073ee46ceb384e4e78f2de5c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4OQ7BTI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCv22HVzvAe4pM8yTNLNDL18aMOcF10m9BSb%2B9RHVVa6AIgB8V7ODCQGUm%2Br1%2Bks6JROa97faJOfR8uMcO9NkT9F4Qq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO3D7TbK0o6dwxvaUSrcAybqyOUeUtG9OPWDyI5ao5cW3u%2BJwUiC8bwP9S8deXxo6%2Bu9fEOlv1QxMuZbCzXMe7qOvQTmYB4%2FGXLHInhcerPLbLvTeFGyefcMWrJTgLybv6UpDwiFaILK4f2wLiaafOkm0T2F16zq6ydmh34%2ByD2HI%2F8G1sk%2BVH946gqG0Zo7u9cwgqujEb%2BlhppFrtiV3XnVgyma6WusSpMkWTmNHOvT1DMsQrN3%2FxusXS%2FK4Qt7RVQXBpZf85LRzhcvX71VV7BvwcLhquGI7dGa6yHyFqs5S%2FrjdDhnHLU745nTBa0OIjSZL9ZD4QBxQzGRr4QSODIV3FUTjSGjJ5vmPumni9FN7TvdLmVyAtvctTOJEudMeEMeSsoKn2DHGDXBwR5UiRABgw1TOSZeBOHgAle5s4fvuEW7uJQCdcUPwtJfqbRN%2B0LXmzY3V0z8wx5iFGBx7hF6F%2BKWIsyCvurJ0lT3uoSrq4xSEbsRYF42cwS7Lo18xEkmE8p%2B9ktZIhHz9gkjwDndD%2F6Ruln4F1k%2F0aoUr%2BNDVcS6rDRUNgw3dB3mnhykWC701Fc6BLK8CG4bhzjNYnKJMgtKRpx6X3lGeXXkNNo3T9Nb3Kw2vBHgt%2FnlWKovniL%2F1b19yabhGYFzMMXr4sMGOqUB2eMQYyUsZ2%2FyvPlsSjPJRj22fvsIUw7dAUK798gp0r%2FgWo0XfKfsv16Rx815AA16niCPSdY2uJQRBS2XEEorG87vX%2BtfB3dW1L9cLHXDolRnsOXHouSC52yxJpir3fcVVEUK%2B8lH1ahJKpihT%2FsCkUvJgC9QSjfbMMjBdUkD3zWoRFb72bQ3vxLDrIRtKXFBgrZ7kO2dUqPxOrARl%2F6p3ZP5FVm5&X-Amz-Signature=3730ed01e642140f350a1c96268b6f998c9aed6ced869329b05249573caa6854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4OQ7BTI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCv22HVzvAe4pM8yTNLNDL18aMOcF10m9BSb%2B9RHVVa6AIgB8V7ODCQGUm%2Br1%2Bks6JROa97faJOfR8uMcO9NkT9F4Qq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO3D7TbK0o6dwxvaUSrcAybqyOUeUtG9OPWDyI5ao5cW3u%2BJwUiC8bwP9S8deXxo6%2Bu9fEOlv1QxMuZbCzXMe7qOvQTmYB4%2FGXLHInhcerPLbLvTeFGyefcMWrJTgLybv6UpDwiFaILK4f2wLiaafOkm0T2F16zq6ydmh34%2ByD2HI%2F8G1sk%2BVH946gqG0Zo7u9cwgqujEb%2BlhppFrtiV3XnVgyma6WusSpMkWTmNHOvT1DMsQrN3%2FxusXS%2FK4Qt7RVQXBpZf85LRzhcvX71VV7BvwcLhquGI7dGa6yHyFqs5S%2FrjdDhnHLU745nTBa0OIjSZL9ZD4QBxQzGRr4QSODIV3FUTjSGjJ5vmPumni9FN7TvdLmVyAtvctTOJEudMeEMeSsoKn2DHGDXBwR5UiRABgw1TOSZeBOHgAle5s4fvuEW7uJQCdcUPwtJfqbRN%2B0LXmzY3V0z8wx5iFGBx7hF6F%2BKWIsyCvurJ0lT3uoSrq4xSEbsRYF42cwS7Lo18xEkmE8p%2B9ktZIhHz9gkjwDndD%2F6Ruln4F1k%2F0aoUr%2BNDVcS6rDRUNgw3dB3mnhykWC701Fc6BLK8CG4bhzjNYnKJMgtKRpx6X3lGeXXkNNo3T9Nb3Kw2vBHgt%2FnlWKovniL%2F1b19yabhGYFzMMXr4sMGOqUB2eMQYyUsZ2%2FyvPlsSjPJRj22fvsIUw7dAUK798gp0r%2FgWo0XfKfsv16Rx815AA16niCPSdY2uJQRBS2XEEorG87vX%2BtfB3dW1L9cLHXDolRnsOXHouSC52yxJpir3fcVVEUK%2B8lH1ahJKpihT%2FsCkUvJgC9QSjfbMMjBdUkD3zWoRFb72bQ3vxLDrIRtKXFBgrZ7kO2dUqPxOrARl%2F6p3ZP5FVm5&X-Amz-Signature=b1284c7fb910e939b815203d28f737dff1ae6b9bcbbcee18fe6664b9cfc19ddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
