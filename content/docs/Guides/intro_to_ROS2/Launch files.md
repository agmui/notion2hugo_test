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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNS27CUI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD%2B6qiLol48YOsfnOdUSPsK5hwtPxWL4C2fNw2ogussAiEApmXVFOj3OTezk%2BiR7rVuCT5nXLC1Cr3YDtWL%2BaSacd4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBcxnU4nLCP%2BbHQ4YircA1eyo1CDk%2BvRlRQCzaxtKRVDBnmdfGahxwJ5o%2FSgJQh8YvoXMc0spZkcII4PbOQMZ89ylcR3UL09XeGicLsVNpRIfF%2Bsw2PMQP%2F7kgcTM9vxFwb0W14qGa4%2FpD0uJdaBfWdhvZMLBERSx3NICuKnEBwdKhmKq%2Bu2aKNet%2Ffn6UEbTPkZQM5Z1F2DWBFGUD5nR6%2FdXUfzptNNT7eA%2BxiqyYmCWSH%2FYtk2L20Wl%2BIdbjsEMBRIm319Bv%2F6dvfmcYoaxr3O1ZC9FJF6BMbfk3mEFgL4cTsBqxf%2BTyQ6GkcKfoAOJa1bmTOV6efvInquVOeCUjfXfh3w2RAiyoRsoYWBTdzsCCYegcGIcbelpPc1QUvC%2FvX8qnsm7j5AR5i9yhUAj6L%2BTycep8LzgTadJgacytIDzEDAKO1jy%2B9mOUnv9b%2BU8kjygp2UJEw3bsETfEbLoB4%2B7D5i%2BiVRpu2o458R3aVxhUzMW2cZVyOOGEUELag90HSxN6ng9f79htxH98rOXz6IPVNk9GTX%2BbI%2Fjhc7LzTbXdXA4VEPTZkW8qHDm3aE2BBGTQj%2FZocjxDoVSC%2F%2FJ93ILcmPwYzFN6f9kfQkOjtYVOfMsKvHA1ubjtS8TpSPN9Ohc31wUsNiKUGcMNj%2Fx78GOqUBCFknc0cpzNqDHWfd4fANlG0iSO03BWPnW%2B2L4fx387ZSiUMBwJ6DQJ90pKVe%2BAXihV%2FlYkT0QsvL7nvged0uN0t6qtOGMFL%2FQVDjT24tdOuqBd0PfKhzUzfQQu0MURxFr%2FrDMo83xuJ5HpRYjWln%2BgDEZLq0igzwpWj65xnBEAcUVmLPvmKRPEZ0NFpqckjh2PgnSsgOWRPEZ9C%2FDjROq19r8TMx&X-Amz-Signature=a7c90898fbc32f650b0b81f43b11d6143550983c1a2e27d64367eae471cf7951&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNS27CUI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD%2B6qiLol48YOsfnOdUSPsK5hwtPxWL4C2fNw2ogussAiEApmXVFOj3OTezk%2BiR7rVuCT5nXLC1Cr3YDtWL%2BaSacd4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBcxnU4nLCP%2BbHQ4YircA1eyo1CDk%2BvRlRQCzaxtKRVDBnmdfGahxwJ5o%2FSgJQh8YvoXMc0spZkcII4PbOQMZ89ylcR3UL09XeGicLsVNpRIfF%2Bsw2PMQP%2F7kgcTM9vxFwb0W14qGa4%2FpD0uJdaBfWdhvZMLBERSx3NICuKnEBwdKhmKq%2Bu2aKNet%2Ffn6UEbTPkZQM5Z1F2DWBFGUD5nR6%2FdXUfzptNNT7eA%2BxiqyYmCWSH%2FYtk2L20Wl%2BIdbjsEMBRIm319Bv%2F6dvfmcYoaxr3O1ZC9FJF6BMbfk3mEFgL4cTsBqxf%2BTyQ6GkcKfoAOJa1bmTOV6efvInquVOeCUjfXfh3w2RAiyoRsoYWBTdzsCCYegcGIcbelpPc1QUvC%2FvX8qnsm7j5AR5i9yhUAj6L%2BTycep8LzgTadJgacytIDzEDAKO1jy%2B9mOUnv9b%2BU8kjygp2UJEw3bsETfEbLoB4%2B7D5i%2BiVRpu2o458R3aVxhUzMW2cZVyOOGEUELag90HSxN6ng9f79htxH98rOXz6IPVNk9GTX%2BbI%2Fjhc7LzTbXdXA4VEPTZkW8qHDm3aE2BBGTQj%2FZocjxDoVSC%2F%2FJ93ILcmPwYzFN6f9kfQkOjtYVOfMsKvHA1ubjtS8TpSPN9Ohc31wUsNiKUGcMNj%2Fx78GOqUBCFknc0cpzNqDHWfd4fANlG0iSO03BWPnW%2B2L4fx387ZSiUMBwJ6DQJ90pKVe%2BAXihV%2FlYkT0QsvL7nvged0uN0t6qtOGMFL%2FQVDjT24tdOuqBd0PfKhzUzfQQu0MURxFr%2FrDMo83xuJ5HpRYjWln%2BgDEZLq0igzwpWj65xnBEAcUVmLPvmKRPEZ0NFpqckjh2PgnSsgOWRPEZ9C%2FDjROq19r8TMx&X-Amz-Signature=11edb26ab5c1d3535877d4d242b43b779a1db9a4959ad41970d78c86a8d7f929&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNS27CUI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD%2B6qiLol48YOsfnOdUSPsK5hwtPxWL4C2fNw2ogussAiEApmXVFOj3OTezk%2BiR7rVuCT5nXLC1Cr3YDtWL%2BaSacd4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBcxnU4nLCP%2BbHQ4YircA1eyo1CDk%2BvRlRQCzaxtKRVDBnmdfGahxwJ5o%2FSgJQh8YvoXMc0spZkcII4PbOQMZ89ylcR3UL09XeGicLsVNpRIfF%2Bsw2PMQP%2F7kgcTM9vxFwb0W14qGa4%2FpD0uJdaBfWdhvZMLBERSx3NICuKnEBwdKhmKq%2Bu2aKNet%2Ffn6UEbTPkZQM5Z1F2DWBFGUD5nR6%2FdXUfzptNNT7eA%2BxiqyYmCWSH%2FYtk2L20Wl%2BIdbjsEMBRIm319Bv%2F6dvfmcYoaxr3O1ZC9FJF6BMbfk3mEFgL4cTsBqxf%2BTyQ6GkcKfoAOJa1bmTOV6efvInquVOeCUjfXfh3w2RAiyoRsoYWBTdzsCCYegcGIcbelpPc1QUvC%2FvX8qnsm7j5AR5i9yhUAj6L%2BTycep8LzgTadJgacytIDzEDAKO1jy%2B9mOUnv9b%2BU8kjygp2UJEw3bsETfEbLoB4%2B7D5i%2BiVRpu2o458R3aVxhUzMW2cZVyOOGEUELag90HSxN6ng9f79htxH98rOXz6IPVNk9GTX%2BbI%2Fjhc7LzTbXdXA4VEPTZkW8qHDm3aE2BBGTQj%2FZocjxDoVSC%2F%2FJ93ILcmPwYzFN6f9kfQkOjtYVOfMsKvHA1ubjtS8TpSPN9Ohc31wUsNiKUGcMNj%2Fx78GOqUBCFknc0cpzNqDHWfd4fANlG0iSO03BWPnW%2B2L4fx387ZSiUMBwJ6DQJ90pKVe%2BAXihV%2FlYkT0QsvL7nvged0uN0t6qtOGMFL%2FQVDjT24tdOuqBd0PfKhzUzfQQu0MURxFr%2FrDMo83xuJ5HpRYjWln%2BgDEZLq0igzwpWj65xnBEAcUVmLPvmKRPEZ0NFpqckjh2PgnSsgOWRPEZ9C%2FDjROq19r8TMx&X-Amz-Signature=d7ebf5f097620c4090df25a2a6cca8d22ac6476e4c881524aeab0869c6874ce0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
