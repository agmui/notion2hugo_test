---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEYV2GTV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC7yD4Rcrx18Xaq3DD5zOVSP120%2BcJfQF13wBJG5imSYgIhANMy%2F3jkj2%2F6PFhb3EUvpfl%2B8IOHgr%2F9qlMav3XEckzNKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6RF4yfDZheOBAGfsq3ANIc3eQIE8qvZobWKLAnVoCnEC%2FVyH%2FsabLLBnx650Zj3qvs2CcU8Z5akf2Xfx6v%2FALpooXwVzMBlrkNO10oVUR6y%2FxwhI53UeeRWHt57%2Felvt26WhJb%2B9g9hvOoINyB5N8I5om14U3YgIS4cG1PDRQtqG7dmHIljfumyJ7fho8AVy8T1qk73Uv0l45NN7JR4%2Fssr5fSbH0Br1tnJmI1a%2B%2BI13CwH0uqXJ3ap6YLxc2Z4Wjn2WRJBiFW4SmZZLp9fo%2FeOMO1nl%2BMzgFbGaZbnBUeyqpIBdEpRBUAgRmPHiQ6Bld%2Frhu3uVlynNNc%2Faq2pVv1yNlR0cAmvP8OvqrpjylaQ%2FNMnYUeTbd3wz8im5zAD7WLmeAUucW%2BF%2B80t8oKcYFLM3uG%2BmnnTGlQ2qH5Jpg5z016W5pCodUMC6J0K1Dvaa08BiFHbn%2F0zA%2FCqtFyc2UD4mq6Sw2%2BNDwgVs8u83wWEADezOd5rKAOmb56%2BafTajVwI3odXoC9bfOniEyRoKLYQf1Jwbp%2FTe0hhbMg0%2BCOxhVyvipGI%2BdT42eL5K%2B4yk4i7tH0bJ02wLIcJ6nCyCpksoPwnK1YrtPJaa8%2BKYsg%2BBOZGdczg2%2FRfA0pma6Im4TB8eliTvFs1lfNzCf56LEBjqkAXCgTZnrptOPFnkzxQ1if57wsX%2Bs6uz2jrc1fYGrQ2ZapztwNOAfUx45yQjrBaS9462Ol7afXFDq3vP%2F3ellZc8PAuCFynpe4DcfbPmZQTBGXyTjxqKkvk92Aj4rme7Vlrv1O0X90ZvwxKSngZhM4wuNnbacz%2Bx%2FhxZyr%2B7gkcUFj8%2B7HzS%2BywhkxQJt277qKsa3%2FjqWJSGetywELLHmvmfrKd7A&X-Amz-Signature=b3e647e7ce8abf8925a2abe1d5deb83f594b092e8584f780b099150c182eb2a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEYV2GTV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC7yD4Rcrx18Xaq3DD5zOVSP120%2BcJfQF13wBJG5imSYgIhANMy%2F3jkj2%2F6PFhb3EUvpfl%2B8IOHgr%2F9qlMav3XEckzNKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6RF4yfDZheOBAGfsq3ANIc3eQIE8qvZobWKLAnVoCnEC%2FVyH%2FsabLLBnx650Zj3qvs2CcU8Z5akf2Xfx6v%2FALpooXwVzMBlrkNO10oVUR6y%2FxwhI53UeeRWHt57%2Felvt26WhJb%2B9g9hvOoINyB5N8I5om14U3YgIS4cG1PDRQtqG7dmHIljfumyJ7fho8AVy8T1qk73Uv0l45NN7JR4%2Fssr5fSbH0Br1tnJmI1a%2B%2BI13CwH0uqXJ3ap6YLxc2Z4Wjn2WRJBiFW4SmZZLp9fo%2FeOMO1nl%2BMzgFbGaZbnBUeyqpIBdEpRBUAgRmPHiQ6Bld%2Frhu3uVlynNNc%2Faq2pVv1yNlR0cAmvP8OvqrpjylaQ%2FNMnYUeTbd3wz8im5zAD7WLmeAUucW%2BF%2B80t8oKcYFLM3uG%2BmnnTGlQ2qH5Jpg5z016W5pCodUMC6J0K1Dvaa08BiFHbn%2F0zA%2FCqtFyc2UD4mq6Sw2%2BNDwgVs8u83wWEADezOd5rKAOmb56%2BafTajVwI3odXoC9bfOniEyRoKLYQf1Jwbp%2FTe0hhbMg0%2BCOxhVyvipGI%2BdT42eL5K%2B4yk4i7tH0bJ02wLIcJ6nCyCpksoPwnK1YrtPJaa8%2BKYsg%2BBOZGdczg2%2FRfA0pma6Im4TB8eliTvFs1lfNzCf56LEBjqkAXCgTZnrptOPFnkzxQ1if57wsX%2Bs6uz2jrc1fYGrQ2ZapztwNOAfUx45yQjrBaS9462Ol7afXFDq3vP%2F3ellZc8PAuCFynpe4DcfbPmZQTBGXyTjxqKkvk92Aj4rme7Vlrv1O0X90ZvwxKSngZhM4wuNnbacz%2Bx%2FhxZyr%2B7gkcUFj8%2B7HzS%2BywhkxQJt277qKsa3%2FjqWJSGetywELLHmvmfrKd7A&X-Amz-Signature=267395a0662700cef948ad0e9311f4cc0a92194809b5e259455ce5dacfe4b101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEYV2GTV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC7yD4Rcrx18Xaq3DD5zOVSP120%2BcJfQF13wBJG5imSYgIhANMy%2F3jkj2%2F6PFhb3EUvpfl%2B8IOHgr%2F9qlMav3XEckzNKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6RF4yfDZheOBAGfsq3ANIc3eQIE8qvZobWKLAnVoCnEC%2FVyH%2FsabLLBnx650Zj3qvs2CcU8Z5akf2Xfx6v%2FALpooXwVzMBlrkNO10oVUR6y%2FxwhI53UeeRWHt57%2Felvt26WhJb%2B9g9hvOoINyB5N8I5om14U3YgIS4cG1PDRQtqG7dmHIljfumyJ7fho8AVy8T1qk73Uv0l45NN7JR4%2Fssr5fSbH0Br1tnJmI1a%2B%2BI13CwH0uqXJ3ap6YLxc2Z4Wjn2WRJBiFW4SmZZLp9fo%2FeOMO1nl%2BMzgFbGaZbnBUeyqpIBdEpRBUAgRmPHiQ6Bld%2Frhu3uVlynNNc%2Faq2pVv1yNlR0cAmvP8OvqrpjylaQ%2FNMnYUeTbd3wz8im5zAD7WLmeAUucW%2BF%2B80t8oKcYFLM3uG%2BmnnTGlQ2qH5Jpg5z016W5pCodUMC6J0K1Dvaa08BiFHbn%2F0zA%2FCqtFyc2UD4mq6Sw2%2BNDwgVs8u83wWEADezOd5rKAOmb56%2BafTajVwI3odXoC9bfOniEyRoKLYQf1Jwbp%2FTe0hhbMg0%2BCOxhVyvipGI%2BdT42eL5K%2B4yk4i7tH0bJ02wLIcJ6nCyCpksoPwnK1YrtPJaa8%2BKYsg%2BBOZGdczg2%2FRfA0pma6Im4TB8eliTvFs1lfNzCf56LEBjqkAXCgTZnrptOPFnkzxQ1if57wsX%2Bs6uz2jrc1fYGrQ2ZapztwNOAfUx45yQjrBaS9462Ol7afXFDq3vP%2F3ellZc8PAuCFynpe4DcfbPmZQTBGXyTjxqKkvk92Aj4rme7Vlrv1O0X90ZvwxKSngZhM4wuNnbacz%2Bx%2FhxZyr%2B7gkcUFj8%2B7HzS%2BywhkxQJt277qKsa3%2FjqWJSGetywELLHmvmfrKd7A&X-Amz-Signature=805ccc665a2cc0dc7fa58cb5a5a72f1f8f000aec0e3a3f00818659d7961b1ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
