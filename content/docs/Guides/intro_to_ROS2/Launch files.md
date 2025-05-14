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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPNSORSL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFjswOXcIA%2FBowTOF0p0Om09bcuowHezD7ucZqRIAPTaAiEAnLGu8yfkcxYzp3QNoPpHHtf7yToB2lovaCFlnE%2Fbyd0q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDHF5gF4SaYsaJO%2FN6CrcA%2FytSKIQuRjVu%2BzJexrlvzOc1Kgibdnf%2FwZBeuqWX2tWwl%2FPApdQggHt0%2B2WXut%2B%2F1JjeZ8lkDhCDjaxLuAS%2FG5PSgnVCDPz4hJIQdepFm%2FaMDTpBsgFyir5nnCxDUgFwNn4EuJB5uMqnpShTKvOb1jgqNFacm64tblPjSaiZGhfdIRCgJMV%2FudXdwK8mdP9OqUTtZ1B5%2BY%2FCeyG9cxB0itN1UH4da8Qd7w9yXIjNOCEblKa5%2BnICW60IiM9UdhvAHW4pm1Q2q8F0wUM1jP6k373ym7pBqFrJ7X6nggeApGahXU5mFx8%2F1XAxgoWqaH9Az3HIojU%2BTiKjLRcszKwUON%2BPSC6HxI6dgiu12vdDfywosuz%2BgqMFmQ3cnI0WwwVKj5pFEhUqoVggXT4CC9hEOBOuRUycaCrvDaGrtN5iFmpko71CvN3vbgEau1%2FrRbqvBfj7zW7vG%2Fi0QJpk4FAC6lzYGROz9LqgEzptet7FrVeXYeJqxVvCJsCCBh2AsBM3hScaiqXQQSnrP189OtW9f4QV%2B0oyyI2cqqhCkrhNMowHp0EfUZQcPIR349GIysPbIluhEQfhO0zSsQFJs0TygjQUVciizCS8GPN77mYK6HdzoH2d17Ysb%2By9bUZMNqhlMEGOqUB9Bdqi7JhaFrcBphlCn92vuEpSdNKb0OL3SiHF3eT9X8zVUEWcXy910h8WGSfSkaCeydCWp%2FJ9Oz27%2FAeOk8OmCxuGUeKgR4vBvY9xcuj8WjQg7fvFAByCqGtuRd%2B0fzp1n4XZs%2Bx1F8ughRcGOvn1Ee7SYQf%2FhLmSwAqlmb4y3DM3gR7iv4mjZSPbr1lOkz0XIcz7Rq1S9%2BG1eSaZVpR7ngzxTa6&X-Amz-Signature=77665d32ea66e33052db2104322075da8d3750f6a1cf3a22534a73119e88ebc2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPNSORSL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFjswOXcIA%2FBowTOF0p0Om09bcuowHezD7ucZqRIAPTaAiEAnLGu8yfkcxYzp3QNoPpHHtf7yToB2lovaCFlnE%2Fbyd0q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDHF5gF4SaYsaJO%2FN6CrcA%2FytSKIQuRjVu%2BzJexrlvzOc1Kgibdnf%2FwZBeuqWX2tWwl%2FPApdQggHt0%2B2WXut%2B%2F1JjeZ8lkDhCDjaxLuAS%2FG5PSgnVCDPz4hJIQdepFm%2FaMDTpBsgFyir5nnCxDUgFwNn4EuJB5uMqnpShTKvOb1jgqNFacm64tblPjSaiZGhfdIRCgJMV%2FudXdwK8mdP9OqUTtZ1B5%2BY%2FCeyG9cxB0itN1UH4da8Qd7w9yXIjNOCEblKa5%2BnICW60IiM9UdhvAHW4pm1Q2q8F0wUM1jP6k373ym7pBqFrJ7X6nggeApGahXU5mFx8%2F1XAxgoWqaH9Az3HIojU%2BTiKjLRcszKwUON%2BPSC6HxI6dgiu12vdDfywosuz%2BgqMFmQ3cnI0WwwVKj5pFEhUqoVggXT4CC9hEOBOuRUycaCrvDaGrtN5iFmpko71CvN3vbgEau1%2FrRbqvBfj7zW7vG%2Fi0QJpk4FAC6lzYGROz9LqgEzptet7FrVeXYeJqxVvCJsCCBh2AsBM3hScaiqXQQSnrP189OtW9f4QV%2B0oyyI2cqqhCkrhNMowHp0EfUZQcPIR349GIysPbIluhEQfhO0zSsQFJs0TygjQUVciizCS8GPN77mYK6HdzoH2d17Ysb%2By9bUZMNqhlMEGOqUB9Bdqi7JhaFrcBphlCn92vuEpSdNKb0OL3SiHF3eT9X8zVUEWcXy910h8WGSfSkaCeydCWp%2FJ9Oz27%2FAeOk8OmCxuGUeKgR4vBvY9xcuj8WjQg7fvFAByCqGtuRd%2B0fzp1n4XZs%2Bx1F8ughRcGOvn1Ee7SYQf%2FhLmSwAqlmb4y3DM3gR7iv4mjZSPbr1lOkz0XIcz7Rq1S9%2BG1eSaZVpR7ngzxTa6&X-Amz-Signature=08430b843583edac525201f67e2e4fdfba42e51f9d43f45c755526412429f30c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPNSORSL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFjswOXcIA%2FBowTOF0p0Om09bcuowHezD7ucZqRIAPTaAiEAnLGu8yfkcxYzp3QNoPpHHtf7yToB2lovaCFlnE%2Fbyd0q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDHF5gF4SaYsaJO%2FN6CrcA%2FytSKIQuRjVu%2BzJexrlvzOc1Kgibdnf%2FwZBeuqWX2tWwl%2FPApdQggHt0%2B2WXut%2B%2F1JjeZ8lkDhCDjaxLuAS%2FG5PSgnVCDPz4hJIQdepFm%2FaMDTpBsgFyir5nnCxDUgFwNn4EuJB5uMqnpShTKvOb1jgqNFacm64tblPjSaiZGhfdIRCgJMV%2FudXdwK8mdP9OqUTtZ1B5%2BY%2FCeyG9cxB0itN1UH4da8Qd7w9yXIjNOCEblKa5%2BnICW60IiM9UdhvAHW4pm1Q2q8F0wUM1jP6k373ym7pBqFrJ7X6nggeApGahXU5mFx8%2F1XAxgoWqaH9Az3HIojU%2BTiKjLRcszKwUON%2BPSC6HxI6dgiu12vdDfywosuz%2BgqMFmQ3cnI0WwwVKj5pFEhUqoVggXT4CC9hEOBOuRUycaCrvDaGrtN5iFmpko71CvN3vbgEau1%2FrRbqvBfj7zW7vG%2Fi0QJpk4FAC6lzYGROz9LqgEzptet7FrVeXYeJqxVvCJsCCBh2AsBM3hScaiqXQQSnrP189OtW9f4QV%2B0oyyI2cqqhCkrhNMowHp0EfUZQcPIR349GIysPbIluhEQfhO0zSsQFJs0TygjQUVciizCS8GPN77mYK6HdzoH2d17Ysb%2By9bUZMNqhlMEGOqUB9Bdqi7JhaFrcBphlCn92vuEpSdNKb0OL3SiHF3eT9X8zVUEWcXy910h8WGSfSkaCeydCWp%2FJ9Oz27%2FAeOk8OmCxuGUeKgR4vBvY9xcuj8WjQg7fvFAByCqGtuRd%2B0fzp1n4XZs%2Bx1F8ughRcGOvn1Ee7SYQf%2FhLmSwAqlmb4y3DM3gR7iv4mjZSPbr1lOkz0XIcz7Rq1S9%2BG1eSaZVpR7ngzxTa6&X-Amz-Signature=93f9d3bc0eda9b5d115dafa6ef7c8ed62634e4dae227c8c0d95a22244a175ec9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
