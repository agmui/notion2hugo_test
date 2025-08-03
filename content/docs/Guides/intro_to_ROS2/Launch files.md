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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYKACACY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6eq5Wrv71RQOM%2ByIQW48R2iVwFGeZ7PYVEsw3wW6tBAiEAiy8Bx2Tz%2BbQ%2FtZQHKZtGvuxm9R6%2FTXNapLw21zUuhskq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGWBEy6whSNfDyY%2F1CrcAyazBOsysmI2%2FJmdrZh9smy7Ze9VBkaclg7zibJhePTWUHRLUW7mU%2BkVQume0qpJ9xCSWWrLPj6notgBFGKia3rkmU%2FESIZeTssqjc4W82xR8OxVVZqLekMLImjV1HAYjrOeO%2FPTOCEiVKGTdUMs1mqShLLV5RZPZirsGbmcKY%2B7EHVi37CsUmlnJh4fwvB0YFq3k1dBPA3JcCsIKjglYMazauk0iXxn8%2F9rOyKVkqDRC3L1toMnLkkfwfcjob8YoRTDL2g9Ml74QTwNo%2BgcWo%2BeuuDoMSnX8A%2FFG97te1UZc2NGDwXwE2PoR%2BS%2B2nvVag3n0vj987SofFfyjcqlVDvhRMF6Lrl4wquHdYGCdD3EQjjijux6zCd41dzf7Jk%2BkY5mtAUIz0gzZigwXLTvb1BAIEF1nVfdRzQhBwGGyAt%2FmltyvP2lmSATDlLAVRsvvfrMgdWKFLzNjG31JOjepwXuR3TlFwxi9JpMs0M3IoPzcuNQl1iXABlrTXXcPZQ1cCtJsV1MQRuthpt%2BVxh1eliXmW11ZyujMHxwfU%2Bln2yZ2CA1UnAgloRO9HPlA94E1s5ysDpXul1ZIPF3UDlJqofiZjzqcRKjxp10io%2F1OuUKfGytHxDCBOC%2BD%2FOCMPKlu8QGOqUBWf%2BmOIkwGnp7oCwQv%2FQW6nBXx4P1RcY9G8F9Qqz7UqU00Yz2YXK4jd4GdhyYLM2ME%2FsfCbR4BZ6yxRRm4qiAysFCoMtnMSrRQr2k1uHhMko%2FSVUlxeE3qyYS6RgTBB4rCfISekHIa0x%2FTLIy2s4RgUIINUHDC%2FIroSfoOj%2BSXuHFg7eVhkquhAengEQrCmoJowcj2Vb%2Bn4i3HWrFrwgwL7I4VUqV&X-Amz-Signature=b72ea259523c616a33cfb90a0c60da902126bca0ff57474195c5064fbc7455d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYKACACY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6eq5Wrv71RQOM%2ByIQW48R2iVwFGeZ7PYVEsw3wW6tBAiEAiy8Bx2Tz%2BbQ%2FtZQHKZtGvuxm9R6%2FTXNapLw21zUuhskq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGWBEy6whSNfDyY%2F1CrcAyazBOsysmI2%2FJmdrZh9smy7Ze9VBkaclg7zibJhePTWUHRLUW7mU%2BkVQume0qpJ9xCSWWrLPj6notgBFGKia3rkmU%2FESIZeTssqjc4W82xR8OxVVZqLekMLImjV1HAYjrOeO%2FPTOCEiVKGTdUMs1mqShLLV5RZPZirsGbmcKY%2B7EHVi37CsUmlnJh4fwvB0YFq3k1dBPA3JcCsIKjglYMazauk0iXxn8%2F9rOyKVkqDRC3L1toMnLkkfwfcjob8YoRTDL2g9Ml74QTwNo%2BgcWo%2BeuuDoMSnX8A%2FFG97te1UZc2NGDwXwE2PoR%2BS%2B2nvVag3n0vj987SofFfyjcqlVDvhRMF6Lrl4wquHdYGCdD3EQjjijux6zCd41dzf7Jk%2BkY5mtAUIz0gzZigwXLTvb1BAIEF1nVfdRzQhBwGGyAt%2FmltyvP2lmSATDlLAVRsvvfrMgdWKFLzNjG31JOjepwXuR3TlFwxi9JpMs0M3IoPzcuNQl1iXABlrTXXcPZQ1cCtJsV1MQRuthpt%2BVxh1eliXmW11ZyujMHxwfU%2Bln2yZ2CA1UnAgloRO9HPlA94E1s5ysDpXul1ZIPF3UDlJqofiZjzqcRKjxp10io%2F1OuUKfGytHxDCBOC%2BD%2FOCMPKlu8QGOqUBWf%2BmOIkwGnp7oCwQv%2FQW6nBXx4P1RcY9G8F9Qqz7UqU00Yz2YXK4jd4GdhyYLM2ME%2FsfCbR4BZ6yxRRm4qiAysFCoMtnMSrRQr2k1uHhMko%2FSVUlxeE3qyYS6RgTBB4rCfISekHIa0x%2FTLIy2s4RgUIINUHDC%2FIroSfoOj%2BSXuHFg7eVhkquhAengEQrCmoJowcj2Vb%2Bn4i3HWrFrwgwL7I4VUqV&X-Amz-Signature=23f97ba9aa997d7ec0001032721a02e517350850be43b1a3a45436382516c05a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYKACACY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6eq5Wrv71RQOM%2ByIQW48R2iVwFGeZ7PYVEsw3wW6tBAiEAiy8Bx2Tz%2BbQ%2FtZQHKZtGvuxm9R6%2FTXNapLw21zUuhskq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGWBEy6whSNfDyY%2F1CrcAyazBOsysmI2%2FJmdrZh9smy7Ze9VBkaclg7zibJhePTWUHRLUW7mU%2BkVQume0qpJ9xCSWWrLPj6notgBFGKia3rkmU%2FESIZeTssqjc4W82xR8OxVVZqLekMLImjV1HAYjrOeO%2FPTOCEiVKGTdUMs1mqShLLV5RZPZirsGbmcKY%2B7EHVi37CsUmlnJh4fwvB0YFq3k1dBPA3JcCsIKjglYMazauk0iXxn8%2F9rOyKVkqDRC3L1toMnLkkfwfcjob8YoRTDL2g9Ml74QTwNo%2BgcWo%2BeuuDoMSnX8A%2FFG97te1UZc2NGDwXwE2PoR%2BS%2B2nvVag3n0vj987SofFfyjcqlVDvhRMF6Lrl4wquHdYGCdD3EQjjijux6zCd41dzf7Jk%2BkY5mtAUIz0gzZigwXLTvb1BAIEF1nVfdRzQhBwGGyAt%2FmltyvP2lmSATDlLAVRsvvfrMgdWKFLzNjG31JOjepwXuR3TlFwxi9JpMs0M3IoPzcuNQl1iXABlrTXXcPZQ1cCtJsV1MQRuthpt%2BVxh1eliXmW11ZyujMHxwfU%2Bln2yZ2CA1UnAgloRO9HPlA94E1s5ysDpXul1ZIPF3UDlJqofiZjzqcRKjxp10io%2F1OuUKfGytHxDCBOC%2BD%2FOCMPKlu8QGOqUBWf%2BmOIkwGnp7oCwQv%2FQW6nBXx4P1RcY9G8F9Qqz7UqU00Yz2YXK4jd4GdhyYLM2ME%2FsfCbR4BZ6yxRRm4qiAysFCoMtnMSrRQr2k1uHhMko%2FSVUlxeE3qyYS6RgTBB4rCfISekHIa0x%2FTLIy2s4RgUIINUHDC%2FIroSfoOj%2BSXuHFg7eVhkquhAengEQrCmoJowcj2Vb%2Bn4i3HWrFrwgwL7I4VUqV&X-Amz-Signature=0bad6e7a84bac9b0a4aecaf4c7b792bebc3a1ecc0584b6034864c138c1fecf64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
