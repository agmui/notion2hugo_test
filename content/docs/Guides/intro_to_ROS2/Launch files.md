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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM5F3NYA%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIAgqMPRFsifeWmZ2V0FskWU3ssNUx8AV1AN2Bxq9U3DAAiEAg4iQ5MpL8uIKrb2jXGwLOlVC8cOHXkxf6Wq4THu5Te0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIGdqmFiSk6yJRi9SrcA9u0MtU00iXkXtF%2BIO2Wqvf0SUsZvlsRfjenEpYQFTsH97FnmY0XJmK1r6W1KpVvAkttj6g%2FhN5m1K5dV820TOzgbFrrdgrF3DXMI9%2BLXXeho27yNgbxr%2BtKjQDect8Ye9tok6kcRSyRBoEHibbGEQPV5e8wUDbLiEyPTuPlxVidDqDUHlFrnTdxR%2B3p8BVRtrQijV2YoOpIMMGuSS2zkHkbhJEA4UgNqcEp4ppvjhVTC9gGJ%2B806Qj%2FNdthNxQqFV5gip4FYNWT61K%2FUAL4QxM4phGg6PhwnszxIxSQDl3OKLL1wQxsO%2FlDp1%2BwJ6Dx%2B8y1MN4ZKkGQfNi%2F8ZwEQ8ErRqqf7KlZF0indHgnqPGf%2F0xSMjc%2BQX4pKvK%2Bf25feVxcVoj9tl5dwgS1xfAFXLVhE5yF690AnLQ2eAlq5pz42G5DrHgPcNPxPyAp0BFSm22Ve%2ByJDmS1t6M9mcdw07f1h0ypgN4FkPDACEeO04fBF%2B7XKRtm8tnD12qkS1Tis8Xig%2Besnqrnn1uAouAnnUqiFsnEjMfdfQOIx4NuneGDm3MrsgqzzKC%2BD7Zjs2cP6P47qgnClXmp3JABc3QGUeJpAkpYfgicxHoco3xs%2BhSERJKXHrXdhUquc9uOMMf9vMEGOqUBpjKGqsEjXY%2Bw167rw3RqQz6vawHYnky3il3ws6ftE9HhEkRrx5V1qBibEzDjvuIv1gkAwwpknSgjqBztnFBBNMWVCLc7GezwWAwy0Ih4qF9c9GrzNRmQHQd%2BNmlRruazOA%2F3VWpFUoibrF8%2FkMK9i%2FnU0GFuGrHD76hasMq%2Br%2BihPg7%2FtoPMnDpWrprbP1FgzC%2FobRpqRFObtioEhXPEtcvqpzde&X-Amz-Signature=e57f6038105c30e9584aa3c625cf6f3ad95160791b644994570d0a1232af7f76&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM5F3NYA%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIAgqMPRFsifeWmZ2V0FskWU3ssNUx8AV1AN2Bxq9U3DAAiEAg4iQ5MpL8uIKrb2jXGwLOlVC8cOHXkxf6Wq4THu5Te0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIGdqmFiSk6yJRi9SrcA9u0MtU00iXkXtF%2BIO2Wqvf0SUsZvlsRfjenEpYQFTsH97FnmY0XJmK1r6W1KpVvAkttj6g%2FhN5m1K5dV820TOzgbFrrdgrF3DXMI9%2BLXXeho27yNgbxr%2BtKjQDect8Ye9tok6kcRSyRBoEHibbGEQPV5e8wUDbLiEyPTuPlxVidDqDUHlFrnTdxR%2B3p8BVRtrQijV2YoOpIMMGuSS2zkHkbhJEA4UgNqcEp4ppvjhVTC9gGJ%2B806Qj%2FNdthNxQqFV5gip4FYNWT61K%2FUAL4QxM4phGg6PhwnszxIxSQDl3OKLL1wQxsO%2FlDp1%2BwJ6Dx%2B8y1MN4ZKkGQfNi%2F8ZwEQ8ErRqqf7KlZF0indHgnqPGf%2F0xSMjc%2BQX4pKvK%2Bf25feVxcVoj9tl5dwgS1xfAFXLVhE5yF690AnLQ2eAlq5pz42G5DrHgPcNPxPyAp0BFSm22Ve%2ByJDmS1t6M9mcdw07f1h0ypgN4FkPDACEeO04fBF%2B7XKRtm8tnD12qkS1Tis8Xig%2Besnqrnn1uAouAnnUqiFsnEjMfdfQOIx4NuneGDm3MrsgqzzKC%2BD7Zjs2cP6P47qgnClXmp3JABc3QGUeJpAkpYfgicxHoco3xs%2BhSERJKXHrXdhUquc9uOMMf9vMEGOqUBpjKGqsEjXY%2Bw167rw3RqQz6vawHYnky3il3ws6ftE9HhEkRrx5V1qBibEzDjvuIv1gkAwwpknSgjqBztnFBBNMWVCLc7GezwWAwy0Ih4qF9c9GrzNRmQHQd%2BNmlRruazOA%2F3VWpFUoibrF8%2FkMK9i%2FnU0GFuGrHD76hasMq%2Br%2BihPg7%2FtoPMnDpWrprbP1FgzC%2FobRpqRFObtioEhXPEtcvqpzde&X-Amz-Signature=cbb80684b8e3d96038f060ebc55d6c76cf6f365c0c8e95a9dd255ea4adf59ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM5F3NYA%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIAgqMPRFsifeWmZ2V0FskWU3ssNUx8AV1AN2Bxq9U3DAAiEAg4iQ5MpL8uIKrb2jXGwLOlVC8cOHXkxf6Wq4THu5Te0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIGdqmFiSk6yJRi9SrcA9u0MtU00iXkXtF%2BIO2Wqvf0SUsZvlsRfjenEpYQFTsH97FnmY0XJmK1r6W1KpVvAkttj6g%2FhN5m1K5dV820TOzgbFrrdgrF3DXMI9%2BLXXeho27yNgbxr%2BtKjQDect8Ye9tok6kcRSyRBoEHibbGEQPV5e8wUDbLiEyPTuPlxVidDqDUHlFrnTdxR%2B3p8BVRtrQijV2YoOpIMMGuSS2zkHkbhJEA4UgNqcEp4ppvjhVTC9gGJ%2B806Qj%2FNdthNxQqFV5gip4FYNWT61K%2FUAL4QxM4phGg6PhwnszxIxSQDl3OKLL1wQxsO%2FlDp1%2BwJ6Dx%2B8y1MN4ZKkGQfNi%2F8ZwEQ8ErRqqf7KlZF0indHgnqPGf%2F0xSMjc%2BQX4pKvK%2Bf25feVxcVoj9tl5dwgS1xfAFXLVhE5yF690AnLQ2eAlq5pz42G5DrHgPcNPxPyAp0BFSm22Ve%2ByJDmS1t6M9mcdw07f1h0ypgN4FkPDACEeO04fBF%2B7XKRtm8tnD12qkS1Tis8Xig%2Besnqrnn1uAouAnnUqiFsnEjMfdfQOIx4NuneGDm3MrsgqzzKC%2BD7Zjs2cP6P47qgnClXmp3JABc3QGUeJpAkpYfgicxHoco3xs%2BhSERJKXHrXdhUquc9uOMMf9vMEGOqUBpjKGqsEjXY%2Bw167rw3RqQz6vawHYnky3il3ws6ftE9HhEkRrx5V1qBibEzDjvuIv1gkAwwpknSgjqBztnFBBNMWVCLc7GezwWAwy0Ih4qF9c9GrzNRmQHQd%2BNmlRruazOA%2F3VWpFUoibrF8%2FkMK9i%2FnU0GFuGrHD76hasMq%2Br%2BihPg7%2FtoPMnDpWrprbP1FgzC%2FobRpqRFObtioEhXPEtcvqpzde&X-Amz-Signature=b9fef749e15ab89436e5525a96eee579bd00314d232557dcdfbb95c1ade6db82&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
