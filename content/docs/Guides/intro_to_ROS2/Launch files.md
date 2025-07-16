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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7DE3B2A%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCICqU2LZvkguhyAJ2weH%2FV9GuotjaTzbagd4zs8o%2Bjxi8AiEAg7zgU2c3oGzBsTQqbiGtk07n%2Bypcjn2NDYcZ%2B%2FUXMuoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDImbIpbkNWutEFDa9ircA8NXVQ1YzXCgXJxmSfOnO18RJdmdWfVW1w8%2BMHgAOYQjS2VrFJbpC15Y1MC42uA8H7YizTkGbaa5xCDMHSW7p%2B1rUi%2B4Wl8iIAHAef2V%2BB53YawN8s6yDTMQvLg5tYYVT3ykXX3Kf38bD7Gp%2FZ39ldnmfwq10JLwWlYDn1g4uhASb3e%2FLoSLkSqXrCH1lq%2FD3JI8I3MJpKlVNr9LxOSv11NszojARK9lHVHi2wtTPYIQ%2FeNqWHhbkYjsZCCtmU%2FtLUJNKQWlzNe7w64vkVgGlkVVS7vEAMaMmfU%2BYUhYrVoD%2BDxjpI0Zf%2F0rYmxbdnNb7xGl9yi0ZXQIM%2FsChEyqa3TnUvv%2FRknHo%2Fqb7Y8P8nFyrhBhsOmuWXDnxjVS3jl24z6wCXoI7mrEvdpO57gHvqOxznCDOilc%2FOy0tDGAHIfb1Bsl3zB7r%2FTJ8sLT61bmaTOpMIRez1TXiABl4AUBDklyZ43WwHQf5tTS8RHj8bpOUawAugFMCn6r65pYhoxJH8LW5iafqccHjQLDjaJxvqpWMoq5JuH7O8OM8j0icdU4vU0DQTaoqhHg76V5U9bA3P3VIfxRjmHPGFL1qsfEngUuE1YFtjbA2oId1O0hZt1O%2B9E8Z4nBPsnMPPaCMLq93cMGOqUBjlGq76%2Bfoo8e131uPXvWV67uE0apZpVxVA56jmiWRPl21K6DpY%2Bf1JwyvykHOdFsXvidTtyNRp7xd93%2FJpr7bcYBHm0u5p7%2BeFwCBkjo5JVUxSxSq5s5GDjmBl74AOQ0ZBDFtjFu4PoZn1Wz3RjsnMxBpDMCew2%2FxDtVogb%2BWi7R%2FL0xHfzOWouAcfy%2F%2Fhfo3ugi3clzPPTIVTpEdn3IPXlPmAxk&X-Amz-Signature=a3a517025c512c0cd1050c718a7acb4c2217af72ec39ad08d03b5c7576caaa6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7DE3B2A%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCICqU2LZvkguhyAJ2weH%2FV9GuotjaTzbagd4zs8o%2Bjxi8AiEAg7zgU2c3oGzBsTQqbiGtk07n%2Bypcjn2NDYcZ%2B%2FUXMuoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDImbIpbkNWutEFDa9ircA8NXVQ1YzXCgXJxmSfOnO18RJdmdWfVW1w8%2BMHgAOYQjS2VrFJbpC15Y1MC42uA8H7YizTkGbaa5xCDMHSW7p%2B1rUi%2B4Wl8iIAHAef2V%2BB53YawN8s6yDTMQvLg5tYYVT3ykXX3Kf38bD7Gp%2FZ39ldnmfwq10JLwWlYDn1g4uhASb3e%2FLoSLkSqXrCH1lq%2FD3JI8I3MJpKlVNr9LxOSv11NszojARK9lHVHi2wtTPYIQ%2FeNqWHhbkYjsZCCtmU%2FtLUJNKQWlzNe7w64vkVgGlkVVS7vEAMaMmfU%2BYUhYrVoD%2BDxjpI0Zf%2F0rYmxbdnNb7xGl9yi0ZXQIM%2FsChEyqa3TnUvv%2FRknHo%2Fqb7Y8P8nFyrhBhsOmuWXDnxjVS3jl24z6wCXoI7mrEvdpO57gHvqOxznCDOilc%2FOy0tDGAHIfb1Bsl3zB7r%2FTJ8sLT61bmaTOpMIRez1TXiABl4AUBDklyZ43WwHQf5tTS8RHj8bpOUawAugFMCn6r65pYhoxJH8LW5iafqccHjQLDjaJxvqpWMoq5JuH7O8OM8j0icdU4vU0DQTaoqhHg76V5U9bA3P3VIfxRjmHPGFL1qsfEngUuE1YFtjbA2oId1O0hZt1O%2B9E8Z4nBPsnMPPaCMLq93cMGOqUBjlGq76%2Bfoo8e131uPXvWV67uE0apZpVxVA56jmiWRPl21K6DpY%2Bf1JwyvykHOdFsXvidTtyNRp7xd93%2FJpr7bcYBHm0u5p7%2BeFwCBkjo5JVUxSxSq5s5GDjmBl74AOQ0ZBDFtjFu4PoZn1Wz3RjsnMxBpDMCew2%2FxDtVogb%2BWi7R%2FL0xHfzOWouAcfy%2F%2Fhfo3ugi3clzPPTIVTpEdn3IPXlPmAxk&X-Amz-Signature=cfcfa0c1961b911b12b3d0630ade20d8ddbb8f003ce312eb0ad92e35e5d16211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7DE3B2A%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCICqU2LZvkguhyAJ2weH%2FV9GuotjaTzbagd4zs8o%2Bjxi8AiEAg7zgU2c3oGzBsTQqbiGtk07n%2Bypcjn2NDYcZ%2B%2FUXMuoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDImbIpbkNWutEFDa9ircA8NXVQ1YzXCgXJxmSfOnO18RJdmdWfVW1w8%2BMHgAOYQjS2VrFJbpC15Y1MC42uA8H7YizTkGbaa5xCDMHSW7p%2B1rUi%2B4Wl8iIAHAef2V%2BB53YawN8s6yDTMQvLg5tYYVT3ykXX3Kf38bD7Gp%2FZ39ldnmfwq10JLwWlYDn1g4uhASb3e%2FLoSLkSqXrCH1lq%2FD3JI8I3MJpKlVNr9LxOSv11NszojARK9lHVHi2wtTPYIQ%2FeNqWHhbkYjsZCCtmU%2FtLUJNKQWlzNe7w64vkVgGlkVVS7vEAMaMmfU%2BYUhYrVoD%2BDxjpI0Zf%2F0rYmxbdnNb7xGl9yi0ZXQIM%2FsChEyqa3TnUvv%2FRknHo%2Fqb7Y8P8nFyrhBhsOmuWXDnxjVS3jl24z6wCXoI7mrEvdpO57gHvqOxznCDOilc%2FOy0tDGAHIfb1Bsl3zB7r%2FTJ8sLT61bmaTOpMIRez1TXiABl4AUBDklyZ43WwHQf5tTS8RHj8bpOUawAugFMCn6r65pYhoxJH8LW5iafqccHjQLDjaJxvqpWMoq5JuH7O8OM8j0icdU4vU0DQTaoqhHg76V5U9bA3P3VIfxRjmHPGFL1qsfEngUuE1YFtjbA2oId1O0hZt1O%2B9E8Z4nBPsnMPPaCMLq93cMGOqUBjlGq76%2Bfoo8e131uPXvWV67uE0apZpVxVA56jmiWRPl21K6DpY%2Bf1JwyvykHOdFsXvidTtyNRp7xd93%2FJpr7bcYBHm0u5p7%2BeFwCBkjo5JVUxSxSq5s5GDjmBl74AOQ0ZBDFtjFu4PoZn1Wz3RjsnMxBpDMCew2%2FxDtVogb%2BWi7R%2FL0xHfzOWouAcfy%2F%2Fhfo3ugi3clzPPTIVTpEdn3IPXlPmAxk&X-Amz-Signature=7a0457caad31b813738b8eddb086df2665346deb2745ab8261c8b78a6243ea28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
