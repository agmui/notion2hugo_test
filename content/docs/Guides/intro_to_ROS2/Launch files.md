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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYXGDOKL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeC8iGl5PpFUsE%2Bg9Fswaa0oIxi5uuI53154%2BF%2Fv2qBAiEA99nF%2F4CCHGVh8dVOz9eKkhYhk2uVerBtnDa6IR1vacMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHl7wrVnw%2B9YNYBokyrcA8FdytjUt0gsTCPXC2DgKSx8m578lqGahlvNWuylp5e9GZrXFTipF79AgpU1TAi8JYVA2I%2Bd3l6hiOgLoPKsPH4VdIR4QU0Q1GHPoIMqpyhCdWd0o5xAHhVduj9H87Gx6mNrkoO4LY77jcQHX5nurDt8ZG6OgeYKchTk7toU5M%2BIyhjCcPUCDdrscxk%2B%2BQBv4F7xj4vRG%2BHAQocCKAyIm33aBypXrDHRXCddZMqNK9FPkzNT1eFVbFHNK9Wa6X%2Bjis4ZRSGMgASz6ZgMHTLC2E%2B%2BIPcHl1CnRnP0OyLsLHO73PZXvGot3qwOz9CLcCfk1paWSDUuSV%2BRzwfV2YauqCqK5Dwc8Wnq2C8KW3CxLg5pU%2B01bKLXi8Tdf6YR0auxaGCPT2rwNRArI94Rmt8OLAOC7qWH8ZIGTdpjfWW4yO9C10VqemuBIJ1jKhl4CNqUwwcctmzbeBXxPx%2FJXGODvUj6cq7fYjmih1y9ZVBsnxoa%2BgxC57e6t%2FbPoqCcVzdDfQy3F5BYxCwb2VHj8MeU3n4ItLbrANdiPQJxXcAaPung8CkbeAmGJXygTvtIgtA7kHxqXyddYjgCVC0H9lSEzgi0%2FCjjMFj%2FWxZyhxHIHi%2Fi2tVHLLY2amJjCeePMO%2FGqr4GOqUBumk8w9hCxAj8a9pWQJ5wF3K4PQWagAMxIzf0knL%2F0topjTqLNVRla50WREbv8rvH6uKa66GI1RD3SUUJbFVJkBaDzsyVatbiDMpT%2FHKM9kDhc91MXSpVGCUt%2B6VfGbWOaOm3Ce5wwVG9H4dsXfEvIRqMZrVqAIB7IvHvQZtHaG2Fu3pxo3hvuutuboDWSx0yif9jOQAefXTEfbCKwkHejvOcdhHQ&X-Amz-Signature=4405e1997e98c366102302c8241f1208ae51e35d6a6e8fe6dab7184a60a6e32b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYXGDOKL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeC8iGl5PpFUsE%2Bg9Fswaa0oIxi5uuI53154%2BF%2Fv2qBAiEA99nF%2F4CCHGVh8dVOz9eKkhYhk2uVerBtnDa6IR1vacMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHl7wrVnw%2B9YNYBokyrcA8FdytjUt0gsTCPXC2DgKSx8m578lqGahlvNWuylp5e9GZrXFTipF79AgpU1TAi8JYVA2I%2Bd3l6hiOgLoPKsPH4VdIR4QU0Q1GHPoIMqpyhCdWd0o5xAHhVduj9H87Gx6mNrkoO4LY77jcQHX5nurDt8ZG6OgeYKchTk7toU5M%2BIyhjCcPUCDdrscxk%2B%2BQBv4F7xj4vRG%2BHAQocCKAyIm33aBypXrDHRXCddZMqNK9FPkzNT1eFVbFHNK9Wa6X%2Bjis4ZRSGMgASz6ZgMHTLC2E%2B%2BIPcHl1CnRnP0OyLsLHO73PZXvGot3qwOz9CLcCfk1paWSDUuSV%2BRzwfV2YauqCqK5Dwc8Wnq2C8KW3CxLg5pU%2B01bKLXi8Tdf6YR0auxaGCPT2rwNRArI94Rmt8OLAOC7qWH8ZIGTdpjfWW4yO9C10VqemuBIJ1jKhl4CNqUwwcctmzbeBXxPx%2FJXGODvUj6cq7fYjmih1y9ZVBsnxoa%2BgxC57e6t%2FbPoqCcVzdDfQy3F5BYxCwb2VHj8MeU3n4ItLbrANdiPQJxXcAaPung8CkbeAmGJXygTvtIgtA7kHxqXyddYjgCVC0H9lSEzgi0%2FCjjMFj%2FWxZyhxHIHi%2Fi2tVHLLY2amJjCeePMO%2FGqr4GOqUBumk8w9hCxAj8a9pWQJ5wF3K4PQWagAMxIzf0knL%2F0topjTqLNVRla50WREbv8rvH6uKa66GI1RD3SUUJbFVJkBaDzsyVatbiDMpT%2FHKM9kDhc91MXSpVGCUt%2B6VfGbWOaOm3Ce5wwVG9H4dsXfEvIRqMZrVqAIB7IvHvQZtHaG2Fu3pxo3hvuutuboDWSx0yif9jOQAefXTEfbCKwkHejvOcdhHQ&X-Amz-Signature=597eed58f1cf73805726aaf16d5ef609bbb354ed12f728c9f0fa993a6ed56000&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYXGDOKL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeC8iGl5PpFUsE%2Bg9Fswaa0oIxi5uuI53154%2BF%2Fv2qBAiEA99nF%2F4CCHGVh8dVOz9eKkhYhk2uVerBtnDa6IR1vacMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHl7wrVnw%2B9YNYBokyrcA8FdytjUt0gsTCPXC2DgKSx8m578lqGahlvNWuylp5e9GZrXFTipF79AgpU1TAi8JYVA2I%2Bd3l6hiOgLoPKsPH4VdIR4QU0Q1GHPoIMqpyhCdWd0o5xAHhVduj9H87Gx6mNrkoO4LY77jcQHX5nurDt8ZG6OgeYKchTk7toU5M%2BIyhjCcPUCDdrscxk%2B%2BQBv4F7xj4vRG%2BHAQocCKAyIm33aBypXrDHRXCddZMqNK9FPkzNT1eFVbFHNK9Wa6X%2Bjis4ZRSGMgASz6ZgMHTLC2E%2B%2BIPcHl1CnRnP0OyLsLHO73PZXvGot3qwOz9CLcCfk1paWSDUuSV%2BRzwfV2YauqCqK5Dwc8Wnq2C8KW3CxLg5pU%2B01bKLXi8Tdf6YR0auxaGCPT2rwNRArI94Rmt8OLAOC7qWH8ZIGTdpjfWW4yO9C10VqemuBIJ1jKhl4CNqUwwcctmzbeBXxPx%2FJXGODvUj6cq7fYjmih1y9ZVBsnxoa%2BgxC57e6t%2FbPoqCcVzdDfQy3F5BYxCwb2VHj8MeU3n4ItLbrANdiPQJxXcAaPung8CkbeAmGJXygTvtIgtA7kHxqXyddYjgCVC0H9lSEzgi0%2FCjjMFj%2FWxZyhxHIHi%2Fi2tVHLLY2amJjCeePMO%2FGqr4GOqUBumk8w9hCxAj8a9pWQJ5wF3K4PQWagAMxIzf0knL%2F0topjTqLNVRla50WREbv8rvH6uKa66GI1RD3SUUJbFVJkBaDzsyVatbiDMpT%2FHKM9kDhc91MXSpVGCUt%2B6VfGbWOaOm3Ce5wwVG9H4dsXfEvIRqMZrVqAIB7IvHvQZtHaG2Fu3pxo3hvuutuboDWSx0yif9jOQAefXTEfbCKwkHejvOcdhHQ&X-Amz-Signature=f3af6469e6bcbe4b07ece580b3aa7ff43c6feaed9008d2e3bc7e96c421e54273&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
