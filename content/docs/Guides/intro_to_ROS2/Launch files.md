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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UW3HC5J%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD3AW9GPC%2BQZdrrSu2PsMF5Pe%2B8UgEOzGCaynh09azSAiBAVU1AKJnV4hZBzF%2Bbi8ZOjV5gafOdZaYjZXvvp%2BxjbSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1mu%2FNN%2FpKPGU12AOKtwDCQD0bf8hPTDvKkTnN%2FUB%2FFwRZtmVghO0rf67SzWbp14xiJPP1TksQ6x68jBnt%2BRg41QAK0ZP7VLtlP6DrVlmo1LTikMmBBrCrJAbC2MxuZikmCButFx8Vque75QC7OOWeKIthGrHCrLbyuQTKhDWbTsyvwzDQCRBw3DIcKPY4gTObiAWlbxM8JCjgUBWT75HDeSdekZ3yaZw4BDQujp0bCooTxPxZOidfphRk4Q42mDgWsgaoGCnmyF6LA2Xz4RWYYQ79t6RqJmquXc3t7DbxxUArlIMA3zYxyiM5svoiJhqSyI5R%2FVQuFQd4g7SffgV6efZNvzl5PktbNO49NxH%2FDP9WEOAwlhqPdiMYN8d1e%2BW3wHFej8T4rKii21zBZKQULbkSoaz3DZyQbTYFrlbslc%2FQkJrJj3zhW4ldSuJrxzkGIcAbTT0SwUibqzSvaWhmp8JabLBocsrKPbc0EbxEcfzvE1YqFf7vYa8fgtkzST8NY8szjI6usgQMPgv3en3k7ivVjKKYfUNlPUCyCh8kLDzFmv4mP82I7uXHBSpeleRg%2F4xMGMlY8UcAtH4k5zl0d%2FfrTxB5oJ%2BR04P8dQgcxllR0085oS2jbLmJ90aEXCB8gFpaJe8JdewiDkwueShvQY6pgGi3bVZAfQvTjVJp4v%2F3DlZIU1dJur7M1ckj77YswhdSw1OyFp%2F%2BSIk1%2BE5yY1onEZTLXvn00%2B0gRHOGbECrZ%2Bngk1YFv%2F0uE1u8jgtTIpKhS517GaB47V%2FhmF5upi7auTbXnuTCtcQqzagrD%2F01fak1TnrVJ1WABDaH%2Fg6t3Dbs5SzBHCfO3vZSZxWDX%2BkcfDVYKs5bo10OaFWDPi9R4Ky4Bqkk0yH&X-Amz-Signature=8daca5c1690af3ac4b823b7cc99695ead1b99b01332dc12afa3dca52277cdad4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UW3HC5J%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD3AW9GPC%2BQZdrrSu2PsMF5Pe%2B8UgEOzGCaynh09azSAiBAVU1AKJnV4hZBzF%2Bbi8ZOjV5gafOdZaYjZXvvp%2BxjbSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1mu%2FNN%2FpKPGU12AOKtwDCQD0bf8hPTDvKkTnN%2FUB%2FFwRZtmVghO0rf67SzWbp14xiJPP1TksQ6x68jBnt%2BRg41QAK0ZP7VLtlP6DrVlmo1LTikMmBBrCrJAbC2MxuZikmCButFx8Vque75QC7OOWeKIthGrHCrLbyuQTKhDWbTsyvwzDQCRBw3DIcKPY4gTObiAWlbxM8JCjgUBWT75HDeSdekZ3yaZw4BDQujp0bCooTxPxZOidfphRk4Q42mDgWsgaoGCnmyF6LA2Xz4RWYYQ79t6RqJmquXc3t7DbxxUArlIMA3zYxyiM5svoiJhqSyI5R%2FVQuFQd4g7SffgV6efZNvzl5PktbNO49NxH%2FDP9WEOAwlhqPdiMYN8d1e%2BW3wHFej8T4rKii21zBZKQULbkSoaz3DZyQbTYFrlbslc%2FQkJrJj3zhW4ldSuJrxzkGIcAbTT0SwUibqzSvaWhmp8JabLBocsrKPbc0EbxEcfzvE1YqFf7vYa8fgtkzST8NY8szjI6usgQMPgv3en3k7ivVjKKYfUNlPUCyCh8kLDzFmv4mP82I7uXHBSpeleRg%2F4xMGMlY8UcAtH4k5zl0d%2FfrTxB5oJ%2BR04P8dQgcxllR0085oS2jbLmJ90aEXCB8gFpaJe8JdewiDkwueShvQY6pgGi3bVZAfQvTjVJp4v%2F3DlZIU1dJur7M1ckj77YswhdSw1OyFp%2F%2BSIk1%2BE5yY1onEZTLXvn00%2B0gRHOGbECrZ%2Bngk1YFv%2F0uE1u8jgtTIpKhS517GaB47V%2FhmF5upi7auTbXnuTCtcQqzagrD%2F01fak1TnrVJ1WABDaH%2Fg6t3Dbs5SzBHCfO3vZSZxWDX%2BkcfDVYKs5bo10OaFWDPi9R4Ky4Bqkk0yH&X-Amz-Signature=554bd2707131b72896b4704a1a19621913900b0a1945e66d98e261e85ab20a2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UW3HC5J%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD3AW9GPC%2BQZdrrSu2PsMF5Pe%2B8UgEOzGCaynh09azSAiBAVU1AKJnV4hZBzF%2Bbi8ZOjV5gafOdZaYjZXvvp%2BxjbSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1mu%2FNN%2FpKPGU12AOKtwDCQD0bf8hPTDvKkTnN%2FUB%2FFwRZtmVghO0rf67SzWbp14xiJPP1TksQ6x68jBnt%2BRg41QAK0ZP7VLtlP6DrVlmo1LTikMmBBrCrJAbC2MxuZikmCButFx8Vque75QC7OOWeKIthGrHCrLbyuQTKhDWbTsyvwzDQCRBw3DIcKPY4gTObiAWlbxM8JCjgUBWT75HDeSdekZ3yaZw4BDQujp0bCooTxPxZOidfphRk4Q42mDgWsgaoGCnmyF6LA2Xz4RWYYQ79t6RqJmquXc3t7DbxxUArlIMA3zYxyiM5svoiJhqSyI5R%2FVQuFQd4g7SffgV6efZNvzl5PktbNO49NxH%2FDP9WEOAwlhqPdiMYN8d1e%2BW3wHFej8T4rKii21zBZKQULbkSoaz3DZyQbTYFrlbslc%2FQkJrJj3zhW4ldSuJrxzkGIcAbTT0SwUibqzSvaWhmp8JabLBocsrKPbc0EbxEcfzvE1YqFf7vYa8fgtkzST8NY8szjI6usgQMPgv3en3k7ivVjKKYfUNlPUCyCh8kLDzFmv4mP82I7uXHBSpeleRg%2F4xMGMlY8UcAtH4k5zl0d%2FfrTxB5oJ%2BR04P8dQgcxllR0085oS2jbLmJ90aEXCB8gFpaJe8JdewiDkwueShvQY6pgGi3bVZAfQvTjVJp4v%2F3DlZIU1dJur7M1ckj77YswhdSw1OyFp%2F%2BSIk1%2BE5yY1onEZTLXvn00%2B0gRHOGbECrZ%2Bngk1YFv%2F0uE1u8jgtTIpKhS517GaB47V%2FhmF5upi7auTbXnuTCtcQqzagrD%2F01fak1TnrVJ1WABDaH%2Fg6t3Dbs5SzBHCfO3vZSZxWDX%2BkcfDVYKs5bo10OaFWDPi9R4Ky4Bqkk0yH&X-Amz-Signature=4c989d84963ab7ac42aeeffbaa5c669cc8d6e017edc84e6af7d7490256afd02a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
