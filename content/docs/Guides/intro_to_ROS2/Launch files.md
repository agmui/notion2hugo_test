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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UMEGGWF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV6czMeK0ehYL7I%2FOXxoBa83A2ZVFb6kcE2NbukBAryAiBQWZrQEfMe6qpoWCy3j2Oliodq3oYREjhNG8LfAjXbmir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMZhegdWTaOUAq6cPjKtwDF4EgOvElsjuQoB4tOq6u%2BboHUIouRprc26mrtH5WUnqRHF%2FKaQA7QApMuv0JnmjR6n4aEkD3V7NWAEiz4fu21kpkp9bU9fhNww5gKkxc9lJyF5E4Em7BWgSf5y7KLoqVwpBH148Yw%2BmOmojMCL4yAvjo4B2BLhwHKa84gLMmGSyJd8q3t%2BEeIPulDkw7m7LhM3yGm9DrFdLrCN%2BAJPmfPUROTv1W0mKah3hHZ7ys5%2BuTkg0OQwOAfndr6WdyMMNhZTb%2B4jnquGfBze2JIJdRbOGC4vhjR6rTSlIdMMOkFF6bFDDxCfmRDVzKe7YR9I4vmxLa4HSKWbUXk6apB%2BUCA8SHKVImE8ikCjwe%2FmXIFN%2FvPFYxTBcdTBJgx9sdoAQ6d%2FefcqVhC0KWzcThUIS%2BAPdNd%2B4Vd8QRknW1X3T9ezxpzuh95u5i12QWigiJR5bTBEWpvOFZVnwjHpxEKi0Qo0sph%2BEgPRasxDYHzYfyMENQPcIql2vXByud4sCxhjQ8MiPM9CmxgUr6%2Fcik6zLCAjthzKfSpWL%2BEekL%2B%2BN%2B91BU2%2BZHVRY3Br9t9d1AZkBMkrfziV1i6iw7MfRQhz4%2Bsf3oDKavAhSHiUhDD5bMBIe%2BcdccTKpMOxShMVYwyISivgY6pgH8LmqVHgwefNtKJ25905U96EzS646wLc3R20FXyzfc14vK8lW%2BzsJSLeVViCKv46O2FYYC55tFVL5YfygUU8nCS%2F%2FAzmDAxgrGsf52LRo5SccKuyL6PUfuS%2B2oyWRt52oB2KNueQ475TdySjvIPgACQIG02vz%2Fa8RY2OgSBJ08YzQ%2F0Ce%2FpHMpCFi7iAcjTuUYrwXAapyL3VO7As6ImdCTA%2FeQZUna&X-Amz-Signature=7dc67736e776e8d61b703e267136bd16e30d83aa6d632d062e045db30b63bccb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UMEGGWF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV6czMeK0ehYL7I%2FOXxoBa83A2ZVFb6kcE2NbukBAryAiBQWZrQEfMe6qpoWCy3j2Oliodq3oYREjhNG8LfAjXbmir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMZhegdWTaOUAq6cPjKtwDF4EgOvElsjuQoB4tOq6u%2BboHUIouRprc26mrtH5WUnqRHF%2FKaQA7QApMuv0JnmjR6n4aEkD3V7NWAEiz4fu21kpkp9bU9fhNww5gKkxc9lJyF5E4Em7BWgSf5y7KLoqVwpBH148Yw%2BmOmojMCL4yAvjo4B2BLhwHKa84gLMmGSyJd8q3t%2BEeIPulDkw7m7LhM3yGm9DrFdLrCN%2BAJPmfPUROTv1W0mKah3hHZ7ys5%2BuTkg0OQwOAfndr6WdyMMNhZTb%2B4jnquGfBze2JIJdRbOGC4vhjR6rTSlIdMMOkFF6bFDDxCfmRDVzKe7YR9I4vmxLa4HSKWbUXk6apB%2BUCA8SHKVImE8ikCjwe%2FmXIFN%2FvPFYxTBcdTBJgx9sdoAQ6d%2FefcqVhC0KWzcThUIS%2BAPdNd%2B4Vd8QRknW1X3T9ezxpzuh95u5i12QWigiJR5bTBEWpvOFZVnwjHpxEKi0Qo0sph%2BEgPRasxDYHzYfyMENQPcIql2vXByud4sCxhjQ8MiPM9CmxgUr6%2Fcik6zLCAjthzKfSpWL%2BEekL%2B%2BN%2B91BU2%2BZHVRY3Br9t9d1AZkBMkrfziV1i6iw7MfRQhz4%2Bsf3oDKavAhSHiUhDD5bMBIe%2BcdccTKpMOxShMVYwyISivgY6pgH8LmqVHgwefNtKJ25905U96EzS646wLc3R20FXyzfc14vK8lW%2BzsJSLeVViCKv46O2FYYC55tFVL5YfygUU8nCS%2F%2FAzmDAxgrGsf52LRo5SccKuyL6PUfuS%2B2oyWRt52oB2KNueQ475TdySjvIPgACQIG02vz%2Fa8RY2OgSBJ08YzQ%2F0Ce%2FpHMpCFi7iAcjTuUYrwXAapyL3VO7As6ImdCTA%2FeQZUna&X-Amz-Signature=aa805fd4a06913c7d200f8ddb12c3e57fb57b0c38e3a6537871d4a5191c94f7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UMEGGWF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV6czMeK0ehYL7I%2FOXxoBa83A2ZVFb6kcE2NbukBAryAiBQWZrQEfMe6qpoWCy3j2Oliodq3oYREjhNG8LfAjXbmir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMZhegdWTaOUAq6cPjKtwDF4EgOvElsjuQoB4tOq6u%2BboHUIouRprc26mrtH5WUnqRHF%2FKaQA7QApMuv0JnmjR6n4aEkD3V7NWAEiz4fu21kpkp9bU9fhNww5gKkxc9lJyF5E4Em7BWgSf5y7KLoqVwpBH148Yw%2BmOmojMCL4yAvjo4B2BLhwHKa84gLMmGSyJd8q3t%2BEeIPulDkw7m7LhM3yGm9DrFdLrCN%2BAJPmfPUROTv1W0mKah3hHZ7ys5%2BuTkg0OQwOAfndr6WdyMMNhZTb%2B4jnquGfBze2JIJdRbOGC4vhjR6rTSlIdMMOkFF6bFDDxCfmRDVzKe7YR9I4vmxLa4HSKWbUXk6apB%2BUCA8SHKVImE8ikCjwe%2FmXIFN%2FvPFYxTBcdTBJgx9sdoAQ6d%2FefcqVhC0KWzcThUIS%2BAPdNd%2B4Vd8QRknW1X3T9ezxpzuh95u5i12QWigiJR5bTBEWpvOFZVnwjHpxEKi0Qo0sph%2BEgPRasxDYHzYfyMENQPcIql2vXByud4sCxhjQ8MiPM9CmxgUr6%2Fcik6zLCAjthzKfSpWL%2BEekL%2B%2BN%2B91BU2%2BZHVRY3Br9t9d1AZkBMkrfziV1i6iw7MfRQhz4%2Bsf3oDKavAhSHiUhDD5bMBIe%2BcdccTKpMOxShMVYwyISivgY6pgH8LmqVHgwefNtKJ25905U96EzS646wLc3R20FXyzfc14vK8lW%2BzsJSLeVViCKv46O2FYYC55tFVL5YfygUU8nCS%2F%2FAzmDAxgrGsf52LRo5SccKuyL6PUfuS%2B2oyWRt52oB2KNueQ475TdySjvIPgACQIG02vz%2Fa8RY2OgSBJ08YzQ%2F0Ce%2FpHMpCFi7iAcjTuUYrwXAapyL3VO7As6ImdCTA%2FeQZUna&X-Amz-Signature=9eea3c68a67186271e6f4a341181d79dc389f89a111605092d8a753e956d8003&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
