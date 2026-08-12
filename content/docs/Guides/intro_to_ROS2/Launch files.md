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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTC3M2H3%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfGjoV%2FVP%2FzkE%2Ft56NRdvVJq4SyDDVw%2F7NjDLiZvfZLwIhAKZb5vDkWqGVpihDHONvTLXg%2FhEaQFIGRUfFIAvENWMbKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxik%2B9vQQfcRMyIhpoq3APaHr7zl7hGqHzGHj1RNwJzKz7R9CqaLy2DoBy8XR73d3PJsuimDa1AqBjFh6RdPs9kLGd7oHNwK5bziLgd6Nc7edQclHivgRE4z%2Bl%2FxlC0B8hCZ4bpXzHF9gRt5dxCqcza4NJ%2FaDitSBuuShmWfEXR5euSf1eMHfvFH4iUg4CkAJMLsc30F1uYXcFzg0%2BZpVKZID00JRhBWb9a046gDV1X94gGDas8KMxvXR4xk39B3JttZtGz3YhScEI0bYKKG9mO8pU2bSQYq6KLn7e7n3dMYO%2F0LZhEiljIVel6%2BD6tZ0plJBL4d5QWJuSWXwFYtNAlLADtd4UQd9%2F7E6chHx226EtQIKbgitBmqZM4yjtnGku3R3cLV5ebb4D6Gxz0IHT7BgGj%2FsnvCja3QqgdrJAXhFsb%2FlFUZ9Ncfv%2FV%2FpoKTddiedmRxuFV%2F%2BKPgtMp7hQ%2FMIq4Hel8cfcv1kfry3MvV3IN5BCQbUv59VMvtRcYiK0lUFcU60hMIuWReMyTeoX2HPoH6mvrfStsktkZ1E6Xfi9NAFVdjYRX3b%2Bj3CHE385LGjYoV9p%2Fy%2F%2B1TwRPDKnv2aUcytythZ1xTkAPQ1b4CHynWh%2FNfJ4Wwh2vopGFSngTW9Wp%2BOpFl%2FlSqzDf5u7TBjqkAREHMQR5aS4N2KQ615hajfZTtXtVtJo6fgS1LaOhAoqx0iTPEZkUR3f9QzlE5LhrOQ62r0WZz8WrWgsLVK9wm9FJfpC3Y%2BPX0Sv25RDBVuZVWudEufWtp26VlGYuukgSe8zuW3rUHtYE5o8MUdmFHXFCse05xNL1XMz2GsPMFtbKRwAksMJYacZuC0NUf69rRxj4BXg3EeiVPz31iZB7tNSY3RSD&X-Amz-Signature=50798e14cf322803496661a8d8192f5344f75a98a5b24ab8e69650aad9024131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTC3M2H3%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfGjoV%2FVP%2FzkE%2Ft56NRdvVJq4SyDDVw%2F7NjDLiZvfZLwIhAKZb5vDkWqGVpihDHONvTLXg%2FhEaQFIGRUfFIAvENWMbKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxik%2B9vQQfcRMyIhpoq3APaHr7zl7hGqHzGHj1RNwJzKz7R9CqaLy2DoBy8XR73d3PJsuimDa1AqBjFh6RdPs9kLGd7oHNwK5bziLgd6Nc7edQclHivgRE4z%2Bl%2FxlC0B8hCZ4bpXzHF9gRt5dxCqcza4NJ%2FaDitSBuuShmWfEXR5euSf1eMHfvFH4iUg4CkAJMLsc30F1uYXcFzg0%2BZpVKZID00JRhBWb9a046gDV1X94gGDas8KMxvXR4xk39B3JttZtGz3YhScEI0bYKKG9mO8pU2bSQYq6KLn7e7n3dMYO%2F0LZhEiljIVel6%2BD6tZ0plJBL4d5QWJuSWXwFYtNAlLADtd4UQd9%2F7E6chHx226EtQIKbgitBmqZM4yjtnGku3R3cLV5ebb4D6Gxz0IHT7BgGj%2FsnvCja3QqgdrJAXhFsb%2FlFUZ9Ncfv%2FV%2FpoKTddiedmRxuFV%2F%2BKPgtMp7hQ%2FMIq4Hel8cfcv1kfry3MvV3IN5BCQbUv59VMvtRcYiK0lUFcU60hMIuWReMyTeoX2HPoH6mvrfStsktkZ1E6Xfi9NAFVdjYRX3b%2Bj3CHE385LGjYoV9p%2Fy%2F%2B1TwRPDKnv2aUcytythZ1xTkAPQ1b4CHynWh%2FNfJ4Wwh2vopGFSngTW9Wp%2BOpFl%2FlSqzDf5u7TBjqkAREHMQR5aS4N2KQ615hajfZTtXtVtJo6fgS1LaOhAoqx0iTPEZkUR3f9QzlE5LhrOQ62r0WZz8WrWgsLVK9wm9FJfpC3Y%2BPX0Sv25RDBVuZVWudEufWtp26VlGYuukgSe8zuW3rUHtYE5o8MUdmFHXFCse05xNL1XMz2GsPMFtbKRwAksMJYacZuC0NUf69rRxj4BXg3EeiVPz31iZB7tNSY3RSD&X-Amz-Signature=bb8db8879968d44516fb7ef7a6478f10f86af7db811a79fbefc95e7e9312a648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTC3M2H3%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfGjoV%2FVP%2FzkE%2Ft56NRdvVJq4SyDDVw%2F7NjDLiZvfZLwIhAKZb5vDkWqGVpihDHONvTLXg%2FhEaQFIGRUfFIAvENWMbKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxik%2B9vQQfcRMyIhpoq3APaHr7zl7hGqHzGHj1RNwJzKz7R9CqaLy2DoBy8XR73d3PJsuimDa1AqBjFh6RdPs9kLGd7oHNwK5bziLgd6Nc7edQclHivgRE4z%2Bl%2FxlC0B8hCZ4bpXzHF9gRt5dxCqcza4NJ%2FaDitSBuuShmWfEXR5euSf1eMHfvFH4iUg4CkAJMLsc30F1uYXcFzg0%2BZpVKZID00JRhBWb9a046gDV1X94gGDas8KMxvXR4xk39B3JttZtGz3YhScEI0bYKKG9mO8pU2bSQYq6KLn7e7n3dMYO%2F0LZhEiljIVel6%2BD6tZ0plJBL4d5QWJuSWXwFYtNAlLADtd4UQd9%2F7E6chHx226EtQIKbgitBmqZM4yjtnGku3R3cLV5ebb4D6Gxz0IHT7BgGj%2FsnvCja3QqgdrJAXhFsb%2FlFUZ9Ncfv%2FV%2FpoKTddiedmRxuFV%2F%2BKPgtMp7hQ%2FMIq4Hel8cfcv1kfry3MvV3IN5BCQbUv59VMvtRcYiK0lUFcU60hMIuWReMyTeoX2HPoH6mvrfStsktkZ1E6Xfi9NAFVdjYRX3b%2Bj3CHE385LGjYoV9p%2Fy%2F%2B1TwRPDKnv2aUcytythZ1xTkAPQ1b4CHynWh%2FNfJ4Wwh2vopGFSngTW9Wp%2BOpFl%2FlSqzDf5u7TBjqkAREHMQR5aS4N2KQ615hajfZTtXtVtJo6fgS1LaOhAoqx0iTPEZkUR3f9QzlE5LhrOQ62r0WZz8WrWgsLVK9wm9FJfpC3Y%2BPX0Sv25RDBVuZVWudEufWtp26VlGYuukgSe8zuW3rUHtYE5o8MUdmFHXFCse05xNL1XMz2GsPMFtbKRwAksMJYacZuC0NUf69rRxj4BXg3EeiVPz31iZB7tNSY3RSD&X-Amz-Signature=fed882ae78927184da8fa8f9ee065d6658e8bb22f6703b398eec07f0ccdc3419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
