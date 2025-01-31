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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ITRJJHY%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFEfS0GpHr%2FLVT2ygSBj7rv8zWuGeO%2BpaiT8tuPge3UwIgME3%2Bb3IobNxckkVZ0k%2B2n6q6zniPxTeCMGyuHqukL%2FYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxCzyOO1%2FtJ1enDYyrcA7HE41MO32%2BZT8aagm2eEID9W3QmnfxlM%2FdyCR14q42sm9f%2Fri%2FYPwQOMXKCfXqAkwde%2Bb0qSrG6WARyDcZkcFWgOguD8CWRTjmmtQ5csCzBcM7YPaSaaIvkOCdrjNNNA5opQb1HBXRndDCWXHlSLxPcEUj48tP8%2BGqBnwwo9t3G0axS4JMM5QwPFzQ6rN2YooNvmOtYCM5zZPsuimCkLp%2BKAF0MNXWzceVnOk7VZHrQfXtxwcjk6xo6Ba8lfQE3NYKjz8CEcGwWlyPA28FEqG3MTXd9BprnGeC%2F1zLq4Yefs5Ab0h%2BsvLs5JTOPxLESxfYhI8jP2eH78T8IW8atwTQh4KkEceR7okzMw85PpK4PTeeZyTPOG58EvWy%2BalL%2FiMDMi%2FoF501wBSaouNqu%2F2sFBBnjwoZjQC%2FAHie%2FBjG1SiBADqfpmxgEdVRgWyNKO6ym8fOayQRUUWSPlfs6VoMzPFRibYWJZaEuKD5fHrsNZPjWxcn3n2SVdunHVml3sTjW1jTnH8N8okC9xQKvfnb%2BPpdk%2BgVatA3aPavtL2t1oEY4Z46Hi%2FADzI4ZLk6t3RNC0x9rkiRNoC67XUW3SZ1PvtA5KltAygW2kxf9hoPGkiLtRiJExCwXD5QlMIzj8bwGOqUBwZIt2q%2FXLuxVVTSH2vIv%2F5yLfVGXGop9nOMG37lqYfPYpBrEE2wJyeGyvsKKmRqh%2FbS8S3oxhk2b3JdO2oVUlSvOq%2BidMtG%2BUM%2ByYI0WG8qoYuyLpQgJTh1ai9gRzMbt2IURYW1kp66ZuoQ5HDUcWqW65ai9JVqC0M1jm6Yxn6c2kaWDHdaGqg1kgBvvJzJZzGM3op0Sgqztvxv2g3QToR3yoawb&X-Amz-Signature=6848980dc78ab6daca419d0ce10290de04b368c09bcaf237b3ac620a13d34745&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ITRJJHY%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFEfS0GpHr%2FLVT2ygSBj7rv8zWuGeO%2BpaiT8tuPge3UwIgME3%2Bb3IobNxckkVZ0k%2B2n6q6zniPxTeCMGyuHqukL%2FYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxCzyOO1%2FtJ1enDYyrcA7HE41MO32%2BZT8aagm2eEID9W3QmnfxlM%2FdyCR14q42sm9f%2Fri%2FYPwQOMXKCfXqAkwde%2Bb0qSrG6WARyDcZkcFWgOguD8CWRTjmmtQ5csCzBcM7YPaSaaIvkOCdrjNNNA5opQb1HBXRndDCWXHlSLxPcEUj48tP8%2BGqBnwwo9t3G0axS4JMM5QwPFzQ6rN2YooNvmOtYCM5zZPsuimCkLp%2BKAF0MNXWzceVnOk7VZHrQfXtxwcjk6xo6Ba8lfQE3NYKjz8CEcGwWlyPA28FEqG3MTXd9BprnGeC%2F1zLq4Yefs5Ab0h%2BsvLs5JTOPxLESxfYhI8jP2eH78T8IW8atwTQh4KkEceR7okzMw85PpK4PTeeZyTPOG58EvWy%2BalL%2FiMDMi%2FoF501wBSaouNqu%2F2sFBBnjwoZjQC%2FAHie%2FBjG1SiBADqfpmxgEdVRgWyNKO6ym8fOayQRUUWSPlfs6VoMzPFRibYWJZaEuKD5fHrsNZPjWxcn3n2SVdunHVml3sTjW1jTnH8N8okC9xQKvfnb%2BPpdk%2BgVatA3aPavtL2t1oEY4Z46Hi%2FADzI4ZLk6t3RNC0x9rkiRNoC67XUW3SZ1PvtA5KltAygW2kxf9hoPGkiLtRiJExCwXD5QlMIzj8bwGOqUBwZIt2q%2FXLuxVVTSH2vIv%2F5yLfVGXGop9nOMG37lqYfPYpBrEE2wJyeGyvsKKmRqh%2FbS8S3oxhk2b3JdO2oVUlSvOq%2BidMtG%2BUM%2ByYI0WG8qoYuyLpQgJTh1ai9gRzMbt2IURYW1kp66ZuoQ5HDUcWqW65ai9JVqC0M1jm6Yxn6c2kaWDHdaGqg1kgBvvJzJZzGM3op0Sgqztvxv2g3QToR3yoawb&X-Amz-Signature=c42533aaa76e26b0b0a7780f9c5f555df4b7ce195892486208f28288b86e91d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ITRJJHY%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFEfS0GpHr%2FLVT2ygSBj7rv8zWuGeO%2BpaiT8tuPge3UwIgME3%2Bb3IobNxckkVZ0k%2B2n6q6zniPxTeCMGyuHqukL%2FYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxCzyOO1%2FtJ1enDYyrcA7HE41MO32%2BZT8aagm2eEID9W3QmnfxlM%2FdyCR14q42sm9f%2Fri%2FYPwQOMXKCfXqAkwde%2Bb0qSrG6WARyDcZkcFWgOguD8CWRTjmmtQ5csCzBcM7YPaSaaIvkOCdrjNNNA5opQb1HBXRndDCWXHlSLxPcEUj48tP8%2BGqBnwwo9t3G0axS4JMM5QwPFzQ6rN2YooNvmOtYCM5zZPsuimCkLp%2BKAF0MNXWzceVnOk7VZHrQfXtxwcjk6xo6Ba8lfQE3NYKjz8CEcGwWlyPA28FEqG3MTXd9BprnGeC%2F1zLq4Yefs5Ab0h%2BsvLs5JTOPxLESxfYhI8jP2eH78T8IW8atwTQh4KkEceR7okzMw85PpK4PTeeZyTPOG58EvWy%2BalL%2FiMDMi%2FoF501wBSaouNqu%2F2sFBBnjwoZjQC%2FAHie%2FBjG1SiBADqfpmxgEdVRgWyNKO6ym8fOayQRUUWSPlfs6VoMzPFRibYWJZaEuKD5fHrsNZPjWxcn3n2SVdunHVml3sTjW1jTnH8N8okC9xQKvfnb%2BPpdk%2BgVatA3aPavtL2t1oEY4Z46Hi%2FADzI4ZLk6t3RNC0x9rkiRNoC67XUW3SZ1PvtA5KltAygW2kxf9hoPGkiLtRiJExCwXD5QlMIzj8bwGOqUBwZIt2q%2FXLuxVVTSH2vIv%2F5yLfVGXGop9nOMG37lqYfPYpBrEE2wJyeGyvsKKmRqh%2FbS8S3oxhk2b3JdO2oVUlSvOq%2BidMtG%2BUM%2ByYI0WG8qoYuyLpQgJTh1ai9gRzMbt2IURYW1kp66ZuoQ5HDUcWqW65ai9JVqC0M1jm6Yxn6c2kaWDHdaGqg1kgBvvJzJZzGM3op0Sgqztvxv2g3QToR3yoawb&X-Amz-Signature=d61254a4bc4d69eb56e117a9a0d50e1c5052fd304b58011fb9a68e1436e6ae92&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
