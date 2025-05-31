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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUQFFGH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU%2FPVVGh9SC6G%2B53QiQel0VZOvlQomFW3%2BXU8rD4S%2BCQIgLpD55zpb9r%2BJvD8IArnO8KAEnjE73gEctk0QqCw%2FhEAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2%2FJAbW%2BpPKT%2BOa3SrcA%2BcUi0up4lVy2lTX0bc79BS1FZrYxg4GRVBxyXH4oWDGaY%2FLdJRA6GWzqvshzTFim05nWOmfaYGOOm%2Bjllo0drhvc2a0EkRQP6syfJfTz%2BEVPuu1reDb0tvL4K7KXIncRIPtk9NpEQ6Pb4NMR%2FN9tvpijrFS%2FB7R9GwD%2FpJvGY%2BnRSTLavQzqNDaGruQ20%2FWO9gCdV%2BdfTweLOJauoBu3idR8PxVZY%2BsxKhv6iuhfvR%2F%2Fhmj7ILK1ZoqAMZp0Oq7HzV0%2BfzL%2BaRlf%2FkaslpaX%2FFJXYqWKcQ5KxqQULBfwbc3VCV%2FMkmx2KBhZol7LjTohbqAdYBh%2B6dNTXVgjOlEwmWCCG4WhcnN%2B%2B8bUrCjnL42rPimTlCCGCnPQGlhY7mYw0gPm9OfhqolB66NRSI2PXfcETzUuGyN5%2Bt4wOUznU8zvKlH%2BYSdMAW%2BcCqvhG%2FGCM2Zrm61T7hUxIkxMHXEZZ4n9JipJQqh%2BVAdvmWarJMjfjEY00Za70z38lmA2KKXsT6VLRS0s4oic%2B9J%2B7nTvhJuyU78g89P%2BB7jdQfU5U6kqbqT%2F%2F5iDLhVAsv7%2F6tX%2BybqIh7i0qA0r0YYC03aY8C27HiGtwCBajfbEEGtyuhc5%2BANMsedZn8YQj9%2BMK6E68EGOqUBCOa8uvNmFsE1gJXS087HaYe2YE9FcfM1o9Ba%2BZhjhQaZJSV4%2BtkstPDIFfVdkl%2FARRQdmo0EFc5zBEooOL8Hx%2BR0uTchBTK8XIjlK%2Bdx%2Bm9foCfch1%2FjWUWp7M7a5qOil10hI03OyPIp2tvuJmx6lGuYcQISzxGVrmYJPvUg8%2FmVv7dPWUBfSTNFfHpuhuQZtte%2Fe%2BOzUNXILE7s7SdMGQR4%2BnC4&X-Amz-Signature=526855f0e80382abbec79e45a8dc55e4b68f6410fc737fe89739bfe30727f544&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUQFFGH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU%2FPVVGh9SC6G%2B53QiQel0VZOvlQomFW3%2BXU8rD4S%2BCQIgLpD55zpb9r%2BJvD8IArnO8KAEnjE73gEctk0QqCw%2FhEAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2%2FJAbW%2BpPKT%2BOa3SrcA%2BcUi0up4lVy2lTX0bc79BS1FZrYxg4GRVBxyXH4oWDGaY%2FLdJRA6GWzqvshzTFim05nWOmfaYGOOm%2Bjllo0drhvc2a0EkRQP6syfJfTz%2BEVPuu1reDb0tvL4K7KXIncRIPtk9NpEQ6Pb4NMR%2FN9tvpijrFS%2FB7R9GwD%2FpJvGY%2BnRSTLavQzqNDaGruQ20%2FWO9gCdV%2BdfTweLOJauoBu3idR8PxVZY%2BsxKhv6iuhfvR%2F%2Fhmj7ILK1ZoqAMZp0Oq7HzV0%2BfzL%2BaRlf%2FkaslpaX%2FFJXYqWKcQ5KxqQULBfwbc3VCV%2FMkmx2KBhZol7LjTohbqAdYBh%2B6dNTXVgjOlEwmWCCG4WhcnN%2B%2B8bUrCjnL42rPimTlCCGCnPQGlhY7mYw0gPm9OfhqolB66NRSI2PXfcETzUuGyN5%2Bt4wOUznU8zvKlH%2BYSdMAW%2BcCqvhG%2FGCM2Zrm61T7hUxIkxMHXEZZ4n9JipJQqh%2BVAdvmWarJMjfjEY00Za70z38lmA2KKXsT6VLRS0s4oic%2B9J%2B7nTvhJuyU78g89P%2BB7jdQfU5U6kqbqT%2F%2F5iDLhVAsv7%2F6tX%2BybqIh7i0qA0r0YYC03aY8C27HiGtwCBajfbEEGtyuhc5%2BANMsedZn8YQj9%2BMK6E68EGOqUBCOa8uvNmFsE1gJXS087HaYe2YE9FcfM1o9Ba%2BZhjhQaZJSV4%2BtkstPDIFfVdkl%2FARRQdmo0EFc5zBEooOL8Hx%2BR0uTchBTK8XIjlK%2Bdx%2Bm9foCfch1%2FjWUWp7M7a5qOil10hI03OyPIp2tvuJmx6lGuYcQISzxGVrmYJPvUg8%2FmVv7dPWUBfSTNFfHpuhuQZtte%2Fe%2BOzUNXILE7s7SdMGQR4%2BnC4&X-Amz-Signature=56d2ccf09d4ef8ec2dc7b34aaa12324ffdd0c08cf9b8134cec9c077c4f4e06a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUQFFGH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU%2FPVVGh9SC6G%2B53QiQel0VZOvlQomFW3%2BXU8rD4S%2BCQIgLpD55zpb9r%2BJvD8IArnO8KAEnjE73gEctk0QqCw%2FhEAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2%2FJAbW%2BpPKT%2BOa3SrcA%2BcUi0up4lVy2lTX0bc79BS1FZrYxg4GRVBxyXH4oWDGaY%2FLdJRA6GWzqvshzTFim05nWOmfaYGOOm%2Bjllo0drhvc2a0EkRQP6syfJfTz%2BEVPuu1reDb0tvL4K7KXIncRIPtk9NpEQ6Pb4NMR%2FN9tvpijrFS%2FB7R9GwD%2FpJvGY%2BnRSTLavQzqNDaGruQ20%2FWO9gCdV%2BdfTweLOJauoBu3idR8PxVZY%2BsxKhv6iuhfvR%2F%2Fhmj7ILK1ZoqAMZp0Oq7HzV0%2BfzL%2BaRlf%2FkaslpaX%2FFJXYqWKcQ5KxqQULBfwbc3VCV%2FMkmx2KBhZol7LjTohbqAdYBh%2B6dNTXVgjOlEwmWCCG4WhcnN%2B%2B8bUrCjnL42rPimTlCCGCnPQGlhY7mYw0gPm9OfhqolB66NRSI2PXfcETzUuGyN5%2Bt4wOUznU8zvKlH%2BYSdMAW%2BcCqvhG%2FGCM2Zrm61T7hUxIkxMHXEZZ4n9JipJQqh%2BVAdvmWarJMjfjEY00Za70z38lmA2KKXsT6VLRS0s4oic%2B9J%2B7nTvhJuyU78g89P%2BB7jdQfU5U6kqbqT%2F%2F5iDLhVAsv7%2F6tX%2BybqIh7i0qA0r0YYC03aY8C27HiGtwCBajfbEEGtyuhc5%2BANMsedZn8YQj9%2BMK6E68EGOqUBCOa8uvNmFsE1gJXS087HaYe2YE9FcfM1o9Ba%2BZhjhQaZJSV4%2BtkstPDIFfVdkl%2FARRQdmo0EFc5zBEooOL8Hx%2BR0uTchBTK8XIjlK%2Bdx%2Bm9foCfch1%2FjWUWp7M7a5qOil10hI03OyPIp2tvuJmx6lGuYcQISzxGVrmYJPvUg8%2FmVv7dPWUBfSTNFfHpuhuQZtte%2Fe%2BOzUNXILE7s7SdMGQR4%2BnC4&X-Amz-Signature=53c43840f8905914605fbd76f1b0d3917c8b86b5e0eb50ee933f621edb27c987&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
