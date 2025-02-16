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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHA3CSG%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGChLbOiOUOuFWMj8tOQz0BMPsKXmP2PV3%2FIIftqgry3AiEAtlL%2Bjt2721scCYHnMZMFM23bVLlj9ZM3xt17kaDcCPgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAQloQEvaP0InaaZvyrcA8DV0z1LhE91cro0uNx7DmC8be38UnxeKX5W%2B%2F2b7MkNAjOW8gGT3VIXMYwh0K6%2FgQP1Whjhks5G5opxbH4sMTYE71Js3RoY9IN7ZpGA5WqY%2FvVGV24FcKVF0Fr9PER5L%2FZAZFNcX5ul2H6zLNs%2Fo2oN%2BSmvD5FIBOkJsoEd3pKl5EGEtunPopMPV5hbuQoBkNOB9fIDArKvK%2BVfFIq4jL0gKH3nDccdjB02ZVgjmHPIRaq8VaBoyVwmDzN7Bc6mUKwyBCCbZfP5vRcaVKiqvY6oU2Y2p7kvPHcjzKgRZcQH%2FDKCGLXfKyCZVByIy0s%2BPfFmagC%2FVLUy4KihgDyX0qVT9dBHZ1htGKB52ILsAo%2FI2gPM7DJbfnyn9PrBLe5zxboQlXYA7miuvCMMd8qFYtWFWMSCwaHd7HN%2BVcxM4WkIWYn0eBGc1m%2Fs%2FbxNFWjeU6vzgG3eontpuw0hdUsh4KC%2FkgvXvqCWfuBHEJGtiEGsCcDO1N2KJwY3rCZaGxT15c7dW%2FAVmfkaPCWze1WpQ5x46FqSSm%2BEx5VcxbByl6j%2BHgS8jOz0a0cuYGZCylyCuR%2BmGmiiTIPkqmeNTuuzbDCeilHRVNb4K9bbapi9RX1E9im7t04t5hpwk5R8MMP%2Bxb0GOqUBeV3vV5xa0334mVoabxlfI2%2BWE8PLu1SHzHE%2F2Rh30JvkKT6lJixflbp8Zoqr%2BfLE65nGGhlW%2B1Fr0VDtnIPFpUK38q6%2B1XzoO%2FT%2B3lwcG3EuA6c1wQAOIEgJ1QGHnTBFXqMY9vaCJCEfVuYzyAlzkPH%2Fc3q6DRIvI2MfiFByrY%2BantzZ4A1x8g3KilT8cj0GaO3BiohWm1NLfxUm27e7CqQ1UGD5&X-Amz-Signature=aae1f5f997917e9920a41eb819ff9583063fa90455bace6cf86e6195969f320c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHA3CSG%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGChLbOiOUOuFWMj8tOQz0BMPsKXmP2PV3%2FIIftqgry3AiEAtlL%2Bjt2721scCYHnMZMFM23bVLlj9ZM3xt17kaDcCPgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAQloQEvaP0InaaZvyrcA8DV0z1LhE91cro0uNx7DmC8be38UnxeKX5W%2B%2F2b7MkNAjOW8gGT3VIXMYwh0K6%2FgQP1Whjhks5G5opxbH4sMTYE71Js3RoY9IN7ZpGA5WqY%2FvVGV24FcKVF0Fr9PER5L%2FZAZFNcX5ul2H6zLNs%2Fo2oN%2BSmvD5FIBOkJsoEd3pKl5EGEtunPopMPV5hbuQoBkNOB9fIDArKvK%2BVfFIq4jL0gKH3nDccdjB02ZVgjmHPIRaq8VaBoyVwmDzN7Bc6mUKwyBCCbZfP5vRcaVKiqvY6oU2Y2p7kvPHcjzKgRZcQH%2FDKCGLXfKyCZVByIy0s%2BPfFmagC%2FVLUy4KihgDyX0qVT9dBHZ1htGKB52ILsAo%2FI2gPM7DJbfnyn9PrBLe5zxboQlXYA7miuvCMMd8qFYtWFWMSCwaHd7HN%2BVcxM4WkIWYn0eBGc1m%2Fs%2FbxNFWjeU6vzgG3eontpuw0hdUsh4KC%2FkgvXvqCWfuBHEJGtiEGsCcDO1N2KJwY3rCZaGxT15c7dW%2FAVmfkaPCWze1WpQ5x46FqSSm%2BEx5VcxbByl6j%2BHgS8jOz0a0cuYGZCylyCuR%2BmGmiiTIPkqmeNTuuzbDCeilHRVNb4K9bbapi9RX1E9im7t04t5hpwk5R8MMP%2Bxb0GOqUBeV3vV5xa0334mVoabxlfI2%2BWE8PLu1SHzHE%2F2Rh30JvkKT6lJixflbp8Zoqr%2BfLE65nGGhlW%2B1Fr0VDtnIPFpUK38q6%2B1XzoO%2FT%2B3lwcG3EuA6c1wQAOIEgJ1QGHnTBFXqMY9vaCJCEfVuYzyAlzkPH%2Fc3q6DRIvI2MfiFByrY%2BantzZ4A1x8g3KilT8cj0GaO3BiohWm1NLfxUm27e7CqQ1UGD5&X-Amz-Signature=38e8054ba18ef5766657483477f172aae349ef0d457392b2a729a7f43d31e9c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHA3CSG%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGChLbOiOUOuFWMj8tOQz0BMPsKXmP2PV3%2FIIftqgry3AiEAtlL%2Bjt2721scCYHnMZMFM23bVLlj9ZM3xt17kaDcCPgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDAQloQEvaP0InaaZvyrcA8DV0z1LhE91cro0uNx7DmC8be38UnxeKX5W%2B%2F2b7MkNAjOW8gGT3VIXMYwh0K6%2FgQP1Whjhks5G5opxbH4sMTYE71Js3RoY9IN7ZpGA5WqY%2FvVGV24FcKVF0Fr9PER5L%2FZAZFNcX5ul2H6zLNs%2Fo2oN%2BSmvD5FIBOkJsoEd3pKl5EGEtunPopMPV5hbuQoBkNOB9fIDArKvK%2BVfFIq4jL0gKH3nDccdjB02ZVgjmHPIRaq8VaBoyVwmDzN7Bc6mUKwyBCCbZfP5vRcaVKiqvY6oU2Y2p7kvPHcjzKgRZcQH%2FDKCGLXfKyCZVByIy0s%2BPfFmagC%2FVLUy4KihgDyX0qVT9dBHZ1htGKB52ILsAo%2FI2gPM7DJbfnyn9PrBLe5zxboQlXYA7miuvCMMd8qFYtWFWMSCwaHd7HN%2BVcxM4WkIWYn0eBGc1m%2Fs%2FbxNFWjeU6vzgG3eontpuw0hdUsh4KC%2FkgvXvqCWfuBHEJGtiEGsCcDO1N2KJwY3rCZaGxT15c7dW%2FAVmfkaPCWze1WpQ5x46FqSSm%2BEx5VcxbByl6j%2BHgS8jOz0a0cuYGZCylyCuR%2BmGmiiTIPkqmeNTuuzbDCeilHRVNb4K9bbapi9RX1E9im7t04t5hpwk5R8MMP%2Bxb0GOqUBeV3vV5xa0334mVoabxlfI2%2BWE8PLu1SHzHE%2F2Rh30JvkKT6lJixflbp8Zoqr%2BfLE65nGGhlW%2B1Fr0VDtnIPFpUK38q6%2B1XzoO%2FT%2B3lwcG3EuA6c1wQAOIEgJ1QGHnTBFXqMY9vaCJCEfVuYzyAlzkPH%2Fc3q6DRIvI2MfiFByrY%2BantzZ4A1x8g3KilT8cj0GaO3BiohWm1NLfxUm27e7CqQ1UGD5&X-Amz-Signature=f581e0db9073b4e98bf0173125d75357cd82affc86be8c582b94e39d72cff8b9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
