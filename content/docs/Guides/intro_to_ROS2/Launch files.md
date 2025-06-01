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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVWTEM3A%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDh3JiROWpMvXEsNSUR%2BqoD6DYDkRxaFEEf8AOtSfIL%2FwIgBUzkd%2B9BB8HAyK4sYWxHMffLc1nOJSZhaDnLrx%2FAobUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJjTVY4yvsO3wyAvyrcA8eA%2BAkiOFeR6k701m997N0burfJNrT0riS2asAHkx8f%2FnIvvRJQNYVnMibsO%2BlxVKQHs6B5nmTejZnMQBhnjvf%2BELBGRTjkRLDnrmGvrFOXZDVjp1zlhUysHDTMYu5uEMJO7%2ByXhQlgvOqGRRLXwy8h7E5Ef9LvOLEkJOKQ5cX6DT8g%2B0fz9jZO5SNQ0KfxUt9qMMtDMjFy3pnyt52BsGncOL5RSJgNAl9lVYoX4yMppKqKD6Z1FdLTygIsP5wgtI%2BWxZ2KVxL6jS%2F28kAuxP2Ee24I6iT6ANeHvhmaR6TzZmxwYTTUEm61AkSe6rRA6e6ET6dl9d6sqqRJVC5jDF8kQfPKmZVMsGKnuY%2BY%2BoZUaGWdZfQ4hsEddXbZZjYGs8ejva0G5y0TYypPVaLA5SqSJ8GM7QHtOR4svBLIc4qxdsXaxJp5XYJsUecsobX5XsfCnOPCqPcyNgFop4pQJ9KZhHsrsFzmdrTw40V3Vu7nMKYi5Gbl8z8JGdsvRhEePtQWvRjNHBwcsNGCugd%2BU3eibFE9FCgIeEGVLvmTE9djCQsPiiCr2vwBhT%2Fua4mDWXzfVrRdHXk27gfpBiUEQLO2rMyIgzPhSnayx114ZasrdKDL99qjwzJ1%2FtfIMPKv78EGOqUBXTRuMWJ1mqt2zm%2BLU92d2n8FsmMBhKeVPKdXg5ITIbXGQBE13DVeoFVuahOjFpxNe0I514hBu2z7DzOU25v5F3CBt4F%2BiL9Vk2nEUHbAhhyY6cFoS%2BT4XJNI%2FYJnxWvpqtI%2BrCbeGVruqz2V27sovZ9h3vxPbEuP2oe2OF%2BZgE7jD9224nm7DYZyW%2FOFr9DMuPgEwoHOi%2F2a%2Bi0lG65%2FBfV2Zg9Y&X-Amz-Signature=308cfadc5ed55a25f9452dc873fde36a5b07248bf935c2322ee73b942b3e8a29&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVWTEM3A%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDh3JiROWpMvXEsNSUR%2BqoD6DYDkRxaFEEf8AOtSfIL%2FwIgBUzkd%2B9BB8HAyK4sYWxHMffLc1nOJSZhaDnLrx%2FAobUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJjTVY4yvsO3wyAvyrcA8eA%2BAkiOFeR6k701m997N0burfJNrT0riS2asAHkx8f%2FnIvvRJQNYVnMibsO%2BlxVKQHs6B5nmTejZnMQBhnjvf%2BELBGRTjkRLDnrmGvrFOXZDVjp1zlhUysHDTMYu5uEMJO7%2ByXhQlgvOqGRRLXwy8h7E5Ef9LvOLEkJOKQ5cX6DT8g%2B0fz9jZO5SNQ0KfxUt9qMMtDMjFy3pnyt52BsGncOL5RSJgNAl9lVYoX4yMppKqKD6Z1FdLTygIsP5wgtI%2BWxZ2KVxL6jS%2F28kAuxP2Ee24I6iT6ANeHvhmaR6TzZmxwYTTUEm61AkSe6rRA6e6ET6dl9d6sqqRJVC5jDF8kQfPKmZVMsGKnuY%2BY%2BoZUaGWdZfQ4hsEddXbZZjYGs8ejva0G5y0TYypPVaLA5SqSJ8GM7QHtOR4svBLIc4qxdsXaxJp5XYJsUecsobX5XsfCnOPCqPcyNgFop4pQJ9KZhHsrsFzmdrTw40V3Vu7nMKYi5Gbl8z8JGdsvRhEePtQWvRjNHBwcsNGCugd%2BU3eibFE9FCgIeEGVLvmTE9djCQsPiiCr2vwBhT%2Fua4mDWXzfVrRdHXk27gfpBiUEQLO2rMyIgzPhSnayx114ZasrdKDL99qjwzJ1%2FtfIMPKv78EGOqUBXTRuMWJ1mqt2zm%2BLU92d2n8FsmMBhKeVPKdXg5ITIbXGQBE13DVeoFVuahOjFpxNe0I514hBu2z7DzOU25v5F3CBt4F%2BiL9Vk2nEUHbAhhyY6cFoS%2BT4XJNI%2FYJnxWvpqtI%2BrCbeGVruqz2V27sovZ9h3vxPbEuP2oe2OF%2BZgE7jD9224nm7DYZyW%2FOFr9DMuPgEwoHOi%2F2a%2Bi0lG65%2FBfV2Zg9Y&X-Amz-Signature=c8c371dfd18a766051837676aa134383912f7ab3aaf6dbce0fe9ff66545faedf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVWTEM3A%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDh3JiROWpMvXEsNSUR%2BqoD6DYDkRxaFEEf8AOtSfIL%2FwIgBUzkd%2B9BB8HAyK4sYWxHMffLc1nOJSZhaDnLrx%2FAobUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJjTVY4yvsO3wyAvyrcA8eA%2BAkiOFeR6k701m997N0burfJNrT0riS2asAHkx8f%2FnIvvRJQNYVnMibsO%2BlxVKQHs6B5nmTejZnMQBhnjvf%2BELBGRTjkRLDnrmGvrFOXZDVjp1zlhUysHDTMYu5uEMJO7%2ByXhQlgvOqGRRLXwy8h7E5Ef9LvOLEkJOKQ5cX6DT8g%2B0fz9jZO5SNQ0KfxUt9qMMtDMjFy3pnyt52BsGncOL5RSJgNAl9lVYoX4yMppKqKD6Z1FdLTygIsP5wgtI%2BWxZ2KVxL6jS%2F28kAuxP2Ee24I6iT6ANeHvhmaR6TzZmxwYTTUEm61AkSe6rRA6e6ET6dl9d6sqqRJVC5jDF8kQfPKmZVMsGKnuY%2BY%2BoZUaGWdZfQ4hsEddXbZZjYGs8ejva0G5y0TYypPVaLA5SqSJ8GM7QHtOR4svBLIc4qxdsXaxJp5XYJsUecsobX5XsfCnOPCqPcyNgFop4pQJ9KZhHsrsFzmdrTw40V3Vu7nMKYi5Gbl8z8JGdsvRhEePtQWvRjNHBwcsNGCugd%2BU3eibFE9FCgIeEGVLvmTE9djCQsPiiCr2vwBhT%2Fua4mDWXzfVrRdHXk27gfpBiUEQLO2rMyIgzPhSnayx114ZasrdKDL99qjwzJ1%2FtfIMPKv78EGOqUBXTRuMWJ1mqt2zm%2BLU92d2n8FsmMBhKeVPKdXg5ITIbXGQBE13DVeoFVuahOjFpxNe0I514hBu2z7DzOU25v5F3CBt4F%2BiL9Vk2nEUHbAhhyY6cFoS%2BT4XJNI%2FYJnxWvpqtI%2BrCbeGVruqz2V27sovZ9h3vxPbEuP2oe2OF%2BZgE7jD9224nm7DYZyW%2FOFr9DMuPgEwoHOi%2F2a%2Bi0lG65%2FBfV2Zg9Y&X-Amz-Signature=f66721b663a9308289fc0b1a43d2d2d70d9b2a9c17a3277cd1de14afed3cf00a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
