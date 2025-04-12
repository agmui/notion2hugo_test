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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAYGI7RW%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIBZai9nOVcBhZ0oCq%2Fh%2FjqXVMC59AUvHfhAxZuTYxBOrAiEA8rtev8n2te%2FTiiJELRGHN3%2Bt3Hg3WWxEinOS8CZdzQYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeRMelfBufFX7JmFCrcAyqugfMMG1vb6E7wcXFJrnElZ1%2B96PJDOqjOXTP3jIYINqUHcDIb6rfFdg%2FMvxTvc9b%2FOkk058Vq4xKgbQIFJnt8GGr7SUJA%2BRpIU8JC%2BrDxNOwIOAq4vdlRZ0qTV0xZASjj7sGgLOAL%2BZzgJsRNJGN12E7c6%2BM%2BKs6mpJ2N4qk8VgbnGx8Qka4nMK8uI40ljCwm0SO6O3tlSlJwbp4o%2FnlWBBYIO0CKM5utCze8HqKBAp9pTCQpOxlS0jR6n4evWB6PVGySPCRnsY0d5e13NQVM9dBQj8NqZ3C4DS8G%2BnyVHzneZTvcbnCZ4KqBxDpkFD6dRNWNhxJzrsekS0SUhYAdJjd9uYmO6mN7J7%2BVyMr6wu1%2FcGtrSEZrDIkwyFffzfZSlzXFew1Sjz%2BIm8ZXhwdlryB8PtAJKflrT3%2B0IB%2BSO5v3p%2F79yJpzjdv8sWG3NU%2ByoD%2FKD10G0kjdBDgw0I1Kv52Na4wZdco18I6D0VHhQ%2FbOfxz4VX8HHds5q5T%2B%2BnpecTEANkBuvBBB4C4ZIwlSeOJyOISichY2KjSU1VyiwTIl7kDCWhJ4appRt7MxVFqy33fw18URnepUT1zFnpVyWMehajm1Qd5RmFUQ%2FruiYWr5Y%2BUBSF%2FHvoRKMKT76b8GOqUBK17ViaGg%2FygUPssDfO3XR43RYVryyfnmJ9eXkayhPOma8bvrd1QIwnOmubUUvR9G%2FlEd%2BTjPwX5p4YDgqYHEtE1PnwGfthGk5VrX0JABVq%2BRKr0txW6ztsjH2I0vrudVm5NUkKz%2BNtzDEiu4c8O3LOoddKDKZlXJ%2FlrkIccD%2FAjCTDmHkalFkTCbQAT1pEeADA0hmLteNeceYkIIyYXOoqmcyVH2&X-Amz-Signature=cd39f7beabb0e3a1809bb5b2b1e7cfd9132ad42e9778c6fef1573e8c17243bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAYGI7RW%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIBZai9nOVcBhZ0oCq%2Fh%2FjqXVMC59AUvHfhAxZuTYxBOrAiEA8rtev8n2te%2FTiiJELRGHN3%2Bt3Hg3WWxEinOS8CZdzQYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeRMelfBufFX7JmFCrcAyqugfMMG1vb6E7wcXFJrnElZ1%2B96PJDOqjOXTP3jIYINqUHcDIb6rfFdg%2FMvxTvc9b%2FOkk058Vq4xKgbQIFJnt8GGr7SUJA%2BRpIU8JC%2BrDxNOwIOAq4vdlRZ0qTV0xZASjj7sGgLOAL%2BZzgJsRNJGN12E7c6%2BM%2BKs6mpJ2N4qk8VgbnGx8Qka4nMK8uI40ljCwm0SO6O3tlSlJwbp4o%2FnlWBBYIO0CKM5utCze8HqKBAp9pTCQpOxlS0jR6n4evWB6PVGySPCRnsY0d5e13NQVM9dBQj8NqZ3C4DS8G%2BnyVHzneZTvcbnCZ4KqBxDpkFD6dRNWNhxJzrsekS0SUhYAdJjd9uYmO6mN7J7%2BVyMr6wu1%2FcGtrSEZrDIkwyFffzfZSlzXFew1Sjz%2BIm8ZXhwdlryB8PtAJKflrT3%2B0IB%2BSO5v3p%2F79yJpzjdv8sWG3NU%2ByoD%2FKD10G0kjdBDgw0I1Kv52Na4wZdco18I6D0VHhQ%2FbOfxz4VX8HHds5q5T%2B%2BnpecTEANkBuvBBB4C4ZIwlSeOJyOISichY2KjSU1VyiwTIl7kDCWhJ4appRt7MxVFqy33fw18URnepUT1zFnpVyWMehajm1Qd5RmFUQ%2FruiYWr5Y%2BUBSF%2FHvoRKMKT76b8GOqUBK17ViaGg%2FygUPssDfO3XR43RYVryyfnmJ9eXkayhPOma8bvrd1QIwnOmubUUvR9G%2FlEd%2BTjPwX5p4YDgqYHEtE1PnwGfthGk5VrX0JABVq%2BRKr0txW6ztsjH2I0vrudVm5NUkKz%2BNtzDEiu4c8O3LOoddKDKZlXJ%2FlrkIccD%2FAjCTDmHkalFkTCbQAT1pEeADA0hmLteNeceYkIIyYXOoqmcyVH2&X-Amz-Signature=9f4e083ee396fa590f15ae0f6c3a2339f88bbc0ad8df5bef4b6958a162cf52a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAYGI7RW%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T160829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIBZai9nOVcBhZ0oCq%2Fh%2FjqXVMC59AUvHfhAxZuTYxBOrAiEA8rtev8n2te%2FTiiJELRGHN3%2Bt3Hg3WWxEinOS8CZdzQYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeRMelfBufFX7JmFCrcAyqugfMMG1vb6E7wcXFJrnElZ1%2B96PJDOqjOXTP3jIYINqUHcDIb6rfFdg%2FMvxTvc9b%2FOkk058Vq4xKgbQIFJnt8GGr7SUJA%2BRpIU8JC%2BrDxNOwIOAq4vdlRZ0qTV0xZASjj7sGgLOAL%2BZzgJsRNJGN12E7c6%2BM%2BKs6mpJ2N4qk8VgbnGx8Qka4nMK8uI40ljCwm0SO6O3tlSlJwbp4o%2FnlWBBYIO0CKM5utCze8HqKBAp9pTCQpOxlS0jR6n4evWB6PVGySPCRnsY0d5e13NQVM9dBQj8NqZ3C4DS8G%2BnyVHzneZTvcbnCZ4KqBxDpkFD6dRNWNhxJzrsekS0SUhYAdJjd9uYmO6mN7J7%2BVyMr6wu1%2FcGtrSEZrDIkwyFffzfZSlzXFew1Sjz%2BIm8ZXhwdlryB8PtAJKflrT3%2B0IB%2BSO5v3p%2F79yJpzjdv8sWG3NU%2ByoD%2FKD10G0kjdBDgw0I1Kv52Na4wZdco18I6D0VHhQ%2FbOfxz4VX8HHds5q5T%2B%2BnpecTEANkBuvBBB4C4ZIwlSeOJyOISichY2KjSU1VyiwTIl7kDCWhJ4appRt7MxVFqy33fw18URnepUT1zFnpVyWMehajm1Qd5RmFUQ%2FruiYWr5Y%2BUBSF%2FHvoRKMKT76b8GOqUBK17ViaGg%2FygUPssDfO3XR43RYVryyfnmJ9eXkayhPOma8bvrd1QIwnOmubUUvR9G%2FlEd%2BTjPwX5p4YDgqYHEtE1PnwGfthGk5VrX0JABVq%2BRKr0txW6ztsjH2I0vrudVm5NUkKz%2BNtzDEiu4c8O3LOoddKDKZlXJ%2FlrkIccD%2FAjCTDmHkalFkTCbQAT1pEeADA0hmLteNeceYkIIyYXOoqmcyVH2&X-Amz-Signature=2c0831670d9be69335ab1b2c9163d91804ef09853802898544b0de8184aea44c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
