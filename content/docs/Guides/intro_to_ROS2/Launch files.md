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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636547GOJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEVL2bZtPBR7zSnZLP6kXs4kYGLtFv%2FK066KZyFBt2zfAiEA0Pv1aVUWw3MM8pMSrSG5oHVXZX5ua85XfexSJt5Pl28q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDB0TeNHGCAdZEfXHoSrcA3sbqrpsEE08cPYPad9ZPNxENwSH2rOjBujjl9KOXSs764N1dtv20yEu0eAQnGwu%2FSO%2Fpn6OoQ5mifzgjTpMSuN3u7J0CyxQG6DAYEOfUOAZKti%2FnBECHeNMP%2FmSwQvabsrbKu9mffLhApaQZGB7rzCBJEFd%2Bzo3qr1KHaNj5Z5PEIFLl9xq2yUpihtMiUAj4IrH0Q9rrIWAtCjcAWEV7K7URTz6uzpkve0kR8cV%2F2axHbuFWfko6ZvEA5NmNy2zSjrzpgZtuuvAV%2Fb8R3Y6uUuyvOqKD62CzH2ckGrym%2FEKHZxhJHuTusVhJOW6wsjtIEmp96FpmNCPcs9qsIbqJFQodEvXTzd7JsjKjYOVQ39g%2FuLbY67AxtKEszW%2FyRnLh3QSNysgg1XEPkO6VnskKxukUY515xIn4jO5X5oU5aQ5%2B7oZH1M7RVCF9TaICFELJ0I2zneaL8Yq%2F%2FspMFgWkHEwe7vvCPrOIsuLodpJpKsUgHfemIQMQ%2B%2B2KarKeWkn8fR141ZPCVQlP4MRNINSk%2F0%2Bb5eHCKcaUEukHtfy6NOXufw%2FXsGYFGLjL%2B4NBgecKVjk3r5bG%2FhRPSvCoJoF63tk8SLHZGi2ReULF7EdrO4kU4NwND52FvL%2B8a%2BJMK%2Fh%2FsEGOqUBdsbXaJMin43SEdAV5ZA36mW%2BptXNwpc%2FasaPoN%2BabvhoJDSRIdTo2HjgG%2Fh73h5qvdtP3%2F5IPDQ0pn0DMIJlqvD30zkGXJTspR1aLra93a2OH5cHa%2Bx%2Bnh9Ox0fiKv5%2BpN9QmytUAWN4ZtVtHr%2BpKWp8FBi6C5F%2FZJG7Dv0o59QQ%2B4C1HNdoG2iMKzCRqO%2BzM2dnrG9bGFSplqazngzkilvNb7SW&X-Amz-Signature=cd06e631e95db0417225837fecbdcac2e8920f33c0690c0c4325e12180ce5151&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636547GOJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEVL2bZtPBR7zSnZLP6kXs4kYGLtFv%2FK066KZyFBt2zfAiEA0Pv1aVUWw3MM8pMSrSG5oHVXZX5ua85XfexSJt5Pl28q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDB0TeNHGCAdZEfXHoSrcA3sbqrpsEE08cPYPad9ZPNxENwSH2rOjBujjl9KOXSs764N1dtv20yEu0eAQnGwu%2FSO%2Fpn6OoQ5mifzgjTpMSuN3u7J0CyxQG6DAYEOfUOAZKti%2FnBECHeNMP%2FmSwQvabsrbKu9mffLhApaQZGB7rzCBJEFd%2Bzo3qr1KHaNj5Z5PEIFLl9xq2yUpihtMiUAj4IrH0Q9rrIWAtCjcAWEV7K7URTz6uzpkve0kR8cV%2F2axHbuFWfko6ZvEA5NmNy2zSjrzpgZtuuvAV%2Fb8R3Y6uUuyvOqKD62CzH2ckGrym%2FEKHZxhJHuTusVhJOW6wsjtIEmp96FpmNCPcs9qsIbqJFQodEvXTzd7JsjKjYOVQ39g%2FuLbY67AxtKEszW%2FyRnLh3QSNysgg1XEPkO6VnskKxukUY515xIn4jO5X5oU5aQ5%2B7oZH1M7RVCF9TaICFELJ0I2zneaL8Yq%2F%2FspMFgWkHEwe7vvCPrOIsuLodpJpKsUgHfemIQMQ%2B%2B2KarKeWkn8fR141ZPCVQlP4MRNINSk%2F0%2Bb5eHCKcaUEukHtfy6NOXufw%2FXsGYFGLjL%2B4NBgecKVjk3r5bG%2FhRPSvCoJoF63tk8SLHZGi2ReULF7EdrO4kU4NwND52FvL%2B8a%2BJMK%2Fh%2FsEGOqUBdsbXaJMin43SEdAV5ZA36mW%2BptXNwpc%2FasaPoN%2BabvhoJDSRIdTo2HjgG%2Fh73h5qvdtP3%2F5IPDQ0pn0DMIJlqvD30zkGXJTspR1aLra93a2OH5cHa%2Bx%2Bnh9Ox0fiKv5%2BpN9QmytUAWN4ZtVtHr%2BpKWp8FBi6C5F%2FZJG7Dv0o59QQ%2B4C1HNdoG2iMKzCRqO%2BzM2dnrG9bGFSplqazngzkilvNb7SW&X-Amz-Signature=45cb7b8777d31d84e9a6ef7ca357ccd2ca1a057e3d09b9d38b0e673411f70caa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636547GOJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEVL2bZtPBR7zSnZLP6kXs4kYGLtFv%2FK066KZyFBt2zfAiEA0Pv1aVUWw3MM8pMSrSG5oHVXZX5ua85XfexSJt5Pl28q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDB0TeNHGCAdZEfXHoSrcA3sbqrpsEE08cPYPad9ZPNxENwSH2rOjBujjl9KOXSs764N1dtv20yEu0eAQnGwu%2FSO%2Fpn6OoQ5mifzgjTpMSuN3u7J0CyxQG6DAYEOfUOAZKti%2FnBECHeNMP%2FmSwQvabsrbKu9mffLhApaQZGB7rzCBJEFd%2Bzo3qr1KHaNj5Z5PEIFLl9xq2yUpihtMiUAj4IrH0Q9rrIWAtCjcAWEV7K7URTz6uzpkve0kR8cV%2F2axHbuFWfko6ZvEA5NmNy2zSjrzpgZtuuvAV%2Fb8R3Y6uUuyvOqKD62CzH2ckGrym%2FEKHZxhJHuTusVhJOW6wsjtIEmp96FpmNCPcs9qsIbqJFQodEvXTzd7JsjKjYOVQ39g%2FuLbY67AxtKEszW%2FyRnLh3QSNysgg1XEPkO6VnskKxukUY515xIn4jO5X5oU5aQ5%2B7oZH1M7RVCF9TaICFELJ0I2zneaL8Yq%2F%2FspMFgWkHEwe7vvCPrOIsuLodpJpKsUgHfemIQMQ%2B%2B2KarKeWkn8fR141ZPCVQlP4MRNINSk%2F0%2Bb5eHCKcaUEukHtfy6NOXufw%2FXsGYFGLjL%2B4NBgecKVjk3r5bG%2FhRPSvCoJoF63tk8SLHZGi2ReULF7EdrO4kU4NwND52FvL%2B8a%2BJMK%2Fh%2FsEGOqUBdsbXaJMin43SEdAV5ZA36mW%2BptXNwpc%2FasaPoN%2BabvhoJDSRIdTo2HjgG%2Fh73h5qvdtP3%2F5IPDQ0pn0DMIJlqvD30zkGXJTspR1aLra93a2OH5cHa%2Bx%2Bnh9Ox0fiKv5%2BpN9QmytUAWN4ZtVtHr%2BpKWp8FBi6C5F%2FZJG7Dv0o59QQ%2B4C1HNdoG2iMKzCRqO%2BzM2dnrG9bGFSplqazngzkilvNb7SW&X-Amz-Signature=21342ca81712e32d394d12471cfe4c61af3972e4b27db6929e35768aa4cc1613&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
