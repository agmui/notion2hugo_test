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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2YZWQD%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmtqu6F04D3xkfGUroLZwSSDRxxHwRnvx%2BMZlCkKccDAiEAy5a7cqyvVRnboPqDfrJyJ6bGdxcZEvwHyfCGEVUz4Egq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDARECdp0973bnkBDGCrcA9k4u0iFx5kV4QztbHbnbyu3RYq%2FAko21v4tVUeSJ2L4ZTkKm3L4ErJu2hxbHjCuGFte0JbChCPMQZJaLLn8D%2B%2By6S2Awh%2Fmj%2FaZOTb4nzgJjnNCdCNHO%2BjVifcucrDkU4YjfOH%2FMTk6wTop8VRICNy2vexWBIOjR3ASJ7rfTRnF5YBqixU9L%2BmEWTd2CgCwfpNqvZrzA45F1iK7hxL9KgO5WzjPAXP7x62904Q46ikU1Tb%2F9Sq9wBAgVXG9Kug%2B%2Fxw13KSm%2FYreGMOKvEWABQK5J10CD0W9cf0zaHox2ciqxTiReuXrBD9K4%2BoVG8brFJmVxXAPN20uF%2B2xpFI8Ec2UTc22qhf8P5%2B1Qp29rAyknr58aPCKJbYSfXaOASKEJ1doK8H%2FYeSMjzqQ9xnBl7%2BqeYkzr53YSu3t8CDwFyVSTqQMF1JEe3fuCjEvvTmjD45Umm7oWeuFoEeJUBDXLK7T6fdohMLfgGfZeeIdu2flaJokXfbspL0tvdFSgpny%2FkbmFvSjeamEmuQy6heJz3%2FKaXgljf08%2FQI6tnA8Ik5%2Fr6l3onx%2BQ0bct5RdZR26RcN1TRht0CnhoIYr2%2BwiumxTrnFcQgGYv4veY6zbXGzGomg93F7CI%2F747tM0MNWcwL8GOqUBKE5%2FessGfliYSdVKOTT9rbAqLo93lRsA%2FGV2ppK2tkihQSu7wDodc8AJUznAzA%2FbcMbjkcX3urCa2Lu%2BhqrJ13R0RPleBxL3fWKs%2BhnkVCjwcyE9xUrXzqPP%2B1Q1EjgLnE3hq%2FNYnLR3KYWGjG44RLYOcwEdAoj1S4ulyAelEGajHgMkebjR2hcQ3RcRrndwVbbJhdd0WU9QWt0AISai91ql748s&X-Amz-Signature=641c4c8d939a30e85101a4fa071fe3a043279b5d10fef131a804699635bab3e1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2YZWQD%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmtqu6F04D3xkfGUroLZwSSDRxxHwRnvx%2BMZlCkKccDAiEAy5a7cqyvVRnboPqDfrJyJ6bGdxcZEvwHyfCGEVUz4Egq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDARECdp0973bnkBDGCrcA9k4u0iFx5kV4QztbHbnbyu3RYq%2FAko21v4tVUeSJ2L4ZTkKm3L4ErJu2hxbHjCuGFte0JbChCPMQZJaLLn8D%2B%2By6S2Awh%2Fmj%2FaZOTb4nzgJjnNCdCNHO%2BjVifcucrDkU4YjfOH%2FMTk6wTop8VRICNy2vexWBIOjR3ASJ7rfTRnF5YBqixU9L%2BmEWTd2CgCwfpNqvZrzA45F1iK7hxL9KgO5WzjPAXP7x62904Q46ikU1Tb%2F9Sq9wBAgVXG9Kug%2B%2Fxw13KSm%2FYreGMOKvEWABQK5J10CD0W9cf0zaHox2ciqxTiReuXrBD9K4%2BoVG8brFJmVxXAPN20uF%2B2xpFI8Ec2UTc22qhf8P5%2B1Qp29rAyknr58aPCKJbYSfXaOASKEJ1doK8H%2FYeSMjzqQ9xnBl7%2BqeYkzr53YSu3t8CDwFyVSTqQMF1JEe3fuCjEvvTmjD45Umm7oWeuFoEeJUBDXLK7T6fdohMLfgGfZeeIdu2flaJokXfbspL0tvdFSgpny%2FkbmFvSjeamEmuQy6heJz3%2FKaXgljf08%2FQI6tnA8Ik5%2Fr6l3onx%2BQ0bct5RdZR26RcN1TRht0CnhoIYr2%2BwiumxTrnFcQgGYv4veY6zbXGzGomg93F7CI%2F747tM0MNWcwL8GOqUBKE5%2FessGfliYSdVKOTT9rbAqLo93lRsA%2FGV2ppK2tkihQSu7wDodc8AJUznAzA%2FbcMbjkcX3urCa2Lu%2BhqrJ13R0RPleBxL3fWKs%2BhnkVCjwcyE9xUrXzqPP%2B1Q1EjgLnE3hq%2FNYnLR3KYWGjG44RLYOcwEdAoj1S4ulyAelEGajHgMkebjR2hcQ3RcRrndwVbbJhdd0WU9QWt0AISai91ql748s&X-Amz-Signature=ec7c82f394ade87ccc1856d70405807fef16b4ef0f9da0153648d79f3d03e152&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2YZWQD%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmtqu6F04D3xkfGUroLZwSSDRxxHwRnvx%2BMZlCkKccDAiEAy5a7cqyvVRnboPqDfrJyJ6bGdxcZEvwHyfCGEVUz4Egq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDARECdp0973bnkBDGCrcA9k4u0iFx5kV4QztbHbnbyu3RYq%2FAko21v4tVUeSJ2L4ZTkKm3L4ErJu2hxbHjCuGFte0JbChCPMQZJaLLn8D%2B%2By6S2Awh%2Fmj%2FaZOTb4nzgJjnNCdCNHO%2BjVifcucrDkU4YjfOH%2FMTk6wTop8VRICNy2vexWBIOjR3ASJ7rfTRnF5YBqixU9L%2BmEWTd2CgCwfpNqvZrzA45F1iK7hxL9KgO5WzjPAXP7x62904Q46ikU1Tb%2F9Sq9wBAgVXG9Kug%2B%2Fxw13KSm%2FYreGMOKvEWABQK5J10CD0W9cf0zaHox2ciqxTiReuXrBD9K4%2BoVG8brFJmVxXAPN20uF%2B2xpFI8Ec2UTc22qhf8P5%2B1Qp29rAyknr58aPCKJbYSfXaOASKEJ1doK8H%2FYeSMjzqQ9xnBl7%2BqeYkzr53YSu3t8CDwFyVSTqQMF1JEe3fuCjEvvTmjD45Umm7oWeuFoEeJUBDXLK7T6fdohMLfgGfZeeIdu2flaJokXfbspL0tvdFSgpny%2FkbmFvSjeamEmuQy6heJz3%2FKaXgljf08%2FQI6tnA8Ik5%2Fr6l3onx%2BQ0bct5RdZR26RcN1TRht0CnhoIYr2%2BwiumxTrnFcQgGYv4veY6zbXGzGomg93F7CI%2F747tM0MNWcwL8GOqUBKE5%2FessGfliYSdVKOTT9rbAqLo93lRsA%2FGV2ppK2tkihQSu7wDodc8AJUznAzA%2FbcMbjkcX3urCa2Lu%2BhqrJ13R0RPleBxL3fWKs%2BhnkVCjwcyE9xUrXzqPP%2B1Q1EjgLnE3hq%2FNYnLR3KYWGjG44RLYOcwEdAoj1S4ulyAelEGajHgMkebjR2hcQ3RcRrndwVbbJhdd0WU9QWt0AISai91ql748s&X-Amz-Signature=b14a14f0be240247f992933a04b4ca525e83dc60a5468c0a5389230b94a73931&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
