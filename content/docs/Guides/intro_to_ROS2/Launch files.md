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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SXAMAH5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQD2pSl0tGsiPzGN8Pvq6v6cxRYoP3coomq3sk1zybgyGwIhAL8AU4hYfMx9Aeeu%2BOhFQd2zKNM8H%2FOiP2TF20A3T0cKKv8DCBsQABoMNjM3NDIzMTgzODA1Igwxq1SLzwztslqkVrcq3AMr89iyOIUD2FiUHbTDsAHJCNCH1xxSlTsBUQ1HgzfrmPS5A2idekGp1%2FTNzOaJXZ5BIwjllRLPqAlXTTHwCcqwHT3%2Blzfc6xPfQjYPjGioPk%2FiS4G1VVXvLAhKO%2BPuQv1jMetKnnUmxewXsZq8OCLpc2dbPue5x0IU3%2B9s5u0TqljulT2isia%2ByvwcJpMi0WbpBO%2BbvdjAIaQ1bfePiOTIAFmOsY4vShM2UQZKi%2FHdt5aAT4%2FkMswVSBYgG3KDyKSXIJ1Z%2FDK%2BJgiBaV5IgOL0sBEzBEzAsYdSuyACzyzBbTbTha%2BITRx4zAzN0HxgUpd5ikIir%2F8QvM8eVGtFrEfZSuOl%2FmiGsnmru9D15Cabn6gdoYGIhpsYCcovCy3OVwUbrwwomk1j%2BU6D2wBB0yPvJlaJeVmL794%2BHcNKj4ISYOoO1RxCVZ2A7nLrvitL0IYa%2Fg8eBuljYXOYHPSyY2BBc9EhhG8Q3yjrpWomg%2BLAHh7sjAM4GFHWT2nTnzCWRzuLS6n%2FuSkbnYDWyPBc3jQKjRnZ0LbOp5yHJ0w6sdtNPPvjOLWwJNt4IbRnnFtbaFfcy625sM3jAPde5UvRanY0mQE9NSRyi43MjR61YOwu9tupLpKpfCDhDhH2KjChqubCBjqkAZ0v9llBO4vjDpKfAbYRkO2MQGWl%2F2n5RFc6V6aUlOM29dA6oQpt3E3nW3Zf9RtWsyueSio1F2HJD7ctNCHb9d9PDnstVxaIJ5eZyKR%2BOtWWlxhnzwoFgoMZlyjqB6Vc74hHNUjZhImdKlEFdCMX6a1p1lU7Nuj290oi%2Bwxy59wJsmaUtQtk7wV2s4vzGrxywjsYEHyDuczQRq%2BreG2nWncmwwgM&X-Amz-Signature=9a47de60bf7627907f525086a200de080b6b42cf6b80f2e9d1899cd5cc343df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SXAMAH5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQD2pSl0tGsiPzGN8Pvq6v6cxRYoP3coomq3sk1zybgyGwIhAL8AU4hYfMx9Aeeu%2BOhFQd2zKNM8H%2FOiP2TF20A3T0cKKv8DCBsQABoMNjM3NDIzMTgzODA1Igwxq1SLzwztslqkVrcq3AMr89iyOIUD2FiUHbTDsAHJCNCH1xxSlTsBUQ1HgzfrmPS5A2idekGp1%2FTNzOaJXZ5BIwjllRLPqAlXTTHwCcqwHT3%2Blzfc6xPfQjYPjGioPk%2FiS4G1VVXvLAhKO%2BPuQv1jMetKnnUmxewXsZq8OCLpc2dbPue5x0IU3%2B9s5u0TqljulT2isia%2ByvwcJpMi0WbpBO%2BbvdjAIaQ1bfePiOTIAFmOsY4vShM2UQZKi%2FHdt5aAT4%2FkMswVSBYgG3KDyKSXIJ1Z%2FDK%2BJgiBaV5IgOL0sBEzBEzAsYdSuyACzyzBbTbTha%2BITRx4zAzN0HxgUpd5ikIir%2F8QvM8eVGtFrEfZSuOl%2FmiGsnmru9D15Cabn6gdoYGIhpsYCcovCy3OVwUbrwwomk1j%2BU6D2wBB0yPvJlaJeVmL794%2BHcNKj4ISYOoO1RxCVZ2A7nLrvitL0IYa%2Fg8eBuljYXOYHPSyY2BBc9EhhG8Q3yjrpWomg%2BLAHh7sjAM4GFHWT2nTnzCWRzuLS6n%2FuSkbnYDWyPBc3jQKjRnZ0LbOp5yHJ0w6sdtNPPvjOLWwJNt4IbRnnFtbaFfcy625sM3jAPde5UvRanY0mQE9NSRyi43MjR61YOwu9tupLpKpfCDhDhH2KjChqubCBjqkAZ0v9llBO4vjDpKfAbYRkO2MQGWl%2F2n5RFc6V6aUlOM29dA6oQpt3E3nW3Zf9RtWsyueSio1F2HJD7ctNCHb9d9PDnstVxaIJ5eZyKR%2BOtWWlxhnzwoFgoMZlyjqB6Vc74hHNUjZhImdKlEFdCMX6a1p1lU7Nuj290oi%2Bwxy59wJsmaUtQtk7wV2s4vzGrxywjsYEHyDuczQRq%2BreG2nWncmwwgM&X-Amz-Signature=49132205b21791dbbeeb37dde97d6fa2f7ee8850a11f7aee26c1468557c09b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SXAMAH5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQD2pSl0tGsiPzGN8Pvq6v6cxRYoP3coomq3sk1zybgyGwIhAL8AU4hYfMx9Aeeu%2BOhFQd2zKNM8H%2FOiP2TF20A3T0cKKv8DCBsQABoMNjM3NDIzMTgzODA1Igwxq1SLzwztslqkVrcq3AMr89iyOIUD2FiUHbTDsAHJCNCH1xxSlTsBUQ1HgzfrmPS5A2idekGp1%2FTNzOaJXZ5BIwjllRLPqAlXTTHwCcqwHT3%2Blzfc6xPfQjYPjGioPk%2FiS4G1VVXvLAhKO%2BPuQv1jMetKnnUmxewXsZq8OCLpc2dbPue5x0IU3%2B9s5u0TqljulT2isia%2ByvwcJpMi0WbpBO%2BbvdjAIaQ1bfePiOTIAFmOsY4vShM2UQZKi%2FHdt5aAT4%2FkMswVSBYgG3KDyKSXIJ1Z%2FDK%2BJgiBaV5IgOL0sBEzBEzAsYdSuyACzyzBbTbTha%2BITRx4zAzN0HxgUpd5ikIir%2F8QvM8eVGtFrEfZSuOl%2FmiGsnmru9D15Cabn6gdoYGIhpsYCcovCy3OVwUbrwwomk1j%2BU6D2wBB0yPvJlaJeVmL794%2BHcNKj4ISYOoO1RxCVZ2A7nLrvitL0IYa%2Fg8eBuljYXOYHPSyY2BBc9EhhG8Q3yjrpWomg%2BLAHh7sjAM4GFHWT2nTnzCWRzuLS6n%2FuSkbnYDWyPBc3jQKjRnZ0LbOp5yHJ0w6sdtNPPvjOLWwJNt4IbRnnFtbaFfcy625sM3jAPde5UvRanY0mQE9NSRyi43MjR61YOwu9tupLpKpfCDhDhH2KjChqubCBjqkAZ0v9llBO4vjDpKfAbYRkO2MQGWl%2F2n5RFc6V6aUlOM29dA6oQpt3E3nW3Zf9RtWsyueSio1F2HJD7ctNCHb9d9PDnstVxaIJ5eZyKR%2BOtWWlxhnzwoFgoMZlyjqB6Vc74hHNUjZhImdKlEFdCMX6a1p1lU7Nuj290oi%2Bwxy59wJsmaUtQtk7wV2s4vzGrxywjsYEHyDuczQRq%2BreG2nWncmwwgM&X-Amz-Signature=39ce5afba54b1b51c35fa5508b32525d537d232697bc0b21a868f5794c6d46b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
