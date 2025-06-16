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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6OZKREP%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQD%2FD9dnYrXqYdUS9tFo%2FC4jZEfx7HdP45Fp2S1y%2B96%2B%2BgIgH1VcjrWOIzyCjde967xFgXYptkzLJ%2BNeZ%2F1aShulQgcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLggJxdKh7aO3%2FV68SrcA0rrC9cGb4zHukesi3CNB5S%2FhNRqMtQS5ReYOLRamrwGo0%2BsVyjgT5UKgQ15umKZ0DOQZTvUGXbKNH3OOhrUIW9SjxbM%2Bc%2FdqSZ7cNvhlJPNVpVDVeMawp4VWgfVQHfi7y8qpsgppygxI%2BL9a%2FLhkFO2I1SHP1DZOVPQPNPso5J%2FbWUjyYxGRD1ul2J6P24rJY5LjSk99jDcmWQFfBVHg4O1UyOZMAsAqatj1LthLWe2V42XgjJKzXDAtr1NXQ5%2B5L3U4mH2yhXalMoJY3xcJqX%2F5BxnTHqP8ZiuNMCN9QmqMfknluBMI2ldHy69rsTCPTEiu43aUlhgdcLCAjBIVJwIwohdxH1hla16QEsSqq3A%2F1btu1miPFbqHuj8KwC4SqG3CJPUVrMl5kYe2gVNPzXJQ64xIUNkklAcYaGRZWYto3HM3eePPLPFQXXSe%2BEw3d5a%2FRZDbGARtDBVat2NgsrjWiBCMaGwDNt%2BVK%2FyunfStgelWJTi%2BkFzu8ZUcXqb34Oj0U%2FyjwpYGFF9XZsl3bmwcl8D3r9gkmCrhLiPBijYqjkIq%2BlaiOrb1dwaLJs7%2Be2R8igV4SaULVlPeFoAWiHnGWTlBKA1Lan6q2N1Xi%2FfdqaqYaaGwG7tfndvMMavwcIGOqUBb7xH2vuioagMKtxLzVqv4Tdl1tKZCJGdnb%2F5%2B4JKNpYbK8KqFtopNbr5TZMYjQufFwpa6m5m%2FGl%2FvO8Gy0FVZHuXfZddpqyA6tF6fAe4FddAYnJ6KGvCC6o%2F%2BjqXO5pHGu3M1MV4R3%2BQIQSq0krfpK1bXJx7hyK0ND3%2FylzitzacYdlXVvUwBSf0mFJmE4tm9mUmkjrVg0fX4HYIoET6nKj0sY8y&X-Amz-Signature=58d63caf74838bd3a2127babeb4e988f5e1117707993a228afd78d984d1c8715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6OZKREP%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQD%2FD9dnYrXqYdUS9tFo%2FC4jZEfx7HdP45Fp2S1y%2B96%2B%2BgIgH1VcjrWOIzyCjde967xFgXYptkzLJ%2BNeZ%2F1aShulQgcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLggJxdKh7aO3%2FV68SrcA0rrC9cGb4zHukesi3CNB5S%2FhNRqMtQS5ReYOLRamrwGo0%2BsVyjgT5UKgQ15umKZ0DOQZTvUGXbKNH3OOhrUIW9SjxbM%2Bc%2FdqSZ7cNvhlJPNVpVDVeMawp4VWgfVQHfi7y8qpsgppygxI%2BL9a%2FLhkFO2I1SHP1DZOVPQPNPso5J%2FbWUjyYxGRD1ul2J6P24rJY5LjSk99jDcmWQFfBVHg4O1UyOZMAsAqatj1LthLWe2V42XgjJKzXDAtr1NXQ5%2B5L3U4mH2yhXalMoJY3xcJqX%2F5BxnTHqP8ZiuNMCN9QmqMfknluBMI2ldHy69rsTCPTEiu43aUlhgdcLCAjBIVJwIwohdxH1hla16QEsSqq3A%2F1btu1miPFbqHuj8KwC4SqG3CJPUVrMl5kYe2gVNPzXJQ64xIUNkklAcYaGRZWYto3HM3eePPLPFQXXSe%2BEw3d5a%2FRZDbGARtDBVat2NgsrjWiBCMaGwDNt%2BVK%2FyunfStgelWJTi%2BkFzu8ZUcXqb34Oj0U%2FyjwpYGFF9XZsl3bmwcl8D3r9gkmCrhLiPBijYqjkIq%2BlaiOrb1dwaLJs7%2Be2R8igV4SaULVlPeFoAWiHnGWTlBKA1Lan6q2N1Xi%2FfdqaqYaaGwG7tfndvMMavwcIGOqUBb7xH2vuioagMKtxLzVqv4Tdl1tKZCJGdnb%2F5%2B4JKNpYbK8KqFtopNbr5TZMYjQufFwpa6m5m%2FGl%2FvO8Gy0FVZHuXfZddpqyA6tF6fAe4FddAYnJ6KGvCC6o%2F%2BjqXO5pHGu3M1MV4R3%2BQIQSq0krfpK1bXJx7hyK0ND3%2FylzitzacYdlXVvUwBSf0mFJmE4tm9mUmkjrVg0fX4HYIoET6nKj0sY8y&X-Amz-Signature=0738ad9e0a2f17f34f845c28ca49631e1aef9620c18072c0f05ebd21019dcdb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6OZKREP%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQD%2FD9dnYrXqYdUS9tFo%2FC4jZEfx7HdP45Fp2S1y%2B96%2B%2BgIgH1VcjrWOIzyCjde967xFgXYptkzLJ%2BNeZ%2F1aShulQgcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLggJxdKh7aO3%2FV68SrcA0rrC9cGb4zHukesi3CNB5S%2FhNRqMtQS5ReYOLRamrwGo0%2BsVyjgT5UKgQ15umKZ0DOQZTvUGXbKNH3OOhrUIW9SjxbM%2Bc%2FdqSZ7cNvhlJPNVpVDVeMawp4VWgfVQHfi7y8qpsgppygxI%2BL9a%2FLhkFO2I1SHP1DZOVPQPNPso5J%2FbWUjyYxGRD1ul2J6P24rJY5LjSk99jDcmWQFfBVHg4O1UyOZMAsAqatj1LthLWe2V42XgjJKzXDAtr1NXQ5%2B5L3U4mH2yhXalMoJY3xcJqX%2F5BxnTHqP8ZiuNMCN9QmqMfknluBMI2ldHy69rsTCPTEiu43aUlhgdcLCAjBIVJwIwohdxH1hla16QEsSqq3A%2F1btu1miPFbqHuj8KwC4SqG3CJPUVrMl5kYe2gVNPzXJQ64xIUNkklAcYaGRZWYto3HM3eePPLPFQXXSe%2BEw3d5a%2FRZDbGARtDBVat2NgsrjWiBCMaGwDNt%2BVK%2FyunfStgelWJTi%2BkFzu8ZUcXqb34Oj0U%2FyjwpYGFF9XZsl3bmwcl8D3r9gkmCrhLiPBijYqjkIq%2BlaiOrb1dwaLJs7%2Be2R8igV4SaULVlPeFoAWiHnGWTlBKA1Lan6q2N1Xi%2FfdqaqYaaGwG7tfndvMMavwcIGOqUBb7xH2vuioagMKtxLzVqv4Tdl1tKZCJGdnb%2F5%2B4JKNpYbK8KqFtopNbr5TZMYjQufFwpa6m5m%2FGl%2FvO8Gy0FVZHuXfZddpqyA6tF6fAe4FddAYnJ6KGvCC6o%2F%2BjqXO5pHGu3M1MV4R3%2BQIQSq0krfpK1bXJx7hyK0ND3%2FylzitzacYdlXVvUwBSf0mFJmE4tm9mUmkjrVg0fX4HYIoET6nKj0sY8y&X-Amz-Signature=3934e0c471b0e0b6367a1d14dd37e8a21434d2e67ce179159e2e839158db785d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
