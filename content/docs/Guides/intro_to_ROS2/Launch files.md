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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672XI2PT2%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBvFw5%2BiB9qdjT%2BfhrCMlpOL8MH1xY5HskGRmEKTClULAiEAjhYV2xL1tslsI1tNHC4JVC1epwe2E7xmQqN%2FITQtcuEqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDId6WnnicwT7qJ%2Fd1ircAxbNSjgNPguxdNKbhtXv%2FbQIvkZuqgeGboc8MQY7x4LDZ6z%2Bxo3laBFK05m%2FViyOR70Jk5ImANqCABCqJJScBAOhyCVdIgtUy9k08qtyJrwM7L7D%2FW18mOtK3gUdyc4HuU6j6%2FNDb%2B3ZH0Dr38L%2BWHsKulOwx5OGcTyAL8dMtfDTllGp5bBggRgqa0dwYriXQpVcvB9M8%2B92KjAYC58TxHclXLJ3pNx%2BNwW%2FOiZvkv%2Fiiz8L3Pcx9aNYVnUh8F9cDS4N1xPbFiU1C8BnCd81mV8%2F2RzlCYmNWKKf0mufJI%2FN5uBY8kDNDTZv9reDYGN7WkGxpDeLVwvMmjKkLgDm8%2Bb41TH2GdZpgrx5syniBRbasR31XPIdBF0UtgFludxPfZ2YRtDpbtJlp8dcuS8Vc0l7p7mSFnTABPulKD2HBm0MERmf63t7zPFg1vWA1Ov4prlyUstDD8l6%2BLIUlKihr5WfZ%2Bsw%2B7ZhtxERkvkcVR6qEq3rXb%2BMF5T0Db%2FrLVpM2BLwtVyJUPhvVe1ZwE9YCVPmJcrmQTLxv%2Fbxuf9t%2F6qHFUcc3FTCuisjkjadfxlF1ap1VCN2En9wQ2mP1DSYTfQdmSSfboJyn5DuZgQsTtl8P4WueZqtOv%2BhVfEAMJvjz8AGOqUBV3yY1LuoVf9u2jxPuoCfsqIxn0b%2BWDLnour%2F33QUQdqn4mPKFpKnCM%2BS8R%2F6FWot0J8nuxc5rop%2Boqzmj0fy2Yd0bQkbM6UPAB67esY8gq3InoKu41sMUMz4nU17Bw9h0EGb5CRirBSOB4LVkhpSQCaLMjFaCdmT4urUBz%2Fwd19EAPeTBNYfPsnBOwCYBT6n7k9%2Fh%2Boqt8wTQHhe6weTq1yYwFla&X-Amz-Signature=dc9812b36932073b7ad74c1d1303148d33c8f389ef736989c9aa4aa507c4f42b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672XI2PT2%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBvFw5%2BiB9qdjT%2BfhrCMlpOL8MH1xY5HskGRmEKTClULAiEAjhYV2xL1tslsI1tNHC4JVC1epwe2E7xmQqN%2FITQtcuEqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDId6WnnicwT7qJ%2Fd1ircAxbNSjgNPguxdNKbhtXv%2FbQIvkZuqgeGboc8MQY7x4LDZ6z%2Bxo3laBFK05m%2FViyOR70Jk5ImANqCABCqJJScBAOhyCVdIgtUy9k08qtyJrwM7L7D%2FW18mOtK3gUdyc4HuU6j6%2FNDb%2B3ZH0Dr38L%2BWHsKulOwx5OGcTyAL8dMtfDTllGp5bBggRgqa0dwYriXQpVcvB9M8%2B92KjAYC58TxHclXLJ3pNx%2BNwW%2FOiZvkv%2Fiiz8L3Pcx9aNYVnUh8F9cDS4N1xPbFiU1C8BnCd81mV8%2F2RzlCYmNWKKf0mufJI%2FN5uBY8kDNDTZv9reDYGN7WkGxpDeLVwvMmjKkLgDm8%2Bb41TH2GdZpgrx5syniBRbasR31XPIdBF0UtgFludxPfZ2YRtDpbtJlp8dcuS8Vc0l7p7mSFnTABPulKD2HBm0MERmf63t7zPFg1vWA1Ov4prlyUstDD8l6%2BLIUlKihr5WfZ%2Bsw%2B7ZhtxERkvkcVR6qEq3rXb%2BMF5T0Db%2FrLVpM2BLwtVyJUPhvVe1ZwE9YCVPmJcrmQTLxv%2Fbxuf9t%2F6qHFUcc3FTCuisjkjadfxlF1ap1VCN2En9wQ2mP1DSYTfQdmSSfboJyn5DuZgQsTtl8P4WueZqtOv%2BhVfEAMJvjz8AGOqUBV3yY1LuoVf9u2jxPuoCfsqIxn0b%2BWDLnour%2F33QUQdqn4mPKFpKnCM%2BS8R%2F6FWot0J8nuxc5rop%2Boqzmj0fy2Yd0bQkbM6UPAB67esY8gq3InoKu41sMUMz4nU17Bw9h0EGb5CRirBSOB4LVkhpSQCaLMjFaCdmT4urUBz%2Fwd19EAPeTBNYfPsnBOwCYBT6n7k9%2Fh%2Boqt8wTQHhe6weTq1yYwFla&X-Amz-Signature=27421934a5dd8d18ac51822ffabc62496ddc1eeded5d95f55a7bfbcaa50e52aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672XI2PT2%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBvFw5%2BiB9qdjT%2BfhrCMlpOL8MH1xY5HskGRmEKTClULAiEAjhYV2xL1tslsI1tNHC4JVC1epwe2E7xmQqN%2FITQtcuEqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDId6WnnicwT7qJ%2Fd1ircAxbNSjgNPguxdNKbhtXv%2FbQIvkZuqgeGboc8MQY7x4LDZ6z%2Bxo3laBFK05m%2FViyOR70Jk5ImANqCABCqJJScBAOhyCVdIgtUy9k08qtyJrwM7L7D%2FW18mOtK3gUdyc4HuU6j6%2FNDb%2B3ZH0Dr38L%2BWHsKulOwx5OGcTyAL8dMtfDTllGp5bBggRgqa0dwYriXQpVcvB9M8%2B92KjAYC58TxHclXLJ3pNx%2BNwW%2FOiZvkv%2Fiiz8L3Pcx9aNYVnUh8F9cDS4N1xPbFiU1C8BnCd81mV8%2F2RzlCYmNWKKf0mufJI%2FN5uBY8kDNDTZv9reDYGN7WkGxpDeLVwvMmjKkLgDm8%2Bb41TH2GdZpgrx5syniBRbasR31XPIdBF0UtgFludxPfZ2YRtDpbtJlp8dcuS8Vc0l7p7mSFnTABPulKD2HBm0MERmf63t7zPFg1vWA1Ov4prlyUstDD8l6%2BLIUlKihr5WfZ%2Bsw%2B7ZhtxERkvkcVR6qEq3rXb%2BMF5T0Db%2FrLVpM2BLwtVyJUPhvVe1ZwE9YCVPmJcrmQTLxv%2Fbxuf9t%2F6qHFUcc3FTCuisjkjadfxlF1ap1VCN2En9wQ2mP1DSYTfQdmSSfboJyn5DuZgQsTtl8P4WueZqtOv%2BhVfEAMJvjz8AGOqUBV3yY1LuoVf9u2jxPuoCfsqIxn0b%2BWDLnour%2F33QUQdqn4mPKFpKnCM%2BS8R%2F6FWot0J8nuxc5rop%2Boqzmj0fy2Yd0bQkbM6UPAB67esY8gq3InoKu41sMUMz4nU17Bw9h0EGb5CRirBSOB4LVkhpSQCaLMjFaCdmT4urUBz%2Fwd19EAPeTBNYfPsnBOwCYBT6n7k9%2Fh%2Boqt8wTQHhe6weTq1yYwFla&X-Amz-Signature=a2e72675241b60c31f8f66e29148d93c6ab652eb35d79b6625ce14c5372920c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
