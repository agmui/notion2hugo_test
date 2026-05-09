---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKIWPLZL%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCinByNpYYEqzhEMTBxFht31xi8IvkNL%2FWDUGhmLhbGbwIgQkr6pf1nAzkymIfsq9xBP65dF496QPTUA%2FZ7UtLrpcEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHhAzlUYb1oLdJAInircA3NX8kFcPgCsvOWIlRijiubDJfmX%2B48s7t67yKqTbYLd32I99iRMGEpkmYoMEzK6x0pSCpeNTHjYJ6Yi%2BisuKKFE4KDfo4DH06ekkafsqO2N7L5zSiW3AYQZKL8sOtxJ%2BY%2Feq6KKmmBSrLtW0G0S1NJYvFWbg4OYJjv%2B%2FKhz0JCUZF8R8wfVP09DJ%2BVPjRW3sHVSexD5C%2Be8dUhNXupY5iCezWbIhhBgd%2Fagv%2BsVjc4YWalBLrrtCDPZ9usqAUdRg81Osh7QfzJtPIJGzimohDnSPVyQ%2BIDIJRd%2F06%2BDU1eKqk9SOAF0bQFoWOvXbxsn9137Z2QfpW5CBHcOXSJWtzylMScy3Mf8%2FH129mEukwF3EES0P4lnlkEYz3ma%2BcFGg8N%2F357P1Nia9OQYvkENJNyU4tQNlrLheSTkOsYgHZ0iO%2F1IFZ1EfnAmi2lLZatFG80XYGWTVIzrYkfoNZkT2rWQl3gj8bWIZ3rgu91%2Fdl8iHmOPN%2B99iLlwUXZohP%2B2YTGYDLXQWlYrw6khZeTUJ70J43ohp7XS5AxU%2FCMnUapnf0A5T1%2BVEtIr3Dno6dX09zl4IqvViaihsdD9wyQYfEU5xund6IlDo%2FYrOLxtF%2BejGF04el8yaIKqZyVrMM%2By%2Bs8GOqUBxzU%2Faff%2FcnycOo1en%2BprEZruBuxM7SMFLLdxhjVlhQ78djuZVIDO6K6nFng9gRhwFSVS6ZKOfIOlTxMOiJqlgQR8CSuJcBBpyXhIs2Dtm2la3KXI%2FgtsbF3nN6C%2FYARzP8LqZ9a%2Fq3UAHaD7GuTMhpie80spiXUotdZ2Vfm%2BZ3tKBfbZW1WzhqDj%2BcPrFg27NqxFU%2F5Ekub3Zi4%2BpMY1qMhpNnoR&X-Amz-Signature=b41435ecef42fdd584455f34e75e6a31654cb382750a31bc670fbb8c459da171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKIWPLZL%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCinByNpYYEqzhEMTBxFht31xi8IvkNL%2FWDUGhmLhbGbwIgQkr6pf1nAzkymIfsq9xBP65dF496QPTUA%2FZ7UtLrpcEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHhAzlUYb1oLdJAInircA3NX8kFcPgCsvOWIlRijiubDJfmX%2B48s7t67yKqTbYLd32I99iRMGEpkmYoMEzK6x0pSCpeNTHjYJ6Yi%2BisuKKFE4KDfo4DH06ekkafsqO2N7L5zSiW3AYQZKL8sOtxJ%2BY%2Feq6KKmmBSrLtW0G0S1NJYvFWbg4OYJjv%2B%2FKhz0JCUZF8R8wfVP09DJ%2BVPjRW3sHVSexD5C%2Be8dUhNXupY5iCezWbIhhBgd%2Fagv%2BsVjc4YWalBLrrtCDPZ9usqAUdRg81Osh7QfzJtPIJGzimohDnSPVyQ%2BIDIJRd%2F06%2BDU1eKqk9SOAF0bQFoWOvXbxsn9137Z2QfpW5CBHcOXSJWtzylMScy3Mf8%2FH129mEukwF3EES0P4lnlkEYz3ma%2BcFGg8N%2F357P1Nia9OQYvkENJNyU4tQNlrLheSTkOsYgHZ0iO%2F1IFZ1EfnAmi2lLZatFG80XYGWTVIzrYkfoNZkT2rWQl3gj8bWIZ3rgu91%2Fdl8iHmOPN%2B99iLlwUXZohP%2B2YTGYDLXQWlYrw6khZeTUJ70J43ohp7XS5AxU%2FCMnUapnf0A5T1%2BVEtIr3Dno6dX09zl4IqvViaihsdD9wyQYfEU5xund6IlDo%2FYrOLxtF%2BejGF04el8yaIKqZyVrMM%2By%2Bs8GOqUBxzU%2Faff%2FcnycOo1en%2BprEZruBuxM7SMFLLdxhjVlhQ78djuZVIDO6K6nFng9gRhwFSVS6ZKOfIOlTxMOiJqlgQR8CSuJcBBpyXhIs2Dtm2la3KXI%2FgtsbF3nN6C%2FYARzP8LqZ9a%2Fq3UAHaD7GuTMhpie80spiXUotdZ2Vfm%2BZ3tKBfbZW1WzhqDj%2BcPrFg27NqxFU%2F5Ekub3Zi4%2BpMY1qMhpNnoR&X-Amz-Signature=1206cfcd375323d41f3def15fa1e775d5df9e8ddde4e44935418936dfa62713d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKIWPLZL%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCinByNpYYEqzhEMTBxFht31xi8IvkNL%2FWDUGhmLhbGbwIgQkr6pf1nAzkymIfsq9xBP65dF496QPTUA%2FZ7UtLrpcEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHhAzlUYb1oLdJAInircA3NX8kFcPgCsvOWIlRijiubDJfmX%2B48s7t67yKqTbYLd32I99iRMGEpkmYoMEzK6x0pSCpeNTHjYJ6Yi%2BisuKKFE4KDfo4DH06ekkafsqO2N7L5zSiW3AYQZKL8sOtxJ%2BY%2Feq6KKmmBSrLtW0G0S1NJYvFWbg4OYJjv%2B%2FKhz0JCUZF8R8wfVP09DJ%2BVPjRW3sHVSexD5C%2Be8dUhNXupY5iCezWbIhhBgd%2Fagv%2BsVjc4YWalBLrrtCDPZ9usqAUdRg81Osh7QfzJtPIJGzimohDnSPVyQ%2BIDIJRd%2F06%2BDU1eKqk9SOAF0bQFoWOvXbxsn9137Z2QfpW5CBHcOXSJWtzylMScy3Mf8%2FH129mEukwF3EES0P4lnlkEYz3ma%2BcFGg8N%2F357P1Nia9OQYvkENJNyU4tQNlrLheSTkOsYgHZ0iO%2F1IFZ1EfnAmi2lLZatFG80XYGWTVIzrYkfoNZkT2rWQl3gj8bWIZ3rgu91%2Fdl8iHmOPN%2B99iLlwUXZohP%2B2YTGYDLXQWlYrw6khZeTUJ70J43ohp7XS5AxU%2FCMnUapnf0A5T1%2BVEtIr3Dno6dX09zl4IqvViaihsdD9wyQYfEU5xund6IlDo%2FYrOLxtF%2BejGF04el8yaIKqZyVrMM%2By%2Bs8GOqUBxzU%2Faff%2FcnycOo1en%2BprEZruBuxM7SMFLLdxhjVlhQ78djuZVIDO6K6nFng9gRhwFSVS6ZKOfIOlTxMOiJqlgQR8CSuJcBBpyXhIs2Dtm2la3KXI%2FgtsbF3nN6C%2FYARzP8LqZ9a%2Fq3UAHaD7GuTMhpie80spiXUotdZ2Vfm%2BZ3tKBfbZW1WzhqDj%2BcPrFg27NqxFU%2F5Ekub3Zi4%2BpMY1qMhpNnoR&X-Amz-Signature=73c5df967884901ab3148bd3b5b0029f3265855e3f627a05f3aa03e721f75d24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
