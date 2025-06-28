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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTEP22S%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFlQix6AYNIHU%2BGSFzeTgMbJ1UBgz3E1ynikjiqY0K7AiEAiPWSQrn8WGsyHhnWdW5ZewS%2Bx4Qm%2Bj41YFLBTM%2FrhpEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8IP8A76xlZZ7TX%2BSrcA55BDHe36WOWzhc6nCmFPpBqgkMw%2BL2ZT7%2F%2BpJXIDXqKXTpLZ68Gabrj6lYGGkZiwe0bLhxerdu1XpoCJIch33sxu3IFibgUQUriqyAZ9ElLH%2BYOS8vinAv29BijQ%2F%2B4IsIOYkujBuK0PWk7BPgz3KzVY54BmzwQpdsFAfPEX76kkL36xmkwJUm7QgBui%2FcmadUBmJZHcZCBdjYgZrOQg7EUQD2O5tabYKNoUuj%2Fyeqfolquf0JgI%2Fqk7VfVGan1RYtwe4EWet2lsXytflkT1lxGeo55hBXVj54jQ%2Bq2P8SGLjBKLpIQPzKNRSwfW%2FzdhsvY1MYszqNd1QEHim7Hyws80AQ9HsSIyQ9VOKLyn5bQSC2CIpMCo9ttKZTs9r3Gii1QEWL3Rx%2BEHf%2BtzXsCcYFQ4L0lbOz1tURjYNCzn9b4nBhhgkJcfalgNW%2BWn%2BQux5bdZ1gPa%2FqxW4%2Fcjycq77aub%2BHOEaGwttGFFrTJO2gl8YDp13%2BW39Ls%2BcXYXsTt8f9nXj7t3Hzgf5cP1uEuOp1jXzESQxP7uz86v%2Fc%2Fel96Tqg2VUtG%2F2WalIlJV1Qt%2F1EY8S39HGGUAltP7XF%2BklBoiLXAm%2BBHPN8%2BAcDqevvmzlM7C8UiNRIJ10HKMMaQ%2F8IGOqUBaDn%2FjPvri3GTjiPj6EjQ6ocQ5OS9k0FAOT4tebTFnC2S3zcIgzT9goghMM8kYaqH711iWpFlmEwkJMvKA1v%2FT7guuKr45Dplwu%2F8TyghmsELpf5uKBfdLjrnFuBj5wg0KqmGmE5edmJ%2BcvZhaPQFZVjKsGIiV4q3t6m8MypxZ3CvGNjpp%2FtqDTkGa%2Fpc%2FQpbozve39O7YFCYrYG8JIAmgZ9C4Gkl&X-Amz-Signature=69f183c2807cdde0dc6d925cc4d12e504873ff4aed31a0f2675926a9f59ac2bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTEP22S%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFlQix6AYNIHU%2BGSFzeTgMbJ1UBgz3E1ynikjiqY0K7AiEAiPWSQrn8WGsyHhnWdW5ZewS%2Bx4Qm%2Bj41YFLBTM%2FrhpEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8IP8A76xlZZ7TX%2BSrcA55BDHe36WOWzhc6nCmFPpBqgkMw%2BL2ZT7%2F%2BpJXIDXqKXTpLZ68Gabrj6lYGGkZiwe0bLhxerdu1XpoCJIch33sxu3IFibgUQUriqyAZ9ElLH%2BYOS8vinAv29BijQ%2F%2B4IsIOYkujBuK0PWk7BPgz3KzVY54BmzwQpdsFAfPEX76kkL36xmkwJUm7QgBui%2FcmadUBmJZHcZCBdjYgZrOQg7EUQD2O5tabYKNoUuj%2Fyeqfolquf0JgI%2Fqk7VfVGan1RYtwe4EWet2lsXytflkT1lxGeo55hBXVj54jQ%2Bq2P8SGLjBKLpIQPzKNRSwfW%2FzdhsvY1MYszqNd1QEHim7Hyws80AQ9HsSIyQ9VOKLyn5bQSC2CIpMCo9ttKZTs9r3Gii1QEWL3Rx%2BEHf%2BtzXsCcYFQ4L0lbOz1tURjYNCzn9b4nBhhgkJcfalgNW%2BWn%2BQux5bdZ1gPa%2FqxW4%2Fcjycq77aub%2BHOEaGwttGFFrTJO2gl8YDp13%2BW39Ls%2BcXYXsTt8f9nXj7t3Hzgf5cP1uEuOp1jXzESQxP7uz86v%2Fc%2Fel96Tqg2VUtG%2F2WalIlJV1Qt%2F1EY8S39HGGUAltP7XF%2BklBoiLXAm%2BBHPN8%2BAcDqevvmzlM7C8UiNRIJ10HKMMaQ%2F8IGOqUBaDn%2FjPvri3GTjiPj6EjQ6ocQ5OS9k0FAOT4tebTFnC2S3zcIgzT9goghMM8kYaqH711iWpFlmEwkJMvKA1v%2FT7guuKr45Dplwu%2F8TyghmsELpf5uKBfdLjrnFuBj5wg0KqmGmE5edmJ%2BcvZhaPQFZVjKsGIiV4q3t6m8MypxZ3CvGNjpp%2FtqDTkGa%2Fpc%2FQpbozve39O7YFCYrYG8JIAmgZ9C4Gkl&X-Amz-Signature=27d7228e1a5d3ea3c1f0e44963640ced47835527d796b8ed3914e5d7b7653265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTEP22S%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFlQix6AYNIHU%2BGSFzeTgMbJ1UBgz3E1ynikjiqY0K7AiEAiPWSQrn8WGsyHhnWdW5ZewS%2Bx4Qm%2Bj41YFLBTM%2FrhpEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8IP8A76xlZZ7TX%2BSrcA55BDHe36WOWzhc6nCmFPpBqgkMw%2BL2ZT7%2F%2BpJXIDXqKXTpLZ68Gabrj6lYGGkZiwe0bLhxerdu1XpoCJIch33sxu3IFibgUQUriqyAZ9ElLH%2BYOS8vinAv29BijQ%2F%2B4IsIOYkujBuK0PWk7BPgz3KzVY54BmzwQpdsFAfPEX76kkL36xmkwJUm7QgBui%2FcmadUBmJZHcZCBdjYgZrOQg7EUQD2O5tabYKNoUuj%2Fyeqfolquf0JgI%2Fqk7VfVGan1RYtwe4EWet2lsXytflkT1lxGeo55hBXVj54jQ%2Bq2P8SGLjBKLpIQPzKNRSwfW%2FzdhsvY1MYszqNd1QEHim7Hyws80AQ9HsSIyQ9VOKLyn5bQSC2CIpMCo9ttKZTs9r3Gii1QEWL3Rx%2BEHf%2BtzXsCcYFQ4L0lbOz1tURjYNCzn9b4nBhhgkJcfalgNW%2BWn%2BQux5bdZ1gPa%2FqxW4%2Fcjycq77aub%2BHOEaGwttGFFrTJO2gl8YDp13%2BW39Ls%2BcXYXsTt8f9nXj7t3Hzgf5cP1uEuOp1jXzESQxP7uz86v%2Fc%2Fel96Tqg2VUtG%2F2WalIlJV1Qt%2F1EY8S39HGGUAltP7XF%2BklBoiLXAm%2BBHPN8%2BAcDqevvmzlM7C8UiNRIJ10HKMMaQ%2F8IGOqUBaDn%2FjPvri3GTjiPj6EjQ6ocQ5OS9k0FAOT4tebTFnC2S3zcIgzT9goghMM8kYaqH711iWpFlmEwkJMvKA1v%2FT7guuKr45Dplwu%2F8TyghmsELpf5uKBfdLjrnFuBj5wg0KqmGmE5edmJ%2BcvZhaPQFZVjKsGIiV4q3t6m8MypxZ3CvGNjpp%2FtqDTkGa%2Fpc%2FQpbozve39O7YFCYrYG8JIAmgZ9C4Gkl&X-Amz-Signature=bdee15204bf1b24e5cbdd07ba90c494573decab693ba0f51a597c28f5b2ec818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
