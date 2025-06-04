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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMIOD5S%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDKNVMvpfHWoNUpwRLk9QH%2BeG8KhwmNFa5jvvD%2Fd3YdswIhAJUxTguElVj36bpnotG5UisCNhZu15XoWRmjBhbTTe9CKv8DCDEQABoMNjM3NDIzMTgzODA1IgyT1J7zqchCpmIpEnoq3APioErcZKl9%2FBO4nkQyR0TUDq2oGDNRwF1xfCYDfaxtvvW8p5l%2FkKUM4RQPfrdmNdwb8qUln1K%2BCGyrrn0Hsrz3D2nSGwCcvPwvkYT6gp%2BQs41RQyNNNYWaCU3pr0XHWR7kd0RY5a7XoIhQMA9SrR5Lk%2B6BG6xkbNogMS4VLPkvP2LY3MLMxsQT7fOZCXdclwvg1RW0ZHqmjdf735YIYiJxE2ANwDLvjC2glFTF2xZT5qeZvLiIzVEClv6lVjIMDfpqZf%2F90hWYHTU6%2FROR2iIty2me9llKngJ7T6O2nO9cZE%2FxtVVBGOa%2BiKEK38HGTErPeTNCTQ%2Bp%2FbaN4X29zZUsedw9kID1IVGL6TUwTZcygnRi2SAo%2BWKUeUzE7CgghZEAWUhtiUL7%2Bu5bLYQ4S7LN2u%2F%2BSrkUEF5co6rj4B87vpmdlsn8rdChmzFhZaxv6X6hvSz5zg97YVCwcoqWueBIJYqgsJRjldOsqSuEAPwSPcZhSufCckPMkjXE0IWdzTCX1Eh33yjUrsPlJh9AIjIEMU3m9d6AtY6wnRsvs1yF5sbe2DWS7YM58QDj7i1bPIX2epFfD5ECKvP6f%2B2A61HLVlTPA4IAa4swixBUHk9DqYh2j3q7MY7lvxqVozCR3oHCBjqkASheWY3drmFanQhLyGNnXB%2FxmDIMcOuJ7qzA%2F1HUgz5tRkAIPRRsUj3XZqXAgbsVUSJ5vu27kZmmklFgSxU%2B6w6STAuVYQo31Twj62Fz6AwthU%2BoNy57OFQAJ4adjjngUTLF7QNmblc6Bka7fX5uD5wlcRFYP8vMZPYtSOO1VRkctsDE6tChl5ctoYPfcSk9aQTvveJwutF6At6gxCAdUwjjhOBc&X-Amz-Signature=4bbe1c75fd386f0c1408f3f7b87b7ec34b8effad293d478cc16a7f21f2669277&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMIOD5S%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDKNVMvpfHWoNUpwRLk9QH%2BeG8KhwmNFa5jvvD%2Fd3YdswIhAJUxTguElVj36bpnotG5UisCNhZu15XoWRmjBhbTTe9CKv8DCDEQABoMNjM3NDIzMTgzODA1IgyT1J7zqchCpmIpEnoq3APioErcZKl9%2FBO4nkQyR0TUDq2oGDNRwF1xfCYDfaxtvvW8p5l%2FkKUM4RQPfrdmNdwb8qUln1K%2BCGyrrn0Hsrz3D2nSGwCcvPwvkYT6gp%2BQs41RQyNNNYWaCU3pr0XHWR7kd0RY5a7XoIhQMA9SrR5Lk%2B6BG6xkbNogMS4VLPkvP2LY3MLMxsQT7fOZCXdclwvg1RW0ZHqmjdf735YIYiJxE2ANwDLvjC2glFTF2xZT5qeZvLiIzVEClv6lVjIMDfpqZf%2F90hWYHTU6%2FROR2iIty2me9llKngJ7T6O2nO9cZE%2FxtVVBGOa%2BiKEK38HGTErPeTNCTQ%2Bp%2FbaN4X29zZUsedw9kID1IVGL6TUwTZcygnRi2SAo%2BWKUeUzE7CgghZEAWUhtiUL7%2Bu5bLYQ4S7LN2u%2F%2BSrkUEF5co6rj4B87vpmdlsn8rdChmzFhZaxv6X6hvSz5zg97YVCwcoqWueBIJYqgsJRjldOsqSuEAPwSPcZhSufCckPMkjXE0IWdzTCX1Eh33yjUrsPlJh9AIjIEMU3m9d6AtY6wnRsvs1yF5sbe2DWS7YM58QDj7i1bPIX2epFfD5ECKvP6f%2B2A61HLVlTPA4IAa4swixBUHk9DqYh2j3q7MY7lvxqVozCR3oHCBjqkASheWY3drmFanQhLyGNnXB%2FxmDIMcOuJ7qzA%2F1HUgz5tRkAIPRRsUj3XZqXAgbsVUSJ5vu27kZmmklFgSxU%2B6w6STAuVYQo31Twj62Fz6AwthU%2BoNy57OFQAJ4adjjngUTLF7QNmblc6Bka7fX5uD5wlcRFYP8vMZPYtSOO1VRkctsDE6tChl5ctoYPfcSk9aQTvveJwutF6At6gxCAdUwjjhOBc&X-Amz-Signature=206829c05075da101f710b7a7311e92c92923a69862d1f5bd49bb66c2a9aa7a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMIOD5S%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDKNVMvpfHWoNUpwRLk9QH%2BeG8KhwmNFa5jvvD%2Fd3YdswIhAJUxTguElVj36bpnotG5UisCNhZu15XoWRmjBhbTTe9CKv8DCDEQABoMNjM3NDIzMTgzODA1IgyT1J7zqchCpmIpEnoq3APioErcZKl9%2FBO4nkQyR0TUDq2oGDNRwF1xfCYDfaxtvvW8p5l%2FkKUM4RQPfrdmNdwb8qUln1K%2BCGyrrn0Hsrz3D2nSGwCcvPwvkYT6gp%2BQs41RQyNNNYWaCU3pr0XHWR7kd0RY5a7XoIhQMA9SrR5Lk%2B6BG6xkbNogMS4VLPkvP2LY3MLMxsQT7fOZCXdclwvg1RW0ZHqmjdf735YIYiJxE2ANwDLvjC2glFTF2xZT5qeZvLiIzVEClv6lVjIMDfpqZf%2F90hWYHTU6%2FROR2iIty2me9llKngJ7T6O2nO9cZE%2FxtVVBGOa%2BiKEK38HGTErPeTNCTQ%2Bp%2FbaN4X29zZUsedw9kID1IVGL6TUwTZcygnRi2SAo%2BWKUeUzE7CgghZEAWUhtiUL7%2Bu5bLYQ4S7LN2u%2F%2BSrkUEF5co6rj4B87vpmdlsn8rdChmzFhZaxv6X6hvSz5zg97YVCwcoqWueBIJYqgsJRjldOsqSuEAPwSPcZhSufCckPMkjXE0IWdzTCX1Eh33yjUrsPlJh9AIjIEMU3m9d6AtY6wnRsvs1yF5sbe2DWS7YM58QDj7i1bPIX2epFfD5ECKvP6f%2B2A61HLVlTPA4IAa4swixBUHk9DqYh2j3q7MY7lvxqVozCR3oHCBjqkASheWY3drmFanQhLyGNnXB%2FxmDIMcOuJ7qzA%2F1HUgz5tRkAIPRRsUj3XZqXAgbsVUSJ5vu27kZmmklFgSxU%2B6w6STAuVYQo31Twj62Fz6AwthU%2BoNy57OFQAJ4adjjngUTLF7QNmblc6Bka7fX5uD5wlcRFYP8vMZPYtSOO1VRkctsDE6tChl5ctoYPfcSk9aQTvveJwutF6At6gxCAdUwjjhOBc&X-Amz-Signature=6ccfb348b7486d76122804e80db0406693aa3ff1db0766a15b3c04b756f75d09&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
