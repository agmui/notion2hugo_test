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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLAFOYDJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIEpZZrWWlZA3DPQ%2F88BT3XRGcK3ZBHwcXBPSFULz%2BvGMAiEAsO3cDHV98KG67XX80kITgWspiHQIuyxJW2Nv3NsnAZgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFB4lpT1czCREkG%2FIyrcAxkiVT8NWPMuLK4urkXtDkX8NMo4TiBujIvwG53qJQYx3T9dL3gAFae6Y5dLBPmDYKMRjaurIQB0Q6aEbq6S%2FH5AugHFG1BHUjps0eEehkQc624g0Vrdlz61xeQz9MrFlcClE20dYF6rMJrY6QEzrva6ywNIDN1zAS1%2BTfXew8DEopND%2Bo5P7liBtIHGQu5bUV42OpEk8spnZnjyF2PFLlIS8k48vqRz1vuIMLhjotWp6Jt4tDTVW%2B80maF%2B6mkt3AK1%2BzzIqCYvP6EjJjzDElxoJ%2BJUhOo%2BSUumGQ6syDoSUDy3oLQfsIepI2dbzdkCvtQGX%2BE8kTCQVinj9TF%2FCKdY7CuIgmkcTdPxjayUYL%2BeHke6kDlHOBse7eaoQxzG1xj0QccmVQ4TM1%2BXHmiZb%2BUoz%2BVoVi5GgViVs9OrIE%2F0mDO%2FtHcwddW5V9oz3soJjJTF7Dx5uFvX7HkRyET72NoYrBDZhhgbIBPBz0noV73I9Q2Y4EwA6CtRyd2flzXBlycd6yhIiiEFe2bkUVBbI6K4m%2B2FRWymeYcuA1II%2FjGZjUAl%2FQavbZSF4DfFAwGqPtyTnUfKfaFQ01o%2BQ%2FHx5GXk5AbOhGtgZ18%2BZHx7kq58JLrmuqyXhvfiaelEMJaY5cIGOqUBdJAAHoJcScsJ4h8beUzLEv3TpIIKRCoejsT7UaH5DaksDdfsbaQMjlr1IX7r0N7VGV6BYjkVS3QvTzrnSmV2gTIxUkAdLczp9DPAIgPE%2FHGTtwL1dbWWxY45gHoIniIXSrV0Ilr3djxU%2BZ7Kco27%2FuwTyxwHUaFh6WhGiby6EnerxUAOvnf9MCuK%2FN6k1CSMn6vzwhA7KkFUHeru4%2BAWLKO5zseK&X-Amz-Signature=b0ce1c623c71456971320355909d6cf0fa73907b86dee8342b94f093e3009cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLAFOYDJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIEpZZrWWlZA3DPQ%2F88BT3XRGcK3ZBHwcXBPSFULz%2BvGMAiEAsO3cDHV98KG67XX80kITgWspiHQIuyxJW2Nv3NsnAZgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFB4lpT1czCREkG%2FIyrcAxkiVT8NWPMuLK4urkXtDkX8NMo4TiBujIvwG53qJQYx3T9dL3gAFae6Y5dLBPmDYKMRjaurIQB0Q6aEbq6S%2FH5AugHFG1BHUjps0eEehkQc624g0Vrdlz61xeQz9MrFlcClE20dYF6rMJrY6QEzrva6ywNIDN1zAS1%2BTfXew8DEopND%2Bo5P7liBtIHGQu5bUV42OpEk8spnZnjyF2PFLlIS8k48vqRz1vuIMLhjotWp6Jt4tDTVW%2B80maF%2B6mkt3AK1%2BzzIqCYvP6EjJjzDElxoJ%2BJUhOo%2BSUumGQ6syDoSUDy3oLQfsIepI2dbzdkCvtQGX%2BE8kTCQVinj9TF%2FCKdY7CuIgmkcTdPxjayUYL%2BeHke6kDlHOBse7eaoQxzG1xj0QccmVQ4TM1%2BXHmiZb%2BUoz%2BVoVi5GgViVs9OrIE%2F0mDO%2FtHcwddW5V9oz3soJjJTF7Dx5uFvX7HkRyET72NoYrBDZhhgbIBPBz0noV73I9Q2Y4EwA6CtRyd2flzXBlycd6yhIiiEFe2bkUVBbI6K4m%2B2FRWymeYcuA1II%2FjGZjUAl%2FQavbZSF4DfFAwGqPtyTnUfKfaFQ01o%2BQ%2FHx5GXk5AbOhGtgZ18%2BZHx7kq58JLrmuqyXhvfiaelEMJaY5cIGOqUBdJAAHoJcScsJ4h8beUzLEv3TpIIKRCoejsT7UaH5DaksDdfsbaQMjlr1IX7r0N7VGV6BYjkVS3QvTzrnSmV2gTIxUkAdLczp9DPAIgPE%2FHGTtwL1dbWWxY45gHoIniIXSrV0Ilr3djxU%2BZ7Kco27%2FuwTyxwHUaFh6WhGiby6EnerxUAOvnf9MCuK%2FN6k1CSMn6vzwhA7KkFUHeru4%2BAWLKO5zseK&X-Amz-Signature=e61cff99462e23816404c655fc98050dff9d9f1a8a7b3f9e01635a38a9fcc98b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLAFOYDJ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIEpZZrWWlZA3DPQ%2F88BT3XRGcK3ZBHwcXBPSFULz%2BvGMAiEAsO3cDHV98KG67XX80kITgWspiHQIuyxJW2Nv3NsnAZgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFB4lpT1czCREkG%2FIyrcAxkiVT8NWPMuLK4urkXtDkX8NMo4TiBujIvwG53qJQYx3T9dL3gAFae6Y5dLBPmDYKMRjaurIQB0Q6aEbq6S%2FH5AugHFG1BHUjps0eEehkQc624g0Vrdlz61xeQz9MrFlcClE20dYF6rMJrY6QEzrva6ywNIDN1zAS1%2BTfXew8DEopND%2Bo5P7liBtIHGQu5bUV42OpEk8spnZnjyF2PFLlIS8k48vqRz1vuIMLhjotWp6Jt4tDTVW%2B80maF%2B6mkt3AK1%2BzzIqCYvP6EjJjzDElxoJ%2BJUhOo%2BSUumGQ6syDoSUDy3oLQfsIepI2dbzdkCvtQGX%2BE8kTCQVinj9TF%2FCKdY7CuIgmkcTdPxjayUYL%2BeHke6kDlHOBse7eaoQxzG1xj0QccmVQ4TM1%2BXHmiZb%2BUoz%2BVoVi5GgViVs9OrIE%2F0mDO%2FtHcwddW5V9oz3soJjJTF7Dx5uFvX7HkRyET72NoYrBDZhhgbIBPBz0noV73I9Q2Y4EwA6CtRyd2flzXBlycd6yhIiiEFe2bkUVBbI6K4m%2B2FRWymeYcuA1II%2FjGZjUAl%2FQavbZSF4DfFAwGqPtyTnUfKfaFQ01o%2BQ%2FHx5GXk5AbOhGtgZ18%2BZHx7kq58JLrmuqyXhvfiaelEMJaY5cIGOqUBdJAAHoJcScsJ4h8beUzLEv3TpIIKRCoejsT7UaH5DaksDdfsbaQMjlr1IX7r0N7VGV6BYjkVS3QvTzrnSmV2gTIxUkAdLczp9DPAIgPE%2FHGTtwL1dbWWxY45gHoIniIXSrV0Ilr3djxU%2BZ7Kco27%2FuwTyxwHUaFh6WhGiby6EnerxUAOvnf9MCuK%2FN6k1CSMn6vzwhA7KkFUHeru4%2BAWLKO5zseK&X-Amz-Signature=18f03f34198f8be093e208e8aec67b97bd5b06afe0279925dc25d920b9dafb00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
