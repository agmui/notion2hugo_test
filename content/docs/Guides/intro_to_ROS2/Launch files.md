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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GMBHGMH%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDoCYCE2odqtVnIshhOPJScV4EeC3p4KpiHUv5q5%2BHlqAiEAz2KmHEgh%2BnWkyUPR0do%2BHdnuxypepq%2FunkbXoYWRl7oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDF%2BUOpoDbLwUdmiOyCrcA15Uy20dZirck9uuLnF2vTL6MUjdPMEakkcx1u4xhLiBma0w8E9JnKrRStkqyh%2B8KQWT5dETSr2Wj9f11nwVTyZWAqoEpC%2BLVYZnJE82n3AzWr%2FnNXxlvZkuL5UyhRy3pMBc9IB2shiXQERLf3qVNpV0JwFNhWIJKS4R94u6cdbdEZOzURtKn8SmV8c6U7Z22LK7Gl8wTzE%2FApxC7BSa1lQCAuNUnlCAQiyBIm8UqNWQ3AmesqbRVVD%2FRfHRzR0T%2Fl%2BxMS34HI5oIUJwGtlQS8KCPaqdV%2BRekFkn%2BEk4fE0EIQAGVHMKEFEKng8eSsIByZrNNPM4maCEQ%2BEJcuz4xtsjjuiuKaypeSYYD%2FXUcLnBCMaqwWFZBB25H5nuAPYrLI66JpfvYPzvpUYnereC9hQwQ1PSuDaNExsYvst6iA8wxAbRyzJJJd5PLH2JoolV%2BPnp87higBJMPU1IhFVQmBqKiFYZbKr7OaJkNXMhx69PPo85mJfDwDZKwomk5Fza8SZKdZz%2B1jzMXgkwB6jzjN3%2Bt9EqE3RSLras0Oo1Vo32b7QIHT2rrazI5Q2MnsnSGf7SZmmnr0LwBNt%2Ff5tNA58nBhgapx5MpoUXopXQDwDF9wZ1qFZi07uhCtbAMOflnMMGOqUBKsvmB%2FjDNAv%2BNkuS295096%2FLTcuot8TJrilpb9tkZRg9wxJrmrJPGh2Ab%2BRA33Zs9AIo1k2MV8LsL2iEaUM74YoSKne52PNIPAgwDX0if71M7JtqacJm3ewgC47bdpVWJozjrSd8et24cYqQRdoy5ekxKGqcq91SMDNg7U2%2F60DwfH1%2BPLDtJAiMlX5fX47Sj80qdF3wH6PC9BRBcd45gvYQeUZE&X-Amz-Signature=fb843bc74fd0c307643e395ed23bd95bf253f25535fa789b81979eb7dc76d95a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GMBHGMH%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDoCYCE2odqtVnIshhOPJScV4EeC3p4KpiHUv5q5%2BHlqAiEAz2KmHEgh%2BnWkyUPR0do%2BHdnuxypepq%2FunkbXoYWRl7oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDF%2BUOpoDbLwUdmiOyCrcA15Uy20dZirck9uuLnF2vTL6MUjdPMEakkcx1u4xhLiBma0w8E9JnKrRStkqyh%2B8KQWT5dETSr2Wj9f11nwVTyZWAqoEpC%2BLVYZnJE82n3AzWr%2FnNXxlvZkuL5UyhRy3pMBc9IB2shiXQERLf3qVNpV0JwFNhWIJKS4R94u6cdbdEZOzURtKn8SmV8c6U7Z22LK7Gl8wTzE%2FApxC7BSa1lQCAuNUnlCAQiyBIm8UqNWQ3AmesqbRVVD%2FRfHRzR0T%2Fl%2BxMS34HI5oIUJwGtlQS8KCPaqdV%2BRekFkn%2BEk4fE0EIQAGVHMKEFEKng8eSsIByZrNNPM4maCEQ%2BEJcuz4xtsjjuiuKaypeSYYD%2FXUcLnBCMaqwWFZBB25H5nuAPYrLI66JpfvYPzvpUYnereC9hQwQ1PSuDaNExsYvst6iA8wxAbRyzJJJd5PLH2JoolV%2BPnp87higBJMPU1IhFVQmBqKiFYZbKr7OaJkNXMhx69PPo85mJfDwDZKwomk5Fza8SZKdZz%2B1jzMXgkwB6jzjN3%2Bt9EqE3RSLras0Oo1Vo32b7QIHT2rrazI5Q2MnsnSGf7SZmmnr0LwBNt%2Ff5tNA58nBhgapx5MpoUXopXQDwDF9wZ1qFZi07uhCtbAMOflnMMGOqUBKsvmB%2FjDNAv%2BNkuS295096%2FLTcuot8TJrilpb9tkZRg9wxJrmrJPGh2Ab%2BRA33Zs9AIo1k2MV8LsL2iEaUM74YoSKne52PNIPAgwDX0if71M7JtqacJm3ewgC47bdpVWJozjrSd8et24cYqQRdoy5ekxKGqcq91SMDNg7U2%2F60DwfH1%2BPLDtJAiMlX5fX47Sj80qdF3wH6PC9BRBcd45gvYQeUZE&X-Amz-Signature=f8f3e50510bf357e74a30c5b537aae8ff64055042058f5e672be99f7ecda03d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GMBHGMH%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDoCYCE2odqtVnIshhOPJScV4EeC3p4KpiHUv5q5%2BHlqAiEAz2KmHEgh%2BnWkyUPR0do%2BHdnuxypepq%2FunkbXoYWRl7oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDF%2BUOpoDbLwUdmiOyCrcA15Uy20dZirck9uuLnF2vTL6MUjdPMEakkcx1u4xhLiBma0w8E9JnKrRStkqyh%2B8KQWT5dETSr2Wj9f11nwVTyZWAqoEpC%2BLVYZnJE82n3AzWr%2FnNXxlvZkuL5UyhRy3pMBc9IB2shiXQERLf3qVNpV0JwFNhWIJKS4R94u6cdbdEZOzURtKn8SmV8c6U7Z22LK7Gl8wTzE%2FApxC7BSa1lQCAuNUnlCAQiyBIm8UqNWQ3AmesqbRVVD%2FRfHRzR0T%2Fl%2BxMS34HI5oIUJwGtlQS8KCPaqdV%2BRekFkn%2BEk4fE0EIQAGVHMKEFEKng8eSsIByZrNNPM4maCEQ%2BEJcuz4xtsjjuiuKaypeSYYD%2FXUcLnBCMaqwWFZBB25H5nuAPYrLI66JpfvYPzvpUYnereC9hQwQ1PSuDaNExsYvst6iA8wxAbRyzJJJd5PLH2JoolV%2BPnp87higBJMPU1IhFVQmBqKiFYZbKr7OaJkNXMhx69PPo85mJfDwDZKwomk5Fza8SZKdZz%2B1jzMXgkwB6jzjN3%2Bt9EqE3RSLras0Oo1Vo32b7QIHT2rrazI5Q2MnsnSGf7SZmmnr0LwBNt%2Ff5tNA58nBhgapx5MpoUXopXQDwDF9wZ1qFZi07uhCtbAMOflnMMGOqUBKsvmB%2FjDNAv%2BNkuS295096%2FLTcuot8TJrilpb9tkZRg9wxJrmrJPGh2Ab%2BRA33Zs9AIo1k2MV8LsL2iEaUM74YoSKne52PNIPAgwDX0if71M7JtqacJm3ewgC47bdpVWJozjrSd8et24cYqQRdoy5ekxKGqcq91SMDNg7U2%2F60DwfH1%2BPLDtJAiMlX5fX47Sj80qdF3wH6PC9BRBcd45gvYQeUZE&X-Amz-Signature=2ada600a494d76ff65c89a7d4df032b9f3b0fb3e36fb0c4f0eaff7adb929ced2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
