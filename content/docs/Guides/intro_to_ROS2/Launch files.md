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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKXGYXQ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAYf8nMHMDKcnvmYlqzCDQ%2Bu8fROPBdqpEOQfoOq5gdgAiEA4%2FBmahJRB7qkculKVFnhG9maA3QWOMs7ZvY%2FdIkzPREq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDI8cdYPCWZ2hQ4OfwircAwyi2rbwmfTJ7ed37ccMzYvhe%2FJO6TGHpzl4ycFRd9ObXWsLhqkPJ38KBMEXYgt7Jod4vRaSsWmSatLaKG6VvCok78nqGLbg90c5rZ2ucq9Z1PtmAiDfxGElcbNsIt8h3eHG8Wb40MKQpldm%2FoO67jb70Lu%2BL6wCV1uGEwgUwmAqUK%2BGPxQT5vn%2FPUb0AfWl2rfrtrVBLZ6oByHQ%2Faezrj1BO1NYcb%2FKuuhj5DFrJ5Sw5aPyIXaXuIf4Y%2FHdun4g4SDhYCMh8x7g6XmVuOWQK6Z5nVkExrpAZ1TOxMPSx%2BC6oMrhxeeoVY7MPv3%2FbQv0ChqLTiCvfqT0zaq%2Fqwikse3ir%2FyJjTdE%2FMsFddSx8CzJZC4sbMKkM2j2ydcJNXlfXp8vAV6FI3HuYElACBGaCK2ba4cj3tUHuhdx%2B%2BoCLvx7%2FTQFgKsIeiC66Xvjt166M86JjRABm1wAJA4lLjF43R5p7B9Wh60Wyra%2FEyBsrnDtOIMd7ZdU8KlbFCSITh4wkcrRyBMbZGij9d4D5gXC314eUU%2BLZkmQ6nyuBRlIkurwFKLveP4Z%2BLe63Muyh6PLejmo%2BH1nrWJ8kTpET2YXIbKdNTeoOW8KfEyAMEcdAYBBFGZFuxl97MTPNHEOMLv05MIGOqUBNa6hzzTy7X9TBDNUDe6nb05yjrAg90esaBpZcf5wUeT%2B%2FxEGiO3EzSUJNCkymh4VZfTnjS%2BJXWySX3q%2FvpyJbZDq21a%2BYwSdi6Bx05xKDMwi5vNO%2BcxF7h7%2BQ%2FlV5j04rqyW9lCcCerwkncUUywuXMzXZXjZhvVyw9870KE7H4b9pFykHFCaU2lB6DtJZow9%2BlK8gY%2F8POF5qNvae8q7A5%2BQGAEG&X-Amz-Signature=54c37120bc3176c0ac683c1bb58b8c175de58ef9bb8e4d79089f52be308dda27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKXGYXQ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAYf8nMHMDKcnvmYlqzCDQ%2Bu8fROPBdqpEOQfoOq5gdgAiEA4%2FBmahJRB7qkculKVFnhG9maA3QWOMs7ZvY%2FdIkzPREq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDI8cdYPCWZ2hQ4OfwircAwyi2rbwmfTJ7ed37ccMzYvhe%2FJO6TGHpzl4ycFRd9ObXWsLhqkPJ38KBMEXYgt7Jod4vRaSsWmSatLaKG6VvCok78nqGLbg90c5rZ2ucq9Z1PtmAiDfxGElcbNsIt8h3eHG8Wb40MKQpldm%2FoO67jb70Lu%2BL6wCV1uGEwgUwmAqUK%2BGPxQT5vn%2FPUb0AfWl2rfrtrVBLZ6oByHQ%2Faezrj1BO1NYcb%2FKuuhj5DFrJ5Sw5aPyIXaXuIf4Y%2FHdun4g4SDhYCMh8x7g6XmVuOWQK6Z5nVkExrpAZ1TOxMPSx%2BC6oMrhxeeoVY7MPv3%2FbQv0ChqLTiCvfqT0zaq%2Fqwikse3ir%2FyJjTdE%2FMsFddSx8CzJZC4sbMKkM2j2ydcJNXlfXp8vAV6FI3HuYElACBGaCK2ba4cj3tUHuhdx%2B%2BoCLvx7%2FTQFgKsIeiC66Xvjt166M86JjRABm1wAJA4lLjF43R5p7B9Wh60Wyra%2FEyBsrnDtOIMd7ZdU8KlbFCSITh4wkcrRyBMbZGij9d4D5gXC314eUU%2BLZkmQ6nyuBRlIkurwFKLveP4Z%2BLe63Muyh6PLejmo%2BH1nrWJ8kTpET2YXIbKdNTeoOW8KfEyAMEcdAYBBFGZFuxl97MTPNHEOMLv05MIGOqUBNa6hzzTy7X9TBDNUDe6nb05yjrAg90esaBpZcf5wUeT%2B%2FxEGiO3EzSUJNCkymh4VZfTnjS%2BJXWySX3q%2FvpyJbZDq21a%2BYwSdi6Bx05xKDMwi5vNO%2BcxF7h7%2BQ%2FlV5j04rqyW9lCcCerwkncUUywuXMzXZXjZhvVyw9870KE7H4b9pFykHFCaU2lB6DtJZow9%2BlK8gY%2F8POF5qNvae8q7A5%2BQGAEG&X-Amz-Signature=3152ed09e9b442b0c87f8fc1257012990e470c5b9dbab07dfcb112d1a6e3e7da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKXGYXQ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAYf8nMHMDKcnvmYlqzCDQ%2Bu8fROPBdqpEOQfoOq5gdgAiEA4%2FBmahJRB7qkculKVFnhG9maA3QWOMs7ZvY%2FdIkzPREq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDI8cdYPCWZ2hQ4OfwircAwyi2rbwmfTJ7ed37ccMzYvhe%2FJO6TGHpzl4ycFRd9ObXWsLhqkPJ38KBMEXYgt7Jod4vRaSsWmSatLaKG6VvCok78nqGLbg90c5rZ2ucq9Z1PtmAiDfxGElcbNsIt8h3eHG8Wb40MKQpldm%2FoO67jb70Lu%2BL6wCV1uGEwgUwmAqUK%2BGPxQT5vn%2FPUb0AfWl2rfrtrVBLZ6oByHQ%2Faezrj1BO1NYcb%2FKuuhj5DFrJ5Sw5aPyIXaXuIf4Y%2FHdun4g4SDhYCMh8x7g6XmVuOWQK6Z5nVkExrpAZ1TOxMPSx%2BC6oMrhxeeoVY7MPv3%2FbQv0ChqLTiCvfqT0zaq%2Fqwikse3ir%2FyJjTdE%2FMsFddSx8CzJZC4sbMKkM2j2ydcJNXlfXp8vAV6FI3HuYElACBGaCK2ba4cj3tUHuhdx%2B%2BoCLvx7%2FTQFgKsIeiC66Xvjt166M86JjRABm1wAJA4lLjF43R5p7B9Wh60Wyra%2FEyBsrnDtOIMd7ZdU8KlbFCSITh4wkcrRyBMbZGij9d4D5gXC314eUU%2BLZkmQ6nyuBRlIkurwFKLveP4Z%2BLe63Muyh6PLejmo%2BH1nrWJ8kTpET2YXIbKdNTeoOW8KfEyAMEcdAYBBFGZFuxl97MTPNHEOMLv05MIGOqUBNa6hzzTy7X9TBDNUDe6nb05yjrAg90esaBpZcf5wUeT%2B%2FxEGiO3EzSUJNCkymh4VZfTnjS%2BJXWySX3q%2FvpyJbZDq21a%2BYwSdi6Bx05xKDMwi5vNO%2BcxF7h7%2BQ%2FlV5j04rqyW9lCcCerwkncUUywuXMzXZXjZhvVyw9870KE7H4b9pFykHFCaU2lB6DtJZow9%2BlK8gY%2F8POF5qNvae8q7A5%2BQGAEG&X-Amz-Signature=f6652ca95de3e85c9571f2fd383786e1e4735d321e7cf69f2327f5472a1b1da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
