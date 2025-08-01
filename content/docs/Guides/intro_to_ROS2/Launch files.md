---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RQSRZ3Y%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWL2x5ftTOSIUrTT6NtY%2Fj3Xz7coHLNnj1KesRi51WLAIhANv6%2BZ%2B6MuyJTz4JrIrkuMKpVVnkXEMzNg6OprFQcNoFKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn2e%2FlPDc%2FMYvKbU4q3APN13DQYZqIt4KkLkRcouqUwD2z0tCk4zNTKjfkxux3ln%2FUEInhFQ9BonfK%2Faavs9kxnuvcLaKRy%2Br2xX64WvY0NPnnPzxWPMHh1qm2eQwars6yqpS%2BTJhVfenrC%2BIsS7kEZkvMebzOaMeC%2FXOl7r9PHNMHgFbePXoM9%2BZnu18%2B26%2B7KjmGEIFGHFY5yFdJxX0NEuhnHYS4zhnXjMDIbPBzXtXZ3ur5SRMb1GwvYnmV03F%2B1rtXonUbfXMb9RpNSrpKNwYfXYGq5f2rCc0A56SuzLXP1rHfvt2YAsNthbHLf1fpCOtS%2B4D4LgOodk1iYdyTVnOjX5c6OuGfrMENJBZGpPq1KScHznnN9%2FK9vU6O5VmTjprMUGQ6bS3sf7EQsc05%2BDFQkxpiCzrUjBj0p7RtQgpuQxgVEZGdhEaiaHnXugibZBjhcR7sPBRReYA9ILuF%2BZhIlNSLzXwpC5KdUAtW%2B0IszDVvn%2BZt6SipDMbnqsgkLQqmdvflzVY1pFEwFrm1Nb2Nl7wN2r21UbseG5INP2xvrybhl170KWglPzWQMK24pj3vaYLBIWBExFE0boJjjtCO0MLiDPmeYUzUno7P2AFc%2FkaZmBlCii1kLtvrLCEQvCR8fjsI8eB%2BmTDFobTEBjqkARWRKwY3xTFP2%2BMUQ8jM0wpWE5JyBdUR5T%2BL3purPiLOT9gX0NCsXRZrUxj2Bw6TTeLERN%2B7BB1RPTzy%2FWxTevd543xD%2FmYor82Tb%2Fer79fZtPjhlRc74G5F83SLLPCW1ev4YzNnsP2sVH%2Fv1iQ3CLKWpzvHx7bIbhtK%2F4y2t8YJHJfTJXqXKSqO%2BbmJbWYSZMU61tMpnKMkbb%2B%2Bx6VhkA2NBy3A&X-Amz-Signature=d47dccafe8a7db37983b13ddb6143c6d63d1903cd8f9d0352970f2cb7b5b20c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RQSRZ3Y%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWL2x5ftTOSIUrTT6NtY%2Fj3Xz7coHLNnj1KesRi51WLAIhANv6%2BZ%2B6MuyJTz4JrIrkuMKpVVnkXEMzNg6OprFQcNoFKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn2e%2FlPDc%2FMYvKbU4q3APN13DQYZqIt4KkLkRcouqUwD2z0tCk4zNTKjfkxux3ln%2FUEInhFQ9BonfK%2Faavs9kxnuvcLaKRy%2Br2xX64WvY0NPnnPzxWPMHh1qm2eQwars6yqpS%2BTJhVfenrC%2BIsS7kEZkvMebzOaMeC%2FXOl7r9PHNMHgFbePXoM9%2BZnu18%2B26%2B7KjmGEIFGHFY5yFdJxX0NEuhnHYS4zhnXjMDIbPBzXtXZ3ur5SRMb1GwvYnmV03F%2B1rtXonUbfXMb9RpNSrpKNwYfXYGq5f2rCc0A56SuzLXP1rHfvt2YAsNthbHLf1fpCOtS%2B4D4LgOodk1iYdyTVnOjX5c6OuGfrMENJBZGpPq1KScHznnN9%2FK9vU6O5VmTjprMUGQ6bS3sf7EQsc05%2BDFQkxpiCzrUjBj0p7RtQgpuQxgVEZGdhEaiaHnXugibZBjhcR7sPBRReYA9ILuF%2BZhIlNSLzXwpC5KdUAtW%2B0IszDVvn%2BZt6SipDMbnqsgkLQqmdvflzVY1pFEwFrm1Nb2Nl7wN2r21UbseG5INP2xvrybhl170KWglPzWQMK24pj3vaYLBIWBExFE0boJjjtCO0MLiDPmeYUzUno7P2AFc%2FkaZmBlCii1kLtvrLCEQvCR8fjsI8eB%2BmTDFobTEBjqkARWRKwY3xTFP2%2BMUQ8jM0wpWE5JyBdUR5T%2BL3purPiLOT9gX0NCsXRZrUxj2Bw6TTeLERN%2B7BB1RPTzy%2FWxTevd543xD%2FmYor82Tb%2Fer79fZtPjhlRc74G5F83SLLPCW1ev4YzNnsP2sVH%2Fv1iQ3CLKWpzvHx7bIbhtK%2F4y2t8YJHJfTJXqXKSqO%2BbmJbWYSZMU61tMpnKMkbb%2B%2Bx6VhkA2NBy3A&X-Amz-Signature=005b3a45ebe6ea0e71aaf7b0ca43f9d8679876ee058cb5ba24e66391d52bcfde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RQSRZ3Y%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWL2x5ftTOSIUrTT6NtY%2Fj3Xz7coHLNnj1KesRi51WLAIhANv6%2BZ%2B6MuyJTz4JrIrkuMKpVVnkXEMzNg6OprFQcNoFKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyn2e%2FlPDc%2FMYvKbU4q3APN13DQYZqIt4KkLkRcouqUwD2z0tCk4zNTKjfkxux3ln%2FUEInhFQ9BonfK%2Faavs9kxnuvcLaKRy%2Br2xX64WvY0NPnnPzxWPMHh1qm2eQwars6yqpS%2BTJhVfenrC%2BIsS7kEZkvMebzOaMeC%2FXOl7r9PHNMHgFbePXoM9%2BZnu18%2B26%2B7KjmGEIFGHFY5yFdJxX0NEuhnHYS4zhnXjMDIbPBzXtXZ3ur5SRMb1GwvYnmV03F%2B1rtXonUbfXMb9RpNSrpKNwYfXYGq5f2rCc0A56SuzLXP1rHfvt2YAsNthbHLf1fpCOtS%2B4D4LgOodk1iYdyTVnOjX5c6OuGfrMENJBZGpPq1KScHznnN9%2FK9vU6O5VmTjprMUGQ6bS3sf7EQsc05%2BDFQkxpiCzrUjBj0p7RtQgpuQxgVEZGdhEaiaHnXugibZBjhcR7sPBRReYA9ILuF%2BZhIlNSLzXwpC5KdUAtW%2B0IszDVvn%2BZt6SipDMbnqsgkLQqmdvflzVY1pFEwFrm1Nb2Nl7wN2r21UbseG5INP2xvrybhl170KWglPzWQMK24pj3vaYLBIWBExFE0boJjjtCO0MLiDPmeYUzUno7P2AFc%2FkaZmBlCii1kLtvrLCEQvCR8fjsI8eB%2BmTDFobTEBjqkARWRKwY3xTFP2%2BMUQ8jM0wpWE5JyBdUR5T%2BL3purPiLOT9gX0NCsXRZrUxj2Bw6TTeLERN%2B7BB1RPTzy%2FWxTevd543xD%2FmYor82Tb%2Fer79fZtPjhlRc74G5F83SLLPCW1ev4YzNnsP2sVH%2Fv1iQ3CLKWpzvHx7bIbhtK%2F4y2t8YJHJfTJXqXKSqO%2BbmJbWYSZMU61tMpnKMkbb%2B%2Bx6VhkA2NBy3A&X-Amz-Signature=eafc34668275a64b89b5dfd7fdb3ee10cc24aa14fe7c07ef9004f0eaf19cbe3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
