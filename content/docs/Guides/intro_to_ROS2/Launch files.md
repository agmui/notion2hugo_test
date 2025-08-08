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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BMDGR7V%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBF50sClXfY6fFaS%2FxTIpLQtR%2FY1h067vdMmFsNPLGizAiEAztgfo7Qs0MVD5gyLRMDNov7Z05y3iGkBsXiDBCXn9jIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFHFPYGknLtFzpcbSrcA8%2FX9PYytPy0kplqQB2fSudeLQIDb%2FQGD6IVXXBlhjS4rOUHZXRgFC7PgXPoqVs9aqYbH2yqPVm5VD5%2FQkDuvCeiA6ylUziu4%2FvJiGpsCQ39W99lUHP1pxORpsRRFAcwwlOvvKjXe0zqMZfsAsQCv8JMh68rgEncy3tfzwGEoRcCHC7cO1LUSlcaCHwaobafG8nF0EJYaGGuVTPzUA%2FXuQGcSL4j5lU3C1xnfP%2BlDyEzHFfeecsMLumoTfcmeDFervhJ949%2BbZBuBHUbuB8YROtoV6vDmR5%2FxmQXDWDAyuRqHbLxy9COs39HwHBwq4Syn%2FW7cDGphILjMG%2BkDdphek3zOw6VyZWJPXZRsN6bmTCoi26zMzHerAZdYrRAbpg7lefXb8%2BmMO5e8EqxwmgIZaRa8P14W8q7EU81%2F4X%2FoxN4fmJ5c3TfkzXQZjts%2BLpgFgwlEPTTsVM%2FquBW3S2RkqPwUKpnAqsbqdSC3jTc68C7Kc2RN58AS1pEp8WV1p%2Fv60TdfTK1ZCrKz2wD3GFTYh4XktvPBcjy49AwRUi5bJWMUQ8yc91YIC9zIzornhQF9Lzd0jxUpqDgZth64Z6u2P%2F7e9b55ZAGXYMzrKwkzduylwwkH7mq6T0C%2B4whML2C2MQGOqUBwJ1PpEvp%2FIlpETUhAbcaGCARdtT3OsC%2B5NzbHlEzFXf6hqVRfsoMC4fKpgewzIEvwpDhD6dvK7gmc3TZZi94umuTabeehMiy8586d83xUaj4oBI3kR4v5ZeWszU2XJ7yNP8Dr%2Bo7kCXV%2FW8Fw%2BpGzAhUlQw1eWv7x8yMch5KZiw2Vrt08EJ%2FJBl3dR%2B2G8FliV%2BNC4HIiU35xzl1v6YNzfWoDocV&X-Amz-Signature=9699861dd5f8d3364b08fcfa440725a66779b244147df4c3f53764cdaeb80a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BMDGR7V%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBF50sClXfY6fFaS%2FxTIpLQtR%2FY1h067vdMmFsNPLGizAiEAztgfo7Qs0MVD5gyLRMDNov7Z05y3iGkBsXiDBCXn9jIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFHFPYGknLtFzpcbSrcA8%2FX9PYytPy0kplqQB2fSudeLQIDb%2FQGD6IVXXBlhjS4rOUHZXRgFC7PgXPoqVs9aqYbH2yqPVm5VD5%2FQkDuvCeiA6ylUziu4%2FvJiGpsCQ39W99lUHP1pxORpsRRFAcwwlOvvKjXe0zqMZfsAsQCv8JMh68rgEncy3tfzwGEoRcCHC7cO1LUSlcaCHwaobafG8nF0EJYaGGuVTPzUA%2FXuQGcSL4j5lU3C1xnfP%2BlDyEzHFfeecsMLumoTfcmeDFervhJ949%2BbZBuBHUbuB8YROtoV6vDmR5%2FxmQXDWDAyuRqHbLxy9COs39HwHBwq4Syn%2FW7cDGphILjMG%2BkDdphek3zOw6VyZWJPXZRsN6bmTCoi26zMzHerAZdYrRAbpg7lefXb8%2BmMO5e8EqxwmgIZaRa8P14W8q7EU81%2F4X%2FoxN4fmJ5c3TfkzXQZjts%2BLpgFgwlEPTTsVM%2FquBW3S2RkqPwUKpnAqsbqdSC3jTc68C7Kc2RN58AS1pEp8WV1p%2Fv60TdfTK1ZCrKz2wD3GFTYh4XktvPBcjy49AwRUi5bJWMUQ8yc91YIC9zIzornhQF9Lzd0jxUpqDgZth64Z6u2P%2F7e9b55ZAGXYMzrKwkzduylwwkH7mq6T0C%2B4whML2C2MQGOqUBwJ1PpEvp%2FIlpETUhAbcaGCARdtT3OsC%2B5NzbHlEzFXf6hqVRfsoMC4fKpgewzIEvwpDhD6dvK7gmc3TZZi94umuTabeehMiy8586d83xUaj4oBI3kR4v5ZeWszU2XJ7yNP8Dr%2Bo7kCXV%2FW8Fw%2BpGzAhUlQw1eWv7x8yMch5KZiw2Vrt08EJ%2FJBl3dR%2B2G8FliV%2BNC4HIiU35xzl1v6YNzfWoDocV&X-Amz-Signature=ed71fc5e4bbb702c3ce625cca6fc30b8f5e2ce19da57b0733597eb2a68128260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BMDGR7V%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBF50sClXfY6fFaS%2FxTIpLQtR%2FY1h067vdMmFsNPLGizAiEAztgfo7Qs0MVD5gyLRMDNov7Z05y3iGkBsXiDBCXn9jIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFHFPYGknLtFzpcbSrcA8%2FX9PYytPy0kplqQB2fSudeLQIDb%2FQGD6IVXXBlhjS4rOUHZXRgFC7PgXPoqVs9aqYbH2yqPVm5VD5%2FQkDuvCeiA6ylUziu4%2FvJiGpsCQ39W99lUHP1pxORpsRRFAcwwlOvvKjXe0zqMZfsAsQCv8JMh68rgEncy3tfzwGEoRcCHC7cO1LUSlcaCHwaobafG8nF0EJYaGGuVTPzUA%2FXuQGcSL4j5lU3C1xnfP%2BlDyEzHFfeecsMLumoTfcmeDFervhJ949%2BbZBuBHUbuB8YROtoV6vDmR5%2FxmQXDWDAyuRqHbLxy9COs39HwHBwq4Syn%2FW7cDGphILjMG%2BkDdphek3zOw6VyZWJPXZRsN6bmTCoi26zMzHerAZdYrRAbpg7lefXb8%2BmMO5e8EqxwmgIZaRa8P14W8q7EU81%2F4X%2FoxN4fmJ5c3TfkzXQZjts%2BLpgFgwlEPTTsVM%2FquBW3S2RkqPwUKpnAqsbqdSC3jTc68C7Kc2RN58AS1pEp8WV1p%2Fv60TdfTK1ZCrKz2wD3GFTYh4XktvPBcjy49AwRUi5bJWMUQ8yc91YIC9zIzornhQF9Lzd0jxUpqDgZth64Z6u2P%2F7e9b55ZAGXYMzrKwkzduylwwkH7mq6T0C%2B4whML2C2MQGOqUBwJ1PpEvp%2FIlpETUhAbcaGCARdtT3OsC%2B5NzbHlEzFXf6hqVRfsoMC4fKpgewzIEvwpDhD6dvK7gmc3TZZi94umuTabeehMiy8586d83xUaj4oBI3kR4v5ZeWszU2XJ7yNP8Dr%2Bo7kCXV%2FW8Fw%2BpGzAhUlQw1eWv7x8yMch5KZiw2Vrt08EJ%2FJBl3dR%2B2G8FliV%2BNC4HIiU35xzl1v6YNzfWoDocV&X-Amz-Signature=47cd011da0d6003fe5945528723e70dc89cf0bb443b49766a8a7435a3d6e0e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
