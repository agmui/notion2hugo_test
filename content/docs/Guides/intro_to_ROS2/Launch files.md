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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMHMZJBJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGgND9sBcrENYWu6Db3O4wzVJCUVZ%2BBFzKUcDh70BoegIhAPXa6WyuyofhG16mLPOsSW3EeU6BvDyUE6bsHCDGvdqBKv8DCDAQABoMNjM3NDIzMTgzODA1IgxU897mfBlL7qmuxkcq3AOK3yzPyLXIHbJfTNmJjsW3t3a6dePwdNImmX1QdTZRUbjF9aLGv2yPzuwP6IRSpl242mtZylIBxk1O5F0Q4HyrW%2BISCPOvX3Uoxm%2FQVMKiz28%2FhHHCvNMYY6FDlHoTuqdf%2FzH8xd2xHZHojlvNZQYMU2yxdcMNqv5sOsXtPLEE5xnky%2F1xOpSHKa8jo8yE77m1WaRZi3%2BQcIrygkf5g87G%2Fnp6TPHCrRW2X0pRCY3C09dWX%2BP9OgL7yFIL42xRcj%2BrgPlE1z4CSzPBL7ctWapaQe6yGteVYbISZ51rQbzhbxxvJxu9HAdSyOUXTus0ELaPSPpaa%2BNANUie3BBK8fRj4a56cMAcirsUbIwwf6j5NtFvochI5fR1ueXeGEl8UB9dswZysupGaiEP0q9WLwriwTr3VpdHfyMc4Uq3Y1s3oqMXfLACQ6uZGLv5HDoJGN3QplBquf1GzsUkJjYsln%2FLLjLWtwoHcRUtlb6inNVvFF%2F2SHdvx8KUkpyo5SZOolfsNT8amxmL%2FMxZhZLWx0x4TsGambEiNXTu5fVVknVloqkVk%2BCNuAiZ0a1B3kjYwbAYBh8p8SDVZUGATp%2BE0QVUM%2B2VofpqugJ7fMfeaiQI3nkyXIyIw2LtCDAtKjCeh8W%2FBjqkAZBbC2%2BKfV%2Fjtr3FtWqx5NgLeiDT3cal5HRSJyy4Ka9WoqfoiBAsDcC3INe8xQ9y4bIhG38gWDWJyUlXllue%2FleOk%2Fq97LI3bWDHYb%2F7wYGd9yWHbS2HiIbcC4FSL%2Byam6i5InFEIMDmAD0Ddyp80r0V9YXLbkG6UYA2wu4aiJASIYXsnELad3RqCQAAJE2VenO2rOThR%2BgetNhHnjGNOcVuhzOY&X-Amz-Signature=928f4f6d8f318322efe93df3d098fa02740b2005d8493c55a42619e22d3c996a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMHMZJBJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGgND9sBcrENYWu6Db3O4wzVJCUVZ%2BBFzKUcDh70BoegIhAPXa6WyuyofhG16mLPOsSW3EeU6BvDyUE6bsHCDGvdqBKv8DCDAQABoMNjM3NDIzMTgzODA1IgxU897mfBlL7qmuxkcq3AOK3yzPyLXIHbJfTNmJjsW3t3a6dePwdNImmX1QdTZRUbjF9aLGv2yPzuwP6IRSpl242mtZylIBxk1O5F0Q4HyrW%2BISCPOvX3Uoxm%2FQVMKiz28%2FhHHCvNMYY6FDlHoTuqdf%2FzH8xd2xHZHojlvNZQYMU2yxdcMNqv5sOsXtPLEE5xnky%2F1xOpSHKa8jo8yE77m1WaRZi3%2BQcIrygkf5g87G%2Fnp6TPHCrRW2X0pRCY3C09dWX%2BP9OgL7yFIL42xRcj%2BrgPlE1z4CSzPBL7ctWapaQe6yGteVYbISZ51rQbzhbxxvJxu9HAdSyOUXTus0ELaPSPpaa%2BNANUie3BBK8fRj4a56cMAcirsUbIwwf6j5NtFvochI5fR1ueXeGEl8UB9dswZysupGaiEP0q9WLwriwTr3VpdHfyMc4Uq3Y1s3oqMXfLACQ6uZGLv5HDoJGN3QplBquf1GzsUkJjYsln%2FLLjLWtwoHcRUtlb6inNVvFF%2F2SHdvx8KUkpyo5SZOolfsNT8amxmL%2FMxZhZLWx0x4TsGambEiNXTu5fVVknVloqkVk%2BCNuAiZ0a1B3kjYwbAYBh8p8SDVZUGATp%2BE0QVUM%2B2VofpqugJ7fMfeaiQI3nkyXIyIw2LtCDAtKjCeh8W%2FBjqkAZBbC2%2BKfV%2Fjtr3FtWqx5NgLeiDT3cal5HRSJyy4Ka9WoqfoiBAsDcC3INe8xQ9y4bIhG38gWDWJyUlXllue%2FleOk%2Fq97LI3bWDHYb%2F7wYGd9yWHbS2HiIbcC4FSL%2Byam6i5InFEIMDmAD0Ddyp80r0V9YXLbkG6UYA2wu4aiJASIYXsnELad3RqCQAAJE2VenO2rOThR%2BgetNhHnjGNOcVuhzOY&X-Amz-Signature=706f99d668684bb942f4a7ac1c06f65197f9d0e94e436d40abb60939260d77c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMHMZJBJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGgND9sBcrENYWu6Db3O4wzVJCUVZ%2BBFzKUcDh70BoegIhAPXa6WyuyofhG16mLPOsSW3EeU6BvDyUE6bsHCDGvdqBKv8DCDAQABoMNjM3NDIzMTgzODA1IgxU897mfBlL7qmuxkcq3AOK3yzPyLXIHbJfTNmJjsW3t3a6dePwdNImmX1QdTZRUbjF9aLGv2yPzuwP6IRSpl242mtZylIBxk1O5F0Q4HyrW%2BISCPOvX3Uoxm%2FQVMKiz28%2FhHHCvNMYY6FDlHoTuqdf%2FzH8xd2xHZHojlvNZQYMU2yxdcMNqv5sOsXtPLEE5xnky%2F1xOpSHKa8jo8yE77m1WaRZi3%2BQcIrygkf5g87G%2Fnp6TPHCrRW2X0pRCY3C09dWX%2BP9OgL7yFIL42xRcj%2BrgPlE1z4CSzPBL7ctWapaQe6yGteVYbISZ51rQbzhbxxvJxu9HAdSyOUXTus0ELaPSPpaa%2BNANUie3BBK8fRj4a56cMAcirsUbIwwf6j5NtFvochI5fR1ueXeGEl8UB9dswZysupGaiEP0q9WLwriwTr3VpdHfyMc4Uq3Y1s3oqMXfLACQ6uZGLv5HDoJGN3QplBquf1GzsUkJjYsln%2FLLjLWtwoHcRUtlb6inNVvFF%2F2SHdvx8KUkpyo5SZOolfsNT8amxmL%2FMxZhZLWx0x4TsGambEiNXTu5fVVknVloqkVk%2BCNuAiZ0a1B3kjYwbAYBh8p8SDVZUGATp%2BE0QVUM%2B2VofpqugJ7fMfeaiQI3nkyXIyIw2LtCDAtKjCeh8W%2FBjqkAZBbC2%2BKfV%2Fjtr3FtWqx5NgLeiDT3cal5HRSJyy4Ka9WoqfoiBAsDcC3INe8xQ9y4bIhG38gWDWJyUlXllue%2FleOk%2Fq97LI3bWDHYb%2F7wYGd9yWHbS2HiIbcC4FSL%2Byam6i5InFEIMDmAD0Ddyp80r0V9YXLbkG6UYA2wu4aiJASIYXsnELad3RqCQAAJE2VenO2rOThR%2BgetNhHnjGNOcVuhzOY&X-Amz-Signature=93ae1e755f579f089a4f7f46ab33bfb8b3fa29c716f92a790da36099ef2762a8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
