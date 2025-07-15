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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEYBQAY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQC%2B%2Bl0Z%2FE%2FsaW1lkGv8K1TpHkkdBH%2BEXz0c4SBEBHFhsgIgSOpIkKl6RrnemP7dxhjO%2BRJCJxi0WgU6C%2FIIvgOxHA4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPMlpQfM2Bs93e9RdCrcA9xmoJtp6YCrEJrhP%2BJNCR6RQwAZGpKtVGHBMVkdrzBt66LoIcCywfUf%2F7EZSpCFtUnu%2FCrxdgyYz8iBMk280yJ2EJHqfXid6s5huNwzuOW16D0Z7V3VJvGI4%2BBo2aKGBrnRAw3d57%2Flb2si%2FhH4vsLxbWIAroTWb5s1cVSkqdPqzikw9MQ6EuQxsQ9bPHdr6T6DirF8mezKGDCUAkiH%2BWxj%2FN5c8bBB86H9UiF%2F3rygCPjoSjvIV6Z%2BYEweSzRhIx4M6LOao%2F8gAx0c4noDJ3eYHHOXk8JNbv4zVF2o89QdJIk5CF%2BdvRF2XHJuovTbcZ9IXT9n44aLHaBNGY4gkIMA4MU6pZsfckrce0R%2FlHBfBQVV3nf5GayVk62H7YxRFPC4cTKpk3Fvb7r%2Fvhb2%2F%2Fc0a%2F2bA5787VdTHhQxnxSn21GRNNunNNs5d98HhWUBFmxZ1CMyKkbsNlBgD4jdnu2eyAiuhPWLPxu3UP5ihogydG7g%2BoDQ1JiRZCfVItMnaseC9o3O0x08VUrKbXgIqBPEGaCFQFrC77thUDdZbn2hq0BqXfskMAFT%2Ff%2BBk0d5QzkALGLmfy6KPwmuiSMB9qQL440RnzlHOWCfjlU76TlTEqKXNa%2FKWnKc8LEHMJqx2MMGOqUBPaAxgLMS8Ad5WVQR50FLoUpVZMHNn6qvVSzymqyxhDh9kRTGGg%2B2hzzD91p8s63aN165pjoj0AYo4LbrTyvmo39qaWz5SrLc1r3TFa8MCEFn%2FvB8luWr1CpywS9AKCUlpy%2BFCOpuXKEqE3HBiNMG7hlK24%2BW3c9KkJx0elKMLfgPgl9Xu91OIdqDvnSmTxJESmkkcD9nFDnKmriBjSmI84aDLUt0&X-Amz-Signature=7af52c5c072afb2e457dc8025c94fe6d043a1cef590fb5b5373db9a0cea07a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEYBQAY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQC%2B%2Bl0Z%2FE%2FsaW1lkGv8K1TpHkkdBH%2BEXz0c4SBEBHFhsgIgSOpIkKl6RrnemP7dxhjO%2BRJCJxi0WgU6C%2FIIvgOxHA4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPMlpQfM2Bs93e9RdCrcA9xmoJtp6YCrEJrhP%2BJNCR6RQwAZGpKtVGHBMVkdrzBt66LoIcCywfUf%2F7EZSpCFtUnu%2FCrxdgyYz8iBMk280yJ2EJHqfXid6s5huNwzuOW16D0Z7V3VJvGI4%2BBo2aKGBrnRAw3d57%2Flb2si%2FhH4vsLxbWIAroTWb5s1cVSkqdPqzikw9MQ6EuQxsQ9bPHdr6T6DirF8mezKGDCUAkiH%2BWxj%2FN5c8bBB86H9UiF%2F3rygCPjoSjvIV6Z%2BYEweSzRhIx4M6LOao%2F8gAx0c4noDJ3eYHHOXk8JNbv4zVF2o89QdJIk5CF%2BdvRF2XHJuovTbcZ9IXT9n44aLHaBNGY4gkIMA4MU6pZsfckrce0R%2FlHBfBQVV3nf5GayVk62H7YxRFPC4cTKpk3Fvb7r%2Fvhb2%2F%2Fc0a%2F2bA5787VdTHhQxnxSn21GRNNunNNs5d98HhWUBFmxZ1CMyKkbsNlBgD4jdnu2eyAiuhPWLPxu3UP5ihogydG7g%2BoDQ1JiRZCfVItMnaseC9o3O0x08VUrKbXgIqBPEGaCFQFrC77thUDdZbn2hq0BqXfskMAFT%2Ff%2BBk0d5QzkALGLmfy6KPwmuiSMB9qQL440RnzlHOWCfjlU76TlTEqKXNa%2FKWnKc8LEHMJqx2MMGOqUBPaAxgLMS8Ad5WVQR50FLoUpVZMHNn6qvVSzymqyxhDh9kRTGGg%2B2hzzD91p8s63aN165pjoj0AYo4LbrTyvmo39qaWz5SrLc1r3TFa8MCEFn%2FvB8luWr1CpywS9AKCUlpy%2BFCOpuXKEqE3HBiNMG7hlK24%2BW3c9KkJx0elKMLfgPgl9Xu91OIdqDvnSmTxJESmkkcD9nFDnKmriBjSmI84aDLUt0&X-Amz-Signature=ae8b7aabf90bc839a228a68760b5a85681a6923e3358124d56b4aecaa4602a52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEYBQAY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQC%2B%2Bl0Z%2FE%2FsaW1lkGv8K1TpHkkdBH%2BEXz0c4SBEBHFhsgIgSOpIkKl6RrnemP7dxhjO%2BRJCJxi0WgU6C%2FIIvgOxHA4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPMlpQfM2Bs93e9RdCrcA9xmoJtp6YCrEJrhP%2BJNCR6RQwAZGpKtVGHBMVkdrzBt66LoIcCywfUf%2F7EZSpCFtUnu%2FCrxdgyYz8iBMk280yJ2EJHqfXid6s5huNwzuOW16D0Z7V3VJvGI4%2BBo2aKGBrnRAw3d57%2Flb2si%2FhH4vsLxbWIAroTWb5s1cVSkqdPqzikw9MQ6EuQxsQ9bPHdr6T6DirF8mezKGDCUAkiH%2BWxj%2FN5c8bBB86H9UiF%2F3rygCPjoSjvIV6Z%2BYEweSzRhIx4M6LOao%2F8gAx0c4noDJ3eYHHOXk8JNbv4zVF2o89QdJIk5CF%2BdvRF2XHJuovTbcZ9IXT9n44aLHaBNGY4gkIMA4MU6pZsfckrce0R%2FlHBfBQVV3nf5GayVk62H7YxRFPC4cTKpk3Fvb7r%2Fvhb2%2F%2Fc0a%2F2bA5787VdTHhQxnxSn21GRNNunNNs5d98HhWUBFmxZ1CMyKkbsNlBgD4jdnu2eyAiuhPWLPxu3UP5ihogydG7g%2BoDQ1JiRZCfVItMnaseC9o3O0x08VUrKbXgIqBPEGaCFQFrC77thUDdZbn2hq0BqXfskMAFT%2Ff%2BBk0d5QzkALGLmfy6KPwmuiSMB9qQL440RnzlHOWCfjlU76TlTEqKXNa%2FKWnKc8LEHMJqx2MMGOqUBPaAxgLMS8Ad5WVQR50FLoUpVZMHNn6qvVSzymqyxhDh9kRTGGg%2B2hzzD91p8s63aN165pjoj0AYo4LbrTyvmo39qaWz5SrLc1r3TFa8MCEFn%2FvB8luWr1CpywS9AKCUlpy%2BFCOpuXKEqE3HBiNMG7hlK24%2BW3c9KkJx0elKMLfgPgl9Xu91OIdqDvnSmTxJESmkkcD9nFDnKmriBjSmI84aDLUt0&X-Amz-Signature=88362f4510dac106cd1512cae95ef117b9208c2e354aa0644a12b0e05661743f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
