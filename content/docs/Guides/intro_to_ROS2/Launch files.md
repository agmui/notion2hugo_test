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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXT4RUQU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUG7ERjy2wZtFg0D4B3EV4AFfdk9%2BmADalM1LoOlff7QIgGSopTZrEKmTJeqS%2FKr8nEk4T%2BSuUkmq15mJGU1G9l8Qq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJm3qvjjCCoi6yDvXCrcA908XEVmcwT6C%2FH2UznkT0jZrjdlbmTxgkM%2Fhc%2BI3kIopFQXi%2Fp%2FojelvDg8MUMZoPdvqXdNPee5%2Fn4z9qZ7aGjc4rf5wL5%2BoS7%2BsEOo74%2B%2BJNj6TFRPCBsLAgp50%2FyAIhRjfxJVB3UQH4quuUmMSlfWXjt2z9ABH5XFmbqvDO8mCn%2B9xc8SoRR7l8y5JWLTThUhCEJzs8NqTDJE%2FWED3SLJdEzqHNh9vuLymda%2FdTgg1UllwYCWTLIz2XrWFUCbPl5rYEDII%2BIvIm%2BuUxCLySgMmK0FAyXDxXaulGyNxRKa%2BcUOHDNzUTgWT%2BPhCBiMdtJJNm8RZ6Y6niUf2Q8st7BE4GB%2F5XxEq%2Bac58RJy4ap9O2A4NZp7Hdd1x%2FgrZXR5w%2BVCeO87ypKZ4Rk4GRq2ptyvS06E%2FA1fs7siNdoEdNbXSb%2BtRDX3htnKUZ%2Fn7W5PjJQKSH2gdnfjllEJ8Q0b4L8AEg6FNIFUEPrcrZIvcDpeV2lVRWcrnq0FZMBqTWH%2FtsvAcvzMBmZnpWkKNnnJ%2BCiy0LOHsUFDNvsSA8IbT7Qxihn%2B8TtFkEl324yw16P60YtktSKm15HPSYFZiZQ8r%2FhX9c1b8uFPU3xfILYSL7XQmfSO8Dn%2BaclDuYKMMLAjsIGOqUBycBY5ChOBWGkVS7N5D6H85qOQ6%2BSbGrWrsGgGRL8z90BJIK160Vy%2FBGJgIsX2P7KUW%2FJstlI9kW12czgMYGlceFth0J5TR4suxTI4pmlhNraSfhjBwyQmB4IeoFPEfdt2odBVLxWxb79SbFUbXdP0AuBTTh2jW76%2Bp8Cr5V%2B%2FlKuceAXQky5Mv30uu8e0%2FpvDDrAdHAHIrXacj0UHmhNKXfBuSX7&X-Amz-Signature=e8b22013ea0ff86bc382ce552c6791993fab955bef39f9e4d051cf75a960e76b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXT4RUQU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUG7ERjy2wZtFg0D4B3EV4AFfdk9%2BmADalM1LoOlff7QIgGSopTZrEKmTJeqS%2FKr8nEk4T%2BSuUkmq15mJGU1G9l8Qq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJm3qvjjCCoi6yDvXCrcA908XEVmcwT6C%2FH2UznkT0jZrjdlbmTxgkM%2Fhc%2BI3kIopFQXi%2Fp%2FojelvDg8MUMZoPdvqXdNPee5%2Fn4z9qZ7aGjc4rf5wL5%2BoS7%2BsEOo74%2B%2BJNj6TFRPCBsLAgp50%2FyAIhRjfxJVB3UQH4quuUmMSlfWXjt2z9ABH5XFmbqvDO8mCn%2B9xc8SoRR7l8y5JWLTThUhCEJzs8NqTDJE%2FWED3SLJdEzqHNh9vuLymda%2FdTgg1UllwYCWTLIz2XrWFUCbPl5rYEDII%2BIvIm%2BuUxCLySgMmK0FAyXDxXaulGyNxRKa%2BcUOHDNzUTgWT%2BPhCBiMdtJJNm8RZ6Y6niUf2Q8st7BE4GB%2F5XxEq%2Bac58RJy4ap9O2A4NZp7Hdd1x%2FgrZXR5w%2BVCeO87ypKZ4Rk4GRq2ptyvS06E%2FA1fs7siNdoEdNbXSb%2BtRDX3htnKUZ%2Fn7W5PjJQKSH2gdnfjllEJ8Q0b4L8AEg6FNIFUEPrcrZIvcDpeV2lVRWcrnq0FZMBqTWH%2FtsvAcvzMBmZnpWkKNnnJ%2BCiy0LOHsUFDNvsSA8IbT7Qxihn%2B8TtFkEl324yw16P60YtktSKm15HPSYFZiZQ8r%2FhX9c1b8uFPU3xfILYSL7XQmfSO8Dn%2BaclDuYKMMLAjsIGOqUBycBY5ChOBWGkVS7N5D6H85qOQ6%2BSbGrWrsGgGRL8z90BJIK160Vy%2FBGJgIsX2P7KUW%2FJstlI9kW12czgMYGlceFth0J5TR4suxTI4pmlhNraSfhjBwyQmB4IeoFPEfdt2odBVLxWxb79SbFUbXdP0AuBTTh2jW76%2Bp8Cr5V%2B%2FlKuceAXQky5Mv30uu8e0%2FpvDDrAdHAHIrXacj0UHmhNKXfBuSX7&X-Amz-Signature=415bbc46a9beaece2ef49d05618c85cca68158855e39b8679bd60e17449d6f5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXT4RUQU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUG7ERjy2wZtFg0D4B3EV4AFfdk9%2BmADalM1LoOlff7QIgGSopTZrEKmTJeqS%2FKr8nEk4T%2BSuUkmq15mJGU1G9l8Qq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJm3qvjjCCoi6yDvXCrcA908XEVmcwT6C%2FH2UznkT0jZrjdlbmTxgkM%2Fhc%2BI3kIopFQXi%2Fp%2FojelvDg8MUMZoPdvqXdNPee5%2Fn4z9qZ7aGjc4rf5wL5%2BoS7%2BsEOo74%2B%2BJNj6TFRPCBsLAgp50%2FyAIhRjfxJVB3UQH4quuUmMSlfWXjt2z9ABH5XFmbqvDO8mCn%2B9xc8SoRR7l8y5JWLTThUhCEJzs8NqTDJE%2FWED3SLJdEzqHNh9vuLymda%2FdTgg1UllwYCWTLIz2XrWFUCbPl5rYEDII%2BIvIm%2BuUxCLySgMmK0FAyXDxXaulGyNxRKa%2BcUOHDNzUTgWT%2BPhCBiMdtJJNm8RZ6Y6niUf2Q8st7BE4GB%2F5XxEq%2Bac58RJy4ap9O2A4NZp7Hdd1x%2FgrZXR5w%2BVCeO87ypKZ4Rk4GRq2ptyvS06E%2FA1fs7siNdoEdNbXSb%2BtRDX3htnKUZ%2Fn7W5PjJQKSH2gdnfjllEJ8Q0b4L8AEg6FNIFUEPrcrZIvcDpeV2lVRWcrnq0FZMBqTWH%2FtsvAcvzMBmZnpWkKNnnJ%2BCiy0LOHsUFDNvsSA8IbT7Qxihn%2B8TtFkEl324yw16P60YtktSKm15HPSYFZiZQ8r%2FhX9c1b8uFPU3xfILYSL7XQmfSO8Dn%2BaclDuYKMMLAjsIGOqUBycBY5ChOBWGkVS7N5D6H85qOQ6%2BSbGrWrsGgGRL8z90BJIK160Vy%2FBGJgIsX2P7KUW%2FJstlI9kW12czgMYGlceFth0J5TR4suxTI4pmlhNraSfhjBwyQmB4IeoFPEfdt2odBVLxWxb79SbFUbXdP0AuBTTh2jW76%2Bp8Cr5V%2B%2FlKuceAXQky5Mv30uu8e0%2FpvDDrAdHAHIrXacj0UHmhNKXfBuSX7&X-Amz-Signature=c73b73a6e83801b4824776c88b0a046e98457efdb2f6390f5c1023cd07daf740&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
