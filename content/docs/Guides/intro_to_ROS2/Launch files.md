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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOUGZD4K%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQC4KlIdSnV3G0FF3%2F3Qgx%2BWufOSrNTlum2IJIw2VakfzwIhALWIHqz8wbTspmsFRorwpqalQN85tzQVrdzHoaYC5hD5Kv8DCGkQABoMNjM3NDIzMTgzODA1IgzopXurEmno4tW11pQq3AOf841D7xdqfGpnxL9widJNnZGA21zEK37LPnwRGR%2Bx%2Bm%2F1Mjs2Te08%2F7GngwjeWWkGdJdMl8xmxYYz4p4Sd7RkAIRb7LEbfO65ByMxXqBIWIlRvxLMQNEQiMFDlG7EzJBpmbvlm%2Bp1uoOynDPS6BrRC%2FtSXVVX6Y2azDti%2B%2B3esVdo15oqAdGvoAsuY%2Bm%2FF9FWElkLJjNYilgDGkL0FuWcB%2BpFR61sQBow2UU8Chts5HoD3uZRazBy0ubnNOFuKjDVghqN5sSymRmo%2FbuRmgz5B19Gr7vsJLvxXjcbYYn%2BqawNNW5JIjTkw%2Fa4ocn2KtSBaeDaPI28axm%2FBhDmr8sfTMYfqw2aHFeH0aboW2CEXSyeIvMSnOH%2FNYNqwtGWhC62wXlfuucFsZVlYIDOjTYL%2FoJjNtSbVyURftom5z%2BjWy%2B6T1HHTZjMSsf2oDXTmULhh8TZmcqsuPzc8ATrGUB85gRNm1zLNLpLVcLJsXBIQAh%2BwmSptC5yexNx7ctpt%2Fns3aGarYCcaCBZNp4FiaN751bSU5fGLwlnAe5PuX%2FYyypFqk8hnzFJsa0Nxa38cZCkl1HnSC4fHAkpj420jQkhk8IpvhshbaFSr5L%2Fzjmy%2BAxcSOW0iojZUtvYpDCPgcq9BjqkAT3n2JHBtW%2F2w%2FWXFKAk18EjSET4B2hD3NNeLcdso6rzCXXPSGIMeZ23t%2FRw%2FdRJR1CJWX7zq4Brh%2F82BweIuB7FfvG18jTgEvjVRgWbSXQZsWO5ImERt6wGul8yG%2FLUOt9c7C3Qr9Z%2BMtvQ%2FD7KWnmVcp1RRsqlkBbORJ1BFDgs5ByyzZcAjDgGYZ%2B%2ByMKjvN7vblwOZ9CfcbrmLFuLm3%2FY7akT&X-Amz-Signature=0883df1e0b55d605db2688a4d30b5d2840a0a18ba2ffdea8a0e58b8e1955947e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOUGZD4K%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQC4KlIdSnV3G0FF3%2F3Qgx%2BWufOSrNTlum2IJIw2VakfzwIhALWIHqz8wbTspmsFRorwpqalQN85tzQVrdzHoaYC5hD5Kv8DCGkQABoMNjM3NDIzMTgzODA1IgzopXurEmno4tW11pQq3AOf841D7xdqfGpnxL9widJNnZGA21zEK37LPnwRGR%2Bx%2Bm%2F1Mjs2Te08%2F7GngwjeWWkGdJdMl8xmxYYz4p4Sd7RkAIRb7LEbfO65ByMxXqBIWIlRvxLMQNEQiMFDlG7EzJBpmbvlm%2Bp1uoOynDPS6BrRC%2FtSXVVX6Y2azDti%2B%2B3esVdo15oqAdGvoAsuY%2Bm%2FF9FWElkLJjNYilgDGkL0FuWcB%2BpFR61sQBow2UU8Chts5HoD3uZRazBy0ubnNOFuKjDVghqN5sSymRmo%2FbuRmgz5B19Gr7vsJLvxXjcbYYn%2BqawNNW5JIjTkw%2Fa4ocn2KtSBaeDaPI28axm%2FBhDmr8sfTMYfqw2aHFeH0aboW2CEXSyeIvMSnOH%2FNYNqwtGWhC62wXlfuucFsZVlYIDOjTYL%2FoJjNtSbVyURftom5z%2BjWy%2B6T1HHTZjMSsf2oDXTmULhh8TZmcqsuPzc8ATrGUB85gRNm1zLNLpLVcLJsXBIQAh%2BwmSptC5yexNx7ctpt%2Fns3aGarYCcaCBZNp4FiaN751bSU5fGLwlnAe5PuX%2FYyypFqk8hnzFJsa0Nxa38cZCkl1HnSC4fHAkpj420jQkhk8IpvhshbaFSr5L%2Fzjmy%2BAxcSOW0iojZUtvYpDCPgcq9BjqkAT3n2JHBtW%2F2w%2FWXFKAk18EjSET4B2hD3NNeLcdso6rzCXXPSGIMeZ23t%2FRw%2FdRJR1CJWX7zq4Brh%2F82BweIuB7FfvG18jTgEvjVRgWbSXQZsWO5ImERt6wGul8yG%2FLUOt9c7C3Qr9Z%2BMtvQ%2FD7KWnmVcp1RRsqlkBbORJ1BFDgs5ByyzZcAjDgGYZ%2B%2ByMKjvN7vblwOZ9CfcbrmLFuLm3%2FY7akT&X-Amz-Signature=1f3e8ac19f417f84846215ef6370f6223d706f7b680aaa0f63f873fb70aced12&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOUGZD4K%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQC4KlIdSnV3G0FF3%2F3Qgx%2BWufOSrNTlum2IJIw2VakfzwIhALWIHqz8wbTspmsFRorwpqalQN85tzQVrdzHoaYC5hD5Kv8DCGkQABoMNjM3NDIzMTgzODA1IgzopXurEmno4tW11pQq3AOf841D7xdqfGpnxL9widJNnZGA21zEK37LPnwRGR%2Bx%2Bm%2F1Mjs2Te08%2F7GngwjeWWkGdJdMl8xmxYYz4p4Sd7RkAIRb7LEbfO65ByMxXqBIWIlRvxLMQNEQiMFDlG7EzJBpmbvlm%2Bp1uoOynDPS6BrRC%2FtSXVVX6Y2azDti%2B%2B3esVdo15oqAdGvoAsuY%2Bm%2FF9FWElkLJjNYilgDGkL0FuWcB%2BpFR61sQBow2UU8Chts5HoD3uZRazBy0ubnNOFuKjDVghqN5sSymRmo%2FbuRmgz5B19Gr7vsJLvxXjcbYYn%2BqawNNW5JIjTkw%2Fa4ocn2KtSBaeDaPI28axm%2FBhDmr8sfTMYfqw2aHFeH0aboW2CEXSyeIvMSnOH%2FNYNqwtGWhC62wXlfuucFsZVlYIDOjTYL%2FoJjNtSbVyURftom5z%2BjWy%2B6T1HHTZjMSsf2oDXTmULhh8TZmcqsuPzc8ATrGUB85gRNm1zLNLpLVcLJsXBIQAh%2BwmSptC5yexNx7ctpt%2Fns3aGarYCcaCBZNp4FiaN751bSU5fGLwlnAe5PuX%2FYyypFqk8hnzFJsa0Nxa38cZCkl1HnSC4fHAkpj420jQkhk8IpvhshbaFSr5L%2Fzjmy%2BAxcSOW0iojZUtvYpDCPgcq9BjqkAT3n2JHBtW%2F2w%2FWXFKAk18EjSET4B2hD3NNeLcdso6rzCXXPSGIMeZ23t%2FRw%2FdRJR1CJWX7zq4Brh%2F82BweIuB7FfvG18jTgEvjVRgWbSXQZsWO5ImERt6wGul8yG%2FLUOt9c7C3Qr9Z%2BMtvQ%2FD7KWnmVcp1RRsqlkBbORJ1BFDgs5ByyzZcAjDgGYZ%2B%2ByMKjvN7vblwOZ9CfcbrmLFuLm3%2FY7akT&X-Amz-Signature=d1e5738e2853cebeadf27b51f53de0ad826ab564445c22bf039e3d551581664c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
