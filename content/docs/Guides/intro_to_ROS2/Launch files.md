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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDPMR5A6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDNsCnaZ3rKYAEqmDVJnGPFLNXDsAEqXQXC7KHnQfjeuQIhAL2V0tMaQAmfoMFp40%2F40vPhp9vr0gbGWqJp%2B%2BwvtZJ8KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiWQgzWN7NtKU%2FsEQq3ANmoUHnETs1iIGYg5gtdGnMJ6UvKh9K1sBLBCPEzHev8CG2NyADKf9ykbwK6Al7a1kLi4QRB1MswWsO7Kx8VV07KkykUjwp4%2BaUIwxdmoFW8A0G3Xb%2BHdwksqoc9mzBtySbcZfPAqHEjQsamu2eEXH1Ix94Tnutf%2FdZfo83iQlBtucT14%2B1SP1NDnYzTd0%2BVRxRvo0PMrtiTvwlP6H6vrzaGZqHMa9Gav9T4Wrk9cvyKpR5qU3E1SSNtRaLIapNR6twHEoFSyJ%2BryHuyR49aA2OaP9C%2F1wnYMFubor5VeRDmVPwNc8dAbxpNIqJQDVu5JfdERCZdit6kStwtXMLyQansbAI4iptn3sBOoM4n%2FDlCeh9TtWosvx%2FRufUMzlFJrHK5oOdvK1%2BDkP7aHEJSBX3Dr%2Bnq436AIW%2BKrE41d9RFjR9st%2FU299HYxgxyh8j9R7Na%2BWpPQYjKqXKyFFZnyZbleTBehBkAO0qi1aqNgo10PZIrOF4JTtO2zJIj0tVEQZPSmsK7TiWhuACDK8N5lxO9ckC8D8jq%2FE%2FnUSQN6YBZNZIK1OICXxDISk25Jdx4aROfgASfcxD3Sh4T6u3R6vkUzzeVk1ZZiyKNMwUn%2BN6pfKlsvJrYY27Nvh6tTDOyLi%2FBjqkAcT1kEYH1SkmGjE1ERs6wyynbJug11%2F3dYT9llTFkLJU5qeAdRouV1BBEGNJOOn%2FcZtzssXDaKFTfODLp%2BDoV3A6YbAHjmxTIX1%2FvrVlYNmfvGpx2sUEuDCjazg9pYgz0paxgU7zgj3sgykk4HGklvjEUPXcCmdhP%2FeLoTzoXfW7iVTVQfQ39Gf23CHpKgyGj0SIYOgSJVpI8u3WzYvYeord4Oep&X-Amz-Signature=3885516d1cf925f89d9d89dee8a6c2ab5875795b0a4a56cbbff1da0e05ec8cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDPMR5A6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDNsCnaZ3rKYAEqmDVJnGPFLNXDsAEqXQXC7KHnQfjeuQIhAL2V0tMaQAmfoMFp40%2F40vPhp9vr0gbGWqJp%2B%2BwvtZJ8KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiWQgzWN7NtKU%2FsEQq3ANmoUHnETs1iIGYg5gtdGnMJ6UvKh9K1sBLBCPEzHev8CG2NyADKf9ykbwK6Al7a1kLi4QRB1MswWsO7Kx8VV07KkykUjwp4%2BaUIwxdmoFW8A0G3Xb%2BHdwksqoc9mzBtySbcZfPAqHEjQsamu2eEXH1Ix94Tnutf%2FdZfo83iQlBtucT14%2B1SP1NDnYzTd0%2BVRxRvo0PMrtiTvwlP6H6vrzaGZqHMa9Gav9T4Wrk9cvyKpR5qU3E1SSNtRaLIapNR6twHEoFSyJ%2BryHuyR49aA2OaP9C%2F1wnYMFubor5VeRDmVPwNc8dAbxpNIqJQDVu5JfdERCZdit6kStwtXMLyQansbAI4iptn3sBOoM4n%2FDlCeh9TtWosvx%2FRufUMzlFJrHK5oOdvK1%2BDkP7aHEJSBX3Dr%2Bnq436AIW%2BKrE41d9RFjR9st%2FU299HYxgxyh8j9R7Na%2BWpPQYjKqXKyFFZnyZbleTBehBkAO0qi1aqNgo10PZIrOF4JTtO2zJIj0tVEQZPSmsK7TiWhuACDK8N5lxO9ckC8D8jq%2FE%2FnUSQN6YBZNZIK1OICXxDISk25Jdx4aROfgASfcxD3Sh4T6u3R6vkUzzeVk1ZZiyKNMwUn%2BN6pfKlsvJrYY27Nvh6tTDOyLi%2FBjqkAcT1kEYH1SkmGjE1ERs6wyynbJug11%2F3dYT9llTFkLJU5qeAdRouV1BBEGNJOOn%2FcZtzssXDaKFTfODLp%2BDoV3A6YbAHjmxTIX1%2FvrVlYNmfvGpx2sUEuDCjazg9pYgz0paxgU7zgj3sgykk4HGklvjEUPXcCmdhP%2FeLoTzoXfW7iVTVQfQ39Gf23CHpKgyGj0SIYOgSJVpI8u3WzYvYeord4Oep&X-Amz-Signature=d3f9c2199053c2b8df85f4895e52a50644e336316d97a16b008302ab1596a5fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDPMR5A6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDNsCnaZ3rKYAEqmDVJnGPFLNXDsAEqXQXC7KHnQfjeuQIhAL2V0tMaQAmfoMFp40%2F40vPhp9vr0gbGWqJp%2B%2BwvtZJ8KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiWQgzWN7NtKU%2FsEQq3ANmoUHnETs1iIGYg5gtdGnMJ6UvKh9K1sBLBCPEzHev8CG2NyADKf9ykbwK6Al7a1kLi4QRB1MswWsO7Kx8VV07KkykUjwp4%2BaUIwxdmoFW8A0G3Xb%2BHdwksqoc9mzBtySbcZfPAqHEjQsamu2eEXH1Ix94Tnutf%2FdZfo83iQlBtucT14%2B1SP1NDnYzTd0%2BVRxRvo0PMrtiTvwlP6H6vrzaGZqHMa9Gav9T4Wrk9cvyKpR5qU3E1SSNtRaLIapNR6twHEoFSyJ%2BryHuyR49aA2OaP9C%2F1wnYMFubor5VeRDmVPwNc8dAbxpNIqJQDVu5JfdERCZdit6kStwtXMLyQansbAI4iptn3sBOoM4n%2FDlCeh9TtWosvx%2FRufUMzlFJrHK5oOdvK1%2BDkP7aHEJSBX3Dr%2Bnq436AIW%2BKrE41d9RFjR9st%2FU299HYxgxyh8j9R7Na%2BWpPQYjKqXKyFFZnyZbleTBehBkAO0qi1aqNgo10PZIrOF4JTtO2zJIj0tVEQZPSmsK7TiWhuACDK8N5lxO9ckC8D8jq%2FE%2FnUSQN6YBZNZIK1OICXxDISk25Jdx4aROfgASfcxD3Sh4T6u3R6vkUzzeVk1ZZiyKNMwUn%2BN6pfKlsvJrYY27Nvh6tTDOyLi%2FBjqkAcT1kEYH1SkmGjE1ERs6wyynbJug11%2F3dYT9llTFkLJU5qeAdRouV1BBEGNJOOn%2FcZtzssXDaKFTfODLp%2BDoV3A6YbAHjmxTIX1%2FvrVlYNmfvGpx2sUEuDCjazg9pYgz0paxgU7zgj3sgykk4HGklvjEUPXcCmdhP%2FeLoTzoXfW7iVTVQfQ39Gf23CHpKgyGj0SIYOgSJVpI8u3WzYvYeord4Oep&X-Amz-Signature=d66fd527fa9c92638ccfe76d706a87cdc46d4dd6dd7cd7bb369a869969dda855&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
