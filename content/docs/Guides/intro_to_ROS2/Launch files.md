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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULLLYOD%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd8WiaKmZ7I%2F2CPqW%2FE4x2lnpqKDvpEFD%2BZ6S%2FHLaTcQIgZkYAlTHpXYgVRJIh%2FstY75%2FUvvwunCF80QLOj8W9SRsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKEojCWMce%2FDcMq23CrcA%2FMlAJYbM1wWlQzEA4lgEJtKgnOaqDr0r6ORMemVzkLmBplLDCcEfnEZ6CXmH62sOtPDYH6z99MNCN%2Bb%2FNugTxyZGK3JjVjeHF6gl5YXtTLizChaFHNXpPYJU9QMStTE2B%2BU1O1P35ptexkKhGzN3KPmMrNPLI5zVFepd9aBQaBd8P%2FszR5SDsO2eWqeJ56s2ZkVhqPOEDM8oUddx21S%2BXYY84EzV1quEXfq3N23WxeJuhZOOg6VyoG8xcTd284ubThZN%2Fo76N0UvAx2nrkt0HNXRG0jozT2CBKIYyL%2BJS%2FnUUgbf1Fwoj5mtXrLOxQfHk%2F8LtBSievdulBNFZuTZ%2FnRdtxE8F9Hm77HF1x%2FPDzIreoV2lRoeflfSbNtCF%2FZAkDgeed%2FiFbQvhgKSNdpWEjO40RuviCdStqG3dktjS3immcl8HnCsggDEvFIAu3XXXhzgPeKuUEJkI6Y0jjvpTcJhAb74A6eWmT8E6YRsxTH0flbvrRhN1OdPYY31CKqzzfb3QqddFh58GWQo2mERopKmTTgSQajhHhOKKN%2BvcsRp3ve3SaanFjprMKbgkxcNFyvYfbNBIB6mcsQN2q%2FDId0G%2FLVrltPuP8WLSFwp1eB2J1NHzeORlsR2UtIMIbG3MEGOqUB0417%2Bw7k%2FtCpGm4S58ZIiwBVxKJWdEARJ25XhYTIiwuwWpKZnzAGXi7hCJH%2FRQil2ztCrBC9pDq%2FuQeTUrfe1PWSyIQMZXNIc0ugdvfmKNWtKIMsXGTL9GUoGgH0OhSHhZcwd1GOTIqycgXRkiQDhZak47EKmmsIXexinfySbFfThRpnbNGp8ChO3SX8mOSzTCnNr2lrwu6AOqIWsRWMKs0IA3P7&X-Amz-Signature=a65abc8ffd05457c8c702aed4ac0b3c6916599f8b9cc8a5bb0c0cea2471ea158&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULLLYOD%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd8WiaKmZ7I%2F2CPqW%2FE4x2lnpqKDvpEFD%2BZ6S%2FHLaTcQIgZkYAlTHpXYgVRJIh%2FstY75%2FUvvwunCF80QLOj8W9SRsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKEojCWMce%2FDcMq23CrcA%2FMlAJYbM1wWlQzEA4lgEJtKgnOaqDr0r6ORMemVzkLmBplLDCcEfnEZ6CXmH62sOtPDYH6z99MNCN%2Bb%2FNugTxyZGK3JjVjeHF6gl5YXtTLizChaFHNXpPYJU9QMStTE2B%2BU1O1P35ptexkKhGzN3KPmMrNPLI5zVFepd9aBQaBd8P%2FszR5SDsO2eWqeJ56s2ZkVhqPOEDM8oUddx21S%2BXYY84EzV1quEXfq3N23WxeJuhZOOg6VyoG8xcTd284ubThZN%2Fo76N0UvAx2nrkt0HNXRG0jozT2CBKIYyL%2BJS%2FnUUgbf1Fwoj5mtXrLOxQfHk%2F8LtBSievdulBNFZuTZ%2FnRdtxE8F9Hm77HF1x%2FPDzIreoV2lRoeflfSbNtCF%2FZAkDgeed%2FiFbQvhgKSNdpWEjO40RuviCdStqG3dktjS3immcl8HnCsggDEvFIAu3XXXhzgPeKuUEJkI6Y0jjvpTcJhAb74A6eWmT8E6YRsxTH0flbvrRhN1OdPYY31CKqzzfb3QqddFh58GWQo2mERopKmTTgSQajhHhOKKN%2BvcsRp3ve3SaanFjprMKbgkxcNFyvYfbNBIB6mcsQN2q%2FDId0G%2FLVrltPuP8WLSFwp1eB2J1NHzeORlsR2UtIMIbG3MEGOqUB0417%2Bw7k%2FtCpGm4S58ZIiwBVxKJWdEARJ25XhYTIiwuwWpKZnzAGXi7hCJH%2FRQil2ztCrBC9pDq%2FuQeTUrfe1PWSyIQMZXNIc0ugdvfmKNWtKIMsXGTL9GUoGgH0OhSHhZcwd1GOTIqycgXRkiQDhZak47EKmmsIXexinfySbFfThRpnbNGp8ChO3SX8mOSzTCnNr2lrwu6AOqIWsRWMKs0IA3P7&X-Amz-Signature=0e8f4bc27ffb482d3cbd74dc094f7356e395cc2fdfed13d43e3efc319047d673&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULLLYOD%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd8WiaKmZ7I%2F2CPqW%2FE4x2lnpqKDvpEFD%2BZ6S%2FHLaTcQIgZkYAlTHpXYgVRJIh%2FstY75%2FUvvwunCF80QLOj8W9SRsq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKEojCWMce%2FDcMq23CrcA%2FMlAJYbM1wWlQzEA4lgEJtKgnOaqDr0r6ORMemVzkLmBplLDCcEfnEZ6CXmH62sOtPDYH6z99MNCN%2Bb%2FNugTxyZGK3JjVjeHF6gl5YXtTLizChaFHNXpPYJU9QMStTE2B%2BU1O1P35ptexkKhGzN3KPmMrNPLI5zVFepd9aBQaBd8P%2FszR5SDsO2eWqeJ56s2ZkVhqPOEDM8oUddx21S%2BXYY84EzV1quEXfq3N23WxeJuhZOOg6VyoG8xcTd284ubThZN%2Fo76N0UvAx2nrkt0HNXRG0jozT2CBKIYyL%2BJS%2FnUUgbf1Fwoj5mtXrLOxQfHk%2F8LtBSievdulBNFZuTZ%2FnRdtxE8F9Hm77HF1x%2FPDzIreoV2lRoeflfSbNtCF%2FZAkDgeed%2FiFbQvhgKSNdpWEjO40RuviCdStqG3dktjS3immcl8HnCsggDEvFIAu3XXXhzgPeKuUEJkI6Y0jjvpTcJhAb74A6eWmT8E6YRsxTH0flbvrRhN1OdPYY31CKqzzfb3QqddFh58GWQo2mERopKmTTgSQajhHhOKKN%2BvcsRp3ve3SaanFjprMKbgkxcNFyvYfbNBIB6mcsQN2q%2FDId0G%2FLVrltPuP8WLSFwp1eB2J1NHzeORlsR2UtIMIbG3MEGOqUB0417%2Bw7k%2FtCpGm4S58ZIiwBVxKJWdEARJ25XhYTIiwuwWpKZnzAGXi7hCJH%2FRQil2ztCrBC9pDq%2FuQeTUrfe1PWSyIQMZXNIc0ugdvfmKNWtKIMsXGTL9GUoGgH0OhSHhZcwd1GOTIqycgXRkiQDhZak47EKmmsIXexinfySbFfThRpnbNGp8ChO3SX8mOSzTCnNr2lrwu6AOqIWsRWMKs0IA3P7&X-Amz-Signature=3e05b1f5b36a1669efbc62225917c8bad7037109b629953ebea459161dfb6043&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
