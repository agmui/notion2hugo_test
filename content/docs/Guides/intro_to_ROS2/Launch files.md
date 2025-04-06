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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657KFXKTY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOM17Ksrrf%2F6tKKg9S8Nd1ploW9inatYV3EqmvFzoP1QIhAIPQFRXlVevNHYBRnmvxFIIDzsfeEzX%2FAFM8HQt1L%2FO0Kv8DCDwQABoMNjM3NDIzMTgzODA1IgxdoPScjpOnT%2F%2FHWwAq3ANMMN%2Br2Z%2BaVszDBER2ArPiwsxkrWAmrNee7WEtJGY5u8og%2Bf%2FiC3yFR5e49IcunbpI6TJOqlLGcTaGnfiJm7L8XqiKYO7AZbOZfU%2B7rwaE1WlXBHoMXAaSQVb25FSCrLytnzo3BCj6WUtnBGJSrxBf2EHl8YYH%2BkFEFwVlS2Hb5AyYFBgaqlu95Wy%2FL447PBYDPympjI9BfvSuMayHfgqtcJBERG8%2FizqeB6cpCNyxDJ3sg2OW27TwhYQN7iezHq1Ys7ScP0vFyeC87whHjOFHPtpQJBolNQ59RHyQLdyG0ui8uL3G%2BLbnVoDBfpwR5YlYYGUbyuKNztjTPIrMNiHPFdK%2FwDPqV9UDnQT8Vmujf7nLiPVZZw4bs1awavy8WM3U5fcZNYRU2Hf9VnS9wp%2F%2FOx4TQa7p%2Fqhbolxo2UoP%2FdgFgwSyNoxJ7KhNz%2BOGnDw229ILp2AuIs5SoJdYlrmw9RsI7Ol7%2FKRafAHsjlw5KZ%2Fx27gRkwRPtTvx9GMZc%2Bj4xUGIlE%2BsHIAnzY1cifmEsGNsvtX%2FDDCdfK11QD2Yysk6QCKhN5gTcRqfeVjdJGXMzsGZRwFgCnLNw4SAwO50IHbZHBjp92GOPS5BVvTgnyNNYU6v2%2FUlKMtwEDC14se%2FBjqkAetJfqQuhSq4dqZq6PLfiyjrel55nzJopQ073HUBsrSB8vpHJBemNWldpKRWF4cLoH3cpkYBlBvxkWWHZHS5TupPsIKHL%2BRy753LkfwU9d5qe4iXgxD7QBIp%2FmTJbiWy2J7mcOteVAD4PX5zuQhpB%2FSCspBggejgIXlW%2Bal%2FAZAJ7TRaNR3ixg51c5Gz2dwHuAuCRHgR6lSahSh7ZlPm83j5so7q&X-Amz-Signature=f3e2a2053f900b01c4c13e0c7d0943f71546c3dc059b39c9176004cdd557b08b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657KFXKTY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOM17Ksrrf%2F6tKKg9S8Nd1ploW9inatYV3EqmvFzoP1QIhAIPQFRXlVevNHYBRnmvxFIIDzsfeEzX%2FAFM8HQt1L%2FO0Kv8DCDwQABoMNjM3NDIzMTgzODA1IgxdoPScjpOnT%2F%2FHWwAq3ANMMN%2Br2Z%2BaVszDBER2ArPiwsxkrWAmrNee7WEtJGY5u8og%2Bf%2FiC3yFR5e49IcunbpI6TJOqlLGcTaGnfiJm7L8XqiKYO7AZbOZfU%2B7rwaE1WlXBHoMXAaSQVb25FSCrLytnzo3BCj6WUtnBGJSrxBf2EHl8YYH%2BkFEFwVlS2Hb5AyYFBgaqlu95Wy%2FL447PBYDPympjI9BfvSuMayHfgqtcJBERG8%2FizqeB6cpCNyxDJ3sg2OW27TwhYQN7iezHq1Ys7ScP0vFyeC87whHjOFHPtpQJBolNQ59RHyQLdyG0ui8uL3G%2BLbnVoDBfpwR5YlYYGUbyuKNztjTPIrMNiHPFdK%2FwDPqV9UDnQT8Vmujf7nLiPVZZw4bs1awavy8WM3U5fcZNYRU2Hf9VnS9wp%2F%2FOx4TQa7p%2Fqhbolxo2UoP%2FdgFgwSyNoxJ7KhNz%2BOGnDw229ILp2AuIs5SoJdYlrmw9RsI7Ol7%2FKRafAHsjlw5KZ%2Fx27gRkwRPtTvx9GMZc%2Bj4xUGIlE%2BsHIAnzY1cifmEsGNsvtX%2FDDCdfK11QD2Yysk6QCKhN5gTcRqfeVjdJGXMzsGZRwFgCnLNw4SAwO50IHbZHBjp92GOPS5BVvTgnyNNYU6v2%2FUlKMtwEDC14se%2FBjqkAetJfqQuhSq4dqZq6PLfiyjrel55nzJopQ073HUBsrSB8vpHJBemNWldpKRWF4cLoH3cpkYBlBvxkWWHZHS5TupPsIKHL%2BRy753LkfwU9d5qe4iXgxD7QBIp%2FmTJbiWy2J7mcOteVAD4PX5zuQhpB%2FSCspBggejgIXlW%2Bal%2FAZAJ7TRaNR3ixg51c5Gz2dwHuAuCRHgR6lSahSh7ZlPm83j5so7q&X-Amz-Signature=cc6c559133f769e2b01f7a283a534d4b081d0395b2e41bdd20352dfb1b980ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657KFXKTY%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOM17Ksrrf%2F6tKKg9S8Nd1ploW9inatYV3EqmvFzoP1QIhAIPQFRXlVevNHYBRnmvxFIIDzsfeEzX%2FAFM8HQt1L%2FO0Kv8DCDwQABoMNjM3NDIzMTgzODA1IgxdoPScjpOnT%2F%2FHWwAq3ANMMN%2Br2Z%2BaVszDBER2ArPiwsxkrWAmrNee7WEtJGY5u8og%2Bf%2FiC3yFR5e49IcunbpI6TJOqlLGcTaGnfiJm7L8XqiKYO7AZbOZfU%2B7rwaE1WlXBHoMXAaSQVb25FSCrLytnzo3BCj6WUtnBGJSrxBf2EHl8YYH%2BkFEFwVlS2Hb5AyYFBgaqlu95Wy%2FL447PBYDPympjI9BfvSuMayHfgqtcJBERG8%2FizqeB6cpCNyxDJ3sg2OW27TwhYQN7iezHq1Ys7ScP0vFyeC87whHjOFHPtpQJBolNQ59RHyQLdyG0ui8uL3G%2BLbnVoDBfpwR5YlYYGUbyuKNztjTPIrMNiHPFdK%2FwDPqV9UDnQT8Vmujf7nLiPVZZw4bs1awavy8WM3U5fcZNYRU2Hf9VnS9wp%2F%2FOx4TQa7p%2Fqhbolxo2UoP%2FdgFgwSyNoxJ7KhNz%2BOGnDw229ILp2AuIs5SoJdYlrmw9RsI7Ol7%2FKRafAHsjlw5KZ%2Fx27gRkwRPtTvx9GMZc%2Bj4xUGIlE%2BsHIAnzY1cifmEsGNsvtX%2FDDCdfK11QD2Yysk6QCKhN5gTcRqfeVjdJGXMzsGZRwFgCnLNw4SAwO50IHbZHBjp92GOPS5BVvTgnyNNYU6v2%2FUlKMtwEDC14se%2FBjqkAetJfqQuhSq4dqZq6PLfiyjrel55nzJopQ073HUBsrSB8vpHJBemNWldpKRWF4cLoH3cpkYBlBvxkWWHZHS5TupPsIKHL%2BRy753LkfwU9d5qe4iXgxD7QBIp%2FmTJbiWy2J7mcOteVAD4PX5zuQhpB%2FSCspBggejgIXlW%2Bal%2FAZAJ7TRaNR3ixg51c5Gz2dwHuAuCRHgR6lSahSh7ZlPm83j5so7q&X-Amz-Signature=5dd1194bdd7eb188a7b2edf0e271e8a83fcc660fec09405e630d2f035e28280f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
