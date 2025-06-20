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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQYAP67X%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqZ8M2Fs4AnTG1%2FQLw6vzgjXqDvNislgQoc5vxX7FFOgIhAMgjAMjZgFffy728GZPRm3dZ1iKQ%2FcOlpljjsIRUQ0hGKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBs8GpTPNXyWAcZxIq3AMakI8LXTGWAUj7QjJwgldDDjnK108KGTv5qF52EIe7zk1rhpTRWEWp%2Bt2HGlZVisnjqIx5VoU92rTxXjINLIJbx31arAbPA84itsT1lPIo3QnplQHcUltwTEl2nNRcC4gkY%2Fe7uL58mT3dOJiAlMJxPGQefdL85OQWdtvp2812zXEv2Jqn1QQSwhWM40vwXyo%2FCBTfNgKFjB2nvOe09nNCiAdmShWj%2FqiJaC8l1oMozWUHrV9%2Fb1KdAct1488ZaTscGjHmDzxy%2BSayFv%2FWnwsAYrJAdJGfhrMAI811oIwo6bgz437P6FsU5HBrf%2B%2FugVYQgnGtoXSDJzaLJ4qviGAo2hlNc98%2F2efc%2Foja9TTMe7xQpnmfxXB2u%2F171Sspayx2Tgr31LGCP8LJsFwAJEDec1Wxyjwlh5Drg%2BHD2P7o%2FuhiKpkxRTIUo%2F7Uqg%2FPClahgtvmnfuwrdDISPUe8zD3EuvRH%2FkoZ6Z8ZqG1Ci8t3Ks9sIfl1WggNZ%2FoOWBeqYispSpuPgbqBamRmRhAJSwoCbneSZLxLHdvGQRGl8SPmwUHD5FcuqU45UAw3KqNaEiWVi5DdxYcFlEctyGbAPFNOpaD6BbGsWCq8WJrmdxw3kMz4GoVc4Q8lRb5fDD3vNPCBjqkAeB6gDj17vzMX%2BexLgbGxgdkF%2Bakrjp1w4dYMf85bvy9FdUuvymakxjiy8AqohEC3u45BRRJdiA%2FKUwCxo%2BFz6yIiSm22wYM6wROHFIJuAbs%2Bio5NgjHuFCiUpzjDBBNNOuzhQ9tloyaTtXP7cKWP%2BYYAo%2Fewc4zvPm0AZDAWA3PILcpbptoKsxgT32foanoUGXDL6Sap2A29FALO9NQ1kiskLUd&X-Amz-Signature=cbf9264e73e3aeae131256a338de492aaf73bb9845d07c6389a9122805e02394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQYAP67X%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqZ8M2Fs4AnTG1%2FQLw6vzgjXqDvNislgQoc5vxX7FFOgIhAMgjAMjZgFffy728GZPRm3dZ1iKQ%2FcOlpljjsIRUQ0hGKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBs8GpTPNXyWAcZxIq3AMakI8LXTGWAUj7QjJwgldDDjnK108KGTv5qF52EIe7zk1rhpTRWEWp%2Bt2HGlZVisnjqIx5VoU92rTxXjINLIJbx31arAbPA84itsT1lPIo3QnplQHcUltwTEl2nNRcC4gkY%2Fe7uL58mT3dOJiAlMJxPGQefdL85OQWdtvp2812zXEv2Jqn1QQSwhWM40vwXyo%2FCBTfNgKFjB2nvOe09nNCiAdmShWj%2FqiJaC8l1oMozWUHrV9%2Fb1KdAct1488ZaTscGjHmDzxy%2BSayFv%2FWnwsAYrJAdJGfhrMAI811oIwo6bgz437P6FsU5HBrf%2B%2FugVYQgnGtoXSDJzaLJ4qviGAo2hlNc98%2F2efc%2Foja9TTMe7xQpnmfxXB2u%2F171Sspayx2Tgr31LGCP8LJsFwAJEDec1Wxyjwlh5Drg%2BHD2P7o%2FuhiKpkxRTIUo%2F7Uqg%2FPClahgtvmnfuwrdDISPUe8zD3EuvRH%2FkoZ6Z8ZqG1Ci8t3Ks9sIfl1WggNZ%2FoOWBeqYispSpuPgbqBamRmRhAJSwoCbneSZLxLHdvGQRGl8SPmwUHD5FcuqU45UAw3KqNaEiWVi5DdxYcFlEctyGbAPFNOpaD6BbGsWCq8WJrmdxw3kMz4GoVc4Q8lRb5fDD3vNPCBjqkAeB6gDj17vzMX%2BexLgbGxgdkF%2Bakrjp1w4dYMf85bvy9FdUuvymakxjiy8AqohEC3u45BRRJdiA%2FKUwCxo%2BFz6yIiSm22wYM6wROHFIJuAbs%2Bio5NgjHuFCiUpzjDBBNNOuzhQ9tloyaTtXP7cKWP%2BYYAo%2Fewc4zvPm0AZDAWA3PILcpbptoKsxgT32foanoUGXDL6Sap2A29FALO9NQ1kiskLUd&X-Amz-Signature=1b148bb6817ef6b407274f6761875d21d2a356f0b5718f1c3cdfbd2d8415d5ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQYAP67X%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqZ8M2Fs4AnTG1%2FQLw6vzgjXqDvNislgQoc5vxX7FFOgIhAMgjAMjZgFffy728GZPRm3dZ1iKQ%2FcOlpljjsIRUQ0hGKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBs8GpTPNXyWAcZxIq3AMakI8LXTGWAUj7QjJwgldDDjnK108KGTv5qF52EIe7zk1rhpTRWEWp%2Bt2HGlZVisnjqIx5VoU92rTxXjINLIJbx31arAbPA84itsT1lPIo3QnplQHcUltwTEl2nNRcC4gkY%2Fe7uL58mT3dOJiAlMJxPGQefdL85OQWdtvp2812zXEv2Jqn1QQSwhWM40vwXyo%2FCBTfNgKFjB2nvOe09nNCiAdmShWj%2FqiJaC8l1oMozWUHrV9%2Fb1KdAct1488ZaTscGjHmDzxy%2BSayFv%2FWnwsAYrJAdJGfhrMAI811oIwo6bgz437P6FsU5HBrf%2B%2FugVYQgnGtoXSDJzaLJ4qviGAo2hlNc98%2F2efc%2Foja9TTMe7xQpnmfxXB2u%2F171Sspayx2Tgr31LGCP8LJsFwAJEDec1Wxyjwlh5Drg%2BHD2P7o%2FuhiKpkxRTIUo%2F7Uqg%2FPClahgtvmnfuwrdDISPUe8zD3EuvRH%2FkoZ6Z8ZqG1Ci8t3Ks9sIfl1WggNZ%2FoOWBeqYispSpuPgbqBamRmRhAJSwoCbneSZLxLHdvGQRGl8SPmwUHD5FcuqU45UAw3KqNaEiWVi5DdxYcFlEctyGbAPFNOpaD6BbGsWCq8WJrmdxw3kMz4GoVc4Q8lRb5fDD3vNPCBjqkAeB6gDj17vzMX%2BexLgbGxgdkF%2Bakrjp1w4dYMf85bvy9FdUuvymakxjiy8AqohEC3u45BRRJdiA%2FKUwCxo%2BFz6yIiSm22wYM6wROHFIJuAbs%2Bio5NgjHuFCiUpzjDBBNNOuzhQ9tloyaTtXP7cKWP%2BYYAo%2Fewc4zvPm0AZDAWA3PILcpbptoKsxgT32foanoUGXDL6Sap2A29FALO9NQ1kiskLUd&X-Amz-Signature=efd79da49568395f5f041057137c8c1061854f4c2af9634f9760072922c21206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
