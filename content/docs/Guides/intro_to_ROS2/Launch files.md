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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORKPASI%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtdWpV6Mt43tud4TGInIi6nL923Zf3DNhUG9iWTKSCKQIhAPubY4CA7Pms%2BCyfo%2FEJpBd8yJfdcFGyKoMiP2kD70%2FBKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVQwkXlnfOQxwSxR8q3AN6Duthi%2FnKXKG7KWSkZgbaoA%2Ft6pdul04Eu1R0lpGlcLJkhCSwbSEERfyQo77wUjclJiuFf4bYGeT6cQ3mwuJJxs9CLQ3t1Ok6HfWBs%2F6E9wQ1iT9yR%2F2XudGaq%2F%2BVMx01UFv74FRVdLQXb0owi6iq6OPQMrEqIu33v6M%2FdfJzPagPola3iWNKxWp%2BEtaqCxtbYxXZr3CMHiaDXQqUntptUn9NnHgEiAqAgPMefs8DoAr1rP1tGlkMU7c%2FVTxlc%2BjDyY9cvvyNS%2FlL8EzRI6%2BldrhIjlaZEclex%2BaM0kggqWc23bl22fFXhTjEy7iTycnyaw9nBa%2B2Xc4w8XjBMa8gNni%2Bhw1L4eD4UjzLltMbXJY63pqJM7jgfY326w%2BYP%2BfnfSTWklWBWwzQWY0TzWTA8cWxAdTREDSh3ks0WCCtPNPpFgmTaF9sb7oF5tUvn6ADZLDDsVacg%2BgMvRfSGCJPb4LGUviACDryKRMwA2yZ6z%2FeMfkqKYvbC%2FQjXXwD4AXy%2ByUQkuFknONAtLU1XsuJ4hkMIOTCXLJsh8X%2FcM%2BsiV39bHrjBXaXvodh0ZSpxhlMFahjYzrUQsjq9aaWa%2BA0TwaADhvJaiQwNY7%2FQqyD4xqb2Ni0w0vmSlb8OTCZy7fDBjqkAcllYX1Isbzv3Upo%2FsBi1MEKp3oMRIMBbwVk%2FbH83WoY4%2BHeUMCHf8wWEOzp40jMqKx0PtdMThkofADUJ%2BpHL2%2Fw5ij3P7S2VokMJGQBA8IJtoI9m4MFja%2Fx3tLBSKKyl0F0Q0hCVT2Ahb49LTaNoma%2Feu5K%2BjWaGDYfnSC8BIQx83RBn6sH1R3jm23zagG1NX8M7amPvNQSNeWAs3N4212brnCJ&X-Amz-Signature=1044cf4c24478de3eea2e79dfe8461643aa98d6c4f3e0c68b318d0b669007900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORKPASI%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtdWpV6Mt43tud4TGInIi6nL923Zf3DNhUG9iWTKSCKQIhAPubY4CA7Pms%2BCyfo%2FEJpBd8yJfdcFGyKoMiP2kD70%2FBKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVQwkXlnfOQxwSxR8q3AN6Duthi%2FnKXKG7KWSkZgbaoA%2Ft6pdul04Eu1R0lpGlcLJkhCSwbSEERfyQo77wUjclJiuFf4bYGeT6cQ3mwuJJxs9CLQ3t1Ok6HfWBs%2F6E9wQ1iT9yR%2F2XudGaq%2F%2BVMx01UFv74FRVdLQXb0owi6iq6OPQMrEqIu33v6M%2FdfJzPagPola3iWNKxWp%2BEtaqCxtbYxXZr3CMHiaDXQqUntptUn9NnHgEiAqAgPMefs8DoAr1rP1tGlkMU7c%2FVTxlc%2BjDyY9cvvyNS%2FlL8EzRI6%2BldrhIjlaZEclex%2BaM0kggqWc23bl22fFXhTjEy7iTycnyaw9nBa%2B2Xc4w8XjBMa8gNni%2Bhw1L4eD4UjzLltMbXJY63pqJM7jgfY326w%2BYP%2BfnfSTWklWBWwzQWY0TzWTA8cWxAdTREDSh3ks0WCCtPNPpFgmTaF9sb7oF5tUvn6ADZLDDsVacg%2BgMvRfSGCJPb4LGUviACDryKRMwA2yZ6z%2FeMfkqKYvbC%2FQjXXwD4AXy%2ByUQkuFknONAtLU1XsuJ4hkMIOTCXLJsh8X%2FcM%2BsiV39bHrjBXaXvodh0ZSpxhlMFahjYzrUQsjq9aaWa%2BA0TwaADhvJaiQwNY7%2FQqyD4xqb2Ni0w0vmSlb8OTCZy7fDBjqkAcllYX1Isbzv3Upo%2FsBi1MEKp3oMRIMBbwVk%2FbH83WoY4%2BHeUMCHf8wWEOzp40jMqKx0PtdMThkofADUJ%2BpHL2%2Fw5ij3P7S2VokMJGQBA8IJtoI9m4MFja%2Fx3tLBSKKyl0F0Q0hCVT2Ahb49LTaNoma%2Feu5K%2BjWaGDYfnSC8BIQx83RBn6sH1R3jm23zagG1NX8M7amPvNQSNeWAs3N4212brnCJ&X-Amz-Signature=718417bedc4a8866cce81af605aebf4c5916728533a0c393efe0581c5a621657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORKPASI%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtdWpV6Mt43tud4TGInIi6nL923Zf3DNhUG9iWTKSCKQIhAPubY4CA7Pms%2BCyfo%2FEJpBd8yJfdcFGyKoMiP2kD70%2FBKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVQwkXlnfOQxwSxR8q3AN6Duthi%2FnKXKG7KWSkZgbaoA%2Ft6pdul04Eu1R0lpGlcLJkhCSwbSEERfyQo77wUjclJiuFf4bYGeT6cQ3mwuJJxs9CLQ3t1Ok6HfWBs%2F6E9wQ1iT9yR%2F2XudGaq%2F%2BVMx01UFv74FRVdLQXb0owi6iq6OPQMrEqIu33v6M%2FdfJzPagPola3iWNKxWp%2BEtaqCxtbYxXZr3CMHiaDXQqUntptUn9NnHgEiAqAgPMefs8DoAr1rP1tGlkMU7c%2FVTxlc%2BjDyY9cvvyNS%2FlL8EzRI6%2BldrhIjlaZEclex%2BaM0kggqWc23bl22fFXhTjEy7iTycnyaw9nBa%2B2Xc4w8XjBMa8gNni%2Bhw1L4eD4UjzLltMbXJY63pqJM7jgfY326w%2BYP%2BfnfSTWklWBWwzQWY0TzWTA8cWxAdTREDSh3ks0WCCtPNPpFgmTaF9sb7oF5tUvn6ADZLDDsVacg%2BgMvRfSGCJPb4LGUviACDryKRMwA2yZ6z%2FeMfkqKYvbC%2FQjXXwD4AXy%2ByUQkuFknONAtLU1XsuJ4hkMIOTCXLJsh8X%2FcM%2BsiV39bHrjBXaXvodh0ZSpxhlMFahjYzrUQsjq9aaWa%2BA0TwaADhvJaiQwNY7%2FQqyD4xqb2Ni0w0vmSlb8OTCZy7fDBjqkAcllYX1Isbzv3Upo%2FsBi1MEKp3oMRIMBbwVk%2FbH83WoY4%2BHeUMCHf8wWEOzp40jMqKx0PtdMThkofADUJ%2BpHL2%2Fw5ij3P7S2VokMJGQBA8IJtoI9m4MFja%2Fx3tLBSKKyl0F0Q0hCVT2Ahb49LTaNoma%2Feu5K%2BjWaGDYfnSC8BIQx83RBn6sH1R3jm23zagG1NX8M7amPvNQSNeWAs3N4212brnCJ&X-Amz-Signature=77c8116d22cfe4f921cb85fa12b061041a6efd9d5b99303e92a14c037aa924a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
