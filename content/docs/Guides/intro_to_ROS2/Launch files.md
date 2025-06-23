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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNMJOLP2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIEuOV0tSPYASphnbWGnvpTmW3Mn0FcJEOL6Kk53fAh7aAiAbUBp5YGX0Q%2B9lXKmKAD84NJ%2FEXHX65NstbYwZ5CaxByr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM%2FxgJgOSnkmmcGClGKtwDtYnZA4NAamXHONtMeYKN%2FW0LH3faUwGec44TuMS%2B8awajNmMy5D9ry3pk8i4F12feR%2FCZR1TqiGNglcerDR04DkRGsdjdcOCBxezI00i1IH0eNLE9OwIUMFLRDmhNeFm7e9z8oKMvjievFbvowrLohG5h5Cc4jpyeMG4iH0CX3ch%2Be%2FScX3RVbTyW1zqLD0sefWoKBjQyUd9XOaxq0eAYOAuuWwOmNjYqusLjHZzLbT5OKIaZRNMCMawLApqEtnGAKGnA80JrfGIl%2BXZGCecH%2Fz%2Byb58tdYkLxSjnE7S08cjnbu5lxz%2FXZN0VM3JFr4hKsFbc4aWIS9C4VzeOLzOZgcwp01ZoWTb3F%2FI0Ld76HyuJiG5HriIl34Hy4flTNiMAHhlDnFpgXT4dxc2OaZ45NT7lL%2B%2BPwXOEePY47oRFKx8L9hnQrmcFwtLxUYZtJ1RzTxAT8DUbCGGzDhFSA8k9Q%2BPtGF3U%2BjZA2Zi%2FmNL33VC2nOi4WJq1AEdWvS%2BDXrhs%2Fh5TKwZ7TrL4DOJ90HifpV2PyX4%2FmI%2BMhlcM16xT8SuL4gq71LpSc2R46EG0A7PQ7J32HC9QNa%2FbmVGbat4bBqh7UjlXJrAM1Skn5h6%2FY%2By0EoO3L7ddf8Ffc8wh%2FPkwgY6pgFNc8Pf9Jt26Mu7evYR3%2BpSbnWCxXwTu6XcLx1XXpLSZBlTJPn95QA%2F2uMzt7pwPYxCYZQWdW7m3mCsTBmephZ6LJvzXqj60tXnZs4LLxIfoftWitFm14bSPDO9uIcBPZuwljs839Qd0tDL%2BY1u8lKZJ7KqWz6PcLtVjXm%2BxeXfPzQHAmcMsJRm%2B9qMt5K3tCwI7PgbqVr6CT34yXX3t3tlIE9aVUw0&X-Amz-Signature=2346ff01ac62ddc50a442da7ec6466d32cfb494f98d6893ac3763295b141d03a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNMJOLP2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIEuOV0tSPYASphnbWGnvpTmW3Mn0FcJEOL6Kk53fAh7aAiAbUBp5YGX0Q%2B9lXKmKAD84NJ%2FEXHX65NstbYwZ5CaxByr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM%2FxgJgOSnkmmcGClGKtwDtYnZA4NAamXHONtMeYKN%2FW0LH3faUwGec44TuMS%2B8awajNmMy5D9ry3pk8i4F12feR%2FCZR1TqiGNglcerDR04DkRGsdjdcOCBxezI00i1IH0eNLE9OwIUMFLRDmhNeFm7e9z8oKMvjievFbvowrLohG5h5Cc4jpyeMG4iH0CX3ch%2Be%2FScX3RVbTyW1zqLD0sefWoKBjQyUd9XOaxq0eAYOAuuWwOmNjYqusLjHZzLbT5OKIaZRNMCMawLApqEtnGAKGnA80JrfGIl%2BXZGCecH%2Fz%2Byb58tdYkLxSjnE7S08cjnbu5lxz%2FXZN0VM3JFr4hKsFbc4aWIS9C4VzeOLzOZgcwp01ZoWTb3F%2FI0Ld76HyuJiG5HriIl34Hy4flTNiMAHhlDnFpgXT4dxc2OaZ45NT7lL%2B%2BPwXOEePY47oRFKx8L9hnQrmcFwtLxUYZtJ1RzTxAT8DUbCGGzDhFSA8k9Q%2BPtGF3U%2BjZA2Zi%2FmNL33VC2nOi4WJq1AEdWvS%2BDXrhs%2Fh5TKwZ7TrL4DOJ90HifpV2PyX4%2FmI%2BMhlcM16xT8SuL4gq71LpSc2R46EG0A7PQ7J32HC9QNa%2FbmVGbat4bBqh7UjlXJrAM1Skn5h6%2FY%2By0EoO3L7ddf8Ffc8wh%2FPkwgY6pgFNc8Pf9Jt26Mu7evYR3%2BpSbnWCxXwTu6XcLx1XXpLSZBlTJPn95QA%2F2uMzt7pwPYxCYZQWdW7m3mCsTBmephZ6LJvzXqj60tXnZs4LLxIfoftWitFm14bSPDO9uIcBPZuwljs839Qd0tDL%2BY1u8lKZJ7KqWz6PcLtVjXm%2BxeXfPzQHAmcMsJRm%2B9qMt5K3tCwI7PgbqVr6CT34yXX3t3tlIE9aVUw0&X-Amz-Signature=feac14fc7318502af64368aaaa8a59ac9119279bfbce3565102f07002a64ff01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNMJOLP2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIEuOV0tSPYASphnbWGnvpTmW3Mn0FcJEOL6Kk53fAh7aAiAbUBp5YGX0Q%2B9lXKmKAD84NJ%2FEXHX65NstbYwZ5CaxByr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM%2FxgJgOSnkmmcGClGKtwDtYnZA4NAamXHONtMeYKN%2FW0LH3faUwGec44TuMS%2B8awajNmMy5D9ry3pk8i4F12feR%2FCZR1TqiGNglcerDR04DkRGsdjdcOCBxezI00i1IH0eNLE9OwIUMFLRDmhNeFm7e9z8oKMvjievFbvowrLohG5h5Cc4jpyeMG4iH0CX3ch%2Be%2FScX3RVbTyW1zqLD0sefWoKBjQyUd9XOaxq0eAYOAuuWwOmNjYqusLjHZzLbT5OKIaZRNMCMawLApqEtnGAKGnA80JrfGIl%2BXZGCecH%2Fz%2Byb58tdYkLxSjnE7S08cjnbu5lxz%2FXZN0VM3JFr4hKsFbc4aWIS9C4VzeOLzOZgcwp01ZoWTb3F%2FI0Ld76HyuJiG5HriIl34Hy4flTNiMAHhlDnFpgXT4dxc2OaZ45NT7lL%2B%2BPwXOEePY47oRFKx8L9hnQrmcFwtLxUYZtJ1RzTxAT8DUbCGGzDhFSA8k9Q%2BPtGF3U%2BjZA2Zi%2FmNL33VC2nOi4WJq1AEdWvS%2BDXrhs%2Fh5TKwZ7TrL4DOJ90HifpV2PyX4%2FmI%2BMhlcM16xT8SuL4gq71LpSc2R46EG0A7PQ7J32HC9QNa%2FbmVGbat4bBqh7UjlXJrAM1Skn5h6%2FY%2By0EoO3L7ddf8Ffc8wh%2FPkwgY6pgFNc8Pf9Jt26Mu7evYR3%2BpSbnWCxXwTu6XcLx1XXpLSZBlTJPn95QA%2F2uMzt7pwPYxCYZQWdW7m3mCsTBmephZ6LJvzXqj60tXnZs4LLxIfoftWitFm14bSPDO9uIcBPZuwljs839Qd0tDL%2BY1u8lKZJ7KqWz6PcLtVjXm%2BxeXfPzQHAmcMsJRm%2B9qMt5K3tCwI7PgbqVr6CT34yXX3t3tlIE9aVUw0&X-Amz-Signature=7d8bac135cb1380d0f48c88a7f7dae0a993d12ed2e946c6244a4f2b78d6fed1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
