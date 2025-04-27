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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB3O4Z2L%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0f97gf1bHrb4uaHg%2BuBfnBQMLWCV7n7VYumugrsR%2FVAiEA20QcV0CScDGziw1kHVubs426VefEl8NqJFlgox%2FZYy8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDEZNVZfKQ8ONBK8icyrcA1jl5ES5CRRPaCOjRWargNRcClv4bTak2SLOZFbSy0sWDpWDUY3qAvbiR4v8ynjLyz403Ud8ax1Y1%2FDBqKzHNYzz%2BSLKPfaqAUTZ47Inzu%2FH0kLhxsrQugOQRhlBL%2BDpXgOarVQRw7BCUhGGZOJPt0FwnTVxL%2B%2FfkHpYx0Owst%2F4S0vMd8CERUjsz7c2PDhRAmuSZeUwdoglnnaxiIco0vqkxBIlk6XyCZsk41Iws57%2B0AUUHerKc7GVKzW%2Bso6sVQumacSEp%2FhCUbg%2Fx%2FPpKjiukuhJwHLygXKG2JqJ4blIGx%2BcexeTiU9yT2Q8RsgmgcbpeU87uQ%2BIKmUSRz%2BM84Nx5SRMpVKsWlPKxGwRIwE5nBfzlBF8h9Lyb8uHiNK2gwbUJcRyB7SQIwKZEfaMIgQtIRKiehl2lGplCau6MwhvF4Iz1YIEXsC07zfxRY7%2F%2B%2F6kxj8wGbEuqD1gqjlhRmO4dgnp%2Bn%2Fa3Kafv2nvN1Es8EpKvlfStbqdgrtKfgJuWnjHflwej%2BnlbCdcx2qh2BR7Tf4WCZ%2B0jNiDCGiBhPZUs0cXJTsCDrrSdMq8ectEW4Reo5k8p24skKEIq0FiApYqaSYdd6C6Dzpfu2wfWq9Z0FlUeyXqAl%2FsJGk%2BMOGKusAGOqUBef7baQPHPYTU0wDB%2FbvOHfvOpjk%2F7jKhxvkLDENp%2FsXWn6pkGKVD1RanfNfEIv9vQOF0VXcPrTEQLTBlCOyYMTQAONDYKAA37a2s9d0JkQrTOGI3W7b8E48ChCOL3W99%2FoDnkRcy808jRFFPbFyPeoR4UYO5A0Nz5lMUa1x3nGr6Z9G0ELIky7KQhT4Hhqdkrm2prRv0TTA7V8qZfAK9NNf8%2B5yC&X-Amz-Signature=885b1558682747f4d7ededc2cb86feea350db0e46054849c808d9592c52e3007&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB3O4Z2L%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0f97gf1bHrb4uaHg%2BuBfnBQMLWCV7n7VYumugrsR%2FVAiEA20QcV0CScDGziw1kHVubs426VefEl8NqJFlgox%2FZYy8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDEZNVZfKQ8ONBK8icyrcA1jl5ES5CRRPaCOjRWargNRcClv4bTak2SLOZFbSy0sWDpWDUY3qAvbiR4v8ynjLyz403Ud8ax1Y1%2FDBqKzHNYzz%2BSLKPfaqAUTZ47Inzu%2FH0kLhxsrQugOQRhlBL%2BDpXgOarVQRw7BCUhGGZOJPt0FwnTVxL%2B%2FfkHpYx0Owst%2F4S0vMd8CERUjsz7c2PDhRAmuSZeUwdoglnnaxiIco0vqkxBIlk6XyCZsk41Iws57%2B0AUUHerKc7GVKzW%2Bso6sVQumacSEp%2FhCUbg%2Fx%2FPpKjiukuhJwHLygXKG2JqJ4blIGx%2BcexeTiU9yT2Q8RsgmgcbpeU87uQ%2BIKmUSRz%2BM84Nx5SRMpVKsWlPKxGwRIwE5nBfzlBF8h9Lyb8uHiNK2gwbUJcRyB7SQIwKZEfaMIgQtIRKiehl2lGplCau6MwhvF4Iz1YIEXsC07zfxRY7%2F%2B%2F6kxj8wGbEuqD1gqjlhRmO4dgnp%2Bn%2Fa3Kafv2nvN1Es8EpKvlfStbqdgrtKfgJuWnjHflwej%2BnlbCdcx2qh2BR7Tf4WCZ%2B0jNiDCGiBhPZUs0cXJTsCDrrSdMq8ectEW4Reo5k8p24skKEIq0FiApYqaSYdd6C6Dzpfu2wfWq9Z0FlUeyXqAl%2FsJGk%2BMOGKusAGOqUBef7baQPHPYTU0wDB%2FbvOHfvOpjk%2F7jKhxvkLDENp%2FsXWn6pkGKVD1RanfNfEIv9vQOF0VXcPrTEQLTBlCOyYMTQAONDYKAA37a2s9d0JkQrTOGI3W7b8E48ChCOL3W99%2FoDnkRcy808jRFFPbFyPeoR4UYO5A0Nz5lMUa1x3nGr6Z9G0ELIky7KQhT4Hhqdkrm2prRv0TTA7V8qZfAK9NNf8%2B5yC&X-Amz-Signature=d2b9e83aa96e6ec1335377ec31a48615404f5d57c22b66eb940ac4b870e05ab4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB3O4Z2L%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0f97gf1bHrb4uaHg%2BuBfnBQMLWCV7n7VYumugrsR%2FVAiEA20QcV0CScDGziw1kHVubs426VefEl8NqJFlgox%2FZYy8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDEZNVZfKQ8ONBK8icyrcA1jl5ES5CRRPaCOjRWargNRcClv4bTak2SLOZFbSy0sWDpWDUY3qAvbiR4v8ynjLyz403Ud8ax1Y1%2FDBqKzHNYzz%2BSLKPfaqAUTZ47Inzu%2FH0kLhxsrQugOQRhlBL%2BDpXgOarVQRw7BCUhGGZOJPt0FwnTVxL%2B%2FfkHpYx0Owst%2F4S0vMd8CERUjsz7c2PDhRAmuSZeUwdoglnnaxiIco0vqkxBIlk6XyCZsk41Iws57%2B0AUUHerKc7GVKzW%2Bso6sVQumacSEp%2FhCUbg%2Fx%2FPpKjiukuhJwHLygXKG2JqJ4blIGx%2BcexeTiU9yT2Q8RsgmgcbpeU87uQ%2BIKmUSRz%2BM84Nx5SRMpVKsWlPKxGwRIwE5nBfzlBF8h9Lyb8uHiNK2gwbUJcRyB7SQIwKZEfaMIgQtIRKiehl2lGplCau6MwhvF4Iz1YIEXsC07zfxRY7%2F%2B%2F6kxj8wGbEuqD1gqjlhRmO4dgnp%2Bn%2Fa3Kafv2nvN1Es8EpKvlfStbqdgrtKfgJuWnjHflwej%2BnlbCdcx2qh2BR7Tf4WCZ%2B0jNiDCGiBhPZUs0cXJTsCDrrSdMq8ectEW4Reo5k8p24skKEIq0FiApYqaSYdd6C6Dzpfu2wfWq9Z0FlUeyXqAl%2FsJGk%2BMOGKusAGOqUBef7baQPHPYTU0wDB%2FbvOHfvOpjk%2F7jKhxvkLDENp%2FsXWn6pkGKVD1RanfNfEIv9vQOF0VXcPrTEQLTBlCOyYMTQAONDYKAA37a2s9d0JkQrTOGI3W7b8E48ChCOL3W99%2FoDnkRcy808jRFFPbFyPeoR4UYO5A0Nz5lMUa1x3nGr6Z9G0ELIky7KQhT4Hhqdkrm2prRv0TTA7V8qZfAK9NNf8%2B5yC&X-Amz-Signature=2f0279d56246beb9df107045805943ee22fe2174b25fa5cb1ef447bda7e35224&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
