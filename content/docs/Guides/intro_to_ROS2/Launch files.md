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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GVGVPUZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDmqUADWmq4Nktq4LTFzAyGpfgwBa51gJUuw3vuNsY8LAIhAPBzJtyg%2FMh1cVqJo1S6cg8yGXFClSl5tKwxVw2wi1NBKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeHwrUAm5XacophVgq3AOB%2BnWDxBubKr9uNhdinKM%2Bs3luo4OiAEV1AJ4sMwyyeiZMaJnXerWSUlxKaIxRW00EZdaYuA7d8qaki5RUJSDiAsnpF0F1K7Ss3LVgo%2FeGZsKfJdpIlZv7roawdCKcCXIpJCeHVwTk7v35Tp89oX8o1MMUIJSukJh%2FPXLjbdEagT%2FzEis6mpvks0XZs4u6Ec7%2FtgMd8OnjG166TxR92wP%2FcyOsO5X1HUF8%2F4%2BcMpDepA%2Fush6fpgU4Wv3WAFrl%2F0PO6jz%2BgBX5qvai3SGDnc63CRtqCf1qLohSbCJ6z6%2FX9DREfaUVyML72Mo4J4J%2FpYLpG2cuYVeqHHe4elKggZZscMWOoBzpe5PpwKSg2gIl2evv8Wn%2BvCFBWKyozWJAUT5m%2B8rDquOwAce%2BkwDC3Glui0I41mQUIFqN87u98R4ZWveBxkcnOmOBPTHb8Q2ksvdbHYbJ3MItR%2FUclCNRLcrxF7TXVaN6th9cy1TmdORJ7ycJ7ye64umlf5YJynp8cD6jrWwCqYcULd0qxYDuOTX3V%2FVOqP69jHigw3hl%2B8FapptlUBUiYWdiH9JiIHox58I2D%2FMpEHnsc0NWIS1KY%2FmU7wW1DVKc0GSGgRiSFEz%2BT0xR0aic7ZaYibqIJzCx6Lq%2BBjqkAf%2BpDEEQHQRB77UL7gtZ41xVuJeyayBhCHKu8819ypHwwgydV9bxveRj1GAqQwHWveq9MpeVL5%2Fx00i2RBGjL8QgqOnrW4s9jFHrf2JJSpTgw8PeW1yvT%2BB%2BE7OfmcQNLAAuyrJFZxJp0xJmtABbsmjf3iPwMreMqG4TER%2BMNosS5HK1Jig4xYsEhI%2FZFYoQtQOwbKeOnK2kpZx6IdUvod9r2idJ&X-Amz-Signature=6189afd4af14bcb446980eff66c3dc981d09ee1ce05cac10d58fa30e33ba5af0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GVGVPUZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDmqUADWmq4Nktq4LTFzAyGpfgwBa51gJUuw3vuNsY8LAIhAPBzJtyg%2FMh1cVqJo1S6cg8yGXFClSl5tKwxVw2wi1NBKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeHwrUAm5XacophVgq3AOB%2BnWDxBubKr9uNhdinKM%2Bs3luo4OiAEV1AJ4sMwyyeiZMaJnXerWSUlxKaIxRW00EZdaYuA7d8qaki5RUJSDiAsnpF0F1K7Ss3LVgo%2FeGZsKfJdpIlZv7roawdCKcCXIpJCeHVwTk7v35Tp89oX8o1MMUIJSukJh%2FPXLjbdEagT%2FzEis6mpvks0XZs4u6Ec7%2FtgMd8OnjG166TxR92wP%2FcyOsO5X1HUF8%2F4%2BcMpDepA%2Fush6fpgU4Wv3WAFrl%2F0PO6jz%2BgBX5qvai3SGDnc63CRtqCf1qLohSbCJ6z6%2FX9DREfaUVyML72Mo4J4J%2FpYLpG2cuYVeqHHe4elKggZZscMWOoBzpe5PpwKSg2gIl2evv8Wn%2BvCFBWKyozWJAUT5m%2B8rDquOwAce%2BkwDC3Glui0I41mQUIFqN87u98R4ZWveBxkcnOmOBPTHb8Q2ksvdbHYbJ3MItR%2FUclCNRLcrxF7TXVaN6th9cy1TmdORJ7ycJ7ye64umlf5YJynp8cD6jrWwCqYcULd0qxYDuOTX3V%2FVOqP69jHigw3hl%2B8FapptlUBUiYWdiH9JiIHox58I2D%2FMpEHnsc0NWIS1KY%2FmU7wW1DVKc0GSGgRiSFEz%2BT0xR0aic7ZaYibqIJzCx6Lq%2BBjqkAf%2BpDEEQHQRB77UL7gtZ41xVuJeyayBhCHKu8819ypHwwgydV9bxveRj1GAqQwHWveq9MpeVL5%2Fx00i2RBGjL8QgqOnrW4s9jFHrf2JJSpTgw8PeW1yvT%2BB%2BE7OfmcQNLAAuyrJFZxJp0xJmtABbsmjf3iPwMreMqG4TER%2BMNosS5HK1Jig4xYsEhI%2FZFYoQtQOwbKeOnK2kpZx6IdUvod9r2idJ&X-Amz-Signature=efdcc2fe8c3006b4e53bdda3830424ad70193ee84e33c968eebe4b35078ba090&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GVGVPUZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDmqUADWmq4Nktq4LTFzAyGpfgwBa51gJUuw3vuNsY8LAIhAPBzJtyg%2FMh1cVqJo1S6cg8yGXFClSl5tKwxVw2wi1NBKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeHwrUAm5XacophVgq3AOB%2BnWDxBubKr9uNhdinKM%2Bs3luo4OiAEV1AJ4sMwyyeiZMaJnXerWSUlxKaIxRW00EZdaYuA7d8qaki5RUJSDiAsnpF0F1K7Ss3LVgo%2FeGZsKfJdpIlZv7roawdCKcCXIpJCeHVwTk7v35Tp89oX8o1MMUIJSukJh%2FPXLjbdEagT%2FzEis6mpvks0XZs4u6Ec7%2FtgMd8OnjG166TxR92wP%2FcyOsO5X1HUF8%2F4%2BcMpDepA%2Fush6fpgU4Wv3WAFrl%2F0PO6jz%2BgBX5qvai3SGDnc63CRtqCf1qLohSbCJ6z6%2FX9DREfaUVyML72Mo4J4J%2FpYLpG2cuYVeqHHe4elKggZZscMWOoBzpe5PpwKSg2gIl2evv8Wn%2BvCFBWKyozWJAUT5m%2B8rDquOwAce%2BkwDC3Glui0I41mQUIFqN87u98R4ZWveBxkcnOmOBPTHb8Q2ksvdbHYbJ3MItR%2FUclCNRLcrxF7TXVaN6th9cy1TmdORJ7ycJ7ye64umlf5YJynp8cD6jrWwCqYcULd0qxYDuOTX3V%2FVOqP69jHigw3hl%2B8FapptlUBUiYWdiH9JiIHox58I2D%2FMpEHnsc0NWIS1KY%2FmU7wW1DVKc0GSGgRiSFEz%2BT0xR0aic7ZaYibqIJzCx6Lq%2BBjqkAf%2BpDEEQHQRB77UL7gtZ41xVuJeyayBhCHKu8819ypHwwgydV9bxveRj1GAqQwHWveq9MpeVL5%2Fx00i2RBGjL8QgqOnrW4s9jFHrf2JJSpTgw8PeW1yvT%2BB%2BE7OfmcQNLAAuyrJFZxJp0xJmtABbsmjf3iPwMreMqG4TER%2BMNosS5HK1Jig4xYsEhI%2FZFYoQtQOwbKeOnK2kpZx6IdUvod9r2idJ&X-Amz-Signature=3e592f76cb7431d9894bb4461ffc4f9c370beaa1afd8b5524fa0c6eaff0055f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
