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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642UV6NSY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVe%2BzWEWK8yTko8e5ea4nUO%2F1sj%2Ft6xL2e2IrBVBifrAIgHohPU25WdiyeCrx0COreEdCDiMnB4fhP%2BMuqVeVKEYsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDFtOvY1kMT4tbizsnSrcA4g7Rm%2FOqdxDuP%2B7DpQHvDDy8Ul5p9G00S3mnD4yh%2FvX0Dr%2Bz%2FkQ9c2XhJKV1pY0FicHPfMZUjp2r1JwFsqV42uZvS9hNe7zwE7HHv0fqkFcIPRqDPVvi2CKRpxur91OCpnMLOyRPrdo%2BJJXRAdhkR8tnJJXM2bFXUUP4DVBe6UwtPQmBxTfcQaOcMRVVwFnE2wyDuAYVJGZOy%2BWpKkAdOck0tZ2P68zIIMLrcVVXenOSR6FP3SvKjfGD1Kh1tXg2pynLNMOxyWCMPCkhbtW3o3XgVR2ksy4DppQ1A6oBXqoX1jspSRt9KTS7mBF7rvY0Xdp0g4jbFL4aw7DBImrRCwAStydzBTj73EsnRyxac5ihV8FuEpAx4PyVSTDFcXY20zEWMXqLPDysliX3CHFPfPI0FypdAFhLlHJ1gaXf6dyrpZTbtv6mQC1%2FYxQH14YGG6u%2BsTYI3pwJ97q1huCjc59IaAw46rxvDV%2BhTvaEKgbrnOm%2Fs8ZKlIkSRndj4fWHxUtnjB7Srw38uwjL2aOYrSCndQrqt87OHFRFFHHcqItt0Dgzv9M0RB7nWvdKdIwLcAfw%2Bhlrao4iW7E8naYCfx5VcDw6MwuDjPjO3gIvaoz6PLRu9QWN6%2FvXDE3MJmV9b8GOqUBF0e1z4PsjSvuvR2zH1W3lnmMCIfABgGll4vL9hKAKyqP3z7sYqhoNzpHyc85XdXamfp69OX5U%2Fhx9Ie8v%2FPnhDAEFO0bNjn98XFvAKA2S9uJWKAly1YG51AuA%2BM073m7QijOMXG%2BuMduOasUpOnx1qwY4Gk%2Fio%2BZ0zLR7XlrrfSLi1cEeO74JLpXy9B8EQ3kdsOl1m8yXLAKKNsR7eBBNttDfQpI&X-Amz-Signature=4495195ce1ddd7d2081d43010db0cd401e9e6db1ff4ec1826da99258c9fe428a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642UV6NSY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVe%2BzWEWK8yTko8e5ea4nUO%2F1sj%2Ft6xL2e2IrBVBifrAIgHohPU25WdiyeCrx0COreEdCDiMnB4fhP%2BMuqVeVKEYsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDFtOvY1kMT4tbizsnSrcA4g7Rm%2FOqdxDuP%2B7DpQHvDDy8Ul5p9G00S3mnD4yh%2FvX0Dr%2Bz%2FkQ9c2XhJKV1pY0FicHPfMZUjp2r1JwFsqV42uZvS9hNe7zwE7HHv0fqkFcIPRqDPVvi2CKRpxur91OCpnMLOyRPrdo%2BJJXRAdhkR8tnJJXM2bFXUUP4DVBe6UwtPQmBxTfcQaOcMRVVwFnE2wyDuAYVJGZOy%2BWpKkAdOck0tZ2P68zIIMLrcVVXenOSR6FP3SvKjfGD1Kh1tXg2pynLNMOxyWCMPCkhbtW3o3XgVR2ksy4DppQ1A6oBXqoX1jspSRt9KTS7mBF7rvY0Xdp0g4jbFL4aw7DBImrRCwAStydzBTj73EsnRyxac5ihV8FuEpAx4PyVSTDFcXY20zEWMXqLPDysliX3CHFPfPI0FypdAFhLlHJ1gaXf6dyrpZTbtv6mQC1%2FYxQH14YGG6u%2BsTYI3pwJ97q1huCjc59IaAw46rxvDV%2BhTvaEKgbrnOm%2Fs8ZKlIkSRndj4fWHxUtnjB7Srw38uwjL2aOYrSCndQrqt87OHFRFFHHcqItt0Dgzv9M0RB7nWvdKdIwLcAfw%2Bhlrao4iW7E8naYCfx5VcDw6MwuDjPjO3gIvaoz6PLRu9QWN6%2FvXDE3MJmV9b8GOqUBF0e1z4PsjSvuvR2zH1W3lnmMCIfABgGll4vL9hKAKyqP3z7sYqhoNzpHyc85XdXamfp69OX5U%2Fhx9Ie8v%2FPnhDAEFO0bNjn98XFvAKA2S9uJWKAly1YG51AuA%2BM073m7QijOMXG%2BuMduOasUpOnx1qwY4Gk%2Fio%2BZ0zLR7XlrrfSLi1cEeO74JLpXy9B8EQ3kdsOl1m8yXLAKKNsR7eBBNttDfQpI&X-Amz-Signature=970e67139e664984b3514c2d99b43e366a19f149411ee911bbe6e58ce286edea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642UV6NSY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVe%2BzWEWK8yTko8e5ea4nUO%2F1sj%2Ft6xL2e2IrBVBifrAIgHohPU25WdiyeCrx0COreEdCDiMnB4fhP%2BMuqVeVKEYsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDFtOvY1kMT4tbizsnSrcA4g7Rm%2FOqdxDuP%2B7DpQHvDDy8Ul5p9G00S3mnD4yh%2FvX0Dr%2Bz%2FkQ9c2XhJKV1pY0FicHPfMZUjp2r1JwFsqV42uZvS9hNe7zwE7HHv0fqkFcIPRqDPVvi2CKRpxur91OCpnMLOyRPrdo%2BJJXRAdhkR8tnJJXM2bFXUUP4DVBe6UwtPQmBxTfcQaOcMRVVwFnE2wyDuAYVJGZOy%2BWpKkAdOck0tZ2P68zIIMLrcVVXenOSR6FP3SvKjfGD1Kh1tXg2pynLNMOxyWCMPCkhbtW3o3XgVR2ksy4DppQ1A6oBXqoX1jspSRt9KTS7mBF7rvY0Xdp0g4jbFL4aw7DBImrRCwAStydzBTj73EsnRyxac5ihV8FuEpAx4PyVSTDFcXY20zEWMXqLPDysliX3CHFPfPI0FypdAFhLlHJ1gaXf6dyrpZTbtv6mQC1%2FYxQH14YGG6u%2BsTYI3pwJ97q1huCjc59IaAw46rxvDV%2BhTvaEKgbrnOm%2Fs8ZKlIkSRndj4fWHxUtnjB7Srw38uwjL2aOYrSCndQrqt87OHFRFFHHcqItt0Dgzv9M0RB7nWvdKdIwLcAfw%2Bhlrao4iW7E8naYCfx5VcDw6MwuDjPjO3gIvaoz6PLRu9QWN6%2FvXDE3MJmV9b8GOqUBF0e1z4PsjSvuvR2zH1W3lnmMCIfABgGll4vL9hKAKyqP3z7sYqhoNzpHyc85XdXamfp69OX5U%2Fhx9Ie8v%2FPnhDAEFO0bNjn98XFvAKA2S9uJWKAly1YG51AuA%2BM073m7QijOMXG%2BuMduOasUpOnx1qwY4Gk%2Fio%2BZ0zLR7XlrrfSLi1cEeO74JLpXy9B8EQ3kdsOl1m8yXLAKKNsR7eBBNttDfQpI&X-Amz-Signature=9456bb4ea5edc34deefc6fab080119e7f21aa43c9c4e90aa61fc57c66e059e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
