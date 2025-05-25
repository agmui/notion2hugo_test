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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G74AC7R%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDZSJ5duiSKlOcCI%2FKzhdlSQSxIIz%2F6nHND8tUZqKVEKQIgdvNMU7UdBOVV8cAmYoJldgercw8Db5K6OSwrKLhbyJIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDK0xnsBHJ%2FPZAUZFCircA0epfcRxltUIMV4%2BnQEWO4BgI449lwTvyUZnqLpuyciE80%2BkBbWKJMNLeRak3sNstla3qdVSt%2BT0T%2BAZGk1wmKr2bgCoG0kyNimaZpSBHyg6PsLyejijoAGQbcOYf8DUSqRIoLXtlrCtVWFtrw%2Blh0avrtScNY9kQ508FKVEXz5ETvEtSeehd2pWVkqnKrENF75XmVcQIGcsepglZQy6ejR%2F98VrtHBrRKxM25c6%2FDFVB9PQO0pa8ahT7tVR2cHv5ofbaEGnDySFVvLw%2F263%2BB5C%2BedR3Sl84hfK4AQ8dSSfSMweUFly3IIQE0OW7b4RHRYK3S0N9tUTCRIdzSIDF3X0eHMG1rfu8zkEksCx8tTDvd%2F%2FAdweUDAYby0Hl32M5D7tygXPAhhUyjsXpmUqMWQh0kaDBkNL5l3aD251hjj0BRAQsgRfwblguO7u6pJnFUJ4kes2xwPgCu4GTreHOYp9oNUXlQaWamiUPLpAjff%2BINtoXMY6eW4dTu9FvQL7gQ3wsVyTS7GsIpMkQDQI5vpYep0LSMxm7R6sfQBmOaThfBqtF39g9JaCLAt%2FLrkks2gZD%2FjIFwB6T%2BzuVOcoZBf7CVrznhJ6TjudyDOX%2F0PyTpb7B96zKYKU9j9VML%2FsycEGOqUBs%2FrdrYzBLzyGLg0T94BnwERpk%2F9erkgK5ssu2GZxXWiEb5c9psaRo%2F%2BHdR4mntJnfoEXLau72%2BeRfqTEcp6BgII4dz%2BvRipeo9%2F4JmRVATfnPrvNKS4wYU27jC54B%2FSEaCg2QlLFpWx5Mt8Y4ZAizeDBCorSuQVj0ZuLgdixo0YCDcwSnH5fSMnloXlgJrafJ9hmKq7mC4V1E3WajC7kz%2FH9Qx5f&X-Amz-Signature=f02a2d9869db807a5df767980f7f203e0676c48d6ec709af04973ea2dcdff429&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G74AC7R%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDZSJ5duiSKlOcCI%2FKzhdlSQSxIIz%2F6nHND8tUZqKVEKQIgdvNMU7UdBOVV8cAmYoJldgercw8Db5K6OSwrKLhbyJIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDK0xnsBHJ%2FPZAUZFCircA0epfcRxltUIMV4%2BnQEWO4BgI449lwTvyUZnqLpuyciE80%2BkBbWKJMNLeRak3sNstla3qdVSt%2BT0T%2BAZGk1wmKr2bgCoG0kyNimaZpSBHyg6PsLyejijoAGQbcOYf8DUSqRIoLXtlrCtVWFtrw%2Blh0avrtScNY9kQ508FKVEXz5ETvEtSeehd2pWVkqnKrENF75XmVcQIGcsepglZQy6ejR%2F98VrtHBrRKxM25c6%2FDFVB9PQO0pa8ahT7tVR2cHv5ofbaEGnDySFVvLw%2F263%2BB5C%2BedR3Sl84hfK4AQ8dSSfSMweUFly3IIQE0OW7b4RHRYK3S0N9tUTCRIdzSIDF3X0eHMG1rfu8zkEksCx8tTDvd%2F%2FAdweUDAYby0Hl32M5D7tygXPAhhUyjsXpmUqMWQh0kaDBkNL5l3aD251hjj0BRAQsgRfwblguO7u6pJnFUJ4kes2xwPgCu4GTreHOYp9oNUXlQaWamiUPLpAjff%2BINtoXMY6eW4dTu9FvQL7gQ3wsVyTS7GsIpMkQDQI5vpYep0LSMxm7R6sfQBmOaThfBqtF39g9JaCLAt%2FLrkks2gZD%2FjIFwB6T%2BzuVOcoZBf7CVrznhJ6TjudyDOX%2F0PyTpb7B96zKYKU9j9VML%2FsycEGOqUBs%2FrdrYzBLzyGLg0T94BnwERpk%2F9erkgK5ssu2GZxXWiEb5c9psaRo%2F%2BHdR4mntJnfoEXLau72%2BeRfqTEcp6BgII4dz%2BvRipeo9%2F4JmRVATfnPrvNKS4wYU27jC54B%2FSEaCg2QlLFpWx5Mt8Y4ZAizeDBCorSuQVj0ZuLgdixo0YCDcwSnH5fSMnloXlgJrafJ9hmKq7mC4V1E3WajC7kz%2FH9Qx5f&X-Amz-Signature=663411d158097217ad89389748f64e5a4903d743540fed960dcff68e153a039f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G74AC7R%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDZSJ5duiSKlOcCI%2FKzhdlSQSxIIz%2F6nHND8tUZqKVEKQIgdvNMU7UdBOVV8cAmYoJldgercw8Db5K6OSwrKLhbyJIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDK0xnsBHJ%2FPZAUZFCircA0epfcRxltUIMV4%2BnQEWO4BgI449lwTvyUZnqLpuyciE80%2BkBbWKJMNLeRak3sNstla3qdVSt%2BT0T%2BAZGk1wmKr2bgCoG0kyNimaZpSBHyg6PsLyejijoAGQbcOYf8DUSqRIoLXtlrCtVWFtrw%2Blh0avrtScNY9kQ508FKVEXz5ETvEtSeehd2pWVkqnKrENF75XmVcQIGcsepglZQy6ejR%2F98VrtHBrRKxM25c6%2FDFVB9PQO0pa8ahT7tVR2cHv5ofbaEGnDySFVvLw%2F263%2BB5C%2BedR3Sl84hfK4AQ8dSSfSMweUFly3IIQE0OW7b4RHRYK3S0N9tUTCRIdzSIDF3X0eHMG1rfu8zkEksCx8tTDvd%2F%2FAdweUDAYby0Hl32M5D7tygXPAhhUyjsXpmUqMWQh0kaDBkNL5l3aD251hjj0BRAQsgRfwblguO7u6pJnFUJ4kes2xwPgCu4GTreHOYp9oNUXlQaWamiUPLpAjff%2BINtoXMY6eW4dTu9FvQL7gQ3wsVyTS7GsIpMkQDQI5vpYep0LSMxm7R6sfQBmOaThfBqtF39g9JaCLAt%2FLrkks2gZD%2FjIFwB6T%2BzuVOcoZBf7CVrznhJ6TjudyDOX%2F0PyTpb7B96zKYKU9j9VML%2FsycEGOqUBs%2FrdrYzBLzyGLg0T94BnwERpk%2F9erkgK5ssu2GZxXWiEb5c9psaRo%2F%2BHdR4mntJnfoEXLau72%2BeRfqTEcp6BgII4dz%2BvRipeo9%2F4JmRVATfnPrvNKS4wYU27jC54B%2FSEaCg2QlLFpWx5Mt8Y4ZAizeDBCorSuQVj0ZuLgdixo0YCDcwSnH5fSMnloXlgJrafJ9hmKq7mC4V1E3WajC7kz%2FH9Qx5f&X-Amz-Signature=88e095e3911d714e2e0c0c192258cb2b56dd23c5887ecf94741f9f72b7641456&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
