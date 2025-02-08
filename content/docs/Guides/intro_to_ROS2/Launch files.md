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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655CALMYH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICEDVq0%2BI72J9rQuTffCpVHf4cd183T5kyiTEmPd7AogAiEAt%2BbcWWOkVtnSyyHeBYKKheMHAu%2BOswIeQhagPDZT6wEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBz1wNy%2FdMDpHg75ircA98YEcGl6qDHl%2FO42pBzQgS78QgS0y5%2BzhjnJLohTfdJRKEEBzO%2B3MKfv11TfzDdCzzySgCm2Tz%2BOMzNHUqksn2V4PYJMXJ3xO0LLPVK584zo%2B%2FlW2VZphnpTZZPdPTYaDwEtNE1jfmRXBf6t1E80K4gxmPh%2BZTG9ImJ5LH%2FiHT5CtZmKujHTDcfzJWtaGDvhP6QvPZb%2BZ%2FP5YRihrlPIRB067JkgjzkadQZycRG12rv7GQOjZ0CpGBbPeNzTsNP00ivzz%2F9vEcoAkboqV3NB8jDc8saM6aIlyjVoFD4%2BLWCD1UfvzLjQfJxY4N6kWTHTrT%2FwFtNWCdxm7r5qx7rn4fP%2FPtKNIKD9%2FtmlClB2ZzmxZZXIzY6lZU1YAOKBCd30oE8myoO9%2BVSdILD13atzhGeYXJkm1ik5JWy2tllCkrhD%2B88tgwCfsGDYJPMJ1kL%2FsQPqOu6lQs5EbqmQAxMrD5jPppaVY74mQXq2QrmZrkVqSARMkuwLjRj6Yng2jlEUzEcHNBKp36NAxOci5%2Fq%2F%2BADrvJbqbbT%2Bt2quWW%2FMLqjYniv4uEEdTMLmOt3dUiLbvcEm6dUlvY%2FynO3xtUVD7XYpFJkyr7eTjZLpxoYT%2FyqRroCm9Wzh2Q6u2i1MOyYn70GOqUBpbQxH0RqlA%2F3xU3N6CKbKauDZqxGuzhWvPEKRB9iSokHlU1T%2Fp0OVz7MuhXXZFvvoz39Fobkyw9dzjDlmNMtaAB5%2FcmAxK2zjqbz73o9DqaruLkvNTuma1VVPoGKVkalhyyT3lRCm4b0rUV3baFFQnRFDfBQsFpAaBVMW0uGF4U6EPxKZsCOJx%2Fyb9FHIhvKp647UU3VbFAwiq1S5HWspiNFzzZ6&X-Amz-Signature=533fe6f668409a0d31c5be12a4ed463b25ba09e1b57f049bb631f6ea422dbd0f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655CALMYH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICEDVq0%2BI72J9rQuTffCpVHf4cd183T5kyiTEmPd7AogAiEAt%2BbcWWOkVtnSyyHeBYKKheMHAu%2BOswIeQhagPDZT6wEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBz1wNy%2FdMDpHg75ircA98YEcGl6qDHl%2FO42pBzQgS78QgS0y5%2BzhjnJLohTfdJRKEEBzO%2B3MKfv11TfzDdCzzySgCm2Tz%2BOMzNHUqksn2V4PYJMXJ3xO0LLPVK584zo%2B%2FlW2VZphnpTZZPdPTYaDwEtNE1jfmRXBf6t1E80K4gxmPh%2BZTG9ImJ5LH%2FiHT5CtZmKujHTDcfzJWtaGDvhP6QvPZb%2BZ%2FP5YRihrlPIRB067JkgjzkadQZycRG12rv7GQOjZ0CpGBbPeNzTsNP00ivzz%2F9vEcoAkboqV3NB8jDc8saM6aIlyjVoFD4%2BLWCD1UfvzLjQfJxY4N6kWTHTrT%2FwFtNWCdxm7r5qx7rn4fP%2FPtKNIKD9%2FtmlClB2ZzmxZZXIzY6lZU1YAOKBCd30oE8myoO9%2BVSdILD13atzhGeYXJkm1ik5JWy2tllCkrhD%2B88tgwCfsGDYJPMJ1kL%2FsQPqOu6lQs5EbqmQAxMrD5jPppaVY74mQXq2QrmZrkVqSARMkuwLjRj6Yng2jlEUzEcHNBKp36NAxOci5%2Fq%2F%2BADrvJbqbbT%2Bt2quWW%2FMLqjYniv4uEEdTMLmOt3dUiLbvcEm6dUlvY%2FynO3xtUVD7XYpFJkyr7eTjZLpxoYT%2FyqRroCm9Wzh2Q6u2i1MOyYn70GOqUBpbQxH0RqlA%2F3xU3N6CKbKauDZqxGuzhWvPEKRB9iSokHlU1T%2Fp0OVz7MuhXXZFvvoz39Fobkyw9dzjDlmNMtaAB5%2FcmAxK2zjqbz73o9DqaruLkvNTuma1VVPoGKVkalhyyT3lRCm4b0rUV3baFFQnRFDfBQsFpAaBVMW0uGF4U6EPxKZsCOJx%2Fyb9FHIhvKp647UU3VbFAwiq1S5HWspiNFzzZ6&X-Amz-Signature=207f7bf8b797bf5bc19eccfd7760ce16adb4583d23660971c6683fa33055ea34&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655CALMYH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T220149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICEDVq0%2BI72J9rQuTffCpVHf4cd183T5kyiTEmPd7AogAiEAt%2BbcWWOkVtnSyyHeBYKKheMHAu%2BOswIeQhagPDZT6wEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBz1wNy%2FdMDpHg75ircA98YEcGl6qDHl%2FO42pBzQgS78QgS0y5%2BzhjnJLohTfdJRKEEBzO%2B3MKfv11TfzDdCzzySgCm2Tz%2BOMzNHUqksn2V4PYJMXJ3xO0LLPVK584zo%2B%2FlW2VZphnpTZZPdPTYaDwEtNE1jfmRXBf6t1E80K4gxmPh%2BZTG9ImJ5LH%2FiHT5CtZmKujHTDcfzJWtaGDvhP6QvPZb%2BZ%2FP5YRihrlPIRB067JkgjzkadQZycRG12rv7GQOjZ0CpGBbPeNzTsNP00ivzz%2F9vEcoAkboqV3NB8jDc8saM6aIlyjVoFD4%2BLWCD1UfvzLjQfJxY4N6kWTHTrT%2FwFtNWCdxm7r5qx7rn4fP%2FPtKNIKD9%2FtmlClB2ZzmxZZXIzY6lZU1YAOKBCd30oE8myoO9%2BVSdILD13atzhGeYXJkm1ik5JWy2tllCkrhD%2B88tgwCfsGDYJPMJ1kL%2FsQPqOu6lQs5EbqmQAxMrD5jPppaVY74mQXq2QrmZrkVqSARMkuwLjRj6Yng2jlEUzEcHNBKp36NAxOci5%2Fq%2F%2BADrvJbqbbT%2Bt2quWW%2FMLqjYniv4uEEdTMLmOt3dUiLbvcEm6dUlvY%2FynO3xtUVD7XYpFJkyr7eTjZLpxoYT%2FyqRroCm9Wzh2Q6u2i1MOyYn70GOqUBpbQxH0RqlA%2F3xU3N6CKbKauDZqxGuzhWvPEKRB9iSokHlU1T%2Fp0OVz7MuhXXZFvvoz39Fobkyw9dzjDlmNMtaAB5%2FcmAxK2zjqbz73o9DqaruLkvNTuma1VVPoGKVkalhyyT3lRCm4b0rUV3baFFQnRFDfBQsFpAaBVMW0uGF4U6EPxKZsCOJx%2Fyb9FHIhvKp647UU3VbFAwiq1S5HWspiNFzzZ6&X-Amz-Signature=d59894b9633b03681fcc496a2768e113127df03ab638e904dafa831129830ac8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
