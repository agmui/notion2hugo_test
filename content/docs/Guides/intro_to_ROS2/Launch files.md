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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666BAERWK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiPx2JH46PK%2F%2F8dGJmX71hikrVO5OF9PSlAXfFlbd5sAiEA6dy5drhrCu4MWbCIcMscQ6c9NPZk0Qo%2FlQdpUk9rau4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJuoXIjMB4p5gRApHCrcA6AHmgZ%2Faf%2BrVkELex2v9dnRpeQbf4REtSpd0d3iJhr4bYDNs9KDjn7FdFJo7Ok6Vkr9qz9w9J%2Bf8Xl%2BOoC1NAZzF%2FL20U7FC04WAj2JlsXPBAFO2i5A1%2Bj2B86UfX43bA7Bpx06vywizk0lbmpfAK%2FA2htgwXdIC91%2FwQNUUFjQJr3ccZLd5xKab9ocTyFTBDl7UrprLF74BJ2KvKCzfWaqLBYYvP9460a5KfzYXxbLKObUK4tbF2iH%2B4xl6cYvCj7PEBVwMK5ptkWBr50Px%2Bb3mZewkPI3ONRM8XESsCdkKaq7Ak%2BTbHZ4r7WMb7Pfy%2BPflR5gvF29MBYbMk3vcAYL5D1UvEO7H9Nu1NOKpcQrAaCvqkGbM0eq7zgVLK5uwZcQqPlQ6uBUvAGrMtMwSfysXu8J2eM0FJOiz7m26pDPit%2BQWgeMSpgb1Lv5htjDntnl%2BpbsF3mujvt3nX%2Fk4cKqKL42a1GkPAqQhVOmSxzkl3g1gWodwSM6EzeXWoue19pZt%2BG3i9sTrer7wvLvyQPyMrC3%2BrWl9L3UvYRVpQfVOSBMgv8NW%2FyOk%2BUqCb%2Bu8oziEiyhwVPVugsx%2BoTut%2BhGrCreZmyJpBbGVCW%2BwJq5WYmMW5%2FaDTTGVFN8MIGtiMAGOqUBywnxv5duPA0OXsb5n7Bo4P7ls9QLVpfXeaboEzMpEBIcWi54Bfm%2FcgxTnFjmwMZaQnCoL5kvst09ztukSvkVotPolF0Aj4FvbhnZGut9CEgPKMVVU2l6ZVbbqey0VRRIRVjbzyp86kL%2BiGbSZWyU7p791Plj0SsLzFYYWgIZt3vwi5h4a11eN4X812u4%2FzUFDW%2FGT1NEbX1AImW45UQvescWkKlg&X-Amz-Signature=b9a9dc8c6f9b1b3bbeba4737635b210aa89a7617acb5af4b3c954331535f505c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666BAERWK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiPx2JH46PK%2F%2F8dGJmX71hikrVO5OF9PSlAXfFlbd5sAiEA6dy5drhrCu4MWbCIcMscQ6c9NPZk0Qo%2FlQdpUk9rau4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJuoXIjMB4p5gRApHCrcA6AHmgZ%2Faf%2BrVkELex2v9dnRpeQbf4REtSpd0d3iJhr4bYDNs9KDjn7FdFJo7Ok6Vkr9qz9w9J%2Bf8Xl%2BOoC1NAZzF%2FL20U7FC04WAj2JlsXPBAFO2i5A1%2Bj2B86UfX43bA7Bpx06vywizk0lbmpfAK%2FA2htgwXdIC91%2FwQNUUFjQJr3ccZLd5xKab9ocTyFTBDl7UrprLF74BJ2KvKCzfWaqLBYYvP9460a5KfzYXxbLKObUK4tbF2iH%2B4xl6cYvCj7PEBVwMK5ptkWBr50Px%2Bb3mZewkPI3ONRM8XESsCdkKaq7Ak%2BTbHZ4r7WMb7Pfy%2BPflR5gvF29MBYbMk3vcAYL5D1UvEO7H9Nu1NOKpcQrAaCvqkGbM0eq7zgVLK5uwZcQqPlQ6uBUvAGrMtMwSfysXu8J2eM0FJOiz7m26pDPit%2BQWgeMSpgb1Lv5htjDntnl%2BpbsF3mujvt3nX%2Fk4cKqKL42a1GkPAqQhVOmSxzkl3g1gWodwSM6EzeXWoue19pZt%2BG3i9sTrer7wvLvyQPyMrC3%2BrWl9L3UvYRVpQfVOSBMgv8NW%2FyOk%2BUqCb%2Bu8oziEiyhwVPVugsx%2BoTut%2BhGrCreZmyJpBbGVCW%2BwJq5WYmMW5%2FaDTTGVFN8MIGtiMAGOqUBywnxv5duPA0OXsb5n7Bo4P7ls9QLVpfXeaboEzMpEBIcWi54Bfm%2FcgxTnFjmwMZaQnCoL5kvst09ztukSvkVotPolF0Aj4FvbhnZGut9CEgPKMVVU2l6ZVbbqey0VRRIRVjbzyp86kL%2BiGbSZWyU7p791Plj0SsLzFYYWgIZt3vwi5h4a11eN4X812u4%2FzUFDW%2FGT1NEbX1AImW45UQvescWkKlg&X-Amz-Signature=93ccb09aa9c681d7dfd5d707cd3c6d95b796da57851d97675c94613050d72558&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666BAERWK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiPx2JH46PK%2F%2F8dGJmX71hikrVO5OF9PSlAXfFlbd5sAiEA6dy5drhrCu4MWbCIcMscQ6c9NPZk0Qo%2FlQdpUk9rau4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJuoXIjMB4p5gRApHCrcA6AHmgZ%2Faf%2BrVkELex2v9dnRpeQbf4REtSpd0d3iJhr4bYDNs9KDjn7FdFJo7Ok6Vkr9qz9w9J%2Bf8Xl%2BOoC1NAZzF%2FL20U7FC04WAj2JlsXPBAFO2i5A1%2Bj2B86UfX43bA7Bpx06vywizk0lbmpfAK%2FA2htgwXdIC91%2FwQNUUFjQJr3ccZLd5xKab9ocTyFTBDl7UrprLF74BJ2KvKCzfWaqLBYYvP9460a5KfzYXxbLKObUK4tbF2iH%2B4xl6cYvCj7PEBVwMK5ptkWBr50Px%2Bb3mZewkPI3ONRM8XESsCdkKaq7Ak%2BTbHZ4r7WMb7Pfy%2BPflR5gvF29MBYbMk3vcAYL5D1UvEO7H9Nu1NOKpcQrAaCvqkGbM0eq7zgVLK5uwZcQqPlQ6uBUvAGrMtMwSfysXu8J2eM0FJOiz7m26pDPit%2BQWgeMSpgb1Lv5htjDntnl%2BpbsF3mujvt3nX%2Fk4cKqKL42a1GkPAqQhVOmSxzkl3g1gWodwSM6EzeXWoue19pZt%2BG3i9sTrer7wvLvyQPyMrC3%2BrWl9L3UvYRVpQfVOSBMgv8NW%2FyOk%2BUqCb%2Bu8oziEiyhwVPVugsx%2BoTut%2BhGrCreZmyJpBbGVCW%2BwJq5WYmMW5%2FaDTTGVFN8MIGtiMAGOqUBywnxv5duPA0OXsb5n7Bo4P7ls9QLVpfXeaboEzMpEBIcWi54Bfm%2FcgxTnFjmwMZaQnCoL5kvst09ztukSvkVotPolF0Aj4FvbhnZGut9CEgPKMVVU2l6ZVbbqey0VRRIRVjbzyp86kL%2BiGbSZWyU7p791Plj0SsLzFYYWgIZt3vwi5h4a11eN4X812u4%2FzUFDW%2FGT1NEbX1AImW45UQvescWkKlg&X-Amz-Signature=6930baa4eeb9b63ed1e276157d6a48bc7cfe07aa5dd0f66b2a5551b88e6afac2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
