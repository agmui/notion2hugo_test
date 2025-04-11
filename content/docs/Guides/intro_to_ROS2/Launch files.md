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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466723MURBZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDrrvW5Sy42a2N923RcKktKD4Gyp0UPLjNAhBWmKZCJ2AIhAMt6Msh3j%2Bd92aoY0aN2chX5rBUYR23A27DGpCz2kAmFKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0zW7i3AsNiPdffJkq3AP%2FmKdKgxxaAo2S6TFzM%2BxIqmAoFfA9Uzp0r7UMkPfSonzVxp7ojUW%2FeV1yiiGZl9SbQQMi7LkoSx%2FY%2BczCTMH1HMzLN3KfCXpHfc1ak85XiSPy8btW9rvvssOB6ZRC34mAY2OIRbQq5XYxjHHH0kscUGJpTIZDTinryKwohlmRAkGjpd%2FJK8cxiDxzWxkr3gh0bFr4poxYXAZfDo7LMZxITx2%2BNOZu%2Fj7A2rZGlbM9xwIlKJkwMuf3Cn63lctlyO%2BPCKqJovpLIYETP44QegXKa%2F3FbkrcdboUgzBk5r819YJsvYUrqa6G5Jwk6Emp2QB9m1yd8nNa23stak0lqzvVYECn4ZQBnfW9AIW3n7Pt2W8H5o0D%2FxeBvwU8r2hsloNap1f%2BHUX%2FLY6xskoukfDtxaolRnUpAEvswsxFnXUVPad9vmnzC9a5lhDVSD9UxF572XdA8THJAP67tfvmZCf2swVstKE3aD40Ew6%2FPRSBvyyIzUCZ%2FJXMssv2JMOo5r5HVuDsxb6PL4E7X2Qd88WFMExS4e8WLDKHOS4NezoC0PSXtDNQMuS9bnrLJ1VHY%2FzEofMNtyM3nNJNPEDG2q8NjcxYWpaBhm6YC3YtqkaQYHACrT%2Byorv0tvWaNTDkwuG%2FBjqkAaJme%2BHggHeatCu7LRIAcBWt1kc3LtfCOmo01AxJntPrewbnOtTsx4Dqo2wJuOi%2BQAZQgrEanc6L8INgTTRA7ib%2FUZ8nJNpvv8k65q8Vu1xL5l5bShmoAtovAmJMsguBbilZwDjbIS0%2Fo6FkOU5bUdOW5CGvDE%2B4nur8otBihli4ANY9wK42x%2FLfCM10%2BjVuNMpXuGvCP9JIvgrQzbwGmFz91hhz&X-Amz-Signature=64665a60d0733672b665dc80204e46030277b5acb788ca1c0b8d4438a42e59c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466723MURBZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDrrvW5Sy42a2N923RcKktKD4Gyp0UPLjNAhBWmKZCJ2AIhAMt6Msh3j%2Bd92aoY0aN2chX5rBUYR23A27DGpCz2kAmFKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0zW7i3AsNiPdffJkq3AP%2FmKdKgxxaAo2S6TFzM%2BxIqmAoFfA9Uzp0r7UMkPfSonzVxp7ojUW%2FeV1yiiGZl9SbQQMi7LkoSx%2FY%2BczCTMH1HMzLN3KfCXpHfc1ak85XiSPy8btW9rvvssOB6ZRC34mAY2OIRbQq5XYxjHHH0kscUGJpTIZDTinryKwohlmRAkGjpd%2FJK8cxiDxzWxkr3gh0bFr4poxYXAZfDo7LMZxITx2%2BNOZu%2Fj7A2rZGlbM9xwIlKJkwMuf3Cn63lctlyO%2BPCKqJovpLIYETP44QegXKa%2F3FbkrcdboUgzBk5r819YJsvYUrqa6G5Jwk6Emp2QB9m1yd8nNa23stak0lqzvVYECn4ZQBnfW9AIW3n7Pt2W8H5o0D%2FxeBvwU8r2hsloNap1f%2BHUX%2FLY6xskoukfDtxaolRnUpAEvswsxFnXUVPad9vmnzC9a5lhDVSD9UxF572XdA8THJAP67tfvmZCf2swVstKE3aD40Ew6%2FPRSBvyyIzUCZ%2FJXMssv2JMOo5r5HVuDsxb6PL4E7X2Qd88WFMExS4e8WLDKHOS4NezoC0PSXtDNQMuS9bnrLJ1VHY%2FzEofMNtyM3nNJNPEDG2q8NjcxYWpaBhm6YC3YtqkaQYHACrT%2Byorv0tvWaNTDkwuG%2FBjqkAaJme%2BHggHeatCu7LRIAcBWt1kc3LtfCOmo01AxJntPrewbnOtTsx4Dqo2wJuOi%2BQAZQgrEanc6L8INgTTRA7ib%2FUZ8nJNpvv8k65q8Vu1xL5l5bShmoAtovAmJMsguBbilZwDjbIS0%2Fo6FkOU5bUdOW5CGvDE%2B4nur8otBihli4ANY9wK42x%2FLfCM10%2BjVuNMpXuGvCP9JIvgrQzbwGmFz91hhz&X-Amz-Signature=93364fcadb2e9bc8d1ff8f01b2f36898a7830c356a7bce26b7171755d9f32f92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466723MURBZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDrrvW5Sy42a2N923RcKktKD4Gyp0UPLjNAhBWmKZCJ2AIhAMt6Msh3j%2Bd92aoY0aN2chX5rBUYR23A27DGpCz2kAmFKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0zW7i3AsNiPdffJkq3AP%2FmKdKgxxaAo2S6TFzM%2BxIqmAoFfA9Uzp0r7UMkPfSonzVxp7ojUW%2FeV1yiiGZl9SbQQMi7LkoSx%2FY%2BczCTMH1HMzLN3KfCXpHfc1ak85XiSPy8btW9rvvssOB6ZRC34mAY2OIRbQq5XYxjHHH0kscUGJpTIZDTinryKwohlmRAkGjpd%2FJK8cxiDxzWxkr3gh0bFr4poxYXAZfDo7LMZxITx2%2BNOZu%2Fj7A2rZGlbM9xwIlKJkwMuf3Cn63lctlyO%2BPCKqJovpLIYETP44QegXKa%2F3FbkrcdboUgzBk5r819YJsvYUrqa6G5Jwk6Emp2QB9m1yd8nNa23stak0lqzvVYECn4ZQBnfW9AIW3n7Pt2W8H5o0D%2FxeBvwU8r2hsloNap1f%2BHUX%2FLY6xskoukfDtxaolRnUpAEvswsxFnXUVPad9vmnzC9a5lhDVSD9UxF572XdA8THJAP67tfvmZCf2swVstKE3aD40Ew6%2FPRSBvyyIzUCZ%2FJXMssv2JMOo5r5HVuDsxb6PL4E7X2Qd88WFMExS4e8WLDKHOS4NezoC0PSXtDNQMuS9bnrLJ1VHY%2FzEofMNtyM3nNJNPEDG2q8NjcxYWpaBhm6YC3YtqkaQYHACrT%2Byorv0tvWaNTDkwuG%2FBjqkAaJme%2BHggHeatCu7LRIAcBWt1kc3LtfCOmo01AxJntPrewbnOtTsx4Dqo2wJuOi%2BQAZQgrEanc6L8INgTTRA7ib%2FUZ8nJNpvv8k65q8Vu1xL5l5bShmoAtovAmJMsguBbilZwDjbIS0%2Fo6FkOU5bUdOW5CGvDE%2B4nur8otBihli4ANY9wK42x%2FLfCM10%2BjVuNMpXuGvCP9JIvgrQzbwGmFz91hhz&X-Amz-Signature=d14feb5f9667a37b0be56addc4fcc0669b3af6204351ec0bb202887d0e621778&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
